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
 * 复制作业单条明细结果
 */
export type CopyJobResult = null

/**
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
  /**
   * 资源位置
   */
  ResourceLoc: ResourceLoc

  /**
   * 资源类型。目前只支持 JAR，取值为 1
   */
  ResourceType: number

  /**
   * 资源描述
   */
  Remark?: string

  /**
   * 资源名称
   */
  Name?: string

  /**
   * 资源版本描述
   */
  ResourceConfigRemark?: string

  /**
   * 目录ID
   */
  FolderId?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CheckSavepoint请求参数结构体
 */
export interface CheckSavepointRequest {
  /**
   * 作业 id
   */
  JobId: string

  /**
   * 快照资源 id
   */
  SerialId: string

  /**
   * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
   */
  RecordType: number

  /**
   * 快照路径，目前只支持 cos 路径
   */
  SavepointPath: string

  /**
   * 工作空间 id
   */
  WorkSpaceId: string
}

/**
 * CreateJob请求参数结构体
 */
export interface CreateJobRequest {
  /**
   * 作业名称，允许输入长度小于等于50个字符的中文、英文、数字、-（横线）、_（下划线）、.（点），且符号必须半角字符。注意作业名不能和现有作业同名
   */
  Name: string

  /**
   * 作业的类型，1 表示 SQL 作业，2 表示 JAR 作业
   */
  JobType: number

  /**
   * 集群的类型，1 表示共享集群，2 表示独享集群
   */
  ClusterType: number

  /**
   * 当 ClusterType=2 时，必选，用来指定该作业提交的独享集群 ID
   */
  ClusterId?: string

  /**
   * 设置每 CU 的内存规格，单位为 GB，支持 2、4、8、16（需申请开通白名单后使用）。默认为 4，即 1 CU 对应 4 GB 的运行内存
   */
  CuMem?: number

  /**
   * 作业的备注信息，可以随意设置
   */
  Remark?: string

  /**
   * 作业名所属文件夹ID，根目录为"root"
   */
  FolderId?: string

  /**
   * 作业运行的Flink版本
   */
  FlinkVersion?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * JobConfig引用资源信息
 */
export interface ResourceRefDetail {
  /**
   * 资源id
   */
  ResourceId: string

  /**
   * 资源版本，-1表示使用最新版本
   */
  Version: number

  /**
   * 资源名称
   */
  Name: string

  /**
   * 1: 主资源
   */
  Type: number

  /**
   * 1: 系统内置资源
   */
  SystemProvide: number
}

/**
 * StopJobs请求参数结构体
 */
export interface StopJobsRequest {
  /**
   * 批量停止作业的描述信息
   */
  StopJobDescriptions: Array<StopJobDescription>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CreateJob返回参数结构体
 */
export interface CreateJobResponse {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源位置描述
 */
export interface ResourceLoc {
  /**
   * 资源位置的存储类型，目前只支持1:COS
   */
  StorageType: number

  /**
   * 描述资源位置的json
   */
  Param: ResourceLocParam
}

/**
 * RunJobs请求参数结构体
 */
export interface RunJobsRequest {
  /**
   * 批量启动作业的描述信息
   */
  RunJobDescriptions: Array<RunJobDescription>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * 云联网描述信息
 */
export interface CCN {
  /**
   * 私有网络 ID
   */
  VpcId: string

  /**
   * 子网 ID
   */
  SubnetId: string

  /**
   * 云联网 ID，如 ccn-rahigzjd
   */
  CcnId: string
}

/**
 * DeleteJobs请求参数结构体
 */
export interface DeleteJobsRequest {
  /**
   * 作业Id列表
   */
  JobIds: Array<string>

  /**
   * 工作空间Id
   */
  WorkSpaceId?: string
}

/**
 * 停止作业的描述信息
 */
export interface StopJobDescription {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 停止类型，1 停止 2 暂停
   */
  StopType: number
}

/**
 * CreateFolder请求参数结构体
 */
export interface CreateFolderRequest {
  /**
   * 新建文件夹名
   */
  FolderName: string

  /**
   * 新建文件夹的父目录ID
   */
  ParentId: string

  /**
   * 文件夹类型，0是任务文件夹，1是依赖文件夹
   */
  FolderType?: number

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * ModifyJob返回参数结构体
 */
export interface ModifyJobResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJobConfig返回参数结构体
 */
export interface CreateJobConfigResponse {
  /**
   * 作业配置版本号
   */
  Version: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateResourceConfig返回参数结构体
 */
export interface CreateResourceConfigResponse {
  /**
   * 资源版本ID
   */
  Version: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJobConfig请求参数结构体
 */
export interface CreateJobConfigRequest {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 主类
   */
  EntrypointClass?: string

  /**
   * 主类入参
   */
  ProgramArgs?: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 资源引用数组
   */
  ResourceRefs?: Array<ResourceRef>

  /**
   * 作业默认并行度
   */
  DefaultParallelism?: number

  /**
   * 系统参数
   */
  Properties?: Array<Property>

  /**
   * 1: 作业配置达到上限之后，自动删除可删除的最早版本
   */
  AutoDelete?: number

  /**
   * 作业使用的 COS 存储桶名
   */
  COSBucket?: string

  /**
   * 是否采集作业日志
   */
  LogCollect?: boolean

  /**
   * JobManager规格
   */
  JobManagerSpec?: number

  /**
   * TaskManager规格
   */
  TaskManagerSpec?: number

  /**
   * CLS日志集ID
   */
  ClsLogsetId?: string

  /**
   * CLS日志主题ID
   */
  ClsTopicId?: string

  /**
   * 日志采集类型 2：CLS；3：COS
   */
  LogCollectType?: number

  /**
   * pyflink作业运行时使用的python版本
   */
  PythonVersion?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string

  /**
   * 日志级别
   */
  LogLevel?: string

  /**
   * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
   */
  AutoRecover?: number
}

/**
 * CreateResourceConfig请求参数结构体
 */
export interface CreateResourceConfigRequest {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 位置信息
   */
  ResourceLoc: ResourceLoc

  /**
   * 资源描述信息
   */
  Remark?: string

  /**
   * 1： 资源版本达到上限，自动删除最早可删除的版本
   */
  AutoDelete?: number

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeSystemResources返回参数结构体
 */
export interface DescribeSystemResourcesResponse {
  /**
   * 资源详细信息集合
   */
  ResourceSet: Array<SystemResourceItem>

  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群的版本相关信息
 */
export interface ClusterVersion {
  /**
      * 集群的Flink版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Flink: string

  /**
      * 集群支持的Flink版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  SupportedFlink: Array<string>
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 按照一个或者多个集群 ID 查询，每次请求的集群上限为 100
   */
  ClusterIds?: Array<string>

  /**
   * 偏移量，默认 0
   */
  Offset?: number

  /**
   * 请求的集群数量，默认 20，最大值 100
   */
  Limit?: number

  /**
   * 集群信息结果排序规则，1 按时间降序，2 按照时间升序，3  按照状态排序
   */
  OrderType?: number

  /**
   * 过滤规则
   */
  Filters?: Array<Filter>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeTreeJobs返回参数结构体
 */
export interface DescribeTreeJobsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTableConfig请求参数结构体
 */
export interface DeleteTableConfigRequest {
  /**
   * 作业ID
   */
  JobId: string

  /**
   * 调试作业ID
   */
  DebugId: number

  /**
   * 表名
   */
  TableName: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CopyJobs请求参数结构体
 */
export interface CopyJobsRequest {
  /**
   * 复制明细列表
   */
  JobItems: Array<CopyJobItem>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CopyJobs返回参数结构体
 */
export interface CopyJobsResponse {
  /**
      * 成功条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 失败条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailCount: number

  /**
      * 结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CopyJobsResults: Array<CopyJobResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述Savepoint信息
 */
export interface Savepoint {
  /**
      * 主键
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: number

  /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionId?: number

  /**
      * 状态 1: Active; 2: Expired; 3: InProgress; 4: Failed; 5: Timeout
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

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
      * 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  Path?: string

  /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size?: number

  /**
      * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordType?: number

  /**
      * 运行作业实例的顺序 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobRuntimeId?: number

  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 固定超时时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timeout?: number

  /**
      * 快照 serialId
注意：此字段可能返回 null，表示取不到有效值。
      */
  SerialId?: string

  /**
      * 耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeConsuming?: number

  /**
      * 快照路径状态 1：可用；2：不可用；
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathStatus?: number
}

/**
 * 系统资源返回值
 */
export interface SystemResourceItem {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源名称
   */
  Name: string

  /**
   * 资源类型。1 表示 JAR 包，目前只支持该值。
   */
  ResourceType: number

  /**
   * 资源备注
   */
  Remark: string

  /**
   * 资源所属地域
   */
  Region: string

  /**
   * 资源的最新版本
   */
  LatestResourceConfigVersion: number
}

/**
 * DescribeResourceRelatedJobs请求参数结构体
 */
export interface DescribeResourceRelatedJobsRequest {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 默认0;   1： 按照作业版本创建时间降序
   */
  DESCByJobConfigCreateTime?: number

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 分页大小，默认为20，最大值为100
   */
  Limit?: number

  /**
   * 资源版本号
   */
  ResourceConfigVersion?: number

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DeleteResources返回参数结构体
 */
export interface DeleteResourcesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTableConfig返回参数结构体
 */
export interface DeleteTableConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述资源配置的返回参数
 */
export interface ResourceConfigItem {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源类型
   */
  ResourceType: number

  /**
   * 资源所属地域
   */
  Region: string

  /**
   * 资源所属AppId
   */
  AppId: number

  /**
   * 主账号Uin
   */
  OwnerUin: string

  /**
   * 子账号Uin
   */
  CreatorUin: string

  /**
   * 资源位置描述
   */
  ResourceLoc: ResourceLoc

  /**
   * 资源创建时间
   */
  CreateTime: string

  /**
   * 资源版本
   */
  Version: number

  /**
   * 资源描述
   */
  Remark: string

  /**
      * 资源状态：0: 资源同步中，1:资源已就绪
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 关联作业个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefJobCount: number

  /**
      * 分状态统计关联作业数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefJobStatusCountSet?: Array<RefJobStatusCountItem>
}

/**
 * TriggerJobSavepoint返回参数结构体
 */
export interface TriggerJobSavepointResponse {
  /**
   * 是否成功
   */
  SavepointTrigger: boolean

  /**
      * 错误消息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMsg: string

  /**
      * 快照路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  FinalSavepointPath: string

  /**
      * 快照 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SavepointId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tag {
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
 * 树状结构资源列表对象
 */
export interface DescribeTreeResourcesRsp {
  /**
   * 父节点ID
   */
  ParentId?: string

  /**
   * 文件夹ID
   */
  Id?: string

  /**
   * 文件夹名称
   */
  Name?: string

  /**
      * 文件夹下资源数字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<TreeResourceItem>

  /**
      * 子节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  Children?: Array<DescribeTreeResourcesRsp>

  /**
      * 资源总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number
}

/**
 * DescribeResources请求参数结构体
 */
export interface DescribeResourcesRequest {
  /**
   * 需要查询的资源ID数组，数量不超过100个。如果填写了该参数则忽略Filters参数。
   */
  ResourceIds?: Array<string>

  /**
   * 偏移量，仅当设置 Limit 参数时有效
   */
  Offset?: number

  /**
   * 条数限制。如果不填，默认返回 20 条
   */
  Limit?: number

  /**
      * <li><strong>ResourceName</strong></li>
<p style="padding-left: 30px;">按照资源名字过滤，支持模糊过滤。传入的过滤名字不超过5个</p><p style="padding-left: 30px;">类型: String</p><p style="padding-left: 30px;">必选: 否</p>
      */
  Filters?: Array<Filter>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * 树状结构资源对象
 */
export interface TreeResourceItem {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
      * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
   * 资源类型
   */
  ResourceType: number

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * 目录ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderId: string
}

/**
 * 依赖作业分状态计数信息
 */
export interface RefJobStatusCountItem {
  /**
      * 作业状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobStatus?: number

  /**
      * 作业数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count?: number
}

/**
 * 资源参数描述
 */
export interface ResourceLocParam {
  /**
   * 资源bucket
   */
  Bucket: string

  /**
   * 资源路径
   */
  Path: string

  /**
      * 资源所在地域，如果不填，则使用Resource的Region
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: string
}

/**
 * 资源被Job 引用信息
 */
export interface ResourceRefJobInfo {
  /**
   * Job id
   */
  JobId: string

  /**
   * Job配置版本
   */
  JobConfigVersion: number

  /**
   * 资源版本
   */
  ResourceVersion: number
}

/**
 * DescribeJobConfigs请求参数结构体
 */
export interface DescribeJobConfigsRequest {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 作业配置版本
   */
  JobConfigVersions?: Array<number>

  /**
   * 偏移量，默认0
   */
  Offset?: number

  /**
   * 分页大小，默认20，最大100
   */
  Limit?: number

  /**
   * 过滤条件
   */
  Filters?: Array<Filter>

  /**
   * true 表示只展示草稿
   */
  OnlyDraft?: boolean

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CheckSavepoint返回参数结构体
 */
export interface CheckSavepointResponse {
  /**
   * 资源 id
   */
  SerialId: string

  /**
   * 1=可用，2=不可用
   */
  SavepointStatus: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceConfigs请求参数结构体
 */
export interface DeleteResourceConfigsRequest {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源版本数组
   */
  ResourceConfigVersions: Array<number>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeJobSavepoint返回参数结构体
 */
export interface DescribeJobSavepointResponse {
  /**
      * 快照列表总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNumber: number

  /**
      * 快照列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Savepoint: Array<Savepoint>

  /**
      * 进行中的快照列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunningSavepoint: Array<Savepoint>

  /**
      * 进行中的快照列表总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunningTotalNumber: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteJobs返回参数结构体
 */
export interface DeleteJobsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTreeResources返回参数结构体
 */
export interface DescribeTreeResourcesResponse {
  /**
      * 父节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentId?: string

  /**
      * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: string

  /**
      * 文件夹名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 文件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<TreeResourceItem>

  /**
      * 子目录列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Children?: Array<DescribeTreeResourcesRsp>

  /**
      * 资源总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunJobs返回参数结构体
 */
export interface RunJobsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询作业列表时的过滤器
 */
export interface Filter {
  /**
   * 要过滤的字段
   */
  Name: string

  /**
   * 字段的过滤值
   */
  Values: Array<string>
}

/**
 * DeleteResources请求参数结构体
 */
export interface DeleteResourcesRequest {
  /**
   * 待删除资源ID列表
   */
  ResourceIds: Array<string>

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
  /**
   * 作业总数
   */
  TotalCount: number

  /**
   * 作业列表
   */
  JobSet: Array<JobV1>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源详细描述
 */
export interface ResourceItem {
  /**
   * 资源ID
   */
  ResourceId?: string

  /**
   * 资源名称
   */
  Name?: string

  /**
   * 资源类型
   */
  ResourceType?: number

  /**
   * 资源位置
   */
  ResourceLoc?: ResourceLoc

  /**
   * 资源地域
   */
  Region?: string

  /**
   * 应用ID
   */
  AppId?: number

  /**
   * 主账号Uin
   */
  OwnerUin?: string

  /**
   * 子账号Uin
   */
  CreatorUin?: string

  /**
   * 资源创建时间
   */
  CreateTime?: string

  /**
   * 资源最后更新时间
   */
  UpdateTime?: string

  /**
   * 资源的资源版本ID
   */
  LatestResourceConfigVersion?: number

  /**
      * 资源备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark?: string

  /**
      * 版本个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionCount?: number

  /**
      * 关联作业数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefJobCount?: number

  /**
      * 作业运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsJobRun?: number

  /**
      * 文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName?: string

  /**
      * 工作空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkSpaceId?: number

  /**
      * 分状态统计关联作业数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefJobStatusCountSet?: Array<RefJobStatusCountItem>
}

/**
 * 空间和集群绑定关系
 */
export interface WorkSpaceClusterItem {
  /**
   * 集群 ID
   */
  ClusterGroupId: number

  /**
   * 集群 SerialId
   */
  ClusterGroupSerialId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId: string

  /**
   * 工作空间名称
   */
  WorkSpaceName: string

  /**
   * 绑定状态  2 绑定 1  解除绑定
   */
  Status: number

  /**
   * 项目ID
   */
  ProjectId: number

  /**
      * 项目ID string类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectIdStr: string
}

/**
 * StopJobs返回参数结构体
 */
export interface StopJobsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJobSavepoint请求参数结构体
 */
export interface DescribeJobSavepointRequest {
  /**
   * 作业 SerialId
   */
  JobId: string

  /**
   * 分页参数，单页总数
   */
  Limit: number

  /**
   * 分页参数，偏移量
   */
  Offset: number

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源版本
   */
  Version: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSystemResources请求参数结构体
 */
export interface DescribeSystemResourcesRequest {
  /**
   * 需要查询的资源ID数组
   */
  ResourceIds?: Array<string>

  /**
   * 偏移量，仅当设置 Limit 参数时有效
   */
  Offset?: number

  /**
   * 条数限制，默认返回 20 条
   */
  Limit?: number

  /**
   * 查询资源配置列表， 如果不填写，返回该 ResourceIds.N 下所有作业配置列表
   */
  Filters?: Array<Filter>

  /**
   * 集群ID
   */
  ClusterId?: string

  /**
   * 查询对应Flink版本的内置connector
   */
  FlinkVersion?: string
}

/**
 * CreateFolder返回参数结构体
 */
export interface CreateFolderResponse {
  /**
   * 新建文件夹的唯一ID
   */
  FolderId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 复制作业单条明细
 */
export type CopyJobItem = null

/**
 * 作业启动详情
 */
export interface RunJobDescription {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 运行类型，1：启动，2：恢复
   */
  RunType: number

  /**
   * 兼容旧版 SQL 类型作业启动参数：指定数据源消费起始时间点（例:T1557394288000）
   */
  StartMode?: string

  /**
   * 当前作业的某个版本
   */
  JobConfigVersion?: number

  /**
   * Savepoint路径
   */
  SavepointPath?: string

  /**
   * Savepoint的Id
   */
  SavepointId?: string

  /**
   * 使用历史版本系统依赖
   */
  UseOldSystemConnector?: boolean
}

/**
 * ModifyJob请求参数结构体
 */
export interface ModifyJobRequest {
  /**
   * 作业Id
   */
  JobId: string

  /**
   * 作业名称，支持长度小于50的中文/英文/数字/”-”/”_”/”.”，不能重名
   */
  Name?: string

  /**
   * 描述
   */
  Remark?: string

  /**
   * 拖拽文件需传入此参数
   */
  TargetFolderId?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeTreeJobs请求参数结构体
 */
export interface DescribeTreeJobsRequest {
  /**
   * 工作空间 Serialid
   */
  WorkSpaceId?: string
}

/**
 * DescribeJobConfigs返回参数结构体
 */
export interface DescribeJobConfigsResponse {
  /**
   * 总的配置版本数量
   */
  TotalCount: number

  /**
   * 作业配置列表
   */
  JobConfigSet: Array<JobConfig>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 系统配置属性
 */
export interface Property {
  /**
   * 系统配置的Key
   */
  Key: string

  /**
   * 系统配置的Value
   */
  Value: string
}

/**
 * DeleteResourceConfigs返回参数结构体
 */
export interface DeleteResourceConfigsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceRelatedJobs返回参数结构体
 */
export interface DescribeResourceRelatedJobsResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 关联作业信息
   */
  RefJobInfos: Array<ResourceRefJobInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResources返回参数结构体
 */
export interface DescribeResourcesResponse {
  /**
   * 资源详细信息集合
   */
  ResourceSet: Array<ResourceItem>

  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述用户创建的集群信息
 */
export interface Cluster {
  /**
   * 集群 ID
   */
  ClusterId: string

  /**
   * 集群名称
   */
  Name: string

  /**
   * 地域
   */
  Region: string

  /**
   * 用户 AppID
   */
  AppId: number

  /**
   * 主账号 UIN
   */
  OwnerUin: string

  /**
   * 创建者 UIN
   */
  CreatorUin: string

  /**
   * 集群状态, 1 未初始化,，3 初始化中，2 运行中
   */
  Status: number

  /**
   * 描述
   */
  Remark: string

  /**
   * 集群创建时间
   */
  CreateTime: string

  /**
   * 最后一次操作集群的时间
   */
  UpdateTime: string

  /**
   * CU 数量
   */
  CuNum: number

  /**
   * CU 内存规格
   */
  CuMem: number

  /**
   * 可用区
   */
  Zone: string

  /**
   * 状态描述
   */
  StatusDesc: string

  /**
   * 网络
   */
  CCNs: Array<CCN>

  /**
   * 网络
   */
  NetEnvironmentType: number

  /**
   * 空闲 CU
   */
  FreeCuNum: number

  /**
      * 集群绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 集群隔离时间; 没隔离时间，则为 -
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolatedTime: string

  /**
      * 集群过期时间; 没过期概念，则为 -
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: string

  /**
      * 距离过期还有多少秒; 没过期概念，则为 -
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecondsUntilExpiry: string

  /**
      * 自动续费标记，0 表示默认状态 (用户未设置，即初始状态，用户开通了预付费不停服特权会进行自动续费)， 1 表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoRenewFlag: number

  /**
      * 集群的默认 COS 存储桶
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultCOSBucket: string

  /**
      * 集群的CLS 日志集 LogSet
注意：此字段可能返回 null，表示取不到有效值。
      */
  CLSLogSet: string

  /**
      * 集群的CLS 日志主题 TopicId
注意：此字段可能返回 null，表示取不到有效值。
      */
  CLSTopicId: string

  /**
      * 集群的CLS 日志集  名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  CLSLogName: string

  /**
      * 集群的CLS 日志主题  名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  CLSTopicName: string

  /**
      * 集群的版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: ClusterVersion

  /**
      * 细粒度资源下的空闲CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeCu: number

  /**
      * 集群的默认日志采集配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultLogCollectConf: string

  /**
      * 取值：0-没有设置，1-已设置，2-不允许设置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomizedDNSEnabled: number

  /**
      * 空间信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Correlations: Array<WorkSpaceClusterItem>

  /**
      * 运行CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunningCu: number

  /**
      * 0 后付费,1 预付费
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayMode: number

  /**
      * 前端区分 集群是否需要2CU逻辑 因为历史集群 变配不需要, default 1  新集群都需要
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsNeedManageNode: number
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群总数
   */
  TotalCount: number

  /**
   * 集群列表
   */
  ClusterSet: Array<Cluster>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TriggerJobSavepoint请求参数结构体
 */
export interface TriggerJobSavepointRequest {
  /**
   * 作业 SerialId
   */
  JobId: string

  /**
   * 描述
   */
  Description?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeResourceConfigs返回参数结构体
 */
export interface DescribeResourceConfigsResponse {
  /**
   * 资源配置描述数组
   */
  ResourceConfigSet: Array<ResourceConfigItem>

  /**
   * 资源配置数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源引用参数
 */
export interface ResourceRef {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源版本ID，-1表示使用最新版本
   */
  Version: number

  /**
   * 引用资源类型，例如主资源设置为1，代表main class所在的jar包
   */
  Type: number
}

/**
 * DescribeJobs请求参数结构体
 */
export interface DescribeJobsRequest {
  /**
   * 按照一个或者多个作业ID查询。作业ID形如：cql-11112222，每次请求的作业上限为100。参数不支持同时指定JobIds和Filters。
   */
  JobIds?: Array<string>

  /**
   * 过滤条件，支持的 Filter.Name 为：作业名 Name、作业状态 Status、所属集群 ClusterId、作业id JobId、集群名称 ClusterName。 每次请求的 Filters 个数的上限为 5，Filter.Values 的个数上限为 5。参数不支持同时指定 JobIds 和 Filters。
   */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 分页大小，默认为20，最大值为100
   */
  Limit?: number

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * Job详细信息
 */
export interface JobV1 {
  /**
      * 作业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobId: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: number

  /**
      * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerUin: string

  /**
      * 创建者UIN
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorUin: string

  /**
      * 作业名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 作业类型，1：sql作业，2：Jar作业
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobType: number

  /**
      * 作业状态，1：未初始化，2：未发布，3：操作中，4：运行中，5：停止，6：暂停，-1：故障
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 作业创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 作业启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 作业停止时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StopTime: string

  /**
      * 作业更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 作业累计运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalRunMillis: number

  /**
      * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 操作错误提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastOpResult: string

  /**
      * 集群名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterName: string

  /**
      * 最新配置版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestJobConfigVersion: number

  /**
      * 已发布的配置版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublishedJobConfigVersion: number

  /**
      * 运行的CU数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunningCuNum: number

  /**
      * 作业内存规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  CuMem: number

  /**
      * 作业状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusDesc: string

  /**
      * 运行状态时表示单次运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentRunMillis: number

  /**
      * 作业所在的集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 作业管理WEB UI 入口
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebUIUrl: string

  /**
      * 作业所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchedulerType: number

  /**
      * 作业所在集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterStatus: number

  /**
      * 细粒度下的运行的CU数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunningCu: number

  /**
      * 作业运行的 Flink 版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlinkVersion: string

  /**
      * 工作空间 SerialId
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkSpaceId: string

  /**
      * 工作空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkSpaceName: string
}

/**
 * 作业配置详情
 */
export interface JobConfig {
  /**
   * 作业Id
   */
  JobId: string

  /**
      * 主类
注意：此字段可能返回 null，表示取不到有效值。
      */
  EntrypointClass: string

  /**
      * 主类入参
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProgramArgs: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
   * 作业配置创建时间
   */
  CreateTime: string

  /**
   * 作业配置的版本号
   */
  Version: number

  /**
      * 作业默认并行度
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultParallelism: number

  /**
      * 系统参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties: Array<Property>

  /**
      * 引用资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceRefDetails: Array<ResourceRefDetail>

  /**
      * 创建者uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorUin: string

  /**
      * 作业配置上次启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 作业绑定的存储桶
注意：此字段可能返回 null，表示取不到有效值。
      */
  COSBucket: string

  /**
      * 是否启用日志收集，0-未启用，1-已启用，2-历史集群未设置日志集，3-历史集群已开启
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogCollect: number

  /**
      * 作业的最大并行度
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxParallelism: number

  /**
      * JobManager规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  JobManagerSpec: number

  /**
      * TaskManager规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskManagerSpec: number

  /**
      * CLS日志集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClsLogsetId: string

  /**
      * CLS日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClsTopicId: string

  /**
      * pyflink作业运行的python版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  PythonVersion: string

  /**
      * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  AutoRecover: number

  /**
      * 日志级别
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogLevel: string
}

/**
 * DescribeResourceConfigs请求参数结构体
 */
export interface DescribeResourceConfigsRequest {
  /**
   * 资源ID
   */
  ResourceId?: string

  /**
   * 偏移量，仅当设置 Limit 时该参数有效
   */
  Offset?: number

  /**
   * 返回值大小，不填则返回全量数据
   */
  Limit?: number

  /**
   * 资源配置Versions集合
   */
  ResourceConfigVersions?: Array<number>

  /**
   * 作业配置版本
   */
  JobConfigVersion?: number

  /**
   * 作业ID
   */
  JobId?: string

  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}

/**
 * DescribeTreeResources请求参数结构体
 */
export interface DescribeTreeResourcesRequest {
  /**
   * 工作空间 SerialId
   */
  WorkSpaceId?: string
}
