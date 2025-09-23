import { Credential, DynamicCredential, CredentialResult } from "./interface"
import fetch from "./http/fetch"

const META_URL = "http://metadata.tencentyun.com/latest/meta-data/"
const ROLE_URL = META_URL + "cam/security-credentials/"
const EXPIRE_BUFFER = 30 * 1000

interface CvmRoleCredentialResult extends CredentialResult {
  Code: string
}

/**
 * Tencent Cloud Credential via CVM role
 *
 * Automatically generates temporary credentials when binding a service role to instance.
 * @see {@link https://cloud.tencent.com/document/product/598/85616} for more information.
 */
export default class CvmRoleCredential implements DynamicCredential {
  protected roleNameTask: Promise<string> | null
  protected credentialTask: Promise<CvmRoleCredentialResult> | null

  // Method to fetch the role name from the metadata server
  protected async getRoleName() {
    const response = await fetch(ROLE_URL, {})
    if (!response.ok) {
      throw new Error("Get cvm role name failed, Please confirm whether the role is bound")
    }
    return await response.text()
  }

  // Method to fetch credentials for a given role name
  protected async getRoleCredential(roleName: string): Promise<CvmRoleCredentialResult> {
    const response = await fetch(ROLE_URL + roleName, {})
    if (!response.ok) {
      throw new Error(
        `Get credential from metadata server by role name ${roleName} failed, http code: ${response.status}`
      )
    }
    const json: CvmRoleCredentialResult = await response.json()
    if (json.Code !== "Success") {
      throw new Error(
        `Get credential from metadata server by role name ${roleName} failed, Code: ${json.Code}`
      )
    }
    return json
  }

  // Method to get the current credential, refreshing if expired
  async getCredential(): Promise<Credential> {
    if (!this.roleNameTask) {
      this.roleNameTask = this.getRoleName()
    }
    const roleName = await this.roleNameTask
    if (!this.credentialTask) {
      this.credentialTask = this.getRoleCredential(roleName)
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
