/**
 * ListConnections返回参数结构体
 */
export interface ListConnectionsResponse {
    /**
      * 连接器信息
      */
    Connections: Array<Connection>;
    /**
      * 连接器总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetEventBus返回参数结构体
 */
export interface GetEventBusResponse {
    /**
      * 更新时间
      */
    ModTime: string;
    /**
      * 事件集描述
      */
    Description: string;
    /**
      * 日志主题ID
      */
    ClsTopicId: string;
    /**
      * 创建时间
      */
    AddTime: string;
    /**
      * 日志集ID
      */
    ClsLogsetId: string;
    /**
      * 事件集名称
      */
    EventBusName: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * （已废弃）事件集类型
      */
    Type: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用来描述一个ckafka投递目标的重试策略
 */
export interface RetryPolicy {
    /**
      * 重试间隔 单位:秒
      */
    RetryInterval: number;
    /**
      * 最大重试次数
      */
    MaxRetryAttempts: number;
}
/**
 * 用来描述ckafka投递目标
 */
export interface CkafkaTargetParams {
    /**
      * 要投递到的ckafka topic
      */
    TopicName: string;
    /**
      * 重试策略
      */
    RetryPolicy: RetryPolicy;
}
/**
 * ListConnections请求参数结构体
 */
export interface ListConnectionsRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 根据哪个字段进行返回结果排序，目前支持如下以下字段：AddTime, ModTime
      */
    OrderBy?: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
      */
    Order?: string;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件规则ID
      */
    RuleId: string;
}
/**
 * UpdateRule返回参数结构体
 */
export interface UpdateRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTarget请求参数结构体
 */
export interface CreateTargetRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 目标类型
      */
    Type: string;
    /**
      * 目标描述
      */
    TargetDescription: TargetDescription;
    /**
      * 事件规则ID
      */
    RuleId: string;
}
/**
 * DeleteTarget返回参数结构体
 */
export interface DeleteTargetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述如何提取数据
 */
export interface Extraction {
    /**
      * JsonPath, 不指定则使用默认值$.
      */
    ExtractionInputPath: string;
    /**
      * 取值: TEXT/JSON
      */
    Format: string;
    /**
      * 仅在Text需要传递
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextParams?: TextParams;
}
/**
 * 目标简要信息
 */
export interface TargetBrief {
    /**
      * 目标ID
      */
    TargetId: string;
    /**
      * 目标类型
      */
    Type: string;
}
/**
 * ListRules返回参数结构体
 */
export interface ListRulesResponse {
    /**
      * 事件规则信息
      */
    Rules: Array<Rule>;
    /**
      * 事件规则总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTarget返回参数结构体
 */
export interface CreateTargetResponse {
    /**
      * 目标ID
      */
    TargetId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckRule请求参数结构体
 */
export declare type CheckRuleRequest = null;
/**
 * GetRule返回参数结构体
 */
export interface GetRuleResponse {
    /**
      * 事件集id
      */
    EventBusId: string;
    /**
      * 事件规则id
      */
    RuleId: string;
    /**
      * 事件规则名称
      */
    RuleName: string;
    /**
      * 事件规则状态
      */
    Status: string;
    /**
      * 使能开关
      */
    Enable: boolean;
    /**
      * 事件规则描述
      */
    Description: string;
    /**
      * 事件模式
      */
    EventPattern: string;
    /**
      * 创建时间
      */
    AddTime: string;
    /**
      * 更新时间
      */
    ModTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateConnection返回参数结构体
 */
export interface CreateConnectionResponse {
    /**
      * 连接器ID
      */
    ConnectionId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 事件集信息
 */
export interface EventBus {
    /**
      * 更新时间
      */
    ModTime: string;
    /**
      * 事件集描述，不限字符类型，200字符描述以内
      */
    Description: string;
    /**
      * 创建时间
      */
    AddTime: string;
    /**
      * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
      */
    EventBusName: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件集类型
      */
    Type: string;
}
/**
 * ListTargets请求参数结构体
 */
export interface ListTargetsRequest {
    /**
      * 事件规则ID
      */
    RuleId: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
      */
    OrderBy?: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 分页偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
      */
    Order?: string;
}
/**
 * 一个转换器
 */
export interface Transformation {
    /**
      * 描述如何提取数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extraction?: Extraction;
    /**
      * 描述如何过滤数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    EtlFilter?: EtlFilter;
    /**
      * 描述如何数据转换
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transform?: Transform;
}
/**
 * Target信息
 */
export interface Target {
    /**
      * 目标类型
      */
    Type: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 目标ID
      */
    TargetId: string;
    /**
      * 目标描述
      */
    TargetDescription: TargetDescription;
    /**
      * 事件规则ID
      */
    RuleId: string;
    /**
      * 开启批量投递使能
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableBatchDelivery: boolean;
    /**
      * 批量投递最长等待时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchTimeout: number;
    /**
      * 批量投递最大事件条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchEventCount: number;
}
/**
 * ListRules请求参数结构体
 */
export interface ListRulesRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
      */
    OrderBy?: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 分页偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
      */
    Order?: string;
}
/**
 * 云函数参数
 */
export interface SCFParams {
    /**
      * 批量投递最长等待时间
      */
    BatchTimeout?: number;
    /**
      * 批量投递最大事件条数
      */
    BatchEventCount?: number;
    /**
      * 开启批量投递使能
      */
    EnableBatchDelivery?: boolean;
}
/**
 * rule对应的dlq配置
 */
export interface DeadLetterConfig {
    /**
      * 支持dlq、丢弃、忽略错误继续传递三种模式, 分别对应: DLQ,DROP,IGNORE_ERROR
      */
    DisposeMethod: string;
    /**
      * 设置了DLQ方式后,此选项必填. 错误消息会被投递到对应的kafka topic中
注意：此字段可能返回 null，表示取不到有效值。
      */
    CkafkaDeliveryParams?: CkafkaDeliveryParams;
}
/**
 * UpdateTransformation返回参数结构体
 */
export interface UpdateTransformationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateEventBus请求参数结构体
 */
export interface UpdateEventBusRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件集描述，不限字符类型，200字符描述以内
      */
    Description?: string;
    /**
      * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
      */
    EventBusName?: string;
}
/**
 * CreateEventBus请求参数结构体
 */
export interface CreateEventBusRequest {
    /**
      * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
      */
    EventBusName: string;
    /**
      * 事件集描述，不限字符类型，200字符描述以内
      */
    Description?: string;
}
/**
 * PutEvents返回参数结构体
 */
export interface PutEventsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
    /**
      * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
      */
    EventPattern: string;
    /**
      * 事件集ID。
      */
    EventBusId: string;
    /**
      * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
      */
    RuleName: string;
    /**
      * 使能开关。
      */
    Enable?: boolean;
    /**
      * 事件集描述，不限字符类型，200字符描述以内
      */
    Description?: string;
}
/**
 * 描述如何切分数据
 */
export interface TextParams {
    /**
      * 逗号、| 、制表符、空格、换行符、%、#，限制长度为 1。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Separator?: string;
    /**
      * 填写正则表达式：长度128
注意：此字段可能返回 null，表示取不到有效值。
      */
    Regex?: string;
}
/**
 * DeleteConnection返回参数结构体
 */
export interface DeleteConnectionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransformation返回参数结构体
 */
export interface GetTransformationResponse {
    /**
      * 转换规则列表
      */
    Transformations: Array<Transformation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 规则信息
 */
export interface Rule {
    /**
      * 状态
      */
    Status: string;
    /**
      * 修改时间
      */
    ModTime: string;
    /**
      * 使能开关
      */
    Enable: boolean;
    /**
      * 描述
      */
    Description: string;
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 创建时间
      */
    AddTime: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 规则名称
      */
    RuleName: string;
    /**
      * Target 简要信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets: Array<TargetBrief>;
    /**
      * rule设置的dlq规则. 可能为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterConfig: DeadLetterConfig;
}
/**
 * CreateTransformation请求参数结构体
 */
export interface CreateTransformationRequest {
    /**
      * 事件总线 id
      */
    EventBusId: string;
    /**
      * 规则id
      */
    RuleId: string;
    /**
      * 一个转换规则列表，当前仅限定一个
      */
    Transformations: Array<Transformation>;
}
/**
 * PublishEvent请求参数结构体
 */
export interface PublishEventRequest {
    /**
      * 事件列表
      */
    EventList: Array<Event>;
    /**
      * 事件集ID
      */
    EventBusId: string;
}
/**
 * 描述如何过滤数据
 */
export interface EtlFilter {
    /**
      * 语法Rule规则保持一致
      */
    Filter: string;
}
/**
 * CheckTransformation返回参数结构体
 */
export interface CheckTransformationResponse {
    /**
      * 经过Transformations处理之后的数据
      */
    Output: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListTargets返回参数结构体
 */
export interface ListTargetsResponse {
    /**
      * 目标总数
      */
    TotalCount: number;
    /**
      * 目标信息
      */
    Targets: Array<Target>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListEventBuses返回参数结构体
 */
export interface ListEventBusesResponse {
    /**
      * 事件集信息
      */
    EventBuses: Array<EventBus>;
    /**
      * 事件集总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckRule返回参数结构体
 */
export interface CheckRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ConnectionDescription描述
 */
export interface ConnectionDescription {
    /**
      * 资源qcs六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
      */
    ResourceDescription: string;
    /**
      * apigw参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    APIGWParams?: APIGWParams;
    /**
      * ckafka参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CkafkaParams?: CkafkaParams;
}
/**
 * 用来描述需要投递到kafka topic的参数
 */
export interface CkafkaDeliveryParams {
    /**
      * ckafka topic name
      */
    TopicName: string;
    /**
      * ckafka资源qcs六段式
      */
    ResourceDescription: string;
}
/**
 * UpdateTarget返回参数结构体
 */
export interface UpdateTargetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateConnection请求参数结构体
 */
export interface CreateConnectionRequest {
    /**
      * 连接器描述
      */
    ConnectionDescription: ConnectionDescription;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 连接器名称
      */
    ConnectionName: string;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 使能开关
      */
    Enable?: boolean;
    /**
      * 类型
      */
    Type?: string;
}
/**
 * DeleteEventBus请求参数结构体
 */
export interface DeleteEventBusRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
}
/**
 * ListEventBuses请求参数结构体
 */
export interface ListEventBusesRequest {
    /**
      * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
      */
    OrderBy?: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
      */
    Order?: string;
    /**
      * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 分页偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * PublishEvent返回参数结构体
 */
export interface PublishEventResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTransformation返回参数结构体
 */
export interface CreateTransformationResponse {
    /**
      * 生成的转换器id
      */
    TransformationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述如何数据转换

 */
export interface Transform {
    /**
      * 描述如何数据转换
      */
    OutputStructs: Array<OutputStructParam>;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
      * 一个或者多个过滤值。
      */
    Values: Array<string>;
    /**
      * 过滤键的名称。
      */
    Name: string;
}
/**
 * Connection信息
 */
export interface Connection {
    /**
      * 状态
      */
    Status: string;
    /**
      * 更新时间
      */
    ModTime: string;
    /**
      * 使能开关
      */
    Enable: boolean;
    /**
      * 描述
      */
    Description: string;
    /**
      * 创建时间
      */
    AddTime: string;
    /**
      * 连接器ID
      */
    ConnectionId: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 连接器描述
      */
    ConnectionDescription: ConnectionDescription;
    /**
      * 连接器名称
      */
    ConnectionName: string;
    /**
      * 类型
      */
    Type: string;
}
/**
 * PutEvents请求参数结构体
 */
export interface PutEventsRequest {
    /**
      * 事件列表
      */
    EventList: Array<Event>;
    /**
      * 事件集ID
      */
    EventBusId: string;
}
/**
 * DeleteEventBus返回参数结构体
 */
export interface DeleteEventBusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransformation请求参数结构体
 */
export interface GetTransformationRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 转换器id
      */
    TransformationId: string;
}
/**
 * CreateEventBus返回参数结构体
 */
export interface CreateEventBusResponse {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteConnection请求参数结构体
 */
export interface DeleteConnectionRequest {
    /**
      * 连接器ID
      */
    ConnectionId: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
}
/**
 * UpdateTransformation请求参数结构体
 */
export interface UpdateTransformationRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 转换器id
      */
    TransformationId: string;
    /**
      * 一个转换规则列表，当前仅限定一个
      */
    Transformations: Array<Transformation>;
}
/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
    /**
      * 事件规则ID
      */
    RuleId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TargetDescription描述
 */
export interface TargetDescription {
    /**
      * QCS资源六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
      */
    ResourceDescription: string;
    /**
      * 云函数参数
      */
    SCFParams?: SCFParams;
    /**
      * Ckafka参数
      */
    CkafkaTargetParams?: CkafkaTargetParams;
}
/**
 * DeleteTransformation返回参数结构体
 */
export interface DeleteTransformationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTransformation请求参数结构体
 */
export interface DeleteTransformationRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 转换器id
      */
    TransformationId: string;
}
/**
 * GetEventBus请求参数结构体
 */
export interface GetEventBusRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
}
/**
 * UpdateConnection请求参数结构体
 */
export interface UpdateConnectionRequest {
    /**
      * 连接器ID
      */
    ConnectionId: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 使能开关
      */
    Enable?: boolean;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 连接器名称
      */
    ConnectionName?: string;
}
/**
 * DeleteTarget请求参数结构体
 */
export interface DeleteTargetRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件目标ID
      */
    TargetId: string;
    /**
      * 事件规则ID
      */
    RuleId: string;
}
/**
 * Ckafka 连接器参数
 */
export interface CkafkaParams {
    /**
      * kafka offset
      */
    Offset: string;
    /**
      * ckafka  topic
      */
    TopicName: string;
}
/**
 * UpdateRule请求参数结构体
 */
export interface UpdateRuleRequest {
    /**
      * 事件规则ID
      */
    RuleId: string;
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 使能开关。
      */
    Enable?: boolean;
    /**
      * 规则描述，不限字符类型，200字符描述以内。
      */
    Description?: string;
    /**
      * 事件规则名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
      */
    RuleName?: string;
}
/**
 * Transform输出参数
 */
export interface OutputStructParam {
    /**
      * 对应输出json中的key
      */
    Key: string;
    /**
      * 可以填json-path也可以支持常量或者内置关键字date类型
      */
    Value: string;
    /**
      * value的数据类型, 可选值: STRING, NUMBER,BOOLEAN,NULL,SYS_VARIABLE,JSONPATH
      */
    ValueType: string;
}
/**
 * CheckTransformation请求参数结构体
 */
export interface CheckTransformationRequest {
    /**
      * 待处理的json字符串
      */
    Input: string;
    /**
      * 一个转换规则列表
      */
    Transformations: Array<Transformation>;
}
/**
 * UpdateConnection返回参数结构体
 */
export interface UpdateConnectionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRule请求参数结构体
 */
export interface GetRuleRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件规则ID
      */
    RuleId: string;
}
/**
 * UpdateTarget请求参数结构体
 */
export interface UpdateTargetRequest {
    /**
      * 事件集ID
      */
    EventBusId: string;
    /**
      * 事件规则ID
      */
    RuleId: string;
    /**
      * 事件目标ID
      */
    TargetId: string;
    /**
      * 开启批量投递使能
      */
    EnableBatchDelivery?: boolean;
    /**
      * 批量投递最长等待时间
      */
    BatchTimeout?: number;
    /**
      * 批量投递最大事件条数
      */
    BatchEventCount?: number;
}
/**
 * eb event信息
 */
export interface Event {
    /**
      * 事件源的信息,新产品上报必须符合EB的规范
      */
    Source: string;
    /**
      * 事件数据，内容由创建事件的系统来控制，当前datacontenttype仅支持application/json;charset=utf-8，所以该字段是json字符串
      */
    Data: string;
    /**
      * 事件类型，可自定义，选填。云服务默认写 COS:Created:PostObject，用“：”分割类型字段
      */
    Type: string;
    /**
      * 事件来源详细描述，可自定义，选填。云服务默认为标准qcs资源表示语法：qcs::dts:ap-guangzhou:appid/uin:xxx
      */
    Subject: string;
}
/**
 * UpdateEventBus返回参数结构体
 */
export interface UpdateEventBusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * APIGWParams描述
 */
export interface APIGWParams {
    /**
      * HTTPS
      */
    Protocol: string;
    /**
      * POST
      */
    Method: string;
}
