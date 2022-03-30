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
 * ModifyTaskRunStatus返回参数结构体
 */
export interface ModifyTaskRunStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务分组动作
 */
export interface TaskGroupAction {
  /**
   * 任务分组动作ID
   */
  TaskGroupActionId: number

  /**
   * 任务分组动作实例列表
   */
  TaskGroupInstances: Array<TaskGroupInstance>

  /**
   * 动作ID
   */
  ActionId: number

  /**
   * 分组动作顺序
   */
  TaskGroupActionOrder: number

  /**
      * 分组动作通用配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupActionGeneralConfiguration: string

  /**
      * 分组动作自定义配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupActionCustomConfiguration: string

  /**
   * 分组动作状态
   */
  TaskGroupActionStatus: number

  /**
   * 动作分组创建时间
   */
  TaskGroupActionCreateTime: string

  /**
   * 动作分组更新时间
   */
  TaskGroupActionUpdateTime: string

  /**
   * 动作名称
   */
  ActionTitle: string

  /**
   * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
   */
  TaskGroupActionStatusType: number

  /**
      * RandomId
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupActionRandomId: number

  /**
      * RecoverId
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupActionRecoverId: number

  /**
      * ExecuteId
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupActionExecuteId: number

  /**
      * 调用api类型，0:tat, 1:云api
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionApiType?: number

  /**
      * 1:故障，2:恢复
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionAttribute?: number

  /**
      * 动作类型：平台、自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionType?: string
}

/**
 * 监控指标
 */
export interface TaskMonitor {
  /**
   * 监控指标ID
   */
  TaskMonitorId: number

  /**
   * 监控指标对象类型ID
   */
  TaskMonitorObjectTypeId: number

  /**
   * 指标名称
   */
  MetricName: string

  /**
   * 实例ID列表
   */
  InstancesIds: Array<string>

  /**
      * 中文指标
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetricChineseName: string

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string
}

/**
 * 从经验模版创建演练时需要配置的任务参数
 */
export interface TaskConfig {
  /**
   * 动作组配置，需要保证配置个数和经验中的动作组个数一致
   */
  TaskGroupsConfig: Array<TaskGroupConfig>

  /**
   * 更改后的演练名称，不填则默认取经验名称
   */
  TaskTitle?: string

  /**
   * 更改后的演练描述，不填则默认取经验描述
   */
  TaskDescription?: string

  /**
   * 演练执行模式：1----手工执行/ 2 ---自动执行，不填则默认取经验执行模式
   */
  TaskMode?: number

  /**
   * 演练自动暂停时间，单位分钟, 不填则默认取经验自动暂停时间
   */
  TaskPauseDuration?: number

  /**
   * 演练标签信息，不填则默认取经验标签
   */
  Tags?: Array<TagWithCreate>
}

/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * 任务分组
 */
export interface TaskGroup {
  /**
   * 任务动作ID
   */
  TaskGroupId: number

  /**
   * 分组标题
   */
  TaskGroupTitle: string

  /**
      * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupDescription: string

  /**
   * 任务分组顺序
   */
  TaskGroupOrder: number

  /**
   * 对象类型ID
   */
  ObjectTypeId: number

  /**
   * 任务分组创建时间
   */
  TaskGroupCreateTime: string

  /**
   * 任务分组更新时间
   */
  TaskGroupUpdateTime: string

  /**
   * 动作分组动作列表
   */
  TaskGroupActions: Array<TaskGroupAction>

  /**
   * 实例列表
   */
  TaskGroupInstanceList: Array<string>

  /**
   * 执行模式。1 --- 顺序执行，2 --- 阶段执行
   */
  TaskGroupMode: number
}

/**
 * ExecuteTask返回参数结构体
 */
export interface ExecuteTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 动作组的配置项
 */
export interface TaskGroupConfig {
  /**
   * 动作组所关联的实例对象
   */
  TaskGroupInstances: Array<string>

  /**
   * 动作组标题，不填默认取经验中的动作组名称
   */
  TaskGroupTitle?: string

  /**
   * 动作组描述，不填默认取经验中的动作组描述
   */
  TaskGroupDescription?: string

  /**
   * 动作执行模式。1 --- 顺序执行，2 --- 阶段执行, 不填默认取经验中的动作组执行模式
   */
  TaskGroupMode?: number

  /**
   * 动作组中的动作参数，不填默认使用经验中的动作参数，配置时可以只指定想要修改参数的动作
   */
  TaskGroupActionsConfig?: Array<TaskGroupActionConfig>
}

/**
 * 经验库
 */
export interface Template {
  /**
   * 经验库ID
   */
  TemplateId: number

  /**
   * 经验库标题
   */
  TemplateTitle: string

  /**
   * 经验库描述
   */
  TemplateDescription: string

  /**
      * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TemplateTag: string

  /**
   * 使用状态。1 ---- 使用中，2 --- 停用
   */
  TemplateIsUsed: number

  /**
   * 经验库创建时间
   */
  TemplateCreateTime: string

  /**
   * 经验库更新时间
   */
  TemplateUpdateTime: string

  /**
   * 经验库模式。1:手工执行，2:自动执行
   */
  TemplateMode: number

  /**
   * 自动暂停时长。单位分钟
   */
  TemplatePauseDuration: number

  /**
   * 演练创建者Uin
   */
  TemplateOwnerUin: string

  /**
   * 地域ID
   */
  TemplateRegionId: number

  /**
   * 动作组
   */
  TemplateGroups: Array<TemplateGroup>

  /**
   * 监控指标
   */
  TemplateMonitors: Array<TemplateMonitor>

  /**
      * 护栏监控
注意：此字段可能返回 null，表示取不到有效值。
      */
  TemplatePolicy: TemplatePolicy

  /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<TagWithDescribe>
}

/**
 * DescribeTaskExecuteLogs请求参数结构体
 */
export interface DescribeTaskExecuteLogsRequest {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 返回的内容行数
   */
  Limit: number

  /**
   * 日志起始的行数。
   */
  Offset: number
}

/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
  /**
   * 任务信息
   */
  Task: Task

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskRunStatus请求参数结构体
 */
export interface ModifyTaskRunStatusRequest {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 任务状态, 1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束
   */
  Status: number

  /**
   * 执行结果是否符合预期（当前扭转状态为执行结束时，需要必传此字段）
   */
  IsExpect?: boolean

  /**
   * 演习结论（当演习状态转变为执行结束时，需要填写此字段）
   */
  Summary?: string
}

/**
 * DescribeTemplate返回参数结构体
 */
export interface DescribeTemplateResponse {
  /**
   * 经验库详情
   */
  Template: Template

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询-保护策略
 */
export interface DescribePolicy {
  /**
   * 保护策略ID列表
   */
  TaskPolicyIdList: Array<string>

  /**
   * 保护策略状态
   */
  TaskPolicyStatus: string

  /**
   * 策略规则
   */
  TaskPolicyRule: string

  /**
      * 护栏策略生效处理策略 1:顺序执行，2:暂停
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskPolicyDealType: number
}

/**
 * DescribeTemplate请求参数结构体
 */
export interface DescribeTemplateRequest {
  /**
   * 经验库ID
   */
  TemplateId: number
}

/**
 * ExecuteTaskInstance请求参数结构体
 */
export interface ExecuteTaskInstanceRequest {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 任务动作ID
   */
  TaskActionId: number

  /**
   * 任务动作实例ID
   */
  TaskInstanceIds: Array<number>

  /**
   * 是否操作整个任务
   */
  IsOperateAll: boolean

  /**
   * 操作类型：（1--启动   2--执行  3--跳过   5--重试）
   */
  ActionType: number

  /**
   * 动作组ID
   */
  TaskGroupId: number
}

/**
 * 任务分组动作实例
 */
export interface TaskGroupInstance {
  /**
   * 实例ID
   */
  TaskGroupInstanceId: number

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupInstanceObjectId: string

  /**
   * 实例动作执行状态
   */
  TaskGroupInstanceStatus: number

  /**
      * 实例动作执行日志
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupInstanceExecuteLog: string

  /**
   * 实例创建时间
   */
  TaskGroupInstanceCreateTime: string

  /**
   * 实例更新时间
   */
  TaskGroupInstanceUpdateTime: string

  /**
   * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
   */
  TaskGroupInstanceStatusType: number

  /**
      * 执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupInstanceStartTime: string

  /**
      * 执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskGroupInstanceEndTime: string
}

/**
 * ExecuteTask请求参数结构体
 */
export interface ExecuteTaskRequest {
  /**
   * 需要执行的任务ID
   */
  TaskId: number
}

/**
 * DescribeTaskList返回参数结构体
 */
export interface DescribeTaskListResponse {
  /**
   * 无
   */
  TaskList: Array<TaskListItem>

  /**
   * 列表数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务分组动作
 */
export interface TemplateGroupAction {
  /**
   * 经验库分组动作ID
   */
  TemplateGroupActionId: number

  /**
   * 动作ID
   */
  ActionId: number

  /**
   * 分组动作顺序
   */
  Order: number

  /**
      * 分组动作通用配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  GeneralConfiguration: string

  /**
      * 分组动作自定义配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomConfiguration: string

  /**
   * 动作分组创建时间
   */
  CreateTime: string

  /**
   * 动作分组更新时间
   */
  UpdateTime: string

  /**
   * 动作名称
   */
  ActionTitle: string

  /**
      * 自身随机id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RandomId: number

  /**
      * 恢复动作id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecoverId: number

  /**
      * 执行动作id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecuteId: number

  /**
      * 调用api类型，0:tat, 1:云api
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionApiType?: number

  /**
      * 1:故障，2:恢复
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionAttribute?: number

  /**
      * 动作类型：平台和自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionType?: string
}

/**
 * DescribeTemplateList返回参数结构体
 */
export interface DescribeTemplateListResponse {
  /**
   * 经验库列表
   */
  TemplateList: Array<TemplateListItem>

  /**
   * 列表数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 展示标签列表
 */
export interface TagWithDescribe {
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
 * CreateTaskFromTemplate返回参数结构体
 */
export interface CreateTaskFromTemplateResponse {
  /**
   * 创建成功的演练ID
   */
  TaskId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * 任务
 */
export interface Task {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 任务标题
   */
  TaskTitle: string

  /**
   * 任务描述
   */
  TaskDescription: string

  /**
      * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTag: string

  /**
      * 任务状态，1001--未开始  1002--进行中（执行）1003--进行中（暂停）1004--执行结束
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskStatus: number

  /**
   * 任务结束状态，表明任务以何种状态结束: 0 -- 尚未结束，1 -- 成功，2-- 失败，3--终止
   */
  TaskStatusType: number

  /**
      * 保护策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskProtectStrategy: string

  /**
   * 任务创建时间
   */
  TaskCreateTime: string

  /**
   * 任务更新时间
   */
  TaskUpdateTime: string

  /**
   * 任务动作组
   */
  TaskGroups: Array<TaskGroup>

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskStartTime: string

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskEndTime: string

  /**
      * 是否符合预期。1：符合预期，2：不符合预期
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskExpect: number

  /**
      * 演习记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskSummary: string

  /**
   * 任务模式。1:手工执行，2:自动执行
   */
  TaskMode: number

  /**
   * 自动暂停时长。单位分钟
   */
  TaskPauseDuration: number

  /**
   * 演练创建者Uin
   */
  TaskOwnerUin: string

  /**
   * 地域ID
   */
  TaskRegionId: number

  /**
      * 监控指标列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskMonitors: Array<TaskMonitor>

  /**
      * 保护策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskPolicy: DescribePolicy

  /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<TagWithDescribe>
}

/**
 * CreateTaskFromTemplate请求参数结构体
 */
export interface CreateTaskFromTemplateRequest {
  /**
   * 从经验库中查询到的经验模版ID
   */
  TemplateId: number

  /**
   * 演练的配置参数
   */
  TaskConfig: TaskConfig
}

/**
 * DescribeTaskList请求参数结构体
 */
export interface DescribeTaskListRequest {
  /**
   * 分页Limit
   */
  Limit: number

  /**
   * 分页Offset
   */
  Offset: number

  /**
   * 演练名称
   */
  TaskTitle?: string

  /**
   * 标签键
   */
  TaskTag?: Array<string>

  /**
   * 状态
   */
  TaskStatus?: number

  /**
   * 开始时间，固定格式%Y-%m-%d %H:%M:%S
   */
  TaskStartTime?: string

  /**
   * 结束时间，固定格式%Y-%m-%d %H:%M:%S
   */
  TaskEndTime?: string

  /**
   * 标签对
   */
  Tags?: Array<TagWithDescribe>
}

/**
 * 任务列表信息
 */
export interface TaskListItem {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 任务标题
   */
  TaskTitle: string

  /**
   * 任务描述
   */
  TaskDescription: string

  /**
      * 任务标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTag: string

  /**
   * 任务状态
   */
  TaskStatus: number

  /**
   * 任务创建时间
   */
  TaskCreateTime: string

  /**
   * 任务更新时间
   */
  TaskUpdateTime: string
}

/**
 * ExecuteTaskInstance返回参数结构体
 */
export interface ExecuteTaskInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskExecuteLogs返回参数结构体
 */
export interface DescribeTaskExecuteLogsResponse {
  /**
   * 日志数据
   */
  LogMessage: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控指标
 */
export interface TemplateMonitor {
  /**
   * 监控指标ID
   */
  MonitorId: number

  /**
   * 监控指标对象类型ID
   */
  ObjectTypeId: number

  /**
   * 指标名称
   */
  MetricName: string

  /**
      * 中文指标
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetricChineseName: string
}

/**
 * 任务分组
 */
export interface TemplateGroup {
  /**
   * 经验库动作ID
   */
  TemplateGroupId: number

  /**
   * 经验库动作分组动作列表
   */
  TemplateGroupActions: Array<TemplateGroupAction>

  /**
   * 分组标题
   */
  Title: string

  /**
      * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 分组顺序
   */
  Order: number

  /**
   * 执行模式。1 --- 顺序执行，2 --- 阶段执行
   */
  Mode: number

  /**
   * 对象类型ID
   */
  ObjectTypeId: number

  /**
   * 分组创建时间
   */
  CreateTime: string

  /**
   * 分组更新时间
   */
  UpdateTime: string
}

/**
 * 保护策略
 */
export interface TemplatePolicy {
  /**
   * 保护策略ID列表
   */
  TemplatePolicyIdList: Array<string>

  /**
   * 策略规则
   */
  TemplatePolicyRule: string

  /**
   * 护栏策略生效处理策略 1:顺序执行，2:暂停
   */
  TemplatePolicyDealType: number
}

/**
 * 动作组中的动作参数
 */
export interface TaskGroupActionConfig {
  /**
   * 该动作在动作组中的顺序，从1开始，不填或填错将匹配不到经验中要修改参数的动作
   */
  TaskGroupActionOrder?: number

  /**
   * 动作通用参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
   */
  TaskGroupActionGeneralConfiguration?: string

  /**
   * 动作自定义参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
   */
  TaskGroupActionCustomConfiguration?: string
}

/**
 * DescribeTemplateList请求参数结构体
 */
export interface DescribeTemplateListRequest {
  /**
   * 分页Limit, 最大值100
   */
  Limit: number

  /**
   * 分页Offset
   */
  Offset: number

  /**
   * 演练名称
   */
  Title?: string

  /**
   * 标签键
   */
  Tag?: Array<string>

  /**
   * 状态，1---使用中， 2---停用
   */
  IsUsed?: number

  /**
   * 标签对
   */
  Tags?: Array<TagWithDescribe>
}

/**
 * 经验库列表信息
 */
export interface TemplateListItem {
  /**
   * 经验库ID
   */
  TemplateId: number

  /**
   * 经验库标题
   */
  TemplateTitle: string

  /**
   * 经验库描述
   */
  TemplateDescription: string

  /**
      * 经验库标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TemplateTag: string

  /**
   * 经验库状态。1 -- 使用中，2 -- 停用
   */
  TemplateIsUsed: number

  /**
   * 经验库创建时间
   */
  TemplateCreateTime: string

  /**
   * 经验库更新时间
   */
  TemplateUpdateTime: string

  /**
   * 经验库关联的任务数量
   */
  TemplateUsedNum: number
}

/**
 * 用于传入创建、编辑标签
 */
export interface TagWithCreate {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string
}
