import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'fs'
import { homedir } from 'os'
import path from 'path'
import { parse } from 'ini'
import {
  BasicCredential,
  EnvironmentVariableCredential,
  ProfileCredential,
  STSCredential,
  OIDCRoleArnCredential,
  DefaultCredentialProvider,
  CvmRoleCredential
} from 'common/credential'
import { CommonClient } from 'common/common_client'

// Mock dependencies
vi.mock('fs')
vi.mock('os', () => ({
  homedir: vi.fn()
}))
vi.mock('ini')
vi.mock('common/cvm_role_credential')

// Mock CommonClient with detailed implementation
vi.mock('common/common_client', () => {
  return {
    CommonClient: vi.fn().mockImplementation(() => ({
      request: vi.fn()
    }))
  }
})

const mockedFs = vi.mocked(fs)
const mockedHomedir = vi.mocked(homedir)
const mockedParse = vi.mocked(parse)
const MockedCommonClient = vi.mocked(CommonClient)
const mockedCvmRoleCredential = vi.mocked(CvmRoleCredential)

describe('BasicCredential', () => {
  it('should create basic credential with secretId and secretKey', () => {
    const credential = new BasicCredential('test-id', 'test-key')
    
    expect(credential.secretId).toBe('test-id')
    expect(credential.secretKey).toBe('test-key')
    expect(credential.token).toBeUndefined()
  })

  it('should create basic credential with token', () => {
    const credential = new BasicCredential('test-id', 'test-key', 'test-token')
    
    expect(credential.secretId).toBe('test-id')
    expect(credential.secretKey).toBe('test-key')
    expect(credential.token).toBe('test-token')
  })
})

describe('EnvironmentVariableCredential', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    delete process.env.TENCENTCLOUD_SECRET_ID
    delete process.env.TENCENTCLOUD_SECRET_KEY
    delete process.env.TENCENTCLOUD_SESSION_TOKEN
  })

  it('should get credential from environment variables', async () => {
    process.env.TENCENTCLOUD_SECRET_ID = 'env-secret-id'
    process.env.TENCENTCLOUD_SECRET_KEY = 'env-secret-key'
    process.env.TENCENTCLOUD_SESSION_TOKEN = 'env-token'

    const envCredential = new EnvironmentVariableCredential()
    const credential = await envCredential.getCredential()

    expect(credential.secretId).toBe('env-secret-id')
    expect(credential.secretKey).toBe('env-secret-key')
    expect(credential.token).toBe('env-token')
  })

  it('should get credential without token', async () => {
    process.env.TENCENTCLOUD_SECRET_ID = 'env-secret-id'
    process.env.TENCENTCLOUD_SECRET_KEY = 'env-secret-key'

    const envCredential = new EnvironmentVariableCredential()
    const credential = await envCredential.getCredential()

    expect(credential.secretId).toBe('env-secret-id')
    expect(credential.secretKey).toBe('env-secret-key')
    expect(credential.token).toBeUndefined()
  })

  it('should handle undefined environment variables', async () => {
    delete process.env.TENCENTCLOUD_SECRET_ID
    delete process.env.TENCENTCLOUD_SECRET_KEY

    const envCredential = new EnvironmentVariableCredential()
    const credential = await envCredential.getCredential()

    expect(credential.secretId).toBeUndefined()
    expect(credential.secretKey).toBeUndefined()
    expect(credential.token).toBeUndefined()
  })
})

describe('ProfileCredential', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should read credential from user home directory', async () => {
    const homePath = '/home/user'
    const credentialsPath = path.join(homePath, '.tencentcloud', 'credentials')
    
    mockedHomedir.mockReturnValue(homePath)
    mockedFs.existsSync.mockImplementation((filePath) => filePath === credentialsPath)
    mockedFs.readFileSync.mockReturnValue('[default]\nsecret_id=profile-id\nsecret_key=profile-key\ntoken=profile-token')
    mockedParse.mockReturnValue({
      default: {
        secret_id: 'profile-id',
        secret_key: 'profile-key',
        token: 'profile-token'
      }
    })

    const profileCredential = new ProfileCredential()
    const credential = await profileCredential.getCredential()

    expect(credential.secretId).toBe('profile-id')
    expect(credential.secretKey).toBe('profile-key')
    expect(credential.token).toBe('profile-token')
    expect(mockedFs.readFileSync).toHaveBeenCalledWith(credentialsPath, 'utf8')
  })

  it('should fallback to system directory when user directory not exists', async () => {
    const homePath = '/home/user'
    const systemCredentialsPath = '/etc/tencentcloud/credentials'
    
    mockedHomedir.mockReturnValue(homePath)
    mockedFs.existsSync.mockImplementation((filePath) => filePath === systemCredentialsPath)
    mockedFs.readFileSync.mockReturnValue('[default]\nsecret_id=system-id\nsecret_key=system-key')
    mockedParse.mockReturnValue({
      default: {
        secret_id: 'system-id',
        secret_key: 'system-key'
      }
    })

    const profileCredential = new ProfileCredential()
    const credential = await profileCredential.getCredential()

    expect(credential.secretId).toBe('system-id')
    expect(credential.secretKey).toBe('system-key')
    expect(mockedFs.readFileSync).toHaveBeenCalledWith(systemCredentialsPath, 'utf8')
  })

  it('should return empty credential when file read fails', async () => {
    const homePath = '/home/user'
    const credentialsPath = path.join(homePath, '.tencentcloud', 'credentials')
    
    mockedHomedir.mockReturnValue(homePath)
    mockedFs.existsSync.mockImplementation((filePath) => filePath === credentialsPath)
    mockedFs.readFileSync.mockImplementation(() => {
      throw new Error('File read error')
    })

    const profileCredential = new ProfileCredential()
    const credential = await profileCredential.getCredential()

    expect(credential.secretId).toBe('')
    expect(credential.secretKey).toBe('')
  })

  it('should return empty credential when no credentials file exists', async () => {
    mockedHomedir.mockReturnValue('/home/user')
    mockedFs.existsSync.mockReturnValue(false)

    const profileCredential = new ProfileCredential()
    const credential = await profileCredential.getCredential()

    expect(credential.secretId).toBe('')
    expect(credential.secretKey).toBe('')
  })
})

describe('STSCredential', () => {
  let mockClientInstance: any

  beforeEach(() => {
    vi.clearAllMocks()
    
    // Create a mock client instance
    mockClientInstance = {
      request: vi.fn()
    }
    
    // Mock CommonClient constructor to return our mock instance
    MockedCommonClient.mockImplementation(() => mockClientInstance)
  })

  it('should get credential via STS AssumeRole', async () => {
    // Mock the STS response
    const mockStsResponse = {
      Credentials: {
        TmpSecretId: 'sts-secret-id',
        TmpSecretKey: 'sts-secret-key',
        Token: 'sts-token'
      },
      ExpiredTime: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    mockClientInstance.request.mockResolvedValue(mockStsResponse)

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session' 
    }
    
    const stsCredential = new STSCredential(clientConfig, assumeRoleParams)
    const credential = await stsCredential.getCredential()

    // Verify the result
    expect(credential.secretId).toBe('sts-secret-id')
    expect(credential.secretKey).toBe('sts-secret-key')
    expect(credential.token).toBe('sts-token')
    
    // Verify CommonClient was called correctly
    expect(MockedCommonClient).toHaveBeenCalledWith(
      'sts.tencentcloudapi.com',
      '2018-08-13',
      {
        region: 'ap-guangzhou',
        credential: clientConfig.credential
      }
    )
    expect(mockClientInstance.request).toHaveBeenCalledWith('AssumeRole', assumeRoleParams)
  })

  it('should reuse cached credential if not expired', async () => {
    const mockStsResponse = {
      Credentials: {
        TmpSecretId: 'sts-secret-id',
        TmpSecretKey: 'sts-secret-key',
        Token: 'sts-token'
      },
      ExpiredTime: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    mockClientInstance.request.mockResolvedValue(mockStsResponse)

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session' 
    }
    
    const stsCredential = new STSCredential(clientConfig, assumeRoleParams)
    
    // First call
    await stsCredential.getCredential()
    // Second call should reuse cached result
    await stsCredential.getCredential()

    // Should only call the API once
    expect(mockClientInstance.request).toHaveBeenCalledTimes(1)
  })

  it('should refresh credential when expired', async () => {
    const expiredTime = Date.now() / 1000 - 100 // Already expired
    const mockStsResponse = {
      Credentials: {
        TmpSecretId: 'sts-secret-id',
        TmpSecretKey: 'sts-secret-key',
        Token: 'sts-token'
      },
      ExpiredTime: expiredTime,
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    // Mock multiple responses for recursive calls
    mockClientInstance.request.mockResolvedValue(mockStsResponse)
    mockClientInstance.request.mockResolvedValueOnce(mockStsResponse).mockResolvedValueOnce({
        ...mockStsResponse,
        ExpiredTime: Date.now() / 1000 + 100
    })

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session' 
    }
    
    const stsCredential = new STSCredential(clientConfig, assumeRoleParams)
    await stsCredential.getCredential()

    expect(mockClientInstance.request).toHaveBeenCalledTimes(2)
  })

  it('should throw error when STS request fails', async () => {
    const errorMessage = 'STS request failed'
    mockClientInstance.request.mockRejectedValue(new Error(errorMessage))

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session' 
    }
    
    const stsCredential = new STSCredential(clientConfig, assumeRoleParams)

    await expect(stsCredential.getCredential()).rejects.toThrow(`Get STS AssumeRole failed: ${errorMessage}`)
  })
})

describe('OIDCRoleArnCredential', () => {
  let mockClientInstance: any

  beforeEach(() => {
    vi.clearAllMocks()
    
    // Create a mock client instance
    mockClientInstance = {
      request: vi.fn()
    }
    
    // Mock CommonClient constructor to return our mock instance
    MockedCommonClient.mockImplementation(() => mockClientInstance)
    
    // Clean up environment variables
    delete process.env.TKE_REGION
    delete process.env.TKE_PROVIDER_ID
    delete process.env.TKE_WEB_IDENTITY_TOKEN_FILE
    delete process.env.TKE_ROLE_ARN
  })

  it('should create OIDC credential with explicit parameters', async () => {
    const mockOidcResponse = {
      Credentials: {
        TmpSecretId: 'oidc-secret-id',
        TmpSecretKey: 'oidc-secret-key',
        Token: 'oidc-token'
      },
      ExpiredTime: Math.floor(Date.now() / 1000) + 3600,
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    mockClientInstance.request.mockResolvedValue(mockOidcResponse)

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session',
      WebIdentityToken: 'web-identity-token',
      ProviderId: 'provider-id'
    }
    
    const oidcCredential = new OIDCRoleArnCredential(clientConfig, assumeRoleParams)
    const credential = await oidcCredential.getCredential()

    expect(credential.secretId).toBe('oidc-secret-id')
    expect(credential.secretKey).toBe('oidc-secret-key')
    expect(credential.token).toBe('oidc-token')
    
    // Verify CommonClient was called correctly
    expect(MockedCommonClient).toHaveBeenCalledWith(
      'sts.tencentcloudapi.com',
      '2018-08-13',
      expect.objectContaining({
        credential: clientConfig.credential
      })
    )
    expect(mockClientInstance.request).toHaveBeenCalledWith('AssumeRoleWithWebIdentity', assumeRoleParams)
  })

  it('should initialize from TKE environment variables', async () => {
    // Set up TKE environment variables
    process.env.TKE_REGION = 'ap-guangzhou'
    process.env.TKE_PROVIDER_ID = 'tke-provider'
    process.env.TKE_WEB_IDENTITY_TOKEN_FILE = '/tmp/token'
    process.env.TKE_ROLE_ARN = 'arn:aws:iam::123456789012:role/tke-role'

    // Mock file system
    mockedFs.readFileSync.mockReturnValue('tke-web-identity-token')

    const mockOidcResponse = {
      Credentials: {
        TmpSecretId: 'tke-secret-id',
        TmpSecretKey: 'tke-secret-key',
        Token: 'tke-token'
      },
      ExpiredTime: Math.floor(Date.now() / 1000) + 3600,
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    mockClientInstance.request.mockResolvedValue(mockOidcResponse)

    const oidcCredential = new OIDCRoleArnCredential()
    const credential = await oidcCredential.getCredential()

    expect(credential.secretId).toBe('tke-secret-id')
    expect(credential.secretKey).toBe('tke-secret-key')
    expect(credential.token).toBe('tke-token')
    
    // Verify file was read
    expect(mockedFs.readFileSync).toHaveBeenCalledWith('/tmp/token')
    
    // Verify CommonClient was called with TKE parameters
    expect(mockClientInstance.request).toHaveBeenCalledWith(
      'AssumeRoleWithWebIdentity',
      expect.objectContaining({
        RoleArn: 'arn:aws:iam::123456789012:role/tke-role',
        WebIdentityToken: 'tke-web-identity-token',
        ProviderId: 'tke-provider'
      })
    )
  })

  it('should throw error when TKE_REGION is missing', async () => {
    delete process.env.TKE_REGION
    process.env.TKE_PROVIDER_ID = 'tke-provider'
    process.env.TKE_WEB_IDENTITY_TOKEN_FILE = '/tmp/token'
    process.env.TKE_ROLE_ARN = 'arn:aws:iam::123456789012:role/tke-role'

    const oidcCredential = new OIDCRoleArnCredential()

    await expect(oidcCredential.getCredential()).rejects.toThrow('env TKE_REGION not exist')
  })

  it('should throw error when STS request fails', async () => {
    const errorMessage = 'OIDC request failed'
    mockClientInstance.request.mockRejectedValue(new Error(errorMessage))

    const clientConfig = { credential: new BasicCredential('id', 'key') }
    const assumeRoleParams = { 
      RoleArn: 'arn:aws:iam::123456789012:role/test', 
      RoleSessionName: 'test-session'
    }
    
    const oidcCredential = new OIDCRoleArnCredential(clientConfig, assumeRoleParams)

    await expect(oidcCredential.getCredential()).rejects.toThrow(`Get STS AssumeRoleWithWebIdentity failed: ${errorMessage}`)
  })
})

describe('DefaultCredentialProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock console.error to avoid noise in test output
    vi.spyOn(console, 'error').mockImplementation(() => {})
    
    // Clean up environment variables
    delete process.env.TENCENTCLOUD_SECRET_ID
    delete process.env.TENCENTCLOUD_SECRET_KEY
    delete process.env.TENCENTCLOUD_SESSION_TOKEN
    delete process.env.TKE_REGION
    delete process.env.TKE_PROVIDER_ID
    delete process.env.TKE_WEB_IDENTITY_TOKEN_FILE
    delete process.env.TKE_ROLE_ARN
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return credential from EnvironmentVariableCredential when available', async () => {
    // Set up environment variables for EnvironmentVariableCredential
    process.env.TENCENTCLOUD_SECRET_ID = 'env-secret-id'
    process.env.TENCENTCLOUD_SECRET_KEY = 'env-secret-key'
    process.env.TENCENTCLOUD_SESSION_TOKEN = 'env-token'

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    expect(credential.secretId).toBe('env-secret-id')
    expect(credential.secretKey).toBe('env-secret-key')
    expect(credential.token).toBe('env-token')
  })

  it('should fallback to ProfileCredential when EnvironmentVariableCredential returns empty', async () => {
    // Environment variables not set, so EnvironmentVariableCredential returns empty
    
    // Mock ProfileCredential to succeed
    const homePath = '/home/user'
    const credentialsPath = path.join(homePath, '.tencentcloud', 'credentials')
    
    mockedHomedir.mockReturnValue(homePath)
    mockedFs.existsSync.mockImplementation((filePath) => filePath === credentialsPath)
    mockedFs.readFileSync.mockReturnValue('[default]\nsecret_id=profile-id\nsecret_key=profile-key\ntoken=profile-token')
    mockedParse.mockReturnValue({
      default: {
        secret_id: 'profile-id',
        secret_key: 'profile-key',
        token: 'profile-token'
      }
    })

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    expect(credential.secretId).toBe('profile-id')
    expect(credential.secretKey).toBe('profile-key')
    expect(credential.token).toBe('profile-token')
  })

  it('should fallback to CvmRoleCredential when previous providers return empty', async () => {
    // Environment variables not set
    // Profile file not exists
    mockedHomedir.mockReturnValue('/home/user')
    mockedFs.existsSync.mockReturnValue(false)

    // Mock CvmRoleCredential to succeed
    const mockCvmCredential = {
      getCredential: vi.fn().mockResolvedValue({
        secretId: 'cvm-secret-id',
        secretKey: 'cvm-secret-key',
        token: 'cvm-token'
      })
    }
    mockedCvmRoleCredential.mockImplementation(() => mockCvmCredential as any)

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    expect(credential.secretId).toBe('cvm-secret-id')
    expect(credential.secretKey).toBe('cvm-secret-key')
    expect(credential.token).toBe('cvm-token')
    expect(mockCvmCredential.getCredential).toHaveBeenCalled()
  })

  it('should fallback to OIDCRoleArnCredential when previous providers return empty', async () => {
    // Environment variables not set
    // Profile file not exists
    mockedHomedir.mockReturnValue('/home/user')
    mockedFs.existsSync.mockReturnValue(false)

    // Mock CvmRoleCredential to return empty credential
    const mockCvmCredential = {
      getCredential: vi.fn().mockResolvedValue({
        secretId: '',
        secretKey: '',
        token: ''
      })
    }
    mockedCvmRoleCredential.mockImplementation(() => mockCvmCredential as any)

    // Set up TKE environment variables for OIDCRoleArnCredential
    process.env.TKE_REGION = 'ap-guangzhou'
    process.env.TKE_PROVIDER_ID = 'tke-provider'
    process.env.TKE_WEB_IDENTITY_TOKEN_FILE = '/tmp/token'
    process.env.TKE_ROLE_ARN = 'arn:aws:iam::123456789012:role/tke-role'

    // Mock file system for token file
    mockedFs.readFileSync.mockReturnValue('tke-web-identity-token')

    // Create a mock client instance for this test
    const mockClientInstance: any = {
      request: vi.fn()
    }
    
    // Mock CommonClient constructor to return our mock instance
    MockedCommonClient.mockImplementation(() => mockClientInstance)

    // Mock CommonClient for OIDC
    const mockOidcResponse = {
      Credentials: {
        TmpSecretId: 'oidc-secret-id',
        TmpSecretKey: 'oidc-secret-key',
        Token: 'oidc-token'
      },
      ExpiredTime: Math.floor(Date.now() / 1000) + 3600,
      Expiration: '2024-01-01T12:00:00Z'
    }
    
    mockClientInstance.request.mockResolvedValue(mockOidcResponse)

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    expect(credential.secretId).toBe('oidc-secret-id')
    expect(credential.secretKey).toBe('oidc-secret-key')
    expect(credential.token).toBe('oidc-token')
  })

  it('should handle provider errors and continue to next provider', async () => {
    // Environment variables not set
    // Profile file not exists
    mockedHomedir.mockReturnValue('/home/user')
    mockedFs.existsSync.mockReturnValue(false)

    // Mock CvmRoleCredential to throw error
    const mockCvmCredential = {
      getCredential: vi.fn().mockRejectedValue(new Error('CVM role failed'))
    }
    mockedCvmRoleCredential.mockImplementation(() => mockCvmCredential as any)

    // OIDCRoleArnCredential will also fail due to missing TKE environment variables

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    // Should return empty credential when all providers fail
    expect(credential.secretId).toBe('')
    expect(credential.secretKey).toBe('')
    expect(credential.token).toBeUndefined()
    
    // Verify console.error was called for the CVM error
    expect(console.error).toHaveBeenCalled()
  })

  it('should skip providers that return empty credentials', async () => {
    // Environment variables not set (EnvironmentVariableCredential returns empty)
    // Profile file not exists (ProfileCredential returns empty)
    mockedHomedir.mockReturnValue('/home/user')
    mockedFs.existsSync.mockReturnValue(false)

    // Mock CvmRoleCredential to return empty credential
    const mockCvmCredential = {
      getCredential: vi.fn().mockResolvedValue({
        secretId: '',
        secretKey: ''
      })
    }
    mockedCvmRoleCredential.mockImplementation(() => mockCvmCredential as any)

    // OIDCRoleArnCredential will fail due to missing TKE environment variables

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    // Should return empty credential when all providers return empty or fail
    expect(credential.secretId).toBe('')
    expect(credential.secretKey).toBe('')
    expect(mockCvmCredential.getCredential).toHaveBeenCalled()
  })

  it('should return first valid credential and not call subsequent providers', async () => {
    // Set up environment variables for EnvironmentVariableCredential
    process.env.TENCENTCLOUD_SECRET_ID = 'env-secret-id'
    process.env.TENCENTCLOUD_SECRET_KEY = 'env-secret-key'

    // Mock ProfileCredential (should not be called)
    const homePath = '/home/user'
    const credentialsPath = path.join(homePath, '.tencentcloud', 'credentials')
    
    mockedHomedir.mockReturnValue(homePath)
    mockedFs.existsSync.mockImplementation((filePath) => filePath === credentialsPath)
    mockedFs.readFileSync.mockReturnValue('[default]\nsecret_id=profile-id\nsecret_key=profile-key')
    mockedParse.mockReturnValue({
      default: {
        secret_id: 'profile-id',
        secret_key: 'profile-key'
      }
    })

    // Mock CvmRoleCredential (should not be called)
    const mockCvmCredential = {
      getCredential: vi.fn().mockResolvedValue({
        secretId: 'cvm-secret-id',
        secretKey: 'cvm-secret-key'
      })
    }
    mockedCvmRoleCredential.mockImplementation(() => mockCvmCredential as any)

    const provider = new DefaultCredentialProvider()
    const credential = await provider.getCredential()

    // Should return EnvironmentVariableCredential result
    expect(credential.secretId).toBe('env-secret-id')
    expect(credential.secretKey).toBe('env-secret-key')
    
    // ProfileCredential file operations should not be called since EnvironmentVariableCredential succeeded
    expect(mockedFs.readFileSync).not.toHaveBeenCalled()
    expect(mockCvmCredential.getCredential).not.toHaveBeenCalled()
  })
})