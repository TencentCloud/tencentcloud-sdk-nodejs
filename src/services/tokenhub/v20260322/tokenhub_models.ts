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
   * <p>资源 ID（模型 ID 或服务 ID）。</p>
   */
  ResourceId: string
  /**
   * <p>资源类型。取值：endpoint（推理服务）、model（模型）。推荐绑定endpoint，绑定model即将下线。已绑定model的apikey仍可使用，但控制台回显将不会展示模型绑定列表。</p><p>枚举值：</p><ul><li>endpoint： 绑定到endpoint（默认推理服务或自定义推理服务）</li></ul>
   */
  ResourceType: string
  /**
   * <p>资源状态</p>
   */
  Status?: string
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
 * Token 限额期望状态
 */
export interface QuotasDesired {
  /**
   * <p>限额周期，必填。取值：d（按日）、m（按月）、lifetime（总额度）。</p>
   */
  CycleUnit: string
  /**
   * <p>单周期额度（Token 数），必填，不能大于10万亿。使用字符串避免大数精度丢失。同维度若与现网不同视为升配/降配。</p>
   */
  CycleCredits: string
  /**
   * <p>月度限额起始日。CycleUnit=m 时可选，1~31，默认 1。小月（如 2 月）由下游自动取该月最后一天。已有月度限额包时，更新月起始日视为周期窗口切换，会 delete 旧包后 add 新包，累计额度会重置</p>
   */
  MonthStartDay?: number
}

/**
 * DeleteGlossary返回参数结构体
 */
export interface DeleteGlossaryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGlossaryEntries返回参数结构体
 */
export interface DeleteGlossaryEntriesResponse {
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
 * 模型图标信息
 */
export interface ModelImage {
  /**
   * 图标 URL。
   */
  Url?: string
}

/**
 * 用量时间周期内的时序点列表（按 metric key 索引）。为 JSON 数组的字符串形式,数组长度与响应 Timestamps 一致，无数据点处为 null。具体包含哪些 key 由响应 MetricKeys 决定。
 */
export interface UsageSeries {
  /**
   * <p>[tokens 族]总 token 数用量时间周期内的 JSON 字符串形式，如 <code>&quot;[12,null,15]&quot;</code>。</p>
   */
  TotalToken?: string
  /**
   * <p>[tokens 族]输入 token 数用量时间周期内的 JSON 字符串形式，如 <code>&quot;[7,null,9]&quot;</code>。</p>
   */
  InputTotalToken?: string
  /**
   * <p>[tokens 族]输出 token 数用量时间周期内的 JSON 字符串形式，如 <code>&quot;[5,null,6]&quot;</code>。</p>
   */
  OutputTotalToken?: string
  /**
   * <p>[tokens 族]读缓存 token 数用量时间周期内的 JSON 字符串形式，如<code>&quot;[5,null,6]&quot;</code>。</p>
   */
  CacheTotalToken?: string
  /**
   * <p>[search 族] 搜索请求数用量时间周期内的 JSON 字符串形式，如<code>&quot;[5,null,6]&quot;</code>。</p>
   */
  SearchRequestCount?: string
  /**
   * <p>[search 族] 搜索引擎调用次数用量时间周期内的 JSON 字符串形式，如<code>&quot;[5,null,6]&quot;</code>。</p>
   */
  SearchCount?: string
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
 * DescribeModelEndpointList返回参数结构体
 */
export interface DescribeModelEndpointListResponse {
  /**
   * <p>模型接入点列表。</p>
   */
  ModelEndpointSet?: Array<ModelEndpointView>
  /**
   * <p>符合条件的总数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGlossaryEntries请求参数结构体
 */
export interface DeleteGlossaryEntriesRequest {
  /**
   * 术语库 ID。可通过 DescribeGlossaries 接口获取。
   */
  GlossaryId: string
  /**
   * 待删除的术语条目列表。单次最多 200 个。
   */
  Entries: Array<DeleteGlossaryEntryInput>
}

/**
 * CreateGlossaryEntries返回参数结构体
 */
export interface CreateGlossaryEntriesResponse {
  /**
   * 创建成功的术语条目列表。
   */
  Entries?: Array<GlossaryEntryItem>
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
 * 模型访问信息
 */
export interface ModelAccessInfo {
  /**
   * 各站点的地域可用性列表。为空时表示未配置地域信息，模型不可用。
   */
  ModelSiteRegions?: Array<ModelSiteRegion>
}

/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
  /**
   * <p>模型列表。</p>
   */
  ModelSet?: Array<Model>
  /**
   * <p>符合条件的模型总数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEndpoint返回参数结构体
 */
export interface DeleteEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTokenPlanTeamOrderAndBuy请求参数结构体
 */
export interface CreateTokenPlanTeamOrderAndBuyRequest {
  /**
   * <p>套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）。</p>
   */
  ProductType: string
  /**
   * <p>套餐名称。只能包含中文、字母、数字、下划线、连字符，以中文或者字母开头，以中文或字母或数字结尾，2~50个字符</p>
   */
  TeamName: string
  /**
   * <p>购买时长。单位：月。必须大于 0，支持1个月～12个月。</p>
   */
  TimeSpan: number
  /**
   * <p>购买的套餐规格。套餐类型为专业套餐（enterprise），单位取值为积分；轻享套餐（enterprise-auto），单位取值为 tokens。</p>
   */
  CreditOrToken: number
  /**
   * <p>是否开启自动续费。默认不开启。</p>
   */
  EnableAutoRenew?: boolean
  /**
   * <p>已有套餐 ID（非空时走过期续费，空时走新购）</p>
   */
  TeamId?: string
}

/**
 * CreateEndpoint请求参数结构体
 */
export interface CreateEndpointRequest {
  /**
   * <p>服务名称。最大 64 字符。</p>
   */
  EndpointName: string
  /**
   * <p>模型 ID。可通过 DescribeModelList 接口获取。</p>
   */
  ModelId: string
  /**
   * <p>计费方式。取值：FREE（免费体验）、TOKEN（按 Token 计费）、TPM（TPM 保障）、COMPUTE_UNIT（按算力单元计费）。</p>
   */
  ChargeType: string
  /**
   * <p>RPM（每分钟请求数）限流上限。可选。必须大于 0，且不能超过用户在该模型上的 RPM 上限。不传则使用默认值（60）。</p>
   */
  RPM?: number
  /**
   * <p>TPM（每分钟 Token 数）限流上限，单位为 tokens/min。可选。必须大于 0，且不能超过用户在该模型上的 TPM 上限。设置后会同时作用于输入 TPM 和输出 TPM。不传则使用默认值（0 表示不限流）。</p>
   */
  TPM?: number
  /**
   * <p>自动调整配额</p>
   */
  AutoAdjustQuota?: number
  /**
   * <p>自定义推理服务 id</p>
   */
  EndpointId?: string
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
 * 创建推理服务返回的详情信息
 */
export interface EndpointCreateDetail {
  /**
   * 预付费包 id
   */
  PreResourceId?: string
}

/**
 * 术语条目详情
 */
export interface GlossaryEntryItem {
  /**
   * 术语条目 ID。
   */
  EntryId?: string
  /**
   * 源语言术语。
   */
  SourceTerm?: string
  /**
   * 目标语言术语。
   */
  TargetTerm?: string
  /**
   * 更新时间。Unix 时间戳（毫秒）。
   */
  UpdatedAt?: number
}

/**
 * Token 限额配置项（创建 API 密钥时用）
 */
export interface QuotaCreateItem {
  /**
   * <p>限额周期。取值：d（按日）、m（按月）、lifetime（总额度，不重置）。</p>
   */
  CycleUnit: string
  /**
   * <p>维度当期限额总量（Token 数），不能大于10万亿。使用字符串避免大数精度丢失。</p>
   */
  CycleCredits: string
  /**
   * <p>月度限额起始日。CycleUnit 为 m 时可选，1~31，默认 1。小月（如 2 月）由下游自动取该月最后一天。</p>
   */
  MonthStartDay?: number
}

/**
 * ModifyGlossaryEntries返回参数结构体
 */
export interface ModifyGlossaryEntriesResponse {
  /**
   * 修改后的术语条目列表。
   */
  Entries?: Array<GlossaryEntryItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 推理服务详情
 */
export interface EndpointDetail {
  /**
   * <p>推理服务 ID。</p>
   */
  EndpointId?: string
  /**
   * <p>服务名称。</p>
   */
  EndpointName?: string
  /**
   * <p>模型名称。</p>
   */
  ModelName?: string
  /**
   * <p>模型 ID。</p>
   */
  ModelId?: string
  /**
   * <p>状态。取值：ACTIVE（使用中）、INACTIVE（停止中）。</p>
   */
  Status?: string
  /**
   * <p>服务类型。取值：TEXT_GENERATION（文本生成）、IMAGE_GENERATION（图片生成）、VIDEO_GENERATION（视频生成）。</p>
   */
  ServiceType?: string
  /**
   * <p>计费方式。取值：FREE（免费体验）、TOKEN（按 Token 计费）</p><p>枚举值：</p><ul><li>FREE： 免费体验</li><li>TOKEN： 按 Token 计费</li></ul>
   */
  ChargeType?: string
  /**
   * <p>是否开启付费计费。true 表示已开启付费资源包，false 表示仅使用免费额度。</p>
   */
  PaymentEnabled?: boolean
  /**
   * <p>计费详情信息，JSON 格式字符串。不同 ChargeType 对应不同的 JSON 结构：</p><ul><li>免费额度信息（所有类型均可能包含）：{&quot;FreeQuota&quot;: {&quot;TotalQuota&quot;: 200, &quot;UsedQuota&quot;: 56, &quot;UsagePercent&quot;: 28, &quot;ExpireTime&quot;: &quot;2026-06-15T00:00:00Z&quot;}}</li><li>TPM 类型额外包含：{&quot;Tpm&quot;: {&quot;TpmInputLimit&quot;: 1000, &quot;TpmOutputLimit&quot;: 1000}}</li><li>其他类型：预留扩展。</li></ul>
   */
  ChargeDetail?: string
  /**
   * <p>停止原因。当状态为 INACTIVE 时返回。取值：FREE_QUOTA_EXHAUSTED（免费额度已用尽）、NO_FREE_PACKAGE（无可用免费包）、INSUFFICIENT_BALANCE（余额不足，格式为 INSUFFICIENT_BALANCE:&lt;待支付资源ID&gt;）、BILLING_ISOLATED（账户欠费隔离）、INTERNAL_ERROR（内部错误）。当值为 INSUFFICIENT_BALANCE 时，冒号后附带待支付的 TPM 包资源 ID，前端可据此引导用户前往对应订单页完成支付。</p>
   */
  StopReason?: string
  /**
   * <p>TPM（每分钟 Token 限流）。当推理服务未单独设置时，回退为关联模型的默认 TPM 值。</p>
   */
  TPM?: number
  /**
   * <p>自动调整配额</p>
   */
  AutoAdjustQuota?: number
  /**
   * <p>RPM（每分钟请求数限流）。当推理服务未单独设置时，回退为关联模型的默认 RPM 值。</p>
   */
  RPM?: number
}

/**
 * DescribeModelList请求参数结构体
 */
export interface DescribeModelListRequest {
  /**
   * <p>模型 ID 列表。最多支持 10 个，不支持重复。</p>
   */
  ModelIds?: Array<string>
  /**
   * <p>模型名称列表。最多支持 10 个，不支持重复。</p>
   */
  ModelNames?: Array<string>
  /**
   * <p>模型类型列表，筛选指定类型的模型。最多支持 10 个，不支持重复。取值：Text（文本）、Vision（视觉）、Multimodal（多模态）、Speech（语音）、Embedding（向量）。</p>
   */
  ModelTypes?: Array<string>
  /**
   * <p>模型标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>返回数量，默认为 20，最大值为 100。</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为 0。</p>
   */
  Offset?: number
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
 * 新建术语条目项
 */
export interface GlossaryEntryInput {
  /**
   * 源语言术语。最大 1000 字符。
   */
  SourceTerm: string
  /**
   * 目标语言术语。最大 1000 字符。
   */
  TargetTerm: string
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
 * 删除术语条目项
 */
export interface DeleteGlossaryEntryInput {
  /**
   * 术语条目 ID。可通过 DescribeGlossaryEntries 接口获取。
   */
  EntryId: string
}

/**
 * Token 限额信息
 */
export interface QuotaInfo {
  /**
   * 限额包 ID。
   */
  PkgId?: string
  /**
   * 限额包状态。取值：1（正常）、3（已耗尽）、4（已销毁）。
   */
  Status?: number
  /**
   * 限额周期。取值：d（按日）、m（按月）、lifetime（总额度，不重置）。
   */
  CycleUnit?: string
  /**
   * 维度当期限额总量（Token 数）。使用字符串避免大数精度丢失。
   */
  CycleCredits?: string
  /**
   * 维度当期已使用量（Token 数）。使用字符串避免大数精度丢失。
   */
  CycleUsed?: string
  /**
   * 限额生效起始时间。
   */
  StartTime?: string
  /**
   * 限额过期时间。
   */
  ExpireTime?: string
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
 * ModifyApiKeyInfo返回参数结构体
 */
export interface ModifyApiKeyInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGlossary请求参数结构体
 */
export interface DeleteGlossaryRequest {
  /**
   * 术语库 ID。可通过 DescribeGlossaries 接口获取。
   */
  GlossaryId: string
}

/**
 * DescribeGlossaryEntries请求参数结构体
 */
export interface DescribeGlossaryEntriesRequest {
  /**
   * 术语库 ID。可通过 DescribeGlossaries 接口获取。
   */
  GlossaryId: string
  /**
   * 页码。默认为 1。
   */
  Page?: number
  /**
   * 每页大小。默认为 20，最大值为 200。
   */
  PageSize?: number
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
 * DeleteApiKey返回参数结构体
 */
export interface DeleteApiKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改术语条目项
 */
export interface ModifyGlossaryEntryInput {
  /**
   * 术语条目 ID。可通过 DescribeGlossaryEntries 接口获取。
   */
  EntryId: string
  /**
   * 源语言术语。最大 1000 字符。不传则保持不变。
   */
  SourceTerm?: string
  /**
   * 目标语言术语。最大 1000 字符。不传则保持不变。
   */
  TargetTerm?: string
}

/**
 * CreateEndpoint返回参数结构体
 */
export interface CreateEndpointResponse {
  /**
   * <p>推理服务 ID。</p>
   */
  EndpointId?: string
  /**
   * <p>推理服务详情信息。</p>
   */
  Endpoint?: EndpointCreateDetail
  /**
   * <p>停止原因。当推理服务状态为已停止时返回。取值：FREE_QUOTA_EXHAUSTED（免费额度已用尽）、NO_FREE_PACKAGE（无可用免费包）、INSUFFICIENT_BALANCE（余额不足）、BILLING_ISOLATED（账户欠费隔离）、INTERNAL_ERROR（内部错误）。</p>
   */
  StopReason?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeGlossaries请求参数结构体
 */
export interface DescribeGlossariesRequest {
  /**
   * 返回数量。默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 偏移量。默认为 0。
   */
  Offset?: number
  /**
   * 过滤条件列表。支持的过滤字段：GlossaryId（术语库 ID）、Name（名称）、Source（源语言代码）、Target（目标语言代码）。
   */
  Filters?: Array<RequestFilter>
  /**
   * 排序条件列表。支持的排序字段：CreatedTime（创建时间）、UpdatedTime（更新时间）。
   */
  Sorts?: Array<RequestSort>
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
 * DescribeGlossaryEntries返回参数结构体
 */
export interface DescribeGlossaryEntriesResponse {
  /**
   * 术语条目列表。
   */
  Entries?: Array<GlossaryEntryItem>
  /**
   * 符合条件的术语条目总数。
   */
  Total?: number
  /**
   * 当前页码。
   */
  Page?: number
  /**
   * 每页大小。
   */
  PageSize?: number
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
  /**
   * Token 限额信息多维度列表。未配置限额时不返回该字段。
   */
  QuotaSet?: Array<QuotaInfo>
  /**
   * Token 限额状态。空字符串表示未配置任何限额包；active 表示已配置且当前可用；inactive 表示已配置但额度耗尽
   */
  QuotaStatus?: string
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
 * DeleteApiKey请求参数结构体
 */
export interface DeleteApiKeyRequest {
  /**
   * <p>API 密钥 ID。</p>
   */
  ApiKeyId: string
  /**
   * <p>平台类型。取值：maas。</p>
   */
  Platform: string
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
 * 时间周期内的统计聚合值（按 metric key 索引）。声明 tokens / search 两族字段都在本 schema 中，按 MetricKeys 实际返回取值，参见响应顶层 `MetricKeys` 字段。
 */
export interface UsageStats {
  /**
   * <p>[tokens 族] 时间周期内的累计总 token 数。</p>
   */
  TotalToken?: number
  /**
   * <p>[tokens 族] 时间周期内的累计输入 token 数。</p>
   */
  InputTotalToken?: number
  /**
   * <p>[tokens 族] 时间周期内的累计输出 token 数。</p>
   */
  OutputTotalToken?: number
  /**
   * <p>[tokens 族] 时间周期内的累计读缓存 token 数（命中缓存部分）</p>
   */
  CacheTotalToken?: number
  /**
   * <p>[search 族] 整段累计联网搜索请求数</p>
   */
  SearchRequestCount?: number
  /**
   * <p>[search 族] 整段累计搜索引擎调用次数</p>
   */
  SearchCount?: number
}

/**
 * DescribeUsageRankList返回参数结构体
 */
export interface DescribeUsageRankListResponse {
  /**
   * <p>回填请求的统计维度。</p>
   */
  Dimension?: string
  /**
   * <p>回填请求的指标族：tokens / search 。</p>
   */
  MetricType?: string
  /**
   * <p>本次响应中 Stats / Series / PageStats / TotalStats 实际包含的 metric key 列表，按MetricType 区分：tokens=[Total,Input,Output,Cache]、search=[SearchRequestCount,SearchCount]</p>
   */
  MetricKeys?: Array<string>
  /**
   * <p>视图（数据来源）</p>
   */
  ViewName?: string
  /**
   * <p>回填请求的统计粒度（秒）。ShowAll=true 时为 0。</p>
   */
  Period?: number
  /**
   * <p>回填请求的起始时间。</p>
   */
  StartTime?: string
  /**
   * <p>回填请求的结束时间。</p>
   */
  EndTime?: string
  /**
   * <p>全量对象数。</p>
   */
  Total?: number
  /**
   * <p>回填请求的翻页起点。ShowAll=true 时为 0。</p>
   */
  Offset?: number
  /**
   * <p>页大小，恒为 10。ShowAll=true 时为 Total。</p>
   */
  Limit?: number
  /**
   * <p>Series 数组对应的时间戳序列（Unix 秒）。ShowAll=true 时为空数组。</p>
   */
  Timestamps?: Array<number | bigint>
  /**
   * <p>对象排行列表，按<code>MetricKeys[0]</code>降序排序。ShowAll=false 时为当前页 10 个对象（含 Series）；ShowAll=true 时为全量对象（不含 Series，用于 CSV 导出）。</p>
   */
  TopList?: Array<UsageRankItem>
  /**
   * <p>分页统计结果</p>
   */
  PageStats?: UsageStats
  /**
   * <p>总统计结果</p>
   */
  TotalStats?: UsageStats
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * Token 限额多维度信息。未配置限额时不返回该字段。
   */
  QuotaSet?: Array<QuotaInfo>
  /**
   * Token 限额状态。空字符串表示未配置任何限额包；active 表示已配置且当前可用；inactive 表示已配置但额度耗尽
   */
  QuotaStatus?: string
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

/**
 * 模型计费信息
 */
export interface ModelChargingInfo {
  /**
   * 计费类型。取值：Uniform（统一计费）、Tiered（阶梯计费）。
   */
  Type?: string
  /**
   * 计费名称，阶梯计费时表示区间标识，统一计费为空。
   */
  Name?: string
  /**
   * 计费场景，用于区分同一产品不同功能的计费。
   */
  Scenario?: string
  /**
   * 计费条目列表，顺序即前端展示顺序。
   */
  ChargingItems?: Array<ModelChargingItem>
  /**
   * 计费单位。取值：TOKEN（词元）、COUNT（次）、CREDIT（积分）、PICTURE（张）。
   */
  ChargeUnit?: string
  /**
   * 计费参考链接。
   */
  Reference?: string
}

/**
 * ModifyApiKeyStatus请求参数结构体
 */
export interface ModifyApiKeyStatusRequest {
  /**
   * <p>API 密钥 ID。</p>
   */
  ApiKeyId: string
  /**
   * <p>平台类型。取值：maas。</p>
   */
  Platform: string
  /**
   * <p>状态。取值：enable（启用）、disable（禁用）。</p>
   */
  Status: string
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
 * 术语库详情
 */
export interface GlossaryItem {
  /**
   * 术语库 ID。
   */
  GlossaryId?: string
  /**
   * 术语库名称。
   */
  Name?: string
  /**
   * 术语库描述。
   */
  Description?: string
  /**
   * 源语言代码。
   */
  Source?: string
  /**
   * 目标语言代码。
   */
  Target?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 更新时间。
   */
  UpdatedTime?: string
}

/**
 * 模型信息
 */
export interface Model {
  /**
   * <p>模型名称</p>
   */
  ModelName?: string
  /**
   * <p>模型 ID。</p>
   */
  ModelId?: string
  /**
   * <p>模型显示名称。</p>
   */
  DisplayName?: string
  /**
   * <p>模型描述。</p>
   */
  Description?: string
  /**
   * <p>模型概要。</p>
   */
  Summary?: string
  /**
   * <p>模型类型。取值：Text（文本）、Vision（视觉）、Multimodal（多模态）、Speech（语音）、Embedding（向量）。</p><p>枚举值：</p><ul><li>Text： 语言模型</li><li>Vision： 视觉模型</li><li>Multimodal： 多模态模型</li></ul>
   */
  ModelType?: string
  /**
   * <p>模型品牌。</p>
   */
  Brand?: string
  /**
   * <p>模型图标。</p>
   */
  ModelImage?: ModelImage
  /**
   * <p>模型供应商。</p>
   */
  Provider?: string
  /**
   * <p>模型状态。取值：online（上线）、offline（下线）。</p><p>枚举值：</p><ul><li>online ： 上线</li><li>pre-offline： 预下线</li></ul>
   */
  Status?: string
  /**
   * <p>标签列表。</p>
   */
  Tags?: Array<string>
  /**
   * <p>计费信息列表。</p>
   */
  ModelChargingInfo?: Array<ModelChargingInfo>
  /**
   * <p>模型规格。</p>
   */
  ModelSpec?: ModelSpec
  /**
   * <p>发布时间。</p>
   */
  ReleaseAt?: string
  /**
   * <p>推荐顺序，值越小排序越靠前。</p>
   */
  RecommendWeight?: number
  /**
   * <p>模型访问信息。包含模型在各站点和地域的可用性配置。为空时表示未配置地域信息，模型不可用。</p>
   */
  ModelAccessInfo?: ModelAccessInfo
  /**
   * <p>体验包信息。</p>
   */
  FreeTrialInfo?: ModelFreeTrialInfo
  /**
   * <p>模型下线时间，Status=pre-offline 时，会配置模型下线时间</p>
   */
  OfflineAt?: string
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
 * ModifyEndpoint请求参数结构体
 */
export interface ModifyEndpointRequest {
  /**
   * <p>自动调整配额</p>
   */
  AutoAdjustQuota?: number
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
 * 模型接入点概览信息
 */
export interface ModelEndpointView {
  /**
   * <p>推理服务 ID。网关默认创建的 id 与模型 id 相同；控制台自定义推理服务以 ep- 开头。</p>
   */
  EndpointId?: string
  /**
   * <p>推理服务名称。未激活时与 ModelId 相同。</p>
   */
  EndpointName?: string
  /**
   * <p>模型 ID。</p>
   */
  ModelId?: string
  /**
   * <p>模型名称。</p>
   */
  ModelName?: string
  /**
   * <p>状态。取值：ACTIVE（运行中）、INACTIVE（已停止）。</p>
   */
  Status?: string
  /**
   * <p>服务类型。固定为 TEXT_GENERATION（文本生成）。</p>
   */
  ServiceType?: string
  /**
   * <p>计费方式。取值：FREE（免费体验）、TOKEN（按 Token 计费）。未激活时为空。</p>
   */
  ChargeType?: string
  /**
   * <p>是否已开启后付费。true 表示已开启，false 表示未开启。未激活时为 false。</p>
   */
  PaymentEnabled?: boolean
  /**
   * <p>计费详情信息，JSON 格式字符串，包含免费额度用量等信息。未激活时为空。</p>
   */
  ChargeDetail?: string
  /**
   * <p>停止原因。当状态为 INACTIVE 时返回。取值：FREE_QUOTA_EXHAUSTED（免费额度已用尽）、NO_FREE_PACKAGE（无可用免费包）、INSUFFICIENT_BALANCE（余额不足）、BILLING_ISOLATED（账户欠费隔离）、INTERNAL_ERROR（内部错误）。</p>
   */
  StopReason?: string
  /**
   * <p>推理服务的 rpm 限制，没设置就按模型维度 rpm 限制展示</p>
   */
  RPM?: number
  /**
   * <p>推理服务的tpm 限制，没设置就按模型维度 tpm 限制展示</p>
   */
  TPM?: number
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
 * ModifyApiKeyInfo请求参数结构体
 */
export interface ModifyApiKeyInfoRequest {
  /**
   * <p>API 密钥 ID。</p>
   */
  ApiKeyId: string
  /**
   * <p>平台类型。取值：maas。</p>
   */
  Platform: string
  /**
   * <p>API 密钥名称。最大 128 字符。不传表示不修改。</p>
   */
  ApiKeyName?: string
  /**
   * <p>备注。</p>
   */
  Remark?: string
  /**
   * <p>IP 白名单列表。支持 IPv4（如 1.2.3.4）、CIDR（如 10.0.0.0/24）格式，IPv6暂不支持。最多 50 个，不支持重复。传入空数组表示清空白名单（不限制 IP）。不传表示不修改。</p>
   */
  IpWhitelist?: Array<string>
  /**
   * <p>【修改限额推荐使用QuotaDesired参数】Token 限额期望状态。可选，不传表示不修改，传入空数组表示清空。和 Quotas（Token限额配置）字段互斥，不支持同时传入</p>
   */
  QuotasDesired?: Array<QuotasDesired>
}

/**
 * Token Plan 套餐列表项
 */
export interface TokenPlanListItem {
  /**
   * <p>套餐 ID。</p>
   */
  TeamId?: string
  /**
   * <p>套餐类型。取值：enterprise（企业版专业套餐）、enterprise-auto（企业版轻享套餐）</p>
   */
  ProductType?: string
  /**
   * <p>套餐名称。最大 128 字符。</p>
   */
  Name?: string
  /**
   * <p>账号 APP ID。</p>
   */
  AppId?: string
  /**
   * <p>主账号 UIN。</p>
   */
  Uin?: string
  /**
   * <p>套餐状态。取值：enable（启用）、disable（停用）。</p>
   */
  Status?: string
  /**
   * <p>套餐关停原因。取值：NORMAL（正常）、ISOLATED（隔离/欠费）、FROZEN（冻结）、EXHAUSTED（额度耗尽）、DESTROYED（已销毁）</p>
   */
  StopReason?: string
  /**
   * <p>可创建 API Key 上限。</p>
   */
  ApiKeyMax?: number
  /**
   * <p>当前已创建的 APIKey 数量</p>
   */
  ApiKeyCount?: number
  /**
   * <p>云计费预付费资源包 ID。</p>
   */
  PrepayResourceID?: string
  /**
   * <p>创建人。若为子账号创建的套餐，则该值为子账号UIN。</p>
   */
  Creator?: string
  /**
   * <p>创建时间。</p>
   */
  CreatedAt?: string
  /**
   * <p>更新时间。</p>
   */
  UpdatedAt?: string
  /**
   * <p>套餐包基本信息。</p>
   */
  PackageInfo?: TokenPlanPackageInfo
  /**
   * <p>是否开启自动续费。取值：0（未开启），1（开启）</p>
   */
  AutoRenewFlag?: number
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
 * DescribeUsageRankList请求参数结构体
 */
export interface DescribeUsageRankListRequest {
  /**
   * <p>统计维度。取值：apikey（按 APIKey 统计）、endpoint（按接入点统计）、model（按模型统计）。</p>
   */
  Dimension: string
  /**
   * <p>起始时间（闭区间），RFC3339 格式。</p>
   */
  StartTime: string
  /**
   * <p>结束时间（开区间），RFC3339 格式。与 StartTime 的跨度最大 90 天。</p>
   */
  EndTime: string
  /**
   * <p>指标族切换字段。</p><ul><li>tokens（默认）：Token 消耗图（statistics=sum），支持 Dimension = apikey/endpoint/model</li><li>search【待上线】：联网搜索调用次数（statistics=sum），仅支持 Dimension = model</li><li>其他值返回 InvalidParameter。</li></ul><p>枚举值：</p><ul><li>tokens： tokens</li></ul>
   */
  MetricType?: string
  /**
   * <p>维度过滤值。空字符串表示查询全部对象，非空时仅查询指定单个对象（如指定 APIKey ID）。最大 256 字符。</p>
   */
  Target?: string
  /**
   * <p>统计粒度（秒）。取值：60、300、3600、86400。必须不小于跨度对应下限：跨度 ≤ 1 天 → 60；1 ~ 5 天 → 300；5 ~ 10 天 → 3600；&gt; 10 天 → 86400。仅 ShowAll=false 时使用。</p>
   */
  Period?: number
  /**
   * <p>翻页起点，从 0 起，默认 0。ShowAll=true 时忽略。页大小固定为 10。</p>
   */
  Offset?: number
  /**
   * <p>是否返回全量结果。</p><ul><li>false（默认）：按 Offset 分页返回 TopList（每页 10 条），每个对象包含<br>Series 时序点用于绘制曲线。</li><li>true：忽略 Offset，返回全量对象列表，不返回 Series（CSV 导出场景）。</li></ul>
   */
  ShowAll?: boolean
}

/**
 * CreateGlossaryEntries请求参数结构体
 */
export interface CreateGlossaryEntriesRequest {
  /**
   * 术语库 ID。可通过 DescribeGlossaries 接口获取。
   */
  GlossaryId: string
  /**
   * 术语条目列表。单次最多 100 个。
   */
  Entries: Array<GlossaryEntryInput>
}

/**
 * DescribeGlossaries返回参数结构体
 */
export interface DescribeGlossariesResponse {
  /**
   * 术语库列表。
   */
  Items?: Array<GlossaryItem>
  /**
   * 符合条件的术语库总数。
   */
  TotalCount?: number
  /**
   * 当前页码。
   */
  Current?: number
  /**
   * 每页大小。
   */
  PageSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateApiKey返回参数结构体
 */
export interface CreateApiKeyResponse {
  /**
   * <p>apikey id</p>
   */
  ApiKeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型规格信息
 */
export interface ModelSpec {
  /**
   * 每分钟处理 Token 数（Tokens Per Minute）。
   */
  TPM?: string
  /**
   * 每分钟请求数（Queries Per Minute）。
   */
  QPM?: string
  /**
   * 最大输入 Token 长度。
   */
  MaxInputToken?: string
  /**
   * 最大输出 Token 长度。
   */
  MaxOutputToken?: string
  /**
   * 上下文窗口长度。
   */
  ContextLength?: string
  /**
   * 并发数。
   */
  Concurrency?: string
  /**
   * 输入要求描述。
   */
  InputDescription?: string
}

/**
 * DescribeEndpoint请求参数结构体
 */
export interface DescribeEndpointRequest {
  /**
   * <p>推理服务 ID。可通过 DescribeEndpointList 接口获取。</p>
   */
  EndpointId: string
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
 * DescribeEndpoint返回参数结构体
 */
export interface DescribeEndpointResponse {
  /**
   * <p>推理服务详情。</p>
   */
  Endpoint?: EndpointDetail
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
 * ModifyEndpoint返回参数结构体
 */
export interface ModifyEndpointResponse {
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
 * 计费条目
 */
export interface ModelChargingItem {
  /**
   * <p>价格维度标识。取值：Input（输入）、Output（输出）、Cache（缓存命中）、Thinking（思考）、BatchInput（批量输入）、BatchOutput（批量输出）、BatchCache（批量缓存命中）、ImageInput（输入图片）、ImageOutput（输出图片）、Search（搜索调用）。</p>
   */
  PriceName?: string
  /**
   * <p>价格维度展示名，后端直接提供当前语言文本（如 输入、Input），前端无需翻译。</p>
   */
  DisplayName?: string
  /**
   * <p>价格数值。</p>
   */
  Price?: string
  /**
   * <p>价格单位，后端直接提供当前语言文本（如 元/百万tokens、元/张、积分/次）。</p>
   */
  PriceUnit?: string
  /**
   * <p>高峰价格，为空表示无高峰定价</p>
   */
  PeakPrice?: string
}

/**
 * DescribeModelEndpointList请求参数结构体
 */
export interface DescribeModelEndpointListRequest {
  /**
   * <p>偏移量，从 0 开始，默认为 0。</p>
   */
  Offset?: number
  /**
   * <p>每页返回数量，默认为 20，最大值为 100。</p>
   */
  Limit?: number
  /**
   * <p>过滤条件列表。支持的过滤字段：Status（状态，取值 ACTIVE/INACTIVE）、ChargeType（计费方式，取值 FREE/TOKEN）、RequestSource（创建来源，取值 MC/GW）、ModelName（模型名称）、ModelId（模型 ID）、PaymentEnabled（是否已开启后付费，取值 true/false）。</p>
   */
  Filters?: Array<RequestFilter>
  /**
   * <p>排序条件列表。支持的排序字段：CreatedTime、UpdatedTime。不传时使用默认排序规则。</p>
   */
  Sorts?: Array<RequestSort>
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
 * 模型体验包信息
 */
export interface ModelFreeTrialInfo {
  /**
   * 推荐顺序，值越小排序越靠前。为空表示使用模型默认权重。
   */
  RecommendWeight?: number
  /**
   * 体验包容量大小。
   */
  CapacitySize?: number
  /**
   * 容量单位。取值：token。
   */
  Unit?: string
  /**
   * 有效期天数（如90天）。为空表示不限期。
   */
  ValidityDays?: number
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
 * CreateGlossary请求参数结构体
 */
export interface CreateGlossaryRequest {
  /**
   * 术语库名称。最大 50 字符。
   */
  Name: string
  /**
   * 源语言代码。最大 16 字符。例如：zh（中文）、en（英文）。
   */
  Source: string
  /**
   * 目标语言代码。最大 16 字符。例如：zh（中文）、en（英文）。
   */
  Target: string
  /**
   * 术语库描述。最大 255 字符。
   */
  Description?: string
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
 * CreateGlossary返回参数结构体
 */
export interface CreateGlossaryResponse {
  /**
   * 术语库 ID。
   */
  GlossaryId?: string
  /**
   * 术语库名称。
   */
  Name?: string
  /**
   * 创建时间。Unix 时间戳（毫秒）。
   */
  CreatedAt?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGlossaryEntries请求参数结构体
 */
export interface ModifyGlossaryEntriesRequest {
  /**
   * 术语库 ID。可通过 DescribeGlossaries 接口获取。
   */
  GlossaryId: string
  /**
   * 术语条目列表。单次最多 200 个。
   */
  Entries: Array<ModifyGlossaryEntryInput>
}

/**
 * DeleteEndpoint请求参数结构体
 */
export type DeleteEndpointRequest = null

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
 * 模型上线的站点、地域信息
 */
export interface ModelSiteRegion {
  /**
   * 站点标识。取值：domestic（国内站）、international（国际站）。
   */
  Site?: string
  /**
   * 该站点下可用的地域列表，遵循腾讯云标准地域编码（如 ap-guangzhou、ap-beijing、ap-singapore、na-siliconvalley 等）。为空数组时表示该站点无可用地域。
   */
  Regions?: Array<string>
}

/**
 * ModifyApiKeyStatus返回参数结构体
 */
export interface ModifyApiKeyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTokenPlanTeamOrderAndBuy返回参数结构体
 */
export interface CreateTokenPlanTeamOrderAndBuyResponse {
  /**
   * <p>腾讯云订单 ID。用于关联一次购买操作下的所有子订单。</p>
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
 * ModifyTokenPlanApiKeySecret请求参数结构体
 */
export interface ModifyTokenPlanApiKeySecretRequest {
  /**
   * API Key ID。可通过DescribeTokenPlanApiKeyList接口获取。
   */
  ApiKeyId: string
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
 * CreateApiKey请求参数结构体
 */
export interface CreateApiKeyRequest {
  /**
   * <p>API 密钥名称，创建后不可修改。</p>
   */
  ApiKeyName: string
  /**
   * <p>平台类型。取值：maas</p>
   */
  Platform: string
  /**
   * <p>绑定类型。取值：all（全部模型和接入点）、model_custom_endpoint_custom（自定义模型+自定义接入点）。</p><p>枚举值：</p><ul><li>all： 全部模型和接入点</li><li>model_custom_endpoint_custom： 自定义模型+自定义接入点</li></ul>
   */
  BindType: string
  /**
   * <p>备注信息</p>
   */
  Remark?: string
  /**
   * <p>初始状态。取值：enable（启用）、disable（禁用）。不传默认 enable。</p>
   */
  Status?: string
  /**
   * <p>资源绑定列表（model 和 endpoint 混合），每项需显式指定 ResourceType。BindType 为 all 时不填；BindType 为model_custom_endpoint_custom时必填。</p>
   */
  Bindings?: Array<BindingItem>
  /**
   * <p>IP 白名单列表。支持 IPv4（如 1.2.3.4）和 CIDR（如 10.0.0.0/24）格式，IPv6暂不支持。最多 50 个条目，不支持重复。不传或传空数组表示不限制 IP。</p>
   */
  IpWhitelist?: Array<string>
  /**
   * <p>Token 限额配置多维度列表。可选，不传表示不开启限额。</p>
   */
  Quotas?: Array<QuotaCreateItem>
}
