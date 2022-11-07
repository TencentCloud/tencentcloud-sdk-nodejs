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
 * 任务告警信息
 */
export interface AlarmInfo {
  /**
   * 关联任务id
   */
  TaskIds: string

  /**
   * 告警类别；failure表示失败告警；overtime表示超时告警
   */
  AlarmType: string

  /**
   * 告警方式；SMS表示短信；Email表示邮件；HTTP 表示接口方式；Wechat表示微信方式
   */
  AlarmWay: string

  /**
   * 告警接收人，多个告警接收人以;分割
   */
  AlarmRecipient: string

  /**
   * 告警接收人id，多个告警接收人id以;分割
   */
  AlarmRecipientId: string

  /**
   * 预计运行的小时，取值范围0-23
   */
  Hours: number

  /**
   * 预计运行分钟，取值范围0-59
   */
  Minutes: number

  /**
   * 告警出发时机；1表示第一次运行失败；2表示所有重试完成后失败；
   */
  TriggerType: number

  /**
   * 告警信息id
   */
  AlarmId?: string

  /**
   * 告警状态设置；1表示可用；0表示不可用，默认可用
   */
  Status?: number
}

/**
 * TaskLog返回参数结构体
 */
export interface TaskLogResponse {
  /**
   * 详细日志
   */
  LogContentList: Array<LogContent>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatistics返回参数结构体
 */
export interface DescribeIntegrationStatisticsResponse {
  /**
      * 总任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalTask: number

  /**
      * 生产态任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProdTask: number

  /**
      * 开发态任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DevTask: number

  /**
      * 总读取条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalReadRecords: number

  /**
      * 总写入条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalWriteRecords: number

  /**
      * 总脏数据条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalErrorRecords: number

  /**
      * 总告警事件数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalAlarmEvent: number

  /**
      * 当天读取增长条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncreaseReadRecords: number

  /**
      * 当天写入增长条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncreaseWriteRecords: number

  /**
      * 当天脏数据增长条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncreaseErrorRecords: number

  /**
      * 当天告警事件增长数
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncreaseAlarmEvent: number

  /**
      * 告警事件统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmEvent: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnlockIntegrationTask返回参数结构体
 */
export interface UnlockIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamTaskLogList请求参数结构体
 */
export interface DescribeStreamTaskLogListRequest {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 作业ID
   */
  JobId: string

  /**
   * 结束时间
   */
  EndTime: number

  /**
   * 开始时间
   */
  StartTime: number

  /**
   * container名字
   */
  Container?: string

  /**
   * 条数
   */
  Limit?: number

  /**
   * 排序类型 desc asc
   */
  OrderType?: string

  /**
   * 作业运行的实例ID
   */
  RunningOrderId?: number
}

/**
 * DescribeIntegrationNode返回参数结构体
 */
export interface DescribeIntegrationNodeResponse {
  /**
      * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeInfo: IntegrationNodeInfo

  /**
      * 上游节点是否已经修改。true 已修改，需要提示；false 没有修改
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceCheckFlag: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MakeUpTasksNew返回参数结构体
 */
export interface MakeUpTasksNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志内容实体
 */
export interface LogContentInfo {
  /**
      * 日志内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Log: string

  /**
      * 日志组Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PkgId: string

  /**
      * 日志Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PkgLogId: string

  /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: number

  /**
      * 日志所属的容器名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerName: string
}

/**
 * DescribeInstanceLogs请求参数结构体
 */
export interface DescribeInstanceLogsRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * DescribeTaskAlarmRegulations返回参数结构体
 */
export interface DescribeTaskAlarmRegulationsResponse {
  /**
      * 任务告警规则信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskAlarmInfos: Array<TaskAlarmInfo>

  /**
      * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataSource请求参数结构体
 */
export interface CreateDataSourceRequest {
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name: string

  /**
   * 数据源类别：绑定引擎、绑定数据库
   */
  Category: string

  /**
   * 数据源类型:枚举值
   */
  Type: string

  /**
   * 归属项目ID
   */
  OwnerProjectId: string

  /**
   * 归属项目Name
   */
  OwnerProjectName: string

  /**
   * 归属项目Name中文
   */
  OwnerProjectIdent: string

  /**
   * 业务侧数据源的配置信息扩展
   */
  BizParams?: string

  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
   */
  Params?: string

  /**
   * 数据源描述信息
   */
  Description?: string

  /**
   * 数据源展示名，为了可视化查看
   */
  Display?: string

  /**
   * 若数据源列表为绑定数据库，则为db名称
   */
  DatabaseName?: string

  /**
   * 数据源引擎的实例ID，如CDB实例ID
   */
  Instance?: string

  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
   */
  Status?: number

  /**
   * 数据源所属的业务空间名称
   */
  ClusterId?: string

  /**
   * 是否采集
   */
  Collect?: string

  /**
   * cos桶信息
   */
  COSBucket?: string

  /**
   * cos region
   */
  COSRegion?: string
}

/**
 * 集成节点schema映射
 */
export interface IntegrationNodeSchemaMapping {
  /**
   * 源schema id
   */
  SourceSchemaId: string

  /**
   * 目标schema id
   */
  SinkSchemaId: string
}

/**
 * DescribeRealTimeTaskSpeed请求参数结构体
 */
export interface DescribeRealTimeTaskSpeedRequest {
  /**
   * 无
   */
  TaskId: string

  /**
   * 带毫秒的时间戳
   */
  StartTime: number

  /**
   * 带毫秒的时间戳
   */
  EndTime: number

  /**
   * 粒度，1或者5
   */
  Granularity: number

  /**
   * 无
   */
  ProjectId: string
}

/**
 * FreezeTasks请求参数结构体
 */
export interface FreezeTasksRequest {
  /**
   * 任务列表
   */
  Tasks: Array<SimpleTaskInfo>

  /**
   * 任务操作是否消息通知下游任务责任人
   */
  OperateIsInform: boolean
}

/**
 * MakeUpWorkflowNew返回参数结构体
 */
export interface MakeUpWorkflowNewResponse {
  /**
   * 返回补录成功或失败的任务数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationNode返回参数结构体
 */
export interface CreateIntegrationNodeResponse {
  /**
   * 节点
   */
  Id: string

  /**
      * 当前任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务属性
 */
export interface TaskInnerInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务名
   */
  TaskName: string

  /**
   * 工作流id
   */
  WorkflowId: string

  /**
   * 周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType: number

  /**
      * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualTaskId?: string

  /**
      * 虚拟任务标记
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualFlag?: boolean

  /**
      * 真实任务工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealWorkflowId?: string
}

/**
 * 实时任务同步速度 条/s
 */
export interface RecordsSpeed {
  /**
      * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeType: string

  /**
      * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeName: string

  /**
      * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Values: Array<SpeedValue>
}

/**
 * CreateWorkflow请求参数结构体
 */
export interface CreateWorkflowRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流名称
   */
  WorkflowName?: string

  /**
   * 所属文件夹id
   */
  FolderId?: string
}

/**
 * SubmitTask请求参数结构体
 */
export interface SubmitTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 版本备注
   */
  VersionRemark: string

  /**
   * 是否启动调度
   */
  StartScheduling: boolean
}

/**
 * 查询数据源分页列表
 */
export interface DataSourceInfoPage {
  /**
      * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNumber: number

  /**
      * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rows: Array<DataSourceInfo>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalPageNumber: number
}

/**
 * 标签类型
 */
export interface Label {
  /**
   * 类型值。
   */
  Value: string

  /**
   * 类型名称。
   */
  Text: string
}

/**
 * 任务扩展信息
 */
export interface TaskExtInfo {
  /**
   * 键
   */
  Key?: string

  /**
   * 值
   */
  Value?: string
}

/**
 * BatchResumeIntegrationTasks返回参数结构体
 */
export interface BatchResumeIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警事件详情
 */
export interface AlarmEventInfo {
  /**
   * 告警ID
   */
  AlarmId: string

  /**
   * 告警时间
   */
  AlarmTime: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 规则名称
   */
  RegularName: string

  /**
   * 告警级别,0表示普通，1表示重要，2表示紧急
   */
  AlarmLevel: number

  /**
   * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
   */
  AlarmIndicator: number

  /**
   * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
   */
  AlarmWay: number

  /**
   * 告警接收人Id，多个用逗号隔开
   */
  AlarmRecipientId: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
      * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmIndicatorDesc?: string

  /**
      * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  TriggerType?: number

  /**
      * 预计的超时时间，分钟级别
注意：此字段可能返回 null，表示取不到有效值。
      */
  EstimatedTime?: number

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName?: string

  /**
      * 0：部分成功，1：全部成功，2：全部失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsSendSuccess?: number

  /**
      * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  MessageId?: string

  /**
      * 阈值计算算子，1 : 大于 2 ：小于
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operator?: number
}

/**
 * 实时任务同步速度 字节/s
 */
export interface BytesSpeed {
  /**
      * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeType: string

  /**
      * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeName: string

  /**
      * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Values: Array<SpeedValue>
}

/**
 * CheckTaskNameExist请求参数结构体
 */
export interface CheckTaskNameExistRequest {
  /**
   * 项目id/工作空间id
   */
  ProjectId: string

  /**
   * 任务类型（跟调度传参保持一致27）
   */
  TypeId: number

  /**
   * 任务名
   */
  TaskName: string
}

/**
 * DescribeFunctionKinds请求参数结构体
 */
export type DescribeFunctionKindsRequest = null

/**
 * DescribeFunctionKinds返回参数结构体
 */
export interface DescribeFunctionKindsResponse {
  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Kinds: Array<FunctionTypeOrKind>

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationTask返回参数结构体
 */
export interface ModifyIntegrationTaskResponse {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
  /**
   * 页码
   */
  PageNumber?: number

  /**
   * 返回数量
   */
  PageSize?: number

  /**
   * 排序配置
   */
  OrderFields?: Array<OrderField>

  /**
   * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
   */
  Filters?: Array<Filter>
}

/**
 * DescribeIntegrationStatisticsRecordsTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string
}

/**
 * DescribeInLongTkeClusterList返回参数结构体
 */
export interface DescribeInLongTkeClusterListResponse {
  /**
   * TKE集群信息
   */
  Items: Array<InLongTkeDetail>

  /**
   * 页码
   */
  PageIndex: number

  /**
   * 每页记录数
   */
  PageSize: number

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 总页数
   */
  TotalPage: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillInstances请求参数结构体
 */
export interface KillInstancesRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 实例嵌套集合
   */
  Instances: Array<InstanceInfo>
}

/**
 * RegisterEventListener返回参数结构体
 */
export interface RegisterEventListenerResponse {
  /**
      * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: BatchReturn

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartInLongAgent返回参数结构体
 */
export interface RestartInLongAgentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流信息
 */
export interface Workflow {
  /**
   * 工作流id
   */
  WorkflowId: string

  /**
      * 责任人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Owner: string

  /**
      * 责任人Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 项目标识
   */
  ProjectIdent: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowDesc: string

  /**
   * 工作流名称
   */
  WorkflowName: string

  /**
   * 所属文件夹id
   */
  FolderId: string

  /**
      * 工作流所属用户分组id 若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupId: string

  /**
      * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserGroupName: string
}

/**
 * DescribeStandardRuleDetailInfoList返回参数结构体
 */
export interface DescribeStandardRuleDetailInfoListResponse {
  /**
      * 返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
  StandardRuleDetailList: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TriggerEvent请求参数结构体
 */
export interface TriggerEventRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 案例名称
   */
  Name: string

  /**
   * 时间格式：如果选择触发时间：2022年6月21，则设置为20220621
   */
  Dimension: string

  /**
   * 描述信息
   */
  Description?: string
}

/**
 * 批量操作的结果返回
 */
export interface BatchOperateResult {
  /**
   * 批量操作成功数
   */
  SuccessCount: number

  /**
   * 批量操作失败数
   */
  FailedCount: number

  /**
   * 批量操作的总数
   */
  TotalCount: number
}

/**
 * DescribeClusterNamespaceList返回参数结构体
 */
export interface DescribeClusterNamespaceListResponse {
  /**
   * 命名空间
   */
  Namespaces: Array<Namespace>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInLongAgent返回参数结构体
 */
export interface CreateInLongAgentResponse {
  /**
   * 采集器ID
   */
  AgentId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLog请求参数结构体
 */
export interface DescribeInstanceLogRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string

  /**
   * 服务器Ip
   */
  BrokerIp: string

  /**
   * 文件Name
   */
  OriginFileName: string
}

/**
 * DescribeKafkaTopicInfo请求参数结构体
 */
export interface DescribeKafkaTopicInfoRequest {
  /**
   * 数据源id
   */
  DatasourceId: string

  /**
   * 数据源类型
   */
  Type: string
}

/**
 * RestartInLongAgent请求参数结构体
 */
export interface RestartInLongAgentRequest {
  /**
   * 采集器ID
   */
  AgentId: string

  /**
   * WeData项目ID
   */
  ProjectId: string
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrendsData: Array<IntegrationStatisticsTrendResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SaveCustomFunction请求参数结构体
 */
export interface SaveCustomFunctionRequest {
  /**
   * 函数唯一标识
   */
  FunctionId: string

  /**
   * 分类：窗口函数、聚合函数、日期函数......
   */
  Kind: string

  /**
   * 集群引擎实例
   */
  ClusterIdentifier: string

  /**
   * 类名
   */
  ClassName: string

  /**
   * 资源列表
   */
  ResourceList: Array<FunctionResource>

  /**
   * 函数说明
   */
  Description: string

  /**
   * 用法
   */
  Usage: string

  /**
   * 参数说明
   */
  ParamDesc: string

  /**
   * 返回值说明
   */
  ReturnDesc: string

  /**
   * 示例
   */
  Example: string
}

/**
 * ModifyWorkflowSchedule请求参数结构体
 */
export interface ModifyWorkflowScheduleRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流id
   */
  WorkflowId: string

  /**
   * 延迟时间，单位分钟
   */
  DelayTime: number

  /**
   * 启动时间
   */
  StartupTime: number

  /**
   * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
   */
  SelfDepend: number

  /**
   * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType: number

  /**
   * 步长，间隔时间，最小1
   */
  CycleStep: number

  /**
   * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string

  /**
   * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string

  /**
   * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
   */
  TaskAction?: string

  /**
   * cron表达式  周期类型为crontab调度才需要
   */
  CrontabExpression?: string

  /**
   * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionStartTime?: string

  /**
   * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionEndTime?: string

  /**
   * 工作流依赖 ,yes 或者no
   */
  DependencyWorkflow?: string
}

/**
 * RegisterEvent请求参数结构体
 */
export interface RegisterEventRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 事件名称，支持英文、数字和下划线，最长20个字符, 不能以数字下划线开头。
   */
  Name: string

  /**
   * 事件分割类型，周期类型: DAY，HOUR，MIN，SECOND
   */
  EventSubType: string

  /**
   * 广播：BROADCAST,单播：SINGLE
   */
  EventBroadcastType: string

  /**
   * 周期类型为天和小时为HOURS ，周期类型为分钟 ：MINUTES,周期类型为秒：SECONDS
   */
  TimeUnit: string

  /**
   * TBDS 事件所属人
   */
  Owner: string

  /**
   * 事件类型，默认值：TIME_SERIES
   */
  EventType?: string

  /**
   * 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss
   */
  DimensionFormat?: string

  /**
   * 存活时间
   */
  TimeToLive?: number

  /**
   * 事件描述
   */
  Description?: string
}

/**
 * BatchDeleteIntegrationTasks返回参数结构体
 */
export interface BatchDeleteIntegrationTasksResponse {
  /**
      * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount: number

  /**
      * 任务总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索条件
 */
export interface SearchConditionInstanceNew {
  /**
   * 执行空间 "DRY_RUN"
   */
  ExecutionSpace: string

  /**
   * 产品名称，可选
   */
  ProductName?: string

  /**
   * 资源组
   */
  ResourceGroup?: string
}

/**
 * BatchRerunIntegrationTaskInstances请求参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 查询实例条件
 */
export interface SearchCondition {
  /**
   * 查询框架，必选
   */
  Instance: SearchConditionInstance

  /**
   * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
   */
  Keyword?: string

  /**
   * 排序顺序（asc，desc）
   */
  Sort?: string

  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol?: string
}

/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
  /**
      * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: DataSourceInfoPage

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationTask请求参数结构体
 */
export interface ModifyIntegrationTaskRequest {
  /**
   * 任务信息
   */
  TaskInfo: IntegrationTaskInfo

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 默认false . 为true时表示走回滚节点逻辑
   */
  RollbackFlag?: boolean
}

/**
 * BatchSuspendIntegrationTasks请求参数结构体
 */
export interface BatchSuspendIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 任务信息
 */
export interface TaskCanvasInfo {
  /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
      * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowId: string

  /**
      * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowName: string

  /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectName: string

  /**
      * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectIdent: string

  /**
      * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTypeId: number

  /**
      * 任务类型描述，其中任务类型id和任务类型描述的对应的关系为
20	通用数据同步任务
21	JDBC SQL
22	Tbase
25	数据ETL
30	Python
31	PySpark
34	Hive SQL
35	Shell
36	Spark SQL
37	HDFS到HBase
38	SHELL
39	Spark
45	DATA_QUALITY
55	THIVE到MYSQL
56	THIVE到PG
66	HDFS到PG
67	HDFS到Oracle
68	HDFS到MYSQL
69	FTP到HDFS
70	HIVE SQL
72	HIVE到HDFS
75	HDFS到HIVE
81	PYTHONSQL脚本
82	SPARKSCALA计算
83	虫洞任务
84	校验对账文件
85	HDFS到THIVE
86	TDW到HDFS
87	HDFS到TDW
88	校验对账文件
91	FLINK任务
92	MapReduce
98	custom topology
99	kafkatoHDFS
100	kafkatoHbase
101	MYSQL导入至HIVE(DX)
104	MYSQL到HIVE
105	HIVE到MYSQL
106	SQL SERVER到HIVE
107	HIVE到SQL SERVER
108	ORACLE到HIVE
109	HIVE到ORACLE
111	HIVE到MYSQL(NEW)
112	HIVE到PG
113	HIVE到PHOENIX
118	MYSQL到HDFS
119	PG到HDFS
120	ORACLE到HDFS
121	数据质量
10000	自定义业务
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTypeDesc: string

  /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: string

  /**
      * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderName: string

  /**
      * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderId: string

  /**
      * 最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstSubmitTime: string

  /**
      * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstRunTime: string

  /**
      * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScheduleDesc: string

  /**
      * 负责人
注意：此字段可能返回 null，表示取不到有效值。
      */
  InCharge: string

  /**
      * 调度周期类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleUnit: string

  /**
      * 画布x轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
      */
  LeftCoordinate: number

  /**
      * 画布y轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopCoordinate: number

  /**
      * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualFlag: boolean

  /**
      * 弹性周期配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskAction: string

  /**
      * 延迟时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  DelayTime: number
}

/**
 * 文件夹分页信息
 */
export interface DescribeFolderListData {
  /**
   * 文件夹信息列表
   */
  Items: Array<Folder>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 页号
   */
  PageNumber: number

  /**
   * 页大小
   */
  PageSize: number
}

/**
 * 离线任务实例详情
 */
export interface TaskInstanceDetail {
  /**
   * 实例id
   */
  TaskRunId: string

  /**
   * 任务id
   */
  TaskId: string

  /**
   * 实例数据运行时间
   */
  CurRunDate: string

  /**
   * 实例实际运行时间
   */
  IssueDate: string

  /**
   * InLong任务Id
   */
  InlongTaskId: string

  /**
   * 执行资源组id
   */
  ExecutorGroupId: string

  /**
   * 任务类型(1 调试运行,2 调度执行)
   */
  TaskRunType: number

  /**
   * 任务状态(1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行)
   */
  State: number

  /**
   * 实例开始运行时间，格式：yyyy-MM-dd HH:mm:ss
   */
  StartTime: string

  /**
   * 实例结束运行时间，格式：yyyy-MM-dd HH:mm:ss
   */
  EndTime: string

  /**
   * Broker IP
   */
  BrokerIp: string

  /**
   * 运行实例的EKS Pod名称
   */
  PodName: string

  /**
   * 下一个调度周期的数据运行时间
   */
  NextRunDate: string

  /**
   * 创建者的账号Id
   */
  CreateUin: number

  /**
   * 操作者的账号Id
   */
  OperatorUin: number

  /**
   * 拥有者的账号Id
   */
  OwnerUin: number

  /**
   * App Id
   */
  AppId: number

  /**
   * WeData项目id
   */
  ProjectId: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 任务名称
   */
  TaskName: string
}

/**
 * DeleteCustomFunction返回参数结构体
 */
export interface DeleteCustomFunctionResponse {
  /**
      * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FunctionId: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskScript返回参数结构体
 */
export interface DescribeTaskScriptResponse {
  /**
      * 任务脚本内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TaskScriptContent

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskInstance返回参数结构体
 */
export interface DescribeTaskInstanceResponse {
  /**
   * 任务实例详情
   */
  TaskInstanceDetail: TaskInstanceDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询实时任务实例当前的节点信息
 */
export interface InstanceNodeInfo {
  /**
      * 读取节点SOURCE 写入节点SINK
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeType: string

  /**
      * 节点id
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId: string

  /**
      * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeName: string
}

/**
 * BatchUpdateIntegrationTasks请求参数结构体
 */
export interface BatchUpdateIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id）
   */
  Incharge: string

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * ResumeIntegrationTask返回参数结构体
 */
export interface ResumeIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskName返回参数结构体
 */
export interface ModifyTaskNameResponse {
  /**
   * 结果
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskReportDetailList返回参数结构体
 */
export interface DescribeTaskReportDetailListResponse {
  /**
   * 页码，从1开始
   */
  PageIndex: number

  /**
   * 每页的记录数
   */
  PageSize: number

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 总页数
   */
  TotalPage: number

  /**
   * 任务运行指标
   */
  Items: Array<TaskReportDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量操作结果
 */
export interface BatchResult {
  /**
   * 正在运行的任务数
   */
  Running: number

  /**
   * 执行成功的任务数
   */
  Success: number

  /**
   * 执行失败的任务数
   */
  Failed: number

  /**
   * 总任务数
   */
  Total: number
}

/**
 * DescribeIntegrationStatisticsInstanceTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrendsData: Array<IntegrationStatisticsTrendResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作结果
 */
export interface BatchReturn {
  /**
   * 执行结果
   */
  Result: boolean

  /**
      * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorDesc: string

  /**
      * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorId: string
}

/**
 * 集成节点
 */
export interface IntegrationNodeInfo {
  /**
      * 集成节点id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: string

  /**
   * 集成节点所属任务id
   */
  TaskId?: string

  /**
   * 集成节点名称
   */
  Name?: string

  /**
   * 集成节点类型
   */
  NodeType?: string

  /**
   * 节点数据源类型
   */
  DataSourceType?: string

  /**
      * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatasourceId?: string

  /**
      * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config?: Array<RecordField>

  /**
      * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtConfig?: Array<RecordField>

  /**
      * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
      */
  Schema?: Array<IntegrationNodeSchema>

  /**
      * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeMapping?: IntegrationNodeMapping

  /**
   * 应用id
   */
  AppId?: string

  /**
   * 项目id
   */
  ProjectId?: string

  /**
      * 创建人uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorUin?: string

  /**
      * 操作人uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperatorUin?: string

  /**
   * owner uin
   */
  OwnerUin?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * DeleteDataSources返回参数结构体
 */
export interface DeleteDataSourcesResponse {
  /**
      * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskInstanceReportDetail请求参数结构体
 */
export interface DescribeTaskInstanceReportDetailRequest {
  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务实例数据时间
   */
  CurRunDate?: string

  /**
   * 任务实例运行时间
   */
  IssueDate?: string
}

/**
 * ModifyTaskLinks请求参数结构体
 */
export interface ModifyTaskLinksRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 父任务ID
   */
  TaskFrom: string

  /**
   * 子任务ID
   */
  TaskTo: string

  /**
   * 子任务工作流
   */
  WorkflowId: string

  /**
   * 父任务工作流
   */
  RealFromWorkflowId: string

  /**
   * 父子任务之间的依赖关系
   */
  LinkDependencyType?: string
}

/**
 * ModifyWorkflowSchedule返回参数结构体
 */
export interface ModifyWorkflowScheduleResponse {
  /**
   * 执行结果
   */
  Data: BatchResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataSources请求参数结构体
 */
export interface DeleteDataSourcesRequest {
  /**
   * id列表
   */
  Ids: Array<number>
}

/**
 * ModifyTaskAlarmRegular请求参数结构体
 */
export interface ModifyTaskAlarmRegularRequest {
  /**
   * 主键ID
   */
  Id: string

  /**
   * 规则信息
   */
  TaskAlarmInfo: TaskAlarmInfo

  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * DescribeOrganizationalFunctions请求参数结构体
 */
export interface DescribeOrganizationalFunctionsRequest {
  /**
   * 场景类型：开发、使用
   */
  Type: string

  /**
   * 项目 ID
   */
  ProjectId: string

  /**
   * 函数名称
   */
  Name?: string

  /**
   * 展示名称
   */
  DisplayName?: string
}

/**
 * DescribeKafkaTopicInfo返回参数结构体
 */
export interface DescribeKafkaTopicInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RerunInstances请求参数结构体
 */
export interface RerunInstancesRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 实例嵌套集合
   */
  Instances: Array<InstanceInfo>

  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather: boolean

  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType: string

  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay: string

  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening: boolean

  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType: string
}

/**
 * CommitIntegrationTask请求参数结构体
 */
export interface CommitIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行
   */
  CommitType?: number

  /**
   * 实时任务 201   离线任务 202  默认实时任务
   */
  TaskType?: number
}

/**
 * DescribeTableInfoList请求参数结构体
 */
export interface DescribeTableInfoListRequest {
  /**
   * 表名
   */
  Filters: Array<Filter>

  /**
   * 如果是hive这里写rpc，如果是其他类型不传
   */
  ConnectionType: string

  /**
   * 数据库源类型
   */
  Catalog: string
}

/**
 * 采集器详细信息
 */
export interface InLongAgentDetail {
  /**
   * Agent ID
   */
  AgentId: string

  /**
   * Agent Name
   */
  AgentName: string

  /**
   * Agent状态(running运行中，initializing 操作中，failed心跳异常)
   */
  Status: string

  /**
      * Agent状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusDesc: string

  /**
   * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1
   */
  AgentType: number

  /**
   * 采集来源
   */
  Source: string

  /**
   * VPC
   */
  VpcId: string

  /**
   * 集成资源组Id
   */
  ExecutorGroupId: string

  /**
   * 集成资源组名称
   */
  ExecutorGroupName: string

  /**
   * 关联任务数
   */
  TaskCount: number
}

/**
 * CommitIntegrationTask返回参数结构体
 */
export interface CommitIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集成任务
 */
export interface IntegrationTaskInfo {
  /**
   * 任务名称
   */
  TaskName?: string

  /**
      * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
   * 同步类型1.解决方案(整库迁移),2.单表同步
   */
  SyncType?: number

  /**
   * 201.实时,202.离线
   */
  TaskType?: number

  /**
      * 任务所属工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowId?: string

  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
      * 任务调度id(oceanus or us等作业id)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScheduleTaskId?: string

  /**
      * 任务组id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupId?: string

  /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId?: string

  /**
      * 创建人uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatorUin?: string

  /**
      * 操作人uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperatorUin?: string

  /**
      * owner uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerUin?: string

  /**
      * 应用id
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId?: string

  /**
      * 任务状态1.初始化,2.操作中,3.运行中,4.暂停,5.任务停止中,6.停止,7.执行失败,8.已删除,9.已锁定,10.配置过期,11.提交中,12.提交成功,13.提交失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
      * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Nodes?: Array<IntegrationNodeInfo>

  /**
      * 执行资源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutorId?: string

  /**
      * 任务配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config?: Array<RecordField>

  /**
      * 任务扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtConfig?: Array<RecordField>

  /**
      * 任务执行context信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecuteContext?: Array<RecordField>

  /**
      * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mappings?: Array<IntegrationNodeMapping>

  /**
      * 任务模式：1.画布模式，2.flink jar
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskMode?: string

  /**
      * 责任人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Incharge?: string

  /**
      * 离线新增参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  OfflineTaskAddEntity?: OfflineTaskAddParam

  /**
      * group name
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutorGroupName?: string

  /**
      * url
注意：此字段可能返回 null，表示取不到有效值。
      */
  InLongManagerUrl?: string

  /**
      * stream id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InLongStreamId?: string

  /**
      * version
注意：此字段可能返回 null，表示取不到有效值。
      */
  InLongManagerVersion?: string
}

/**
 * SubmitTask返回参数结构体
 */
export interface SubmitTaskResponse {
  /**
   * 成功或者失败
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFolder请求参数结构体
 */
export interface ModifyFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 文件夹名称
   */
  FolderName: string

  /**
   * 文件夹Id
   */
  FolderId: string

  /**
   * 父文件夹ID
   */
  ParentsFolderId?: string
}

/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
  /**
      * 告警事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmEventInfoList: Array<AlarmEventInfo>

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogList返回参数结构体
 */
export interface DescribeInstanceLogListResponse {
  /**
   * 日志列表
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunTask请求参数结构体
 */
export interface RunTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DescribeDependTasksNew请求参数结构体
 */
export interface DescribeDependTasksNewRequest {
  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 上游/下游层级1-6级
   */
  Deep: number

  /**
   * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
   */
  Up: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务工作流id
   */
  WorkflowId: string
}

/**
 * CreateOfflineTask返回参数结构体
 */
export interface CreateOfflineTaskResponse {
  /**
   * 结果
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTaskAlarmRegular请求参数结构体
 */
export interface CreateTaskAlarmRegularRequest {
  /**
   * 告警配置信息
   */
  TaskAlarmInfo: TaskAlarmInfo

  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * 操作结果
 */
export interface OperateResult {
  /**
   * 操作结果；true表示成功；false表示失败
   */
  Result: boolean

  /**
      * 错误编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorId: string

  /**
      * 操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorDesc: string
}

/**
 * DescribeInstanceLogList请求参数结构体
 */
export interface DescribeInstanceLogListRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * DescribeInLongAgentList请求参数结构体
 */
export interface DescribeInLongAgentListRequest {
  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * 采集器ID
   */
  AgentId?: string

  /**
   * Agent Name
   */
  AgentName?: string

  /**
   * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1
   */
  AgentType?: number

  /**
   * Agent状态(running运行中，initializing 操作中，failed心跳异常)
   */
  Status?: string

  /**
   * Vpc Id
   */
  VpcId?: string

  /**
   * 分页页码，从1开始，默认：1
   */
  PageIndex?: number

  /**
   * 分页每页记录数，默认10
   */
  PageSize?: number

  /**
   * 名称搜索是否开启模糊匹配，1：开启，0：不开启（精确匹配）
   */
  Like?: number
}

/**
 * 参数参数
 */
export interface ParamInfo {
  /**
   * 参数名
   */
  ParamKey: string

  /**
   * 参数值
   */
  ParamValue: string
}

/**
 * DescribeInstanceLogs返回参数结构体
 */
export interface DescribeInstanceLogsResponse {
  /**
      * 返回日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<InstanceLog>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteIntegrationTasks请求参数结构体
 */
export interface BatchDeleteIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * TaskLog请求参数结构体
 */
export interface TaskLogRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 起始时间戳，单位毫秒
   */
  StartTime: number

  /**
   * 结束时间戳，单位毫秒
   */
  EndTime: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 拉取日志数量，默认100
   */
  Limit?: number

  /**
   * 日志排序 desc 倒序 asc 顺序
   */
  OrderType?: string

  /**
   * 实时任务 201   离线任务 202  默认实时任务
   */
  TaskType?: number
}

/**
 * DescribeIntegrationStatisticsTaskStatus请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string

  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * BatchDeleteTasksNew返回参数结构体
 */
export interface BatchDeleteTasksNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集成节点映射
 */
export interface IntegrationNodeMapping {
  /**
   * 源节点id
   */
  SourceId?: string

  /**
   * 目标节点id
   */
  SinkId?: string

  /**
      * 源节点schema
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceSchema?: Array<IntegrationNodeSchema>

  /**
      * 节点schema映射
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchemaMappings?: Array<IntegrationNodeSchemaMapping>

  /**
      * 节点映射扩展信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtConfig?: Array<RecordField>
}

/**
 * SuspendIntegrationTask请求参数结构体
 */
export interface SuspendIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * CreateHiveTableByDDL返回参数结构体
 */
export interface CreateHiveTableByDDLResponse {
  /**
   * 表名称
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskScript返回参数结构体
 */
export interface ModifyTaskScriptResponse {
  /**
      * 详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CommonContent

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResource返回参数结构体
 */
export interface DeleteResourceResponse {
  /**
      * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命名空间
 */
export interface Namespace {
  /**
   * 名称
   */
  Name: string

  /**
   * 当前状态
   */
  Status: string

  /**
   * 创建时间
   */
  CreatedAt: string
}

/**
 * DescribeTaskInstances返回参数结构体
 */
export interface DescribeTaskInstancesResponse {
  /**
   * 无
   */
  Data: DescribeTaskInstancesData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 项目/工作空间id
   */
  ProjectId: string

  /**
   * 页码
   */
  PageIndex: number

  /**
   * 页大小
   */
  PageSize: number

  /**
   * 周期列表（如天，一次性），可选
   */
  CycleList: Array<string>

  /**
   * 责任人
   */
  OwnerList: Array<string>

  /**
   * 跟之前保持一致
   */
  InstanceType: string

  /**
   * 排序顺序（asc，desc）
   */
  Sort: string

  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol: string

  /**
   * 类型列表（如35 shell任务），可选
   */
  TaskTypeList: Array<number>

  /**
   * 状态列表（如成功 2，正在执行 1），可选
   */
  StateList: Array<number>

  /**
   * 任务名称
   */
  Keyword?: string
}

/**
 * DeleteCustomFunction请求参数结构体
 */
export interface DeleteCustomFunctionRequest {
  /**
   * 集群实例 ID
   */
  ClusterIdentifier: string

  /**
   * 函数 ID
   */
  FunctionId: string

  /**
   * 项目ID，必须填
   */
  ProjectId?: string
}

/**
 * 任务分页数据查询
 */
export interface TaskInfoDataPage {
  /**
   * 页号
   */
  PageNumber: number

  /**
   * 页大小
   */
  PageSize: number

  /**
   * 任务集合信息
   */
  Items: Array<TaskInfoData>

  /**
   * 总页数1
   */
  TotalCount: number
}

/**
 * 任务锁的状态
 */
export interface TaskLockStatus {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 持锁者
   */
  Locker: string

  /**
   * 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者
   */
  IsLocker: number

  /**
   * 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁
   */
  IsRob: number
}

/**
 * 查询任务实例列表
 */
export interface DescribeTaskInstancesData {
  /**
   * 实例列表
   */
  Items: Array<TaskInstanceInfo>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 页号
   */
  PageNumber: number

  /**
   * 页大小
   */
  PageSize: number
}

/**
 * DryRunDIOfflineTask请求参数结构体
 */
export interface DryRunDIOfflineTaskRequest {
  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 资源组Id
   */
  ResourceGroup?: string

  /**
   * 默认 27
   */
  TaskTypeId?: number
}

/**
 * CreateOfflineTask请求参数结构体
 */
export interface CreateOfflineTaskRequest {
  /**
   * 项目/工作
   */
  ProjectId: string

  /**
   * 1
   */
  CycleStep: number

  /**
   * 0
   */
  DelayTime: number

  /**
   * 2099-12-31 00:00:00
   */
  EndTime: string

  /**
   * 备注
   */
  Notes: string

  /**
   * 当前日期
   */
  StartTime: string

  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 跟之前调用调度接口保持一致27
   */
  TypeId: number

  /**
   * 默认 ""
   */
  TaskAction: string

  /**
   * 区分画布和表单
   */
  TaskMode: string
}

/**
 * DescribeIntegrationStatisticsRecordsTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrendsData: Array<IntegrationStatisticsTrendResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件夹分页信息
 */
export interface DescribeFolderWorkflowListData {
  /**
   * 工作流信息列表
   */
  Items: Array<Workflow>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 页号
   */
  PageNumber: number

  /**
   * 页大小
   */
  PageSize: number
}

/**
 * BatchForceSuccessIntegrationTaskInstances返回参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务告警信息
 */
export interface TaskAlarmInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 规则名称
   */
  RegularName: string

  /**
   * 规则状态(0表示关闭，1表示打开)
   */
  RegularStatus: number

  /**
   * 告警级别(0表示普通，1表示重要，2表示紧急)
   */
  AlarmLevel: number

  /**
      * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数
      */
  AlarmIndicator: number

  /**
   * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
   */
  AlarmWay: string

  /**
   * 告警接收人ID，多个用逗号隔开
   */
  AlarmRecipientId: string

  /**
   * 任务类型(201表示实时，202表示离线)
   */
  TaskType: number

  /**
      * 告警接收人昵称，多个用逗号隔开
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmRecipientName: string

  /**
      * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: string

  /**
   * 规则ID
   */
  RegularId?: string

  /**
      * 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败)
注意：此字段可能返回 null，表示取不到有效值。
      */
  TriggerType?: number

  /**
      * 预计的超时时间(分钟级别)
注意：此字段可能返回 null，表示取不到有效值。
      */
  EstimatedTime?: number

  /**
      * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId?: string

  /**
      * 创建人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Creater?: string

  /**
      * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmIndicatorDesc?: string

  /**
      * 实时任务告警需要的参数，1是大于2是小于
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operator?: number

  /**
      * 节点id，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId?: string

  /**
      * 节点名称，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeName?: string
}

/**
 * DescribeClusterNamespaceList请求参数结构体
 */
export interface DescribeClusterNamespaceListRequest {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * WeData项目ID
   */
  ProjectId: string
}

/**
 * 告警接收人详情
 */
export interface AlarmReceiverInfo {
  /**
   * 告警ID
   */
  AlarmId: string

  /**
   * 告警接收人ID
   */
  AlarmReceiver: string

  /**
   * 邮件，0：未设置，1：成功，2：失败
   */
  Email: number

  /**
   * 短信，0：未设置，1：成功，2：失败
   */
  Sms: number

  /**
   * 微信，0：未设置，1：成功，2：失败
   */
  Wechat: number

  /**
   * 电话，0：未设置，1：成功，2：失败
   */
  Voice: number

  /**
   * 企业微信，0：未设置，1：成功，2：失败
   */
  Wecom: number

  /**
   * http，0：未设置，1：成功，2：失败
   */
  Http: number
}

/**
 * Spark SQL配置参数
 */
export interface GeneralTaskParam {
  /**
   * 通用任务参数类型,例：SPARK_SQL
   */
  Type: string

  /**
      * 通用任务参数内容,直接作用于任务的参数。不同参数用;
分割
      */
  Value: string
}

/**
 * CreateInLongAgent请求参数结构体
 */
export interface CreateInLongAgentRequest {
  /**
   * 采集器类型，1：TKE Agent，2：BOSS SDK，默认：1
   */
  AgentType: number

  /**
   * 采集器名称
   */
  AgentName: string

  /**
   * 集成资源组id
   */
  ExecutorGroupId: string

  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * TKE集群的地域
   */
  TkeRegion: string

  /**
   * 当AgentType为1时，必填。当AgentType为2时，不用填
   */
  ClusterId?: string
}

/**
 * 用户文件信息
 */
export interface UserFileDTO {
  /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * 文件类型，如 jar zip 等
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileExtensionType: string

  /**
      * 文件上传类型，资源管理为 resource
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileUploadType: string

  /**
      * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5Value: string

  /**
      * 创建时间，秒级别的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 更新时间，秒级别的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number

  /**
      * 文件大小，单位为字节
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size: number

  /**
      * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalPath: string

  /**
      * 本地临时路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalTmpPath: string

  /**
      * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemotePath: string

  /**
      * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerName: string

  /**
      * 文件拥有者uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  Owner: string

  /**
      * 文件深度
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathDepth: string

  /**
      * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: string

  /**
      * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtraInfo: string

  /**
      * 本地临时压缩文件绝对路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZipPath: string

  /**
      * 文件所属存储桶
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bucket: string

  /**
      * 文件所属存储桶的地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string
}

/**
 * 画布所需的信息
 */
export interface CanvasInfo {
  /**
   * 画布任务信息
   */
  TasksList: Array<TaskCanvasInfo>

  /**
   * 画布任务链接信息
   */
  LinksList: Array<TaskLinkInfo>
}

/**
 * 集成节点详情
 */
export interface IntegrationNodeDetail {
  /**
   * 集成节点名称
   */
  Name?: string

  /**
   * 集成节点类型
   */
  NodeType?: string

  /**
   * 节点数据源类型
   */
  DataSourceType?: string

  /**
      * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatasourceId?: string

  /**
      * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config?: Array<RecordField>

  /**
      * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtConfig?: Array<RecordField>

  /**
      * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
      */
  Schema?: Array<IntegrationNodeSchema>

  /**
      * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeMapping?: IntegrationNodeMapping

  /**
   * owner uin
   */
  OwnerUin?: string
}

/**
 * ForceSucInstances请求参数结构体
 */
export interface ForceSucInstancesRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 实例嵌套集合
   */
  Instances: Array<InstanceInfo>
}

/**
 * GenHiveTableDDLSql请求参数结构体
 */
export interface GenHiveTableDDLSqlRequest {
  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 目标数据库
   */
  SinkDatabase: string

  /**
   * 节点id
   */
  Id?: string

  /**
   * 元数据类型(MYSQL、ORACLE)
   */
  MsType?: string

  /**
   * 数据源id
   */
  DatasourceId?: string

  /**
   * 来源库
   */
  SourceDatabase?: string

  /**
   * 来源表
   */
  TableName?: string

  /**
   * 目标表元数据类型(HIVE、GBASE)
   */
  SinkType?: string

  /**
   * schema名称
   */
  SchemaName?: string
}

/**
 * BatchCreateIntegrationTaskAlarms请求参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 告警配置信息
   */
  TaskAlarmInfo: TaskAlarmInfo

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * LockIntegrationTask返回参数结构体
 */
export interface LockIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFunctionTypes返回参数结构体
 */
export interface DescribeFunctionTypesResponse {
  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Types: Array<FunctionTypeOrKind>

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWorkflowNew请求参数结构体
 */
export interface DeleteWorkflowNewRequest {
  /**
   * 工作流id
   */
  WorkFlowId: string

  /**
      * true : 删除后下游任务可正常运行
false：删除后下游任务不可运行
      */
  DeleteMode: boolean

  /**
      * true：通知下游任务责任人
false:  不通知下游任务责任人
      */
  EnableNotify: boolean

  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * BatchUpdateIntegrationTasks返回参数结构体
 */
export interface BatchUpdateIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MakeUpWorkflowNew请求参数结构体
 */
export interface MakeUpWorkflowNewRequest {
  /**
   * 工作流id
   */
  WorkFlowId: string

  /**
   * 补录开始时间
   */
  StartTime: string

  /**
   * 补录结束时间
   */
  EndTime: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeInstanceLastLog请求参数结构体
 */
export interface DescribeInstanceLastLogRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * DescribeTaskInstances请求参数结构体
 */
export interface DescribeTaskInstancesRequest {
  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 页号，默认为1
   */
  PageNumber?: number

  /**
   * 页大小，默认为10，最大不超过200
   */
  PageSize?: number

  /**
   * 工作流id列表
   */
  WorkflowIdList?: Array<string>

  /**
   * 工作流名称列表，支持模糊搜索
   */
  WorkflowNameList?: Array<string>

  /**
   * 起始数据时间，格式yyyy-MM-dd HH:mm:ss
   */
  DateFrom?: string

  /**
   * 结束数据时间，格式yyyy-MM-dd HH:mm:ss
   */
  DateTo?: string

  /**
   * 任务id列表
   */
  TaskIdList?: Array<string>

  /**
   * 任务名称列表，支持模糊搜索
   */
  TaskNameList?: Array<string>

  /**
   * 责任人名称列表
   */
  InChargeList?: Array<string>

  /**
   * 任务类型码列表，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
   */
  TaskTypeIdList?: Array<number>

  /**
   * 实例状态列表，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
   */
  StateList?: Array<string>

  /**
   * 周期类型列表，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
   */
  TaskCycleUnitList?: Array<string>

  /**
   * 实例类型，0补录实例，1周期实例，2非周期实例
   */
  InstanceType?: number

  /**
   * 排序字段信息列表，ScheduleDateTime / CostTime / StartTime / EndTime
   */
  OrderFields?: Array<OrderField>
}

/**
 * 任务实例信息
 */
export interface TaskInstanceInfo {
  /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
      * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowId: string

  /**
      * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowName: string

  /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectName: string

  /**
      * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectIdent: string

  /**
      * 实例状态，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  State: number

  /**
      * 任务类型id，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTypeId: number

  /**
      * 任务类型描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTypeDesc: string

  /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: string

  /**
      * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderName: string

  /**
      * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderId: string

  /**
      * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchedulerDesc: string

  /**
      * 负责人
注意：此字段可能返回 null，表示取不到有效值。
      */
  InCharge: string

  /**
      * 调度周期类型，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleType: string

  /**
      * 实例开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 实例结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 实例类型，0补录实例，1周期实例，2非周期实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: number

  /**
      * 最大重试次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TryLimit: number

  /**
      * 当前重试次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tries: number

  /**
      * 计划调度时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchedulerDateTime: string

  /**
      * 运行耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
  CostTime: string
}

/**
 * CreateTaskAlarmRegular返回参数结构体
 */
export interface CreateTaskAlarmRegularResponse {
  /**
   * 告警ID
   */
  AlarmId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 元数据表详细信息
 */
export interface TableInfo {
  /**
      * 表Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableId: string

  /**
      * 表名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string
}

/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
  /**
   * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
   */
  ProjectId?: string

  /**
   * 是否展示关联集群信息
   */
  DescribeClusters?: boolean

  /**
   * 是否展示关联执行组的信息，仅部分信息。
   */
  DescribeExecutors?: boolean

  /**
   * 默认不展示项目管理员信息
   */
  DescribeAdminUsers?: boolean

  /**
   * 默认不统计项目人员数量
   */
  DescribeMemberCount?: boolean

  /**
   * 默认不查询创建者的信息
   */
  DescribeCreator?: boolean

  /**
   * 项目名只在租户内唯一，一般用来转化为项目ID。
   */
  ProjectName?: string
}

/**
 * CreateIntegrationTask返回参数结构体
 */
export interface CreateIntegrationTaskResponse {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationTasks返回参数结构体
 */
export interface DescribeIntegrationTasksResponse {
  /**
      * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskInfoSet: Array<IntegrationTaskInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmReceiver请求参数结构体
 */
export interface DescribeAlarmReceiverRequest {
  /**
   * 告警ID
   */
  AlarmId: string

  /**
   * 当前页
   */
  PageNumber: number

  /**
   * 每页记录数
   */
  PageSize: number

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 消息ID
   */
  MessageId: string

  /**
   * 类型
   */
  TaskType?: number

  /**
   * 告警接收人ID(逗号分隔)
   */
  AlarmRecipient?: string

  /**
   * 告警接收人姓名(逗号分隔)
   */
  AlarmRecipientName?: string

  /**
   * 告警时间
   */
  AlarmTime?: string
}

/**
 * 集成离线任务实例信息
 */
export interface SchedulerTaskInstanceInfo {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 实例运行时间
   */
  CurRunDate: string
}

/**
 * UpdateInLongAgent返回参数结构体
 */
export interface UpdateInLongAgentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWorkflowInfo请求参数结构体
 */
export interface ModifyWorkflowInfoRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流id
   */
  WorkflowId: string

  /**
   * 责任人
   */
  Owner?: string

  /**
   * 责任人id
   */
  OwnerId?: string

  /**
   * 备注
   */
  WorkflowDesc?: string

  /**
   * 工作流名称
   */
  WorkflowName?: string

  /**
   * 所属文件夹id
   */
  FolderId?: string

  /**
   * 工作流所属用户分组id  若有多个,分号隔开: a;b;c
   */
  UserGroupId?: string

  /**
   * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
   */
  UserGroupName?: string

  /**
   * 工作流参数列表
   */
  WorkflowParams?: Array<ParamInfo>

  /**
   * 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。
   */
  GeneralTaskParams?: Array<GeneralTaskParam>
}

/**
 * 提交工作流实体
 */
export interface SubmitWorkflow {
  /**
      * 被提交的任务id集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskIds: Array<string>

  /**
   * 执行结果
   */
  Result: boolean

  /**
      * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorDesc: string

  /**
      * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorId: string
}

/**
 * BatchResumeIntegrationTasks请求参数结构体
 */
export interface BatchResumeIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeFolderList请求参数结构体
 */
export interface DescribeFolderListRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 文件夹ID
   */
  ParentsFolderId: string

  /**
   * 关键字
   */
  KeyWords?: string

  /**
   * 页码，默认1
   */
  PageNumber?: number

  /**
   * 页大小，默认10
   */
  PageSize?: number
}

/**
 * DeleteTaskAlarmRegular返回参数结构体
 */
export interface DeleteTaskAlarmRegularResponse {
  /**
      * 删除结果(true表示删除成功，false表示删除失败)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 离线任务实例读取节点的运行指标
 */
export interface InstanceReportReadNode {
  /**
   * 节点名称
   */
  NodeName: string

  /**
   * 数据来源
   */
  DataSource: string

  /**
   * 总条数
   */
  TotalReadRecords: number

  /**
   * 总字节数
   */
  TotalReadBytes: number

  /**
   * 速度（条/秒）
   */
  RecordSpeed: number

  /**
   * 吞吐（Byte/秒）
   */
  ByteSpeed: number

  /**
   * 脏数据条数
   */
  TotalErrorRecords: number
}

/**
 * 文件夹信息
 */
export interface Folder {
  /**
   * 文件ID
   */
  Id: string

  /**
   * 文件夹名称
   */
  Name: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 所属项目id
   */
  ProjectId: string

  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
      * 返回任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CommonId

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchStopIntegrationTasks返回参数结构体
 */
export interface BatchStopIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDataSource请求参数结构体
 */
export interface ModifyDataSourceRequest {
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name: string

  /**
   * 数据源类别：绑定引擎、绑定数据库
   */
  Category: string

  /**
   * 数据源类型:枚举值
   */
  Type: string

  /**
   * 数据源ID
   */
  ID?: number

  /**
   * 业务侧数据源的配置信息扩展
   */
  BizParams?: string

  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
   */
  Params?: string

  /**
   * 数据源描述信息
   */
  Description?: string

  /**
   * 数据源展示名，为了可视化查看
   */
  Display?: string

  /**
   * 若数据源列表为绑定数据库，则为db名称
   */
  DatabaseName?: string

  /**
   * 数据源引擎的实例ID，如CDB实例ID
   */
  Instance?: string

  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
   */
  Status?: number

  /**
   * 数据源所属的业务空间名称
   */
  ClusterId?: string

  /**
   * 是否采集
   */
  Collect?: string

  /**
   * 项目id
   */
  OwnerProjectId?: string

  /**
   * 项目名称
   */
  OwnerProjectName?: string

  /**
   * 项目中文名
   */
  OwnerProjectIdent?: string

  /**
   * cos bucket
   */
  COSBucket?: string

  /**
   * cos region
   */
  COSRegion?: string
}

/**
 * DeleteIntegrationNode返回参数结构体
 */
export interface DeleteIntegrationNodeResponse {
  /**
   * 删除返回是否成功标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceInfoList请求参数结构体
 */
export interface DescribeDataSourceInfoListRequest {
  /**
   * 工作空间id
   */
  ProjectId: string

  /**
   * 页码
   */
  PageNumber?: number

  /**
   * 页数
   */
  PageSize?: number

  /**
   * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
   */
  Filters?: Filter

  /**
   * 排序配置
   */
  OrderFields?: OrderField

  /**
   * 数据源类型
   */
  Type?: string

  /**
   * 数据源名称过滤用
   */
  DatasourceName?: string
}

/**
 * UpdateInLongAgent请求参数结构体
 */
export interface UpdateInLongAgentRequest {
  /**
   * 采集器ID
   */
  AgentId: string

  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * 采集器名称
   */
  AgentName?: string

  /**
   * 集成资源组ID
   */
  ExecutorGroupId?: string
}

/**
 * DescribeIntegrationNode请求参数结构体
 */
export interface DescribeIntegrationNodeRequest {
  /**
   * 节点id
   */
  Id: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型
   */
  TaskType?: number
}

/**
 * SetTaskAlarmNew返回参数结构体
 */
export interface SetTaskAlarmNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatasource返回参数结构体
 */
export interface DescribeDatasourceResponse {
  /**
      * 数据源对象
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: DataSourceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SuspendIntegrationTask返回参数结构体
 */
export interface SuspendIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用记录字段
 */
export interface RecordField {
  /**
   * 字段名称
   */
  Name: string

  /**
   * 字段值
   */
  Value: string
}

/**
 * DeleteInLongAgent请求参数结构体
 */
export interface DeleteInLongAgentRequest {
  /**
   * 采集器ID
   */
  AgentId: string

  /**
   * WeData项目ID
   */
  ProjectId: string
}

/**
 * DescribeIntegrationStatisticsAgentStatus返回参数结构体
 */
export interface DescribeIntegrationStatisticsAgentStatusResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusData: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceInfoList返回参数结构体
 */
export interface DescribeDataSourceInfoListResponse {
  /**
   * 总条数。
   */
  TotalCount: number

  /**
      * 数据源信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatasourceSet: Array<DatasourceBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelatedInstances返回参数结构体
 */
export interface DescribeRelatedInstancesResponse {
  /**
   * 无
   */
  Data: DescribeTaskInstancesData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrUpdateResource请求参数结构体
 */
export interface CreateOrUpdateResourceRequest {
  /**
   * 项目ID
   */
  ProjectId?: string

  /**
   * 文件名
   */
  Files?: Array<string>

  /**
   * 文件所属路径，资源管理根路径为 /datastudio/resouce
   */
  FilePath?: string

  /**
   * cos存储桶名字
   */
  CosBucketName?: string

  /**
   * cos所属地域
   */
  CosRegion?: string

  /**
   * 是否为新文件，新增为 true，更新为 false
   */
  NewFile?: boolean

  /**
   * 文件大小
   */
  FilesSize?: Array<string>
}

/**
 * CheckIntegrationNodeNameExists请求参数结构体
 */
export interface CheckIntegrationNodeNameExistsRequest {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 节点名称
   */
  Name: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 节点ID
   */
  Id?: number
}

/**
 * MakeUpTasksNew请求参数结构体
 */
export interface MakeUpTasksNewRequest {
  /**
   * 补录的当前任务的taskId数组
   */
  TaskIdList: Array<string>

  /**
   * 补录开始时间
   */
  StartTime: string

  /**
   * 补录结束时间
   */
  EndTime: string

  /**
   * 补录选项标识，1表示当前任务；2表示当前及下游任务；3表示下游任务
   */
  MakeUpType: number

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * true: 检查父任务实例状态；false: 不检查父任务实例状态
   */
  CheckParent?: boolean
}

/**
 * DescribeOrganizationalFunctions返回参数结构体
 */
export interface DescribeOrganizationalFunctionsResponse {
  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: Array<OrganizationalFunction>

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataTypes返回参数结构体
 */
export interface DescribeDataTypesResponse {
  /**
   * 字段类型列表。
   */
  TypeInfoSet: Array<Label>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitCustomFunction请求参数结构体
 */
export interface SubmitCustomFunctionRequest {
  /**
   * 函数唯一标识
   */
  FunctionId: string

  /**
   * 集群实例 ID
   */
  ClusterIdentifier: string

  /**
   * 备注信息
   */
  Comment: string

  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * DescribeDataTypes请求参数结构体
 */
export interface DescribeDataTypesRequest {
  /**
   * 数据源类型，MYSQL|KAFKA等
   */
  DatasourceType: string

  /**
   * 项目ID。
   */
  ProjectId: string
}

/**
 * CheckIntegrationTaskNameExists返回参数结构体
 */
export interface CheckIntegrationTaskNameExistsResponse {
  /**
   * true表示存在，false表示不存在
   */
  Data: boolean

  /**
   * 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复）
   */
  ExistsType: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOfflineInstanceList请求参数结构体
 */
export interface GetOfflineInstanceListRequest {
  /**
   * 第几页
   */
  PageIndex: string

  /**
   * 每页几条
   */
  PageSize: number

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 无
   */
  SearchCondition?: SearchCondition
}

/**
 * DescribeStreamTaskLogList返回参数结构体
 */
export interface DescribeStreamTaskLogListResponse {
  /**
      * 是否是全量
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListOver: boolean

  /**
      * 日志集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogContentList: Array<LogContentInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWorkflowNew返回参数结构体
 */
export interface DeleteWorkflowNewResponse {
  /**
   * 返回删除结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIntegrationNode请求参数结构体
 */
export interface DeleteIntegrationNodeRequest {
  /**
   * 节点id
   */
  Id: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * ModifyIntegrationNode返回参数结构体
 */
export interface ModifyIntegrationNodeResponse {
  /**
   * 节点id
   */
  Id: string

  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string

  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * UnlockIntegrationTask请求参数结构体
 */
export interface UnlockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * ModifyTaskAlarmRegular返回参数结构体
 */
export interface ModifyTaskAlarmRegularResponse {
  /**
      * 判断是否修改成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskLinks返回参数结构体
 */
export interface ModifyTaskLinksResponse {
  /**
      * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchMakeUpIntegrationTasks请求参数结构体
 */
export interface BatchMakeUpIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 补数据开始时间
   */
  StartTime: string

  /**
   * 补数据结束时间
   */
  EndTime: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DeleteOfflineTask请求参数结构体
 */
export interface DeleteOfflineTaskRequest {
  /**
   * 操作者name
   */
  OperatorName: string

  /**
   * 项目/工作空间id
   */
  ProjectId: string

  /**
   * 任务id
   */
  TaskId: string

  /**
   * 虚拟任务标记(跟之前调度接口保持一致默认false)
   */
  VirtualFlag: boolean
}

/**
 * DescribeInLongAgentVpcList请求参数结构体
 */
export interface DescribeInLongAgentVpcListRequest {
  /**
   * WeData项目ID
   */
  ProjectId: string
}

/**
 * DescribeDatabaseInfoList返回参数结构体
 */
export interface DescribeDatabaseInfoListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetIntegrationNodeColumnSchema返回参数结构体
 */
export interface GetIntegrationNodeColumnSchemaResponse {
  /**
      * 字段列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Schemas: Array<IntegrationNodeSchema>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容详情
 */
export interface CommonContent {
  /**
      * 详情内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: string
}

/**
 * ModifyIntegrationNode请求参数结构体
 */
export interface ModifyIntegrationNodeRequest {
  /**
   * 集成节点信息
   */
  NodeInfo: IntegrationNodeInfo

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型
   */
  TaskType?: number

  /**
   * 区分画布模式和表单模式
   */
  TaskMode?: number
}

/**
 * SubmitWorkflow返回参数结构体
 */
export interface SubmitWorkflowResponse {
  /**
   * 执行结果
   */
  Data: SubmitWorkflow

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例日志实体
 */
export interface InstanceLog {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string

  /**
      * 尝试运行次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tries: string

  /**
      * 日志更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastUpdate: string

  /**
   * 日志所在节点
   */
  BrokerIp: string

  /**
   * 文件名  含全路径
   */
  OriginFileName: string

  /**
   * 日志创建时间
   */
  CreateTime: string

  /**
   * 实例日志类型, run: 运行; kill: 终止
   */
  InstanceLogType: string

  /**
   * 运行耗时
   */
  CostTime: number
}

/**
 * DescribeFunctionTypes请求参数结构体
 */
export type DescribeFunctionTypesRequest = null

/**
 * BatchDeleteTasksNew请求参数结构体
 */
export interface BatchDeleteTasksNewRequest {
  /**
   * 批量删除的任务TaskId
   */
  TaskIdList: Array<string>

  /**
      * true : 删除后下游任务可正常运行
false：删除后下游任务不可运行
      */
  DeleteMode: boolean

  /**
      * true：通知下游任务责任人
false:  不通知下游任务责任人
      */
  EnableNotify: boolean

  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * DescribeInstanceLog返回参数结构体
 */
export interface DescribeInstanceLogResponse {
  /**
   * 返回结果
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInLongAgent返回参数结构体
 */
export interface DeleteInLongAgentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFolder请求参数结构体
 */
export interface DeleteFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 文件夹ID
   */
  FolderId: string
}

/**
 * DescribeIntegrationTask请求参数结构体
 */
export interface DescribeIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型：201. stream,   202. offline
   */
  TaskType?: number
}

/**
 * FreezeTasksByMultiWorkflow返回参数结构体
 */
export interface FreezeTasksByMultiWorkflowResponse {
  /**
   * 操作结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SaveCustomFunction返回参数结构体
 */
export interface SaveCustomFunctionResponse {
  /**
      * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  FunctionId: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流id
   */
  WorkflowId: string

  /**
   * 任务名
   */
  TaskName: string

  /**
   * 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
   */
  TaskType: number

  /**
   * 扩展属性
   */
  TaskExt?: Array<TaskExtInfo>
}

/**
 * 简单Task信息
 */
export interface SimpleTaskInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务名
   */
  TaskName: string
}

/**
 * CreateFolder返回参数结构体
 */
export interface CreateFolderResponse {
  /**
      * 文件夹Id，null则创建失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CommonId

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo请求参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoRequest {
  /**
   * 实时任务id
   */
  TaskId: string

  /**
   * 工程id
   */
  ProjectId: string
}

/**
 * DescribeTaskInstanceReportDetail返回参数结构体
 */
export interface DescribeTaskInstanceReportDetailResponse {
  /**
   * 任务实例运行指标概览
   */
  Summary: InstanceReportSummary

  /**
   * 任务实例读取节点运行指标
   */
  ReadNode: InstanceReportReadNode

  /**
   * 任务实例写入节点运行指标
   */
  WriteNode: InstanceReportWriteNode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHiveTable返回参数结构体
 */
export interface CreateHiveTableResponse {
  /**
   * 建表是否成功
   */
  IsSuccess: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDataSource返回参数结构体
 */
export interface ModifyDataSourceResponse {
  /**
      * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitWorkflow请求参数结构体
 */
export interface SubmitWorkflowRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流id
   */
  WorkflowId: string

  /**
   * 提交的版本备注
   */
  VersionRemark: string

  /**
   * 是否启动调度
   */
  StartScheduling: boolean
}

/**
 * RerunInstances返回参数结构体
 */
export interface RerunInstancesResponse {
  /**
   * 返回实例批量终止结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskLockStatus返回参数结构体
 */
export interface DescribeTaskLockStatusResponse {
  /**
   * 任务锁状态信息
   */
  TaskLockStatus: TaskLockStatus

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartIntegrationTask返回参数结构体
 */
export interface StartIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchKillIntegrationTaskInstances请求参数结构体
 */
export interface BatchKillIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 依赖配置
 */
export interface DependencyConfig {
  /**
   * 仅五种周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE
   */
  DependConfType: string

  /**
   * 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH
   * PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE
   */
  SubordinateCyclicType: string

  /**
   * WAITING，等待（默认策略）EXECUTING:执行
   */
  DependencyStrategy: string

  /**
      * 父任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParentTask?: TaskInnerInfo

  /**
      * 子任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SonTask?: TaskInnerInfo
}

/**
 * RobAndLockIntegrationTask请求参数结构体
 */
export interface RobAndLockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型：201. stream,   202. offline
   */
  TaskType: number
}

/**
 * ModifyTaskInfo返回参数结构体
 */
export interface ModifyTaskInfoResponse {
  /**
   * 执行结果
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询实例条件(新)
 */
export interface SearchConditionNew {
  /**
   * 查询框架，必选
   */
  Instance: SearchConditionInstanceNew

  /**
   * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
   */
  Keyword?: string

  /**
   * 排序顺序（asc，desc）
   */
  Sort?: string

  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol?: string
}

/**
 * ResumeIntegrationTask请求参数结构体
 */
export interface ResumeIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 任务信息数据
 */
export interface TaskInfoData {
  /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
      * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowId: string

  /**
      * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowName: string

  /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectName: string

  /**
      * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectIdent: string

  /**
      * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: string

  /**
      * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderName: string

  /**
      * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
      */
  FolderId: string

  /**
      * 负责人
注意：此字段可能返回 null，表示取不到有效值。
      */
  InCharge: string

  /**
      * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualFlag: boolean

  /**
      * 延时实例生成时间(延时调度)，转换为分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
  DelayTime: number

  /**
      * crontab表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
  CrontabExpression: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastUpdate: string

  /**
      * 生效日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 结束日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 执行时间左闭区间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutionStartTime: string

  /**
      * 执行时间右闭区间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutionEndTime: string

  /**
      * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleType: number

  /**
      * 步长
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleStep: number

  /**
      * 延时执行时间（延时执行) 对应为 开始时间 状态为分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartupTime: number

  /**
      * 重试等待时间,单位分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetryWait: number

  /**
      * 是否可重试
注意：此字段可能返回 null，表示取不到有效值。
      */
  Retriable: number

  /**
      * 调度扩展信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskAction: string

  /**
      * 运行次数限制
注意：此字段可能返回 null，表示取不到有效值。
      */
  TryLimit: number

  /**
      * 运行优先级
注意：此字段可能返回 null，表示取不到有效值。
      */
  RunPriority: number

  /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskType: number

  /**
      * 指定的运行节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  BrokerIp: string

  /**
      * 集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 最小数据时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinDateTime: string

  /**
      * 最大数据时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxDateTime: string

  /**
      * 是否自身依赖 是1 否2 并行3
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfDepend: number

  /**
      * 扩展属性
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskExt: Array<TaskExtInfo>

  /**
      * 任务备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Notes: string

  /**
      * 队列
注意：此字段可能返回 null，表示取不到有效值。
      */
  YarnQueue: string

  /**
      * 任务版本是否已提交
注意：此字段可能返回 null，表示取不到有效值。
      */
  Submit: boolean

  /**
      * 最新调度计划变更时间 仅生产态
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastSchedulerCommitTime: string

  /**
      * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
注意：此字段可能返回 null，表示取不到有效值。
      */
  NormalizedJobStartTime: string

  /**
      * 源数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceServer: string

  /**
      * 创建者
注意：此字段可能返回 null，表示取不到有效值。
      */
  Creater: string

  /**
      * 分支，依赖关系，and/or, 默认and
注意：此字段可能返回 null，表示取不到有效值。
      */
  DependencyRel: string

  /**
      * 是否支持工作流依赖 yes / no 默认 no
注意：此字段可能返回 null，表示取不到有效值。
      */
  DependencyWorkflow: string

  /**
      * 任务参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Params: Array<ParamInfo>

  /**
      * 最后修改的人
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateUser: string

  /**
      * 最后修改的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 最后修改的人Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateUserId: string

  /**
      * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchedulerDesc: string

  /**
      * 资源组信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceGroup: string

  /**
      * 版本提交说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionDesc: string

  /**
      * 真实工作流Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealWorkflowId: string

  /**
      * 目标数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetServer: string

  /**
      * 依赖配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  DependencyConfigs: Array<DependencyConfig>

  /**
      * 虚拟任务状态1
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualTaskStatus: string

  /**
      * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualTaskId: string
}

/**
 * TriggerEvent返回参数结构体
 */
export interface TriggerEventResponse {
  /**
      * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: BatchReturn

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceManagePathTrees请求参数结构体
 */
export interface DescribeResourceManagePathTreesRequest {
  /**
   * 项目ID
   */
  ProjectId?: string

  /**
   * 名字，供搜索
   */
  Name?: string

  /**
   * 文件类型
   */
  FileType?: string

  /**
   * 文件路径
   */
  FilePath?: string

  /**
   * 文件夹类型
   */
  DirType?: string
}

/**
 * DescribeTasksByPage返回参数结构体
 */
export interface DescribeTasksByPageResponse {
  /**
      * 无1
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TaskInfoDataPage

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 函数资源信息
 */
export interface FunctionResource {
  /**
      * 资源路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  Path: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
   * 资源唯一标识
   */
  Id?: string

  /**
      * 资源 MD5 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5?: string

  /**
      * 默认是 hdfs
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string
}

/**
 * DescribeStandardRuleDetailInfoList请求参数结构体
 */
export interface DescribeStandardRuleDetailInfoListRequest {
  /**
   * 空间、项目id
   */
  ProjectId: string

  /**
   * 标准分类11编码映射 12数据过滤 13字符串转换 14数据元定义 15正则表达 16术语词典
   */
  Type: number
}

/**
 * DescribeDataSourceWithoutInfo返回参数结构体
 */
export interface DescribeDataSourceWithoutInfoResponse {
  /**
      * 1
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DataSourceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源对象
 */
export interface DatasourceBaseInfo {
  /**
      * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatabaseNames: Array<string>

  /**
      * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 数据源ID
   */
  ID: number

  /**
      * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Instance: string

  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name: string

  /**
      * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string
}

/**
 * RegisterEvent返回参数结构体
 */
export interface RegisterEventResponse {
  /**
      * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: BatchReturn

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 抢锁状态：是否可以抢锁和当前持锁人
 */
export interface RobLockState {
  /**
   * 是否可以抢锁
   */
  IsRob: boolean

  /**
   * 当前持锁人
   */
  Locker: string
}

/**
 * DescribeAlarmEvents请求参数结构体
 */
export interface DescribeAlarmEventsRequest {
  /**
   * 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord)
   */
  Filters: Array<Filter>

  /**
   * 排序字段（AlarmTime）
   */
  OrderFields: Array<OrderField>

  /**
   * 类型(201表示实时，202表示离线)
   */
  TaskType: number

  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 当前页
   */
  PageNumber: number

  /**
   * 每页记录数
   */
  PageSize: number
}

/**
 * BatchStopTasksNew请求参数结构体
 */
export interface BatchStopTasksNewRequest {
  /**
   * 批量停止任务的TaskId
   */
  TaskIdList: Array<string>

  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * 离线任务实例运行指标概览
 */
export interface InstanceReportSummary {
  /**
   * 总读取记录数
   */
  TotalReadRecords: number

  /**
   * 总读取字节数
   */
  TotalReadBytes: number

  /**
   * 总写入记录数
   */
  TotalWriteRecords: number

  /**
   * 总写入字节数
   */
  TotalWriteBytes: number

  /**
   * 速率（条/秒）
   */
  RecordSpeed: number

  /**
   * 流量（Byte/秒）
   */
  ByteSpeed: number

  /**
   * 脏数据记录数
   */
  TotalErrorRecords: number

  /**
   * 脏数据字节数
   */
  TotalErrorBytes: number

  /**
   * 任务运行总时长
   */
  TotalRunDuration: number

  /**
   * 任务开始运行时间
   */
  BeginRunTime: string

  /**
   * 任务结束运行时间
   */
  EndRunTime: string
}

/**
 * CheckAlarmRegularNameExist返回参数结构体
 */
export interface CheckAlarmRegularNameExistResponse {
  /**
   * 是否重名
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitCustomFunction返回参数结构体
 */
export interface SubmitCustomFunctionResponse {
  /**
      * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  FunctionId: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 速度值对象
 */
export interface SpeedValue {
  /**
      * 带毫秒的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: number

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Speed: number
}

/**
 * 函数提交版本信息
 */
export interface FunctionVersion {
  /**
   * 版本号：V0 V1 V2
   */
  Tag: string

  /**
   * 提交人 ID
   */
  UserId: string

  /**
   * 变更类型：ADD、MODIFY
   */
  Type: string

  /**
   * 备注
   */
  Comment: string

  /**
   * 提交时间: UTC 秒数
   */
  Timestamp: string

  /**
      * 提交人名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 版本内容：json string 格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: string
}

/**
 * DescribeInLongAgentList返回参数结构体
 */
export interface DescribeInLongAgentListResponse {
  /**
   * 采集器信息列表
   */
  Items: Array<InLongAgentDetail>

  /**
   * 页码
   */
  PageIndex: number

  /**
   * 每页记录数
   */
  PageSize: number

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 总页数
   */
  TotalPage: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskAlarmRegulations请求参数结构体
 */
export interface DescribeTaskAlarmRegulationsRequest {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 任务类型(201代表实时任务，202代表离线任务)
   */
  TaskType: number

  /**
   * 当前页
   */
  PageNumber: number

  /**
   * 每页记录数
   */
  PageSize: number

  /**
   * 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName)
   */
  Filters?: Array<Filter>

  /**
   * 排序条件(RegularId)
   */
  OrderFields?: Array<OrderField>
}

/**
 * FreezeTasks返回参数结构体
 */
export interface FreezeTasksResponse {
  /**
   * 操作结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCustomFunction返回参数结构体
 */
export interface CreateCustomFunctionResponse {
  /**
      * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  FunctionId: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskInfo请求参数结构体
 */
export interface ModifyTaskInfoRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟
   */
  DelayTime?: number

  /**
   * 启动时间
   */
  StartupTime?: number

  /**
   * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
   */
  SelfDepend?: number

  /**
   * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string

  /**
   * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string

  /**
   * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
   */
  TaskAction?: string

  /**
   * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType?: number

  /**
   * 步长，间隔时间，最小1
   */
  CycleStep?: number

  /**
   * cron表达式  周期类型为crontab调度才需要
   */
  CrontabExpression?: string

  /**
   * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionStartTime?: string

  /**
   * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionEndTime?: string

  /**
   * 新的任务名
   */
  TaskName?: string

  /**
   * 失败重试间隔,单位分钟，创建任务的时候已经给了默认值
   */
  RetryWait?: number

  /**
   * 失败重试次数，创建任务的时候已经给了默认值
   */
  TryLimit?: number

  /**
   * 是否可重试，1代表可以重试
   */
  Retriable?: number

  /**
   * 运行优先级，4高 5中 6低
   */
  RunPriority?: number

  /**
   * 任务的扩展配置
   */
  TaskExt?: Array<TaskExtInfo>

  /**
   * 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器
   */
  ResourceGroup?: string

  /**
   * 资源池队列名称
   */
  YarnQueue?: string

  /**
   * 资源组下具体执行机，any 表示可以跑在任意一台。
   */
  BrokerIp?: string

  /**
   * 责任人
   */
  InCharge?: string

  /**
   * 任务备注
   */
  Notes?: string

  /**
   * 任务参数
   */
  TaskParamInfos?: Array<ParamInfo>

  /**
   * 源数据源
   */
  SourceServer?: string

  /**
   * 目标数据源
   */
  TargetServer?: string

  /**
   * 是否支持工作流依赖 yes / no 默认 no
   */
  DependencyWorkflow?: string

  /**
   * 依赖配置
   */
  DependencyConfigDTOs?: Array<DependencyConfig>
}

/**
 * 数据源对象
 */
export interface DataSourceInfo {
  /**
      * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatabaseName: string

  /**
      * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ID: number

  /**
      * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Instance: string

  /**
      * 数据源名称，在相同SpaceName下，数据源名称不能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 应用ID AppId
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: number

  /**
      * 业务侧数据源的配置信息扩展
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizParams: string

  /**
      * 数据源类别：绑定引擎、绑定数据库
注意：此字段可能返回 null，表示取不到有效值。
      */
  Category: string

  /**
      * 数据源展示名，为了可视化查看
注意：此字段可能返回 null，表示取不到有效值。
      */
  Display: string

  /**
      * 数据源责任人账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerAccount: string

  /**
      * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
注意：此字段可能返回 null，表示取不到有效值。
      */
  Params: string

  /**
      * 数据源数据源的可见性，1为可见、0为不可见。默认为1
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 数据源责任人账号名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerAccountName: string

  /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterName: string

  /**
      * 归属项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerProjectId: string

  /**
      * 归属项目Name
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerProjectName: string

  /**
      * 归属项目标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerProjectIdent: string

  /**
      * 授权项目
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuthorityProjectName: string

  /**
      * 授权用户
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuthorityUserName: string

  /**
      * 是否有编辑权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  Edit: boolean

  /**
      * 是否有授权权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  Author: boolean

  /**
      * 是否有转交权限
注意：此字段可能返回 null，表示取不到有效值。
      */
  Deliver: boolean

  /**
      * 数据源状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSourceStatus: string

  /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * Params json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParamsString: string

  /**
      * BizParams json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizParamsString: string
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务告警状态
   */
  TaskAlarmStatus?: number
}

/**
 * DescribeOfflineTaskToken请求参数结构体
 */
export type DescribeOfflineTaskTokenRequest = null

/**
 * CreateWorkflow返回参数结构体
 */
export interface CreateWorkflowResponse {
  /**
      * 返回工作流Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CommonId

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResource请求参数结构体
 */
export interface DeleteResourceRequest {
  /**
   * 项目ID
   */
  ProjectId?: string

  /**
   * 资源ID
   */
  ResourceId?: string
}

/**
 * RegisterEventListener请求参数结构体
 */
export interface RegisterEventListenerRequest {
  /**
   * 关键字，如果是任务，则传任务Id
   */
  Key: string

  /**
   * 事件名称
   */
  EventName: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 事件类型，默认 REST_API
   */
  Type?: string

  /**
   * 配置信息，比如最长等待时间1天配置json：{"maxWaitEventTime":1,"maxWaitEventTimeUnit":"DAYS"}
   */
  Properties?: string
}

/**
 * CheckIntegrationNodeNameExists返回参数结构体
 */
export interface CheckIntegrationNodeNameExistsResponse {
  /**
   * 返回true代表存在，返回false代表不存在
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RobAndLockIntegrationTask返回参数结构体
 */
export interface RobAndLockIntegrationTaskResponse {
  /**
   * 抢锁状态
   */
  RobLockState: RobLockState

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTaskAlarmRegular请求参数结构体
 */
export interface DeleteTaskAlarmRegularRequest {
  /**
   * 主键ID
   */
  Id: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务类型(201表示实时任务，202表示离线任务)
   */
  TaskType: number
}

/**
 * DescribeIntegrationStatisticsAgentStatus请求参数结构体
 */
export interface DescribeIntegrationStatisticsAgentStatusRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string

  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * DeleteOfflineTask返回参数结构体
 */
export interface DeleteOfflineTaskResponse {
  /**
   * 结果
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务执行脚本
 */
export interface TaskScriptContent {
  /**
      * 脚本内容 base64编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScriptContent: string
}

/**
 * 数据集成大屏趋势图统计结果
 */
export interface IntegrationStatisticsTrendResult {
  /**
      * 统计属性名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatisticName: Array<string>

  /**
      * 统计值
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatisticValue: Array<number>

  /**
      * 统计项目
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatisticType: string
}

/**
 * GetIntegrationNodeColumnSchema请求参数结构体
 */
export interface GetIntegrationNodeColumnSchemaRequest {
  /**
   * 字段示例（json格式）
   */
  ColumnContent?: string

  /**
   * 数据源类型
   */
  DatasourceType?: string
}

/**
 * ForceSucInstances返回参数结构体
 */
export interface ForceSucInstancesResponse {
  /**
   * 返回实例批量终止结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskLockStatus请求参数结构体
 */
export interface DescribeTaskLockStatusRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型：201. stream,   202. offline
   */
  TaskType: number
}

/**
 * DescribeTaskReport返回参数结构体
 */
export interface DescribeTaskReportResponse {
  /**
   * 总读取条数
   */
  TotalReadRecords: number

  /**
   * 总读取字节数，单位为Byte
   */
  TotalReadBytes: number

  /**
   * 总写入条数
   */
  TotalWriteRecords: number

  /**
   * 总写入字节数，单位为Byte
   */
  TotalWriteBytes: number

  /**
   * 总脏数据条数
   */
  TotalErrorRecords: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAlarmRegularNameExist请求参数结构体
 */
export interface CheckAlarmRegularNameExistRequest {
  /**
   * 项目名称
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 规则名称
   */
  AlarmRegularName: string

  /**
   * 主键ID
   */
  Id?: string
}

/**
 * GetOfflineDIInstanceList返回参数结构体
 */
export interface GetOfflineDIInstanceListResponse {
  /**
   * 总条数
   */
  Total: number

  /**
   * 实例详情
   */
  List: Array<OfflineInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询框架
 */
export interface SearchConditionInstance {
  /**
   * 执行空间 "DRY_RUN"
   */
  ExecutionSpace: number

  /**
      * 产品名称，可选
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName?: number

  /**
      * 资源组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceGroup?: number
}

/**
 * GetOfflineInstanceList返回参数结构体
 */
export interface GetOfflineInstanceListResponse {
  /**
   * 总条数
   */
  Total: number

  /**
   * 实例详情
   */
  List: Array<OfflineInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationTask请求参数结构体
 */
export interface CreateIntegrationTaskRequest {
  /**
   * 任务信息
   */
  TaskInfo: IntegrationTaskInfo

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 实时任务实例当前的节点信息
 */
export interface RealTimeTaskInstanceNodeInfo {
  /**
      * 任务名
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 实时任务实例节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceNodeInfoList: Array<InstanceNodeInfo>
}

/**
 * DescribeRealTimeTaskMetricOverview请求参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewRequest {
  /**
   * 无
   */
  TaskId: string

  /**
   * 无
   */
  ProjectId: string
}

/**
 * DeleteFolder返回参数结构体
 */
export interface DeleteFolderResponse {
  /**
   * true代表删除成功，false代表删除失败
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceManagePathTrees返回参数结构体
 */
export interface DescribeResourceManagePathTreesResponse {
  /**
      * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<ResourcePathTree>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartIntegrationTask请求参数结构体
 */
export interface StartIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
      * 任务详情1
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TaskInfoData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIntegrationTask请求参数结构体
 */
export interface DeleteIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * CreateOrUpdateResource返回参数结构体
 */
export interface CreateOrUpdateResourceResponse {
  /**
      * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<UserFileDTO>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskScript请求参数结构体
 */
export interface ModifyTaskScriptRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 脚本内容 base64编码
   */
  ScriptContent?: string

  /**
   * 集成任务脚本配置
   */
  IntegrationNodeDetails?: Array<IntegrationNodeDetail>
}

/**
 * CreateIntegrationNode请求参数结构体
 */
export interface CreateIntegrationNodeRequest {
  /**
   * 集成节点信息
   */
  NodeInfo: IntegrationNodeInfo

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 任务类型
   */
  TaskType?: number
}

/**
 * DescribeTableSchemaInfo请求参数结构体
 */
export interface DescribeTableSchemaInfoRequest {
  /**
   * 表名称
   */
  Name: string

  /**
   * 数据库名称
   */
  DatabaseName: string

  /**
   * 表类型
   */
  MsType: string

  /**
   * 数据源id
   */
  DatasourceId: string

  /**
   * HIVE传rpc
   */
  ConnectionType?: string

  /**
   * 元数据Database下的Schema名称
   */
  SchemaName?: string
}

/**
 * 离线任务实例写入节点的运行指标
 */
export interface InstanceReportWriteNode {
  /**
   * 节点名称
   */
  NodeName: string

  /**
   * 数据来源
   */
  DataSource: string

  /**
   * 总条数
   */
  TotalWriteRecords: number

  /**
   * 总字节数
   */
  TotalWriteBytes: number

  /**
   * 速度（条/秒）
   */
  RecordSpeed: number

  /**
   * 吞吐（Byte/秒）
   */
  ByteSpeed: number

  /**
   * 脏数据条数
   */
  TotalErrorRecords: number
}

/**
 * BatchForceSuccessIntegrationTaskInstances请求参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo返回参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoResponse {
  /**
      * 实时任务实例节点相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTimeTaskInstanceNodeInfo: RealTimeTaskInstanceNodeInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskReport请求参数结构体
 */
export interface DescribeTaskReportRequest {
  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 统计周期的开始日期，格式为 yyyy-MM-dd
   */
  BeginDate: string

  /**
   * 统计周期的结束日期，格式为 yyyy-MM-dd
   */
  EndDate: string

  /**
   * WeData项目id
   */
  ProjectId: string
}

/**
 * DescribeRealTimeTaskMetricOverview返回参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewResponse {
  /**
   * 总读取记录数
   */
  TotalRecordNumOfRead: number

  /**
   * 总读取字节数
   */
  TotalRecordByteNumOfRead: number

  /**
   * 总写入记录数
   */
  TotalRecordNumOfWrite: number

  /**
   * 总写入字节数 单位字节
   */
  TotalRecordByteNumOfWrite: number

  /**
   * 总的脏记录数据
   */
  TotalDirtyRecordNum: number

  /**
   * 总的脏字节数 单位字节
   */
  TotalDirtyRecordByte: number

  /**
   * 运行时长 单位s
   */
  TotalDuration: number

  /**
   * 开始运行时间
   */
  BeginRunTime: string

  /**
   * 目前运行到的时间
   */
  EndRunTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineTaskToken返回参数结构体
 */
export interface DescribeOfflineTaskTokenResponse {
  /**
   * 长连接临时token
   */
  Token: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableInfoList返回参数结构体
 */
export interface DescribeTableInfoListResponse {
  /**
      * 表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInfo: Array<TableInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOfflineDIInstanceList请求参数结构体
 */
export interface GetOfflineDIInstanceListRequest {
  /**
   * 第几页
   */
  PageIndex: number

  /**
   * 每页几条
   */
  PageSize: number

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 无
   */
  SearchCondition?: SearchConditionNew
}

/**
 * BatchStartIntegrationTasks请求参数结构体
 */
export interface BatchStartIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * CreateCustomFunction请求参数结构体
 */
export interface CreateCustomFunctionRequest {
  /**
   * 类型：HIVE、SPARK
   */
  Type: string

  /**
   * 分类：窗口函数、聚合函数、日期函数......
   */
  Kind: string

  /**
   * 函数名称
   */
  Name: string

  /**
   * 集群实例引擎 ID
   */
  ClusterIdentifier: string

  /**
   * 数据库名称
   */
  DbName?: string

  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 集成节点schema
 */
export interface IntegrationNodeSchema {
  /**
   * schema id
   */
  Id: string

  /**
   * schema名称
   */
  Name: string

  /**
   * schema类型
   */
  Type: string

  /**
      * schema值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string

  /**
      * schema拓展属性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties?: Array<RecordField>
}

/**
 * DescribeDatasource请求参数结构体
 */
export interface DescribeDatasourceRequest {
  /**
   * 对象唯一ID
   */
  Id: number
}

/**
 * KillInstances返回参数结构体
 */
export interface KillInstancesResponse {
  /**
   * 返回实例批量终止结果
   */
  Data: OperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTaskAlarmNew请求参数结构体
 */
export interface SetTaskAlarmNewRequest {
  /**
   * 设置任务超时告警和失败告警信息
   */
  AlarmInfoList: Array<AlarmInfo>

  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * 函数类型或函数分类
 */
export interface FunctionTypeOrKind {
  /**
   * 无
   */
  Name: string

  /**
   * 无
   */
  ZhName: string

  /**
   * 无
   */
  EnName: string
}

/**
 * DescribeTableSchemaInfo返回参数结构体
 */
export interface DescribeTableSchemaInfoResponse {
  /**
      * 123
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchemaInfoList: Array<SchemaDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 结果
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskReportDetailList请求参数结构体
 */
export interface DescribeTaskReportDetailListRequest {
  /**
   * WeData项目id
   */
  ProjectId: string

  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 统计周期的开始日期，格式为 yyyy-MM-dd
   */
  BeginDate: string

  /**
   * 统计周期的结束日期，格式为 yyyy-MM-dd
   */
  EndDate: string

  /**
   * 任务状态，多个状态用逗号连接
   */
  StateList?: string

  /**
   * 排序字段名
   */
  SortItem?: string

  /**
   * 升序或降序，传ASC或DESC
   */
  SortType?: string

  /**
   * 页数，从1开始
   */
  PageIndex?: number

  /**
   * 每页的记录条数，默认10条
   */
  PageSize?: number
}

/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopIntegrationTask请求参数结构体
 */
export interface StopIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * CreateDataSource返回参数结构体
 */
export interface CreateDataSourceResponse {
  /**
      * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFolderWorkflowList返回参数结构体
 */
export interface DescribeFolderWorkflowListResponse {
  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: DescribeFolderWorkflowListData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFolder请求参数结构体
 */
export interface CreateFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 文件夹名称
   */
  FolderName: string

  /**
   * 父文件夹ID
   */
  ParentsFolderId?: string
}

/**
 * DescribeIntegrationVersionNodesInfo返回参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoResponse {
  /**
      * 任务节点信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Nodes: Array<IntegrationNodeInfo>

  /**
      * 任务映射信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mappings: Array<IntegrationNodeMapping>

  /**
   * 任务id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskScript请求参数结构体
 */
export interface DescribeTaskScriptRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * 元数据字段信息
 */
export interface SchemaDetail {
  /**
      * 列
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColumnKey: string

  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string
}

/**
 * 离线实例
 */
export interface OfflineInstance {
  /**
      * 创建账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUin: string

  /**
      * 操作账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperatorUin: string

  /**
      * 主账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerUin: string

  /**
      * 账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: string

  /**
      * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkspaceId: string

  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string

  /**
   * 下发时间
   */
  IssueId: string

  /**
      * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InlongTaskId: string

  /**
      * 资源组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceGroup: string

  /**
   * 实例类型
   */
  TaskRunType: number

  /**
   * 实例状态
   */
  State: string

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
   * 最后更新时间
   */
  UpdateTime: string

  /**
      * 唯一key
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceKey: string
}

/**
 * DescribeAlarmReceiver返回参数结构体
 */
export interface DescribeAlarmReceiverResponse {
  /**
      * 告警接收人列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlarmReceiverInfoList: Array<AlarmReceiverInfo>

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchModifyOwnersNew返回参数结构体
 */
export interface BatchModifyOwnersNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源管理目录树节点
 */
export interface ResourcePathTree {
  /**
      * 资源名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 是否为叶子节点
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsLeaf: boolean

  /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocalPath: string

  /**
      * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemotePath: string

  /**
      * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileExtensionType: string

  /**
      * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size: number

  /**
      * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5Value: string

  /**
      * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerName: string

  /**
      * 更新人
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateUser: string

  /**
      * 文件更新人uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateUserId: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number

  /**
      * Cos存储桶名
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosBucket: string

  /**
      * Cos地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosRegion: string

  /**
      * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtraInfo: string
}

/**
 * 任务依赖的边信息
 */
export interface TaskLinkInfo {
  /**
   * 下游任务id
   */
  TaskTo: string

  /**
   * 上游任务id
   */
  TaskFrom: string

  /**
   * 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务
   */
  LinkType: string

  /**
   * 依赖边id
   */
  LinkId: string
}

/**
 * TKE集群信息详情
 */
export interface InLongTkeDetail {
  /**
   * 集群Id
   */
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常)
   */
  Status: string

  /**
   * 是否安装Agent，true: 是，false: 否
   */
  HasAgent: boolean

  /**
      * 采集器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentId: string

  /**
   * VPC ID
   */
  VpcId: string

  /**
   * TKE集群区域ID
   */
  TkeRegion: string

  /**
   * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER
   */
  ClusterType: string
}

/**
 * 采集器关联的集成任务
 */
export interface InLongAgentTask {
  /**
   * 集成任务ID
   */
  TaskId: string

  /**
   * 集成任务名称
   */
  TaskName: string

  /**
   * 集成任务状态
   */
  TaskStatus: string
}

/**
 * BatchStartIntegrationTasks返回参数结构体
 */
export interface BatchStartIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationVersionNodesInfo请求参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * task version path
   */
  TaskVersionPath: string

  /**
   * task version
   */
  TaskVersion?: string
}

/**
 * DescribeRealTimeTaskSpeed返回参数结构体
 */
export interface DescribeRealTimeTaskSpeedResponse {
  /**
   * 同步速度条/s列表
   */
  RecordsSpeedList: Array<RecordsSpeed>

  /**
   * 同步速度字节/s列表
   */
  BytesSpeedList: Array<BytesSpeed>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFolderWorkflowList请求参数结构体
 */
export interface DescribeFolderWorkflowListRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 父文件夹ID
   */
  ParentsFolderId: string

  /**
   * 关键字
   */
  KeyWords?: string

  /**
   * 页码，默认1
   */
  PageNumber?: number

  /**
   * 页大小，默认10
   */
  PageSize?: number
}

/**
 * CheckTaskNameExist返回参数结构体
 */
export interface CheckTaskNameExistResponse {
  /**
   * 结果
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInLongAgentTaskList返回参数结构体
 */
export interface DescribeInLongAgentTaskListResponse {
  /**
   * 采集器关联的集成任务列表
   */
  Items: Array<InLongAgentTask>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LockIntegrationTask请求参数结构体
 */
export interface LockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 离线任务统计指标明细
 */
export interface TaskReportDetail {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务实例ID
   */
  InstanceId: string

  /**
   * 实例数据运行时间
   */
  CurRunDate: string

  /**
   * 实例实际下发时间
   */
  IssueDate: string

  /**
   * 任务状态码。1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行。
   */
  TaskState: string

  /**
   * 总读取条数
   */
  TotalReadRecords: number

  /**
   * 总读取字节数
   */
  TotalReadBytes: number

  /**
   * 总写入条数
   */
  TotalWriteRecords: number

  /**
   * 总写入字节数
   */
  TotalWriteBytes: number

  /**
   * 写入速度（条/秒）
   */
  RecordSpeed: number

  /**
   * 吞吐（Byte/秒）
   */
  ByteSpeed: number

  /**
   * 脏数据条数
   */
  TotalErrorRecords: number
}

/**
 * BatchStopIntegrationTasks请求参数结构体
 */
export interface BatchStopIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeInstanceLastLog返回参数结构体
 */
export interface DescribeInstanceLastLogResponse {
  /**
   * 日志
   */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHiveTable请求参数结构体
 */
export interface CreateHiveTableRequest {
  /**
   * 数据源id
   */
  DatasourceId: string

  /**
   * 数据库
   */
  Database: string

  /**
   * 建hive表ddl
   */
  DDLSql: string

  /**
   * 表权限 ，默认为0:项目共享;1:仅个人与管理员
   */
  Privilege: number

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 责任人
   */
  Incharge?: string
}

/**
 * BatchKillIntegrationTaskInstances返回参数结构体
 */
export interface BatchKillIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckIntegrationTaskNameExists请求参数结构体
 */
export interface CheckIntegrationTaskNameExistsRequest {
  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId?: string

  /**
   * 同步类型1.单表同步，2.解决方案
   */
  SyncType?: number
}

/**
 * DescribeDataSourceWithoutInfo请求参数结构体
 */
export interface DescribeDataSourceWithoutInfoRequest {
  /**
   * 1
   */
  OrderFields?: Array<OrderField>

  /**
   * 1
   */
  Filters?: Array<Filter>
}

/**
 * DescribeInLongAgentVpcList返回参数结构体
 */
export interface DescribeInLongAgentVpcListResponse {
  /**
   * VPC列表
   */
  VpcList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FreezeTasksByMultiWorkflow请求参数结构体
 */
export interface FreezeTasksByMultiWorkflowRequest {
  /**
   * 工作流Id集合
   */
  WorkFlowIds: Array<string>
}

/**
 * Id包装对象
 */
export interface CommonId {
  /**
      * Id值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string
}

/**
 * BatchStopTasksNew返回参数结构体
 */
export interface BatchStopTasksNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data: BatchOperateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用过滤器
 */
export interface Filter {
  /**
   * 过滤字段名称
   */
  Name?: string

  /**
   * 过滤值列表
   */
  Values?: Array<string>
}

/**
 * DeleteIntegrationTask返回参数结构体
 */
export interface DeleteIntegrationTaskResponse {
  /**
   * 任务删除成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例请求实体
 */
export interface InstanceInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * DescribeFolderList返回参数结构体
 */
export interface DescribeFolderListResponse {
  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: DescribeFolderListData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatisticsTaskStatus返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusResponse {
  /**
      * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusData: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseInfoList请求参数结构体
 */
export interface DescribeDatabaseInfoListRequest {
  /**
   * 如果是hive这里写rpc，如果是其他类型不传
   */
  ConnectionType: string
}

/**
 * DescribeInLongTkeClusterList请求参数结构体
 */
export interface DescribeInLongTkeClusterListRequest {
  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * TKE集群地域
   */
  TkeRegion: string

  /**
      * 集群名称。
多个名称用逗号连接。
      */
  ClusterName?: string

  /**
      * TKE集群状态 (Running 运行中 Creating 创建中 Initializing 创建中 Idling 闲置中 Abnormal 异常 Failed 异常 Terminating 删除中 Deleting 删除中 Scaling 规模调整中 Upgrading 升级中 Isolated 欠费隔离中 NodeUpgrading 节点升级中 Recovering 唤醒中 Activating 激活中 MasterScaling Master扩缩容中 Waiting 等待注册 ClusterLevelUpgrading 调整规格中 ResourceIsolate 隔离中 ResourceIsolated 已隔离 ResourceReverse 冲正中 Trading 集群开通中 ResourceReversal 集群冲正 ClusterLevelTrading 集群变配交易中)
多个状态用逗号连接。
      */
  Status?: string

  /**
   * 是否安装Agent，true: 是，false: 否
   */
  HasAgent?: boolean

  /**
      * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
多个集群用逗号连接。
      */
  ClusterType?: string

  /**
   * 分页页码，从1开始，默认：1
   */
  PageIndex?: number

  /**
   * 分页每页记录数，默认10
   */
  PageSize?: number
}

/**
 * DescribeIntegrationTask返回参数结构体
 */
export interface DescribeIntegrationTaskResponse {
  /**
      * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskInfo: IntegrationTaskInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFolder返回参数结构体
 */
export interface ModifyFolderResponse {
  /**
   * true代表成功，false代表失败
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHiveTableByDDL请求参数结构体
 */
export interface CreateHiveTableByDDLRequest {
  /**
   * 数据源ID
   */
  DatasourceId: string

  /**
   * 数据库
   */
  Database: string

  /**
   * 建hive表ddl
   */
  DDLSql: string

  /**
   * 表权限 ，默认为0:项目共享;1:仅个人与管理员
   */
  Privilege: number

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 目标表类型(HIVE或GBASE)
   */
  Type: string

  /**
   * 责任人
   */
  Incharge?: string
}

/**
 * RunTask返回参数结构体
 */
export interface RunTaskResponse {
  /**
   * 运行成功或者失败
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopIntegrationTask返回参数结构体
 */
export interface StopIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDependTasksNew返回参数结构体
 */
export interface DescribeDependTasksNewResponse {
  /**
   * 画布任务和链接信息
   */
  Data: CanvasInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelatedInstances请求参数结构体
 */
export interface DescribeRelatedInstancesRequest {
  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 数据时间，格式yyyy-MM-dd HH:mm:ss
   */
  CurRunDate: string

  /**
   * 任务id
   */
  TaskId: number

  /**
   * 距离当前任务的层级距离，-1表示取父节点，1表示子节点
   */
  Depth: number

  /**
   * 页号，默认为1
   */
  PageNumber?: number

  /**
   * 页大小，默认为10，最大不超过200
   */
  PageSize?: number
}

/**
 * DescribeIntegrationStatisticsInstanceTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string

  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * BatchModifyOwnersNew请求参数结构体
 */
export interface BatchModifyOwnersNewRequest {
  /**
   * 需要更新责任人的TaskId数组
   */
  TaskIdList: Array<string>

  /**
   * 需要更新的责任人
   */
  Owners: string

  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * DryRunDIOfflineTask返回参数结构体
 */
export interface DryRunDIOfflineTaskResponse {
  /**
   * 数据时间
   */
  CurrentRunDate: string

  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 任务状态
   */
  Status: string

  /**
   * 任务Id
   */
  TaskId: string

  /**
   * 任务实例唯一key
   */
  TaskInstanceKey: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenHiveTableDDLSql返回参数结构体
 */
export interface GenHiveTableDDLSqlResponse {
  /**
   * 生成的ddl语句
   */
  DDLSql: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 离线任务新增参数
 */
export interface OfflineTaskAddParam {
  /**
   * 名称
   */
  WorkflowName: string

  /**
   * 依赖
   */
  DependencyWorkflow: string

  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 周期
   */
  CycleType: number

  /**
   * 周期间隔
   */
  CycleStep: number

  /**
   * 延迟时间
   */
  DelayTime: number

  /**
      * crontab
注意：此字段可能返回 null，表示取不到有效值。
      */
  CrontabExpression: string

  /**
   * 重试等待
   */
  RetryWait: number

  /**
   * 是否可以重试
   */
  Retriable: number

  /**
   * 重试限制
   */
  TryLimit: number

  /**
   * 优先级
   */
  RunPriority: number

  /**
   * 产品名称
   */
  ProductName: string

  /**
      * 1 有序串行 一次一个，排队 orderly 
2 无序串行 一次一个，不排队 serial  
3 并行 一次多个 parallel
      */
  SelfDepend: number

  /**
      * 周任务：1是周天，2是周1，7是周6 。
月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L"
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskAction?: string

  /**
      * 调度执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutionEndTime?: string

  /**
      * 调度执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecutionStartTime?: string
}

/**
 * 实时任务日志内容
 */
export interface LogContent {
  /**
      * 日志时间戳，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: number

  /**
      * 日志包id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PkgId: string

  /**
   * 日志内容
   */
  Log: string
}

/**
 * BatchCreateIntegrationTaskAlarms返回参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsResponse {
  /**
      * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount: number

  /**
      * 任务总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatistics请求参数结构体
 */
export interface DescribeIntegrationStatisticsRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number

  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 查询日期
   */
  QueryDate?: string
}

/**
 * DescribeInLongAgentTaskList请求参数结构体
 */
export interface DescribeInLongAgentTaskListRequest {
  /**
   * 采集器ID
   */
  AgentId: string

  /**
   * WeData项目ID
   */
  ProjectId: string
}

/**
 * ModifyTaskName请求参数结构体
 */
export interface ModifyTaskNameRequest {
  /**
   * 名称
   */
  TaskName: string

  /**
   * id
   */
  TaskId: string

  /**
   * 项目/工作空间id
   */
  ProjectId: string

  /**
   * 备注
   */
  Notes?: string
}

/**
 * ModifyWorkflowInfo返回参数结构体
 */
export interface ModifyWorkflowInfoResponse {
  /**
   * true代表成功，false代表失败
   */
  Data: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 包含层级信息的函数
 */
export interface OrganizationalFunction {
  /**
   * 名称
   */
  Name: string

  /**
   * 展示名称
   */
  DisplayName: string

  /**
   * 层级路径
   */
  LayerPath: string

  /**
   * 上级层级路径
   */
  ParentLayerPath: string

  /**
      * 函数类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 函数分类：窗口函数、聚合函数、日期函数......
注意：此字段可能返回 null，表示取不到有效值。
      */
  Kind: string

  /**
      * 函数种类：系统函数、自定义函数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Category: string

  /**
      * 函数状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 函数说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 函数用法
注意：此字段可能返回 null，表示取不到有效值。
      */
  Usage: string

  /**
      * 函数参数说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  ParamDesc: string

  /**
      * 函数返回值说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnDesc: string

  /**
      * 函数示例
注意：此字段可能返回 null，表示取不到有效值。
      */
  Example: string

  /**
      * 集群实例引擎 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterIdentifier: string

  /**
      * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FuncId: string

  /**
      * 函数类名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassName: string

  /**
      * 函数资源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceList: Array<FunctionVersion>

  /**
      * 操作人 ID 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperatorUserIds: Array<number>

  /**
      * 公有云 Owner ID 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OwnerUserIds: Array<number>

  /**
      * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DbName: string

  /**
      * 提交失败错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubmitErrorMsg: string
}

/**
 * 通用排序字段
 */
export interface OrderField {
  /**
   * 排序字段名称
   */
  Name: string

  /**
   * 排序方向：ASC|DESC
   */
  Direction: string
}

/**
 * BatchSuspendIntegrationTasks返回参数结构体
 */
export interface BatchSuspendIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchRerunIntegrationTaskInstances返回参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationTasks请求参数结构体
 */
export interface DescribeIntegrationTasksRequest {
  /**
   * 项目id
   */
  ProjectId: string

  /**
   * 分页第n页
   */
  PageNumber: number

  /**
   * 分页大小
   */
  PageSize: number

  /**
   * 查询filter
   */
  Filters?: Array<Filter>

  /**
   * 排序字段信息
   */
  OrderFields?: Array<OrderField>

  /**
   * 开始时间
   */
  StartTime?: string

  /**
   * 结束时间
   */
  EndTime?: string

  /**
   * 201. stream, 202. offline 默认实时
   */
  TaskType?: number
}

/**
 * DescribeTasksByPage请求参数结构体
 */
export interface DescribeTasksByPageRequest {
  /**
   * 项目Id
   */
  ProjectId: string

  /**
   * 工作流ID
   */
  WorkflowId: string

  /**
   * 页码，默认1
   */
  PageNumber?: number

  /**
   * 页大小，默认10
   */
  PageSize?: number
}

/**
 * BatchMakeUpIntegrationTasks返回参数结构体
 */
export interface BatchMakeUpIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount: number

  /**
   * 操作失败的任务数
   */
  FailedCount: number

  /**
   * 任务总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskInstance请求参数结构体
 */
export interface DescribeTaskInstanceRequest {
  /**
   * WeData项目ID
   */
  ProjectId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务实例数据时间
   */
  CurRunDate?: string

  /**
   * 任务实例运行时间
   */
  IssueDate?: string
}
