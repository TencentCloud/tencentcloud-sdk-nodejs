import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListAttachedRolePoliciesResponse, CreateMessageReceiverRequest, UpdateUserOIDCConfigResponse, UpdateRoleSessionDurationResponse, ListAccessKeysRequest, SetMfaFlagResponse, UpdateSAMLProviderRequest, DeleteUserRequest, DetachGroupPolicyRequest, DescribeRoleListResponse, UpdatePolicyResponse, DeleteUserResponse, TagRoleResponse, GetRoleRequest, CreateServiceLinkedRoleRequest, ListAttachedGroupPoliciesRequest, ListGroupsForUserRequest, AttachRolePolicyResponse, GetUserPermissionBoundaryRequest, DescribeOIDCConfigRequest, GetRolePermissionBoundaryRequest, GetServiceLinkedRoleDeletionStatusResponse, GetSecurityLastUsedRequest, DescribeUserSAMLConfigResponse, DeleteUserPermissionsBoundaryResponse, ListUsersResponse, UpdateRoleDescriptionResponse, GetAccountSummaryRequest, DeletePolicyResponse, GetUserAppIdResponse, GetUserAppIdRequest, DescribeOIDCConfigResponse, ListPolicyVersionsRequest, GetCustomMFATokenInfoRequest, DescribeRoleListRequest, DescribeUserSAMLConfigRequest, DeleteMessageReceiverResponse, DeleteAccessKeyResponse, PutRolePermissionsBoundaryRequest, GetGroupRequest, DeleteRoleResponse, DetachUserPolicyRequest, DescribeSubAccountsRequest, DeleteUserPermissionsBoundaryRequest, ListSAMLProvidersRequest, UpdateRoleSessionDurationRequest, CreateAccessKeyResponse, DeletePolicyVersionResponse, CreateAccessKeyRequest, BuildDataFlowAuthTokenRequest, GetRolePermissionBoundaryResponse, ListGroupsForUserResponse, ListUsersForGroupRequest, RemoveUserFromGroupRequest, CreatePolicyVersionResponse, ListPoliciesResponse, DeleteAccessKeyRequest, UpdateRoleDescriptionRequest, UpdateUserSAMLConfigRequest, DeleteGroupResponse, DescribeSafeAuthFlagResponse, CreatePolicyVersionRequest, UpdateAccessKeyResponse, CreateUserOIDCConfigResponse, ListAttachedUserAllPoliciesResponse, DeleteGroupRequest, GetUserResponse, GetUserPermissionBoundaryResponse, CreatePolicyResponse, ListGroupsResponse, DetachRolePolicyRequest, UntagRoleResponse, ListPoliciesGrantingServiceAccessResponse, DeleteRolePermissionsBoundaryRequest, DescribeUserOIDCConfigResponse, DeletePolicyRequest, AddUserRequest, UpdateAssumeRolePolicyRequest, DeleteRoleRequest, ListWeChatWorkSubAccountsRequest, UpdateRoleConsoleLoginRequest, BuildDataFlowAuthTokenResponse, UpdateUserResponse, UpdateAssumeRolePolicyResponse, GetPolicyVersionRequest, CreateSAMLProviderResponse, DeleteRolePermissionsBoundaryResponse, GetUserRequest, CreateGroupRequest, ListReceiverRequest, DisableUserSSORequest, ListPoliciesGrantingServiceAccessRequest, UpdateSAMLProviderResponse, UpdateAccessKeyRequest, UpdateUserRequest, ListWeChatWorkSubAccountsResponse, CreateSAMLProviderRequest, DisableUserSSOResponse, UpdateRoleConsoleLoginResponse, AttachRolePolicyRequest, ConsumeCustomMFATokenResponse, AttachUserPolicyRequest, ListAttachedGroupPoliciesResponse, ListAttachedUserPoliciesResponse, PutUserPermissionsBoundaryResponse, GetPolicyVersionResponse, GetCustomMFATokenInfoResponse, ConsumeCustomMFATokenRequest, CreateOIDCConfigRequest, GetGroupResponse, ListReceiverResponse, UpdateOIDCConfigResponse, UntagRoleRequest, AttachGroupPolicyRequest, DeleteSAMLProviderResponse, GetAccountSummaryResponse, CreateServiceLinkedRoleResponse, ListUsersRequest, ListCollaboratorsRequest, CreateUserOIDCConfigRequest, AddUserResponse, UpdateGroupResponse, ListEntitiesForPolicyRequest, TagRoleRequest, ListPoliciesRequest, GetServiceLinkedRoleDeletionStatusRequest, DetachGroupPolicyResponse, CreatePolicyRequest, ListAttachedUserAllPoliciesRequest, DeletePolicyVersionRequest, CreateUserSAMLConfigRequest, UpdateGroupRequest, DeleteSAMLProviderRequest, UpdateOIDCConfigRequest, CreateRoleResponse, GetSAMLProviderResponse, DescribeSafeAuthFlagIntlResponse, ListGroupsRequest, ListPolicyVersionsResponse, GetPolicyRequest, DescribeSafeAuthFlagIntlRequest, SetDefaultPolicyVersionRequest, UpdateUserOIDCConfigRequest, AddUserToGroupRequest, RemoveUserFromGroupResponse, DetachRolePolicyResponse, DescribeUserOIDCConfigRequest, CreateOIDCConfigResponse, PutUserPermissionsBoundaryRequest, ListSAMLProvidersResponse, SetDefaultPolicyVersionResponse, ListAttachedRolePoliciesRequest, GetSAMLProviderRequest, DetachUserPolicyResponse, GetRoleResponse, CreateRoleRequest, DeleteServiceLinkedRoleResponse, ListUsersForGroupResponse, GetPolicyResponse, DescribeSafeAuthFlagRequest, DeleteServiceLinkedRoleRequest, DeleteOIDCConfigResponse, CreateUserSAMLConfigResponse, DescribeSubAccountsResponse, ListEntitiesForPolicyResponse, AddUserToGroupResponse, UpdateUserSAMLConfigResponse, AttachUserPolicyResponse, DescribeSafeAuthFlagCollResponse, DeleteMessageReceiverRequest, DescribeSafeAuthFlagCollRequest, PutRolePermissionsBoundaryResponse, SetMfaFlagRequest, ListCollaboratorsResponse, ListAccessKeysResponse, GetSecurityLastUsedResponse, ListAttachedUserPoliciesRequest, AttachGroupPolicyResponse, UpdatePolicyRequest, DeleteOIDCConfigRequest, CreateMessageReceiverResponse, CreateGroupResponse } from "./cam_models";
/**
 * cam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建子用户
     */
    AddUser(req: AddUserRequest, cb?: (error: string, rep: AddUserResponse) => void): Promise<AddUserResponse>;
    /**
     * 创建服务相关角色
     */
    CreateServiceLinkedRole(req: CreateServiceLinkedRoleRequest, cb?: (error: string, rep: CreateServiceLinkedRoleResponse) => void): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 获取用户权限边界
     */
    GetUserPermissionBoundary(req: GetUserPermissionBoundaryRequest, cb?: (error: string, rep: GetUserPermissionBoundaryResponse) => void): Promise<GetUserPermissionBoundaryResponse>;
    /**
     * 查询账户摘要
     */
    GetAccountSummary(req?: GetAccountSummaryRequest, cb?: (error: string, rep: GetAccountSummaryResponse) => void): Promise<GetAccountSummaryResponse>;
    /**
     * 删除角色权限边界
     */
    DeleteRolePermissionsBoundary(req: DeleteRolePermissionsBoundaryRequest, cb?: (error: string, rep: DeleteRolePermissionsBoundaryResponse) => void): Promise<DeleteRolePermissionsBoundaryResponse>;
    /**
     * 获取消息接收人列表
     */
    ListReceiver(req: ListReceiverRequest, cb?: (error: string, rep: ListReceiverResponse) => void): Promise<ListReceiverResponse>;
    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     */
    ListAttachedGroupPolicies(req: ListAttachedGroupPoliciesRequest, cb?: (error: string, rep: ListAttachedGroupPoliciesResponse) => void): Promise<ListAttachedGroupPoliciesResponse>;
    /**
     * 验证自定义多因子Token
     */
    ConsumeCustomMFAToken(req: ConsumeCustomMFATokenRequest, cb?: (error: string, rep: ConsumeCustomMFATokenResponse) => void): Promise<ConsumeCustomMFATokenResponse>;
    /**
     * 更新子用户
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 获取自定义多因子Token关联信息
     */
    GetCustomMFATokenInfo(req: GetCustomMFATokenInfoRequest, cb?: (error: string, rep: GetCustomMFATokenInfoResponse) => void): Promise<GetCustomMFATokenInfoResponse>;
    /**
     * 查询子用户
     */
    GetUser(req: GetUserRequest, cb?: (error: string, rep: GetUserResponse) => void): Promise<GetUserResponse>;
    /**
     * 修改用户OIDC配置
     */
    UpdateUserOIDCConfig(req: UpdateUserOIDCConfigRequest, cb?: (error: string, rep: UpdateUserOIDCConfigResponse) => void): Promise<UpdateUserOIDCConfigResponse>;
    /**
     * 根据删除TaskId获取服务相关角色删除状态
     */
    GetServiceLinkedRoleDeletionStatus(req: GetServiceLinkedRoleDeletionStatusRequest, cb?: (error: string, rep: GetServiceLinkedRoleDeletionStatusResponse) => void): Promise<GetServiceLinkedRoleDeletionStatusResponse>;
    /**
     * 查询用户OIDC配置
     */
    DescribeUserOIDCConfig(req?: DescribeUserOIDCConfigRequest, cb?: (error: string, rep: DescribeUserOIDCConfigResponse) => void): Promise<DescribeUserOIDCConfigResponse>;
    /**
     * 修改用户SAML配置
     */
    UpdateUserSAMLConfig(req: UpdateUserSAMLConfigRequest, cb?: (error: string, rep: UpdateUserSAMLConfigResponse) => void): Promise<UpdateUserSAMLConfigResponse>;
    /**
     * 为CAM用户创建访问密钥
     */
    CreateAccessKey(req: CreateAccessKeyRequest, cb?: (error: string, rep: CreateAccessKeyResponse) => void): Promise<CreateAccessKeyResponse>;
    /**
     * 删除子用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     */
    UpdateRoleDescription(req: UpdateRoleDescriptionRequest, cb?: (error: string, rep: UpdateRoleDescriptionResponse) => void): Promise<UpdateRoleDescriptionResponse>;
    /**
     * 获取数据流认证Token
     */
    BuildDataFlowAuthToken(req: BuildDataFlowAuthTokenRequest, cb?: (error: string, rep: BuildDataFlowAuthTokenResponse) => void): Promise<BuildDataFlowAuthTokenResponse>;
    /**
     * 更新SAML身份提供商信息
     */
    UpdateSAMLProvider(req: UpdateSAMLProviderRequest, cb?: (error: string, rep: UpdateSAMLProviderResponse) => void): Promise<UpdateSAMLProviderResponse>;
    /**
     * 角色解绑标签。
     */
    UntagRole(req: UntagRoleRequest, cb?: (error: string, rep: UntagRoleResponse) => void): Promise<UntagRoleResponse>;
    /**
     * 通过子用户UIN列表查询子用户
     */
    DescribeSubAccounts(req: DescribeSubAccountsRequest, cb?: (error: string, rep: DescribeSubAccountsResponse) => void): Promise<DescribeSubAccountsResponse>;
    /**
     * 从用户组删除用户
     */
    RemoveUserFromGroup(req: RemoveUserFromGroupRequest, cb?: (error: string, rep: RemoveUserFromGroupResponse) => void): Promise<RemoveUserFromGroupResponse>;
    /**
     * 查询SAML身份提供商列表
     */
    ListSAMLProviders(req?: ListSAMLProvidersRequest, cb?: (error: string, rep: ListSAMLProvidersResponse) => void): Promise<ListSAMLProvidersResponse>;
    /**
     * 查询用户组关联的用户列表
     */
    ListUsersForGroup(req: ListUsersForGroupRequest, cb?: (error: string, rep: ListUsersForGroupResponse) => void): Promise<ListUsersForGroupResponse>;
    /**
     * 查询用户组详情
     */
    GetGroup(req: GetGroupRequest, cb?: (error: string, rep: GetGroupResponse) => void): Promise<GetGroupResponse>;
    /**
     * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
     */
    CreateUserOIDCConfig(req: CreateUserOIDCConfigRequest, cb?: (error: string, rep: CreateUserOIDCConfigResponse) => void): Promise<CreateUserOIDCConfigResponse>;
    /**
     * 为CAM用户删除访问密钥。
此接口属于高风险操作，删除密钥后不可恢复，腾讯云将永久拒绝此密钥的所有请求，请谨慎使用。
     */
    DeleteAccessKey(req: DeleteAccessKeyRequest, cb?: (error: string, rep: DeleteAccessKeyResponse) => void): Promise<DeleteAccessKeyResponse>;
    /**
     * 获取用户AppId
     */
    GetUserAppId(req?: GetUserAppIdRequest, cb?: (error: string, rep: GetUserAppIdResponse) => void): Promise<GetUserAppIdResponse>;
    /**
     * 设置角色权限边界
     */
    PutRolePermissionsBoundary(req: PutRolePermissionsBoundaryRequest, cb?: (error: string, rep: PutRolePermissionsBoundaryResponse) => void): Promise<PutRolePermissionsBoundaryResponse>;
    /**
     * 删除服务相关角色
     */
    DeleteServiceLinkedRole(req: DeleteServiceLinkedRoleRequest, cb?: (error: string, rep: DeleteServiceLinkedRoleResponse) => void): Promise<DeleteServiceLinkedRoleResponse>;
    /**
     * 拉取子用户
     */
    ListUsers(req?: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse>;
    /**
     * 查询用户SAML配置
     */
    DescribeUserSAMLConfig(req?: DescribeUserSAMLConfigRequest, cb?: (error: string, rep: DescribeUserSAMLConfigResponse) => void): Promise<DescribeUserSAMLConfigResponse>;
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
     * 删除OIDC身份提供商
     */
    DeleteOIDCConfig(req: DeleteOIDCConfigRequest, cb?: (error: string, rep: DeleteOIDCConfigResponse) => void): Promise<DeleteOIDCConfigResponse>;
    /**
     * 修改角色OIDC配置
     */
    UpdateOIDCConfig(req: UpdateOIDCConfigRequest, cb?: (error: string, rep: UpdateOIDCConfigResponse) => void): Promise<UpdateOIDCConfigResponse>;
    /**
     * 本接口（DeleteRole）用于删除指定角色。
     */
    DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse>;
    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     */
    AttachGroupPolicy(req: AttachGroupPolicyRequest, cb?: (error: string, rep: AttachGroupPolicyResponse) => void): Promise<AttachGroupPolicyResponse>;
    /**
     * 获取所有已授权服务
     */
    ListPoliciesGrantingServiceAccess(req: ListPoliciesGrantingServiceAccessRequest, cb?: (error: string, rep: ListPoliciesGrantingServiceAccessResponse) => void): Promise<ListPoliciesGrantingServiceAccessResponse>;
    /**
     * 为CAM用户更新访问密钥
     */
    UpdateAccessKey(req: UpdateAccessKeyRequest, cb?: (error: string, rep: UpdateAccessKeyResponse) => void): Promise<UpdateAccessKeyResponse>;
    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     */
    UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse>;
    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     */
    ListAttachedUserPolicies(req: ListAttachedUserPoliciesRequest, cb?: (error: string, rep: ListAttachedUserPoliciesResponse) => void): Promise<ListAttachedUserPoliciesResponse>;
    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     */
    CreatePolicyVersion(req: CreatePolicyVersionRequest, cb?: (error: string, rep: CreatePolicyVersionResponse) => void): Promise<CreatePolicyVersionResponse>;
    /**
     * 获取协作者列表
     */
    ListCollaborators(req: ListCollaboratorsRequest, cb?: (error: string, rep: ListCollaboratorsResponse) => void): Promise<ListCollaboratorsResponse>;
    /**
     * 角色绑定标签
     */
    TagRole(req: TagRoleRequest, cb?: (error: string, rep: TagRoleResponse) => void): Promise<TagRoleResponse>;
    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     */
    UpdateRoleConsoleLogin(req: UpdateRoleConsoleLoginRequest, cb?: (error: string, rep: UpdateRoleConsoleLoginResponse) => void): Promise<UpdateRoleConsoleLoginResponse>;
    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     */
    AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse>;
    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     */
    UpdateAssumeRolePolicy(req: UpdateAssumeRolePolicyRequest, cb?: (error: string, rep: UpdateAssumeRolePolicyResponse) => void): Promise<UpdateAssumeRolePolicyResponse>;
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     */
    SetMfaFlag(req: SetMfaFlagRequest, cb?: (error: string, rep: SetMfaFlagResponse) => void): Promise<SetMfaFlagResponse>;
    /**
     * 获取密钥最近使用情况
     */
    GetSecurityLastUsed(req: GetSecurityLastUsedRequest, cb?: (error: string, rep: GetSecurityLastUsedResponse) => void): Promise<GetSecurityLastUsedResponse>;
    /**
     * 创建用户组
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 本接口（DeletePolicy）可用于删除策略。
     */
    DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse>;
    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     */
    DeletePolicyVersion(req: DeletePolicyVersionRequest, cb?: (error: string, rep: DeletePolicyVersionResponse) => void): Promise<DeletePolicyVersionResponse>;
    /**
     * 列出指定CAM用户的访问密钥
     */
    ListAccessKeys(req: ListAccessKeysRequest, cb?: (error: string, rep: ListAccessKeysResponse) => void): Promise<ListAccessKeysResponse>;
    /**
     * 删除用户组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 创建消息接收人接口：仅允许已完成实名认证的用户访问消息接收人接口，并对每个用户限制每天最多请求10次。
     */
    CreateMessageReceiver(req: CreateMessageReceiverRequest, cb?: (error: string, rep: CreateMessageReceiverResponse) => void): Promise<CreateMessageReceiverResponse>;
    /**
     * 创建角色OIDC配置
     */
    CreateOIDCConfig(req: CreateOIDCConfigRequest, cb?: (error: string, rep: CreateOIDCConfigResponse) => void): Promise<CreateOIDCConfigResponse>;
    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     */
    GetPolicyVersion(req: GetPolicyVersionRequest, cb?: (error: string, rep: GetPolicyVersionResponse) => void): Promise<GetPolicyVersionResponse>;
    /**
     * 列出用户关联的策略（包括随组关联）
     */
    ListAttachedUserAllPolicies(req: ListAttachedUserAllPoliciesRequest, cb?: (error: string, rep: ListAttachedUserAllPoliciesResponse) => void): Promise<ListAttachedUserAllPoliciesResponse>;
    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     */
    SetDefaultPolicyVersion(req: SetDefaultPolicyVersionRequest, cb?: (error: string, rep: SetDefaultPolicyVersionResponse) => void): Promise<SetDefaultPolicyVersionResponse>;
    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     */
    DetachGroupPolicy(req: DetachGroupPolicyRequest, cb?: (error: string, rep: DetachGroupPolicyResponse) => void): Promise<DetachGroupPolicyResponse>;
    /**
     * 查询用户安全设置
     */
    DescribeSafeAuthFlag(req?: DescribeSafeAuthFlagRequest, cb?: (error: string, rep: DescribeSafeAuthFlagResponse) => void): Promise<DescribeSafeAuthFlagResponse>;
    /**
     * 查询安全设置(国际站)
     */
    DescribeSafeAuthFlagIntl(req?: DescribeSafeAuthFlagIntlRequest, cb?: (error: string, rep: DescribeSafeAuthFlagIntlResponse) => void): Promise<DescribeSafeAuthFlagIntlResponse>;
    /**
     * 修改角色会话时长
     */
    UpdateRoleSessionDuration(req: UpdateRoleSessionDurationRequest, cb?: (error: string, rep: UpdateRoleSessionDurationResponse) => void): Promise<UpdateRoleSessionDurationResponse>;
    /**
     * 查询用户组列表
     */
    ListGroups(req: ListGroupsRequest, cb?: (error: string, rep: ListGroupsResponse) => void): Promise<ListGroupsResponse>;
    /**
     * 获取企业微信子用户列表
     */
    ListWeChatWorkSubAccounts(req: ListWeChatWorkSubAccountsRequest, cb?: (error: string, rep: ListWeChatWorkSubAccountsResponse) => void): Promise<ListWeChatWorkSubAccountsResponse>;
    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     */
    ListPolicyVersions(req: ListPolicyVersionsRequest, cb?: (error: string, rep: ListPolicyVersionsResponse) => void): Promise<ListPolicyVersionsResponse>;
    /**
     * 更新用户组
     */
    UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse>;
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
     * 删除消息接收人
     */
    DeleteMessageReceiver(req: DeleteMessageReceiverRequest, cb?: (error: string, rep: DeleteMessageReceiverResponse) => void): Promise<DeleteMessageReceiverResponse>;
    /**
     * 查询SAML身份提供商详情
     */
    GetSAMLProvider(req: GetSAMLProviderRequest, cb?: (error: string, rep: GetSAMLProviderResponse) => void): Promise<GetSAMLProviderResponse>;
    /**
     * 本接口（CreateRole）用于创建角色。
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     */
    ListAttachedRolePolicies(req: ListAttachedRolePoliciesRequest, cb?: (error: string, rep: ListAttachedRolePoliciesResponse) => void): Promise<ListAttachedRolePoliciesResponse>;
    /**
     * 删除SAML身份提供商
     */
    DeleteSAMLProvider(req: DeleteSAMLProviderRequest, cb?: (error: string, rep: DeleteSAMLProviderResponse) => void): Promise<DeleteSAMLProviderResponse>;
    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     */
    GetPolicy(req: GetPolicyRequest, cb?: (error: string, rep: GetPolicyResponse) => void): Promise<GetPolicyResponse>;
    /**
     * 获取角色权限边界
     */
    GetRolePermissionBoundary(req: GetRolePermissionBoundaryRequest, cb?: (error: string, rep: GetRolePermissionBoundaryResponse) => void): Promise<GetRolePermissionBoundaryResponse>;
    /**
     * 删除用户权限边界
     */
    DeleteUserPermissionsBoundary(req: DeleteUserPermissionsBoundaryRequest, cb?: (error: string, rep: DeleteUserPermissionsBoundaryResponse) => void): Promise<DeleteUserPermissionsBoundaryResponse>;
    /**
     * 查询角色OIDC配置
     */
    DescribeOIDCConfig(req: DescribeOIDCConfigRequest, cb?: (error: string, rep: DescribeOIDCConfigResponse) => void): Promise<DescribeOIDCConfigResponse>;
    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     */
    ListEntitiesForPolicy(req: ListEntitiesForPolicyRequest, cb?: (error: string, rep: ListEntitiesForPolicyResponse) => void): Promise<ListEntitiesForPolicyResponse>;
    /**
     * 设置用户权限边界
     */
    PutUserPermissionsBoundary(req: PutUserPermissionsBoundaryRequest, cb?: (error: string, rep: PutUserPermissionsBoundaryResponse) => void): Promise<PutUserPermissionsBoundaryResponse>;
    /**
     * 创建用户SAML配置
     */
    CreateUserSAMLConfig(req: CreateUserSAMLConfigRequest, cb?: (error: string, rep: CreateUserSAMLConfigResponse) => void): Promise<CreateUserSAMLConfigResponse>;
    /**
     * 用户加入到用户组
     */
    AddUserToGroup(req: AddUserToGroupRequest, cb?: (error: string, rep: AddUserToGroupResponse) => void): Promise<AddUserToGroupResponse>;
    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     */
    AttachRolePolicy(req: AttachRolePolicyRequest, cb?: (error: string, rep: AttachRolePolicyResponse) => void): Promise<AttachRolePolicyResponse>;
    /**
     * 获取子账号安全设置
     */
    DescribeSafeAuthFlagColl(req: DescribeSafeAuthFlagCollRequest, cb?: (error: string, rep: DescribeSafeAuthFlagCollResponse) => void): Promise<DescribeSafeAuthFlagCollResponse>;
    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     */
    GetRole(req: GetRoleRequest, cb?: (error: string, rep: GetRoleResponse) => void): Promise<GetRoleResponse>;
    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     */
    ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse>;
    /**
     * 禁用用户SSO
     */
    DisableUserSSO(req?: DisableUserSSORequest, cb?: (error: string, rep: DisableUserSSOResponse) => void): Promise<DisableUserSSOResponse>;
}
