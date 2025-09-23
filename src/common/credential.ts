import { ClientConfig, Credential, CredentialResult, DynamicCredential } from "./interface"
import fs from "fs"
import path from "path"
import { homedir } from "os"
import { parse }  from 'ini'
import { CommonClient } from "./common_client"
import CvmRoleCredential from "./cvm_role_credential"

const EXPIRE_BUFFER = 30 * 1000

/**
 * Basic credential with secret id and secret key
 */
export class BasicCredential implements Credential {
  constructor(
    public readonly secretId: string,
    public readonly secretKey: string,
    public readonly token?: string
  ) {}
}

/**
 * Environment variable credential
 * Get credential from environment variables:
 * - TENCENTCLOUD_SECRET_ID
 * - TENCENTCLOUD_SECRET_KEY
 * - TENCENTCLOUD_SESSION_TOKEN (optional)
 */
export class EnvironmentVariableCredential implements DynamicCredential {
  async getCredential(): Promise<Credential> {
    const secretId = process.env.TENCENTCLOUD_SECRET_ID
    const secretKey = process.env.TENCENTCLOUD_SECRET_KEY
    const token = process.env.TENCENTCLOUD_SESSION_TOKEN

    return new BasicCredential(secretId, secretKey, token)
  }
}

/**
 * Profile credential
 * Get credential from profile file ~/.tencentcloud/credentials or /etc/tencentcloud/credentials
 * example credentials file:
 * [default]
 * secret_id = your-secret-id
 * secret_key = your-secret-key
 */
export class ProfileCredential implements DynamicCredential {
  async getCredential(): Promise<Credential> {
    let filePath = ''
    // Try user home directory first
    const userHome = homedir();
    const userCredentialsPath = path.join(userHome, ".tencentcloud", "credentials")
    if (fs.existsSync(userCredentialsPath)) {
        filePath = userCredentialsPath
    } else {
        // Try system directory as fallback
        filePath = '/etc/tencentcloud/credentials'
    }

    if (filePath) {
      try {
        const content = fs.readFileSync(filePath, "utf8")
        const { default: { secret_id, secret_key, token } } = parse(content)
        
        if (secret_id && secret_key) {
          return new BasicCredential(secret_id, secret_key, token)
        }
      } catch (error) {
        // Ignore errors when reading user credentials
      }
    }

    return new BasicCredential('', '')
  }
}

interface AssumeRoleParams {
  RoleArn: string
  RoleSessionName: string
  [key: string]: any
}
/**
 * Tencent Cloud Credential via STS service
 * @see {@link https://cloud.tencent.com/document/api/1312/48197} for more information.
 */
export class STSCredential implements DynamicCredential {
  private endpoint = 'sts.tencentcloudapi.com';
  private version = '2018-08-13';
  private action = 'AssumeRole';
  private region = 'ap-guangzhou'
  credentialTask: Promise<CredentialResult> | null

  /**
   * Constructs a new STSCredential instance
   * 
   * @param {ClientConfig} clientConfig Request client Configuration object
   * @param {AssumeRoleParams} assumeRoleParams Request parameters of the AssumeRole interface
   * @see {@link https://cloud.tencent.com/document/api/1312/48197} for more AssumeRoleParams information.
   */
  constructor(private clientConfig: ClientConfig, private assumeRoleParams: AssumeRoleParams) {}

  protected async getCredentialWithStsAssumeRole(): Promise<CredentialResult> {
    const { endpoint, version, action, region, clientConfig, assumeRoleParams} = this
    try {
      const client = new CommonClient(
        endpoint,
        version,
        {
          region,
          ...clientConfig
        }
      );
      const result = await client.request(action, assumeRoleParams)
  
      return {
        TmpSecretId: result.Credentials.TmpSecretId,
        TmpSecretKey: result.Credentials.TmpSecretKey,
        Token: result.Credentials.Token,
        ExpiredTime: result.ExpiredTime,
        Expiration: result.Expiration,
      }
    } catch(error) {
      throw new Error(`Get STS AssumeRole failed: ${(error as any).message}`)
    }
  }

  async getCredential(): Promise<Credential> {
    if (!this.credentialTask) {
      this.credentialTask = this.getCredentialWithStsAssumeRole()
    }

    const credential = await this.credentialTask
    // Check if the credential is expired
    if (credential.ExpiredTime * 1000 - EXPIRE_BUFFER <= Date.now()) {
      this.credentialTask = null
      return this.getCredential()
    }

    return {
      secretId: credential.TmpSecretId,
      secretKey: credential.TmpSecretKey,
      token: credential.Token,
    }
  }
}

/**
 * CVM Role credential using existing implementation
 * Re-export the existing CvmRoleCredential for consistency
 */
export { default as CvmRoleCredential } from "./cvm_role_credential"

/**
 * TencentCloud OIDC Credential
 * OIDC is an authentication protocol built on OAuth 2.0. Tencent Cloud CAM supports OIDC role-based SSO.
 * @see {@link https://cloud.tencent.com/document/product/598/96013} for more information.
 */
export class OIDCRoleArnCredential implements DynamicCredential {
  private endpoint = 'sts.tencentcloudapi.com';
  private version = '2018-08-13';
  private action = 'AssumeRoleWithWebIdentity';
  private clientConfig: ClientConfig;
  private assumeRoleWithWebIdentityParams: AssumeRoleParams;
  private defaultSessionName = 'tencentcloud-node-sdk-'
  private isTke = false;
  protected region: string;
  protected expirationReservationTime = 600
  protected credentialTask: Promise<CredentialResult> | null

  /**
   * Constructs a new OIDCRoleArnCredential instance
   * 
   * @param {ClientConfig} [clientConfig] Optional request client Configuration object
   * @param {AssumeRoleParams} [assumeRoleParams] Optional request parameters of the AssumeRole interface
   * @see {@link https://cloud.tencent.com/document/api/1312/48197} for more AssumeRoleWithWebIdentity information.
   */
  constructor();
  constructor(clientConfig: ClientConfig, assumeRoleWithWebIdentityParams: AssumeRoleParams);
  constructor(clientConfig?: ClientConfig, assumeRoleWithWebIdentityParams?: AssumeRoleParams) {
    if (clientConfig && assumeRoleWithWebIdentityParams) {
      this.clientConfig = clientConfig;
      this.assumeRoleWithWebIdentityParams = assumeRoleWithWebIdentityParams;
    } else {
      this.isTke = true;
      this.clientConfig = {
        credential: new BasicCredential('', ''),
        ...clientConfig,
      }
    }
  }

  private initFromTke() {
    const region = process.env.TKE_REGION
    if (!region) {
      throw new Error('env TKE_REGION not exist')
    }

    const providerId = process.env.TKE_PROVIDER_ID
    if (!providerId) {
      throw new Error('env TKE_PROVIDER_ID not exist')
    }

    const tokenFile = process.env.TKE_WEB_IDENTITY_TOKEN_FILE
    if (!tokenFile) {
      throw new Error('env TKE_WEB_IDENTITY_TOKEN_FILE not exist')
    }
    let wbIdentityToken: string
    try {
      wbIdentityToken = fs.readFileSync(tokenFile).toString()
    } catch (error) {
      throw new Error(`failed to read token file: ${(error as any).message}`)
    }

    const roleArn = process.env.TKE_ROLE_ARN
    if (!roleArn) {
      throw new Error('env TKE_ROLE_ARN not exist')
    }

    this.clientConfig.region = region;
    this.assumeRoleWithWebIdentityParams = {
      RoleArn: roleArn,
      RoleSessionName: `${this.defaultSessionName}${Date.now() * 1000}`,
      WebIdentityToken: wbIdentityToken,
      ProviderId: providerId,
    }
  }
  
  protected async getCredentialWithStsAssumeRoleWithWebIdentity(): Promise<CredentialResult> {
    try {
      if (this.isTke) {
        this.initFromTke()
      }

      const {endpoint, version, action, region, clientConfig, assumeRoleWithWebIdentityParams} = this
      const client = new CommonClient(
        endpoint,
        version,
        {
          region: region,
          ...clientConfig,
        }
      );
      const result = await client.request(action, assumeRoleWithWebIdentityParams)
  
      return {
        TmpSecretId: result.Credentials.TmpSecretId,
        TmpSecretKey: result.Credentials.TmpSecretKey,
        Token: result.Credentials.Token,
        ExpiredTime: result.ExpiredTime,
        Expiration: result.Expiration,
      }
    } catch(error) {
      throw new Error(`Get STS AssumeRoleWithWebIdentity failed: ${(error as any).message}`)
    }
  }

  async getCredential(): Promise<Credential> {
    if (!this.credentialTask) {
      this.credentialTask = this.getCredentialWithStsAssumeRoleWithWebIdentity()
    }

    const credential = await this.credentialTask
    // Check if the credential is expired
    if (credential.ExpiredTime * 1000 - this.expirationReservationTime <= Date.now()) {
      this.credentialTask = null
      return this.getCredential()
    }

    return {
      secretId: credential.TmpSecretId,
      secretKey: credential.TmpSecretKey,
      token: credential.Token,
    }
  }
}

/**
 * Tencent Cloud DefaultCredentialProvider
 */
export class DefaultCredentialProvider implements DynamicCredential {
  private readonly providers: DynamicCredential[]

  constructor() {
    this.providers = [
      new EnvironmentVariableCredential(),
      new ProfileCredential(),
      new CvmRoleCredential(),
      new OIDCRoleArnCredential()
    ]
  }

  async getCredential(): Promise<Credential> {
    for (const provider of this.providers) {
      try {
        const credential = await provider.getCredential()
        if (credential.secretId && credential.secretKey) {
          return credential
        }
      } catch (error) {
        // Continue to next provider if current one fails
        console.error(error)
        continue
      }
    }
    
    return new BasicCredential('', '')
  }
}
