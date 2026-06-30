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
 * 用来描述ckafka投递目标
 */
export interface CkafkaTargetParams {
  /**
   * 要投递到的ckafka topic
   */
  TopicName: string
  /**
   * 重试策略
   */
  RetryPolicy: RetryPolicy
  /**
   * 事件投递kafka时的协议格式；目前只支持两种格式：1.CloudEvent(完整的cloudevent消息协议)2.CloudEventDataKey(cloudevent协议中的data字段内容)
   */
  EventDeliveryFormat?: string
}

/**
 * DeleteTarget返回参数结构体
 */
export interface DeleteTargetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * CheckRule请求参数结构体
 */
export interface CheckRuleRequest {
  /**
   * Event信息
   */
  Event: string
  /**
   * EventPattern信息
   */
  EventPattern: string
}

/**
 * 日志存储过滤条件
 */
export interface LogFilters {
  /**
   * 过滤字段名称，取值范围如下:region(地域)，type(事件类型)，source(事件源)，status(事件状态)
   */
  Key: string
  /**
   * 运算符, 全等 eq，不等 neq，相似 like，排除相似 not like,  小于 lt，小于且等于 lte，大于 gt，大于且等于 gte，在范围内 range，不在范围内 norange
   */
  Operator: string
  /**
   * 过滤值，范围运算需要同时输入两个值，以英文逗号分隔

   */
  Value: string
}

/**
 * CreateEventBus请求参数结构体
 */
export interface CreateEventBusRequest {
  /**
   * <p>事件集名称，只能包含字母、中文、数字、下划线、连字符，以字母/中文开头，以数字、字母或中文结尾，2~60个字符</p>
   */
  EventBusName: string
  /**
   * <p>事件集描述，只能包含数字、中英文及常用标点符号，不超过200个字符</p>
   */
  Description?: string
  /**
   * <p>事件存储时长</p><p>单位：day</p>
   */
  SaveDays?: number
  /**
   * <p>是否开启事件存储</p>
   */
  EnableStore?: boolean
}

/**
 * 平台事件匹配规则
 */
export interface PlatformEventSummary {
  /**
   * <p>平台事件名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * <p>平台事件匹配规则</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventPattern?: string
}

/**
 * 用来描述一个ckafka投递目标的重试策略
 */
export interface RetryPolicy {
  /**
   * 重试间隔 单位:秒
   */
  RetryInterval: number
  /**
   * 最大重试次数
   */
  MaxRetryAttempts: number
}

/**
 * CreateTransformation请求参数结构体
 */
export interface CreateTransformationRequest {
  /**
   * 事件总线 id
   */
  EventBusId: string
  /**
   * 规则id
   */
  RuleId: string
  /**
   * 一个转换规则列表，当前仅限定一个;示例如下：[{"Extraction":{"ExtractionInputPath":"$.data.payload","Format":"JSON"},"EtlFilter":{"Filter":"{\"source\":\"ckafka.cloud.tencent\"}"},"Transform":{"OutputStructs":[{"Key":"op","Value":"$.op","ValueType":"JSONPATH"},{"Key":"table","Value":"$.source.table","ValueType":"JSONPATH"},{"Key":"id","Value":"$.after.id","ValueType":"JSONPATH"},{"Key":"app_id","Value":"$.after.app_id","ValueType":"JSONPATH"},{"Key":"spu_id","Value":"$.after.spu_id","ValueType":"JSONPATH"}]}}]
   */
  Transformations: Array<Transformation>
}

/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
  /**
   * <p>事件总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * <p>每页事件条数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * <p>页码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: number
  /**
   * <p>事件查询结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<SearchLogResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEventBuses返回参数结构体
 */
export interface ListEventBusesResponse {
  /**
   * 事件集信息
   */
  EventBuses?: Array<EventBus>
  /**
   * 事件集总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTarget请求参数结构体
 */
export interface CreateTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 目标类型;取值范围:scf(云函数)/cls(日志服务)/amp(消息推送)/ckafka(消息推送)/es(大数据elastic-search)
   */
  Type: string
  /**
   * 目标描述;scf类型示例:
{"ResourceDescription":"qcs::scf:ap-guangzhou:uin/2252646423:namespace/default/function/john-test-0326/$LATEST"};
cls类型示例:
{"ResourceDescription":"qcs::cls:ap-guangzhou:uin/12323442323:topic/7103f705-6c38-4b64-ac9d-428af0f2e732"}
ckafka类型示例:
{"ResourceDescription":"qcs::ckafka:ap-guangzhou:uin/1500000688:ckafkaId/uin/1500000688/ckafka-018q1nwj","CkafkaTargetParams":{"TopicName":"alert","RetryPolicy":{"RetryInterval":60,"MaxRetryAttempts":360}}}
amp类型-邮件/短信示例:
{"ResourceDescription":"qcs::eb-amp:ap-guangzhou:uin/100012505002:","AMPParams":{"NotificationTemplateId":10181,"Lang":"cn","NoticeReceivers":[{"UserType":"User","UserIds":["9424525"],"TimeWindow":{"From":"09:30:00","To":"23:30:00"},"Channels":["Email","SMS"]}]}}
es类型示例:
{"ResourceDescription":"qcs::es:ap-guangzhou:uin/1500000688:instance/es-7cplmhsd","ESTargetParams":{"EsVersion":"7.14.2","UserName":"elastic","Password":"xxxxx","NetMode":"privateLink","IndexPrefix":"auto-test","IndexSuffixMode":"default","RotationInterval":"none","IndexTemplateType":"","OutputMode":"default"}}
   */
  TargetDescription: TargetDescription
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 批量投递最长等待时间
   */
  BatchTimeout?: number
  /**
   * 批量投递最大事件条数
   */
  BatchEventCount?: number
  /**
   * 开启批量投递使能
   */
  EnableBatchDelivery?: boolean
}

/**
 * 日志检索详情
 */
export interface SearchLogResult {
  /**
   * <p>单条日志上报时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * <p>日志内容详情</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * <p>事件来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * <p>事件类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>事件匹配规则</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleIds?: string
  /**
   * <p>实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subject?: string
  /**
   * <p>地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * <p>事件状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
  /**
   * 事件规则ID
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRule返回参数结构体
 */
export interface UpdateRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTransformation返回参数结构体
 */
export interface DeleteTransformationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformProducts返回参数结构体
 */
export interface ListPlatformProductsResponse {
  /**
   * 平台产品列表
   */
  PlatformProducts?: Array<PlatformProduct>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetEventBus请求参数结构体
 */
export interface GetEventBusRequest {
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
}

/**
 * UpdateConnection请求参数结构体
 */
export interface UpdateConnectionRequest {
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 描述
   */
  Description?: string
  /**
   * 连接器名称
   */
  ConnectionName?: string
}

/**
 * Transform输出参数
 */
export interface OutputStructParam {
  /**
   * 对应输出json中的key
   */
  Key: string
  /**
   * 可以填json-path也可以支持常量或者内置关键字date类型
   */
  Value: string
  /**
   * value的数据类型, 可选值: STRING, NUMBER,BOOLEAN,NULL,SYS_VARIABLE,JSONPATH
   */
  ValueType: string
}

/**
 * 事件总线资源标签
 */
export interface Tag {
  /**
   * 标签名称
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * GetRule请求参数结构体
 */
export interface GetRuleRequest {
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
  /**
   * <p>事件规则ID</p>
   */
  RuleId: string
}

/**
 * 日志查询相关接口filter参数定义
 */
export interface LogFilter {
  /**
   * 过滤字段名称
   */
  Key?: string
  /**
   * 运算符，全等 eq，不等 neq，相似 like，排除相似 not like,  小于 lt，小于且等于 lte，大于 gt，大于且等于 gte，在范围内 range，不在范围内 norange
   */
  Operator?: string
  /**
   * 过滤值,范围运算需要同时输入两个值，以英文逗号分隔

   */
  Value?: string
  /**
   * 该层级filters逻辑关系，取值 "AND" 或 "OR"
   */
  Type?: string
  /**
   * LogFilters数组
   */
  Filters?: Array<LogFilters>
}

/**
 * APIGWParams描述
 */
export interface APIGWParams {
  /**
   * HTTPS
   */
  Protocol: string
  /**
   * POST
   */
  Method: string
}

/**
 * 平台产品基础信息
 */
export interface PlatformProduct {
  /**
   * <p>平台产品名称</p>
   */
  ProductName?: string
  /**
   * <p>平台产品类型</p>
   */
  ProductType?: string
}

/**
 * 描述如何提取数据
 */
export interface Extraction {
  /**
   * JsonPath, 不指定则使用默认值$.
   */
  ExtractionInputPath: string
  /**
   * 取值: TEXT/JSON
   */
  Format: string
  /**
   * 仅在Text需要传递
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextParams?: TextParams
}

/**
 * Data Transfer Service参数
 */
export interface DTSParams {
  /**
   * Consumer Group Name
   */
  ConsumerGroupName: string
  /**
   * 账户名
   */
  Account: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password: string
}

/**
 * CreateTarget返回参数结构体
 */
export interface CreateTargetResponse {
  /**
   * 目标ID
   */
  TargetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRule请求参数结构体
 */
export interface UpdateRuleRequest {
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 使能开关。
   */
  Enable?: boolean
  /**
   * 事件规则描述，只能包含数字、中英文及常用标点符号，不超过200个字符
   */
  Description?: string
  /**
   * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
   */
  EventPattern?: string
  /**
   * 事件规则名称，只能包含字母、中文、数字、下划线、连字符，以字母/中文开头，以数字、字母或中文结尾，2~60个字符
   */
  RuleName?: string
}

/**
 * CreateConnection返回参数结构体
 */
export interface CreateConnectionResponse {
  /**
   * 连接器ID
   */
  ConnectionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTargets请求参数结构体
 */
export interface ListTargetsRequest {
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
  /**
   * <p>事件规则ID</p>
   */
  RuleId: string
  /**
   * <p>根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）</p>
   */
  OrderBy?: string
  /**
   * <p>返回数量，默认为20，最大值为100。</p>
   */
  Limit?: number
  /**
   * <p>分页偏移量，默认为0。</p>
   */
  Offset?: number
  /**
   * <p>以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）</p>
   */
  Order?: string
}

/**
 * 一个转换器
 */
export interface Transformation {
  /**
   * 描述如何提取数据，{"ExtractionInputPath":"$.data.payload","Format":"JSON"}
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extraction?: Extraction
  /**
   * 描述如何过滤数据;{"Filter":"{\"source\":\"ckafka.cloud.tencent\"}"}
注意：此字段可能返回 null，表示取不到有效值。
   */
  EtlFilter?: EtlFilter
  /**
   * 描述如何数据转换;"OutputStructs":[{"Key":"op","Value":"$.op","ValueType":"JSONPATH"}]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transform?: Transform
}

/**
 * UpdateTransformation返回参数结构体
 */
export interface UpdateTransformationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTransformation返回参数结构体
 */
export interface CheckTransformationResponse {
  /**
   * 经过Transformations处理之后的数据
   */
  Output?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTargets返回参数结构体
 */
export interface ListTargetsResponse {
  /**
   * <p>目标总数</p>
   */
  TotalCount?: number
  /**
   * <p>目标信息</p>
   */
  Targets?: Array<Target>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述如何过滤数据
 */
export interface EtlFilter {
  /**
   * 语法Rule规则保持一致
   */
  Filter: string
}

/**
 * ConnectionDescription描述
 */
export interface ConnectionDescription {
  /**
   * 资源qcs六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
   */
  ResourceDescription: string
  /**
   * apigw参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  APIGWParams?: APIGWParams
  /**
   * ckafka参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CkafkaParams?: CkafkaParams
  /**
   * data transfer service (DTS)参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DTSParams?: DTSParams
  /**
   * tdmq参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TDMQParams?: TDMQParams
}

/**
 * Target信息
 */
export interface Target {
  /**
   * <p>目标类型</p>
   */
  Type?: string
  /**
   * <p>事件集ID</p>
   */
  EventBusId?: string
  /**
   * <p>目标ID</p>
   */
  TargetId?: string
  /**
   * <p>目标描述</p>
   */
  TargetDescription?: TargetDescription
  /**
   * <p>事件规则ID</p>
   */
  RuleId?: string
  /**
   * <p>开启批量投递使能</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableBatchDelivery?: boolean
  /**
   * <p>批量投递最长等待时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchTimeout?: number
  /**
   * <p>批量投递最大事件条数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchEventCount?: number
}

/**
 * DeleteEventBus请求参数结构体
 */
export interface DeleteEventBusRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * ListEventBuses请求参数结构体
 */
export interface ListEventBusesRequest {
  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：created_at（创建时间）, updated_at（修改时间）
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
   */
  Order?: string
  /**
   * 过滤字段范围: EventBusName(事件集名称)/EventBusId(事件集Id)/Type(事件集类型:Cloud(云服务);Platform(平台型);Custom(自定义))/TagKey(标签键)。每次请求的Filters的上限为10，Filter.Values的上限为5。[{"Name":"Type","Values":["Cloud","Platform"]}]
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
}

/**
 * CreateTransformation返回参数结构体
 */
export interface CreateTransformationResponse {
  /**
   * 生成的转换器id
   */
  TransformationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 平台事件名称
 */
export interface PlatformEventDetail {
  /**
   * <p>事件名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * <p>事件类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
}

/**
 * DeleteTransformation请求参数结构体
 */
export interface DeleteTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
}

/**
 * Ckafka 连接器参数
 */
export interface CkafkaParams {
  /**
   * kafka offset
   */
  Offset: string
  /**
   * ckafka  topic
   */
  TopicName: string
}

/**
 * eb event信息
 */
export interface Event {
  /**
   * 事件源的信息,新产品上报必须符合EB的规范
   */
  Source: string
  /**
   * 事件数据，内容由创建事件的系统来控制，当前datacontenttype仅支持application/json;charset=utf-8，所以该字段是json字符串
   */
  Data: string
  /**
   * 事件类型，可自定义，选填。云服务默认写 COS:Created:PostObject，用“：”分割类型字段
   */
  Type: string
  /**
   * 事件来源详细描述，可自定义，选填。云服务默认为标准qcs资源表示语法：qcs::dts:ap-guangzhou:appid/uin:xxx
   */
  Subject: string
  /**
   * 事件发生的毫秒时间戳，
time.Now().UnixNano()/1e6
   */
  Time?: number
  /**
   * 事件的地域信息，没有则默认是EB所在的地域信息
   */
  Region?: string
  /**
   * 用于描述事件状态，非必须，默认是""
   */
  Status?: string
  /**
   * 事件的唯一id，用户侧主动上传则需要保证风格一致
   */
  Id?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
}

/**
 * UpdateTarget请求参数结构体
 */
export interface UpdateTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 事件目标ID
   */
  TargetId: string
  /**
   * 开启批量投递使能
   */
  EnableBatchDelivery?: boolean
  /**
   * 批量投递最长等待时间
   */
  BatchTimeout?: number
  /**
   * 批量投递最大事件条数
   */
  BatchEventCount?: number
}

/**
 * ListConnections返回参数结构体
 */
export interface ListConnectionsResponse {
  /**
   * 连接器信息
   */
  Connections?: Array<Connection>
  /**
   * 连接器总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformProducts请求参数结构体
 */
export type ListPlatformProductsRequest = null

/**
 * PublishEvent请求参数结构体
 */
export interface PublishEventRequest {
  /**
   * 事件列表
   */
  EventList: Array<Event>
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * 描述如何数据转换

 */
export interface Transform {
  /**
   * 描述如何数据转换
   */
  OutputStructs: Array<OutputStructParam>
}

/**
 * ListPlatformEventNames请求参数结构体
 */
export interface ListPlatformEventNamesRequest {
  /**
   * 平台产品类型
   */
  ProductType: string
}

/**
 * 事件集信息
 */
export interface EventBus {
  /**
   * 更新时间
   */
  ModTime: string
  /**
   * 事件集描述，不限字符类型，200字符描述以内
   */
  Description: string
  /**
   * 创建时间
   */
  AddTime: string
  /**
   * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  EventBusName: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件集类型
   */
  Type: string
  /**
   * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 连接器基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionBriefs?: Array<ConnectionBrief>
  /**
   * 目标简要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetBriefs?: Array<TargetBrief>
}

/**
 * ListPlatformEventPatterns返回参数结构体
 */
export interface ListPlatformEventPatternsResponse {
  /**
   * 平台产品事件匹配规则
   */
  EventPatterns?: Array<PlatformEventSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRules请求参数结构体
 */
export interface ListRulesRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）,name（规则名称）
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
   */
  Order?: string
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
   */
  EventPattern: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则名称，只能包含字母、中文、数字、下划线、连字符，以字母/中文开头，以数字、字母或中文结尾，2~60个字符
   */
  RuleName: string
  /**
   * 使能开关。
   */
  Enable?: boolean
  /**
   * 事件规则描述，只能包含数字、中英文及常用标点符号，不超过200个字符
   */
  Description?: string
}

/**
 * DeleteConnection返回参数结构体
 */
export interface DeleteConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTransformation返回参数结构体
 */
export interface GetTransformationResponse {
  /**
   * 转换规则列表
   */
  Transformations?: Array<Transformation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRule返回参数结构体
 */
export interface CheckRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTarget返回参数结构体
 */
export interface UpdateTargetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishEvent返回参数结构体
 */
export interface PublishEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则信息
 */
export interface Rule {
  /**
   * 状态
   */
  Status?: string
  /**
   * 修改时间
   */
  ModTime?: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 描述
   */
  Description?: string
  /**
   * 规则ID
   */
  RuleId?: string
  /**
   * 创建时间
   */
  AddTime?: string
  /**
   * 事件集ID
   */
  EventBusId?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * Target 简要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets?: Array<TargetBrief>
  /**
   * rule设置的dlq规则. 可能为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterConfig?: DeadLetterConfig
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
  Values: Array<string>
  /**
   * 过滤键的名称。EventBusName(事件集名称)/EventBusId(事件集Id)/Type(事件集类型:Cloud(云服务);Platform(平台型);Custom(自定义))/TagKey(标签键)
   */
  Name: string
}

/**
 * Connection信息
 */
export interface Connection {
  /**
   * 状态
   */
  Status: string
  /**
   * 更新时间
   */
  ModTime: string
  /**
   * 使能开关
   */
  Enable: boolean
  /**
   * 描述
   */
  Description: string
  /**
   * 创建时间
   */
  AddTime: string
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 连接器描述
   */
  ConnectionDescription: ConnectionDescription
  /**
   * 连接器名称
   */
  ConnectionName: string
  /**
   * 类型
   */
  Type: string
}

/**
 * DeleteEventBus返回参数结构体
 */
export interface DeleteEventBusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEventBus返回参数结构体
 */
export interface CreateEventBusResponse {
  /**
   * <p>事件集ID</p>
   */
  EventBusId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConnection请求参数结构体
 */
export interface DeleteConnectionRequest {
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * UpdateTransformation请求参数结构体
 */
export interface UpdateTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
  /**
   * 一个转换规则列表，当前仅限定一个
   */
  Transformations: Array<Transformation>
}

/**
 * GetPlatformEventTemplate请求参数结构体
 */
export interface GetPlatformEventTemplateRequest {
  /**
   * <p>平台产品事件类型</p>
   */
  EventType: string
}

/**
 * PutEvents返回参数结构体
 */
export interface PutEventsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTransformation请求参数结构体
 */
export interface CheckTransformationRequest {
  /**
   * 待处理的json字符串
   */
  Input: string
  /**
   * 一个转换规则列表
   */
  Transformations: Array<Transformation>
}

/**
 * UpdateConnection返回参数结构体
 */
export interface UpdateConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEventBus返回参数结构体
 */
export interface UpdateEventBusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TDMQ参数详情
 */
export interface TDMQParams {
  /**
   * <p>集群类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * <p>集群支撑网接入点</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterEndPoint?: string
}

/**
 * GetEventBus返回参数结构体
 */
export interface GetEventBusResponse {
  /**
   * <p>更新时间</p>
   */
  ModTime?: string
  /**
   * <p>事件集描述</p>
   */
  Description?: string
  /**
   * <p>日志主题ID</p>
   */
  ClsTopicId?: string
  /**
   * <p>创建时间</p>
   */
  AddTime?: string
  /**
   * <p>日志集ID</p>
   */
  ClsLogsetId?: string
  /**
   * <p>事件集名称</p>
   */
  EventBusName?: string
  /**
   * <p>事件集ID</p>
   */
  EventBusId?: string
  /**
   * <p>事件集类型</p><p>枚举值：</p><ul><li>Cloud： 云服务事件集</li><li>Platform： 平台事件集</li><li>Custom： 自定义事件集</li></ul>
   */
  Type?: string
  /**
   * <p>计费模式</p>
   */
  PayMode?: string
  /**
   * <p>EB日志存储时长</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SaveDays?: number
  /**
   * <p>EB日志主题ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicId?: string
  /**
   * <p>是否开启存储</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableStore?: boolean
  /**
   * <p>消息序列，是否有序</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkMode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogTagValue请求参数结构体
 */
export interface DescribeLogTagValueRequest {
  /**
   * <p>起始时间</p>
   */
  StartTime: number
  /**
   * <p>结束时间</p>
   */
  EndTime: number
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
  /**
   * <p>聚合字段,取值范围如下：Source(事件源),RuleIds(命中规则),Subject(实例ID),Region(地域)</p>
   */
  GroupField: string
  /**
   * <p>页数</p>
   */
  Page: number
  /**
   * <p>每页数据大小</p>
   */
  Limit: number
  /**
   * <p>筛选条件</p>
   */
  Filter?: Array<LogFilter>
}

/**
 * 目标简要信息
 */
export interface TargetBrief {
  /**
   * 目标ID
   */
  TargetId: string
  /**
   * 目标类型
   */
  Type: string
}

/**
 * ListRules返回参数结构体
 */
export interface ListRulesResponse {
  /**
   * 事件规则信息
   */
  Rules?: Array<Rule>
  /**
   * 事件规则总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述Es规则目标
 */
export interface ESTargetParams {
  /**
   * <p>网络连接类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetMode: string
  /**
   * <p>索引前缀</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexPrefix: string
  /**
   * <p>es日志轮换粒度</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RotationInterval: string
  /**
   * <p>DTS事件配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputMode: string
  /**
   * <p>DTS索引配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexSuffixMode: string
  /**
   * <p>es模版类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexTemplateType?: string
}

/**
 * GetRule返回参数结构体
 */
export interface GetRuleResponse {
  /**
   * <p>事件集id</p>
   */
  EventBusId?: string
  /**
   * <p>事件规则id</p>
   */
  RuleId?: string
  /**
   * <p>事件规则名称</p>
   */
  RuleName?: string
  /**
   * <p>事件规则状态</p>
   */
  Status?: string
  /**
   * <p>使能开关</p>
   */
  Enable?: boolean
  /**
   * <p>事件规则描述</p>
   */
  Description?: string
  /**
   * <p>事件模式</p>
   */
  EventPattern?: string
  /**
   * <p>创建时间</p>
   */
  AddTime?: string
  /**
   * <p>更新时间</p>
   */
  ModTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEventBus请求参数结构体
 */
export interface UpdateEventBusRequest {
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
  /**
   * <p>事件集描述，不限字符类型，200字符描述以内</p>
   */
  Description?: string
  /**
   * <p>事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符</p>
   */
  EventBusName?: string
  /**
   * <p>事件存储时长</p><p>单位：day</p>
   */
  SaveDays?: number
  /**
   * <p>事件存储主题ID</p>
   */
  LogTopicId?: string
  /**
   * <p>是否开启存储</p>
   */
  EnableStore?: boolean
}

/**
 * GetPlatformEventTemplate返回参数结构体
 */
export interface GetPlatformEventTemplateResponse {
  /**
   * <p>平台产品事件模板</p>
   */
  EventTemplate?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云函数参数
 */
export interface SCFParams {
  /**
   * 批量投递最长等待时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchTimeout?: number
  /**
   * 批量投递最大事件条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchEventCount?: number
  /**
   * 开启批量投递使能
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableBatchDelivery?: boolean
}

/**
 * rule对应的dlq配置
 */
export interface DeadLetterConfig {
  /**
   * 支持dlq、丢弃、忽略错误继续传递三种模式, 分别对应: DLQ,DROP,IGNORE_ERROR
   */
  DisposeMethod: string
  /**
   * 设置了DLQ方式后,此选项必填. 错误消息会被投递到对应的kafka topic中
注意：此字段可能返回 null，表示取不到有效值。
   */
  CkafkaDeliveryParams?: CkafkaDeliveryParams
}

/**
 * ListConnections请求参数结构体
 */
export interface ListConnectionsRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 根据哪个字段进行返回结果排序，目前支持如下以下字段：AddTime, ModTime
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
   */
  Order?: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * 描述如何切分数据
 */
export interface TextParams {
  /**
   * 逗号、| 、制表符、空格、换行符、%、#，限制长度为 1。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Separator?: string
  /**
   * 填写正则表达式：长度128
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regex?: string
}

/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
  /**
   * <p>起始时间unix 毫秒时间戳</p>
   */
  StartTime: number
  /**
   * <p>结束时间unix 毫秒时间戳</p>
   */
  EndTime: number
  /**
   * <p>事件集ID</p>
   */
  EventBusId: string
  /**
   * <p>页码</p>
   */
  Page: number
  /**
   * <p>每页数据大小</p>
   */
  Limit: number
  /**
   * <p>事件查询筛选条件；示例如下：[{&quot;key&quot;:&quot;host&quot;,&quot;operator&quot;:&quot;eq&quot;,&quot;value&quot;:&quot;106.53.106.243&quot;},{&quot;type&quot;:&quot;AND&quot;,&quot;filters&quot;:[{&quot;key&quot;:&quot;region&quot;,&quot;operator&quot;:&quot;like&quot;,&quot;value&quot;:&quot;<em>guangzhou</em>&quot;},{&quot;key&quot;:&quot;type&quot;,&quot;operator&quot;:&quot;eq&quot;,&quot;value&quot;:&quot;cvm:ErrorEvent:GuestReboot&quot;}]},{&quot;type&quot;:&quot;OR&quot;,&quot;filters&quot;:[{&quot;key&quot;:&quot;field1&quot;,&quot;operator&quot;:&quot;like&quot;,&quot;value&quot;:&quot;<em>access</em>&quot;},{&quot;key&quot;:&quot;field2&quot;,&quot;operator&quot;:&quot;eq&quot;,&quot;value&quot;:&quot;custom&quot;}]}]</p>
   */
  Filter?: Array<LogFilter>
  /**
   * <p>事件查询结果排序，[&quot;timestamp&quot;,&quot;subject&quot;]</p>
   */
  OrderFields?: Array<string>
  /**
   * <p>排序方式，asc 从旧到新，desc 从新到旧</p>
   */
  OrderBy?: string
}

/**
 * 用来描述需要投递到kafka topic的参数
 */
export interface CkafkaDeliveryParams {
  /**
   * ckafka topic name
   */
  TopicName: string
  /**
   * ckafka资源qcs六段式
   */
  ResourceDescription: string
}

/**
 * CreateConnection请求参数结构体
 */
export interface CreateConnectionRequest {
  /**
   * 连接器描述
   */
  ConnectionDescription: ConnectionDescription
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 连接器名称
   */
  ConnectionName: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 连接器类型，目前支持以下类型:apigw/ckafka/dts/tdmq
   */
  Type?: string
}

/**
 * ListPlatformEventPatterns请求参数结构体
 */
export interface ListPlatformEventPatternsRequest {
  /**
   * 平台产品类型
   */
  ProductType: string
}

/**
 * GetTransformation请求参数结构体
 */
export interface GetTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
}

/**
 * 连接器基础信息
 */
export interface ConnectionBrief {
  /**
   * 连接器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 连接器状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * PutEvents请求参数结构体
 */
export interface PutEventsRequest {
  /**
   * 事件列表
   */
  EventList: Array<Event>
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * TargetDescription描述
 */
export interface TargetDescription {
  /**
   * QCS资源六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)；scf资源六段式示例[qcs::scf:ap-guangzhou:uin/123:namespace/test(函数命名空间)/function/test(函数名)/$LATEST(函数版本)] amp资源六段式示例[qcs::eb-amp:ap-guangzhou:uin/123:] ckafka资源六段式示例[qcs::ckafka:ap-guangzhou:uin/123:ckafkaId/uin/123/ckafka-123(ckafka实例Id)] cls资源六段式示例[qcs::cls:ap-guangzhou:uin/123:topic/122332442(topicId)] es资源六段式示例[qcs::es:ap-guangzhou:appid/123/uin/456:instance/es-7cplmhsd(es实例Id)]
   */
  ResourceDescription: string
  /**
   * 云函数参数
   */
  SCFParams?: SCFParams
  /**
   * Ckafka参数
   */
  CkafkaTargetParams?: CkafkaTargetParams
  /**
   * ElasticSearch参数
   */
  ESTargetParams?: ESTargetParams
}

/**
 * DeleteTarget请求参数结构体
 */
export interface DeleteTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件目标ID
   */
  TargetId: string
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * DescribeLogTagValue返回参数结构体
 */
export interface DescribeLogTagValueResponse {
  /**
   * <p>事件查询维度值结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformEventNames返回参数结构体
 */
export interface ListPlatformEventNamesResponse {
  /**
   * 平台产品列表
   */
  EventNames?: Array<PlatformEventDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
