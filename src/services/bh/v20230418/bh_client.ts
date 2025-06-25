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
  ResetDeviceAccountPasswordResponse,
  DescribeOperationTaskResponse,
  AccessInfo,
  ModifyResourceResponse,
  BindDeviceAccountPasswordRequest,
  DeleteAclsRequest,
  ModifyOperationTaskResponse,
  SearchSessionRequest,
  ModifyOperationTaskRequest,
  DescribeDeviceGroupsResponse,
  DeleteCmdTemplatesResponse,
  DeleteDevicesResponse,
  ChangePwdTaskInfo,
  CreateChangePwdTaskResponse,
  DescribeLoginEventRequest,
  DeviceAccount,
  BindDeviceAccountPasswordResponse,
  DescribeChangePwdTaskDetailRequest,
  ResetDeviceAccountPasswordRequest,
  DescribeAccessWhiteListRulesResponse,
  AddUserGroupMembersRequest,
  CreateResourceRequest,
  DescribeDevicesResponse,
  ResetUserResponse,
  CreateAccessWhiteListRuleResponse,
  DeleteUserGroupMembersRequest,
  RunChangePwdTaskRequest,
  DescribeChangePwdTaskDetailResponse,
  DeleteUserGroupsResponse,
  ModifyDeviceRequest,
  SearchFileRequest,
  CreateAccessWhiteListRuleRequest,
  AccessWhiteListRule,
  SearchFileBySidResult,
  SearchCommandRequest,
  ImportExternalDeviceRequest,
  DescribeResourcesRequest,
  BindDeviceResourceResponse,
  ResetDeviceAccountPrivateKeyResponse,
  SetLDAPSyncFlagResponse,
  DeleteUserGroupMembersResponse,
  CmdTemplate,
  SearchCommandResult,
  DescribeLDAPUnitSetRequest,
  SearchSubtaskResultByIdResponse,
  ModifyOAuthSettingRequest,
  CreateUserGroupRequest,
  SearchFileTypeFilter,
  ReplaySessionRequest,
  BindDeviceAccountPrivateKeyResponse,
  IOAUserGroup,
  SearchCommandBySidRequest,
  CreateDeviceGroupResponse,
  DescribeUserGroupMembersRequest,
  OperationEvent,
  Department,
  AccessDevicesRequest,
  DescribeAccessWhiteListRulesRequest,
  ModifyUserGroupResponse,
  CreateUserResponse,
  DeleteOperationTasksRequest,
  AppAsset,
  DescribeAssetSyncStatusResponse,
  ModifyChangePwdTaskResponse,
  DescribeUserGroupsRequest,
  CreateAclRequest,
  DescribeLoginEventResponse,
  SearchSubtaskResultByIdRequest,
  CreateDeviceGroupRequest,
  RunChangePwdTaskDetail,
  RunOperationTaskResponse,
  DeleteDeviceGroupMembersRequest,
  OperationTask,
  SearchCommandResponse,
  DescribeChangePwdTaskResponse,
  CreateOperationTaskResponse,
  CreateAclResponse,
  DescribeAclsResponse,
  ModifyUserRequest,
  CreateCmdTemplateResponse,
  DeleteOperationTasksResponse,
  ModifyAclRequest,
  SearchAuditLogRequest,
  CreateResourceResponse,
  ModifyResourceRequest,
  DeleteUsersResponse,
  SearchCommandBySidResponse,
  AssetSyncStatus,
  DescribeResourcesResponse,
  DescribeUsersRequest,
  DeployResourceRequest,
  SearchSessionResponse,
  CreateCmdTemplateRequest,
  ModifyCmdTemplateResponse,
  ResetDeviceAccountPrivateKeyRequest,
  DescribeDeviceGroupsRequest,
  CreateAssetSyncJobResponse,
  BindDeviceAccountPrivateKeyRequest,
  ModifyLDAPSettingRequest,
  ModifyChangePwdTaskRequest,
  CreateAssetSyncJobRequest,
  Group,
  UnlockUserResponse,
  DescribeAssetSyncStatusRequest,
  Clb,
  AccessDevicesResponse,
  DeleteUsersRequest,
  DeleteDeviceAccountsRequest,
  SearchTaskResultRequest,
  TaskResult,
  DeleteDeviceGroupMembersResponse,
  ModifyDeviceGroupResponse,
  ModifyOAuthSettingResponse,
  DescribeOperationTaskRequest,
  DescribeLDAPUnitSetResponse,
  DescribeUserGroupMembersResponse,
  ImportExternalDeviceResponse,
  SearchSessionCommandResponse,
  DeleteAccessWhiteListRulesRequest,
  CheckLDAPConnectionRequest,
  User,
  ResetUserRequest,
  Device,
  DeleteUserGroupsRequest,
  CreateDeviceAccountResponse,
  ExternalDevice,
  ModifyDeviceGroupRequest,
  Domain,
  Filter,
  DescribeUsersResponse,
  DeployResourceResponse,
  CreateUserRequest,
  DescribeChangePwdTaskRequest,
  SearchFileBySidResponse,
  DescribeOperationEventRequest,
  SetLDAPSyncFlagRequest,
  ModifyDeviceResponse,
  ModifyUserResponse,
  ChangePwdTaskDetail,
  ModifyCmdTemplateRequest,
  CreateOperationTaskRequest,
  DescribeCmdTemplatesResponse,
  UnlockUserRequest,
  CreateDeviceAccountRequest,
  AddDeviceGroupMembersResponse,
  DeleteCmdTemplatesRequest,
  DescribeUserGroupsResponse,
  AddUserGroupMembersResponse,
  DescribeDeviceAccountsRequest,
  DeleteChangePwdTaskRequest,
  ModifyUserGroupRequest,
  CreateChangePwdTaskRequest,
  SearchTaskResultResponse,
  LoginEvent,
  DeleteChangePwdTaskResponse,
  CreateUserGroupResponse,
  DeleteDevicesRequest,
  DescribeDeviceAccountsResponse,
  DescribeDomainsRequest,
  DescribeCmdTemplatesRequest,
  ModifyAclResponse,
  DescribeAclsRequest,
  DeleteDeviceGroupsRequest,
  DescribeDeviceGroupMembersResponse,
  SearchAuditLogResponse,
  SessionResult,
  Resource,
  RunChangePwdTaskResponse,
  BindDeviceResourceRequest,
  CheckLDAPConnectionResponse,
  RunOperationTaskRequest,
  Acl,
  TagFilter,
  DescribeDevicesRequest,
  DepartmentManagerUser,
  ACTemplate,
  SearchSessionCommandRequest,
  SearchFileBySidRequest,
  DescribeOperationEventResponse,
  DescribeDomainsResponse,
  ModifyLDAPSettingResponse,
  SearchFileResult,
  ReplaySessionResponse,
  DeleteAclsResponse,
  DescribeDeviceGroupMembersRequest,
  DeleteDeviceGroupsResponse,
  AddDeviceGroupMembersRequest,
  DeleteDeviceAccountsResponse,
  DeleteAccessWhiteListRulesResponse,
  SearchFileResponse,
} from "./bh_models"

/**
 * bh client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bh.tencentcloudapi.com", "2023-04-18", clientConfig)
  }

  /**
   * 查询操作日志
   */
  async DescribeOperationEvent(
    req: DescribeOperationEventRequest,
    cb?: (error: string, rep: DescribeOperationEventResponse) => void
  ): Promise<DescribeOperationEventResponse> {
    return this.request("DescribeOperationEvent", req, cb)
  }

  /**
   * 查询资产同步状态
   */
  async DescribeAssetSyncStatus(
    req: DescribeAssetSyncStatusRequest,
    cb?: (error: string, rep: DescribeAssetSyncStatusResponse) => void
  ): Promise<DescribeAssetSyncStatusResponse> {
    return this.request("DescribeAssetSyncStatus", req, cb)
  }

  /**
   * 设置OAuth认证参数
   */
  async ModifyOAuthSetting(
    req: ModifyOAuthSettingRequest,
    cb?: (error: string, rep: ModifyOAuthSettingResponse) => void
  ): Promise<ModifyOAuthSettingResponse> {
    return this.request("ModifyOAuthSetting", req, cb)
  }

  /**
   * 删除访问白名单规则
   */
  async DeleteAccessWhiteListRules(
    req: DeleteAccessWhiteListRulesRequest,
    cb?: (error: string, rep: DeleteAccessWhiteListRulesResponse) => void
  ): Promise<DeleteAccessWhiteListRulesResponse> {
    return this.request("DeleteAccessWhiteListRules", req, cb)
  }

  /**
   * 查询登录日志
   */
  async DescribeLoginEvent(
    req: DescribeLoginEventRequest,
    cb?: (error: string, rep: DescribeLoginEventResponse) => void
  ): Promise<DescribeLoginEventResponse> {
    return this.request("DescribeLoginEvent", req, cb)
  }

  /**
   * 新建资产组
   */
  async CreateDeviceGroup(
    req: CreateDeviceGroupRequest,
    cb?: (error: string, rep: CreateDeviceGroupResponse) => void
  ): Promise<CreateDeviceGroupResponse> {
    return this.request("CreateDeviceGroup", req, cb)
  }

  /**
   * 查询主机账号列表
   */
  async DescribeDeviceAccounts(
    req: DescribeDeviceAccountsRequest,
    cb?: (error: string, rep: DescribeDeviceAccountsResponse) => void
  ): Promise<DescribeDeviceAccountsResponse> {
    return this.request("DescribeDeviceAccounts", req, cb)
  }

  /**
   * 测试LDAP连接
   */
  async CheckLDAPConnection(
    req: CheckLDAPConnectionRequest,
    cb?: (error: string, rep: CheckLDAPConnectionResponse) => void
  ): Promise<CheckLDAPConnectionResponse> {
    return this.request("CheckLDAPConnection", req, cb)
  }

  /**
   * 重置用户
   */
  async ResetUser(
    req: ResetUserRequest,
    cb?: (error: string, rep: ResetUserResponse) => void
  ): Promise<ResetUserResponse> {
    return this.request("ResetUser", req, cb)
  }

  /**
   * 创建运维任务
   */
  async CreateOperationTask(
    req: CreateOperationTaskRequest,
    cb?: (error: string, rep: CreateOperationTaskResponse) => void
  ): Promise<CreateOperationTaskResponse> {
    return this.request("CreateOperationTask", req, cb)
  }

  /**
   * 创建修改密码任务
   */
  async CreateChangePwdTask(
    req: CreateChangePwdTaskRequest,
    cb?: (error: string, rep: CreateChangePwdTaskResponse) => void
  ): Promise<CreateChangePwdTaskResponse> {
    return this.request("CreateChangePwdTask", req, cb)
  }

  /**
   * 设置LDAP 立即同步标记
   */
  async SetLDAPSyncFlag(
    req?: SetLDAPSyncFlagRequest,
    cb?: (error: string, rep: SetLDAPSyncFlagResponse) => void
  ): Promise<SetLDAPSyncFlagResponse> {
    return this.request("SetLDAPSyncFlag", req, cb)
  }

  /**
   * 查询用户组列表
   */
  async DescribeUserGroups(
    req: DescribeUserGroupsRequest,
    cb?: (error: string, rep: DescribeUserGroupsResponse) => void
  ): Promise<DescribeUserGroupsResponse> {
    return this.request("DescribeUserGroups", req, cb)
  }

  /**
   * 查询网络域
   */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
   * 开通服务，初始化资源，只针对新购资源
   */
  async DeployResource(
    req: DeployResourceRequest,
    cb?: (error: string, rep: DeployResourceResponse) => void
  ): Promise<DeployResourceResponse> {
    return this.request("DeployResource", req, cb)
  }

  /**
   * 修改资产信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 修改资产绑定的堡垒机服务
   */
  async BindDeviceResource(
    req: BindDeviceResourceRequest,
    cb?: (error: string, rep: BindDeviceResourceResponse) => void
  ): Promise<BindDeviceResourceResponse> {
    return this.request("BindDeviceResource", req, cb)
  }

  /**
   * 绑定主机账号密码
   */
  async BindDeviceAccountPassword(
    req: BindDeviceAccountPasswordRequest,
    cb?: (error: string, rep: BindDeviceAccountPasswordResponse) => void
  ): Promise<BindDeviceAccountPasswordResponse> {
    return this.request("BindDeviceAccountPassword", req, cb)
  }

  /**
   * 获取LDAP ou 列表
   */
  async DescribeLDAPUnitSet(
    req: DescribeLDAPUnitSetRequest,
    cb?: (error: string, rep: DescribeLDAPUnitSetResponse) => void
  ): Promise<DescribeLDAPUnitSetResponse> {
    return this.request("DescribeLDAPUnitSet", req, cb)
  }

  /**
   * 修改高危命令模板
   */
  async ModifyCmdTemplate(
    req: ModifyCmdTemplateRequest,
    cb?: (error: string, rep: ModifyCmdTemplateResponse) => void
  ): Promise<ModifyCmdTemplateResponse> {
    return this.request("ModifyCmdTemplate", req, cb)
  }

  /**
   * 文件传输检索
   */
  async SearchFile(
    req: SearchFileRequest,
    cb?: (error: string, rep: SearchFileResponse) => void
  ): Promise<SearchFileResponse> {
    return this.request("SearchFile", req, cb)
  }

  /**
   * 搜索会话
   */
  async SearchSession(
    req: SearchSessionRequest,
    cb?: (error: string, rep: SearchSessionResponse) => void
  ): Promise<SearchSessionResponse> {
    return this.request("SearchSession", req, cb)
  }

  /**
   * 删除访问权限
   */
  async DeleteAcls(
    req: DeleteAclsRequest,
    cb?: (error: string, rep: DeleteAclsResponse) => void
  ): Promise<DeleteAclsResponse> {
    return this.request("DeleteAcls", req, cb)
  }

  /**
   * 外部客户访问资产
   */
  async AccessDevices(
    req: AccessDevicesRequest,
    cb?: (error: string, rep: AccessDevicesResponse) => void
  ): Promise<AccessDevicesResponse> {
    return this.request("AccessDevices", req, cb)
  }

  /**
   * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
   */
  async DescribeResources(
    req: DescribeResourcesRequest,
    cb?: (error: string, rep: DescribeResourcesResponse) => void
  ): Promise<DescribeResourcesResponse> {
    return this.request("DescribeResources", req, cb)
  }

  /**
   * 删除用户组成员
   */
  async DeleteUserGroupMembers(
    req: DeleteUserGroupMembersRequest,
    cb?: (error: string, rep: DeleteUserGroupMembersResponse) => void
  ): Promise<DeleteUserGroupMembersResponse> {
    return this.request("DeleteUserGroupMembers", req, cb)
  }

  /**
   * 更新修改密码任务
   */
  async ModifyChangePwdTask(
    req: ModifyChangePwdTaskRequest,
    cb?: (error: string, rep: ModifyChangePwdTaskResponse) => void
  ): Promise<ModifyChangePwdTaskResponse> {
    return this.request("ModifyChangePwdTask", req, cb)
  }

  /**
   * 创建手工资产同步任务
   */
  async CreateAssetSyncJob(
    req: CreateAssetSyncJobRequest,
    cb?: (error: string, rep: CreateAssetSyncJobResponse) => void
  ): Promise<CreateAssetSyncJobResponse> {
    return this.request("CreateAssetSyncJob", req, cb)
  }

  /**
   * 查询访问权限列表
   */
  async DescribeAcls(
    req: DescribeAclsRequest,
    cb?: (error: string, rep: DescribeAclsResponse) => void
  ): Promise<DescribeAclsResponse> {
    return this.request("DescribeAcls", req, cb)
  }

  /**
   * 执行改密任务
   */
  async RunChangePwdTask(
    req: RunChangePwdTaskRequest,
    cb?: (error: string, rep: RunChangePwdTaskResponse) => void
  ): Promise<RunChangePwdTaskResponse> {
    return this.request("RunChangePwdTask", req, cb)
  }

  /**
   * 清除设备账号绑定密码
   */
  async ResetDeviceAccountPassword(
    req: ResetDeviceAccountPasswordRequest,
    cb?: (error: string, rep: ResetDeviceAccountPasswordResponse) => void
  ): Promise<ResetDeviceAccountPasswordResponse> {
    return this.request("ResetDeviceAccountPassword", req, cb)
  }

  /**
   * 修改用户组
   */
  async ModifyUserGroup(
    req: ModifyUserGroupRequest,
    cb?: (error: string, rep: ModifyUserGroupResponse) => void
  ): Promise<ModifyUserGroupResponse> {
    return this.request("ModifyUserGroup", req, cb)
  }

  /**
   * 删除资产组
   */
  async DeleteDeviceGroups(
    req: DeleteDeviceGroupsRequest,
    cb?: (error: string, rep: DeleteDeviceGroupsResponse) => void
  ): Promise<DeleteDeviceGroupsResponse> {
    return this.request("DeleteDeviceGroups", req, cb)
  }

  /**
   * 删除运维任务
   */
  async DeleteOperationTasks(
    req: DeleteOperationTasksRequest,
    cb?: (error: string, rep: DeleteOperationTasksResponse) => void
  ): Promise<DeleteOperationTasksResponse> {
    return this.request("DeleteOperationTasks", req, cb)
  }

  /**
   * 修改访问权限
   */
  async ModifyAcl(
    req: ModifyAclRequest,
    cb?: (error: string, rep: ModifyAclResponse) => void
  ): Promise<ModifyAclResponse> {
    return this.request("ModifyAcl", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 新建访问权限
   */
  async CreateAcl(
    req: CreateAclRequest,
    cb?: (error: string, rep: CreateAclResponse) => void
  ): Promise<CreateAclResponse> {
    return this.request("CreateAcl", req, cb)
  }

  /**
   * 根据会话Id搜索Command
   */
  async SearchCommandBySid(
    req: SearchCommandBySidRequest,
    cb?: (error: string, rep: SearchCommandBySidResponse) => void
  ): Promise<SearchCommandBySidResponse> {
    return this.request("SearchCommandBySid", req, cb)
  }

  /**
   * 解锁用户
   */
  async UnlockUser(
    req: UnlockUserRequest,
    cb?: (error: string, rep: UnlockUserResponse) => void
  ): Promise<UnlockUserResponse> {
    return this.request("UnlockUser", req, cb)
  }

  /**
   * 搜索文件传输会话下文件操作列表
   */
  async SearchFileBySid(
    req: SearchFileBySidRequest,
    cb?: (error: string, rep: SearchFileBySidResponse) => void
  ): Promise<SearchFileBySidResponse> {
    return this.request("SearchFileBySid", req, cb)
  }

  /**
   * 清除设备账号绑定的密钥
   */
  async ResetDeviceAccountPrivateKey(
    req: ResetDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: ResetDeviceAccountPrivateKeyResponse) => void
  ): Promise<ResetDeviceAccountPrivateKeyResponse> {
    return this.request("ResetDeviceAccountPrivateKey", req, cb)
  }

  /**
   * 添加访问白名单规则
   */
  async CreateAccessWhiteListRule(
    req: CreateAccessWhiteListRuleRequest,
    cb?: (error: string, rep: CreateAccessWhiteListRuleResponse) => void
  ): Promise<CreateAccessWhiteListRuleResponse> {
    return this.request("CreateAccessWhiteListRule", req, cb)
  }

  /**
   * 新建主机账号
   */
  async CreateDeviceAccount(
    req: CreateDeviceAccountRequest,
    cb?: (error: string, rep: CreateDeviceAccountResponse) => void
  ): Promise<CreateDeviceAccountResponse> {
    return this.request("CreateDeviceAccount", req, cb)
  }

  /**
   * 查询访问白名单规则列表
   */
  async DescribeAccessWhiteListRules(
    req: DescribeAccessWhiteListRulesRequest,
    cb?: (error: string, rep: DescribeAccessWhiteListRulesResponse) => void
  ): Promise<DescribeAccessWhiteListRulesResponse> {
    return this.request("DescribeAccessWhiteListRules", req, cb)
  }

  /**
   * 查询改密任务详情
   */
  async DescribeChangePwdTaskDetail(
    req: DescribeChangePwdTaskDetailRequest,
    cb?: (error: string, rep: DescribeChangePwdTaskDetailResponse) => void
  ): Promise<DescribeChangePwdTaskDetailResponse> {
    return this.request("DescribeChangePwdTaskDetail", req, cb)
  }

  /**
   * 删除资产组成员
   */
  async DeleteDeviceGroupMembers(
    req: DeleteDeviceGroupMembersRequest,
    cb?: (error: string, rep: DeleteDeviceGroupMembersResponse) => void
  ): Promise<DeleteDeviceGroupMembersResponse> {
    return this.request("DeleteDeviceGroupMembers", req, cb)
  }

  /**
   * 删除改密任务
   */
  async DeleteChangePwdTask(
    req: DeleteChangePwdTaskRequest,
    cb?: (error: string, rep: DeleteChangePwdTaskResponse) => void
  ): Promise<DeleteChangePwdTaskResponse> {
    return this.request("DeleteChangePwdTask", req, cb)
  }

  /**
   * 删除主机
   */
  async DeleteDevices(
    req: DeleteDevicesRequest,
    cb?: (error: string, rep: DeleteDevicesResponse) => void
  ): Promise<DeleteDevicesResponse> {
    return this.request("DeleteDevices", req, cb)
  }

  /**
   * 修改运维任务
   */
  async ModifyOperationTask(
    req: ModifyOperationTaskRequest,
    cb?: (error: string, rep: ModifyOperationTaskResponse) => void
  ): Promise<ModifyOperationTaskResponse> {
    return this.request("ModifyOperationTask", req, cb)
  }

  /**
   * 修改LDAP配置信息
   */
  async ModifyLDAPSetting(
    req: ModifyLDAPSettingRequest,
    cb?: (error: string, rep: ModifyLDAPSettingResponse) => void
  ): Promise<ModifyLDAPSettingResponse> {
    return this.request("ModifyLDAPSetting", req, cb)
  }

  /**
   * 删除主机账号
   */
  async DeleteDeviceAccounts(
    req: DeleteDeviceAccountsRequest,
    cb?: (error: string, rep: DeleteDeviceAccountsResponse) => void
  ): Promise<DeleteDeviceAccountsResponse> {
    return this.request("DeleteDeviceAccounts", req, cb)
  }

  /**
   * 删除用户组
   */
  async DeleteUserGroups(
    req: DeleteUserGroupsRequest,
    cb?: (error: string, rep: DeleteUserGroupsResponse) => void
  ): Promise<DeleteUserGroupsResponse> {
    return this.request("DeleteUserGroups", req, cb)
  }

  /**
   * 执行运维任务
   */
  async RunOperationTask(
    req: RunOperationTaskRequest,
    cb?: (error: string, rep: RunOperationTaskResponse) => void
  ): Promise<RunOperationTaskResponse> {
    return this.request("RunOperationTask", req, cb)
  }

  /**
   * 新建高危命令模板
   */
  async CreateCmdTemplate(
    req: CreateCmdTemplateRequest,
    cb?: (error: string, rep: CreateCmdTemplateResponse) => void
  ): Promise<CreateCmdTemplateResponse> {
    return this.request("CreateCmdTemplate", req, cb)
  }

  /**
   * 资源变配
   */
  async ModifyResource(
    req: ModifyResourceRequest,
    cb?: (error: string, rep: ModifyResourceResponse) => void
  ): Promise<ModifyResourceResponse> {
    return this.request("ModifyResource", req, cb)
  }

  /**
   * 搜索审计日志
   */
  async SearchAuditLog(
    req: SearchAuditLogRequest,
    cb?: (error: string, rep: SearchAuditLogResponse) => void
  ): Promise<SearchAuditLogResponse> {
    return this.request("SearchAuditLog", req, cb)
  }

  /**
   * 获取运维任务列表
   */
  async DescribeOperationTask(
    req: DescribeOperationTaskRequest,
    cb?: (error: string, rep: DescribeOperationTaskResponse) => void
  ): Promise<DescribeOperationTaskResponse> {
    return this.request("DescribeOperationTask", req, cb)
  }

  /**
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 查询命令模板列表
   */
  async DescribeCmdTemplates(
    req: DescribeCmdTemplatesRequest,
    cb?: (error: string, rep: DescribeCmdTemplatesResponse) => void
  ): Promise<DescribeCmdTemplatesResponse> {
    return this.request("DescribeCmdTemplates", req, cb)
  }

  /**
   * 删除高危命令模板
   */
  async DeleteCmdTemplates(
    req: DeleteCmdTemplatesRequest,
    cb?: (error: string, rep: DeleteCmdTemplatesResponse) => void
  ): Promise<DeleteCmdTemplatesResponse> {
    return this.request("DeleteCmdTemplates", req, cb)
  }

  /**
   * 添加用户组成员
   */
  async AddUserGroupMembers(
    req: AddUserGroupMembersRequest,
    cb?: (error: string, rep: AddUserGroupMembersResponse) => void
  ): Promise<AddUserGroupMembersResponse> {
    return this.request("AddUserGroupMembers", req, cb)
  }

  /**
   * 查询资产组列表
   */
  async DescribeDeviceGroups(
    req: DescribeDeviceGroupsRequest,
    cb?: (error: string, rep: DescribeDeviceGroupsResponse) => void
  ): Promise<DescribeDeviceGroupsResponse> {
    return this.request("DescribeDeviceGroups", req, cb)
  }

  /**
   * 查询用户列表
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 查询资产列表
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 查询用户组成员列表
   */
  async DescribeUserGroupMembers(
    req: DescribeUserGroupMembersRequest,
    cb?: (error: string, rep: DescribeUserGroupMembersResponse) => void
  ): Promise<DescribeUserGroupMembersResponse> {
    return this.request("DescribeUserGroupMembers", req, cb)
  }

  /**
   * 会话回放
   */
  async ReplaySession(
    req: ReplaySessionRequest,
    cb?: (error: string, rep: ReplaySessionResponse) => void
  ): Promise<ReplaySessionResponse> {
    return this.request("ReplaySession", req, cb)
  }

  /**
   * 查询运维子任务执行结果
   */
  async SearchSubtaskResultById(
    req: SearchSubtaskResultByIdRequest,
    cb?: (error: string, rep: SearchSubtaskResultByIdResponse) => void
  ): Promise<SearchSubtaskResultByIdResponse> {
    return this.request("SearchSubtaskResultById", req, cb)
  }

  /**
   * 查询资产组成员列表
   */
  async DescribeDeviceGroupMembers(
    req: DescribeDeviceGroupMembersRequest,
    cb?: (error: string, rep: DescribeDeviceGroupMembersResponse) => void
  ): Promise<DescribeDeviceGroupMembersResponse> {
    return this.request("DescribeDeviceGroupMembers", req, cb)
  }

  /**
   * 导入外部资产信息
   */
  async ImportExternalDevice(
    req: ImportExternalDeviceRequest,
    cb?: (error: string, rep: ImportExternalDeviceResponse) => void
  ): Promise<ImportExternalDeviceResponse> {
    return this.request("ImportExternalDevice", req, cb)
  }

  /**
   * 查询改密任务列表
   */
  async DescribeChangePwdTask(
    req: DescribeChangePwdTaskRequest,
    cb?: (error: string, rep: DescribeChangePwdTaskResponse) => void
  ): Promise<DescribeChangePwdTaskResponse> {
    return this.request("DescribeChangePwdTask", req, cb)
  }

  /**
   * 添加资产组成员
   */
  async AddDeviceGroupMembers(
    req: AddDeviceGroupMembersRequest,
    cb?: (error: string, rep: AddDeviceGroupMembersResponse) => void
  ): Promise<AddDeviceGroupMembersResponse> {
    return this.request("AddDeviceGroupMembers", req, cb)
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
   * 创建堡垒机实例
   */
  async CreateResource(
    req: CreateResourceRequest,
    cb?: (error: string, rep: CreateResourceResponse) => void
  ): Promise<CreateResourceResponse> {
    return this.request("CreateResource", req, cb)
  }

  /**
   * 新建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 搜索运维任务执行结果
   */
  async SearchTaskResult(
    req: SearchTaskResultRequest,
    cb?: (error: string, rep: SearchTaskResultResponse) => void
  ): Promise<SearchTaskResultResponse> {
    return this.request("SearchTaskResult", req, cb)
  }

  /**
   * 绑定主机账号私钥
   */
  async BindDeviceAccountPrivateKey(
    req: BindDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: BindDeviceAccountPrivateKeyResponse) => void
  ): Promise<BindDeviceAccountPrivateKeyResponse> {
    return this.request("BindDeviceAccountPrivateKey", req, cb)
  }

  /**
   * 修改资产组
   */
  async ModifyDeviceGroup(
    req: ModifyDeviceGroupRequest,
    cb?: (error: string, rep: ModifyDeviceGroupResponse) => void
  ): Promise<ModifyDeviceGroupResponse> {
    return this.request("ModifyDeviceGroup", req, cb)
  }

  /**
   * 命令执行检索
   */
  async SearchCommand(
    req: SearchCommandRequest,
    cb?: (error: string, rep: SearchCommandResponse) => void
  ): Promise<SearchCommandResponse> {
    return this.request("SearchCommand", req, cb)
  }

  /**
   * 命令检索
   */
  async SearchSessionCommand(
    req: SearchSessionCommandRequest,
    cb?: (error: string, rep: SearchSessionCommandResponse) => void
  ): Promise<SearchSessionCommandResponse> {
    return this.request("SearchSessionCommand", req, cb)
  }
}
