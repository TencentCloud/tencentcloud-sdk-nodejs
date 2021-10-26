import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { BindOrganizationMemberAuthAccountRequest, BindOrganizationMemberAuthAccountResponse, CreateOrganizationMemberResponse, CreateOrganizationMemberRequest } from "./organization_models";
/**
 * organization client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 绑定组织成员和子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
}
