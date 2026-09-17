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

/**
 * DescribeCopyPairsDeniedActions返回参数结构体
 */
export interface DescribeCopyPairsDeniedActionsResponse {
  /**
   * 复制对操作掩码列表，返回每个复制对被禁止执行的操作
   */
  CopyPairDeniedActionSet?: Array<CopyPairDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份详情
 */
export interface BackupDetail {
  /**
   * 备份组ID
   */
  BackupId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 备份策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupPolicyId?: string
  /**
   * 备份和云盘绑定关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupBindDisk?: Array<ApplyDisk>
}

/**
 * DescribeFileBackupPlans请求参数结构体
 */
export interface DescribeFileBackupPlansRequest {
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序字段
   */
  OrderField?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 过滤条件。支持: instance-id, plan-id, plan-name, status, auto-backup-policy-id
   */
  Filters?: Array<FilterModel>
}

/**
 * ReportGatewayHeartbeat返回参数结构体
 */
export interface ReportGatewayHeartbeatResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCopyPairs请求参数结构体
 */
export interface DescribeCopyPairsRequest {
  /**
   * <p>要查询复制对的类型，可选值：DISK、INSTANCE、CFS</p>
   */
  CopyPairType: string
  /**
   * <p>要查询复制对ID列表</p>
   */
  CopyPairIds?: Array<string>
  /**
   * <p>过滤条件，详见过滤条件表。支持的Name：disaster-recovery-site-pair-id、target-resource-id、source-resource-id、copy-pair-id、copy-pair-name</p>
   */
  Filters?: Array<FilterModel>
  /**
   * <p>偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认为20，最大值为100。</p>
   */
  Limit?: number
  /**
   * <p>输出结果按升序还是降序，可选值：ASC、DESC</p>
   */
  Order?: string
  /**
   * <p>输出结果的排序字段，可选值：CREATE_TIME</p>
   */
  OrderField?: string
  /**
   * <p>是否要查询保护时间点列表，默认 false。当设置为 true 时，必须同时传入 CopyPairIds 参数。</p>
   */
  QueryProtectionTime?: boolean
  /**
   * <p>是否查询跨云+非跨云全部复制对，默认 false</p>
   */
  GetAllCopyPair?: boolean
  /**
   * <p>是否要查询 CVM 创建参数（仅对延迟创建模式且目标 CVM 未创建的复制对生效），默认为true。为 true 时，每条 deferred_create=1 AND target_cvm_created=0 的 CVM 复制对出参会附带 CvmCreateParams 字段</p>
   */
  QueryCvmCreateParams?: boolean
  /**
   * <p>复制对创建来源过滤。不传则查询所有；传 LOCAL 仅查本端创建的复制对，传 PEER 仅查对端创建的复制对。</p><p>枚举值：</p><ul><li>LOCAL： 仅查本端创建的复制对</li><li>PEER： 仅查对端创建的复制对</li></ul>
   */
  CreateFrom?: string
}

/**
 * DescribeBackupVaultsDeniedActions请求参数结构体
 */
export interface DescribeBackupVaultsDeniedActionsRequest {
  /**
   * 备份库ID列表
   */
  VaultIds: Array<string>
}

/**
 * 备份高级保留策略
 */
export interface AdvancedRetentionPolicy {
  /**
   * 保留设定天数中的每天最新的一个备份
   */
  Days: number
  /**
   * 保留设置周中的每周最新的一个备份
   */
  Weeks: number
  /**
   * 保留设置月内的每月最新的一个备份
   */
  Months: number
  /**
   * 保留设置年内的每年最新的一个备份
   */
  Years: number
}

/**
 * UnbindAutoBackupPolicy请求参数结构体
 */
export type UnbindAutoBackupPolicyRequest = null

/**
 * DescribeCopyPairsDeniedActions请求参数结构体
 */
export interface DescribeCopyPairsDeniedActionsRequest {
  /**
   * 复制对ID列表
   */
  CopyPairIds: Array<string>
  /**
   * 要查询复制对的类型，枚举值：DISK（云硬盘）、INSTANCE（云服务器）、CFS（文件存储）
   */
  CopyPairType: string
}

/**
 * ModifySitePairAttribute返回参数结构体
 */
export interface ModifySitePairAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了 “基础” 服务相关的信息
 */
export interface BasicServicesSettings {
  /**
   * 是否开启基础服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。
   */
  Enabled?: boolean
}

/**
 * 描述了 “云安全” 服务相关的信息
 */
export interface RunSecurityServiceEnabled {
  /**
   * 是否开启该服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。
   */
  Enabled?: boolean
}

/**
 * ModifyCopyPairAttribute请求参数结构体
 */
export interface ModifyCopyPairAttributeRequest {
  /**
   * <p>要修改属性的复制对id</p>
   */
  CopyPairId: string
  /**
   * <p>要修改的复制对类型，可选值：DISK、INSTANCE、CFS，默认 INSTANCE</p>
   */
  CopyPairType?: string
  /**
   * <p>修改复制对名称（长度最大支持 64 个字符）</p>
   */
  CopyPairName?: string
  /**
   * <p>容灾端实例类型（仅容灾端CVM未创建时可修改）</p>
   */
  InstanceType?: string
}

/**
 * 整机备份计划
 */
export interface BackupPlan {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 备份策略ID
   */
  AutoBackupPolicyId?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * APP ID
   */
  AppId?: number
  /**
   * 备份数量
   */
  BackupCount?: number
  /**
   * 上次执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTriggerTime?: string
  /**
   * 上次执行错误信息，如果为空表示上次执行成功。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTriggerError?: string
}

/**
 * 过滤条件
 */
export interface FilterModel {
  /**
   * 过滤器名
   */
  Name?: string
  /**
   * 过滤器值
   */
  Values?: Array<string>
}

/**
 * 云盘信息
 */
export interface DiskModel {
  /**
   * 云盘类型
   */
  DiskType?: string
  /**
   * 云盘大小（单位GB，范围 (0, 32000]）
   */
  DiskSize?: number
  /**
   * 是否随实例删除（仅 DataDisks 元素能传）
   */
  DeleteWithInstance?: boolean
}

/**
 * DeleteAutoBackupPolicies返回参数结构体
 */
export interface DeleteAutoBackupPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunCopyPairTasks请求参数结构体
 */
export interface RunCopyPairTasksRequest {
  /**
   * 复制对ID列表
   */
  CopyPairIds: Array<string>
  /**
   * 要启动复制对的类型（DISK/INSTANCE/CFS）
   */
  CopyPairType: string
}

/**
 * DeleteFileBackupPlans请求参数结构体
 */
export interface DeleteFileBackupPlansRequest {
  /**
   * 备份点 ID 列表
   */
  PlanIds: Array<string>
}

/**
 * 共同备份点信息
 */
export interface CommonBackupPoint {
  /**
   * 共同时间点（精确到小时）
   */
  BackupCommonTime?: string
  /**
   * 共同备份点信息
   */
  BackupDetailSet?: Array<BackupDetail>
}

/**
 * DescribeBackupVaults请求参数结构体
 */
export interface DescribeBackupVaultsRequest {
  /**
   * 备份库ID列表
   */
  VaultIds?: Array<string>
  /**
   * 过滤条件，支持instance-id和auto-backup-policy-id
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大1000
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * CreateAutoBackupPolicy请求参数结构体
 */
export interface CreateAutoBackupPolicyRequest {
  /**
   * 定期备份的执行策略。
   */
  Policy: Array<Policy>
  /**
   * 通过该定期备份策略创建的备份是否永久保留。false表示非永久保留，true表示永久保留，默认为false。
   */
  IsPermanent?: boolean
  /**
   * 定期备份策略的名称。
   */
  AutoBackupPolicyName?: string
  /**
   * 是否激活定期备份策略。
   */
  IsActivated?: boolean
  /**
   * 通过定期备份策略创建出的备份保留时间。
   */
  RetentionDays?: number
  /**
   * 该定期备份策略创建的备份可以保留的月数，该参数不可与IsPermanent/RetentionDays参数冲突。
   */
  RetentionMonths?: number
  /**
   * 通过该定期备份策略最多保留的备份个数，超过该个数限制后自动删除最先创建的备份，该参数不可与IsPermanent参数冲突。
   */
  RetentionAmount?: number
  /**
   * 备份存储类型。COMMON表示走普通模式（不需要备份库），VAULT表示走备份库（必须关联一个备份库）。默认为COMMON
   */
  StorageType?: string
  /**
   * 备份库ID，创建agent备份策略时必须指定。当StorageType为VAULT时必传。
   */
  VaultId?: string
  /**
   * 定期备份高级保留策略，该参数不可与IsPermanent参数冲突。
   */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy
}

/**
 * ModifySitePairAttribute请求参数结构体
 */
export interface ModifySitePairAttributeRequest {
  /**
   * 要修改属性的容灾站点id
   */
  SitePairId: string
  /**
   * 容灾站点名称
   */
  SitePairName?: string
}

/**
 * RunCopyPairTasks返回参数结构体
 */
export interface RunCopyPairTasksResponse {
  /**
   * 已启动复制任务的复制对ID列表
   */
  CopyPairIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 跨云信息
 */
export interface CrossCloudDetails {
  /**
   * 源端云名称（跨云对端云名称）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceCloudName?: string
  /**
   * 目标端云名称（跨云本端云名称）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetCloudName?: string
  /**
   * 源端云AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceAppId?: number
  /**
   * 源端云主账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUin?: string
  /**
   * 源端云子账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceSubAccountUin?: string
  /**
   * 源端云用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUserName?: string
  /**
   * 目标端云AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetAppId?: number
  /**
   * 目标端云主账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetUin?: string
  /**
   * 目标端云子账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetSubAccountUin?: string
  /**
   * 对端云的地域显示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerRegionName?: string
  /**
   * 对端云的可用区显示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerZoneName?: string
  /**
   * 对端云的VPC显示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerVpcName?: string
}

/**
 * CreateDisasterRecoveryVpcMapping返回参数结构体
 */
export interface CreateDisasterRecoveryVpcMappingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容灾演练组
 */
export interface DisasterRecoveryDrillGroup {
  /**
   * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 账户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 子账户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 容灾站点对ID
   */
  SitePairId?: string
  /**
   * 保护组ID
   */
  ProtectGroupId?: string
  /**
   * 演练组ID
   */
  DrillGroupId?: string
  /**
   * 演练组名称
   */
  DrillGroupName?: string
  /**
   * 演练组类型。枚举值：DISK / INSTANCE / CFS。
   */
  DrillGroupType?: string
  /**
   * 恢复时间点
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecoveryTime?: string
  /**
   * 演练VPC
   */
  DrillVpc?: string
  /**
   * 演练安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DrillSecurityGroup?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 生命周期状态。枚举值：NORMAL / DELETED。
   */
  LifeState?: string
  /**
   * 容灾类型。枚举值：CROSS_ZONE / CROSS_REGION 等。
   */
  DisasterRecoveryType?: string
  /**
   * 复制技术。枚举值：SYN（同步）/ ASYN（异步）。
   */
  CopyType?: string
  /**
   * 对端云名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerCloudName?: string
  /**
   * 本地云名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalCloudName?: string
  /**
   * 生产地域
   */
  SourceRegion?: string
  /**
   * 生产可用区
   */
  SourceZone?: string
  /**
   * 生产端VPC
   */
  SourceVpc?: string
  /**
   * 演练地域
   */
  DrillRegion?: string
  /**
   * 演练可用区
   */
  DrillZone?: string
  /**
   * 数据方向。枚举值：POSITIVE（正向）/ REVERSE（反向）。
   */
  DataDirection?: string
  /**
   * 绑定的演练资源数量。
   */
  BindDrilledResourceCount?: number
  /**
   * 演练资源状态分布（key 为状态名如 FAILED / SUCCESS，value 为该状态数量）。
   */
  DrilledResourceStatusSet?: Array<DrilledResourceStatus>
}

/**
 * 备份库操作掩码
 */
export interface VaultDeniedAction {
  /**
   * 备份库实例ID
   */
  VaultId?: string
  /**
   * 被禁止的操作列表
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * ReportJobProgress请求参数结构体
 */
export type ReportJobProgressRequest = null

/**
 * 单个备份的操作掩码。
 */
export interface BackupDeniedAction {
  /**
   * 备份ID。
   */
  BackupId?: string
  /**
   * 具体的备份操作掩码列表。
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * ModifyDrillGroupAttribute请求参数结构体
 */
export interface ModifyDrillGroupAttributeRequest {
  /**
   * 要修改属性的容灾演练组id。
   */
  DrillGroupId: string
  /**
   * 修改容灾演练组名称（长度最大支持 64 个字符）
   */
  DrillGroupName?: string
}

/**
 * ModifyFileBackupAttribute请求参数结构体
 */
export interface ModifyFileBackupAttributeRequest {
  /**
   * 备份ID
   */
  BackupId: string
  /**
   * 备份的名称。
   */
  BackupName?: string
  /**
   * 是否为永久保留的备份。
   */
  IsPermanent?: boolean
  /**
   * 备份到期时间。
   */
  Deadline?: string
}

/**
 * DeleteDisasterRecoverySitePairs返回参数结构体
 */
export interface DeleteDisasterRecoverySitePairsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisasterRecoverySitePairsDeniedActions返回参数结构体
 */
export interface DescribeDisasterRecoverySitePairsDeniedActionsResponse {
  /**
   * 每个容灾策略对应的禁止操作集合，返回顺序与入参 SitePairIds 一致
   */
  SitePairDeniedActionSet?: Array<SitePairDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 受保护实例信息
 */
export interface ProtectInstance {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 客户端ID
   */
  AgentId?: string
  /**
   * 客户端版本
   */
  AgentVersion?: string
  /**
   * 客户端状态
   */
  AgentStatus?: string
  /**
   * 最后心跳时间
   */
  LastHeartbeatTime?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 最新备份点中记录的 CVM 基础信息
   */
  ExtraInfo?: string
  /**
   * 该实例可用备份点数量
   */
  BackupCount?: number
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 最近一次备份时间
   */
  LatestBackupTime?: string
  /**
   * 离线原因
   */
  OfflineReason?: string
}

/**
 * DeleteDrillPairs请求参数结构体
 */
export interface DeleteDrillPairsRequest {
  /**
   * 要删除演练对的类型，其类型枚举跟复制对保持一致。枚举值：DISK / INSTANCE / CFS。
   */
  DrillPairType: string
  /**
   * 要删除的演练对列表。长度范围 [1, 10]。
   */
  DrillPairIds?: Array<string>
  /**
   * 要删除的演练组id列表。
   */
  DrillGroupIds?: Array<string>
  /**
   * 是否一并删除演练CFS/CVM/DISK演练资源。
   */
  DeleteDrillResource?: boolean
}

/**
 * DescribeFileRestoreTasks请求参数结构体
 */
export interface DescribeFileRestoreTasksRequest {
  /**
   * 过滤条件。支持: backup-id, task-id, instance-id, "         "target-instance-id, status
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * DescribeBackupPlans请求参数结构体
 */
export interface DescribeBackupPlansRequest {
  /**
   * 过滤条件，支持instance-id和auto-backup-policy-id
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大100
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * 删除演练对结果
 */
export interface DeleteDrillPairResult {
  /**
   * 演练对ID。
   */
  DrillPairId?: string
  /**
   * 删除结果码。成功为 Success，失败为对应错误码（如 InternalError.ComponentError）。
   */
  Code?: string
  /**
   * 删除结果描述信息，成功时为空串。
   */
  Message?: string
}

/**
 * DescribeBackupGroups请求参数结构体
 */
export interface DescribeBackupGroupsRequest {
  /**
   * 过滤条件。backup-group-id - Array of String - 是否必填：否 -（过滤条件）按备份组ID过滤 ;backup-group-state - Array of String - 是否必填：否 -（过滤条件）按备份组状态过滤。(NORMAL: 正常 | CREATING:创建中 | ROLLBACKING:回滚中) ;backup-group-name - Array of String - 是否必填：否 -（过滤条件）按备份组名称过滤 ;backup-id - Array of String - 是否必填：否 -（过滤条件）按备份组内的备份ID过滤
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段。目前支持CREATE_TIME。
   */
  OrderField?: string
}

/**
 * DescribeBackupGroupRollbackTasks请求参数结构体
 */
export interface DescribeBackupGroupRollbackTasksRequest {
  /**
   * 过滤条件，支持恢复任务ID（task-id）、备份组ID（backup-group-id）、源实例ID（source-instance-id）、目标实例ID（target-instance-id）、恢复状态（status）和回滚类型（rollback-type）过滤
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大1000
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * ModifyAutoBackupPolicyAttribute返回参数结构体
 */
export interface ModifyAutoBackupPolicyAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileBackupsDeniedActions请求参数结构体
 */
export interface DescribeFileBackupsDeniedActionsRequest {
  /**
   * 要查询的文件备份ID列表
   */
  BackupIds: Array<string>
}

/**
 * ModifyFileBackupPlan请求参数结构体
 */
export interface ModifyFileBackupPlanRequest {
  /**
   * 备份计划ID
   */
  PlanId?: string
  /**
   * 备份策略ID
   * @deprecated
   */
  PolicyId?: string
  /**
   * 计划名称
   */
  PlanName?: string
  /**
   * 备份路径列表，1~20 个
   */
  BackupPaths?: Array<string>
  /**
   * 包含文件类型，0~20 个
   */
  IncludeFileTypes?: Array<string>
  /**
   * 排除文件路径列表，0~20 个
   */
  ExcludePatterns?: Array<string>
  /**
   * 是否排除系统目录
   */
  ExcludeSystemDirectories?: boolean
  /**
   * 备份库ID
   * @deprecated
   */
  BackupStorageId?: string
  /**
   * 计划状态，可选值：normal（正常）、paused（暂停）
   */
  Status?: string
}

/**
 * RunInstancesWithBackupGroup请求参数结构体
 */
export interface RunInstancesWithBackupGroupRequest {
  /**
   * 备份组ID
   */
  BackupGroupId: string
}

/**
 * DeleteDisasterRecoveryProtectGroups请求参数结构体
 */
export interface DeleteDisasterRecoveryProtectGroupsRequest {
  /**
   * 删除容灾保护组ID列表，最多10个
   */
  ProtectGroups: Array<string>
}

/**
 * 保护资源类型个数统计
 */
export interface ProtectedResourceStatus {
  /**
   * 状态
   */
  Status?: string
  /**
   * 数量
   */
  Count?: number
}

/**
 * CreateBackupGroup请求参数结构体
 */
export interface CreateBackupGroupRequest {
  /**
   * 需要创建备份组的云硬盘ID列表。
   */
  DiskIds: Array<string>
  /**
   * 备份组的名称
   */
  BackupGroupName?: string
  /**
   * 指定备份组到期时间，如果未传入该参数，默认为永久保留。
   */
  Deadline?: string
}

/**
 * CreateSecurityGroupMapping请求参数结构体
 */
export interface CreateSecurityGroupMappingRequest {
  /**
   * 生产端实例绑定的安全组ID
   */
  SrcSecurityGroupId: string
  /**
   * 容灾端实例绑定的安全组ID
   */
  TargetSecurityGroupId: string
  /**
   * 安全组映射所属的站点对ID。
   */
  SitePairId: string
}

/**
 * 产品受保护统计信息
 */
export interface ResourceProtectStat {
  /**
   * 受保护资源数
   */
  ProtectedCount?: number
  /**
   * 资源总数
   */
  TotalCount?: number
}

/**
 * ModifyCopyPairAttribute返回参数结构体
 */
export interface ModifyCopyPairAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupGroupsDeniedActions返回参数结构体
 */
export interface DescribeBackupGroupsDeniedActionsResponse {
  /**
   * 备份组不允许操作信息
   */
  BackupGroupDeniedActionSet?: Array<BackupGroupDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcMappings返回参数结构体
 */
export interface DescribeVpcMappingsResponse {
  /**
   * 符合条件的VPC映射规则总数
   */
  TotalCount?: number
  /**
   * VPC映射规则列表
   */
  VpcMappingSet?: Array<VpcMapping>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容灾保护组信息
 */
export interface ProtectGroup {
  /**
   * 用户AppId
   */
  AppId?: number
  /**
   * 保护组ID
   */
  ProtectGroupId?: string
  /**
   * 保护组名称
   */
  ProtectGroupName?: string
  /**
   * 保护组类型（产品类型，如 DISK/CFS/INSTANCE）
   */
  ProtectGroupType?: string
  /**
   * 所属容灾策略ID
   */
  SitePairId?: string
  /**
   * 所属容灾策略名称
   */
  SitePairName?: string
  /**
   * RPO时间（单位秒）
   */
  RecoveryPointObjective?: number
  /**
   * 生产地域（当 DataDirection=REVERSE 时会与 TargetRegion 自动轮转，保持用户视角一致）
   */
  SourceRegion?: string
  /**
   * 生产可用区（REVERSE 时与 TargetZone 自动轮转）
   */
  SourceZone?: string
  /**
   * 生产端VPC（REVERSE 时与 TargetVpc 自动轮转）
   */
  SourceVpc?: string
  /**
   * 容灾地域（REVERSE 时与 SourceRegion 自动轮转）
   */
  TargetRegion?: string
  /**
   * 容灾可用区
   */
  TargetZone?: string
  /**
   * 容灾端VPC
   */
  TargetVpc?: string
  /**
   * 复制技术（SYN 同步 / ASY 异步）
   */
  CopyType?: string
  /**
   * 容灾类型（CROSS_ZONE 跨可用区 / CROSS_REGION 跨地域 / CROSS_CLOUD 跨云）
   */
  DisasterRecoveryType?: string
  /**
   * 数据复制方向（POSITIVE 正向 / REVERSE 反向）
   */
  DataDirection?: string
  /**
   * 跨云场景对端云名称（仅 DisasterRecoveryType=CROSS_CLOUD 时返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerCloudName?: string
  /**
   * 创建来源（LOCAL 本端创建 / PEER 对端创建）
   */
  CreateFrom?: string
  /**
   * 生命周期状态
   */
  LifeState?: string
  /**
   * 创建保护组的账户主账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 创建保护组的子账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 绑定的已保护资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindProtectedResourceCount?: number
  /**
   * RPO 异常（超过 15 分钟未同步）的复制对数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorRecoveryPointObjectiveCount?: number
  /**
   * 已保护资源状态统计，key 为复制对状态，value 为该状态下的资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectedResourceStatusSet?: Array<ProtectedResourceStatus>
}

/**
 * RunInstancesWithBackupGroup返回参数结构体
 */
export interface RunInstancesWithBackupGroupResponse {
  /**
   * 创建的实例ID
   */
  InstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoBackupPolicies请求参数结构体
 */
export interface DescribeAutoBackupPoliciesRequest {
  /**
   * 过滤条件。支持以下过滤条件：\n"              "auto-backup-policy-id - 定期快照策略ID，如asp-xxx。\n"              "auto-backup-policy-state - 定期快照策略状态。\n"              "auto-backup-policy-name - 定期快照策略名称，支持模糊匹配。\n"              "tag - 按标签键值对过滤，需包含Key和/或Value。\n"              "tag-key - 按标签键过滤。\n"              "tag-value - 按标签值过滤。\n"              "tag:tag-key - 按指定标签键的标签值过滤。\n"              "vault-id - 备份库ID过滤。\n"              "storage-type - 存储类型过滤"              "（COMMON：普通模式，VAULT：备份库模式）。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大1000
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机等（仅CDH产品可用）
 */
export interface Placement {
  /**
   * 实例所属的可用区 ID。该参数也可以通过调用 [DescribeZones]的返回值中的Zone字段来获取。
   */
  Zone: string
  /**
   * 实例所属项目ID。
   */
  ProjectId?: number
  /**
   * 实例所属的专用宿主机ID列表。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。仅用于出参，当前暂不支持。
   */
  HostId?: string
  /**
   * 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
   */
  HostIds?: Array<string>
  /**
   * 实例所属项目名。
   */
  ProjectName?: string
}

/**
 * DeleteBackupGroups返回参数结构体
 */
export interface DeleteBackupGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份点信息
 */
export interface BackupInfo {
  /**
   * 备份点ID
   */
  BackupId?: string
  /**
   * 备份名称
   */
  BackupName?: string
  /**
   * 所属计划ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlanId?: string
  /**
   * 策略ID
   */
  AspInstanceId?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 备份状态，取值如下：
0 备份完成
1 创建中（备份进行中）
2 部分成功（指定的备份路径中部分目录不存在）
3 恢复中（该备份点正在被恢复任务使用）
92  已取消
98 创建失败
99 已删除
100 删除中

   */
  Status?: number
  /**
   * 备份路径
   */
  BackupPaths?: Array<string>
  /**
   * 包含文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeFileTypes?: Array<string>
  /**
   * 排除路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludePatterns?: Array<string>
  /**
   * 是否排除系统目录
   */
  ExcludeSystemDirectories?: boolean
  /**
   * 备份库ID
   */
  VaultId?: string
  /**
   * 扫描文件数
   */
  ScannedFileCount?: number
  /**
   * 扫描大小(字节)
   */
  ScannedSize?: number
  /**
   * 扫描大小(格式化)
   */
  ScannedSizeFormatted?: string
  /**
   * 已备份文件数量
   */
  BackupFileCount?: number
  /**
   * 已备份大小(字节)
   */
  BackupSize?: number
  /**
   * 已备份大小(格式化)
   */
  BackupSizeFormatted?: string
  /**
   * 备份进度(0-100)
   */
  Progress?: number
  /**
   * 任务ID
   */
  JobId?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 是否为永久保留
   */
  IsPermanent?: boolean
  /**
   * 到期时间
   */
  Deadline?: string
  /**
   * 不存在的路径信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NonExistSourcePaths?: Array<string>
  /**
   * 备份失败原因
   */
  FailReason?: string
  /**
   * 备份所属AppId
   */
  AppId?: number
  /**
   * 备份类型
   */
  ResourceType?: string
}

/**
 * DescribeBackupPlans返回参数结构体
 */
export interface DescribeBackupPlansResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 备份列表详情。
   */
  BackupPlanSet?: Array<BackupPlan>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份的执行策略详情
 */
export interface Policy {
  /**
   * 选定周一到周日中需要创建备份的日期，取值范围：[0, 6]。0表示周日触发，1表示周一触发，依次类推。
   */
  DayOfWeek?: Array<number | bigint>
  /**
   * 指定定期备份策略的触发时间。单位为小时，取值范围：[0, 23]。00:00 ~ 23:00 共 24 个时间点可选，1表示 01:00，依此类推。
   */
  Hour?: Array<number | bigint>
  /**
   * 指定每月从月初到月底需要触发定期备份的日期,取值范围：[1, 31]，1-31分别表示每月的具体日期，比如5表示每月的5号。注：若设置29、30、31等部分月份不存在的日期，则对应不存在日期的月份会跳过不打定期备份。
   */
  DayOfMonth?: Array<number | bigint>
  /**
   * 指定创建定期备份的间隔天数，取值范围：[1, 365]，例如设置为5，则间隔5天即触发定期备份创建。注：当选择按天备份时，理论上第一次备份的时间为备份策略创建当天。如果当天备份策略创建的时间已经晚于设置的备份时间，那么将会等到第二个备份周期再进行第一次备份。
   */
  IntervalDays?: number
}

/**
 * ModifyBackupVaultAttribute返回参数结构体
 */
export interface ModifyBackupVaultAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 演练对操作掩码
 */
export interface DrillPairDeniedAction {
  /**
   * 演练对ID
   */
  DrillPairId?: string
  /**
   * 被禁止的操作列表（Action名称数组）
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * CreateFileBackup返回参数结构体
 */
export interface CreateFileBackupResponse {
  /**
   * 备份Id
   */
  BackupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyBackupGroup返回参数结构体
 */
export interface ApplyBackupGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述实例的备份信息
 */
export interface BackupInstance {
  /**
   * 实例绑定的定期备份策略列表。
   */
  AutoBackupPolicyIdSet?: Array<string>
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 用户AppId。
   */
  AppId?: number
  /**
   * 实例最新备份时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestBackupTime?: string
  /**
   * 实例的备份组ID列表。
   */
  BackupGroupIdSet?: Array<string>
  /**
   * 修改时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 实例名称
   */
  InstanceName?: string
}

/**
 * DescribeFileBackups请求参数结构体
 */
export interface DescribeFileBackupsRequest {
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序字段
   */
  OrderField?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 过滤条件。支持: backup-id, plan-id, instance-id, status, backup-type, auto-backup-policy-id
   */
  Filters?: Array<FilterModel>
}

/**
 * DescribeBackupInstances返回参数结构体
 */
export interface DescribeBackupInstancesResponse {
  /**
   * 符合条件的受保护实例总数量
   */
  TotalCount?: number
  /**
   * 符合条件的受保护实例详情
   */
  BackupInstanceSet?: Array<BackupInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCopyPairs返回参数结构体
 */
export interface DescribeCopyPairsResponse {
  /**
   * <p>符合条件的复制对总数</p>
   */
  TotalCount?: number
  /**
   * <p>复制对列表。</p>
   */
  CopyPairSet?: Array<CopyPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSecurityGroupMapping返回参数结构体
 */
export interface DeleteSecurityGroupMappingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDisasterRecoverySitePair返回参数结构体
 */
export interface CreateDisasterRecoverySitePairResponse {
  /**
   * 容灾站点对ID
   */
  SitePairId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBackupVaults返回参数结构体
 */
export interface DeleteBackupVaultsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCommonBackupPoints请求参数结构体
 */
export interface DescribeCommonBackupPointsRequest {
  /**
   * 实例列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeFileBackupObjects请求参数结构体
 */
export type DescribeFileBackupObjectsRequest = null

/**
 * CreateDisasterRecoverySitePair请求参数结构体
 */
export interface CreateDisasterRecoverySitePairRequest {
  /**
   * 容灾策略的容灾类型，跨地域：CROSS_REGION，或跨可用区：CROSS_ZONE
   */
  DisasterRecoveryType: string
  /**
   * 生产站点地域
   */
  SourceRegion: string
  /**
   * 容灾策略生产站点可用区
   */
  SourceZone: string
  /**
   * 容灾站点地域
   */
  TargetRegion: string
  /**
   * 容灾策略容灾站点可用区
   */
  TargetZone: string
  /**
   * 容灾策略生产vpc
   */
  SourceVpc: string
  /**
   * 容灾策略容灾vpc
   */
  TargetVpc: string
  /**
   * 容灾策略所属产品类型，包括DISK、CFS、INSTANCE
   */
  SitePairProductType: string
  /**
   * 容灾策略的名称，最大长度为60个字符。
   */
  SitePairName?: string
  /**
   * 容灾策略复制技术SYN/ASY
   */
  CopyType?: string
}

/**
 * DescribeDisks返回参数结构体
 */
export interface DescribeDisksResponse {
  /**
   * 符合条件的云盘总数
   */
  TotalCount?: number
  /**
   * 云盘详情列表
   */
  DiskInfoSet?: Array<DiskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePriceCreateCopyPairs请求参数结构体
 */
export interface DescribePriceCreateCopyPairsRequest {
  /**
   * 每个复制对的容量列表，长度 1~10。数组长度即为询价的复制对个数，每个元素对应一个复制对的容量
   */
  DataCapacities: Array<number | bigint>
}

/**
 * CreateDisasterRecoveryProtectGroup请求参数结构体
 */
export interface CreateDisasterRecoveryProtectGroupRequest {
  /**
   * 所属容灾站点对id
   */
  SitePairId: string
  /**
   * 容灾保护组的产品类型
   */
  ProtectGroupType: string
  /**
   * 容灾保护组预期rpo, 单位分钟（当前仅支持15分钟）
   */
  RecoveryPointObjective: number
  /**
   * 容灾保护组的名称，最大长度不能超60个字符。
   */
  ProtectGroupName?: string
  /**
   * 数据复制方向， ['POSITIVE', 'REVERSE']
   */
  DataDirection?: string
}

/**
 * CreateInstanceCopyPair请求参数结构体
 */
export interface CreateInstanceCopyPairRequest {
  /**
   * 所属保护组
   */
  ProtectGroupId: string
  /**
   * 目标端CVM创建参数列表（1~10 个）
   */
  CreateTargetInstanceParameters: Array<CreateInstanceModel>
  /**
   * 复制对名称，不传则新名称为"未命名"
   */
  InstanceCopyPairName?: string
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性
   */
  ClientToken?: string
  /**
   * 用户期望的RPO，单位分钟，目前仅支持15分钟
   */
  RecoveryPointObjective?: number
}

/**
 * ReportGatewayHeartbeat请求参数结构体
 */
export type ReportGatewayHeartbeatRequest = null

/**
 * DeleteDisasterRecoverySitePairs请求参数结构体
 */
export interface DeleteDisasterRecoverySitePairsRequest {
  /**
   * 删除容灾策略ID列表
   */
  SitePairIds: Array<string>
}

/**
 * 受保护资源信息
 */
export interface ProtectedResource {
  /**
   * 资源类型（与请求 SitePairType 一致，如 DISK/CFS/INSTANCE）
   */
  ResourceType?: string
  /**
   * 该类型下被保护的源端资源ID列表（DISK:disk-xxx / CFS:cfs-xxx / INSTANCE:ins-xxx）
   */
  ResourceIdSet?: Array<string>
}

/**
 * 复制对操作掩码
 */
export interface CopyPairDeniedAction {
  /**
   * 复制对ID
   */
  CopyPairId?: string
  /**
   * 被禁止的操作列表（Action名称数组）
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * CreateFileBackup请求参数结构体
 */
export interface CreateFileBackupRequest {
  /**
   * 资源ID列表
   */
  ResourceId: string
  /**
   * 计划ID
   */
  PlanId?: string
  /**
   * 备份路径列表，1~20 个
   */
  BackupPaths?: Array<string>
  /**
   * 包含文件类型，0~20 个
   */
  IncludeFileTypes?: Array<string>
  /**
   * 排除文件路径列表，0~20 个
   */
  ExcludePatterns?: Array<string>
  /**
   * 是否排除系统目录
   */
  ExcludeSystemDirectories?: boolean
  /**
   * 备份库ID
   */
  BackupStorageId?: string
  /**
   * 备份到期时间
   */
  Deadline?: string
  /**
   * 备份名称
   */
  BackupName?: string
}

/**
 * DescribeFileBackupObjects返回参数结构体
 */
export interface DescribeFileBackupObjectsResponse {
  /**
   * 当前路径下包含的目录及文件总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileRestoreTasks返回参数结构体
 */
export interface DescribeFileRestoreTasksResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 恢复任务列表详情。
   */
  RestoreTaskSet?: Array<RestoreTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileBackupPlans返回参数结构体
 */
export interface DescribeFileBackupPlansResponse {
  /**
   * 符合条件的计划总数量
   */
  TotalCount?: number
  /**
   * 符合条件的计划详情
   */
  PlanSet?: Array<PlanInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份组详情
 */
export interface BackupGroup {
  /**
   * 备份组ID。
   */
  BackupGroupId?: string
  /**
   * 备份组创建进度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 备份和云盘绑定关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupBindDisk?: Array<ApplyDisk>
  /**
   * 备份组名称。
   */
  BackupGroupName?: string
  /**
   * 备份组状态。NORMAL: 正常；CREATING: 创建中；ROLLBACKING: 回滚中
   */
  BackupGroupState?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 用户AppId。
   */
  AppId?: number
  /**
   * 是否为永久备份组。
   */
  IsPermanent?: boolean
  /**
   * 备份组的到期时间。如果为永久备份组，则取值为null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadlineTime?: string
  /**
   * 创建备份组的实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 创建备份组时刻实例的详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceDetails?: string
  /**
   * 创建人名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * 主账号uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 创建备份的子账号uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 创建当前备份的定期备份策略ID，为null则为手动创建的备份。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupPolicyId?: string
}

/**
 * ModifyDrillPairAttribute返回参数结构体
 */
export interface ModifyDrillPairAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupVaults返回参数结构体
 */
export interface DescribeBackupVaultsResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 备份库列表详情。
   */
  BackupVaultSet?: Array<BackupVault>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupVaultAttribute请求参数结构体
 */
export interface ModifyBackupVaultAttributeRequest {
  /**
   * 备份库ID
   */
  VaultId: string
  /**
   * 备份库名称
   */
  VaultName?: string
  /**
   * 备份库描述
   */
  Description?: string
}

/**
 * DescribeDrillPairsDeniedActions请求参数结构体
 */
export interface DescribeDrillPairsDeniedActionsRequest {
  /**
   * 要查询演练对的类型，枚举值：DISK（云硬盘）、INSTANCE（云服务器）、CFS（文件存储）
   */
  DrillPairType: string
  /**
   * 演练对ID列表
   */
  DrillPairIds: Array<string>
}

/**
 * 复制对信息
 */
export interface CopyPair {
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 复制对ID（CVM 类型为 cvmcopypair-xxxxxxxx，DISK/CFS 类型为 copypair-xxxxxxxx）
   */
  CopyPairId?: string
  /**
   * 复制对名称
   */
  CopyPairName?: string
  /**
   * 所属容灾站点对ID
   */
  SitePairId?: string
  /**
   * 所属容灾站点对名称
   */
  SitePairName?: string
  /**
   * 保护组ID
   */
  ProtectGroupId?: string
  /**
   * 保护组名称
   */
  ProtectGroupName?: string
  /**
   * 复制对状态。可选值：INIT、RUNNING、FULL_COPYING、INC_COPYING、NORMAL、DOWN、DEGRADE 等
   */
  CopyPairState?: string
  /**
   * 复制对类型。可选值：DISK、INSTANCE、CFS
   */
  CopyPairType?: string
  /**
   * 生产地域
   */
  SourceRegion?: string
  /**
   * 生产可用区
   */
  SourceZone?: string
  /**
   * 生产端VPC
   */
  SourceVpc?: string
  /**
   * 容灾地域
   */
  TargetRegion?: string
  /**
   * 容灾可用区
   */
  TargetZone?: string
  /**
   * 容灾端VPC
   */
  TargetVpc?: string
  /**
   * 生产资源ID。CVM 类型为源 InstanceId（ins-xxx）；DISK 类型为源 DiskId（disk-xxx）；CFS 类型为源 FilesystemId（cfs-xxx）
   */
  SourceResourceId?: string
  /**
   * 容灾资源ID。语义同 SourceResourceId（CVM/DISK/CFS）。延迟创建模式且 CVM 未真实创建时为占位符 drp-xxx，CVM 创建后为真实 ins-xxx
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetResourceId?: string
  /**
   * 生产站点盘挂载的实例ID（DISK 类型时为挂载的 CVM ins-xxx；INSTANCE 类型时与 SourceResourceId 一致）
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 所属CVM复制对ID（仅 DISK 类型且其 CVM 复制对存在时返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCopyPairId?: string
  /**
   * 复制进度。CVM 类型为所有挂载磁盘进度的平均值；DISK/CFS 类型为本盘进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 最新保护时间点。当 CopyPairState=FULL_COPYING 时为 null（首次全量未完成）
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestProtectionTime?: string
  /**
   * RPO（秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecoveryPointObjective?: number
  /**
   * 数据方向。可选值：POSITIVE（正向）、REVERSE（反向，failover 后）。后端在 REVERSE 时已自动轮转 src/target 字段
   */
  DataDirection?: string
  /**
   * 创建来源。可选值：LOCAL（本地侧创建）、PEER（对端创建）
   */
  CreateFrom?: string
  /**
   * 容灾类型。可选值：CROSS_ZONE（跨可用区）、CROSS_REGION（跨地域）、CROSS_CLOUD（跨云）
   */
  DisasterRecoveryType?: string
  /**
   * 对端云名称（仅跨云场景）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerCloudName?: string
  /**
   * 是否在回滚中（0/1）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rollbacking?: number
  /**
   * 回滚进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackPercent?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 创建账户 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 创建协作者 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 演练组ID（用于演练组内过滤存量复制对，无演练时为 null）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DrillGroupId?: string
  /**
   * 保护时间点列表（仅当 QueryProtectionTime=true 时返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectionTimeSet?: Array<string>
  /**
   * CVM下挂载磁盘的复制对列表（仅 CopyPairType=INSTANCE 时返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskCopyPairSet?: Array<DiskCopyPairForCvm>
  /**
   * 是否为延迟创建模式（创建后固定不变）。仅 CVM 复制对返回
   */
  DeferredCreate?: boolean
  /**
   * 目标 CVM 是否已真实创建（首次 failover 完成后置 true）。仅 CVM 复制对返回
   */
  TargetCvmCreated?: boolean
  /**
   * CVM 创建参数（JSON 字符串）。仅当请求传 QueryCvmCreateParams=true 且复制对处于 deferred_create=1 AND target_cvm_created=0 时返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmCreateParams?: string
}

/**
 * DescribeDisasterRecoverySupportRegion返回参数结构体
 */
export interface DescribeDisasterRecoverySupportRegionResponse {
  /**
   * <p>符合条件的支持的生产地域配置总数。</p>
   */
  TotalCount?: number
  /**
   * <p>支持的生产地域配置详情列表。</p>
   */
  SupportRegionSet?: Array<SupportRegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 演练组关联的演练资源的状态数量统计
 */
export interface DrilledResourceStatus {
  /**
   * 演练组关联的演练资源的状态
   */
  ResourceStatus?: string
  /**
   * 演练组关联演练资源处于某个状态的数量
   */
  ResourceCount?: number
}

/**
 * ReportJobProgress返回参数结构体
 */
export interface ReportJobProgressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件备份概览数据
 */
export interface FileBackupOverview {
  /**
   * 整机备份点总数
   */
  BackupCount?: number
  /**
   * 创建中数量
   */
  CreatingBackupCount?: number
  /**
   * 失败数量
   */
  FailedBackupCount?: number
  /**
   * 已完成数量
   */
  SuccessBackupCount?: number
  /**
   * 恢复中的总数量
   */
  RestoringBackupCount?: number
  /**
   * 整机备份总容量
   */
  BackupSizeMb?: number
  /**
   * 受保护 CVM 资源数
   */
  BackupResourceCount?: number
}

/**
 * 备份计划详情
 */
export interface PlanInfo {
  /**
   * 备份计划ID
   */
  PlanId?: string
  /**
   * 计划关联的实例ID
   */
  ResourceIds?: Array<string>
  /**
   * 计划名称
   */
  PlanName?: string
  /**
   * 备份路径列表，1~20 个
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupPaths?: Array<string>
  /**
   * 包含文件类型，0~20 个
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeFileTypes?: Array<string>
  /**
   * 排除文件路径列表，0~20 个
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludePatterns?: Array<string>
  /**
   * 是否排除系统目录
   */
  ExcludeSystemDirectories?: boolean
  /**
   * 备份库ID
   */
  VaultId?: string
  /**
   * 备份计划状态
   */
  Status?: string
  /**
   * 策略ID
   */
  AspId?: string
  /**
   * 策略名称
   */
  AspName?: string
  /**
   * 策略详情
   */
  AspPolicy?: AspInfo
  /**
   * 最近一次执行时间
   */
  LastExecuteTime?: string
  /**
   * 下次触发时间
   */
  NextTriggerTime?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 最近一次执行错误信息
   */
  LastTriggerError?: string
  /**
   * 备份数量
   */
  BackupCount?: number
  /**
   * 流控信息
   */
  FlowControlSettings?: Array<FlowControlRule>
}

/**
 * DeleteFileBackups返回参数结构体
 */
export interface DeleteFileBackupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindAutoBackupPolicy请求参数结构体
 */
export type BindAutoBackupPolicyRequest = null

/**
 * DescribeDisasterRecoverySitePairs返回参数结构体
 */
export interface DescribeDisasterRecoverySitePairsResponse {
  /**
   * 有效的容灾策略数量。
   */
  TotalCount?: number
  /**
   * 容灾策略列表。
   */
  SitePairSet?: Array<SitePair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileBackupPlan返回参数结构体
 */
export interface CreateFileBackupPlanResponse {
  /**
   * <p>备份计划 ID 列表</p>
   */
  PlanIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileBackupPlan请求参数结构体
 */
export interface CreateFileBackupPlanRequest {
  /**
   * <p>备份策略ID</p>
   */
  PolicyId: string
  /**
   * <p>备份库ID</p>
   */
  BackupStorageId?: string
  /**
   * <p>计划名称</p>
   */
  PlanName?: string
  /**
   * <p>实例配置列表，[1,20]</p>
   */
  Resources?: Array<ResourcePlan>
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>CVM_AGENT： CVM文件备份</li><li>CFS_AGENT： 文件系统备份</li><li>COS_AGENT： COS备份</li></ul><p>默认值：CVM_AGENT</p>
   */
  ResourceType?: string
}

/**
 * ReportAgentMetrics返回参数结构体
 */
export interface ReportAgentMetricsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFileBackupAttribute返回参数结构体
 */
export interface ModifyFileBackupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
  /**
   * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以"/"开头，至少包含以下字符中的三种不同字符，字符种类：小写字母 a-z、大写字母 A-Z、数字 0-9、特殊字符 ()`~!@#$%^&*-+=_|{}[]:;'<>,.?/。Windows 实例密码必须 12-30 位，不能以"/"开头且不包括用户名，至少包含以下字符中的三种不同字符，字符种类：小写字母 a-z、大写字母 A-Z、数字 0-9、特殊字符 ()`~!@#$%^&*-+=_|{}[]:;' <>,.?/。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
   */
  Password?: string
  /**
   * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) 获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
   */
  KeyIds?: Array<string>
  /**
   * 保持镜像的原始设置。该参数与 Password 或 KeyIds.N 不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为 TRUE。取值范围：TRUE（表示保持镜像的登录设置）/FALSE（表示不保持镜像的登录设置）。默认取值：FALSE。
   */
  KeepImageLogin?: string
}

/**
 * 备份组的操作掩码
 */
export interface BackupGroupDeniedAction {
  /**
   * 备份组ID
   */
  BackupGroupId?: string
  /**
   * 拒绝的操作
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * CreateDisasterRecoveryProtectGroup返回参数结构体
 */
export interface CreateDisasterRecoveryProtectGroupResponse {
  /**
   * 创建的容灾保护组ID
   */
  ProtectGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 */
export interface EnhancedService {
  /**
   * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
   */
  SecurityService?: RunSecurityServiceEnabled
  /**
   * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
   */
  MonitorService?: RunSecurityServiceEnabled
  /**
   * 安装 tat-agent。若不指定该参数，则默认逻辑与 CVM 控制台一致：境外地域不安装、境内非 GPU 机型默认安装、境内 GPU 机型默认不安装。
   */
  AutomationService?: AutomationServiceEnabled
  /**
   * 开启基础服务。
   */
  BasicService?: BasicServicesSettings
}

/**
 * 受保护资源概览
 */
export interface ProtectedResourceOverview {
  /**
   * 受保护资源总数
   */
  TotalProtectedCount?: number
  /**
   * 总资源数
   */
  TotalResourceCount?: number
  /**
   * CVM 受保护统计
   */
  Cvm?: ResourceProtectStat
  /**
   * CFS 受保护统计
   */
  CFS?: ResourceProtectStat
}

/**
 * 备份组回滚任务
 */
export interface BackupGroupRollbackTask {
  /**
   * 备份组回滚任务
   */
  TaskId?: string
  /**
   * 源实例ID
   */
  SourceInstanceId?: string
  /**
   * 目标实例ID
   */
  TargetInstanceId?: string
  /**
   * 备份组ID
   */
  BackupGroupId?: string
  /**
   * 恢复类型：ORIGINAL-原实例恢复，NEW-新实例恢复
   */
  RollbackType?: string
  /**
   * 任务状态。取值包括"init"、"migrating"、"done"、"failed"。
   */
  Status?: string
  /**
   * 进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Percent?: number
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * APP ID
   */
  AppId?: number
  /**
   * 备份点名称
   */
  BackupGroupName?: string
  /**
   * 恢复失败原因
   */
  FailReason?: string
}

/**
 * CreateBackupGroup返回参数结构体
 */
export interface CreateBackupGroupResponse {
  /**
   * 备份组ID。
   */
  BackupGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可用区级容灾规则，描述某个生产可用区可容灾到的目标可用区集合。
 */
export interface SupportZoneRule {
  /**
   * 生产可用区。
   */
  SourceZone?: string
  /**
   * 是否支持容灾到生产地域内的全部可用区。true 时 TargetZones 可忽略。
   */
  IsAllZoneSupport?: boolean
  /**
   * 目标可用区列表。当 IsAllZoneSupport=false 时枚举具体可容灾到的可用区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetZones?: Array<string>
}

/**
 * DescribeDisasterRecoveryOverview返回参数结构体
 */
export interface DescribeDisasterRecoveryOverviewResponse {
  /**
   * 跨所有地域聚合后的容灾总览数据
   */
  DisasterRecoveryOverview?: DisasterRecoveryOverview
  /**
   * 按地域拆分的容灾总览列表
   */
  OverviewInRegionSet?: Array<DisasterRecoveryOverview>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoBackupPolicies返回参数结构体
 */
export interface DescribeAutoBackupPoliciesResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 备份策略列表详情。
   */
  AutoBackupPolicySet?: Array<AutoBackupPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileRestoreTask请求参数结构体
 */
export interface CreateFileRestoreTaskRequest {
  /**
   * 冲突处理策略：skip-跳过/"         "overwrite-覆盖/newer-保留较新的版本/"         "if_changed-内容变化时覆盖，默认overwrite
   */
  ConflictStrategy?: string
}

/**
 * 备份的执行策略信息
 */
export interface AspInfo {
  /**
   * 备份策略ID
   */
  AspId?: string
  /**
   * 备份策略名称
   */
  AspName?: string
  /**
   * 备份策略状态
   */
  AspState?: string
  /**
   * 备份策略执行详情
   */
  Policy?: Array<Policy>
  /**
   * 备份策略是否使能
   */
  IsActivated?: boolean
  /**
   * 是否永久保留
   */
  IsPermanent?: boolean
  /**
   * 保留时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionDays?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * 备份库类型统计
 */
export interface TypeCount {
  /**
   * 备份库类型
   */
  Type?: string
  /**
   * 备份库数量
   */
  Count?: number
}

/**
 * DescribeFileBackupsDeniedActions返回参数结构体
 */
export interface DescribeFileBackupsDeniedActionsResponse {
  /**
   * 备份的操作掩码。
   */
  BackupDeniedActionSet?: Array<BackupDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份不能执行的接口。
 */
export interface DeniedAction {
  /**
   * 不能操作的接口名。
   */
  Action?: string
  /**
   * 接口不能操作的原因。
   */
  Message?: string
  /**
   * 接口不能操作对应提示的错误码。
   */
  Code?: string
}

/**
 * DescribeDisasterRecoveryProtectGroups请求参数结构体
 */
export interface DescribeDisasterRecoveryProtectGroupsRequest {
  /**
   * 要查询的容灾保护组产品类型，枚举值：DISK / INSTANCE / CFS。
   */
  ProtectGroupType: string
  /**
   * 要查询的容灾保护组ID列表。
   */
  ProtectGroupIds?: Array<string>
  /**
   * 过滤条件（过滤项由 core handler 定义，如 disaster-recovery-protect-group-id 等）。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * 输出结果按升序还是降序
   */
  Order?: string
  /**
   * 输出结果的排序字段
   */
  OrderField?: string
}

/**
 * 备份库信息
 */
export interface BackupVault {
  /**
   * 备份库ID
   */
  VaultId?: string
  /**
   * 备份库名称
   */
  VaultName?: string
  /**
   * 备份库描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 备份库状态：READ_WRITE / READ_ONLY / UNAVAILABLE / DELETING
   */
  Status?: string
  /**
   * 加密方式：NONE / SSE-COS / SSE-KMS
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptType?: string
  /**
   * KMS密钥ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  KmsKeyId?: string
  /**
   * 备份库类型：COMMON
   */
  VaultType?: string
  /**
   * 关联的备份策略按类型统计
   */
  BackupPolicySet?: Array<TypeCount>
  /**
   * 备份点按类型统计（不含已删除）
   */
  BackupSet?: Array<TypeCount>
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 源端数据量
   */
  SourceDataSize?: number
  /**
   * 存储库数据量
   */
  VaultDataSize?: number
}

/**
 * UnbindAutoBackupPolicy返回参数结构体
 */
export interface UnbindAutoBackupPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCopyPairTasks返回参数结构体
 */
export interface StopCopyPairTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例Id与备份计划映射信息
 */
export interface ResourcePlan {
  /**
   * 云服务器实例 ID
   */
  ResourceId: string
  /**
   * 备份路径，[0,20]
   */
  BackupPaths?: Array<string>
  /**
   * 包含文件类型，[0,20]
   */
  IncludeFileTypes?: Array<string>
  /**
   * 排除路径，[0,20]
   */
  ExcludePatterns?: Array<string>
  /**
   * 是否排除系统目录
   */
  ExcludeSystemDirectories?: boolean
  /**
   * 是否立即触发全量备份
   */
  ExecuteImmediately?: boolean
}

/**
 * CreateInstanceDrillPairs返回参数结构体
 */
export interface CreateInstanceDrillPairsResponse {
  /**
   * 演练对ID列表
   */
  DrillPairIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBackupGroups请求参数结构体
 */
export interface DeleteBackupGroupsRequest {
  /**
   * 备份组ID列表。
   */
  BackupGroupIds: Array<string>
}

/**
 * CreateInstanceCopyPair返回参数结构体
 */
export interface CreateInstanceCopyPairResponse {
  /**
   * 创建的CVM复制对ID列表
   */
  CopyPairIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述容灾云硬盘的详情，如云硬盘的镜像格式。
 */
export interface DiskInfo {
  /**
   * 云硬盘ID
   */
  DiskId?: string
  /**
   * 云盘的镜像格式。QCOW2:  qcow2格式，这种格式的云盘不能用于容灾；RAW：raw格式，可以用于容灾。
   */
  ImageFormat?: string
}

/**
 * FinishFailoverCopyPairs请求参数结构体
 */
export interface FinishFailoverCopyPairsRequest {
  /**
   * <p>复制对ID列表。长度范围 [1, 50]。当 CopyPairType=INSTANCE 时传 CVM 复制对ID，否则传云盘/CFS 复制对ID。</p>
   */
  CopyPairIds: Array<string>
  /**
   * <p>要完成切换的复制对类型。枚举值：DISK / INSTANCE / CFS。</p>
   */
  CopyPairType: string
}

/**
 * DescribeDisasterRecoverySupportRegion请求参数结构体
 */
export interface DescribeDisasterRecoverySupportRegionRequest {
  /**
   * <p>状态过滤：valid（生效）/ invalid（停用）；为空则同时返回生效与停用的全部记录。</p>
   */
  Status?: string
}

/**
 * CreateDisasterRecoveryVpcMapping请求参数结构体
 */
export interface CreateDisasterRecoveryVpcMappingRequest {
  /**
   * 源端VPC ID
   */
  SourceVpcId: string
  /**
   * 源端子网ID
   */
  SourceSubnetId: string
  /**
   * 目标端VPC ID
   */
  TargetVpcId: string
  /**
   * 目标端子网ID
   */
  TargetSubnetId: string
  /**
   * 站点对ID
   */
  SitePairId: string
}

/**
 * DescribeBackupVaultsDeniedActions返回参数结构体
 */
export interface DescribeBackupVaultsDeniedActionsResponse {
  /**
   * 备份库不允许操作信息
   */
  BackupVaultDeniedActionSet?: Array<VaultDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定期备份策略的详细信息
 */
export interface AutoBackupPolicy {
  /**
   * 定期备份策略是否激活。
   */
  IsActivated?: boolean
  /**
   * 使用该定期备份策略创建出来的备份是否永久保留。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPermanent?: boolean
  /**
   * 使用该定期备份策略创建出来的备份是否永久保留。
   */
  NextTriggerTime?: string
  /**
   * NORMAL
   */
  AutoBackupPolicyState?: string
  /**
   * 备份策略的名称。
   */
  AutoBackupPolicyName?: string
  /**
   * 定期备份的执行策略。
   */
  Policy?: Array<Policy>
  /**
   * 备份策略ID。
   */
  AutoBackupPolicyId?: string
  /**
   * 备份策略的创建时间。
   */
  CreateTime?: string
  /**
   * 使用该定期备份策略创建出来的备份保留天数。
   */
  RetentionDays?: number
  /**
   * 用户AppId。
   */
  AppId?: number
  /**
   * 定期备份策略绑定的实例ID列表。
   */
  InstanceIdSet?: Array<string>
  /**
   * 该定期快照创建的快照最大保留月数
   */
  RetentionMonths?: number
  /**
   * 该定期快照创建的快照最大保留数量
   */
  RetentionAmount?: number
  /**
   * 创建人。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountName?: string
  /**
   * 主账号uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 子账号uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 策略存储类型
   */
  StorageType?: string
  /**
   * 备份库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VaultId?: string
  /**
   * 高级保留策略
   */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy
}

/**
 * 恢复任务信息
 */
export interface RestoreTask {
  /**
   * 恢复任务 ID
   */
  TaskId?: string
  /**
   * 关联备份点 ID
   */
  BackupId?: string
  /**
   * 源实例 ID
   */
  ResourceId?: string
  /**
   * 目标实例 ID
   */
  TargetResourceId?: string
  /**
   * 恢复路径列表
   */
  RestorePaths?: Array<string>
  /**
   * 目标恢复位置
   */
  TargetLocation?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 需恢复文件总数
   */
  TotalFileCount?: number
  /**
   * 需恢复数据总量（字节）
   */
  TotalSize?: number
  /**
   * 需恢复数据总量（格式化，如 "1.5 GB"）
   */
  TotalSizeFormatted?: string
  /**
   * 已恢复文件数
   */
  RestoreFileCount?: number
  /**
   * 已恢复数据量（字节）
   */
  RestoreSize?: number
  /**
   * 已恢复数据量（格式化）
   */
  RestoreSizeFormatted?: string
  /**
   * 恢复进度（0-100）
   */
  Progress?: number
  /**
   * 关联 Job ID
   */
  JobId?: string
  /**
   * 任务开始时间（ISO 格式）
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * 任务创建时间
   */
  CreatedTime?: string
  /**
   * 恢复任务失败原因
   */
  FailReason?: string
  /**
   * 冲突处理策略：skip-跳过/overwrite-覆盖/newer-保留最新版本/if_changed-内容变化时覆盖
   */
  ConflictStrategy?: string
}

/**
 * CreateFileRestoreTask返回参数结构体
 */
export interface CreateFileRestoreTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDrillPairAttribute请求参数结构体
 */
export interface ModifyDrillPairAttributeRequest {
  /**
   * 要修改属性的容灾演练对id
   */
  DrillPairId: string
  /**
   * 修改容灾演练对名称（长度最大支持 64 个字符）
   */
  DrillPairName?: string
}

/**
 * CreateAutoBackupPolicy返回参数结构体
 */
export interface CreateAutoBackupPolicyResponse {
  /**
   * 定期备份策略ID。
   */
  AutoBackupPolicyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisasterRecoveryProtectGroups返回参数结构体
 */
export interface DescribeDisasterRecoveryProtectGroupsResponse {
  /**
   * 符合条件的容灾保护组总数
   */
  TotalCount?: number
  /**
   * 容灾保护组列表
   */
  ProtectGroupSet?: Array<ProtectGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupMappings请求参数结构体
 */
export interface DescribeSecurityGroupMappingsRequest {
  /**
   * 安全组映射所属的站点对ID。
   */
  SitePairId: string
  /**
   * 过滤条件，详见过滤条件表。支持的Name：src-security-group-id、target-security-group-id
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为500。关于Limit的更进一步介绍请参考 API 简介中的相关小节
   */
  Limit?: number
  /**
   * 输出结果按升序还是降序，可选值：ASC、DESC
   */
  Order?: string
  /**
   * 输出结果的排序字段，可选值：CREATE_TIME
   */
  OrderField?: string
}

/**
 * CreateBackupVault请求参数结构体
 */
export interface CreateBackupVaultRequest {
  /**
   * 备份库名称
   */
  VaultName?: string
  /**
   * 备份库描述
   */
  Description?: string
  /**
   * 加密方式: NONE/SSE-COS/SSE-KMS
   */
  EncryptType?: string
  /**
   * KMS密钥ID（SSE-KMS时使用）
   */
  KmsKeyId?: string
}

/**
 * DeleteCopyPairs请求参数结构体
 */
export interface DeleteCopyPairsRequest {
  /**
   * 要删除的复制对ID列表（长度 1~10）
   */
  CopyPairIds: Array<string>
  /**
   * 要删除复制对的类型，可选值：DISK、INSTANCE、CFS
   */
  CopyPairType: string
  /**
   * 是否一并删除容灾站点云盘，默认 true（容灾盘数据可能处于中间状态，保留也无法正常使用）
   */
  DeleteTargetResource?: boolean
}

/**
 * DeleteSecurityGroupMapping请求参数结构体
 */
export interface DeleteSecurityGroupMappingRequest {
  /**
   * 要删除安全组映射所属的站点对ID
   */
  SitePairId: string
  /**
   * 要删除的安全组映射ID列表
   */
  SecurityGroupMappingIds: Array<string>
}

/**
 * 创建cvm参数
 */
export interface CreateInstanceModel {
  /**
   * 源CVM ID
   */
  SourceInstanceId: string
  /**
   * 实例计费模式
   */
  InstanceChargeType: string
  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement: Placement
  /**
   * 镜像ID
   */
  ImageId: string
  /**
   * 指定系统盘规格
   */
  SystemDisk: DiskModel
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 指定数据盘规格列表
   */
  DataDisks?: Array<DiskModel>
  /**
   * 私有网络相关信息配置
   */
  VirtualPrivateCloud?: VirtualPrivateCloud
  /**
   * 公网带宽相关信息设置
   */
  InternetAccessible?: InternetAccessible
  /**
   * 实例显示名称。不传则新实例名为"未命名"。最大长度不能超60个字节。
   */
  InstanceName?: string
  /**
   * 实例登录设置
   */
  LoginSettings?: LoginSettings
  /**
   * 增强服务配置
   */
  EnhancedService?: EnhancedService
  /**
   * 竞价实例最高出价
   */
  SpotPrice?: string
  /**
   * 实例主机名
   */
  HostName?: string
  /**
   * 提供给实例使用的用户数据
   */
  UserData?: string
  /**
   * 放置群组ID
   */
  DisasterRecoverGroupIds?: Array<string>
  /**
   * 关机计费模式，默认关机收费（KEEP_CHARGING / STOP_CHARGING），仅 CreateInstanceCopyPair 场景生效
   */
  StoppedMode?: string
  /**
   * 容灾演练使用的复制对ID，仅 CreateInstanceDrillPairs 场景生效
   */
  CopyPairId?: string
  /**
   * 容灾演练的恢复时间点，仅 CreateInstanceDrillPairs 场景生效
   */
  RecoveryTime?: string
}

/**
 * 演练对
 */
export interface DrillPair {
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 演练对ID
   */
  DrillPairId?: string
  /**
   * 演练对名称
   */
  DrillPairName?: string
  /**
   * 演练对状态。枚举值：RUNNING / SUCCESS / FAILED 等。
   */
  DrillPairState?: string
  /**
   * 容灾站点对ID
   */
  SitePairId?: string
  /**
   * 云硬盘复制对ID
   */
  CopyPairId?: string
  /**
   * 生产地域
   */
  SourceRegion?: string
  /**
   * 生产可用区
   */
  SourceZone?: string
  /**
   * 容灾地域
   */
  TargetRegion?: string
  /**
   * 容灾可用区
   */
  TargetZone?: string
  /**
   * 生产站点盘ID
   */
  SourceResourceId?: string
  /**
   * 演练资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetResourceId?: string
  /**
   * 演练对的类型。枚举值：DISK / INSTANCE / CFS。
   */
  DrillPairType?: string
  /**
   * 演练资源容量（GB）。
   */
  Size?: number
  /**
   * 演练的容灾点
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecoveryTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 演练结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 是否正在回滚。0 - 未回滚，1 - 回滚中。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rollbacking?: number
  /**
   * 回滚进度百分比（0-100）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackPercent?: number
  /**
   * 创建定期备份策略的账户uin ID信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 创建定期备份策略的子账户uin ID信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 保护组ID
   */
  ProtectGroupId?: string
  /**
   * 演练组ID
   */
  DrillGroupId?: string
  /**
   * 复制对名称。
   */
  CopyPairName?: string
  /**
   * 演练组名称。
   */
  DrillGroupName?: string
}

/**
 * DescribeDisasterRecoveryOverview请求参数结构体
 */
export interface DescribeDisasterRecoveryOverviewRequest {
  /**
   * 要查询的产品/复制对的类型，枚举值：• DISK：云硬盘类型复制对• INSTANCE：CVM 实例复制对• CFS：文件存储复制对• ALL：聚合当前支持的类型；默认为CFS
   */
  CopyPairType?: string
}

/**
 * ModifyAutoBackupPolicyAttribute请求参数结构体
 */
export interface ModifyAutoBackupPolicyAttributeRequest {
  /**
   * 备份策略id
   */
  AutoBackupPolicyId: string
  /**
   * 定期备份的执行策略。
   */
  Policy?: Array<Policy>
  /**
   * 通过该定期备份策略创建的备份是否永久保留。false表示非永久保留，true表示永久保留，默认为false。
   */
  IsPermanent?: boolean
  /**
   * 定期备份策略的名称。
   */
  AutoBackupPolicyName?: string
  /**
   * 是否激活定期备份策略。
   */
  IsActivated?: boolean
  /**
   * 通过定期备份策略创建出的备份保留时间。
   */
  RetentionDays?: number
  /**
   * 该定期备份策略创建的备份可以保留的月数，该参数不可与IsPermanent/RetentionDays参数冲突。
   */
  RetentionMonths?: number
  /**
   * 通过该定期备份策略最多保留的备份个数，超过该个数限制后自动删除最先创建的备份，该参数不可与IsPermanent参数冲突。
   */
  RetentionAmount?: number
  /**
   * 备份存储类型。SNAPSHOT表示走快照（不需要备份库），VAULT表示走备份库（必须关联一个备份库）。默认为SNAPSHOT
   */
  StorageType?: string
  /**
   * 备份库ID，创建agent备份策略时必须指定。当StorageType为VAULT时必传。
   */
  VaultId?: string
  /**
   * 定期备份高级保留策略，该参数不可与IsPermanent参数冲突。
   */
  AdvancedRetentionPolicy?: AdvancedRetentionPolicy
}

/**
 * DeleteCopyPairs返回参数结构体
 */
export interface DeleteCopyPairsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisasterRecoverySitePairs请求参数结构体
 */
export interface DescribeDisasterRecoverySitePairsRequest {
  /**
   * 要查询的容灾策略产品类型。取值范围：DISK / INSTANCE / CFS。
   */
  SitePairType: string
  /**
   * 要查询的容灾策略ID列表。
   */
  SitePairIds?: Array<string>
  /**
   * 过滤条件，详见定期快照过滤条件表。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * 输出结果按升序还是降序，DESC表示降序，ASC表示升序
   */
  Order?: string
  /**
   * 输出结果的排序字段
   */
  OrderField?: string
}

/**
 * DeleteBackupVaults请求参数结构体
 */
export interface DeleteBackupVaultsRequest {
  /**
   * 备份库 ID 列表
   */
  VaultIds: Array<string>
}

/**
 * DeleteDisasterRecoveryVpcMapping请求参数结构体
 */
export interface DeleteDisasterRecoveryVpcMappingRequest {
  /**
   * 删除容灾vpc映射主键id列表
   */
  VpcMappingIds: Array<number | bigint>
}

/**
 * 保护组操作掩码
 */
export interface ProtectGroupDeniedAction {
  /**
   * 保护组ID
   */
  ProtectGroupId?: string
  /**
   * 被禁止的操作列表（Action名称数组）
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * DescribeDisks请求参数结构体
 */
export interface DescribeDisksRequest {
  /**
   * 要查询信息的云盘ID列表
   */
  DiskIds: Array<string>
  /**
   * 云盘所在地域
   */
  DiskRegion: string
}

/**
 * CreateInstanceDrillPairs请求参数结构体
 */
export interface CreateInstanceDrillPairsRequest {
  /**
   * 所属容灾保护组
   */
  ProtectGroupId: string
  /**
   * 演练组vpc
   */
  DrillPairGroupVpc: string
  /**
   * 文件系统复制对名称,不传则新名称为“未命名”
   */
  DrillPairGroupName?: string
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性
   */
  CreationToken?: string
  /**
   * 指定创建入哪个演练组
   */
  DrillPairGroupId?: string
  /**
   * 创建目标演练实例的参数列表
   */
  CreateTargetInstanceParameters?: Array<CreateInstanceModel>
}

/**
 * DeleteFileBackupPlans返回参数结构体
 */
export interface DeleteFileBackupPlansResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupGroupsDeniedActions请求参数结构体
 */
export interface DescribeBackupGroupsDeniedActionsRequest {
  /**
   * 备份组列表
   */
  BackupGroupIds: Array<string>
}

/**
 * FinishFailoverCopyPairs返回参数结构体
 */
export interface FinishFailoverCopyPairsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJobs请求参数结构体
 */
export type DescribeJobsRequest = null

/**
 * ModifyFileBackupPlan返回参数结构体
 */
export interface ModifyFileBackupPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupAttribute请求参数结构体
 */
export interface ModifyBackupAttributeRequest {
  /**
   * 备份ID。该字段的取值取决于ResourceType：当ResourceType=CVM（默认）时，需传入备份组ID（BackupGroupId），可通过DescribeBackupGroups（查询备份组列表）查询
   */
  BackupId: string
  /**
   * 备份的名称。
   */
  BackupName?: string
  /**
   * 是否为永久保留的备份。
   */
  IsPermanent?: boolean
  /**
   * 备份到期时间。
   */
  Deadline?: string
}

/**
 * DescribeBackupInstances请求参数结构体
 */
export interface DescribeBackupInstancesRequest {
  /**
   * 过滤条件。;instance-id - Array of String - 是否必填：否 -（过滤条件）按实例ID过滤。;auto-backup-policy-id - Array of String - 是否必填：否 -（过滤条件）按照实例绑定的定期备份策略过滤。;auto-backup-policy-name - Array of String - 是否必填：否 -（过滤条件）按照云硬盘绑定的定期备份策略名称过滤。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * DeleteDisasterRecoveryProtectGroups返回参数结构体
 */
export interface DeleteDisasterRecoveryProtectGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupAttribute返回参数结构体
 */
export interface ModifyBackupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProtectGroupAttribute请求参数结构体
 */
export interface ModifyProtectGroupAttributeRequest {
  /**
   * 要修改属性的保护组id
   */
  ProtectGroupId: string
  /**
   * 保护组名称
   */
  ProtectGroupName?: string
}

/**
 * DescribeProtectedInstances返回参数结构体
 */
export interface DescribeProtectedInstancesResponse {
  /**
   * 符合条件的受保护实例总数量
   */
  TotalCount?: number
  /**
   * 符合条件的受保护实例详情
   */
  InstanceSet?: Array<ProtectInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupVault返回参数结构体
 */
export interface CreateBackupVaultResponse {
  /**
   * 备份库唯一ID
   */
  VaultId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 整机备份（CVM 备份组）概览数据
 */
export interface InstanceBackupOverview {
  /**
   * 整机备份点总数
   */
  BackupCount?: number
  /**
   * 创建中数量
   */
  CreatingBackupCount?: number
  /**
   * 失败数量
   */
  FailedBackupCount?: number
  /**
   * 已完成数量
   */
  SuccessBackupCount?: number
  /**
   * 恢复中的总数量
   */
  RestoringBackupCount?: number
  /**
   * 整机备份总容量
   */
  BackupSizeMb?: number
  /**
   * 受保护 CVM 资源数
   */
  BackupResourceCount?: number
}

/**
 * DescribeDrillPairsDeniedActions返回参数结构体
 */
export interface DescribeDrillPairsDeniedActionsResponse {
  /**
   * 演练对操作掩码列表，返回每个演练对被禁止执行的操作
   */
  DrillPairDeniedActionSet?: Array<DrillPairDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProtectGroupsDeniedActions请求参数结构体
 */
export interface DescribeProtectGroupsDeniedActionsRequest {
  /**
   * 保护组ID列表
   */
  ProtectGroupIds: Array<string>
}

/**
 * 单个容灾策略的禁止操作集合
 */
export interface SitePairDeniedAction {
  /**
   * 容灾策略ID
   */
  SitePairId?: string
  /**
   * 该容灾策略当前被禁止执行的操作列表
   */
  DeniedActions?: Array<DeniedAction>
}

/**
 * CreateSecurityGroupMapping返回参数结构体
 */
export interface CreateSecurityGroupMappingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyBackupGroup请求参数结构体
 */
export interface ApplyBackupGroupRequest {
  /**
   * 回滚的备份组ID。
   */
  BackupGroupId: string
  /**
   * 回滚的备份ID、云硬盘ID列表。
   */
  ApplyDisks: Array<ApplyDisk>
  /**
   * 回滚备份前是否执行自动关机，如果回滚的盘挂载在实例上且实例处于运行状态，可传入该参数。
   */
  AutoStopInstance?: boolean
  /**
   * 回滚备份完成后是否执行自动开机。
   */
  AutoStartInstance?: boolean
}

/**
 * DeleteDisasterRecoveryVpcMapping返回参数结构体
 */
export interface DeleteDisasterRecoveryVpcMappingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProtectGroupsDeniedActions返回参数结构体
 */
export interface DescribeProtectGroupsDeniedActionsResponse {
  /**
   * 保护组操作掩码列表，返回每个保护组被禁止执行的操作
   */
  ProtectGroupDeniedActionSet?: Array<ProtectGroupDeniedAction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopCopyPairTasks请求参数结构体
 */
export interface StopCopyPairTasksRequest {
  /**
   * 复制对ID列表
   */
  CopyPairIds: Array<string>
  /**
   * 复制对类型（DISK/INSTANCE/CFS）
   */
  CopyPairType: string
}

/**
 * 复制对价格明细项
 */
export interface CopyPairPriceDetail {
  /**
   * 计费项目标识名称。取值：InstanceCount（容灾CVM实例数）、InstanceDataCapacity（容灾CVM实例数据量）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PriceName?: string
  /**
   * 计费项目展示名称（跟随语言环境翻译）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PriceTitle?: string
  /**
   * 该计费项每小时原价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 该计费项每小时折扣价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount?: number
  /**
   * 该计费项的折扣，100 表示无折扣
注意：此字段可能返回 null，表示取不到有效值。
   */
  Discount?: number
  /**
   * 计价单元，固定为 HOUR
   */
  ChargeUnit?: string
}

/**
 * DeleteFileBackups请求参数结构体
 */
export type DeleteFileBackupsRequest = null

/**
 * cvm的盘复制对信息
 */
export interface DiskCopyPairForCvm {
  /**
   * 云硬盘复制对ID
   */
  CopyPairId?: string
  /**
   * 云硬盘复制对名称
   */
  CopyPairName?: string
  /**
   * 生产端云硬盘ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceResourceId?: string
  /**
   * 容灾端云硬盘ID（延迟创建模式且 CVM 未真实创建时被脱敏为空字符串）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetResourceId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeDrillPairs返回参数结构体
 */
export interface DescribeDrillPairsResponse {
  /**
   * 有效的容灾演练对数量。
   */
  TotalCount?: number
  /**
   * 容灾演练对列表。
   */
  DrillPairSet?: Array<DrillPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDrillGroupAttribute返回参数结构体
 */
export interface ModifyDrillGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDrillPairs请求参数结构体
 */
export interface DescribeDrillPairsRequest {
  /**
   * 要查询演练对的类型。枚举值：DISK / INSTANCE / CFS。
   */
  DrillPairType: string
  /**
   * 要查询演练对ID列表。
   */
  DrillPairIds?: Array<string>
  /**
   * 过滤条件，详见定期快照过滤条件表。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * 输出结果按升序还是降序。枚举值：ASC / DESC。
   */
  Order?: string
  /**
   * 输出结果的排序字段。枚举值：CREATE_TIME / END_TIME。
   */
  OrderField?: string
}

/**
 * DeleteAutoBackupPolicies请求参数结构体
 */
export interface DeleteAutoBackupPoliciesRequest {
  /**
   * 备份策略 ID 列表
   */
  AutoBackupPolicyIds: Array<string>
}

/**
 * 安全组映射详情
 */
export interface SecurityGroupMapping {
  /**
   * 安全组映射ID
   */
  SecurityGroupMappingId?: string
  /**
   * 安全组映射所属的站点对ID
   */
  SitePairId?: string
  /**
   * 生产端安全组ID
   */
  SourceSecurityGroupId?: string
  /**
   * 容灾端安全组ID
   */
  TargetSecurityGroupId?: string
  /**
   * 安全组映射的生命状态；NORMAL:正常。
   */
  LifeState?: string
}

/**
 * RunFailoverCopyPairs返回参数结构体
 */
export interface RunFailoverCopyPairsResponse {
  /**
   * 故障切换任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProtectGroupAttribute返回参数结构体
 */
export interface ModifyProtectGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisasterRecoveryDrillGroups请求参数结构体
 */
export interface DescribeDisasterRecoveryDrillGroupsRequest {
  /**
   * 要查询的容灾演练组产品类型。枚举值：DISK / INSTANCE / CFS。
   */
  DrillGroupType: string
  /**
   * 要查询的容灾演练组ID列表。
   */
  DrillGroupIds?: Array<string>
  /**
   * 过滤条件，详见定期快照过滤条件表。
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
  /**
   * 输出结果按升序还是降序。枚举值：ASC / DESC。
   */
  Order?: string
  /**
   * 输出结果的排序字段。枚举值：CREATE_TIME。
   */
  OrderField?: string
}

/**
 * DescribeBackupGroups返回参数结构体
 */
export interface DescribeBackupGroupsResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 备份列表详情。
   */
  BackupGroupSet?: Array<BackupGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDisasterRecoveryDrillGroups返回参数结构体
 */
export interface DescribeDisasterRecoveryDrillGroupsResponse {
  /**
   * 有效的容灾演练组数量。
   */
  TotalCount?: number
  /**
   * 容灾演练组列表。
   */
  DrillGroupSet?: Array<DisasterRecoveryDrillGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupOverviewGeneral请求参数结构体
 */
export interface DescribeBackupOverviewGeneralRequest {
  /**
   * <p>是否查询全部地域。false-仅当前地域（默认），true-全部地域汇总</p>
   */
  AllRegions?: boolean
}

/**
 * BindAutoBackupPolicy返回参数结构体
 */
export interface BindAutoBackupPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流控规则
 */
export interface FlowControlRule {
  /**
   * 流控开始时间
   */
  StartTime?: string
  /**
   * 流控结束时间
   */
  EndTime?: string
  /**
   * 流控规则最大带宽，单位MB/s
   */
  MaxBandwidthMBps?: number
}

/**
 * 站点对信息
 */
export interface SitePair {
  /**
   * 用户AppId
   */
  AppId?: number
  /**
   * 容灾策略ID
   */
  SitePairId?: string
  /**
   * 容灾策略名称
   */
  SitePairName?: string
  /**
   * 容灾策略类型（产品类型，如 DISK/CFS/INSTANCE 等）
   */
  SitePairType?: string
  /**
   * 容灾策略状态
   */
  SitePairState?: string
  /**
   * 生产地域
   */
  SourceRegion?: string
  /**
   * 生产可用区
   */
  SourceZone?: string
  /**
   * 容灾地域
   */
  TargetRegion?: string
  /**
   * 容灾可用区
   */
  TargetZone?: string
  /**
   * 生产端VPC
   */
  SourceVpc?: string
  /**
   * 容灾端VPC
   */
  TargetVpc?: string
  /**
   * 复制技术（SYN 同步 / ASY 异步）
   */
  CopyType?: string
  /**
   * 容灾类型（CROSS_ZONE 跨可用区 / CROSS_REGION 跨地域 / CROSS_CLOUD 跨云）
   */
  DisasterRecoveryType?: string
  /**
   * 创建来源（LOCAL 本端创建 / PEER 对端创建）
   */
  CreateFrom?: string
  /**
   * 创建容灾策略的账户主账号 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountUin?: string
  /**
   * 创建容灾策略的子账户 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 已绑定的保护组数量
   */
  BindProtectGroupCount?: number
  /**
   * RPO 异常的复制对ID列表（最近一次保护点距今超过15分钟的复制对）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorRecoveryPointObjectiveCopyPairSet?: Array<string>
  /**
   * 已保护的资源列表（按资源类型分组）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectedResourceSet?: Array<ProtectedResource>
  /**
   * 已保护资源的状态统计，key 为复制对状态，value 为该状态下的资源数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtectedResourceStatusSet?: Array<ProtectedResourceStatus>
  /**
   * 跨云场景下的额外信息（仅 IsCrossCloud=true 时返回，非跨云为 null）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossCloudDetails?: CrossCloudDetails
}

/**
 * 支持的生产地域配置详情，包含支持类型与可用区粒度规则。
 */
export interface SupportRegionInfo {
  /**
   * 生产地域。
   */
  SourceRegion?: string
  /**
   * 支持类型：REGION（地域级，整个生产地域均支持容灾）；ZONE（可用区级，按 SupportZoneRules 控制粒度）。
   */
  SupportType?: string
  /**
   * 配置状态：valid（生效）/ invalid（停用）。
   */
  Status?: string
  /**
   * 可用区级容灾规则列表。仅当 SupportType=ZONE 时有效；REGION 类型时该字段返回空数组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportZoneRules?: Array<SupportZoneRule>
}

/**
 * RunFailoverCopyPairs请求参数结构体
 */
export interface RunFailoverCopyPairsRequest {
  /**
   * 复制对ID列表
   */
  CopyPairIds: Array<string>
  /**
   * 复制对类型，枚举值：DISK / INSTANCE / CFS。
   */
  CopyPairType: string
  /**
   * 切换类型，支持WAIT和NOW
   */
  FailoverType: string
}

/**
 * DescribeFileBackups返回参数结构体
 */
export interface DescribeFileBackupsResponse {
  /**
   * 符合条件的备份点总数量
   */
  TotalCount?: number
  /**
   * 符合条件的备份点详情
   */
  BackupSet?: Array<BackupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了 “tat-agent” 相关的信息
 */
export interface AutomationServiceEnabled {
  /**
   * 是否开启该服务。取值范围：TRUE（开启）/FALSE（不开启）。默认取值：TRUE。
   */
  Enabled?: boolean
}

/**
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份策略概览
 */
export interface BackupPolicyOverview {
  /**
   * 自动备份策略总数
   */
  TotalCount?: number
  /**
   * 已绑定资源的策略数
   */
  BoundCount?: number
  /**
   * 未绑定任何资源的策略数
   */
  UnboundCount?: number
}

/**
 * 容灾总览数据
 */
export interface DisasterRecoveryOverview {
  /**
   * 地域 ID
   */
  Region?: string
  /**
   * 站点对总数
   */
  SitePairCount?: number
  /**
   * 跨地域站点对数
   */
  SitePairCrossRegionCount?: number
  /**
   * 跨可用区站点对数
   */
  SitePairCrossZoneCount?: number
  /**
   * 跨云站点对数
   */
  SitePairCrossCloudCount?: number
  /**
   * 保护组总数
   */
  ProtectGroupCount?: number
  /**
   * 跨地域保护组数
   */
  ProtectGroupCrossRegionCount?: number
  /**
   * 跨可用区保护组数
   */
  ProtectGroupCrossZoneCount?: number
  /**
   * 跨云保护组数
   */
  ProtectGroupCrossCloudCount?: number
  /**
   * 复制对总数
   */
  CopyPairCount?: number
  /**
   * RPO 正常的复制对数
   */
  CopyPairSuccessRPOCount?: number
  /**
   * RPO 异常的复制对数
   */
  CopyPairErrorRPOCount?: number
  /**
   * 演练对总数
   */
  DrillPairCount?: number
  /**
   * 演练中
   */
  DrillPairDrillingCount?: number
  /**
   * 演练失败
   */
  DrillPairFailedCount?: number
  /**
   * 演练成功
   */
  DrillPairSuccessCount?: number
  /**
   * 受保护资源总数
   */
  ProtectedResourceCount?: number
  /**
   * 受保护资源-复制中
   */
  ProtectedResourceCopyingCount?: number
  /**
   * 受保护资源-已停止/初始化
   */
  ProtectedResourceStoppedCount?: number
  /**
   * 切换失败
   */
  FailoverFailedCount?: number
}

/**
 * DescribeBackupGroupRollbackTasks返回参数结构体
 */
export interface DescribeBackupGroupRollbackTasksResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 备份组恢复详情。
   */
  RollbackTaskSet?: Array<BackupGroupRollbackTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了VPC相关信息，包括子网，IP信息等
 */
export interface VirtualPrivateCloud {
  /**
   * 私有网络ID，形如 vpc-xxxxxxxx。私有网络ID可通过登录控制台查询，也可通过调用接口 [DescribeVpcEx]的返回值中的unVpcId字段获取。
   */
  VpcId: string
  /**
   * 私有网络子网ID，形如 subnet-xxxxxxxx。私有网络子网ID可通过登录控制台查询，也可通过调用接口 [DescribeSubnets](https://cloud.tencent.com/document/api/215/15784) 的返回值中的 unSubnetId 字段获取。
   */
  SubnetId: string
  /**
   * 私有网络子网名称。
   */
  SubnetName?: string
  /**
   * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：true（用作公网网关）/false（不作为公网网关），默认取值：false。
   */
  AsVpcGateway?: boolean
  /**
   * 私有网络子网 IP 数组，在创建实例、修改实例 vpc 属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
   */
  PrivateIpAddresses?: Array<string>
  /**
   * 私有网络名称，仅做展示用。
   */
  VpcName?: string
  /**
   * 为弹性网卡指定随机生成的 IPv6 地址数量。
   */
  Ipv6AddressCount?: number
}

/**
 * DescribeSecurityGroupMappings返回参数结构体
 */
export interface DescribeSecurityGroupMappingsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 安全组映射详情。
   */
  SecurityGroupMappingSet?: Array<SecurityGroupMapping>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDrillPairs返回参数结构体
 */
export interface DeleteDrillPairsResponse {
  /**
   * 删除演练对的逐条结果列表。
   */
  DeleteDrillPairResultSet?: Array<DeleteDrillPairResult>
  /**
   * 成功标记为删除的演练组ID列表。
   */
  DeleteDrillPairGroupSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcMappings请求参数结构体
 */
export interface DescribeVpcMappingsRequest {
  /**
   * 要查询的站点对id
   */
  SitePairId: string
  /**
   * 过滤条件。支持: source-vpc-id, target-vpc-id, source-subnet-id, target-subnet-id
   */
  Filters?: Array<FilterModel>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
}

/**
 * 复制对价格信息
 */
export interface CopyPairPrice {
  /**
   * 后付费每小时原价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 高精度后付费每小时原价，单位：元（字符串形式，避免精度丢失）
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceHigh?: string
  /**
   * 后付费每小时折扣价，单位：元
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount?: number
  /**
   * 高精度后付费每小时折扣价，单位：元（字符串形式，避免精度丢失）
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscountHigh?: string
  /**
   * 折扣，100 表示无折扣，80 表示 8 折
注意：此字段可能返回 null，表示取不到有效值。
   */
  Discount?: number
  /**
   * 计价单元，固定为 HOUR（按小时计费）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit?: string
  /**
   * 计费项目明细列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailPrices?: Array<CopyPairPriceDetail>
}

/**
 * 备份库概览
 */
export interface BackupVaultOverview {
  /**
   * 备份库总数
   */
  TotalCount?: number
  /**
   * 备份库总存储量（已用容量），单位 MB
   */
  TotalSizeMb?: number
}

/**
 * DescribeBackupOverviewGeneral返回参数结构体
 */
export interface DescribeBackupOverviewGeneralResponse {
  /**
   * <p>整机备份（CVM 备份组）概览数据</p>
   */
  InstanceBackupOverview?: InstanceBackupOverview
  /**
   * <p>文件备份概览数据</p>
   */
  FileBackupOverview?: FileBackupOverview
  /**
   * <p>备份策略概览</p>
   */
  BackupPolicyOverview?: BackupPolicyOverview
  /**
   * <p>备份库概览</p>
   */
  BackupVaultOverview?: BackupVaultOverview
  /**
   * <p>受保护资源概览</p>
   */
  ProtectedResourceOverview?: ProtectedResourceOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份组备份和云盘绑定信息
 */
export interface ApplyDisk {
  /**
   * 备份ID
   */
  BackupId?: string
  /**
   * 云盘ID
   */
  DiskId?: string
}

/**
 * 站点对vpc映射信息
 */
export interface VpcMapping {
  /**
   * 映射规则主键ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 所属容灾策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SitePairId?: string
  /**
   * 源端VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceVpc?: string
  /**
   * 源端子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceSubnet?: string
  /**
   * 目标端VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetVpc?: string
  /**
   * 目标端子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetSubnet?: string
  /**
   * 映射状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 生命周期状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeState?: string
}

/**
 * ReportAgentMetrics请求参数结构体
 */
export type ReportAgentMetricsRequest = null

/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 */
export interface InternetAccessible {
  /**
   * 网络计费类型。取值范围：BANDWIDTH_PREPAID（预付费按带宽结算）、TRAFFIC_POSTPAID_BY_HOUR（流量按小时后付费）、BANDWIDTH_POSTPAID_BY_HOUR（带宽按小时后付费）、BANDWIDTH_PACKAGE（带宽包用户）。默认取值：非带宽包用户默认与子机付费类型保持一致。
   */
  InternetChargeType?: string
  /**
   * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 是否分配公网IP。取值范围：true（表示分配公网IP）/false（表示不分配公网IP）。当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在 RunInstances 接口中作为入参使用。
   */
  PublicIpAssigned?: boolean
  /**
   * 网络模式：移动:"CMCC"、电信:"CTCC"、联通:"CUCC"。
   */
  InternetServiceProvider?: string
}

/**
 * DescribeProtectedInstances请求参数结构体
 */
export interface DescribeProtectedInstancesRequest {
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大500
   */
  Limit?: number
  /**
   * 排序字段
   */
  OrderField?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 过滤条件。支持: instance-id, agent-status
   */
  Filters?: Array<FilterModel>
}

/**
 * DescribeDisasterRecoverySitePairsDeniedActions请求参数结构体
 */
export interface DescribeDisasterRecoverySitePairsDeniedActionsRequest {
  /**
   * 要查询的容灾策略ID列表，单个ID格式为 sitepair-xxxxxxxx
   */
  SitePairIds: Array<string>
}

/**
 * DescribeCommonBackupPoints返回参数结构体
 */
export interface DescribeCommonBackupPointsResponse {
  /**
   * 符合条件的总数量。
   */
  TotalCount?: number
  /**
   * 共同备份点详情。
   */
  CommonBackupPointSet?: Array<CommonBackupPoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
   */
  Period: number
  /**
   * 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW（通知过期且自动续费）、NOTIFY_AND_MANUAL_RENEW（通知过期不自动续费）、DISABLE_NOTIFY_AND_MANUAL_RENEW（不通知过期不自动续费）。
   */
  RenewFlag?: string
}

/**
 * DescribePriceCreateCopyPairs返回参数结构体
 */
export interface DescribePriceCreateCopyPairsResponse {
  /**
   * 复制对价格列表，与入参一一对应
   */
  CopyPairPrices?: Array<CopyPairPrice>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
