import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListAttachedRolePoliciesResponse, ListAccessKeysRequest, SetMfaFlagResponse, DeleteUserRequest, DetachGroupPolicyRequest, DescribeRoleListResponse, CreatePolicyResponse, GetRoleRequest, CreateServiceLinkedRoleRequest, ListAttachedGroupPoliciesRequest, ListGroupsForUserRequest, AttachRolePolicyResponse, GetServiceLinkedRoleDeletionStatusResponse, GetSecurityLastUsedRequest, DeleteUserPermissionsBoundaryResponse, ListUsersResponse, UpdateRoleDescriptionResponse, GetAccountSummaryRequest, DetachUserPolicyRequest, ListGroupsResponse, ListPolicyVersionsRequest, GetCustomMFATokenInfoRequest, DescribeRoleListRequest, GetGroupRequest, DeleteRoleResponse, DescribeSubAccountsRequest, DeleteUserPermissionsBoundaryRequest, ListSAMLProvidersRequest, ListGroupsRequest, DeletePolicyVersionResponse, UpdateSAMLProviderRequest, UpdateAssumeRolePolicyRequest, ListGroupsForUserResponse, ListUsersForGroupRequest, RemoveUserFromGroupRequest, CreatePolicyVersionResponse, ListPoliciesResponse, UpdateRoleDescriptionRequest, DeleteGroupResponse, DescribeSafeAuthFlagResponse, CreatePolicyVersionRequest, DeleteGroupRequest, GetUserResponse, DeleteUserResponse, DetachRolePolicyRequest, ListPoliciesGrantingServiceAccessResponse, DeleteRolePermissionsBoundaryRequest, DeletePolicyRequest, AddUserRequest, DeleteRoleRequest, ListWeChatWorkSubAccountsRequest, UpdateRoleConsoleLoginRequest, GetCustomMFATokenInfoResponse, UpdateAssumeRolePolicyResponse, GetPolicyVersionRequest, CreateSAMLProviderResponse, DeleteRolePermissionsBoundaryResponse, GetUserRequest, CreateGroupRequest, ListPoliciesGrantingServiceAccessRequest, UpdateSAMLProviderResponse, UpdateUserRequest, ListWeChatWorkSubAccountsResponse, CreateSAMLProviderRequest, PutRolePermissionsBoundaryRequest, UpdateRoleConsoleLoginResponse, AttachRolePolicyRequest, ConsumeCustomMFATokenResponse, AttachUserPolicyRequest, ListAttachedGroupPoliciesResponse, ListAttachedUserPoliciesResponse, PutUserPermissionsBoundaryResponse, DeletePolicyResponse, ConsumeCustomMFATokenRequest, GetGroupResponse, DeleteSAMLProviderRequest, DeleteSAMLProviderResponse, UpdateUserResponse, GetAccountSummaryResponse, CreateServiceLinkedRoleResponse, ListUsersRequest, ListCollaboratorsRequest, UpdatePolicyResponse, AttachGroupPolicyResponse, UpdateGroupResponse, ListEntitiesForPolicyRequest, ListPoliciesRequest, GetServiceLinkedRoleDeletionStatusRequest, DetachGroupPolicyResponse, CreatePolicyRequest, DeletePolicyVersionRequest, UpdateGroupRequest, GetPolicyVersionResponse, CreateRoleResponse, GetSAMLProviderResponse, DescribeSafeAuthFlagIntlResponse, ListPolicyVersionsResponse, GetPolicyRequest, DescribeSafeAuthFlagIntlRequest, SetDefaultPolicyVersionRequest, AddUserToGroupRequest, RemoveUserFromGroupResponse, DetachRolePolicyResponse, PutUserPermissionsBoundaryRequest, ListSAMLProvidersResponse, SetDefaultPolicyVersionResponse, ListAttachedRolePoliciesRequest, GetSAMLProviderRequest, DetachUserPolicyResponse, GetRoleResponse, CreateRoleRequest, DeleteServiceLinkedRoleResponse, GetPolicyResponse, DescribeSafeAuthFlagRequest, AttachGroupPolicyRequest, DeleteServiceLinkedRoleRequest, ListUsersForGroupResponse, AddUserResponse, DescribeSubAccountsResponse, ListEntitiesForPolicyResponse, AddUserToGroupResponse, AttachUserPolicyResponse, DescribeSafeAuthFlagCollResponse, DescribeSafeAuthFlagCollRequest, PutRolePermissionsBoundaryResponse, SetMfaFlagRequest, ListCollaboratorsResponse, ListAccessKeysResponse, GetSecurityLastUsedResponse, ListAttachedUserPoliciesRequest, UpdatePolicyRequest, CreateGroupResponse } from "./cam_models";
/**
 * cam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     */
    SetMfaFlag(req: SetMfaFlagRequest, cb?: (error: string, rep: SetMfaFlagResponse) => void): Promise<SetMfaFlagResponse>;
    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     */
    UpdateRoleConsoleLogin(req: UpdateRoleConsoleLoginRequest, cb?: (error: string, rep: UpdateRoleConsoleLoginResponse) => void): Promise<UpdateRoleConsoleLoginResponse>;
    /**
     * 创建用户组
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 删除服务相关角色
     */
    DeleteServiceLinkedRole(req: DeleteServiceLinkedRoleRequest, cb?: (error: string, rep: DeleteServiceLinkedRoleResponse) => void): Promise<DeleteServiceLinkedRoleResponse>;
    /**
     * 添加子用户
     */
    AddUser(req: AddUserRequest, cb?: (error: string, rep: AddUserResponse) => void): Promise<AddUserResponse>;
    /**
     * 创建服务相关角色
     */
    CreateServiceLinkedRole(req: CreateServiceLinkedRoleRequest, cb?: (error: string, rep: CreateServiceLinkedRoleResponse) => void): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 查询SAML身份提供商详情
     */
    GetSAMLProvider(req: GetSAMLProviderRequest, cb?: (error: string, rep: GetSAMLProviderResponse) => void): Promise<GetSAMLProviderResponse>;
    /**
     * 查询SAML身份提供商列表
     */
    ListSAMLProviders(req?: ListSAMLProvidersRequest, cb?: (error: string, rep: ListSAMLProvidersResponse) => void): Promise<ListSAMLProvidersResponse>;
    /**
     * 本接口（CreateRole）用于创建角色。
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 设置角色权限边界
     */
    PutRolePermissionsBoundary(req: PutRolePermissionsBoundaryRequest, cb?: (error: string, rep: PutRolePermissionsBoundaryResponse) => void): Promise<PutRolePermissionsBoundaryResponse>;
    /**
     * 拉取子用户
     */
    ListUsers(req?: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse>;
    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     */
    ListAttachedRolePolicies(req: ListAttachedRolePoliciesRequest, cb?: (error: string, rep: ListAttachedRolePoliciesResponse) => void): Promise<ListAttachedRolePoliciesResponse>;
    /**
     * 本接口（DeletePolicy）可用于删除策略。
     */
    DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse>;
    /**
     * 删除角色权限边界
     */
    DeleteRolePermissionsBoundary(req: DeleteRolePermissionsBoundaryRequest, cb?: (error: string, rep: DeleteRolePermissionsBoundaryResponse) => void): Promise<DeleteRolePermissionsBoundaryResponse>;
    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     */
    DeletePolicyVersion(req: DeletePolicyVersionRequest, cb?: (error: string, rep: DeletePolicyVersionResponse) => void): Promise<DeletePolicyVersionResponse>;
    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     */
    DetachRolePolicy(req: DetachRolePolicyRequest, cb?: (error: string, rep: DetachRolePolicyResponse) => void): Promise<DetachRolePolicyResponse>;
    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     */
    DescribeRoleList(req: DescribeRoleListRequest, cb?: (error: string, rep: DescribeRoleListResponse) => void): Promise<DescribeRoleListResponse>;
    /**
     * 创建SAML身份提供商
     */
    CreateSAMLProvider(req: CreateSAMLProviderRequest, cb?: (error: string, rep: CreateSAMLProviderResponse) => void): Promise<CreateSAMLProviderResponse>;
    /**
     * 删除SAML身份提供商
     */
    DeleteSAMLProvider(req: DeleteSAMLProviderRequest, cb?: (error: string, rep: DeleteSAMLProviderResponse) => void): Promise<DeleteSAMLProviderResponse>;
    /**
     * 更新子用户
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     */
    GetPolicy(req: GetPolicyRequest, cb?: (error: string, rep: GetPolicyResponse) => void): Promise<GetPolicyResponse>;
    /**
     * 更新SAML身份提供商信息
     */
    UpdateSAMLProvider(req: UpdateSAMLProviderRequest, cb?: (error: string, rep: UpdateSAMLProviderResponse) => void): Promise<UpdateSAMLProviderResponse>;
    /**
     * 获取自定义多因子Token关联信息
     */
    GetCustomMFATokenInfo(req: GetCustomMFATokenInfoRequest, cb?: (error: string, rep: GetCustomMFATokenInfoResponse) => void): Promise<GetCustomMFATokenInfoResponse>;
    /**
     * 列出指定CAM用户的访问密钥
     */
    ListAccessKeys(req: ListAccessKeysRequest, cb?: (error: string, rep: ListAccessKeysResponse) => void): Promise<ListAccessKeysResponse>;
    /**
     * 删除用户组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 本接口（DeleteRole）用于删除指定角色。
     */
    DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse>;
    /**
     * 查询子用户
     */
    GetUser(req: GetUserRequest, cb?: (error: string, rep: GetUserResponse) => void): Promise<GetUserResponse>;
    /**
     * 删除用户权限边界
     */
    DeleteUserPermissionsBoundary(req: DeleteUserPermissionsBoundaryRequest, cb?: (error: string, rep: DeleteUserPermissionsBoundaryResponse) => void): Promise<DeleteUserPermissionsBoundaryResponse>;
    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     */
    ListAttachedGroupPolicies(req: ListAttachedGroupPoliciesRequest, cb?: (error: string, rep: ListAttachedGroupPoliciesResponse) => void): Promise<ListAttachedGroupPoliciesResponse>;
    /**
     * 根据删除TaskId获取服务相关角色删除状态
     */
    GetServiceLinkedRoleDeletionStatus(req: GetServiceLinkedRoleDeletionStatusRequest, cb?: (error: string, rep: GetServiceLinkedRoleDeletionStatusResponse) => void): Promise<GetServiceLinkedRoleDeletionStatusResponse>;
    /**
     * 获取所有已授权服务
     */
    ListPoliciesGrantingServiceAccess(req: ListPoliciesGrantingServiceAccessRequest, cb?: (error: string, rep: ListPoliciesGrantingServiceAccessResponse) => void): Promise<ListPoliciesGrantingServiceAccessResponse>;
    /**
     * 验证自定义多因子Token
     */
    ConsumeCustomMFAToken(req: ConsumeCustomMFATokenRequest, cb?: (error: string, rep: ConsumeCustomMFATokenResponse) => void): Promise<ConsumeCustomMFATokenResponse>;
    /**
     * 查询用户组详情
     */
    GetGroup(req: GetGroupRequest, cb?: (error: string, rep: GetGroupResponse) => void): Promise<GetGroupResponse>;
    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     */
    GetPolicyVersion(req: GetPolicyVersionRequest, cb?: (error: string, rep: GetPolicyVersionResponse) => void): Promise<GetPolicyVersionResponse>;
    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     */
    UpdateAssumeRolePolicy(req: UpdateAssumeRolePolicyRequest, cb?: (error: string, rep: UpdateAssumeRolePolicyResponse) => void): Promise<UpdateAssumeRolePolicyResponse>;
    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     */
    SetDefaultPolicyVersion(req: SetDefaultPolicyVersionRequest, cb?: (error: string, rep: SetDefaultPolicyVersionResponse) => void): Promise<SetDefaultPolicyVersionResponse>;
    /**
     * 查询用户组列表
     */
    ListGroups(req: ListGroupsRequest, cb?: (error: string, rep: ListGroupsResponse) => void): Promise<ListGroupsResponse>;
    /**
     * 用户加入到用户组
     */
    AddUserToGroup(req: AddUserToGroupRequest, cb?: (error: string, rep: AddUserToGroupResponse) => void): Promise<AddUserToGroupResponse>;
    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     */
    AttachRolePolicy(req: AttachRolePolicyRequest, cb?: (error: string, rep: AttachRolePolicyResponse) => void): Promise<AttachRolePolicyResponse>;
    /**
     * 查询安全设置
     */
    DescribeSafeAuthFlagColl(req: DescribeSafeAuthFlagCollRequest, cb?: (error: string, rep: DescribeSafeAuthFlagCollResponse) => void): Promise<DescribeSafeAuthFlagCollResponse>;
    /**
     * 查询账户摘要
     */
    GetAccountSummary(req?: GetAccountSummaryRequest, cb?: (error: string, rep: GetAccountSummaryResponse) => void): Promise<GetAccountSummaryResponse>;
    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     */
    ListPolicyVersions(req: ListPolicyVersionsRequest, cb?: (error: string, rep: ListPolicyVersionsResponse) => void): Promise<ListPolicyVersionsResponse>;
    /**
     * 查询安全设置
     */
    DescribeSafeAuthFlag(req?: DescribeSafeAuthFlagRequest, cb?: (error: string, rep: DescribeSafeAuthFlagResponse) => void): Promise<DescribeSafeAuthFlagResponse>;
    /**
     * 查询安全设置(国际站)
     */
    DescribeSafeAuthFlagIntl(req?: DescribeSafeAuthFlagIntlRequest, cb?: (error: string, rep: DescribeSafeAuthFlagIntlResponse) => void): Promise<DescribeSafeAuthFlagIntlResponse>;
    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     */
    GetRole(req: GetRoleRequest, cb?: (error: string, rep: GetRoleResponse) => void): Promise<GetRoleResponse>;
    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     */
    UpdateRoleDescription(req: UpdateRoleDescriptionRequest, cb?: (error: string, rep: UpdateRoleDescriptionResponse) => void): Promise<UpdateRoleDescriptionResponse>;
    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     */
    ListAttachedUserPolicies(req: ListAttachedUserPoliciesRequest, cb?: (error: string, rep: ListAttachedUserPoliciesResponse) => void): Promise<ListAttachedUserPoliciesResponse>;
    /**
     * 删除子用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     */
    CreatePolicyVersion(req: CreatePolicyVersionRequest, cb?: (error: string, rep: CreatePolicyVersionResponse) => void): Promise<CreatePolicyVersionResponse>;
    /**
     * 获取协作者列表
     */
    ListCollaborators(req: ListCollaboratorsRequest, cb?: (error: string, rep: ListCollaboratorsResponse) => void): Promise<ListCollaboratorsResponse>;
    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     */
    DetachGroupPolicy(req: DetachGroupPolicyRequest, cb?: (error: string, rep: DetachGroupPolicyResponse) => void): Promise<DetachGroupPolicyResponse>;
    /**
     * 通过子用户UIN列表查询子用户
     */
    DescribeSubAccounts(req: DescribeSubAccountsRequest, cb?: (error: string, rep: DescribeSubAccountsResponse) => void): Promise<DescribeSubAccountsResponse>;
    /**
     * 从用户组删除用户
     */
    RemoveUserFromGroup(req: RemoveUserFromGroupRequest, cb?: (error: string, rep: RemoveUserFromGroupResponse) => void): Promise<RemoveUserFromGroupResponse>;
    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     */
    ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse>;
    /**
     * 查询用户组关联的用户列表
     */
    ListUsersForGroup(req: ListUsersForGroupRequest, cb?: (error: string, rep: ListUsersForGroupResponse) => void): Promise<ListUsersForGroupResponse>;
    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     */
    AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse>;
    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     */
    ListEntitiesForPolicy(req: ListEntitiesForPolicyRequest, cb?: (error: string, rep: ListEntitiesForPolicyResponse) => void): Promise<ListEntitiesForPolicyResponse>;
    /**
     * 获取企业微信子用户列表
     */
    ListWeChatWorkSubAccounts(req: ListWeChatWorkSubAccountsRequest, cb?: (error: string, rep: ListWeChatWorkSubAccountsResponse) => void): Promise<ListWeChatWorkSubAccountsResponse>;
    /**
     * 获取密钥最近使用情况
     */
    GetSecurityLastUsed(req: GetSecurityLastUsedRequest, cb?: (error: string, rep: GetSecurityLastUsedResponse) => void): Promise<GetSecurityLastUsedResponse>;
    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     */
    AttachGroupPolicy(req: AttachGroupPolicyRequest, cb?: (error: string, rep: AttachGroupPolicyResponse) => void): Promise<AttachGroupPolicyResponse>;
    /**
     * 更新用户组
     */
    UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse>;
    /**
     * 设置用户权限边界
     */
    PutUserPermissionsBoundary(req: PutUserPermissionsBoundaryRequest, cb?: (error: string, rep: PutUserPermissionsBoundaryResponse) => void): Promise<PutUserPermissionsBoundaryResponse>;
    /**
     * 本接口（CreatePolicy）可用于创建策略。
     */
    CreatePolicy(req: CreatePolicyRequest, cb?: (error: string, rep: CreatePolicyResponse) => void): Promise<CreatePolicyResponse>;
    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     */
    DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse>;
    /**
     * 列出用户关联的用户组
     */
    ListGroupsForUser(req: ListGroupsForUserRequest, cb?: (error: string, rep: ListGroupsForUserResponse) => void): Promise<ListGroupsForUserResponse>;
    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     */
    UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse>;
}
