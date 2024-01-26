/**
 * CreateRuleTemplate返回参数结构体
 */
export interface CreateRuleTemplateResponse {
    /**
     * 模板Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务信息，携带了实例时间
 */
export interface TaskInfoWithInstance {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 实例时间列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceRunDateList?: Array<string>;
    /**
     * 实例个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 调度描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDescription?: string;
}
/**
 * DescribeDsEventListener返回参数结构体
 */
export interface DescribeDsEventListenerResponse {
    /**
     * 事件监听者信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventListenerDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBaselineAlarmStatus请求参数结构体
 */
export interface ModifyBaselineAlarmStatusRequest {
    /**
     * 是否告警. 取值范围:
  - true: 开启告警;
  - false: 关闭告警
     */
    IsAlarm: string;
    /**
     * 基线实例id
     */
    Id: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeScheduleInstance返回参数结构体
 */
export interface DescribeScheduleInstanceResponse {
    /**
     * 基线实例中的调度任务实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: InstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流调度信息
 */
export interface WorkflowScheduleDtoDs {
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 延迟时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 任务依赖
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 指定运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 调度周期时间单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 调度周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * Cron表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 实例初始化策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 工作流依赖
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 工作流首次提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime?: string;
    /**
     * 工作流最近提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestSubmitTime?: string;
}
/**
 * DescribeInstanceLogs请求参数结构体
 */
export interface DescribeInstanceLogsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
}
/**
 * 工作流信息
 */
export interface Workflow {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner: string;
    /**
     * 责任人Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 项目标识
     */
    ProjectIdent: string;
    /**
     * 项目名称
     */
    ProjectName: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowDesc: string;
    /**
     * 工作流名称
     */
    WorkflowName: string;
    /**
     * 所属文件夹id
     */
    FolderId: string;
    /**
     * 工作流所属用户分组id 若有多个,分号隔开: a;b;c
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupId: string;
    /**
     * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupName: string;
}
/**
 * CreateDataSource请求参数结构体
 */
export interface CreateDataSourceRequest {
    /**
     * 数据源名称，在相同SpaceName下，数据源名称不能为空
     */
    Name: string;
    /**
     * 数据源类别：绑定引擎、绑定数据库
     */
    Category: string;
    /**
     * 数据源类型:枚举值
     */
    Type: string;
    /**
     * 归属项目ID
     */
    OwnerProjectId: string;
    /**
     * 归属项目Name
     */
    OwnerProjectName: string;
    /**
     * 归属项目Name中文
     */
    OwnerProjectIdent: string;
    /**
     * 业务侧数据源的配置信息扩展
     */
    BizParams?: string;
    /**
     * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
     */
    Params?: string;
    /**
     * 数据源描述信息
     */
    Description?: string;
    /**
     * 数据源展示名，为了可视化查看
     */
    Display?: string;
    /**
     * 若数据源列表为绑定数据库，则为db名称
     */
    DatabaseName?: string;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
     */
    Instance?: string;
    /**
     * 数据源数据源的可见性，1为可见、0为不可见。默认为1
     */
    Status?: number;
    /**
     * 数据源所属的业务空间名称
     */
    ClusterId?: string;
    /**
     * 是否采集
     */
    Collect?: string;
    /**
     * cos桶信息
     */
    COSBucket?: string;
    /**
     * cos region
     */
    COSRegion?: string;
    /**
     * 连接测试结果
     */
    ConnectResult?: string;
}
/**
 * DescribeChildrenDs返回参数结构体
 */
export interface DescribeChildrenDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIntegrationNode返回参数结构体
 */
export interface CreateIntegrationNodeResponse {
    /**
     * 节点
     */
    Id?: string;
    /**
     * 当前任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProjectParamVersionDs返回参数结构体
 */
export interface DeleteProjectParamVersionDsResponse {
    /**
     * 结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttributeItemVO参数
 */
export interface AttributeItemVO {
    /**
     * Key值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * Value值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * 任务参数Dto
 */
export interface ParameterTaskDsDto {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 参数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamKey?: string;
    /**
     * 参数定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDefine?: string;
    /**
     * 参数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamValue?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * DescribeDsEvent返回参数结构体
 */
export interface DescribeDsEventResponse {
    /**
     * 事件数据
     */
    Data?: CollectionEventDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 血缘字段信息
 */
export interface ColumnLineageInfo {
    /**
     * 血缘id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: string;
    /**
     * 表ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName?: string;
    /**
     * 字段中文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnNameCn?: string;
    /**
     * 字段类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnType?: string;
    /**
     * 关系参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelationParams?: string;
    /**
     * 参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: string;
    /**
     * 父id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 元数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType?: string;
    /**
     * 元数据类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreTypeName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 字段全名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualifiedName?: string;
    /**
     * 下游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownStreamCount?: number;
    /**
     * 上游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpStreamCount?: number;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 由中心节点出发的路径信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrefixPath?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 任务id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
    /**
     * 父节点列表字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentSet?: string;
    /**
     * 子节点列表字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildSet?: string;
    /**
     * 额外参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtParams?: Array<LineageParamRecord>;
}
/**
 * DescribeTableMetas请求参数结构体
 */
export interface DescribeTableMetasRequest {
    /**
     * 分页页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤字段
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
}
/**
 * 规则执行结果详情
 */
export interface RuleExecResultDetail {
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: number;
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据库guid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 表guid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 规则执行记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleExecResult?: RuleExecResult;
    /**
     * 表负责人userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerUserId?: number;
    /**
     * 2.HIVE 3.DLC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: number;
}
/**
 * 任务分页查询
 */
export interface OpsTaskInfoPage {
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 任务列表信息
     */
    Items: Array<TaskOpsDto>;
    /**
     * 总页数
     */
    TotalPage: number;
    /**
     * 页数
     */
    PageCount?: number;
    /**
     * 总条数
     */
    TotalCount?: number;
}
/**
 * DescribeSqlTaskResult请求参数结构体
 */
export interface DescribeSqlTaskResultRequest {
    /**
     * SQL任务Id
     */
    DetailId: number;
}
/**
 * 事件导出结果
 */
export interface ExportEventDTO {
    /**
     * cos文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPath?: string;
    /**
     * 桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucketName?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 前端下载token token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
    /**
     * secretId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * secretKey
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKey?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: number;
}
/**
 * 跨工作流任务(虚拟任务)基本信息
 */
export interface VirtualTaskInfo {
    /**
     * 跨工作流任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 责任人UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
    /**
     * 所属项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 跨工作流任务引用的原始任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
}
/**
 * MakeUpTasksByWorkflow请求参数结构体
 */
export interface MakeUpTasksByWorkflowRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 补数据开始时间 格式：2023-03-02 15:00:00
     */
    StartTime: string;
    /**
     * 补数据结束时间 格式：2023-03-03 15:00:00
     */
    EndTime: string;
}
/**
 * SubmitPySparkTask返回参数结构体
 */
export interface SubmitPySparkTaskResponse {
    /**
     * 任务提交记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Record?: AdhocRecord;
    /**
     * 子任务记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Details?: Array<AdhocDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MakeUpTasksByWorkflow返回参数结构体
 */
export interface MakeUpTasksByWorkflowResponse {
    /**
     * 补数据结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 告警事件详情
 */
export interface AlarmEventInfo {
    /**
     * 告警ID
     */
    AlarmId: string;
    /**
     * 告警时间
     */
    AlarmTime: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 规则名称
     */
    RegularName: string;
    /**
     * 告警级别,0表示普通，1表示重要，2表示紧急
     */
    AlarmLevel: number;
    /**
     * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
     */
    AlarmWay: number;
    /**
     * 告警接收人Id，多个用逗号隔开
     */
    AlarmRecipientId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
     */
    AlarmIndicator?: number;
    /**
     * 告警指标描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicatorDesc?: string;
    /**
     * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: number;
    /**
     * 预计的超时时间，分钟级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedTime?: number;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 0：部分成功，1：全部成功，2：全部失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsSendSuccess?: number;
    /**
     * 消息ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MessageId?: string;
    /**
     * 阈值计算算子，1 : 大于 2 ：小于
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: number;
    /**
     * 告警规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegularId?: string;
    /**
     * 告警接收人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientName?: string;
    /**
     * 告警任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: number;
    /**
     * 发送结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SendResult?: string;
    /**
     * 监控对象id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorObjectId?: string;
    /**
     * 监控对象名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorObjectName?: string;
    /**
     * 指标阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Threshold?: number;
}
/**
 * DescribeFunctionKinds请求参数结构体
 */
export declare type DescribeFunctionKindsRequest = null;
/**
 * 代码搜索审计信息
 */
export interface CodeSearchAuditInfo {
    /**
     * 唯一ID
     */
    Id: number;
    /**
     * 项目ID
     */
    ProjectId: number;
    /**
     * 关键词
     */
    Keyword: string;
}
/**
 * DescribeIntegrationStatisticsRecordsTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
}
/**
 * DescribeOperateTasks请求参数结构体
 */
export interface DescribeOperateTasksRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 文件夹id，多个文件夹以逗号分隔
     */
    FolderIdList?: string;
    /**
     * 工作流id，多个工作流id之间以英文字符逗号分隔
     */
    WorkFlowIdList?: string;
    /**
     * 工作流名称，多个工作流名称之间以英文字符逗号分隔
     */
    WorkFlowNameList?: string;
    /**
     * 任务名称，多个任务名称之间以英文字符逗号分隔
     */
    TaskNameList?: string;
    /**
     * 任务id，多个任务id之间以英文字符逗号分隔
     */
    TaskIdList?: string;
    /**
     * 页号
     */
    PageNumber?: string;
    /**
     * 分页大小
     */
    PageSize?: string;
    /**
     * 排序字段，支持字段为FirstSubmitTime和FirstRunTime，标识最近提交和首次执行事件
     */
    SortItem?: string;
    /**
     * 排序类型。两种取值 DESC、ASC
     */
    SortType?: string;
    /**
     * 责任人，多个责任人之间以英文字符逗号分隔
     */
    InChargeList?: string;
    /**
     * 任务类型Id字符串，多个任务类型id之间以英文字符逗号分隔
     */
    TaskTypeIdList?: string;
    /**
     * 任务状态字符串，多个任务状态之间以英文字符逗号分隔
     */
    StatusList?: string;
    /**
     * 任务周期类型字符串，多个任务周期之间以英文字符逗号分隔
     */
    TaskCycleUnitList?: string;
    /**
     * 任务所属产品类型
     */
    ProductNameList?: string;
    /**
     * 数据源id或（仅针对离线同步任务）来源数据源id
     */
    SourceServiceId?: string;
    /**
     * 数据源类型或（仅针对离线同步任务）来源数据源类型
     */
    SourceServiceType?: string;
    /**
     * （仅针对离线同步任务）目标数据源id
     */
    TargetServiceId?: string;
    /**
     * （仅针对离线同步任务）目标数据源类型
     */
    TargetServiceType?: string;
    /**
     * 告警类型，多个类型以逗号分隔
     */
    AlarmType?: string;
}
/**
 * SubmitTaskTestRun返回参数结构体
 */
export interface SubmitTaskTestRunResponse {
    /**
     * 提交运行jobid
     */
    JobId?: number;
    /**
     * 运行记录id
     */
    RecordId?: Array<number | bigint>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RegisterEventListener返回参数结构体
 */
export interface RegisterEventListenerResponse {
    /**
     * 成功或者失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: BatchReturn;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务类型map
 */
export interface TaskTypeMap {
    /**
     * key
     */
    Key?: number;
    /**
     * value
     */
    Value?: string;
}
/**
 * DescribeStandardRuleDetailInfoList返回参数结构体
 */
export interface DescribeStandardRuleDetailInfoListResponse {
    /**
     * 返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StandardRuleDetailList: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 事件实例信息
 */
export interface EventCaseDTO {
    /**
     * 事件实例id
     */
    CaseId?: string;
    /**
     * 事件名
     */
    Name?: string;
    /**
     * 事件格式
     */
    Dimension?: string;
    /**
     * 创建时间
     */
    CreationTs?: string;
    /**
     * 消费者id
     */
    ConsumerId?: string;
    /**
     * 描述信息
     */
    Description?: string;
}
/**
 * BatchStopTasksNew请求参数结构体
 */
export interface BatchStopTasksNewRequest {
    /**
     * 批量停止任务的TaskId
     */
    TaskIdList: Array<string>;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * TriggerEvent请求参数结构体
 */
export interface TriggerEventRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 案例名称
     */
    Name: string;
    /**
     * 时间格式：如果选择触发时间：2022年6月21，则设置为20220621
     */
    Dimension: string;
    /**
     * 描述信息
     */
    Description?: string;
}
/**
 * DescribeDependOpsTasks请求参数结构体
 */
export interface DescribeDependOpsTasksRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 上游/下游层级1-6级
     */
    Deep: number;
    /**
     * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
     */
    Up: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务工作流id
     */
    WorkflowId: string;
}
/**
 * 业务需求中，存在临时文件上传和下载，上传文件需要先获取上传必要的信息，如访问秘钥、文件上传到什么位置等，文件下载时也需要知道文件在什么地方下载，下载访问秘钥等，请注意，如果是公有云，共享存储为 COS，如果是私有云，共享存储为 CSP
 */
export interface ShareStorageFileDTO {
    /**
     * 共享存储访问 Token，公有云里面为 Cos 访问 Token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
    /**
     * 共享存储访问 SecretId，公有云里面为 Cos 访问 SecretId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * 共享存储访问 SecretKey，公有云里面为 Cos 访问 SecretKey
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKey?: string;
    /**
     * Token 过期时间，时间戳类型，精确到秒，如果是 -1 则表示没有过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TokenExpiredTime?: number;
    /**
     * Token 创建时间，时间戳类型，精确到秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TokenCreateTime?: number;
    /**
     * 共享存储类型，公有云为 COS，私有化为 CSP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShareStorageType?: string;
    /**
     * 共享存储 EndPoint，公有云可以不使用该值，私有化需要使用该值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShareStorageEndPoint?: string;
    /**
     * 存储桶 Region
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketRegion?: string;
    /**
     * 存储桶名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketName?: string;
    /**
     * 文件映射，导入文件时，可能会存在文件名冲突，WeData 后端会自动校验，如果出现冲突，会基于传入的名称生成新的名称，文件上传到共享存储时请使用新生成的文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileMappings?: Array<ShareStorageFileMappingDTO>;
    /**
     * 文件过期时间，公有云中，默认的过期时间为 15 天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExpireTime?: number;
}
/**
 * CreateProjectParamDs请求参数结构体
 */
export interface CreateProjectParamDsRequest {
    /**
     * 请求结构体
     */
    Request: Array<ParamDsRequest>;
}
/**
 * DescribeScriptsImportTaskType返回参数结构体
 */
export interface DescribeScriptsImportTaskTypeResponse {
    /**
     * 任务类型列表
     */
    Data?: Array<TaskTypeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleGroupSubscription返回参数结构体
 */
export interface DescribeRuleGroupSubscriptionResponse {
    /**
     * 规则组订阅信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: RuleGroupSubscribe;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIntegrationStatisticsTaskStatusTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendsData: Array<IntegrationStatisticsTrendResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSchedulerTaskTypeCnt请求参数结构体
 */
export interface DescribeSchedulerTaskTypeCntRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 1
     */
    InCharge?: string;
}
/**
 * 质量规则执行策略
 */
export interface RuleGroupExecStrategy {
    /**
     * 规则组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType?: number;
    /**
     * 计算队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecQueue?: string;
    /**
     * 执行资源组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupId?: string;
    /**
     * 执行资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupName?: string;
    /**
     * 关联的生产调度任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<ProdSchedulerTask>;
    /**
     * 周期开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 周期结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 调度周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 延迟调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 间隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 时间指定
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecEngineType?: string;
    /**
     * 执行计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecPlan?: string;
    /**
     * 规则id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
}
/**
 * DescribeDependencyTasksForProjectClone请求参数结构体
 */
export interface DescribeDependencyTasksForProjectCloneRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 工作流id列表
     */
    ConfigList: Array<CloneObjectDTO>;
}
/**
 * DownloadSqlResult请求参数结构体
 */
export interface DownloadSqlResultRequest {
    /**
     * SQL任务Id
     */
    DetailId: number;
    /**
     * 下载文件名
     */
    FileName: string;
    /**
     * 字段分隔符
     */
    SeparatorChar?: string;
    /**
     * 必填，否则报错，项目ID
     */
    ProjectId?: string;
}
/**
 * DeleteDsEventListener请求参数结构体
 */
export interface DeleteDsEventListenerRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
    /**
     * 触发类型，REST_API，KAFKA
     */
    Type: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 事件所属项目id
     */
    EventProjectId?: string;
}
/**
 * UploadContent返回参数结构体
 */
export interface UploadContentResponse {
    /**
     * 脚本信息响应
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptInfo?: ScriptInfoResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则模版
 */
export interface RuleTemplate {
    /**
     * 规则模版ID
     */
    RuleTemplateId?: number;
    /**
     * 规则模版名称
     */
    Name?: string;
    /**
     * 规则模版描述
     */
    Description?: string;
    /**
     * 模版类型（1：系统模版，2：自定义）
     */
    Type?: number;
    /**
     * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
     */
    SourceObjectType?: number;
    /**
     * 规则适用的源数据对象类型（1：数值，2：字符串）
     */
    SourceObjectDataType?: number;
    /**
     * 规则模版源侧内容，区分引擎，JSON 结构
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceContent?: string;
    /**
     * 源数据适用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceEngineTypes?: Array<number | bigint>;
    /**
     * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityDim?: number;
    /**
     * 规则支持的比较方式类型（1：固定值比较，大于、小于，大于等于等 2：波动值比较，绝对值、上升、下降）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareType?: number;
    /**
     * 引用次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CitationCount?: number;
    /**
     * 创建人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: number;
    /**
     * 创建人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 更新时间yyyy-MM-dd HH:mm:ss
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 是否添加where参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhereFlag?: boolean;
    /**
     * 是否关联多个库表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MultiSourceFlag?: boolean;
    /**
     * 自定义模板SQL表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SqlExpression?: string;
    /**
     * 模版子维度，0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubQualityDim?: number;
    /**
     * sql表达式解析对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResolvedSqlExpression?: SqlExpression;
    /**
     * 支持的数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceTypes?: Array<number | bigint>;
}
/**
 * DescribeDataBases请求参数结构体
 */
export interface DescribeDataBasesRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 数据源id
     */
    DatasourceId?: string;
    /**
     * 数据源类型
     */
    DsTypes?: Array<number | bigint>;
}
/**
 * DescribeRealTimeTaskMetricOverview返回参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewResponse {
    /**
     * 总读取记录数
     */
    TotalRecordNumOfRead?: number;
    /**
     * 总读取字节数
     */
    TotalRecordByteNumOfRead?: number;
    /**
     * 总写入记录数
     */
    TotalRecordNumOfWrite?: number;
    /**
     * 总写入字节数 单位字节
     */
    TotalRecordByteNumOfWrite?: number;
    /**
     * 总的脏记录数据
     */
    TotalDirtyRecordNum?: number;
    /**
     * 总的脏字节数 单位字节
     */
    TotalDirtyRecordByte?: number;
    /**
     * 运行时长 单位s
     */
    TotalDuration?: number;
    /**
     * 开始运行时间
     */
    BeginRunTime?: string;
    /**
     * 目前运行到的时间
     */
    EndRunTime?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectParamDsPage返回参数结构体
 */
export interface DescribeProjectParamDsPageResponse {
    /**
     * 结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CollectionParamDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskTypeCnt
 */
export interface TaskTypeCnt {
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Number?: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: string;
    /**
     * 类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeName?: string;
}
/**
 * 数据质量规则
 */
export interface Rule {
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 数据表Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * 规则模板Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleTemplateId?: number;
    /**
     * 规则模板概述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleTemplateContent?: string;
    /**
     * 规则所属质量维度 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityDim?: number;
    /**
     * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectType?: number;
    /**
     * 规则适用的源数据对象类型（1：数值，2：字符串）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectDataType?: number;
    /**
     * 源字段详细类型，INT、STRING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectDataTypeName?: string;
    /**
     * 源字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectValue?: string;
    /**
     * 检测范围 1.全表, 2.条件扫描
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionType?: number;
    /**
     * 条件扫描WHERE条件表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionExpression?: string;
    /**
     * 自定义SQL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomSql?: string;
    /**
     * 报警触发条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareRule?: CompareRule;
    /**
     * 报警触发级别 1.低, 2.中, 3.高
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmLevel?: number;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 规则配置人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 目标库Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetDatabaseId?: string;
    /**
     * 目标库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetDatabaseName?: string;
    /**
     * 目标表Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetTableId?: string;
    /**
     * 目标表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetTableName?: string;
    /**
     * 目标字段过滤条件表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetConditionExpr?: string;
    /**
     * 源字段与目标字段关联条件on表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelConditionExpr?: string;
    /**
     * 自定义模版sql表达式参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldConfig?: RuleFieldConfig;
    /**
     * 是否关联多表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MultiSourceFlag?: boolean;
    /**
     * 是否where参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhereFlag?: boolean;
    /**
     * 模版原始SQL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateSql?: string;
    /**
     * 模版子维度：0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubQualityDim?: number;
    /**
     * 规则适用的目标数据对象类型（1：常量，2：离线表级，3：离线字段级别）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectType?: number;
    /**
     * 规则适用的目标数据对象类型（1：数值，2：字符串）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectDataType?: number;
    /**
     * 目标字段详细类型，INT、STRING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectDataTypeName?: string;
    /**
     * 目标字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectValue?: string;
    /**
     * 源端对应的引擎类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceEngineTypes?: Array<number | bigint>;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 表负责人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerName?: string;
    /**
     * 执行策略信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecStrategy?: RuleGroupExecStrategy;
    /**
     * 订阅信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Subscription?: RuleGroupSubscribe;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 数据源 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: number;
    /**
     * 数据库 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 监控是否开启.0false,1true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorStatus?: number;
}
/**
 * UpdateWorkflowInfo返回参数结构体
 */
export interface UpdateWorkflowInfoResponse {
    /**
     * true代表成功，false代表失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetLatestAnalyseInfo请求参数结构体
 */
export interface GetLatestAnalyseInfoRequest {
    /**
     * 项目编号
     */
    ProjectId: string;
    /**
     * 脚本编号
     */
    ScriptId: string;
    /**
     * 是否只显示当前用户的
     */
    IsOnlyCurrUser?: boolean;
}
/**
 * GetCosToken返回参数结构体
 */
export interface GetCosTokenResponse {
    /**
     * cos地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * Token信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: CosTokenResponse;
    /**
     * 桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 终止点（针对私有云环境）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndPoint?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportProjectParamDs返回参数结构体
 */
export interface ImportProjectParamDsResponse {
    /**
     * 结果集
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ForceSucScheduleInstances返回参数结构体
 */
export interface ForceSucScheduleInstancesResponse {
    /**
     * 结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表血缘详细信息
 */
export interface TableLineageInfo {
    /**
     * 元数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType: string;
    /**
     * 空间id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 表id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 表血缘参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<LineageParamRecord>;
    /**
     * 父节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentSet?: string;
    /**
     * 子节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildSet?: string;
    /**
     * 额外参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtParams?: Array<RecordField>;
    /**
     * 血缘id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 元数据类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreTypeName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 表全称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualifiedName?: string;
    /**
     * 血缘下游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownStreamCount?: number;
    /**
     * 血缘上游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpStreamCount?: number;
    /**
     * 血缘描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 由中心节点到该节点的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrefixPath?: string;
    /**
     * 血缘创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 血缘更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 修改血缘的任务id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
    /**
     * 模块/应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelType?: string;
}
/**
 * 查询实时任务实例当前的节点信息
 */
export interface InstanceNodeInfo {
    /**
     * 读取节点SOURCE 写入节点SINK
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType: string;
    /**
     * 节点id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId: string;
    /**
     * 节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName: string;
}
/**
 * 工作流
 */
export interface WorkflowExtOpsDto {
    /**
     * 任务数量count
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCount?: number;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkFlowId?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 责任人userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 工作流描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkFlowDesc?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkFlowName?: string;
    /**
     * 工作流文件id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 工作流状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 工作流创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 最近更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
}
/**
 * CreateResourceDirectory请求参数结构体
 */
export interface CreateResourceDirectoryRequest {
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 资源路径
     */
    FilePath: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeRuleExecHistory请求参数结构体
 */
export interface DescribeRuleExecHistoryRequest {
    /**
     * 规则Id
     */
    RuleId?: number;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * StopBaseline请求参数结构体
 */
export interface StopBaselineRequest {
    /**
     * 1
     */
    BaselineId: string;
    /**
     * 1
     */
    ProjectId: string;
}
/**
 * 规则执行结果
 */
export interface RunnerRuleExecResult {
    /**
     * rule id
     */
    RuleId: number;
    /**
     * rule exec id
     */
    RuleExecId: number;
    /**
     * exec state
     */
    State: string;
    /**
     * 结果
     */
    Data: Array<string>;
}
/**
 * 集成节点
 */
export interface IntegrationNodeInfo {
    /**
     * 集成节点id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 集成节点所属任务id
     */
    TaskId?: string;
    /**
     * 集成节点名称
     */
    Name?: string;
    /**
     * 集成节点类型
     */
    NodeType?: string;
    /**
     * 节点数据源类型
     */
    DataSourceType?: string;
    /**
     * 节点描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 节点配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: Array<RecordField>;
    /**
     * 节点扩展配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 节点schema
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Schema?: Array<IntegrationNodeSchema>;
    /**
     * 节点映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeMapping?: IntegrationNodeMapping;
    /**
     * 应用id
     */
    AppId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 创建人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin?: string;
    /**
     * 操作人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin?: string;
    /**
     * owner uin
     */
    OwnerUin?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * GetPathTrees返回参数结构体
 */
export interface GetPathTreesResponse {
    /**
     * 脚本文件列表
     */
    Data?: RecycleFilePageInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskInstanceReportDetail请求参数结构体
 */
export interface DescribeTaskInstanceReportDetailRequest {
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务实例数据时间
     */
    CurRunDate?: string;
    /**
     * 任务实例运行时间
     */
    IssueDate?: string;
}
/**
 * 分页查询实例响应
 */
export interface DescribeBaselineInstancesResponse {
    /**
     * 基线实例数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineInstances?: Array<BaselineInstanceVo>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * 任务属性
 */
export interface TaskInnerInfo {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务名
     */
    TaskName: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
     */
    CycleType: number;
    /**
     * 虚拟任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 真实任务工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
}
/**
 * 基线实例
 */
export interface BaselineInstanceVo {
    /**
     * 基线实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 基线id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineId?: number;
    /**
     * 基线名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineName?: string;
    /**
     * 基线类型，D: 天基线 / H 小时基线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineType?: string;
    /**
     * 基线实例数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineDataTime?: string;
    /**
     * 基线实例生成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 基线实例预计完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedEndTime?: string;
    /**
     * 基线实例状态，P:暂停/ SF:安全/ WN:预警/ BL:破线 / TF:任务失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineInstanceStatus?: string;
    /**
     * 责任人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeUin?: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeName?: string;
    /**
     * 预警余量/单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarningMargin?: number;
    /**
     * 承诺时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PromiseTime?: string;
    /**
     * 告警级别 N: 普通 / I重要 / E: 紧急
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmLevel?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 基线实例ready状态。NEW_GENERATED_INSTANCE:产生实例/RENDER_DAG:渲染DAG/CALCULATE_PATH:计算路径/COMPLETE:完成
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsReady?: string;
    /**
     * 该基线由哪个机器处理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardKey?: string;
    /**
     * 异常任务实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExceptionalTaskInstances?: Array<BaselineTaskInstanceDto>;
    /**
     * 关联的所有任务实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInstances?: Array<BaselineTaskInstanceDto>;
    /**
     * 任务实例DAG整体启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CriticalStartTime?: string;
    /**
     * 基线实例上的关键任务实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CriticalTaskInstances?: Array<BaselineTaskInstanceDto>;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 基线实例与保障任务实例映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineTaskInstances?: Array<BaselineTaskInstanceDto>;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 主账号uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 当前用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserUin?: string;
}
/**
 * DescribeOrganizationalFunctions请求参数结构体
 */
export interface DescribeOrganizationalFunctionsRequest {
    /**
     * 场景类型：开发、使用
     */
    Type: string;
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 函数名称
     */
    Name?: string;
    /**
     * 展示名称
     */
    DisplayName?: string;
}
/**
 * CustomizeBusinessEntityDTO
 */
export interface CustomizeBusinessEntityDTO {
    /**
     * taskId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * taskName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * Name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * taskType
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: string;
    /**
     * Type
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * runUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunUrl?: string;
    /**
     * runReqParams
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunReqParams?: string;
    /**
     * stopUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopUrl?: string;
    /**
     * stopReqParams
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopReqParams?: string;
    /**
     * stateMonitorUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StateMonitorUrl?: string;
    /**
     * runLogUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunLogUrl?: string;
    /**
     * logDownloadUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogDownloadUrl?: string;
    /**
     * markUrl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MarkUrl?: string;
    /**
     * source_cluster
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceCluster?: string;
    /**
     * source_service
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceService?: string;
    /**
     * source_server
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * sql_file_name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SqlFileName?: string;
    /**
     * dbType
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbType?: string;
    /**
     * engine
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Engine?: string;
    /**
     * typeId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * fileName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * bucket
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * region
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * extraInfo
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * userFileId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
}
/**
 * FindTaskByRemotePath请求参数结构体
 */
export interface FindTaskByRemotePathRequest {
    /**
     * 远端路径
     */
    RemotePath: string;
}
/**
 * DescribeTaskTypeByScriptType返回参数结构体
 */
export interface DescribeTaskTypeByScriptTypeResponse {
    /**
     * 任务类型列表
     */
    Data?: Array<TaskTypeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchStopWorkflowsByIds请求参数结构体
 */
export interface BatchStopWorkflowsByIdsRequest {
    /**
     * 工作流id列表
     */
    WorkflowIds: Array<string>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 采集器详细信息
 */
export interface InLongAgentDetail {
    /**
     * Agent ID
     */
    AgentId?: string;
    /**
     * Agent Name
     */
    AgentName?: string;
    /**
     * Agent状态(running运行中，initializing 操作中，failed心跳异常)
     */
    Status?: string;
    /**
     * Agent状态描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1
     */
    AgentType?: number;
    /**
     * 采集来源
     */
    Source?: string;
    /**
     * VPC
     */
    VpcId?: string;
    /**
     * 集成资源组Id
     */
    ExecutorGroupId?: string;
    /**
     * 集成资源组名称
     */
    ExecutorGroupName?: string;
    /**
     * 关联任务数
     */
    TaskCount?: number;
    /**
     * 采集器组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentGroupId?: string;
    /**
     * agent状态统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CvmAgentStatusList?: Array<CvmAgentStatus>;
    /**
     * agent数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentTotal?: number;
    /**
     * 生命周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LifeDays?: number;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * agent地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentRegion?: string;
}
/**
 * CreateBaseline请求参数结构体
 */
export interface CreateBaselineRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 基线名称
     */
    BaselineName: string;
    /**
     * D或者H；分别表示天基线和小时基线
     */
    BaselineType: string;
    /**
     * 创建人id
     */
    CreateUin: string;
    /**
     * 创建人名称
     */
    CreateName: string;
    /**
     * 基线负责人id
     */
    InChargeUin: string;
    /**
     * 基线负责人名称
     */
    InChargeName: string;
    /**
     * 保障任务
     */
    PromiseTasks: Array<BaselineTaskInfo>;
    /**
     * 保障时间
     */
    PromiseTime: string;
    /**
     * 告警余量/分钟
     */
    WarningMargin: number;
    /**
     * 1
     */
    IsNewAlarm: boolean;
    /**
     * 现有告警规则信息
     */
    AlarmRuleDto?: AlarmRuleDto;
    /**
     * 新增告警规则描述
     */
    BaselineCreateAlarmRuleRequest?: CreateAlarmRuleRequest;
}
/**
 * DeleteResourceFile返回参数结构体
 */
export interface DeleteResourceFileResponse {
    /**
     * 资源删除结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务列表信息-项目克隆使用
 */
export interface CloneTaskModeInfo {
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: string;
    /**
     * N-新建
  NS-草稿
  Y-运行
  F-停止
  O-冻结
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus?: string;
    /**
     * 任务最近一次提交时间（未提交则为 null）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLatestSubmitTime?: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 任务虚拟标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 实体任务id（虚拟任务跳转使用）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTaskId?: string;
    /**
     * 虚拟任务对应的实际项目id（跳转用）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealProjectId?: string;
}
/**
 * 数据开发浏览历史
 */
export interface BrowsingHistory {
    /**
     * 名字
     */
    Title?: string;
    /**
     * 访问时间
     */
    VisitTime?: string;
    /**
     * 资源相关个性化信息，json格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 资源id
     */
    ResourceType?: string;
    /**
     * 查询历史的资源类型file/task/function/event等
     */
    ResourceId?: string;
}
/**
 * DescribeRecycleTaskDetail请求参数结构体
 */
export interface DescribeRecycleTaskDetailRequest {
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * DescribeTaskListByConditionDs请求参数结构体
 */
export interface DescribeTaskListByConditionDsRequest {
    /**
     * 页数
     */
    PageNum: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 工作流Id
     */
    WorkflowId: string;
    /**
     * keyword
     */
    Keyword: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * DeleteEventListenerByTaskId请求参数结构体
 */
export interface DeleteEventListenerByTaskIdRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务Id
     */
    Key: string;
}
/**
 * RunTask请求参数结构体
 */
export interface RunTaskRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DescribeOpsWorkflows请求参数结构体
 */
export interface DescribeOpsWorkflowsRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务产品类型名称列表，以 ',' 号分割
     */
    ProductNameList?: string;
    /**
     * 文件id列表，以 ',' 号分割
     */
    FolderIdList?: string;
    /**
     * 工作流id，以 ',' 号分割
     */
    WorkFlowIdList?: string;
    /**
     * 工作流名称列表，以 ',' 号分割
     */
    WorkFlowNameList?: string;
    /**
     * 任务名称列表，以 ',' 号分割
     */
    TaskNameList?: string;
    /**
     * 任务id列表，以 ',' 号分割
     */
    TaskIdList?: string;
    /**
     * 状态列表，以 ',' 号分割
     */
    StatusList?: string;
    /**
     * 负责人列表，以 ',' 号分割
     */
    InChargeList?: string;
    /**
     * 分页页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 排序项
     */
    SortItem?: string;
    /**
     * 排序方式，DESC或ASC
     */
    SortType?: string;
}
/**
 * DescribeBatchTestRun请求参数结构体
 */
export interface DescribeBatchTestRunRequest {
    /**
     * 批量任务列表
     */
    BatchTasks: Array<TestRunBatchItem>;
}
/**
 * CreateOfflineTask返回参数结构体
 */
export interface CreateOfflineTaskResponse {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 结果
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowCanvasInfoDs返回参数结构体
 */
export interface DescribeWorkflowCanvasInfoDsResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskOutputRegistry返回参数结构体
 */
export interface CreateTaskOutputRegistryResponse {
    /**
     * 登记项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDataRegistryDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsFolderTree请求参数结构体
 */
export interface DescribeDsFolderTreeRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 是否一级拉取 true 是
  false 否
     */
    FirstLevelPull?: boolean;
    /**
     * 文件夹ID
     */
    FolderId?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
    /**
     * 关键字搜索
     */
    Keyword?: string;
    /**
     * 是否包含工作流 true 是
  false 否
     */
    IncludeWorkflow?: boolean;
    /**
     * 是否包含任务 true 是
  false 否
     */
    IncludeTask?: boolean;
    /**
     * 是否包含虚拟任务，当 IncludeTask 为 true 的时候，该参数才生效，默认为 true
     */
    IncludeVirtualTask?: boolean;
    /**
     * 任务目录id
     */
    TaskFolderId?: string;
    /**
     * classification.分类展示  catalog.目录展示
     */
    DisplayType?: string;
    /**
     * 是否包含任务目录 true 是
  false 否
     */
    IncludeTaskFolder?: boolean;
}
/**
 * DeleteResourcePath请求参数结构体
 */
export interface DeleteResourcePathRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源路径
     */
    FilePath: string;
}
/**
 * BatchDeleteIntegrationTasks请求参数结构体
 */
export interface BatchDeleteIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 是否删除开发态任务。默认不删除开发态，为 0 不删除 , 为 1 删除
     */
    DeleteKFFlag?: number;
}
/**
 * UploadFilesDs返回参数结构体
 */
export interface UploadFilesDsResponse {
    /**
     * 返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: ShareStorageFileDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskLog请求参数结构体
 */
export interface TaskLogRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 起始时间戳，单位毫秒
     */
    StartTime: number;
    /**
     * 结束时间戳，单位毫秒
     */
    EndTime: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 拉取日志数量，默认100
     */
    Limit?: number;
    /**
     * 日志排序 desc 倒序 asc 顺序
     */
    OrderType?: string;
    /**
     * 实时任务 201   离线任务 202  默认实时任务
     */
    TaskType?: number;
}
/**
 * 任务依赖的边信息
 */
export interface OpsTaskLinkInfoDto {
    /**
     * 下游任务id
     */
    TaskTo: string;
    /**
     * 上游任务id
     */
    TaskFrom: string;
    /**
     * 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务
     */
    LinkType: string;
    /**
     * 依赖边id
     */
    LinkId: string;
}
/**
 * DescribeIntegrationStatisticsTaskStatus请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
    /**
     * 资源组id
     */
    ExecutorGroupId?: string;
}
/**
 * DescribeBelongTo返回参数结构体
 */
export interface DescribeBelongToResponse {
    /**
     * 所属任务/基线
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FreezeOpsTasks返回参数结构体
 */
export interface FreezeOpsTasksResponse {
    /**
     * 操作结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRuleGroupSubscription返回参数结构体
 */
export interface ModifyRuleGroupSubscriptionResponse {
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWorkflowDs返回参数结构体
 */
export interface CreateWorkflowDsResponse {
    /**
     * 工作流ID
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeExecStrategy返回参数结构体
 */
export interface DescribeExecStrategyResponse {
    /**
     * 规则组执行策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupExecStrategy;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSuccessorOpsTaskInfos返回参数结构体
 */
export interface DescribeSuccessorOpsTaskInfosResponse {
    /**
     * 下游任务列表
     */
    Data?: Array<TaskOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 采集器关联的集成任务
 */
export interface InLongAgentTask {
    /**
     * 集成任务ID
     */
    TaskId: string;
    /**
     * 集成任务名称
     */
    TaskName: string;
    /**
     * 集成任务状态
     */
    TaskStatus: string;
}
/**
 * DescribeInstanceLogFile返回参数结构体
 */
export interface DescribeInstanceLogFileResponse {
    /**
     * 下载文件详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: InstanceDownloadLogInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitBaseline返回参数结构体
 */
export interface SubmitBaselineResponse {
    /**
     * 是否操作成功描述
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowCanvasOplogRequestFilter
 */
export interface DescribeWorkflowCanvasOplogRequestFilter {
    /**
     * 开始时间，时间戳，精确到秒
     */
    StartTime?: number;
    /**
     * 开始时间，时间戳，精确到秒
     */
    EndTime?: number;
    /**
     * 排序类型，asc 或者 desc，不填默认为 asc
     */
    OrderType?: string;
    /**
     * 操作人ID，用来过滤
     */
    OperatorIds?: Array<number | bigint>;
}
/**
 * GetResourcePathTree返回参数结构体
 */
export interface GetResourcePathTreeResponse {
    /**
     * 资源路径信息列表
     */
    Data?: Array<NewPathDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameResourceFile返回参数结构体
 */
export interface RenameResourceFileResponse {
    /**
     * 资源重命名结果
     */
    Data?: RenameResourceDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据源对象
 */
export interface SimpleDataSourceInfo {
    /**
     * 若数据源列表为绑定数据库，则为db名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName: string;
    /**
     * 数据源描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID: number;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: string;
    /**
     * 数据源名称，在相同SpaceName下，数据源名称不能为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 数据源引擎所属区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 数据源类型:枚举值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 数据源所属的集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 应用ID AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId: number;
    /**
     * 数据源类别：绑定引擎、绑定数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category: string;
    /**
     * 数据源展示名，为了可视化查看
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Display: string;
    /**
     * 数据源责任人账号ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccount: string;
    /**
     * 数据源数据源的可见性，1为可见、0为不可见。默认为1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 数据源责任人账号名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccountName: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName: string;
    /**
     * 归属项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectId: string;
    /**
     * 归属项目Name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectName: string;
    /**
     * 归属项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectIdent: string;
    /**
     * 是否有编辑权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Edit: boolean;
    /**
     * 是否有授权权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Author: boolean;
    /**
     * 是否有转交权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deliver: boolean;
    /**
     * 数据源状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceStatus: string;
    /**
     * 认证项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorityProjectName?: string;
    /**
     * 认证用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorityUserName?: string;
}
/**
 * CreateTaskInParamDs返回参数结构体
 */
export interface CreateTaskInParamDsResponse {
    /**
     * 结果
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSonInstances请求参数结构体
 */
export interface DescribeSonInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * 文件或任务详情响应信息
 */
export interface CodeDetailResult {
    /**
     * 文件或任务ID
     */
    Id?: string;
    /**
     * 文件或任务名称
     */
    Name?: string;
    /**
     * 文件或任务类型
     */
    Type?: string;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 文件扩展类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
}
/**
 * 数据质量自定义规则时的sql表达式解析表对象
 */
export interface SqlExpressionTable {
    /**
     * sql表达式表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableExpression?: string;
    /**
     * sql表达式字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnExpression?: Array<string>;
}
/**
 * 【项目克隆】依赖工作流信息
 */
export interface DependencyWorkflowDTO {
    /**
     * 已选工作流id
     */
    SelectedWorkflowId?: string;
    /**
     * 已选工作流名称
     */
    SelectedWorkflowName?: string;
    /**
     * 依赖工作流id
     */
    DependencyWorkflowId?: string;
    /**
     * 依赖工作流名称
     */
    DependencyWorkflowName?: string;
    /**
     * 依赖工作流是否跨项目
     */
    CrossProject?: boolean;
    /**
     * 依赖工作流对应项目id
     */
    DependencyProjectId?: string;
    /**
     * 依赖工作流对应项目名称
     */
    DependencyProjectName?: string;
}
/**
 * DryRunDIOfflineTask请求参数结构体
 */
export interface DryRunDIOfflineTaskRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 资源组Id
     */
    ResourceGroup?: string;
    /**
     * 默认 27
     */
    TaskTypeId?: number;
}
/**
 * CreateOfflineTask请求参数结构体
 */
export interface CreateOfflineTaskRequest {
    /**
     * 项目/工作
     */
    ProjectId: string;
    /**
     * 1
     */
    CycleStep: number;
    /**
     * 0
     */
    DelayTime: number;
    /**
     * 2099-12-31 00:00:00
     */
    EndTime: string;
    /**
     * 备注
     */
    Notes: string;
    /**
     * 当前日期
     */
    StartTime: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 跟之前调用调度接口保持一致27
     */
    TypeId: number;
    /**
     * 默认 ""
     */
    TaskAction: string;
    /**
     * 区分画布和表单
     */
    TaskMode: string;
}
/**
 * 事件详情
 */
export interface EventOpsDto {
    /**
     * 事件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 事件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventType?: string;
    /**
     * 事件分割类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventSubType?: string;
    /**
     * 事件广播类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventBroadcastType?: string;
    /**
     * 数据时间格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DimensionFormat?: string;
    /**
     * 存活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeToLive?: number;
    /**
     * 存活时间单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 创建时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTimestamp?: string;
    /**
     * 所属者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 监听器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Listeners?: Array<EventListenerOpsDto>;
    /**
     * 事件案例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventCases?: Array<EventCaseOpsDto>;
}
/**
 * DescribeEtlTaskType返回参数结构体
 */
export interface DescribeEtlTaskTypeResponse {
    /**
     * 任务类型列表
     */
    Data?: Array<TaskTypeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableBasicInfo返回参数结构体
 */
export interface DescribeTableBasicInfoResponse {
    /**
     * 表元数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableBasicInfoList?: Array<TableBasicInfo>;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 比较条件
 */
export interface CompareRuleItem {
    /**
     * 比较类型 1.固定值  2.波动值  3.数值范围比较  4.枚举范围比较  5.不用比较
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareType?: number;
    /**
     * 比较操作类型 <  <=  ==  =>  >
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 质量统计值类型 1.绝对值  2.上升 3. 下降  4._C包含   5. N_C不包含
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueComputeType?: number;
    /**
     * 比较阈值列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueList?: Array<ThresholdValue>;
}
/**
 * ImportTableData返回参数结构体
 */
export interface ImportTableDataResponse {
    /**
     * 导入记录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 维度评分
 */
export interface DimensionScore {
    /**
     * 维度评分列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DimensionScoreList: Array<DimensionScoreInfo>;
}
/**
 * 画布所需的信息
 */
export interface CanvasInfo {
    /**
     * 画布任务信息
     */
    TasksList: Array<TaskCanvasInfo>;
    /**
     * 画布任务链接信息
     */
    LinksList: Array<TaskLinkInfo>;
}
/**
 * 集成节点详情
 */
export interface IntegrationNodeDetail {
    /**
     * 集成节点名称
     */
    Name?: string;
    /**
     * 集成节点类型
     */
    NodeType?: string;
    /**
     * 节点数据源类型
     */
    DataSourceType?: string;
    /**
     * 节点描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 节点配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: Array<RecordField>;
    /**
     * 节点扩展配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 节点schema
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Schema?: Array<IntegrationNodeSchema>;
    /**
     * 节点映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeMapping?: IntegrationNodeMapping;
    /**
     * owner uin
     */
    OwnerUin?: string;
}
/**
 * SubmitBaseline请求参数结构体
 */
export interface SubmitBaselineRequest {
    /**
     * 1
     */
    BaselineId: string;
    /**
     * 1
     */
    ProjectId: string;
}
/**
 * ForceSucInstances请求参数结构体
 */
export interface ForceSucInstancesRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 实例嵌套集合
     */
    Instances: Array<InstanceInfo>;
}
/**
 * SubmitBatchTestRun请求参数结构体
 */
export interface SubmitBatchTestRunRequest {
    /**
     * 任务Id
     */
    TaskIds: Array<string>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DeleteOfflineTask返回参数结构体
 */
export interface DeleteOfflineTaskResponse {
    /**
     * 结果
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteBatchWorkflowDs请求参数结构体
 */
export interface DeleteBatchWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 文件路径
     */
    WorkflowIds: Array<string>;
}
/**
 * CopyTaskDs返回参数结构体
 */
export interface CopyTaskDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckDuplicateRuleName请求参数结构体
 */
export interface CheckDuplicateRuleNameRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 规则组Id
     */
    RuleGroupId?: number;
    /**
     * 规则名称
     */
    Name?: string;
    /**
     * 规则Id
     */
    RuleId?: number;
}
/**
 * RollbackCustomFunctionVersion返回参数结构体
 */
export interface RollbackCustomFunctionVersionResponse {
    /**
     * 函数唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionId?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCrontabTopNDs请求参数结构体
 */
export interface DescribeCrontabTopNDsRequest {
    /**
     * crontabExp
     */
    CrontabExp: string;
    /**
     * topN
     */
    TopN: number;
    /**
     * StartIsoTime
     */
    StartIsoTime?: string;
}
/**
 * 表质量分分页结果
 */
export interface TableQualityDetailPage {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 表质量列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<TableQualityDetail>;
}
/**
 * CreateTaskAlarmRegular返回参数结构体
 */
export interface CreateTaskAlarmRegularResponse {
    /**
     * 告警ID
     */
    AlarmId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRuleTemplate请求参数结构体
 */
export interface DeleteRuleTemplateRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 模版Id列表
     */
    Ids?: Array<number | bigint>;
}
/**
 * CreateBaseline返回参数结构体
 */
export interface CreateBaselineResponse {
    /**
     * 是否成功
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MakeUpWorkflowNew请求参数结构体
 */
export interface MakeUpWorkflowNewRequest {
    /**
     * 工作流id
     */
    WorkFlowId: string;
    /**
     * 补录开始时间
     */
    StartTime: string;
    /**
     * 补录结束时间
     */
    EndTime: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeAlarmReceiver请求参数结构体
 */
export interface DescribeAlarmReceiverRequest {
    /**
     * 告警ID
     */
    AlarmId: string;
    /**
     * 当前页
     */
    PageNumber: number;
    /**
     * 每页记录数
     */
    PageSize: number;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 消息ID
     */
    MessageId: string;
    /**
     * 类型
     */
    TaskType?: number;
    /**
     * 告警接收人ID(逗号分隔)
     */
    AlarmRecipient?: string;
    /**
     * 告警接收人姓名(逗号分隔)
     */
    AlarmRecipientName?: string;
    /**
     * 告警时间
     */
    AlarmTime?: string;
    /**
     * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
     */
    MonitorType?: number;
}
/**
 * KillOpsMakePlanInstances请求参数结构体
 */
export interface KillOpsMakePlanInstancesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 补录计划ID
     */
    PlanId: string;
}
/**
 * ModifyWorkflowInfo请求参数结构体
 */
export interface ModifyWorkflowInfoRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 责任人
     */
    Owner?: string;
    /**
     * 责任人id
     */
    OwnerId?: string;
    /**
     * 备注
     */
    WorkflowDesc?: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 所属文件夹id
     */
    FolderId?: string;
    /**
     * 工作流所属用户分组id  若有多个,分号隔开: a;b;c
     */
    UserGroupId?: string;
    /**
     * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
     */
    UserGroupName?: string;
    /**
     * 工作流参数列表
     */
    WorkflowParams?: Array<ParamInfo>;
    /**
     * 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。
     */
    GeneralTaskParams?: Array<GeneralTaskParam>;
}
/**
 * 任务执行记录
 */
export interface AdhocRecordInfoDto {
    /**
     * 任务提交记录
     */
    Id: number;
    /**
     * 脚本内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptContent: string;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 子任务执行记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Details: Array<AdhocSubTaskDto>;
    /**
     * 任务实例id
     */
    InstanceId: string;
    /**
     * 任务执行者Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorId?: string;
    /**
     * 任务执行者显示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorDisplayName?: string;
}
/**
 * BatchResumeIntegrationTasks请求参数结构体
 */
export interface BatchResumeIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型, 201为实时任务，202为离线任务
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DeleteTaskAlarmRegular返回参数结构体
 */
export interface DeleteTaskAlarmRegularResponse {
    /**
     * 删除结果(true表示删除成功，false表示删除失败)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分页数据集
 */
export interface CollectionEventDTO {
    /**
     * 总数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalItems?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPages?: number;
    /**
     * 当前页数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPageItems?: number;
    /**
     * 当前页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPage?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<EventDsDto>;
}
/**
 * DescribeWorkflowSchedulerInfoDs返回参数结构体
 */
export interface DescribeWorkflowSchedulerInfoDsResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowScheduleDtoDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 补录计划任务集合
 */
export interface MakePlanTaskOpsDtoCollection {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<MakePlanTaskOpsDto>;
}
/**
 * DescribeCodeSearchAuditInfoV2返回参数结构体
 */
export interface DescribeCodeSearchAuditInfoV2Response {
    /**
     * 代码搜索审计响应信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<CodeSearchAuditDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务依赖边详情
 */
export interface LinkOpsDto {
    /**
     * 边的id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
    /**
     * 边的key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkKey: string;
    /**
     * 边的源节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskFrom: string;
    /**
     * 边的目标节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTo: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 父子任务之间的依赖关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkDependencyType: string;
    /**
     * 父子任务之间依赖偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset: string;
    /**
     * 边的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkType: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
}
/**
 * ListBatchJob请求参数结构体
 */
export interface ListBatchJobRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 操作类型
     */
    JobType?: string;
    /**
     * 操作人Id
     */
    OwnerId?: string;
    /**
     * 开始操作时间
     */
    StartOperateTime?: string;
    /**
     * 截止操作时间
     */
    EndOperateTime?: string;
    /**
     * 分页，页码
     */
    Page?: number;
    /**
     * 分页，页内条数
     */
    Size?: number;
    /**
     * 按更新时间排序排序
  --desc
  --asc
  默认desc
     */
    SortType?: string;
    /**
     * 排序字段，如创建时间：
  CreateTime
     */
    SortItem?: string;
}
/**
 * 离线任务实例读取节点的运行指标
 */
export interface InstanceReportReadNode {
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 数据来源
     */
    DataSource?: string;
    /**
     * 总条数
     */
    TotalReadRecords?: number;
    /**
     * 总字节数
     */
    TotalReadBytes?: number;
    /**
     * 速度（条/秒）
     */
    RecordSpeed?: number;
    /**
     * 吞吐（Byte/秒）
     */
    ByteSpeed?: number;
    /**
     * 脏数据条数
     */
    TotalErrorRecords?: number;
    /**
     * 等待数据发送到下游的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaitWriterTime?: number;
}
/**
 * BatchStopIntegrationTasks返回参数结构体
 */
export interface BatchStopIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDataSource请求参数结构体
 */
export interface ModifyDataSourceRequest {
    /**
     * 数据源名称，在相同SpaceName下，数据源名称不能为空
     */
    Name: string;
    /**
     * 数据源类别：绑定引擎、绑定数据库
     */
    Category: string;
    /**
     * 数据源类型:枚举值
     */
    Type: string;
    /**
     * 数据源ID
     */
    ID?: number;
    /**
     * 业务侧数据源的配置信息扩展
     */
    BizParams?: string;
    /**
     * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
     */
    Params?: string;
    /**
     * 数据源描述信息
     */
    Description?: string;
    /**
     * 数据源展示名，为了可视化查看
     */
    Display?: string;
    /**
     * 若数据源列表为绑定数据库，则为db名称
     */
    DatabaseName?: string;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
     */
    Instance?: string;
    /**
     * 数据源数据源的可见性，1为可见、0为不可见。默认为1
     */
    Status?: number;
    /**
     * 数据源所属的业务空间名称
     */
    ClusterId?: string;
    /**
     * 是否采集
     */
    Collect?: string;
    /**
     * 项目id
     */
    OwnerProjectId?: string;
    /**
     * 项目名称
     */
    OwnerProjectName?: string;
    /**
     * 项目中文名
     */
    OwnerProjectIdent?: string;
    /**
     * cos bucket
     */
    COSBucket?: string;
    /**
     * cos region
     */
    COSRegion?: string;
    /**
     * 操作项目id
     */
    ProjectId?: string;
}
/**
 * UpdateInLongAgent请求参数结构体
 */
export interface UpdateInLongAgentRequest {
    /**
     * 采集器ID
     */
    AgentId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * 采集器名称
     */
    AgentName?: string;
    /**
     * 集成资源组ID
     */
    ExecutorGroupId?: string;
}
/**
 * CreatePath请求参数结构体
 */
export interface CreatePathRequest {
    /**
     * 文件夹名称
     */
    Name: string;
    /**
     * 文件夹路径
     */
    FilePath: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeDatasource返回参数结构体
 */
export interface DescribeDatasourceResponse {
    /**
     * 数据源对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: DataSourceInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SuspendIntegrationTask返回参数结构体
 */
export interface SuspendIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskVersionVO
 */
export interface TaskVersionDsDTO {
    /**
     * 版本ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionNum?: string;
    /**
     * 版本备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionRemark?: string;
    /**
     * 版本创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 版本创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 版本更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最新调度计划变更时间 生产态存储
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 版本是否正在使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedVersion?: number;
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfo?: TaskDsDTO;
    /**
     * 任务参数信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskParaInfo?: Array<ParameterTaskDsDto>;
    /**
     * TaskInputParam输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInputParam?: Array<ParameterTaskInDsDto>;
    /**
     * TaskOutputParam输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskOutputParam?: Array<ParameterTaskOutDsDto>;
    /**
     * 任务上游依赖信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 审批状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveStatus?: string;
}
/**
 * DescribeSchedulerRunTimeInstanceCntByStatus返回参数结构体
 */
export interface DescribeSchedulerRunTimeInstanceCntByStatusResponse {
    /**
     * 响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<RuntimeInstanceCntTop>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryWorkflowVersion请求参数结构体
 */
export interface QueryWorkflowVersionRequest {
    /**
     * 项目编号
     */
    ProjectId: string;
    /**
     * 工作流编号
     */
    WorkflowId: string;
}
/**
 * RunForceSucScheduleInstances请求参数结构体
 */
export interface RunForceSucScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * 代码搜索审计信息
 */
export interface CodeSearchAuditDTO {
    /**
     * 当前租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: number;
    /**
     * 当前用户主账号ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUserId?: number;
    /**
     * 当前用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: number;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 关键词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Keyword?: string;
}
/**
 * Csv 读取行数据
 */
export interface CsvRow {
    /**
     * 行号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RowNumber?: number;
    /**
     * 列数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnValues?: Array<RowColumn>;
}
/**
 * CreateFileVersion请求参数结构体
 */
export interface CreateFileVersionRequest {
    /**
     * 脚本资源id
     */
    ResourceId: string;
    /**
     * 版本创建时间，ISO8601格式
     */
    CreateTime: string;
    /**
     * 版本创建人姓名
     */
    UserName: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 文件远程存储路径
     */
    RemotePath: string;
    /**
     * 文件在对象存储的地域
     */
    ObjectRegion: string;
    /**
     * 文件在对象存储的桶名
     */
    ObjectBucketName: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 版本变更描述
     */
    Description?: string;
    /**
     * 编排空间提交版本的任务id
     */
    TaskId?: string;
    /**
     * 编排空间提交版本的任务版本累加号
     */
    TaskVersionNum?: string;
    /**
     * 编排空间提交版本的任务版本id,格式yyyyMMddHHmmssSSS
     */
    TaskVersionId?: string;
}
/**
 * CheckIntegrationTaskNameExists请求参数结构体
 */
export interface CheckIntegrationTaskNameExistsRequest {
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 同步类型1.单表同步，2.解决方案
     */
    SyncType?: number;
}
/**
 * DescribeAllParamDs返回参数结构体
 */
export interface DescribeAllParamDsResponse {
    /**
     * 结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ParameterInfoDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationalFunctions返回参数结构体
 */
export interface DescribeOrganizationalFunctionsResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<OrganizationalFunction>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FindAllFolder请求参数结构体
 */
export interface FindAllFolderRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DescribeDataTypes返回参数结构体
 */
export interface DescribeDataTypesResponse {
    /**
     * 字段类型列表。
     */
    TypeInfoSet?: Array<Label>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskLog返回参数结构体
 */
export interface TaskLogResponse {
    /**
     * 详细日志
     */
    LogContentList: Array<LogContent>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 导入请求相关信息
 */
export interface ImportRequestInfo {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * zip包上传cos地址
     */
    FileCos: string;
    /**
     * cos桶名
     */
    BucketName: string;
    /**
     * cos地域
     */
    Region: string;
    /**
     * 文件导入路径（不包含文件名）
     */
    FilePath: string;
}
/**
 * 审批分类
 */
export interface ApproveType {
    /**
     * 申请分类key
     */
    Type: string;
    /**
     * 类型名称
     */
    TypeName: string;
    /**
     * 申请类型key
     */
    Classification: string;
}
/**
 * DeleteResourceFiles返回参数结构体
 */
export interface DeleteResourceFilesResponse {
    /**
     * 资源批量删除结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 根据任务信息获取实例状态信息实例
 */
export interface ParamGetTaskInstancesStatusInfoResponseInstance {
    /**
     * 实例编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 记录编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId?: string;
    /**
     * 任务编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
}
/**
 * GetOfflineInstanceList请求参数结构体
 */
export interface GetOfflineInstanceListRequest {
    /**
     * 第几页
     */
    PageIndex: string;
    /**
     * 每页几条
     */
    PageSize: number;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 无
     */
    SearchCondition?: SearchCondition;
}
/**
 * DescribeRealTimeTaskMetricOverview请求参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewRequest {
    /**
     * 要查看的实时任务的任务ID，可在任务列表页面中获得
     */
    TaskId: string;
    /**
     * 要查看的项目ID
     */
    ProjectId: string;
    /**
     * 开始时间
     */
    StartTime?: number;
    /**
     * 结束时间
     */
    EndTime?: number;
}
/**
 * 数据质量规则分页
 */
export interface RulePage {
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 规则列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<Rule>;
}
/**
 * 属性类型扩展
 */
export interface TaskTypeExtDsVO {
    /**
     * 类型ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId: number;
    /**
     * 属性名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropName: string;
    /**
     * 属性标签(ui展示用)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropLabel: string;
    /**
     * 缺省标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultFlag: number;
    /**
     * 可视标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VisibleFlag: number;
    /**
     * 属性描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropDesc: string;
    /**
     * 排列id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RankId: number;
    /**
     * 控件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputType: string;
    /**
     * 值类型(integer，string)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueType: string;
    /**
     * 缺省值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue: string;
    /**
     * 候选值列表(，分隔)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateValues: string;
    /**
     * 是否必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsMandatory: number;
    /**
     * 最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxValue: number;
    /**
     * 最小值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinValue: number;
    /**
     * 配置等级(1-普通，2-高级，3-管理员)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfLevel: number;
    /**
     * 候选文本列表(，分隔)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateTexts: string;
    /**
     * 复制时是否需要修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CopyKey: number;
    /**
     * 字段正则表达式校验
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Regex: string;
    /**
     * 字段正则表达式校验证提示tip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tip: string;
    /**
     * 可选值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Candidates?: Array<CandidateDsDTo>;
}
/**
 * DescribeRuleHistoryByPage返回参数结构体
 */
export interface DescribeRuleHistoryByPageResponse {
    /**
     * 规则组操作历史列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleHistoryPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowInfoById返回参数结构体
 */
export interface DescribeWorkflowInfoByIdResponse {
    /**
     * 工作流调度详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowSchedulerOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportFiles返回参数结构体
 */
export interface ImportFilesResponse {
    /**
     * 批量导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptListInfo?: Array<UserFileDTONew>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
    /**
     * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
     */
    ProjectId?: string;
    /**
     * 是否展示关联集群信息
     */
    DescribeClusters?: boolean;
    /**
     * 是否展示关联执行组的信息，仅部分信息。
     */
    DescribeExecutors?: boolean;
    /**
     * 默认不展示项目管理员信息
     */
    DescribeAdminUsers?: boolean;
    /**
     * 默认不统计项目人员数量
     */
    DescribeMemberCount?: boolean;
    /**
     * 默认不查询创建者的信息
     */
    DescribeCreator?: boolean;
    /**
     * 项目名只在租户内唯一，一般用来转化为项目ID。
     */
    ProjectName?: string;
}
/**
 * ModifyTaskAlarmRegular返回参数结构体
 */
export interface ModifyTaskAlarmRegularResponse {
    /**
     * 判断是否修改成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例检索条件
 */
export interface InstanceSearchCondition {
    /**
     * 任务调度周期类型
     */
    CycleList?: Array<string>;
    /**
     * 起始时间
     */
    DateFrom?: string;
    /**
     * 截止时间
     */
    DateTo?: string;
    /**
     * 实例过滤条件
     */
    Instance?: InstanceCondition;
    /**
     * 模糊查询关键字
     */
    Keyword?: string;
    /**
     * 排序方式
     */
    Sort?: string;
    /**
     * 排序字段
     */
    SortCol?: string;
    /**
     * 实例状态类型
     */
    StateList?: Array<string>;
}
/**
 * DescribeTaskRunHistory请求参数结构体
 */
export interface DescribeTaskRunHistoryRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 检索条件
     */
    SearchCondition: InstanceSearchCondition;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 分页页码
     */
    PageNumber: number;
}
/**
 * 任务数据库登记项
 */
export interface TaskDataRegistryDTO {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 库唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbGuid?: string;
    /**
     * 表唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableGuid?: string;
    /**
     * 分区名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionName?: string;
    /**
     * 登记项id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 输入输出表类型
        输入流
   UPSTREAM,
        输出流
    DOWNSTREAM;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataFlowType?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserUin?: string;
    /**
     * 主账号id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ext?: string;
    /**
     * 表物理唯一id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TablePhysicalId?: string;
}
/**
 * 实例检索条件
 */
export interface InstanceCondition {
    /**
     * 执行类型
     */
    ExecutionSpace?: string;
    /**
     * 任务产品类型
     */
    ProductName?: string;
}
/**
 * DeleteOfflineTask请求参数结构体
 */
export interface DeleteOfflineTaskRequest {
    /**
     * 操作者name
     */
    OperatorName: string;
    /**
     * 项目/工作空间id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 虚拟任务标记(跟之前调度接口保持一致默认false)
     */
    VirtualFlag: boolean;
}
/**
 * 权重信息
 */
export interface WeightInfo {
    /**
     * 权重
     */
    Weight: number;
    /**
     * 维度类型 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
     */
    QualityDim: number;
}
/**
 * DescribeInLongAgentVpcList请求参数结构体
 */
export interface DescribeInLongAgentVpcListRequest {
    /**
     * WeData项目ID
     */
    ProjectId: string;
}
/**
 * 规则执行结果导出结果
 */
export interface RuleExecExportResult {
    /**
     * 规则执行id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleExecId?: number;
    /**
     * 导出任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExportTasks?: Array<ExportTaskInfo>;
}
/**
 * ModifyMonitorStatus返回参数结构体
 */
export interface ModifyMonitorStatusResponse {
    /**
     * 监控状态修改成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFatherDatasourceInfoDs请求参数结构体
 */
export interface DescribeFatherDatasourceInfoDsRequest {
    /**
     * 页数
     */
    PageNum: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * DeleteInLongAgent返回参数结构体
 */
export interface DeleteInLongAgentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyMonitorStatus请求参数结构体
 */
export interface ModifyMonitorStatusRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 监控开关状态
     */
    MonitorStatus?: boolean;
}
/**
 * 数据表导入记录ID
 */
export interface ImportTableDTO {
    /**
     * 导入记录ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 导入进度信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 导入状态（1：初始，2：建表中，3：建表成功，4：建表失败，5：导入数据中，6：导入数据成功，7：导入数据失败 8：回滚失败)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportStatus?: number;
    /**
     * 数据路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceDataPath?: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 租户ID，即AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: number;
    /**
     * 主账号ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUserId?: number;
    /**
     * 用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: string;
}
/**
 * DeleteFilePath请求参数结构体
 */
export interface DeleteFilePathRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 资源ID
     */
    ResourceIds: Array<string>;
    /**
     * 使用状态
     */
    UseStatus: string;
    /**
     * 文件路径
     */
    FilePaths?: Array<string>;
}
/**
 * DescribeTasksForProjectClone返回参数结构体
 */
export interface DescribeTasksForProjectCloneResponse {
    /**
     * 项目克隆-任务列表分页返回信息
     */
    Data?: CloneTaskModePageInfoInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExportWorkflowXml请求参数结构体
 */
export interface ExportWorkflowXmlRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowIds: Array<string>;
    /**
     * 跨域访问域名，文件存储在共享存储中，跨域下载会出现跨域访问失败问题，如果是跨域请求，请填写该值
     */
    OriginDomain?: string;
}
/**
 * MoveFile返回参数结构体
 */
export interface MoveFileResponse {
    /**
     * 移动结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FindTaskByRemotePath返回参数结构体
 */
export interface FindTaskByRemotePathResponse {
    /**
     * 任务详情
     */
    TaskDTOs?: Array<TaskDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskDs请求参数结构体
 */
export interface CreateTaskDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 任务名
     */
    TaskName: string;
    /**
     * 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
     */
    TaskType: number;
    /**
     * 扩展属性
     */
    TaskExt?: Array<TaskExtInfo>;
    /**
     * 产品名称
     */
    ProductName?: string;
    /**
     * 任务实例初始化策略
     */
    InstanceInitStrategy?: string;
    /**
     * 画布坐标横轴
     */
    LeftCoordinate?: number;
    /**
     * 画布坐标纵轴
     */
    TopCoordinate?: number;
    /**
     * 工作流目录ID
     */
    TaskFolderId?: string;
}
/**
 * DeleteDsFolder请求参数结构体
 */
export interface DeleteDsFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
}
/**
 * Task Link 信息
 */
export interface TaskLinkDsDTO {
    /**
     * TaskTo信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTo?: string;
    /**
     * TaskFrom信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskFrom?: string;
    /**
     * LinkType信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkType?: string;
    /**
     * key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkKey?: string;
    /**
     * LinkId信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 父子任务之间的依赖关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkDependencyType?: string;
    /**
     * 父子任务之间依赖偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: number;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 实体任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealFromTaskId?: string;
    /**
     * 实体任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealFromTaskName?: string;
    /**
     * 实体任务所属工作流
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealFromWorkflowId?: string;
    /**
     * 实体任务所属工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealFromWorkflowName?: string;
    /**
     * 实体任务所属项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealProjectId?: string;
    /**
     * 实体任务所属项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealProjectIdent?: string;
    /**
     * 实体任务所属项目名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealProjectName?: string;
}
/**
 * 任务提交记录
 */
export interface AdhocRecord {
    /**
     * 任务提交记录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 脚本内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptContent: string;
    /**
     * 任务提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
}
/**
 * DescribeDatabaseMetas请求参数结构体
 */
export interface DescribeDatabaseMetasRequest {
    /**
     * 过滤字段，projectIds/msTypes/createTime/modifiedTime
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段，如name
     */
    OrderFields?: Array<OrderField>;
}
/**
 * DescribeWorkflowSchedulerInfoDs请求参数结构体
 */
export interface DescribeWorkflowSchedulerInfoDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
}
/**
 * 操作返回结果
 */
export interface OperationOpsDto {
    /**
     * 操作是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 操作结果详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultMsg?: string;
    /**
     * 操作失败类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId?: string;
    /**
     * 操作失败描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc?: string;
}
/**
 * DescribeTaskByStatusReport返回参数结构体
 */
export interface DescribeTaskByStatusReportResponse {
    /**
     * 任务上报趋势指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskByStatus>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInfoTransByTypeIdDs请求参数结构体
 */
export interface DescribeInfoTransByTypeIdDsRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 类型ID
     */
    TypeId: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * DescribeNewSqlTaskResult请求参数结构体
 */
export interface DescribeNewSqlTaskResultRequest {
    /**
     * SQL任务Id
     */
    DetailId: number;
}
/**
 * 实例查询类型
 */
export interface InstanceApiOpsRequest {
    /**
     * 单个查询条件
     */
    Instance?: InstanceOpsDto;
    /**
     * 排序字段，目前包含：重试次数，实例数据时间，运行耗时
     */
    SortCol?: string;
    /**
     * 任务id列表
     */
    TaskIdList?: Array<string>;
    /**
     * 按照taskName模糊查询
     */
    TaskNameList?: Array<string>;
    /**
     * 文件夹列表
     */
    FolderList?: Array<string>;
    /**
     * 升序或者降序
     */
    Sort?: string;
    /**
     * 实例状态列表
     */
    StateList?: Array<number | bigint>;
    /**
     * 实例类型列表
     */
    TaskTypeList?: Array<number | bigint>;
    /**
     * 周期类型
     */
    CycleList?: Array<string>;
    /**
     * 责任人
     */
    OwnerList?: Array<string>;
    /**
     * 数据时间
     */
    DateFrom?: string;
    /**
     * 数据时间
     */
    DateTo?: string;
    /**
     * 实例入库时间
     */
    CreateTimeFrom?: string;
    /**
     * 实例入库时间
     */
    CreateTimeTo?: string;
    /**
     *  开始执行时间
     */
    StartFrom?: string;
    /**
     *  开始执行时间
     */
    StartTo?: string;
    /**
     * 所属工作流
     */
    WorkflowIdList?: Array<string>;
    /**
     * 按照workflowName模糊查询
     */
    WorkflowNameList?: Array<string>;
    /**
     * 关键字模糊查询
     */
    Keyword?: string;
    /**
     * searchColumns是搜索的字段名列表
     */
    SearchColumns?: Array<string>;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 限制
     */
    Limit?: number;
    /**
     * 任务类型映射关系, 存储任务类型id和任务类型描述信息
     */
    TaskTypeMap?: Array<TaskTypeMap>;
    /**
     * 0 补录类型 1 周期实例 2 非周期实例
     */
    InstanceType?: string;
    /**
     * 是否dag
     */
    DagDeal?: boolean;
    /**
     *  1 父实例 2 子实例
     */
    DagType?: string;
    /**
     * 1 自依赖 2 任务依赖  3 所有依赖
     */
    DagDependent?: string;
    /**
     * dag深度 默认为1，取值 1-6
     */
    DagDepth?: number;
    /**
     * 租户id
     */
    TenantId?: string;
    /**
     * 根据当前数据时间或者是下一个数据时间查询, 默认当前数据时间
     */
    DataTimeCycle?: string;
    /**
     * 资源组id,多个资源组id用英文逗号分隔
     */
    ExecutorGroupIdList?: Array<string>;
}
/**
 * KillInstances请求参数结构体
 */
export interface KillInstancesRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 实例嵌套集合
     */
    Instances: Array<InstanceInfo>;
}
/**
 * StartIntegrationTask返回参数结构体
 */
export interface StartIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchStopOpsTasks返回参数结构体
 */
export interface BatchStopOpsTasksResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewWorkflowFolderDs返回参数结构体
 */
export interface RenewWorkflowFolderDsResponse {
    /**
     * 执行是否成功
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeSearchInfo请求参数结构体
 */
export interface DescribeCodeSearchInfoRequest {
    /**
     * 搜索关键词
     */
    Keyword: string;
    /**
     * 要查询的搜索范围
     */
    SearchScope: string;
    /**
     * 页数
     */
    PageNumber: number;
    /**
     * 条数
     */
    PageSize: number;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 搜索范围列表
     */
    SearchScopes?: Array<string>;
    /**
     * 责任人ID列表
     */
    OwnerIds?: Array<string>;
    /**
     * 文件类型列表
     */
    FileTypes?: Array<string>;
    /**
     * 任务类型列表
     */
    TaskTypes?: Array<string>;
    /**
     * 更新时间范围：开始时间
     */
    StartTime?: string;
    /**
     * 更新时间范围：结束时间
     */
    EndTime?: string;
    /**
     * 开发态/生产态
     */
    Status?: string;
    /**
     * 工作流ID
     */
    WorkflowIds?: Array<string>;
    /**
     * 文件夹ID
     */
    FolderIds?: Array<string>;
    /**
     * 数据源ID
     */
    DatasourceIds?: Array<string>;
    /**
     * 文件夹路径
     */
    FolderPaths?: Array<string>;
    /**
     * 任务状态
     */
    TaskStatus?: Array<string>;
}
/**
 * 建表columns入参
 */
export interface Columns {
    /**
     * 字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 字段类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 字段描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 位置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Position?: number;
    /**
     * 是否分区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPartition?: boolean;
    /**
     * 业务额外属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizParams?: BizParams;
    /**
     * 字段精度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Precision?: number;
    /**
     * 字段位数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scale?: number;
    /**
     * 字段额外属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Params;
}
/**
 * 规则组监控业务分页视图
 */
export interface RuleGroupMonitorPage {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<RuleGroupMonitor>;
}
/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
    /**
     * 是否删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportOfflineTask返回参数结构体
 */
export interface ImportOfflineTaskResponse {
    /**
     * 异步操作id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例请求实体
 */
export interface InstanceInfo {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
}
/**
 * 任务信息数据
 */
export interface TaskInfoData {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent: string;
    /**
     * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag: boolean;
    /**
     * 延时实例生成时间(延时调度)，转换为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime: number;
    /**
     * crontab表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType: number;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep: number;
    /**
     * 延时执行时间（延时执行) 对应为 开始时间 状态为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType: number;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp: string;
    /**
     * 集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime: string;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend: number;
    /**
     * 扩展属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt: Array<TaskExtInfo>;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes: string;
    /**
     * 队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue: string;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer: string;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow: string;
    /**
     * 任务参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params: Array<ParamInfo>;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser: string;
    /**
     * 最后修改的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 最后修改的人Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc: string;
    /**
     * 资源组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc: string;
    /**
     * 真实工作流Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigs: Array<DependencyConfig>;
    /**
     * 虚拟任务状态1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus: string;
    /**
     * 虚拟任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId: string;
}
/**
 * UpdateBatchTaskAdvancedSettings请求参数结构体
 */
export interface UpdateBatchTaskAdvancedSettingsRequest {
    /**
     * 待更新的任务ID
     */
    TaskIds: Array<string>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 重试等待时间
     */
    RetryWait?: number;
    /**
     * 失败重试次数
     */
    TryLimit?: number;
    /**
     * 任务优先级
     */
    RunPriority?: number;
    /**
     * 超时处理策略
     */
    ExecutionTTL?: number;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 页数
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
}
/**
 * TaskDatasourceDTO
 */
export interface TaskDatasourceDTO {
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: string;
}
/**
 * DescribeInstanceByCycleReport请求参数结构体
 */
export interface DescribeInstanceByCycleReportRequest {
    /**
     * 周期类型
     */
    Type: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 开始日期
     */
    StartTime?: string;
    /**
     * 结束日期
     */
    EndTime?: string;
}
/**
 * UpdateBatchTaskSchedule返回参数结构体
 */
export interface UpdateBatchTaskScheduleResponse {
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataSourceWithoutInfo返回参数结构体
 */
export interface DescribeDataSourceWithoutInfoResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<DataSourceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBaselineTaskAlarmStatus返回参数结构体
 */
export interface ModifyBaselineTaskAlarmStatusResponse {
    /**
     * 成功或失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchStopWorkflowsByIds返回参数结构体
 */
export interface BatchStopWorkflowsByIdsResponse {
    /**
     * 操作返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: OperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDependOpsTaskList返回参数结构体
 */
export interface DescribeDependOpsTaskListResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据源对象
 */
export interface DatasourceBaseInfo {
    /**
     * 若数据源列表为绑定数据库，则为db名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseNames: Array<string>;
    /**
     * 数据源描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 数据源ID
     */
    ID: number;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: string;
    /**
     * 数据源名称，在相同SpaceName下，数据源名称不能为空
     */
    Name: string;
    /**
     * 数据源引擎所属区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 数据源类型:枚举值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 数据源所属的集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 数据源版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
}
/**
 * TaskTypeExts参数
 */
export interface TaskTypeExtParamVO {
    /**
     * TaskTypeExts的Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtKey?: string;
    /**
     * TaskTypeExts的Value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtValue?: TaskTypeExtVO;
}
/**
 * DescribeStatisticInstanceStatusTrendOps返回参数结构体
 */
export interface DescribeStatisticInstanceStatusTrendOpsResponse {
    /**
     * 实例状态统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<InstanceStatisticInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CountOpsInstanceState返回参数结构体
 */
export interface CountOpsInstanceStateResponse {
    /**
     * 任务对应实例的状态统计
     */
    Data?: TaskInstanceCountDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQualityScoreTrend请求参数结构体
 */
export interface DescribeQualityScoreTrendRequest {
    /**
     * 统计开始日期
     */
    StatisticsStartDate: number;
    /**
     * 统计结束日期
     */
    StatisticsEndDate: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据来源id
     */
    DatasourceId?: string;
    /**
     * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
     */
    ScoreType?: string;
    /**
     * 过滤参数
     */
    Filters?: Array<Filter>;
}
/**
 * SubmitTaskTestRun请求参数结构体
 */
export interface SubmitTaskTestRunRequest {
    /**
     * taskId列表
     */
    TaskIds: string;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkFlowId?: string;
    /**
     * 工作流名称
     */
    Name?: string;
    /**
     * 工作流任务列表
     */
    Tasks?: Array<StageCloudApiRequest>;
    /**
     * 备注
     */
    Description?: string;
    /**
     * 运行参数，map的Json形式
     */
    RunParams?: string;
    /**
     * 脚本内容
     */
    ScriptContent?: string;
    /**
     * 版本号
     */
    VersionId?: string;
}
/**
 * DeleteBaseline返回参数结构体
 */
export interface DeleteBaselineResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 离线任务实例运行指标概览
 */
export interface InstanceReportSummary {
    /**
     * 总读取记录数
     */
    TotalReadRecords: number;
    /**
     * 总读取字节数
     */
    TotalReadBytes: number;
    /**
     * 总写入记录数
     */
    TotalWriteRecords: number;
    /**
     * 总写入字节数
     */
    TotalWriteBytes: number;
    /**
     * 速率（条/秒）
     */
    RecordSpeed: number;
    /**
     * 流量（Byte/秒）
     */
    ByteSpeed: number;
    /**
     * 脏数据记录数
     */
    TotalErrorRecords: number;
    /**
     * 脏数据字节数
     */
    TotalErrorBytes: number;
    /**
     * 任务运行总时长
     */
    TotalRunDuration: number;
    /**
     * 任务开始运行时间
     */
    BeginRunTime: string;
    /**
     * 任务结束运行时间
     */
    EndRunTime: string;
}
/**
 * CheckAlarmRegularNameExist返回参数结构体
 */
export interface CheckAlarmRegularNameExistResponse {
    /**
     * 是否重名
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流画布操作日志
 */
export interface WorkflowCanvasOplog {
    /**
     * 创建时间，时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTimestamp?: number;
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 操作人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorId?: number;
    /**
     * 操作人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
    /**
     * 操作日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
}
/**
 * 速度值对象
 */
export interface SpeedValue {
    /**
     * 带毫秒的时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Speed: number;
}
/**
 * 函数提交版本信息
 */
export interface FunctionVersion {
    /**
     * 版本号：V0 V1 V2
     */
    Tag: string;
    /**
     * 提交人 ID
     */
    UserId: string;
    /**
     * 变更类型：ADD、MODIFY
     */
    Type: string;
    /**
     * 备注
     */
    Comment: string;
    /**
     * 提交时间: UTC 秒数
     */
    Timestamp: string;
    /**
     * 提交人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * 版本内容：json string 格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content: string;
}
/**
 * PreviewDataTableCsv请求参数结构体
 */
export interface PreviewDataTableCsvRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * Cos 存储桶名称
     */
    BucketName: string;
    /**
     * 文件在cos上的存储路径，该路径有固定前缀，/datastudio/data_manage/import/项目ID，example: /datastudio/data_manage/import/1460947878944567296/demo_2.csv
     */
    FilePath: string;
    /**
     * 首行是否为字段名，默认为 false，如果选择 true，会将首行解析成列名，且在数据中会跳过第一行
     */
    HeaderLine?: boolean;
    /**
     * 字段分隔符，取值为 0,1,2,3,4,5，各值含义为0: \u0001(hive默认)，1: 竖线 （ | ） ，2: 空格，3: 分号，4: 英文逗号，5: 制表符 \t，如果没填或填错，默认为英文逗号
     */
    ColumnDelimiter?: string;
    /**
     * 转义符，char 类型，只取当前参数的第一个字符，如果不传，默认为 \
     */
    Escape?: string;
    /**
     * 引号符，取值为 0、1，各个值的含义为 0: 英文单引号，1: 英文双引号，如果没填或填错，默认为英文双引号
     */
    Quote?: string;
}
/**
 * 实例统计信息展示
 */
export interface ScreenInstanceInfo {
    /**
     * 统计标示 0：全部、1：当前天、2：昨天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountTag?: number;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNum?: number;
    /**
     * 运行中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningNum?: number;
    /**
     * 等待运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaitRunningNum?: number;
    /**
     * 等待上游
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyNum?: number;
    /**
     * 等待事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaitEventNum?: string;
    /**
     * 正在终止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoppingNum?: number;
    /**
     * 成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SucceedNum?: number;
    /**
     * 失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedNum?: number;
}
/**
 * 任务运维详情
 */
export interface TaskOpsDto {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 虚拟任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 任务为虚拟任务时，任务所在的真实工作流Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 最近更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId: string;
    /**
     * 调度生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 调度结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep: number;
    /**
     * 调度cron表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression: string;
    /**
     * 延时执行时间，unit=分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime: number;
    /**
     * 开始执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime: number;
    /**
     * 重试等待时间, unit=分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait: number;
    /**
     * 是否可重试，1 代表可以重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryAble: number;
    /**
     * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType: TaskTypeOpsDto;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL: number;
    /**
     * 自依赖类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend: string;
    /**
     * 左侧坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate: number;
    /**
     * 顶部坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate: number;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes: string;
    /**
     * 任务初始化策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy: string;
    /**
     * 计算队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue: string;
    /**
     * 最新调度提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime: string;
    /**
     * 按cron表达式计算的任务开始执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime: string;
    /**
     * 调度计划描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc: string;
    /**
     * 计算资源组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup: string;
    /**
     * 任务创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator: string;
    /**
     * 任务依赖类型 and、or
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel: string;
    /**
     * 任务工作流依赖 yes、no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow: string;
    /**
     * 事件监听配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig: string;
    /**
     * 事件驱动配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig: string;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus: string;
    /**
     * 任务依赖边详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo: LinkOpsDto;
    /**
     * 任务产品类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 主账户userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId: string;
    /**
     * 用户userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId: string;
    /**
     * 更新人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 更新人userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId: string;
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId: number;
    /**
     * 任务类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeDesc: string;
    /**
     * 是否展示工作流
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShowWorkflow: boolean;
    /**
     * 首次提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime: string;
    /**
     * 首次运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstRunTime: string;
    /**
     * 调度描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleDesc: string;
    /**
     * 周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleNum: number;
    /**
     * 表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Crontab: string;
    /**
     * 开始日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartDate: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndDate: string;
    /**
     * 周期单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit: string;
    /**
     * 初始化策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InitStrategy: string;
    /**
     * 层级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Layer: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType: string;
    /**
     * 目标数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId: string;
    /**
     * 目标数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType: string;
    /**
     * 子任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TasksStr: string;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit: boolean;
    /**
     * 资源组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupId?: string;
    /**
     * 资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupName?: string;
}
/**
 * RenewWorkflowOwnerDs返回参数结构体
 */
export interface RenewWorkflowOwnerDsResponse {
    /**
     * 执行结果
     */
    Data?: BatchResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBatchTaskResourceGroup返回参数结构体
 */
export interface UpdateBatchTaskResourceGroupResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailNumber?: number;
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowParamDs请求参数结构体
 */
export interface DescribeWorkflowParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId?: string;
    /**
     * 数据时间
     */
    CurRunDate?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
}
/**
 * DiagnosePlus请求参数结构体
 */
export interface DiagnosePlusRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * DescribeIntegrationStatisticsAgentStatus请求参数结构体
 */
export interface DescribeIntegrationStatisticsAgentStatusRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
    /**
     * 资源组id
     */
    ExecutorGroupId?: string;
}
/**
 * DescribeInstanceLogFile请求参数结构体
 */
export interface DescribeInstanceLogFileRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 实例数据时间
     */
    CurRunDate: string;
    /**
     * 执行机IP
     */
    BrokerIp: string;
    /**
     * 日志文件名
     */
    OriginFileName: string;
}
/**
 * CheckTaskNameExistDs请求参数结构体
 */
export interface CheckTaskNameExistDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 任务Id
     */
    TaskId?: string;
    /**
     * 产品名称
     */
    ProductName?: string;
}
/**
 * DescribeTaskLatestRunTime返回参数结构体
 */
export interface DescribeTaskLatestRunTimeResponse {
    /**
     * 最近一次任务执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRuleTemplate返回参数结构体
 */
export interface ModifyRuleTemplateResponse {
    /**
     * 修改成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例日志信息
 */
export interface IntegrationInstanceLog {
    /**
     * 任务日志信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogInfo?: string;
}
/**
 * CSV读取结果
 */
export interface CsvReadDTO {
    /**
     * 行总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RowCount?: number;
    /**
     * 首行是否为列名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsHeadLineSchema?: boolean;
    /**
     * 列总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnCount?: number;
    /**
     * 列 Schema
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Columns?: Array<RowColumn>;
    /**
     * Csv 全部行数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rows?: Array<CsvRow>;
}
/**
 * DeleteTaskFolder请求参数结构体
 */
export interface DeleteTaskFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作量ID
     */
    WorkflowId: string;
    /**
     * 任务文件夹ID
     */
    TaskFolderId: string;
}
/**
 * 数据集成大屏趋势图统计结果
 */
export interface IntegrationStatisticsTrendResult {
    /**
     * 统计属性名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatisticName: Array<string>;
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatisticValue: Array<number | bigint>;
    /**
     * 统计项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatisticType: string;
}
/**
 * 指定时间窗口实例耗时排行
 */
export interface RuntimeInstanceCntTop {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 任务周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit?: string;
    /**
     * 实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: string;
    /**
     * 耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunTime?: number;
    /**
     * 实例运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunTime?: string;
    /**
     * 等待调度耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaitScheduleTime?: number;
}
/**
 * 列的元数据
 */
export interface ColumnMeta {
    /**
     * 字段英文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameEn?: string;
    /**
     * 字段中文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameCn?: string;
    /**
     * 字段类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 字段描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 字段序号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Position?: number;
    /**
     * 是否为分区字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPartition?: boolean;
    /**
     * 字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * HBase列簇属性集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnFamiliesFieldSet?: Array<Pair>;
    /**
     * 对应码表字典ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DictionaryId?: string;
    /**
     * 对应码表字典名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DictionaryName?: string;
}
/**
 * DescribeTaskReport返回参数结构体
 */
export interface DescribeTaskReportResponse {
    /**
     * 总读取条数
     */
    TotalReadRecords: number;
    /**
     * 总读取字节数，单位为Byte
     */
    TotalReadBytes: number;
    /**
     * 总写入条数
     */
    TotalWriteRecords: number;
    /**
     * 总写入字节数，单位为Byte
     */
    TotalWriteBytes: number;
    /**
     * 总脏数据条数
     */
    TotalErrorRecords: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetOfflineDIInstanceList返回参数结构体
 */
export interface GetOfflineDIInstanceListResponse {
    /**
     * 总条数
     */
    Total: number;
    /**
     * 实例详情
     */
    List: Array<OfflineInstance>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBrowsingHistories返回参数结构体
 */
export interface DescribeBrowsingHistoriesResponse {
    /**
     * 浏览历史列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<BrowsingHistory>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetOfflineInstanceList返回参数结构体
 */
export interface GetOfflineInstanceListResponse {
    /**
     * 总条数
     */
    Total: number;
    /**
     * 实例详情
     */
    List: Array<OfflineInstance>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIntegrationTask请求参数结构体
 */
export interface CreateIntegrationTaskRequest {
    /**
     * 任务信息
     */
    TaskInfo: IntegrationTaskInfo;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 字段变量
 */
export interface FieldConfig {
    /**
     * 字段key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldKey?: string;
    /**
     * 字段值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldValue?: string;
    /**
     * 字段值类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldDataType?: string;
}
/**
 * DescribeRuleGroupExecResultsByPage返回参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageResponse {
    /**
     * 规则组执行结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupExecResultPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaselineTaskDagResponse
 */
export interface DescribeBaselineTaskDagResponse {
    /**
     * 基线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Baseline?: BaselineDto;
    /**
     * 基线任务dag
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineTaskDag?: Array<BaselineTaskDto>;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
     * 任务详情1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: TaskInfoData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDsFolder请求参数结构体
 */
export interface ModifyDsFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 文件夹Id
     */
    FolderId: string;
    /**
     * 父文件夹ID
     */
    ParentsFolderId?: string;
}
/**
 * GetTestRunTaskInstancesStatusInfo返回参数结构体
 */
export interface GetTestRunTaskInstancesStatusInfoResponse {
    /**
     * 实例列表
     */
    Instances?: Array<ParamGetTaskInstancesStatusInfoResponseInstance>;
    /**
     * 消息
     */
    Messages?: string;
    /**
     * 是否异常
     */
    IsException?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsEventListener请求参数结构体
 */
export interface DescribeDsEventListenerRequest {
    /**
     * 任务id
     */
    Key: string;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * 离线任务实例写入节点的运行指标
 */
export interface InstanceReportWriteNode {
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 数据来源
     */
    DataSource?: string;
    /**
     * 总条数
     */
    TotalWriteRecords?: number;
    /**
     * 总字节数
     */
    TotalWriteBytes?: number;
    /**
     * 速度（条/秒）
     */
    RecordSpeed?: number;
    /**
     * 吞吐（Byte/秒）
     */
    ByteSpeed?: number;
    /**
     * 脏数据条数
     */
    TotalErrorRecords?: number;
    /**
     * 等待上游数据发送过来的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaitReaderTime?: number;
}
/**
 * 项目克隆子对象DTO
 */
export interface SubCloneObjectDTO {
    /**
     * OBJECT_SUB_TASK，CONDITION_SUB_FUNCTION，CONDITION_SUB_EVENT，CONDITION_SUB_PARAMETER，CONDITION_SUB_WORKFLOW
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 子对象Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 子对象值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 子对象扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtInfo?: Array<string>;
}
/**
 * 数据质量规则操作历史分页
 */
export interface RuleHistoryPage {
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 规则操作历史列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<RuleHistory>;
}
/**
 * KillTasksTestRun请求参数结构体
 */
export interface KillTasksTestRunRequest {
    /**
     * 作业ID
     */
    Id: string;
    /**
     * 任务编号列表
     */
    TaskIds: Array<string>;
}
/**
 * ImportDsEvent返回参数结构体
 */
export interface ImportDsEventResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskFolder返回参数结构体
 */
export interface ModifyTaskFolderResponse {
    /**
     * true代表成功，false代表失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsNotSubmitTasksAndCanRunByWorkflow返回参数结构体
 */
export interface DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse {
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemoveWorkflowDs返回参数结构体
 */
export interface RemoveWorkflowDsResponse {
    /**
     * 是否删除成功
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetOfflineDIInstanceList请求参数结构体
 */
export interface GetOfflineDIInstanceListRequest {
    /**
     * 第几页
     */
    PageIndex: number;
    /**
     * 每页几条
     */
    PageSize: number;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 无
     */
    SearchCondition?: SearchConditionNew;
}
/**
 * ModifyExecStrategy返回参数结构体
 */
export interface ModifyExecStrategyResponse {
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatasource请求参数结构体
 */
export interface DescribeDatasourceRequest {
    /**
     * 对象唯一ID
     */
    Id: number;
}
/**
 * 集成节点schema
 */
export interface IntegrationNodeSchema {
    /**
     * schema id
     */
    Id: string;
    /**
     * schema名称
     */
    Name: string;
    /**
     * schema类型
     */
    Type: string;
    /**
     * schema值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * schema拓展属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<RecordField>;
    /**
     * schema别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * 字段备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Comment?: string;
}
/**
 * CreateBrowsingHistory请求参数结构体
 */
export interface CreateBrowsingHistoryRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源名字
     */
    Title: string;
    /**
     * 查询历史的资源类型file/task/function/event等
     */
    ResourceType: string;
    /**
     * 资源唯一id，如taskId等
     */
    ResourceId: string;
    /**
     * json格式的资源相关个性化信息
     */
    ExtraInfo?: string;
}
/**
 * 函数类型或函数分类
 */
export interface FunctionTypeOrKind {
    /**
     * 无
     */
    Name: string;
    /**
     * 无
     */
    ZhName: string;
    /**
     * 无
     */
    EnName: string;
}
/**
 * DescribeTableSchemaInfo返回参数结构体
 */
export interface DescribeTableSchemaInfoResponse {
    /**
     * 123
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaInfoList?: Array<SchemaDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeleteTasksDsAsync请求参数结构体
 */
export interface BatchDeleteTasksDsAsyncRequest {
    /**
     * 批量删除的任务TaskId
     */
    TaskIdList: Array<string>;
    /**
     * true : 删除后下游任务可正常运行
  false：删除后下游任务不可运行
     */
    DeleteMode?: boolean;
    /**
     * true：通知下游任务责任人
  false:  不通知下游任务责任人
     */
    OperateInform?: boolean;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * true: 删除任务引用的脚本
  false: 不删除任务引用的脚本
     */
    DeleteScript?: boolean;
}
/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
    /**
     * 结果
     */
    Data?: string;
    /**
     * 实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceList?: Array<InstanceList>;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartIntegrationTask请求参数结构体
 */
export interface StartIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP)
     */
    Event?: string;
    /**
     * 额外参数
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 操作类型描述
     */
    EventDesc?: string;
}
/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 建dlc表所需信息
 */
export interface TableBaseInfo {
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 数据表所属数据源名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceConnectionName?: string;
    /**
     * 表备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableComment?: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 数据格式类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableFormat?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserAlias?: string;
    /**
     * 建表用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserSubUin?: string;
    /**
     * 数据治理配置项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GovernPolicy?: DlcDataGovernPolicy;
    /**
     * 库数据治理是否关闭，关闭：true，开启：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbGovernPolicyIsDisable?: string;
}
/**
 * DescribeDsEvent请求参数结构体
 */
export interface DescribeDsEventRequest {
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 事件名称/项目名称
     */
    EventName?: string;
    /**
     * 事件类型GENERAL、TIME_SERIES
     */
    EventType?: string;
    /**
     * 事件子类型SECOND、MIN、HOUR、DAY
     */
    EventSubType?: string;
    /**
     * 日期格式
     */
    DatetimeFormat?: string;
    /**
     * 创建开始时间
     */
    CreationTimeStart?: string;
    /**
     * 创建结束时间
     */
    CreationTimeEnd?: string;
    /**
     * 排序参数
     */
    OrderFields?: Array<OrderField>;
    /**
     * 责任人筛选
     */
    OwnerNameList?: Array<string>;
    /**
     * 任务周期筛选
     */
    TaskCycleType?: string;
    /**
     * 0表示自定义，其他的表示固定参数，单位为天
     */
    TimeToLive?: Array<number | bigint>;
}
/**
 * 离线实例
 */
export interface OfflineInstance {
    /**
     * 创建账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUin: string;
    /**
     * 操作账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin: string;
    /**
     * 主账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin: string;
    /**
     * 账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId: string;
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkspaceId: string;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
    /**
     * 下发时间
     */
    IssueId: string;
    /**
     * 资源组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InlongTaskId: string;
    /**
     * 资源组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup: string;
    /**
     * 实例类型
     */
    TaskRunType: number;
    /**
     * 实例状态
     */
    State: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 最后更新时间
     */
    UpdateTime: string;
    /**
     * 唯一key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceKey: string;
}
/**
 * ModifyTaskInfoDs请求参数结构体
 */
export interface ModifyTaskInfoDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟
     */
    DelayTime?: number;
    /**
     * 启动时间
     */
    StartupTime?: number;
    /**
     * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
     */
    SelfDepend?: number;
    /**
     * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
     */
    StartTime?: string;
    /**
     * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
     */
    EndTime?: string;
    /**
     * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
     */
    TaskAction?: string;
    /**
     * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
     */
    CycleType?: number;
    /**
     * 步长，间隔时间，最小1
     */
    CycleStep?: number;
    /**
     * cron表达式  周期类型为crontab调度才需要
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionEndTime?: string;
    /**
     * 新的任务名
     */
    TaskName?: string;
    /**
     * 失败重试间隔,单位分钟，创建任务的时候已经给了默认值
     */
    RetryWait?: number;
    /**
     * 失败重试次数，创建任务的时候已经给了默认值
     */
    TryLimit?: number;
    /**
     * 是否可重试，1代表可以重试
     */
    Retriable?: number;
    /**
     * 运行优先级，4高 5中 6低
     */
    RunPriority?: number;
    /**
     * 任务的扩展配置
     */
    TaskExt?: Array<TaskExtInfo>;
    /**
     * 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器
     */
    ResourceGroup?: string;
    /**
     * 资源池队列名称
     */
    YarnQueue?: string;
    /**
     * 资源组下具体执行机，any 表示可以跑在任意一台。
     */
    BrokerIp?: string;
    /**
     * 责任人
     */
    InCharge?: string;
    /**
     * 任务备注
     */
    Notes?: string;
    /**
     * 任务参数
     */
    TaskParamInfos?: Array<ParamInfo>;
    /**
     * 源数据源
     */
    SourceServer?: string;
    /**
     * 目标数据源
     */
    TargetServer?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
     */
    DependencyWorkflow?: string;
    /**
     * 依赖配置
     */
    DependencyConfigDTOs?: Array<DependencyConfig>;
    /**
     * 执行耗时
     */
    ExecutionTTL?: number;
    /**
     * 脚本是否改变
     */
    ScriptChange?: boolean;
}
/**
 * StopAdhocTask返回参数结构体
 */
export interface StopAdhocTaskResponse {
    /**
     * 终止请求状态
     */
    Result: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectParamVersionDs请求参数结构体
 */
export interface DescribeProjectParamVersionDsRequest {
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeNewSqlTaskResult返回参数结构体
 */
export interface DescribeNewSqlTaskResultResponse {
    /**
     * 任务实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 任务提交记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId: number;
    /**
     * 子任务执行记录Id
     */
    DetailId: number;
    /**
     * 是否是结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultSet: boolean;
    /**
     * 结果内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultContent: string;
    /**
     * 字段集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldList: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源管理目录树节点
 */
export interface ResourcePathTree {
    /**
     * 资源名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 是否为叶子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLeaf: boolean;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: string;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath: string;
    /**
     * 文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType: string;
    /**
     * 文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size: number;
    /**
     * 文件MD5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value: string;
    /**
     * 文件拥有者名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName: string;
    /**
     * 更新人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser: string;
    /**
     * 文件更新人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: number;
    /**
     * Cos存储桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucket: string;
    /**
     * Cos地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosRegion: string;
    /**
     * 额外信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo: string;
}
/**
 * 任务依赖的边信息
 */
export interface TaskLinkInfo {
    /**
     * 下游任务id
     */
    TaskTo: string;
    /**
     * 上游任务id
     */
    TaskFrom: string;
    /**
     * 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务
     */
    LinkType: string;
    /**
     * 依赖边id
     */
    LinkId: string;
}
/**
 * dlc建表属性
 */
export interface Property {
    /**
     * key值
     */
    Key: string;
    /**
     * value值
     */
    Value: string;
}
/**
 * TaskDsDTO 减少嵌套层数
 */
export interface TaskDsDTOLite {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: number;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskDsDTONoRecur>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<DependencyConfigDsDTONoRecur>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<Params>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
}
/**
 * BatchStartIntegrationTasks返回参数结构体
 */
export interface BatchStartIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRealTimeTaskSpeed返回参数结构体
 */
export interface DescribeRealTimeTaskSpeedResponse {
    /**
     * 同步速度条/s列表
     */
    RecordsSpeedList: Array<RecordsSpeed>;
    /**
     * 同步速度字节/s列表
     */
    BytesSpeedList: Array<BytesSpeed>;
    /**
     * 同步速度，包括了RecordsSpeedList和BytesSpeedList
     */
    Data: RealTimeTaskSpeed;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFolderWorkflowList请求参数结构体
 */
export interface DescribeFolderWorkflowListRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 父文件夹ID
     */
    ParentsFolderId: string;
    /**
     * 关键字
     */
    KeyWords?: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 页大小，默认10
     */
    PageSize?: number;
}
/**
 * DescribeBaselineInstanceDag返回参数结构体
 */
export interface DescribeBaselineInstanceDagResponse {
    /**
     * 基线实例dag
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BaselineInstanceVo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 属性配置
 */
export interface TaskExtVO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<ParamInfo>;
    /**
     * 任务试运行扩展业务属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DryRunExtAttributes?: Array<AttributeItemVO>;
    /**
     * 任务试运行动态传参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DryRunParameter?: Array<AttributeItemVO>;
}
/**
 * CheckTaskNameExist返回参数结构体
 */
export interface CheckTaskNameExistResponse {
    /**
     * 结果
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSchedulerRunTimeInstanceCntByStatus请求参数结构体
 */
export interface DescribeSchedulerRunTimeInstanceCntByStatusRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 周期类型
     */
    CycleUnit?: string;
    /**
     * 时间单元 eg: 12h
     */
    TimeUnit?: string;
    /**
     * 开始日期：2023-03-02
     */
    StartTime?: string;
    /**
     * 结束日前：2023-03-20
     */
    EndTime?: string;
    /**
     * 1
     */
    TaskType?: number;
    /**
     * 1
     */
    InCharge?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
    /**
     * 排序字段
     */
    SortItem?: string;
    /**
     * 升序降序
     */
    SortType?: string;
}
/**
 * 任务分页查询
 */
export interface TaskInfoPage {
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 工作流列表信息
     */
    Items: Array<TaskCanvasInfo>;
    /**
     * 总页数
     */
    TotalPage: number;
    /**
     * 页数
     */
    PageCount?: number;
    /**
     * 总条数
     */
    TotalCount?: number;
}
/**
 * CreateDsFolder请求参数结构体
 */
export interface CreateDsFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 父文件夹ID
     */
    ParentsFolderId?: string;
}
/**
 * DescribeMonitorsByPage返回参数结构体
 */
export interface DescribeMonitorsByPageResponse {
    /**
     * 分页查询结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupMonitorPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewWorkflowSchedulerInfoDs请求参数结构体
 */
export interface RenewWorkflowSchedulerInfoDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 延迟时间
     */
    DelayTime?: number;
    /**
     * 启动时间
     */
    StartupTime?: number;
    /**
     * 任务依赖
     */
    SelfDepend?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 指定运行时间
     */
    TaskAction?: string;
    /**
     * 调度周期时间单位
     */
    CycleType?: string;
    /**
     * 调度周期
     */
    CycleStep?: number;
    /**
     * 执行时间左闭区间
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
     */
    ExecutionEndTime?: string;
    /**
     * 任务初始化策略，T_PLUS_1、T_PLUS_0、T_MINUS_1
     */
    InstanceInitStrategy?: string;
    /**
     * 工作流依赖，yes or no
     */
    DependencyWorkflow?: string;
    /**
     * CrontabExpression
     */
    CrontabExpression?: string;
}
/**
 * 过去七天（不算当天）表的热度值
 */
export interface TableHeat {
    /**
     * 表ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 统计日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DayTime: string;
    /**
     * 表热度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Heat: number;
    /**
     * 表热度最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxHeat: number;
}
/**
 * DescribeDsEventPublisherList请求参数结构体
 */
export interface DescribeDsEventPublisherListRequest {
    /**
     * 任务列表，不可重复
     */
    KeySet: Array<string>;
}
/**
 * RunTasksByMultiWorkflow请求参数结构体
 */
export interface RunTasksByMultiWorkflowRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 工作流id列表
     */
    WorkflowIds: Array<string>;
    /**
     * 是否补录中间实例 0.不补录 1.补录实例
     */
    EnableMakeUp: number;
}
/**
 * DescribeBaselines返回参数结构体
 */
export interface DescribeBaselinesResponse {
    /**
     * 基线列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeBaselineResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitIntegrationTask返回参数结构体
 */
export interface SubmitIntegrationTaskResponse {
    /**
     * 任务提交记录
     */
    Record: AdhocRecord;
    /**
     * 子任务记录列表
     */
    Details: Array<AdhocDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeSearchAuditInfo请求参数结构体
 */
export interface DescribeCodeSearchAuditInfoRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DescribeDataSourceWithoutInfo请求参数结构体
 */
export interface DescribeDataSourceWithoutInfoRequest {
    /**
     * 1
     */
    OrderFields?: Array<OrderField>;
    /**
     * 1
     */
    Filters?: Array<Filter>;
}
/**
 * 日评分信息
 */
export interface DailyScoreInfo {
    /**
     * 统计日期 时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatisticsDate: number;
    /**
     * 评分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
}
/**
 * DescribeInLongAgentVpcList返回参数结构体
 */
export interface DescribeInLongAgentVpcListResponse {
    /**
     * VPC列表
     */
    VpcList: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataTableImportProgress请求参数结构体
 */
export interface DescribeDataTableImportProgressRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 记录ID
     */
    Id: number;
}
/**
 * DescribeQualityScore请求参数结构体
 */
export interface DescribeQualityScoreRequest {
    /**
     * 统计日期
     */
    StatisticsDate: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据来源id
     */
    DatasourceId?: string;
    /**
     * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
     */
    ScoreType?: string;
    /**
     * 过滤参数
     */
    Filters?: Array<Filter>;
}
/**
 * GetResourcePathTree请求参数结构体
 */
export interface GetResourcePathTreeRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 资源文件类型
     */
    FileType?: string;
    /**
     * 资源路径
     */
    FilePath?: string;
    /**
     * 文件夹类型
     */
    DirectoryType?: string;
}
/**
 * DescribeChildrenDs请求参数结构体
 */
export interface DescribeChildrenDsRequest {
    /**
     * 页数
     */
    PageNum: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 任务接口条件
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * BatchStopTasksNew返回参数结构体
 */
export interface BatchStopTasksNewResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分页查询工作流画布运行起止时间
 */
export interface WorkFlowExecuteDtoByPage {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<WorkFlowExecuteDto>;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
}
/**
 * DescribeRuleExecDetail返回参数结构体
 */
export interface DescribeRuleExecDetailResponse {
    /**
     * 规则执行结果详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleExecResultDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchCreateTaskVersionAsync返回参数结构体
 */
export interface BatchCreateTaskVersionAsyncResponse {
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDevelopmentSpaceSupportType返回参数结构体
 */
export interface DescribeDevelopmentSpaceSupportTypeResponse {
    /**
     * 脚本类型列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ScriptTypeInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestoreRecycleTask请求参数结构体
 */
export interface RestoreRecycleTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 产品名称
  DATA_DEV、DATA_QUALITY
     */
    ProductName: string;
    /**
     * 文件路径
     */
    FileRemotePath: string;
    /**
     * 是否虚拟任务
     */
    VirtualFlag?: boolean;
    /**
     * 虚拟任务id
     */
    VirtualTaskId?: string;
}
/**
 * DescribeTaskParentRunTime请求参数结构体
 */
export interface DescribeTaskParentRunTimeRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 父任务配置
     */
    ParentConfigs: Array<TaskParentSchedulerDependency>;
    /**
     * 周期类型
     */
    CycleType?: string;
    /**
     * 周期步长
     */
    CycleStep?: number;
    /**
     * 当前任务的数据时间，格式为 yyyy-MM-dd HH:mm:ss
     */
    CurRunDate?: string;
    /**
     * 延迟时间
     */
    DelayTime?: number;
    /**
     * Cron表达式
     */
    CrontabExpression?: string;
    /**
     * 初始化策略
     */
    InstanceInitStrategy?: string;
    /**
     * 任务Action
     */
    TaskAction?: string;
    /**
     * 周期类型为小时的时候需要设置当天的开始时间
     */
    ExecutionStartTime?: string;
    /**
     * 周期类型为小时的时候需要设置当天的结束时间
     */
    ExecutionEndTime?: string;
}
/**
 * DescribePathTrees请求参数结构体
 */
export interface DescribePathTreesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 关键字
     */
    Keyword?: string;
    /**
     * 是否包含文件
     */
    IncludeFile?: string;
    /**
     * 最大深度
     */
    MaxDepth?: number;
    /**
     * 文件是否被引用
     */
    FileNotUsed?: string;
}
/**
 * ExportDsEvent请求参数结构体
 */
export interface ExportDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * cos地址
     */
    OriginDomain: string;
    /**
     * 事件范围 ALL、PUBLISH、PARTIAL
     */
    Range: string;
    /**
     * 事件名称列表,用于发布管理导出
     */
    EventNames?: Array<string>;
    /**
     * 事件列表
     */
    Events?: Array<EventDsDto>;
    /**
     * 增量发布事件
     */
    PublishTime?: string;
    /**
     * 文件标题
     */
    Title?: string;
}
/**
 * CreateOpsMakePlan请求参数结构体
 */
export interface CreateOpsMakePlanRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 补录计划名称
     */
    MakeName: string;
    /**
     * 补录任务集合
     */
    TaskIdList: Array<string>;
    /**
     * 补录计划日期范围
     */
    MakeDatetimeList: Array<CreateMakeDatetimeInfo>;
    /**
     * 项目标识
     */
    ProjectIdent?: string;
    /**
     * 补录是否检查父任务状态，默认不检查。不推荐使用，后续会废弃，推荐使用 CheckParentType。
     */
    CheckParent?: boolean;
    /**
     * 补录检查父任务类型。取值范围：
  <li> NONE: 全部不检查 </li>
  <li> ALL: 检查全部上游父任务 </li>
  <li> MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 </li>
     */
    CheckParentType?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 已弃用。任务自依赖类型：parallel（并行），serial（无序串行），orderly（有序串行）
     */
    SelfDependence?: string;
    /**
     * 并行度
     */
    ParallelNum?: number;
    /**
     * 补录实例生成周期是否和原周期相同，默认为true
     */
    SameCycle?: boolean;
    /**
     * 补录实例目标周期类型
     */
    TargetTaskCycle?: string;
    /**
     * 补录实例目标周期类型指定时间
     */
    TargetTaskAction?: number;
    /**
     * 补录实例自定义参数
     */
    MapParamList?: Array<StrToStrMap>;
    /**
     * 创建人id
     */
    CreatorId?: string;
    /**
     * 创建人
     */
    Creator?: string;
    /**
     * 补录计划说明
     */
    Remark?: string;
    /**
     * 是否使用任务原有自依赖配置，默认为true
     */
    SameSelfDependType?: boolean;
    /**
     * 补录实例原始周期类型
     */
    SourceTaskCycle?: string;
    /**
     * 重新指定的调度资源组ID
     */
    SchedulerResourceGroup?: string;
    /**
     * 重新指定的集成资源组ID
     */
    IntegrationResourceGroup?: string;
    /**
     * 重新指定的调度资源组名称
     */
    SchedulerResourceGroupName?: string;
    /**
     * 重新指定的集成资源组名称
     */
    IntegrationResourceGroupName?: string;
}
/**
 * 实例日志信息详情
 */
export interface InstanceLogInfoOpsDto {
    /**
     * 实例运行日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogInfo: string;
    /**
     * 实例运行提交的yarn日志地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnLogInfo: Array<string>;
    /**
     * 实例运行产生的datax日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataLogInfo: string;
    /**
     * 第三方任务运行日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ThirdTaskRunLogInfo: string;
    /**
     * 第三方任务日志链接描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ThirdTaskLogUrlDesc: string;
}
/**
 * RunTask返回参数结构体
 */
export interface RunTaskResponse {
    /**
     * 运行成功或者失败
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 停止多个试运行任务返回体
 */
export interface KillTestRunTasksResponseResult {
    /**
     * 任务编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 消息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
}
/**
 * DescribeDependTasksNew返回参数结构体
 */
export interface DescribeDependTasksNewResponse {
    /**
     * 画布任务和链接信息
     */
    Data: CanvasInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIntegrationStatisticsInstanceTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
    /**
     * 资源组id
     */
    ExecutorGroupId?: string;
}
/**
 * DescribeDsFolderTree返回参数结构体
 */
export interface DescribeDsFolderTreeResponse {
    /**
     * 统一树结构返回属性列表
     */
    Data?: Array<PathNodeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据开发-统一树结构返回属性
 */
export interface PathNodeDsVO {
    /**
     * PathNode ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * PathNode 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Title?: string;
    /**
     * PathNode 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 父节点唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 是否叶子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLeaf?: boolean;
    /**
     * 子节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<PathNodeDsVO>;
    /**
     * 业务参数 ,base64编译的json串，获取具体参数需要base64反编译
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: string;
}
/**
 * DeleteResourcePath返回参数结构体
 */
export interface DeleteResourcePathResponse {
    /**
     * 资源路径删除结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableLineageInfo请求参数结构体
 */
export interface DescribeTableLineageInfoRequest {
    /**
     * 查询方向，INPUT,OUTPUT,BOTH枚举值
     */
    Direction: string;
    /**
     * 表信息
     */
    Data: TableLineageInfo;
    /**
     * 单次查询入度,默认 1
     */
    InputDepth?: number;
    /**
     * 单次查询出度,默认 1
     */
    OutputDepth?: number;
    /**
     * 额外参数（传递调用方信息）
     */
    ExtParams?: Array<LineageParamRecord>;
    /**
     * 是否过滤临时表,默认true
     */
    IgnoreTemp?: boolean;
    /**
     * 是否递归查询二级节点数目，默认为true
     */
    RecursiveSecond?: boolean;
}
/**
 * DryRunDIOfflineTask返回参数结构体
 */
export interface DryRunDIOfflineTaskResponse {
    /**
     * 数据时间
     */
    CurrentRunDate: string;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务状态
     */
    Status: string;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 任务实例唯一key
     */
    TaskInstanceKey: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaselines请求参数结构体
 */
export interface DescribeBaselinesRequest {
    /**
     * 无
     */
    Filters: Array<Filter>;
    /**
     * 页面下标
     */
    PageNumber: number;
    /**
     * 页面大小
     */
    PageSize: number;
}
/**
 * 离线任务新增参数
 */
export interface OfflineTaskAddParam {
    /**
     * 名称
     */
    WorkflowName: string;
    /**
     * 依赖
     */
    DependencyWorkflow: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 周期
     */
    CycleType: number;
    /**
     * 周期间隔
     */
    CycleStep: number;
    /**
     * 延迟时间
     */
    DelayTime: number;
    /**
     * crontab
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression: string;
    /**
     * 重试等待
     */
    RetryWait: number;
    /**
     * 是否可以重试
     */
    Retriable: number;
    /**
     * 重试限制
     */
    TryLimit: number;
    /**
     * 优先级
     */
    RunPriority: number;
    /**
     * 产品名称
     */
    ProductName: string;
    /**
     * 1 有序串行 一次一个，排队 orderly
  2 无序串行 一次一个，不排队 serial
  3 并行 一次多个 parallel
     */
    SelfDepend: number;
    /**
     * 周任务：1是周天，2是周1，7是周6 。
  月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 调度执行结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 调度执行开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 是否自动提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 实例初始化策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
}
/**
 * 数据开发脚本文件版本dto
 */
export interface UserFileVersionDto {
    /**
     * id
     */
    Id?: number;
    /**
     * 版本id,格式yyyyMMddHHmmssSSS
     */
    VersionId?: string;
    /**
     * 脚本资源id
     */
    ResourceId?: string;
    /**
     * 版本名称
     */
    VersionName?: string;
    /**
     * 版本创建时间，ISO8601格式
     */
    CreateTime?: string;
    /**
     * 版本变更描述
     */
    Description?: string;
    /**
     * 编排空间提交版本的任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 编排空间提交版本的任务版本累加号，如V3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskVersionNum?: string;
    /**
     * 编排空间提交版本的任务版本id，,格式yyyyMMddHHmmssSSS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskVersionId?: string;
    /**
     * 版本创建人姓名
     */
    UserName?: string;
    /**
     * 版本创建人uin
     */
    UserUin?: string;
    /**
     * 主账号uin
     */
    OwnerUin?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 租户id
     */
    AppId?: string;
    /**
     * 文件远程存储路径
     */
    RemotePath?: string;
    /**
     * 文件在对象存储的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectRegion?: string;
    /**
     * 文件在对象存储的桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectBucketName?: string;
}
/**
 * 实时任务同步速度趋势
 */
export interface RealTimeTaskSpeed {
    /**
     * 同步速度条/s列表
     */
    RecordsSpeedList: Array<RecordsSpeed>;
    /**
     * 同步速度字节/s列表
     */
    BytesSpeedList: Array<BytesSpeed>;
}
/**
 * ExportProjectParamDs返回参数结构体
 */
export interface ExportProjectParamDsResponse {
    /**
     * 导出的参数
     */
    Data?: ExportFile;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBrowsingHistory返回参数结构体
 */
export interface CreateBrowsingHistoryResponse {
    /**
     * 浏览历史列表
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListBatchDetail请求参数结构体
 */
export interface ListBatchDetailRequest {
    /**
     * 批量操作历史Id
     */
    JobId: number;
}
/**
 * ModifyWorkflowInfo返回参数结构体
 */
export interface ModifyWorkflowInfoResponse {
    /**
     * true代表成功，false代表失败
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 包含层级信息的函数
 */
export interface OrganizationalFunction {
    /**
     * 名称
     */
    Name?: string;
    /**
     * 展示名称
     */
    DisplayName?: string;
    /**
     * 层级路径
     */
    LayerPath?: string;
    /**
     * 上级层级路径
     */
    ParentLayerPath?: string;
    /**
     * 函数类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 函数分类：窗口函数、聚合函数、日期函数......
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind?: string;
    /**
     * 函数种类：系统函数、自定义函数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category?: string;
    /**
     * 函数状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 函数说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 函数用法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Usage?: string;
    /**
     * 函数参数说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDesc?: string;
    /**
     * 函数返回值说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReturnDesc?: string;
    /**
     * 函数示例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Example?: string;
    /**
     * 集群实例引擎 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterIdentifier?: string;
    /**
     * 函数 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FuncId?: string;
    /**
     * 函数类名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClassName?: string;
    /**
     * 函数资源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceList?: Array<FunctionVersion>;
    /**
     * 操作人 ID 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUserIds?: Array<number | bigint>;
    /**
     * 公有云 Owner ID 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUserIds?: Array<number | bigint>;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbName?: string;
    /**
     * 提交失败错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitErrorMsg?: string;
    /**
     * 模式名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaName?: string;
    /**
     * 函数命令格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CommandFormat?: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTimestamp?: string;
}
/**
 * 事件连续时间实例信息
 */
export interface EventBatchCaseDTO {
    /**
     * 事件实例id
     */
    CaseId?: string;
    /**
     * 事件名
     */
    Name?: string;
    /**
     * 事件触发起始时间
     */
    StartDimension?: string;
    /**
     * 创建时间
     */
    CreationTs?: string;
    /**
     * 消费者id
     */
    ConsumerId?: string;
    /**
     * 描述信息
     */
    Description?: string;
    /**
     * 事件触发结束时间
     */
    EndDimension?: string;
    /**
     * 事件周期
     */
    EventSubType?: string;
}
/**
 * RegisterEvent返回参数结构体
 */
export interface RegisterEventResponse {
    /**
     * 成功或者失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: BatchReturn;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTaskOutParamDs请求参数结构体
 */
export interface DeleteTaskOutParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 参数key
     */
    ParamKey?: string;
}
/**
 * DescribeIntegrationTasks请求参数结构体
 */
export interface DescribeIntegrationTasksRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 分页第n页
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 查询filter
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段信息
     */
    OrderFields?: Array<OrderField>;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 201. stream, 202. offline 默认实时
     */
    TaskType?: number;
}
/**
 * 事件消费记录
 */
export interface EventCaseConsumeLogOptDto {
    /**
     * 消费ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumeLogId?: string;
    /**
     * 事件案例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventCaseId?: string;
    /**
     * 消费者ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumerId?: string;
    /**
     * 消费时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTimestamp?: string;
    /**
     * 任务详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumerDetail?: TaskOpsDto;
}
/**
 * DescribeEventConsumeTasks返回参数结构体
 */
export interface DescribeEventConsumeTasksResponse {
    /**
     * 事件消费任务记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventCaseConsumeLogOptDtoCollection;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务告警信息
 */
export interface AlarmInfo {
    /**
     * 关联任务id
     */
    TaskIds: string;
    /**
     * 告警类别；failure表示失败告警；overtime表示超时告警
     */
    AlarmType: string;
    /**
     * 告警方式；SMS表示短信；Email表示邮件；HTTP 表示接口方式；Wechat表示微信方式
     */
    AlarmWay: string;
    /**
     * 告警接收人，多个告警接收人以;分割
     */
    AlarmRecipient: string;
    /**
     * 告警接收人id，多个告警接收人id以;分割
     */
    AlarmRecipientId: string;
    /**
     * 预计运行的小时，取值范围0-23
     */
    Hours: number;
    /**
     * 预计运行分钟，取值范围0-59
     */
    Minutes: number;
    /**
     * 告警出发时机；1表示第一次运行失败；2表示所有重试完成后失败；
     */
    TriggerType: number;
    /**
     * 告警信息id
     */
    AlarmId?: string;
    /**
     * 告警状态设置；1表示可用；0表示不可用，默认可用
     */
    Status?: number;
}
/**
 * DescribeStreamTaskLogList请求参数结构体
 */
export interface DescribeStreamTaskLogListRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 作业ID
     */
    JobId: string;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * container名字
     */
    Container?: string;
    /**
     * 条数
     */
    Limit?: number;
    /**
     * 排序类型 desc asc
     */
    OrderType?: string;
    /**
     * 作业运行的实例ID
     */
    RunningOrderId?: number;
    /**
     * 关键字
     */
    Keyword?: string;
}
/**
 * DescribeProjectParamDs返回参数结构体
 */
export interface DescribeProjectParamDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterInfoDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MakeUpTasksNew返回参数结构体
 */
export interface MakeUpTasksNewResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 日志内容实体
 */
export interface LogContentInfo {
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Log: string;
    /**
     * 日志组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgId: string;
    /**
     * 日志Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgLogId: string;
    /**
     * 时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 日志所属的容器名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName: string;
}
/**
 * 父任务配置
 */
export interface TaskParentSchedulerDependency {
    /**
     * 父任务ID
     */
    ParentId: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 周期类型
     */
    CycleType?: string;
    /**
     * 周期步长
     */
    CycleStep?: number;
    /**
     * 该值不填
     */
    NormalizedJobStartTime?: string;
    /**
     * 任务Action
     */
    TaskAction?: string;
    /**
     * 依赖值
     */
    SubordinateCyclicConfig?: string;
    /**
     * 空值策略
     */
    PollingNullStrategy?: string;
    /**
     * 依赖配置类型
     */
    DependConfType?: string;
    /**
     * 偏移量
     */
    Offset?: string;
    /**
     * 主循环配置
     */
    MainCyclicConfig?: string;
    /**
     * 延迟时间
     */
    DelayTime?: number;
    /**
     * 周期类型为小时的时候需要设置当天的开始时间
     */
    ExecutionStartTime?: string;
    /**
     * 周期类型为小时的时候需要设置当天的结束时间
     */
    ExecutionEndTime?: string;
}
/**
 * DescribeRuleDimStat返回参数结构体
 */
export interface DescribeRuleDimStatResponse {
    /**
     * 结果
     */
    Data: RuleDimStat;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表的元数据信息
 */
export interface ColumnBasicInfo {
    /**
     * 表的全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 数据源全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据源名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName?: string;
    /**
     * 数据类型,string/int等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataType?: string;
    /**
     * 字段类型, varchar(32)/int(10)等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnType?: string;
    /**
     * 字段默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnDefault?: string;
    /**
     * 索引类型, PRI/MUL/PARTITION等,普通字段该值为空串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnKey?: string;
    /**
     * 字段顺序标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnPosition?: number;
    /**
     * 字段注释
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnComment?: string;
    /**
     * 数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoreType?: string;
    /**
     * 所属项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 所属项目英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 所属项目中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectDisplayName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * RestartInLongAgent请求参数结构体
 */
export interface RestartInLongAgentRequest {
    /**
     * 采集器ID
     */
    AgentId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
}
/**
 * 用户文件信息
 */
export interface UserFileDTONew {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件类型，如 jar zip 等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件上传类型，资源管理为 resource
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 文件MD5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 文件大小，单位为字节
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 本地临时路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalTempPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 文件拥有者名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 文件拥有者uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 文件深度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathDepth?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 本地临时压缩文件绝对路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipPath?: string;
    /**
     * 文件所属存储桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 文件所属存储桶的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 删除用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteName?: string;
    /**
     * 删除用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteOwner?: string;
    /**
     * 操作者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 操作者名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
    /**
     * 全路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullPath?: string;
}
/**
 * 集成节点schema映射
 */
export interface IntegrationNodeSchemaMapping {
    /**
     * 源schema id
     */
    SourceSchemaId: string;
    /**
     * 目标schema id
     */
    SinkSchemaId: string;
}
/**
 * TaskDsDTO 减少嵌套层数
 */
export interface TaskDsDTOLiteV2 {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeDsVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtDsVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmDsVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskDsDTONoRecurV2>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<DependencyConfigDsDTONoRecurV2>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 去向数据源ID（离线同步）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 去向数据源类型（离线同步）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * TaskInputParam输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamInList?: Array<ParameterTaskInDsDto>;
    /**
     * TaskOutputParam输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOutList?: Array<ParameterTaskOutDsDto>;
}
/**
 * TaskDsDTO 减少嵌套层数
 */
export interface TaskDsDTOLiteV3 {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeDsVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtDsVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmDsVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskDsDTONoRecurV2>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<DependencyConfigDsDTONoRecurV3>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 去向数据源ID（离线同步）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 去向数据源类型（离线同步）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * TaskInputParam输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamInList?: Array<ParameterTaskInDsDto>;
    /**
     * TaskOutputParam输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOutList?: Array<ParameterTaskOutDsDto>;
}
/**
 * DescribeRealTimeTaskSpeed请求参数结构体
 */
export interface DescribeRealTimeTaskSpeedRequest {
    /**
     * 无
     */
    TaskId: string;
    /**
     * 带毫秒的时间戳
     */
    StartTime: number;
    /**
     * 带毫秒的时间戳
     */
    EndTime: number;
    /**
     * 粒度，1或者5
     */
    Granularity: number;
    /**
     * 无
     */
    ProjectId: string;
}
/**
 * 批量操作出参
 */
export interface BatchTaskOperateNew {
    /**
     * 操作Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: number;
}
/**
 * DescribeDataObjects返回参数结构体
 */
export interface DescribeDataObjectsResponse {
    /**
     * 数据对象列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<SourceObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 元数据信息
 */
export interface TableHybrisReq {
    /**
     * 数据类型：HIVE，ICEBERG，CDW，DLC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MsType: string;
    /**
     * DbName类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbName: string;
    /**
     * Name表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: number;
    /**
     * 创建人账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccount: number;
    /**
     * 普通字段列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Columns: Array<Columns>;
    /**
     * 分区字段列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionKeys: Array<Columns>;
    /**
     * Catalog类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Catalog?: string;
    /**
     * Type类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameCn?: string;
    /**
     * 中文描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionType?: number;
    /**
     * 生命周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LifeTime?: number;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageFormat?: string;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnDelimiter?: string;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConnectionType?: string;
    /**
     * 废弃
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * 表英文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameEn?: string;
    /**
     * 建表 SQL，DDL 模式 建 hive 表时，wedata 会对其进行 base64 解码，故传进来之前应该进行 base64转码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Sql?: string;
    /**
     * 表业务参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizParams?: BizParams;
    /**
     * 模式名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaName?: string;
}
/**
 * DeleteTaskDs返回参数结构体
 */
export interface DeleteTaskDsResponse {
    /**
     * 是否删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWorkflow请求参数结构体
 */
export interface CreateWorkflowRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 所属文件夹id
     */
    FolderId?: string;
}
/**
 * JudgeResourceFile返回参数结构体
 */
export interface JudgeResourceFileResponse {
    /**
     * 资源文件完整路径
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量修改任务参数
 */
export interface UpdateBatchTaskParameterDTO {
    /**
     * spark作业driver资源规格大小, 可取small,medium,large,xlarge
     */
    DriverSize?: string;
    /**
     * 指定的Executor数量（最大值），默认为1，当开启动态分配有效，若未开启，则该值等于AppExecutorNums
     */
    ExecutorMaxNumbers?: string;
    /**
     * spark作业executor个数
     */
    ExecutorNumbers?: string;
    /**
     * spark作业executor资源规格大小, 可取small,medium,large,xlarge
     */
    ExecutorSize?: string;
    /**
     * sparksql和presto引擎参数
     */
    RunConfParams?: string;
    /**
     * 任务资源配置是否继承集群模板，0（默认）不继承，1：继承
     */
    IsInherit?: string;
}
/**
 * 标签类型
 */
export interface Label {
    /**
     * 类型值。
     */
    Value: string;
    /**
     * 类型名称。
     */
    Text: string;
}
/**
 * DescribeExecutionLog返回参数结构体
 */
export interface DescribeExecutionLogResponse {
    /**
     * 任务实例Id
     */
    InstanceId?: string;
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Logs?: Array<string>;
    /**
     * 任务执行记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailId?: number;
    /**
     * 子任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailStatus?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFieldBasicInfo返回参数结构体
 */
export interface DescribeFieldBasicInfoResponse {
    /**
     * 字段元数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnBasicInfoList?: Array<ColumnBasicInfo>;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameFile返回参数结构体
 */
export interface RenameFileResponse {
    /**
     * 重命名结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleExecResultsByPage返回参数结构体
 */
export interface DescribeRuleExecResultsByPageResponse {
    /**
     * results
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleExecResultPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则组执行结果
 */
export interface RuleGroupExecResult {
    /**
     * 规则组执行ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupExecId?: number;
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 执行触发类型（1：手动触发， 2：调度事中触发，3：周期调度触发）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: number;
    /**
     * 执行时间 yyyy-MM-dd HH:mm:ss
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecTime?: string;
    /**
     * 执行状态（1.已提交 2.检测中 3.正常 4.异常）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 异常规则数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRuleCount?: number;
    /**
     * 总规则数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalRuleCount?: number;
    /**
     * 源表负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerName?: string;
    /**
     * 源表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 表id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 数据库id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 有无权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Permission?: boolean;
    /**
     * 执行详情，调度计划或者关联生产任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecDetail?: string;
    /**
     * 实际执行引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineType?: string;
}
/**
 * DeleteProjectParamVersionDs请求参数结构体
 */
export interface DeleteProjectParamVersionDsRequest {
    /**
     * 版本
     */
    MyVersion?: number;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * SparkSQL或者PySpark任务批量修改任务参数
 */
export interface SparkParameterDTO {
    /**
     * SparkSQL或者PySpark任务批量修改任务参数
     */
    Properties?: string;
}
/**
 * RegisterDsEvent请求参数结构体
 */
export interface RegisterDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    Name: string;
    /**
     * 事件分割类型 SECOND、MIN、HOUR、DAY
     */
    EventSubType: string;
    /**
     * 存活时间
     */
    TimeToLive: string;
    /**
     * 存活时间单位
     */
    TimeUnit: string;
    /**
     * 事件所属人
     */
    Owner: string;
    /**
     * 描述
     */
    Description: string;
    /**
     * 事件类型GENERAL、TIME_SERIES
     */
    EventType?: string;
    /**
     * 事件广播类型SINGLE、BROADCAST
     */
    EventBroadcastType?: string;
    /**
     * 时间格式
     */
    DimensionFormat?: string;
}
/**
 * CheckTaskNameExist请求参数结构体
 */
export interface CheckTaskNameExistRequest {
    /**
     * 项目id/工作空间id
     */
    ProjectId: string;
    /**
     * 任务类型（跟调度传参保持一致27）
     */
    TypeId: number;
    /**
     * 任务名
     */
    TaskName: string;
}
/**
 * DescribeTemplateDimCount请求参数结构体
 */
export interface DescribeTemplateDimCountRequest {
    /**
     * 模板类型
     */
    Type?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * ModifyIntegrationTask返回参数结构体
 */
export interface ModifyIntegrationTaskResponse {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInLongTkeClusterList返回参数结构体
 */
export interface DescribeInLongTkeClusterListResponse {
    /**
     * TKE集群信息
     */
    Items?: Array<InLongTkeDetail>;
    /**
     * 页码
     */
    PageIndex?: number;
    /**
     * 每页记录数
     */
    PageSize?: number;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 总页数
     */
    TotalPage?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetResourceCosPath请求参数结构体
 */
export interface GetResourceCosPathRequest {
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeDataCheckStat请求参数结构体
 */
export interface DescribeDataCheckStatRequest {
    /**
     * Project id
     */
    ProjectId: string;
    /**
     * 开始时间，时间戳到秒
     */
    BeginDate: string;
    /**
     * 结束时间，时间戳到秒
     */
    EndDate: string;
}
/**
 * DescribeRuleExecResults请求参数结构体
 */
export interface DescribeRuleExecResultsRequest {
    /**
     * 规则组执行Id
     */
    RuleGroupExecId?: number;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * RegisterDsEventListener返回参数结构体
 */
export interface RegisterDsEventListenerResponse {
    /**
     * 事件监听者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventListenerDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDrSonInstance返回参数结构体
 */
export interface DescribeDrSonInstanceResponse {
    /**
     * 结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DrInstanceOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRecycleTask返回参数结构体
 */
export interface DeleteRecycleTaskResponse {
    /**
     * 是否成功
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流任务统计
 */
export interface WorkflowTaskCountOpsDto {
    /**
     * 工作流任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
    /**
     * 任务类型维度统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeCount?: Array<PairDto>;
    /**
     * 任务周期类型维度统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleCount?: Array<PairDto>;
}
/**
 * DescribeCodeSearchCount返回参数结构体
 */
export interface DescribeCodeSearchCountResponse {
    /**
     * 搜索统计结果
     */
    Data: CodeSearchCountInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterNamespaceList返回参数结构体
 */
export interface DescribeClusterNamespaceListResponse {
    /**
     * 命名空间
     */
    Namespaces: Array<Namespace>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInLongAgent返回参数结构体
 */
export interface CreateInLongAgentResponse {
    /**
     * 采集器ID
     */
    AgentId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataBases返回参数结构体
 */
export interface DescribeDataBasesResponse {
    /**
     * 数据来源数据数据库列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<DatabaseInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWorkflowSchedule请求参数结构体
 */
export interface ModifyWorkflowScheduleRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 延迟时间，单位分钟
     */
    DelayTime: number;
    /**
     * 启动时间
     */
    StartupTime: number;
    /**
     * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
     */
    SelfDepend: number;
    /**
     * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
     */
    CycleType: number;
    /**
     * 步长，间隔时间，最小1
     */
    CycleStep: number;
    /**
     * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
     */
    StartTime?: string;
    /**
     * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
     */
    EndTime?: string;
    /**
     * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
     */
    TaskAction?: string;
    /**
     * cron表达式  周期类型为crontab调度才需要
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionEndTime?: string;
    /**
     * 工作流依赖 ,yes 或者no
     */
    DependencyWorkflow?: string;
}
/**
 * RegisterEvent请求参数结构体
 */
export interface RegisterEventRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 事件名称，支持英文、数字和下划线，最长20个字符, 不能以数字下划线开头。
     */
    Name: string;
    /**
     * 事件分割类型，周期类型: DAY，HOUR，MIN，SECOND
     */
    EventSubType: string;
    /**
     * 广播：BROADCAST,单播：SINGLE
     */
    EventBroadcastType: string;
    /**
     * 周期类型为天和小时为HOURS ，周期类型为分钟 ：MINUTES,周期类型为秒：SECONDS
     */
    TimeUnit: string;
    /**
     * TBDS 事件所属人
     */
    Owner: string;
    /**
     * 事件类型，默认值：TIME_SERIES
     */
    EventType?: string;
    /**
     * 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss
     */
    DimensionFormat?: string;
    /**
     * 存活时间
     */
    TimeToLive?: number;
    /**
     * 事件描述
     */
    Description?: string;
}
/**
 * UploadResource请求参数结构体
 */
export interface UploadResourceRequest {
    /**
     * 资源上传请求信息
     */
    UploadResourceRequestInfo?: UploadResourceRequestInfo;
}
/**
 * BatchDeleteTasksDsAsync返回参数结构体
 */
export interface BatchDeleteTasksDsAsyncResponse {
    /**
     * 返回批量操作结果
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleGroupsByPage请求参数结构体
 */
export interface DescribeRuleGroupsByPageRequest {
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件,每次请求的Filters的上限为10，Filter.Values的上限为5
     */
    Filters?: Array<Filter>;
    /**
     * 排序方式
     */
    OrderFields?: Array<OrderField>;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * 搜索条件
 */
export interface SearchConditionInstanceNew {
    /**
     * 执行空间 "DRY_RUN"
     */
    ExecutionSpace: string;
    /**
     * 产品名称，可选
     */
    ProductName?: string;
    /**
     * 资源组
     */
    ResourceGroup?: string;
}
/**
 * 操作列表实体类
 */
export interface BatchJobVO {
    /**
     * 批量操作Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: number;
    /**
     * 批量操作类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobType?: string;
    /**
     * 状态
  初始状态：INIT;运行中：RUNNING;成功：SUCCESS;失败：FAIL;部分成功PART_SUCCESS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 操作人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 操作人Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
}
/**
 * DescribeDsEventListenerList请求参数结构体
 */
export interface DescribeDsEventListenerListRequest {
    /**
     * 任务列表，不可重复
     */
    KeySet: Array<string>;
}
/**
 * 规则模版分页
 */
export interface RuleTemplateHistoryPage {
    /**
     * 总记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<RuleTemplateHistory>;
}
/**
 * ModifyTaskScriptDs返回参数结构体
 */
export interface ModifyTaskScriptDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopTableStat请求参数结构体
 */
export interface DescribeTopTableStatRequest {
    /**
     * Project Id
     */
    ProjectId: string;
    /**
     * 开始时间，时间戳到秒
     */
    BeginDate: string;
    /**
     * 结束时间，时间戳到秒
     */
    EndDate: string;
}
/**
 * DescribeTableLineage返回参数结构体
 */
export interface DescribeTableLineageResponse {
    /**
     * 表血缘信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableLineage?: TableLineageInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
    /**
     * 数据源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: DataSourceInfoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Agent采集器状态统计
 */
export interface AgentStatus {
    /**
     * 运行中的数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Running?: number;
    /**
     * 异常的数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Abnormal?: number;
    /**
     * 操作中的数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InOperation?: number;
}
/**
 * UpdateWorkflowOwner请求参数结构体
 */
export interface UpdateWorkflowOwnerRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流Ids
     */
    WorkflowIds?: Array<string>;
    /**
     * 责任人，多个以';'号分割
     */
    Owner?: string;
    /**
     * 责任人UserId，多个以';'号分割
     */
    OwnerId?: string;
}
/**
 * ExportWorkflowZip返回参数结构体
 */
export interface ExportWorkflowZipResponse {
    /**
     * 响应体，内部包含文件访问信息
     */
    Data?: ShareStorageFileDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSchedulerTaskTypeCnt返回参数结构体
 */
export interface DescribeSchedulerTaskTypeCntResponse {
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskTypeCnt>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskScript返回参数结构体
 */
export interface DescribeTaskScriptResponse {
    /**
     * 任务脚本内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: TaskScriptContent;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventListenerTask请求参数结构体
 */
export interface DescribeEventListenerTaskRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
}
/**
 * CountOpsInstanceState请求参数结构体
 */
export interface CountOpsInstanceStateRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * BatchCreateVirtualTaskDs返回参数结构体
 */
export interface BatchCreateVirtualTaskDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperateResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckDuplicateTemplateName请求参数结构体
 */
export interface CheckDuplicateTemplateNameRequest {
    /**
     * 规则模板ID
     */
    TemplateId?: number;
    /**
     * 模板名称
     */
    Name?: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * DescribeEventTypes返回参数结构体
 */
export interface DescribeEventTypesResponse {
    /**
     * 事件类型
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EventCaseOpsDto
 */
export interface EventCaseOpsDto {
    /**
     * 案例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseId?: string;
    /**
     * 案例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 时间格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dimension?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTimestamp?: string;
    /**
     * 消费者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumerId?: string;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * CreateResourcePath请求参数结构体
 */
export interface CreateResourcePathRequest {
    /**
     * 文件夹名称，如 aaa
     */
    Name: string;
    /**
     * 文件夹所属父目录，请注意，根目录为 /datastudio/resource
     */
    FilePath: string;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * BatchModifyOpsOwners请求参数结构体
 */
export interface BatchModifyOpsOwnersRequest {
    /**
     * 需要更新责任人的TaskId数组
     */
    TaskIdList: Array<string>;
    /**
     * 需要更新的责任人
     */
    Owners: string;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * BatchDeleteOpsTasks请求参数结构体
 */
export interface BatchDeleteOpsTasksRequest {
    /**
     * 批量删除的任务TaskId
     */
    TaskIdList: Array<string>;
    /**
     * true : 删除后下游任务可正常运行
  false：删除后下游任务不可运行
     */
    DeleteMode: boolean;
    /**
     * true：通知下游任务责任人
  false:  不通知下游任务责任人
     */
    EnableNotify: boolean;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * 血缘参数记录
 */
export interface LineageParamRecord {
    /**
     * 字段名
     */
    Name: string;
    /**
     * 字段值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
}
/**
 * ListBatchJob返回参数结构体
 */
export interface ListBatchJobResponse {
    /**
     * job返回记录
     */
    Data?: ListBatchJobPages;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaselineInstanceDag请求参数结构体
 */
export interface DescribeBaselineInstanceDagRequest {
    /**
     * 基线实例id
     */
    BaselineInstanceId: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 要展开的上游实例id，格式为 taskIdA_curRunDate1,taskIdB_curRunDate2
     */
    UpstreamInstanceIds?: string;
    /**
     * 向上展开层级
     */
    Level?: number;
    /**
     * 保障任务id
     */
    PromiseTaskId?: string;
}
/**
 * DescribeIntegrationStatisticsInstanceTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendsData: Array<IntegrationStatisticsTrendResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceLogList请求参数结构体
 */
export interface DescribeInstanceLogListRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
}
/**
 * SavePositionsDs请求参数结构体
 */
export interface SavePositionsDsRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * tasks
     */
    Tasks: Array<TaskDsDTOLite>;
}
/**
 * DescribeAllTaskType返回参数结构体
 */
export interface DescribeAllTaskTypeResponse {
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskTypeOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量操作任务列表
 */
export interface DescribeBatchOperateTaskDTO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeDesc?: string;
    /**
     * 文件夹名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 是否提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: number;
    /**
     * 引擎：
  presto\SparkJob\SparkSql
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataEngine?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 创造时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleDesc?: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: string;
}
/**
 * ModifyTaskLinks请求参数结构体
 */
export interface ModifyTaskLinksRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 父任务ID
     */
    TaskFrom: string;
    /**
     * 子任务ID
     */
    TaskTo: string;
    /**
     * 子任务工作流
     */
    WorkflowId: string;
    /**
     * 父任务工作流
     */
    RealFromWorkflowId: string;
    /**
     * 父子任务之间的依赖关系
     */
    LinkDependencyType?: string;
}
/**
 * UploadAdvanceRunParams请求参数结构体
 */
export interface UploadAdvanceRunParamsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 远程路径
     */
    RemotePath?: string;
    /**
     * 高级运行参数
     */
    AdvanceRunParam?: string;
}
/**
 * 资管管理-重命名资源文件返回信息
 */
export interface RenameResourceDTO {
    /**
     * 是否重命名成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenameSuccess?: boolean;
    /**
     * 更新用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 更新用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 更新日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullPath?: string;
}
/**
 * 事件消费任务记录列表
 */
export interface EventCaseConsumeLogOptDtoCollection {
    /**
     * 结果总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 结果总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页结果数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 每页数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 分页数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<EventCaseConsumeLogOptDto>;
}
/**
 * DeleteFile请求参数结构体
 */
export interface DeleteFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源id
     */
    ResourceId: string;
}
/**
 * 规则表变量替换
 */
export interface TableConfig {
    /**
     * 数据库Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 表Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableKey?: string;
    /**
     * 字段变量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldConfig?: Array<FieldConfig>;
}
/**
 * DescribeRuleTemplate返回参数结构体
 */
export interface DescribeRuleTemplateResponse {
    /**
     * 模板详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleTemplate;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCustomFunctionVersionList请求参数结构体
 */
export interface DescribeCustomFunctionVersionListRequest {
    /**
     * 函数唯一标识
     */
    FunctionId: string;
    /**
     * 集群实例引擎 ID
     */
    ClusterIdentifier: string;
}
/**
 * 数据源元数据
 */
export interface DatabaseMeta {
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 技术类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType: string;
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName: string;
    /**
     * 数据源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: number;
    /**
     * 项目英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 数据源类别：绑定引擎、绑定数据库,可用值:DB,ENGINE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category: string;
    /**
     * 数据源描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: string;
    /**
     * 数据源引擎所属区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 数据源数据源的可见性，1为可见、0为不可见。默认为1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * db名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName: string;
    /**
     * 项目中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectDisplayName: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccountName: string;
    /**
     * 数据来源展示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisplayName: string;
    /**
     * 数据库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId: string;
    /**
     * 数据来源类型：hive/mysql/hbase等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Catalog: string;
    /**
     * 存储量大小,单位为 byte
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSize: number;
    /**
     * 格式化后的存储量大小，带单位，如 12B
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSizeWithUnit: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
}
/**
 * 任务基础信息，任务id，任务名称
 */
export interface TaskBaseInfo {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 任务名称
     */
    TaskName: string;
}
/**
 * DescribeTableInfoList请求参数结构体
 */
export interface DescribeTableInfoListRequest {
    /**
     * 表名
     */
    Filters: Array<Filter>;
    /**
     * 如果是hive这里写rpc，如果是其他类型不传
     */
    ConnectionType: string;
    /**
     * 数据库源类型
     */
    Catalog: string;
}
/**
 * RunForceSucScheduleInstances返回参数结构体
 */
export interface RunForceSucScheduleInstancesResponse {
    /**
     * 结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaselineAllTaskDag返回参数结构体
 */
export interface DescribeBaselineAllTaskDagResponse {
    /**
     * 基线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeBaselineTaskDagResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsLatestTaskVersionInfo请求参数结构体
 */
export interface DescribeDsLatestTaskVersionInfoRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * 依赖配置策略
 */
export interface DependencyStrategyDs {
    /**
     * 等待（默认策略）或 执行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PollingNullStrategy?: string;
}
/**
 * 数据质量规则组
 */
export interface RuleGroup {
    /**
     * 规则组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 数据源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: number;
    /**
     * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType?: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 关联数据表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 关联数据表Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 关联数据表负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerName?: string;
    /**
     * 执行策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecStrategy?: RuleGroupExecStrategy;
    /**
     * 执行策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Subscription?: RuleGroupSubscribe;
    /**
     * 数据库id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 是否有权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Permission?: boolean;
    /**
     * 已经配置的规则数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleCount?: number;
    /**
     * 监控状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorStatus?: boolean;
    /**
     * 表负责人UserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerUserId?: number;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * DescribeScheduleInstances返回参数结构体
 */
export interface DescribeScheduleInstancesResponse {
    /**
     * 实例结果集
     */
    Data?: CollectionInstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeColumnLineage请求参数结构体
 */
export interface DescribeColumnLineageRequest {
    /**
     * 查询方向，INPUT,OUTPUT,BOTH枚举值
     */
    Direction: string;
    /**
     * 字段信息
     */
    Data: ColumnLineageInfo;
    /**
     * 单次查询入度
     */
    InputDepth?: number;
    /**
     * 单次查询出度
     */
    OutputDepth?: number;
    /**
     * 额外参数（传递调用方信息）
     */
    ExtParams?: Array<RecordField>;
    /**
     * 是否过滤临时表 默认值为true
     */
    IgnoreTemp?: boolean;
}
/**
 * RunTasksByMultiWorkflow返回参数结构体
 */
export interface RunTasksByMultiWorkflowResponse {
    /**
     * 操作返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: OperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDiagnosticInfoResponse
 */
export interface DescribeDiagnosticInfoResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineTasks?: Array<BaselineTaskDto>;
}
/**
 * DescribeRecycleTaskDetail返回参数结构体
 */
export interface DescribeRecycleTaskDetailResponse {
    /**
     * 任务详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Csv 每一行的列元数据
 */
export interface RowColumn {
    /**
     * 列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnNumber?: number;
    /**
     * column 值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * 告警信息
 */
export interface AlarmDsVO {
    /**
     * 告警策略id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmId?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 告警是否生效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 告警类别，目前支持失败告警，超时告警
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmType?: string;
    /**
     * 告警方式 ，目前支持email提醒，短信提醒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmWay?: string;
    /**
     * 告警创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 告警接收人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipient?: string;
    /**
     * 告警接收人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientId?: string;
    /**
     * 告警修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 最近失败告警实例数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastFailTime?: string;
    /**
     * 最近超时告警实例数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOverTime?: string;
    /**
     * 最新告警时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastAlarmTime?: string;
    /**
     * AlarmExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmExt?: Array<AlarmExtDsVO>;
    /**
     * 告警创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * DescribeRuleExecLog返回参数结构体
 */
export interface DescribeRuleExecLogResponse {
    /**
     * 规则执行日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleExecLog;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KillOpsMakePlanInstances返回参数结构体
 */
export interface KillOpsMakePlanInstancesResponse {
    /**
     * 批量操作结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataTableImportProgress返回参数结构体
 */
export interface DescribeDataTableImportProgressResponse {
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: ImportTableDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集成节点映射
 */
export interface IntegrationNodeMapping {
    /**
     * 源节点id
     */
    SourceId?: string;
    /**
     * 目标节点id
     */
    SinkId?: string;
    /**
     * 源节点schema
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceSchema?: Array<IntegrationNodeSchema>;
    /**
     * 节点schema映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaMappings?: Array<IntegrationNodeSchemaMapping>;
    /**
     * 节点映射扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtConfig?: Array<RecordField>;
}
/**
 * 列血缘聚合信息
 */
export interface ColumnAggregationLineage {
    /**
     * 表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 父节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId: string;
    /**
     * 元数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType: string;
    /**
     * 字符串类型的父节点集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentSet: string;
    /**
     * 字符串类型的子节点集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildSet: string;
    /**
     * 列信息集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnInfoSet: Array<SimpleColumnInfo>;
}
/**
 * CreateHiveTableByDDL返回参数结构体
 */
export interface CreateHiveTableByDDLResponse {
    /**
     * 表名称
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOperateOpsTaskDatasourceType请求参数结构体
 */
export interface DescribeOperateOpsTaskDatasourceTypeRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务类型ID
     */
    TaskType: number;
    /**
     * 数据源来源/去向
     */
    ServiceKind?: string;
}
/**
 * BatchKillIntegrationTaskInstances返回参数结构体
 */
export interface BatchKillIntegrationTaskInstancesResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSqlTaskResult返回参数结构体
 */
export interface DescribeSqlTaskResultResponse {
    /**
     * 任务实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 任务提交记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId: number;
    /**
     * 子任务执行记录Id
     */
    DetailId: number;
    /**
     * 是否是结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultSet: boolean;
    /**
     * 结果内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultContent: string;
    /**
     * 字段集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldList: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteResource返回参数结构体
 */
export interface DeleteResourceResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRule返回参数结构体
 */
export interface ModifyRuleResponse {
    /**
     * 是否更新成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 键值对
 */
export interface PairDto {
    /**
     * 键名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
}
/**
 * DescribeFileVersions请求参数结构体
 */
export interface DescribeFileVersionsRequest {
    /**
     * 脚本资源id
     */
    ResourceId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 单页大小
     */
    PageSize: number;
}
/**
 * DescribeBatchTestRun返回参数结构体
 */
export interface DescribeBatchTestRunResponse {
    /**
     * 任务批量详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchTaskResult?: Array<DescribeTestRunBatchItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllByFolderNew返回参数结构体
 */
export interface DescribeAllByFolderNewResponse {
    /**
     * 结果集
     */
    Data?: CollectionFolderOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KillScheduleInstances返回参数结构体
 */
export interface KillScheduleInstancesResponse {
    /**
     * 结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitPythonTask请求参数结构体
 */
export interface SubmitPythonTaskRequest {
    /**
     * 资源组Id
     */
    GroupId: string;
    /**
     * 脚本内容
     */
    ScriptContent: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 脚本类型
     */
    ScriptType: string;
    /**
     * 脚本名称(PYTHON2/PYTHON3)
     */
    ScriptName: string;
    /**
     * 脚本文件路径
     */
    ScriptPath?: string;
    /**
     * 高级运行参数
     */
    RunParams?: string;
    /**
     * 脚本ID
     */
    ScriptId?: string;
    /**
     * 脚本内容是否base64加密
     */
    ScriptEncryption?: boolean;
}
/**
 * UnlockIntegrationTask请求参数结构体
 */
export interface UnlockIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeWorkflowTaskCount请求参数结构体
 */
export interface DescribeWorkflowTaskCountRequest {
    /**
     * 工作流列表
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 事件关联任务分页实体类
 */
export interface CollectionEventListenerTaskDTO {
    /**
     * 总数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalItems?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPages?: number;
    /**
     * 当前页条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPageItems?: number;
    /**
     * 当前页
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPage?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<EventListenerTaskInfo>;
}
/**
 * 试运行记录
 */
export interface DrInstanceOpsDto {
    /**
     * 任务来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskSource?: string;
    /**
     * 编排空间jobId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 任务提交记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId?: number;
    /**
     * 子任务记录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonRecordId?: number;
    /**
     * 任务实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 编排空间为任务id, 开发空间为脚本id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 脚本cos地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 试运行内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptContent?: string;
    /**
     * 任务提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 任务启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 运行时长(秒)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration?: string;
    /**
     * 试运行状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 编排空间为任务名称，开发空间为脚本名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 试运行提交人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitUserName?: string;
    /**
     * 试运行提交人userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitUserId?: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: string;
    /**
     * 是否含有结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasResultSet?: boolean;
}
/**
 * 任务锁的状态
 */
export interface TaskLockStatus {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 持锁者
     */
    Locker: string;
    /**
     * 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者
     */
    IsLocker: number;
    /**
     * 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁
     */
    IsRob: number;
}
/**
 * 内容详情
 */
export interface CommonContent {
    /**
     * 详情内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content: string;
}
/**
 * 表评分统计信息
 */
export interface TableScoreStatisticsInfo {
    /**
     * 等级 1、2、3、4、5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level: number;
    /**
     * 占比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scale: number;
    /**
     * 表数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableNumber: number;
}
/**
 * BatchForceSuccessIntegrationTaskInstances返回参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CompareDsTaskVersionInfo返回参数结构体
 */
export interface CompareDsTaskVersionInfoResponse {
    /**
     * 版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskVersionDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 告警接收人详情
 */
export interface AlarmReceiverInfo {
    /**
     * 告警ID
     */
    AlarmId: string;
    /**
     * 告警接收人ID
     */
    AlarmReceiver: string;
    /**
     * 邮件，0：未设置，1：成功，2：失败
     */
    Email: number;
    /**
     * 短信，0：未设置，1：成功，2：失败
     */
    Sms: number;
    /**
     * 微信，0：未设置，1：成功，2：失败
     */
    Wechat: number;
    /**
     * 电话，0：未设置，1：成功，2：失败
     */
    Voice: number;
    /**
     * 企业微信，0：未设置，1：成功，2：失败
     */
    Wecom: number;
    /**
     * http，0：未设置，1：成功，2：失败
     */
    Http: number;
    /**
     * 企业微信群，0：未设置，1：成功，2：失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WecomGroup?: number;
    /**
     * 飞书群，0：未设置，1：成功，2：失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LarkGroup?: number;
}
/**
 * DescribeTestRun返回参数结构体
 */
export interface DescribeTestRunResponse {
    /**
     * 任务实例Id
     */
    InstanceKey?: string;
    /**
     * 当前任务状态
     */
    Status?: string;
    /**
     * 任务是否结束
     */
    Finished?: boolean;
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogContent?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskDatasourceDTOPage
 */
export interface TaskDatasourceDTOPage {
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * Data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<TaskDatasourceDTO>;
    /**
     * 总计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeRuleExecStat返回参数结构体
 */
export interface DescribeRuleExecStatResponse {
    /**
     * 结果
     */
    Data: RuleExecStat;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 周期单位统计
 */
export interface TaskByCycle {
    /**
     * num
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Number?: number;
    /**
     * 周期单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
}
/**
 * DescribeProdWorkflowCanvasInfoDs请求参数结构体
 */
export interface DescribeProdWorkflowCanvasInfoDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
}
/**
 * SubmitShellTask返回参数结构体
 */
export interface SubmitShellTaskResponse {
    /**
     * 任务提交记录
     */
    Record?: AdhocRecord;
    /**
     * 子任务记录列表，对于shell与python只有一条记录
     */
    Details?: Array<AdhocDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskDs返回参数结构体
 */
export interface CreateTaskDsResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExportWorkflowXml返回参数结构体
 */
export interface ExportWorkflowXmlResponse {
    /**
     * 响应体
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: ShareStorageFileDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEvent返回参数结构体
 */
export interface DescribeEventResponse {
    /**
     * 事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GenHiveTableDDLSql请求参数结构体
 */
export interface GenHiveTableDDLSqlRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 目标数据库
     */
    SinkDatabase: string;
    /**
     * 节点id
     */
    Id?: string;
    /**
     * 元数据类型(MYSQL、ORACLE)
     */
    MsType?: string;
    /**
     * 数据源id
     */
    DatasourceId?: string;
    /**
     * 来源库
     */
    SourceDatabase?: string;
    /**
     * 来源表
     */
    TableName?: string;
    /**
     * 目标表元数据类型(HIVE、GBASE)
     */
    SinkType?: string;
    /**
     * schema名称
     */
    SchemaName?: string;
    /**
     * 上游节点的字段信息
     */
    SourceFieldInfoList?: Array<SourceFieldInfo>;
    /**
     * 分区字段
     */
    Partitions?: Array<Partition>;
    /**
     * 建表属性
     */
    Properties?: Array<Property>;
    /**
     * 建表模式，0:向导模式，1:ddl
     */
    TableMode?: number;
    /**
     * DLC表版本，v1/v2
     */
    TableVersion?: string;
    /**
     * 是否upsert写入
     */
    UpsertFlag?: boolean;
    /**
     * 表描述信息
     */
    TableComment?: string;
    /**
     * 增加的文件数量阈值, 超过值将触发小文件合并
     */
    AddDataFiles?: number;
    /**
     * 增加的Equality delete数量阈值, 超过值将触发小文件合并
     */
    AddEqualityDeletes?: number;
    /**
     * 增加的Position delete数量阈值, 超过值将触发小文件合并
     */
    AddPositionDeletes?: number;
    /**
     * 增加的delete file数量阈值
     */
    AddDeleteFiles?: number;
    /**
     * 下游节点数据源ID
     */
    TargetDatasourceId?: string;
    /**
     * dlc upsert主键
     */
    UpsertKeys?: Array<string>;
    /**
     * dlc表治理信息
     */
    TableBaseInfo?: TableBaseInfo;
}
/**
 * 分页数据集
 */
export interface CollectionParamDTO {
    /**
     * 总数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalItems?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPages?: number;
    /**
     * 当前页数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPageItems?: number;
    /**
     * 当前页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPage?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ParameterInfoDsDto>;
}
/**
 * DescribeEvents返回参数结构体
 */
export interface DescribeEventsResponse {
    /**
     * 事件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchStopOpsTasks请求参数结构体
 */
export interface BatchStopOpsTasksRequest {
    /**
     * 批量停止任务的TaskId
     */
    TaskIdList: Array<string>;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * RenewWorkflowSchedulerInfoDs返回参数结构体
 */
export interface RenewWorkflowSchedulerInfoDsResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceLastLog请求参数结构体
 */
export interface DescribeInstanceLastLogRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
}
/**
 * 子任务记录
 */
export interface AdhocDetail {
    /**
     * 子任务记录Id
     */
    Id: number;
    /**
     * 脚本内容
     */
    ScriptContent: string;
    /**
     * 任务启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 任务结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 当前任务状态
     */
    Status: string;
    /**
     * 提交任务id
     */
    RecordId: number;
}
/**
 * BatchOperateResultDs
 */
export interface BatchOperateResultDs {
    /**
     * result
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * errorId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId?: string;
    /**
     * errorDesc
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc?: string;
}
/**
 * BatchDeleteTasksNew请求参数结构体
 */
export interface BatchDeleteTasksNewRequest {
    /**
     * 批量删除的任务TaskId
     */
    TaskIdList: Array<string>;
    /**
     * true : 删除后下游任务可正常运行
  false：删除后下游任务不可运行
     */
    DeleteMode: boolean;
    /**
     * true：通知下游任务责任人
  false:  不通知下游任务责任人
     */
    EnableNotify: boolean;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * SubmitTestRun请求参数结构体
 */
export interface SubmitTestRunRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * CheckDuplicateRuleName返回参数结构体
 */
export interface CheckDuplicateRuleNameResponse {
    /**
     * 规则名称是否重复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 依赖配置无循环递归属性
 */
export interface DependencyConfigDsDTONoRecur {
    /**
     * ParentTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentTask?: TaskDsDTONoRecur;
    /**
     * SonTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonTask?: TaskDsDTONoRecur;
    /**
     * the dependency config
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainCyclicConfig?: string;
    /**
     * SubordinateCyclicConfig配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubordinateCyclicConfig?: string;
    /**
     * DependencyStrategy策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyStrategy?: DependencyStrategy;
}
/**
 * DescribeSchedulerTaskCntByStatus返回参数结构体
 */
export interface DescribeSchedulerTaskCntByStatusResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ScreenTaskInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 提交工作流实体
 */
export interface SubmitWorkflow {
    /**
     * 被提交的任务id集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskIds: Array<string>;
    /**
     * 执行结果
     */
    Result: boolean;
    /**
     * 执行情况备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc: string;
    /**
     * 执行情况id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId: string;
}
/**
 * DescribeFolderList请求参数结构体
 */
export interface DescribeFolderListRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    ParentsFolderId: string;
    /**
     * 关键字
     */
    KeyWords?: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 页大小，默认10
     */
    PageSize?: number;
}
/**
 * DescribeWorkflowParamDs返回参数结构体
 */
export interface DescribeWorkflowParamDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterInfoDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRunSonListDs返回参数结构体
 */
export interface GetRunSonListDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskDetailDs返回参数结构体
 */
export interface DescribeTaskDetailDsResponse {
    /**
     * 任务详情1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * kettle 服务器文件树节点
 */
export interface DsKettleServerFolderTreeNodeDto {
    /**
     * 节点编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Title?: string;
    /**
     * 带后缀名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 类型  file 或者 folder
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 是否叶子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLeaf?: boolean;
    /**
     * 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<DsKettleServerFolderTreeNodeDto>;
    /**
     * 执行命令
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecuteCommand?: string;
}
/**
 * ForceSucScheduleInstances请求参数结构体
 */
export interface ForceSucScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * 监听者任务信息
 */
export interface EventListenerTaskInfo {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId: number;
    /**
     * 任务类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 任务周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
}
/**
 * DescribeApproveTypeList请求参数结构体
 */
export interface DescribeApproveTypeListRequest {
    /**
     * 类型key
     */
    Classification: string;
}
/**
 * SubmitShellTask请求参数结构体
 */
export interface SubmitShellTaskRequest {
    /**
     * 执行资源组id
     */
    GroupId: string;
    /**
     * 脚本内容
     */
    ScriptContent: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 脚本文件路径
     */
    ScriptPath?: string;
    /**
     * 脚本类型
     */
    ScriptType?: string;
    /**
     * 脚本名称
     */
    ScriptName?: string;
    /**
     * 高级运行参数
     */
    RunParams?: string;
    /**
     * 脚本Id
     */
    ScriptId?: string;
    /**
     * 脚本内容是否加密，默认不加膜
     */
    ScriptEncryption?: boolean;
}
/**
 * TCHouse-X 任务参数
 */
export interface TCHouseXTaskParameter {
    /**
     * DriverCPU核数
     */
    DriverCores?: number;
    /**
     * ExecutorCPU核数
     */
    ExecutorCores?: number;
    /**
     * Executor个数
     */
    NumExecutors?: number;
}
/**
 * 批量执行结果
 */
export interface BatchResultDs {
    /**
     * 成功数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Success?: number;
    /**
     * 失败数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Failed?: number;
    /**
     * 总计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
}
/**
 * DescribeIntegrationNode请求参数结构体
 */
export interface DescribeIntegrationNodeRequest {
    /**
     * 节点id
     */
    Id: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型
     */
    TaskType?: number;
}
/**
 * SetTaskAlarmNew返回参数结构体
 */
export interface SetTaskAlarmNewResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameResource请求参数结构体
 */
export interface RenameResourceRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源路径
     */
    FilePath: string;
    /**
     * 资源名称
     */
    FileName: string;
    /**
     * 资源大小
     */
    FileSize?: number;
}
/**
 * CreateCustomFunction请求参数结构体
 */
export interface CreateCustomFunctionRequest {
    /**
     * 枚举值：HIVE、SPARK、DLC
     */
    Type: string;
    /**
     * 枚举值：ANALYSIS(函数)、ENCRYPTION(加密函数)、AGGREGATE(聚合函数)、LOGIC(逻辑函数)、DATE_AND_TIME(日期与时间函数)、MATH(数学函数)、CONVERSION(转换函数)、STRING(字符串函数)、IP_AND_DOMAIN(IP和域名函数)、WINDOW(窗口函数)、OTHER(其他函数)
     */
    Kind: string;
    /**
     * 函数名称
     */
    Name: string;
    /**
     * 集群实例引擎 ID
     */
    ClusterIdentifier: string;
    /**
     * 数据库名称
     */
    DbName?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * 批量操作的结果返回
 */
export interface BatchOperationOpsDto {
    /**
     * 批量操作成功数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessCount: number;
    /**
     * 批量操作失败数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedCount: number;
    /**
     * 批量操作的总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
}
/**
 * 规则执行配置
 */
export interface RuleExecConfig {
    /**
     * 计算队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QueueName?: string;
    /**
     * 执行资源组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupId?: string;
    /**
     * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineType?: string;
}
/**
 * 基线关联任务
 */
export interface BaselineTaskDto {
    /**
     * 变更记录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 基线id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineId?: number;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 任务运行平均时间/单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedCostTime?: number;
    /**
     * 上游实例id,多个实例用,分开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamTaskIds?: StringListNode;
    /**
     * 下游实例id,多个实例用,分开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownstreamTaskIds?: StringListNode;
    /**
     * 否是保障任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPromiseTask?: boolean;
    /**
     * 当前用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserUin?: string;
    /**
     * 主账号uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 任务周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCycle?: string;
    /**
     * 任务负责人名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInChargeUin?: string;
    /**
     * 任务负责人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInChargeName?: string;
    /**
     * 任务准入基准
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessBenchmark?: string;
    /**
     * 任务准入基准诊断信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessBenchmarkDesc?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * 通用记录字段
 */
export interface RecordField {
    /**
     * 字段名称
     */
    Name?: string;
    /**
     * 字段值
     */
    Value?: string;
}
/**
 * CreateTaskOutputRegistries返回参数结构体
 */
export interface CreateTaskOutputRegistriesResponse {
    /**
     * 登记项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDataRegistryDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsParentFolderTree返回参数结构体
 */
export interface DescribeDsParentFolderTreeResponse {
    /**
     * 统一树结构返回属性列表
     */
    Data?: Array<PathNodeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流画布详情
 */
export interface WorkflowCanvasOpsDto {
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流详情描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowDesc?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 所属文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 所属文件夹ids
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderIds?: Array<string>;
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskOpsDto>;
    /**
     * 任务依赖边列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Links?: Array<LinkOpsDto>;
    /**
     * 工作流所属用户分组id,若有多个分号隔开: a;b;c
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupId?: string;
    /**
     * 工作流所属用户分组名称,若有多个分号隔开: a;b;c
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupName?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 责任人UserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
}
/**
 * DescribeLock返回参数结构体
 */
export interface DescribeLockResponse {
    /**
     * 查询数据开发资源锁状态响应
     */
    Data?: DescribeLockResp;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRelatedInstances返回参数结构体
 */
export interface DescribeRelatedInstancesResponse {
    /**
     * 无
     */
    Data: DescribeTaskInstancesData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrUpdateResource请求参数结构体
 */
export interface CreateOrUpdateResourceRequest {
    /**
     * 项目ID，必填项
     */
    ProjectId?: string;
    /**
     * 文件名，必填项
     */
    Files?: Array<string>;
    /**
     * 必填项，文件所属路径，资源管理根路径为 /datastudio/resource/项目ID/文件夹名
     */
    FilePath?: string;
    /**
     * cos存储桶名字
     */
    CosBucketName?: string;
    /**
     * cos所属地域
     */
    CosRegion?: string;
    /**
     * 是否为新文件，新增为 true，更新为 false
     */
    NewFile?: boolean;
    /**
     * 必填项，文件大小，与 Files 字段对应
     */
    FilesSize?: Array<string>;
}
/**
 * 回收站任务列表
 */
export interface RecycleTaskPageInfo {
    /**
     * 分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 分页数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rows?: Array<RecycleTaskInfo>;
    /**
     * 总个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPageNumber?: number;
}
/**
 * DescribeDimensionScore返回参数结构体
 */
export interface DescribeDimensionScoreResponse {
    /**
     * 维度评分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DimensionScore;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesInfoWithTaskInfo请求参数结构体
 */
export interface DescribeInstancesInfoWithTaskInfoRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * SubmitCustomFunction请求参数结构体
 */
export interface SubmitCustomFunctionRequest {
    /**
     * 函数唯一标识
     */
    FunctionId: string;
    /**
     * 集群实例 ID
     */
    ClusterIdentifier: string;
    /**
     * 备注信息
     */
    Comment: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * 实例批量操作结果类
 */
export interface BatchOperateResultOpsDto {
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 错误id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId?: string;
    /**
     * 错误说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc?: string;
}
/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
    /**
     * 质量规则ID
     */
    RuleId?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * BatchCreateTaskVersionDs请求参数结构体
 */
export interface BatchCreateTaskVersionDsRequest {
    /**
     * 任务版本信息
     */
    TaskVersionDTOs: Array<BatchCreateTaskVersionDsDTOLite>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 是否自动运行
     */
    AutoRun?: boolean;
    /**
     * 告警方式:email-邮件;sms-短信;wecom-企业微信
     */
    AlarmWays?: string;
    /**
     * 告警对象:1-项目管理员，2-任务责任人
     */
    AlarmRecipientTypes?: string;
    /**
     * 是否需要校验父任务已经提交到调度
     */
    NeedCheckParentSubmitted?: boolean;
}
/**
 * DescribeDependencyWorkflowForProjectClone请求参数结构体
 */
export interface DescribeDependencyWorkflowForProjectCloneRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 工作流id列表
     */
    ConfigList: Array<CloneObjectDTO>;
}
/**
 * 最近一次开发空间运行记录信息任务体
 */
export interface LatestAnalyseInfoTask {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId?: string;
    /**
     * 当前时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 请求脚本编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestScriptId?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus?: string;
    /**
     * 创建用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUser?: string;
    /**
     * 项目编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
}
/**
 * 按天更新的表的资产评分
 */
export interface TablePropertyScore {
    /**
     * 表ID
     */
    TableId: string;
    /**
     * 统计日期
     */
    DayTime: string;
    /**
     * 表完整性评分
     */
    Integrity: number;
    /**
     * 表保障性评分
     */
    Safety: number;
    /**
     * 表及时性评分
     */
    Timeliness: number;
    /**
     * 表稳定性评分
     */
    Stability: number;
    /**
     * 表规范性评分
     */
    Normative: number;
    /**
     * 资产评分平均分
     */
    Average: number;
}
/**
 * DescribeWorkflowByFordIds返回参数结构体
 */
export interface DescribeWorkflowByFordIdsResponse {
    /**
     * 工作流详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<WorkflowDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOpsMakePlan返回参数结构体
 */
export interface CreateOpsMakePlanResponse {
    /**
     * 结果
     */
    Data?: CommonIdOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWorkflowNew返回参数结构体
 */
export interface DeleteWorkflowNewResponse {
    /**
     * 返回删除结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleGroupExecResultsByPageWithoutAuth请求参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageWithoutAuthRequest {
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件，指定表ID过滤字段为 TableIds
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * HeartBeat返回参数结构体
 */
export interface HeartBeatResponse {
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
    /**
     * 锁持有者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerId: number;
    /**
     * 锁持有者displayName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerName: string;
    /**
     * 偷锁标志（有人偷锁为true）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StealFlag: boolean;
    /**
     * 持有锁标志（true表示被自己锁定）
     */
    LockedByMe: boolean;
    /**
     * 资源是否被锁定
     */
    Locked: boolean;
    /**
     * 资源是否正在被编辑
     */
    EditFlag: boolean;
    /**
     * 资源被锁定时间的时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockTime: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWorkflowById返回参数结构体
 */
export interface DeleteWorkflowByIdResponse {
    /**
     * 删除结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: OperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeDetail请求参数结构体
 */
export interface DescribeCodeDetailRequest {
    /**
     * 文件或任务ID
     */
    Id: string;
    /**
     * 文件或任务名称
     */
    Name: string;
    /**
     * 文件或任务类型
     */
    Type: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * Json 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * string 数组
 */
export interface StringListNode {
    /**
     * string数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewRecord: Array<string>;
}
/**
 * DescribeTableMeta请求参数结构体
 */
export interface DescribeTableMetaRequest {
    /**
     * 表唯一id
     */
    TableId: string;
}
/**
 * DescribeBaselineById请求参数结构体
 */
export interface DescribeBaselineByIdRequest {
    /**
     * 无
     */
    BaselineId: string;
    /**
     * 1
     */
    ProjectId: string;
}
/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
    /**
     * 规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Rule;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEtlTaskType请求参数结构体
 */
export declare type DescribeEtlTaskTypeRequest = null;
/**
 * BatchMakeUpIntegrationTasks请求参数结构体
 */
export interface BatchMakeUpIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 补数据开始时间
     */
    StartTime: string;
    /**
     * 补数据结束时间
     */
    EndTime: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeAllUsedVersionSon请求参数结构体
 */
export interface DescribeAllUsedVersionSonRequest {
    /**
     * 搜索条件
     */
    SearchCondition: InstanceSearchCondition;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
}
/**
 * DescribeDatabaseInfoList返回参数结构体
 */
export interface DescribeDatabaseInfoListResponse {
    /**
     * 数据库列表
     */
    DatabaseInfo?: Array<DatabaseInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsEventDetail返回参数结构体
 */
export interface DescribeDsEventDetailResponse {
    /**
     * 事件详情信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventDsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyIntegrationNode请求参数结构体
 */
export interface ModifyIntegrationNodeRequest {
    /**
     * 集成节点信息
     */
    NodeInfo: IntegrationNodeInfo;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型
     */
    TaskType?: number;
    /**
     * 区分画布模式和表单模式
     */
    TaskMode?: number;
}
/**
 * SubmitWorkflow返回参数结构体
 */
export interface SubmitWorkflowResponse {
    /**
     * 执行结果
     */
    Data: SubmitWorkflow;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopTestRun返回参数结构体
 */
export interface StopTestRunResponse {
    /**
     * 当前状态
     */
    CurrentStatus?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplateDimCount返回参数结构体
 */
export interface DescribeTemplateDimCountResponse {
    /**
     * 维度统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DimensionCount>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBatchTaskAdvancedSettings返回参数结构体
 */
export interface UpdateBatchTaskAdvancedSettingsResponse {
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceLog返回参数结构体
 */
export interface DescribeInstanceLogResponse {
    /**
     * 返回结果
     */
    Data?: string;
    /**
     * 返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLogInfo?: IntegrationInstanceLog;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDsEvent请求参数结构体
 */
export interface UpdateDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    Name: string;
    /**
     * 存活时间
     */
    TimeToLive?: string;
    /**
     * 存活时间单位
     */
    TimeUnit?: string;
    /**
     * 描述
     */
    Description?: string;
}
/**
 * DescribeWorkflowForProjectClone返回参数结构体
 */
export interface DescribeWorkflowForProjectCloneResponse {
    /**
     * 项目克隆-工作流列表分页返回信息
     */
    Data?: ProjectCloneWorkflowInfoPageNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 修改审批单状态
 */
export interface ApproveModify {
    /**
     * 审批单id
     */
    ApproveId: string;
    /**
     * 是否修改成功
     */
    Success: boolean;
}
/**
 * DescribeOpsMakePlanTasks返回参数结构体
 */
export interface DescribeOpsMakePlanTasksResponse {
    /**
     * 补录计划任务分页查询结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: MakePlanTaskOpsDtoCollection;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例日志信息
 */
export interface InstanceLogList {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 重试次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tries?: string;
    /**
     * 最后更新事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 节点ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSize?: string;
    /**
     * 原始文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginFileName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 实例日志类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLogType?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 耗费时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostTime?: string;
}
/**
 * DescribeRecordList返回参数结构体
 */
export interface DescribeRecordListResponse {
    /**
     * 任务提交记录列表
     */
    Records?: Array<AdhocRecordInfoDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeColumnLineage返回参数结构体
 */
export interface DescribeColumnLineageResponse {
    /**
     * 字段血缘信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnAggregationLineage: ColumnAggregationLineage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteFolder请求参数结构体
 */
export interface DeleteFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
}
/**
 * DescribeWorkflowListByProjectId返回参数结构体
 */
export interface DescribeWorkflowListByProjectIdResponse {
    /**
     * 根据项目id获取项目下所有工作流列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<WorkflowCanvasOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckTaskPriorityDs使用，描述任务信息
 */
export interface CheckTaskPriorityTaskDTO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
}
/**
 * AlarmExtVO信息
 */
export interface AlarmExtDsVO {
    /**
     * 告警策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmId?: string;
    /**
     * 扩展字段key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropName?: string;
    /**
     * 扩展字段value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropValue?: string;
    /**
     * 告警创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
}
/**
 * DescribeEventDetail返回参数结构体
 */
export interface DescribeEventDetailResponse {
    /**
     * 事件详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AcquireLock请求参数结构体
 */
export interface AcquireLockRequest {
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
    /**
     * TASK/FILE
     */
    ResourceType?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * CreateFolder返回参数结构体
 */
export interface CreateFolderResponse {
    /**
     * 文件夹Id，null则创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: CommonId;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 属性配置
 */
export interface TaskExtDsVO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<ParamInfoDs>;
    /**
     * 任务试运行扩展业务属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DryRunExtAttributes?: Array<AttributeItemDsVO>;
    /**
     * 任务试运行动态传参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DryRunParameter?: Array<AttributeItemDsVO>;
}
/**
 * DescribeQualityScoreTrend返回参数结构体
 */
export interface DescribeQualityScoreTrendResponse {
    /**
     * 质量评分趋势视图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: QualityScoreTrend;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务参数输出dto
 */
export interface ParameterTaskOutDsDto {
    /**
     * 唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 参数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamKey: string;
    /**
     * 参数描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDesc: string;
    /**
     * 参数定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDefine: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 项目名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
}
/**
 * PreviewDataTableCsv返回参数结构体
 */
export interface PreviewDataTableCsvResponse {
    /**
     * Csv 读取结果
     */
    Data?: CsvReadDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitSqlTask请求参数结构体
 */
export interface SubmitSqlTaskRequest {
    /**
     * 数据库类型
     */
    DatabaseType: string;
    /**
     * 数据源Id
     */
    DatasourceId: number;
    /**
     * 资源组Id
     */
    GroupId: string;
    /**
     * 脚本文件id
     */
    ScriptId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据库名称
     */
    DatabaseName?: string;
    /**
     * 执行引擎实例ID
     */
    EngineId?: string;
    /**
     * 脚本内容
     */
    ScriptContent?: string;
    /**
     * 资源队列
     */
    ResourceQueue?: string;
    /**
     * 数据库类型
     */
    DatasourceType?: string;
    /**
     * 计算资源名称
     */
    ComputeResource?: string;
    /**
     * 高级运行参数
     */
    RunParams?: string;
    /**
     * 高级设置
     */
    ConfParams?: string;
    /**
     * 脚本内容是否base64加密
     */
    ScriptEncryption?: boolean;
}
/**
 * 依赖配置无循环递归属性
 */
export interface DependencyConfigDsDTONoRecurV2 {
    /**
     * ParentTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentTask?: TaskDsDTONoRecurV2;
    /**
     * SonTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonTask?: TaskDsDTONoRecurV2;
    /**
     * the dependency config
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainCyclicConfig?: string;
    /**
     * SubordinateCyclicConfig配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubordinateCyclicConfig?: string;
    /**
     * DependencyStrategy策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyStrategy?: DependencyStrategyDs;
}
/**
 * FindDependTaskListDs返回参数结构体
 */
export interface FindDependTaskListDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReleaseLock返回参数结构体
 */
export interface ReleaseLockResponse {
    /**
     * 释放锁请求结果
     */
    Success: boolean;
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameFile请求参数结构体
 */
export interface RenameFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 文件路径
     */
    FilePath: string;
    /**
     * 新文件名
     */
    File?: string;
    /**
     * 来源任务（集成使用）
     */
    FromTask?: string;
    /**
     * 目标任务（集成使用）
     */
    ToTask?: string;
}
/**
 * 代码搜索统计信息
 */
export interface CodeSearchCountInfo {
    /**
     * 开发空间搜索结果数
     */
    DevCount: number;
    /**
     * 调度空间搜索结果数
     */
    ScheduleCount: number;
    /**
     * 回收站搜索结果数
     */
    RecycleCount: number;
}
/**
 * DeleteFile返回参数结构体
 */
export interface DeleteFileResponse {
    /**
     * 删除结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeSearchAuditInfoV2请求参数结构体
 */
export interface DescribeCodeSearchAuditInfoV2Request {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 需要获取的关键字数量，默认为10条
     */
    Total?: string;
}
/**
 * 任务运维数据源类型信息
 */
export interface DatasourceTypeByTaskType {
    /**
     * 类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * 可选数据源列表文本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateTexts?: string;
    /**
     * 可选数据源列表取值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateValues?: string;
}
/**
 * DescribeOperateOpsTasks返回参数结构体
 */
export interface DescribeOperateOpsTasksResponse {
    /**
     * 任务列表信息
     */
    Data?: OpsTaskInfoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResourceManagePathTrees请求参数结构体
 */
export interface DescribeResourceManagePathTreesRequest {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 名字，供搜索
     */
    Name?: string;
    /**
     * 文件类型
     */
    FileType?: string;
    /**
     * 文件路径
     */
    FilePath?: string;
    /**
     * 文件夹类型
  personal 个人
  project 项目
  resource 资源
     */
    DirType?: string;
}
/**
 * DescribeTasksByPage返回参数结构体
 */
export interface DescribeTasksByPageResponse {
    /**
     * 无1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: TaskInfoDataPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 函数资源信息
 */
export interface FunctionResource {
    /**
     * 资源路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 资源唯一标识
     */
    Id?: string;
    /**
     * 资源 MD5 值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5?: string;
    /**
     * 默认是 hdfs
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
}
/**
 * ExportFiles请求参数结构体
 */
export interface ExportFilesRequest {
    /**
     * 导出相关信息
     */
    ExportRequestInfo: ExportRequestInfo;
}
/**
 * DescribeStandardRuleDetailInfoList请求参数结构体
 */
export interface DescribeStandardRuleDetailInfoListRequest {
    /**
     * 空间、项目id
     */
    ProjectId: string;
    /**
     * 标准分类11编码映射 12数据过滤 13字符串转换 14数据元定义 15正则表达 16术语词典
     */
    Type: number;
}
/**
 * RenameResourceFile请求参数结构体
 */
export interface RenameResourceFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源路径
     */
    FilePath: string;
    /**
     * 资源名称
     */
    FileName: string;
    /**
     * 资源大小
     */
    FileSize?: number;
}
/**
 * 规则组调度信息
 */
export interface RuleGroupSchedulerInfo {
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 1:未配置 2:关联生产调度 3:离线周期检测
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 循环类型简写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType: string;
    /**
     * 循环步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep: number;
    /**
     * 循环类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleDesc: string;
    /**
     * 离线周期检测下指定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction: string;
    /**
     * 离线周期检测下延迟时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime: number;
    /**
     * 离线周期检测下注册到任务调度的任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleTaskId: string;
    /**
     * 关联生产调度下关联的任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociateTaskIds: Array<string>;
}
/**
 * DiagnosePlus返回参数结构体
 */
export interface DiagnosePlusResponse {
    /**
     * 结果
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * HeartBeat请求参数结构体
 */
export interface HeartBeatRequest {
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
    /**
     * 编辑标志
     */
    EditFlag: boolean;
}
/**
 * 告警指标
 */
export interface AlarmIndicatorInfo {
    /**
     * 指标id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 告警指标,0任务失败,1任务运行超时,2任务停止,3任务暂停, 4读取速度,5写入速度,6读取吞吐 7写入吞吐, 8脏数据字节数,9脏数据条数,10任务异常,11任务检测异常, 12重启次数, 13任务延时, 14近20分内的重启次数 15传输延迟,16业务延迟, 50离线包CPU使用率, 51离线包内存使用率, 52离线包并行度使用率, 53离线包排队中的实例数, 54实时包资源使用率, 55实时包运行中的任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicator?: number;
    /**
     * 告警指标描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicatorDesc?: string;
    /**
     * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: number;
    /**
     * 预计的超时时间，分钟级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedTime?: number;
    /**
     * 告警阈值的算子,1 大于,2 小于
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: number;
    /**
     * 告警指标阈值单位：ms(毫秒)、s(秒)、min(分钟)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicatorUnit?: string;
    /**
     * 告警周期
     */
    Duration?: number;
    /**
     * 告警周期单位:hour,minute,day
     */
    DurationUnit?: string;
    /**
     * 周期内最多告警次数
     */
    MaxTimes?: number;
    /**
     * 指标阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Threshold?: number;
}
/**
 * 告警信息
 */
export interface AlarmVO {
    /**
     * 告警策略id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmId?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 告警是否生效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 告警类别，目前支持失败告警，超时告警
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmType?: string;
    /**
     * 告警方式 ，目前支持email提醒，短信提醒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmWay?: string;
    /**
     * 告警创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 告警接收人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipient?: string;
    /**
     * 告警接收人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientId?: string;
    /**
     * 告警修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 最近失败告警实例数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastFailTime?: string;
    /**
     * 最近超时告警实例数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOverTime?: string;
    /**
     * 最新告警时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastAlarmTime?: string;
    /**
     * AlarmExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmExt?: Array<AlarmExtVO>;
    /**
     * 告警创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * DescribeTableMetas返回参数结构体
 */
export interface DescribeTableMetasResponse {
    /**
     * 表元数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableMetas: Array<TableMeta>;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSonInstances返回参数结构体
 */
export interface DescribeSonInstancesResponse {
    /**
     * 结果集
     */
    Data?: CollectionInstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetLatestTestRunInfo请求参数结构体
 */
export interface GetLatestTestRunInfoRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务Id列表
     */
    TaskIds: Array<string>;
    /**
     * 是否只显示当前用户，默认为否
     */
    IsOnlyCurrUser?: boolean;
}
/**
 * DescribeTaskAlarmRegulations请求参数结构体
 */
export interface DescribeTaskAlarmRegulationsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 当前页
     */
    PageNumber: number;
    /**
     * 每页记录数
     */
    PageSize: number;
    /**
     * 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName)
     */
    Filters?: Array<Filter>;
    /**
     * 排序条件(RegularId)
     */
    OrderFields?: Array<OrderField>;
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 任务类型(201代表实时任务，202代表离线任务)
     */
    TaskType?: number;
}
/**
 * CreateTaskOutputRegistry请求参数结构体
 */
export interface CreateTaskOutputRegistryRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 表物理id
     */
    TablePhysicalId: string;
    /**
     * 登记项Id
     */
    Id?: number;
    /**
     * 数据源id
     */
    DatasourceId?: string;
    /**
     * 库名
     */
    DatabaseName?: string;
    /**
     * 表名
     */
    TableName?: string;
    /**
     * 表唯一标识
     */
    TableGuid?: string;
    /**
     * 分区名
     */
    PartitionName?: string;
    /**
     * 库唯一标识
     */
    DbGuid?: string;
}
/**
 * DescribeInfoTransByTypeIdDs返回参数结构体
 */
export interface DescribeInfoTransByTypeIdDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDependTasksDevDs请求参数结构体
 */
export interface DescribeDependTasksDevDsRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 上游/下游层级1-6级
     */
    Deep: number;
    /**
     * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
     */
    Up: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务工作流id
     */
    WorkflowId: string;
}
/**
 * CreateCustomFunction返回参数结构体
 */
export interface CreateCustomFunctionResponse {
    /**
     * 函数唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionId?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateEventListener返回参数结构体
 */
export interface UpdateEventListenerResponse {
    /**
     * 事件监听者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventListenerDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskInfo请求参数结构体
 */
export interface ModifyTaskInfoRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟
     */
    DelayTime?: number;
    /**
     * 启动时间
     */
    StartupTime?: number;
    /**
     * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
     */
    SelfDepend?: number;
    /**
     * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
     */
    StartTime?: string;
    /**
     * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
     */
    EndTime?: string;
    /**
     * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
     */
    TaskAction?: string;
    /**
     * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
     */
    CycleType?: number;
    /**
     * 步长，间隔时间，最小1
     */
    CycleStep?: number;
    /**
     * cron表达式  周期类型为crontab调度才需要
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
     */
    ExecutionEndTime?: string;
    /**
     * 新的任务名
     */
    TaskName?: string;
    /**
     * 失败重试间隔,单位分钟，创建任务的时候已经给了默认值
     */
    RetryWait?: number;
    /**
     * 失败重试次数，创建任务的时候已经给了默认值
     */
    TryLimit?: number;
    /**
     * 是否可重试，1代表可以重试
     */
    Retriable?: number;
    /**
     * 运行优先级，4高 5中 6低
     */
    RunPriority?: number;
    /**
     * 任务的扩展配置
     */
    TaskExt?: Array<TaskExtInfo>;
    /**
     * 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器
     */
    ResourceGroup?: string;
    /**
     * 资源池队列名称
     */
    YarnQueue?: string;
    /**
     * 资源组下具体执行机，any 表示可以跑在任意一台。
     */
    BrokerIp?: string;
    /**
     * 责任人
     */
    InCharge?: string;
    /**
     * 任务备注
     */
    Notes?: string;
    /**
     * 任务参数
     */
    TaskParamInfos?: Array<ParamInfo>;
    /**
     * 源数据源
     */
    SourceServer?: string;
    /**
     * 目标数据源
     */
    TargetServer?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
     */
    DependencyWorkflow?: string;
    /**
     * 依赖配置
     */
    DependencyConfigDTOs?: Array<DependencyConfig>;
}
/**
 * DeleteTaskOutParamDs返回参数结构体
 */
export interface DeleteTaskOutParamDsResponse {
    /**
     * 结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableMeta返回参数结构体
 */
export interface DescribeTableMetaResponse {
    /**
     * 表的元数据信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableMeta: TableMeta;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FindFuzzyTasksDs返回参数结构体
 */
export interface FindFuzzyTasksDsResponse {
    /**
     * taskdto
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FindDependTaskListsDs请求参数结构体
 */
export interface FindDependTaskListsDsRequest {
    /**
     * 任务Id列表
     */
    TaskIds: Array<string>;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * 数据质量规则组订阅信息
 */
export interface RuleGroupSubscribe {
    /**
     * 规则组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 订阅接收人列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Receivers?: Array<SubscribeReceiver>;
    /**
     * 订阅方式 1.邮件email  2.短信sms
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubscribeType?: Array<number | bigint>;
    /**
     * 群机器人配置的webhook信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebHooks?: Array<SubscribeWebHook>;
    /**
     * 规则Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
}
/**
 * DagInstances请求参数结构体
 */
export interface DagInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * 补录计划实例集合
 */
export interface MakePlanInstanceOpsDtoCollection {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<InstanceOpsDto>;
}
/**
 * DeleteTaskAlarmRegular请求参数结构体
 */
export interface DeleteTaskAlarmRegularRequest {
    /**
     * 主键ID
     */
    Id: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 任务类型(201表示实时任务，202表示离线任务)
     */
    TaskType?: number;
}
/**
 * 对比规则
 */
export interface CompareRule {
    /**
     * 比较条件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<CompareRuleItem>;
    /**
     * 周期性模板默认周期，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
}
/**
 * CreateInLongAgent请求参数结构体
 */
export interface CreateInLongAgentRequest {
    /**
     * 采集器类型，1：TKE Agent，2：BOSS SDK，默认：1
     */
    AgentType: number;
    /**
     * 采集器名称
     */
    AgentName: string;
    /**
     * 集成资源组id
     */
    ExecutorGroupId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * TKE集群的地域
     */
    TkeRegion: string;
    /**
     * 当AgentType为1时，必填。当AgentType为2时，不用填
     */
    ClusterId?: string;
}
/**
 * CreateTaskParamDs返回参数结构体
 */
export interface CreateTaskParamDsResponse {
    /**
     * 结果
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 事件监听者信息
 */
export interface EventListenerDTO {
    /**
     * 关键字，一般为任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * REST_API、KAFKA
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTs: string;
    /**
     * 配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropertiesList: Array<ParamInfoDs>;
    /**
     * 事件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventName: string;
    /**
     * 监听者任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfo: EventListenerTaskInfo;
    /**
     * 事件所属项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventProjectId: string;
}
/**
 * DescribeBelongTo请求参数结构体
 */
export interface DescribeBelongToRequest {
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * CheckAlarmRegularNameExist请求参数结构体
 */
export interface CheckAlarmRegularNameExistRequest {
    /**
     * 项目名称
     */
    ProjectId: string;
    /**
     * 规则名称
     */
    AlarmRegularName: string;
    /**
     * 任务ID
     * @deprecated
     */
    TaskId?: string;
    /**
     * 主键ID
     */
    Id?: string;
    /**
     * 任务类型:201.实时,202.离线
     */
    TaskType?: number;
    /**
     * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
     */
    MonitorType?: number;
}
/**
 * CheckTaskPriorityDs请求参数结构体
 */
export interface CheckTaskPriorityDsRequest {
    /**
     * 任务信息
     */
    Tasks: Array<CheckTaskPriorityTaskDTO>;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * 规则执行结果
 */
export interface RuleExecResult {
    /**
     * 规则执行ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleExecId?: number;
    /**
     * 规则组执行ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupExecId?: number;
    /**
     * 规则组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleType?: number;
    /**
     * 源字段详细类型，int string
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectDataTypeName?: string;
    /**
     * 源字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceObjectValue?: string;
    /**
     * 条件扫描WHERE条件表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionExpression?: string;
    /**
     * 检测结果（1:检测通过，2：触发规则，3：检测失败）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecResultStatus?: number;
    /**
     * 触发结果，告警发送成功, 阻断任务成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerResult?: string;
    /**
     * 对比结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareResult?: CompareResult;
    /**
     * 模版名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateName: string;
    /**
     * 质量维度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityDim: number;
    /**
     * 目标表-库表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetDBTableName: string;
    /**
     * 目标表-字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectValue: string;
    /**
     * 目标表-字段类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetObjectDataType: string;
    /**
     * 自定义模版sql表达式参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldConfig: RuleFieldConfig;
    /**
     * 源字段与目标字段关联条件on表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelConditionExpr: string;
    /**
     * 执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 1/2/3:低/中/高
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmLevel?: number;
}
/**
 * BatchRunOpsTask请求参数结构体
 */
export interface BatchRunOpsTaskRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 是否补录中间实例,0不补录;1补录
     */
    EnableMakeUp: number;
    /**
     * 任务id列表
     */
    Tasks: Array<string>;
}
/**
 * DescribeTaskDetailDs请求参数结构体
 */
export interface DescribeTaskDetailDsRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 任务告警状态
     */
    TaskAlarmStatus?: number;
}
/**
 * DescribeDatabaseMetas返回参数结构体
 */
export interface DescribeDatabaseMetasResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseMeta: Array<DatabaseMeta>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FreezeTasksByWorkflowIds返回参数结构体
 */
export interface FreezeTasksByWorkflowIdsResponse {
    /**
     * 操作返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: OperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 补录计划日期范围
 */
export interface CreateMakeDatetimeInfo {
    /**
     * 开始日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartDate?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndDate?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
}
/**
 * RunRerunScheduleInstances请求参数结构体
 */
export interface RunRerunScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * DescribeTaskParentRunTime返回参数结构体
 */
export interface DescribeTaskParentRunTimeResponse {
    /**
     * 返回依赖的父任务数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskInfoWithInstance>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitPySparkTask请求参数结构体
 */
export interface SubmitPySparkTaskRequest {
    /**
     * 资源组Id
     */
    GroupId: string;
    /**
     * 脚本内容
     */
    ScriptContent: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 脚本名称(PYTHON2/PYTHON3)
     */
    PythonType: string;
    /**
     * 脚本文件路径
     */
    ScriptPath?: string;
    /**
     * 高级运行参数
     */
    RunParams?: string;
    /**
     * 脚本id（资源id）
     */
    ScriptId?: string;
    /**
     * 资源队列
     */
    ResourceQueue?: string;
    /**
     * 高级设置
     */
    ConfigParams?: string;
    /**
     * 脚本是否需要加密
     */
    ScriptEncryption?: boolean;
}
/**
 * 对比结果项
 */
export interface CompareResultItem {
    /**
     * 对比结果， 1为真 2为假
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FixResult: number;
    /**
     * 质量sql执行结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultValue: string;
    /**
     * 阈值列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Values: Array<ThresholdValue>;
    /**
     * 比较操作类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator: string;
    /**
     * 比较类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareType: number;
    /**
     * 值比较类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueComputeType: number;
}
/**
 * DescribeTableSchemaInfo请求参数结构体
 */
export interface DescribeTableSchemaInfoRequest {
    /**
     * 表名称
     */
    Name: string;
    /**
     * 数据库名称
     */
    DatabaseName: string;
    /**
     * 数据源的类型（例如MYSQL、HIVE、KAFKA等）
     */
    MsType: string;
    /**
     * 数据源id
     */
    DatasourceId: string;
    /**
     * 连接类型（示例值rpc）
     */
    ConnectionType?: string;
    /**
     * 元数据Database下的Schema名称
     */
    SchemaName?: string;
}
/**
 * RunRerunScheduleInstances返回参数结构体
 */
export interface RunRerunScheduleInstancesResponse {
    /**
     * 结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 基线实例
 */
export interface BaselineDto {
    /**
     * 基线id
     */
    Id?: number;
    /**
     * 基线名称
     */
    BaselineName?: string;
    /**
     * 天基线/小时基线
     */
    BaselineType?: string;
    /**
     * 基线创建时间
     */
    CreateTime?: string;
    /**
     * 保障任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PromiseTasks?: Array<BaselineTaskDto>;
    /**
     * 告警规则
     */
    AlarmRule?: AlarmRuleDto;
    /**
     * 基线状态，待提交, 运行中，停止
     */
    BaselineStatus?: string;
    /**
     * 最新基线实例运行状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestBaselineInstanceStatus?: string;
    /**
     * 预警余量/单位分钟
     */
    WarningMargin?: number;
    /**
     * 承诺时间
     */
    PromiseTime?: string;
    /**
     * 责任人uin
     */
    InChargeUin?: string;
    /**
     * 责任人名称
     */
    InChargeName?: string;
    /**
     * 当前用户uin
     */
    UserUin?: string;
    /**
     * 当前用户名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 主账号uin
     */
    OwnerUin?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 租户id
     */
    AppId?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * 合并元数据Manifests治理项
 */
export interface DlcMergeManifestsInfo {
    /**
     * 是否启用合并元数据Manifests文件治理项：enable、none
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MergeManifestsEnable?: string;
    /**
     * 用于运行合并元数据Manifests文件治理项的引擎名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Engine?: string;
    /**
     * 合并元数据Manifests文件治理运行周期，单位为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntervalMin?: number;
}
/**
 * 抢锁状态：是否可以抢锁和当前持锁人
 */
export interface RobLockState {
    /**
     * 是否可以抢锁
     */
    IsRob: boolean;
    /**
     * 当前持锁人
     */
    Locker: string;
}
/**
 * DescribeApproveList请求参数结构体
 */
export interface DescribeApproveListRequest {
    /**
     * 审批分类key
     */
    ApproveClassification: string;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 分页数
     */
    PageNumber: number;
    /**
     * 自定义条件查询
     */
    Filters?: Array<FilterOptional>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderFieldOptional>;
}
/**
 * 属性类型扩展
 */
export interface TaskTypeExtVO {
    /**
     * 类型ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * 属性名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropName?: string;
    /**
     * 属性标签(ui展示用)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropLabel?: string;
    /**
     * 缺省标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultFlag?: number;
    /**
     * 可视标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VisibleFlag?: number;
    /**
     * 属性描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropDesc?: string;
    /**
     * 排列id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RankId?: number;
    /**
     * 控件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputType?: string;
    /**
     * 值类型(integer，string)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueType?: string;
    /**
     * 缺省值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
    /**
     * 候选值列表(，分隔)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateValues?: string;
    /**
     * 是否必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsMandatory?: number;
    /**
     * 最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxValue?: number;
    /**
     * 最小值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinValue?: number;
    /**
     * 配置等级(1-普通，2-高级，3-管理员)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfLevel?: number;
    /**
     * 候选文本列表(，分隔)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CandidateTexts?: string;
    /**
     * 复制时是否需要修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CopyKey?: number;
    /**
     * 字段正则表达式校验
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Regex?: string;
    /**
     * 字段正则表达式校验证提示tip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tip?: string;
}
/**
 * CommitRuleGroupTask返回参数结构体
 */
export interface CommitRuleGroupTaskResponse {
    /**
     * 规则组执行id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: RuleGroupExecResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowTasksForProjectClone返回参数结构体
 */
export interface DescribeWorkflowTasksForProjectCloneResponse {
    /**
     * 项目克隆-任务列表分页返回信息
     */
    Data?: ProjectCloneTaskInfoPageNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchStartIntegrationTasks请求参数结构体
 */
export interface BatchStartIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * CreateScriptsImportTasksDs返回参数结构体
 */
export interface CreateScriptsImportTasksDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则运行情况结果
 */
export interface RuleExecStat {
    /**
     * 规则运行总数
     */
    TotalCnt: number;
    /**
     * 环比规则运行总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTotalCnt: number;
    /**
     * 规则运行总数占比
     */
    TotalCntRatio: number;
    /**
     * 规则运行总数环比变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTotalCntRatio: number;
    /**
     * 规则触发数
     */
    TriggerCnt: number;
    /**
     * 环比规则触发数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTriggerCnt: number;
    /**
     * 触发占总数占比
     */
    TriggerCntRatio: number;
    /**
     * 环比规则触发数变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTriggerCntRatio: number;
    /**
     * 规则报警数
     */
    AlarmCnt: number;
    /**
     * 环比规则报警数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastAlarmCnt: number;
    /**
     * 报警占总数占比
     */
    AlarmCntRatio: number;
    /**
     * 环比报警数变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastAlarmCntRatio: number;
    /**
     * 阻塞发生数
     */
    PipelineCnt: number;
    /**
     * 环比阻塞发生数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastPipelineCnt: number;
    /**
     * 阻塞占总数占比
     */
    PipelineCntRatio: number;
    /**
     * 环比阻塞发生数变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastPipelineCntRatio: number;
}
/**
 * DescribeTaskBindVirtualTask请求参数结构体
 */
export interface DescribeTaskBindVirtualTaskRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 请求页号，默认值为 1
     */
    PageNumber?: number;
    /**
     * 页大小，默认为 10，最大值不能超过 10000
     */
    PageSize?: number;
}
/**
 * 分页查询开发空间版本响应
 */
export interface DescribeFileVersionsResponse {
    /**
     * 开发空间版本数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results?: Array<UserFileVersionDto>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeSuccessorOpsTaskInfos请求参数结构体
 */
export interface DescribeSuccessorOpsTaskInfosRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 创建产出登记项
 */
export interface CreateTaskOutputRegistry {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 表物理唯一id
     */
    TablePhysicalId: string;
    /**
     * 数据源id
     */
    DatasourceId?: string;
    /**
     * 数据库名
     */
    DatabaseName?: string;
    /**
     * 表名
     */
    TableName?: string;
    /**
     * 表唯一标识
     */
    TableGuid?: string;
    /**
     * 分区名
     */
    PartitionName?: string;
    /**
     * 库唯一标识
     */
    DbGuid?: string;
}
/**
 * DescribeTaskReportDetailList请求参数结构体
 */
export interface DescribeTaskReportDetailListRequest {
    /**
     * WeData项目id
     */
    ProjectId: string;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 统计周期的开始日期，格式为 yyyy-MM-dd
     */
    BeginDate: string;
    /**
     * 统计周期的结束日期，格式为 yyyy-MM-dd
     */
    EndDate: string;
    /**
     * 任务状态，多个状态用逗号连接
     */
    StateList?: string;
    /**
     * 排序字段名
     */
    SortItem?: string;
    /**
     * 升序或降序，传ASC或DESC
     */
    SortType?: string;
    /**
     * 页数，从1开始
     */
    PageIndex?: number;
    /**
     * 每页的记录条数，默认10条
     */
    PageSize?: number;
}
/**
 * DescribeImportableOfflineTask返回参数结构体
 */
export interface DescribeImportableOfflineTaskResponse {
    /**
     * 分页结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 【项目克隆】工作流分页返回数据（新版）
 */
export interface ProjectCloneWorkflowInfoPageNew {
    /**
     * item 总数量
     */
    TotalItems?: number;
    /**
     * 总页数
     */
    TotalPages?: number;
    /**
     * 当前页号
     */
    CurrentPage?: number;
    /**
     * 页大小
     */
    PageSize?: number;
    /**
     * 当前页实际 item 数量
     */
    CurrentPageItems?: number;
    /**
     * 工作流列表信息-项目克隆
     */
    Items?: Array<ProjectCloneWorkflowInfo>;
}
/**
 * DescribeIntegrationVersionNodesInfo返回参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoResponse {
    /**
     * 任务节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nodes?: Array<IntegrationNodeInfo>;
    /**
     * 任务映射信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mappings?: Array<IntegrationNodeMapping>;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportWorkflowZip请求参数结构体
 */
export interface ImportWorkflowZipRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 文件路径
     */
    FileNames: Array<string>;
}
/**
 * UpdateBatchTaskInCharge返回参数结构体
 */
export interface UpdateBatchTaskInChargeResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailNumber?: number;
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRule请求参数结构体
 */
export interface DescribeRuleRequest {
    /**
     * 质量规则ID
     */
    RuleId?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * DescribeCodeSearchAuditInfo返回参数结构体
 */
export interface DescribeCodeSearchAuditInfoResponse {
    /**
     * 代码搜索审计响应信息
     */
    Data: CodeSearchAuditResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 目录树节点参数
 */
export interface PathTreeNodeParams {
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * 更新用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 更新用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
}
/**
 * DescribeTableLineageInfo返回参数结构体
 */
export interface DescribeTableLineageInfoResponse {
    /**
     * 表血缘信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableLineageBasicInfo?: TableLineageBaseInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameTaskDs请求参数结构体
 */
export interface RenameTaskDsRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * Notes
     */
    Notes?: string;
}
/**
 * 分区参数
 */
export interface Partition {
    /**
     * 分区转换策略
     */
    Transform?: string;
    /**
     * 分区字段名
     */
    Name?: string;
    /**
     * 策略参数
     */
    TransformArgs?: Array<string>;
}
/**
 * ReplaceProjectParamVersionDs返回参数结构体
 */
export interface ReplaceProjectParamVersionDsResponse {
    /**
     * 结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBaselineTaskAlarmStatus请求参数结构体
 */
export interface ModifyBaselineTaskAlarmStatusRequest {
    /**
     * 是否告警. 取值范围:
  - true: 开启告警;
  - false: 关闭告警
     */
    IsAlarm: string;
    /**
     * 基线任务实例id
     */
    Id: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * RestartInLongAgent返回参数结构体
 */
export interface RestartInLongAgentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIntegrationVersionNodesInfo请求参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 该任务选定版本的存储路径：
  DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 TaskInfo.TaskExt.Properties 下 Base64.encode($region | $bucket | $ftp.file.name) 值
     */
    TaskVersionPath: string;
    /**
     * 该任务选定版本id：
  DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 VersionId 取值
     */
    TaskVersion?: string;
}
/**
 * DescribeGlobalWorkflowDs请求参数结构体
 */
export interface DescribeGlobalWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 分页号
     */
    PageNumber: string;
    /**
     * 分页大小
     */
    PageSize: string;
    /**
     * 关键字，用于对工作流名称、项目名称以及责任人模糊匹配
     */
    Keyword?: string;
    /**
     * 需过滤的工作流 ID 列表，可以为空
     */
    IgnoreWorkflowIds?: Array<string>;
}
/**
 * DescribeScheduleInstances请求参数结构体
 */
export interface DescribeScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * DescribeBaselineInstanceGantt请求参数结构体
 */
export interface DescribeBaselineInstanceGanttRequest {
    /**
     * 基线实例id
     */
    BaselineInstanceId: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 保障任务id
     */
    PromiseTaskId?: string;
}
/**
 * UpdateBatchTaskResourceGroup请求参数结构体
 */
export interface UpdateBatchTaskResourceGroupRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 调度资源组Id
     */
    ResourceGroup?: string;
    /**
     * 集成资源组Id
     */
    EtlResourceGroup?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * map
 */
export interface StrToStrMap {
    /**
     * k
  注意：此字段可能返回 null，表示取不到有效值。
     */
    K?: string;
    /**
     * v
  注意：此字段可能返回 null，表示取不到有效值。
     */
    V?: string;
}
/**
 * 离线任务统计指标明细
 */
export interface TaskReportDetail {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务实例ID
     */
    InstanceId: string;
    /**
     * 实例数据运行时间
     */
    CurRunDate: string;
    /**
     * 实例实际下发时间
     */
    IssueDate: string;
    /**
     * 任务状态码。1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行。
     */
    TaskState: string;
    /**
     * 总读取条数
     */
    TotalReadRecords: number;
    /**
     * 总读取字节数
     */
    TotalReadBytes: number;
    /**
     * 总写入条数
     */
    TotalWriteRecords: number;
    /**
     * 总写入字节数
     */
    TotalWriteBytes: number;
    /**
     * 写入速度（条/秒）
     */
    RecordSpeed: number;
    /**
     * 吞吐（Byte/秒）
     */
    ByteSpeed: number;
    /**
     * 脏数据条数
     */
    TotalErrorRecords: number;
}
/**
 * 批量测试运行提交任务实例信息
 */
export interface TestRunBatchItem {
    /**
     * 任务实例Id
     */
    InstanceKey: string;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 实例运行时间
     */
    CurrRunDate: string;
}
/**
 * DeleteLink返回参数结构体
 */
export interface DeleteLinkResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 参数参数
 */
export interface ParamInfo {
    /**
     * 参数名
     */
    ParamKey: string;
    /**
     * 参数值
     */
    ParamValue: string;
}
/**
 * DescribeExecStrategy请求参数结构体
 */
export interface DescribeExecStrategyRequest {
    /**
     * 规则组Id
     */
    RuleGroupId?: number;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * CreateHiveTable请求参数结构体
 */
export interface CreateHiveTableRequest {
    /**
     * 数据源id
     */
    DatasourceId: string;
    /**
     * 数据库名称
     */
    Database: string;
    /**
     * base64转码之后的建表语句
     */
    DDLSql: string;
    /**
     * 表权限 ，默认为0:项目共享;1:仅个人与管理员
     */
    Privilege: number;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 责任人
     */
    Incharge?: string;
}
/**
 * 跨工作流任务(虚拟任务)基本信息，带分页
 */
export interface VirtualTaskInfoPage {
    /**
     * 跨工作流任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rows?: Array<VirtualTaskInfo>;
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeRuleGroupTable返回参数结构体
 */
export interface DescribeRuleGroupTableResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupTable;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskOutParamDs返回参数结构体
 */
export interface DescribeTaskOutParamDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterTaskOutDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDsEventPublisher请求参数结构体
 */
export interface DeleteDsEventPublisherRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
    /**
     * 触发类型，REST_API，KAFKA
     */
    Type: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
}
/**
 * 当申请导入临时文件时，需要传入文件名来获取访问秘钥，传入文件名的目的是临时文件名字可能出现冲突，后端会进行检测，如果检测到文件名已经存在了，会基于传入的文件名生成新的文件名，并提供最终在 Cos 中的最终存储绝对路径
 */
export interface ShareStorageFileMappingDTO {
    /**
     * 源文件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginFileName?: string;
    /**
     * 共享存储文件名，即在共享存储文件中的名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetFileName?: string;
    /**
     * 共享存储最终存储绝对路径，
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AbsoluteTargetFilePath?: string;
}
/**
 * ImportFiles请求参数结构体
 */
export interface ImportFilesRequest {
    /**
     * 导入相关信息
     */
    ImportRequestInfo: ImportRequestInfo;
}
/**
 * RenameResourcePath请求参数结构体
 */
export interface RenameResourcePathRequest {
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 资源路径
     */
    FilePath: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * UpdateBatchTaskDatasource请求参数结构体
 */
export interface UpdateBatchTaskDatasourceRequest {
    /**
     * 待更新的任务ID
     */
    TaskIds: Array<string>;
    /**
     * 数据源ID
     */
    DatasourceId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 数据源类型
     */
    DatasourceType?: string;
}
/**
 * FreezeTasksByMultiWorkflow请求参数结构体
 */
export interface FreezeTasksByMultiWorkflowRequest {
    /**
     * 工作流Id集合
     */
    WorkFlowIds: Array<string>;
}
/**
 * CreateRuleTemplate请求参数结构体
 */
export interface CreateRuleTemplateRequest {
    /**
     * 模版类型  1.系统模版   2.自定义模版
     */
    Type?: number;
    /**
     * 模版名称
     */
    Name?: string;
    /**
     * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
     */
    QualityDim?: number;
    /**
     * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
     */
    SourceObjectType?: number;
    /**
     * 模板描述
     */
    Description?: string;
    /**
     * 源端对应的引擎类型
     */
    SourceEngineTypes?: Array<number | bigint>;
    /**
     * 是否关联其它库表
     */
    MultiSourceFlag?: boolean;
    /**
     * SQL 表达式
     */
    SqlExpression?: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 是否添加where参数
     */
    WhereFlag?: boolean;
}
/**
 * 质量概览表排行结果
 */
export interface TopTableStat {
    /**
     * 告警表列表
     */
    AlarmTables: Array<TopTableStatItem>;
    /**
     * 阻塞表列表
     */
    PipelineTables: Array<TopTableStatItem>;
}
/**
 * 键值对
 */
export interface Pair {
    /**
     * 键名
     */
    Key: string;
    /**
     * 值
     */
    Value: string;
}
/**
 * DeleteIntegrationTask返回参数结构体
 */
export interface DeleteIntegrationTaskResponse {
    /**
     * 任务删除成功与否标识
     */
    Data?: boolean;
    /**
     * 任务删除成功与否标识
  0表示删除成功
  1 表示失败，失败原因见 DeleteErrInfo
  100 表示running or suspend task can't be deleted失败，失败原因也会写到DeleteErrInfo里面
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: number;
    /**
     * 删除失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteErrInfo?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecycleTaskList返回参数结构体
 */
export interface DescribeRecycleTaskListResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: RecycleTaskPageInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表的元数据信息
 */
export interface TableBasicInfo {
    /**
     * 表的全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 数据源全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据源名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 引擎/存储类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineType?: string;
    /**
     * 表类型，视图，外部表等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableType?: string;
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 所属项目英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 所属项目英中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectDisplayName?: string;
    /**
     * 责任人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerId?: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerName?: string;
    /**
     * 存储位置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageLocation?: number;
    /**
     * 表描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 是否分区表，0-全量表 1-分区表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPartitionTable?: number;
    /**
     * 分区字段list
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionColumns?: Array<string>;
    /**
     * 存储格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageFormat?: string;
    /**
     * 存储量，字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSize?: number;
    /**
     * 存储量，单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSizeWithUnit?: string;
    /**
     * 累计存储【MB】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalSizeMb?: number;
    /**
     * 副本数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicaCount?: number;
    /**
     * 文件数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileCount?: number;
    /**
     * 分区总数（包含hive，iceberg）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionCount?: number;
    /**
     * 分区字段数量（包含hive，iceberg）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionFieldCount?: number;
    /**
     * 生命周期-分区保留天数【分区保留策略时有效】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionExpireDays?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * ModifyTaskLinksDs请求参数结构体
 */
export interface ModifyTaskLinksDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 父任务ID
     */
    TaskFrom: string;
    /**
     * 子任务ID
     */
    TaskTo: string;
    /**
     * 子任务工作流
     */
    WorkflowId: string;
    /**
     * 父任务工作流
     */
    RealFromWorkflowId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 父子任务之间的依赖关系
      正常的依赖父任务全部实例  启用
      normal_all(1),
      normal_first_one(2), 正常的依赖父任务 第一个
      normal_last_one(3), 正常的依赖父任务 最后一个
      normal_any_one(4), 正常的依赖父任务 任意一个
      normal_specific_one(5), 正常的依赖父任务 指定的一个
      self(6), 自身依赖，可能用不到
  
       非正常的依赖父任务全部实例  启用（向前依赖  明天)
      non_normal_all_forward(11),
      non_normal_first_one_forward(12), 非正常的依赖父任务 第一个
      non_normal_last_one_forward(13), 非正常的依赖父任务 最后一个
      non_normal_any_one_forward(14), 非正常的依赖父任务 任意一个
      non_normal_specific_one_forward(15),非正常的依赖父任务 指定一个
  
      非正常的依赖父任务全部实例  启用（向后依赖 昨天）
      non_normal_all_backward(21),
      non_normal_first_one_backward(22), 非正常的依赖父任务 第一个
      non_normal_last_one_backward(23), 非正常的依赖父任务 最后一个
      non_normal_any_one_backward(24), 非正常的依赖父任务 任意一个
      non_normal_specific_one_backward(25) 非正常的依赖父任务 指定一个
     */
    LinkDependencyType?: string;
}
/**
 * ds参数map结构体
 */
export interface ParamMapDsDto {
    /**
     * k
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * v
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * DescribeDatabaseInfoList请求参数结构体
 */
export interface DescribeDatabaseInfoListRequest {
    /**
     * 过滤参数
     */
    Filters: Array<Filter>;
    /**
     * 连接类型
     */
    ConnectionType: string;
}
/**
 * DescribeIntegrationTask返回参数结构体
 */
export interface DescribeIntegrationTaskResponse {
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfo?: IntegrationTaskInfo;
    /**
     * 采集器统计信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentStatus?: AgentStatus;
    /**
     * 任务版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskVersion?: TaskVersionInstance;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopIntegrationTask返回参数结构体
 */
export interface StopIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsTaskVersionInfo请求参数结构体
 */
export interface DescribeDsTaskVersionInfoRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 版本
     */
    TaskVersion: string;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * CheckDuplicateTemplateName返回参数结构体
 */
export interface CheckDuplicateTemplateNameResponse {
    /**
     * 是否重名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBatchTaskInCharge请求参数结构体
 */
export interface UpdateBatchTaskInChargeRequest {
    /**
     * 待更新的任务ID
     */
    TaskIds: Array<string>;
    /**
     * 责任人
     */
    InCharge: string;
    /**
     * 责任人Id
     */
    InChargeId: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * DescribeRuleTemplates请求参数结构体
 */
export interface DescribeRuleTemplatesRequest {
    /**
     * 模版类型 1.系统模版 2.自定义模版
     */
    Type?: number;
    /**
     * 1.常量 2.离线表级 2.离线字段级
     */
    SourceObjectType?: number;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 源端对应的引擎类型
     */
    SourceEngineTypes?: Array<number | bigint>;
}
/**
 * BatchModifyOwnersNew请求参数结构体
 */
export interface BatchModifyOwnersNewRequest {
    /**
     * 需要更新责任人的TaskId数组
     */
    TaskIdList: Array<string>;
    /**
     * 需要更新的责任人
     */
    Owners: string;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * UpdateEventListener请求参数结构体
 */
export interface UpdateEventListenerRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
    /**
     * REST_API、KAFKA
     */
    Type: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 属性信息
     */
    Properties?: Array<ParamInfoDs>;
    /**
     * 事件所属项目id
     */
    EventProjectId?: string;
}
/**
 * StopBaseline返回参数结构体
 */
export interface StopBaselineResponse {
    /**
     * 是否操作成功描述
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPathTrees请求参数结构体
 */
export interface GetPathTreesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 关键字搜索
     */
    Keyword?: string;
    /**
     * 是否为脚本 false 非脚本
  true 脚本
     */
    Script?: boolean;
}
/**
 * GenHiveTableDDLSql返回参数结构体
 */
export interface GenHiveTableDDLSqlResponse {
    /**
     * 生成的ddl语句
     */
    DDLSql?: string;
    /**
     * 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleExecStat请求参数结构体
 */
export interface DescribeRuleExecStatRequest {
    /**
     * ProjectId 值
     */
    ProjectId: string;
    /**
     * 开始时间，时间戳到秒
     */
    BeginDate: string;
    /**
     * 结束时间，时间戳到秒
     */
    EndDate: string;
}
/**
 * WorkflowCanvasOperatorDs
 */
export interface WorkflowCanvasOperatorsDs {
    /**
     * 操作人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorId?: number;
    /**
     * 操作人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
}
/**
 * 规则配置
 */
export interface RuleConfig {
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 规则检测范围类型 1.全表  2.条件扫描
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionType?: number;
    /**
     * 检测范围表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Condition?: string;
    /**
     * 目标检测范围表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetCondition?: string;
}
/**
 * BatchCreateIntegrationTaskAlarms返回参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsResponse {
    /**
     * 操作成功的任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedCount: number;
    /**
     * 任务总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MoveFile请求参数结构体
 */
export interface MoveFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 来源路径
     */
    SourceFilePath: string;
    /**
     * 目标路径
     */
    TargetDirPath: string;
}
/**
 * DescribeEventTypes请求参数结构体
 */
export declare type DescribeEventTypesRequest = null;
/**
 * DescribeOpsInstanceLogList返回参数结构体
 */
export interface DescribeOpsInstanceLogListResponse {
    /**
     * 实例日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<InstanceLogInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskParamDs请求参数结构体
 */
export interface DescribeTaskParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务id
     */
    TaskId?: string;
}
/**
 * DescribeApproveTypeList返回参数结构体
 */
export interface DescribeApproveTypeListResponse {
    /**
     * 获取审批分类列表
     */
    Data: Array<ApproveType>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchSuspendIntegrationTasks返回参数结构体
 */
export interface BatchSuspendIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount?: number;
    /**
     * 操作失败的任务数
     */
    FailedCount?: number;
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckCustomFunctionPremise请求参数结构体
 */
export interface CheckCustomFunctionPremiseRequest {
    /**
     * 集群实例 ID
     */
    ClusterIdentifier: string;
    /**
     * 函数类型
     */
    Type: string;
}
/**
 * DescribeRuleExecLog请求参数结构体
 */
export interface DescribeRuleExecLogRequest {
    /**
     * 规则执行Id
     */
    RuleExecId: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 规则组执行id
     */
    RuleGroupExecId: number;
}
/**
 * 规则组分页
 */
export interface RuleGroupPage {
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 规则组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<RuleGroup>;
}
/**
 * UpdateTaskDs请求参数结构体
 */
export interface UpdateTaskDsRequest {
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 任务信息
     */
    Task?: TaskDsDTOLiteV3;
}
/**
 * DescribeBaselineInstanceGantt返回参数结构体
 */
export interface DescribeBaselineInstanceGanttResponse {
    /**
     * 基线实例，带有关键任务实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BaselineInstanceVo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchRunTasksDs返回参数结构体
 */
export interface BatchRunTasksDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperateResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTasksByPage请求参数结构体
 */
export interface DescribeTasksByPageRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 页大小，默认10
     */
    PageSize?: number;
}
/**
 * 批量操作任务列表分页
 */
export interface DescribeBatchOperateTaskPage {
    /**
     * 总页码数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount: number;
    /**
     * 内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<DescribeBatchOperateTaskDTO>;
    /**
     * 总个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * 自动解析上游依赖任务请求
 */
export interface AnalyzeDependentTask {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 表物理唯一id
     */
    TablePhysicalId: string;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 数据源id
     */
    DatasourceId?: string;
    /**
     * 数据库名称
     */
    DatabaseName?: string;
    /**
     * 表名称
     */
    TableName?: string;
    /**
     * 表唯一标识
     */
    TableGuid?: string;
    /**
     * 分区名称
     */
    PartitionName?: string;
}
/**
 * DescribeIntegrationStatistics返回参数结构体
 */
export interface DescribeIntegrationStatisticsResponse {
    /**
     * 总任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalTask: number;
    /**
     * 生产态任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProdTask: number;
    /**
     * 开发态任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DevTask: number;
    /**
     * 总读取条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalReadRecords: number;
    /**
     * 总写入条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalWriteRecords: number;
    /**
     * 总脏数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalErrorRecords: number;
    /**
     * 总告警事件数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalAlarmEvent: number;
    /**
     * 当天读取增长条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncreaseReadRecords: number;
    /**
     * 当天写入增长条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncreaseWriteRecords: number;
    /**
     * 当天脏数据增长条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncreaseErrorRecords: number;
    /**
     * 当天告警事件增长数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncreaseAlarmEvent: number;
    /**
     * 告警事件统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmEvent: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBatchTaskParams请求参数结构体
 */
export interface UpdateBatchTaskParamsRequest {
    /**
     * 待更新的任务ID
     */
    TaskIds: Array<string>;
    /**
     * 调度参数键值对
     */
    MapParamList: Array<ParamMapDsDto>;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DescribeIntegrationNode返回参数结构体
 */
export interface DescribeIntegrationNodeResponse {
    /**
     * 节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeInfo: IntegrationNodeInfo;
    /**
     * 上游节点是否已经修改。true 已修改，需要提示；false 没有修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceCheckFlag: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeToken请求参数结构体
 */
export declare type DescribeTokenRequest = null;
/**
 * 运维大屏任务展示
 */
export interface ScreenTaskInfo {
    /**
     * 统计标示 0：全部、1：当前天、2：昨天
     */
    CountTag?: number;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNum?: number;
    /**
     * 运行中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningNum?: number;
    /**
     * 停止中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoppingNum?: number;
    /**
     * 已停止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoppedNum?: number;
    /**
     * 暂停
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FrozenNum?: number;
    /**
     * 年任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YearNum?: number;
    /**
     * 月任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonthNum?: number;
    /**
     * 周任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeekNum?: number;
    /**
     * 天任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DayNum?: number;
    /**
     * 小时任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HourNum?: number;
    /**
     * 分钟任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinuteNum?: number;
}
/**
 * DescribeTrendStat返回参数结构体
 */
export interface DescribeTrendStatResponse {
    /**
     * 结果
     */
    Data: Array<RuleExecDateStat>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePathTrees返回参数结构体
 */
export interface DescribePathTreesResponse {
    /**
     * 目录树结构列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<PathTreeNode>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则操作记录业务
 */
export interface RuleHistory {
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 变更时间 yyyy-MM-dd HH:mm:ss
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlterTime?: string;
    /**
     * 变更内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlterContent?: string;
    /**
     * 操作账号UId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUserId?: number;
    /**
     * 操作人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
}
/**
 * MoveTasksToFolder返回参数结构体
 */
export interface MoveTasksToFolderResponse {
    /**
     * true代表成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFatherDatasourceInfoDs返回参数结构体
 */
export interface DescribeFatherDatasourceInfoDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDatasourceDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EditBaseline请求参数结构体
 */
export interface EditBaselineRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 基线名称
     */
    BaselineName: string;
    /**
     * D或者H；分别表示天基线和小时基线
     */
    BaselineType: string;
    /**
     * 基线负责人id
     */
    InChargeUin: string;
    /**
     * 基线负责人名称
     */
    InChargeName: string;
    /**
     * 保障任务
     */
    PromiseTasks: Array<BaselineTaskInfo>;
    /**
     * 保障时间
     */
    PromiseTime: string;
    /**
     * 告警余量/分钟
     */
    WarningMargin: number;
    /**
     * 基线id
     */
    BaselineId: string;
    /**
     * 更新人id
     */
    UpdateUin: string;
    /**
     * 更新人名字
     */
    UpdateName: string;
    /**
     * 无
     */
    IsNewAlarm: boolean;
    /**
     * 现有告警规则信息
     */
    AlarmRuleDto?: AlarmRuleDto;
    /**
     * 告警更新请求
     */
    BaselineModifyAlarmRuleRequest?: ModifyAlarmRuleRequest;
}
/**
 * DescribeRuleTemplates返回参数结构体
 */
export interface DescribeRuleTemplatesResponse {
    /**
     * 规则模版列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<RuleTemplate>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskTypeByScriptType请求参数结构体
 */
export interface DescribeTaskTypeByScriptTypeRequest {
    /**
     * 脚本类型
     */
    ScriptType: string;
    /**
     * 项目编号
     */
    ProjectId?: string;
}
/**
 * BatchDeleteTasksDs请求参数结构体
 */
export interface BatchDeleteTasksDsRequest {
    /**
     * 批量删除的任务TaskId
     */
    TaskIdList: Array<string>;
    /**
     * true : 删除后下游任务可正常运行
  false：删除后下游任务不可运行
     */
    DeleteMode?: boolean;
    /**
     * true：通知下游任务责任人
  false:  不通知下游任务责任人
     */
    OperateInform?: boolean;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * true: 删除任务引用的脚本
  false: 不删除任务引用的脚本
     */
    DeleteScript?: boolean;
}
/**
 * DeleteDsEventListener返回参数结构体
 */
export interface DeleteDsEventListenerResponse {
    /**
     * 是否成功，如果未配置监听者则返回false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FreezeOpsTasks请求参数结构体
 */
export interface FreezeOpsTasksRequest {
    /**
     * 任务列表
     */
    Tasks: Array<SimpleTaskInfo>;
    /**
     * 任务操作是否消息通知下游任务责任人
     */
    OperateIsInform: boolean;
}
/**
 * DeleteRecordList请求参数结构体
 */
export interface DeleteRecordListRequest {
    /**
     * 任务提交记录Id列表
     */
    RecordIds: Array<number | bigint>;
}
/**
 * 数据质量数据对象
 */
export interface SourceObject {
    /**
     * 源字段详细类型，int、string
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SourceObjectDataTypeName?: string;
    /**
     * 源字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SourceObjectValue?: string;
    /**
     * 源字段详细类型，int、string
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectDataTypeName?: string;
    /**
     * 源字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectValue?: string;
    /**
     * 对象类型 1.常量  2.离线表级   3.离线字段级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectType?: number;
}
/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
    /**
     * 规则列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<Rule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流运行信息
 */
export interface WorkFlowExecuteDto {
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 工作流运行状态 0：等待运行、1：运行中、2：运行完成、3：运行出错
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
}
/**
 * SubmitTask请求参数结构体
 */
export interface SubmitTaskRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 版本备注
     */
    VersionRemark: string;
    /**
     * 是否启动调度
     */
    StartScheduling: boolean;
}
/**
 * DescribeWorkflowByFordIds请求参数结构体
 */
export interface DescribeWorkflowByFordIdsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    FolderIdList: Array<string>;
}
/**
 * 查询数据源分页列表
 */
export interface DataSourceInfoPage {
    /**
     * 分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize: number;
    /**
     * 数据源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rows: Array<DataSourceInfo>;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 总分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPageNumber: number;
}
/**
 * DeleteRecordList返回参数结构体
 */
export interface DeleteRecordListResponse {
    /**
     * 批量删除提交记录数
     */
    DeletedSize: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设置任务引用参数-入参
 */
export interface ParamTaskDsRequest {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 参数列表
     */
    MapParamList?: Array<ParamMapDsDto>;
}
/**
 * UpdateInLongAgent返回参数结构体
 */
export interface UpdateInLongAgentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventCases请求参数结构体
 */
export interface DescribeEventCasesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 事件实例目录,示例取值:
  - 已过期: expired
  - 未过期: consuming
  - 全部: all
  
     */
    Category: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数目
     */
    PageSize: number;
    /**
     * 事件名称
     */
    EventName?: string;
    /**
     * 事件类型
     * @deprecated
     */
    EventType?: string;
    /**
     * 事件分割类型
     */
    EventSubType?: string;
    /**
     * 事件广播类型
     * @deprecated
     */
    EventBroadcastType?: string;
    /**
     * 事件实例状态,示例取值:
  - 已消费: COMSUMED
  - 已过期: EXPIRED
  - 待消费: ACTIVE
  - 消费中: CONSUMING
     * @deprecated
     */
    Status?: string;
    /**
     * 事件实例最小创建时间
     */
    CreationTimeStart?: string;
    /**
     * 事件实例最大创建时间
     */
    CreationTimeEnd?: string;
    /**
     * 事件实例最小触发时间
     */
    EventTriggeredTimeStart?: string;
    /**
     * 事件实例最大触发时间
     */
    EventTriggeredTimeEnd?: string;
    /**
     * 事件实例最小消费时间
     */
    LogTimeStart?: string;
    /**
     * 事件实例最大消费时间
     */
    LogTimeEnd?: string;
    /**
     * 事件实例数据时间
     */
    Dimension?: string;
    /**
     * 事件实例有效时间
     */
    TimeToLive?: string;
    /**
     * 排序字段
     */
    SortItem?: string;
    /**
     * 排序顺序
     */
    SortType?: string;
}
/**
 * BatchResumeIntegrationTasks返回参数结构体
 */
export interface BatchResumeIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount?: number;
    /**
     * 操作失败的任务数
     */
    FailedCount?: number;
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewWorkflowDs请求参数结构体
 */
export interface RenewWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 工作流描述
     */
    WorkflowDesc?: string;
    /**
     * 文件夹ID
     */
    FolderId?: string;
    /**
     * 责任ID，多个使用;分割
     */
    OwnerId?: string;
    /**
     * 责任人名称，多个使用;分割
     */
    Owner?: string;
    /**
     * SparkSql参数
     */
    SparkSqlParams?: string;
}
/**
 * UpdateWorkflowOwner返回参数结构体
 */
export interface UpdateWorkflowOwnerResponse {
    /**
     * 响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 返回数量
     */
    PageSize?: number;
    /**
     * 排序配置
     */
    OrderFields?: Array<OrderField>;
    /**
     * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
     */
    Filters?: Array<Filter>;
}
/**
 * BatchCreateTaskVersionDs使用的TaskVersionDsDTO
 */
export interface BatchCreateTaskVersionDsDTOLite {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 版本备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionRemark?: string;
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfo?: TaskDsDTOLiteV2;
}
/**
 * SubmitBatchTestRun返回参数结构体
 */
export interface SubmitBatchTestRunResponse {
    /**
     * 批量提交实例列表
     */
    BatchResult?: Array<TestRunBatchItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScriptUsedByOtherTaskDs请求参数结构体
 */
export interface ScriptUsedByOtherTaskDsRequest {
    /**
     * 边的目标节点
     */
    TaskId: string;
}
/**
 * 代码搜索响应结果
 */
export interface CodeSearchResult {
    /**
     * 代码搜索结果列表
     */
    CodeSearchInfoList: CodeSearchInfoPage;
    /**
     * 开发空间搜索结果数
     */
    DevCount: number;
    /**
     * 调度空间搜索结果数
     */
    ScheduleCount: number;
    /**
     * 回收站搜索结果数
     */
    RecycleCount: number;
}
/**
 * 回收站任务列表
 */
export interface RecycleFilePageInfo {
    /**
     * 分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 分页数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rows?: Array<DeleteUserFileDTO>;
    /**
     * 总个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总分页页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPageNumber?: number;
}
/**
 * 实例运维详情
 */
export interface InstanceOpsDto {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 下一个数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextCurDate?: string;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 尝试运行次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 当前运行次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tries?: number;
    /**
     * 重跑总次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalRunNum?: number;
    /**
     * 是否补录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DoFlag?: number;
    /**
     * 是否是重跑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedoFlag?: number;
    /**
     * 实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: string;
    /**
     * 运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeBroker?: string;
    /**
     * 失败的原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc?: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeOpsDto;
    /**
     * 依赖判断完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependenceFulfillTime?: string;
    /**
     * 首次依赖判断通过时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstDependenceFulfillTime?: string;
    /**
     * 首次启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstStartTime?: string;
    /**
     * 开始启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 运行完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 耗费时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostTime?: string;
    /**
     * 耗费时间(ms)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostMillisecond?: number;
    /**
     * 最大运行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxCostTime?: number;
    /**
     * 最小运行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinCostTime?: number;
    /**
     * 平均运行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvgCostTime?: number;
    /**
     * 最近日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastLog?: string;
    /**
     * 调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDateTime?: string;
    /**
     * 上次调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerDateTime?: string;
    /**
     * 最后更新事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 分支，依赖关系 and、or
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 执行空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionSpace?: string;
    /**
     * 忽略事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IgnoreEvent?: boolean;
    /**
     * 虚拟任务实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 递归实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonList?: string;
    /**
     * 产品业务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 资源组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 资源组指定执行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceInstanceId?: string;
    /**
     * 资源队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 最近提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime?: string;
    /**
     * 首次执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstRunTime?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 实例标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceKey?: string;
    /**
     * 资源组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupId?: string;
    /**
     * 资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupName?: string;
}
/**
 * DeleteTaskInParamDs返回参数结构体
 */
export interface DeleteTaskInParamDsResponse {
    /**
     * 结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteResourceFile请求参数结构体
 */
export interface DeleteResourceFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源id
     */
    ResourceId: string;
}
/**
 * SaveCustomFunction请求参数结构体
 */
export interface SaveCustomFunctionRequest {
    /**
     * 函数唯一标识
     */
    FunctionId: string;
    /**
     * 分类：窗口函数、聚合函数、日期函数......
     */
    Kind: string;
    /**
     * 集群引擎实例
     */
    ClusterIdentifier: string;
    /**
     * 类名
     */
    ClassName: string;
    /**
     * 资源列表
     */
    ResourceList: Array<FunctionResource>;
    /**
     * 函数说明
     */
    Description: string;
    /**
     * 用法
     */
    Usage: string;
    /**
     * 参数说明
     */
    ParamDesc: string;
    /**
     * 返回值说明
     */
    ReturnDesc: string;
    /**
     * 示例
     */
    Example: string;
}
/**
 * DescribeRuleDataSources返回参数结构体
 */
export interface DescribeRuleDataSourcesResponse {
    /**
     * 数据源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<DatabaseInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskScriptDs请求参数结构体
 */
export interface ModifyTaskScriptDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 脚本内容 base64编码
     */
    ScriptContent?: string;
    /**
     * 集成任务脚本配置
     */
    IntegrationNodeDetails?: Array<IntegrationNodeDetail>;
}
/**
 * 补录计划集合
 */
export interface MakePlanOpsDtoCollection {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<MakePlanOpsDto>;
}
/**
 * UpdateBatchTaskParameter返回参数结构体
 */
export interface UpdateBatchTaskParameterResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessNumber?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailNumber?: number;
    /**
     * 批量操作返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自动解析任务依赖
 */
export interface TaskDataRegistry {
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfo?: TaskDsDTO;
    /**
     * 依赖信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskDataRegistryInfo?: TaskDataRegistryDTO;
}
/**
 * DescribeDiagnosticInfoByBaselineId请求参数结构体
 */
export interface DescribeDiagnosticInfoByBaselineIdRequest {
    /**
     * 基线id
     */
    BaselineId: string;
    /**
     * 1
     */
    ProjectId: string;
}
/**
 * DescribeThirdTaskRunLog请求参数结构体
 */
export interface DescribeThirdTaskRunLogRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 实例数据时间
     */
    CurRunDate: string;
}
/**
 * AnalyzeDependentTasks请求参数结构体
 */
export interface AnalyzeDependentTasksRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据库表信息列表
     */
    AnalyzeTasks: Array<AnalyzeDependentTask>;
}
/**
 * BatchRerunIntegrationTaskInstances请求参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesRequest {
    /**
     * 实例信息
     */
    Instances: Array<SchedulerTaskInstanceInfo>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 查询任务输入参数Dto
 */
export interface ParameterTaskInDsDto {
    /**
     * 唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 参数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamKey: string;
    /**
     * 参数描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDesc: string;
    /**
     * 父任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromTaskId: string;
    /**
     * 父任务参数key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromParamKey: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 升级时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 父任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromTaskName: string;
    /**
     * 父任务项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromProjectId: string;
    /**
     * 父任务项目名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromProjectName: string;
}
/**
 * DescribeDrSonInstance请求参数结构体
 */
export interface DescribeDrSonInstanceRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务来源 ADHOC || WORKFLOW
     */
    TaskSource: string;
    /**
     * 试运行记录id
     */
    RecordId: number;
}
/**
 * 告警规则
 */
export interface AlarmRuleDto {
    /**
     * 告警规则id
     */
    AlarmRuleId?: string;
    /**
     * 重要;
  紧急;
  普通
     */
    AlarmLevelType?: string;
}
/**
 * 查询实例条件
 */
export interface SearchCondition {
    /**
     * 查询框架，必选
     */
    Instance: SearchConditionInstance;
    /**
     * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
     */
    Keyword?: string;
    /**
     * 排序顺序（asc，desc）
     */
    Sort?: string;
    /**
     * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
     */
    SortCol?: string;
}
/**
 * DescribeInstanceLogDetail请求参数结构体
 */
export interface DescribeInstanceLogDetailRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
    /**
     * 服务器Ip
     */
    BrokerIp: string;
    /**
     * 文件Name
     */
    OriginFileName: string;
}
/**
 * BatchSuspendIntegrationTasks请求参数结构体
 */
export interface BatchSuspendIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP)
     */
    Event?: string;
}
/**
 * 业务额外属性
 */
export interface BizParams {
    /**
     * 字段中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameCn?: string;
    /**
     * 字段英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameEn?: string;
    /**
     * iceberg表是否启用高级配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasAdvancedConfig?: string;
}
/**
 * 离线任务实例详情
 */
export interface TaskInstanceDetail {
    /**
     * 实例id
     */
    TaskRunId: string;
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 实例数据运行时间
     */
    CurRunDate: string;
    /**
     * 实例实际运行时间
     */
    IssueDate: string;
    /**
     * InLong任务Id
     */
    InlongTaskId: string;
    /**
     * 执行资源组id
     */
    ExecutorGroupId: string;
    /**
     * 任务类型(1 调试运行,2 调度执行)
     */
    TaskRunType: number;
    /**
     * 任务状态(1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行)
     */
    State: number;
    /**
     * 实例开始运行时间，格式：yyyy-MM-dd HH:mm:ss
     */
    StartTime: string;
    /**
     * 实例结束运行时间，格式：yyyy-MM-dd HH:mm:ss
     */
    EndTime: string;
    /**
     * Broker IP
     */
    BrokerIp: string;
    /**
     * 运行实例的EKS Pod名称
     */
    PodName: string;
    /**
     * 下一个调度周期的数据运行时间
     */
    NextRunDate: string;
    /**
     * 创建者的账号Id
     */
    CreateUin: number;
    /**
     * 操作者的账号Id
     */
    OperatorUin: number;
    /**
     * 拥有者的账号Id
     */
    OwnerUin: number;
    /**
     * App Id
     */
    AppId: number;
    /**
     * WeData项目id
     */
    ProjectId: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 任务名称
     */
    TaskName: string;
}
/**
 * DescribeCodeDetail返回参数结构体
 */
export interface DescribeCodeDetailResponse {
    /**
     * 文件或任务详情响应信息
     */
    Data?: CodeDetailResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 项目参数版本信息
 */
export interface ParameterVersionDsDto {
    /**
     * 唯一标识
     */
    Id?: number;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: number;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 参数归属
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamBelong?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 创建者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * DeleteCustomFunction返回参数结构体
 */
export interface DeleteCustomFunctionResponse {
    /**
     * 函数 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionId?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateFileVersion返回参数结构体
 */
export interface CreateFileVersionResponse {
    /**
     * 结果，成功或失败
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchUpdateTasksDs请求参数结构体
 */
export interface BatchUpdateTasksDsRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 任务信息
     */
    Tasks?: Array<TaskDsDTOLiteV2>;
}
/**
 * ListBatchDetail返回参数结构体
 */
export interface ListBatchDetailResponse {
    /**
     * 批量操作ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: number;
    /**
     * 运行类型：
  ASYNC-异步
  SYNC-同步
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunType?: string;
    /**
     * 成功列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessResource?: Array<AsyncResourceVO>;
    /**
     * 失败列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailResource?: Array<AsyncResourceVO>;
    /**
     * job类型
  BATCH_DELETE --批量删除：1、任务名称：ResourceName
  BATCH_CREATE_VERSION --批量提交：1、任务名称：ResourceId 2、资源组：GroupId
  BATCH_MODIFY_DATASOURCE --批量修改数据源：1、任务名称：ResourceName
  BATCH_MODIFY_INCHARGE --批量修改责任人：1、任务名称：ResourceName
  BATCH_MODIFY_PARAMETER --批量修改参数：1、任务名称：ResourceName
  BATCH_MODIFY_SCHEDULE --批量修改调度计划：1、任务名称：ResourceName
  BATCH_MODIFY_GROUPID --批量修改资源组：1、任务名称：ResourceName
  BATCH_MODIFY_CONFIG --批量修改高级配置：1、任务名称：ResourceName
  BATCH_MODIFY_SCHEDULE_PARAMETER --批量修改调度参数：1、任务名称：ResourceName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobType?: string;
    /**
     * job状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobStatus?: string;
    /**
     * 资源总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalResource?: number;
    /**
     * 批量提交是是否需要审批，其他的批量操作默认为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NeedApprove?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskInstance返回参数结构体
 */
export interface DescribeTaskInstanceResponse {
    /**
     * 任务实例详情
     */
    TaskInstanceDetail?: TaskInstanceDetail;
    /**
     * 任务实例详情。与TaskInstanceDetail相同含义，优先取Data，Data为空时，取TaskInstanceDetail
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskInstanceDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSchedulerInstanceStatus返回参数结构体
 */
export interface DescribeSchedulerInstanceStatusResponse {
    /**
     * 响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ScreenInstanceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeThirdTaskRunLog返回参数结构体
 */
export interface DescribeThirdTaskRunLogResponse {
    /**
     * 获取第三方运行日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskVersionDs返回参数结构体
 */
export interface CreateTaskVersionDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProdTasks请求参数结构体
 */
export interface DescribeProdTasksRequest {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
}
/**
 * ResumeIntegrationTask返回参数结构体
 */
export interface ResumeIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskReportDetailList返回参数结构体
 */
export interface DescribeTaskReportDetailListResponse {
    /**
     * 页码，从1开始
     */
    PageIndex: number;
    /**
     * 每页的记录数
     */
    PageSize: number;
    /**
     * 总记录数
     */
    TotalCount: number;
    /**
     * 总页数
     */
    TotalPage: number;
    /**
     * 任务运行指标
     */
    Items: Array<TaskReportDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetCosToken请求参数结构体
 */
export interface GetCosTokenRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 请求域名
     */
    OriginDomain: string;
    /**
     * 是否需要跨域
     */
    CrossFlag: boolean;
    /**
     * 桶名
     */
    BucketName?: string;
    /**
     * 远程地址
     */
    RemotePath?: string;
}
/**
 * 批量操作结果
 */
export interface BatchResult {
    /**
     * 正在运行的任务数
     */
    Running: number;
    /**
     * 执行成功的任务数
     */
    Success: number;
    /**
     * 执行失败的任务数
     */
    Failed: number;
    /**
     * 总任务数
     */
    Total: number;
}
/**
 * RenewWorkflowDs返回参数结构体
 */
export interface RenewWorkflowDsResponse {
    /**
     * 工作流ID
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopTestRun请求参数结构体
 */
export interface StopTestRunRequest {
    /**
     * 任务实例Id
     */
    InstanceKey: string;
}
/**
 * DescribeRuleGroup返回参数结构体
 */
export interface DescribeRuleGroupResponse {
    /**
     * 数据质量规则组详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroup;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDataSources返回参数结构体
 */
export interface DeleteDataSourcesResponse {
    /**
     * 是否删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDataSources请求参数结构体
 */
export interface DeleteDataSourcesRequest {
    /**
     * id列表
     */
    Ids: Array<number | bigint>;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * SubmitSqlTask返回参数结构体
 */
export interface SubmitSqlTaskResponse {
    /**
     * 任务提交记录
     */
    Record?: AdhocRecord;
    /**
     * 子任务记录列表
     */
    Details?: Array<AdhocDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportOfflineTask请求参数结构体
 */
export interface ImportOfflineTaskRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务名称
     */
    TaskInfoList: Array<TaskBaseInfo>;
    /**
     * 重命名策略，0（跳过）、1（重命名）
     */
    TaskNameExistMode: number;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 任务文件夹id
     */
    TaskFolderId?: string;
}
/**
 * 操作列表
 */
export interface ListBatchJobPages {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 当前页码数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * job记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<BatchJobVO>;
    /**
     * 当前页条目数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 回溯ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestId?: string;
}
/**
 * RerunInstances请求参数结构体
 */
export interface RerunInstancesRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 实例嵌套集合
     */
    Instances: Array<InstanceInfo>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType: string;
}
/**
 * UpdateBatchTaskDatasource返回参数结构体
 */
export interface UpdateBatchTaskDatasourceResponse {
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskRunHistory返回参数结构体
 */
export interface DescribeTaskRunHistoryResponse {
    /**
     * 分页查询任务运行历史结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: InstanceOpsInfoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBatchOperateTask返回参数结构体
 */
export interface DescribeBatchOperateTaskResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeBatchOperateTaskPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 操作资源DTO
 */
export interface AsyncResourceVO {
    /**
     * 处理Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessId?: number;
    /**
     * 资源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 自定义信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: Array<ParamInfo>;
}
/**
 * CommitIntegrationTask请求参数结构体
 */
export interface CommitIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行
     */
    CommitType?: number;
    /**
     * 实时任务 201   离线任务 202  默认实时任务
     */
    TaskType?: number;
    /**
     * 额外参数
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 提交版本描述
     */
    VersionDesc?: string;
    /**
     * 提交版本号
     */
    InstanceVersion?: number;
    /**
     * 前端操作类型描述
     */
    EventDesc?: string;
}
/**
 * CommitIntegrationTask返回参数结构体
 */
export interface CommitIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateTaskDs返回参数结构体
 */
export interface UpdateTaskDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CompareDsTaskVersionInfo请求参数结构体
 */
export interface CompareDsTaskVersionInfoRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 版本
     */
    VersionList: Array<string>;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * 集成任务
 */
export interface IntegrationTaskInfo {
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 任务描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 同步类型1.解决方案(整库迁移),2.单表同步
     */
    SyncType?: number;
    /**
     * 201.实时,202.离线
     */
    TaskType?: number;
    /**
     * 任务所属工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务调度id(oceanus or us等作业id)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleTaskId?: string;
    /**
     * 任务组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskGroupId?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 创建人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin?: string;
    /**
     * 操作人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin?: string;
    /**
     * owner uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 应用id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 任务状态1.初始化,2.操作中,3.运行中,4.暂停,5.任务停止中,6.停止,7.执行失败,8.已删除,9.已锁定,10.配置过期,11.提交中,12.提交成功,13.提交失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nodes?: Array<IntegrationNodeInfo>;
    /**
     * 执行资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorId?: string;
    /**
     * 任务配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: Array<RecordField>;
    /**
     * 任务扩展配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 任务执行context信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecuteContext?: Array<RecordField>;
    /**
     * 节点映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mappings?: Array<IntegrationNodeMapping>;
    /**
     * 任务模式：1.画布模式，2.flink jar
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskMode?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Incharge?: string;
    /**
     * 离线新增参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineTaskAddEntity?: OfflineTaskAddParam;
    /**
     * group name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutorGroupName?: string;
    /**
     * url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InLongManagerUrl?: string;
    /**
     * stream id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InLongStreamId?: string;
    /**
     * version
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InLongManagerVersion?: string;
    /**
     * dataproxy url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataProxyUrl?: Array<string>;
    /**
     * 任务版本是否已提交运维
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * MYSQL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputDatasourceType?: string;
    /**
     * DLC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutputDatasourceType?: string;
    /**
     * 读取条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumRecordsIn?: number;
    /**
     * 写入条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumRecordsOut?: number;
    /**
     * 读取延迟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReaderDelay?: number;
    /**
     * 重启次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumRestarts?: number;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 任务更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 任务最后一次运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastRunTime?: string;
    /**
     * 任务停止时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopTime?: string;
    /**
     * 作业是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasVersion?: boolean;
    /**
     * 任务是否被锁定
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Locked?: boolean;
    /**
     * 任务锁定人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Locker?: string;
    /**
     * 耗费资源量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCu?: number;
    /**
     * 该任务关联的告警规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAlarmRegularList?: Array<string>;
    /**
     * 资源分层情况： 0：进行中,1：成功 ,2：失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SwitchResource?: number;
    /**
     * 读取阶段：0：全部全量,1：部分全量,2：全部增量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReadPhase?: number;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceVersion?: number;
    /**
     * 离线任务导入到编排空间的任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ArrangeSpaceTaskId?: string;
    /**
     * 离线任务状态区分1.未提交2.已提交3.已导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineTaskStatus?: number;
}
/**
 * DeleteResourceFiles请求参数结构体
 */
export interface DeleteResourceFilesRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 使用状态
     */
    UseStatus: boolean;
    /**
     * 资源id列表
     */
    ResourceIds?: Array<string>;
    /**
     * 资源路径列表
     */
    FilePaths?: Array<string>;
}
/**
 * SubmitTask返回参数结构体
 */
export interface SubmitTaskResponse {
    /**
     * 成功或者失败
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyFolder请求参数结构体
 */
export interface ModifyFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 文件夹Id
     */
    FolderId: string;
    /**
     * 父文件夹ID
     */
    ParentsFolderId?: string;
}
/**
 * ModifyApproveStatus返回参数结构体
 */
export interface ModifyApproveStatusResponse {
    /**
     * 修改审批单状态
     */
    Data?: Array<ApproveModify>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AlarmExtVO信息
 */
export interface AlarmExtVO {
    /**
     * 告警策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmId?: string;
    /**
     * 扩展字段key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropName?: string;
    /**
     * 扩展字段value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropValue?: string;
    /**
     * 告警创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
}
/**
 * CreateTaskAlarmRegular请求参数结构体
 */
export interface CreateTaskAlarmRegularRequest {
    /**
     * 告警配置信息
     */
    TaskAlarmInfo: TaskAlarmInfo;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * 【项目克隆】任务分页返回数据（新版）
 */
export interface ProjectCloneTaskInfoPageNew {
    /**
     * item 总数量
     */
    TotalItems?: number;
    /**
     * 总页数
     */
    TotalPages?: number;
    /**
     * 当前页码
     */
    CurrentPage?: number;
    /**
     * 每页大小
     */
    PageSize?: number;
    /**
     * 当前页实际 item 数量
     */
    CurrentPageItems?: number;
    /**
     * 任务列表信息-项目克隆
     */
    Items?: Array<ProjectCloneTaskInfo>;
}
/**
 * QueryWorkflowVersion返回参数结构体
 */
export interface QueryWorkflowVersionResponse {
    /**
     * 项目编号
     */
    ProjectId?: string;
    /**
     * 工作流编号
     */
    WorkflowId?: string;
    /**
     * 版本信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionInfos?: Array<WorkflowVersionInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 代码搜索信息
 */
export interface CodeSearchInfo {
    /**
     * 文件或任务ID
     */
    Id?: string;
    /**
     * 文件或任务名称
     */
    Name?: string;
    /**
     * 文件或任务类型
     */
    Type?: string;
    /**
     * 命中内容，包括行号和文本内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<CodeMatchInfo>;
    /**
     * 责任人名称
     */
    OwnerName?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 命中行数
     */
    MatchRows?: number;
    /**
     * 提交调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime?: string;
    /**
     * 展示类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisplayType?: string;
    /**
     * Cos路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPath?: string;
}
/**
 * DescribeWorkflowCanvasOperators返回参数结构体
 */
export interface DescribeWorkflowCanvasOperatorsResponse {
    /**
     * 操作人列表
     */
    Data?: Array<WorkflowCanvasOperatorsDs>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 依赖配置无循环递归属性
 */
export interface DependencyConfigDsDTONoRecurV3 {
    /**
     * ParentTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentTask?: TaskDsDTONoRecurV3;
    /**
     * SonTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonTask?: TaskDsDTONoRecurV3;
    /**
     * the dependency config
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainCyclicConfig?: string;
    /**
     * SubordinateCyclicConfig配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubordinateCyclicConfig?: string;
    /**
     * DependencyStrategy策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyStrategy?: DependencyStrategyDs;
    /**
     * 偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: string;
}
/**
 * BatchRunTasksDs请求参数结构体
 */
export interface BatchRunTasksDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskIds: Array<string>;
    /**
     * 是否补录中间实例
     */
    EnableMakeUp?: number;
}
/**
 * DescribeDependOpsTaskList请求参数结构体
 */
export interface DescribeDependOpsTaskListRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeInstanceLogs返回参数结构体
 */
export interface DescribeInstanceLogsResponse {
    /**
     * 返回日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<InstanceLog>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsLatestTaskVersionInfo返回参数结构体
 */
export interface DescribeDsLatestTaskVersionInfoResponse {
    /**
     * 任务版本详情信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskVersionDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaselineAllTaskDag请求参数结构体
 */
export interface DescribeBaselineAllTaskDagRequest {
    /**
     * 基线id
     */
    BaselineId: string;
    /**
     * 1
     */
    ProjectId: string;
    /**
     * 1
     */
    BaselineTaskId?: string;
}
/**
 * DescribeRuleExecDetail请求参数结构体
 */
export interface DescribeRuleExecDetailRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 规则执行id
     */
    RuleExecId?: number;
}
/**
 * ModifyAlarmRuleRequest
 */
export interface ModifyAlarmRuleRequest {
    /**
     * 告警id
     */
    AlarmId?: string;
    /**
     * 规则名字
     */
    RuleName?: string;
    /**
     * 监控类型,1.task、2.workflow、3.project、4.baseline（默认为1.任务）
     */
    MonitorType?: number;
    /**
     * 监控对象
     */
    MonitorObjectIds?: Array<string>;
    /**
     * 告警类型，1.失败告警、2.超时告警、3.成功告警、4.基线破线、5.基线预警、6.基线任务失败（默认1.失败告警）
     */
    AlarmTypes?: Array<string>;
    /**
     * 告警级别，1.普通、2.重要、3.紧急（默认1.普通）
     */
    AlarmLevel?: number;
    /**
     * 告警方式,1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群；告警方式code列表（默认1.邮件）
     */
    AlarmWays?: Array<string>;
    /**
     * 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员）
     */
    AlarmRecipientType?: number;
    /**
     * 告警接收人
     */
    AlarmRecipients?: Array<string>;
    /**
     * 告警接收人ID
     */
    AlarmRecipientIds?: Array<string>;
    /**
     * 扩展信息, 1.预计运行耗时（默认），2.预计完成时间，3.预计调度时间，4.周期内未完成；取值类型：1.指定指，2.历史均值（默认1.指定指）
     */
    ExtInfo?: string;
}
/**
 * ScriptUsedByOtherTaskDs返回参数结构体
 */
export interface ScriptUsedByOtherTaskDsResponse {
    /**
     * 引用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流列表信息-项目克隆使用
 */
export interface ProjectCloneWorkflowInfo {
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Folder: string;
    /**
     * 任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskNum: number;
    /**
     * 责任人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName: string;
    /**
     * 工作流最近一次提交时间（未提交则为 null）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestSubmitTime: string;
    /**
     * 工作流任务列表（当前未使用）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks: Array<ProjectCloneTaskInfo>;
}
/**
 * RegisterDsEventPublisher请求参数结构体
 */
export interface RegisterDsEventPublisherRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
    /**
     * 类型 REST_API、KAFKA
     */
    Type: string;
    /**
     * 配置信息
     */
    Properties: Array<ParamInfoDs>;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 描述信息
     */
    Description?: string;
}
/**
 * ModifyTaskScript返回参数结构体
 */
export interface ModifyTaskScriptResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: CommonContent;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实时任务同步速度 条/s
 */
export interface RecordsSpeed {
    /**
     * 节点类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType: string;
    /**
     * 节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName: string;
    /**
     * 速度值列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Values: Array<SpeedValue>;
}
/**
 * UploadFilesDs请求参数结构体
 */
export interface UploadFilesDsRequest {
    /**
     * 返回值
     */
    ProjectId: string;
    /**
     * 临时文件名列表，如果有重复会自动去重
     */
    FileNames: Array<string>;
    /**
     * 跨域访问域名，文件最终上传到共享存储，上传时可能会出现跨域问题，如果是跨域请求，请填写该值，请注意，该值只在公有云(即访问COS)生效
     */
    OriginDomain?: string;
}
/**
 * CreateResourceDirectory返回参数结构体
 */
export interface CreateResourceDirectoryResponse {
    /**
     * 资源路径创建结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 命名空间
 */
export interface Namespace {
    /**
     * 名称
     */
    Name: string;
    /**
     * 当前状态
     */
    Status: string;
    /**
     * 创建时间
     */
    CreatedAt: string;
}
/**
 * ImportWorkflowXml返回参数结构体
 */
export interface ImportWorkflowXmlResponse {
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务实例集合
 */
export interface CollectionTaskOpsDto {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总页面数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页面数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 每页数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<TaskOpsDto>;
}
/**
 * 文件夹属性
 */
export interface FolderOpsDto {
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 所属项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 父文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentsFolderId?: string;
    /**
     * 工作流总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 工作流列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Workflows?: Array<WorkflowCanvasOpsDto>;
    /**
     * 子文件夹总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalFolders?: number;
    /**
     * 子文件夹列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FoldersList?: string;
    /**
     * 搜索类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FindType?: string;
}
/**
 * 任务信息获取实例状态信息任务
 */
export interface ParamGetTestRunTaskInstancesStatusInfoTask {
    /**
     * 记录编号
     */
    RecordId: string;
    /**
     * 任务编号
     */
    TaskId?: string;
}
/**
 * DeleteCustomFunction请求参数结构体
 */
export interface DeleteCustomFunctionRequest {
    /**
     * 集群实例 ID
     */
    ClusterIdentifier?: string;
    /**
     * 函数 ID
     */
    FunctionId?: string;
    /**
     * 项目ID，必须填
     */
    ProjectId?: string;
    /**
     * 函数名称
     */
    FunctionName?: string;
    /**
     * 函数类型，HIVE，SPARK，DLC，CDW_POSTGRESQL
     */
    FunctionType?: string;
    /**
     * 数据库名
     */
    DatabaseName?: string;
    /**
     * 模式名
     */
    SchemaName?: string;
    /**
     * 函数命令格式
     */
    CommandFormat?: string;
}
/**
 * 任务分页数据查询
 */
export interface TaskInfoDataPage {
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 任务集合信息
     */
    Items: Array<TaskInfoData>;
    /**
     * 总页数1
     */
    TotalCount: number;
}
/**
 * DescribeAllTaskType请求参数结构体
 */
export interface DescribeAllTaskTypeRequest {
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * DescribeWorkflowCanvasOpLogs返回参数结构体
 */
export interface DescribeWorkflowCanvasOpLogsResponse {
    /**
     * 操作日志
     */
    Data?: WorkflowCanvasOpLogResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表血缘详细信息
 */
export interface TableLineageBaseInfo {
    /**
     * 元数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType: string;
    /**
     * 由中心节点到该节点的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrefixPath: string;
    /**
     * 空间id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 表id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 表血缘参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<LineageParamRecord>;
    /**
     * 父节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentSet?: string;
    /**
     * 子节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildSet?: string;
    /**
     * 额外参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtParams?: Array<RecordField>;
    /**
     * 血缘id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 元数据类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreTypeName?: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 表全称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualifiedName?: string;
    /**
     * 血缘下游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownStreamCount?: number;
    /**
     * 血缘上游节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpStreamCount?: number;
    /**
     * 血缘描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 血缘创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 血缘更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 修改血缘的任务id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
}
/**
 * 离线运维实例列表
 */
export interface InstanceList {
    /**
     * 耗费时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostTime?: string;
    /**
     * 数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 是否补录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DoFlag?: number;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastLog?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 开始启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 尝试运行次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
}
/**
 * TaskDsDTO分页(DsCollection)
 */
export interface TaskDsDTOPage {
    /**
     * 页号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 任务集合信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<TaskDsDTO>;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeDsEventPublisherList返回参数结构体
 */
export interface DescribeDsEventPublisherListResponse {
    /**
     * 事件发布者列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<EventPublisherDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 通用排序字段
 */
export interface OrderFieldOptional {
    /**
     * 排序字段名称
     */
    Name?: string;
    /**
     * 排序方向：ASC|DESC
     */
    Direction?: string;
}
/**
 * 文件夹分页信息
 */
export interface DescribeFolderWorkflowListData {
    /**
     * 工作流信息列表
     */
    Items: Array<Workflow>;
    /**
     * 总条数
     */
    TotalCount: number;
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
}
/**
 * RerunOpsMakePlanInstances请求参数结构体
 */
export interface RerunOpsMakePlanInstancesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 补录计划ID
     */
    PlanId: string;
    /**
     * 补录实例ID集合，为空则重跑整个补录计划失败实例。实例ID格式为"${TASK_ID}_${INSTANCE_DATA_TIME}"，即“任务ID_任务实例数据时间”。
     */
    InstanceIdList?: Array<string>;
}
/**
 * 通用过滤器
 */
export interface FilterOptional {
    /**
     * 过滤字段名称
     */
    Name?: string;
    /**
     * 过滤值列表
     */
    Values?: Array<string>;
}
/**
 * 任务实例状态统计
 */
export interface TaskInstanceCountDto {
    /**
     * 成功的实例数
     */
    Success: number;
    /**
     * 执行中实例数
     */
    Running: number;
    /**
     * 等待中的实例数
     */
    Waiting: number;
    /**
     * 等待上游实例数
     */
    Depend: number;
    /**
     * 失败实例数
     */
    Failed: number;
    /**
     * 永久终止实例数
     */
    Stopped: number;
}
/**
 * BaselineTaskInfo
 */
export interface BaselineTaskInfo {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 任务调度周期
     */
    TaskCycle?: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 工作流id
     */
    WorkflowId?: string;
    /**
     * 任务责任人名称
     */
    TaskInChargeName?: string;
    /**
     * 任务责任人id
     */
    TaskInChargeUin?: string;
}
/**
 * 任务告警信息
 */
export interface TaskAlarmInfo {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 规则名称
     */
    RegularName: string;
    /**
     * 规则状态(0表示关闭，1表示打开)
     */
    RegularStatus: number;
    /**
     * 告警级别(0表示普通，1表示重要，2表示紧急)
     */
    AlarmLevel: number;
    /**
     * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
     */
    AlarmWay: string;
    /**
     * 任务类型(201表示实时，202表示离线)
     */
    TaskType: number;
    /**
     * 主键ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 规则ID
     */
    RegularId?: string;
    /**
     * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
  ，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数
     */
    AlarmIndicator?: number;
    /**
     * 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: number;
    /**
     * 预计的超时时间(分钟级别)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedTime?: number;
    /**
     * 告警接收人ID，多个用逗号隔开
     */
    AlarmRecipientId?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 告警接收人昵称，多个用逗号隔开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientName?: string;
    /**
     * 告警指标描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicatorDesc?: string;
    /**
     * 实时任务告警需要的参数，1是大于2是小于
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: number;
    /**
     * 节点id，多个逗号分隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId?: string;
    /**
     * 节点名称，多个逗号分隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName?: string;
    /**
     * 指标列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmIndicatorInfos?: Array<AlarmIndicatorInfo>;
    /**
     * 告警接收人类型，0指定人员；1任务责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientType?: number;
    /**
     * 企业微信群Hook地址，多个hook地址使用,隔开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeComHook?: string;
    /**
     * 最近操作时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最近操作人Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin?: string;
    /**
     * 关联任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCount?: number;
    /**
     * 监控对象类型,1:所有任务,2:指定任务,3:指定责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType?: number;
    /**
     * 监控对象列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorObjectIds?: Array<string>;
    /**
     * 最近一次告警的实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestAlarmInstanceId?: string;
    /**
     * 最近一次告警时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestAlarmTime?: string;
    /**
     * 告警规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 飞书群Hook地址，多个hook地址使用,隔开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LarkWebHooks?: string;
}
/**
 * DescribeClusterNamespaceList请求参数结构体
 */
export interface DescribeClusterNamespaceListRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
}
/**
 * DescribeChildrenPathTrees请求参数结构体
 */
export interface DescribeChildrenPathTreesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 目录路径
     */
    LocalPath: string;
    /**
     * true
     */
    IncludeFile: string;
    /**
     * 2
     */
    QueryDepth: number;
}
/**
 * CandidateDsDTo
 */
export interface CandidateDsDTo {
    /**
     * 取值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 取值描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueDesc?: string;
}
/**
 * DagInstances返回参数结构体
 */
export interface DagInstancesResponse {
    /**
     * 结果
     */
    Data?: CollectionInstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllUsedVersionSon返回参数结构体
 */
export interface DescribeAllUsedVersionSonResponse {
    /**
     * 结果
     */
    Data?: CollectionTaskOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplateHistory请求参数结构体
 */
export interface DescribeTemplateHistoryRequest {
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * FreezeTasksByWorkflowIds请求参数结构体
 */
export interface FreezeTasksByWorkflowIdsRequest {
    /**
     * 工作流id列表
     */
    WorkflowIds: Array<string>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeCodeSearchInfoV2返回参数结构体
 */
export interface DescribeCodeSearchInfoV2Response {
    /**
     * 代码搜索响应结果
     */
    Data?: CodeSearchResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsMakePlanInstances请求参数结构体
 */
export interface DescribeOpsMakePlanInstancesRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 补录计划ID
     */
    PlanId: string;
    /**
     * 补录任务ID
     */
    TaskId: string;
    /**
     * 分页页码，默认值1
     */
    PageNumber?: number;
    /**
     * 分页大小，默认值10
     */
    PageSize?: number;
}
/**
 * DescribeRuleExecExportResult请求参数结构体
 */
export interface DescribeRuleExecExportResultRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 规则执行id
     */
    RuleExecId?: number;
}
/**
 * DescribeRuleExecResultsByPage请求参数结构体
 */
export interface DescribeRuleExecResultsByPageRequest {
    /**
     * 执行规则组ID
     */
    RuleGroupExecId?: number;
    /**
     * page number
     */
    PageNumber?: number;
    /**
     * page size
     */
    PageSize?: number;
}
/**
 * LockIntegrationTask返回参数结构体
 */
export interface LockIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWorkflowNew请求参数结构体
 */
export interface DeleteWorkflowNewRequest {
    /**
     * 工作流id
     */
    WorkFlowId: string;
    /**
     * true : 删除后下游任务可正常运行
  false：删除后下游任务不可运行
     */
    DeleteMode: boolean;
    /**
     * true：通知下游任务责任人
  false:  不通知下游任务责任人
     */
    EnableNotify: boolean;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * DescribeEvent请求参数结构体
 */
export interface DescribeEventRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    EventName: string;
}
/**
 * DescribeTaskInstances请求参数结构体
 */
export interface DescribeTaskInstancesRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 页号，默认为1
     */
    PageNumber?: number;
    /**
     * 页大小，默认为10，最大不超过200
     */
    PageSize?: number;
    /**
     * 工作流id列表
     */
    WorkflowIdList?: Array<string>;
    /**
     * 工作流名称列表，支持模糊搜索
     */
    WorkflowNameList?: Array<string>;
    /**
     * 起始数据时间，格式yyyy-MM-dd HH:mm:ss
     */
    DateFrom?: string;
    /**
     * 结束数据时间，格式yyyy-MM-dd HH:mm:ss
     */
    DateTo?: string;
    /**
     * 任务id列表
     */
    TaskIdList?: Array<string>;
    /**
     * 任务名称列表，支持模糊搜索
     */
    TaskNameList?: Array<string>;
    /**
     * 责任人名称列表
     */
    InChargeList?: Array<string>;
    /**
     * 任务类型码列表，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
     */
    TaskTypeIdList?: Array<number | bigint>;
    /**
     * 实例状态列表，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
     */
    StateList?: Array<string>;
    /**
     * 周期类型列表，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
     */
    TaskCycleUnitList?: Array<string>;
    /**
     * 实例类型，0补录实例，1周期实例，2非周期实例
     */
    InstanceType?: number;
    /**
     * 排序字段信息列表，ScheduleDateTime / CostTime / StartTime / EndTime
     */
    OrderFields?: Array<OrderField>;
}
/**
 * RegisterDsEventPublisher返回参数结构体
 */
export interface RegisterDsEventPublisherResponse {
    /**
     * 事件发布者信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventPublisherDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsTaskVersionList请求参数结构体
 */
export interface DescribeDsTaskVersionListRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * 任务实例信息
 */
export interface TaskInstanceInfo {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent: string;
    /**
     * 实例状态，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State: number;
    /**
     * 任务类型id，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId: number;
    /**
     * 任务类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeDesc: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 调度计划展示描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 调度周期类型，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType: string;
    /**
     * 实例开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 实例结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 实例类型，0补录实例，1周期实例，2非周期实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: number;
    /**
     * 最大重试次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit: number;
    /**
     * 当前重试次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tries: number;
    /**
     * 计划调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDateTime: string;
    /**
     * 运行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostTime: string;
}
/**
 * 事件导出结果
 */
export interface ExportFile {
    /**
     * cos文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPath?: string;
    /**
     * 桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucketName?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 前端下载token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
    /**
     * secretId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * secretKey
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKey?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: number;
}
/**
 * DescribeLock请求参数结构体
 */
export interface DescribeLockRequest {
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
}
/**
 * DescribeDsEventListenerList返回参数结构体
 */
export interface DescribeDsEventListenerListResponse {
    /**
     * 事件监听者列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<EventListenerDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWorkflowById请求参数结构体
 */
export interface DeleteWorkflowByIdRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 删除后下游任务的处理方式，true:下游任务均正常运行 false:下游任务均运行失败
     */
    DeleteMode?: boolean;
    /**
     * 删除任务后是否通知下游任务责任人, true:通知 false:不通知
     */
    EnableNotify?: boolean;
}
/**
 * DescribeTableLineage请求参数结构体
 */
export interface DescribeTableLineageRequest {
    /**
     * 查询方向，INPUT,OUTPUT,BOTH枚举值
     */
    Direction: string;
    /**
     * 表信息
     */
    Data: TableLineageInfo;
    /**
     * 单次查询入度,默认 1
     */
    InputDepth?: number;
    /**
     * 单次查询出度,默认 1
     */
    OutputDepth?: number;
    /**
     * 额外参数（传递调用方信息）
     */
    ExtParams?: Array<LineageParamRecord>;
    /**
     * 是否过滤临时表,默认true
     */
    IgnoreTemp?: boolean;
    /**
     * 是否递归查询二级节点数目，默认为true
     */
    RecursiveSecond?: boolean;
}
/**
 * 血缘列描述
 */
export interface SimpleColumnInfo {
    /**
     * 列ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
    /**
     * 限定名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualifiedName: string;
    /**
     * 列名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName: string;
    /**
     * 列中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnNameCn: string;
    /**
     * 列类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnType: string;
    /**
     * 列描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 前缀路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrefixPath: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: string;
    /**
     * 下游数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownStreamCount: number;
    /**
     * 上游数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpStreamCount: number;
    /**
     * 关系参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelationParams: string;
    /**
     * 参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params: string;
    /**
     * 任务集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks: Array<string>;
}
/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
    /**
     * 返回任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: CommonId;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CommitRuleGroupExecResult请求参数结构体
 */
export interface CommitRuleGroupExecResultRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 规则组执行ID
     */
    RuleGroupExecId: number;
    /**
     * 规则组执行状态
     */
    RuleGroupState: string;
    /**
     * 规则执行结果集合
     */
    RuleExecResults: Array<RunnerRuleExecResult>;
}
/**
 * DescribeDependencyTasksForProjectClone返回参数结构体
 */
export interface DescribeDependencyTasksForProjectCloneResponse {
    /**
     * 项目克隆-依赖工作流信息列表
     */
    Data?: Array<DependencyTaskDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckTaskNameExistDs返回参数结构体
 */
export interface CheckTaskNameExistDsResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CheckTaskNameExistResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventIsAlarmTypes返回参数结构体
 */
export interface DescribeEventIsAlarmTypesResponse {
    /**
     * 是否告警.取值范围
  
  - yes : 表示告警
  
  - no : 表示不告警
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStatisticInstanceStatusTrendOps请求参数结构体
 */
export interface DescribeStatisticInstanceStatusTrendOpsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务类型Id
     */
    TaskTypeId?: string;
    /**
     * 时间类型
     */
    TimeType?: string;
    /**
     * 任务类型名称
     */
    TypeName?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 资源组ID
     */
    ExecutionGroupId?: string;
    /**
     * 资源组名称
     */
    ExecutionGroupName?: string;
    /**
     * 1
     */
    InCharge?: string;
    /**
     * 1
     */
    TaskType?: number;
    /**
     * 1
     */
    StateList?: Array<number | bigint>;
    /**
     * D代表天，H代表小时
     */
    AggregationUnit?: string;
    /**
     * 1
     */
    AverageWindowSize?: number;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
}
/**
 * 查询框架
 */
export interface SearchConditionInstance {
    /**
     * 执行空间 "DRY_RUN"
     */
    ExecutionSpace: number;
    /**
     * 产品名称，可选
     */
    ProductName?: number;
    /**
     * 资源组
     */
    ResourceGroup?: number;
}
/**
 * 代码搜索结果分页信息
 */
export interface CodeSearchInfoPage {
    /**
     * 分页数据
     */
    Rows: Array<CodeSearchInfo>;
    /**
     * 总个数
     */
    TotalCount: number;
}
/**
 * DescribeRulesByPage返回参数结构体
 */
export interface DescribeRulesByPageResponse {
    /**
     * 规则质量列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RulePage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 采集器状态统计
 */
export interface CvmAgentStatus {
    /**
     * agent状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 对应状态的agent总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
}
/**
 * DescribeIntegrationStatisticsAgentStatus返回参数结构体
 */
export interface DescribeIntegrationStatisticsAgentStatusResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusData: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CommitRuleGroupTask请求参数结构体
 */
export interface CommitRuleGroupTaskRequest {
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 触发类型 1.手动触发 2.调度事中触发 3.周期调度触发
     */
    TriggerType?: number;
    /**
     * 规则配置列表
     */
    ExecRuleConfig?: Array<RuleConfig>;
    /**
     * 执行配置
     */
    ExecConfig?: RuleExecConfig;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎
     */
    EngineType?: string;
}
/**
 * CheckIntegrationNodeNameExists请求参数结构体
 */
export interface CheckIntegrationNodeNameExistsRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 节点名称
     */
    Name: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 节点ID
     */
    Id?: number;
}
/**
 * 开发空间-上传脚本请求
 */
export interface ScriptRequestInfo {
    /**
     * 脚本路径
  项目区1470575647377821696项目，f1目录下：
  /datastudio/project/1470575647377821696/f1/sql1234.sql
  个人区：
  /datastudio/personal/sqlTTT.sql
     */
    FilePath?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 脚本版本
     */
    Version?: string;
    /**
     * 操作类型
     */
    Operation?: string;
    /**
     * 额外信息
     */
    ExtraInfo?: string;
    /**
     * 桶名称
     */
    BucketName?: string;
    /**
     * 所属地区
     */
    Region?: string;
    /**
     * 文件扩展类型
     */
    FileExtensionType?: string;
}
/**
 * CommitWorkflow返回参数结构体
 */
export interface CommitWorkflowResponse {
    /**
     * 项目编号
     */
    ProjectId?: string;
    /**
     * 工作流编号
     */
    WorkflowId?: string;
    /**
     * 版本序号
     */
    VersionNum?: string;
    /**
     * 版本编号
     */
    VersionId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAdvanceRunParams请求参数结构体
 */
export interface GetAdvanceRunParamsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 远程路径
     */
    RemotePath?: string;
    /**
     * 高级运行参数
     */
    AdvanceRunParam?: string;
    /**
     * 原始未过滤的高级运行参数
     */
    OriginalParams?: Array<string>;
}
/**
 * DescribeDataTypes请求参数结构体
 */
export interface DescribeDataTypesRequest {
    /**
     * 数据源类型，MYSQL|HIVE|KAFKA|POSTGRE|CDW|ORACLE|SQLSERVER|FTP|HDFS|ICEBERG|HBASE|TDSQL|TDSQLC|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DORIS|CKAFKA|MONGODB|FTP_FILE|HDFS_FILE|DTS_KAFKA|REST_API|FILE|TIDB|SYBASE|TCHOUSE_X 等
     */
    DatasourceType: string;
    /**
     * 项目ID。
     */
    ProjectId: string;
}
/**
 * RegisterDsEventListener请求参数结构体
 */
export interface RegisterDsEventListenerRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
    /**
     * REST_API、KAFKA
     */
    Type: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 属性信息
     */
    Properties?: Array<ParamInfoDs>;
    /**
     * 事件所属项目id
     */
    EventProjectId?: string;
}
/**
 * DescribeToken返回参数结构体
 */
export interface DescribeTokenResponse {
    /**
     * 长连接临时token
     */
    Token?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskFolder请求参数结构体
 */
export interface ModifyTaskFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 工作量ID
     */
    WorkflowId: string;
    /**
     * 任务文件夹ID
     */
    TaskFolderId: string;
    /**
     * 父文件夹ID
     */
    ParentFolderId?: string;
}
/**
 * DescribeEventIsAlarmTypes请求参数结构体
 */
export declare type DescribeEventIsAlarmTypesRequest = null;
/**
 * GetRunSonListDs请求参数结构体
 */
export interface GetRunSonListDsRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
}
/**
 * DescribeProdWorkflowCanvasInfoDs返回参数结构体
 */
export interface DescribeProdWorkflowCanvasInfoDsResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 维度评分信息
 */
export interface DimensionScoreInfo {
    /**
     * 维度名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight: number;
    /**
     * 设置人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId: number;
    /**
     * 设置人名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * 更新时间 时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: number;
    /**
     * 参与评估表数量
     */
    JoinTableNumber: number;
    /**
     * 评分
     */
    Score: number;
}
/**
 * DescribeIntegrationStatisticsTaskStatusTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
    /**
     * 资源组id
     */
    ExecutorGroupId?: string;
}
/**
 * DescribeTaskInParamDs返回参数结构体
 */
export interface DescribeTaskInParamDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterTaskInDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskLinks返回参数结构体
 */
export interface ModifyTaskLinksResponse {
    /**
     * 成功或者失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FindFuzzyTasksDs请求参数结构体
 */
export interface FindFuzzyTasksDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 页数
     */
    PageNum: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 查询key
     */
    QueryKey?: string;
}
/**
 * DescribeWorkflowOpsCanvasInfo请求参数结构体
 */
export interface DescribeWorkflowOpsCanvasInfoRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeResourceManagePathTrees返回参数结构体
 */
export interface DescribeResourceManagePathTreesResponse {
    /**
     * 响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ResourcePathTree>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFunctionTypes请求参数结构体
 */
export declare type DescribeFunctionTypesRequest = null;
/**
 * 维度统计业务视图
 */
export interface DimensionCount {
    /**
     * 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    DimType?: number;
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
    /**
     * 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityDim?: number;
}
/**
 * 导出请求相关信息
 */
export interface ExportRequestInfo {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 需要导出的文件列表
     */
    FileList: Array<string>;
    /**
     * cos桶名
     */
    BucketName: string;
    /**
     * cos地域
     */
    Region: string;
}
/**
 * 工作流调度详情
 */
export interface WorkflowSchedulerOpsDto {
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 延迟时间, unit=minute
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 启动时间,unit=minute
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 任务自依赖类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 指定运行时间, 指定时间：如周一：1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 调度周期类型，时间单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 调度周期，间隔步长 unit=minute
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 调度cron表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 任务实例初始化策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流自依赖
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 调度计划释义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 工作流首次提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime?: string;
    /**
     * 工作流最近提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestSubmitTime?: string;
}
/**
 * DownloadNewSqlResult返回参数结构体
 */
export interface DownloadNewSqlResultResponse {
    /**
     * 下载结果对应的cos path
     */
    CosPath: string;
    /**
     * 下载结果对应的bucketName
     */
    CosBucketName: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FreezeTasksByMultiWorkflow返回参数结构体
 */
export interface FreezeTasksByMultiWorkflowResponse {
    /**
     * 操作结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 监听事件
 */
export interface EventListenerNewDTO {
    /**
     * 事件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 项目展示名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectDisplayName?: string;
    /**
     * 事件周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventSubType?: string;
    /**
     * 事件项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 扩展名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropertiesList?: Array<ParamInfoDs>;
    /**
     * 事件广播类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventBroadcastType?: string;
}
/**
 * SaveCustomFunction返回参数结构体
 */
export interface SaveCustomFunctionResponse {
    /**
     * 函数唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionId?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务信息无循环递归属性
 */
export interface TaskDsDTONoRecurV3 {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeDsVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtDsVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmDsVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<string>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 去向数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 去向数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * 输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamInList?: Array<ParameterTaskInDsDto>;
    /**
     * 输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOutList?: Array<ParameterTaskOutDsDto>;
}
/**
 * 任务信息无循环递归属性
 */
export interface TaskDsDTONoRecurV2 {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeDsVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: number;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtDsVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmDsVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<string>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 去向数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 去向数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * 输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamInList?: Array<ParameterTaskInDsDto>;
    /**
     * 输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOutList?: Array<ParameterTaskOutDsDto>;
}
/**
 * ModifyDimensionWeight请求参数结构体
 */
export interface ModifyDimensionWeightRequest {
    /**
     * 权重信息列表
     */
    WeightInfoList: Array<WeightInfo>;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 是否重刷历史数据
     */
    Refresh: boolean;
}
/**
 * 简单Task信息
 */
export interface SimpleTaskInfo {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务名
     */
    TaskName: string;
}
/**
 * DescribeSchedulerTaskCntByStatus请求参数结构体
 */
export interface DescribeSchedulerTaskCntByStatusRequest {
    /**
     * 1
     */
    TaskType?: number;
    /**
     * Y
     */
    TypeName?: string;
    /**
     * 111
     */
    ProjectId?: string;
    /**
     * 1
     */
    InCharge?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
}
/**
 * 规则执行日志
 */
export interface RuleExecLog {
    /**
     * 是否完成
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Finished?: boolean;
    /**
     * 内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Log: string;
}
/**
 * 事件实例分页查询结果
 */
export interface EventCaseAuditLogVOCollection {
    /**
     * 结果总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 分页数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<EventCaseAuditLogOptDto>;
}
/**
 * CreateHiveTable返回参数结构体
 */
export interface CreateHiveTableResponse {
    /**
     * 建表是否成功
     */
    IsSuccess?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIntegrationNode请求参数结构体
 */
export interface CreateIntegrationNodeRequest {
    /**
     * 集成节点信息
     */
    NodeInfo: IntegrationNodeInfo;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型，201为实时任务，202为离线任务
     */
    TaskType?: number;
}
/**
 * ModifyDataSource返回参数结构体
 */
export interface ModifyDataSourceResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeMonitorsByPage请求参数结构体
 */
export interface DescribeMonitorsByPageRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 排序条件
     */
    OrderFields?: Array<OrderField>;
    /**
     * 分页序号
     */
    PageNumber?: number;
}
/**
 * RerunInstances返回参数结构体
 */
export interface RerunInstancesResponse {
    /**
     * 返回实例批量终止结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskOutputRegistries返回参数结构体
 */
export interface DescribeTaskOutputRegistriesResponse {
    /**
     * 登记列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDataRegistryDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjectParamVersionInfoDs请求参数结构体
 */
export interface DescribeProjectParamVersionInfoDsRequest {
    /**
     * 版本号
     */
    MyVersion?: number;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * DeleteTaskDs请求参数结构体
 */
export interface DeleteTaskDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 是否删除脚本
  true：删除
  false：不删除
  不传默认false
     */
    DeleteScript?: boolean;
    /**
     * 任务操作是否消息通知下游任务责任人true：通知
  false：不通知
  不传默认false
     */
    OperateInform?: boolean;
    /**
     * 任务ID
  和VirtualTaskId选填一个
     */
    TaskId?: string;
    /**
     * 虚拟任务id
  和TaskId选填一个
  
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  true：是虚拟任务
  false：不是虚拟任务
  不传默认false
     */
    VirtualFlag?: boolean;
    /**
     * 任务删除方式
  true：不针对下游任务实例进行强制失败
  false：针对下游任务实例进行强制失败
  不传默认false
  
     */
    DeleteMode?: boolean;
}
/**
 * FindDependTaskListsDs返回参数结构体
 */
export interface FindDependTaskListsDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 依赖配置
 */
export interface DependencyConfig {
    /**
     * 仅五种周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE
     */
    DependConfType: string;
    /**
     * 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH
       * PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE
     */
    SubordinateCyclicType: string;
    /**
     * WAITING，等待（默认策略）EXECUTING:执行
     */
    DependencyStrategy: string;
    /**
     * 父任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentTask?: TaskInnerInfo;
    /**
     * 子任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonTask?: TaskInnerInfo;
}
/**
 * RobAndLockIntegrationTask请求参数结构体
 */
export interface RobAndLockIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型：201. stream,   202. offline
     */
    TaskType: number;
}
/**
 * CommitExportTask返回参数结构体
 */
export interface CommitExportTaskResponse {
    /**
     * 提交结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据监测情况结果
 */
export interface DataCheckStat {
    /**
     * 表总数
     */
    TableTotal: number;
    /**
     * 字段总数
     */
    ColumnTotal: number;
    /**
     * 表配置检测数
     */
    TableConfig: number;
    /**
     * 字段配置检测数
     */
    ColumnConfig: number;
    /**
     * 表实际检测数
     */
    TableExec: number;
    /**
     * 字段实际检测数
     */
    ColumnExec: number;
}
/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 规则组Id
     */
    RuleGroupId?: number;
    /**
     * 规则名称
     */
    Name?: string;
    /**
     * 数据表ID
     */
    TableId?: string;
    /**
     * 规则模板列表
     */
    RuleTemplateId?: number;
    /**
     * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
     */
    Type?: number;
    /**
     * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
     */
    QualityDim?: number;
    /**
     * 源字段详细类型，int、string
     */
    SourceObjectDataTypeName?: string;
    /**
     * 源字段名称
     */
    SourceObjectValue?: string;
    /**
     * 检测范围 1.全表   2.条件扫描
     */
    ConditionType?: number;
    /**
     * 条件扫描WHERE条件表达式
     */
    ConditionExpression?: string;
    /**
     * 自定义SQL
     */
    CustomSql?: string;
    /**
     * 报警触发条件
     */
    CompareRule?: CompareRule;
    /**
     * 报警触发级别 1.低, 2.中, 3.高
     */
    AlarmLevel?: number;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 数据源Id
     */
    DatasourceId?: string;
    /**
     * 数据库Id
     */
    DatabaseId?: string;
    /**
     * 目标库Id
     */
    TargetDatabaseId?: string;
    /**
     * 目标表Id
     */
    TargetTableId?: string;
    /**
     * 目标过滤条件表达式
     */
    TargetConditionExpr?: string;
    /**
     * 源字段与目标字段关联条件on表达式
     */
    RelConditionExpr?: string;
    /**
     * 自定义模版sql表达式字段替换参数
     */
    FieldConfig?: RuleFieldConfig;
    /**
     * 目标字段名称  CITY
     */
    TargetObjectValue?: string;
    /**
     * 该规则支持的执行引擎列表
     */
    SourceEngineTypes?: Array<number | bigint>;
}
/**
 * DescribeChildrenPathTrees返回参数结构体
 */
export interface DescribeChildrenPathTreesResponse {
    /**
     * 指定路径的目录树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: PathTreeNode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplateHistory返回参数结构体
 */
export interface DescribeTemplateHistoryResponse {
    /**
     * 分页记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: RuleTemplateHistoryPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleExecResults返回参数结构体
 */
export interface DescribeRuleExecResultsResponse {
    /**
     * 规则执行结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleExecResultPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 质量评分趋势
 */
export interface QualityScoreTrend {
    /**
     * 周期平均分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AverageScore: number;
    /**
     * 日评分列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DailyScoreList: Array<DailyScoreInfo>;
}
/**
 * DescribeDrInstanceScriptContent返回参数结构体
 */
export interface DescribeDrInstanceScriptContentResponse {
    /**
     * 结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DrInstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TriggerEvent返回参数结构体
 */
export interface TriggerEventResponse {
    /**
     * 成功或者失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: BatchReturn;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleDataSources请求参数结构体
 */
export interface DescribeRuleDataSourcesRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 数据来源Id
     */
    DatasourceId?: string;
    /**
     * 数据源类型
     */
    DsTypes?: Array<number | bigint>;
}
/**
 * DescribeTableQualityDetails返回参数结构体
 */
export interface DescribeTableQualityDetailsResponse {
    /**
     * 表质量分详情结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TableQualityDetailPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 返回命令id
 */
export interface CommonIdOpsDto {
    /**
     * 返回命令id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
}
/**
 * BatchUpdateTasksDs返回参数结构体
 */
export interface BatchUpdateTasksDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadNewSqlResult请求参数结构体
 */
export interface DownloadNewSqlResultRequest {
    /**
     * SQL任务Id
     */
    DetailId: number;
    /**
     * 下载文件名
     */
    FileName: string;
    /**
     * 字段分隔符
     */
    SeparatorChar?: string;
    /**
     * 必填，否则报错，项目ID
     */
    ProjectId?: string;
}
/**
 * RenewWorkflowFolderDs请求参数结构体
 */
export interface RenewWorkflowFolderDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
}
/**
 * 订阅接收人
 */
export interface SubscribeReceiver {
    /**
     * 接收人Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReceiverUserId?: number;
    /**
     * 接收人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReceiverName?: string;
}
/**
 * 质量检查对比结果
 */
export interface CompareResult {
    /**
     * 对比结果项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<CompareResultItem>;
    /**
     * 检测总行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalRows: number;
    /**
     * 检测通过行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PassRows: number;
    /**
     * 检测不通过行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerRows: number;
}
/**
 * BatchRunOpsTask返回参数结构体
 */
export interface BatchRunOpsTaskResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资管管理-上传资源请求
 */
export interface UploadResourceRequestInfo {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源路径
     */
    FilePath: string;
    /**
     * 桶名称
     */
    BucketName: string;
    /**
     * 所属地区
     */
    Region: string;
    /**
     * 是否为新资源
     */
    NewFile: boolean;
    /**
     * 资源列表
     */
    FileList?: Array<string>;
    /**
     * 资源大小列表
     */
    FileSizeList?: Array<string>;
    /**
     * File Md5（适配私有化，公有云可以不传）
     */
    FileMd5?: string;
}
/**
 * SubmitCustomFunction返回参数结构体
 */
export interface SubmitCustomFunctionResponse {
    /**
     * 函数唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionId?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleTablesByPage返回参数结构体
 */
export interface DescribeRuleTablesByPageResponse {
    /**
     * 表列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTasksForProjectClone请求参数结构体
 */
export interface DescribeTasksForProjectCloneRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 页号
     */
    Page?: number;
    /**
     * 分页大小
     */
    Size?: number;
    /**
     * 排序类型。两种取值 DESC、ASC，当前仅支持按提交时间排序
     */
    Order?: string;
    /**
     * 任务名称（筛选用）
     */
    FilterTaskName?: string;
    /**
     * 任务责任人名称
     */
    OwnerName?: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 任务状态
     */
    TaskStatus?: string;
    /**
     * 提交开始时间（筛选用）
     */
    StartTime?: string;
    /**
     * 提交结束时间（筛选用）
     */
    EndTime?: string;
}
/**
 * 下载日志详情
 */
export interface InstanceDownloadLogInfo {
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileUrl?: string;
}
/**
 * FreezeTasks返回参数结构体
 */
export interface FreezeTasksResponse {
    /**
     * 操作结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskOutParamDs请求参数结构体
 */
export interface DescribeTaskOutParamDsRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 是否上游
     */
    Upstream?: boolean;
}
/**
 * DescribeOperateOpsTasks请求参数结构体
 */
export interface DescribeOperateOpsTasksRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 文件夹id，多个文件夹以逗号分隔
     */
    FolderIdList?: string;
    /**
     * 工作流id，多个工作流id之间以英文字符逗号分隔
     */
    WorkFlowIdList?: string;
    /**
     * 工作流名称，多个工作流名称之间以英文字符逗号分隔
     */
    WorkFlowNameList?: string;
    /**
     * 任务名称，多个任务名称之间以英文字符逗号分隔
     */
    TaskNameList?: string;
    /**
     * 任务id，多个任务id之间以英文字符逗号分隔
     */
    TaskIdList?: string;
    /**
     * 页号
     */
    PageNumber?: string;
    /**
     * 分页大小
     */
    PageSize?: string;
    /**
     * 排序字段，支持字段为FirstSubmitTime和FirstRunTime，标识最近提交和首次执行事件
     */
    SortItem?: string;
    /**
     * 排序类型。两种取值 DESC、ASC
     */
    SortType?: string;
    /**
     * 责任人，多个责任人之间以英文字符逗号分隔
     */
    InChargeList?: string;
    /**
     * 任务类型Id字符串，多个任务类型id之间以英文字符逗号分隔
     */
    TaskTypeIdList?: string;
    /**
     * 任务状态字符串，多个任务状态之间以英文字符逗号分隔
     */
    StatusList?: string;
    /**
     * 任务周期类型字符串，多个任务周期之间以英文字符逗号分隔
     */
    TaskCycleUnitList?: string;
    /**
     * 任务所属产品类型
     */
    ProductNameList?: string;
    /**
     * 数据源id或（仅针对离线同步任务）来源数据源id
     */
    SourceServiceId?: string;
    /**
     * 数据源类型或（仅针对离线同步任务）来源数据源类型
     */
    SourceServiceType?: string;
    /**
     * （仅针对离线同步任务）目标数据源id
     */
    TargetServiceId?: string;
    /**
     * （仅针对离线同步任务）目标数据源类型
     */
    TargetServiceType?: string;
    /**
     * 告警类型，多个类型以逗号分隔
     */
    AlarmType?: string;
    /**
     * 资源组id,多个资源组id之间以英文字符逗号分隔
     */
    ExecutorGroupIdList?: string;
    /**
     * 任务标签
     */
    TaskTags?: Array<TaskTag>;
}
/**
 * DescribeOfflineTaskToken请求参数结构体
 */
export declare type DescribeOfflineTaskTokenRequest = null;
/**
 * CreateWorkflow返回参数结构体
 */
export interface CreateWorkflowResponse {
    /**
     * 返回工作流Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: CommonId;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteResource请求参数结构体
 */
export interface DeleteResourceRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 资源ID
     */
    ResourceId: string;
}
/**
 * 基线实例
 */
export interface BaselineTaskInstanceDto {
    /**
     * 任务实例变更记录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 基线实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineInstanceId?: number;
    /**
     * 基线周期, D: 天 / H: 小时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineType?: string;
    /**
     * 数据时间/基线实例应该应该生成的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineDataTime?: string;
    /**
     * 上游实例id,多个实例用,分开.格式为taskId_curRunDate
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamInstanceIds?: string;
    /**
     * 下游实例id,多个实例用,分开.格式为taskId_curRunDate
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownstreamInstanceIds?: string;
    /**
     * 是否是保障任务的实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPromiseTask?: boolean;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务实例的数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 是否在关键路径上，1表示在，0表示不在
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCriticalPath?: number;
    /**
     * 是否在DAG首层
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InFirstLevel?: boolean;
    /**
     * 实例预计耗时/单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedCostTime?: number;
    /**
     * 实例实际耗时/单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActualCostTime?: number;
    /**
     * 预计最晚开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestStartTime?: string;
    /**
     * 实际开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActualStartTime?: string;
    /**
     * 预计完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EstimatedEndTime?: string;
    /**
     * 最晚完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestEndTime?: string;
    /**
     * 实际完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActualEndTime?: string;
    /**
     * 实例运行状态
  WAITINT_TO_RUN:等待运行 / RUNNING: 正在运行 / COMPLETED: 执行成功 / FAILED: 执行失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInstanceStatus?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 该基线由哪个机器处理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardKey?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 当前用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserUin?: string;
    /**
     * 主账号uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 关键路径依赖
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CriticalDependency?: string;
}
/**
 * RobAndLockIntegrationTask返回参数结构体
 */
export interface RobAndLockIntegrationTaskResponse {
    /**
     * 抢锁状态
     */
    RobLockState: RobLockState;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询数据开发资源锁状态响应
 */
export interface DescribeLockResp {
    /**
     * 锁持有人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerId?: number;
    /**
     * 锁持有人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerName?: string;
    /**
     * 资源路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourcePath?: string;
    /**
     * 持有锁标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockedByMe?: boolean;
    /**
     * 锁定时间时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockTime?: number;
}
/**
 * DeleteBatchWorkflowDs返回参数结构体
 */
export interface DeleteBatchWorkflowDsResponse {
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventListenerTask返回参数结构体
 */
export interface DescribeEventListenerTaskResponse {
    /**
     * 事件详情信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CollectionEventListenerTaskDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 事件管理- 事件实体
 */
export interface EventDsDto {
    /**
     * 事件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 事件类型GENERAL、TIME_SERIES
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventType: string;
    /**
     * 存活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeToLive: number;
    /**
     * 存活时间单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit: string;
    /**
     * 事件分割类型 SECOND、MIN、HOUR、DAY
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventSubType?: string;
    /**
     * 事件广播类型SINGLE、BROADCAST
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventBroadcastType?: string;
    /**
     * 时间格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DimensionFormat?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTs?: string;
    /**
     * 事件所属人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 事件监听者信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Listeners?: Array<EventListenerDTO>;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
}
/**
 * 回收站任务信息
 */
export interface RecycleTaskInfo {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 任务类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeDesc?: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * 回收站提示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 操作人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 主账户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 更新者名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 更新者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 扩展属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<ParamInfo>;
    /**
     * 是否为虚拟任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 虚拟任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 文件id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
}
/**
 * ForceSucInstances返回参数结构体
 */
export interface ForceSucInstancesResponse {
    /**
     * 返回实例批量终止结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDsEvent返回参数结构体
 */
export interface UpdateDsEventResponse {
    /**
     * 事件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventDsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleGroupTable请求参数结构体
 */
export interface DescribeRuleGroupTableRequest {
    /**
     * 表ID
     */
    TableId: string;
}
/**
 * DescribeOperateOpsTaskDatasource请求参数结构体
 */
export interface DescribeOperateOpsTaskDatasourceRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务类型ID
     */
    TaskType: number;
    /**
     * 数据源来源/去向
     */
    ServiceKind?: string;
    /**
     * 数据源类型
     */
    ServiceType?: string;
}
/**
 * 质量概览表排行元素
 */
export interface TopTableStatItem {
    /**
     * 表Id
     */
    TableId: string;
    /**
     * 表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 数
     */
    Cnt: number;
}
/**
 * CreateTaskOutputRegistries请求参数结构体
 */
export interface CreateTaskOutputRegistriesRequest {
    /**
     * 登记项列表
     */
    Registries: Array<CreateTaskOutputRegistry>;
}
/**
 * CreateResourcePath返回参数结构体
 */
export interface CreateResourcePathResponse {
    /**
     * 新建成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTaskFolder返回参数结构体
 */
export interface DeleteTaskFolderResponse {
    /**
     * true代表删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteFolder返回参数结构体
 */
export interface DeleteFolderResponse {
    /**
     * true代表删除成功，false代表删除失败
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTestRunTaskInstancesStatusInfo请求参数结构体
 */
export interface GetTestRunTaskInstancesStatusInfoRequest {
    /**
     * 任务列表
     */
    Tasks: Array<ParamGetTestRunTaskInstancesStatusInfoTask>;
    /**
     * 是否开发空间
     */
    IsDevSpace?: boolean;
}
/**
 * 规则组关联表信息
 */
export interface RuleGroupTableInnerInfo {
    /**
     * 表ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: string;
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType: number;
    /**
     * 数据库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: number;
    /**
     * 责任人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId: number;
}
/**
 * DeleteIntegrationTask请求参数结构体
 */
export interface DeleteIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 依赖配置
 */
export interface DependencyConfigDsDTO {
    /**
     * ParentTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentTask: TaskDsDTO;
    /**
     * SonTask任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SonTask: TaskDsDTO;
    /**
     * the dependency config
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainCyclicConfig: string;
    /**
     * SubordinateCyclicConfig配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubordinateCyclicConfig: string;
    /**
     * DependencyStrategy策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyStrategy: DependencyStrategyDs;
}
/**
 * 规则执行结果分页
 */
export interface RuleExecResultPage {
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 规则执行结果
     */
    Items: Array<RuleExecResult>;
}
/**
 * ModifyExecStrategy请求参数结构体
 */
export interface ModifyExecStrategyRequest {
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
     */
    MonitorType?: number;
    /**
     * 计算队列
     */
    ExecQueue?: string;
    /**
     * 执行资源组ID
     */
    ExecutorGroupId?: string;
    /**
     * 执行资源组名称
     */
    ExecutorGroupName?: string;
    /**
     * 关联的生产调度任务列表
     */
    Tasks?: Array<ProdSchedulerTask>;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 离线周期模式下,生效日期-开始时间
     */
    StartTime?: string;
    /**
     * 离线周期模式下,生效日期-结束时间
     */
    EndTime?: string;
    /**
     * 离线周期模式下,调度周期
  MINUTE_CYCLE:I,
  HOUR_CYCLE:H,
  DAY_CYCLE:D,
  WEEK_CYCLE:W,
  MONTH_CYCLE:M
     */
    CycleType?: string;
    /**
     * 离线周期模式下,调度步长
     */
    CycleStep?: number;
    /**
     * 离线周期模式下,指定时间
     */
    TaskAction?: string;
    /**
     * 延时执行时间，单位分钟，可选: <0-1439
     */
    DelayTime?: number;
    /**
     * 数据库Id
     */
    DatabaseId?: string;
    /**
     * 数据源Id
     */
    DatasourceId?: string;
    /**
     * 数据表Id
     */
    TableId?: string;
    /**
     * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
     */
    ExecEngineType?: string;
}
/**
 * BatchForceSuccessIntegrationTaskInstances请求参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesRequest {
    /**
     * 实例信息
     */
    Instances: Array<SchedulerTaskInstanceInfo>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeTaskByCycleReport请求参数结构体
 */
export interface DescribeTaskByCycleReportRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务周期类型
     */
    Type?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
}
/**
 * DescribeInstanceLogDetail返回参数结构体
 */
export interface DescribeInstanceLogDetailResponse {
    /**
     * 日志结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: InstanceLogInfoOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProdTasks返回参数结构体
 */
export interface DescribeProdTasksResponse {
    /**
     * 生产调度任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<ProdSchedulerTask>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetIntegrationNodeColumnSchema请求参数结构体
 */
export interface GetIntegrationNodeColumnSchemaRequest {
    /**
     * 字段示例（json格式）
     */
    ColumnContent?: string;
    /**
     * 数据源类型
     */
    DatasourceType?: string;
}
/**
 * DescribeTableInfoList返回参数结构体
 */
export interface DescribeTableInfoListResponse {
    /**
     * 表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableInfo: Array<TableInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MakeUpOpsTasks请求参数结构体
 */
export interface MakeUpOpsTasksRequest {
    /**
     * 补录的当前任务的taskId数组
     */
    TaskIdList: Array<string>;
    /**
     * 补录开始时间
     */
    StartTime: string;
    /**
     * 补录结束时间
     */
    EndTime: string;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * true: 检查父任务实例状态；false: 不检查父任务实例状态
     */
    CheckParent?: boolean;
}
/**
 * 开发空间-获取数据开发脚本信息响应体
 */
export interface UserFileInfo {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件类型，如 jar zip 等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件上传类型，资源管理为 resource
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 文件MD5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 文件大小，单位为字节
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 本地临时路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalTempPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 文件拥有者名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 文件拥有者uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 文件深度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathDepth?: number;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: Array<ParamInfo>;
    /**
     * 本地临时压缩文件绝对路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipPath?: string;
    /**
     * 文件所属存储桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 文件所属存储桶的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteName?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteOwner?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
    /**
     * 附加信息 base64编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EncodeExtraInfo?: string;
}
/**
 * DescribeTableBasicInfo请求参数结构体
 */
export interface DescribeTableBasicInfoRequest {
    /**
     * 分页页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤字段
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
}
/**
 * CheckTaskNameExistResult
 */
export interface CheckTaskNameExistResult {
    /**
     * 是否已存在重名的任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IfExist?: boolean;
    /**
     * ifExist为true时的提示信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
}
/**
 * 元数据字段信息
 */
export interface SchemaDetail {
    /**
     * 列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnKey: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
}
/**
 * DescribeProjectParamVersionInfoDs返回参数结构体
 */
export interface DescribeProjectParamVersionInfoDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterInfoDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskOutputRegistries请求参数结构体
 */
export interface DescribeTaskOutputRegistriesRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * StopIntegrationTask请求参数结构体
 */
export interface StopIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * CreateTaskParamDs请求参数结构体
 */
export interface CreateTaskParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 入参
     */
    Request?: Array<ParamTaskDsRequest>;
}
/**
 * DescribeFolderWorkflowList返回参数结构体
 */
export interface DescribeFolderWorkflowListResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: DescribeFolderWorkflowListData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表字段额外属性
 */
export interface Params {
    /**
     * DLC专用：分区字段转换策略
     */
    Transform?: string;
    /**
     * DLC专用：分区字段策略参数
     */
    TransformArgs?: string;
}
/**
 * CreateFolder请求参数结构体
 */
export interface CreateFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 父文件夹ID
     */
    ParentsFolderId?: string;
}
/**
 * DescribeWorkflowCanvasInfoDs请求参数结构体
 */
export interface DescribeWorkflowCanvasInfoDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
}
/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 规则组id
     */
    RuleGroupId?: number;
    /**
     * 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎
     */
    EngineType?: string;
}
/**
 * DescribeWorkflowExecuteById返回参数结构体
 */
export interface DescribeWorkflowExecuteByIdResponse {
    /**
     * 工作流运行时间信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkFlowExecuteDtoByPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRule返回参数结构体
 */
export interface DescribeRuleResponse {
    /**
     * 规则详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Rule;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskListByConditionDs返回参数结构体
 */
export interface DescribeTaskListByConditionDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskDsDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskLinksDs返回参数结构体
 */
export interface ModifyTaskLinksDsResponse {
    /**
     * 成功或失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * linkID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeQualityScore返回参数结构体
 */
export interface DescribeQualityScoreResponse {
    /**
     * 质量评分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: QualityScore;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowTasksForProjectClone请求参数结构体
 */
export interface DescribeWorkflowTasksForProjectCloneRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 页号
     */
    Page?: number;
    /**
     * 分页大小
     */
    Size?: number;
    /**
     * 排序类型。两种取值 DESC、ASC，当前仅支持按提交时间排序
     */
    Order?: string;
    /**
     * 工作流责任人名称
     */
    OwnerName?: string;
    /**
     * 提交开始时间（筛选用）
     */
    StartTime?: string;
    /**
     * 提交结束时间（筛选用）
     */
    EndTime?: string;
    /**
     * 工作流名称（筛选用）
     */
    FilterWorkflowName?: string;
}
/**
 * RuleDimCnt 规则维度统计
 */
export interface RuleDimCnt {
    /**
     * 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
     */
    Dim: number;
    /**
     * count 数
     */
    Cnt: number;
}
/**
 * 表绑定规则组信息
 */
export interface RuleGroupTable {
    /**
     * 表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableInfo: RuleGroupTableInnerInfo;
    /**
     * 规则组调度信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroups: Array<RuleGroupSchedulerInfo>;
    /**
     * 订阅者信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Subscriptions: Array<RuleGroupSubscribe>;
}
/**
 * 补录计划任务
 */
export interface MakePlanTaskOpsDto {
    /**
     * 任务基本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskBaseInfo?: TaskOpsDto;
    /**
     * 补录计划该任务实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 补录任务实例完成百分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompletePercent?: number;
    /**
     * 补录任务实例成功百分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessPercent?: number;
}
/**
 * FindDependTaskListDs请求参数结构体
 */
export interface FindDependTaskListDsRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * UploadContent请求参数结构体
 */
export interface UploadContentRequest {
    /**
     * 脚本上传信息
     */
    ScriptRequestInfo: ScriptRequestInfo;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
}
/**
 * 状态趋势统计
 */
export interface TaskByStatus {
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountGroup?: string;
    /**
     * 日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShowTimeGroup?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 周期单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit?: string;
    /**
     * 1
     */
    ReportTime?: string;
    /**
     * 1
     */
    Count?: number;
}
/**
 * 移除孤立文件治理项
 */
export interface DlcRemoveOrphanFilesInfo {
    /**
     * 是否启用移除孤立文件治理项：enable、none
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoveOrphanFilesEnable?: string;
    /**
     * 用于运行移除孤立文件治理项的引擎名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Engine?: string;
    /**
     * 移除指定天前的孤立文件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeforeDays?: number;
    /**
     * 移除孤立文件的并行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxConcurrentDeletes?: number;
    /**
     * 移除孤立文件治理运行周期，单位为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntervalMin?: number;
}
/**
 * LockIntegrationTask请求参数结构体
 */
export interface LockIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * BatchStopIntegrationTasks请求参数结构体
 */
export interface BatchStopIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeRuleTemplatesByPage请求参数结构体
 */
export interface DescribeRuleTemplatesByPageRequest {
    /**
     * 当前页
     */
    PageNumber: number;
    /**
     * 每页记录数
     */
    PageSize: number;
    /**
     * 工作空间ID
     */
    ProjectId: string;
    /**
     * 通用排序字段
     */
    OrderFields?: Array<OrderField>;
    /**
     * 通用过滤条件
     */
    Filters?: Array<Filter>;
}
/**
 * RegisterDsEvent返回参数结构体
 */
export interface RegisterDsEventResponse {
    /**
     * 事件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventDsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExportDsEvent返回参数结构体
 */
export interface ExportDsEventResponse {
    /**
     * 导出结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: ExportEventDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceLastLog返回参数结构体
 */
export interface DescribeInstanceLastLogResponse {
    /**
     * 日志
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 开发空间-脚本相关响应
 */
export interface ScriptInfoResponse {
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 脚本名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件扩展名类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * md5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 路径深度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathDepth?: number;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 本地临时文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalTempPath?: string;
    /**
     * 本地压缩文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipPath?: string;
    /**
     * cos桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * cos地区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
}
/**
 * CreateTaskInParamDs请求参数结构体
 */
export interface CreateTaskInParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 参数key
     */
    ParamKey?: string;
    /**
     * 参数描述
     */
    ParamDesc?: string;
    /**
     * 来源任务id
     */
    FromTaskId?: string;
    /**
     * 来源任务key
     */
    FromParamKey?: string;
}
/**
 * SavePositionsDs返回参数结构体
 */
export interface SavePositionsDsResponse {
    /**
     * 下游任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述etl测试运行批量结果
 */
export interface DescribeTestRunBatchItem {
    /**
     * 任务实例Id
     */
    InstanceKey: string;
    /**
     * 当前任务状态
     */
    Status: string;
    /**
     * 任务是否结束
     */
    Finished: boolean;
    /**
     * 日志内容
     */
    LogContent: string;
}
/**
 * DescribeRecycleTaskList请求参数结构体
 */
export interface DescribeRecycleTaskListRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 关键字搜索
     */
    Keyword?: string;
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
}
/**
 * 事件监听器
 */
export interface EventListenerOpsDto {
    /**
     * 事件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventName?: string;
    /**
     * 关键字，如果是任务，则是任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 触发方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 事件属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTimestamp?: string;
}
/**
 * DescribeOperateOpsTaskDatasourceType返回参数结构体
 */
export interface DescribeOperateOpsTaskDatasourceTypeResponse {
    /**
     * 数据源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DatasourceTypeByTaskType>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetLatestTestRunInfo返回参数结构体
 */
export interface GetLatestTestRunInfoResponse {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 任务列表
     */
    Tasks?: Array<LatestTestRunInfoTask>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowOpsCanvasInfo返回参数结构体
 */
export interface DescribeWorkflowOpsCanvasInfoResponse {
    /**
     * 删除结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowCanvasOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则模版变更历史记录视图
 */
export interface RuleTemplateHistory {
    /**
     * 模版ID
     */
    TemplateId?: number;
    /**
     * 版本
     */
    Version?: number;
    /**
     * 用户Id
     */
    UserId?: number;
    /**
     * 用户昵称
     */
    UserName?: string;
    /**
     * 变更类型1.新增2.修改3.删除
     */
    AlterType?: number;
    /**
     * 变更内容
     */
    AlterContent?: string;
}
/**
 * 申请列表
 */
export interface DescribeApply {
    /**
     * 申请列表详情
     */
    Rows: Array<Apply>;
    /**
     * 总分页页码
     */
    TotalPageNumber: number;
    /**
     * 总个数
     */
    TotalCount: number;
    /**
     * 分页页码
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
}
/**
 * BatchDeleteIntegrationTasks返回参数结构体
 */
export interface BatchDeleteIntegrationTasksResponse {
    /**
     * 操作成功的任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessCount?: number;
    /**
     * 操作失败的任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedCount?: number;
    /**
     * 任务总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据排布治理项
 */
export interface DlcRewriteDataInfo {
    /**
     * 是否启用数据重排布治理项：enable（启动）、disable（不启用，默认）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RewriteDataEnable?: string;
    /**
     * 用于运行数据重排布治理项的引擎名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Engine?: string;
    /**
     * 重排布任务执行的文件个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinInputFiles?: number;
    /**
     * 数据重排布写后的数据文件大小，单位为字节
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetFileSizeBytes?: number;
    /**
     * 数据重排布治理运行周期，单位为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntervalMin?: number;
}
/**
 * DescribeDataDevelopTaskType请求参数结构体
 */
export interface DescribeDataDevelopTaskTypeRequest {
    /**
     * 项目编号
     */
    ProjectId?: string;
}
/**
 * 通用过滤器
 */
export interface Filter {
    /**
     * 过滤字段名称
     */
    Name?: string;
    /**
     * 过滤值列表
     */
    Values?: Array<string>;
}
/**
 * DescribeInstanceByCycle请求参数结构体
 */
export interface DescribeInstanceByCycleRequest {
    /**
     * 1
     */
    ProjectId?: string;
    /**
     * 1
     */
    TenantId?: string;
}
/**
 * DescribeFolderList返回参数结构体
 */
export interface DescribeFolderListResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: DescribeFolderListData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * JudgeResourceFile请求参数结构体
 */
export interface JudgeResourceFileRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源路径
     */
    FilePath: string;
}
/**
 * DescribeRuleExecHistory返回参数结构体
 */
export interface DescribeRuleExecHistoryResponse {
    /**
     * 规则执行结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<RuleExecResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBaselineAlarmStatus返回参数结构体
 */
export interface ModifyBaselineAlarmStatusResponse {
    /**
     * 成功或失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyFolder返回参数结构体
 */
export interface ModifyFolderResponse {
    /**
     * true代表成功，false代表失败
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据质量数据来源数据库
 */
export interface DatabaseInfo {
    /**
     * 数据源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName?: string;
    /**
     * 数据源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 数据库id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceType?: number;
    /**
     * 数据库原始名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginDatabaseName?: string;
    /**
     * schema名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginSchemaName?: string;
}
/**
 * GetIntegrationNodeColumnSchema返回参数结构体
 */
export interface GetIntegrationNodeColumnSchemaResponse {
    /**
     * 字段列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Schemas: Array<IntegrationNodeSchema>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务信息
 */
export interface OpsTaskCanvasDto {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent: string;
    /**
     * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId: number;
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
    TaskTypeDesc: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 最近提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime: string;
    /**
     * 首次运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstRunTime: string;
    /**
     * 调度计划展示描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleDesc: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 调度周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit: string;
    /**
     * 画布x轴坐标点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate: number;
    /**
     * 画布y轴坐标点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate: number;
    /**
     * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag: boolean;
    /**
     * 弹性周期配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction: string;
    /**
     * 延迟时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime: number;
    /**
     * 执行开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 层级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Layer?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 目标数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 目标数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * 任务告警类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmType?: string;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * CreatePath返回参数结构体
 */
export interface CreatePathResponse {
    /**
     * 成功与否
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataCheckStat返回参数结构体
 */
export interface DescribeDataCheckStatResponse {
    /**
     * 结果
     */
    Data: DataCheckStat;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowCanvasInfo请求参数结构体
 */
export interface DescribeWorkflowCanvasInfoRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 参数参数
 */
export interface ParamInfoDs {
    /**
     * 参数名
     */
    ParamKey: string;
    /**
     * 参数值
     */
    ParamValue: string;
}
/**
 * DescribeDsKettleServerFolderTree返回参数结构体
 */
export interface DescribeDsKettleServerFolderTreeResponse {
    /**
     * 统一kettle树结构返回属性列表
     */
    Data?: Array<DsKettleServerFolderTreeNodeDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTaskInParamDs请求参数结构体
 */
export interface DeleteTaskInParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 参数key
     */
    ParamKey?: string;
}
/**
 * DescribeRuleExecExportResult返回参数结构体
 */
export interface DescribeRuleExecExportResultResponse {
    /**
     * 导出结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleExecExportResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOperateTasks返回参数结构体
 */
export interface DescribeOperateTasksResponse {
    /**
     * 任务列表信息
     */
    Data?: TaskInfoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTestRun请求参数结构体
 */
export interface DescribeTestRunRequest {
    /**
     * 任务实例Id
     */
    InstanceKey: string;
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 实例运行时间
     */
    CurrRunDate: string;
}
/**
 * DescribeBaselineResponse
 */
export interface DescribeBaselineResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Baselines?: Array<BaselineDto>;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * 文件夹列表
 */
export interface CollectionFolderOpsDto {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总页面数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页面数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 每页数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<FolderOpsDto>;
}
/**
 * DescribeInLongAgentTaskList请求参数结构体
 */
export interface DescribeInLongAgentTaskListRequest {
    /**
     * 采集器ID
     */
    AgentId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
}
/**
 * DescribeTrendStat请求参数结构体
 */
export interface DescribeTrendStatRequest {
    /**
     * Project id
     */
    ProjectId: string;
    /**
     * 开始时间，时间戳到秒
     */
    BeginDate: string;
    /**
     * 结束时间，时间戳到秒
     */
    EndDate: string;
}
/**
 * 通用排序字段
 */
export interface OrderField {
    /**
     * 排序字段名称
     */
    Name: string;
    /**
     * 排序方向：ASC|DESC
     */
    Direction: string;
}
/**
 * ModifyTaskInfoDs返回参数结构体
 */
export interface ModifyTaskInfoDsResponse {
    /**
     * 执行结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsTaskVersionList返回参数结构体
 */
export interface DescribeDsTaskVersionListResponse {
    /**
     * 版本列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskVersionDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchRerunIntegrationTaskInstances返回参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBatchTaskSchedule请求参数结构体
 */
export interface UpdateBatchTaskScheduleRequest {
    /**
     * 待更新的任务ID
     */
    TaskIds: Array<string>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务依赖
     */
    SelfDepend?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 延迟时间
     */
    DelayTime?: number;
    /**
     * 指定运行时间
     */
    TaskAction?: string;
    /**
     * 调度周期时间单位
     */
    CycleType?: string;
    /**
     * 调度周期
     */
    CycleStep?: number;
    /**
     * Crontab表达式
     */
    CrontabExpression?: string;
    /**
     * 执行时间左闭区间
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
     */
    ExecutionEndTime?: string;
}
/**
 * DescribeIntegrationStatistics请求参数结构体
 */
export interface DescribeIntegrationStatisticsRequest {
    /**
     * 任务类型（实时：201，离线：202）
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 查询日期
     */
    QueryDate?: string;
}
/**
 * BatchMakeUpIntegrationTasks返回参数结构体
 */
export interface BatchMakeUpIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount: number;
    /**
     * 操作失败的任务数
     */
    FailedCount: number;
    /**
     * 任务总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CommitExportTask请求参数结构体
 */
export interface CommitExportTaskRequest {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 规则执行Id
     */
    RuleExecId?: number;
    /**
     * 导出类型(1.全部,2.触发行,3.通过行)
     */
    ExportType?: number;
    /**
     * 执行资源组id
     */
    ExecutorGroupId?: string;
    /**
     * 计算资源队列
     */
    QueueName?: string;
}
/**
 * DeleteDsEvent请求参数结构体
 */
export interface DeleteDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称集合
     */
    EventNameSet: Array<string>;
}
/**
 * JudgeTaskListenEvent请求参数结构体
 */
export interface JudgeTaskListenEventRequest {
    /**
     * 任务列表，不可重复
     */
    KeySet: Array<string>;
}
/**
 * BatchDeleteOpsTasks返回参数结构体
 */
export interface BatchDeleteOpsTasksResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExportWorkflowZip请求参数结构体
 */
export interface ExportWorkflowZipRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowIds: Array<string>;
    /**
     * 跨域访问域名，文件存储在共享存储中，跨域下载会出现跨域访问失败问题，如果是跨域请求，请填写该值
     */
    OriginDomain?: string;
}
/**
 * 事件发布者信息
 */
export interface EventPublisherDTO {
    /**
     * 关键字，一般为任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * REST_API、KAFKA
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTs?: string;
    /**
     * 配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PropertiesList?: Array<ParamInfoDs>;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * CreateTaskOutParamDs请求参数结构体
 */
export interface CreateTaskOutParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 参数key
     */
    ParamKey?: string;
    /**
     * 参数描述
     */
    ParamDesc?: string;
    /**
     * 参数定义
     */
    ParamDefine?: string;
}
/**
 * CopyTaskDs请求参数结构体
 */
export interface CopyTaskDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 任务目录ID
     */
    TaskFolderId?: string;
}
/**
 * DescribeTaskAlarmRegulations返回参数结构体
 */
export interface DescribeTaskAlarmRegulationsResponse {
    /**
     * 告警规则信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAlarmInfos?: Array<TaskAlarmInfo>;
    /**
     * 总记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowInfoById请求参数结构体
 */
export interface DescribeWorkflowInfoByIdRequest {
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeDataDevelopTaskType返回参数结构体
 */
export interface DescribeDataDevelopTaskTypeResponse {
    /**
     * 任务类型列表
     */
    Data?: Array<TaskTypeDsVO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务列表-子任务记录
 */
export interface AdhocSubTaskDto {
    /**
     * 子任务id
     */
    Id: number;
    /**
     * 子任务开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: string;
    /**
     * 子任务结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 子任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 子任务sql内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptContent: string;
    /**
     * 提交任务id
     */
    RecordId: number;
    /**
     * 子任务执行时长
     */
    Duration: string;
}
/**
 * DescribeRuleDimStat请求参数结构体
 */
export interface DescribeRuleDimStatRequest {
    /**
     * Project Id
     */
    ProjectId: string;
    /**
     * 开始时间，时间戳到秒
     */
    BeginDate: string;
    /**
     * 结束时间，时间戳到秒
     */
    EndDate: string;
}
/**
 * FreezeTasks请求参数结构体
 */
export interface FreezeTasksRequest {
    /**
     * 任务列表
     */
    Tasks: Array<SimpleTaskInfo>;
    /**
     * 任务操作是否消息通知下游任务责任人
     */
    OperateIsInform: boolean;
}
/**
 * 代码搜索审计响应信息
 */
export interface CodeSearchAuditResult {
    /**
     * 代码搜索审计信息列表
     */
    CodeSearchAuditInfo: Array<CodeSearchAuditInfo>;
}
/**
 * MakeUpWorkflowNew返回参数结构体
 */
export interface MakeUpWorkflowNewResponse {
    /**
     * 返回补录成功或失败的任务数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesInfoWithTaskInfo返回参数结构体
 */
export interface DescribeInstancesInfoWithTaskInfoResponse {
    /**
     * 结果集
     */
    Data?: Array<InstanceOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsTaskVersionInfo返回参数结构体
 */
export interface DescribeDsTaskVersionInfoResponse {
    /**
     * 任务版本详情信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TaskVersionDsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDsFolder返回参数结构体
 */
export interface CreateDsFolderResponse {
    /**
     * 文件夹Id，null则创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTaskOutputRegistry请求参数结构体
 */
export interface DeleteTaskOutputRegistryRequest {
    /**
     * 登记项Id
     */
    Id: number;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DeleteTaskOutputRegistry返回参数结构体
 */
export interface DeleteTaskOutputRegistryResponse {
    /**
     * 登记项Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClearRecycleTask返回参数结构体
 */
export interface ClearRecycleTaskResponse {
    /**
     * 是否成功
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务运行历史分页记录
 */
export interface InstanceOpsInfoPage {
    /**
     * 总记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<InstanceOpsDto>;
}
/**
 * DeleteBaseline请求参数结构体
 */
export interface DeleteBaselineRequest {
    /**
     * 基线id
     */
    BaselineId: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * GetFileInfo返回参数结构体
 */
export interface GetFileInfoResponse {
    /**
     * 当前脚本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileInfo?: UserFileInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeSearchInfo返回参数结构体
 */
export interface DescribeCodeSearchInfoResponse {
    /**
     * 代码搜索响应结果
     */
    Data?: CodeSearchResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyWorkflowDs返回参数结构体
 */
export interface CopyWorkflowDsResponse {
    /**
     * 新的工作流ID
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RollbackCustomFunctionVersion请求参数结构体
 */
export interface RollbackCustomFunctionVersionRequest {
    /**
     * 函数唯一标识
     */
    FunctionId: string;
    /**
     * 函数要回滚到的版本
     */
    Tag: string;
    /**
     * 集群实例 ID
     */
    ClusterIdentifier: string;
}
/**
 * KillTasksTestRun返回参数结构体
 */
export interface KillTasksTestRunResponse {
    /**
     * JobId 作业ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 执行结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results?: Array<KillTestRunTasksResponseResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务扩展信息
 */
export interface TaskExtInfo {
    /**
     * 键
     */
    Key?: string;
    /**
     * 值
     */
    Value?: string;
}
/**
 * DescribeFathers返回参数结构体
 */
export interface DescribeFathersResponse {
    /**
     * 结果集
     */
    Data?: CollectionInstanceOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能运维事件分页查询
 */
export interface EventPage {
    /**
     * 事件详情集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventsResponse?: Array<EventDto>;
    /**
     * 总条数
     */
    TotalCount?: number;
}
/**
 * DescribeInstanceByCycleReport返回参数结构体
 */
export interface DescribeInstanceByCycleReportResponse {
    /**
     * 实例周期统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskByStatus>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 参数请求结构
 */
export interface ParamDsRequest {
    /**
     * 参数key
     */
    ParamKey?: string;
    /**
     * 参数类型
     */
    ParamType?: string;
    /**
     * 参数周期运行值
     */
    ParamDefine?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 操作者名
     */
    OperatorName?: string;
    /**
     * 工作流id
     */
    WorkflowId?: string;
    /**
     * sql内容
     */
    SqlContent?: string;
    /**
     * 数据时间
     */
    CurRunDate?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 关键字
     */
    KeyWords?: string;
    /**
     * 版本号
     */
    MyVersion?: number;
    /**
     * 上游
     */
    Upstream?: boolean;
    /**
     * 参数描述
     */
    ParamDescription?: string;
    /**
     * 参数调试运行值
     */
    ParamDefineTest?: string;
    /**
     * 是否为更新，true表示更新，false表示新建
     */
    UpdateFlag?: boolean;
}
/**
 * 实时任务同步速度 字节/s
 */
export interface BytesSpeed {
    /**
     * 节点类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType: string;
    /**
     * 节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName: string;
    /**
     * 速度值列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Values: Array<SpeedValue>;
}
/**
 * 数据质量阈值
 */
export interface ThresholdValue {
    /**
     * 阈值类型  1.低阈值  2.高阈值   3.普通阈值  4.枚举值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueType?: number;
    /**
     * 阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * DescribeFunctionKinds返回参数结构体
 */
export interface DescribeFunctionKindsResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kinds?: Array<FunctionTypeOrKind>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestoreRecycleTask返回参数结构体
 */
export interface RestoreRecycleTaskResponse {
    /**
     * 是否成功
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceByCycle返回参数结构体
 */
export interface DescribeInstanceByCycleResponse {
    /**
     * 统计结果
     */
    Data?: Array<TaskByCycle>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeDetailV2请求参数结构体
 */
export interface DescribeCodeDetailV2Request {
    /**
     * 文件或任务ID
     */
    Id: string;
    /**
     * 文件或任务名称
     */
    Name: string;
    /**
     * 文件或任务类型
     */
    Type: string;
}
/**
 * 任务列表信息-项目克隆使用
 */
export interface ProjectCloneTaskInfo {
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 责任人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType: string;
    /**
     * N-新建
  NS-草稿
  Y-运行
  F-停止
  O-冻结
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus?: string;
    /**
     * 任务最近一次提交时间（未提交则为 null）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLatestSubmitTime: string;
    /**
     * 原始资源组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalResourceGroup: string;
    /**
     * 目标资源组id（迁移使用），目前为 null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetResourceGroup?: string;
}
/**
 * 无
 */
export interface StageCloudApiRequest {
    /**
     * 无
     */
    ClusterId?: string;
    /**
     * 无
     */
    StageId?: string;
    /**
     * 无
     */
    JobId?: string;
    /**
     * 无
     */
    StageName?: string;
    /**
     * 无
     */
    Type?: string;
    /**
     * 无
     */
    Mode?: string;
    /**
     * 无
     */
    Version?: string;
    /**
     * 无
     */
    Queue?: string;
    /**
     * 无
     */
    Content?: string;
    /**
     * 无
     */
    Parameters?: Array<Property>;
    /**
     * 无
     */
    Description?: string;
    /**
     * 无
     */
    ProjectId?: string;
    /**
     * 无
     */
    JobType?: string;
    /**
     * 无
     */
    WorkFlowId?: string;
}
/**
 * DeleteEventListenerByTaskId返回参数结构体
 */
export interface DeleteEventListenerByTaskIdResponse {
    /**
     * 是否删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitPythonTask返回参数结构体
 */
export interface SubmitPythonTaskResponse {
    /**
     * 任务提交记录
     */
    Record?: AdhocRecord;
    /**
     * 子任务记录列表
     */
    Details?: Array<AdhocDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceLog请求参数结构体
 */
export interface DescribeInstanceLogRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
    /**
     * 服务器Ip
     */
    BrokerIp: string;
    /**
     * 文件Name
     */
    OriginFileName: string;
}
/**
 * DescribeDimensionScore请求参数结构体
 */
export interface DescribeDimensionScoreRequest {
    /**
     * 统计日期 时间戳
     */
    StatisticsDate: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据来源id
     */
    DatasourceId?: string;
    /**
     * 过滤参数
     */
    Filters?: Array<Filter>;
}
/**
 * CreateAlarmRuleRequest
 */
export interface CreateAlarmRuleRequest {
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 创建人名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorId?: string;
    /**
     * 创建人uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 规则名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 监控类型,1.task、2.workflow、3.project、4.baseline（默认为1.任务）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType?: number;
    /**
     * 监控对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorObjectIds?: Array<string>;
    /**
     * 告警类型，1.失败告警、2.超时告警、3.成功告警、4.基线破线、5.基线预警、6.基线任务失败（默认1.失败告警）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmTypes?: Array<string>;
    /**
     * 告警级别，1.普通、2.重要、3.紧急（默认1.普通）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmLevel?: number;
    /**
     * 告警方式,1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群；告警方式code列表（默认1.邮件）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmWays?: Array<string>;
    /**
     * 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientType?: number;
    /**
     * 告警接收人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipients?: Array<string>;
    /**
     * 告警接收人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmRecipientIds?: Array<string>;
    /**
     * 扩展信息, 1.预计运行耗时（默认），2.预计完成时间，3.预计调度时间，4.周期内未完成；取值类型：1.指定指，2.历史均值（默认1.指定指）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtInfo?: string;
}
/**
 * 文件夹属性
 */
export interface FolderDsDto {
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 所属项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 父文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentsFolderId?: string;
    /**
     * 工作流总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 工作流列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Workflows?: Array<WorkflowCanvasOpsDto>;
    /**
     * 子文件夹总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalFolders?: number;
    /**
     * 子文件夹列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Folders?: Array<FolderDsDto>;
    /**
     * 搜索类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FindType?: string;
}
/**
 * 依赖配置策略
 */
export interface DependencyStrategy {
    /**
     * 等待（默认策略）或 执行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PollingNullStrategy?: string;
}
/**
 * SubmitTestRun返回参数结构体
 */
export interface SubmitTestRunResponse {
    /**
     * 任务实例Id
     */
    InstanceKey?: string;
    /**
     * 任务Id
     */
    TaskId?: string;
    /**
     * 实例运行时间
     */
    CurrRunDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecordList请求参数结构体
 */
export interface DescribeRecordListRequest {
    /**
     * 脚本文件id
     */
    ScriptId: string;
    /**
     * 分页索引
     */
    PageIndex: number;
    /**
     * 单页大小
     */
    PageSize: number;
    /**
     * 脚本类型
     */
    ScriptType: string;
    /**
     * sql语句
     */
    SqlStatement?: string;
    /**
     * 开始时间(毫秒)
     */
    StartTime?: number;
    /**
     * 结束时间(毫秒)
     */
    EndTime?: number;
    /**
     * 任务状态
     */
    Status?: string;
    /**
     * 是否只查看用户自身的调试记录,默认或者不填都为true，填为false的时候会显示其他用户的此脚本的调试记录
     */
    IsOnlyMyselfDebug?: boolean;
}
/**
 * DescribeWorkflowTaskCount返回参数结构体
 */
export interface DescribeWorkflowTaskCountResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowTaskCountOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务标签，可用于检索任务的条件
 */
export interface TaskTag {
    /**
     * 标签名称
     */
    TagName: string;
    /**
     * 标签值列表
     */
    TagValues: Array<string>;
}
/**
 * DescribeDataObjects请求参数结构体
 */
export interface DescribeDataObjectsRequest {
    /**
     * 数据来源ID
     */
    DatasourceId?: string;
    /**
     * 数据表ID
     */
    TableId?: string;
    /**
     * 质量规则组ID
     */
    RuleGroupId?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * ModifyRuleGroupSubscription请求参数结构体
 */
export interface ModifyRuleGroupSubscriptionRequest {
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 订阅人信息
     */
    Receivers?: Array<SubscribeReceiver>;
    /**
     * 订阅类型
     */
    SubscribeType?: Array<number | bigint>;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 数据库Id
     */
    DatabaseId?: string;
    /**
     * 数据源Id
     */
    DatasourceId?: string;
    /**
     * 数据表Id
     */
    TableId?: string;
    /**
     * 群机器人webhook信息
     */
    WebHooks?: Array<SubscribeWebHook>;
}
/**
 * 数据导出任务详情
 */
export interface ExportTaskInfo {
    /**
     * 导出任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExportTaskId?: number;
    /**
     * 导出任务类型(1.全部,2.触发行,3.通过行)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: number;
    /**
     * 任务创建人 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorId?: number;
    /**
     * 任务创建人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 导出状态(1.已提交 2.导出中 3.导出成功 4.导出失败)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 调度任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerTaskId?: string;
    /**
     * 调度时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerCurRunDate?: string;
    /**
     * 文件相对路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FilePath?: string;
}
/**
 * DeleteDsFolder返回参数结构体
 */
export interface DeleteDsFolderResponse {
    /**
     * true代表删除成功，false代表删除失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDrInstancePage返回参数结构体
 */
export interface DescribeDrInstancePageResponse {
    /**
     * 结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DrInstanceOpsDtoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MoveTasksToFolder请求参数结构体
 */
export interface MoveTasksToFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 任务文件夹ID
     */
    TaskFolderId: string;
    /**
     * 任务ID
     */
    TaskIds: Array<string>;
    /**
     * 虚拟任务ID
     */
    VirtualTaskIds: Array<string>;
}
/**
 * StopAdhocTask请求参数结构体
 */
export interface StopAdhocTaskRequest {
    /**
     * 任务提交记录Id
     */
    RecordId: number;
    /**
     * 任务实例Id
     */
    InstanceId: string;
}
/**
 * DescribeScriptsImportTaskType请求参数结构体
 */
export interface DescribeScriptsImportTaskTypeRequest {
    /**
     * 项目编号
     */
    ProjectId?: string;
}
/**
 * 任务信息
 */
export interface TaskCanvasInfo {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent: string;
    /**
     * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeId: number;
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
    TaskTypeDesc: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 文件夹名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 最近提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstSubmitTime: string;
    /**
     * 首次运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstRunTime: string;
    /**
     * 调度计划展示描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScheduleDesc: string;
    /**
     * 负责人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge: string;
    /**
     * 调度周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleUnit: string;
    /**
     * 画布x轴坐标点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate: number;
    /**
     * 画布y轴坐标点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate: number;
    /**
     * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag: boolean;
    /**
     * 弹性周期配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction: string;
    /**
     * 延迟时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime: number;
    /**
     * 执行开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 层级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Layer?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 目标数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 目标数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * 任务告警类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmType?: string;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * UserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * OwnerId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
    /**
     * TenantId
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
}
/**
 * 文件夹分页信息
 */
export interface DescribeFolderListData {
    /**
     * 文件夹信息列表
     */
    Items: Array<Folder>;
    /**
     * 总条数
     */
    TotalCount: number;
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
}
/**
 * 实例列表结构体
 */
export interface CollectionInstanceOpsDto {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 总页面数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 当前页面数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 每页数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<InstanceOpsDto>;
}
/**
 * 试运行记录
 */
export interface DrInstanceOpsDtoPage {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<DrInstanceOpsDto>;
}
/**
 * JudgeTaskListenEvent返回参数结构体
 */
export interface JudgeTaskListenEventResponse {
    /**
     * 有监听任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchUpdateIntegrationTasks请求参数结构体
 */
export interface BatchUpdateIntegrationTasksRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id）
     */
    Incharge: string;
    /**
     * 任务类型
     */
    TaskType: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 责任人Id（多个责任人用小写分号隔开）
     */
    InchargeIds?: string;
}
/**
 * ModifyTaskName返回参数结构体
 */
export interface ModifyTaskNameResponse {
    /**
     * 结果
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopTableStat返回参数结构体
 */
export interface DescribeTopTableStatResponse {
    /**
     * 结果
     */
    Data: TopTableStat;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetBatchDetailErrorLog请求参数结构体
 */
export interface GetBatchDetailErrorLogRequest {
    /**
     * 批量操作ID
     */
    JobId: number;
    /**
     * 异步处理ID
     */
    ResourceId: string;
}
/**
 * DescribeWorkflowForProjectClone请求参数结构体
 */
export interface DescribeWorkflowForProjectCloneRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId?: string;
    /**
     * 页号
     */
    Page?: number;
    /**
     * 分页大小
     */
    Size?: number;
    /**
     * 排序类型。两种取值 DESC、ASC，当前仅支持按提交时间排序
     */
    Order?: string;
    /**
     * 工作流责任人名称
     */
    OwnerName?: string;
    /**
     * 提交开始时间（筛选用）
     */
    StartTime?: string;
    /**
     * 提交结束时间（筛选用）
     */
    EndTime?: string;
    /**
     * 工作流名称（筛选用）
     */
    FilterWorkflowName?: string;
}
/**
 * 操作结果
 */
export interface BatchReturn {
    /**
     * 执行结果
     */
    Result: boolean;
    /**
     * 执行情况备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc: string;
    /**
     * 执行情况id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId: string;
}
/**
 * RerunOpsMakePlanInstances返回参数结构体
 */
export interface RerunOpsMakePlanInstancesResponse {
    /**
     * 操作结果描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsMakePlans返回参数结构体
 */
export interface DescribeOpsMakePlansResponse {
    /**
     * 补录计划分页查询结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: MakePlanOpsDtoCollection;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWorkflowSchedule返回参数结构体
 */
export interface ModifyWorkflowScheduleResponse {
    /**
     * 执行结果
     */
    Data: BatchResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetFileInfo请求参数结构体
 */
export interface GetFileInfoRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 文件路径
  项目区1470575647377821696项目，f1目录下： /datastudio/project/1470575647377821696/f1/sql1234.sql 个人区： /datastudio/personal/sqlTTT.sql
     */
    FilePath: string;
}
/**
 * ModifyTaskAlarmRegular请求参数结构体
 */
export interface ModifyTaskAlarmRegularRequest {
    /**
     * 主键ID
     */
    Id: string;
    /**
     * 规则信息
     */
    TaskAlarmInfo: TaskAlarmInfo;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DescribeColumnsMeta请求参数结构体
 */
export interface DescribeColumnsMetaRequest {
    /**
     * 表ID
     */
    TableId: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页大小
     */
    PageSize: number;
    /**
     * 过滤器
     */
    FilterSet?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFieldSet?: Array<OrderField>;
    /**
     * 是否查询分区字段，默认false
     */
    IsPartitionQuery?: boolean;
}
/**
 * 分页数据集
 */
export interface WorkflowCanvasOpLogResult {
    /**
     * 总数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalItems?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPages?: number;
    /**
     * 当前页数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPageItems?: number;
    /**
     * 当前页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPage?: number;
    /**
     * 分页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<WorkflowCanvasOplog>;
}
/**
 * CreateProjectParamDs返回参数结构体
 */
export interface CreateProjectParamDsResponse {
    /**
     * 结果集
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 画布所需的信息
 */
export interface OpsTaskCanvasInfoList {
    /**
     * 画布任务信息
     */
    TasksList: Array<OpsTaskCanvasDto>;
    /**
     * 画布任务链接信息
     */
    LinksList: Array<OpsTaskLinkInfoDto>;
}
/**
 * DescribeDependTaskLists请求参数结构体
 */
export interface DescribeDependTaskListsRequest {
    /**
     * 任务Id列表
     */
    TaskIds: Array<string>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeEvents请求参数结构体
 */
export interface DescribeEventsRequest {
    /**
     * 分页页码
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 过滤字段
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
}
/**
 * DescribeAllByFolderNew请求参数结构体
 */
export interface DescribeAllByFolderNewRequest {
    /**
     * 文件夹属性
     */
    Folder?: FolderOpsDto;
    /**
     * 工作流列表
     */
    Workflows?: Array<WorkflowCanvasOpsDto>;
    /**
     * 目标文件id
     */
    TargetFolderId?: string;
    /**
     * 关键字
     */
    KeyWords?: string;
    /**
     * 父文件id
     */
    ParentsFolderId?: string;
    /**
     * 拉取文件夹列表
     */
    IsAddWorkflow?: string;
    /**
     * 任务状态
     */
    TaskStates?: Array<string>;
    /**
     * 搜索类型
     */
    FindType?: string;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * BatchCreateVirtualTask使用，描述任务信息
 */
export interface BatchCreateVirtualTaskDTO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
}
/**
 * 审批列表信息
 */
export interface Apply {
    /**
     * 申请人id
     */
    ApplicantId?: string;
    /**
     * 申请人名称
     */
    ApplicantName?: string;
    /**
     * 审批备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 审批分类key
     */
    ApproveClassification?: string;
    /**
     * 审批单id
     */
    ApproveId?: string;
    /**
     * 审批类型key
     */
    ApproveType?: string;
    /**
     * 申请原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 审批时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveTime?: string;
    /**
     * 审批分类名称
     */
    ApproveClassificationName?: string;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 审批类型名称
     */
    ApproveTypeName?: string;
    /**
     * 审批异常或者失败信息
     */
    ErrorMessage?: string;
    /**
     * 申请名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplyName?: string;
    /**
     * 审批人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverId?: string;
    /**
     * 审批人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverName?: string;
    /**
     * 审批所属项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveProjectName?: string;
}
/**
 * DescribeEventListenerByTaskId请求参数结构体
 */
export interface DescribeEventListenerByTaskIdRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务Id
     */
    Key: string;
}
/**
 * DescribeInstanceLogList返回参数结构体
 */
export interface DescribeInstanceLogListResponse {
    /**
     * 日志列表
     */
    Data?: string;
    /**
     * 日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLogList?: Array<InstanceLogList>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProjectParamDs返回参数结构体
 */
export interface DeleteProjectParamDsResponse {
    /**
     * 结果 true 删除成功
  false 删除失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeParentTask请求参数结构体
 */
export interface DescribeParentTaskRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DescribeDependTasksNew请求参数结构体
 */
export interface DescribeDependTasksNewRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 上游/下游层级1-6级
     */
    Deep: number;
    /**
     * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
     */
    Up: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务工作流id
     */
    WorkflowId: string;
}
/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 规则ID
     */
    RuleId?: number;
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 规则名称
     */
    Name?: string;
    /**
     * 数据表ID
     */
    TableId?: string;
    /**
     * 规则模板ID
     */
    RuleTemplateId?: number;
    /**
     * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
     */
    Type?: number;
    /**
     * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性）
     */
    QualityDim?: number;
    /**
     * 源字段详细类型，int、string
     */
    SourceObjectDataTypeName?: string;
    /**
     * 源字段名称
     */
    SourceObjectValue?: string;
    /**
     * 检测范围 1.全表   2.条件扫描
     */
    ConditionType?: number;
    /**
     * 条件扫描WHERE条件表达式
     */
    ConditionExpression?: string;
    /**
     * 自定义SQL
     */
    CustomSql?: string;
    /**
     * 报警触发条件
     */
    CompareRule?: CompareRule;
    /**
     * 报警触发级别 1.低, 2.中, 3.高
     */
    AlarmLevel?: number;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 目标库Id
     */
    TargetDatabaseId?: string;
    /**
     * 目标表Id
     */
    TargetTableId?: string;
    /**
     * 目标过滤条件表达式
     */
    TargetConditionExpr?: string;
    /**
     * 源字段与目标字段关联条件on表达式
     */
    RelConditionExpr?: string;
    /**
     * 自定义模版sql表达式字段替换参数
     */
    FieldConfig?: RuleFieldConfig;
    /**
     * 目标字段名称  CITY
     */
    TargetObjectValue?: string;
    /**
     * 该规则适配的执行引擎
     */
    SourceEngineTypes?: Array<number | bigint>;
}
/**
 * FindAllFolder返回参数结构体
 */
export interface FindAllFolderResponse {
    /**
     * 文件夹列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderList?: Array<FolderDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MakeUpOpsTasks返回参数结构体
 */
export interface MakeUpOpsTasksResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInLongAgentList请求参数结构体
 */
export interface DescribeInLongAgentListRequest {
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * 采集器ID
     */
    AgentId?: string;
    /**
     * Agent Name
     */
    AgentName?: string;
    /**
     * 集群类型，1：TKE Agent，2：BOSS SDK，默认：1，3：CVM，4：自建服务器 【传多个用逗号分割】
     */
    AgentType?: number;
    /**
     * Agent状态(running运行中，initializing 操作中，failed心跳异常)
     */
    Status?: string;
    /**
     * Vpc Id
     */
    VpcId?: string;
    /**
     * 分页页码，从1开始，默认：1
     */
    PageIndex?: number;
    /**
     * 分页每页记录数，默认10
     */
    PageSize?: number;
    /**
     * 名称搜索是否开启模糊匹配，1：开启，0：不开启（精确匹配）
     */
    Like?: number;
    /**
     * agent类型【多个用逗号分隔】
     */
    AgentTypes?: string;
}
/**
 * DescribeCodeDetailV2返回参数结构体
 */
export interface DescribeCodeDetailV2Response {
    /**
     * 文件或任务详情响应信息
     */
    Data?: CodeDetailResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDevelopmentSpaceSupportType请求参数结构体
 */
export declare type DescribeDevelopmentSpaceSupportTypeRequest = null;
/**
 * DescribeScheduleInstance请求参数结构体
 */
export interface DescribeScheduleInstanceRequest {
    /**
     * 基线id
     */
    TaskId: string;
    /**
     * 任务实例数据时间
     */
    CurRunDate: string;
}
/**
 * 任务信息
 */
export interface TaskDsDTO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeDsVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: string;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtDsVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmDsVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskDsDTO>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<DependencyConfigDsDTO>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
    /**
     * 来源数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceId?: string;
    /**
     * 来源数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServiceType?: string;
    /**
     * 去向数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceId?: string;
    /**
     * 去向数据源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServiceType?: string;
    /**
     * 输入参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamInList?: Array<ParameterTaskInDsDto>;
    /**
     * 输出参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOutList?: Array<ParameterTaskOutDsDto>;
    /**
     * 任务文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskFolderId?: string;
}
/**
 * BatchDeleteTasksNew返回参数结构体
 */
export interface BatchDeleteTasksNewResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCodeSearchInfoV2请求参数结构体
 */
export interface DescribeCodeSearchInfoV2Request {
    /**
     * 搜索关键词
     */
    Keyword: string;
    /**
     * 要查询的搜索范围
     */
    SearchScope: string;
    /**
     * 页数
     */
    PageNumber: number;
    /**
     * 条数
     */
    PageSize: number;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 搜索范围列表
     */
    SearchScopes?: Array<string>;
    /**
     * 责任人ID列表
     */
    OwnerIds?: Array<string>;
    /**
     * 文件类型列表
     */
    FileTypes?: Array<string>;
    /**
     * 任务类型列表
     */
    TaskTypes?: Array<string>;
    /**
     * 更新时间范围：开始时间
     */
    StartTime?: string;
    /**
     * 更新时间范围：结束时间
     */
    EndTime?: string;
    /**
     * 开发态/生产态
     */
    Status?: string;
    /**
     * 工作流ID
     */
    WorkflowIds?: Array<string>;
    /**
     * 文件夹ID
     */
    FolderIds?: Array<string>;
    /**
     * 数据源ID
     */
    DatasourceIds?: Array<string>;
    /**
     * 文件夹路径
     */
    FolderPaths?: Array<string>;
    /**
     * 任务状态
     */
    TaskStatus?: Array<string>;
}
/**
 * SuspendIntegrationTask请求参数结构体
 */
export interface SuspendIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP)
     */
    Event?: string;
}
/**
 * DownloadSqlResult返回参数结构体
 */
export interface DownloadSqlResultResponse {
    /**
     * 下载结果对应的cos path
     */
    CosPath: string;
    /**
     * 下载结果对应的bucketName
     */
    CosBucketName: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cos token信息
 */
export interface CosTokenResponse {
    /**
     * token id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * token内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
    /**
     * 密钥id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * 密钥内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKey?: string;
    /**
     * 响应
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Response?: string;
    /**
     * 用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * 操作者uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUin?: string;
}
/**
 * DescribeDsParentFolderTree请求参数结构体
 */
export interface DescribeDsParentFolderTreeRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    FolderId?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     *  classification:分类展示  catalog:目录展示
     */
    DisplayType?: string;
}
/**
 * 规则维度数统计
 */
export interface RuleDimStat {
    /**
     * 总数
     */
    TotalCnt: number;
    /**
     * 维度统计数
     */
    DimCntList: Array<RuleDimCnt>;
}
/**
 * RerunScheduleInstances请求参数结构体
 */
export interface RerunScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * DescribeTaskInstances返回参数结构体
 */
export interface DescribeTaskInstancesResponse {
    /**
     * 无
     */
    Data: DescribeTaskInstancesData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameResourcePath返回参数结构体
 */
export interface RenameResourcePathResponse {
    /**
     * 资源路径重命名结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
    /**
     * 项目/工作空间id
     */
    ProjectId: string;
    /**
     * 页码
     */
    PageIndex: number;
    /**
     * 一页展示的条数
     */
    PageSize: number;
    /**
     * 周期列表（如天，一次性），可选
     */
    CycleList: Array<string>;
    /**
     * 责任人
     */
    OwnerList: Array<string>;
    /**
     * 跟之前保持一致
     */
    InstanceType: string;
    /**
     * 排序顺序（asc，desc）
     */
    Sort: string;
    /**
     * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
     */
    SortCol: string;
    /**
     * 类型列表（如python任务类型：30
  pyspark任务类型：31
  hivesql任务类型：34
  shell任务类型：35
  sparksql任务类型：36 jdbcsql任务类型：21 dlc任务类型：32），可选
     */
    TaskTypeList: Array<number | bigint>;
    /**
     * 状态列表（如成功 2，正在执行 1），可选
     */
    StateList: Array<number | bigint>;
    /**
     * 任务名称
     */
    Keyword?: string;
}
/**
 * 实例日志简述信息
 */
export interface InstanceLogInfo {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 尝试运行次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tries?: string;
    /**
     * 日志更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 日志所在节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSize?: string;
    /**
     * 文件名 含全路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginFileName?: string;
    /**
     * 日志创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 实例日志类型, run: 运行; kill: 终止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLogType?: string;
    /**
     * 任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 运行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CostTime?: string;
    /**
     * 实例状态 COMPLETED 完成 FAILED失败重试 EXPIRED失败 RUNNING运行中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: string;
    /**
     * 实例代码文件，为空表示对应代码文件不存在，可能是因为执行机未升级/对应类型任务无代码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeFileName?: string;
}
/**
 * 参数信息领域模型
 */
export interface ParameterInfoDsDto {
    /**
     * 唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 参数key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamKey?: string;
    /**
     * 参数类型project_self_constant,
  project_self_data_variable,   project_self_run_variable,
      project_system,   workflow_self_constant,   workflow_self_data_variable,
  workflow_self_run_variable,
  workflow_system,
  task
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamType?: string;
    /**
     * 参数归属
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamBelong?: string;
    /**
     * 参数周期运行值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDefine?: string;
    /**
     * 参数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamValue?: string;
    /**
     * 参数责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamOwner?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg?: string;
    /**
     * 参数调试运行值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDefineTest?: string;
    /**
     * 参数描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamDescription?: string;
}
/**
 * 查询任务实例列表
 */
export interface DescribeTaskInstancesData {
    /**
     * 实例列表
     */
    Items: Array<TaskInstanceInfo>;
    /**
     * 总条数
     */
    TotalCount: number;
    /**
     * 页号
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
}
/**
 * DescribeIntegrationStatisticsRecordsTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendsData: Array<IntegrationStatisticsTrendResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskLatestRunTime请求参数结构体
 */
export interface DescribeTaskLatestRunTimeRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 基准时间，非必填，如果不填，自动取当前的事件，如果要填，格式为 yyyy-MM-dd HH:mm:ss，如果格式不符合要求，则默认取当前时间
     */
    BaseTime?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 周期类型
     */
    CycleType?: string;
    /**
     * 自依赖类型
     */
    SelfDepend?: string;
    /**
     * TaskAction
     */
    TaskAction?: string;
    /**
     * 循环步长
     */
    CycleStep?: number;
    /**
     * 延迟时间
     */
    DelayTime?: number;
    /**
     * Cron表达式
     */
    CronTabExpression?: string;
    /**
     * 小时周期在一天中的开始时间
     */
    ExecutionStartTime?: string;
    /**
     * 小时周期在一天中的结束时间
     */
    ExecutionEndTime?: string;
}
/**
 * BatchCreateTaskVersionDs返回参数结构体
 */
export interface BatchCreateTaskVersionDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperateResultDs;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 代码匹配信息
 */
export interface CodeMatchInfo {
    /**
     * 行号
     */
    Number: number;
    /**
     * 行内容
     */
    Line: string;
    /**
     * 离线节点类型
     */
    NodeType: string;
}
/**
 * ExportProjectParamDs请求参数结构体
 */
export interface ExportProjectParamDsRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 域名
     */
    OriginDomain: string;
    /**
     * 发布范围 ALL, PUBLISH, PARTIAL 全量 增量 自选
     */
    Range?: string;
    /**
     * 增量发布时间 OffsetDateTime格式 2021-11-05T23:59:59Z
     */
    PublishTime?: string;
    /**
     * 自选导出参数
     */
    Params?: Array<string>;
}
/**
 * Spark SQL配置参数
 */
export interface GeneralTaskParam {
    /**
     * 通用任务参数类型,例：SPARK_SQL
     */
    Type: string;
    /**
     * 通用任务参数内容,直接作用于任务的参数。不同参数用;
  分割
     */
    Value: string;
}
/**
 * DescribeDiagnosticInfoByBaselineId返回参数结构体
 */
export interface DescribeDiagnosticInfoByBaselineIdResponse {
    /**
     * 基线任务dag
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeDiagnosticInfoResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户文件信息
 */
export interface UserFileDTO {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 文件类型，如 jar zip 等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件上传类型，资源管理为 resource
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileUploadType?: string;
    /**
     * 文件MD5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 文件大小，单位为字节
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 本地临时路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalTmpPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 文件拥有者名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 文件拥有者uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 文件深度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathDepth?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 本地临时压缩文件绝对路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipPath?: string;
    /**
     * 文件所属存储桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 文件所属存储桶的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
}
/**
 * DescribeTaskInParamDs请求参数结构体
 */
export interface DescribeTaskInParamDsRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * DescribeTableQualityDetails请求参数结构体
 */
export interface DescribeTableQualityDetailsRequest {
    /**
     * 统计日期
     */
    StatisticsDate: number;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 分页序号
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 过滤参数TableName、DatabaseId 、DatabaseName、OwnerUserName
     */
    Filters?: Array<Filter>;
    /**
     * 排序参数 排序方式 DESC 或者 ASC，表得分排序 TableScore
     */
    OrderFields?: Array<OrderField>;
    /**
     * 数据来源id
     */
    DatasourceId?: string;
    /**
     * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
     */
    ScoreType?: string;
}
/**
 * CreateTaskFolder请求参数结构体
 */
export interface CreateTaskFolderRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 文件夹名称
     */
    FolderName: string;
    /**
     * 工作量ID
     */
    WorkflowId: string;
    /**
     * 父文件夹ID
     */
    ParentFolderId?: string;
}
/**
 * BatchCreateIntegrationTaskAlarms请求参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsRequest {
    /**
     * 任务id
     */
    TaskIds: Array<string>;
    /**
     * 告警配置信息
     */
    TaskAlarmInfo: TaskAlarmInfo;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 质量评分
 */
export interface QualityScore {
    /**
     * 综合分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompositeScore: number;
    /**
     * 评分分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScoringDistribution: Array<TableScoreStatisticsInfo>;
    /**
     * 总表数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalTableNumber: number;
}
/**
 * KillScheduleInstances请求参数结构体
 */
export interface KillScheduleInstancesRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * DescribeDsNotSubmitTasksAndCanRunByWorkflow请求参数结构体
 */
export interface DescribeDsNotSubmitTasksAndCanRunByWorkflowRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
}
/**
 * CheckCustomFunctionPremise返回参数结构体
 */
export interface CheckCustomFunctionPremiseResponse {
    /**
     * Spark 是否安装
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SparkInstalled?: boolean;
    /**
     * Livy 是否安装
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LivyInstalled?: boolean;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFunctionTypes返回参数结构体
 */
export interface DescribeFunctionTypesResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Types?: Array<FunctionTypeOrKind>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchUpdateIntegrationTasks返回参数结构体
 */
export interface BatchUpdateIntegrationTasksResponse {
    /**
     * 操作成功的任务数
     */
    SuccessCount?: number;
    /**
     * 操作失败的任务数
     */
    FailedCount?: number;
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventDetail请求参数结构体
 */
export interface DescribeEventDetailRequest {
    /**
     * 事件id
     */
    EventId: number;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeRuleTemplate请求参数结构体
 */
export interface DescribeRuleTemplateRequest {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 规则模板Id
     */
    TemplateId?: number;
}
/**
 * BatchCreateTaskVersionAsync请求参数结构体
 */
export interface BatchCreateTaskVersionAsyncRequest {
    /**
     * 任务信息
     */
    Tasks: Array<BatchCreateTaskVersionDTO>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 是否自动运行
     */
    AutoRun?: boolean;
    /**
     * 告警方式:email-邮件;sms-短信;wecom-企业微信
     */
    AlarmWays?: string;
    /**
     * 告警对象:1-项目管理员，2-任务责任人
     */
    AlarmRecipientTypes?: string;
    /**
     * 是否需要校验父任务已经提交到调度
     */
    NeedCheckParentSubmitted?: boolean;
}
/**
 * BatchModifyOpsOwners返回参数结构体
 */
export interface BatchModifyOpsOwnersResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOperationOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskByCycleReport返回参数结构体
 */
export interface DescribeTaskByCycleReportResponse {
    /**
     * 任务周期增长趋势统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskByStatus>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsMakePlanTasks请求参数结构体
 */
export interface DescribeOpsMakePlanTasksRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 补录计划ID
     */
    PlanId: string;
    /**
     * 分页页码，默认值1
     */
    PageNumber?: number;
    /**
     * 分页大小，默认值10
     */
    PageSize?: number;
}
/**
 * 元数据表详细信息
 */
export interface TableInfo {
    /**
     * 表Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 表databaseName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginDatabaseName: string;
    /**
     * 表schemaName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginSchemaName: string;
}
/**
 * CreateIntegrationTask返回参数结构体
 */
export interface CreateIntegrationTaskResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIntegrationTasks返回参数结构体
 */
export interface DescribeIntegrationTasksResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfoSet?: Array<IntegrationTaskInfo>;
    /**
     * 任务总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProjectUsers返回参数结构体
 */
export interface DeleteProjectUsersResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集成离线任务实例信息
 */
export interface SchedulerTaskInstanceInfo {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 实例运行时间
     */
    CurRunDate: string;
}
/**
 * 补录计划
 */
export interface MakePlanOpsDto {
    /**
     * 补录计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanId?: string;
    /**
     * 补录计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MakeName?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 补录是否检查父任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckParent?: boolean;
    /**
     * 是否使用任务原有自依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SameSelfDependType?: boolean;
    /**
     * 并行度，在SameSelfDependType为false时生效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParallelNum?: number;
    /**
     * 补录实例生成周期是否修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SameCycle?: boolean;
    /**
     * 调度周期转换方式-原始周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceTaskCycle?: string;
    /**
     * 调度周期转换方式-目标周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetTaskCycle?: string;
    /**
     * 调度周期转换方式-目标周期类型指定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetTaskAction?: number;
    /**
     * 补录实例自定义参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MapParamList?: Array<StrToStrMap>;
    /**
     * 创建人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorId?: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 补录任务ID集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskIdList?: Array<string>;
    /**
     * 补录计划日期范围
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MakeDatetimeList?: Array<CreateMakeDatetimeInfo>;
    /**
     * 补录计划说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 补录指定的调度资源组（ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerResourceGroup?: string;
    /**
     * 补录指定的调度资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerResourceGroupName?: string;
    /**
     * 补录指定的集成资源组（ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntegrationResourceGroup?: string;
    /**
     * 补录指定的集成资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntegrationResourceGroupName?: string;
    /**
     * 补录计划任务数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCount?: number;
    /**
     * 补录计划实例完成百分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompletePercent?: number;
    /**
     * 补录计划实例成功百分数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessPercent?: number;
    /**
     * 补录检查父任务类型。取值范围：
  <li> NONE: 全部不检查 </li>
  <li> ALL: 检查全部上游父任务 </li>
  <li> MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 </li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckParentType?: string;
}
/**
 * 基础信息
 */
export interface ProjectBaseInfoOpsRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 项目标识
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 是否admin
     */
    IsAdmin?: boolean;
}
/**
 * DescribeRuleGroupSubscription请求参数结构体
 */
export interface DescribeRuleGroupSubscriptionRequest {
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * UpdateWorkflowInfo请求参数结构体
 */
export interface UpdateWorkflowInfoRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 操作者名称
     */
    OperatorName: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 责任人
     */
    Owner?: string;
    /**
     * 责任人id
     */
    OwnerId?: string;
    /**
     * 备注
     */
    WorkflowDesc?: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 所属文件夹id
     */
    FolderId?: string;
    /**
     * 工作流所属用户分组id  若有多个,分号隔开: a;b;c
     */
    UserGroupId?: string;
    /**
     * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
     */
    UserGroupName?: string;
    /**
     * 工作流参数列表
     */
    WorkflowParams?: Array<ParamInfo>;
    /**
     * 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。
     */
    GeneralTaskParams?: Array<GeneralTaskParam>;
}
/**
 * DescribeInLongAgentList返回参数结构体
 */
export interface DescribeInLongAgentListResponse {
    /**
     * 采集器信息列表
     */
    Items?: Array<InLongAgentDetail>;
    /**
     * 页码
     */
    PageIndex?: number;
    /**
     * 每页记录数
     */
    PageSize?: number;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 总页数
     */
    TotalPage?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件夹信息
 */
export interface Folder {
    /**
     * 文件ID
     */
    Id: string;
    /**
     * 文件夹名称
     */
    Name: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 所属项目id
     */
    ProjectId: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
}
/**
 * 表质量详情
 */
export interface TableQualityDetail {
    /**
     * 数据库id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId: string;
    /**
     * 数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName: string;
    /**
     * 表id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 表责任人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUserId: number;
    /**
     * 表责任人名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUserName: string;
    /**
     * 库得分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseScore: number;
    /**
     * 表得分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableScore: number;
    /**
     * 表环比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastPeriodRatio: number;
}
/**
 * 群机器人订阅配置
 */
export interface SubscribeWebHook {
    /**
     * 群机器人类型，当前支持飞书
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HookType?: string;
    /**
     * 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HookAddress?: string;
}
/**
 * SubmitIntegrationTask请求参数结构体
 */
export interface SubmitIntegrationTaskRequest {
    /**
     * 资源组Id
     */
    GroupId: string;
    /**
     * 资源所属region
     */
    ResourceRegion: string;
    /**
     * 资源所属bucket
     */
    RemotePath: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 资源所属bucket
     */
    ResourceBucket: string;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 高级运行临时参数
     */
    RunParams?: string;
}
/**
 * DeleteIntegrationNode返回参数结构体
 */
export interface DeleteIntegrationNodeResponse {
    /**
     * 删除返回是否成功标识
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataSourceInfoList请求参数结构体
 */
export interface DescribeDataSourceInfoListRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 页数
     */
    PageSize?: number;
    /**
     * 过滤条件（暂不支持）
     */
    Filters?: Filter;
    /**
     * 排序配置
     */
    OrderFields?: OrderField;
    /**
     * 数据源类型，必选（如MYSQL、DLC等）
     */
    Type?: string;
    /**
     * 数据源名称过滤
     */
    DatasourceName?: string;
}
/**
 * DescribeProjectParamDsPage请求参数结构体
 */
export interface DescribeProjectParamDsPageRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据时间
     */
    CurRunDate?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 关键字
     */
    KeyWords?: string;
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
}
/**
 * DescribeRuleGroupExecResultsByPageWithoutAuth返回参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageWithoutAuthResponse {
    /**
     * 规则组执行结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupExecResultPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOperateOpsTaskDatasource返回参数结构体
 */
export interface DescribeOperateOpsTaskDatasourceResponse {
    /**
     * 数据源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<SimpleDataSourceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AcquireLock返回参数结构体
 */
export interface AcquireLockResponse {
    /**
     * 资源唯一路径
     */
    ResourcePath?: string;
    /**
     * 锁持有者id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerId?: number;
    /**
     * 锁持有者displayName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockerName?: string;
    /**
     * 持有锁标志（true表示被自己锁定）
     */
    LockedByMe?: boolean;
    /**
     * 资源是否正在被编辑
     */
    EditFlag?: boolean;
    /**
     * 资源被锁定时间的时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockTime?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewWorkflowOwnerDs请求参数结构体
 */
export interface RenewWorkflowOwnerDsRequest {
    /**
     * 工作流ID
     */
    ProjectId: string;
    /**
     * 责任人
     */
    Owner: string;
    /**
     * 责任人ID
     */
    OwnerId: string;
    /**
     * 工作流ID列表
     */
    WorkflowIds: Array<string>;
}
/**
 * CreateTaskFolder返回参数结构体
 */
export interface CreateTaskFolderResponse {
    /**
     * 任务文件夹Id，null则创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInLongAgent请求参数结构体
 */
export interface DeleteInLongAgentRequest {
    /**
     * 采集器ID
     */
    AgentId: string;
    /**
     * WeData项目ID
     */
    ProjectId: string;
}
/**
 * DescribeRuleTablesByPage请求参数结构体
 */
export interface DescribeRuleTablesByPageRequest {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 分页序号
     */
    PageSize?: number;
    /**
     * 分页大小
     */
    PageNumber?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 排序条件
     */
    OrderFields?: Array<OrderField>;
}
/**
 * DescribeEventConsumeTasks请求参数结构体
 */
export interface DescribeEventConsumeTasksRequest {
    /**
     * 事件实例ID
     */
    EventCaseId: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数目
     */
    PageSize: number;
}
/**
 * DescribeDataSourceInfoList返回参数结构体
 */
export interface DescribeDataSourceInfoListResponse {
    /**
     * 总条数。
     */
    TotalCount?: number;
    /**
     * 数据源信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceSet?: Array<DatasourceBaseInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运维大屏实例状态统计和实例状态趋势
 */
export interface InstanceStatisticInfo {
    /**
     * 实例状态趋势状态统计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountList?: Array<number | bigint>;
    /**
     * 实例状态趋势时间分割
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeList?: Array<string>;
    /**
     * 实例状态标识：WAITING_RUNNING、KILLING、FAILED、FAILED_TRYING、SUCCEED 分别表示等待执行、正在终止、失败、失败重试、成功，用于实例状态分布和实例状态趋势
     */
    InstanceStatus?: string;
    /**
     * 用于实例状态分布计数
     */
    InstanceCount?: number;
    /**
     * 当前展示时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShowTime?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportTime?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
}
/**
 * MakeUpTasksNew请求参数结构体
 */
export interface MakeUpTasksNewRequest {
    /**
     * 补录的当前任务的taskId数组
     */
    TaskIdList: Array<string>;
    /**
     * 补录开始时间
     */
    StartTime: string;
    /**
     * 补录结束时间
     */
    EndTime: string;
    /**
     * 补录选项标识，1表示当前任务；2表示当前及下游任务；3表示下游任务
     */
    MakeUpType: number;
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * true: 检查父任务实例状态；false: 不检查父任务实例状态
     */
    CheckParent?: boolean;
}
/**
 * DescribeAllParamDs请求参数结构体
 */
export interface DescribeAllParamDsRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 脚本中的参数
     */
    OriginalParams?: Array<string>;
}
/**
 * DescribeOpsMakePlans请求参数结构体
 */
export interface DescribeOpsMakePlansRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 分页数，默认值1
     */
    PageNumber?: number;
    /**
     * 分页大小，默认值10
     */
    PageSize?: number;
    /**
     * 补录计划ID
     */
    PlanId?: string;
    /**
     * 补录计划名称
     */
    PlanName?: string;
    /**
     * 补录任务名称
     */
    TaskName?: string;
    /**
     * 补录任务ID
     */
    TaskId?: string;
    /**
     * 补录计划创建者
     */
    Creator?: string;
    /**
     * 补录计划最小创建时间
     */
    MinCreateTime?: string;
    /**
     * 补录计划最大创建时间
     */
    MaxCreateTime?: string;
}
/**
 * RenameResource返回参数结构体
 */
export interface RenameResourceResponse {
    /**
     * 资源重命名结果
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeleteTasksDs返回参数结构体
 */
export interface BatchDeleteTasksDsResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data?: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowCanvasOpLogs请求参数结构体
 */
export interface DescribeWorkflowCanvasOpLogsRequest {
    /**
     * 过滤器
     */
    Filter: DescribeWorkflowCanvasOplogRequestFilter;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 页号
     */
    PageNumber?: string;
    /**
     * 页大小
     */
    PageSize?: string;
}
/**
 * CheckIntegrationTaskNameExists返回参数结构体
 */
export interface CheckIntegrationTaskNameExistsResponse {
    /**
     * true表示存在，false表示不存在
     */
    Data: boolean;
    /**
     * 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复）
     */
    ExistsType: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleGroupExecResultsByPage请求参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageRequest {
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * 事件实例
 */
export interface EventCaseAuditLogOptDto {
    /**
     * 事件实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseId?: string;
    /**
     * 事件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventName?: string;
    /**
     * 事件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventType?: string;
    /**
     * 事件分割类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventSubType?: string;
    /**
     * 事件广播类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventBroadcastType?: string;
    /**
     * 事件实例存活时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TTL?: number;
    /**
     * 事件实例存活时间单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dimension?: string;
    /**
     * 事件实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 事件实例触发时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventTriggerTimestamp?: string;
    /**
     * 事件实例消费时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogTimestamp?: string;
    /**
     * 事件实例描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * DescribeRulesByPage请求参数结构体
 */
export interface DescribeRulesByPageRequest {
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
    /**
     * 项目ID
     */
    ProjectId?: string;
}
/**
 * ImportWorkflowZip返回参数结构体
 */
export interface ImportWorkflowZipResponse {
    /**
     * data
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportWorkflowXml请求参数结构体
 */
export interface ImportWorkflowXmlRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
    /**
     * 文件名称列表
     */
    FileNames: Array<string>;
}
/**
 * DescribeFieldBasicInfo请求参数结构体
 */
export interface DescribeFieldBasicInfoRequest {
    /**
     * 分页页码
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤字段
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段
     */
    OrderFields?: Array<OrderField>;
}
/**
 * DescribeStreamTaskLogList返回参数结构体
 */
export interface DescribeStreamTaskLogListResponse {
    /**
     * 是否是全量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListOver?: boolean;
    /**
     * 日志集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogContentList?: Array<LogContentInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据治理配置项
 */
export interface DlcDataGovernPolicy {
    /**
     * 数据排布治理项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RewriteDataPolicy?: DlcRewriteDataInfo;
    /**
     * 快照过期治理项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredSnapshotsPolicy?: DlcExpiredSnapshotsInfo;
    /**
     * 移除孤立文件治理项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoveOrphanFilesPolicy?: DlcRemoveOrphanFilesInfo;
    /**
     * 合并元数据Manifests治理项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MergeManifestsPolicy?: DlcMergeManifestsInfo;
    /**
     * 是否集成库规则：default（默认继承）、none（不继承）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InheritDataBase?: string;
    /**
     * 治理规则类型，Customize: 自定义；Intelligence: 智能治理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleType?: string;
    /**
     * 治理引擎
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GovernEngine?: string;
}
/**
 * BaselineDetailResponse
 */
export interface BaselineDetailResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineDto?: BaselineDto;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineCreateAlarmRuleRequest?: CreateAlarmRuleRequest;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNewAlarm?: boolean;
}
/**
 * DeleteIntegrationNode请求参数结构体
 */
export interface DeleteIntegrationNodeRequest {
    /**
     * 节点id
     */
    Id: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
    /**
     * 告警事件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmEventInfoList?: Array<AlarmEventInfo>;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyIntegrationNode返回参数结构体
 */
export interface ModifyIntegrationNodeResponse {
    /**
     * 节点id
     */
    Id: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckTaskPriorityDs返回参数结构体
 */
export interface CheckTaskPriorityDsResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 开发空间脚本类型信息
 */
export interface ScriptTypeInfo {
    /**
     * 脚本类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 脚本展示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisplayDesc?: string;
}
/**
 * DescribeProjectParamDs请求参数结构体
 */
export interface DescribeProjectParamDsRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据时间
     */
    CurRunDate?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 关键字
     */
    KeyWords?: string;
}
/**
 * DescribeWorkflowCanvasOperators请求参数结构体
 */
export interface DescribeWorkflowCanvasOperatorsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
}
/**
 * BatchCreateTaskVersion使用，描述任务信息
 */
export interface BatchCreateTaskVersionDTO {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * VersionRemark
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionRemark?: string;
    /**
     * 文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
}
/**
 * CreateTaskVersionDs请求参数结构体
 */
export interface CreateTaskVersionDsRequest {
    /**
     * 任务id
     */
    Task: BatchCreateTaskVersionDTO;
    /**
     * 是否需要校验父任务已经提交到调度
     */
    NeedCheckParentSubmitted: boolean;
    /**
     * 是否自动运行
     */
    AutoRun: boolean;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
    /**
     * 告警方式:email-邮件;sms-短信;wecom-企业微信
     */
    AlarmWays?: string;
    /**
     * 告警对象:1-项目管理员，2-任务责任人
     */
    AlarmRecipientTypes?: string;
}
/**
 * ModifyDsFolder返回参数结构体
 */
export interface ModifyDsFolderResponse {
    /**
     * true代表成功，false代表失败
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRuleTemplate请求参数结构体
 */
export interface ModifyRuleTemplateRequest {
    /**
     * 模板ID
     */
    TemplateId?: number;
    /**
     * 模板类型  1.系统模板   2.自定义模板
     */
    Type?: number;
    /**
     * 模板名称
     */
    Name?: string;
    /**
     * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
     */
    QualityDim?: number;
    /**
     * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
     */
    SourceObjectType?: number;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 源端对应的引擎类型
     */
    SourceEngineTypes?: Array<number | bigint>;
    /**
     * 是否关联其它库表
     */
    MultiSourceFlag?: boolean;
    /**
     * SQL 表达式
     */
    SqlExpression?: string;
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 是否添加where参数
     */
    WhereFlag?: boolean;
}
/**
 * DescribeCustomFunctionVersionList返回参数结构体
 */
export interface DescribeCustomFunctionVersionListResponse {
    /**
     * 函数提交版本列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Versions?: Array<FunctionVersion>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleTemplatesByPage返回参数结构体
 */
export interface DescribeRuleTemplatesByPageResponse {
    /**
     * 结果
     */
    Data: RuleTemplatePage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例日志实体
 */
export interface InstanceLog {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
    /**
     * 尝试运行次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tries: string;
    /**
     * 日志更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate: string;
    /**
     * 日志所在节点
     */
    BrokerIp: string;
    /**
     * 文件名  含全路径
     */
    OriginFileName: string;
    /**
     * 日志创建时间
     */
    CreateTime: string;
    /**
     * 实例日志类型, run: 运行; kill: 终止
     */
    InstanceLogType: string;
    /**
     * 运行耗时
     */
    CostTime: number;
}
/**
 * GetAdvanceRunParams返回参数结构体
 */
export interface GetAdvanceRunParamsResponse {
    /**
     * 接口调用返回状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 接口调用返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 最近一次测试运行记录信息任务
 */
export interface LatestTestRunInfoTask {
    /**
     * 任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 记录Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId?: string;
    /**
     * 当前时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurRunDate?: string;
    /**
     * 请求任务编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestTaskId?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus?: string;
    /**
     * 作业编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 创建记录用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUser?: string;
    /**
     * 项目编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 作业序列编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SerialNo?: string;
}
/**
 * DeleteLink请求参数结构体
 */
export interface DeleteLinkRequest {
    /**
     * 当前项目id
     */
    ProjectId: string;
    /**
     * 边的源节点
     */
    TaskFrom: string;
    /**
     * 边的目标节点
     */
    TaskTo: string;
    /**
     * 当前工作流id
     */
    WorkflowId: string;
    /**
     * 边id
     */
    Id: string;
    /**
     * 请求来源，WEB 前端；CLIENT 客户端
     */
    RequestFromSource?: string;
}
/**
 * CreateWorkflowDs请求参数结构体
 */
export interface CreateWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流名称
     */
    WorkflowName: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
    /**
     * 工作流描述
     */
    WorkflowDesc?: string;
}
/**
 * 任务类型
 */
export interface TaskTypeDsVO {
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * TypeDesc描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeDesc?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 服务器类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServerType?: string;
    /**
     * 目标服务器类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServerType?: string;
    /**
     * RunJarName名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunJarName?: string;
    /**
     * Killable参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KillAble?: number;
    /**
     * TypeSort类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeSort?: string;
    /**
     * InCharge参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 节点对应任务类型运行上限（暂时不考虑）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerParallelism?: number;
    /**
     * 每个任务运行上限（暂时不考虑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskParallelism?: number;
    /**
     * 补录和重跑上限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DoRedoParallelism?: number;
    /**
     * 0 为不可创建任务; >0 可创建任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DowngradePriorityTries?: number;
    /**
     * 重试等待时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 重试次数（在任务属性配置中设置）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryLimit?: number;
    /**
     * DefaultAliveWait参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultAliveWait?: number;
    /**
     * PollingSeconds秒数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PollingSeconds?: number;
    /**
     * 参数列表xml
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamList?: string;
    /**
     * TaskTypeExts参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtension?: Array<TaskTypeExtParamDsVO>;
    /**
     * 对应文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileType?: string;
    /**
     * 是否选择脚本路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectFilePath?: boolean;
    /**
     * classpath是否要排除掉common-lib，默认是0不排除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeCommonLib?: boolean;
    /**
     * runner任务完成后需要触发的hook
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostHooks?: string;
}
/**
 * DeleteDsEventPublisher返回参数结构体
 */
export interface DeleteDsEventPublisherResponse {
    /**
     * 是否成功，如果用户未配置发布者返回false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadAdvanceRunParams返回参数结构体
 */
export interface UploadAdvanceRunParamsResponse {
    /**
     * 接口返回状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 接口返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIntegrationTask请求参数结构体
 */
export interface DescribeIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型，201: 实时集成任务,   202：离线集成任务，不传默认值为201 实时任务类型
     */
    TaskType?: number;
    /**
     * 提交版本号
     */
    InstanceVersion?: number;
}
/**
 * DescribeParentTask返回参数结构体
 */
export interface DescribeParentTaskResponse {
    /**
     * 任务详情1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<DependencyConfigDsDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetResourceCosPath返回参数结构体
 */
export interface GetResourceCosPathResponse {
    /**
     * cos 路径列表
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能运维事件详情
 */
export interface EventDto {
    /**
     * 事件id
     */
    Id: number;
    /**
     * 基线、任务实例id
     */
    InstanceId: string;
    /**
     * 产生事件时间
     */
    EventTime: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 事件状态.取值范围:
  
  - new:表示新建
   
  - processing:表示处理中
     */
    EventStatus: string;
    /**
     * 事件类别/(基线or任务).取值范围:
  
  - baseline: 表示基线
  
  - task: 表示任务
     */
    EventType: string;
    /**
     * 是否告警
     */
    IsAlarm: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 所属任务/基线的名称
     */
    BelongTo?: string;
    /**
     * 基线、任务id
     */
    BaselineId?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 当前用户uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserUin?: string;
    /**
     * 主账号uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
}
/**
 * 工作流版本信息
 */
export interface WorkflowVersionInfo {
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionNum?: string;
    /**
     * 版本编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: string;
    /**
     * 提交人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Committer?: string;
    /**
     * 提交时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CommitTime?: string;
    /**
     * 提交信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CommitDesc?: string;
    /**
     * COS地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosUrl?: string;
}
/**
 * 上游节点字段信息
 */
export interface SourceFieldInfo {
    /**
     * 字段名称
     */
    FieldName?: string;
    /**
     * 字段类型
     */
    FieldType?: string;
    /**
     * 字段别名
     */
    Alias?: string;
    /**
     * 字段描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Comment?: string;
}
/**
 * ReplaceProjectParamVersionDs请求参数结构体
 */
export interface ReplaceProjectParamVersionDsRequest {
    /**
     * 版本
     */
    MyVersion?: number;
    /**
     * 项目id
     */
    ProjectId?: string;
}
/**
 * AnalyzeDependentTasks返回参数结构体
 */
export interface AnalyzeDependentTasksResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskDataRegistry>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyWorkflowDs请求参数结构体
 */
export interface CopyWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 文件夹ID
     */
    FolderId: string;
    /**
     * 工作流名称
     */
    WorkflowName?: string;
    /**
     * 工作流描述
     */
    WorkflowDesc?: string;
}
/**
 * 操作结果
 */
export interface OperateResult {
    /**
     * 操作结果；true表示成功；false表示失败
     */
    Result: boolean;
    /**
     * 错误编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorId: string;
    /**
     * 操作信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDesc: string;
}
/**
 * TriggerDsEvent返回参数结构体
 */
export interface TriggerDsEventResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOpsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 任务名
     */
    TaskName: string;
    /**
     * 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
     */
    TaskType: number;
    /**
     * 扩展属性
     */
    TaskExt?: Array<TaskExtInfo>;
}
/**
 * UpdateBatchTaskParameter请求参数结构体
 */
export interface UpdateBatchTaskParameterRequest {
    /**
     * 1
     */
    TaskIds: Array<string>;
    /**
     * DLC任务参数
     */
    DlcParameterInfo?: UpdateBatchTaskParameterDTO;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * TCHouse-X任务参数
     */
    TCHouseXTaskParameter?: TCHouseXTaskParameter;
    /**
     * SparkSQL或者PySpark任务参数
     */
    SparkParameterInfo?: SparkParameterDTO;
}
/**
 * 【项目克隆任务模式】依赖任务信息
 */
export interface DependencyTaskDTO {
    /**
     * 已选任务id
     */
    SelectedTaskId?: string;
    /**
     * 已选任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectedTaskName?: string;
    /**
     * 依赖任务id
     */
    DependencyTaskId?: string;
    /**
     * 依赖任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyTaskName?: string;
    /**
     * 依赖任务是否跨项目
     */
    CrossProject?: boolean;
    /**
     * 依赖任务对应项目id
     */
    DependencyProjectId?: string;
    /**
     * 依赖任务对应项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyProjectName?: string;
    /**
     * 依赖任务虚拟标识
     */
    DependencyTaskVirtualFlag?: boolean;
    /**
     * 边依赖标识
     */
    LinkDependency?: boolean;
    /**
     * 已选任务虚拟标识
     */
    SelectedTaskVirtualFlag?: boolean;
    /**
     * 依赖任务工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyTaskWorkflowName?: string;
}
/**
 * 表字段信息
 */
export interface SearchColumnDocVO {
    /**
     * 字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 字段中文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChineseName?: string;
    /**
     * 字段类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 字段类型长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Length?: number;
    /**
     * 字段类型精度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Precision?: number;
    /**
     * 字段类型scale
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scale?: number;
    /**
     * 字段默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
    /**
     * 字段描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 字段的顺序
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Position?: number;
    /**
     * 是否为分区字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPartition?: boolean;
    /**
     * 列上的索引类型 主键: PRI,唯一索引: UNI,一般索引: MUL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnKey?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifiedTime?: string;
}
/**
 * TriggerDsEvent请求参数结构体
 */
export interface TriggerDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件实例信息
     */
    EventCaseList?: Array<EventCaseDTO>;
    /**
     * 事件实例信息(连续时间)
     */
    EventBatchCaseList?: Array<EventBatchCaseDTO>;
}
/**
 * UpdateBatchTaskParams返回参数结构体
 */
export interface UpdateBatchTaskParamsResponse {
    /**
     * 批量操作返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchTaskOperateNew;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDependTaskLists返回参数结构体
 */
export interface DescribeDependTaskListsResponse {
    /**
     * 删除结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskOpsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskInstanceReportDetail返回参数结构体
 */
export interface DescribeTaskInstanceReportDetailResponse {
    /**
     * 任务实例运行指标概览
     */
    Summary: InstanceReportSummary;
    /**
     * 任务实例读取节点运行指标
     */
    ReadNode: InstanceReportReadNode;
    /**
     * 任务实例写入节点运行指标
     */
    WriteNode: InstanceReportWriteNode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流信息，分页
 */
export interface WorkflowDsDTOPage {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalItems?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPages?: number;
    /**
     * 当前页数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPageItems?: number;
    /**
     * 当前页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPage?: number;
    /**
     * 页大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<WorkflowDsDTO>;
}
/**
 * SubmitWorkflow请求参数结构体
 */
export interface SubmitWorkflowRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 工作流id
     */
    WorkflowId: string;
    /**
     * 提交的版本备注
     */
    VersionRemark: string;
    /**
     * 是否启动调度
     */
    StartScheduling: boolean;
}
/**
 * ImportTableData请求参数结构体
 */
export interface ImportTableDataRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据源id
     */
    DatasourceId: number;
    /**
     * 数据表基本信息
     */
    TableRequest: TableHybrisReq;
    /**
     * 列分隔符
  0， \u0001
  1, |
  2, 空格
  3，分号
  4，逗号
     */
    ColumnDelimiter: string;
    /**
     * 1 是， 0 否
     */
    HeaderLine: number;
    /**
     * CSV序列化字段域符,列引号，
  0， 单引号
  1，双引号
     */
    Quote: string;
    /**
     * 源数据存储路径(如cos，需带上桶名)
     */
    DatasourcePath: string;
    /**
     * 数据源存储类型（目前仅支持COS，CSP）
     */
    StorageDataSourceType: string;
    /**
     * 文件格式（目前仅支持CSV,TSV）
     */
    FileFormat: string;
    /**
     * 导入表类型（目前仅支持HIVE）
     */
    ImportTableType: string;
    /**
     * 数据源类型（目前仅支持HIVE）
     */
    MsType: string;
    /**
     * 表描述
     */
    Description?: string;
    /**
     * nameCn中文名
     */
    NameCn?: string;
    /**
     * 表权限类型：0: owner和项目所有成员都有权限 1: 仅owner和项目管理员有权限
     */
    Privilege?: number;
    /**
     * CSV序列化转义符
     */
    Escape?: string;
    /**
     * 空值格式
     */
    NullFormat?: string;
    /**
     * 文件编码方式 UTF-8/GBK
     */
    FileEncode?: string;
    /**
     * 桶名， cos存储是必传
     */
    BucketName?: string;
}
/**
 * DescribeTaskLockStatus返回参数结构体
 */
export interface DescribeTaskLockStatusResponse {
    /**
     * 任务锁状态信息
     */
    TaskLockStatus: TaskLockStatus;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsEventDetail请求参数结构体
 */
export interface DescribeDsEventDetailRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 是否展示监听者任务信息
     */
    DisplayTask?: boolean;
}
/**
 * RemoveWorkflowDs请求参数结构体
 */
export interface RemoveWorkflowDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkflowId: string;
    /**
     * 是否删除脚本
     */
    DeleteScript?: string;
    /**
     * 删除是否通知下游
     */
    OperateIsInform?: string;
    /**
     * 是否终止进行中的任务
     */
    DeleteMode?: string;
}
/**
 * BatchKillIntegrationTaskInstances请求参数结构体
 */
export interface BatchKillIntegrationTaskInstancesRequest {
    /**
     * 实例信息
     */
    Instances: Array<SchedulerTaskInstanceInfo>;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * ImportDsEvent请求参数结构体
 */
export interface ImportDsEventRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件名称
     */
    FileCos?: string;
    /**
     * 桶名
     */
    BucketName?: string;
    /**
     * cos地域
     */
    CosRegion?: string;
    /**
     * 是否强制刷新
     */
    ForceUpdate?: boolean;
    /**
     * 共享存储临时文件名称，详情可以见 UploadFileDs 接口，该参数从 UploadFileDs 中的 TargetFileName，不能为空
     */
    FileName?: string;
}
/**
 * DeleteFilePath返回参数结构体
 */
export interface DeleteFilePathResponse {
    /**
     * 文件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileList?: Array<UserFileInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 错误处理结果信息
 */
export interface FailMessage {
    /**
     * 数据唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
}
/**
 * DescribeDependTasksDevDs返回参数结构体
 */
export interface DescribeDependTasksDevDsResponse {
    /**
     * 画布任务和链接信息
     */
    Data?: CanvasInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchModifyOwnersNew返回参数结构体
 */
export interface BatchModifyOwnersNewResponse {
    /**
     * 返回批量操作成功个数、失败个数、操作总数
     */
    Data: BatchOperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTaskOutParamDs返回参数结构体
 */
export interface CreateTaskOutParamDsResponse {
    /**
     * 返回结果
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsEventPublisher返回参数结构体
 */
export interface DescribeDsEventPublisherResponse {
    /**
     * 发布者信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventPublisherDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskInfo返回参数结构体
 */
export interface ModifyTaskInfoResponse {
    /**
     * 执行结果
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeColumnsMeta返回参数结构体
 */
export interface DescribeColumnsMetaResponse {
    /**
     * 分页返回的
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnMetaSet: Array<ColumnMeta>;
    /**
     * 总记录数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询实例条件(新)
 */
export interface SearchConditionNew {
    /**
     * 查询框架，必选
     */
    Instance: SearchConditionInstanceNew;
    /**
     * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
     */
    Keyword?: string;
    /**
     * 排序顺序（asc，desc）
     */
    Sort?: string;
    /**
     * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
     */
    SortCol?: string;
}
/**
 * DescribeProjectParamVersionDs返回参数结构体
 */
export interface DescribeProjectParamVersionDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterVersionDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResumeIntegrationTask请求参数结构体
 */
export interface ResumeIntegrationTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP)
     */
    Event?: string;
    /**
     * 额外参数
     */
    ExtConfig?: Array<RecordField>;
    /**
     * 前端操作类型描述
     */
    EventDesc?: string;
}
/**
 * ModifyApproveStatus请求参数结构体
 */
export interface ModifyApproveStatusRequest {
    /**
     * 审批单ids
     */
    ApproveIds?: Array<string>;
    /**
     * 审批备注
     */
    Remark?: string;
    /**
     * 状态
     */
    Status?: string;
}
/**
 * DescribeRealTimeTaskInstanceNodeInfo请求参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoRequest {
    /**
     * 实时任务id
     */
    TaskId: string;
    /**
     * 工程id
     */
    ProjectId: string;
}
/**
 * DescribeDependencyWorkflowForProjectClone返回参数结构体
 */
export interface DescribeDependencyWorkflowForProjectCloneResponse {
    /**
     * 项目克隆-依赖工作流信息列表
     */
    Data?: Array<DependencyWorkflowDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkflowListByProjectId请求参数结构体
 */
export interface DescribeWorkflowListByProjectIdRequest {
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 表的元数据信息
 */
export interface TableMeta {
    /**
     * 表的全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId: string;
    /**
     * 表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerName: string;
    /**
     * 数据源全局唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId: number;
    /**
     * 所属集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName: string;
    /**
     * 数据源名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceName: string;
    /**
     * 数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName: string;
    /**
     * 表路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TablePath: string;
    /**
     * 表中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableNameCn: string;
    /**
     * 元数据租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreId: number;
    /**
     * 技术类型，可用值:HIVE,MYSQL,KAFKA, HBASE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetastoreType: string;
    /**
     * 表描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 列分隔符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnSeparator: string;
    /**
     * 存储格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageFormat: string;
    /**
     * 存储量，字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSize: number;
    /**
     * 表类型，如hive MANAGED_TABLE;EXTERNAL_TABLE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableType: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 最近数据变更时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime: string;
    /**
     * 最近DDL变更时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DdlModifyTime: string;
    /**
     * 数据最后访问时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastAccessTime: string;
    /**
     * 所属项目英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName: string;
    /**
     * 所属数据目录id（可能多个）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizCatalogIds: Array<string>;
    /**
     * 所属数据目录（可能多个）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizCatalogNames: Array<string>;
    /**
     * true已收藏/false表示未收藏状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasFavorite: boolean;
    /**
     * 生命周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LifeCycleTime: number;
    /**
     * 存储量，已转为适合的单位展示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageSizeWithUnit: string;
    /**
     * 数据源引擎的实例ID：如EMR集群实例ID/数据源实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 数据来源技术类型：HIVE/MYSQL/HBASE/KAFKA等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TechnologyType: string;
    /**
     * 表英文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableNameEn: string;
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * Kafka Topic 分区数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Partitions: string;
    /**
     * Kafka Topic 副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicationFactor: string;
    /**
     * 所属项目英中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectDisplayName: string;
    /**
     * 数据最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataModifyTime: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 当前用户是否有管理员权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasAdminAuthority: boolean;
    /**
     * 数据源展示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceDisplayName: string;
    /**
     * 数据库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId: string;
    /**
     * 租户下对表的收藏总次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FavoriteCount: number;
    /**
     * 租户下对表的点赞总次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LikeCount: number;
    /**
     * true已点赞/false表示未点赞状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasLike: boolean;
    /**
     * 表的资产评分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TablePropertyScore: TablePropertyScore;
    /**
     * 表的热度值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableHeat: TableHeat;
    /**
     * 数据源ownerProjectId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectId: string;
    /**
     * 表负责人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableOwnerId: string;
    /**
     * 系统源-CLUSTER, DB-自定义源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceCategory?: string;
    /**
     * 表字段信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Columns?: Array<SearchColumnDocVO>;
}
/**
 * DescribeAlarmEvents请求参数结构体
 */
export interface DescribeAlarmEventsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 当前页
     */
    PageNumber: number;
    /**
     * 每页记录数
     */
    PageSize: number;
    /**
     * 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord)
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段（AlarmTime）
     */
    OrderFields?: Array<OrderField>;
    /**
     * 类型(201表示实时，202表示离线)
     */
    TaskType?: number;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
     */
    MonitorType?: number;
}
/**
 * BooleanResponse
 */
export interface BooleanResponse {
    /**
     * 是否成功
     */
    Success?: boolean;
    /**
     * 失败返回提示信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 基线Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaselineId?: number;
    /**
     * 错误码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code?: string;
}
/**
 * DeleteProjectParamDs请求参数结构体
 */
export interface DeleteProjectParamDsRequest {
    /**
     * 参数名
     */
    ParamKey: string;
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 概览趋势结果
 */
export interface RuleExecDateStat {
    /**
     * 统计日期
     */
    StatDate: string;
    /**
     * 告警数
     */
    AlarmCnt: number;
    /**
     * 阻塞数
     */
    PipelineCnt: number;
}
/**
 * EditBaseline返回参数结构体
 */
export interface EditBaselineResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BooleanResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDsEvent返回参数结构体
 */
export interface DeleteDsEventResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: BatchOpsDTO;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据源对象
 */
export interface DataSourceInfo {
    /**
     * 若数据源列表为绑定数据库，则为db名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 数据源描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 数据源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID?: number;
    /**
     * 数据源引擎的实例ID，如CDB实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance?: string;
    /**
     * 数据源名称，在相同SpaceName下，数据源名称不能为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 数据源引擎所属区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 数据源类型:枚举值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 数据源所属的集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 应用ID AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 业务侧数据源的配置信息扩展
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizParams?: string;
    /**
     * 数据源类别：绑定引擎、绑定数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Category?: string;
    /**
     * 数据源展示名，为了可视化查看
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Display?: string;
    /**
     * 数据源责任人账号ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccount?: string;
    /**
     * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: string;
    /**
     * 数据源数据源的可见性，1为可见、0为不可见。默认为1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 数据源责任人账号名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerAccountName?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 归属项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectId?: string;
    /**
     * 归属项目Name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectName?: string;
    /**
     * 归属项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerProjectIdent?: string;
    /**
     * 授权项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorityProjectName?: string;
    /**
     * 授权用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorityUserName?: string;
    /**
     * 是否有编辑权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Edit?: boolean;
    /**
     * 是否有授权权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Author?: boolean;
    /**
     * 是否有转交权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deliver?: boolean;
    /**
     * 数据源状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceStatus?: string;
    /**
     * 时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * Params json字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamsString?: string;
    /**
     * BizParams json字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizParamsString?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifiedTime?: number;
    /**
     * 数据源页面展示类型，与Type对应
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShowType?: string;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务告警状态
     */
    TaskAlarmStatus?: number;
}
/**
 * RegisterEventListener请求参数结构体
 */
export interface RegisterEventListenerRequest {
    /**
     * 关键字，如果是任务，则传任务Id
     */
    Key: string;
    /**
     * 事件名称
     */
    EventName: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 事件类型，默认 REST_API
     */
    Type?: string;
    /**
     * 配置信息，比如最长等待时间1天配置json：{"maxWaitEventTime":1,"maxWaitEventTimeUnit":"DAYS"}
     */
    Properties?: string;
}
/**
 * CheckIntegrationNodeNameExists返回参数结构体
 */
export interface CheckIntegrationNodeNameExistsResponse {
    /**
     * 返回true代表存在，返回false代表不存在
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFathers请求参数结构体
 */
export interface DescribeFathersRequest {
    /**
     * 实例列表
     */
    Instances?: Array<InstanceOpsDto>;
    /**
     * 检查父任务类型, true: 检查父任务; false: 不检查父任务
     */
    CheckFather?: boolean;
    /**
     * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
     */
    RerunType?: string;
    /**
     * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
     */
    DependentWay?: string;
    /**
     * 重跑忽略事件监听与否
     */
    SkipEventListening?: boolean;
    /**
     * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
     */
    SonInstanceType?: string;
    /**
     * 查询条件
     */
    SearchCondition?: InstanceApiOpsRequest;
    /**
     * 访问类型
     */
    OptType?: string;
    /**
     * 操作者名称
     */
    OperatorName?: string;
    /**
     * 操作者id
     */
    OperatorId?: string;
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 项目标志
     */
    ProjectIdent?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 数据总数
     */
    Count?: number;
    /**
     * 基础请求信息
     */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /**
     * 是否计算总数
     */
    IsCount?: boolean;
}
/**
 * 资管管理-路径返回键值对
 */
export interface NewPathDTO {
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 是否为叶子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLeaf?: boolean;
    /**
     * 资源 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * 远程路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 文件扩展名类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * MD5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MD5Value?: string;
    /**
     * 所有者名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 更新用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 更新用户 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 创建日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 更新日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * cos 桶名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * cos 地区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 额外信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 子节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<NewPathDTO>;
    /**
     * cos 全路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullPath?: string;
}
/**
 * 任务执行脚本
 */
export interface TaskScriptContent {
    /**
     * 脚本内容 base64编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptContent: string;
}
/**
 * DescribeDrInstancePage请求参数结构体
 */
export interface DescribeDrInstancePageRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务来源 ADHOC || WORKFLOW
     */
    TaskSource: string;
    /**
     * 索引页码
     */
    PageIndex?: number;
    /**
     * 页面大小
     */
    PageSize?: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 提交开始时间 yyyy-MM-dd HH:mm:ss
     */
    StartTime?: string;
    /**
     * 提交结束时间 yyyy-MM-dd HH:mm:ss
     */
    EndTime?: string;
    /**
     * 文件夹id
     */
    FolderIds?: Array<string>;
    /**
     * 工作流id
     */
    WorkflowIds?: Array<string>;
    /**
     * 只看我的
     */
    JustMe?: boolean;
    /**
     * 任务类型
     */
    TaskTypes?: Array<string>;
    /**
     * 试运行提交人userId列表
     */
    SubmitUsers?: Array<string>;
    /**
     * 试运行状态
     */
    StatusList?: Array<string>;
}
/**
 * 规则组监控业务视图
 */
export interface RuleGroupMonitor {
    /**
     * 规则组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleGroupId?: number;
    /**
     * 表guid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 数据源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatasourceId?: number;
    /**
     * 数据库guid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseId?: string;
    /**
     * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorType?: number;
    /**
     * 监控状态 0.false 1.true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MonitorStatus?: number;
    /**
     * 规则组创建人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUserId?: number;
    /**
     * 规则组创建人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUserName?: string;
    /**
     * 规则创建时间 yyyy-MM-dd HH:mm:ss
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * 【项目克隆任务模式】任务分页返回数据
 */
export interface CloneTaskModePageInfoInfo {
    /**
     * item 总数量
     */
    TotalItems?: number;
    /**
     * 总页数
     */
    TotalPages?: number;
    /**
     * 当前页码
     */
    CurrentPage?: number;
    /**
     * 每页大小
     */
    PageSize?: number;
    /**
     * 当前页实际 item 数量
     */
    CurrentPageItems?: number;
    /**
     * 任务列表信息-项目克隆
     */
    Items?: Array<CloneTaskModeInfo>;
}
/**
 * 脚本实体类数组
 */
export interface DeleteUserFileDTO {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 拓展类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileExtensionType?: string;
    /**
     * 文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * md5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5Value?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 上传时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 本地路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalPath?: string;
    /**
     * cos路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemotePath?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerName?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 路径深度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathDepth?: number;
    /**
     * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 拓展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 本地临时路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalTempPath?: string;
    /**
     * zip路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipPath?: string;
    /**
     * cos桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * cos地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 删除人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteName?: string;
    /**
     * 删除人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteOwner?: string;
    /**
     * 操作人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 操作人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorName?: string;
}
/**
 * 实时任务实例当前的节点信息
 */
export interface RealTimeTaskInstanceNodeInfo {
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName: string;
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 实时任务实例节点信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNodeInfoList: Array<InstanceNodeInfo>;
}
/**
 * ModifyDimensionWeight返回参数结构体
 */
export interface ModifyDimensionWeightResponse {
    /**
     * 更新权重是否成功
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableScoreTrend返回参数结构体
 */
export interface DescribeTableScoreTrendResponse {
    /**
     * 表得分趋势
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: QualityScoreTrend;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeExecutionLog请求参数结构体
 */
export interface DescribeExecutionLogRequest {
    /**
     * 任务实例Id
     */
    InstanceId: string;
    /**
     * 任务提交记录Id
     */
    RecordId: number;
    /**
     * 子任务记录id
     */
    DetailId: number;
}
/**
 * CreateOrUpdateResource返回参数结构体
 */
export interface CreateOrUpdateResourceResponse {
    /**
     * 响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<UserFileDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTaskScript请求参数结构体
 */
export interface ModifyTaskScriptRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 脚本内容 base64编码
     */
    ScriptContent?: string;
    /**
     * 集成任务脚本配置
     */
    IntegrationNodeDetails?: Array<IntegrationNodeDetail>;
}
/**
 * RuleTemplatePage 结果
 */
export interface RuleTemplatePage {
    /**
     * 记录数
     */
    TotalCount: number;
    /**
     * 模版列表
     */
    Items: Array<RuleTemplate>;
}
/**
 * CommitWorkflow请求参数结构体
 */
export interface CommitWorkflowRequest {
    /**
     * 项目编号
     */
    ProjectId: string;
    /**
     * 工作流编号
     */
    WorkflowId: string;
    /**
     * 提交信息
     */
    CommitDesc: string;
}
/**
 * DescribeTableScoreTrend请求参数结构体
 */
export interface DescribeTableScoreTrendRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 开始时间 秒级时间戳
     */
    StatisticsStartDate: number;
    /**
     * 结束时间 秒级时间戳
     */
    StatisticsEndDate: number;
    /**
     * 表id
     */
    TableId: string;
    /**
     * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
     */
    ScoreType?: string;
}
/**
 * DescribeTaskByStatusReport请求参数结构体
 */
export interface DescribeTaskByStatusReportRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 时间类型
     */
    Type?: string;
    /**
     * 类型
     */
    TaskType?: string;
    /**
     * 类型名称
     */
    TypeName?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 无
     */
    AggregationUnit?: string;
    /**
     * 无
     */
    CycleUnit?: string;
    /**
     * 无
     */
    Status?: string;
    /**
     * 无
     */
    InCharge?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
}
/**
 * DescribeBaselineInstances请求参数结构体
 */
export interface DescribeBaselineInstancesRequest {
    /**
     * 分页页码
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
    /**
     * 过滤字段
     */
    Filters: Array<Filter>;
}
/**
 * DescribeRealTimeTaskInstanceNodeInfo返回参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoResponse {
    /**
     * 实时任务实例节点相关信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTimeTaskInstanceNodeInfo: RealTimeTaskInstanceNodeInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClearRecycleTask请求参数结构体
 */
export interface ClearRecycleTaskRequest {
    /**
     * 项目id
     */
    ProjectId: string;
}
/**
 * 开发空间目录树节点
 */
export interface PathTreeNode {
    /**
     * 唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Title?: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 父节点唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 是否叶子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsLeaf?: boolean;
    /**
     * 目录树节点参数列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: PathTreeNodeParams;
    /**
     * 子节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<PathTreeNode>;
}
/**
 * DescribeBatchOperateTask请求参数结构体
 */
export interface DescribeBatchOperateTaskRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 页码
     */
    Page: string;
    /**
     * 页号
     */
    Size: string;
    /**
     * 状态列表
  草稿：'NS'，'N','P','R'
  运行：''Y'
  停止：'F'
  冻结：'O'
  停止中：'T'
     */
    StatusList?: Array<string>;
    /**
     * 责任人名列表
     */
    OwnerNameList?: Array<string>;
    /**
     * 工作流列表
     */
    WorkflowIdList?: Array<string>;
    /**
     * 任务名称搜索
     */
    TaskNameFilter?: string;
    /**
     * 任务类型列表
     */
    TaskTypeList?: Array<string>;
    /**
     * 文件夹列表
     */
    FordIdList?: Array<string>;
    /**
     * 任务Id搜索
     */
    TaskIdFilter?: string;
    /**
     * 责任人搜索
     */
    OwnerNameFilter?: string;
    /**
     * 排序字段：
  UpdateTime
  CreateTime
     */
    SortItem?: string;
    /**
     * asc:升序
  desc:降序
     */
    SortType?: string;
    /**
     * 引擎类型列表：三种
  SparkJob
  SparkSql
  presto
     */
    DataEngineList?: Array<string>;
    /**
     * 操作人名
     */
    UserId?: string;
    /**
     * 1
     */
    OwnerId?: string;
    /**
     * 1
     */
    TenantId?: string;
    /**
     * 数据源ID列表
     */
    DatasourceIdList?: Array<string>;
    /**
     * 数据源类型列表
     */
    DatasourceTypeList?: Array<string>;
    /**
     * 调度单位类型列表
     */
    CycleUnitList?: Array<string>;
    /**
     * 是否筛选出可提交的任务
     */
    CanSubmit?: boolean;
}
/**
 * DescribeTaskReport请求参数结构体
 */
export interface DescribeTaskReportRequest {
    /**
     * 任务Id
     */
    TaskId: string;
    /**
     * 统计周期的开始日期，格式为 yyyy-MM-dd
     */
    BeginDate: string;
    /**
     * 统计周期的结束日期，格式为 yyyy-MM-dd
     */
    EndDate: string;
    /**
     * WeData项目id
     */
    ProjectId: string;
}
/**
 * DescribeOfflineTaskToken返回参数结构体
 */
export interface DescribeOfflineTaskTokenResponse {
    /**
     * 长连接临时token
     */
    Token: string;
    /**
     * 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KillInstances返回参数结构体
 */
export interface KillInstancesResponse {
    /**
     * 返回实例批量终止结果
     */
    Data: OperateResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetTaskAlarmNew请求参数结构体
 */
export interface SetTaskAlarmNewRequest {
    /**
     * 设置任务超时告警和失败告警信息
     */
    AlarmInfoList: Array<AlarmInfo>;
    /**
     * 项目Id
     */
    ProjectId: string;
}
/**
 * DescribeEventCases返回参数结构体
 */
export interface DescribeEventCasesResponse {
    /**
     * 事件实例分页查询结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: EventCaseAuditLogVOCollection;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RerunScheduleInstances返回参数结构体
 */
export interface RerunScheduleInstancesResponse {
    /**
     * 结果
     */
    Data?: BatchOperateResultOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsInstanceLogList请求参数结构体
 */
export interface DescribeOpsInstanceLogListRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 数据时间
     */
    CurRunDate: string;
}
/**
 * 任务类型基本信息
 */
export interface TaskTypeOpsDto {
    /**
     * 任务类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeDesc?: string;
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * 任务类型归类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeSort?: string;
}
/**
 * DescribeDsEventPublisher请求参数结构体
 */
export interface DescribeDsEventPublisherRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务id
     */
    Key: string;
}
/**
 * CreateDataSource返回参数结构体
 */
export interface CreateDataSourceResponse {
    /**
     * 主键ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRelatedInstances请求参数结构体
 */
export interface DescribeRelatedInstancesRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 数据时间，格式yyyy-MM-dd HH:mm:ss
     */
    CurRunDate: string;
    /**
     * 任务id
     */
    TaskId: number;
    /**
     * 距离当前任务的层级距离，-1表示取父节点，1表示子节点
     */
    Depth: number;
    /**
     * 页号，默认为1
     */
    PageNumber?: number;
    /**
     * 页大小，默认为10，最大不超过200
     */
    PageSize?: number;
}
/**
 * DescribeDrInstanceScriptContent请求参数结构体
 */
export interface DescribeDrInstanceScriptContentRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务来源 ADHOC || WORKFLOW
     */
    TaskSource: string;
    /**
     * 试运行记录id
     */
    RecordId?: number;
    /**
     * 试运行子记录id
     */
    SonRecordId?: number;
}
/**
 * CreateLink返回参数结构体
 */
export interface CreateLinkResponse {
    /**
     * 边id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskScript请求参数结构体
 */
export interface DescribeTaskScriptRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DescribeRuleHistoryByPage请求参数结构体
 */
export interface DescribeRuleHistoryByPageRequest {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 分页序号
     */
    PageNumber?: number;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
}
/**
 * UnlockIntegrationTask返回参数结构体
 */
export interface UnlockIntegrationTaskResponse {
    /**
     * 操作成功与否标识
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenameTaskDs返回参数结构体
 */
export interface RenameTaskDsResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量操作结果，带失败原因
 */
export interface BatchOpsDTO {
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 成功数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessCount?: number;
    /**
     * 失败数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailCount?: number;
    /**
     * 失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailMessageList?: Array<FailMessage>;
}
/**
 * DeleteRecycleTask请求参数结构体
 */
export interface DeleteRecycleTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * GetBatchDetailErrorLog返回参数结构体
 */
export interface GetBatchDetailErrorLogResponse {
    /**
     * 日志返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAlarmReceiver返回参数结构体
 */
export interface DescribeAlarmReceiverResponse {
    /**
     * 告警接收人列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlarmReceiverInfoList?: Array<AlarmReceiverInfo>;
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskByCycle返回参数结构体
 */
export interface DescribeTaskByCycleResponse {
    /**
     * 周期任务统计值
     */
    Data?: Array<TaskByCycle>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDsKettleServerFolderTree请求参数结构体
 */
export interface DescribeDsKettleServerFolderTreeRequest {
    /**
     * 项目编号
     */
    ProjectId: string;
    /**
     * 路径
     */
    Path: string;
}
/**
 * 快照过期治理项
 */
export interface DlcExpiredSnapshotsInfo {
    /**
     * 是否启用快照过期治理项：enable、none
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredSnapshotsEnable?: string;
    /**
     * 用于运行快照过期治理项的引擎名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Engine?: string;
    /**
     * 需要保留的最近快照个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetainLast?: number;
    /**
     * 过期指定天前的快照
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeforeDays?: number;
    /**
     * 清理过期快照的并行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxConcurrentDeletes?: number;
    /**
     * 快照过期治理运行周期，单位为分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntervalMin?: number;
}
/**
 * DescribeWorkflowCanvasInfo返回参数结构体
 */
export interface DescribeWorkflowCanvasInfoResponse {
    /**
     * 工作流调度详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowCanvasOpsDto;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttributeItemVO参数
 */
export interface AttributeItemDsVO {
    /**
     * Key值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * Value值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * DescribeTaskParamDs返回参数结构体
 */
export interface DescribeTaskParamDsResponse {
    /**
     * 结果集
     */
    Data?: Array<ParameterTaskDsDto>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量操作的结果返回
 */
export interface BatchOperateResult {
    /**
     * 批量操作成功数
     */
    SuccessCount: number;
    /**
     * 批量操作失败数
     */
    FailedCount: number;
    /**
     * 批量操作的总数
     */
    TotalCount: number;
}
/**
 * TKE集群信息详情
 */
export interface InLongTkeDetail {
    /**
     * 集群Id
     */
    ClusterId: string;
    /**
     * 集群名称
     */
    ClusterName: string;
    /**
     * TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常)
     */
    Status: string;
    /**
     * 是否安装Agent，true: 是，false: 否
     */
    HasAgent: boolean;
    /**
     * 采集器ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentId: string;
    /**
     * VPC ID
     */
    VpcId: string;
    /**
     * TKE集群区域ID
     */
    TkeRegion: string;
    /**
     * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER
     */
    ClusterType: string;
}
/**
 * CreateLink请求参数结构体
 */
export interface CreateLinkRequest {
    /**
     * 当前项目id
     */
    ProjectId: string;
    /**
     * 边的源节点
     */
    TaskFrom: string;
    /**
     * 边的目标节点
     */
    TaskTo: string;
    /**
     * 当前工作流id
     */
    WorkflowId: string;
}
/**
 * 克隆对象DTO
 */
export interface CloneObjectDTO {
    /**
     * OBJECT_WORKFLOW，OBJECT_PARAMETER，OBJECT_EVENT，OBJECT_FUNCTION，MAPPING_CALC_ENGINE_INSTANCE，MAPPING_RESOURCE_QUEUE，MAPPING_DATASOURCE，MAPPING_DATABASE，STRATEGY_NAME_CONFLICT，STRATEGY_TASK_AUTO_COMMIT，STRATEGY_PARAMETER_AUTO_COMMIT，STRATEGY_FUNCTION_AUTO_COMMIT，STRATEGY_EVENT_AUTO_COMMIT，CONDITION_WORKFLOW，CONDITION_PARAMETER，CONDITION_EVENT，CONDITION_FUNCTION，OBJECT_PRE_CHECK
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 对象Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 对象值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
    /**
     * 子对象列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubInfo?: Array<SubCloneObjectDTO>;
}
/**
 * DescribeSchedulerInstanceStatus请求参数结构体
 */
export interface DescribeSchedulerInstanceStatusRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 任务类型ID
     */
    TaskTypeId?: string;
    /**
     * 执行资源组ID
     */
    ExecutionGroupId?: string;
    /**
     * 执行资源组名字
     */
    ExecutionGroupName?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 责任人
     */
    InCharge?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
}
/**
 * DescribeCrontabTopNDs返回参数结构体
 */
export interface DescribeCrontabTopNDsResponse {
    /**
     * taskdto
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则变量替换
 */
export interface RuleFieldConfig {
    /**
     * where变量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhereConfig?: Array<FieldConfig>;
    /**
     * 库表变量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableConfig?: Array<TableConfig>;
}
/**
 * DescribeInLongAgentTaskList返回参数结构体
 */
export interface DescribeInLongAgentTaskListResponse {
    /**
     * 采集器关联的集成任务列表
     */
    Items: Array<InLongAgentTask>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImportableOfflineTask请求参数结构体
 */
export interface DescribeImportableOfflineTaskRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 页大小
     */
    PageSize: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 创建者列表
     */
    CreaterList?: Array<string>;
    /**
     * 责任人列表
     */
    InChargeList?: Array<string>;
    /**
     * 排序信息
  最近修改时间：LastUpdate
     */
    OrderFields?: Array<OrderField>;
}
/**
 * 任务实例基本信息
 */
export interface TaskVersionInstance {
    /**
     * 实例版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceVersion?: number;
    /**
     * 实例描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 0, "新增"，1, "修改"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChangeType?: number;
    /**
     * 版本提交人UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitterUin?: string;
    /**
     * 提交日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceDate?: string;
    /**
     * 0, "未启用"，1, "启用(生产态)"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: number;
}
/**
 * DescribeBrowsingHistories请求参数结构体
 */
export interface DescribeBrowsingHistoriesRequest {
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 最近多少个，最大20个
     */
    TopN: number;
    /**
     * 查询历史的资源类型file/task/function/event等
     */
    ResourceType: string;
}
/**
 * DescribeDependOpsTasks返回参数结构体
 */
export interface DescribeDependOpsTasksResponse {
    /**
     * 画布任务和链接信息
     */
    Data?: OpsTaskCanvasInfoList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRuleTemplate返回参数结构体
 */
export interface DeleteRuleTemplateResponse {
    /**
     * 删除成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExportFiles返回参数结构体
 */
export interface ExportFilesResponse {
    /**
     * 压缩文件的远程地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZipRemotePath?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据质量自定义规则时的sql表达式解析对象
 */
export interface SqlExpression {
    /**
     * sql表达式表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableExpressions?: Array<SqlExpressionTable>;
    /**
     * sql表达式字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamExpressions?: Array<string>;
}
/**
 * DescribeTaskByCycle请求参数结构体
 */
export interface DescribeTaskByCycleRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 1
     */
    InCharge?: string;
    /**
     * 工作流ID
     */
    WorkflowId?: string;
}
/**
 * ImportProjectParamDs请求参数结构体
 */
export interface ImportProjectParamDsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 已废弃
     */
    FilesCos?: Array<string>;
    /**
     * 发布ID
     */
    PublishInfoId?: string;
    /**
     * 全局参数
     */
    GlobalConfig?: string;
    /**
     * 已废弃
     */
    BucketName?: string;
    /**
     * 已废弃
     */
    CosRegion?: string;
    /**
     * 共享存储临时文件名称，详情可以见 UploadFileDs 接口，该参数从 UploadFileDs 中的 TargetFileName
     */
    FileName?: string;
}
/**
 * Id包装对象
 */
export interface CommonId {
    /**
     * Id值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
}
/**
 * DescribeRuleGroupsByPage返回参数结构体
 */
export interface DescribeRuleGroupsByPageResponse {
    /**
     * 规则组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: RuleGroupPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaskTypeExts参数
 */
export interface TaskTypeExtParamDsVO {
    /**
     * TaskTypeExts的Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtKey?: string;
    /**
     * TaskTypeExts的Value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtValue?: TaskTypeExtDsVO;
}
/**
 * DescribeIntegrationStatisticsTaskStatus返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusResponse {
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusData: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadResource返回参数结构体
 */
export interface UploadResourceResponse {
    /**
     * 资源文件信息列表
     */
    Data?: Array<UserFileDTONew>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsMakePlanInstances返回参数结构体
 */
export interface DescribeOpsMakePlanInstancesResponse {
    /**
     * 补录计划实例分页查询结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: MakePlanInstanceOpsDtoCollection;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据质量生产调度任务业务实体
 */
export interface ProdSchedulerTask {
    /**
     * 生产调度任务工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId: string;
    /**
     * 生产调度任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 生产调度任务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
}
/**
 * DescribeInLongTkeClusterList请求参数结构体
 */
export interface DescribeInLongTkeClusterListRequest {
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * TKE集群地域
     */
    TkeRegion: string;
    /**
     * 集群名称。
  多个名称用逗号连接。
     */
    ClusterName?: string;
    /**
     * TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常 Failed 失败 Deleting 删除中 Scaling 规模调整中 Upgrading 升级中 Isolated 欠费隔离中 NodeUpgrading 节点升级中 Recovering 唤醒中 Activating 激活中 MasterScaling Master扩缩容中 Waiting 等待注册 ClusterLevelUpgrading 调整规格中 ResourceIsolate 隔离中 ResourceIsolated 已隔离 ResourceReverse 冲正中 Trading 集群开通中 ResourceReversal 集群冲正 ClusterLevelTrading 集群变配交易中)
  多个状态用逗号连接。
     */
    Status?: string;
    /**
     * 是否安装Agent，true: 是，false: 否
     */
    HasAgent?: boolean;
    /**
     * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
  多个集群用逗号连接。
     */
    ClusterType?: string;
    /**
     * 分页页码，从1开始，默认：1
     */
    PageIndex?: number;
    /**
     * 分页每页记录数，默认10
     */
    PageSize?: number;
}
/**
 * CreateHiveTableByDDL请求参数结构体
 */
export interface CreateHiveTableByDDLRequest {
    /**
     * 数据源ID
     */
    DatasourceId: string;
    /**
     * 数据库
     */
    Database: string;
    /**
     * 建hive表ddl
     */
    DDLSql: string;
    /**
     * 表权限 ，默认为0:项目共享;1:仅个人与管理员
     */
    Privilege: number;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 目标表类型(HIVE或GBASE)
     */
    Type: string;
    /**
     * 责任人
     */
    Incharge?: string;
}
/**
 * DescribeBaselineById返回参数结构体
 */
export interface DescribeBaselineByIdResponse {
    /**
     * 租户id
     */
    Data?: BaselineDetailResponse;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务类型
 */
export interface TaskTypeVO {
    /**
     * 任务类型id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeId?: number;
    /**
     * TypeDesc描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeDesc?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 服务器类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServerType?: string;
    /**
     * 目标服务器类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServerType?: string;
    /**
     * RunJarName名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunJarName?: string;
    /**
     * Killable参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KillAble?: number;
    /**
     * TypeSort类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeSort?: string;
    /**
     * InCharge参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 节点对应任务类型运行上限（暂时不考虑）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerParallelism?: number;
    /**
     * 每个任务运行上限（暂时不考虑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskParallelism?: number;
    /**
     * 补录和重跑上限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DoRedoParallelism?: number;
    /**
     * 0 为不可创建任务; >0 可创建任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DowngradePriorityTries?: number;
    /**
     * 重试等待时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 重试次数（在任务属性配置中设置）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryLimit?: number;
    /**
     * DefaultAliveWait参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultAliveWait?: number;
    /**
     * PollingSeconds秒数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PollingSeconds?: number;
    /**
     * 参数列表xml
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamList?: string;
    /**
     * TaskTypeExts参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskTypeExtension?: Array<TaskTypeExtParamVO>;
    /**
     * 对应文件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileType?: string;
    /**
     * 是否选择脚本路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectFilePath?: boolean;
    /**
     * classpath是否要排除掉common-lib，默认是0不排除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeCommonLib?: boolean;
    /**
     * runner任务完成后需要触发的hook
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostHooks?: string;
}
/**
 * DescribeEventListenerByTaskId返回参数结构体
 */
export interface DescribeEventListenerByTaskIdResponse {
    /**
     * 监听事件出参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<EventListenerNewDTO>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGlobalWorkflowDs返回参数结构体
 */
export interface DescribeGlobalWorkflowDsResponse {
    /**
     * 数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowDsDTOPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOpsWorkflows返回参数结构体
 */
export interface DescribeOpsWorkflowsResponse {
    /**
     * 工作流列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: WorkflowExtOpsDtoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务信息无循环递归属性
 */
export interface TaskDsDTONoRecur {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskId?: string;
    /**
     * 虚拟任务标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualFlag?: boolean;
    /**
     * 任务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskName?: string;
    /**
     * 工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 真实工作流id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealWorkflowId?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * 文件夹名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdate?: string;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InCharge?: string;
    /**
     * 责任人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InChargeId?: string;
    /**
     * 生效日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 执行时间左闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionStartTime?: string;
    /**
     * 执行时间右闭区间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionEndTime?: string;
    /**
     * 项目id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 周期类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleType?: string;
    /**
     * 步长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleStep?: number;
    /**
     * 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrontabExpression?: string;
    /**
     * 延时调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelayTime?: number;
    /**
     * 延时执行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupTime?: number;
    /**
     * 重试等待时间,单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryWait?: number;
    /**
     * 是否可重试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retriable?: number;
    /**
     * 调度扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAction?: string;
    /**
     * 运行次数限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TryLimit?: number;
    /**
     * 运行优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunPriority?: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskType?: TaskTypeVO;
    /**
     * 指定的运行节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * 集群name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 最小数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinDateTime?: string;
    /**
     * 最大数据时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDateTime?: string;
    /**
     * 运行耗时超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExecutionTTL?: number;
    /**
     * 是否自身依赖 是1 否2 并行3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfDepend?: number;
    /**
     * LeftCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeftCoordinate?: number;
    /**
     * TopCoordinate坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopCoordinate?: number;
    /**
     * TaskExt信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskExt?: TaskExtVO;
    /**
     * taskExt 导入导出json使用 private Map  properties;
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: string;
    /**
     * 任务备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Notes?: string;
    /**
     * 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1
       * 表示当前周期生成下一周期数据时间任务实例
       *
       * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceInitStrategy?: string;
    /**
     * 资源池队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YarnQueue?: string;
    /**
     * 任务告警信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarms?: Array<AlarmVO>;
    /**
     * alarmDTO 导入导出json使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alarm?: string;
    /**
     * 任务脚本是否发生变化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptChange?: boolean;
    /**
     * 任务版本是否已提交
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Submit?: boolean;
    /**
     * 最新调度计划变更时间 仅生产态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSchedulerCommitTime?: string;
    /**
     * 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalizedJobStartTime?: string;
    /**
     * 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecoverFreezeStartTime?: string;
    /**
     * 源数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceServer?: string;
    /**
     * 目标数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetServer?: string;
    /**
     * 父子节点树
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<string>;
    /**
     * 创建者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creater?: string;
    /**
     * 分支，依赖关系，and/or, 默认and
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyRel?: string;
    /**
     * 是否支持工作流依赖 yes / no 默认 no
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyWorkflow?: string;
    /**
     * 支持事件监听器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventListenerConfig?: string;
    /**
     * 支持事件触发器配置导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventPublisherConfig?: string;
    /**
     * 依赖配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DependencyConfigList?: Array<string>;
    /**
     * 虚拟任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualTaskStatus?: string;
    /**
     * 回收站还原提示语
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleTips?: string;
    /**
     * 回收站所属用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecycleUser?: string;
    /**
     * 新增 或 修改
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrUpdate?: string;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
    /**
     * 任务上游依赖信息 用于发布管理导入导出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLinkInfo?: Array<TaskLinkDsDTO>;
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportResult?: boolean;
    /**
     * 导入失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImportErrMsg?: string;
    /**
     * 任务内容 全部内容 配置内容 资源内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentType?: string;
    /**
     * 是否导入提交运行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskAutoSubmit?: boolean;
    /**
     * 上层产品 数据质量 / 数据开发 / ...
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 创建者帐号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnId?: string;
    /**
     * 子账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 最后修改的人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUser?: string;
    /**
     * 最后修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 最后修改的人的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateUserId?: string;
    /**
     * 调度计划
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerDesc?: string;
    /**
     * 资源组
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceGroup?: string;
    /**
     * 版本提交说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionDesc?: string;
    /**
     * 编排-删除添加的链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkId?: string;
    /**
     * 脚本引用关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserFileId?: string;
}
/**
 * DescribeTaskLockStatus请求参数结构体
 */
export interface DescribeTaskLockStatusRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 任务类型：201. stream,   202. offline
     */
    TaskType: number;
}
/**
 * DescribeCodeSearchCount请求参数结构体
 */
export interface DescribeCodeSearchCountRequest {
    /**
     * 搜索关键词
     */
    Keyword: string;
    /**
     * 搜索范围列表
     */
    SearchScopes: Array<string>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 责任人ID列表
     */
    OwnerIds?: Array<string>;
    /**
     * 文件类型列表
     */
    FileTypes?: Array<string>;
    /**
     * 任务类型列表
     */
    TaskTypes?: Array<string>;
    /**
     * 更新时间范围：开始时间
     */
    StartTime?: string;
    /**
     * 更新时间范围：结束时间
     */
    EndTime?: string;
    /**
     * 任务状态
     */
    Status?: string;
}
/**
 * CommitRuleGroupExecResult返回参数结构体
 */
export interface CommitRuleGroupExecResultResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskBindVirtualTask返回参数结构体
 */
export interface DescribeTaskBindVirtualTaskResponse {
    /**
     * 虚拟任务信息列表
     */
    Data?: VirtualTaskInfoPage;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实时任务日志内容
 */
export interface LogContent {
    /**
     * 日志时间戳，单位毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 日志包id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgId: string;
    /**
     * 日志内容
     */
    Log: string;
}
/**
 * CreateScriptsImportTasksDs请求参数结构体
 */
export interface CreateScriptsImportTasksDsRequest {
    /**
     * 任务属性
     */
    Task: TaskDsDTOLite;
    /**
     * 自定义业务实体信息列表
     */
    EntityDTOList: Array<CustomizeBusinessEntityDTO>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 0:跳过；1:重命名
     */
    TaskNameExistMode?: number;
    /**
     * 任务目录ID
     */
    TaskFolderId?: string;
}
/**
 * BatchCreateVirtualTaskDs请求参数结构体
 */
export interface BatchCreateVirtualTaskDsRequest {
    /**
     * 项目Id
     */
    ProjectId: string;
    /**
     * 任务相关信息
     */
    Tasks: Array<BatchCreateVirtualTaskDTO>;
    /**
     * 工作流id
     */
    WorkflowId: string;
}
/**
 * DescribeRuleGroup请求参数结构体
 */
export interface DescribeRuleGroupRequest {
    /**
     * 规则组ID
     */
    RuleGroupId?: number;
    /**
     * 数据来源ID
     */
    DatasourceId?: string;
    /**
     * 数据表Id
     */
    TableId?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 数据库ID
     */
    DatabaseId?: string;
}
/**
 * ModifyTaskName请求参数结构体
 */
export interface ModifyTaskNameRequest {
    /**
     * 名称
     */
    TaskName: string;
    /**
     * id
     */
    TaskId: string;
    /**
     * 项目/工作空间id
     */
    ProjectId: string;
    /**
     * 备注
     */
    Notes?: string;
}
/**
 * 规则组执行结果分页
 */
export interface RuleGroupExecResultPage {
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 规则组执行结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<RuleGroupExecResult>;
}
/**
 * DeleteProjectUsers请求参数结构体
 */
export declare type DeleteProjectUsersRequest = null;
/**
 * ModifyIntegrationTask请求参数结构体
 */
export interface ModifyIntegrationTaskRequest {
    /**
     * 任务信息
     */
    TaskInfo: IntegrationTaskInfo;
    /**
     * 项目id
     */
    ProjectId: string;
    /**
     * 默认false . 为true时表示走回滚节点逻辑
     */
    RollbackFlag?: boolean;
}
/**
 * DescribeWorkflowExecuteById请求参数结构体
 */
export interface DescribeWorkflowExecuteByIdRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 工作流ID
     */
    WorkFlowIdList?: string;
    /**
     * 分页大小
     */
    PageNumber?: number;
    /**
     * 分页索引
     */
    PageSize?: number;
}
/**
 * 用户生产工作流列表分页
 */
export interface WorkflowExtOpsDtoPage {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<WorkflowExtOpsDto>;
}
/**
 * GetLatestAnalyseInfo返回参数结构体
 */
export interface GetLatestAnalyseInfoResponse {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * 任务实体
     */
    Task?: LatestAnalyseInfoTask;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 工作流信息
 */
export interface WorkflowDsDTO {
    /**
     * 工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowId?: string;
    /**
     * 责任人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Owner?: string;
    /**
     * 责任人ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerId?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 项目标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdent?: string;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 工作流描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowDesc?: string;
    /**
     * 工作流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkflowName?: string;
    /**
     * 文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId?: string;
    /**
     * SparkSQL参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SparkParams?: string;
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<TaskDsDTO>;
    /**
     * 任务链接列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Links?: Array<TaskLinkDsDTO>;
    /**
     * 参数列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<ParameterTaskDsDto>;
}
/**
 * DescribeApproveList返回参数结构体
 */
export interface DescribeApproveListResponse {
    /**
     * 待审批列表详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeApply;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskInstance请求参数结构体
 */
export interface DescribeTaskInstanceRequest {
    /**
     * WeData项目ID
     */
    ProjectId: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务实例数据时间
     */
    CurRunDate?: string;
    /**
     * 任务实例运行时间
     */
    IssueDate?: string;
}
/**
 * ReleaseLock请求参数结构体
 */
export interface ReleaseLockRequest {
    /**
     * 资源唯一路径
     */
    ResourcePath: string;
}
