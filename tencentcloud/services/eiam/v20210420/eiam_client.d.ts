import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserGroupRequest, ListApplicationAuthorizationsRequest, DescribeOrgNodeResponse, CreateOrgNodeResponse, ListApplicationsRequest, ListUsersInOrgNodeResponse, ModifyUserInfoResponse, DeleteUserRequest, ListAuthorizedApplicationsToOrgNodeResponse, ListAuthorizedApplicationsToUserRequest, DeleteOrgNodeResponse, AddUserToUserGroupResponse, CreateUserResponse, DescribeUserResourcesAuthorizationResponse, ListUsersInUserGroupResponse, ListUsersResponse, DescribeOrgNodeRequest, ListUsersInOrgNodeRequest, ListUserGroupsOfUserRequest, ModifyApplicationResponse, DescribePublicKeyRequest, CreateUserGroupResponse, DescribeUserGroupResourcesAuthorizationRequest, DeleteUserResponse, ListAuthorizedApplicationsToUserGroupRequest, ListUserGroupsRequest, AddUserToUserGroupRequest, DescribeUserGroupResourcesAuthorizationResponse, ListApplicationAuthorizationsResponse, DescribeApplicationResponse, ListUserGroupsResponse, ListAuthorizedApplicationsToUserResponse, DeleteUserGroupResponse, UpdateOrgNodeRequest, DescribeOrgResourcesAuthorizationRequest, ModifyApplicationRequest, CreateUserRequest, ListUserGroupsOfUserResponse, DescribeUserInfoResponse, DeleteOrgNodeRequest, CreateOrgNodeRequest, RemoveUserFromUserGroupRequest, ListAuthorizedApplicationsToUserGroupResponse, DescribeUserResourcesAuthorizationRequest, ListUsersRequest, UpdateOrgNodeResponse, DescribePublicKeyResponse, DeleteUserGroupRequest, DescribeUserInfoRequest, DescribeUserGroupResponse, DescribeOrgResourcesAuthorizationResponse, ListUsersInUserGroupRequest, ListAuthorizedApplicationsToOrgNodeRequest, CreateUserGroupRequest, DescribeApplicationRequest, ModifyUserInfoRequest, ListApplicationsResponse, RemoveUserFromUserGroupResponse } from "./eiam_models";
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
     * 通过用户组ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUserGroup(req: ListAuthorizedApplicationsToUserGroupRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserGroupResponse) => void): Promise<ListAuthorizedApplicationsToUserGroupResponse>;
    /**
     * 应用授权关系列表（含搜索条件匹配）。
     */
    ListApplicationAuthorizations(req: ListApplicationAuthorizationsRequest, cb?: (error: string, rep: ListApplicationAuthorizationsResponse) => void): Promise<ListApplicationAuthorizationsResponse>;
    /**
     * 查询指定用户下的资源授权列表
     */
    DescribeUserResourcesAuthorization(req: DescribeUserResourcesAuthorizationRequest, cb?: (error: string, rep: DescribeUserResourcesAuthorizationResponse) => void): Promise<DescribeUserResourcesAuthorizationResponse>;
    /**
     * 删除一个用户组
     */
    DeleteUserGroup(req: DeleteUserGroupRequest, cb?: (error: string, rep: DeleteUserGroupResponse) => void): Promise<DeleteUserGroupResponse>;
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
     * 查询指定用户组下的资源授权列表
     */
    DescribeUserGroupResourcesAuthorization(req: DescribeUserGroupResourcesAuthorizationRequest, cb?: (error: string, rep: DescribeUserGroupResourcesAuthorizationResponse) => void): Promise<DescribeUserGroupResourcesAuthorizationResponse>;
    /**
     * 获取用户组中的用户列表
     */
    ListUsersInUserGroup(req: ListUsersInUserGroupRequest, cb?: (error: string, rep: ListUsersInUserGroupResponse) => void): Promise<ListUsersInUserGroupResponse>;
    /**
     * 新建一个用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 通过用户ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUser(req: ListAuthorizedApplicationsToUserRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserResponse) => void): Promise<ListAuthorizedApplicationsToUserResponse>;
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
     * 新建用户组
     */
    CreateUserGroup(req: CreateUserGroupRequest, cb?: (error: string, rep: CreateUserGroupResponse) => void): Promise<CreateUserGroupResponse>;
    /**
     * 获取用户所在的用户组列表
     */
    ListUserGroupsOfUser(req: ListUserGroupsOfUserRequest, cb?: (error: string, rep: ListUserGroupsOfUserResponse) => void): Promise<ListUserGroupsOfUserResponse>;
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
