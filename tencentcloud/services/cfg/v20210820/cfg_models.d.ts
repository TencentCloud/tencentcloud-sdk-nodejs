/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * DescribeActionFieldConfigList请求参数结构体
 */
export interface DescribeActionFieldConfigListRequest {
    /**
     * 动作ID列表
     */
    ActionIds: Array<number | bigint>;
    /**
     * 对象类型ID
     */
    ObjectTypeId: number;
}
/**
 * 任务分组动作
 */
export interface TaskGroupAction {
    /**
     * 任务分组动作ID
     */
    TaskGroupActionId: number;
    /**
     * 任务分组动作实例列表
     */
    TaskGroupInstances: Array<TaskGroupInstance>;
    /**
     * 动作ID
     */
    ActionId: number;
    /**
     * 分组动作顺序
     */
    TaskGroupActionOrder: number;
    /**
     * 分组动作通用配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionGeneralConfiguration: string;
    /**
     * 分组动作自定义配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionCustomConfiguration: string;
    /**
     * 分组动作状态
     */
    TaskGroupActionStatus: number;
    /**
     * 动作分组创建时间
     */
    TaskGroupActionCreateTime: string;
    /**
     * 动作分组更新时间
     */
    TaskGroupActionUpdateTime: string;
    /**
     * 动作名称
     */
    ActionTitle: string;
    /**
     * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
     */
    TaskGroupActionStatusType: number;
    /**
     * RandomId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionRandomId: number;
    /**
     * RecoverId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionRecoverId: number;
    /**
     * ExecuteId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionExecuteId: number;
    /**
     * 调用api类型，0:tat, 1:云api
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionApiType?: number;
    /**
     * 1:故障，2:恢复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionAttribute?: number;
    /**
     * 动作类型：平台、自定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsExecuteRedo?: boolean;
    /**
     * 动作风险级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionRisk?: string;
    /**
     * 动作运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupActionExecuteTime?: number;
    /**
     * 动作开始执行时间
     */
    TaskGroupActionStartTime?: string;
}
/**
 * 应用性能监控产品中应用信息
 */
export interface ApmServiceInfo {
    /**
     * 业务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceNameList: Array<string>;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
}
/**
 * 机器选取规则
 */
export interface TaskGroupInstancesExecuteRules {
    /**
     * 实例选取模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstancesExecuteMode?: number;
    /**
     * 按比例选取模式下选取比例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstancesExecutePercent?: number;
    /**
     * 按数量选取模式下选取数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstancesExecuteNum?: number;
}
/**
 * CreateTaskFromAction请求参数结构体
 */
export interface CreateTaskFromActionRequest {
    /**
     * 动作ID，可从动作列表接口DescribeActionLibraryList获取
     */
    TaskActionId: number;
    /**
     * 参与演练的实例ID
     */
    TaskInstances: Array<string>;
    /**
     * 演练名称，不填则默认取动作名称
     */
    TaskTitle?: string;
    /**
     * 演练描述，不填则默认取动作描述
     */
    TaskDescription?: string;
    /**
     * 动作通用参数，需要json序列化传入，可以从动作详情接口DescribeActionFieldConfigList获取，不填默认使用动作默认参数
     */
    TaskActionGeneralConfiguration?: string;
    /**
     * 动作自定义参数，需要json序列化传入，可以从动作详情接口DescribeActionFieldConfigList获取，不填默认使用动作默认参数，注意：必填参数，是没有默认值的 ，务必保证传入有效值
     */
    TaskActionCustomConfiguration?: string;
    /**
     * 演练自动暂停时间，单位分钟, 不填则默认为60
     */
    TaskPauseDuration?: number;
}
/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * DescribeActionLibraryList请求参数结构体
 */
export interface DescribeActionLibraryListRequest {
    /**
     * 0-100
     */
    Limit: number;
    /**
     * 默认值0
     */
    Offset: number;
    /**
     * 对象类型ID
     */
    ObjectType: number;
    /**
     * Keyword取值{"动作名称": "a_title", "描述": "a_desc", "动作类型": "a_type", "创建时间": "a_create_time", "二级分类": "a_resource_type"}
     */
    Filters?: Array<ActionFilter>;
    /**
     * 动作分类，1表示故障动作，2表示恢复动作
     */
    Attribute?: Array<number | bigint>;
    /**
     * 筛选项 -动作ID
     */
    ActionIds?: Array<number | bigint>;
}
/**
 * 任务分组
 */
export interface TaskGroup {
    /**
     * 任务动作ID
     */
    TaskGroupId: number;
    /**
     * 分组标题
     */
    TaskGroupTitle: string;
    /**
     * 分组描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupDescription: string;
    /**
     * 任务分组顺序
     */
    TaskGroupOrder: number;
    /**
     * 对象类型ID
     */
    ObjectTypeId: number;
    /**
     * 任务分组创建时间
     */
    TaskGroupCreateTime: string;
    /**
     * 任务分组更新时间
     */
    TaskGroupUpdateTime: string;
    /**
     * 动作分组动作列表
     */
    TaskGroupActions: Array<TaskGroupAction>;
    /**
     * 实例列表
     */
    TaskGroupInstanceList: Array<string>;
    /**
     * 执行模式。1 --- 顺序执行，2 --- 阶段执行
     */
    TaskGroupMode: number;
    /**
     * 不参演的实例列表
     */
    TaskGroupDiscardInstanceList?: Array<string>;
    /**
     * 参演实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupSelectedInstanceList?: Array<string>;
    /**
     * 机器选取规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstancesExecuteRule?: Array<TaskGroupInstancesExecuteRules>;
}
/**
 * ExecuteTask返回参数结构体
 */
export interface ExecuteTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeActionFieldConfigList返回参数结构体
 */
export interface DescribeActionFieldConfigListResponse {
    /**
     * 通用栏位配置列表
     */
    Common?: Array<ActionFieldConfigResult>;
    /**
     * 动作栏位配置列表
     */
    Results?: Array<ActionFieldConfigResult>;
    /**
     * 资源下线信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceOffline?: Array<ResourceOffline>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 动作动态参数返回格式
 */
export interface ActionFieldConfigDetail {
    /**
     * 组件类型
  可选项如下：
  input  文本框
  textarea  多行文本框
  number  数值输入框
  select   选择器
  cascader  级联选择器
  radio  单选
  time   时间选择
     */
    Type: string;
    /**
     * 组件label
     */
    Lable: string;
    /**
     * 组件唯一标识， 传回后端时的key
     */
    Field: string;
    /**
     * 默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue: string;
    /**
     * 支持配置项如下,可根据需要选择配置项，不需要配置是设置空{}：
  
  {
  
    placeholder: string (占位符)
  
    tooltip: string (提示信息)
  
    reg: RegExp (对输入内容格式进行正则校验的规则)
  
    max: number (对于输入框，限制最大输入字符数，对于数值输入框，设置上限)
  
    min: number (对于数值输入框，设置下限)
  
    step: number (设置数值输入框的步长，默认为1)
  
    format: string (时间选择的格式，如YYYY-MM-DD表示年月日, YYYY-MM-DD HH:mm:ss 表示时分秒)
  
    separator:  string[] (多行输入框的分隔符，不传或者为空时表示不分隔，直接返回用户输入的文本字符串)
  
    multiple: boolean (是否多选,对选择器和级联选择器有效)
  
    options:  选择器的选项【支持以下两种形式】
  
  直接给定选项数组  { value: string; label: string }[]
  通过调接口获取选项                                                                                                                                       { api: string(接口地址),                                                                                                                                       params: string[] (接口参数,对应于参数配置的field，前端根据field对应的所有组件的输入值作为参数查询数据， 为空时在组件加载时直接请求数据)                                                                                                    }
  }
     */
    Config: string;
    /**
     * 是否必填 (0 -- 否   1-- 是)
     */
    Required: number;
    /**
     * compute配置依赖的其他field满足的条件时通过校验（如：三个表单项中必须至少有一个填写了）
  
  [fieldName,
  
  { config:  此项保留，等待后面具体场景细化  }
  
  ]
     */
    Validate: string;
    /**
     * 是否可见
     */
    Visible: string;
}
/**
 * 任务分组动作
 */
export interface TemplateGroupAction {
    /**
     * 经验库分组动作ID
     */
    TemplateGroupActionId: number;
    /**
     * 动作ID
     */
    ActionId: number;
    /**
     * 分组动作顺序
     */
    Order: number;
    /**
     * 分组动作通用配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GeneralConfiguration: string;
    /**
     * 分组动作自定义配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomConfiguration: string;
    /**
     * 动作分组创建时间
     */
    CreateTime: string;
    /**
     * 动作分组更新时间
     */
    UpdateTime: string;
    /**
     * 动作名称
     */
    ActionTitle: string;
    /**
     * 自身随机id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RandomId: number;
    /**
     * 恢复动作id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverId: number;
    /**
     * 执行动作id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecuteId: number;
    /**
     * 调用api类型，0:tat, 1:云api
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionApiType?: number;
    /**
     * 1:故障，2:恢复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionAttribute?: number;
    /**
     * 动作类型：平台和自定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 动作风险等级，1:低风险 2:中风险 3:高风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionRisk?: string;
    /**
     * 故障表现
     */
    FailurePerformance?: string;
}
/**
 * 经验库
 */
export interface Template {
    /**
     * 经验库ID
     */
    TemplateId?: number;
    /**
     * 经验库标题
     */
    TemplateTitle?: string;
    /**
     * 经验库描述
     */
    TemplateDescription?: string;
    /**
     * 自定义标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateTag?: string;
    /**
     * 使用状态。1 ---- 使用中，2 --- 停用
     */
    TemplateIsUsed?: number;
    /**
     * 经验库创建时间
     */
    TemplateCreateTime?: string;
    /**
     * 经验库更新时间
     */
    TemplateUpdateTime?: string;
    /**
     * 经验库模式。1:手工执行，2:自动执行
     */
    TemplateMode?: number;
    /**
     * 自动暂停时长。单位分钟
     */
    TemplatePauseDuration?: number;
    /**
     * 演练创建者Uin
     */
    TemplateOwnerUin?: string;
    /**
     * 地域ID
     */
    TemplateRegionId?: number;
    /**
     * 动作组
     */
    TemplateGroups?: Array<TemplateGroup>;
    /**
     * 监控指标
     */
    TemplateMonitors?: Array<TemplateMonitor>;
    /**
     * 护栏监控
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplatePolicy?: TemplatePolicy;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<TagWithDescribe>;
    /**
     * 经验来源 0-自建 1-专家推荐
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateSource?: number;
    /**
     * apm应用信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApmServiceList?: Array<ApmServiceInfo>;
    /**
     * 告警指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmPolicy?: Array<string>;
    /**
     * 护栏处理方式，1--顺序回滚，2--演练暂停
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDealType?: number;
}
/**
 * DescribeObjectTypeList返回参数结构体
 */
export interface DescribeObjectTypeListResponse {
    /**
     * 对象类型列表
     */
    ObjectTypeList?: Array<ObjectType>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskExecuteLogs请求参数结构体
 */
export interface DescribeTaskExecuteLogsRequest {
    /**
     * 任务ID
     */
    TaskId: number;
    /**
     * 返回的内容行数
     */
    Limit: number;
    /**
     * 日志起始的行数。
     */
    Offset: number;
}
/**
 * ModifyTaskRunStatus请求参数结构体
 */
export interface ModifyTaskRunStatusRequest {
    /**
     * 任务ID
     */
    TaskId: number;
    /**
     * 任务状态, 1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束
     */
    Status: number;
    /**
     * 执行结果是否符合预期（当前扭转状态为执行结束时，需要必传此字段）
     */
    IsExpect?: boolean;
    /**
     * 演习结论（当演习状态转变为执行结束时，需要填写此字段）
     */
    Summary?: string;
    /**
     * 问题以及改进
     */
    Issue?: string;
    /**
     * 演练记录
     */
    Record?: string;
}
/**
 * DescribeTemplate返回参数结构体
 */
export interface DescribeTemplateResponse {
    /**
     * 经验库详情
     */
    Template?: Template;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询-保护策略
 */
export interface DescribePolicy {
    /**
     * 保护策略ID列表
     */
    TaskPolicyIdList: Array<string>;
    /**
     * 保护策略状态
     */
    TaskPolicyStatus: string;
    /**
     * 策略规则
     */
    TaskPolicyRule: string;
    /**
     * 护栏策略生效处理策略 1:顺序执行，2:暂停
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPolicyDealType: number;
}
/**
 * 动作库筛选栏位
 */
export interface ActionFilter {
    /**
     * 关键字
     */
    Keyword: string;
    /**
     * 搜索内容值
     */
    Values: Array<string>;
}
/**
 * 护栏策略触发日志
 */
export interface PolicyTriggerLog {
    /**
     * 演练ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: number;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 类型，0--触发，1--恢复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: number;
    /**
     * 内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
    /**
     * 触发时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatTime?: string;
}
/**
 * ModifyTaskRunStatus返回参数结构体
 */
export interface ModifyTaskRunStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplate请求参数结构体
 */
export interface DescribeTemplateRequest {
    /**
     * 经验库ID
     */
    TemplateId: number;
}
/**
 * ExecuteTaskInstance请求参数结构体
 */
export interface ExecuteTaskInstanceRequest {
    /**
     * 任务ID
     */
    TaskId: number;
    /**
     * 任务动作ID
     */
    TaskActionId: number;
    /**
     * 任务动作实例ID
     */
    TaskInstanceIds: Array<number | bigint>;
    /**
     * 是否操作整个任务
     */
    IsOperateAll: boolean;
    /**
     * 操作类型：（1--启动   2--执行  3--跳过   5--重试）
     */
    ActionType: number;
    /**
     * 动作组ID
     */
    TaskGroupId: number;
}
/**
 * 演练动作组简易配置
 */
export interface TaskGroupForAction {
    /**
     * 动作ID
     */
    TaskActionId?: number;
    /**
     * {"ActionTimeout":1800}
     */
    TaskActionGeneralConfiguration?: string;
    /**
     * {"ip": "0.0.0.0"}
     */
    TaskActionCustomConfiguration?: string;
}
/**
 * ExecuteTask请求参数结构体
 */
export interface ExecuteTaskRequest {
    /**
     * 需要执行的任务ID
     */
    TaskId: number;
}
/**
 * DescribeTaskList返回参数结构体
 */
export interface DescribeTaskListResponse {
    /**
     * 无
     */
    TaskList?: Array<TaskListItem>;
    /**
     * 列表数量
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源下线
 */
export interface ResourceOffline {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: number;
    /**
     * 资源下线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceDeleteTime?: string;
    /**
     * 资源下线提示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceDeleteMessage?: string;
}
/**
 * DescribeTemplateList返回参数结构体
 */
export interface DescribeTemplateListResponse {
    /**
     * 经验库列表
     */
    TemplateList?: Array<TemplateListItem>;
    /**
     * 列表数量
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 监控指标
 */
export interface TaskMonitor {
    /**
     * 演练监控指标ID
     */
    TaskMonitorId: number;
    /**
     * 监控指标ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricId: number;
    /**
     * 监控指标对象类型ID
     */
    TaskMonitorObjectTypeId: number;
    /**
     * 指标名称
     */
    MetricName: string;
    /**
     * 实例ID列表
     */
    InstancesIds: Array<string>;
    /**
     * 中文指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricChineseName: string;
    /**
     * 单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Unit: string;
}
/**
 * DescribeTemplateList请求参数结构体
 */
export interface DescribeTemplateListRequest {
    /**
     * 分页Limit, 最大值100
     */
    Limit: number;
    /**
     * 分页Offset
     */
    Offset: number;
    /**
     * 演练名称
     */
    Title?: string;
    /**
     * 标签键
     */
    Tag?: Array<string>;
    /**
     * 状态，1---使用中， 2---停用
     */
    IsUsed?: number;
    /**
     * 标签对
     */
    Tags?: Array<TagWithDescribe>;
    /**
     * 经验来源 0-自建 1-专家推荐
     */
    TemplateSource?: number;
    /**
     * 经验ID
     */
    TemplateIdList?: Array<number | bigint>;
    /**
     * 过滤参数
     */
    Filters?: Array<ActionFilter>;
}
/**
 * 展示标签列表
 */
export interface TagWithDescribe {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue: string;
}
/**
 * DescribeObjectTypeList请求参数结构体
 */
export interface DescribeObjectTypeListRequest {
    /**
     * 所支持的对象
  0：全平台产品
  1：平台接入的对象
  2：应用所支持的部分对象
     */
    SupportType?: number;
}
/**
 * DescribeTaskPolicyTriggerLog返回参数结构体
 */
export interface DescribeTaskPolicyTriggerLogResponse {
    /**
     * 触发日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerLogs?: Array<PolicyTriggerLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskFromTemplate返回参数结构体
 */
export interface CreateTaskFromTemplateResponse {
    /**
     * 创建成功的演练ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 对象类型
 */
export interface ObjectType {
    /**
     * 对象类型ID
     */
    ObjectTypeId?: number;
    /**
     * 对象类型名称
     */
    ObjectTypeTitle?: string;
    /**
     * 对象类型第一级
     */
    ObjectTypeLevelOne?: string;
    /**
     * 对象类型参数
     */
    ObjectTypeParams?: ObjectTypeConfig;
    /**
     * tke接口json解析规则，null不需要解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectTypeJsonParse?: ObjectTypeJsonParse;
    /**
     * 是否包含新动作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectHasNewAction?: boolean;
    /**
     * 对应在平台架构图中的资源类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectPlatformName?: string;
    /**
     * 1：平台支持的对象 2：应用支持的部分对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectSupportType?: number;
    /**
     * 1.接入层 2.逻辑层 3. 数据层
     */
    ArchLayer?: number;
}
/**
 * DescribeTaskPolicyTriggerLog请求参数结构体
 */
export interface DescribeTaskPolicyTriggerLogRequest {
    /**
     * 演练ID
     */
    TaskId: number;
    /**
     * 页码
     */
    Page: number;
    /**
     * 页数量
     */
    PageSize: number;
}
/**
 * 任务
 */
export interface Task {
    /**
     * 任务ID
     */
    TaskId: number;
    /**
     * 任务标题
     */
    TaskTitle: string;
    /**
     * 任务描述
     */
    TaskDescription: string;
    /**
     * 自定义标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTag: string;
    /**
     * 任务状态，1001--未开始  1002--进行中（执行）1003--进行中（暂停）1004--执行结束
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus: number;
    /**
     * 任务结束状态，表明任务以何种状态结束: 0 -- 尚未结束，1 -- 成功，2-- 失败，3--终止
     */
    TaskStatusType: number;
    /**
     * 保护策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskProtectStrategy: string;
    /**
     * 任务创建时间
     */
    TaskCreateTime: string;
    /**
     * 任务更新时间
     */
    TaskUpdateTime: string;
    /**
     * 任务动作组
     */
    TaskGroups: Array<TaskGroup>;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStartTime: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskEndTime: string;
    /**
     * 是否符合预期。1：符合预期，2：不符合预期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExpect: number;
    /**
     * 演习记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskSummary: string;
    /**
     * 任务模式。1:手工执行，2:自动执行
     */
    TaskMode: number;
    /**
     * 自动暂停时长。单位分钟
     */
    TaskPauseDuration: number;
    /**
     * 演练创建者Uin
     */
    TaskOwnerUin: string;
    /**
     * 地域ID
     */
    TaskRegionId: number;
    /**
     * 监控指标列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskMonitors: Array<TaskMonitor>;
    /**
     * 保护策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPolicy: DescribePolicy;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<TagWithDescribe>;
    /**
     * 关联的演练计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPlanId?: number;
    /**
     * 关联的演练计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPlanTitle?: string;
    /**
     * 关联的应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 关联的应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 关联的告警指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmPolicy?: Array<string>;
    /**
     * 关联的APM服务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApmServiceList?: Array<ApmServiceInfo>;
    /**
     * 关联的隐患验证项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyId?: number;
    /**
     * 护栏处理方式，1--顺序回滚，2--演练暂停
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDealType?: number;
    /**
     * 计划开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPlanStartTime?: string;
    /**
     * 计划结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPlanEndTime?: string;
    /**
     * 人员组织
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskOrg?: Array<TaskOrg>;
    /**
     * 问题和改进
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskIssue?: string;
    /**
     * region信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskRegionName?: string;
}
/**
 * 演练人员组织
 */
export interface TaskOrg {
    /**
     * 演练角色
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskRole?: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskOperator?: string;
}
/**
 * 演练报告状态信息
 */
export interface TaskReportInfo {
    /**
     * 0--未开始，1--正在导出，2--导出成功，3--导出失败
     */
    Stage?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 有效期截止时间
     */
    ExpirationTime?: string;
    /**
     * 是否有效
     */
    Expired?: boolean;
    /**
     * 演练报告cos文件地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosUrl?: string;
    /**
     * 演练报告导出日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Log?: string;
    /**
     * 0--未开始，1--正在归档，2--归档成功，3--归档失败
     */
    ArchiveStage?: number;
    /**
     * 归档时间
     */
    ArchiveTime?: string;
    /**
     * 归档ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ArchiveUuid?: string;
}
/**
 * CreateTaskFromTemplate请求参数结构体
 */
export interface CreateTaskFromTemplateRequest {
    /**
     * 从经验库中查询到的经验模板ID
     */
    TemplateId: number;
    /**
     * 演练的配置参数
     */
    TaskConfig: TaskConfig;
}
/**
 * CreateTaskFromMultiAction请求参数结构体
 */
export interface CreateTaskFromMultiActionRequest {
    /**
     * 参与演练的实例ID
  CVM ins-xxx
  MySQL cdb-xxx
  CLB lb-xxx
  Redis crs-xxx
  NAT网关 nat-xxx
  Redis crs-xxx
  专线-独享专用通道 dcx-xxx
  标准集群普通节点 {"ClusterId":"cls-xxx","InstanceId":"ins-xxx","LanIP":"1.1.1.1"}
  标准集群Pod {"ClusterId":"cls-xxx","PodName":"podname","NodeName":"1.1.1.1","NameSpace":"ns","Workload":"workload"}
  TDSQL-MySQL(InnoDB) tdsqlshard-xxx
  TDSQL-C cynosdbmysql-xxx
  VPC子网 subnet-xxxx
  CKafka ckafka-xxx
  MariaDB tdsql-xxxx
  PostgreSQL postgres-xxx
  云原生网关 gateway-xxx
  标准集群超级节点 {"ClusterId":"cls-xxx","InstanceId":"eklet-xxx","LanIP":"1.1.1.1,"NodePoolId":"np-xxx"}
  Serverless集群超级节点 {"ClusterId":"cls-xxxx","InstanceId":"eklet-xxxx","LanIP":"1.1.1.1"}
  Elasticsearch集群 es-xxxx
  RabbitMQ amqp-xxxx
     */
    TaskInstances: Array<string>;
    /**
     * 演练名称，不填则默认取动作名称
     */
    TaskTitle?: string;
    /**
     * 演练描述，不填则默认取动作描述
     */
    TaskDescription?: string;
    /**
     * 演练自动暂停时间，单位分钟, 不填则默认为60
     */
    TaskPauseDuration?: number;
    /**
     * 演练动作组配置
     */
    TaskAction?: Array<TaskGroupForAction>;
}
/**
 * TriggerPolicy请求参数结构体
 */
export interface TriggerPolicyRequest {
    /**
     * 混沌演练ID
  
     */
    TaskId: number;
    /**
     * 名称
     */
    Name: string;
    /**
     * 触发内容
     */
    Content: string;
    /**
     * 触发类型，0--触发；1--恢复
     */
    TriggerType: number;
}
/**
 * 从经验模板创建演练时需要配置的任务参数
 */
export interface TaskConfig {
    /**
     * 动作组配置，需要保证配置个数和经验中的动作组个数一致
     */
    TaskGroupsConfig: Array<TaskGroupConfig>;
    /**
     * 更改后的演练名称，不填则默认取经验名称
     */
    TaskTitle?: string;
    /**
     * 更改后的演练描述，不填则默认取经验描述
     */
    TaskDescription?: string;
    /**
     * 演练执行模式：1----手工执行/ 2 ---自动执行，不填则默认取经验执行模式
     */
    TaskMode?: number;
    /**
     * 演练自动暂停时间，单位分钟, 不填则默认取经验自动暂停时间
     */
    TaskPauseDuration?: number;
    /**
     * 演练标签信息，不填则默认取经验标签
     */
    Tags?: Array<TagWithCreate>;
    /**
     * 护栏处理方式，1--顺序回滚，2--演练暂停
     */
    PolicyDealType?: number;
}
/**
 * TriggerPolicy返回参数结构体
 */
export interface TriggerPolicyResponse {
    /**
     * 演练ID
     */
    TaskId?: number;
    /**
     * 是否触发成功
     */
    Success?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskList请求参数结构体
 */
export interface DescribeTaskListRequest {
    /**
     * 分页Limit
     */
    Limit: number;
    /**
     * 分页Offset
     */
    Offset: number;
    /**
     * 演练名称
     */
    TaskTitle?: string;
    /**
     * 标签键
     */
    TaskTag?: Array<string>;
    /**
     * 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束)
     */
    TaskStatus?: number;
    /**
     * 开始时间，固定格式%Y-%m-%d %H:%M:%S
     */
    TaskStartTime?: string;
    /**
     * 结束时间，固定格式%Y-%m-%d %H:%M:%S
     */
    TaskEndTime?: string;
    /**
     * 更新时间，固定格式%Y-%m-%d %H:%M:%S
     */
    TaskUpdateTime?: string;
    /**
     * 标签对
     */
    Tags?: Array<TagWithDescribe>;
    /**
     * 筛选条件
     */
    Filters?: Array<ActionFilter>;
    /**
     * 演练ID
     */
    TaskId?: Array<number | bigint>;
    /**
     * 关联应用ID筛选
     */
    ApplicationId?: Array<string>;
    /**
     * 关联应用筛选
     */
    ApplicationName?: Array<string>;
    /**
     * 任务状态筛选--支持多选 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束)
     */
    TaskStatusList?: Array<number | bigint>;
    /**
     * 架构ID
     */
    ArchId?: string;
    /**
     * 架构名称
     */
    ArchName?: string;
}
/**
 * DescribeActionLibraryList返回参数结构体
 */
export interface DescribeActionLibraryListResponse {
    /**
     * 查询结果列表
     */
    Results?: Array<ActionLibraryListResult>;
    /**
     * 符合记录条数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标准pod对象类型下拉数据的解析
 */
export interface ObjectTypeJsonParse {
    /**
     * 命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameSpace?: string;
    /**
     * 工作负载名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkloadName?: string;
    /**
     * 节点IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanIP?: string;
    /**
     * 节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
}
/**
 * 任务列表信息
 */
export interface TaskListItem {
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 任务标题
     */
    TaskTitle?: string;
    /**
     * 任务描述
     */
    TaskDescription?: string;
    /**
     * 任务标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTag?: string;
    /**
     * 任务状态(1001 -- 未开始   1002 -- 进行中  1003 -- 暂停中   1004 -- 任务结束)
     */
    TaskStatus?: number;
    /**
     * 任务创建时间
     */
    TaskCreateTime?: string;
    /**
     * 任务更新时间
     */
    TaskUpdateTime?: string;
    /**
     * 0--未开始，1--进行中，2--已完成
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPreCheckStatus?: number;
    /**
     * 环境检查是否通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskPreCheckSuccess?: boolean;
    /**
     * 演练是否符合预期 1-符合预期 2-不符合预期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExpect?: number;
    /**
     * 关联应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 关联应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 验证项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyId?: number;
    /**
     * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatusType?: number;
    /**
     * 架构ID
     */
    ArchId?: string;
    /**
     * 架构名称
     */
    ArchName?: string;
}
/**
 * ExecuteTaskInstance返回参数结构体
 */
export interface ExecuteTaskInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskExecuteLogs返回参数结构体
 */
export interface DescribeTaskExecuteLogsResponse {
    /**
     * 日志数据
     */
    LogMessage?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 动作组的配置项
 */
export interface TaskGroupConfig {
    /**
     * 动作组所关联的实例对象
  CVM ins-xxx
  MySQL cdb-xxx
  CLB lb-xxx
  Redis crs-xxx
  NAT网关 nat-xxx
  专线-独享专用通道 dcx-xxx
  标准集群普通节点 {"ClusterId":"cls-xxx","InstanceId":"ins-xxx","LanIP":"1.1.1.1"}
  标准集群Pod {"ClusterId":"cls-xxx","PodName":"podname","NodeName":"1.1.1.1","NameSpace":"ns","Workload":"workload"}
  TDSQL-MySQL(InnoDB) tdsqlshard-xxx
  TDSQL-C cynosdbmysql-xxx
  VPC子网 subnet-xxxx
  CKafka ckafka-xxx
  MariaDB tdsql-xxxx
  PostgreSQL postgres-xxx
  云原生网关 gateway-xxx
  标准集群超级节点 {"ClusterId":"cls-xxx","InstanceId":"eklet-xxx","LanIP":"1.1.1.1,"NodePoolId":"np-xxx"}
  Serverless集群超级节点 {"ClusterId":"cls-xxxx","InstanceId":"eklet-xxxx","LanIP":"1.1.1.1"}
  Elasticsearch集群 es-xxxx
  RabbitMQ amqp-xxxx
     */
    TaskGroupInstances: Array<string>;
    /**
     * 动作组标题，不填默认取经验中的动作组名称
     */
    TaskGroupTitle?: string;
    /**
     * 动作组描述，不填默认取经验中的动作组描述
     */
    TaskGroupDescription?: string;
    /**
     * 动作执行模式。1 --- 顺序执行，2 --- 阶段执行, 不填默认取经验中的动作组执行模式
     */
    TaskGroupMode?: number;
    /**
     * 动作组中的动作参数，不填默认使用经验中的动作参数，配置时可以只指定想要修改参数的动作
     */
    TaskGroupActionsConfig?: Array<TaskGroupActionConfig>;
}
/**
 * 监控指标
 */
export interface TemplateMonitor {
    /**
     * pk
     */
    MonitorId?: number;
    /**
     * 监控指标ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricId?: number;
    /**
     * 监控指标对象类型ID
     */
    ObjectTypeId?: number;
    /**
     * 指标名称
     */
    MetricName?: string;
    /**
     * 中文指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricChineseName?: string;
}
/**
 * 任务分组
 */
export interface TemplateGroup {
    /**
     * 经验库动作ID
     */
    TemplateGroupId: number;
    /**
     * 经验库动作分组动作列表
     */
    TemplateGroupActions: Array<TemplateGroupAction>;
    /**
     * 分组标题
     */
    Title: string;
    /**
     * 分组描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 分组顺序
     */
    Order: number;
    /**
     * 执行模式。1 --- 顺序执行，2 --- 阶段执行
     */
    Mode: number;
    /**
     * 对象类型ID
     */
    ObjectTypeId: number;
    /**
     * 分组创建时间
     */
    CreateTime: string;
    /**
     * 分组更新时间
     */
    UpdateTime: string;
}
/**
 * 保护策略
 */
export interface TemplatePolicy {
    /**
     * 保护策略ID列表
     */
    TemplatePolicyIdList: Array<string>;
    /**
     * 策略规则
     */
    TemplatePolicyRule: string;
    /**
     * 护栏策略生效处理策略 1:顺序执行，2:暂停
     */
    TemplatePolicyDealType: number;
}
/**
 * 任务分组动作实例
 */
export interface TaskGroupInstance {
    /**
     * 实例ID
     */
    TaskGroupInstanceId: number;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstanceObjectId: string;
    /**
     * 实例动作执行状态
     */
    TaskGroupInstanceStatus: number;
    /**
     * 实例创建时间
     */
    TaskGroupInstanceCreateTime: string;
    /**
     * 实例更新时间
     */
    TaskGroupInstanceUpdateTime: string;
    /**
     * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
     */
    TaskGroupInstanceStatusType: number;
    /**
     * 执行开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstanceStartTime: string;
    /**
     * 执行结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstanceEndTime: string;
    /**
     * 实例动作执行日志
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    TaskGroupInstanceExecuteLog?: string;
    /**
     * 实例是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstanceIsRedo?: boolean;
    /**
     * 动作实例执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupInstanceExecuteTime?: number;
}
/**
 * 动作栏位配置结果
 */
export interface ActionFieldConfigResult {
    /**
     * 动作ID
     */
    ActionId: number;
    /**
     * 动作名称
     */
    ActionName: string;
    /**
     * 动作对应的栏位配置详情
     */
    ConfigDetail: Array<ActionFieldConfigDetail>;
}
/**
 * 动作组中的动作参数
 */
export interface TaskGroupActionConfig {
    /**
     * 该动作在动作组中的顺序，从1开始，不填或填错将匹配不到经验中要修改参数的动作
     */
    TaskGroupActionOrder?: number;
    /**
     * 动作通用参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
     */
    TaskGroupActionGeneralConfiguration?: string;
    /**
     * 动作自定义参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
     */
    TaskGroupActionCustomConfiguration?: string;
}
/**
 * 动作库数据列表
 */
export interface ActionLibraryListResult {
    /**
     * 动作名称
     */
    ActionName?: string;
    /**
     * 动作描述
     */
    Desc?: string;
    /**
     * 动作类型。范围：["平台","自定义"]
     */
    ActionType?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 创建人
     */
    Creator?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 动作风险描述
     */
    RiskDesc?: string;
    /**
     * 动作ID
     */
    ActionId?: number;
    /**
     * 动作属性（ 1：故障  2：恢复）
     */
    AttributeId?: number;
    /**
     * 关联的动作ID
     */
    RelationActionId?: number;
    /**
     * 操作命令
     */
    ActionCommand?: string;
    /**
     * 动作类型（0 -- tat   1 -- 云API）
     */
    ActionCommandType?: number;
    /**
     * 自定义动作的参数，json string
     */
    ActionContent?: string;
    /**
     * 二级分类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 动作描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionDetail?: string;
    /**
     * 是否允许当前账号使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAllowed?: boolean;
    /**
     * 最佳实践案例的链接地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionBestCase?: string;
    /**
     * 对象类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectType?: string;
    /**
     * 监控指标ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricIdList?: Array<number | bigint>;
    /**
     * 是否是新动作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAction?: boolean;
    /**
     * 对象类型ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectTypeId?: number;
}
/**
 * CreateTaskFromMultiAction返回参数结构体
 */
export interface CreateTaskFromMultiActionResponse {
    /**
     * 创建成功的演练ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
    /**
     * 任务信息
     */
    Task?: Task;
    /**
     * 任务对应的演练报告信息，null表示未导出报告
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportInfo?: TaskReportInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskFromAction返回参数结构体
 */
export interface CreateTaskFromActionResponse {
    /**
     * 创建成功的演练ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 经验库列表信息
 */
export interface TemplateListItem {
    /**
     * 经验库ID
     */
    TemplateId?: number;
    /**
     * 经验库标题
     */
    TemplateTitle?: string;
    /**
     * 经验库描述
     */
    TemplateDescription?: string;
    /**
     * 经验库标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateTag?: string;
    /**
     * 经验库状态。1 -- 使用中，2 -- 停用
     */
    TemplateIsUsed?: number;
    /**
     * 经验库创建时间
     */
    TemplateCreateTime?: string;
    /**
     * 经验库更新时间
     */
    TemplateUpdateTime?: string;
    /**
     * 经验库关联的任务数量
     */
    TemplateUsedNum?: number;
    /**
     * 经验库来源 0-自建经验 1-专家推荐
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateSource?: number;
}
/**
 * 用于传入创建、编辑标签
 */
export interface TagWithCreate {
    /**
     * 标签键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey: string;
    /**
     * 标签值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue: string;
}
/**
 * 对象类型字段类型
 */
export interface ObjectTypeConfigFields {
    /**
     * instanceId
     */
    Key: string;
    /**
     * 实例id
     */
    Header: string;
    /**
     * 字段值是否需要转译，当不需要转译时，此字段返回null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Transfer?: string;
    /**
     * tke的pod字段信息解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JsonParse?: string;
    /**
     * 字段类型 0:str 1:list
     */
    Type?: number;
}
/**
 * 对象类型配置
 */
export interface ObjectTypeConfig {
    /**
     * 主键
     */
    Key: string;
    /**
     * 对象类型配置字段列表
     */
    Fields: Array<ObjectTypeConfigFields>;
}
