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
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 业务系统名
   */
  Name: string
  /**
   * Tag 列表
   */
  Tags?: Array<ApmTag>
  /**
   * 业务系统描述
   */
  Description?: string
  /**
   * Trace 数据保存时长（单位：天）
   */
  TraceDuration?: number
  /**
   * 是否开启计费
   */
  OpenBilling?: boolean
  /**
   * 业务系统上报额度
   */
  SpanDailyCounters?: number
  /**
   * 错误率警示线，当应用的平均错误率超出该阈值时，系统会给出异常提示。
   */
  ErrRateThreshold?: number
  /**
   * 采样率（单位：%）
   */
  SampleRate?: number
  /**
   * 是否开启错误采样（0=关, 1=开）
   */
  ErrorSample?: number
  /**
   * 采样慢调用保存阈值（单位：ms）
   */
  SlowRequestSavedThreshold?: number
  /**
   * 是否开启日志功能（0=关, 1=开）
   */
  IsRelatedLog?: number
  /**
   * 日志地域，开启日志功能后才会生效
   */
  LogRegion?: string
  /**
   * CLS 日志主题 ID，开启日志功能后才会生效
   */
  LogTopicID?: string
  /**
   * 日志集，开启日志功能后才会生效
   */
  LogSet?: string
  /**
   * 日志源，开启日志功能后才会生效
   */
  LogSource?: string
  /**
   * 用户自定义展示标签列表
   */
  CustomShowTags?: Array<string>
  /**
   * 修改计费模式（1为预付费，0为按量付费）
   */
  PayMode?: number
  /**
   * 响应时间警示线
   */
  ResponseDurationWarningThreshold?: number
  /**
   * 是否免费（0=付费版；1=TSF 受限免费版；2=免费版），默认0
   */
  Free?: number
  /**
   * 是否关联 Dashboard（0=关,1=开）
   */
  IsRelatedDashboard?: number
  /**
   * 关联的 Dashboard ID，开启关联 Dashboard 后才会生效
   */
  DashboardTopicID?: string
  /**
   * 是否开启 SQL 注入检测（0=关,1=开）
   */
  IsSqlInjectionAnalysis?: number
  /**
   * 是否开启组件漏洞检测（0=关,1=开）
   */
  IsInstrumentationVulnerabilityScan?: number
}

/**
 * APM 业务系统信息
 */
export interface ApmInstanceDetail {
  /**
   * 业务系统 ID
   */
  InstanceId?: string
  /**
   * 业务系统名
   */
  Name?: string
  /**
   * 业务系统描述信息
   */
  Description?: string
  /**
   * 业务系统状态。{
1: 初始化中; 2: 运行中; 4: 限流}
   */
  Status?: number
  /**
   * 业务系统所属地域
   */
  Region?: string
  /**
   * 业务系统 Tag 列表
   */
  Tags?: Array<ApmTag>
  /**
   * AppID 信息
   */
  AppId?: number
  /**
   * 创建人 Uin
   */
  CreateUin?: string
  /**
   * 存储使用量(单位：MB)
   */
  AmountOfUsedStorage?: number
  /**
   * 该业务系统服务端应用数量
   */
  ServiceCount?: number
  /**
   * 日均上报 Span 数
   */
  CountOfReportSpanPerDay?: number
  /**
   * Trace 数据保存时长（单位：天）
   */
  TraceDuration?: number
  /**
   * 业务系统上报额度
   */
  SpanDailyCounters?: number
  /**
   * 业务系统是否已开通计费（0=未开通，1=已开通）
   */
  BillingInstance?: number
  /**
   * 错误警示线（单位：%）
   */
  ErrRateThreshold?: number
  /**
   * 采样率（单位：%）
   */
  SampleRate?: number
  /**
   * 是否开启错误采样（0=关, 1=开）
   */
  ErrorSample?: number
  /**
   * 采样慢调用保存阈值（单位：ms）
   */
  SlowRequestSavedThreshold?: number
  /**
   * CLS 日志所在地域
   */
  LogRegion?: string
  /**
   * 日志源
   */
  LogSource?: string
  /**
   * 日志功能开关（0=关， 1=开）
   */
  IsRelatedLog?: number
  /**
   * 日志主题 ID
   */
  LogTopicID?: string
  /**
   * 该业务系统客户端应用数量
   */
  ClientCount?: number
  /**
   * 该业务系统最近2天活跃应用数量
   */
  TotalCount?: number
  /**
   * CLS 日志集
   */
  LogSet?: string
  /**
   * Metric 数据保存时长（单位：天）
   */
  MetricDuration?: number
  /**
   * 用户自定义展示标签列表
   */
  CustomShowTags?: Array<string>
  /**
   * 业务系统计费模式（1为预付费，0为按量付费）
   */
  PayMode?: number
  /**
   * 业务系统计费模式是否生效
   */
  PayModeEffective?: boolean
  /**
   * 响应时间警示线（单位：ms）
   */
  ResponseDurationWarningThreshold?: number
  /**
   * 是否免费（0=否，1=限额免费，2=完全免费），默认0
   */
  Free?: number
  /**
   * 是否 TSF 默认业务系统（0=否，1=是）
   */
  DefaultTSF?: number
  /**
   * 是否关联 Dashboard（0=关, 1=开）
   */
  IsRelatedDashboard?: number
  /**
   * 关联的 Dashboard ID
   */
  DashboardTopicID?: string
  /**
   * 是否开启组件漏洞检测（0=关， 1=开）
   */
  IsInstrumentationVulnerabilityScan?: number
  /**
   * 是否开启 SQL 注入分析（0=关， 1=开）
   */
  IsSqlInjectionAnalysis?: number
  /**
   * 限流原因。{
1: 正式版限额;
2: 试用版限额;
4: 试用版到期;
8: 账号欠费
}
   */
  StopReason?: number
}

/**
 * CreateApmInstance请求参数结构体
 */
export interface CreateApmInstanceRequest {
  /**
   * 业务系统名
   */
  Name: string
  /**
   * 业务系统描述信息
   */
  Description?: string
  /**
   * Trace 数据保存时长（单位：天，默认存储时长为3天）
   */
  TraceDuration?: number
  /**
   * 业务系统 Tag 列表
   */
  Tags?: Array<ApmTag>
  /**
   * 业务系统上报额度值，默认赋值为0表示不限制上报额度，已废弃
   */
  SpanDailyCounters?: number
  /**
   * 业务系统的计费模式（0=按量付费，1=预付费）
   */
  PayMode?: number
  /**
   * 是否为免费版业务系统（0=付费版；1=TSF 受限免费版；2=免费版）
   */
  Free?: number
}

/**
 * ModifyGeneralApmApplicationConfig请求参数结构体
 */
export interface ModifyGeneralApmApplicationConfigRequest {
  /**
   * 业务系统Id
   */
  InstanceId: string
  /**
   * 需要修改的字段key value分别指定字段名、字段值
[具体字段请见](https://cloud.tencent.com/document/product/248/111241)
   */
  Tags: Array<ApmTag>
  /**
   * 需要修改配置的应用列表名称
   */
  ServiceNames?: Array<string>
}

/**
 * DescribeServiceOverview返回参数结构体
 */
export interface DescribeServiceOverviewResponse {
  /**
   * 指标结果集
   */
  Records?: Array<ApmMetricRecord>
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
   * 同比，现支持 CompareByYesterday (与昨天相比)和CompareByLastWeek (与上周相比)
   */
  Compares?: Array<string>
  /**
   * 同比，已弃用，不建议使用
   */
  Compare?: string
}

/**
 * TerminateApmInstance请求参数结构体
 */
export interface TerminateApmInstanceRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
}

/**
 * DescribeApmInstances返回参数结构体
 */
export interface DescribeApmInstancesResponse {
  /**
   * APM 业务系统列表
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
   */
  Name?: string
  /**
   * 组件开关
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
 * Span 对象
 */
export interface Span {
  /**
   * Trace ID
   */
  TraceID?: string
  /**
   * 日志
   */
  Logs?: Array<SpanLog>
  /**
   * 标签
   */
  Tags?: Array<SpanTag>
  /**
   * 上报应用服务信息
   */
  Process?: SpanProcess
  /**
   * 产生时间戳(毫秒)
   */
  Timestamp?: number
  /**
   * Span 名称
   */
  OperationName?: string
  /**
   * 关联关系
   */
  References?: Array<SpanReference>
  /**
   * 产生时间戳(微秒)
   */
  StartTime?: number
  /**
   * 持续耗时(微妙)
   */
  Duration?: number
  /**
   * Span ID
   */
  SpanID?: string
  /**
   * 产生时间戳(毫秒)
   */
  StartTimeMillis?: number
  /**
   * Parent Span ID
   */
  ParentSpanID?: string
}

/**
 * APM Agent 信息
 */
export interface ApmAgentInfo {
  /**
   * Agent 下载地址
   */
  AgentDownloadURL?: string
  /**
   * Collector 上报地址
   */
  CollectorURL?: string
  /**
   * Token 信息
   */
  Token?: string
  /**
   * 外网上报地址
   */
  PublicCollectorURL?: string
  /**
   * 自研 VPC 上报地址
   */
  InnerCollectorURL?: string
  /**
   * 内网上报地址( Private Link 上报地址)
   */
  PrivateLinkCollectorURL?: string
}

/**
 * DescribeGeneralSpanList返回参数结构体
 */
export interface DescribeGeneralSpanListResponse {
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * Span 分页列表
   */
  Spans?: Array<Span>
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
   * field数组，用于指标的查询结果
   */
  Fields?: Array<ApmField>
  /**
   * tag数组，用于区分 Groupby 的对象
   */
  Tags?: Array<ApmTag>
}

/**
 * DescribeServiceOverview请求参数结构体
 */
export interface DescribeServiceOverviewRequest {
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 业务系统 ID
   */
  InstanceId?: string
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 聚合维度
   */
  GroupBy?: Array<string>
  /**
   * 开始时间（单位：秒）
   */
  StartTime?: number
  /**
   * 结束时间（单位：秒）
   */
  EndTime?: number
  /**
   * 排序方式
Value 填写：
- asc：对查询指标进行升序排序
- desc：对查询指标进行降序排序
   */
  OrderBy?: OrderBy
  /**
   * 每页大小
   */
  Limit?: number
  /**
   * 分页起始点
   */
  Offset?: number
}

/**
 * DescribeApmAgent返回参数结构体
 */
export interface DescribeApmAgentResponse {
  /**
   * Agent 信息
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
   * 业务系统 ID
   */
  InstanceId?: string
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 开始时间（单位为秒）
   */
  StartTime?: number
  /**
   * 结束时间（单位为秒）
   */
  EndTime?: number
  /**
   * Or 过滤条件
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
   * 指标名
   */
  Key?: string
  /**
   * 指标数值
   */
  Value?: number
  /**
   * 指标所对应的单位
   */
  Unit?: string
  /**
   * 同比结果数组，推荐使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareVals?: Array<APMKVItem>
  /**
   * 同比上一个周期的具体指标数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastPeriodValue?: Array<APMKV>
  /**
   * 同比指标值，已弃用，不建议使用
   */
  CompareVal?: string
}

/**
 * 指标曲线数据
 */
export interface Line {
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 指标中文名
   */
  MetricNameCN?: string
  /**
   * 时间序列
   */
  TimeSerial?: Array<number | bigint>
  /**
   * 数据序列
   */
  DataSerial?: Array<number>
  /**
   * 维度列表
   */
  Tags?: Array<ApmTag>
}

/**
 * 应用相关的配置列表项
 */
export interface ApmApplicationConfigView {
  /**
   * 业务系统 ID
   */
  InstanceKey?: string
  /**
   * 应用名
   */
  ServiceName?: string
  /**
   * 接口过滤
   */
  OperationNameFilter?: string
  /**
   * 错误类型过滤
   */
  ExceptionFilter?: string
  /**
   * HTTP 状态码过滤
   */
  ErrorCodeFilter?: string
  /**
   * 应用诊断开关（已废弃）
   */
  EventEnable?: boolean
  /**
   * URL 收敛开关 0 关 1 开
   */
  UrlConvergenceSwitch?: number
  /**
   * URL 收敛阈值
   */
  UrlConvergenceThreshold?: number
  /**
   * URL 收敛规则正则
   */
  UrlConvergence?: string
  /**
   * URL 排除规则正则
   */
  UrlExclude?: string
  /**
   * 是否开启日志 0 关 1 开
   */
  IsRelatedLog?: number
  /**
   * 日志源
   */
  LogSource?: string
  /**
   * 日志集
   */
  LogSet?: string
  /**
   * 日志主题
   */
  LogTopicID?: string
  /**
   * 方法栈快照开关 true 开启 false 关闭
   */
  SnapshotEnable?: boolean
  /**
   * 慢调用监听触发阈值
   */
  SnapshotTimeout?: number
  /**
   * 探针总开关
   */
  AgentEnable?: boolean
  /**
   * 组件列表开关（已废弃）
   */
  InstrumentList?: Array<Instrument>
  /**
   * 链路压缩开关（已废弃）
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
 * APM 通用 KV 结构
 */
export interface APMKVItem {
  /**
   * Key 值定义
   */
  Key: string
  /**
   * Value 值定义
   */
  Value: string
}

/**
 * 排序字段
 */
export interface OrderBy {
  /**
   * 需要排序的字段，现支持 startTIme, endTime, duration
   */
  Key: string
  /**
   * asc 顺序排序 / desc 倒序排序
   */
  Value: string
}

/**
 * DescribeMetricRecords返回参数结构体
 */
export interface DescribeMetricRecordsResponse {
  /**
   * 指标结果集
   */
  Records?: Array<ApmMetricRecord>
  /**
   * 查询指标结果集条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGeneralOTSpanList返回参数结构体
 */
export interface DescribeGeneralOTSpanListResponse {
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 装有查询结果 Spans 的 Trace 结构体。OpenTelemetry 标准 Trace 结构体哈希后的字符串，先将 Trace 利用 ptrace.JSONMarshaler 转换成 Json 字符串，再用 gzip 压缩，最后转换成 base64 标准的字符串。
   */
  Spans?: string
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
   * 业务系统 ID
   */
  InstanceId?: string
  /**
   * Span 查询开始时间戳（单位：秒）
   */
  StartTime?: number
  /**
   * Span 查询结束时间戳（单位：秒）
   */
  EndTime?: number
  /**
   * 通用过滤参数
   */
  Filters?: Array<Filter>
  /**
   * 排序
现支持的 Key 有：

- startTime(开始时间)
- endTime(结束时间)
- duration(响应时间)

现支持的 Value 有：

- desc(降序排序)
- asc(升序排序)
   */
  OrderBy?: OrderBy
  /**
   * 业务自身服务名，控制台用户请填写taw
   */
  BusinessName?: string
  /**
   * 单页项目个数，默认为10000，合法取值范围为0～10000
   */
  Limit?: number
  /**
   * 分页
   */
  Offset?: number
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
 * APM 浮点数类型键值对
 */
export interface APMKV {
  /**
   * Key 值定义
   */
  Key?: string
  /**
   * Value 值定义
   */
  Value?: number
}

/**
 * DescribeGeneralOTSpanList请求参数结构体
 */
export interface DescribeGeneralOTSpanListRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * Span 查询开始时间戳（单位：秒）
   */
  StartTime: number
  /**
   * Span 查询结束时间戳（单位：秒）
   */
  EndTime: number
  /**
   * 通用过滤参数
   */
  Filters?: Array<Filter>
  /**
   * 排序
现支持的 Key 有：

- startTime(开始时间)
- endTime(结束时间)
- duration(响应时间)

现支持的 Value 有：

- desc(降序排序)
- asc(升序排序)
   */
  OrderBy?: OrderBy
  /**
   * 业务自身服务名，控制台用户请填写taw
   */
  BusinessName?: string
  /**
   * 单页项目个数，默认为10000，合法取值范围为0～10000
   */
  Limit?: number
  /**
   * 分页
   */
  Offset?: number
}

/**
 * DescribeApmAgent请求参数结构体
 */
export interface DescribeApmAgentRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 接入方式，现支持 skywalking, ot, ebpf 方式接入上报，不填默认为 ot
   */
  AgentType?: string
  /**
   * 上报环境，现支持 pl (内网上报), public (外网), inner (自研 VPC )环境上报，不传默认为 public
   */
  NetworkMode?: string
  /**
   * 语言，现支持 java, golang, php, python, dotNet, nodejs 语言上报，不传默认为 golang
   */
  LanguageEnvironment?: string
  /**
   * 上报方式，已弃用
   */
  ReportMethod?: string
}

/**
 * DescribeMetricRecords请求参数结构体
 */
export interface DescribeMetricRecordsRequest {
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 业务系统 ID
   */
  InstanceId?: string
  /**
   * 开始时间（单位为秒）
   */
  StartTime?: number
  /**
   * 结束时间（单位为秒）
   */
  EndTime?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * Or 过滤条件
   */
  OrFilters?: Array<Filter>
  /**
   * 聚合维度
   */
  GroupBy?: Array<string>
  /**
   * 排序
现支持的 Key 有：

- startTime(开始时间)
- endTime(结束时间)
- duration(响应时间)

现支持的 Value 有：

- desc(降序排序)
- asc(升序排序)
   */
  OrderBy?: OrderBy
  /**
   * 业务名称，控制台用户请填写taw。
   */
  BusinessName?: string
  /**
   * 特殊处理查询结果
   */
  Type?: string
  /**
   * 每页大小，默认为1000，合法取值范围为0~1000
   */
  Limit?: number
  /**
   * 分页起始点
   */
  Offset?: number
  /**
   * 页码
   */
  PageIndex?: number
  /**
   * 页长
   */
  PageSize?: number
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
   * 需要查询的指标名称，不可自定义输入，[详情请见。](https://cloud.tencent.com/document/product/248/101681)
   */
  Metrics: Array<string>
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 视图名称，不可自定义输入。[详情请见。](https://cloud.tencent.com/document/product/248/101681)
   */
  ViewName: string
  /**
   * 要过滤的维度信息，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681)
   */
  Filters: Array<GeneralFilter>
  /**
   * 聚合维度，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681)
   */
  GroupBy?: Array<string>
  /**
   * 起始时间的时间戳，支持查询30天内的指标数据。（单位：秒）
   */
  StartTime?: number
  /**
   * 结束时间的时间戳，支持查询30天内的指标数据。（单位：秒）
   */
  EndTime?: number
  /**
   * 是否按固定时间跨度聚合，填入1及大于1的值按1处理，不填按0处理。
- 填入0，则计算开始时间到截止时间的指标数据。
- 填入1，则会按照开始时间到截止时间的时间跨度选择聚合粒度：
 - 时间跨度 (0,12) 小时，则按一分钟粒度聚合。
 - 时间跨度 [12,48] 小时，则按五分钟粒度聚合。
 - 时间跨度 (48, +∞) 小时，则按一小时粒度聚合。
   */
  Period?: number
  /**
   * 对查询指标进行排序：
Key 填写云 API 指标名称，[详情请见。](https://cloud.tencent.com/document/product/248/101681)
Value 填写排序方式：     
- asc：对查询指标进行升序排序
- desc：对查询指标进行降序排序
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
   * 业务系统 ID
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
   * Tag 列表
   */
  Tags?: Array<ApmTag>
  /**
   * 按业务系统名过滤
   */
  InstanceName?: string
  /**
   * 按业务系统 ID 过滤
   */
  InstanceIds?: Array<string>
  /**
   * 是否查询官方 Demo 业务系统（0=非 Demo 业务系统，1=Demo 业务系统，默认为0）
   */
  DemoInstanceFlag?: number
  /**
   * 是否查询全地域业务系统（0=不查询全地域，1=查询全地域，默认为0）
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
   */
  Records?: Array<Line>
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
