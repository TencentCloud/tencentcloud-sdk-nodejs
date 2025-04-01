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

/**
 * CreateIncrementalMigrationStrategy返回参数结构体
 */
export interface CreateIncrementalMigrationStrategyResponse {
  /**
   * 增量迁移策略 ID。
   */
  StrategyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移策略信息。
 */
export interface IncrementalMigrationStrategyInfo {
  /**
   * 策略 ID。
   */
  StrategyId?: string
  /**
   * 策略名称。
   */
  StrategyName?: string
  /**
   * <b>策略生效的点播专业版[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId?: number
  /**
   * 策略生效的存储桶 ID。
   */
  BucketId?: string
  /**
   * 源站类型。取值有：<li>HTTP：HTTP 源。</li>
   */
  OriginType?: string
  /**
   * 回源源站配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig
}

/**
 * DeleteIncrementalMigrationStrategy请求参数结构体
 */
export interface DeleteIncrementalMigrationStrategyRequest {
  /**
   * <b>点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 策略生效的存储桶 ID。
   */
  BucketId: string
  /**
   * 增量迁移策略 ID。
   */
  StrategyId: string
}

/**
 * 增量迁移源站信息。
 */
export interface IncrementalMigrationHttpOriginInfo {
  /**
   * 增量迁移源站地址信息。
   */
  EndpointInfo: IncrementalMigrationHttpEndpointInfo
  /**
   * 增量迁移源站文件信息。
   */
  FileInfo?: IncrementalMigrationOriginFileInfo
}

/**
 * CreateStorageCredentials请求参数结构体
 */
export interface CreateStorageCredentialsRequest {
  /**
   * <b>点播专业版[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 按照下方语法组装好策略后，先序列化为字符串，再做 URL Encode，结果作为 Policy 字段入参。服务端会对该字段做 URL Decode，并按解析后的策略授予临时访问凭证权限，请按规范传入参数。
注意： 
1.策略语法参照[访问管理策略](/document/product/598/10603)。
2.策略中不能包含 principal 元素。
3.策略的 action 元素仅支持：<li>name/vod:PutObject;</li><li>name/vod:ListParts;</li><li>name/vod:PostObject;</li><li>name/vod:InitiateMultipartUpload;</li><li>name/vod:UploadPart;</li><li>name/vod:CompleteMultipartUpload;</li><li>name/vod:AbortMultipartUpload;</li><li>name/vod:ListMultipartUploads;</li>4.策略的 resource 元素填写格式为：`qcs::vod:[存储地域]:uid/[账号AppID]:prefix//[点播应用ID]/[存储桶ID]/[存储路径]`，其中存储地域、账号 AppID、点播应用 ID、存储桶 ID 和存储路径要按需填写，其他内容不允许改动，例：`qcs:ap-chongqing:vod::uid/1231456789:prefix//1234567890/2ceds3ew323w3mu/file_path`。

   */
  Policy: string
  /**
   * 指定临时证书的有效期，单位：秒。
默认 1800 秒，最大 129600 秒。
   */
  DurationSeconds?: number
}

/**
 * 增量迁移源站地址信息。
 */
export interface IncrementalMigrationHttpEndpointInfo {
  /**
   * 地址信息，支持域名或 IP 地址。
   */
  Endpoint: string
  /**
   * 备份地址信息。
   */
  StandbyEndpointSet?: Array<string>
}

/**
 * 增量迁移源站地址前缀配置。
 */
export interface IncrementalMigrationOriginPrefixConfig {
  /**
   * 源站地址前缀，如填充 `test/`，则回源地址为 `http(s)://<回源域名>/test/<文件名>`。
   */
  Prefix?: string
}

/**
 * DescribeIncrementalMigrationStrategyInfos返回参数结构体
 */
export interface DescribeIncrementalMigrationStrategyInfosResponse {
  /**
   * 总数。
   */
  TotalCount?: number
  /**
   * 策略信息集合。
   */
  StrategyInfoSet?: Array<IncrementalMigrationStrategyInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移回源 HTTP Header。
 */
export interface IncrementalMigrationHttpHeader {
  /**
   * Header 键。
   */
  Key: string
  /**
   * Header 值。
   */
  Value: string
}

/**
 * 专业版应用的存储信息。
 */
export interface StorageInfo {
  /**
   * 存储桶 ID。
   */
  BucketId?: string
  /**
   * 存储名称。
   */
  StorageName?: string
  /**
   * 存储所在区域。
   */
  StorageRegion?: string
  /**
   * 存储公网源站访问域名的状态，取值有：
<li>ONLINE：已生效；</li>
<li>DEPLOYING： 部署中。</li>
   */
  InternetAccessDomainStatus?: string
  /**
   * 存储公网源站访问域名。
   */
  InternetAccessDomain?: string
  /**
   * 存储的创建时间。
   */
  CreateTime?: string
}

/**
 * DescribeStorage请求参数结构体
 */
export interface DescribeStorageRequest {
  /**
   * <b>点播专业版[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 过滤条件，Filters.Values 的上限为 20；若 Filters 长度为 0 则分页查询子应用 SubAppId 下的存储信息。 详细的过滤条件如下：
<li>BucketId<br>   按照【<strong>存储桶 ID</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>StorageName<br>   按照【<strong>存储名称</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
   */
  Filters?: Array<Filter>
  /**
   * 返回结果的排序。 SortBy.Field 取值有：
<li>CreateTime：创建时间。</li>若不填，SortBy.Field 默认值为 CreateTime，SortBy.Order 默认值为 Asc。
   */
  SortBy?: SortBy
  /**
   * 分页返回的起始偏移量，默认值为 0。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值为 20，最大值为 1000。
   */
  Limit?: number
}

/**
 * DescribeIncrementalMigrationStrategyInfos请求参数结构体
 */
export interface DescribeIncrementalMigrationStrategyInfosRequest {
  /**
   * <b>点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 过滤条件，Filters.Values 的上限为 `20`；若 Filters 长度为 `0` 则查询时无过滤条件限制。 详细的过滤条件如下： <li>BucketId<br>   按照【<strong>存储桶 ID</strong>】进行过滤<br>   类型：String<br>   必选：否<br></li><li>StrategyId<br>   按照【<strong>策略 ID</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
   */
  Filters?: Array<Filter>
  /**
   * 返回结果的排序。 SortBy.Field 取值有：<li>UpdateTime：创建时间。</li>若不填，SortBy.Field 默认值为 `UpdateTime`，SortBy.Order 默认值为 `Desc`。
   */
  SortBy?: SortBy
  /**
   * 分页返回的起始偏移量，默认值为 `0`。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值为 `20`，最大值为 `100`。
   */
  Limit?: number
}

/**
 * 增量迁移回源 HTTP Header 信息。
 */
export interface IncrementalMigrationHttpHeaderInfo {
  /**
   * Http Header 透传模式。取值有：
<li>FOLLOW_ALL：透传所有头部信息；</li>
<li>FOLLOW_PART：透传部分头部信息；</li>
<li>IGNORE_PART：忽略部分头部信息。</li>参数必填。
   */
  HeaderFollowMode: string
  /**
   * 需透传 Header Key 集合，仅当 HeaderFollowMode 取值 `FOLLOW_PART` 时需要填充。
   */
  FollowHttpHeaderKeySet?: Array<string>
  /**
   * 新增 Header 键值对集合。
   */
  NewHttpHeaderSet?: Array<IncrementalMigrationHttpHeader>
}

/**
 * ModifyIncrementalMigrationStrategy请求参数结构体
 */
export interface ModifyIncrementalMigrationStrategyRequest {
  /**
   * <b>点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 策略生效的存储桶 ID。
   */
  BucketId: string
  /**
   * 增量迁移策略 ID。
   */
  StrategyId: string
  /**
   * 策略名称。若不填充或填充空字符串，则不修改。
   */
  StrategyName?: string
  /**
   * 源站类型。取值有：<li>HTTP：HTTP 源。</li>若不填或填充空字符串，则不修改。
   */
  OriginType?: string
  /**
   * HTTP 回源源站配置，若不填则默认不修改。
   */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig
}

/**
 * CreateStorageCredentials返回参数结构体
 */
export interface CreateStorageCredentialsResponse {
  /**
   * 临时访问凭证。
   */
  Credentials?: Credentials
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移源站固定文件路径配置。
 */
export interface IncrementalMigrationOriginFixedFileConfig {
  /**
   * 固定文件路径；如填充 `example/test.png`，则回源地址为： `http(s)://<回源域名>/example/test.png`。
   */
  FixedFilePath?: string
}

/**
 * 键值对过滤器，用于条件过滤查询。例如过滤 ID、名称或状态等。
若存在多个 Filter 时，Filter 间的关系为逻辑与（AND）关系。
若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。

过滤器筛选字段均为精确匹配。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string
  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * DeleteIncrementalMigrationStrategy返回参数结构体
 */
export interface DeleteIncrementalMigrationStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移源站文件信息。
 */
export interface IncrementalMigrationOriginFileInfo {
  /**
   * 文件前缀配置。
   */
  PrefixConfig?: IncrementalMigrationOriginPrefixConfig
  /**
   * 文件后缀配置。
   */
  SuffixConfig?: IncrementalMigrationOriginSuffixConfig
  /**
   * 固定文件配置。
   */
  FixedFileConfig?: IncrementalMigrationOriginFixedFileConfig
}

/**
 * 临时访问凭证。
 */
export interface Credentials {
  /**
   * 访问凭证 ID。
   */
  AccessKeyId?: string
  /**
   * 访问凭证 Key。
   */
  SecretAccessKey?: string
  /**
   * 访问凭证 Token，长度和绑定的策略有关，最长不超过 4096 字节。
   */
  SessionToken?: string
  /**
   * 访问凭证的过期时间。
   */
  Expiration?: string
}

/**
 * CreateStorage请求参数结构体
 */
export interface CreateStorageRequest {
  /**
   * <b>点播专业版[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 存储地域，必须是系统支持地域。
通过 [DescribeStorageRegions](https://cloud.tencent.com/document/product/266/72480) 接口可以查询到所有存储地域及已经开通存储桶的地域。
   */
  StorageRegion: string
  /**
   * 存储名称。
<li>仅支持小写英文字母、数字、中划线 “-” 及其组合；</li>
<li>存储命名不能以 “-” 开头或结尾；</li>
<li>存储命名最大长度为 64 字符。</li>
   */
  StorageName: string
}

/**
 * DescribeStorage返回参数结构体
 */
export interface DescribeStorageResponse {
  /**
   * 符合条件的存储数量。
   */
  TotalCount?: number
  /**
   * 符合条件的存储信息列表。
   */
  StorageInfoSet?: Array<StorageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIncrementalMigrationStrategy返回参数结构体
 */
export interface ModifyIncrementalMigrationStrategyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移回源条件。
 */
export interface IncrementalMigrationHttpOriginCondition {
  /**
   * 触发回源条件的 HTTP Code。若不填充，默认取值 `404`。
   */
  HttpStatusCode?: number
  /**
   * 触发回源条件的对象键前缀。
   */
  Prefix?: string
}

/**
 * CreateStorage返回参数结构体
 */
export interface CreateStorageResponse {
  /**
   * 存储桶 ID。
   */
  BucketId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增量迁移回源参数。
 */
export interface IncrementalMigrationHttpOriginParameter {
  /**
   * HTTP 头部透传信息。
   */
  HttpHeaderInfo: IncrementalMigrationHttpHeaderInfo
  /**
   * 回源协议。取值有：
<li>HTTP：强制 HTTP；</li>
<li>HTTPS：强制 HTTPS；</li>
<li>FOLLOW：跟随请求协议。</li>若不填，默认取值 `FOLLOW`。
   */
  Protocol?: string
  /**
   * 请求参数透传模式。取值有：
<li>FOLLOW：全部透传；</li>
<li>IGNORE：忽略，全部不透传。</li> 默认取值 `FOLLOW`。
   */
  QueryStringFollowMode?: string
  /**
   * 重定向的 HTTP Code，目前仅支持 `301`，`302` 和 `307`。默认取值 `302`。
   */
  HttpRedirectCode?: number
  /**
   * 源站重定向跟随模式。取值有：
<li>FOLLOW：跟随源站重定向；</li>
<li>IGNORE：忽略源站重定向。</li> 默认取值 `FOLLOW` 跟随源站重定向，即源站返回 `3xx` 时，会默认跟随至对应源站拉取数据。
   */
  OriginRedirectionFollowMode?: string
}

/**
 * 增量迁移源站文件后缀配置。
 */
export interface IncrementalMigrationOriginSuffixConfig {
  /**
   * 文件后缀；如填充 `.ts` ，则回源地址为：`http(s)://<回源域名>/<文件名>.ts`。
   */
  Suffix?: string
}

/**
 * 增量迁移回源源站配置。
 */
export interface IncrementalMigrationHttpOriginConfig {
  /**
   * 回源源站信息。
   */
  OriginInfo: IncrementalMigrationHttpOriginInfo
  /**
   * 回源参数。
   */
  OriginParameter: IncrementalMigrationHttpOriginParameter
  /**
   * 回源模式。取值有：
<li>SYNC：同步回源；</li>
<li>ASYNC：异步回源。</li>若不填，默认取 `SYNC` 同步回源。
   */
  Mode?: string
  /**
   * 回源条件。
   */
  OriginCondition?: IncrementalMigrationHttpOriginCondition
}

/**
 * 排序依据。
 */
export interface SortBy {
  /**
   * 排序字段。
   */
  Field: string
  /**
   * 排序方式，可选值有：
<li>Asc: 升序；</li>
<li>Desc: 降序。</li>
   */
  Order: string
}

/**
 * CreateIncrementalMigrationStrategy请求参数结构体
 */
export interface CreateIncrementalMigrationStrategyRequest {
  /**
   * <b>点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。</b>
   */
  SubAppId: number
  /**
   * 策略生效的存储桶 ID。
   */
  BucketId: string
  /**
   * 增量迁移策略名称，名称长度不超过100个字符，允许的字符为：`中文、英文、0-9、_、-`。
   */
  StrategyName: string
  /**
   * 源站类型。取值有：
<li>HTTP：HTTP 源。</li>
   */
  OriginType: string
  /**
   * 增量迁移 HTTP 回源源站配置，当 OriginType 取值 `HTTP` 时必填。
   */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig
}
