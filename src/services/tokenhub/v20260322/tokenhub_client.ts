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
  TokenPlanApiKeyListItem,
  BindingItem,
  CreateApiKeysResultItem,
  DescribeTokenPlanApiKeyListResponse,
  QuotasDesired,
  DeleteGlossaryResponse,
  DeleteGlossaryEntriesResponse,
  RenewTokenPlanTeamOrderResponse,
  ModelImage,
  UsageSeries,
  DescribeTokenPlanListResponse,
  DescribeModelEndpointListResponse,
  DeleteGlossaryEntriesRequest,
  CreateGlossaryEntriesResponse,
  CreateTokenPlanApiKeysResponse,
  ModelAccessInfo,
  DescribeModelListResponse,
  DeleteEndpointResponse,
  CreateTokenPlanTeamOrderAndBuyRequest,
  CreateEndpointRequest,
  DeleteTokenPlanApiKeyResponse,
  EndpointCreateDetail,
  GlossaryEntryItem,
  QuotaCreateItem,
  ModifyGlossaryEntriesResponse,
  DescribeTokenPlanResponse,
  EndpointDetail,
  DescribeModelListRequest,
  DescribeTokenPlanApiKeySecretResponse,
  GlossaryEntryInput,
  ModifyTokenPlanApiKeySecretResponse,
  DeleteGlossaryEntryInput,
  QuotaInfo,
  DescribeApiKeyListResponse,
  ModifyApiKeyInfoResponse,
  DeleteGlossaryRequest,
  DescribeGlossaryEntriesRequest,
  DescribeTokenPlanApiKeyRequest,
  DeleteApiKeyResponse,
  ModifyGlossaryEntryInput,
  CreateEndpointResponse,
  DescribeTokenPlanApiKeyListRequest,
  DescribeGlossariesRequest,
  DescribeTokenPlanApiKeyUsageDetailRequest,
  DescribeGlossaryEntriesResponse,
  ApiKeyDetail,
  UsageDetailItem,
  SubPackageBalance,
  DeleteApiKeyRequest,
  UpgradeTokenPlanTeamOrderResponse,
  TokenPlanPackageInfo,
  UsageStats,
  DescribeUsageRankListResponse,
  DescribeApiKeyResponse,
  DescribeTokenPlanApiKeySecretRequest,
  ModelChargingInfo,
  ModifyApiKeyStatusRequest,
  DescribeTokenPlanRequest,
  GlossaryItem,
  Model,
  ModifyTokenPlanApiKeyResponse,
  DescribeApiKeyListRequest,
  ModifyEndpointRequest,
  UpgradeTokenPlanTeamOrderRequest,
  ModelEndpointView,
  TokenSummaryBillingItem,
  DescribeTokenPlanApiKeyUsageDetailResponse,
  ModifyApiKeyInfoRequest,
  TokenPlanListItem,
  DescribeApiKeyRequest,
  DescribeUsageRankListRequest,
  CreateGlossaryEntriesRequest,
  DescribeGlossariesResponse,
  BatchCreateFailedItem,
  CreateApiKeyResponse,
  ModelSpec,
  DescribeEndpointRequest,
  TokenSummary,
  DescribeEndpointResponse,
  CreateTokenPlanApiKeysRequest,
  ModifyEndpointResponse,
  DeleteTokenPlanApiKeyRequest,
  ModelChargingItem,
  DescribeModelEndpointListRequest,
  DescribeTokenPlanApiKeyResponse,
  DescribeTokenPlanListRequest,
  ModelFreeTrialInfo,
  TokenPlanApiKeyInfo,
  ModifyTokenPlanApiKeyRequest,
  CreateGlossaryRequest,
  UsageRankItem,
  CreateGlossaryResponse,
  ModifyGlossaryEntriesRequest,
  DeleteEndpointRequest,
  RenewTokenPlanTeamOrderRequest,
  ModelSiteRegion,
  ModifyApiKeyStatusResponse,
  CreateTokenPlanTeamOrderAndBuyResponse,
  RequestFilter,
  ModifyTokenPlanApiKeySecretRequest,
  RequestSort,
  CreateApiKeyRequest,
} from "./tokenhub_models"

/**
 * tokenhub client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tokenhub.tencentcloudapi.com", "2026-03-22", clientConfig)
  }

  /**
     * 查询模型接入点列表。

以模型为基准展示所有在线文本类型模型的接入点概览，支持按状态、计费方式、创建来源等条件筛选，使用 Offset/Limit 分页。
     */
  async DescribeModelEndpointList(
    req: DescribeModelEndpointListRequest,
    cb?: (error: string, rep: DescribeModelEndpointListResponse) => void
  ): Promise<DescribeModelEndpointListResponse> {
    return this.request("DescribeModelEndpointList", req, cb)
  }

  /**
     * 续费套餐。

对已有的 TokenPlan 套餐发起续费下单并完成支付，成功后返回大订单 ID 及关联的子订单、资源信息。
     */
  async RenewTokenPlanTeamOrder(
    req: RenewTokenPlanTeamOrderRequest,
    cb?: (error: string, rep: RenewTokenPlanTeamOrderResponse) => void
  ): Promise<RenewTokenPlanTeamOrderResponse> {
    return this.request("RenewTokenPlanTeamOrder", req, cb)
  }

  /**
     * 购买套餐（重新开通过期的套餐续费也通过该接口实现，需要额外传已过期套餐teamId。注：续费成功后套餐包总周期数（TotalCycles）会包含历史周期数，实际套餐包生效周期以生效时间（StartTime）和到期时间（ExpireTime）为准）。

发起 TokenPlan 套餐下单并完成支付，成功后返回大订单 ID 及关联的子订单、资源信息。
     */
  async CreateTokenPlanTeamOrderAndBuy(
    req: CreateTokenPlanTeamOrderAndBuyRequest,
    cb?: (error: string, rep: CreateTokenPlanTeamOrderAndBuyResponse) => void
  ): Promise<CreateTokenPlanTeamOrderAndBuyResponse> {
    return this.request("CreateTokenPlanTeamOrderAndBuy", req, cb)
  }

  /**
     * 查询 API 密钥列表。

查询当前用户的 API 密钥列表，密钥值脱敏展示。支持分页、过滤和排序。
     */
  async DescribeApiKeyList(
    req: DescribeApiKeyListRequest,
    cb?: (error: string, rep: DescribeApiKeyListResponse) => void
  ): Promise<DescribeApiKeyListResponse> {
    return this.request("DescribeApiKeyList", req, cb)
  }

  /**
     * 查询模型列表。

支持按模型 ID、模型名称、模型能力等条件筛选，支持分页和排序。
     */
  async DescribeModelList(
    req: DescribeModelListRequest,
    cb?: (error: string, rep: DescribeModelListResponse) => void
  ): Promise<DescribeModelListResponse> {
    return this.request("DescribeModelList", req, cb)
  }

  /**
     * 查询 TokenPlan APIKey 详情。

返回 APIKey 完整信息（含明文密钥）及子额度包余量。
     */
  async DescribeTokenPlanApiKey(
    req: DescribeTokenPlanApiKeyRequest,
    cb?: (error: string, rep: DescribeTokenPlanApiKeyResponse) => void
  ): Promise<DescribeTokenPlanApiKeyResponse> {
    return this.request("DescribeTokenPlanApiKey", req, cb)
  }

  /**
     * 批量创建 TokenPlan APIKey。

传入名称前缀和数量，自动按 {ApiKeyName}-{序号} 格式生成名称（如 aaa-1, aaa-2）。允许同名。支持部分成功，最多 100 条。
     */
  async CreateTokenPlanApiKeys(
    req: CreateTokenPlanApiKeysRequest,
    cb?: (error: string, rep: CreateTokenPlanApiKeysResponse) => void
  ): Promise<CreateTokenPlanApiKeysResponse> {
    return this.request("CreateTokenPlanApiKeys", req, cb)
  }

  /**
     * 查询 TokenPlan APIKey 列表。

返回指定套餐下的 APIKey 列表，密钥已脱敏。主账号可查看全部，子账号仅可查看自己创建的。
     */
  async DescribeTokenPlanApiKeyList(
    req: DescribeTokenPlanApiKeyListRequest,
    cb?: (error: string, rep: DescribeTokenPlanApiKeyListResponse) => void
  ): Promise<DescribeTokenPlanApiKeyListResponse> {
    return this.request("DescribeTokenPlanApiKeyList", req, cb)
  }

  /**
     * 批量创建术语条目。

在指定术语库下批量创建术语条目。单次最多创建 100 条。
单个术语库默认最多总共可以创建10000个术语对
     */
  async CreateGlossaryEntries(
    req: CreateGlossaryEntriesRequest,
    cb?: (error: string, rep: CreateGlossaryEntriesResponse) => void
  ): Promise<CreateGlossaryEntriesResponse> {
    return this.request("CreateGlossaryEntries", req, cb)
  }

  /**
     * 查询 TokenPlan APIKey 调用明细。

从 CLS 日志服务查询套餐下的调用明细，按 team_id 过滤，支持游标分页。
     */
  async DescribeTokenPlanApiKeyUsageDetail(
    req: DescribeTokenPlanApiKeyUsageDetailRequest,
    cb?: (error: string, rep: DescribeTokenPlanApiKeyUsageDetailResponse) => void
  ): Promise<DescribeTokenPlanApiKeyUsageDetailResponse> {
    return this.request("DescribeTokenPlanApiKeyUsageDetail", req, cb)
  }

  /**
     * 查询术语库列表。

查询当前应用下的术语库列表。支持分页、过滤和排序。
     */
  async DescribeGlossaries(
    req: DescribeGlossariesRequest,
    cb?: (error: string, rep: DescribeGlossariesResponse) => void
  ): Promise<DescribeGlossariesResponse> {
    return this.request("DescribeGlossaries", req, cb)
  }

  /**
     * 更新 API 密钥信息。

更新 API 密钥的备注信息、 IP 白名单和 Token 限额（修改限额推荐使用QuotaDesired参数）。所有可选参数不传表示不修改。
     */
  async ModifyApiKeyInfo(
    req: ModifyApiKeyInfoRequest,
    cb?: (error: string, rep: ModifyApiKeyInfoResponse) => void
  ): Promise<ModifyApiKeyInfoResponse> {
    return this.request("ModifyApiKeyInfo", req, cb)
  }

  /**
     * 创建推理服务。

创建一个在线推理服务，创建成功后返回推理服务 ID。
     */
  async CreateEndpoint(
    req: CreateEndpointRequest,
    cb?: (error: string, rep: CreateEndpointResponse) => void
  ): Promise<CreateEndpointResponse> {
    return this.request("CreateEndpoint", req, cb)
  }

  /**
     * 查询术语条目列表。

查询指定术语库下的术语条目。支持分页。
     */
  async DescribeGlossaryEntries(
    req: DescribeGlossaryEntriesRequest,
    cb?: (error: string, rep: DescribeGlossaryEntriesResponse) => void
  ): Promise<DescribeGlossaryEntriesResponse> {
    return this.request("DescribeGlossaryEntries", req, cb)
  }

  /**
     * 查询用量排行列表。

指标族（MetricType）
- `tokens`（默认）：Token 用量统计。支持 Dimension = apikey / endpoint / model。
  返回指标：TotalToken（总）/ InputTotalToken（输入）/ OutputTotalToken（输出）/ CacheTotalToken（读缓存）。
- `search`：【待上线】联网搜索用量统计。支持 Dimension = apikey / endpoint / model。
  返回指标：SearchRequestCount（搜索请求数）/ SearchCount（搜索引擎调用次数）。

响应内容
- MetricType 字段用于切换指标族，响应回显 MetricType 与 MetricKeys。
- TotalStats：时间窗内全部对象的整段聚合值。
- PageStats：当前翻页内对象的整段聚合值。
- TopList：按MetricKeys[0]降序的对象列表，含整段聚合值与逐时间点曲线。
     */
  async DescribeUsageRankList(
    req: DescribeUsageRankListRequest,
    cb?: (error: string, rep: DescribeUsageRankListResponse) => void
  ): Promise<DescribeUsageRankListResponse> {
    return this.request("DescribeUsageRankList", req, cb)
  }

  /**
     * 批量删除术语条目。

在指定术语库下批量删除术语条目。单次最多删除 200 条。若术语库不存在或不属于当前应用，返回 ResourceNotFound 错误。
     */
  async DeleteGlossaryEntries(
    req: DeleteGlossaryEntriesRequest,
    cb?: (error: string, rep: DeleteGlossaryEntriesResponse) => void
  ): Promise<DeleteGlossaryEntriesResponse> {
    return this.request("DeleteGlossaryEntries", req, cb)
  }

  /**
   * 更新 API 密钥的启用或禁用状态。
   */
  async ModifyApiKeyStatus(
    req: ModifyApiKeyStatusRequest,
    cb?: (error: string, rep: ModifyApiKeyStatusResponse) => void
  ): Promise<ModifyApiKeyStatusResponse> {
    return this.request("ModifyApiKeyStatus", req, cb)
  }

  /**
     * 升配套餐。

对已有的 TokenPlan 套餐发起升配下单并完成支付，扩容积分或 Token 额度，成功后返回大订单 ID 及关联的子订单、资源信息。新额度必须大于当前额度。
     */
  async UpgradeTokenPlanTeamOrder(
    req: UpgradeTokenPlanTeamOrderRequest,
    cb?: (error: string, rep: UpgradeTokenPlanTeamOrderResponse) => void
  ): Promise<UpgradeTokenPlanTeamOrderResponse> {
    return this.request("UpgradeTokenPlanTeamOrder", req, cb)
  }

  /**
     * 创建 API 密钥。

创建一个新的 API 密钥，创建成功后返回 API 密钥 ID。需指定平台类型、绑定方式和初始状态。
     */
  async CreateApiKey(
    req: CreateApiKeyRequest,
    cb?: (error: string, rep: CreateApiKeyResponse) => void
  ): Promise<CreateApiKeyResponse> {
    return this.request("CreateApiKey", req, cb)
  }

  /**
     * 创建术语库。(单个用户默认最多可以创建50个术语库，支持加白)

在当前应用下创建一个新的翻译术语库，用于自定义源语言到目标语言的术语映射。创建成功后返回术语库 ID，可通过该 ID 进一步管理术语条目。
     */
  async CreateGlossary(
    req: CreateGlossaryRequest,
    cb?: (error: string, rep: CreateGlossaryResponse) => void
  ): Promise<CreateGlossaryResponse> {
    return this.request("CreateGlossary", req, cb)
  }

  /**
     * 删除术语库。

删除指定的术语库及其下所有术语条目。删除操作幂等，对不存在的术语库返回成功。调用接口后，若通过 DescribeGlossaries 接口查询不到对应术语库，则表示删除成功。
     */
  async DeleteGlossary(
    req: DeleteGlossaryRequest,
    cb?: (error: string, rep: DeleteGlossaryResponse) => void
  ): Promise<DeleteGlossaryResponse> {
    return this.request("DeleteGlossary", req, cb)
  }

  /**
     * 查询推理服务详情。

根据推理服务 ID 查询推理服务的详细信息，包括计费信息、免费额度、API 调用地址等。
     */
  async DescribeEndpoint(
    req: DescribeEndpointRequest,
    cb?: (error: string, rep: DescribeEndpointResponse) => void
  ): Promise<DescribeEndpointResponse> {
    return this.request("DescribeEndpoint", req, cb)
  }

  /**
     * 重置 TokenPlan APIKey 密钥。

重新生成密钥值，密钥版本号递增，旧密钥立即失效。APIKey ID 不变。重置后需通过 DescribeTokenPlanApiKeySecret 查询新密钥。
     */
  async ModifyTokenPlanApiKeySecret(
    req: ModifyTokenPlanApiKeySecretRequest,
    cb?: (error: string, rep: ModifyTokenPlanApiKeySecretResponse) => void
  ): Promise<ModifyTokenPlanApiKeySecretResponse> {
    return this.request("ModifyTokenPlanApiKeySecret", req, cb)
  }

  /**
     * 删除推理服务。

删除指定的推理服务端点，操作不可逆。调用接口后，若通过 DescribeEndpoint 接口查询不到对应的端点，则表示删除成功。
     */
  async DeleteEndpoint(
    req?: DeleteEndpointRequest,
    cb?: (error: string, rep: DeleteEndpointResponse) => void
  ): Promise<DeleteEndpointResponse> {
    return this.request("DeleteEndpoint", req, cb)
  }

  /**
     * 查询 TokenPlan 套餐详情。

返回套餐基本信息及额度中心主额度包余量。
     */
  async DescribeTokenPlan(
    req: DescribeTokenPlanRequest,
    cb?: (error: string, rep: DescribeTokenPlanResponse) => void
  ): Promise<DescribeTokenPlanResponse> {
    return this.request("DescribeTokenPlan", req, cb)
  }

  /**
     * 修改 TokenPlan APIKey 配置（网关关注字段）。

修改后自动通知网关更新缓存并同步额度中心。
     */
  async ModifyTokenPlanApiKey(
    req: ModifyTokenPlanApiKeyRequest,
    cb?: (error: string, rep: ModifyTokenPlanApiKeyResponse) => void
  ): Promise<ModifyTokenPlanApiKeyResponse> {
    return this.request("ModifyTokenPlanApiKey", req, cb)
  }

  /**
     * 批量修改术语条目。

在指定术语库下批量修改术语条目。单次最多修改 200 条。
     */
  async ModifyGlossaryEntries(
    req: ModifyGlossaryEntriesRequest,
    cb?: (error: string, rep: ModifyGlossaryEntriesResponse) => void
  ): Promise<ModifyGlossaryEntriesResponse> {
    return this.request("ModifyGlossaryEntries", req, cb)
  }

  /**
     * 查询 TokenPlan 套餐列表。

支持分页、过滤和排序。主账号可查看全部，子账号仅可查看自己创建的。返回结果包含每个套餐关联的额度中心主额度包详情。
     */
  async DescribeTokenPlanList(
    req: DescribeTokenPlanListRequest,
    cb?: (error: string, rep: DescribeTokenPlanListResponse) => void
  ): Promise<DescribeTokenPlanListResponse> {
    return this.request("DescribeTokenPlanList", req, cb)
  }

  /**
   * 根据 API 密钥 ID 或密钥值查询 API 密钥详情，返回明文密钥。ApiKeyId 和 ApiKey 至少需传入其一，优先使用 ApiKeyId。
   */
  async DescribeApiKey(
    req: DescribeApiKeyRequest,
    cb?: (error: string, rep: DescribeApiKeyResponse) => void
  ): Promise<DescribeApiKeyResponse> {
    return this.request("DescribeApiKey", req, cb)
  }

  /**
     * 删除 TokenPlan APIKey。

同时删除额度中心子额度包并通知网关清除缓存。
     */
  async DeleteTokenPlanApiKey(
    req: DeleteTokenPlanApiKeyRequest,
    cb?: (error: string, rep: DeleteTokenPlanApiKeyResponse) => void
  ): Promise<DeleteTokenPlanApiKeyResponse> {
    return this.request("DeleteTokenPlanApiKey", req, cb)
  }

  /**
     * 修改推理服务。

修改推理服务的属性，支持修改服务名称、QPM/TPM 限流上限、TPM 包续费设置、智能路由开关和手动重试 TPM 购买。

注意事项：
- 不支持通过本接口切换计费类型（ChargeType），计费类型仅可在创建推理服务（CreateEndpoint）时指定。
- 不支持通过本接口修改 TPM 预付费保障包的 quota（TpmInputLimit/TpmOutputLimit/TimeSpan），这些值仅可在创建推理服务时指定。
- 当 RetryTPMPurchase 为 true 时，系统会异步重试 TPM 包购买，调用后需轮询推理服务状态确认结果。
     */
  async ModifyEndpoint(
    req: ModifyEndpointRequest,
    cb?: (error: string, rep: ModifyEndpointResponse) => void
  ): Promise<ModifyEndpointResponse> {
    return this.request("ModifyEndpoint", req, cb)
  }

  /**
   * 删除指定的 API 密钥，同时清理关联的模型绑定关系。
   */
  async DeleteApiKey(
    req: DeleteApiKeyRequest,
    cb?: (error: string, rep: DeleteApiKeyResponse) => void
  ): Promise<DeleteApiKeyResponse> {
    return this.request("DeleteApiKey", req, cb)
  }

  /**
     * 查询 TokenPlan APIKey 密钥（明文）。

返回指定 APIKey 的明文密钥值，请妥善保管。
     */
  async DescribeTokenPlanApiKeySecret(
    req: DescribeTokenPlanApiKeySecretRequest,
    cb?: (error: string, rep: DescribeTokenPlanApiKeySecretResponse) => void
  ): Promise<DescribeTokenPlanApiKeySecretResponse> {
    return this.request("DescribeTokenPlanApiKeySecret", req, cb)
  }
}
