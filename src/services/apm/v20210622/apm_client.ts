/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SpanLog,
  ModifyApmInstanceRequest,
  ApmInstanceDetail,
  CreateApmInstanceRequest,
  ModifyGeneralApmApplicationConfigRequest,
  DescribeServiceOverviewResponse,
  QueryMetricItem,
  TerminateApmInstanceRequest,
  DescribeApmInstancesResponse,
  Instrument,
  DescribeTagValuesResponse,
  Span,
  ApmAgentInfo,
  DescribeGeneralSpanListResponse,
  ApmMetricRecord,
  DescribeServiceOverviewRequest,
  DescribeApmAgentResponse,
  DescribeTagValuesRequest,
  ApmField,
  Line,
  ApmApplicationConfigView,
  ApmTag,
  APMKVItem,
  OrderBy,
  DescribeMetricRecordsResponse,
  DescribeGeneralOTSpanListResponse,
  DescribeGeneralSpanListRequest,
  Filter,
  APMKV,
  DescribeGeneralOTSpanListRequest,
  DescribeApmAgentRequest,
  DescribeMetricRecordsRequest,
  DescribeGeneralApmApplicationConfigResponse,
  DescribeGeneralMetricDataRequest,
  CreateApmInstanceResponse,
  SpanReference,
  SpanProcess,
  DescribeGeneralApmApplicationConfigRequest,
  ModifyApmInstanceResponse,
  GeneralFilter,
  DescribeApmInstancesRequest,
  SpanTag,
  DescribeGeneralMetricDataResponse,
  ModifyGeneralApmApplicationConfigResponse,
  TerminateApmInstanceResponse,
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
   * 查询应用配置信息
   */
  async DescribeGeneralApmApplicationConfig(
    req: DescribeGeneralApmApplicationConfigRequest,
    cb?: (error: string, rep: DescribeGeneralApmApplicationConfigResponse) => void
  ): Promise<DescribeGeneralApmApplicationConfigResponse> {
    return this.request("DescribeGeneralApmApplicationConfig", req, cb)
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
   * 通用查询调用链列表
   */
  async DescribeGeneralSpanList(
    req: DescribeGeneralSpanListRequest,
    cb?: (error: string, rep: DescribeGeneralSpanListResponse) => void
  ): Promise<DescribeGeneralSpanListResponse> {
    return this.request("DescribeGeneralSpanList", req, cb)
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
   * 获取 APM 接入点
   */
  async DescribeApmAgent(
    req: DescribeApmAgentRequest,
    cb?: (error: string, rep: DescribeApmAgentResponse) => void
  ): Promise<DescribeApmAgentResponse> {
    return this.request("DescribeApmAgent", req, cb)
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
   * 修改APM业务系统接口
   */
  async ModifyApmInstance(
    req: ModifyApmInstanceRequest,
    cb?: (error: string, rep: ModifyApmInstanceResponse) => void
  ): Promise<ModifyApmInstanceResponse> {
    return this.request("ModifyApmInstance", req, cb)
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
     * 获取指标数据通用接口。用户根据需要上送请求参数，返回对应的指标数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求的数据点数限制为1440个。
     */
  async DescribeGeneralMetricData(
    req: DescribeGeneralMetricDataRequest,
    cb?: (error: string, rep: DescribeGeneralMetricDataResponse) => void
  ): Promise<DescribeGeneralMetricDataResponse> {
    return this.request("DescribeGeneralMetricData", req, cb)
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
   * 销毁 APM 业务系统
   */
  async TerminateApmInstance(
    req: TerminateApmInstanceRequest,
    cb?: (error: string, rep: TerminateApmInstanceResponse) => void
  ): Promise<TerminateApmInstanceResponse> {
    return this.request("TerminateApmInstance", req, cb)
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
   * 应用概览数据拉取
   */
  async DescribeServiceOverview(
    req: DescribeServiceOverviewRequest,
    cb?: (error: string, rep: DescribeServiceOverviewResponse) => void
  ): Promise<DescribeServiceOverviewResponse> {
    return this.request("DescribeServiceOverview", req, cb)
  }
}
