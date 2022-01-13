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
  DescribeOrgNodeResponse,
  ListApplicationsRequest,
  UserSearchCriteria,
  AddAccountToAccountGroupResponse,
  DeleteUserRequest,
  AuthorizationUserResouceInfo,
  CreateAppAccountResponse,
  ListAuthorizedApplicationsToUserGroupRequest,
  ModifyApplicationResponse,
  OrgNodeChildUserInfo,
  DeleteAccountGroupRequest,
  AddUserToUserGroupRequest,
  ApplicationInformation,
  ListUsersResponse,
  DeleteAppAccountRequest,
  UserGroupInfo,
  UpdateOrgNodeRequest,
  CreateOrgNodeRequest,
  RemoveUserFromUserGroupRequest,
  ModifyAppAccountRequest,
  ListAuthorizedApplicationsToUserGroupResponse,
  DeleteAccountGroupResponse,
  UserGroupInfoSearchCriteria,
  DescribeUserInfoRequest,
  ListAuthorizedApplicationsToOrgNodeRequest,
  DescribePublicKeyResponse,
  DescribeOrgNodeRequest,
  CreateAccountGroupRequest,
  DescribeUserGroupRequest,
  CreateOrgNodeResponse,
  UserGroupInformationSearchCriteria,
  AuthorizationResourceEntityInfo,
  AccountGroupSearchCriteria,
  CreateUserResponse,
  ThirdPartyAccountInfo,
  ModifyAppAccountResponse,
  DeleteUserResponse,
  ListUsersInUserGroupResponse,
  CreateAppAccountRequest,
  DescribeApplicationResponse,
  DescribeAppAccountResponse,
  DescribeUserGroupResourcesAuthorizationResponse,
  UserGroupInformation,
  ListUsersInOrgNodeSearchCriteria,
  DescribeAccountGroupResponse,
  CreateUserGroupRequest,
  DescribeOrgResourcesAuthorizationRequest,
  DescribeUserInfoResponse,
  DeleteOrgNodeRequest,
  DeleteUsersResponse,
  AppAccountInfo,
  DescribeAccountGroupRequest,
  AppAccountSearchCriteria,
  DescribeOrgResourcesAuthorizationResponse,
  ListUsersInUserGroupRequest,
  UserInfo,
  DeleteAppAccountResponse,
  ModifyAccountGroupRequest,
  ListUsersInOrgNodeResponse,
  ListApplicationAuthorizationsRequest,
  ModifyAccountGroupResponse,
  DeleteUsersRequest,
  AccountGroupInfo,
  OrgNodeChildInfo,
  ListAuthorizedApplicationsToUserRequest,
  DeleteOrgNodeResponse,
  ListAccountInAccountGroupResponse,
  DescribeUserResourcesAuthorizationResponse,
  ListUsersInOrgNodeRequest,
  InheritedForm,
  RemoveAccountFromAccountGroupResponse,
  DescribeUserGroupResourcesAuthorizationRequest,
  ListUserGroupsRequest,
  UpdateOrgNodeResponse,
  ListAuthorizedApplicationsToUserResponse,
  ModifyApplicationRequest,
  CreateUserRequest,
  DescribePublicKeyRequest,
  RemoveAccountFromAccountGroupRequest,
  ListApplicationAuthorizationsResponse,
  SortCondition,
  DescribeUserGroupResponse,
  ListUserGroupsOfUserRequest,
  UserInformation,
  DescribeApplicationRequest,
  ModifyUserInfoRequest,
  RemoveUserFromUserGroupResponse,
  DescribeUserThirdPartyAccountInfoRequest,
  ModifyUserInfoResponse,
  ListAuthorizedApplicationsToOrgNodeResponse,
  AddUserToUserGroupResponse,
  DescribeAppAccountRequest,
  AuthorizationInfo,
  CreateUserGroupResponse,
  DescribeUserThirdPartyAccountInfoResponse,
  ApplicationAuthorizationInfo,
  LinkUserInfo,
  ListUserGroupsResponse,
  ListAccountInAccountGroupRequest,
  DeleteUserGroupResponse,
  AuthorizationInfoSearchCriteria,
  ListUserGroupsOfUserResponse,
  CreateAccountGroupResponse,
  DescribeUserResourcesAuthorizationRequest,
  ListUsersRequest,
  DeleteUserGroupRequest,
  ApplicationInfoSearchCriteria,
  ListApplicationsResponse,
  AddAccountToAccountGroupRequest,
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
   * 获取用户组信息
   */
  async DescribeUserGroup(
    req: DescribeUserGroupRequest,
    cb?: (error: string, rep: DescribeUserGroupResponse) => void
  ): Promise<DescribeUserGroupResponse> {
    return this.request("DescribeUserGroup", req, cb)
  }

  /**
   * 创建账号组
   */
  async CreateAccountGroup(
    req: CreateAccountGroupRequest,
    cb?: (error: string, rep: CreateAccountGroupResponse) => void
  ): Promise<CreateAccountGroupResponse> {
    return this.request("CreateAccountGroup", req, cb)
  }

  /**
   * 查询指定机构下的资源授权列表
   */
  async DescribeOrgResourcesAuthorization(
    req: DescribeOrgResourcesAuthorizationRequest,
    cb?: (error: string, rep: DescribeOrgResourcesAuthorizationResponse) => void
  ): Promise<DescribeOrgResourcesAuthorizationResponse> {
    return this.request("DescribeOrgResourcesAuthorization", req, cb)
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
   * 获取JWT公钥信息。
   */
  async DescribePublicKey(
    req: DescribePublicKeyRequest,
    cb?: (error: string, rep: DescribePublicKeyResponse) => void
  ): Promise<DescribePublicKeyResponse> {
    return this.request("DescribePublicKey", req, cb)
  }

  /**
   * 获取用户列表信息。
   */
  async ListUsers(
    req: ListUsersRequest,
    cb?: (error: string, rep: ListUsersResponse) => void
  ): Promise<ListUsersResponse> {
    return this.request("ListUsers", req, cb)
  }

  /**
   * 从账号组中移除账号
   */
  async RemoveAccountFromAccountGroup(
    req: RemoveAccountFromAccountGroupRequest,
    cb?: (error: string, rep: RemoveAccountFromAccountGroupResponse) => void
  ): Promise<RemoveAccountFromAccountGroupResponse> {
    return this.request("RemoveAccountFromAccountGroup", req, cb)
  }

  /**
   *  获取账号组中的账号列表
   */
  async ListAccountInAccountGroup(
    req: ListAccountInAccountGroupRequest,
    cb?: (error: string, rep: ListAccountInAccountGroupResponse) => void
  ): Promise<ListAccountInAccountGroupResponse> {
    return this.request("ListAccountInAccountGroup", req, cb)
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
   * 应用授权关系列表（含搜索条件匹配）。
   */
  async ListApplicationAuthorizations(
    req: ListApplicationAuthorizationsRequest,
    cb?: (error: string, rep: ListApplicationAuthorizationsResponse) => void
  ): Promise<ListApplicationAuthorizationsResponse> {
    return this.request("ListApplicationAuthorizations", req, cb)
  }

  /**
   * 修改账号组
   */
  async ModifyAccountGroup(
    req: ModifyAccountGroupRequest,
    cb?: (error: string, rep: ModifyAccountGroupResponse) => void
  ): Promise<ModifyAccountGroupResponse> {
    return this.request("ModifyAccountGroup", req, cb)
  }

  /**
   * 查询指定用户下的资源授权列表
   */
  async DescribeUserResourcesAuthorization(
    req: DescribeUserResourcesAuthorizationRequest,
    cb?: (error: string, rep: DescribeUserResourcesAuthorizationResponse) => void
  ): Promise<DescribeUserResourcesAuthorizationResponse> {
    return this.request("DescribeUserResourcesAuthorization", req, cb)
  }

  /**
   * 修改应用账号
   */
  async ModifyAppAccount(
    req: ModifyAppAccountRequest,
    cb?: (error: string, rep: ModifyAppAccountResponse) => void
  ): Promise<ModifyAppAccountResponse> {
    return this.request("ModifyAppAccount", req, cb)
  }

  /**
   * 通过用户名或用户 id 获取用户的第三方账号绑定信息。
   */
  async DescribeUserThirdPartyAccountInfo(
    req: DescribeUserThirdPartyAccountInfoRequest,
    cb?: (error: string, rep: DescribeUserThirdPartyAccountInfoResponse) => void
  ): Promise<DescribeUserThirdPartyAccountInfoResponse> {
    return this.request("DescribeUserThirdPartyAccountInfo", req, cb)
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
   * 删除账号组
   */
  async DeleteAccountGroup(
    req: DeleteAccountGroupRequest,
    cb?: (error: string, rep: DeleteAccountGroupResponse) => void
  ): Promise<DeleteAccountGroupResponse> {
    return this.request("DeleteAccountGroup", req, cb)
  }

  /**
   * 更新一个应用的信息
   */
  async ModifyApplication(
    req: ModifyApplicationRequest,
    cb?: (error: string, rep: ModifyApplicationResponse) => void
  ): Promise<ModifyApplicationResponse> {
    return this.request("ModifyApplication", req, cb)
  }

  /**
   * 获取用户组列表信息（包含查询条件）。
   */
  async ListUserGroups(
    req: ListUserGroupsRequest,
    cb?: (error: string, rep: ListUserGroupsResponse) => void
  ): Promise<ListUserGroupsResponse> {
    return this.request("ListUserGroups", req, cb)
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
   * 删除应用账号
   */
  async DeleteAppAccount(
    req: DeleteAppAccountRequest,
    cb?: (error: string, rep: DeleteAppAccountResponse) => void
  ): Promise<DeleteAppAccountResponse> {
    return this.request("DeleteAppAccount", req, cb)
  }

  /**
   * 查询账号组列表
   */
  async DescribeAccountGroup(
    req: DescribeAccountGroupRequest,
    cb?: (error: string, rep: DescribeAccountGroupResponse) => void
  ): Promise<DescribeAccountGroupResponse> {
    return this.request("DescribeAccountGroup", req, cb)
  }

  /**
   * 批量删除当前节点下的用户。如果出现个别用户删除错误，将不影响其余被勾选用户被删除的操作，同时提示未被删除的用户名称/用户ID。
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 查询指定用户组下的资源授权列表
   */
  async DescribeUserGroupResourcesAuthorization(
    req: DescribeUserGroupResourcesAuthorizationRequest,
    cb?: (error: string, rep: DescribeUserGroupResourcesAuthorizationResponse) => void
  ): Promise<DescribeUserGroupResourcesAuthorizationResponse> {
    return this.request("DescribeUserGroupResourcesAuthorization", req, cb)
  }

  /**
   * 创建应用账号
   */
  async CreateAppAccount(
    req: CreateAppAccountRequest,
    cb?: (error: string, rep: CreateAppAccountResponse) => void
  ): Promise<CreateAppAccountResponse> {
    return this.request("CreateAppAccount", req, cb)
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
   * 查询应用账号列表
   */
  async DescribeAppAccount(
    req: DescribeAppAccountRequest,
    cb?: (error: string, rep: DescribeAppAccountResponse) => void
  ): Promise<DescribeAppAccountResponse> {
    return this.request("DescribeAppAccount", req, cb)
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
   * 通过用户名或用户 id 搜索用户
   */
  async DescribeUserInfo(
    req: DescribeUserInfoRequest,
    cb?: (error: string, rep: DescribeUserInfoResponse) => void
  ): Promise<DescribeUserInfoResponse> {
    return this.request("DescribeUserInfo", req, cb)
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
   * 新建一个机构节点
   */
  async CreateOrgNode(
    req: CreateOrgNodeRequest,
    cb?: (error: string, rep: CreateOrgNodeResponse) => void
  ): Promise<CreateOrgNodeResponse> {
    return this.request("CreateOrgNode", req, cb)
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
   * 获取应用列表信息。
   */
  async ListApplications(
    req: ListApplicationsRequest,
    cb?: (error: string, rep: ListApplicationsResponse) => void
  ): Promise<ListApplicationsResponse> {
    return this.request("ListApplications", req, cb)
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
   * 删除一个机构节点
   */
  async DeleteOrgNode(
    req: DeleteOrgNodeRequest,
    cb?: (error: string, rep: DeleteOrgNodeResponse) => void
  ): Promise<DeleteOrgNodeResponse> {
    return this.request("DeleteOrgNode", req, cb)
  }

  /**
   * 账号组添加账号
   */
  async AddAccountToAccountGroup(
    req: AddAccountToAccountGroupRequest,
    cb?: (error: string, rep: AddAccountToAccountGroupResponse) => void
  ): Promise<AddAccountToAccountGroupResponse> {
    return this.request("AddAccountToAccountGroup", req, cb)
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
}
