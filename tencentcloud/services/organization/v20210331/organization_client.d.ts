import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOrganizationAuthNodeResponse, BindOrganizationMemberAuthAccountRequest, DeleteOrganizationMembersResponse, DescribeOrganizationMemberAuthIdentitiesRequest, CreateOrganizationMemberPolicyRequest, DescribeOrganizationRequest, DescribeOrganizationNodesRequest, BindOrganizationMemberAuthAccountResponse, CreateOrganizationMemberResponse, MoveOrganizationNodeMembersRequest, ListOrganizationIdentityRequest, MoveOrganizationNodeMembersResponse, DeleteOrganizationMembersRequest, DescribeOrganizationMemberPoliciesResponse, DeleteOrganizationNodesRequest, AddOrganizationNodeResponse, ListOrganizationIdentityResponse, DescribeOrganizationNodesResponse, DescribeOrganizationMembersResponse, CreateOrganizationMemberPolicyResponse, CancelOrganizationMemberAuthAccountResponse, DescribeOrganizationResponse, DescribeOrganizationMemberPoliciesRequest, AddOrganizationNodeRequest, DescribeOrganizationMemberAuthIdentitiesResponse, DescribeOrganizationAuthNodeRequest, UpdateOrganizationNodeResponse, DescribeOrganizationMemberAuthAccountsRequest, CancelOrganizationMemberAuthAccountRequest, DeleteOrganizationNodesResponse, DescribeOrganizationMemberAuthAccountsResponse, CreateOrganizationMemberRequest, DescribeOrganizationMembersRequest, UpdateOrganizationNodeRequest } from "./organization_models";
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
     * 移动成员到指定企业组织节点
     */
    MoveOrganizationNodeMembers(req: MoveOrganizationNodeMembersRequest, cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void): Promise<MoveOrganizationNodeMembersResponse>;
    /**
     * 更新企业组织节点
     */
    UpdateOrganizationNode(req: UpdateOrganizationNodeRequest, cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void): Promise<UpdateOrganizationNodeResponse>;
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    DescribeOrganizationMemberAuthAccounts(req: DescribeOrganizationMemberAuthAccountsRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void): Promise<DescribeOrganizationMemberAuthAccountsResponse>;
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    DescribeOrganizationAuthNode(req: DescribeOrganizationAuthNodeRequest, cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void): Promise<DescribeOrganizationAuthNodeResponse>;
    /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
    CancelOrganizationMemberAuthAccount(req: CancelOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void): Promise<CancelOrganizationMemberAuthAccountResponse>;
    /**
     * 批量删除企业组织节点
     */
    DeleteOrganizationNodes(req: DeleteOrganizationNodesRequest, cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void): Promise<DeleteOrganizationNodesResponse>;
    /**
     * 获取企业组织信息
     */
    DescribeOrganization(req: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
    /**
     * 获取组织节点列表
     */
    DescribeOrganizationNodes(req: DescribeOrganizationNodesRequest, cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void): Promise<DescribeOrganizationNodesResponse>;
    /**
     * 添加企业组织节点
     */
    AddOrganizationNode(req: AddOrganizationNodeRequest, cb?: (error: string, rep: AddOrganizationNodeResponse) => void): Promise<AddOrganizationNodeResponse>;
    /**
     * 获取组织成员的授权策略列表
     */
    DescribeOrganizationMemberPolicies(req: DescribeOrganizationMemberPoliciesRequest, cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void): Promise<DescribeOrganizationMemberPoliciesResponse>;
    /**
     * 创建组织成员访问授权策略
     */
    CreateOrganizationMemberPolicy(req: CreateOrganizationMemberPolicyRequest, cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void): Promise<CreateOrganizationMemberPolicyResponse>;
    /**
     * 获取组织成员可被管理的身份列表
     */
    DescribeOrganizationMemberAuthIdentities(req: DescribeOrganizationMemberAuthIdentitiesRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void): Promise<DescribeOrganizationMemberAuthIdentitiesResponse>;
    /**
     * 批量删除企业组织成员
     */
    DeleteOrganizationMembers(req: DeleteOrganizationMembersRequest, cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void): Promise<DeleteOrganizationMembersResponse>;
    /**
     * 获取组织成员访问身份列表
     */
    ListOrganizationIdentity(req: ListOrganizationIdentityRequest, cb?: (error: string, rep: ListOrganizationIdentityResponse) => void): Promise<ListOrganizationIdentityResponse>;
}
