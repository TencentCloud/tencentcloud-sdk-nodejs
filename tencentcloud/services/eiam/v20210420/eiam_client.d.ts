import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOrgNodeResponse, ListApplicationsRequest, AddAccountToAccountGroupResponse, DeleteUserRequest, CreateAppAccountResponse, ListAuthorizedApplicationsToUserGroupRequest, ModifyApplicationResponse, DeleteAccountGroupRequest, AddUserToUserGroupRequest, ListUsersResponse, DeleteAppAccountRequest, UpdateOrgNodeRequest, CreateOrgNodeRequest, RemoveUserFromUserGroupRequest, ModifyAppAccountRequest, ListAuthorizedApplicationsToUserGroupResponse, DeleteAccountGroupResponse, DescribeUserInfoRequest, ListAuthorizedApplicationsToOrgNodeRequest, DescribePublicKeyResponse, DescribeOrgNodeRequest, CreateAccountGroupRequest, DescribeUserGroupRequest, CreateOrgNodeResponse, CreateUserResponse, ModifyAppAccountResponse, DeleteUserResponse, ListUsersInUserGroupResponse, CreateAppAccountRequest, DescribeApplicationResponse, DescribeAppAccountResponse, DescribeUserGroupResourcesAuthorizationResponse, DescribeAccountGroupResponse, CreateUserGroupRequest, DescribeOrgResourcesAuthorizationRequest, DescribeUserInfoResponse, DeleteOrgNodeRequest, DeleteUsersResponse, DescribeAccountGroupRequest, DescribeOrgResourcesAuthorizationResponse, ListUsersInUserGroupRequest, DeleteAppAccountResponse, ModifyAccountGroupRequest, ListUsersInOrgNodeResponse, ListApplicationAuthorizationsRequest, ModifyAccountGroupResponse, DeleteUsersRequest, ListAuthorizedApplicationsToUserRequest, DeleteOrgNodeResponse, ListAccountInAccountGroupResponse, DescribeUserResourcesAuthorizationResponse, ListUsersInOrgNodeRequest, RemoveAccountFromAccountGroupResponse, DescribeUserGroupResourcesAuthorizationRequest, ListUserGroupsRequest, UpdateOrgNodeResponse, ListAuthorizedApplicationsToUserResponse, ModifyApplicationRequest, CreateUserRequest, DescribePublicKeyRequest, RemoveAccountFromAccountGroupRequest, ListApplicationAuthorizationsResponse, DescribeUserGroupResponse, ListUserGroupsOfUserRequest, DescribeApplicationRequest, ModifyUserInfoRequest, RemoveUserFromUserGroupResponse, DescribeUserThirdPartyAccountInfoRequest, ModifyUserInfoResponse, ListAuthorizedApplicationsToOrgNodeResponse, AddUserToUserGroupResponse, DescribeAppAccountRequest, CreateUserGroupResponse, DescribeUserThirdPartyAccountInfoResponse, ListUserGroupsResponse, ListAccountInAccountGroupRequest, DeleteUserGroupResponse, ListUserGroupsOfUserResponse, CreateAccountGroupResponse, DescribeUserResourcesAuthorizationRequest, ListUsersRequest, DeleteUserGroupRequest, ListApplicationsResponse, AddAccountToAccountGroupRequest } from "./eiam_models";
/**
 * eiam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取用户组信息
     */
    DescribeUserGroup(req: DescribeUserGroupRequest, cb?: (error: string, rep: DescribeUserGroupResponse) => void): Promise<DescribeUserGroupResponse>;
    /**
     * 创建账号组
     */
    CreateAccountGroup(req: CreateAccountGroupRequest, cb?: (error: string, rep: CreateAccountGroupResponse) => void): Promise<CreateAccountGroupResponse>;
    /**
     * 查询指定机构下的资源授权列表
     */
    DescribeOrgResourcesAuthorization(req: DescribeOrgResourcesAuthorizationRequest, cb?: (error: string, rep: DescribeOrgResourcesAuthorizationResponse) => void): Promise<DescribeOrgResourcesAuthorizationResponse>;
    /**
     * 通过用户名或用户 id 冻结用户
     */
    ModifyUserInfo(req: ModifyUserInfoRequest, cb?: (error: string, rep: ModifyUserInfoResponse) => void): Promise<ModifyUserInfoResponse>;
    /**
     * 获取JWT公钥信息。
     */
    DescribePublicKey(req: DescribePublicKeyRequest, cb?: (error: string, rep: DescribePublicKeyResponse) => void): Promise<DescribePublicKeyResponse>;
    /**
     * 获取用户列表信息。
     */
    ListUsers(req: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse>;
    /**
     * 从账号组中移除账号
     */
    RemoveAccountFromAccountGroup(req: RemoveAccountFromAccountGroupRequest, cb?: (error: string, rep: RemoveAccountFromAccountGroupResponse) => void): Promise<RemoveAccountFromAccountGroupResponse>;
    /**
     *  获取账号组中的账号列表
     */
    ListAccountInAccountGroup(req: ListAccountInAccountGroupRequest, cb?: (error: string, rep: ListAccountInAccountGroupResponse) => void): Promise<ListAccountInAccountGroupResponse>;
    /**
     * 通过用户组ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUserGroup(req: ListAuthorizedApplicationsToUserGroupRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserGroupResponse) => void): Promise<ListAuthorizedApplicationsToUserGroupResponse>;
    /**
     * 应用授权关系列表（含搜索条件匹配）。
     */
    ListApplicationAuthorizations(req: ListApplicationAuthorizationsRequest, cb?: (error: string, rep: ListApplicationAuthorizationsResponse) => void): Promise<ListApplicationAuthorizationsResponse>;
    /**
     * 修改账号组
     */
    ModifyAccountGroup(req: ModifyAccountGroupRequest, cb?: (error: string, rep: ModifyAccountGroupResponse) => void): Promise<ModifyAccountGroupResponse>;
    /**
     * 查询指定用户下的资源授权列表
     */
    DescribeUserResourcesAuthorization(req: DescribeUserResourcesAuthorizationRequest, cb?: (error: string, rep: DescribeUserResourcesAuthorizationResponse) => void): Promise<DescribeUserResourcesAuthorizationResponse>;
    /**
     * 修改应用账号
     */
    ModifyAppAccount(req: ModifyAppAccountRequest, cb?: (error: string, rep: ModifyAppAccountResponse) => void): Promise<ModifyAppAccountResponse>;
    /**
     * 通过用户名或用户 id 获取用户的第三方账号绑定信息。
     */
    DescribeUserThirdPartyAccountInfo(req: DescribeUserThirdPartyAccountInfoRequest, cb?: (error: string, rep: DescribeUserThirdPartyAccountInfoResponse) => void): Promise<DescribeUserThirdPartyAccountInfoResponse>;
    /**
     * 删除一个用户组
     */
    DeleteUserGroup(req: DeleteUserGroupRequest, cb?: (error: string, rep: DeleteUserGroupResponse) => void): Promise<DeleteUserGroupResponse>;
    /**
     * 删除账号组
     */
    DeleteAccountGroup(req: DeleteAccountGroupRequest, cb?: (error: string, rep: DeleteAccountGroupResponse) => void): Promise<DeleteAccountGroupResponse>;
    /**
     * 更新一个应用的信息
     */
    ModifyApplication(req: ModifyApplicationRequest, cb?: (error: string, rep: ModifyApplicationResponse) => void): Promise<ModifyApplicationResponse>;
    /**
     * 获取用户组列表信息（包含查询条件）。
     */
    ListUserGroups(req: ListUserGroupsRequest, cb?: (error: string, rep: ListUserGroupsResponse) => void): Promise<ListUserGroupsResponse>;
    /**
     * 加入用户到用户组
     */
    AddUserToUserGroup(req: AddUserToUserGroupRequest, cb?: (error: string, rep: AddUserToUserGroupResponse) => void): Promise<AddUserToUserGroupResponse>;
    /**
     * 删除应用账号
     */
    DeleteAppAccount(req: DeleteAppAccountRequest, cb?: (error: string, rep: DeleteAppAccountResponse) => void): Promise<DeleteAppAccountResponse>;
    /**
     * 查询账号组列表
     */
    DescribeAccountGroup(req: DescribeAccountGroupRequest, cb?: (error: string, rep: DescribeAccountGroupResponse) => void): Promise<DescribeAccountGroupResponse>;
    /**
     * 批量删除当前节点下的用户。如果出现个别用户删除错误，将不影响其余被勾选用户被删除的操作，同时提示未被删除的用户名称/用户ID。
     */
    DeleteUsers(req: DeleteUsersRequest, cb?: (error: string, rep: DeleteUsersResponse) => void): Promise<DeleteUsersResponse>;
    /**
     * 查询指定用户组下的资源授权列表
     */
    DescribeUserGroupResourcesAuthorization(req: DescribeUserGroupResourcesAuthorizationRequest, cb?: (error: string, rep: DescribeUserGroupResourcesAuthorizationResponse) => void): Promise<DescribeUserGroupResourcesAuthorizationResponse>;
    /**
     * 创建应用账号
     */
    CreateAppAccount(req: CreateAppAccountRequest, cb?: (error: string, rep: CreateAppAccountResponse) => void): Promise<CreateAppAccountResponse>;
    /**
     * 获取用户组中的用户列表
     */
    ListUsersInUserGroup(req: ListUsersInUserGroupRequest, cb?: (error: string, rep: ListUsersInUserGroupResponse) => void): Promise<ListUsersInUserGroupResponse>;
    /**
     * 获取用户所在的用户组列表
     */
    ListUserGroupsOfUser(req: ListUserGroupsOfUserRequest, cb?: (error: string, rep: ListUserGroupsOfUserResponse) => void): Promise<ListUserGroupsOfUserResponse>;
    /**
     * 通过用户ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUser(req: ListAuthorizedApplicationsToUserRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserResponse) => void): Promise<ListAuthorizedApplicationsToUserResponse>;
    /**
     * 查询应用账号列表
     */
    DescribeAppAccount(req: DescribeAppAccountRequest, cb?: (error: string, rep: DescribeAppAccountResponse) => void): Promise<DescribeAppAccountResponse>;
    /**
     * 根据机构节点ID读取机构节点信息
     */
    DescribeOrgNode(req: DescribeOrgNodeRequest, cb?: (error: string, rep: DescribeOrgNodeResponse) => void): Promise<DescribeOrgNodeResponse>;
    /**
     * 通过用户名或用户 id 搜索用户
     */
    DescribeUserInfo(req: DescribeUserInfoRequest, cb?: (error: string, rep: DescribeUserInfoResponse) => void): Promise<DescribeUserInfoResponse>;
    /**
     * 从用户组中移除用户
     */
    RemoveUserFromUserGroup(req: RemoveUserFromUserGroupRequest, cb?: (error: string, rep: RemoveUserFromUserGroupResponse) => void): Promise<RemoveUserFromUserGroupResponse>;
    /**
     * 新建一个机构节点
     */
    CreateOrgNode(req: CreateOrgNodeRequest, cb?: (error: string, rep: CreateOrgNodeResponse) => void): Promise<CreateOrgNodeResponse>;
    /**
     * 通过用户名或用户 id 删除用户。
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 获取应用列表信息。
     */
    ListApplications(req: ListApplicationsRequest, cb?: (error: string, rep: ListApplicationsResponse) => void): Promise<ListApplicationsResponse>;
    /**
     * 通过机构节点ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToOrgNode(req: ListAuthorizedApplicationsToOrgNodeRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToOrgNodeResponse) => void): Promise<ListAuthorizedApplicationsToOrgNodeResponse>;
    /**
     * 删除一个机构节点
     */
    DeleteOrgNode(req: DeleteOrgNodeRequest, cb?: (error: string, rep: DeleteOrgNodeResponse) => void): Promise<DeleteOrgNodeResponse>;
    /**
     * 账号组添加账号
     */
    AddAccountToAccountGroup(req: AddAccountToAccountGroupRequest, cb?: (error: string, rep: AddAccountToAccountGroupResponse) => void): Promise<AddAccountToAccountGroupResponse>;
    /**
     * 新建用户组
     */
    CreateUserGroup(req: CreateUserGroupRequest, cb?: (error: string, rep: CreateUserGroupResponse) => void): Promise<CreateUserGroupResponse>;
    /**
     * 新建一个用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 获取一个应用的信息。
     */
    DescribeApplication(req: DescribeApplicationRequest, cb?: (error: string, rep: DescribeApplicationResponse) => void): Promise<DescribeApplicationResponse>;
    /**
     * 根据机构节点ID读取节点下用户
     */
    ListUsersInOrgNode(req: ListUsersInOrgNodeRequest, cb?: (error: string, rep: ListUsersInOrgNodeResponse) => void): Promise<ListUsersInOrgNodeResponse>;
    /**
     * 新建一个机构节点，
     */
    UpdateOrgNode(req: UpdateOrgNodeRequest, cb?: (error: string, rep: UpdateOrgNodeResponse) => void): Promise<UpdateOrgNodeResponse>;
}
