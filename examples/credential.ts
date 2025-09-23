import { OIDCRoleArnCredential, DefaultCredentialProvider } from "tencentcloud-sdk-nodejs-common"

async function getCredential() {
  // TKE OIDC 凭证
  const credentialOIDC = new OIDCRoleArnCredential()
  let credential = await credentialOIDC.getCredential()

  // 凭证链
  const defaultCredentialProvider = new DefaultCredentialProvider()
  credential = await defaultCredentialProvider()
}