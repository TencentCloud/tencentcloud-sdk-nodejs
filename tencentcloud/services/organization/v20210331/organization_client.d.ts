import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeShareUnitResourcesResponse, EnablePolicyTypeResponse, ListTargetsForPolicyResponse, ListNonCompliantResourceResponse, DeleteOrganizationRequest, DescribePolicyConfigResponse, QuitOrganizationResponse, ListOrganizationIdentityRequest, DeleteOrganizationMembersRequest, CreateOrganizationResponse, AddShareUnitResourcesResponse, AddOrganizationNodeResponse, DescribeOrganizationFinancialByMonthResponse, MoveOrganizationNodeMembersResponse, AttachPolicyRequest, DeleteShareUnitResponse, DeleteShareUnitMembersResponse, DescribePolicyResponse, CreateOrganizationIdentityRequest, DeletePolicyResponse, DescribeOrganizationResponse, ListNonCompliantResourceRequest, DisablePolicyTypeResponse, DescribeOrganizationMemberPoliciesRequest, DescribeEffectivePolicyRequest, DeleteOrganizationMembersPolicyResponse, UpdateOrganizationIdentityRequest, CancelOrganizationMemberAuthAccountRequest, DeleteOrganizationResponse, DeleteOrganizationMembersResponse, DescribeOrganizationMembersResponse, UpdateOrganizationNodeRequest, DescribeShareAreasResponse, DescribeOrganizationAuthNodeResponse, ListPoliciesResponse, BindOrganizationMemberAuthAccountRequest, DescribeShareUnitsResponse, UpdateOrganizationMemberEmailBindResponse, DeleteShareUnitResourcesRequest, DescribeOrganizationMemberAuthIdentitiesRequest, CreateOrganizationMemberAuthIdentityResponse, DescribeOrganizationRequest, DescribeOrganizationNodesRequest, BindOrganizationMemberAuthAccountResponse, CreateOrganizationMemberResponse, MoveOrganizationNodeMembersRequest, UpdateOrganizationMemberResponse, DescribeOrganizationMemberEmailBindResponse, DeleteOrganizationNodesRequest, EnablePolicyTypeRequest, CreatePolicyResponse, AddOrganizationMemberEmailRequest, ListOrganizationIdentityResponse, DeletePolicyRequest, QuitOrganizationRequest, AddOrganizationNodeRequest, AddShareUnitMembersRequest, AddShareUnitRequest, DescribeOrganizationAuthNodeRequest, DescribeOrganizationMemberAuthAccountsRequest, DescribeShareUnitMembersResponse, DescribeShareAreasRequest, DescribeOrganizationMemberAuthAccountsResponse, DescribeOrganizationMembersRequest, UpdateShareUnitResponse, ListPoliciesForTargetRequest, DeleteOrganizationMemberAuthIdentityResponse, UpdateOrganizationMemberEmailBindRequest, UpdateShareUnitRequest, DeleteOrganizationMemberAuthIdentityRequest, DetachPolicyRequest, DisablePolicyTypeRequest, DescribeEffectivePolicyResponse, AddOrganizationMemberEmailResponse, AddShareUnitMembersResponse, CreateOrganizationMemberPolicyRequest, CreateOrganizationRequest, AttachPolicyResponse, CreateOrganizationMembersPolicyRequest, CheckAccountDeleteRequest, DetachPolicyResponse, AddShareUnitResponse, DescribeShareUnitResourcesRequest, DescribeOrganizationFinancialByProductResponse, DescribeOrganizationFinancialByProductRequest, CreateOrganizationMemberPolicyResponse, DescribeShareUnitMembersRequest, CancelOrganizationMemberAuthAccountResponse, UpdateOrganizationMemberRequest, AddShareUnitResourcesRequest, ListPoliciesForTargetResponse, DeleteShareUnitMembersRequest, DescribeOrganizationMemberAuthIdentitiesResponse, UpdatePolicyResponse, DeleteOrganizationIdentityResponse, DescribeOrganizationMemberEmailBindRequest, ListPoliciesRequest, CreateOrganizationMemberRequest, CreatePolicyRequest, DeleteShareUnitRequest, CheckAccountDeleteResponse, DeleteAccountRequest, CreateOrganizationMemberAuthIdentityRequest, DescribeOrganizationFinancialByMemberRequest, DescribeOrganizationFinancialByMonthRequest, CreateOrganizationMembersPolicyResponse, DeleteShareUnitResourcesResponse, CreateOrganizationIdentityResponse, UpdateOrganizationIdentityResponse, DescribeOrganizationNodesResponse, DeleteOrganizationMembersPolicyRequest, DescribePolicyRequest, ListTargetsForPolicyRequest, DeleteOrganizationIdentityRequest, UpdateOrganizationNodeResponse, DeleteOrganizationNodesResponse, DescribeOrganizationFinancialByMemberResponse, DescribePolicyConfigRequest, DescribeOrganizationMemberPoliciesResponse, DescribeShareUnitsRequest, DeleteAccountResponse, UpdatePolicyRequest } from "./organization_models";
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
     * 禁用策略类型
     */
    DisablePolicyType(req: DisablePolicyTypeRequest, cb?: (error: string, rep: DisablePolicyTypeResponse) => void): Promise<DisablePolicyTypeResponse>;
    /**
     * 更新共享单元。
     */
    UpdateShareUnit(req: UpdateShareUnitRequest, cb?: (error: string, rep: UpdateShareUnitResponse) => void): Promise<UpdateShareUnitResponse>;
    /**
     * 更新组织成员信息
     */
    UpdateOrganizationMember(req: UpdateOrganizationMemberRequest, cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void): Promise<UpdateOrganizationMemberResponse>;
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    DescribeOrganizationMemberAuthAccounts(req: DescribeOrganizationMemberAuthAccountsRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void): Promise<DescribeOrganizationMemberAuthAccountsResponse>;
    /**
     * 获取共享单元资源列表。
     */
    DescribeShareUnitResources(req: DescribeShareUnitResourcesRequest, cb?: (error: string, rep: DescribeShareUnitResourcesResponse) => void): Promise<DescribeShareUnitResourcesResponse>;
    /**
     * 删除组织成员访问策略
     */
    DeleteOrganizationMembersPolicy(req: DeleteOrganizationMembersPolicyRequest, cb?: (error: string, rep: DeleteOrganizationMembersPolicyResponse) => void): Promise<DeleteOrganizationMembersPolicyResponse>;
    /**
     * 获取组织成员访问身份列表
     */
    ListOrganizationIdentity(req: ListOrganizationIdentityRequest, cb?: (error: string, rep: ListOrganizationIdentityResponse) => void): Promise<ListOrganizationIdentityResponse>;
    /**
     * 本接口（ListPoliciesForTarget）查询目标关联的策略列表
     */
    ListPoliciesForTarget(req: ListPoliciesForTargetRequest, cb?: (error: string, rep: ListPoliciesForTargetResponse) => void): Promise<ListPoliciesForTargetResponse>;
    /**
     * 添加企业组织节点
     */
    AddOrganizationNode(req: AddOrganizationNodeRequest, cb?: (error: string, rep: AddOrganizationNodeResponse) => void): Promise<AddOrganizationNodeResponse>;
    /**
     * 修改绑定成员邮箱
     */
    UpdateOrganizationMemberEmailBind(req: UpdateOrganizationMemberEmailBindRequest, cb?: (error: string, rep: UpdateOrganizationMemberEmailBindResponse) => void): Promise<UpdateOrganizationMemberEmailBindResponse>;
    /**
     * 获取共享单元成员列表。
     */
    DescribeShareUnitMembers(req: DescribeShareUnitMembersRequest, cb?: (error: string, rep: DescribeShareUnitMembersResponse) => void): Promise<DescribeShareUnitMembersResponse>;
    /**
     * 获取组织成员访问授权列表
     */
    DescribeOrganizationMemberAuthIdentities(req: DescribeOrganizationMemberAuthIdentitiesRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void): Promise<DescribeOrganizationMemberAuthIdentitiesResponse>;
    /**
     * 本接口（DescribePolicy）可用于查询查看策略详情。
     */
    DescribePolicy(req: DescribePolicyRequest, cb?: (error: string, rep: DescribePolicyResponse) => void): Promise<DescribePolicyResponse>;
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
     * 更新组织身份
     */
    UpdateOrganizationIdentity(req: UpdateOrganizationIdentityRequest, cb?: (error: string, rep: UpdateOrganizationIdentityResponse) => void): Promise<UpdateOrganizationIdentityResponse>;
    /**
     * 以月维度获取组织财务信息趋势
     */
    DescribeOrganizationFinancialByMonth(req: DescribeOrganizationFinancialByMonthRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByMonthResponse) => void): Promise<DescribeOrganizationFinancialByMonthResponse>;
    /**
     * 删除成员账号
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 批量删除企业组织节点
     */
    DeleteOrganizationNodes(req: DeleteOrganizationNodesRequest, cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void): Promise<DeleteOrganizationNodesResponse>;
    /**
     * 查询目标关联的有效策略
     */
    DescribeEffectivePolicy(req: DescribeEffectivePolicyRequest, cb?: (error: string, rep: DescribeEffectivePolicyResponse) => void): Promise<DescribeEffectivePolicyResponse>;
    /**
     * 删除共享单元资源
     */
    DeleteShareUnitResources(req: DeleteShareUnitResourcesRequest, cb?: (error: string, rep: DeleteShareUnitResourcesResponse) => void): Promise<DeleteShareUnitResourcesResponse>;
    /**
     * 获取共享单元列表。
     */
    DescribeShareUnits(req: DescribeShareUnitsRequest, cb?: (error: string, rep: DescribeShareUnitsResponse) => void): Promise<DescribeShareUnitsResponse>;
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
     * 添加共享单元资源
     */
    AddShareUnitResources(req: AddShareUnitResourcesRequest, cb?: (error: string, rep: AddShareUnitResourcesResponse) => void): Promise<AddShareUnitResourcesResponse>;
    /**
     * 获取成员标签检测不合规资源列表
     */
    ListNonCompliantResource(req: ListNonCompliantResourceRequest, cb?: (error: string, rep: ListNonCompliantResourceResponse) => void): Promise<ListNonCompliantResourceResponse>;
    /**
     * 绑定策略
     */
    AttachPolicy(req: AttachPolicyRequest, cb?: (error: string, rep: AttachPolicyResponse) => void): Promise<AttachPolicyResponse>;
    /**
     * 创建组织成员访问策略
     */
    CreateOrganizationMembersPolicy(req: CreateOrganizationMembersPolicyRequest, cb?: (error: string, rep: CreateOrganizationMembersPolicyResponse) => void): Promise<CreateOrganizationMembersPolicyResponse>;
    /**
     * 获取可共享地域列表
     */
    DescribeShareAreas(req: DescribeShareAreasRequest, cb?: (error: string, rep: DescribeShareAreasResponse) => void): Promise<DescribeShareAreasResponse>;
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
     * 解绑策略
     */
    DetachPolicy(req: DetachPolicyRequest, cb?: (error: string, rep: DetachPolicyResponse) => void): Promise<DetachPolicyResponse>;
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
     * 删除共享单元成员
     */
    DeleteShareUnitMembers(req: DeleteShareUnitMembersRequest, cb?: (error: string, rep: DeleteShareUnitMembersResponse) => void): Promise<DeleteShareUnitMembersResponse>;
    /**
     * 查询成员邮箱绑定详细信息
     */
    DescribeOrganizationMemberEmailBind(req: DescribeOrganizationMemberEmailBindRequest, cb?: (error: string, rep: DescribeOrganizationMemberEmailBindResponse) => void): Promise<DescribeOrganizationMemberEmailBindResponse>;
    /**
     * 启用策略类型
     */
    EnablePolicyType(req: EnablePolicyTypeRequest, cb?: (error: string, rep: EnablePolicyTypeResponse) => void): Promise<EnablePolicyTypeResponse>;
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
    /**
     * 创建共享单元，只有企业组织管理员可创建。
     */
    AddShareUnit(req: AddShareUnitRequest, cb?: (error: string, rep: AddShareUnitResponse) => void): Promise<AddShareUnitResponse>;
    /**
     * 删除共享单元。
     */
    DeleteShareUnit(req: DeleteShareUnitRequest, cb?: (error: string, rep: DeleteShareUnitResponse) => void): Promise<DeleteShareUnitResponse>;
    /**
     * 本接口（ListPolicies）可用于查询查看策略列表数据
     */
    ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse>;
    /**
     * 以产品维度获取组织财务信息
     */
    DescribeOrganizationFinancialByProduct(req: DescribeOrganizationFinancialByProductRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByProductResponse) => void): Promise<DescribeOrganizationFinancialByProductResponse>;
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    DescribeOrganizationAuthNode(req: DescribeOrganizationAuthNodeRequest, cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void): Promise<DescribeOrganizationAuthNodeResponse>;
    /**
     * 添加共享单元成员
     */
    AddShareUnitMembers(req: AddShareUnitMembersRequest, cb?: (error: string, rep: AddShareUnitMembersResponse) => void): Promise<AddShareUnitMembersResponse>;
    /**
     * 本接口（DescribePolicyConfig）可用于查询企业组织策略配置
     */
    DescribePolicyConfig(req: DescribePolicyConfigRequest, cb?: (error: string, rep: DescribePolicyConfigResponse) => void): Promise<DescribePolicyConfigResponse>;
    /**
     * 获取组织节点列表
     */
    DescribeOrganizationNodes(req: DescribeOrganizationNodesRequest, cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void): Promise<DescribeOrganizationNodesResponse>;
    /**
     * 删除策略
     */
    DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse>;
    /**
     * 成员账号删除检查
     */
    CheckAccountDelete(req: CheckAccountDeleteRequest, cb?: (error: string, rep: CheckAccountDeleteResponse) => void): Promise<CheckAccountDeleteResponse>;
    /**
     * 创建一个特殊类型的策略，您可以关联到企业组织Root节点、企业部门节点或者企业的成员账号。
     */
    CreatePolicy(req: CreatePolicyRequest, cb?: (error: string, rep: CreatePolicyResponse) => void): Promise<CreatePolicyResponse>;
    /**
     * 创建组织成员访问授权策略
     */
    CreateOrganizationMemberPolicy(req: CreateOrganizationMemberPolicyRequest, cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void): Promise<CreateOrganizationMemberPolicyResponse>;
    /**
     * 本接口（ListTargetsForPolicy）查询某个指定策略关联的目标列表
     */
    ListTargetsForPolicy(req: ListTargetsForPolicyRequest, cb?: (error: string, rep: ListTargetsForPolicyResponse) => void): Promise<ListTargetsForPolicyResponse>;
    /**
     * 删除组织成员访问授权
     */
    DeleteOrganizationMemberAuthIdentity(req: DeleteOrganizationMemberAuthIdentityRequest, cb?: (error: string, rep: DeleteOrganizationMemberAuthIdentityResponse) => void): Promise<DeleteOrganizationMemberAuthIdentityResponse>;
    /**
     * 编辑策略
     */
    UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse>;
}
