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
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
  /**
   * 资源位置
   */
  ResourceLoc: ResourceLoc

  /**
   * 资源名称
   */
  Name: string

  /**
   * 资源类型，占时只支持jar，填1
   */
  ResourceType: number

  /**
   * 资源描述
   */
  Remark?: string

  /**
   * 资源版本描述
   */
  ResourceConfigRemark?: string
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
}

/**
 * StopJobs请求参数结构体
 */
export interface StopJobsRequest {
  /**
   * 批量停止作业的描述信息
   */
  StopJobDescriptions: Array<StopJobDescription>
}

/**
 * CreateJob返回参数结构体
 */
export interface CreateJobResponse {
  /**
   * 作业Id
   */
  JobId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunJobs请求参数结构体
 */
export interface RunJobsRequest {
  /**
   * 批量启动作业的描述信息
   */
  RunJobDescriptions: Array<RunJobDescription>
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
  Version?: number

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
}

/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
  /**
   * 资源ID
   */
  ResourceId?: string

  /**
   * 资源版本
   */
  Version?: number

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
   * 资源类型
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
 * StopJobs返回参数结构体
 */
export interface StopJobsResponse {
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
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
  /**
   * 作业总数
   */
  TotalCount?: number

  /**
   * 作业列表
   */
  JobSet?: Array<JobV1>

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
 * DescribeSystemResources请求参数结构体
 */
export interface DescribeSystemResourcesRequest {
  /**
   * 需要查询的资源ID数组
   */
  ResourceIds?: Array<string>

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 条数限制
   */
  Limit?: number

  /**
   * 查询资源配置列表， 如果不填写，返回该ResourceId下所有作业配置列表
   */
  Filters?: Array<Filter>

  /**
   * 集群ID
   */
  ClusterId?: string
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
   * SQL类型作业启动参数：指定数据源消费起始时间点
   */
  StartMode?: string

  /**
   * 已发布上线的作业配置版本
   */
  JobConfigVersion?: number
}

/**
 * 资源位置描述
 */
export interface ResourceLoc {
  /**
   * 资源位置的存储类型，目前只支持COS
   */
  StorageType: number

  /**
   * 描述资源位置的json
   */
  Param: ResourceLocParam
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
   * 过滤条件，详见作业过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定JobIds和Filters。
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
      * 作业类型
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
}

/**
 * DescribeSystemResources返回参数结构体
 */
export interface DescribeSystemResourcesResponse {
  /**
   * 资源详细信息集合
   */
  ResourceSet?: Array<SystemResourceItem>

  /**
   * 总数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
