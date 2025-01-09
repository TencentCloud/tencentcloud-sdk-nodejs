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
  ResourceListInfo,
  ListAggregateDiscoveredResourcesRequest,
  DescribeAggregateDiscoveredResourceRequest,
  SourceConditionForManage,
  ListAggregateConfigRulesRequest,
  DescribeDiscoveredResourceRequest,
  PutEvaluationsResponse,
  Evaluation,
  DescribeDiscoveredResourceResponse,
  InputParameterForManage,
  ListConfigRulesResponse,
  Tag,
  ListDiscoveredResourcesRequest,
  Annotation,
  ConfigRule,
  TriggerType,
  PutEvaluationsRequest,
  Filter,
  ListAggregateConfigRulesResponse,
  ListAggregateDiscoveredResourcesResponse,
  DescribeAggregateDiscoveredResourceResponse,
  ListConfigRulesRequest,
  AggregateResourceInfo,
  ListDiscoveredResourcesResponse,
  InputParameter,
} from "./config_models"

/**
 * config client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("config.tencentcloudapi.com", "2022-08-02", clientConfig)
  }

  /**
   * 账号组获取规则列表
   */
  async ListAggregateConfigRules(
    req: ListAggregateConfigRulesRequest,
    cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void
  ): Promise<ListAggregateConfigRulesResponse> {
    return this.request("ListAggregateConfigRules", req, cb)
  }

  /**
   * 获取资源列表
   */
  async ListDiscoveredResources(
    req: ListDiscoveredResourcesRequest,
    cb?: (error: string, rep: ListDiscoveredResourcesResponse) => void
  ): Promise<ListDiscoveredResourcesResponse> {
    return this.request("ListDiscoveredResources", req, cb)
  }

  /**
   * 获取规则列表
   */
  async ListConfigRules(
    req: ListConfigRulesRequest,
    cb?: (error: string, rep: ListConfigRulesResponse) => void
  ): Promise<ListConfigRulesResponse> {
    return this.request("ListConfigRules", req, cb)
  }

  /**
   * 账号组资源详情
   */
  async DescribeAggregateDiscoveredResource(
    req: DescribeAggregateDiscoveredResourceRequest,
    cb?: (error: string, rep: DescribeAggregateDiscoveredResourceResponse) => void
  ): Promise<DescribeAggregateDiscoveredResourceResponse> {
    return this.request("DescribeAggregateDiscoveredResource", req, cb)
  }

  /**
   * 资源详情
   */
  async DescribeDiscoveredResource(
    req: DescribeDiscoveredResourceRequest,
    cb?: (error: string, rep: DescribeDiscoveredResourceResponse) => void
  ): Promise<DescribeDiscoveredResourceResponse> {
    return this.request("DescribeDiscoveredResource", req, cb)
  }

  /**
   * 账号组获取资源列表
   */
  async ListAggregateDiscoveredResources(
    req: ListAggregateDiscoveredResourcesRequest,
    cb?: (error: string, rep: ListAggregateDiscoveredResourcesResponse) => void
  ): Promise<ListAggregateDiscoveredResourcesResponse> {
    return this.request("ListAggregateDiscoveredResources", req, cb)
  }

  /**
   * 上报自定义规则评估结果
   */
  async PutEvaluations(
    req: PutEvaluationsRequest,
    cb?: (error: string, rep: PutEvaluationsResponse) => void
  ): Promise<PutEvaluationsResponse> {
    return this.request("PutEvaluations", req, cb)
  }
}
