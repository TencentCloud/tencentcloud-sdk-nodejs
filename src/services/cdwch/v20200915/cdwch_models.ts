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
 * 事件任务
 */
export interface EventTask {
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 事件任务的id
   */
  EventTaskId?: number
  /**
   * 处理人uin
   */
  HandleUser?: string
  /**
   * 事件名称
   */
  EventCode?: string
  /**
   * CVM相关事件的维修id
   */
  RepairId?: string
  /**
   * 事件名称描述
   */
  EventNameDescribe?: string
  /**
   * 事件等级（0-低；1-中；2-高；3-严重）
   */
  EventPriority?: number
  /**
   * 事件详情
   */
  EventDetail?: string
  /**
   * 影响集群节点
   */
  IP?: string
  /**
   * 事件触发时间
   */
  CreateTime?: string
  /**
   * 事件状态(1-待处理;2-已预约;3-处理中;4-已完成;5-处理中;6-自动处理中;-1-已忽略;-2-已删除)
   */
  Status?: number
  /**
   * 是否需要授权维修：1-不需要，2-需要
   */
  NeedAuthorization?: number
  /**
   * 该事件涉及到的操作类型（OnlineMigrationForInstance-实例在线迁移,OnlineMaintenanceForInstance-实例在线维修,等）
   */
  OperationType?: Array<string>
  /**
   * 完成时间
   */
  FinishTime?: string
  /**
   * 操作指引
   */
  OperationGuide?: string
  /**
   * 资源id
   */
  ResourceId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ActionAlterCkUser请求参数结构体
 */
export interface ActionAlterCkUserRequest {
  /**
   * 用户信息
   */
  UserInfo: CkUserAlterInfo
  /**
   * api接口类型，
AddSystemUser新增用户，UpdateSystemUser，修改用户
   */
  ApiType: string
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
 * 配置文件修改信息
 */
export interface ConfigSubmitContext {
  /**
   * 配置文件名称
   */
  FileName: string
  /**
   * 配置文件旧内容，base64编码
   */
  OldConfValue: string
  /**
   * 配置文件新内容，base64编码
   */
  NewConfValue: string
  /**
   * 保存配置文件的路径
   */
  FilePath?: string
  /**
   * 节点ip信息，可选参数，当修改集群节点级配置（例如keeper_config.xml）时此参数必填；
   */
  Ip?: string
}

/**
 * KV配置
 */
export interface InstanceConfigItem {
  /**
   * <p>key</p>
   */
  ConfKey: string
  /**
   * <p>value</p>
   */
  ConfValue: string
  /**
   * <p>add/delete/update</p>
   */
  ModifyType?: string
  /**
   * <p>是否需要重启</p>
   */
  NeedRestart?: boolean
  /**
   * <p>修改前的值</p>
   */
  OriginalConfValue?: string
}

/**
 * DescribeInstancesNew返回参数结构体
 */
export interface DescribeInstancesNewResponse {
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
 * DescribeBackUpJobDetail返回参数结构体
 */
export interface DescribeBackUpJobDetailResponse {
  /**
   * 备份表详情
   */
  TableContents?: Array<BackupTableContent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverBackUpJob请求参数结构体
 */
export interface RecoverBackUpJobRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 任务id
   */
  BackUpJobId: number
}

/**
 * 磁盘规格描述
 */
export interface DiskSpec {
  /**
   * 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等
   */
  DiskType: string
  /**
   * 磁盘类型说明，例如"云SSD", "本地SSD"等
   */
  DiskDesc: string
  /**
   * 磁盘最小规格大小，单位G
   */
  MinDiskSize: number
  /**
   * 磁盘最大规格大小，单位G
   */
  MaxDiskSize: number
  /**
   * 磁盘数目
   */
  DiskCount: number
}

/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
  /**
   * 实例唯一ID
   */
  InstanceId: string
  /**
   * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
   */
  Type: string
  /**
   * 调整clickhouse节点数量
   */
  NodeCount: number
  /**
   * v_cluster分组，	
新增扩容节点将加入到已选择的v_cluster分组中，提交同步VIP生效.
   */
  ScaleOutCluster?: string
  /**
   * 子网剩余ip数量，用于判断当前实例子网剩余ip数是否能扩容。需要根据实际填写
   */
  UserSubnetIPNum?: number
  /**
   * 同步元数据节点IP （uip），扩容的时候必填
   */
  ScaleOutNodeIp?: string
  /**
   * 缩容节点shard的节点IP （uip），其中ha集群需要主副节点ip都传入以逗号分隔，缩容的时候必填
   */
  ReduceShardInfo?: Array<string>
}

/**
 * ModifyClusterConfigs请求参数结构体
 */
export interface ModifyClusterConfigsRequest {
  /**
   * 集群ID，例如cdwch-xxxx
   */
  InstanceId: string
  /**
   * 配置文件修改信息
   */
  ModifyConfContext: Array<ConfigSubmitContext>
  /**
   * 修改原因
   */
  Remark?: string
}

/**
 * DescribeInstanceShards返回参数结构体
 */
export interface DescribeInstanceShardsResponse {
  /**
   * 实例shard信息
   */
  InstanceShardsList?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBackUpData请求参数结构体
 */
export interface DeleteBackUpDataRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 任务id
   */
  BackUpJobId?: number
  /**
   * 是否删除所有数据
   */
  IsDeleteAll?: boolean
}

/**
 * 云原生实例详情
 */
export interface CnInstanceInfo {
  /**
   * ID值
   */
  ID?: number
  /**
   * cdwch-cn或者其他
   */
  InstanceType?: string
  /**
   * cdwch-cn或者其他
   */
  InstanceName?: string
  /**
   * Running
   */
  Status?: string
  /**
   * 运行中
   */
  StatusDesc?: string
  /**
   * 无
   */
  InstanceStateInfo?: InstanceStateInfo
  /**
   * -
   */
  InstanceID?: string
  /**
   * 无
   */
  Resources?: Array<CNResource>
  /**
   * desc
   */
  IsSecondaryZone?: string
  /**
   * desc
   */
  SecondaryZoneInfo?: string
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
 * ResizeDisk返回参数结构体
 */
export interface ResizeDiskResponse {
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
 * 新增或是修改ck用户
 */
export interface CkUserAlterInfo {
  /**
   * 集群实例id
   */
  InstanceId: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * base64加密后的密码
   */
  PassWord: string
  /**
   * 描述
   */
  Describe?: string
  /**
   * 账户的当前密码
   */
  OriginalPassword?: string
}

/**
 * DescribeEventTasks返回参数结构体
 */
export interface DescribeEventTasksResponse {
  /**
   * 产生的事件任务
   */
  EventTasks?: Array<EventTask>
  /**
   * 事件任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 集群角色类型，“DATA” 为数据节点、“COMMON” 为 ZooKeeper 节点，默认为 "DATA" 数据节点。
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
  /**
   * 当true的时候返回所有节点，即Limit无限大
   */
  ForceAll?: boolean
}

/**
 * ModifyUserNewPrivilege请求参数结构体
 */
export interface ModifyUserNewPrivilegeRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * cluster名称
   */
  Cluster: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * 是否所有数据库表
   */
  AllDatabase: boolean
  /**
   * 全局权限
   */
  GlobalPrivileges?: Array<string>
  /**
   * 数据库表权限
   */
  DatabasePrivilegeList?: Array<DatabasePrivilegeInfo>
}

/**
 * DescribeCkSqlApis请求参数结构体
 */
export interface DescribeCkSqlApisRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * api接口名称,GetClusters:获取集群cluster列表
GetSystemUsers:获取系统用户列表
CheckNodeCluster: 检查节点是否隶属一个cluster
GetClusterDatabases: 获取一个cluster下的数据库列表
GetClusterTables: 获取一个cluster下的数据库表列表
GetPrivilegeUsers: 获取授权的用户列表
GET_USER_CLUSTER_PRIVILEGES:获取用户cluster下的权限   
GetUserClusterNewPrivileges:获取用户cluster下的权限 (新版）
RevokeClusterUser:解绑cluster用户
DeleteSystemUser:删除系统用户 —— 必须所有cluster先解绑
GetUserOptionMessages:获取用户配置备注信息
GET_USER_CONFIGS:获取用户配置列表  QUOTA、PROFILE、POLICY
   */
  ApiType: string
  /**
   * 集群名称，当ApiType取值为GET_SYSTEM_USERS，GET_PRIVILEGE_USERS，GET_CLUSTER_DATABASES，GET_CLUSTER_TABLES 时，此参数必填
   */
  Cluster?: string
  /**
   * 用户名称，api与user相关的必填
   */
  UserName?: string
  /**
   * 账户的类型
   */
  UserType?: string
}

/**
 * clickhouse vcluster信息
 */
export interface ClusterInfo {
  /**
   * vcluster名字
   */
  ClusterName?: string
  /**
   * 当前cluster的IP列表
   */
  NodeIps?: Array<string>
}

/**
 * OpenBackUp请求参数结构体
 */
export interface OpenBackUpRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * OPEN 或者CLOSE
   */
  OperationType: string
  /**
   * 桶名字
   */
  CosBucketName: string
}

/**
 * 备份表信息
 */
export interface BackupTableContent {
  /**
   * 数据库
   */
  Database: string
  /**
   * 表
   */
  Table: string
  /**
   * 表总字节数
   */
  TotalBytes: number
  /**
   * 虚拟cluster
   */
  VCluster?: string
  /**
   * 表ip
   */
  Ips?: string
  /**
   * zk路径
   */
  ZooPath?: string
  /**
   * cvm的ip地址
   */
  Rip?: string
}

/**
 * 数据库权限信息
 */
export interface DatabasePrivilegeInfo {
  /**
   * 数据库名称
   */
  DatabaseName: string
  /**
   * 库表权限，SELECT、INSERT_ALL、ALTER、TRUNCATE、DROP_TABLE、CREATE_TABLE、DROP_DATABASE
   */
  DatabasePrivileges?: Array<string>
  /**
   * 库下面的表权限
   */
  TablePrivilegeList?: Array<TablePrivilegeInfo>
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
   * 是否高可用
   */
  HaFlag: boolean
  /**
   * 私有网络
   */
  UserVPCId: string
  /**
   * 子网
   */
  UserSubnetId: string
  /**
   * 系统版本
   */
  ProductVersion: string
  /**
   * 计费方式
   */
  ChargeProperties: Charge
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 数据节点
SpecName从DescribeSpec接口中返回的DataSpec.Name获取
   */
  DataSpec: NodeSpec
  /**
   * 标签列表（废弃）
   * @deprecated
   */
  Tags?: Tag
  /**
   * 日志主题ID
   */
  ClsLogSetId?: string
  /**
   * COS桶名称
   */
  CosBucketName?: string
  /**
   * 是否是裸盘挂载，默认值 0 为 未挂载，1 为挂载。
   */
  MountDiskType?: number
  /**
   * 是否是ZK高可用
   */
  HAZk?: boolean
  /**
   * ZK节点SpecName从DescribeSpec接口中返回的CommonSpec结构体的Name（ZK节点）获取
   */
  CommonSpec?: NodeSpec
  /**
   * 标签列表
   */
  TagItems?: Array<Tag>
  /**
   * 副可用区信息
   */
  SecondaryZoneInfo?: Array<SecondaryZoneInfo>
  /**
   * default账号登陆实例的密码。8-16个字符，至少包含大写字母、小写字母、数字和特殊字符!@#%^*中的三种，第一个字符不能为特殊字符
   */
  CkDefaultUserPwd?: string
}

/**
 * 集群分组信息描述
 */
export interface GroupInfo {
  /**
   * 分组名称
   */
  GroupName: string
  /**
   * 分片变量名称
   */
  ShardName: string
  /**
   * 副本变量名称
   */
  ReplicaName: string
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
 * CreateBackUpSchedule请求参数结构体
 */
export interface CreateBackUpScheduleRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 策略类型 meta(元数据)  data (表数据)
   */
  ScheduleType: string
  /**
   * 操作类型 create(创建) update(编辑修改)
   */
  OperationType: string
  /**
   * 保留天数 例如7
   */
  RetainDays?: number
  /**
   * 编辑时需要传
   */
  ScheduleId?: number
  /**
   * 选择的星期 逗号分隔，例如 2 代表周二
   */
  WeekDays?: string
  /**
   * 执行小时
   */
  ExecuteHour?: number
  /**
   * 备份表列表
   */
  BackUpTables?: Array<BackupTableContent>
}

/**
 * DescribeSpec请求参数结构体
 */
export interface DescribeSpecRequest {
  /**
   * 地域信息，例如"ap-guangzhou-1"
   */
  Zone: string
  /**
   * 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费
   */
  PayMode?: string
  /**
   * 是否弹性ck
   */
  IsElastic?: boolean
  /**
   * 是否是购买页面需要的spec
   */
  CaseType?: number
}

/**
 * ActionAlterCkUser返回参数结构体
 */
export interface ActionAlterCkUserResponse {
  /**
   * 错误信息
   */
  ErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略详情
 */
export interface ScheduleStrategy {
  /**
   * 备份桶名称
   */
  CosBucketName?: string
  /**
   * 备份保留天数
   */
  RetainDays?: number
  /**
   * 备份的天
   */
  WeekDays?: string
  /**
   * 备份小时
   */
  ExecuteHour?: number
  /**
   * 策略id
   */
  ScheduleId?: number
  /**
   * 下次备份时间
   */
  NextBackupTime?: string
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
   */
  FlowCreateTime?: string
  /**
   * 集群操作名称
   */
  FlowName?: string
  /**
   * 集群操作进度
   */
  FlowProgress?: number
  /**
   * 集群状态描述，例如：运行中
   */
  InstanceStateDesc?: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
   */
  FlowMsg?: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
   */
  ProcessName?: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
   */
  ProcessSubName?: string
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
   * 作业id
   */
  FlowID?: string
  /**
   * 集群id
   */
  InstanceID?: string
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
 * DescribeEventTasks请求参数结构体
 */
export interface DescribeEventTasksRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 过滤的事件任务id
   */
  EventTaskId?: number
  /**
   * 页码，默认为1
   */
  PageNumber?: number
  /**
   * 每页数量（支持10、20、30、50、100、200），默认为100
   */
  PageSize?: number
  /**
   * 事件名称过滤
   */
  EventCode?: string
  /**
   * (1-待处理;2-已预约;3-处理中;4-已结束;5-处理中;-1-已忽略;-2-已删除)
   */
  Status?: Array<number | bigint>
  /**
   * 创建时间范围开始 (格式: YYYY-MM-DD HH:MM:SS)，最大支持查询180天信息
   */
  StartTime?: string
  /**
   * 创建时间范围结束 (格式: YYYY-MM-DD HH:MM:SS)
   */
  EndTime?: string
  /**
   * 排序字段（事件类型：event_code；触发时间：create_time；完成时间：end_time）
   */
  SortField?: string
  /**
   * 排序顺序 (asc/desc)
   */
  SortOrder?: string
}

/**
 * DescribeInstanceShards请求参数结构体
 */
export interface DescribeInstanceShardsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * ResizeDisk请求参数结构体
 */
export interface ResizeDiskRequest {
  /**
   * 实例唯一ID
   */
  InstanceId: string
  /**
   * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
   */
  Type: string
  /**
   * 磁盘扩容后容量，不能小于原有用量。clickhouse最小200，且为100的整数倍。 zk最小100，且为10的整数倍；
   */
  DiskSize: number
}

/**
 * 资源信息
 */
export interface CNResource {
  /**
   * 资源id
   */
  ID?: number
  /**
   * 集群的id
   */
  InstanceID?: string
  /**
   * 用户appid
   */
  AppID?: number
  /**
   * 用户uin
   */
  Uin?: string
  /**
   * 组件
   */
  Component?: string
  /**
   * 部署模式
   */
  DeployMode?: number
  /**
   * 规格名称
   */
  SpecName?: string
  /**
   * 资源id
   */
  ResourceID?: string
  /**
   * 资源的状态
   */
  Status?: number
  /**
   * 私有网络ip
   */
  IP?: string
  /**
   * 核数
   */
  CPU?: number
  /**
   * 内存
   */
  Memory?: number
  /**
   * 存储大小
   */
  Storage?: number
  /**
   * 服务器ID
   */
  UUID?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地区
   */
  Zone?: string
  /**
   * 详细信息
   */
  Details?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 过期时间
   */
  ExpireTime?: string
}

/**
 * DescribeInstanceKeyValConfigs请求参数结构体
 */
export interface DescribeInstanceKeyValConfigsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 搜索的配置项名称
   */
  SearchConfigName?: string
}

/**
 * OpenBackUp返回参数结构体
 */
export interface OpenBackUpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCNInstances请求参数结构体
 */
export interface DescribeCNInstancesRequest {
  /**
   * 搜索的集群id名称
   */
  SearchInstanceID?: string
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
  /**
   * 集群类型，弹性版或自研数仓版
   */
  InstanceType?: string
  /**
   * 组件名称列表
   */
  Components?: Array<string>
}

/**
 * DescribeSpec返回参数结构体
 */
export interface DescribeSpecResponse {
  /**
   * zookeeper节点规格描述
   */
  CommonSpec?: Array<ResourceSpec>
  /**
   * 数据节点规格描述
   */
  DataSpec?: Array<ResourceSpec>
  /**
   * 云盘列表
   */
  AttachCBSSpec?: Array<DiskSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceKeyValConfigs返回参数结构体
 */
export interface ModifyInstanceKeyValConfigsResponse {
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * ID
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackUpTables返回参数结构体
 */
export interface DescribeBackUpTablesResponse {
  /**
   * 可备份表列表
   */
  AvailableTables?: Array<BackupTableContent>
  /**
   * 错误描述
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Cluster?: string
  /**
   * 节点所属的分组信息
   */
  NodeGroups?: Array<GroupInfo>
  /**
   * VPC IP
   */
  Rip?: string
  /**
   * ture的时候表示该节点上部署了chPROXY进程
   */
  IsCHProxy?: boolean
  /**
   * 节点状态
   */
  Status?: string
  /**
   * 节点uuid
   */
  UUID?: string
  /**
   * 区
   */
  Zone?: string
  /**
   * 去描述
   */
  ZoneDesc?: string
  /**
   * 真实资源id
   */
  RealResourceId?: string
  /**
   * 子网信息
   */
  SubnetId?: string
}

/**
 * 集群状态抽象后的结构体
 */
export interface InstanceStateInfo {
  /**
   * <p>集群状态，例如：Serving</p>
   */
  InstanceState?: string
  /**
   * <p>集群操作创建时间</p>
   */
  FlowCreateTime?: string
  /**
   * <p>集群操作名称</p>
   */
  FlowName?: string
  /**
   * <p>集群操作进度</p>
   */
  FlowProgress?: number
  /**
   * <p>集群状态描述，例如：运行中</p>
   */
  InstanceStateDesc?: string
  /**
   * <p>集群流程错误信息，例如：“创建失败，资源不足”</p>
   */
  FlowMsg?: string
  /**
   * <p>当前步骤的名称，例如：”购买资源中“</p>
   */
  ProcessName?: string
  /**
   * <p>请求id</p>
   */
  RequestId?: string
  /**
   * <p>流程的二级名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessSubName?: string
  /**
   * <p>请求ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestID?: string
}

/**
 * DescribeInstanceClusters返回参数结构体
 */
export interface DescribeInstanceClustersResponse {
  /**
   * cluster列表
   */
  Clusters?: Array<ClusterInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例的描述信息
 */
export interface InstanceInfo {
  /**
   * <p>集群实例ID, &quot;cdw-xxxx&quot; 字符串类型</p>
   */
  InstanceId?: string
  /**
   * <p>集群实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>状态,<br>Init 创建中; Serving 运行中；<br>Deleted已销毁；Deleting 销毁中；<br>Modify 集群变更中；</p>
   */
  Status?: string
  /**
   * <p>版本</p>
   */
  Version?: string
  /**
   * <p>地域, ap-guangzhou</p>
   */
  Region?: string
  /**
   * <p>可用区， ap-guangzhou-3</p>
   */
  Zone?: string
  /**
   * <p>私有网络名称</p>
   */
  VpcId?: string
  /**
   * <p>子网名称</p>
   */
  SubnetId?: string
  /**
   * <p>付费类型，&quot;hour&quot;, &quot;prepay&quot;</p>
   */
  PayMode?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>过期时间</p>
   */
  ExpireTime?: string
  /**
   * <p>数据节点描述信息</p>
   */
  MasterSummary?: NodesSummary
  /**
   * <p>zookeeper节点描述信息</p>
   */
  CommonSummary?: NodesSummary
  /**
   * <p>高可用,&quot;true&quot; &quot;false&quot;</p>
   */
  HA?: string
  /**
   * <p>访问地址，例如 &quot;10.0.0.1:9000&quot;</p>
   */
  AccessInfo?: string
  /**
   * <p>记录ID，数值型</p>
   */
  Id?: number
  /**
   * <p>regionId, 表示地域</p>
   */
  RegionId?: number
  /**
   * <p>可用区说明，例如 &quot;广州二区&quot;</p>
   */
  ZoneDesc?: string
  /**
   * <p>错误流程说明信息</p>
   */
  FlowMsg?: string
  /**
   * <p>状态描述，例如“运行中”等</p>
   */
  StatusDesc?: string
  /**
   * <p>自动续费标记</p>
   */
  RenewFlag?: boolean
  /**
   * <p>标签列表</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>监控信息</p>
   */
  Monitor?: string
  /**
   * <p>是否开通日志</p>
   */
  HasClsTopic?: boolean
  /**
   * <p>日志主题ID</p>
   */
  ClsTopicId?: string
  /**
   * <p>日志集ID</p>
   */
  ClsLogSetId?: string
  /**
   * <p>是否支持xml配置管理</p>
   */
  EnableXMLConfig?: number
  /**
   * <p>区域</p>
   */
  RegionDesc?: string
  /**
   * <p>弹性网卡地址</p>
   */
  Eip?: string
  /**
   * <p>冷热分层系数</p>
   */
  CosMoveFactor?: number
  /**
   * <p>external/local/yunti</p>
   */
  Kind?: string
  /**
   * <p>是否弹性ck</p>
   */
  IsElastic?: boolean
  /**
   * <p>集群详细状态</p>
   */
  InstanceStateInfo?: InstanceStateInfo
  /**
   * <p>ZK高可用</p>
   */
  HAZk?: boolean
  /**
   * <p>挂载盘,默认0:没有类型；1:裸盘;2:lvm</p>
   */
  MountDiskType?: number
  /**
   * <p>chproxy连接ip</p>
   */
  CHProxyVip?: string
  /**
   * <p>cos buket的名字</p>
   */
  CosBucketName?: string
  /**
   * <p>是否可以挂载云盘</p>
   */
  CanAttachCbs?: boolean
  /**
   * <p>是否可以挂载云盘阵列</p>
   */
  CanAttachCbsLvm?: boolean
  /**
   * <p>是否可以挂载cos</p>
   */
  CanAttachCos?: boolean
  /**
   * <p>服务信息</p>
   */
  Components?: Array<ServiceInfo>
  /**
   * <p>可升级的内核版本</p>
   */
  UpgradeVersions?: string
  /**
   * <p>ex-index</p>
   */
  EsIndexId?: string
  /**
   * <p>username</p>
   */
  EsIndexUsername?: string
  /**
   * <p>password</p>
   */
  EsIndexPassword?: string
  /**
   * <p>true</p>
   */
  HasEsIndex?: boolean
  /**
   * <p>true</p>
   */
  IsSecondaryZone?: boolean
  /**
   * <p>desc</p>
   */
  SecondaryZoneInfo?: string
  /**
   * <p>是否clickhouse-keeper</p>
   */
  ClickHouseKeeper?: boolean
  /**
   * <p>实例扩展信息</p>
   */
  Details?: InstanceDetail
  /**
   * <p>安全组白名单</p>
   */
  IsWhiteSGs?: boolean
  /**
   * <p>绑定的安全组</p>
   */
  BindSGs?: Array<string>
  /**
   * <p>是否开启公网clb</p>
   */
  HasPublicCloudClb?: boolean
  /**
   * <p>可升级的zk版本</p>
   */
  UpgradeZkVersions?: string
  /**
   * <p>是否显示rip</p>
   */
  ShowRip?: string
  /**
   * <p>实例类型：标准型 standard，无keeper节点类型noKeeper；</p>
   */
  InstanceType?: string
  /**
   * <p>keyvalue视图</p>
   */
  EnableConfigKeyValue?: string
  /**
   * <p>实例是否开启HTTPS</p><p>枚举值：</p><ul><li>true： 已开启HTTPS</li><li>false： 未开启HTTPS</li></ul>
   */
  HttpsEnabled?: boolean
}

/**
 * DescribeInstanceKeyValConfigs返回参数结构体
 */
export interface DescribeInstanceKeyValConfigsResponse {
  /**
   * 参数列表
   */
  ConfigItems?: Array<InstanceConfigInfo>
  /**
   * 未配置的参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnConfigItems?: Array<InstanceConfigInfo>
  /**
   * 配置的多层级参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MapConfigItems?: Array<MapConfigItem>
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
 * DescribeInstancesNew请求参数结构体
 */
export interface DescribeInstancesNewRequest {
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
  /**
   * 信息详细与否
   */
  IsSimple?: boolean
  /**
   * vip列表
   */
  Vips?: Array<string>
}

/**
 * DescribeClusterConfigs请求参数结构体
 */
export interface DescribeClusterConfigsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * kv配置，多层级item
 */
export interface MapConfigItem {
  /**
   * key
   */
  ConfKey?: string
  /**
   * 列表
   */
  Items?: Array<InstanceConfigInfo>
}

/**
 * CreateBackUpSchedule返回参数结构体
 */
export interface CreateBackUpScheduleResponse {
  /**
   * 错误描述
   */
  ErrorMsg?: string
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
   * <p>实例描述信息</p>
   */
  InstanceInfo?: InstanceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackUpJob返回参数结构体
 */
export interface DescribeBackUpJobResponse {
  /**
   * 任务列表
   */
  BackUpJobs?: Array<BackUpJobDisplay>
  /**
   * 错误描述
   */
  ErrorMsg?: string
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 副可用区详情
 */
export interface SecondaryZoneInfo {
  /**
   * 副可用区
   */
  SecondaryZone?: string
  /**
   * 可用区可用的子网id
   */
  SecondarySubnet?: string
  /**
   * 可用区可用的子网可用ip的数量
   */
  UserIpNum?: string
  /**
   * 可用区可用的子网可用ip的数量
   */
  SecondaryUserSubnetIPNum?: number
}

/**
 * 集群配置信息
 */
export interface InstanceConfigInfo {
  /**
   * <p>配置项名称</p>
   */
  ConfKey: string
  /**
   * <p>配置项内容</p>
   */
  ConfValue: string
  /**
   * <p>默认值</p>
   */
  DefaultValue?: string
  /**
   * <p>是否需要重启</p>
   */
  NeedRestart?: boolean
  /**
   * <p>是否可编辑</p>
   */
  Editable?: boolean
  /**
   * <p>配置项解释</p>
   */
  ConfDesc?: string
  /**
   * <p>文件名称</p>
   */
  FileName?: string
  /**
   * <p>规则名称类型</p>
   */
  ModifyRuleType?: string
  /**
   * <p>规则名称内容</p>
   */
  ModifyRuleValue?: string
  /**
   * <p>修改人的uin</p>
   */
  Uin?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>取值范围</p>
   */
  ValueRange?: string
  /**
   * <p>标记异常</p>
   */
  AbnormalParam?: string
  /**
   * <p>是否生效</p>
   */
  ConfigEffective?: string
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
 * DescribeBackUpSchedule返回参数结构体
 */
export interface DescribeBackUpScheduleResponse {
  /**
   * 备份是否开启
   */
  BackUpOpened?: boolean
  /**
   * 元数据备份策略
   */
  MetaStrategy?: ScheduleStrategy
  /**
   * 表数据备份策略
   */
  DataStrategy?: ScheduleStrategy
  /**
   * 备份表列表
   */
  BackUpContents?: Array<BackupTableContent>
  /**
   * 备份的状态
   */
  BackUpStatus?: number
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
 * DescribeCkSqlApis返回参数结构体
 */
export interface DescribeCkSqlApisResponse {
  /**
   * 返回的查询数据，大部分情况是list，也可能是bool
   */
  ReturnData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群计费相关信息

 */
export interface Charge {
  /**
   * 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费
   */
  ChargeType: string
  /**
   * PREPAID需要传递，是否自动续费，1表示自动续费开启
   */
  RenewFlag?: number
  /**
   * 预付费需要传递，计费时间长度，多少个月
   */
  TimeSpan?: number
}

/**
 * DescribeBackUpSchedule请求参数结构体
 */
export interface DescribeBackUpScheduleRequest {
  /**
   * 集群id
   */
  InstanceId: string
}

/**
 * RestartInstance返回参数结构体
 */
export interface RestartInstanceResponse {
  /**
   * 任务id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScaleCNOutUpInstance返回参数结构体
 */
export interface ScaleCNOutUpInstanceResponse {
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
 * 资源规格描述信息
 */
export interface ResourceSpec {
  /**
   * 规格名称，例如“SCH1"
   */
  Name?: string
  /**
   * cpu核数
   */
  Cpu?: number
  /**
   * 内存大小，单位G
   */
  Mem?: number
  /**
   * 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO
   */
  Type?: string
  /**
   * 系统盘描述信息
   */
  SystemDisk?: DiskSpec
  /**
   * 数据盘描述信息
   */
  DataDisk?: DiskSpec
  /**
   * 最大节点数目限制
   */
  MaxNodeSize?: number
  /**
   * 是否可用，false代表售罄
   */
  Available?: boolean
  /**
   * 规格描述信息
   */
  ComputeSpecDesc?: string
  /**
   * 规格名
   */
  DisplayName?: string
  /**
   * 库存数
   */
  InstanceQuota?: number
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
   * 保存配置文件的路径
   */
  FilePath?: string
  /**
   * 节点级配置的ip，当ConfigLevel取值为node时，此参数必选；
   */
  Ip?: string
  /**
   * 可选参数，参数取值：node,cluster; node: 节点级参数配置，cluster: 实例级参数配置；
   */
  ConfigLevel?: string
}

/**
 * DescribeInstanceClusters请求参数结构体
 */
export interface DescribeInstanceClustersRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeCNInstances返回参数结构体
 */
export interface DescribeCNInstancesResponse {
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 实例数组
   */
  InstancesList?: Array<CnInstanceInfo>
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
 * DestroyInstance请求参数结构体
 */
export interface DestroyInstanceRequest {
  /**
   * 集群id
   */
  InstanceId: string
}

/**
 * RestartInstance请求参数结构体
 */
export interface RestartInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 节点类型，可选值：CK / ZK / CHPROXY
   */
  NodeType: string
  /**
   * 符合节点类型的要重启的节点ip列表
   */
  NodeIpList: Array<string>
  /**
   * 是否滚动重启，默认为true
   */
  RollingRestart?: boolean
}

/**
 * 服务详细信息描述。
 */
export interface ServiceInfo {
  /**
   * 服务名称
   */
  Name?: string
  /**
   * 服务的版本
   */
  Version?: string
}

/**
 * ModifyClusterConfigs返回参数结构体
 */
export interface ModifyClusterConfigsResponse {
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
 * DeleteBackUpData返回参数结构体
 */
export interface DeleteBackUpDataResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceKeyValConfigs请求参数结构体
 */
export interface ModifyInstanceKeyValConfigsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 新增配置列表
   */
  AddItems?: Array<InstanceConfigItem>
  /**
   * 更新配置列表
   */
  UpdateItems?: Array<InstanceConfigItem>
  /**
   * 删除配置列表
   */
  DeleteItems?: InstanceConfigItem
  /**
   * 删除配置列表
   */
  DelItems?: Array<InstanceConfigItem>
  /**
   * 备注
   */
  Remark?: string
}

/**
 * 备份任务详情
 */
export interface BackUpJobDisplay {
  /**
   * 备份任务id
   */
  JobId?: number
  /**
   * 备份任务名
   */
  Snapshot?: string
  /**
   * 任务类型(元数据),(数据)
   */
  BackUpType?: string
  /**
   * 备份数据量
   */
  BackUpSize?: number
  /**
   * 任务创建时间
   */
  BackUpTime?: string
  /**
   * 任务过期时间
   */
  ExpireTime?: string
  /**
   * 任务状态
   */
  JobStatus?: string
  /**
   * 处理数据量
   */
  ProcessSize?: number
  /**
   * 错误原因
   */
  ErrorReason?: string
}

/**
 * ScaleCNOutUpInstance请求参数结构体
 */
export interface ScaleCNOutUpInstanceRequest {
  /**
   * 实例唯一ID
   */
  InstanceId: string
  /**
   * warehouse名称
   */
  VirtualCluster: string
  /**
   * 子网id
   */
  UserSubnetID: string
  /**
   * 新的warehouse的个数
   */
  NewCount: number
  /**
   * 集群的规格2X-Small、X-Small、Small
   */
  NewSpecName: string
}

/**
 * RecoverBackUpJob返回参数结构体
 */
export interface RecoverBackUpJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScaleUpInstance请求参数结构体
 */
export interface ScaleUpInstanceRequest {
  /**
   * 实例唯一ID
   */
  InstanceId: string
  /**
   * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
   */
  Type: string
  /**
   * clickhouse节点规格。
   */
  SpecName: string
  /**
   * 是否滚动重启，false为不滚动重启，true为滚动重启
   */
  ScaleUpEnableRolling: boolean
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
   */
  AttachCBSSpec?: AttachCBSSpec
  /**
   * 子产品类型
   */
  SubProductType?: string
  /**
   * 规格对应的核数
   */
  SpecCore?: number
  /**
   * 规格对应的内存大小
   */
  SpecMemory?: number
  /**
   * 磁盘的数量
   */
  DiskCount?: number
  /**
   * 磁盘的最大大小
   */
  MaxDiskSize?: number
  /**
   * 是否为加密云盘
   */
  Encrypt?: number
}

/**
 * DescribeBackUpJobDetail请求参数结构体
 */
export interface DescribeBackUpJobDetailRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 任务id
   */
  BackUpJobId: number
}

/**
 * 创建集群时的规格
 */
export interface NodeSpec {
  /**
   * 规格名称
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
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * <p>集群实例ID</p>
   */
  InstanceId: string
  /**
   * <p>是否是open api查询</p>
   */
  IsOpenApi?: boolean
}

/**
 * DescribeBackUpJob请求参数结构体
 */
export interface DescribeBackUpJobRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 页号
   */
  PageNum?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * Instance表detail字段
 */
export interface InstanceDetail {
  /**
   * 告警策略是否可用
   */
  EnableAlarmStrategy?: boolean
}

/**
 * 表权限
 */
export interface TablePrivilegeInfo {
  /**
   * 表名称
   */
  TableName: string
  /**
   * 表权限列表 SELECT、INSERT_ALL、ALTER、TRUNCATE、DROP_TABLE 查询、插入、设置、清空表、删除表
   */
  TablePrivileges: Array<string>
}

/**
 * DescribeBackUpTables请求参数结构体
 */
export interface DescribeBackUpTablesRequest {
  /**
   * 集群id
   */
  InstanceId: string
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

/**
 * ModifyUserNewPrivilege返回参数结构体
 */
export interface ModifyUserNewPrivilegeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
