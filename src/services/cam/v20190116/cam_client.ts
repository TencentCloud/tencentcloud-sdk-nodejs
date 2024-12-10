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
  SubAccountUser,
  ListAttachedRolePoliciesResponse,
  CreateMessageReceiverRequest,
  UpdateUserOIDCConfigResponse,
  UpdateRoleSessionDurationResponse,
  Receiver,
  ListAccessKeysRequest,
  SetMfaFlagResponse,
  UpdateSAMLProviderRequest,
  DeleteUserRequest,
  DetachGroupPolicyRequest,
  DescribeRoleListResponse,
  UpdatePolicyResponse,
  DeleteUserResponse,
  TagRoleResponse,
  LoginActionFlagIntl,
  GetRoleRequest,
  CreateServiceLinkedRoleRequest,
  ListAttachedGroupPoliciesRequest,
  ListGroupsForUserRequest,
  AttachRolePolicyResponse,
  GetUserPermissionBoundaryRequest,
  DescribeOIDCConfigRequest,
  GetRolePermissionBoundaryRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetSecurityLastUsedRequest,
  DescribeUserSAMLConfigResponse,
  DeleteUserPermissionsBoundaryResponse,
  ListUsersResponse,
  UpdateRoleDescriptionResponse,
  GetAccountSummaryRequest,
  DeletePolicyResponse,
  GetUserAppIdResponse,
  GetUserAppIdRequest,
  DescribeOIDCConfigResponse,
  ListPolicyVersionsRequest,
  GetCustomMFATokenInfoRequest,
  DescribeRoleListRequest,
  DescribeUserSAMLConfigRequest,
  DeleteMessageReceiverResponse,
  DeleteAccessKeyResponse,
  PutRolePermissionsBoundaryRequest,
  GetGroupRequest,
  StrategyInfo,
  DeleteRoleResponse,
  PolicyVersionItem,
  DetachUserPolicyRequest,
  DescribeSubAccountsRequest,
  DeleteUserPermissionsBoundaryRequest,
  ListSAMLProvidersRequest,
  UpdateRoleSessionDurationRequest,
  CreateAccessKeyResponse,
  DeletePolicyVersionResponse,
  CreateAccessKeyRequest,
  BuildDataFlowAuthTokenRequest,
  GetRolePermissionBoundaryResponse,
  AttachedUserPolicyGroupInfo,
  ListGroupsForUserResponse,
  ListUsersForGroupRequest,
  RemoveUserFromGroupRequest,
  CreatePolicyVersionResponse,
  ListPoliciesResponse,
  DeleteAccessKeyRequest,
  AccessKeyDetail,
  WeChatWorkSubAccount,
  OffsiteFlag,
  GroupIdOfUidInfo,
  UpdateRoleDescriptionRequest,
  UpdateUserSAMLConfigRequest,
  DeleteGroupResponse,
  RoleInfo,
  DescribeSafeAuthFlagResponse,
  CreatePolicyVersionRequest,
  SecretIdLastUsed,
  UpdateAccessKeyResponse,
  CreateUserOIDCConfigResponse,
  ListAttachedUserAllPoliciesResponse,
  DeleteGroupRequest,
  GetUserResponse,
  GetUserPermissionBoundaryResponse,
  CreatePolicyResponse,
  ListGroupsResponse,
  DetachRolePolicyRequest,
  UntagRoleResponse,
  ListPoliciesGrantingServiceAccessResponse,
  DeleteRolePermissionsBoundaryRequest,
  RoleTags,
  DescribeUserOIDCConfigResponse,
  DeletePolicyRequest,
  GroupInfo,
  AddUserRequest,
  UpdateAssumeRolePolicyRequest,
  LoginActionFlag,
  DeleteRoleRequest,
  ListWeChatWorkSubAccountsRequest,
  UpdateRoleConsoleLoginRequest,
  BuildDataFlowAuthTokenResponse,
  UpdateUserResponse,
  UpdateAssumeRolePolicyResponse,
  GetPolicyVersionRequest,
  CreateSAMLProviderResponse,
  DeleteRolePermissionsBoundaryResponse,
  GetUserRequest,
  LoginActionMfaFlag,
  SubAccountInfo,
  CreateGroupRequest,
  SAMLProviderInfo,
  ListReceiverRequest,
  DisableUserSSORequest,
  ListPoliciesGrantingServiceAccessRequest,
  UpdateSAMLProviderResponse,
  UpdateAccessKeyRequest,
  UpdateUserRequest,
  ListWeChatWorkSubAccountsResponse,
  CreateSAMLProviderRequest,
  AttachPolicyInfo,
  DisableUserSSOResponse,
  UpdateRoleConsoleLoginResponse,
  AttachRolePolicyRequest,
  ConsumeCustomMFATokenResponse,
  AttachUserPolicyRequest,
  ListAttachedGroupPoliciesResponse,
  ListAttachedUserPoliciesResponse,
  AuthToken,
  PutUserPermissionsBoundaryResponse,
  GetPolicyVersionResponse,
  GetCustomMFATokenInfoResponse,
  ConsumeCustomMFATokenRequest,
  CreateOIDCConfigRequest,
  AccessKey,
  GetGroupResponse,
  ListReceiverResponse,
  UpdateOIDCConfigResponse,
  UntagRoleRequest,
  AttachGroupPolicyRequest,
  DeleteSAMLProviderResponse,
  GetAccountSummaryResponse,
  CreateServiceLinkedRoleResponse,
  ListUsersRequest,
  ListCollaboratorsRequest,
  CreateUserOIDCConfigRequest,
  AddUserResponse,
  UpdateGroupResponse,
  ListEntitiesForPolicyRequest,
  TagRoleRequest,
  ListPoliciesRequest,
  GetServiceLinkedRoleDeletionStatusRequest,
  ListGrantServiceAccessActionNode,
  DetachGroupPolicyResponse,
  GroupMemberInfo,
  CreatePolicyRequest,
  ListAttachedUserAllPoliciesRequest,
  DeletePolicyVersionRequest,
  CreateUserSAMLConfigRequest,
  UpdateGroupRequest,
  ListGrantServiceAccessNode,
  DeleteSAMLProviderRequest,
  UpdateOIDCConfigRequest,
  CreateRoleResponse,
  GetSAMLProviderResponse,
  DescribeSafeAuthFlagIntlResponse,
  ListGroupsRequest,
  ListPolicyVersionsResponse,
  GetPolicyRequest,
  DescribeSafeAuthFlagIntlRequest,
  SetDefaultPolicyVersionRequest,
  UpdateUserOIDCConfigRequest,
  AddUserToGroupRequest,
  RemoveUserFromGroupResponse,
  DetachRolePolicyResponse,
  DescribeUserOIDCConfigRequest,
  CreateOIDCConfigResponse,
  AttachedPolicyOfRole,
  PutUserPermissionsBoundaryRequest,
  ListSAMLProvidersResponse,
  SetDefaultPolicyVersionResponse,
  ListAttachedRolePoliciesRequest,
  GetSAMLProviderRequest,
  DetachUserPolicyResponse,
  GetRoleResponse,
  CreateRoleRequest,
  AttachedUserPolicy,
  DeleteServiceLinkedRoleResponse,
  ListUsersForGroupResponse,
  GetPolicyResponse,
  DescribeSafeAuthFlagRequest,
  DeleteServiceLinkedRoleRequest,
  AttachEntityOfPolicy,
  DeleteOIDCConfigResponse,
  PolicyVersionDetail,
  ListGrantServiceAccessPolicy,
  ListGrantServiceAccessService,
  CreateUserSAMLConfigResponse,
  DescribeSubAccountsResponse,
  ListEntitiesForPolicyResponse,
  AddUserToGroupResponse,
  UpdateUserSAMLConfigResponse,
  AttachUserPolicyResponse,
  DescribeSafeAuthFlagCollResponse,
  DeleteMessageReceiverRequest,
  DescribeSafeAuthFlagCollRequest,
  PutRolePermissionsBoundaryResponse,
  SetMfaFlagRequest,
  ListCollaboratorsResponse,
  ListAccessKeysResponse,
  GetSecurityLastUsedResponse,
  ListAttachedUserPoliciesRequest,
  AttachGroupPolicyResponse,
  UpdatePolicyRequest,
  DeleteOIDCConfigRequest,
  CreateMessageReceiverResponse,
  CreateGroupResponse,
} from "./cam_models"

/**
 * cam client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cam.tencentcloudapi.com", "2019-01-16", clientConfig)
  }

  /**
   * 创建子用户
   */
  async AddUser(
    req: AddUserRequest,
    cb?: (error: string, rep: AddUserResponse) => void
  ): Promise<AddUserResponse> {
    return this.request("AddUser", req, cb)
  }

  /**
   * 创建服务相关角色
   */
  async CreateServiceLinkedRole(
    req: CreateServiceLinkedRoleRequest,
    cb?: (error: string, rep: CreateServiceLinkedRoleResponse) => void
  ): Promise<CreateServiceLinkedRoleResponse> {
    return this.request("CreateServiceLinkedRole", req, cb)
  }

  /**
   * 获取用户权限边界
   */
  async GetUserPermissionBoundary(
    req: GetUserPermissionBoundaryRequest,
    cb?: (error: string, rep: GetUserPermissionBoundaryResponse) => void
  ): Promise<GetUserPermissionBoundaryResponse> {
    return this.request("GetUserPermissionBoundary", req, cb)
  }

  /**
   * 查询账户摘要
   */
  async GetAccountSummary(
    req?: GetAccountSummaryRequest,
    cb?: (error: string, rep: GetAccountSummaryResponse) => void
  ): Promise<GetAccountSummaryResponse> {
    return this.request("GetAccountSummary", req, cb)
  }

  /**
   * 删除角色权限边界
   */
  async DeleteRolePermissionsBoundary(
    req: DeleteRolePermissionsBoundaryRequest,
    cb?: (error: string, rep: DeleteRolePermissionsBoundaryResponse) => void
  ): Promise<DeleteRolePermissionsBoundaryResponse> {
    return this.request("DeleteRolePermissionsBoundary", req, cb)
  }

  /**
   * 获取消息接收人列表
   */
  async ListReceiver(
    req: ListReceiverRequest,
    cb?: (error: string, rep: ListReceiverResponse) => void
  ): Promise<ListReceiverResponse> {
    return this.request("ListReceiver", req, cb)
  }

  /**
   * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
   */
  async ListAttachedGroupPolicies(
    req: ListAttachedGroupPoliciesRequest,
    cb?: (error: string, rep: ListAttachedGroupPoliciesResponse) => void
  ): Promise<ListAttachedGroupPoliciesResponse> {
    return this.request("ListAttachedGroupPolicies", req, cb)
  }

  /**
   * 验证自定义多因子Token
   */
  async ConsumeCustomMFAToken(
    req: ConsumeCustomMFATokenRequest,
    cb?: (error: string, rep: ConsumeCustomMFATokenResponse) => void
  ): Promise<ConsumeCustomMFATokenResponse> {
    return this.request("ConsumeCustomMFAToken", req, cb)
  }

  /**
   * 更新子用户
   */
  async UpdateUser(
    req: UpdateUserRequest,
    cb?: (error: string, rep: UpdateUserResponse) => void
  ): Promise<UpdateUserResponse> {
    return this.request("UpdateUser", req, cb)
  }

  /**
   * 获取自定义多因子Token关联信息
   */
  async GetCustomMFATokenInfo(
    req: GetCustomMFATokenInfoRequest,
    cb?: (error: string, rep: GetCustomMFATokenInfoResponse) => void
  ): Promise<GetCustomMFATokenInfoResponse> {
    return this.request("GetCustomMFATokenInfo", req, cb)
  }

  /**
   * 查询子用户
   */
  async GetUser(
    req: GetUserRequest,
    cb?: (error: string, rep: GetUserResponse) => void
  ): Promise<GetUserResponse> {
    return this.request("GetUser", req, cb)
  }

  /**
   * 修改用户OIDC配置
   */
  async UpdateUserOIDCConfig(
    req: UpdateUserOIDCConfigRequest,
    cb?: (error: string, rep: UpdateUserOIDCConfigResponse) => void
  ): Promise<UpdateUserOIDCConfigResponse> {
    return this.request("UpdateUserOIDCConfig", req, cb)
  }

  /**
   * 根据删除TaskId获取服务相关角色删除状态
   */
  async GetServiceLinkedRoleDeletionStatus(
    req: GetServiceLinkedRoleDeletionStatusRequest,
    cb?: (error: string, rep: GetServiceLinkedRoleDeletionStatusResponse) => void
  ): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    return this.request("GetServiceLinkedRoleDeletionStatus", req, cb)
  }

  /**
   * 查询用户OIDC配置
   */
  async DescribeUserOIDCConfig(
    req?: DescribeUserOIDCConfigRequest,
    cb?: (error: string, rep: DescribeUserOIDCConfigResponse) => void
  ): Promise<DescribeUserOIDCConfigResponse> {
    return this.request("DescribeUserOIDCConfig", req, cb)
  }

  /**
   * 修改用户SAML配置
   */
  async UpdateUserSAMLConfig(
    req: UpdateUserSAMLConfigRequest,
    cb?: (error: string, rep: UpdateUserSAMLConfigResponse) => void
  ): Promise<UpdateUserSAMLConfigResponse> {
    return this.request("UpdateUserSAMLConfig", req, cb)
  }

  /**
   * 为CAM用户创建访问密钥
   */
  async CreateAccessKey(
    req: CreateAccessKeyRequest,
    cb?: (error: string, rep: CreateAccessKeyResponse) => void
  ): Promise<CreateAccessKeyResponse> {
    return this.request("CreateAccessKey", req, cb)
  }

  /**
   * 删除子用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
   */
  async UpdateRoleDescription(
    req: UpdateRoleDescriptionRequest,
    cb?: (error: string, rep: UpdateRoleDescriptionResponse) => void
  ): Promise<UpdateRoleDescriptionResponse> {
    return this.request("UpdateRoleDescription", req, cb)
  }

  /**
   * 获取数据流认证Token
   */
  async BuildDataFlowAuthToken(
    req: BuildDataFlowAuthTokenRequest,
    cb?: (error: string, rep: BuildDataFlowAuthTokenResponse) => void
  ): Promise<BuildDataFlowAuthTokenResponse> {
    return this.request("BuildDataFlowAuthToken", req, cb)
  }

  /**
   * 更新SAML身份提供商信息
   */
  async UpdateSAMLProvider(
    req: UpdateSAMLProviderRequest,
    cb?: (error: string, rep: UpdateSAMLProviderResponse) => void
  ): Promise<UpdateSAMLProviderResponse> {
    return this.request("UpdateSAMLProvider", req, cb)
  }

  /**
   * 角色解绑标签。
   */
  async UntagRole(
    req: UntagRoleRequest,
    cb?: (error: string, rep: UntagRoleResponse) => void
  ): Promise<UntagRoleResponse> {
    return this.request("UntagRole", req, cb)
  }

  /**
   * 通过子用户UIN列表查询子用户
   */
  async DescribeSubAccounts(
    req: DescribeSubAccountsRequest,
    cb?: (error: string, rep: DescribeSubAccountsResponse) => void
  ): Promise<DescribeSubAccountsResponse> {
    return this.request("DescribeSubAccounts", req, cb)
  }

  /**
   * 从用户组删除用户
   */
  async RemoveUserFromGroup(
    req: RemoveUserFromGroupRequest,
    cb?: (error: string, rep: RemoveUserFromGroupResponse) => void
  ): Promise<RemoveUserFromGroupResponse> {
    return this.request("RemoveUserFromGroup", req, cb)
  }

  /**
   * 查询SAML身份提供商列表
   */
  async ListSAMLProviders(
    req?: ListSAMLProvidersRequest,
    cb?: (error: string, rep: ListSAMLProvidersResponse) => void
  ): Promise<ListSAMLProvidersResponse> {
    return this.request("ListSAMLProviders", req, cb)
  }

  /**
   * 查询用户组关联的用户列表
   */
  async ListUsersForGroup(
    req: ListUsersForGroupRequest,
    cb?: (error: string, rep: ListUsersForGroupResponse) => void
  ): Promise<ListUsersForGroupResponse> {
    return this.request("ListUsersForGroup", req, cb)
  }

  /**
   * 查询用户组详情
   */
  async GetGroup(
    req: GetGroupRequest,
    cb?: (error: string, rep: GetGroupResponse) => void
  ): Promise<GetGroupResponse> {
    return this.request("GetGroup", req, cb)
  }

  /**
   * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
   */
  async CreateUserOIDCConfig(
    req: CreateUserOIDCConfigRequest,
    cb?: (error: string, rep: CreateUserOIDCConfigResponse) => void
  ): Promise<CreateUserOIDCConfigResponse> {
    return this.request("CreateUserOIDCConfig", req, cb)
  }

  /**
     * 为CAM用户删除访问密钥。
此接口属于高风险操作，删除密钥后不可恢复，腾讯云将永久拒绝此密钥的所有请求，请谨慎使用。
     */
  async DeleteAccessKey(
    req: DeleteAccessKeyRequest,
    cb?: (error: string, rep: DeleteAccessKeyResponse) => void
  ): Promise<DeleteAccessKeyResponse> {
    return this.request("DeleteAccessKey", req, cb)
  }

  /**
   * 获取用户AppId
   */
  async GetUserAppId(
    req?: GetUserAppIdRequest,
    cb?: (error: string, rep: GetUserAppIdResponse) => void
  ): Promise<GetUserAppIdResponse> {
    return this.request("GetUserAppId", req, cb)
  }

  /**
   * 设置角色权限边界
   */
  async PutRolePermissionsBoundary(
    req: PutRolePermissionsBoundaryRequest,
    cb?: (error: string, rep: PutRolePermissionsBoundaryResponse) => void
  ): Promise<PutRolePermissionsBoundaryResponse> {
    return this.request("PutRolePermissionsBoundary", req, cb)
  }

  /**
   * 删除服务相关角色
   */
  async DeleteServiceLinkedRole(
    req: DeleteServiceLinkedRoleRequest,
    cb?: (error: string, rep: DeleteServiceLinkedRoleResponse) => void
  ): Promise<DeleteServiceLinkedRoleResponse> {
    return this.request("DeleteServiceLinkedRole", req, cb)
  }

  /**
   * 拉取子用户
   */
  async ListUsers(
    req?: ListUsersRequest,
    cb?: (error: string, rep: ListUsersResponse) => void
  ): Promise<ListUsersResponse> {
    return this.request("ListUsers", req, cb)
  }

  /**
   * 查询用户SAML配置
   */
  async DescribeUserSAMLConfig(
    req?: DescribeUserSAMLConfigRequest,
    cb?: (error: string, rep: DescribeUserSAMLConfigResponse) => void
  ): Promise<DescribeUserSAMLConfigResponse> {
    return this.request("DescribeUserSAMLConfig", req, cb)
  }

  /**
   * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
   */
  async DetachRolePolicy(
    req: DetachRolePolicyRequest,
    cb?: (error: string, rep: DetachRolePolicyResponse) => void
  ): Promise<DetachRolePolicyResponse> {
    return this.request("DetachRolePolicy", req, cb)
  }

  /**
   * 本接口（DescribeRoleList）用于获取账号下的角色列表。
   */
  async DescribeRoleList(
    req: DescribeRoleListRequest,
    cb?: (error: string, rep: DescribeRoleListResponse) => void
  ): Promise<DescribeRoleListResponse> {
    return this.request("DescribeRoleList", req, cb)
  }

  /**
   * 创建SAML身份提供商
   */
  async CreateSAMLProvider(
    req: CreateSAMLProviderRequest,
    cb?: (error: string, rep: CreateSAMLProviderResponse) => void
  ): Promise<CreateSAMLProviderResponse> {
    return this.request("CreateSAMLProvider", req, cb)
  }

  /**
   * 删除OIDC身份提供商
   */
  async DeleteOIDCConfig(
    req: DeleteOIDCConfigRequest,
    cb?: (error: string, rep: DeleteOIDCConfigResponse) => void
  ): Promise<DeleteOIDCConfigResponse> {
    return this.request("DeleteOIDCConfig", req, cb)
  }

  /**
   * 修改角色OIDC配置
   */
  async UpdateOIDCConfig(
    req: UpdateOIDCConfigRequest,
    cb?: (error: string, rep: UpdateOIDCConfigResponse) => void
  ): Promise<UpdateOIDCConfigResponse> {
    return this.request("UpdateOIDCConfig", req, cb)
  }

  /**
   * 本接口（DeleteRole）用于删除指定角色。
   */
  async DeleteRole(
    req: DeleteRoleRequest,
    cb?: (error: string, rep: DeleteRoleResponse) => void
  ): Promise<DeleteRoleResponse> {
    return this.request("DeleteRole", req, cb)
  }

  /**
   * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
   */
  async AttachGroupPolicy(
    req: AttachGroupPolicyRequest,
    cb?: (error: string, rep: AttachGroupPolicyResponse) => void
  ): Promise<AttachGroupPolicyResponse> {
    return this.request("AttachGroupPolicy", req, cb)
  }

  /**
   * 获取所有已授权服务
   */
  async ListPoliciesGrantingServiceAccess(
    req: ListPoliciesGrantingServiceAccessRequest,
    cb?: (error: string, rep: ListPoliciesGrantingServiceAccessResponse) => void
  ): Promise<ListPoliciesGrantingServiceAccessResponse> {
    return this.request("ListPoliciesGrantingServiceAccess", req, cb)
  }

  /**
   * 为CAM用户更新访问密钥
   */
  async UpdateAccessKey(
    req: UpdateAccessKeyRequest,
    cb?: (error: string, rep: UpdateAccessKeyResponse) => void
  ): Promise<UpdateAccessKeyResponse> {
    return this.request("UpdateAccessKey", req, cb)
  }

  /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     */
  async UpdatePolicy(
    req: UpdatePolicyRequest,
    cb?: (error: string, rep: UpdatePolicyResponse) => void
  ): Promise<UpdatePolicyResponse> {
    return this.request("UpdatePolicy", req, cb)
  }

  /**
   * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
   */
  async ListAttachedUserPolicies(
    req: ListAttachedUserPoliciesRequest,
    cb?: (error: string, rep: ListAttachedUserPoliciesResponse) => void
  ): Promise<ListAttachedUserPoliciesResponse> {
    return this.request("ListAttachedUserPolicies", req, cb)
  }

  /**
   * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
   */
  async CreatePolicyVersion(
    req: CreatePolicyVersionRequest,
    cb?: (error: string, rep: CreatePolicyVersionResponse) => void
  ): Promise<CreatePolicyVersionResponse> {
    return this.request("CreatePolicyVersion", req, cb)
  }

  /**
   * 获取协作者列表
   */
  async ListCollaborators(
    req: ListCollaboratorsRequest,
    cb?: (error: string, rep: ListCollaboratorsResponse) => void
  ): Promise<ListCollaboratorsResponse> {
    return this.request("ListCollaborators", req, cb)
  }

  /**
   * 角色绑定标签
   */
  async TagRole(
    req: TagRoleRequest,
    cb?: (error: string, rep: TagRoleResponse) => void
  ): Promise<TagRoleResponse> {
    return this.request("TagRole", req, cb)
  }

  /**
   * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
   */
  async UpdateRoleConsoleLogin(
    req: UpdateRoleConsoleLoginRequest,
    cb?: (error: string, rep: UpdateRoleConsoleLoginResponse) => void
  ): Promise<UpdateRoleConsoleLoginResponse> {
    return this.request("UpdateRoleConsoleLogin", req, cb)
  }

  /**
   * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
   */
  async AttachUserPolicy(
    req: AttachUserPolicyRequest,
    cb?: (error: string, rep: AttachUserPolicyResponse) => void
  ): Promise<AttachUserPolicyResponse> {
    return this.request("AttachUserPolicy", req, cb)
  }

  /**
   * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
   */
  async UpdateAssumeRolePolicy(
    req: UpdateAssumeRolePolicyRequest,
    cb?: (error: string, rep: UpdateAssumeRolePolicyResponse) => void
  ): Promise<UpdateAssumeRolePolicyResponse> {
    return this.request("UpdateAssumeRolePolicy", req, cb)
  }

  /**
   * 设置子用户的登录保护和敏感操作校验方式
   */
  async SetMfaFlag(
    req: SetMfaFlagRequest,
    cb?: (error: string, rep: SetMfaFlagResponse) => void
  ): Promise<SetMfaFlagResponse> {
    return this.request("SetMfaFlag", req, cb)
  }

  /**
   * 获取密钥最近使用情况
   */
  async GetSecurityLastUsed(
    req: GetSecurityLastUsedRequest,
    cb?: (error: string, rep: GetSecurityLastUsedResponse) => void
  ): Promise<GetSecurityLastUsedResponse> {
    return this.request("GetSecurityLastUsed", req, cb)
  }

  /**
   * 创建用户组
   */
  async CreateGroup(
    req: CreateGroupRequest,
    cb?: (error: string, rep: CreateGroupResponse) => void
  ): Promise<CreateGroupResponse> {
    return this.request("CreateGroup", req, cb)
  }

  /**
   * 本接口（DeletePolicy）可用于删除策略。
   */
  async DeletePolicy(
    req: DeletePolicyRequest,
    cb?: (error: string, rep: DeletePolicyResponse) => void
  ): Promise<DeletePolicyResponse> {
    return this.request("DeletePolicy", req, cb)
  }

  /**
   * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
   */
  async DeletePolicyVersion(
    req: DeletePolicyVersionRequest,
    cb?: (error: string, rep: DeletePolicyVersionResponse) => void
  ): Promise<DeletePolicyVersionResponse> {
    return this.request("DeletePolicyVersion", req, cb)
  }

  /**
   * 列出指定CAM用户的访问密钥
   */
  async ListAccessKeys(
    req: ListAccessKeysRequest,
    cb?: (error: string, rep: ListAccessKeysResponse) => void
  ): Promise<ListAccessKeysResponse> {
    return this.request("ListAccessKeys", req, cb)
  }

  /**
   * 删除用户组
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
   * 创建消息接收人接口：仅允许已完成实名认证的用户访问消息接收人接口，并对每个用户限制每天最多请求10次。
   */
  async CreateMessageReceiver(
    req: CreateMessageReceiverRequest,
    cb?: (error: string, rep: CreateMessageReceiverResponse) => void
  ): Promise<CreateMessageReceiverResponse> {
    return this.request("CreateMessageReceiver", req, cb)
  }

  /**
   * 创建角色OIDC配置
   */
  async CreateOIDCConfig(
    req: CreateOIDCConfigRequest,
    cb?: (error: string, rep: CreateOIDCConfigResponse) => void
  ): Promise<CreateOIDCConfigResponse> {
    return this.request("CreateOIDCConfig", req, cb)
  }

  /**
   * 该接口（GetPolicyVersion）用于查询策略版本详情
   */
  async GetPolicyVersion(
    req: GetPolicyVersionRequest,
    cb?: (error: string, rep: GetPolicyVersionResponse) => void
  ): Promise<GetPolicyVersionResponse> {
    return this.request("GetPolicyVersion", req, cb)
  }

  /**
   * 列出用户关联的策略（包括随组关联）
   */
  async ListAttachedUserAllPolicies(
    req: ListAttachedUserAllPoliciesRequest,
    cb?: (error: string, rep: ListAttachedUserAllPoliciesResponse) => void
  ): Promise<ListAttachedUserAllPoliciesResponse> {
    return this.request("ListAttachedUserAllPolicies", req, cb)
  }

  /**
   * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
   */
  async SetDefaultPolicyVersion(
    req: SetDefaultPolicyVersionRequest,
    cb?: (error: string, rep: SetDefaultPolicyVersionResponse) => void
  ): Promise<SetDefaultPolicyVersionResponse> {
    return this.request("SetDefaultPolicyVersion", req, cb)
  }

  /**
   * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
   */
  async DetachGroupPolicy(
    req: DetachGroupPolicyRequest,
    cb?: (error: string, rep: DetachGroupPolicyResponse) => void
  ): Promise<DetachGroupPolicyResponse> {
    return this.request("DetachGroupPolicy", req, cb)
  }

  /**
   * 查询用户安全设置
   */
  async DescribeSafeAuthFlag(
    req?: DescribeSafeAuthFlagRequest,
    cb?: (error: string, rep: DescribeSafeAuthFlagResponse) => void
  ): Promise<DescribeSafeAuthFlagResponse> {
    return this.request("DescribeSafeAuthFlag", req, cb)
  }

  /**
   * 查询安全设置(国际站)
   */
  async DescribeSafeAuthFlagIntl(
    req?: DescribeSafeAuthFlagIntlRequest,
    cb?: (error: string, rep: DescribeSafeAuthFlagIntlResponse) => void
  ): Promise<DescribeSafeAuthFlagIntlResponse> {
    return this.request("DescribeSafeAuthFlagIntl", req, cb)
  }

  /**
   * 修改角色会话时长
   */
  async UpdateRoleSessionDuration(
    req: UpdateRoleSessionDurationRequest,
    cb?: (error: string, rep: UpdateRoleSessionDurationResponse) => void
  ): Promise<UpdateRoleSessionDurationResponse> {
    return this.request("UpdateRoleSessionDuration", req, cb)
  }

  /**
   * 查询用户组列表
   */
  async ListGroups(
    req: ListGroupsRequest,
    cb?: (error: string, rep: ListGroupsResponse) => void
  ): Promise<ListGroupsResponse> {
    return this.request("ListGroups", req, cb)
  }

  /**
   * 获取企业微信子用户列表
   */
  async ListWeChatWorkSubAccounts(
    req: ListWeChatWorkSubAccountsRequest,
    cb?: (error: string, rep: ListWeChatWorkSubAccountsResponse) => void
  ): Promise<ListWeChatWorkSubAccountsResponse> {
    return this.request("ListWeChatWorkSubAccounts", req, cb)
  }

  /**
   * 该接口（ListPolicyVersions）用于获取策略版本列表
   */
  async ListPolicyVersions(
    req: ListPolicyVersionsRequest,
    cb?: (error: string, rep: ListPolicyVersionsResponse) => void
  ): Promise<ListPolicyVersionsResponse> {
    return this.request("ListPolicyVersions", req, cb)
  }

  /**
   * 更新用户组
   */
  async UpdateGroup(
    req: UpdateGroupRequest,
    cb?: (error: string, rep: UpdateGroupResponse) => void
  ): Promise<UpdateGroupResponse> {
    return this.request("UpdateGroup", req, cb)
  }

  /**
   * 本接口（CreatePolicy）可用于创建策略。
   */
  async CreatePolicy(
    req: CreatePolicyRequest,
    cb?: (error: string, rep: CreatePolicyResponse) => void
  ): Promise<CreatePolicyResponse> {
    return this.request("CreatePolicy", req, cb)
  }

  /**
   * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
   */
  async DetachUserPolicy(
    req: DetachUserPolicyRequest,
    cb?: (error: string, rep: DetachUserPolicyResponse) => void
  ): Promise<DetachUserPolicyResponse> {
    return this.request("DetachUserPolicy", req, cb)
  }

  /**
   * 列出用户关联的用户组
   */
  async ListGroupsForUser(
    req: ListGroupsForUserRequest,
    cb?: (error: string, rep: ListGroupsForUserResponse) => void
  ): Promise<ListGroupsForUserResponse> {
    return this.request("ListGroupsForUser", req, cb)
  }

  /**
   * 删除消息接收人
   */
  async DeleteMessageReceiver(
    req: DeleteMessageReceiverRequest,
    cb?: (error: string, rep: DeleteMessageReceiverResponse) => void
  ): Promise<DeleteMessageReceiverResponse> {
    return this.request("DeleteMessageReceiver", req, cb)
  }

  /**
   * 查询SAML身份提供商详情
   */
  async GetSAMLProvider(
    req: GetSAMLProviderRequest,
    cb?: (error: string, rep: GetSAMLProviderResponse) => void
  ): Promise<GetSAMLProviderResponse> {
    return this.request("GetSAMLProvider", req, cb)
  }

  /**
   * 本接口（CreateRole）用于创建角色。
   */
  async CreateRole(
    req: CreateRoleRequest,
    cb?: (error: string, rep: CreateRoleResponse) => void
  ): Promise<CreateRoleResponse> {
    return this.request("CreateRole", req, cb)
  }

  /**
   * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
   */
  async ListAttachedRolePolicies(
    req: ListAttachedRolePoliciesRequest,
    cb?: (error: string, rep: ListAttachedRolePoliciesResponse) => void
  ): Promise<ListAttachedRolePoliciesResponse> {
    return this.request("ListAttachedRolePolicies", req, cb)
  }

  /**
   * 删除SAML身份提供商
   */
  async DeleteSAMLProvider(
    req: DeleteSAMLProviderRequest,
    cb?: (error: string, rep: DeleteSAMLProviderResponse) => void
  ): Promise<DeleteSAMLProviderResponse> {
    return this.request("DeleteSAMLProvider", req, cb)
  }

  /**
   * 本接口（GetPolicy）可用于查询查看策略详情。
   */
  async GetPolicy(
    req: GetPolicyRequest,
    cb?: (error: string, rep: GetPolicyResponse) => void
  ): Promise<GetPolicyResponse> {
    return this.request("GetPolicy", req, cb)
  }

  /**
   * 获取角色权限边界
   */
  async GetRolePermissionBoundary(
    req: GetRolePermissionBoundaryRequest,
    cb?: (error: string, rep: GetRolePermissionBoundaryResponse) => void
  ): Promise<GetRolePermissionBoundaryResponse> {
    return this.request("GetRolePermissionBoundary", req, cb)
  }

  /**
   * 删除用户权限边界
   */
  async DeleteUserPermissionsBoundary(
    req: DeleteUserPermissionsBoundaryRequest,
    cb?: (error: string, rep: DeleteUserPermissionsBoundaryResponse) => void
  ): Promise<DeleteUserPermissionsBoundaryResponse> {
    return this.request("DeleteUserPermissionsBoundary", req, cb)
  }

  /**
   * 查询角色OIDC配置
   */
  async DescribeOIDCConfig(
    req: DescribeOIDCConfigRequest,
    cb?: (error: string, rep: DescribeOIDCConfigResponse) => void
  ): Promise<DescribeOIDCConfigResponse> {
    return this.request("DescribeOIDCConfig", req, cb)
  }

  /**
   * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
   */
  async ListEntitiesForPolicy(
    req: ListEntitiesForPolicyRequest,
    cb?: (error: string, rep: ListEntitiesForPolicyResponse) => void
  ): Promise<ListEntitiesForPolicyResponse> {
    return this.request("ListEntitiesForPolicy", req, cb)
  }

  /**
   * 设置用户权限边界
   */
  async PutUserPermissionsBoundary(
    req: PutUserPermissionsBoundaryRequest,
    cb?: (error: string, rep: PutUserPermissionsBoundaryResponse) => void
  ): Promise<PutUserPermissionsBoundaryResponse> {
    return this.request("PutUserPermissionsBoundary", req, cb)
  }

  /**
   * 创建用户SAML配置
   */
  async CreateUserSAMLConfig(
    req: CreateUserSAMLConfigRequest,
    cb?: (error: string, rep: CreateUserSAMLConfigResponse) => void
  ): Promise<CreateUserSAMLConfigResponse> {
    return this.request("CreateUserSAMLConfig", req, cb)
  }

  /**
   * 用户加入到用户组
   */
  async AddUserToGroup(
    req: AddUserToGroupRequest,
    cb?: (error: string, rep: AddUserToGroupResponse) => void
  ): Promise<AddUserToGroupResponse> {
    return this.request("AddUserToGroup", req, cb)
  }

  /**
   * 本接口（AttachRolePolicy）用于绑定策略到角色。
   */
  async AttachRolePolicy(
    req: AttachRolePolicyRequest,
    cb?: (error: string, rep: AttachRolePolicyResponse) => void
  ): Promise<AttachRolePolicyResponse> {
    return this.request("AttachRolePolicy", req, cb)
  }

  /**
   * 获取子账号安全设置
   */
  async DescribeSafeAuthFlagColl(
    req: DescribeSafeAuthFlagCollRequest,
    cb?: (error: string, rep: DescribeSafeAuthFlagCollResponse) => void
  ): Promise<DescribeSafeAuthFlagCollResponse> {
    return this.request("DescribeSafeAuthFlagColl", req, cb)
  }

  /**
   * 本接口（GetRole）用于获取指定角色的详细信息。
   */
  async GetRole(
    req: GetRoleRequest,
    cb?: (error: string, rep: GetRoleResponse) => void
  ): Promise<GetRoleResponse> {
    return this.request("GetRole", req, cb)
  }

  /**
   * 本接口（ListPolicies）可用于查询策略列表。
   */
  async ListPolicies(
    req: ListPoliciesRequest,
    cb?: (error: string, rep: ListPoliciesResponse) => void
  ): Promise<ListPoliciesResponse> {
    return this.request("ListPolicies", req, cb)
  }

  /**
   * 禁用用户SSO
   */
  async DisableUserSSO(
    req?: DisableUserSSORequest,
    cb?: (error: string, rep: DisableUserSSOResponse) => void
  ): Promise<DisableUserSSOResponse> {
    return this.request("DisableUserSSO", req, cb)
  }
}
