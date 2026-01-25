/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeApmAssociationResponse,
  CreateApmInstanceRequest,
  DescribeServiceOverviewResponse,
  ApmSampleConfig,
  AgentOperationConfigView,
  SelectorView,
  DescribeApmSampleConfigRequest,
  DescribeApmSampleConfigResponse,
  DescribeServiceOverviewRequest,
  DescribeTopologyNewResponse,
  ModifyApmApplicationConfigResponse,
  DescribeApmServiceMetricResponse,
  ModifyApmAssociationRequest,
  DescribeGeneralOTSpanListResponse,
  DescribeApmApplicationConfigResponse,
  DescribeApmAssociationRequest,
  APMKV,
  Position,
  ComponentTopologyView,
  CreateProfileTaskRequest,
  ApmPrometheusRules,
  TopologyEdgeNew,
  DescribeApmPrometheusRuleRequest,
  CreateApmPrometheusRuleResponse,
  TerminateApmInstanceResponse,
  ApmMetricRecord,
  TopologyNode,
  DescribeApmAgentResponse,
  CreateApmSampleConfigRequest,
  DescribeTagValuesRequest,
  ApmServiceMetric,
  ApmAppConfig,
  CreateApmSampleConfigResponse,
  Line,
  ModifyApmAssociationResponse,
  APMKVItem,
  DescribeGeneralSpanListRequest,
  DescribeApmAgentRequest,
  DescribeMetricRecordsRequest,
  DescribeGeneralMetricDataRequest,
  ModifyApmPrometheusRuleRequest,
  ModifyApmInstanceResponse,
  SpanTag,
  DescribeGeneralMetricDataResponse,
  ModifyApmInstanceRequest,
  ModifyApmSampleConfigRequest,
  QueryMetricItem,
  ServiceDetail,
  DescribeApmInstancesResponse,
  DescribeApmPrometheusRuleResponse,
  ModifyApmSampleConfigResponse,
  DescribeApmApplicationConfigRequest,
  CreateProfileTaskResponse,
  ModifyApmPrometheusRuleResponse,
  DescribeMetricRecordsResponse,
  ApmTag,
  Filter,
  DescribeGeneralOTSpanListRequest,
  DescribeGeneralApmApplicationConfigResponse,
  CreateApmInstanceResponse,
  DeleteApmSampleConfigResponse,
  DescribeGeneralApmApplicationConfigRequest,
  DescribeTopologyNewRequest,
  DescribeApmInstancesRequest,
  DeleteApmSampleConfigRequest,
  SpanLog,
  TerminateApmInstanceRequest,
  ApmInstanceDetail,
  Span,
  ModifyGeneralApmApplicationConfigRequest,
  DescribeApmServiceMetricRequest,
  CreateApmPrometheusRuleRequest,
  TkeMeta,
  Instrument,
  DescribeTagValuesResponse,
  ApmAgentInfo,
  ApmApplicationConfigView,
  OrderBy,
  ApmField,
  DescribeGeneralSpanListResponse,
  ApmAssociation,
  Resource,
  Selectors,
  ModifyApmApplicationConfigRequest,
  ModifyGeneralApmApplicationConfigResponse,
  CVMMeta,
  SpanReference,
  SpanProcess,
  GeneralFilter,
} from "./apm_models"

/**
 * apm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("apm.tencentcloudapi.com", "2021-06-22", clientConfig)
  }

  /**
   * 修改APM业务系统接口
   */
  async ModifyApmInstance(
    req: ModifyApmInstanceRequest,
    cb?: (error: string, rep: ModifyApmInstanceResponse) => void
  ): Promise<ModifyApmInstanceResponse> {
    return this.request("ModifyApmInstance", req, cb)
  }

  /**
   * 通用查询调用链列表
   */
  async DescribeGeneralSpanList(
    req: DescribeGeneralSpanListRequest,
    cb?: (error: string, rep: DescribeGeneralSpanListResponse) => void
  ): Promise<DescribeGeneralSpanListResponse> {
    return this.request("DescribeGeneralSpanList", req, cb)
  }

  /**
   * 通用查询 OpenTelemetry 调用链列表
   */
  async DescribeGeneralOTSpanList(
    req: DescribeGeneralOTSpanListRequest,
    cb?: (error: string, rep: DescribeGeneralOTSpanListResponse) => void
  ): Promise<DescribeGeneralOTSpanListResponse> {
    return this.request("DescribeGeneralOTSpanList", req, cb)
  }

  /**
   * 业务购买 APM 业务系统，调用该接口创建
   */
  async CreateApmInstance(
    req: CreateApmInstanceRequest,
    cb?: (error: string, rep: CreateApmInstanceResponse) => void
  ): Promise<CreateApmInstanceResponse> {
    return this.request("CreateApmInstance", req, cb)
  }

  /**
   * 根据应用名查询服务拓扑图
   */
  async DescribeTopologyNew(
    req: DescribeTopologyNewRequest,
    cb?: (error: string, rep: DescribeTopologyNewResponse) => void
  ): Promise<DescribeTopologyNewResponse> {
    return this.request("DescribeTopologyNew", req, cb)
  }

  /**
   * 查询应用配置信息
   */
  async DescribeGeneralApmApplicationConfig(
    req: DescribeGeneralApmApplicationConfigRequest,
    cb?: (error: string, rep: DescribeGeneralApmApplicationConfigResponse) => void
  ): Promise<DescribeGeneralApmApplicationConfigResponse> {
    return this.request("DescribeGeneralApmApplicationConfig", req, cb)
  }

  /**
   * 用于修改apm业务系统与其他产品的关联关系（包括创建和删除）
   */
  async ModifyApmAssociation(
    req: ModifyApmAssociationRequest,
    cb?: (error: string, rep: ModifyApmAssociationResponse) => void
  ): Promise<ModifyApmAssociationResponse> {
    return this.request("ModifyApmAssociation", req, cb)
  }

  /**
   * 修改采样配置接口
   */
  async ModifyApmSampleConfig(
    req: ModifyApmSampleConfigRequest,
    cb?: (error: string, rep: ModifyApmSampleConfigResponse) => void
  ): Promise<ModifyApmSampleConfigResponse> {
    return this.request("ModifyApmSampleConfig", req, cb)
  }

  /**
   * 获取 APM 接入点
   */
  async DescribeApmAgent(
    req: DescribeApmAgentRequest,
    cb?: (error: string, rep: DescribeApmAgentResponse) => void
  ): Promise<DescribeApmAgentResponse> {
    return this.request("DescribeApmAgent", req, cb)
  }

  /**
     * 获取指标数据通用接口。用户根据需要上送请求参数，返回对应的指标数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求的数据点数限制为1440个。

获取指标数据通用接口用法：DescribeGeneralMetricData 是通用的指标数据查询接口，支持灵活的获取指标数据。该接口的查询方式类似于使用如下 SQL 语句：SELECT {Metrics} FROM {ViewName} WHERE {Filters} GROUP BY {GroupBy}。在发起请求前，请确定如下关键入参：
1. 视图（ViewName）
决定您要查询的数据领域。
例如：service_metric（服务监控视图）、db_metric（数据库视图）等。关于 APM 支持的视图，请参考 [指标视图](https://cloud.tencent.com/document/product/248/101681#069b06a9-2593-49db-b694-dea4200f3b19)。

2. 指标（Metrics）
用于指定返回结果中包含的一个或多个指标项。
例如：request_count（请求数）、duration_avg（平均耗时）、error_rate（错误率）。关于APM 支持的指标](Metrics)，请参考 [APM 指标协议标准](https://cloud.tencent.com/document/product/248/101681)，每种视图（ViewName）支持专属的指标集。

3. 过滤（Filters）
支持一个或多个键值对（Key-Value）形式的过滤条件。
例如：只查某个特定服务 service.name = "order-service"。通用维度和每种视图（ViewName）支持专属专属维度，可以用作过滤条件中的键（Key），更多详情请参考 [APM 指标协议标准](https://cloud.tencent.com/document/product/248/101681)。

4. 聚合（GroupBy）
支持一个或多个聚合维度，相当于 SQL 的 GROUP BY。
例如：按接口名称 operation 分组，查看每个接口的性能。通用维度和每种视图（ViewName）支持专属专属维度，可以用作聚合维度，更多详情请参考 [APM 指标协议标准](https://cloud.tencent.com/document/product/248/101681)。
5. 粒度 (Period) 
该参数决定了是否需要以时间切片聚合。
    - Period = 1：时间序列模式：返回结果中按时间切片聚合，时间序列（TimeSerial）和数据序列（DataSerial）中包含的多个值一一对应，分别代表特定时间切片上的聚合结果。时间序列模式主要用于展示时间趋势图。
    - Period = 0：汇总统计模式：返回结果中，数据序列（DataSerial）中只包含唯一的值，代表整个时间区间内的汇总数据。
     */
  async DescribeGeneralMetricData(
    req: DescribeGeneralMetricDataRequest,
    cb?: (error: string, rep: DescribeGeneralMetricDataResponse) => void
  ): Promise<DescribeGeneralMetricDataResponse> {
    return this.request("DescribeGeneralMetricData", req, cb)
  }

  /**
   * 用于创建apm业务系统与Prometheus实例的指标匹配规则
   */
  async CreateApmPrometheusRule(
    req: CreateApmPrometheusRuleRequest,
    cb?: (error: string, rep: CreateApmPrometheusRuleResponse) => void
  ): Promise<CreateApmPrometheusRuleResponse> {
    return this.request("CreateApmPrometheusRule", req, cb)
  }

  /**
   * 销毁 APM 业务系统
   */
  async TerminateApmInstance(
    req: TerminateApmInstanceRequest,
    cb?: (error: string, rep: TerminateApmInstanceResponse) => void
  ): Promise<TerminateApmInstanceResponse> {
    return this.request("TerminateApmInstance", req, cb)
  }

  /**
   * 用于查询apm业务系统与其他产品的关联关系
   */
  async DescribeApmAssociation(
    req: DescribeApmAssociationRequest,
    cb?: (error: string, rep: DescribeApmAssociationResponse) => void
  ): Promise<DescribeApmAssociationResponse> {
    return this.request("DescribeApmAssociation", req, cb)
  }

  /**
   * 获取 APM 应用指标列表
   */
  async DescribeApmServiceMetric(
    req: DescribeApmServiceMetricRequest,
    cb?: (error: string, rep: DescribeApmServiceMetricResponse) => void
  ): Promise<DescribeApmServiceMetricResponse> {
    return this.request("DescribeApmServiceMetric", req, cb)
  }

  /**
   * 用于修改apm业务系统与Prometheus实例的指标匹配规则
   */
  async ModifyApmPrometheusRule(
    req: ModifyApmPrometheusRuleRequest,
    cb?: (error: string, rep: ModifyApmPrometheusRuleResponse) => void
  ): Promise<ModifyApmPrometheusRuleResponse> {
    return this.request("ModifyApmPrometheusRule", req, cb)
  }

  /**
   * 创建采样配置接口
   */
  async CreateApmSampleConfig(
    req: CreateApmSampleConfigRequest,
    cb?: (error: string, rep: CreateApmSampleConfigResponse) => void
  ): Promise<CreateApmSampleConfigResponse> {
    return this.request("CreateApmSampleConfig", req, cb)
  }

  /**
   * 查询采样配置接口
   */
  async DescribeApmSampleConfig(
    req: DescribeApmSampleConfigRequest,
    cb?: (error: string, rep: DescribeApmSampleConfigResponse) => void
  ): Promise<DescribeApmSampleConfigResponse> {
    return this.request("DescribeApmSampleConfig", req, cb)
  }

  /**
   * 根据维度名和过滤条件，查询维度数据.
   */
  async DescribeTagValues(
    req: DescribeTagValuesRequest,
    cb?: (error: string, rep: DescribeTagValuesResponse) => void
  ): Promise<DescribeTagValuesResponse> {
    return this.request("DescribeTagValues", req, cb)
  }

  /**
   * 用于查询apm业务系统与Prometheus实例的指标匹配规则
   */
  async DescribeApmPrometheusRule(
    req: DescribeApmPrometheusRuleRequest,
    cb?: (error: string, rep: DescribeApmPrometheusRuleResponse) => void
  ): Promise<DescribeApmPrometheusRuleResponse> {
    return this.request("DescribeApmPrometheusRule", req, cb)
  }

  /**
   * 获取 APM 业务系统列表
   */
  async DescribeApmInstances(
    req: DescribeApmInstancesRequest,
    cb?: (error: string, rep: DescribeApmInstancesResponse) => void
  ): Promise<DescribeApmInstancesResponse> {
    return this.request("DescribeApmInstances", req, cb)
  }

  /**
   * 删除采样配置接口
   */
  async DeleteApmSampleConfig(
    req: DeleteApmSampleConfigRequest,
    cb?: (error: string, rep: DeleteApmSampleConfigResponse) => void
  ): Promise<DeleteApmSampleConfigResponse> {
    return this.request("DeleteApmSampleConfig", req, cb)
  }

  /**
   * 创建事件任务
   */
  async CreateProfileTask(
    req: CreateProfileTaskRequest,
    cb?: (error: string, rep: CreateProfileTaskResponse) => void
  ): Promise<CreateProfileTaskResponse> {
    return this.request("CreateProfileTask", req, cb)
  }

  /**
   * 查询应用配置接口
   */
  async DescribeApmApplicationConfig(
    req: DescribeApmApplicationConfigRequest,
    cb?: (error: string, rep: DescribeApmApplicationConfigResponse) => void
  ): Promise<DescribeApmApplicationConfigResponse> {
    return this.request("DescribeApmApplicationConfig", req, cb)
  }

  /**
   * 对外开放的openApi，客户可以灵活的指定需要修改的字段，再加入需要修改的服务列表.
   */
  async ModifyGeneralApmApplicationConfig(
    req: ModifyGeneralApmApplicationConfigRequest,
    cb?: (error: string, rep: ModifyGeneralApmApplicationConfigResponse) => void
  ): Promise<ModifyGeneralApmApplicationConfigResponse> {
    return this.request("ModifyGeneralApmApplicationConfig", req, cb)
  }

  /**
   * 查询指标列表接口，查询指标更推荐使用DescribeGeneralMetricData接口
   */
  async DescribeMetricRecords(
    req: DescribeMetricRecordsRequest,
    cb?: (error: string, rep: DescribeMetricRecordsResponse) => void
  ): Promise<DescribeMetricRecordsResponse> {
    return this.request("DescribeMetricRecords", req, cb)
  }

  /**
   * 修改应用配置接口
   */
  async ModifyApmApplicationConfig(
    req: ModifyApmApplicationConfigRequest,
    cb?: (error: string, rep: ModifyApmApplicationConfigResponse) => void
  ): Promise<ModifyApmApplicationConfigResponse> {
    return this.request("ModifyApmApplicationConfig", req, cb)
  }

  /**
   * 应用概览数据拉取
   */
  async DescribeServiceOverview(
    req: DescribeServiceOverviewRequest,
    cb?: (error: string, rep: DescribeServiceOverviewResponse) => void
  ): Promise<DescribeServiceOverviewResponse> {
    return this.request("DescribeServiceOverview", req, cb)
  }
}
