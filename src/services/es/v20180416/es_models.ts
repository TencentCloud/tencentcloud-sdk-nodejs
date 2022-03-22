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
 * 可视化节点配置
 */
export interface WebNodeTypeInfo {
  /**
   * 可视化节点个数，固定为1
   */
  NodeNum: number

  /**
   * 可视化节点规格
   */
  NodeType: string
}

/**
 * ES集群日志详细信息
 */
export interface InstanceLog {
  /**
   * 日志时间
   */
  Time: string

  /**
   * 日志级别
   */
  Level: string

  /**
   * 集群节点ip
   */
  Ip: string

  /**
   * 日志内容
   */
  Message: string
}

/**
 * 节点本地盘信息
 */
export interface LocalDiskInfo {
  /**
   * 本地盘类型<li>LOCAL_SATA：大数据型</li><li>NVME_SSD：高IO型</li>
   */
  LocalDiskType: string

  /**
   * 本地盘单盘大小
   */
  LocalDiskSize: number

  /**
   * 本地盘块数
   */
  LocalDiskCount: number
}

/**
 * 实例操作记录中的流程任务信息
 */
export interface TaskDetail {
  /**
   * 任务名
   */
  Name: string

  /**
   * 任务进度
   */
  Progress: number

  /**
   * 任务完成时间
   */
  FinishTime: string

  /**
   * 子任务
   */
  SubTasks: Array<SubTaskDetail>
}

/**
 * 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘）
 */
export interface NodeInfo {
  /**
   * 节点数量
   */
  NodeNum: number

  /**
   * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType: string

  /**
      * 节点类型<li>hotData: 热数据节点</li>
<li>warmData: 冷数据节点</li>
<li>dedicatedMaster: 专用主节点</li>
默认值为hotData
      */
  Type?: string

  /**
   * 节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
   */
  DiskType?: string

  /**
   * 节点磁盘容量（单位GB）
   */
  DiskSize?: number

  /**
      * 节点本地盘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalDiskInfo?: LocalDiskInfo

  /**
   * 节点磁盘块数
   */
  DiskCount?: number

  /**
   * 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密
   */
  DiskEncrypt?: number
}

/**
 * UpdateJdk请求参数结构体
 */
export interface UpdateJdkRequest {
  /**
   * ES实例ID
   */
  InstanceId: string

  /**
   * Jdk类型，支持kona和oracle
   */
  Jdk?: string

  /**
   * Gc类型，支持g1和cms
   */
  Gc?: string

  /**
   * 是否强制重启
   */
  ForceRestart?: boolean
}

/**
 * GetRequestTargetNodeTypes请求参数结构体
 */
export interface GetRequestTargetNodeTypesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * UpdateInstance返回参数结构体
 */
export interface UpdateInstanceResponse {
  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceOperations请求参数结构体
 */
export interface DescribeInstanceOperationsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string

  /**
   * 起始时间, e.g. "2019-03-07 16:30:39"
   */
  StartTime: string

  /**
   * 结束时间, e.g. "2019-03-30 20:18:03"
   */
  EndTime: string

  /**
   * 分页起始值
   */
  Offset: number

  /**
   * 分页大小
   */
  Limit: number
}

/**
 * 操作详情
 */
export interface OperationDetail {
  /**
   * 实例原始配置信息
   */
  OldInfo: Array<KeyValue>

  /**
   * 实例更新后配置信息
   */
  NewInfo: Array<KeyValue>
}

/**
 * DiagnoseInstance返回参数结构体
 */
export interface DiagnoseInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Kibana视图数据
 */
export interface KibanaView {
  /**
   * Kibana节点IP
   */
  Ip: string

  /**
   * 节点总磁盘大小
   */
  DiskSize: number

  /**
   * 磁盘使用率
   */
  DiskUsage: number

  /**
   * 节点内存大小
   */
  MemSize: number

  /**
   * 内存使用率
   */
  MemUsage: number

  /**
   * 节点cpu个数
   */
  CpuNum: number

  /**
   * cpu使用率
   */
  CpuUsage: number

  /**
   * 可用区
   */
  Zone: string
}

/**
 * ES公网访问访问控制信息
 */
export interface EsPublicAcl {
  /**
   * 访问黑名单
   */
  BlackIpList?: Array<string>

  /**
   * 访问白名单
   */
  WhiteIpList?: Array<string>
}

/**
 * ik插件词典信息
 */
export interface DictInfo {
  /**
   * 词典键值
   */
  Key: string

  /**
   * 词典名称
   */
  Name: string

  /**
   * 词典大小，单位B
   */
  Size: number
}

/**
 * RestartInstance返回参数结构体
 */
export interface RestartInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartKibana请求参数结构体
 */
export interface RestartKibanaRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogs请求参数结构体
 */
export interface DescribeInstanceLogsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string

  /**
      * 日志类型，默认值为1
<li>1, 主日志</li>
<li>2, 搜索慢日志</li>
<li>3, 索引慢日志</li>
<li>4, GC日志</li>
      */
  LogType?: number

  /**
   * 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等
   */
  SearchKey?: string

  /**
   * 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  StartTime?: string

  /**
   * 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  EndTime?: string

  /**
   * 分页起始值, 默认值为0
   */
  Offset?: number

  /**
   * 分页大小，默认值为100，最大值100
   */
  Limit?: number

  /**
      * 时间排序方式，默认值为0
<li>0, 降序</li>
<li>1, 升序</li>
      */
  OrderByType?: number
}

/**
 * UpdateDictionaries请求参数结构体
 */
export interface UpdateDictionariesRequest {
  /**
   * ES实例ID
   */
  InstanceId: string

  /**
   * IK分词主词典COS地址
   */
  IkMainDicts?: Array<string>

  /**
   * IK分词停用词词典COS地址
   */
  IkStopwords?: Array<string>

  /**
   * 同义词词典COS地址
   */
  Synonym?: Array<string>

  /**
   * QQ分词词典COS地址
   */
  QQDict?: Array<string>

  /**
   * 0：安装；1：删除
   */
  UpdateType?: number

  /**
   * 是否强制重启集群
   */
  ForceRestart?: boolean
}

/**
 * UpdateRequestTargetNodeTypes请求参数结构体
 */
export interface UpdateRequestTargetNodeTypesRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 接收请求的目标节点类型列表
   */
  TargetNodeTypes: Array<string>
}

/**
 * 节点维度视图数据
 */
export interface NodeView {
  /**
   * 节点ID
   */
  NodeId: string

  /**
   * 节点IP
   */
  NodeIp: string

  /**
   * 节点是否可见
   */
  Visible: number

  /**
   * 是否熔断
   */
  Break: number

  /**
   * 节点总磁盘大小
   */
  DiskSize: number

  /**
   * 磁盘使用率
   */
  DiskUsage: number

  /**
   * 节点内存大小，单位GB
   */
  MemSize: number

  /**
   * 内存使用率
   */
  MemUsage: number

  /**
   * 节点cpu个数
   */
  CpuNum: number

  /**
   * cpu使用率
   */
  CpuUsage: number

  /**
   * 可用区
   */
  Zone: string

  /**
   * 节点角色
   */
  NodeRole: string

  /**
   * 节点HTTP IP
   */
  NodeHttpIp: string

  /**
   * JVM内存使用率
   */
  JvmMemUsage: number

  /**
   * 节点分片数
   */
  ShardNum: number

  /**
   * 节点上磁盘ID列表
   */
  DiskIds: Array<string>

  /**
   * 是否为隐藏可用区
   */
  Hidden: boolean
}

/**
 * ES cos自动备份信息
 */
export interface CosBackup {
  /**
   * 是否开启cos自动备份
   */
  IsAutoBackup: boolean

  /**
   * 自动备份执行时间（精确到小时）, e.g. "22:00"
   */
  BackupTime: string
}

/**
 * 实例标签信息
 */
export interface TagInfo {
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
 * OperationDetail使用此结构的数组描述新旧配置
 */
export interface KeyValue {
  /**
   * 键
   */
  Key: string

  /**
   * 值
   */
  Value: string
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 可用区
   */
  Zone: string

  /**
   * 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"、"7.10.1"）
   */
  EsVersion: string

  /**
   * 私有网络ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
   * 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
   */
  Password: string

  /**
   * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
   */
  InstanceName?: string

  /**
      * 已废弃请使用NodeInfoList
节点数量（2-50个）
      */
  NodeNum?: number

  /**
   * 计费类型<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li>默认值POSTPAID_BY_HOUR
   */
  ChargeType?: string

  /**
   * 包年包月购买时长（单位由参数TimeUnit决定）
   */
  ChargePeriod?: number

  /**
   * 自动续费标识<li>RENEW_FLAG_AUTO：自动续费</li><li>RENEW_FLAG_MANUAL：不自动续费，用户手动续费</li>ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费
   */
  RenewFlag?: string

  /**
      * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
      */
  NodeType?: string

  /**
      * 已废弃请使用NodeInfoList
节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
      */
  DiskType?: string

  /**
      * 已废弃请使用NodeInfoList
节点磁盘容量（单位GB）
      */
  DiskSize?: number

  /**
   * 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”）
   */
  TimeUnit?: string

  /**
   * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表（目前仅支持指定一张代金券）
   */
  VoucherIds?: Array<string>

  /**
      * 已废弃请使用NodeInfoList
是否创建专用主节点<li>true：开启专用主节点</li><li>false：不开启专用主节点</li>默认值false
      */
  EnableDedicatedMaster?: boolean

  /**
      * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传）
      */
  MasterNodeNum?: number

  /**
      * 已废弃请使用NodeInfoList
专用主节点类型（EnableDedicatedMaster为true时必传）<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
      */
  MasterNodeType?: string

  /**
      * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义）
      */
  MasterNodeDiskSize?: number

  /**
   * 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义）
   */
  ClusterNameInConf?: string

  /**
   * 集群部署方式<li>0：单可用区部署</li><li>1：多可用区部署</li>默认为0
   */
  DeployMode?: number

  /**
   * 多可用区部署时可用区的详细信息(DeployMode为1时必传)
   */
  MultiZoneInfo?: Array<ZoneDetail>

  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType?: string

  /**
   * 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等
   */
  NodeInfoList?: Array<NodeInfo>

  /**
   * 节点标签信息列表
   */
  TagList?: Array<TagInfo>

  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
   */
  BasicSecurityType?: number

  /**
   * 场景化模板类型 0：不启用 1：通用 2：日志 3：搜索
   */
  SceneType?: number

  /**
   * 可视化节点配置
   */
  WebNodeTypeInfo?: WebNodeTypeInfo

  /**
   * 创建https集群，默认是http
   */
  Protocol?: string
}

/**
 * UpdateDictionaries返回参数结构体
 */
export interface UpdateDictionariesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详细信息
 */
export interface InstanceInfo {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 地域
   */
  Region: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 用户ID
   */
  AppId: number

  /**
   * 用户UIN
   */
  Uin: string

  /**
   * 实例所属VPC的UID
   */
  VpcUid: string

  /**
   * 实例所属子网的UID
   */
  SubnetUid: string

  /**
   * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
   */
  Status: number

  /**
   * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
   */
  ChargeType: string

  /**
   * 包年包月购买时长,单位:月
   */
  ChargePeriod: number

  /**
   * 自动续费标识。取值范围：  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag: string

  /**
   * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType: string

  /**
   * 节点个数
   */
  NodeNum: number

  /**
   * 节点CPU核数
   */
  CpuNum: number

  /**
   * 节点内存大小，单位GB
   */
  MemSize: number

  /**
   * 节点磁盘类型
   */
  DiskType: string

  /**
   * 节点磁盘大小，单位GB
   */
  DiskSize: number

  /**
   * ES域名
   */
  EsDomain: string

  /**
   * ES VIP
   */
  EsVip: string

  /**
   * ES端口
   */
  EsPort: number

  /**
   * Kibana访问url
   */
  KibanaUrl: string

  /**
   * ES版本号
   */
  EsVersion: string

  /**
   * ES配置项
   */
  EsConfig: string

  /**
   * Kibana访问控制配置
   */
  EsAcl: EsAcl

  /**
   * 实例创建时间
   */
  CreateTime: string

  /**
   * 实例最后修改操作时间
   */
  UpdateTime: string

  /**
   * 实例到期时间
   */
  Deadline: string

  /**
   * 实例类型（实例类型标识，当前只有1,2两种）
   */
  InstanceType: number

  /**
   * Ik分词器配置
   */
  IkConfig: EsDictionaryInfo

  /**
   * 专用主节点配置
   */
  MasterNodeInfo: MasterNodeInfo

  /**
   * cos自动备份配置
   */
  CosBackup: CosBackup

  /**
   * 是否允许cos自动备份
   */
  AllowCosBackup: boolean

  /**
   * 实例拥有的标签列表
   */
  TagList: Array<TagInfo>

  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType: string

  /**
      * 是否为冷热集群<li>true: 冷热集群</li><li>false: 非冷热集群</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableHotWarmMode: boolean

  /**
      * 温节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmNodeType: string

  /**
      * 温节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmNodeNum: number

  /**
      * 温节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmCpuNum: number

  /**
      * 温节点内存内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmMemSize: number

  /**
      * 温节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmDiskType: string

  /**
      * 温节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  WarmDiskSize: number

  /**
      * 集群节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeInfoList: Array<NodeInfo>

  /**
      * Es公网地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsPublicUrl: string

  /**
      * 多可用区网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MultiZoneInfo: Array<ZoneDetail>

  /**
      * 部署模式<li>0：单可用区</li><li>1：多可用区</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployMode: number

  /**
      * ES公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicAccess: string

  /**
   * ES公网访问控制配置
   */
  EsPublicAcl: EsAcl

  /**
      * Kibana内网地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanaPrivateUrl: string

  /**
      * Kibana公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanaPublicAccess: string

  /**
      * Kibana内网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanaPrivateAccess: string

  /**
      * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityType: number

  /**
      * 场景化模板类型：0、不开启；1、通用场景；2、日志场景；3、搜索场景
注意：此字段可能返回 null，表示取不到有效值。
      */
  SceneType: number

  /**
      * Kibana配置项
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanaConfig: string

  /**
      * Kibana节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanaNodeInfo: KibanaNodeInfo

  /**
      * 可视化节点配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebNodeTypeInfo: WebNodeTypeInfo

  /**
      * JDK类型，oracle或kona
注意：此字段可能返回 null，表示取不到有效值。
      */
  Jdk: string

  /**
      * 集群网络通讯协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 安全组id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityGroups: Array<string>

  /**
      * 冷节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdNodeType: string

  /**
      * 冷节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdNodeNum: number

  /**
      * 冷节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdCpuNum: number

  /**
      * 冷节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdMemSize: number

  /**
      * 冷节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdDiskType: string

  /**
      * 冷节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColdDiskSize: number

  /**
      * 冻节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenNodeType: string

  /**
      * 冻节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenNodeNum: number

  /**
      * 冻节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenCpuNum: number

  /**
      * 冻节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenMemSize: number

  /**
      * 冻节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenDiskType: string

  /**
      * 冻节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrozenDiskSize: number

  /**
      * 集群健康状态 -1 未知；0 Green; 1 Yellow; 2 Red
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthStatus: number

  /**
      * https集群内网url
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsPrivateUrl: string

  /**
      * https集群内网域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsPrivateDomain: string
}

/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回的实例个数
   */
  TotalCount: number

  /**
   * 实例详细信息列表
   */
  InstanceList: Array<InstanceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogs返回参数结构体
 */
export interface DescribeInstanceLogsResponse {
  /**
   * 返回的日志条数
   */
  TotalCount?: number

  /**
   * 日志详细信息列表
   */
  InstanceLogList?: Array<InstanceLog>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePlugins返回参数结构体
 */
export interface UpdatePluginsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DiagnoseInstance请求参数结构体
 */
export interface DiagnoseInstanceRequest {
  /**
   * ES实例ID
   */
  InstanceId: string

  /**
   * 需要触发的诊断项
   */
  DiagnoseJobs?: Array<string>

  /**
   * 需要诊断的索引，支持通配符
   */
  DiagnoseIndices?: string
}

/**
 * RestartInstance请求参数结构体
 */
export interface RestartInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 是否强制重启<li>true：强制重启</li><li>false：不强制重启</li>默认false
   */
  ForceRestart?: boolean

  /**
   * 重启模式：0 滚动重启； 1 全量重启
   */
  RestartMode?: number
}

/**
 * 多可用区部署时可用区的详细信息
 */
export interface ZoneDetail {
  /**
   * 可用区
   */
  Zone: string

  /**
   * 子网ID
   */
  SubnetId: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 集群实例所属可用区，不传则默认所有可用区
   */
  Zone?: string

  /**
   * 集群实例ID列表
   */
  InstanceIds?: Array<string>

  /**
   * 集群实例名称列表
   */
  InstanceNames?: Array<string>

  /**
   * 分页起始值, 默认值0
   */
  Offset?: number

  /**
   * 分页大小，默认值20
   */
  Limit?: number

  /**
   * 排序字段<li>1：实例ID</li><li>2：实例名称</li><li>3：可用区</li><li>4：创建时间</li>若orderKey未传递则按创建时间降序排序
   */
  OrderByKey?: number

  /**
   * 排序方式<li>0：升序</li><li>1：降序</li>若传递了orderByKey未传递orderByType, 则默认升序
   */
  OrderByType?: number

  /**
   * 节点标签信息列表
   */
  TagList?: Array<TagInfo>

  /**
   * 私有网络vip列表
   */
  IpList?: Array<string>

  /**
   * 可用区列表
   */
  ZoneList?: Array<string>

  /**
   * 健康状态筛列表
   */
  HealthStatus?: Array<number>
}

/**
 * UpdateDiagnoseSettings请求参数结构体
 */
export interface UpdateDiagnoseSettingsRequest {
  /**
   * ES实例ID
   */
  InstanceId: string

  /**
   * 0：开启智能运维；-1：关闭智能运维
   */
  Status?: number

  /**
   * 智能运维每天定时巡检时间
   */
  CronTime?: string
}

/**
 * UpdateInstance请求参数结构体
 */
export interface UpdateInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
   */
  InstanceName?: string

  /**
      * 已废弃请使用NodeInfoList
节点个数（2-50个）
      */
  NodeNum?: number

  /**
   * ES配置项（JSON格式字符串）
   */
  EsConfig?: string

  /**
   * 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
   */
  Password?: string

  /**
   * 访问控制列表
   */
  EsAcl?: EsAcl

  /**
      * 已废弃请使用NodeInfoList
磁盘大小（单位GB）
      */
  DiskSize?: number

  /**
      * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
      */
  NodeType?: string

  /**
      * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个或5个）
      */
  MasterNodeNum?: number

  /**
      * 已废弃请使用NodeInfoList
专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
      */
  MasterNodeType?: string

  /**
      * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义）
      */
  MasterNodeDiskSize?: number

  /**
   * 更新配置时是否强制重启<li>true强制重启</li><li>false不强制重启</li>当前仅更新EsConfig时需要设置，默认值为false
   */
  ForceRestart?: boolean

  /**
   * COS自动备份信息
   */
  CosBackup?: CosBackup

  /**
   * 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括<li>修改一种节点的个数</li><li>修改一种节点的节点规格及磁盘大小</li><li>增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）</li>上述操作一次只能进行一种，且磁盘类型不支持修改
   */
  NodeInfoList?: Array<NodeInfo>

  /**
   * 公网访问状态
   */
  PublicAccess?: string

  /**
   * 公网访问控制列表
   */
  EsPublicAcl?: EsPublicAcl

  /**
   * Kibana公网访问状态
   */
  KibanaPublicAccess?: string

  /**
   * Kibana内网访问状态
   */
  KibanaPrivateAccess?: string

  /**
   * ES 6.8及以上版本基础版开启或关闭用户认证
   */
  BasicSecurityType?: number

  /**
   * Kibana内网端口
   */
  KibanaPrivatePort?: number

  /**
   * 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启
   */
  ScaleType?: number

  /**
   * 多可用区部署
   */
  MultiZoneInfo?: Array<ZoneDetail>

  /**
   * 场景化模板类型 -1：不启用 1：通用 2：日志 3：搜索
   */
  SceneType?: number

  /**
   * Kibana配置项（JSON格式字符串）
   */
  KibanaConfig?: string

  /**
   * 可视化节点配置
   */
  WebNodeTypeInfo?: WebNodeTypeInfo

  /**
   * 切换到新网络架构
   */
  SwitchPrivateLink?: string

  /**
   * 启用Cerebro
   */
  EnableCerebro?: boolean

  /**
   * Cerebro公网访问状态
   */
  CerebroPublicAccess?: string

  /**
   * Cerebro内网访问状态
   */
  CerebroPrivateAccess?: string
}

/**
 * ES 词库信息
 */
export interface EsDictionaryInfo {
  /**
   * 启用词词典列表
   */
  MainDict: Array<DictInfo>

  /**
   * 停用词词典列表
   */
  Stopwords: Array<DictInfo>

  /**
   * QQ分词词典列表
   */
  QQDict: Array<DictInfo>

  /**
   * 同义词词典列表
   */
  Synonym: Array<DictInfo>

  /**
   * 更新词典类型
   */
  UpdateType: string
}

/**
 * DescribeInstanceOperations返回参数结构体
 */
export interface DescribeInstanceOperationsResponse {
  /**
   * 操作记录总数
   */
  TotalCount?: number

  /**
   * 操作记录
   */
  Operations?: Array<Operation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartNodes请求参数结构体
 */
export interface RestartNodesRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string

  /**
   * 节点名称列表
   */
  NodeNames: Array<string>

  /**
   * 是否强制重启
   */
  ForceRestart?: boolean
}

/**
 * UpdatePlugins请求参数结构体
 */
export interface UpdatePluginsRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 需要安装的插件名列表
   */
  InstallPluginList?: Array<string>

  /**
   * 需要卸载的插件名列表
   */
  RemovePluginList?: Array<string>

  /**
   * 是否强制重启
   */
  ForceRestart?: boolean

  /**
   * 是否重新安装
   */
  ForceUpdate?: boolean

  /**
   * 0：系统插件
   */
  PluginType?: number
}

/**
 * UpdateRequestTargetNodeTypes返回参数结构体
 */
export interface UpdateRequestTargetNodeTypesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例Kibana节点相关信息
 */
export interface KibanaNodeInfo {
  /**
   * Kibana节点规格
   */
  KibanaNodeType: string

  /**
   * Kibana节点个数
   */
  KibanaNodeNum: number

  /**
   * Kibana节点CPU数
   */
  KibanaNodeCpuNum: number

  /**
   * Kibana节点内存GB
   */
  KibanaNodeMemSize: number

  /**
   * Kibana节点磁盘类型
   */
  KibanaNodeDiskType: string

  /**
   * Kibana节点磁盘大小
   */
  KibanaNodeDiskSize: number
}

/**
 * UpdateDiagnoseSettings返回参数结构体
 */
export interface UpdateDiagnoseSettingsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeLicense返回参数结构体
 */
export interface UpgradeLicenseResponse {
  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ES集群配置项
 */
export interface EsAcl {
  /**
   * kibana访问黑名单
   */
  BlackIpList?: Array<string>

  /**
   * kibana访问白名单
   */
  WhiteIpList?: Array<string>
}

/**
 * 实例专用主节点相关信息
 */
export interface MasterNodeInfo {
  /**
   * 是否启用了专用主节点
   */
  EnableDedicatedMaster: boolean

  /**
   * 专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  MasterNodeType: string

  /**
   * 专用主节点个数
   */
  MasterNodeNum: number

  /**
   * 专用主节点CPU核数
   */
  MasterNodeCpuNum: number

  /**
   * 专用主节点内存大小，单位GB
   */
  MasterNodeMemSize: number

  /**
   * 专用主节点磁盘大小，单位GB
   */
  MasterNodeDiskSize: number

  /**
   * 专用主节点磁盘类型
   */
  MasterNodeDiskType: string
}

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项）
 */
export interface SubTaskDetail {
  /**
   * 子任务名
   */
  Name: string

  /**
   * 子任务结果
   */
  Result: boolean

  /**
   * 子任务错误信息
   */
  ErrMsg: string

  /**
   * 子任务类型
   */
  Type: string

  /**
   * 子任务状态，0处理中 1成功 -1失败
   */
  Status: number

  /**
   * 升级检查失败的索引名
   */
  FailedIndices: Array<string>

  /**
   * 子任务结束时间
   */
  FinishTime: string

  /**
   * 子任务等级，1警告 2失败
   */
  Level: number
}

/**
 * UpdateJdk返回参数结构体
 */
export interface UpdateJdkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartNodes返回参数结构体
 */
export interface RestartNodesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群维度视图数据
 */
export interface ClusterView {
  /**
   * 集群健康状态
   */
  Health?: number

  /**
   * 集群是否可见
   */
  Visible: number

  /**
   * 集群是否熔断
   */
  Break: number

  /**
   * 平均磁盘使用率
   */
  AvgDiskUsage: number

  /**
   * 平均内存使用率
   */
  AvgMemUsage: number

  /**
   * 平均cpu使用率
   */
  AvgCpuUsage: number

  /**
   * 集群总存储大小
   */
  TotalDiskSize: number

  /**
   * 客户端请求节点
   */
  TargetNodeTypes: Array<string>

  /**
   * 在线节点数
   */
  NodeNum: number

  /**
   * 总节点数
   */
  TotalNodeNum: number

  /**
   * 数据节点数
   */
  DataNodeNum: number

  /**
   * 索引数
   */
  IndexNum: number

  /**
   * 文档数
   */
  DocNum: number

  /**
   * 磁盘已使用字节数
   */
  DiskUsedInBytes: number

  /**
   * 分片个数
   */
  ShardNum: number

  /**
   * 主分片个数
   */
  PrimaryShardNum: number

  /**
   * 迁移中的分片个数
   */
  RelocatingShardNum: number

  /**
   * 初始化中的分片个数
   */
  InitializingShardNum: number

  /**
   * 未分配的分片个数
   */
  UnassignedShardNum: number

  /**
   * 企业版COS存储容量大小，单位GB
   */
  TotalCosStorage: number

  /**
      * 企业版集群可搜索快照cos存放的bucket名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SearchableSnapshotCosBucket: string

  /**
      * 企业版集群可搜索快照cos所属appid
注意：此字段可能返回 null，表示取不到有效值。
      */
  SearchableSnapshotCosAppId: string
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
   * 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1"
   */
  EsVersion: string

  /**
   * 是否只做升级检查，默认值为false
   */
  CheckOnly?: boolean

  /**
   * 目标商业特性版本：<li>oss 开源版</li><li>basic 基础版</li>当前仅在5.6.4升级6.x版本时使用，默认值为basic
   */
  LicenseType?: string

  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
   */
  BasicSecurityType?: number

  /**
   * 升级方式：<li>scale 蓝绿变更</li><li>restart 滚动重启</li>默认值为scale
   */
  UpgradeMode?: string

  /**
   * 升级版本前是否对集群进行备份，默认不备份
   */
  CosBackup?: boolean
}

/**
 * DescribeViews返回参数结构体
 */
export interface DescribeViewsResponse {
  /**
      * 集群维度视图
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterView: ClusterView

  /**
      * 节点维度视图
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodesView: Array<NodeView>

  /**
      * Kibana维度视图
注意：此字段可能返回 null，表示取不到有效值。
      */
  KibanasView: Array<KibanaView>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeViews请求参数结构体
 */
export interface DescribeViewsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * GetRequestTargetNodeTypes返回参数结构体
 */
export interface GetRequestTargetNodeTypesResponse {
  /**
   * 接收请求的目标节点类型列表
   */
  TargetNodeTypes?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartKibana返回参数结构体
 */
export interface RestartKibanaResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ES集群操作详细信息
 */
export interface Operation {
  /**
   * 操作唯一id
   */
  Id: number

  /**
   * 操作开始时间
   */
  StartTime: string

  /**
   * 操作类型
   */
  Type: string

  /**
   * 操作详情
   */
  Detail: OperationDetail

  /**
   * 操作结果
   */
  Result: string

  /**
   * 流程任务信息
   */
  Tasks: Array<TaskDetail>

  /**
   * 操作进度
   */
  Progress: number
}

/**
 * UpgradeLicense请求参数结构体
 */
export interface UpgradeLicenseRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType: string

  /**
   * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表（目前仅支持指定一张代金券）
   */
  VoucherIds?: Array<string>

  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
   */
  BasicSecurityType?: number

  /**
   * 是否强制重启<li>true强制重启</li><li>false不强制重启</li> 默认值false
   */
  ForceRestart?: boolean
}
