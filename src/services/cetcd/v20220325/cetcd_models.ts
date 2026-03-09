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
 * DescribeRPCMethodList请求参数结构体
 */
export interface DescribeRPCMethodListRequest {
  /**
   * etcd实例ID
   */
  InstanceId: string
  /**
   * etcd集群pod名称
   */
  PodName: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 最大长度
   */
  Limit?: number
}

/**
 * ResizeEtcdInstance请求参数结构体
 */
export interface ResizeEtcdInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * etcd节点个数
   */
  Size: number
}

/**
 * DescribeEtcdRegions请求参数结构体
 */
export type DescribeEtcdRegionsRequest = null

/**
 * DescribeEtcdInstances返回参数结构体
 */
export interface DescribeEtcdInstancesResponse {
  /**
   * etcd实例详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Etcds?: Array<Etcd>
  /**
   * 符合条件的实例数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableEtcdInstanceDeletionProtection返回参数结构体
 */
export interface DisableEtcdInstanceDeletionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResizeEtcdInstance返回参数结构体
 */
export interface ResizeEtcdInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域属性信息
 */
export interface RegionInstance {
  /**
   * 地域名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionName: string
  /**
   * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId: number
  /**
   * 地域状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 地域特性开关(按照JSON的形式返回所有属性)
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeatureGates: string
  /**
   * 地域简称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias: string
  /**
   * 地域白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
}

/**
 * ModifyEtcdSnapshotPolicy请求参数结构体
 */
export interface ModifyEtcdSnapshotPolicyRequest {
  /**
   * etcd实例id
   */
  InstanceId: string
  /**
   * 快照策略名称
   */
  SnapshotPolicyName: string
  /**
   * 备份参数设置
   */
  BackupSettings: EtcdBackupSettings
}

/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
  /**
   * 步骤名称
   */
  Step: string
  /**
   * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
   */
  LifeState: string
  /**
   * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt: string
  /**
   * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt: string
  /**
   * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedMsg: string
}

/**
 * ModifyEtcdConfiguration返回参数结构体
 */
export interface ModifyEtcdConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdSnapshots请求参数结构体
 */
export interface DescribeEtcdSnapshotsRequest {
  /**
   * etcd实例Id
   */
  InstanceId: string
}

/**
 * CreateEtcdSnapshotPolicy返回参数结构体
 */
export interface CreateEtcdSnapshotPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdSnapshotPolicies返回参数结构体
 */
export interface DescribeEtcdSnapshotPoliciesResponse {
  /**
   * 备份策略列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotPolicies: Array<EtcdSnapshotPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdAvailableVersions请求参数结构体
 */
export type DescribeEtcdAvailableVersionsRequest = null

/**
 * DescribeEtcdInstances请求参数结构体
 */
export interface DescribeEtcdInstancesRequest {
  /**
   * 按照一个或者多个实例ID查询。实例ID形如：etcd-xxxxxxxx。参数不支持同时指定InstanceIds和Filters
   */
  InstanceIds?: Array<string>
  /**
   * 支持按照vpc-id和instance-id过滤。参数不支持同时指定InstanceIds和Filters
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，最大值为50
   */
  Limit?: number
}

/**
 * Prometheus创建参数
 */
export interface PrometheusCreationParam {
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 保存时长，只支持天单位
12d = 12天
   */
  DataRetention: number
  /**
   * grafana用户名
   */
  GrafanaUserName: string
  /**
   * grafana密码
   */
  GrafanaPassword: string
}

/**
 * DescribeRPCMethodList返回参数结构体
 */
export interface DescribeRPCMethodListResponse {
  /**
   * gRPC方法列表
   */
  MethodList?: Array<RPCMethod>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEtcdSnapshot返回参数结构体
 */
export interface CreateEtcdSnapshotResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * etcd快照
 */
export interface EtcdSnapshot {
  /**
   * 快照名称
   */
  Name: string
  /**
   * 快照大小
   */
  Size: number
}

/**
 * 预付费类型相关配置
 */
export interface ChargePrepaidConfig {
  /**
   * 预付费购买周期，单位：月
   */
  Period: number
  /**
   * 预付费自动续费设置：
NOTIFY_AND_MANUAL_RENEW：表示默认状态(用户未设置，即初始状态)， NOTIFY_AND_AUTO_RENEW：表示自动续费，DISABLE_NOTIFY_AND_MANUAL_RENEW：表示明确不自动续费(用户设置)
   */
  RenewFlag: string
}

/**
 * etcd信息
 */
export interface Etcd {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  Name?: string
  /**
   * 实例描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 实例所属vpcId
   */
  VpcId?: string
  /**
   * etcd版本
   */
  Version?: string
  /**
   * 实例状态
   */
  Status?: string
  /**
   * etcd成员信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Members?: Array<EtcdMember>
  /**
   * 对外访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoint?: string
  /**
   * 删除保护，true 删除保护开启；false删除保护关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletionProtection?: boolean
}

/**
 * EnableEtcdInstanceDeletionProtection请求参数结构体
 */
export interface EnableEtcdInstanceDeletionProtectionRequest {
  /**
   * etcd实例ID
   */
  InstanceId: string
}

/**
 * etcd自动压缩设置
 */
export interface EtcdAutoCompactionSettings {
  /**
   * 自动压缩模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCompactionMode: string
  /**
   * 自动压缩保留时间/revison数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCompactionRetention: string
}

/**
 * DescribeEtcdSnapshotPolicies请求参数结构体
 */
export interface DescribeEtcdSnapshotPoliciesRequest {
  /**
   * etcd实例Id
   */
  InstanceId: string
}

/**
 * ModifyEtcdAttribute返回参数结构体
 */
export interface ModifyEtcdAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版本信息
 */
export interface VersionInstance {
  /**
   * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
  /**
   * Remark信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
}

/**
 * etcd安全相关设置
 */
export interface EtcdSecuritySettings {
  /**
   * 是否启用https
注意：此字段可能返回 null，表示取不到有效值。
   */
  Https?: boolean
  /**
   * 启用客户端证书认证
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientCertAuth?: boolean
}

/**
 * etcd监控设置
 */
export interface EtcdMonitorSettings {
  /**
   * Prometheus创建参数
   */
  PrometheusCreationParam?: PrometheusCreationParam
  /**
   * Prometheus Id
   */
  ExistedPrometheusInstanceId?: string
}

/**
 * etcd高级设置
 */
export interface EtcdAdvancedSettings {
  /**
   * 安全相关设置
   */
  SecuritySettings?: EtcdSecuritySettings
  /**
   * 自动压缩设置
   */
  AutoCompactionSettings?: EtcdAutoCompactionSettings
  /**
   * 监控设置
   */
  MonitorSettings?: EtcdMonitorSettings
  /**
   * 备份相关设置
   */
  BackupSettings?: EtcdBackupSettings
  /**
   * 自定义域名
   */
  CustomDomains?: string
  /**
   * 自定义ip
   */
  CustomIPs?: string
}

/**
 * etcd集群成员信息
 */
export interface EtcdMember {
  /**
   * 节点名字
   */
  Name: string
  /**
   * 节点当前版本
   */
  Version: string
  /**
   * 所属可用区
   */
  Zone: string
  /**
   * 节点状态
   */
  Status: string
}

/**
 * ModifyEtcdConfiguration请求参数结构体
 */
export interface ModifyEtcdConfigurationRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 自动压缩设置
   */
  AutoCompactionSettings?: EtcdAutoCompactionSettings
  /**
   * 监控设置
   */
  MonitorSettings?: EtcdMonitorSettings
  /**
   * 计费类型
PREPAID：预付费
POSTPAID_BY_HOUR：后付费
   */
  ChargeType?: string
  /**
   * 实例配置信息
   */
  InstanceConfig?: InstanceConfig
  /**
   * 预付费配置信息
   */
  PrepaidConfig?: ChargePrepaidConfig
}

/**
 * DescribeEtcdAvailableVersions返回参数结构体
 */
export interface DescribeEtcdAvailableVersionsResponse {
  /**
   * 支持的版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Versions: Array<VersionInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdCreatingProgress请求参数结构体
 */
export interface DescribeEtcdCreatingProgressRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribeEtcdTasks请求参数结构体
 */
export interface DescribeEtcdTasksRequest {
  /**
   * 任务ID
   */
  TaskID?: string
  /**
   * taskType：
    按照任务类型过滤，当前支持enable_internet，disable_internet, restore_remote_snapshot
resourceId：
    按照资源ID过滤
lifeState：
    按照任务状态过滤，当前支持process， done
   */
  Filters?: Array<Filter>
}

/**
 * EnableEtcdInstanceDeletionProtection返回参数结构体
 */
export interface EnableEtcdInstanceDeletionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdTasks返回参数结构体
 */
export interface DescribeEtcdTasksResponse {
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks: Array<EtcdTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEtcdSnapshotPolicy返回参数结构体
 */
export interface ModifyEtcdSnapshotPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RPC方法信息
 */
export interface RPCMethod {
  /**
   * 方法名称
   */
  Name: string
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * CreateEtcdInstance返回参数结构体
 */
export interface CreateEtcdInstanceResponse {
  /**
   * 创建etcd实例的Id
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeEtcdInstance返回参数结构体
 */
export interface UpgradeEtcdInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEtcdSnapshotPolicy请求参数结构体
 */
export interface CreateEtcdSnapshotPolicyRequest {
  /**
   * etcd实例Id
   */
  InstanceId: string
  /**
   * 快照策略名
   */
  SnapshotPolicyName: string
  /**
   * 备份参数设置
   */
  BackupSettings?: EtcdBackupSettings
}

/**
 * DescribeEtcdCredentials请求参数结构体
 */
export interface DescribeEtcdCredentialsRequest {
  /**
   * etcd实例id
   */
  InstanceId: string
}

/**
 * DisableEtcdInstanceDeletionProtection请求参数结构体
 */
export interface DisableEtcdInstanceDeletionProtectionRequest {
  /**
   * etcd实例ID
   */
  InstanceId: string
}

/**
 * DescribeEtcdRegions返回参数结构体
 */
export interface DescribeEtcdRegionsResponse {
  /**
   * 支持的地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions: Array<RegionInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdCreatingProgress返回参数结构体
 */
export interface DescribeEtcdCreatingProgressResponse {
  /**
   * 创建进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Steps: Array<TaskStepInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例配置信息
 */
export interface InstanceConfig {
  /**
   * 核数
   */
  Cpu: number
  /**
   * 内存大小Gi
   */
  Mem: number
  /**
   * 集群规模
   */
  Size: number
}

/**
 * etcd访问凭证
 */
export interface EtcdCredential {
  /**
   * CA证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  CACert: string
  /**
   * 证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cert: string
  /**
   * 私钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
}

/**
 * UpgradeEtcdInstance请求参数结构体
 */
export interface UpgradeEtcdInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * etcd版本
   */
  EtcdVersion: string
}

/**
 * etcd快照策略
 */
export interface EtcdSnapshotPolicy {
  /**
   * 快照策略名称
   */
  Name: string
  /**
   * 备份参数
   */
  BackupSettings: EtcdBackupSettings
}

/**
 * DescribeEtcdQuota请求参数结构体
 */
export type DescribeEtcdQuotaRequest = null

/**
 * CreateEtcdInstance请求参数结构体
 */
export interface CreateEtcdInstanceRequest {
  /**
   * etcd实例名称
   */
  Name: string
  /**
   * etcd所属vpc
   */
  VpcId: string
  /**
   * etcd对外提供访问ip地址所在子网
   */
  ServiceSubnetId: string
  /**
   * etcd部署子网
   */
  SubnetIds: Array<string>
  /**
   * etcd版本
   */
  EtcdVersion: string
  /**
   * etcd节点个数，可选范围: 1, 3, 5, 7, 9
   */
  Size: number
  /**
   * etcd集群描述信息
   */
  Description?: string
  /**
   * 高级设置
   */
  AdvancedSettings?: EtcdAdvancedSettings
  /**
   * 付费类型：
PREPAID 预付费
POSTPAID_BY_HOUR 后付费按小时付费
   */
  ChargeType?: string
  /**
   * 预付费相关配置
   */
  ChargePrepaid?: ChargePrepaidConfig
  /**
   * 存储大小GB
   */
  DiskSize?: number
  /**
   * 删除保护，true 删除保护开启；false删除保护关闭
   */
  DeletionProtection?: boolean
}

/**
 * DescribeEtcdSnapshots返回参数结构体
 */
export interface DescribeEtcdSnapshotsResponse {
  /**
   * etcd快照列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Snapshots: Array<EtcdSnapshot>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEtcdCredentials返回参数结构体
 */
export interface DescribeEtcdCredentialsResponse {
  /**
   * 访问凭证
注意：此字段可能返回 null，表示取不到有效值。
   */
  Credentials: Array<EtcdCredential>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEtcdAttribute请求参数结构体
 */
export interface ModifyEtcdAttributeRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 实例名
   */
  Name?: string
  /**
   * 实例描述
   */
  Description?: string
  /**
   * root账号密码
   */
  Password?: string
  /**
   * 同步auth状态
   */
  EnableAuth?: boolean
  /**
   * 删除集群关联的cos数据
   */
  EnableDeleteCos?: boolean
  /**
   * 子网id，数组
   */
  SubnetIds?: Array<string>
}

/**
 * CreateEtcdSnapshot请求参数结构体
 */
export interface CreateEtcdSnapshotRequest {
  /**
   * etcd实例id
   */
  InstanceId: string
  /**
   * etcd快照名称
   */
  SnapshotName: string
  /**
   * 备份用户名
   */
  User?: string
  /**
   * 备份密码
   */
  Password?: string
}

/**
 * etcd task信息
 */
export interface EtcdTaskInfo {
  /**
   * 任务ID
   */
  TaskID: string
  /**
   * 任务类型
   */
  TaskType: string
  /**
   * 资源ID
   */
  ResourceID: string
  /**
   * 任务状态
   */
  LifeState: string
  /**
   * 任务创建时间
   */
  CreatedAt: string
  /**
   * 任务更新时间
   */
  UpdatedAt: string
}

/**
 * DescribeEtcdQuota返回参数结构体
 */
export interface DescribeEtcdQuotaResponse {
  /**
   * 当前配额限制
   */
  QuotaLimit: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * etcd备份设置
 */
export interface EtcdBackupSettings {
  /**
   * 备份间隔(s)
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupInterval: number
  /**
   * 最大备份个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxBackupCount: number
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * COS桶名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketName?: string
}
