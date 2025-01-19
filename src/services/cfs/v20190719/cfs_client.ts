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
  CreateMigrationTaskRequest,
  ScaleUpFileSystemResponse,
  SnapshotStatistics,
  DescribeCfsPGroupsResponse,
  DescribeMountTargetsResponse,
  DescribeSnapshotOperationLogsRequest,
  MigrationTaskInfo,
  FileSystemClient,
  DescribeCfsFileSystemsResponse,
  CreateCfsFileSystemResponse,
  FileSystemInfo,
  BindAutoSnapshotPolicyRequest,
  ModifyFileSystemAutoScaleUpRuleRequest,
  ScaleUpFileSystemRequest,
  CreateCfsPGroupRequest,
  DescribeMigrationTasksResponse,
  DescribeAutoSnapshotPoliciesRequest,
  DescribeAvailableZoneInfoRequest,
  DescribeMountTargetsRequest,
  BindAutoSnapshotPolicyResponse,
  SignUpCfsServiceRequest,
  SignUpCfsServiceResponse,
  AutoSnapshotPolicyInfo,
  DescribeCfsRulesRequest,
  UpdateCfsFileSystemNameRequest,
  DeleteCfsPGroupRequest,
  UpdateCfsPGroupResponse,
  SnapshotOperateLog,
  DeleteAutoSnapshotPolicyRequest,
  DeleteCfsFileSystemResponse,
  UpdateCfsRuleRequest,
  DeleteUserQuotaRequest,
  DescribeAvailableZoneInfoResponse,
  DeleteCfsSnapshotResponse,
  DescribeCfsFileSystemClientsResponse,
  DeleteMountTargetResponse,
  CreateCfsSnapshotRequest,
  DescribeBucketListRequest,
  DeleteCfsRuleRequest,
  UpdateCfsRuleResponse,
  DeleteMigrationTaskResponse,
  UpdateFileSystemBandwidthLimitResponse,
  DescribeSnapshotOperationLogsResponse,
  DeleteCfsFileSystemRequest,
  UpdateFileSystemBandwidthLimitRequest,
  CreateCfsPGroupResponse,
  DescribeCfsServiceStatusRequest,
  DeleteUserQuotaResponse,
  DeleteMigrationTaskRequest,
  PGroup,
  SetUserQuotaRequest,
  CreateAutoSnapshotPolicyResponse,
  ModifyFileSystemAutoScaleUpRuleResponse,
  AvailableType,
  CreateCfsSnapshotResponse,
  UserQuota,
  DeleteMountTargetRequest,
  CreateCfsRuleRequest,
  BucketInfo,
  CreateAccessCertRequest,
  DescribeUserQuotaRequest,
  DescribeBucketListResponse,
  UpdateCfsFileSystemNameResponse,
  DescribeCfsSnapshotOverviewResponse,
  AutoScaleUpRule,
  DeleteCfsSnapshotRequest,
  DescribeCfsFileSystemClientsRequest,
  AvailableProtoStatus,
  DescribeCfsFileSystemsRequest,
  AvailableRegion,
  CreateCfsFileSystemRequest,
  AvailableZone,
  DescribeMigrationTasksRequest,
  Filter,
  UnbindAutoSnapshotPolicyRequest,
  UnbindAutoSnapshotPolicyResponse,
  DescribeCfsServiceStatusResponse,
  PGroupRuleInfo,
  DescribeCfsSnapshotsRequest,
  UpdateCfsFileSystemSizeLimitResponse,
  UpdateAutoSnapshotPolicyRequest,
  UpdateCfsFileSystemSizeLimitRequest,
  DescribeCfsRulesResponse,
  UpdateCfsFileSystemPGroupResponse,
  UpdateAutoSnapshotPolicyResponse,
  FileSystemByPolicy,
  SnapshotInfo,
  MountInfo,
  UpdateCfsFileSystemPGroupRequest,
  CreateMigrationTaskResponse,
  DeleteAutoSnapshotPolicyResponse,
  DeleteCfsRuleResponse,
  UpdateCfsSnapshotAttributeResponse,
  UpdateCfsPGroupRequest,
  CreateAccessCertResponse,
  SetUserQuotaResponse,
  TagInfo,
  DescribeCfsPGroupsRequest,
  DeleteCfsPGroupResponse,
  UpdateCfsSnapshotAttributeRequest,
  DescribeUserQuotaResponse,
  TieringDetailInfo,
  PGroupInfo,
  CreateCfsRuleResponse,
  StopMigrationTaskResponse,
  DescribeCfsSnapshotsResponse,
  StopMigrationTaskRequest,
  DescribeAutoSnapshotPoliciesResponse,
  DescribeCfsSnapshotOverviewRequest,
  CreateAutoSnapshotPolicyRequest,
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
   * 本接口（SignUpCfsService）用于开通CFS服务。
   */
  async SignUpCfsService(
    req?: SignUpCfsServiceRequest,
    cb?: (error: string, rep: SignUpCfsServiceResponse) => void
  ): Promise<SignUpCfsServiceResponse> {
    return this.request("SignUpCfsService", req, cb)
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
   * 本接口（DescribeCfsPGroups）用于查询权限组列表。
   */
  async DescribeCfsPGroups(
    req?: DescribeCfsPGroupsRequest,
    cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void
  ): Promise<DescribeCfsPGroupsResponse> {
    return this.request("DescribeCfsPGroups", req, cb)
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
   * 查询文件系统快照定期策略列表信息
   */
  async DescribeAutoSnapshotPolicies(
    req: DescribeAutoSnapshotPoliciesRequest,
    cb?: (error: string, rep: DescribeAutoSnapshotPoliciesResponse) => void
  ): Promise<DescribeAutoSnapshotPoliciesResponse> {
    return this.request("DescribeAutoSnapshotPolicies", req, cb)
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
   * 本接口（DeleteCfsPGroup）用于删除权限组。
   */
  async DeleteCfsPGroup(
    req: DeleteCfsPGroupRequest,
    cb?: (error: string, rep: DeleteCfsPGroupResponse) => void
  ): Promise<DeleteCfsPGroupResponse> {
    return this.request("DeleteCfsPGroup", req, cb)
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
     * 用于终止迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
  async StopMigrationTask(
    req: StopMigrationTaskRequest,
    cb?: (error: string, rep: StopMigrationTaskResponse) => void
  ): Promise<StopMigrationTaskResponse> {
    return this.request("StopMigrationTask", req, cb)
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
   * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
   */
  async DescribeAvailableZoneInfo(
    req?: DescribeAvailableZoneInfoRequest,
    cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void
  ): Promise<DescribeAvailableZoneInfoResponse> {
    return this.request("DescribeAvailableZoneInfo", req, cb)
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
     * 用于删除迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
  async DeleteMigrationTask(
    req: DeleteMigrationTaskRequest,
    cb?: (error: string, rep: DeleteMigrationTaskResponse) => void
  ): Promise<DeleteMigrationTaskResponse> {
    return this.request("DeleteMigrationTask", req, cb)
  }

  /**
   * 该接口用于对turbo 文件系统扩容使用
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
   * 创建定期快照策略
   */
  async CreateAutoSnapshotPolicy(
    req: CreateAutoSnapshotPolicyRequest,
    cb?: (error: string, rep: CreateAutoSnapshotPolicyResponse) => void
  ): Promise<CreateAutoSnapshotPolicyResponse> {
    return this.request("CreateAutoSnapshotPolicy", req, cb)
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
   * 用于添加新文件系统
   */
  async CreateCfsFileSystem(
    req: CreateCfsFileSystemRequest,
    cb?: (error: string, rep: CreateCfsFileSystemResponse) => void
  ): Promise<CreateCfsFileSystemResponse> {
    return this.request("CreateCfsFileSystem", req, cb)
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
   * 文件系统快照概览
   */
  async DescribeCfsSnapshotOverview(
    req?: DescribeCfsSnapshotOverviewRequest,
    cb?: (error: string, rep: DescribeCfsSnapshotOverviewResponse) => void
  ): Promise<DescribeCfsSnapshotOverviewResponse> {
    return this.request("DescribeCfsSnapshotOverview", req, cb)
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
   * 用来设置文件系统扩容策略
   */
  async ModifyFileSystemAutoScaleUpRule(
    req: ModifyFileSystemAutoScaleUpRuleRequest,
    cb?: (error: string, rep: ModifyFileSystemAutoScaleUpRuleResponse) => void
  ): Promise<ModifyFileSystemAutoScaleUpRuleResponse> {
    return this.request("ModifyFileSystemAutoScaleUpRule", req, cb)
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
   * 本接口（DeleteCfsRule）用于删除权限组规则。
   */
  async DeleteCfsRule(
    req: DeleteCfsRuleRequest,
    cb?: (error: string, rep: DeleteCfsRuleResponse) => void
  ): Promise<DeleteCfsRuleResponse> {
    return this.request("DeleteCfsRule", req, cb)
  }

  /**
     * 用于获取数据源桶列表。
此接口需提交工单，开启白名单之后才能使用。
     */
  async DescribeBucketList(
    req: DescribeBucketListRequest,
    cb?: (error: string, rep: DescribeBucketListResponse) => void
  ): Promise<DescribeBucketListResponse> {
    return this.request("DescribeBucketList", req, cb)
  }

  /**
     * 用于创建迁移任务。
此接口需提交工单，开启白名单之后才能使用。
     */
  async CreateMigrationTask(
    req: CreateMigrationTaskRequest,
    cb?: (error: string, rep: CreateMigrationTaskResponse) => void
  ): Promise<CreateMigrationTaskResponse> {
    return this.request("CreateMigrationTask", req, cb)
  }

  /**
     * 本接口（DeleteMountTarget）用于删除挂载点
说明：2022年6月1日之后创建的CFS文件系统删除时无需单独调用删除挂载点操作，此API仅适用老版本的CFS实例。
     */
  async DeleteMountTarget(
    req: DeleteMountTargetRequest,
    cb?: (error: string, rep: DeleteMountTargetResponse) => void
  ): Promise<DeleteMountTargetResponse> {
    return this.request("DeleteMountTarget", req, cb)
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
   * 本接口（CreateCfsPGroup）用于创建权限组
   */
  async CreateCfsPGroup(
    req: CreateCfsPGroupRequest,
    cb?: (error: string, rep: CreateCfsPGroupResponse) => void
  ): Promise<CreateCfsPGroupResponse> {
    return this.request("CreateCfsPGroup", req, cb)
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
   * 创建文件系统快照
   */
  async CreateCfsSnapshot(
    req: CreateCfsSnapshotRequest,
    cb?: (error: string, rep: CreateCfsSnapshotResponse) => void
  ): Promise<CreateCfsSnapshotResponse> {
    return this.request("CreateCfsSnapshot", req, cb)
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
   * 查询快照操作日志
   */
  async DescribeSnapshotOperationLogs(
    req: DescribeSnapshotOperationLogsRequest,
    cb?: (error: string, rep: DescribeSnapshotOperationLogsResponse) => void
  ): Promise<DescribeSnapshotOperationLogsResponse> {
    return this.request("DescribeSnapshotOperationLogs", req, cb)
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
