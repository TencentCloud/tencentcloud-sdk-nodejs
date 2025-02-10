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
  DescribeLoginEventRequest,
  ModifyResourceResponse,
  BindDeviceAccountPasswordRequest,
  DeleteAclsRequest,
  DeleteDeviceGroupsResponse,
  DescribeDeviceGroupsResponse,
  DeleteCmdTemplatesResponse,
  DeleteDevicesResponse,
  ChangePwdTaskInfo,
  CreateChangePwdTaskResponse,
  ModifyUserGroupResponse,
  BindDeviceAccountPasswordResponse,
  DescribeChangePwdTaskDetailRequest,
  ResetDeviceAccountPasswordRequest,
  AddUserGroupMembersRequest,
  CreateResourceRequest,
  DescribeDevicesResponse,
  ResetUserResponse,
  DeleteUserGroupMembersRequest,
  RunChangePwdTaskRequest,
  DescribeChangePwdTaskDetailResponse,
  DeleteUserGroupsResponse,
  ModifyDeviceRequest,
  SearchFileRequest,
  DescribeDomainsResponse,
  SearchFileBySidResult,
  SearchCommandRequest,
  ImportExternalDeviceRequest,
  SearchSessionRequest,
  BindDeviceResourceResponse,
  ResetDeviceAccountPrivateKeyResponse,
  DeleteUserGroupMembersResponse,
  CmdTemplate,
  SearchCommandResult,
  ModifyOAuthSettingRequest,
  CreateUserGroupRequest,
  SearchFileTypeFilter,
  BindDeviceAccountPrivateKeyResponse,
  SearchCommandBySidRequest,
  CreateDeviceGroupResponse,
  DescribeUserGroupMembersRequest,
  OperationEvent,
  Department,
  ModifyCmdTemplateRequest,
  SessionResult,
  CreateUserResponse,
  AppAsset,
  DescribeAssetSyncStatusResponse,
  ModifyChangePwdTaskResponse,
  DescribeUserGroupsRequest,
  CreateAclRequest,
  DescribeLoginEventResponse,
  RunChangePwdTaskDetail,
  DeleteDeviceGroupMembersRequest,
  SearchCommandResponse,
  DescribeChangePwdTaskResponse,
  CreateDeviceGroupRequest,
  CreateAclResponse,
  DescribeAclsResponse,
  CreateCmdTemplateResponse,
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
  DepartmentManagerUser,
  CreateAssetSyncJobResponse,
  BindDeviceAccountPrivateKeyRequest,
  ModifyChangePwdTaskRequest,
  CreateAssetSyncJobRequest,
  Group,
  DescribeAssetSyncStatusRequest,
  Clb,
  ModifyUserRequest,
  DeleteUsersRequest,
  DeleteDeviceAccountsRequest,
  DeleteDeviceGroupMembersResponse,
  ModifyDeviceGroupResponse,
  ModifyOAuthSettingResponse,
  DescribeUserGroupMembersResponse,
  ImportExternalDeviceResponse,
  SearchSessionCommandResponse,
  DeleteUserGroupsRequest,
  User,
  ResetUserRequest,
  Device,
  CreateDeviceAccountResponse,
  ModifyDeviceGroupRequest,
  Domain,
  Filter,
  DescribeUsersResponse,
  DeployResourceResponse,
  CreateUserRequest,
  DescribeChangePwdTaskRequest,
  SearchFileBySidResponse,
  DescribeOperationEventRequest,
  ModifyDeviceResponse,
  ModifyUserResponse,
  ChangePwdTaskDetail,
  DescribeCmdTemplatesResponse,
  CreateDeviceAccountRequest,
  AddDeviceGroupMembersResponse,
  DeleteCmdTemplatesRequest,
  DescribeUserGroupsResponse,
  AddUserGroupMembersResponse,
  DescribeDeviceAccountsRequest,
  DeleteChangePwdTaskRequest,
  ModifyUserGroupRequest,
  CreateChangePwdTaskRequest,
  LoginEvent,
  DeleteChangePwdTaskResponse,
  CreateUserGroupResponse,
  DeleteDevicesRequest,
  DescribeDeviceAccountsResponse,
  DescribeDomainsRequest,
  DescribeCmdTemplatesRequest,
  ModifyAclResponse,
  DescribeResourcesRequest,
  DeleteDeviceGroupsRequest,
  DescribeDeviceGroupMembersResponse,
  SearchAuditLogResponse,
  Resource,
  RunChangePwdTaskResponse,
  BindDeviceResourceRequest,
  Acl,
  TagFilter,
  DescribeDevicesRequest,
  DescribeDeviceGroupsRequest,
  ACTemplate,
  SearchSessionCommandRequest,
  SearchFileBySidRequest,
  DescribeOperationEventResponse,
  ExternalDevice,
  SearchFileResult,
  DeleteAclsResponse,
  DescribeDeviceGroupMembersRequest,
  DescribeAclsRequest,
  AddDeviceGroupMembersRequest,
  DeleteDeviceAccountsResponse,
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
   * 修改资产组
   */
  async ModifyDeviceGroup(
    req: ModifyDeviceGroupRequest,
    cb?: (error: string, rep: ModifyDeviceGroupResponse) => void
  ): Promise<ModifyDeviceGroupResponse> {
    return this.request("ModifyDeviceGroup", req, cb)
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
   * 设置OAuth认证参数
   */
  async ModifyOAuthSetting(
    req: ModifyOAuthSettingRequest,
    cb?: (error: string, rep: ModifyOAuthSettingResponse) => void
  ): Promise<ModifyOAuthSettingResponse> {
    return this.request("ModifyOAuthSetting", req, cb)
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
   * 重置用户
   */
  async ResetUser(
    req: ResetUserRequest,
    cb?: (error: string, rep: ResetUserResponse) => void
  ): Promise<ResetUserResponse> {
    return this.request("ResetUser", req, cb)
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
   * 创建修改密码任务
   */
  async CreateChangePwdTask(
    req: CreateChangePwdTaskRequest,
    cb?: (error: string, rep: CreateChangePwdTaskResponse) => void
  ): Promise<CreateChangePwdTaskResponse> {
    return this.request("CreateChangePwdTask", req, cb)
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
   * 清除设备账号绑定的密钥
   */
  async ResetDeviceAccountPrivateKey(
    req: ResetDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: ResetDeviceAccountPrivateKeyResponse) => void
  ): Promise<ResetDeviceAccountPrivateKeyResponse> {
    return this.request("ResetDeviceAccountPrivateKey", req, cb)
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
   * 新建主机账号
   */
  async CreateDeviceAccount(
    req: CreateDeviceAccountRequest,
    cb?: (error: string, rep: CreateDeviceAccountResponse) => void
  ): Promise<CreateDeviceAccountResponse> {
    return this.request("CreateDeviceAccount", req, cb)
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
   * 查询操作日志
   */
  async DescribeOperationEvent(
    req: DescribeOperationEventRequest,
    cb?: (error: string, rep: DescribeOperationEventResponse) => void
  ): Promise<DescribeOperationEventResponse> {
    return this.request("DescribeOperationEvent", req, cb)
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
   * 搜索文件传输会话下文件操作列表
   */
  async SearchFileBySid(
    req: SearchFileBySidRequest,
    cb?: (error: string, rep: SearchFileBySidResponse) => void
  ): Promise<SearchFileBySidResponse> {
    return this.request("SearchFileBySid", req, cb)
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
   * 绑定主机账号私钥
   */
  async BindDeviceAccountPrivateKey(
    req: BindDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: BindDeviceAccountPrivateKeyResponse) => void
  ): Promise<BindDeviceAccountPrivateKeyResponse> {
    return this.request("BindDeviceAccountPrivateKey", req, cb)
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
