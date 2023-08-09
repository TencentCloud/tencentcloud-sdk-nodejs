import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOrganizationAuthNodeResponse, BindOrganizationMemberAuthAccountRequest, CreateOrganizationMemberAuthIdentityRequest, DeleteOrganizationMembersResponse, DescribeOrganizationFinancialByMemberRequest, DescribeOrganizationFinancialByMonthRequest, DescribeOrganizationMemberAuthIdentitiesRequest, AddOrganizationMemberEmailResponse, CreateOrganizationMemberAuthIdentityResponse, UpdateOrganizationNodeResponse, CreateOrganizationMemberPolicyRequest, DescribeOrganizationRequest, DescribeOrganizationNodesRequest, BindOrganizationMemberAuthAccountResponse, CreateOrganizationMemberResponse, MoveOrganizationNodeMembersRequest, ListOrganizationIdentityRequest, DescribeOrganizationMemberEmailBindResponse, DeleteOrganizationMembersRequest, DescribeOrganizationMemberPoliciesResponse, DeleteOrganizationNodesRequest, AddOrganizationNodeResponse, DescribeOrganizationFinancialByMonthResponse, DescribeOrganizationFinancialByProductResponse, AddOrganizationMemberEmailRequest, DescribeOrganizationFinancialByProductRequest, ListOrganizationIdentityResponse, DescribeOrganizationNodesResponse, DeleteOrganizationMembersPolicyRequest, DescribeOrganizationMembersResponse, CreateOrganizationMemberPolicyResponse, CancelOrganizationMemberAuthAccountResponse, UpdateOrganizationMemberRequest, DescribeOrganizationResponse, DescribeOrganizationMemberPoliciesRequest, DescribeOrganizationMemberEmailBindRequest, UpdateOrganizationMemberEmailBindResponse, DeleteOrganizationMembersPolicyResponse, DescribeOrganizationMemberAuthIdentitiesResponse, DescribeOrganizationAuthNodeRequest, UpdateOrganizationNodeRequest, DescribeOrganizationMemberAuthAccountsRequest, CancelOrganizationMemberAuthAccountRequest, UpdateOrganizationMemberResponse, DeleteOrganizationNodesResponse, DescribeOrganizationFinancialByMemberResponse, DescribeOrganizationMemberAuthAccountsResponse, AddOrganizationNodeRequest, CreateOrganizationMemberRequest, MoveOrganizationNodeMembersResponse, DescribeOrganizationMembersRequest, UpdateOrganizationMemberEmailBindRequest } from "./organization_models";
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
     * 更新企业组织节点
     */
    UpdateOrganizationNode(req: UpdateOrganizationNodeRequest, cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void): Promise<UpdateOrganizationNodeResponse>;
    /**
     * 获取组织成员访问身份列表
     */
    ListOrganizationIdentity(req: ListOrganizationIdentityRequest, cb?: (error: string, rep: ListOrganizationIdentityResponse) => void): Promise<ListOrganizationIdentityResponse>;
    /**
     * 更新组织成员信息
     */
    UpdateOrganizationMember(req: UpdateOrganizationMemberRequest, cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void): Promise<UpdateOrganizationMemberResponse>;
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    DescribeOrganizationMemberAuthAccounts(req: DescribeOrganizationMemberAuthAccountsRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void): Promise<DescribeOrganizationMemberAuthAccountsResponse>;
    /**
     * 删除组织成员访问策略
     */
    DeleteOrganizationMembersPolicy(req: DeleteOrganizationMembersPolicyRequest, cb?: (error: string, rep: DeleteOrganizationMembersPolicyResponse) => void): Promise<DeleteOrganizationMembersPolicyResponse>;
    /**
     * 添加企业组织节点
     */
    AddOrganizationNode(req: AddOrganizationNodeRequest, cb?: (error: string, rep: AddOrganizationNodeResponse) => void): Promise<AddOrganizationNodeResponse>;
    /**
     * 修改绑定成员邮箱
     */
    UpdateOrganizationMemberEmailBind(req: UpdateOrganizationMemberEmailBindRequest, cb?: (error: string, rep: UpdateOrganizationMemberEmailBindResponse) => void): Promise<UpdateOrganizationMemberEmailBindResponse>;
    /**
     * 获取组织成员可被管理的身份列表
     */
    DescribeOrganizationMemberAuthIdentities(req: DescribeOrganizationMemberAuthIdentitiesRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void): Promise<DescribeOrganizationMemberAuthIdentitiesResponse>;
    /**
     * 添加组织成员访问授权
     */
    CreateOrganizationMemberAuthIdentity(req: CreateOrganizationMemberAuthIdentityRequest, cb?: (error: string, rep: CreateOrganizationMemberAuthIdentityResponse) => void): Promise<CreateOrganizationMemberAuthIdentityResponse>;
    /**
     * 批量删除企业组织成员
     */
    DeleteOrganizationMembers(req: DeleteOrganizationMembersRequest, cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void): Promise<DeleteOrganizationMembersResponse>;
    /**
     * 以月维度获取组织财务信息趋势
     */
    DescribeOrganizationFinancialByMonth(req: DescribeOrganizationFinancialByMonthRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByMonthResponse) => void): Promise<DescribeOrganizationFinancialByMonthResponse>;
    /**
     * 批量删除企业组织节点
     */
    DeleteOrganizationNodes(req: DeleteOrganizationNodesRequest, cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void): Promise<DeleteOrganizationNodesResponse>;
    /**
     * 获取组织成员的授权策略列表
     */
    DescribeOrganizationMemberPolicies(req: DescribeOrganizationMemberPoliciesRequest, cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void): Promise<DescribeOrganizationMemberPoliciesResponse>;
    /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
    CancelOrganizationMemberAuthAccount(req: CancelOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void): Promise<CancelOrganizationMemberAuthAccountResponse>;
    /**
     * 以成员维度获取组织财务信息
     */
    DescribeOrganizationFinancialByMember(req: DescribeOrganizationFinancialByMemberRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByMemberResponse) => void): Promise<DescribeOrganizationFinancialByMemberResponse>;
    /**
     * 获取企业组织信息
     */
    DescribeOrganization(req: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
    /**
     * 移动成员到指定企业组织节点
     */
    MoveOrganizationNodeMembers(req: MoveOrganizationNodeMembersRequest, cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void): Promise<MoveOrganizationNodeMembersResponse>;
    /**
     * 添加组织成员邮箱
     */
    AddOrganizationMemberEmail(req: AddOrganizationMemberEmailRequest, cb?: (error: string, rep: AddOrganizationMemberEmailResponse) => void): Promise<AddOrganizationMemberEmailResponse>;
    /**
     * 查询成员邮箱绑定详细信息
     */
    DescribeOrganizationMemberEmailBind(req: DescribeOrganizationMemberEmailBindRequest, cb?: (error: string, rep: DescribeOrganizationMemberEmailBindResponse) => void): Promise<DescribeOrganizationMemberEmailBindResponse>;
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
    /**
     * 以产品维度获取组织财务信息
     */
    DescribeOrganizationFinancialByProduct(req: DescribeOrganizationFinancialByProductRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByProductResponse) => void): Promise<DescribeOrganizationFinancialByProductResponse>;
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    DescribeOrganizationAuthNode(req: DescribeOrganizationAuthNodeRequest, cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void): Promise<DescribeOrganizationAuthNodeResponse>;
    /**
     * 获取组织节点列表
     */
    DescribeOrganizationNodes(req: DescribeOrganizationNodesRequest, cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void): Promise<DescribeOrganizationNodesResponse>;
    /**
     * 创建组织成员访问授权策略
     */
    CreateOrganizationMemberPolicy(req: CreateOrganizationMemberPolicyRequest, cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void): Promise<CreateOrganizationMemberPolicyResponse>;
}
