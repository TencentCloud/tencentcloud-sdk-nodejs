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
 * DeleteTableConfig返回参数结构体
 */
export interface DeleteTableConfigResponse {
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
  ResourceId: string

  /**
   * 资源名称
   */
  Name: string

  /**
   * 资源类型
   */
  ResourceType: number

  /**
   * 资源位置
   */
  ResourceLoc: ResourceLoc

  /**
   * 资源地域
   */
  Region: string

  /**
   * 应用ID
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
   * 资源创建时间
   */
  CreateTime: string

  /**
   * 资源最后更新时间
   */
  UpdateTime: string

  /**
   * 资源的资源版本ID
   */
  LatestResourceConfigVersion: number

  /**
      * 资源备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 版本个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionCount: number

  /**
      * 关联作业数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefJobCount: number
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
   * 已废弃。旧版 SQL 类型作业启动参数：指定数据源消费起始时间点
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
