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
 * DescribeSpecInfo请求参数结构体
 */
export interface DescribeSpecInfoRequest {
  /**
   * 待查询可用区。当前支持的可用区，请参见[地域与可用区](https://cloud.tencent.com/document/product/240/3637)。
   */
  Zone?: string
}

/**
 * CreateDBInstance请求参数结构体
 */
export interface CreateDBInstanceRequest {
  /**
   * - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  NodeNum: number
  /**
   * 实例内存大小，单位：GB。具体售卖的内存规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Memory: number
  /**
   * 实例硬盘大小，单位：GB。每一个 CPU 规格对应的最大磁盘与最小磁盘范围，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Volume: number
  /**
   * 指版本信息。具体支持的版本信息 ，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 实例数量, 最小值1，最大值为30。
   */
  GoodsNum: number
  /**
   * 可用区信息，输入格式如：ap-guangzhou-2。
- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。
   */
  Zone: string
  /**
   * 指定购买实例的购买时长。取值可选：[1,2,3,4,5,6,7,8,9,10,11,12,24,36]；单位：月。
   */
  Period: number
  /**
   * 产品规格类型。
- HIO10G：通用高HIO万兆型。
- HCD：云盘版类型。
   */
  MachineCode: string
  /**
   * 实例架构类型。
- REPLSET：副本集。
- SHARD：分片集群。
   */
  ClusterType: string
  /**
   * - 创建副本集实例，指副本集数量，该参数只能为1。
- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。
   */
  ReplicateSetNum: number
  /**
   * 项目ID。
- 若不设置该参数，则为默认项目。
- 在 [MongoDB 控制台项目管理](https://console.cloud.tencent.com/project)页面，可获取项目ID。
   */
  ProjectId?: number
  /**
   * 私有网络 ID。
- 仅支持配置私有网络，必须选择一个与实例同一地域的私有网络。请登录[私有网络控制台](https://console.cloud.tencent.com/vpc)获取可使用的私有网络 ID。
- 实例创建成功之后，支持更换私有网络。具体操作，请参见[更换网络](https://cloud.tencent.com/document/product/239/30910)。
   */
  VpcId?: string
  /**
   * 私有网络 VPC 的子网 ID。
- 必须在已选的私有网络内指定一个子网。请登录[私有网络控制台](https://console.cloud.tencent.com/vpc)获取可使用的子网 ID。
- 实例创建成功之后，支持更换私有网络及子网。具体操作，请参见[更换网络](https://cloud.tencent.com/document/product/239/30910)。
   */
  SubnetId?: string
  /**
   * 实例密码。设置要求如下：
- 字符个数为[8,32]。
- 可输入[A,Z]、[a,z]、[0,9]范围内的字符。
- 可输入的特殊字符包括：感叹号“!”，at“@”，警号“#”、百分号“%”、插入号“^”、星号“\*”、括号“()”、下划线“\_”。
- 不能设置单一的字母或者数字。
   */
  Password?: string
  /**
   * 实例标签信息。
   */
  Tags?: Array<TagInfo>
  /**
   * 自动续费标记。
- 0：不自动续费。
- 1：自动续费。
   */
  AutoRenewFlag?: number
  /**
   * 是否自动选择代金券。
- 1：是。
- 0：否。默认为0。
   */
  AutoVoucher?: number
  /**
   * 实例类型。
- 1：正式实例。
- 3：只读实例。
- 4：灾备实例。
- 5：克隆实例。注意：克隆实例 RestoreTime 为必填项。
   */
  Clone?: number
  /**
   * 父实例 ID。
- 当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制父实例 ID。
   */
  Father?: string
  /**
   * 安全组 ID。 请登录[安全组控制台](https://console.cloud.tencent.com/vpc/security-group)页面获取与数据库实例同地域的安全组 ID。
   */
  SecurityGroup?: Array<string>
  /**
   * 克隆实例回档时间，当Clone取值为5或6时为必填。- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。- 回档时间范围：仅能回档7天内时间点的数据。
   */
  RestoreTime?: string
  /**
   * 实例名称。仅支持长度为128个字符的中文、英文、数字、下划线\_、分隔符\-。批量购买数据库实例时，支持通过自定义命名模式串与数字后缀自动升序功能，高效设置实例名称。
- 基础模式：前缀＋自动升序编号（默认从1开始），**lnstanceName**仅需自定义实例名称前缀，例如设置为：cmgo，设置购买数量为5，则购买后，实例名称依次分别为cmgo1、cmgo2、cmgo3、cmgo4、cmgo5。
- 自定义起始序号模式：前缀+｛R:x｝（x为自定义起始序号）。**InstanceName**需填写“前缀｛R:x｝”，例如：cmgo｛R:3｝，设置购买数量为5，则实例名称为cmgo3、cmgo4、cmgo5、cmgo6、cmgo7。
- 复合模式串：前缀1{R:x}+前缀2{R:y}+ ⋯+固定后缀，x与y分别为每一段前缀的起始序号。**instanceName**需填写复合模式串，例如：cmgo{R:10}\_node{R:12}\_db，设置批量购买数量为5，则实例名称为 cmgo10\_node12\_db, cmgo11\_node13\_db, cmgo12\_node14\_db, cmgo13\_node15\_db, cluster14\_node16\_db. 
   */
  InstanceName?: string
  /**
   * 若多可用区部署云数据库实例，指定多可用区列表。
- 多可用区部署实例，参数 **Zone** 指定实例主可用区信息；**AvailabilityZoneList** 指定所有可用区信息，包含主可用区。输入格式如：[ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4]。
- 通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 可获取云数据库不同地域规划的可用区信息，以便指定有效的可用区。
- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。
   */
  AvailabilityZoneList?: Array<string>
  /**
   * Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。
   */
  MongosCpu?: number
  /**
   * Mongos 内存大小。
-  购买分片集群时，必须填写。
- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。
   */
  MongosMemory?: number
  /**
   * Mongos 数量。购买分片集群时，必须填写。
- 单可用区部署实例，其数量范围为[3,32]。
- 多可用区部署实例，其数量范围为[6,32]。
   */
  MongosNodeNum?: number
  /**
   * 只读节点数量，取值范围[0,5]。
   */
  ReadonlyNodeNum?: number
  /**
   * 指只读节点所属可用区数组。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。
   */
  ReadonlyNodeAvailabilityZoneList?: Array<string>
  /**
   * Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。
   */
  HiddenZone?: string
  /**
   * 参数模板 ID。
- 参数模板是预置了特定参数值的集合，可用于快速配置新的 MongoDB 实例。合理使用参数模板，能有效提升数据库的部署效率与运行性能。
- 参数模板 ID 可通过 [DescribeDBInstanceParamTpl ](https://cloud.tencent.com/document/product/240/109155)接口获取。请选择与实例版本与架构所对应的参数模板 ID。
   */
  ParamTemplateId?: string
}

/**
 * CreateDBInstanceParamTpl返回参数结构体
 */
export interface CreateDBInstanceParamTplResponse {
  /**
   * 模板ID
   */
  TplId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountUsers请求参数结构体
 */
export interface DescribeAccountUsersRequest {
  /**
   * 指定待获取账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeDBInstanceParamTpl请求参数结构体
 */
export interface DescribeDBInstanceParamTplRequest {
  /**
   * 参数模板 ID。请通过接口 [DescribeDBInstanceParamTpl](https://cloud.tencent.com/document/product/240/109155) 获取模板 ID。
   */
  TplIds?: Array<string>
  /**
   * 指定查询的模板名称。
   */
  TplNames?: Array<string>
  /**
   * 指定所需查询的参数模板的数据库版本号。具体支持的版本信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion?: Array<string>
  /**
   * 指定查询的模板类型。
- DEFAULT：系统默认模板。
- CUSTOMIZE：自定义模板。
   */
  TplType?: string
}

/**
 * CreateBackupDBInstance返回参数结构体
 */
export interface CreateBackupDBInstanceResponse {
  /**
   * 查询备份流程的状态。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库实例价格
 */
export interface DBInstancePrice {
  /**
   * 实例单价。单位：元。
   */
  UnitPrice: number
  /**
   * 实例原价。单位：元。
   */
  OriginalPrice: number
  /**
   * 实例折扣价。单位：元。
   */
  DiscountPrice: number
}

/**
 * KillOps请求参数结构体
 */
export interface KillOpsRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 待终止的操作。
   */
  Operations: Array<Operation>
}

/**
 * DescribeDBInstanceNamespace返回参数结构体
 */
export interface DescribeDBInstanceNamespaceResponse {
  /**
   * 查询实例的数据库列表。若未使用 DbName 指定具体查询的数据库，则仅返回查询实例所有的数据库列表，而不返回 Collections 集合信息。
   */
  Databases?: Array<string>
  /**
   * 查询的集合信息。指定 DbName 时，则仅返回该数据库下的集合列表。
   */
  Collections?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 实例ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 慢日志起始时间。
- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。
- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string
  /**
   * 慢日志终止时间。
- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。
- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
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
  /**
   * 慢日志返回格式。默认返回原生慢日志格式，4.4及以上版本可设置为json。
   */
  Format?: string
}

/**
 * FlushInstanceRouterConfig返回参数结构体
 */
export interface FlushInstanceRouterConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCurrentOp返回参数结构体
 */
export interface DescribeCurrentOpResponse {
  /**
   * 符合查询条件的操作总数。
   */
  TotalCount?: number
  /**
   * 当前操作列表。
   */
  CurrentOps?: Array<CurrentOp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetDBInstanceDeletionProtection请求参数结构体
 */
export interface SetDBInstanceDeletionProtectionRequest {
  /**
   * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceIds: Array<string>
  /**
   * 实例销毁保护选项，取值范围：0-关闭销毁保护，1-开启销毁保护
   */
  EnableDeletionProtection: number
}

/**
 * 实例可修改参数Multi类型集合。
 */
export interface InstanceMultiParam {
  /**
   * 参数当前值。
   */
  CurrentValue?: string
  /**
   * 参数默认值。
   */
  DefaultValue?: string
  /**
   * 参考值范围。
   */
  EnumValue?: Array<string>
  /**
   * 参数修改后是否需要重启才会生效。
- 1：需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart?: string
  /**
   * 参数名称。
   */
  ParamName?: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status?: number
  /**
   * 参数说明。
   */
  Tips?: Array<string>
  /**
   * 当前值的类型描述，默认为multi。
   */
  ValueType?: string
}

/**
 * ModifyInstanceParams返回参数结构体
 */
export interface ModifyInstanceParamsResponse {
  /**
   * 修改参数配置是否生效。
- true：参数修改后的值已生效。
- false：执行失败。

   */
  Changed?: boolean
  /**
   * 该参数暂时无意义(兼容前端保留)。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetInstanceMaintenance返回参数结构体
 */
export interface SetInstanceMaintenanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupRules返回参数结构体
 */
export interface DescribeBackupRulesResponse {
  /**
   * 备份数据保留期限。单位为：天。
   */
  BackupSaveTime?: number
  /**
   * 自动备份开始时间。
   */
  BackupTime?: number
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
   */
  BackupMethod?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceNamespace请求参数结构体
 */
export interface DescribeDBInstanceNamespaceRequest {
  /**
   * 指定查询数据库所属的实例 ID，支持批量查询。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 指定查询的数据库名。为空时，返回当前实例的全部数据库列表。
   */
  DbName?: string
}

/**
 * 用于描述MongoDB数据库慢日志统计信息
 */
export interface SlowLogPattern {
  /**
   * 慢日志输出格式：库名.表名.命令。
   */
  Pattern?: string
  /**
   * 记录慢日志时所带的queryHash 值，标识一类查询。
   */
  QueryHash?: string
  /**
   * 最大执行时间。单位：毫秒。
   */
  MaxTime?: number
  /**
   * 平均执行时间。单位：毫秒。
   */
  AverageTime?: number
  /**
   * 慢日志条数。
   */
  Total?: number
}

/**
 * AssignProject返回参数结构体
 */
export interface AssignProjectResponse {
  /**
   * 返回的异步任务ID列表。
   */
  FlowIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceDeal返回参数结构体
 */
export interface DescribeDBInstanceDealResponse {
  /**
   * 订单状态。
- 1：未支付。
- 2：已支付。
- 3：发货中。
- 4：发货成功。
- 5：发货失败。
- 6：退款。
- 7：订单关闭。
- 8：超时未支付关闭。
   */
  Status?: number
  /**
   * 订单原价。单位：元。
   */
  OriginalPrice?: number
  /**
   * 订单折扣价格。单位：元。
   */
  DiscountPrice?: number
  /**
   * 订单操作行为。
- purchase：新购。
- renew：续费。
- upgrade：升配.
- downgrade：降配.
- refund：退货退款。
   */
  Action?: string
  /**
   * 当前订单的实例 ID。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改mongoDB实例，请求参数
 */
export interface ModifyMongoDBParamType {
  /**
   * 需要修改的参数名称，请严格参考通过 DescribeInstanceParams 获取的当前实例支持的参数名。
   */
  Key: string
  /**
   * 需要修改的参数名称对应的值，请严格参考通过 DescribeInstanceParams 获取的参数对应的值的范围。
   */
  Value: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstanceParamTpl请求参数结构体
 */
export interface CreateDBInstanceParamTplRequest {
  /**
   * 参数模板名称。
   */
  TplName: string
  /**
   * 参数模板版本号。当**MirrorTplId**为空时，该字段必填。参数模板支持的售卖版本，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/35767) 获取。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion?: string
  /**
   * 实例类型。当 MirrorTplId 为空值时，该参数必填。
- REPLSET：副本集实例。
- SHARD：分片实例。
- STANDALONE：单节点实例。
   */
  ClusterType?: string
  /**
   * 模板描述信息。
   */
  TplDesc?: string
  /**
   * 模板参数，若不配置该参数，则以系统默认模板作为新版本参数。
   */
  Params?: Array<ParamType>
  /**
   * 镜像模板 ID。若指定镜像模板，则以该模板为镜像，克隆出一个新的模板。
   **注意**：MirrorTplId 不为空值时，MongoVersion 及 ClusterType 将以 MirrorTpl 模板的版本及实例类型为准。
   */
  MirrorTplId?: string
}

/**
 * DescribeSecurityGroup请求参数结构体
 */
export interface DescribeSecurityGroupRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * RenameInstance请求参数结构体
 */
export interface RenameInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。请登录[MongoDB 控制台](https://console.cloud.tencent.com/mongodb#/)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 自定义实例名称，要求为1～128 长度的任意字符。
   */
  NewName: string
}

/**
 * DescribeBackupRules请求参数结构体
 */
export interface DescribeBackupRulesRequest {
  /**
   * 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeBackupDownloadTask返回参数结构体
 */
export interface DescribeBackupDownloadTaskResponse {
  /**
   * 满足查询条件的所有条数。
   */
  TotalCount?: number
  /**
   * 下载任务列表。
   */
  Tasks?: Array<BackupDownloadTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改实例节点详情。
 */
export interface AddNodeList {
  /**
   * 需要新增的节点角色。
- SECONDARY：Mongod 节点。
- READONLY：只读节点。
- MONGOS：Mongos 节点。
   */
  Role: string
  /**
   * 节点所对应的可用区。当前支持的可用区，请参见[地域和可用区](https://cloud.tencent.com/document/product/240/3637)。
- 单可用区，所有节点在同一可用区。
- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置新增节点对应的可用区，且新增后必须满足任意2个可用区节点数大于第3个可用区原则。
   */
  Zone: string
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
  InstanceId?: string
  /**
   * 地域信息
   */
  Region?: string
}

/**
 * 数据库参数
 */
export interface ParamType {
  /**
   * 参数
   */
  Key: string
  /**
   * 参数值
   */
  Value: string
}

/**
 * SetAccountUserPrivilege返回参数结构体
 */
export interface SetAccountUserPrivilegeResponse {
  /**
   * 任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按 Key 闪回的数据库及集合信息
 */
export interface FlashbackDatabase {
  /**
   * 按 Key 闪回目标数据所在库。
   */
  DBName: string
  /**
   * 按 Key 闪回的数据库集合。
   */
  Collections: Array<FlashbackCollection>
}

/**
 * ModifyDBInstanceNetworkAddress请求参数结构体
 */
export interface ModifyDBInstanceNetworkAddressRequest {
  /**
   * 指定需修改网络的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 原 IP 地址保留时长。
- 单位为分钟，0表示立即回收原 IP 地址。
- 原 IP 将在约定时间后释放，在释放前原 IP和新 IP均可访问。

   */
  OldIpExpiredTime: number
  /**
   * 切换后的私有网络 ID，若实例当前为基础网络，该字段无需配置。
   */
  NewUniqVpcId: string
  /**
   * 切换私有网络的子网 ID。若实例当前为基础网络，该字段无需配置。
   */
  NewUniqSubnetId: string
  /**
   * IP 地址信息，包含新 IP 地址与 原 IP 地址。
   */
  NetworkAddresses?: Array<ModifyNetworkAddress>
}

/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
  /**
   * 订单ID。
   */
  DealId?: string
  /**
   * 创建的实例ID列表。
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropDBInstanceParamTpl返回参数结构体
 */
export interface DropDBInstanceParamTplResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableTransparentDataEncryption请求参数结构体
 */
export interface EnableTransparentDataEncryptionRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。目前支持通用版本包含：4.4、5.0，云盘版暂不支持。
   */
  InstanceId: string
  /**
   *  [密钥管理系统（Key Management Service，KMS）](https://cloud.tencent.com/document/product/573/18809)服务所在地域，例如 ap-shanghai。
   */
  KmsRegion: string
  /**
   * 密钥 ID。若不设置该参数，不指定具体的密钥 ID，由腾讯云自动生成密钥。
   */
  KeyId?: string
}

/**
 * DeleteAccountUser请求参数结构体
 */
export interface DeleteAccountUserRequest {
  /**
   * 指定待删除账号的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 配置待删除的账号名。
   */
  UserName: string
  /**
   * 配置 mongouser 对应的密码。mongouser为系统默认账号，输入其对应的密码。
   */
  MongoUserPassword: string
}

/**
 * mongodb售卖规格。
 */
export interface SpecItem {
  /**
   * 规格信息标识。格式如：mongo.HIO10G.128g。由节点类型、规格类型、内存规格三部分组成。
- 节点类型：**mongo**，指 Mongod 节点；**mongos**，指 Mongos 节点；**cfgstr**，指 Configserver 节点。
- 规格类型：**HIO10G**，指通用高HIO万兆型；**HCD**：指云盘版类型。
- 内存规格：支持4、8、16、32、64、128、240、512。单位g：表示GB。128g 则表示128GB。
   */
  SpecCode?: string
  /**
   * 售卖规格有效标志，取值范围如下：
- 0：停止售卖，
- 1：开放售卖。
   */
  Status?: number
  /**
   * 计算资源规格，CPU核数。
   */
  Cpu?: number
  /**
   * 内存规格，单位为：MB。
   */
  Memory?: number
  /**
   * 默认磁盘规格，单位为：MB。
   */
  DefaultStorage?: number
  /**
   * 最大磁盘规格，单位为：MB。
   */
  MaxStorage?: number
  /**
   * 最小磁盘规格，单位为：MB。
   */
  MinStorage?: number
  /**
   * 指每秒最大请求次数，单位为：次/秒。
   */
  Qps?: number
  /**
   * 规格所支持的最大连接数限制。
   */
  Conns?: number
  /**
   * 实例存储引擎版本信息。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersionCode?: string
  /**
   * 实例版本对应的数字版本。
   */
  MongoVersionValue?: number
  /**
   * 实例版本信息。支持：4.2、4.4、5.0、6.0、7.0。
   */
  Version?: string
  /**
   * 存储引擎。
   */
  EngineName?: string
  /**
   * 集群类型，取值如下：
- 1：分片集群。
- 0：副本集集群。
   */
  ClusterType?: number
  /**
   * 每个副本集最小节点数。
   */
  MinNodeNum?: number
  /**
   * 每个副本集最大节点数。
   */
  MaxNodeNum?: number
  /**
   * 最小分片数。
   */
  MinReplicateSetNum?: number
  /**
   * 最大分片数。
   */
  MaxReplicateSetNum?: number
  /**
   * 每个分片最小节点数。
   */
  MinReplicateSetNodeNum?: number
  /**
   * 每个分片最大节点数。
   */
  MaxReplicateSetNodeNum?: number
  /**
   * 集群的规格类型，取值范围如下：
- HIO10G：通用高HIO万兆型。
- HCD：云盘版类型。
   */
  MachineType?: string
}

/**
 * DescribeDetailedSlowLogs请求参数结构体
 */
export interface DescribeDetailedSlowLogsRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 指定查询慢日志的开始时间。- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string
  /**
   * 指定查询慢日志的结束时间。
- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。
- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  EndTime: string
  /**
   * 指定慢日志查询阈值，即查询执行时间大于此值的慢日志。单位：ms，默认值：100。
   */
  ExecTime?: number
  /**
   * 指定查询慢日志的命令类型。
   */
  Commands?: Array<string>
  /**
   * 全文搜索关键字，多个关键字间为或关系。
   */
  Texts?: Array<string>
  /**
   * 指定查询慢日志的节点名称。请通过接口 [DescribeDBInstanceNodeProperty](https://cloud.tencent.com/document/product/240/82022) 查询节点名称。
   */
  NodeNames?: Array<string>
  /**
   * 指定查询 queryHash 值。
   */
  QueryHash?: Array<string>
  /**
   * 分页偏移量。默认值：0。取值范围：[0,100]。

   */
  Offset?: number
  /**
   * 返回条数。默认值：20。取值范围：[0,10000]
   */
  Limit?: number
  /**
   * 指定慢日志排序条件。
- StartTime：按照慢日志生成时间排序。
- ExecTime：按照慢日志执行时间排序。
   */
  OrderBy?: string
  /**
   * 指定排序方式。
- desc：倒序。
- asc：顺序。
   */
  OrderByType?: string
}

/**
 * ModifyDBInstanceNetworkAddress返回参数结构体
 */
export interface ModifyDBInstanceNetworkAddressResponse {
  /**
   * 修改网络异步流程任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropDBInstanceParamTpl请求参数结构体
 */
export interface DropDBInstanceParamTplRequest {
  /**
   * 参数模板 ID。请通过接口 [DescribeDBInstanceParamTpl](https://cloud.tencent.com/document/product/240/109155) 获取模板 ID。
   */
  TplId: string
}

/**
 * CreateAccountUser返回参数结构体
 */
export interface CreateAccountUserResponse {
  /**
   * 创建任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建备份下载任务结果。
 */
export interface BackupDownloadTaskStatus {
  /**
   * 分片名。
   */
  ReplicaSetId?: string
  /**
   * 任务当前状态。
- 0：等待执行。
- 1：正在下载。
- 2：下载完成。
- 3：下载失败。
- 4：等待重试。
   */
  Status?: number
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 慢日志总数。
   */
  Count?: number
  /**
   * 慢日志详情。
   */
  SlowLogs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceModifyDBInstanceSpec请求参数结构体
 */
export interface InquirePriceModifyDBInstanceSpecRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 变更配置后实例内存大小，单位：GB。具体售卖的内存规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Memory: number
  /**
   * 变更配置后实例磁盘大小，单位：GB。每一个 CPU 规格对应的最大磁盘与最小磁盘范围，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Volume: number
  /**
   * 实例节点数量。请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 副本集实例，指变更配置后实例的主从节点数量。
- 分片集群实例，指变更配置后实例每一个分片的主从节点数。
**说明**：切勿同时发起调整节点数、调整分片数、调整节点规格的任务。
   */
  NodeNum?: number
  /**
   * 分片集群实例，指变更配置后实例的分片数量。取值范围：[2,36] 。
   **说明**：变更后的分片数量不能小于当前现有的数量。切勿同时发起调整节点数、调整分片数与调整节点规格的任务。
   */
  ReplicateSetNum?: number
}

/**
 * 备份信息。
 */
export interface BackupInfo {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 备份方式。
- 0：自动备份。
- 1：手动备份。
   */
  BackupType?: number
  /**
   * 备份文件名称。
   */
  BackupName?: string
  /**
   * 备份任务备注信息。
   */
  BackupDesc?: string
  /**
   * 备份文件大小，单位：KB。
   */
  BackupSize?: number
  /**
   * 备份开始时间。
   */
  StartTime?: string
  /**
   * 备份结束时间。
   */
  EndTime?: string
  /**
   * 备份状态。
- 1：备份中。
- 2：备份成功。
   */
  Status?: number
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
- 3：快照备份。
**说明:**
- 通用版实例支持逻辑备份与物理备份。云盘版实例支持物理备份与快照备份，暂不支持逻辑备份。
- 实例开通存储加密，则备份方式不能为物理备份。
   */
  BackupMethod?: number
  /**
   * 备份记录 ID。
   */
  BackId?: number
  /**
   * 备份删除时间。
   */
  DeleteTime?: string
  /**
   * 异地备份地域。
   */
  BackupRegion?: string
  /**
   * 备份支持的回档时间。
   */
  RestoreTime?: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 实例 ID 列表。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceIds?: Array<string>
  /**
   * 指定查询的实例类型。取值范围如下：
- 0：所有实例。
- 1：正式实例。
- 2：临时实例
- 3：只读实例。
- -1：查询同时包括正式实例、只读实例与灾备实例。
   */
  InstanceType?: number
  /**
   * 指定所查询实例的集群类型，取值范围如下：
- 0：副本集实例。
- 1：分片实例。
- -1：副本集与分片实例。
   */
  ClusterType?: number
  /**
   * 指定所查询实例的当前状态，取值范围如下所示：
- 0：待初始化。
- 1：流程处理中，例如：变更规格、参数修改等。
- 2：实例正常运行中。
- -2：已隔离（包年包月）。
- -3：已隔离（按量计费）。
   */
  Status?: Array<number | bigint>
  /**
   * 私有网络的 ID。
- 基础网络则无需配置该参数。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其 ID。
   */
  VpcId?: string
  /**
   * 私有网络的子网ID。
- 基础网络则无需配置该参数。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其子网 ID。
   */
  SubnetId?: string
  /**
   * 指定所查询实例的付费类型。
- 0：查询按量计费实例。
- 1：查询包年包月实例。
- -1：查询按量计费与包年包月实例。
   */
  PayMode?: number
  /**
   * 单次请求返回的数量。默认值为20，取值范围为(1,100]。
   */
  Limit?: number
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 配置返回结果排序依据的字段。目前支持依据"ProjectId"、"InstanceName"、"CreateTime"排序。
   */
  OrderBy?: string
  /**
   * 配置返回结果的排序方式。
- ASC：升序。
- DESC：降序。
   */
  OrderByType?: string
  /**
   * 项目 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)，在右上角的账户信息下拉菜单中，选择项目管理查询项目。
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 指定查询搜索的关键词。支持设置为具体的实例ID、实例名称或者内网 IP 地址。
   */
  SearchKey?: string
  /**
   * 标签信息，包含标签键与标签值。
   */
  Tags?: Array<TagInfo>
}

/**
 * 云数据库实例当前操作
 */
export interface CurrentOp {
  /**
   * 操作序号。
   */
  OpId?: number
  /**
   * 操作所在的命名空间，形式如db.collection。
   */
  Ns?: string
  /**
   * 操作执行语句。
   */
  Query?: string
  /**
   * 操作类型。
- none：特殊状态，空闲连接或内部任务等。
- update：更新数据。
- insert：插入操作。
- query：查询操作。
- command：命令操作。
- getmore：获取更多数据。
- remove：删除操作。
- killcursors：释放查询游标的操作。
   */
  Op?: string
  /**
   * 操作所在的分片名称。
   */
  ReplicaSetName?: string
  /**
   * 操作所在的节点名称。
   */
  NodeName?: string
  /**
   * 操作详细信息。
   */
  Operation?: string
  /**
   * 节点角色。
- primary：主节点。
- secondary：从节点。
   */
  State?: string
  /**
   * 操作已执行时间（ms）。
   */
  MicrosecsRunning?: number
  /**
   * 当前操作所在节点信息。
   */
  ExecNode?: string
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 */
export interface ModifyDBInstanceSpecRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 实例配置变更后的内存大小。单位：GB。该参数为空值时，默认取实例当前的内存大小。当前所支持的内存规格，请参见[产品规格](https://cloud.tencent.com/document/product/240/64125)。
   **注意**：内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。
   */
  Memory?: number
  /**
   * 实例配置变更后的硬盘大小，单位：GB。该参数为空值时，默认取当前实例的磁盘大小。当前所支持的磁盘容量，请参见[产品规格](https://cloud.tencent.com/document/product/240/64125)。
- 内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。
- 降配时，变更后的磁盘容量必须大于已用磁盘容量的1.2倍。
   */
  Volume?: number
  /**
   * (已废弃) 请使用ResizeOplog独立接口完成。

实例配置变更后 Oplog 的大小。
- 单位：GB。
- 默认 Oplog 占用容量为磁盘空间的10%。系统允许设置的 Oplog 容量范围为磁盘空间的[10%,90%]。
   * @deprecated
   */
  OplogSize?: number
  /**
   * 实例变更后 mongod 的节点数（不包含 readonly 只读节点数）。
-  副本集节点数：请通过 [DescribeSpecInfo ](https://cloud.tencent.com/document/product/240/38567)接口返回的参数 MinNodeNum 与 MaxNodeNum 获取节点数量取值范围。
-  分片集群每个分片节点数：请通过 [DescribeSpecInfo ](https://cloud.tencent.com/document/product/240/38567)接口返回的参数 MinReplicateSetNodeNum 与 MaxReplicateSetNodeNum 获取节点数量取值范围。
**说明**：变更 mongod 或 mongos 的 CPU 与内存规格时，该参数可以不配置或者输入当前 mongod 或 mongos（不包含readonly）节点数量。
   */
  NodeNum?: number
  /**
   * 实例变更后的分片数。
- 请通过 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 接口返回的参数**MinReplicateSetNum**与**MaxReplicateSetNum**获取实例分片数取值范围。
- 实例分片数量只允许增加不允许减少。
   */
  ReplicateSetNum?: number
  /**
   * 实例配置变更的切换时间。
- 0：调整完成时，立即执行变配任务。默认为0。
- 1：在维护时间窗内，执行变配任务。
**说明**：调整节点数和分片数不支持在<b>维护时间窗内</b>变更。
   */
  InMaintenance?: number
  /**
   * 分片实例配置变更后的 mongos 内存大小。单位：GB。实例支持的规格，请参见[产品规格](https://cloud.tencent.com/document/product/240/64125)。
   */
  MongosMemory?: string
  /**
   * 新增节点列表，节点类型及可用区信息。
   */
  AddNodeList?: Array<AddNodeList>
  /**
   * 删除节点列表。
   **注意**：基于分片实例各片节点的一致性原则，删除分片实例节点时，只需指定0分片对应的节点即可，如：cmgo-9nl1czif_0-node-readonly0 将删除每个分片的第1个只读节点。
   */
  RemoveNodeList?: Array<RemoveNodeList>
}

/**
 * 用户权限
 */
export interface Auth {
  /**
   * 当前账号具有的权限信息。
- 0：无权限。
- 1：只读。
- 3：读写。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mask: number
  /**
   * 指具有当前账号权限的数据库名。
- \* ：表示所有数据库。
- db.name：表示特定 name 的数据库。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameSpace: string
}

/**
 * FlashBackDBInstance请求参数结构体
 */
export interface FlashBackDBInstanceRequest {
  /**
   * 开启按 Key 回档的实例 ID。
   */
  InstanceId: string
  /**
   * 源数据想恢复到的时间。
   */
  TargetFlashbackTime: string
  /**
   * 源数据所在的库表信息。
   */
  TargetDatabases: Array<FlashbackDatabase>
  /**
   * 数据最终写入的实例 ID。
   */
  TargetInstanceId?: string
}

/**
 * TerminateDBInstances返回参数结构体
 */
export interface TerminateDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetDBInstancePassword请求参数结构体
 */
export interface ResetDBInstancePasswordRequest {
  /**
   * 指定实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 指定需修改密码的账号名称。可通过接口 [DescribeAccountUsers](https://cloud.tencent.com/document/product/240/80800) 获取账号列表，复制需修改密码的账号。
   */
  UserName: string
  /**
   * 指定账户的新密码。密码复杂度要求：
- 8-32个字符长度。
- 至少包含字母、数字和字符（!@#%^\*()\_）中的两种。
   */
  Password: string
}

/**
 * 实例可修改参数 Integer 类型集合。
 */
export interface InstanceIntegerParam {
  /**
   * 参数当前值。
   */
  CurrentValue?: string
  /**
   * 参数默认值。
   */
  DefaultValue?: string
  /**
   * 参数最大值。
   */
  Max?: string
  /**
   * 最小值。
   */
  Min?: string
  /**
   * 参数修改之后是否需要重启生效。
- 1:需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart?: string
  /**
   * 参数名称。
   */
  ParamName?: string
  /**
   * 参数说明。
   */
  Tips?: Array<string>
  /**
   * 参数类型。
   */
  ValueType?: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status?: number
  /**
   * 冗余字段，可忽略。
   */
  Unit?: string
}

/**
 * 修改数据库地址
 */
export interface ModifyNetworkAddress {
  /**
   * 新IP地址。
   */
  NewIPAddress: string
  /**
   * 原IP地址。
   */
  OldIpAddress: string
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 */
export interface DescribeAsyncRequestInfoResponse {
  /**
   * 状态。返回参数有：initial-初始化、running-运行中、paused-任务执行失败，已暂停、undoed-任务执行失败，已回滚、failed-任务执行失败, 已终止、success-成功
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccountUser请求参数结构体
 */
export interface CreateAccountUserRequest {
  /**
   * 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 新账号名称。其格式要求如下：
- 字符范围[1,64]。
- 可输入[A,Z]、[a,z]、[1,9]范围的字符以及下划线“\_”与短划线“-”。
   */
  UserName: string
  /**
   * 新账号密码。密码复杂度要求如下：
- 字符长度范围[8,32]。
- 至少包含字母、数字和特殊字符（叹号“!”、at"@"、井号“#”、百分号“%”、插入符“^”、星号“\*”、小括号“()”、下划线“\_”）中的两种。
   */
  Password: string
  /**
   * mongouser 账号对应的密码。mongouser 为系统默认账号，即为创建实例时，设置的密码。
   */
  MongoUserPassword?: string
  /**
   * 账号备注信息。
   */
  UserDesc?: string
  /**
   * 账号的读写权限信息。
   */
  AuthRole?: Array<Auth>
}

/**
 * 实例可修改参数为 Text 类型的参数集合。
 */
export interface InstanceTextParam {
  /**
   * 参数当前值。
   */
  CurrentValue?: string
  /**
   * 参数默认值。
   */
  DefaultValue?: string
  /**
   * 修改参数值之后是否需要重启。
   */
  NeedRestart?: string
  /**
   * 参数名称。
   */
  ParamName?: string
  /**
   * Text 类型参数对应的值。
   */
  TextValue?: string
  /**
   * 参数说明。
   */
  Tips?: Array<string>
  /**
   * 参数值类型说明。
   */
  ValueType?: string
  /**
   * 是否为运行中的参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status?: string
}

/**
 * ModifyDBInstanceSecurityGroup请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupRequest {
  /**
   * 实例 ID。例如：cmgo-7pje****。
   */
  InstanceId: string
  /**
   * 目标安全组 ID。请通过接口[DescribeSecurityGroup](https://cloud.tencent.com/document/product/240/55675)查看具体的安全组 ID。
   **注意**：该入参会全量替换存量已有集合，非增量更新。修改需传入预期的全量集合。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DescribeAccountUsers返回参数结构体
 */
export interface DescribeAccountUsersResponse {
  /**
   * 实例账号列表。
   */
  Users?: Array<UserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewDBInstances请求参数结构体
 */
export interface InquirePriceRenewDBInstancesRequest {
  /**
   * 实例ID。请登录[MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID，且单次最多同时查询5个实例。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}

/**
 * DescribeBackupDownloadTask请求参数结构体
 */
export interface DescribeBackupDownloadTaskRequest {
  /**
   * 实例ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 指定备份文件名，用于过滤指定文件的下载任务。请通过接口 [DescribeDBBackups](https://cloud.tencent.com/document/product/240/38574) 获取备份文件名。
   */
  BackupName?: string
  /**
   * 指定查询时间范围内的任务，StartTime 指定开始时间。若不指定开始时间，则默认不限制开始时间。
   */
  StartTime?: string
  /**
   * 指定查询时间范围内的任务，EndTime 指定截止时间。若不指定截止时间，则默认不限制截止时间。
   */
  EndTime?: string
  /**
   * 此次查询返回的条数，取值范围为1-100，默认为20。
   */
  Limit?: number
  /**
   * 指定此次查询返回的页数，默认为0。
   */
  Offset?: number
  /**
   * 排序字段。
- createTime：按照备份下载任务的创建时间排序。默认为 createTime。
- finishTime：按照备份下载任务的完成时间排序。
   */
  OrderBy?: string
  /**
   * 排序方式。
- asc：升序排列。
- desc：降序排列。默认为 desc。
   */
  OrderByType?: string
  /**
   * 指定任务状态，用于过滤下载任务。若不配置该参数，则返回所有状态类型的任务。
- 0：等待执行。
- 1：正在下载。
- 2：下载完成。
- 3：下载失败。
- 4：等待重试。
   */
  Status?: Array<number | bigint>
}

/**
 * 需要终止的操作。
 */
export interface Operation {
  /**
   * 操作所在的分片名称。请通过接口 [DescribeCurrentOp](https://cloud.tencent.com/document/product/240/48120) 查询分片名称。
   */
  ReplicaSetName: string
  /**
   * 操作所在的节点名。请通过接口 [DescribeCurrentOp](https://cloud.tencent.com/document/product/240/48120) 查询节点名称。
   */
  NodeName: string
  /**
   * 操作序号。请通过接口 [DescribeCurrentOp](https://cloud.tencent.com/document/product/240/48120) 查询操作序号。
   */
  OpId: number
}

/**
 * DescribeClientConnections返回参数结构体
 */
export interface DescribeClientConnectionsResponse {
  /**
   * 客户端连接信息，包括客户端 IP 和对应 IP 的连接数量。
   */
  Clients?: Array<ClientConnection>
  /**
   * 满足条件的记录总条数，可用于分页查询。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceParamTpl返回参数结构体
 */
export interface ModifyDBInstanceParamTplResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateDBInstances请求参数结构体
 */
export interface TerminateDBInstancesRequest {
  /**
   * 指定预隔离实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制预隔离实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
  /**
   * 备份列表。
   */
  BackupList?: Array<BackupInfo>
  /**
   * 备份总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroup返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账户基本信息
 */
export interface UserInfo {
  /**
   * 账号名。
   */
  UserName?: string
  /**
   * 账号权限详情。
   */
  AuthRole?: Array<Auth>
  /**
   * 账号创建时间。
   */
  CreateTime?: string
  /**
   * 账号更新时间。
   */
  UpdateTime?: string
  /**
   * 备注信息。
   */
  UserDesc?: string
  /**
   * 控制台密码更新时间
   */
  ConsolePassUpdateTime?: string
}

/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
  /**
   * 指定待查询参数列表的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * 节点Tag
 */
export interface NodeTag {
  /**
   * 节点Tag key
   */
  TagKey?: string
  /**
   * 节点Tag Value
   */
  TagValue?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroup返回参数结构体
 */
export interface DescribeSecurityGroupResponse {
  /**
   * 实例绑定的安全组信息。
   */
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTransparentDataEncryptionStatus请求参数结构体
 */
export interface DescribeTransparentDataEncryptionStatusRequest {
  /**
   * 指定实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * 安全组信息
 */
export interface SecurityGroup {
  /**
   * 所属项目 ID。
   */
  ProjectId?: number
  /**
   * 安全组创建时间。
   */
  CreateTime?: string
  /**
   * 安全组入站规则。
   */
  Inbound?: Array<SecurityGroupBound>
  /**
   * 安全组出站规则。
   */
  Outbound?: Array<SecurityGroupBound>
  /**
   * 安全组 ID。
   */
  SecurityGroupId?: string
  /**
   * 安全组名称。
   */
  SecurityGroupName?: string
  /**
   * 安全组备注信息。
   */
  SecurityGroupRemark?: string
}

/**
 * 分片信息。
 */
export interface ReplicaSetInfo {
  /**
   * 副本集 ID。
   */
  ReplicaSetId: string
}

/**
 * ResetDBInstancePassword返回参数结构体
 */
export interface ResetDBInstancePasswordResponse {
  /**
   * 任务请求 ID。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户端连接信息，包括客户端IP和连接数
 */
export interface ClientConnection {
  /**
   * 连接的客户端 IP。
   */
  IP?: string
  /**
   * 对应客户端 IP 的连接数。
   */
  Count?: number
  /**
   * 是否为内部 IP。
   */
  InternalService?: boolean
}

/**
 * 副本集信息
 */
export interface ReplicateSetInfo {
  /**
   * 节点属性
   */
  Nodes?: Array<NodeProperty>
}

/**
 * DescribeDBInstanceDeal请求参数结构体
 */
export interface DescribeDBInstanceDealRequest {
  /**
   * 订单 ID。
- 按量计费实例，请通过 [CreateDBInstanceHour](https://cloud.tencent.com/document/product/240/38570) 接口输出的参数**DealId**获取。。
- 包年包月计费实例，请通过 [CreateDBInstance](https://cloud.tencent.com/document/product/240/38571) 接口输出的参数**DealId**获取。
   */
  DealId: string
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
 * 按 Key 闪回键值对
 */
export interface FBKeyValue {
  /**
   * 指定按 Key 闪回的目标 Key （键） 。
   */
  Key?: string
  /**
   * 指定按 Key 闪回的目标 Key 所对应的 Value（值）。
   */
  Value?: string
}

/**
 * CreateBackupDownloadTask请求参数结构体
 */
export interface CreateBackupDownloadTaskRequest {
  /**
   * 实例ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 要下载的备份文件名。请通过 [DescribeDBBackups](https://cloud.tencent.com/document/product/240/38574) 接口获取。
   */
  BackupName: string
  /**
   * 指定要下载的副本集节点 ID 或分片集群的分片节点 ID 列表。
- 如副本集实例 ID 为 cmgo-p8vnipr5，示例：BackupSets.0=cmgo-p8vnipr5_0，可下载全量数据。
- 如分片集群实例 ID 为 cmgo-p8vnipr5，示例：BackupSets.0=cmgo-p8vnipr5_0&BackupSets.1=cmgo-p8vnipr5_1，即下载分片0和分片1的数据。分片集群如需全量下载，请按示例方式传入全部分片名称。
   */
  BackupSets: Array<ReplicaSetInfo>
}

/**
 * 数据库参数模板
 */
export interface ParamTpl {
  /**
   * 参数模板名称。
   */
  TplName?: string
  /**
   * 参数模板 ID。
   */
  TplId?: string
  /**
   * 参数模板适用的数据库版本。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion?: string
  /**
   * 参数模板适用的数据库类型。
- REPLSET：副本集实例。
- SHARD：分片实例。
- STANDALONE：单节点实例。
   */
  ClusterType?: string
  /**
   * 参数模板描述。
   */
  TplDesc?: string
  /**
   * 模板类型。
- DEFAULT：系统默认模板。
- CUSTOMIZE：自定义模板。
   */
  TplType?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则
 */
export interface SecurityGroupBound {
  /**
   * 执行策略。
- ACCEPT：允许，放行该端口相应的访问请求。
- DROP：拒绝，直接丢弃数据包，不返回任何回应信息。
   */
  Action?: string
  /**
   * 访问数据库的入站 IP 或 IP 段。
   */
  CidrIp?: string
  /**
   * 访问数据库的端口。
   */
  PortRange?: string
  /**
   * 传输层协议：tcp。
   */
  IpProtocol?: string
  /**
   * 安全组 ID。
   */
  Id?: string
  /**
   * IP 地址或 IP 地址组参数模板 ID。请登录[参数模板控制台](https://console.cloud.tencent.com/vpc/template/ip)获取参数模板 IP 地址详情。
   */
  AddressModule?: string
  /**
   * 协议端口或协议端口组参数模板 ID。请登录[参数模板控制台](https://console.cloud.tencent.com/vpc/template/protoport)获取参数模板协议端口详情。
   */
  ServiceModule?: string
  /**
   * 安全组描述信息。
   */
  Desc?: string
}

/**
 * DescribeDBInstanceNodeProperty返回参数结构体
 */
export interface DescribeDBInstanceNodePropertyResponse {
  /**
   * Mongos节点属性。
   */
  Mongos?: Array<NodeProperty>
  /**
   * 副本集节点信息。
   */
  ReplicateSets?: Array<ReplicateSetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceParamTplDetail返回参数结构体
 */
export interface DescribeDBInstanceParamTplDetailResponse {
  /**
   * 枚举类参数详情列表。
   */
  InstanceEnumParams?: Array<InstanceEnumParam>
  /**
   * 整形参数详情列表。
   */
  InstanceIntegerParams?: Array<InstanceIntegerParam>
  /**
   * 文本参数详情列表。
   */
  InstanceTextParams?: Array<InstanceTextParam>
  /**
   * 多值参数详情列表。
   */
  InstanceMultiParams?: Array<InstanceMultiParam>
  /**
   * 参数总个数。
   */
  TotalCount?: number
  /**
   * 模板适配的实例版本。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本，
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion?: string
  /**
   * 模板适配集群类型。
- REPLSET：副本集实例。
- SHARD：分片实例。
- STANDALONE：单节点实例。
   */
  ClusterType?: string
  /**
   * 参数模板名称。
   */
  TplName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceParamTpl请求参数结构体
 */
export interface ModifyDBInstanceParamTplRequest {
  /**
   * 待修改的参数模板 ID。请通过接口 [DescribeDBInstanceParamTpl](https://cloud.tencent.com/document/product/240/109155) 获取模板 ID。
   */
  TplId: string
  /**
   * 待修改参数模板名称，为空时，保持原有名称。
   */
  TplName?: string
  /**
   * 待修改参数模板描述，为空时，保持原有描述。
   */
  TplDesc?: string
  /**
   * 待修改参数名及参数值，为空时，各参数保持原有值，支持单条或批量修改。
   */
  Params?: Array<ParamType>
}

/**
 * DescribeCurrentOp请求参数结构体
 */
export interface DescribeCurrentOpRequest {
  /**
   * 指定要查询的实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 操作所属的命名空间 namespace，格式为 db.collection。
   */
  Ns?: string
  /**
   * 设置查询筛选条件为操作任务已经执行的时间。
- 默认值为0，取值范围为[0, 3600000]，单位：毫秒。
- 结果将返回超过设置时间的操作。
   */
  MillisecondRunning?: number
  /**
   * 设置查询筛选条件为操作任务类型。取值包括：
- none：特殊状态，空闲连接或内部任务等。
- update：更新数据。
- insert：插入操作。
- query：查询操作。
- command：命令操作。
- getmore：获取更多数据。
- remove：删除操作。
- killcursors：释放查询游标的操作。
   */
  Op?: string
  /**
   * 筛选条件，分片名称。
   */
  ReplicaSetName?: string
  /**
   * 设置查询筛选条件为节点角色。
- primary：主节点。
- secondary：从节点。
   */
  State?: string
  /**
   * 单次请求返回的数量，默认值为100，取值范围为[0,100]。
   */
  Limit?: number
  /**
   * 偏移量，默认值为0，取值范围为[0,10000]。
   */
  Offset?: number
  /**
   * 返回结果集排序的字段，目前支持按照 MicrosecsRunning（操作任务已执行的时间）排序。
   */
  OrderBy?: string
  /**
   * 返回结果集排序方式。
- ASC：升序。默认为 ASC，按照升序排序。
- DESC：降序。
   */
  OrderByType?: string
}

/**
 * 备份下载任务
 */
export interface BackupDownloadTask {
  /**
   * 任务创建时间。
   */
  CreateTime?: string
  /**
   * 备份文件名。
   */
  BackupName?: string
  /**
   * 分片名称。
   */
  ReplicaSetId?: string
  /**
   * 备份数据大小，单位：字节。
   */
  BackupSize?: number
  /**
   * 任务状态。
- 0：等待执行。
- 1：正在下载。
- 2：下载完成。
- 3：下载失败。
- 4：等待重试。
   */
  Status?: number
  /**
   * 任务进度百分比。
   */
  Percent?: number
  /**
   * 耗时，单位为秒。
   */
  TimeSpend?: number
  /**
   * 备份数据下载链接。
   */
  Url?: string
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
- 3：快照备份。
**说明**:
1. 通用版实例支持逻辑备份与物理备份。云盘版实例支持物理备份与快照备份，暂不支持逻辑备份。
2. 实例开通存储加密，则备份方式不能为物理备份。
   */
  BackupMethod?: number
  /**
   * 发起备份时指定的备注信息。
   */
  BackupDesc?: string
  /**
   * 地区信息。
   */
  Region?: string
  /**
   * Bucket信息。
   */
  Bucket?: string
}

/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
- 3：快照备份。
**说明**:
1. 通用版实例支持逻辑备份与物理备份。云盘版实例支持物理备份与快照备份，暂不支持逻辑备份。
2. 实例开通存储加密，则备份方式不能为物理备份。
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
   * 指定待查询的实例ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 单次请求返回的数量。最小值为1，最大值为1000，默认值为1000。
   */
  Limit?: number
  /**
   * 偏移量，默认值为0。Offset=Limit*(页码-1)。
   */
  Offset?: number
}

/**
 * SetDBInstanceDeletionProtection返回参数结构体
 */
export interface SetDBInstanceDeletionProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDetailedSlowLogs返回参数结构体
 */
export interface DescribeDetailedSlowLogsResponse {
  /**
   * 满足条件的慢日志数量。
   */
  TotalCount?: number
  /**
   * 慢日志详情。
   */
  DetailedSlowLogs?: Array<SlowLogItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  UsedVolume?: number
  /**
   * 分片ID
   */
  ReplicaSetId?: string
  /**
   * 分片名
   */
  ReplicaSetName?: string
  /**
   * 分片内存规格，单位为MB
   */
  Memory?: number
  /**
   * 分片磁盘规格，单位为MB
   */
  Volume?: number
  /**
   * 分片Oplog大小，单位为MB
   */
  OplogSize?: number
  /**
   * 分片从节点数
   */
  SecondaryNum?: number
  /**
   * 分片物理id
   */
  RealReplicaSetId?: string
}

/**
 * SetBackupRules返回参数结构体
 */
export interface SetBackupRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceNodeProperty请求参数结构体
 */
export interface DescribeDBInstanceNodePropertyRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 节点 ID。请登录 [MongoDB 控制台的节点管理](https://console.cloud.tencent.com/mongodb)复制节点 ID。
   */
  NodeIds?: Array<string>
  /**
   * 节点角色。可选值包括：
- PRIMARY：主节点。
- SECONDARY：从节点。
- READONLY：只读节点。
- ARBITER：仲裁节点。
   */
  Roles?: Array<string>
  /**
   * 该参数指定节点是否为 Hidden 节点，默认为 false。
   */
  OnlyHidden?: boolean
  /**
   * 该参数指定选举新主节点的优先级。其取值范围为[0,100]，数值越高，优先级越高。
   */
  Priority?: number
  /**
   * 该参数指定节点投票权。
- 1：具有投票权。
- 0：无投票权。
   */
  Votes?: number
  /**
   * 节点标签。
   */
  Tags?: Array<NodeTag>
}

/**
 * RenewDBInstances返回参数结构体
 */
export interface RenewDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例可修改参数枚举类型集合。
 */
export interface InstanceEnumParam {
  /**
   * 参数当前值。
   */
  CurrentValue?: string
  /**
   * 参数默认值。
   */
  DefaultValue?: string
  /**
   * 枚举值，所有支持的值。
   */
  EnumValue?: Array<string>
  /**
   * 参数修改之后是否需要重启生效。
- 1：需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart?: string
  /**
   * 参数名称。
   */
  ParamName?: string
  /**
   * 参数说明。
   */
  Tips?: Array<string>
  /**
   * 参数值类型说明。
   */
  ValueType?: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status?: number
}

/**
 * FlashBackDBInstance返回参数结构体
 */
export interface FlashBackDBInstanceResponse {
  /**
   * 回档数据异步任务 ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenameInstance返回参数结构体
 */
export interface RenameInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTransparentDataEncryptionStatus返回参数结构体
 */
export interface DescribeTransparentDataEncryptionStatusResponse {
  /**
   * 表示是否开启了透明加密。 
- close：未开启。
- open：已开启。
   */
  TransparentDataEncryptionStatus?: string
  /**
   * 已绑定的密钥列表，如未绑定，返回null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyInfoList?: Array<KMSInfoDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupDBInstance请求参数结构体
 */
export interface CreateBackupDBInstanceRequest {
  /**
   * 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 设置备份方式。
- 0：逻辑备份。
- 1：物理备份。
- 3：快照备份。
**说明**:
1. 通用版实例支持逻辑备份与物理备份。云盘版实例支持物理备份与快照备份，暂不支持逻辑备份。
2. 实例开通存储加密，则备份方式不能为物理备份。
   */
  BackupMethod: number
  /**
   * 备份备注信息。
   */
  BackupRemark?: string
}

/**
 * SetAccountUserPrivilege请求参数结构体
 */
export interface SetAccountUserPrivilegeRequest {
  /**
   * 指定待设置账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 设置访问实例的账号名称。设置要求为：字母开头的1-64个字符，只可输入[A,Z]、[a,z]、[1,9]范围的字符以及下划线“_”与短划线“-”。
   */
  UserName: string
  /**
   * 设置权限信息。
   */
  AuthRole: Array<Auth>
}

/**
 * 节点属性
 */
export interface NodeProperty {
  /**
   * 节点所在的可用区。
   */
  Zone?: string
  /**
   * 节点名称。
   */
  NodeName?: string
  /**
   * 节点访问地址。
   */
  Address?: string
  /**
   * 节点公网访问外网地址(IP或域名，示例为IP方式)。
   */
  WanServiceAddress?: string
  /**
   * 节点角色。
- PRIMARY：主节点。
- SECONDARY：从节点。
- READONLY：只读节点。
- ARBITER：仲裁节点。
   */
  Role?: string
  /**
   * 节点是否为 Hidden 节点。
- true：Hidden 节点。
- false：非 Hidden 节点。
   */
  Hidden?: boolean
  /**
   * 节点状态。
- NORMAL：正常运行中。
- STARTUP：正在启动。
- STARTUP2：正在启动，处理中间数据。
- RECOVERING：恢复中，暂不可用。
- DOWN：已掉线。
- UNKNOWN：未知状态。
- ROLLBACK：回滚中。
- REMOVED：已移除。
   */
  Status?: string
  /**
   * 主从同步延迟时间，单位：秒。
   */
  SlaveDelay?: number
  /**
   * 节点优先级。其取值范围为[0,100]，数值越高，优先级越高。
   */
  Priority?: number
  /**
   * 节点投票权。
- 1：具有投票权。
- 0：无投票权。
   */
  Votes?: number
  /**
   * 节点标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<NodeTag>
  /**
   * 副本集 ID。
   */
  ReplicateSetId?: string
}

/**
 * KillOps返回参数结构体
 */
export interface KillOpsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance请求参数结构体
 */
export interface IsolateDBInstanceRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制需隔离的实例 ID。
   */
  InstanceId: string
}

/**
 * CreateDBInstanceHour请求参数结构体
 */
export interface CreateDBInstanceHourRequest {
  /**
   * 实例内存大小，单位：GB。具体售卖的内存规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Memory: number
  /**
   * 实例硬盘大小，单位：GB。每一个 CPU 规格对应的最大磁盘与最小磁盘范围，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  Volume: number
  /**
   * - 创建副本集实例，指副本集数量，该参数只能为1。
- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。
   */
  ReplicateSetNum: number
  /**
   * - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  NodeNum: number
  /**
   * 指版本信息。具体支持的版本信息 ，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 产品规格类型。
- HIO10G：通用高HIO万兆型。
- HCD：云盘版类型。
   */
  MachineCode: string
  /**
   * 实例数量，最小值1，最大值为30。
   */
  GoodsNum: number
  /**
   * 可用区信息，输入格式如：ap-guangzhou-2。
- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。
   */
  Zone: string
  /**
   * 实例架构类型。
- REPLSET：副本集。
- SHARD：分片集群。
   */
  ClusterType: string
  /**
   * 私有网络ID。
- 仅支持配置私有网络，必须选择一个与实例同一地域的私有网络。请登录[私有网络控制台](https://console.cloud.tencent.com/vpc)获取可使用的私有网络 ID。
- 实例创建成功之后，支持更换私有网络。具体操作，请参见[更换网络](https://cloud.tencent.com/document/product/239/30910)。
   */
  VpcId?: string
  /**
   * 私有网络 VPC 的子网 ID。
- 必须在已选的私有网络内指定一个子网。请登录[私有网络控制台](https://console.cloud.tencent.com/vpc)获取可使用的子网 ID。
- 实例创建成功之后，支持更换私有网络及子网。具体操作，请参见[更换网络](https://cloud.tencent.com/document/product/239/30910)。
   */
  SubnetId?: string
  /**
   * 实例密码。设置要求如下：
- 字符个数为[8,32]。
- 可输入[A,Z]、[a,z]、[0,9]范围内的字符。
- 可输入的特殊字符包括：感叹号“!”，at“@”，警号“#”、百分号“%”、插入号“^”、星号“\*”、括号“()”、下划线“_”。
- 不能设置单一的字母或者数字。
   */
  Password?: string
  /**
   * 项目ID。
- 若不设置该参数，则为默认项目。
- 在 [MongoDB 控制台项目管理](https://console.cloud.tencent.com/project)页面，可获取项目ID。
   */
  ProjectId?: number
  /**
   * 实例标签信息。
   */
  Tags?: Array<TagInfo>
  /**
   * 实例类型。
- 1：正式实例。
- 3：只读实例。
- 4：灾备实例。
- 5：克隆实例。注意：克隆实例 RestoreTime 为必填项。
   */
  Clone?: number
  /**
   * 父实例 ID。
- 当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制父实例 ID。
   */
  Father?: string
  /**
   * 安全组 ID。 请登录[安全组控制台](https://console.cloud.tencent.com/vpc/security-group)页面获取与数据库实例同地域的安全组 ID。
   */
  SecurityGroup?: Array<string>
  /**
   * 克隆实例回档时间。
- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。
- 回档时间范围：仅能回档7天内时间点的数据。
   */
  RestoreTime?: string
  /**
   * 实例名称。仅支持长度为128个字符的中文、英文、数字、下划线\_、分隔符\-。批量购买数据库实例时，支持通过自定义命名模式串与数字后缀自动升序功能，高效设置实例名称。
- 基础模式：前缀＋自动升序编号（默认从1开始），**lnstanceName**仅需自定义实例名称前缀，例如设置为：cmgo，设置购买数量为5，则购买后，实例名称依次分别为cmgo1、cmgo2、cmgo3、cmgo4、cmgo5。
- 自定义起始序号模式：前缀+｛R:x｝（x为自定义起始序号）。**InstanceName**需填写“前缀｛R:x｝”，例如：cmgo｛R:3｝，设置购买数量为5，则实例名称为cmgo3、cmgo4、cmgo5、cmgo6、cmgo7。
- 复合模式串：前缀1{R:x}+前缀2{R:y}+ ⋯+固定后缀，x与y分别为每一段前缀的起始序号。**instanceName**需填写复合模式串，例如：cmgo{R:10}\_node{R:12}\_db，设置批量购买数量为5，则实例名称为 cmgo10\_node12\_db, cmgo11\_node13\_db, cmgo12\_node14\_db, cmgo13\_node15\_db, cluster14\_node16\_db. 
   */
  InstanceName?: string
  /**
   * 若多可用区部署云数据库实例，指定多可用区列表。
- 多可用区部署实例，参数 **Zone** 指定实例主可用区信息；**AvailabilityZoneList** 指定所有可用区信息，包含主可用区。输入格式如：[ap-guangzhou-2,ap-guangzhou-3,ap-guangzhou-4]。
- 通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 可获取云数据库不同地域规划的可用区信息，以便指定有效的可用区。
- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。
   */
  AvailabilityZoneList?: Array<string>
  /**
   * Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。
   */
  MongosCpu?: number
  /**
   * Mongos 内存大小。
-  购买分片集群时，必须填写。
- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。
   */
  MongosMemory?: number
  /**
   * Mongos 数量。购买分片集群时，必须填写。
- 单可用区部署实例，其数量范围为[3,32]。
- 多可用区部署实例，其数量范围为[6,32]。
   */
  MongosNodeNum?: number
  /**
   * 只读节点数量，取值范围[0,5]。
   */
  ReadonlyNodeNum?: number
  /**
   * 指只读节点所属可用区数组。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。
   */
  ReadonlyNodeAvailabilityZoneList?: Array<string>
  /**
   * Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。
   */
  HiddenZone?: string
  /**
   * 参数模板 ID。
- 参数模板是预置了特定参数值的集合，可用于快速配置新的 MongoDB 实例。合理使用参数模板，能有效提升数据库的部署效率与运行性能。
- 参数模板 ID 可通过 [DescribeDBInstanceParamTpl ](https://cloud.tencent.com/document/product/240/109155)接口获取。请选择与实例版本与架构所对应的参数模板 ID。
   */
  ParamTemplateId?: string
}

/**
 * EnableTransparentDataEncryption返回参数结构体
 */
export interface EnableTransparentDataEncryptionResponse {
  /**
   * 开启透明加密的异步流程id，用于查询流程状态。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetBackupRules请求参数结构体
 */
export interface SetBackupRulesRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
- 3：快照备份。
**说明**:
1. 通用版实例支持逻辑备份与物理备份。云盘版实例支持物理备份与快照备份，暂不支持逻辑备份。
2. 实例开通存储加密，则备份方式不能为物理备份。
   */
  BackupMethod: number
  /**
   * 设置自动备份开始时间。取值范围为：[0,23]，例如：该参数设置为2，表示02:00开始备份。
   */
  BackupTime: number
  /**
   * 设置自动备份发生错误时，是否发送失败告警。
- true：发送。
- false：不发送。
   */
  Notify?: boolean
  /**
   * 指定备份数据保存天数。默认为 7 天，支持设置为7、30、90、180、365。
   */
  BackupRetentionPeriod?: number
}

/**
 * AssignProject请求参数结构体
 */
export interface AssignProjectRequest {
  /**
   * 实例 ID 列表，请登录[MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceIds: Array<string>
  /**
   * 项目ID，用户已创建项目的唯一ID。请在控制台账号中心的[项目管理](https://console.cloud.tencent.com/project)中复制项目 ID。
   */
  ProjectId: number
}

/**
 * ModifyInstanceParams请求参数结构体
 */
export interface ModifyInstanceParamsRequest {
  /**
   * 指定实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 指定需修改的参数名及值。当前所支持的参数名及对应取值范围，请通过 [DescribeInstanceParams ](https://cloud.tencent.com/document/product/240/65903)获取。
   */
  InstanceParams: Array<ModifyMongoDBParamType>
  /**
   * 操作类型，包括：
- IMMEDIATELY：立即调整。
- DELAY：延迟调整。可选字段，不配置该参数则默认为立即调整。
   */
  ModifyType?: string
}

/**
 * CreateBackupDownloadTask返回参数结构体
 */
export interface CreateBackupDownloadTaskResponse {
  /**
   * 下载任务状态。
   */
  Tasks?: Array<BackupDownloadTaskStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库实例 URI 形式的连接串访问地址示例。
 */
export interface DbURL {
  /**
   * 指 URI 类别，包括：，
- CLUSTER_ALL：指通过该 URI 连接库实例的主节点，可读写。
- CLUSTER_READ_READONLY：指通过该 URI 连接实例只读节点。
- CLUSTER_READ_SECONDARY：指通过该 URI 连接实例从节点。
- CLUSTER_READ_SECONDARY_AND_READONLY：指通过该 URI 连接实例只读从节点。
- CLUSTER_PRIMARY_AND_SECONDARY：指通过该 URI 连接实例 主节点与从节点。
- MONGOS_ALL：指通过该  URI 连接每个 Mongos 节点，可读写。
- MONGOS_READ_READONLY：指通过该 URI 连接 Mongos 的只读节点。
- MONGOS_READ_SECONDARY：指通过该 URI 连接 Mongos 的从节点。
- MONGOS_READ_PRIMARY_AND_SECONDARY：指通过该URI 连接 Mongos 的主节点与从节点。
- MONGOS_READ_SECONDARY_AND_READONLY：指通过该URI 连接 Mongos 的从节点与只读节点。
   */
  URLType?: string
  /**
   * 实例 URI 形式的连接串访问地址示例。
   */
  Address?: string
}

/**
 * 慢日志详情
 */
export interface SlowLogItem {
  /**
   * 慢日志详情。
   */
  Log?: string
  /**
   * 节点名称。
   */
  NodeName?: string
  /**
   * 查询哈希值。
   */
  QueryHash?: string
}

/**
 * 实例规格信息。
 */
export interface SpecificationInfo {
  /**
   * 地域信息。
   */
  Region?: string
  /**
   * 可用区信息。
   */
  Zone?: string
  /**
   * 售卖规格信息。
   */
  SpecItems?: Array<SpecItem>
  /**
   * 是否支持跨可用区部署。
- 1：支持。
- 0：不支持。
   */
  SupportMultiAZ?: number
}

/**
 * DescribeSlowLogPatterns请求参数结构体
 */
export interface DescribeSlowLogPatternsRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 慢日志起始时间。
- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。
- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string
  /**
   * 慢日志终止时间。
- 格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。
- 查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
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
  /**
   * 慢日志返回格式，可设置为json，不传默认返回原生慢日志格式。
   */
  Format?: string
}

/**
 * 按 Key 闪回数据表
 */
export interface FlashbackCollection {
  /**
   * 指定按 Key 闪回源数据库集合名。
   */
  CollectionName: string
  /**
   * 指定按 Key 闪回目标数据库集合名。
   */
  TargetResultCollectionName: string
  /**
   * 指定用于过滤按 Key 闪回的 Key（键）。
   */
  FilterKey: string
  /**
   * 指定用于按 Key 闪回的键值对。数组元素最大限制为 50000。
   */
  KeyValues?: Array<FBKeyValue>
}

/**
 * DescribeSpecInfo返回参数结构体
 */
export interface DescribeSpecInfoResponse {
  /**
   * 实例售卖规格信息列表。
   */
  SpecInfoList?: Array<SpecificationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteAccountUser返回参数结构体
 */
export interface DeleteAccountUserResponse {
  /**
   * 账户删除任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 实例详细信息列表。
   */
  InstanceDetails?: Array<InstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedDBInstance请求参数结构体
 */
export interface OfflineIsolatedDBInstanceRequest {
  /**
   * 实例ID。请登录 [MongoDB 控制台回收站](https://console.cloud.tencent.com/mongodb/recycle)在实例列表复制需下线的实例 ID。
   */
  InstanceId: string
}

/**
 * KMS密钥信息
 */
export interface KMSInfoDetail {
  /**
   * 主密钥 ID。
   */
  KeyId?: string
  /**
   * 主密钥名称。
   */
  KeyName?: string
  /**
   * 实例与密钥绑定时间。
   */
  CreateTime?: string
  /**
   * 密钥状态。
- Enabled：开启。
- Disabled：不开启。
   */
  Status?: string
  /**
   * 密钥用途。
   */
  KeyUsage?: string
  /**
   * 密钥来源。
   */
  KeyOrigin?: string
  /**
   * kms所在地域。
   */
  KmsRegion?: string
}

/**
 * InquirePriceCreateDBInstances请求参数结构体
 */
export interface InquirePriceCreateDBInstancesRequest {
  /**
   * 实例所属区域及可用区信息。具体信息，请参见[地域和可用区](https://cloud.tencent.com/document/product/240/3637)。
   */
  Zone: string
  /**
   * - 创建副本集实例，指每个副本集内主从节点数量。每个副本集所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 创建分片集群实例，指每个分片的主从节点数量。每个分片所支持的最大节点数与最小节点数，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  NodeNum: number
  /**
   * 实例内存大小。
- 单位：GB。
- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数CPU与Memory分别对应CPU核数与内存规格。
   */
  Memory: number
  /**
   * 实例硬盘大小。
- 单位：GB。
- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MinStorage与MaxStorage分别对应其最小磁盘规格与最大磁盘规格。
   */
  Volume: number
  /**
   * 实例版本信息。具体支持的版本，请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MongoVersionCode为实例所支持的版本信息。版本信息与版本号对应关系如下：
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 产品规格类型。
- HIO10G：通用高HIO万兆型。
- HCD：云盘版。
   */
  MachineCode: string
  /**
   * 实例数量，取值范围为[1,10]。
   */
  GoodsNum: number
  /**
   * 实例类型。
- REPLSET：副本集。
- SHARD：分片集群。
   */
  ClusterType: string
  /**
   * - 创建副本集实例，指副本集数量，该参数只能为1。
- 创建分片集群实例，指分片的数量。请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询分片数量的取值范围，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。
   */
  ReplicateSetNum: number
  /**
   * - 选择包年包月计费模式，即 <b>InstanceChargeType </b>设定为<b>PREPAID</b>时，必须设置该参数，指定购买实例的购买时长。取值可选：[1,2,3,4,5,6,7,8,9,10,11,12,24,36]；单位：月。
-选择按量计费，即 <b>InstanceChargeType</b> 设定为 **POSTPAID_BY_HOUR** 时，该参数仅可配置为 1。
   */
  Period?: number
  /**
   * 实例付费方式。
- PREPAID：包年包月计费。
- POSTPAID_BY_HOUR：按量计费。
   */
  InstanceChargeType?: string
  /**
   * Mongos CPU 核数，支持1、2、4、8、16。购买分片集群时，必须填写。注意为空时取默认取值为2C。
   */
  MongosCpu?: number
  /**
   * Mongos 内存大小。-  购买分片集群时，必须填写。- 单位：GB，支持1核2GB、2核4GB、4核8GB、8核16GB、16核32GB。注意为空时取默认取值为4G。
   */
  MongosMemory?: number
  /**
   * 指 Mongos 个数，取值范围为[3,32]。若为分片集群实例询价，则该参数必须设置。注意为空时取默认取值为3个节点。
   */
  MongosNum?: number
  /**
   * 指 ConfigServer CPU核数，固定取值为 1，单位：GB，可不配置该参数。
   */
  ConfigServerCpu?: number
  /**
   * 指 ConfigServer 内存大小，固定取值为 2，单位：GB，可不配置该参数。
   */
  ConfigServerMemory?: number
  /**
   * 指 ConfigServer 磁盘大小，固定取值为 20，单位：GB，可不配置该参数。
   */
  ConfigServerVolume?: number
}

/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
  /**
   * 参数值为枚举类型的参数集合。
   */
  InstanceEnumParam?: Array<InstanceEnumParam>
  /**
   * 参数值为 Integer 类型的参数集合。
   */
  InstanceIntegerParam?: Array<InstanceIntegerParam>
  /**
   * 参数值为 Text 类型的参数集合。
   */
  InstanceTextParam?: Array<InstanceTextParam>
  /**
   * 参数值为混合类型的参数集合。
   */
  InstanceMultiParam?: Array<InstanceMultiParam>
  /**
   * 当前实例支持修改的参数数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceParamTpl返回参数结构体
 */
export interface DescribeDBInstanceParamTplResponse {
  /**
   * 参数模板列表信息。
   */
  ParamTpls?: Array<ParamTpl>
  /**
   * 参数模板总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceURL返回参数结构体
 */
export interface DescribeDBInstanceURLResponse {
  /**
   * 实例 URI 形式的连接串访问地址示例。包含：URI 类型及连接串地址。
   */
  Urls?: Array<DbURL>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改实例节点详情。
 */
export interface RemoveNodeList {
  /**
   * 需要删除的节点角色。
- SECONDARY：Mongod 从节点。
- READONLY：只读节点。
- MONGOS：Mongos 节点。
   */
  Role: string
  /**
   * 要删除的节点 ID。分片集群须指定一组分片要删除的节点名称即可，其余分片对该组对齐。
- 获取方式：登录 [MongoDB控制台](https://console.cloud.tencent.com/mongodb)，在**节点管理**页签，可获取**节点 ID**。
- 特别说明：分片集群同一节点上的分片，仅需指定0分片节点 ID 即可。例如：cmgo-6hfk\*\*\*\*\_0-node-primary。
   */
  NodeName: string
  /**
   * 节点所对应的可用区。当前支持可用区信息，请参见[地域和可用区](https://cloud.tencent.com/document/product/240/3637)。
- 单可用区，所有节点在同一可用区。
- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置所删除节点对应的可用区，且删除后必须满足任意2个可用区节点数大于第3个可用区原则。
   */
  Zone: string
}

/**
 * RestartNodes请求参数结构体
 */
export interface RestartNodesRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 需要重启的节点 ID 列表。
- 支持重启的节点类型包含：mongod节点、只读节点、mongos节点。
- 节点 ID，请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在**节点管理**页面复制，或者通过 [DescribeDBInstanceNodeProperty ](https://cloud.tencent.com/document/product/240/82022)接口获取。
   */
  NodeIds: Array<string>
}

/**
 * SetInstanceMaintenance请求参数结构体
 */
export interface SetInstanceMaintenanceRequest {
  /**
   * 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 维护时间窗开始时间。取值范围为"00:00-23:00"的任意整点或半点，如00:00或00:30。
   */
  MaintenanceStart: string
  /**
   * 维护时间窗结束时间。
- 取值范围为"00:00-23:00"的任意整点或半点，维护时间持续时长最小为30分钟，最大为3小时。
- 结束时间务必是基于开始时间向后的时间。
   */
  MaintenanceEnd: string
}

/**
 * RestartNodes返回参数结构体
 */
export interface RestartNodesResponse {
  /**
   * 流程 ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceURL请求参数结构体
 */
export interface DescribeDBInstanceURLRequest {
  /**
   * 实例 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb#/)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeDBInstanceParamTplDetail请求参数结构体
 */
export interface DescribeDBInstanceParamTplDetailRequest {
  /**
   * 参数模板 ID。请通过接口 [DescribeDBInstanceParamTpl](https://cloud.tencent.com/document/product/240/109155) 获取模板 ID。
   */
  TplId: string
  /**
   * 参数名称，传入该值，则只会获取该字段的参数详情。为空时，返回全部参数。
   */
  ParamName?: string
}

/**
 * 实例详情。
 */
export interface InstanceDetail {
  /**
   * 实例 ID。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 付费类型。
- 1：包年包月。
- 0：按量计费。
   */
  PayMode?: number
  /**
   * 项目 ID。
   */
  ProjectId?: number
  /**
   * 集群类型。
- 0：副本集实例。
- 1：分片实例。
   */
  ClusterType?: number
  /**
   * 地域信息。
   */
  Region?: string
  /**
   * 可用区信息。
   */
  Zone?: string
  /**
   * 网络类型。
- 0：基础网络。
- 1：私有网络。
   */
  NetType?: number
  /**
   * 私有网络的ID。
   */
  VpcId?: string
  /**
   * 私有网络的子网ID。
   */
  SubnetId?: string
  /**
   * 实例状态。
- 0：待初始化。
- 1：流程处理中，例如：变更规格、参数修改等。
- 2：实例正常运行中。
- -2：已隔离（包年包月）。
- -3：已隔离（按量计费）。
   */
  Status?: number
  /**
   * 实例IP。
   */
  Vip?: string
  /**
   * 端口号。
   */
  Vport?: number
  /**
   * 实例创建时间。
   */
  CreateTime?: string
  /**
   * 实例到期时间。
   */
  DeadLine?: string
  /**
   * 实例存储引擎版本信息。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
- MONGO_60_WT：MongoDB 6.0 WiredTiger存储引擎版本。
- MONGO_70_WT：MongoDB 7.0 WiredTiger存储引擎版本。
   */
  MongoVersion?: string
  /**
   * 实例内存规格，单位：MB。
   */
  Memory?: number
  /**
   * 实例磁盘规格，单位：MB。
   */
  Volume?: number
  /**
   * 实例 CPU 核心数。
   */
  CpuNum?: number
  /**
   * 实例机器类型。
- HIO10G：通用高 HIO 万兆型。
- HCD：云盘版类型。
   */
  MachineType?: string
  /**
   * 实例从节点数。
   */
  SecondaryNum?: number
  /**
   * 实例分片数。
   */
  ReplicationSetNum?: number
  /**
   * 实例自动续费标志。
- 0：手动续费。
- 1：自动续费。
- 2：确认不续费。
   */
  AutoRenewFlag?: number
  /**
   * 已用容量，单位：MB。
   */
  UsedVolume?: number
  /**
   * 维护窗口起始时间。
   */
  MaintenanceStart?: string
  /**
   * 维护窗口结束时间。
   */
  MaintenanceEnd?: string
  /**
   * 分片信息。
   */
  ReplicaSets?: Array<ShardInfo>
  /**
   * 只读实例信息。
   */
  ReadonlyInstances?: Array<DBInstanceInfo>
  /**
   * 灾备实例信息。
   */
  StandbyInstances?: Array<DBInstanceInfo>
  /**
   * 临时实例信息。
   */
  CloneInstances?: Array<DBInstanceInfo>
  /**
   * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息。
   */
  RelatedInstance?: DBInstanceInfo
  /**
   * 实例标签信息集合。
   */
  Tags?: Array<TagInfo>
  /**
   * 实例版本标记。
   */
  InstanceVer?: number
  /**
   * 实例版本标记。
   */
  ClusterVer?: number
  /**
   * 协议信息：mongodb。
   */
  Protocol?: number
  /**
   * 实例类型。
- 0：所有实例。
- 1：正式实例。
- 2：临时实例
- 3：只读实例。
- -1：同时包括正式实例、只读实例与灾备实例。
   */
  InstanceType?: number
  /**
   * 实例状态描述。
   */
  InstanceStatusDesc?: string
  /**
   * 实例对应的物理实例 ID。回档并替换过的实例有不同的 InstanceId 和 RealInstanceId，从 barad 获取监控数据等场景下需要用物理 ID 获取。
   */
  RealInstanceId?: string
  /**
   * 实例当前可用区信息。
   */
  ZoneList?: Array<string>
  /**
   * mongos 节点个数。
   */
  MongosNodeNum?: number
  /**
   * mongos 节点内存。单位：MB。
   */
  MongosMemory?: number
  /**
   * mongos 节点 CPU 核数。
   */
  MongosCpuNum?: number
  /**
   * Config Server节点个数。
   */
  ConfigServerNodeNum?: number
  /**
   * Config Server节点内存。单位：MB。
   */
  ConfigServerMemory?: number
  /**
   * Config Server节点磁盘大小。单位：MB。
   */
  ConfigServerVolume?: number
  /**
   * Config Server 节点 CPU 核数。
   */
  ConfigServerCpuNum?: number
  /**
   * readonly节点个数。
   */
  ReadonlyNodeNum?: number
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 */
export interface ModifyDBInstanceSpecResponse {
  /**
   * 订单 ID。
   */
  DealId?: string
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
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。
   */
  Period?: number
  /**
   * 自动续费标识。取值范围：
- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费。在账户余额充足的情况下，实例到期后将按月自动续费。
- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。默认为NOTIFY_AND_MANUAL_RENEW。
- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。
   */
  RenewFlag?: string
}

/**
 * RenewDBInstances请求参数结构体
 */
export interface RenewDBInstancesRequest {
  /**
   * 指定续费的一个或多个待操作的实例ID。
- 可通过[DescribeDBInstances](https://cloud.tencent.com/document/product/240/38568)接口返回值中的**InstanceId**获取。
- 每次续费请求的实例数量上限为100。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}
