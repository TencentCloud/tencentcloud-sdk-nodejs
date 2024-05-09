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
 * Span日志部分


 */
export interface SpanLog {
  /**
   * 日志时间戳
   */
  Timestamp: number
  /**
   * 标签
   */
  Fields: Array<SpanTag>
}

/**
 * ModifyApmInstance请求参数结构体
 */
export interface ModifyApmInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名
   */
  Name: string
  /**
   * 标签列表
   */
  Tags?: Array<ApmTag>
  /**
   * 实例详情
   */
  Description?: string
  /**
   * Trace数据保存时长
   */
  TraceDuration?: number
  /**
   * 是否开启计费
   */
  OpenBilling?: boolean
  /**
   * 实例上报额度
   */
  SpanDailyCounters?: number
  /**
   * 错误率阈值
   */
  ErrRateThreshold?: number
  /**
   * 采样率
   */
  SampleRate?: number
  /**
   * 是否开启错误采样 0 关 1 开
   */
  ErrorSample?: number
  /**
   * 慢请求阈值
   */
  SlowRequestSavedThreshold?: number
  /**
   * 是否开启日志功能 0 关 1 开
   */
  IsRelatedLog?: number
  /**
   * 日志地域
   */
  LogRegion?: string
  /**
   * CLS日志主题ID | ES 索引名
   */
  LogTopicID?: string
  /**
   * CLS日志集 | ES集群ID
   */
  LogSet?: string
  /**
   * CLS | ES
   */
  LogSource?: string
  /**
   * 用户自定义展示标签列表
   */
  CustomShowTags?: Array<string>
  /**
   * 修改计费模式
1为预付费
0为按量付费
   */
  PayMode?: number
}

/**
 * apm实例信息
 */
export interface ApmInstanceDetail {
  /**
   * 存储使用量(MB)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AmountOfUsedStorage?: number
  /**
   * 实例名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 实例所属tag列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<ApmTag>
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 创建人Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: string
  /**
   * 该实例已上报的服务端应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceCount?: number
  /**
   * 日均上报Span数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CountOfReportSpanPerDay?: number
  /**
   * AppId信息
   */
  AppId?: number
  /**
   * Trace数据保存时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceDuration?: number
  /**
   * 实例描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 实例所属地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 实例上报额度
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpanDailyCounters?: number
  /**
   * 实例是否开通计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingInstance?: number
  /**
   * 错误率阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrRateThreshold?: number
  /**
   * 采样率阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleRate?: number
  /**
   * 是否开启错误采样 0  关 1 开
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorSample?: number
  /**
   * 慢调用保存阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlowRequestSavedThreshold?: number
  /**
   * cls日志所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRegion?: string
  /**
   * 日志来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSource?: string
  /**
   * 日志功能开关 0 关 | 1 开
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsRelatedLog?: number
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicID?: string
  /**
   * 该实例已上报的客户端应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientCount?: number
  /**
   * 该实例已上报的总应用数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * CLS日志集 | ES集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSet?: string
  /**
   * Metric数据保存时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricDuration?: number
  /**
   * 用户自定义展示标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomShowTags?: Array<string>
  /**
   * 实例计费模式
1为预付费
0为按量付费
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 实例计费模式是否生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayModeEffective?: boolean
}

/**
 * CreateApmInstance请求参数结构体
 */
export interface CreateApmInstanceRequest {
  /**
   * 实例名
   */
  Name: string
  /**
   * 实例描述信息
   */
  Description?: string
  /**
   * Trace数据保存时长，单位为天默认存储为3天
   */
  TraceDuration?: number
  /**
   * 标签列表
   */
  Tags?: Array<ApmTag>
  /**
   * 实例上报额度值，默认赋值为0表示不限制上报额度
   */
  SpanDailyCounters?: number
  /**
   * 实例的计费模式
   */
  PayMode?: number
}

/**
 * ModifyGeneralApmApplicationConfig请求参数结构体
 */
export interface ModifyGeneralApmApplicationConfigRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 需要修改的字段key value分别指定字段名、字段值
   */
  Tags: Array<ApmTag>
  /**
   * 需要修改配置的服务列表名称
   */
  ServiceNames?: Array<string>
}

/**
 * DescribeServiceOverview返回参数结构体
 */
export interface DescribeServiceOverviewResponse {
  /**
   * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Records: Array<ApmMetricRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询
 */
export interface QueryMetricItem {
  /**
   * 指标名
   */
  MetricName: string
  /**
   * 同比，已弃用，不建议使用
   */
  Compare?: string
  /**
   * 同比，支持多种同比方式
   */
  Compares?: Array<string>
}

/**
 * TerminateApmInstance请求参数结构体
 */
export interface TerminateApmInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeApmInstances返回参数结构体
 */
export interface DescribeApmInstancesResponse {
  /**
   * apm实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<ApmInstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组件
 */
export interface Instrument {
  /**
   * 组件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 组件开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
}

/**
 * DescribeTagValues返回参数结构体
 */
export interface DescribeTagValuesResponse {
  /**
   * 维度值列表
   */
  Values?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Span对象
 */
export interface Span {
  /**
   * Trace Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceID?: string
  /**
   * 日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  Logs?: Array<SpanLog>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<SpanTag>
  /**
   * 上报应用服务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Process?: SpanProcess
  /**
   * 产生时间戳(毫秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: number
  /**
   * Span名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationName?: string
  /**
   * 关联关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  References?: Array<SpanReference>
  /**
   * 产生时间戳(微秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 持续耗时(微妙)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * Span Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpanID?: string
  /**
   * 产生时间戳(毫秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTimeMillis?: number
  /**
   * Parent Span Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSpanID?: string
}

/**
 * apm Agent信息
 */
export interface ApmAgentInfo {
  /**
   * Agent下载地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentDownloadURL: string
  /**
   * Collector上报地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectorURL: string
  /**
   * Token信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token: string
  /**
   * 外网上报地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicCollectorURL: string
  /**
   * 自研VPC上报地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InnerCollectorURL: string
  /**
   * 内网上报地址(Private Link上报地址)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateLinkCollectorURL: string
}

/**
 * DescribeGeneralSpanList返回参数结构体
 */
export interface DescribeGeneralSpanListResponse {
  /**
   * 总数量
   */
  TotalCount: number
  /**
   * Span分页列表
   */
  Spans: Array<Span>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指标列表单元
 */
export interface ApmMetricRecord {
  /**
   * field数组
   */
  Fields: Array<ApmField>
  /**
   * tag数组
   */
  Tags: Array<ApmTag>
}

/**
 * DescribeServiceOverview请求参数结构体
 */
export interface DescribeServiceOverviewRequest {
  /**
   * 过滤条件
   */
  Filters: Array<Filter>
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 聚合维度
   */
  GroupBy: Array<string>
  /**
   * 排序
   */
  OrderBy?: OrderBy
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 每页大小
   */
  Limit?: number
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 分页起始点
   */
  Offset?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * DescribeApmAgent返回参数结构体
 */
export interface DescribeApmAgentResponse {
  /**
   * Agent信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApmAgent?: ApmAgentInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagValues请求参数结构体
 */
export interface DescribeTagValuesRequest {
  /**
   * 维度名
   */
  TagKey: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * Or过滤条件
   */
  OrFilters?: Array<Filter>
  /**
   * 使用类型
   */
  Type?: string
}

/**
 * 指标维度信息
 */
export interface ApmField {
  /**
   * 昨日同比指标值，已弃用，不建议使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareVal: string
  /**
   * Compare值结果数组，推荐使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareVals: Array<APMKVItem>
  /**
   * 指标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: number
  /**
   * 指标所对应的单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit: string
  /**
   * 请求数
   */
  Key: string
  /**
   * 同环比上周期具体数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastPeriodValue: Array<APMKV>
}

/**
 * 指标曲线数据
 */
export interface Line {
  /**
   * 指标名
   */
  MetricName: string
  /**
   * 指标中文名
   */
  MetricNameCN: string
  /**
   * 时间序列
   */
  TimeSerial: Array<number | bigint>
  /**
   * 数据序列
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSerial: Array<number>
  /**
   * 维度列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<ApmTag>
}

/**
 * 应用相关的配置列表项
 */
export interface ApmApplicationConfigView {
  /**
   * 实例ID
   */
  InstanceKey?: string
  /**
   * 服务名
   */
  ServiceName?: string
  /**
   * 接口过滤
   */
  OperationNameFilter?: string
  /**
   * 异常过滤
   */
  ExceptionFilter?: string
  /**
   * 错误码过滤
   */
  ErrorCodeFilter?: string
  /**
   * 应用诊断开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventEnable?: boolean
  /**
   * URL收敛开关 0 关 1 开
   */
  UrlConvergenceSwitch?: number
  /**
   * URL收敛阈值
   */
  UrlConvergenceThreshold?: number
  /**
   * URL收敛规则正则
   */
  UrlConvergence?: string
  /**
   * URL排除规则正则
   */
  UrlExclude?: string
  /**
   * 是否开启日志 0 关 1 开
   */
  IsRelatedLog?: number
  /**
   * 日志来源	
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSource?: string
  /**
   * CLS日志集
   */
  LogSet?: string
  /**
   * 日志主题ID
   */
  LogTopicID?: string
  /**
   * 线程剖析开关
   */
  SnapshotEnable?: boolean
  /**
   * 线程剖析超时阈值
   */
  SnapshotTimeout?: number
  /**
   * 探针开启开关
   */
  AgentEnable?: boolean
  /**
   * 组件列表开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstrumentList?: Array<Instrument>
  /**
   * 链路压缩开关
   */
  TraceSquash?: boolean
}

/**
 * 维度（标签）对象
 */
export interface ApmTag {
  /**
   * 维度Key(列名，标签Key)
   */
  Key: string
  /**
   * 维度值（标签值）
   */
  Value: string
}

/**
 * Apm通用KV结构
 */
export interface APMKVItem {
  /**
   * Key值定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * Value值定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * sql排序字段
 */
export interface OrderBy {
  /**
   * 需要排序的字段
   */
  Key: string
  /**
   * 顺序排序/倒序排序
   */
  Value: string
}

/**
 * DescribeMetricRecords返回参数结构体
 */
export interface DescribeMetricRecordsResponse {
  /**
   * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Records?: Array<ApmMetricRecord>
  /**
   * 查询指标结果集条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGeneralSpanList请求参数结构体
 */
export interface DescribeGeneralSpanListRequest {
  /**
   * 分页
   */
  Offset: number
  /**
   * 列表项个数
   */
  Limit: number
  /**
   * 排序
   */
  OrderBy?: OrderBy
  /**
   * span查询开始时间戳（单位:秒）
   */
  StartTime?: number
  /**
   * 实例名
   */
  InstanceId?: string
  /**
   * 通用过滤参数
   */
  Filters?: Array<Filter>
  /**
   * 业务自身服务名
   */
  BusinessName?: string
  /**
   * span查询结束时间戳（单位:秒）
   */
  EndTime?: number
}

/**
 * 查询过滤参数
 */
export interface Filter {
  /**
   * 过滤方式（=, !=, in）
   */
  Type: string
  /**
   * 过滤维度名
   */
  Key: string
  /**
   * 过滤值，in过滤方式用逗号分割多个值
   */
  Value: string
}

/**
 * APM浮点数类型键值对
 */
export interface APMKV {
  /**
   * Key值定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * Value值定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: number
}

/**
 * DescribeApmAgent请求参数结构体
 */
export interface DescribeApmAgentRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 接入方式
   */
  AgentType?: string
  /**
   * 环境
   */
  NetworkMode?: string
  /**
   * 语言
   */
  LanguageEnvironment?: string
  /**
   * 上报方式
   */
  ReportMethod?: string
}

/**
 * DescribeMetricRecords请求参数结构体
 */
export interface DescribeMetricRecordsRequest {
  /**
   * 过滤条件
   */
  Filters: Array<Filter>
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 聚合维度
   */
  GroupBy: Array<string>
  /**
   * 排序
   */
  OrderBy?: OrderBy
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 每页大小
   */
  Limit?: number
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 分页起始点
   */
  Offset?: number
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 业务名称（默认值：taw）
   */
  BusinessName?: string
  /**
   * 页码
   */
  PageIndex?: number
  /**
   * 页长
   */
  PageSize?: number
  /**
   * Or过滤条件
   */
  OrFilters?: Array<Filter>
}

/**
 * DescribeGeneralApmApplicationConfig返回参数结构体
 */
export interface DescribeGeneralApmApplicationConfigResponse {
  /**
   * 应用配置项
   */
  ApmApplicationConfigView?: ApmApplicationConfigView
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGeneralMetricData请求参数结构体
 */
export interface DescribeGeneralMetricDataRequest {
  /**
   * 要过滤的维度信息：
service_metric视图支持：service.name（服务名）、span.kind（客户端/服务端视角）为维度进行过滤，service.name（服务名）必填。
span.kind:
	server:服务端视角
	client:客户端视角
默认为服务端视角进行查询。
runtime_metric视图支持：service.name（服务名）维度进行过滤，service.name（服务名）必填。
sql_metric视图支持：service.name（服务名）、db.instance（数据库名称）、db.ip（数据库实例ip）维度进行过滤，查询service_slow_sql_count（慢sql）指标时service.name必填，查询sql_duration_avg（耗时）指标时db.instance（数据库名称）必填。
   */
  Filters: Array<GeneralFilter>
  /**
   * 需要查询的指标，不可自定义输入。
service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。
runtime_metric视图支持：service_gc_full_count（Full GC）。
sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。
   */
  Metrics: Array<string>
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 视图名称，不可自定义输入。支持：service_metric、runtime_metric、sql_metric。
   */
  ViewName: string
  /**
   * 聚合维度：
service_metric视图支持：service.name（服务名）、span.kind （客户端/服务端视角）维度进行聚合，service.name（服务名）必填。
runtime_metric视图支持：service.name（服务名）维度进行聚合，service.name（服务名）必填。
sql_metric视图支持：service.name（服务名）、db.statement（sql语句）维度进行聚合，查询service_slow_sql_count（慢sql）时service.name（服务名）必填，查询sql_duration_avg（耗时）指标时service.name（服务名）、db.statement（sql语句）必填。
   */
  GroupBy?: Array<string>
  /**
   * 起始时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。
   */
  StartTime?: number
  /**
   * 结束时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。
   */
  EndTime?: number
  /**
   * 聚合粒度，单位为秒，最小为60s，即一分钟的聚合粒度；如果为空或0则计算开始时间到截止时间的指标数据，上报其他值会报错。
   */
  Period?: number
  /**
   * 对查询指标进行排序：
service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。
runtime_metric视图支持：service_gc_full_count（Full GC）。
sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。
asc:对查询指标进行升序排序
desc：对查询指标进行降序排序
   */
  OrderBy?: OrderBy
  /**
   * 查询指标的限制条数，目前最多展示50条数据，PageSize取值为1-50，上送PageSize则根据PageSize的值展示限制条数。
   */
  PageSize?: number
}

/**
 * CreateApmInstance返回参数结构体
 */
export interface CreateApmInstanceResponse {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Span上下游关联关系
 */
export interface SpanReference {
  /**
   * 关联关系类型
   */
  RefType: string
  /**
   * Span ID
   */
  SpanID: string
  /**
   * Trace ID
   */
  TraceID: string
}

/**
 * 服务相关信息
 */
export interface SpanProcess {
  /**
   * 应用服务名称
   */
  ServiceName: string
  /**
   * Tags 标签数组
   */
  Tags: Array<SpanTag>
}

/**
 * DescribeGeneralApmApplicationConfig请求参数结构体
 */
export interface DescribeGeneralApmApplicationConfigRequest {
  /**
   * 应用名
   */
  ServiceName: string
  /**
   * 业务系统ID
   */
  InstanceId: string
}

/**
 * ModifyApmInstance返回参数结构体
 */
export interface ModifyApmInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询过滤参数
 */
export interface GeneralFilter {
  /**
   * 过滤维度名
   */
  Key: string
  /**
   * 过滤值
   */
  Value: string
}

/**
 * DescribeApmInstances请求参数结构体
 */
export interface DescribeApmInstancesRequest {
  /**
   * Tag列表
   */
  Tags?: Array<ApmTag>
  /**
   * 搜索实例名
   */
  InstanceName?: string
  /**
   * 过滤实例ID
   */
  InstanceIds?: Array<string>
  /**
   * 是否查询官方demo实例
   */
  DemoInstanceFlag?: number
  /**
   * 是否查询全地域实例
   */
  AllRegionsFlag?: number
}

/**
 * 标签
 */
export interface SpanTag {
  /**
   * 标签类型
   */
  Type: string
  /**
   * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * DescribeGeneralMetricData返回参数结构体
 */
export interface DescribeGeneralMetricDataResponse {
  /**
   * 指标结果集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Records: Array<Line>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGeneralApmApplicationConfig返回参数结构体
 */
export interface ModifyGeneralApmApplicationConfigResponse {
  /**
   * 返回值描述
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateApmInstance返回参数结构体
 */
export interface TerminateApmInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
