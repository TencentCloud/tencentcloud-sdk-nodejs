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
  DescribeCopyPairsDeniedActionsResponse,
  BackupDetail,
  DescribeFileBackupPlansRequest,
  ReportGatewayHeartbeatResponse,
  DescribeCopyPairsRequest,
  DescribeBackupVaultsDeniedActionsRequest,
  AdvancedRetentionPolicy,
  UnbindAutoBackupPolicyRequest,
  DescribeCopyPairsDeniedActionsRequest,
  ModifySitePairAttributeResponse,
  BasicServicesSettings,
  RunSecurityServiceEnabled,
  ModifyCopyPairAttributeRequest,
  BackupPlan,
  FilterModel,
  DiskModel,
  DeleteAutoBackupPoliciesResponse,
  RunCopyPairTasksRequest,
  DeleteFileBackupPlansRequest,
  CommonBackupPoint,
  DescribeBackupVaultsRequest,
  CreateAutoBackupPolicyRequest,
  ModifySitePairAttributeRequest,
  RunCopyPairTasksResponse,
  CrossCloudDetails,
  CreateDisasterRecoveryVpcMappingResponse,
  DisasterRecoveryDrillGroup,
  VaultDeniedAction,
  ReportJobProgressRequest,
  BackupDeniedAction,
  ModifyDrillGroupAttributeRequest,
  ModifyFileBackupAttributeRequest,
  DeleteDisasterRecoverySitePairsResponse,
  DescribeDisasterRecoverySitePairsDeniedActionsResponse,
  ProtectInstance,
  DeleteDrillPairsRequest,
  DescribeFileRestoreTasksRequest,
  DescribeBackupPlansRequest,
  DeleteDrillPairResult,
  DescribeBackupGroupsRequest,
  DescribeBackupGroupRollbackTasksRequest,
  ModifyAutoBackupPolicyAttributeResponse,
  DescribeFileBackupsDeniedActionsRequest,
  ModifyFileBackupPlanRequest,
  RunInstancesWithBackupGroupRequest,
  DeleteDisasterRecoveryProtectGroupsRequest,
  ProtectedResourceStatus,
  CreateBackupGroupRequest,
  CreateSecurityGroupMappingRequest,
  ResourceProtectStat,
  ModifyCopyPairAttributeResponse,
  DescribeBackupGroupsDeniedActionsResponse,
  DescribeVpcMappingsResponse,
  ProtectGroup,
  RunInstancesWithBackupGroupResponse,
  DescribeAutoBackupPoliciesRequest,
  Placement,
  DeleteBackupGroupsResponse,
  BackupInfo,
  DescribeBackupPlansResponse,
  Policy,
  ModifyBackupVaultAttributeResponse,
  DrillPairDeniedAction,
  CreateFileBackupResponse,
  ApplyBackupGroupResponse,
  BackupInstance,
  DescribeFileBackupsRequest,
  DescribeBackupInstancesResponse,
  DescribeCopyPairsResponse,
  DeleteSecurityGroupMappingResponse,
  CreateDisasterRecoverySitePairResponse,
  DeleteBackupVaultsResponse,
  DescribeCommonBackupPointsRequest,
  DescribeFileBackupObjectsRequest,
  CreateDisasterRecoverySitePairRequest,
  DescribeDisksResponse,
  DescribePriceCreateCopyPairsRequest,
  CreateDisasterRecoveryProtectGroupRequest,
  CreateInstanceCopyPairRequest,
  ReportGatewayHeartbeatRequest,
  DeleteDisasterRecoverySitePairsRequest,
  ProtectedResource,
  CopyPairDeniedAction,
  CreateFileBackupRequest,
  DescribeFileBackupObjectsResponse,
  DescribeFileRestoreTasksResponse,
  DescribeFileBackupPlansResponse,
  BackupGroup,
  ModifyDrillPairAttributeResponse,
  DescribeBackupVaultsResponse,
  ModifyBackupVaultAttributeRequest,
  DescribeDrillPairsDeniedActionsRequest,
  CopyPair,
  DescribeDisasterRecoverySupportRegionResponse,
  DrilledResourceStatus,
  BackupResourceInfo,
  ReportJobProgressResponse,
  FileBackupOverview,
  PlanInfo,
  DeleteFileBackupsResponse,
  BindAutoBackupPolicyRequest,
  DescribeDisasterRecoverySitePairsResponse,
  CreateFileBackupPlanResponse,
  CreateFileBackupPlanRequest,
  ReportAgentMetricsResponse,
  ModifyFileBackupAttributeResponse,
  LoginSettings,
  BackupGroupDeniedAction,
  CreateDisasterRecoveryProtectGroupResponse,
  EnhancedService,
  ProtectedResourceOverview,
  BackupGroupRollbackTask,
  CreateBackupGroupResponse,
  SupportZoneRule,
  DescribeDisasterRecoveryOverviewResponse,
  DescribeAutoBackupPoliciesResponse,
  CreateFileRestoreTaskRequest,
  AspInfo,
  TypeCount,
  DescribeFileBackupsDeniedActionsResponse,
  DeniedAction,
  DescribeDisasterRecoveryProtectGroupsRequest,
  BackupVault,
  UnbindAutoBackupPolicyResponse,
  StopCopyPairTasksResponse,
  ResourcePlan,
  CreateInstanceDrillPairsResponse,
  DeleteBackupGroupsRequest,
  CreateInstanceCopyPairResponse,
  DiskInfo,
  FinishFailoverCopyPairsRequest,
  DescribeDisasterRecoverySupportRegionRequest,
  CreateDisasterRecoveryVpcMappingRequest,
  DescribeBackupVaultsDeniedActionsResponse,
  AutoBackupPolicy,
  RestoreTask,
  CreateFileRestoreTaskResponse,
  ModifyDrillPairAttributeRequest,
  CreateAutoBackupPolicyResponse,
  DescribeDisasterRecoveryProtectGroupsResponse,
  DescribeSecurityGroupMappingsRequest,
  CreateBackupVaultRequest,
  DeleteCopyPairsRequest,
  DeleteSecurityGroupMappingRequest,
  CreateInstanceModel,
  FileInfo,
  DrillPair,
  DescribeDisasterRecoveryOverviewRequest,
  ModifyAutoBackupPolicyAttributeRequest,
  DeleteCopyPairsResponse,
  DescribeDisasterRecoverySitePairsRequest,
  DeleteBackupVaultsRequest,
  DeleteDisasterRecoveryVpcMappingRequest,
  ProtectGroupDeniedAction,
  DescribeDisksRequest,
  CreateInstanceDrillPairsRequest,
  DeleteFileBackupPlansResponse,
  DescribeBackupGroupsDeniedActionsRequest,
  FinishFailoverCopyPairsResponse,
  DescribeJobsRequest,
  ModifyFileBackupPlanResponse,
  ModifyBackupAttributeRequest,
  DescribeBackupInstancesRequest,
  DeleteDisasterRecoveryProtectGroupsResponse,
  ModifyBackupAttributeResponse,
  ModifyProtectGroupAttributeRequest,
  DescribeProtectedInstancesResponse,
  CreateBackupVaultResponse,
  InstanceBackupOverview,
  DescribeDrillPairsDeniedActionsResponse,
  DescribeProtectGroupsDeniedActionsRequest,
  SitePairDeniedAction,
  CreateSecurityGroupMappingResponse,
  ApplyBackupGroupRequest,
  DeleteDisasterRecoveryVpcMappingResponse,
  DescribeProtectGroupsDeniedActionsResponse,
  StopCopyPairTasksRequest,
  CopyPairPriceDetail,
  DeleteFileBackupsRequest,
  DiskCopyPairForCvm,
  DescribeDrillPairsResponse,
  ModifyDrillGroupAttributeResponse,
  DescribeDrillPairsRequest,
  DeleteAutoBackupPoliciesRequest,
  SecurityGroupMapping,
  RunFailoverCopyPairsResponse,
  ModifyProtectGroupAttributeResponse,
  DescribeDisasterRecoveryDrillGroupsRequest,
  DescribeBackupGroupsResponse,
  DescribeDisasterRecoveryDrillGroupsResponse,
  DescribeBackupOverviewGeneralRequest,
  BindAutoBackupPolicyResponse,
  FlowControlRule,
  SitePair,
  SupportRegionInfo,
  RunFailoverCopyPairsRequest,
  DescribeFileBackupsResponse,
  AutomationServiceEnabled,
  DescribeJobsResponse,
  BackupPolicyOverview,
  DisasterRecoveryOverview,
  DescribeBackupGroupRollbackTasksResponse,
  VirtualPrivateCloud,
  DescribeSecurityGroupMappingsResponse,
  DeleteDrillPairsResponse,
  DescribeVpcMappingsRequest,
  CopyPairPrice,
  BackupVaultOverview,
  DescribeBackupOverviewGeneralResponse,
  ApplyDisk,
  VpcMapping,
  ReportAgentMetricsRequest,
  InternetAccessible,
  DescribeProtectedInstancesRequest,
  DescribeDisasterRecoverySitePairsDeniedActionsRequest,
  DescribeCommonBackupPointsResponse,
  InstanceChargePrepaid,
  DescribePriceCreateCopyPairsResponse,
} from "./bdrc_models"

/**
 * bdrc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bdrc.tencentcloudapi.com", "2026-03-30", clientConfig)
  }

  /**
   * 本接口用来浏览已有受保护实例列表
   */
  async DescribeBackupInstances(
    req: DescribeBackupInstancesRequest,
    cb?: (error: string, rep: DescribeBackupInstancesResponse) => void
  ): Promise<DescribeBackupInstancesResponse> {
    return this.request("DescribeBackupInstances", req, cb)
  }

  /**
   * 查询演练操作掩码
   */
  async DescribeDrillPairsDeniedActions(
    req: DescribeDrillPairsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeDrillPairsDeniedActionsResponse) => void
  ): Promise<DescribeDrillPairsDeniedActionsResponse> {
    return this.request("DescribeDrillPairsDeniedActions", req, cb)
  }

  /**
   * 本接口用来查询容灾保护组
   */
  async DescribeDisasterRecoveryProtectGroups(
    req: DescribeDisasterRecoveryProtectGroupsRequest,
    cb?: (error: string, rep: DescribeDisasterRecoveryProtectGroupsResponse) => void
  ): Promise<DescribeDisasterRecoveryProtectGroupsResponse> {
    return this.request("DescribeDisasterRecoveryProtectGroups", req, cb)
  }

  /**
   * 修改容灾站点对
   */
  async ModifySitePairAttribute(
    req: ModifySitePairAttributeRequest,
    cb?: (error: string, rep: ModifySitePairAttributeResponse) => void
  ): Promise<ModifySitePairAttributeResponse> {
    return this.request("ModifySitePairAttribute", req, cb)
  }

  /**
   * 查询备份库操作掩码
   */
  async DescribeBackupVaultsDeniedActions(
    req: DescribeBackupVaultsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeBackupVaultsDeniedActionsResponse) => void
  ): Promise<DescribeBackupVaultsDeniedActionsResponse> {
    return this.request("DescribeBackupVaultsDeniedActions", req, cb)
  }

  /**
   * 查询共同备份点信息
   */
  async DescribeCommonBackupPoints(
    req: DescribeCommonBackupPointsRequest,
    cb?: (error: string, rep: DescribeCommonBackupPointsResponse) => void
  ): Promise<DescribeCommonBackupPointsResponse> {
    return this.request("DescribeCommonBackupPoints", req, cb)
  }

  /**
   * 删除备份库
   */
  async DeleteBackupVaults(
    req: DeleteBackupVaultsRequest,
    cb?: (error: string, rep: DeleteBackupVaultsResponse) => void
  ): Promise<DeleteBackupVaultsResponse> {
    return this.request("DeleteBackupVaults", req, cb)
  }

  /**
   * 查询指定容灾站点对当前不允许执行的操作列表（操作掩码）。前端在展示容灾策略操作菜单时，可基于该接口返回结果灰化或屏蔽相应入口，并向用户提示原因（错误码 + 错误信息）。
   */
  async DescribeDisasterRecoverySitePairsDeniedActions(
    req: DescribeDisasterRecoverySitePairsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeDisasterRecoverySitePairsDeniedActionsResponse) => void
  ): Promise<DescribeDisasterRecoverySitePairsDeniedActionsResponse> {
    return this.request("DescribeDisasterRecoverySitePairsDeniedActions", req, cb)
  }

  /**
   * 删除备份组
   */
  async ModifyBackupAttribute(
    req: ModifyBackupAttributeRequest,
    cb?: (error: string, rep: ModifyBackupAttributeResponse) => void
  ): Promise<ModifyBackupAttributeResponse> {
    return this.request("ModifyBackupAttribute", req, cb)
  }

  /**
   * 本接口用于删除站点对已添加的安全组映射
   */
  async DeleteSecurityGroupMapping(
    req: DeleteSecurityGroupMappingRequest,
    cb?: (error: string, rep: DeleteSecurityGroupMappingResponse) => void
  ): Promise<DeleteSecurityGroupMappingResponse> {
    return this.request("DeleteSecurityGroupMapping", req, cb)
  }

  /**
   * 本接口用于删除容灾复制对
   */
  async DeleteCopyPairs(
    req: DeleteCopyPairsRequest,
    cb?: (error: string, rep: DeleteCopyPairsResponse) => void
  ): Promise<DeleteCopyPairsResponse> {
    return this.request("DeleteCopyPairs", req, cb)
  }

  /**
   * 故障切换
   */
  async RunFailoverCopyPairs(
    req: RunFailoverCopyPairsRequest,
    cb?: (error: string, rep: RunFailoverCopyPairsResponse) => void
  ): Promise<RunFailoverCopyPairsResponse> {
    return this.request("RunFailoverCopyPairs", req, cb)
  }

  /**
   * 本接口用来浏览已有备份目录/文件内容
   */
  async DescribeFileBackupObjects(
    req: DescribeFileBackupObjectsRequest,
    cb?: (error: string, rep: DescribeFileBackupObjectsResponse) => void
  ): Promise<DescribeFileBackupObjectsResponse> {
    return this.request("DescribeFileBackupObjects", req, cb)
  }

  /**
   * 本接口用来查询备份操作掩码
   */
  async DescribeFileBackupsDeniedActions(
    req: DescribeFileBackupsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeFileBackupsDeniedActionsResponse) => void
  ): Promise<DescribeFileBackupsDeniedActionsResponse> {
    return this.request("DescribeFileBackupsDeniedActions", req, cb)
  }

  /**
   * 本接口用于上报Agent指标信息
   */
  async ReportAgentMetrics(
    req?: ReportAgentMetricsRequest,
    cb?: (error: string, rep: ReportAgentMetricsResponse) => void
  ): Promise<ReportAgentMetricsResponse> {
    return this.request("ReportAgentMetrics", req, cb)
  }

  /**
   * 查询备份组恢复任务详情
   */
  async DescribeBackupGroupRollbackTasks(
    req: DescribeBackupGroupRollbackTasksRequest,
    cb?: (error: string, rep: DescribeBackupGroupRollbackTasksResponse) => void
  ): Promise<DescribeBackupGroupRollbackTasksResponse> {
    return this.request("DescribeBackupGroupRollbackTasks", req, cb)
  }

  /**
   * 查询容灾资源概览
   */
  async DescribeDisasterRecoveryOverview(
    req: DescribeDisasterRecoveryOverviewRequest,
    cb?: (error: string, rep: DescribeDisasterRecoveryOverviewResponse) => void
  ): Promise<DescribeDisasterRecoveryOverviewResponse> {
    return this.request("DescribeDisasterRecoveryOverview", req, cb)
  }

  /**
   * 查询备份概览信息
   */
  async DescribeBackupOverviewGeneral(
    req: DescribeBackupOverviewGeneralRequest,
    cb?: (error: string, rep: DescribeBackupOverviewGeneralResponse) => void
  ): Promise<DescribeBackupOverviewGeneralResponse> {
    return this.request("DescribeBackupOverviewGeneral", req, cb)
  }

  /**
   * 查询定期备份策略列表
   */
  async DescribeAutoBackupPolicies(
    req: DescribeAutoBackupPoliciesRequest,
    cb?: (error: string, rep: DescribeAutoBackupPoliciesResponse) => void
  ): Promise<DescribeAutoBackupPoliciesResponse> {
    return this.request("DescribeAutoBackupPolicies", req, cb)
  }

  /**
   * 本接口用来查询容灾站点对
   */
  async DescribeDisasterRecoverySitePairs(
    req: DescribeDisasterRecoverySitePairsRequest,
    cb?: (error: string, rep: DescribeDisasterRecoverySitePairsResponse) => void
  ): Promise<DescribeDisasterRecoverySitePairsResponse> {
    return this.request("DescribeDisasterRecoverySitePairs", req, cb)
  }

  /**
   * 将实例从备份策略上解绑
   */
  async UnbindAutoBackupPolicy(
    req?: UnbindAutoBackupPolicyRequest,
    cb?: (error: string, rep: UnbindAutoBackupPolicyResponse) => void
  ): Promise<UnbindAutoBackupPolicyResponse> {
    return this.request("UnbindAutoBackupPolicy", req, cb)
  }

  /**
   * 本接口用来浏览已有受保护实例列表
   */
  async DescribeProtectedInstances(
    req: DescribeProtectedInstancesRequest,
    cb?: (error: string, rep: DescribeProtectedInstancesResponse) => void
  ): Promise<DescribeProtectedInstancesResponse> {
    return this.request("DescribeProtectedInstances", req, cb)
  }

  /**
   * 本接口用于为站点对新增安全组映射，生产端实例绑定的安全组为源端，需要为每个生产端实例绑定的安全组建立映射，在创建复制对时，会自动以映射后的目标安全组作为容灾端实例绑定的安全组。
   */
  async CreateSecurityGroupMapping(
    req: CreateSecurityGroupMappingRequest,
    cb?: (error: string, rep: CreateSecurityGroupMappingResponse) => void
  ): Promise<CreateSecurityGroupMappingResponse> {
    return this.request("CreateSecurityGroupMapping", req, cb)
  }

  /**
   * 修改容灾保护组
   */
  async ModifyProtectGroupAttribute(
    req: ModifyProtectGroupAttributeRequest,
    cb?: (error: string, rep: ModifyProtectGroupAttributeResponse) => void
  ): Promise<ModifyProtectGroupAttributeResponse> {
    return this.request("ModifyProtectGroupAttribute", req, cb)
  }

  /**
   * 本接口用于删除容灾站点对vpc映射信息
   */
  async DeleteDisasterRecoveryVpcMapping(
    req: DeleteDisasterRecoveryVpcMappingRequest,
    cb?: (error: string, rep: DeleteDisasterRecoveryVpcMappingResponse) => void
  ): Promise<DeleteDisasterRecoveryVpcMappingResponse> {
    return this.request("DeleteDisasterRecoveryVpcMapping", req, cb)
  }

  /**
   * 修改备份库信息
   */
  async ModifyBackupVaultAttribute(
    req: ModifyBackupVaultAttributeRequest,
    cb?: (error: string, rep: ModifyBackupVaultAttributeResponse) => void
  ): Promise<ModifyBackupVaultAttributeResponse> {
    return this.request("ModifyBackupVaultAttribute", req, cb)
  }

  /**
   * 本接口用于Agent心跳上报
   */
  async ReportGatewayHeartbeat(
    req?: ReportGatewayHeartbeatRequest,
    cb?: (error: string, rep: ReportGatewayHeartbeatResponse) => void
  ): Promise<ReportGatewayHeartbeatResponse> {
    return this.request("ReportGatewayHeartbeat", req, cb)
  }

  /**
   * 备份组新建云服务器
   */
  async RunInstancesWithBackupGroup(
    req: RunInstancesWithBackupGroupRequest,
    cb?: (error: string, rep: RunInstancesWithBackupGroupResponse) => void
  ): Promise<RunInstancesWithBackupGroupResponse> {
    return this.request("RunInstancesWithBackupGroup", req, cb)
  }

  /**
   * 修改备份策略
   */
  async ModifyAutoBackupPolicyAttribute(
    req: ModifyAutoBackupPolicyAttributeRequest,
    cb?: (error: string, rep: ModifyAutoBackupPolicyAttributeResponse) => void
  ): Promise<ModifyAutoBackupPolicyAttributeResponse> {
    return this.request("ModifyAutoBackupPolicyAttribute", req, cb)
  }

  /**
   * 查询复制对掩码
   */
  async DescribeCopyPairsDeniedActions(
    req: DescribeCopyPairsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeCopyPairsDeniedActionsResponse) => void
  ): Promise<DescribeCopyPairsDeniedActionsResponse> {
    return this.request("DescribeCopyPairsDeniedActions", req, cb)
  }

  /**
   * 查询保护组操作掩码
   */
  async DescribeProtectGroupsDeniedActions(
    req: DescribeProtectGroupsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeProtectGroupsDeniedActionsResponse) => void
  ): Promise<DescribeProtectGroupsDeniedActionsResponse> {
    return this.request("DescribeProtectGroupsDeniedActions", req, cb)
  }

  /**
   * 本接口用于创建容灾站点VPC网络映射
   */
  async CreateDisasterRecoveryVpcMapping(
    req: CreateDisasterRecoveryVpcMappingRequest,
    cb?: (error: string, rep: CreateDisasterRecoveryVpcMappingResponse) => void
  ): Promise<CreateDisasterRecoveryVpcMappingResponse> {
    return this.request("CreateDisasterRecoveryVpcMapping", req, cb)
  }

  /**
   * 修改演练组
   */
  async ModifyDrillGroupAttribute(
    req: ModifyDrillGroupAttributeRequest,
    cb?: (error: string, rep: ModifyDrillGroupAttributeResponse) => void
  ): Promise<ModifyDrillGroupAttributeResponse> {
    return this.request("ModifyDrillGroupAttribute", req, cb)
  }

  /**
   * 本接口用于创建文件备份点
   */
  async CreateFileBackup(
    req: CreateFileBackupRequest,
    cb?: (error: string, rep: CreateFileBackupResponse) => void
  ): Promise<CreateFileBackupResponse> {
    return this.request("CreateFileBackup", req, cb)
  }

  /**
   * 启动复制对
   */
  async RunCopyPairTasks(
    req: RunCopyPairTasksRequest,
    cb?: (error: string, rep: RunCopyPairTasksResponse) => void
  ): Promise<RunCopyPairTasksResponse> {
    return this.request("RunCopyPairTasks", req, cb)
  }

  /**
   * 回滚备份组
   */
  async ApplyBackupGroup(
    req: ApplyBackupGroupRequest,
    cb?: (error: string, rep: ApplyBackupGroupResponse) => void
  ): Promise<ApplyBackupGroupResponse> {
    return this.request("ApplyBackupGroup", req, cb)
  }

  /**
   * 删除备份组
   */
  async DeleteBackupGroups(
    req: DeleteBackupGroupsRequest,
    cb?: (error: string, rep: DeleteBackupGroupsResponse) => void
  ): Promise<DeleteBackupGroupsResponse> {
    return this.request("DeleteBackupGroups", req, cb)
  }

  /**
   * 本接口用来浏览已有备份点详情
   */
  async DescribeFileBackups(
    req: DescribeFileBackupsRequest,
    cb?: (error: string, rep: DescribeFileBackupsResponse) => void
  ): Promise<DescribeFileBackupsResponse> {
    return this.request("DescribeFileBackups", req, cb)
  }

  /**
   * 修改文件备份信息
   */
  async ModifyFileBackupAttribute(
    req: ModifyFileBackupAttributeRequest,
    cb?: (error: string, rep: ModifyFileBackupAttributeResponse) => void
  ): Promise<ModifyFileBackupAttributeResponse> {
    return this.request("ModifyFileBackupAttribute", req, cb)
  }

  /**
   * 本接口用来查询容灾复制对
   */
  async DescribeDisasterRecoveryDrillGroups(
    req: DescribeDisasterRecoveryDrillGroupsRequest,
    cb?: (error: string, rep: DescribeDisasterRecoveryDrillGroupsResponse) => void
  ): Promise<DescribeDisasterRecoveryDrillGroupsResponse> {
    return this.request("DescribeDisasterRecoveryDrillGroups", req, cb)
  }

  /**
   * 创建恢复任务。
   */
  async CreateFileRestoreTask(
    req: CreateFileRestoreTaskRequest,
    cb?: (error: string, rep: CreateFileRestoreTaskResponse) => void
  ): Promise<CreateFileRestoreTaskResponse> {
    return this.request("CreateFileRestoreTask", req, cb)
  }

  /**
   * 本接口用于上报Agent任务信息
   */
  async ReportJobProgress(
    req?: ReportJobProgressRequest,
    cb?: (error: string, rep: ReportJobProgressResponse) => void
  ): Promise<ReportJobProgressResponse> {
    return this.request("ReportJobProgress", req, cb)
  }

  /**
   * 删除备份计划
   */
  async DeleteFileBackupPlans(
    req: DeleteFileBackupPlansRequest,
    cb?: (error: string, rep: DeleteFileBackupPlansResponse) => void
  ): Promise<DeleteFileBackupPlansResponse> {
    return this.request("DeleteFileBackupPlans", req, cb)
  }

  /**
   * 创建备份策略
   */
  async CreateAutoBackupPolicy(
    req: CreateAutoBackupPolicyRequest,
    cb?: (error: string, rep: CreateAutoBackupPolicyResponse) => void
  ): Promise<CreateAutoBackupPolicyResponse> {
    return this.request("CreateAutoBackupPolicy", req, cb)
  }

  /**
   * 创建备份库
   */
  async CreateBackupVault(
    req: CreateBackupVaultRequest,
    cb?: (error: string, rep: CreateBackupVaultResponse) => void
  ): Promise<CreateBackupVaultResponse> {
    return this.request("CreateBackupVault", req, cb)
  }

  /**
   * 删除备份策略
   */
  async DeleteAutoBackupPolicies(
    req: DeleteAutoBackupPoliciesRequest,
    cb?: (error: string, rep: DeleteAutoBackupPoliciesResponse) => void
  ): Promise<DeleteAutoBackupPoliciesResponse> {
    return this.request("DeleteAutoBackupPolicies", req, cb)
  }

  /**
   * 本接口用来浏览已有备份计划内容
   */
  async DescribeFileBackupPlans(
    req: DescribeFileBackupPlansRequest,
    cb?: (error: string, rep: DescribeFileBackupPlansResponse) => void
  ): Promise<DescribeFileBackupPlansResponse> {
    return this.request("DescribeFileBackupPlans", req, cb)
  }

  /**
   * 创建cvm演练
   */
  async CreateInstanceDrillPairs(
    req: CreateInstanceDrillPairsRequest,
    cb?: (error: string, rep: CreateInstanceDrillPairsResponse) => void
  ): Promise<CreateInstanceDrillPairsResponse> {
    return this.request("CreateInstanceDrillPairs", req, cb)
  }

  /**
   * 本接口用于删除容灾保护组
   */
  async DeleteDisasterRecoveryProtectGroups(
    req: DeleteDisasterRecoveryProtectGroupsRequest,
    cb?: (error: string, rep: DeleteDisasterRecoveryProtectGroupsResponse) => void
  ): Promise<DeleteDisasterRecoveryProtectGroupsResponse> {
    return this.request("DeleteDisasterRecoveryProtectGroups", req, cb)
  }

  /**
   * 本接口用于修改已有的备份计划配置
   */
  async ModifyFileBackupPlan(
    req: ModifyFileBackupPlanRequest,
    cb?: (error: string, rep: ModifyFileBackupPlanResponse) => void
  ): Promise<ModifyFileBackupPlanResponse> {
    return this.request("ModifyFileBackupPlan", req, cb)
  }

  /**
   * 将实例绑定到备份策略上
   */
  async BindAutoBackupPolicy(
    req: BindAutoBackupPolicyRequest,
    cb?: (error: string, rep: BindAutoBackupPolicyResponse) => void
  ): Promise<BindAutoBackupPolicyResponse> {
    return this.request("BindAutoBackupPolicy", req, cb)
  }

  /**
   * 查询演练对列表
   */
  async DescribeDrillPairs(
    req: DescribeDrillPairsRequest,
    cb?: (error: string, rep: DescribeDrillPairsResponse) => void
  ): Promise<DescribeDrillPairsResponse> {
    return this.request("DescribeDrillPairs", req, cb)
  }

  /**
   * 查询备份恢复任务列表
   */
  async DescribeFileRestoreTasks(
    req: DescribeFileRestoreTasksRequest,
    cb?: (error: string, rep: DescribeFileRestoreTasksResponse) => void
  ): Promise<DescribeFileRestoreTasksResponse> {
    return this.request("DescribeFileRestoreTasks", req, cb)
  }

  /**
   * 本接口用于创建容灾保护组
   */
  async CreateDisasterRecoveryProtectGroup(
    req: CreateDisasterRecoveryProtectGroupRequest,
    cb?: (error: string, rep: CreateDisasterRecoveryProtectGroupResponse) => void
  ): Promise<CreateDisasterRecoveryProtectGroupResponse> {
    return this.request("CreateDisasterRecoveryProtectGroup", req, cb)
  }

  /**
   * 本接口用于创建备份计划
   */
  async CreateFileBackupPlan(
    req: CreateFileBackupPlanRequest,
    cb?: (error: string, rep: CreateFileBackupPlanResponse) => void
  ): Promise<CreateFileBackupPlanResponse> {
    return this.request("CreateFileBackupPlan", req, cb)
  }

  /**
   * 查询备份库信息
   */
  async DescribeBackupVaults(
    req: DescribeBackupVaultsRequest,
    cb?: (error: string, rep: DescribeBackupVaultsResponse) => void
  ): Promise<DescribeBackupVaultsResponse> {
    return this.request("DescribeBackupVaults", req, cb)
  }

  /**
   * 本接口（DescribePriceCreateCopyPairs）用于查询创建容灾复制对的价格。支持批量询价，入参为每个复制对的盘容量数组，返回与入参一一对应的后付费每小时价格。
   */
  async DescribePriceCreateCopyPairs(
    req: DescribePriceCreateCopyPairsRequest,
    cb?: (error: string, rep: DescribePriceCreateCopyPairsResponse) => void
  ): Promise<DescribePriceCreateCopyPairsResponse> {
    return this.request("DescribePriceCreateCopyPairs", req, cb)
  }

  /**
   * 本接口用来查询站点对的vpc映射信息
   */
  async DescribeVpcMappings(
    req: DescribeVpcMappingsRequest,
    cb?: (error: string, rep: DescribeVpcMappingsResponse) => void
  ): Promise<DescribeVpcMappingsResponse> {
    return this.request("DescribeVpcMappings", req, cb)
  }

  /**
   * 创建备份组
   */
  async CreateBackupGroup(
    req: CreateBackupGroupRequest,
    cb?: (error: string, rep: CreateBackupGroupResponse) => void
  ): Promise<CreateBackupGroupResponse> {
    return this.request("CreateBackupGroup", req, cb)
  }

  /**
   * 完成切换
   */
  async FinishFailoverCopyPairs(
    req: FinishFailoverCopyPairsRequest,
    cb?: (error: string, rep: FinishFailoverCopyPairsResponse) => void
  ): Promise<FinishFailoverCopyPairsResponse> {
    return this.request("FinishFailoverCopyPairs", req, cb)
  }

  /**
   * 停止复制对
   */
  async StopCopyPairTasks(
    req: StopCopyPairTasksRequest,
    cb?: (error: string, rep: StopCopyPairTasksResponse) => void
  ): Promise<StopCopyPairTasksResponse> {
    return this.request("StopCopyPairTasks", req, cb)
  }

  /**
   * 修改容灾复制对
   */
  async ModifyCopyPairAttribute(
    req: ModifyCopyPairAttributeRequest,
    cb?: (error: string, rep: ModifyCopyPairAttributeResponse) => void
  ): Promise<ModifyCopyPairAttributeResponse> {
    return this.request("ModifyCopyPairAttribute", req, cb)
  }

  /**
   * 查询备份组列表
   */
  async DescribeBackupGroups(
    req: DescribeBackupGroupsRequest,
    cb?: (error: string, rep: DescribeBackupGroupsResponse) => void
  ): Promise<DescribeBackupGroupsResponse> {
    return this.request("DescribeBackupGroups", req, cb)
  }

  /**
   * 本接口用来查询容灾复制对
   */
  async DescribeCopyPairs(
    req: DescribeCopyPairsRequest,
    cb?: (error: string, rep: DescribeCopyPairsResponse) => void
  ): Promise<DescribeCopyPairsResponse> {
    return this.request("DescribeCopyPairs", req, cb)
  }

  /**
   * 查询操作掩码
   */
  async DescribeBackupGroupsDeniedActions(
    req: DescribeBackupGroupsDeniedActionsRequest,
    cb?: (error: string, rep: DescribeBackupGroupsDeniedActionsResponse) => void
  ): Promise<DescribeBackupGroupsDeniedActionsResponse> {
    return this.request("DescribeBackupGroupsDeniedActions", req, cb)
  }

  /**
   * 本接口用于创建CVM复制对
   */
  async CreateInstanceCopyPair(
    req: CreateInstanceCopyPairRequest,
    cb?: (error: string, rep: CreateInstanceCopyPairResponse) => void
  ): Promise<CreateInstanceCopyPairResponse> {
    return this.request("CreateInstanceCopyPair", req, cb)
  }

  /**
   * 删除演练对/演练组
   */
  async DeleteDrillPairs(
    req: DeleteDrillPairsRequest,
    cb?: (error: string, rep: DeleteDrillPairsResponse) => void
  ): Promise<DeleteDrillPairsResponse> {
    return this.request("DeleteDrillPairs", req, cb)
  }

  /**
   * 本接口用于Agent查询相关Agent任务信息
   */
  async DescribeJobs(
    req?: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
  }

  /**
   * 修改演练
   */
  async ModifyDrillPairAttribute(
    req: ModifyDrillPairAttributeRequest,
    cb?: (error: string, rep: ModifyDrillPairAttributeResponse) => void
  ): Promise<ModifyDrillPairAttributeResponse> {
    return this.request("ModifyDrillPairAttribute", req, cb)
  }

  /**
   * 本接口用来查询容灾云硬盘的详情，如系统盘的镜像格式。
   */
  async DescribeDisks(
    req: DescribeDisksRequest,
    cb?: (error: string, rep: DescribeDisksResponse) => void
  ): Promise<DescribeDisksResponse> {
    return this.request("DescribeDisks", req, cb)
  }

  /**
   * 查询当前地域支持容灾的生产地域配置列表
   */
  async DescribeDisasterRecoverySupportRegion(
    req: DescribeDisasterRecoverySupportRegionRequest,
    cb?: (error: string, rep: DescribeDisasterRecoverySupportRegionResponse) => void
  ): Promise<DescribeDisasterRecoverySupportRegionResponse> {
    return this.request("DescribeDisasterRecoverySupportRegion", req, cb)
  }

  /**
   * 查询整机备份计划
   */
  async DescribeBackupPlans(
    req: DescribeBackupPlansRequest,
    cb?: (error: string, rep: DescribeBackupPlansResponse) => void
  ): Promise<DescribeBackupPlansResponse> {
    return this.request("DescribeBackupPlans", req, cb)
  }

  /**
   * 删除容灾站点对
   */
  async DeleteDisasterRecoverySitePairs(
    req: DeleteDisasterRecoverySitePairsRequest,
    cb?: (error: string, rep: DeleteDisasterRecoverySitePairsResponse) => void
  ): Promise<DeleteDisasterRecoverySitePairsResponse> {
    return this.request("DeleteDisasterRecoverySitePairs", req, cb)
  }

  /**
   * 删除文件备份点
   */
  async DeleteFileBackups(
    req?: DeleteFileBackupsRequest,
    cb?: (error: string, rep: DeleteFileBackupsResponse) => void
  ): Promise<DeleteFileBackupsResponse> {
    return this.request("DeleteFileBackups", req, cb)
  }

  /**
   * 本接口用于查询安全组映射列表
   */
  async DescribeSecurityGroupMappings(
    req: DescribeSecurityGroupMappingsRequest,
    cb?: (error: string, rep: DescribeSecurityGroupMappingsResponse) => void
  ): Promise<DescribeSecurityGroupMappingsResponse> {
    return this.request("DescribeSecurityGroupMappings", req, cb)
  }

  /**
   * 创建容灾站点对
   */
  async CreateDisasterRecoverySitePair(
    req: CreateDisasterRecoverySitePairRequest,
    cb?: (error: string, rep: CreateDisasterRecoverySitePairResponse) => void
  ): Promise<CreateDisasterRecoverySitePairResponse> {
    return this.request("CreateDisasterRecoverySitePair", req, cb)
  }
}
