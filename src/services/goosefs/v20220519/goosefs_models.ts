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
 * 数据预热任务参数
 */
export interface DistributedLoadAttrs {
  /**
   * 预热类型，枚举值 LoadByPath｜LoadByList
   */
  LoadType: string
  /**
   * 是否跳过相同文件，默认为 true
   */
  SkipIfExists?: boolean
  /**
   * 预热路径，入参单条挂载路径。入参数LoadType为LoadByPath，该参数不应为空
   */
  LoadByPath?: string
  /**
   * 通过文件列表批量预热，入参为 cos://bucket-appid/ 开头的 COS 路径，且仅支持 txt 格式文件，长度不能超过255个字符。入参数LoadType为LoadByList，该参数不应为空
   */
  LoadByList?: string
  /**
   * 副本数配置，枚举值，可选值 SingleReplica（单副本，默认）｜MaxReplica（最大副本）
   */
  Replica?: string
  /**
   * 同步执行元数据预热，并基于预热后的元数据执行 DistributedLoad。默认为 false
   */
  MetadataSync?: boolean
}

/**
 * EnablePolicyRule返回参数结构体
 */
export interface EnablePolicyRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 预热任务参数
 */
export interface LoadTaskAttrs {
  /**
   * <p>预热任务 ID</p>
   */
  TaskId?: string
  /**
   * <p>预热任务类型，枚举值，MetadataLoad｜DistributedLoad</p>
   */
  TaskType?: string
  /**
   * <p>任务描述，支持中文</p>
   */
  Description?: string
  /**
   * <p>任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1</p>
   */
  Priority?: number
  /**
   * <p>元数据预热任务参数，用于仅预热元数据时入参。入参数TaskType为MetadataLoad时，该参数不应为空。</p>
   */
  MetadataLoadAttrs?: MetadataLoadAttrs
  /**
   * <p>数据预热任务参数。入参数TaskType为DistributedLoad时，该参数不应为空。</p>
   */
  DistributedLoadAttrs?: DistributedLoadAttrs
  /**
   * <p>仅预热数据参数。入参数TaskType为LoadData时，该参数不应为空。</p>
   */
  LoadDataAttrs?: LoadDataAttrs
  /**
   * <p>将任务执行报告写入 COS 的路径，如果不需要报告则入参空</p>
   */
  ReportPath?: string
  /**
   * <p>枚举，Completed，Running，Waiting，Cancelled</p>
   */
  State?: string
  /**
   * <p>任务执行信息，打印预热文件成功个数，失败个数，预热耗时信息</p>
   */
  TaskMessage?: string
  /**
   * <p>预热任务创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>预热任务变更时间</p>
   */
  ModifyTime?: string
  /**
   * <p>任务提交账号，子账号或服务角色 ID</p>
   */
  Requester?: string
}

/**
 * EnablePolicyRule请求参数结构体
 */
export interface EnablePolicyRuleRequest {
  /**
   * <p>规则ID</p>
   */
  RuleId: string
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
}

/**
 * CreatePolicyRule请求参数结构体
 */
export interface CreatePolicyRuleRequest {
  /**
   * <p>文件系统id</p>
   */
  FileSystemId: string
  /**
   * <p>扫描目录</p>
   */
  ScanDir: string
  /**
   * <p>规则名称</p>
   */
  Name: string
  /**
   * <p>执行计划</p>
   */
  Execution: ExecutionPlan
  /**
   * <p>过滤规则</p>
   */
  PolicyRuleSet?: Array<PolicyRuleOperator>
  /**
   * <p>是否输出清单</p>
   */
  EnableManifest?: boolean
  /**
   * <p>清单配置</p>
   */
  Manifest?: ManifestAttr
}

/**
 * 付费信息详情
 */
export interface ChargeAttribute {
  /**
   * 到期时间
   */
  CurDeadline?: string
  /**
   * 付费方式
   */
  PayMode?: string
  /**
   * 自动付费标识：0:默认未设置 1:自动续费 2 不自动续费
   */
  AutoRenewFlag?: number
  /**
   * 资源ID
   */
  ResourceId?: string
}

/**
 * UpdateFilesetGeneralConfig返回参数结构体
 */
export interface UpdateFilesetGeneralConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachFileSystemBucket请求参数结构体
 */
export interface AttachFileSystemBucketRequest {
  /**
   * 无
   */
  FileSystemId: string
  /**
   * 关联新Bucket
   */
  Bucket: MappedBucket
}

/**
 * DeleteFileSystem请求参数结构体
 */
export interface DeleteFileSystemRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * 客户端挂载点
 */
export interface MountPointEntry {
  /**
   *
   */
  StorageFileSystemId?: string
  /**
   *
   */
  MountDir?: string
}

/**
 * DeleteFileset返回参数结构体
 */
export interface DeleteFilesetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLoadTasks返回参数结构体
 */
export interface ListLoadTasksResponse {
  /**
   * 预热任务参数
   */
  LoadTaskList?: Array<LoadTaskAttrs>
  /**
   * 任务数总量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateLoadTaskPriority返回参数结构体
 */
export interface UpdateLoadTaskPriorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFilesetGeneralConfig请求参数结构体
 */
export interface DescribeFilesetGeneralConfigRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
}

/**
 * UpdateLoadTaskPriority请求参数结构体
 */
export interface UpdateLoadTaskPriorityRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
  /**
   * 任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1
   */
  Priority: number
}

/**
 * DescribeFilesets返回参数结构体
 */
export interface DescribeFilesetsResponse {
  /**
   * Fileset列表
   */
  FilesetList?: Array<FilesetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Fileset信息
 */
export interface FilesetInfo {
  /**
   * Fileset id
   */
  FsetId?: string
  /**
   * Fileset名称
   */
  FsetName?: string
  /**
   * Fileset目录
   */
  FsetDir?: string
  /**
   * Fileset容量配额限定值
   */
  QuotaSizeLimit?: string
  /**
   * 已使用容量配额
   */
  QuotaSizeUsed?: string
  /**
   * 容量配额使用占比
   */
  QuotaSizeUsedPercent?: string
  /**
   * Fileset文件数配额限定值
   */
  QuotaFilesLimit?: string
  /**
   * 已使用文件数配额
   */
  QuotaFilesUsed?: string
  /**
   * 文件数配额使用占比
   */
  QuotaFilesUsedPercent?: string
  /**
   * Fileset审计
   */
  AuditState?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * Fileset状态：creating 配置中 active 已生效 modify 修改中
   */
  Status?: string
}

/**
 * ExpandCapacity请求参数结构体
 */
export interface ExpandCapacityRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 新增扩容的系统容量(单位 GiB)
   */
  ExpandedCapacity: number
  /**
   * 容量修改类型：add/sub
   */
  ModifyType?: string
  /**
   * 是否是快速扩容,只针对部分model有效
   */
  RapidExpansion?: boolean
}

/**
 * 客户端集群挂载信息
 */
export interface ClusterMountAttr {
  /**
   * 挂载的文件系统Id
   */
  StorageFileSystemId?: string
  /**
   * 客户端集群挂载点。入参是节点的自定义挂载点，出参是集群的默认挂载点
注意：此字段可能返回 null，表示取不到有效值。
   */
  MountPoint?: string
}

/**
 * CancelLoadTask请求参数结构体
 */
export interface CancelLoadTaskRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
}

/**
 * BatchDeleteClientNodes请求参数结构体
 */
export interface BatchDeleteClientNodesRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * 删除的客户端节点列表
   */
  ClientNodes: Array<LinuxNodeAttribute>
  /**
   * 是否单集群，默认是false
   */
  SingleClusterFlag?: boolean
  /**
   * 客户端集群id
   */
  ClusterId?: string
}

/**
 * DescribePolicyRuleExecuteRecord返回参数结构体
 */
export interface DescribePolicyRuleExecuteRecordResponse {
  /**
   * <p>执行记录详情</p>
   */
  RuleExecuteList?: Array<RuleExecuteAttribute>
  /**
   * <p>任务总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Policy扫描规则
 */
export interface PolicyRuleOperator {
  /**
   * <p>规则名</p><p>枚举值：</p><ul><li>CREATION_TIME_DAYS： 创建时间，比较的value 是days，数字整数。判断条件均为与“今天”相差。例如 CREATION_TIME &gt; 5，指的是创建时间-今天大于5天，即5天前（以及更早）创建的文件</li><li>CHANGE_TIME_DAYS： 元数据修改时间，比较的value 是days，数字整数。判断条件均为与“今天”相差。例如 CHANGE_TIME &gt; 5，指的是元数据修改时间-今天大于5天，即5天前以及更早修改元数据的文件</li><li>MODIFICATION_TIME_DAYS： 数据修改时间，比较的value 是days，数字整数。判断条件均为与“今天”相差。例如 MODIFICATION_TIME &gt; 5，指的是数据修改时间-今天大于5天，即5天前（以及更早）修改的文件</li><li>ACCESS_TIME_DAYS： 访问时间，比较的value 是days，数字整数。判断条件均为与“今天”相差。例如 ACCESS_TIME &gt; 5，指的是访问时间-今天大于5天，即5天前（以及更早）访问的文件</li><li>CREATION_TIME_DATE： 创建时间，比较的value 是date,日期，格式为YYYY-MM-DD。判断条件均为与value对应的日期的对比。例如 CREATION_TIME &gt; 2026-06-01，指的是创建时间晚于2026年6月1日</li><li>CHANGE_TIME_DATE： 元数据修改时间，比较的value 是date,日期，格式为YYYY-MM-DD。判断条件均为与value对应的日期的对比。例如 CHANGE_TIME &gt; 2026-06-01，指的是元数据修改晚于2026年6月1日</li><li>MODIFICATION_TIME_DATE： 数据修改时间，比较的value 是date,日期，格式为YYYY-MM-DD。判断条件均为与value对应的日期的对比。例如 MODIFICATION_TIME &gt; 2026-06-01，指的是数据修改时间晚于2026年6月1日</li><li>ACCESS_TIME_DATE： 访问时间，比较的value 是date,日期，格式为YYYY-MM-DD。判断条件均为与value对应的日期的对比。例如 ACCESS_TIME &gt; 2026-06-01，指的是访问时间晚于2026年6月1日</li><li>FILE_SIZE： 文件大小，数字，单位byte，整数，0 ～ 64位整数最大值</li></ul>
   */
  Key?: string
  /**
   * <p>比较关系</p><p>枚举值：</p><ul><li>&gt;：  大于</li><li>&gt;=： 大于等于</li><li>=： 相等</li><li>&lt;： 小于</li><li>&lt;=： 小于等于</li></ul>
   */
  Operator?: string
  /**
   * <p>比较值</p><p>如果Key是CREATION_TIME_DAYS、CHANGE_TIME_DAYS、MODIFICATION_TIME_DAYS、ACCESS_TIME_DAYS时，值是整数；<br>如果Key是CREATION_TIME_DATE、CHANGE_TIME_DATE、MODIFICATION_TIME_DATE、ACCESS_TIME_DATE时，值是日期，格式是YYYY-MM-DD；<br>如果Key是FILE_SIZE，值是整数，单位是byte</p>
   */
  Value?: string
}

/**
 * UpdateFileset返回参数结构体
 */
export interface UpdateFilesetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加删除客户端节点列表
 */
export interface LinuxNodeAttribute {
  /**
   * cvmId
   */
  InstanceId?: string
  /**
   * 节点所属vpcid
   */
  VpcId?: string
  /**
   * 节点所属子网id
   */
  SubnetId?: string
  /**
   * linux客户端节点地址
   */
  LinuxClientNodeIp?: string
  /**
   * 自定义挂载点
   */
  MountPoint?: string
}

/**
 * DeletePolicyRule请求参数结构体
 */
export interface DeletePolicyRuleRequest {
  /**
   * <p>规则id</p>
   */
  RuleId: string
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
}

/**
 * DescribeFileSystems请求参数结构体
 */
export interface DescribeFileSystemsRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 每页的数量
   */
  Limit: number
}

/**
 * CreateDataRepositoryTask返回参数结构体
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * <p>任务ID</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 清单配置
 */
export interface ManifestAttr {
  /**
   * <p>桶名字</p>
   */
  Bucket?: string
  /**
   * <p>目录前缀</p>
   */
  Prefix?: string
  /**
   * <p>文件属性</p>
   */
  Attributes?: Array<string>
  /**
   * <p>桶所在地域</p><p>桶所在的地域，可以不填，认为是实例所在地域</p>
   */
  Region?: string
}

/**
 * 文件系统关联的标签
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * ModifyDataRepositoryBandwidth请求参数结构体
 */
export interface ModifyDataRepositoryBandwidthRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 带宽, 单位MB/S
   */
  Bandwidth: number
}

/**
 * CreateDataRepositoryTask请求参数结构体
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * <p>数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)</p>
   */
  TaskType: string
  /**
   * <p>COS存储桶名</p>
   */
  Bucket: string
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据</p>
   */
  TaskPath: string
  /**
   * <p>任务名称</p>
   */
  TaskName: string
  /**
   * <p>任务路径是否表示绝对路径（暂时仅支持沉降使用）</p>
   */
  IsTaskPathAbsolute?: boolean
  /**
   * <p>数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载</p>
   */
  RepositoryType?: string
  /**
   * <p>文件列表下载地址，以http开头</p>
   */
  TextLocation?: string
  /**
   * <p>是否开启自定义路径(暂时仅供预热使用)</p>
   * @deprecated
   */
  EnableDataFlowSubPath?: boolean
  /**
   * <p>自定义路径(暂时仅供预热使用)</p>
   * @deprecated
   */
  DataFlowSubPath?: string
  /**
   * <p>是否开启自定义目的路径（预热任务表示本地路径，沉降任务表示COS桶前缀）</p>
   */
  EnableCustomDestPath?: boolean
  /**
   * <p>自定义目的路径（预热任务表示本地路径，沉降任务表示COS桶前缀）</p>
   */
  CustomDestPath?: string
  /**
   * <p>输出的COS桶，用于存放任务执行的相关结果（当前用于存放任务失败时的失败文件列表）</p>
   */
  OutputBucket?: string
  /**
   * <p>输出的COS桶的前缀，用于存放任务执行的相关结果（当前用于存放任务失败时的失败文件列表）</p>
   */
  OutputPrefix?: string
  /**
   * <p>是否支持自定义数据源路径(暂时仅支持清单过滤使用)</p>
   */
  EnableCustomSrcPath?: boolean
  /**
   * <p>自定义数据源路径(暂时仅支持清单过滤使用)</p>
   */
  CustomSrcPath?: string
}

/**
 * DescribeDataRepositoryTasks返回参数结构体
 */
export interface DescribeDataRepositoryTasksResponse {
  /**
   * 数据流通任务列表
   */
  DataRepositoryTaskList: Array<DataRepositoryTaskAttribute>
  /**
   * 任务总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联的对象Bucket, 并将其映射到文件系统某个路径上
 */
export interface MappedBucket {
  /**
   * 对象存储Bucket名
   */
  BucketName: string
  /**
   * 映射到的文件系统路径, 默认为/
   */
  FileSystemPath: string
  /**
   * 数据流动的自动策略, 包含加载与沉降。策略可以是多种的组合
按需加载(OnDemandImport)
自动加载元数据(AutoImportMeta)
自动加载数据(AutoImportData)
周期加载(PeriodImport)

周期沉降(PeriodExport)
立即沉降(ImmediateExport)
   */
  DataRepositoryTaskAutoStrategy?: Array<string>
  /**
   * 绑定bucket的数据流动策略ID
   */
  RuleId?: string
  /**
   * 规则备注与描述
   */
  RuleDescription?: string
  /**
   * 桶关联状态 0：关联中 1：关联完成
   */
  Status?: number
  /**
   * 是否使用全球加速域名
   */
  AccelerateFlag?: boolean
  /**
   * 桶所在的园区
   */
  BucketRegion?: string
  /**
   * 自定义Endpoint
   */
  Endpoint?: string
}

/**
 * CreateFileset请求参数结构体
 */
export interface CreateFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset名称
   */
  FsetName: string
  /**
   * Fileset目录
   */
  FsetDir: string
  /**
   * Fileset容量配额（需带单位G）
   */
  QuotaSizeLimit?: string
  /**
   * Fileset文件数配额
   */
  QuotaFilesLimit?: string
  /**
   * Fileset文件删除操作审计
   */
  AuditState?: string
}

/**
 * 客户端节点属性
 */
export interface ClientNodeAttribute {
  /**
   * <p>客户端节点IP</p>
   */
  ClientNodeIp?: string
  /**
   * <p>客户端节点服务状态, Active(运行中), Adding(添加中), Destroying(销毁中), Down(已停止)</p>
   */
  Status?: string
  /**
   * <p>客户端节点类型，extend(扩展节点)，manager(管理节点)</p>
   */
  ClientType?: string
  /**
   * <p>节点所属vpcid</p>
   */
  VpcId?: string
  /**
   * <p>节点所属子网id</p>
   */
  SubnetId?: string
  /**
   * <p>cvmId</p>
   */
  InstanceId?: string
  /**
   * <p>自定义挂载点</p>
   */
  MountPoint?: string
  /**
   * <p>客户端集群id</p>
   */
  ClusterId?: string
  /**
   *
   */
  MountPoints?: Array<MountPointEntry>
}

/**
 * DescribeClusterRoleToken请求参数结构体
 */
export interface DescribeClusterRoleTokenRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 角色名
   */
  RoleName: string
}

/**
 * MountMultipleStorageFileSystem请求参数结构体
 */
export interface MountMultipleStorageFileSystemRequest {
  /**
   * 客户端集群所属的文件系统id
   */
  FileSystemId?: string
  /**
   * 客户端集群Id
   */
  CustomerClusterId?: string
  /**
   * 挂载的存储集群的id
   */
  StorageFileSystemId?: string
}

/**
 * DescribeLoadTask请求参数结构体
 */
export interface DescribeLoadTaskRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 预热任务 ID
   */
  TaskId: string
}

/**
 * DescribeFileSystemBuckets请求参数结构体
 */
export interface DescribeFileSystemBucketsRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * CreatePolicyRule返回参数结构体
 */
export interface CreatePolicyRuleResponse {
  /**
   * <p>规则id</p>
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyRule请求参数结构体
 */
export interface DescribePolicyRuleRequest {
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>偏移量</p>
   */
  Offset: number
  /**
   * <p>最大返回数量</p>
   */
  Limit: number
}

/**
 * CreateFileSystem请求参数结构体
 */
export interface CreateFileSystemRequest {
  /**
   * 文件系统名
   */
  Name: string
  /**
   * 文件系统备注描述
   */
  Description: string
  /**
   * vpc网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 子网所在的可用区
   */
  Zone: string
  /**
   * 文件系统类型, 可填goosefs和goosefsx
   * @deprecated
   */
  Type?: string
  /**
   * 文件系统关联的tag
   */
  Tag?: Array<Tag>
  /**
   * GooseFSx构建时要传递的参数
   */
  GooseFSxBuildElements?: GooseFSxBuildElement
  /**
   * 客户端集群所属的安全组
   */
  SecurityGroupId?: string
  /**
   * 集群ssh通信端口，默认是22
   */
  ClusterPort?: number
}

/**
 * DescribeDataRepositoryTasks请求参数结构体
 */
export interface DescribeDataRepositoryTasksRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 最大返回数量
   */
  Limit: number
}

/**
 * DescribeLoadTask返回参数结构体
 */
export interface DescribeLoadTaskResponse {
  /**
   * 预热任务参数
   */
  LoadTaskAttrs?: LoadTaskAttrs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisablePolicyRule请求参数结构体
 */
export interface DisablePolicyRuleRequest {
  /**
   * <p>规则ID</p>
   */
  RuleId: string
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
}

/**
 * DetachFileSystemBucket请求参数结构体
 */
export interface DetachFileSystemBucketRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 要解绑的Bucket名
   */
  BucketName: string
}

/**
 * MountMultipleStorageFileSystem返回参数结构体
 */
export interface MountMultipleStorageFileSystemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据流通任务属性
 */
export interface DataRepositoryTaskAttribute {
  /**
   * <p>数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者Bucket到文件系统(COS_TO_FS)</p>
   */
  TaskType?: string
  /**
   * <p>bucket名</p>
   */
  Bucket?: string
  /**
   * <p>bucket路径</p>
   */
  TaskPath?: string
  /**
   * <p>总的容量(单位Byte)</p>
   */
  TotalCapacity?: number
  /**
   * <p>已完成的数据量(单位Byte)</p>
   */
  FinishedCapacity?: number
  /**
   * <p>任务创建时间</p>
   */
  TaskCreateTime?: string
  /**
   * <p>任务开始执行时间</p>
   */
  TaskStartTime?: string
  /**
   * <p>任务结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskEndTime?: string
  /**
   * <p>INIT(任务初始化中) RUNNING(任务执行中) SUCCESS(任务已完成) FAIL(任务失败)</p>
   */
  TaskStatus?: string
  /**
   * <p>任务ID</p>
   */
  TaskId?: string
  /**
   * <p>任务名</p>
   */
  TaskName?: string
  /**
   * <p>任务失败原因</p>
   */
  TaskFailMsg?: string
  /**
   * <p>总共的文件个数</p>
   */
  TotalFileNumber?: number
  /**
   * <p>已完成的文件个数</p>
   */
  FinishedFileNumber?: number
  /**
   * <p>列表地址</p>
   */
  TextLocation?: string
  /**
   * <p>执行器类型</p>
   */
  RepositoryType?: string
  /**
   * <p>是否自定义路径</p>
   * @deprecated
   */
  EnableDataFlowSubPath?: boolean
  /**
   * <p>自定义路径</p>
   * @deprecated
   */
  DataFlowSubPath?: string
  /**
   * <p>是否支持自定义目的路径（沉降表示桶前缀，预热表示本地路径）</p>
   */
  EnableCustomDestPath?: boolean
  /**
   * <p>自定义目的路径（沉降表示桶前缀，预热表示本地路径）</p>
   */
  CustomDestPath?: string
  /**
   * <p>任务路径是否表示绝对路径（暂时仅支持沉降使用）</p>
   */
  IsTaskPathAbsolute?: boolean
  /**
   * <p>任务内容输出桶</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputBucket?: string
  /**
   * <p>任务内容输出桶前缀</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputPrefix?: string
  /**
   * <p>是否支持自定义数据源路径(暂时仅支持清单过滤使用)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableCustomSrcPath?: boolean
  /**
   * <p>自定义数据源路径(暂时仅支持清单过滤使用)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomSrcPath?: string
}

/**
 * DescribeCustomerCluster请求参数结构体
 */
export interface DescribeCustomerClusterRequest {
  /**
   * 文件系统id
   */
  FileSystemId?: string
}

/**
 * DescribeFilesetGeneralConfig返回参数结构体
 */
export interface DescribeFilesetGeneralConfigResponse {
  /**
   * 配额对root用户生效
   */
  EnforceQuotaOnRoot?: string
  /**
   * 配置状态
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileset返回参数结构体
 */
export interface CreateFilesetResponse {
  /**
   * Fileset id
   */
  FsetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 支持的子网信息集合
   */
  SubnetInfoCollection?: Array<SubnetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件系统属性
 */
export interface FSAttribute {
  /**
   * 文件系统类型, 可填goosefs和goosefsx
   */
  Type?: string
  /**
   * 文件系统ID
   */
  FileSystemId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * GooseFSx文件系统属性
   */
  GooseFSxAttribute?: GooseFSxAttribute
  /**
   * 文件系统状态 ACTIVE(运行中), CREATING(创建中), DESTROYING(销毁中), FAIL(创建失败),EXPANDING(扩容中),PROBING(容灾中)
   */
  Status?: string
  /**
   * 文件系统名
   */
  Name?: string
  /**
   * 文件系统备注描述
   */
  Description?: string
  /**
   * vpc ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 子网所在的可用区
   */
  Zone?: string
  /**
   * Tag数组
   */
  Tag?: Array<Tag>
  /**
   * 更新属性时间
   */
  ModifyTime?: string
  /**
   * 文件系统付费信息
   */
  ChargeAttribute?: ChargeAttribute
}

/**
 * DeleteCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchAddClientNodes请求参数结构体
 */
export interface BatchAddClientNodesRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 添加客户端节点列表
   */
  ClientNodes: Array<LinuxNodeAttribute>
  /**
   * 是否单集群默认是false
   */
  SingleClusterFlag?: boolean
  /**
   * 客户端集群id
   */
  ClusterId?: string
}

/**
 * BuildClientNodeMountCommand返回参数结构体
 */
export interface BuildClientNodeMountCommandResponse {
  /**
   * <p>挂载命令</p>
   */
  Command?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoadTask请求参数结构体
 */
export interface CreateLoadTaskRequest {
  /**
   * <p>集群 ID</p>
   */
  ClusterId: string
  /**
   * <p>创建预热任务参数</p>
   */
  LoadTaskCreationAttrs: LoadTaskCreationAttrs
}

/**
 * 创建预热任务
 */
export interface LoadTaskCreationAttrs {
  /**
   * <p>预热任务类型，枚举值，MetadataLoad｜DistributedLoad。</p>
   */
  TaskType: string
  /**
   * <p>任务优先级，数值越高代表优先级越高，边界值 1-9999，默认值为 1</p>
   */
  Priority?: number
  /**
   * <p>任务描述，支持中文</p>
   */
  Description?: string
  /**
   * <p>元数据预热任务参数，用于仅预热元数据时入参。入参数TaskType为MetadataLoad时，该参数不应为空。</p>
   */
  MetadataLoadAttrs?: MetadataLoadAttrs
  /**
   * <p>数据预热任务参数。入参数TaskType为DistributedLoad时，该参数不应为空。</p>
   */
  DistributedLoadAttrs?: DistributedLoadAttrs
  /**
   * <p>将任务执行报告写入 COS 的路径，如果不需要报告则入参空</p>
   */
  ReportPath?: string
  /**
   * <p>仅预热数据任务参数。入参数TaskType为LoadData时，该参数不应为空。</p>
   */
  LoadDataAttrs?: LoadDataAttrs
}

/**
 * CancelPolicyRuleExecuteRecord请求参数结构体
 */
export interface CancelPolicyRuleExecuteRecordRequest {
  /**
   * <p>规则id</p>
   */
  RuleId: string
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>执行记录id</p>
   */
  RecordId: string
}

/**
 * ModifyDataRepositoryBandwidth返回参数结构体
 */
export interface ModifyDataRepositoryBandwidthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDataRepositoryTaskStatus返回参数结构体
 */
export interface ModifyDataRepositoryTaskStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExpandCapacity返回参数结构体
 */
export interface ExpandCapacityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFileset请求参数结构体
 */
export interface DeleteFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset id
   */
  FsetId: string
}

/**
 * AddCrossVpcSubnetSupportForClientNode返回参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryClientNodeMountCommand请求参数结构体
 */
export interface QueryClientNodeMountCommandRequest {
  /**
   * 客户端集群ID
   */
  ClusterId?: string
  /**
   * 集群挂载信息
   */
  ClusterMountInfo?: Array<ClusterMountAttr>
  /**
   * 文件系统id
   */
  FileSystemId?: string
}

/**
 * DescribeClusterRoleToken返回参数结构体
 */
export interface DescribeClusterRoleTokenResponse {
  /**
   * 角色凭证
   */
  RoleTokens?: Array<RoleToken>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GooseFSx创建时候的属性
 */
export interface GooseFSxBuildElement {
  /**
   * GooseFSx的型号
   */
  Model: string
  /**
   * 容量单位是GB, 例如4608(4.5TB)
   */
  Capacity: number
  /**
   * 要关联映射的bucket列表
   * @deprecated
   */
  MappedBucketList?: Array<MappedBucket>
}

/**
 * AddCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface AddCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 子网信息
   */
  SubnetInfo: SubnetInfo
}

/**
 * vpc子网信息
 */
export interface SubnetInfo {
  /**
   * vpc id
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 应用的集群；可以是集群id,也可以是All
   */
  UsedCluster?: string
  /**
   * cidr，只有当IsDirectConnect为true时才生效
   */
  CIDR?: string
  /**
   * 是否为专线接入场景
   */
  IsDirectConnect?: boolean
}

/**
 * CancelPolicyRuleExecuteRecord返回参数结构体
 */
export interface CancelPolicyRuleExecuteRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelLoadTask返回参数结构体
 */
export interface CancelLoadTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchAddClientNodes返回参数结构体
 */
export interface BatchAddClientNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryClientNodeMountCommand返回参数结构体
 */
export interface QueryClientNodeMountCommandResponse {
  /**
   * 挂载命令
   */
  Command?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFileSystem返回参数结构体
 */
export interface DeleteFileSystemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询Client Token
 */
export interface ClientToken {
  /**
   * 节点 IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeIp?: string
  /**
   * 挂载点
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDirectory?: string
  /**
   * 可以访问的 GooseFS 目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  GooseFSDirectory?: string
  /**
   * token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
}

/**
 * QueryDataRepositoryBandwidth返回参数结构体
 */
export interface QueryDataRepositoryBandwidthResponse {
  /**
   * 数据流动带宽, 单位MB/s
   */
  Bandwidth?: number
  /**
   * 带宽状态。1:待扩容;2:运行中;3:扩容中
   */
  BandwidthStatus?: number
  /**
   * 能设置的最小带宽, 单位MB/s
   */
  MinBandwidth?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDataRepositoryBandwidth请求参数结构体
 */
export interface QueryDataRepositoryBandwidthRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * DescribeClientNodes返回参数结构体
 */
export interface DescribeClientNodesResponse {
  /**
   * 客户端节点数组
   */
  ClientNodes: Array<ClientNodeAttribute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 周期执行启动配置
 */
export interface ExecutePeriodAttribute {
  /**
   * <p>选择的周期类型</p><p>枚举值：</p><ul><li>DAY： 每天执行 </li><li>WEEK： 每周执行</li><li>MONTH： 每月执行</li></ul>
   */
  PeriodType?: string
  /**
   * <p>选择每周执行时必填，需要选择周几,0-6 分别是周日到周六</p><p>取值范围：[0, 6]</p><p>默认值：0</p>
   */
  StartWeekday?: number
  /**
   * <p>选择每月执行时必填，1-28日选择一天</p><p>取值范围：[1, 28]</p><p>默认值：1</p>
   */
  StartDate?: number
  /**
   * <p>周期中的时间点，取值0~59</p><p>取值范围：[0, 59]</p>
   */
  StartMinute?: number
  /**
   * <p>24小时周期开始的小时数，取值0~23</p><p>取值范围：[0, 23]</p><p>默认值：1</p>
   */
  StartHour?: number
}

/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 */
export interface DescribeDataRepositoryTaskStatusRequest {
  /**
   * task id
   */
  TaskId: string
  /**
   * file system id
   */
  FileSystemId: string
}

/**
 * DescribeCustomerCluster返回参数结构体
 */
export interface DescribeCustomerClusterResponse {
  /**
   * 客户端集群列表
   */
  ClusterSet?: Array<CustomerClusterAttr>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachFileSystemBucket返回参数结构体
 */
export interface DetachFileSystemBucketResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileSystemBuckets返回参数结构体
 */
export interface DescribeFileSystemBucketsResponse {
  /**
   * bucket列表
   */
  BucketList?: Array<MappedBucket>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClientNodes请求参数结构体
 */
export interface DescribeClientNodesRequest {
  /**
   * 文件系统Id
   */
  FileSystemId: string
}

/**
 * DescribeClusterClientToken请求参数结构体
 */
export interface DescribeClusterClientTokenRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * ListLoadTasks请求参数结构体
 */
export interface ListLoadTasksRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 偏移量
   */
  Limit: number
  /**
   * 任务创建起始时间戳，默认为3天前：当前时间戳-86400*3
   */
  StartTimestamp?: number
  /**
   * 任务变更时间戳
   */
  EndTimestamp?: number
  /**
   * 筛选任务状态，枚举Waiting,Running,Canceled,Completed。默认返回所有任务
   */
  State?: string
  /**
   * 筛选优先级任务，默认返回所有任务
   */
  Priority?: number
}

/**
 * DescribeClusterClientToken返回参数结构体
 */
export interface DescribeClusterClientTokenResponse {
  /**
   * 客户端凭证
   */
  ClientTokens?: Array<ClientToken>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileSystem返回参数结构体
 */
export interface CreateFileSystemResponse {
  /**
   * 创建成功返回的文件系统ID：
   */
  FileSystemId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GooseFSx文件系统的属性
 */
export interface GooseFSxAttribute {
  /**
   * GooseFSx的型号
   */
  Model?: string
  /**
   * 容量单位是GB, 例如4608(4.5TB)
   */
  Capacity?: number
  /**
   * 要关联映射的bucket列表
   */
  MappedBucketList?: Array<MappedBucket>
  /**
   * 客户侧管理节点信息
   */
  ClientManagerNodeList?: Array<ClientClusterManagerNodeInfo>
}

/**
 * DescribeFilesets请求参数结构体
 */
export interface DescribeFilesetsRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * FsetId列表
   */
  FilesetIds?: Array<string>
  /**
   * FsetDir列表
   */
  FilesetDirs?: Array<string>
}

/**
 * CreateLoadTask返回参数结构体
 */
export interface CreateLoadTaskResponse {
  /**
   * <p>预热任务 ID</p>
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisablePolicyRule返回参数结构体
 */
export interface DisablePolicyRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 元数据预热参数
 */
export interface MetadataLoadAttrs {
  /**
   * 预热类型，枚举值 LoadByPath｜LoadByList
   */
  LoadType: string
  /**
   * 是否跳过相同文件，默认为 true
   */
  SkipIfExists?: boolean
  /**
   * 预热路径，入参单条挂载路径，长度不能超过255个字符。入参数LoadType为LoadByPath，该参数不应为空
   */
  LoadByPath?: string
  /**
   * 通过文件列表批量预热，入参为 cos://bucket-appid/ 开头的 COS 路径，且仅支持 txt 格式文件，长度不能超过255个字符。入参数LoadType为LoadByList，该参数不应为空
   */
  LoadByList?: string
}

/**
 * DescribeFileSystems返回参数结构体
 */
export interface DescribeFileSystemsResponse {
  /**
   * 文件系统列表
   */
  FSAttributeList?: Array<FSAttribute>
  /**
   * 总共的文件系统数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteClientNodes返回参数结构体
 */
export interface BatchDeleteClientNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据预热任务参数
 */
export interface LoadDataAttrs {
  /**
   * <p>预热类型，枚举值 LoadByPath｜LoadByList</p>
   */
  LoadType: string
  /**
   * <p>是否跳过相同文件，默认为 true</p>
   */
  SkipIfExists?: boolean
  /**
   * <p>预热路径，入参单条挂载路径。入参数LoadType为LoadByPath，该参数不应为空</p>
   */
  LoadByPath?: string
  /**
   * <p>通过文件列表批量预热，入参为 cos://bucket-appid/ 开头的 COS 路径，且仅支持 txt 格式文件，长度不能超过255个字符。入参数LoadType为LoadByList，该参数不应为空</p>
   */
  LoadByList?: string
  /**
   * <p>副本数配置，枚举值，可选值 SingleReplica（单副本，默认）｜MaxReplica（最大副本）</p>
   */
  Replica?: string
}

/**
 * QueryCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface QueryCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
}

/**
 * DeleteCrossVpcSubnetSupportForClientNode请求参数结构体
 */
export interface DeleteCrossVpcSubnetSupportForClientNodeRequest {
  /**
   * 文件系统ID
   */
  FileSystemId: string
  /**
   * 子网信息
   */
  SubnetInfo: SubnetInfo
}

/**
 * DeletePolicyRule返回参数结构体
 */
export interface DeletePolicyRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachFileSystemBucket返回参数结构体
 */
export interface AttachFileSystemBucketResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BuildClientNodeMountCommand请求参数结构体
 */
export interface BuildClientNodeMountCommandRequest {
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>自定义挂载目录的绝对路径, 如果未指定, 则会使用默认值, 格式/goosefsx/${fs_id}-proxy. 比如/goosefsx/x-c60-a2b3d4-proxy</p>
   */
  CustomMountDir?: string
  /**
   * <p>客户端集群ID</p>
   */
  ClusterId?: string
}

/**
 * 执行时间
 */
export interface ExecutionPlan {
  /**
   * <p>执行类型</p><p>枚举值：</p><ul><li>scheduled： 指定时间执行</li><li>periodic： 周期执行</li></ul>
   */
  ExecuteMode?: string
  /**
   * <p>任务执行时间</p><p>参数格式：2026-07-23 08:30</p><p>入参限制：只有立即执行或者指定时间执行时设置，周期执行不需要设置</p><p>默认值：当前时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecuteAt?: string
  /**
   * <p>周期执行的时间设置</p><p>入参限制：选择周期执行时必填</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutePeriod?: ExecutePeriodAttribute
  /**
   * <p>任务等待时间</p><p>取值范围：[1, 500]</p><p>单位：H</p><p>默认值：12</p><p>任务执行的等待时间，超过时间任务未启动，自动取消</p>
   */
  WaitTime?: number
}

/**
 * BuildCustomerCluster请求参数结构体
 */
export interface BuildCustomerClusterRequest {
  /**
   * <p>文件系统id</p>
   */
  FileSystemId?: string
  /**
   * <p>vpc网络ID</p>
   */
  VpcId?: string
  /**
   * <p>子网id</p>
   */
  SubnetId?: string
  /**
   * <p>集群名称</p>
   */
  ClusterName?: string
  /**
   * <p>可用区</p>
   */
  Zone?: string
}

/**
 * DescribePolicyRule返回参数结构体
 */
export interface DescribePolicyRuleResponse {
  /**
   * <p>规则任务详情</p>
   */
  PolicyRuleTaskList?: Array<PolicyRuleTaskAttribute>
  /**
   * <p>任务总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描规则执行信息
 */
export interface RuleExecuteAttribute {
  /**
   * <p>执行id</p>
   */
  RecordId?: string
  /**
   * <p>开始执行时间</p>
   */
  StartTime?: string
  /**
   * <p>执行结束时间</p>
   */
  EndTime?: string
  /**
   * <p>执行状态</p><p>枚举值：</p><ul><li>0： 等待中</li><li>1： 执行中</li><li>2： 已完成</li><li>3： 已跳过</li></ul><p>默认值：0</p><p>已跳过是指任务排队超过了任务的等待时间会自动跳过</p>
   */
  Status?: number
  /**
   * <p>存储量</p><p>单位：GB</p><p>默认值：0</p><p>不足1G按照1G 统计</p>
   */
  Capacity?: number
  /**
   * <p>文件数</p>
   */
  FileCount?: number
  /**
   * <p>文件清单路径</p><p>参数格式：http://xxx/xxx/xx</p>
   */
  ManifestUrl?: string
}

/**
 * DescribePolicyRuleExecuteRecord请求参数结构体
 */
export interface DescribePolicyRuleExecuteRecordRequest {
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>偏移量</p>
   */
  Offset: number
  /**
   * <p>最大返回数量</p>
   */
  Limit: number
  /**
   * <p>规则id</p>
   */
  RuleId?: string
}

/**
 * 客户侧集群管理节点信息
 */
export interface ClientClusterManagerNodeInfo {
  /**
   * 客户端节点IP
   */
  NodeIp?: string
  /**
   * 节点Instance Id
   */
  NodeInstanceId?: string
  /**
   * 初始密码
   */
  InitialPassword?: string
  /**
   * 所属集群id
   */
  ClusterId?: string
}

/**
 * UpdateFilesetGeneralConfig请求参数结构体
 */
export interface UpdateFilesetGeneralConfigRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * 配额对root用户生效
   */
  EnforceQuotaOnRoot?: string
}

/**
 * BuildCustomerCluster返回参数结构体
 */
export interface BuildCustomerClusterResponse {
  /**
   * <p>客户端集群Id</p>
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomerCluster返回参数结构体
 */
export interface DeleteCustomerClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 */
export interface DescribeDataRepositoryTaskStatusResponse {
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
   */
  Status?: number
  /**
   * 已完成的文件数量
   */
  FinishedFileNumber?: number
  /**
   * 已完成的数据量
   */
  FinishedCapacity?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 角色凭证
 */
export interface RoleToken {
  /**
   * 角色名
   */
  RoleName?: string
  /**
   * 用于goosefs client/sdk等
   */
  Token?: string
}

/**
 * goosefsx客户端集群信息
 */
export interface CustomerClusterAttr {
  /**
   * 集群id
   */
  ClusterId?: string
  /**
   * vpc网络id
   */
  VpcId?: string
  /**
   * 子网id
   */
  SubnetId?: string
  /**
   * 客户端数量
   */
  ClientNum?: number
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 集群类型：0: 默认集群（文件系统创建时构建，不可销毁）；1: 扩展集群（客户端数量为0时可销毁）
   */
  ClusterType?: number
  /**
   * 管理节点信息
   */
  ManagerNodes?: Array<ClientClusterManagerNodeInfo>
  /**
   * 集群状态：0:creating 创建中；1: created 创建完成; 2: deleting 删除中； 3: deleted 删除完成； 4:  failed 创建失败
   */
  Status?: number
  /**
   * 客户端集群挂载存储集合
   */
  ClusterMountSet?: Array<ClusterMountAttr>
  /**
   *
   */
  Zone?: string
  /**
   *
   */
  MountStorageNum?: number
  /**
   *
   */
  StorageFileSystemId?: string
}

/**
 * ModifyDataRepositoryTaskStatus请求参数结构体
 */
export interface ModifyDataRepositoryTaskStatusRequest {
  /**
   * <p>文件系统ID</p>
   */
  FileSystemId: string
  /**
   * <p>数据流动任务ID</p>
   */
  TaskId: string
  /**
   * <p>修改数据流动任务目标状态对应的类型，仅支持任务暂停和恢复（暂停对应pause，恢复对应resume）</p><p>枚举值：</p><ul><li>pause： 暂停</li><li>resume： 恢复</li></ul>
   */
  ModifyType: string
}

/**
 * 扫描规则信息
 */
export interface PolicyRuleTaskAttribute {
  /**
   * <p>规则id</p>
   */
  RuleId?: string
  /**
   * <p>规则名称</p>
   */
  Name?: string
  /**
   * <p>扫描目录</p>
   */
  ScanDir?: string
  /**
   * <p>执行计划</p>
   */
  Execution?: ExecutionPlan
  /**
   * <p>扫描规则</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyRuleSet?: Array<PolicyRuleOperator>
  /**
   * <p>是否输出清单</p>
   */
  EnableManifest?: boolean
  /**
   * <p>输出清单配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Manifest?: ManifestAttr
  /**
   * <p>任务状态</p><p>枚举值：</p><ul><li>0： 启用（enable）</li><li>1： 禁用（disable）</li></ul><p>默认值：0</p>
   */
  Status?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
}

/**
 * DeleteCustomerCluster请求参数结构体
 */
export interface DeleteCustomerClusterRequest {
  /**
   * 文件系统id
   */
  FileSystemId?: string
  /**
   * 客户端集群ID
   */
  ClusterId?: string
}

/**
 * UpdateFileset请求参数结构体
 */
export interface UpdateFilesetRequest {
  /**
   * 文件系统id
   */
  FileSystemId: string
  /**
   * Fileset id
   */
  FsetId: string
  /**
   * 容量配额限定值
   */
  QuotaSizeLimit?: string
  /**
   * 文件数配额限定值
   */
  QuotaFilesLimit?: string
  /**
   * Fileset文件删除操作审计
   */
  AuditState?: string
}
