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
 * CheckDataEngineConfigPairsValidity返回参数结构体
 */
export interface CheckDataEngineConfigPairsValidityResponse {
  /**
   * 参数有效性：ture:有效，false:至少存在一个无效参数；
   */
  IsAvailable?: boolean
  /**
   * 无效参数集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnavailableConfig?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResultDownload返回参数结构体
 */
export interface DescribeResultDownloadResponse {
  /**
   * 下载文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 任务状态 init | queue | format | compress | success|  timeout | error
   */
  Status?: string
  /**
   * 任务异常原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 临时SecretId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretId?: string
  /**
   * 临时SecretKey
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey?: string
  /**
   * 临时Token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 引擎的访问信息
 */
export interface AccessInfo {
  /**
   * 访问引擎的方法
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType?: string
  /**
   * 访问引擎的url，内部的部分参数需要根据实际情况替换
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessConnectionInfos?: Array<string>
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number
  /**
   * 模糊匹配，库名关键字。
   */
  KeyWord?: string
  /**
   * 数据源唯名称，该名称可以通过DescribeDatasourceConnection接口查询到。默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
  /**
   * 排序字段，CreateTime：创建时间，Name：数据库名称
   */
  Sort?: string
  /**
   * 排序类型：false：降序（默认）、true：升序
   */
  Asc?: boolean
}

/**
 * 元数据基本对象
 */
export interface Asset {
  /**
   * 主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 对象GUID值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Guid?: string
  /**
   * 数据目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
  /**
   * 描述信息
   */
  Description?: string
  /**
   * 对象owner
   */
  Owner?: string
  /**
   * 对象owner账户
   */
  OwnerAccount?: string
  /**
   * 权限
   */
  PermValues?: Array<KVPair>
  /**
   * 附加属性
   */
  Params?: Array<KVPair>
  /**
   * 附加业务属性
   */
  BizParams?: Array<KVPair>
  /**
   * 数据版本
   */
  DataVersion?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifiedTime?: string
  /**
   * 数据源主键
   */
  DatasourceId?: number
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 需要授权的子用户uin，可以通过腾讯云控制台右上角 → “账号信息” → “账号ID进行查看”。
   */
  UserId: string
  /**
   * 用户描述信息，方便区分不同用户
   */
  UserDescription?: string
  /**
   * 绑定到用户的权限集合
   */
  PolicySet?: Array<Policy>
  /**
   * 用户类型。ADMIN：管理员 COMMON：一般用户。当用户类型为管理员的时候，不能设置权限集合和绑定的工作组集合，管理员默认拥有所有权限。该参数不填默认为COMMON
   */
  UserType?: string
  /**
   * 绑定到用户的工作组ID集合。
   */
  WorkGroupIds?: Array<number | bigint>
  /**
   * 用户别名，字符长度小50
   */
  UserAlias?: string
}

/**
 * python-spark镜像信息。
 */
export interface PythonSparkImage {
  /**
   * spark镜像唯一id
   */
  SparkImageId?: string
  /**
   * 集群小版本镜像id
   */
  ChildImageVersionId?: string
  /**
   * spark镜像名称
   */
  SparkImageVersion?: string
  /**
   * spark镜像描述信息
注意：此字段可能返回 null，表示取不到有效值。
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
}

/**
 * ModifyGovernEventRule返回参数结构体
 */
export interface ModifyGovernEventRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSessions请求参数结构体
 */
export interface DescribeNotebookSessionsRequest {
  /**
   * DLC Spark作业引擎名称
   */
  DataEngineName: string
  /**
   * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
   */
  State?: Array<string>
  /**
   * 排序字段（默认按创建时间）
   */
  SortFields?: Array<string>
  /**
   * 排序字段：true：升序、false：降序（默认）
   */
  Asc?: boolean
  /**
   * 分页参数，默认10
   */
  Limit?: number
  /**
   * 分页参数，默认0
   */
  Offset?: number
  /**
   * 过滤类型，支持如下的过滤类型，传参Name应为以下其中一个, engine-generation - String（引擎时代： supersql：supersql引擎，native：标准引擎）：notebook-keyword - String（数据引擎名称或sessionid或sessionname的模糊搜索）
   */
  Filters?: Array<Filter>
}

/**
 * SmartOptimizerLifecyclePolicy
 */
export interface SmartOptimizerLifecyclePolicy {
  /**
   * 生命周期启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecycleEnable?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expiration?: number
  /**
   * 是否删表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DropTable?: boolean
  /**
   * 过期字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredField?: string
  /**
   * 过期字段格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredFieldFormat?: string
}

/**
 * DescribeDMSDatabase返回参数结构体
 */
export interface DescribeDMSDatabaseResponse {
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 存储地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 数据对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Asset?: Asset
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略集合
 */
export interface Policys {
  /**
   * 策略集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicySet: Array<Policy>
  /**
   * 策略总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
}

/**
 * DropDMSDatabase请求参数结构体
 */
export interface DropDMSDatabaseRequest {
  /**
   * 数据库名称
   */
  Name: string
  /**
   * 是否删除数据
   */
  DeleteData?: boolean
  /**
   * 是否级联删除
   */
  Cascade?: boolean
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * 按批提交Statement运行SQL任务。
 */
export interface NotebookSessionStatementBatchInformation {
  /**
   * 任务详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotebookSessionStatementBatch?: Array<NotebookSessionStatementInfo>
  /**
   * 当前批任务是否运行完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAvailable?: boolean
  /**
   * Session唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * Batch唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchId?: string
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 数据表对象列表。
   */
  TableList?: Array<TableResponseInfo>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEngineEvents返回参数结构体
 */
export interface DescribeDataEngineEventsResponse {
  /**
   * 事件详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events?: Array<HouseEventsInfo>
  /**
   * 分页号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Spark批作业集群Session资源配置模板；
 */
export interface SessionResourceTemplate {
  /**
   * driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSize?: string
  /**
   * executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSize?: string
  /**
   * 指定executor数量，最小值为1，最大值小于集群规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorNums?: number
  /**
   * 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorMaxNumbers?: number
}

/**
 * DescribeDMSPartitions请求参数结构体
 */
export interface DescribeDMSPartitionsRequest {
  /**
   * 数据库名
   */
  DatabaseName: string
  /**
   * 表名称
   */
  TableName: string
  /**
   * schema名称
   */
  SchemaName?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 单个分区名称，精准匹配
   */
  Values?: Array<string>
  /**
   * 多个分区名称，精准匹配
   */
  PartitionNames?: Array<string>
  /**
   * 多个分区字段的匹配，模糊匹配
   */
  PartValues?: Array<string>
  /**
   * 过滤SQL
   */
  Filter?: string
  /**
   * 最大分区数量
   */
  MaxParts?: number
  /**
   * 翻页跳过数量
   */
  Offset?: number
  /**
   * 页面数量
   */
  Limit?: number
  /**
   * 表达式
   */
  Expression?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DescribeDMSTable返回参数结构体
 */
export interface DescribeDMSTableResponse {
  /**
   * 基础对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Asset?: Asset
  /**
   * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewOriginalText?: string
  /**
   * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewExpandedText?: string
  /**
   * hive维护版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Retention?: number
  /**
   * 存储对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sds?: DMSSds
  /**
   * 分区列
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionKeys?: Array<DMSColumn>
  /**
   * 分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: Array<DMSPartition>
  /**
   * 表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * Schame名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordCount?: number
  /**
   * 生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeTime?: number
  /**
   * 最后访问时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAccessTime?: string
  /**
   * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataUpdateTime?: string
  /**
   * 结构更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StructUpdateTime?: string
  /**
   * 列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<DMSColumn>
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTasksInOrder请求参数结构体
 */
export interface CreateTasksInOrderRequest {
  /**
   * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库。
   */
  DatabaseName: string
  /**
   * SQL任务信息
   */
  Tasks: TasksInfo
  /**
   * 数据源名称，默认为COSDataCatalog
   */
  DatasourceConnectionName?: string
}

/**
 * CreateDatabase请求参数结构体
 */
export interface CreateDatabaseRequest {
  /**
   * 数据库基础信息
   */
  DatabaseInfo: DatabaseInfo
  /**
   * 数据源名称，默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
}

/**
 * DescribeDMSTables返回参数结构体
 */
export interface DescribeDMSTablesResponse {
  /**
   * DMS元数据列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableList?: Array<DMSTableInfo>
  /**
   * 统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAdvancedStoreLocation返回参数结构体
 */
export interface DescribeAdvancedStoreLocationResponse {
  /**
   * 是否启用高级设置：0-否，1-是
   */
  Enable: number
  /**
   * 查询结果保存cos路径
   */
  StoreLocation: string
  /**
   * 是否有托管存储权限
   */
  HasLakeFs: boolean
  /**
   * 托管存储状态，HasLakeFs等于true时，该值才有意义
注意：此字段可能返回 null，表示取不到有效值。
   */
  LakeFsStatus: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTablesName返回参数结构体
 */
export interface DescribeTablesNameResponse {
  /**
   * 数据表名称对象列表。
   */
  TableNameList?: Array<string>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAdvancedStoreLocation请求参数结构体
 */
export type DescribeAdvancedStoreLocationRequest = null

/**
 * CancelNotebookSessionStatementBatch返回参数结构体
 */
export interface CancelNotebookSessionStatementBatchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 混合表中，change表的数据保存时间，单位为天
 */
export interface SmartOptimizerChangeTablePolicy {
  /**
   * change表的数据保存时间，单位为天
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRetentionTime?: number
}

/**
 * SparkSQL批任务信息
 */
export interface BatchSqlTask {
  /**
   * SQL子任务唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 运行SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecuteSQL?: string
  /**
   * 任务信息，成功则返回：Task Success!，失败则返回异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * CreateNotebookSession请求参数结构体
 */
export interface CreateNotebookSessionRequest {
  /**
   * Session名称
   */
  Name: string
  /**
   * 类型，当前支持：spark、pyspark、sparkr、sql
   */
  Kind: string
  /**
   * DLC Spark作业引擎名称
   */
  DataEngineName: string
  /**
   * session文件地址，当前支持：cosn://和lakefs://两种路径
   */
  ProgramDependentFiles?: Array<string>
  /**
   * 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径
   */
  ProgramDependentJars?: Array<string>
  /**
   * 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径
   */
  ProgramDependentPython?: Array<string>
  /**
   * 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径
   */
  ProgramArchives?: Array<string>
  /**
   * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  DriverSize?: string
  /**
   * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  ExecutorSize?: string
  /**
   * 指定的Executor数量，默认为1
   */
  ExecutorNumbers?: number
  /**
   * Session相关配置，当前支持：
1. dlc.eni: 用户配置的eni网关信息，可以通过该字段设置；
2. dlc.role.arn: 用户配置的roleArn鉴权策略配置信息，可以通过该字段设置；
3. dlc.sql.set.config: 用户配置的集群配置信息，可以通过该字段设置；
   */
  Arguments?: Array<KVPair>
  /**
   * 代理用户，默认为root
   */
  ProxyUser?: string
  /**
   * 指定的Session超时时间，单位秒，默认3600秒
   */
  TimeoutInSecond?: number
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
   */
  ExecutorMaxNumbers?: number
  /**
   * 指定spark版本名称，当前任务使用该spark镜像运行
   */
  SparkImage?: string
  /**
   * 是否继承集群的资源类配置：0：自定义（默认），1：继承集群；
   */
  IsInherit?: number
}

/**
 * UpdateDataEngine请求参数结构体
 */
export interface UpdateDataEngineRequest {
  /**
   * 资源大小
   */
  Size: number
  /**
   * 最小资源
   */
  MinClusters: number
  /**
   * 最大资源
   */
  MaxClusters: number
  /**
   * 开启自动刷新：true：开启、false（默认）：关闭
   */
  AutoResume: boolean
  /**
   * 数据引擎名称
   */
  DataEngineName: string
  /**
   * 相关信息
   */
  Message: string
  /**
   * 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起
   */
  AutoSuspend?: boolean
  /**
   * 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥）
   */
  CrontabResumeSuspend?: number
  /**
   * 定时启停策略，复杂类型：包含启停时间、挂起集群策略
   */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy
  /**
   * 单个集群最大并发任务数，默认5
   */
  MaxConcurrency?: number
  /**
   * 可容忍的排队时间，默认0。当任务排队的时间超过可容忍的时间时可能会触发扩容。如果该参数为0，则表示一旦有任务排队就可能立即触发扩容。
   */
  TolerableQueueTime?: number
  /**
   * 集群自动挂起时间
   */
  AutoSuspendTime?: number
  /**
   * spark jar 包年包月集群是否开启弹性
   */
  ElasticSwitch?: boolean
  /**
   * spark jar 包年包月集群弹性上限
   */
  ElasticLimit?: number
  /**
   * Spark批作业集群Session资源配置模板
   */
  SessionResourceTemplate?: SessionResourceTemplate
}

/**
 * SmartOptimizerWrittenPolicy
 */
export interface SmartOptimizerWrittenPolicy {
  /**
   * none/enable/disable/default
注意：此字段可能返回 null，表示取不到有效值。
   */
  WrittenEnable?: string
}

/**
 * DescribeSparkAppJobs请求参数结构体
 */
export interface DescribeSparkAppJobsRequest {
  /**
   * 返回结果按照该字段排序
   */
  SortBy?: string
  /**
   * 正序或者倒序，例如：desc
   */
  Sorting?: string
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为其一:spark-job-name（作业名称），spark-job-id（作业id），spark-app-type（作业类型，1：批任务，2：流任务，4：SQL作业），user-name（创建人），key-word（作业名称或ID关键词模糊搜索）
   */
  Filters?: Array<Filter>
  /**
   * 更新时间起始点，支持格式：yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 更新时间截止点，支持格式：yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 查询列表偏移量, 默认值0
   */
  Offset?: number
  /**
   * 查询列表限制数量, 默认值100
   */
  Limit?: number
}

/**
 * DeleteNotebookSession请求参数结构体
 */
export interface DeleteNotebookSessionRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
}

/**
 * CreateDMSTable返回参数结构体
 */
export interface CreateDMSTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkSessionBatchSQL请求参数结构体
 */
export interface DescribeSparkSessionBatchSQLRequest {
  /**
   * SparkSQL唯一标识
   */
  BatchId: string
  /**
   * 用户自定义主键, 若不为空，则按照该值查询
   */
  CustomKey?: string
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 查询到的用户总数
   */
  TotalCount: number
  /**
   * 查询到的授权用户信息集合
   */
  UserSet: Array<UserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SmartOptimizerPolicy
 */
export interface SmartOptimizerPolicy {
  /**
   * 是否继承
注意：此字段可能返回 null，表示取不到有效值。
   */
  Inherit?: string
  /**
   * ResourceInfo
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: Array<ResourceInfo>
  /**
   * SmartOptimizerWrittenPolicy
注意：此字段可能返回 null，表示取不到有效值。
   */
  Written?: SmartOptimizerWrittenPolicy
  /**
   * SmartOptimizerLifecyclePolicy
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lifecycle?: SmartOptimizerLifecyclePolicy
  /**
   * SmartOptimizerIndexPolicy
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: SmartOptimizerIndexPolicy
  /**
   * SmartOptimizerChangeTablePolicy
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChangeTable?: SmartOptimizerChangeTablePolicy
}

/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
  /**
   * 用户详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserInfo?: UserDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserType请求参数结构体
 */
export interface ModifyUserTypeRequest {
  /**
   * 用户ID
   */
  UserId: string
  /**
   * 用户要修改到的类型，ADMIN：管理员，COMMON：一般用户。
   */
  UserType: string
}

/**
 * NotebookSessionStatement详情。
 */
export interface NotebookSessionStatementInfo {
  /**
   * 完成时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Completed: number
  /**
   * 开始时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Started: number
  /**
   * 完成进度，百分制
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress: number
  /**
   * Session Statement唯一标识
   */
  StatementId: string
  /**
   * Session Statement状态，包含：waiting（排队中）、running（运行中）、available（正常）、error（异常）、cancelling（取消中）、cancelled（已取消）
   */
  State: string
  /**
   * Statement输出信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutPut: StatementOutput
  /**
   * 批任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchId?: string
  /**
   * 运行语句
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
}

/**
 * Elasticsearch数据源的详细信息
 */
export interface ElasticsearchInfo {
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 密码，需要base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 数据源的VPC和子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: DatasourceConnectionLocation
  /**
   * 默认数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 访问Elasticsearch的ip、端口信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceInfo?: Array<IpPortPair>
}

/**
 * DeleteUsersFromWorkGroup返回参数结构体
 */
export interface DeleteUsersFromWorkGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDLCCatalogAccess返回参数结构体
 */
export interface DescribeDLCCatalogAccessResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * DLCCatalog授权列表
   */
  Rows?: Array<DLCCatalogAccess>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTable返回参数结构体
 */
export interface DeleteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserRoles返回参数结构体
 */
export interface DescribeUserRolesResponse {
  /**
   * 符合列举条件的总数量
   */
  Total?: number
  /**
   * 用户角色信息
   */
  UserRoles?: Array<UserRole>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExportTask请求参数结构体
 */
export interface CreateExportTaskRequest {
  /**
   * 数据来源，lakefsStorage、taskResult
   */
  InputType: string
  /**
   * 导出任务输入配置
   */
  InputConf: Array<KVPair>
  /**
   * 导出任务输出配置
   */
  OutputConf: Array<KVPair>
  /**
   * 目标数据源的类型，目前支持导出到cos
   */
  OutputType?: string
}

/**
 * CreateDMSTable请求参数结构体
 */
export interface CreateDMSTableRequest {
  /**
   * 基础对象
   */
  Asset?: Asset
  /**
   * 表类型：EXTERNAL_TABLE, VIRTUAL_VIEW, MATERIALIZED_VIEW
   */
  Type?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 存储大小
   */
  StorageSize?: number
  /**
   * 记录数量
   */
  RecordCount?: number
  /**
   * 生命周期
   */
  LifeTime?: number
  /**
   * 数据更新时间
   */
  DataUpdateTime?: string
  /**
   * 结构更新时间
   */
  StructUpdateTime?: string
  /**
   * 最后访问时间
   */
  LastAccessTime?: string
  /**
   * 存储对象
   */
  Sds?: DMSSds
  /**
   * 列
   */
  Columns?: Array<DMSColumn>
  /**
   * 分区键值
   */
  PartitionKeys?: Array<DMSColumn>
  /**
   * 视图文本
   */
  ViewOriginalText?: string
  /**
   * 视图文本
   */
  ViewExpandedText?: string
  /**
   * 分区
   */
  Partitions?: Array<DMSPartition>
  /**
   * 表名称
   */
  Name?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DMSTable基本信息
 */
export interface DMSTable {
  /**
   * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewOriginalText?: string
  /**
   * 视图文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewExpandedText?: string
  /**
   * hive维护版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Retention?: number
  /**
   * 存储对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sds?: DMSSds
  /**
   * 分区列
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionKeys?: Array<DMSColumn>
  /**
   * 分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: Array<DMSPartition>
  /**
   * 表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * Schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordCount?: number
  /**
   * 生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeTime?: number
  /**
   * 最后访问时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAccessTime?: string
  /**
   * 数据更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataUpdateTime?: string
  /**
   * 结构更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StructUpdateTime?: string
  /**
   * 列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<DMSColumn>
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * ModifyWorkGroup返回参数结构体
 */
export interface ModifyWorkGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 元数据存储描述属性
 */
export interface DMSSds {
  /**
   * 存储地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 输入格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputFormat?: string
  /**
   * 输出格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputFormat?: string
  /**
   * bucket数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumBuckets?: number
  /**
   * 是是否压缩
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compressed?: boolean
  /**
   * 是否有子目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoredAsSubDirectories?: boolean
  /**
   * 序列化lib
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerdeLib?: string
  /**
   * 序列化名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerdeName?: string
  /**
   * 桶名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BucketCols?: Array<string>
  /**
   * 序列化参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerdeParams?: Array<KVPair>
  /**
   * 附加参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<KVPair>
  /**
   * 列排序(Expired)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SortCols?: DMSColumnOrder
  /**
   * 列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cols?: Array<DMSColumn>
  /**
   * 列排序字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SortColumns?: Array<DMSColumnOrder>
}

/**
 * 开通了第三方访问的用户信息
 */
export interface OpendThirdAccessUserInfo {
  /**
   * id信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 用户主UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 开通时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * DescribeDataEnginesScaleDetail返回参数结构体
 */
export interface DescribeDataEnginesScaleDetailResponse {
  /**
   * 引擎规格统计详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scales?: Array<DataEngineScaleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSessionStatementSqlResult请求参数结构体
 */
export interface DescribeNotebookSessionStatementSqlResultRequest {
  /**
   * 任务唯一ID
   */
  TaskId: string
  /**
   * 返回结果的最大行数，范围0~1000，默认为1000.
   */
  MaxResults?: number
  /**
   * 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。
   */
  NextToken?: string
}

/**
 * CreateTable返回参数结构体
 */
export interface CreateTableResponse {
  /**
   * 生成的建表执行语句对象。
   */
  Execution?: Execution
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTaskJobLogName请求参数结构体
 */
export interface ListTaskJobLogNameRequest {
  /**
   * 查询的taskId
   */
  TaskId: string
  /**
   * SparkSQL批任务唯一ID
   */
  BatchId?: string
}

/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
  /**
   * 任务唯一ID，仅支持30天内的任务
   */
  TaskId: string
  /**
   * 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回MaxResults字段设置的数据量。
   */
  NextToken?: string
  /**
   * 返回结果的最大行数，范围0~1000，默认为1000.
   */
  MaxResults?: number
  /**
   * 是否转化数据类型
   */
  IsTransformDataType?: boolean
}

/**
 * UpdateUserDataEngineConfig请求参数结构体
 */
export interface UpdateUserDataEngineConfigRequest {
  /**
   * 引擎ID
   */
  DataEngineId: string
  /**
   * 用户自定义引擎配置项集合。该参数需要传用户需要添加的全部配置项，例如，已有配置项k1:v1，添加k2:v2，需要传[k1:v1,k2:v2]。
   */
  DataEngineConfigPairs?: Array<DataEngineConfigPair>
  /**
   * 作业引擎资源配置模板
   */
  SessionResourceTemplate?: SessionResourceTemplate
}

/**
 * RollbackDataEngineImage请求参数结构体
 */
export interface RollbackDataEngineImageRequest {
  /**
   * 引擎ID
   */
  DataEngineId: string
  /**
   * 检查是否能回滚的接口返回的FromRecordId参数
   */
  FromRecordId?: string
  /**
   * 检查是否能回滚的接口返回的ToRecordId参数
   */
  ToRecordId?: string
}

/**
 * QueryResult返回参数结构体
 */
export interface QueryResultResponse {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 结果数据
   */
  ResultSet?: string
  /**
   * schema
   */
  ResultSchema?: Array<Column>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeDLCCatalogAccess请求参数结构体
 */
export interface RevokeDLCCatalogAccessRequest {
  /**
   * VpcID
   */
  VpcId: string
}

/**
 * 数据治理规则
 */
export interface DataGovernPolicy {
  /**
   * 治理规则类型，Customize: 自定义；Intelligence: 智能治理
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
  /**
   * 治理引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  GovernEngine?: string
}

/**
 * CreateWorkGroup返回参数结构体
 */
export interface CreateWorkGroupResponse {
  /**
   * 工作组Id，全局唯一
   */
  WorkGroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEngineUsageInfo返回参数结构体
 */
export interface DescribeEngineUsageInfoResponse {
  /**
   * 集群总规格
   */
  Total?: number
  /**
   * 已占用集群规格
   */
  Used?: number
  /**
   * 剩余集群规格
   */
  Available?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkGroupInfo返回参数结构体
 */
export interface DescribeWorkGroupInfoResponse {
  /**
   * 工作组详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupInfo?: WorkGroupDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 列出该数据库下所属数据表。
   */
  DatabaseName: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为其一
table-name - String - （过滤条件）数据表名称,形如：table-001。
table-id - String - （过滤条件）table id形如：12342。
   */
  Filters?: Array<Filter>
  /**
   * 指定查询的数据源名称，默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
  /**
   * 起始时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS
   */
  StartTime?: string
  /**
   * 终止时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS
   */
  EndTime?: string
  /**
   * 排序字段，支持：CreateTime（创建时间）、UpdateTime（更新时间）、StorageSize（存储空间）、RecordCount（行数）、Name（表名称）（不传则默认按name升序）
   */
  Sort?: string
  /**
   * 排序字段，false：降序（默认）；true：升序
   */
  Asc?: boolean
  /**
   * table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW
   */
  TableType?: string
  /**
   * 筛选字段-表格式：不传（默认）为查全部；LAKEFS：托管表；ICEBERG：非托管iceberg表；HIVE：非托管hive表；OTHER：非托管其它；
   */
  TableFormat?: string
}

/**
 * CreateStoreLocation请求参数结构体
 */
export interface CreateStoreLocationRequest {
  /**
   * 计算结果存储cos路径，如：cosn://bucketname/
   */
  StoreLocation: string
}

/**
 * DescribeLakeFsInfo返回参数结构体
 */
export interface DescribeLakeFsInfoResponse {
  /**
   * 托管存储信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LakeFsInfos?: Array<LakeFsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOptimizerPolicy返回参数结构体
 */
export interface GetOptimizerPolicyResponse {
  /**
   * 智能优化策略
   */
  SmartOptimizerPolicy?: SmartOptimizerPolicy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTable请求参数结构体
 */
export interface DescribeTableRequest {
  /**
   * 查询对象表名称
   */
  TableName: string
  /**
   * 查询表所在的数据库名称。
   */
  DatabaseName: string
  /**
   * 查询表所在的数据源名称
   */
  DatasourceConnectionName?: string
}

/**
 * 权限对象
 */
export interface Policy {
  /**
   * 需要授权的数据库名，填*代表当前Catalog下所有数据库。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定数据库。
   */
  Database: string
  /**
   * 需要授权的数据源名称，管理员级别下只支持填*（代表该级别全部资源）；数据源级别和数据库级别鉴权的情况下，只支持填COSDataCatalog或者*；在数据表级别鉴权下可以填写用户自定义数据源。不填情况下默认为DataLakeCatalog。注意：如果是对用户自定义数据源进行鉴权，DLC能够管理的权限是用户接入数据源的时候提供的账户的子集。
   */
  Catalog: string
  /**
   * 需要授权的表名，填*代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。
   */
  Table: string
  /**
   * 授权的权限操作，对于不同级别的鉴权提供不同操作。管理员权限：ALL，不填默认为ALL；数据连接级鉴权：CREATE；数据库级别鉴权：ALL、CREATE、ALTER、DROP；数据表权限：ALL、SELECT、INSERT、ALTER、DELETE、DROP、UPDATE。注意：在数据表权限下，指定的数据源不为COSDataCatalog的时候，只支持SELECT操作。
   */
  Operation: string
  /**
   * 授权类型，现在支持八种授权类型：ADMIN:管理员级别鉴权 DATASOURCE：数据连接级别鉴权 DATABASE：数据库级别鉴权 TABLE：表级别鉴权 VIEW：视图级别鉴权 FUNCTION：函数级别鉴权 COLUMN：列级别鉴权 ENGINE：数据引擎鉴权。不填默认为管理员级别鉴权。
   */
  PolicyType?: string
  /**
   * 需要授权的函数名，填*代表当前Catalog下所有函数。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定函数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Function?: string
  /**
   * 需要授权的视图，填*代表当前Database下所有视图。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定视图。
注意：此字段可能返回 null，表示取不到有效值。
   */
  View?: string
  /**
   * 需要授权的列，填*代表当前所有列。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
   */
  Column?: string
  /**
   * 需要授权的数据引擎，填*代表当前所有引擎。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngine?: string
  /**
   * 用户是否可以进行二次授权。当为true的时候，被授权的用户可以将本次获取的权限再次授权给其他子用户。默认为false
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReAuth?: boolean
  /**
   * 权限来源，入参不填。USER：权限来自用户本身；WORKGROUP：权限来自绑定的工作组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 授权模式，入参不填。COMMON：普通模式；SENIOR：高级模式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 操作者，入参不填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 权限创建的时间，入参不填
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 权限所属工作组的ID，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceId?: number
  /**
   * 权限所属工作组的名称，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceName?: string
  /**
   * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
}

/**
 * DescribeTaskLog请求参数结构体
 */
export interface DescribeTaskLogRequest {
  /**
   * 列表返回的Id
   */
  TaskId: string
  /**
   * 开始运行时间，unix时间戳（毫秒）
   */
  StartTime: number
  /**
   * 结束运行时间，unix时间戳（毫秒）
   */
  EndTime: number
  /**
   * 分页大小，最大1000，配合Context一起使用
   */
  Limit: number
  /**
   * 下一次分页参数，第一次传空。透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。
   */
  Context: string
  /**
   * 是否升序排列，true:升序排序，false:倒序，默认false，倒序排列
   */
  Asc?: boolean
  /**
   * 预览日志的通用过滤条件
   */
  Filters?: Array<Filter>
  /**
   * SparkSQL任务唯一ID
   */
  BatchId?: string
}

/**
 * DescribeDataEnginesScaleDetail请求参数结构体
 */
export interface DescribeDataEnginesScaleDetailRequest {
  /**
   * 引擎名称列表
   */
  DataEngineNames?: Array<string>
  /**
   * 开始时间，时间格式：yyyy-MM-dd HH:mm:ss，最长查询一个月内的记录
   */
  StartTime?: string
  /**
   * 结束时间，时间格式：yyyy-MM-dd HH:mm:ss，最长查询一个月内的记录
   */
  EndTime?: string
}

/**
 * CreateTasks请求参数结构体
 */
export interface CreateTasksRequest {
  /**
   * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
   */
  DatabaseName: string
  /**
   * SQL任务信息
   */
  Tasks: TasksInfo
  /**
   * 数据源名称，默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
  /**
   * 计算引擎名称，不填任务提交到默认集群
   */
  DataEngineName?: string
  /**
   * spark集群资源组名称
   */
  ResourceGroupName?: string
  /**
   * 是否使用multi- statement方式运行一批次任务，true: 是，false: 否
   */
  IsMultiStatement?: boolean
}

/**
 * SuspendResumeDataEngine请求参数结构体
 */
export interface SuspendResumeDataEngineRequest {
  /**
   * 虚拟集群名称
   */
  DataEngineName: string
  /**
   * 操作类型 suspend/resume
   */
  Operate: string
}

/**
 * DescribeSparkAppJobs返回参数结构体
 */
export interface DescribeSparkAppJobsResponse {
  /**
   * spark作业列表详情
   */
  SparkAppJobs?: Array<SparkJobInfo>
  /**
   * spark作业总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询表信息对象
 */
export interface TableResponseInfo {
  /**
   * 数据表基本信息。
   */
  TableBaseInfo?: TableBaseInfo
  /**
   * 数据表列信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * 数据表分块信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: Array<Partition>
  /**
   * 数据存储路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 数据表属性信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<Property>
  /**
   * 数据表更新时间, 单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
  /**
   * 数据表创建时间,单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 数据格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputFormat?: string
  /**
   * 数据表存储大小（单位：Byte）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 数据表行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordCount?: number
  /**
   * xxxx
注意：此字段可能返回 null，表示取不到有效值。
   */
  MapMaterializedViewName?: string
  /**
   * 访问热点
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeatValue?: number
  /**
   * InputFormat的缩写
   */
  InputFormatShort?: string
}

/**
 * UpdateUserDataEngineConfig返回参数结构体
 */
export interface UpdateUserDataEngineConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserType返回参数结构体
 */
export interface ModifyUserTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEnginePythonSparkImages请求参数结构体
 */
export interface DescribeDataEnginePythonSparkImagesRequest {
  /**
   * 集群镜像小版本ID
   */
  ChildImageVersionId: string
}

/**
 * CancelSparkSessionBatchSQL请求参数结构体
 */
export interface CancelSparkSessionBatchSQLRequest {
  /**
   * 批任务唯一标识
   */
  BatchId: string
  /**
   * 用户自定义主键，若不为空，则使用该值进行查询
   */
  CustomKey?: string
}

/**
 * 任务概览
 */
export interface TasksOverview {
  /**
   * 正在排队的任务个数
   */
  TaskQueuedCount: number
  /**
   * 初始化的任务个数
   */
  TaskInitCount: number
  /**
   * 正在执行的任务个数
   */
  TaskRunningCount: number
  /**
   * 当前时间范围的总任务个数
   */
  TotalTaskCount: number
}

/**
 * CreateDatabase返回参数结构体
 */
export interface CreateDatabaseResponse {
  /**
   * 生成的建库执行语句对象。
   */
  Execution?: Execution
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropDMSPartitions返回参数结构体
 */
export interface DropDMSPartitionsResponse {
  /**
   * 状态
   */
  Status?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWorkGroup请求参数结构体
 */
export interface CreateWorkGroupRequest {
  /**
   * 工作组名称
   */
  WorkGroupName: string
  /**
   * 工作组描述
   */
  WorkGroupDescription?: string
  /**
   * 工作组绑定的鉴权策略集合
   */
  PolicySet?: Array<Policy>
  /**
   * 需要绑定到工作组的用户Id集合
   */
  UserIds?: Array<string>
}

/**
 * DescribeDatasourceConnection请求参数结构体
 */
export interface DescribeDatasourceConnectionRequest {
  /**
   * 连接ID列表，指定要查询的连接ID
   */
  DatasourceConnectionIds?: Array<string>
  /**
   * 过滤条件，当前支持的过滤键为：DatasourceConnectionName（数据源连接名）。
DatasourceConnectionType   （数据源连接连接类型）
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值100
   */
  Limit?: number
  /**
   * 排序字段，支持如下字段类型，create-time（默认，创建时间）、update-time（更新时间）
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为desc
   */
  Sorting?: string
  /**
   * 筛选字段：起始时间
   */
  StartTime?: string
  /**
   * 筛选字段：截止时间
   */
  EndTime?: string
  /**
   * 连接名称列表，指定要查询的连接名称
   */
  DatasourceConnectionNames?: Array<string>
  /**
   * 连接类型，支持Mysql/HiveCos/Kafka/DataLakeCatalog
   */
  DatasourceConnectionTypes?: Array<string>
  /**
   * 返回指定hive版本的数据源，该参数指定后，会过滤掉该参数指定版本以外的hive数据源，非hive数据源正常返回
   */
  HiveVersion?: Array<string>
}

/**
 * CheckDataEngineImageCanBeUpgrade请求参数结构体
 */
export interface CheckDataEngineImageCanBeUpgradeRequest {
  /**
   * 集群id
   */
  DataEngineId: string
}

/**
 * QueryInternalTableWarehouse请求参数结构体
 */
export interface QueryInternalTableWarehouseRequest {
  /**
   * 库名
   */
  DatabaseName: string
  /**
   * 表名
   */
  TableName: string
}

/**
 * CreateResultDownload请求参数结构体
 */
export interface CreateResultDownloadRequest {
  /**
   * 查询结果任务Id
   */
  TaskId: string
  /**
   * 下载格式
   */
  Format: string
  /**
   * 是否重新生成下载文件，仅当之前任务状态为 timeout | error 时有效
   */
  Force?: boolean
}

/**
 * DescribeNotebookSessionStatementSqlResult返回参数结构体
 */
export interface DescribeNotebookSessionStatementSqlResultResponse {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 结果数据
   */
  ResultSet?: string
  /**
   * schema
   */
  ResultSchema?: Array<Column>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 存储结果地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputPath?: string
  /**
   * 引擎计算耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseTime?: number
  /**
   * 结果条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectRows?: number
  /**
   * 数据扫描量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataAmount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 用户Id，和CAM侧Uin匹配
   */
  UserId: string
  /**
   * 用户描述
   */
  UserDescription: string
}

/**
 * DescribeTasksCostInfo返回参数结构体
 */
export interface DescribeTasksCostInfoResponse {
  /**
   * 下一页的标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchAfter?: string
  /**
   * 返回的数据，字符串类型的二维数组，首行为列中文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddDMSPartitions返回参数结构体
 */
export interface AddDMSPartitionsResponse {
  /**
   * 成功数量
   */
  Total?: number
  /**
   * 分区值
   */
  Partitions?: Array<DMSPartition>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelNotebookSessionStatement请求参数结构体
 */
export interface CancelNotebookSessionStatementRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * Session Statement唯一标识
   */
  StatementId: string
}

/**
 * Spark监控数据
 */
export interface SparkMonitorMetrics {
  /**
   * shuffle写溢出到COS数据量，单位：byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShuffleWriteBytesCos?: number
  /**
   * shuffle写数据量，单位：byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShuffleWriteBytesTotal?: number
}

/**
 * CreateDMSDatabase返回参数结构体
 */
export interface CreateDMSDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateStoreLocation返回参数结构体
 */
export interface CreateStoreLocationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * spark session batch SQL的消耗信息
 */
export interface BatchSQLCostInfo {
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchId?: string
  /**
   * 引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineName?: string
  /**
   * 引擎id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * 本次消耗，单位cu
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cost?: number
  /**
   * 时间开销，秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeCost?: number
  /**
   * 操作者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
}

/**
 * DescribeTablesName请求参数结构体
 */
export interface DescribeTablesNameRequest {
  /**
   * 列出该数据库下所属数据表。
   */
  DatabaseName: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为其一
table-name - String - （过滤条件）数据表名称,形如：table-001。
table-id - String - （过滤条件）table id形如：12342。
   */
  Filters?: Array<Filter>
  /**
   * 指定查询的数据源名称，默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
  /**
   * 起始时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS
   */
  StartTime?: string
  /**
   * 终止时间：用于对更新时间的筛选，格式为yyyy-mm-dd HH:MM:SS
   */
  EndTime?: string
  /**
   * 排序字段，支持：CreateTime（创建时间）、UpdateTime（更新时间）、StorageSize（存储空间）、RecordCount（行数）、Name（表名称）（不传则默认按name升序）
   */
  Sort?: string
  /**
   * 排序字段，false：降序（默认）；true：升序
   */
  Asc?: boolean
  /**
   * table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW
   */
  TableType?: string
  /**
   * 筛选字段-表格式：不传（默认）为查全部；LAKEFS：托管表；ICEBERG：非托管iceberg表；HIVE：非托管hive表；OTHER：非托管其它；
   */
  TableFormat?: string
}

/**
 * 工作组信息
 */
export interface WorkGroupInfo {
  /**
   * 查询到的工作组唯一Id
   */
  WorkGroupId?: number
  /**
   * 工作组名称
   */
  WorkGroupName?: string
  /**
   * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupDescription?: string
  /**
   * 工作组关联的用户数量
   */
  UserNum?: number
  /**
   * 工作组关联的用户集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSet?: Array<UserMessage>
  /**
   * 工作组绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicySet?: Array<Policy>
  /**
   * 工作组的创建人
   */
  Creator?: string
  /**
   * 工作组的创建时间，形如2021-07-28 16:19:32
   */
  CreateTime?: string
}

/**
 * SwitchDataEngine请求参数结构体
 */
export interface SwitchDataEngineRequest {
  /**
   * 主集群名称
   */
  DataEngineName: string
  /**
   * 是否开启备集群
   */
  StartStandbyCluster: boolean
}

/**
 * DLC 数据目录访问权限
 */
export interface DLCCatalogAccess {
  /**
   * VPCID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * 产品类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Product: string
  /**
   * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteScript返回参数结构体
 */
export interface DeleteScriptResponse {
  /**
   * 删除的脚本数量
   */
  ScriptsAffected: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务类型，任务如SQL查询等。
 */
export interface Task {
  /**
   * SQL查询任务
   */
  SQLTask?: SQLTask
  /**
   * Spark SQL查询任务
   */
  SparkSQLTask?: SQLTask
}

/**
 * 引擎配置信息
 */
export interface DataEngineConfigInstanceInfo {
  /**
   * 引擎ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * 用户自定义配置项集合
   */
  DataEngineConfigPairs?: Array<DataEngineConfigPair>
  /**
   * 作业集群资源参数配置模板
   */
  SessionResourceTemplate?: SessionResourceTemplate
}

/**
 * 定时启停策略信息
 */
export interface CrontabResumeSuspendStrategy {
  /**
   * 定时拉起时间：如：周一&周三8点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResumeTime?: string
  /**
   * 定时挂起时间：如：周一&周三20点
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuspendTime?: string
  /**
   * 挂起配置：0（默认）：等待任务结束后挂起、1：强制挂起
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuspendStrategy?: number
}

/**
 * vpc信息
 */
export interface VpcInfo {
  /**
   * vpc Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc子网
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcCidrBlock?: string
  /**
   * 规则Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 权限组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessGroupId?: string
}

/**
 * notebook session列表信息。
 */
export interface NotebookSessions {
  /**
   * 类型，当前支持：spark、pyspark、sparkr、sql
   */
  Kind?: string
  /**
   * Session唯一标识
   */
  SessionId?: string
  /**
   * 代理用户，默认为root
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyUser?: string
  /**
   * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
   */
  State?: string
  /**
   * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkAppId?: string
  /**
   * Session名称
   */
  Name?: string
  /**
   * Session创建时间
   */
  CreateTime?: string
  /**
   * 引擎名称
   */
  DataEngineName?: string
  /**
   * 最新的运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastRunningTime?: string
  /**
   * 创建者
   */
  Creator?: string
  /**
   * spark ui地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkUiUrl?: string
  /**
   * session类型，group：资源组session independent：独立资源session，不依赖资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionType?: string
  /**
   * 引擎id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 资源组名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
}

/**
 * CreateNotebookSessionStatementSupportBatchSQL请求参数结构体
 */
export interface CreateNotebookSessionStatementSupportBatchSQLRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * 执行的代码
   */
  Code: string
  /**
   * 类型，当前支持：sql
   */
  Kind: string
  /**
   * 是否保存运行结果
   */
  SaveResult: boolean
}

/**
 * DetachWorkGroupPolicy返回参数结构体
 */
export interface DetachWorkGroupPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkSessionBatchSqlLog返回参数结构体
 */
export interface DescribeSparkSessionBatchSqlLogResponse {
  /**
   * 状态：0：运行中、1：成功、2：失败、3：取消、4：超时；
   */
  State?: number
  /**
   * 日志信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSet?: Array<SparkSessionBatchLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDataEngine返回参数结构体
 */
export interface SwitchDataEngineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLakeFsInfo请求参数结构体
 */
export type DescribeLakeFsInfoRequest = null

/**
 * CreateCHDFSBindingProduct返回参数结构体
 */
export interface CreateCHDFSBindingProductResponse {
  /**
   * 绑定信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPointAssociates?: Array<MountPointAssociates>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserInfo请求参数结构体
 */
export interface DescribeUserInfoRequest {
  /**
   * 用户Id
   */
  UserId?: string
  /**
   * 必传字段，查询的信息类型，Group：工作组 DataAuth：数据权限 EngineAuth:引擎权限 RowFilter：行级别权限
   */
  Type?: string
  /**
   * 查询的过滤条件。

当Type为Group时，支持Key为workgroup-name的模糊搜索；

当Type为DataAuth时，支持key：

policy-type：权限类型。

policy-source：数据来源。

data-name：库表的模糊搜索。

当Type为EngineAuth时，支持key：

policy-type：权限类型。

policy-source：数据来源。

engine-name：库表的模糊搜索。
   */
  Filters?: Array<Filter>
  /**
   * 排序字段。

当Type为Group时，支持create-time、group-name

当Type为DataAuth时，支持create-time

当Type为EngineAuth时，支持create-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc
   */
  Sorting?: string
  /**
   * 返回数量，默认20，最大值100
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
}

/**
 * DescribeUserType返回参数结构体
 */
export interface DescribeUserTypeResponse {
  /**
   * 用户类型。ADMIN：管理员 COMMON：普通用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteThirdPartyAccessUser请求参数结构体
 */
export type DeleteThirdPartyAccessUserRequest = null

/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeForbiddenTablePro请求参数结构体
 */
export type DescribeForbiddenTableProRequest = null

/**
 * CreateDataEngine返回参数结构体
 */
export interface CreateDataEngineResponse {
  /**
   * 虚拟引擎id
   */
  DataEngineId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEngine请求参数结构体
 */
export interface DescribeDataEngineRequest {
  /**
   * House名称
   */
  DataEngineName: string
}

/**
 * 数据脱敏用户组信息
 */
export interface GroupInfo {
  /**
   * 用户组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupId?: number
  /**
   * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyType?: string
}

/**
 * Kerberos详细信息
 */
export interface KerberosInfo {
  /**
   * Krb5Conf文件值
   */
  Krb5Conf?: string
  /**
   * KeyTab文件值
   */
  KeyTab?: string
  /**
   * 服务主体
   */
  ServicePrincipal?: string
}

/**
 * CreateDataEngine请求参数结构体
 */
export interface CreateDataEngineRequest {
  /**
   * 引擎类型spark/presto
   */
  EngineType: string
  /**
   * 虚拟集群名称
   */
  DataEngineName: string
  /**
   * 集群类型 spark_private/presto_private/presto_cu/spark_cu
   */
  ClusterType: string
  /**
   * 计费模式 0=共享模式 1=按量计费 2=包年包月
   */
  Mode: number
  /**
   * 是否自动启动集群
   */
  AutoResume: boolean
  /**
   * 最小资源
   */
  MinClusters?: number
  /**
   * 最大资源
   */
  MaxClusters?: number
  /**
   * 是否为默认虚拟集群
   * @deprecated
   */
  DefaultDataEngine?: boolean
  /**
   * VPC网段
   */
  CidrBlock?: string
  /**
   * 描述信息
   */
  Message?: string
  /**
   * 集群规模
   */
  Size?: number
  /**
   * 计费类型，后付费：0，预付费：1。当前只支持后付费，不填默认为后付费。
   */
  PayMode?: number
  /**
   * 资源使用时长，后付费：固定填3600，预付费：最少填1，代表购买资源一个月，最长不超过120。默认1
   */
  TimeSpan?: number
  /**
   * 资源使用时长的单位，后付费：s，预付费：m。默认为s
   */
  TimeUnit?: string
  /**
   * 资源的自动续费标志。后付费无需续费，固定填0；预付费下：0表示手动续费、1代表自动续费、2代表不续费，在0下如果是大客户，会自动帮大客户续费。默认为0
   */
  AutoRenew?: number
  /**
   * 创建资源的时候需要绑定的标签信息
   */
  Tags?: Array<TagInfo>
  /**
   * 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起
   */
  AutoSuspend?: boolean
  /**
   * 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥）
   */
  CrontabResumeSuspend?: number
  /**
   * 定时启停策略，复杂类型：包含启停时间、挂起集群策略
   */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy
  /**
   * 引擎执行任务类型，有效值：SQL/BATCH，默认为SQL
   */
  EngineExecType?: string
  /**
   * 单个集群最大并发任务数，默认5
   */
  MaxConcurrency?: number
  /**
   * 可容忍的排队时间，默认0。当任务排队的时间超过可容忍的时间时可能会触发扩容。如果该参数为0，则表示一旦有任务排队就可能立即触发扩容。
   */
  TolerableQueueTime?: number
  /**
   * 集群自动挂起时间，默认10分钟
   */
  AutoSuspendTime?: number
  /**
   * 资源类型。Standard_CU：标准型；Memory_CU：内存型
   */
  ResourceType?: string
  /**
   * 集群高级配置
   */
  DataEngineConfigPairs?: Array<DataEngineConfigPair>
  /**
   * 集群镜像版本名字。如SuperSQL-P 1.1;SuperSQL-S 3.2等,不传，默认创建最新镜像版本的集群
   */
  ImageVersionName?: string
  /**
   * 主集群名称，创建容灾集群时指定
   */
  MainClusterName?: string
  /**
   * spark jar 包年包月集群是否开启弹性
   */
  ElasticSwitch?: boolean
  /**
   * spark jar 包年包月集群弹性上限
   */
  ElasticLimit?: number
  /**
   * spark作业集群session资源配置模板
   */
  SessionResourceTemplate?: SessionResourceTemplate
  /**
   * 自动授权
   */
  AutoAuthorization?: boolean
  /**
   * 引擎网络ID
   */
  EngineNetworkId?: string
  /**
   * 引擎世代，SuperSQL：代表supersql引擎，Native：代表标准引擎。默认值为SuperSQL
   */
  EngineGeneration?: string
}

/**
 * DescribeNotebookSession请求参数结构体
 */
export interface DescribeNotebookSessionRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
}

/**
 * UpgradeDataEngineImage请求参数结构体
 */
export interface UpgradeDataEngineImageRequest {
  /**
   * 引擎ID
   */
  DataEngineId: string
}

/**
 * CSV类型数据格式
 */
export interface CSV {
  /**
   * 压缩格式，["Snappy", "Gzip", "None"选一]。
   */
  CodeCompress?: string
  /**
   * CSV序列化及反序列化数据结构。
   */
  CSVSerde?: CSVSerde
  /**
   * 标题行，默认为0。
   */
  HeadLines?: number
  /**
   * 格式，默认值为CSV
   */
  Format?: string
}

/**
 * CreateNotebookSessionStatement请求参数结构体
 */
export interface CreateNotebookSessionStatementRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * 执行的代码
   */
  Code: string
  /**
   * 类型，当前支持：spark、pyspark、sparkr、sql
   */
  Kind: string
}

/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
  /**
   * 指定查询的子用户uin，用户需要通过CreateUser接口创建。
   */
  UserId?: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值100
   */
  Limit?: number
  /**
   * 排序字段，支持如下字段类型，create-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc
   */
  Sorting?: string
  /**
   * 过滤条件，支持如下字段类型，user-type：根据用户类型过滤。user-keyword：根据用户名称过滤
   */
  Filters?: Array<Filter>
}

/**
 * CreateExportTask返回参数结构体
 */
export interface CreateExportTaskResponse {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUsersToWorkGroup请求参数结构体
 */
export interface AddUsersToWorkGroupRequest {
  /**
   * 要操作的工作组和用户信息
   */
  AddInfo: UserIdSetOfWorkGroupId
}

/**
 * ModifyAdvancedStoreLocation请求参数结构体
 */
export interface ModifyAdvancedStoreLocationRequest {
  /**
   * 查询结果保存cos路径
   */
  StoreLocation: string
  /**
   * 是否启用高级设置：0-否，1-是
   */
  Enable: number
}

/**
 * DescribeNotebookSessionLog请求参数结构体
 */
export interface DescribeNotebookSessionLogRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * 分页参数，默认200
   */
  Limit?: number
  /**
   * 分页参数，默认0
   */
  Offset?: number
}

/**
 * 授权用户信息
 */
export interface UserInfo {
  /**
   * 用户Id，和子用户uin相同
   */
  UserId: string
  /**
   * 用户描述信息，方便区分不同用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDescription: string
  /**
   * 单独给用户绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicySet: Array<Policy>
  /**
   * 当前用户的创建者
   */
  Creator: string
  /**
   * 创建时间，格式如2021-07-28 16:19:32
   */
  CreateTime: string
  /**
   * 关联的工作组集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupSet: Array<WorkGroupMessage>
  /**
   * 是否是主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOwner: boolean
  /**
   * 用户类型。ADMIN：管理员 COMMON：普通用户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType: string
  /**
   * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias: string
}

/**
 * GetOptimizerPolicy请求参数结构体
 */
export interface GetOptimizerPolicyRequest {
  /**
   * 策略描述
   */
  SmartPolicy: SmartPolicy
}

/**
 * 用户信息集合
 */
export interface Users {
  /**
   * 用户信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSet: Array<UserMessage>
  /**
   * 用户总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
}

/**
 * 引擎配置
 */
export interface DataEngineConfigPair {
  /**
   * 配置项
   */
  ConfigItem: string
  /**
   * 配置值
   */
  ConfigValue: string
}

/**
 * SuspendResumeDataEngine返回参数结构体
 */
export interface SuspendResumeDataEngineResponse {
  /**
   * 虚拟集群详细信息
   */
  DataEngineName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源连接的网络信息
 */
export interface DatasourceConnectionLocation {
  /**
   * 数据连接所在Vpc实例Id，如“vpc-azd4dt1c”。
   */
  VpcId: string
  /**
   * Vpc的IPv4 CIDR
   */
  VpcCidrBlock: string
  /**
   * 数据连接所在子网的实例Id，如“subnet-bthucmmy”
   */
  SubnetId: string
  /**
   * Subnet的IPv4 CIDR
   */
  SubnetCidrBlock: string
}

/**
 * AttachUserPolicy请求参数结构体
 */
export interface AttachUserPolicyRequest {
  /**
   * 用户Id，和子用户uin相同，需要先使用CreateUser接口创建用户。可以使用DescribeUsers接口查看。
   */
  UserId: string
  /**
   * 鉴权策略集合
   */
  PolicySet?: Array<Policy>
}

/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
  /**
   * 任务Id，全局唯一
   */
  TaskId: string
}

/**
 * 文本格式
 */
export interface TextFile {
  /**
   * 文本类型，本参数取值为TextFile。
   */
  Format?: string
  /**
   * 处理文本用的正则表达式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regex?: string
}

/**
 * 工作组集合
 */
export interface WorkGroups {
  /**
   * 工作组信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupSet: Array<WorkGroupMessage>
  /**
   * 工作组总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
}

/**
 * CreateNotebookSessionStatement返回参数结构体
 */
export interface CreateNotebookSessionStatementResponse {
  /**
   * Session Statement详情
   */
  NotebookSessionStatement?: NotebookSessionStatementInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTaskJobLogName返回参数结构体
 */
export interface ListTaskJobLogNameResponse {
  /**
   * 日志名称列表
   */
  Names?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLakeFsTaskResult请求参数结构体
 */
export interface DescribeLakeFsTaskResultRequest {
  /**
   * 需要访问的任务结果路径
   */
  FsPath: string
}

/**
 * 非DLC产品CHDFS绑定
 */
export interface OtherCHDFSBinding {
  /**
   * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 用户名称（该字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuperUser?: Array<string>
  /**
   * vpc配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcInfo?: Array<CHDFSProductVpcInfo>
  /**
   * 是否与该桶绑定（该字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsBind?: boolean
}

/**
 * AlterDMSTable请求参数结构体
 */
export interface AlterDMSTableRequest {
  /**
   * 当前名称
   */
  CurrentName: string
  /**
   * 当前数据库名称
   */
  CurrentDbName: string
  /**
   * 基础对象
   */
  Asset?: Asset
  /**
   * 表类型
   */
  Type?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 存储大小
   */
  StorageSize?: number
  /**
   * 记录数量
   */
  RecordCount?: number
  /**
   * 生命周期
   */
  LifeTime?: number
  /**
   * 数据更新时间
   */
  DataUpdateTime?: string
  /**
   * 结构更新时间
   */
  StructUpdateTime?: string
  /**
   * 最后访问时间
   */
  LastAccessTime?: string
  /**
   * 存储对象
   */
  Sds?: DMSSds
  /**
   * 列
   */
  Columns?: Array<DMSColumn>
  /**
   * 分区键值
   */
  PartitionKeys?: Array<DMSColumn>
  /**
   * 视图文本
   */
  ViewOriginalText?: string
  /**
   * 视图文本
   */
  ViewExpandedText?: string
  /**
   * 分区
   */
  Partitions?: Array<DMSPartition>
  /**
   * 当前表名
   */
  Name?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DescribeDMSPartitions返回参数结构体
 */
export interface DescribeDMSPartitionsResponse {
  /**
   * 分区信息
   */
  Partitions?: Array<DMSPartition>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScript请求参数结构体
 */
export interface CreateScriptRequest {
  /**
   * 脚本名称，最大不能超过255个字符。
   */
  ScriptName: string
  /**
   * base64编码后的sql语句
   */
  SQLStatement: string
  /**
   * 脚本描述， 不能超过50个字符
   */
  ScriptDesc?: string
  /**
   * 数据库名称
   */
  DatabaseName?: string
}

/**
 * 数据表数据格式。
 */
export interface DataFormat {
  /**
   * 文本格式，TextFile。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextFile?: TextFile
  /**
   * 文本格式，CSV。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CSV?: CSV
  /**
   * 文本格式，Json。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Json?: Other
  /**
   * Parquet格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Parquet?: Other
  /**
   * ORC格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ORC?: Other
  /**
   * AVRO格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  AVRO?: Other
}

/**
 * DescribeNotebookSessionLog返回参数结构体
 */
export interface DescribeNotebookSessionLogResponse {
  /**
   * 日志信息，默认获取最新的200条
   */
  Logs?: Array<string>
  /**
   * 分页参数，默认200
   */
  Limit?: number
  /**
   * 分页参数，默认0
   */
  Offset?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeForbiddenTablePro返回参数结构体
 */
export interface DescribeForbiddenTableProResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkGroupInfo请求参数结构体
 */
export interface DescribeWorkGroupInfoRequest {
  /**
   * 工作组Id
   */
  WorkGroupId?: number
  /**
   * 查询信息类型：User：用户信息 DataAuth：数据权限 EngineAuth：引擎权限
   */
  Type?: string
  /**
   * 查询的过滤条件。

当Type为User时，支持Key为user-name的模糊搜索；

当Type为DataAuth时，支持key：

policy-type：权限类型。

policy-source：数据来源。

data-name：库表的模糊搜索。

当Type为EngineAuth时，支持key：

policy-type：权限类型。

policy-source：数据来源。

engine-name：库表的模糊搜索。
   */
  Filters?: Array<Filter>
  /**
   * 排序字段。

当Type为User时，支持create-time、user-name

当Type为DataAuth时，支持create-time

当Type为EngineAuth时，支持create-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc
   */
  Sorting?: string
  /**
   * 返回数量，默认20，最大值100
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
}

/**
 * DescribeOtherCHDFSBindingList请求参数结构体
 */
export interface DescribeOtherCHDFSBindingListRequest {
  /**
   * 桶名
   */
  BucketId: string
}

/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回数据表的相关信息。
 */
export interface TableInfo {
  /**
   * 数据表配置信息。
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 数据表格式。每次入参可选如下其一的KV结构，[TextFile，CSV，Json, Parquet, ORC, AVRD]。
   */
  DataFormat: DataFormat
  /**
   * 数据表列信息。
   */
  Columns: Array<Column>
  /**
   * 数据表分块信息。
   */
  Partitions: Array<Partition>
  /**
   * 数据存储路径。当前仅支持cos路径，格式如下：cosn://bucket-name/filepath。
   */
  Location: string
}

/**
 * DescribeSparkSessionBatchSQL返回参数结构体
 */
export interface DescribeSparkSessionBatchSQLResponse {
  /**
   * 状态：0：运行中、1：成功、2：失败、3：取消、4：超时；
   */
  State?: number
  /**
   * SQL子任务列表，仅展示运行完成的子任务，若某个任务运行失败，后续其它子任务不返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<BatchSqlTask>
  /**
   * 非sql运行的异常事件信息，包含资源创建失败、调度异常，JOB超时等，正常运行下该Event值为空
   */
  Event?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkSessionBatchSQLCost返回参数结构体
 */
export interface DescribeSparkSessionBatchSQLCostResponse {
  /**
   * 任务消耗
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostInfo?: Array<BatchSQLCostInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasksOverview返回参数结构体
 */
export interface DescribeTasksOverviewResponse {
  /**
   * 各类任务个数大于0
   */
  TasksOverview?: TasksOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Kafka连接信息
 */
export interface KafkaInfo {
  /**
   * kakfa实例Id
   */
  InstanceId: string
  /**
   * kakfa数据源的网络信息
   */
  Location: DatasourceConnectionLocation
}

/**
 * FavorInfo
 */
export interface FavorInfo {
  /**
   * 优先事项
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * Catalog名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
  /**
   * DataBase名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBase?: string
  /**
   * Table名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
}

/**
 * DeleteDataEngine请求参数结构体
 */
export interface DeleteDataEngineRequest {
  /**
   * 删除虚拟集群的名称数组
   */
  DataEngineNames: Array<string>
}

/**
 * SmartPolicyRequest
 */
export interface SmartPolicy {
  /**
   * 基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseInfo?: SmartPolicyBaseInfo
  /**
   * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: SmartOptimizerPolicy
}

/**
 * CreateSparkSessionBatchSQL返回参数结构体
 */
export interface CreateSparkSessionBatchSQLResponse {
  /**
   * 批任务唯一标识
   */
  BatchId?: string
  /**
   * Statement任务列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statements?: Array<StatementInformation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDMSDatabase请求参数结构体
 */
export interface DescribeDMSDatabaseRequest {
  /**
   * 数据库名称
   */
  Name?: string
  /**
   * schema名称
   */
  SchemaName?: string
  /**
   * 匹配规则，只支持填*
   */
  Pattern?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DescribeLakeFsDirSummary请求参数结构体
 */
export type DescribeLakeFsDirSummaryRequest = null

/**
 * 数据格式其它类型。
 */
export interface Other {
  /**
   * 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。
   */
  Format?: string
}

/**
 * CreateSparkApp返回参数结构体
 */
export interface CreateSparkAppResponse {
  /**
   * App唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkAppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 绑定融合桶信息
 */
export interface MountPointAssociates {
  /**
   * 桶Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BucketId?: string
  /**
   * vpcId
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcCidrBlock?: string
  /**
   * 权限组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessGroupId?: string
  /**
   * 权限规则Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessRuleId?: number
}

/**
 * AlterDMSPartition返回参数结构体
 */
export interface AlterDMSPartitionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTable返回参数结构体
 */
export interface DescribeTableResponse {
  /**
   * 数据表对象
   */
  Table?: TableResponseInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachUserPolicy返回参数结构体
 */
export interface DetachUserPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 洞察分析结果返回体
 */
export interface AnalysisTaskResults {
  /**
   * 任务Id
   */
  Id?: string
  /**
   * 任务创建时间，毫秒时间戳
   */
  InstanceStartTime?: number
  /**
   * 任务结束时间，毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCompleteTime?: number
  /**
   * 任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。
   */
  State?: number
  /**
   * 任务SQL语句
   */
  SQL?: string
  /**
   * 计算资源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineName?: string
  /**
   * 单位毫秒，引擎内执行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobTimeSum?: number
  /**
   * 单位秒，CU资源消耗
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTimeSum?: number
  /**
   * 数据扫描总行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputRecordsSum?: number
  /**
   * 数据扫描总 bytes
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputBytesSum?: number
  /**
   * 输出总行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputRecordsSum?: number
  /**
   * 输出总 bytes
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputBytesSum?: number
  /**
   * shuffle read 总 bytes
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShuffleReadBytesSum?: number
  /**
   * shuffle read 总行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShuffleReadRecordsSum?: number
  /**
   * 洞察结果类型分类，一个 json 数组，有如下几种类型：SPARK-StageScheduleDelay（资源抢占）, SPARK-ShuffleFailure（Shuffle异常）, SPARK-SlowTask（慢task）, SPARK-DataSkew（数据倾斜）, SPARK-InsufficientResource（磁盘或内存不足）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisStatus?: string
}

/**
 * UnbindWorkGroupsFromUser返回参数结构体
 */
export interface UnbindWorkGroupsFromUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AlterDMSDatabase返回参数结构体
 */
export interface AlterDMSDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelNotebookSessionStatement返回参数结构体
 */
export interface CancelNotebookSessionStatementResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DataEngine详细信息
 */
export interface DataEngineInfo {
  /**
   * DataEngine名称
   */
  DataEngineName: string
  /**
   * 引擎类型 spark/presto
   */
  EngineType: string
  /**
   * 集群资源类型 spark_private/presto_private/presto_cu/spark_cu
   */
  ClusterType: string
  /**
   * 引用ID
   */
  QuotaId?: string
  /**
   * 数据引擎状态  -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中
   */
  State?: number
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 集群规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 计费模式 0共享模式 1按量计费 2包年包月
   */
  Mode?: number
  /**
   * 最小集群数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinClusters?: number
  /**
   * 最大集群数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxClusters?: number
  /**
   * 是否自动恢复
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoResume?: boolean
  /**
   * 自动恢复时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpendAfter?: number
  /**
   * 集群网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrBlock?: string
  /**
   * 是否为默认引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultDataEngine?: boolean
  /**
   * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 操作者
   */
  SubAccountUin?: string
  /**
   * 到期时间
   */
  ExpireTime?: string
  /**
   * 隔离时间
   */
  IsolatedTime?: string
  /**
   * 冲正时间
   */
  ReversalTime?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 标签对集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<TagInfo>
  /**
   * 引擎拥有的权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: Array<string>
  /**
   * 是否自定挂起集群：false（默认）：不自动挂起、true：自动挂起
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSuspend?: boolean
  /**
   * 定时启停集群策略：0（默认）：关闭定时策略、1：开启定时策略（注：定时启停策略与自动挂起策略互斥）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabResumeSuspend?: number
  /**
   * 定时启停策略，复杂类型：包含启停时间、挂起集群策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabResumeSuspendStrategy?: CrontabResumeSuspendStrategy
  /**
   * 引擎执行任务类型，有效值：SQL/BATCH
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineExecType?: string
  /**
   * 自动续费标志，0，初始状态，默认不自动续费，若用户有预付费不停服特权，自动续费。1：自动续费。2：明确不自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 集群自动挂起时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSuspendTime?: number
  /**
   * 网络连接配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConnectionSet?: Array<NetworkConnection>
  /**
   * ui的跳转地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  UiURL?: string
  /**
   * 引擎的资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: string
  /**
   * 集群镜像版本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageVersionId?: string
  /**
   * 集群镜像小版本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildImageVersionId?: string
  /**
   * 集群镜像版本名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageVersionName?: string
  /**
   * 是否开启备集群
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartStandbyCluster?: boolean
  /**
   * spark jar 包年包月集群是否开启弹性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElasticSwitch?: boolean
  /**
   * spark jar 包年包月集群弹性上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElasticLimit?: number
  /**
   * 是否为默认引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultHouse?: boolean
  /**
   * 单个集群任务最大并发数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxConcurrency?: number
  /**
   * 任务排队上限时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TolerableQueueTime?: number
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAppId?: number
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserUin?: string
  /**
   * SessionResourceTemplate
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionResourceTemplate?: SessionResourceTemplate
  /**
   * 自动授权开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoAuthorization?: boolean
  /**
   * 引擎版本，支持Native/SuperSQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineGeneration?: string
  /**
   * 引擎详细类型，支持：SparkSQL/SparkBatch/PrestoSQL/Kyuubi
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineTypeDetail?: string
  /**
   * 引擎网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkId?: string
  /**
   * 标准引擎关联的资源组个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineResourceGroupCount?: number
  /**
   * 引擎当前使用量（Cu）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineResourceUsedCU?: number
  /**
   * 引擎的访问信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessInfos?: Array<AccessInfo>
  /**
   * 引擎所在网络名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkName?: string
  /**
   * 是否使用预留池
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPoolMode?: string
  /**
   * 是否支持AI，false: 不支持；true：支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportAI?: boolean
  /**
   * 网关id
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayId?: string
  /**
   * 网关状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayState?: number
  /**
   * 是否能执行AI任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAIGateway?: boolean
  /**
   * 1:AI引擎，0:非AI引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAIEngine?: number
}

/**
 * LockMetaData返回参数结构体
 */
export interface LockMetaDataResponse {
  /**
   * 锁id
   */
  LockId?: number
  /**
   * 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED
   */
  LockState?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckLockMetaData返回参数结构体
 */
export interface CheckLockMetaDataResponse {
  /**
   * 锁ID
   */
  LockId?: number
  /**
   * 锁状态：ACQUIRED、WAITING、ABORT、NOT_ACQUIRED
   */
  LockState?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AlterDMSDatabase请求参数结构体
 */
export interface AlterDMSDatabaseRequest {
  /**
   * 当前名称
   */
  CurrentName?: string
  /**
   * schema名称
   */
  SchemaName?: string
  /**
   * 路径
   */
  Location?: string
  /**
   * 基础对象
   */
  Asset?: Asset
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DescribeOtherCHDFSBindingList返回参数结构体
 */
export interface DescribeOtherCHDFSBindingListResponse {
  /**
   * 非DLC 产品绑定列表
   */
  OtherCHDFSBindingList?: Array<OtherCHDFSBinding>
  /**
   * 总记录数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRowFilter返回参数结构体
 */
export interface UpdateRowFilterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEngineEvents请求参数结构体
 */
export interface DescribeDataEngineEventsRequest {
  /**
   * 虚拟集群名称
   */
  DataEngineName: string
  /**
   * 返回数量，默认为10，最大为100
   */
  Limit?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
}

/**
 * DescribeDataEnginePythonSparkImages返回参数结构体
 */
export interface DescribeDataEnginePythonSparkImagesResponse {
  /**
   * PYSPARK镜像信息列表
   */
  PythonSparkImages?: Array<PythonSparkImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 元数据加锁内容
 */
export interface LockComponentInfo {
  /**
   * 数据库名称
   */
  DbName: string
  /**
   * 表名称
   */
  TableName?: string
  /**
   * 分区
   */
  Partition?: string
  /**
   * 锁类型：SHARED_READ、SHARED_WRITE、EXCLUSIVE
   */
  LockType?: string
  /**
   * 锁级别：DB、TABLE、PARTITION
   */
  LockLevel?: string
  /**
   * 锁操作：SELECT,INSERT,UPDATE,DELETE,UNSET,NO_TXN
   */
  DataOperationType?: string
  /**
   * 是否保持Acid
   */
  IsAcid?: boolean
  /**
   * 是否动态分区写
   */
  IsDynamicPartitionWrite?: boolean
}

/**
 * DescribeDataEngines返回参数结构体
 */
export interface DescribeDataEnginesResponse {
  /**
   * 数据引擎列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngines?: Array<DataEngineInfo>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源属性
 */
export interface DatasourceConnectionConfig {
  /**
   * Mysql数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mysql?: MysqlInfo
  /**
   * Hive数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hive?: HiveInfo
  /**
   * Kafka数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kafka?: KafkaInfo
  /**
   * 其他数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherDatasourceConnection?: OtherDatasourceConnection
  /**
   * PostgreSQL数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostgreSql?: DataSourceInfo
  /**
   * SQLServer数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlServer?: DataSourceInfo
  /**
   * ClickHouse数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClickHouse?: DataSourceInfo
  /**
   * Elasticsearch数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elasticsearch?: ElasticsearchInfo
  /**
   * TDSQL-PostgreSQL数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  TDSQLPostgreSql?: DataSourceInfo
  /**
   * Doris数据源连接的属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  TCHouseD?: TCHouseD
}

/**
 * UpdateRowFilter请求参数结构体
 */
export interface UpdateRowFilterRequest {
  /**
   * 行过滤策略的id，此值可以通过DescribeUserInfo或者DescribeWorkGroupInfo接口获取
   */
  PolicyId: number
  /**
   * 新的过滤策略。
   */
  Policy: Policy
}

/**
 * 表字段描述信息
 */
export interface TColumn {
  /**
   * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 字段默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default?: string
  /**
   * 字段是否是非空
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotNull?: boolean
  /**
   * 表示整个 numeric 的长度,取值1-38
注意：此字段可能返回 null，表示取不到有效值。
   */
  Precision?: number
  /**
   * 表示小数部分的长度
Scale小于Precision
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scale?: number
  /**
   * 字段位置，小的在前
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 是否为分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartition?: boolean
}

/**
 * LakeFileSystem使用的临时token
 */
export interface LakeFileSystemToken {
  /**
   * Token使用的临时密钥的ID
   */
  SecretId?: string
  /**
   * Token使用的临时密钥
   */
  SecretKey?: string
  /**
   * Token信息
   */
  Token?: string
  /**
   * 过期时间
   */
  ExpiredTime?: number
  /**
   * 颁布时间
   */
  IssueTime?: number
}

/**
 * AlterDMSTable返回参数结构体
 */
export interface AlterDMSTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUpdatableDataEngines返回参数结构体
 */
export interface DescribeUpdatableDataEnginesResponse {
  /**
   * 集群基础信息
   */
  DataEngineBasicInfos?: Array<DataEngineBasicInfo>
  /**
   * 集群个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
  /**
   * 需要删除的用户的Id
   */
  UserIds: Array<string>
}

/**
 * 引擎规格详情
 */
export interface DataEngineScaleInfoDetail {
  /**
   * 统计开始时间，格式为：yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 统计结束时间，格式为：yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 当前统计时间段，引擎规格
   */
  CU?: number
}

/**
 * DeleteDataEngine返回参数结构体
 */
export interface DeleteDataEngineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos权限描述
 */
export interface CosPermission {
  /**
   * cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPath?: string
  /**
   * 权限【"read","write"】
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: Array<string>
}

/**
 * ip端口对信息
 */
export interface IpPortPair {
  /**
   * ip信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 端口信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
}

/**
 * DescribeTasksAnalysis返回参数结构体
 */
export interface DescribeTasksAnalysisResponse {
  /**
   * 洞察结果分页列表
   */
  TaskList?: Array<AnalysisTaskResults>
  /**
   * 洞察结果总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDataEngine返回参数结构体
 */
export interface RestartDataEngineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDataEngineImage返回参数结构体
 */
export interface SwitchDataEngineImageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkAppTasks返回参数结构体
 */
export interface DescribeSparkAppTasksResponse {
  /**
   * 任务结果（该字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: TaskResponseInfo
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 任务结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkAppTasks?: Array<TaskResponseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCHDFSBindingProduct请求参数结构体
 */
export interface CreateCHDFSBindingProductRequest {
  /**
   * 需要绑定的元数据加速桶名
   */
  MountPoint: string
  /**
   * 桶的类型，分为cos和lakefs
   */
  BucketType: string
  /**
   * 产品名称
   */
  ProductName: string
  /**
   * 引擎名称，ProductName选择DLC产品时，必传此参数。其他产品可不传
   */
  EngineName?: string
  /**
   * vpc信息，产品名称为other时必传此参数
   */
  VpcInfo?: Array<VpcInfo>
}

/**
 * Notebook Session详细信息。
 */
export interface NotebookSessionInfo {
  /**
   * Session名称
   */
  Name?: string
  /**
   * 类型，当前支持：spark、pyspark、sparkr、sql
   */
  Kind?: string
  /**
   * DLC Spark作业引擎名称
   */
  DataEngineName?: string
  /**
   * Session相关配置，当前支持：eni、roleArn以及用户指定的配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Arguments?: Array<KVPair>
  /**
   * 运行程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgramDependentFiles?: Array<string>
  /**
   * 依赖的jar程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgramDependentJars?: Array<string>
  /**
   * 依赖的python程序地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgramDependentPython?: Array<string>
  /**
   * 依赖的pyspark虚拟环境地址，当前支持：cosn://和lakefs://两种路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgramArchives?: Array<string>
  /**
   * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSize?: string
  /**
   * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSize?: string
  /**
   * 指定的Executor数量，默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorNumbers?: number
  /**
   * 代理用户，默认为root
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyUser?: string
  /**
   * 指定的Session超时时间，单位秒，默认3600秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeoutInSecond?: number
  /**
   * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkAppId?: string
  /**
   * Session唯一标识
   */
  SessionId?: string
  /**
   * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
   */
  State?: string
  /**
   * Session创建时间
   */
  CreateTime?: string
  /**
   * 其它信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppInfo?: Array<KVPair>
  /**
   * Spark ui地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkUiUrl?: string
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorMaxNumbers?: number
  /**
   * session类型，group：资源组下session independent：独立资源session， 不依赖资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionType?: string
  /**
   * 引擎id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * session，pod大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodSize?: number
  /**
   * pod数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodNumbers?: number
}

/**
 * DataEngine基本信息
 */
export interface DataEngineBasicInfo {
  /**
   * DataEngine名称
   */
  DataEngineName?: string
  /**
   * 数据引擎状态  -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中
   */
  State?: number
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 返回信息
   */
  Message?: string
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 引擎类型，有效值：PrestoSQL/SparkSQL/SparkBatch
   */
  DataEngineType?: string
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 账号ID
   */
  UserUin?: string
}

/**
 * ModifySparkApp请求参数结构体
 */
export interface ModifySparkAppRequest {
  /**
   * spark作业名
   */
  AppName: string
  /**
   * spark作业类型，1代表spark jar作业，2代表spark streaming作业
   */
  AppType: number
  /**
   * 执行spark作业的数据引擎名称
   */
  DataEngine: string
  /**
   * spark作业程序包文件路径
   */
  AppFile: string
  /**
   * 数据访问策略，CAM Role arn
   */
  RoleArn: number
  /**
   * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  AppDriverSize: string
  /**
   * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  AppExecutorSize: string
  /**
   * spark作业executor个数
   */
  AppExecutorNums: number
  /**
   * spark作业Id
   */
  SparkAppId: string
  /**
   * 该字段已下线，请使用字段Datasource
   */
  Eni?: string
  /**
   * spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocal?: string
  /**
   * spark作业主类
   */
  MainClass?: string
  /**
   * spark配置，以换行符分隔
   */
  AppConf?: string
  /**
   * spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalJars?: string
  /**
   * spark 作业依赖jar包（--jars），以逗号分隔
   */
  AppJars?: string
  /**
   * spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalFiles?: string
  /**
   * spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔
   */
  AppFiles?: string
  /**
   * pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalPythonFiles?: string
  /**
   * pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔
   */
  AppPythonFiles?: string
  /**
   * spark作业程序入参
   */
  CmdArgs?: string
  /**
   * 最大重试次数，只对spark流任务生效
   */
  MaxRetries?: number
  /**
   * 数据源名
   */
  DataSource?: string
  /**
   * spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalArchives?: string
  /**
   * spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔
   */
  AppArchives?: string
  /**
   * Spark Image 版本号
   */
  SparkImage?: string
  /**
   * Spark Image 版本名称
   */
  SparkImageVersion?: string
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums
   */
  AppExecutorMaxNumbers?: number
  /**
   * 关联dlc查询脚本
   */
  SessionId?: string
  /**
   * 任务资源配置是否继承集群配置模板：0（默认）不继承、1：继承
   */
  IsInherit?: number
  /**
   * 是否使用session脚本的sql运行任务：false：否，true：是
   */
  IsSessionStarted?: boolean
}

/**
 * AssignMangedTableProperties请求参数结构体
 */
export interface AssignMangedTablePropertiesRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 表字段信息
   */
  Columns: Array<TColumn>
  /**
   * 表分区信息
   */
  Partitions?: Array<TPartition>
  /**
   * 表属性信息
   */
  Properties?: Array<Property>
  /**
   * V2 upsert表 upsert键
   */
  UpsertKeys?: Array<string>
}

/**
 * 绑定到同一个工作组的用户Id的集合
 */
export interface UserIdSetOfWorkGroupId {
  /**
   * 工作组Id
   */
  WorkGroupId: number
  /**
   * 用户Id集合，和CAM侧Uin匹配
   */
  UserIds: Array<string>
}

/**
 * AlterDMSPartition请求参数结构体
 */
export interface AlterDMSPartitionRequest {
  /**
   * 当前名称，变更前db名称
   */
  CurrentDbName: string
  /**
   * 当前名称，变更前table名称
   */
  CurrentTableName: string
  /**
   * 当前名称，变更前Part名称
   */
  CurrentValues: string
  /**
   * 分区
   */
  Partition?: DMSPartition
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * ReportHeartbeatMetaData返回参数结构体
 */
export interface ReportHeartbeatMetaDataResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryInternalTableWarehouse返回参数结构体
 */
export interface QueryInternalTableWarehouseResponse {
  /**
   * warehouse路径
   */
  WarehousePath: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * script实例。
 */
export interface Script {
  /**
   * 脚本Id，长度36字节。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptId?: string
  /**
   * 脚本名称，长度0-25。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptName?: string
  /**
   * 脚本描述，长度0-50。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptDesc?: string
  /**
   * 默认关联数据库。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * SQL描述，长度0-10000。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQLStatement?: string
  /**
   * 更新时间戳， 单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
}

/**
 * CheckDataEngineImageCanBeUpgrade返回参数结构体
 */
export interface CheckDataEngineImageCanBeUpgradeResponse {
  /**
   * 当前大版本下，可升级的集群镜像小版本id
   */
  ChildImageVersionId?: string
  /**
   * 是否能够升级
   */
  IsUpgrade?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInternalTable请求参数结构体
 */
export interface CreateInternalTableRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 表字段信息
   */
  Columns: Array<TColumn>
  /**
   * 表分区信息
   */
  Partitions?: Array<TPartition>
  /**
   * 表属性信息
   */
  Properties?: Array<Property>
}

/**
 * 批量顺序执行任务集合
 */
export interface TasksInfo {
  /**
   * 任务类型，SQLTask：SQL查询任务。SparkSQLTask：Spark SQL查询任务
   */
  TaskType: string
  /**
   * 容错策略。Proceed：前面任务出错/取消后继续执行后面的任务。Terminate：前面的任务出错/取消之后终止后面任务的执行，后面的任务全部标记为已取消。
   */
  FailureTolerance: string
  /**
   * base64加密后的SQL语句，用";"号分隔每个SQL语句，一次最多提交50个任务。严格按照前后顺序执行
   */
  SQL: string
  /**
   * 任务的配置信息，当前仅支持SparkSQLTask任务。
   */
  Config?: Array<KVPair>
  /**
   * 任务的用户自定义参数信息
   */
  Params?: Array<KVPair>
}

/**
 * AttachWorkGroupPolicy请求参数结构体
 */
export interface AttachWorkGroupPolicyRequest {
  /**
   * 工作组Id
   */
  WorkGroupId: number
  /**
   * 要绑定的策略集合
   */
  PolicySet?: Array<Policy>
}

/**
 * notebook session statement输出信息。
 */
export interface StatementOutput {
  /**
   * 执行总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionCount: number
  /**
   * Statement数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: Array<KVPair>
  /**
   * Statement状态:ok,error
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 错误名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorName: string
  /**
   * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorValue: string
  /**
   * 错误堆栈信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage: Array<string>
  /**
   * SQL类型任务结果返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQLResult?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSessionStatements请求参数结构体
 */
export interface DescribeNotebookSessionStatementsRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * 批任务id
   */
  BatchId: string
}

/**
 * UpdateDataEngine返回参数结构体
 */
export interface UpdateDataEngineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasksOverview请求参数结构体
 */
export interface DescribeTasksOverviewRequest {
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 筛选条件
   */
  Filters?: Array<Filter>
  /**
   * 引擎名
   */
  DataEngineName?: string
}

/**
 * 表分区字段信息
 */
export interface TPartition {
  /**
   * 字段名称
   */
  Name: string
  /**
   * 字段类型
   */
  Type?: string
  /**
   * 字段描述
   */
  Comment?: string
  /**
   * 分区类型（已废弃）
   */
  PartitionType?: string
  /**
   * 分区格式（已废弃）
   */
  PartitionFormat?: string
  /**
   * 分区分隔数（已废弃）
   */
  PartitionDot?: number
  /**
   * 分区转换策略
   */
  Transform?: string
  /**
   * 策略参数
   */
  TransformArgs?: Array<string>
}

/**
 * 描述DLC托管存储基本信息
 */
export interface LakeFsInfo {
  /**
   * 托管存储名称
   */
  Name?: string
  /**
   * 托管存储类型
   */
  Type?: string
  /**
   * 容量
   */
  SpaceUsedSize?: number
  /**
   * 创建时候的时间戳
   */
  CreateTimeStamp?: number
  /**
   * 是否是用户默认桶，0：默认桶，1：非默认桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultBucket?: number
  /**
   * 托管存储short name
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShortName?: string
  /**
   * 桶描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 托管桶状态，当前取值为：creating、bind、readOnly、isolate
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * QueryResult请求参数结构体
 */
export interface QueryResultRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * lastReadFile为上一次读取的文件，lastReadOffset为上一次读取到的位置
   */
  NextToken?: string
}

/**
 * CheckDataEngineImageCanBeRollback请求参数结构体
 */
export interface CheckDataEngineImageCanBeRollbackRequest {
  /**
   * 引擎唯一id
   */
  DataEngineId: string
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 计算任务，该参数中包含任务类型及其相关配置信息
   */
  Task: Task
  /**
   * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
   */
  DatabaseName?: string
  /**
   * 默认数据源名称。
   */
  DatasourceConnectionName?: string
  /**
   * 数据引擎名称，不填提交到默认集群
   */
  DataEngineName?: string
  /**
   * 标准spark执行任务resourceGroupName
   */
  ResourceGroupName?: string
}

/**
 * CreateTable请求参数结构体
 */
export interface CreateTableRequest {
  /**
   * 数据表配置信息
   */
  TableInfo: TableInfo
}

/**
 * DescribeSparkSessionBatchSqlLog请求参数结构体
 */
export interface DescribeSparkSessionBatchSqlLogRequest {
  /**
   * SparkSQL唯一标识
   */
  BatchId: string
  /**
   * 用户自定义主键，若不为空，则按照该值进行查询
   */
  CustomKey?: string
}

/**
 * 同一个用户绑定的工作组集合
 */
export interface WorkGroupIdSetOfUserId {
  /**
   * 用户Id，和CAM侧Uin匹配
   */
  UserId: string
  /**
   * 工作组Id集合
   */
  WorkGroupIds: Array<number | bigint>
}

/**
 * DescribeUpdatableDataEngines请求参数结构体
 */
export interface DescribeUpdatableDataEnginesRequest {
  /**
   * 引擎配置操作命令，UpdateSparkSQLLakefsPath 更新托管表路径，UpdateSparkSQLResultPath 更新结果桶路径
   */
  DataEngineConfigCommand: string
  /**
   * 是否使用托管存储作为结果存储
   */
  UseLakeFs?: boolean
  /**
   * 用户自定义结果存储路径
   */
  CustomResultPath?: string
}

/**
 * DeleteTable请求参数结构体
 */
export interface DeleteTableRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
}

/**
 * DescribeStoreLocation请求参数结构体
 */
export type DescribeStoreLocationRequest = null

/**
 * DescribeViews请求参数结构体
 */
export interface DescribeViewsRequest {
  /**
   * 列出该数据库下所属数据表。
   */
  DatabaseName: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为其一
view-name - String - （过滤条件）数据表名称,形如：view-001。
view-id - String - （过滤条件）view id形如：12342。
   */
  Filters?: Array<Filter>
  /**
   * 数据库所属的数据源名称
   */
  DatasourceConnectionName?: string
  /**
   * 排序字段
   */
  Sort?: string
  /**
   * 排序规则，true:升序；false:降序
   */
  Asc?: boolean
  /**
   * 按视图更新时间筛选，开始时间，如2021-11-11 00:00:00
   */
  StartTime?: string
  /**
   * 按视图更新时间筛选，结束时间，如2021-11-12 00:00:00
   */
  EndTime?: string
}

/**
 * GrantDLCCatalogAccess请求参数结构体
 */
export interface GrantDLCCatalogAccessRequest {
  /**
   * 授权VpcId
   */
  VpcId: string
  /**
   * 产品(EMR|DLC|Doris|Inlong|Wedata)
   */
  Product: string
  /**
   * 描述
   */
  Description?: string
  /**
   * VPC所属账号UIN
   */
  VpcUin?: string
  /**
   * VPC所属账号AppId
   */
  VpcAppId?: number
}

/**
 * ReportHeartbeatMetaData请求参数结构体
 */
export interface ReportHeartbeatMetaDataRequest {
  /**
   * 数据源名称
   */
  DatasourceConnectionName?: string
  /**
   * 锁ID
   */
  LockId?: number
  /**
   * 事务ID
   */
  TxnId?: number
}

/**
 * AttachWorkGroupPolicy返回参数结构体
 */
export interface AttachWorkGroupPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDMSTables请求参数结构体
 */
export interface DescribeDMSTablesRequest {
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库schema名称
   */
  SchemaName?: string
  /**
   * 表名称
   */
  Name?: string
  /**
   * catalog类型
   */
  Catalog?: string
  /**
   * 查询关键词
   */
  Keyword?: string
  /**
   * 查询模式，只支持填*
   */
  Pattern?: string
  /**
   * 表类型
   */
  Type?: string
  /**
   * 筛选参数：更新开始时间
   */
  StartTime?: string
  /**
   * 筛选参数：更新结束时间
   */
  EndTime?: string
  /**
   * 分页参数
   */
  Limit?: number
  /**
   * 分页参数
   */
  Offset?: number
  /**
   * 排序字段：create_time：创建时间
   */
  Sort?: string
  /**
   * 排序字段：true：升序（默认），false：降序
   */
  Asc?: boolean
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * GenerateCreateMangedTableSql返回参数结构体
 */
export interface GenerateCreateMangedTableSqlResponse {
  /**
   * 创建托管存储内表sql语句描述
   */
  Execution?: Execution
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源信息
 */
export interface DatasourceConnectionInfo {
  /**
   * 数据源数字Id
   */
  Id: number
  /**
   * 数据源字符串Id
   */
  DatasourceConnectionId: string
  /**
   * 数据源名称
   */
  DatasourceConnectionName: string
  /**
   * 数据源描述
   */
  DatasourceConnectionDesc: string
  /**
   * 数据源类型，支持DataLakeCatalog、IcebergCatalog、Result、Mysql、HiveCos、HiveHdfs
   */
  DatasourceConnectionType: string
  /**
   * 数据源属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionConfig: DatasourceConnectionConfig
  /**
   * 数据源状态：0（初始化）、1（成功）、-1（已删除）、-2（失败）、-3（删除中）
   */
  State: number
  /**
   * 地域
   */
  Region: string
  /**
   * 用户AppId
   */
  AppId: string
  /**
   * 数据源创建时间
   */
  CreateTime: string
  /**
   * 数据源最近一次更新时间
   */
  UpdateTime: string
  /**
   * 数据源同步失败原因
   */
  Message: string
  /**
   * 数据源绑定的计算引擎信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngines?: Array<DataEngineInfo>
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 网络配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConnectionSet?: Array<NetworkConnection>
  /**
   * 连通性状态：0（未测试，默认）、1（正常）、2（失败）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectivityState?: number
  /**
   * 连通性测试提示信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectivityTips?: string
}

/**
 * DescribeDataEngineImageVersions请求参数结构体
 */
export interface DescribeDataEngineImageVersionsRequest {
  /**
   * 引擎类型：SparkSQL、PrestoSQL、SparkBatch、StandardSpark、StandardPresto
   */
  EngineType: string
  /**
   * 排序字段: InsertTime（插入时间，默认），UpdateTime（更新时间）
   */
  Sort?: string
  /**
   * 排序方式：false（降序，默认），true（升序）
   */
  Asc?: boolean
}

/**
 * BindWorkGroupsToUser返回参数结构体
 */
export interface BindWorkGroupsToUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SparkSQL批任务运行日志
 */
export interface SparkSessionBatchLog {
  /**
   * 日志步骤：BEG/CS/DS/DSS/DSF/FINF/RTO/CANCEL/CT/DT/DTS/DTF/FINT/EXCE
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step?: string
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * 日志提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 日志操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operate?: Array<SparkSessionBatchLogOperate>
}

/**
 * DeleteScript请求参数结构体
 */
export interface DeleteScriptRequest {
  /**
   * 脚本id，其可以通过DescribeScripts接口提取
   */
  ScriptIds: Array<string>
}

/**
 * AddDMSPartitions请求参数结构体
 */
export interface AddDMSPartitionsRequest {
  /**
   * 分区
   */
  Partitions?: Array<DMSPartition>
}

/**
 * DescribeUserRoles请求参数结构体
 */
export interface DescribeUserRolesRequest {
  /**
   * 列举的数量限制
   */
  Limit: number
  /**
   * 列举的偏移位置
   */
  Offset: number
  /**
   * 按照arn模糊列举
   */
  Fuzzy?: string
  /**
   * 返回结果按照该字段排序
   */
  SortBy?: string
  /**
   * 正序或者倒序，例如：desc
   */
  Sorting?: string
}

/**
 * ResourceInfo
 */
export interface ResourceInfo {
  /**
   * 归属类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttributionType?: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: string
  /**
   * 引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 如资源类型为spark-sql 取值为Name, 如为spark-batch 取值为session app_name
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instance?: string
  /**
   * 亲和性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Favor?: Array<FavorInfo>
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 标准引擎资源组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
}

/**
 * CreateImportTask返回参数结构体
 */
export interface CreateImportTaskResponse {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SmartOptimizerIndexPolicy
 */
export interface SmartOptimizerIndexPolicy {
  /**
   * 开启索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexEnable?: string
}

/**
 * RenewDataEngine请求参数结构体
 */
export interface RenewDataEngineRequest {
  /**
   * CU队列名称
   */
  DataEngineName: string
  /**
   * 续费时长，单位月，最少续费1一个月
   */
  TimeSpan: number
  /**
   * 付费类型，默认为1，预付费
   */
  PayMode?: number
  /**
   * 单位，默认m，仅能填m
   */
  TimeUnit?: string
  /**
   * 自动续费标志，0，初始状态，默认不自动续费，若用户有预付费不停服特权，自动续费。1：自动续费。2：明确不自动续费。不传该参数默认为0
   */
  RenewFlag?: number
}

/**
 * DescribeTasksAnalysis请求参数结构体
 */
export interface DescribeTasksAnalysisRequest {
  /**
   * 数据引擎名称，用于筛选
   */
  DataEngineName?: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个: task-id - String - （任务ID准确过滤）task-id 取值形如：e386471f-139a-4e59-877f-50ece8135b99。task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)，rule-id - String - （洞察类型）取值范围 SPARK-StageScheduleDelay（资源抢占）, SPARK-ShuffleFailure（Shuffle异常）, SPARK-SlowTask（慢task）, SPARK-DataSkew（数据倾斜）, SPARK-InsufficientResource（磁盘或内存不足）
   */
  Filters?: Array<Filter>
  /**
   * 排序字段，支持如下字段类型，instance-start-time (任务开始时间）,job-time-sum （单位毫秒，引擎内执行耗时）,task-time-sum （CU资源消耗，单位秒）,input-bytes-sum（数据扫描总大小，单位bytes）,shuffle-read-bytes-sum（数据shuffle总大小，单位bytes）
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc。
   */
  Sorting?: string
  /**
   * 任务开始时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近30天数据查询。默认为当前时刻
   */
  StartTime?: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近30天数据查询。默认为当前时刻
   */
  EndTime?: string
}

/**
 * DescribeScripts返回参数结构体
 */
export interface DescribeScriptsResponse {
  /**
   * Script列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scripts?: Array<Script>
  /**
   * 实例总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindWorkGroupsFromUser请求参数结构体
 */
export interface UnbindWorkGroupsFromUserRequest {
  /**
   * 解绑的工作组Id和用户Id的关联关系
   */
  AddInfo: WorkGroupIdSetOfUserId
}

/**
 * 查询视图信息对象
 */
export interface ViewResponseInfo {
  /**
   * 视图基本信息。
   */
  ViewBaseInfo?: ViewBaseInfo
  /**
   * 视图列信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * 视图属性信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<Property>
  /**
   * 视图创建时间。
   */
  CreateTime?: string
  /**
   * 视图更新时间。
   */
  ModifiedTime?: string
}

/**
 * 网络配置
 */
export interface NetworkConnection {
  /**
   * 网络配置id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 网络配置唯一标志符
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssociateId?: string
  /**
   * 计算引擎id
注意：此字段可能返回 null，表示取不到有效值。
   */
  HouseId?: string
  /**
   * 数据源id(已废弃)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionId?: string
  /**
   * 网络配置状态（0-初始化，1-正常）
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 创建用户Appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  Appid?: number
  /**
   * 计算引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  HouseName?: string
  /**
   * 网络配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionName?: string
  /**
   * 网络配置类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConnectionType?: number
  /**
   * 创建用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 创建用户SubAccountUin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 网络配置描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConnectionDesc?: string
  /**
   * 数据源vpcid
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionVpcId?: string
  /**
   * 数据源SubnetId
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionSubnetId?: string
  /**
   * 数据源SubnetId
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionCidrBlock?: string
  /**
   * 数据源SubnetCidrBlock
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionSubnetCidrBlock?: string
}

/**
 * CreateImportTask请求参数结构体
 */
export interface CreateImportTaskRequest {
  /**
   * 数据来源，cos
   */
  InputType: string
  /**
   * 输入配置
   */
  InputConf: Array<KVPair>
  /**
   * 输出配置
   */
  OutputConf: Array<KVPair>
  /**
   * 目标数据源的类型，目前支持导入到托管存储，即lakefsStorage
   */
  OutputType?: string
}

/**
 * ModifyWorkGroup请求参数结构体
 */
export interface ModifyWorkGroupRequest {
  /**
   * 工作组Id
   */
  WorkGroupId: number
  /**
   * 工作组描述，最大字符数限制50
   */
  WorkGroupDescription: string
}

/**
 * SmartPolicyBaseInfo
 */
export interface SmartPolicyBaseInfo {
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin: string
  /**
   * Catalog/Database/Table
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyType?: string
  /**
   * Catalog名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Database?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 数据库对象列表。
   */
  DatabaseList?: Array<DatabaseResponseInfo>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DMSTable信息
 */
export interface DMSTableInfo {
  /**
   * DMS表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table: DMSTable
  /**
   * 基础对象信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Asset: Asset
}

/**
 * 迁移元数据分区对象
 */
export interface DMSPartition {
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 数据目录名称
   */
  SchemaName?: string
  /**
   * 表名称
   */
  TableName?: string
  /**
   * 数据版本
   */
  DataVersion?: number
  /**
   * 分区名称
   */
  Name?: string
  /**
   * 值列表
   */
  Values?: Array<string>
  /**
   * 存储大小
   */
  StorageSize?: number
  /**
   * 记录数量
   */
  RecordCount?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifiedTime?: string
  /**
   * 最后访问时间
   */
  LastAccessTime?: string
  /**
   * 附件属性
   */
  Params?: Array<KVPair>
  /**
   * 存储对象
   */
  Sds?: DMSSds
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * 工作组详细信息
 */
export interface WorkGroupDetailInfo {
  /**
   * 工作组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupId?: number
  /**
   * 工作组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupName?: string
  /**
   * 包含的信息类型。User：用户信息；DataAuth：数据权限；EngineAuth:引擎权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 工作组上绑定的用户集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserInfo?: Users
  /**
   * 数据权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataPolicyInfo?: Policys
  /**
   * 引擎权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnginePolicyInfo?: Policys
  /**
   * 工作组描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupDescription?: string
  /**
   * 行过滤信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowFilterInfo?: Policys
  /**
   * 数据目录权限集
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogPolicyInfo?: Policy
}

/**
 * DescribeThirdPartyAccessUser请求参数结构体
 */
export type DescribeThirdPartyAccessUserRequest = null

/**
 * AssignMangedTableProperties返回参数结构体
 */
export interface AssignMangedTablePropertiesResponse {
  /**
   * 分配的原生表表属性
   */
  Properties?: Array<Property>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDataEngineConfig返回参数结构体
 */
export interface UpdateDataEngineConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群大版本镜像信息。
 */
export interface DataEngineImageVersion {
  /**
   * 镜像大版本ID
   */
  ImageVersionId: string
  /**
   * 镜像大版本名称
   */
  ImageVersion: string
  /**
   * 镜像大版本描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 是否为公共版本：1：公共；2：私有
   */
  IsPublic: number
  /**
   * 集群类型：SparkSQL/PrestoSQL/SparkBatch
   */
  EngineType: string
  /**
   * 版本状态：1：初始化；2：上线；3：下线
   */
  IsSharedEngine: number
  /**
   * 版本状态：1：初始化；2：上线；3：下线
   */
  State: number
  /**
   * 插入时间
   */
  InsertTime: string
  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * Mysql类型数据源信息
 */
export interface MysqlInfo {
  /**
   * 连接mysql的jdbc url
   */
  JdbcUrl: string
  /**
   * 用户名
   */
  User: string
  /**
   * mysql密码
   */
  Password: string
  /**
   * mysql数据源的网络信息
   */
  Location: DatasourceConnectionLocation
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库实例ID，和数据库侧保持一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据库实例名称，和数据库侧保持一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
}

/**
 * GenerateCreateMangedTableSql请求参数结构体
 */
export interface GenerateCreateMangedTableSqlRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 表字段信息
   */
  Columns: Array<TColumn>
  /**
   * 表分区信息
   */
  Partitions?: Array<TPartition>
  /**
   * 表属性信息
   */
  Properties?: Array<Property>
  /**
   * V2 upsert表 upsert键
   */
  UpsertKeys?: Array<string>
}

/**
 * statement信息
 */
export interface StatementInformation {
  /**
   * SQL任务唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * SQL内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQL?: string
}

/**
 * 其他数据源
 */
export interface OtherDatasourceConnection {
  /**
   * 网络参数
   */
  Location: DatasourceConnectionLocation
}

/**
 * 任务结果信息。
 */
export interface TaskResultInfo {
  /**
   * 任务唯一ID
   */
  TaskId?: string
  /**
   * 数据源名称，当前任务执行时候选中的默认数据源
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionName?: string
  /**
   * 数据库名称，当前任务执行时候选中的默认数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 当前执行的SQL，一个任务包含一个SQL
   */
  SQL?: string
  /**
   * 执行任务的类型，现在分为DDL、DML、DQL
   */
  SQLType?: string
  /**
   * 任务当前的状态，0：初始化 1：任务运行中 2：任务执行成功  3：数据写入中 4：排队中 -1：任务执行失败 -3：用户手动终止 。只有任务执行成功的情况下，才会返回任务执行的结果
   */
  State?: number
  /**
   * 扫描的数据量，单位byte
   */
  DataAmount?: number
  /**
   * 计算耗时，单位： ms
   */
  UsedTime?: number
  /**
   * 任务结果输出的COS桶地址
   */
  OutputPath?: string
  /**
   * 任务创建时间，时间戳
   */
  CreateTime?: string
  /**
   * 任务执行信息，成功时返回success，失败时返回失败原因
   */
  OutputMessage?: string
  /**
   * 被影响的行数
   */
  RowAffectInfo?: string
  /**
   * 结果的schema信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultSchema?: Array<Column>
  /**
   * 结果信息，反转义后，外层数组的每个元素为一行数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultSet?: string
  /**
   * 分页信息，如果没有更多结果数据，nextToken为空
   */
  NextToken?: string
  /**
   * 任务执行进度num/100(%)
   */
  Percentage?: number
  /**
   * 任务进度明细
   */
  ProgressDetail?: string
  /**
   * 控制台展示格式。table：表格展示 text：文本展示
   */
  DisplayFormat?: string
  /**
   * 任务耗时，单位： ms
   */
  TotalTime?: number
  /**
   * 获取结果消耗的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryResultTime?: number
}

/**
 * DeleteThirdPartyAccessUser返回参数结构体
 */
export interface DeleteThirdPartyAccessUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUsersToWorkGroup返回参数结构体
 */
export interface AddUsersToWorkGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEngineImageVersions返回参数结构体
 */
export interface DescribeDataEngineImageVersionsResponse {
  /**
   * 集群大版本镜像信息列表
   */
  ImageParentVersions?: Array<DataEngineImageVersion>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSparkApp返回参数结构体
 */
export interface DeleteSparkAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserDataEngineConfig请求参数结构体
 */
export interface DescribeUserDataEngineConfigRequest {
  /**
   * 排序方式，desc表示倒序，asc表示正序
   */
  Sorting?: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 排序字段，支持如下字段类型，create-time
   */
  SortBy?: string
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,每种过滤参数支持的过滤值不超过5个。
app-id - String - （appid过滤）
engine-id - String - （引擎ID过滤）
   */
  Filters?: Array<Filter>
}

/**
 * CreateTasks返回参数结构体
 */
export interface CreateTasksResponse {
  /**
   * 本批次提交的任务的批次Id
   */
  BatchId?: string
  /**
   * 任务Id集合，按照执行顺序排列
   */
  TaskIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GrantDLCCatalogAccess返回参数结构体
 */
export interface GrantDLCCatalogAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSparkApp请求参数结构体
 */
export interface CreateSparkAppRequest {
  /**
   * spark作业名
   */
  AppName: string
  /**
   * spark作业类型，1代表spark jar作业，2代表spark streaming作业
   */
  AppType: number
  /**
   * 执行spark作业的数据引擎名称
   */
  DataEngine: string
  /**
   * spark作业程序包文件路径
   */
  AppFile: string
  /**
   * 数据访问策略，CAM Role arn，控制台通过数据作业—>作业配置获取，SDK通过DescribeUserRoles接口获取对应的值；
   */
  RoleArn: number
  /**
   * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  AppDriverSize: string
  /**
   * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  AppExecutorSize: string
  /**
   * spark作业executor个数
   */
  AppExecutorNums: number
  /**
   * 该字段已下线，请使用字段Datasource
   */
  Eni?: string
  /**
   * spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocal?: string
  /**
   * spark作业主类
   */
  MainClass?: string
  /**
   * spark配置，以换行符分隔
   */
  AppConf?: string
  /**
   * spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalJars?: string
  /**
   * spark 作业依赖jar包（--jars），以逗号分隔
   */
  AppJars?: string
  /**
   * spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalFiles?: string
  /**
   * spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔
   */
  AppFiles?: string
  /**
   * spark作业程序入参，空格分割
   */
  CmdArgs?: string
  /**
   * 最大重试次数，只对spark流任务生效
   */
  MaxRetries?: number
  /**
   * 数据源名称
   */
  DataSource?: string
  /**
   * pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalPythonFiles?: string
  /**
   * pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔
   */
  AppPythonFiles?: string
  /**
   * spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）
   */
  IsLocalArchives?: string
  /**
   * spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔
   */
  AppArchives?: string
  /**
   * Spark Image 版本号
   */
  SparkImage?: string
  /**
   * Spark Image 版本名称
   */
  SparkImageVersion?: string
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums
   */
  AppExecutorMaxNumbers?: number
  /**
   * 关联dlc查询脚本id
   */
  SessionId?: string
  /**
   * 任务资源配置是否继承集群模板，0（默认）不继承，1：继承
   */
  IsInherit?: number
  /**
   * 是否使用session脚本的sql运行任务：false：否，true：是
   */
  IsSessionStarted?: boolean
}

/**
 * CreateSparkSessionBatchSQL请求参数结构体
 */
export interface CreateSparkSessionBatchSQLRequest {
  /**
   * DLC Spark作业引擎名称
   */
  DataEngineName: string
  /**
   * 运行sql，需要base64编码。
   */
  ExecuteSQL: string
  /**
   * 指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  DriverSize?: string
  /**
   * 指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）
   */
  ExecutorSize?: string
  /**
   * 指定的Executor数量，默认为1
   */
  ExecutorNumbers?: number
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
   */
  ExecutorMaxNumbers?: number
  /**
   * 指定的Session超时时间，单位秒，默认3600秒
   */
  TimeoutInSecond?: number
  /**
   * Session唯一标识，当指定sessionid，则使用该session运行任务。
   */
  SessionId?: string
  /**
   * 指定要创建的session名称
   */
  SessionName?: string
  /**
   * Session相关配置，当前支持：1.dlc.eni：用户配置的eni网关信息，可以用过该字段设置；
2.dlc.role.arn：用户配置的roleArn鉴权策略配置信息，可以用过该字段设置；
3.dlc.sql.set.config：用户配置的集群配置信息，可以用过该字段设置；
   */
  Arguments?: Array<KVPair>
  /**
   * 是否继承集群的资源类配置：0：不继承（默认），1：继承集群；
   */
  IsInherit?: number
  /**
   * 用户自定义主键，需唯一
   */
  CustomKey?: string
}

/**
 * ListTaskJobLogDetail返回参数结构体
 */
export interface ListTaskJobLogDetailResponse {
  /**
   * 下一次分页参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context?: string
  /**
   * 是否获取完结
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListOver?: boolean
  /**
   * 日志详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<JobLogResult>
  /**
   * 日志url
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubUserAccessPolicy请求参数结构体
 */
export type DescribeSubUserAccessPolicyRequest = null

/**
 * 集群事件日志
 */
export interface HouseEventsInfo {
  /**
   * 事件时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: Array<string>
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventsAction?: Array<string>
  /**
   * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterInfo?: Array<string>
}

/**
 *  SQL查询任务
 */
export interface SQLTask {
  /**
   * base64加密后的SQL语句
   */
  SQL: string
  /**
   * 任务的配置信息
   */
  Config?: Array<KVPair>
}

/**
 * AttachUserPolicy返回参数结构体
 */
export interface AttachUserPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDMSDatabase请求参数结构体
 */
export interface CreateDMSDatabaseRequest {
  /**
   * 基础元数据对象
   */
  Asset?: Asset
  /**
   * Schema目录
   */
  SchemaName?: string
  /**
   * Db存储路径
   */
  Location?: string
  /**
   * 数据库名称
   */
  Name?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * DetachWorkGroupPolicy请求参数结构体
 */
export interface DetachWorkGroupPolicyRequest {
  /**
   * 工作组Id
   */
  WorkGroupId: number
  /**
   * 解绑的权限集合
   */
  PolicySet?: Array<Policy>
}

/**
 * DeleteCHDFSBindingProduct返回参数结构体
 */
export interface DeleteCHDFSBindingProductResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelNotebookSessionStatementBatch请求参数结构体
 */
export interface CancelNotebookSessionStatementBatchRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * 批任务唯一标识
   */
  BatchId: string
}

/**
 * DescribeLakeFsTaskResult返回参数结构体
 */
export interface DescribeLakeFsTaskResultResponse {
  /**
   * 路径的访问实例
   */
  AccessToken?: LakeFileSystemToken
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasksCostInfo请求参数结构体
 */
export interface DescribeTasksCostInfoRequest {
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。
task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。
task-operator- string （子uin过滤）
   */
  Filters?: Array<Filter>
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻
   */
  StartTime?: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻
   */
  EndTime?: string
  /**
   * 数据引擎名称，用于筛选
   */
  DataEngineName?: string
  /**
   * 下一页的标识
   */
  SearchAfter?: string
  /**
   * 每页的大小
   */
  PageSize?: number
}

/**
 * 用户详细信息
 */
export interface UserDetailInfo {
  /**
   * 用户Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 返回的信息类型，Group：返回的当前用户的工作组信息；DataAuth：返回的当前用户的数据权限信息；EngineAuth：返回的当前用户的引擎权限信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 用户类型：ADMIN：管理员 COMMON：一般用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 用户描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDescription?: string
  /**
   * 数据权限信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataPolicyInfo?: Policys
  /**
   * 引擎权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnginePolicyInfo?: Policys
  /**
   * 绑定到该用户的工作组集合信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupInfo?: WorkGroups
  /**
   * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 行过滤集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowFilterInfo?: Policys
  /**
   * 账号类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountType?: string
}

/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
  /**
   * 查询的任务信息，返回为空表示输入任务ID对应的任务不存在。只有当任务状态为成功（2）的时候，才会返回任务的结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskInfo?: TaskResultInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatasourceConnection返回参数结构体
 */
export interface DescribeDatasourceConnectionResponse {
  /**
   * 数据连接总数
   */
  TotalCount?: number
  /**
   * 数据连接对象集合
   */
  ConnectionSet?: Array<DatasourceConnectionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Presto监控指标
 */
export interface PrestoMonitorMetrics {
  /**
   * 	Alluxio本地缓存命中率
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalCacheHitRate?: number
  /**
   * Fragment缓存命中率
注意：此字段可能返回 null，表示取不到有效值。
   */
  FragmentCacheHitRate?: number
}

/**
 * DescribeNotebookSessionStatement请求参数结构体
 */
export interface DescribeNotebookSessionStatementRequest {
  /**
   * Session唯一标识
   */
  SessionId: string
  /**
   * Session Statement唯一标识
   */
  StatementId: string
  /**
   * 任务唯一标识
   */
  TaskId?: string
}

/**
 * ModifyDataEngineDescription请求参数结构体
 */
export interface ModifyDataEngineDescriptionRequest {
  /**
   * 要修改的引擎的名称
   */
  DataEngineName: string
  /**
   * 引擎的描述信息，最大长度为250
   */
  Message: string
}

/**
 * DropDMSTable返回参数结构体
 */
export interface DropDMSTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作组部分信息
 */
export interface WorkGroupMessage {
  /**
   * 工作组唯一Id
   */
  WorkGroupId?: number
  /**
   * 工作组名称
   */
  WorkGroupName?: string
  /**
   * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupDescription?: string
  /**
   * 创建者
   */
  Creator?: string
  /**
   * 工作组创建的时间，形如2021-07-28 16:19:32
   */
  CreateTime?: string
}

/**
 * DescribeUserDataEngineConfig返回参数结构体
 */
export interface DescribeUserDataEngineConfigResponse {
  /**
   * 用户引擎自定义配置项列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineConfigInstanceInfos?: Array<DataEngineConfigInstanceInfo>
  /**
   * 配置项总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkAppJob请求参数结构体
 */
export interface DescribeSparkAppJobRequest {
  /**
   * spark作业Id，与JobName同时存在时，JobName无效，JobId与JobName至少存在一个
   */
  JobId?: string
  /**
   * spark作业名
   */
  JobName?: string
}

/**
 * Doirs数据源详细信息
 */
export interface TCHouseD {
  /**
   * 数据源实例的唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 数据源的JDBC
注意：此字段可能返回 null，表示取不到有效值。
   */
  JdbcUrl?: string
  /**
   * 用于访问数据源的用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 数据源访问密码，需要base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 数据源的VPC和子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: DatasourceConnectionLocation
  /**
   * 默认数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 访问信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessInfo?: string
}

/**
 * CreateResultDownload返回参数结构体
 */
export interface CreateResultDownloadResponse {
  /**
   * 下载任务Id
   */
  DownloadId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDataEngine请求参数结构体
 */
export interface RestartDataEngineRequest {
  /**
   * 引擎ID
   */
  DataEngineId: string
  /**
   * 是否强制重启，忽略任务
   */
  ForcedOperation?: boolean
}

/**
 * DescribeNotebookSession返回参数结构体
 */
export interface DescribeNotebookSessionResponse {
  /**
   * Session详情信息
   */
  Session?: NotebookSessionInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubUserAccessPolicy返回参数结构体
 */
export interface DescribeSubUserAccessPolicyResponse {
  /**
   * 子用户访问策略
   */
  PolicyDocument?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScript返回参数结构体
 */
export interface CreateScriptResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAdvancedStoreLocation返回参数结构体
 */
export interface ModifyAdvancedStoreLocationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTasksInOrder返回参数结构体
 */
export interface CreateTasksInOrderResponse {
  /**
   * 本批次提交的任务的批次Id
   */
  BatchId: string
  /**
   * 任务Id集合，按照执行顺序排列
   */
  TaskIdSet: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签对信息
 */
export interface TagInfo {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * DeleteSparkApp请求参数结构体
 */
export interface DeleteSparkAppRequest {
  /**
   * spark作业名
   */
  AppName: string
}

/**
 * DescribeDLCCatalogAccess请求参数结构体
 */
export interface DescribeDLCCatalogAccessRequest {
  /**
   * 显示条数
   */
  Limit?: number
  /**
   * 记录数量
   */
  Offset?: number
  /**
   * 过滤条件
   */
  Filter?: Filter
}

/**
 * DetachUserPolicy请求参数结构体
 */
export interface DetachUserPolicyRequest {
  /**
   * 用户Id，和CAM侧Uin匹配
   */
  UserId: string
  /**
   * 解绑的权限集合
   */
  PolicySet?: Array<Policy>
}

/**
 * DescribeTaskLog返回参数结构体
 */
export interface DescribeTaskLogResponse {
  /**
   * 下一次分页参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context?: string
  /**
   * 是否获取完结
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListOver?: boolean
  /**
   * 日志详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<JobLogResult>
  /**
   * 日志url
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 任务对象列表。
   */
  TaskList?: Array<TaskResponseInfo>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 任务概览信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TasksOverview?: TasksOverview
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropDMSPartitions请求参数结构体
 */
export interface DropDMSPartitionsRequest {
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 数据库Schema名称
   */
  SchemaName?: string
  /**
   * 数据表名称
   */
  TableName?: string
  /**
   * 分区名称
   */
  Name?: string
  /**
   * 单个分区名称
   */
  Values?: Array<string>
  /**
   * 是否删除分区数据
   */
  DeleteData?: boolean
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * 任务公共指标
 */
export interface CommonMetrics {
  /**
   * 创建任务时长，单位：ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTaskTime?: number
  /**
   * 预处理总时长，单位：ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessTime?: number
  /**
   * 排队时长，单位：ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueTime?: number
  /**
   * 执行时长，单位：ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionTime?: number
  /**
   * 是否命中结果缓存
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsResultCacheHit?: boolean
  /**
   * 匹配物化视图数据量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchedMVBytes?: number
  /**
   * 匹配物化视图列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchedMVs?: string
  /**
   * 结果数据量，单位：byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedBytes?: string
  /**
   * 	结果行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedRows?: number
  /**
   * 扫描数据量，单位：byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessedBytes?: number
  /**
   * 	扫描行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessedRows?: number
}

/**
 * 用户角色
 */
export interface UserRole {
  /**
   * 角色ID
   */
  RoleId?: number
  /**
   * 用户app ID
   */
  AppId?: string
  /**
   * 用户ID
   */
  Uin?: string
  /**
   * 角色权限
   */
  Arn?: string
  /**
   * 最近修改时间戳
   */
  ModifyTime?: number
  /**
   * 角色描述信息
   */
  Desc?: string
  /**
   * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * cos授权路径列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPermissionList?: Array<CosPermission>
  /**
   * cam策略json
注意：此字段可能返回 null，表示取不到有效值。
   */
  PermissionJson?: string
}

/**
 * DescribeUserType请求参数结构体
 */
export interface DescribeUserTypeRequest {
  /**
   * 用户ID（UIN），如果不填默认为调用方的子UIN
   */
  UserId?: string
}

/**
 * CheckDataEngineConfigPairsValidity请求参数结构体
 */
export interface CheckDataEngineConfigPairsValidityRequest {
  /**
   * 引擎小版本ID
   */
  ChildImageVersionId?: string
  /**
   * 用户自定义参数
   */
  DataEngineConfigPairs?: Array<DataEngineConfigPair>
  /**
   * 引擎大版本ID，存在小版本ID时仅需传入小版本ID，不存在时会获取当前大版本下最新的小版本ID。
   */
  ImageVersionId?: string
}

/**
 * CSV序列化及反序列化数据结构
 */
export interface CSVSerde {
  /**
   * CSV序列化转义符，默认为"\\"，最长8个字符，如 Escape: "/\"
   */
  Escape?: string
  /**
   * CSV序列化字段域符，默认为"'"，最长8个字符, 如 Quote: "\""
   */
  Quote?: string
  /**
   * CSV序列化分隔符，默认为"\t"，最长8个字符, 如 Separator: "\t"
   */
  Separator?: string
}

/**
 * hive类型数据源的信息
 */
export interface HiveInfo {
  /**
   * hive metastore的地址
   */
  MetaStoreUrl: string
  /**
   * hive数据源类型，代表数据储存的位置，COS或者HDFS
   */
  Type: string
  /**
   * 数据源所在的私有网络信息
   */
  Location: DatasourceConnectionLocation
  /**
   * 如果类型为HDFS，需要传一个用户名
   */
  User?: string
  /**
   * 如果类型为HDFS，需要选择是否高可用
   */
  HighAvailability?: boolean
  /**
   * 如果类型为COS，需要填写COS桶连接
   */
  BucketUrl?: string
  /**
   * json字符串。如果类型为HDFS，需要填写该字段
   */
  HdfsProperties?: string
  /**
   * Hive的元数据库信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mysql?: MysqlInfo
  /**
   * emr集群Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * emr集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * EMR集群中hive组件的版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  HiveVersion?: string
  /**
   * Kerberos详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KerberosInfo?: KerberosInfo
  /**
   * 是否开启Kerberos
注意：此字段可能返回 null，表示取不到有效值。
   */
  KerberosEnable?: boolean
}

/**
 * chdfs产品vpc信息
 */
export interface CHDFSProductVpcInfo {
  /**
   * vpc id

注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * vpc名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * vpc子网信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcCidrBlock?: Array<VpcCidrBlock>
  /**
   * 规则Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 权限组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessGroupId?: string
}

/**
 * 视图基本配置信息
 */
export interface ViewBaseInfo {
  /**
   * 该视图所属数据库名字
   */
  DatabaseName: string
  /**
   * 视图名称
   */
  ViewName: string
  /**
   * 视图创建人昵称
   */
  UserAlias?: string
  /**
   * 视图创建人ID
   */
  UserSubUin?: string
}

/**
 * CheckLockMetaData请求参数结构体
 */
export interface CheckLockMetaDataRequest {
  /**
   * 锁ID
   */
  LockId: number
  /**
   * 数据源名称
   */
  DatasourceConnectionName?: string
  /**
   * 事务ID
   */
  TxnId?: number
  /**
   * 过期时间ms
   */
  ElapsedMs?: number
}

/**
 * AddOptimizerEngines返回参数结构体
 */
export interface AddOptimizerEnginesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。
task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。
task-operator- string （子uin过滤）
task-kind - string （任务类型过滤）
   */
  Filters?: Array<Filter>
  /**
   * 排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间）
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc。
   */
  Sorting?: string
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻
   */
  StartTime?: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻
   */
  EndTime?: string
  /**
   * 数据引擎名称，用于筛选
   */
  DataEngineName?: string
  /**
   * spark引擎资源组名称
   */
  ResourceGroupName?: string
}

/**
 * CreateSparkAppTask请求参数结构体
 */
export interface CreateSparkAppTaskRequest {
  /**
   * spark作业名
   */
  JobName: string
  /**
   * spark作业程序入参，以空格分隔；一般用于周期性调用使用
   */
  CmdArgs?: string
}

/**
 * DeleteWorkGroup请求参数结构体
 */
export interface DeleteWorkGroupRequest {
  /**
   * 要删除的工作组Id集合
   */
  WorkGroupIds: Array<number | bigint>
}

/**
 * 配置格式
 */
export interface KVPair {
  /**
   * 配置的key值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 配置的value值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 数据表配置信息
 */
export interface TableBaseInfo {
  /**
   * 该数据表所属数据库名字
   */
  DatabaseName: string
  /**
   * 数据表名字
   */
  TableName: string
  /**
   * 该数据表所属数据源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionName?: string
  /**
   * 该数据表备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableComment?: string
  /**
   * 具体类型，表or视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据格式类型，hive，iceberg等
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableFormat?: string
  /**
   * 建表用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 建表用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSubUin?: string
  /**
   * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  GovernPolicy?: DataGovernPolicy
  /**
   * 库数据治理是否关闭，关闭：true，开启：false
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  DbGovernPolicyIsDisable?: string
  /**
   * 智能数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmartPolicy?: SmartPolicy
  /**
   * T-ICEBERG表的主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrimaryKeys?: Array<string>
}

/**
 * UnlockMetaData请求参数结构体
 */
export interface UnlockMetaDataRequest {
  /**
   * 锁ID
   */
  LockId: number
  /**
   * 数据源名称
   */
  DatasourceConnectionName?: string
}

/**
 * CreateSparkAppTask返回参数结构体
 */
export interface CreateSparkAppTaskResponse {
  /**
   * 批Id
   */
  BatchId?: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTaskJobLogDetail请求参数结构体
 */
export interface ListTaskJobLogDetailRequest {
  /**
   * 列表返回的Id
   */
  TaskId: string
  /**
   * 开始运行时间，unix时间戳（毫秒）
   */
  StartTime: number
  /**
   * 结束运行时间，unix时间戳（毫秒）
   */
  EndTime: number
  /**
   * 分页大小，最大1000，配合Context一起使用
   */
  Limit: number
  /**
   * 下一次分页参数，第一次传空
   */
  Context: string
  /**
   * 最近1000条日志是否升序排列，true:升序排序，false:倒序，默认false，倒序排列
   */
  Asc?: boolean
  /**
   * 预览日志的通用过滤条件
   */
  Filters?: Array<Filter>
  /**
   * SparkSQL任务唯一ID
   */
  BatchId?: string
}

/**
 * SparkSQL批任务日志操作信息。
 */
export interface SparkSessionBatchLogOperate {
  /**
   * 操作提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 操作类型：COPY、LOG、UI、RESULT、List、TAB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operate?: string
  /**
   * 补充信息：如：taskid、sessionid、sparkui等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Supplement?: Array<KVPair>
}

/**
 * RevokeDLCCatalogAccess返回参数结构体
 */
export interface RevokeDLCCatalogAccessResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCHDFSBindingProduct请求参数结构体
 */
export interface DeleteCHDFSBindingProductRequest {
  /**
   * 需要解绑的元数据加速桶名
   */
  MountPoint: string
  /**
   * 桶的类型，分为cos和lakefs
   */
  BucketType: string
  /**
   * 产品名称
   */
  ProductName: string
  /**
   * 引擎名称，ProductName选择DLC产品时，必传此参数。其他产品可不传
   */
  EngineName?: string
  /**
   * vpc信息，ProductName选择other时，必传此参数
   */
  VpcInfo?: Array<VpcInfo>
}

/**
 * RenewDataEngine返回参数结构体
 */
export interface RenewDataEngineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源详细信息
 */
export interface DataSourceInfo {
  /**
   * 数据源实例的唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据源的名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 数据源的JDBC访问链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  JdbcUrl?: string
  /**
   * 用于访问数据源的用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
  /**
   * 数据源访问密码，需要base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 数据源的VPC和子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: DatasourceConnectionLocation
  /**
   * 默认数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
}

/**
 * DescribeNotebookSessions返回参数结构体
 */
export interface DescribeNotebookSessionsResponse {
  /**
   * session总数量
   */
  TotalElements?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 当前页码
   */
  Page?: number
  /**
   * 当前页数量
   */
  Size?: number
  /**
   * session列表信息
   */
  Sessions?: Array<NotebookSessions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEngineUsageInfo请求参数结构体
 */
export interface DescribeEngineUsageInfoRequest {
  /**
   * 数据引擎ID
   */
  DataEngineId: string
}

/**
 * 数据脱敏策略信息
 */
export interface DataMaskStrategyInfo {
  /**
   * 策略名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyName?: string
  /**
   * MASK_SHOW_FIRST_4; MASK_SHOW_LAST_4;MASK_HASH; MASK_DATE_SHOW_YEAR; MASK_NULL; MASK_DEFAULT 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyType?: string
  /**
   * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyDesc?: string
  /**
   * 用户组策略列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: Array<GroupInfo>
  /**
   * 用户子账号uin列表，按;拼接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: string
  /**
   * 策略Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyId?: string
}

/**
 * RollbackDataEngineImage返回参数结构体
 */
export interface RollbackDataEngineImageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddOptimizerEngines请求参数结构体
 */
export type AddOptimizerEnginesRequest = null

/**
 * 数据表分块信息。
 */
export interface Partition {
  /**
   * 分区列名。
   */
  Name?: string
  /**
   * 分区类型。
   */
  Type?: string
  /**
   * 对分区的描述。
   */
  Comment?: string
  /**
   * 隐式分区转换策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transform?: string
  /**
   * 转换策略参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransformArgs?: Array<string>
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
}

/**
 * ModifySparkAppBatch请求参数结构体
 */
export interface ModifySparkAppBatchRequest {
  /**
   * 需要批量修改的Spark作业任务ID列表
   */
  SparkAppId: Array<string>
  /**
   * 引擎ID
   */
  DataEngine?: string
  /**
   * driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
   */
  AppDriverSize?: string
  /**
   * executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
   */
  AppExecutorSize?: string
  /**
   * 指定executor数量，最小值为1，最大值小于集群规格
   */
  AppExecutorNums?: number
  /**
   * 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）
   */
  AppExecutorMaxNumbers?: number
  /**
   * 任务资源配置是否继承集群模板，0（默认）不继承，1：继承
   */
  IsInherit?: number
}

/**
 * RegisterThirdPartyAccessUser返回参数结构体
 */
export interface RegisterThirdPartyAccessUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySparkApp返回参数结构体
 */
export interface ModifySparkAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库和数据表属性信息
 */
export interface Property {
  /**
   * 属性key名称。
   */
  Key: string
  /**
   * 属性key对应的value。
   */
  Value: string
}

/**
 * DescribeWorkGroups返回参数结构体
 */
export interface DescribeWorkGroupsResponse {
  /**
   * 工作组总数
   */
  TotalCount: number
  /**
   * 工作组信息集合
   */
  WorkGroupSet: Array<WorkGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * spark作业详情。
 */
export interface SparkJobInfo {
  /**
   * spark作业ID
   */
  JobId?: string
  /**
   * spark作业名
   */
  JobName?: string
  /**
   * spark作业类型，可去1或者2，1表示batch作业， 2表示streaming作业
   */
  JobType?: number
  /**
   * 引擎名
   */
  DataEngine?: string
  /**
   * 该字段已下线，请使用字段Datasource
   */
  Eni?: string
  /**
   * 程序包是否本地上传，cos或者lakefs
   */
  IsLocal?: string
  /**
   * 程序包路径
   */
  JobFile?: string
  /**
   * 角色ID
   */
  RoleArn?: number
  /**
   * spark作业运行主类
   */
  MainClass?: string
  /**
   * 命令行参数，spark作业命令行参数，空格分隔
   */
  CmdArgs?: string
  /**
   * spark原生配置，换行符分隔
   */
  JobConf?: string
  /**
   * 依赖jars是否本地上传，cos或者lakefs
   */
  IsLocalJars?: string
  /**
   * spark作业依赖jars，逗号分隔
   */
  JobJars?: string
  /**
   * 依赖文件是否本地上传，cos或者lakefs
   */
  IsLocalFiles?: string
  /**
   * spark作业依赖文件，逗号分隔
   */
  JobFiles?: string
  /**
   * spark作业driver资源大小
   */
  JobDriverSize?: string
  /**
   * spark作业executor资源大小
   */
  JobExecutorSize?: string
  /**
   * spark作业executor个数
   */
  JobExecutorNums?: number
  /**
   * spark流任务最大重试次数
   */
  JobMaxAttempts?: number
  /**
   * spark作业创建者
   */
  JobCreator?: string
  /**
   * spark作业创建时间
   */
  JobCreateTime?: number
  /**
   * spark作业更新时间
   */
  JobUpdateTime?: number
  /**
   * spark作业最近任务ID
   */
  CurrentTaskId?: string
  /**
   * spark作业最近运行状态，初始化：0，运行中：1，成功：2，数据写入中： 3， 排队中： 4， 失败： -1， 已删除： -3，已过期： -5
   */
  JobStatus?: number
  /**
   * spark流作业统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamingStat?: StreamingStatistics
  /**
   * 数据源名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSource?: string
  /**
   * pyspark：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLocalPythonFiles?: string
  /**
   * 注：该返回值已废弃
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppPythonFiles?: string
  /**
   * archives：依赖上传方式，1、cos；2、lakefs（控制台使用，该方式不支持直接接口调用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLocalArchives?: string
  /**
   * archives：依赖资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobArchives?: string
  /**
   * Spark Image 版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImage?: string
  /**
   * pyspark：python依赖, 除py文件外，还支持zip/egg等归档格式，多文件以逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobPythonFiles?: string
  /**
   * 当前job正在运行或准备运行的任务个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNum?: number
  /**
   * 引擎状态：-100（默认：未知状态），-2~11：引擎正常状态；
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineStatus?: number
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于JobExecutorNums
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobExecutorMaxNumbers?: number
  /**
   * 镜像版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImageVersion?: string
  /**
   * 查询脚本关联id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * spark_emr_livy
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineClusterType?: string
  /**
   * Spark 3.2-EMR
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineImageVersion?: string
  /**
   * 任务资源配置是否继承集群模板，0（默认）不继承，1：继承
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsInherit?: number
  /**
   * 是否使用session脚本的sql运行任务：false：否，true：是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSessionStarted?: boolean
  /**
   * 引擎详细类型：SparkSQL、PrestoSQL、SparkBatch、StandardSpark、StandardPresto
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineTypeDetail?: string
}

/**
 * DescribeScripts请求参数结构体
 */
export interface DescribeScriptsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 按字段排序，支持如下字段类型，update-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序，默认asc
   */
  Sorting?: string
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为其一
script-id - String - （过滤条件）script-id取值形如：157de0d1-26b4-4df2-a2d0-b64afc406c25。
script-name-keyword - String - （过滤条件）数据表名称,形如：script-test。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeSparkAppJob返回参数结构体
 */
export interface DescribeSparkAppJobResponse {
  /**
   * spark作业详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Job?: SparkJobInfo
  /**
   * 查询的spark作业是否存在
   */
  IsExists?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSessionStatement返回参数结构体
 */
export interface DescribeNotebookSessionStatementResponse {
  /**
   * Session Statement详情
   */
  NotebookSessionStatement?: NotebookSessionStatementInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeDataEngineImage返回参数结构体
 */
export interface UpgradeDataEngineImageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * spark流任务统计信息
 */
export interface StreamingStatistics {
  /**
   * 任务开始时间
   */
  StartTime: string
  /**
   * 数据接收器数
   */
  Receivers: number
  /**
   * 运行中的接收器数
   */
  NumActiveReceivers: number
  /**
   * 不活跃的接收器数
   */
  NumInactiveReceivers: number
  /**
   * 运行中的批数
   */
  NumActiveBatches: number
  /**
   * 待处理的批数
   */
  NumRetainedCompletedBatches: number
  /**
   * 已完成的批数
   */
  NumTotalCompletedBatches: number
  /**
   * 平均输入速率
   */
  AverageInputRate: number
  /**
   * 平均等待时长
   */
  AverageSchedulingDelay: number
  /**
   * 平均处理时长
   */
  AverageProcessingTime: number
  /**
   * 平均延时
   */
  AverageTotalDelay: number
}

/**
 * 任务实例。
 */
export interface TaskResponseInfo {
  /**
   * 任务所属Database的名称。
   */
  DatabaseName?: string
  /**
   * 任务数据量。
   */
  DataAmount?: number
  /**
   * 任务Id。
   */
  Id?: string
  /**
   * 计算耗时，单位： ms
   */
  UsedTime?: number
  /**
   * 任务输出路径。
   */
  OutputPath?: string
  /**
   * 任务创建时间。
   */
  CreateTime?: string
  /**
   * 任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。
   */
  State?: number
  /**
   * 任务SQL类型，DDL|DML等
   */
  SQLType?: string
  /**
   * 任务SQL语句
   */
  SQL?: string
  /**
   * 结果是否过期。
   */
  ResultExpired?: boolean
  /**
   * 数据影响统计信息。
   */
  RowAffectInfo?: string
  /**
   * 任务结果数据表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSet?: string
  /**
   * 失败信息, 例如：errorMessage。该字段已废弃。
   */
  Error?: string
  /**
   * 任务执行进度num/100(%)
   */
  Percentage?: number
  /**
   * 任务执行输出信息。
   */
  OutputMessage?: string
  /**
   * 执行SQL的引擎类型
   */
  TaskType?: string
  /**
   * 任务进度明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgressDetail?: string
  /**
   * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 计算资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * 执行sql的子uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateUin?: string
  /**
   * 计算资源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineName?: string
  /**
   * 导入类型是本地导入还是cos
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputType?: string
  /**
   * 导入配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputConf?: string
  /**
   * 数据条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataNumber?: number
  /**
   * 查询数据能不能下载
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanDownload?: boolean
  /**
   * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * spark应用作业名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobName?: string
  /**
   * spark应用作业Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobId?: string
  /**
   * spark应用入口jar文件
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobFile?: string
  /**
   * spark ui url
注意：此字段可能返回 null，表示取不到有效值。
   */
  UiUrl?: string
  /**
   * 任务耗时，单位： ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTime?: number
  /**
   * spark app job执行task的程序入口参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CmdArgs?: string
  /**
   * 集群镜像大版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageVersion?: string
  /**
   * driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSize?: string
  /**
   * executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSize?: string
  /**
   * 指定executor数量，最小值为1，最大值小于集群规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorNums?: number
  /**
   * 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorMaxNumbers?: number
  /**
   * 任务公共指标数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  CommonMetrics?: CommonMetrics
  /**
   * spark任务指标数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkMonitorMetrics?: SparkMonitorMetrics
  /**
   * presto任务指标数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrestoMonitorMetrics?: PrestoMonitorMetrics
  /**
   * 结果文件格式：默认为csv
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultFormat?: string
  /**
   * 引擎类型，SparkSQL：SparkSQL 引擎；SparkBatch：Spark作业引擎；PrestoSQL：Presto引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineTypeDetail?: string
  /**
   * spark引擎资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
}

/**
 * DescribeStoreLocation返回参数结构体
 */
export interface DescribeStoreLocationResponse {
  /**
   * 返回用户设置的结果存储位置路径，如果未设置则返回空字符串：""
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoreLocation: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTaskCostDetail返回参数结构体
 */
export interface QueryTaskCostDetailResponse {
  /**
   * 下一页的标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchAfter?: string
  /**
   * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SQL语句对象
 */
export interface Execution {
  /**
   * 自动生成SQL语句。
   */
  SQL: string
}

/**
 * CreateNotebookSessionStatementSupportBatchSQL返回参数结构体
 */
export interface CreateNotebookSessionStatementSupportBatchSQLResponse {
  /**
   * Session Statement详情
   */
  NotebookSessionStatementBatches?: NotebookSessionStatementBatchInformation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindWorkGroupsToUser请求参数结构体
 */
export interface BindWorkGroupsToUserRequest {
  /**
   * 绑定的用户和工作组信息
   */
  AddInfo: WorkGroupIdSetOfUserId
}

/**
 * 数据表列信息。
 */
export interface Column {
  /**
   * 列名称，不区分大小写，最大支持25个字符。
   */
  Name: string
  /**
   * string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array|map|struct|uniontype
   */
  Type: string
  /**
   * 对该类的注释。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 表示整个 numeric 的长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Precision?: number
  /**
   * 表示小数部分的长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scale?: number
  /**
   * 是否为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nullable?: string
  /**
   * 字段位置，小的在前
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 字段创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 字段修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
  /**
   * 是否为分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartition?: boolean
  /**
   * 数据脱敏策略信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataMaskStrategyInfo?: DataMaskStrategyInfo
}

/**
 * 查询列表过滤条件参数
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * DescribeLakeFsDirSummary返回参数结构体
 */
export interface DescribeLakeFsDirSummaryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnlockMetaData返回参数结构体
 */
export interface UnlockMetaDataResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWorkGroup返回参数结构体
 */
export interface DeleteWorkGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySparkAppBatch返回参数结构体
 */
export interface ModifySparkAppBatchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckDataEngineImageCanBeRollback返回参数结构体
 */
export interface CheckDataEngineImageCanBeRollbackResponse {
  /**
   * 回滚后日志记录id
   */
  ToRecordId?: string
  /**
   * 回滚前日志记录id
   */
  FromRecordId?: string
  /**
   * 是否能够回滚
   */
  IsRollback?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNotebookSession返回参数结构体
 */
export interface DeleteNotebookSessionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeThirdPartyAccessUser返回参数结构体
 */
export interface DescribeThirdPartyAccessUserResponse {
  /**
   * 用户信息
   */
  UserInfo?: OpendThirdAccessUserInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNotebookSessionStatements返回参数结构体
 */
export interface DescribeNotebookSessionStatementsResponse {
  /**
   * Session Statement详情
   */
  NotebookSessionStatements?: NotebookSessionStatementBatchInformation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelSparkSessionBatchSQL返回参数结构体
 */
export interface CancelSparkSessionBatchSQLResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库对象
 */
export interface DatabaseInfo {
  /**
   * 数据库名称，长度0~128，支持数字、字母下划线，不允许数字大头，统一转换为小写。
   */
  DatabaseName: string
  /**
   * 数据库描述信息，长度 0~500。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<Property>
  /**
   * 数据库cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
}

/**
 * DescribeDataEngines请求参数结构体
 */
export interface DescribeDataEnginesRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 过滤类型，支持如下的过滤类型，传参Name应为以下其中一个, data-engine-name - String（数据引擎名称）：engine-type - String（引擎类型：spark：spark 引擎，presto：presto引擎），state - String (数据引擎状态 -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中) ， mode - String（计费模式 0共享模式 1按量计费 2包年包月） ， create-time - String（创建时间，10位时间戳） message - String （描述信息），cluster-type - String (集群资源类型 spark_private/presto_private/presto_cu/spark_cu/kyuubi_cu)，engine-id - String（数据引擎ID），key-word - String（数据引擎名称或集群资源类型或描述信息模糊搜索），engine-exec-type - String（引擎执行任务类型，SQL/BATCH），engine-network-id - String（引擎网络Id）
   */
  Filters?: Array<Filter>
  /**
   * 排序字段，支持如下字段类型，create-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc。
   */
  Sorting?: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 已废弃，请使用DatasourceConnectionNameSet
   */
  DatasourceConnectionName?: string
  /**
   * 是否不返回共享引擎，true不返回共享引擎，false可以返回共享引擎
   */
  ExcludePublicEngine?: boolean
  /**
   * 参数应该为引擎权限类型，有效类型："USE", "MODIFY", "OPERATE", "MONITOR", "DELETE"
   */
  AccessTypes?: Array<string>
  /**
   * 引擎执行任务类型，有效值：SQL/BATCH，默认为SQL
   */
  EngineExecType?: string
  /**
   * 引擎类型，有效值：spark/presto/kyuubi，为空时默认获取非kyuubi引擎（网关引擎）
   */
  EngineType?: string
  /**
   * 网络配置列表，若传入该参数，则返回网络配置关联的计算引擎
   */
  DatasourceConnectionNameSet?: Array<string>
  /**
   * 引擎版本，有效值：Native/SuperSQL，为空时默认获取SuperSQL引擎
   */
  EngineGeneration?: string
  /**
   * 引擎类型，支持：SparkSQL、SparkBatch、PrestoSQL、Kyuubi
   */
  EngineTypeDetail?: string
}

/**
 * 日志详情
 */
export interface JobLogResult {
  /**
   * 日志时间戳，毫秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: number
  /**
   * 日志topic id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 日志topic name
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 日志内容，json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogJson?: string
  /**
   * 日志ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgLogId?: string
}

/**
 * DropDMSDatabase返回参数结构体
 */
export interface DropDMSDatabaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC子网信息
 */
export interface VpcCidrBlock {
  /**
   * 子网Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrId?: string
  /**
   * 子网网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrAddr?: string
}

/**
 * DeleteUsersFromWorkGroup请求参数结构体
 */
export interface DeleteUsersFromWorkGroupRequest {
  /**
   * 要删除的用户信息
   */
  AddInfo: UserIdSetOfWorkGroupId
}

/**
 * 列排序对象
 */
export interface DMSColumnOrder {
  /**
   * 列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Col?: string
  /**
   * 排序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Order?: number
}

/**
 * DescribeViews返回参数结构体
 */
export interface DescribeViewsResponse {
  /**
   * 视图对象列表。
   */
  ViewList?: Array<ViewResponseInfo>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkGroups请求参数结构体
 */
export interface DescribeWorkGroupsRequest {
  /**
   * 查询的工作组Id，不填或填0表示不过滤。
   */
  WorkGroupId?: number
  /**
   * 过滤条件，当前仅支持按照工作组名称进行模糊搜索。Key为workgroup-name
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值100
   */
  Limit?: number
  /**
   * 排序字段，支持如下字段类型，create-time
   */
  SortBy?: string
  /**
   * 排序方式，desc表示正序，asc表示反序， 默认为asc
   */
  Sorting?: string
}

/**
 * LockMetaData请求参数结构体
 */
export interface LockMetaDataRequest {
  /**
   * 加锁内容
   */
  LockComponentList: Array<LockComponentInfo>
  /**
   * 数据源名称
   */
  DatasourceConnectionName?: string
  /**
   * 事务id
   */
  TxnId?: number
  /**
   * 客户端信息
   */
  AgentInfo?: string
  /**
   * 主机名
   */
  Hostname?: string
}

/**
 * DescribeSparkSessionBatchSQLCost请求参数结构体
 */
export interface DescribeSparkSessionBatchSQLCostRequest {
  /**
   * SparkSQL唯一标识
   */
  BatchIds?: Array<string>
}

/**
 * CreateNotebookSession返回参数结构体
 */
export interface CreateNotebookSessionResponse {
  /**
   * Session唯一标识
   */
  SessionId?: string
  /**
   * Spark任务返回的AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkAppId?: string
  /**
   * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
   */
  State?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataEngine返回参数结构体
 */
export interface DescribeDataEngineResponse {
  /**
   * 数据引擎详细信息
   */
  DataEngine?: DataEngineInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 引擎规格详情
 */
export interface DataEngineScaleInfo {
  /**
   * 引擎ID
   */
  DataEngineId?: string
  /**
   * 引擎名称
   */
  DataEngineName?: string
  /**
   * 引擎规格详情
   */
  ScaleDetail?: Array<DataEngineScaleInfoDetail>
}

/**
 * QueryTaskCostDetail请求参数结构体
 */
export interface QueryTaskCostDetailRequest {
  /**
   * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。
task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。
task-operator- string （子uin过滤）
   */
  Filters?: Array<Filter>
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻
   */
  StartTime?: string
  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻
   */
  EndTime?: string
  /**
   * 数据引擎名称，用于筛选
   */
  DataEngineName?: string
  /**
   * 下一页的标识
   */
  SearchAfter?: string
  /**
   * 每页的大小
   */
  PageSize?: number
}

/**
 * ModifyDataEngineDescription返回参数结构体
 */
export interface ModifyDataEngineDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDataEngineConfig请求参数结构体
 */
export interface UpdateDataEngineConfigRequest {
  /**
   * 引擎ID
   */
  DataEngineIds: Array<string>
  /**
   * 引擎配置命令，支持UpdateSparkSQLLakefsPath（更新原生表配置）、UpdateSparkSQLResultPath（更新结果路径配置）
   */
  DataEngineConfigCommand: string
  /**
   * 是否使用lakefs作为结果存储
   */
  UseLakeFs?: boolean
  /**
   * 用户自定义结果路径
   */
  CustomResultPath?: string
}

/**
 * DropDMSTable请求参数结构体
 */
export interface DropDMSTableRequest {
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 表名称
   */
  Name?: string
  /**
   * 是否删除数据
   */
  DeleteData?: boolean
  /**
   * 环境属性
   */
  EnvProps?: KVPair
  /**
   * 数据目录信息
   */
  DatasourceConnectionName?: string
}

/**
 * CreateInternalTable返回参数结构体
 */
export interface CreateInternalTableResponse {
  /**
   * 创建托管存储内表sql语句描述
   */
  Execution?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSparkAppTasks请求参数结构体
 */
export interface DescribeSparkAppTasksRequest {
  /**
   * spark作业Id
   */
  JobId: string
  /**
   * 分页查询偏移量
   */
  Offset?: number
  /**
   * 分页查询Limit
   */
  Limit?: number
  /**
   * 执行实例id
   */
  TaskId?: string
  /**
   * 更新时间起始点，支持格式：yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 更新时间截止点，支持格式：yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 按照该参数过滤,支持task-state
   */
  Filters?: Array<Filter>
}

/**
 * 用户部分信息
 */
export interface UserMessage {
  /**
   * 用户Id，和CAM侧子用户Uin匹配
   */
  UserId: string
  /**
   * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDescription: string
  /**
   * 当前用户的创建者
   */
  Creator: string
  /**
   * 当前用户的创建时间，形如2021-07-28 16:19:32
   */
  CreateTime: string
  /**
   * 用户别名
   */
  UserAlias: string
}

/**
 * RegisterThirdPartyAccessUser请求参数结构体
 */
export type RegisterThirdPartyAccessUserRequest = null

/**
 * SwitchDataEngineImage请求参数结构体
 */
export interface SwitchDataEngineImageRequest {
  /**
   * 引擎ID
   */
  DataEngineId: string
  /**
   * 新镜像版本ID
   */
  NewImageVersionId: string
}

/**
 * DescribeDMSTable请求参数结构体
 */
export interface DescribeDMSTableRequest {
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库schema名称
   */
  SchemaName?: string
  /**
   * 表名称
   */
  Name?: string
  /**
   * catalog类型
   */
  Catalog?: string
  /**
   * 查询关键词
   */
  Keyword?: string
  /**
   * 查询模式，只支持填*
   */
  Pattern?: string
  /**
   * 表类型
   */
  Type?: string
  /**
   * 数据源连接名
   */
  DatasourceConnectionName?: string
}

/**
 * ModifyGovernEventRule请求参数结构体
 */
export type ModifyGovernEventRuleRequest = null

/**
 * 数据库对象
 */
export interface DatabaseResponseInfo {
  /**
   * 数据库名称。
   */
  DatabaseName?: string
  /**
   * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 允许针对数据库的属性元数据信息进行指定。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<Property>
  /**
   * 数据库创建时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 数据库更新时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
  /**
   * cos存储路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 建库用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 建库用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSubUin?: string
  /**
   * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  GovernPolicy?: DataGovernPolicy
  /**
   * 数据库ID（无效字段）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
}

/**
 * 迁移列对象
 */
export interface DMSColumn {
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 排序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 附加参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<KVPair>
  /**
   * 业务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizParams?: Array<KVPair>
  /**
   * 是否分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartition?: boolean
}

/**
 * DescribeResultDownload请求参数结构体
 */
export interface DescribeResultDownloadRequest {
  /**
   * 查询任务Id
   */
  DownloadId: string
}
