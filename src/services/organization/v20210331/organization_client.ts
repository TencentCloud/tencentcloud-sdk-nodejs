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
  ListTasksRequest,
  ListRoleConfigurationsRequest,
  DeleteSCIMCredentialRequest,
  ListGroupMembersResponse,
  SetExternalSAMLIdentityProviderRequest,
  ListGroupMembersRequest,
  RoleConfigurationProvisionings,
  UpdatePolicyRequest,
  DescribeShareUnitResourcesResponse,
  RoleConfiguration,
  DescribeOrganizationMemberEmailBindResponse,
  EnablePolicyTypeResponse,
  ListTargetsForPolicyResponse,
  DeleteUserRequest,
  RoleProvisioningsTask,
  ProvisionRoleConfigurationRequest,
  ListNonCompliantResourceResponse,
  DeleteUserResponse,
  UpdateZoneResponse,
  DeleteOrganizationRequest,
  TagComplianceDetails,
  RejectJoinShareUnitInvitationRequest,
  DescribeIdentityCenterResponse,
  DescribePolicyConfigResponse,
  GetExternalSAMLIdentityProviderResponse,
  ListOrganizationIdentityRequest,
  DeleteOrganizationMembersRequest,
  CreateOrganizationResponse,
  AddShareUnitResourcesResponse,
  IdentityPolicy,
  AddOrganizationNodeResponse,
  DescribeOrganizationFinancialByMonthResponse,
  ListPermissionPoliciesInRoleConfigurationResponse,
  OrgFinancialByMonth,
  MoveOrganizationNodeMembersResponse,
  AttachPolicyRequest,
  DeleteShareUnitResponse,
  UpdateShareUnitRequest,
  RemoveExternalSAMLIdPCertificateResponse,
  CreateGroupRequest,
  ListUsersResponse,
  DeleteRoleConfigurationRequest,
  CreateOrganizationIdentityRequest,
  ListOrganizationServiceResponse,
  DeleteUserSyncProvisioningResponse,
  ProvisionRoleConfigurationResponse,
  ListUserSyncProvisioningsResponse,
  DeletePolicyResponse,
  DescribeOrganizationResponse,
  ListNonCompliantResourceRequest,
  DisablePolicyTypeResponse,
  DescribeOrganizationMemberPoliciesRequest,
  DescribeEffectivePolicyRequest,
  CreateOrgServiceAssignRequest,
  TaskStatus,
  DeleteOrganizationMembersPolicyResponse,
  DismantleRoleConfigurationResponse,
  ClearExternalSAMLIdentityProviderRequest,
  CreateUserSyncProvisioningResponse,
  ListUserSyncProvisioningsRequest,
  ShareUnitMember,
  UpdateUserSyncProvisioningRequest,
  ListRoleAssignmentsRequest,
  CancelOrganizationMemberAuthAccountRequest,
  GetGroupRequest,
  OrganizationServiceAssign,
  DeleteOrganizationResponse,
  DismantleRoleConfigurationRequest,
  UpdateCustomPolicyForRoleConfigurationResponse,
  DescribeShareUnitMembersResponse,
  MemberMainInfo,
  CreateRoleAssignmentRequest,
  DeleteShareUnitResourcesRequest,
  MemberIdentity,
  RejectJoinShareUnitInvitationResponse,
  UpdateShareUnitResponse,
  ListRoleAssignmentsResponse,
  UpdateUserResponse,
  RemoveUserFromGroupRequest,
  AddPermissionPolicyToRoleConfigurationRequest,
  DescribeOrganizationAuthNodeResponse,
  OrgPermission,
  ListPoliciesResponse,
  BindOrganizationMemberAuthAccountRequest,
  DescribeShareUnitsResponse,
  UpdateOrganizationMemberEmailBindResponse,
  GetZoneSAMLServiceProviderInfoResponse,
  DeleteOrganizationMembersResponse,
  ManagerShareUnit,
  UpdateSCIMCredentialStatusResponse,
  ShareUnitResource,
  DescribeOrganizationMemberAuthIdentitiesRequest,
  CreateOrganizationMemberAuthIdentityResponse,
  DeleteOrgServiceAssignRequest,
  DescribeOrganizationRequest,
  ListPermissionPoliciesInRoleConfigurationRequest,
  ClearExternalSAMLIdentityProviderResponse,
  AddExternalSAMLIdPCertificateResponse,
  CreateOrganizationMemberResponse,
  RoleAssignments,
  MoveOrganizationNodeMembersRequest,
  GetTaskStatusResponse,
  UserSyncProvisioning,
  UpdateOrganizationMemberResponse,
  AuthNode,
  DeleteGroupRequest,
  GetUserResponse,
  DeleteOrganizationNodesRequest,
  EnablePolicyTypeRequest,
  CreatePolicyResponse,
  EffectivePolicy,
  Tag,
  AddOrganizationMemberEmailRequest,
  ListOrganizationIdentityResponse,
  ShareArea,
  DeletePolicyRequest,
  ShareResource,
  GetUserSyncProvisioningResponse,
  GroupInfo,
  GetSCIMSynchronizationStatusResponse,
  GetZoneStatisticsRequest,
  NodeMainInfo,
  RemovePermissionPolicyFromRoleConfigurationRequest,
  InviteOrganizationMemberRequest,
  QuitOrganizationRequest,
  ListTasksResponse,
  AddOrganizationNodeRequest,
  AddShareUnitMembersRequest,
  AddShareUnitRequest,
  SendOrgMemberAccountBindEmailResponse,
  OrgMemberFinancial,
  DescribeOrganizationAuthNodeRequest,
  OpenIdentityCenterRequest,
  GetProvisioningTaskStatusResponse,
  DescribeOrganizationMemberAuthAccountsRequest,
  SCIMCredential,
  GetUserRequest,
  UpdateOrganizationNodeResponse,
  AcceptJoinShareUnitInvitationResponse,
  ListJoinedGroupsForUserResponse,
  DescribeShareAreasRequest,
  DescribeOrganizationMemberAuthAccountsResponse,
  RoleAssignmentInfo,
  OrgNode,
  Tags,
  ListRoleConfigurationProvisioningsRequest,
  GetSCIMSynchronizationStatusRequest,
  OrgIdentity,
  DescribeIdentityCenterRequest,
  DescribeOrganizationMembersResponse,
  ListPoliciesForTargetRequest,
  UserInfo,
  DeleteOrganizationMemberAuthIdentityResponse,
  UpdateOrganizationMemberEmailBindRequest,
  TaskInfo,
  DeleteOrganizationMemberAuthIdentityRequest,
  UpdateUserRequest,
  ListTargetsForPolicyNode,
  ListGroupsRequest,
  UpdateRoleConfigurationRequest,
  DetachPolicyRequest,
  UpdateOrganizationIdentityRequest,
  ListOrgServiceAssignMemberResponse,
  SendOrgMemberAccountBindEmailRequest,
  DeleteRoleAssignmentResponse,
  DisablePolicyTypeRequest,
  DescribeEffectivePolicyResponse,
  CreateOrgServiceAssignResponse,
  AddOrganizationMemberEmailResponse,
  AddShareUnitMembersResponse,
  ListGroupsResponse,
  CreateOrganizationMemberPolicyRequest,
  SAMLIdPCertificate,
  CreateOrganizationRequest,
  ListJoinedGroupsForUserRequest,
  UpdateRoleConfigurationResponse,
  AttachPolicyResponse,
  CreateOrganizationMembersPolicyRequest,
  CheckAccountDeleteRequest,
  OrgProductFinancial,
  GetExternalSAMLIdentityProviderRequest,
  DetachPolicyResponse,
  DeleteRoleConfigurationResponse,
  OrganizationServiceAssignMember,
  AddShareUnitResponse,
  DescribeShareUnitResourcesRequest,
  DescribeOrganizationFinancialByProductResponse,
  RemoveUserFromGroupResponse,
  GetGroupResponse,
  DescribeOrganizationFinancialByProductRequest,
  ListPolicyNode,
  ResourceTagMapping,
  CreateOrganizationMemberPolicyResponse,
  UpdateSCIMSynchronizationStatusRequest,
  AcceptJoinShareUnitInvitationRequest,
  CancelOrganizationMemberAuthAccountResponse,
  GetTaskStatusRequest,
  AddShareUnitResourcesRequest,
  GetRoleConfigurationResponse,
  ShareMember,
  SetExternalSAMLIdentityProviderResponse,
  ListPoliciesForTargetResponse,
  DeleteShareUnitMembersRequest,
  OpenIdentityCenterResponse,
  NotAllowReason,
  ListUsersRequest,
  DescribeOrganizationMemberAuthIdentitiesResponse,
  CreateRoleAssignmentResponse,
  OrgMemberPolicy,
  CreateUserRequest,
  QuitOrganizationResponse,
  GetZoneStatisticsResponse,
  UpdatePolicyResponse,
  DeleteShareUnitMembersResponse,
  UpdateGroupResponse,
  ListExternalSAMLIdPCertificatesRequest,
  DeleteOrganizationIdentityResponse,
  DescribeOrganizationMemberEmailBindRequest,
  RemovePermissionPolicyFromRoleConfigurationResponse,
  ListPoliciesRequest,
  OrgMember,
  OrgMemberAuthAccount,
  CreateOrganizationMemberRequest,
  AuthRelationFile,
  UpdateSCIMSynchronizationStatusResponse,
  CreatePolicyRequest,
  OrgMemberAuthIdentity,
  PolicyDetail,
  DescribePolicyConfigRequest,
  AddExternalSAMLIdPCertificateRequest,
  GetProvisioningTaskStatusRequest,
  CheckAccountDeleteResponse,
  DescribePolicyResponse,
  SAMLServiceProvider,
  UpdateUserStatusResponse,
  UpdateGroupRequest,
  ListExternalSAMLIdPCertificatesResponse,
  DeleteAccountRequest,
  DescribeShareUnitMembersRequest,
  RemoveExternalSAMLIdPCertificateRequest,
  ListPoliciesForTarget,
  GetUserSyncProvisioningRequest,
  CreateOrganizationMemberAuthIdentityRequest,
  DescribeOrganizationFinancialByMonthRequest,
  ListRoleConfigurationProvisioningsResponse,
  DescribeOrganizationFinancialByMemberRequest,
  AddPermissionPolicyToRoleConfigurationResponse,
  ListOrganizationServiceRequest,
  CreateRoleConfigurationRequest,
  UpdateOrganizationMemberRequest,
  CreateOrganizationMembersPolicyResponse,
  GetRoleConfigurationRequest,
  AddUserToGroupRequest,
  CreateOrganizationIdentityResponse,
  DescribeOrganizationMembersRequest,
  GetZoneSAMLServiceProviderInfoRequest,
  ListRoleConfigurationsResponse,
  ListSCIMCredentialsResponse,
  DescribeOrganizationNodesRequest,
  UpdateCustomPolicyForRoleConfigurationRequest,
  InviteOrganizationMemberResponse,
  BindOrganizationMemberAuthAccountResponse,
  ListOrgServiceAssignMemberRequest,
  UpdateOrganizationIdentityResponse,
  DescribeShareAreasResponse,
  CreateUserResponse,
  DeleteShareUnitResourcesResponse,
  DeleteUserSyncProvisioningRequest,
  DescribeOrganizationNodesResponse,
  CreateUserSyncProvisioningRequest,
  DeleteOrganizationMembersPolicyRequest,
  CreateSCIMCredentialRequest,
  DescribePolicyRequest,
  DeleteGroupResponse,
  UpdateUserStatusRequest,
  JoinedGroups,
  CreateRoleConfigurationResponse,
  GroupMembers,
  DeleteRoleAssignmentRequest,
  ListTargetsForPolicyRequest,
  DeleteOrganizationIdentityRequest,
  UpdateOrganizationNodeRequest,
  ZoneStatistics,
  DeleteOrganizationNodesResponse,
  DescribeOrganizationFinancialByMemberResponse,
  AddUserToGroupResponse,
  CreateSCIMCredentialResponse,
  ProductResource,
  DeleteShareUnitRequest,
  DeleteOrgServiceAssignResponse,
  DescribeOrganizationMemberPoliciesResponse,
  DescribeShareUnitsRequest,
  UserProvisioningsTask,
  UserProvisioning,
  ListSCIMCredentialsRequest,
  UpdateSCIMCredentialStatusRequest,
  SAMLIdentityProviderConfiguration,
  RolePolicie,
  UpdateUserSyncProvisioningResponse,
  CreateGroupResponse,
  UpdateZoneRequest,
  DeleteAccountResponse,
  DeleteSCIMCredentialResponse,
} from "./organization_models"

/**
 * organization client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("organization.tencentcloudapi.com", "2021-03-31", clientConfig)
  }

  /**
   * 退出企业组织
   */
  async QuitOrganization(
    req: QuitOrganizationRequest,
    cb?: (error: string, rep: QuitOrganizationResponse) => void
  ): Promise<QuitOrganizationResponse> {
    return this.request("QuitOrganization", req, cb)
  }

  /**
   * 查询用户组中的用户列表
   */
  async ListGroupMembers(
    req: ListGroupMembersRequest,
    cb?: (error: string, rep: ListGroupMembersResponse) => void
  ): Promise<ListGroupMembersResponse> {
    return this.request("ListGroupMembers", req, cb)
  }

  /**
   * 获取组织成员访问身份列表
   */
  async ListOrganizationIdentity(
    req: ListOrganizationIdentityRequest,
    cb?: (error: string, rep: ListOrganizationIdentityResponse) => void
  ): Promise<ListOrganizationIdentityResponse> {
    return this.request("ListOrganizationIdentity", req, cb)
  }

  /**
   * 添加企业组织节点
   */
  async AddOrganizationNode(
    req: AddOrganizationNodeRequest,
    cb?: (error: string, rep: AddOrganizationNodeResponse) => void
  ): Promise<AddOrganizationNodeResponse> {
    return this.request("AddOrganizationNode", req, cb)
  }

  /**
   * 修改绑定成员邮箱
   */
  async UpdateOrganizationMemberEmailBind(
    req: UpdateOrganizationMemberEmailBindRequest,
    cb?: (error: string, rep: UpdateOrganizationMemberEmailBindResponse) => void
  ): Promise<UpdateOrganizationMemberEmailBindResponse> {
    return this.request("UpdateOrganizationMemberEmailBind", req, cb)
  }

  /**
   * 为权限配置移除策略
   */
  async RemovePermissionPolicyFromRoleConfiguration(
    req: RemovePermissionPolicyFromRoleConfigurationRequest,
    cb?: (error: string, rep: RemovePermissionPolicyFromRoleConfigurationResponse) => void
  ): Promise<RemovePermissionPolicyFromRoleConfigurationResponse> {
    return this.request("RemovePermissionPolicyFromRoleConfiguration", req, cb)
  }

  /**
   * 启用/禁用SCIM密钥
   */
  async UpdateSCIMCredentialStatus(
    req: UpdateSCIMCredentialStatusRequest,
    cb?: (error: string, rep: UpdateSCIMCredentialStatusResponse) => void
  ): Promise<UpdateSCIMCredentialStatusResponse> {
    return this.request("UpdateSCIMCredentialStatus", req, cb)
  }

  /**
   * 修改用户信息
   */
  async UpdateUser(
    req: UpdateUserRequest,
    cb?: (error: string, rep: UpdateUserResponse) => void
  ): Promise<UpdateUserResponse> {
    return this.request("UpdateUser", req, cb)
  }

  /**
   * 添加集团服务委派管理员
   */
  async CreateOrgServiceAssign(
    req: CreateOrgServiceAssignRequest,
    cb?: (error: string, rep: CreateOrgServiceAssignResponse) => void
  ): Promise<CreateOrgServiceAssignResponse> {
    return this.request("CreateOrgServiceAssign", req, cb)
  }

  /**
   * 查询目标关联的有效策略
   */
  async DescribeEffectivePolicy(
    req: DescribeEffectivePolicyRequest,
    cb?: (error: string, rep: DescribeEffectivePolicyResponse) => void
  ): Promise<DescribeEffectivePolicyResponse> {
    return this.request("DescribeEffectivePolicy", req, cb)
  }

  /**
   * 查询用户信息
   */
  async GetUser(
    req: GetUserRequest,
    cb?: (error: string, rep: GetUserResponse) => void
  ): Promise<GetUserResponse> {
    return this.request("GetUser", req, cb)
  }

  /**
   * 开通身份中心服务（CIC）
   */
  async OpenIdentityCenter(
    req: OpenIdentityCenterRequest,
    cb?: (error: string, rep: OpenIdentityCenterResponse) => void
  ): Promise<OpenIdentityCenterResponse> {
    return this.request("OpenIdentityCenter", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 查询权限配置信息
   */
  async GetRoleConfiguration(
    req: GetRoleConfigurationRequest,
    cb?: (error: string, rep: GetRoleConfigurationResponse) => void
  ): Promise<GetRoleConfigurationResponse> {
    return this.request("GetRoleConfiguration", req, cb)
  }

  /**
   * 创建组织成员
   */
  async CreateOrganizationMember(
    req: CreateOrganizationMemberRequest,
    cb?: (error: string, rep: CreateOrganizationMemberResponse) => void
  ): Promise<CreateOrganizationMemberResponse> {
    return this.request("CreateOrganizationMember", req, cb)
  }

  /**
   * 查询成员邮箱绑定详细信息
   */
  async DescribeOrganizationMemberEmailBind(
    req: DescribeOrganizationMemberEmailBindRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberEmailBindResponse) => void
  ): Promise<DescribeOrganizationMemberEmailBindResponse> {
    return this.request("DescribeOrganizationMemberEmailBind", req, cb)
  }

  /**
   * 删除共享单元资源
   */
  async DeleteShareUnitResources(
    req: DeleteShareUnitResourcesRequest,
    cb?: (error: string, rep: DeleteShareUnitResourcesResponse) => void
  ): Promise<DeleteShareUnitResourcesResponse> {
    return this.request("DeleteShareUnitResources", req, cb)
  }

  /**
   * 查询异步任务列表
   */
  async ListTasks(
    req: ListTasksRequest,
    cb?: (error: string, rep: ListTasksResponse) => void
  ): Promise<ListTasksResponse> {
    return this.request("ListTasks", req, cb)
  }

  /**
   * 从用户组中移除用户
   */
  async RemoveUserFromGroup(
    req: RemoveUserFromGroupRequest,
    cb?: (error: string, rep: RemoveUserFromGroupResponse) => void
  ): Promise<RemoveUserFromGroupResponse> {
    return this.request("RemoveUserFromGroup", req, cb)
  }

  /**
   * 以产品维度获取组织财务信息
   */
  async DescribeOrganizationFinancialByProduct(
    req: DescribeOrganizationFinancialByProductRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByProductResponse) => void
  ): Promise<DescribeOrganizationFinancialByProductResponse> {
    return this.request("DescribeOrganizationFinancialByProduct", req, cb)
  }

  /**
   * 获取组织节点列表
   */
  async DescribeOrganizationNodes(
    req: DescribeOrganizationNodesRequest,
    cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void
  ): Promise<DescribeOrganizationNodesResponse> {
    return this.request("DescribeOrganizationNodes", req, cb)
  }

  /**
   * 创建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 查询SAML签名证书列表
   */
  async ListExternalSAMLIdPCertificates(
    req: ListExternalSAMLIdPCertificatesRequest,
    cb?: (error: string, rep: ListExternalSAMLIdPCertificatesResponse) => void
  ): Promise<ListExternalSAMLIdPCertificatesResponse> {
    return this.request("ListExternalSAMLIdPCertificates", req, cb)
  }

  /**
   * 移除SAML签名证书
   */
  async RemoveExternalSAMLIdPCertificate(
    req: RemoveExternalSAMLIdPCertificateRequest,
    cb?: (error: string, rep: RemoveExternalSAMLIdPCertificateResponse) => void
  ): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    return this.request("RemoveExternalSAMLIdPCertificate", req, cb)
  }

  /**
   * 成员账号删除检查
   */
  async CheckAccountDelete(
    req: CheckAccountDeleteRequest,
    cb?: (error: string, rep: CheckAccountDeleteResponse) => void
  ): Promise<CheckAccountDeleteResponse> {
    return this.request("CheckAccountDelete", req, cb)
  }

  /**
   * 获取企业组织成员列表
   */
  async DescribeOrganizationMembers(
    req: DescribeOrganizationMembersRequest,
    cb?: (error: string, rep: DescribeOrganizationMembersResponse) => void
  ): Promise<DescribeOrganizationMembersResponse> {
    return this.request("DescribeOrganizationMembers", req, cb)
  }

  /**
   * 在成员账号上授权
   */
  async CreateRoleAssignment(
    req: CreateRoleAssignmentRequest,
    cb?: (error: string, rep: CreateRoleAssignmentResponse) => void
  ): Promise<CreateRoleAssignmentResponse> {
    return this.request("CreateRoleAssignment", req, cb)
  }

  /**
   * 创建权限配置
   */
  async CreateRoleConfiguration(
    req: CreateRoleConfigurationRequest,
    cb?: (error: string, rep: CreateRoleConfigurationResponse) => void
  ): Promise<CreateRoleConfigurationResponse> {
    return this.request("CreateRoleConfiguration", req, cb)
  }

  /**
   * 接受加入共享单元邀请。
   */
  async AcceptJoinShareUnitInvitation(
    req: AcceptJoinShareUnitInvitationRequest,
    cb?: (error: string, rep: AcceptJoinShareUnitInvitationResponse) => void
  ): Promise<AcceptJoinShareUnitInvitationResponse> {
    return this.request("AcceptJoinShareUnitInvitation", req, cb)
  }

  /**
   * 查询用户列表
   */
  async ListUsers(
    req: ListUsersRequest,
    cb?: (error: string, rep: ListUsersResponse) => void
  ): Promise<ListUsersResponse> {
    return this.request("ListUsers", req, cb)
  }

  /**
   * 本接口（DescribePolicy）可用于查询查看策略详情。
   */
  async DescribePolicy(
    req: DescribePolicyRequest,
    cb?: (error: string, rep: DescribePolicyResponse) => void
  ): Promise<DescribePolicyResponse> {
    return this.request("DescribePolicy", req, cb)
  }

  /**
   * 查询SAML身份提供商配置信息
   */
  async GetExternalSAMLIdentityProvider(
    req: GetExternalSAMLIdentityProviderRequest,
    cb?: (error: string, rep: GetExternalSAMLIdentityProviderResponse) => void
  ): Promise<GetExternalSAMLIdentityProviderResponse> {
    return this.request("GetExternalSAMLIdentityProvider", req, cb)
  }

  /**
   * 清空SAML身份提供商配置信息
   */
  async ClearExternalSAMLIdentityProvider(
    req: ClearExternalSAMLIdentityProviderRequest,
    cb?: (error: string, rep: ClearExternalSAMLIdentityProviderResponse) => void
  ): Promise<ClearExternalSAMLIdentityProviderResponse> {
    return this.request("ClearExternalSAMLIdentityProvider", req, cb)
  }

  /**
   * 更新组织身份
   */
  async UpdateOrganizationIdentity(
    req: UpdateOrganizationIdentityRequest,
    cb?: (error: string, rep: UpdateOrganizationIdentityResponse) => void
  ): Promise<UpdateOrganizationIdentityResponse> {
    return this.request("UpdateOrganizationIdentity", req, cb)
  }

  /**
   * 将权限配置部署到成员账号上
   */
  async ProvisionRoleConfiguration(
    req: ProvisionRoleConfigurationRequest,
    cb?: (error: string, rep: ProvisionRoleConfigurationResponse) => void
  ): Promise<ProvisionRoleConfigurationResponse> {
    return this.request("ProvisionRoleConfiguration", req, cb)
  }

  /**
   * 取消组织成员和组织管理员子账号的授权关系
   */
  async CancelOrganizationMemberAuthAccount(
    req: CancelOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void
  ): Promise<CancelOrganizationMemberAuthAccountResponse> {
    return this.request("CancelOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 以成员维度获取组织财务信息
   */
  async DescribeOrganizationFinancialByMember(
    req: DescribeOrganizationFinancialByMemberRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByMemberResponse) => void
  ): Promise<DescribeOrganizationFinancialByMemberResponse> {
    return this.request("DescribeOrganizationFinancialByMember", req, cb)
  }

  /**
   * 查询用户组信息
   */
  async GetGroup(
    req: GetGroupRequest,
    cb?: (error: string, rep: GetGroupResponse) => void
  ): Promise<GetGroupResponse> {
    return this.request("GetGroup", req, cb)
  }

  /**
   * 移除成员账号上的授权
   */
  async DeleteRoleAssignment(
    req: DeleteRoleAssignmentRequest,
    cb?: (error: string, rep: DeleteRoleAssignmentResponse) => void
  ): Promise<DeleteRoleAssignmentResponse> {
    return this.request("DeleteRoleAssignment", req, cb)
  }

  /**
   * 创建组织成员访问策略
   */
  async CreateOrganizationMembersPolicy(
    req: CreateOrganizationMembersPolicyRequest,
    cb?: (error: string, rep: CreateOrganizationMembersPolicyResponse) => void
  ): Promise<CreateOrganizationMembersPolicyResponse> {
    return this.request("CreateOrganizationMembersPolicy", req, cb)
  }

  /**
   * 移动成员到指定企业组织节点
   */
  async MoveOrganizationNodeMembers(
    req: MoveOrganizationNodeMembersRequest,
    cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void
  ): Promise<MoveOrganizationNodeMembersResponse> {
    return this.request("MoveOrganizationNodeMembers", req, cb)
  }

  /**
   * 更新用户空间名
   */
  async UpdateZone(
    req: UpdateZoneRequest,
    cb?: (error: string, rep: UpdateZoneResponse) => void
  ): Promise<UpdateZoneResponse> {
    return this.request("UpdateZone", req, cb)
  }

  /**
   * 添加组织身份
   */
  async CreateOrganizationIdentity(
    req: CreateOrganizationIdentityRequest,
    cb?: (error: string, rep: CreateOrganizationIdentityResponse) => void
  ): Promise<CreateOrganizationIdentityResponse> {
    return this.request("CreateOrganizationIdentity", req, cb)
  }

  /**
   * 添加组织成员邮箱
   */
  async AddOrganizationMemberEmail(
    req: AddOrganizationMemberEmailRequest,
    cb?: (error: string, rep: AddOrganizationMemberEmailResponse) => void
  ): Promise<AddOrganizationMemberEmailResponse> {
    return this.request("AddOrganizationMemberEmail", req, cb)
  }

  /**
   * 删除共享单元成员
   */
  async DeleteShareUnitMembers(
    req: DeleteShareUnitMembersRequest,
    cb?: (error: string, rep: DeleteShareUnitMembersResponse) => void
  ): Promise<DeleteShareUnitMembersResponse> {
    return this.request("DeleteShareUnitMembers", req, cb)
  }

  /**
   * 查询用户加入的用户组
   */
  async ListJoinedGroupsForUser(
    req: ListJoinedGroupsForUserRequest,
    cb?: (error: string, rep: ListJoinedGroupsForUserResponse) => void
  ): Promise<ListJoinedGroupsForUserResponse> {
    return this.request("ListJoinedGroupsForUser", req, cb)
  }

  /**
   * 获取权限配置中的策略列表
   */
  async ListPermissionPoliciesInRoleConfiguration(
    req: ListPermissionPoliciesInRoleConfigurationRequest,
    cb?: (error: string, rep: ListPermissionPoliciesInRoleConfigurationResponse) => void
  ): Promise<ListPermissionPoliciesInRoleConfigurationResponse> {
    return this.request("ListPermissionPoliciesInRoleConfiguration", req, cb)
  }

  /**
   * 创建共享单元。
   */
  async AddShareUnit(
    req: AddShareUnitRequest,
    cb?: (error: string, rep: AddShareUnitResponse) => void
  ): Promise<AddShareUnitResponse> {
    return this.request("AddShareUnit", req, cb)
  }

  /**
   * 获取组织成员被绑定授权关系的子账号列表
   */
  async DescribeOrganizationMemberAuthAccounts(
    req: DescribeOrganizationMemberAuthAccountsRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void
  ): Promise<DescribeOrganizationMemberAuthAccountsResponse> {
    return this.request("DescribeOrganizationMemberAuthAccounts", req, cb)
  }

  /**
   * 查询权限配置部署列表
   */
  async ListRoleConfigurationProvisionings(
    req: ListRoleConfigurationProvisioningsRequest,
    cb?: (error: string, rep: ListRoleConfigurationProvisioningsResponse) => void
  ): Promise<ListRoleConfigurationProvisioningsResponse> {
    return this.request("ListRoleConfigurationProvisionings", req, cb)
  }

  /**
   * 添加共享单元成员
   */
  async AddShareUnitMembers(
    req: AddShareUnitMembersRequest,
    cb?: (error: string, rep: AddShareUnitMembersResponse) => void
  ): Promise<AddShareUnitMembersResponse> {
    return this.request("AddShareUnitMembers", req, cb)
  }

  /**
   * 本接口（DescribePolicyConfig）可用于查询企业组织策略配置
   */
  async DescribePolicyConfig(
    req: DescribePolicyConfigRequest,
    cb?: (error: string, rep: DescribePolicyConfigResponse) => void
  ): Promise<DescribePolicyConfigResponse> {
    return this.request("DescribePolicyConfig", req, cb)
  }

  /**
   * 编辑策略
   */
  async UpdatePolicy(
    req: UpdatePolicyRequest,
    cb?: (error: string, rep: UpdatePolicyResponse) => void
  ): Promise<UpdatePolicyResponse> {
    return this.request("UpdatePolicy", req, cb)
  }

  /**
   * 获取共享单元列表。
   */
  async DescribeShareUnits(
    req: DescribeShareUnitsRequest,
    cb?: (error: string, rep: DescribeShareUnitsResponse) => void
  ): Promise<DescribeShareUnitsResponse> {
    return this.request("DescribeShareUnits", req, cb)
  }

  /**
   * 查询CAM用户同步列表
   */
  async ListUserSyncProvisionings(
    req: ListUserSyncProvisioningsRequest,
    cb?: (error: string, rep: ListUserSyncProvisioningsResponse) => void
  ): Promise<ListUserSyncProvisioningsResponse> {
    return this.request("ListUserSyncProvisionings", req, cb)
  }

  /**
   * 修改用户状态
   */
  async UpdateUserStatus(
    req: UpdateUserStatusRequest,
    cb?: (error: string, rep: UpdateUserStatusResponse) => void
  ): Promise<UpdateUserStatusResponse> {
    return this.request("UpdateUserStatus", req, cb)
  }

  /**
   * 禁用策略类型
   */
  async DisablePolicyType(
    req: DisablePolicyTypeRequest,
    cb?: (error: string, rep: DisablePolicyTypeResponse) => void
  ): Promise<DisablePolicyTypeResponse> {
    return this.request("DisablePolicyType", req, cb)
  }

  /**
   * 创建子用户同步任务
   */
  async CreateUserSyncProvisioning(
    req: CreateUserSyncProvisioningRequest,
    cb?: (error: string, rep: CreateUserSyncProvisioningResponse) => void
  ): Promise<CreateUserSyncProvisioningResponse> {
    return this.request("CreateUserSyncProvisioning", req, cb)
  }

  /**
   * 为权限配置添加策略
   */
  async AddPermissionPolicyToRoleConfiguration(
    req: AddPermissionPolicyToRoleConfigurationRequest,
    cb?: (error: string, rep: AddPermissionPolicyToRoleConfigurationResponse) => void
  ): Promise<AddPermissionPolicyToRoleConfigurationResponse> {
    return this.request("AddPermissionPolicyToRoleConfiguration", req, cb)
  }

  /**
   * 删除组织成员访问策略
   */
  async DeleteOrganizationMembersPolicy(
    req: DeleteOrganizationMembersPolicyRequest,
    cb?: (error: string, rep: DeleteOrganizationMembersPolicyResponse) => void
  ): Promise<DeleteOrganizationMembersPolicyResponse> {
    return this.request("DeleteOrganizationMembersPolicy", req, cb)
  }

  /**
   * 删除策略
   */
  async DeletePolicy(
    req: DeletePolicyRequest,
    cb?: (error: string, rep: DeletePolicyResponse) => void
  ): Promise<DeletePolicyResponse> {
    return this.request("DeletePolicy", req, cb)
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
   * 获取共享单元成员列表。
   */
  async DescribeShareUnitMembers(
    req: DescribeShareUnitMembersRequest,
    cb?: (error: string, rep: DescribeShareUnitMembersResponse) => void
  ): Promise<DescribeShareUnitMembersResponse> {
    return this.request("DescribeShareUnitMembers", req, cb)
  }

  /**
   * 解除权限配置在成员账号上的部署
   */
  async DismantleRoleConfiguration(
    req: DismantleRoleConfigurationRequest,
    cb?: (error: string, rep: DismantleRoleConfigurationResponse) => void
  ): Promise<DismantleRoleConfigurationResponse> {
    return this.request("DismantleRoleConfiguration", req, cb)
  }

  /**
   * 删除共享单元。
   */
  async DeleteShareUnit(
    req: DeleteShareUnitRequest,
    cb?: (error: string, rep: DeleteShareUnitResponse) => void
  ): Promise<DeleteShareUnitResponse> {
    return this.request("DeleteShareUnit", req, cb)
  }

  /**
   * 从组织中移除成员账号，不会删除账号。
   */
  async DeleteOrganizationMembers(
    req: DeleteOrganizationMembersRequest,
    cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void
  ): Promise<DeleteOrganizationMembersResponse> {
    return this.request("DeleteOrganizationMembers", req, cb)
  }

  /**
   * 获取集团服务委派管理员列表
   */
  async ListOrgServiceAssignMember(
    req: ListOrgServiceAssignMemberRequest,
    cb?: (error: string, rep: ListOrgServiceAssignMemberResponse) => void
  ): Promise<ListOrgServiceAssignMemberResponse> {
    return this.request("ListOrgServiceAssignMember", req, cb)
  }

  /**
   * 拒绝加入共享单元邀请。
   */
  async RejectJoinShareUnitInvitation(
    req: RejectJoinShareUnitInvitationRequest,
    cb?: (error: string, rep: RejectJoinShareUnitInvitationResponse) => void
  ): Promise<RejectJoinShareUnitInvitationResponse> {
    return this.request("RejectJoinShareUnitInvitation", req, cb)
  }

  /**
   * 获取成员标签检测不合规资源列表
   */
  async ListNonCompliantResource(
    req: ListNonCompliantResourceRequest,
    cb?: (error: string, rep: ListNonCompliantResourceResponse) => void
  ): Promise<ListNonCompliantResourceResponse> {
    return this.request("ListNonCompliantResource", req, cb)
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
   * 获取SCIM同步状态
   */
  async GetSCIMSynchronizationStatus(
    req: GetSCIMSynchronizationStatusRequest,
    cb?: (error: string, rep: GetSCIMSynchronizationStatusResponse) => void
  ): Promise<GetSCIMSynchronizationStatusResponse> {
    return this.request("GetSCIMSynchronizationStatus", req, cb)
  }

  /**
   * 配置SAML身份提供商信息
   */
  async SetExternalSAMLIdentityProvider(
    req: SetExternalSAMLIdentityProviderRequest,
    cb?: (error: string, rep: SetExternalSAMLIdentityProviderResponse) => void
  ): Promise<SetExternalSAMLIdentityProviderResponse> {
    return this.request("SetExternalSAMLIdentityProvider", req, cb)
  }

  /**
   * 删除企业组织
   */
  async DeleteOrganization(
    req?: DeleteOrganizationRequest,
    cb?: (error: string, rep: DeleteOrganizationResponse) => void
  ): Promise<DeleteOrganizationResponse> {
    return this.request("DeleteOrganization", req, cb)
  }

  /**
   * 本接口（ListPoliciesForTarget）查询目标关联的策略列表
   */
  async ListPoliciesForTarget(
    req: ListPoliciesForTargetRequest,
    cb?: (error: string, rep: ListPoliciesForTargetResponse) => void
  ): Promise<ListPoliciesForTargetResponse> {
    return this.request("ListPoliciesForTarget", req, cb)
  }

  /**
   * 删除SCIM密钥
   */
  async DeleteSCIMCredential(
    req: DeleteSCIMCredentialRequest,
    cb?: (error: string, rep: DeleteSCIMCredentialResponse) => void
  ): Promise<DeleteSCIMCredentialResponse> {
    return this.request("DeleteSCIMCredential", req, cb)
  }

  /**
   * 创建子用户同步任务
   */
  async UpdateUserSyncProvisioning(
    req: UpdateUserSyncProvisioningRequest,
    cb?: (error: string, rep: UpdateUserSyncProvisioningResponse) => void
  ): Promise<UpdateUserSyncProvisioningResponse> {
    return this.request("UpdateUserSyncProvisioning", req, cb)
  }

  /**
   * 查询CAM用户同步
   */
  async GetUserSyncProvisioning(
    req: GetUserSyncProvisioningRequest,
    cb?: (error: string, rep: GetUserSyncProvisioningResponse) => void
  ): Promise<GetUserSyncProvisioningResponse> {
    return this.request("GetUserSyncProvisioning", req, cb)
  }

  /**
   * 获取企业组织信息
   */
  async DescribeOrganization(
    req: DescribeOrganizationRequest,
    cb?: (error: string, rep: DescribeOrganizationResponse) => void
  ): Promise<DescribeOrganizationResponse> {
    return this.request("DescribeOrganization", req, cb)
  }

  /**
   * 启用/禁用用户SCIM同步
   */
  async UpdateSCIMSynchronizationStatus(
    req: UpdateSCIMSynchronizationStatusRequest,
    cb?: (error: string, rep: UpdateSCIMSynchronizationStatusResponse) => void
  ): Promise<UpdateSCIMSynchronizationStatusResponse> {
    return this.request("UpdateSCIMSynchronizationStatus", req, cb)
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
   * 获取共享单元资源列表。
   */
  async DescribeShareUnitResources(
    req: DescribeShareUnitResourcesRequest,
    cb?: (error: string, rep: DescribeShareUnitResourcesResponse) => void
  ): Promise<DescribeShareUnitResourcesResponse> {
    return this.request("DescribeShareUnitResources", req, cb)
  }

  /**
   * 绑定组织成员和组织管理员子账号的授权关系
   */
  async BindOrganizationMemberAuthAccount(
    req: BindOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void
  ): Promise<BindOrganizationMemberAuthAccountResponse> {
    return this.request("BindOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 修改用户组信息
   */
  async UpdateGroup(
    req: UpdateGroupRequest,
    cb?: (error: string, rep: UpdateGroupResponse) => void
  ): Promise<UpdateGroupResponse> {
    return this.request("UpdateGroup", req, cb)
  }

  /**
   * 创建一个特殊类型的策略，您可以关联到企业组织Root节点、企业部门节点或者企业的成员账号。
   */
  async CreatePolicy(
    req: CreatePolicyRequest,
    cb?: (error: string, rep: CreatePolicyResponse) => void
  ): Promise<CreatePolicyResponse> {
    return this.request("CreatePolicy", req, cb)
  }

  /**
   * 查询用户同步异步任务的状态
   */
  async GetProvisioningTaskStatus(
    req: GetProvisioningTaskStatusRequest,
    cb?: (error: string, rep: GetProvisioningTaskStatusResponse) => void
  ): Promise<GetProvisioningTaskStatusResponse> {
    return this.request("GetProvisioningTaskStatus", req, cb)
  }

  /**
   * 更新企业组织节点
   */
  async UpdateOrganizationNode(
    req: UpdateOrganizationNodeRequest,
    cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void
  ): Promise<UpdateOrganizationNodeResponse> {
    return this.request("UpdateOrganizationNode", req, cb)
  }

  /**
   * 更新共享单元。
   */
  async UpdateShareUnit(
    req: UpdateShareUnitRequest,
    cb?: (error: string, rep: UpdateShareUnitResponse) => void
  ): Promise<UpdateShareUnitResponse> {
    return this.request("UpdateShareUnit", req, cb)
  }

  /**
   * 更新组织成员信息
   */
  async UpdateOrganizationMember(
    req: UpdateOrganizationMemberRequest,
    cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void
  ): Promise<UpdateOrganizationMemberResponse> {
    return this.request("UpdateOrganizationMember", req, cb)
  }

  /**
   * 获取已设置管理员的互信主体关系列表
   */
  async DescribeOrganizationAuthNode(
    req: DescribeOrganizationAuthNodeRequest,
    cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void
  ): Promise<DescribeOrganizationAuthNodeResponse> {
    return this.request("DescribeOrganizationAuthNode", req, cb)
  }

  /**
   * 获取集团账号身份中心服务信息
   */
  async DescribeIdentityCenter(
    req?: DescribeIdentityCenterRequest,
    cb?: (error: string, rep: DescribeIdentityCenterResponse) => void
  ): Promise<DescribeIdentityCenterResponse> {
    return this.request("DescribeIdentityCenter", req, cb)
  }

  /**
   * 创建SCIM密钥
   */
  async CreateSCIMCredential(
    req: CreateSCIMCredentialRequest,
    cb?: (error: string, rep: CreateSCIMCredentialResponse) => void
  ): Promise<CreateSCIMCredentialResponse> {
    return this.request("CreateSCIMCredential", req, cb)
  }

  /**
   * 获取组织成员访问授权列表
   */
  async DescribeOrganizationMemberAuthIdentities(
    req: DescribeOrganizationMemberAuthIdentitiesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void
  ): Promise<DescribeOrganizationMemberAuthIdentitiesResponse> {
    return this.request("DescribeOrganizationMemberAuthIdentities", req, cb)
  }

  /**
   * 重新发送成员绑定邮箱激活邮件
   */
  async SendOrgMemberAccountBindEmail(
    req: SendOrgMemberAccountBindEmailRequest,
    cb?: (error: string, rep: SendOrgMemberAccountBindEmailResponse) => void
  ): Promise<SendOrgMemberAccountBindEmailResponse> {
    return this.request("SendOrgMemberAccountBindEmail", req, cb)
  }

  /**
   * 查询空间的统计信息
   */
  async GetZoneStatistics(
    req: GetZoneStatisticsRequest,
    cb?: (error: string, rep: GetZoneStatisticsResponse) => void
  ): Promise<GetZoneStatisticsResponse> {
    return this.request("GetZoneStatistics", req, cb)
  }

  /**
   * 解绑策略
   */
  async DetachPolicy(
    req: DetachPolicyRequest,
    cb?: (error: string, rep: DetachPolicyResponse) => void
  ): Promise<DetachPolicyResponse> {
    return this.request("DetachPolicy", req, cb)
  }

  /**
   * 查询用户SCIM密钥列表
   */
  async ListSCIMCredentials(
    req: ListSCIMCredentialsRequest,
    cb?: (error: string, rep: ListSCIMCredentialsResponse) => void
  ): Promise<ListSCIMCredentialsResponse> {
    return this.request("ListSCIMCredentials", req, cb)
  }

  /**
   * 添加组织成员访问授权
   */
  async CreateOrganizationMemberAuthIdentity(
    req: CreateOrganizationMemberAuthIdentityRequest,
    cb?: (error: string, rep: CreateOrganizationMemberAuthIdentityResponse) => void
  ): Promise<CreateOrganizationMemberAuthIdentityResponse> {
    return this.request("CreateOrganizationMemberAuthIdentity", req, cb)
  }

  /**
   * 以月维度获取组织财务信息趋势
   */
  async DescribeOrganizationFinancialByMonth(
    req: DescribeOrganizationFinancialByMonthRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByMonthResponse) => void
  ): Promise<DescribeOrganizationFinancialByMonthResponse> {
    return this.request("DescribeOrganizationFinancialByMonth", req, cb)
  }

  /**
   * 删除成员账号
   */
  async DeleteAccount(
    req: DeleteAccountRequest,
    cb?: (error: string, rep: DeleteAccountResponse) => void
  ): Promise<DeleteAccountResponse> {
    return this.request("DeleteAccount", req, cb)
  }

  /**
   * 批量删除企业组织节点
   */
  async DeleteOrganizationNodes(
    req: DeleteOrganizationNodesRequest,
    cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void
  ): Promise<DeleteOrganizationNodesResponse> {
    return this.request("DeleteOrganizationNodes", req, cb)
  }

  /**
   * 查询授权列表
   */
  async ListRoleAssignments(
    req: ListRoleAssignmentsRequest,
    cb?: (error: string, rep: ListRoleAssignmentsResponse) => void
  ): Promise<ListRoleAssignmentsResponse> {
    return this.request("ListRoleAssignments", req, cb)
  }

  /**
   * 获取组织成员的授权策略列表
   */
  async DescribeOrganizationMemberPolicies(
    req: DescribeOrganizationMemberPoliciesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void
  ): Promise<DescribeOrganizationMemberPoliciesResponse> {
    return this.request("DescribeOrganizationMemberPolicies", req, cb)
  }

  /**
   * 删除子用户同步任务
   */
  async DeleteUserSyncProvisioning(
    req: DeleteUserSyncProvisioningRequest,
    cb?: (error: string, rep: DeleteUserSyncProvisioningResponse) => void
  ): Promise<DeleteUserSyncProvisioningResponse> {
    return this.request("DeleteUserSyncProvisioning", req, cb)
  }

  /**
   * 修改权限配置信息
   */
  async UpdateRoleConfiguration(
    req: UpdateRoleConfigurationRequest,
    cb?: (error: string, rep: UpdateRoleConfigurationResponse) => void
  ): Promise<UpdateRoleConfigurationResponse> {
    return this.request("UpdateRoleConfiguration", req, cb)
  }

  /**
   * 查询权限配置列表
   */
  async ListRoleConfigurations(
    req: ListRoleConfigurationsRequest,
    cb?: (error: string, rep: ListRoleConfigurationsResponse) => void
  ): Promise<ListRoleConfigurationsResponse> {
    return this.request("ListRoleConfigurations", req, cb)
  }

  /**
   * 邀请组织成员
   */
  async InviteOrganizationMember(
    req: InviteOrganizationMemberRequest,
    cb?: (error: string, rep: InviteOrganizationMemberResponse) => void
  ): Promise<InviteOrganizationMemberResponse> {
    return this.request("InviteOrganizationMember", req, cb)
  }

  /**
   * 添加共享单元资源
   */
  async AddShareUnitResources(
    req: AddShareUnitResourcesRequest,
    cb?: (error: string, rep: AddShareUnitResourcesResponse) => void
  ): Promise<AddShareUnitResourcesResponse> {
    return this.request("AddShareUnitResources", req, cb)
  }

  /**
   * 绑定策略
   */
  async AttachPolicy(
    req: AttachPolicyRequest,
    cb?: (error: string, rep: AttachPolicyResponse) => void
  ): Promise<AttachPolicyResponse> {
    return this.request("AttachPolicy", req, cb)
  }

  /**
   * 获取可共享地域列表
   */
  async DescribeShareAreas(
    req: DescribeShareAreasRequest,
    cb?: (error: string, rep: DescribeShareAreasResponse) => void
  ): Promise<DescribeShareAreasResponse> {
    return this.request("DescribeShareAreas", req, cb)
  }

  /**
   * 为用户组添加用户
   */
  async AddUserToGroup(
    req: AddUserToGroupRequest,
    cb?: (error: string, rep: AddUserToGroupResponse) => void
  ): Promise<AddUserToGroupResponse> {
    return this.request("AddUserToGroup", req, cb)
  }

  /**
   * 删除权限配置信息
   */
  async DeleteRoleConfiguration(
    req: DeleteRoleConfigurationRequest,
    cb?: (error: string, rep: DeleteRoleConfigurationResponse) => void
  ): Promise<DeleteRoleConfigurationResponse> {
    return this.request("DeleteRoleConfiguration", req, cb)
  }

  /**
   * 创建企业组织
   */
  async CreateOrganization(
    req?: CreateOrganizationRequest,
    cb?: (error: string, rep: CreateOrganizationResponse) => void
  ): Promise<CreateOrganizationResponse> {
    return this.request("CreateOrganization", req, cb)
  }

  /**
   * 添加SAML签名证书
   */
  async AddExternalSAMLIdPCertificate(
    req: AddExternalSAMLIdPCertificateRequest,
    cb?: (error: string, rep: AddExternalSAMLIdPCertificateResponse) => void
  ): Promise<AddExternalSAMLIdPCertificateResponse> {
    return this.request("AddExternalSAMLIdPCertificate", req, cb)
  }

  /**
   * 删除集团服务委派管理员
   */
  async DeleteOrgServiceAssign(
    req: DeleteOrgServiceAssignRequest,
    cb?: (error: string, rep: DeleteOrgServiceAssignResponse) => void
  ): Promise<DeleteOrgServiceAssignResponse> {
    return this.request("DeleteOrgServiceAssign", req, cb)
  }

  /**
   * 删除组织身份
   */
  async DeleteOrganizationIdentity(
    req: DeleteOrganizationIdentityRequest,
    cb?: (error: string, rep: DeleteOrganizationIdentityResponse) => void
  ): Promise<DeleteOrganizationIdentityResponse> {
    return this.request("DeleteOrganizationIdentity", req, cb)
  }

  /**
   * 启用策略类型
   */
  async EnablePolicyType(
    req: EnablePolicyTypeRequest,
    cb?: (error: string, rep: EnablePolicyTypeResponse) => void
  ): Promise<EnablePolicyTypeResponse> {
    return this.request("EnablePolicyType", req, cb)
  }

  /**
   * 查询SAML服务提供商配置信息
   */
  async GetZoneSAMLServiceProviderInfo(
    req: GetZoneSAMLServiceProviderInfoRequest,
    cb?: (error: string, rep: GetZoneSAMLServiceProviderInfoResponse) => void
  ): Promise<GetZoneSAMLServiceProviderInfoResponse> {
    return this.request("GetZoneSAMLServiceProviderInfo", req, cb)
  }

  /**
   * 本接口（ListTargetsForPolicy）查询某个指定策略关联的目标列表
   */
  async ListTargetsForPolicy(
    req: ListTargetsForPolicyRequest,
    cb?: (error: string, rep: ListTargetsForPolicyResponse) => void
  ): Promise<ListTargetsForPolicyResponse> {
    return this.request("ListTargetsForPolicy", req, cb)
  }

  /**
   * 本接口（ListPolicies）可用于查询查看策略列表数据
   */
  async ListPolicies(
    req: ListPoliciesRequest,
    cb?: (error: string, rep: ListPoliciesResponse) => void
  ): Promise<ListPoliciesResponse> {
    return this.request("ListPolicies", req, cb)
  }

  /**
   * 查询异步任务的状态
   */
  async GetTaskStatus(
    req: GetTaskStatusRequest,
    cb?: (error: string, rep: GetTaskStatusResponse) => void
  ): Promise<GetTaskStatusResponse> {
    return this.request("GetTaskStatus", req, cb)
  }

  /**
   * 创建组织成员访问授权策略
   */
  async CreateOrganizationMemberPolicy(
    req: CreateOrganizationMemberPolicyRequest,
    cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void
  ): Promise<CreateOrganizationMemberPolicyResponse> {
    return this.request("CreateOrganizationMemberPolicy", req, cb)
  }

  /**
   * 获取集团服务设置列表
   */
  async ListOrganizationService(
    req: ListOrganizationServiceRequest,
    cb?: (error: string, rep: ListOrganizationServiceResponse) => void
  ): Promise<ListOrganizationServiceResponse> {
    return this.request("ListOrganizationService", req, cb)
  }

  /**
   * 为权限配置修改自定义策略
   */
  async UpdateCustomPolicyForRoleConfiguration(
    req: UpdateCustomPolicyForRoleConfigurationRequest,
    cb?: (error: string, rep: UpdateCustomPolicyForRoleConfigurationResponse) => void
  ): Promise<UpdateCustomPolicyForRoleConfigurationResponse> {
    return this.request("UpdateCustomPolicyForRoleConfiguration", req, cb)
  }

  /**
   * 删除组织成员访问授权
   */
  async DeleteOrganizationMemberAuthIdentity(
    req: DeleteOrganizationMemberAuthIdentityRequest,
    cb?: (error: string, rep: DeleteOrganizationMemberAuthIdentityResponse) => void
  ): Promise<DeleteOrganizationMemberAuthIdentityResponse> {
    return this.request("DeleteOrganizationMemberAuthIdentity", req, cb)
  }
}
