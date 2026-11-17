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
  GPUResource,
  AffinityConfiguration,
  ApproveRegistryRecordRequest,
  AppendEventResponse,
  DescribeRegistryRecordResponse,
  GPUResourceStateCount,
  DescribeQuotaOverviewRequest,
  CloudSkillSourceInput,
  CreatePreCacheImageTaskResponse,
  QuotaResourceInfo,
  ResumeSandboxInstanceRequest,
  ModifySessionSpaceResponse,
  DescribePreCacheImageTaskRequest,
  HarnessVersionReference,
  GPUResourceGroupSpec,
  CloudRecord,
  DescribeDeploymentResponse,
  RejectRegistryRecordResponse,
  SecurityContext,
  CloudTag,
  DNSConfig,
  DescribeRegistryRecordListRequest,
  CloudRegistry,
  SandboxSnapshot,
  UpdateRegistryResponse,
  ApproveRegistryRecordResponse,
  DeleteSessionRequest,
  ResumeSandboxInstanceResponse,
  AcquireSandboxInstanceTokenRequest,
  ModifyGPUResourceGroupResponse,
  CloudRecordVersion,
  DescribeAPIKeyListResponse,
  PreviewRegistryRecordResponse,
  CreateSessionRequest,
  DescribeDeploymentRequest,
  DescribeSandboxSnapshotListRequest,
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
  DeleteSandboxSnapshotResponse,
  DescribePreCacheImageListRequest,
  DescribeRegistryRecordVersionListRequest,
  RejectRegistryRecordRequest,
  CreateDeploymentRequest,
  CfsStorageSource,
  DescribeGPUResourceSpecsResponse,
  VolumeTemplateRef,
  StopSandboxInstanceRequest,
  GetSkillPackageDownloadURLRequest,
  DescribeSandboxToolListResponse,
  DescribeGPUResourceSpecsRequest,
  CreateSandboxSnapshotResponse,
  DescribeGPUResourceGroupsResponse,
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
  DeleteSandboxSnapshotRequest,
  CreateRegistryRecordResponse,
  SessionSpaceInfo,
  DescribePreCacheImageListResponse,
  SessionInfo,
  ModifySessionRequest,
  CustomConfiguration,
  GPUResourceGroup,
  LogSources,
  ModifyGPUResourceGroupRequest,
  DescribeRegistryRequest,
  DeleteRegistryResponse,
  DescribeAPIKeyListRequest,
  UpdateSandboxInstanceRequest,
  DescribeSandboxInstanceListResponse,
  EventInfo,
  GetSkillPackageUploadURLResponse,
  CreateSessionSpaceResponse,
  DescribeGPUResourcesRequest,
  CLSConfig,
  UpdateRegistryRequest,
  SyncRegistryRecordRequest,
  DescribeSessionsResponse,
  DescribeDeploymentListRequest,
  DescribeRegistryAuditLogListRequest,
  EventItem,
  PauseSandboxInstanceRequest,
  DescribeRegistryRecordListResponse,
  CloudAuditLog,
  UpdateRegistryRecordRequest,
  DeletePreCacheImageResponse,
  CreateAPIKeyResponse,
  DescribeSessionRequest,
  AcquireDeploymentTokenRequest,
  VolumeRef,
  DescribeEventsResponse,
  DescribeDeploymentListResponse,
  GPUResourceGroupStatistics,
  DescribeRegistryResponse,
  ModifySessionSpaceRequest,
  CreateSessionSpaceRequest,
  DeleteAPIKeyResponse,
  DescribeRegistryListRequest,
  CustomConfigurationDetail,
  CreateDeploymentResponse,
  DeleteRegistryRequest,
  GetSkillPackageDownloadURLResponse,
  PreCacheImage,
  DescribeGPUResourcesResponse,
  SessionState,
  MountOption,
  CreateSessionResponse,
  StartSandboxInstanceResponse,
  DescribeGPUResourceGroupsRequest,
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
  MetadataEntry,
  DeletePreCacheImageRequest,
  CloudRecordLabelMutation,
  DescribeSandboxSnapshotListResponse,
  PauseSandboxInstanceResponse,
  DescribeSandboxInstancesRequest,
  CosStorageSource,
  StartSandboxInstanceRequest,
  CancelRegistryRecordResponse,
  DescribeSessionSpacesRequest,
  SandboxInstance,
  Capabilities,
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
  DescribeEventCenterEventsResponse,
  ModifySessionResponse,
  GPUResourceSpec,
  UpdateSandboxInstanceResponse,
  Deployment,
  DeleteDeploymentResponse,
  SyncRegistryRecordResponse,
  DescribeSessionResponse,
  DeleteRegistryRecordRequest,
  EventPartInfo,
  Tag,
  DescribeEventCenterEventsRequest,
  StopSandboxInstanceResponse,
  ScalingConfiguration,
  CreateSandboxSnapshotRequest,
  AppendEventRequest,
  QuotaGroupOverview,
  DeleteSessionResponse,
  LifecycleConfiguration,
  DeleteGPUResourceGroupResponse,
  PreviewRegistryRecordRequest,
  CloudFilter,
  DescribeEventsRequest,
  EventContentInfo,
  PortConfiguration,
  Filter,
  DescribeSandboxInstancesResponse,
  CloudFileSourceInput,
  CreateRegistryRequest,
  DeleteGPUResourceGroupRequest,
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
     * 创建沙箱快照
该接口属于 Runtime Snapshot API ，当前为预览版本（Beta）。接口后续可能发生不兼容变更或被弃用，不保证向后兼容。接入方需关注后续版本及变更说明，并根据需要调整调用代码。
     */
  async CreateSandboxSnapshot(
    req: CreateSandboxSnapshotRequest,
    cb?: (error: string, rep: CreateSandboxSnapshotResponse) => void
  ): Promise<CreateSandboxSnapshotResponse> {
    return this.request("CreateSandboxSnapshot", req, cb)
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
     * 删除沙箱快照
该接口属于 Runtime Snapshot API ，当前为预览版本（Beta）。接口后续可能发生不兼容变更或被弃用，不保证向后兼容。接入方需关注后续版本及变更说明，并根据需要调整调用代码。
     */
  async DeleteSandboxSnapshot(
    req: DeleteSandboxSnapshotRequest,
    cb?: (error: string, rep: DeleteSandboxSnapshotResponse) => void
  ): Promise<DeleteSandboxSnapshotResponse> {
    return this.request("DeleteSandboxSnapshot", req, cb)
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
   * 查询当前地域可售 GPU 规格与当前租户可购买额度。GPUType、CPU、Memory、GPUNum 必须同时提供或同时省略；精确过滤时按四项匹配。不返回底层机型、资源池或计费标签。总显存为单台全部 GPU 的显存之和。
   */
  async DescribeGPUResourceSpecs(
    req: DescribeGPUResourceSpecsRequest,
    cb?: (error: string, rep: DescribeGPUResourceSpecsResponse) => void
  ): Promise<DescribeGPUResourceSpecsResponse> {
    return this.request("DescribeGPUResourceSpecs", req, cb)
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
   * RegistryId 必填。大写常量 MARKETPLACE 表示服务端主 YAML marketplace.registry_ids 配置的工具市场；真实 reg-xxx 表示具体 Registry。省略、空字符串、null 或其他大小写均拒绝。市场读取要求已认证身份，只返回配置来源内未删除、已审批的可读版本，文件还须 READY 和有效制品；不回退私有目录。 RecordId 市场可选、普通必填。固定版本查询用 DescribeRegistryRecord；record_id/version_id Filters 已删除。Filters 不扩大权限；市场默认浏览传 label=stable。普通模式保留 AppID 与 CAM，市场版本显式投影公开字段。
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
   * RegistryId 必填。大写常量 MARKETPLACE 表示服务端主 YAML marketplace.registry_ids 配置的工具市场；真实 reg-xxx 表示具体 Registry。省略、空字符串、null 或其他大小写均拒绝。市场读取要求已认证身份，只返回配置来源内未删除、已审批的可读版本，文件还须 READY 和有效制品；不回退私有目录。 返回至少有一个市场可读版本的 Record；去重、过滤、计数后分页，VersionCount/LabelSet 只反映市场可读版本，隐藏租户及创建者信息。真实 RegistryId 保留原 AppID/CAM 资源过滤，接口由后端自行鉴权。
   */
  async DescribeRegistryRecordList(
    req: DescribeRegistryRecordListRequest,
    cb?: (error: string, rep: DescribeRegistryRecordListResponse) => void
  ): Promise<DescribeRegistryRecordListResponse> {
    return this.request("DescribeRegistryRecordList", req, cb)
  }

  /**
   * 查询镜像预热列表
   */
  async DescribePreCacheImageList(
    req: DescribePreCacheImageListRequest,
    cb?: (error: string, rep: DescribePreCacheImageListResponse) => void
  ): Promise<DescribePreCacheImageListResponse> {
    return this.request("DescribePreCacheImageList", req, cb)
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
   * 查询会话列表
   */
  async DescribeSessions(
    req: DescribeSessionsRequest,
    cb?: (error: string, rep: DescribeSessionsResponse) => void
  ): Promise<DescribeSessionsResponse> {
    return this.request("DescribeSessions", req, cb)
  }

  /**
   * 统一创建 Registry Record（含 revision 1）。MCPSource / AgentSource / SkillSource / CustomDescriptors / FileSource 五选一，必须与 DescriptorType 对应。PLUGIN 使用 FileSource.Type=FILE 上传通用文件，Registry 不校验插件内容格式和语义，运行端负责解析和加载。SupportedHarnessVersions 为该版本支持的 HarnessVersionReference 对象列表，每项同时包含 HarnessEngine 和 HarnessEngineVersion，原样使用 DescribeHarnessEngineList 返回的选项；Metadata 为 Name/Value 字符串数组，Name 非空、小写且唯一，服务内部保存 map[string]string；两项属性省略时均保存空列表，不继承其他版本。不接受 RecordId 或 ChangeLog；同名 Record 返回冲突，不隐式追加 Version。追加 Version 请使用 UpdateRegistryRecord。
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
     * 查询沙箱快照
该接口属于 Runtime Snapshot API ，当前为预览版本（Beta）。接口后续可能发生不兼容变更或被弃用，不保证向后兼容。请关注后续版本及变更说明，并根据需要调整调用代码。
     */
  async DescribeSandboxSnapshotList(
    req: DescribeSandboxSnapshotListRequest,
    cb?: (error: string, rep: DescribeSandboxSnapshotListResponse) => void
  ): Promise<DescribeSandboxSnapshotListResponse> {
    return this.request("DescribeSandboxSnapshotList", req, cb)
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
   * RegistryId 必填。大写常量 MARKETPLACE 表示服务端主 YAML marketplace.registry_ids 配置的工具市场；真实 reg-xxx 表示具体 Registry。省略、空字符串、null 或其他大小写均拒绝。市场读取要求已认证身份，只返回配置来源内未删除、已审批的可读版本，文件还须 READY 和有效制品；不回退私有目录。 RecordId 必填，VersionId/Label 互斥，均省略解析 stable；市场无可读 stable 返回 ResourceNotFound，不回退 latest。市场 Record/Version 使用公开字段投影，隐藏创建者、租户、审批动作和 SourceConfig。普通模式保留原 AppID/归属，由后端执行 Record 级 CAM batch 检查。
   */
  async DescribeRegistryRecord(
    req: DescribeRegistryRecordRequest,
    cb?: (error: string, rep: DescribeRegistryRecordResponse) => void
  ): Promise<DescribeRegistryRecordResponse> {
    return this.request("DescribeRegistryRecord", req, cb)
  }

  /**
   * 查询当前地域、当前租户的逐台 GPU 商业资源及占用状态。仅展示当前资源，不展示已销毁或补偿完成的失败资源；先筛选（含占用状态）再统计和分页。
   */
  async DescribeGPUResources(
    req: DescribeGPUResourcesRequest,
    cb?: (error: string, rep: DescribeGPUResourcesResponse) => void
  ): Promise<DescribeGPUResourcesResponse> {
    return this.request("DescribeGPUResources", req, cb)
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
   * 查询沙箱实例
   */
  async DescribeSandboxInstances(
    req: DescribeSandboxInstancesRequest,
    cb?: (error: string, rep: DescribeSandboxInstancesResponse) => void
  ): Promise<DescribeSandboxInstancesResponse> {
    return this.request("DescribeSandboxInstances", req, cb)
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
   * 驳回 Version 审批：PENDING_APPROVAL → REJECTED。Comment 必填。
   */
  async RejectRegistryRecord(
    req: RejectRegistryRecordRequest,
    cb?: (error: string, rep: RejectRegistryRecordResponse) => void
  ): Promise<RejectRegistryRecordResponse> {
    return this.request("RejectRegistryRecord", req, cb)
  }

  /**
   * 查询当前地域、当前租户的 GPU 资源组及统计。通过 resource-group-id 精确过滤可查询组详情，仍返回数组；无匹配项返回空数组。资源组可以为空，商业期限和续费标记逐台保存。
   */
  async DescribeGPUResourceGroups(
    req: DescribeGPUResourceGroupsRequest,
    cb?: (error: string, rep: DescribeGPUResourceGroupsResponse) => void
  ): Promise<DescribeGPUResourceGroupsResponse> {
    return this.request("DescribeGPUResourceGroups", req, cb)
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
   * 查询沙箱工具列表
   */
  async DescribeSandboxToolList(
    req: DescribeSandboxToolListRequest,
    cb?: (error: string, rep: DescribeSandboxToolListResponse) => void
  ): Promise<DescribeSandboxToolListResponse> {
    return this.request("DescribeSandboxToolList", req, cb)
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
   * 更新 Registry Record。两种互斥模式：①Record 更新模式：不提交任何 Source / CustomDescriptors，可通过 Description、LabelMutations 修改元数据与 Label（至少提交一项）；②Version 创建模式：提交且仅提交一种与现有 DescriptorType 匹配的内容输入，可选 VersionName / ChangeLog / SupportedHarnessVersions / Metadata，禁止 Description / LabelMutations，服务端创建下一个 Revision。PLUGIN 使用 FileSource.Type=FILE 上传原始文件；FileSource.Type=VERSION 可为 Skill 或 Plugin 复用同一 Record 下未删除且 READY 的文件版本，填写 SourceVersionId，不复制来源版本的 Metadata 或 SupportedHarnessVersions。Metadata 以 Name/Value 字符串数组传输，所有层级 key 必须小写；两项版本属性省略时分别为空对象和空列表，不继承上一版本。取代原 ChangeRegistryRecordStableVersion / RollbackRegistryRecordVersion / Create*RegistryRecordVersion。
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
   * 同步删除当前租户的空 GPU 资源组。资源组内不能存在交付中、已生效、已隔离、销毁中或其他未完成清理的 GPU 实例，也不能有剩余占用绑定或未删除的关联沙箱工具，否则返回 ResourceInUse。已销毁或补偿清理完成的历史记录不阻止删除。同租户重复删除已删除的资源组返回成功；资源组不存在或不属于当前租户时返回 ResourceNotFound。本接口仅软删除资源组，不执行退订退款、停止沙箱或释放底层 VM，历史计费记录保留。
   */
  async DeleteGPUResourceGroup(
    req: DeleteGPUResourceGroupRequest,
    cb?: (error: string, rep: DeleteGPUResourceGroupResponse) => void
  ): Promise<DeleteGPUResourceGroupResponse> {
    return this.request("DeleteGPUResourceGroup", req, cb)
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
   * 删除预热镜像
   */
  async DeletePreCacheImage(
    req: DeletePreCacheImageRequest,
    cb?: (error: string, rep: DeletePreCacheImageResponse) => void
  ): Promise<DeletePreCacheImageResponse> {
    return this.request("DeletePreCacheImage", req, cb)
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
   * 分页查询指定Registry / Record / Version的审计日志。
   */
  async DescribeRegistryAuditLogList(
    req: DescribeRegistryAuditLogListRequest,
    cb?: (error: string, rep: DescribeRegistryAuditLogListResponse) => void
  ): Promise<DescribeRegistryAuditLogListResponse> {
    return this.request("DescribeRegistryAuditLogList", req, cb)
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
   * 仅同步修改当前租户 GPU 资源组的名称，允许重名、同名重试；不修改规格、数量、计费期限或续费标记。不存在或不属于当前租户的资源组返回 ResourceNotFound。
   */
  async ModifyGPUResourceGroup(
    req: ModifyGPUResourceGroupRequest,
    cb?: (error: string, rep: ModifyGPUResourceGroupResponse) => void
  ): Promise<ModifyGPUResourceGroupResponse> {
    return this.request("ModifyGPUResourceGroup", req, cb)
  }

  /**
   * 本接口用于查询当前账号在指定地域的事件列表，支持按事件来源、资源对象、事件类型、事件级别及时间范围等条件筛选，并支持分页和时间排序。默认查询最近 1 小时的事件，支持查询最近 7 天内的事件。
   */
  async DescribeEventCenterEvents(
    req: DescribeEventCenterEventsRequest,
    cb?: (error: string, rep: DescribeEventCenterEventsResponse) => void
  ): Promise<DescribeEventCenterEventsResponse> {
    return this.request("DescribeEventCenterEvents", req, cb)
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
