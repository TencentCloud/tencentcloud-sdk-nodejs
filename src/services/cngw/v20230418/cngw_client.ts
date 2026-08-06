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
  CreateCloudNativeAPIGatewayMCPToolRequest,
  DescribeCloudNativeAPIGatewayLLMModelServicesResponse,
  ModifyCloudNativeAPIGatewayConsumerGroupResponse,
  DescribeCloudNativeAPIGatewayMCPServerACLRequest,
  DeleteCloudNativeAPIGatewayMCPToolResponse,
  CreateCloudNativeAPIGatewayMCPServerRequest,
  DeleteCloudNativeAPIGatewaySecretKeyRequest,
  AIGWMCPUpstreamInfo,
  AIGWLLMTokenUsageItem,
  DeleteCloudNativeAPIGatewayMCPToolRequest,
  AIGWRedisConfig,
  AIGWIntentRoute,
  Filter,
  AIGWFallbackServiceItem,
  DescribeCloudNativeAPIGatewaySecretKeyValueRequest,
  AIGWLatencyPriorityRouteRule,
  AIGWConsumerGroupBrief,
  DeleteCloudNativeAPIGatewayConsumerResponse,
  RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse,
  ModifyCloudNativeAPIGatewayMCPServerRequest,
  AIGWMCPServerAuthResult,
  KeyValue,
  AIGWKVMatch,
  DescribeCloudNativeAPIGatewayMCPServerAuthResponse,
  DescribeCloudNativeAPIGatewayConsumerRequest,
  DescribeCloudNativeAPIGatewayLLMModelServiceRequest,
  AIGWACLSubject,
  CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy,
  ModifyCloudNativeAPIGatewaySecretKeyResponse,
  AddCloudNativeAPIGatewayConsumerInGroupResponse,
  AIGWRouteModelServiceConfig,
  AIGWTagFilter,
  CloudNativeAPIGatewayLLMModelParamCheckInfo,
  DescribeCloudNativeAPIGatewayMCPToolACLListResponse,
  ModifyCloudNativeAPIGatewayMCPServerAuthResponse,
  CreateCloudNativeAPIGatewayConsumerGroupRequest,
  CNAPIGwSecretKey,
  ModifyCloudNativeAPIGatewayLLMModelAPIResponse,
  CNAPIGwConsumer,
  AIGWLogConfig,
  KongServicePreview,
  AIGWMCPServerList,
  AIGWIntentRouteRule,
  ModifyCloudNativeAPIGatewayLLMModelServiceResponse,
  CreateCloudNativeAPIGatewayLLMModelServiceResponse,
  AIGWTopConsumersItem,
  RemoveCloudNativeAPIGatewayConsumerInGroupRequest,
  AIGWJWTCredentialConfig,
  DescribeCloudNativeAPIGatewayLLMModelServicesRequest,
  CreateCloudNativeAPIGatewayLLMModelAPIRequest,
  CNAPIGwMCPToolParam,
  AIGWOAuthAuthPluginConfig,
  DescribeCloudNativeAPIGatewayConsumerGroupRequest,
  KongUpstreamInfo,
  KongServiceWithRoutes,
  AIGWJWTAuthPluginConfig,
  DescribeCNGWServicesWithRoutesResponse,
  CloudNativeAPIGatewayLLMModelAPI,
  DescribeCloudNativeAPIGatewayLLMModelAPIsRequest,
  ModifyCloudNativeAPIGatewayMCPServerACLRequest,
  AIGWModelRewriteRule,
  CNAPIGwCreateCommonResult,
  CloudNativeAPIGatewayLLMModelServiceRoute,
  CNAPIGwConsumerGroup,
  AIGWOIDCAuthPluginConfig,
  AIGWMCPServerACLResult,
  ModifyCloudNativeAPIGatewayConsumerRequest,
  AIGWLogDesensitizeConfig,
  DescribeCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayConsumerResponse,
  AIGWMCPSessionConfig,
  DefaultKongRoute,
  DescribeCloudNativeAPIGatewayMCPToolListRequest,
  DeleteCloudNativeAPIGatewayMCPServerResponse,
  CNAPIGwParseMCPToolsResult,
  KongRoutePreview,
  ModifyCloudNativeAPIGatewayMCPToolRequest,
  DescribeCloudNativeAPIGatewayMCPToolACLListRequest,
  ListCloudNativeAPIGatewayLLMModelAPI,
  DeleteCloudNativeAPIGatewayLLMModelServiceResponse,
  DescribeCloudNativeAPIGatewayMCPToolResponse,
  ModifyCloudNativeAPIGatewayMCPToolACLResponse,
  DescribeCloudNativeAPIGatewayMCPToolsFromFileRequest,
  AIGWOIDCCredentialConfig,
  CreateCloudNativeAPIGatewayConsumerGroupResponse,
  UpdateCloudNativeAPIGatewayMCPToolsResponse,
  DescribeCloudNativeAPIGatewayLLMModelAPIResponse,
  AIGWMCPUpstreamInfoDetail,
  KongTarget,
  DescribeCloudNativeAPIGatewayLLMModelAPIRequest,
  KVMapping,
  CreateCloudNativeAPIGatewayConsumerRequest,
  AIGWTokenLengthRoute,
  AIGWCacheAwareRouteCandidate,
  BindCloudNativeAPIGatewaySecretKeyRequest,
  ModifyCloudNativeAPIGatewayConsumerResponse,
  ModifyCloudNativeAPIGatewayMCPServerACLResponse,
  DeleteCloudNativeAPIGatewayMCPServerRequest,
  ModifyCloudNativeAPIGatewayMCPServerStatusResponse,
  DeleteCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayMCPToolRequest,
  DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest,
  CreateCloudNativeAPIGatewaySecretKeyRequest,
  DescribeCloudNativeAPIGatewayMCPServerResponse,
  AIGWCacheAwareRouteConfig,
  ModifyCloudNativeAPIGatewayMCPToolACLRequest,
  CreateCloudNativeAPIGatewayMCPServerResponse,
  UpdateCloudNativeAPIGatewayMCPToolsRequest,
  AIGWHealthCheckSetting,
  AIGWLLMTokenUsageStatisticsResult,
  DeleteCloudNativeAPIGatewayLLMModelAPIRequest,
  ModifyCloudNativeAPIGatewayMCPServerStatusRequest,
  ModifyCloudNativeAPIGatewayMCPToolResponse,
  ListFilter,
  RemoveCloudNativeAPIGatewayConsumerInGroupResponse,
  AIGWCrossServiceFallbackConfig,
  DescribeCloudNativeAPIGatewayLLMModelAPIsResponse,
  AddCloudNativeAPIGatewayConsumerInGroupRequest,
  CreateCloudNativeAPIGatewayConsumerResponse,
  CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy,
  DeleteCloudNativeAPIGatewayLLMModelAPIResponse,
  UnbindCloudNativeAPIGatewaySecretKeyResponse,
  AIGWLLMTokenUsageListResult,
  DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse,
  ModifyCloudNativeAPIGatewaySecretKeyRequest,
  CNAPIGwMCPToolPreview,
  CNAPIGwMCPTool,
  AIGWMCPToolACLItem,
  DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse,
  ListCloudNativeAPIGatewayLLMModelService,
  DescribeCNGWServicesWithRoutesRequest,
  DescribeCloudNativeAPIGatewayMCPServerACLResponse,
  ModifyCloudNativeAPIGatewayMCPServerResponse,
  DescribeCloudNativeAPIGatewayLLMModelServiceResponse,
  AIGWLLMQuotaFallbackTrigger,
  DescribeCloudNativeAPIGatewaySecretKeyRequest,
  AIGWMCPToolACLListResult,
  AddCloudNativeAPIGatewayConsumerGroupAuthResponse,
  DeleteCloudNativeAPIGatewayConsumerRequest,
  CloudNativeAPIGatewayLLMModelFallbackRule,
  ModifyCloudNativeAPIGatewayMCPToolStatusResponse,
  AIGWLLMQuotaLimit,
  AIGWCustomDesensitizeRule,
  KongServiceRoute,
  CNAPIGwMCPToolList,
  AIGWTokenLengthRouteRule,
  AIGWOAuthCredentialConfig,
  ModifyCloudNativeAPIGatewayConsumerGroupRequest,
  UnbindCloudNativeAPIGatewaySecretKeyRequest,
  BindCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayMCPToolListResponse,
  CloudNativeAPIGatewayLLMModelService,
  DeleteCloudNativeAPIGatewayConsumerGroupRequest,
  RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest,
  DescribeCloudNativeAPIGatewayMCPServerListRequest,
  DescribeCloudNativeAPIGatewayConsumerGroupResponse,
  AIGWLatencyPriorityConfig,
  ModifyCloudNativeAPIGatewayMCPServerAuthRequest,
  DescribeCloudNativeAPIGatewayMCPServerRequest,
  DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest,
  ModifyCloudNativeAPIGatewayMCPToolStatusRequest,
  CreateCloudNativeAPIGatewayLLMModelServiceRequest,
  AddCloudNativeAPIGatewayConsumerGroupAuthRequest,
  AIGWLLMModelServiceSubRoute,
  AIGWForwardDesensitizeConfig,
  DescribeCloudNativeAPIGatewaySecretKeyValueResponse,
  CreateCloudNativeAPIGatewayMCPToolResponse,
  ModifyCloudNativeAPIGatewayLLMModelServiceRequest,
  DescribeCloudNativeAPIGatewayMCPServerListResponse,
  CreateCloudNativeAPIGatewayLLMModelAPIResponse,
  AIGWMCPServer,
  DescribeCloudNativeAPIGatewayMCPServerAuthRequest,
  DeleteCloudNativeAPIGatewayLLMModelServiceRequest,
  DeleteCloudNativeAPIGatewayConsumerGroupResponse,
  ModifyCloudNativeAPIGatewayLLMModelAPIRequest,
  CreateCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse,
} from "./cngw_models"

/**
 * cngw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cngw.tencentcloudapi.com", "2023-04-18", clientConfig)
  }

  /**
   * 删除AI 网关消费者（被绑定到消费者组/密钥时需先解绑）。
   */
  async DeleteCloudNativeAPIGatewayConsumer(
    req: DeleteCloudNativeAPIGatewayConsumerRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayConsumerResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayConsumerResponse> {
    return this.request("DeleteCloudNativeAPIGatewayConsumer", req, cb)
  }

  /**
   * 修改消费者组。
   */
  async ModifyCloudNativeAPIGatewayConsumerGroup(
    req: ModifyCloudNativeAPIGatewayConsumerGroupRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayConsumerGroupResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayConsumerGroupResponse> {
    return this.request("ModifyCloudNativeAPIGatewayConsumerGroup", req, cb)
  }

  /**
   * 删除AI网关MCP服务
   */
  async DeleteCloudNativeAPIGatewayMCPServer(
    req: DeleteCloudNativeAPIGatewayMCPServerRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayMCPServerResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayMCPServerResponse> {
    return this.request("DeleteCloudNativeAPIGatewayMCPServer", req, cb)
  }

  /**
   * 创建消费者密钥。
   */
  async CreateCloudNativeAPIGatewaySecretKey(
    req: CreateCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<CreateCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("CreateCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 修改 MCP Server ACL
   */
  async ModifyCloudNativeAPIGatewayMCPServerACL(
    req: ModifyCloudNativeAPIGatewayMCPServerACLRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPServerACLResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPServerACLResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPServerACL", req, cb)
  }

  /**
   * 从资源（模型 API / MCP Server）移除消费者组授权。
   */
  async RemoveCloudNativeAPIGatewayConsumerGroupAuth(
    req: RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest,
    cb?: (error: string, rep: RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse) => void
  ): Promise<RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse> {
    return this.request("RemoveCloudNativeAPIGatewayConsumerGroupAuth", req, cb)
  }

  /**
   * 删除AI网关MCP Tool
   */
  async DeleteCloudNativeAPIGatewayMCPTool(
    req: DeleteCloudNativeAPIGatewayMCPToolRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayMCPToolResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayMCPToolResponse> {
    return this.request("DeleteCloudNativeAPIGatewayMCPTool", req, cb)
  }

  /**
   * 创建 LLM 模型 API。
   */
  async CreateCloudNativeAPIGatewayLLMModelAPI(
    req: CreateCloudNativeAPIGatewayLLMModelAPIRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayLLMModelAPIResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayLLMModelAPIResponse> {
    return this.request("CreateCloudNativeAPIGatewayLLMModelAPI", req, cb)
  }

  /**
   * 查询单个 LLM 模型 API 详情。
   */
  async DescribeCloudNativeAPIGatewayLLMModelAPI(
    req: DescribeCloudNativeAPIGatewayLLMModelAPIRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMModelAPIResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMModelAPIResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMModelAPI", req, cb)
  }

  /**
   * 修改 MCP Server Tool ACL
   */
  async ModifyCloudNativeAPIGatewayMCPToolACL(
    req: ModifyCloudNativeAPIGatewayMCPToolACLRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPToolACLResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPToolACLResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPToolACL", req, cb)
  }

  /**
   * AI网关修改MCP Tool上下线状态
   */
  async ModifyCloudNativeAPIGatewayMCPToolStatus(
    req: ModifyCloudNativeAPIGatewayMCPToolStatusRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPToolStatusResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPToolStatusResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPToolStatus", req, cb)
  }

  /**
   * 解绑密钥
   */
  async UnbindCloudNativeAPIGatewaySecretKey(
    req: UnbindCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: UnbindCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<UnbindCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("UnbindCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 修改 LLM 模型服务。
   */
  async ModifyCloudNativeAPIGatewayLLMModelService(
    req: ModifyCloudNativeAPIGatewayLLMModelServiceRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayLLMModelServiceResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayLLMModelServiceResponse> {
    return this.request("ModifyCloudNativeAPIGatewayLLMModelService", req, cb)
  }

  /**
   * 查询消费者组详情。
   */
  async DescribeCloudNativeAPIGatewayConsumerGroup(
    req: DescribeCloudNativeAPIGatewayConsumerGroupRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConsumerGroupResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayConsumerGroupResponse> {
    return this.request("DescribeCloudNativeAPIGatewayConsumerGroup", req, cb)
  }

  /**
   * 将消费者从消费者组移除。
   */
  async RemoveCloudNativeAPIGatewayConsumerInGroup(
    req: RemoveCloudNativeAPIGatewayConsumerInGroupRequest,
    cb?: (error: string, rep: RemoveCloudNativeAPIGatewayConsumerInGroupResponse) => void
  ): Promise<RemoveCloudNativeAPIGatewayConsumerInGroupResponse> {
    return this.request("RemoveCloudNativeAPIGatewayConsumerInGroup", req, cb)
  }

  /**
   * 查看 MCP Server ACL
   */
  async DescribeCloudNativeAPIGatewayMCPServerACL(
    req: DescribeCloudNativeAPIGatewayMCPServerACLRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPServerACLResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPServerACLResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPServerACL", req, cb)
  }

  /**
   * 查询云原生网关 MCP Server 下所有 Tool 的 ACL 状态一览（含 Server ACLType 回显）。
   */
  async DescribeCloudNativeAPIGatewayMCPToolACLList(
    req: DescribeCloudNativeAPIGatewayMCPToolACLListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolACLListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolACLListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolACLList", req, cb)
  }

  /**
   * 创建 LLM 模型服务。同一网关下 Name 唯一。
   */
  async CreateCloudNativeAPIGatewayLLMModelService(
    req: CreateCloudNativeAPIGatewayLLMModelServiceRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayLLMModelServiceResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayLLMModelServiceResponse> {
    return this.request("CreateCloudNativeAPIGatewayLLMModelService", req, cb)
  }

  /**
   * 查询AI 网关MCP服务信息
   */
  async DescribeCloudNativeAPIGatewayMCPServer(
    req: DescribeCloudNativeAPIGatewayMCPServerRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPServerResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPServerResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPServer", req, cb)
  }

  /**
   * 查询指定网关实例下的所有 LLM 模型 API 列表。支持按名称关键词模糊搜索、按过滤器筛选，以及分页查询。用于绑定场景时，可通过 ConsumerGroupId 和 UseToBind 参数筛选可绑定的模型 API。
   */
  async DescribeCloudNativeAPIGatewayLLMModelAPIs(
    req: DescribeCloudNativeAPIGatewayLLMModelAPIsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMModelAPIsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMModelAPIsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMModelAPIs", req, cb)
  }

  /**
   * 将消费者添加到消费者组。
   */
  async AddCloudNativeAPIGatewayConsumerInGroup(
    req: AddCloudNativeAPIGatewayConsumerInGroupRequest,
    cb?: (error: string, rep: AddCloudNativeAPIGatewayConsumerInGroupResponse) => void
  ): Promise<AddCloudNativeAPIGatewayConsumerInGroupResponse> {
    return this.request("AddCloudNativeAPIGatewayConsumerInGroup", req, cb)
  }

  /**
   * 修改AI网关消费者
   */
  async ModifyCloudNativeAPIGatewayConsumer(
    req: ModifyCloudNativeAPIGatewayConsumerRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayConsumerResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayConsumerResponse> {
    return this.request("ModifyCloudNativeAPIGatewayConsumer", req, cb)
  }

  /**
   * 查询云原生网关服务和路由列表
   */
  async DescribeCNGWServicesWithRoutes(
    req: DescribeCNGWServicesWithRoutesRequest,
    cb?: (error: string, rep: DescribeCNGWServicesWithRoutesResponse) => void
  ): Promise<DescribeCNGWServicesWithRoutesResponse> {
    return this.request("DescribeCNGWServicesWithRoutes", req, cb)
  }

  /**
   * 修改MCP服务配置
   */
  async ModifyCloudNativeAPIGatewayMCPServer(
    req: ModifyCloudNativeAPIGatewayMCPServerRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPServerResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPServerResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPServer", req, cb)
  }

  /**
   * AI网关查询MCP服务列表
   */
  async DescribeCloudNativeAPIGatewayMCPServerList(
    req: DescribeCloudNativeAPIGatewayMCPServerListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPServerListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPServerListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPServerList", req, cb)
  }

  /**
   * 查询 MCP Server 的认证配置
   */
  async DescribeCloudNativeAPIGatewayMCPServerAuth(
    req: DescribeCloudNativeAPIGatewayMCPServerAuthRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPServerAuthResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPServerAuthResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPServerAuth", req, cb)
  }

  /**
   * 删除 LLM 模型 API。
   */
  async DeleteCloudNativeAPIGatewayLLMModelAPI(
    req: DeleteCloudNativeAPIGatewayLLMModelAPIRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayLLMModelAPIResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayLLMModelAPIResponse> {
    return this.request("DeleteCloudNativeAPIGatewayLLMModelAPI", req, cb)
  }

  /**
   * 删除消费者密钥（被绑定时需先解绑）。
   */
  async DeleteCloudNativeAPIGatewaySecretKey(
    req: DeleteCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("DeleteCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 查询单个 LLM 模型服务详情。
   */
  async DescribeCloudNativeAPIGatewayLLMModelService(
    req: DescribeCloudNativeAPIGatewayLLMModelServiceRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMModelServiceResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMModelServiceResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMModelService", req, cb)
  }

  /**
   * 修改 LLM 模型 API。
   */
  async ModifyCloudNativeAPIGatewayLLMModelAPI(
    req: ModifyCloudNativeAPIGatewayLLMModelAPIRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayLLMModelAPIResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayLLMModelAPIResponse> {
    return this.request("ModifyCloudNativeAPIGatewayLLMModelAPI", req, cb)
  }

  /**
   * 查询 AI 网关Token 消耗统计汇总
   */
  async DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics(
    req: DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics", req, cb)
  }

  /**
   * 创建AI 网关消费者组
   */
  async CreateCloudNativeAPIGatewayConsumerGroup(
    req: CreateCloudNativeAPIGatewayConsumerGroupRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayConsumerGroupResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayConsumerGroupResponse> {
    return this.request("CreateCloudNativeAPIGatewayConsumerGroup", req, cb)
  }

  /**
   * 查看AI网关MCP Tool
   */
  async DescribeCloudNativeAPIGatewayMCPTool(
    req: DescribeCloudNativeAPIGatewayMCPToolRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPTool", req, cb)
  }

  /**
   * 创建AI网关MCP Tool
   */
  async CreateCloudNativeAPIGatewayMCPTool(
    req: CreateCloudNativeAPIGatewayMCPToolRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayMCPToolResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayMCPToolResponse> {
    return this.request("CreateCloudNativeAPIGatewayMCPTool", req, cb)
  }

  /**
   * 修改AI网关MCP Tool
   */
  async ModifyCloudNativeAPIGatewayMCPTool(
    req: ModifyCloudNativeAPIGatewayMCPToolRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPToolResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPToolResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPTool", req, cb)
  }

  /**
   * 批量导入从OpenAPI文件中解析的MCP Tools
   */
  async UpdateCloudNativeAPIGatewayMCPTools(
    req: UpdateCloudNativeAPIGatewayMCPToolsRequest,
    cb?: (error: string, rep: UpdateCloudNativeAPIGatewayMCPToolsResponse) => void
  ): Promise<UpdateCloudNativeAPIGatewayMCPToolsResponse> {
    return this.request("UpdateCloudNativeAPIGatewayMCPTools", req, cb)
  }

  /**
   * 修改 MCP Server 的认证配置
   */
  async ModifyCloudNativeAPIGatewayMCPServerAuth(
    req: ModifyCloudNativeAPIGatewayMCPServerAuthRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPServerAuthResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPServerAuthResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPServerAuth", req, cb)
  }

  /**
   * 查询密钥明文值（KMS 类型密钥不可获取）。
   */
  async DescribeCloudNativeAPIGatewaySecretKeyValue(
    req: DescribeCloudNativeAPIGatewaySecretKeyValueRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaySecretKeyValueResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaySecretKeyValueResponse> {
    return this.request("DescribeCloudNativeAPIGatewaySecretKeyValue", req, cb)
  }

  /**
   * 创建AI 网关MCP Server
   */
  async ModifyCloudNativeAPIGatewayMCPServerStatus(
    req: ModifyCloudNativeAPIGatewayMCPServerStatusRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPServerStatusResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPServerStatusResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPServerStatus", req, cb)
  }

  /**
   * 创建AI网关MCP Server
   */
  async CreateCloudNativeAPIGatewayMCPServer(
    req: CreateCloudNativeAPIGatewayMCPServerRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayMCPServerResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayMCPServerResponse> {
    return this.request("CreateCloudNativeAPIGatewayMCPServer", req, cb)
  }

  /**
   * 修改AI网关密钥
   */
  async ModifyCloudNativeAPIGatewaySecretKey(
    req: ModifyCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("ModifyCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 查询 AI 网关Token 消耗统计
   */
  async DescribeCloudNativeAPIGatewayLLMTokenUsageList(
    req: DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMTokenUsageList", req, cb)
  }

  /**
   * 查询 AI 网关MCP Tool 列表
   */
  async DescribeCloudNativeAPIGatewayMCPToolList(
    req: DescribeCloudNativeAPIGatewayMCPToolListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolList", req, cb)
  }

  /**
   * 删除 LLM 模型服务（被模型 API 绑定时需先解绑）。
   */
  async DeleteCloudNativeAPIGatewayLLMModelService(
    req: DeleteCloudNativeAPIGatewayLLMModelServiceRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayLLMModelServiceResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayLLMModelServiceResponse> {
    return this.request("DeleteCloudNativeAPIGatewayLLMModelService", req, cb)
  }

  /**
   * 查询云原生消费者详情
   */
  async DescribeCloudNativeAPIGatewayConsumer(
    req: DescribeCloudNativeAPIGatewayConsumerRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConsumerResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayConsumerResponse> {
    return this.request("DescribeCloudNativeAPIGatewayConsumer", req, cb)
  }

  /**
   * 查询密钥详情（SecretValue 字段会被掩码）。
   */
  async DescribeCloudNativeAPIGatewaySecretKey(
    req: DescribeCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("DescribeCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 为资源（模型 API / MCP Server）添加消费者组授权。
   */
  async AddCloudNativeAPIGatewayConsumerGroupAuth(
    req: AddCloudNativeAPIGatewayConsumerGroupAuthRequest,
    cb?: (error: string, rep: AddCloudNativeAPIGatewayConsumerGroupAuthResponse) => void
  ): Promise<AddCloudNativeAPIGatewayConsumerGroupAuthResponse> {
    return this.request("AddCloudNativeAPIGatewayConsumerGroupAuth", req, cb)
  }

  /**
   * 添加密钥与资源的引用关系接口
   */
  async BindCloudNativeAPIGatewaySecretKey(
    req: BindCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: BindCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<BindCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("BindCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 查询 LLM 模型服务列表。
   */
  async DescribeCloudNativeAPIGatewayLLMModelServices(
    req: DescribeCloudNativeAPIGatewayLLMModelServicesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMModelServicesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMModelServicesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMModelServices", req, cb)
  }

  /**
   * 从OpenAPI文件中解析出可导入的MCP tools
   */
  async DescribeCloudNativeAPIGatewayMCPToolsFromFile(
    req: DescribeCloudNativeAPIGatewayMCPToolsFromFileRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolsFromFile", req, cb)
  }

  /**
   * 删除AI网关消费者组
   */
  async DeleteCloudNativeAPIGatewayConsumerGroup(
    req: DeleteCloudNativeAPIGatewayConsumerGroupRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayConsumerGroupResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayConsumerGroupResponse> {
    return this.request("DeleteCloudNativeAPIGatewayConsumerGroup", req, cb)
  }

  /**
   * 创建AI网关消费者。
   */
  async CreateCloudNativeAPIGatewayConsumer(
    req: CreateCloudNativeAPIGatewayConsumerRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayConsumerResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayConsumerResponse> {
    return this.request("CreateCloudNativeAPIGatewayConsumer", req, cb)
  }
}
