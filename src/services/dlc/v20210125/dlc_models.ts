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
 * CheckDataEngineConfigPairsValidity返回参数结构体
 */
export interface CheckDataEngineConfigPairsValidityResponse {
  /**
   * 参数有效性：ture:有效，false:至少存在一个无效参数；
   */
  IsAvailable?: boolean
  /**
   * 无效参数集合
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
   */
  Path?: string
  /**
   * 任务状态 init | queue | format | compress | success|  timeout | error
   */
  Status?: string
  /**
   * 任务异常原因
   */
  Reason?: string
  /**
   * 临时SecretId
   */
  SecretId?: string
  /**
   * 临时SecretKey
   */
  SecretKey?: string
  /**
   * 临时Token
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
 * 引擎网络信息
 */
export interface EngineNetworkInfo {
  /**
   * 引擎网络名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkName?: string
  /**
   * 引擎网络状态，0--初始化，2--可用，-1--已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkState?: number
  /**
   * 引擎网络cidr
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkCidr?: string
  /**
   * 引擎网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 私有连接个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateLinkNumber?: number
  /**
   * 计算引擎个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNumber?: number
  /**
   * 网关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  GateWayInfo?: Array<GatewayInfo>
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
  /**
   * 查询类型：all：全部数据（默认）、permission：有权限的数据
注意：此字段需要开启白名单使用，如果需要使用，请提交工单联系我们。
   */
  DescribeType?: string
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
 * DescribeFlowDetailList请求参数结构体
 */
export interface DescribeFlowDetailListRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
  /**
   * 页码，从1开始，默认为1
   */
  Page?: number
  /**
   * 每页返回数量，默认为10
   */
  PageSize?: number
}

/**
 * DescribeDataMaskStrategies返回参数结构体
 */
export interface DescribeDataMaskStrategiesResponse {
  /**
   * 总数据脱敏策略数
   */
  TotalCount?: number
  /**
   * 数据脱敏策略列表
   */
  Strategies?: Array<DataMaskStrategy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UpdateClusterGroup请求参数结构体
 */
export interface UpdateClusterGroupRequest {
  /**
   * <p>集群组 ID（定位要更新的集群组）</p>
   */
  Id: string
  /**
   * <p>集群组名称（可选，为空则保持原名）</p>
   */
  Name?: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>集群组配置</p>
   */
  Config?: string
}

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
 * RevokeDLCCatalogAccess请求参数结构体
 */
export interface RevokeDLCCatalogAccessRequest {
  /**
   * VpcID
   */
  VpcId: string
}

/**
 * CreateResourceConfig返回参数结构体
 */
export interface CreateResourceConfigResponse {
  /**
   * 模板ID
   */
  Id?: string
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 模板类型
   */
  Type?: string
  /**
   * Head节点配置
   */
  Head?: HeadSpecDTO
  /**
   * Worker节点配置
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 应用ID
   */
  AppId?: number
  /**
   * 创建者UIN
   */
  Uin?: string
  /**
   * 子用户UIN
   */
  SubAccountUin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DLC分区信息查询返回数据结构
 */
export interface MixedTablePartitions {
  /**
   * 数据表格式
   */
  TableFormat?: string
  /**
   * 分区总数
   */
  TotalSize?: number
  /**
   * 分页查询的游标信息，在获取下一页信息时需要回传到服务端
   */
  NextCursor?: string
  /**
   * iceberg表分区信息
   */
  IcebergPartitions?: Array<IcebergTablePartition>
  /**
   * hive表分区信息
   */
  HivePartitions?: Array<HiveTablePartition>
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
 * ListLabs返回参数结构体
 */
export interface ListLabsResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>数据实验室列表</p>
   */
  Items?: Array<LabResponse>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDMSDatabase返回参数结构体
 */
export interface DescribeDMSDatabaseResponse {
  /**
   * 数据库名称
   */
  Name?: string
  /**
   * schema名称
   */
  SchemaName?: string
  /**
   * 存储地址
   */
  Location?: string
  /**
   * 数据对象
   */
  Asset?: Asset
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskList返回参数结构体
 */
export interface DescribeTaskListResponse {
  /**
   * <p>任务对象列表。</p>
   */
  TaskList?: Array<TaskFullRespInfo>
  /**
   * <p>实例总数。</p>
   */
  TotalCount?: number
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
  PolicySet?: Array<Policy>
  /**
   * 策略总数
   */
  TotalCount?: number
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
   */
  IsAvailable?: boolean
  /**
   * Session唯一标识
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
   * <p>事件详细信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events?: Array<HouseEventsInfo>
  /**
   * <p>分页号</p>
   */
  Page?: number
  /**
   * <p>分页大小</p>
   */
  Size?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>总条数</p>
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
   */
  DriverSize?: string
  /**
   * executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
   */
  ExecutorSize?: string
  /**
   * 指定executor数量，最小值为1，最大值小于集群规格
   */
  ExecutorNums?: number
  /**
   * 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）
   */
  ExecutorMaxNumbers?: number
  /**
   * 运行时参数
   */
  RunningTimeParameters?: Array<DataEngineConfigPair>
}

/**
 * GetRayCluster返回参数结构体
 */
export interface GetRayClusterResponse {
  /**
   * <p>获取Ray集群详情请求</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>状态详情/错误信息</p>
   */
  StatusMessage?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePartitions请求参数结构体
 */
export interface DescribePartitionsRequest {
  /**
   * 页码，从1开始，默认为1
   */
  Page?: number
  /**
   * 每页返回数量，默认为10
   */
  PageSize?: number
  /**
   * 排序字段列表，按数组顺序依次应用，可选
   */
  SortFields?: Array<SortField>
  /**
   * 筛选条件列表，多个条件之间为AND关系，可选
   */
  Filters?: Array<Filter>
}

/**
 * AlterTableComment返回参数结构体
 */
export interface AlterTableCommentResponse {
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
 * DescribeDMSTable返回参数结构体
 */
export interface DescribeDMSTableResponse {
  /**
   * 基础对象
   */
  Asset?: Asset
  /**
   * 视图文本
   */
  ViewOriginalText?: string
  /**
   * 视图文本
   */
  ViewExpandedText?: string
  /**
   * hive维护版本
   */
  Retention?: number
  /**
   * 存储对象
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
   */
  Type?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * Schame名称
   */
  SchemaName?: string
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
   * 最后访问时间
   */
  LastAccessTime?: string
  /**
   * 数据更新时间
   */
  DataUpdateTime?: string
  /**
   * 结构更新时间
   */
  StructUpdateTime?: string
  /**
   * 列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<DMSColumn>
  /**
   * 表名称
   */
  Name?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AlterTableComment请求参数结构体
 */
export interface AlterTableCommentRequest {
  /**
   * 修改表的基本信息
   */
  TableBaseInfo: TableBaseInfo
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
 * 资源配额
 */
export interface ResourceQuota {
  /**
   * <p>可售卖资源规格</p>
   */
  ResourceSpec?: ResourceSpec
  /**
   * <p>配额数量</p><p>请注意，CPU类型计费项为32的整数倍，GPU类型计费项为1的整数倍。</p>
   */
  Quota?: number
}

/**
 * Workspace 持久化工作目录配置
 */
export interface PersistentWorkDir {
  /**
   * <p>是否启用持久化工作目录；为空或 false 时沿用 emptyDir 行为</p>
   */
  Enabled?: boolean
  /**
   * <p>持久化存储类型：COS / CFS</p>
   */
  Type?: string
  /**
   * <p>COS Bucket 名称（Type=COS 时必填）</p>
   */
  Bucket?: string
  /**
   * <p>CFS 文件系统 ID（Type=CFS 时必填）</p>
   */
  FileSystemId?: string
  /**
   * <p>Bucket / 文件系统下的子路径，必须以 &#39;/&#39; 开头且不含 &#39;..&#39;</p>
   */
  VolumeSubPath?: string
}

/**
 * Ray集群实体
 */
export interface RayClusterEntity {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>状态详情/错误信息</p>
   */
  StatusMessage?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
}

/**
 * GetLabEvent请求参数结构体
 */
export interface GetLabEventRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>开始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>结束时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
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
 * 集群Session配置信息.
 */
export interface DataEngineImageSessionParameter {
  /**
   * 配置id
   */
  ParameterId: string
  /**
   * 小版本镜像ID
   */
  ChildImageVersionId: string
  /**
   * 集群类型：SparkSQL/PrestoSQL/SparkBatch
   */
  EngineType: string
  /**
   * 参数key
   */
  KeyName: string
  /**
   * Key描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyDescription: string
  /**
   * value类型
   */
  ValueType: string
  /**
   * value长度限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueLengthLimit: string
  /**
   * value正则限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueRegexpLimit: string
  /**
   * value默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueDefault: string
  /**
   * 是否为公共版本：1：公共；2：私有
   */
  IsPublic: number
  /**
   * 配置类型：1：session配置（默认）；2：common配置；3：cluster配置
   */
  ParameterType: number
  /**
   * 提交方式：User(用户)、BackGround（后台）
   */
  SubmitMethod: string
  /**
   * 操作者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator: string
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
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateInferenceService请求参数结构体
 */
export interface CreateInferenceServiceRequest {
  /**
   * <p>推理服务名称</p>
   */
  Name: string
  /**
   * <p>模型 UID（业务级唯一标识）</p>
   */
  ModelUid: string
  /**
   * <p>推理引擎（vllm / xgboost）</p>
   */
  Engine: string
  /**
   * <p>副本数</p>
   */
  Replicas: number
  /**
   * <p>资源分区 ID（目标 K8s 集群分区）</p>
   */
  ResourcePartitionId: string
  /**
   * <p>Ray Serve 部署镜像</p>
   */
  Image: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
   */
  ModelIdentifier: string
  /**
   * <p>队列名（K8s namespace）</p>
   */
  Queue: string
  /**
   * <p>部署名称（可选，未提供时自动生成）</p>
   */
  DeploymentName?: string
  /**
   * <p>模型版本（如 v1, v2），未提供时使用最新版本</p>
   */
  ModelVersion?: string
  /**
   * <p>ray head 是否开始高可用（是否申请 redis 实例用于 head 连接）</p>
   */
  HeadHighAvailabilityEnabled?: boolean
  /**
   * <p>高级参数（JSON 字符串，可选）</p>
   */
  AdvancedParams?: string
  /**
   * <p>镜像拉取策略（默认 IfNotPresent）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>是否启用弹性伸缩</p>
   */
  AutoscalingEnabled?: boolean
  /**
   * <p>最小副本数（启用弹性伸缩时生效，0 表示缩容到 0）</p>
   */
  MinReplicas?: number
  /**
   * <p>最大副本数（启用弹性伸缩时生效）</p>
   */
  MaxReplicas?: number
  /**
   * <p>Autoscaler 配置（JSON 字符串）</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>ApiKeyIds</p>
   */
  ApiKeyIds?: Array<string>
}

/**
 * 数据脱敏策略信息
 */
export interface DataMaskStrategy {
  /**
   * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyId?: string
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAppId?: string
  /**
   * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 操作用户子账号uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
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
   * 1: 生效中； 0：已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 策略创建时间，毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 策略更新时间，毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
}

/**
 * DescribeAdvancedStoreLocation返回参数结构体
 */
export interface DescribeAdvancedStoreLocationResponse {
  /**
   * 是否启用高级设置：0-否，1-是
   */
  Enable?: number
  /**
   * 查询结果保存cos路径
   */
  StoreLocation?: string
  /**
   * 是否有托管存储权限
   */
  HasLakeFs?: boolean
  /**
   * 托管存储状态，HasLakeFs等于true时，该值才有意义
   */
  LakeFsStatus?: string
  /**
   * 托管存储桶类型
   */
  BucketType?: string
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
 * GetLabPodYaml返回参数结构体
 */
export interface GetLabPodYamlResponse {
  /**
   * <p>Pod YAML</p>
   */
  Yaml?: string
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
 * DeletePartitionQueue返回参数结构体
 */
export interface DeletePartitionQueueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMetaDatabase请求参数结构体
 */
export interface DeleteMetaDatabaseRequest {
  /**
   * 数据库名称
   */
  DatabaseName: string
  /**
   * 数据源名称，默认DataLakeCatalog
   */
  DatasourceConnectionName?: string
}

/**
 * GetRayCluster请求参数结构体
 */
export interface GetRayClusterRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
}

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
 * 节点标签模型
 */
export interface Label {
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>值</p>
   */
  Value?: string
}

/**
 * CreateModelVersion请求参数结构体
 */
export interface CreateModelVersionRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid: string
  /**
   * <p>模型版本号</p>
   */
  ModelVersion: string
  /**
   * <p>版本说明</p>
   */
  Description?: string
  /**
   * <p>该版本的存储 URI（可选，如 cos://bucket-name/models/name/v2/）</p>
   */
  StorageUri?: string
  /**
   * <p>是否使用用户自带存储桶（默认 false 表示平台托管）</p>
   */
  UseCustomStorage?: boolean
}

/**
 * SparkSQL批任务信息
 */
export interface BatchSqlTask {
  /**
   * SQL子任务唯一标识
   */
  TaskId?: string
  /**
   * 运行SQL
   */
  ExecuteSQL?: string
  /**
   * 任务信息，成功则返回：Task Success!，失败则返回异常信息
   */
  Message?: string
}

/**
 * ModifySparkAppForTDLC返回参数结构体
 */
export interface ModifySparkAppForTDLCResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据脱敏用户组信息
 */
export interface GroupInfo {
  /**
   * 用户组ID
   */
  WorkGroupId?: number
  /**
   * 策略类型
   */
  StrategyType?: string
}

/**
 * StartRayCluster请求参数结构体
 */
export interface StartRayClusterRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
}

/**
 * UnboundDatasourceHouse请求参数结构体
 */
export interface UnboundDatasourceHouseRequest {
  /**
   * 网络配置名称
   */
  NetworkConnectionName?: string
}

/**
 * CreatePartition返回参数结构体
 */
export interface CreatePartitionResponse {
  /**
   * <p>子订单号</p>
   */
  DealName?: string
  /**
   * <p>大订单号</p>
   */
  BigDealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserVpcConnection返回参数结构体
 */
export interface DeleteUserVpcConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetRayJobYaml返回参数结构体
 */
export interface GetRayJobYamlResponse {
  /**
   * RayJob YAML
   */
  Yaml?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源分区信息
 */
export interface PartitionInfo {
  /**
   * <p>分区名称</p>
   */
  Name?: string
  /**
   * <p>分区编码</p>
   */
  PartitionCode?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>状态：11-发货中，1-运行中，2-隔离中，3-已销毁</p>
   */
  Status?: number
  /**
   * <p>队列数量</p>
   */
  QueueCount?: number
  /**
   * <p>资源配置（配额）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceQuota?: Array<ResourceQuota>
  /**
   * <p>计费类型：1-包年包月，0-按量计费</p>
   */
  PayMode?: number
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>过期时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
}

/**
 * SetOptimizerPolicy请求参数结构体
 */
export interface SetOptimizerPolicyRequest {
  /**
   * 优化策略
   */
  SmartPolicy: SmartPolicy
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
  /**
   * 引擎资源弹性伸缩策略
   */
  ScheduleElasticityConf?: ScheduleElasticityConf
}

/**
 * SmartOptimizerWrittenPolicy
 */
export interface SmartOptimizerWrittenPolicy {
  /**
   * none/enable/disable/default
   */
  WrittenEnable?: string
  /**
   * 用户自定义高级参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancePolicy?: WrittenAdvancePolicy
}

/**
 * DescribeDatabase返回参数结构体
 */
export interface DescribeDatabaseResponse {
  /**
   * 数据库信息
   */
  DatabaseInfo?: DatabaseResponseInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 作业配置
 */
export interface JobSpec {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>ResourceConfigId</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>集群组Id</p>
   */
  GroupId?: string
  /**
   * <p>集群id</p>
   */
  ClusterId?: string
  /**
   * <p>默认计算组名称</p>
   */
  ClusterGroup?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置产生的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数，JSON 字符串</p>
   */
  AdvancedOptions?: string
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p>
   */
  DispatchStrategy?: string
  /**
   * <p>作业提交目标：GROUP（按计算组分派）/ CLUSTER（指定集群）/ SERVERLESS（按 Serverless 拉起）</p>
   */
  SubmissionTarget?: string
  /**
   * <p>集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
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
 * ListClusterGroups请求参数结构体
 */
export interface ListClusterGroupsRequest {
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>提交时间起始过滤-时间戳（毫秒，可选）</p>
   */
  StartTime?: number
  /**
   * <p>提交时间截止过滤-时间戳（毫秒，可选）</p>
   */
  EndTime?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
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
 * head组规格
 */
export interface HeadSpecDTO {
  /**
   * <p>head/worker名称</p>
   */
  Name?: string
  /**
   * <p>Pod CPU核数</p>
   */
  PodCpu?: number
  /**
   * <p>Pod 内存大小</p>
   */
  PodMem?: number
  /**
   * <p>GPU类型</p>
   */
  GpuType?: string
  /**
   * <p>GPU数量</p>
   */
  GpuNum?: number
  /**
   * <p>环境变量列表</p>
   */
  Envs?: Array<Env>
  /**
   * <p>标签列表</p>
   */
  Labels?: Array<Label>
  /**
   * <p>资源标签列表（用于追加到 headGroupSpec/workerGroupSpec 的 resources map 中，对应 Ray/K8s 的自定义资源声明），Value 必须为字符串形式的整数</p>
   */
  ResourcesLabels?: Array<Label>
  /**
   * <p>Pod数量</p>
   */
  PodNum?: number
  /**
   * <p>是否支持高级可用</p>
   */
  HighAvailability?: boolean
  /**
   * <p>资源类型,CPU,GPU</p>
   */
  ResourceType?: string
  /**
   * <p>机型</p>
   */
  InstanceType?: string
  /**
   * <p>规格数量</p>
   */
  Spec?: number
  /**
   * <p>资源ID(唯一)</p>
   */
  BillingItem?: string
}

/**
 * CreatePartitionQueue请求参数结构体
 */
export interface CreatePartitionQueueRequest {
  /**
   * <p>分区编码</p>
   */
  PartitionCode: string
  /**
   * <p>队列名称</p>
   */
  QueueName: string
  /**
   * <p>资源规格列表，定义队列的资源类型及大小范围</p>
   */
  ResourceUsages: Array<ResourceUsage>
  /**
   * <p>队列类型：1-独占型，2-共享型</p>
   */
  QueueType: number
  /**
   * <p>队列描述</p>
   */
  Description?: string
}

/**
 * Location信息结构
 */
export interface LocationInfo {
  /**
   * 桶名称
   */
  Bucket?: string
  /**
   * location路径
   */
  DataLocation?: string
}

/**
 * UpdateEngineResourceGroupNetworkConfigInfo请求参数结构体
 */
export interface UpdateEngineResourceGroupNetworkConfigInfoRequest {
  /**
   * 引擎资源组ID
   */
  EngineResourceGroupId: string
  /**
   * 是否立即重启资源组生效，0--立即生效，1--只保持不重启生效
   */
  IsEffectiveNow: number
  /**
   * 资源组绑定的网络配置名称集合
   */
  NetworkConfigNames?: Array<string>
}

/**
 * SmartOptimizerPolicy
 */
export interface SmartOptimizerPolicy {
  /**
   * 是否继承
   */
  Inherit?: string
  /**
   * 数据治理资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: Array<ResourceInfo>
  /**
   * 数据重写策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  Written?: SmartOptimizerWrittenPolicy
  /**
   * 数据过期策略
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
  /**
   * 表过期策略
   */
  TableExpiration?: TableExpirationPolicy
}

/**
 * UnboundDatasourceHouse返回参数结构体
 */
export interface UnboundDatasourceHouseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunJobSpec返回参数结构体
 */
export interface RunJobSpecResponse {
  /**
   * <p>任务ID</p>
   */
  Id?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>任务名称</p>
   */
  JobName?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行时间(ms)</p>
   */
  RunningTime?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>来源配置ID</p>
   */
  SpecId?: string
  /**
   * <p>来源配置名称</p>
   */
  SpecName?: string
  /**
   * <p>高级参数</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>业务来源标识（调用上下文，长度上限 64，禁止控制字符）</p>
   */
  JobSource?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLabHistory请求参数结构体
 */
export interface GetLabHistoryRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
}

/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
  /**
   * <p>用户详细信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserInfo?: UserDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskList请求参数结构体
 */
export interface DescribeTaskListRequest {
  /**
   * <p>返回数量，默认为10，最大值为100。</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。<br>task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。<br>task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。<br>task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。<br>task-operator- string （子uin过滤）<br>task-kind - string （任务类型过滤）</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间）</p>
   */
  SortBy?: string
  /**
   * <p>排序方式，desc表示正序，asc表示反序， 默认为asc。</p>
   */
  Sorting?: string
  /**
   * <p>起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻</p>
   */
  StartTime?: string
  /**
   * <p>结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻</p>
   */
  EndTime?: string
  /**
   * <p>数据引擎名称，用于筛选</p>
   */
  DataEngineName?: string
  /**
   * <p>spark引擎资源组名称</p>
   */
  ResourceGroupName?: string
  /**
   * <p>引擎id列表</p>
   */
  HouseIds?: Array<string>
}

/**
 * DetachWorkGroupPolicy请求参数结构体
 */
export interface DetachWorkGroupPolicyRequest {
  /**
   * <p>工作组Id</p>
   */
  WorkGroupId: number
  /**
   * <p>解绑的权限集合</p>
   */
  PolicySet?: Array<Policy>
  /**
   * <p>要授权的策略列表</p>
   */
  PolicyIds?: Array<string>
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
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
}

/**
 * NotebookSessionStatement详情。
 */
export interface NotebookSessionStatementInfo {
  /**
   * 完成时间戳
   */
  Completed?: number
  /**
   * 开始时间戳
   */
  Started?: number
  /**
   * 完成进度，百分制
   */
  Progress?: number
  /**
   * Session Statement唯一标识
   */
  StatementId?: string
  /**
   * Session Statement状态，包含：waiting（排队中）、running（运行中）、available（正常）、error（异常）、cancelling（取消中）、cancelled（已取消）
   */
  State?: string
  /**
   * Statement输出信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutPut?: StatementOutput
  /**
   * 批任务id
   */
  BatchId?: string
  /**
   * 运行语句
   */
  Code?: string
  /**
   * 任务ID
   */
  TaskId?: string
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
 * ListRayClusters请求参数结构体
 */
export interface ListRayClustersRequest {
  /**
   * <p>起始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>截止时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>过滤条件列表</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * DescribeDataMaskStrategies请求参数结构体
 */
export interface DescribeDataMaskStrategiesRequest {
  /**
   * 分页参数，单页返回数据量，默认10
   */
  Limit?: number
  /**
   * 分页参数，数据便偏移量，默认0
   */
  Offset?: number
  /**
   * 过滤字段，strategy-name: 按策略名称搜索
   */
  Filters?: Array<Filter>
}

/**
 * SmartOptimizerLifecyclePolicy
 */
export interface SmartOptimizerLifecyclePolicy {
  /**
   * 生命周期启用
   */
  LifecycleEnable?: string
  /**
   * 过期时间
   */
  Expiration?: number
  /**
   * 是否删表，该字段废弃已使用，用TableExpiration策略替代
   * @deprecated
   */
  DropTable?: boolean
  /**
   * 过期字段
   */
  ExpiredField?: string
  /**
   * 过期字段格式
   */
  ExpiredFieldFormat?: string
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
 * GetLabYaml返回参数结构体
 */
export interface GetLabYamlResponse {
  /**
   * <p>RayCluster YAML</p>
   */
  Yaml?: string
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
 * ListInferenceModels返回参数结构体
 */
export interface ListInferenceModelsResponse {
  /**
   * <p>推理模型列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InferenceModelInfo>
  /**
   * <p>总记录数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * <p>当前页码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: number
  /**
   * <p>每页数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * <p>总页数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ray 任务事件项
 */
export interface RayJobEventItem {
  /**
   * <p>事件时间（Unix 时间戳，毫秒）</p>
   */
  EventTime?: number
  /**
   * <p>组件名称，来源于 event.involvedObject.kind</p>
   */
  Component?: string
  /**
   * <p>事件级别，来源于 event.type 的原始值（如 Normal、Warning）</p>
   */
  Level?: string
  /**
   * <p>事件内容，来源于 event.message</p>
   */
  Message?: string
  /**
   * <p>关联的 K8s 对象名称，来源于 event.involvedObject.name</p>
   */
  InvolvedObjectName?: string
  /**
   * <p>事件来源组件，来源于 event.source.component</p>
   */
  SourceComponent?: string
  /**
   * <p>事件原因，来源于 event.reason</p>
   */
  Reason?: string
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
 * ModifySparkApp返回参数结构体
 */
export interface ModifySparkAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePartition请求参数结构体
 */
export interface CreatePartitionRequest {
  /**
   * <p>交易类型：purchase-新购，renew-续费，modify-变配</p>
   */
  ActionType: string
  /**
   * <p>付费模式：0-后付费，1-预付费</p>
   */
  PayMode: number
  /**
   * <p>资源配额列表（计费项+数量）</p>
   */
  ResourceQuotaList: Array<ResourceQuota>
  /**
   * <p>时间大小，预付费时为购买月数，后付费时为3600</p>
   */
  TimeSpan: number
  /**
   * <p>时间单位，预付费为m（月），后付费为s（秒）</p>
   */
  TimeUnit: string
  /**
   * <p>自动续费标志：0-默认，1-自动续费，2-不自动续费（仅预付费有效）</p>
   */
  AutoRenewFlag?: number
  /**
   * <p>弹性资源池名称，用于订单页展示</p>
   */
  Name?: string
  /**
   * <p>队列描述</p>
   */
  Description?: string
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
 * CreateSparkSubmitTask返回参数结构体
 */
export interface CreateSparkSubmitTaskResponse {
  /**
   * 批作业ID
   */
  BatchId?: string
  /**
   * 批任务ID，用改ID进行任务的查询与删除等
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelRayJob请求参数结构体
 */
export interface CancelRayJobRequest {
  /**
   * 任务ID
   */
  Id: string
}

/**
 * 推理模型信息
 */
export interface InferenceModelInfo {
  /**
   * <p>Model ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * <p>模型业务唯一标识</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>模型提供方</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Provider?: string
  /**
   * <p>模型描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>模型类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>支持的引擎</p>
   */
  SupportedEngines?: Array<string>
  /**
   * <p>参数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParameterSize?: string
  /**
   * <p>模型标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * <p>最新版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersion?: string
  /**
   * <p>版本总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionCount?: number
  /**
   * <p>关联的推理服务数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCount?: number
  /**
   * <p>是否有存储（内置模型和用户上传模型均为 true）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasStorage?: boolean
  /**
   * <p>存储地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageRegion?: string
  /**
   * <p>是否使用用户自带存储桶</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasCustomStorage?: boolean
  /**
   * <p>存储后端类型（如 COS、GOOSEFS、CFSTURBO）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * <p>是否是内置模型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuiltIn?: boolean
  /**
   * <p>任务类型列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<string>
  /**
   * <p>云账户的 APP ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>云账户的 UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>云账户的 Sub UIN</p>
   */
  SubAccountUin?: string
}

/**
 * CreateRayCluster请求参数结构体
 */
export interface CreateRayClusterRequest {
  /**
   * <p>集群名称（可选，不填写则默认使用集群ID）</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>存储卷和挂载卷配置</p>
   */
  Catalog?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
}

/**
 * DescribeUserRegisterTime请求参数结构体
 */
export type DescribeUserRegisterTimeRequest = null

/**
 * AttachDataMaskPolicy请求参数结构体
 */
export interface AttachDataMaskPolicyRequest {
  /**
   * 要绑定的数据脱敏策略权限对象集合
   */
  DataMaskStrategyPolicySet?: Array<DataMaskStrategyPolicy>
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
   */
  Id?: number
  /**
   * 用户主UIN
   */
  Uin?: string
  /**
   * 用户AppId
   */
  AppId?: string
  /**
   * 开通时间
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
 * CreateJobSpec返回参数结构体
 */
export interface CreateJobSpecResponse {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>资源配置模板ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺省时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置下未进入终态的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数json</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterGroup 等价，新调用方使用 GroupId）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li></ul>
   */
  DispatchStrategy?: string
  /**
   * <p>作业提交目标</p><p>枚举值：</p><ul><li>GROUP： 按计算组分派</li></ul>
   */
  SubmissionTarget?: string
  /**
   * <p>计算组名称</p>
   */
  GroupName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据优化引擎信息
 */
export interface OptimizerEngineInfo {
  /**
   * 引擎资源名称
   */
  HouseName: string
  /**
   * 引擎资源ID
   */
  HouseId: string
  /**
   * 该参数仅针对spark作业引擎有效，用于执行数据优化任务的资源大小，不填时将采用该引擎所有资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  HouseSize?: number
}

/**
 * CreateStandardEngineResourceGroup请求参数结构体
 */
export interface CreateStandardEngineResourceGroupRequest {
  /**
   * 标准引擎资源组名称
   */
  EngineResourceGroupName: string
  /**
   * 标准引擎名称
   */
  DataEngineName: string
  /**
   * 自动启动，（任务提交自动拉起资源组）0-自动启动，1-不自动启动
   */
  AutoLaunch?: number
  /**
   * 自动挂起资源组。0-自动挂起，1-不自动挂起
   */
  AutoPause?: number
  /**
   * driver的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  DriverCuSpec?: string
  /**
   * executor的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  ExecutorCuSpec?: string
  /**
   * executor最小数量，
   */
  MinExecutorNums?: number
  /**
   * executor最大数量
   */
  MaxExecutorNums?: number
  /**
   * 创建资源组后是否直接拉起，0-拉起，1-不拉起
   */
  IsLaunchNow?: number
  /**
   * 自动挂起时间，单位分钟，取值范围在1-999（在无任务AutoPauseTime后，资源组自动挂起）
   */
  AutoPauseTime?: number
  /**
   * 资源组静态参数，需要重启资源组生效
   */
  StaticConfigPairs?: Array<EngineResourceGroupConfigPair>
  /**
   * 资源组动态参数，下一个任务生效。
   */
  DynamicConfigPairs?: Array<EngineResourceGroupConfigPair>
  /**
   * 任务并发数，默人是5个
   */
  MaxConcurrency?: number
  /**
   * 网络配置名称
   */
  NetworkConfigNames?: Array<string>
  /**
   * 自定义镜像域名
   */
  PublicDomain?: string
  /**
   * 自定义镜像实例id
   */
  RegistryId?: string
  /**
   * AI类型资源组的框架类型，machine-learning，python，spark-ml，不填默认为machine-learning
   */
  FrameType?: string
  /**
   * 镜像类型，bulit-in：内置，custom：自定义，不填默认为bulit-in
   */
  ImageType?: string
  /**
   * 镜像名称
   */
  ImageName?: string
  /**
   * 镜像id
   */
  ImageVersion?: string
  /**
   * AI资源组有效，资源组可用资源上限，该值需要小于引擎资源上限
   */
  Size?: number
  /**
   * 资源组场景
   */
  ResourceGroupScene?: string
  /**
   * 自定义镜像所在地域
   */
  RegionName?: string
  /**
   * python类型资源组python单机节点资源上限，该值要小于资源组的资源上限.small:1cu medium:2cu large:4cu xlarge:8cu 4xlarge:16cu 8xlarge:32cu 16xlarge:64cu，如果是高内存型资源，在类型前面加上m.
   */
  PythonCuSpec?: string
  /**
   * 仅SQL资源组资源配置模式，fast：快速模式，custom：自定义模式
   */
  SparkSpecMode?: string
  /**
   * 仅SQL资源组资源上限，仅用于快速模块
   */
  SparkSize?: number
  /**
   * GPUDriver规格
   */
  DriverGPUSpec?: number
  /**
   * GPUExecutor规格
   */
  ExecutorGPUSpec?: number
  /**
   * GPU上限
   */
  GPULimitSize?: number
  /**
   * GPU规格
   */
  GPUSize?: number
  /**
   * Pod GPU规格上限
   */
  PythonGPUSpec?: number
}

/**
 * QueryDashboardOverview请求参数结构体
 */
export interface QueryDashboardOverviewRequest {
  /**
   * <p>时间范围起始（Unix 时间戳，秒）</p>
   */
  StartTime: string
  /**
   * <p>时间范围结束（Unix 时间戳，秒）</p>
   */
  EndTime: string
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
  /**
   * 批次Id
   */
  BatchId?: string
  /**
   * 返回结果集中字段值长度截取，如果超过该长度则截取到该长度
   */
  DataFieldCutLen?: number
}

/**
 * GetLabPodYaml请求参数结构体
 */
export interface GetLabPodYamlRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
  /**
   * <p>Pod名称</p>
   */
  PodName?: string
}

/**
 * CreateSparkSubmitTask请求参数结构体
 */
export interface CreateSparkSubmitTaskRequest {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 任务类型：当前支持1: BatchType, 2: StreamingType, 4: SQLType
   */
  TaskType: number
  /**
   * 引擎名称，当前仅支持Spark批作业集群
   */
  DataEngineName: string
  /**
   * 指定运行的程序脚本路径，当前仅支持jar和py，对于SQLType该值设为空字符串
   */
  PackagePath: string
  /**
   * 指定的鉴权信息
   */
  RoleArn: number
  /**
   * 运行任务所需资源是否继承自集群上配置资源信息，0（默认，不继承）、1（继承，当设置为该值，则任务级资源配置可不额外指定）
   */
  IsInherit: number
  /**
   * jar任务时需要指定主程序
   */
  MainClass?: string
  /**
   * 当前DriverSize规格仅支持（内存型集群则使用m前缀的枚举值）: small/medium/large/xlarge/m.small/m.medium/m.large/m.xlarge
   */
  DriverSize?: string
  /**
   * 当前ExecutorSize规格仅支持（内存型集群则使用m前缀的枚举值）: small/medium/large/xlarge/m.small/m.medium/m.large/m.xlarge
   */
  ExecutorSize?: string
  /**
   * 指定使用的executor数量，最小为1
   */
  ExecutorNumbers?: number
  /**
   * 指定使用的executor最大数量, 当该值大于ExecutorNums则自动开启动态
   */
  ExecutorMaxNumbers?: number
  /**
   * 提交任务的附加配置集合，当前支持Key包含：MAINARGS：程序入口参数，空格分割(SqlType任务通过该值指定base64加密后的sql)、SPARKCONFIG：Spark配置，以换行符分隔、ENI：Eni连接信息、DEPENDENCYPACKAGEPATH：依赖的程序包（--jars、--py-files:支持py/zip/egg等归档格式），多文件以逗号分隔、DEPENDENCYFILEPATH：依赖文件资源（--files: 非jar、zip），多文件以逗号分隔、DEPENDENCYARCHIVESPATH：依赖archives资源（--archives: 支持tar.gz/tgz/tar等归档格式)，多文件以逗号分隔、MAXRETRIES：任务重试次数，非流任务默认为1、SPARKIMAGE：Spark镜像版本号，支持使用dlc镜像/用户自定的tcr镜像运行任务、SPARKIMAGEVERSION：Spark镜像版本名称，与SPARKIMAGE一一对应；SPARKPRESETCODE：base64后的notebook预置代码；SPARKENV：base64后的spark环境变量；SPARKGITINFO：base64后的git相关信息
   */
  CmdArgs?: Array<KVPair>
  /**
   * 任务来源信息
   */
  SourceInfo?: Array<KVPair>
  /**
   * ai资源组名称
   */
  ResourceGroupName?: string
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
 * QueryMonitorOverview请求参数结构体
 */
export interface QueryMonitorOverviewRequest {
  /**
   * <p>图表类型列表（批量查询多个指标的当前值）</p>
   */
  ChartTypes: Array<string>
  /**
   * <p>推理服务 ID（业务唯一标识）</p>
   */
  ServiceId: string
}

/**
 * DeleteStandardEngineResourceGroup返回参数结构体
 */
export interface DeleteStandardEngineResourceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 返回结果集中字段长度截取，如果字段值长度超过该长度则截取到该长度
   */
  DataFieldCutLen?: number
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
 * 队列信息
 */
export interface QueueInfo {
  /**
   * <p>队列ID</p>
   */
  Id?: number
  /**
   * <p>队列名称</p>
   */
  QueueName?: string
  /**
   * <p>资源用量列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceUsage?: Array<ResourceUsage>
  /**
   * <p>队列描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>是否为默认队列</p>
   */
  IsDefault?: number
  /**
   * <p>队列类型：1-独占型，2-共享型</p>
   */
  QueueType?: number
}

/**
 * 概览数据项，用于监控
 */
export interface OverviewItem {
  /**
   * <p>图表类型（与请求中的 ChartTypes 对应）</p>
   */
  ChartType?: string
  /**
   * <p>当前瞬时值（如 QPS=15.2、延迟=120.5ms、利用率=85.0%）。查询失败或无数据时为 null</p>
   */
  Value?: number
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 查询到的用户总数
   */
  TotalCount?: number
  /**
   * 查询到的授权用户信息集合
   */
  UserSet?: Array<UserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckQueueName请求参数结构体
 */
export interface CheckQueueNameRequest {
  /**
   * 队列名称
   */
  QueueName: string
  /**
   * 分区编码，用于校验同分区下队列名称是否重复
   */
  PartitionCode?: string
}

/**
 * 数据治理规则
 */
export interface DataGovernPolicy {
  /**
   * 治理规则类型，Customize: 自定义；Intelligence: 智能治理
   */
  RuleType?: string
  /**
   * 治理引擎
   */
  GovernEngine?: string
}

/**
 * DeleteNativeSparkSession返回参数结构体
 */
export interface DeleteNativeSparkSessionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeFlowDetailList返回参数结构体
 */
export interface DescribeFlowDetailListResponse {
  /**
   * 流程详情列表
   */
  FlowDetailList?: Array<FlowDetail>
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
   * 剩余集群规格百分比
   */
  AvailPercent?: number
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
   * <p>工作组详细信息</p>
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
  /**
   * 查询类型：all：全部数据（默认）、permission：有权限的数据
注意：此字段需要开启白名单使用，如果需要使用，请提交工单联系我们。
   */
  DescribeType?: string
}

/**
 * StartLab返回参数结构体
 */
export interface StartLabResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage?: string
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 引擎资源弹性伸缩计划
 */
export interface ElasticPlan {
  /**
   * 最小集群数
   */
  MinElasticClusters?: number
  /**
   * 最大集群数
   */
  MaxElasticClusters?: number
  /**
   * 最大排队时间
   */
  TolerableQueueTime?: number
  /**
   * 开始时间，Once格式：yyyy-MM-dd HH:mm:ss; 非Once格式： HH:mm:ss
   */
  StartTime?: string
  /**
   * 结束时间，Once格式：yyyy-MM-dd HH:mm:ss; 非Once格式： HH:mm:ss
   */
  EndTime?: string
  /**
   * 分时弹性上限
   */
  ElasticLimit?: number
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
 * ListExampleDifficulties请求参数结构体
 */
export interface ListExampleDifficultiesRequest {
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
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
 * DeleteRayCluster请求参数结构体
 */
export interface DeleteRayClusterRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
}

/**
 * GetInferenceService请求参数结构体
 */
export interface GetInferenceServiceRequest {
  /**
   * <p>ServiceId</p>
   */
  ServiceId: string
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
 * QueryDashboardOverview返回参数结构体
 */
export interface QueryDashboardOverviewResponse {
  /**
   * <p>时间范围内所有服务的总 QPS（每秒请求数）均值</p><p>单位：请求每秒</p>
   */
  TotalRequestsPerSecond?: number
  /**
   * <p>时间范围内全局 P99 延迟均值（毫秒）</p><p>单位：毫秒</p>
   */
  AverageP99LatencyMs?: number
  /**
   * <p>时间范围内全局错误率均值（0~1，如 0.02 表示 2%）</p><p>取值范围：[0, 1]</p>
   */
  ErrorRate?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限对象
 */
export interface Policy {
  /**
   * <p>需要授权的数据库名，填 * 代表当前Catalog下所有数据库。当授权类型为管理员级别时，只允许填 “*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定数据库。</p>
   */
  Database: string
  /**
   * <p>需要授权的数据源名称，管理员级别下只支持填  * （代表该级别全部资源）；数据源级别和数据库级别鉴权的情况下，只支持填COSDataCatalog或者*；在数据表级别鉴权下可以填写用户自定义数据源。不填情况下默认为DataLakeCatalog。注意：如果是对用户自定义数据源进行鉴权，DLC能够管理的权限是用户接入数据源的时候提供的账户的子集。</p>
   */
  Catalog: string
  /**
   * <p>需要授权的表名，填 * 代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。</p>
   */
  Table: string
  /**
   * <p>授权的权限操作，对于不同级别的鉴权提供不同操作。管理员权限：ALL，不填默认为ALL；数据连接级鉴权：CREATE；数据库级别鉴权：ALL、CREATE、ALTER、DROP；数据表权限：ALL、SELECT、INSERT、ALTER、DELETE、DROP、UPDATE。注意：在数据表权限下，指定的数据源不为COSDataCatalog的时候，只支持SELECT操作。</p>
   */
  Operation: string
  /**
   * <p>授权类型，现在支持八种授权类型：ADMIN:管理员级别鉴权 DATASOURCE：数据连接级别鉴权 DATABASE：数据库级别鉴权 TABLE：表级别鉴权 VIEW：视图级别鉴权 FUNCTION：函数级别鉴权 COLUMN：列级别鉴权 ENGINE：数据引擎鉴权。不填默认为管理员级别鉴权。</p>
   */
  PolicyType?: string
  /**
   * <p>需要授权的函数名，填 * 代表当前Catalog下所有函数。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定函数。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Function?: string
  /**
   * <p>需要授权的视图，填 * 代表当前Database下所有视图。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定视图。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  View?: string
  /**
   * <p>需要授权的列，填 * 代表当前所有列。当授权类型为管理员级别时，只允许填“*”</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Column?: string
  /**
   * <p>需要授权的数据引擎，填 * 代表当前所有引擎。当授权类型为管理员级别时，只允许填“*”</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngine?: string
  /**
   * <p>用户是否可以进行二次授权。当为true的时候，被授权的用户可以将本次获取的权限再次授权给其他子用户。默认为false</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReAuth?: boolean
  /**
   * <p>权限来源，入参不填。USER：权限来自用户本身；WORKGROUP：权限来自绑定的工作组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * <p>授权模式，入参不填。COMMON：普通模式；SENIOR：高级模式。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * <p>操作者，入参不填。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * <p>权限创建的时间，入参不填</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>权限所属工作组的ID，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceId?: number
  /**
   * <p>权限所属工作组的名称，只有当该权限的来源为工作组时才会有值。即仅当Source字段的值为WORKGROUP时该字段才有值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceName?: string
  /**
   * <p>策略ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * <p>引擎类型</p>
   */
  EngineGeneration?: string
  /**
   * <p>需要授权的Model名，填 * 代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。</p>
   */
  Model?: string
  /**
   * <p>权限来源是否为管理员</p>
   */
  IsAdminPolicy?: boolean
  /**
   * <p>user和workgroup对应的确定性字符串PolicyId</p>
   */
  PolicyId?: string
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
  Context?: string
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
 * StopInferenceService请求参数结构体
 */
export interface StopInferenceServiceRequest {
  /**
   * <p>推理服务ID</p>
   */
  ServiceId: string
}

/**
 * UpdateJobSpec返回参数结构体
 */
export interface UpdateJobSpecResponse {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺省时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置产生的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数json</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterGroup 等价，新调用方使用 GroupId）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li></ul>
   */
  DispatchStrategy?: string
  /**
   * <p>作业提交目标</p><p>枚举值：</p><ul><li>GROUP： 按计算组分派</li></ul>
   */
  SubmissionTarget?: string
  /**
   * <p>计算组名称</p>
   */
  GroupName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInferenceModel请求参数结构体
 */
export interface CreateInferenceModelRequest {
  /**
   * <p>模型名称（最长 256）</p>
   */
  Name: string
  /**
   * <p>模型类型（如 LLM、Embedding、Reranker、ASR、TTS 等）</p>
   */
  ModelType: string
  /**
   * <p>初始版本号（必填，如 v1、v1.5）</p>
   */
  InitialVersion: string
  /**
   * <p>模型提供方</p>
   */
  Provider?: string
  /**
   * <p>模型描述</p>
   */
  Description?: string
  /**
   * <p>模型参数量（如 7B、1.5B）</p>
   */
  ParameterSize?: string
  /**
   * <p>模型标签列表</p>
   */
  Tags?: Array<string>
  /**
   * <p>模型存储 URI（可选，如 cos://bucket-name/models/name/）</p>
   */
  StorageUri?: string
  /**
   * <p>是否使用用户自带存储桶（默认 false 表示平台托管）</p>
   */
  UseCustomStorage?: boolean
  /**
   * <p>任务类型列表（如 [&quot;Text Generation&quot;, &quot;Embedding&quot;]）</p>
   */
  Tasks?: Array<string>
  /**
   * <p>模型 UID（可选，前端预先生成的 UID，不传则后端自动生成）</p>
   */
  ModelUid?: string
}

/**
 * DescribeEngineNetworks请求参数结构体
 */
export interface DescribeEngineNetworksRequest {
  /**
   * 排序字段
   */
  SortBy?: string
  /**
   * 升序，降序
   */
  Sorting?: string
  /**
   * 过滤条件可选，engine-network-id--引擎网络ID，engine-network-state--引擎网络状态
   */
  Filters?: Array<Filter>
  /**
   * 数据条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
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
 * DescribeNetworkConnections返回参数结构体
 */
export interface DescribeNetworkConnectionsResponse {
  /**
   * 总条数
   */
  TotalCount: number
  /**
   * 网络配置列表
   */
  NetworkConnectionSet: Array<NetworkConnection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 集群组响应
 */
export interface ClusterGroup {
  /**
   * 集群组 ID（系统生成）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 集群组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 集群组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * 应用 ID（多租户）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 创建者主账号 UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 创建者子账号 UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 是否已软删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deleted?: boolean
  /**
   * 删除时间（软删时写入，活跃记录为 null）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteTime?: number
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
   */
  Location?: string
  /**
   * 数据表属性信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<Property>
  /**
   * 数据表更新时间, 单位: ms。
   */
  ModifiedTime?: string
  /**
   * 数据表创建时间,单位: ms。
   */
  CreateTime?: string
  /**
   * 数据格式。
   */
  InputFormat?: string
  /**
   * 数据表存储大小（单位：Byte）
   */
  StorageSize?: number
  /**
   * 数据表行数
   */
  RecordCount?: number
  /**
   * xxxx
   */
  MapMaterializedViewName?: string
  /**
   * 访问热点
   */
  HeatValue?: number
  /**
   * InputFormat的缩写
   */
  InputFormatShort?: string
}

/**
 * UpdateResourceConfig请求参数结构体
 */
export interface UpdateResourceConfigRequest {
  /**
   * 资源配置模板Id
   */
  Id: string
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * Head节点配置
   */
  Head?: HeadSpecDTO
  /**
   * Worker节点配置
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * 模板类型(不传默认Ray)
   */
  Type?: string
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
 * CancelTasks请求参数结构体
 */
export interface CancelTasksRequest {
  /**
   * 任务Id数组，全局唯一
   */
  TaskId: Array<string>
  /**
   * 配置信息，key-value数组，对外不可见。key1：AuthorityRole（鉴权角色，默认传SubUin，base64加密，仅在jdbc提交任务时使用）
   */
  Config?: Array<KVPair>
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
 * 引擎资源组参数 配置项
 */
export interface EngineResourceGroupConfigPair {
  /**
   * 配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigItem: string
  /**
   * 配置项的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigValue: string
}

/**
 * 流程简要信息
 */
export interface FlowInfo {
  /**
   * <p>流程ID</p>
   */
  FlowId?: number
  /**
   * <p>流程编码</p>
   */
  WorkFlowCode?: string
  /**
   * <p>流程状态</p>
   */
  Status?: number
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
 * UpdateRowFilter返回参数结构体
 */
export interface UpdateRowFilterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权用户信息
 */
export interface UserInfo {
  /**
   * 用户Id，和子用户uin相同
   */
  UserId?: string
  /**
   * 用户描述信息，方便区分不同用户
   */
  UserDescription?: string
  /**
   * 单独给用户绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicySet?: Array<Policy>
  /**
   * 当前用户的创建者
   */
  Creator?: string
  /**
   * 创建时间，格式如2021-07-28 16:19:32
   */
  CreateTime?: string
  /**
   * 关联的工作组集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkGroupSet?: Array<WorkGroupMessage>
  /**
   * 是否是主账号
   */
  IsOwner?: boolean
  /**
   * 用户类型。ADMIN：管理员 COMMON：普通用户。
   */
  UserType?: string
  /**
   * 用户别名
   */
  UserAlias?: string
  /**
   * 账号类型
   */
  AccountType?: string
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
 * DeleteJobSpec请求参数结构体
 */
export interface DeleteJobSpecRequest {
  /**
   * 配置ID
   */
  SpecId: string
}

/**
 * GetLabPods请求参数结构体
 */
export interface GetLabPodsRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>开始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>结束时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * 描述一个推理引擎的能力
 */
export interface EngineCapabilities {
  /**
   * <p>GPU 是否可选</p>
   */
  GpuOptional?: boolean
  /**
   * <p>是否支持并行配置</p>
   */
  SupportsParallelConfig?: boolean
  /**
   * <p>是否支持远程代码</p>
   */
  SupportsRemoteCode?: boolean
  /**
   * <p>GPU 显存配置键名</p>
   */
  GpuMemoryKey?: string
  /**
   * <p>并行配置键名列表</p>
   */
  ParallelKeys?: Array<ParallelKeyMapping>
}

/**
 * UpdateInferenceModel请求参数结构体
 */
export interface UpdateInferenceModelRequest {
  /**
   * <p>推理模型UID</p>
   */
  ModelUid: string
  /**
   * <p>模型名称（可选，不传则不修改）</p>
   */
  Name?: string
  /**
   * <p>模型描述（可选）</p>
   */
  Description?: string
  /**
   * <p>模型参数量（可选，如 7B、1.5B）</p>
   */
  ParameterSize?: string
  /**
   * <p>模型标签列表（可选）</p>
   */
  Tags?: Array<string>
}

/**
 * GetRayJob请求参数结构体
 */
export interface GetRayJobRequest {
  /**
   * <p>任务ID</p>
   */
  Id: string
}

/**
 * DeleteDataMaskStrategy请求参数结构体
 */
export interface DeleteDataMaskStrategyRequest {
  /**
   * 数据脱敏策略Id
   */
  StrategyId?: string
}

/**
 * ListExampleTags返回参数结构体
 */
export interface ListExampleTagsResponse {
  /**
   * <p>标签总数</p>
   */
  Total?: number
  /**
   * <p>当前页码</p>
   */
  Page?: number
  /**
   * <p>每页显示标签数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>标签实体</p>
   */
  Items?: Array<ExampleTag>
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
 * DescribeClusterGroupClusters请求参数结构体
 */
export interface DescribeClusterGroupClustersRequest {
  /**
   * <p>计算组 ID</p>
   */
  Id: string
  /**
   * <p>返回样例 ClusterId 的最大数量（默认 5）</p>
   */
  SampleLimit?: number
  /**
   * <p>Cluster 状态列表</p><p>枚举值：</p><ul><li>running： 运行中</li></ul>
   */
  Status?: Array<string>
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
 * UpdateDataMaskStrategy请求参数结构体
 */
export interface UpdateDataMaskStrategyRequest {
  /**
   * 数据脱敏策略详情
   */
  Strategy?: DataMaskStrategyInfo
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
 * UpdateJobSpecPriority返回参数结构体
 */
export interface UpdateJobSpecPriorityResponse {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>默认计算组 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>集群分派策略（本期仅支持 RANDOM；NULL 时退化为依赖 ClusterGroup 配置兜底）</p>
   */
  DispatchStrategy?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置下未进入终态的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数，JSON 字符串（内容为 Key-Value 对象）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * catalog名称
   */
  DatasourceConnectionName?: string
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
   */
  NextToken?: string
  /**
   * 存储结果地址
   */
  OutputPath?: string
  /**
   * 引擎计算耗时
   */
  UseTime?: number
  /**
   * 结果条数
   */
  AffectRows?: number
  /**
   * 数据扫描量
   */
  DataAmount?: number
  /**
   * spark ui地址
   */
  UiUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseStandardEngineResourceGroups请求参数结构体
 */
export interface PauseStandardEngineResourceGroupsRequest {
  /**
   * 标准引擎资源组名称
   */
  EngineResourceGroupNames: Array<string>
}

/**
 * GenerateInternalTable请求参数结构体
 */
export interface GenerateInternalTableRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 字段信息
   */
  Columns: Array<TColumn>
  /**
   * 分区信息
   */
  Partitions?: Array<TPartition>
  /**
   * 属性
   */
  Properties?: Array<Property>
  /**
   * V2 upsert表 upsert键
   */
  UpsertKeys?: Array<string>
}

/**
 * UpdateStandardEngineResourceGroupConfigInfo请求参数结构体
 */
export interface UpdateStandardEngineResourceGroupConfigInfoRequest {
  /**
   * 引擎资源组名称
   */
  EngineResourceGroupName: string
  /**
   * 需要更新的配置
   */
  UpdateConfContext: Array<UpdateConfContext>
  /**
   * 是否立即重启资源组生效，0--立即生效，1--只保持不重启生效
   */
  IsEffectiveNow: number
}

/**
 * GetRayClusterHistory返回参数结构体
 */
export interface GetRayClusterHistoryResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>集群状态历史详情列表</p>
   */
  Items?: Array<RayClusterHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联的推理服务信息
 */
export interface LinkedServiceInfo {
  /**
   * <p>服务 UID</p>
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceName?: string
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
 * GetResourceConfig请求参数结构体
 */
export interface GetResourceConfigRequest {
  /**
   * 模板ID
   */
  Id: string
}

/**
 * ListExampleCategories请求参数结构体
 */
export interface ListExampleCategoriesRequest {
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
}

/**
 * DescribeTasksCostInfo返回参数结构体
 */
export interface DescribeTasksCostInfoResponse {
  /**
   * 下一页的标识
   */
  SearchAfter?: string
  /**
   * 返回的数据，字符串类型的二维数组，首行为列中文名称
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRayJob请求参数结构体
 */
export interface DeleteRayJobRequest {
  /**
   * 任务ID
   */
  Id: string
}

/**
 * ModifyClusterPriority返回参数结构体
 */
export interface ModifyClusterPriorityResponse {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子账号UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 对指定参数的更新、增加、删除
 */
export interface Param {
  /**
   * 参数key，例如：
   */
  ConfigItem?: string
  /**
   * 参数值
   */
  ConfigValue?: string
  /**
   * 下发操作，支持：ADD、DELETE、MODIFY
   */
  Operate?: string
}

/**
 * GPU 机型
 */
export interface GPUInfo {
  /**
   * 计费项
   */
  BillingItem?: string
  /**
   * 机型
   */
  Model?: string
  /**
   * cu
   */
  CU?: number
  /**
   * gpu 机型
   */
  Type?: string
  /**
   * 数量
   */
  Num?: number
  /**
   * 显存
   */
  GPUMemory?: number
  /**
   * 机型
   */
  InstanceType?: string
  /**
   * 售卖情况（1-缺货，2-低库存，3-充足）
   */
  SaleStatus?: number
}

/**
 * GetRayClusterEvent请求参数结构体
 */
export interface GetRayClusterEventRequest {
  /**
   * <p>Ray集群ID</p>
   */
  Id: string
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>开始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>结束时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
  /**
   * <p>翻页上下文，首次查询不传，后续翻页传入上一次返回的 Context 值</p>
   */
  Context?: string
}

/**
 * UpdateStandardEngineResourceGroupBaseInfo请求参数结构体
 */
export interface UpdateStandardEngineResourceGroupBaseInfoRequest {
  /**
   * 引擎资源组名称
   */
  EngineResourceGroupName: string
  /**
   * 自动启动，（任务提交自动拉起资源组）0-自动启动，1-不自动启动
   */
  AutoLaunch: number
  /**
   * 自动挂起资源组。0-自动挂起，1-不自动挂起
   */
  AutoPause: number
  /**
   * 自动挂起时间，单位分钟，取值范围在1-999（在无任务AutoPauseTime后，资源组自动挂起）
   */
  AutoPauseTime?: number
  /**
   * 任务并发数
   */
  MaxConcurrency?: number
}

/**
 * SparkSQL批任务日志操作信息。
 */
export interface SparkSessionBatchLogOperate {
  /**
   * 操作提示
   */
  Text?: string
  /**
   * 操作类型：COPY、LOG、UI、RESULT、List、TAB
   */
  Operate?: string
  /**
   * 补充信息：如：taskid、sessionid、sparkui等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Supplement?: Array<KVPair>
}

/**
 * DescribeTablePartitions请求参数结构体
 */
export interface DescribeTablePartitionsRequest {
  /**
   * 数据目录名称
   */
  Catalog: string
  /**
   * 数据库名称
   */
  Database: string
  /**
   * 数据表名称
   */
  Table: string
  /**
   * 查询偏移位置
   */
  Offset: number
  /**
   * 当次查询的数量限制
   */
  Limit: number
  /**
   * 模糊查询的分区名称
   */
  FuzzyPartition?: string
  /**
   * 排序信息
   */
  Sorts?: Array<Sort>
  /**
   * 分页查询的游标信息
   */
  Cursor?: string
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
   */
  DatasourceConnectionName?: string
  /**
   * 数据库名称，当前任务执行时候选中的默认数据库
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
   */
  QueryResultTime?: number
  /**
   * base64 编码结果集
   */
  ResultSetEncode?: string
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
   */
  BatchId?: string
  /**
   * 引擎名称
   */
  DataEngineName?: string
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 本次消耗，单位cu
   */
  Cost?: number
  /**
   * 时间开销，秒
   */
  TimeCost?: number
  /**
   * 操作者
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
 * UnbindWorkGroupsFromUser返回参数结构体
 */
export interface UnbindWorkGroupsFromUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 任务id
   */
  TaskInstanceId: string
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
 * CreatePartitionQueue返回参数结构体
 */
export interface CreatePartitionQueueResponse {
  /**
   * <p>新创建的资源队列ID</p>
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DLC 数据目录访问权限
 */
export interface DLCCatalogAccess {
  /**
   * VPCID
   */
  VpcId: string
  /**
   * 产品类型
   */
  Product: string
  /**
   * 描述信息
   */
  Description?: string
  /**
   * 创建时间
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
 * DescribeSaleResourceInfo返回参数结构体
 */
export interface DescribeSaleResourceInfoResponse {
  /**
   * 可售卖资源规格列表
   */
  SaleResourceInfoList?: Array<ResourceSaleInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表过期策略
 */
export interface TableExpirationPolicy {
  /**
   * 是否启用策略
   */
  Enabled: boolean
  /**
   * 表过期时间，单位：天
   */
  Expiration: number
}

/**
 * CreateMetaDatabase请求参数结构体
 */
export interface CreateMetaDatabaseRequest {
  /**
   * 数据源名称，默认DataLakeCatalog
   */
  DatasourceConnectionName?: string
  /**
   * 元数据库基本信息
   */
  MetaDatabaseInfo?: MetaDatabaseInfo
  /**
   * 数据治理配置项
   */
  GovernPolicy?: DataGovernPolicy
  /**
   * 智能数据治理配置
   */
  SmartPolicy?: SmartPolicy
}

/**
 * 自定义参数
 */
export interface CustomConfig {
  /**
   * 自定义参数名
   */
  ConfigKey?: string
  /**
   * 自定义参数值
   */
  ConfigValue?: string
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
   */
  ProxyUser?: string
  /**
   * Session状态，包含：not_started（未启动）、starting（已启动）、idle（等待输入）、busy(正在运行statement)、shutting_down（停止）、error（异常）、dead（已退出）、killed（被杀死）、success（正常停止）
   */
  State?: string
  /**
   * Spark任务返回的AppId
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
   */
  LastRunningTime?: string
  /**
   * 创建者
   */
  Creator?: string
  /**
   * spark ui地址
   */
  SparkUiUrl?: string
  /**
   * session类型，group：资源组session independent：独立资源session，不依赖资源组
   */
  SessionType?: string
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 资源组id
   */
  ResourceGroupId?: string
  /**
   * 资源组名字
   */
  ResourceGroupName?: string
  /**
   * Kernel id
   */
  KernelId?: string
  /**
   * spark app名称
   */
  SparkAppName?: string
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
 * UpgradeDataEngineImage返回参数结构体
 */
export interface UpgradeDataEngineImageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 服务监控指标
 */
export interface ServiceMetricsItem {
  /**
   * <p>服务 UID，服务唯一标识</p>
   */
  ServiceId?: string
  /**
   * <p>服务显示名称</p>
   */
  ServiceName?: string
  /**
   * <p>服务状态</p>
   */
  Status?: string
  /**
   * <p>推理引擎</p>
   */
  Engine?: string
  /**
   * <p>模型名称</p>
   */
  ModelName?: string
  /**
   * <p>OpenAI 兼容的模型标识符</p>
   */
  ModelIdentifier?: string
  /**
   * <p>副本信息</p>
   */
  Replicas?: ReplicaInfo
  /**
   * <p>监控指标数据</p>
   */
  Metrics?: MetricsData
}

/**
 * GetRayClusterPods请求参数结构体
 */
export interface GetRayClusterPodsRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
  /**
   * <p>起始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>截止时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>过滤条件列表</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
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
 * DescribeTaskResourceUsage请求参数结构体
 */
export interface DescribeTaskResourceUsageRequest {
  /**
   * 任务 id
   */
  TaskInstanceId: string
}

/**
 * ListExampleTags请求参数结构体
 */
export interface ListExampleTagsRequest {
  /**
   * <p>案例标签</p>
   */
  Category?: string
}

/**
 * DescribeLakeFsInfo请求参数结构体
 */
export type DescribeLakeFsInfoRequest = null

/**
 * UpdateStandardEngineResourceGroupConfigInfo返回参数结构体
 */
export interface UpdateStandardEngineResourceGroupConfigInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCHDFSBindingProduct返回参数结构体
 */
export interface CreateCHDFSBindingProductResponse {
  /**
   * 绑定信息
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
   * <p>用户Id</p>
   */
  UserId?: string
  /**
   * <p>必传字段，查询的信息类型，Group：工作组 DataAuth：数据权限 EngineAuth:引擎权限 RowFilter：行级别权限</p>
   */
  Type?: string
  /**
   * <p>查询的过滤条件。</p><p>当Type为Group时，支持Key为workgroup-name的模糊搜索；</p><p>当Type为DataAuth时，支持key：</p><p>policy-type：权限类型。</p><p>policy-source：数据来源。</p><p>data-name：库表的模糊搜索。</p><p>当Type为EngineAuth时，支持key：</p><p>policy-type：权限类型。</p><p>policy-source：数据来源。</p><p>engine-name：库表的模糊搜索。</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段。</p><p>当Type为Group时，支持create-time、group-name</p><p>当Type为DataAuth时，支持create-time</p><p>当Type为EngineAuth时，支持create-time</p>
   */
  SortBy?: string
  /**
   * <p>排序方式，desc表示正序，asc表示反序， 默认为asc</p>
   */
  Sorting?: string
  /**
   * <p>返回数量，默认20，最大值100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
  /**
   * <p>用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）</p>
   */
  AccountType?: string
  /**
   * <p>TF 资源 ID</p>
   */
  PolicyId?: string
}

/**
 * CreateModelVersion返回参数结构体
 */
export interface CreateModelVersionResponse {
  /**
   * <p>版本ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * <p>关联的模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * <p>该版本的存储 URI</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageUri?: string
  /**
   * <p>版本说明</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>创建时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>关联的推理服务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkedServices?: Array<LinkedServiceInfo>
  /**
   * <p>模型版本号</p>
   */
  Version?: string
  /**
   * <p>是否使用用户自带存储桶（true=用户自带桶，false=平台托管）</p>
   */
  UseCustomStorage?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseStandardEngineResourceGroups返回参数结构体
 */
export interface PauseStandardEngineResourceGroupsResponse {
  /**
   * 批量操作资源组时，操作失败的资源组相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateEngineResourceGroupFailMessages?: Array<OperateEngineResourceGroupFailMessage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSaleRegions返回参数结构体
 */
export interface DescribeSaleRegionsResponse {
  /**
   * 可售卖地域列表
   */
  RegionList?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLabPriority返回参数结构体
 */
export interface ModifyLabPriorityResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage?: string
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>状态详情/错误信息</p>
   */
  StatusMessage?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStandardEngineResourceGroup请求参数结构体
 */
export interface DeleteStandardEngineResourceGroupRequest {
  /**
   * 标准引擎资源组名称
   */
  EngineResourceGroupName: string
}

/**
 * 网关基础信息，包括id，名称，规格和状态
 */
export interface GatewayInfo {
  /**
   * 网关ID，
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayId?: string
  /**
   * 网关名称，全局唯一
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayName?: string
  /**
   * 网关的规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * -2已删除 -1失败 0初始化中 1挂起 2运行中 3准备删除 4删除中 5挂起中 6启动中 7隔离中 8隔离 9续费中 10变配中 11冲正中
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: number
}

/**
 * 资源用量信息，描述某种资源类型的用量范围
 */
export interface ResourceUsage {
  /**
   * <p>资源规格</p>
   */
  ResourceSpec?: ResourceSpec
  /**
   * <p>最小用量</p>
   */
  Min?: number
  /**
   * <p>最大用量</p>
   */
  Max?: number
}

/**
 * DescribeUserType返回参数结构体
 */
export interface DescribeUserTypeResponse {
  /**
   * 用户类型。ADMIN：管理员 COMMON：普通用户
   */
  UserType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListJobsBySpec返回参数结构体
 */
export interface ListJobsBySpecResponse {
  /**
   * 总记录数
   */
  Total?: number
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 数据列表
   */
  Items?: Array<RayJobSubmitEntity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  NextToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 环境变量标签
 */
export interface Env {
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>值</p>
   */
  Value?: string
}

/**
 * DeleteThirdPartyAccessUser请求参数结构体
 */
export type DeleteThirdPartyAccessUserRequest = null

/**
 * 资源配置响应
 */
export interface ResourceConfig {
  /**
   * <p>模板ID</p>
   */
  Id?: string
  /**
   * <p>模板名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>模板类型(ray,spark)</p>
   */
  Type?: string
  /**
   * <p>Head节点配置</p>
   */
  Head?: HeadSpecDTO
  /**
   * <p>Worker节点配置</p>
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
}

/**
 * 流程详情
 */
export interface FlowDetail {
  /**
   * <p>流程ID（数据库主键）</p>
   */
  FlowId?: number
  /**
   * <p>Temporal Workflow ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowId?: string
  /**
   * <p>流程编码</p>
   */
  WorkFlowCode?: string
  /**
   * <p>流程进度，0~100</p>
   */
  Progress?: number
  /**
   * <p>流程状态</p>
   */
  Status?: number
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>流程活动列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Activities?: Array<FlowActivityDetail>
}

/**
 * DescribePartitions返回参数结构体
 */
export interface DescribePartitionsResponse {
  /**
   * 资源包列表
   */
  Partitions?: Array<PartitionInfo>
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
 * GetRayClusterYaml请求参数结构体
 */
export interface GetRayClusterYamlRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
}

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
 * CreateUserRole请求参数结构体
 */
export interface CreateUserRoleRequest {
  /**
   * 角色Arn信息
   */
  Arn: string
  /**
   * 角色描述信息
   */
  Desc: string
  /**
   * 角色名称
   */
  Name?: string
  /**
   * cos授权路径列表
   */
  CosPermissionList?: Array<CosPermission>
  /**
   * cam策略json
   */
  PermissionJson?: string
  /**
   * 是否设置为常驻：1非常驻（默认）、2常驻（仅能设置一个常驻）
   */
  IsDefault?: number
}

/**
 * RestartInferenceService请求参数结构体
 */
export interface RestartInferenceServiceRequest {
  /**
   * <p>推理服务ID</p>
   */
  ServiceId: string
}

/**
 * 任务依赖包信息
 */
export interface DependencyPackage {
  /**
   * 依赖包类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageSource?: string
  /**
   * 依赖包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MavenPackage?: string
  /**
   * 依赖包仓库
注意：此字段可能返回 null，表示取不到有效值。
   */
  MavenRepository?: string
  /**
   * maven包exclusion信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MavenExclusion?: string
  /**
   * pypi包信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PypiPackage?: string
  /**
   * pypi索引地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PypiIndexUrl?: string
  /**
   * 文件包的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 文件包的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackagePath?: string
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
 * GetRayJobPodYaml请求参数结构体
 */
export interface GetRayJobPodYamlRequest {
  /**
   * 任务ID
   */
  Id?: string
  /**
   * Pod名称
   */
  PodName?: string
}

/**
 * AssociateDatasourceHouse返回参数结构体
 */
export interface AssociateDatasourceHouseResponse {
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
 * AssociateDatasourceHouse请求参数结构体
 */
export interface AssociateDatasourceHouseRequest {
  /**
   * 网络配置名称
   */
  DatasourceConnectionName: string
  /**
   * 数据源类型
   */
  DatasourceConnectionType: string
  /**
   * 数据源网络配置
   */
  DatasourceConnectionConfig: DatasourceConnectionConfig
  /**
   * 引擎名称，只允许绑定一个引擎
   */
  DataEngineNames: Array<string>
  /**
   * 网络类型，2-跨源型，4-增强型
   */
  NetworkConnectionType: number
  /**
   * 网络配置描述
   */
  NetworkConnectionDesc?: string
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
   * 资源使用时长，后付费：固定填1，预付费：最少填1，代表购买资源一个月，最长不超过120。默认1
   */
  TimeSpan?: number
  /**
   * 资源使用时长的单位，后付费：h，预付费：m。默认为h
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
   * 引擎执行任务类型，有效值：SQL/BATCH，标准引擎默认为BATCH
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
 * QueryDashboardServiceList返回参数结构体
 */
export interface QueryDashboardServiceListResponse {
  /**
   * <p>匹配过滤条件的服务总数</p>
   */
  Total?: number
  /**
   * <p>当前页码</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>服务监控指标列表</p>
   */
  Items?: Array<ServiceMetricsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 模型版本信息
 */
export interface ModelVersionInfo {
  /**
   * <p>版本ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * <p>关联的模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * <p>版本号（如 v1, v2）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * <p>该版本的存储 URI</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageUri?: string
  /**
   * <p>版本说明</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>创建时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（毫秒时间戳）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>关联的推理服务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkedServices?: Array<LinkedServiceInfo>
  /**
   * <p>是否使用用户自带存储桶（true=用户自带桶，false=平台托管）</p>
   */
  UseCustomStorage?: boolean
}

/**
 * GetRayClusterPodYaml请求参数结构体
 */
export interface GetRayClusterPodYamlRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
  /**
   * <p>Pod名称</p>
   */
  PodName?: string
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
 * DeleteMetaDatabase返回参数结构体
 */
export interface DeleteMetaDatabaseResponse {
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
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
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
 * CreateDataMaskStrategy请求参数结构体
 */
export interface CreateDataMaskStrategyRequest {
  /**
   * 数据脱敏策略详情
   */
  Strategy?: DataMaskStrategyInfo
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
 * DeleteClusterGroup返回参数结构体
 */
export interface DeleteClusterGroupResponse {
  /**
   * <p>集群组 ID（系统生成）</p>
   */
  Id?: string
  /**
   * <p>集群组名称（同一 AppId 下唯一）</p>
   */
  Name?: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>集群组配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * <p>应用 ID（多租户）</p>
   */
  AppId?: number
  /**
   * <p>创建者主账号 UIN</p>
   */
  Uin?: string
  /**
   * <p>创建者子账号 UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>是否已软删除（false=活跃, true=已删除）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deleted?: boolean
  /**
   * <p>删除时间（软删时写入，活跃记录为 null）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetModelReadme请求参数结构体
 */
export interface GetModelReadmeRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid: string
  /**
   * <p>模型版本</p>
   */
  ModelVersion?: string
}

/**
 * GetRayJobHistory返回参数结构体
 */
export interface GetRayJobHistoryResponse {
  /**
   * 总记录数
   */
  Total?: number
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 作业状态历史列表
   */
  Items?: Array<JobStatusHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 合并策略sort类型的规则定义
 */
export interface SortOrder {
  /**
   * sort的数据表列名称
   */
  Column?: string
  /**
   * 按照升序或者降序进行排序
   */
  SortDirection?: string
  /**
   * null值放在开头或者末尾
   */
  NullOrder?: string
}

/**
 * GetLabDetail返回参数结构体
 */
export interface GetLabDetailResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>状态详情/错误信息</p>
   */
  StatusMessage?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>删除时间</p>
   */
  DeleteTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据实验室事件项
 */
export interface EventItem {
  /**
   * <p>事件时间（Unix 时间戳，毫秒）</p>
   */
  EventTime?: number
  /**
   * <p>组件名称，来源于 event.involvedObject.kind</p>
   */
  Component?: string
  /**
   * <p>事件级别，来源于 event.type 的原始值（如 Normal、Warning）</p>
   */
  Level?: string
  /**
   * <p>事件内容，来源于 event.message</p>
   */
  Message?: string
  /**
   * <p>关联的 K8s 对象名称，来源于 event.involvedObject.name</p>
   */
  InvolvedObjectName?: string
  /**
   * <p>事件来源组件，来源于 event.source.component</p>
   */
  SourceComponent?: string
  /**
   * <p>事件原因，来源于 event.reason</p>
   */
  Reason?: string
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
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
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
 * Smart Optimizer高级参数配置数据结构
 */
export interface WrittenAdvancePolicy {
  /**
   * 是否启用合并
   */
  CompactEnable?: string
  /**
   * 是否启用历史数据清理
   */
  DeleteEnable?: string
  /**
   * 合并最新文件数量
   */
  MinInputFiles?: number
  /**
   * 合并文件目录文件大小
   */
  TargetFileSizeBytes?: number
  /**
   * 保留过期时间的快照数量
   */
  RetainLast?: number
  /**
   * 快照过期时间
   */
  BeforeDays?: number
  /**
   * 快照过期执行周期
   */
  ExpiredSnapshotsIntervalMin?: number
  /**
   * 移除孤立文件执行周期
   */
  RemoveOrphanIntervalMin?: number
  /**
   * 是否开启COW表合并
   */
  CowCompactEnable?: string
  /**
   * 文件合并策略
   */
  CompactStrategy?: string
  /**
   * sort合并策略的规则定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  SortOrders?: Array<SortOrder>
}

/**
 * DescribeTCLakeMetaInstance请求参数结构体
 */
export type DescribeTCLakeMetaInstanceRequest = null

/**
 * AttachUserPolicy请求参数结构体
 */
export interface AttachUserPolicyRequest {
  /**
   * <p>用户Id，和子用户uin相同，需要先使用CreateUser接口创建用户。可以使用DescribeUsers接口查看。</p>
   */
  UserId: string
  /**
   * <p>鉴权策略集合</p>
   */
  PolicySet?: Array<Policy>
  /**
   * <p>用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）</p>
   */
  AccountType?: string
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
  WorkGroupSet?: Array<WorkGroupMessage>
  /**
   * 工作组总数
   */
  TotalCount?: number
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
 * GenerateInternalTable返回参数结构体
 */
export interface GenerateInternalTableResponse {
  /**
   * 返回sql
   */
  Execution?: Execution
  /**
   * 是否tciceberg
   */
  IsTIcebergSql?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterMonitorInfos返回参数结构体
 */
export interface DescribeClusterMonitorInfosResponse {
  /**
   * 集群监控信息列表
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetRayJobPods返回参数结构体
 */
export interface GetRayJobPodsResponse {
  /**
   * 总记录数
   */
  Total?: number
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 作业pod列表
   */
  Items?: Array<JobPodEntity>
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
   */
  ProductName?: string
  /**
   * 用户名称（该字段已废弃）
   */
  SuperUser?: Array<string>
  /**
   * vpc配置信息
   */
  VpcInfo?: Array<CHDFSProductVpcInfo>
  /**
   * 是否与该桶绑定（该字段已废弃）
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
 * 运行中部署的 GPU 资源汇总
 */
export type GpuSummaryItem = null

/**
 * worker组规格
 */
export interface WorkerSpecDTO {
  /**
   * <p>worker名称</p>
   */
  Name?: string
  /**
   * <p>Pod CPU核数</p>
   */
  PodCpu?: number
  /**
   * <p>Pod 内存大小</p>
   */
  PodMem?: number
  /**
   * <p>GPU类型</p>
   */
  GpuType?: string
  /**
   * <p>GPU数量</p>
   */
  GpuNum?: number
  /**
   * <p>环境变量列表</p>
   */
  Envs?: Array<Env>
  /**
   * <p>标签列表</p>
   */
  Labels?: Array<Label>
  /**
   * <p>资源标签列表（用于追加到 headGroupSpec/workerGroupSpec 的 resources map 中，对应 Ray/K8s 的自定义资源声明），Value 必须为字符串形式的整数</p>
   */
  ResourcesLabels?: Array<Label>
  /**
   * <p>最小Pod数量</p>
   */
  MinPodNum?: number
  /**
   * <p>最大Pod数量</p>
   */
  MaxPodNum?: number
  /**
   * <p>是否开启弹性伸缩（true=开启，false/null=关闭）。开启后按 MinPodNum/MaxPodNum 弹性伸缩，关闭则按固定副本数运行</p>
   */
  EnableAutoScaling?: boolean
  /**
   * <p>资源类型,CPU,GPU</p>
   */
  ResourceType?: string
  /**
   * <p>机型，例如X40/T20</p>
   */
  InstanceType?: string
  /**
   * <p>规格数量</p>
   */
  Spec?: number
  /**
   * <p>资源ID(唯一)</p>
   */
  BillingItem?: string
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
 * DescribeUserVpcConnection请求参数结构体
 */
export interface DescribeUserVpcConnectionRequest {
  /**
   * 引擎网络ID
   */
  EngineNetworkId: string
  /**
   * 引擎ID集合
   */
  DataEngineIds?: Array<string>
  /**
   * 终端节点ID集合
   */
  UserVpcEndpointIds?: Array<string>
}

/**
 * StartRayCluster返回参数结构体
 */
export interface StartRayClusterResponse {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子账号UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetRayClusterEvent返回参数结构体
 */
export interface GetRayClusterEventResponse {
  /**
   * <p>翻页上下文，下一次分页请求时传入此值</p>
   */
  Context?: string
  /**
   * <p>是否已经返回所有符合条件的日志，true 表示已全部返回</p>
   */
  ListOver?: boolean
  /**
   * <p>事件列表</p>
   */
  Events?: Array<EventItem>
  /**
   * <p>事件开始时间</p><p>单位：毫秒</p>
   */
  StartTime?: number
  /**
   * <p>事件结束时间</p><p>单位：毫秒</p>
   */
  EndTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * <p>工作组Id</p>
   */
  WorkGroupId?: number
  /**
   * <p>查询信息类型：User：用户信息 DataAuth：数据权限 EngineAuth：引擎权限</p>
   */
  Type?: string
  /**
   * <p>查询的过滤条件。</p><p>当Type为User时，支持Key为user-name的模糊搜索；</p><p>当Type为DataAuth时，支持key：</p><p>policy-type：权限类型。</p><p>policy-source：数据来源。</p><p>data-name：库表的模糊搜索。</p><p>当Type为EngineAuth时，支持key：</p><p>policy-type：权限类型。</p><p>policy-source：数据来源。</p><p>engine-name：库表的模糊搜索。</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段。</p><p>当Type为User时，支持create-time、user-name</p><p>当Type为DataAuth时，支持create-time</p><p>当Type为EngineAuth时，支持create-time</p>
   */
  SortBy?: string
  /**
   * <p>排序方式，desc表示正序，asc表示反序， 默认为asc</p>
   */
  Sorting?: string
  /**
   * <p>返回数量，默认20，最大值100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
  /**
   * <p>要授权的策略列表</p>
   */
  PolicyId?: string
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
 * DescribeFlowList返回参数结构体
 */
export interface DescribeFlowListResponse {
  /**
   * 流程列表
   */
  FlowInfoList?: Array<FlowInfo>
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
 * DescribeResourceGroupUsageInfo返回参数结构体
 */
export interface DescribeResourceGroupUsageInfoResponse {
  /**
   * 资源上限
   */
  Total?: number
  /**
   * 已占用资源
   */
  Used?: number
  /**
   * 剩余可用资源
   */
  Available?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务Pod信息
 */
export interface JobPodEntity {
  /**
   * Pod名称
   */
  PodName?: string
  /**
   * Pod IP
   */
  PodIp?: string
  /**
   * Pod状态
   */
  Status?: string
  /**
   * Pod阶段
   */
  Phase?: string
  /**
   * 所属节点
   */
  NodeName?: string
  /**
   * 节点IP
   */
  NodeIp?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * CPU请求
   */
  CpuRequest?: string
  /**
   * CPU限制
   */
  CpuLimit?: string
  /**
   * 内存请求
   */
  MemoryRequest?: string
  /**
   * 内存限制
   */
  MemoryLimit?: string
  /**
   * GPU数量
   */
  GpuCount?: string
  /**
   * 容器镜像
   */
  Image?: string
  /**
   * Pod角色(head/worker)
   */
  Role?: string
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 启动时间
   */
  StartTime?: number
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
 * ModifyPartitionQueue请求参数结构体
 */
export interface ModifyPartitionQueueRequest {
  /**
   * 资源队列ID
   */
  Id: number
  /**
   * 分区编码
   */
  PartitionCode?: string
  /**
   * 队列名称
   */
  QueueName?: string
  /**
   * 队列描述
   */
  Description?: string
  /**
   * 资源规格列表，定义队列的资源类型及大小范围
   */
  ResourceUsages?: Array<ResourceUsage>
  /**
   * 队列类型：1-独占型，2-共享型
   */
  QueueType?: number
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
 * GetJobSpec返回参数结构体
 */
export interface GetJobSpecResponse {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺省时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置产生的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数json</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterGroup 等价，新调用方使用 GroupId）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li></ul>
   */
  DispatchStrategy?: string
  /**
   * <p>作业提交目标</p><p>枚举值：</p><ul><li>GROUP： 按计算组分派</li></ul>
   */
  SubmissionTarget?: string
  /**
   * <p>计算组名称</p>
   */
  GroupName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLabs请求参数结构体
 */
export interface ListLabsRequest {
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>开始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>结束时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * Kafka连接信息
 */
export interface KafkaInfo {
  /**
   * kafka实例Id
   */
  InstanceId: string
  /**
   * kafka数据源的网络信息
   */
  Location: DatasourceConnectionLocation
}

/**
 * FavorInfo
 */
export interface FavorInfo {
  /**
   * 优先事项
   */
  Priority?: number
  /**
   * Catalog名称
   */
  Catalog?: string
  /**
   * DataBase名称
   */
  DataBase?: string
  /**
   * Table名称
   */
  Table?: string
}

/**
 * StopInferenceService返回参数结构体
 */
export interface StopInferenceServiceResponse {
  /**
   * <p>推理服务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>关联的模型UID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>关联的模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>关联的模型版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelIdentifier?: string
  /**
   * <p>关联模型的类型（LLM / VLM / Embedding / Reranker / TTS / ASR / CV / NLP / ML）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>服务状态（Running/Stopped/Deploying/Failed）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务端点URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * <p>OpenAI 兼容统一入口 URL（通过 API-Key 路由，适用于 LLM/Embedding/Reranker）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedEndpointUrl?: string
  /**
   * <p>KServe V2 协议统一入口 URL（通过 API-Key + model name 路由，适用于 XGBoost 等传统 ML 模型）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedV2EndpointUrl?: string
  /**
   * <p>应用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>主账号UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>部署数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentCount?: number
  /**
   * <p>是否存在至少一个运行中的部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRunningDeployment?: boolean
  /**
   * <p>是否启用 API-Key 鉴权</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthEnabled?: boolean
  /**
   * <p>是否强制开启 API-Key 鉴权（生产环境为 true，不允许关闭）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthForceEnabled?: boolean
  /**
   * <p>是否跳过 TLS 证书验证（自签证书场景，前端 curl 命令需加 -k 参数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipTlsVerify?: boolean
  /**
   * <p>子账号UIN（实际操作者）</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行中部署的 CPU 资源汇总</p>
   */
  CpuResourceSummary?: CpuSummaryItem
  /**
   * <p>资源配置（JSON 字符串，取自第一个部署）</p>
   */
  ResourceConfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务实例。
 */
export interface TaskFullRespInfo {
  /**
   * <p>任务所属Database的名称。</p>
   */
  DatabaseName?: string
  /**
   * <p>任务数据量。</p>
   */
  DataAmount?: number
  /**
   * <p>任务Id。</p>
   */
  Id?: string
  /**
   * <p>计算耗时，单位： ms</p>
   */
  UsedTime?: number
  /**
   * <p>任务输出路径。</p>
   */
  OutputPath?: string
  /**
   * <p>任务创建时间。</p>
   */
  CreateTime?: string
  /**
   * <p>任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。</p>
   */
  State?: number
  /**
   * <p>任务SQL类型，DDL|DML等</p>
   */
  SQLType?: string
  /**
   * <p>任务SQL语句</p>
   */
  SQL?: string
  /**
   * <p>结果是否过期。</p>
   */
  ResultExpired?: boolean
  /**
   * <p>数据影响统计信息。</p>
   */
  RowAffectInfo?: string
  /**
   * <p>任务结果数据表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSet?: string
  /**
   * <p>失败信息, 例如：errorMessage。该字段已废弃。</p>
   */
  Error?: string
  /**
   * <p>任务执行进度num/100(%)</p>
   */
  Percentage?: number
  /**
   * <p>任务执行输出信息。</p>
   */
  OutputMessage?: string
  /**
   * <p>执行SQL的引擎类型</p>
   */
  TaskType?: string
  /**
   * <p>任务进度明细</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProgressDetail?: string
  /**
   * <p>任务结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>计算资源id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineId?: string
  /**
   * <p>执行sql的子uin</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateUin?: string
  /**
   * <p>计算资源名字</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineName?: string
  /**
   * <p>导入类型是本地导入还是cos</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputType?: string
  /**
   * <p>导入配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputConf?: string
  /**
   * <p>数据条数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataNumber?: number
  /**
   * <p>查询数据能不能下载</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanDownload?: boolean
  /**
   * <p>用户别名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * <p>spark应用作业名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobName?: string
  /**
   * <p>spark应用作业Id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobId?: string
  /**
   * <p>spark应用入口jar文件</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkJobFile?: string
  /**
   * <p>spark ui url</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UiUrl?: string
  /**
   * <p>任务耗时，单位： ms</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTime?: number
  /**
   * <p>spark app job执行task的程序入口参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CmdArgs?: string
  /**
   * <p>集群镜像大版本名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageVersion?: string
  /**
   * <p>driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSize?: string
  /**
   * <p>executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSize?: string
  /**
   * <p>指定executor数量，最小值为1，最大值小于集群规格</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorNums?: number
  /**
   * <p>指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorMaxNumbers?: number
  /**
   * <p>任务公共指标数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CommonMetrics?: CommonMetrics
  /**
   * <p>spark任务指标数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkMonitorMetrics?: SparkMonitorMetrics
  /**
   * <p>presto任务指标数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrestoMonitorMetrics?: PrestoMonitorMetrics
  /**
   * <p>结果文件格式：默认为csv</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultFormat?: string
  /**
   * <p>引擎类型，SparkSQL：SparkSQL 引擎；SparkBatch：Spark作业引擎；PrestoSQL：Presto引擎</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineTypeDetail?: string
  /**
   * <p>spark引擎资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>任务来源信息,如thirdPartyApi,dataExploration, sparkAppTask等</p>
   */
  Source?: string
  /**
   * <p>子渠道信息，一般由第三方调用定义</p>
   */
  SourceExtra?: string
  /**
   * <p>创建人uin</p>
   */
  CreatorUin?: string
  /**
   * <p>创建人名字</p>
   */
  CreatorAlias?: string
  /**
   * <p>引擎参数</p>
   */
  CustomizedConf?: string
  /**
   * <p>单位秒，累计 CPU* 秒 ( 累计 CPU * 时 = 累计 CPU* 秒/ 3600)，统计参与计算所用 Spark Executor 每个 core 的 CPU 执行时长总和<br>示例值：4329</p>
   */
  TaskTimeSum?: number
  /**
   * <p>引擎执行时间</p>
   */
  StageStartTime?: number
  /**
   * <p>数据扫描条数</p>
   */
  InputRecordsSum?: number
  /**
   * <p>健康状态</p>
   */
  AnalysisStatusType?: number
  /**
   * <p>输出总行数</p>
   */
  OutputRecordsSum?: number
  /**
   * <p>输出总大小</p>
   */
  OutputBytesSum?: number
  /**
   * <p>输出文件个数</p>
   */
  OutputFilesNum?: number
  /**
   * <p>输出小文件个数</p>
   */
  OutputSmallFilesNum?: number
  /**
   * <p>数据shuffle行数</p>
   */
  ShuffleReadRecordsSum?: number
  /**
   * <p>数据shuffle大小</p>
   */
  ShuffleReadBytesSum?: number
  /**
   * <p>spark作业id</p>
   */
  SparkAppId?: string
  /**
   * <p>任务大类，DLC2.0中任务区分为两大类，sql任务和作业任务</p>
   */
  TaskCategory?: string
  /**
   * <p>任务名称</p>
   */
  TaskName?: string
  /**
   * <p>引擎类型，用做任务详情页跳转引擎tab</p>
   */
  EngineType?: string
  /**
   * <p>引擎是否支持洞察数据采集</p>
   */
  EngineHasListenerConfig?: boolean
  /**
   * <p>spark引擎资源组id</p>
   */
  ResourceGroupId?: string
  /**
   * <p>任务计算耗时</p>
   */
  JobTimeSum?: number
  /**
   * <p>任务启动耗时</p>
   */
  LaunchTime?: string
  /**
   * <p>Gpu Driver 规格</p>
   */
  GpuDriverSize?: number
  /**
   * <p>Gpu Executor 规格</p>
   */
  GpuExecutorSize?: number
  /**
   * <p>ShuffleWrite数据量</p>
   */
  ShuffleWriteBytesSum?: number
  /**
   * <p>活跃core</p>
   */
  ActiveCore?: number
  /**
   * <p>排队时间</p><p>单位：毫秒</p>
   */
  QueueTime?: number
  /**
   * <p>资源组类型</p>
   */
  ResourceGroupType?: string
}

/**
 * 混合表中，change表的数据保存时间，单位为天
 */
export interface SmartOptimizerChangeTablePolicy {
  /**
   * change表的数据保存时间，单位为天
   */
  DataRetentionTime?: number
}

/**
 * DeleteDataEngine请求参数结构体
 */
export interface DeleteDataEngineRequest {
  /**
   * <p>删除虚拟集群的名称数组</p>
   */
  DataEngineNames: Array<string>
}

/**
 * StopLab返回参数结构体
 */
export interface StopLabResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage?: string
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Token 认证密钥（开启 token 认证时由系统生成）</p>
   */
  Token?: string
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 引擎资源弹性伸缩策略
 */
export interface ScheduleElasticityConf {
  /**
   * 是否开启弹性伸缩：true/false
   */
  ScheduledElasticityEnabled?: boolean
  /**
   * 调度类型：ONCE（一次性调度），DAILY（每日调度），WEEKLY（每周调度），MONTHLY（每月调度）
   */
  ScheduleType?: string
  /**
   * 调度日期：WEEKLY传：1~7； MONTHLY传:1~31；其它类型不传
   */
  ScheduleDays?: Array<number | bigint>
  /**
   * 调度时区
   */
  TimeZone?: string
  /**
   * 弹性伸缩计划
   */
  ElasticPlans?: Array<ElasticPlan>
}

/**
 * DescribeMCPSubUin返回参数结构体
 */
export interface DescribeMCPSubUinResponse {
  /**
   * <p>子 Uin</p>
   */
  Subuin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterGroup请求参数结构体
 */
export interface DeleteClusterGroupRequest {
  /**
   * <p>集群组 ID</p>
   */
  Id: string
  /**
   * <p>是否强制删除（Detach 模式）；false=Block（默认），true=Detach</p>
   */
  Force?: boolean
}

/**
 * CreateSparkApp返回参数结构体
 */
export interface CreateSparkAppResponse {
  /**
   * App唯一标识
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
   */
  BucketId?: string
  /**
   * vpcId
   */
  VpcId?: string
  /**
   * 子网地址
   */
  VpcCidrBlock?: string
  /**
   * 权限组Id
   */
  AccessGroupId?: string
  /**
   * 权限规则Id
   */
  AccessRuleId?: number
}

/**
 * GetRayJobEvent返回参数结构体
 */
export interface GetRayJobEventResponse {
  /**
   * <p>翻页上下文，下一次分页请求时传入此值</p>
   */
  Context?: string
  /**
   * <p>是否已经返回所有符合条件的日志，true 表示已全部返回</p>
   */
  ListOver?: boolean
  /**
   * <p>事件列表</p>
   */
  Events?: Array<RayJobEventItem>
  /**
   * <p>事件开始时间</p><p>单位：毫秒</p>
   */
  StartTime?: number
  /**
   * <p>事件结束时间</p><p>单位：毫秒</p>
   */
  EndTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UpdateStandardEngineResourceGroupResourceInfo返回参数结构体
 */
export interface UpdateStandardEngineResourceGroupResourceInfoResponse {
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
 * 任务 core 用量信息
 */
export interface CoreInfo {
  /**
   * 时间戳(毫秒)数组
   */
  Timestamp?: Array<number | bigint>
  /**
   * core 用量
   */
  CoreUsage?: Array<number | bigint>
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
 * UpdateLab返回参数结构体
 */
export interface UpdateLabResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage?: string
  /**
   * <p>Lab sidecar 镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  LabImagePullPolicy?: string
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
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
 * 洞察分析结果返回体
 */
export interface AnalysisTaskResults {
  /**
   * <p>任务Id</p>
   */
  Id?: string
  /**
   * <p>任务创建时间，毫秒时间戳</p>
   */
  InstanceStartTime?: number
  /**
   * <p>任务结束时间，毫秒时间戳</p>
   */
  InstanceCompleteTime?: number
  /**
   * <p>任务状态：0 初始化， 1 执行中， 2 执行成功，3 数据写入中，4 排队中。-1 执行失败，-3 已取消。</p>
   */
  State?: number
  /**
   * <p>任务SQL语句</p>
   */
  SQL?: string
  /**
   * <p>计算资源名字</p>
   */
  DataEngineName?: string
  /**
   * <p>单位毫秒，引擎内执行耗时, 反映真正用于计算所需的耗时，即从  Spark 任务第一个 Task  开始执行到任务结束之间的耗时。<br>具体的：会统计任务的每个 Spark Stage 第一个 Task 到最后一个 Task 完成时长之和，不包含任务开始的排队耗时（即剔除从任务提交到 Spark Task 开始执行之间的调度等其他耗时），也不包含任务执行过程中多个 Spark Stage 之间因 executor 资源不足而等待执行 Task 所消耗的时间。</p>
   */
  JobTimeSum?: number
  /**
   * <p>单位秒，累计 CPU* 秒 ( 累计 CPU * 时 = 累计 CPU* 秒/ 3600)，统计参与计算所用 Spark Executor 每个 core 的 CPU 执行时长总和</p>
   */
  TaskTimeSum?: number
  /**
   * <p>数据扫描总行数</p>
   */
  InputRecordsSum?: number
  /**
   * <p>数据扫描总 bytes</p>
   */
  InputBytesSum?: number
  /**
   * <p>输出总行数</p>
   */
  OutputRecordsSum?: number
  /**
   * <p>输出总 bytes</p>
   */
  OutputBytesSum?: number
  /**
   * <p>shuffle read 总 bytes</p>
   */
  ShuffleReadBytesSum?: number
  /**
   * <p>shuffle read 总行数</p>
   */
  ShuffleReadRecordsSum?: number
  /**
   * <p>洞察结果类型分类，一个 json 数组，有如下几种类型：SPARK-StageScheduleDelay（资源抢占）, SPARK-ShuffleFailure（Shuffle异常）, SPARK-SlowTask（慢task）, SPARK-DataSkew（数据倾斜）, SPARK-InsufficientResource（磁盘或内存不足）</p>
   */
  AnalysisStatus?: string
  /**
   * <p>任务输出文件总数</p>
   */
  OutputFilesNum?: number
  /**
   * <p>任务输出小文件总数</p>
   */
  OutputSmallFilesNum?: number
  /**
   * <p>shuffle write 总 Bytes 大小</p><p>单位：Bytes</p><p>默认值：无</p>
   */
  ShuffleWriteBytesSum?: number
}

/**
 * 校验消息项
 */
export interface MessageItem {
  /**
   * <p>计费项标识</p>
   */
  BillingItem?: string
  /**
   * <p>校验失败描述信息</p>
   */
  Message?: string
}

/**
 * 元数据库基本信息
 */
export interface MetaDatabaseInfo {
  /**
   * 数据库名称。
   */
  DatabaseName: string
  /**
   * 数据库描述信息，长度 0~2048。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
}

/**
 * GetRayJobEventLog请求参数结构体
 */
export interface GetRayJobEventLogRequest {
  /**
   * ray-jobID
   */
  Id: string
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 排序字段列表（列表字段）
   */
  SortFields?: Array<SortField>
}

/**
 * GetRayJobEvent请求参数结构体
 */
export interface GetRayJobEventRequest {
  /**
   * <p>ray-job ID</p>
   */
  Id: string
  /**
   * <p>开始时间（毫秒时间戳）</p>
   */
  StartTime?: number
  /**
   * <p>结束时间（毫秒时间戳）</p>
   */
  EndTime?: number
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
  /**
   * <p>翻页上下文，首次查询不传，后续翻页传入上一次返回的 Context 值</p>
   */
  Context?: string
  /**
   * <p>分页大小</p>
   */
  PageSize?: number
  /**
   * <p>事件类型过滤，仅允许 ASCII 字母（如 Normal、Warning）</p>
   */
  EventType?: string
}

/**
 * DescribePartitionQueues返回参数结构体
 */
export interface DescribePartitionQueuesResponse {
  /**
   * 队列列表
   */
  QueueList?: Array<QueueInfo>
  /**
   * 默认队列信息
   */
  DefaultQueue?: QueueInfo
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
  /**
   * 引擎资源弹性伸缩策略
   */
  ScheduleElasticityConf?: ScheduleElasticityConf
  /**
   * GPU 信息
   */
  GPUInfo?: GPUInfo
  /**
   * GPU 使用量
   */
  EngineResourceUsedGPU?: number
  /**
   * GPU 总规格
   */
  GPUTotalSize?: number
  /**
   * GPU 机型
   */
  InstanceModel?: string
  /**
   * 节点数量
   */
  NodeNum?: number
  /**
   * 引擎规格，包含负载弹性或分时弹性
   */
  SizeWithElastic?: number
  /**
   * 最大弹性值，包含负载弹性或分时弹性
   */
  MaxElasticSize?: number
}

/**
 * DescribeSessionImageVersion返回参数结构体
 */
export interface DescribeSessionImageVersionResponse {
  /**
   * 扩展镜像列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineSessionImages?: Array<EngineSessionImage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * SetOptimizerPolicy返回参数结构体
 */
export interface SetOptimizerPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLabEvent返回参数结构体
 */
export interface GetLabEventResponse {
  /**
   * <p>是否已经返回所有符合条件的日志，true 表示已全部返回</p>
   */
  ListOver?: boolean
  /**
   * <p>事件列表</p>
   */
  Events?: Array<EventItem>
  /**
   * <p>事件开始时间</p><p>单位：毫秒</p>
   */
  StartTime?: number
  /**
   * <p>事件结束时间</p><p>单位：毫秒</p>
   */
  EndTime?: number
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
 * CreateJobSpec请求参数结构体
 */
export interface CreateJobSpecRequest {
  /**
   * <p>入口命令不能为空</p>
   */
  Entrypoint: string
  /**
   * <p>配置名称（可选，不填则自动生成）</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>资源配置模板ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺省时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * <p>高级参数json</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterId 互斥；与老字段 ClusterGroup 等价，新调用方优先使用 GroupId）</p>
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥，同时非空将返回 InvalidParameter.ClusterAndGroupConflict）</p>
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li></ul>
   */
  DispatchStrategy?: string
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
 * QueryDashboardServiceList请求参数结构体
 */
export interface QueryDashboardServiceListRequest {
  /**
   * <p>页码（默认1）</p>
   */
  Page?: number
  /**
   * <p>每页数量（默认20）</p>
   */
  PageSize?: number
  /**
   * <p>过滤条件。支持的过滤字段：Keyword（服务名称/模型名称模糊搜索）、Status（服务状态精确匹配，如 Running）、Engine（推理引擎匹配，如 vllm，用于 LLM 推理专项 tab，只要服务有至少一个 deployment 的 engine 匹配即返回）、ResourcePartitionId（资源分区精确匹配）</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表（全局排序，支持按指标字段排序）</p>
   */
  SortFields?: Array<SortField>
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
 * GetLabHistory返回参数结构体
 */
export interface GetLabHistoryResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>集群状态历史详情列表</p>
   */
  Items?: Array<RayClusterHistory>
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
   * <p>虚拟集群名称</p>
   */
  DataEngineName: string
  /**
   * <p>返回数量，默认为10，最大为100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
  /**
   * <p>资源组id</p>
   */
  SessionId?: string
  /**
   * <p>查询开始时间，用于筛选资源组启停事件的时间范围，不传则不限制开始时间</p><p>参数格式：YYYY-mm-dd HH:MM:SS</p>
   */
  StartTime?: string
  /**
   * <p>查询结束时间，用于筛选资源组启停事件的时间范围，不传则不限制结束时间。需大于等于 StartTime</p><p>参数格式：YYYY-mm-dd HH:MM:SS</p>
   */
  EndTime?: string
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
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRayClusters返回参数结构体
 */
export interface ListRayClustersResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>Ray cluster列表</p>
   */
  Items?: Array<RayClusterEntity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标准引擎资源组，配置相关信息
 */
export interface StandardEngineResourceGroupConfigInfo {
  /**
   * 引擎资源组 ID
   */
  ResourceGroupId?: string
  /**
   * 引擎ID
   */
  DataEngineId?: string
  /**
   * 资源组静态参数，需要重启资源组生效
   */
  StaticConfigPairs?: Array<EngineResourceGroupConfigPair>
  /**
   * 资源组动态参数，下一个任务生效。
   */
  DynamicConfigPairs?: Array<EngineResourceGroupConfigPair>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
}

/**
 * CopyJobSpec请求参数结构体
 */
export interface CopyJobSpecRequest {
  /**
   * <p>原配置ID</p>
   */
  SpecId: string
  /**
   * <p>新配置名称（可选，留空则自动命名为 &#39;原名-copy&#39;）</p>
   */
  NewName?: string
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
  /**
   * TccHive数据目录连接信息
   */
  TccHive?: TccHive
  /**
   * MongoDB 数据源
   */
  MongoDB?: DataSourceInfo
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
   */
  Name: string
  /**
   * 字段类型
   */
  Type: string
  /**
   * 字段描述
   */
  Comment?: string
  /**
   * 字段默认值
   */
  Default?: string
  /**
   * 字段是否是非空
   */
  NotNull?: boolean
  /**
   * 表示整个 numeric 的长度,取值1-38
   */
  Precision?: number
  /**
   * 表示小数部分的长度
Scale小于Precision
   */
  Scale?: number
  /**
   * 字段位置，小的在前
   */
  Position?: number
  /**
   * 是否为分区字段
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
 * DeleteNativeSparkSession请求参数结构体
 */
export interface DeleteNativeSparkSessionRequest {
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 资源组id
   */
  ResourceGroupId?: string
  /**
   * spark session名称
   */
  EngineSessionName?: string
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
 * 资源分区详情
 */
export interface PartitionDetail {
  /**
   * <p>分区编码</p>
   */
  PartitionCode?: string
  /**
   * <p>分区名称</p>
   */
  PartitionName?: string
  /**
   * <p>分区描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>地域</p>
   */
  Region?: number
  /**
   * <p>产品信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductInfo?: string
  /**
   * <p>资源池编码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePoolCode?: string
  /**
   * <p>资源配额列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceQuota?: Array<ResourceQuota>
  /**
   * <p>付费模式</p>
   */
  PayMode?: number
  /**
   * <p>续费标志</p>
   */
  RenewFlag?: number
  /**
   * <p>调度器类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scheduler?: string
  /**
   * <p>状态</p>
   */
  Status?: number
}

/**
 * ListModelVersions请求参数结构体
 */
export interface ListModelVersionsRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid: string
  /**
   * <p>创建时间起始过滤-毫秒时间戳</p><p>单位：ms</p>
   */
  StartTime?: number
  /**
   * <p>创建时间截止过滤-毫秒时间戳</p><p>单位：ms</p>
   */
  EndTime?: number
  /**
   * <p>额外过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
  /**
   * <p>页码（默认1）</p><p>取值范围：[1, 2147483647]</p>
   */
  Page?: number
  /**
   * <p>每页数量（默认200）</p><p>取值范围：[1, 2147483647]</p>
   */
  PageSize?: number
}

/**
 * CreateUserVpcConnection返回参数结构体
 */
export interface CreateUserVpcConnectionResponse {
  /**
   * 终端节点IP
   */
  UserVpcEndpointId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMCPTaskResult返回参数结构体
 */
export interface DescribeMCPTaskResultResponse {
  /**
   * <p>任务结果信息</p>
   */
  TaskResult?: MCPTaskResultInfo
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
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
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
 * DescribeClusterGroupClusters返回参数结构体
 */
export interface DescribeClusterGroupClustersResponse {
  /**
   * <p>活跃 cluster 总数</p>
   */
  Count?: number
  /**
   * <p>前 N 个样例</p>
   */
  SampleClusters?: Array<RayClusterEntity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 副本信息
 */
export interface ReplicaInfo {
  /**
   * <p>期望副本数</p>
   */
  Desired?: number
  /**
   * <p>可用（就绪）副本数</p>
   */
  Available?: number
}

/**
 * DescribePartitionQueues请求参数结构体
 */
export interface DescribePartitionQueuesRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
  /**
   * 排序字段列表
   */
  SortFields?: Array<SortField>
  /**
   * 筛选条件列表
   */
  Filters?: Array<Filter>
  /**
   * 页码
   */
  Page?: number
  /**
   * 每页返回数量
   */
  PageSize?: number
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
 * GetResourceConfig返回参数结构体
 */
export interface GetResourceConfigResponse {
  /**
   * 模板ID
   */
  Id?: string
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 模板类型
   */
  Type?: string
  /**
   * Head节点配置
   */
  Head?: HeadSpecDTO
  /**
   * Worker节点配置
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 应用ID
   */
  AppId?: number
  /**
   * 创建者UIN
   */
  Uin?: string
  /**
   * 子用户UIN
   */
  SubAccountUin?: string
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
 * GetRayJob返回参数结构体
 */
export interface GetRayJobResponse {
  /**
   * <p>任务ID</p>
   */
  Id?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>任务名称</p>
   */
  JobName?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户主账号UIN</p>
   */
  Uin?: string
  /**
   * <p>创建账号</p>
   */
  SubAccountUin?: string
  /**
   * <p>历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>运行时间(ms)</p>
   */
  RunningTime?: number
  /**
   * <p>完成时间</p>
   */
  FinishTime?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>失败原因/错误信息</p>
   */
  ErrorMessage?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>来源配置ID</p>
   */
  SpecId?: string
  /**
   * <p>来源配置名称</p>
   */
  SpecName?: string
  /**
   * <p>高级参数，JSON 字符串（透传到 Neutrino）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>业务来源标识（调用上下文，长度上限 64，禁止控制字符）</p>
   */
  JobSource?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMonitorOverview返回参数结构体
 */
export interface QueryMonitorOverviewResponse {
  /**
   * <p>概览数据项列表，每项对应一个请求的 ChartType</p>
   */
  Items?: Array<OverviewItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyClusterPriority请求参数结构体
 */
export interface ModifyClusterPriorityRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority: number
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
 * DescribeNativeSparkSessions返回参数结构体
 */
export interface DescribeNativeSparkSessionsResponse {
  /**
   * spark session列表
   */
  SparkSessionsList?: Array<SparkSessionInfo>
  /**
   * 资源组总规格
   */
  TotalSpec?: number
  /**
   * 资源组当前可用规格
   */
  TotalAvailable?: number
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
 * ModifyPartitionDescription请求参数结构体
 */
export interface ModifyPartitionDescriptionRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
  /**
   * 分区描述
   */
  Description: string
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
 * 集群pod详情
 */
export interface ClusterPod {
  /**
   * <p>Pod名称</p>
   */
  PodName?: string
  /**
   * <p>Pod IP</p>
   */
  PodIp?: string
  /**
   * <p>Pod状态</p>
   */
  Status?: string
  /**
   * <p>Pod阶段</p>
   */
  Phase?: string
  /**
   * <p>所属节点</p>
   */
  NodeName?: string
  /**
   * <p>节点IP</p>
   */
  NodeIp?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>CPU请求</p>
   */
  CpuRequest?: string
  /**
   * <p>CPU限制</p>
   */
  CpuLimit?: string
  /**
   * <p>内存请求</p>
   */
  MemoryRequest?: string
  /**
   * <p>内存限制</p>
   */
  MemoryLimit?: string
  /**
   * <p>GPU数量</p>
   */
  GpuCount?: string
  /**
   * <p>容器镜像</p>
   */
  Image?: string
  /**
   * <p>Pod角色(head/worker)</p>
   */
  Role?: string
  /**
   * <p>创建时间（毫秒时间戳）</p>
   */
  CreateTime?: number
  /**
   * <p>启动时间（毫秒时间戳）</p>
   */
  StartTime?: number
}

/**
 * GetRayClusterHistory请求参数结构体
 */
export interface GetRayClusterHistoryRequest {
  /**
   * <p>集群/数据实验室ID</p>
   */
  Id: string
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
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
 * CPU resource summary item aggregated from all running deployments.
 */
export interface CpuSummaryItem {
  /**
   * <p>CPU 总核数（headCpu + cpu × replicas 的总和）</p>
   */
  TotalCpuCores?: number
  /**
   * <p>内存总量（headMem + mem × replicas 的总和，单位 GB）</p>
   */
  TotalMemoryGB?: number
  /**
   * <p>运行中的副本总数</p>
   */
  Replicas?: number
}

/**
 * DescribeUserRegisterTime返回参数结构体
 */
export interface DescribeUserRegisterTimeResponse {
  /**
   * 用户注册时间
   */
  RegisterTime?: number
  /**
   * 是否时老用户
   */
  IsOldUser?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 集群状态历史详情
 */
export interface RayClusterHistory {
  /**
   * <p>历史记录ID</p>
   */
  Id?: number
  /**
   * <p>集群/数据实验室ID</p>
   */
  ClusterId?: string
  /**
   * <p>集群/数据实验室名称</p>
   */
  ClusterName?: string
  /**
   * <p>源状态</p>
   */
  FromState?: string
  /**
   * <p>目标状态</p>
   */
  ToState?: string
  /**
   * <p>触发事件</p>
   */
  Event?: string
  /**
   * <p>消息</p>
   */
  Message?: string
  /**
   * <p>转换时间（毫秒时间戳）</p>
   */
  TransitionTime?: number
}

/**
 * 任务监控信息
 */
export interface TaskMonitorInfo {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 引擎名称
   */
  HouseName?: string
  /**
   * sql语句
   */
  QuerySQL?: string
  /**
   * 任务时间
   */
  CreateTime?: string
  /**
   * 执行时间
   */
  UsedTime?: string
  /**
   * 数据扫描量
   */
  DataAmount?: string
  /**
   * 指标信息
   */
  QueryStats?: string
}

/**
 * DetachUserPolicy请求参数结构体
 */
export interface DetachUserPolicyRequest {
  /**
   * <p>用户Id，和CAM侧Uin匹配</p>
   */
  UserId: string
  /**
   * <p>解绑的权限集合</p>
   */
  PolicySet?: Array<Policy>
  /**
   * <p>用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）</p>
   */
  AccountType?: string
  /**
   * <p>要授权的策略列表</p>
   */
  PolicyIds?: Array<string>
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
  /**
   * 标准引擎依赖包
   */
  DependencyPackages?: Array<DependencyPackage>
}

/**
 * 节点规格信息
 */
export interface SpecInfo {
  /**
   * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 当前规格的cu数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cu?: number
  /**
   * 当前规格的cpu数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * 当前规格的内存数，单位G
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
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
 * UpdateLab请求参数结构体
 */
export interface UpdateLabRequest {
  /**
   * <p>数据实验室名称</p>
   */
  Name: string
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage: string
  /**
   * <p>数据实验室描述</p>
   */
  Description?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>队列名称</p>
   */
  Queue?: string
  /**
   * <p>案例ID，当 startMode=EXAMPLE 时必填</p>
   */
  ExampleId?: string
  /**
   * <p>案例代码包地址，当 startMode=EXAMPLE 时填写</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>Lab sidecar 镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  LabImagePullPolicy?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
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
 * InitializeTCLake请求参数结构体
 */
export type InitializeTCLakeRequest = null

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
 * UpdateDataMaskStrategy返回参数结构体
 */
export interface UpdateDataMaskStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListInferenceServices返回参数结构体
 */
export interface ListInferenceServicesResponse {
  /**
   * <p>推理服务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InferenceServiceInfo>
  /**
   * <p>总记录数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * <p>当前页码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: number
  /**
   * <p>每页数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * <p>总页数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPages?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLab返回参数结构体
 */
export interface DeleteLabResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetLabPods返回参数结构体
 */
export interface GetLabPodsResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>集群的Pod列表</p>
   */
  Items?: Array<ClusterPod>
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
  WarehousePath?: string
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
   */
  ScriptId?: string
  /**
   * 脚本名称，长度0-25。
   */
  ScriptName?: string
  /**
   * 脚本描述，长度0-50。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptDesc?: string
  /**
   * 默认关联数据库。
   */
  DatabaseName?: string
  /**
   * SQL描述，长度0-10000。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQLStatement?: string
  /**
   * 更新时间戳， 单位：ms。
   */
  UpdateTime?: number
}

/**
 * DescribeUDFPolicy返回参数结构体
 */
export interface DescribeUDFPolicyResponse {
  /**
   * UDF权限信息
   */
  UDFPolicyInfos?: Array<UDFPolicyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CheckResourceName请求参数结构体
 */
export interface CheckResourceNameRequest {
  /**
   * 资源名称
   */
  ResourceName: string
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
 * AttachWorkGroupPolicy请求参数结构体
 */
export interface AttachWorkGroupPolicyRequest {
  /**
   * <p>工作组Id</p>
   */
  WorkGroupId: number
  /**
   * <p>要绑定的策略集合</p>
   */
  PolicySet?: Array<Policy>
}

/**
 * notebook session statement输出信息。
 */
export interface StatementOutput {
  /**
   * 执行总数
   */
  ExecutionCount?: number
  /**
   * Statement数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<KVPair>
  /**
   * Statement状态:ok,error
   */
  Status?: string
  /**
   * 错误名称
   */
  ErrorName?: string
  /**
   * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorValue?: string
  /**
   * 错误堆栈信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: Array<string>
  /**
   * SQL类型任务结果返回
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
 * DescribeClusterGroup请求参数结构体
 */
export interface DescribeClusterGroupRequest {
  /**
   * <p>集群组 ID</p>
   */
  Id: string
  /**
   * <p>是否包含已软删除的记录（默认 false，仅返回活跃记录；true 时允许返回 deleted=1 的记录，用于悬挂 cluster 回显场景）</p>
   */
  IncludeDeleted?: boolean
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
  /**
   * DataEngine-dm8bjs29
   */
  HouseIds?: Array<string>
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
 * DeleteUserVpcConnection请求参数结构体
 */
export interface DeleteUserVpcConnectionRequest {
  /**
   * 引擎网络ID
   */
  EngineNetworkId: string
  /**
   * 终端节点ID
   */
  UserVpcEndpointId: string
}

/**
 * 案例实体
 */
export interface ExampleEntity {
  /**
   * <p>ID</p>
   */
  Id?: number
  /**
   * <p>案例ID</p>
   */
  ExampleId?: string
  /**
   * <p>标题</p>
   */
  Title?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>README</p>
   */
  Readme?: string
  /**
   * <p>案例归档URL</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>图片URL</p>
   */
  Image?: string
  /**
   * <p>实验室镜像地址</p>
   */
  LabImage?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfig?: string
  /**
   * <p>分类</p>
   */
  Category?: string
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>案例热度</p>
   */
  Popularity?: number
  /**
   * <p>难度</p>
   */
  Difficulty?: string
  /**
   * <p>预估时间（分钟）</p>
   */
  EstimatedTime?: number
  /**
   * <p>排序</p>
   */
  SortOrder?: number
  /**
   * <p>是否启用</p>
   */
  IsEnabled?: boolean
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>是否删除</p>
   */
  Deleted?: number
}

/**
 * CreateClusterGroup返回参数结构体
 */
export interface CreateClusterGroupResponse {
  /**
   * <p>集群组 ID</p>
   */
  Id?: string
  /**
   * <p>集群组名称</p>
   */
  Name?: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>应用 ID（多租户）</p>
   */
  AppId?: number
  /**
   * <p>创建者主账号 UIN</p>
   */
  Uin?: string
  /**
   * <p>创建者子账号 UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>修改时间</p>
   */
  UpdateTime?: number
  /**
   * <p>集群组配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
  /**
   * <p>是否已软删除</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deleted?: boolean
  /**
   * <p>删除时间（软删时写入，活跃记录为 null）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListClusterGroups返回参数结构体
 */
export interface ListClusterGroupsResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>集群组列表</p>
   */
  Items?: Array<ClusterGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskMonitorInfos请求参数结构体
 */
export interface DescribeTaskMonitorInfosRequest {
  /**
   * 任务ID列表，上限50个
   */
  TaskIdList?: Array<string>
  /**
   * 引擎名称
   */
  HouseName?: string
  /**
   * 任务创建时间的起始时间
   */
  CreateTimeStart?: string
  /**
   * 任务创建时间的结束时间
   */
  CreateTimeEnd?: string
  /**
   * 每一页条数
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
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
   * 存储用量
   */
  SpaceUsedSize?: number
  /**
   * 创建时候的时间戳
   */
  CreateTimeStamp?: number
  /**
   * 是否是用户默认桶，0：默认桶，1：非默认桶
   */
  DefaultBucket?: number
  /**
   * 托管存储short name
   */
  ShortName?: string
  /**
   * 桶描述信息
   */
  Description?: string
  /**
   * 托管桶状态，当前取值为：creating、bind、readOnly、isolate
   */
  Status?: string
  /**
   * 托管存储桶标签列表
   */
  TagList?: Array<TagInfo>
}

/**
 * UpdateRayCluster请求参数结构体
 */
export interface UpdateRayClusterRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
  /**
   * <p>集群名称（可选，不填写则默认使用集群ID）</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>存储卷和挂载卷配置</p>
   */
  Catalog?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
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
   * objectListMarker={marker}&lastReadFile={filename}&lastReadOffsetlastReadFile为上一次读取的文件，lastReadOffset为上一次读取到的位置
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
  /**
   * 任务来源信息
   */
  SourceInfo?: Array<KVPair>
}

/**
 * spark session详细信息
 */
export interface SparkSessionInfo {
  /**
   * spark session id
   */
  SparkSessionId?: string
  /**
   * spark session名称
   */
  SparkSessionName?: string
  /**
   * 资源组id
   */
  ResourceGroupId?: string
  /**
   * engine session id
   */
  EngineSessionId?: string
  /**
   * engine session   
name
   */
  EngineSessionName?: string
  /**
   * 自动销毁时间
   */
  IdleTimeoutMin?: number
  /**
   * driver规格
   */
  DriverSpec?: string
  /**
   * executor规格
   */
  ExecutorSpec?: string
  /**
   * executor最小数量
   */
  ExecutorNumMin?: number
  /**
   * executor最大数量
   */
  ExecutorNumMax?: number
  /**
   * 总规格最小
   */
  TotalSpecMin?: number
  /**
   * 总规格最大
   */
  TotalSpecMax?: number
  /**
   * 状态，STARTING、RUNNING、TERMINATED
   */
  State?: string
}

/**
 * 案例分类详情
 */
export interface ExampleCategories {
  /**
   * <p>分类名称</p>
   */
  Categories?: string
}

/**
 * DescribeMCPSubUin请求参数结构体
 */
export type DescribeMCPSubUinRequest = null

/**
 * DescribeClusterMonitorInfos请求参数结构体
 */
export interface DescribeClusterMonitorInfosRequest {
  /**
   * 引擎Id
   */
  DataEngineId: string
  /**
   * 任务创建时间的起始时间
   */
  TimeStart?: string
  /**
   * 任务创建时间的结束时间
   */
  TimeEnd?: string
  /**
   * 指标名称
   */
  MetricName?: string
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
 * DescribeStandardEngineResourceGroups请求参数结构体
 */
export interface DescribeStandardEngineResourceGroupsRequest {
  /**
   * 排序字段
   */
  SortBy?: string
  /**
   * 升序，降序
   */
  Sorting?: string
  /**
   * 过滤条件可选，app-id--用户appID，engine-resource-group-id--引擎资源组ID，data-engine-name--引擎名称，engine-resource-group-name---引擎资源组名称（模糊查询），engine-resource-group-state---引擎资源组状态engine-resource-group-name-unique --引擎资源组名称（完全匹配）
   */
  Filters?: Array<Filter>
  /**
   * 数据条数，默认10
   */
  Limit?: number
  /**
   * 偏移量，默认0
   */
  Offset?: number
}

/**
 * ListInferenceModels请求参数结构体
 */
export interface ListInferenceModelsRequest {
  /**
   * <p>页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量（最大 200）</p>
   */
  PageSize?: number
  /**
   * <p>开始时间</p>
   */
  StartTime?: number
  /**
   * <p>结束时间</p>
   */
  EndTime?: number
  /**
   * <p>过滤器</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段</p>
   */
  SortFields?: Array<SortField>
  /**
   * <p>模型参数最小值</p>
   */
  ParameterSizeMin?: number
  /**
   * <p>模型参数最大值</p>
   */
  ParameterSizeMax?: number
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
 * GetLabDetail请求参数结构体
 */
export interface GetLabDetailRequest {
  /**
   * <p>工作区ID</p>
   */
  Id: string
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
 * AddUsersToWorkGroup返回参数结构体
 */
export interface AddUsersToWorkGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户标准引擎资源组信息
 */
export interface StandardEngineResourceGroupInfo {
  /**
   * 标准引擎资源组ID
   */
  EngineResourceGroupId?: string
  /**
   * 标准引擎资源组名称，支持1-50个英文、汉字、数字、连接线-或下划线_
   */
  EngineResourceGroupName?: string
  /**
   * 创建者
   */
  Creator?: string
  /**
   * 资源组 状态，-1--删除、0--启动中、2--运行、3--暂停、4--暂停中、7--切换引擎中、8--配置修改中。9--资源组重启中，10--因为变配导致资源组启动、11--因为隔离导致资源组挂起、12- 资源配置下发中、 13-接入点隔离导致资源组挂起中
   */
  ResourceGroupState?: number
  /**
   * 自动启动，（任务提交自动拉起资源组）0-自动启动，1-不自动启动
   */
  AutoLaunch?: number
  /**
   * 自动挂起资源组。0-自动挂起，1-不自动挂起
   */
  AutoPause?: number
  /**
   * 自动挂起时间，单位分钟，取值范围在1-999（在无任务AutoPauseTime后，资源组自动挂起）
   */
  AutoPauseTime?: number
  /**
   * driver的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  DriverCuSpec?: string
  /**
   * executor的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  ExecutorCuSpec?: string
  /**
   * 任务并发数
   */
  MaxConcurrency?: number
  /**
   * executor最小数量，
   */
  MinExecutorNums?: number
  /**
   * executor最大数量，
   */
  MaxExecutorNums?: number
  /**
   * 创建时间戳
   */
  CreateTime?: number
  /**
   * 更新时间戳
   */
  UpdateTime?: number
  /**
   * 是否待重启，作为有资源参数，静态参数修改未重启生效的标识；0-- 不需要重启、1--因为资源参数待重启、2--因静态参数重启、3--因资源和静态参数而待重启、4--因网络配置而待重启、5--因网络配置和资源配置而待重启、6--因网络配置和静态参数而待重启、7--因网络配置，资源参数和静态参数而待重启、
   */
  NeedRestart?: number
  /**
   * 绑定的引擎名称
   */
  DataEngineName?: string
  /**
   * 绑定的引擎ID
   */
  DataEngineId?: string
  /**
   * 绑定的引擎状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngineState?: number
  /**
   * 接入点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessPointId?: string
  /**
   * 接入点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessPointName?: string
  /**
   * 接入点状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessPointState?: number
  /**
   * 资源组类型，console/ default
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupType?: string
  /**
   * 引擎网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkId?: string
  /**
   * 网络配置名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConfigNames?: Array<string>
  /**
   * AI类型资源组的框架类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameType?: string
  /**
   * AI类型资源组的镜像类型，内置：bulit-in，自定义：custom
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageType?: string
  /**
   * 镜像名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageName?: string
  /**
   * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageVersion?: string
  /**
   * AI资源组的可用资源上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 是否是默认资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: boolean
  /**
   * 资源组场景
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupScene?: string
  /**
   * python类型资源组python单机节点资源上限，该值要小于资源组的资源上限.small:1cu medium:2cu large:4cu xlarge:8cu 4xlarge:16cu 8xlarge:32cu 16xlarge:64cu，如果是高内存型资源，在类型前面加上m.
注意：此字段可能返回 null，表示取不到有效值。
   */
  PythonCuSpec?: string
  /**
   * Spark类型资源组资源配置模式，fast：快速模式，custom：自定义模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkSpecMode?: string
  /**
   * Spark类型资源组资源上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkSize?: number
  /**
   * Spark类型资源组资源最小值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkMinSize?: number
  /**
   * 自定义镜像容器镜像服务domain 名称
   */
  PublicDomain?: string
  /**
   * 自定义镜像容器镜像服务tcr实例id
   */
  RegistryId?: string
  /**
   * 容器镜像服务tcr所在地域
   */
  RegionName?: string
  /**
   * 资源组启动耗时
   */
  LaunchTime?: string
}

/**
 * CreateStandardEngineResourceGroup返回参数结构体
 */
export interface CreateStandardEngineResourceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatasourceConnection请求参数结构体
 */
export interface CreateDatasourceConnectionRequest {
  /**
   * 数据连接名称
   */
  DatasourceConnectionName: string
  /**
   * 数据连接类型
   */
  DatasourceConnectionType: string
  /**
   * 数据连接属性
   */
  DatasourceConnectionConfig: DatasourceConnectionConfig
  /**
   * 数据连接所属服务
   */
  ServiceType: string
  /**
   * 数据连接描述
   */
  DatasourceConnectionDesc?: string
  /**
   * 数据引擎名称数组
   */
  DataEngineNames?: Array<string>
  /**
   * 网络连接名称
   */
  NetworkConnectionName?: string
  /**
   * 网络连接描述
   */
  NetworkConnectionDesc?: string
  /**
   * 网络连接类型 （2-夸源型，4-增强型）
   */
  NetworkConnectionType?: number
  /**
   * 自定义配置
   */
  CustomConfig?: Array<CustomConfig>
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
 * DescribeEngineNetworks返回参数结构体
 */
export interface DescribeEngineNetworksResponse {
  /**
   * 引擎网络信息
   */
  EngineNetworkInfos?: Array<EngineNetworkInfo>
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
 * DescribeNetworkConnections请求参数结构体
 */
export interface DescribeNetworkConnectionsRequest {
  /**
   * 网络配置类型
   */
  NetworkConnectionType?: number
  /**
   * 计算引擎名称
   */
  DataEngineName?: string
  /**
   * 数据源vpcid
   */
  DatasourceConnectionVpcId?: string
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 网络配置名称
   */
  NetworkConnectionName?: string
}

/**
 * CreateTcIcebergTable请求参数结构体
 */
export interface CreateTcIcebergTableRequest {
  /**
   * 表基本信息
   */
  TableBaseInfo: TableBaseInfo
  /**
   * 表字段信息
   */
  Columns: Array<TColumn>
  /**
   * 为true时只获取sql而不执行
   */
  DryRun: boolean
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
 * AttachWorkGroupPolicy返回参数结构体
 */
export interface AttachWorkGroupPolicyResponse {
  /**
   * <p>要授权的策略列表</p>
   */
  PolicySet?: Array<Policy>
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
 * LaunchStandardEngineResourceGroups返回参数结构体
 */
export interface LaunchStandardEngineResourceGroupsResponse {
  /**
   * 批量操作资源组时，操作失败的资源组相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateEngineResourceGroupFailMessages?: Array<OperateEngineResourceGroupFailMessage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateNetworkConnection返回参数结构体
 */
export interface UpdateNetworkConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListJobSpecs返回参数结构体
 */
export interface ListJobSpecsResponse {
  /**
   * <p>总数量</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>作业配置列表</p>
   */
  Items?: Array<JobSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSparkAppTask返回参数结构体
 */
export interface CreateSparkAppTaskResponse {
  /**
   * <p>批Id</p>
   */
  BatchId?: string
  /**
   * <p>任务Id</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartInferenceService返回参数结构体
 */
export interface RestartInferenceServiceResponse {
  /**
   * <p>推理服务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>关联的模型UID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>关联的模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>关联的模型版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelIdentifier?: string
  /**
   * <p>关联模型的类型（LLM / VLM / Embedding / Reranker / TTS / ASR / CV / NLP / ML）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>服务状态（Running/Stopped/Deploying/Failed）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务端点URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * <p>OpenAI 兼容统一入口 URL（通过 API-Key 路由，适用于 LLM/Embedding/Reranker）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedEndpointUrl?: string
  /**
   * <p>KServe V2 协议统一入口 URL（通过 API-Key + model name 路由，适用于 XGBoost 等传统 ML 模型）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedV2EndpointUrl?: string
  /**
   * <p>应用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>主账号UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>部署数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentCount?: number
  /**
   * <p>是否存在至少一个运行中的部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRunningDeployment?: boolean
  /**
   * <p>是否启用 API-Key 鉴权</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthEnabled?: boolean
  /**
   * <p>是否强制开启 API-Key 鉴权（生产环境为 true，不允许关闭）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthForceEnabled?: boolean
  /**
   * <p>是否跳过 TLS 证书验证（自签证书场景，前端 curl 命令需加 -k 参数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipTlsVerify?: boolean
  /**
   * <p>子账号UIN（实际操作者）</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行中部署的 CPU 资源汇总</p>
   */
  CpuResourceSummary?: CpuSummaryItem
  /**
   * <p>资源配置（JSON 字符串，取自第一个部署）</p>
   */
  ResourceConfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRayJobPriority请求参数结构体
 */
export interface UpdateRayJobPriorityRequest {
  /**
   * <p>任务ID</p>
   */
  Id: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority: number
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
   */
  UserAlias?: string
  /**
   * 网络配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkConnectionSet?: Array<NetworkConnection>
  /**
   * 连通性状态：0（未测试，默认）、1（正常）、2（失败）
   */
  ConnectivityState?: number
  /**
   * 连通性测试提示信息
   */
  ConnectivityTips?: string
  /**
   * 自定义参数
   */
  CustomConfig?: Array<CustomConfig>
  /**
   * 是否允许回退
   */
  AllowRollback?: boolean
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
 * GetRayJobPodYaml返回参数结构体
 */
export interface GetRayJobPodYamlResponse {
  /**
   * Pod Yaml
   */
  Yaml?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRayCluster返回参数结构体
 */
export interface UpdateRayClusterResponse {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListExamples返回参数结构体
 */
export interface ListExamplesResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>案例管理列表</p>
   */
  Items?: Array<ExampleEntity>
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
   */
  Step?: string
  /**
   * 时间
   */
  Time?: string
  /**
   * 日志提示
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
 * 案例难度详情
 */
export interface ExampleDifficulties {
  /**
   * <p>案例难度</p>
   */
  Difficulty?: string
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
  /**
   * 是否设置为常驻：1非常驻（默认）、2常驻（仅能设置一个常驻）
   */
  IsDefault?: number
}

/**
 * 数据优化资源信息结构
 */
export interface ResourceInfo {
  /**
   * 归属类型
   */
  AttributionType?: string
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 引擎名称
   */
  Name?: string
  /**
   * 如资源类型为spark-sql 取值为Name, 如为spark-batch 取值为session app_name
   */
  Instance?: string
  /**
   * 亲和性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Favor?: Array<FavorInfo>
  /**
   * 状态
   */
  Status?: number
  /**
   * 标准引擎资源组信息
   */
  ResourceGroupName?: string
  /**
   * 资源配置信息
   */
  ResourceConf?: ResourceConf
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
 * DescribeClusterGroup返回参数结构体
 */
export interface DescribeClusterGroupResponse {
  /**
   * <p>集群组 ID（系统生成）</p>
   */
  Id?: string
  /**
   * <p>集群组名称（同一 AppId 下唯一）</p>
   */
  Name?: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>集群组配置</p>
   */
  Config?: string
  /**
   * <p>应用 ID（多租户）</p>
   */
  AppId?: number
  /**
   * <p>创建者主账号 UIN</p>
   */
  Uin?: string
  /**
   * <p>创建者子账号 UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间（毫秒时间戳）</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间（毫秒时间戳）</p>
   */
  UpdateTime?: number
  /**
   * <p>是否已软删除（false=活跃，true=已删除）</p>
   */
  Deleted?: boolean
  /**
   * <p>删除时间（软删时写入，活跃记录为 null）</p>
   */
  DeleteTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartLab请求参数结构体
 */
export interface StartLabRequest {
  /**
   * <p>工作区ID</p>
   */
  Id: string
}

/**
 * StopRayCluster返回参数结构体
 */
export interface StopRayClusterResponse {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子账号UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteJobSpec返回参数结构体
 */
export interface DeleteJobSpecResponse {
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
   */
  IndexEnable?: string
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
 * ModifySparkAppForTDLC请求参数结构体
 */
export interface ModifySparkAppForTDLCRequest {
  /**
   * <p>spark作业名</p>
   */
  AppName: string
  /**
   * <p>spark作业类型，1代表spark jar作业，2代表spark streaming作业</p>
   */
  AppType: number
  /**
   * <p>执行spark作业的数据引擎名称</p>
   */
  DataEngine: string
  /**
   * <p>spark作业程序包文件路径</p>
   */
  AppFile: string
  /**
   * <p>数据访问策略，CAM Role arn</p>
   */
  RoleArn: number
  /**
   * <p>指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）</p>
   */
  AppDriverSize: string
  /**
   * <p>指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）</p>
   */
  AppExecutorSize: string
  /**
   * <p>spark作业executor个数</p>
   */
  AppExecutorNums: number
  /**
   * <p>spark作业Id</p>
   */
  SparkAppId: string
  /**
   * <p>该字段已下线，请使用字段Datasource</p>
   */
  Eni?: string
  /**
   * <p>spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocal?: string
  /**
   * <p>spark作业主类</p>
   */
  MainClass?: string
  /**
   * <p>spark配置，以换行符分隔</p>
   */
  AppConf?: string
  /**
   * <p>spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalJars?: string
  /**
   * <p>spark 作业依赖jar包（--jars），以逗号分隔</p>
   */
  AppJars?: string
  /**
   * <p>spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalFiles?: string
  /**
   * <p>spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔</p>
   */
  AppFiles?: string
  /**
   * <p>pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalPythonFiles?: string
  /**
   * <p>pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔</p>
   */
  AppPythonFiles?: string
  /**
   * <p>spark作业程序入参</p>
   */
  CmdArgs?: string
  /**
   * <p>最大重试次数，只对spark流任务生效</p>
   */
  MaxRetries?: number
  /**
   * <p>数据源名</p>
   */
  DataSource?: string
  /**
   * <p>spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalArchives?: string
  /**
   * <p>spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔</p>
   */
  AppArchives?: string
  /**
   * <p>Spark Image 版本号</p>
   */
  SparkImage?: string
  /**
   * <p>Spark Image 版本名称</p>
   */
  SparkImageVersion?: string
  /**
   * <p>指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums</p>
   */
  AppExecutorMaxNumbers?: number
  /**
   * <p>关联dlc查询脚本</p>
   */
  SessionId?: string
  /**
   * <p>任务资源配置是否继承集群配置模板：0（默认）不继承、1：继承</p>
   */
  IsInherit?: number
  /**
   * <p>是否使用session脚本的sql运行任务：false：否，true：是</p>
   */
  IsSessionStarted?: boolean
  /**
   * <p>标准引擎依赖包</p>
   */
  DependencyPackages?: Array<DependencyPackage>
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
 * DescribeDataEngineSessionParameters请求参数结构体
 */
export interface DescribeDataEngineSessionParametersRequest {
  /**
   * 引擎id
   */
  DataEngineId: string
  /**
   * 引擎名称，当指定引擎名称后优先使用名称获取配置
   */
  DataEngineName?: string
}

/**
 * DescribeDataEngineSessionParameters返回参数结构体
 */
export interface DescribeDataEngineSessionParametersResponse {
  /**
   * 集群Session配置列表
   */
  DataEngineParameters?: Array<DataEngineImageSessionParameter>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetExampleDetail请求参数结构体
 */
export interface GetExampleDetailRequest {
  /**
   * <p>案例ID</p>
   */
  ExampleId: string
}

/**
 * UpdateStandardEngineResourceGroupResourceInfo请求参数结构体
 */
export interface UpdateStandardEngineResourceGroupResourceInfoRequest {
  /**
   * 引擎资源组名称
   */
  EngineResourceGroupName: string
  /**
   * driver的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  DriverCuSpec?: string
  /**
   * executor的cu规格：
当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu），内存型cu为cpu：men=1:8，m.small（1cu内存型）、m.medium（2cu内存型）、m.large（4cu内存型）、m.xlarge（8cu内存型）
   */
  ExecutorCuSpec?: string
  /**
   * executor最小数量，
   */
  MinExecutorNums?: number
  /**
   * executor最大数量
   */
  MaxExecutorNums?: number
  /**
   * 是否立即重启资源组生效，0--立即生效，1--只保持不重启生效
   */
  IsEffectiveNow?: number
  /**
   * AI资源组资源上限
   */
  Size?: number
  /**
   * 镜像类型，内置镜像：built-in，自定义镜像：custom
   */
  ImageType?: string
  /**
   * 镜像名称
   */
  ImageName?: string
  /**
   * 镜像版本，镜像id
   */
  ImageVersion?: string
  /**
   * 框架类型
   */
  FrameType?: string
  /**
   * 自定义镜像域名
   */
  PublicDomain?: string
  /**
   * 自定义镜像实例id
   */
  RegistryId?: string
  /**
   * 自定义镜像所属地域
   */
  RegionName?: string
  /**
   * python类型资源组python单机节点资源上限，该值要小于资源组的资源上限.small:1cu medium:2cu large:4cu xlarge:8cu 4xlarge:16cu 8xlarge:32cu 16xlarge:64cu，如果是高内存型资源，在类型前面加上m.
   */
  PythonCuSpec?: string
  /**
   * 仅SQL资源组资源配置模式，fast：快速模式，custom：自定义模式
   */
  SparkSpecMode?: string
  /**
   * 仅SQL资源组资源上限，仅用于快速模式
   */
  SparkSize?: number
  /**
   * gpuDriver规格
   */
  DriverGPUSpec?: number
  /**
   * gpuExcutor 规格
   */
  ExecutorGPUSpec?: number
  /**
   * gpu 上限
   */
  GPULimitSize?: number
  /**
   * gpu 规格
   */
  GPUSize?: number
  /**
   * gpupod 规格
   */
  PythonGPUSpec?: number
}

/**
 * 网络配置
 */
export interface NetworkConnection {
  /**
   * 网络配置id
   */
  Id?: number
  /**
   * 网络配置唯一标志符
   */
  AssociateId?: string
  /**
   * 计算引擎id
   */
  HouseId?: string
  /**
   * 数据源id(已废弃)
   */
  DatasourceConnectionId?: string
  /**
   * 网络配置状态（0-初始化，1-正常）
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
  /**
   * 创建时间
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
   */
  HouseName?: string
  /**
   * 网络配置名称
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
  /**
   * 支持 eg
   */
  EGSupport?: number
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
  /**
   * 账号类型，UserAccount：用户账号 RoleAccount：角色账号，默认为用户账号
   */
  AccountType?: string
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
 * DescribeStandardEngineResourceGroupConfigInfo返回参数结构体
 */
export interface DescribeStandardEngineResourceGroupConfigInfoResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 标准引擎资源组，配置相关信息
   */
  StandardEngineResourceGroupConfigInfos?: Array<StandardEngineResourceGroupConfigInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunJobSpec请求参数结构体
 */
export interface RunJobSpecRequest {
  /**
   * <p>配置ID</p>
   */
  SpecId: string
  /**
   * <p>外部工作流引擎业务键 flowId</p>
   */
  FlowId?: string
  /**
   * <p>外部工作流引擎业务键 executionId</p>
   */
  ExecutionId?: string
  /**
   * <p>业务来源标识（调用上下文，长度上限 64，禁止控制字符）</p>
   */
  JobSource?: string
}

/**
 * GetModelFiles返回参数结构体
 */
export interface GetModelFilesResponse {
  /**
   * <p>模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: number
  /**
   * <p>模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>文件树根节点列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Files?: Array<FileNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ListResourceConfigs请求参数结构体
 */
export interface ListResourceConfigsRequest {
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 过滤条件列表（列表字段名称）
   */
  Filters?: Array<Filter>
  /**
   * 提交时间起始过滤-时间戳（毫秒）
   */
  StartTime?: number
  /**
   * 提交时间截止过滤-时间戳（毫秒）
   */
  EndTime?: number
  /**
   * 排序字段列表（列表字段名称）
   */
  SortFields?: Array<SortField>
}

/**
 * DescribeDatabase请求参数结构体
 */
export interface DescribeDatabaseRequest {
  /**
   * 数据库名称
   */
  DatabaseName: string
  /**
   * 数据连接名称，不填默认为DataLakeCatalog
   */
  DatasourceConnectionName?: string
}

/**
 * Ray任务提交实体
 */
export interface RayJobSubmitEntity {
  /**
   * <p>任务ID</p>
   */
  Id?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>任务名称</p>
   */
  JobName?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户主账号UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>运行时间(ms)</p>
   */
  RunningTime?: number
  /**
   * <p>完成时间</p>
   */
  FinishTime?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>失败原因/错误信息</p>
   */
  ErrorMessage?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>来源配置ID</p>
   */
  SpecId?: string
  /**
   * <p>来源配置名称</p>
   */
  SpecName?: string
  /**
   * <p>高级参数，JSON 字符串（透传到 Neutrino）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>作业来源（如 RAY_JOB / RAY_SERVE / 平台直提交等）</p>
   */
  JobSource?: string
}

/**
 * UpdateStandardEngineResourceGroupBaseInfo返回参数结构体
 */
export interface UpdateStandardEngineResourceGroupBaseInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SmartPolicyBaseInfo
 */
export interface SmartPolicyBaseInfo {
  /**
   * 用户uin
   */
  Uin: string
  /**
   * Catalog/Database/Table
   */
  PolicyType?: string
  /**
   * Catalog名称
   */
  Catalog?: string
  /**
   * 数据库名称
   */
  Database?: string
  /**
   * 表名称
   */
  Table?: string
  /**
   * 用户appid
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
 * GetRayJobPods请求参数结构体
 */
export interface GetRayJobPodsRequest {
  /**
   * 任务ID
   */
  Id: string
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 提交时间起始过滤-时间戳（毫秒，可选
   */
  StartTime?: number
  /**
   * 提交时间截止过滤-时间戳（毫秒，可选）
   */
  EndTime?: number
  /**
   * 过滤条件（列表名称）
   */
  Filters?: Array<Filter>
  /**
   * 排序字段列表
   */
  SortFields?: Array<SortField>
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
 * UpdateJobSpecPriority请求参数结构体
 */
export interface UpdateJobSpecPriorityRequest {
  /**
   * <p>配置ID</p>
   */
  SpecId: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority: number
}

/**
 * DeletePartitionQueue请求参数结构体
 */
export interface DeletePartitionQueueRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
  /**
   * 队列名称
   */
  QueueName: string
  /**
   * 队列ID
   */
  Id: number
}

/**
 * 工作组详细信息
 */
export interface WorkGroupDetailInfo {
  /**
   * 工作组Id
   */
  WorkGroupId?: number
  /**
   * 工作组名称
   */
  WorkGroupName?: string
  /**
   * 包含的信息类型。User：用户信息；DataAuth：数据权限；EngineAuth:引擎权限
   */
  Type?: string
  /**
   * 工作组上绑定的用户集合
   */
  UserInfo?: Users
  /**
   * 数据权限集合
   */
  DataPolicyInfo?: Policys
  /**
   * 引擎权限集合
   */
  EnginePolicyInfo?: Policys
  /**
   * 工作组描述信息
   */
  WorkGroupDescription?: string
  /**
   * 行过滤信息集合
   */
  RowFilterInfo?: Policys
  /**
   * 数据目录权限集
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogPolicyInfo?: Policy
  /**
   * 数据目录权限
   */
  DataCatalogPolicyInfo?: Policys
  /**
   * 模型权限
   */
  ModelPolicyInfo?: Policys
}

/**
 * DescribeEngineNodeSpec请求参数结构体
 */
export interface DescribeEngineNodeSpecRequest {
  /**
   * 引擎名称
   */
  DataEngineName?: string
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
 * 可售卖资源规格信息
 */
export interface ResourceSaleInfo {
  /**
   * <p>可售卖资源规格</p>
   */
  ResourceSpec?: ResourceSpec
  /**
   * <p>规格步长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step?: number
  /**
   * <p>最大资源数量，仅GU有值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxSpec?: number
}

/**
 * 集群大版本镜像信息。
 */
export interface DataEngineImageVersion {
  /**
   * 镜像大版本ID
   */
  ImageVersionId?: string
  /**
   * 镜像大版本名称
   */
  ImageVersion?: string
  /**
   * 镜像大版本描述
   */
  Description?: string
  /**
   * 是否为公共版本：1：公共；2：私有
   */
  IsPublic?: number
  /**
   * 集群类型：SparkSQL/PrestoSQL/SparkBatch
   */
  EngineType?: string
  /**
   * 版本状态：1：初始化；2：上线；3：下线
   */
  IsSharedEngine?: number
  /**
   * 版本状态：1：初始化；2：上线；3：下线
   */
  State?: number
  /**
   * 插入时间
   */
  InsertTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * ListModelVersions返回参数结构体
 */
export interface ListModelVersionsResponse {
  /**
   * <p>模型版本列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ModelVersionInfo>
  /**
   * <p>模型总数量</p>
   */
  Total?: number
  /**
   * <p>当前多少页</p>
   */
  Page?: number
  /**
   * <p>当前页模型数量</p>
   */
  PageSize?: number
  /**
   * <p>结果总页数</p>
   */
  TotalPages?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListInferenceEngines请求参数结构体
 */
export interface ListInferenceEnginesRequest {
  /**
   * <p>当前页码</p>
   */
  Page?: number
  /**
   * <p>每页的数量</p>
   */
  PageSize?: number
  /**
   * <p>创建时间起始过滤-时间戳（毫秒，可选）</p><p>单位：ms</p>
   */
  StartTime?: number
  /**
   * <p>创建时间截止过滤-时间戳（毫秒，可选）</p><p>单位：ms</p>
   */
  EndTime?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * ModifyPartitionDescription返回参数结构体
 */
export interface ModifyPartitionDescriptionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateUDFPolicy请求参数结构体
 */
export interface UpdateUDFPolicyRequest {
  /**
   * UDF名称
   */
  Name: string
  /**
   * 数据库名
   */
  DatabaseName: string
  /**
   * 数据目录名
   */
  CatalogName: string
  /**
   * UDF权限信息
   */
  UDFPolicyInfos: Array<UDFPolicyInfo>
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
  /**
   * 任务来源信息
   */
  SourceInfo?: Array<KVPair>
}

/**
 * 排序结构
 */
export interface Sort {
  /**
   * 排序字段
   */
  Field: string
  /**
   * 是否按照ASC排序，否则DESC排序
   */
  Asc: boolean
}

/**
 * CreateResourceConfig请求参数结构体
 */
export interface CreateResourceConfigRequest {
  /**
   * 模板名称
   */
  Name: string
  /**
   * 描述
   */
  Description?: string
  /**
   * Head节点配置
   */
  Head?: HeadSpecDTO
  /**
   * Worker节点配置
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * 模板类型，不填默认是Ray
   */
  Type?: string
}

/**
 * statement信息
 */
export interface StatementInformation {
  /**
   * SQL任务唯一ID
   */
  TaskId?: string
  /**
   * SQL内容
   */
  SQL?: string
}

/**
 * GetInferenceModel返回参数结构体
 */
export interface GetInferenceModelResponse {
  /**
   * <p>模型ID</p>
   */
  ModelId?: string
  /**
   * <p>模型UID</p>
   */
  ModelUid?: string
  /**
   * <p>模型名称</p>
   */
  Name?: string
  /**
   * <p>模型提供方</p>
   */
  Provider?: string
  /**
   * <p>模型描述</p>
   */
  Description?: string
  /**
   * <p>模型类型</p>
   */
  ModelType?: string
  /**
   * <p>模型参数量</p>
   */
  ParameterSize?: string
  /**
   * <p>模型标签列表</p>
   */
  Tags?: Array<string>
  /**
   * <p>最新版本号</p>
   */
  LatestVersion?: string
  /**
   * <p>版本总数</p>
   */
  VersionCount?: number
  /**
   * <p>关联的推理服务数量</p>
   */
  ServiceCount?: number
  /**
   * <p>是否有存储</p>
   */
  HasStorage?: boolean
  /**
   * <p>存储地域</p>
   */
  StorageRegion?: string
  /**
   * <p>是否使用用户自带存储桶</p>
   */
  HasCustomStorage?: boolean
  /**
   * <p>存储后端类型</p>
   */
  StorageType?: string
  /**
   * <p>是否内置模型</p>
   */
  BuiltIn?: boolean
  /**
   * <p>任务类型列表</p>
   */
  Tasks?: Array<string>
  /**
   * <p>模型支持的推理引擎列表</p>
   */
  SupportedEngines?: Array<string>
  /**
   * <p>UIN</p>
   */
  Uin?: string
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>Sub UIN</p>
   */
  SubAccountUin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceConfig返回参数结构体
 */
export interface DeleteResourceConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 定时启停策略信息
 */
export interface CrontabResumeSuspendStrategy {
  /**
   * 定时拉起时间：如：周一&周三8点
   */
  ResumeTime?: string
  /**
   * 定时挂起时间：如：周一&周三20点
   */
  SuspendTime?: string
  /**
   * 挂起配置：0（默认）：等待任务结束后挂起、1：强制挂起
   */
  SuspendStrategy?: number
}

/**
 * StopRayCluster请求参数结构体
 */
export interface StopRayClusterRequest {
  /**
   * <p>集群ID</p>
   */
  Id: string
}

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
  /**
   * 查询类型：all：全部数据（默认）、permission：有权限的数据
注意：此字段需要开启白名单使用，如果需要使用，请提交工单联系我们。
   */
  DescribeType?: string
}

/**
 * GetLabYaml请求参数结构体
 */
export interface GetLabYamlRequest {
  /**
   * <p>数据实验室Id</p>
   */
  Id: string
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
 * DescribeSaleRegions请求参数结构体
 */
export type DescribeSaleRegionsRequest = null

/**
 * CreateTcIcebergTable返回参数结构体
 */
export interface CreateTcIcebergTableResponse {
  /**
   * amoro的SessionId
   */
  SessionId?: string
  /**
   * 执行的sql
   */
  SQL?: string
  /**
   * 为true时只返回sql而不实际执行
   */
  DryRun?: boolean
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
 * mcp 请求任务详情的返回
 */
export interface MCPTaskInfo {
  /**
   * <p>任务 ID</p>
   */
  Id?: string
  /**
   * <p>BatchId</p>
   */
  BatchId?: string
  /**
   * <p>状态</p>
   */
  State?: number
  /**
   * <p>任务类型</p>
   */
  TaskType?: string
  /**
   * <p>任务类型</p>
   */
  TaskKind?: string
  /**
   * <p>引擎详情</p>
   */
  EngineTypeDetail?: string
  /**
   * <p>SQL 类型</p>
   */
  SQLType?: string
  /**
   * <p>SQL</p>
   */
  SQL?: string
  /**
   * <p>是否截断</p>
   */
  IsSQLCutOff?: boolean
  /**
   * <p>数据库名称</p>
   */
  DatabaseName?: string
  /**
   * <p>引擎 ID</p>
   */
  DataEngineId?: string
  /**
   * <p>资源组名称</p>
   */
  ResourceGroupName?: string
  /**
   * <p>JobId</p>
   */
  SparkJobId?: string
  /**
   * <p>Job 名称</p>
   */
  SparkJobName?: string
  /**
   * <p>操作人 Uin</p>
   */
  OperateUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>引擎耗时</p><p>单位：毫秒</p>
   */
  UsedTime?: number
  /**
   * <p>执行总耗时</p><p>单位：毫秒</p>
   */
  TotalTime?: number
  /**
   * <p>进度</p>
   */
  Progress?: number
  /**
   * <p>输出信息</p>
   */
  OutputMessage?: string
  /**
   * <p>结果集</p>
   */
  DataSet?: string
}

/**
 * CopyJobSpec返回参数结构体
 */
export interface CopyJobSpecResponse {
  /**
   * <p>配置ID</p>
   */
  Id?: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>资源配置模板是否变更</p>
   */
  ResourceConfigChanged?: boolean
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>创建者UIN</p>
   */
  Uin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>该配置产生的作业实例数量</p>
   */
  JobInstanceCount?: number
  /**
   * <p>是否有运行中的作业实例</p>
   */
  HasRunningJobs?: boolean
  /**
   * <p>高级参数配置，json类型</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterGroup 等价，新调用方使用 GroupId）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li><li>NULL： 无</li></ul>
   */
  DispatchStrategy?: string
  /**
   * <p>作业提交目标：GROUP（按计算组分派）/ CLUSTER（指定集群）/ SERVERLESS（按 Serverless 拉起）</p><p>枚举值：</p><ul><li>GROUP： 按计算组分派</li><li>CLUSTER： 指定集群</li><li>SERVERLESS： 按 Serverless 拉起</li></ul>
   */
  SubmissionTarget?: string
  /**
   * <p>集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * TccHive数据结构
 */
export interface TccHive {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 终端节点服务ID
   */
  EndpointServiceId?: string
  /**
   * thrift连接地址
   */
  MetaStoreUrl?: string
  /**
   * hive版本
   */
  HiveVersion?: string
  /**
   * 网络信息
   */
  TccConnection?: NetWork
  /**
   * Hms终端节点服务ID
   */
  HmsEndpointServiceId?: string
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
  /**
   * 依赖包信息
   */
  DependencyPackages?: Array<DependencyPackage>
}

/**
 * UpdateRayJobPriority返回参数结构体
 */
export interface UpdateRayJobPriorityResponse {
  /**
   * <p>任务ID</p>
   */
  Id?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>任务状态</p>
   */
  Status?: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint?: string
  /**
   * <p>任务名称</p>
   */
  JobName?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户主账号UIN</p>
   */
  Uin?: string
  /**
   * <p>创建账号</p>
   */
  SubAccountUin?: string
  /**
   * <p>历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>运行时间(ms)</p>
   */
  RunningTime?: number
  /**
   * <p>完成时间</p>
   */
  FinishTime?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>来源配置ID</p>
   */
  SpecId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>业务来源标识（调用上下文，长度上限 64，禁止控制字符）</p>
   */
  JobSource?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 任务来源信息
   */
  SourceInfo?: Array<KVPair>
}

/**
 * DescribePartitionDetail返回参数结构体
 */
export interface DescribePartitionDetailResponse {
  /**
   * 分区详情
   */
  PartitionDetail?: PartitionDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListInferenceEngines返回参数结构体
 */
export interface ListInferenceEnginesResponse {
  /**
   * <p>数据列表</p>
   */
  Items?: Array<InferenceEngineInfo>
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码</p>
   */
  Page?: number
  /**
   * <p>每页的数量</p>
   */
  PageSize?: number
  /**
   * <p>总的页数</p>
   */
  TotalPages?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTaskJobLogDetail返回参数结构体
 */
export interface ListTaskJobLogDetailResponse {
  /**
   * 下一次分页参数
   */
  Context?: string
  /**
   * 是否获取完结
   */
  ListOver?: boolean
  /**
   * 日志详情
   */
  Results?: Array<JobLogResult>
  /**
   * 日志url(字段已废弃)
   */
  LogUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMetaDatabase返回参数结构体
 */
export interface CreateMetaDatabaseResponse {
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
 * vpc信息
 */
export interface VpcInfo {
  /**
   * vpc Id
   */
  VpcId?: string
  /**
   * vpc子网
   */
  VpcCidrBlock?: string
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 权限组Id
   */
  AccessGroupId?: string
}

/**
 * DescribeMCPTask返回参数结构体
 */
export interface DescribeMCPTaskResponse {
  /**
   * <p>任务详细信息</p>
   */
  TaskInfo?: MCPTaskInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceConfig请求参数结构体
 */
export interface DeleteResourceConfigRequest {
  /**
   * 模板ID
   */
  Id: string
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
 * 网络配置信息
 */
export interface NetWork {
  /**
   * 服务clbip
   */
  ClbIp?: string
  /**
   * 服务clbPort
   */
  ClbPort?: string
  /**
   * vpc实例id
   */
  VpcId?: string
  /**
   * vpc网段
   */
  VpcCidrBlock?: string
  /**
   * 子网实例id
   */
  SubnetId?: string
  /**
   * 子网网段
   */
  SubnetCidrBlock?: string
}

/**
 * ListExampleDifficulties返回参数结构体
 */
export interface ListExampleDifficultiesResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>分类列表</p>
   */
  Items?: Array<ExampleDifficulties>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachUserPolicy返回参数结构体
 */
export interface AttachUserPolicyResponse {
  /**
   * <p>要授权的策略列表</p>
   */
  PolicySet?: Array<Policy>
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
 * CheckModifyPartition请求参数结构体
 */
export interface CheckModifyPartitionRequest {
  /**
   * <p>分区编码</p>
   */
  PartitionCode: string
  /**
   * <p>目标资源配额列表（计费项+目标数量）</p>
   */
  TargetResourceQuotaList: Array<ResourceQuota>
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
 * 配置下发参数
 */
export interface UpdateConfContext {
  /**
   * 参数类型，可选：StaticConfigType，DynamicConfigType
   */
  ConfigType: string
  /**
   * 参数的配置数组
   */
  Params: Array<Param>
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
 * GetInferenceService返回参数结构体
 */
export interface GetInferenceServiceResponse {
  /**
   * <p>ServiceId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>关联的模型UID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>关联的模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>关联的模型版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelIdentifier?: string
  /**
   * <p>关联模型的类型（LLM / VLM / Embedding / Reranker / TTS / ASR / CV / NLP / ML）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>服务状态（Running/Stopped/Deploying/Failed）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务端点URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * <p>OpenAI 兼容统一入口 URL（通过 API-Key 路由，适用于 LLM/Embedding/Reranker）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedEndpointUrl?: string
  /**
   * <p>KServe V2 协议统一入口 URL（通过 API-Key + model name 路由，适用于 XGBoost 等传统 ML 模型）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedV2EndpointUrl?: string
  /**
   * <p>应用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>主账号UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>部署数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentCount?: number
  /**
   * <p>是否存在至少一个运行中的部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRunningDeployment?: boolean
  /**
   * <p>Ray Dashboard 访问地址（通过 Ingress 代理）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RayDashboardUrl?: string
  /**
   * <p>是否启用 API-Key 鉴权</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthEnabled?: boolean
  /**
   * <p>是否强制开启 API-Key 鉴权（生产环境为 true，不允许关闭）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthForceEnabled?: boolean
  /**
   * <p>是否跳过 TLS 证书验证（自签证书场景，前端 curl 命令需加 -k 参数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipTlsVerify?: boolean
  /**
   * <p>运行中部署的 GPU 资源汇总</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuResourceSummary?: Array<GpuSummaryItem>
  /**
   * <p>子账号UIN（实际操作者）</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行中部署的 CPU 资源汇总</p>
   */
  CpuResourceSummary?: CpuSummaryItem
  /**
   * <p>资源配置（JSON 字符串，取自第一个部署）</p>
   */
  ResourceConfig?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CheckModifyPartition返回参数结构体
 */
export interface CheckModifyPartitionResponse {
  /**
   * <p>是否允许变配：true-允许，false-不允许</p>
   */
  CanModify?: boolean
  /**
   * <p>校验失败时的不足资源描述信息列表，校验通过时为null</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageList?: Array<MessageItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TensorFlow、Pytorch、SK-learn镜像信息列表
 */
export interface EngineSessionImage {
  /**
   * Spark镜像唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImageId?: string
  /**
   * Spark镜像版本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImageVersion?: string
  /**
   * 小版本镜像类型.1:TensorFlow、2:Pytorch、3:SK-learn

注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImageType?: number
  /**
   * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SparkImageTag?: string
}

/**
 * DescribeTaskMonitorInfos返回参数结构体
 */
export interface DescribeTaskMonitorInfosResponse {
  /**
   * 任务监控信息列表
   */
  TaskMonitorInfoList?: Array<TaskMonitorInfo>
  /**
   * 任务总数
   */
  TotalCount?: number
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
   */
  UserId?: string
  /**
   * 返回的信息类型，Group：返回的当前用户的工作组信息；DataAuth：返回的当前用户的数据权限信息；EngineAuth：返回的当前用户的引擎权限信息
   */
  Type?: string
  /**
   * 用户类型：ADMIN：管理员 COMMON：一般用户
   */
  UserType?: string
  /**
   * 用户描述信息
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
   */
  UserAlias?: string
  /**
   * 行过滤集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowFilterInfo?: Policys
  /**
   * 账号类型
   */
  AccountType?: string
  /**
   * 数据源权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogPolicyInfo?: Policys
  /**
   * 模型权限集合
   */
  ModelPolicyInfo?: Policys
}

/**
 * GetExampleDetail返回参数结构体
 */
export interface GetExampleDetailResponse {
  /**
   * <p>ID</p>
   */
  Id?: number
  /**
   * <p>案例ID</p>
   */
  ExampleId?: string
  /**
   * <p>标题</p>
   */
  Title?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>README</p>
   */
  Readme?: string
  /**
   * <p>案例归档URL</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>图片URL</p>
   */
  Image?: string
  /**
   * <p>实验室镜像</p>
   */
  LabImage?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfig?: string
  /**
   * <p>分类</p>
   */
  Category?: string
  /**
   * <p>案例标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>难度</p>
   */
  Difficulty?: string
  /**
   * <p>预估时间（分钟）</p>
   */
  EstimatedTime?: number
  /**
   * <p>排序</p>
   */
  SortOrder?: number
  /**
   * <p>是否启用</p>
   */
  IsEnabled?: boolean
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>是否删除</p>
   */
  Deleted?: number
  /**
   * <p>案例热度</p>
   */
  Popularity?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDatasourceConnection返回参数结构体
 */
export interface CreateDatasourceConnectionResponse {
  /**
   * 数据连接Id
   */
  DatasourceConnectionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateClusterGroup请求参数结构体
 */
export interface CreateClusterGroupRequest {
  /**
   * <p>集群组名称</p>
   */
  Name: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>集群组配置</p>
   */
  Config?: string
}

/**
 * GetRayClusterYaml返回参数结构体
 */
export interface GetRayClusterYamlResponse {
  /**
   * <p>RayCluster YAML</p>
   */
  Yaml?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateNetworkConnection请求参数结构体
 */
export interface UpdateNetworkConnectionRequest {
  /**
   * 网络配置描述
   */
  NetworkConnectionDesc?: string
  /**
   * 网络配置名称
   */
  NetworkConnectionName?: string
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
 * DeleteRayCluster返回参数结构体
 */
export interface DeleteRayClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
   * 任务详情信息
   */
  TaskDetail?: TaskFullRespInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSparkAppForTDLC返回参数结构体
 */
export interface CreateSparkAppForTDLCResponse {
  /**
   * <p>App唯一标识</p>
   */
  SparkAppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Doris数据源详细信息
 */
export interface TCHouseD {
  /**
   * 数据源实例的唯一ID
   */
  InstanceId?: string
  /**
   * 数据源名称
   */
  InstanceName?: string
  /**
   * 数据源的JDBC
   */
  JdbcUrl?: string
  /**
   * 用于访问数据源的用户
   */
  User?: string
  /**
   * 数据源访问密码，需要base64编码
   */
  Password?: string
  /**
   * 数据源的VPC和子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: DatasourceConnectionLocation
  /**
   * 默认数据库名
   */
  DbName?: string
  /**
   * 访问信息
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
 * CheckQueueName返回参数结构体
 */
export interface CheckQueueNameResponse {
  /**
   * 校验是否通过：true-通过，false-不通过
   */
  IsValid?: string
  /**
   * 校验失败原因，校验通过时为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListInferenceServices请求参数结构体
 */
export interface ListInferenceServicesRequest {
  /**
   * <p>页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量（最大 200）</p>
   */
  PageSize?: number
  /**
   * <p>创建时间起始过滤-时间戳（毫秒，可选）</p><p>单位：ms</p>
   */
  StartTime?: number
  /**
   * <p>创建时间截止过滤-时间戳（毫秒，可选）</p><p>单位：ms</p>
   */
  EndTime?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * GetModelConfig请求参数结构体
 */
export interface GetModelConfigRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid: string
  /**
   * <p>模型版本</p>
   */
  ModelVersion?: string
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
 * CreateRayCluster返回参数结构体
 */
export interface CreateRayClusterResponse {
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（规范化后的扁平 KV JSON）</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
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
   */
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * GetModelReadme返回参数结构体
 */
export interface GetModelReadmeResponse {
  /**
   * <p>模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>模型提供方</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Provider?: string
  /**
   * <p>模型类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>参数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParameterSize?: string
  /**
   * <p>是否是内置模型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuiltIn?: boolean
  /**
   * <p>README 内容（Markdown 格式）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Readme?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据实验室
 */
export interface LabResponse {
  /**
   * <p>案例模板ID（startMode=EXAMPLE 时使用）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage?: string
  /**
   * <p>Lab sidecar 镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  LabImagePullPolicy?: string
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountName?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>状态详情/错误信息</p>
   */
  StatusMessage?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>所属集群组名称</p>
   */
  GroupName?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>Dashboard URL / 历史记录链接</p>
   */
  HistoryUrl?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>启动时间（最近一次启动）</p>
   */
  StartTime?: number
  /**
   * <p>停止时间（最近一次停止/休眠）</p>
   */
  StopTime?: number
  /**
   * <p>删除时间</p>
   */
  DeleteTime?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Token 认证密钥（开启 token 认证时由系统生成）</p>
   */
  Token?: string
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
 * GetRayClusterPods返回参数结构体
 */
export interface GetRayClusterPodsResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>每页数量</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>集群的Pod列表</p>
   */
  Items?: Array<ClusterPod>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStandardEngineResourceGroups返回参数结构体
 */
export interface DescribeStandardEngineResourceGroupsResponse {
  /**
   * 标准引擎资源组信息
   */
  UserEngineResourceGroupInfos?: Array<StandardEngineResourceGroupInfo>
  /**
   * 资源组总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListResourceConfigs返回参数结构体
 */
export interface ListResourceConfigsResponse {
  /**
   * 总记录数
   */
  Total?: number
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 资源配置模板列表
   */
  Items?: Array<ResourceConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserRole返回参数结构体
 */
export interface CreateUserRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskLog返回参数结构体
 */
export interface DescribeTaskLogResponse {
  /**
   * 下一次分页参数
   */
  Context?: string
  /**
   * 是否获取完结
   */
  ListOver?: boolean
  /**
   * 日志详情
   */
  Results?: Array<JobLogResult>
  /**
   * 日志url
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
   * <p>任务对象列表。</p>
   */
  TaskList?: Array<TaskResponseInfo>
  /**
   * <p>实例总数。</p>
   */
  TotalCount?: number
  /**
   * <p>任务概览信息</p>
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
 * DescribeTaskResourceUsage返回参数结构体
 */
export interface DescribeTaskResourceUsageResponse {
  /**
   * core 用量信息
   */
  CoreInfo?: CoreInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  RoleName?: string
  /**
   * 创建者UIN
   */
  Creator?: string
  /**
   * cos授权路径列表
   */
  CosPermissionList?: Array<CosPermission>
  /**
   * cam策略json
   */
  PermissionJson?: string
  /**
   * 是否设置为常驻：1非常驻（默认）、2常驻（仅能设置一个常驻）
   */
  IsDefault?: number
}

/**
 * 任务状态历史记录
 */
export interface JobStatusHistory {
  /**
   * 历史记录ID
   */
  Id?: number
  /**
   * 作业ID
   */
  JobId?: string
  /**
   * 作业名称
   */
  JobName?: string
  /**
   * 源状态
   */
  FromState?: string
  /**
   * 目标状态
   */
  ToState?: string
  /**
   * 触发事件
   */
  Event?: string
  /**
   * 消息
   */
  Message?: string
  /**
   * 转换时间（毫秒时间戳）
   */
  TransitionTime?: number
}

/**
 * DescribeUserType请求参数结构体
 */
export interface DescribeUserTypeRequest {
  /**
   * 用户ID（UIN），如果不填默认为调用方的子UIN
   */
  UserId?: string
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
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
 * DescribeTablePartitions返回参数结构体
 */
export interface DescribeTablePartitionsResponse {
  /**
   * 分区信息值
   */
  MixedPartitions?: MixedTablePartitions
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetModelConfig返回参数结构体
 */
export interface GetModelConfigResponse {
  /**
   * <p>模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>config.json 原始内容（JSON 字符串）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigJson?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

   */
  VpcId?: string
  /**
   * vpc名称
   */
  VpcName?: string
  /**
   * vpc子网信息列表
   */
  VpcCidrBlock?: Array<VpcCidrBlock>
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 权限组Id
   */
  AccessGroupId?: string
}

/**
 * DescribePartitionDetail请求参数结构体
 */
export interface DescribePartitionDetailRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
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
 * CreateInferenceModel返回参数结构体
 */
export interface CreateInferenceModelResponse {
  /**
   * <p>模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * <p>模型UID</p>
   */
  ModelUid?: string
  /**
   * <p>模型名称</p>
   */
  Name?: string
  /**
   * <p>模型提供方</p>
   */
  Provider?: string
  /**
   * <p>模型描述</p>
   */
  Description?: string
  /**
   * <p>模型类型</p>
   */
  ModelType?: string
  /**
   * <p>参数大小</p>
   */
  ParameterSize?: string
  /**
   * <p>模型标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>最新版本</p>
   */
  LatestVersion?: string
  /**
   * <p>版本总数</p>
   */
  VersionCount?: number
  /**
   * <p>关联的推理服务数量</p>
   */
  ServiceCount?: number
  /**
   * <p>是否有存储</p>
   */
  HasStorage?: boolean
  /**
   * <p>是否使用用户自带存储桶</p>
   */
  HasCustomStorage?: boolean
  /**
   * <p>存储后端类型</p>
   */
  StorageType?: string
  /**
   * <p>是否内置模型</p>
   */
  BuiltIn?: boolean
  /**
   * <p>任务类型列表</p>
   */
  Tasks?: Array<string>
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>Sub UIN</p>
   */
  SubAccountUin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控指标数据
 */
export interface MetricsData {
  /**
   * <p>每秒请求数（QPS）</p>
   */
  RequestsPerSecond?: number
  /**
   * <p>错误率（0~1）</p>
   */
  ErrorRate?: number
  /**
   * <p>P95 延迟（毫秒）</p>
   */
  P95LatencyMs?: number
  /**
   * <p>P99 延迟（毫秒）</p>
   */
  P99LatencyMs?: number
  /**
   * <p>队列深度（排队中的请求数）</p>
   */
  QueueDepth?: number
  /**
   * <p>TTFT P99 延迟（毫秒，仅 vLLM）</p>
   */
  TimeToFirstTokenP99Ms?: number
  /**
   * <p>TPOT P99 延迟（毫秒，仅 vLLM）</p>
   */
  TimePerOutputTokenP99Ms?: number
  /**
   * <p>Token 吞吐量（tokens/s，仅 vLLM）</p>
   */
  TokenThroughput?: number
  /**
   * <p>GPU 利用率（0~100，百分比）</p>
   */
  GpuUtilization?: number
  /**
   * <p>GPU 显存已用（MB）</p>
   */
  GpuMemoryUsedMB?: number
  /**
   * <p>GPU 显存总量（MB）</p>
   */
  GpuMemoryTotalMB?: number
  /**
   * <p>CPU 利用率（0~100，百分比）</p>
   */
  CpuUtilization?: number
  /**
   * <p>内存已用（字节）</p>
   */
  MemoryUsedBytes?: number
  /**
   * <p>内存总量（字节）</p>
   */
  MemoryTotalBytes?: number
  /**
   * <p>网络接收速度（MB/s）</p>
   */
  NetworkReceiveMBPerSecond?: number
  /**
   * <p>网络发送速度（MB/s）</p>
   */
  NetworkSendMBPerSecond?: number
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
 * DeleteDataMaskStrategy返回参数结构体
 */
export interface DeleteDataMaskStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用的键值对数据结构
 */
export interface TypeKVPair {
  /**
   * <p>key值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * <p>value值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
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
   * <p>返回数量，默认为10，最大值为100。</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。<br>task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。<br>task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。<br>task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。<br>task-operator- string （子uin过滤）<br>task-kind - string （任务类型过滤）</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间）</p>
   */
  SortBy?: string
  /**
   * <p>排序方式，desc表示正序，asc表示反序， 默认为asc。</p>
   */
  Sorting?: string
  /**
   * <p>起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻</p>
   */
  StartTime?: string
  /**
   * <p>结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻</p>
   */
  EndTime?: string
  /**
   * <p>数据引擎名称，用于筛选</p>
   */
  DataEngineName?: string
  /**
   * <p>spark引擎资源组名称</p>
   */
  ResourceGroupName?: string
}

/**
 * CreateSparkAppTask请求参数结构体
 */
export interface CreateSparkAppTaskRequest {
  /**
   * <p>spark作业名</p>
   */
  JobName: string
  /**
   * <p>spark作业程序入参，以空格分隔；一般用于周期性调用使用</p>
   */
  CmdArgs?: string
  /**
   * <p>任务来源信息</p>
   */
  SourceInfo?: Array<KVPair>
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
   * <p>配置的key值</p>
   */
  Key: string
  /**
   * <p>配置的value值</p>
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
   */
  DatasourceConnectionName?: string
  /**
   * 该数据表备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableComment?: string
  /**
   * 具体类型，表or视图
   */
  Type?: string
  /**
   * 数据格式类型，hive，iceberg等
   */
  TableFormat?: string
  /**
   * 建表用户昵称
   */
  UserAlias?: string
  /**
   * 建表用户ID
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
 * ListRayJobs返回参数结构体
 */
export interface ListRayJobsResponse {
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * ray作业列表
   */
  Items?: Array<RayJobSubmitEntity>
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
   * 列表返回的Id
   */
  TaskId?: string
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
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 资源组id
   */
  ResourceGroupId?: string
}

/**
 * DescribeSaleResourceInfo请求参数结构体
 */
export type DescribeSaleResourceInfoRequest = null

/**
 * DescribeNativeSparkSessions请求参数结构体
 */
export interface DescribeNativeSparkSessionsRequest {
  /**
   * 引擎ID
   */
  DataEngineId?: string
  /**
   * 资源组ID
   */
  ResourceGroupId?: string
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 用户Uin
   */
  UserUin?: string
}

/**
 * GetInferenceModel请求参数结构体
 */
export interface GetInferenceModelRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid?: string
}

/**
 * DescribeSessionImageVersion请求参数结构体
 */
export interface DescribeSessionImageVersionRequest {
  /**
   * 引擎Id
   */
  DataEngineId: string
  /**
   * 框架类型：machine-learning、python、spark-ml
   */
  FrameworkType: string
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
 * UpdateUDFPolicy返回参数结构体
 */
export interface UpdateUDFPolicyResponse {
  /**
   * UDF权限信息
   */
  UDFPolicyInfos?: Array<UDFPolicyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDataMaskStrategy返回参数结构体
 */
export interface CreateDataMaskStrategyResponse {
  /**
   * 策略id
   */
  StrategyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据脱敏策略信息
 */
export interface DataMaskStrategyInfo {
  /**
   * 策略名称
   */
  StrategyName?: string
  /**
   * MASK_SHOW_FIRST_4; MASK_SHOW_LAST_4;MASK_HASH; MASK_DATE_SHOW_YEAR; MASK_NULL; MASK_DEFAULT 等
   */
  StrategyType?: string
  /**
   * 策略描述
   */
  StrategyDesc?: string
  /**
   * 用户组策略列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: Array<GroupInfo>
  /**
   * 用户子账号uin列表，按;拼接
   */
  Users?: string
  /**
   * 策略Id
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
export interface AddOptimizerEnginesRequest {
  /**
   * 数据目录名称
   */
  Catalog: string
  /**
   * 引擎信息列表
   */
  Engines: Array<OptimizerEngineInfo>
  /**
   * 数据库名称
   */
  Database?: string
  /**
   * 数据表名称
   */
  Table?: string
}

/**
 * CreateLab返回参数结构体
 */
export interface CreateLabResponse {
  /**
   * <p>案例模板ID（从案例创建时返回）</p>
   */
  ExampleId?: string
  /**
   * <p>代码包/工程归档地址</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  Services?: Array<TypeKVPair>
  /**
   * <p>集群ID</p>
   */
  Id?: string
  /**
   * <p>资源类型：CLUSTER-普通集群；WORKSPACE-数据实验室（开发入口）</p>
   */
  Type?: string
  /**
   * <p>集群名称</p>
   */
  Name?: string
  /**
   * <p>集群描述</p>
   */
  Description?: string
  /**
   * <p>所属资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>默认资源分区名称</p>
   */
  ResourcePartitionName?: string
  /**
   * <p>所属队列名称</p>
   */
  Queue?: string
  /**
   * <p>应用ID</p>
   */
  AppId?: number
  /**
   * <p>用户UIN</p>
   */
  Uin?: string
  /**
   * <p>子用户UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>集群状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>镜像拉取策略</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue）</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
  /**
   * <p>子用户名称（由聚合层通过 CAM 接口回填）</p>
   */
  SubAccountName?: string
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
   */
  Transform?: string
  /**
   * 转换策略参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransformArgs?: Array<string>
  /**
   * 创建时间
   */
  CreateTime?: number
}

/**
 * ListRayJobs请求参数结构体
 */
export interface ListRayJobsRequest {
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 过滤条件列表（列表的字段名称）
   */
  Filters?: Array<Filter>
  /**
   * 提交时间起始过滤-时间戳（毫秒，可选）
   */
  StartTime?: number
  /**
   * 提交时间截止过滤-时间戳（毫秒，可选）
   */
  EndTime?: number
  /**
   * 排序字段列表（列表字段）
   */
  SortFields?: Array<SortField>
}

/**
 * ListJobsBySpec请求参数结构体
 */
export interface ListJobsBySpecRequest {
  /**
   * 配置ID
   */
  SpecId: string
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 提交时间起始过滤-时间戳（毫秒，可选）
   */
  StartTime?: number
  /**
   * 提交时间截止过滤-时间戳（毫秒，可选）
   */
  EndTime?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 排序字段列表
   */
  SortFields?: Array<SortField>
}

/**
 * MCP 任务结果返回
 */
export interface MCPTaskResultInfo {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
  /**
   * <p>状态</p>
   */
  State?: number
  /**
   * <p>结果集 Schema</p>
   */
  ResultSchema?: Array<Column>
  /**
   * <p>结果集</p>
   */
  ResultSet?: string
  /**
   * <p>是否还有其他结果</p>
   */
  NextToken?: string
  /**
   * <p>影响行数</p>
   */
  RowAffectInfo?: string
  /**
   * <p>输出信息</p>
   */
  OutputMessage?: string
  /**
   * <p>展示 format</p>
   */
  DisplayFormat?: string
  /**
   * <p>能否下载</p>
   */
  CanDownload?: boolean
  /**
   * <p>结果花费时间</p><p>单位：毫秒</p>
   */
  QueryResultTime?: number
  /**
   * <p>是否超大</p>
   */
  IsResultOversize?: boolean
}

/**
 * LaunchStandardEngineResourceGroups请求参数结构体
 */
export interface LaunchStandardEngineResourceGroupsRequest {
  /**
   * 标准引擎资源组名称
   */
  EngineResourceGroupNames: Array<string>
}

/**
 * ListRayClusterJobs请求参数结构体
 */
export interface ListRayClusterJobsRequest {
  /**
   * 集群ID（必填）
   */
  ClusterId: string
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 每页数量
   */
  PageSize?: number
  /**
   * 额外过滤条件（ClusterId 已由外层单独传入，无需再在此处指定）
   */
  Filters?: Array<Filter>
  /**
   * 提交时间起始过滤-时间戳（毫秒，可选）
   */
  StartTime?: number
  /**
   * 提交时间截止过滤-时间戳（毫秒，可选）
   */
  EndTime?: number
  /**
   * 排序字段列表
   */
  SortFields?: Array<SortField>
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
 * 用户vpc网络连接信息
 */
export interface UserVpcConnectionInfo {
  /**
   * 引擎网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineNetworkId?: string
  /**
   * 用户vpcid
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVpcId?: string
  /**
   * 用户终端节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVpcEndpointId?: string
  /**
   * 用户终端节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVpcEndpointName?: string
  /**
   * 接入点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessConnectionInfos?: Array<string>
}

/**
 * CancelRayJob返回参数结构体
 */
export interface CancelRayJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Hive表分区信息
 */
export interface HiveTablePartition {
  /**
   * 分区信息名称
   */
  Partition?: string
  /**
   * 分区记录数
   */
  Records?: number
  /**
   * 分区数据文件存储量
   */
  DataFileStorage?: number
  /**
   * 分区创建时间
   */
  CreateTime?: string
  /**
   * 分区schema更新时间
   */
  ModifiedTime?: string
  /**
   * 最后一次分区更新的访问时间
   */
  LastAccessTime?: string
}

/**
 * UDF权限信息
 */
export interface UDFPolicyInfo {
  /**
   * 权限类型
示例：select，alter，drop
   */
  Accesses?: Array<string>
  /**
   * 拥有权限的用户信息
   */
  Users?: Array<string>
  /**
   * 拥有权限的工作组的信息
   */
  Groups?: Array<string>
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
 * UpdateResourceConfig返回参数结构体
 */
export interface UpdateResourceConfigResponse {
  /**
   * 模板ID
   */
  Id?: string
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * Head节点配置
   */
  Head?: HeadSpecDTO
  /**
   * Worker节点配置
   */
  Worker?: Array<WorkerSpecDTO>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 模板类型
   */
  Type?: string
  /**
   * 应用ID
   */
  AppId?: number
  /**
   * 创建者UIN
   */
  Uin?: string
  /**
   * 子用户UIN
   */
  SubAccountUin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 推理服务信息
 */
export interface InferenceServiceInfo {
  /**
   * <p>服务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>关联的模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: number
  /**
   * <p>关联的模型UID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>关联的模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>关联的模型版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelIdentifier?: string
  /**
   * <p>关联模型的类型（LLM / VLM / Embedding / Reranker / TTS / ASR / CV / NLP / ML）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>服务状态（Running/Stopped/Deploying/Failed）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务端点URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * <p>OpenAI 兼容统一入口 URL（通过 API-Key 路由，适用于 LLM/Embedding/Reranker）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedEndpointUrl?: string
  /**
   * <p>KServe V2 协议统一入口 URL（通过 API-Key + model name 路由，适用于 XGBoost 等传统 ML 模型）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedV2EndpointUrl?: string
  /**
   * <p>应用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>主账号UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>部署数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentCount?: number
  /**
   * <p>是否存在至少一个运行中的部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRunningDeployment?: boolean
  /**
   * <p>Ray Dashboard 访问地址（通过 Ingress 代理）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RayDashboardUrl?: string
  /**
   * <p>是否启用 API-Key 鉴权</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthEnabled?: boolean
  /**
   * <p>是否强制开启 API-Key 鉴权（生产环境为 true，不允许关闭）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthForceEnabled?: boolean
  /**
   * <p>是否跳过 TLS 证书验证（自签证书场景，前端 curl 命令需加 -k 参数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipTlsVerify?: boolean
  /**
   * <p>运行中部署的 GPU 资源汇总</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuResourceSummary?: Array<GpuSummaryItem>
  /**
   * <p>子账号UIN（实际操作者）</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行中部署的 CPU 资源汇总</p>
   */
  CpuResourceSummary?: CpuSummaryItem
  /**
   * <p>资源配置（JSON 字符串，取自第一个部署）</p>
   */
  ResourceConfig?: string
}

/**
 * UpdateJobSpec请求参数结构体
 */
export interface UpdateJobSpecRequest {
  /**
   * <p>配置ID</p>
   */
  SpecId: string
  /**
   * <p>入口命令</p>
   */
  Entrypoint: string
  /**
   * <p>配置名称</p>
   */
  Name?: string
  /**
   * <p>配置描述</p>
   */
  Description?: string
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像拉取类型（Builtin: 内置, Custom: 自定义）</p>
   */
  ImagePullType?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置(JSON)</p>
   */
  ResourceConfig?: string
  /**
   * <p>运行时环境配置(JSON)</p>
   */
  RuntimeEnv?: string
  /**
   * <p>存储卷和挂载卷配置(JSON)</p>
   */
  Catalog?: string
  /**
   * <p>弹性伸缩配置(JSON)</p>
   */
  AutoscalerOptions?: string
  /**
   * <p>默认资源分区ID</p>
   */
  ResourcePartitionId?: string
  /**
   * <p>资源配置模板ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>默认队列名称</p>
   */
  Queue?: string
  /**
   * <p>作业包URL</p>
   */
  JobPackage?: string
  /**
   * <p>作业包名称</p>
   */
  JobPackageName?: string
  /**
   * <p>作业包来源类型（Local: 本地上传, Cos: 用户自有 COS 桶地址）；缺省时按 Local 处理</p>
   */
  JobPackageSource?: string
  /**
   * <p>高级参数json</p>
   */
  AdvancedOptions?: string
  /**
   * <p>默认计算组名称（与 ClusterId 互斥；与老字段 ClusterGroup 等价，新调用方优先使用 GroupId）</p>
   */
  GroupId?: string
  /**
   * <p>默认集群 ID（与 GroupId 互斥，同时非空将返回 InvalidParameter.ClusterAndGroupConflict）</p>
   */
  ClusterId?: string
  /**
   * <p>作业优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>集群分派策略</p><p>枚举值：</p><ul><li>RANDOM： 随机分配</li></ul>
   */
  DispatchStrategy?: string
}

/**
 * ListRayClusterJobs返回参数结构体
 */
export interface ListRayClusterJobsResponse {
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 每页数量
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 该集群下的Ray作业列表
   */
  Items?: Array<RayJobSubmitEntity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStandardEngineResourceGroupConfigInfo请求参数结构体
 */
export interface DescribeStandardEngineResourceGroupConfigInfoRequest {
  /**
   * 排序字段
   */
  SortBy?: string
  /**
   * 升序，降序
   */
  Sorting?: string
  /**
   * 过滤条件可选，engine-resource-group-id--引擎资源组ID，engine-id---引擎ID
   */
  Filters?: Array<Filter>
  /**
   * 数据条数，默认10
   */
  Limit?: number
  /**
   * 偏移量，默认0
   */
  Offset?: number
}

/**
 * ListExampleCategories返回参数结构体
 */
export interface ListExampleCategoriesResponse {
  /**
   * <p>总记录数</p>
   */
  Total?: number
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>总页数</p>
   */
  TotalPages?: number
  /**
   * <p>分类列表</p>
   */
  Items?: Array<ExampleCategories>
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
   */
  ProgressDetail?: string
  /**
   * 任务结束时间
   */
  UpdateTime?: string
  /**
   * 计算资源id
   */
  DataEngineId?: string
  /**
   * 执行sql的子uin
   */
  OperateUin?: string
  /**
   * 计算资源名字
   */
  DataEngineName?: string
  /**
   * 导入类型是本地导入还是cos
   */
  InputType?: string
  /**
   * 导入配置
   */
  InputConf?: string
  /**
   * 数据条数
   */
  DataNumber?: number
  /**
   * 查询数据能不能下载
   */
  CanDownload?: boolean
  /**
   * 用户别名
   */
  UserAlias?: string
  /**
   * spark应用作业名
   */
  SparkJobName?: string
  /**
   * spark应用作业Id
   */
  SparkJobId?: string
  /**
   * spark应用入口jar文件
   */
  SparkJobFile?: string
  /**
   * spark ui url
   */
  UiUrl?: string
  /**
   * 任务耗时，单位： ms
   */
  TotalTime?: number
  /**
   * spark app job执行task的程序入口参数
   */
  CmdArgs?: string
  /**
   * 集群镜像大版本名称
   */
  ImageVersion?: string
  /**
   * driver规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
   */
  DriverSize?: string
  /**
   * executor规格：small,medium,large,xlarge；内存型(引擎类型)：m.small,m.medium,m.large,m.xlarge
   */
  ExecutorSize?: string
  /**
   * 指定executor数量，最小值为1，最大值小于集群规格
   */
  ExecutorNums?: number
  /**
   * 指定executor max数量（动态配置场景下），最小值为1，最大值小于集群规格（当ExecutorMaxNumbers小于ExecutorNums时，改值设定为ExecutorNums）
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
   */
  ResultFormat?: string
  /**
   * 引擎类型，SparkSQL：SparkSQL 引擎；SparkBatch：Spark作业引擎；PrestoSQL：Presto引擎
   */
  EngineTypeDetail?: string
  /**
   * spark引擎资源组名称
   */
  ResourceGroupName?: string
  /**
   * 任务执行耗时
   */
  JobTimeSum?: number
}

/**
 * 操作资源组，返回的操作失败信息
 */
export interface OperateEngineResourceGroupFailMessage {
  /**
   * 引擎资源组名称
   */
  EngineResourceGroupName?: string
  /**
   * 操作失败的提示信息
   */
  FailMessage?: string
}

/**
 * GetRayJobHistory请求参数结构体
 */
export interface GetRayJobHistoryRequest {
  /**
   * ray-jobID
   */
  Id: string
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
}

/**
 * DescribeStoreLocation返回参数结构体
 */
export interface DescribeStoreLocationResponse {
  /**
   * 返回用户设置的结果存储位置路径，如果未设置则返回空字符串：""
   */
  StoreLocation?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTCLakeMetaInstance返回参数结构体
 */
export interface DescribeTCLakeMetaInstanceResponse {
  /**
   * <p>开通状态</p><p>枚举值：</p><ul><li>Running： 开通成功</li></ul>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInferenceService返回参数结构体
 */
export interface CreateInferenceServiceResponse {
  /**
   * <p>服务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>关联的模型ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: number
  /**
   * <p>关联的模型UID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelUid?: string
  /**
   * <p>关联的模型名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * <p>关联的模型版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelVersion?: string
  /**
   * <p>模型标识符（OpenAI 兼容 API 中的 model 字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelIdentifier?: string
  /**
   * <p>关联模型的类型（LLM / VLM / Embedding / Reranker / TTS / ASR / CV / NLP / ML）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelType?: string
  /**
   * <p>服务状态（Running/Stopped/Deploying/Failed）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>服务端点URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * <p>OpenAI 兼容统一入口 URL（通过 API-Key 路由，适用于 LLM/Embedding/Reranker）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedEndpointUrl?: string
  /**
   * <p>KServe V2 协议统一入口 URL（通过 API-Key + model name 路由，适用于 XGBoost 等传统 ML 模型）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedV2EndpointUrl?: string
  /**
   * <p>ray head 是否开启高可用</p>
   */
  HeadHighAvailabilityEnabled?: boolean
  /**
   * <p>应用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>主账号UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>创建时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>更新时间（Unix 时间戳，毫秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>部署数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentCount?: number
  /**
   * <p>是否存在至少一个运行中的部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRunningDeployment?: boolean
  /**
   * <p>是否启用 API-Key 鉴权</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthEnabled?: boolean
  /**
   * <p>是否强制开启 API-Key 鉴权（生产环境为 true，不允许关闭）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthForceEnabled?: boolean
  /**
   * <p>是否跳过 TLS 证书验证（自签证书场景，前端 curl 命令需加 -k 参数）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipTlsVerify?: boolean
  /**
   * <p>API Key 绑定结果（success 表示成功，其他为错误信息）</p>
   */
  ApiKeyBindMessage?: string
  /**
   * <p>子账号UIN（实际操作者）</p>
   */
  SubAccountUin?: string
  /**
   * <p>运行中部署的 CPU 资源汇总</p>
   */
  CpuResourceSummary?: CpuSummaryItem
  /**
   * <p>资源配置（JSON 字符串，取自第一个部署）</p>
   */
  ResourceConfig?: string
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
   */
  SearchAfter?: string
  /**
   * 返回的数据
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateInferenceModel返回参数结构体
 */
export interface UpdateInferenceModelResponse {
  /**
   * <p>推理模型ID</p>
   */
  ModelId?: string
  /**
   * <p>推理模型UID</p>
   */
  ModelUid?: string
  /**
   * <p>模型名称</p>
   */
  Name?: string
  /**
   * <p>模型提供方</p>
   */
  Provider?: string
  /**
   * <p>模型描述</p>
   */
  Description?: string
  /**
   * <p>模型类型</p>
   */
  ModelType?: string
  /**
   * <p>模型参数量</p>
   */
  ParameterSize?: string
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>最新版本号</p>
   */
  LatestVersion?: string
  /**
   * <p>版本总数</p>
   */
  VersionCount?: number
  /**
   * <p>关联的推理服务数量</p>
   */
  ServiceCount?: number
  /**
   * <p>是否有存储</p>
   */
  HasStorage?: boolean
  /**
   * <p>是否使用用户自带存储桶</p>
   */
  HasCustomStorage?: boolean
  /**
   * <p>存储后端类型</p>
   */
  StorageType?: string
  /**
   * <p>是否内置模型</p>
   */
  BuiltIn?: boolean
  /**
   * <p>任务类型列表</p>
   */
  Tasks?: Array<string>
  /**
   * <p>APPID</p>
   */
  AppId?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>SUB UIN</p>
   */
  SubAccountUin?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 代理用户，默认为root
   */
  ProxyUser?: string
  /**
   * 指定的Session超时时间，单位秒，默认3600秒
   */
  TimeoutInSecond?: number
  /**
   * Spark任务返回的AppId
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
   */
  SparkUiUrl?: string
  /**
   * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于ExecutorNumbers
   */
  ExecutorMaxNumbers?: number
  /**
   * session类型，group：资源组下session independent：独立资源session， 不依赖资源组
   */
  SessionType?: string
  /**
   * 引擎id
   */
  DataEngineId?: string
  /**
   * 资源组id
   */
  ResourceGroupId?: string
  /**
   * 资源组名称
   */
  ResourceGroupName?: string
  /**
   * session，pod大小
   */
  PodSize?: number
  /**
   * pod数量
   */
  PodNumbers?: number
  /**
   * spark app名称
   */
  SparkAppName?: string
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
   * <p>列名称，不区分大小写，最大支持25个字符。</p>
   */
  Name: string
  /**
   * <p>string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array|map|struct|uniontype</p>
   */
  Type: string
  /**
   * <p>对该类的注释。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * <p>表示整个 numeric 的长度</p>
   */
  Precision?: number
  /**
   * <p>表示小数部分的长度</p>
   */
  Scale?: number
  /**
   * <p>是否为null</p>
   */
  Nullable?: string
  /**
   * <p>字段位置，小的在前</p>
   */
  Position?: number
  /**
   * <p>字段创建时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  CreateTime?: string
  /**
   * <p>字段修改时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  ModifiedTime?: string
  /**
   * <p>是否为分区字段</p>
   */
  IsPartition?: boolean
  /**
   * <p>数据脱敏策略信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataMaskStrategyInfo?: DataMaskStrategyInfo
  /**
   * <p>数据字段说明</p>
   */
  TypeText?: string
}

/**
 * 用户信息集合
 */
export interface Users {
  /**
   * 用户信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSet?: Array<UserMessage>
  /**
   * 用户总数
   */
  TotalCount?: number
}

/**
 * DescribeUDFPolicy请求参数结构体
 */
export interface DescribeUDFPolicyRequest {
  /**
   * udf名称
   */
  Name: string
  /**
   * 数据库名(全局UDF：global-function)
   */
  DatabaseName: string
  /**
   * 数据目录名
   */
  CatalogName: string
}

/**
 * ListJobSpecs请求参数结构体
 */
export interface ListJobSpecsRequest {
  /**
   * <p>页数</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>创建时间范围 - 开始时间（时间戳（毫秒））</p><p>单位：ms</p>
   */
  StartTime?: number
  /**
   * <p>创建时间范围 - 结束时间（时间戳（毫秒））</p><p>单位：ms</p>
   */
  EndTime?: number
  /**
   * <p>排序字段列表</p>
   */
  SortFields?: Array<SortField>
}

/**
 * 筛选条件定义
 */
export interface Filter {
  /**
   * 筛选字段名，对应实体属性名（驼峰命名）
   */
  Name?: string
  /**
   * 筛选操作符：EQ/NE/GT/GE/LT/LE/LIKE/IN，默认EQ
   */
  Operator?: string
  /**
   * 筛选值列表，EQ/NE/GT/GE/LT/LE/LIKE取第一个值，IN使用完整列表
   */
  Values?: Array<string>
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
 * GetRayJobYaml请求参数结构体
 */
export interface GetRayJobYamlRequest {
  /**
   * 任务ID
   */
  Id: string
}

/**
 * GetRayJobEventLog返回参数结构体
 */
export interface GetRayJobEventLogResponse {
  /**
   * 事件总数
   */
  TotalCount?: number
  /**
   * 事件列表
   */
  Events?: Array<EventLogItem>
  /**
   * 当前页码（从1开始）
   */
  Page?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPages?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserVpcConnection返回参数结构体
 */
export interface DescribeUserVpcConnectionResponse {
  /**
   * 用户vpc连接信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVpcConnectionInfos?: Array<UserVpcConnectionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetModelFiles请求参数结构体
 */
export interface GetModelFilesRequest {
  /**
   * <p>模型UID</p>
   */
  ModelUid: string
  /**
   * <p>模型版本</p>
   */
  ModelVersion?: string
}

/**
 * 文件/目录节点
 */
export interface FileNode {
  /**
   * <p>文件/目录名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>节点类型：file 或 directory</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>文件大小（字节），目录为 null</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * <p>子节点列表（仅目录有效）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<FileNode>
  /**
   * <p>文件最后修改时间（毫秒时间戳）</p><p>单位：ms</p>
   */
  LastModifyTime?: number
}

/**
 * 案例标签返回值
 */
export interface ExampleTag {
  /**
   * <p>案例标签名称</p>
   */
  Tag?: string
  /**
   * <p>标签数量</p>
   */
  Count?: number
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
 * RegisterThirdPartyAccessUser请求参数结构体
 */
export type RegisterThirdPartyAccessUserRequest = null

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
 * ModifyLabPriority请求参数结构体
 */
export interface ModifyLabPriorityRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority: number
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
 * DescribeFlowList请求参数结构体
 */
export interface DescribeFlowListRequest {
  /**
   * 分区编码
   */
  PartitionCode: string
  /**
   * 页码，从1开始，默认为1
   */
  Page?: number
  /**
   * 每页返回数量，默认为10
   */
  PageSize?: number
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
 * StopLab请求参数结构体
 */
export interface StopLabRequest {
  /**
   * <p>工作区ID</p>
   */
  Id: string
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
 * ParallelKeyMapping 用于 inference engine 并行配置参数 key 映射
 */
export interface ParallelKeyMapping {
  /**
   * <p>并行类型</p>
   */
  Type?: string
  /**
   * <p>该并行类型对应的参数 key 列表</p>
   */
  Keys?: Array<string>
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
   */
  Location?: string
}

/**
 * CancelTasks返回参数结构体
 */
export interface CancelTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件日志项
 */
export interface EventLogItem {
  /**
   * 事件时间（Unix 时间戳，秒级）
   */
  EventTime?: number
  /**
   * 组件名称
   */
  Component?: string
  /**
   * 日志级别（INFO/WARN/ERROR）
   */
  Level?: string
  /**
   * 事件内容
   */
  Message?: string
}

/**
 * InitializeTCLake返回参数结构体
 */
export interface InitializeTCLakeResponse {
  /**
   * <p>实例Id</p>
   */
  InstanceId?: string
  /**
   * <p>是否成功</p>
   */
  IsSuccess?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 默认 false, 为 true 时仅列出具有洞察 listener 的引擎
   */
  ListHasListener?: boolean
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
   */
  CidrId?: string
  /**
   * 子网网段
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
 * GetLabServiceUrls请求参数结构体
 */
export interface GetLabServiceUrlsRequest {
  /**
   * <p>数据实验室ID</p>
   */
  Id: string
}

/**
 * UpdateEngineResourceGroupNetworkConfigInfo返回参数结构体
 */
export interface UpdateEngineResourceGroupNetworkConfigInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRayJob返回参数结构体
 */
export interface DeleteRayJobResponse {
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
 * CreateLab请求参数结构体
 */
export interface CreateLabRequest {
  /**
   * <p>数据实验室名称</p>
   */
  Name: string
  /**
   * <p>Lab 镜像地址（必填，用于开发工具如 Jupyter/VSCode/WebShell）。前端在&quot;内置 / 自定义&quot;两态中选择此值；当 Image 字段未显式传入时，后端会基于该字段按 R1（镜像表命中）/R2（同值 fallback）派生 Ray 集群镜像。</p>
   */
  LabImage: string
  /**
   * <p>资源分区ID</p>
   */
  ResourcePartitionId: string
  /**
   * <p>队列名称</p>
   */
  Queue: string
  /**
   * <p>数据实验室描述</p>
   */
  Description?: string
  /**
   * <p>Ray 集群镜像地址（可选，OpenAPI/SDK 高级控制入口）。前端不再传递此字段；为空时后端按 R1（镜像表查询命中）→ R2（同值 fallback）顺序自动派生。非空时直接作为 Ray 集群镜像，跳过派生（EXPLICIT），且后端不校验其与 LabImage 的兼容性。</p>
   */
  Image?: string
  /**
   * <p>镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  ImagePullPolicy?: string
  /**
   * <p>资源配置</p>
   */
  ResourceConfig?: string
  /**
   * <p>资源配置ID</p>
   */
  ResourceConfigId?: string
  /**
   * <p>存储卷和挂载卷配置</p>
   */
  Catalog?: string
  /**
   * <p>计算组 ID</p>
   */
  GroupId?: string
  /**
   * <p>服务类型列表(VSCODE, JUPYTER, WEBSHELL)，不填则使用默认配置</p>
   */
  ServiceTypes?: Array<string>
  /**
   * <p>案例ID，当 startMode=EXAMPLE 时必填</p>
   */
  ExampleId?: string
  /**
   * <p>案例代码包地址，当 startMode=EXAMPLE 时填写</p>
   */
  CodeArchiveUrl?: string
  /**
   * <p>Lab sidecar 镜像拉取策略（Always, IfNotPresent, Never）</p>
   */
  LabImagePullPolicy?: string
  /**
   * <p>高级参数（扁平 Key-Value 的 JSON 字符串），Key 以 spec. 开头，按 RayCluster CRD 下钻；详见 ADVANCED_CLUSTER_OPTIONS_DESIGN.md</p>
   */
  AdvancedOptions?: string
  /**
   * <p>优先级（1-9，数字越大优先级越高）</p>
   */
  Priority?: number
  /**
   * <p>标签列表（TagKey-TagValue），用于将资源与腾讯云标签系统中的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>持久化工作目录配置（可选）。启用后将 COS/CFS 指定路径挂载到容器内 /workspace 工作目录，与现有 Catalog 的卷配置互斥（不允许同时在 Catalog 中显式声明 MountPath=/workspace）。</p>
   */
  PersistentWorkDir?: PersistentWorkDir
  /**
   * <p>是否开启token认证</p>
   */
  EnableToken?: boolean
  /**
   * <p>镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  ImagePullType?: string
  /**
   * <p>Lab sidecar 镜像拉取类型（BuiltIn: 内置, Custom: 自定义-TCR, CustomCcr: 自定义-CCR）</p>
   */
  LabImagePullType?: string
}

/**
 * 资源规格
 */
export interface ResourceSpec {
  /**
   * <p>资源包类型</p>
   */
  ResourceType?: string
  /**
   * <p>机型，例如X40/T20，仅GU有值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * <p>四层计费项</p><p>枚举值：</p><ul><li>sv_dlc_standard_cu_standard_cu： 标准型cpu，最小单位32</li><li>sv_dlc_high_memory_cu_high_memory_cu： 高内存型cpu，最小单位32</li><li>sv_dlc_gn7_gn75xlarge80： T4，最小单位1</li><li>sv_dlc_gn10xp_gn10xp2xlarge40： V100，最小单位1</li></ul><p>若您想要了解更多的计费规格和产品细节，欢迎联系我们。</p>
   */
  BillingItem?: string
  /**
   * <p>规格描述</p>
   */
  SpecDesc?: string
  /**
   * <p>规格，格式为 {gpu}:{cpu}:{mem}:{vram}</p>
   */
  Spec?: string
  /**
   * <p>GPU类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GpuType?: string
  /**
   * <p>单个物理节点上该计费项对应的最大 GPU 卡数，CPU / HM_CPU 恒为 0</p>
   */
  MaxCardPerNode?: number
}

/**
 * CreateSparkAppForTDLC请求参数结构体
 */
export interface CreateSparkAppForTDLCRequest {
  /**
   * <p>spark作业名</p>
   */
  AppName: string
  /**
   * <p>spark作业类型，1代表spark jar作业，2代表spark streaming作业</p>
   */
  AppType: number
  /**
   * <p>执行spark作业的数据引擎名称</p>
   */
  DataEngine: string
  /**
   * <p>spark作业程序包文件路径</p>
   */
  AppFile: string
  /**
   * <p>数据访问策略，CAM Role arn，控制台通过数据作业—&gt;作业配置获取，SDK通过DescribeUserRoles接口获取对应的值；</p>
   */
  RoleArn: number
  /**
   * <p>指定的Driver规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）</p>
   */
  AppDriverSize: string
  /**
   * <p>指定的Executor规格，当前支持：small（默认，1cu）、medium（2cu）、large（4cu）、xlarge（8cu）</p>
   */
  AppExecutorSize: string
  /**
   * <p>spark作业executor个数</p>
   */
  AppExecutorNums: number
  /**
   * <p>该字段已下线，请使用字段Datasource</p>
   */
  Eni?: string
  /**
   * <p>spark作业程序包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocal?: string
  /**
   * <p>spark作业主类</p>
   */
  MainClass?: string
  /**
   * <p>spark配置，以换行符分隔</p>
   */
  AppConf?: string
  /**
   * <p>spark 作业依赖jar包是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalJars?: string
  /**
   * <p>spark 作业依赖jar包（--jars），以逗号分隔</p>
   */
  AppJars?: string
  /**
   * <p>spark作业依赖文件资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalFiles?: string
  /**
   * <p>spark作业依赖文件资源（--files）（非jar、zip），以逗号分隔</p>
   */
  AppFiles?: string
  /**
   * <p>spark作业程序入参，空格分割</p>
   */
  CmdArgs?: string
  /**
   * <p>最大重试次数，只对spark流任务生效</p>
   */
  MaxRetries?: number
  /**
   * <p>数据源名称</p>
   */
  DataSource?: string
  /**
   * <p>pyspark：依赖上传方式，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalPythonFiles?: string
  /**
   * <p>pyspark作业依赖python资源（--py-files），支持py/zip/egg等归档格式，多文件以逗号分隔</p>
   */
  AppPythonFiles?: string
  /**
   * <p>spark作业依赖archives资源是否本地上传，cos：存放与cos，lakefs：本地上传（控制台使用，该方式不支持直接接口调用）</p>
   */
  IsLocalArchives?: string
  /**
   * <p>spark作业依赖archives资源（--archives），支持tar.gz/tgz/tar等归档格式，以逗号分隔</p>
   */
  AppArchives?: string
  /**
   * <p>Spark Image 版本号</p>
   */
  SparkImage?: string
  /**
   * <p>Spark Image 版本名称</p>
   */
  SparkImageVersion?: string
  /**
   * <p>指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums</p>
   */
  AppExecutorMaxNumbers?: number
  /**
   * <p>关联dlc查询脚本id</p>
   */
  SessionId?: string
  /**
   * <p>任务资源配置是否继承集群模板，0（默认）不继承，1：继承</p>
   */
  IsInherit?: number
  /**
   * <p>是否使用session脚本的sql运行任务：false：否，true：是</p>
   */
  IsSessionStarted?: boolean
  /**
   * <p>依赖包信息</p>
   */
  DependencyPackages?: Array<DependencyPackage>
}

/**
 * GetRayClusterPodYaml返回参数结构体
 */
export interface GetRayClusterPodYamlResponse {
  /**
   * <p>Pod YAML</p>
   */
  Yaml?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流程活动详情
 */
export interface FlowActivityDetail {
  /**
   * <p>活动编码</p>
   */
  ActivityCode?: string
  /**
   * <p>活动状态</p>
   */
  Status?: number
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>耗时（秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
}

/**
 * DescribeResourceGroupUsageInfo请求参数结构体
 */
export interface DescribeResourceGroupUsageInfoRequest {
  /**
   * 资源组ID
   */
  SessionId: string
}

/**
 * 可售卖地域信息
 */
export interface RegionInfo {
  /**
   * <p>地域编码，如 ap-chongqing</p>
   */
  RegionCode?: string
  /**
   * <p>地域名称，如 重庆</p>
   */
  RegionName?: string
  /**
   * <p>地域状态：AVAILABLE-可用，UNAVAILABLE-不可用</p>
   */
  Status?: string
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
 * 数据脱敏策略权限对象
 */
export interface DataMaskStrategyPolicy {
  /**
   * 数据脱敏权限对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyInfo?: Policy
  /**
   * 数据脱敏策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataMaskStrategyId?: string
  /**
   * 绑定字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnType?: string
}

/**
 * ModifyPartitionQueue返回参数结构体
 */
export interface ModifyPartitionQueueResponse {
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
 * 推理引擎具体信息
 */
export interface InferenceEngineInfo {
  /**
   * <p>引擎标识符</p>
   */
  EngineId?: string
  /**
   * <p>引擎名称</p>
   */
  Name?: string
  /**
   * <p>引擎版本</p>
   */
  Version?: string
  /**
   * <p>引擎描述</p>
   */
  Description?: string
  /**
   * <p>标签列表</p>
   */
  Tags?: Array<string>
  /**
   * <p>支持的模型类型</p>
   */
  ModelTypes?: Array<string>
  /**
   * <p>是否独占，如果为 true，表示自定义模型看不到这个推理引擎，通常用于自研内置模型</p>
   */
  Exclusive?: boolean
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
  /**
   * <p>引擎能力声明</p>
   */
  Capabilities?: EngineCapabilities
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
 * 数据治理资源配置项
 */
export interface ResourceConf {
  /**
   * 当为TCLake优化资源时，优化任务的并行度
   */
  Parallelism?: number
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
 * DeleteLab请求参数结构体
 */
export interface DeleteLabRequest {
  /**
   * <p>工作区ID</p>
   */
  Id: string
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
 * GetJobSpec请求参数结构体
 */
export interface GetJobSpecRequest {
  /**
   * <p>配置ID</p>
   */
  SpecId: string
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
 * DescribeMCPTaskResult请求参数结构体
 */
export interface DescribeMCPTaskResultRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: string
}

/**
 * CheckResourceName返回参数结构体
 */
export interface CheckResourceNameResponse {
  /**
   * 校验是否通过
   */
  IsValid?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeEngineNodeSpec返回参数结构体
 */
export interface DescribeEngineNodeSpecResponse {
  /**
   * driver可用的规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSpec?: Array<SpecInfo>
  /**
   * executor可用的规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSpec?: Array<SpecInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachDataMaskPolicy返回参数结构体
 */
export interface AttachDataMaskPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserVpcConnection请求参数结构体
 */
export interface CreateUserVpcConnectionRequest {
  /**
   * 用户vpcid
   */
  UserVpcId: string
  /**
   * 用户子网
   */
  UserSubnetId: string
  /**
   * 用户终端节点名称
   */
  UserVpcEndpointName: string
  /**
   * 引擎网络ID
   */
  EngineNetworkId: string
  /**
   * 手动指定vip，不填自动分配子网下的一个ip
   */
  UserVpcEndpointVip?: string
}

/**
 * 用户部分信息
 */
export interface UserMessage {
  /**
   * 用户Id，和CAM侧子用户Uin匹配
   */
  UserId?: string
  /**
   * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDescription?: string
  /**
   * 当前用户的创建者
   */
  Creator?: string
  /**
   * 当前用户的创建时间，形如2021-07-28 16:19:32
   */
  CreateTime?: string
  /**
   * 用户别名
   */
  UserAlias?: string
  /**
   * 用户来源类型TencentAccount（普通腾讯云用户） / EntraAccount（微软用户）
   */
  AccountType?: string
}

/**
 * DescribeMCPTask请求参数结构体
 */
export interface DescribeMCPTaskRequest {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
}

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
 * UpdateClusterGroup返回参数结构体
 */
export interface UpdateClusterGroupResponse {
  /**
   * <p>集群组 ID</p>
   */
  Id?: string
  /**
   * <p>集群组名称</p>
   */
  Name?: string
  /**
   * <p>集群组描述</p>
   */
  Description?: string
  /**
   * <p>集群组配置</p>
   */
  Config?: string
  /**
   * <p>应用 ID（多租户）</p>
   */
  AppId?: number
  /**
   * <p>创建者主账号 UIN</p>
   */
  Uin?: string
  /**
   * <p>创建者子账号 UIN</p>
   */
  SubAccountUin?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: number
  /**
   * <p>是否已软删除</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deleted?: boolean
  /**
   * <p>删除时间（软删时写入，活跃记录为 null）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetLabServiceUrls返回参数结构体
 */
export interface GetLabServiceUrlsResponse {
  /**
   * <p>数据实验室服务入口（服务类型 -&gt; 访问地址）</p>
   */
  ServiceUrls?: Array<KVPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Iceberg表分区信息
 */
export interface IcebergTablePartition {
  /**
   * 分区信息名称
   */
  Partition?: string
  /**
   * 分区记录数
   */
  Records?: number
  /**
   * 分区数据文件数量
   */
  DataFileSize?: number
  /**
   * 分区数据文件存储量
   */
  DataFileStorage?: number
  /**
   * 分区创建时间
   */
  CreateTime?: string
  /**
   * 分区更新时间
   */
  UpdateTime?: string
  /**
   * 最后一次分区更新的快照ID
   */
  LastUpdateSnapshotId?: string
  /**
   * 分区的location
   */
  Location?: LocationInfo
}

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
   */
  Location?: string
  /**
   * 建库用户昵称
   */
  UserAlias?: string
  /**
   * 建库用户ID
   */
  UserSubUin?: string
  /**
   * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  GovernPolicy?: DataGovernPolicy
  /**
   * 数据库ID（无效字段）
   */
  DatabaseId?: string
  /**
   * 所属catalog名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogName?: string
  /**
   * 所属catalog 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogType?: string
  /**
   * 是否InformationSchema
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsInformationSchema?: boolean
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
 * ListExamples请求参数结构体
 */
export interface ListExamplesRequest {
  /**
   * <p>分类</p>
   */
  Category?: string
  /**
   * <p>关键词</p>
   */
  Keyword?: string
  /**
   * <p>标签数组，多个标签 AND 关系；与 Category/Keyword 之间也是 AND</p>
   */
  Tags?: Array<string>
  /**
   * <p>DEFAULT（sort_order ASC, create_time DESC）/ POPULARITY（按热度降序），非法值降级为 DEFAULT</p>
   */
  OrderBy?: string
  /**
   * <p>当前页码（从1开始）</p>
   */
  Page?: number
  /**
   * <p>页数</p>
   */
  PageSize?: number
}

/**
 * 排序字段定义
 */
export interface SortField {
  /**
   * 排序字段名，对应实体属性名（驼峰命名）
   */
  Field?: string
  /**
   * 排序方向：ASC（升序）或DESC（降序），默认ASC
   */
  Order?: string
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
