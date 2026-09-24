/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DeleteSessionSpaceResponse,
  AffinityConfiguration,
  ApproveRegistryRecordRequest,
  AppendEventResponse,
  DescribeRegistryRecordResponse,
  DescribeQuotaOverviewRequest,
  CloudSkillSourceInput,
  CreatePreCacheImageTaskResponse,
  QuotaResourceInfo,
  ResumeSandboxInstanceRequest,
  ModifySessionSpaceResponse,
  DescribePreCacheImageTaskRequest,
  CloudRecord,
  DescribeDeploymentResponse,
  RejectRegistryRecordResponse,
  CloudTag,
  DNSConfig,
  DescribeRegistryRecordListRequest,
  CloudRegistry,
  UpdateRegistryResponse,
  ApproveRegistryRecordResponse,
  DeleteSessionRequest,
  ResumeSandboxInstanceResponse,
  AcquireSandboxInstanceTokenRequest,
  CloudRecordVersion,
  DescribeAPIKeyListResponse,
  PreviewRegistryRecordResponse,
  CreateSessionRequest,
  DescribeDeploymentRequest,
  ResourceConfiguration,
  DescribeSessionSpaceResponse,
  CreateSandboxToolResponse,
  CloudVersionApprovalAction,
  VPCConfig,
  CreateRegistryResponse,
  DeleteAPIKeyRequest,
  ProbeConfiguration,
  DeleteDeploymentRequest,
  GetSkillPackageUploadURLRequest,
  UpdateSandboxToolRequest,
  DescribeSessionSpacesResponse,
  DescribeRegistryRecordVersionListResponse,
  StopSandboxInstanceResponse,
  DescribeRegistryRecordVersionListRequest,
  RejectRegistryRecordRequest,
  CreateDeploymentRequest,
  CfsStorageSource,
  StopSandboxInstanceRequest,
  GetSkillPackageDownloadURLRequest,
  DescribeSandboxToolListResponse,
  SessionInfo,
  DescribeQuotaOverviewResponse,
  UpdateSandboxToolResponse,
  InlineDataInfo,
  DescribeRegistryRecordRequest,
  CancelRegistryRecordRequest,
  APIKeyInfo,
  DescribeSandboxToolListRequest,
  StorageSource,
  DeleteSandboxToolRequest,
  CreateAPIKeyRequest,
  DeleteSandboxToolResponse,
  SandboxTool,
  CreateRegistryRecordResponse,
  SessionSpaceInfo,
  UpdateSandboxInstanceRequest,
  ModifySessionRequest,
  CustomConfiguration,
  SyncRegistryRecordRequest,
  LogSources,
  DescribeRegistryRequest,
  DeleteRegistryResponse,
  DescribeAPIKeyListRequest,
  DescribeSandboxInstanceListResponse,
  EventInfo,
  GetSkillPackageUploadURLResponse,
  CreateSessionSpaceResponse,
  CLSConfig,
  UpdateRegistryRequest,
  DescribeSessionsResponse,
  DescribeDeploymentListRequest,
  DescribeRegistryAuditLogListRequest,
  PauseSandboxInstanceRequest,
  DescribeRegistryRecordListResponse,
  CloudAuditLog,
  UpdateRegistryRecordRequest,
  CreateAPIKeyResponse,
  DescribeSessionRequest,
  AcquireDeploymentTokenRequest,
  DescribeEventsResponse,
  DescribeDeploymentListResponse,
  DescribeRegistryResponse,
  ModifySessionSpaceRequest,
  CreateSessionSpaceRequest,
  DeleteAPIKeyResponse,
  DescribeRegistryListRequest,
  CustomConfigurationDetail,
  CreateDeploymentResponse,
  DeleteRegistryRequest,
  GetSkillPackageDownloadURLResponse,
  SessionState,
  MountOption,
  CreateSessionResponse,
  StartSandboxInstanceResponse,
  DescribeSessionSpaceRequest,
  DescribeSandboxInstanceListRequest,
  NetworkConfiguration,
  ModifyDeploymentRequest,
  CloudAgentSourceInput,
  ImageStorageSource,
  DescribeRegistryAuditLogListResponse,
  AcquireSandboxInstanceTokenResponse,
  AccountQuotaOverview,
  AgentBucketStorageSource,
  CloudRecordLabelMutation,
  PauseSandboxInstanceResponse,
  CosStorageSource,
  StartSandboxInstanceRequest,
  CancelRegistryRecordResponse,
  DescribeSessionSpacesRequest,
  SandboxInstance,
  WAAConfiguration,
  StorageMount,
  ComputerConfiguration,
  DescribeRegistryListResponse,
  UpdateRegistryRecordResponse,
  DeleteSessionSpaceRequest,
  OSWorldConfiguration,
  AcquireDeploymentTokenResponse,
  DescribeSessionsRequest,
  CreateSandboxToolRequest,
  HttpGetAction,
  DescribePreCacheImageTaskResponse,
  DeleteRegistryRecordResponse,
  CreateRegistryRecordRequest,
  ModifySessionResponse,
  UpdateSandboxInstanceResponse,
  Deployment,
  DeleteDeploymentResponse,
  SyncRegistryRecordResponse,
  DescribeSessionResponse,
  DeleteRegistryRecordRequest,
  EventPartInfo,
  Tag,
  ScalingConfiguration,
  AppendEventRequest,
  QuotaGroupOverview,
  DeleteSessionResponse,
  LifecycleConfiguration,
  PreviewRegistryRecordRequest,
  CloudFilter,
  DescribeEventsRequest,
  EventContentInfo,
  PortConfiguration,
  Filter,
  CreateRegistryRequest,
  ModifyDeploymentResponse,
  CreatePreCacheImageTaskRequest,
  LogConfiguration,
  MetadataVar,
  CloudMCPSourceInput,
  EnvVar,
  EventActionsInfo,
} from "./ags_models"

/**
 * ags client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ags.tencentcloudapi.com", "2025-09-20", clientConfig)
  }

  /**
   * 创建镜像预热任务
   */
  async CreatePreCacheImageTask(
    req: CreatePreCacheImageTaskRequest,
    cb?: (error: string, rep: CreatePreCacheImageTaskResponse) => void
  ): Promise<CreatePreCacheImageTaskResponse> {
    return this.request("CreatePreCacheImageTask", req, cb)
  }

  /**
   * 对 Record 的指定 Version 或 Label 目标发起一次预览调用。VersionId 与 Label 互斥；均省略时使用 Stable。不创建 Version、不修改 Label。
   */
  async PreviewRegistryRecord(
    req: PreviewRegistryRecordRequest,
    cb?: (error: string, rep: PreviewRegistryRecordResponse) => void
  ): Promise<PreviewRegistryRecordResponse> {
    return this.request("PreviewRegistryRecord", req, cb)
  }

  /**
   * 更新沙箱实例
   */
  async UpdateSandboxInstance(
    req: UpdateSandboxInstanceRequest,
    cb?: (error: string, rep: UpdateSandboxInstanceResponse) => void
  ): Promise<UpdateSandboxInstanceResponse> {
    return this.request("UpdateSandboxInstance", req, cb)
  }

  /**
   * 修改 Deployment
   */
  async ModifyDeployment(
    req: ModifyDeploymentRequest,
    cb?: (error: string, rep: ModifyDeploymentResponse) => void
  ): Promise<ModifyDeploymentResponse> {
    return this.request("ModifyDeployment", req, cb)
  }

  /**
   * 启动沙箱实例
   */
  async StartSandboxInstance(
    req: StartSandboxInstanceRequest,
    cb?: (error: string, rep: StartSandboxInstanceResponse) => void
  ): Promise<StartSandboxInstanceResponse> {
    return this.request("StartSandboxInstance", req, cb)
  }

  /**
     * 获取访问沙箱工具时所需要使用的访问Token，创建沙箱实例后需调用此接口获取沙箱实例访问Token。
此Token可用于调用代码沙箱实例执行代码，或浏览器沙箱实例进行浏览器操作等。
     */
  async AcquireSandboxInstanceToken(
    req: AcquireSandboxInstanceTokenRequest,
    cb?: (error: string, rep: AcquireSandboxInstanceTokenResponse) => void
  ): Promise<AcquireSandboxInstanceTokenResponse> {
    return this.request("AcquireSandboxInstanceToken", req, cb)
  }

  /**
     * 查询事件列表。

查询指定会话的事件流，支持按作者和起始时间筛选。
     */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
  }

  /**
   * 创建 Agent Registry（注册中心）。
   */
  async CreateRegistry(
    req: CreateRegistryRequest,
    cb?: (error: string, rep: CreateRegistryResponse) => void
  ): Promise<CreateRegistryResponse> {
    return this.request("CreateRegistry", req, cb)
  }

  /**
   * 触发一次从远端拉取描述符 / 元数据的同步。可通过互斥的 VersionId 或 Label 指定来源 Version，均省略时默认使用 Stable。有变化时创建新 Version 并移动 Latest；来源必须 SourceType=URL_IMPORT，否则返回 UnsupportedOperation.SourceType。
   */
  async SyncRegistryRecord(
    req: SyncRegistryRecordRequest,
    cb?: (error: string, rep: SyncRegistryRecordResponse) => void
  ): Promise<SyncRegistryRecordResponse> {
    return this.request("SyncRegistryRecord", req, cb)
  }

  /**
   * 分页查询指定Registry / Record / Version的审计日志。
   */
  async DescribeRegistryAuditLogList(
    req: DescribeRegistryAuditLogListRequest,
    cb?: (error: string, rep: DescribeRegistryAuditLogListResponse) => void
  ): Promise<DescribeRegistryAuditLogListResponse> {
    return this.request("DescribeRegistryAuditLogList", req, cb)
  }

  /**
   * 创建新的API密钥，用于调用Agent Sandbox接口。相较于腾讯云Secret ID Secret Key支持调用所有接口使用，仅有部分接口支持使用API密钥调用。
   */
  async CreateAPIKey(
    req: CreateAPIKeyRequest,
    cb?: (error: string, rep: CreateAPIKeyResponse) => void
  ): Promise<CreateAPIKeyResponse> {
    return this.request("CreateAPIKey", req, cb)
  }

  /**
   * 更新 Registry 的可变元数据。
   */
  async UpdateRegistry(
    req: UpdateRegistryRequest,
    cb?: (error: string, rep: UpdateRegistryResponse) => void
  ): Promise<UpdateRegistryResponse> {
    return this.request("UpdateRegistry", req, cb)
  }

  /**
   * 创建 Deployment
   */
  async CreateDeployment(
    req: CreateDeploymentRequest,
    cb?: (error: string, rep: CreateDeploymentResponse) => void
  ): Promise<CreateDeploymentResponse> {
    return this.request("CreateDeployment", req, cb)
  }

  /**
     * 追加事件。

向指定会话追加一条事件。
     */
  async AppendEvent(
    req: AppendEventRequest,
    cb?: (error: string, rep: AppendEventResponse) => void
  ): Promise<AppendEventResponse> {
    return this.request("AppendEvent", req, cb)
  }

  /**
   * 更新沙箱工具
   */
  async UpdateSandboxTool(
    req: UpdateSandboxToolRequest,
    cb?: (error: string, rep: UpdateSandboxToolResponse) => void
  ): Promise<UpdateSandboxToolResponse> {
    return this.request("UpdateSandboxTool", req, cb)
  }

  /**
   * 查询 Deployment 信息
   */
  async DescribeDeployment(
    req: DescribeDeploymentRequest,
    cb?: (error: string, rep: DescribeDeploymentResponse) => void
  ): Promise<DescribeDeploymentResponse> {
    return this.request("DescribeDeployment", req, cb)
  }

  /**
   * 分页查询 Record 的 Version 列表。list 类接口不接入 CAM 转发鉴权。
   */
  async DescribeRegistryRecordVersionList(
    req: DescribeRegistryRecordVersionListRequest,
    cb?: (error: string, rep: DescribeRegistryRecordVersionListResponse) => void
  ): Promise<DescribeRegistryRecordVersionListResponse> {
    return this.request("DescribeRegistryRecordVersionList", req, cb)
  }

  /**
   * 通过 Version 审批：PENDING_APPROVAL → APPROVED。Comment 必填。
   */
  async ApproveRegistryRecord(
    req: ApproveRegistryRecordRequest,
    cb?: (error: string, rep: ApproveRegistryRecordResponse) => void
  ): Promise<ApproveRegistryRecordResponse> {
    return this.request("ApproveRegistryRecord", req, cb)
  }

  /**
   * 分页查询 Registry 下的 Record 列表。list 类接口不接入 CAM 转发鉴权；业务侧按 CAM 二次过滤。
   */
  async DescribeRegistryRecordList(
    req: DescribeRegistryRecordListRequest,
    cb?: (error: string, rep: DescribeRegistryRecordListResponse) => void
  ): Promise<DescribeRegistryRecordListResponse> {
    return this.request("DescribeRegistryRecordList", req, cb)
  }

  /**
   * 查询沙箱实例列表
   */
  async DescribeSandboxInstanceList(
    req: DescribeSandboxInstanceListRequest,
    cb?: (error: string, rep: DescribeSandboxInstanceListResponse) => void
  ): Promise<DescribeSandboxInstanceListResponse> {
    return this.request("DescribeSandboxInstanceList", req, cb)
  }

  /**
   * 恢复沙箱实例
   */
  async ResumeSandboxInstance(
    req: ResumeSandboxInstanceRequest,
    cb?: (error: string, rep: ResumeSandboxInstanceResponse) => void
  ): Promise<ResumeSandboxInstanceResponse> {
    return this.request("ResumeSandboxInstance", req, cb)
  }

  /**
   * 统一创建 Registry Record（含 revision 1）。请求通过 DescriptorType 与严格内容输入 Union 选择底层类型：MCPSource / AgentSource / SkillSource / CustomDescriptors 四选一，必须与 DescriptorType 对应。不接受 RecordId 或 ChangeLog；同名 Record 返回冲突，不隐式追加 Version。追加 Version 请使用 UpdateRegistryRecord。
   */
  async CreateRegistryRecord(
    req: CreateRegistryRecordRequest,
    cb?: (error: string, rep: CreateRegistryRecordResponse) => void
  ): Promise<CreateRegistryRecordResponse> {
    return this.request("CreateRegistryRecord", req, cb)
  }

  /**
   * PREPARING/PENDING_APPROVAL → CANCELED。Comment 必填。
   */
  async CancelRegistryRecord(
    req: CancelRegistryRecordRequest,
    cb?: (error: string, rep: CancelRegistryRecordResponse) => void
  ): Promise<CancelRegistryRecordResponse> {
    return this.request("CancelRegistryRecord", req, cb)
  }

  /**
     * 删除会话空间。
删除指定的会话空间。仅允许删除不包含会话、事件或用户状态数据的非默认会话空间；系统默认会话空间不能删除。删除成功后不再返回会话空间信息。
     */
  async DeleteSessionSpace(
    req: DeleteSessionSpaceRequest,
    cb?: (error: string, rep: DeleteSessionSpaceResponse) => void
  ): Promise<DeleteSessionSpaceResponse> {
    return this.request("DeleteSessionSpace", req, cb)
  }

  /**
   * 删除 Registry。
   */
  async DeleteRegistry(
    req: DeleteRegistryRequest,
    cb?: (error: string, rep: DeleteRegistryResponse) => void
  ): Promise<DeleteRegistryResponse> {
    return this.request("DeleteRegistry", req, cb)
  }

  /**
   * 修改会话信息
   */
  async ModifySession(
    req: ModifySessionRequest,
    cb?: (error: string, rep: ModifySessionResponse) => void
  ): Promise<ModifySessionResponse> {
    return this.request("ModifySession", req, cb)
  }

  /**
   * 删除 Deployment
   */
  async DeleteDeployment(
    req: DeleteDeploymentRequest,
    cb?: (error: string, rep: DeleteDeploymentResponse) => void
  ): Promise<DeleteDeploymentResponse> {
    return this.request("DeleteDeployment", req, cb)
  }

  /**
   * 创建沙箱工具
   */
  async CreateSandboxTool(
    req: CreateSandboxToolRequest,
    cb?: (error: string, rep: CreateSandboxToolResponse) => void
  ): Promise<CreateSandboxToolResponse> {
    return this.request("CreateSandboxTool", req, cb)
  }

  /**
   * 为 FAILED / EXPIRED 的 TAR Skill Version 生成新的上传尝试；VersionId 与 Revision 保持不变。
   */
  async GetSkillPackageUploadURL(
    req: GetSkillPackageUploadURLRequest,
    cb?: (error: string, rep: GetSkillPackageUploadURLResponse) => void
  ): Promise<GetSkillPackageUploadURLResponse> {
    return this.request("GetSkillPackageUploadURL", req, cb)
  }

  /**
   * 查询 Record 详情和其中一个 Version。请求可通过互斥的 VersionId 或 Label 选择 Version；均省略时默认 Label=stable。取代原 DescribeRegistryRecordVersion。
   */
  async DescribeRegistryRecord(
    req: DescribeRegistryRecordRequest,
    cb?: (error: string, rep: DescribeRegistryRecordResponse) => void
  ): Promise<DescribeRegistryRecordResponse> {
    return this.request("DescribeRegistryRecord", req, cb)
  }

  /**
     * 修改会话空间。
修改指定会话空间的名称和描述，修改成功后返回更新后的会话空间信息。默认会话空间允许修改名称和描述。
     */
  async ModifySessionSpace(
    req: ModifySessionSpaceRequest,
    cb?: (error: string, rep: ModifySessionSpaceResponse) => void
  ): Promise<ModifySessionSpaceResponse> {
    return this.request("ModifySessionSpace", req, cb)
  }

  /**
   * 删除 Registry Record 或指定 Version。省略 VersionId 时对整个 Record 进行软删除；传入 VersionId 时只删除指定 Version（Stable 指向的 Version 不允许删除；仅剩一个 Approved Version 时不允许删除）。取代原 DeleteRegistryRecordVersion。
   */
  async DeleteRegistryRecord(
    req: DeleteRegistryRecordRequest,
    cb?: (error: string, rep: DeleteRegistryRecordResponse) => void
  ): Promise<DeleteRegistryRecordResponse> {
    return this.request("DeleteRegistryRecord", req, cb)
  }

  /**
   * 查询会话列表
   */
  async DescribeSessions(
    req: DescribeSessionsRequest,
    cb?: (error: string, rep: DescribeSessionsResponse) => void
  ): Promise<DescribeSessionsResponse> {
    return this.request("DescribeSessions", req, cb)
  }

  /**
   * 查询沙箱工具列表
   */
  async DescribeSandboxToolList(
    req: DescribeSandboxToolListRequest,
    cb?: (error: string, rep: DescribeSandboxToolListResponse) => void
  ): Promise<DescribeSandboxToolListResponse> {
    return this.request("DescribeSandboxToolList", req, cb)
  }

  /**
   * 获取 Skill 包下载 URL。VersionId 与 Label 互斥；均省略时使用 Stable。响应包含 ResolvedVersionId，便于调用方回填。
   */
  async GetSkillPackageDownloadURL(
    req: GetSkillPackageDownloadURLRequest,
    cb?: (error: string, rep: GetSkillPackageDownloadURLResponse) => void
  ): Promise<GetSkillPackageDownloadURLResponse> {
    return this.request("GetSkillPackageDownloadURL", req, cb)
  }

  /**
   * 驳回 Version 审批：PENDING_APPROVAL → REJECTED。Comment 必填。
   */
  async RejectRegistryRecord(
    req: RejectRegistryRecordRequest,
    cb?: (error: string, rep: RejectRegistryRecordResponse) => void
  ): Promise<RejectRegistryRecordResponse> {
    return this.request("RejectRegistryRecord", req, cb)
  }

  /**
   * 获取API密钥列表，包含API密钥简略信息，包含名称、创建时间等。
   */
  async DescribeAPIKeyList(
    req?: DescribeAPIKeyListRequest,
    cb?: (error: string, rep: DescribeAPIKeyListResponse) => void
  ): Promise<DescribeAPIKeyListResponse> {
    return this.request("DescribeAPIKeyList", req, cb)
  }

  /**
   * 更新 Registry Record。两种互斥模式：①Record 更新模式：不提交任何 Source / CustomDescriptors，可通过 Description、LabelMutations 修改元数据与 Label（至少提交一项）；②Version 创建模式：提交且仅提交一种与现有 DescriptorType 匹配的内容输入，可选 VersionName / ChangeLog，禁止 Description / LabelMutations，服务端在 Record 下创建下一个 Revision。取代原 ChangeRegistryRecordStableVersion / RollbackRegistryRecordVersion / Create*RegistryRecordVersion。
   */
  async UpdateRegistryRecord(
    req: UpdateRegistryRecordRequest,
    cb?: (error: string, rep: UpdateRegistryRecordResponse) => void
  ): Promise<UpdateRegistryRecordResponse> {
    return this.request("UpdateRegistryRecord", req, cb)
  }

  /**
   * 删除沙箱工具
   */
  async DeleteSandboxTool(
    req: DeleteSandboxToolRequest,
    cb?: (error: string, rep: DeleteSandboxToolResponse) => void
  ): Promise<DeleteSandboxToolResponse> {
    return this.request("DeleteSandboxTool", req, cb)
  }

  /**
   * 暂停沙箱实例
   */
  async PauseSandboxInstance(
    req: PauseSandboxInstanceRequest,
    cb?: (error: string, rep: PauseSandboxInstanceResponse) => void
  ): Promise<PauseSandboxInstanceResponse> {
    return this.request("PauseSandboxInstance", req, cb)
  }

  /**
     * 创建会话。

为指定 Agent 和用户创建会话，创建成功后返回会话信息。
     */
  async CreateSession(
    req: CreateSessionRequest,
    cb?: (error: string, rep: CreateSessionResponse) => void
  ): Promise<CreateSessionResponse> {
    return this.request("CreateSession", req, cb)
  }

  /**
     * 创建会话空间。
为当前应用在指定地域创建会话空间，创建成功后返回会话空间信息。会话空间用于隔离不同业务场景下的用户、会话、事件及状态数据。
     */
  async CreateSessionSpace(
    req: CreateSessionSpaceRequest,
    cb?: (error: string, rep: CreateSessionSpaceResponse) => void
  ): Promise<CreateSessionSpaceResponse> {
    return this.request("CreateSessionSpace", req, cb)
  }

  /**
   * 分页查询当前应用和地域下的会话空间。
   */
  async DescribeSessionSpaces(
    req: DescribeSessionSpacesRequest,
    cb?: (error: string, rep: DescribeSessionSpacesResponse) => void
  ): Promise<DescribeSessionSpacesResponse> {
    return this.request("DescribeSessionSpaces", req, cb)
  }

  /**
   * 分页查询当前租户可见的 Registry 列表。
   */
  async DescribeRegistryList(
    req: DescribeRegistryListRequest,
    cb?: (error: string, rep: DescribeRegistryListResponse) => void
  ): Promise<DescribeRegistryListResponse> {
    return this.request("DescribeRegistryList", req, cb)
  }

  /**
   * 删除会话
   */
  async DeleteSession(
    req: DeleteSessionRequest,
    cb?: (error: string, rep: DeleteSessionResponse) => void
  ): Promise<DeleteSessionResponse> {
    return this.request("DeleteSession", req, cb)
  }

  /**
   * 查询 Deployment 列表
   */
  async DescribeDeploymentList(
    req: DescribeDeploymentListRequest,
    cb?: (error: string, rep: DescribeDeploymentListResponse) => void
  ): Promise<DescribeDeploymentListResponse> {
    return this.request("DescribeDeploymentList", req, cb)
  }

  /**
   * 查询镜像预热任务信息
   */
  async DescribePreCacheImageTask(
    req: DescribePreCacheImageTaskRequest,
    cb?: (error: string, rep: DescribePreCacheImageTaskResponse) => void
  ): Promise<DescribePreCacheImageTaskResponse> {
    return this.request("DescribePreCacheImageTask", req, cb)
  }

  /**
   * 停止沙箱实例
   */
  async StopSandboxInstance(
    req: StopSandboxInstanceRequest,
    cb?: (error: string, rep: StopSandboxInstanceResponse) => void
  ): Promise<StopSandboxInstanceResponse> {
    return this.request("StopSandboxInstance", req, cb)
  }

  /**
   * 按 RegistryId 查询 Registry 详情。
   */
  async DescribeRegistry(
    req: DescribeRegistryRequest,
    cb?: (error: string, rep: DescribeRegistryResponse) => void
  ): Promise<DescribeRegistryResponse> {
    return this.request("DescribeRegistry", req, cb)
  }

  /**
     * 查询会话。

查询指定会话的信息。
     */
  async DescribeSession(
    req: DescribeSessionRequest,
    cb?: (error: string, rep: DescribeSessionResponse) => void
  ): Promise<DescribeSessionResponse> {
    return this.request("DescribeSession", req, cb)
  }

  /**
     * 查询会话空间详情。
查询指定会话空间的详细信息，查询成功后返回会话空间的名称、描述、状态、所属地域及创建时间等信息。
     */
  async DescribeSessionSpace(
    req: DescribeSessionSpaceRequest,
    cb?: (error: string, rep: DescribeSessionSpaceResponse) => void
  ): Promise<DescribeSessionSpaceResponse> {
    return this.request("DescribeSessionSpace", req, cb)
  }

  /**
   * 删除API密钥。注意区别于腾讯云Secret ID Secret Key，本接口删除的是Agent Sandbox专用API key。
   */
  async DeleteAPIKey(
    req: DeleteAPIKeyRequest,
    cb?: (error: string, rep: DeleteAPIKeyResponse) => void
  ): Promise<DeleteAPIKeyResponse> {
    return this.request("DeleteAPIKey", req, cb)
  }

  /**
   * 查询当前调用账号的资源配额和当前总用量，以及账号下各配额组的资源配额和当前用量
   */
  async DescribeQuotaOverview(
    req: DescribeQuotaOverviewRequest,
    cb?: (error: string, rep: DescribeQuotaOverviewResponse) => void
  ): Promise<DescribeQuotaOverviewResponse> {
    return this.request("DescribeQuotaOverview", req, cb)
  }

  /**
   * 获取 Deployment 访问 Token
   */
  async AcquireDeploymentToken(
    req: AcquireDeploymentTokenRequest,
    cb?: (error: string, rep: AcquireDeploymentTokenResponse) => void
  ): Promise<AcquireDeploymentTokenResponse> {
    return this.request("AcquireDeploymentToken", req, cb)
  }
}
