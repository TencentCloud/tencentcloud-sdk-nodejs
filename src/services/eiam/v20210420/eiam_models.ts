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

/**
 * DescribeUserGroup请求参数结构体
 */
export interface DescribeUserGroupRequest {
  /**
   * 用户组ID，是用户组的全局唯一标识。
   */
  UserGroupId: string
}

/**
 * RemoveUserFromUserGroup返回参数结构体
 */
export interface RemoveUserFromUserGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrgNode返回参数结构体
 */
export interface DescribeOrgNodeResponse {
  /**
      * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedDate: string

  /**
      * 机构节点外部ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomizedOrgNodeId: string

  /**
      * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentOrgNodeId: string

  /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSource: string

  /**
      * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedDate: string

  /**
      * 当前机构节点下的子节点列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeChildInfo: Array<OrgNodeChildInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrgNode返回参数结构体
 */
export interface CreateOrgNodeResponse {
  /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUsersInOrgNode返回参数结构体
 */
export interface ListUsersInOrgNodeResponse {
  /**
      * 机构子节点下的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeChildUserInfo: Array<OrgNodeChildUserInfo>

  /**
      * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
      * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserInfo: Array<UserInfo>

  /**
      * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalUserNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserInfo返回参数结构体
 */
export interface ModifyUserInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
  /**
   * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
   */
  UserName?: string

  /**
   * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
   */
  UserId?: string
}

/**
 * ListAuthorizedApplicationsToOrgNode返回参数结构体
 */
export interface ListAuthorizedApplicationsToOrgNodeResponse {
  /**
      * 机构节点拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 当前机构节点下的子节点列表
 */
export interface OrgNodeChildInfo {
  /**
      * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedDate: string

  /**
      * 用户自定义可选填的机构节点对外ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomizedOrgNodeId: string

  /**
      * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentOrgNodeId: string

  /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSource: string

  /**
      * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedDate: string
}

/**
 * ListAuthorizedApplicationsToUser请求参数结构体
 */
export interface ListAuthorizedApplicationsToUserRequest {
  /**
   * 用户 ID。
   */
  UserId: string

  /**
   * 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 。传0表示不查询该范围，传1表示应用查询该范围。
   */
  IncludeInheritedAuthorizations?: boolean
}

/**
 * DeleteOrgNode返回参数结构体
 */
export interface DeleteOrgNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserToUserGroup返回参数结构体
 */
export interface AddUserToUserGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
      * 返回的新创建的用户ID，是该用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAuthorizedApplicationsToUserGroup请求参数结构体
 */
export interface ListAuthorizedApplicationsToUserGroupRequest {
  /**
   * 用户组 Id 。
   */
  UserGroupId: string
}

/**
 * ListUsersInOrgNode请求参数结构体
 */
export interface ListUsersInOrgNodeRequest {
  /**
   * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点下用户信息。
   */
  OrgNodeId?: string

  /**
   * 限制读取子节点信息层数。当读取层数为空或0时，默认仅读取当前机构节点信息。当读取层数为1时，读取本机构节点以及其第一层子节点信息。
   */
  IncludeOrgNodeChildInfo?: boolean
}

/**
 * 应用信息列表。
 */
export interface InheritedForm {
  /**
      * 用户所在的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupIds: Array<string>

  /**
      * 用户所在的机构节点ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeIds: Array<string>
}

/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
  /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUsersInUserGroup返回参数结构体
 */
export interface ListUsersInUserGroupResponse {
  /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupId: string

  /**
      * 返回的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserInfo: Array<UserInfo>

  /**
      * 返回的用户信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserToUserGroup请求参数结构体
 */
export interface AddUserToUserGroupRequest {
  /**
   * 加入用户组的用户ID列表。
   */
  UserIds: Array<string>

  /**
   * 用户组ID，是用户组的全局唯一标识。
   */
  UserGroupId: string
}

/**
 * 应用信息列表。
 */
export interface ApplicationAuthorizationInfo {
  /**
      * 用户在被授权应用下对应的账号列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationAccounts: Array<string>

  /**
      * 应用ID，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationId: string

  /**
      * 展示用户所在的用户组、机构节点拥有该应用的访问权限的ID信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InheritedForm: InheritedForm
}

/**
 * UpdateOrgNode返回参数结构体
 */
export interface UpdateOrgNodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplication返回参数结构体
 */
export interface DescribeApplicationResponse {
  /**
      * 密钥id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyId: string

  /**
      * 应用展示名称，长度限制：64个字符。 默认与应用名字相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 应用最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifiedDate: string

  /**
      * 客户端id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientId: string

  /**
      * 应用类型，即创建应用时所选择的应用模版类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationType: string

  /**
      * 应用创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedDate: string

  /**
      * 应用id，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationId: string

  /**
      * 令牌有效时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TokenExpired: number

  /**
      * 客户端secret。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientSecret: string

  /**
      * 公钥信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicKey: string

  /**
      * 授权地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuthorizeUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAuthorizedApplicationsToUser返回参数结构体
 */
export interface ListAuthorizedApplicationsToUserResponse {
  /**
      * 用户拥有访问权限的应用信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationAuthorizationInfo: Array<ApplicationAuthorizationInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserGroup返回参数结构体
 */
export interface DeleteUserGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplication请求参数结构体
 */
export interface DescribeApplicationRequest {
  /**
   * 应用id，是应用的全局唯一标识，与ClientId参数不能同时为空。
   */
  ApplicationId?: string

  /**
   * 客户端id，与ApplicationId参数不能同时为空。
   */
  ClientId?: string
}

/**
 * UpdateOrgNode请求参数结构体
 */
export interface UpdateOrgNodeRequest {
  /**
   * 机构节点ID，是机构节点的全局唯一标识。
   */
  OrgNodeId: string

  /**
   * 机构节点名称，长度限制：64个字符。
   */
  DisplayName: string

  /**
   * 机构节点描述。
   */
  Description?: string

  /**
   * 用户自定义可选填的机构节点对外ID，如果非空则校验此ID的唯一性。
   */
  CustomizedOrgNodeId?: string
}

/**
 * 机构子节点下的用户信息列表
 */
export interface OrgNodeChildUserInfo {
  /**
      * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
      * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserInfo: Array<UserInfo>

  /**
      * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalUserNum: number
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 用户名，长度限制：64个字符。
   */
  UserName: string

  /**
   * 用户密码， 需要符合密码策略的配置。
   */
  Password: string

  /**
   * 昵称，长度限制：64个字符。 默认与用户名相同。
   */
  DisplayName?: string

  /**
   * 用户备注，长度限制：512个字符。
   */
  Description?: string

  /**
   * 用户所属用户组ID列表。
   */
  UserGroupIds?: Array<string>

  /**
   * 用户手机号。
   */
  Phone?: string

  /**
   * 用户所属组织机构唯一ID。如果为空，默认为在根节点下创建用户。
   */
  OrgNodeId?: string

  /**
   * 用户过期时间，遵循 ISO 8601 标准。
   */
  ExpirationTime?: string

  /**
   * 用户邮箱。
   */
  Email?: string

  /**
   * 密码是否需要重置，为空默认为false不需要重置密码。
   */
  PwdNeedReset?: boolean
}

/**
 * ListUserGroupsOfUser返回参数结构体
 */
export interface ListUserGroupsOfUserResponse {
  /**
      * 用户所属的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupIds: Array<string>

  /**
      * 用户ID，是用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
  /**
      * 用户名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 用户备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 用户所属用户组 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupIds: Array<string>

  /**
      * 用户 id，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
      * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Email: string

  /**
      * 用户手机号。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string

  /**
      * 用户所属组织机构 Id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgNodeId: string

  /**
      * 数据来源
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSource: string

  /**
      * 用户过期时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpirationTime: string

  /**
      * 用户激活时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivationTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrgNode请求参数结构体
 */
export interface DeleteOrgNodeRequest {
  /**
   * 机构节点ID，是机构节点的全局唯一标识。
   */
  OrgNodeId: string
}

/**
 * CreateOrgNode请求参数结构体
 */
export interface CreateOrgNodeRequest {
  /**
   * 机构节点名称，长度限制：64个字符。
   */
  DisplayName: string

  /**
   * 父机构节点ID，如果为空则默认创建在机构根节点下。
   */
  ParentOrgNodeId?: string

  /**
   * 机构节点描述。
   */
  Description?: string

  /**
   * 用户自定义可选填的机构节点对外ID，如果非空则校验此ID的唯一性。
   */
  CustomizedOrgNodeId?: string
}

/**
 * RemoveUserFromUserGroup请求参数结构体
 */
export interface RemoveUserFromUserGroupRequest {
  /**
   * 要加入用户组的用户ID列表。
   */
  UserIds: Array<string>

  /**
   * 用户组ID，是用户组的全局唯一标识。
   */
  UserGroupId: string
}

/**
 * ListAuthorizedApplicationsToUserGroup返回参数结构体
 */
export interface ListAuthorizedApplicationsToUserGroupResponse {
  /**
      * 用户组拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserGroup请求参数结构体
 */
export interface DeleteUserGroupRequest {
  /**
   * 用户组ID，是用户组的全局唯一标识。
   */
  UserGroupId: string
}

/**
 * DescribeUserInfo请求参数结构体
 */
export interface DescribeUserInfoRequest {
  /**
   * 用户名，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
   */
  UserName?: string

  /**
   * 用户 id，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
   */
  UserId?: string
}

/**
 * DescribeUserGroup返回参数结构体
 */
export interface DescribeUserGroupResponse {
  /**
      * 昵称，长度限制：64个字符。 DisplayName不唯一。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 用户备注，长度限制：512个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUserGroupsOfUser请求参数结构体
 */
export interface ListUserGroupsOfUserRequest {
  /**
   * 用户ID，是用户的全局唯一标识。
   */
  UserId: string
}

/**
 * ListUsersInUserGroup请求参数结构体
 */
export interface ListUsersInUserGroupRequest {
  /**
   * 用户组ID，是用户组的全局唯一标识。
   */
  UserGroupId: string
}

/**
 * 用户信息列表。
 */
export interface UserInfo {
  /**
      * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string
}

/**
 * ListAuthorizedApplicationsToOrgNode请求参数结构体
 */
export interface ListAuthorizedApplicationsToOrgNodeRequest {
  /**
   * 机构节点 Id 。
   */
  OrgNodeId: string
}

/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
  /**
   * 昵称，长度限制：64个字符。 DisplayName是唯一的。
   */
  DisplayName: string

  /**
   * 用户备注，长度限制：512个字符。
   */
  Description?: string
}

/**
 * DescribeOrgNode请求参数结构体
 */
export interface DescribeOrgNodeRequest {
  /**
   * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点信息。
   */
  OrgNodeId?: string

  /**
   * 是否读取其子节点信息。当读取层数为空或0时，默认仅读取当前机构节点信息。当读取层数为1时，读取本机构节点以及其第一层子节点信息。
   */
  IncludeOrgNodeChildInfo?: boolean
}

/**
 * ModifyUserInfo请求参数结构体
 */
export interface ModifyUserInfoRequest {
  /**
   * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
   */
  UserName?: string

  /**
   * 昵称，长度限制：64个字符。 默认与用户名相同。
   */
  DisplayName?: string

  /**
   * 用户备注，长度限制：512个字符。
   */
  Description?: string

  /**
   * 用户所属用户组ID列表。
   */
  UserGroupIds?: Array<string>

  /**
   * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
   */
  UserId?: string

  /**
   * 用户手机号。
   */
  Phone?: string

  /**
   * 用户过期时间，遵循 ISO 8601 标准。
   */
  ExpirationTime?: string

  /**
   * 用户密码， 需要符合密码策略的配置。
   */
  Password?: string

  /**
   * 用户邮箱。
   */
  Email?: string

  /**
   * 密码是否需要重置，为空默认为false不需要重置密码。
   */
  PwdNeedReset?: boolean
}
