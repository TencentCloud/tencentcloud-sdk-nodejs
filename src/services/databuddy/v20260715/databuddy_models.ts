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
 * 任务依赖简要信息
 */
export interface DependOnBrief {
  /**
   * 任务ID，可通过 ListWorkflowTasks 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
}

/**
 * ListConsoleGroupUsers请求参数结构体
 */
export interface ListConsoleGroupUsersRequest {
  /**
   * <p>用户组 ID</p>
   */
  GroupId: string
  /**
   * <p>用户名称或 UIN 模糊匹配</p>
   */
  UserKeyword?: string
  /**
   * <p>通过 UIN 批量查询用户信息</p>
   */
  UserUins?: Array<string>
  /**
   * <p>多字段排序，如 [{Name: &#39;CreateTime&#39;, Direction: &#39;DESC&#39;}, {Name: &#39;UserName&#39;, Direction: &#39;ASC&#39;}]，默认按创建时间降序</p>
   */
  OrderBys?: Array<OrderBy>
  /**
   * <p>页码，从1开始，默认1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，默认10，最小10，最大200</p>
   */
  PageSize?: number
}

/**
 * ListConsoleGroups请求参数结构体
 */
export interface ListConsoleGroupsRequest {
  /**
   * <p>页码，从1开始，默认1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，默认10，最小10，最大200</p>
   */
  PageSize?: number
  /**
   * <p>通过用户组 ID 批量查询</p>
   */
  GroupIds?: Array<string>
  /**
   * <p>用户组名称模糊匹配</p>
   */
  GroupKeyword?: string
  /**
   * <p>多字段排序，如 [{Name: &#39;CreateTime&#39;, Direction: &#39;Desc&#39;}, {Name: &#39;UserName&#39;, Direction: &#39;Asc&#39;}]，默认按创建时间降序</p>
   */
  OrderBys?: Array<OrderBy>
}

/**
 * 查询控制台用户组列表响应
 */
export interface ListConsoleGroupsRsp {
  /**
   * 用户组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ConsoleGroupInfo>
  /**
   * 当前页码
   */
  PageNumber?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
}

/**
 * UpdateConsoleUsers返回参数结构体
 */
export interface UpdateConsoleUsersResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: UpdateConsoleUsersRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流完整配置
 */
export interface Workflow {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>工作流基本信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseInfo?: WorkflowBaseInfo
  /**
   * <p>工作流调度配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trigger?: Array<WorkflowTriggerConfiguration>
  /**
   * <p>工作流参数列表 参数名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=&gt; 最长128个字符</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamList?: Array<ParamInfo>
  /**
   * <p>标签 标签名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=&gt;'，最长128个字符</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelList?: Array<LabelBrief>
  /**
   * <p>工作流告警配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alarm?: AlarmBrief
  /**
   * <p>监控指标配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorMetric?: MonitorMetricBrief
  /**
   * <p>工作流高级设置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvanceConfig?: WorkflowAdvanceConfig
  /**
   * <p>工作流任务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskList?: Array<WorkflowTask>
  /**
   * <p>BundleId，可通过 Bundle 相关接口获取</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * <p>Bundle信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
  /**
   * <p>GIT配置ID，对应GetWorkspaceConfig接口中的ConfigKey</p>    -
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitConfigId?: string
  /**
   * <p>Git分支信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitBranch?: string
}

/**
 * 任务重试策略
 */
export interface TaskRetryStrategy {
  /**
   * 最多重试次数，默认3
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetryTimes?: number
  /**
   * 重试之间等待时间，默认5
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryBetweenWaitTime?: number
  /**
   * 重试之间等待时间单位
毫秒：MILLISECOND秒：SECOND分钟（默认）：MINUTE小时：HOUR
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryBetweenWaitTimeUnit?: string
  /**
   * 任务运行失败时重试开关，默认为true
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRunFailureRetrySwitch?: boolean
  /**
   * 任务运行超时时重试开关，默认为false
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRunTimeoutRetrySwitch?: boolean
}

/**
 * 文件存储
 */
export interface FileStorage {
  /**
   * 存储类型
   */
  StorageType?: number
  /**
   * 存储路径
   */
  StoragePath?: string
  /**
   * 文件内容
   */
  Content?: string
}

/**
 * 计划调度时间配置
 */
export interface ScheduledTimeConfig {
  /**
   * <p>调度时区，IANA 时区 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTimeZone?: string
  /**
   * <p>调度生效开始时间</p><p>参数格式：毫秒时间戳（UTC）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>调度生效结束时间</p><p>参数格式：毫秒时间戳（UTC）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>周期类型</p><p>枚举值：</p><ul><li>DAY_CYCLE： 天</li><li>HOUR_CYCLE： 小时</li><li>MINUTE_CYCLE： 分钟</li><li>WEEK_CYCLE： 周</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * <p>周期步长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleNum?: number
}

/**
 * DeleteWorkflow返回参数结构体
 */
export interface DeleteWorkflowResponse {
  /**
   * <p>删除工作流响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DeleteWorkflowRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询控制台角色列表响应
 */
export interface ListConsoleRolesRsp {
  /**
   * 角色列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ConsoleRoleInfo>
  /**
   * 当前页码
   */
  PageNumber?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
}

/**
 * ListConsoleUsers返回参数结构体
 */
export interface ListConsoleUsersResponse {
  /**
   * <p>控制台用户列表</p>
   */
  Data?: ListConsoleUsersRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveConsoleUsers返回参数结构体
 */
export interface RemoveConsoleUsersResponse {
  /**
   * <p>批量移除控制台用户结果</p>
   */
  Data?: RemoveConsoleUsersRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内嵌工作流任务简要信息（目前只有 FOR_EACH 工作流任务该字段才有值）
 */
export interface InnerWorkflowTaskBrief {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName?: string
}

/**
 * 监控指标配置
 */
export interface MonitorMetricBrief {
  /**
   * 监控指标 ID，创建时无需传入，由服务端生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorMetricId?: string
  /**
   * 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmMonitorType?: string
  /**
   * 监控指标列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metrics?: Array<MonitorMetricItem>
}

/**
 * 参数键值对
 */
export interface ParamInfo {
  /**
   * 参数ID，创建时无需传入，由服务端生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamId?: string
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey?: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue?: string
}

/**
 * 内嵌工作流单次迭代运行信息
 */
export interface InnerWorkflowTaskRunIteration {
  /**
   * <p>内嵌工作流运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * <p>迭代序号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IterationIndex?: string
  /**
   * <p>运行开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>运行结束时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunEndTime?: string
  /**
   * <p>运行状态（参考工作流运行状态枚举）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * <p>运行时长，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunCostTime?: string
  /**
   * <p>运行参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowParams?: string
  /**
   * <p>错误码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
  /**
   * <p>内嵌工作流内部的任务运行</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTaskRun?: InnerWorkflowTaskRunIterationBrief
}

/**
 * DeleteWorkflow请求参数结构体
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>待删除的工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
}

/**
 * ListWorkflowTaskRuns请求参数结构体
 */
export interface ListWorkflowTaskRunsRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>任务ID，可通过 ListWorkflowTasks 获取。非必填，精确匹配。与 WorkflowRunId 至少传一个：仅传 TaskId 时查询该任务的全部运行历史。</p>
   */
  TaskId?: string
  /**
   * <p>工作流运行ID，可通过 ListWorkflowRuns 获取。非必填，精确匹配。与 TaskId 至少传一个：仅传 WorkflowRunId 时查询该次工作流运行下的全部任务运行。</p>
   */
  WorkflowRunId?: string
  /**
   * <p>分页页码，从 1 开始。非必填，默认 1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小。非必填，默认 10，取值范围 [10, 200]</p>
   */
  PageSize?: number
}

/**
 * 告警配置
 */
export interface AlarmBrief {
  /**
   * 告警 ID，创建时无需传入，由服务端生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmId?: string
  /**
   * 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmMonitorType?: string
  /**
   * 告警组，最多 50 个
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmGroups?: Array<AlarmGroup>
  /**
   * 被跳过时免打扰，默认值 false
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoNotDisturbWhenSkipped?: boolean
  /**
   * 被手动终止时免打扰，默认值 false
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoNotDisturbWhenManuallyTerminated?: boolean
  /**
   * 最后一次重试前免打扰，默认值 false
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoNotDisturbUntilTheLastRetry?: boolean
}

/**
 * 工作流列表项中的工作流任务节点简要信息
 */
export interface WorkflowTaskNodeBrief {
  /**
   * <p>工作流ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * <p>任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>任务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * <p>任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName?: string
  /**
   * <p>任务依赖列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnList?: Array<DependOnBrief>
  /**
   * <p>任务资源组ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>任务资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>任务X坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate?: number
  /**
   * <p>任务Y坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate?: number
  /**
   * <p>任务重试策略</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRetryStrategy?: TaskRetryStrategy
  /**
   * <p>任务依赖运行条件</p><p>ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功<br>ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功<br>NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中<br>ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败<br>ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败<br>ALL_FAILED: 全部失败：所有上游依赖任务都失败<br>ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行<br>ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行<br>ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游<br>ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行<br>NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行<br>ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行<br>ADVANCED:运行条件为高级模式时配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnRunCondition?: string
  /**
   * <p>高级依赖配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedDependencyConfig?: AdvancedDependencyConfig
  /**
   * <p>内嵌工作流任务节点</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTask?: WorkflowTaskNodeBrief
}

/**
 * 修改控制台用户响应
 */
export interface UpdateConsoleUsersRsp {
  /**
   * 操作是否成功
   */
  Status?: boolean
}

/**
 * CreateWorkflow请求参数结构体
 */
export interface CreateWorkflowRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流基本信息。必填，其中 WorkflowName 必填且工作空间内唯一</p>
   */
  BaseInfo: WorkflowBaseInfo
  /**
   * <p>工作流调度配置</p>
   */
  Trigger?: Array<WorkflowTriggerConfiguration>
  /**
   * <p>工作流参数列表</p>
   */
  ParamList?: Array<ParamInfo>
  /**
   * <p>标签列表</p>
   */
  LabelList?: Array<LabelBrief>
  /**
   * <p>工作流告警配置</p>
   */
  Alarm?: AlarmBrief
  /**
   * <p>监控指标配置。若告警条件中选择了监控告警，则本字段必填</p>
   */
  MonitorMetric?: MonitorMetricBrief
  /**
   * <p>工作流高级设置</p>
   */
  AdvanceConfig?: WorkflowAdvanceConfig
  /**
   * <p>工作流任务列表</p>
   */
  TaskList?: Array<WorkflowTask>
  /**
   * <p>BundleId，可通过 Bundle 相关接口获取</p>
   */
  BundleId?: string
  /**
   * <p>Bundle信息</p>
   */
  BundleInfo?: string
  /**
   * <p>Git配置ID，可通过 Git 配置相关接口获取</p>
   */
  GitConfigId?: string
  /**
   * <p>Git分支信息</p>
   */
  GitBranch?: string
}

/**
 * 工作流列表项的运行情况
 */
export interface WorkflowRunBrief {
  /**
   * 工作流运行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * 运行开始时间，单位：毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>运行状态。CREATE(&quot;初始化&quot;),     QUEUED(&quot;等待中&quot;),     PENDING(&quot;准备中&quot;),     RUNNING(&quot;运行中&quot;),     SKIPPED(&quot;跳过运行&quot;),     SUCCESS(&quot;成功&quot;),     FAILED(&quot;失败&quot;),     TERMINATING(&quot;终止中&quot;),     TERMINATED(&quot;终止&quot;),     CANCELLED(&quot;被手动终止&quot;)等</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * 运行错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
}

/**
 * 工作流调度高级配置。
 */
export interface WorkflowTriggerAdvancedConfiguration {
  /**
   * <p>&lt;p&gt;该工作流下的所有任务重试模式，仅当TriggerMode为CONTINUE_RUN时有效。</p><p>枚举值：</p><ul><li>onFailure： 失败时自动重试</li><li>never： 从不重试</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRetryMode?: string
}

/**
 * 批量异步操作的逐项结果
 */
export interface AsyncActionRsp {
  /**
   * 多个操作项的结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionResults?: Array<RunActionBrief>
}

/**
 * CreateFile返回参数结构体
 */
export interface CreateFileResponse {
  /**
   * <p>返回结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: FileInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务调度参数（运行/重跑工作流时的自定义参数）
 */
export interface TaskSchedulingParameterBrief {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey?: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue?: string
}

/**
 * UpdateWorkflow请求参数结构体
 */
export interface UpdateWorkflowRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>待更新的工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
  /**
   * <p>需要清空的字段名列表，用于将指定字段重置为空</p>
   */
  FieldToRemoveList?: Array<string>
  /**
   * <p>更新后的工作流配置，仅传入需要变更的部分即可</p>
   */
  NewSetting?: Workflow
}

/**
 * 任务运行条件规则
 */
export interface TaskRunConditionRule {
  /**
   * <p>上游任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamTaskId?: string
  /**
   * <p>上游任务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamTaskName?: string
  /**
   * <p>任务可运行条件<br>支持的状态值： - SUCCESS: 成功 - FAILED: 失败 - UPSTREAM_FAILED: 上游失败 - EXCLUDED: 排除运行</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowedStates?: Array<string>
}

/**
 * 资源组信息
 */
export interface ResourceGroupInfo {
  /**
   * <p>资源组ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>资源组名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * <p>资源组状态</p><p>参数格式：0 // 未指定 1 // 待创建 2 // 创建中 3 // 运行中 4 // 已停止 5 // 停止中 6 // 启动中 7 // 更新中 8 // 删除中 9 // 已删除 10 // 用户主动启动 / 自动启动（有任务提交且自动启停开启） 11 // 可用: 仅存在于数据计算型 12 // 不可用: 仅存在于数据计算型 13 // 失败</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupStatus?: string
}

/**
 * UnbindWorkflowBundle返回参数结构体
 */
export interface UnbindWorkflowBundleResponse {
  /**
   * <p>解绑工作流Bundle信息响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UnbindWorkflowBundleRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改控制台用户组响应
 */
export interface UpdateConsoleGroupRsp {
  /**
   * 操作是否成功
   */
  Status?: boolean
}

/**
 * UnbindWorkflowBundleRsp
 */
export interface UnbindWorkflowBundleRsp {
  /**
   * 操作状态，true 表示成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * KillWorkflowRun返回参数结构体
 */
export interface KillWorkflowRunResponse {
  /**
   * <p>终止工作流的运行响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: AsyncActionRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加控制台用户响应
 */
export interface AddConsoleUsersRsp {
  /**
   * 操作是否成功
   */
  Status?: boolean
}

/**
 * ListWorkflows请求参数结构体
 */
export interface ListWorkflowsRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>分页页码，从 1 开始。非必填，默认 1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小。非必填，默认 10，取值范围 [10, 200]</p>
   */
  PageSize?: number
  /**
   * <p>工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值</p>
   */
  WorkflowNameKeyword?: string
  /**
   * <p>工作流名称，精确匹配。非必填，多选（多个值之间为 OR 关系）</p>
   */
  WorkflowNames?: Array<string>
  /**
   * <p>工作流ID，精确匹配。非必填，多选（多个值之间为 OR 关系）</p>
   */
  WorkflowIds?: Array<string>
  /**
   * <p>工作流运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系）</p>
   */
  RunUserUins?: Array<string>
  /**
   * <p>标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系）</p>
   */
  LabelKeyIds?: Array<string>
  /**
   * <p>标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系）</p>
   */
  LabelValueIds?: Array<string>
  /**
   * <p>快速筛选类型。非必填，单值</p><p>对齐老云 API（wedata/2025-10-10）文档示例值：</p><ul><li>MY_FAVORITE：我收藏的</li><li>MY_OWNER：我负责的</li><li>MY_AUTHORITY：我有权限</li><li>WorkflowId：支持多个工作流ID筛选</li></ul><p>后端实现现状：当前仅 MY_FAVORITE 生效（设置 favoriteUserUin 过滤当前用户收藏），MY_OWNER / MY_AUTHORITY 暂未在 Service 层实现，传入会被忽略（按全量返回）。</p>
   */
  QuickSelectionType?: string
  /**
   * <p>排序条件，多个之间按数组顺序表示优先级。非必填。<br>可排序字段白名单：CreateTime</p>
   */
  OrderBys?: Array<OrderBy>
}

/**
 * 删除控制台用户组响应
 */
export interface DeleteConsoleGroupsRsp {
  /**
   * 操作是否成功
   */
  Status?: boolean
}

/**
 * ListWorkflowRuns请求参数结构体
 */
export interface ListWorkflowRunsRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>分页页码，从 1 开始。非必填，默认 1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小。非必填，默认 10，取值范围 [10, 200]</p>
   */
  PageSize?: number
  /**
   * <p>工作流ID，精确匹配。非必填，单值</p>
   */
  WorkflowId?: string
  /**
   * <p>工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值</p>
   */
  WorkflowNameKeyword?: string
  /**
   * <p>运行创建时间下界，范围匹配（CreateTime &gt;= 本值），单位：毫秒时间戳。<br>非必填，单值，对应出参 WorkflowRun.CreateTime</p>
   */
  CreateStartTime?: string
  /**
   * <p>运行创建时间上界，范围匹配（CreateTime &lt;= 本值），单位：毫秒时间戳。<br>非必填，单值，对应出参 WorkflowRun.CreateTime</p>
   */
  CreateEndTime?: string
  /**
   * <p>运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。运行状态。CREATE(&quot;初始化&quot;), QUEUED(&quot;等待中&quot;), PENDING(&quot;准备中&quot;), RUNNING(&quot;运行中&quot;), SKIPPED(&quot;跳过运行&quot;), SUCCESS(&quot;成功&quot;), FAILED(&quot;失败&quot;), TERMINATING(&quot;终止中&quot;), TERMINATED(&quot;终止&quot;), CANCELLED(&quot;被手动终止&quot;)等</p>
   */
  RunStates?: Array<string>
  /**
   * <p>错误码，精确匹配。非必填，多选（多个值之间为 OR 关系）</p>
   */
  ErrorCodeStrings?: Array<string>
  /**
   * <p>运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系）</p>
   */
  RunUserUins?: Array<string>
  /**
   * <p>标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系）</p>
   */
  LabelKeyIds?: Array<string>
  /**
   * <p>标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系）</p>
   */
  LabelValueIds?: Array<string>
  /**
   * <p>排序条件，多个之间按数组顺序表示优先级。非必填，默认按 CreateTime Desc。<br>可排序字段白名单：CreateTime、EndTime、RunCostTime</p>
   */
  OrderBys?: Array<OrderBy>
}

/**
 * 工作流调度配置。
 */
export interface WorkflowTriggerConfiguration {
  /**
   * <p>调度配置ID，创建时无需传入，由服务端生成</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerId?: string
  /**
   * <p>调度状态 启动：START，暂停：PAUSE</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerStatus?: string
  /**
   * <p>触发方式，</p><ul><li>定时触发：TIME_TRIGGER</li><li>持续运行：CONTINUE_RUN</li></ul><p>注意：</p><ul><li>TIME_TRIGGER 模式下，SchedulerStatus、SchedulerTimeZone、StartTime、EndTime、ConfigMode、CycleType、CrontabExpression 必填；</li><li>CONTINUE_RUN 模式下，AdvancedConfig必填；</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerMode?: string
  /**
   * <p>调度时区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerTimeZone?: string
  /**
   * <p>调度生效时间，单位：毫秒时间戳。必须小于 EndTime</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * <p>调度结束时间，单位：毫秒时间戳。必须大于 StartTime</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>配置方式，常规：COMMON，CRON表达式：CRON_EXPRESSION</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigMode?: string
  /**
   * <p>周期类型：支持的类型为 ONEOFF_CYCLE: 一次性 YEAR_CYCLE: 年 MONTH_CYCLE: 月 WEEK_CYCLE: 周 DAY_CYCLE: 天<br>HOUR_CYCLE: 小时 MINUTE_CYCLE: 分钟 CRONTAB_CYCLE: crontab表达式类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * <p>cron表达式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
  /**
   * <p>Json格式，对账使用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * <p>高级配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedConfig?: WorkflowTriggerAdvancedConfiguration
}

/**
 * GetWorkflowTaskRun返回参数结构体
 */
export interface GetWorkflowTaskRunResponse {
  /**
   * <p>查询任务运行详情响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: GetWorkflowTaskRunRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetFile请求参数结构体
 */
export interface GetFileRequest {
  /**
   * <p>工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId</p>
   */
  WorkspaceId: string
  /**
   * <p>文件 ID。来源：CreateFile / ListFiles 接口返回的 FileId。与 FilePath 二选一</p>
   */
  FileId?: string
  /**
   * <p>文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType</p>
   */
  FileType?: string
  /**
   * <p>是否返回文件内容。true 时 Storage.Content 返回 base64 内容，默认 false</p>
   */
  IncludeContent?: boolean
  /**
   * <p>文件版本 ID。来源：ListFileVersions 接口返回的 VersionId。不传则读取最新版本</p>
   */
  VersionId?: string
  /**
   * <p>文件完整路径，以 / 开头，如 /etl/daily/demo.ipynb。与 FileId 二选一</p>
   */
  FilePath?: string
}

/**
 * 工作流基本信息（入参用）
 */
export interface WorkflowBaseInfo {
  /**
   * 工作流名称，长度不超过 1024
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 工作流ID，创建时无需传入，由服务端生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流运行人UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 工作流负责人用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserName?: string
  /**
   * 创建人UIN。系统生成字段，入参传值不生效（服务端忽略且不报错）
【已废弃】服务端忽略传入值，不报错。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
}

/**
 * ### `TaskTypePropertyList` 中 `TaskTypeProperty` 针对不同任务类型需要填写不同的 key 和 value；

### 1. NOTEBOOK 任务类型

#### 属性配置

| 属性键       | 属性名称          | 描述                               | 是否必需                |
| ------------ | ----------------- | ---------------------------------- | ----------------------- |
| Source       | 来源              | 只支持填2或5,来源 2:GIT, 5:工作空间    | 是                      |
| NotebookPath | Notebook 相对路径 | Source为5时，需从（ListFiles）获取 | Source 为 2、5 时，必填 |

### 2. DATA_INTEGRATION 任务类型

#### 属性配置

| 属性键                | 属性名称             | 描述                                    | 是否必需 |
| --------------------- | -------------------- | --------------------------------------- | -------- |
| Source                | 来源                 | 必填:4,表示来源为COS                    | 是       |
| TemplatePath          | 数据接入任务配置路径 | 需从（ListBatchIngestionTasks）接口获取 | 是       |
| DataIntegrationTaskId | 数据接入任务ID       | 需从（ListBatchIngestionTasks）接口获取 | 是       |

### 3. RUN_WORKFLOW 任务类型

#### 属性配置

| 属性键     | 属性名称   | 描述                          | 是否必需 |
| ---------- | ---------- | ----------------------------- | -------- |
| WorkflowId | 选择工作流 | 需从（ListWorkflows）接口获取 | 是       |

### 4. SQL 任务类型

#### 属性配置

| 属性键          | 属性名称    | 描述                                          | 是否必需             |
| --------------- | ----------- | --------------------------------------------- | -------------------- |
| Source          | 来源        | 只支持填2或5,来源 2:GIT, 5:工作空间               | 是                   |
| SqlPath         | SQL脚本路径 | SQL脚本路径                                   | Source 为 2 时，必填 |
| CodeFileName    | 文件名称    | Source为5时，需从（ListReleasedQueries）接口获取 | 否                |
| CodeFileId      | 文件ID      | Source为5时，需从（ListReleasedQueries）接口获取 | Source 为 5 时，必填 |
| CodeFileVersion | 文件版本    | Source为5时，需从（ListReleasedQueries）接口获取 | 否                |

### 5. PYTHON 任务类型

#### 属性配置

| 属性键     | 属性名称       | 描述                                   | 是否必需 |
| ---------- | -------------- | -------------------------------------- | -------- |
| Source     | 来源           | 只支持填2或5,来源 2:GIT, 5:工作空间        | 是       |
| SourcePath | Python脚本路径 | Source为5时，需从（ListFiles）接口获取 | 是       |

### 6. DATA_QUALITY（质量监控）任务类型

#### 属性配置

| 属性键         | 属性名称         | 描述                                          | 是否必需 |
| -------------- | ---------------- | --------------------------------------------- | -------- |
| Source         | 来源             | 必填:4,表示来源为COS                          | 是       |
| TemplatePath   | 质量监控配置路径 | 需从（ListDataQualityTaskSummaries）接口获取  | 是       |
| SourceUniqueId | 质量监控ID       | 需从（ListDataQualityTaskSummaries）接口获取  | 是       |
| ExecutionType  | 执行类型         | 必填:SQL                                      | 是       |
| AfterAspect    | 质量任务后置切面 | 需从（ListDataQualityTaskSummaries）接口获取  | 否       |
| BeforeAspect   | 质量任务前置切面 | 需从（ListDataQualityTaskSummaries）接口获取  | 否       |

### 7. IF_ELSE 任务类型

#### 属性配置

| 属性键     | 属性名称 | 描述            | 是否必需 |
| ---------- | -------- | --------------- | -------- |
| Conditions | 条件列表 | IF-ELSE条件配置 | 是       |

### 8. FOR_EACH 任务类型

#### 属性配置

| 属性键         | 属性名称     | 描述                               | 是否必需 |
| -------------- | ------------ | ---------------------------------- | -------- |
| MaxConcurrency | 最大并发数   | 最大并发数，默认为1                | 是       |
| MaxIterations  | 最大迭代次数 | 最大迭代次数，默认1000             | 是       |
| LoopDataArray  | 循环参数     | JSON格式的数组，或 {{}} 包裹的变量 | 是       |

### 9. RAY_JOB（Ray作业）任务类型

#### 属性配置

| 属性键         | 属性名称             | 描述                               | 是否必需 |
| -------------- | -------------------- | ---------------------------------- | -------- |
| RunMode        | 运行方式             | 运行方式，取值：SERVERLESS（按需拉起集群）/ DEDICATED（提交到指定集群）。默认 DEDICATED | 是 |
| Entrypoint     | 入口指令             | 入口指令                           | 是       |
| JobConfig      | 任务配置             | 如存储配置 + 计算环境。传值请参考前端页面保存Ray作业任务时调用UpdateWorkflow。Image请调用DLC接口ListImages接口Url字段获取 | RunMode 为 SERVERLESS 时，必填 |
| ClusterId      | Ray 集群             | 需从所选计算资源下已配置的 Ray 集群（引擎）列表中选择，可通过计算资源相关接口获取 | RunMode 为 DEDICATED 时，必填 |
| Source         | 任务来源             | 任务来源，取值：1（本地文件）/ 5（工作空间） | 是 |
| JobPackage     | 任务来源文件地址     | 任务来源路径：Source 为 1 时存本地上传文件的 COS 地址（支持 .zip / .py 文件）；Source 为 5 时存所选工作空间文件/文件夹路径 | 是 |
| JobPackageName | 任务来源本地文件名   | 任务来源本地文件名                 | Source 为 1 时，必填 |
| CodeFileId     | 代码文件ID           | Source 为 5 时，需从工作空间文件选择组件获取所选文件/文件夹对应的ID | Source 为 5 时，必填 |
| WorkspaceEntryType | 工作空间入口类型 | Source 为 5 时，所选工作空间条目的类型：FILE（文件）/ FOLDER（文件夹），由前端选择器随选择目标自动写入 | Source 为 5 时，必填 |

### RuntimePropertyList
<p>任务运行参数列表，用于配置任务运行时的计算资源，与 TaskTypePropertyList（任务扩展属性）区分：TaskTypePropertyList 承载任务自身的业务配置（如脚本来源、路径等），RuntimePropertyList 承载任务运行时的资源配置（如资源模式、CU规格、Executor数量等）。</p>
<p>主要适用于需要配置计算资源的任务类型（如 NOTEBOOK、PYTHON）。</p>
<p>具体可填写的属性键以任务类型属性配置为准，可通过 ListWorkflowTaskTypeProperties 接口获取（propertyType 为 RUNTIME 的属性项）。常见运行参数键说明：</p>

| 属性键 | 属性名称 | 描述 | 必填性（联动条件满足时） | 默认值 |
| ---------- | -------------- | ---------------------------------- | -------- | -------- |
| ResourceMode | 资源模式 | 1：分布式；2：单节点 | 是 | 1 |
| ConfigType | 配置类型 | DEFAULT：默认配置；CUSTOM：自定义配置 | 是 | DEFAULT |
| ExecutorAllocation | Executor分配模式 | DYNAMIC：动态分配；FIXED：固定分配 | 是（分布式且自定义配置时） | DYNAMIC |
| ExecutorMinNum | Executor最小个数 | 正整数 | 是（动态分配时） | 1 |
| ExecutorMaxNum | Executor最大个数 | 正整数 | 是（动态分配时） | 1 |
| ExecutorFixedNum | Executor固定个数 | 正整数 | 否（固定分配时） | - |
| ExecutorCU | Executor资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时） | - |
| DriverCU | Driver资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时 或者单节点时） | - |
| ExecutorGPU | Executor GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - |
| DriverGPU | Driver GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - |
| Style | 配置样式 | UI / JSON | 是（自定义配置时） | UI |

<p>补充说明：</p>
<p>1. "必填性"指属性配置中的必填标记，仅当属性联动条件（如 ResourceMode=1 且 ConfigType=CUSTOM）满足时才触发必填校验；</p>
<p>2. ConfigType 为 DEFAULT（默认配置）时，需调用 ListComputeResourceOptions 接口获取所选计算资源的默认规格值，并将其填充到运行参数（ExecutorCU、DriverCU、ExecutorMinNum、ExecutorMaxNum 等）后传入；ConfigType 为 CUSTOM（自定义配置）时，运行参数由调用方自行指定；</p>
 */
export interface TaskType {
  /**
   * <p>任务类型：SQL：用于执行SQL查询和数据处理操作；DATA_INTEGRATION：用于离线数据接入操作；NOTEBOOK：用于运行Notebook脚本；RUN_WORKFLOW：用于执行嵌套工作流；PYTHON：用于运行Python脚本；RAY_JOB：用于运行Ray作业；DATA_QUALITY：用于数据质量监控；IF_ELSE：用于条件分支判断；FOR_EACH：用于循环遍历执行；</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName?: string
  /**
   * <p>Notebook 类型扩展信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notebook?: TaskTypeNotebookExt
  /**
   * <p>任务类型属性列表，不同任务类型所需的 PropertyKey 不同，具体取值请参考 ListWorkflowTaskTypeProperties 接口返回</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypePropertyList?: Array<TaskTypeProperty>
  /**
   * <p>运行时属性列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimePropertyList?: Array<TaskTypeProperty>
}

/**
 * Notebook 类型任务扩展
 */
export interface TaskTypeNotebookExt {
  /**
   * <p>脚本来源。取值：SCRIPT_SOURCE_LOCAL（本地）/ SCRIPT_SOURCE_GIT（Git 仓库）/<br>SCRIPT_SOURCE_CFS（CFS 文件系统）/ SCRIPT_SOURCE_COS（COS 对象存储）/<br>SCRIPT_SOURCE_WORKSPACE（工作空间）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * <p>前端显示使用，对执行平台无意义</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayPath?: string
  /**
   * <p>Notebook 相对路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotebookPath?: string
  /**
   * <p>Notebook 绝对路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotebookAbsolutePath?: string
}

/**
 * RerunWorkflowRun返回参数结构体
 */
export interface RerunWorkflowRunResponse {
  /**
   * <p>重跑工作流响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: AsyncActionRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWorkflowRsp
 */
export interface CreateWorkflowRsp {
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
}

/**
 * GetFile返回参数结构体
 */
export interface GetFileResponse {
  /**
   * <p>返回结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: FileInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OneFlow 透传的 Workspace 异步文件操作信息；作业状态由 Workspace 持久化和维护
 */
export interface AsyncOperation {
  /**
   * 是否异步执行；ZIP 解压创建时为 true
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAsync: boolean
  /**
   * Workspace 持久化的异步作业 ID，用于查询作业进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId: string
  /**
   * 调用方生成的提交幂等与链路追踪标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationId: string
  /**
   * 异步作业状态：0-未指定，1-已受理，2-解压中，3-回调处理中，4-成功，5-部分失败，6-失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
}

/**
 * 角色元数据
 */
export interface RoleMetaData {
  /**
   * 创建者
   */
  Creator?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新者
   */
  Updater?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * 查询工作流运行详情响应。
 */
export interface GetWorkflowRunRsp {
  /**
   * 工作流运行信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRun?: WorkflowRun
}

/**
 * ListConsoleGroupUsers返回参数结构体
 */
export interface ListConsoleGroupUsersResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: ListConsoleGroupUsersRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询工作流任务运行列表响应。
 */
export interface ListWorkflowTaskRunsRsp {
  /**
   * 当前页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 任务运行历史列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkflowTaskRun>
}

/**
 * 枚举项统计（如运行状态、错误码的数量分布）
 */
export interface ScheduleBizEnumBrief {
  /**
   * 枚举标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelKey?: string
  /**
   * 枚举标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelValue?: string
  /**
   * 枚举项统计数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * 工作流任务运行信息
 */
export interface WorkflowTaskRun {
  /**
   * <p>任务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * <p>任务运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowTaskRunId?: string
  /**
   * <p>运行状态。如CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * <p>工作空间ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>工作流ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * <p>工作流运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * <p>任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName?: string
  /**
   * <p>任务版本ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskVersionId?: string
  /**
   * <p>触发类型</p><p>枚举值：</p><ul><li>Manual： 手动触发</li><li>Scheduler： 调度触发</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>所属资源组ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>错误码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
  /**
   * <p>运行用户UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * <p>运行用户名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserName?: string
  /**
   * <p>创建人UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * <p>执行平台执行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * <p>创建时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>依赖任务完成时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependenceFinishedTime?: string
  /**
   * <p>运行开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>运行结束时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunEndTime?: string
  /**
   * <p>运行时长，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunCostTime?: string
  /**
   * <p>等待时长（依赖就绪到开始运行的等待耗时），单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitTime?: string
  /**
   * <p>下发执行平台时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IssueTime?: string
  /**
   * <p>时区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeZone?: string
  /**
   * <p>依赖上游任务ID列表。保留字段，暂时返回为[]</p><p>保留字段，暂时返回为[]</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnList?: Array<string>
  /**
   * <p>运行参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunParams?: string
  /**
   * <p>任务扩展信息，包含脚本路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeExtensions?: string
  /**
   * <p>任务X坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate?: number
  /**
   * <p>任务Y坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate?: number
  /**
   * <p>重试次数，为 0 则表示首次运行</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryTimes?: number
  /**
   * <p>工作流名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * <p>重跑次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerunTimes?: number
  /**
   * <p>是否最新一次运行</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLatestRun?: boolean
  /**
   * <p>资源组信息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupInfoList?: Array<ResourceGroupInfo>
  /**
   * <p>运行结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunResult?: string
  /**
   * <p>任务依赖运行条件</p><p>ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功<br>ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功<br>NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中<br>ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败<br>ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败<br>ALL_FAILED: 全部失败：所有上游依赖任务都失败<br>ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行<br>ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行<br>ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游<br>ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行<br>NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行<br>ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行<br>ADVANCED:运行条件为高级模式时配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnRunCondition?: string
  /**
   * <p>高级依赖配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedDependencyConfig?: AdvancedDependencyConfig
  /**
   * <p>内嵌工作流任务信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTask?: InnerWorkflowTaskBrief
  /**
   * <p>计划调度时间</p><p>参数格式：毫秒时间戳，UTC</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTime?: string
}

/**
 * 内嵌工作流迭代中的任务运行简要信息
 */
export interface InnerWorkflowTaskRunIterationBrief {
  /**
   * <p>任务运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowTaskRunId?: string
  /**
   * <p>迭代序号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IterationIndex?: string
  /**
   * <p>运行开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>运行结束时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunEndTime?: string
  /**
   * <p>运行状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * <p>运行时长，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunCostTime?: string
  /**
   * <p>运行参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskParams?: string
  /**
   * <p>错误码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
}

/**
 * CreateConsoleGroup请求参数结构体
 */
export interface CreateConsoleGroupRequest {
  /**
   * <p>用户组名称</p>
   */
  GroupName: string
  /**
   * <p>用户组别名</p>
   */
  GroupNickname?: string
  /**
   * <p>用户组描述</p>
   */
  Description?: string
}

/**
 * ListWorkflowsRsp
 */
export interface ListWorkflowsRsp {
  /**
   * 当前页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 工作流列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkflowBrief>
}

/**
 * RerunWorkflowRun请求参数结构体
 */
export interface RerunWorkflowRunRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
  /**
   * <p>工作流运行ID，可通过 ListWorkflowRuns 获取。必填</p>
   */
  WorkflowRunId: string
  /**
   * <p>运行类型。必填。取值：1 普通运行，2 高级运行</p>
   */
  RunType: number
  /**
   * <p>运行类型为高级运行时填写的自定义运行参数</p>
   */
  AdvancedParams?: Array<TaskSchedulingParameterBrief>
  /**
   * <p>本次需要重跑指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认重跑该工作流下所有任务</p>
   */
  TaskIds?: Array<string>
  /**
   * <p>计划调度时间列表配置</p>
   */
  ScheduledTimeConfig?: ScheduledTimeConfig
}

/**
 * ListWorkflows返回参数结构体
 */
export interface ListWorkflowsResponse {
  /**
   * <p>查询工作流列表响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ListWorkflowsRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签信息
 */
export interface LabelBrief {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelValue?: string
  /**
   * 标签名称ID，可通过标签相关接口获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelKeyId?: string
  /**
   * 标签值ID，可通过标签相关接口获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelValueId?: string
}

/**
 * AddConsoleUsers请求参数结构体
 */
export interface AddConsoleUsersRequest {
  /**
   * <p>用户 UIN 列表，单次最多100个</p>
   */
  UserUins: Array<string>
  /**
   * <p>角色 ID 列表</p><p>枚举值：</p><ul><li>2001： 控制台管理员</li><li>2002： 控制台成员</li></ul>
   */
  RoleIds: Array<string>
}

/**
 * 创建控制台用户组响应
 */
export interface CreateConsoleGroupRsp {
  /**
   * 创建成功的用户组 ID
   */
  GroupId?: string
}

/**
 * 工作流基本信息（出参用，含系统生成字段与负责人展示信息）
 */
export interface WorkflowBaseInfoDetail {
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 创建人UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 工作流运行人UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 工作流负责人用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserName?: string
  /**
   * 工作流负责人UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserUin?: string
  /**
   * 工作流负责人展示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerDisplayName?: string
  /**
   * 创建时间，单位：毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间，单位：毫秒时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
}

/**
 * 工作流列表项
 */
export interface WorkflowBrief {
  /**
   * <p>工作流名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * <p>工作流ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>创建人UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * <p>工作流负责人用户名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserName?: string
  /**
   * <p>工作流负责人UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserUin?: string
  /**
   * <p>工作流负责人展示名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerDisplayName?: string
  /**
   * <p>创建时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>标签列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelList?: Array<LabelBrief>
  /**
   * <p>工作流调度配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trigger?: Array<WorkflowTriggerConfiguration>
  /**
   * <p>工作流运行人UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * <p>工作流运行人用户名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserName?: string
  /**
   * <p>工作流任务节点列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskList?: Array<WorkflowTaskNodeBrief>
  /**
   * <p>工作流运行情况列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunList?: Array<WorkflowRunBrief>
  /**
   * <p>资源组信息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupInfoList?: Array<ResourceGroupInfo>
  /**
   * <p>授权权限类型<br>PERMISSION_TYPE_UNSPECIFIED：未指定权限<br>MANAGE : 管理权限：包含所有操作权限<br>RUN : 运行权限：可执行实体<br>VIEW : 查看权限：可查看实体内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permission?: string
  /**
   * <p>工作流绑定的 Bundle 唯一标识，未绑定时为空</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * <p>Bundle信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
  /**
   * <p>Git配置ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitConfigId?: string
  /**
   * <p>Git分支信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitBranch?: string
}

/**
 * KillWorkflowRun请求参数结构体
 */
export interface KillWorkflowRunRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
  /**
   * <p>待终止的工作流运行ID列表，可通过 ListWorkflowRuns 获取</p>
   */
  WorkflowRunIds?: Array<string>
  /**
   * <p>是否终止该工作流下所有未进入终态的运行。非必填，默认 false</p>
   */
  KillAllRuns?: boolean
  /**
   * <p>是否只终止处于等待中（Pending）状态的运行。非必填，默认 false</p>
   */
  OnlyKillPendingRuns?: boolean
}

/**
 * ListWorkflowTaskRuns返回参数结构体
 */
export interface ListWorkflowTaskRunsResponse {
  /**
   * <p>查询工作流任务历史运行列表响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ListWorkflowTaskRunsRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddConsoleUsers返回参数结构体
 */
export interface AddConsoleUsersResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: AddConsoleUsersRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListConsoleGroups返回参数结构体
 */
export interface ListConsoleGroupsResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: ListConsoleGroupsRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 控制台角色信息（对外标准版，与内部 Role 解耦）
 */
export interface ConsoleRoleInfo {
  /**
   * 角色基本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BasicInfo?: RoleBasicInfo
  /**
   * 角色元信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData?: RoleMetaData
  /**
   * 角色权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: Array<RolePermission>
}

/**
 * 控制台用户组成员信息（对外标准版，与内部 GroupUserInfo 解耦）
 */
export interface ConsoleGroupUserInfo {
  /**
   * 用户 UIN
   */
  UserUin?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 昵称
   */
  Nickname?: string
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
 * 文件删除结果
 */
export interface DeleteFileResult {
  /**
   * <p>被删除的文件 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileId?: string
  /**
   * <p>删除是否成功</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * 单个操作项的执行结果。 由 RunWorkflow / RerunWorkflowRun / KillWorkflowRun 共用： RunWorkflow—— WorkflowId / WorkflowName 有值，WorkflowRunId 为空 RerunWorkflowRun —— WorkflowId / WorkflowName / WorkflowRunId 均有值 KillWorkflowRun  —— WorkflowId / WorkflowName / WorkflowRunId 均有值
 */
export interface RunActionBrief {
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 操作动作ID，用于追踪具体的执行动作
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunActionId?: string
  /**
   * 失败错误信息，操作失败时返回具体的错误描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 操作状态，true 表示成功，false 表示失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpStatus?: boolean
  /**
   * 工作流运行ID。重跑 / 终止场景返回被操作的运行ID；运行工作流场景为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
}

/**
 * Notebook/Python单元格输出配置
 */
export interface FileOutputConf {
  /**
   * 单元格 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CellId?: string
  /**
   * Dashboard 图表配置，JSON 字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  DashboardConf?: string
  /**
   * 执行结果文件的预签名下载链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputPath?: string
}

/**
 * RunWorkflow请求参数结构体
 */
export interface RunWorkflowRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
  /**
   * <p>运行类型。必填。取值：1 普通运行，2 高级运行</p>
   */
  RunType: number
  /**
   * <p>运行类型为高级运行时填写的自定义运行参数</p>
   */
  AdvancedParams?: Array<TaskSchedulingParameterBrief>
  /**
   * <p>本次需要运行指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认运行该工作流下所有任务</p>
   */
  TaskIds?: Array<string>
  /**
   * <p>幂等令牌。非必填，相同令牌的重复请求只会触发一次运行</p>
   */
  IdempotencyToken?: string
  /**
   * <p>计划调度时间列表配置</p>
   */
  ScheduledTimeConfig?: ScheduledTimeConfig
}

/**
 * UpdateConsoleGroup请求参数结构体
 */
export interface UpdateConsoleGroupRequest {
  /**
   * <p>用户组 ID</p>
   */
  GroupId: string
  /**
   * <p>修改标识：USER_GROUP_OPER_TYPE_ADD_USER(1)=添加成员、USER_GROUP_OPER_TYPE_DELETE_USER(2)=删除成员、USER_GROUP_OPER_TYPE_BASIC_INFO(3)=基础信息（别名和描述）</p>
   */
  OperType: number
  /**
   * <p>用户组名称</p>
   */
  GroupName?: string
  /**
   * <p>用户组别名</p>
   */
  GroupNickname?: string
  /**
   * <p>用户组描述</p>
   */
  Description?: string
  /**
   * <p>成员 UIN 列表（OperType 为添加/删除成员时使用）</p>
   */
  UserUins?: Array<string>
}

/**
 * 控制台用户组信息（对外标准版，与内部 UserGroupRoleInfo 解耦）
 */
export interface ConsoleGroupInfo {
  /**
   * 用户组 ID
   */
  GroupId?: string
  /**
   * 用户组名称
   */
  GroupName?: string
  /**
   * 角色列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<RoleBasicInfo>
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 用户组下用户数量
   */
  UserCount?: number
  /**
   * 用户组类型。取值为枚举数值的字符串形式："0"=控制台系统类型（包含全部user）、"1"=控制台自定义类型、"2"=工作空间系统类型、"3"=工作空间自定义类型
   */
  GroupType?: string
}

/**
 * 文件详情
 */
export interface FileInfo {
  /**
   * <p>主账号 AppId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * <p>工作空间 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>文件 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileId?: string
  /**
   * <p>文件名，含后缀</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * <p>文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * <p>文件在工作空间中的完整路径，以 / 开头，如 /etl/daily/demo.ipynb</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * <p>文件运行配置</p>
   */
  FileConfig?: FileConfig
  /**
   * <p>绑定的 BundleId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * <p>绑定的 BundleInfo，JSON 字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
  /**
   * <p>文件状态。active=正常，deleted=已删除</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>文件负责人用户名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserName?: string
  /**
   * <p>创建人子账号 Uin</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * <p>最近更新人子账号 Uin</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * <p>创建时间，毫秒级时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>最近更新时间，毫秒级时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>文件存储信息。仅当请求 IncludeContent=true 时返回内容</p>
   */
  Storage?: FileStorage
  /**
   * <p>当前调用方对该文件的权限点列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: string
  /**
   * <p>是否已发布</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReleaseStatus?: boolean
  /**
   * <p>资源模式。1=分布式，2=单节点</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceMode?: number
  /**
   * ZIP 异步创建时透传 Workspace 作业信息；普通同步创建或其他复用该返回结构的接口不设置该字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOperation?: AsyncOperation
}

/**
 * GetWorkflow返回参数结构体
 */
export interface GetWorkflowResponse {
  /**
   * <p>获取工作流详细信息响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: GetWorkflowRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetWorkflowTaskRun请求参数结构体
 */
export interface GetWorkflowTaskRunRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>任务运行ID，可通过 ListWorkflowTaskRuns 获取。必填</p>
   */
  WorkflowTaskRunId: string
  /**
   * <p>内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用）。非必填</p>
   */
  InnerWorkflowTaskRunListOption?: InnerWorkflowTaskRunListOption
}

/**
 * DeleteFile返回参数结构体
 */
export interface DeleteFileResponse {
  /**
   * <p>返回结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DeleteFileResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsoleGroup返回参数结构体
 */
export interface CreateConsoleGroupResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: CreateConsoleGroupRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流任务信息。 注意：本结构同时用于入参（CreateWorkflow / UpdateWorkflow）与出参（GetWorkflow）， 其中 CreateTime / UpdateTime / CreateUserUin 为系统生成字段，仅在出参中有值， 入参传值不生效（服务端忽略且不报错）。
 */
export interface WorkflowTask {
  /**
   * 任务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamList?: Array<ParamInfo>
  /**
   * 任务依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnList?: Array<DependOnBrief>
  /**
   * 任务ID，创建时无需传入，由服务端生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: TaskType
  /**
   * 资源组ID，可通过资源组相关接口获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 任务告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alarm?: AlarmBrief
  /**
   * 监控指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorMetric?: MonitorMetricBrief
  /**
   * 任务重试策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRetryStrategy?: TaskRetryStrategy
  /**
   * <p>任依赖运行条件</p><ul><li>ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功</li><li>ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功</li><li>NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中</li><li>ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败</li><li>ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败</li><li>ALL_FAILED: 全部失败：所有上游依赖任务都失败</li><li>ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行</li><li>ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行</li><li>ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游</li><li>ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行</li><li>NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行</li><li>ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行</li><li>ADVANCED:运行条件为高级模式时配置</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnRunCondition?: string
  /**
   * 任务X坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate?: number
  /**
   * 任务Y坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate?: number
  /**
   * <p>任务高级运行参数，当DependOnRunCondition为ADVANCED时配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedDependencyConfig?: AdvancedDependencyConfig
  /**
   * <p>内嵌任务（FOR_EACH任务的子任务）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTask?: WorkflowTask
  /**
   * 创建时间，单位：毫秒时间戳。出参专用，系统生成，入参传值不生效
【已废弃】服务端忽略传入值，不报错。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间，单位：毫秒时间戳。出参专用，系统生成，入参传值不生效
【已废弃】服务端忽略传入值，不报错。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 创建人UIN。出参专用，系统生成，入参传值不生效
【已废弃】服务端忽略传入值，不报错。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
}

/**
 * 高级依赖配置
 */
export interface AdvancedDependencyConfig {
  /**
   * 逻辑运算符号OR / AND
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 任务运行条件规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conditions?: Array<TaskRunConditionRule>
}

/**
 * DeleteConsoleGroups请求参数结构体
 */
export interface DeleteConsoleGroupsRequest {
  /**
   * <p>要删除的用户组 ID 列表</p>
   */
  GroupIds: Array<string>
}

/**
 * UpdateWorkflow返回参数结构体
 */
export interface UpdateWorkflowResponse {
  /**
   * <p>更新工作流响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: UpdateWorkflowRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetWorkflow请求参数结构体
 */
export interface GetWorkflowRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
}

/**
 * 内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用）
 */
export interface InnerWorkflowTaskRunListOption {
  /**
   * <p>分页页码，从 1 开始。非必填，默认 1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * <p>每页大小。非必填，默认 10，取值范围 [10, 200]</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * <p>迭代运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。</p><p>可填 SUCCESS / FAILED 等，具体参考本接口出参 InnerWorkflowTaskRunIteration.RunState 字段返回值。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStates?: Array<string>
}

/**
 * 工作流运行信息
 */
export interface WorkflowRun {
  /**
   * <p>主账号ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * <p>工作流名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * <p>工作流ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * <p>工作流运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * <p>工作空间ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>触发方式，Scheduler、ManualTrigger、Event (参考SchedulerTriggerType)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>运行开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>pending 状态开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PendingStartTime?: string
  /**
   * <p>queue 状态开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueStartTime?: string
  /**
   * <p>运行结束时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunEndTime?: string
  /**
   * <p>终态时间，运行进入终态时都有值，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>运行时长，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunCostTime?: string
  /**
   * <p>并发排队花费时间，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueCostTime?: string
  /**
   * <p>等待资源花费时间，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PendingCostTime?: string
  /**
   * <p>运行状态。CREATE(&quot;初始化&quot;),     QUEUED(&quot;等待中&quot;),     PENDING(&quot;准备中&quot;),     RUNNING(&quot;运行中&quot;),     SKIPPED(&quot;跳过运行&quot;),     SUCCESS(&quot;成功&quot;),     FAILED(&quot;失败&quot;),     TERMINATING(&quot;终止中&quot;),     TERMINATED(&quot;终止&quot;),     CANCELLED(&quot;被手动终止&quot;)等</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * <p>计算资源（任务的资源组ID集合）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupIds?: Array<string>
  /**
   * <p>运行用户UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * <p>运行用户名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserName?: string
  /**
   * <p>错误码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
  /**
   * <p>运行参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowParams?: string
  /**
   * <p>工作流版本ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowVersionId?: string
  /**
   * <p>当前工作流是否支持重跑</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportRerun?: boolean
  /**
   * <p>工作流运行创建时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>重跑次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerunTimes?: number
  /**
   * <p>运行的任务范围，任务ID列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelectedTaskIds?: Array<string>
  /**
   * <p>资源组信息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupInfoList?: Array<ResourceGroupInfo>
  /**
   * <p>标签列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelList?: Array<LabelBrief>
  /**
   * <p>父工作流运行ID 【由嵌套工作流触发独有】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWorkflowRunId?: string
  /**
   * <p>父工作流任务运行ID 【由嵌套工作流触发独有】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWorkflowTaskRunId?: string
  /**
   * <p>父工作流任务运行名称 【由嵌套工作流触发独有】</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentWorkflowTaskRunName?: string
  /**
   * <p>授权权限类型<br>PERMISSION_TYPE_UNSPECIFIED：未指定权限<br>MANAGE : 管理权限：包含所有操作权限<br>RUN : 运行权限：可执行实体<br>VIEW : 查看权限：可查看实体内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permission?: string
  /**
   * <p>工作流高级运行时用户填入的参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedParameters?: Array<AdvancedParameter>
  /**
   * <p>计划调度时间</p><p>参数格式：毫秒时间戳（UTC）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTime?: string
}

/**
 * 任务类型属性键值对
 */
export interface TaskTypeProperty {
  /**
   * 属性名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertyKey?: string
  /**
   * 属性值
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertyValue?: string
}

/**
 * ListWorkflowRunsRsp
 */
export interface ListWorkflowRunsRsp {
  /**
   * 当前页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 工作流运行列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkflowRun>
  /**
   * 工作流运行状态数量统计。
统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizStateEnumInfos?: Array<ScheduleBizEnumBrief>
  /**
   * 工作流运行错误码数量统计。
统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizErrorCodeEnumInfos?: Array<ScheduleBizEnumBrief>
}

/**
 * CreateFile请求参数结构体
 */
export interface CreateFileRequest {
  /**
   * <p>工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId</p>
   */
  WorkspaceId: string
  /**
   * <p>文件名，含后缀，最长 255 字节。不能以 . 或 .. 开头/结尾，不能含空格与控制字符</p>
   */
  FileName: string
  /**
   * <p>父文件夹路径，以 / 开头、末尾不带 /，根目录传 /。来源：ListFiles 接口返回的 Path</p>
   */
  ParentFolderPath?: string
  /**
   * <p>文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType</p>
   */
  FileType?: string
  /**
   * <p>文件运行配置</p>
   */
  FileConfig?: FileConfig
  /**
   * <p>绑定的 BundleId。来源：ListBundles 接口返回的 BundleId</p>
   */
  BundleId?: string
  /**
   * <p>绑定的 BundleInfo，JSON 字符串</p>
   */
  BundleInfo?: string
  /**
   * <p>文件初始内容。不传则按FileType 生成默认内容</p>
   */
  Storage?: FileStorage
  /**
   * 是否将 Storage 中的 ZIP 文件异步解压创建，默认 false。true 时异步作业由 Workspace 负责全生命周期，响应仅通过 AsyncOperation 返回作业信息（FileId 为空）；作业进度查询由基础平台 WS 接口实现，不在本协议中定义。
   */
  ExtractArchive?: boolean
}

/**
 * UpdateFile请求参数结构体
 */
export interface UpdateFileRequest {
  /**
   * <p>工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId</p>
   */
  WorkspaceId: string
  /**
   * <p>文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId</p>
   */
  FileId: string
  /**
   * <p>文件运行配置。不传则不更新配置</p>
   */
  FileConfig?: FileConfig
  /**
   * <p>文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType</p>
   */
  FileType?: string
  /**
   * <p>绑定的 BundleId。来源：ListBundles 接口返回的 BundleId</p>
   */
  BundleId?: string
  /**
   * <p>绑定的 BundleInfo，JSON 字符串</p>
   */
  BundleInfo?: string
  /**
   * <p>文件内容。不传则不更新内容</p>
   */
  Storage?: FileStorage
  /**
   * <p>目标文件名，非空且与当前文件名不同时执行 rename 动作。长度不超过 SCRIPT_NAME_MAX_LENGTH，禁止以 . 或 .. 开头/结尾，禁止空格、双点、控制字符及 Linux 保留名（参考 docs/linux_filename_rules.md）。与 ExtensionType 一起校验后缀合法性</p>
   */
  FileName?: string
  /**
   * <p>目标父目录路径，非空时执行 move 动作。根目录传 /；与 FileName 可同时出现，语义为「移动+重命名」。与 CreateFile 的 ParentFolderPath 保持一致</p>
   */
  ParentFolderPath?: string
  /**
   * <p>目标父目录的 FileType。取值：FOLDER、GIT_FOLDER。仅当 ParentFolderPath 非空时使用；缺省时按解析出的父目录实际类型处理</p>
   */
  TargetFileType?: string
  /**
   * <p>动作类型（必填，未来版本会强制校验）。取值：1 = UPDATE_CONTENT（仅更新 FileConfig / Storage / Bundle*，禁止传 FileName / ParentFolderPath / TargetFileType）；2 = RENAME（仅重命名，必须传 FileName，禁止传 ParentFolderPath / FileConfig / Storage / Bundle*）；3 = MOVE（仅移动，必须传 ParentFolderPath，禁止传 FileName / FileConfig / Storage / Bundle*）。参数互斥校验失败会返回 ParamIllegal 错误</p>
   */
  UpdateAction?: number
}

/**
 * GetWorkflowRun请求参数结构体
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流运行ID，可通过 ListWorkflowRuns 获取。必填</p>
   */
  WorkflowRunId: string
}

/**
 * RemoveConsoleUsers请求参数结构体
 */
export interface RemoveConsoleUsersRequest {
  /**
   * <p>必填，待移除的用户 UIN 列表，单次最多10个</p>
   */
  UserUins: Array<string>
}

/**
 * 角色权限
 */
export interface RolePermission {
  /**
   * 模块ID
   */
  ModuleId?: string
  /**
   * 权限点
   */
  Permissions?: string
}

/**
 * 文件运行配置
 */
export interface FileConfig {
  /**
   * <p>高级运行参数，变量替换用，map-json String,String</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * <p>执行资源 ID。来源：ListComputeResources 接口返回的 ResourceId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * <p>默认 catalog</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultCatalog?: string
  /**
   * <p>默认 schema</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultSchema?: string
  /**
   * <p>高级配置，JSON 字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvanceConfig?: string
  /**
   * <p>扩展参数，JSON 字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraParams?: string
  /**
   * <p>Notebook 交互控件定义，JSON 字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Widgets?: string
  /**
   * <p>各单元格输出配置。仅 Get 出参返回，入参忽略</p>
   */
  OutputConf?: Array<FileOutputConf>
  /**
   * <p>SQL脚本语法标记</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlSyntax?: string
  /**
   * <p>平台集群id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * RunWorkflow返回参数结构体
 */
export interface RunWorkflowResponse {
  /**
   * <p>运行工作流响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: AsyncActionRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListConsoleUsers请求参数结构体
 */
export interface ListConsoleUsersRequest {
  /**
   * <p>页码，从1开始，默认1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，默认10，最小10，最大200</p>
   */
  PageSize?: number
  /**
   * <p>用户名称与 UIN 模糊匹配</p>
   */
  UserKeyword?: string
  /**
   * <p>用于过滤角色关联的用户</p><p>枚举值：</p><ul><li>2001： 控制台管理员</li><li>2002： 控制台成员</li></ul>
   */
  RoleIds?: Array<string>
  /**
   * <p>多字段排序，如 [{Name: &#39;CreateTime&#39;, Direction: &#39;Desc&#39;}, {Name: &#39;UserName&#39;, Direction: &#39;Asc&#39;}]，默认按创建时间降序</p>
   */
  OrderBys?: Array<OrderBy>
}

/**
 * ListWorkflowRuns返回参数结构体
 */
export interface ListWorkflowRunsResponse {
  /**
   * <p>工作流运行列表响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ListWorkflowRunsRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高级运行参数（工作流高级运行时用户填入的参数）
 */
export interface AdvancedParameter {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey?: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue?: string
}

/**
 * UpdateConsoleGroup返回参数结构体
 */
export interface UpdateConsoleGroupResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: UpdateConsoleGroupRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 控制台用户信息（规范化，与内部 UserDetailInfo 解耦）
 */
export interface ConsoleUserInfo {
  /**
   * 用户 UIN
   */
  UserUin?: string
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 昵称
   */
  Nickname?: string
  /**
   * 角色列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<RoleBasicInfo>
  /**
   * 用户来源，group：用户组、user:用户
   */
  UserSource?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 是否主账号
   */
  IsOwner?: boolean
  /**
   * 0: 普通用户 1: entraId用户
   */
  UserTag?: number
  /**
   * 是否具有 admin 权限的子账号
   */
  IsAdmin?: boolean
}

/**
 * UpdateWorkflowRsp
 */
export interface UpdateWorkflowRsp {
  /**
   * 更新状态，true 表示成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * 排序字段
 */
export interface OrderBy {
  /**
   * 排序方向，Asc（升序）或 Desc（降序），大小写不敏感
   */
  Direction?: string
  /**
   * 排序字段名
   */
  Name?: string
}

/**
 * 工作流高级设置
 */
export interface WorkflowAdvanceConfig {
  /**
   * 排队模式，ON（默认）, OFF
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueuingMode?: string
  /**
   * 	
默认值为1

QueuingMode为ON时，MaxConcurrentNum 设置才生效；只能输入大于0的整数，输入非法值自动转换为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxConcurrentNum?: number
}

/**
 * DeleteConsoleGroups返回参数结构体
 */
export interface DeleteConsoleGroupsResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: DeleteConsoleGroupsRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内嵌工作流任务运行详情（仅限 FOR_EACH 任务）
 */
export interface InnerWorkflowTaskRun {
  /**
   * 当前页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 迭代运行列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InnerWorkflowTaskRunIteration>
  /**
   * 迭代次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IterationCount?: number
  /**
   * 失败次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureCount?: number
  /**
   * 成功次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 内嵌工作流ID，可通过 ListWorkflows 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerWorkflowId?: string
  /**
   * 内嵌任务ID，可通过 ListWorkflowTasks 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTaskId?: string
  /**
   * 内嵌任务运行状态数量统计（实例业务枚举键值对列表）
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerTaskRunBizEnumInfos?: Array<ScheduleBizEnumBrief>
}

/**
 * 单个监控指标
 */
export interface MonitorMetricItem {
  /**
   * 监控指标类型,有三种类型：1. RUN_DURATION（运行时长）2. WAIT_DURATION（等待时长）3. COMPLETION_TIME（完成时间）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricType?: string
  /**
   * 警告阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算
注意：此字段可能返回 null，表示取不到有效值。
   */
  WarningThreshold?: string
  /**
   * 超时阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeoutThreshold?: string
}

/**
 * CreateWorkflow返回参数结构体
 */
export interface CreateWorkflowResponse {
  /**
   * <p>创建工作流响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CreateWorkflowRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListConsoleRoles请求参数结构体
 */
export interface ListConsoleRolesRequest {
  /**
   * <p>页码，从1开始，默认1</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小，默认10，最小10，最大200</p>
   */
  PageSize?: number
  /**
   * <p>角色名称或描述模糊匹配</p>
   */
  RoleKeyword?: string
}

/**
 * 查询控制台用户组成员列表响应
 */
export interface ListConsoleGroupUsersRsp {
  /**
   * 用户组成员列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ConsoleGroupUserInfo>
  /**
   * 当前页码
   */
  PageNumber?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
}

/**
 * 告警组
 */
export interface AlarmGroup {
  /**
   * <p>通知渠道ID，可通过基础平台通知渠道相关接口获取</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelId?: string
  /**
   * <p>通知渠道名称，可以是用户组名称或邮箱地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelName?: string
  /**
   * <p>是否启用邮件渠道，默认值：false</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEmailChannel?: boolean
  /**
   * <p>告警条件列表。取值：<br>START：启动<br>SUCCESS：成功<br>FAILURE：失败<br>MONITOR_INDICATOR_ALARM：监控指标告警</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmConditions?: Array<string>
  /**
   * <p>通知渠道类型。取值：0 未指定，1 Email，2 Webhook，3 Teams，4 Slack</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelType?: number
}

/**
 * DeleteFile请求参数结构体
 */
export interface DeleteFileRequest {
  /**
   * <p>工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId</p>
   */
  WorkspaceId: string
  /**
   * <p>文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId</p>
   */
  FileId: string
  /**
   * <p>文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType</p>
   */
  FileType?: string
}

/**
 * DeleteWorkflowRsp
 */
export interface DeleteWorkflowRsp {
  /**
   * 删除状态，true 表示成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * 通用错误信息
 */
export interface CommonFailItem {
  /**
   * <p>uin或者groupId</p>
   */
  Item?: string
  /**
   * <p>错误信息</p>
   */
  FailReason?: string
}

/**
 * 批量移除控制台用户响应
 */
export interface RemoveConsoleUsersRsp {
  /**
   * <p>请求已完成处理；即使部分失败也为 true，逐个结果以 SuccessUins/FailItems 为准</p>
   */
  Status?: boolean
  /**
   * <p>删除成功的用户 UIN 列表</p>
   */
  SuccessUins?: Array<string>
  /**
   * <p>失败项列表（Item 为用户 UIN，FailReason 为失败原因）</p>
   */
  FailItems?: Array<CommonFailItem>
}

/**
 * GetWorkflowRun返回参数结构体
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>查询工作流运行详情响应内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: GetWorkflowRunRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询控制台用户列表响应
 */
export interface ListConsoleUsersRsp {
  /**
   * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ConsoleUserInfo>
  /**
   * 当前页码
   */
  PageNumber?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
}

/**
 * GetWorkflowRsp
 */
export interface GetWorkflowRsp {
  /**
   * <p>工作空间ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>工作流基本信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BaseInfo?: WorkflowBaseInfoDetail
  /**
   * <p>工作流调度配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trigger?: Array<WorkflowTriggerConfiguration>
  /**
   * <p>工作流参数列表 参数名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=&gt;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamList?: Array<ParamInfo>
  /**
   * <p>标签 标签名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=&gt;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelList?: Array<LabelBrief>
  /**
   * <p>工作流告警配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alarm?: AlarmBrief
  /**
   * <p>监控指标配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorMetric?: MonitorMetricBrief
  /**
   * <p>工作流高级设置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvanceConfig?: WorkflowAdvanceConfig
  /**
   * <p>工作流任务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskList?: Array<WorkflowTask>
  /**
   * <p>工作流绑定的 Bundle唯一标识，未绑定时为空</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * <p>Bundle信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
  /**
   * <p>Git配置ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitConfigId?: string
  /**
   * <p>Git分支信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GitBranch?: string
}

/**
 * UnbindWorkflowBundle请求参数结构体
 */
export interface UnbindWorkflowBundleRequest {
  /**
   * <p>工作空间ID，可通过 ListWorkspaces 获取。必填</p>
   */
  WorkspaceId: string
  /**
   * <p>工作流ID，可通过 ListWorkflows 获取。必填</p>
   */
  WorkflowId: string
}

/**
 * 角色基础信息
 */
export interface RoleBasicInfo {
  /**
   * <p>角色ID</p>
   */
  Id?: string
  /**
   * <p>角色名称</p>
   */
  Name?: string
  /**
   * <p>角色描述</p>
   */
  Description?: string
  /**
   * <p>显示名称</p>
   */
  DisplayName?: string
  /**
   * <p>角色类型</p>
   */
  RoleType?: string
  /**
   * <p>角色来源，参考 web_enum_standard.proto -&gt; RoleSource：0=未指定 1=用户直绑 2=用户组继承 3=两者都有</p>
   */
  Source?: number
  /**
   * <p>继承来源的用户组名称列表，Source=1 时为空</p>
   */
  GroupNames?: Array<string>
}

/**
 * ListConsoleRoles返回参数结构体
 */
export interface ListConsoleRolesResponse {
  /**
   * <p>返回结果</p>
   */
  Data?: ListConsoleRolesRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFile返回参数结构体
 */
export interface UpdateFileResponse {
  /**
   * <p>返回结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: FileInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateConsoleUsers请求参数结构体
 */
export interface UpdateConsoleUsersRequest {
  /**
   * <p>用户 UIN 列表，单次最多100个</p>
   */
  UserUins: Array<string>
  /**
   * <p>角色 ID 列表</p><p>枚举值：</p><ul><li>2001： 控制台管理员</li><li>2002： 控制台成员</li></ul>
   */
  RoleIds: Array<string>
}

/**
 * GetWorkflowTaskRunRsp
 */
export interface GetWorkflowTaskRunRsp {
  /**
   * <p>任务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * <p>任务运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowTaskRunId?: string
  /**
   * <p>运行状态。取值参考工作流任务运行状态枚举，如 Pending / Running / Succeeded / Failed / Killed</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunState?: string
  /**
   * <p>工作空间ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * <p>工作流ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * <p>工作流运行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * <p>任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeName?: string
  /**
   * <p>任务版本ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskVersionId?: string
  /**
   * <p>触发类型</p><p>枚举值：</p><ul><li>Scheduler： 调度触发</li><li>Manual： 手动触发</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>所属资源组ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
  /**
   * <p>错误码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeString?: string
  /**
   * <p>运行用户UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserUin?: string
  /**
   * <p>运行用户名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunUserName?: string
  /**
   * <p>创建人UIN</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * <p>执行平台执行ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * <p>创建时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>依赖任务完成时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependenceFinishedTime?: string
  /**
   * <p>运行开始时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunStartTime?: string
  /**
   * <p>运行结束时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunEndTime?: string
  /**
   * <p>运行时长，单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunCostTime?: string
  /**
   * <p>等待时长（依赖就绪到开始运行的等待耗时），单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitTime?: string
  /**
   * <p>下发执行平台时间，单位：毫秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IssueTime?: string
  /**
   * <p>时区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeZone?: string
  /**
   * <p>依赖上游任务ID列表。保留字段，暂时返回为[]</p><p>保留字段，暂时返回为[]</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependOnList?: Array<string>
  /**
   * <p>运行参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunParams?: string
  /**
   * <p>任务扩展信息，包含脚本路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeExtensions?: string
  /**
   * <p>任务X坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate?: number
  /**
   * <p>任务Y坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate?: number
  /**
   * <p>重试次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryTimes?: number
  /**
   * <p>工作流名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * <p>重跑次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerunTimes?: number
  /**
   * <p>是否最新一次运行</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLatestRun?: boolean
  /**
   * <p>资源组信息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupInfoList?: Array<ResourceGroupInfo>
  /**
   * <p>错误消息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * <p>运行结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunResult?: string
  /**
   * <p>内嵌工作流任务运行详情（仅限 FOR_EACH 任务，其他任务类型不返回该字段）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerWorkflowTaskRun?: InnerWorkflowTaskRun
  /**
   * <p>计划调度时间</p><p>参数格式：毫秒时间戳（UTC）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduledTime?: string
}
