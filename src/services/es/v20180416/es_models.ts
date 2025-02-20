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
 * 实例操作记录中的流程任务信息
 */
export interface TaskDetail {
  /**
   * 任务名
   */
  Name?: string
  /**
   * 任务进度
   */
  Progress?: number
  /**
   * 任务完成时间
   */
  FinishTime?: string
  /**
   * 子任务
   */
  SubTasks?: Array<SubTaskDetail>
  /**
   * 任务花费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElapsedTime?: number
  /**
   * 任务进度详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessInfo?: ProcessDetail
}

/**
 * ServerlessSpaceUser
 */
export interface ServerlessSpaceUser {
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Username?: string
  /**
   * 用户密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 用户状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 有权限的索引数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndicesScope?: Array<string>
  /**
   * 权限类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivilegeType?: number
}

/**
 * RestartLogstashInstance请求参数结构体
 */
export interface RestartLogstashInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 重启类型，0全量重启，1滚动重启
   */
  Type?: number
}

/**
 * DescribeInstanceOperations请求参数结构体
 */
export interface DescribeInstanceOperationsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 起始时间, e.g. "2019-03-07 16:30:39"
   */
  StartTime: string
  /**
   * 结束时间, e.g. "2019-03-30 20:18:03"
   */
  EndTime: string
  /**
   * 分页起始值
   */
  Offset: number
  /**
   * 分页大小
   */
  Limit: number
}

/**
 * Logstash实例详细信息
 */
export interface LogstashInstanceInfo {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 地域
   */
  Region: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 用户ID
   */
  AppId: number
  /**
   * 用户UIN
   */
  Uin: string
  /**
   * 实例所属VPC的ID
   */
  VpcId: string
  /**
   * 实例所属子网的ID
   */
  SubnetId: string
  /**
   * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
   */
  Status: number
  /**
   * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
   */
  ChargeType: string
  /**
   * 包年包月购买时长,单位:月
   */
  ChargePeriod: number
  /**
   * 自动续费标识。取值范围：  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag: string
  /**
   * 节点规格<li>LOGSTASH.S1.SMALL2：1核2G</li><li>LOGSTASH.S1.MEDIUM4：2核4G</li><li>LOGSTASH.S1.MEDIUM8：2核8G</li><li>LOGSTASH.S1.LARGE16：4核16G</li><li>LOGSTASH.S1.2XLARGE32：8核32G</li><li>LOGSTASH.S1.4XLARGE32：16核32G</li><li>LOGSTASH.S1.4XLARGE64：16核64G</li>
   */
  NodeType: string
  /**
   * 节点个数
   */
  NodeNum: number
  /**
   * 节点磁盘类型
   */
  DiskType: string
  /**
   * 节点磁盘大小，单位GB
   */
  DiskSize: number
  /**
   * Logstash版本号
   */
  LogstashVersion: string
  /**
   * License类型<li>oss：开源版</li><li>xpack：基础版</li>默认值xpack
   */
  LicenseType: string
  /**
   * 实例创建时间
   */
  CreateTime: string
  /**
   * 实例最后修改操作时间
   */
  UpdateTime: string
  /**
   * 实例到期时间
   */
  Deadline: string
  /**
   * 实例节点类型
   */
  Nodes: Array<LogstashNodeInfo>
  /**
   * 实例绑定的ES集群ID
   */
  BindedESInstanceId: string
  /**
   * 实例的YML配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  YMLConfig: string
  /**
   * 扩展文件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendedFiles: Array<LogstashExtendedFile>
  /**
   * 可维护时间段
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationDuration: OperationDuration
  /**
   * CPU数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuNum: number
  /**
   * 实例标签信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList: Array<TagInfo>
  /**
   * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemSize: number
}

/**
 * 操作详情
 */
export interface OperationDetail {
  /**
   * 实例原始配置信息
   */
  OldInfo: Array<KeyValue>
  /**
   * 实例更新后配置信息
   */
  NewInfo: Array<KeyValue>
}

/**
 * DiagnoseInstance返回参数结构体
 */
export interface DiagnoseInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServerlessSpaceV2请求参数结构体
 */
export interface CreateServerlessSpaceV2Request {
  /**
   * vpc信息
   */
  VpcInfo: Array<VpcInfo>
  /**
   * 索引空间名
   */
  SpaceName?: string
  /**
   * 空间名称
   */
  Zone?: string
  /**
   * 白名单列表
   */
  KibanaWhiteIpList?: Array<string>
  /**
   * 空间id
   */
  ZoneId?: number
  /**
   * 标签信息
   */
  TagList?: Array<TagInfo>
}

/**
 * ES公网访问控制信息
 */
export interface EsPublicAcl {
  /**
   * 访问黑名单
   */
  BlackIpList?: Array<string>
  /**
   * 访问白名单
   */
  WhiteIpList?: Array<string>
}

/**
 * ik插件词典信息
 */
export interface DictInfo {
  /**
   * 词典键值
   */
  Key: string
  /**
   * 词典名称
   */
  Name: string
  /**
   * 词典大小，单位B
   */
  Size: number
}

/**
 * DescribeDiagnose返回参数结构体
 */
export interface DescribeDiagnoseResponse {
  /**
   * 诊断报告个数
   */
  Total?: number
  /**
   * 诊断报告列表
   */
  DiagnoseResults?: Array<DiagnoseResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogstashInstanceLogs返回参数结构体
 */
export interface DescribeLogstashInstanceLogsResponse {
  /**
   * 返回的日志条数
   */
  TotalCount?: number
  /**
   * 日志详细信息列表
   */
  InstanceLogList?: Array<InstanceLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogs请求参数结构体
 */
export interface DescribeInstanceLogsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 日志类型，默认值为1
<li>1, 主日志</li>
<li>2, 搜索慢日志</li>
<li>3, 索引慢日志</li>
<li>4, GC日志</li>
   */
  LogType?: number
  /**
   * 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等
   */
  SearchKey?: string
  /**
   * 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  StartTime?: string
  /**
   * 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  EndTime?: string
  /**
   * 分页起始值, 默认值为0
   */
  Offset?: number
  /**
   * 分页大小，默认值为100，最大值100
   */
  Limit?: number
  /**
   * 时间排序方式，默认值为0
<li>0, 降序</li>
<li>1, 升序</li>
   */
  OrderByType?: number
}

/**
 * RestoreClusterSnapshot返回参数结构体
 */
export interface RestoreClusterSnapshotResponse {
  /**
   * 集群实例id
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogstashPipelines返回参数结构体
 */
export interface DeleteLogstashPipelinesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceKibanaTools请求参数结构体
 */
export interface DescribeSpaceKibanaToolsRequest {
  /**
   * space的ID
   */
  SpaceId: string
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
 * DescribeClusterSnapshot请求参数结构体
 */
export interface DescribeClusterSnapshotRequest {
  /**
   * 集群实例Id，格式：es-xxxx
   */
  InstanceId: string
  /**
   * 快照仓库名称
   */
  RepositoryName?: string
  /**
   * 集群快照名称
   */
  SnapshotName?: string
}

/**
 * 指标数据map
 */
export interface MetricMapByIndexId {
  /**
   * 实例id
   */
  IndexId?: string
  /**
   * 指标数据
   */
  MetricAllData?: MetricAllData
}

/**
 * UpdateLogstashPipelineDesc返回参数结构体
 */
export interface UpdateLogstashPipelineDescResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回的实例个数
   */
  TotalCount?: number
  /**
   * 实例详细信息列表
   */
  InstanceList?: Array<InstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogs返回参数结构体
 */
export interface DescribeInstanceLogsResponse {
  /**
   * 返回的日志条数
   */
  TotalCount?: number
  /**
   * 日志详细信息列表
   */
  InstanceLogList?: Array<InstanceLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引元数据字段
 */
export interface IndexMetaField {
  /**
   * 索引类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexType?: string
  /**
   * 索引名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexName?: string
  /**
   * 索引元数据JSON
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexMetaJson?: string
  /**
   * 索引状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStatus?: string
  /**
   * 索引存储大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStorage?: number
  /**
   * 索引创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexCreateTime?: string
  /**
   * 后备索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackingIndices?: Array<BackingIndexMetaField>
  /**
   * 索引所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 索引所属集群名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 索引所属集群版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterVersion?: string
  /**
   * 索引生命周期字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexPolicyField?: IndexPolicyField
  /**
   * 索引自治字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexOptionsField?: IndexOptionsField
  /**
   * 索引配置字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexSettingsField?: IndexSettingsField
  /**
   * 索引别名字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexAliasesField?: Array<string>
  /**
   * 索引所属集群APP ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 索引文档数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexDocs?: number
}

/**
 * UpdateServerlessSpace请求参数结构体
 */
export interface UpdateServerlessSpaceRequest {
  /**
   * Serveless索引空间ID
   */
  SpaceId: string
  /**
   * Serveless索引空间名
   */
  SpaceName?: string
  /**
   * kibana内网开关
   */
  KibanaPrivateAccess?: string
  /**
   * kibana公网开关
   */
  KibanaPublicAccess?: string
  /**
   * kibana公网白名单
   */
  KibanaPublicAcl?: EsAcl
}

/**
 * 实例专用主节点相关信息
 */
export interface MasterNodeInfo {
  /**
   * 是否启用了专用主节点
   */
  EnableDedicatedMaster: boolean
  /**
   * 专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  MasterNodeType: string
  /**
   * 专用主节点个数
   */
  MasterNodeNum: number
  /**
   * 专用主节点CPU核数
   */
  MasterNodeCpuNum: number
  /**
   * 专用主节点内存大小，单位GB
   */
  MasterNodeMemSize: number
  /**
   * 专用主节点磁盘大小，单位GB
   */
  MasterNodeDiskSize: number
  /**
   * 专用主节点磁盘类型
   */
  MasterNodeDiskType: string
}

/**
 * DiagnoseInstance请求参数结构体
 */
export interface DiagnoseInstanceRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * 需要触发的诊断项
   */
  DiagnoseJobs?: Array<string>
  /**
   * 需要诊断的索引，支持通配符
   */
  DiagnoseIndices?: string
}

/**
 * Logstash绑定的ES集群信息
 */
export interface LogstashBindedES {
  /**
   * ES集群ID
   */
  ESInstanceId: string
  /**
   * ES集群用户名
   */
  ESUserName: string
  /**
   * ES集群密码
   */
  ESPassword: string
}

/**
 * UpdateDiagnoseSettings请求参数结构体
 */
export interface UpdateDiagnoseSettingsRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * 0：开启智能运维；-1：关闭智能运维
   */
  Status?: number
  /**
   * 智能运维每天定时巡检时间，时间格式为HH:00:00，例如15:00:00
   */
  CronTime?: string
}

/**
 * DeleteServerlessInstance返回参数结构体
 */
export interface DeleteServerlessInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallInstanceModel返回参数结构体
 */
export interface InstallInstanceModelResponse {
  /**
   * 发起异步流程的flowId
   */
  FlowId?: string
  /**
   * 调用接口的错误信息
   */
  ErrMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceOperations返回参数结构体
 */
export interface DescribeInstanceOperationsResponse {
  /**
   * 操作记录总数
   */
  TotalCount?: number
  /**
   * 操作记录
   */
  Operations?: Array<Operation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Logstash管道信息
 */
export interface LogstashPipeline {
  /**
   * 管道ID
   */
  PipelineId: string
  /**
   * 管道描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PipelineDesc: string
  /**
   * 管道配置内容
   */
  Config: string
  /**
   * 管道的Worker数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workers: number
  /**
   * 管道批处理大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchSize: number
  /**
   * 管道批处理延迟
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchDelay: number
  /**
   * 管道缓冲队列类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueType: string
  /**
   * 管道缓冲队列大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueMaxBytes: string
  /**
   * 管道缓冲队列检查点写入数
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueCheckPointWrites: number
}

/**
 * UpdateRequestTargetNodeTypes返回参数结构体
 */
export interface UpdateRequestTargetNodeTypesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能运维诊断参数
 */
export interface JobParam {
  /**
   * 诊断项列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Jobs: Array<string>
  /**
   * 诊断索引
   */
  Indices: string
  /**
   * 历史诊断时间
   */
  Interval: number
}

/**
 * 索引备份失败的数据结构
 */
export interface Failures {
  /**
   * 备份失败的索引名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: string
  /**
   * 快照失败的分片号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShardId?: number
  /**
   * 快照失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 快照失败的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * DeleteLogstashInstance返回参数结构体
 */
export interface DeleteLogstashInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogstashInstances请求参数结构体
 */
export interface DescribeLogstashInstancesRequest {
  /**
   * 实例所属可用区，不传则默认所有可用区
   */
  Zone?: string
  /**
   * 实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 实例名称列表
   */
  InstanceNames?: Array<string>
  /**
   * 分页起始值, 默认值0
   */
  Offset?: number
  /**
   * 分页大小，默认值20
   */
  Limit?: number
  /**
   * 排序字段<li>1：实例ID</li><li>2：实例名称</li><li>3：可用区</li><li>4：创建时间</li>若orderKey未传递则按创建时间降序排序
   */
  OrderByKey?: number
  /**
   * 排序方式<li>0：升序</li><li>1：降序</li>若传递了orderByKey未传递orderByType, 则默认升序
   */
  OrderByType?: number
  /**
   * VpcId 筛选项
   */
  VpcIds?: Array<string>
  /**
   * 标签信息列表
   */
  TagList?: Array<TagInfo>
}

/**
 * 索引自治字段
 */
export interface IndexOptionsField {
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireMaxAge?: string
  /**
   * 过期大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireMaxSize?: string
  /**
   * 滚动周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RolloverMaxAge?: string
  /**
   * 是否开启动态滚动
注意：此字段可能返回 null，表示取不到有效值。
   */
  RolloverDynamic?: string
  /**
   * 是否开启动态分片
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShardNumDynamic?: string
  /**
   * 时间分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimestampField?: string
  /**
   * 写入模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteMode?: string
}

/**
 * CreateServerlessSpaceV2返回参数结构体
 */
export interface CreateServerlessSpaceV2Response {
  /**
   * 空间ID
   */
  SpaceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Serverless索引空间信息
 */
export interface ServerlessSpace {
  /**
   * Serverless索引空间ID
   */
  SpaceId?: string
  /**
   * Serverless索引空间名
   */
  SpaceName?: string
  /**
   * Serverless索引空间状态，0正常，-1已删除
   */
  Status?: number
  /**
   * 创建日期
   */
  CreateTime?: string
  /**
   * 空间内索引数量
   */
  IndexCount?: number
  /**
   * kibana公网uri
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaUrl?: string
  /**
   * kibana内网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPrivateUrl?: string
  /**
   * 空间内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexAccessUrl?: string
  /**
   * 空间白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPublicAcl?: EsAcl
  /**
   * 空间检索分析域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaEmbedUrl?: string
  /**
   * 数据联路
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiDataList?: DiData
  /**
   * 空间vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcInfo?: Array<VpcInfo>
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * kibana公网开关，0关闭，1开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableKibanaPublicAccess?: number
  /**
   * kibana内网开关，0关闭，1开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableKibanaPrivateAccess?: number
  /**
   * 空间所属appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * //默认en， 可选zh-CN
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaLanguage?: string
  /**
   * 0
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: number
  /**
   * key:value
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<TagInfo>
}

/**
 * DeleteClusterSnapshot请求参数结构体
 */
export interface DeleteClusterSnapshotRequest {
  /**
   * 集群实例Id，格式：es-xxxx
   */
  InstanceId: string
  /**
   * 快照仓库名称
   */
  RepositoryName: string
  /**
   * 集群快照名称
   */
  SnapshotName: string
}

/**
 * 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项）
 */
export interface SubTaskDetail {
  /**
   * 子任务名
   */
  Name: string
  /**
   * 子任务结果
   */
  Result: boolean
  /**
   * 子任务错误信息
   */
  ErrMsg: string
  /**
   * 子任务类型
   */
  Type: string
  /**
   * 子任务状态，0处理中 1成功 -1失败
   */
  Status: number
  /**
   * 升级检查失败的索引名
   */
  FailedIndices: Array<string>
  /**
   * 子任务结束时间
   */
  FinishTime: string
  /**
   * 子任务等级，1警告 2失败
   */
  Level: number
}

/**
 * CheckMigrateIndexMetaData返回参数结构体
 */
export interface CheckMigrateIndexMetaDataResponse {
  /**
   * 不存在于目标索引时间字段相同的字段
   */
  MappingTimeFieldCheckFailedIndexArr?: Array<string>
  /**
   * @timestamp不为date类型，与目标索引时间字段冲突
   */
  MappingTimeTypeCheckFailedIndexArr?: Array<string>
  /**
   * 索引的创建时间不在 serverless的存储周期内
   */
  SettingCheckFailedIndexArr?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClusterSnapshot返回参数结构体
 */
export interface DeleteClusterSnapshotResponse {
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全部指标数据
 */
export interface MetricAllData {
  /**
   * 索引流量
   */
  IndexTraffic?: number
  /**
   * 存储大小
   */
  Storage?: number
  /**
   * 读请求次数
   */
  ReadReqTimes?: number
  /**
   * 写请求次数
   */
  WriteReqTimes?: number
  /**
   * 文档数量
   */
  DocCount?: number
}

/**
 * 配置组信息
 */
export interface EsConfigSetInfo {
  /**
   * 配置组类型，如ldap,ad等
   */
  Type: string
  /**
   * "{\"order\":0,\"url\":\"ldap://10.0.1.72:389\",\"bind_dn\":\"cn=admin,dc=tencent,dc=com\",\"user_search.base_dn\":\"dc=tencent,dc=com\",\"user_search.filter\":\"(cn={0})\",\"group_search.base_dn\":\"dc=tencent,dc=com\"}"
   */
  EsConfig: string
}

/**
 * GetRequestTargetNodeTypes返回参数结构体
 */
export interface GetRequestTargetNodeTypesResponse {
  /**
   * 接收请求的目标节点类型列表
   */
  TargetNodeTypes?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ES集群操作详细信息
 */
export interface Operation {
  /**
   * 操作唯一id
   */
  Id?: number
  /**
   * 操作开始时间
   */
  StartTime?: string
  /**
   * 操作类型
   */
  Type?: string
  /**
   * 操作详情
   */
  Detail?: OperationDetail
  /**
   * 操作结果
   */
  Result?: string
  /**
   * 流程任务信息
   */
  Tasks?: Array<TaskDetail>
  /**
   * 操作进度
   */
  Progress?: number
  /**
   * 回滚标记， 0未回滚 ，1回滚中，2已回滚
   */
  RollbackTag?: number
  /**
   * 操作者Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
}

/**
 * 数据接入cvm数据源信息
 */
export interface DiDataSourceCvm {
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 采集路径列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogPaths?: Array<string>
  /**
   * cvm实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmInstances?: Array<DiDataSourceCvmInstance>
  /**
   * 采集器id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorId?: string
}

/**
 * ES集群日志详细信息
 */
export interface InstanceLog {
  /**
   * 日志时间
   */
  Time: string
  /**
   * 日志级别
   */
  Level: string
  /**
   * 集群节点ip
   */
  Ip: string
  /**
   * 日志内容
   */
  Message: string
  /**
   * 集群节点ID
   */
  NodeID?: string
}

/**
 * CreateIndex返回参数结构体
 */
export interface CreateIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServerlessSpaceUser返回参数结构体
 */
export interface DescribeServerlessSpaceUserResponse {
  /**
   * 用户数组
   */
  ServerlessSpaceUsers?: Array<ServerlessSpaceUser>
  /**
   * 用户总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能运维日志详情
 */
export interface LogDetail {
  /**
   * 日志异常名
   */
  Key: string
  /**
   * 日志异常处理建议
   */
  Advise: string
  /**
   * 日志异常名出现次数
   */
  Count: number
}

/**
 * DescribeLogstashInstanceLogs请求参数结构体
 */
export interface DescribeLogstashInstanceLogsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 日志类型，默认值为1
<li>1, 主日志</li>
<li>2, 慢日志</li>
<li>3, GC日志</li>
   */
  LogType?: number
  /**
   * 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等
   */
  SearchKey?: string
  /**
   * 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  StartTime?: string
  /**
   * 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
   */
  EndTime?: string
  /**
   * 分页起始值, 默认值为0
   */
  Offset?: number
  /**
   * 分页大小，默认值为100，最大值100
   */
  Limit?: number
  /**
   * 时间排序方式，默认值为0
<li>0, 降序</li>
<li>1, 升序</li>
   */
  OrderByType?: number
}

/**
 * DescribeIndexMeta返回参数结构体
 */
export interface DescribeIndexMetaResponse {
  /**
   * 索引元数据字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexMetaField?: IndexMetaField
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能运维支持的诊断项和元信息
 */
export interface DiagnoseJobMeta {
  /**
   * 智能运维诊断项英文名
   */
  JobName: string
  /**
   * 智能运维诊断项中文名
   */
  JobZhName: string
  /**
   * 智能运维诊断项描述
   */
  JobDescription: string
}

/**
 * StartLogstashPipelines请求参数结构体
 */
export interface StartLogstashPipelinesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 管道ID列表
   */
  PipelineIds: Array<string>
}

/**
 * DescribeServerlessMetrics请求参数结构体
 */
export interface DescribeServerlessMetricsRequest {
  /**
   * space空间id
   */
  SpaceId?: string
  /**
   * index索引id
   */
  IndexId?: string
  /**
   * 指标类型，暂时只支持Storage(存储大小),AllMetric(所有存储指标：索引流量、存储大小、文档数量、读请求和写请求)
   */
  MetricType?: Array<string>
  /**
   * 时间长度类型DurationType(1: 3小时, 2: 昨天1天,3: 今日0点到现在)
   */
  DurationType?: number
  /**
   * 索引数据
   */
  BatchIndexList?: Array<string>
}

/**
 * GetDiagnoseSettings返回参数结构体
 */
export interface GetDiagnoseSettingsResponse {
  /**
   * 智能运维诊断项和元信息
   */
  DiagnoseJobMetas?: Array<DiagnoseJobMeta>
  /**
   * 0：开启智能运维；-1：关闭智能运维
   */
  Status?: number
  /**
   * 智能运维每天定时巡检时间
   */
  CronTime?: string
  /**
   * 智能运维当天已手动触发诊断次数
   */
  Count?: number
  /**
   * 智能运维每天最大可手动触发次数
   */
  MaxCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServerlessInstance请求参数结构体
 */
export interface CreateServerlessInstanceRequest {
  /**
   * 索引名，需以-AppId结尾
   */
  IndexName: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 创建的索引元数据JSON，如mappings、settings
   */
  IndexMetaJson?: string
  /**
   * 创建索引的空间ID
   */
  SpaceId?: string
  /**
   * 创建索引的用户名
   */
  Username?: string
  /**
   * 创建索引的密码
   */
  Password?: string
  /**
   * 创建数据接入
   */
  ServerlessDi?: ServerlessDi
  /**
   * 是否自行添加白名单ip
   */
  AutoGetIp?: number
  /**
   * 标签信息
   */
  TagList?: Array<TagInfo>
  /**
   * kibana公网白名单
   */
  KibanaWhiteIpList?: Array<string>
}

/**
 * tke pod标签
 */
export interface DiSourceTkePodLabel {
  /**
   * 标签key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 标签value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * DeleteServerlessSpaceUser返回参数结构体
 */
export interface DeleteServerlessSpaceUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据接入信息
 */
export interface DiData {
  /**
   * 数据接入id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiId?: string
  /**
   * 数据接入创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 数据接入状态，0处理中，1正常，-2删除中，-3已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * cvm数据源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiDataSourceCvm?: DiDataSourceCvm
  /**
   * tke数据源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiDataSourceTke?: DiDataSourceTke
  /**
   * serverless目的端信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiDataSinkServerless?: DiDataSinkServerless
  /**
   * 数据接入类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiDataSourceType?: string
}

/**
 * UpgradeLicense返回参数结构体
 */
export interface UpgradeLicenseResponse {
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OperationDetail使用此结构的数组描述新旧配置
 */
export interface KeyValue {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * Logstash扩展文件信息
 */
export interface LogstashExtendedFile {
  /**
   * 扩展文件名称
   */
  Name: string
  /**
   * 扩展文件大小，单位B
   */
  Size: number
}

/**
 * UpdateLogstashInstance请求参数结构体
 */
export interface UpdateLogstashInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例节点数量
   */
  NodeNum?: number
  /**
   * 实例YML配置
   */
  YMLConfig?: string
  /**
   * 实例绑定的ES集群信息
   */
  BindedES?: LogstashBindedES
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 扩展文件列表
   */
  ExtendedFiles?: Array<LogstashExtendedFile>
  /**
   * 实例规格
   */
  NodeType?: string
  /**
   * 节点磁盘容量
   */
  DiskSize?: number
  /**
   * 可维护时间段
   */
  OperationDuration?: OperationDurationUpdated
}

/**
 * UpdateRequestTargetNodeTypes请求参数结构体
 */
export interface UpdateRequestTargetNodeTypesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 接收请求的目标节点类型列表
   */
  TargetNodeTypes: Array<string>
}

/**
 * DescribeLogstashInstances返回参数结构体
 */
export interface DescribeLogstashInstancesResponse {
  /**
   * 返回的实例个数
   */
  TotalCount: number
  /**
   * 实例详细信息列表
   */
  InstanceList: Array<LogstashInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InstallInstanceModel请求参数结构体
 */
export interface InstallInstanceModelRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 客户上传到cos的模型地址，单次请求限制一个。cos文件为压缩文件，格式包括：zip、tgz和tar.gz
   */
  UsrCosModelUrlList?: Array<string>
  /**
   * 客户指定安装的模型名称，可为空，默认为模型文件名
   */
  ModelNames?: Array<string>
  /**
   * 模型使用的任务类型，包括：fill_mask, ner, question_answering, text_classification, text_embedding, text_expansion, text_similarity和zero_shot_classification，默认为text_embedding
   */
  TaskTypes?: Array<string>
}

/**
 * 数据接入serverless目的端信息
 */
export interface DiDataSinkServerless {
  /**
   * serverless实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerlessId?: string
}

/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDiagnoseSettings返回参数结构体
 */
export interface UpdateDiagnoseSettingsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能运维集群配置详情
 */
export interface SettingDetail {
  /**
   * 配置key
   */
  Key: string
  /**
   * 配置当前值
   */
  Value: string
  /**
   * 配置处理建议
   */
  Advise: string
}

/**
 * DescribeLogstashInstanceOperations返回参数结构体
 */
export interface DescribeLogstashInstanceOperationsResponse {
  /**
   * 操作记录总数
   */
  TotalCount: number
  /**
   * 操作记录
   */
  Operations: Array<Operation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIndex请求参数结构体
 */
export interface CreateIndexRequest {
  /**
   * ES集群ID
   */
  InstanceId: string
  /**
   * 创建的索引类型。auto：自治索引；normal：普通索引
   */
  IndexType: string
  /**
   * 创建的索引名
   */
  IndexName: string
  /**
   * 【必填】创建的索引元数据JSON，如mappings、settings
   */
  IndexMetaJson: string
  /**
   * 集群访问用户名
   */
  Username?: string
  /**
   * 集群访问密码
   */
  Password?: string
}

/**
 * Logstash管道信息
 */
export interface LogstashPipelineInfo {
  /**
   * 管道ID
   */
  PipelineId: string
  /**
   * 管道描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PipelineDesc: string
  /**
   * 管道配置内容
   */
  Config: string
  /**
   * 管道状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 管道的Worker数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workers: number
  /**
   * 管道批处理大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchSize: number
  /**
   * 管道批处理延迟
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchDelay: number
  /**
   * 管道缓冲队列类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueType: string
  /**
   * 管道缓冲队列大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueMaxBytes: string
  /**
   * 管道缓冲队列检查点写入数
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueCheckPointWrites: number
}

/**
 * UpdatePlugins请求参数结构体
 */
export interface UpdatePluginsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 需要安装的插件名列表
   */
  InstallPluginList?: Array<string>
  /**
   * 需要卸载的插件名列表
   */
  RemovePluginList?: Array<string>
  /**
   * 是否强制重启，默认值false
   */
  ForceRestart?: boolean
  /**
   * 是否重新安装，默认值false
   */
  ForceUpdate?: boolean
  /**
   * 0：系统插件
   */
  PluginType?: number
}

/**
 * RestoreClusterSnapshot请求参数结构体
 */
export interface RestoreClusterSnapshotRequest {
  /**
   * 集群实例Id，格式：es-xxxx
   */
  InstanceId: string
  /**
   * 仓库名称
   */
  RepositoryName: string
  /**
   * 集群快照名称
   */
  SnapshotName: string
  /**
   * 目标集群实例Id，格式：es-xxxx，如果是恢复到本地，则和InstanceId一致
   */
  TargetInstanceId: string
  /**
   * elastic用户名对应的密码信息
   */
  Password?: string
  /**
   * 要在所有恢复的索引中添加或更改的设置的逗号分隔列表。使用此参数可以在恢复快照时覆盖索引设置。
   */
  IndexSettings?: string
  /**
   * 不应从快照还原的以逗号分隔的索引设置列表。
   */
  IncludeGlobalState?: Array<string>
  /**
   * 需要恢复的索引名称，非必填，为空则表示恢复所有

支持传多个索引名称
   */
  Indices?: string
  /**
   * 如果为 false，则如果快照中包含的一个或多个索引没有所有主分片可用，则整个恢复操作将失败。默认为 false,

如果为 true，则允许恢复具有不可用分片的索引的部分快照。只有成功包含在快照中的分片才会被恢复。所有丢失的碎片将被重新创建为空
   */
  Partial?: string
}

/**
 * DescribeServerlessSpaceUser请求参数结构体
 */
export interface DescribeServerlessSpaceUserRequest {
  /**
   * 空间的ID
   */
  SpaceId: string
  /**
   * 游标
   */
  Offset?: number
  /**
   * 页条数
   */
  Limit?: number
  /**
   * 用户名列表过滤
   */
  UserNames?: Array<string>
  /**
   * 用户类型
   */
  UserTypes?: Array<number | bigint>
  /**
   * 权限类型
   */
  PrivilegeTypes?: Array<number | bigint>
}

/**
 * 智能运维指标维度
 */
export interface Dimension {
  /**
   * 智能运维指标维度Key
   */
  Key: string
  /**
   * 智能运维指标维度值
   */
  Value: string
}

/**
 * DescribeServerlessSpaces返回参数结构体
 */
export interface DescribeServerlessSpacesResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * Serverless空间信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerlessSpaces?: Array<ServerlessSpace>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewInstance请求参数结构体
 */
export interface InquirePriceRenewInstanceRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
}

/**
 * Kibana视图数据
 */
export interface KibanaView {
  /**
   * Kibana节点IP
   */
  Ip: string
  /**
   * 节点总磁盘大小
   */
  DiskSize: number
  /**
   * 磁盘使用率
   */
  DiskUsage: number
  /**
   * 节点内存大小
   */
  MemSize: number
  /**
   * 内存使用率
   */
  MemUsage: number
  /**
   * 节点cpu个数
   */
  CpuNum: number
  /**
   * cpu使用率
   */
  CpuUsage: number
  /**
   * 可用区
   */
  Zone: string
  /**
   * ts-0noqayxu-az6-hot-03222010-0
   */
  NodeId?: string
}

/**
 * 智能运维指标
 */
export interface Metric {
  /**
   * 指标维度族
   */
  Dimensions: Array<Dimension>
  /**
   * 指标值
   */
  Value: number
}

/**
 * UpdateInstance返回参数结构体
 */
export interface UpdateInstanceResponse {
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIndex请求参数结构体
 */
export interface DeleteIndexRequest {
  /**
   * ES集群ID
   */
  InstanceId: string
  /**
   * 删除的索引类型。auto：自治索引；normal：普通索引
   */
  IndexType: string
  /**
   * 删除的索引名
   */
  IndexName: string
  /**
   * 集群访问用户名
   */
  Username?: string
  /**
   * 集群访问密码
   */
  Password?: string
  /**
   * 后备索引名
   */
  BackingIndexName?: string
}

/**
 * DescribeViews请求参数结构体
 */
export interface DescribeViewsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * DescribeIndexList返回参数结构体
 */
export interface DescribeIndexListResponse {
  /**
   * 索引元数据字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexMetaFields?: Array<IndexMetaField>
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserCosSnapshotList请求参数结构体
 */
export interface DescribeUserCosSnapshotListRequest {
  /**
   * cos桶名
   */
  CosBucket?: string
  /**
   * bucket 桶下的备份路径
   */
  BasePath?: string
  /**
   * 云上集群迁移集群名
   */
  ClusterInstanceId?: string
}

/**
 * DescribeLogstashInstanceOperations请求参数结构体
 */
export interface DescribeLogstashInstanceOperationsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 起始时间, e.g. "2019-03-07 16:30:39"
   */
  StartTime?: string
  /**
   * 结束时间, e.g. "2019-03-30 20:18:03"
   */
  EndTime?: string
  /**
   * 分页起始值
   */
  Offset?: number
  /**
   * 分页大小
   */
  Limit?: number
}

/**
 * 插件信息
 */
export interface DescribeInstancePluginInfo {
  /**
   * 插件名
   */
  PluginName: string
  /**
   * 插件版本
   */
  PluginVersion: string
  /**
   * 插件描述
   */
  PluginDesc: string
  /**
   * 插件状态：-2 已卸载 -1 卸载中 0 安装中 1 已安装
   */
  Status: number
  /**
   * 插件是否可卸载
   */
  Removable: boolean
  /**
   * 0：系统插件
   */
  PluginType: number
  /**
   * 插件变更时间
   */
  PluginUpdateTime: string
}

/**
 * CreateLogstashInstance返回参数结构体
 */
export interface CreateLogstashInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServerlessInstance请求参数结构体
 */
export interface DeleteServerlessInstanceRequest {
  /**
   * serverless实例ID
   */
  InstanceId: string
}

/**
 * SaveAndDeployLogstashPipeline请求参数结构体
 */
export interface SaveAndDeployLogstashPipelineRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例管道信息
   */
  Pipeline: LogstashPipeline
  /**
   * 操作类型<li>1：只保存</li><li>2：保存并部署</li>
   */
  OpType?: number
}

/**
 * 数据接入tke数据源信息
 */
export interface DiDataSourceTke {
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * tke实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TkeId?: string
  /**
   * 采集器id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorId?: string
  /**
   * 采集源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorName?: string
  /**
   * 采集器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorType?: string
  /**
   * 采集器版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorVersion?: string
  /**
   * tke包含的命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeNamespaces?: Array<string>
  /**
   * tke不包含的命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExcludeNamespaces?: Array<string>
  /**
   * tke pod标签名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodLabelKeys?: Array<string>
  /**
   * tke pod标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodLabelValues?: Array<string>
  /**
   * tke容器名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerName?: string
  /**
   * tke采集器beat配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigContent?: string
  /**
   * /
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputType?: string
  /**
   * TKE 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputPath?: string
}

/**
 * 集群维度视图数据
 */
export interface ClusterView {
  /**
   * 集群健康状态
   */
  Health?: number
  /**
   * 集群是否可见
   */
  Visible: number
  /**
   * 集群是否熔断
   */
  Break: number
  /**
   * 平均磁盘使用率
   */
  AvgDiskUsage: number
  /**
   * 平均内存使用率
   */
  AvgMemUsage: number
  /**
   * 平均cpu使用率
   */
  AvgCpuUsage: number
  /**
   * 集群总存储大小
   */
  TotalDiskSize: number
  /**
   * 客户端请求节点
   */
  TargetNodeTypes: Array<string>
  /**
   * 在线节点数
   */
  NodeNum: number
  /**
   * 总节点数
   */
  TotalNodeNum: number
  /**
   * 数据节点数
   */
  DataNodeNum: number
  /**
   * 索引数
   */
  IndexNum: number
  /**
   * 文档数
   */
  DocNum: number
  /**
   * 磁盘已使用字节数
   */
  DiskUsedInBytes: number
  /**
   * 分片个数
   */
  ShardNum: number
  /**
   * 主分片个数
   */
  PrimaryShardNum: number
  /**
   * 迁移中的分片个数
   */
  RelocatingShardNum: number
  /**
   * 初始化中的分片个数
   */
  InitializingShardNum: number
  /**
   * 未分配的分片个数
   */
  UnassignedShardNum: number
  /**
   * 企业版COS存储容量大小，单位GB
   */
  TotalCosStorage: number
  /**
   * 企业版集群可搜索快照cos存放的bucket名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchableSnapshotCosBucket: string
  /**
   * 企业版集群可搜索快照cos所属appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchableSnapshotCosAppId: string
}

/**
 * 普通索引信息列表
 */
export interface CommonIndexInfo {
  /**
   * 普通索引名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexName?: string
  /**
   * 分片状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsShardComplete?: number
}

/**
 * InquirePriceRenewInstance返回参数结构体
 */
export interface InquirePriceRenewInstanceResponse {
  /**
   * 刊例价，即集群原始价格
   */
  OriginalPrice?: number
  /**
   * 折后价
   */
  DiscountPrice?: number
  /**
   * 折扣，如65折
   */
  Discount?: number
  /**
   * 货币，如CNY代表人民币
   */
  Currency?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClusterSnapshot请求参数结构体
 */
export interface CreateClusterSnapshotRequest {
  /**
   * 实例名称
   */
  InstanceId: string
  /**
   * 快照名称
   */
  SnapshotName: string
  /**
   * 索引名称
   */
  Indices?: string
}

/**
 * DeleteLogstashPipelines请求参数结构体
 */
export interface DeleteLogstashPipelinesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 管道ID列表
   */
  PipelineIds?: Array<string>
}

/**
 * 智能运维诊断结果
 */
export interface DiagnoseResult {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * 诊断报告ID
   */
  RequestId: string
  /**
   * 诊断触发时间
   */
  CreateTime: string
  /**
   * 诊断是否完成
   */
  Completed: boolean
  /**
   * 诊断总得分
   */
  Score: number
  /**
   * 诊断类型，2 定时诊断，3 客户手动触发诊断
   */
  JobType: number
  /**
   * 诊断参数，如诊断时间，诊断索引等
   */
  JobParam: JobParam
  /**
   * 诊断项结果列表
   */
  JobResults: Array<DiagnoseJobResult>
}

/**
 * RestartKibana请求参数结构体
 */
export interface RestartKibanaRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
}

/**
 * SaveAndDeployLogstashPipeline返回参数结构体
 */
export interface SaveAndDeployLogstashPipelineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引自治字段
 */
export interface ServerlessIndexOptionsField {
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireMaxAge?: string
  /**
   * 时间分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimestampField?: string
  /**
   * 标准存储时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  SinkCycleAge?: string
  /**
   * 标准存储时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandardStorageAge?: string
}

/**
 * UpdateDictionaries请求参数结构体
 */
export interface UpdateDictionariesRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * 安装时填IK分词主词典COS地址，删除时填词典名如test.dic
   */
  IkMainDicts?: Array<string>
  /**
   * 安装时填IK分词停用词词典COS地址，删除时填词典名如test.dic
   */
  IkStopwords?: Array<string>
  /**
   * 安装时填同义词词典COS地址，删除时填词典名如test.dic
   */
  Synonym?: Array<string>
  /**
   * 安装时填QQ分词词典COS地址，删除时填词典名如test.dic
   */
  QQDict?: Array<string>
  /**
   * 0：安装；1：删除。默认值0
   */
  UpdateType?: number
  /**
   * 是否强制重启集群。默认值false
   */
  ForceRestart?: boolean
}

/**
 * 集群可运维时间
 */
export interface OperationDuration {
  /**
   * 维护周期，表示周一到周日，可取值[0, 6]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Periods: Array<number | bigint>
  /**
   * 维护开始时间
   */
  TimeStart: string
  /**
   * 维护结束时间
   */
  TimeEnd: string
  /**
   * 时区，以UTC形式表示
   */
  TimeZone: string
}

/**
 * UpgradeLicense请求参数结构体
 */
export interface UpgradeLicenseRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType: string
  /**
   * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表（目前仅支持指定一张代金券）
   */
  VoucherIds?: Array<string>
  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li><li>不传参时会默认维持原状，传参时需注意只能由不开启变为开启，无法由开启变为不开启</li>
   */
  BasicSecurityType?: number
  /**
   * 是否强制重启<li>true强制重启</li><li>false不强制重启</li> 默认值false
   */
  ForceRestart?: boolean
}

/**
 * DescribeIndexList请求参数结构体
 */
export interface DescribeIndexListRequest {
  /**
   * 索引类型。auto：自治索引；normal：普通索引
   */
  IndexType: string
  /**
   * ES集群ID
   */
  InstanceId?: string
  /**
   * 索引名，若填空则获取所有索引
   */
  IndexName?: string
  /**
   * 集群访问用户名
   */
  Username?: string
  /**
   * 集群访问密码
   */
  Password?: string
  /**
   * 分页起始位置
   */
  Offset?: number
  /**
   * 一页展示数量
   */
  Limit?: number
  /**
   * 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime
   */
  OrderBy?: string
  /**
   * 过滤索引状态
   */
  IndexStatusList?: Array<string>
  /**
   * 排序顺序，支持asc、desc，默认为desc 数据格式"asc","desc"
   */
  Order?: string
}

/**
 * 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘）
 */
export interface NodeInfo {
  /**
   * 节点数量
   */
  NodeNum: number
  /**
   * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType: string
  /**
   * 节点类型<li>hotData: 热数据节点</li>
<li>warmData: 冷数据节点</li>
<li>dedicatedMaster: 专用主节点</li>
默认值为hotData
   */
  Type?: string
  /**
   * 节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
   */
  DiskType?: string
  /**
   * 节点磁盘容量（单位GB）
   */
  DiskSize?: number
  /**
   * 节点本地盘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDiskInfo?: LocalDiskInfo
  /**
   * 节点磁盘块数
   */
  DiskCount?: number
  /**
   * 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密
   */
  DiskEncrypt?: number
  /**
   * cpu数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuNum?: number
  /**
   * 内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemSize?: number
  /**
   * /
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskEnhance?: number
}

/**
 * ES cos自动备份信息
 */
export interface CosBackup {
  /**
   * 是否开启cos自动备份
   */
  IsAutoBackup: boolean
  /**
   * 自动备份执行时间（精确到小时）, e.g. "22:00"
   */
  BackupTime: string
}

/**
 * DescribeLogstashPipelines返回参数结构体
 */
export interface DescribeLogstashPipelinesResponse {
  /**
   * 管道总数
   */
  TotalCount: number
  /**
   * 管道列表
   */
  LogstashPipelineList: Array<LogstashPipelineInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群可运维时间
 */
export interface OperationDurationUpdated {
  /**
   * 维护周期，表示周一到周日，可取值[0, 6]
   */
  Periods: Array<number | bigint>
  /**
   * 维护开始时间
   */
  TimeStart: string
  /**
   * 维护结束时间
   */
  TimeEnd: string
  /**
   * 时区，以UTC形式表示
   */
  TimeZone: string
  /**
   * ES集群ID数组
   */
  MoreInstances?: Array<string>
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 可用区
   */
  Zone: string
  /**
   * 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"、"7.10.1"）
   */
  EsVersion: string
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
   */
  Password: string
  /**
   * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
   */
  InstanceName?: string
  /**
   * 已废弃请使用NodeInfoList
节点数量（2-50个）
   */
  NodeNum?: number
  /**
   * 计费类型<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li>默认值POSTPAID_BY_HOUR
   */
  ChargeType?: string
  /**
   * 包年包月购买时长（单位由参数TimeUnit决定）
   */
  ChargePeriod?: number
  /**
   * 自动续费标识<li>RENEW_FLAG_AUTO：自动续费</li><li>RENEW_FLAG_MANUAL：不自动续费，用户手动续费</li>ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费
   */
  RenewFlag?: string
  /**
   * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType?: string
  /**
   * 已废弃请使用NodeInfoList
节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高性能云硬盘</li><li> CLOUD_HSSD：增强型SSD云硬盘</li><li> CLOUD_BSSD：通用型SSD云硬盘</li>默认值CLOUD_SSD
   */
  DiskType?: string
  /**
   * 已废弃请使用NodeInfoList
节点磁盘容量（单位GB）
   */
  DiskSize?: number
  /**
   * 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”）
   */
  TimeUnit?: string
  /**
   * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表（目前仅支持指定一张代金券）
   */
  VoucherIds?: Array<string>
  /**
   * 已废弃请使用NodeInfoList
是否创建专用主节点<li>true：开启专用主节点</li><li>false：不开启专用主节点</li>默认值false
   */
  EnableDedicatedMaster?: boolean
  /**
   * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传）
   */
  MasterNodeNum?: number
  /**
   * 已废弃请使用NodeInfoList
专用主节点类型（EnableDedicatedMaster为true时必传）<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  MasterNodeType?: string
  /**
   * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义）
   */
  MasterNodeDiskSize?: number
  /**
   * 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义）
   */
  ClusterNameInConf?: string
  /**
   * 集群部署方式<li>0：单可用区部署</li><li>1：多可用区部署，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制）</li>默认为0
   */
  DeployMode?: number
  /**
   * 多可用区部署时可用区的详细信息(DeployMode为1时必传)
   */
  MultiZoneInfo?: Array<ZoneDetail>
  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType?: string
  /**
   * 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等
   */
  NodeInfoList?: Array<NodeInfo>
  /**
   * 节点标签信息列表
   */
  TagList?: Array<TagInfo>
  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
   */
  BasicSecurityType?: number
  /**
   * 场景化模板类型 0：不启用 1：通用 2：日志 3：搜索
   */
  SceneType?: number
  /**
   * 可视化节点配置
   */
  WebNodeTypeInfo?: WebNodeTypeInfo
  /**
   * 创建https集群，默认是http
   */
  Protocol?: string
  /**
   * 可维护时间段
   */
  OperationDuration?: OperationDuration
  /**
   * 是否开启存算分离
   */
  EnableHybridStorage?: boolean
  /**
   * 是否开启essd 增强型云盘
   */
  DiskEnhance?: number
  /**
   * 是否开启智能巡检
   */
  EnableDiagnose?: boolean
  /**
   * cdcId，使用cdc子网时传递
   */
  CdcId?: string
  /**
   * 置放群组亲和度，范围[0,10]，0表示不开启
   */
  DisasterRecoverGroupAffinity?: number
  /**
   * 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段
   */
  SubProductCode?: string
  /**
   * 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离
   */
  ReadWriteMode?: number
  /**
   * 置放群组是否开启异步任务
   */
  EnableScheduleRecoverGroup?: boolean
  /**
   * 置放群组开启异步任务的可维护时间段
   */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration
}

/**
 * CreateLogstashInstance请求参数结构体
 */
export interface CreateLogstashInstanceRequest {
  /**
   * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
   */
  InstanceName: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 实例版本（支持"6.8.13"、"7.10.1"）
   */
  LogstashVersion: string
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 节点数量（2-50个）
   */
  NodeNum?: number
  /**
   * 计费类型<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li>默认值POSTPAID_BY_HOUR
   */
  ChargeType?: string
  /**
   * 包年包月购买时长（单位由参数TimeUnit决定）
   */
  ChargePeriod?: number
  /**
   * 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”）
   */
  TimeUnit?: string
  /**
   * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
   */
  AutoVoucher?: number
  /**
   * 代金券ID列表（目前仅支持指定一张代金券）
   */
  VoucherIds?: Array<string>
  /**
   * 自动续费标识<li>RENEW_FLAG_AUTO：自动续费</li><li>RENEW_FLAG_MANUAL：不自动续费，用户手动续费</li>ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费
   */
  RenewFlag?: string
  /**
   * 节点规格<li>LOGSTASH.S1.SMALL2：1核2G</li><li>LOGSTASH.S1.MEDIUM4：2核4G</li><li>LOGSTASH.S1.MEDIUM8：2核8G</li><li>LOGSTASH.S1.LARGE16：4核16G</li><li>LOGSTASH.S1.2XLARGE32：8核32G</li><li>LOGSTASH.S1.4XLARGE32：16核32G</li><li>LOGSTASH.S1.4XLARGE64：16核64G</li>
   */
  NodeType?: string
  /**
   * 节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
   */
  DiskType?: string
  /**
   * 节点磁盘容量（单位GB）
   */
  DiskSize?: number
  /**
   * License类型<li>oss：开源版</li><li>xpack：xpack版</li>默认值xpack
   */
  LicenseType?: string
  /**
   * 标签信息列表
   */
  TagList?: Array<TagInfo>
  /**
   * 可维护时间段
   */
  OperationDuration?: OperationDuration
}

/**
 * UpdateServerlessInstance返回参数结构体
 */
export interface UpdateServerlessInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDictionaries返回参数结构体
 */
export interface UpdateDictionariesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详细信息
 */
export interface InstanceInfo {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 用户ID
   */
  AppId?: number
  /**
   * 用户UIN
   */
  Uin?: string
  /**
   * 实例所属VPC的UID
   */
  VpcUid?: string
  /**
   * 实例所属子网的UID
   */
  SubnetUid?: string
  /**
   * 实例状态，0:处理中,1:正常,-1:停止,-2:销毁中,-3:已销毁, -4:隔离中,2:创建集群时初始化中
   */
  Status?: number
  /**
   * 自动续费标识。取值范围：
RENEW_FLAG_AUTO：自动续费  
RENEW_FLAG_MANUAL：不自动续费
默认取值：
RENEW_FLAG_DEFAULT：不自动续费
若该参数指定为 RENEW_FLAG_AUTO，在账户余额充足的情况下，实例到期后将按月自动续费。
   */
  RenewFlag?: string
  /**
   * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
   */
  ChargeType?: string
  /**
   * 包年包月购买时长,单位:月
   */
  ChargePeriod?: number
  /**
   * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType?: string
  /**
   * 节点个数
   */
  NodeNum?: number
  /**
   * 节点CPU核数
   */
  CpuNum?: number
  /**
   * 节点内存大小，单位GB
   */
  MemSize?: number
  /**
   * 节点磁盘类型
   */
  DiskType?: string
  /**
   * 节点磁盘大小，单位GB
   */
  DiskSize?: number
  /**
   * ES域名
   */
  EsDomain?: string
  /**
   * ES VIP
   */
  EsVip?: string
  /**
   * ES端口
   */
  EsPort?: number
  /**
   * Kibana访问url
   */
  KibanaUrl?: string
  /**
   * ES版本号
   */
  EsVersion?: string
  /**
   * ES配置项
   */
  EsConfig?: string
  /**
   * Kibana访问控制配置
   */
  EsAcl?: EsAcl
  /**
   * 实例创建时间
   */
  CreateTime?: string
  /**
   * 实例最后修改操作时间
   */
  UpdateTime?: string
  /**
   * 实例到期时间
   */
  Deadline?: string
  /**
   * 实例类型（实例类型标识，当前只有1,2两种）
   */
  InstanceType?: number
  /**
   * Ik分词器配置
   */
  IkConfig?: EsDictionaryInfo
  /**
   * 专用主节点配置
   */
  MasterNodeInfo?: MasterNodeInfo
  /**
   * cos自动备份配置
   */
  CosBackup?: CosBackup
  /**
   * 是否允许cos自动备份
   */
  AllowCosBackup?: boolean
  /**
   * 实例拥有的标签列表
   */
  TagList?: Array<TagInfo>
  /**
   * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
   */
  LicenseType?: string
  /**
   * 是否为冷热集群<li>true: 冷热集群</li><li>false: 非冷热集群</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableHotWarmMode?: boolean
  /**
   * 温节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmNodeType?: string
  /**
   * 温节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmNodeNum?: number
  /**
   * 温节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmCpuNum?: number
  /**
   * 温节点内存内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmMemSize?: number
  /**
   * 温节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmDiskType?: string
  /**
   * 温节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmDiskSize?: number
  /**
   * 集群节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfoList?: Array<NodeInfo>
  /**
   * Es公网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsPublicUrl?: string
  /**
   * 多可用区网络信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiZoneInfo?: Array<ZoneDetail>
  /**
   * 部署模式<li>0：单可用区</li><li>1：多可用区，北京、上海、上海金融、广州、南京、香港、新加坡、法兰克福（白名单控制）</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployMode?: number
  /**
   * ES公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccess?: string
  /**
   * ES公网访问控制配置
   */
  EsPublicAcl?: EsAcl
  /**
   * Kibana内网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPrivateUrl?: string
  /**
   * Kibana公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPublicAccess?: string
  /**
   * Kibana内网访问状态<li>OPEN：开启</li><li>CLOSE：关闭</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPrivateAccess?: string
  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityType?: number
  /**
   * 场景化模板类型：0、不开启；1、通用场景；2、日志场景；3、搜索场景
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneType?: number
  /**
   * Kibana配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaConfig?: string
  /**
   * Kibana节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaNodeInfo?: KibanaNodeInfo
  /**
   * 可视化节点配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebNodeTypeInfo?: WebNodeTypeInfo
  /**
   * JDK类型，oracle或kona
注意：此字段可能返回 null，表示取不到有效值。
   */
  Jdk?: string
  /**
   * 集群网络通讯协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 安全组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroups?: Array<string>
  /**
   * 冷节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdNodeType?: string
  /**
   * 冷节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdNodeNum?: number
  /**
   * 冷节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdCpuNum?: number
  /**
   * 冷节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdMemSize?: number
  /**
   * 冷节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdDiskType?: string
  /**
   * 冷节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdDiskSize?: number
  /**
   * 冻节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenNodeType?: string
  /**
   * 冻节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenNodeNum?: number
  /**
   * 冻节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenCpuNum?: number
  /**
   * 冻节点内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenMemSize?: number
  /**
   * 冻节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenDiskType?: string
  /**
   * 冻节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenDiskSize?: number
  /**
   * 集群健康状态 -1 未知；0 Green; 1 Yellow; 2 Red
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthStatus?: number
  /**
   * https集群内网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsPrivateUrl?: string
  /**
   * https集群内网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsPrivateDomain?: string
  /**
   * 集群的配置组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  EsConfigSets?: Array<EsConfigSetInfo>
  /**
   * 集群可维护时间段
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationDuration?: OperationDuration
  /**
   * web节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionalWebServiceInfos?: Array<OptionalWebServiceInfo>
  /**
   * 自治索引开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoIndexEnabled?: boolean
  /**
   * 是否支持存储计算分离
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableHybridStorage?: boolean
  /**
   * 流程进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessPercent?: number
  /**
   * Kibana的alerting外网告警策略<li>OPEN：开启</li><li>CLOSE：关闭</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaAlteringPublicAccess?: string
  /**
   * 本月是否有内核可以更新：false-无，true-有
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasKernelUpgrade?: boolean
  /**
   * cdcId，使用cdc子网时传递
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * kibana内网vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPrivateVip?: string
  /**
   * 自定义kibana内网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomKibanaPrivateUrl?: string
  /**
   * 节点出站访问详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutboundPublicAcls?: Array<OutboundPublicAcl>
  /**
   * 网络连接方案
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetConnectScheme?: string
  /**
   * 置放群组相关参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisasterRecoverGroupAffinity?: number
  /**
   * 子产品ID枚举值： 开源版："sp_es_io2"， 基础版："sp_es_basic"，白金版："sp_es_platinum"，企业版："sp_es_enterprise"，CDC白金版："sp_es_cdc_platinum"，日志增强版："sp_es_enlogging"，tsearch："sp_tsearch_io2"，logstash："sp_es_logstash" ，可以为空，为空的时候后台取LicenseType映射该字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubProductCode?: string
  /**
   * 存算分离cos用量，单位M
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketStorageSize?: number
  /**
   * 读写分离模式：0-不开启，1-本地读写分离，2-远端读写分离
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadWriteMode?: number
  /**
   * 是否有置放群组异步调度任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableScheduleRecoverGroup?: boolean
  /**
   * 异步调度任务的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration
  /**
   * 开启集群保护：OPEN-开启，CLOSE-关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableDestroyProtection?: string
}

/**
 * 数据接入cvm实例信息
 */
export interface DiDataSourceCvmInstance {
  /**
   * cvm实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
}

/**
 * DeleteIndex返回参数结构体
 */
export interface DeleteIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServerlessSpaceUser请求参数结构体
 */
export interface DeleteServerlessSpaceUserRequest {
  /**
   * 空间的ID
   */
  SpaceId: string
  /**
   * 创建索引的用户名
   */
  Username: string
}

/**
 * RestartNodes返回参数结构体
 */
export interface RestartNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 集群实例所属可用区，不传则默认所有可用区
   */
  Zone?: string
  /**
   * 集群实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 集群实例名称列表
   */
  InstanceNames?: Array<string>
  /**
   * 分页起始值, 默认值0
   */
  Offset?: number
  /**
   * 分页大小，默认值20
   */
  Limit?: number
  /**
   * 排序字段<li>1：实例ID</li><li>2：实例名称</li><li>3：可用区</li><li>4：创建时间</li>若orderByKey未传递则按创建时间降序排序
   */
  OrderByKey?: number
  /**
   * 排序方式<li>0：升序</li><li>1：降序</li>若传递了orderByKey未传递orderByType, 则默认升序
   */
  OrderByType?: number
  /**
   * 节点标签信息列表
   */
  TagList?: Array<TagInfo>
  /**
   * 私有网络vip列表
   */
  IpList?: Array<string>
  /**
   * 可用区列表
   */
  ZoneList?: Array<string>
  /**
   * 健康状态筛列表:0表示绿色，1表示黄色，2表示红色,-1表示未知
   */
  HealthStatus?: Array<number | bigint>
  /**
   * Vpc列表 筛选项
   */
  VpcIds?: Array<string>
  /**
   * cdc集群id
   */
  CdcId?: string
}

/**
 * CheckMigrateIndexMetaData请求参数结构体
 */
export interface CheckMigrateIndexMetaDataRequest {
  /**
   * 索引 id
   */
  ServerlessId: string
  /**
   * 快照名
   */
  Snapshot: string
  /**
   * Cos桶名
   */
  CosBucket?: string
  /**
   * BasePath路径
   */
  BasePath?: string
  /**
   * 云上集群名
   */
  ClusterInstanceId?: string
  /**
   * 普通索引名列表
   */
  CommonIndexArr?: Array<string>
  /**
   * 自治索引名列表
   */
  DataStreamArr?: Array<string>
}

/**
 * ES 词库信息
 */
export interface EsDictionaryInfo {
  /**
   * 启用词词典列表
   */
  MainDict: Array<DictInfo>
  /**
   * 停用词词典列表
   */
  Stopwords: Array<DictInfo>
  /**
   * QQ分词词典列表
   */
  QQDict: Array<DictInfo>
  /**
   * 同义词词典列表
   */
  Synonym: Array<DictInfo>
  /**
   * 更新词典类型
   */
  UpdateType: string
  /**
   * ansj启用词词典列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnsjMain?: Array<DictInfo>
  /**
   * ansj停用词词典列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnsjStop?: Array<DictInfo>
  /**
   * ansj歧义词库列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnsjAmbiguity?: Array<DictInfo>
  /**
   * ansj同义词词典列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnsjSynonyms?: Array<DictInfo>
}

/**
 * DescribeLogstashPipelines请求参数结构体
 */
export interface DescribeLogstashPipelinesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 节点出站访问信息
 */
export interface OutboundPublicAcl {
  /**
   * 允许节点出站访问的节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType: string
  /**
   * 允许节点出站访问的白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhiteHostList?: Array<string>
}

/**
 * 自治索引信息
 */
export interface DataStreamInfo {
  /**
   * 自治索引名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataStreamName?: string
  /**
   * 分片状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsShardComplete?: number
}

/**
 * 索引元数据字段
 */
export interface ServerlessIndexMetaField {
  /**
   * 索引所属集群APP ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 索引名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexName?: string
  /**
   * 索引文档数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexDocs?: number
  /**
   * 索引存储大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStorage?: number
  /**
   * 索引创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexCreateTime?: string
  /**
   * 索引实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 索引自治字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexOptionsField?: ServerlessIndexOptionsField
  /**
   * 索引配置字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexSettingsField?: ServerlessIndexSettingsField
  /**
   * 索引所属连接相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexNetworkField?: ServerlessIndexNetworkField
  /**
   * Kibana公网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaUrl?: string
  /**
   * Kibana内网域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanaPrivateUrl?: string
  /**
   * 索引内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexAccessUrl?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 索引空间ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceId?: string
  /**
   * 索引空间名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpaceName?: string
  /**
   * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: number
  /**
   * 标签信息
   */
  TagList?: Array<TagInfo>
  /**
   * 3782478.47
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexTraffic?: number
}

/**
 * GetRequestTargetNodeTypes请求参数结构体
 */
export interface GetRequestTargetNodeTypesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * ModifyEsVipSecurityGroup请求参数结构体
 */
export interface ModifyEsVipSecurityGroupRequest {
  /**
   * es集群的实例id
   */
  InstanceId: string
  /**
   * 安全组id列表
   */
  SecurityGroupIds?: Array<string>
}

/**
 * 任务进度详情
 */
export interface ProcessDetail {
  /**
   * 已完成数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Completed?: number
  /**
   * 剩余数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remain?: number
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 任务类型：
60：重启型任务
70：分片迁移型任务
80：节点变配任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: number
}

/**
 * 数据接入tke数据源
 */
export interface DiSourceTke {
  /**
   * 数据源所属vpc id，创建后不允许修改
   */
  VpcId?: string
  /**
   * tke实例id，创建后不允许修改
   */
  TkeId?: string
  /**
   * tke包含的命名空间
   */
  IncludeNamespaces?: Array<string>
  /**
   * tke不包含的命名空间
   */
  ExcludeNamespaces?: Array<string>
  /**
   * tke容器名称
   */
  ContainerName?: string
  /**
   * tke日志内容过滤
   */
  LogFilters?: string
  /**
   * tke beats配置项
   */
  ConfigContent?: string
  /**
   * tke pod标签
   */
  PodLabel?: Array<DiSourceTkePodLabel>
  /**
   * /
   */
  InputType?: string
  /**
   * tke 日志采集路径
   */
  InputPath?: string
}

/**
 * CreateCosMigrateToServerlessInstance请求参数结构体
 */
export interface CreateCosMigrateToServerlessInstanceRequest {
  /**
   * 快照名
   */
  Snapshot: string
  /**
   * 索引 id
   */
  ServerlessId: string
  /**
   * cos 桶名
   */
  CosBucket?: string
  /**
   * BasePath 路径
   */
  BasePath?: string
  /**
   * 云上集群 id
   */
  ClusterInstanceId?: string
  /**
   * 待迁移普通索引名列表
   */
  CommonIndexArr?: Array<string>
  /**
   * 待迁移自治索引名列表
   */
  DataStreamArr?: Array<string>
}

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 智能运维指标详情
 */
export interface MetricDetail {
  /**
   * 指标详情名
   */
  Key: string
  /**
   * 指标详情值
   */
  Metrics: Array<Metric>
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIndexMeta请求参数结构体
 */
export interface DescribeIndexMetaRequest {
  /**
   * ES集群ID
   */
  InstanceId: string
  /**
   * 索引类型。auto：自治索引；normal：普通索引
   */
  IndexType: string
  /**
   * 索引名，若填空则获取所有索引
   */
  IndexName: string
  /**
   * 集群访问用户名
   */
  Username?: string
  /**
   * 集群访问密码
   */
  Password?: string
}

/**
 * 集群快照数据结构
 */
export interface Snapshots {
  /**
   * 快照名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotName?: string
  /**
   * 快照Uuid
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uuid?: string
  /**
   * 该快照所属集群的版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 备份的索引列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Indices?: Array<string>
  /**
   * 备份的datastream列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataStreams?: Array<string>
  /**
   * 备份的状态

FAILED            备份失败

IN_PROGRESS 备份执行中

PARTIAL          备份部分成功，部分失败，备份失败的索引和原因会在Failures字段中展示

SUCCESS     备份成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 快照备份的开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 快照备份的结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 快照备份的耗时时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationInMillis?: number
  /**
   * 备份的总分片数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalShards?: number
  /**
   * 备份失败的分片数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedShards?: number
  /**
   * 备份成功的分片数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessfulShards?: number
  /**
   * 备份失败的索引分片和失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Failures?: Array<Failures>
}

/**
 * UpdateJdk返回参数结构体
 */
export interface UpdateJdkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartKibana返回参数结构体
 */
export interface RestartKibanaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserCosSnapshotList返回参数结构体
 */
export interface DescribeUserCosSnapshotListResponse {
  /**
   * cos 快照信息列表
   */
  CosSnapshotInfoList?: Array<CosSnapShotInfo>
  /**
   * cos 快照数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateIndex请求参数结构体
 */
export interface UpdateIndexRequest {
  /**
   * ES集群ID
   */
  InstanceId: string
  /**
   * 更新的索引类型。auto：自治索引；normal：普通索引
   */
  IndexType: string
  /**
   * 更新的索引名
   */
  IndexName: string
  /**
   * 更新的索引元数据JSON，如mappings、settings
   */
  UpdateMetaJson?: string
  /**
   * 集群访问用户名
   */
  Username?: string
  /**
   * 集群访问密码
   */
  Password?: string
  /**
   * 是否滚动后备索引
   */
  RolloverBackingIndex?: boolean
}

/**
 * Serverless实例，网络、索引、kibana等连接信息
 */
export interface ServerlessIndexNetworkField {
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone: string
  /**
   * vpc唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcUid: string
  /**
   * 子网唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetUid: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Username: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password: string
}

/**
 * 可视化节点配置
 */
export interface WebNodeTypeInfo {
  /**
   * 可视化节点个数，固定为1
   */
  NodeNum: number
  /**
   * 可视化节点规格
   */
  NodeType: string
}

/**
 * 节点本地盘信息
 */
export interface LocalDiskInfo {
  /**
   * 本地盘类型<li>LOCAL_SATA：大数据型</li><li>NVME_SSD：高IO型</li>
   */
  LocalDiskType: string
  /**
   * 本地盘单盘大小
   */
  LocalDiskSize: number
  /**
   * 本地盘块数
   */
  LocalDiskCount: number
}

/**
 * 索引生命周期字段
 */
export interface IndexPolicyField {
  /**
   * 是否开启warm阶段
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmEnable?: string
  /**
   * warm阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarmMinAge?: string
  /**
   * 是否开启cold阶段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdEnable?: string
  /**
   * cold阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdMinAge?: string
  /**
   * 是否开启frozen阶段
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenEnable?: string
  /**
   * frozen阶段转入时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenMinAge?: string
  /**
   * /
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColdAction?: string
}

/**
 * UpdatePlugins返回参数结构体
 */
export interface UpdatePluginsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateIndex返回参数结构体
 */
export interface UpdateIndexResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能运维诊断项结果
 */
export interface DiagnoseJobResult {
  /**
   * 诊断项名
   */
  JobName: string
  /**
   * 诊断项状态：-2失败，-1待重试，0运行中，1成功
   */
  Status: number
  /**
   * 诊断项得分
   */
  Score: number
  /**
   * 诊断摘要
   */
  Summary: string
  /**
   * 诊断建议
   */
  Advise: string
  /**
   * 诊断详情
   */
  Detail: string
  /**
   * 诊断指标详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricDetails: Array<MetricDetail>
  /**
   * 诊断日志详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogDetails: Array<LogDetail>
  /**
   * 诊断配置详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  SettingDetails: Array<SettingDetail>
}

/**
 * 置放群组异步任务维护的时间段
 */
export interface EnableScheduleOperationDuration {
  /**
   * 支持开启异步任务的日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Periods?: Array<string>
  /**
   * 支持开启异步的开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeStart?: string
  /**
   * 支持开启异步的结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeEnd?: string
  /**
   * 支持开启异步的时区
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeZone?: string
}

/**
 * UpdateLogstashInstance返回参数结构体
 */
export interface UpdateLogstashInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLogstashPipelines请求参数结构体
 */
export interface StopLogstashPipelinesRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 管道ID列表
   */
  PipelineIds: Array<string>
}

/**
 * 多可用区部署时可用区的详细信息
 */
export interface ZoneDetail {
  /**
   * 可用区
   */
  Zone: string
  /**
   * 子网ID
   */
  SubnetId: string
}

/**
 * DescribeClusterSnapshot返回参数结构体
 */
export interface DescribeClusterSnapshotResponse {
  /**
   * 集群实例Id，格式：es-xxxx
   */
  InstanceId?: string
  /**
   * 快照备份详情列表
   */
  Snapshots?: Array<Snapshots>
  /**
   * 快照仓库名称
   */
  RepositoryName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Logstash节点信息
 */
export interface LogstashNodeInfo {
  /**
   * 节点ID
   */
  NodeId: string
  /**
   * 节点IP
   */
  Ip: string
  /**
   * 节点端口
   */
  Port: number
}

/**
 * CreateCosMigrateToServerlessInstance返回参数结构体
 */
export interface CreateCosMigrateToServerlessInstanceResponse {
  /**
   * 迁移 taskid
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartInstance返回参数结构体
 */
export interface RestartInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 后备索引元数据字段
 */
export interface BackingIndexMetaField {
  /**
   * 后备索引名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexName: string
  /**
   * 后备索引状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStatus: string
  /**
   * 后备索引存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStorage: number
  /**
   * 后备索引当前生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexPhrase: string
  /**
   * 后备索引创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexCreateTime: string
}

/**
 * 索引配置字段
 */
export interface IndexSettingsField {
  /**
   * 索引主分片数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfShards?: string
  /**
   * 索引副本分片数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfReplicas?: string
  /**
   * 索引刷新频率
注意：此字段可能返回 null，表示取不到有效值。
   */
  RefreshInterval?: string
}

/**
 * UpdateServerlessSpace返回参数结构体
 */
export interface UpdateServerlessSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateLogstashPipelineDesc请求参数结构体
 */
export interface UpdateLogstashPipelineDescRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例管道ID
   */
  PipelineId: string
  /**
   * 管道描述信息
   */
  PipelineDesc: string
}

/**
 * UpdateServerlessInstance请求参数结构体
 */
export interface UpdateServerlessInstanceRequest {
  /**
   * Serveless实例ID
   */
  InstanceId: string
  /**
   * 更新的索引元数据JSON，如mappings、settings
   */
  UpdateMetaJson?: string
  /**
   * 实例访问密码
   */
  Password?: string
  /**
   * 开启kibana内网访问，如OPEN、CLOSE
   */
  KibanaPrivateAccess?: string
  /**
   * 开启kibana外网访问，如OPEN、CLOSE
   */
  KibanaPublicAccess?: string
  /**
   * 访问控制列表
   */
  KibanaPublicAcl?: KibanaPublicAcl
}

/**
 * 节点维度视图数据
 */
export interface NodeView {
  /**
   * 节点ID
   */
  NodeId?: string
  /**
   * 节点IP
   */
  NodeIp?: string
  /**
   * 节点是否可见
   */
  Visible?: number
  /**
   * 是否熔断
   */
  Break?: number
  /**
   * 节点总磁盘大小
   */
  DiskSize?: number
  /**
   * 磁盘使用率
   */
  DiskUsage?: number
  /**
   * 节点内存大小，单位GB
   */
  MemSize?: number
  /**
   * 内存使用率
   */
  MemUsage?: number
  /**
   * 节点cpu个数
   */
  CpuNum?: number
  /**
   * cpu使用率
   */
  CpuUsage?: number
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 节点角色
   */
  NodeRole?: string
  /**
   * 节点HTTP IP
   */
  NodeHttpIp?: string
  /**
   * JVM内存使用率
   */
  JvmMemUsage?: number
  /**
   * 节点分片数
   */
  ShardNum?: number
  /**
   * 节点上磁盘ID列表
   */
  DiskIds?: Array<string>
  /**
   * 是否为隐藏可用区
   */
  Hidden?: boolean
  /**
   * 是否充当协调节点的角色
   */
  IsCoordinationNode?: boolean
  /**
   * CVM运行状态
   */
  CVMStatus?: string
  /**
   * cvm绑定的置放群组的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVMDisasterRecoverGroupId?: string
  /**
   * cvm绑定置放群组的状态。2: 已绑定；1: 绑定中；0: 未开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVMDisasterRecoverGroupStatus?: number
}

/**
 * DescribeSpaceKibanaTools返回参数结构体
 */
export interface DescribeSpaceKibanaToolsResponse {
  /**
   * 该token用于登录内嵌kibana
   */
  KibanaToken?: string
  /**
   * token的过期时间
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEsVipSecurityGroup返回参数结构体
 */
export interface ModifyEsVipSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateInstance请求参数结构体
 */
export interface UpdateInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
   */
  InstanceName?: string
  /**
   * 已废弃请使用NodeInfoList
节点个数（2-50个）
   */
  NodeNum?: number
  /**
   * ES配置项（JSON格式字符串）
   */
  EsConfig?: string
  /**
   * 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
   */
  Password?: string
  /**
   * 可视化组件（Kibana、Cerebro）的公网访问策略
   */
  EsAcl?: EsAcl
  /**
   * 已废弃请使用NodeInfoList
磁盘大小（单位GB）
   */
  DiskSize?: number
  /**
   * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  NodeType?: string
  /**
   * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个或5个）
   */
  MasterNodeNum?: number
  /**
   * 已废弃请使用NodeInfoList
专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
   */
  MasterNodeType?: string
  /**
   * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义）
   */
  MasterNodeDiskSize?: number
  /**
   * 更新配置时是否强制重启<li>true强制重启</li><li>false不强制重启</li>当前仅更新EsConfig时需要设置，默认值为false
   */
  ForceRestart?: boolean
  /**
   * COS自动备份信息
   */
  CosBackup?: CosBackup
  /**
   * 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括<li>修改一种节点的个数</li><li>修改一种节点的节点规格及磁盘大小</li><li>增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）</li>上述操作一次只能进行一种，且磁盘类型不支持修改
   */
  NodeInfoList?: Array<NodeInfo>
  /**
   * ES集群公网访问状态
OPEN 开启
CLOSE 关闭
   */
  PublicAccess?: string
  /**
   * 公网访问控制列表
   */
  EsPublicAcl?: EsPublicAcl
  /**
   * Kibana公网访问状态
OPEN 开启
CLOSE 关闭
   */
  KibanaPublicAccess?: string
  /**
   * Kibana内网访问状态
OPEN 开启
CLOSE 关闭
   */
  KibanaPrivateAccess?: string
  /**
   * ES 6.8及以上版本基础版开启或关闭用户认证
   */
  BasicSecurityType?: number
  /**
   * Kibana内网端口
   */
  KibanaPrivatePort?: number
  /**
   * 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启
   */
  ScaleType?: number
  /**
   * 多可用区部署
   */
  MultiZoneInfo?: Array<ZoneDetail>
  /**
   * 场景化模板类型 -1：不启用 1：通用 2：日志 3：搜索
   */
  SceneType?: number
  /**
   * Kibana配置项（JSON格式字符串）
   */
  KibanaConfig?: string
  /**
   * 可视化节点配置
   */
  WebNodeTypeInfo?: WebNodeTypeInfo
  /**
   * 切换到新网络架构
   */
  SwitchPrivateLink?: string
  /**
   * 启用Cerebro
   */
  EnableCerebro?: boolean
  /**
   * Cerebro公网访问状态
OPEN 开启
CLOSE 关闭
   */
  CerebroPublicAccess?: string
  /**
   * Cerebro内网访问状态
OPEN 开启
CLOSE 关闭
   */
  CerebroPrivateAccess?: string
  /**
   * 新增或修改的配置组信息
   */
  EsConfigSet?: EsConfigSetInfo
  /**
   * 可维护时间段
   */
  OperationDuration?: OperationDurationUpdated
  /**
   * 是否开启Alerting 外网告警输出：
OPEN 开启
CLOSE 关闭
   */
  KibanaAlteringPublicAccess?: string
  /**
   * kibana内网自定义域名
   */
  KibanaPrivateDomain?: string
  /**
   * cerebro内网自定义域名
   */
  CerebroPrivateDomain?: string
  /**
   * 变更为https集群，默认是http
   */
  Protocol?: string
  /**
   * 节点出站访问详细信息

   */
  OutboundPublicAcls?: Array<OutboundPublicAcl>
  /**
   * 节点出站访问操作
OPEN 开启
CLOSE 关闭
   */
  OutboundPublicAccess?: string
  /**
   * cvm延迟上架参数
   */
  CvmDelayOnlineTime?: number
  /**
   * 分片迁移并发数
   */
  ShardAllocationConcurrents?: number
  /**
   * 分片迁移并发速度
   */
  ShardAllocationBytes?: number
  /**
   * 读写分离模式：-1-不开启，1-本地读写分离，2-远端读写分离
   */
  ReadWriteMode?: number
  /**
   * 是否开启置放群组异步任务
   */
  EnableScheduleRecoverGroup?: boolean
  /**
   * 置放群组异步任务可维护时间段
   */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration
  /**
   * 开启集群保护：OPEN-开启，CLOSE-关闭
   */
  EnableDestroyProtection?: string
}

/**
 * CreateServerlessInstance返回参数结构体
 */
export interface CreateServerlessInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引配置字段
 */
export interface ServerlessIndexSettingsField {
  /**
   * 索引主分片数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfShards?: string
  /**
   * 索引刷新频率
注意：此字段可能返回 null，表示取不到有效值。
   */
  RefreshInterval?: string
}

/**
 * DescribeDiagnose请求参数结构体
 */
export interface DescribeDiagnoseRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * 报告日期，格式20210301
   */
  Date?: string
  /**
   * 报告返回份数
   */
  Limit?: number
}

/**
 * DescribeInstancePluginList返回参数结构体
 */
export interface DescribeInstancePluginListResponse {
  /**
   * 返回的插件个数
   */
  TotalCount?: number
  /**
   * 插件信息列表
   */
  PluginList?: Array<DescribeInstancePluginInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据接入cvm数据源
 */
export interface DiSourceCvm {
  /**
   * 数据源所属vpc id，创建后不允许修改
   */
  VpcId?: string
  /**
   * cvm列表
   */
  CvmIds?: Array<string>
  /**
   * 采集路径列表，支持通配符
   */
  LogPaths?: Array<string>
}

/**
 * 无
 */
export interface CosSnapShotInfo {
  /**
   * cos 桶名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucket?: string
  /**
   * base path
注意：此字段可能返回 null，表示取不到有效值。
   */
  BasePath?: string
  /**
   * 快照名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotName?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 快照版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 普通索引信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CommonIndexArr?: Array<CommonIndexInfo>
  /**
   * 自治索引信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataStreamArr?: Array<DataStreamInfo>
}

/**
 * DescribeServerlessSpaces请求参数结构体
 */
export interface DescribeServerlessSpacesRequest {
  /**
   * 过滤的空间ID
   */
  SpaceIds?: Array<string>
  /**
   * 过滤的空间名
   */
  SpaceNames?: Array<string>
  /**
   * 排序顺序，支持升序asc、降序desc
   */
  Order?: string
  /**
   * 排序字段，支持空间创建时间SpaceCreateTime
   */
  OrderBy?: string
  /**
   * vpcId信息数组
   */
  VpcIds?: Array<string>
  /**
   * 分页起始
   */
  Offset?: number
  /**
   * 分页条数
   */
  Limit?: number
  /**
   * 标签信息
   */
  TagList?: Array<TagInfo>
}

/**
 * RestartInstance请求参数结构体
 */
export interface RestartInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 是否强制重启<li>true：强制重启</li><li>false：不强制重启</li>默认false
   */
  ForceRestart?: boolean
  /**
   * 重启模式：0 滚动重启； 1 全量重启
   */
  RestartMode?: number
  /**
   * 重启时选择是否升级内核patch版本
   */
  UpgradeKernel?: boolean
}

/**
 * UpdateJdk请求参数结构体
 */
export interface UpdateJdkRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
  /**
   * Jdk类型，支持kona和oracle
   */
  Jdk?: string
  /**
   * Gc类型，支持g1和cms
   */
  Gc?: string
  /**
   * 是否强制重启
   */
  ForceRestart?: boolean
}

/**
 * 创建serverless索引时创建数据接入
 */
export interface ServerlessDi {
  /**
   * 数据链路采集源类型，如cvm_collector、tke_collector
   */
  DiSourceType?: string
  /**
   * cvm数据源
   */
  DiSourceCvm?: DiSourceCvm
  /**
   * tke数据源
   */
  DiSourceTke?: DiSourceTke
}

/**
 * DescribeServerlessMetrics返回参数结构体
 */
export interface DescribeServerlessMetricsResponse {
  /**
   * storage指标值，单位byte
   */
  Storage?: number
  /**
   * IndexTraffic指标值，单位byte
   */
  IndexTraffic?: number
  /**
   * 读请求数，单位次数
   */
  ReadReqTimes?: number
  /**
   * 写请求数，单位次数
   */
  WriteReqTimes?: number
  /**
   * 文档数量，单位个数
   */
  DocCount?: number
  /**
   * 指标数据数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricMapList?: Array<MetricMapByIndexId>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLogstashPipelines返回参数结构体
 */
export interface StopLogstashPipelinesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServerlessInstances请求参数结构体
 */
export interface DescribeServerlessInstancesRequest {
  /**
   * 索引集群ID
   */
  InstanceIds?: Array<string>
  /**
   * 索引名
   */
  IndexNames?: Array<string>
  /**
   * 分页起始位置
   */
  Offset?: number
  /**
   * 一页展示数量
   */
  Limit?: number
  /**
   * 排序字段，支持索引名：IndexName、索引存储量：IndexStorage、索引创建时间：IndexCreateTime
   */
  OrderBy?: string
  /**
   * 过滤索引状态
   */
  IndexStatusList?: Array<string>
  /**
   * 排序顺序，支持asc、desc，默认为desc
   */
  Order?: string
  /**
   * 索引空间ID列表
   */
  SpaceIds?: Array<string>
  /**
   * 数据链路数据源类型
   */
  DiSourceTypes?: Array<string>
  /**
   * 标签信息
   */
  TagList?: Array<TagInfo>
}

/**
 * vpc信息
 */
export interface VpcInfo {
  /**
   * vpcId信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * SubnetId信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * VpcUid信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcUid?: number
  /**
   * SubnetUid 信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetUid?: number
  /**
   * 可用ip数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableIpAddressCount?: number
}

/**
 * 实例Kibana节点相关信息
 */
export interface KibanaNodeInfo {
  /**
   * Kibana节点规格
   */
  KibanaNodeType: string
  /**
   * Kibana节点个数
   */
  KibanaNodeNum: number
  /**
   * Kibana节点CPU数
   */
  KibanaNodeCpuNum: number
  /**
   * Kibana节点内存GB
   */
  KibanaNodeMemSize: number
  /**
   * Kibana节点磁盘类型
   */
  KibanaNodeDiskType: string
  /**
   * Kibana节点磁盘大小
   */
  KibanaNodeDiskSize: number
}

/**
 * StartLogstashPipelines返回参数结构体
 */
export interface StartLogstashPipelinesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDiagnoseSettings请求参数结构体
 */
export interface GetDiagnoseSettingsRequest {
  /**
   * ES实例ID
   */
  InstanceId: string
}

/**
 * ES集群配置项
 */
export interface EsAcl {
  /**
   * kibana访问黑名单
   */
  BlackIpList?: Array<string>
  /**
   * kibana访问白名单
   */
  WhiteIpList?: Array<string>
}

/**
 * DescribeInstancePluginList请求参数结构体
 */
export interface DescribeInstancePluginListRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 分页起始值, 默认值0
   */
  Offset?: number
  /**
   * 分页大小，默认值10
   */
  Limit?: number
  /**
   * 排序字段<li>1：插件名 pluginName</li>
   */
  OrderBy?: string
  /**
   * 排序方式<li>0：升序 asc</li><li>1：降序 desc</li>
   */
  OrderByType?: string
  /**
   * 0：系统插件
   */
  PluginType?: number
}

/**
 * RestartNodes请求参数结构体
 */
export interface RestartNodesRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
  /**
   * 节点名称列表
   */
  NodeNames: Array<string>
  /**
   * 是否强制重启
   */
  ForceRestart?: boolean
  /**
   * 可选重启模式"in-place","blue-green"，分别表示重启，蓝绿重启；默认值为"in-place"
   */
  RestartMode?: string
  /**
   * 节点状态，在蓝绿模式中使用；离线节点蓝绿有风险
   */
  IsOffline?: boolean
  /**
   * cvm延迟上架时间
   */
  CvmDelayOnlineTime?: number
  /**
   * 分片迁移并发数
   */
  ShardAllocationConcurrents?: number
  /**
   * 分片迁移并发速度
   */
  ShardAllocationBytes?: number
  /**
   * 是否开启置放群组异步任务
   */
  EnableScheduleRecoverGroup?: boolean
  /**
   * 置放群组异步任务时间段
   */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration
}

/**
 * DescribeServerlessInstances返回参数结构体
 */
export interface DescribeServerlessInstancesResponse {
  /**
   * 索引元数据字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexMetaFields?: Array<ServerlessIndexMetaField>
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogstashInstance请求参数结构体
 */
export interface DeleteLogstashInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1", "7.10.1", "7.14.2"
   */
  EsVersion: string
  /**
   * 是否只做升级检查，默认值为false
   */
  CheckOnly?: boolean
  /**
   * 目标商业特性版本：<li>oss 开源版</li><li>basic 基础版</li>当前仅在5.6.4升级6.x版本时使用，默认值为basic
   */
  LicenseType?: string
  /**
   * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
   */
  BasicSecurityType?: number
  /**
   * 升级方式：<li>scale 蓝绿变更</li><li>restart 滚动重启</li>默认值为scale
   */
  UpgradeMode?: string
  /**
   * 升级版本前是否对集群进行备份，默认不备份
   */
  CosBackup?: boolean
  /**
   * 滚动模式时，是否跳过检查，进行强制重启。默认值为false
   */
  SkipCheckForceRestart?: boolean
  /**
   * cvm延迟上架参数
   */
  CvmDelayOnlineTime?: number
  /**
   * 分片迁移并发数
   */
  ShardAllocationConcurrents?: number
  /**
   * 分片迁移并发速度
   */
  ShardAllocationBytes?: number
  /**
   * 是否开启置放群组异步任务
   */
  EnableScheduleRecoverGroup?: boolean
  /**
   * 置放群组异步任务时间段
   */
  EnableScheduleOperationDuration?: EnableScheduleOperationDuration
}

/**
 * DescribeViews返回参数结构体
 */
export interface DescribeViewsResponse {
  /**
   * 集群维度视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterView?: ClusterView
  /**
   * 节点维度视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodesView?: Array<NodeView>
  /**
   * Kibana维度视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  KibanasView?: Array<KibanaView>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * kibana公网域名白名单参数
 */
export interface KibanaPublicAcl {
  /**
   * kibana访问白名单
   */
  WhiteIpList?: Array<string>
}

/**
 * CreateClusterSnapshot返回参数结构体
 */
export interface CreateClusterSnapshotResponse {
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartLogstashInstance返回参数结构体
 */
export interface RestartLogstashInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可选web组件信息
 */
export interface OptionalWebServiceInfo {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 公网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicUrl?: string
  /**
   * 内网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateUrl?: string
  /**
   * 公网访问权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccess?: string
  /**
   * 内网访问权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateAccess?: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * web服务内网vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateVip?: string
  /**
   * 自定义cerebro内网url
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomPrivateUrl?: string
}
