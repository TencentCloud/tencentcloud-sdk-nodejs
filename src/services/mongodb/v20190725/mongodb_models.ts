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
 * DescribeSpecInfo请求参数结构体
 */
export interface DescribeSpecInfoRequest {
  /**
   * 待查询可用区
   */
  Zone?: string
}

/**
 * KillOps请求参数结构体
 */
export interface KillOpsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 待终止的操作
   */
  Operations: Array<Operation>
}

/**
 * CreateDBInstance请求参数结构体
 */
export interface CreateDBInstanceRequest {
  /**
   * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
   */
  NodeNum: number

  /**
   * 实例内存大小，单位：GB
   */
  Memory: number

  /**
   * 实例硬盘大小，单位：GB
   */
  Volume: number

  /**
   * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本
   */
  MongoVersion: string

  /**
   * 实例数量, 最小值1，最大值为10
   */
  GoodsNum: number

  /**
   * 实例所属区域名称，格式如：ap-guangzhou-2
   */
  Zone: string

  /**
   * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
   */
  Period: number

  /**
   * 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型
   */
  MachineCode: string

  /**
   * 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点
   */
  ClusterType: string

  /**
   * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0
   */
  ReplicateSetNum: number

  /**
   * 项目ID，不设置为默认项目
   */
  ProjectId?: number

  /**
   * 私有网络 ID，如果不传则默认选择基础网络，请使用 查询私有网络列表
   */
  VpcId?: string

  /**
   * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 查询子网列表
   */
  SubnetId?: string

  /**
   * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
   */
  Password?: string

  /**
   * 实例标签信息
   */
  Tags?: Array<TagInfo>

  /**
   * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。默认为不自动续费
   */
  AutoRenewFlag?: number

  /**
   * 是否自动选择代金券，可选值为：1 - 是；0 - 否； 默认为0
   */
  AutoVoucher?: number

  /**
   * 1:正式实例,2:临时实例,3:只读实例，4：灾备实例
   */
  Clone?: number

  /**
   * 若是只读，灾备实例，Father必须填写，即主实例ID
   */
  Father?: string

  /**
   * 安全组
   */
  SecurityGroup?: Array<string>
}

/**
 * KillOps返回参数结构体
 */
export interface KillOpsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCurrentOp返回参数结构体
 */
export interface DescribeCurrentOpResponse {
  /**
   * 符合查询条件的操作总数
   */
  TotalCount?: number

  /**
   * 当前操作列表
   */
  CurrentOps?: Array<CurrentOp>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetDBInstancePassword返回参数结构体
 */
export interface ResetDBInstancePasswordResponse {
  /**
   * 异步请求Id，用户查询该流程的运行状态
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupDBInstance返回参数结构体
 */
export interface CreateBackupDBInstanceResponse {
  /**
   * 查询备份流程的状态
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库实例价格
 */
export interface DBInstancePrice {
  /**
      * 单价
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnitPrice: number

  /**
   * 原价
   */
  OriginalPrice: number

  /**
   * 折扣加
   */
  DiscountPrice: number
}

/**
 * 备份文件存储信息
 */
export interface BackupFile {
  /**
   * 备份文件所属的副本集/分片ID
   */
  ReplicateSetId: string

  /**
   * 备份文件保存路径
   */
  File: string
}

/**
 * InquirePriceCreateDBInstances请求参数结构体
 */
export interface InquirePriceCreateDBInstancesRequest {
  /**
   * 实例所属区域名称，格式如：ap-guangzhou-2
   */
  Zone: string

  /**
   * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
   */
  NodeNum: number

  /**
   * 实例内存大小，单位：GB
   */
  Memory: number

  /**
   * 实例硬盘大小，单位：GB
   */
  Volume: number

  /**
   * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本
   */
  MongoVersion: string

  /**
   * 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型
   */
  MachineCode: string

  /**
   * 实例数量, 最小值1，最大值为10
   */
  GoodsNum: number

  /**
   * 实例时长，单位：月，可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]
   */
  Period: number

  /**
   * 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点
   */
  ClusterType: string

  /**
   * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0
   */
  ReplicateSetNum: number
}

/**
 * IsolateDBInstance请求参数结构体
 */
export interface IsolateDBInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
}

/**
 * DescribeSlowLogPatterns返回参数结构体
 */
export interface DescribeSlowLogPatternsResponse {
  /**
   * 慢日志统计信息总数
   */
  Count?: number

  /**
   * 慢日志统计信息
   */
  SlowLogPatterns?: Array<SlowLogPattern>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述MongoDB数据库慢日志统计信息
 */
export interface SlowLogPattern {
  /**
   * 慢日志模式
   */
  Pattern: string

  /**
   * 最大执行时间
   */
  MaxTime: number

  /**
   * 平均执行时间
   */
  AverageTime: number

  /**
   * 该模式慢日志条数
   */
  Total: number
}

/**
 * CreateDBInstanceHour请求参数结构体
 */
export interface CreateDBInstanceHourRequest {
  /**
   * 实例内存大小，单位：GB
   */
  Memory: number

  /**
   * 实例硬盘大小，单位：GB
   */
  Volume: number

  /**
   * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数
   */
  ReplicateSetNum: number

  /**
   * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
   */
  NodeNum: number

  /**
   * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本
   */
  MongoVersion: string

  /**
   * 机器类型，HIO：高IO型；HIO10G：高IO万兆
   */
  MachineCode: string

  /**
   * 实例数量，最小值1，最大值为10
   */
  GoodsNum: number

  /**
   * 可用区信息，格式如：ap-guangzhou-2
   */
  Zone: string

  /**
   * 实例类型，REPLSET-副本集，SHARD-分片集群
   */
  ClusterType: string

  /**
   * 私有网络ID，如果不设置该参数则默认选择基础网络
   */
  VpcId?: string

  /**
   * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
   */
  SubnetId?: string

  /**
   * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
   */
  Password?: string

  /**
   * 项目ID，不设置为默认项目
   */
  ProjectId?: number

  /**
   * 实例标签信息
   */
  Tags?: Array<TagInfo>

  /**
   * 1:正式实例,2:临时实例,3:只读实例，4：灾备实例
   */
  Clone?: number

  /**
   * 父实例Id，当Clone为3或者4时，这个必须填
   */
  Father?: string

  /**
   * 安全组
   */
  SecurityGroup?: Array<string>
}

/**
 * AssignProject请求参数结构体
 */
export interface AssignProjectRequest {
  /**
   * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceIds: Array<string>

  /**
   * 项目ID
   */
  ProjectId: number
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 慢日志总数
   */
  Count?: number

  /**
      * 慢日志详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlowLogs?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户端连接信息，包括客户端IP和连接数
 */
export interface ClientConnection {
  /**
   * 连接的客户端IP
   */
  IP: string

  /**
   * 对应客户端IP的连接数
   */
  Count: number
}

/**
 * InquirePriceModifyDBInstanceSpec请求参数结构体
 */
export interface InquirePriceModifyDBInstanceSpecRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string

  /**
   * 变更配置后实例内存大小，单位：GB。
   */
  Memory: number

  /**
   * 变更配置后实例磁盘大小，单位：GB。
   */
  Volume: number
}

/**
 * 备份信息
 */
export interface BackupInfo {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 备份方式，0-自动备份，1-手动备份
   */
  BackupType: number

  /**
   * 备份名称
   */
  BackupName: string

  /**
      * 备份备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupDesc: string

  /**
      * 备份文件大小，单位KB
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupSize: number

  /**
      * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
   * 备份状态，1-备份中，2-备份成功
   */
  Status: number

  /**
   * 备份方法，0-逻辑备份，1-物理备份
   */
  BackupMethod: number
}

/**
 * InquirePriceRenewDBInstances请求参数结构体
 */
export interface InquirePriceRenewDBInstancesRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同，接口单次最多只支持5个实例进行操作。
   */
  InstanceIds: Array<string>

  /**
   * 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 */
export interface DescribeAsyncRequestInfoRequest {
  /**
   * 异步请求Id，涉及到异步流程的接口返回，如CreateBackupDBInstance
   */
  AsyncRequestId: string
}

/**
 * 实例规格信息
 */
export interface SpecificationInfo {
  /**
   * 地域信息
   */
  Region: string

  /**
   * 可用区信息
   */
  Zone: string

  /**
   * 售卖规格信息
   */
  SpecItems: Array<SpecItem>
}

/**
 * 云数据库实例当前操作
 */
export interface CurrentOp {
  /**
      * 操作序号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpId: number

  /**
      * 操作所在的命名空间，形式如db.collection
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ns: string

  /**
      * 操作执行语句
注意：此字段可能返回 null，表示取不到有效值。
      */
  Query: string

  /**
      * 操作类型，可能的取值：aggregate、count、delete、distinct、find、findAndModify、getMore、insert、mapReduce、update和command
注意：此字段可能返回 null，表示取不到有效值。
      */
  Op: string

  /**
   * 操作所在的分片名称
   */
  ReplicaSetName: string

  /**
      * 筛选条件，节点状态，可能的取值为：Primary、Secondary
注意：此字段可能返回 null，表示取不到有效值。
      */
  State: string

  /**
      * 操作详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operation: string

  /**
   * 操作所在的节点名称
   */
  NodeName: string

  /**
      * 操作已执行时间（ms）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MicrosecsRunning: number
}

/**
 * DescribeSlowLogPatterns请求参数结构体
 */
export interface DescribeSlowLogPatternsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string

  /**
   * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  EndTime: string

  /**
   * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
   */
  SlowMS: number

  /**
   * 偏移量，最小值为0，最大值为10000，默认值为0。
   */
  Offset?: number

  /**
   * 分页大小，最小值为1，最大值为100，默认值为20。
   */
  Limit?: number
}

/**
 * FlushInstanceRouterConfig返回参数结构体
 */
export interface FlushInstanceRouterConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceModifyDBInstanceSpec返回参数结构体
 */
export interface InquirePriceModifyDBInstanceSpecResponse {
  /**
   * 价格。
   */
  Price?: DBInstancePrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * mongodb售卖规格
 */
export interface SpecItem {
  /**
   * 规格信息标识
   */
  SpecCode: string

  /**
   * 规格有效标志，取值：0-停止售卖，1-开放售卖
   */
  Status: number

  /**
   * 规格有效标志，取值：0-停止售卖，1-开放售卖
   */
  Cpu: number

  /**
   * 内存规格，单位为MB
   */
  Memory: number

  /**
   * 默认磁盘规格，单位MB
   */
  DefaultStorage: number

  /**
   * 最大磁盘规格，单位MB
   */
  MaxStorage: number

  /**
   * 最小磁盘规格，单位MB
   */
  MinStorage: number

  /**
   * 可承载qps信息
   */
  Qps: number

  /**
   * 连接数限制
   */
  Conns: number

  /**
   * 实例mongodb版本信息
   */
  MongoVersionCode: string

  /**
   * 实例mongodb版本号
   */
  MongoVersionValue: number

  /**
   * 实例mongodb版本号（短）
   */
  Version: string

  /**
   * 存储引擎
   */
  EngineName: string

  /**
   * 集群类型，取值：1-分片集群，0-副本集集群
   */
  ClusterType: number

  /**
   * 最小副本集从节点数
   */
  MinNodeNum: number

  /**
   * 最大副本集从节点数
   */
  MaxNodeNum: number

  /**
   * 最小分片数
   */
  MinReplicateSetNum: number

  /**
   * 最大分片数
   */
  MaxReplicateSetNum: number

  /**
   * 最小分片从节点数
   */
  MinReplicateSetNodeNum: number

  /**
   * 最大分片从节点数
   */
  MaxReplicateSetNodeNum: number

  /**
   * 机器类型，取值：0-HIO，4-HIO10G
   */
  MachineType: string
}

/**
 * DescribeSpecInfo返回参数结构体
 */
export interface DescribeSpecInfoResponse {
  /**
   * 实例售卖规格信息列表
   */
  SpecInfoList?: Array<SpecificationInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewDBInstances返回参数结构体
 */
export interface InquirePriceRenewDBInstancesResponse {
  /**
   * 价格
   */
  Price?: DBInstancePrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetDBInstancePassword请求参数结构体
 */
export interface ResetDBInstancePasswordRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 实例账号名
   */
  UserName: string

  /**
   * 新密码
   */
  Password: string
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
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 符合查询条件的实例总数
   */
  TotalCount?: number

  /**
   * 实例详细信息列表
   */
  InstanceDetails?: Array<InstanceDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedDBInstance请求参数结构体
 */
export interface OfflineIsolatedDBInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
}

/**
 * DescribeCurrentOp请求参数结构体
 */
export interface DescribeCurrentOpRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 筛选条件，操作所属的命名空间namespace，格式为db.collection
   */
  Ns?: string

  /**
   * 筛选条件，操作已经执行的时间（单位：毫秒），结果将返回超过设置时间的操作，默认值为0，取值范围为[0, 3600000]
   */
  MillisecondRunning?: number

  /**
   * 筛选条件，操作类型，可能的取值：none，update，insert，query，command，getmore，remove和killcursors
   */
  Op?: string

  /**
   * 筛选条件，分片名称
   */
  ReplicaSetName?: string

  /**
      * 筛选条件，节点状态，可能的取值为：primary
secondary
      */
  State?: string

  /**
   * 单次请求返回的数量，默认值为100，取值范围为[0,100]
   */
  Limit?: number

  /**
   * 偏移量，默认值为0，取值范围为[0,10000]
   */
  Offset?: number

  /**
   * 返回结果集排序的字段，目前支持："MicrosecsRunning"/"microsecsrunning"，默认为升序排序
   */
  OrderBy?: string

  /**
   * 返回结果集排序方式，可能的取值："ASC"/"asc"或"DESC"/"desc"
   */
  OrderByType?: string
}

/**
 * DescribeDBInstanceDeal请求参数结构体
 */
export interface DescribeDBInstanceDealRequest {
  /**
   * 订单ID，通过CreateDBInstance等接口返回
   */
  DealId: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceIds?: Array<string>

  /**
   * 实例类型，取值范围：0-所有实例,1-正式实例，2-临时实例, 3-只读实例，-1-正式实例+只读+灾备实例
   */
  InstanceType?: number

  /**
   * 集群类型，取值范围：0-副本集实例，1-分片实例，-1-所有实例
   */
  ClusterType?: number

  /**
   * 实例状态，取值范围：0-待初始化，1-流程执行中，2-实例有效，-2-已隔离（包年包月实例），-3-已隔离（按量计费实例）
   */
  Status?: Array<number>

  /**
   * 私有网络的ID，基础网络则不传该参数
   */
  VpcId?: string

  /**
   * 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId
   */
  SubnetId?: string

  /**
   * 付费类型，取值范围：0-按量计费，1-包年包月，-1-按量计费+包年包月
   */
  PayMode?: number

  /**
   * 单次请求返回的数量，最小值为1，最大值为100，默认值为20
   */
  Limit?: number

  /**
   * 偏移量，默认值为0
   */
  Offset?: number

  /**
   * 返回结果集排序的字段，目前支持："ProjectId", "InstanceName", "CreateTime"，默认为升序排序
   */
  OrderBy?: string

  /**
   * 返回结果集排序方式，目前支持："ASC"或者"DESC"
   */
  OrderByType?: string

  /**
   * 项目 ID
   */
  ProjectIds?: Array<number>

  /**
   * 搜索关键词，支持实例ID、实例名称、完整IP
   */
  SearchKey?: string

  /**
   * Tag信息
   */
  Tags?: TagInfo
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 */
export interface DescribeAsyncRequestInfoResponse {
  /**
   * 状态
   */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstance返回参数结构体
 */
export interface CreateDBInstanceResponse {
  /**
   * 订单ID
   */
  DealId?: string

  /**
   * 创建的实例ID列表
   */
  InstanceIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignProject返回参数结构体
 */
export interface AssignProjectResponse {
  /**
   * 返回的异步任务ID列表
   */
  FlowIds?: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 备份方式，当前支持：0-逻辑备份，1-物理备份，2-所有备份。默认为逻辑备份。
   */
  BackupMethod?: number

  /**
   * 分页大小，最大值为100，不设置默认查询所有。
   */
  Limit?: number

  /**
   * 分页偏移量，最小值为0，默认值为0。
   */
  Offset?: number
}

/**
 * DescribeClientConnections请求参数结构体
 */
export interface DescribeClientConnectionsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 查询返回记录条数，默认为10000。
   */
  Limit?: number

  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * DescribeDBInstanceDeal返回参数结构体
 */
export interface DescribeDBInstanceDealResponse {
  /**
   * 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。
   */
  Status?: number

  /**
   * 订单原价。
   */
  OriginalPrice?: number

  /**
   * 订单折扣价格。
   */
  DiscountPrice?: number

  /**
   * 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。
   */
  Action?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 */
export interface ModifyDBInstanceSpecResponse {
  /**
   * 订单ID
   */
  DealId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例分片详情
 */
export interface ShardInfo {
  /**
   * 分片已使用容量
   */
  UsedVolume: number

  /**
   * 分片ID
   */
  ReplicaSetId: string

  /**
   * 分片名
   */
  ReplicaSetName: string

  /**
   * 分片内存规格，单位为MB
   */
  Memory: number

  /**
   * 分片磁盘规格，单位为MB
   */
  Volume: number

  /**
   * 分片Oplog大小，单位为MB
   */
  OplogSize: number

  /**
   * 分片从节点数
   */
  SecondaryNum: number

  /**
   * 分片物理id
   */
  RealReplicaSetId: string
}

/**
 * OfflineIsolatedDBInstance返回参数结构体
 */
export interface OfflineIsolatedDBInstanceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupAccess请求参数结构体
 */
export interface DescribeBackupAccessRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 需要获取下载授权的备份文件名
   */
  BackupName: string
}

/**
 * RenameInstance请求参数结构体
 */
export interface RenameInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 实例名称
   */
  NewName: string
}

/**
 * RenewDBInstances返回参数结构体
 */
export interface RenewDBInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenameInstance返回参数结构体
 */
export interface RenameInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClientConnections返回参数结构体
 */
export interface DescribeClientConnectionsResponse {
  /**
   * 客户端连接信息，包括客户端IP和对应IP的连接数量。
   */
  Clients?: Array<ClientConnection>

  /**
   * 满足条件的记录总条数，可用于分页查询。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FlushInstanceRouterConfig请求参数结构体
 */
export interface FlushInstanceRouterConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 实例信息
 */
export interface DBInstanceInfo {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 地域信息
   */
  Region: string
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string

  /**
   * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  EndTime: string

  /**
   * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
   */
  SlowMS: number

  /**
   * 偏移量，最小值为0，最大值为10000，默认值为0。
   */
  Offset?: number

  /**
   * 分页大小，最小值为1，最大值为100，默认值为20。
   */
  Limit?: number
}

/**
 * DescribeBackupAccess返回参数结构体
 */
export interface DescribeBackupAccessResponse {
  /**
   * 实例所属地域
   */
  Region?: string

  /**
   * 备份文件所在存储桶
   */
  Bucket?: string

  /**
   * 备份文件的存储信息
   */
  Files?: Array<BackupFile>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
  /**
   * 备份列表
   */
  BackupList?: Array<BackupInfo>

  /**
   * 备份总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详情
 */
export interface InstanceDetail {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 付费类型，可能的返回值：1-包年包月；0-按量计费
   */
  PayMode: number

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 集群类型，可能的返回值：0-副本集实例，1-分片实例，
   */
  ClusterType: number

  /**
   * 地域信息
   */
  Region: string

  /**
   * 可用区信息
   */
  Zone: string

  /**
   * 网络类型，可能的返回值：0-基础网络，1-私有网络
   */
  NetType: number

  /**
   * 私有网络的ID
   */
  VpcId: string

  /**
   * 私有网络的子网ID
   */
  SubnetId: string

  /**
   * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期
   */
  Status: number

  /**
   * 实例IP
   */
  Vip: string

  /**
   * 端口号
   */
  Vport: number

  /**
   * 实例创建时间
   */
  CreateTime: string

  /**
   * 实例到期时间
   */
  DeadLine: string

  /**
   * 实例版本信息
   */
  MongoVersion: string

  /**
   * 实例内存规格，单位为MB
   */
  Memory: number

  /**
   * 实例磁盘规格，单位为MB
   */
  Volume: number

  /**
   * 实例CPU核心数
   */
  CpuNum: number

  /**
   * 实例机器类型
   */
  MachineType: string

  /**
   * 实例从节点数
   */
  SecondaryNum: number

  /**
   * 实例分片数
   */
  ReplicationSetNum: number

  /**
   * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费
   */
  AutoRenewFlag: number

  /**
   * 已用容量，单位MB
   */
  UsedVolume: number

  /**
   * 维护窗口起始时间
   */
  MaintenanceStart: string

  /**
   * 维护窗口结束时间
   */
  MaintenanceEnd: string

  /**
   * 分片信息
   */
  ReplicaSets: Array<ShardInfo>

  /**
   * 只读实例信息
   */
  ReadonlyInstances: Array<DBInstanceInfo>

  /**
   * 灾备实例信息
   */
  StandbyInstances: Array<DBInstanceInfo>

  /**
   * 临时实例信息
   */
  CloneInstances: Array<DBInstanceInfo>

  /**
   * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息
   */
  RelatedInstance: DBInstanceInfo

  /**
   * 实例标签信息集合
   */
  Tags: Array<TagInfo>

  /**
   * 实例版本标记
   */
  InstanceVer: number

  /**
   * 实例版本标记
   */
  ClusterVer: number

  /**
   * 协议信息，可能的返回值：1-mongodb，2-dynamodb
   */
  Protocol: number

  /**
   * 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例
   */
  InstanceType: number

  /**
   * 实例状态描述
   */
  InstanceStatusDesc: string

  /**
   * 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
   */
  RealInstanceId: string
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 */
export interface ModifyDBInstanceSpecRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string

  /**
   * 实例配置变更后的内存大小，单位：GB。内存和磁盘必须同时升配或同时降配
   */
  Memory: number

  /**
   * 实例配置变更后的硬盘大小，单位：GB。内存和磁盘必须同时升配或同时降配。降配时，新的磁盘参数必须大于已用磁盘容量的1.2倍
   */
  Volume: number

  /**
   * 实例配置变更后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
   */
  OplogSize?: number
}

/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
  /**
   * 订单ID
   */
  DealId?: string

  /**
   * 创建的实例ID列表
   */
  InstanceIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupDBInstance请求参数结构体
 */
export interface CreateBackupDBInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 0-逻辑备份，1-物理备份
   */
  BackupMethod: number

  /**
   * 备份备注
   */
  BackupRemark?: string
}

/**
 * 需要终止的操作
 */
export interface Operation {
  /**
   * 操作所在的分片名
   */
  ReplicaSetName: string

  /**
   * 操作所在的节点名
   */
  NodeName: string

  /**
   * 操作序号
   */
  OpId: number
}

/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
  /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
      */
  Period?: number

  /**
      * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
      */
  RenewFlag?: string
}

/**
 * InquirePriceCreateDBInstances返回参数结构体
 */
export interface InquirePriceCreateDBInstancesResponse {
  /**
   * 价格
   */
  Price?: DBInstancePrice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewDBInstances请求参数结构体
 */
export interface RenewDBInstancesRequest {
  /**
   * 一个或多个待操作的实例ID。可通过DescribeInstances接口返回值中的InstanceId获取。每次请求批量实例的上限为100。
   */
  InstanceIds: Array<string>

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}
