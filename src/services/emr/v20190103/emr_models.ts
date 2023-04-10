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
 * 集群配置。
 */
export interface ClusterSetting {
  /**
      * 付费方式。
PREPAID 包年包月。
POSTPAID_BY_HOUR 按量计费，默认方式。
      */
  InstanceChargeType: string

  /**
   * 是否为HA集群。
   */
  SupportHA: boolean

  /**
   * 集群所使用的安全组，目前仅支持一个。
   */
  SecurityGroupIds: Array<string>

  /**
   * 实例位置。
   */
  Placement: Placement

  /**
   * 实例所在VPC。
   */
  VPCSettings: VPCSettings

  /**
   * 实例登录配置。
   */
  LoginSettings: LoginSettings

  /**
   * 实例标签，示例：["{\"TagKey\":\"test-tag1\",\"TagValue\":\"001\"}","{\"TagKey\":\"test-tag2\",\"TagValue\":\"002\"}"]。
   */
  TagSpecification: Array<string>

  /**
   * 元数据库配置。
   */
  MetaDB: MetaDbInfo

  /**
   * 实例硬件配置。
   */
  ResourceSpec: JobFlowResourceSpec

  /**
   * 是否申请公网IP，默认为false。
   */
  PublicIpAssigned?: boolean

  /**
   * 包年包月配置，只对包年包月集群生效。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
   * 集群置放群组。
   */
  DisasterRecoverGroupIds?: string

  /**
   * 是否使用cbs加密。
   */
  CbsEncryptFlag?: boolean

  /**
   * 是否使用远程登录，默认为false。
   */
  RemoteTcpDefaultPort?: boolean
}

/**
 * Pod相关信息
 */
export interface PodSpecInfo {
  /**
   * 使用Pod资源扩容时，指定的Pod规格以及来源等信息
   */
  PodSpec?: PodNewSpec

  /**
   * POD自定义权限和自定义参数
   */
  PodParameter?: PodNewParameter
}

/**
 * Pod资源售卖规格
 */
export interface PodSaleSpec {
  /**
   * 可售卖的资源规格，仅为以下值:"TASK","CORE","MASTER","ROUTER"。
   */
  NodeType: string

  /**
   * Cpu核数。
   */
  Cpu: number

  /**
   * 内存数量，单位为GB。
   */
  Memory: number

  /**
   * 该规格资源可申请的最大数量。
   */
  Number: number
}

/**
 * ScaleOutInstance返回参数结构体
 */
export interface ScaleOutInstanceResponse {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
      * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>

  /**
      * 客户端Token。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientToken: string

  /**
      * 扩容流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number

  /**
      * 大订单号。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Pod的存储设备描述信息。
 */
export interface PodVolume {
  /**
      * 存储类型，可为"pvc"，"hostpath"。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VolumeType: string

  /**
      * 当VolumeType为"pvc"时，该字段生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PVCVolume?: PersistentVolumeContext

  /**
      * 当VolumeType为"hostpath"时，该字段生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostVolume?: HostVolumeContext
}

/**
 * SyncPodState返回参数结构体
 */
export interface SyncPodStateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateTasks请求参数结构体
 */
export interface TerminateTasksRequest {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 待销毁节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
   */
  ResourceIds: Array<string>
}

/**
 * Pod HostPath挂载方式描述
 */
export interface HostVolumeContext {
  /**
      * Pod挂载宿主机的目录。资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  VolumePath: string
}

/**
 * ScaleOutCluster请求参数结构体
 */
export interface ScaleOutClusterRequest {
  /**
      * 节点计费模式。取值范围：
<li>PREPAID：预付费，即包年包月。</li>
<li>POSTPAID_BY_HOUR：按小时后付费。</li>
<li>SPOTPAID：竞价付费（仅支持TASK节点）。</li>
      */
  InstanceChargeType: string

  /**
   * 集群实例ID。
   */
  InstanceId: string

  /**
   * 扩容节点类型以及数量
   */
  ScaleOutNodeConfig: ScaleOutNodeConfig

  /**
   * 唯一随机标识，时效5分钟，需要调用者指定 防止客户端重新创建资源，例如 a9a90aa6-751a-41b6-aad6-fae36063280
   */
  ClientToken?: string

  /**
   * 即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
   * [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。
   */
  ScriptBootstrapActionConfig?: Array<ScriptBootstrapActionConfig>

  /**
   * 扩容部署服务，新增节点将默认继承当前节点类型中所部署服务，部署服务含默认可选服务，该参数仅支持可选服务填写，如：存量task节点已部署HDFS、YARN、impala；使用api扩容task节不部署impala时，此参数仅填写HDFS、YARN
   */
  SoftDeployInfo?: Array<number>

  /**
   * 部署进程，默认部署扩容服务的全部进程，支持修改部署进程，如：当前task节点部署服务为：HDFS、YARN、impala，默认部署服务为：DataNode,NodeManager,ImpalaServer，若用户需修改部署进程信息，此参数信息可填写：	DataNode,NodeManager,ImpalaServerCoordinator或DataNode,NodeManager,ImpalaServerExecutor
   */
  ServiceNodeInfo?: Array<number>

  /**
      * 分散置放群组ID列表，当前只支持指定一个。
该参数可以通过调用 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810)的返回值中的DisasterRecoverGroupId字段来获取。
      */
  DisasterRecoverGroupIds?: Array<string>

  /**
   * 扩容节点绑定标签列表。
   */
  Tags?: Array<Tag>

  /**
   * 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群或EKS集群提供的资源
   */
  HardwareSourceType?: string

  /**
   * Pod相关资源信息
   */
  PodSpecInfo?: PodSpecInfo

  /**
   * 使用clickhouse集群扩容时，选择的机器分组名称
   */
  ClickHouseClusterName?: string

  /**
   * 使用clickhouse集群扩容时，选择的机器分组类型。new为新增，old为选择旧分组
   */
  ClickHouseClusterType?: string

  /**
   * 扩容指定 Yarn Node Label
   */
  YarnNodeLabel?: string

  /**
      * 扩容后是否启动服务，默认取值否
<li>true：是</li>
<li>false：否</li>
      */
  EnableStartServiceFlag?: boolean

  /**
   * 规格设置
   */
  ResourceSpec?: NodeResourceSpec

  /**
   * 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用[DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
   */
  Zone?: string

  /**
   * 子网，默认是集群创建时的子网
   */
  SubnetId?: string
}

/**
 * 节点磁盘信息
 */
export interface DiskSpecInfo {
  /**
      * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 系统盘类型 取值范围：
<li>CLOUD_SSD：表示云SSD。</li>
<li>CLOUD_PREMIUM：表示高效云盘。</li>
<li>CLOUD_BASIC：表示云硬盘。</li>
<li>LOCAL_BASIC：表示本地盘。</li>
<li>LOCAL_SSD：表示本地SSD。</li>

数据盘类型 取值范围：
<li>CLOUD_SSD：表示云SSD。</li>
<li>CLOUD_PREMIUM：表示高效云盘。</li>
<li>CLOUD_BASIC：表示云硬盘。</li>
<li>LOCAL_BASIC：表示本地盘。</li>
<li>LOCAL_SSD：表示本地SSD。</li>
<li>CLOUD_HSSD：表示增强型SSD云硬盘。</li>
<li>CLOUD_THROUGHPUT：表示吞吐型云硬盘。</li>
<li>CLOUD_TSSD：表示极速型SSD云硬盘。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 数据容量，单位为GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize: number
}

/**
 * 执行步骤
 */
export interface Step {
  /**
   * 执行步骤名称。
   */
  Name: string

  /**
   * 执行动作。
   */
  ExecutionStep: Execution

  /**
      * 执行失败策略。
1. TERMINATE_CLUSTER 执行失败时退出并销毁集群。
2. CONTINUE 执行失败时跳过并执行后续步骤。
      */
  ActionOnFailure: string

  /**
   * 指定执行Step时的用户名，非必须，默认为hadoop。
   */
  User?: string
}

/**
 * DescribeEmrApplicationStatics请求参数结构体
 */
export interface DescribeEmrApplicationStaticsRequest {
  /**
   * 集群id
   */
  InstanceId: string

  /**
   * 起始时间，时间戳（秒）
   */
  StartTime?: number

  /**
   * 结束时间，时间戳（秒）
   */
  EndTime?: number

  /**
   * 过滤的队列名
   */
  Queues?: Array<string>

  /**
   * 过滤的用户名
   */
  Users?: Array<string>

  /**
   * 过滤的作业类型
   */
  ApplicationTypes?: Array<string>

  /**
   * 分组字段，可选：queue, user, applicationType
   */
  GroupBy?: Array<string>

  /**
   * 排序字段，可选：sumMemorySeconds, sumVCoreSeconds, sumHDFSBytesWritten, sumHDFSBytesRead
   */
  OrderBy?: string

  /**
   * 是否顺序排序，0-逆序，1-正序
   */
  IsAsc?: number

  /**
   * 页号
   */
  Offset?: number

  /**
   * 页容量
   */
  Limit?: number
}

/**
 * 用户管理列表过滤器
 */
export interface UserManagerFilter {
  /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string
}

/**
 * 元数据库信息
 */
export interface MetaDbInfo {
  /**
   * 元数据类型。
   */
  MetaType: string

  /**
   * 统一元数据库实例ID。
   */
  UnifyMetaInstanceId: string

  /**
   * 自建元数据库信息。
   */
  MetaDBInfo: CustomMetaInfo
}

/**
 * 磁盘描述。
 */
export interface DiskSpec {
  /**
      * 磁盘类型。
LOCAL_BASIC  本地盘。
CLOUD_BASIC 云硬盘。
LOCAL_SSD 本地SSD。
CLOUD_SSD 云SSD。
CLOUD_PREMIUM 高效云盘。
CLOUD_HSSD 增强型云SSD。
      */
  DiskType: string

  /**
   * 磁盘大小，单位GB。
   */
  DiskSize: number
}

/**
 * COS 相关配置
 */
export interface COSSettings {
  /**
   * COS SecretId
   */
  CosSecretId: string

  /**
   * COS SecrectKey
   */
  CosSecretKey: string

  /**
   * 日志存储在COS上的路径
   */
  LogOnCosPath?: string
}

/**
 * 集群实例信息
 */
export interface ClusterInstancesInfo {
  /**
      * ID号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: number

  /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 标题
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ftitle: string

  /**
      * 集群名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterName: string

  /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: number

  /**
      * 地区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: number

  /**
      * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: number

  /**
      * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uin: string

  /**
      * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: number

  /**
      * 集群VPCID
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: number

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: number

  /**
      * 实例的状态码。取值范围：
<li>2：表示集群运行中。</li>
<li>3：表示集群创建中。</li>
<li>4：表示集群扩容中。</li>
<li>5：表示集群增加router节点中。</li>
<li>6：表示集群安装组件中。</li>
<li>7：表示集群执行命令中。</li>
<li>8：表示重启服务中。</li>
<li>9：表示进入维护中。</li>
<li>10：表示服务暂停中。</li>
<li>11：表示退出维护中。</li>
<li>12：表示退出暂停中。</li>
<li>13：表示配置下发中。</li>
<li>14：表示销毁集群中。</li>
<li>15：表示销毁core节点中。</li>
<li>16：销毁task节点中。</li>
<li>17：表示销毁router节点中。</li>
<li>18：表示更改webproxy密码中。</li>
<li>19：表示集群隔离中。</li>
<li>20：表示集群冲正中。</li>
<li>21：表示集群回收中。</li>
<li>22：表示变配等待中。</li>
<li>23：表示集群已隔离。</li>
<li>24：表示缩容节点中。</li>
<li>33：表示集群等待退费中。</li>
<li>34：表示集群已退费。</li>
<li>301：表示创建失败。</li>
<li>302：表示扩容失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 添加时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddTime: string

  /**
      * 已经运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunTime: string

  /**
      * 集群产品配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config: EmrProductConfigOutter

  /**
      * 主节点外网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterIp: string

  /**
      * EMR版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  EmrVersion: string

  /**
      * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChargeType: number

  /**
      * 交易版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeVersion: number

  /**
      * 资源订单ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceOrderId: number

  /**
      * 是否计费集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsTradeCluster: number

  /**
      * 集群错误状态告警信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmInfo: string

  /**
      * 是否采用新架构
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsWoodpeckerCluster: number

  /**
      * 元数据库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetaDb: string

  /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * Hive元数据信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  HiveMetaDb: string

  /**
      * 集群类型:EMR,CLICKHOUSE,DRUID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceClass: string

  /**
      * 集群所有节点的别名序列化
注意：此字段可能返回 null，表示取不到有效值。
      */
  AliasInfo: string

  /**
      * 集群版本Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: number

  /**
      * 地区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 场景名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SceneName: string

  /**
      * 场景化集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  SceneServiceClass: string

  /**
      * 场景化EMR版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  SceneEmrVersion: string

  /**
      * 场景化集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * vpc name
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcName: string

  /**
      * subnet name
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName: string

  /**
      * 集群依赖关系
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterExternalServiceInfo: Array<ClusterExternalServiceInfo>

  /**
      * 集群vpcid 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId: string

  /**
      * 子网id 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqSubnetId: string

  /**
      * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopologyInfoList: Array<TopologyInfo>

  /**
      * 是否是跨AZ集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsMultiZoneCluster: boolean

  /**
      * 是否开通异常节点自动补偿
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsCvmReplace: boolean
}

/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
  /**
      * 扩容的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
      */
  TimeUnit: string

  /**
      * 扩容的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
      */
  TimeSpan: number

  /**
   * 实例ID。
   */
  InstanceId: string

  /**
      * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
      */
  PayMode: number

  /**
   * 客户端Token。
   */
  ClientToken?: string

  /**
   * 引导操作脚本设置。
   */
  PreExecutedFileSettings?: Array<PreExecuteFileSettings>

  /**
   * 扩容的Task节点数量。
   */
  TaskCount?: number

  /**
   * 扩容的Core节点数量。
   */
  CoreCount?: number

  /**
   * 扩容时不需要安装的进程。
   */
  UnNecessaryNodeList?: Array<number>

  /**
   * 扩容的Router节点数量。
   */
  RouterCount?: number

  /**
      * 部署的服务。
<li>SoftDeployInfo和ServiceNodeInfo是同组参数，和UnNecessaryNodeList参数互斥。</li>
<li>建议使用SoftDeployInfo和ServiceNodeInfo组合。</li>
      */
  SoftDeployInfo?: Array<number>

  /**
   * 启动的进程。
   */
  ServiceNodeInfo?: Array<number>

  /**
   * 分散置放群组ID列表，当前仅支持指定一个。
   */
  DisasterRecoverGroupIds?: Array<string>

  /**
   * 扩容节点绑定标签列表。
   */
  Tags?: Array<Tag>

  /**
   * 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群或EKS集群提供的资源
   */
  HardwareResourceType?: string

  /**
   * 使用Pod资源扩容时，指定的Pod规格以及来源等信息
   */
  PodSpec?: PodSpec

  /**
   * 使用clickhouse集群扩容时，选择的机器分组名称
   */
  ClickHouseClusterName?: string

  /**
   * 使用clickhouse集群扩容时，选择的机器分组类型。new为新增，old为选择旧分组
   */
  ClickHouseClusterType?: string

  /**
   * 规则扩容指定 yarn node label
   */
  YarnNodeLabel?: string

  /**
   * POD自定义权限和自定义参数
   */
  PodParameter?: PodParameter

  /**
      * 扩容的Master节点的数量。
使用clickhouse集群扩容时，该参数不生效。
使用kafka集群扩容时，该参数不生效。
当HardwareResourceType=POD时，该参数不生效。
      */
  MasterCount?: number

  /**
   * 扩容后是否启动服务，true：启动，false：不启动
   */
  StartServiceAfterScaleOut?: string

  /**
   * 可用区，默认是集群的主可用区
   */
  ZoneId?: number

  /**
   * 子网，默认是集群创建时的子网
   */
  SubnetId?: string

  /**
   * 预设配置组
   */
  ScaleOutServiceConfAssign?: string

  /**
   * 0表示关闭自动续费，1表示开启自动续费
   */
  AutoRenew?: number
}

/**
 * 用于创建集群价格清单 不同可用区下价格详情
 */
export interface ZoneDetailPriceResult {
  /**
      * 可用区Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
   * 不同节点的价格详情
   */
  NodeDetailPrice: Array<NodeDetailPriceResult>
}

/**
 * 扩容容器资源时的资源描述
 */
export interface PodNewSpec {
  /**
   * 外部资源提供者的标识符，例如"cls-a1cd23fa"。
   */
  ResourceProviderIdentifier: string

  /**
   * 外部资源提供者类型，例如"tke",当前仅支持"tke"。
   */
  ResourceProviderType: string

  /**
   * 资源的用途，即节点类型，当前仅支持"TASK"。
   */
  NodeFlag: string

  /**
   * CPU核数。
   */
  Cpu: number

  /**
   * 内存大小，单位为GB。
   */
  Memory: number

  /**
   * Eks集群-CPU类型，当前支持"intel"和"amd"
   */
  CpuType?: string

  /**
   * Pod节点数据目录挂载信息。
   */
  PodVolumes?: Array<PodVolume>

  /**
      * 是否浮动规格，默认否
<li>true：代表是</li>
<li>false：代表否</li>
      */
  EnableDynamicSpecFlag?: boolean

  /**
      * 浮动规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DynamicPodSpec?: DynamicPodSpec

  /**
      * 代表vpc网络唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 代表vpc子网唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId?: string

  /**
      * pod name
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodName?: string
}

/**
 * 资源详情
 */
export interface NodeResourceSpec {
  /**
      * 规格类型，如S2.MEDIUM8
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 系统盘，系统盘个数不超过1块
注意：此字段可能返回 null，表示取不到有效值。
      */
  SystemDisk: Array<DiskSpecInfo>

  /**
      * 需要绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<Tag>

  /**
      * 云数据盘，云数据盘总个数不超过15块
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataDisk?: Array<DiskSpecInfo>

  /**
      * 本地数据盘
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalDataDisk?: Array<DiskSpecInfo>
}

/**
 * ModifyResourceScheduleConfig返回参数结构体
 */
export interface ModifyResourceScheduleConfigResponse {
  /**
   * true为草稿，表示还没有刷新资源池
   */
  IsDraft: boolean

  /**
      * 校验错误信息，如果不为空，则说明校验失败，配置没有成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMsg: string

  /**
      * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群节点拓扑信息
 */
export interface TopologyInfo {
  /**
      * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId?: number

  /**
      * 可用区信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone?: string

  /**
      * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetInfoList?: Array<SubnetInfo>

  /**
      * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeInfoList?: Array<ShortNodeInfo>
}

/**
 * 用于创建集群价格清单 节点价格详情
 */
export interface NodeDetailPriceResult {
  /**
      * 节点类型 master core task common router mysql
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeType: string

  /**
   * 节点组成部分价格详情
   */
  PartDetailPrice: Array<PartDetailPriceItem>
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey?: string

  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * 集群列表返回示例
 */
export interface EmrListInstance {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
      * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusDesc: string

  /**
   * 集群名字
   */
  ClusterName: string

  /**
   * 集群地域
   */
  ZoneId: number

  /**
   * 用户APPID
   */
  AppId: number

  /**
   * 创建时间
   */
  AddTime: string

  /**
   * 运行时间
   */
  RunTime: string

  /**
   * 集群IP
   */
  MasterIp: string

  /**
   * 集群版本
   */
  EmrVersion: string

  /**
   * 集群计费类型
   */
  ChargeType: number

  /**
   * emr ID
   */
  Id: number

  /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: number

  /**
      * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: number

  /**
      * 区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: number

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: number

  /**
      * 网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: number

  /**
      * 地区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 实例标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 告警信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmInfo: string

  /**
      * 是否是woodpecker集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsWoodpeckerCluster: number

  /**
      * Vpc中文
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcName: string

  /**
      * 子网中文
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName: string

  /**
      * 字符串VpcId
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId: string

  /**
      * 字符串子网
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqSubnetId: string

  /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterClass: string

  /**
      * 是否为跨AZ集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsMultiZoneCluster: boolean

  /**
      * 是否手戳集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsHandsCluster: boolean

  /**
      * 体外客户端组件信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutSideSoftInfo: Array<SoftDependInfo>

  /**
      * 当前集群的应用场景是否支持体外客户端
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsSupportOutsideCluster?: boolean
}

/**
 * AddUsersForUserManager返回参数结构体
 */
export interface AddUsersForUserManagerResponse {
  /**
      * 添加成功的用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessUserList: Array<string>

  /**
      * 添加失败的用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedUserList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EMR产品配置
 */
export interface EmrProductConfigOutter {
  /**
      * 软件信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SoftInfo: Array<string>

  /**
      * Master节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterNodeSize: number

  /**
      * Core节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoreNodeSize: number

  /**
      * Task节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskNodeSize: number

  /**
      * Common节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComNodeSize: number

  /**
      * Master节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterResource: OutterResource

  /**
      * Core节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoreResource: OutterResource

  /**
      * Task节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskResource: OutterResource

  /**
      * Common节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComResource: OutterResource

  /**
      * 是否使用COS
注意：此字段可能返回 null，表示取不到有效值。
      */
  OnCos: boolean

  /**
      * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChargeType: number

  /**
      * Router节点个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouterNodeSize: number

  /**
      * 是否支持HA
注意：此字段可能返回 null，表示取不到有效值。
      */
  SupportHA: boolean

  /**
      * 是否支持安全模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityOn: boolean

  /**
      * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityGroup: string

  /**
      * 是否开启Cbs加密
注意：此字段可能返回 null，表示取不到有效值。
      */
  CbsEncrypt: number

  /**
      * 自定义应用角色。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationRole: string

  /**
      * 安全组
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityGroups: Array<string>

  /**
      * SSH密钥Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicKeyId: string
}

/**
 * VPC 参数
 */
export interface VPCSettings {
  /**
   * VPC ID
   */
  VpcId: string

  /**
   * Subnet ID
   */
  SubnetId: string
}

/**
 * DescribeInstancesList返回参数结构体
 */
export interface DescribeInstancesListResponse {
  /**
   * 符合条件的实例总数。
   */
  TotalCnt: number

  /**
   * 集群实例列表
   */
  InstancesList: Array<EmrListInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceRenewNodes请求参数结构体
 */
export interface DescribeInstanceRenewNodesRequest {
  /**
   * 集群实例ID,实例ID形如: emr-xxxxxxxx
   */
  InstanceId: string
}

/**
 * 任务步骤结果描述
 */
export interface JobResult {
  /**
      * 任务步骤名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 任务步骤失败时的处理策略，可以为以下值：
"CONTINUE"，跳过当前失败步骤，继续后续步骤。
“TERMINATE_CLUSTER”，终止当前及后续步骤，并销毁集群。
“CANCEL_AND_WAIT”，取消当前步骤并阻塞等待处理。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionOnFailure: string

  /**
      * 当前步骤的状态，可以为以下值：
“JobFlowStepStatusInit”，初始化状态，等待执行。
“JobFlowStepStatusRunning”，任务步骤正在执行。
“JobFlowStepStatusFailed”，任务步骤执行失败。
“JobFlowStepStatusSucceed”，任务步骤执行成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobState: string

  /**
      * YARN任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationId?: string
}

/**
 * 用于创建集群价格清单-节点组成部分价格
 */
export interface PartDetailPriceItem {
  /**
      * 类型包括：节点->node、系统盘->rootDisk、云数据盘->dataDisk、metaDB
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 单价（原价）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Price: number

  /**
      * 单价（折扣价）
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealCost: number

  /**
      * 总价（折扣价）
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTotalCost: number

  /**
      * 折扣
注意：此字段可能返回 null，表示取不到有效值。
      */
  Policy: number

  /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: number
}

/**
 * 共用组件信息
 */
export interface DependService {
  /**
   * 共用组件名
   */
  ServiceName: string

  /**
   * 共用组件集群
   */
  InstanceId: string
}

/**
 * 扩容容器资源时的资源描述
 */
export interface PodSpec {
  /**
   * 外部资源提供者的标识符，例如"cls-a1cd23fa"。
   */
  ResourceProviderIdentifier: string

  /**
   * 外部资源提供者类型，例如"tke",当前仅支持"tke"。
   */
  ResourceProviderType: string

  /**
   * 资源的用途，即节点类型，当前仅支持"TASK"。
   */
  NodeType: string

  /**
   * CPU核数。
   */
  Cpu: number

  /**
   * 内存大小，单位为GB。
   */
  Memory: number

  /**
   * 资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用。弃用
   */
  DataVolumes?: Array<string>

  /**
   * Eks集群-CPU类型，当前支持"intel"和"amd"
   */
  CpuType?: string

  /**
   * Pod节点数据目录挂载信息。
   */
  PodVolumes?: Array<PodVolume>

  /**
   * 是否浮动规格，1是，0否
   */
  IsDynamicSpec?: number

  /**
      * 浮动规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DynamicPodSpec?: DynamicPodSpec

  /**
      * 代表vpc网络唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 代表vpc子网唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId?: string

  /**
      * pod name
注意：此字段可能返回 null，表示取不到有效值。
      */
  PodName?: string
}

/**
 * InquiryPriceRenewInstance返回参数结构体
 */
export interface InquiryPriceRenewInstanceResponse {
  /**
      * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: number

  /**
      * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: number

  /**
      * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 实例续费的时长。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJobFlow请求参数结构体
 */
export interface DescribeJobFlowRequest {
  /**
   * 流程任务Id，RunJobFlow接口返回的值。
   */
  JobFlowId: number
}

/**
 * InquiryPriceCreateInstance返回参数结构体
 */
export interface InquiryPriceCreateInstanceResponse {
  /**
      * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: number

  /**
      * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: number

  /**
      * 购买实例的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 购买实例的时长。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
      * 价格清单
注意：此字段可能返回 null，表示取不到有效值。
      */
  PriceList: Array<ZoneDetailPriceResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartStopServiceOrMonitor请求参数结构体
 */
export interface StartStopServiceOrMonitorRequest {
  /**
   * 集群ID
   */
  InstanceId: string

  /**
      * 操作类型，当前支持
<li>StartService：启动服务</li>
<li>StopService：停止服务</li>
<li>StartMonitor：退出维护</li>
<li>StopMonitor：进入维护</li>

      */
  OpType: string

  /**
   * 操作范围
   */
  OpScope: OpScope
}

/**
 * TerminateInstance请求参数结构体
 */
export interface TerminateInstanceRequest {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 销毁节点ID。该参数为预留参数，用户无需配置。
   */
  ResourceIds?: Array<string>
}

/**
 * 流程作业资源描述
 */
export interface JobFlowResourceSpec {
  /**
   * 主节点数量。
   */
  MasterCount: number

  /**
   * 主节点配置。
   */
  MasterResourceSpec: JobFlowResource

  /**
   * Core节点数量
   */
  CoreCount: number

  /**
   * Core节点配置。
   */
  CoreResourceSpec: JobFlowResource

  /**
   * Task节点数量。
   */
  TaskCount?: number

  /**
   * Common节点数量。
   */
  CommonCount?: number

  /**
   * Task节点配置。
   */
  TaskResourceSpec?: JobFlowResource

  /**
   * Common节点配置。
   */
  CommonResourceSpec?: JobFlowResource
}

/**
 * 自定义配置参数
 */
export interface Configuration {
  /**
   * 配置文件名，支持SPARK、HIVE、HDFS、YARN的部分配置文件自定义。
   */
  Classification: string

  /**
   * 配置参数通过KV的形式传入，部分文件支持自定义，可以通过特殊的键"content"传入所有内容。
   */
  Properties: string
}

/**
 * DescribeResourceSchedule请求参数结构体
 */
export interface DescribeResourceScheduleRequest {
  /**
   * emr集群的英文id
   */
  InstanceId: string
}

/**
 * 描述集群实例位置信息
 */
export interface Placement {
  /**
   * 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用[DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
   */
  Zone: string

  /**
   * 实例所属项目ID。该参数可以通过调用[DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。
   */
  ProjectId?: number
}

/**
 * 获取CVM配额
 */
export interface QuotaEntity {
  /**
      * 已使用配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsedQuota: number

  /**
      * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainingQuota: number

  /**
      * 总配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalQuota: number

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string
}

/**
 * POD自定义权限和自定义参数
 */
export interface PodParameter {
  /**
   * TKE或EKS集群ID
   */
  ClusterId: string

  /**
      * 自定义权限
如：
{
  "apiVersion": "v1",
  "clusters": [
    {
      "cluster": {
        "certificate-authority-data": "xxxxxx==",
        "server": "https://xxxxx.com"
      },
      "name": "cls-xxxxx"
    }
  ],
  "contexts": [
    {
      "context": {
        "cluster": "cls-xxxxx",
        "user": "100014xxxxx"
      },
      "name": "cls-a44yhcxxxxxxxxxx"
    }
  ],
  "current-context": "cls-a4xxxx-context-default",
  "kind": "Config",
  "preferences": {},
  "users": [
    {
      "name": "100014xxxxx",
      "user": {
        "client-certificate-data": "xxxxxx",
        "client-key-data": "xxxxxx"
      }
    }
  ]
}
      */
  Config: string

  /**
      * 自定义参数
如：
{
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "name": "test-deployment",
      "labels": {
        "app": "test"
      }
    },
    "spec": {
      "replicas": 3,
      "selector": {
        "matchLabels": {
          "app": "test-app"
        }
      },
      "template": {
        "metadata": {
          "annotations": {
            "your-organization.com/department-v1": "test-example-v1",
            "your-organization.com/department-v2": "test-example-v2"
          },
          "labels": {
            "app": "test-app",
            "environment": "production"
          }
        },
        "spec": {
          "nodeSelector": {
            "your-organization/node-test": "test-node"
          },
          "containers": [
            {
              "name": "nginx",
              "image": "nginx:1.14.2",
              "ports": [
                {
                  "containerPort": 80
                }
              ]
            }
          ],
          "affinity": {
            "nodeAffinity": {
              "requiredDuringSchedulingIgnoredDuringExecution": {
                "nodeSelectorTerms": [
                  {
                    "matchExpressions": [
                      {
                        "key": "disk-type",
                        "operator": "In",
                        "values": [
                          "ssd",
                          "sas"
                        ]
                      },
                      {
                        "key": "cpu-num",
                        "operator": "Gt",
                        "values": [
                          "6"
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
      */
  Parameter: string
}

/**
 * 资源描述
 */
export interface AllNodeResourceSpec {
  /**
      * 描述Master节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterResourceSpec?: NodeResourceSpec

  /**
      * 描述Core节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoreResourceSpec?: NodeResourceSpec

  /**
      * 描述Taskr节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskResourceSpec?: NodeResourceSpec

  /**
      * 描述Common节点资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  CommonResourceSpec?: NodeResourceSpec

  /**
      * Master节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterCount?: number

  /**
      * Corer节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoreCount?: number

  /**
      * Task节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskCount?: number

  /**
      * Common节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  CommonCount?: number
}

/**
 * DescribeUsersForUserManager请求参数结构体
 */
export interface DescribeUsersForUserManagerRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string

  /**
   * 页码
   */
  PageNo: number

  /**
   * 分页的大小
   */
  PageSize: number

  /**
   * 查询用户列表过滤器
   */
  UserManagerFilter?: UserManagerFilter

  /**
   * 是否需要keytab文件的信息，仅对开启kerberos的集群有效，默认为false
   */
  NeedKeytabInfo?: boolean
}

/**
 * 集群续费实例信息
 */
export interface RenewInstancesInfo {
  /**
   * 节点资源ID
   */
  EmrResourceId: string

  /**
      * 节点类型。0:common节点；1:master节点
；2:core节点；3:task节点
      */
  Flag: number

  /**
   * 内网IP
   */
  Ip: string

  /**
   * 节点内存描述
   */
  MemDesc: string

  /**
   * 节点核数
   */
  CpuNum: number

  /**
   * 硬盘大小
   */
  DiskSize: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 节点规格
   */
  Spec: string

  /**
   * 磁盘类型
   */
  StorageType: number
}

/**
 * RunJobFlow返回参数结构体
 */
export interface RunJobFlowResponse {
  /**
   * 作业流程ID。
   */
  JobFlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartStopServiceOrMonitor返回参数结构体
 */
export interface StartStopServiceOrMonitorResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多云盘参数
 */
export interface MultiDisk {
  /**
      * 云盘类型
<li>CLOUD_SSD：表示云SSD。</li>
<li>CLOUD_PREMIUM：表示高效云盘。</li>
<li>CLOUD_HSSD：表示增强型SSD云硬盘。</li>
      */
  DiskType?: string

  /**
   * 云盘大小
   */
  Volume?: number

  /**
   * 该类型云盘个数
   */
  Count?: number
}

/**
 * POD自定义权限和自定义参数
 */
export interface PodNewParameter {
  /**
   * TKE或EKS集群ID
   */
  InstanceId: string

  /**
      * 自定义权限
如：
{
  "apiVersion": "v1",
  "clusters": [
    {
      "cluster": {
        "certificate-authority-data": "xxxxxx==",
        "server": "https://xxxxx.com"
      },
      "name": "cls-xxxxx"
    }
  ],
  "contexts": [
    {
      "context": {
        "cluster": "cls-xxxxx",
        "user": "100014xxxxx"
      },
      "name": "cls-a44yhcxxxxxxxxxx"
    }
  ],
  "current-context": "cls-a4xxxx-context-default",
  "kind": "Config",
  "preferences": {},
  "users": [
    {
      "name": "100014xxxxx",
      "user": {
        "client-certificate-data": "xxxxxx",
        "client-key-data": "xxxxxx"
      }
    }
  ]
}
      */
  Config: string

  /**
      * 自定义参数
如：
{
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "name": "test-deployment",
      "labels": {
        "app": "test"
      }
    },
    "spec": {
      "replicas": 3,
      "selector": {
        "matchLabels": {
          "app": "test-app"
        }
      },
      "template": {
        "metadata": {
          "annotations": {
            "your-organization.com/department-v1": "test-example-v1",
            "your-organization.com/department-v2": "test-example-v2"
          },
          "labels": {
            "app": "test-app",
            "environment": "production"
          }
        },
        "spec": {
          "nodeSelector": {
            "your-organization/node-test": "test-node"
          },
          "containers": [
            {
              "name": "nginx",
              "image": "nginx:1.14.2",
              "ports": [
                {
                  "containerPort": 80
                }
              ]
            }
          ],
          "affinity": {
            "nodeAffinity": {
              "requiredDuringSchedulingIgnoredDuringExecution": {
                "nodeSelectorTerms": [
                  {
                    "matchExpressions": [
                      {
                        "key": "disk-type",
                        "operator": "In",
                        "values": [
                          "ssd",
                          "sas"
                        ]
                      },
                      {
                        "key": "cpu-num",
                        "operator": "Gt",
                        "values": [
                          "6"
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
      */
  Parameter: string
}

/**
 * 搜索字段
 */
export interface SearchItem {
  /**
   * 支持搜索的类型
   */
  SearchType: string

  /**
   * 支持搜索的值
   */
  SearchValue: string
}

/**
 * 各个可用区的参数信息
 */
export interface MultiZoneSetting {
  /**
      * "master"、"standby"、"third-party"
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneTag?: string

  /**
   * 无
   */
  VPCSettings?: VPCSettings

  /**
   * 无
   */
  Placement?: Placement

  /**
   * 无
   */
  ResourceSpec?: NewResourceSpec
}

/**
 * TerminateInstance返回参数结构体
 */
export interface TerminateInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceUpdateInstance返回参数结构体
 */
export interface InquiryPriceUpdateInstanceResponse {
  /**
      * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: number

  /**
      * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: number

  /**
      * 变配的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 变配的时长。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
      * 价格详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  PriceDetail: Array<PriceDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源描述
 */
export interface NewResourceSpec {
  /**
   * 描述Master节点资源
   */
  MasterResourceSpec?: Resource

  /**
   * 描述Core节点资源
   */
  CoreResourceSpec?: Resource

  /**
   * 描述Task节点资源
   */
  TaskResourceSpec?: Resource

  /**
   * Master节点数量
   */
  MasterCount?: number

  /**
   * Core节点数量
   */
  CoreCount?: number

  /**
   * Task节点数量
   */
  TaskCount?: number

  /**
   * 描述Common节点资源
   */
  CommonResourceSpec?: Resource

  /**
   * Common节点数量
   */
  CommonCount?: number
}

/**
 * Pod PVC存储方式描述
 */
export interface PersistentVolumeContext {
  /**
      * 磁盘大小，单位为GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize?: number

  /**
      * 磁盘类型。CLOUD_PREMIUM;CLOUD_SSD
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType?: string

  /**
      * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskNum?: number
}

/**
 * 扩容节点类型以及数量
 */
export interface ScaleOutNodeConfig {
  /**
      * 扩容节点类型取值范围：
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
      */
  NodeFlag: string

  /**
   * 扩容节点数量
   */
  NodeCount: number
}

/**
 * DeleteUserManagerUserList请求参数结构体
 */
export interface DeleteUserManagerUserListRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string

  /**
   * 集群用户名列表
   */
  UserNameList: Array<string>
}

/**
 * DescribeResourceSchedule返回参数结构体
 */
export interface DescribeResourceScheduleResponse {
  /**
   * 资源调度功能是否开启
   */
  OpenSwitch: boolean

  /**
   * 正在使用的资源调度器
   */
  Scheduler: string

  /**
   * 公平调度器的信息
   */
  FSInfo: string

  /**
   * 容量调度器的信息
   */
  CSInfo: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateClusterNodes返回参数结构体
 */
export interface TerminateClusterNodesResponse {
  /**
   * 缩容流程ID。
   */
  FlowId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourceScheduler请求参数结构体
 */
export interface ModifyResourceSchedulerRequest {
  /**
   * emr集群的英文id
   */
  InstanceId: string

  /**
   * 老的调度器:fair
   */
  OldValue: string

  /**
   * 新的调度器:capacity
   */
  NewValue: string
}

/**
 * 登录设置
 */
export interface LoginSettings {
  /**
   * 实例登录密码，8-16个字符，包含大写字母、小写字母、数字和特殊字符四种，特殊符号仅支持!@%^*，密码第一位不能为特殊字符
   */
  Password?: string

  /**
   * 密钥ID。关联密钥后，就可以通过对应的私钥来访问实例；PublicKeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取
   */
  PublicKeyId?: string
}

/**
 * RunJobFlow请求参数结构体
 */
export interface RunJobFlowRequest {
  /**
   * 作业名称。
   */
  Name: string

  /**
      * 是否新创建集群。
true，新创建集群，则使用Instance中的参数进行集群创建。
false，使用已有集群，则通过InstanceId传入。
      */
  CreateCluster: boolean

  /**
   * 作业流程执行步骤。
   */
  Steps: Array<Step>

  /**
      * 作业流程正常完成时，集群的处理方式，可选择:
Terminate 销毁集群。
Reserve 保留集群。
      */
  InstancePolicy: string

  /**
   * 只有CreateCluster为true时生效，目前只支持EMR版本，例如EMR-2.2.0，不支持ClickHouse和Druid版本。
   */
  ProductVersion?: string

  /**
      * 只在CreateCluster为true时生效。
true 表示安装kerberos，false表示不安装kerberos。
      */
  SecurityClusterFlag?: boolean

  /**
      * 只在CreateCluster为true时生效。
新建集群时，要安装的软件列表。
      */
  Software?: Array<string>

  /**
   * 引导脚本。
   */
  BootstrapActions?: Array<BootstrapAction>

  /**
   * 指定配置创建集群。
   */
  Configurations?: Array<Configuration>

  /**
   * 作业日志保存地址。
   */
  LogUri?: string

  /**
   * 只在CreateCluster为false时生效。
   */
  InstanceId?: string

  /**
   * 自定义应用角色，大数据应用访问外部服务时使用的角色，默认为"EME_QCSRole"。
   */
  ApplicationRole?: string

  /**
   * 重入标签，用来可重入检查，防止在一段时间内，创建相同的流程作业。
   */
  ClientToken?: string

  /**
   * 只在CreateCluster为true时生效，使用该配置创建集群。
   */
  Instance?: ClusterSetting
}

/**
 * 询价资源
 */
export interface PriceResource {
  /**
      * 需要的规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Spec: string

  /**
      * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType: number

  /**
      * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootSize: number

  /**
      * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize: number

  /**
      * 核心数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu: number

  /**
      * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize: number

  /**
      * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  MultiDisks: Array<MultiDisk>

  /**
      * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskCnt: number

  /**
      * 规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskNum: number

  /**
      * 本地盘的数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalDiskNum: number
}

/**
 * 共用自建组件参数
 */
export interface CustomServiceDefine {
  /**
   * 自定义参数key
   */
  Name?: string

  /**
   * 自定义参数value
   */
  Value?: string
}

/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子网信息
 */
export interface SubnetInfo {
  /**
      * 子网信息（名字）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName?: string

  /**
      * 子网信息（ID）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId?: string
}

/**
 * DescribeCvmQuota返回参数结构体
 */
export interface DescribeCvmQuotaResponse {
  /**
      * 后付费配额列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostPaidQuotaSet: Array<QuotaEntity>

  /**
      * 竞价实例配额列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpotPaidQuotaSet: Array<QuotaEntity>

  /**
      * eks配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  EksQuotaSet: Array<PodSaleSpec>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * EMR产品版本名称如EMR-V2.3.0 表示2.3.0版本的EMR， 当前支持产品版本名称查询：[产品版本名称](https://cloud.tencent.com/document/product/589/66338)
   */
  ProductVersion: string

  /**
      * 是否开启节点高可用。取值范围：
<li>true：表示开启节点高可用。</li>
<li>false：表示不开启节点高可用。</li>
      */
  EnableSupportHAFlag: boolean

  /**
      * 实例名称。
<li>长度限制为6-36个字符。</li>
<li>只允许包含中文、字母、数字、-、_。</li>
      */
  InstanceName: string

  /**
      * 实例计费模式。取值范围：
<li>PREPAID：预付费，即包年包月。</li>
<li>POSTPAID_BY_HOUR：按小时后付费。</li>
      */
  InstanceChargeType: string

  /**
      * 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。
<li>设置密钥时，密码仅用于组件原生WebUI快捷入口登录。</li>
<li>未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。</li>
      */
  LoginSettings: LoginSettings

  /**
   * 集群应用场景以及支持部署组件配置
   */
  SceneSoftwareConfig: SceneSoftwareConfig

  /**
   * 即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
   * 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。
   */
  SecurityGroupIds?: Array<string>

  /**
   * [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。
   */
  ScriptBootstrapActionConfig?: Array<ScriptBootstrapActionConfig>

  /**
   * 唯一随机标识，时效性为5分钟，需要调用者指定 防止客户端重复创建资源，例如 a9a90aa6-751a-41b6-aad6-fae360632808
   */
  ClientToken?: string

  /**
      * 是否开启集群Master节点公网。取值范围：
<li>NEED_MASTER_WAN：表示开启集群Master节点公网。</li>
<li>NOT_NEED_MASTER_WAN：表示不开启。</li>默认开启集群Master节点公网。
      */
  NeedMasterWan?: string

  /**
      * 是否开启外网远程登录。（在SecurityGroupId不为空时，该参数无效）不填默认为不开启 取值范围：
<li>true：表示开启</li>
<li>false：表示不开启</li>
      */
  EnableRemoteLoginFlag?: boolean

  /**
      * 是否开启Kerberos认证。默认不开启 取值范围：
<li>true：表示开启</li>
<li>false：表示不开启</li>
      */
  EnableKerberosFlag?: boolean

  /**
   * [自定义软件配置](https://cloud.tencent.com/document/product/589/35655?from_cn_redirect=1)
   */
  CustomConf?: string

  /**
   * 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。
   */
  Tags?: Array<Tag>

  /**
      * 分散置放群组ID列表，当前只支持指定一个。
该参数可以通过调用 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810)的返回值中的DisasterRecoverGroupId字段来获取。
      */
  DisasterRecoverGroupIds?: Array<string>

  /**
      * 是否开启集群维度CBS加密。默认不加密 取值范围：
<li>true：表示加密</li>
<li>false：表示不加密</li>
      */
  EnableCbsEncryptFlag?: boolean

  /**
      * MetaDB信息，当MetaType选择EMR_NEW_META时，MetaDataJdbcUrl MetaDataUser MetaDataPass UnifyMetaInstanceId不用填
当MetaType选择EMR_EXIT_META时，填写UnifyMetaInstanceId
当MetaType选择USER_CUSTOM_META时，填写MetaDataJdbcUrl MetaDataUser MetaDataPass
      */
  MetaDBInfo?: CustomMetaDBInfo

  /**
   * 共享组件信息
   */
  DependService?: Array<DependService>

  /**
   * 节点资源的规格，有几个可用区，就填几个，按顺序第一个为主可用区，第二个为备可用区，第三个为仲裁可用区。如果没有开启跨AZ，则长度为1即可。
   */
  ZoneResourceConfiguration?: Array<ZoneResourceConfiguration>
}

/**
 * 引导脚本
 */
export interface BootstrapAction {
  /**
   * 脚本位置，支持cos上的文件，且只支持https协议。
   */
  Path: string

  /**
      * 执行时间。
resourceAfter 表示在机器资源申请成功后执行。
clusterBefore 表示在集群初始化前执行。
clusterAfter 表示在集群初始化后执行。
      */
  WhenRun: string

  /**
   * 脚本参数
   */
  Args?: Array<string>
}

/**
 * DescribeCvmQuota请求参数结构体
 */
export interface DescribeCvmQuotaRequest {
  /**
   * EMR集群ID
   */
  ClusterId: string

  /**
   * 区ID
   */
  ZoneId?: number
}

/**
 * DescribeClusterNodes请求参数结构体
 */
export interface DescribeClusterNodesRequest {
  /**
   * 集群实例ID,实例ID形如: emr-xxxxxxxx
   */
  InstanceId: string

  /**
      * 节点标识，取值为：
<li>all：表示获取全部类型节点，cdb信息除外。</li>
<li>master：表示获取master节点信息。</li>
<li>core：表示获取core节点信息。</li>
<li>task：表示获取task节点信息。</li>
<li>common：表示获取common节点信息。</li>
<li>router：表示获取router节点信息。</li>
<li>db：表示获取正常状态的cdb信息。</li>
<li>recyle：表示获取回收站隔离中的节点信息，包括cdb信息。</li>
<li>renew：表示获取所有待续费的节点信息，包括cdb信息，自动续费节点不会返回。</li>
注意：现在只支持以上取值，输入其他值会导致错误。
      */
  NodeFlag: string

  /**
   * 页编号，默认值为0，表示第一页。
   */
  Offset?: number

  /**
   * 每页返回数量，默认值为100，最大值为100。
   */
  Limit?: number

  /**
   * 资源类型:支持all/host/pod，默认为all
   */
  HardwareResourceType?: string

  /**
   * 支持搜索的字段
   */
  SearchFields?: Array<SearchItem>

  /**
   * 无
   */
  OrderField?: string

  /**
   * 无
   */
  Asc?: number
}

/**
 * 操作的进程范围
 */
export interface ComponentBasicRestartInfo {
  /**
      * 进程名，必填，如NameNode
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComponentName?: string

  /**
      * 操作的IP列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpList?: Array<string>
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
      * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
<li>16：表示EMR-V2.3.0。</li>
<li>20：表示EMR-V2.5.0。</li>
<li>25：表示EMR-V3.1.0。</li>
<li>27：表示KAFKA-V1.0.0。</li>
<li>30：表示EMR-V2.6.0。</li>
<li>33 :   表示EMR-V3.2.1。</li>
<li>34 :   表示EMR-V3.3.0。</li>
<li>36 :   表示STARROCKS-V1.0.0。</li>
<li>37 :   表示EMR-V3.4.0。</li>
<li>38 :   表示EMR-V2.7.0。</li>
<li>39 :   表示STARROCKS-V1.1.0。</li>
<li>41 :   表示DRUID-V1.1.0。</li>
      */
  ProductId: number

  /**
      * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ；
填写实例值：hive、flink。
      */
  Software: Array<string>

  /**
      * 是否开启节点高可用。取值范围：
<li>0：表示不开启节点高可用。</li>
<li>1：表示开启节点高可用。</li>
      */
  SupportHA: number

  /**
      * 实例名称。
<li>长度限制为6-36个字符。</li>
<li>只允许包含中文、字母、数字、-、_。</li>
      */
  InstanceName: string

  /**
      * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
      */
  PayMode: number

  /**
      * 购买实例的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
      */
  TimeSpan: number

  /**
      * 购买实例的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
      */
  TimeUnit: string

  /**
      * 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。
<li>设置密钥时，密码仅用于组件原生WebUI快捷入口登录。</li>
<li>未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。</li>
      */
  LoginSettings: LoginSettings

  /**
   * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
   */
  VPCSettings?: VPCSettings

  /**
   * 节点资源的规格。
   */
  ResourceSpec?: NewResourceSpec

  /**
   * 开启COS访问需要设置的参数。
   */
  COSSettings?: COSSettings

  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement?: Placement

  /**
   * 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。
   */
  SgId?: string

  /**
   * [引导操作](https://cloud.tencent.com/document/product/589/35656)脚本设置。
   */
  PreExecutedFileSettings?: Array<PreExecuteFileSettings>

  /**
      * 包年包月实例是否自动续费。取值范围：
<li>0：表示不自动续费。</li>
<li>1：表示自动续费。</li>
      */
  AutoRenew?: number

  /**
   * 客户端Token。
   */
  ClientToken?: string

  /**
      * 是否开启集群Master节点公网。取值范围：
<li>NEED_MASTER_WAN：表示开启集群Master节点公网。</li>
<li>NOT_NEED_MASTER_WAN：表示不开启。</li>默认开启集群Master节点公网。
      */
  NeedMasterWan?: string

  /**
   * 是否需要开启外网远程登录，即22号端口。在SgId不为空时，该参数无效。
   */
  RemoteLoginAtCreate?: number

  /**
   * 是否开启安全集群。0表示不开启，非0表示开启。
   */
  CheckSecurity?: number

  /**
   * 访问外部文件系统。
   */
  ExtendFsField?: string

  /**
   * 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。
   */
  Tags?: Array<Tag>

  /**
      * 分散置放群组ID列表，当前只支持指定一个。
该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/product/213/15486 ) 的返回值中的SecurityGroupId字段来获取。
      */
  DisasterRecoverGroupIds?: Array<string>

  /**
   * 集群维度CBS加密盘，默认0表示不加密，1表示加密
   */
  CbsEncrypt?: number

  /**
      * hive共享元数据库类型。取值范围：
<li>EMR_NEW_META：表示集群默认创建</li>
<li>EMR_EXIT_META：表示集群使用指定EMR-MetaDB。</li>
<li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
      */
  MetaType?: string

  /**
   * EMR-MetaDB实例
   */
  UnifyMetaInstanceId?: string

  /**
   * 自定义MetaDB信息
   */
  MetaDBInfo?: CustomMetaInfo

  /**
   * 自定义应用角色。
   */
  ApplicationRole?: string

  /**
      * 场景化取值：
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
      */
  SceneName?: string

  /**
   * 共享组件信息
   */
  ExternalService?: Array<ExternalService>

  /**
   * 如果为0，则MultiZone、MultiDeployStrategy、MultiZoneSettings是disable的状态，如果为1，则废弃ResourceSpec，使用MultiZoneSettings。
   */
  VersionID?: number

  /**
   * true表示开启跨AZ部署；仅为新建集群时的用户参数，后续不支持调整。
   */
  MultiZone?: boolean

  /**
   * 节点资源的规格，有几个可用区，就填几个，按顺序第一个为主可用区，第二个为备可用区，第三个为仲裁可用区。如果没有开启跨AZ，则长度为1即可。
   */
  MultiZoneSettings?: Array<MultiZoneSetting>
}

/**
 * 执行动作。
 */
export interface Execution {
  /**
      * 任务类型，目前支持以下类型。
1. “MR”，将通过hadoop jar的方式提交。
2. "HIVE"，将通过hive -f的方式提交。
3. "SPARK"，将通过spark-submit的方式提交。
      */
  JobType: string

  /**
   * 任务参数，提供除提交指令以外的参数。
   */
  Args: Array<string>
}

/**
 * 变配资源规格
 */
export interface UpdateInstanceSettings {
  /**
   * 内存容量，单位为G
   */
  Memory: number

  /**
   * CPU核数
   */
  CPUCores: number

  /**
   * 机器资源ID（EMR测资源标识）
   */
  ResourceId: string

  /**
   * 变配机器规格
   */
  InstanceType?: string
}

/**
 * 添加引导操作
 */
export interface ScriptBootstrapActionConfig {
  /**
   * 脚本的cos地址，参照格式：https://beijing-111111.cos.ap-beijing.myqcloud.com/data/test.sh查询cos存储桶列表：[存储桶列表](https://console.cloud.tencent.com/cos/bucket)
   */
  CosFileURI: string

  /**
      * 引导脚步执行时机范围
<li>resourceAfter：节点初始化后</li>
<li>clusterAfter：集群启动后</li>
<li>clusterBefore：集群启动前</li>
      */
  ExecutionMoment: string

  /**
   * 执行脚本参数，参数格式请遵循标准Shell规范
   */
  Args?: Array<string>

  /**
   * 脚本文件名
   */
  CosFileName?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
      * 集群筛选策略。取值范围：
<li>clusterList：表示查询除了已销毁集群之外的集群列表。</li>
<li>monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。</li>
<li>cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。</li>
      */
  DisplayStrategy: string

  /**
   * 按照一个或者多个实例ID查询。实例ID形如: emr-xxxxxxxx 。(此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的 Ids.N 一节)。如果不填写实例ID，返回该APPID下所有实例列表。
   */
  InstanceIds?: Array<string>

  /**
   * 页编号，默认值为0，表示第一页。
   */
  Offset?: number

  /**
   * 每页返回数量，默认值为10，最大值为100。
   */
  Limit?: number

  /**
      * 建议必填-1，表示拉取所有项目下的集群。
不填默认值为0，表示拉取默认项目下的集群。
实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的 projectId 字段来获取。
      */
  ProjectId?: number

  /**
      * 排序字段。取值范围：
<li>clusterId：表示按照实例ID排序。</li>
<li>addTime：表示按照实例创建时间排序。</li>
<li>status：表示按照实例的状态码排序。</li>
      */
  OrderField?: string

  /**
      * 按照OrderField升序或者降序进行排序。取值范围：
<li>0：表示降序。</li>
<li>1：表示升序。</li>默认值为0。
      */
  Asc?: number
}

/**
 * InquiryPriceUpdateInstance请求参数结构体
 */
export interface InquiryPriceUpdateInstanceRequest {
  /**
      * 变配的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
      */
  TimeUnit: string

  /**
      * 变配的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
      */
  TimeSpan: number

  /**
   * 节点变配的目标配置。
   */
  UpdateSpec: UpdateInstanceSettings

  /**
      * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
      */
  PayMode: number

  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement: Placement

  /**
      * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
      */
  Currency?: string

  /**
   * 批量变配资源ID列表
   */
  ResourceIdList?: Array<string>
}

/**
 * TerminateClusterNodes请求参数结构体
 */
export interface TerminateClusterNodesRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 销毁资源列表
   */
  CvmInstanceIds: Array<string>

  /**
      * 销毁节点类型取值范围：
  <li>MASTER</li>
  <li>TASK</li>
  <li>CORE</li>
  <li>ROUTER</li>
      */
  NodeFlag: string

  /**
      * 优雅缩容开关
  <li>true:开启</li>
  <li>false:不开启</li>
      */
  GraceDownFlag?: boolean

  /**
   * 优雅缩容等待时间,时间范围60到1800  单位秒
   */
  GraceDownTime?: number
}

/**
 * DescribeInstancesList请求参数结构体
 */
export interface DescribeInstancesListRequest {
  /**
   * 集群筛选策略。取值范围：<li>clusterList：表示查询除了已销毁集群之外的集群列表。</li><li>monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。</li><li>cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。</li>
   */
  DisplayStrategy: string

  /**
   * 页编号，默认值为0，表示第一页。
   */
  Offset?: number

  /**
   * 每页返回数量，默认值为10，最大值为100。
   */
  Limit?: number

  /**
   * 排序字段。取值范围：<li>clusterId：表示按照实例ID排序。</li><li>addTime：表示按照实例创建时间排序。</li><li>status：表示按照实例的状态码排序。</li>
   */
  OrderField?: string

  /**
   * 按照OrderField升序或者降序进行排序。取值范围：<li>0：表示降序。</li><li>1：表示升序。</li>默认值为0。
   */
  Asc?: number

  /**
   * 自定义查询
   */
  Filters?: Array<Filters>
}

/**
 * 资源详情
 */
export interface OutterResource {
  /**
      * 规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Spec: string

  /**
      * 规格名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpecName: string

  /**
      * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType: number

  /**
      * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootSize: number

  /**
      * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize: number

  /**
      * CPU个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu: number

  /**
      * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize: number

  /**
      * 规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string
}

/**
 * 操作范围
 */
export interface OpScope {
  /**
      * 操作范围，要操作的服务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceInfoList?: Array<ServiceBasicRestartInfo>
}

/**
 * DeleteUserManagerUserList返回参数结构体
 */
export interface DeleteUserManagerUserListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourcePools返回参数结构体
 */
export interface ModifyResourcePoolsResponse {
  /**
   * false表示不是草稿，提交刷新请求成功
   */
  IsDraft: boolean

  /**
      * 扩展字段，暂时没用
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateTasks返回参数结构体
 */
export interface TerminateTasksResponse {
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
   * 符合条件的实例总数。
   */
  TotalCnt: number

  /**
      * EMR实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterList: Array<ClusterInstancesInfo>

  /**
      * 实例关联的标签键列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKeys: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsersForUserManager返回参数结构体
 */
export interface DescribeUsersForUserManagerResponse {
  /**
   * 总数
   */
  TotalCnt: number

  /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserManagerUserList: Array<UserManagerUserBriefInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewInstance请求参数结构体
 */
export interface InquiryPriceRenewInstanceRequest {
  /**
   * 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月
   */
  TimeSpan: number

  /**
   * 待续费节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
   */
  ResourceIds: Array<string>

  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement: Placement

  /**
   * 实例计费模式。此处只支持取值为1，表示包年包月。
   */
  PayMode: number

  /**
      * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
      */
  TimeUnit?: string

  /**
      * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
      */
  Currency?: string

  /**
   * 是否按量转包年包月。0：否，1：是。
   */
  ModifyPayMode?: number
}

/**
 * 出参
 */
export interface CdbInfo {
  /**
      * 数据库实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string

  /**
      * 数据库IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip: string

  /**
      * 数据库端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 数据库内存规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize: number

  /**
      * 数据库磁盘规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Volume: number

  /**
      * 服务标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  Service: string

  /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: string

  /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplyTime: string

  /**
      * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayType: number

  /**
      * 过期标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireFlag: boolean

  /**
      * 数据库状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 续费标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAutoRenew: number

  /**
      * 数据库字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  SerialNo: string

  /**
      * ZoneId
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: number

  /**
      * RegionId
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: number
}

/**
 * 价格详情
 */
export interface PriceDetail {
  /**
   * 节点ID
   */
  ResourceId: string

  /**
   * 价格计算公式
   */
  Formula: string

  /**
   * 原价
   */
  OriginalCost: number

  /**
   * 折扣价
   */
  DiscountCost: number
}

/**
 * InquirePriceRenewEmr返回参数结构体
 */
export interface InquirePriceRenewEmrResponse {
  /**
      * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: number

  /**
      * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: number

  /**
      * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 实例续费的时长。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多云盘参数
 */
export interface MultiDiskMC {
  /**
      * 该类型云盘个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: number

  /**
      * 云盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Volume?: number
}

/**
 * AddUsersForUserManager请求参数结构体
 */
export interface AddUsersForUserManagerRequest {
  /**
   * 集群字符串ID
   */
  InstanceId: string

  /**
   * 用户信息列表
   */
  UserManagerUserList: Array<UserInfoForUserManager>
}

/**
 * 可用区配置信息
 */
export interface ZoneResourceConfiguration {
  /**
      * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualPrivateCloud?: VirtualPrivateCloud

  /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Placement?: Placement

  /**
      * 所有节点资源的规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  AllNodeResourceSpec?: AllNodeResourceSpec

  /**
      * 如果是单可用区，ZoneTag可以不用填， 如果是双AZ部署，第一个可用区ZoneTag选择master，第二个可用区ZoneTag选择standby，如果是三AZ部署，第一个可用区ZoneTag选择master，第二个可用区ZoneTag选择standby，第三个可用区ZoneTag选择third-party，取值范围：
  <li>master</li>
  <li>standby</li>
  <li>third-party</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneTag?: string
}

/**
 * SyncPodState请求参数结构体
 */
export interface SyncPodStateRequest {
  /**
   * EmrService中pod状态信息
   */
  Message: PodState
}

/**
 * 用户自建Hive-MetaDB信息
 */
export interface CustomMetaInfo {
  /**
   * 自定义MetaDB的JDBC连接，请以 jdbc:mysql:// 开头
   */
  MetaDataJdbcUrl?: string

  /**
   * 自定义MetaDB用户名
   */
  MetaDataUser?: string

  /**
   * 自定义MetaDB密码
   */
  MetaDataPass?: string
}

/**
 * yarn application 统计信息
 */
export interface ApplicationStatics {
  /**
   * 队列名
   */
  Queue: string

  /**
   * 用户名
   */
  User: string

  /**
   * 作业类型
   */
  ApplicationType: string

  /**
   * SumMemorySeconds含义
   */
  SumMemorySeconds: number

  /**
   * SumVCoreSeconds含义
   */
  SumVCoreSeconds: number

  /**
   * SumHDFSBytesWritten（带单位）
   */
  SumHDFSBytesWritten: string

  /**
   * SumHDFSBytesRead（待单位）
   */
  SumHDFSBytesRead: string

  /**
   * 作业数
   */
  CountApps: number
}

/**
 * InquiryPriceCreateInstance请求参数结构体
 */
export interface InquiryPriceCreateInstanceRequest {
  /**
      * 购买实例的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
      */
  TimeUnit: string

  /**
      * 购买实例的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
      */
  TimeSpan: number

  /**
      * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
      */
  Currency: string

  /**
      * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
      */
  PayMode: number

  /**
      * 是否开启节点高可用。取值范围：
<li>0：表示不开启节点高可用。</li>
<li>1：表示开启节点高可用。</li>
      */
  SupportHA: number

  /**
      * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：
<li>ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9</li>
      */
  Software: Array<string>

  /**
   * 询价的节点规格。
   */
  ResourceSpec?: NewResourceSpec

  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement?: Placement

  /**
   * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
   */
  VPCSettings?: VPCSettings

  /**
      * hive共享元数据库类型。取值范围：
<li>EMR_NEW_META：表示集群默认创建</li>
<li>EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。</li>
<li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
      */
  MetaType?: string

  /**
   * EMR-MetaDB实例
   */
  UnifyMetaInstanceId?: string

  /**
   * 自定义MetaDB信息
   */
  MetaDBInfo?: CustomMetaInfo

  /**
      * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
<li>1：表示EMR-V1.3.1。</li>
<li>2：表示EMR-V2.0.1。</li>
<li>4：表示EMR-V2.1.0。</li>
<li>7：表示EMR-V3.0.0。</li>
      */
  ProductId?: number

  /**
      * 场景化取值：
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
      */
  SceneName?: string

  /**
   * 共用组件信息
   */
  ExternalService?: Array<ExternalService>

  /**
   * 当前默认值为0，跨AZ特性支持后为1
   */
  VersionID?: number

  /**
   * 可用区的规格信息
   */
  MultiZoneSettings?: Array<MultiZoneSetting>
}

/**
 * DescribeClusterNodes返回参数结构体
 */
export interface DescribeClusterNodesResponse {
  /**
   * 查询到的节点总数
   */
  TotalCnt: number

  /**
      * 节点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeList: Array<NodeHardwareInfo>

  /**
      * 用户所有的标签键列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKeys: Array<string>

  /**
      * 资源类型列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  HardwareResourceTypeList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourceScheduleConfig请求参数结构体
 */
export interface ModifyResourceScheduleConfigRequest {
  /**
   * emr集群的英文id
   */
  InstanceId: string

  /**
   * 业务标识，fair表示编辑公平的配置项，fairPlan表示编辑执行计划，capacity表示编辑容量的配置项
   */
  Key: string

  /**
   * 修改后的模块消息
   */
  Value: string
}

/**
 * 添加的用户信息列表
 */
export interface UserInfoForUserManager {
  /**
   * 用户名
   */
  UserName: string

  /**
   * 用户所属的组
   */
  UserGroup: string

  /**
   * 密码
   */
  PassWord: string

  /**
   * 备注
   */
  ReMark?: string
}

/**
 * POD浮动规格
 */
export interface DynamicPodSpec {
  /**
   * 需求最小cpu核数
   */
  RequestCpu?: number

  /**
   * 需求最大cpu核数
   */
  LimitCpu?: number

  /**
   * 需求最小memory，单位MB
   */
  RequestMemory?: number

  /**
   * 需求最大memory，单位MB
   */
  LimitMemory?: number
}

/**
 * 单个pod状态
 */
export interface PodState {
  /**
   * pod的名称
   */
  Name: string

  /**
   * pod uuid
   */
  Uuid: string

  /**
   * pod的状态
   */
  State: string

  /**
   * pod处于该状态原因
   */
  Reason: string

  /**
   * pod所属集群
   */
  OwnerCluster: string

  /**
   * pod内存大小
   */
  Memory: number
}

/**
 * 共用组件信息
 */
export interface ExternalService {
  /**
   * 共用组件类型，EMR/CUSTOM
   */
  ShareType: string

  /**
   * 自定义参数集合
   */
  CustomServiceDefineList: Array<CustomServiceDefine>

  /**
   * 共用组件名
   */
  Service: string

  /**
   * 共用组件集群
   */
  InstanceId: string
}

/**
 * 预执行脚本配置
 */
export interface PreExecuteFileSettings {
  /**
   * 脚本在COS上路径，已废弃
   */
  Path?: string

  /**
   * 执行脚本参数
   */
  Args?: Array<string>

  /**
   * COS的Bucket名称，已废弃
   */
  Bucket?: string

  /**
   * COS的Region名称，已废弃
   */
  Region?: string

  /**
   * COS的Domain数据，已废弃
   */
  Domain?: string

  /**
   * 执行顺序
   */
  RunOrder?: number

  /**
   * resourceAfter 或 clusterAfter
   */
  WhenRun?: string

  /**
   * 脚本文件名，已废弃
   */
  CosFileName?: string

  /**
   * 脚本的cos地址
   */
  CosFileURI?: string

  /**
   * cos的SecretId
   */
  CosSecretId?: string

  /**
   * Cos的SecretKey
   */
  CosSecretKey?: string

  /**
   * cos的appid，已废弃
   */
  AppId?: string
}

/**
 * 当前集群共用组件与集群对应关系
 */
export interface ClusterExternalServiceInfo {
  /**
      * 依赖关系，0:被其他集群依赖，1:依赖其他集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  DependType: number

  /**
      * 共用组件
注意：此字段可能返回 null，表示取不到有效值。
      */
  Service: string

  /**
      * 共用集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 共用集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterStatus: number
}

/**
 * 体外客户端组件依赖信息
 */
export interface SoftDependInfo {
  /**
   * 组件名称
   */
  SoftName: string

  /**
   * 是否必选
   */
  Required: boolean
}

/**
 * InquiryPriceScaleOutInstance请求参数结构体
 */
export interface InquiryPriceScaleOutInstanceRequest {
  /**
      * 扩容的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
      */
  TimeUnit: string

  /**
      * 扩容的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
      */
  TimeSpan: number

  /**
   * 实例所属的可用区ID，例如100003。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/213/15707) 的返回值中的ZoneId字段来获取。
   */
  ZoneId: number

  /**
      * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
      */
  PayMode: number

  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 扩容的Core节点数量。
   */
  CoreCount: number

  /**
   * 扩容的Task节点数量。
   */
  TaskCount: number

  /**
      * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
      */
  Currency: string

  /**
   * 扩容的Router节点数量。
   */
  RouterCount?: number

  /**
   * 扩容的Master节点数量。
   */
  MasterCount?: number
}

/**
 * 资源详情
 */
export interface Resource {
  /**
      * 节点规格描述，如CVM.SA2。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Spec: string

  /**
      * 存储类型
取值范围：
<li>4：表示云SSD。</li>
<li>5：表示高效云盘。</li>
<li>6：表示增强型SSD云硬盘。</li>
<li>11：表示吞吐型云硬盘。</li>
<li>12：表示极速型SSD云硬盘。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType: number

  /**
      * 磁盘类型
取值范围：
<li>CLOUD_SSD：表示云SSD。</li>
<li>CLOUD_PREMIUM：表示高效云盘。</li>
<li>CLOUD_BASIC：表示云硬盘。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 内存容量,单位为M
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize: number

  /**
      * CPU核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu: number

  /**
      * 数据盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize: number

  /**
      * 系统盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootSize?: number

  /**
      * 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks
注意：此字段可能返回 null，表示取不到有效值。
      */
  MultiDisks?: Array<MultiDisk>

  /**
      * 需要绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<Tag>

  /**
      * 规格类型，如S2.MEDIUM8
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType?: string

  /**
      * 本地盘数量，该字段已废弃
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalDiskNum?: number

  /**
      * 本地盘数量，如2
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskNum?: number
}

/**
 * Emr集群列表实例自定义查询过滤
 */
export interface Filters {
  /**
   * 字段名称
   */
  Name: string

  /**
   * 过滤字段值
   */
  Values: Array<string>
}

/**
 * DescribeEmrApplicationStatics返回参数结构体
 */
export interface DescribeEmrApplicationStaticsResponse {
  /**
   * 作业统计信息
   */
  Statics: Array<ApplicationStatics>

  /**
   * 总数
   */
  TotalCount: number

  /**
   * 可选择的队列名
   */
  Queues: Array<string>

  /**
   * 可选择的用户名
   */
  Users: Array<string>

  /**
   * 可选择的作业类型
   */
  ApplicationTypes: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewEmr请求参数结构体
 */
export interface InquirePriceRenewEmrRequest {
  /**
   * 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月
   */
  TimeSpan: number

  /**
   * 待续费集群ID列表。
   */
  InstanceId: string

  /**
   * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
   */
  Placement: Placement

  /**
   * 实例计费模式。此处只支持取值为1，表示包年包月。
   */
  PayMode: number

  /**
      * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
      */
  TimeUnit?: string

  /**
      * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
      */
  Currency?: string
}

/**
 * DescribeInstanceRenewNodes返回参数结构体
 */
export interface DescribeInstanceRenewNodesResponse {
  /**
   * 查询到的节点总数
   */
  TotalCnt: number

  /**
      * 节点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeList: Array<RenewInstancesInfo>

  /**
      * 用户所有的标签键列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetaInfo: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户Hive-MetaDB信息
 */
export interface CustomMetaDBInfo {
  /**
   * 自定义MetaDB的JDBC连接，示例: jdbc:mysql://10.10.10.10:3306/dbname
   */
  MetaDataJdbcUrl?: string

  /**
   * 自定义MetaDB用户名
   */
  MetaDataUser?: string

  /**
   * 自定义MetaDB密码
   */
  MetaDataPass?: string

  /**
      * hive共享元数据库类型。取值范围：
<li>EMR_DEFAULT_META：表示集群默认创建</li>
<li>EMR_EXIST_META：表示集群使用指定EMR-MetaDB。</li>
<li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
      */
  MetaType?: string

  /**
   * EMR-MetaDB实例
   */
  UnifyMetaInstanceId?: string
}

/**
 * 用户管理中用户的简要信息
 */
export interface UserManagerUserBriefInfo {
  /**
   * 用户名
   */
  UserName: string

  /**
   * 用户所属的组
   */
  UserGroup: string

  /**
   * Manager表示管理员、NormalUser表示普通用户
   */
  UserType: string

  /**
      * 用户创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
   * 是否可以下载用户对应的keytab文件，对开启kerberos的集群才有意义
   */
  SupportDownLoadKeyTab: boolean

  /**
      * keytab文件的下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownLoadKeyTabUrl: string
}

/**
 * 磁盘组。
 */
export interface DiskGroup {
  /**
   * 磁盘规格。
   */
  Spec: DiskSpec

  /**
   * 同类型磁盘数量。
   */
  Count: number
}

/**
 * InquiryPriceScaleOutInstance返回参数结构体
 */
export interface InquiryPriceScaleOutInstanceResponse {
  /**
      * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: string

  /**
      * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: string

  /**
      * 扩容的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 询价的节点规格。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PriceSpec: PriceResource

  /**
      * 对应入参MultipleResources中多个规格的询价结果，其它出参返回的是第一个规格的询价结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  MultipleEmrPrice: Array<EmrPrice>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourceScheduler返回参数结构体
 */
export interface ModifyResourceSchedulerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC 参数
 */
export interface VirtualPrivateCloud {
  /**
   * VPC ID
   */
  VpcId: string

  /**
   * Subnet ID
   */
  SubnetId: string
}

/**
 * 集群应用场景以及支持部署组件信息
 */
export interface SceneSoftwareConfig {
  /**
      * 部署的组件列表。不同的EMR产品版本ProductVersion 对应不同可选组件列表，不同产品版本可选组件列表查询：[组件版本](https://cloud.tencent.com/document/product/589/20279) ；
填写实例值：hive、flink。
      */
  Software: Array<string>

  /**
      * 默认Hadoop-Default,[场景查询](https://cloud.tencent.com/document/product/589/14624)场景化取值范围：
Hadoop-Kudu
Hadoop-Zookeeper
Hadoop-Presto
Hadoop-Hbase
Hadoop-Default
      */
  SceneName?: string
}

/**
 * 节点信息
 */
export interface ShortNodeInfo {
  /**
      * 节点类型，Master/Core/Task/Router/Common
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeType?: string

  /**
      * 节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeSize?: number
}

/**
 * Emr询价描述
 */
export interface EmrPrice {
  /**
      * 刊例价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: string

  /**
      * 折扣价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountCost: string

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 询价配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  PriceSpec: PriceResource

  /**
      * 是否支持竞价实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  SupportSpotPaid: boolean
}

/**
 * 节点硬件信息
 */
export interface NodeHardwareInfo {
  /**
      * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId?: number

  /**
      * 序列号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SerialNo?: string

  /**
      * 机器实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderNo?: string

  /**
      * master节点绑定外网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  WanIp?: string

  /**
      * 节点类型。0:common节点；1:master节点
；2:core节点；3:task节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  Flag?: number

  /**
      * 节点规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Spec?: string

  /**
      * 节点核数
注意：此字段可能返回 null，表示取不到有效值。
      */
  CpuNum?: number

  /**
      * 节点内存
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize?: number

  /**
      * 节点内存描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemDesc?: string

  /**
      * 节点所在region
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId?: number

  /**
      * 节点所在Zone
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId?: number

  /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplyTime?: string

  /**
      * 释放时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeTime?: string

  /**
      * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskSize?: string

  /**
      * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  NameTag?: string

  /**
      * 节点部署服务
注意：此字段可能返回 null，表示取不到有效值。
      */
  Services?: string

  /**
      * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType?: number

  /**
      * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootSize?: number

  /**
      * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChargeType?: number

  /**
      * 数据库IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  CdbIp?: string

  /**
      * 数据库端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  CdbPort?: number

  /**
      * 硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  HwDiskSize?: number

  /**
      * 硬盘容量描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  HwDiskSizeDesc?: string

  /**
      * 内存容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  HwMemSize?: number

  /**
      * 内存容量描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  HwMemSizeDesc?: string

  /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 节点资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EmrResourceId?: string

  /**
      * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAutoRenew?: number

  /**
      * 设备标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceClass?: string

  /**
      * 支持变配
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mutable?: number

  /**
      * 多云盘
注意：此字段可能返回 null，表示取不到有效值。
      */
  MCMultiDisk?: Array<MultiDiskMC>

  /**
      * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  CdbNodeInfo?: CdbInfo

  /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip?: string

  /**
      * 此节点是否可销毁，1可销毁，0不可销毁
注意：此字段可能返回 null，表示取不到有效值。
      */
  Destroyable?: number

  /**
      * 节点绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<Tag>

  /**
      * 是否是自动扩缩容节点，0为普通节点，1为自动扩缩容节点。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoFlag?: number

  /**
      * 资源类型, host/pod
注意：此字段可能返回 null，表示取不到有效值。
      */
  HardwareResourceType?: string

  /**
      * 是否浮动规格，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDynamicSpec?: number

  /**
      * 浮动规格值json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  DynamicPodSpec?: string

  /**
      * 是否支持变更计费类型 1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  SupportModifyPayMode?: number

  /**
      * 系统盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootStorageType?: number

  /**
      * 可用区信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone?: string

  /**
      * 子网
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetInfo?: SubnetInfo

  /**
      * 客户端
注意：此字段可能返回 null，表示取不到有效值。
      */
  Clients?: string

  /**
      * 系统当前时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentTime?: string

  /**
      * 是否用于联邦 ,1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsFederation?: number

  /**
      * 设备名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeviceName?: string

  /**
      * 服务
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceClient?: string

  /**
      * 该实例是否开启实例保护，true为开启 false为关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisableApiTermination?: boolean

  /**
      * 0表示老计费，1表示新计费
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeVersion?: number
}

/**
 * 操作的服务范围
 */
export interface ServiceBasicRestartInfo {
  /**
   * 服务名，必填，如HDFS
   */
  ServiceName?: string

  /**
   * 如果没传，则表示所有进程
   */
  ComponentInfoList?: Array<ComponentBasicRestartInfo>
}

/**
 * ScaleOutCluster返回参数结构体
 */
export interface ScaleOutClusterResponse {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
      * 客户端Token。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientToken: string

  /**
      * 扩容流程ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器资源描述。
 */
export interface JobFlowResource {
  /**
   * 机器类型描述。
   */
  Spec: string

  /**
   * 机器类型描述，可参考CVM的该含义。
   */
  InstanceType: string

  /**
   * 标签KV对。
   */
  Tags: Array<Tag>

  /**
   * 磁盘描述列表。
   */
  DiskGroups: Array<DiskGroup>
}

/**
 * ModifyResourcePools请求参数结构体
 */
export interface ModifyResourcePoolsRequest {
  /**
   * emr集群id
   */
  InstanceId: string

  /**
      * 取值范围：
<li>fair:代表公平调度标识</li>
<li>capacity:代表容量调度标识</li>
      */
  Key: string
}

/**
 * DescribeJobFlow返回参数结构体
 */
export interface DescribeJobFlowResponse {
  /**
      * 流程任务状态，可以为以下值：
JobFlowInit，流程任务初始化。
JobFlowResourceApplied，资源申请中，通常为JobFlow需要新建集群时的状态。
JobFlowResourceReady，执行流程任务的资源就绪。
JobFlowStepsRunning，流程任务步骤已提交。
JobFlowStepsComplete，流程任务步骤已完成。
JobFlowTerminating，流程任务所需资源销毁中。
JobFlowFinish，流程任务已完成。
      */
  State: string

  /**
   * 流程任务步骤结果。
   */
  Details: Array<JobResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例预付费参数，只有在付费类型为PREPAID时生效。

 */
export interface InstanceChargePrepaid {
  /**
      * 包年包月时间，默认为1，单位：月。
取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 24, 36, 48, 60。
      */
  Period: number

  /**
      * 是否自动续费，默认为否。
<li>true：是</li>
<li>false：否</li>
      */
  RenewFlag: boolean
}
