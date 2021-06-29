/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeUserGroupRequest,
  RemoveUserFromUserGroupResponse,
  DecribePublicKeyRequest,
  DescribeOrgNodeResponse,
  CreateOrgNodeResponse,
  ListUsersInOrgNodeResponse,
  ModifyUserInfoResponse,
  DeleteUserRequest,
  ListAuthorizedApplicationsToOrgNodeResponse,
  OrgNodeChildInfo,
  ListAuthorizedApplicationsToUserRequest,
  DeleteOrgNodeResponse,
  AddUserToUserGroupResponse,
  CreateUserResponse,
  OrgNodeChildUserInfo,
  ListAuthorizedApplicationsToUserGroupRequest,
  ListUsersInOrgNodeRequest,
  InheritedForm,
  CreateUserGroupResponse,
  DeleteUserResponse,
  ListUsersInUserGroupResponse,
  AddUserToUserGroupRequest,
  DescribeApplicationResponse,
  UpdateOrgNodeResponse,
  ApplicationAuthorizationInfo,
  ListAuthorizedApplicationsToUserResponse,
  DeleteUserGroupResponse,
  DescribeApplicationRequest,
  UpdateOrgNodeRequest,
  DecribePublicKeyResponse,
  CreateUserRequest,
  ListUserGroupsOfUserResponse,
  DescribeUserInfoResponse,
  DeleteOrgNodeRequest,
  CreateOrgNodeRequest,
  RemoveUserFromUserGroupRequest,
  ListAuthorizedApplicationsToUserGroupResponse,
  DeleteUserGroupRequest,
  DescribeUserInfoRequest,
  DescribeUserGroupResponse,
  ListUserGroupsOfUserRequest,
  ListUsersInUserGroupRequest,
  UserInfo,
  ListAuthorizedApplicationsToOrgNodeRequest,
  CreateUserGroupRequest,
  DescribeOrgNodeRequest,
  ModifyUserInfoRequest,
} from "./eiam_models"

/**
 * eiam client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("eiam.tencentcloudapi.com", "2021-04-20", clientConfig)
  }

  /**
   * 根据机构节点ID读取机构节点信息
   */
  async DescribeOrgNode(
    req: DescribeOrgNodeRequest,
    cb?: (error: string, rep: DescribeOrgNodeResponse) => void
  ): Promise<DescribeOrgNodeResponse> {
    return this.request("DescribeOrgNode", req, cb)
  }

  /**
   * 通过用户名或用户 id 删除用户。
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 删除一个用户组
   */
  async DeleteUserGroup(
    req: DeleteUserGroupRequest,
    cb?: (error: string, rep: DeleteUserGroupResponse) => void
  ): Promise<DeleteUserGroupResponse> {
    return this.request("DeleteUserGroup", req, cb)
  }

  /**
   * 获取JWT公钥信息
   */
  async DecribePublicKey(
    req: DecribePublicKeyRequest,
    cb?: (error: string, rep: DecribePublicKeyResponse) => void
  ): Promise<DecribePublicKeyResponse> {
    return this.request("DecribePublicKey", req, cb)
  }

  /**
   * 获取用户组中的用户列表
   */
  async ListUsersInUserGroup(
    req: ListUsersInUserGroupRequest,
    cb?: (error: string, rep: ListUsersInUserGroupResponse) => void
  ): Promise<ListUsersInUserGroupResponse> {
    return this.request("ListUsersInUserGroup", req, cb)
  }

  /**
   * 通过机构节点ID获得被授权访问的应用列表。
   */
  async ListAuthorizedApplicationsToOrgNode(
    req: ListAuthorizedApplicationsToOrgNodeRequest,
    cb?: (error: string, rep: ListAuthorizedApplicationsToOrgNodeResponse) => void
  ): Promise<ListAuthorizedApplicationsToOrgNodeResponse> {
    return this.request("ListAuthorizedApplicationsToOrgNode", req, cb)
  }

  /**
   * 获取用户所在的用户组列表
   */
  async ListUserGroupsOfUser(
    req: ListUserGroupsOfUserRequest,
    cb?: (error: string, rep: ListUserGroupsOfUserResponse) => void
  ): Promise<ListUserGroupsOfUserResponse> {
    return this.request("ListUserGroupsOfUser", req, cb)
  }

  /**
   * 通过用户ID获得被授权访问的应用列表。
   */
  async ListAuthorizedApplicationsToUser(
    req: ListAuthorizedApplicationsToUserRequest,
    cb?: (error: string, rep: ListAuthorizedApplicationsToUserResponse) => void
  ): Promise<ListAuthorizedApplicationsToUserResponse> {
    return this.request("ListAuthorizedApplicationsToUser", req, cb)
  }

  /**
   * 获取用户组信息
   */
  async DescribeUserGroup(
    req: DescribeUserGroupRequest,
    cb?: (error: string, rep: DescribeUserGroupResponse) => void
  ): Promise<DescribeUserGroupResponse> {
    return this.request("DescribeUserGroup", req, cb)
  }

  /**
   * 通过用户名或用户 id 冻结用户
   */
  async ModifyUserInfo(
    req: ModifyUserInfoRequest,
    cb?: (error: string, rep: ModifyUserInfoResponse) => void
  ): Promise<ModifyUserInfoResponse> {
    return this.request("ModifyUserInfo", req, cb)
  }

  /**
   * 删除一个机构节点
   */
  async DeleteOrgNode(
    req: DeleteOrgNodeRequest,
    cb?: (error: string, rep: DeleteOrgNodeResponse) => void
  ): Promise<DeleteOrgNodeResponse> {
    return this.request("DeleteOrgNode", req, cb)
  }

  /**
   * 加入用户到用户组
   */
  async AddUserToUserGroup(
    req: AddUserToUserGroupRequest,
    cb?: (error: string, rep: AddUserToUserGroupResponse) => void
  ): Promise<AddUserToUserGroupResponse> {
    return this.request("AddUserToUserGroup", req, cb)
  }

  /**
   * 通过用户名或用户 id 搜索用户
   */
  async DescribeUserInfo(
    req: DescribeUserInfoRequest,
    cb?: (error: string, rep: DescribeUserInfoResponse) => void
  ): Promise<DescribeUserInfoResponse> {
    return this.request("DescribeUserInfo", req, cb)
  }

  /**
   * 新建用户组
   */
  async CreateUserGroup(
    req: CreateUserGroupRequest,
    cb?: (error: string, rep: CreateUserGroupResponse) => void
  ): Promise<CreateUserGroupResponse> {
    return this.request("CreateUserGroup", req, cb)
  }

  /**
   * 新建一个用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 获取一个应用的信息。
   */
  async DescribeApplication(
    req: DescribeApplicationRequest,
    cb?: (error: string, rep: DescribeApplicationResponse) => void
  ): Promise<DescribeApplicationResponse> {
    return this.request("DescribeApplication", req, cb)
  }

  /**
   * 从用户组中移除用户
   */
  async RemoveUserFromUserGroup(
    req: RemoveUserFromUserGroupRequest,
    cb?: (error: string, rep: RemoveUserFromUserGroupResponse) => void
  ): Promise<RemoveUserFromUserGroupResponse> {
    return this.request("RemoveUserFromUserGroup", req, cb)
  }

  /**
   * 根据机构节点ID读取节点下用户
   */
  async ListUsersInOrgNode(
    req: ListUsersInOrgNodeRequest,
    cb?: (error: string, rep: ListUsersInOrgNodeResponse) => void
  ): Promise<ListUsersInOrgNodeResponse> {
    return this.request("ListUsersInOrgNode", req, cb)
  }

  /**
   * 新建一个机构节点，
   */
  async UpdateOrgNode(
    req: UpdateOrgNodeRequest,
    cb?: (error: string, rep: UpdateOrgNodeResponse) => void
  ): Promise<UpdateOrgNodeResponse> {
    return this.request("UpdateOrgNode", req, cb)
  }

  /**
   * 通过用户组ID获得被授权访问的应用列表。
   */
  async ListAuthorizedApplicationsToUserGroup(
    req: ListAuthorizedApplicationsToUserGroupRequest,
    cb?: (error: string, rep: ListAuthorizedApplicationsToUserGroupResponse) => void
  ): Promise<ListAuthorizedApplicationsToUserGroupResponse> {
    return this.request("ListAuthorizedApplicationsToUserGroup", req, cb)
  }

  /**
   * 新建一个机构节点
   */
  async CreateOrgNode(
    req: CreateOrgNodeRequest,
    cb?: (error: string, rep: CreateOrgNodeResponse) => void
  ): Promise<CreateOrgNodeResponse> {
    return this.request("CreateOrgNode", req, cb)
  }
}
