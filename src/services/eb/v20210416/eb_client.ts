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
  CkafkaTargetParams,
  DeleteTargetResponse,
  DeleteRuleRequest,
  CheckRuleRequest,
  LogFilters,
  CreateEventBusRequest,
  PlatformEventSummary,
  RetryPolicy,
  CreateTransformationRequest,
  SearchLogResponse,
  ListEventBusesResponse,
  CreateTargetRequest,
  SearchLogResult,
  CreateRuleResponse,
  UpdateRuleResponse,
  DeleteTransformationResponse,
  ListPlatformProductsResponse,
  GetEventBusRequest,
  UpdateConnectionRequest,
  OutputStructParam,
  Tag,
  GetRuleRequest,
  LogFilter,
  APIGWParams,
  PlatformProduct,
  Extraction,
  DTSParams,
  CreateTargetResponse,
  UpdateRuleRequest,
  CreateConnectionResponse,
  ListTargetsRequest,
  Transformation,
  UpdateTransformationResponse,
  CheckTransformationResponse,
  ListTargetsResponse,
  EtlFilter,
  ConnectionDescription,
  Target,
  DeleteEventBusRequest,
  ListEventBusesRequest,
  CreateTransformationResponse,
  PlatformEventDetail,
  DeleteTransformationRequest,
  CkafkaParams,
  Event,
  UpdateTargetRequest,
  ListConnectionsResponse,
  ListPlatformProductsRequest,
  PublishEventRequest,
  Transform,
  ListPlatformEventNamesRequest,
  EventBus,
  ListPlatformEventPatternsResponse,
  ListRulesRequest,
  CreateRuleRequest,
  DeleteConnectionResponse,
  GetTransformationResponse,
  CheckRuleResponse,
  UpdateTargetResponse,
  PublishEventResponse,
  Rule,
  Filter,
  Connection,
  DeleteEventBusResponse,
  CreateEventBusResponse,
  DeleteConnectionRequest,
  UpdateTransformationRequest,
  GetPlatformEventTemplateRequest,
  PutEventsResponse,
  CheckTransformationRequest,
  UpdateConnectionResponse,
  UpdateEventBusResponse,
  TDMQParams,
  GetEventBusResponse,
  DeleteRuleResponse,
  DescribeLogTagValueRequest,
  TargetBrief,
  ListRulesResponse,
  ESTargetParams,
  GetRuleResponse,
  UpdateEventBusRequest,
  GetPlatformEventTemplateResponse,
  SCFParams,
  DeadLetterConfig,
  ListConnectionsRequest,
  TextParams,
  SearchLogRequest,
  CkafkaDeliveryParams,
  CreateConnectionRequest,
  ListPlatformEventPatternsRequest,
  GetTransformationRequest,
  ConnectionBrief,
  PutEventsRequest,
  TargetDescription,
  DeleteTargetRequest,
  DescribeLogTagValueResponse,
  ListPlatformEventNamesResponse,
} from "./eb_models"

/**
 * eb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("eb.tencentcloudapi.com", "2021-04-16", clientConfig)
  }

  /**
   * 删除事件集
   */
  async DeleteEventBus(
    req: DeleteEventBusRequest,
    cb?: (error: string, rep: DeleteEventBusResponse) => void
  ): Promise<DeleteEventBusResponse> {
    return this.request("DeleteEventBus", req, cb)
  }

  /**
   * 获取平台产品事件模板
   */
  async GetPlatformEventTemplate(
    req: GetPlatformEventTemplateRequest,
    cb?: (error: string, rep: GetPlatformEventTemplateResponse) => void
  ): Promise<GetPlatformEventTemplateResponse> {
    return this.request("GetPlatformEventTemplate", req, cb)
  }

  /**
   * 用于创建转换器
   */
  async CreateTransformation(
    req: CreateTransformationRequest,
    cb?: (error: string, rep: CreateTransformationResponse) => void
  ): Promise<CreateTransformationResponse> {
    return this.request("CreateTransformation", req, cb)
  }

  /**
   * 用于创建事件集
   */
  async CreateEventBus(
    req: CreateEventBusRequest,
    cb?: (error: string, rep: CreateEventBusResponse) => void
  ): Promise<CreateEventBusResponse> {
    return this.request("CreateEventBus", req, cb)
  }

  /**
   * 创建事件规则
   */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 删除事件目标
   */
  async DeleteTarget(
    req: DeleteTargetRequest,
    cb?: (error: string, rep: DeleteTargetResponse) => void
  ): Promise<DeleteTargetResponse> {
    return this.request("DeleteTarget", req, cb)
  }

  /**
   * 获取平台产品事件匹配规则
   */
  async ListPlatformEventPatterns(
    req: ListPlatformEventPatternsRequest,
    cb?: (error: string, rep: ListPlatformEventPatternsResponse) => void
  ): Promise<ListPlatformEventPatternsResponse> {
    return this.request("ListPlatformEventPatterns", req, cb)
  }

  /**
   * 获取事件目标列表
   */
  async ListTargets(
    req: ListTargetsRequest,
    cb?: (error: string, rep: ListTargetsResponse) => void
  ): Promise<ListTargetsResponse> {
    return this.request("ListTargets", req, cb)
  }

  /**
   * 检验规则
   */
  async CheckRule(
    req: CheckRuleRequest,
    cb?: (error: string, rep: CheckRuleResponse) => void
  ): Promise<CheckRuleResponse> {
    return this.request("CheckRule", req, cb)
  }

  /**
   * 获取平台产品列表
   */
  async ListPlatformProducts(
    req?: ListPlatformProductsRequest,
    cb?: (error: string, rep: ListPlatformProductsResponse) => void
  ): Promise<ListPlatformProductsResponse> {
    return this.request("ListPlatformProducts", req, cb)
  }

  /**
   * （已废弃）用于Event事件投递
   */
  async PublishEvent(
    req: PublishEventRequest,
    cb?: (error: string, rep: PublishEventResponse) => void
  ): Promise<PublishEventResponse> {
    return this.request("PublishEvent", req, cb)
  }

  /**
   * 用于Event事件投递
   */
  async PutEvents(
    req: PutEventsRequest,
    cb?: (error: string, rep: PutEventsResponse) => void
  ): Promise<PutEventsResponse> {
    return this.request("PutEvents", req, cb)
  }

  /**
   * 更新事件目标
   */
  async UpdateTarget(
    req: UpdateTargetRequest,
    cb?: (error: string, rep: UpdateTargetResponse) => void
  ): Promise<UpdateTargetResponse> {
    return this.request("UpdateTarget", req, cb)
  }

  /**
   * 用于获取转换器详情
   */
  async GetTransformation(
    req: GetTransformationRequest,
    cb?: (error: string, rep: GetTransformationResponse) => void
  ): Promise<GetTransformationResponse> {
    return this.request("GetTransformation", req, cb)
  }

  /**
   * 获取事件规则列表
   */
  async ListRules(
    req: ListRulesRequest,
    cb?: (error: string, rep: ListRulesResponse) => void
  ): Promise<ListRulesResponse> {
    return this.request("ListRules", req, cb)
  }

  /**
   * 删除事件规则
   */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 获取平台产品事件名称
   */
  async ListPlatformEventNames(
    req: ListPlatformEventNamesRequest,
    cb?: (error: string, rep: ListPlatformEventNamesResponse) => void
  ): Promise<ListPlatformEventNamesResponse> {
    return this.request("ListPlatformEventNames", req, cb)
  }

  /**
   * 更新事件集
   */
  async UpdateEventBus(
    req: UpdateEventBusRequest,
    cb?: (error: string, rep: UpdateEventBusResponse) => void
  ): Promise<UpdateEventBusResponse> {
    return this.request("UpdateEventBus", req, cb)
  }

  /**
   * 创建事件目标
   */
  async CreateTarget(
    req: CreateTargetRequest,
    cb?: (error: string, rep: CreateTargetResponse) => void
  ): Promise<CreateTargetResponse> {
    return this.request("CreateTarget", req, cb)
  }

  /**
   * 更新事件规则
   */
  async UpdateRule(
    req: UpdateRuleRequest,
    cb?: (error: string, rep: UpdateRuleResponse) => void
  ): Promise<UpdateRuleResponse> {
    return this.request("UpdateRule", req, cb)
  }

  /**
   * 前置条件：需开启事件存储；事件查询维度值
   */
  async DescribeLogTagValue(
    req: DescribeLogTagValueRequest,
    cb?: (error: string, rep: DescribeLogTagValueResponse) => void
  ): Promise<DescribeLogTagValueResponse> {
    return this.request("DescribeLogTagValue", req, cb)
  }

  /**
   * 用于删除转换器
   */
  async DeleteTransformation(
    req: DeleteTransformationRequest,
    cb?: (error: string, rep: DeleteTransformationResponse) => void
  ): Promise<DeleteTransformationResponse> {
    return this.request("DeleteTransformation", req, cb)
  }

  /**
   * 创建事件连接器
   */
  async CreateConnection(
    req: CreateConnectionRequest,
    cb?: (error: string, rep: CreateConnectionResponse) => void
  ): Promise<CreateConnectionResponse> {
    return this.request("CreateConnection", req, cb)
  }

  /**
   * 获取事件规则详情
   */
  async GetRule(
    req: GetRuleRequest,
    cb?: (error: string, rep: GetRuleResponse) => void
  ): Promise<GetRuleResponse> {
    return this.request("GetRule", req, cb)
  }

  /**
   * 前置条件：开启事件存储；查询历史推送事件
   */
  async SearchLog(
    req: SearchLogRequest,
    cb?: (error: string, rep: SearchLogResponse) => void
  ): Promise<SearchLogResponse> {
    return this.request("SearchLog", req, cb)
  }

  /**
   * 删除事件连接器
   */
  async DeleteConnection(
    req: DeleteConnectionRequest,
    cb?: (error: string, rep: DeleteConnectionResponse) => void
  ): Promise<DeleteConnectionResponse> {
    return this.request("DeleteConnection", req, cb)
  }

  /**
   * 获取事件集列表
   */
  async ListEventBuses(
    req: ListEventBusesRequest,
    cb?: (error: string, rep: ListEventBusesResponse) => void
  ): Promise<ListEventBusesResponse> {
    return this.request("ListEventBuses", req, cb)
  }

  /**
   * 获取事件集详情
   */
  async GetEventBus(
    req: GetEventBusRequest,
    cb?: (error: string, rep: GetEventBusResponse) => void
  ): Promise<GetEventBusResponse> {
    return this.request("GetEventBus", req, cb)
  }

  /**
   * 用于更新转换器
   */
  async UpdateTransformation(
    req: UpdateTransformationRequest,
    cb?: (error: string, rep: UpdateTransformationResponse) => void
  ): Promise<UpdateTransformationResponse> {
    return this.request("UpdateTransformation", req, cb)
  }

  /**
   * 用于在ETL配置页面, 测试规则和数据.
   */
  async CheckTransformation(
    req: CheckTransformationRequest,
    cb?: (error: string, rep: CheckTransformationResponse) => void
  ): Promise<CheckTransformationResponse> {
    return this.request("CheckTransformation", req, cb)
  }

  /**
   * 获取事件连接器列表
   */
  async ListConnections(
    req: ListConnectionsRequest,
    cb?: (error: string, rep: ListConnectionsResponse) => void
  ): Promise<ListConnectionsResponse> {
    return this.request("ListConnections", req, cb)
  }

  /**
   * 更新事件连接器
   */
  async UpdateConnection(
    req: UpdateConnectionRequest,
    cb?: (error: string, rep: UpdateConnectionResponse) => void
  ): Promise<UpdateConnectionResponse> {
    return this.request("UpdateConnection", req, cb)
  }
}
