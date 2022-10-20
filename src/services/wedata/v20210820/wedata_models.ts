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
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
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
 * FreezeTasksByMultiWorkflow请求参数结构体
 */
export interface FreezeTasksByMultiWorkflowRequest {
  /**
   * 工作流Id集合
   */
  WorkFlowIds: Array<string>
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
 * DeleteDataSources请求参数结构体
 */
export interface DeleteDataSourcesRequest {
  /**
   * id列表
   */
  Ids: Array<number>
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
}
