import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOrganizationResponse, BindOrganizationMemberAuthAccountRequest, CreateOrganizationMemberRequest, BindOrganizationMemberAuthAccountResponse, DescribeOrganizationMembersRequest, DescribeOrganizationRequest, DescribeOrganizationMembersResponse, CreateOrganizationMemberResponse } from "./organization_models";
/**
 * organization client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取企业组织成员列表
     */
    DescribeOrganizationMembers(req: DescribeOrganizationMembersRequest, cb?: (error: string, rep: DescribeOrganizationMembersResponse) => void): Promise<DescribeOrganizationMembersResponse>;
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 绑定组织成员和子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
    /**
     * 获取企业组织信息
     */
    DescribeOrganization(req: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
}
