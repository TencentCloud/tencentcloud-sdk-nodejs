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

/**
 * UpgradeProxyVersion返回参数结构体
 */
export interface UpgradeProxyVersionResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceCLSLogDelivery返回参数结构体
 */
export interface DescribeInstanceCLSLogDeliveryResponse {
  /**
   * 总数量

   */
  TotalCount?: number
  /**
   * 实例投递信息

   */
  InstanceCLSDeliveryInfos?: Array<InstanceCLSDeliveryInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMaintainPeriodConfig请求参数结构体
 */
export interface ModifyMaintainPeriodConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 维护开始时间，单位为秒，如3:00为10800
   */
  MaintainStartTime: number
  /**
   * 维护持续时间，单位为秒，如1小时为3600
   */
  MaintainDuration: number
  /**
   * 每周维护日期，日期取值范围[Mon, Tue, Wed, Thu, Fri, Sat, Sun]
   */
  MaintainWeekDays: Array<string>
}

/**
 * 实例参数修改任务详情
 */
export interface BizTaskModifyInstanceParam {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例参数修改任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyInstanceParamList?: Array<ModifyParamItem>
}

/**
 * ModifyClusterStorage请求参数结构体
 */
export interface ModifyClusterStorageRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群新存储大小（单位G）
   */
  NewStorageLimit: number
  /**
   * 集群原存储大小（单位G）
   */
  OldStorageLimit: number
  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
}

/**
 * DescribeResourcePackageDetail返回参数结构体
 */
export interface DescribeResourcePackageDetailResponse {
  /**
   * 资源包抵扣总数
   */
  Total?: number
  /**
   * 资源包明细说明
   */
  Detail?: Array<PackageDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClusterTables请求参数结构体
 */
export interface SearchClusterTablesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 数据表名
   */
  Table?: string
  /**
   * 数据表类型：
view：只返回 view，
base_table： 只返回基本表，
all：返回 view 和表
   */
  TableType?: string
}

/**
 * DescribeMaintainPeriod请求参数结构体
 */
export interface DescribeMaintainPeriodRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 账号参数
 */
export interface AccountParam {
  /**
   * 参数名称，当前仅支持参数：max_user_connections
   */
  ParamName: string
  /**
   * 参数值
   */
  ParamValue: string
}

/**
 * DescribeClusterDatabaseTables请求参数结构体
 */
export interface DescribeClusterDatabaseTablesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 数据库名
   */
  Db: string
  /**
   * 偏移
   */
  Offset?: number
  /**
   * 个数
   */
  Limit?: number
  /**
   * 数据表类型。
"view"表示只返回 view，"base_table" 表示只返回基本表，"all" 表示返回 view 和表。默认为 all。
   */
  TableType?: string
}

/**
 * DescribeClusterParams返回参数结构体
 */
export interface DescribeClusterParamsResponse {
  /**
   * 参数个数
   */
  TotalCount?: number
  /**
   * 实例参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ParamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefundResourcePackage返回参数结构体
 */
export interface RefundResourcePackageResponse {
  /**
   * 每个物品对应一个dealName，业务需要根据dealName保证发货接口幂等
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParamTemplates请求参数结构体
 */
export interface DescribeParamTemplatesRequest {
  /**
   * 数据库引擎版本号
   */
  EngineVersions?: Array<string>
  /**
   * 模板名称
   */
  TemplateNames?: Array<string>
  /**
   * 模板ID
   */
  TemplateIds?: Array<number | bigint>
  /**
   * 数据库类型，可选值：NORMAL，SERVERLESS
   */
  DbModes?: Array<string>
  /**
   * 查询偏移量
   */
  Offset?: number
  /**
   * 查询限制条数
   */
  Limit?: number
  /**
   * 查询的模板对应的产品类型
   */
  Products?: Array<string>
  /**
   * 模板类型
   */
  TemplateTypes?: Array<string>
  /**
   * 版本类型
   */
  EngineTypes?: Array<string>
  /**
   * 返回结果的排序字段
   */
  OrderBy?: string
  /**
   * 排序方式（asc、desc）
   */
  OrderDirection?: string
}

/**
 * DescribeAuditInstanceList返回参数结构体
 */
export interface DescribeAuditInstanceListResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 审计实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceAuditStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProxies返回参数结构体
 */
export interface DescribeProxiesResponse {
  /**
   * 数据库代理组数
   */
  TotalCount?: number
  /**
   * 数据库代理组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyGroupInfos?: Array<ProxyGroupInfo>
  /**
   * 数据库代理节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyNodeInfos?: Array<ProxyNodeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterDetailDatabases请求参数结构体
 */
export interface DescribeClusterDetailDatabasesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 返回数量，默认20,最大100
   */
  Limit?: number
  /**
   * 数据库名称
   */
  DbName?: string
}

/**
 * 回档RO组信息
 */
export interface RollbackRoGroupInfo {
  /**
   * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupId?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqSubnetId?: string
  /**
   * vip信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * vport信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport?: number
}

/**
 * CreateClusters返回参数结构体
 */
export interface CreateClustersResponse {
  /**
   * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceIds?: Array<string>
  /**
   * 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIds?: Array<string>
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例组信息
 */
export interface CynosdbInstanceGrp {
  /**
   * 用户appId
   */
  AppId?: number
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 删除时间
   */
  DeletedTime?: string
  /**
   * 实例组ID
   */
  InstanceGrpId?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 实例组类型。ha-ha组；ro-只读组
   */
  Type?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 内网IP
   */
  Vip?: string
  /**
   * 内网端口
   */
  Vport?: number
  /**
   * 外网域名
   */
  WanDomain?: string
  /**
   * 外网ip
   */
  WanIP?: string
  /**
   * 外网端口
   */
  WanPort?: number
  /**
   * 外网状态
   */
  WanStatus?: string
  /**
   * 实例组包含实例信息
   */
  InstanceSet?: Array<CynosdbInstance>
  /**
   * VPC的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqSubnetId?: string
  /**
   * 正在回收IP信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldAddrInfo?: OldAddrInfo
  /**
   * 正在进行的任务
   */
  ProcessingTasks?: Array<string>
  /**
   * 任务列表
   */
  Tasks?: Array<ObjectTask>
  /**
   * biz_net_service表id
   */
  NetServiceId: number
}

/**
 * ModifyInstanceParam请求参数结构体
 */
export interface ModifyInstanceParamRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID
   */
  InstanceIds?: Array<string>
  /**
   * 集群参数列表，例如 [{           "CurrentValue":"2",        "ParamName":"auto_increment_increment"}]
   */
  ClusterParamList?: Array<ModifyParamItem>
  /**
   * 实例参数列表，例如[{           "CurrentValue":"2",        "ParamName":"innodb_stats_transient_sample_pages"}]
   */
  InstanceParamList?: Array<ModifyParamItem>
  /**
   * yes：在运维时间窗内修改，no：立即执行（默认值）
   */
  IsInMaintainPeriod?: string
}

/**
 * ModifyInstanceUpgradeLimitDays返回参数结构体
 */
export interface ModifyInstanceUpgradeLimitDaysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库表信息
 */
export interface DatabaseTables {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Database?: string
  /**
   * 表名称列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<string>
}

/**
 * 用户主机权限
 */
export interface UserHostPrivilege {
  /**
   * 授权用户
   */
  DbUserName: string
  /**
   * 客户端ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbHost: string
  /**
   * 用户权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbPrivilege: string
}

/**
 * StopCLSDelivery请求参数结构体
 */
export interface StopCLSDeliveryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 日志主题id
   */
  CLSTopicIds: Array<string>
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 是否维护时间运行
   */
  IsInMaintainPeriod?: string
}

/**
 * ExportResourcePackageDeductDetails返回参数结构体
 */
export interface ExportResourcePackageDeductDetailsResponse {
  /**
   * 文件详情
   */
  FileContent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
   */
  DbType?: string
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
  /**
   * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
   */
  OrderBy?: string
  /**
   * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
   */
  OrderByType?: string
  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>
}

/**
 * OpenReadOnlyInstanceExclusiveAccess返回参数结构体
 */
export interface OpenReadOnlyInstanceExclusiveAccessResponse {
  /**
   * 开通流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClusterDatabases返回参数结构体
 */
export interface SearchClusterDatabasesResponse {
  /**
   * 数据库列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Databases?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateParamTemplate请求参数结构体
 */
export interface CreateParamTemplateRequest {
  /**
   * 模板名称
   */
  TemplateName: string
  /**
   * mysql版本号
   */
  EngineVersion: string
  /**
   * 模板描述
   */
  TemplateDescription?: string
  /**
   * 可选参数，需要复制的模板ID
   */
  TemplateId?: number
  /**
   * 数据库类型，可选值：NORMAL（默认值），SERVERLESS
   */
  DbMode?: string
  /**
   * 参数列表
   */
  ParamList?: Array<ParamItem>
}

/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * ModifyResourcePackageName请求参数结构体
 */
export interface ModifyResourcePackageNameRequest {
  /**
   * 资源包唯一ID
   */
  PackageId: string
  /**
   * 自定义的资源包名称，最长支持120个字符
   */
  PackageName: string
}

/**
 * 添加实例或者变配实例时同步升级proxy.
 */
export interface UpgradeProxy {
  /**
   * cpu
   */
  Cpu: number
  /**
   * memory
   */
  Mem: number
  /**
   * 代理节点信息
   */
  ProxyZones: Array<ProxyZone>
  /**
   * 重新负载均衡
   */
  ReloadBalance?: string
}

/**
 * 备份文件信息
 */
export interface BackupFileInfo {
  /**
   * 快照文件ID，已废弃，请使用BackupId
   */
  SnapshotId?: number
  /**
   * 备份文件名
   */
  FileName?: string
  /**
   * 备份文件大小
   */
  FileSize?: number
  /**
   * 备份开始时间
   */
  StartTime?: string
  /**
   * 备份完成时间
   */
  FinishTime?: string
  /**
   * 备份类型：snapshot，快照备份；logic，逻辑备份
   */
  BackupType?: string
  /**
   * 备份方式：auto，自动备份；manual，手动备份
   */
  BackupMethod?: string
  /**
   * 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中
   */
  BackupStatus?: string
  /**
   * 备份文件时间
   */
  SnapshotTime?: string
  /**
   * 备份ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupId?: number
  /**
   * 快照类型，可选值：full，全量；increment，增量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapShotType?: string
  /**
   * 备份文件备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupName?: string
}

/**
 * UpgradeProxy请求参数结构体
 */
export interface UpgradeProxyRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * cpu核数
   */
  Cpu: number
  /**
   * 内存
   */
  Mem: number
  /**
   * 数据库代理组节点个数
   */
  ProxyCount?: number
  /**
   * 数据库代理组ID（已废弃）
   */
  ProxyGroupId?: string
  /**
   * 重新负载均衡：auto（自动），manual（手动）
   */
  ReloadBalance?: string
  /**
   * 升级时间 ：no（升级完成时）yes（实例维护时间）
   */
  IsInMaintainPeriod?: string
  /**
   * 数据库代理节点信息
   */
  ProxyZones?: Array<ProxyZone>
}

/**
 * DescribeBinlogDownloadUrl返回参数结构体
 */
export interface DescribeBinlogDownloadUrlResponse {
  /**
   * 下载地址
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchClusterVpc请求参数结构体
 */
export interface SwitchClusterVpcRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 字符串vpc id
   */
  UniqVpcId: string
  /**
   * 字符串子网id
   */
  UniqSubnetId: string
  /**
   * 旧地址回收时间
   */
  OldIpReserveHours: number
}

/**
 * CloseProxy请求参数结构体
 */
export interface CloseProxyRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 是否只关闭读写分离，取值：是 "true","false"
   */
  OnlyCloseRW?: boolean
}

/**
 * 实例信息
 */
export interface CynosdbInstance {
  /**
   * 用户Uin
   */
  Uin?: string
  /**
   * 用户AppId
   */
  AppId?: number
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 实例状态
   */
  Status?: string
  /**
   * 实例状态中文描述
   */
  StatusDesc?: string
  /**
   * 实例形态，是否为serverless实例
   */
  DbMode?: string
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 数据库版本
   */
  DbVersion?: string
  /**
   * Cpu，单位：核
   */
  Cpu?: number
  /**
   * 内存，单位：GB
   */
  Memory?: number
  /**
   * 存储量，单位：GB
   */
  Storage?: number
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 实例当前角色
   */
  InstanceRole?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * VPC网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 实例内网IP
   */
  Vip?: string
  /**
   * 实例内网端口
   */
  Vport?: number
  /**
   * 付费模式
   */
  PayMode?: number
  /**
   * 实例过期时间
   */
  PeriodEndTime?: string
  /**
   * 销毁期限
   */
  DestroyDeadlineText?: string
  /**
   * 隔离时间
   */
  IsolateTime?: string
  /**
   * 网络类型
   */
  NetType?: number
  /**
   * 外网域名
   */
  WanDomain?: string
  /**
   * 外网IP
   */
  WanIP?: string
  /**
   * 外网端口
   */
  WanPort?: number
  /**
   * 外网状态
   */
  WanStatus?: string
  /**
   * 实例销毁时间
   */
  DestroyTime?: string
  /**
   * Cynos内核版本
   */
  CynosVersion?: string
  /**
   * 正在处理的任务
   */
  ProcessingTask?: string
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * serverless实例cpu下限
   */
  MinCpu?: number
  /**
   * serverless实例cpu上限
   */
  MaxCpu?: number
  /**
   * serverless实例状态, 可选值：
resume
pause
   */
  ServerlessStatus?: string
  /**
   * 预付费存储Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageId?: string
  /**
   * 存储付费类型
   */
  StoragePayMode?: number
  /**
   * 物理区
   */
  PhysicalZone?: string
  /**
   * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessType?: string
  /**
   * 任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<ObjectTask>
  /**
   * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFreeze?: string
  /**
   * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTags?: Array<Tag>
  /**
   * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterZone?: string
  /**
   * 备可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZones?: Array<string>
  /**
   * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceNetInfo?: Array<InstanceNetInfo>
  /**
   * 实例绑定资源包信息（此处只返回计算资源包，即packageType=CCU）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePackages?: Array<ResourcePackage>
  /**
   * 实例索引形态,可选值【mixedRowColumn（行列混存），onlyRowIndex（仅行存）】
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceIndexMode?: string
  /**
   * 当前实例支持的能力
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceAbility?: InstanceAbility
  /**
   * 实例机器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 实例存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStorageType?: string
}

/**
 * DescribeClusterPasswordComplexity返回参数结构体
 */
export interface DescribeClusterPasswordComplexityResponse {
  /**
   * 数据字典参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordDictionary?: ParamInfo
  /**
   * 密码长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordLength?: ParamInfo
  /**
   * 大小写敏感字符个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordMixedCaseCount?: ParamInfo
  /**
   * 数字个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordNumberCount?: ParamInfo
  /**
   * 密码等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordPolicy?: ParamInfo
  /**
   * 特殊字符个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidatePasswordSpecialCharCount?: ParamInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditRuleWithInstanceIds请求参数结构体
 */
export interface DescribeAuditRuleWithInstanceIdsRequest {
  /**
   * 实例ID。目前仅支持单个实例的查询。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeClusterDatabases返回参数结构体
 */
export interface DescribeClusterDatabasesResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 数据库列表
   */
  Databases?: Array<string>
  /**
   * 分页限制数
   */
  Limit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例变配任务信息
 */
export interface ModifyInstanceData {
  /**
   * 变配后CPU
   */
  Cpu?: number
  /**
   * 变配后内存
   */
  Memory?: number
  /**
   * 变配后存储上限
   */
  StorageLimit?: number
  /**
   * 变配前CPU
   */
  OldCpu?: number
  /**
   * 变配前内存
   */
  OldMemory?: number
  /**
   * 变配前存储上限
   */
  OldStorageLimit?: number
  /**
   * 变配前实例机器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldDeviceType?: string
  /**
   * 变配后实例机器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeviceType?: string
  /**
   * 升级方式。升级完成后切换或维护时间内切换
   */
  UpgradeType?: string
}

/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID，支持批量查询
   */
  InstanceIds: Array<string>
  /**
   * 参数名搜索条件，支持模糊匹配
   */
  ParamKeyword?: string
  /**
   * 是否为全局参数
   */
  IsGlobal?: string
}

/**
 * ModifyBinlogSaveDays请求参数结构体
 */
export interface ModifyBinlogSaveDaysRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * Binlog保留天数
   */
  BinlogSaveDays: number
}

/**
 * 数据库代理规格
 */
export interface ProxySpec {
  /**
   * 数据库代理cpu核数
   */
  Cpu?: number
  /**
   * 数据库代理内存
   */
  Mem?: number
}

/**
 * AddInstances返回参数结构体
 */
export interface AddInstancesResponse {
  /**
   * 冻结流水，一次开通一个冻结流水。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 后付费订单号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 发货资源id列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceIds?: Array<string>
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例慢查询信息
 */
export interface SlowQueriesItem {
  /**
   * 执行时间戳
   */
  Timestamp?: number
  /**
   * 执行时长，单位秒
   */
  QueryTime?: number
  /**
   * sql语句
   */
  SqlText?: string
  /**
   * 客户端host
   */
  UserHost?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 锁时长，单位秒
   */
  LockTime?: number
  /**
   * 扫描行数
   */
  RowsExamined?: number
  /**
   * 返回行数
   */
  RowsSent?: number
  /**
   * sql模板
   */
  SqlTemplate?: string
  /**
   * sql语句md5
   */
  SqlMd5?: string
  /**
   * 远程读取次数
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncReadCountRemote?: number
  /**
   * 远程读取的字节数
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncReadBytesRemote?: number
  /**
   * 远程读取所花费的时间（微秒）
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncReadTimeRemote?: number
  /**
   * 远程写入次数
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncWriteCountRemote?: number
  /**
   * 远程写入的字节数。
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncWriteBytesRemote?: number
  /**
   * 远程写入所花费的时间（微秒）。
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncWriteTimeRemote?: number
  /**
   * 事务提交延迟（微秒）
数据库内核版本大于3.1.12
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrxCommitDelay?: number
}

/**
 * 数据库代理组详细信息
 */
export interface ProxyGroupInfo {
  /**
   * 数据库代理组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyGroup: ProxyGroup
  /**
   * 数据库代理组读写分离信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyGroupRwInfo: ProxyGroupRwInfo
  /**
   * 数据库代理节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyNodes: Array<ProxyNodeInfo>
  /**
   * 数据库代理连接池信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionPool: ProxyConnectionPoolInfo
  /**
   * 数据库代理网络信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetAddrInfos: Array<NetAddr>
  /**
   * 数据库代理任务集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks: Array<ObjectTask>
}

/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProxyEndPoint请求参数结构体
 */
export interface CreateProxyEndPointRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 私有网络ID，默认与集群私有网络ID保持一致
   */
  UniqueVpcId: string
  /**
   * 私有网络子网ID，默认与集群子网ID保持一致
   */
  UniqueSubnetId: string
  /**
   * 连接池类型：SessionConnectionPool(会话级别连接池 )
   */
  ConnectionPoolType?: string
  /**
   * 是否开启连接池,yes-开启，no-不开启
   */
  OpenConnectionPool?: string
  /**
   * 连接池阈值：单位（秒）
   */
  ConnectionPoolTimeOut?: number
  /**
   * 绑定的安全组ID数组
   */
  SecurityGroupIds?: Array<string>
  /**
   * 描述说明
   */
  Description?: string
  /**
   * 想要绑定的vip信息，需与UniqueVpcId对应。
   */
  Vip?: string
  /**
   * 权重模式：
system-系统分配，custom-自定义
   */
  WeightMode?: string
  /**
   * 是否自动添加只读实例，yes-是，no-不自动添加
   */
  AutoAddRo?: string
  /**
   * 是否开启故障转移。
yes：开启
no：不开启。
数据库代理出现故障时，链接地址将会路由到主实例
   */
  FailOver?: string
  /**
   * 一致性类型：
eventual,global,session
   */
  ConsistencyType?: string
  /**
   * 读写属性：
READWRITE,READONLY
   */
  RwType?: string
  /**
   * 一致性超时时间。取值范围：0~1000000（微秒）,设置0则表示若只读实例出现延迟, 导致一致性策略不满足, 请求将一直等待
   */
  ConsistencyTimeOut?: number
  /**
   * 是否开启事务拆分。在一个事务中拆分读和写到不同的实例上去执行
   */
  TransSplit?: boolean
  /**
   * 连接模式：
nearby,balance
   */
  AccessMode?: string
  /**
   * 实例权重
   */
  InstanceWeights?: Array<ProxyInstanceWeight>
}

/**
 * 审计规则模板的详情
 */
export interface AuditRuleTemplateInfo {
  /**
   * 规则模板ID。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名称。
   */
  RuleTemplateName?: string
  /**
   * 规则模板的过滤条件
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 规则模板描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 规则模板创建时间。
   */
  CreateAt?: string
  /**
   * 规则模板修改时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateAt?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmPolicy?: number
  /**
   * 模板状态。0-无任务 ，1-修改中。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 规则模板应用在哪些在实例。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedInstances?: Array<string>
}

/**
 * DescribeParamTemplateDetail请求参数结构体
 */
export interface DescribeParamTemplateDetailRequest {
  /**
   * 参数模板ID
   */
  TemplateId: number
}

/**
 * ModifyAccountPrivileges请求参数结构体
 */
export interface ModifyAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 账号信息
   */
  Account: InputAccount
  /**
   * 全局权限数组
   */
  GlobalPrivileges?: Array<string>
  /**
   * 数据库权限数组
   */
  DatabasePrivileges?: Array<DatabasePrivileges>
  /**
   * 表权限数组
   */
  TablePrivileges?: Array<TablePrivileges>
}

/**
 * ExportResourcePackageDeductDetails请求参数结构体
 */
export interface ExportResourcePackageDeductDetailsRequest {
  /**
   * 需要导出的资源包ID
   */
  PackageId: string
  /**
   * 使用资源包容量的cynos集群ID
   */
  ClusterIds?: Array<string>
  /**
   * 排序字段，目前支持：createTime（资源包被抵扣时间），successDeductSpec（资源包抵扣量）
   */
  OrderBy?: string
  /**
   * 排序类型，支持ASC、DESC、asc、desc
   */
  OrderByType?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 单次最大导出数据行数，目前最大支持2000行
   */
  Limit?: string
  /**
   * 偏移量页数
   */
  Offset?: string
  /**
   * 导出数据格式，目前仅支持csv格式，留作扩展
   */
  FileType?: string
}

/**
 * StartCLSDelivery返回参数结构体
 */
export interface StartCLSDeliveryResponse {
  /**
   * 异步任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数变化信息
 */
export interface ParamItemInfo {
  /**
   * 参数名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName?: string
  /**
   * 参数新值

注意：此字段可能返回 null，表示取不到有效值。
   */
  NewValue?: string
  /**
   * 参数旧值

注意：此字段可能返回 null，表示取不到有效值。
   */
  OldValue?: string
  /**
   * 参数公式

注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueFunction?: string
}

/**
 * UpgradeProxy返回参数结构体
 */
export interface UpgradeProxyResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceSpecs请求参数结构体
 */
export interface DescribeInstanceSpecsRequest {
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
   */
  DbType: string
  /**
   * 是否需要返回可用区信息
   */
  IncludeZoneStocks?: boolean
  /**
   * 实例机器类型
   */
  DeviceType?: string
}

/**
 * DescribeProxyNodes返回参数结构体
 */
export interface DescribeProxyNodesResponse {
  /**
   * 数据库代理节点总数
   */
  TotalCount?: number
  /**
   * 数据库代理节点列表
   */
  ProxyNodeInfos?: Array<ProxyNodeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库代理组节点
 */
export interface ProxyNodeInfo {
  /**
   * 数据库代理节点ID
   */
  ProxyNodeId?: string
  /**
   * 节点当前连接数, DescribeProxyNodes接口此字段值不返回
   */
  ProxyNodeConnections?: number
  /**
   * 数据库代理节点cpu
   */
  Cpu?: number
  /**
   * 数据库代理节点内存
   */
  Mem?: number
  /**
   * 数据库代理节点状态
   */
  Status?: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 用户AppID
   */
  AppId?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 数据库代理节点名字
   */
  OssProxyNodeName?: string
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 地域信息
   */
  RegionSet?: Array<SaleRegion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClusterTables返回参数结构体
 */
export interface SearchClusterTablesResponse {
  /**
   * 数据表列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<DatabaseTables>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyParamTemplate请求参数结构体
 */
export interface ModifyParamTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId: number
  /**
   * 模板名
   */
  TemplateName?: string
  /**
   * 模板描述
   */
  TemplateDescription?: string
  /**
   * 参数列表
   */
  ParamList?: Array<ModifyParamItem>
}

/**
 * OpenAuditService返回参数结构体
 */
export interface OpenAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeChangedParamsAfterUpgrade返回参数结构体
 */
export interface DescribeChangedParamsAfterUpgradeResponse {
  /**
   * 参数个数
   */
  TotalCount?: number
  /**
   * 实例参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ParamItemInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyServerlessStrategy返回参数结构体
 */
export interface ModifyServerlessStrategyResponse {
  /**
   * 异步流程id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库代理组读写分离信息
 */
export interface ProxyGroupRwInfo {
  /**
   * 一致性类型 eventual-最终一致性,global-全局一致性,session-会话一致性
   */
  ConsistencyType?: string
  /**
   * 一致性超时时间
   */
  ConsistencyTimeOut?: number
  /**
   * 权重模式 system-系统分配，custom-自定义
   */
  WeightMode?: string
  /**
   * 是否开启故障转移
   */
  FailOver?: string
  /**
   * 是否自动添加只读实例，yes-是，no-不自动添加
   */
  AutoAddRo?: string
  /**
   * 实例权重数组
   */
  InstanceWeights?: Array<ProxyInstanceWeight>
  /**
   * 是否开通读写节点，yse-是，no-否
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenRw?: string
  /**
   * 读写属性，可选值：READWRITE,READONLY
   */
  RwType?: string
  /**
   * 事务拆分
   */
  TransSplit?: boolean
  /**
   * 连接模式，可选值：balance，nearby
   */
  AccessMode?: string
}

/**
 * DescribeProxyNodes请求参数结构体
 */
export interface DescribeProxyNodesRequest {
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
  /**
   * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
   */
  OrderBy?: string
  /**
   * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
   */
  OrderByType?: string
  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>
}

/**
 * DescribeAuditLogs请求参数结构体
 */
export interface DescribeAuditLogsRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string
  /**
   * 开始时间，格式为："2017-07-12 10:29:20"。
   */
  StartTime: string
  /**
   * 结束时间，格式为："2017-07-12 10:29:20"。
   */
  EndTime: string
  /**
   * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
   */
  Order?: string
  /**
   * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
   */
  OrderBy?: string
  /**
   * 已废弃。
   */
  Filter?: AuditLogFilter
  /**
   * 分页参数，单次返回的数据条数。默认值为100，最大值为100。
   */
  Limit?: number
  /**
   * 分页偏移量。
说明：Limit 和 Offset 的取值之和需小于等于65536。
   */
  Offset?: number
  /**
   * 过滤条件。多个值之前是且的关系。
   */
  LogFilter?: Array<InstanceAuditLogFilter>
}

/**
 * InquirePriceCreate返回参数结构体
 */
export interface InquirePriceCreateResponse {
  /**
   * 实例价格
   */
  InstancePrice?: TradePrice
  /**
   * 存储价格
   */
  StoragePrice?: TradePrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusters请求参数结构体
 */
export interface CreateClustersRequest {
  /**
   * 可用区
   */
  Zone: string
  /**
   * 所属VPC网络ID
   */
  VpcId: string
  /**
   * 所属子网ID
   */
  SubnetId: string
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
   */
  DbType: string
  /**
   * 数据库版本，取值范围: 
<li> MYSQL可选值：5.7，8.0 </li>
   */
  DbVersion: string
  /**
   * 所属项目ID
   */
  ProjectId?: number
  /**
   * 当DbMode为NORMAL或不填时必选
普通实例Cpu核数
   */
  Cpu?: number
  /**
   * 当DbMode为NORMAL或不填时必选
普通实例内存,单位GB
   */
  Memory?: number
  /**
   * 该参数无实际意义，已废弃。
存储大小，单位GB。
   */
  Storage?: number
  /**
   * 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'）
   */
  ClusterName?: string
  /**
   * 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种)
   */
  AdminPassword?: string
  /**
   * 端口，默认3306，取值范围[0, 65535)
   */
  Port?: number
  /**
   * 计费模式，按量计费：0，包年包月：1。默认按量计费。
   */
  PayMode?: number
  /**
   * 购买集群数，可选值范围[1,50]，默认为1
   */
  Count?: number
  /**
   * 回档类型：
noneRollback：不回档；
snapRollback，快照回档；
timeRollback，时间点回档
   */
  RollbackStrategy?: string
  /**
   * 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效
   */
  RollbackId?: number
  /**
   * 回档时，传入源集群ID，用于查找源poolId
   */
  OriginalClusterId?: string
  /**
   * 时间点回档，指定时间；快照回档，快照时间
   */
  ExpectTime?: string
  /**
   * 该参数无实际意义，已废弃。
时间点回档，指定时间允许范围
   */
  ExpectTimeThresh?: number
  /**
   * 普通实例存储上限，单位GB
当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限
   */
  StorageLimit?: number
  /**
   * 实例数量，数量范围为(0,16]
   */
  InstanceCount?: number
  /**
   * 包年包月购买时长
   */
  TimeSpan?: number
  /**
   * 包年包月购买时长单位，['s','d','m','y']
   */
  TimeUnit?: string
  /**
   * 包年包月购买是否自动续费，默认为0。
0标识默认续费方式，1表示自动续费，2表示不自动续费。
   */
  AutoRenewFlag?: number
  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number
  /**
   * 实例数量（该参数已不再使用，只做存量兼容处理）
   */
  HaCount?: number
  /**
   * 订单来源
   */
  OrderSource?: string
  /**
   * 集群创建需要绑定的tag数组信息
   */
  ResourceTags?: Array<Tag>
  /**
   * Db类型
当DbType为MYSQL时可选(默认NORMAL)：
<li>NORMAL</li>
<li>SERVERLESS</li>
   */
  DbMode?: string
  /**
   * 当DbMode为SERVERLESS时必填
cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MinCpu?: number
  /**
   * 当DbMode为SERVERLESS时必填：
cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MaxCpu?: number
  /**
   * 当DbMode为SERVERLESS时，指定集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
默认值:yes
   */
  AutoPause?: string
  /**
   * 当DbMode为SERVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]
默认值:600
   */
  AutoPauseDelay?: number
  /**
   * 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费
当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费
回档与克隆均不支持包年包月存储
   */
  StoragePayMode?: number
  /**
   * 安全组id数组
   */
  SecurityGroupIds?: Array<string>
  /**
   * 告警策略Id数组
   */
  AlarmPolicyIds?: Array<string>
  /**
   * 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感
   */
  ClusterParams?: Array<ParamItem>
  /**
   * 交易模式，0-下单且支付，1-下单
   */
  DealMode?: number
  /**
   * 参数模板ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID
   */
  ParamTemplateId?: number
  /**
   * 多可用区地址
   */
  SlaveZone?: string
  /**
   * 实例初始化配置信息，主要用于购买集群时选不同规格实例
   */
  InstanceInitInfos?: Array<InstanceInitInfo>
}

/**
 * DescribeClusterParamLogs请求参数结构体
 */
export interface DescribeClusterParamLogsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID列表，用来记录具体操作哪些实例
   */
  InstanceIds?: Array<string>
  /**
   * 排序字段，定义在回返结果的基于哪个字段进行排序
   */
  OrderBy?: string
  /**
   * 定义具体的排序规则，限定为desc,asc,DESC,ASC其中之一
   */
  OrderByType?: string
  /**
   * 返回数量，默认为 20，取值范围为(0,100]
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0，取值范围为[0,INF)
   */
  Offset?: number
}

/**
 * CloseProxy返回参数结构体
 */
export interface CloseProxyResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcePackageSaleSpec请求参数结构体
 */
export interface DescribeResourcePackageSaleSpecRequest {
  /**
   * 实例类型
   */
  InstanceType: string
  /**
   * 资源包使用地域
china-中国内地通用，overseas-港澳台及海外通用
   */
  PackageRegion: string
  /**
   * 资源包类型
CCU-计算资源包
DISK-存储资源包
   */
  PackageType: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 限制
   */
  Limit?: number
}

/**
 * UnbindClusterResourcePackages返回参数结构体
 */
export interface UnbindClusterResourcePackagesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollBackCluster返回参数结构体
 */
export interface RollBackClusterResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInstanceGrps返回参数结构体
 */
export interface DescribeClusterInstanceGrpsResponse {
  /**
   * 实例组个数
   */
  TotalCount?: number
  /**
   * 实例组列表
   * @deprecated
   */
  InstanceGrpInfoList?: Array<CynosdbInstanceGrp>
  /**
   * 实例组列表
   */
  InstanceGroupInfoList?: Array<CynosdbInstanceGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupConfig返回参数结构体
 */
export interface ModifyBackupConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterDatabase请求参数结构体
 */
export interface ModifyClusterDatabaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库名
   */
  DbName: string
  /**
   * 新授权用户主机权限
   */
  NewUserHostPrivileges?: Array<UserHostPrivilege>
  /**
   * 备注
   */
  Description?: string
  /**
   * 历史授权用户主机权限
   */
  OldUserHostPrivileges?: Array<UserHostPrivilege>
}

/**
 * DescribeServerlessStrategy返回参数结构体
 */
export interface DescribeServerlessStrategyResponse {
  /**
   * cpu负载为 0 时持续多久（秒）发起自动暂停
   */
  AutoPauseDelay?: number
  /**
   * cpu负载超过当前规格核数时，持续多久（秒）发起自动扩容
   */
  AutoScaleUpDelay?: number
  /**
   * cpu 负载低于低一级规格核数时，持续多久（秒）发起自动缩容
   */
  AutoScaleDownDelay?: number
  /**
   * 是否自动暂停，可能值：
yes
no
   */
  AutoPause?: string
  /**
   * 集群是否允许向上扩容，可选范围<li>yes</li><li>no</li>
   */
  AutoScaleUp?: string
  /**
   * 集群是否允许向下缩容，可选范围<li>yes</li><li>no</li>
   */
  AutoScaleDown?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例日志投递信息
 */
export interface InstanceCLSDeliveryInfo {
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 实例name

注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 日志主题id

注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 日志主题name
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 日志集id

注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * 日志集name

注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 日志投递地域

注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 投递状态creating,running,offlining,offlined

注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 日志类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogType?: string
}

/**
 * ModifyMaintainPeriodConfig返回参数结构体
 */
export interface ModifyMaintainPeriodConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 实例组 ID 数组，cynosdbmysql-grp-前缀开头或集群 ID。
说明：要获取集群的实例组 ID，可通过 [查询集群实例组](https://cloud.tencent.com/document/product/1003/103934) 进行。
   */
  InstanceIds: Array<string>
  /**
   * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
   */
  SecurityGroupIds: Array<string>
  /**
   * 可用区。
说明：请正确输入集群所在的主可用区，若输入非集群所在的主可用区可能显示调用成功，但实际执行会失败。
   */
  Zone: string
}

/**
 * ModifyBackupName请求参数结构体
 */
export interface ModifyBackupNameRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 备份文件ID
   */
  BackupId: number
  /**
   * 备注名，长度不能超过60个字符
   */
  BackupName: string
}

/**
 * 规则审计的过滤条件
 */
export interface AuditRuleFilters {
  /**
   * 单条审计规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleFilters: Array<RuleFilters>
}

/**
 * DescribeClusterParams请求参数结构体
 */
export interface DescribeClusterParamsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 参数名字
   */
  ParamName?: string
  /**
   * 是否为全局参数
   */
  IsGlobal?: string
}

/**
 * ModifyAccountHost返回参数结构体
 */
export interface ModifyAccountHostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountAllGrantPrivileges请求参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 账号信息
   */
  Account: InputAccount
}

/**
 * DeleteCLSDelivery请求参数结构体
 */
export interface DeleteCLSDeliveryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 日志主题id
   */
  CLSTopicIds: Array<string>
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 是否维护时间运行
   */
  IsInMaintainPeriod?: string
}

/**
 * CreateCLSDelivery返回参数结构体
 */
export interface CreateCLSDeliveryResponse {
  /**
   * 异步任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServerlessInstanceSpecs返回参数结构体
 */
export interface DescribeServerlessInstanceSpecsResponse {
  /**
   * Serverless实例可选规格
   */
  Specs?: Array<ServerlessSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 手动备份任务信息
 */
export interface ManualBackupData {
  /**
   * 备份类型。snapshot-快照备份
   */
  BackupType?: string
  /**
   * 备份方式。auto-自动备份，manual-手动
   */
  BackupMethod?: string
  /**
   * 备份时间
   */
  SnapshotTime?: string
  /**
   * 跨地域备份项详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossRegionBackupInfos?: Array<CrossRegionBackupItem>
}

/**
 * DescribeBinlogs请求参数结构体
 */
export interface DescribeBinlogsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 限制条数
   */
  Limit?: number
}

/**
 * InquirePriceModify返回参数结构体
 */
export interface InquirePriceModifyResponse {
  /**
   * 实例价格
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancePrice?: TradePrice
  /**
   * 存储价格
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoragePrice?: TradePrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计日志搜索条件
 */
export interface InstanceAuditLogFilter {
  /**
   * 过滤项。目前支持以下搜索条件：

包含、不包含、包含（分词维度）、不包含（分词维度）: sql - SQL详情；alarmLevel - 告警等级；ruleTemplateId - 规则模板Id

等于、不等于、包含、不包含： host - 客户端地址； user - 用户名； dbName - 数据库名称；

等于、不等于： sqlType - SQL类型； errCode - 错误码； threadId - 线程ID；

范围搜索（时间类型统一为微秒）： execTime - 执行时间； lockWaitTime - 执行时间； ioWaitTime - IO等待时间； trxLivingTime - 事务持续时间； cpuTime - cpu时间； checkRows - 扫描行数； affectRows - 影响行数； sentRows - 返回行数。
   */
  Type: string
  /**
   * 过滤条件。支持以下条件：
WINC-包含（分词维度），
WEXC-不包含（分词维度）,
INC - 包含,
EXC - 不包含,
EQS - 等于,
NEQ - 不等于,
RA - 范围。
   */
  Compare: string
  /**
   * 过滤的值。反向查询时，多个值之前是且的关系，正向查询多个值是或的关系。
   */
  Value: Array<string>
}

/**
 * 备可用区库存信息
 */
export interface SlaveZoneStockInfo {
  /**
   * 备可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZone?: string
  /**
   * 备可用区的库存数量	
注意：此字段可能返回 null，表示取不到有效值。
   */
  StockCount?: number
  /**
   * 备可用区是否有库存	
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasStock?: boolean
}

/**
 * ModifyProxyRwSplit请求参数结构体
 */
export interface ModifyProxyRwSplitRequest {
  /**
   * 集群ID，例如cynosdbmysql-asd123
   */
  ClusterId: string
  /**
   * 数据库代理组ID，例如cynosdbmysql-proxy-qwe123
   */
  ProxyGroupId: string
  /**
   * 一致性类型；“eventual"-最终一致性, "session"-会话一致性, "global"-全局一致性
   */
  ConsistencyType?: string
  /**
   * 一致性超时时间。
取值范围：0~1000000（微秒）,设置0则表示若只读实例出现延迟, 导致一致性策略不满足, 请求将一直等待。
   */
  ConsistencyTimeOut?: string
  /**
   * 读写权重分配模式；系统自动分配："system"， 自定义："custom"
   */
  WeightMode?: string
  /**
   * 实例只读权重。
该参数必填。
   */
  InstanceWeights?: Array<ProxyInstanceWeight>
  /**
   * 是否开启故障转移，代理出现故障后，连接地址将路由到主实例，取值："yes" , "no"
   */
  FailOver?: string
  /**
   * 是否自动添加只读实例，取值："yes" , "no"
   */
  AutoAddRo?: string
  /**
   * 是否打开读写分离。
该参数已废弃，请通过RwType设置读写属性。
   */
  OpenRw?: string
  /**
   * 读写类型：
READWRITE,READONLY
   */
  RwType?: string
  /**
   * 事务拆分。
在一个事务中拆分读和写到不同的实例上去执行。
   */
  TransSplit?: boolean
  /**
   * 连接模式：
nearby,balance
   */
  AccessMode?: string
  /**
   * 是否打开连接池：
yes,no
   */
  OpenConnectionPool?: string
  /**
   * 连接池类型：
SessionConnectionPool
   */
  ConnectionPoolType?: string
  /**
   * 连接池时间。
可选范围:0~300（秒）
   */
  ConnectionPoolTimeOut?: number
}

/**
 * DescribeResourcePackageList返回参数结构体
 */
export interface DescribeResourcePackageListResponse {
  /**
   * 资源包总数
   */
  Total?: number
  /**
   * 资源包明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail?: Array<Package>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务信息
 */
export interface ObjectTask {
  /**
   * 任务自增ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
  /**
   * 任务ID（集群ID|实例组ID|实例ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectId?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectType?: string
}

/**
 * ModifyAuditRuleTemplates请求参数结构体
 */
export interface ModifyAuditRuleTemplatesRequest {
  /**
   * 审计规则模板ID。
   */
  RuleTemplateIds: Array<string>
  /**
   * 修改后的审计规则。
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 修改后的规则模板名称。
   */
  RuleTemplateName?: string
  /**
   * 修改后的规则模板描述。
   */
  Description?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
}

/**
 * 创建集群任务信息
 */
export interface CreateClustersData {
  /**
   * 实例CPU
   */
  Cpu?: number
  /**
   * 实例内存
   */
  Memory?: number
  /**
   * 集群存储上限
   */
  StorageLimit?: number
}

/**
 * DescribeProxies请求参数结构体
 */
export interface DescribeProxiesRequest {
  /**
   * 集群ID（该参数必传，例如cynosdbmysql-xxxxxx）
   */
  ClusterId?: string
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
  /**
   * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
   */
  OrderBy?: string
  /**
   * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
   */
  OrderByType?: string
  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryParamFilter>
}

/**
 * 修改的实例参数信息
 */
export interface ModifyParamItem {
  /**
   * 参数名
   */
  ParamName: string
  /**
   * 参数当前值
   */
  CurrentValue: string
  /**
   * 参数旧值（只在出参时有用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldValue?: string
}

/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
  /**
   * 实例组 ID 数组，cynosdbmysql-grp-前缀开头或集群 ID。
说明：要获取集群的实例组 ID，可通过 [查询集群实例组](https://cloud.tencent.com/document/product/1003/103934) 进行。
   */
  InstanceIds: Array<string>
  /**
   * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
   */
  SecurityGroupIds: Array<string>
  /**
   * 可用区
   */
  Zone: string
}

/**
 * 参数模板信息
 */
export interface ParamTemplateListInfo {
  /**
   * 参数模板ID
   */
  Id?: number
  /**
   * 参数模板名称
   */
  TemplateName?: string
  /**
   * 参数模板描述
   */
  TemplateDescription?: string
  /**
   * 引擎版本
   */
  EngineVersion?: string
  /**
   * 数据库类型，可选值：NORMAL，SERVERLESS
   */
  DbMode?: string
  /**
   * 参数模板详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamInfoSet?: Array<TemplateParamInfo>
}

/**
 * CloseProxyEndPoint请求参数结构体
 */
export interface CloseProxyEndPointRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId: string
}

/**
 * DescribeBinlogs返回参数结构体
 */
export interface DescribeBinlogsResponse {
  /**
   * 记录总条数
   */
  TotalCount?: number
  /**
   * Binlog列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Binlogs?: Array<BinlogItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计实例详情
 */
export interface AuditInstanceInfo {
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tag>
}

/**
 * AddClusterSlaveZone返回参数结构体
 */
export interface AddClusterSlaveZoneResponse {
  /**
   * 异步FlowId
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProxySpecs返回参数结构体
 */
export interface DescribeProxySpecsResponse {
  /**
   * 数据库代理规格列表
   */
  ProxySpecs?: Array<ProxySpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindClusterResourcePackages请求参数结构体
 */
export interface BindClusterResourcePackagesRequest {
  /**
   * 资源包唯一ID
   */
  PackageIds: Array<string>
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * IsolateInstance返回参数结构体
 */
export interface IsolateInstanceResponse {
  /**
   * 任务流id
   */
  FlowId?: number
  /**
   * 隔离实例的订单id（预付费实例）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CopyClusterPasswordComplexity返回参数结构体
 */
export interface CopyClusterPasswordComplexityResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterTransparentEncryptInfo请求参数结构体
 */
export interface DescribeClusterTransparentEncryptInfoRequest {
  /**
   * 集群id
   */
  ClusterId: string
}

/**
 * DeleteParamTemplate请求参数结构体
 */
export interface DeleteParamTemplateRequest {
  /**
   * 参数模板ID
   */
  TemplateId: number
}

/**
 * RevokeAccountPrivileges返回参数结构体
 */
export interface RevokeAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * serverless规格
 */
export interface ServerlessSpec {
  /**
   * cpu最小值
   */
  MinCpu?: number
  /**
   * cpu最大值
   */
  MaxCpu?: number
  /**
   * 最大存储空间
   */
  MaxStorageSize?: number
  /**
   * 是否为默认规格
   */
  IsDefault?: number
  /**
   * 是否有库存
   */
  HasStock?: boolean
  /**
   * 库存数量
   */
  StockCount?: number
  /**
   * 可用区库存信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneStockInfos?: Array<ServerlessZoneStockInfo>
}

/**
 * DescribeClusterDetailDatabases返回参数结构体
 */
export interface DescribeClusterDetailDatabasesResponse {
  /**
   * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbInfos?: Array<DbInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateParamTemplate返回参数结构体
 */
export interface CreateParamTemplateResponse {
  /**
   * 模板ID
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountAllGrantPrivileges返回参数结构体
 */
export interface DescribeAccountAllGrantPrivilegesResponse {
  /**
   * 权限语句
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivilegeStatements?: Array<string>
  /**
   * 全局权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  GlobalPrivileges?: Array<string>
  /**
   * 数据库权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabasePrivileges?: Array<DatabasePrivileges>
  /**
   * 数据库表权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePrivileges?: Array<TablePrivileges>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改数据库内核版本任务信息
 */
export interface ModifyDbVersionData {
  /**
   * 修改前版本
   */
  OldVersion?: string
  /**
   * 修改后版本
   */
  NewVersion?: string
  /**
   * 升级方式
   */
  UpgradeType?: string
}

/**
 * 数据库权限列表
 */
export interface DatabasePrivileges {
  /**
   * 数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db: string
  /**
   * 权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Privileges: Array<string>
}

/**
 * DescribeSupportProxyVersion请求参数结构体
 */
export interface DescribeSupportProxyVersionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
}

/**
 * DescribeProxySpecs请求参数结构体
 */
export interface DescribeProxySpecsRequest {
  /**
   * 集群id
   */
  ClusterId?: string
}

/**
 * ResumeServerless请求参数结构体
 */
export interface ResumeServerlessRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DeleteAuditLogFile返回参数结构体
 */
export interface DeleteAuditLogFileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例网络信息
 */
export interface InstanceNetInfo {
  /**
   * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupType?: string
  /**
   * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupId?: string
  /**
   * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 网络类型, 0-基础网络, 1-vpc网络, 2-黑石网络
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetType?: number
  /**
   * 私有网络IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 私有网络端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport?: number
  /**
   * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanDomain?: string
  /**
   * 外网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanIP?: string
  /**
   * 外网端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanPort?: number
  /**
   * 外网开启状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanStatus?: string
}

/**
 * ModifyClusterDatabase返回参数结构体
 */
export interface ModifyClusterDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例参数信息
 */
export interface InstanceParamItem {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例参数列表
   */
  ParamsItems?: Array<ParamItemDetail>
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
  /**
   * 实例ID
   * @deprecated
   */
  InstanceId?: string
  /**
   * 实例组ID
   */
  InstanceGroupId?: string
}

/**
 * 回档任务信息
 */
export interface RollbackData {
  /**
   * 实例CPU
   */
  Cpu?: number
  /**
   * 实例内存
   */
  Memory?: number
  /**
   * 集群存储上限
   */
  StorageLimit?: number
  /**
   * 原集群id
   */
  OriginalClusterId?: string
  /**
   * 原集群名
   */
  OriginalClusterName?: string
  /**
   * 回档方式
   */
  RollbackStrategy?: string
  /**
   * 快照时间
   */
  SnapshotTime?: string
  /**
   * 回档到serverlessls集群时最小CPU
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinCpu?: number
  /**
   * 回档到serverlessls集群时最大CPU
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCpu?: number
  /**
   * 快照ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapShotId?: number
  /**
   * 回档数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackDatabases?: Array<RollbackDatabase>
  /**
   * 回档数据表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackTables?: Array<RollbackTable>
  /**
   * 备份文件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupFileName?: string
  /**
   * 回档进程
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackProcess?: RollbackProcessInfo
}

/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 数据库CPU
   */
  Cpu: number
  /**
   * 数据库内存，单位GB
   */
  Memory: number
  /**
   * 升级类型：upgradeImmediate，upgradeInMaintain
   */
  UpgradeType: string
  /**
   * 实例机器类型
   */
  DeviceType?: string
  /**
   * 该参数已废弃
   */
  StorageLimit?: number
  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number
  /**
   * 该参数已废弃
   */
  DbType?: string
  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
  /**
   * NormalUpgrade：普通变配，FastUpgrade：极速变配，若变配过程判断会造成闪断，变配流程会终止。
   */
  UpgradeMode?: string
  /**
   * proxy同步升级
   */
  UpgradeProxy?: UpgradeProxy
}

/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
  /**
   * 实例参数列表
   */
  Items?: Array<InstanceParamItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchClusterVpc返回参数结构体
 */
export interface SwitchClusterVpcResponse {
  /**
   * 异步任务id。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 是否包含虚拟区
   */
  IncludeVirtualZones?: boolean
  /**
   * 是否展示地域下所有可用区，并显示用户每个可用区权限
   */
  ShowPermission?: boolean
}

/**
 * 集群绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * 规则模板内容
 */
export interface RuleTemplateInfo {
  /**
   * 规则模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateName?: string
  /**
   * 规则内容。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleFilters?: Array<RuleFilters>
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmPolicy?: number
  /**
   * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * StopCLSDelivery返回参数结构体
 */
export interface StopCLSDeliveryResponse {
  /**
   * 异步任务id

   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditLogFile返回参数结构体
 */
export interface CreateAuditLogFileResponse {
  /**
   * 审计日志文件名称。
   */
  FileName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseServerless返回参数结构体
 */
export interface PauseServerlessResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
  /**
   * 实例详情
   */
  Detail?: CynosdbInstanceDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccounts返回参数结构体
 */
export interface DeleteAccountsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateResourcePackage返回参数结构体
 */
export interface CreateResourcePackageResponse {
  /**
   * 付费总订单号
   */
  BigDealIds?: Array<string>
  /**
   * 每个物品对应一个dealName，业务需要根据dealName保证发货接口幂等
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBinlogConfig请求参数结构体
 */
export interface ModifyBinlogConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * Binlog配置信息
   */
  BinlogConfig: BinlogConfigInfo
}

/**
 * SetRenewFlag返回参数结构体
 */
export interface SetRenewFlagResponse {
  /**
   * 操作成功实例数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterDatabase返回参数结构体
 */
export interface CreateClusterDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群数
   */
  TotalCount?: number
  /**
   * 集群列表
   */
  ClusterSet?: Array<CynosdbCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupConfig返回参数结构体
 */
export interface DescribeBackupConfigResponse {
  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeBeg?: number
  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeEnd?: number
  /**
   * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800
   */
  ReserveDuration?: number
  /**
   * 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupFreq?: Array<string>
  /**
   * 备份方式，logic-逻辑备份，snapshot-快照备份
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupType?: string
  /**
   * 跨地域逻辑备份配置修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicCrossRegionsConfigUpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeParamTemplates返回参数结构体
 */
export interface DescribeParamTemplatesResponse {
  /**
   * 参数模板数量
   */
  TotalCount?: number
  /**
   * 参数模板信息
   */
  Items?: Array<ParamTemplateListInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库地址
 */
export interface Addr {
  /**
   * IP地址
   */
  IP?: string
  /**
   * 端口
   */
  Port?: number
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 */
export interface DescribeProjectSecurityGroupsRequest {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 限制量
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 搜索关键字
   */
  SearchKey?: string
}

/**
 * serverless类型的可用区库存信息
 */
export interface ServerlessZoneStockInfo {
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 存储量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StockCount?: number
  /**
   * 是否包含库存
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasStock?: boolean
  /**
   * 从可用区库存信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZoneStockInfos?: Array<SlaveZoneStockInfo>
}

/**
 * 数据库详细信息
 */
export interface DbInfo {
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 字符集类型
   */
  CharacterSet?: string
  /**
   * 数据库状态
   */
  Status?: string
  /**
   * 排序规则
   */
  CollateRule?: string
  /**
   * 数据库备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 用户权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserHostPrivileges?: Array<UserHostPrivilege>
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbId?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 集群Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * DescribeBackupDownloadUrl请求参数结构体
 */
export interface DescribeBackupDownloadUrlRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 备份ID
   */
  BackupId: number
}

/**
 * 实例审计详情信息
 */
export interface InstanceAuditStatus {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 审计状态。ON-表示审计已开启，OFF-表示审计关闭。
   */
  AuditStatus?: string
  /**
   * 日志保留时长。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogExpireDay?: number
  /**
   * 高频存储时长。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighLogExpireDay?: number
  /**
   * 低频存储时长。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LowLogExpireDay?: number
  /**
   * 日志存储量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingAmount?: number
  /**
   * 高频存储量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighRealStorage?: number
  /**
   * 低频存储量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LowRealStorage?: number
  /**
   * 是否为全审计。true-表示全审计。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuditAll?: boolean
  /**
   * 审计开通时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: string
  /**
   * 实例相关信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInfo?: AuditInstanceInfo
  /**
   * 总存储量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealStorage?: number
  /**
   * 实例所应用的规则模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 是否开启日志投递：ON，OFF
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deliver?: string
  /**
   * 日志投递类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverSummary?: Array<DeliverSummary>
}

/**
 * CopyClusterPasswordComplexity请求参数结构体
 */
export interface CopyClusterPasswordComplexityRequest {
  /**
   * 复制集群ID数组，例如["cynosdbmysql-bzxxrmtq","cynosdbmysql-qwer"]
   */
  ClusterIds: Array<string>
  /**
   * 集群id，例如"cynosdbmysql-bzxxrmtq"
   */
  SourceClusterId: string
}

/**
 * DescribeClusterInstanceGroups返回参数结构体
 */
export interface DescribeClusterInstanceGroupsResponse {
  /**
   * 实例组个数
   */
  TotalCount?: number
  /**
   * 实例组列表
   */
  InstanceGroupInfoList?: Array<CynosdbInstanceGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProxyEndPoint返回参数结构体
 */
export interface CreateProxyEndPointResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络信息
 */
export interface NetAddr {
  /**
   * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 内网端口号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport?: number
  /**
   * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanDomain?: string
  /**
   * 外网端口号
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanPort?: number
  /**
   * 网络类型（ro-只读,rw/ha-读写）
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetType?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqSubnetId?: string
  /**
   * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 外网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanIP?: string
  /**
   * 外网状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanStatus?: string
  /**
   * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupId?: string
}

/**
 * OpenWan请求参数结构体
 */
export interface OpenWanRequest {
  /**
   * 实例组id
   * @deprecated
   */
  InstanceGrpId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例组id
   */
  InstanceGroupId?: string
}

/**
 * ModifyAccountPrivileges返回参数结构体
 */
export interface ModifyAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceCreate请求参数结构体
 */
export interface InquirePriceCreateRequest {
  /**
   * 可用区,每个地域提供最佳实践
   */
  Zone: string
  /**
   * 购买计算节点个数
   */
  GoodsNum: number
  /**
   * 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS
   */
  InstancePayMode: string
  /**
   * 存储购买类型，可选值为：PREPAID, POSTPAID
   */
  StoragePayMode: string
  /**
   * 实例设备类型
   */
  DeviceType?: string
  /**
   * CPU核数，PREPAID与POSTPAID实例类型必传
   */
  Cpu?: number
  /**
   * 内存大小，单位G，PREPAID与POSTPAID实例类型必传
   */
  Memory?: number
  /**
   * Ccu大小，serverless类型必传
   */
  Ccu?: number
  /**
   * 存储大小，PREPAID存储类型必传
   */
  StorageLimit?: number
  /**
   * 购买时长，PREPAID购买类型必传
   */
  TimeSpan?: number
  /**
   * 时长单位，可选值为：m,d。PREPAID购买类型必传
   */
  TimeUnit?: string
}

/**
 * ModifyAuditService请求参数结构体
 */
export interface ModifyAuditServiceRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 日志保留时长。
   */
  LogExpireDay?: number
  /**
   * 高频日志保留时长。
   */
  HighLogExpireDay?: number
  /**
   * 修改实例审计规则为全审计。
   */
  AuditAll?: boolean
  /**
   * 规则审计。
   */
  AuditRuleFilters?: Array<AuditRuleFilters>
  /**
   * 规则模板ID。
   */
  RuleTemplateIds?: Array<string>
}

/**
 * ModifyClusterName返回参数结构体
 */
export interface ModifyClusterNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 跨地域备份各地域备份信息
 */
export interface CrossRegionBackupItem {
  /**
   * 备份的目标地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossRegion?: string
  /**
   * 目标地域的备份任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupId?: string
  /**
   * 目标地域的备份状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: string
}

/**
 * ExportInstanceSlowQueries请求参数结构体
 */
export interface ExportInstanceSlowQueriesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 事务开始最早时间
   */
  StartTime?: string
  /**
   * 事务开始最晚时间
   */
  EndTime?: string
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 用户名
   */
  Username?: string
  /**
   * 客户端host
   */
  Host?: string
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 文件类型，可选值：csv, original
   */
  FileType?: string
  /**
   * 排序字段，可选值： QueryTime,LockTime,RowsExamined,RowsSent
   */
  OrderBy?: string
  /**
   * 排序类型，可选值：asc,desc
   */
  OrderByType?: string
}

/**
 * ModifyAuditService返回参数结构体
 */
export interface ModifyAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeServerless返回参数结构体
 */
export interface ResumeServerlessResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 售卖可用区信息
 */
export interface SaleZone {
  /**
   * 可用区英文名
   */
  Zone?: string
  /**
   * 可用区数字ID
   */
  ZoneId?: number
  /**
   * 可用区中文名
   */
  ZoneZh?: string
  /**
   * 是否支持serverless集群<br>
0:不支持<br>
1:支持
   */
  IsSupportServerless?: number
  /**
   * 是否支持普通集群<br>
0:不支持<br>
1:支持
   */
  IsSupportNormal?: number
  /**
   * 物理区
   */
  PhysicalZone?: string
  /**
   * 用户是否有可用区权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasPermission?: boolean
  /**
   * 是否为全链路RDMA可用区
   */
  IsWholeRdmaZone?: string
  /**
   * 当前可用区是否允许新购集群，1:允许，0:不允许
   */
  IsSupportCreateCluster?: number
}

/**
 * SwitchProxyVpc返回参数结构体
 */
export interface SwitchProxyVpcResponse {
  /**
   * 异步任务id。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartCLSDelivery请求参数结构体
 */
export interface StartCLSDeliveryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 开通的日志主题id
   */
  CLSTopicIds: Array<string>
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 是否维护时间运行
   */
  IsInMaintainPeriod?: string
}

/**
 * 可用区属性项
 */
export interface SlaveZoneAttrItem {
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * binlog同步方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogSyncWay?: string
}

/**
 * 日志投递信息
 */
export interface DeliverSummary {
  /**
   * 投递类型，store（存储类），mq（消息通道）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverType?: string
  /**
   * 投递子类型：cls，ckafka。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverSubType?: string
}

/**
 * DescribeChangedParamsAfterUpgrade请求参数结构体
 */
export interface DescribeChangedParamsAfterUpgradeRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 变配后的CPU
   */
  DstCpu: number
  /**
   * 变配后的MEM，单位G
   */
  DstMem: number
}

/**
 * CLS日志投递配置
 */
export interface CLSInfo {
  /**
   * 日志主题操作：可选create,reuse。
create:新增日志主题，使用TopicName创建日志主题。
reuse:使用已有日志主题，使用TopicId指定日志主题。
不允许使用已有日志主题且新建日志集的组合。
   */
  TopicOperation: string
  /**
   * 日志集操作：可选create,reuse。
create:新增日志集，使用GroupName创建日志集。
reuse:使用已有日志集，使用GroupId指定日志集。
不允许使用已有日志主题且新建日志集的组合。
   */
  GroupOperation: string
  /**
   * 日志投递地域
   */
  Region: string
  /**
   * 日志主题id
   */
  TopicId?: string
  /**
   * 日志主题name
   */
  TopicName?: string
  /**
   * 日志集id
   */
  GroupId?: string
  /**
   * 日志集name
   */
  GroupName?: string
}

/**
 * SwitchProxyVpc请求参数结构体
 */
export interface SwitchProxyVpcRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 字符串vpc id
   */
  UniqVpcId: string
  /**
   * 字符串子网id
   */
  UniqSubnetId: string
  /**
   * 旧地址回收时间
   */
  OldIpReserveHours: number
  /**
   * 数据库代理组Id（该参数为必填项，可以通过DescribeProxies接口获得）
   */
  ProxyGroupId?: string
}

/**
 * RestartInstance返回参数结构体
 */
export interface RestartInstanceResponse {
  /**
   * 异步任务id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBinlogSaveDays请求参数结构体
 */
export interface DescribeBinlogSaveDaysRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeClusterTransparentEncryptInfo返回参数结构体
 */
export interface DescribeClusterTransparentEncryptInfoResponse {
  /**
   * 加密秘钥id
   */
  KeyId?: string
  /**
   * 加密秘钥地域

   */
  KeyRegion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ActivateInstance返回参数结构体
 */
export interface ActivateInstanceResponse {
  /**
   * 任务流id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateCluster请求参数结构体
 */
export interface IsolateClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 该参数已废用
   */
  DbType?: string
  /**
   * 实例退还原因类型
   */
  IsolateReasonTypes?: Array<number | bigint>
  /**
   * 实例退还原因补充
   */
  IsolateReason?: string
}

/**
 * AddInstances请求参数结构体
 */
export interface AddInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * Cpu核数
   */
  Cpu: number
  /**
   * 内存，单位为GB
   */
  Memory: number
  /**
   * 新增只读实例数，取值范围为(0,15]
   */
  ReadOnlyCount: number
  /**
   * 实例机器类型
   */
  DeviceType?: string
  /**
   * 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组。当前版本不建议传输该值。
   * @deprecated
   */
  InstanceGrpId?: string
  /**
   * 所属VPC网络ID。
   */
  VpcId?: string
  /**
   * 所属子网ID，如果设置了VpcId，则SubnetId必填。
   */
  SubnetId?: string
  /**
   * 新增RO组时使用的Port，取值范围为[0,65535)
   */
  Port?: number
  /**
   * 实例名称，字符串长度范围为[0,64)，取值范围为大小写字母，0-9数字，'_','-','.'
   */
  InstanceName?: string
  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
   */
  DbType?: string
  /**
   * 订单来源，字符串长度范围为[0,64)
   */
  OrderSource?: string
  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
  /**
   * 参数模板ID
   */
  ParamTemplateId?: number
  /**
   * 参数列表，ParamTemplateId 传入时InstanceParams才有效
   */
  InstanceParams?: Array<ModifyParamItem>
  /**
   * 安全组ID，新建只读实例时可以指定安全组。
   */
  SecurityGroupIds?: Array<string>
  /**
   * proxy同步升级
   */
  UpgradeProxy?: UpgradeProxy
}

/**
 * 实例详情
 */
export interface CynosdbInstanceDetail {
  /**
   * 用户Uin
   */
  Uin?: string
  /**
   * 用户AppId
   */
  AppId?: number
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 实例状态
   */
  Status?: string
  /**
   * 实例状态中文描述
   */
  StatusDesc?: string
  /**
   * serverless实例状态, 可能值：
resume
pause
   */
  ServerlessStatus?: string
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 数据库版本
   */
  DbVersion?: string
  /**
   * Cpu，单位：核
   */
  Cpu?: number
  /**
   * 内存，单位：GB
   */
  Memory?: number
  /**
   * 存储量，单位：GB
   */
  Storage?: number
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 实例当前角色
   */
  InstanceRole?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 付费模式
   */
  PayMode?: number
  /**
   * 实例过期时间
   */
  PeriodEndTime?: string
  /**
   * 网络类型
   */
  NetType?: number
  /**
   * VPC网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 实例内网IP
   */
  Vip?: string
  /**
   * 实例内网端口
   */
  Vport?: number
  /**
   * 实例外网域名
   */
  WanDomain?: string
  /**
   * 字符集
   */
  Charset?: string
  /**
   * Cynos内核版本
   */
  CynosVersion?: string
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * serverless实例cpu下限
   */
  MinCpu?: number
  /**
   * serverless实例cpu上限
   */
  MaxCpu?: number
  /**
   * Db类型:<li>NORMAL</li><li>SERVERLESS</li>
   */
  DbMode?: string
}

/**
 * 回档数据库及表
 */
export interface RollbackTable {
  /**
   * 数据库名称
   */
  Database: string
  /**
   * 数据库表
   */
  Tables: Array<RollbackTableInfo>
}

/**
 * DescribeInstanceErrorLogs请求参数结构体
 */
export interface DescribeInstanceErrorLogsRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 日志条数限制
   */
  Limit?: number
  /**
   * 日志条数偏移量
   */
  Offset?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 排序字段，有Timestamp枚举值
   */
  OrderBy?: string
  /**
   * 排序类型，有ASC,DESC枚举值
   */
  OrderByType?: string
  /**
   * 日志等级，有error、warning、note三种，支持多个等级同时搜索
   */
  LogLevels?: Array<string>
  /**
   * 关键字，支持模糊搜索
   */
  KeyWords?: Array<string>
}

/**
 * DescribeInstanceDetail请求参数结构体
 */
export interface DescribeInstanceDetailRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 资源包
 */
export interface Package {
  /**
   * AppID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 资源包唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageId?: string
  /**
   * 资源包名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageName?: string
  /**
   * 资源包类型
CCU-计算资源包，DISK-存储资源包
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 资源包使用地域
china-中国内地通用，overseas-港澳台及海外通用
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageRegion?: string
  /**
   * 资源包状态
creating-创建中；
using-使用中；
expired-已过期；
normal_finish-使用完；
apply_refund-申请退费中；
refund-已退费。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 资源包总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageTotalSpec?: number
  /**
   * 资源包已使用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageUsedSpec?: number
  /**
   * 是否还有库存余量
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasQuota?: boolean
  /**
   * 绑定实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindInstanceInfos?: Array<BindInstanceInfo>
  /**
   * 生效时间：2022-07-01 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 失效时间：2022-08-01 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 资源包历史绑定（已解绑）实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HistoryBindResourceInfos?: Array<BindInstanceInfo>
}

/**
 * DeleteAccounts请求参数结构体
 */
export interface DeleteAccountsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 账号数组，包含account和host
   */
  Accounts?: Array<InputAccount>
}

/**
 * OpenClusterTransparentEncrypt请求参数结构体
 */
export interface OpenClusterTransparentEncryptRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 秘钥类型(cloud,custom)
   */
  KeyType: string
  /**
   * 秘钥Id
   */
  KeyId?: string
  /**
   * 秘钥地域
   */
  KeyRegion?: string
}

/**
 * ReloadBalanceProxyNode请求参数结构体
 */
export interface ReloadBalanceProxyNodeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 数据库账号列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountSet?: Array<Account>
  /**
   * 账号总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可回档的时间范围
 */
export interface RollbackTimeRange {
  /**
   * 开始时间
   */
  TimeRangeStart?: string
  /**
   * 结束时间
   */
  TimeRangeEnd?: string
}

/**
 * CreateClusterDatabase请求参数结构体
 */
export interface CreateClusterDatabaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库名
   */
  DbName: string
  /**
   * 字符集类型
   */
  CharacterSet: string
  /**
   * 排序规则
   */
  CollateRule: string
  /**
   * 授权用户主机权限
   */
  UserHostPrivileges?: Array<UserHostPrivilege>
  /**
   * 备注
   */
  Description?: string
}

/**
 * OfflineInstance请求参数结构体
 */
export interface OfflineInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID数组
   */
  InstanceIdList: Array<string>
}

/**
 * 审计日志详细信息
 */
export interface AuditLog {
  /**
   * 影响行数。
   */
  AffectRows?: number
  /**
   * 错误码。
   */
  ErrCode?: number
  /**
   * SQL类型。
   */
  SqlType?: string
  /**
   * 表名称。
   */
  TableName?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 审计策略名称。
   */
  PolicyName?: string
  /**
   * 数据库名称。
   */
  DBName?: string
  /**
   * SQL语句。
   */
  Sql?: string
  /**
   * 客户端地址。
   */
  Host?: string
  /**
   * 用户名。
   */
  User?: string
  /**
   * 执行时间，微秒。
   */
  ExecTime?: number
  /**
   * 时间。
   */
  Timestamp?: string
  /**
   * 返回行数。
   */
  SentRows?: number
  /**
   * 执行线程ID。
   */
  ThreadId?: number
  /**
   * 扫描行数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckRows?: number
  /**
   * cpu执行时间，微秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuTime?: number
  /**
   * IO等待时间，微秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IoWaitTime?: number
  /**
   * 锁等待时间，微秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockWaitTime?: number
  /**
   * 事务持续等待时间，微秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrxLivingTime?: number
  /**
   * 开始时间，与timestamp构成一个精确到纳秒的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NsTime?: number
  /**
   * 日志命中规则模板的基本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateInfo?: Array<LogRuleTemplateInfo>
  /**
   * 事务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrxId?: number
}

/**
 * CreateProxy返回参数结构体
 */
export interface CreateProxyResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改参数任务数据
 */
export interface BizTaskModifyParamsData {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群参数修改数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterParamList?: Array<ModifyParamItem>
  /**
   * 实例参数修改数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyInstanceParams?: Array<BizTaskModifyInstanceParam>
}

/**
 * RollBackCluster请求参数结构体
 */
export interface RollBackClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档
   */
  RollbackStrategy: string
  /**
   * 备份文件ID。
回档策略为按备份文件回档时必填。
   */
  RollbackId: number
  /**
   * 期望回档时间。
回档策略为timeRollback按时间点回档时必填。
   */
  ExpectTime?: string
  /**
   * 期望阈值（已废弃）
   */
  ExpectTimeThresh?: number
  /**
   * 回档数据库列表
   */
  RollbackDatabases?: Array<RollbackDatabase>
  /**
   * 回档数据库表列表
   */
  RollbackTables?: Array<RollbackTable>
  /**
   * 按时间点回档模式，full: 普通; db: 快速; table: 极速  （默认是普通）
   */
  RollbackMode?: string
}

/**
 * 系统支持的模块
 */
export interface Module {
  /**
   * 是否支持，可选值:yes,no
   */
  IsDisable: string
  /**
   * 模块名
   */
  ModuleName: string
}

/**
 * OpenClusterTransparentEncrypt返回参数结构体
 */
export interface OpenClusterTransparentEncryptResponse {
  /**
   * 异步任务id

   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupConfig请求参数结构体
 */
export interface ModifyBackupConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeBeg?: number
  /**
   * 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200
   */
  BackupTimeEnd?: number
  /**
   * 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800，最大为158112000
   */
  ReserveDuration?: number
  /**
   * 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份
   */
  BackupFreq?: Array<string>
  /**
   * 该参数目前不支持修改，无需填写。备份方式，logic-逻辑备份，snapshot-快照备份
   */
  BackupType?: string
  /**
   * 逻辑备份配置
   */
  LogicBackupConfig?: LogicBackupConfigInfo
  /**
   * 是否删除自动逻辑备份
   */
  DeleteAutoLogicBackup?: boolean
}

/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterDatabases请求参数结构体
 */
export interface DescribeClusterDatabasesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 分页限制数量
   */
  Limit?: number
}

/**
 * RemoveClusterSlaveZone请求参数结构体
 */
export interface RemoveClusterSlaveZoneRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 从可用区
   */
  SlaveZone: string
}

/**
 * 任务信息
 */
export interface BizTaskInfo {
  /**
   * 任务id
   */
  ID?: number
  /**
   * 用户appid
   */
  AppId?: number
  /**
   * 集群id
   */
  ClusterId?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 延迟执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime?: string
  /**
   * 任务失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
  /**
   * 异步任务流id
   */
  FlowId?: number
  /**
   * 任务输入信息
   */
  Input?: string
  /**
   * 实例组id
   * @deprecated
   */
  InstanceGrpId?: string
  /**
   * 实例组id
   */
  InstanceGroupId?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 任务操作对象id
   */
  ObjectId?: string
  /**
   * 任务操作对象类型
   */
  ObjectType?: string
  /**
   * 操作者uin
   */
  Operator?: string
  /**
   * 任务输出信息
   */
  Output?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 任务类型
   */
  TaskType?: string
  /**
   * 触发本任务的父任务ID
   */
  TriggerTaskId?: number
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 任务开始时间
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 任务进度
   */
  Process?: number
  /**
   * 修改参数任务信息
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ModifyParamsData?: Array<ModifyParamsData>
  /**
   * 创建集群任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateClustersData?: CreateClustersData
  /**
   * 集群回档任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RollbackData?: RollbackData
  /**
   * 实例变配任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyInstanceData?: ModifyInstanceData
  /**
   * 手动备份任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackupData?: ManualBackupData
  /**
   * 修改内核版本任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyDbVersionData?: ModifyDbVersionData
  /**
   * 集群可用区信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterSlaveData?: ClusterSlaveData
  /**
   * 转换集群日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchClusterLogBin?: SwitchClusterLogBin
  /**
   * 修改实例参数数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyInstanceParamsData?: BizTaskModifyParamsData
  /**
   * 维护时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskMaintainInfo?: TaskMaintainInfo
  /**
   * 实例日志投递信息

注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCLSDeliveryInfos?: Array<InstanceCLSDeliveryInfo>
  /**
   * 任务进度信息
   */
  TaskProgressInfo?: TaskProgressInfo
}

/**
 * DescribeRollbackTimeRange请求参数结构体
 */
export interface DescribeRollbackTimeRangeRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * InquirePriceRenew请求参数结构体
 */
export interface InquirePriceRenewRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 购买时长,与TimeUnit组合才能生效
   */
  TimeSpan: number
  /**
   * 购买时长单位, 与TimeSpan组合生效，可选:日:d,月:m
   */
  TimeUnit: string
}

/**
 * DescribeAccountPrivileges返回参数结构体
 */
export interface DescribeAccountPrivilegesResponse {
  /**
   * 权限列表，示例值为：["","select","update","delete","create","drop","references","index","alter","show_db","create_tmp_table","lock_tables","execute","create_view","show_view","create_routine","alter_routine","event","trigger"]
   */
  Privileges?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库代理，读写分离实例权重
 */
export interface ProxyInstanceWeight {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 实例权重
   */
  Weight: number
}

/**
 * CreateResourcePackage请求参数结构体
 */
export interface CreateResourcePackageRequest {
  /**
   * 实例类型，目前固定传cynosdb-serverless
   */
  InstanceType: string
  /**
   * 资源包使用地域chineseMainland-中国内地通用，overseas-港澳台及海外通用
   */
  PackageRegion: string
  /**
   * 资源包类型：CCU-计算资源包，DISK-存储资源包
   */
  PackageType: string
  /**
   * 资源包版本
base-基础版本，common-通用版本，enterprise-企业版本
   */
  PackageVersion: string
  /**
   * 资源包大小，计算资源单位：万个；存储资源：GB
   */
  PackageSpec: number
  /**
   * 资源包有效期，单位:天
   */
  ExpireDay: number
  /**
   * 购买资源包个数
   */
  PackageCount: number
  /**
   * 资源包名称
   */
  PackageName?: string
}

/**
 * CloseProxyEndPoint返回参数结构体
 */
export interface CloseProxyEndPointResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupConfig请求参数结构体
 */
export interface DescribeBackupConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 交换实例信息
 */
export interface ExchangeInstanceInfo {
  /**
   * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcInstanceInfo?: RollbackInstanceInfo
  /**
   * 目标实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstInstanceInfo?: RollbackInstanceInfo
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 需要过滤的账户列表
   */
  AccountNames?: Array<string>
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
该参数已废用
   */
  DbType?: string
  /**
   * 需要过滤的账户列表
   */
  Hosts?: Array<string>
  /**
   * 限制量
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 模糊匹配关键字(同时匹配AccountName和AccountHost，返回并集结果，支持正则)
   */
  AccountRegular?: string
}

/**
 * DescribeRollbackTimeRange返回参数结构体
 */
export interface DescribeRollbackTimeRangeResponse {
  /**
   * 有效回归时间范围开始时间点（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeRangeStart?: string
  /**
   * 有效回归时间范围结束时间点（已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeRangeEnd?: string
  /**
   * 可回档时间范围
   */
  RollbackTimeRanges?: Array<RollbackTimeRange>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBackupName返回参数结构体
 */
export interface ModifyBackupNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogFiles返回参数结构体
 */
export interface DescribeAuditLogFilesResponse {
  /**
   * 符合条件的审计日志文件个数。
   */
  TotalCount?: number
  /**
   * 审计日志文件详情。
   */
  Items?: Array<AuditLogFile>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchClusterZone返回参数结构体
 */
export interface SwitchClusterZoneResponse {
  /**
   * 异步FlowId
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库代理连接池信息
 */
export interface ProxyConnectionPoolInfo {
  /**
   * 连接池保持阈值：单位（秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionPoolTimeOut: number
  /**
   * 是否开启了连接池
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenConnectionPool?: string
  /**
   * 连接池类型：SessionConnectionPool（会话级别连接池）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionPoolType?: string
}

/**
 * DescribeClusterPasswordComplexity请求参数结构体
 */
export interface DescribeClusterPasswordComplexityRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * 查询过滤器
 */
export interface QueryFilter {
  /**
   * 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip"
   */
  Names: Array<string>
  /**
   * 搜索字符串
   */
  Values: Array<string>
  /**
   * 是否精确匹配
   */
  ExactMatch?: boolean
  /**
   * 搜索字段
   */
  Name?: string
  /**
   * 操作符
   */
  Operator?: string
}

/**
 * CreateAccounts返回参数结构体
 */
export interface CreateAccountsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseWan返回参数结构体
 */
export interface CloseWanResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例个数
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  InstanceSet?: Array<CynosdbInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源包明细说明
 */
export interface SalePackageSpec {
  /**
   * 资源包使用地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageRegion?: string
  /**
   * 资源包类型
CCU-计算资源包
DISK-存储资源包
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 资源包版本
base-基础版本，common-通用版本，enterprise-企业版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageVersion?: string
  /**
   * 当前版本资源包最小资源数，计算资源单位：个；存储资源：GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinPackageSpec?: number
  /**
   * 当前版本资源包最大资源数，计算资源单位：个；存储资源：GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxPackageSpec?: number
  /**
   * 资源包有效期，单位:天
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireDay?: number
}

/**
 * 数据库账号信息
 */
export interface Account {
  /**
   * 数据库账号名
   */
  AccountName?: string
  /**
   * 数据库账号描述
   */
  Description?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 主机
   */
  Host?: string
  /**
   * 用户最大连接数
   */
  MaxUserConnections?: number
}

/**
 * ModifyResourcePackagesDeductionPriority返回参数结构体
 */
export interface ModifyResourcePackagesDeductionPriorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseWan请求参数结构体
 */
export interface CloseWanRequest {
  /**
   * 实例组id
   * @deprecated
   */
  InstanceGrpId?: string
  /**
   * 实例组id
   */
  InstanceGroupId?: string
  /**
   * 实例id
   */
  InstanceId?: string
}

/**
 * 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。
 */
export interface AuditLogFilter {
  /**
   * 客户端地址。
   */
  Host?: Array<string>
  /**
   * 用户名。
   */
  User?: Array<string>
  /**
   * 数据库名称。
   */
  DBName?: Array<string>
  /**
   * 表名称。
   */
  TableName?: Array<string>
  /**
   * 审计策略名称。
   */
  PolicyName?: Array<string>
  /**
   * SQL 语句。支持模糊匹配。
   */
  Sql?: string
  /**
   * SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
   */
  SqlType?: string
  /**
   * 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。
   */
  ExecTime?: number
  /**
   * 影响行数。表示筛选影响行数大于该值的审计日志。
   */
  AffectRows?: number
  /**
   * SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。
   */
  SqlTypes?: Array<string>
  /**
   * SQL 语句。支持传递多个sql语句。
   */
  Sqls?: Array<string>
  /**
   * 返回行数。
   */
  SentRows?: number
  /**
   * 线程ID。
   */
  ThreadId?: Array<string>
}

/**
 * UpgradeProxyVersion请求参数结构体
 */
export interface UpgradeProxyVersionRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理当前版本
   */
  SrcProxyVersion: string
  /**
   * 数据库代理升级版本
   */
  DstProxyVersion: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 升级时间 ：no（升级完成时）yes（实例维护时间）
   */
  IsInMaintainPeriod?: string
}

/**
 * ModifyResourcePackageClusters请求参数结构体
 */
export interface ModifyResourcePackageClustersRequest {
  /**
   * 资源包唯一ID
   */
  PackageId: string
  /**
   * 需要建立绑定关系的集群ID
   */
  BindClusterIds?: Array<string>
  /**
   * 需要解除绑定关系的集群ID
   */
  UnbindClusterIds?: Array<string>
}

/**
 * 审计规则的规则过滤条件
 */
export interface RuleFilters {
  /**
   * 审计规则过滤条件的参数名称。可选值：host – 客户端 IP；user – 数据库账户；dbName – 数据库名称；sqlType-SQL类型；sql-sql语句；affectRows -影响行数；sentRows-返回行数；checkRows-扫描行数；execTime-执行时间。
   */
  Type: string
  /**
   * 审计规则过滤条件的匹配类型。可选值：INC – 包含；EXC – 不包含；EQS – 等于；NEQ – 不等于；REG-正则；GT-大于；LT-小于。
   */
  Compare: string
  /**
   * 审计规则过滤条件的匹配值。
   */
  Value: Array<string>
}

/**
 * DescribeFlow返回参数结构体
 */
export interface DescribeFlowResponse {
  /**
   * 任务流状态。0-成功，1-失败，2-处理中
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportInstanceErrorLogs请求参数结构体
 */
export interface ExportInstanceErrorLogsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 日志最早时间
   */
  StartTime?: string
  /**
   * 日志最晚时间
   */
  EndTime?: string
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 日志等级
   */
  LogLevels?: Array<string>
  /**
   * 关键字
   */
  KeyWords?: Array<string>
  /**
   * 文件类型，可选值：csv, original
   */
  FileType?: string
  /**
   * 可选值Timestamp
   */
  OrderBy?: string
  /**
   * 排序类型，ASC 或 DESC。
   */
  OrderByType?: string
}

/**
 * ActivateInstance请求参数结构体
 */
export interface ActivateInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例 ID 列表，单个实例 ID 格式如：cynosdbmysql-ins-n7ocdslw，与TDSQL-C MySQL数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。
   */
  InstanceIdList: Array<string>
}

/**
 * DeleteClusterDatabase请求参数结构体
 */
export interface DeleteClusterDatabaseRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库名
   */
  DbNames: Array<string>
}

/**
 * 实例错误日志返回类型
 */
export interface CynosdbErrorLogItem {
  /**
   * 日志时间戳
   */
  Timestamp?: number
  /**
   * 日志等级
   */
  Level?: string
  /**
   * 日志内容
   */
  Content?: string
}

/**
 * ModifyVipVport请求参数结构体
 */
export interface ModifyVipVportRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 实例组id
   * @deprecated
   */
  InstanceGrpId?: string
  /**
   * 实例组id
   */
  InstanceGroupId?: string
  /**
   * 需要修改的目的ip
   */
  Vip?: string
  /**
   * 需要修改的目的端口
   */
  Vport?: number
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
   */
  DbType?: string
  /**
   * 旧ip回收前的保留时间，单位小时，0表示立即回收
   */
  OldIpReserveHours?: number
}

/**
 * 实例允许的操作列表
 */
export interface InstanceAbility {
  /**
   * 实例是否支持强制重启，可选值：yes：支持，no：不支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportForceRestart?: string
  /**
   * 不支持强制重启的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  NonsupportForceRestartReason?: string
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterParamLogs返回参数结构体
 */
export interface DescribeClusterParamLogsResponse {
  /**
   * 记录总数
   */
  TotalCount?: number
  /**
   * 参数修改记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterParamLogs?: Array<ClusterParamModifyLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInstanceGrps请求参数结构体
 */
export interface DescribeClusterInstanceGrpsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeResourcesByDealName返回参数结构体
 */
export interface DescribeResourcesByDealNameResponse {
  /**
   * 计费资源id信息数组
   */
  BillingResourceInfos?: Array<BillingResourceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccounts请求参数结构体
 */
export interface CreateAccountsRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 新账户列表
   */
  Accounts: Array<NewAccount>
}

/**
 * DeleteAuditRuleTemplates请求参数结构体
 */
export interface DeleteAuditRuleTemplatesRequest {
  /**
   * 审计规则模板ID。
   */
  RuleTemplateIds: Array<string>
}

/**
 * ExportInstanceSlowQueries返回参数结构体
 */
export interface ExportInstanceSlowQueriesResponse {
  /**
   * 慢查询导出内容
   */
  FileContent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchClusterZone请求参数结构体
 */
export interface SwitchClusterZoneRequest {
  /**
   * 集群Id
   */
  ClusterId: string
  /**
   * 当前可用区
   */
  OldZone: string
  /**
   * 要切换到的可用区
   */
  NewZone: string
  /**
   * 维护期间执行-yes,立即执行-no
   */
  IsInMaintainPeriod?: string
}

/**
 * 集群支持的功能
 */
export interface Ability {
  /**
   * 是否支持从可用区
   */
  IsSupportSlaveZone: string
  /**
   * 不支持从可用区的原因
   */
  NonsupportSlaveZoneReason: string
  /**
   * 是否支持RO实例
   */
  IsSupportRo: string
  /**
   * 不支持RO实例的原因
   */
  NonsupportRoReason: string
  /**
   * 是否支持手动发起快照备份
   */
  IsSupportManualSnapshot: string
  /**
   * 是否支持透明数据加密
   */
  IsSupportTransparentDataEncryption?: string
  /**
   * 不支持透明数据加密原因
   */
  NoSupportTransparentDataEncryptionReason?: string
  /**
   * 是否支持手动发起逻辑备份
   */
  IsSupportManualLogic?: string
}

/**
 * 实例初始化配置信息
 */
export interface InstanceInitInfo {
  /**
   * 实例cpu
   */
  Cpu: number
  /**
   * 实例内存
   */
  Memory: number
  /**
   * 实例类型 rw/ro
   */
  InstanceType: string
  /**
   * 实例个数,范围[1,15]
   */
  InstanceCount: number
  /**
   * Serverless实例个数最小值，范围[1,15]
   */
  MinRoCount?: number
  /**
   * Serverless实例个数最大值，范围[1,15]
   */
  MaxRoCount?: number
  /**
   * Serverless实例最小规格
   */
  MinRoCpu?: number
  /**
   * Serverless实例最大规格
   */
  MaxRoCpu?: number
  /**
   * 实例机器类型
   */
  DeviceType?: string
}

/**
 * InquirePriceModify请求参数结构体
 */
export interface InquirePriceModifyRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * CPU核数
   */
  Cpu?: number
  /**
   * 内存大小
   */
  Memory?: number
  /**
   * 存储大小，存储资源变配：ClusterId,StorageLimit
   */
  StorageLimit?: number
  /**
   * 实例ID，计算资源变配必传: ClusterId,InstanceId,Cpu,Memory
   */
  InstanceId?: string
  /**
   * 实例设备类型
   */
  DeviceType?: string
  /**
   * serverless实例ccu大小
   */
  Ccu?: number
}

/**
 * ModifyResourcePackagesDeductionPriority请求参数结构体
 */
export interface ModifyResourcePackagesDeductionPriorityRequest {
  /**
   * 需要修改优先级的资源包类型，CCU：计算资源包，DISK：存储资源包
   */
  PackageType: string
  /**
   * 修改后的抵扣优先级对于哪个cynos资源生效
   */
  ClusterId: string
  /**
   * 资源包抵扣优先级
   */
  DeductionPriorities: Array<PackagePriority>
}

/**
 * RemoveClusterSlaveZone返回参数结构体
 */
export interface RemoveClusterSlaveZoneResponse {
  /**
   * 异步FlowId
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewClusters请求参数结构体
 */
export interface RenewClustersRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 续费时长
   */
  TimeSpan: number
  /**
   * 时间单位 y,m,d,h,i,s
   */
  TimeUnit: string
  /**
   * 交易模式 0-下单并支付 1-下单
   */
  DealMode?: number
}

/**
 * OpenClusterReadOnlyInstanceGroupAccess返回参数结构体
 */
export interface OpenClusterReadOnlyInstanceGroupAccessResponse {
  /**
   * 开启流程ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询参数过滤器
 */
export interface QueryParamFilter {
  /**
   * 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip"
   */
  Names: Array<string>
  /**
   * 搜索字符串
   */
  Values: Array<string>
  /**
   * 是否精确匹配
   */
  ExactMatch?: boolean
}

/**
 * x08新创建的账号
 */
export interface NewAccount {
  /**
   * 账户名，包含字母数字_,以字母开头，字母或数字结尾，长度1-30
   */
  AccountName: string
  /**
   * 密码，密码长度范围为8到64个字符
   */
  AccountPassword: string
  /**
   * 主机(%或ipv4地址)
   */
  Host: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 用户最大连接数，不能大于10240
   */
  MaxUserConnections?: number
}

/**
 * 修改参数信息
 */
export interface ModifyParamsData {
  /**
   * 参数名
   */
  Name?: string
  /**
   * 修改前参数值
   */
  OldValue?: string
  /**
   * 修改后参数值
   */
  CurValue?: string
}

/**
 * 资源包绑定的实例信息
 */
export interface BindInstanceInfo {
  /**
   * 绑定的集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 绑定的实例所在的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceRegion?: string
  /**
   * 绑定的实例类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 绑定集群下的实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendIds?: Array<string>
}

/**
 * DescribeAuditRuleWithInstanceIds返回参数结构体
 */
export interface DescribeAuditRuleWithInstanceIdsResponse {
  /**
   * 无
   */
  TotalCount?: number
  /**
   * 实例审计规则信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceAuditRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClusterDatabases请求参数结构体
 */
export interface SearchClusterDatabasesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 是否精确搜索。
0: 模糊搜索 1:精确搜索 
默认为0
   */
  MatchType?: number
}

/**
 * ModifyProxyDesc返回参数结构体
 */
export interface ModifyProxyDescResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库表
 */
export interface DbTable {
  /**
   * 数据库名称
   */
  Db: string
  /**
   * 数据库表名称
   */
  TableName?: string
}

/**
 * ModifyClusterSlaveZone返回参数结构体
 */
export interface ModifyClusterSlaveZoneResponse {
  /**
   * 异步FlowId
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackToNewCluster请求参数结构体
 */
export interface RollbackToNewClusterRequest {
  /**
   * 可用区
   */
  Zone: string
  /**
   * 回档时，传入源集群ID，用于查找源poolId
   */
  OriginalClusterId: string
  /**
   * 所属VPC网络ID
   */
  UniqVpcId?: string
  /**
   * 所属子网ID
   */
  UniqSubnetId?: string
  /**
   * 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'）
   */
  ClusterName?: string
  /**
   * 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效
   */
  RollbackId?: number
  /**
   * 时间点回档，指定时间；快照回档，快照时间
   */
  ExpectTime?: string
  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher?: number
  /**
   * 集群创建需要绑定的tag数组信息
   */
  ResourceTags?: Array<Tag>
  /**
   * Db类型
当DbType为MYSQL时可选(默认NORMAL)：
<li>NORMAL</li>
<li>SERVERLESS</li>
   */
  DbMode?: string
  /**
   * 当DbMode为SEVERLESS时必填
cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MinCpu?: number
  /**
   * 当DbMode为SEVERLESS时必填：
cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MaxCpu?: number
  /**
   * 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
默认值:yes
   */
  AutoPause?: string
  /**
   * 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]
默认值:600
   */
  AutoPauseDelay?: number
  /**
   * 安全组id数组
   */
  SecurityGroupIds?: Array<string>
  /**
   * 告警策略Id数组
   */
  AlarmPolicyIds?: Array<string>
  /**
   * 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感
   */
  ClusterParams?: Array<ParamItem>
  /**
   * 参数模板ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID
   */
  ParamTemplateId?: number
  /**
   * 实例初始化配置信息，主要用于购买集群时选不同规格实例
   */
  InstanceInitInfos?: Array<InstanceInitInfo>
  /**
   * 0-下单并支付 1-下单
   */
  DealMode?: number
  /**
   * 计算节点付费模式：0-按量计费，1-预付费
   */
  PayMode?: number
  /**
   * 时间
   */
  TimeSpan?: number
  /**
   * 单位
   */
  TimeUnit?: string
  /**
   * 回档库信息
   */
  RollbackDatabases?: Array<RollbackDatabase>
  /**
   * 回档表信息
   */
  RollbackTables?: Array<RollbackTable>
  /**
   * 原ro实例信息
   */
  OriginalROInstanceList?: Array<string>
  /**
   * 项目id
   */
  ProjectId?: number
}

/**
 * Binlog描述
 */
export interface BinlogItem {
  /**
   * Binlog文件名称
   */
  FileName?: string
  /**
   * 文件大小，单位：字节
   */
  FileSize?: number
  /**
   * 事务最早时间
   */
  StartTime?: string
  /**
   * 事务最晚时间
   */
  FinishTime?: string
  /**
   * Binlog文件ID
   */
  BinlogId?: number
}

/**
 * ModifyProxyDesc请求参数结构体
 */
export interface ModifyProxyDescRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 数据库代理组ID
   */
  ProxyGroupId: string
  /**
   * 数据库代理描述
   */
  Description: string
}

/**
 * ReloadBalanceProxyNode返回参数结构体
 */
export interface ReloadBalanceProxyNodeResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseAuditService返回参数结构体
 */
export interface CloseAuditServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyParamTemplate返回参数结构体
 */
export interface ModifyParamTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindClusterResourcePackages返回参数结构体
 */
export interface BindClusterResourcePackagesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计日志命中规则模板的基本信息
 */
export interface LogRuleTemplateInfo {
  /**
   * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateId?: string
  /**
   * 规则模板名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateName?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: string
  /**
   * 规则模板变更状态：0-未变更；1-已变更；2-已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateStatus?: number
}

/**
 * proxy节点可用区内个数
 */
export interface ProxyZone {
  /**
   * proxy节点可用区
   */
  ProxyNodeZone?: string
  /**
   * proxy节点数量
   */
  ProxyNodeCount?: number
}

/**
 * CreateProxy请求参数结构体
 */
export interface CreateProxyRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * cpu核数
   */
  Cpu: number
  /**
   * 内存
   */
  Mem: number
  /**
   * 私有网络ID，默认与集群私有网络ID保持一致
   */
  UniqueVpcId?: string
  /**
   * 私有网络子网ID，默认与集群子网ID保持一致
   */
  UniqueSubnetId?: string
  /**
   * 数据库代理组节点个数（该参数不再建议使用，建议使用ProxyZones)
   */
  ProxyCount?: number
  /**
   * 连接池类型：SessionConnectionPool(会话级别连接池 )
   */
  ConnectionPoolType?: string
  /**
   * 是否开启连接池,yes-开启，no-不开启
   */
  OpenConnectionPool?: string
  /**
   * 连接池阈值：单位（秒）
   */
  ConnectionPoolTimeOut?: number
  /**
   * 安全组ID数组
   */
  SecurityGroupIds?: Array<string>
  /**
   * 描述说明
   */
  Description?: string
  /**
   * 数据库节点信息（该参数与ProxyCount需要任选一个输入）
   */
  ProxyZones?: Array<ProxyZone>
}

/**
 * DescribeResourcePackageSaleSpec返回参数结构体
 */
export interface DescribeResourcePackageSaleSpecResponse {
  /**
   * 可售卖资源包规格总数
   */
  Total?: number
  /**
   * 资源包明细说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail?: Array<SalePackageSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcesByDealName请求参数结构体
 */
export interface DescribeResourcesByDealNameRequest {
  /**
   * 计费订单ID（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）。
DealName与DealNames至少应输入一项，两者都传时以DealName为准。
   */
  DealName?: string
  /**
   * 计费订单ID列表，可以一次查询若干条订单ID对应资源信息（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）。
DealName与DealNames至少应输入一项，两者都传时以DealName为准。
   */
  DealNames?: Array<string>
}

/**
 * DescribeAuditInstanceList请求参数结构体
 */
export interface DescribeAuditInstanceListRequest {
  /**
   * 实例审计开启的状态。1-已开启审计；0-未开启审计。
   */
  AuditSwitch?: number
  /**
   * 查询实例列表的过滤条件。
   */
  Filters?: Array<AuditInstanceFilters>
  /**
   * 实例的审计规则模式。1-规则审计；0-全审计。
   */
  AuditMode?: number
  /**
   * 单次请求返回的数量。默认值为30，最大值为 100。
   */
  Limit?: number
  /**
   * 偏移量，默认值为 0。
   */
  Offset?: number
}

/**
 * DescribeInstanceSlowQueries返回参数结构体
 */
export interface DescribeInstanceSlowQueriesResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 慢查询记录
   */
  SlowQueries?: Array<SlowQueriesItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 返回数量，默认为 20，取值范围为(0,100]
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
  /**
   * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
   */
  OrderBy?: string
  /**
   * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
   */
  OrderByType?: string
  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>
  /**
   * 引擎类型：目前支持“MYSQL”
   */
  DbType?: string
  /**
   * 实例状态, 可选值:
creating 创建中
running 运行中
isolating 隔离中
isolated 已隔离
activating 恢复中
offlining 下线中
offlined 已下线
   */
  Status?: string
  /**
   * 实例id列表
   */
  InstanceIds?: Array<string>
}

/**
 * CloseClusterPasswordComplexity返回参数结构体
 */
export interface CloseClusterPasswordComplexityResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadUrl返回参数结构体
 */
export interface DescribeBackupDownloadUrlResponse {
  /**
   * 备份下载地址
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费询价结果
 */
export interface TradePrice {
  /**
   * 预付费模式下资源总价，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPrice: number
  /**
   * 总的折扣，100表示100%不打折
   */
  Discount: number
  /**
   * 预付费模式下的优惠后总价, 单位: 分,例如用户享有折扣 =TotalPrice × Discount
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPriceDiscount: number
  /**
   * 后付费模式下的单位资源价格，不包含优惠，单位:分
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice: number
  /**
   * 优惠后后付费模式下的单位资源价格, 单位: 分,例如用户享有折扣=UnitPricet × Discount
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPriceDiscount: number
  /**
   * 计费价格单位
   */
  ChargeUnit: string
}

/**
 * DescribeBinlogConfig请求参数结构体
 */
export interface DescribeBinlogConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * CreateAuditRuleTemplate请求参数结构体
 */
export interface CreateAuditRuleTemplateRequest {
  /**
   * 审计规则。
   */
  RuleFilters: Array<RuleFilters>
  /**
   * 规则模板名称。
   */
  RuleTemplateName: string
  /**
   * 规则模板描述。
   */
  Description?: string
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
}

/**
 * PauseServerless请求参数结构体
 */
export interface PauseServerlessRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 是否强制暂停，忽略当前的用户链接  0:不强制  1:强制， 默认为1
   */
  ForcePause?: number
}

/**
 * 集群信息
 */
export interface CynosdbCluster {
  /**
   * 集群状态， 可选值如下:
creating: 创建中
running:运行中
isolating:隔离中
isolated:已隔离
activating:解隔离中
offlining:下线中
offlined:已下线
deleting:删除中
deleted:已删除
   */
  Status: string
  /**
   * 更新时间
   */
  UpdateTime: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * 地域
   */
  Region: string
  /**
   * 数据库版本
   */
  DbVersion: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例数
   */
  InstanceNum: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin: string
  /**
   * 引擎类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbType: string
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId: number
  /**
   * 集群状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc: string
  /**
   * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 付费模式。0-按量计费，1-包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode: number
  /**
   * 截止时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodEndTime: string
  /**
   * 集群读写vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip: string
  /**
   * 集群读写vport
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport: number
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectID: number
  /**
   * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * cynos内核版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  CynosVersion?: string
  /**
   * 存储容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLimit?: number
  /**
   * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 正在处理的任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessingTask?: string
  /**
   * 集群的任务数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<ObjectTask>
  /**
   * 集群绑定的tag数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTags?: Array<Tag>
  /**
   * Db类型(NORMAL, SERVERLESS)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbMode?: string
  /**
   * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
pause
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerlessStatus?: string
  /**
   * 集群预付费存储值大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Storage?: number
  /**
   * 集群存储为预付费时的存储ID，用于预付费存储变配
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageId?: string
  /**
   * 集群存储付费模式。0-按量计费，1-包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoragePayMode?: number
  /**
   * 集群计算规格对应的最小存储值
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinStorageSize?: number
  /**
   * 集群计算规格对应的最大存储值
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxStorageSize?: number
  /**
   * 集群网络信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetAddrs?: Array<NetAddr>
  /**
   * 物理可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhysicalZone?: string
  /**
   * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterZone?: string
  /**
   * 是否有从可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasSlaveZone?: string
  /**
   * 从可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZones?: Array<string>
  /**
   * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessType?: string
  /**
   * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFreeze?: string
  /**
   * 订单来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderSource?: string
  /**
   * 能力
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ability?: Ability
  /**
   * 实例绑定资源包信息（此处只返回存储资源包，即packageType=DISK）	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePackages?: Array<ResourcePackage>
}

/**
 * OpenWan返回参数结构体
 */
export interface OpenWanResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineCluster返回参数结构体
 */
export interface OfflineClusterResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountHost请求参数结构体
 */
export interface ModifyAccountHostRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 新主机
   */
  NewHost: string
  /**
   * 账号信息
   */
  Account: InputAccount
}

/**
 * DescribeFlow请求参数结构体
 */
export interface DescribeFlowRequest {
  /**
   * 任务流ID
   */
  FlowId: number
}

/**
 * DescribeClusterDatabaseTables返回参数结构体
 */
export interface DescribeClusterDatabaseTablesResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 分页限制数量
   */
  Limit?: number
  /**
   * 数据库表列表
   */
  Tables?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenReadOnlyInstanceExclusiveAccess请求参数结构体
 */
export interface OpenReadOnlyInstanceExclusiveAccessRequest {
  /**
   * 请使用 [集群信息描述](https://cloud.tencent.com/document/api/1003/48086) 获取 clusterId。
   */
  ClusterId: string
  /**
   * 请使用 [集群信息描述](https://cloud.tencent.com/document/api/1003/48086) 获取 instanceId。
   */
  InstanceId: string
  /**
   * 指定的 vpc ID，请使用 [查询私有网络列表](https://cloud.tencent.com/document/api/215/15778) 获取 vpc ID。
   */
  VpcId: string
  /**
   * 指定的子网 ID，如果设置了 vpc ID，则 SubnetId 必填，请使用 [查询子网列表](https://cloud.tencent.com/document/api/215/15784) 获取 SubnetId。
   */
  SubnetId: string
  /**
   * 用户自定义的端口。
   */
  Port: number
  /**
   * 安全组 ID，请使用 [查看安全组](https://cloud.tencent.com/document/api/215/15808) 获取 SecurityGroupId。
   */
  SecurityGroupIds?: Array<string>
}

/**
 * CreateBackup请求参数结构体
 */
export interface CreateBackupRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 备份类型, 可选值：logic，逻辑备份；snapshot，物理备份
   */
  BackupType?: string
  /**
   * 备份的库, 只在 BackupType 为 logic 时有效
   */
  BackupDatabases?: Array<string>
  /**
   * 备份的表, 只在 BackupType 为 logic 时有效
   */
  BackupTables?: Array<DatabaseTables>
  /**
   * 备注名
   */
  BackupName?: string
}

/**
 * CreateCLSDelivery请求参数结构体
 */
export interface CreateCLSDeliveryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 日志投递配置
   */
  CLSInfoList: Array<CLSInfo>
  /**
   * 日志类型
   */
  LogType?: string
  /**
   * 是否维护时间运行
   */
  IsInMaintainPeriod?: string
}

/**
 * DescribeMaintainPeriod返回参数结构体
 */
export interface DescribeMaintainPeriodResponse {
  /**
   * 维护week days
   */
  MaintainWeekDays?: Array<string>
  /**
   * 维护开始时间，单位秒
   */
  MaintainStartTime?: number
  /**
   * 维护时长，单位秒
   */
  MaintainDuration?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupList返回参数结构体
 */
export interface DescribeBackupListResponse {
  /**
   * 总共备份文件个数
   */
  TotalCount?: number
  /**
   * 备份文件列表
   */
  BackupList?: Array<BackupFileInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcePackageDetail请求参数结构体
 */
export interface DescribeResourcePackageDetailRequest {
  /**
   * 资源包唯一ID
   */
  PackageId: string
  /**
   * 集群ID
   */
  ClusterIds?: Array<string>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 偏移量
   */
  Offset?: string
  /**
   * 限制
   */
  Limit?: string
  /**
   * 实例D
   */
  InstanceIds?: Array<string>
}

/**
 * ModifyClusterParam请求参数结构体
 */
export interface ModifyClusterParamRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值且不做校验
   */
  ParamList: Array<ParamItem>
  /**
   * 维护期间执行-yes,立即执行-no
   */
  IsInMaintainPeriod?: string
}

/**
 * OfflineInstance返回参数结构体
 */
export interface OfflineInstanceResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditLogFile请求参数结构体
 */
export interface CreateAuditLogFileRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 开始时间，格式为："2017-07-12 10:29:20"。
   */
  StartTime: string
  /**
   * 结束时间，格式为："2017-07-12 10:29:20"。
   */
  EndTime: string
  /**
   * 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。
   */
  Order?: string
  /**
   * 排序字段。支持值包括：
"timestamp" - 时间戳；
"affectRows" - 影响行数；
"execTime" - 执行时间。
   */
  OrderBy?: string
  /**
   * 已废弃。
   */
  Filter?: AuditLogFilter
  /**
   * 审计日志过滤条件
   */
  LogFilter?: Array<InstanceAuditLogFilter>
}

/**
 * ModifyClusterSlaveZone请求参数结构体
 */
export interface ModifyClusterSlaveZoneRequest {
  /**
   * 集群Id
   */
  ClusterId: string
  /**
   * 旧从可用区
   */
  OldSlaveZone: string
  /**
   * 新从可用区
   */
  NewSlaveZone: string
  /**
   * binlog同步方式。默认值：async。可选值：sync、semisync、async
   */
  BinlogSyncWay?: string
}

/**
 * DescribeInstanceErrorLogs返回参数结构体
 */
export interface DescribeInstanceErrorLogsResponse {
  /**
   * 日志条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 错误日志列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorLogs?: Array<CynosdbErrorLogItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSupportProxyVersion返回参数结构体
 */
export interface DescribeSupportProxyVersionResponse {
  /**
   * 支持的数据库代理版本集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportProxyVersions?: Array<string>
  /**
   * 当前proxy版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentProxyVersion?: string
  /**
   * 代理版本详情
   */
  SupportProxyVersionDetail?: Array<ProxyVersionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterDatabase返回参数结构体
 */
export interface DeleteClusterDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群详情详细信息
 */
export interface CynosdbClusterDetail {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 物理可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhysicalZone?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 状态描述
   */
  StatusDesc?: string
  /**
   * 当Db类型为SERVERLESS时，serverless集群状态，可选值:
resume
resuming
pause
pausing
   */
  ServerlessStatus?: string
  /**
   * 存储Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageId?: string
  /**
   * 存储大小，单位为G
注意：此字段可能返回 null，表示取不到有效值。
   */
  Storage?: number
  /**
   * 最大存储规格，单位为G
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxStorageSize?: number
  /**
   * 最小存储规格，单位为G
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinStorageSize?: number
  /**
   * 存储付费类型，1为包年包月，0为按量计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoragePayMode?: number
  /**
   * VPC名称
   */
  VpcName?: string
  /**
   * vpc唯一id
   */
  VpcId?: string
  /**
   * 子网名称
   */
  SubnetName?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 字符集
   */
  Charset?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * Db类型：<li>NORMAL</li><li>SERVERLESS</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbMode?: string
  /**
   * 数据库版本
   */
  DbVersion?: string
  /**
   * 存储空间上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLimit?: number
  /**
   * 使用容量
   */
  UsedStorage?: number
  /**
   * vip地址
   */
  Vip?: string
  /**
   * vport端口
   */
  Vport?: number
  /**
   * 集群只读实例的vip地址和vport端口
   */
  RoAddr?: Array<Addr>
  /**
   * 集群支持的功能
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ability?: Ability
  /**
   * cynos版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  CynosVersion?: string
  /**
   * 商业类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessType?: string
  /**
   * 是否有从可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasSlaveZone?: string
  /**
   * 是否冻结
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFreeze?: string
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<ObjectTask>
  /**
   * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterZone?: string
  /**
   * 从可用区列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZones?: Array<string>
  /**
   * 实例信息
   */
  InstanceSet?: Array<ClusterInstanceDetail>
  /**
   * 付费模式
   */
  PayMode?: number
  /**
   * 到期时间
   */
  PeriodEndTime?: string
  /**
   * 项目id
   */
  ProjectID?: number
  /**
   * 实例绑定的tag数组信息
   */
  ResourceTags?: Array<Tag>
  /**
   * Proxy状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyStatus?: string
  /**
   * binlog开关，可选值：ON, OFF
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogBin?: string
  /**
   * 是否跳过交易
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSkipTrade?: string
  /**
   * pitr类型，可选值：normal, redo_pitr
注意：此字段可能返回 null，表示取不到有效值。
   */
  PitrType?: string
  /**
   * 是否打开密码复杂度
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOpenPasswordComplexity?: string
  /**
   * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkStatus?: string
  /**
   * 集群绑定的资源包信息	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePackages?: Array<ResourcePackage>
  /**
   * 自动续费标识，1为自动续费，0为到期不续
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 节点网络类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkType?: string
  /**
   * 备可用区属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZoneAttr?: Array<SlaveZoneAttrItem>
}

/**
 * RestartInstance请求参数结构体
 */
export interface RestartInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * 资源包明细说明
 */
export interface PackageDetail {
  /**
   * AppId账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 资源包唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageId?: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 成功抵扣容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessDeductSpec?: number
  /**
   * 截止当前，资源包已使用的容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageTotalUsedSpec?: number
  /**
   * 抵扣开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 抵扣结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendInfo?: string
}

/**
 * binlog配置信息
 */
export interface BinlogConfigInfo {
  /**
   * binlog保留时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogSaveDays: number
  /**
   * binlog异地地域备份是否开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogCrossRegionsEnable: string
  /**
   * binlog异地地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogCrossRegions?: Array<string>
}

/**
 * DescribeAccountPrivileges请求参数结构体
 */
export interface DescribeAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 账户名
   */
  AccountName: string
  /**
   * 主机
   */
  Host: string
  /**
   * 数据库名，为*时，忽略Type/TableName, 表示修改用户全局权限；
   */
  Db: string
  /**
   * 指定数据库下的对象类型，可选"table"，"*"
   */
  Type: string
  /**
   * 当Type="table"时，用来指定表名
   */
  TableName?: string
}

/**
 * ModifyAccountParams返回参数结构体
 */
export interface ModifyAccountParamsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceSpecs返回参数结构体
 */
export interface DescribeInstanceSpecsResponse {
  /**
   * 规格信息
   */
  InstanceSpecSet?: Array<InstanceSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改参数时，传入参数描述
 */
export interface ParamItem {
  /**
   * 参数名称
   */
  ParamName: string
  /**
   * 当前值
   */
  CurrentValue: string
  /**
   * 原有值
   */
  OldValue: string
}

/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
  /**
   * 集群详细信息
   */
  Detail?: CynosdbClusterDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceSlowQueries请求参数结构体
 */
export interface DescribeInstanceSlowQueriesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 事务开始最早时间
   */
  StartTime?: string
  /**
   * 事务开始最晚时间
   */
  EndTime?: string
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 用户名
   */
  Username?: string
  /**
   * 客户端host
   */
  Host?: string
  /**
   * 数据库名
   */
  Database?: string
  /**
   * 排序字段，可选值：QueryTime,LockTime,RowsExamined,RowsSent
   */
  OrderBy?: string
  /**
   * 排序类型，可选值：asc,desc
   */
  OrderByType?: string
  /**
   * sql语句
   */
  SqlText?: string
}

/**
 * ModifyResourcePackageClusters返回参数结构体
 */
export interface ModifyResourcePackageClustersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账号，包含accountName和host
 */
export interface InputAccount {
  /**
   * 账号
   */
  AccountName: string
  /**
   * 主机，默认‘%’
   */
  Host?: string
}

/**
 * ModifyClusterName请求参数结构体
 */
export interface ModifyClusterNameRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群名
   */
  ClusterName: string
}

/**
 * 实例的审计规则详情。
 */
export interface InstanceAuditRule {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 是否是规则审计。true-规则审计，false-全审计。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuditRule?: boolean
  /**
   * 审计规则详情。仅当AuditRule=true时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuditRuleFilters?: Array<AuditRuleFilters>
  /**
   * 是否是审计策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldRule?: boolean
  /**
   * 实例应用的规则模板详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplates?: Array<RuleTemplateInfo>
}

/**
 * 交换RO组信息
 */
export interface ExchangeRoGroupInfo {
  /**
   * 源RO组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcRoGroupInfo?: RollbackRoGroupInfo
  /**
   * 目标RO组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstRoGroupInfo?: RollbackRoGroupInfo
}

/**
 * RefundResourcePackage请求参数结构体
 */
export interface RefundResourcePackageRequest {
  /**
   * 资源包唯一ID
   */
  PackageId: string
}

/**
 * DescribeBinlogDownloadUrl请求参数结构体
 */
export interface DescribeBinlogDownloadUrlRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * Binlog文件ID
   */
  BinlogId: number
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName: string
}

/**
 * 回档实例信息
 */
export interface RollbackInstanceInfo {
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqSubnetId?: string
  /**
   * vip信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * vport信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * cpu大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mem?: number
  /**
   * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLimit?: number
}

/**
 * UpgradeClusterVersion返回参数结构体
 */
export interface UpgradeClusterVersionResponse {
  /**
   * 异步任务id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
  /**
   * 安全组信息
   */
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteParamTemplate返回参数结构体
 */
export interface DeleteParamTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群实例信息
 */
export interface ClusterInstanceDetail {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 引擎类型
   */
  InstanceType?: string
  /**
   * 实例状态
   */
  InstanceStatus?: string
  /**
   * 实例状态描述
   */
  InstanceStatusDesc?: string
  /**
   * cpu核数
   */
  InstanceCpu?: number
  /**
   * 内存
   */
  InstanceMemory?: number
  /**
   * 硬盘
   */
  InstanceStorage?: number
  /**
   * 实例角色
   */
  InstanceRole?: string
  /**
   * 执行开始时间(距离0点的秒数)	
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainStartTime?: number
  /**
   * 持续的时间(单位：秒)	
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainDuration?: number
  /**
   * 可以执行的时间，枚举值：["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainWeekDays?: Array<string>
  /**
   * serverless实例子状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerlessStatus?: string
  /**
   * 实例任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTasks?: Array<ObjectTask>
  /**
   * 实例机器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceDeviceType?: string
  /**
   * 实例存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStorageType?: string
  /**
   * 数据库类型
   */
  DbMode?: string
}

/**
 * 集群从可用区信息
 */
export interface ClusterSlaveData {
  /**
   * 旧主可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldMasterZone?: string
  /**
   * 旧从可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldSlaveZone?: Array<string>
  /**
   * 新主可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewMasterZone?: string
  /**
   * 新从可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewSlaveZone?: Array<string>
  /**
   * 新从可用区属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewSlaveZoneAttr?: Array<SlaveZoneAttrItem>
  /**
   * 旧可用区属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldSlaveZoneAttr?: Array<SlaveZoneAttrItem>
}

/**
 * 数据库地址
 */
export interface OldAddrInfo {
  /**
   * IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vport?: number
  /**
   * 期望执行回收时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReturnTime?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 任务列表总条数
   */
  TotalCount?: number
  /**
   * 任务列表
   */
  TaskList?: Array<BizTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenClusterPasswordComplexity请求参数结构体
 */
export interface OpenClusterPasswordComplexityRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 密码长度
   */
  ValidatePasswordLength: number
  /**
   * 大小写字符个数
   */
  ValidatePasswordMixedCaseCount: number
  /**
   * 特殊字符个数
   */
  ValidatePasswordSpecialCharCount: number
  /**
   * 数字个数
   */
  ValidatePasswordNumberCount: number
  /**
   * 密码强度（"MEDIUM", "STRONG"）
   */
  ValidatePasswordPolicy: string
  /**
   * 数据字典
   */
  ValidatePasswordDictionary?: Array<string>
}

/**
 * DescribeAuditLogs返回参数结构体
 */
export interface DescribeAuditLogsResponse {
  /**
   * 符合条件的审计日志条数。
   */
  TotalCount?: number
  /**
   * 审计日志详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AuditLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源包抵扣优先级
 */
export interface PackagePriority {
  /**
   * 需要自定义抵扣优先级的资源包
   */
  PackageId?: string
  /**
   * 自定义的抵扣优先级
   */
  DeductionPriority?: number
}

/**
 * DescribeInstancesWithinSameCluster请求参数结构体
 */
export interface DescribeInstancesWithinSameClusterRequest {
  /**
   * vpcId
   */
  UniqVpcId: string
  /**
   * vip
   */
  Vip: string
}

/**
 * 实例组信息
 */
export interface CynosdbInstanceGroup {
  /**
   * 用户appId
   */
  AppId?: number
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 删除时间
   */
  DeletedTime?: string
  /**
   * 实例组ID
   */
  InstanceGroupId?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 实例组（网络）类型。ha-ha组；ro-只读组；proxy-代理；singleRo-只读实例独占
   */
  Type?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 内网IP
   */
  Vip?: string
  /**
   * 内网端口
   */
  Vport?: number
  /**
   * 外网域名
   */
  WanDomain?: string
  /**
   * 外网ip
   */
  WanIP?: string
  /**
   * 外网端口
   */
  WanPort?: number
  /**
   * 外网状态
   */
  WanStatus?: string
  /**
   * 实例组包含实例信息
   */
  InstanceSet?: Array<CynosdbInstance>
  /**
   * VPC的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqVpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniqSubnetId?: string
  /**
   * 正在回收IP信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldAddrInfo?: OldAddrInfo
  /**
   * 正在进行的任务
   */
  ProcessingTasks?: Array<string>
  /**
   * 任务列表
   */
  Tasks?: Array<ObjectTask>
  /**
   * biz_net_service表id
   */
  NetServiceId?: number
}

/**
 * ModifyAccountDescription返回参数结构体
 */
export interface ModifyAccountDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetRenewFlag请求参数结构体
 */
export interface SetRenewFlagRequest {
  /**
   * 需操作的集群ID
   */
  ResourceIds: Array<string>
  /**
   * 自动续费标志位，续费标记 0:正常续费  1:自动续费 2:到期不续
   */
  AutoRenewFlag: number
}

/**
 * DescribeServerlessInstanceSpecs请求参数结构体
 */
export interface DescribeServerlessInstanceSpecsRequest {
  /**
   * 可用区
   */
  Zone?: string
}

/**
 * proxy组
 */
export interface ProxyGroup {
  /**
   * 数据库代理组ID
   */
  ProxyGroupId?: string
  /**
   * 数据库代理组节点个数
   */
  ProxyNodeCount?: number
  /**
   * 数据库代理组状态
   */
  Status?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 当前代理版本
   */
  CurrentProxyVersion?: string
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 读写节点开通数据库代理
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenRw?: string
}

/**
 * AddClusterSlaveZone请求参数结构体
 */
export interface AddClusterSlaveZoneRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 从可用区
   */
  SlaveZone: string
  /**
   * binlog同步方式。默认值：async。可选值：sync、semisync、async
   */
  BinlogSyncWay?: string
}

/**
 * 回滚数据库信息
 */
export interface RollbackDatabase {
  /**
   * 旧数据库名称
   */
  OldDatabase: string
  /**
   * 新数据库名称
   */
  NewDatabase: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 任务开始时间起始值
   */
  StartTimeBegin?: string
  /**
   * 任务开始时间结束值
   */
  StartTimeEnd?: string
  /**
   * 过滤条件
   */
  Filters?: Array<QueryFilter>
  /**
   * 查询列表长度
   */
  Limit?: number
  /**
   * 查询列表偏移量
   */
  Offset?: number
}

/**
 * ModifyClusterStorage返回参数结构体
 */
export interface ModifyClusterStorageResponse {
  /**
   * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceUpgradeLimitDays请求参数结构体
 */
export interface ModifyInstanceUpgradeLimitDaysRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 升级限制时间
   */
  UpgradeLimitDays: number
}

/**
 * CloseClusterPasswordComplexity请求参数结构体
 */
export interface CloseClusterPasswordComplexityRequest {
  /**
   * 集群ID数组
   */
  ClusterIds: Array<string>
}

/**
 * DescribeIsolatedInstances请求参数结构体
 */
export interface DescribeIsolatedInstancesRequest {
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 记录偏移量，默认值为0
   */
  Offset?: number
  /**
   * 排序字段，取值范围：
<li> CREATETIME：创建时间</li>
<li> PERIODENDTIME：过期时间</li>
   */
  OrderBy?: string
  /**
   * 排序类型，取值范围：
<li> ASC：升序排序 </li>
<li> DESC：降序排序 </li>
   */
  OrderByType?: string
  /**
   * 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Filters?: Array<QueryFilter>
  /**
   * 引擎类型：目前支持“MYSQL”， “POSTGRESQL”
   */
  DbType?: string
}

/**
 * ModifyAccountParams请求参数结构体
 */
export interface ModifyAccountParamsRequest {
  /**
   * 集群id，不超过32个字符
   */
  ClusterId: string
  /**
   * 账号信息
   */
  Account: InputAccount
  /**
   * 数据库表权限数组,当前仅支持参数：max_user_connections，max_user_connections不能大于10240
   */
  AccountParams: Array<AccountParam>
}

/**
 * 审计日志文件
 */
export interface AuditLogFile {
  /**
   * 审计日志文件名称
   */
  FileName?: string
  /**
   * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
   */
  CreateTime?: string
  /**
   * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
   */
  Status?: string
  /**
   * 文件大小，单位为 KB。
   */
  FileSize?: number
  /**
   * 审计日志下载地址。
   */
  DownloadUrl?: string
  /**
   * 错误信息。
   */
  ErrMsg?: string
}

/**
 * DescribeAuditRuleTemplates返回参数结构体
 */
export interface DescribeAuditRuleTemplatesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 规则模板详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AuditRuleTemplateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 逻辑备份配置信息
 */
export interface LogicBackupConfigInfo {
  /**
   * 是否开启自动逻辑备份
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicBackupEnable?: string
  /**
   * 自动逻辑备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicBackupTimeBeg?: number
  /**
   * 自动逻辑备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicBackupTimeEnd?: number
  /**
   * 自动逻辑备份保留时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicReserveDuration?: number
  /**
   * 是否开启跨地域逻辑备份
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicCrossRegionsEnable?: string
  /**
   * 逻辑备份所跨地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicCrossRegions?: Array<string>
}

/**
 * DeleteBackup返回参数结构体
 */
export interface DeleteBackupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 */
export interface DescribeProjectSecurityGroupsResponse {
  /**
   * 安全组详情
   */
  Groups?: Array<SecurityGroup>
  /**
   * 总数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例参数详细描述
 */
export interface ParamDetail {
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 参数类型：integer，enum，float，string，func
   */
  ParamType?: string
  /**
   * true-支持"func"，false-不支持公式
   */
  SupportFunc?: boolean
  /**
   * 默认值
   */
  Default?: string
  /**
   * 参数描述
   */
  Description?: string
  /**
   * 参数当前值
   */
  CurrentValue?: string
  /**
   * 修改参数后，是否需要重启数据库以使参数生效。0-不需要重启，1-需要重启。
   */
  NeedReboot?: number
  /**
   * 参数容许的最大值
   */
  Max?: string
  /**
   * 参数容许的最小值
   */
  Min?: string
  /**
   * 参数的可选枚举值。如果为非枚举值，则为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue?: Array<string>
  /**
   * 1：全局参数，0：非全局参数
   */
  IsGlobal?: number
  /**
   * 匹配类型，multiVal
   */
  MatchType?: string
  /**
   * 匹配目标值，当multiVal时，各个key用，分割
   */
  MatchValue?: string
  /**
   * true-为公式，false-非公式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFunc?: boolean
  /**
   * 参数设置为公式时，Func返回设置的公式内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Func?: string
  /**
   * 参数是否可修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiableInfo?: ModifiableInfo
  /**
   * 支持公式的参数的默认公式样式
注意：此字段可能返回 null，表示取不到有效值。
   */
  FuncPattern?: string
}

/**
 * OfflineCluster请求参数结构体
 */
export interface OfflineClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterInstanceGroups请求参数结构体
 */
export interface DescribeClusterInstanceGroupsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * OpenAuditService请求参数结构体
 */
export interface OpenAuditServiceRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 日志保留时长。
   */
  LogExpireDay: number
  /**
   * 高频日志保留时长。
   */
  HighLogExpireDay?: number
  /**
   * 审计规则。同RuleTemplateIds都不填是全审计。
   */
  AuditRuleFilters?: Array<AuditRuleFilters>
  /**
   * 规则模板ID。同AuditRuleFilters都不填是全审计。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 审计类型。true-全审计；默认false-规则审计。
   */
  AuditAll?: boolean
}

/**
 * ModifyResourcePackageName返回参数结构体
 */
export interface ModifyResourcePackageNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupList请求参数结构体
 */
export interface DescribeBackupListRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 返回数量，取值范围(0,100]
   */
  Limit?: number
  /**
   * 记录偏移量，取值范围[0,INF)
   */
  Offset?: number
  /**
   * 数据库类型，取值范围: 
<li> MYSQL </li>
   */
  DbType?: string
  /**
   * 备份ID
   */
  BackupIds?: Array<number | bigint>
  /**
   * 备份类型，可选值：snapshot，快照备份； logic，逻辑备份
   */
  BackupType?: string
  /**
   * 备份方式，可选值：auto，自动备份；manual，手动备份
   */
  BackupMethod?: string
  /**
   * 快照类型，可选值：full，全量；increment，增量
   */
  SnapShotType?: string
  /**
   * 备份开始时间
   */
  StartTime?: string
  /**
   * 备份结束时间
   */
  EndTime?: string
  /**
   * 备份文件名，模糊查询
   */
  FileNames?: Array<string>
  /**
   * 备份备注名，模糊查询
   */
  BackupNames?: Array<string>
  /**
   * 快照备份Id列表
   */
  SnapshotIdList?: Array<number | bigint>
  /**
   * 备份地域
   */
  BackupRegion?: string
  /**
   * 是否跨地域备份
   */
  IsCrossRegionsBackup?: string
}

/**
 * 转换集群log bin开关
 */
export interface SwitchClusterLogBin {
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * ExportInstanceErrorLogs返回参数结构体
 */
export interface ExportInstanceErrorLogsResponse {
  /**
   * 错误日志导出内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorLogItems?: Array<ErrorLogItemExport>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例参数信息
 */
export interface ParamItemDetail {
  /**
   * 当前值
   */
  CurrentValue?: string
  /**
   * 默认值
   */
  Default?: string
  /**
   * 参数的可选枚举值。如果为非枚举值，则为空
   */
  EnumValue?: Array<string>
  /**
   * 1：全局参数，0：非全局参数
   */
  IsGlobal?: number
  /**
   * 最大值
   */
  Max?: string
  /**
   * 最小值
   */
  Min?: string
  /**
   * 修改参数后，是否需要重启数据库以使参数生效。0-不需要重启，1-需要重启。
   */
  NeedReboot?: number
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 参数类型：integer，enum，float，string，func
   */
  ParamType?: string
  /**
   * 参数描述
   */
  Description?: string
  /**
   * 类型是否为公式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFunc?: boolean
  /**
   * 参数配置公式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Func?: string
  /**
   * 支持公式的参数的默认公式样式
注意：此字段可能返回 null，表示取不到有效值。
   */
  FuncPattern?: string
}

/**
 * GrantAccountPrivileges请求参数结构体
 */
export interface GrantAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 账号信息
   */
  Account: InputAccount
  /**
   * 数据库表权限码数组
   */
  DbTablePrivileges: Array<string>
  /**
   * 数据库表信息
   */
  DbTables: Array<DbTable>
}

/**
 * IsolateCluster返回参数结构体
 */
export interface IsolateClusterResponse {
  /**
   * 任务流ID(后付费或者serverless资源返回，如果需要同步任务状态，请使用DescribeFlow接口)
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 退款订单号(预付费资源返回，如果需要同步订单状态，请使用计费产品的DescribeDealsByCond同步订单状态)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewClusters返回参数结构体
 */
export interface RenewClustersResponse {
  /**
   * 预付费总订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 退款订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 冻结流水，一次开通一个冻结流水
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 每个订单号对应的发货资源id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceIds?: Array<string>
  /**
   * 集群id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回档表信息
 */
export interface RollbackTableInfo {
  /**
   * 旧表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldTable: string
  /**
   * 新表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewTable: string
}

/**
 * 回档进度详情
 */
export interface RollbackProcessInfo {
  /**
   * 是否可以交换vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVipSwitchable?: boolean
  /**
   * vip可交换时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipSwitchableTime?: string
  /**
   * 交换实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExchangeInstanceInfoList?: Array<ExchangeInstanceInfo>
  /**
   * 交换RO组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExchangeRoGroupInfoList?: Array<ExchangeRoGroupInfo>
  /**
   * 当前步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentStep?: string
  /**
   * 当前步骤进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentStepProgress?: number
  /**
   * 当前步骤剩余时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentStepRemainingTime?: string
}

/**
 * ModifyVipVport返回参数结构体
 */
export interface ModifyVipVportResponse {
  /**
   * 异步任务id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 网络组id(cynosdbmysql-grp-前缀开头)或集群id
   */
  InstanceId: string
  /**
   * 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。
   */
  SecurityGroupIds: Array<string>
  /**
   * 可用区
   */
  Zone: string
}

/**
 * CloseAuditService请求参数结构体
 */
export interface CloseAuditServiceRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
}

/**
 * ModifyClusterPasswordComplexity返回参数结构体
 */
export interface ModifyClusterPasswordComplexityResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeClusterVersion请求参数结构体
 */
export interface UpgradeClusterVersionRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 内核版本
   */
  CynosVersion: string
  /**
   * 升级时间类型，可选：upgradeImmediate,upgradeInMaintain
   */
  UpgradeType: string
}

/**
 * 查询审计实例的过滤条件
 */
export interface AuditInstanceFilters {
  /**
   * 过滤条件值。支持InstanceId-实例ID，InstanceName-实例名称，ProjectId-项目ID，TagKey-标签键，Tag-标签（以竖线分割，例：Tagkey|Tagvalue）。
   */
  Name: string
  /**
   * true表示精确查找，false表示模糊匹配。
   */
  ExactMatch: boolean
  /**
   * 筛选值
   */
  Values: Array<string>
}

/**
 * 参数信息
 */
export interface ParamInfo {
  /**
   * 当前值
   */
  CurrentValue?: string
  /**
   * 默认值
   */
  Default?: string
  /**
   * 参数为enum/string/bool时，可选值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue?: Array<string>
  /**
   * 参数类型为float/integer时的最大值
   */
  Max?: string
  /**
   * 参数类型为float/integer时的最小值
   */
  Min?: string
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 是否需要重启生效
   */
  NeedReboot?: number
  /**
   * 参数类型：integer/float/string/enum/bool
   */
  ParamType?: string
  /**
   * 匹配类型，multiVal, regex在参数类型是string时使用
   */
  MatchType?: string
  /**
   * 匹配目标值，当multiVal时，各个key用;分割
   */
  MatchValue?: string
  /**
   * 参数描述
   */
  Description?: string
  /**
   * 是否为全局参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsGlobal?: number
  /**
   * 参数是否可修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiableInfo?: ModifiableInfo
  /**
   * 是否为函数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFunc?: boolean
  /**
   * 函数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Func?: string
  /**
   * 支持公式的参数的默认公式样式
注意：此字段可能返回 null，表示取不到有效值。
   */
  FuncPattern?: string
}

/**
 * ModifyClusterParam返回参数结构体
 */
export interface ModifyClusterParamResponse {
  /**
   * 异步请求Id，用于查询结果
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组详情
 */
export interface SecurityGroup {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
   */
  CreateTime?: string
  /**
   * 入站规则
   */
  Inbound?: Array<PolicyRule>
  /**
   * 出站规则
   */
  Outbound?: Array<PolicyRule>
  /**
   * 安全组ID
   */
  SecurityGroupId?: string
  /**
   * 安全组名称
   */
  SecurityGroupName?: string
  /**
   * 安全组备注
   */
  SecurityGroupRemark?: string
}

/**
 * ModifyClusterPasswordComplexity请求参数结构体
 */
export interface ModifyClusterPasswordComplexityRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 密码长度
   */
  ValidatePasswordLength: number
  /**
   * 大小写字符个数
   */
  ValidatePasswordMixedCaseCount: number
  /**
   * 特殊字符个数
   */
  ValidatePasswordSpecialCharCount: number
  /**
   * 数字个数
   */
  ValidatePasswordNumberCount: number
  /**
   * 密码强度（"MEDIUM", "STRONG"）
   */
  ValidatePasswordPolicy: string
  /**
   * 数据字典
   */
  ValidatePasswordDictionary?: Array<string>
}

/**
 * UnbindClusterResourcePackages请求参数结构体
 */
export interface UnbindClusterResourcePackagesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 资源包唯一ID,如果不传，解绑该实例绑定的所有资源包
   */
  PackageIds?: Array<string>
}

/**
 * ModifyInstanceParam返回参数结构体
 */
export interface ModifyInstanceParamResponse {
  /**
   * 任务ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务进度查询
 */
export interface TaskProgressInfo {
  /**
   * 当前步骤
   */
  CurrentStep?: string
  /**
   * 当前进度
   */
  CurrentStepProgress?: number
  /**
   * 预估时间
   */
  CurrentStepRemainingTime?: string
}

/**
 * 参数模板详情
 */
export interface TemplateParamInfo {
  /**
   * 当前值
   */
  CurrentValue: string
  /**
   * 默认值
   */
  Default: string
  /**
   * 参数类型为enum时可选的值类型集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnumValue: Array<string>
  /**
   * 参数类型为float/integer时的最大值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max: string
  /**
   * 参数类型为float/integer时的最小值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min: string
  /**
   * 参数名称
   */
  ParamName: string
  /**
   * 是否需要重启
   */
  NeedReboot: number
  /**
   * 参数描述
   */
  Description: string
  /**
   * 参数类型，integer/float/string/enum
   */
  ParamType: string
}

/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
  /**
   * 异步任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesWithinSameCluster返回参数结构体
 */
export interface DescribeInstancesWithinSameClusterResponse {
  /**
   * 实例个数
   */
  TotalCount?: number
  /**
   * 实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackToNewCluster返回参数结构体
 */
export interface RollbackToNewClusterResponse {
  /**
   * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealNames?: Array<string>
  /**
   * 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceIds?: Array<string>
  /**
   * 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIds?: Array<string>
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源包信息
 */
export interface ResourcePackage {
  /**
   * 资源包的唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageId?: string
  /**
   * 资源包类型：CCU：计算资源包
DISK：存储资源包
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 当前资源包绑定在当前实例下的抵扣优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeductionPriority?: number
}

/**
 * 计费资源信息
 */
export interface BillingResourceInfo {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 订单ID
   */
  DealName?: string
}

/**
 * ModifyProxyRwSplit返回参数结构体
 */
export interface ModifyProxyRwSplitResponse {
  /**
   * 异步FlowId
   */
  FlowId?: number
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountDescription请求参数结构体
 */
export interface ModifyAccountDescriptionRequest {
  /**
   * 数据库账号名
   */
  AccountName: string
  /**
   * 数据库账号描述信息
   */
  Description: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 主机，默认为"%"
   */
  Host?: string
}

/**
 * DescribeInstanceCLSLogDelivery请求参数结构体
 */
export interface DescribeInstanceCLSLogDeliveryRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 日志类型
   */
  LogType?: string
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
   * 冻结流水ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealIds?: Array<string>
  /**
   * 订单号
   */
  DealNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditRuleTemplate返回参数结构体
 */
export interface CreateAuditRuleTemplateResponse {
  /**
   * 生成的规则模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcePackageList请求参数结构体
 */
export interface DescribeResourcePackageListRequest {
  /**
   * 资源包唯一ID
   */
  PackageId?: Array<string>
  /**
   * 资源包名称
   */
  PackageName?: Array<string>
  /**
   * 资源包类型
CCU-计算资源包，DISK-存储资源包
   */
  PackageType?: Array<string>
  /**
   * 资源包使用地域
china-中国内地通用，overseas-港澳台及海外通用
   */
  PackageRegion?: Array<string>
  /**
   * 资源包状态
creating-创建中；
using-使用中；
expired-已过期；
normal_finish-使用完；
apply_refund-申请退费中；
refund-已退费。
   */
  Status?: Array<string>
  /**
   * 排序条件，支持排序条件:startTime-生效时间，
expireTime-过期时间，packageUsedSpec-使用容量，packageTotalSpec-总存储量。
按照数组顺序排列；
   */
  OrderBy?: Array<string>
  /**
   * 排序方式，DESC-降序，ASC-升序
   */
  OrderDirection?: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 限制
   */
  Limit?: number
}

/**
 * RevokeAccountPrivileges请求参数结构体
 */
export interface RevokeAccountPrivilegesRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 账号信息
   */
  Account: InputAccount
  /**
   * 数据库表权限数组
   */
  DbTablePrivileges: Array<string>
  /**
   * 数据库表信息
   */
  DbTables: Array<DbTable>
}

/**
 * OpenClusterPasswordComplexity返回参数结构体
 */
export interface OpenClusterPasswordComplexityResponse {
  /**
   * 任务流ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenClusterReadOnlyInstanceGroupAccess请求参数结构体
 */
export interface OpenClusterReadOnlyInstanceGroupAccessRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 端口
   */
  Port: string
  /**
   * 安全组ID
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeAuditRuleTemplates请求参数结构体
 */
export interface DescribeAuditRuleTemplatesRequest {
  /**
   * 规则模板ID。
   */
  RuleTemplateIds?: Array<string>
  /**
   * 规则模板名称
   */
  RuleTemplateNames?: Array<string>
  /**
   * 单次请求返回的数量。默认值20。
   */
  Limit?: number
  /**
   * 偏移量，默认值为 0。
   */
  Offset?: number
  /**
   * 告警等级。1-低风险，2-中风险，3-高风险。
   */
  AlarmLevel?: number
  /**
   * 告警策略。0-不告警，1-告警。
   */
  AlarmPolicy?: number
}

/**
 * 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize]
 */
export interface InstanceSpec {
  /**
   * 实例CPU，单位：核
   */
  Cpu?: number
  /**
   * 实例内存，单位：GB
   */
  Memory?: number
  /**
   * 实例最大可用存储，单位：GB
   */
  MaxStorageSize?: number
  /**
   * 实例最小可用存储，单位：GB
   */
  MinStorageSize?: number
  /**
   * 是否有库存
   */
  HasStock?: boolean
  /**
   * 机器类型
   */
  MachineType?: string
  /**
   * 最大IOPS
   */
  MaxIops?: number
  /**
   * 最大IO带宽
   */
  MaxIoBandWidth?: number
  /**
   * 地域库存信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneStockInfos?: Array<ZoneStockInfo>
  /**
   * 库存数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StockCount?: number
}

/**
 * IsolateInstance请求参数结构体
 */
export interface IsolateInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 实例ID数组，例如["cynosdbbmysql-ins-asd","cynosdbmysql-ins-zxc"]
   */
  InstanceIdList: Array<string>
  /**
   * 该参数已废弃
   */
  DbType?: string
  /**
   * 实例退还原因类型
   */
  IsolateReasonTypes?: Array<number | bigint>
  /**
   * 实例退还原因补充
   */
  IsolateReason?: string
}

/**
 * ModifyServerlessStrategy请求参数结构体
 */
export interface ModifyServerlessStrategyRequest {
  /**
   * serverless集群id
   */
  ClusterId: string
  /**
   * 集群是否自动暂停，可选范围
<li>yes</li>
<li>no</li>
   */
  AutoPause?: string
  /**
   * 集群自动暂停的延迟，单位秒，可选范围[600,691200]，默认600
   */
  AutoPauseDelay?: number
  /**
   * 该参数暂时无效
   */
  AutoScaleUpDelay?: number
  /**
   * 该参数暂时无效
   */
  AutoScaleDownDelay?: number
  /**
   * cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MinCpu?: number
  /**
   * cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MaxCpu?: number
  /**
   * 只读实例cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MinRoCpu?: number
  /**
   * 只读cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回
   */
  MaxRoCpu?: number
  /**
   * 只读节点最小个数
   */
  MinRoCount?: number
  /**
   * 只读节点最大个数
   */
  MaxRoCount?: number
}

/**
 * DescribeBinlogConfig返回参数结构体
 */
export interface DescribeBinlogConfigResponse {
  /**
   * Binlog跨地域配置更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogCrossRegionsConfigUpdateTime?: string
  /**
   * Binlog配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BinlogConfig?: BinlogConfigInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogFiles请求参数结构体
 */
export interface DescribeAuditLogFilesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 分页大小参数。默认值为 20，最小值为 1，最大值为 100。
   */
  Limit?: number
  /**
   * 分页偏移量。
   */
  Offset?: number
  /**
   * 审计日志文件名。
   */
  FileName?: string
}

/**
 * 售卖地域信息
 */
export interface SaleRegion {
  /**
   * 地域英文名
   */
  Region: string
  /**
   * 地域数字ID
   */
  RegionId: number
  /**
   * 地域中文名
   */
  RegionZh: string
  /**
   * 可售卖可用区列表
   */
  ZoneSet: Array<SaleZone>
  /**
   * 引擎类型
   */
  DbType: string
  /**
   * 地域模块支持情况
   */
  Modules: Array<Module>
}

/**
 * TDSQL-C MySQL支持的proxy版本信息
 */
export interface ProxyVersionInfo {
  /**
   * proxy版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyVersion?: string
  /**
   * 版本描述：GA:稳定版  BETA:尝鲜版，DEPRECATED:过旧，
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyVersionType?: string
}

/**
 * DeleteAuditLogFile请求参数结构体
 */
export interface DeleteAuditLogFileRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 审计日志文件名称。
   */
  FileName: string
}

/**
 * DescribeIsolatedInstances返回参数结构体
 */
export interface DescribeIsolatedInstancesResponse {
  /**
   * 实例个数
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  InstanceSet?: Array<CynosdbInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GrantAccountPrivileges返回参数结构体
 */
export interface GrantAccountPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数修改记录
 */
export interface ClusterParamModifyLog {
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 当前值
   */
  CurrentValue?: string
  /**
   * 修改后的值
   */
  UpdateValue?: string
  /**
   * 修改状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
}

/**
 * ModifyBinlogConfig返回参数结构体
 */
export interface ModifyBinlogConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
  /**
   * 数据库账号名
   */
  AccountName: string
  /**
   * 数据库账号新密码
   */
  AccountPassword: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 主机，不填默认为"%"
   */
  Host?: string
}

/**
 * 参数是否可修改的详细信息
 */
export interface ModifiableInfo {
  /**
   * 参数是否可被修改, 1:可以 0:不可以
   */
  IsModifiable?: number
}

/**
 * TaskMaintainInfo
 */
export interface TaskMaintainInfo {
  /**
   * 执行开始时间(距离0点的秒数)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainStartTime?: number
  /**
   * 持续的时间(单位：秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainDuration?: number
  /**
   * 可以执行的时间，枚举值：["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaintainWeekDays?: Array<string>
}

/**
 * DescribeServerlessStrategy请求参数结构体
 */
export interface DescribeServerlessStrategyRequest {
  /**
   * serverless集群id
   */
  ClusterId: string
}

/**
 * mysql表权限
 */
export interface TablePrivileges {
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Db: string
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName: string
  /**
   * 权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Privileges: Array<string>
}

/**
 * DescribeBinlogSaveDays返回参数结构体
 */
export interface DescribeBinlogSaveDaysResponse {
  /**
   * Binlog保留天数
   */
  BinlogSaveDays: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBackup请求参数结构体
 */
export interface DeleteBackupRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 备份文件ID，旧版本使用的字段，不推荐使用
   */
  SnapshotIdList?: Array<number | bigint>
  /**
   * 备份文件ID，推荐使用
   */
  BackupIds?: Array<number | bigint>
}

/**
 * 错误日志导出格式
 */
export interface ErrorLogItemExport {
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * 日志等级，可选值note, warning，error
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: string
  /**
   * 日志内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * DescribeParamTemplateDetail返回参数结构体
 */
export interface DescribeParamTemplateDetailResponse {
  /**
   * 参数模板ID
   */
  TemplateId?: number
  /**
   * 参数模板名称
   */
  TemplateName?: string
  /**
   * 参数模板描述
   */
  TemplateDescription?: string
  /**
   * 引擎版本
   */
  EngineVersion?: string
  /**
   * 参数总条数
   */
  TotalCount?: number
  /**
   * 参数列表
   */
  Items?: Array<ParamDetail>
  /**
   * 数据库类型，可选值：NORMAL，SERVERLESS
   */
  DbMode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBinlogSaveDays返回参数结构体
 */
export interface ModifyBinlogSaveDaysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuditRuleTemplates返回参数结构体
 */
export interface DeleteAuditRuleTemplatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则
 */
export interface PolicyRule {
  /**
   * 策略，ACCEPT或者DROP
   */
  Action?: string
  /**
   * 来源Ip或Ip段，例如192.168.0.0/16
   */
  CidrIp?: string
  /**
   * 端口
   */
  PortRange?: string
  /**
   * 网络协议，支持udp、tcp等
   */
  IpProtocol?: string
  /**
   * 协议端口ID或者协议端口组ID。
   */
  ServiceModule?: string
  /**
   * IP地址ID或者ID地址组ID。
   */
  AddressModule?: string
  /**
   * id
   */
  Id?: string
  /**
   * 描述
   */
  Desc?: string
}

/**
 * 可用区库存信息
 */
export interface ZoneStockInfo {
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 是否有库存
   */
  HasStock?: boolean
  /**
   * 库存数量
   */
  StockCount?: number
  /**
   * 备可用区库存信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveZoneStockInfos?: Array<SlaveZoneStockInfo>
}

/**
 * DeleteCLSDelivery返回参数结构体
 */
export interface DeleteCLSDeliveryResponse {
  /**
   * 异步任务id

   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenew返回参数结构体
 */
export interface InquirePriceRenewResponse {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 对应的询价结果数组
   */
  Prices?: Array<TradePrice>
  /**
   * 续费计算节点的总价格
   */
  InstanceRealTotalPrice?: number
  /**
   * 续费存储节点的总价格
   */
  StorageRealTotalPrice?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAuditRuleTemplates返回参数结构体
 */
export interface ModifyAuditRuleTemplatesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
