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
 * Token Plan API Key 列表项
 */
export interface TokenPlanApiKeyListItem {
  /**
   * API Key ID。
   */
  ApiKeyId?: string
  /**
   * API Key 密钥值（脱敏）。
   */
  ApiKey?: string
  /**
   * API Key 名称。
   */
  Name?: string
  /**
   * 所属套餐 ID。
   */
  TeamId?: string
  /**
   * 账号APP ID。
   */
  AppId?: string
  /**
   * 主账号 UIN。最大 128 字符。
   */
  Uin?: string
  /**
   * API Key 可用模型列表（JSON 数组字符串）。
   */
  AllowedModels?: string
  /**
   * API Key 是否可用。取值：enable（启用）、disable（停用）。
   */
  Status?: string
  /**
   * API Key 停用原因。取值：NORMAL（正常，默认值），QUOTA_EXHAUSTED（API Key额度包耗尽），ABNORMAL（异常，需人工介入）
   */
  StopReason?: string
  /**
   * 用户侧开关。取值：enable（启用）、disable（停用）。
   */
  UseStatus?: string
  /**
   * 密钥版本号。
   */
  KeyVersion?: number
  /**
   * 最近一次重置时间。（ISO 8601）
   */
  LastRotatedAt?: string
  /**
   * 创建人，如果是子账号创建，则该值为子账号UIN。
   */
  Creator?: string
  /**
   * 创建时间。
   */
  CreatedAt?: string
  /**
   * 更新时间。
   */
  UpdatedAt?: string
  /**
   * API Key 额度用量信息
   */
  Balance?: SubPackageBalance
  /**
   * 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）。
   */
  ProductType?: string
}

/**
 * 绑定资源项
 */
export interface BindingItem {
  /**
   * 资源 ID（模型 ID 或服务 ID）。
   */
  ResourceId: string
  /**
   * 资源类型。取值：endpoint（服务）、model（模型）。
   */
  ResourceType: string
}

/**
 * DescribeTokenPlanApiKeySecret返回参数结构体
 */
export interface DescribeTokenPlanApiKeySecretResponse {
  /**
   * APIKey ID。
   */
  ApiKeyId?: string
  /**
   * APIKey 密钥值（明文）。请妥善保管。
   */
  ApiKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间周期内的统计聚合值（按 metric key 索引）。本期返回 tokens 族（statistics=sum）的累计 Token 用量；具体包含哪些 key、顺序如何，参见响应顶层 `MetricKeys` 字段。接口预留 MetricType 字段以支持后续指标族扩展，本期仅支持 tokens。
 */
export interface UsageStats {
  /**
   * 时间周期内的累计总 token 数。
   */
  TotalToken?: number
  /**
   * 时间周期内的累计输入 token 数。
   */
  InputTotalToken?: number
  /**
   * 时间周期内的累计输出 token 数。
   */
  OutputTotalToken?: number
}

/**
 * 批量创建成功项
 */
export interface CreateApiKeysResultItem {
  /**
   * APIKey ID。
   */
  ApiKeyId?: string
}

/**
 * ModifyTokenPlanApiKeySecret返回参数结构体
 */
export interface ModifyTokenPlanApiKeySecretResponse {
  /**
   * API Key ID。
   */
  ApiKeyId?: string
  /**
   * 重置后的密钥版本号。
   */
  KeyVersion?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenPlanApiKeyList返回参数结构体
 */
export interface DescribeTokenPlanApiKeyListResponse {
  /**
   * API Key 列表。
   */
  ApiKeySet?: Array<TokenPlanApiKeyListItem>
  /**
   * API Key总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsageRankList请求参数结构体
 */
export interface DescribeUsageRankListRequest {
  /**
   * 统计维度。取值：apikey（按 APIKey 统计）、endpoint（按接入点统计）、model（按模型统计）。
   */
  Dimension: string
  /**
   * 起始时间（闭区间），RFC3339 格式。
   */
  StartTime: string
  /**
   * 结束时间（开区间），RFC3339 格式。与 StartTime 的跨度最大 90 天。
   */
  EndTime: string
  /**
   * 指标族切换字段。本期支持 tokens（累计 Token 用量，statistics=sum）；传其他值将返回 InvalidParameter。空字符串或不传时默认 tokens。接口预留 MetricType 字段以支持后续指标族扩展。
   */
  MetricType?: string
  /**
   * 维度过滤值。空字符串表示查询全部对象，非空时仅查询指定单个对象（如指定 APIKey ID）。最大 256 字符。
   */
  Target?: string
  /**
   * 统计粒度（秒）。取值：60、300、3600、86400。必须不小于跨度对应下限：跨度 ≤ 1 天 → 60；1 ~ 5 天 → 300；5 ~ 10 天 → 3600；> 10 天 → 86400。仅 ShowAll=false 时使用。
   */
  Period?: number
  /**
   * 翻页起点，从 0 起，默认 0。ShowAll=true 时忽略。页大小固定为 10。
   */
  Offset?: number
  /**
   * 是否返回全量结果。
- false（默认）：按 Offset 分页返回 TopList（每页 10 条），每个对象包含
  Series 时序点用于绘制曲线。
- true：忽略 Offset，返回全量对象列表，不返回 Series（CSV 导出场景）。

   */
  ShowAll?: boolean
}

/**
 * DescribeTokenPlan请求参数结构体
 */
export interface DescribeTokenPlanRequest {
  /**
   * 套餐 ID。可通过 DescribeTokenPlanList 接口获取。
   */
  TeamId: string
}

/**
 * DescribeTokenPlanApiKey返回参数结构体
 */
export interface DescribeTokenPlanApiKeyResponse {
  /**
   * API Key 详情信息。
   */
  ApiKey?: TokenPlanApiKeyInfo
  /**
   * API Key 额度及用量信息。
   */
  Balance?: SubPackageBalance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTokenPlanApiKeySecret请求参数结构体
 */
export interface ModifyTokenPlanApiKeySecretRequest {
  /**
   * API Key ID。可通过DescribeTokenPlanApiKeyList接口获取。
   */
  ApiKeyId: string
}

/**
 * API Key 额度及用量信息
 */
export interface SubPackageBalance {
  /**
   * 独占额度。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  ExclusiveQuota?: string
  /**
   * 独占额度已用量。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  ExclusiveUsed?: string
  /**
   * 独占额度剩余量。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  ExclusiveRemain?: string
  /**
   * 共享额度上限，-1 表示不限。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  SharedQuota?: string
  /**
   * 共享额度已用量。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  SharedUsed?: string
  /**
   * 共享额度剩余量。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  SharedRemain?: string
  /**
   * API Key 额度包状态。取值：0（正常）、1（耗尽）。
   */
  Status?: number
}

/**
 * DescribeApiKeyList返回参数结构体
 */
export interface DescribeApiKeyListResponse {
  /**
   * API 密钥列表。
   */
  ApiKeySet?: Array<ApiKeyDetail>
  /**
   * 符合条件的 API 密钥总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewTokenPlanTeamOrder返回参数结构体
 */
export interface RenewTokenPlanTeamOrderResponse {
  /**
   * 腾讯云订单 ID。用于关联一次续费操作下的所有子订单。
   */
  BigOrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 排行列表中的单个对象用量项，含对象标识、时间周期内的统计值（Stats）和时间周期内的时序点列表（Series，仅 ShowAll=false 时返回）。
 */
export interface UsageRankItem {
  /**
   * 全局排名（从 1 起）。分页场景下仍为全量排序中的位次，非页内序号
   */
  Rank?: number
  /**
   * 对象标识。apikey 维度为 APIKey ID；endpoint 维度为接入点；model 维度为模型名。
   */
  Key?: string
  /**
   * 对象展示名。apikey 维度返回 APIKey 名称（已删除的 APIKey 仍保留原名）；
endpoint / model 维度等于 Key。
   */
  Name?: string
  /**
   * 时间周期内的统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stats?: UsageStats
  /**
   * 时间周期内的时序点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Series?: UsageSeries
}

/**
 * Token Plan API Key 详情
 */
export interface TokenPlanApiKeyInfo {
  /**
   * API Key ID。
   */
  ApiKeyId?: string
  /**
   * API Key 密钥值（脱敏）。
   */
  ApiKey?: string
  /**
   * API Key 名称。
   */
  Name?: string
  /**
   * 所属套餐 ID。
   */
  TeamId?: string
  /**
   * 账号APP ID。
   */
  AppId?: string
  /**
   * 主账号 UIN。
   */
  Uin?: string
  /**
   * API Key 可用模型列表（JSON 数组字符串）。
   */
  AllowedModels?: string
  /**
   * API Key 是否可用。取值：enable（启用）、disable（停用）。
   */
  Status?: string
  /**
   * API Key 停用原因。取值：NORMAL（正常，默认值），QUOTA_EXHAUSTED（API Key额度包耗尽），ABNORMAL（异常，需人工介入）
   */
  StopReason?: string
  /**
   * 用户侧开关。取值：enable（启用）、disable（停用）。
   */
  UseStatus?: string
  /**
   * 密钥版本号。
   */
  KeyVersion?: number
  /**
   * 最近一次重置时间。（ISO 8601）
   */
  LastRotatedAt?: string
  /**
   * 创建人，如果是子账号创建，则该值为子账号UIN。
   */
  Creator?: string
  /**
   * 创建时间。
   */
  CreatedAt?: string
  /**
   * 更新时间。
   */
  UpdatedAt?: string
  /**
   * TPM 限制（Tokens Per Minute）。
   */
  TPM?: number
  /**
   * 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）
   */
  ProductType?: string
}

/**
 * DescribeModelList请求参数结构体
 */
export type DescribeModelListRequest = null

/**
 * DescribeApiKeyList请求参数结构体
 */
export interface DescribeApiKeyListRequest {
  /**
   * 平台类型。当前支持填值：maas
   */
  Platform?: string
  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 过滤条件列表。支持的过滤字段：apikeyId（API 密钥 ID）、apiKeyName（名称）、platform（平台类型）、status（状态）、bindType（绑定类型）。
   */
  Filters?: Array<RequestFilter>
  /**
   * 排序条件列表。支持的排序字段：apiKeyName
   */
  Sorts?: Array<RequestSort>
}

/**
 * 用量时间周期内的时序点列表（按 metric key 索引）。为 JSON 数组的字符串形式,数组长度与响应 Timestamps 一致，无数据点处为 null。具体包含哪些 key 由响应 MetricKeys 决定。
 */
export interface UsageSeries {
  /**
   * 总 token 数用量时间周期内的 JSON 字符串形式，如 `"[12,null,15]"`。
   */
  TotalToken?: string
  /**
   * 输入 token 数用量时间周期内的 JSON 字符串形式，如 `"[7,null,9]"`。
   */
  InputTotalToken?: string
  /**
   * 输出 token 数用量时间周期内的 JSON 字符串形式，如 `"[5,null,6]"`。
   */
  OutputTotalToken?: string
}

/**
 * UpgradeTokenPlanTeamOrder请求参数结构体
 */
export interface UpgradeTokenPlanTeamOrderRequest {
  /**
   * 套餐 ID。可通过 DescribeTokenPlanList 接口获取。
   */
  TeamId: string
  /**
   * 升配后的新规格额度。套餐类型为 enterprise 时表示积分额度，套餐类型为 enterprise-auto 时表示 Token 数。必须大于当前额度。
   */
  NewCreditOrToken: number
}

/**
 * DescribeTokenPlanList返回参数结构体
 */
export interface DescribeTokenPlanListResponse {
  /**
   * 套餐列表。
   */
  TokenPlanSet?: Array<TokenPlanListItem>
  /**
   * 套餐总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTokenPlanApiKeys返回参数结构体
 */
export interface CreateTokenPlanApiKeysResponse {
  /**
   * 成功创建的项列表。
   */
  Items?: Array<CreateApiKeysResultItem>
  /**
   * 创建失败的项列表。
   */
  FailedItems?: Array<BatchCreateFailedItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenPlanApiKey请求参数结构体
 */
export interface DescribeTokenPlanApiKeyRequest {
  /**
   * API Key ID。可通过DescribeTokenPlanApiKeyList接口获取。
   */
  ApiKeyId: string
}

/**
 * DescribeApiKey请求参数结构体
 */
export interface DescribeApiKeyRequest {
  /**
   * 平台类型。当前支持填值：maas
   */
  Platform: string
  /**
   * API 密钥 ID，与 ApiKey 至少需传入其一，优先使用 ApiKeyId。
   */
  ApiKeyId?: string
  /**
   * API 密钥明文，与 ApiKeyId 至少需传入其一。
   */
  ApiKey?: string
}

/**
 * Token 汇总计费项
 */
export interface TokenSummaryBillingItem {
  /**
   * 计费项。取值：input（输入 Token）、output（输出 Token）、cache（缓存 Token）、call_count（调用次数）。
   */
  BillingItem?: string
  /**
   * 该计费项在周期内的原始用量汇总，单位：tokens。
   */
  TotalQty?: number
}

/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenPlanApiKeyUsageDetail返回参数结构体
 */
export interface DescribeTokenPlanApiKeyUsageDetailResponse {
  /**
   * 翻页上下文，传入下一次请求的 Context 参数继续翻页。
   */
  Context?: string
  /**
   * 是否已到末尾，为 true 时无需继续翻页。
   */
  ListOver?: boolean
  /**
   * 调用明细列表。
   */
  List?: Array<UsageDetailItem>
  /**
   * 	 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）
   */
  ProductType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 排序条件
 */
export interface RequestSort {
  /**
   * 排序字段名称。
   */
  Name: string
  /**
   * 排序方向。取值：ASC（升序）、DESC（降序）。
   */
  Order: string
}

/**
 * Token Plan 套餐列表项
 */
export interface TokenPlanListItem {
  /**
   * 套餐 ID。
   */
  TeamId?: string
  /**
   * 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）
   */
  ProductType?: string
  /**
   * 套餐名称。最大 128 字符。
   */
  Name?: string
  /**
   * 账号 APP ID。
   */
  AppId?: string
  /**
   * 主账号 UIN。
   */
  Uin?: string
  /**
   * 套餐状态。取值：enable（启用）、disable（停用）。
   */
  Status?: string
  /**
   * 套餐关停原因。取值：NORMAL（正常）、ISOLATED（隔离/欠费）、FROZEN（冻结）、EXHAUSTED（额度耗尽）、DESTROYED（已销毁）
   */
  StopReason?: string
  /**
   * 可创建 API Key 上限。
   */
  ApiKeyMax?: number
  /**
   * 云计费预付费资源包 ID。
   */
  PrepayResourceID?: string
  /**
   * 创建人。若为子账号创建的套餐，则该值为子账号UIN。
   */
  Creator?: string
  /**
   * 创建时间。
   */
  CreatedAt?: string
  /**
   * 更新时间。
   */
  UpdatedAt?: string
  /**
   * 套餐包基本信息。
   */
  PackageInfo?: TokenPlanPackageInfo
  /**
   * 是否开启自动续费。取值：0（未开启），1（开启）
   */
  AutoRenewFlag?: number
}

/**
 * DescribeTokenPlanApiKeyList请求参数结构体
 */
export interface DescribeTokenPlanApiKeyListRequest {
  /**
   * 套餐 ID。可通过DescribeTokenPlanList接口获取。
   */
  TeamId: string
  /**
   * 分页查询偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 分页查询返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 分页查询过滤条件列表。支持的过滤字段：ApiKeyId （API Key ID）、Name （API Key 名称）、Status （API Key是否可用）、StopReason （API Key停用原因）、UseStatus （API Key用户侧开关）。
   */
  Filters?: Array<RequestFilter>
  /**
   * 分页查询排序条件列表。支持的排序字段：CreatedAt（创建时间）、UpdatedAt（更新时间）。默认按 CreatedAt 降序。
   */
  Sorts?: Array<RequestSort>
}

/**
 * CreateTokenPlanTeamOrderAndBuy请求参数结构体
 */
export interface CreateTokenPlanTeamOrderAndBuyRequest {
  /**
   * 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）。
   */
  ProductType: string
  /**
   * 套餐名称。只能包含中文、字母、数字、下划线、连字符，以中文或者字母开头，以中文或字母或数字结尾，2~50个字符
   */
  TeamName: string
  /**
   * 购买时长。单位：月。必须大于 0。
   */
  TimeSpan: number
  /**
   * 购买的套餐规格。套餐类型为专业套餐（enterprise），单位取值为积分；轻享套餐（enterprise-auto），单位取值为 tokens。
   */
  CreditOrToken: number
  /**
   * 是否开启自动续费。默认不开启。
   */
  EnableAutoRenew?: boolean
}

/**
 * ModifyTokenPlanApiKey请求参数结构体
 */
export interface ModifyTokenPlanApiKeyRequest {
  /**
   * API Key ID。
   */
  ApiKeyId: string
  /**
   * 可用模型列表。不传则不修改。

- 如果套餐类型为企业版专业套餐：
1）传入“all“ ：使用套餐支持的所有模型
2）传入 Model ID：指定具体模型。“all“和具体的 Model ID 不能同时传入。

- 如果套餐类型为企业版轻享套餐，不允许传该参数。
   */
  AllowedModels?: Array<string>
  /**
   * 独占额度，不传则不修改。单位说明：

- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  ExclusiveQuota?: number
  /**
   * 总额度上限。-1 表示不限，必须为 -1 或 >= API Key 当前的 ExclusiveQuota（独占额度），不传则不修改。单位说明如下：
- 套餐类型为专业套餐，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  TotalQuota?: number
  /**
   * 是否启用该 API Key。取值：enable（启用）、disable（停用），不传则不修改。
   */
  UseStatus?: string
  /**
   * TPM（Tokens Per Minute）限制。不传则不修改。必须 >= 0 且 <= 套餐 TPM。
   */
  TPM?: number
}

/**
 * RenewTokenPlanTeamOrder请求参数结构体
 */
export interface RenewTokenPlanTeamOrderRequest {
  /**
   * 套餐 ID。可通过 DescribeTokenPlanList 接口获取。
   */
  TeamId: string
  /**
   * 续费时长。单位：月。必须大于 0。
   */
  TimeSpan: number
}

/**
 * DeleteTokenPlanApiKey返回参数结构体
 */
export interface DeleteTokenPlanApiKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenPlanApiKeyUsageDetail请求参数结构体
 */
export interface DescribeTokenPlanApiKeyUsageDetailRequest {
  /**
   * 套餐 ID。可通过DescribeTokenPlanList接口获取。
   */
  TeamId: string
  /**
   * 起始时间，RFC3339 格式。不传默认为结束时间前 15 分钟。
   */
  From?: string
  /**
   * 结束时间，RFC3339 格式。不传默认为当前时间。
   */
  To?: string
  /**
   * 排序方式。取值：asc（升序）、desc（降序），默认为 desc。
   */
  Sort?: string
  /**
   * 返回条数，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 翻页上下文，首次查询不传，后续传入上次返回的 Context，直到 ListOver 为 true。
   */
  Context?: string
  /**
   * 按 API Key ID 精确过滤。最大 128 字符。与 ApiKeyName 至少需传入其一，都传时以 ApiKeyId 为准。可通过 DescribeTokenPlanApiKeyList 接口获取。
   */
  ApiKeyId?: string
  /**
   * 按 API Key 名称模糊过滤。最大 64 字符。与 ApiKeyId 至少需传入其一，都传时以 ApiKeyId 为准。
   */
  ApiKeyName?: string
  /**
   * 按模型 ID (Model ID) 精确过滤。需要按模型名称过滤时传入该字段。
   */
  ModelName?: string
}

/**
 * ModifyTokenPlanApiKey返回参数结构体
 */
export interface ModifyTokenPlanApiKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * API 密钥详情
 */
export interface ApiKeyDetail {
  /**
   * API 密钥 ID。
   */
  ApiKeyId?: string
  /**
   * 名称。
   */
  Name?: string
  /**
   * API 密钥值。接口返回脱敏值
   */
  ApiKey?: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 平台类型。当前支持填值：maas
   */
  Platform?: string
  /**
   * 主账号。
   */
  Uin?: string
  /**
   * 子账号。
   */
  SubUin?: string
  /**
   * 状态。取值：enable（启用）、disable（禁用）。
   */
  Status?: string
  /**
   * 绑定类型。取值：all（全部模型和服务）、model_all_endpoint_custom（全部模型+自定义服务）、model_custom_endpoint_all（自定义模型+全部服务）、model_custom_endpoint_custom（自定义模型+自定义服务）。
   */
  BindType?: string
  /**
   * 创建时间。格式：YYYY-MM-DD HH:mm:ss。
   */
  CreateTime?: string
  /**
   * 更新时间。格式：YYYY-MM-DD HH:mm:ss。
   */
  UpdateTime?: string
  /**
   * 应用 ID。
   */
  AppId?: string
  /**
   * 是否可编辑。true 表示可编辑，false 表示不可编辑。
   */
  Editable?: boolean
  /**
   * 绑定资源列表，区分 endpoint 和 model 类型。
   */
  BindingItems?: Array<BindingItem>
  /**
   * IP 白名单列表。支持 IPv4 和 CIDR 格式。空数组表示不限制 IP。
   */
  IpWhitelist?: Array<string>
  /**
   * 当Platform为maas时该字段为空
   */
  Creator?: string
}

/**
 * Token Plan 企业版套餐调用明细项（字段与 CLS 日志对齐）
 */
export interface UsageDetailItem {
  /**
   * 主账号 UIN。
   */
  Uin?: string
  /**
   * 模型名称。
   */
  ModelName?: string
  /**
   * APIKey ID。
   */
  ApiKeyId?: string
  /**
   * APIKey 名称。
   */
  ApiKeyName?: string
  /**
   * 请求 ID。
   */
  RequestId?: string
  /**
   * 请求时间（RFC3339 格式）。
   */
  RequestTime?: string
  /**
   * 输入 token 数。
   */
  InputToken?: number
  /**
   * 缓存 token 数。
   */
  CacheToken?: number
  /**
   * 输出 token 数。
   */
  OutputToken?: number
  /**
   * 总 token 数。
   */
  TotalToken?: number
  /**
   * 未命中缓存输入消耗额度。单位说明如下：
- 套餐类型为专业套餐（enterprise），单位取值为积分；
- 套餐类型轻享套餐（enterprise-auto），单位取值为 token。
   */
  InputQuota?: string
  /**
   * 缓存消耗额度。单位说明如下：
- 套餐类型为专业套餐（enterprise），单位取值为积分；
- 套餐类型轻享套餐（enterprise-auto），单位取值为 token。
   */
  CacheQuota?: string
  /**
   * 输出消耗额度。单位说明如下：
- 套餐类型为专业套餐（enterprise），单位取值为积分；
- 套餐类型轻享套餐（enterprise-auto），单位取值为 token。
   */
  OutputQuota?: string
  /**
   * 总消耗额度。单位说明如下：
- 套餐类型为专业套餐（enterprise），单位取值为积分；
- 套餐类型轻享套餐（enterprise-auto），单位取值为 token。
   */
  TotalQuota?: string
}

/**
 * 批量创建失败项
 */
export interface BatchCreateFailedItem {
  /**
   * 失败项的序号（从 1 开始，对应后缀编号）。
   */
  Index?: number
  /**
   * 失败项的名称。
   */
  Name?: string
  /**
   * 失败原因。
   */
  Reason?: string
}

/**
 * CreateTokenPlanTeamOrderAndBuy返回参数结构体
 */
export interface CreateTokenPlanTeamOrderAndBuyResponse {
  /**
   * 腾讯云订单 ID。用于关联一次购买操作下的所有子订单。
   */
  BigOrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤条件
 */
export interface RequestFilter {
  /**
   * 过滤字段名称。
   */
  Name: string
  /**
   * 过滤操作符。取值：EXACT（精确匹配）、FUZZY（模糊匹配）、NOT（排除匹配）。
   */
  Op: string
  /**
   * 过滤值列表。最多支持 10 个。
   */
  Values: Array<string>
}

/**
 * 主包Token总结
 */
export interface TokenSummary {
  /**
   * 套餐包当前计费周期序号
   */
  CycleSeq?: number
  /**
   * 套餐包计费周期开始时间（RFC3339）
   */
  CycleStartTime?: string
  /**
   * 套餐包当前计费周期结束时间（RFC3339）
   */
  CycleEndTime?: string
  /**
   * 按计费项分组的 token 汇总列表
   */
  BillingItems?: Array<TokenSummaryBillingItem>
}

/**
 * DescribeTokenPlanList请求参数结构体
 */
export interface DescribeTokenPlanListRequest {
  /**
   * 分页查询偏移量，默认为 0。
   */
  Offset?: number
  /**
   * 分页查询返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 分页查询过滤条件列表。支持的过滤字段：TeamId（套餐 ID）、Name（套餐名称）、StopReason（关停原因）、ProductType（套餐类型）。
   */
  Filters?: Array<RequestFilter>
  /**
   * 排序条件列表。支持的排序字段：CreatedAt（创建时间）、UpdatedAt（更新时间）。默认按 CreatedAt 降序。
   */
  Sorts?: Array<RequestSort>
}

/**
 * UpgradeTokenPlanTeamOrder返回参数结构体
 */
export interface UpgradeTokenPlanTeamOrderResponse {
  /**
   * 腾讯云订单 ID。用于关联一次升配操作下的所有子订单。
   */
  BigOrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主额度包信息
 */
export interface TokenPlanPackageInfo {
  /**
   * 总额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  TotalQuota?: string
  /**
   * 总已使用额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  TotalUsed?: string
  /**
   * 总周期数。
   */
  TotalCycles?: number
  /**
   * 周期单位。取值：month（月）
   */
  CycleUnit?: string
  /**
   * 套餐包生效时间。
   */
  StartTime?: string
  /**
   * 套餐包到期时间。
   */
  ExpireTime?: string
  /**
   * 独占池已分配额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  ExclusiveAllocated?: string
  /**
   * 独占池已用额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  ExclusiveUsed?: string
  /**
   * 共享池总额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  SharedPool?: string
  /**
   * 共享已用额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  SharedUsed?: string
  /**
   * 当期额度。根据套餐类型区分单位：credits（企业版专业套餐），tokens（企业版auto套餐）
   */
  CycleQuota?: string
  /**
   * 当前周期。
   */
  CurrentCycle?: number
  /**
   * 剩余周期。
   */
  RemainCycles?: number
}

/**
 * DescribeTokenPlan返回参数结构体
 */
export interface DescribeTokenPlanResponse {
  /**
   * 套餐 ID。
   */
  TeamId?: string
  /**
   * 套餐名称。
   */
  Name?: string
  /**
   * 主账号 APP ID。
   */
  AppId?: string
  /**
   * 主账号 UIN。
   */
  Uin?: string
  /**
   * 状态。取值：enable（启用）、disable（停用）。
   */
  Status?: string
  /**
   * 关停原因。取值：取值：NORMAL（套餐正常）、ISOLATED（隔离/欠费）、FROZEN（冻结）、EXHAUSTED（额度耗尽）、DESTROYED（已销毁）。
   */
  StopReason?: string
  /**
   * 可创建APIKey 上限。
   */
  ApiKeyMax?: number
  /**
   * 云计费预付费资源包 ID。
   */
  PrepayResourceID?: string
  /**
   * 创建人，子账号创建的套餐将展示子账号UIN。
   */
  Creator?: string
  /**
   * 创建时间。
   */
  CreatedAt?: string
  /**
   * 更新时间。
   */
  UpdatedAt?: string
  /**
   * 套餐包基本信息
   */
  PackageInfo?: TokenPlanPackageInfo
  /**
   * 自动续费标识。取值：0（手动续费）、1（自动续费）、2（明确不自动续费）。未绑定预付费资源时不返回。
   */
  AutoRenewFlag?: number
  /**
   * 当前已创建的 API Key 数量
   */
  ApiKeyCount?: number
  /**
   * 当前周期 Token 用量明细
   */
  TokenSummary?: TokenSummary
  /**
   * 套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）
   */
  ProductType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTokenPlanApiKeys请求参数结构体
 */
export interface CreateTokenPlanApiKeysRequest {
  /**
   * 套餐 ID。可通过DescribeTokenPlanList接口获取。
   */
  TeamId: string
  /**
   * API Key 名称，最大 128 字符。如果创建 API Key 的数量超过1个，实际名称格式为 {ApiKeyName}-{序号}（如 mykey-1, mykey-2）。
   */
  ApiKeyName: string
  /**
   * 创建数量。取值范围：1 ~ 10。
   */
  Count: number
  /**
   * 可用模型列表。如果套餐类型为企业版专业套餐，可以指定模型，也可以传入“all”，传入 “all“表示可以使用套餐支持的所有模型，如果要指定具体模型，传入 Model ID，“all“和具体的 Model ID 不能同时传入，如果不传则表示该API Key不支持任何模型，从而影响API Key的正常使用。如果套餐类型为企业版轻享套餐，则无论是否传入该字段，以及该字段传入什么值，都会被强制覆盖为["auto"]。
   */
  AllowedModels?: Array<string>
  /**
   * 独占额度。不传则为0，代表该 API Key 不被分配任何独占配额。单位说明如下：
- 套餐类型为专业，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  ExclusiveQuota?: number
  /**
   * 总额度上限。-1 表示不限，必须为 -1 或 >= API Key 当前的 ExclusiveQuota（独占额度）。不传表示不设置上限。单位说明如下：
- 套餐类型为专业，单位取值为积分；
- 套餐类型为轻享套餐，单位取值为 token。
   */
  TotalQuota?: number
  /**
   * TPM（Tokens Per Minute）限制。不传使用套餐级别 TPM。必须 >= 0 且 <= 套餐 TPM。
   */
  TPM?: number
}

/**
 * DescribeUsageRankList返回参数结构体
 */
export interface DescribeUsageRankListResponse {
  /**
   * 回填请求的统计维度。
   */
  Dimension?: string
  /**
   * 回填请求的指标族（本期固定为 tokens）。前端按本字段切换图表渲染逻辑。
   */
  MetricType?: string
  /**
   * 本次响应中 Stats / Series / PageStats / TotalStats 实际包含的 metric key 列表，顺序固定为 [Total, Input, Output]。本期为 [TotalToken, InputTotalToken, OutputTotalToken]。前端可遍历此列表渲染图表，无需硬编码 key 名。
   */
  MetricKeys?: Array<string>
  /**
   * 视图（数据来源）
   */
  ViewName?: string
  /**
   * 回填请求的统计粒度（秒）。ShowAll=true 时为 0。
   */
  Period?: number
  /**
   * 回填请求的起始时间。
   */
  StartTime?: string
  /**
   * 回填请求的结束时间。
   */
  EndTime?: string
  /**
   * 全量对象数。
   */
  Total?: number
  /**
   * 回填请求的翻页起点。ShowAll=true 时为 0。
   */
  Offset?: number
  /**
   * 页大小，恒为 10。ShowAll=true 时为 Total。
   */
  Limit?: number
  /**
   * Series 数组对应的时间戳序列（Unix 秒）。ShowAll=true 时为空数组。
   */
  Timestamps?: Array<number | bigint>
  /**
   * 对象排行列表，按主指标（`MetricKeys[0]`，本期为 TotalToken）降序排序。ShowAll=false 时为当前页 10 个对象（含 Series）；ShowAll=true 时为全量对象（不含 Series，用于 CSV 导出）。
   */
  TopList?: Array<UsageRankItem>
  /**
   * 分页统计结果
   */
  PageStats?: UsageStats
  /**
   * 总统计结果
   */
  TotalStats?: UsageStats
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTokenPlanApiKey请求参数结构体
 */
export interface DeleteTokenPlanApiKeyRequest {
  /**
   * API Key ID。可通过DescribeTokenPlanApiKeyList接口获取。
   */
  ApiKeyId: string
}

/**
 * DescribeApiKey返回参数结构体
 */
export interface DescribeApiKeyResponse {
  /**
   * API 密钥 ID。
   */
  ApiKeyId?: string
  /**
   * 名称。
   */
  Name?: string
  /**
   * API 密钥值（明文）。
   */
  ApiKey?: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 平台类型。枚举：maas
   */
  Platform?: string
  /**
   * 主账号。
   */
  Uin?: string
  /**
   * 子账号。
   */
  SubUin?: string
  /**
   * 状态。取值：enable（启用）、disable（禁用）。
   */
  Status?: string
  /**
   * 绑定类型。取值：all（全部模型和接入点）、model_all_endpoint_custom（全部模型+自定义接入点）、model_custom_endpoint_all（自定义模型+全部接入点）、model_custom_endpoint_custom（自定义模型+自定义接入点）。
   */
  BindType?: string
  /**
   * 创建时间。格式：YYYY-MM-DD HH:mm:ss。
   */
  CreateTime?: string
  /**
   * 更新时间。格式：YYYY-MM-DD HH:mm:ss。
   */
  UpdateTime?: string
  /**
   * 应用 ID。
   */
  AppId?: string
  /**
   * 是否可编辑。true 表示可编辑，false 表示不可编辑。
   */
  Editable?: boolean
  /**
   * 绑定资源列表，区分 endpoint 和 model 类型。
   */
  BindingItems?: Array<BindingItem>
  /**
   * IP 白名单列表。支持 IPv4和 CIDR 格式。空数组表示不限制 IP。
   */
  IpWhitelist?: Array<string>
  /**
   * 当Platform为maas时该字段为空
   */
  Creator?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenPlanApiKeySecret请求参数结构体
 */
export interface DescribeTokenPlanApiKeySecretRequest {
  /**
   * API Key ID。可通过DescribeTokenPlanApiKeyList接口获取。
   */
  ApiKeyId: string
}
