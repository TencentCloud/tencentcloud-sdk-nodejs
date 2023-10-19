import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOrganizationAuthNodeResponse, BindOrganizationMemberAuthAccountRequest, CreateOrganizationMemberAuthIdentityRequest, UpdateOrganizationIdentityRequest, DeleteOrganizationMembersResponse, DescribeOrganizationFinancialByMemberRequest, DescribeOrganizationAuthNodeRequest, DescribeOrganizationFinancialByMonthRequest, DescribeOrganizationMemberAuthIdentitiesRequest, AddOrganizationMemberEmailResponse, CreateOrganizationMemberAuthIdentityResponse, DescribeOrganizationFinancialByProductRequest, CreateOrganizationMemberPolicyRequest, CreateOrganizationMembersPolicyResponse, DescribeOrganizationFinancialByMonthResponse, DescribeOrganizationNodesRequest, CreateOrganizationRequest, CreateOrganizationMemberResponse, CreateOrganizationIdentityResponse, UpdateOrganizationMemberResponse, QuitOrganizationResponse, CreateOrganizationMembersPolicyRequest, DescribeOrganizationMemberEmailBindResponse, DeleteOrganizationMembersRequest, CreateOrganizationResponse, DescribeOrganizationMemberPoliciesResponse, DeleteOrganizationNodesRequest, AddOrganizationNodeResponse, BindOrganizationMemberAuthAccountResponse, DescribeOrganizationFinancialByProductResponse, UpdateOrganizationIdentityResponse, AddOrganizationMemberEmailRequest, DeleteOrganizationRequest, ListOrganizationIdentityResponse, DescribeOrganizationNodesResponse, DeleteOrganizationMembersPolicyRequest, DescribeOrganizationMembersResponse, CreateOrganizationMemberPolicyResponse, CreateOrganizationIdentityRequest, MoveOrganizationNodeMembersRequest, CancelOrganizationMemberAuthAccountResponse, UpdateOrganizationMemberRequest, DeleteOrganizationNodesResponse, QuitOrganizationRequest, DescribeOrganizationResponse, DescribeOrganizationMemberPoliciesRequest, DescribeOrganizationMemberEmailBindRequest, UpdateOrganizationMemberEmailBindResponse, AddOrganizationNodeRequest, UpdateOrganizationNodeResponse, DescribeOrganizationMemberAuthIdentitiesResponse, DeleteOrganizationIdentityRequest, UpdateOrganizationNodeRequest, DescribeOrganizationMemberAuthAccountsRequest, CancelOrganizationMemberAuthAccountRequest, ListOrganizationIdentityRequest, DeleteOrganizationIdentityResponse, DescribeOrganizationFinancialByMemberResponse, DeleteOrganizationResponse, DescribeOrganizationMemberAuthAccountsResponse, DescribeOrganizationRequest, DeleteOrganizationMembersPolicyResponse, CreateOrganizationMemberRequest, MoveOrganizationNodeMembersResponse, DescribeOrganizationMembersRequest, DeleteOrganizationMemberAuthIdentityResponse, UpdateOrganizationMemberEmailBindRequest, DeleteOrganizationMemberAuthIdentityRequest } from "./organization_models";
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
     * 退出企业组织
     */
    QuitOrganization(req: QuitOrganizationRequest, cb?: (error: string, rep: QuitOrganizationResponse) => void): Promise<QuitOrganizationResponse>;
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
     * 获取组织成员访问授权列表
     */
    DescribeOrganizationMemberAuthIdentities(req: DescribeOrganizationMemberAuthIdentitiesRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void): Promise<DescribeOrganizationMemberAuthIdentitiesResponse>;
    /**
     * 更新企业组织节点
     */
    UpdateOrganizationNode(req: UpdateOrganizationNodeRequest, cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void): Promise<UpdateOrganizationNodeResponse>;
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
     * 删除企业组织
     */
    DeleteOrganization(req?: DeleteOrganizationRequest, cb?: (error: string, rep: DeleteOrganizationResponse) => void): Promise<DeleteOrganizationResponse>;
    /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
    CancelOrganizationMemberAuthAccount(req: CancelOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void): Promise<CancelOrganizationMemberAuthAccountResponse>;
    /**
     * 以成员维度获取组织财务信息
     */
    DescribeOrganizationFinancialByMember(req: DescribeOrganizationFinancialByMemberRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByMemberResponse) => void): Promise<DescribeOrganizationFinancialByMemberResponse>;
    /**
     * 更新组织身份
     */
    UpdateOrganizationIdentity(req: UpdateOrganizationIdentityRequest, cb?: (error: string, rep: UpdateOrganizationIdentityResponse) => void): Promise<UpdateOrganizationIdentityResponse>;
    /**
     * 创建组织成员访问策略
     */
    CreateOrganizationMembersPolicy(req: CreateOrganizationMembersPolicyRequest, cb?: (error: string, rep: CreateOrganizationMembersPolicyResponse) => void): Promise<CreateOrganizationMembersPolicyResponse>;
    /**
     * 获取企业组织信息
     */
    DescribeOrganization(req: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
    /**
     * 移动成员到指定企业组织节点
     */
    MoveOrganizationNodeMembers(req: MoveOrganizationNodeMembersRequest, cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void): Promise<MoveOrganizationNodeMembersResponse>;
    /**
     * 创建企业组织
     */
    CreateOrganization(req?: CreateOrganizationRequest, cb?: (error: string, rep: CreateOrganizationResponse) => void): Promise<CreateOrganizationResponse>;
    /**
     * 添加组织身份
     */
    CreateOrganizationIdentity(req: CreateOrganizationIdentityRequest, cb?: (error: string, rep: CreateOrganizationIdentityResponse) => void): Promise<CreateOrganizationIdentityResponse>;
    /**
     * 删除组织身份
     */
    DeleteOrganizationIdentity(req: DeleteOrganizationIdentityRequest, cb?: (error: string, rep: DeleteOrganizationIdentityResponse) => void): Promise<DeleteOrganizationIdentityResponse>;
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
    /**
     * 删除组织成员访问授权
     */
    DeleteOrganizationMemberAuthIdentity(req: DeleteOrganizationMemberAuthIdentityRequest, cb?: (error: string, rep: DeleteOrganizationMemberAuthIdentityResponse) => void): Promise<DeleteOrganizationMemberAuthIdentityResponse>;
}
