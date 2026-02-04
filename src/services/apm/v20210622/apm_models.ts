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
 * DescribeApmAssociation返回参数结构体
 */
export interface DescribeApmAssociationResponse {
  /**
   * 关联的产品实例ID
   */
  ApmAssociation?: ApmAssociation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeApmVulnerabilityCount返回参数结构体
 */
export interface DescribeApmVulnerabilityCountResponse {
  /**
   * 包含漏洞指标以及业务系统个数
   */
  VulnerabilityList?: Array<ApmMetricRecord>
  /**
   * 总漏洞个数
   */
  VulnerabilityCount?: number
  /**
   * 严重漏洞个数
   */
  ImportantVulnerabilityCount?: number
  /**
   * 高危漏洞个数
   */
  CriticalVulnerabilityCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 采样配置信息
 */
export interface ApmSampleConfig {
  /**
   * 实例ID
   */
  InstanceKey?: string
  /**
   * 服务名
   */
  ServiceName?: string
  /**
   * 采样名字
   */
  SampleName?: string
  /**
   * 接口名
   */
  OperationName?: string
  /**
   * 采样的span数
   */
  SpanNum?: number
  /**
   * 采样配置开关 0 关 1 开
   */
  Status?: number
  /**
   * tags数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<APMKVItem>
  /**
   * 采样率
   */
  SampleRate?: number
  /**
   * 0=精确匹配（默认）；1=前缀匹配；2=后缀匹配
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationType?: number
  /**
   * 配置Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
}

/**
 * 探针有关接口的相关配置
 */
export interface AgentOperationConfigView {
  /**
   * 当前接口配置是否开启了接口白名单配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionValid?: boolean
  /**
   * RetentionValid为false时生效，接口配置中的黑名单配置，配置中的接口不采集
注意：此字段可能返回 null，表示取不到有效值。
   */
  IgnoreOperation?: string
  /**
   * RetentionValid为true时生效，接口配置中的白名单配置，仅采集配置中的接口
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionOperation?: string
}

/**
 * 包含了节点的组件数量和健康度数量
 */
export interface SelectorView {
  /**
   * 组件数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Component?: ComponentTopologyView
}

/**
 * DescribeApmSampleConfig请求参数结构体
 */
export interface DescribeApmSampleConfigRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 采样规则名
   */
  SampleName?: string
}

/**
 * DescribeApmAllVulCount返回参数结构体
 */
export interface DescribeApmAllVulCountResponse {
  /**
   * 包含漏洞指标以及业务系统个数
   */
  VulnerabilityList?: Array<ApmMetricRecord>
  /**
   * 总漏洞个数
   */
  VulnerabilityCount?: number
  /**
   * 严重漏洞个数
   */
  ImportantVulnerabilityCount?: number
  /**
   * 高危漏洞个数
   */
  CriticalVulnerabilityCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmSampleConfig返回参数结构体
 */
export interface DescribeApmSampleConfigResponse {
  /**
   * 采样配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApmSampleConfigs?: Array<ApmSampleConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceOverview请求参数结构体
 */
export interface DescribeServiceOverviewRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 开始时间（单位：秒）
   */
  StartTime: number
  /**
   * 结束时间（单位：秒）
   */
  EndTime: number
  /**
   * 聚合维度
   */
  GroupBy: Array<string>
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
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
 * DescribeTopologyNew返回参数结构体
 */
export interface DescribeTopologyNewResponse {
  /**
   * 节点集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes?: Array<TopologyNode>
  /**
   * 边集合
   */
  Edges?: Array<TopologyEdgeNew>
  /**
   * 拓扑图是否有修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopologyModifyFlag?: number
  /**
   * 节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Selectors?: SelectorView
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOPRAllVulCount返回参数结构体
 */
export interface DescribeOPRAllVulCountResponse {
  /**
   * 包含漏洞指标以及业务系统个数
   */
  VulnerabilityList?: Array<ApmMetricRecord>
  /**
   * 总漏洞个数
   */
  VulnerabilityCount?: number
  /**
   * 严重漏洞个数
   */
  ImportantVulnerabilityCount?: number
  /**
   * 高危漏洞个数
   */
  CriticalVulnerabilityCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApmApplicationConfig返回参数结构体
 */
export interface ModifyApmApplicationConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmServiceMetric返回参数结构体
 */
export interface DescribeApmServiceMetricResponse {
  /**
   * 应用指标列表
   */
  ServiceMetricList?: Array<ApmServiceMetric>
  /**
   * 符合筛选条件的应用数
   */
  TotalCount?: number
  /**
   * 警示异常应用数
   */
  WarningErrorCount?: number
  /**
   * 应用总数
   */
  ApplicationCount?: number
  /**
   * 页码
   */
  Page?: number
  /**
   * 页大小
   */
  PageSize?: number
  /**
   * 异常应用数
   */
  ErrorCount?: number
  /**
   * 警示应用数
   */
  WarningCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApmAssociation请求参数结构体
 */
export interface ModifyApmAssociationRequest {
  /**
   * 关联的产品名，当前只支持Prometheus、CKafka
   */
  ProductName: string
  /**
   * 关联关系的状态：// 关联关系状态：1（启用）、2（不启用）
   */
  Status: number
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 关联的产品实例ID
   */
  PeerId?: string
  /**
   * CKafka消息主题
   */
  Topic?: string
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
   * Spans字段中包含了链路数据的全部内容，由于数据经过了压缩，需要对结果进行如下三步转换，以还原始的文本。
1. 将Spans字段中的文本进行 Base64 解码，得到经过压缩后字节数组。
2. 使用 gzip 对压缩后的字节数组进行解压，得到压缩前的字节数组。
3. 使用 UTF-8 字符集，将压缩前的字节数组转换为文本。

   */
  Spans?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmApplicationConfig返回参数结构体
 */
export interface DescribeApmApplicationConfigResponse {
  /**
   * Apm应用配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApmAppConfig: ApmAppConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmAssociation请求参数结构体
 */
export interface DescribeApmAssociationRequest {
  /**
   * 关联的产品名，当前只支持Prometheus
   */
  ProductName: string
  /**
   * 业务系统名
   */
  InstanceId: string
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
 * 节点位置信息
 */
export interface Position {
  /**
   * 节点位置横坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: number
  /**
   * 节点位置纵坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
}

/**
 * 包含了视图中节点组件类型的数量
 */
export interface ComponentTopologyView {
  /**
   * 服务纬度的节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Service?: number
  /**
   * 数据库节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Database?: number
  /**
   * 消息队列节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MQ?: number
}

/**
 * CreateProfileTask请求参数结构体
 */
export interface CreateProfileTaskRequest {
  /**
   * 应用名称
   */
  ServiceName: string
  /**
   * APM业务系统ID
   */
  InstanceId: string
  /**
   * 应用实例（在线）
   */
  ServiceInstance: string
  /**
   * 事件类型（cpu、alloc）
   */
  Event: string
  /**
   * 任务持续时长(单位：毫秒)，范围限制在5~180秒
   */
  Duration: number
  /**
   * 执行次数，范围限制在1~100次
   */
  AllTimes: number
  /**
   * 开始时间戳，0代表从当前开始(单位：秒)
   */
  StartTime?: number
  /**
   * 任务执行间隔(单位：毫秒)，范围限制在10~600秒，不可小于1.5倍的Duration
   */
  TaskInterval?: number
}

/**
 * DescribeApmVulnerabilityDetail请求参数结构体
 */
export interface DescribeApmVulnerabilityDetailRequest {
  /**
   * 秒级时间戳
   */
  StartTime: number
  /**
   * 秒级时间戳
   */
  EndTime: number
  /**
   * APM业务系统ID
   */
  InstanceId: string
  /**
   * 条件过滤，必填service.name, instrumentation.name, version, vul.id
   */
  Filters?: Array<Filter>
}

/**
 * DeleteApmSampleConfig返回参数结构体
 */
export interface DeleteApmSampleConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拓扑图边定义
 */
export interface TopologyEdgeNew {
  /**
   * 源节点
   */
  Source?: string
  /**
   * 边ID
   */
  Id?: string
  /**
   * 边权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 目标节点
   */
  Target?: string
  /**
   * 响应时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 错误率
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrRate?: number
  /**
   * 吞吐量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 边类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 边颜色
注意：此字段可能返回 null，表示取不到有效值。
   */
  Color?: string
  /**
   * Sql调用数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlRequestCount?: number
  /**
   * Sql调用错误数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlErrorRequestCount?: number
  /**
   * 边上源节点类型 应用/MQ/DB
   */
  SourceComp?: string
  /**
   * 边上目标节点类型 应用/MQ/DB
   */
  TargetComp?: string
}

/**
 * DescribeApmPrometheusRule请求参数结构体
 */
export interface DescribeApmPrometheusRuleRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
}

/**
 * CreateApmPrometheusRule返回参数结构体
 */
export interface CreateApmPrometheusRuleResponse {
  /**
   * 指标匹配规则的ID
   */
  RuleId?: number
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

/**
 * 展示apm业务系统关联prometheus关系返回体
 */
export interface ApmPrometheusRules {
  /**
   * 指标匹配规则ID
   */
  Id?: number
  /**
   * 指标匹配规则名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 规则生效的应用。生效于全部应用就传空字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceName?: string
  /**
   * 指标匹配规则状态：1(启用)、2（不启用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 指标匹配规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricNameRule?: string
  /**
   * 匹配类型：0精准匹配，1前缀匹配，2后缀匹配
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricMatchType?: number
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
 * 拓扑图边节点
 */
export interface TopologyNode {
  /**
   * 错误率
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrRate?: number
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kind?: string
  /**
   * 节点名
   */
  Name?: string
  /**
   * 节点权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 节点颜色
注意：此字段可能返回 null，表示取不到有效值。
   */
  Color?: string
  /**
   * 响应时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 吞吐量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 节点ID
   */
  Id?: string
  /**
   * 节点大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: string
  /**
   * 节点是否为组件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsModule?: boolean
  /**
   * 节点位置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: Position
  /**
   * 节点标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<ApmTag>
  /**
   * 节点是否可以下钻
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanDrillDown?: boolean
  /**
   * 资源层信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resource?: Resource
  /**
   * 拓扑节点视图名字
   */
  NodeView?: string
  /**
   * MQ 消费者视角的响应时间 ms
   */
  ConsumerDuration?: number
  /**
   * MQ 消费者视角的错误率 %
   */
  ConsumerErrRate?: number
  /**
   * MQ 消费者视角的吞吐量
   */
  ConsumerQps?: number
  /**
   * 应用 ID
   */
  ServiceId?: string
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
 * CreateApmSampleConfig请求参数结构体
 */
export interface CreateApmSampleConfigRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 采样率
   */
  SampleRate: number
  /**
   * 应用名
   */
  ServiceName: string
  /**
   * 采样规则名
   */
  SampleName: string
  /**
   * 采样Tags
   */
  Tags?: Array<APMKVItem>
  /**
   * 接口名
   */
  OperationName?: string
  /**
   * 0=精确匹配（默认）；1=前缀匹配；2=后缀匹配
   */
  OperationType?: number
}

/**
 * DescribeTagValues请求参数结构体
 */
export interface DescribeTagValuesRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 维度名
   */
  TagKey: string
  /**
   * 开始时间（单位为秒）
   */
  StartTime: number
  /**
   * 结束时间（单位为秒）
   */
  EndTime: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
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
 * apm应用指标信息
 */
export interface ApmServiceMetric {
  /**
   * filed数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fields?: Array<ApmField>
  /**
   * tag数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<ApmTag>
  /**
   * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceDetail?: ServiceDetail
}

/**
 * 查询应用配置返回参数
 */
export interface ApmAppConfig {
  /**
   * 实例ID
   */
  InstanceKey?: string
  /**
   * 服务名
   */
  ServiceName?: string
  /**
   * URL收敛开关
   */
  UrlConvergenceSwitch?: number
  /**
   * URL收敛阈值
   */
  UrlConvergenceThreshold?: number
  /**
   * URL收敛正则
   */
  UrlConvergence?: string
  /**
   * 异常过滤正则
   */
  ExceptionFilter?: string
  /**
   * 错误码过滤
   */
  ErrorCodeFilter?: string
  /**
   * 服务组件类型
   */
  Components?: string
  /**
   * URL排除正则
   */
  UrlExclude?: string
  /**
   * 日志来源
   */
  LogSource?: string
  /**
   * 日志所在地域
   */
  LogRegion?: string
  /**
   * 是否开启日志 0 关 1 开
   */
  IsRelatedLog?: number
  /**
   * 日志主题ID
   */
  LogTopicID?: string
  /**
   * 需过滤的接口名
   */
  IgnoreOperationName?: string
  /**
   * CLS日志集 | ES集群ID
   */
  LogSet?: string
  /**
   * 探针每秒上报trace数
   */
  TraceRateLimit?: number
  /**
   * 是否开启线程剖析
   */
  EnableSnapshot?: boolean
  /**
   * 线程剖析超时阈值
   */
  SnapshotTimeout?: number
  /**
   * 是否开启agent
   */
  AgentEnable?: boolean
  /**
   * 组件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstrumentList?: Array<Instrument>
  /**
   * 是否开启链路压缩
   */
  TraceSquash?: boolean
  /**
   * 是否开启应用诊断开关
   */
  EventEnable?: boolean
  /**
   * 探针接口相关配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentOperationConfigView?: AgentOperationConfigView
  /**
   * 是否开启应用日志配置
   */
  EnableLogConfig?: boolean
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceID?: string
  /**
   * 应用是否开启dashboard配置： false 关（与业务系统保持一致）/true 开（应用级配置）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableDashboardConfig?: boolean
  /**
   * 是否关联dashboard： 0 关 1 开
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsRelatedDashboard?: number
  /**
   * dashboard ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DashboardTopicID?: string
  /**
   * 是否开启应用级别配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableSecurityConfig?: boolean
  /**
   * 是否开启组件漏洞检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsInstrumentationVulnerabilityScan?: number
  /**
   * 是否开启SQL注入分析
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSqlInjectionAnalysis?: number
  /**
   * 是否开启远程命令执行分析
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsRemoteCommandExecutionAnalysis?: number
  /**
   * 是否开启内存马检测分析
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsMemoryHijackingAnalysis?: number
  /**
   * CLS索引类型(0=全文索引，1=键值索引)
   */
  LogIndexType?: number
  /**
   * traceId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogTraceIdKey?: string
  /**
   * 是否开启删除任意文件检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDeleteAnyFileAnalysis?: number
  /**
   * 是否开启读取任意文件检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsReadAnyFileAnalysis?: number
  /**
   * 是否开启上传任意文件检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUploadAnyFileAnalysis?: number
  /**
   * 是否开启包含任意文件检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIncludeAnyFileAnalysis?: number
  /**
   * 是否开启目录遍历检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDirectoryTraversalAnalysis?: number
  /**
   * 是否开启模板引擎注入检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsTemplateEngineInjectionAnalysis?: number
  /**
   * 是否开启脚本引擎注入检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsScriptEngineInjectionAnalysis?: number
  /**
   * 是否开启表达式注入检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsExpressionInjectionAnalysis?: number
  /**
   * 是否开启JNDI注入检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsJNDIInjectionAnalysis?: number
  /**
   * 是否开启JNI注入检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsJNIInjectionAnalysis?: number
  /**
   * 是否开启Webshell后门检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWebshellBackdoorAnalysis?: number
  /**
   * 是否开启反序列化检测（0-关闭，1-开启）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDeserializationAnalysis?: number
  /**
   * 接口名称自动收敛开关（0-关闭，1-开启）
   */
  UrlAutoConvergenceEnable?: boolean
  /**
   * URL长分段收敛阈值
   */
  UrlLongSegmentThreshold?: number
  /**
   * URL数字分段收敛阈值
   */
  UrlNumberSegmentThreshold?: number
  /**
   * 探针熔断内存阈值
   */
  DisableMemoryUsed?: number
  /**
   * 探针熔断CPU阈值
   */
  DisableCpuUsed?: number
  /**
   * 是否开启SQL参数获取
   */
  DbStatementParametersEnabled?: boolean
  /**
   * 慢SQL阈值
   */
  SlowSQLThresholds?: Array<ApmTag>
  /**
   * 是否开启脱敏规则
   */
  EnableDesensitizationRule?: number
  /**
   * 脱敏规则
   */
  DesensitizationRule?: string
  /**
   * spanId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogSpanIdKey?: string
  /**
   * 自动性能剖析配置
   */
  AutoProfilingConfig?: AutoProfilingConfig
}

/**
 * CreateApmSampleConfig返回参数结构体
 */
export interface CreateApmSampleConfigResponse {
  /**
   * 采样配置参数
   */
  ApmSampleConfig?: ApmSampleConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 指标数据单位
   */
  MetricUnit?: string
}

/**
 * ModifyApmAssociation返回参数结构体
 */
export interface ModifyApmAssociationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeGeneralSpanList请求参数结构体
 */
export interface DescribeGeneralSpanListRequest {
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
   * 单页项目个数，默认为1000，合法取值范围为1～1000
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
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 指标列表
   */
  Metrics: Array<QueryMetricItem>
  /**
   * 开始时间（单位为秒）
   */
  StartTime: number
  /**
   * 结束时间（单位为秒）
   */
  EndTime: number
  /**
   * 聚合维度
   */
  GroupBy: Array<string>
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * Or 过滤条件
   */
  OrFilters?: Array<Filter>
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
 * ModifyApmPrometheusRule请求参数结构体
 */
export interface ModifyApmPrometheusRuleRequest {
  /**
   * 规则ID
   */
  Id: number
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 所要修改的规则名
   */
  Name?: string
  /**
   * 规则状态：1(启用)、2（不启用）、3（删除）
   */
  Status?: number
  /**
   * 规则生效的应用。生效于全部应用就传空（这个如果不修改也要传旧的规则）
   */
  ServiceName?: string
  /**
   * 匹配类型：0精准匹配，1前缀匹配，2后缀匹配（这个如果不修改也要传旧的规则）
   */
  MetricMatchType?: number
  /**
   * 客户定义的命中指标名规则。
   */
  MetricNameRule?: string
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
  /**
   * 是否开启远程命令攻击检测
   */
  IsRemoteCommandExecutionAnalysis?: number
  /**
   * 是否开启内存马检测
   */
  IsMemoryHijackingAnalysis?: number
  /**
   * CLS索引类型(0=全文索引，1=键值索引)
   */
  LogIndexType?: number
  /**
   * traceId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogTraceIdKey?: string
  /**
   * 是否开启删除任意文件检测（0-关闭，1-开启）
   */
  IsDeleteAnyFileAnalysis?: number
  /**
   * 是否开启读取任意文件检测（0-关闭，1-开启）
   */
  IsReadAnyFileAnalysis?: number
  /**
   * 是否开启上传任意文件检测（0-关闭，1-开启）
   */
  IsUploadAnyFileAnalysis?: number
  /**
   * 是否开启包含任意文件检测（0-关闭，1-开启）
   */
  IsIncludeAnyFileAnalysis?: number
  /**
   * 是否开启目录遍历检测（0-关闭，1-开启）
   */
  IsDirectoryTraversalAnalysis?: number
  /**
   * 是否开启模板引擎注入检测（0-关闭，1-开启）
   */
  IsTemplateEngineInjectionAnalysis?: number
  /**
   * 是否开启脚本引擎注入检测（0-关闭，1-开启）
   */
  IsScriptEngineInjectionAnalysis?: number
  /**
   * 是否开启表达式注入检测（0-关闭，1-开启）
   */
  IsExpressionInjectionAnalysis?: number
  /**
   * 是否开启JNDI注入检测（0-关闭，1-开启）
   */
  IsJNDIInjectionAnalysis?: number
  /**
   * 是否开启JNI注入检测（0-关闭，1-开启）
   */
  IsJNIInjectionAnalysis?: number
  /**
   * 是否开启Webshell后门检测（0-关闭，1-开启）
   */
  IsWebshellBackdoorAnalysis?: number
  /**
   * 是否开启反序列化检测（0-关闭，1-开启）
   */
  IsDeserializationAnalysis?: number
  /**
   * URL长分段收敛阈值
   */
  UrlLongSegmentThreshold?: number
  /**
   * URL数字分段收敛阈值
   */
  UrlNumberSegmentThreshold?: number
  /**
   * spanId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogSpanIdKey?: string
}

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
 * 应用详细信息
 */
export interface ServiceDetail {
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceID?: string
  /**
   * 业务系统ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
  /**
   * 用户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppID?: number
  /**
   * 主账号uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUIN?: string
  /**
   * 应用名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceName?: string
  /**
   * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceDescription?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<ApmTag>
  /**
   * 业务系统名称
   */
  InstanceName?: string
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
 * DescribeApmPrometheusRule返回参数结构体
 */
export interface DescribeApmPrometheusRuleResponse {
  /**
   * 指标匹配规则
   */
  ApmPrometheusRules?: Array<ApmPrometheusRules>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApmSampleConfig返回参数结构体
 */
export interface ModifyApmSampleConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmApplicationConfig请求参数结构体
 */
export interface DescribeApmApplicationConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 服务名称
   */
  ServiceName: string
}

/**
 * CreateProfileTask返回参数结构体
 */
export interface CreateProfileTaskResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmVulnerabilityDetail返回参数结构体
 */
export interface DescribeApmVulnerabilityDetailResponse {
  /**
   * 漏洞详情
   */
  Tags?: Array<ApmTag>
  /**
   * 漏洞相关业务系统列表
   */
  ServiceInstanceList?: Array<ApmVulnerabilityServiceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApmPrometheusRule返回参数结构体
 */
export interface ModifyApmPrometheusRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 自动性能剖析配置
 */
export interface AutoProfilingConfig {
  /**
   * 自动CPU剖析任务开关
   */
  CpuProfilingEnable?: boolean
  /**
   * 自动内存剖析任务开关
   */
  MemoryProfilingEnable?: boolean
  /**
   * 自动CPU剖析任务阈值
   */
  CpuProfilingThreshold?: number
  /**
   * 自动内存剖析任务阈值
   */
  MemoryProfilingThreshold?: number
  /**
   * CPU自动剖析任务时长
   */
  CpuProfilingDuration?: number
  /**
   * 内存自动剖析任务时长
   */
  MemoryProfilingDuration?: number
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
 * APM应用实例漏洞相关信息
 */
export interface ApmVulnerabilityServiceDetail {
  /**
   * 应用实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceInstance?: string
  /**
   * 漏洞所在jar包路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 最近发生时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastOccurTime?: number
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
 * DescribeTopologyNew请求参数结构体
 */
export interface DescribeTopologyNewRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 查询开始时间
   */
  StartTime: number
  /**
   * 查询结束时间
   */
  EndTime: number
  /**
   * 应用名
   */
  ServiceName?: string
  /**
   * 上游层级
   */
  UpLevel?: number
  /**
   * 应用实例信息
   */
  ServiceInstance?: string
  /**
   * 下游层级
   */
  DownLevel?: number
  /**
   * 视角
   */
  View?: string
  /**
   * 过滤器
   */
  Filters?: Array<Filter>
  /**
   * 表示Topic（MQ拓扑图用）
   */
  Topic?: string
  /**
   * 视图筛选列表
   */
  Selectors?: Selectors
  /**
   * 视图ID
   */
  Id?: string
  /**
   * TraceID
   */
  TraceID?: string
  /**
   * 查询top5慢响应节点
   */
  IsSlowTopFive?: boolean
  /**
   * 是否获取资源层信息
   */
  GetResource?: boolean
  /**
   * 根据应用标签过滤
   */
  Tags?: Array<ApmTag>
  /**
   * 不显示的节点类型
   */
  Hidden?: Selectors
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
   * 按业务系统名过滤，支持模糊检索
   */
  InstanceName?: string
  /**
   * 按业务系统 ID 过滤，支持模糊检索
   */
  InstanceId?: string
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
 * DeleteApmSampleConfig请求参数结构体
 */
export interface DeleteApmSampleConfigRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 采样规则名
   */
  SampleName: string
}

/**
 * DescribeApmVulnerabilityCount请求参数结构体
 */
export interface DescribeApmVulnerabilityCountRequest {
  /**
   * APM业务系统ID
   */
  InstanceId: string
  /**
   * APM应用名称
   */
  ServiceName: string
  /**
   * 秒级时间戳
   */
  StartTime: number
  /**
   * 秒级时间戳
   */
  EndTime?: number
  /**
   * 查询的数据类型，攻击检测为“attack_detect”
   */
  Type?: string
}

/**
 * ModifyApmSampleConfig请求参数结构体
 */
export interface ModifyApmSampleConfigRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 采样规则名
   */
  SampleName: string
  /**
   * 采样率
   */
  SampleRate: number
  /**
   * 应用名，生效于所有应用则填空
   */
  ServiceName?: string
  /**
   * 接口名
   */
  OperationName?: string
  /**
   * 采样tag
   */
  Tags?: Array<APMKVItem>
  /**
   * 采样开关 0关 1开 2删除
   */
  Status?: number
  /**
   * 配置Id
   */
  Id?: number
  /**
   * 0=精确匹配（默认）；1=前缀匹配；2=后缀匹配
   */
  OperationType?: number
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
  /**
   * 是否开远程命令执行检测（0=关， 1=开）
   */
  IsRemoteCommandExecutionAnalysis?: number
  /**
   * 是否开内存马执行检测（0=关， 1=开）
   */
  IsMemoryHijackingAnalysis?: number
  /**
   * CLS索引类型(0=全文索引，1=键值索引)
   */
  LogIndexType?: number
  /**
   * traceId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogTraceIdKey?: string
  /**
   * 是否开启删除任意文件检测（0-关闭，1-开启）
   */
  IsDeleteAnyFileAnalysis?: number
  /**
   * 是否开启读取任意文件检测（0-关闭，1-开启）
   */
  IsReadAnyFileAnalysis?: number
  /**
   * 是否开启上传任意文件检测（0-关闭，1-开启）
   */
  IsUploadAnyFileAnalysis?: number
  /**
   * 是否开启包含任意文件检测（0-关闭，1-开启）
   */
  IsIncludeAnyFileAnalysis?: number
  /**
   * 是否开启目录遍历检测（0-关闭，1-开启）
   */
  IsDirectoryTraversalAnalysis?: number
  /**
   * 是否开启模板引擎注入检测（0-关闭，1-开启）
   */
  IsTemplateEngineInjectionAnalysis?: number
  /**
   * 是否开启脚本引擎注入检测（0-关闭，1-开启）
   */
  IsScriptEngineInjectionAnalysis?: number
  /**
   * 是否开启表达式注入检测（0-关闭，1-开启）
   */
  IsExpressionInjectionAnalysis?: number
  /**
   * 是否开启JNDI注入检测（0-关闭，1-开启）
   */
  IsJNDIInjectionAnalysis?: number
  /**
   * 是否开启JNI注入检测（0-关闭，1-开启）
   */
  IsJNIInjectionAnalysis?: number
  /**
   * 是否开启Webshell后门检测（0-关闭，1-开启）
   */
  IsWebshellBackdoorAnalysis?: number
  /**
   * 是否开启反序列化检测（0-关闭，1-开启）
   */
  IsDeserializationAnalysis?: number
  /**
   * 业务系统鉴权 token
   */
  Token?: string
  /**
   * URL长分段收敛阈值
   */
  UrlLongSegmentThreshold?: number
  /**
   * URL数字分段收敛阈值
   */
  UrlNumberSegmentThreshold?: number
  /**
   * spanId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogSpanIdKey?: string
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
  ServiceNames: Array<string>
}

/**
 * DescribeApmServiceMetric请求参数结构体
 */
export interface DescribeApmServiceMetricRequest {
  /**
   * 业务系统ID
   */
  InstanceId: string
  /**
   * 应用名
   */
  ServiceName?: string
  /**
   * 应用ID
   */
  ServiceID?: string
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
  /**
   * 排序
   */
  OrderBy?: OrderBy
  /**
   * 是否demo模式
   */
  Demo?: boolean
  /**
   * 应用状态筛选，可枚举的值为：health、warning、error。如果选中多个状态用逗号隔开，例如："warning,error"
   */
  ServiceStatus?: string
  /**
   * 标签列表
   */
  Tags?: Array<ApmTag>
  /**
   * 页码
   */
  Page?: number
  /**
   * 页大小
   */
  PageSize?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * CreateApmPrometheusRule请求参数结构体
 */
export interface CreateApmPrometheusRuleRequest {
  /**
   * 指标匹配规则名
   */
  Name: string
  /**
   * 规则生效的应用。作用全部应用就传空字符串
   */
  ServiceName: string
  /**
   * 指标匹配类型：0精准匹配，1前缀匹配，2后缀匹配
   */
  MetricMatchType: number
  /**
   * 客户定义的命中指标名规则。
   */
  MetricNameRule: string
  /**
   * 业务系统ID
   */
  InstanceId: string
}

/**
 * DescribeApmAllVulCount请求参数结构体
 */
export interface DescribeApmAllVulCountRequest {
  /**
   * 秒级时间戳
   */
  StartTime: number
  /**
   * 秒级时间戳
   */
  EndTime: number
}

/**
 * tke资源元数据
 */
export interface TkeMeta {
  /**
   * 地域
   */
  Region?: string
  /**
   * 集群ID
   */
  ClusterID?: string
  /**
   * pod name
   */
  PodName?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 工作负载
   */
  Deployment?: string
  /**
   * pod ip
   */
  PodIP?: string
  /**
   * node ip
   */
  NodeIP?: string
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
  /**
   * 探针熔断内存阈值
   */
  DisableMemoryUsed?: number
  /**
   * 探针熔断CPU阈值
   */
  DisableCpuUsed?: number
  /**
   * 是否开启SQL参数获取
   */
  DbStatementParametersEnabled?: boolean
  /**
   * 慢SQL阈值
   */
  SlowSQLThresholds?: Array<ApmTag>
  /**
   * 是否开启脱敏规则
   */
  EnableDesensitizationRule?: number
  /**
   * 脱敏规则
   */
  DesensitizationRule?: string
  /**
   * 自动性能剖析任务配置
   */
  AutoProfilingConfig?: AutoProfilingConfig
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
  /**
   * 指标中文名
   */
  NameCN?: string
  /**
   * 指标英文名
   */
  NameEN?: string
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
 * 展示apm业务系统与其他云产品关联关系返回体
 */
export interface ApmAssociation {
  /**
   * 关联产品的实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerId?: string
  /**
   * 关联关系状态：1（启用）、2（不启用）、3（已失效）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * CKafka消息主题
   */
  Topic?: string
}

/**
 * 资源层信息
 */
export interface Resource {
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: Array<string>
  /**
   * tke资源层信息
   */
  TKEMeta?: Array<TkeMeta>
  /**
   * cvm资源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVMMeta?: Array<CVMMeta>
}

/**
 * 视图方案勾选情况
 */
export interface Selectors {
  /**
   * 组件勾选情况
注意：此字段可能返回 null，表示取不到有效值。
   */
  Component?: Array<string>
}

/**
 * ModifyApmApplicationConfig请求参数结构体
 */
export interface ModifyApmApplicationConfigRequest {
  /**
   * 业务系统 ID
   */
  InstanceId: string
  /**
   * 应用名
   */
  ServiceName: string
  /**
   * URL收敛开关,0 关 | 1 开
   */
  UrlConvergenceSwitch: number
  /**
   * URL收敛阈值
   */
  UrlConvergenceThreshold?: number
  /**
   * 异常过滤正则规则，逗号分隔
   */
  ExceptionFilter?: string
  /**
   * URL收敛正则规则，逗号分隔
   */
  UrlConvergence?: string
  /**
   * 错误码过滤，逗号分隔
   */
  ErrorCodeFilter?: string
  /**
   * URL排除正则规则，逗号分隔
   */
  UrlExclude?: string
  /**
   * 日志开关 0 关 1 开
   */
  IsRelatedLog?: number
  /**
   * 日志地域
   */
  LogRegion?: string
  /**
   * 日志主题ID
   */
  LogTopicID?: string
  /**
   * CLS 日志集 | ES 集群ID
   */
  LogSet?: string
  /**
   * 日志来源 CLS | ES
   */
  LogSource?: string
  /**
   * 需过滤的接口
   */
  IgnoreOperationName?: string
  /**
   * 是否开启线程剖析
   */
  EnableSnapshot?: boolean
  /**
   * 线程剖析超时阈值
   */
  SnapshotTimeout?: number
  /**
   * 是否开启agent
   */
  AgentEnable?: boolean
  /**
   * 是否开启链路压缩
   */
  TraceSquash?: boolean
  /**
   * 是否开启应用诊断的开关
   */
  EventEnable?: boolean
  /**
   * 组件列表
   */
  InstrumentList?: Array<Instrument>
  /**
   * 探针接口相关配置
   */
  AgentOperationConfigView?: AgentOperationConfigView
  /**
   * 是否开启应用日志配置
   */
  EnableLogConfig?: boolean
  /**
   * 应用是否开启dashboard配置： false 关（与业务系统保持一致）/true 开（应用级配置）
   */
  EnableDashboardConfig?: boolean
  /**
   * 是否关联dashboard： 0 关 1 开
   */
  IsRelatedDashboard?: number
  /**
   * dashboard ID
   */
  DashboardTopicID?: string
  /**
   * CLS索引类型(0=全文索引，1=键值索引)
   */
  LogIndexType?: number
  /**
   * traceId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogTraceIdKey?: string
  /**
   * 是否开启应用安全配置
   */
  EnableSecurityConfig?: boolean
  /**
   * 是否开启SQL注入分析
   */
  IsSqlInjectionAnalysis?: number
  /**
   * 是否开启组件漏洞检测
   */
  IsInstrumentationVulnerabilityScan?: number
  /**
   * 是否开启远程命令检测
   */
  IsRemoteCommandExecutionAnalysis?: number
  /**
   * 是否开启内存马检测
   */
  IsMemoryHijackingAnalysis?: number
  /**
   * 是否开启删除任意文件检测（0-关闭，1-开启）
   */
  IsDeleteAnyFileAnalysis?: number
  /**
   * 是否开启读取任意文件检测（0-关闭，1-开启）
   */
  IsReadAnyFileAnalysis?: number
  /**
   * 是否开启上传任意文件检测（0-关闭，1-开启）
   */
  IsUploadAnyFileAnalysis?: number
  /**
   * 是否开启包含任意文件检测（0-关闭，1-开启）
   */
  IsIncludeAnyFileAnalysis?: number
  /**
   * 是否开启目录遍历检测（0-关闭，1-开启）
   */
  IsDirectoryTraversalAnalysis?: number
  /**
   * 是否开启模板引擎注入检测（0-关闭，1-开启）
   */
  IsTemplateEngineInjectionAnalysis?: number
  /**
   * 是否开启脚本引擎注入检测（0-关闭，1-开启）
   */
  IsScriptEngineInjectionAnalysis?: number
  /**
   * 是否开启表达式注入检测（0-关闭，1-开启）
   */
  IsExpressionInjectionAnalysis?: number
  /**
   * 是否开启JNDI注入检测（0-关闭，1-开启）
   */
  IsJNDIInjectionAnalysis?: number
  /**
   * 是否开启JNI注入检测（0-关闭，1-开启）
   */
  IsJNIInjectionAnalysis?: number
  /**
   * 是否开启Webshell后门检测（0-关闭，1-开启）
   */
  IsWebshellBackdoorAnalysis?: number
  /**
   * 是否开启反序列化检测（0-关闭，1-开启）
   */
  IsDeserializationAnalysis?: number
  /**
   * 接口自动收敛开关,0 关 | 1 开
   */
  UrlAutoConvergenceEnable?: boolean
  /**
   * URL长分段收敛阈值
   */
  UrlLongSegmentThreshold?: number
  /**
   * URL数字分段收敛阈值
   */
  UrlNumberSegmentThreshold?: number
  /**
   * 探针熔断内存阈值
   */
  DisableMemoryUsed?: number
  /**
   * 探针熔断CPU阈值
   */
  DisableCpuUsed?: number
  /**
   * 是否开启SQL参数获取
   */
  DbStatementParametersEnabled?: boolean
  /**
   * 慢SQL阈值
   */
  SlowSQLThresholds?: Array<ApmTag>
  /**
   * 是否开启脱敏规则
   */
  EnableDesensitizationRule?: number
  /**
   * 脱敏规则
   */
  DesensitizationRule?: string
  /**
   * spanId的索引key: 当CLS索引类型为键值索引时生效
   */
  LogSpanIdKey?: string
  /**
   * 自动性能剖析任务配置
   */
  AutoProfilingConfig?: AutoProfilingConfig
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
 * CVM元数据
 */
export interface CVMMeta {
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceID?: string
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
 * DescribeOPRAllVulCount请求参数结构体
 */
export interface DescribeOPRAllVulCountRequest {
  /**
   * 秒级时间戳
   */
  StartTime: number
  /**
   * 秒级时间戳
   */
  EndTime: number
}
