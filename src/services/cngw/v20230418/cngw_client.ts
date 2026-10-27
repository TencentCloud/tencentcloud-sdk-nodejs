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
  CheckCloudNativeAPIGatewayMCPToolVersionExistRequest,
  CompareCloudNativeAPIGatewayMCPToolVersionResponse,
  BindCloudNativeAPIGatewaySecretKeyResponse,
  CNAPIGwSecretKeyList,
  ModifyCloudNativeAPIGatewayConsumerGroupResponse,
  DescribeCloudNativeAPIGatewayLLMModelServicesResponse,
  DeleteCloudNativeAPIGatewayMCPToolResponse,
  RollbackCloudNativeAPIGatewayMCPToolVersionResponse,
  CreateCloudNativeAPIGatewayMCPServerRequest,
  ModifyCloudNativeAPIGatewayMCPToolACLResponse,
  DescribeCloudNativeAPIGatewaySecretKeyListResponse,
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
  AIGWChangeSummary,
  AIGWBasicCredentialConfig,
  AIGWGatewayVerifyOAuthConfig,
  AIGWConsumerGroupBrief,
  DeleteCloudNativeAPIGatewayConsumerResponse,
  RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse,
  AIGWRerankMaxDocumentsConfig,
  DefaultKongRoute,
  KeyValue,
  AIGWKVMatch,
  AIGWLengthLimitConfig,
  CNAPIGwAIServiceSourceList,
  DescribeCloudNativeAPIGatewayConsumerRequest,
  DescribeCloudNativeAPIGatewayLLMModelServiceRequest,
  AIGWACLSubject,
  DescribeCloudNativeAPIGatewayMCPToolVersionListResponse,
  CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy,
  CNAPIGwParseMCPToolsResult,
  ModifyCloudNativeAPIGatewaySecretKeyResponse,
  AddCloudNativeAPIGatewayConsumerInGroupResponse,
  AIGWRouteModelServiceConfig,
  AIGWTagFilter,
  CreateCloudNativeAPIGatewayMCPRouteRequest,
  DescribeCloudNativeAPIGatewayMCPToolResponse,
  CloudNativeAPIGatewayLLMModelParamCheckInfo,
  DescribeCloudNativeAPIGatewayMCPToolACLListResponse,
  DescribeCloudNativeAPIGatewayMCPServerListRequest,
  ModifyCloudNativeAPIGatewayMCPServerAuthResponse,
  ModifyCloudNativeAPIGatewayMCPRouteStatusResponse,
  CreateCloudNativeAPIGatewayConsumerGroupRequest,
  CNAPIGwSecretKey,
  ModifyCloudNativeAPIGatewayLLMModelAPIResponse,
  CNAPIGwConsumer,
  AIGWLogConfig,
  KongServicePreview,
  CNAPIGwAIServiceSourceInfo,
  AIGWMCPServerList,
  AIGWJWTCredentialConfig,
  DescribeCloudNativeAPIGatewayLLMModelServiceResponse,
  AIGWOIDCAuthPluginConfig,
  AIGWTopConsumersItem,
  RemoveCloudNativeAPIGatewayConsumerInGroupRequest,
  AIGWHeaderRule,
  CreateCloudNativeAPIGatewayLLMModelServiceRequest,
  DescribeCloudNativeAPIGatewayLLMModelServicesRequest,
  CreateCloudNativeAPIGatewayLLMModelAPIRequest,
  AIGWCustomHeaderCredentialConfig,
  CNAPIGwMCPToolParam,
  AIGWOAuthAuthPluginConfig,
  DescribeCloudNativeAPIGatewayConsumerGroupRequest,
  DescribeCloudNativeAPIGatewayMCPToolACLListRequest,
  DescribeCloudNativeAPIGatewayAIQuotaRequest,
  AIGWJWTAuthPluginConfig,
  CNAPIGwMCPToolImportTaskResult,
  DescribeCNGWServicesWithRoutesResponse,
  CloudNativeAPIGatewayLLMModelAPI,
  DescribeCloudNativeAPIGatewayLLMModelAPIsRequest,
  AIGWMCPServerParamRewriteRule,
  AIGWModelRewriteRule,
  AIGWQuota,
  CNAPIGwCreateCommonResult,
  CloudNativeAPIGatewayLLMModelServiceRoute,
  CNAPIGwConsumerGroup,
  CreateCloudNativeAPIGatewayLLMModelServiceResponse,
  AIGWMCPServerACLResult,
  ModifyCloudNativeAPIGatewayConsumerRequest,
  DescribeCloudNativeAPIGatewayMCPToolImportTaskResponse,
  AIGWLogDesensitizeConfig,
  AIGWBearerTokenCredentialConfig,
  AIGWQuotaSubItem,
  AIGWCreateMCPRouteResult,
  DescribeCloudNativeAPIGatewayConsumerResponse,
  AIGWMCPSessionConfig,
  AIGWMCPServerAuthResult,
  DeleteCloudNativeAPIGatewayMCPToolVersionResponse,
  DescribeCloudNativeAPIGatewayMCPToolListRequest,
  DeleteCloudNativeAPIGatewayMCPServerResponse,
  AIGWModelScope,
  AIGWIntentRouteRule,
  AIGWSmartBalanceConfig,
  ModifyCloudNativeAPIGatewayMCPToolRequest,
  DeleteCloudNativeAPIGatewayLLMModelAPIRequest,
  ListCloudNativeAPIGatewayLLMModelAPI,
  DeleteCloudNativeAPIGatewayLLMModelServiceResponse,
  DescribeCloudNativeAPIGatewayMCPRouteListResponse,
  AIGWQuotaList,
  KongRoutePreview,
  DescribeCloudNativeAPIGatewayMCPToolsFromFileRequest,
  AIGWOIDCCredentialConfig,
  AIGWLoadBalanceConfig,
  CreateCloudNativeAPIGatewayConsumerGroupResponse,
  UpdateCloudNativeAPIGatewayMCPToolsResponse,
  DescribeCloudNativeAPIGatewayLLMModelAPIResponse,
  AutoSecretKey,
  ModifyCloudNativeAPIGatewayMCPServerStatusResponse,
  DescribeCloudNativeAPIGatewayMCPToolVersionResponse,
  AIGWMCPUpstreamInfoDetail,
  AIGWMCPRouteListResult,
  DescribeCloudNativeAPIGatewayLLMModelAPIRequest,
  AIGWLLMResourceDimension,
  DescribeCloudNativeAPIGatewaySecretKeyListRequest,
  KVMapping,
  ModifyCloudNativeAPIGatewayMCPRouteResponse,
  AIGWMCPToolVersion,
  CNAPIGwAIServiceSourceAuth,
  AIGWTokenLengthRoute,
  DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse,
  DescribeCloudNativeAPIGatewayMCPToolVersionListRequest,
  AIGWCacheAwareRouteCandidate,
  CNAPIGwAIServiceSource,
  ModifyCloudNativeAPIGatewayAIServiceSourceResponse,
  AIGWLLMHealthCheckSetting,
  DescribeCloudNativeAPIGatewayAIQuotaResponse,
  DescribeCloudNativeAPIGatewayAIServiceSourceListRequest,
  ModifyCloudNativeAPIGatewayMCPServerACLResponse,
  RollbackCloudNativeAPIGatewayMCPToolVersionRequest,
  DescribeCloudNativeAPIGatewayMCPToolVersionRequest,
  DeleteCloudNativeAPIGatewayMCPServerRequest,
  KongTarget,
  DeleteCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayMCPToolRequest,
  DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest,
  CreateCloudNativeAPIGatewaySecretKeyRequest,
  AIGWQuotaDetail,
  DescribeCloudNativeAPIGatewayMCPServerResponse,
  KongServiceWithRoutes,
  AIGWCacheAwareRouteConfig,
  ModifyCloudNativeAPIGatewayMCPToolACLRequest,
  CreateCloudNativeAPIGatewayMCPServerResponse,
  UpdateCloudNativeAPIGatewayMCPToolsRequest,
  AIGWHealthCheckSetting,
  AIGWLLMTokenUsageStatisticsResult,
  CreateCloudNativeAPIGatewayConsumerRequest,
  ModifyCloudNativeAPIGatewayMCPServerStatusRequest,
  ModifyCloudNativeAPIGatewayMCPToolResponse,
  ListFilter,
  RemoveCloudNativeAPIGatewayConsumerInGroupResponse,
  AIGWCrossServiceFallbackConfig,
  AIGWUpstreamTLSConfig,
  AIGWConsumerModelScope,
  DeleteCloudNativeAPIGatewayMCPRouteRequest,
  DescribeCloudNativeAPIGatewayLLMModelAPIsResponse,
  CompareCloudNativeAPIGatewayMCPToolVersionRequest,
  AddCloudNativeAPIGatewayConsumerInGroupRequest,
  CreateCloudNativeAPIGatewayConsumerResponse,
  AIGWMCPRoute,
  ModifyCloudNativeAPIGatewayMCPServerACLRequest,
  CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy,
  DeleteCloudNativeAPIGatewayLLMModelAPIResponse,
  AIGWSimpleSecretKey,
  DescribeCloudNativeAPIGatewayMCPServerListResponse,
  AIGWLLMTokenUsageListResult,
  DescribeCloudNativeAPIGatewayMCPServerAuthResponse,
  CNAPIGwMCPToolImportResult,
  ModifyCloudNativeAPIGatewayMCPRouteRequest,
  CNAPIGwMCPToolPreview,
  CNAPIGwMCPTool,
  ModifyCloudNativeAPIGatewayAIServiceSourceRequest,
  AIGWMCPToolACLItem,
  DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse,
  DescribeCloudNativeAPIGatewayAIQuotaListRequest,
  ModifyCloudNativeAPIGatewaySecretKeyRequest,
  ListCloudNativeAPIGatewayLLMModelService,
  DescribeCNGWServicesWithRoutesRequest,
  DescribeCloudNativeAPIGatewaySecretKeyResponse,
  DescribeCloudNativeAPIGatewayMCPServerACLResponse,
  DescribeCloudNativeAPIGatewayAIServiceSourceListResponse,
  DescribeCloudNativeAPIGatewayMCPRouteListRequest,
  ModifyCloudNativeAPIGatewayMCPServerResponse,
  CheckCloudNativeAPIGatewayMCPRouteMatchRequest,
  AIGWLLMQuotaFallbackTrigger,
  RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest,
  AIGWModelNameRoute,
  DescribeCloudNativeAPIGatewaySecretKeyRequest,
  ModifyCloudNativeAPIGatewayMCPServerRequest,
  AIGWMCPToolACLListResult,
  AddCloudNativeAPIGatewayConsumerGroupAuthResponse,
  KongUpstreamInfo,
  DescribeCloudNativeAPIGatewaySecretKeyValueResponse,
  AIGWMCPServerRequestRewriteConfig,
  AIGWAuthModelScopeItem,
  AIGWMCPRouteCheckResult,
  DeleteCloudNativeAPIGatewayConsumerRequest,
  CloudNativeAPIGatewayLLMModelFallbackRule,
  ModifyCloudNativeAPIGatewayMCPToolStatusResponse,
  CreateCloudNativeAPIGatewayMCPRouteResponse,
  ModifyCloudNativeAPIGatewayMCPRouteStatusRequest,
  AIGWLLMQuotaLimit,
  AIGWCustomDesensitizeRule,
  CreateCloudNativeAPIGatewaySecretKeyResponse,
  KongServiceRoute,
  CNAPIGwMCPToolList,
  DeleteCloudNativeAPIGatewayAIServiceSourceResponse,
  UnbindCloudNativeAPIGatewaySecretKeyResponse,
  CreateCloudNativeAPIGatewayAIServiceSourceRequest,
  AIGWTokenLengthRouteRule,
  AIGWOAuthCredentialConfig,
  ModifyCloudNativeAPIGatewayConsumerGroupRequest,
  DeleteCloudNativeAPIGatewayMCPRouteResponse,
  UnbindCloudNativeAPIGatewaySecretKeyRequest,
  AIGWQueryParamCredentialConfig,
  AIGWPriorityScheduleConfig,
  DescribeCloudNativeAPIGatewayMCPToolListResponse,
  CloudNativeAPIGatewayLLMModelService,
  DeleteCloudNativeAPIGatewayConsumerGroupRequest,
  AIGWMCPServerParamRewriteConfig,
  AIGWMCPToolVersionList,
  DescribeCloudNativeAPIGatewayConsumerGroupResponse,
  CheckCloudNativeAPIGatewayMCPToolVersionExistResponse,
  CheckCloudNativeAPIGatewayMCPRouteMatchResponse,
  AIGWLatencyPriorityConfig,
  ModifyCloudNativeAPIGatewayMCPServerAuthRequest,
  DescribeCloudNativeAPIGatewayMCPServerRequest,
  DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest,
  BindCloudNativeAPIGatewaySecretKeyRequest,
  ModifyCloudNativeAPIGatewayMCPToolStatusRequest,
  AddCloudNativeAPIGatewayConsumerGroupAuthRequest,
  DescribeCloudNativeAPIGatewayAIQuotaListResponse,
  AIGWLLMModelServiceSubRoute,
  ModifyCloudNativeAPIGatewayConsumerResponse,
  AIGWForwardDesensitizeConfig,
  AIGWSensitiveWordRoute,
  AIGWAKSKCredentialConfig,
  CreateCloudNativeAPIGatewayMCPToolResponse,
  ModifyCloudNativeAPIGatewayLLMModelServiceRequest,
  DeleteCloudNativeAPIGatewayAIServiceSourceRequest,
  ModifyCloudNativeAPIGatewayLLMModelServiceResponse,
  DeleteCloudNativeAPIGatewayMCPToolVersionRequest,
  CreateCloudNativeAPIGatewayLLMModelAPIResponse,
  AIGWGatewayVerifyConfig,
  DescribeCloudNativeAPIGatewayMCPServerAuthRequest,
  CreateCloudNativeAPIGatewayAIServiceSourceResponse,
  DeleteCloudNativeAPIGatewayLLMModelServiceRequest,
  DescribeCloudNativeAPIGatewayMCPToolImportTaskRequest,
  DeleteCloudNativeAPIGatewayConsumerGroupResponse,
  DescribeCloudNativeAPIGatewayMCPServerACLRequest,
  ModifyCloudNativeAPIGatewayLLMModelAPIRequest,
  AIGWCAMCredentialConfig,
  AIGWMCPServer,
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
     * 查询AI网关配额

支持 ConsumerGroup 配额，返回 ConsumerGroupPath、ConsumerGroupActive 及实际用量；失效组的规则仍可查询。
     */
  async DescribeCloudNativeAPIGatewayAIQuota(
    req: DescribeCloudNativeAPIGatewayAIQuotaRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayAIQuotaResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayAIQuotaResponse> {
    return this.request("DescribeCloudNativeAPIGatewayAIQuota", req, cb)
  }

  /**
   * 上传插件前置操作，获取COS相关信息
   */
  async ModifyCloudNativeAPIGatewayMCPRoute(
    req: ModifyCloudNativeAPIGatewayMCPRouteRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPRouteResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPRouteResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPRoute", req, cb)
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
【消费者批量自动分配 API Key｜修改：内部并发/配额逻辑，字段不变】消费者密钥单条创建在事务中使用与批量预留相同的实例写锁，配额检查使用当前锁定读，避免单条与批量并发绕过配额。仍是单条创建；原 GenerateType、请求字段、既有配额错误语义及 Result.Success/ID 不变，不增加 ConsumerIds/ClientToken。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
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
     * 查询AI配额配置列表

支持按 ConsumerGroup 查询组自身配额，默认仍只查询 Consumer；返回组路径、有效状态及实际用量。上下级关联配额请使用 DescribeAIGWConsumerGroupAIQuotaList。
     */
  async DescribeCloudNativeAPIGatewayAIQuotaList(
    req: DescribeCloudNativeAPIGatewayAIQuotaListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayAIQuotaListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayAIQuotaListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayAIQuotaList", req, cb)
  }

  /**
   * 创建云原生网关AI服务来源
   */
  async CreateCloudNativeAPIGatewayAIServiceSource(
    req: CreateCloudNativeAPIGatewayAIServiceSourceRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayAIServiceSourceResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayAIServiceSourceResponse> {
    return this.request("CreateCloudNativeAPIGatewayAIServiceSource", req, cb)
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
   * 修改云原生智能网关MCP Tool
   */
  async DescribeCloudNativeAPIGatewayMCPToolVersion(
    req: DescribeCloudNativeAPIGatewayMCPToolVersionRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolVersionResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolVersionResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolVersion", req, cb)
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
   * 查询批量导入MCP Tools的任务进度
   */
  async DescribeCloudNativeAPIGatewayMCPToolImportTask(
    req: DescribeCloudNativeAPIGatewayMCPToolImportTaskRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolImportTaskResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolImportTaskResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolImportTask", req, cb)
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
   * 删除云原生网关AI服务来源
   */
  async DeleteCloudNativeAPIGatewayAIServiceSource(
    req: DeleteCloudNativeAPIGatewayAIServiceSourceRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayAIServiceSourceResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayAIServiceSourceResponse> {
    return this.request("DeleteCloudNativeAPIGatewayAIServiceSource", req, cb)
  }

  /**
     * 查询消费者组详情。

组织架构扩展：ConsumerGroupId 同时支持原 cg-* 和组织部门 UUID；保留状态、数量、时间和描述逻辑。原普通组状态为 Enable/Disable，目录部门状态为 active/disabled/soft_deleted。
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
   * 修改云原生智能网关MCP Tool
   */
  async CheckCloudNativeAPIGatewayMCPToolVersionExist(
    req: CheckCloudNativeAPIGatewayMCPToolVersionExistRequest,
    cb?: (error: string, rep: CheckCloudNativeAPIGatewayMCPToolVersionExistResponse) => void
  ): Promise<CheckCloudNativeAPIGatewayMCPToolVersionExistResponse> {
    return this.request("CheckCloudNativeAPIGatewayMCPToolVersionExist", req, cb)
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
   * 上传插件前置操作，获取COS相关信息
   */
  async DescribeCloudNativeAPIGatewayMCPRouteList(
    req: DescribeCloudNativeAPIGatewayMCPRouteListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPRouteListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPRouteListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPRouteList", req, cb)
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
   * 查询云原生网关AI服务来源
   */
  async DescribeCloudNativeAPIGatewayAIServiceSourceList(
    req: DescribeCloudNativeAPIGatewayAIServiceSourceListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayAIServiceSourceListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayAIServiceSourceListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayAIServiceSourceList", req, cb)
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
【消费者批量自动分配 API Key｜修改：新增未完成批次保护，字段不变】目标密钥属于批次且对应项处于 Pending/Running/Reconciling 时，删除返回 OperationDenied.BatchKeyPending。完成后仍执行原绑定/依赖删除检查；原 GatewayId/SecretKeyId 不变，成功不新增业务 Result。删除已生成密钥不改写批次历史成功，后续批次明文读取返回逐项 ResourceNotFound.SecretKey。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
     */
  async DeleteCloudNativeAPIGatewaySecretKey(
    req: DeleteCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("DeleteCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
     * 解绑密钥
【消费者批量自动分配 API Key｜修改：新增未完成批次保护，字段不变】目标密钥属于批次且对应项处于 Pending/Running/Reconciling 时，解绑返回 OperationDenied.BatchKeyPending。完成后继续原解绑；原 GatewayId/SecretKeyId/ResourceType/ResourceIds 不变，成功不新增业务 Result。解绑不改写批次历史成功，后续批次明文读取返回逐项 OperationDenied.BindingChanged。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
     */
  async UnbindCloudNativeAPIGatewaySecretKey(
    req: UnbindCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: UnbindCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<UnbindCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("UnbindCloudNativeAPIGatewaySecretKey", req, cb)
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
   * 从OpenAPI文件中解析出可导入的MCP tools
   */
  async DescribeCloudNativeAPIGatewayMCPToolsFromFile(
    req: DescribeCloudNativeAPIGatewayMCPToolsFromFileRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolsFromFile", req, cb)
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
   * 查询 AI 网关 Token 用量汇总。网关版本不低于 3.9.8 且 Dimension=ConsumerGroup 时，按历史归属对日志并集去重统计；无节点筛选则查询全部成功归属且祖先集合非空的日志，不依赖当前组织目录候选。返回一份汇总，TopConsumers 为空数组。 网关版本不低于 3.9.8 时，所有支持维度的消费者组筛选统一为 ConsumerGroupId / ConsumerGroupName，均按历史归属查询；旧 OrganizationNodeId / OrganizationNodeName 筛选不再接受。
   */
  async DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics(
    req: DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics", req, cb)
  }

  /**
   * 修改云原生智能网关MCP Tool
   */
  async RollbackCloudNativeAPIGatewayMCPToolVersion(
    req: RollbackCloudNativeAPIGatewayMCPToolVersionRequest,
    cb?: (error: string, rep: RollbackCloudNativeAPIGatewayMCPToolVersionResponse) => void
  ): Promise<RollbackCloudNativeAPIGatewayMCPToolVersionResponse> {
    return this.request("RollbackCloudNativeAPIGatewayMCPToolVersion", req, cb)
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
   * 上传插件前置操作，获取COS相关信息
   */
  async CreateCloudNativeAPIGatewayMCPRoute(
    req: CreateCloudNativeAPIGatewayMCPRouteRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayMCPRouteResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayMCPRouteResponse> {
    return this.request("CreateCloudNativeAPIGatewayMCPRoute", req, cb)
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
     * 查询密钥列表。
普通版批量新建密钥的生成来源扩展：新页面按需 IncludeCreationInfo=true，省略/false 保持原响应字段。原 GenerateType 不新增 Batch；批量记录仍为 System。协议：https://iwiki.woa.com/p/4042678235。
【消费者批量自动分配 API Key｜修改：可选参数、可选出参及筛选】增加可选 IncludeCreationInfo（默认 false）。仅 true 且 ResourceType=Consumer 时在原 Result.SecretKeys[] 增加 CredentialGenerateType、CreationSource、BatchId 三个非必返字段；Result.TotalCount/SecretKeys 结构不变。Filters 新增 CredentialGenerateType、CreationSource，先过滤后计数分页，与是否返回来源字段独立；保留原 GenerateType 枚举和原分页上限。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
     */
  async DescribeCloudNativeAPIGatewaySecretKeyList(
    req: DescribeCloudNativeAPIGatewaySecretKeyListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaySecretKeyListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaySecretKeyListResponse> {
    return this.request("DescribeCloudNativeAPIGatewaySecretKeyList", req, cb)
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
   * 修改云原生智能网关MCP Tool
   */
  async DescribeCloudNativeAPIGatewayMCPToolVersionList(
    req: DescribeCloudNativeAPIGatewayMCPToolVersionListRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayMCPToolVersionListResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayMCPToolVersionListResponse> {
    return this.request("DescribeCloudNativeAPIGatewayMCPToolVersionList", req, cb)
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
【消费者批量自动分配 API Key｜修改：新增未完成批次保护，字段不变】目标密钥属于批次且对应项处于 Pending/Running/Reconciling 时，编辑返回 OperationDenied.BatchKeyPending，提示等待批次完成。其他情况继续原编辑校验和行为；原 GatewayId/SecretKeyId/Name/Description 不变，成功不新增业务 Result。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
     */
  async ModifyCloudNativeAPIGatewaySecretKey(
    req: ModifyCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("ModifyCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 查询 AI 网关 Token 用量列表。网关版本不低于 3.9.8 且 Dimension=ConsumerGroup 时，未指定节点筛选则列出 Kong CP 当前目录的全部真实节点，包含同步、自定义、禁用及保留中的软删节点，排除合成展示节点。按当前名称、节点 UUID 升序，先分页节点再查询历史指标；无调用节点仍返回，Token 与请求数补零。节点指标包含历史下属，同一请求可计入多个组行，不能逐行相加作为网关总量。 网关版本不低于 3.9.8 时，所有支持维度的消费者组筛选统一为 ConsumerGroupId / ConsumerGroupName，均按历史归属查询；旧 OrganizationNodeId / OrganizationNodeName 筛选不再接受。
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

组织架构扩展：保留原消费者详情与完整字段，ConsumerGroups 补齐对应组织成员关系；同步成员保持目录归属隔离。
     */
  async DescribeCloudNativeAPIGatewayConsumer(
    req: DescribeCloudNativeAPIGatewayConsumerRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConsumerResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayConsumerResponse> {
    return this.request("DescribeCloudNativeAPIGatewayConsumer", req, cb)
  }

  /**
     * 查询密钥详情（SecretValue 字段会被掩码）。
普通版批量新建密钥的生成来源扩展：新页面按需 IncludeCreationInfo=true，省略/false 保持原响应字段。原 GenerateType 不新增 Batch；批量记录仍为 System。协议：https://iwiki.woa.com/p/4042678235。
【消费者批量自动分配 API Key｜修改：可选参数及可选出参】增加可选 IncludeCreationInfo（默认 false）。仅 true 且 ResourceType=Consumer 时在原 Result 增加 CredentialGenerateType、CreationSource、BatchId 三个非必返字段；省略/false 保持旧响应。原字段、SecretValue 脱敏和单条详情结构不变。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
     */
  async DescribeCloudNativeAPIGatewaySecretKey(
    req: DescribeCloudNativeAPIGatewaySecretKeyRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaySecretKeyResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaySecretKeyResponse> {
    return this.request("DescribeCloudNativeAPIGatewaySecretKey", req, cb)
  }

  /**
   * 更新指定网关实例内的 LLM 模型服务，可调整该服务向上游请求压缩响应的协商方式。
   */
  async ModifyCloudNativeAPIGatewayLLMModelService(
    req: ModifyCloudNativeAPIGatewayLLMModelServiceRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayLLMModelServiceResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayLLMModelServiceResponse> {
    return this.request("ModifyCloudNativeAPIGatewayLLMModelService", req, cb)
  }

  /**
   * 修改云原生智能网关MCP Tool
   */
  async CompareCloudNativeAPIGatewayMCPToolVersion(
    req: CompareCloudNativeAPIGatewayMCPToolVersionRequest,
    cb?: (error: string, rep: CompareCloudNativeAPIGatewayMCPToolVersionResponse) => void
  ): Promise<CompareCloudNativeAPIGatewayMCPToolVersionResponse> {
    return this.request("CompareCloudNativeAPIGatewayMCPToolVersion", req, cb)
  }

  /**
     * 添加密钥与资源的引用关系接口
【消费者批量自动分配 API Key｜修改：内部并发/配额逻辑，字段不变】ResourceType=Consumer 时与批量预留共用实例写锁，单消费者绑定配额使用当前锁定读。仍按原 SecretKeyId、ResourceIds 绑定；消费者目标最多一个，单密钥不能同时绑定多个消费者，成功仍返回 Result=true。此入口不新增 OperationDenied.BatchKeyPending；该错误属于下述四个变更入口的保护逻辑。 完整接口清单与逐项说明：https://iwiki.woa.com/p/4042678235（第 2、2.4 节）。
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
   * 修改云原生网关AI服务来源
   */
  async ModifyCloudNativeAPIGatewayAIServiceSource(
    req: ModifyCloudNativeAPIGatewayAIServiceSourceRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayAIServiceSourceResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayAIServiceSourceResponse> {
    return this.request("ModifyCloudNativeAPIGatewayAIServiceSource", req, cb)
  }

  /**
   * 上传插件前置操作，获取COS相关信息
   */
  async DeleteCloudNativeAPIGatewayMCPRoute(
    req: DeleteCloudNativeAPIGatewayMCPRouteRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayMCPRouteResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayMCPRouteResponse> {
    return this.request("DeleteCloudNativeAPIGatewayMCPRoute", req, cb)
  }

  /**
   * 上传插件前置操作，获取COS相关信息
   */
  async CheckCloudNativeAPIGatewayMCPRouteMatch(
    req: CheckCloudNativeAPIGatewayMCPRouteMatchRequest,
    cb?: (error: string, rep: CheckCloudNativeAPIGatewayMCPRouteMatchResponse) => void
  ): Promise<CheckCloudNativeAPIGatewayMCPRouteMatchResponse> {
    return this.request("CheckCloudNativeAPIGatewayMCPRouteMatch", req, cb)
  }

  /**
     * 删除AI网关消费者组

同步组仅在 soft_deleted 状态且全部依赖已清理后允许手动硬删除；ConsumerGroupId 使用组织 UUID。存在配额规则时须先删除规则，单纯停用不能解除依赖。硬删除时重新校验，依赖变化可能导致删除失败。
     */
  async DeleteCloudNativeAPIGatewayConsumerGroup(
    req: DeleteCloudNativeAPIGatewayConsumerGroupRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayConsumerGroupResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayConsumerGroupResponse> {
    return this.request("DeleteCloudNativeAPIGatewayConsumerGroup", req, cb)
  }

  /**
   * 修改云原生智能网关MCP Tool
   */
  async DeleteCloudNativeAPIGatewayMCPToolVersion(
    req: DeleteCloudNativeAPIGatewayMCPToolVersionRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayMCPToolVersionResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayMCPToolVersionResponse> {
    return this.request("DeleteCloudNativeAPIGatewayMCPToolVersion", req, cb)
  }

  /**
   * 上传插件前置操作，获取COS相关信息
   */
  async ModifyCloudNativeAPIGatewayMCPRouteStatus(
    req: ModifyCloudNativeAPIGatewayMCPRouteStatusRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayMCPRouteStatusResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayMCPRouteStatusResponse> {
    return this.request("ModifyCloudNativeAPIGatewayMCPRouteStatus", req, cb)
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
