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
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyInstance返回参数结构体
 */
export interface DestroyInstanceResponse {
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowQueryRecordsDownload请求参数结构体
 */
export interface DescribeSlowQueryRecordsDownloadRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 慢查询时间
   */
  QueryDurationMs: number
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 排序参数
   */
  DurationMs?: string
  /**
   * 查询sql
   */
  Sql?: string
  /**
   * 排序参数
   */
  ReadRows?: string
  /**
   * 排序参数
   */
  ResultBytes?: string
  /**
   * 排序参数
   */
  MemoryUsage?: string
  /**
   * IsQuery条件
   */
  IsQuery?: number
}

/**
 * ResizeDisk请求参数结构体
 */
export interface ResizeDiskRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
   */
  Type: string
  /**
   * 云盘大小
   */
  DiskSize: number
}

/**
 * NodeInfo
 */
export interface NodeInfo {
  /**
   * 用户IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 节点状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 节点角色名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 组件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentName?: string
  /**
   * 节点角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeRole?: string
  /**
   * 节点上次重启的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastRestartTime?: string
  /**
   * 节点所在可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
}

/**
 * RestartClusterForNode返回参数结构体
 */
export interface RestartClusterForNodeResponse {
  /**
   * 流程相关信息
   */
  FlowId?: number
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceNodes返回参数结构体
 */
export interface DescribeInstanceNodesResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 实例节点总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceNodesList?: Array<InstanceNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceState请求参数结构体
 */
export interface DescribeInstanceStateRequest {
  /**
   * 集群实例名称
   */
  InstanceId: string
}

/**
 * DescribeClusterConfigs返回参数结构体
 */
export interface DescribeClusterConfigsResponse {
  /**
   * 返回实例的配置文件相关的信息
   */
  ClusterConfList?: Array<ClusterConfigsInfoFromEMR>
  /**
   * 返回当前内核版本 如果不存在则返回空字符串
   */
  BuildVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScaleOutInstance返回参数结构体
 */
export interface ScaleOutInstanceResponse {
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢查询记录
 */
export interface SlowQueryRecord {
  /**
   * 查询用户
   */
  OsUser?: string
  /**
   * 查询ID
   */
  InitialQueryId?: string
  /**
   * SQL语句
   */
  Sql?: string
  /**
   * 开始时间
   */
  QueryStartTime?: string
  /**
   * 执行耗时
   */
  DurationMs?: number
  /**
   * 读取行数
   */
  ReadRows?: number
  /**
   * 读取字节数
   */
  ResultRows?: number
  /**
   * 结果字节数
   */
  ResultBytes?: number
  /**
   * 内存
   */
  MemoryUsage?: number
  /**
   * 初始查询IP
   */
  InitialAddress?: string
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 是否是查询，0：否，1：查询语句
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsQuery?: number
  /**
   * ResultBytes的MB格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultBytesMB?: number
  /**
   * MemoryUsage的MB表示
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemoryUsageMB?: number
  /**
   * DurationMs的秒表示
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationSec?: number
}

/**
 * DescribeInstanceNodes请求参数结构体
 */
export interface DescribeInstanceNodesRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 集群角色类型，默认为 "data"数据节点
   */
  NodeRole?: string
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * 分页参数，分页步长，默认为10
   */
  Limit?: number
  /**
   * 展现策略，All时显示所有
   */
  DisplayPolicy?: string
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 新修改的实例名称
   */
  InstanceName: string
}

/**
 * 集群计费相关信息
 */
export interface ChargeProperties {
  /**
   * 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 是否自动续费，1表示自动续费开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 计费时间长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeSpan?: number
  /**
   * 计费时间单位，“m”表示月等
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUnit?: string
}

/**
 * 用于返回XML格式的配置文件和内容以及其他配置文件有关的信息
 */
export interface ClusterConfigsInfoFromEMR {
  /**
   * 配置文件名称
   */
  FileName?: string
  /**
   * 配置文件对应的相关属性信息
   */
  FileConf?: string
  /**
   * 配置文件对应的其他属性信息
   */
  KeyConf?: string
  /**
   * 配置文件的内容，base64编码
   */
  OriParam?: string
  /**
   * 用于表示当前配置文件是不是有过修改后没有重启，提醒用户需要重启
   */
  NeedRestart?: number
  /**
   * 配置文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilePath?: string
  /**
   * 配置文件kv值
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  FileKeyValues?: string
  /**
   * 配置文件kv值
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileKeyValuesNew?: Array<ConfigKeyValue>
}

/**
 * 实例节点描述信息
 */
export interface InstanceNode {
  /**
   * IP地址
   */
  Ip?: string
  /**
   * 机型，如 S1
   */
  Spec?: string
  /**
   * cpu核数
   */
  Core?: number
  /**
   * 内存大小
   */
  Memory?: number
  /**
   * 磁盘类型
   */
  DiskType?: string
  /**
   * 磁盘大小
   */
  DiskSize?: number
  /**
   * 所属clickhouse cluster名称
   */
  Role?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * rip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rip?: string
  /**
   * FE节点角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeRole?: string
  /**
   * UUID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UUID?: string
}

/**
 * CreateInstanceNew返回参数结构体
 */
export interface CreateInstanceNewResponse {
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowQueryRecordsDownload返回参数结构体
 */
export interface DescribeSlowQueryRecordsDownloadResponse {
  /**
   * cos地址
   */
  CosUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyInstance请求参数结构体
 */
export interface DestroyInstanceRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * CreateInstanceNew请求参数结构体
 */
export interface CreateInstanceNewRequest {
  /**
   * 可用区
   */
  Zone: string
  /**
   * FE规格
   */
  FeSpec: CreateInstanceSpec
  /**
   * BE规格
   */
  BeSpec: CreateInstanceSpec
  /**
   * 是否高可用
   */
  HaFlag: boolean
  /**
   * 用户VPCID
   */
  UserVPCId: string
  /**
   * 用户子网ID
   */
  UserSubnetId: string
  /**
   * 产品版本号
   */
  ProductVersion: string
  /**
   * 付费类型
   */
  ChargeProperties: ChargeProperties
  /**
   * 实例名字
   */
  InstanceName: string
  /**
   * 数据库密码
   */
  DorisUserPwd: string
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 高可用类型：
0：非高可用（只有1个FE，FeSpec.CreateInstanceSpec.Count=1），
1：读高可用（至少需部署3个FE，FeSpec.CreateInstanceSpec.Count>=3，且为奇数），
2：读写高可用（至少需部署5个FE，FeSpec.CreateInstanceSpec.Count>=5，且为奇数）。
   */
  HaType?: number
  /**
   * 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储
   */
  CaseSensitive?: number
  /**
   * 是否开启多可用区
   */
  EnableMultiZones?: boolean
  /**
   * 开启多可用区后，用户的所有可用区和子网信息
   */
  UserMultiZoneInfos?: NetworkInfo
}

/**
 * 实例描述信息
 */
export interface InstanceInfo {
  /**
   * 集群实例ID, "cdw-xxxx" 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 集群实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 状态,
Init 创建中; Serving 运行中； 
Deleted已销毁；Deleting 销毁中；
Modify 集群变更中；
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 地域, ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 可用区， ap-guangzhou-3
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 付费类型，"hour", "prepay"
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 数据节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterSummary?: NodesSummary
  /**
   * zookeeper节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoreSummary?: NodesSummary
  /**
   * 高可用，“true" "false"
注意：此字段可能返回 null，表示取不到有效值。
   */
  HA?: string
  /**
   * 高可用类型：
0：非高可用
1：读高可用
2：读写高可用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HaType?: number
  /**
   * 访问地址，例如 "10.0.0.1:9000"
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessInfo?: string
  /**
   * 记录ID，数值型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * regionId, 表示地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: number
  /**
   * 可用区说明，例如 "广州二区"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneDesc?: string
  /**
   * 错误流程说明信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMsg?: string
  /**
   * 状态描述，例如“运行中”等
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc?: string
  /**
   * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: boolean
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 监控信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Monitor?: string
  /**
   * 是否开通日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasClsTopic?: boolean
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClsTopicId?: string
  /**
   * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClsLogSetId?: string
  /**
   * 是否支持xml配置管理
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableXMLConfig?: number
  /**
   * 区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionDesc?: string
  /**
   * 弹性网卡地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Eip?: string
  /**
   * 冷热分层系数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosMoveFactor?: number
  /**
   * external/local/yunti
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kind?: string
  /**
   * cos桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketName?: string
  /**
   * cbs
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanAttachCbs?: boolean
  /**
   * 小版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildVersion?: string
  /**
   * 组件信息
注：这里返回类型实际为map[string]struct类型，并非显示的string类型，可以参考“示例值”进行数据的解析。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Components?: string
  /**
   * 判断审计日志表是否有catalog字段
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  IfExistCatalog?: number
  /**
   * 页面特性，用于前端屏蔽一些页面入口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Characteristic?: Array<string>
  /**
   * 超时时间 单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestartTimeout?: string
  /**
   * 内核优雅重启超时时间，如果为-1说明未设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  GraceShutdownWaitSeconds?: string
  /**
   * 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  CaseSensitive?: number
  /**
   * 用户是否可以绑定安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWhiteSGs?: boolean
  /**
   * 已绑定的安全组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindSGs?: Array<string>
  /**
   * 是否为多可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableMultiZones?: boolean
  /**
   * 用户可用区和子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserNetworkInfos?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 实例数组
   */
  InstancesList?: Array<InstanceInfo>
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
   * 搜索的集群id名称
   */
  SearchInstanceId?: string
  /**
   * 搜索的集群name
   */
  SearchInstanceName?: string
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * 分页参数，分页步长，默认为10
   */
  Limit?: number
  /**
   * 搜索标签列表
   */
  SearchTags?: Array<SearchTags>
}

/**
 * DescribeSlowQueryRecords请求参数结构体
 */
export interface DescribeSlowQueryRecordsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 慢查询时间
   */
  QueryDurationMs: number
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 分页
   */
  PageSize: number
  /**
   * 分页
   */
  PageNum: number
  /**
   * 排序参数
   */
  DurationMs?: string
  /**
   * 数据库名称
   */
  DbName?: Array<string>
  /**
   * 是否是查询，0：否， 1：是
   */
  IsQuery?: number
  /**
   * catalog名称
   */
  CatalogName?: Array<string>
  /**
   * sql名
   */
  Sql?: string
  /**
   * ReadRows排序字段
   */
  ReadRows?: string
  /**
   * ResultBytes排序字段
   */
  ResultBytes?: string
  /**
   * MemoryUsage排序字段
   */
  MemoryUsage?: string
}

/**
 * DescribeClusterConfigs请求参数结构体
 */
export interface DescribeClusterConfigsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   *  0 公有云查询；1青鹅查询，青鹅查询显示所有需要展示的
   */
  ConfigType?: number
  /**
   * 模糊搜索关键字文件
   */
  FileName?: string
  /**
   * 0集群维度 1节点维度
   */
  ClusterConfigType?: number
  /**
   * eth0的ip地址
   */
  IPAddress?: string
}

/**
 * ResizeDisk返回参数结构体
 */
export interface ResizeDiskResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群内节点的规格磁盘规格描述
 */
export interface AttachCBSSpec {
  /**
   * 节点磁盘类型，例如“CLOUD_SSD”\"CLOUD_PREMIUM"
   */
  DiskType?: string
  /**
   * 磁盘容量，单位G
   */
  DiskSize?: number
  /**
   * 磁盘总数
   */
  DiskCount?: number
  /**
   * 描述
   */
  DiskDesc?: string
}

/**
 * 数据库审计
 */
export interface DataBaseAuditRecord {
  /**
   * 查询用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsUser?: string
  /**
   * 查询ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitialQueryId?: string
  /**
   * SQL语句
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sql?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryStartTime?: string
  /**
   * 执行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationMs?: number
  /**
   * 读取行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadRows?: number
  /**
   * 读取字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultRows?: number
  /**
   * 结果字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultBytes?: number
  /**
   * 内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemoryUsage?: number
  /**
   * 初始查询IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitialAddress?: string
  /**
   * 数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * sql类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlType?: string
  /**
   * catalog名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
}

/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
   */
  Type: string
  /**
   * 节点数量
   */
  NodeCount: number
  /**
   * 扩容后集群高可用类型：0：非高可用，1：读高可用，2：读写高可用。
   */
  HaType?: number
}

/**
 * DescribeSlowQueryRecords返回参数结构体
 */
export interface DescribeSlowQueryRecordsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 记录列表
   */
  SlowQueryRecords?: Array<SlowQueryRecord>
  /**
   * 所有数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBNameList?: Array<string>
  /**
   * 所有catalog名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogNameList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseAuditRecords返回参数结构体
 */
export interface DescribeDatabaseAuditRecordsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 记录列表
   */
  SlowQueryRecords?: DataBaseAuditRecord
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例描述信息
   */
  InstanceInfo?: InstanceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartClusterForNode请求参数结构体
 */
export interface RestartClusterForNodeRequest {
  /**
   * 集群ID，例如cdwch-xxxx
   */
  InstanceId: string
  /**
   * 配置文件名称
   */
  ConfigName: string
  /**
   * 每次重启的批次
   */
  BatchSize?: number
  /**
   * 重启节点
   */
  NodeList?: Array<string>
  /**
   * false表示非滚动重启，true表示滚动重启
   */
  RollingRestart?: boolean
}

/**
 * ScaleUpInstance请求参数结构体
 */
export interface ScaleUpInstanceRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 节点规格
   */
  SpecName: string
  /**
   * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
   */
  Type: string
}

/**
 * 节点角色描述信息
 */
export interface NodesSummary {
  /**
   * 机型，如 S1
   */
  Spec?: string
  /**
   * 节点数目
   */
  NodeSize?: number
  /**
   * cpu核数，单位个
   */
  Core?: number
  /**
   * 内存大小，单位G
   */
  Memory?: number
  /**
   * 磁盘大小，单位G
   */
  Disk?: number
  /**
   * 磁盘类型
   */
  DiskType?: string
  /**
   * 磁盘描述
   */
  DiskDesc?: string
  /**
   * 挂载云盘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachCBSSpec?: AttachCBSSpec
  /**
   * 子产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubProductType?: string
  /**
   * 规格核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecCore?: number
  /**
   * 规格内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecMemory?: number
  /**
   * 磁盘大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskCount?: number
  /**
   * 是否加密
注意：此字段可能返回 null，表示取不到有效值。
   */
  Encrypt?: number
  /**
   * 最大磁盘
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDiskSize?: number
}

/**
 * 网络信息
 */
export interface NetworkInfo {
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 当前子网可用ip数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIpNum?: number
}

/**
 * 集群规格
 */
export interface CreateInstanceSpec {
  /**
   * 规格名字
   */
  SpecName: string
  /**
   * 数量
   */
  Count: number
  /**
   * 云盘大小
   */
  DiskSize: number
}

/**
 * 列表页搜索的标记列表
 */
export interface SearchTags {
  /**
   * 标签的键
   */
  TagKey?: string
  /**
   * 标签的值
   */
  TagValue?: string
  /**
   * 1表示只输入标签的键，没有输入值；0表示输入键时且输入值
   */
  AllValue?: number
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * 返回配置的文件内容（key-value）
 */
export interface ConfigKeyValue {
  /**
   * key
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyName?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 1-只读，2-可修改但不可删除，3-可删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  Display?: number
  /**
   * 0不支持 1支持热更新
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportHotUpdate?: number
}

/**
 * 标签描述
 */
export interface Tag {
  /**
   * 标签的键
   */
  TagKey: string
  /**
   * 标签的值
   */
  TagValue: string
}

/**
 * DescribeInstanceState返回参数结构体
 */
export interface DescribeInstanceStateResponse {
  /**
   * 集群状态，例如：Serving
   */
  InstanceState?: string
  /**
   * 集群操作创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowCreateTime?: string
  /**
   * 集群操作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowName?: string
  /**
   * 集群操作进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowProgress?: number
  /**
   * 集群状态描述，例如：运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStateDesc?: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseAuditRecords请求参数结构体
 */
export interface DescribeDatabaseAuditRecordsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 分页
   */
  PageSize: number
  /**
   * 分页
   */
  PageNum: number
  /**
   * 排序参数
   */
  OrderType?: string
  /**
   * 用户
   */
  User?: string
  /**
   * 数据库
   */
  DbName?: string
  /**
   * sql类型
   */
  SqlType?: string
  /**
   * sql语句
   */
  Sql?: string
  /**
   * 用户 （多选）
   */
  Users?: Array<string>
  /**
   * 数据库 （多选）
   */
  DbNames?: Array<string>
  /**
   * sql类型 （多选）
   */
  SqlTypes?: Array<string>
  /**
   * catalog名称（多选）
   */
  Catalogs?: Array<string>
}

/**
 * DescribeInstanceNodesInfo请求参数结构体
 */
export interface DescribeInstanceNodesInfoRequest {
  /**
   * 集群id
   */
  InstanceID: string
}

/**
 * DescribeDatabaseAuditDownload返回参数结构体
 */
export interface DescribeDatabaseAuditDownloadResponse {
  /**
   * 日志的cos地址
   */
  CosUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseAuditDownload请求参数结构体
 */
export interface DescribeDatabaseAuditDownloadRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 分页
   */
  PageSize: number
  /**
   * 分页
   */
  PageNum: number
  /**
   * 排序参数
   */
  OrderType?: string
  /**
   * 用户
   */
  User?: string
  /**
   * 数据库
   */
  DbName?: string
  /**
   * sql类型
   */
  SqlType?: string
  /**
   * sql语句
   */
  Sql?: string
  /**
   * 用户 多选
   */
  Users?: Array<string>
  /**
   * 数据库 多选
   */
  DbNames?: Array<string>
  /**
   * sql类型 多选
   */
  SqlTypes?: Array<string>
  /**
   * catalog名称 （多选）
   */
  Catalogs?: Array<string>
}

/**
 * DescribeInstanceNodesInfo返回参数结构体
 */
export interface DescribeInstanceNodesInfoResponse {
  /**
   * Be节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeNodes?: Array<string>
  /**
   * Fe节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeNodes?: Array<string>
  /**
   * Fe master节点
   */
  FeMaster?: string
  /**
   * Be节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeNodeInfos?: Array<NodeInfo>
  /**
   * Fe节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeNodeInfos?: Array<NodeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScaleUpInstance返回参数结构体
 */
export interface ScaleUpInstanceResponse {
  /**
   * 流程ID
   */
  FlowId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
