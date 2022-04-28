import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AssumeRoleWithSAMLResponse, AssumeRoleWithWebIdentityRequest, AssumeRoleWithWebIdentityResponse, GetFederationTokenResponse, QueryApiKeyResponse, AssumeRoleResponse, QueryApiKeyRequest, GetFederationTokenRequest, GetCallerIdentityResponse, AssumeRoleRequest, GetCallerIdentityRequest, AssumeRoleWithSAMLRequest } from "./sts_models";
/**
 * sts client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取联合身份临时访问凭证
     */
    GetFederationToken(req: GetFederationTokenRequest, cb?: (error: string, rep: GetFederationTokenResponse) => void): Promise<GetFederationTokenResponse>;
    /**
     * 拉取API密钥列表
     */
    QueryApiKey(req: QueryApiKeyRequest, cb?: (error: string, rep: QueryApiKeyResponse) => void): Promise<QueryApiKeyResponse>;
    /**
     * 申请扮演角色
     */
    AssumeRole(req: AssumeRoleRequest, cb?: (error: string, rep: AssumeRoleResponse) => void): Promise<AssumeRoleResponse>;
    /**
     * 申请OIDC角色临时密钥
     */
    AssumeRoleWithWebIdentity(req: AssumeRoleWithWebIdentityRequest, cb?: (error: string, rep: AssumeRoleWithWebIdentityResponse) => void): Promise<AssumeRoleWithWebIdentityResponse>;
    /**
     * 获取当前调用者的身份信息。
接口支持主账号，子账号长期密钥以及AssumeRole，GetFederationToken生成的临时凭据的身份获取。
     */
    GetCallerIdentity(req?: GetCallerIdentityRequest, cb?: (error: string, rep: GetCallerIdentityResponse) => void): Promise<GetCallerIdentityResponse>;
    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
     */
    AssumeRoleWithSAML(req: AssumeRoleWithSAMLRequest, cb?: (error: string, rep: AssumeRoleWithSAMLResponse) => void): Promise<AssumeRoleWithSAMLResponse>;
}
