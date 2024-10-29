import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListTasksRequest, ListRoleConfigurationsRequest, DeleteSCIMCredentialRequest, ListGroupMembersResponse, SetExternalSAMLIdentityProviderRequest, ListGroupMembersRequest, UpdatePolicyRequest, DescribeShareUnitResourcesResponse, DescribeOrganizationMemberEmailBindResponse, EnablePolicyTypeResponse, ListTargetsForPolicyResponse, DeleteUserRequest, ProvisionRoleConfigurationRequest, ListNonCompliantResourceResponse, DeleteUserResponse, UpdateZoneResponse, DeleteOrganizationRequest, RejectJoinShareUnitInvitationRequest, DescribeIdentityCenterResponse, DescribePolicyConfigResponse, GetExternalSAMLIdentityProviderResponse, ListOrganizationIdentityRequest, DeleteOrganizationMembersRequest, CreateOrganizationResponse, AddShareUnitResourcesResponse, AddOrganizationNodeResponse, DescribeOrganizationFinancialByMonthResponse, ListPermissionPoliciesInRoleConfigurationResponse, MoveOrganizationNodeMembersResponse, AttachPolicyRequest, DeleteShareUnitResponse, UpdateShareUnitRequest, RemoveExternalSAMLIdPCertificateResponse, CreateGroupRequest, ListUsersResponse, DeleteRoleConfigurationRequest, CreateOrganizationIdentityRequest, ListOrganizationServiceResponse, DeleteUserSyncProvisioningResponse, ProvisionRoleConfigurationResponse, ListUserSyncProvisioningsResponse, DeletePolicyResponse, DescribeOrganizationResponse, ListNonCompliantResourceRequest, DisablePolicyTypeResponse, DescribeOrganizationMemberPoliciesRequest, DescribeEffectivePolicyRequest, CreateOrgServiceAssignRequest, DeleteOrganizationMembersPolicyResponse, DismantleRoleConfigurationResponse, ClearExternalSAMLIdentityProviderRequest, CreateUserSyncProvisioningResponse, ListUserSyncProvisioningsRequest, UpdateUserSyncProvisioningRequest, ListRoleAssignmentsRequest, CancelOrganizationMemberAuthAccountRequest, GetGroupRequest, DeleteOrganizationResponse, DismantleRoleConfigurationRequest, UpdateCustomPolicyForRoleConfigurationResponse, DescribeShareUnitMembersResponse, CreateRoleAssignmentRequest, DeleteShareUnitResourcesRequest, RejectJoinShareUnitInvitationResponse, UpdateShareUnitResponse, ListRoleAssignmentsResponse, UpdateUserResponse, RemoveUserFromGroupRequest, AddPermissionPolicyToRoleConfigurationRequest, DescribeOrganizationAuthNodeResponse, ListPoliciesResponse, BindOrganizationMemberAuthAccountRequest, DescribeShareUnitsResponse, UpdateOrganizationMemberEmailBindResponse, GetZoneSAMLServiceProviderInfoResponse, DeleteOrganizationMembersResponse, UpdateSCIMCredentialStatusResponse, DescribeOrganizationMemberAuthIdentitiesRequest, CreateOrganizationMemberAuthIdentityResponse, DeleteOrgServiceAssignRequest, DescribeOrganizationRequest, ListPermissionPoliciesInRoleConfigurationRequest, ClearExternalSAMLIdentityProviderResponse, AddExternalSAMLIdPCertificateResponse, CreateOrganizationMemberResponse, MoveOrganizationNodeMembersRequest, GetTaskStatusResponse, UpdateOrganizationMemberResponse, DeleteGroupRequest, GetUserResponse, DeleteOrganizationNodesRequest, EnablePolicyTypeRequest, CreatePolicyResponse, AddOrganizationMemberEmailRequest, ListOrganizationIdentityResponse, DeletePolicyRequest, GetUserSyncProvisioningResponse, GetSCIMSynchronizationStatusResponse, GetZoneStatisticsRequest, RemovePermissionPolicyFromRoleConfigurationRequest, InviteOrganizationMemberRequest, QuitOrganizationRequest, ListTasksResponse, AddOrganizationNodeRequest, AddShareUnitMembersRequest, AddShareUnitRequest, SendOrgMemberAccountBindEmailResponse, DescribeOrganizationAuthNodeRequest, OpenIdentityCenterRequest, GetProvisioningTaskStatusResponse, DescribeOrganizationMemberAuthAccountsRequest, GetUserRequest, UpdateOrganizationNodeResponse, AcceptJoinShareUnitInvitationResponse, ListJoinedGroupsForUserResponse, DescribeShareAreasRequest, DescribeOrganizationMemberAuthAccountsResponse, ListRoleConfigurationProvisioningsRequest, GetSCIMSynchronizationStatusRequest, DescribeIdentityCenterRequest, DescribeOrganizationMembersResponse, ListPoliciesForTargetRequest, DeleteOrganizationMemberAuthIdentityResponse, UpdateOrganizationMemberEmailBindRequest, DeleteOrganizationMemberAuthIdentityRequest, UpdateUserRequest, ListGroupsRequest, UpdateRoleConfigurationRequest, DetachPolicyRequest, UpdateOrganizationIdentityRequest, ListOrgServiceAssignMemberResponse, SendOrgMemberAccountBindEmailRequest, DeleteRoleAssignmentResponse, DisablePolicyTypeRequest, DescribeEffectivePolicyResponse, CreateOrgServiceAssignResponse, AddOrganizationMemberEmailResponse, AddShareUnitMembersResponse, ListGroupsResponse, CreateOrganizationMemberPolicyRequest, CreateOrganizationRequest, ListJoinedGroupsForUserRequest, UpdateRoleConfigurationResponse, AttachPolicyResponse, CreateOrganizationMembersPolicyRequest, CheckAccountDeleteRequest, GetExternalSAMLIdentityProviderRequest, DetachPolicyResponse, DeleteRoleConfigurationResponse, AddShareUnitResponse, DescribeShareUnitResourcesRequest, DescribeOrganizationFinancialByProductResponse, RemoveUserFromGroupResponse, GetGroupResponse, DescribeOrganizationFinancialByProductRequest, CreateOrganizationMemberPolicyResponse, UpdateSCIMSynchronizationStatusRequest, AcceptJoinShareUnitInvitationRequest, CancelOrganizationMemberAuthAccountResponse, GetTaskStatusRequest, AddShareUnitResourcesRequest, GetRoleConfigurationResponse, SetExternalSAMLIdentityProviderResponse, ListPoliciesForTargetResponse, DeleteShareUnitMembersRequest, OpenIdentityCenterResponse, ListUsersRequest, DescribeOrganizationMemberAuthIdentitiesResponse, CreateRoleAssignmentResponse, CreateUserRequest, QuitOrganizationResponse, GetZoneStatisticsResponse, UpdatePolicyResponse, DeleteShareUnitMembersResponse, UpdateGroupResponse, ListExternalSAMLIdPCertificatesRequest, DeleteOrganizationIdentityResponse, DescribeOrganizationMemberEmailBindRequest, RemovePermissionPolicyFromRoleConfigurationResponse, ListPoliciesRequest, CreateOrganizationMemberRequest, UpdateSCIMSynchronizationStatusResponse, CreatePolicyRequest, DescribePolicyConfigRequest, AddExternalSAMLIdPCertificateRequest, GetProvisioningTaskStatusRequest, CheckAccountDeleteResponse, DescribePolicyResponse, UpdateUserStatusResponse, UpdateGroupRequest, ListExternalSAMLIdPCertificatesResponse, DeleteAccountRequest, DescribeShareUnitMembersRequest, RemoveExternalSAMLIdPCertificateRequest, GetUserSyncProvisioningRequest, CreateOrganizationMemberAuthIdentityRequest, DescribeOrganizationFinancialByMonthRequest, ListRoleConfigurationProvisioningsResponse, DescribeOrganizationFinancialByMemberRequest, AddPermissionPolicyToRoleConfigurationResponse, ListOrganizationServiceRequest, CreateRoleConfigurationRequest, UpdateOrganizationMemberRequest, CreateOrganizationMembersPolicyResponse, GetRoleConfigurationRequest, AddUserToGroupRequest, CreateOrganizationIdentityResponse, DescribeOrganizationMembersRequest, GetZoneSAMLServiceProviderInfoRequest, ListRoleConfigurationsResponse, ListSCIMCredentialsResponse, DescribeOrganizationNodesRequest, UpdateCustomPolicyForRoleConfigurationRequest, InviteOrganizationMemberResponse, BindOrganizationMemberAuthAccountResponse, ListOrgServiceAssignMemberRequest, UpdateOrganizationIdentityResponse, DescribeShareAreasResponse, CreateUserResponse, DeleteShareUnitResourcesResponse, DeleteUserSyncProvisioningRequest, DescribeOrganizationNodesResponse, CreateUserSyncProvisioningRequest, DeleteOrganizationMembersPolicyRequest, CreateSCIMCredentialRequest, DescribePolicyRequest, DeleteGroupResponse, UpdateUserStatusRequest, CreateRoleConfigurationResponse, DeleteRoleAssignmentRequest, ListTargetsForPolicyRequest, DeleteOrganizationIdentityRequest, UpdateOrganizationNodeRequest, DeleteOrganizationNodesResponse, DescribeOrganizationFinancialByMemberResponse, AddUserToGroupResponse, CreateSCIMCredentialResponse, DeleteShareUnitRequest, DeleteOrgServiceAssignResponse, DescribeOrganizationMemberPoliciesResponse, DescribeShareUnitsRequest, ListSCIMCredentialsRequest, UpdateSCIMCredentialStatusRequest, UpdateUserSyncProvisioningResponse, CreateGroupResponse, UpdateZoneRequest, DeleteAccountResponse, DeleteSCIMCredentialResponse } from "./organization_models";
/**
 * organization client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 退出企业组织
     */
    QuitOrganization(req: QuitOrganizationRequest, cb?: (error: string, rep: QuitOrganizationResponse) => void): Promise<QuitOrganizationResponse>;
    /**
     * 查询用户组中的用户列表
     */
    ListGroupMembers(req: ListGroupMembersRequest, cb?: (error: string, rep: ListGroupMembersResponse) => void): Promise<ListGroupMembersResponse>;
    /**
     * 获取组织成员访问身份列表
     */
    ListOrganizationIdentity(req: ListOrganizationIdentityRequest, cb?: (error: string, rep: ListOrganizationIdentityResponse) => void): Promise<ListOrganizationIdentityResponse>;
    /**
     * 添加企业组织节点
     */
    AddOrganizationNode(req: AddOrganizationNodeRequest, cb?: (error: string, rep: AddOrganizationNodeResponse) => void): Promise<AddOrganizationNodeResponse>;
    /**
     * 修改绑定成员邮箱
     */
    UpdateOrganizationMemberEmailBind(req: UpdateOrganizationMemberEmailBindRequest, cb?: (error: string, rep: UpdateOrganizationMemberEmailBindResponse) => void): Promise<UpdateOrganizationMemberEmailBindResponse>;
    /**
     * 为权限配置移除策略
     */
    RemovePermissionPolicyFromRoleConfiguration(req: RemovePermissionPolicyFromRoleConfigurationRequest, cb?: (error: string, rep: RemovePermissionPolicyFromRoleConfigurationResponse) => void): Promise<RemovePermissionPolicyFromRoleConfigurationResponse>;
    /**
     * 启用/禁用SCIM密钥
     */
    UpdateSCIMCredentialStatus(req: UpdateSCIMCredentialStatusRequest, cb?: (error: string, rep: UpdateSCIMCredentialStatusResponse) => void): Promise<UpdateSCIMCredentialStatusResponse>;
    /**
     * 修改用户信息
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 添加集团服务委派管理员
     */
    CreateOrgServiceAssign(req: CreateOrgServiceAssignRequest, cb?: (error: string, rep: CreateOrgServiceAssignResponse) => void): Promise<CreateOrgServiceAssignResponse>;
    /**
     * 查询目标关联的有效策略
     */
    DescribeEffectivePolicy(req: DescribeEffectivePolicyRequest, cb?: (error: string, rep: DescribeEffectivePolicyResponse) => void): Promise<DescribeEffectivePolicyResponse>;
    /**
     * 查询用户信息
     */
    GetUser(req: GetUserRequest, cb?: (error: string, rep: GetUserResponse) => void): Promise<GetUserResponse>;
    /**
     * 开通身份中心服务（CIC）
     */
    OpenIdentityCenter(req: OpenIdentityCenterRequest, cb?: (error: string, rep: OpenIdentityCenterResponse) => void): Promise<OpenIdentityCenterResponse>;
    /**
     * 删除用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 查询权限配置信息
     */
    GetRoleConfiguration(req: GetRoleConfigurationRequest, cb?: (error: string, rep: GetRoleConfigurationResponse) => void): Promise<GetRoleConfigurationResponse>;
    /**
     * 创建组织成员
     */
    CreateOrganizationMember(req: CreateOrganizationMemberRequest, cb?: (error: string, rep: CreateOrganizationMemberResponse) => void): Promise<CreateOrganizationMemberResponse>;
    /**
     * 查询成员邮箱绑定详细信息
     */
    DescribeOrganizationMemberEmailBind(req: DescribeOrganizationMemberEmailBindRequest, cb?: (error: string, rep: DescribeOrganizationMemberEmailBindResponse) => void): Promise<DescribeOrganizationMemberEmailBindResponse>;
    /**
     * 删除共享单元资源
     */
    DeleteShareUnitResources(req: DeleteShareUnitResourcesRequest, cb?: (error: string, rep: DeleteShareUnitResourcesResponse) => void): Promise<DeleteShareUnitResourcesResponse>;
    /**
     * 查询异步任务列表
     */
    ListTasks(req: ListTasksRequest, cb?: (error: string, rep: ListTasksResponse) => void): Promise<ListTasksResponse>;
    /**
     * 从用户组中移除用户
     */
    RemoveUserFromGroup(req: RemoveUserFromGroupRequest, cb?: (error: string, rep: RemoveUserFromGroupResponse) => void): Promise<RemoveUserFromGroupResponse>;
    /**
     * 以产品维度获取组织财务信息
     */
    DescribeOrganizationFinancialByProduct(req: DescribeOrganizationFinancialByProductRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByProductResponse) => void): Promise<DescribeOrganizationFinancialByProductResponse>;
    /**
     * 获取组织节点列表
     */
    DescribeOrganizationNodes(req: DescribeOrganizationNodesRequest, cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void): Promise<DescribeOrganizationNodesResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 查询SAML签名证书列表
     */
    ListExternalSAMLIdPCertificates(req: ListExternalSAMLIdPCertificatesRequest, cb?: (error: string, rep: ListExternalSAMLIdPCertificatesResponse) => void): Promise<ListExternalSAMLIdPCertificatesResponse>;
    /**
     * 移除SAML签名证书
     */
    RemoveExternalSAMLIdPCertificate(req: RemoveExternalSAMLIdPCertificateRequest, cb?: (error: string, rep: RemoveExternalSAMLIdPCertificateResponse) => void): Promise<RemoveExternalSAMLIdPCertificateResponse>;
    /**
     * 成员账号删除检查
     */
    CheckAccountDelete(req: CheckAccountDeleteRequest, cb?: (error: string, rep: CheckAccountDeleteResponse) => void): Promise<CheckAccountDeleteResponse>;
    /**
     * 获取企业组织成员列表
     */
    DescribeOrganizationMembers(req: DescribeOrganizationMembersRequest, cb?: (error: string, rep: DescribeOrganizationMembersResponse) => void): Promise<DescribeOrganizationMembersResponse>;
    /**
     * 在成员账号上授权
     */
    CreateRoleAssignment(req: CreateRoleAssignmentRequest, cb?: (error: string, rep: CreateRoleAssignmentResponse) => void): Promise<CreateRoleAssignmentResponse>;
    /**
     * 创建权限配置
     */
    CreateRoleConfiguration(req: CreateRoleConfigurationRequest, cb?: (error: string, rep: CreateRoleConfigurationResponse) => void): Promise<CreateRoleConfigurationResponse>;
    /**
     * 接受加入共享单元邀请。
     */
    AcceptJoinShareUnitInvitation(req: AcceptJoinShareUnitInvitationRequest, cb?: (error: string, rep: AcceptJoinShareUnitInvitationResponse) => void): Promise<AcceptJoinShareUnitInvitationResponse>;
    /**
     * 查询用户列表
     */
    ListUsers(req: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse>;
    /**
     * 本接口（DescribePolicy）可用于查询查看策略详情。
     */
    DescribePolicy(req: DescribePolicyRequest, cb?: (error: string, rep: DescribePolicyResponse) => void): Promise<DescribePolicyResponse>;
    /**
     * 查询SAML身份提供商配置信息
     */
    GetExternalSAMLIdentityProvider(req: GetExternalSAMLIdentityProviderRequest, cb?: (error: string, rep: GetExternalSAMLIdentityProviderResponse) => void): Promise<GetExternalSAMLIdentityProviderResponse>;
    /**
     * 清空SAML身份提供商配置信息
     */
    ClearExternalSAMLIdentityProvider(req: ClearExternalSAMLIdentityProviderRequest, cb?: (error: string, rep: ClearExternalSAMLIdentityProviderResponse) => void): Promise<ClearExternalSAMLIdentityProviderResponse>;
    /**
     * 更新组织身份
     */
    UpdateOrganizationIdentity(req: UpdateOrganizationIdentityRequest, cb?: (error: string, rep: UpdateOrganizationIdentityResponse) => void): Promise<UpdateOrganizationIdentityResponse>;
    /**
     * 将权限配置部署到成员账号上
     */
    ProvisionRoleConfiguration(req: ProvisionRoleConfigurationRequest, cb?: (error: string, rep: ProvisionRoleConfigurationResponse) => void): Promise<ProvisionRoleConfigurationResponse>;
    /**
     * 取消组织成员和组织管理员子账号的授权关系
     */
    CancelOrganizationMemberAuthAccount(req: CancelOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void): Promise<CancelOrganizationMemberAuthAccountResponse>;
    /**
     * 以成员维度获取组织财务信息
     */
    DescribeOrganizationFinancialByMember(req: DescribeOrganizationFinancialByMemberRequest, cb?: (error: string, rep: DescribeOrganizationFinancialByMemberResponse) => void): Promise<DescribeOrganizationFinancialByMemberResponse>;
    /**
     * 查询用户组信息
     */
    GetGroup(req: GetGroupRequest, cb?: (error: string, rep: GetGroupResponse) => void): Promise<GetGroupResponse>;
    /**
     * 移除成员账号上的授权
     */
    DeleteRoleAssignment(req: DeleteRoleAssignmentRequest, cb?: (error: string, rep: DeleteRoleAssignmentResponse) => void): Promise<DeleteRoleAssignmentResponse>;
    /**
     * 创建组织成员访问策略
     */
    CreateOrganizationMembersPolicy(req: CreateOrganizationMembersPolicyRequest, cb?: (error: string, rep: CreateOrganizationMembersPolicyResponse) => void): Promise<CreateOrganizationMembersPolicyResponse>;
    /**
     * 移动成员到指定企业组织节点
     */
    MoveOrganizationNodeMembers(req: MoveOrganizationNodeMembersRequest, cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void): Promise<MoveOrganizationNodeMembersResponse>;
    /**
     * 更新用户空间名
     */
    UpdateZone(req: UpdateZoneRequest, cb?: (error: string, rep: UpdateZoneResponse) => void): Promise<UpdateZoneResponse>;
    /**
     * 添加组织身份
     */
    CreateOrganizationIdentity(req: CreateOrganizationIdentityRequest, cb?: (error: string, rep: CreateOrganizationIdentityResponse) => void): Promise<CreateOrganizationIdentityResponse>;
    /**
     * 添加组织成员邮箱
     */
    AddOrganizationMemberEmail(req: AddOrganizationMemberEmailRequest, cb?: (error: string, rep: AddOrganizationMemberEmailResponse) => void): Promise<AddOrganizationMemberEmailResponse>;
    /**
     * 删除共享单元成员
     */
    DeleteShareUnitMembers(req: DeleteShareUnitMembersRequest, cb?: (error: string, rep: DeleteShareUnitMembersResponse) => void): Promise<DeleteShareUnitMembersResponse>;
    /**
     * 查询用户加入的用户组
     */
    ListJoinedGroupsForUser(req: ListJoinedGroupsForUserRequest, cb?: (error: string, rep: ListJoinedGroupsForUserResponse) => void): Promise<ListJoinedGroupsForUserResponse>;
    /**
     * 获取权限配置中的策略列表
     */
    ListPermissionPoliciesInRoleConfiguration(req: ListPermissionPoliciesInRoleConfigurationRequest, cb?: (error: string, rep: ListPermissionPoliciesInRoleConfigurationResponse) => void): Promise<ListPermissionPoliciesInRoleConfigurationResponse>;
    /**
     * 创建共享单元。
     */
    AddShareUnit(req: AddShareUnitRequest, cb?: (error: string, rep: AddShareUnitResponse) => void): Promise<AddShareUnitResponse>;
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    DescribeOrganizationMemberAuthAccounts(req: DescribeOrganizationMemberAuthAccountsRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void): Promise<DescribeOrganizationMemberAuthAccountsResponse>;
    /**
     * 查询权限配置部署列表
     */
    ListRoleConfigurationProvisionings(req: ListRoleConfigurationProvisioningsRequest, cb?: (error: string, rep: ListRoleConfigurationProvisioningsResponse) => void): Promise<ListRoleConfigurationProvisioningsResponse>;
    /**
     * 添加共享单元成员
     */
    AddShareUnitMembers(req: AddShareUnitMembersRequest, cb?: (error: string, rep: AddShareUnitMembersResponse) => void): Promise<AddShareUnitMembersResponse>;
    /**
     * 本接口（DescribePolicyConfig）可用于查询企业组织策略配置
     */
    DescribePolicyConfig(req: DescribePolicyConfigRequest, cb?: (error: string, rep: DescribePolicyConfigResponse) => void): Promise<DescribePolicyConfigResponse>;
    /**
     * 编辑策略
     */
    UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse>;
    /**
     * 获取共享单元列表。
     */
    DescribeShareUnits(req: DescribeShareUnitsRequest, cb?: (error: string, rep: DescribeShareUnitsResponse) => void): Promise<DescribeShareUnitsResponse>;
    /**
     * 查询CAM用户同步列表
     */
    ListUserSyncProvisionings(req: ListUserSyncProvisioningsRequest, cb?: (error: string, rep: ListUserSyncProvisioningsResponse) => void): Promise<ListUserSyncProvisioningsResponse>;
    /**
     * 修改用户状态
     */
    UpdateUserStatus(req: UpdateUserStatusRequest, cb?: (error: string, rep: UpdateUserStatusResponse) => void): Promise<UpdateUserStatusResponse>;
    /**
     * 禁用策略类型
     */
    DisablePolicyType(req: DisablePolicyTypeRequest, cb?: (error: string, rep: DisablePolicyTypeResponse) => void): Promise<DisablePolicyTypeResponse>;
    /**
     * 创建子用户同步任务
     */
    CreateUserSyncProvisioning(req: CreateUserSyncProvisioningRequest, cb?: (error: string, rep: CreateUserSyncProvisioningResponse) => void): Promise<CreateUserSyncProvisioningResponse>;
    /**
     * 为权限配置添加策略
     */
    AddPermissionPolicyToRoleConfiguration(req: AddPermissionPolicyToRoleConfigurationRequest, cb?: (error: string, rep: AddPermissionPolicyToRoleConfigurationResponse) => void): Promise<AddPermissionPolicyToRoleConfigurationResponse>;
    /**
     * 删除组织成员访问策略
     */
    DeleteOrganizationMembersPolicy(req: DeleteOrganizationMembersPolicyRequest, cb?: (error: string, rep: DeleteOrganizationMembersPolicyResponse) => void): Promise<DeleteOrganizationMembersPolicyResponse>;
    /**
     * 删除策略
     */
    DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse>;
    /**
     * 创建用户组
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 获取共享单元成员列表。
     */
    DescribeShareUnitMembers(req: DescribeShareUnitMembersRequest, cb?: (error: string, rep: DescribeShareUnitMembersResponse) => void): Promise<DescribeShareUnitMembersResponse>;
    /**
     * 解除权限配置在成员账号上的部署
     */
    DismantleRoleConfiguration(req: DismantleRoleConfigurationRequest, cb?: (error: string, rep: DismantleRoleConfigurationResponse) => void): Promise<DismantleRoleConfigurationResponse>;
    /**
     * 删除共享单元。
     */
    DeleteShareUnit(req: DeleteShareUnitRequest, cb?: (error: string, rep: DeleteShareUnitResponse) => void): Promise<DeleteShareUnitResponse>;
    /**
     * 从组织中移除成员账号，不会删除账号。
     */
    DeleteOrganizationMembers(req: DeleteOrganizationMembersRequest, cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void): Promise<DeleteOrganizationMembersResponse>;
    /**
     * 获取集团服务委派管理员列表
     */
    ListOrgServiceAssignMember(req: ListOrgServiceAssignMemberRequest, cb?: (error: string, rep: ListOrgServiceAssignMemberResponse) => void): Promise<ListOrgServiceAssignMemberResponse>;
    /**
     * 拒绝加入共享单元邀请。
     */
    RejectJoinShareUnitInvitation(req: RejectJoinShareUnitInvitationRequest, cb?: (error: string, rep: RejectJoinShareUnitInvitationResponse) => void): Promise<RejectJoinShareUnitInvitationResponse>;
    /**
     * 获取成员标签检测不合规资源列表
     */
    ListNonCompliantResource(req: ListNonCompliantResourceRequest, cb?: (error: string, rep: ListNonCompliantResourceResponse) => void): Promise<ListNonCompliantResourceResponse>;
    /**
     * 删除用户组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 获取SCIM同步状态
     */
    GetSCIMSynchronizationStatus(req: GetSCIMSynchronizationStatusRequest, cb?: (error: string, rep: GetSCIMSynchronizationStatusResponse) => void): Promise<GetSCIMSynchronizationStatusResponse>;
    /**
     * 配置SAML身份提供商信息
     */
    SetExternalSAMLIdentityProvider(req: SetExternalSAMLIdentityProviderRequest, cb?: (error: string, rep: SetExternalSAMLIdentityProviderResponse) => void): Promise<SetExternalSAMLIdentityProviderResponse>;
    /**
     * 删除企业组织
     */
    DeleteOrganization(req?: DeleteOrganizationRequest, cb?: (error: string, rep: DeleteOrganizationResponse) => void): Promise<DeleteOrganizationResponse>;
    /**
     * 本接口（ListPoliciesForTarget）查询目标关联的策略列表
     */
    ListPoliciesForTarget(req: ListPoliciesForTargetRequest, cb?: (error: string, rep: ListPoliciesForTargetResponse) => void): Promise<ListPoliciesForTargetResponse>;
    /**
     * 删除SCIM密钥
     */
    DeleteSCIMCredential(req: DeleteSCIMCredentialRequest, cb?: (error: string, rep: DeleteSCIMCredentialResponse) => void): Promise<DeleteSCIMCredentialResponse>;
    /**
     * 创建子用户同步任务
     */
    UpdateUserSyncProvisioning(req: UpdateUserSyncProvisioningRequest, cb?: (error: string, rep: UpdateUserSyncProvisioningResponse) => void): Promise<UpdateUserSyncProvisioningResponse>;
    /**
     * 查询CAM用户同步
     */
    GetUserSyncProvisioning(req: GetUserSyncProvisioningRequest, cb?: (error: string, rep: GetUserSyncProvisioningResponse) => void): Promise<GetUserSyncProvisioningResponse>;
    /**
     * 获取企业组织信息
     */
    DescribeOrganization(req: DescribeOrganizationRequest, cb?: (error: string, rep: DescribeOrganizationResponse) => void): Promise<DescribeOrganizationResponse>;
    /**
     * 启用/禁用用户SCIM同步
     */
    UpdateSCIMSynchronizationStatus(req: UpdateSCIMSynchronizationStatusRequest, cb?: (error: string, rep: UpdateSCIMSynchronizationStatusResponse) => void): Promise<UpdateSCIMSynchronizationStatusResponse>;
    /**
     * 查询用户组列表
     */
    ListGroups(req: ListGroupsRequest, cb?: (error: string, rep: ListGroupsResponse) => void): Promise<ListGroupsResponse>;
    /**
     * 获取共享单元资源列表。
     */
    DescribeShareUnitResources(req: DescribeShareUnitResourcesRequest, cb?: (error: string, rep: DescribeShareUnitResourcesResponse) => void): Promise<DescribeShareUnitResourcesResponse>;
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    BindOrganizationMemberAuthAccount(req: BindOrganizationMemberAuthAccountRequest, cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void): Promise<BindOrganizationMemberAuthAccountResponse>;
    /**
     * 修改用户组信息
     */
    UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse>;
    /**
     * 创建一个特殊类型的策略，您可以关联到企业组织Root节点、企业部门节点或者企业的成员账号。
     */
    CreatePolicy(req: CreatePolicyRequest, cb?: (error: string, rep: CreatePolicyResponse) => void): Promise<CreatePolicyResponse>;
    /**
     * 查询用户同步异步任务的状态
     */
    GetProvisioningTaskStatus(req: GetProvisioningTaskStatusRequest, cb?: (error: string, rep: GetProvisioningTaskStatusResponse) => void): Promise<GetProvisioningTaskStatusResponse>;
    /**
     * 更新企业组织节点
     */
    UpdateOrganizationNode(req: UpdateOrganizationNodeRequest, cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void): Promise<UpdateOrganizationNodeResponse>;
    /**
     * 更新共享单元。
     */
    UpdateShareUnit(req: UpdateShareUnitRequest, cb?: (error: string, rep: UpdateShareUnitResponse) => void): Promise<UpdateShareUnitResponse>;
    /**
     * 更新组织成员信息
     */
    UpdateOrganizationMember(req: UpdateOrganizationMemberRequest, cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void): Promise<UpdateOrganizationMemberResponse>;
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    DescribeOrganizationAuthNode(req: DescribeOrganizationAuthNodeRequest, cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void): Promise<DescribeOrganizationAuthNodeResponse>;
    /**
     * 获取集团账号身份中心服务信息
     */
    DescribeIdentityCenter(req?: DescribeIdentityCenterRequest, cb?: (error: string, rep: DescribeIdentityCenterResponse) => void): Promise<DescribeIdentityCenterResponse>;
    /**
     * 创建SCIM密钥
     */
    CreateSCIMCredential(req: CreateSCIMCredentialRequest, cb?: (error: string, rep: CreateSCIMCredentialResponse) => void): Promise<CreateSCIMCredentialResponse>;
    /**
     * 获取组织成员访问授权列表
     */
    DescribeOrganizationMemberAuthIdentities(req: DescribeOrganizationMemberAuthIdentitiesRequest, cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void): Promise<DescribeOrganizationMemberAuthIdentitiesResponse>;
    /**
     * 重新发送成员绑定邮箱激活邮件
     */
    SendOrgMemberAccountBindEmail(req: SendOrgMemberAccountBindEmailRequest, cb?: (error: string, rep: SendOrgMemberAccountBindEmailResponse) => void): Promise<SendOrgMemberAccountBindEmailResponse>;
    /**
     * 查询空间的统计信息
     */
    GetZoneStatistics(req: GetZoneStatisticsRequest, cb?: (error: string, rep: GetZoneStatisticsResponse) => void): Promise<GetZoneStatisticsResponse>;
    /**
     * 解绑策略
     */
    DetachPolicy(req: DetachPolicyRequest, cb?: (error: string, rep: DetachPolicyResponse) => void): Promise<DetachPolicyResponse>;
    /**
     * 查询用户SCIM密钥列表
     */
    ListSCIMCredentials(req: ListSCIMCredentialsRequest, cb?: (error: string, rep: ListSCIMCredentialsResponse) => void): Promise<ListSCIMCredentialsResponse>;
    /**
     * 添加组织成员访问授权
     */
    CreateOrganizationMemberAuthIdentity(req: CreateOrganizationMemberAuthIdentityRequest, cb?: (error: string, rep: CreateOrganizationMemberAuthIdentityResponse) => void): Promise<CreateOrganizationMemberAuthIdentityResponse>;
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
     * 查询授权列表
     */
    ListRoleAssignments(req: ListRoleAssignmentsRequest, cb?: (error: string, rep: ListRoleAssignmentsResponse) => void): Promise<ListRoleAssignmentsResponse>;
    /**
     * 获取组织成员的授权策略列表
     */
    DescribeOrganizationMemberPolicies(req: DescribeOrganizationMemberPoliciesRequest, cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void): Promise<DescribeOrganizationMemberPoliciesResponse>;
    /**
     * 删除子用户同步任务
     */
    DeleteUserSyncProvisioning(req: DeleteUserSyncProvisioningRequest, cb?: (error: string, rep: DeleteUserSyncProvisioningResponse) => void): Promise<DeleteUserSyncProvisioningResponse>;
    /**
     * 修改权限配置信息
     */
    UpdateRoleConfiguration(req: UpdateRoleConfigurationRequest, cb?: (error: string, rep: UpdateRoleConfigurationResponse) => void): Promise<UpdateRoleConfigurationResponse>;
    /**
     * 查询权限配置列表
     */
    ListRoleConfigurations(req: ListRoleConfigurationsRequest, cb?: (error: string, rep: ListRoleConfigurationsResponse) => void): Promise<ListRoleConfigurationsResponse>;
    /**
     * 邀请组织成员
     */
    InviteOrganizationMember(req: InviteOrganizationMemberRequest, cb?: (error: string, rep: InviteOrganizationMemberResponse) => void): Promise<InviteOrganizationMemberResponse>;
    /**
     * 添加共享单元资源
     */
    AddShareUnitResources(req: AddShareUnitResourcesRequest, cb?: (error: string, rep: AddShareUnitResourcesResponse) => void): Promise<AddShareUnitResourcesResponse>;
    /**
     * 绑定策略
     */
    AttachPolicy(req: AttachPolicyRequest, cb?: (error: string, rep: AttachPolicyResponse) => void): Promise<AttachPolicyResponse>;
    /**
     * 获取可共享地域列表
     */
    DescribeShareAreas(req: DescribeShareAreasRequest, cb?: (error: string, rep: DescribeShareAreasResponse) => void): Promise<DescribeShareAreasResponse>;
    /**
     * 为用户组添加用户
     */
    AddUserToGroup(req: AddUserToGroupRequest, cb?: (error: string, rep: AddUserToGroupResponse) => void): Promise<AddUserToGroupResponse>;
    /**
     * 删除权限配置信息
     */
    DeleteRoleConfiguration(req: DeleteRoleConfigurationRequest, cb?: (error: string, rep: DeleteRoleConfigurationResponse) => void): Promise<DeleteRoleConfigurationResponse>;
    /**
     * 创建企业组织
     */
    CreateOrganization(req?: CreateOrganizationRequest, cb?: (error: string, rep: CreateOrganizationResponse) => void): Promise<CreateOrganizationResponse>;
    /**
     * 添加SAML签名证书
     */
    AddExternalSAMLIdPCertificate(req: AddExternalSAMLIdPCertificateRequest, cb?: (error: string, rep: AddExternalSAMLIdPCertificateResponse) => void): Promise<AddExternalSAMLIdPCertificateResponse>;
    /**
     * 删除集团服务委派管理员
     */
    DeleteOrgServiceAssign(req: DeleteOrgServiceAssignRequest, cb?: (error: string, rep: DeleteOrgServiceAssignResponse) => void): Promise<DeleteOrgServiceAssignResponse>;
    /**
     * 删除组织身份
     */
    DeleteOrganizationIdentity(req: DeleteOrganizationIdentityRequest, cb?: (error: string, rep: DeleteOrganizationIdentityResponse) => void): Promise<DeleteOrganizationIdentityResponse>;
    /**
     * 启用策略类型
     */
    EnablePolicyType(req: EnablePolicyTypeRequest, cb?: (error: string, rep: EnablePolicyTypeResponse) => void): Promise<EnablePolicyTypeResponse>;
    /**
     * 查询SAML服务提供商配置信息
     */
    GetZoneSAMLServiceProviderInfo(req: GetZoneSAMLServiceProviderInfoRequest, cb?: (error: string, rep: GetZoneSAMLServiceProviderInfoResponse) => void): Promise<GetZoneSAMLServiceProviderInfoResponse>;
    /**
     * 本接口（ListTargetsForPolicy）查询某个指定策略关联的目标列表
     */
    ListTargetsForPolicy(req: ListTargetsForPolicyRequest, cb?: (error: string, rep: ListTargetsForPolicyResponse) => void): Promise<ListTargetsForPolicyResponse>;
    /**
     * 本接口（ListPolicies）可用于查询查看策略列表数据
     */
    ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse>;
    /**
     * 查询异步任务的状态
     */
    GetTaskStatus(req: GetTaskStatusRequest, cb?: (error: string, rep: GetTaskStatusResponse) => void): Promise<GetTaskStatusResponse>;
    /**
     * 创建组织成员访问授权策略
     */
    CreateOrganizationMemberPolicy(req: CreateOrganizationMemberPolicyRequest, cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void): Promise<CreateOrganizationMemberPolicyResponse>;
    /**
     * 获取集团服务设置列表
     */
    ListOrganizationService(req: ListOrganizationServiceRequest, cb?: (error: string, rep: ListOrganizationServiceResponse) => void): Promise<ListOrganizationServiceResponse>;
    /**
     * 为权限配置修改自定义策略
     */
    UpdateCustomPolicyForRoleConfiguration(req: UpdateCustomPolicyForRoleConfigurationRequest, cb?: (error: string, rep: UpdateCustomPolicyForRoleConfigurationResponse) => void): Promise<UpdateCustomPolicyForRoleConfigurationResponse>;
    /**
     * 删除组织成员访问授权
     */
    DeleteOrganizationMemberAuthIdentity(req: DeleteOrganizationMemberAuthIdentityRequest, cb?: (error: string, rep: DeleteOrganizationMemberAuthIdentityResponse) => void): Promise<DeleteOrganizationMemberAuthIdentityResponse>;
}
