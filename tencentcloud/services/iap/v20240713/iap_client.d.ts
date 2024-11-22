import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyIAPLoginSessionDurationRequest, DescribeIAPLoginSessionDurationRequest, CreateIAPUserOIDCConfigResponse, CreateIAPUserOIDCConfigRequest, DisableIAPUserSSOResponse, DescribeIAPUserOIDCConfigRequest, ModifyIAPLoginSessionDurationResponse, DescribeIAPUserOIDCConfigResponse, UpdateIAPUserOIDCConfigResponse, UpdateIAPUserOIDCConfigRequest, DisableIAPUserSSORequest, DescribeIAPLoginSessionDurationResponse } from "./iap_models";
/**
 * iap client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改用户OIDC配置
     */
    UpdateIAPUserOIDCConfig(req: UpdateIAPUserOIDCConfigRequest, cb?: (error: string, rep: UpdateIAPUserOIDCConfigResponse) => void): Promise<UpdateIAPUserOIDCConfigResponse>;
    /**
     * 查询登录会话时长
     */
    DescribeIAPLoginSessionDuration(req?: DescribeIAPLoginSessionDurationRequest, cb?: (error: string, rep: DescribeIAPLoginSessionDurationResponse) => void): Promise<DescribeIAPLoginSessionDurationResponse>;
    /**
     * 查询用户OIDC配置
     */
    DescribeIAPUserOIDCConfig(req?: DescribeIAPUserOIDCConfigRequest, cb?: (error: string, rep: DescribeIAPUserOIDCConfigResponse) => void): Promise<DescribeIAPUserOIDCConfigResponse>;
    /**
     * 禁用用户SSO
     */
    DisableIAPUserSSO(req?: DisableIAPUserSSORequest, cb?: (error: string, rep: DisableIAPUserSSOResponse) => void): Promise<DisableIAPUserSSOResponse>;
    /**
     * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
     */
    CreateIAPUserOIDCConfig(req: CreateIAPUserOIDCConfigRequest, cb?: (error: string, rep: CreateIAPUserOIDCConfigResponse) => void): Promise<CreateIAPUserOIDCConfigResponse>;
    /**
     * 修改登录会话时长
     */
    ModifyIAPLoginSessionDuration(req: ModifyIAPLoginSessionDurationRequest, cb?: (error: string, rep: ModifyIAPLoginSessionDurationResponse) => void): Promise<ModifyIAPLoginSessionDurationResponse>;
}
