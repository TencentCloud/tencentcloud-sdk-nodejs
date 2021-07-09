import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserGroupRequest, RemoveUserFromUserGroupResponse, DescribeOrgNodeResponse, CreateOrgNodeResponse, ListUsersInOrgNodeResponse, ModifyUserInfoResponse, DeleteUserRequest, ListAuthorizedApplicationsToOrgNodeResponse, ListAuthorizedApplicationsToUserRequest, DeleteOrgNodeResponse, AddUserToUserGroupResponse, CreateUserResponse, ListAuthorizedApplicationsToUserGroupRequest, ListUsersInOrgNodeRequest, CreateUserGroupResponse, DeleteUserResponse, ListUsersInUserGroupResponse, AddUserToUserGroupRequest, UpdateOrgNodeResponse, DescribeApplicationResponse, ListAuthorizedApplicationsToUserResponse, DeleteUserGroupResponse, DescribeApplicationRequest, UpdateOrgNodeRequest, CreateUserRequest, ListUserGroupsOfUserResponse, DescribeUserInfoResponse, DeleteOrgNodeRequest, CreateOrgNodeRequest, RemoveUserFromUserGroupRequest, ListAuthorizedApplicationsToUserGroupResponse, DeleteUserGroupRequest, DescribeUserInfoRequest, DescribeUserGroupResponse, ListUserGroupsOfUserRequest, ListUsersInUserGroupRequest, ListAuthorizedApplicationsToOrgNodeRequest, CreateUserGroupRequest, DescribeOrgNodeRequest, ModifyUserInfoRequest } from "./eiam_models";
/**
 * eiam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据机构节点ID读取机构节点信息
     */
    DescribeOrgNode(req: DescribeOrgNodeRequest, cb?: (error: string, rep: DescribeOrgNodeResponse) => void): Promise<DescribeOrgNodeResponse>;
    /**
     * 通过用户名或用户 id 删除用户。
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 删除一个用户组
     */
    DeleteUserGroup(req: DeleteUserGroupRequest, cb?: (error: string, rep: DeleteUserGroupResponse) => void): Promise<DeleteUserGroupResponse>;
    /**
     * 获取用户组中的用户列表
     */
    ListUsersInUserGroup(req: ListUsersInUserGroupRequest, cb?: (error: string, rep: ListUsersInUserGroupResponse) => void): Promise<ListUsersInUserGroupResponse>;
    /**
     * 通过机构节点ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToOrgNode(req: ListAuthorizedApplicationsToOrgNodeRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToOrgNodeResponse) => void): Promise<ListAuthorizedApplicationsToOrgNodeResponse>;
    /**
     * 获取用户所在的用户组列表
     */
    ListUserGroupsOfUser(req: ListUserGroupsOfUserRequest, cb?: (error: string, rep: ListUserGroupsOfUserResponse) => void): Promise<ListUserGroupsOfUserResponse>;
    /**
     * 通过用户ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUser(req: ListAuthorizedApplicationsToUserRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserResponse) => void): Promise<ListAuthorizedApplicationsToUserResponse>;
    /**
     * 获取用户组信息
     */
    DescribeUserGroup(req: DescribeUserGroupRequest, cb?: (error: string, rep: DescribeUserGroupResponse) => void): Promise<DescribeUserGroupResponse>;
    /**
     * 通过用户名或用户 id 冻结用户
     */
    ModifyUserInfo(req: ModifyUserInfoRequest, cb?: (error: string, rep: ModifyUserInfoResponse) => void): Promise<ModifyUserInfoResponse>;
    /**
     * 删除一个机构节点
     */
    DeleteOrgNode(req: DeleteOrgNodeRequest, cb?: (error: string, rep: DeleteOrgNodeResponse) => void): Promise<DeleteOrgNodeResponse>;
    /**
     * 加入用户到用户组
     */
    AddUserToUserGroup(req: AddUserToUserGroupRequest, cb?: (error: string, rep: AddUserToUserGroupResponse) => void): Promise<AddUserToUserGroupResponse>;
    /**
     * 通过用户名或用户 id 搜索用户
     */
    DescribeUserInfo(req: DescribeUserInfoRequest, cb?: (error: string, rep: DescribeUserInfoResponse) => void): Promise<DescribeUserInfoResponse>;
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
     * 从用户组中移除用户
     */
    RemoveUserFromUserGroup(req: RemoveUserFromUserGroupRequest, cb?: (error: string, rep: RemoveUserFromUserGroupResponse) => void): Promise<RemoveUserFromUserGroupResponse>;
    /**
     * 根据机构节点ID读取节点下用户
     */
    ListUsersInOrgNode(req: ListUsersInOrgNodeRequest, cb?: (error: string, rep: ListUsersInOrgNodeResponse) => void): Promise<ListUsersInOrgNodeResponse>;
    /**
     * 新建一个机构节点，
     */
    UpdateOrgNode(req: UpdateOrgNodeRequest, cb?: (error: string, rep: UpdateOrgNodeResponse) => void): Promise<UpdateOrgNodeResponse>;
    /**
     * 通过用户组ID获得被授权访问的应用列表。
     */
    ListAuthorizedApplicationsToUserGroup(req: ListAuthorizedApplicationsToUserGroupRequest, cb?: (error: string, rep: ListAuthorizedApplicationsToUserGroupResponse) => void): Promise<ListAuthorizedApplicationsToUserGroupResponse>;
    /**
     * 新建一个机构节点
     */
    CreateOrgNode(req: CreateOrgNodeRequest, cb?: (error: string, rep: CreateOrgNodeResponse) => void): Promise<CreateOrgNodeResponse>;
}
