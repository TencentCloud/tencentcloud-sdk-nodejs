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
  CreateMigrationTaskRequest,
  ScaleUpFileSystemResponse,
  SnapshotStatistics,
  CreateLifecycleDataTaskRequest,
  DescribeCfsPGroupsResponse,
  ModifyDataFlowResponse,
  DescribeMountTargetsResponse,
  DescribeSnapshotOperationLogsRequest,
  CreateLifecyclePolicyDownloadTaskRequest,
  MigrationTaskInfo,
  StopLifecycleDataTaskRequest,
  FileSystemClient,
  DescribeCfsFileSystemsResponse,
  CreateLifecycleDataTaskResponse,
  ApplyPathLifecyclePolicyRequest,
  BindAutoSnapshotPolicyRequest,
  ModifyFileSystemAutoScaleUpRuleRequest,
  ScaleUpFileSystemRequest,
  CreateCfsPGroupRequest,
  DescribeMigrationTasksResponse,
  DescribeAutoSnapshotPoliciesRequest,
  DescribeAvailableZoneInfoRequest,
  DescribeMountTargetsRequest,
  CreateDataFlowResponse,
  SignUpCfsServiceRequest,
  SignUpCfsServiceResponse,
  AutoSnapshotPolicyInfo,
  CreateLifecyclePolicyDownloadTaskResponse,
  DescribeCfsRulesRequest,
  UpdateCfsFileSystemNameRequest,
  DeleteCfsPGroupRequest,
  DescribeLifecycleDataTaskResponse,
  UpdateCfsPGroupResponse,
  UpdateFileSystemBandwidthLimitResponse,
  SnapshotOperateLog,
  DescribeLifecyclePoliciesRequest,
  DeleteAutoSnapshotPolicyRequest,
  CreateLifecyclePolicyResponse,
  UpdateCfsRuleRequest,
  StopLifecycleDataTaskResponse,
  DeleteUserQuotaRequest,
  DescribeAvailableZoneInfoResponse,
  DeleteCfsSnapshotResponse,
  DescribeCfsFileSystemClientsResponse,
  DoDirectoryOperationResponse,
  ModifyLifecyclePolicyResponse,
  CreateCfsSnapshotRequest,
  DescribeBucketListRequest,
  DeleteCfsRuleRequest,
  ApplyPathLifecyclePolicyResponse,
  UpdateCfsRuleResponse,
  DeleteMigrationTaskResponse,
  DescribeLifecycleDataTaskRequest,
  DescribeSnapshotOperationLogsResponse,
  DeleteCfsFileSystemRequest,
  UpdateFileSystemBandwidthLimitRequest,
  DeleteLifecyclePolicyResponse,
  CreateCfsPGroupResponse,
  DescribeCfsServiceStatusRequest,
  CheckResult,
  DeleteUserQuotaResponse,
  DeleteMigrationTaskRequest,
  PGroup,
  SetUserQuotaRequest,
  CreateAutoSnapshotPolicyResponse,
  ModifyFileSystemAutoScaleUpRuleResponse,
  DataFlowInfo,
  AvailableType,
  LifecyclePolicy,
  CreateCfsSnapshotResponse,
  LifecycleRule,
  UserQuota,
  CreateCfsRuleRequest,
  DeleteCfsFileSystemResponse,
  CreateCfsFileSystemResponse,
  BucketInfo,
  DeleteDataFlowResponse,
  CreateAccessCertRequest,
  LifecycleDataTaskInfo,
  DescribeLifecyclePoliciesResponse,
  DescribeUserQuotaRequest,
  FileSystemInfo,
  DescribeDataFlowRequest,
  DescribeBucketListResponse,
  MountInfo,
  UpdateCfsFileSystemNameResponse,
  DescribeCfsSnapshotOverviewResponse,
  AutoScaleUpRule,
  DeleteCfsSnapshotRequest,
  DescribeCfsFileSystemClientsRequest,
  DescribeCfsSnapshotsResponse,
  DescribeCfsFileSystemsRequest,
  AvailableRegion,
  CreateCfsFileSystemRequest,
  AvailableZone,
  DescribeMigrationTasksRequest,
  PGroupRuleInfo,
  Filter,
  UnbindAutoSnapshotPolicyRequest,
  UnbindAutoSnapshotPolicyResponse,
  DescribeCfsServiceStatusResponse,
  ExstraPerformanceInfo,
  BindAutoSnapshotPolicyResponse,
  DescribeCfsSnapshotsRequest,
  UpdateCfsFileSystemSizeLimitResponse,
  UpdateAutoSnapshotPolicyRequest,
  UpdateCfsFileSystemSizeLimitRequest,
  DescribeCfsRulesResponse,
  UpdateCfsFileSystemPGroupResponse,
  UpdateAutoSnapshotPolicyResponse,
  FileSystemByPolicy,
  SnapshotInfo,
  AvailableProtoStatus,
  UpdateCfsFileSystemPGroupRequest,
  CreateMigrationTaskResponse,
  DeleteAutoSnapshotPolicyResponse,
  DeleteCfsRuleResponse,
  UpdateCfsSnapshotAttributeResponse,
  UpdateCfsPGroupRequest,
  DeleteDataFlowRequest,
  PathInfo,
  SetUserQuotaResponse,
  TagInfo,
  DescribeCfsPGroupsRequest,
  DeleteCfsPGroupResponse,
  UpdateCfsSnapshotAttributeRequest,
  DescribeUserQuotaResponse,
  ModifyLifecyclePolicyRequest,
  DeleteLifecyclePolicyRequest,
  TieringDetailInfo,
  CreateLifecyclePolicyRequest,
  PGroupInfo,
  CreateCfsRuleResponse,
  StopMigrationTaskResponse,
  CreateAccessCertResponse,
  StopMigrationTaskRequest,
  DescribeAutoSnapshotPoliciesResponse,
  ModifyDataFlowRequest,
  DescribeCfsSnapshotOverviewRequest,
  CreateAutoSnapshotPolicyRequest,
  CreateDataFlowRequest,
  DescribeDataFlowResponse,
  DoDirectoryOperationRequest,
} from "./cfs_models"

/**
 * cfs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cfs.tencentcloudapi.com", "2019-07-19", clientConfig)
  }

  /**
   * 本接口（DescribeCfsRules）用于查询权限组规则列表。
   */
  async DescribeCfsRules(
    req: DescribeCfsRulesRequest,
    cb?: (error: string, rep: DescribeCfsRulesResponse) => void
  ): Promise<DescribeCfsRulesResponse> {
    return this.request("DescribeCfsRules", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
   */
  async UpdateCfsFileSystemPGroup(
    req: UpdateCfsFileSystemPGroupRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemPGroupResponse) => void
  ): Promise<UpdateCfsFileSystemPGroupResponse> {
    return this.request("UpdateCfsFileSystemPGroup", req, cb)
  }

  /**
   * 查询生命周期任务的接口
   */
  async DescribeLifecycleDataTask(
    req: DescribeLifecycleDataTaskRequest,
    cb?: (error: string, rep: DescribeLifecycleDataTaskResponse) => void
  ): Promise<DescribeLifecycleDataTaskResponse> {
    return this.request("DescribeLifecycleDataTask", req, cb)
  }

  /**
   * 删除文件系统快照
   */
  async DeleteCfsSnapshot(
    req: DeleteCfsSnapshotRequest,
    cb?: (error: string, rep: DeleteCfsSnapshotResponse) => void
  ): Promise<DeleteCfsSnapshotResponse> {
    return this.request("DeleteCfsSnapshot", req, cb)
  }

  /**
   * 用于删除文件系统
   */
  async DeleteCfsFileSystem(
    req: DeleteCfsFileSystemRequest,
    cb?: (error: string, rep: DeleteCfsFileSystemResponse) => void
  ): Promise<DeleteCfsFileSystemResponse> {
    return this.request("DeleteCfsFileSystem", req, cb)
  }

  /**
   * 更新文件系统快照名称及保留时长
   */
  async UpdateCfsSnapshotAttribute(
    req: UpdateCfsSnapshotAttributeRequest,
    cb?: (error: string, rep: UpdateCfsSnapshotAttributeResponse) => void
  ): Promise<UpdateCfsSnapshotAttributeResponse> {
    return this.request("UpdateCfsSnapshotAttribute", req, cb)
  }

  /**
     * 用于获取迁移任务列表。
此接口需提交工单，开启白名单之后才能使用。
     */
  async DescribeMigrationTasks(
    req: DescribeMigrationTasksRequest,
    cb?: (error: string, rep: DescribeMigrationTasksResponse) => void
  ): Promise<DescribeMigrationTasksResponse> {
    return this.request("DescribeMigrationTasks", req, cb)
  }

  /**
     * 更新文件系统吞吐
仅吞吐型支持此接口
     */
  async UpdateFileSystemBandwidthLimit(
    req: UpdateFileSystemBandwidthLimitRequest,
    cb?: (error: string, rep: UpdateFileSystemBandwidthLimitResponse) => void
  ): Promise<UpdateFileSystemBandwidthLimitResponse> {
    return this.request("UpdateFileSystemBandwidthLimit", req, cb)
  }

  /**
   * 设置文件系统配额，提供UID/GID的配额设置的接口（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
   */
  async SetUserQuota(
    req: SetUserQuotaRequest,
    cb?: (error: string, rep: SetUserQuotaResponse) => void
  ): Promise<SetUserQuotaResponse> {
    return this.request("SetUserQuota", req, cb)
  }

  /**
   * 本接口（CreateCfsPGroup）用于创建权限组
   */
  async CreateCfsPGroup(
    req: CreateCfsPGroupRequest,
    cb?: (error: string, rep: CreateCfsPGroupResponse) => void
  ): Promise<CreateCfsPGroupResponse> {
    return this.request("CreateCfsPGroup", req, cb)
  }

  /**
   * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
   */
  async DescribeMountTargets(
    req: DescribeMountTargetsRequest,
    cb?: (error: string, rep: DescribeMountTargetsResponse) => void
  ): Promise<DescribeMountTargetsResponse> {
    return this.request("DescribeMountTargets", req, cb)
  }

  /**
   * 创建数据流动接口
   */
  async CreateDataFlow(
    req: CreateDataFlowRequest,
    cb?: (error: string, rep: CreateDataFlowResponse) => void
  ): Promise<CreateDataFlowResponse> {
    return this.request("CreateDataFlow", req, cb)
  }

  /**
   * 本接口（DeleteCfsPGroup）用于删除权限组，只有未绑定文件系统的权限组才能够被此接口删除。
   */
  async DeleteCfsPGroup(
    req: DeleteCfsPGroupRequest,
    cb?: (error: string, rep: DeleteCfsPGroupResponse) => void
  ): Promise<DeleteCfsPGroupResponse> {
    return this.request("DeleteCfsPGroup", req, cb)
  }

  /**
   * 删除生命周期管理策略
   */
  async DeleteLifecyclePolicy(
    req: DeleteLifecyclePolicyRequest,
    cb?: (error: string, rep: DeleteLifecyclePolicyResponse) => void
  ): Promise<DeleteLifecyclePolicyResponse> {
    return this.request("DeleteLifecyclePolicy", req, cb)
  }

  /**
   * 解除文件系统绑定的快照策略
   */
  async UnbindAutoSnapshotPolicy(
    req: UnbindAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: UnbindAutoSnapshotPolicyResponse) => void
  ): Promise<UnbindAutoSnapshotPolicyResponse> {
    return this.request("UnbindAutoSnapshotPolicy", req, cb)
  }

  /**
   * 下载生命周期任务中文件列表
   */
  async CreateLifecyclePolicyDownloadTask(
    req: CreateLifecyclePolicyDownloadTaskRequest,
    cb?: (error: string, rep: CreateLifecyclePolicyDownloadTaskResponse) => void
  ): Promise<CreateLifecyclePolicyDownloadTaskResponse> {
    return this.request("CreateLifecyclePolicyDownloadTask", req, cb)
  }

  /**
   * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
   */
  async DescribeCfsFileSystemClients(
    req: DescribeCfsFileSystemClientsRequest,
    cb?: (error: string, rep: DescribeCfsFileSystemClientsResponse) => void
  ): Promise<DescribeCfsFileSystemClientsResponse> {
    return this.request("DescribeCfsFileSystemClients", req, cb)
  }

  /**
   * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
   */
  async DescribeCfsServiceStatus(
    req?: DescribeCfsServiceStatusRequest,
    cb?: (error: string, rep: DescribeCfsServiceStatusResponse) => void
  ): Promise<DescribeCfsServiceStatusResponse> {
    return this.request("DescribeCfsServiceStatus", req, cb)
  }

  /**
   * 用于终止迁移任务，可以终止等待中、运行中状态的任务。
   */
  async StopMigrationTask(
    req: StopMigrationTaskRequest,
    cb?: (error: string, rep: StopMigrationTaskResponse) => void
  ): Promise<StopMigrationTaskResponse> {
    return this.request("StopMigrationTask", req, cb)
  }

  /**
   * 用于获取数据源桶列表。
   */
  async DescribeBucketList(
    req: DescribeBucketListRequest,
    cb?: (error: string, rep: DescribeBucketListResponse) => void
  ): Promise<DescribeBucketListResponse> {
    return this.request("DescribeBucketList", req, cb)
  }

  /**
   * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
   */
  async DescribeAvailableZoneInfo(
    req?: DescribeAvailableZoneInfoRequest,
    cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void
  ): Promise<DescribeAvailableZoneInfoResponse> {
    return this.request("DescribeAvailableZoneInfo", req, cb)
  }

  /**
   * 支持主动沉降/预热接口
   */
  async CreateLifecycleDataTask(
    req: CreateLifecycleDataTaskRequest,
    cb?: (error: string, rep: CreateLifecycleDataTaskResponse) => void
  ): Promise<CreateLifecycleDataTaskResponse> {
    return this.request("CreateLifecycleDataTask", req, cb)
  }

  /**
   * 本接口（SignUpCfsService）用于开通CFS服务。
   */
  async SignUpCfsService(
    req?: SignUpCfsServiceRequest,
    cb?: (error: string, rep: SignUpCfsServiceResponse) => void
  ): Promise<SignUpCfsServiceResponse> {
    return this.request("SignUpCfsService", req, cb)
  }

  /**
   * 创建定期快照策略
   */
  async CreateAutoSnapshotPolicy(
    req: CreateAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: CreateAutoSnapshotPolicyResponse) => void
  ): Promise<CreateAutoSnapshotPolicyResponse> {
    return this.request("CreateAutoSnapshotPolicy", req, cb)
  }

  /**
   * 用于删除迁移任务。不支持删除等待中、创建中、运行中、取消中、终止中状态的任务。
   */
  async DeleteMigrationTask(
    req: DeleteMigrationTaskRequest,
    cb?: (error: string, rep: DeleteMigrationTaskResponse) => void
  ): Promise<DeleteMigrationTaskResponse> {
    return this.request("DeleteMigrationTask", req, cb)
  }

  /**
   * 该接口用于对turbo 文件系统扩容使用,该接口只支持扩容不支持缩容。turbo标准型扩容步长是10240GIB，turbo性能型扩容步长是5120GIB
   */
  async ScaleUpFileSystem(
    req: ScaleUpFileSystemRequest,
    cb?: (error: string, rep: ScaleUpFileSystemResponse) => void
  ): Promise<ScaleUpFileSystemResponse> {
    return this.request("ScaleUpFileSystem", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
   */
  async UpdateCfsFileSystemSizeLimit(
    req: UpdateCfsFileSystemSizeLimitRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void
  ): Promise<UpdateCfsFileSystemSizeLimitResponse> {
    return this.request("UpdateCfsFileSystemSizeLimit", req, cb)
  }

  /**
   * 创建文件存储生命周期策略
   */
  async CreateLifecyclePolicy(
    req: CreateLifecyclePolicyRequest,
    cb?: (error: string, rep: CreateLifecyclePolicyResponse) => void
  ): Promise<CreateLifecyclePolicyResponse> {
    return this.request("CreateLifecyclePolicy", req, cb)
  }

  /**
   * 用于添加新文件系统
   */
  async CreateCfsFileSystem(
    req: CreateCfsFileSystemRequest,
    cb?: (error: string, rep: CreateCfsFileSystemResponse) => void
  ): Promise<CreateCfsFileSystemResponse> {
    return this.request("CreateCfsFileSystem", req, cb)
  }

  /**
   * 本接口（DescribeCfsPGroups）用于查询权限组列表。
   */
  async DescribeCfsPGroups(
    req?: DescribeCfsPGroupsRequest,
    cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void
  ): Promise<DescribeCfsPGroupsResponse> {
    return this.request("DescribeCfsPGroups", req, cb)
  }

  /**
   * 文件系统快照概览
   */
  async DescribeCfsSnapshotOverview(
    req?: DescribeCfsSnapshotOverviewRequest,
    cb?: (error: string, rep: DescribeCfsSnapshotOverviewResponse) => void
  ): Promise<DescribeCfsSnapshotOverviewResponse> {
    return this.request("DescribeCfsSnapshotOverview", req, cb)
  }

  /**
   * 查询生命周期管理策略
   */
  async DescribeLifecyclePolicies(
    req: DescribeLifecyclePoliciesRequest,
    cb?: (error: string, rep: DescribeLifecyclePoliciesResponse) => void
  ): Promise<DescribeLifecyclePoliciesResponse> {
    return this.request("DescribeLifecyclePolicies", req, cb)
  }

  /**
   * 查询文件系统配额（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
   */
  async DescribeUserQuota(
    req: DescribeUserQuotaRequest,
    cb?: (error: string, rep: DescribeUserQuotaResponse) => void
  ): Promise<DescribeUserQuotaResponse> {
    return this.request("DescribeUserQuota", req, cb)
  }

  /**
   * 配置生命周期策略关联到的目录列表
   */
  async ApplyPathLifecyclePolicy(
    req: ApplyPathLifecyclePolicyRequest,
    cb?: (error: string, rep: ApplyPathLifecyclePolicyResponse) => void
  ): Promise<ApplyPathLifecyclePolicyResponse> {
    return this.request("ApplyPathLifecyclePolicy", req, cb)
  }

  /**
   * 用来设置文件系统扩容策略，该接口只支持turbo文件系统
   */
  async ModifyFileSystemAutoScaleUpRule(
    req: ModifyFileSystemAutoScaleUpRuleRequest,
    cb?: (error: string, rep: ModifyFileSystemAutoScaleUpRuleResponse) => void
  ): Promise<ModifyFileSystemAutoScaleUpRuleResponse> {
    return this.request("ModifyFileSystemAutoScaleUpRule", req, cb)
  }

  /**
   * 修改数据流动相关参数
   */
  async ModifyDataFlow(
    req: ModifyDataFlowRequest,
    cb?: (error: string, rep: ModifyDataFlowResponse) => void
  ): Promise<ModifyDataFlowResponse> {
    return this.request("ModifyDataFlow", req, cb)
  }

  /**
   * 本接口（UpdateCfsRule）用于更新权限规则。
   */
  async UpdateCfsRule(
    req: UpdateCfsRuleRequest,
    cb?: (error: string, rep: UpdateCfsRuleResponse) => void
  ): Promise<UpdateCfsRuleResponse> {
    return this.request("UpdateCfsRule", req, cb)
  }

  /**
   * 本接口（DescribeCfsFileSystems）用于查询文件系统
   */
  async DescribeCfsFileSystems(
    req: DescribeCfsFileSystemsRequest,
    cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void
  ): Promise<DescribeCfsFileSystemsResponse> {
    return this.request("DescribeCfsFileSystems", req, cb)
  }

  /**
   * 查询文件系统快照列表
   */
  async DescribeCfsSnapshots(
    req: DescribeCfsSnapshotsRequest,
    cb?: (error: string, rep: DescribeCfsSnapshotsResponse) => void
  ): Promise<DescribeCfsSnapshotsResponse> {
    return this.request("DescribeCfsSnapshots", req, cb)
  }

  /**
   * 文件系统绑定快照策略，可以同时绑定多个fs，一个fs 只能跟一个策略绑定
   */
  async BindAutoSnapshotPolicy(
    req: BindAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: BindAutoSnapshotPolicyResponse) => void
  ): Promise<BindAutoSnapshotPolicyResponse> {
    return this.request("BindAutoSnapshotPolicy", req, cb)
  }

  /**
   * 更新文件存储生命周期策略
   */
  async ModifyLifecyclePolicy(
    req: ModifyLifecyclePolicyRequest,
    cb?: (error: string, rep: ModifyLifecyclePolicyResponse) => void
  ): Promise<ModifyLifecyclePolicyResponse> {
    return this.request("ModifyLifecyclePolicy", req, cb)
  }

  /**
   * 本接口（DeleteCfsRule）用于删除权限组规则。
   */
  async DeleteCfsRule(
    req: DeleteCfsRuleRequest,
    cb?: (error: string, rep: DeleteCfsRuleResponse) => void
  ): Promise<DeleteCfsRuleResponse> {
    return this.request("DeleteCfsRule", req, cb)
  }

  /**
   * 删除数据流动
   */
  async DeleteDataFlow(
    req: DeleteDataFlowRequest,
    cb?: (error: string, rep: DeleteDataFlowResponse) => void
  ): Promise<DeleteDataFlowResponse> {
    return this.request("DeleteDataFlow", req, cb)
  }

  /**
   * 用于创建迁移任务。
   */
  async CreateMigrationTask(
    req: CreateMigrationTaskRequest,
    cb?: (error: string, rep: CreateMigrationTaskResponse) => void
  ): Promise<CreateMigrationTaskResponse> {
    return this.request("CreateMigrationTask", req, cb)
  }

  /**
   * 指定条件删除文件系统配额（仅部分Turbo实例能使用，若需要调用请提交工单与我们联系）
   */
  async DeleteUserQuota(
    req: DeleteUserQuotaRequest,
    cb?: (error: string, rep: DeleteUserQuotaResponse) => void
  ): Promise<DeleteUserQuotaResponse> {
    return this.request("DeleteUserQuota", req, cb)
  }

  /**
   * 查询文件系统快照定期策略列表信息
   */
  async DescribeAutoSnapshotPolicies(
    req: DescribeAutoSnapshotPoliciesRequest,
    cb?: (error: string, rep: DescribeAutoSnapshotPoliciesResponse) => void
  ): Promise<DescribeAutoSnapshotPoliciesResponse> {
    return this.request("DescribeAutoSnapshotPolicies", req, cb)
  }

  /**
   * 删除快照定期策略
   */
  async DeleteAutoSnapshotPolicy(
    req: DeleteAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: DeleteAutoSnapshotPolicyResponse) => void
  ): Promise<DeleteAutoSnapshotPolicyResponse> {
    return this.request("DeleteAutoSnapshotPolicy", req, cb)
  }

  /**
   * 终止生命周期任务的接口
   */
  async StopLifecycleDataTask(
    req: StopLifecycleDataTaskRequest,
    cb?: (error: string, rep: StopLifecycleDataTaskResponse) => void
  ): Promise<StopLifecycleDataTaskResponse> {
    return this.request("StopLifecycleDataTask", req, cb)
  }

  /**
   * 创建文件系统快照
   */
  async CreateCfsSnapshot(
    req: CreateCfsSnapshotRequest,
    cb?: (error: string, rep: CreateCfsSnapshotResponse) => void
  ): Promise<CreateCfsSnapshotResponse> {
    return this.request("CreateCfsSnapshot", req, cb)
  }

  /**
   * 更新定期自动快照策略
   */
  async UpdateAutoSnapshotPolicy(
    req: UpdateAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: UpdateAutoSnapshotPolicyResponse) => void
  ): Promise<UpdateAutoSnapshotPolicyResponse> {
    return this.request("UpdateAutoSnapshotPolicy", req, cb)
  }

  /**
   * 文件系统目录操作接口
   */
  async DoDirectoryOperation(
    req: DoDirectoryOperationRequest,
    cb?: (error: string, rep: DoDirectoryOperationResponse) => void
  ): Promise<DoDirectoryOperationResponse> {
    return this.request("DoDirectoryOperation", req, cb)
  }

  /**
   * 查询快照操作日志
   */
  async DescribeSnapshotOperationLogs(
    req: DescribeSnapshotOperationLogsRequest,
    cb?: (error: string, rep: DescribeSnapshotOperationLogsResponse) => void
  ): Promise<DescribeSnapshotOperationLogsResponse> {
    return this.request("DescribeSnapshotOperationLogs", req, cb)
  }

  /**
   * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
   */
  async UpdateCfsFileSystemName(
    req: UpdateCfsFileSystemNameRequest,
    cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void
  ): Promise<UpdateCfsFileSystemNameResponse> {
    return this.request("UpdateCfsFileSystemName", req, cb)
  }

  /**
   * 查询数据流动信息接口
   */
  async DescribeDataFlow(
    req: DescribeDataFlowRequest,
    cb?: (error: string, rep: DescribeDataFlowResponse) => void
  ): Promise<DescribeDataFlowResponse> {
    return this.request("DescribeDataFlow", req, cb)
  }

  /**
   * 本接口（CreateCfsRule）用于创建权限组规则。
   */
  async CreateCfsRule(
    req: CreateCfsRuleRequest,
    cb?: (error: string, rep: CreateCfsRuleResponse) => void
  ): Promise<CreateCfsRuleResponse> {
    return this.request("CreateCfsRule", req, cb)
  }

  /**
   * 创建用于访问文件系统的凭证
   */
  async CreateAccessCert(
    req: CreateAccessCertRequest,
    cb?: (error: string, rep: CreateAccessCertResponse) => void
  ): Promise<CreateAccessCertResponse> {
    return this.request("CreateAccessCert", req, cb)
  }

  /**
   * 本接口（UpdateCfsPGroup）更新权限组信息。
   */
  async UpdateCfsPGroup(
    req: UpdateCfsPGroupRequest,
    cb?: (error: string, rep: UpdateCfsPGroupResponse) => void
  ): Promise<UpdateCfsPGroupResponse> {
    return this.request("UpdateCfsPGroup", req, cb)
  }
}
