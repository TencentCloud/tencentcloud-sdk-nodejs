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
 * CreateCloudNativeAPIGatewayMCPTool请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPToolRequest {
  /**
   * <p>内容类型</p>
   */
  ContentType: string
  /**
   * <p>展示名字</p>
   */
  DisplayName?: string
  /**
   * <p>服务 id</p>
   */
  ServiceId?: string
}

/**
 * CheckCloudNativeAPIGatewayMCPToolVersionExist请求参数结构体
 */
export interface CheckCloudNativeAPIGatewayMCPToolVersionExistRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>mcp tool版本id</p>
   */
  ToolVersion: string
}

/**
 * CompareCloudNativeAPIGatewayMCPToolVersion返回参数结构体
 */
export interface CompareCloudNativeAPIGatewayMCPToolVersionResponse {
  /**
   * <p>对比总结</p>
   */
  Result?: AIGWChangeSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface BindCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * 结果
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 密钥列表
 */
export interface CNAPIGwSecretKeyList {
  /**
   * 密钥列表
   */
  SecretKeys?: Array<CNAPIGwSecretKey>
  /**
   * 总数
   */
  TotalCount?: number
}

/**
 * ModifyCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelServices返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelServicesResponse {
  /**
   * <p>模型服务列表。</p>
   */
  Result?: ListCloudNativeAPIGatewayLLMModelService
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackCloudNativeAPIGatewayMCPToolVersion返回参数结构体
 */
export interface RollbackCloudNativeAPIGatewayMCPToolVersionResponse {
  /**
   * <p>操作结果</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudNativeAPIGatewayMCPServer请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPServerRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>名字</p>
   */
  Name: string
  /**
   * <p>展示名字</p>
   */
  DisplayName: string
  /**
   * <p>MCP服务类型</p><ul><li>MCP</li><li>Rest2MCP</li></ul>
   */
  ServerType: string
  /**
   * <p>传输协议：StreamableHttp或SSE</p><p>枚举值：</p><ul><li>StreamableHttp： Streamable HTTP</li><li>SSE： Server-Sent Events</li></ul>
   */
  Transport: string
  /**
   * <p>后端类型</p><p>枚举值：</p><ul><li>MCPRegistry： mcp 注册中心</li><li>Registry： 普通注册中心</li><li>HostIP： 域名或ip</li><li>VirtualMCPServer： 虚拟MCPServer</li><li>DNS： 私有域名</li><li>Kubernetes： Kubernetes服务</li></ul>
   */
  UpstreamType: string
  /**
   * <p>注册中心来源信息</p>
   */
  UpstreamInfo?: AIGWMCPUpstreamInfo
  /**
   * <p>会话配置</p>
   */
  SessionConfig?: AIGWMCPSessionConfig
  /**
   * <p>超时时间，单位ms，最大60000</p>
   */
  Timeout?: number
  /**
   * <p>重试次数，最大3次</p>
   */
  RetryCount?: number
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>是否启用健康检查</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>健康检查配置</p>
   */
  HealthCheck?: AIGWHealthCheckSetting
  /**
   * <p>是否开启保留原Host功能</p>
   */
  PreserveHost?: boolean
  /**
   * <p>日志采集配置</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>服务级参数改写规则</p>
   */
  ParamRewriteConfig?: AIGWMCPServerParamRewriteConfig
}

/**
 * ModifyCloudNativeAPIGatewayMCPToolACL返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolACLResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewaySecretKeyList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyListResponse {
  /**
   * <p>密钥列表</p>
   */
  Result?: CNAPIGwSecretKeyList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * 网关ID
   */
  GatewayId: string
  /**
   * 密钥id
   */
  SecretKeyId: string
}

/**
 * 云原生网关MCP后端信息,用于创建、修改请求
 */
export interface AIGWMCPUpstreamInfo {
  /**
   * <p>注册中心来源ID</p>
   */
  SourceId?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>MCP服务 id</p>
   */
  MCPServerId?: string
  /**
   * <p>协议，UpstreamType是Registry 时必传</p><ul><li>http</li><li>https</li></ul>
   */
  Protocol?: string
  /**
   * <p>域名或ip</p>
   */
  Host?: string
  /**
   * <p>端口</p>
   */
  Port?: number
  /**
   * <p>服务 id</p>
   */
  ServiceId?: string
  /**
   * <p>服务分组</p>
   */
  ServiceGroup?: string
  /**
   * <p>mcp endpoint</p>
   */
  MCPEndpoint?: string
  /**
   * <p>message端点路径，SSE协议时配置</p>
   */
  MessageEndpoint?: string
  /**
   * <p>TLS认证配置</p>
   */
  TLSConfig?: AIGWUpstreamTLSConfig
}

/**
 * 单个消费者 Token 用量查询结果
 */
export interface AIGWLLMTokenUsageItem {
  /**
   * <p>消费者Id</p>
   */
  ConsumerId?: string
  /**
   * <p>消费者名称</p>
   */
  ConsumerName?: string
  /**
   * <p>消费者当前直接所属组列表。网关版本不低于 3.9.8 时，从 Kong CP 当前目录补齐全部直接所属组的 ID、名称和 ConsumerGroupPath，不按 IsPrimary 筛选；无所属组为 []。更早版本保留原消费者组信息且省略路径。</p>
   */
  ConsumerGroups?: Array<AIGWConsumerGroupBrief>
  /**
   * <p>模型服务Id</p>
   */
  ModelServiceId?: string
  /**
   * <p>模型服务名称</p>
   */
  ModelServiceName?: string
  /**
   * <p>输入Token数（包含缓存命中Token数）</p>
   */
  InputTokens?: number
  /**
   * <p>命中缓存输入Token数</p>
   */
  CacheReadInputTokens?: number
  /**
   * <p>输出Token数</p>
   */
  OutputTokens?: number
  /**
   * <p>消耗总Token数</p>
   */
  TotalTokens?: number
  /**
   * <p>请求总数</p>
   */
  RequestCount?: number
  /**
   * <p>花费成本</p>
   */
  Cost?: string
  /**
   * <p>成本货币单位</p><p>枚举值：</p><ul><li>CNY： 人民币</li></ul><p>当前仅支持CNY</p>
   */
  Currency?: string
  /**
   * <p>按 Dimension 聚合的维度键值；未传 Dimension 的二维列表不使用此字段。</p><p>Key 顺序：</p><ul><li>SecretKey：SecretKeyId、SecretKeyName</li><li>Model：ModelName</li><li>ModelAPI：ModelAPIId、ModelAPIName</li><li>ModelService：ModelServiceId、ModelServiceName</li><li>Consumer：ConsumerId、ConsumerName、ConsumerGroupId、ConsumerGroupName、ConsumerGroupPath</li><li>ConsumerGroup 组行：ConsumerGroupId、ConsumerGroupName、MemberCount、ConsumerGroupPath</li></ul><p>3.9.8 起，消费者行的 ConsumerGroupId、ConsumerGroupName、ConsumerGroupPath 数组按同一下标对应，表示当前全部直接所属组，不按 IsPrimary 筛选；无所属组为 []。组行的 MemberCount 是当前节点及下属存在且未软删消费者的去重人数，不是历史活跃人数；人数已知为零时为 ["0"]，未知为 []。路径来自 Kong CP 当前目录，多父节点使用确定性展示路径；元数据缺失时名称回退 ID，路径为 []。更早版本保留原字段，省略 ConsumerGroupPath。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DimensionList?: Array<AIGWLLMResourceDimension>
}

/**
 * DeleteCloudNativeAPIGatewayMCPTool请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPToolRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>工具id</p>
   */
  ToolId: string
  /**
   * <p>MCP 服务 id</p>
   */
  ServerId: string
}

/**
 * 精确缓存 redis 配置
 */
export interface AIGWRedisConfig {
  /**
   * <p>Host</p>
   */
  Host?: string
  /**
   * <p>端口</p>
   */
  Port?: number
  /**
   * <p>用户名</p>
   */
  Username?: string
  /**
   * <p>密码</p>
   */
  Password?: string
  /**
   * <p>Redis配置ID</p>
   */
  RedisConfigId?: string
  /**
   * <p>Redis部署类型，如standalone（单机）、cluster（集群）</p>
   */
  Type?: string
}

/**
 * AI 网关意图路由配置
 */
export interface AIGWIntentRoute {
  /**
   * <p>意图识别模型id</p>
   */
  IntentModelServiceId: string
  /**
   * <p>置信度</p>
   */
  ConfidenceThreshold: number
  /**
   * <p>默认服务id</p>
   */
  DefaultModelServiceId: string
  /**
   * <p>规则</p>
   */
  Rules?: Array<AIGWIntentRouteRule>
  /**
   * <p>默认路由目标 DefaultModelServiceId 对应的标准模型名称；为空表示未配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  DefaultStandardModelName?: string
  /**
   * <p>执行意图识别的 IntentModelServiceId 对应的标准模型名称；为空表示未配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  IntentStandardModelName?: string
}

/**
 * 查询过滤通用对象
 */
export interface Filter {
  /**
   * 过滤参数名
   */
  Name: string
  /**
   * 过滤参数值
   */
  Values: Array<string>
}

/**
 * 降级服务元素
 */
export interface AIGWFallbackServiceItem {
  /**
   * <p>模型服务 Id</p>
   */
  ModelServiceId: string
  /**
   * <p>模型服务名</p>
   */
  ModelServiceName?: string
}

/**
 * DescribeCloudNativeAPIGatewaySecretKeyValue请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyValueRequest {
  /**
   * 实例 ID
   */
  GatewayId: string
  /**
   * 密钥id
   */
  SecretKeyId: string
  /**
   * 指定从 AKSK 或 CAM 成对凭证中返回哪一半。取值：AccessKey（AKSK 返回 AccessKeyId，CAM 返回 SecretId）、SecretKey（AKSK 返回 SecretAccessKey，CAM 返回 SecretKey）。不传则保持原行为，仅返回 AccessKeyId 或 SecretId。
   */
  SecretValueType?: string
}

/**
 * AI 网关延迟优先路由模型服务
 */
export interface AIGWLatencyPriorityRouteRule {
  /**
   * <p>模型服务id</p>
   */
  ModelServiceId: string
}

/**
 * 版本变更的兼容变更，破坏变更数
 */
export interface AIGWChangeSummary {
  /**
   * <p>破坏性变更数</p>
   */
  Breaking?: number
  /**
   * <p>兼容性变更数</p>
   */
  Compatible?: number
}

/**
 * AI网关 Basic Auth 凭证物料配置
 */
export interface AIGWBasicCredentialConfig {
  /**
   * <p>密码</p>
   */
  Password?: string
  /**
   * <p>用户名</p>
   */
  Username?: string
}

/**
 * AI 网关 MCP Server OAuth2 验签配置
 */
export interface AIGWGatewayVerifyOAuthConfig {
  /**
   * <p>令牌校验方式</p><p>枚举值：</p><ul><li>JWTJWKS： JWTJWKS</li><li>Introspection： Introspection</li></ul><p>切换方式后另一方式专属字段不生效</p>
   */
  VerifyMethod: string
  /**
   * <p>令牌签发者，校验 iss；VerifyMethod=JWTJWKS 时必填</p>
   */
  Issuer?: string
  /**
   * <p>JWKS 地址</p><p>入参限制：VerifyMethod=JWTJWKS 时必填</p>
   */
  JwksUri?: string
  /**
   * <p>校验 aud</p>
   */
  Audience?: string
  /**
   * <p>JWKS 缓存秒数，默认 3600，必须大于 0</p><p>默认值：3600</p>
   */
  JwksCacheTtl?: number
  /**
   * <p>令牌内省端点</p><p>入参限制：VerifyMethod=Introspection 时必填</p>
   */
  IntrospectionEndpoint?: string
  /**
   * <p>调用内省端点的 Client ID</p><p>入参限制：VerifyMethod=Introspection 时必填</p>
   */
  IntrospectionClientId?: string
  /**
   * <p>调用内省端点的 Client Secret</p><p>入参限制：VerifyMethod=Introspection 时必填</p><p>加密落库，查询时无论 Enable 状态均脱敏</p>
   */
  IntrospectionClientSecret?: string
  /**
   * <p>内省结果缓存秒数</p><p>默认值：60</p><p>0 表示不缓存</p>
   */
  IntrospectionCacheTtl?: number
  /**
   * <p>逗号分隔的 scope 白名单；令牌需命中其一，否则 401</p>
   */
  ScopeWhitelist?: string
  /**
   * <p>读取调用方令牌的 Header 名</p><p>默认值：Authorization</p>
   */
  TokenHeader?: string
}

/**
 * AI 网关中消费者组简要信息
 */
export interface AIGWConsumerGroupBrief {
  /**
   * <p>消费者组名称</p>
   */
  Name?: string
  /**
   * <p>消费者组Id</p>
   */
  ConsumerGroupId?: string
  /**
   * <p>消费者组（组织节点）的当前展示路径，可选。TokenUsageList 在网关版本不低于 3.9.8 时，从 Kong CP 当前目录补齐，用于展示当前直接所属组的位置；多父节点使用确定性路径。更早版本、无可用路径或未补齐此元数据的接口可省略；前端缺省时回退 Name。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroupPath?: string
}

/**
 * DeleteCloudNativeAPIGatewayConsumer返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveCloudNativeAPIGatewayConsumerGroupAuth返回参数结构体
 */
export interface RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关Rerank场景最大文档数限制配置
 */
export interface AIGWRerankMaxDocumentsConfig {
  /**
   * <p>启用最大文档数限制</p>
   */
  EnableMaxDocuments: boolean
  /**
   * <p>Rerank场景最大文档数限制</p>
   */
  MaxDocumentValue?: number
}

/**
 * 默认kong路由，目前只在 LLM 模型 API相 关接口使用
 */
export interface DefaultKongRoute {
  /**
   * <p>服务名字</p>
   */
  Name: string
  /**
   * <p>服务ID</p>
   */
  ID?: string
  /**
   * <p>HTTP Method</p>
   */
  Methods?: Array<string>
  /**
   * <p>Http Path</p>
   */
  Paths?: Array<string>
}

/**
 * Key/Value结构
 */
export interface KeyValue {
  /**
   * 条件的Key
   */
  Key?: string
  /**
   * 条件的Value
   */
  Value?: string
}

/**
 * 路由匹配规则
 */
export interface AIGWKVMatch {
  /**
   * <p>键</p>
   */
  Key: string
  /**
   * <p>值</p>
   */
  Value: string
  /**
   * <p>操作类型</p>
   */
  Operator: string
}

/**
 * AI 网关模型服务单次请求输入字符长度限制。只拒绝超限输入，不做截断。计量为整个请求 JSON 的 Unicode 字符数。
 */
export interface AIGWLengthLimitConfig {
  /**
   * <p>是否开启输入长度限制</p>
   */
  EnableInputLimit?: boolean
  /**
   * <p>最大输入长度字符数</p>
   */
  MaxInputChars?: number
}

/**
 * AI数据源列表
 */
export interface CNAPIGwAIServiceSourceList {
  /**
   * <p>MCP服务列表</p>
   */
  DataList?: Array<CNAPIGwAIServiceSource>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
}

/**
 * DescribeCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConsumerRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>消费者ID</p>
   */
  ConsumerId: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelService请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelServiceRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>模型服务 ID，全局唯一标识。</p>
   */
  ModelServiceId: string
}

/**
 * AI 网关 ACL 授权主体（Consumer / ConsumerGroup 共用结构），用于响应中回显 Id + Name，减少前端多次查询调用
 */
export interface AIGWACLSubject {
  /**
   * <p>鉴权主体ID</p>
   */
  Id?: string
  /**
   * <p>鉴权主体名称</p>
   */
  Name?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolVersionList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolVersionListResponse {
  /**
   * <p>tool版本列表</p>
   */
  Result?: AIGWMCPToolVersionList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权重路由配置
 */
export interface CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy {
  /**
   * <p>模型服务id</p>
   */
  ModelServiceId: string
  /**
   * <p>权重值</p>
   */
  Weight: number
  /**
   * <p>当前权重路由条目中 ModelServiceId 对应的标准模型名称；为空表示未配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolsFromFile接口的出参
 */
export interface CNAPIGwParseMCPToolsResult {
  /**
   * <p>MCP Tools列表</p>
   */
  DataList?: Array<CNAPIGwMCPToolPreview>
  /**
   * <p>MCP tools的数量</p>
   */
  TotalCount?: number
}

/**
 * ModifyCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCloudNativeAPIGatewayConsumerInGroup返回参数结构体
 */
export interface AddCloudNativeAPIGatewayConsumerInGroupResponse {
  /**
   * <p>是否成功。</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关指定模型路由（暂时只用在Token长度路由时的子路由选择）
 */
export interface AIGWRouteModelServiceConfig {
  /**
   * <p>模型服务名字</p>
   */
  ModelServiceName?: string
}

/**
 * AI网关标签过滤
 */
export interface AIGWTagFilter {
  /**
   * <p>匹配策略</p><p>枚举值：</p><ul><li>AND： 并</li><li>OR： 或</li></ul>
   */
  MatchStrategy?: string
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
}

/**
 * CreateCloudNativeAPIGatewayMCPRoute请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPRouteRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>Header匹配规则</p>
   */
  HeaderMatch?: Array<AIGWHeaderRule>
  /**
   * <p>http method</p>
   */
  Methods?: Array<string>
  /**
   * <p>路由名称</p>
   */
  Name?: string
  /**
   * <p>路径</p>
   */
  Path?: string
  /**
   * <p>路径匹配规则</p><p>枚举值：</p><ul><li>Exact： 精确</li><li>Prefix： 前缀</li><li>Regex： 正则</li></ul>
   */
  PathMatchType?: string
  /**
   * <p>route优先级</p>
   */
  Priority?: number
}

/**
 * DescribeCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LLM-模型参数检查信息
 */
export interface CloudNativeAPIGatewayLLMModelParamCheckInfo {
  /**
   * 允许的模型列表。
   */
  AllowModelList?: Array<string>
  /**
   * 模型参数校验失败时的处理策略，选项：Return404（返回404）、FallBackToDefaultModel（使用默认模型降级）。
   */
  ModelValidationFailureStrategy?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolACLList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolACLListResponse {
  /**
   * <p>MCP 服务 Tool ACL 列表结果</p>
   */
  Result?: AIGWMCPToolACLListResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerListRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>分页大小</p>
   */
  Limit: number
  /**
   * <p>分页偏移</p>
   */
  Offset: number
  /**
   * <p>密钥凭证ID</p>
   */
  SecretKeyId?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerAuth返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerAuthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPRouteStatus返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPRouteStatusResponse {
  /**
   * <p>操作结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudNativeAPIGatewayConsumerGroup请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayConsumerGroupRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>消费者组名称，最长 60 字符。同一网关下唯一。</p><p>CustomOrganization 时非空、最大 255 字符；Legacy 原规则不变。</p>
   */
  Name: string
  /**
   * <p>启用状态。</p><p>枚举值：</p><ul><li>Enable：启用</li><li>Disable：禁用</li></ul><p>CustomOrganization 时传 Active 或 Disabled；保持 Status 必填。Legacy 原 Enable/Disable 不变。</p>
   */
  Status: string
  /**
   * <p>消费者组描述。最长 200 字符。</p><p>CustomOrganization 时最大 500 字符；Legacy 原规则不变。</p>
   */
  Description?: string
  /**
   * <p>调用业务来源，可选 Legacy 或 CustomOrganization；省略或空串按 Legacy。Legacy 保持原行为，CustomOrganization 用于自定义组织架构。该字段不替代鉴权，不改变资源归属，不覆盖 RequestSource。来源保存在操作记录请求内容中。</p>
   */
  OperationSource?: string
  /**
   * <p>仅 CustomOrganization 使用。1–32 个当前网关自定义父部门 UUID，完整保留多父关系；省略时挂自定义根，空数组非法。不得使用同步部门或未归属组。Legacy 不使用此字段。</p>
   */
  ParentConsumerGroupIds?: Array<string>
}

/**
 * 密钥信息
 */
export interface CNAPIGwSecretKey {
  /**
   * <p>绑定数</p>
   */
  BindCount?: number
  /**
   * <p>是否可以绑定</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanBind?: boolean
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>密钥生成方式。</p><p>枚举值：</p><ul><li>System： 系统自动生成</li><li>Custom： 用户自定义</li><li>KMS： 使用 KMS 密钥</li></ul>
   */
  GenerateType?: string
  /**
   * <p>JWT凭证配置</p>
   */
  JWTCredentialConfig?: AIGWJWTCredentialConfig
  /**
   * <p>KMS凭证名字</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KmsKeyName?: string
  /**
   * <p>KMS凭证版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KmsKeyVersion?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>密钥名字</p>
   */
  Name?: string
  /**
   * <p>OAuth2凭证配置</p>
   */
  OAuthCredentialConfig?: AIGWOAuthCredentialConfig
  /**
   * <p>OIDC凭证配置</p>
   */
  OIDCCredentialConfig?: AIGWOIDCCredentialConfig
  /**
   * <p>Agent 密钥类型</p>
   */
  Provider?: string
  /**
   * <p>密钥归属资源类型。</p><p>枚举值：</p><ul><li>Consumer： 消费者</li><li>ModelService： 模型服务</li></ul>
   */
  ResourceType?: string
  /**
   * <p>密钥id</p>
   */
  SecretKeyId?: string
  /**
   * <p>密钥协议类型。</p>
   */
  SecretType?: string
  /**
   * <p>密钥明文</p>
   */
  SecretValue?: string
  /**
   * <p>状态。</p><p>枚举值：</p><ul><li>Enable： 启用</li><li>Disable： 禁用</li></ul>
   */
  Status?: string
  /**
   * <p>同步状态</p><p>枚举值：</p><ul><li>Fail： 失败</li><li>Success： 成功</li></ul>
   */
  SyncStatus?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>Public： 公共</li><li>Private： 私有</li><li>SourceDeleted： 资源删除</li></ul>
   */
  SourceType?: string
  /**
   * <p>同步版本</p>
   */
  SyncedVersion?: string
  /**
   * <p>AK/SK凭证配置</p>
   */
  AKSKCredentialConfig?: AIGWAKSKCredentialConfig
  /**
   * <p>CAM凭证配置</p>
   */
  CAMCredentialConfig?: AIGWCAMCredentialConfig
  /**
   * <p>Bearer Token凭证配置</p>
   */
  BearerTokenCredentialConfig?: AIGWBearerTokenCredentialConfig
  /**
   * <p>Basic Auth凭证配置</p>
   */
  BasicCredentialConfig?: AIGWBasicCredentialConfig
  /**
   * <p>自定义Header凭证配置</p>
   */
  CustomHeaderCredentialConfig?: AIGWCustomHeaderCredentialConfig
  /**
   * <p>自定义Query参数凭证配置</p>
   */
  QueryParamCredentialConfig?: AIGWQueryParamCredentialConfig
  /**
   * <p>该消费者密钥绑定的模型密钥列表</p>
   */
  BoundModelSecretKeys?: Array<AIGWSimpleSecretKey>
  /**
   * <p>绑定了该模型密钥的消费者密钥列表</p>
   */
  BoundConsumerSecretKeys?: Array<AIGWSimpleSecretKey>
  /**
   * <p>可选返回字段，仅 IncludeCreationInfo=true 且 ResourceType=Consumer 时存在。凭证内容生成方式：System 自动生成、Custom 自定义、KMS。旧 GenerateType=AutoWithConsumer 映射为 System；其他值保持原 GenerateType，未知值由前端显示“未知”。不改写原 GenerateType。</p>
   */
  CredentialGenerateType?: string
  /**
   * <p>可选返回字段，仅 IncludeCreationInfo=true 且 ResourceType=Consumer 时存在。创建来源：Manual 手动新建、AutoWithConsumer 随消费者自动新建、Batch 批量新建。按持久化 BatchId 和原 GenerateType 判定，不按名称前缀猜测。</p>
   */
  CreationSource?: string
  /**
   * <p>可选返回字段，仅 IncludeCreationInfo=true 且 ResourceType=Consumer 时存在。批量创建填原批次 ID，非批量为空字符串。来源关联随密钥保留，不因批次结果过期而消失；此字段不表示批次结果或明文仍可读取。</p>
   */
  BatchId?: string
}

/**
 * ModifyCloudNativeAPIGatewayLLMModelAPI返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayLLMModelAPIResponse {
  /**
   * <p>是否成功。</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费者结构
 */
export interface CNAPIGwConsumer {
  /**
   * <p>消费者 ID。</p>
   */
  ConsumerId: string
  /**
   * <p>名字</p>
   */
  Name: string
  /**
   * <p>创建时间</p>
   */
  CreateTime: string
  /**
   * <p>更新时间 yyyy-MM-dd hh:mm:ss</p>
   */
  ModifyTime: string
  /**
   * <p>消费者优先级</p><p>枚举值：</p><ul><li>High： 高优</li><li>Medium： 中优</li><li>Low： 低优</li></ul>
   */
  Priority?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>消费者分组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroups?: Array<CNAPIGwConsumerGroup>
  /**
   * <p>同步状态</p><p>枚举值：</p><ul><li>Fail： 失败</li></ul>
   */
  SyncStatus?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>ModelService： 模型服务</li><li>Consumer： 消费者</li><li>SecretKey： 密钥</li></ul>
   */
  SourceType?: string
  /**
   * <p>同步版本</p>
   */
  SyncedVersion?: string
  /**
   * <p>消费者展示名称；目录同步对象可与登录名不同。</p>
   */
  DisplayName?: string
  /**
   * <p>消费者登录名称。</p>
   */
  UserName?: string
  /**
   * <p>目录消费者状态：active / disabled / soft_deleted。保留存量接口原始值，不转换为 AIGW 枚举。</p>
   */
  Status?: string
  /**
   * <p>消费者来源：manual / sync；保留目录隔离和同步对象只读规则。</p>
   */
  Origin?: string
  /**
   * <p>产生该消费者的同步源 ID；手工消费者可为空。</p>
   */
  SyncSourceId?: string
  /**
   * <p>对象在外部目录中的稳定标识；手工消费者可为空。</p>
   */
  ExternalId?: string
}

/**
 * AI 网关日志输出配置
 */
export interface AIGWLogConfig {
  /**
   * <p>是否开启请求 payload 记录日志</p>
   */
  EnableRequestLogPayloads?: boolean
  /**
   * <p>是否开启响应 payload 记录日志</p>
   */
  EnableResponseLogPayloads?: boolean
  /**
   * <p>日志记录的请求body的最大字节数</p><p>取值范围：[512, 1048576]</p><p>EnableRequestLogPayloads 为true时必填</p>
   */
  RequestLogPayloadMaxSize?: number
  /**
   * <p>日志记录的响应body的最大字节数</p><p>取值范围：[512, 1048576]</p><p>EnableResponseLogPayloads 为true时必填</p>
   */
  ResponseLogPayloadMaxSize?: number
  /**
   * <p>请求 payload access log 输出模式。MCP情况下不需要传入</p><p>枚举值：</p><ul><li>raw： access log 中 body 记录客户端原始请求</li><li>processed： access log 中 body 记录 AI 网关协议适配、改写、归一化后的 OpenAI-compatible 内容</li></ul>
   */
  RequestLogPayloadMode?: string
  /**
   * <p>上游原始 payload access log 输出模式。MCP情况下不需要传入</p><p>枚举值：</p><ul><li>raw： access log 中 body 记录客户端原始上游响应</li><li>processed： access log 中 body 记录 AI 网关协议适配、改写、归一化后的 OpenAI-compatible 内容</li></ul>
   */
  ResponseLogPayloadMode?: string
  /**
   * <p>请求 Body 大小裁剪策略</p><p>枚举值：</p><ul><li>Bounded： 裁剪大小</li><li>UnBounded： 不裁剪大小</li></ul>
   */
  RequestLogPayloadTruncationPolicy?: string
  /**
   * <p>响应 Body 大小裁剪策略</p><p>枚举值：</p><ul><li>Bounded： 裁剪大小</li><li>UnBounded： 不裁剪大小</li></ul>
   */
  ResponseLogPayloadTruncationPolicy?: string
}

/**
 * 云原生网关服务预览信息
 */
export interface KongServicePreview {
  /**
   * 服务ID
   */
  ID: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 是否可编辑
   */
  Editable?: boolean
  /**
   * 服务名字
   */
  Name?: string
  /**
   * 请求路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 标签
   */
  Tags?: Array<string>
  /**
   * 后端配置
   */
  UpstreamInfo?: KongUpstreamInfo
  /**
   * 后端类型
   */
  UpstreamType?: string
}

/**
 * AI 的服务来源配置信息
 */
export interface CNAPIGwAIServiceSourceInfo {
  /**
   * <p>服务来源实例id</p>
   */
  InstanceId?: string
  /**
   * <p>授权信息</p>
   */
  Auth?: CNAPIGwAIServiceSourceAuth
  /**
   * <p>地址列表</p>
   */
  Addresses?: Array<string>
}

/**
 * MCP Server 列表
 */
export interface AIGWMCPServerList {
  /**
   * <p>总数</p>
   */
  TotalCount: number
  /**
   * <p>mcp server 数据列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataList?: Array<AIGWMCPServer>
}

/**
 * AI网关 JWT 凭证物料配置
 */
export interface AIGWJWTCredentialConfig {
  /**
   * <p>签名算法，取值：HS256 HS384 HS512 RS256 RS384 RS512 ES256 ES384 ES512</p>
   */
  Algorithm: string
  /**
   * <p>JWT 消费者标识，iss claim</p>
   */
  Key: string
  /**
   * <p>RS/ES PEM 格式公钥，仅 Algorithm 为 RS256/RS384/RS512/ES256/ES384/ES512 时必填；HS* 时留空</p>
   */
  RSAPublicKey?: string
  /**
   * <p>HS 对称密钥，仅 Algorithm 为 HS256/HS384/HS512 时必填；RS/ES* 时留空</p>
   */
  Secret?: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelService返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelServiceResponse {
  /**
   * <p>模型服务。</p>
   */
  Result?: CloudNativeAPIGatewayLLMModelService
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源端 OIDC 认证插件配置
 */
export interface AIGWOIDCAuthPluginConfig {
  /**
   * <p>目标受众</p>
   */
  Audience?: string
  /**
   * <p>是否BearerOnly</p><p>目前只能为true</p>
   */
  BearerOnly?: boolean
  /**
   * <p>授权范围</p>
   */
  Scopes?: Array<string>
  /**
   * <p>消费者标识</p>
   */
  ConsumerClaim?: string
  /**
   * <p>认证域</p>
   */
  Realm?: string
  /**
   * <p>超时时间</p>
   */
  Timeout?: number
  /**
   * <p>令牌端点认证方法</p><p>枚举值：</p><ul><li>client_secret_post： client_secret_post</li><li>client_secret_basic： client_secret_basic</li><li>private_key_jwt： private_key_jwt</li></ul>
   */
  TokenEndpointAuthMethod?: string
  /**
   * <p>令牌内省端点</p>
   */
  IntrospectionEndpoint?: string
  /**
   * <p>令牌内省端点认证方法</p><p>枚举值：</p><ul><li>client_secret_basic： client_secret_basic</li><li>client_secret_post： client_secret_post</li></ul>
   */
  IntrospectionEndpointAuthMethod?: string
  /**
   * <p>签发者地址</p>
   */
  IssuerURL?: string
  /**
   * <p>客户端 ID</p>
   */
  ClientId?: string
  /**
   * <p>客户端密钥</p>
   */
  ClientSecret?: string
}

/**
 * 最高Token用量消费者
 */
export interface AIGWTopConsumersItem {
  /**
   * <p>消费者Id</p>
   */
  ConsumerId?: string
  /**
   * <p>消费者名称</p>
   */
  ConsumerName?: string
  /**
   * <p>该消费者花费的Token数</p>
   */
  TotalTokens?: number
}

/**
 * RemoveCloudNativeAPIGatewayConsumerInGroup请求参数结构体
 */
export interface RemoveCloudNativeAPIGatewayConsumerInGroupRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * <p>消费者组 ID（以 cg- 开头）。</p>
   */
  ConsumerGroupId: string
  /**
   * <p>消费者 ID 列表，长度 1-10。</p>
   */
  ConsumerIds: Array<string>
}

/**
 * MCP路由 Header规则对象
 */
export interface AIGWHeaderRule {
  /**
   * <p>Header的Key</p>
   */
  Key: string
  /**
   * <p>Header匹配规则</p><p>枚举值：</p><ul><li>Exact： 精确</li><li>Prefix： 前缀</li><li>Regex： 正则</li></ul>
   */
  MatchType: string
  /**
   * <p>Header匹配的值</p>
   */
  Value: string
}

/**
 * CreateCloudNativeAPIGatewayLLMModelService请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayLLMModelServiceRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>服务名称，最长60个字符，支持中英文大小写、数字及分隔符（“-”、“_”)，不能以数字和分隔符开头，不能以分隔符结尾。</p>
   */
  Name: string
  /**
   * <p>服务类型。目前仅支持 LLMService。</p><p>枚举值：</p><ul><li>LLMService： 大语言模型服务</li></ul>
   */
  ServiceType: string
  /**
   * <p>选择模型提供商, 选项：OpenAI、Anthropic、Azure OpenAI等。</p>
   */
  ModelProvider: string
  /**
   * <p>API协议标准，根据供应商动态变化：OpenAI→OpenAI/v1，Anthropic→Anthropic/v1等</p>
   */
  ModelProtocol: string
  /**
   * <p>模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。</p>
   */
  ModelSelector: string
  /**
   * <p>LLM 厂商颁发的认证信息 token 。</p>
   */
  SecretKeyIds?: Array<string>
  /**
   * <p>默认模型，模型选择方式为 Specify 时必填。</p>
   */
  DefaultModel?: string
  /**
   * <p>开启模型降级，模型选择方式为 Specify 时必填。</p>
   */
  EnableModelFallback?: boolean
  /**
   * <p>可以配置备用模型规则，EnableSpecifyModelFallbackxa0为 true 时必填。</p>
   */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule
  /**
   * <p>开启模型参数校验，是否校验客户端传递的 model 参数,xa0模型选择方式为 PassThrough 时必填</p>
   */
  EnableModelParamCheck?: boolean
  /**
   * <p>模型检验信息，EnableModelParamCheckxa0为 true 时必填。</p>
   */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo
  /**
   * <p>描述。</p>
   */
  Description?: string
  /**
   * <p>服务提供商自定义 url</p>
   */
  UpstreamURL?: string
  /**
   * <p>连接超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：10000</p>
   */
  ConnectTimeout?: number
  /**
   * <p>写入超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：60000</p>
   */
  WriteTimeout?: number
  /**
   * <p>读取超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：60000</p>
   */
  ReadTimeout?: number
  /**
   * <p>重试次数</p><p>取值范围：[0, 5]</p><p>单位：次</p><p>默认值：0</p>
   */
  Retries?: number
  /**
   * <p>路径拼接模式</p><p>枚举值：</p><ul><li>FixedPath： 固定地址</li><li>AutoConcat： 自动拼接</li></ul>
   */
  UpstreamUrlMode?: string
  /**
   * <p>sni</p>
   */
  SNI?: string
  /**
   * <p>模型服务级别的配额上限（RPM/TPM）。需要网关版本 ≥ 3.9.4。</p>
   */
  QuotaLimit?: AIGWLLMQuotaLimit
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>参数改写规则</p>
   */
  ModelRewriteRules?: Array<AIGWModelRewriteRule>
  /**
   * <p>模型自定义供应商名称</p>
   */
  CustomProviderName?: string
  /**
   * <p>外部服务来源ID</p>
   */
  ExternalInstanceId?: string
  /**
   * <p>其他参数</p>
   */
  ExtParams?: Array<KeyValue>
  /**
   * <p>密钥轮转开关</p>
   */
  KeyRotationEnabled?: boolean
  /**
   * <p>密钥轮转周期</p><p>单位：天数</p>
   */
  KeyRotationPeriodDays?: number
  /**
   * <p>来源服务 ID。</p>
   */
  SourceId?: string
  /**
   * <p>命名空间。</p>
   */
  Namespace?: string
  /**
   * <p>服务名称。</p>
   */
  ServiceName?: string
  /**
   * <p>协议类型，如 OpenAI、Custom。</p>
   */
  Protocol?: string
  /**
   * <p>负载均衡配置</p>
   */
  LoadBalanceConfig?: AIGWLoadBalanceConfig
  /**
   * <p>智能负载均衡配置</p>
   */
  SmartBalance?: AIGWSmartBalanceConfig
  /**
   * <p>内容长度限制配置</p>
   */
  LengthLimitConfig?: AIGWLengthLimitConfig
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelServices请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelServicesRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>返回数量，默认为 10，最大值为 1000。</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认为 0。</p>
   */
  Offset?: number
  /**
   * <p>过滤条件，多个过滤条件之间是“与”的关系，支持 Name</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>通过模型 API 筛选模型服务</p>
   */
  ModelAPIId?: string
  /**
   * <p>通过密匙查询绑定的模型服务</p>
   */
  SecretKeyId?: string
  /**
   * <p>搜索关键词，模糊匹配 name 和 description</p>
   */
  Keyword?: string
}

/**
 * CreateCloudNativeAPIGatewayLLMModelAPI请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayLLMModelAPIRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>模型 API 名称，最长 60 字符。同一网关下唯一。</p>
   */
  Name: string
  /**
   * <p>业务场景。</p><p>枚举值：</p><ul><li>Chat：聊天</li><li>Image：图像（需要网关版本 ≥ 3.9.3）</li></ul>
   */
  SceneType: string
  /**
   * <p>请求协议（小写）。当前仅支持：</p><ul><li>openai</li></ul>
   */
  RequestProtocol: string
  /**
   * <p>关联的模型服务 ID 列表，长度 1-10。</p><p>注：字段名建议改为 ModelServiceIds，当前保留用于兼容。</p>
   */
  ListModelServiceId: Array<string>
  /**
   * <p>路由列表，至少 1 条。每条包含 Methods/Paths/Hosts 等 Kong 路由属性。</p>
   */
  RouteList: Array<DefaultKongRoute>
  /**
   * <p>统一前缀路径（可选）。例如 /v1/openai。</p>
   */
  BasePath?: string
  /**
   * <p>模型 API 描述。最长 200 字符。</p>
   */
  Description?: string
  /**
   * <p>多模型服务路由策略。ListModelServiceId 多于 1 项时必填。</p>
   */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute
  /**
   * <p>Header 路由匹配规则。当前仅支持 Operator=exact。</p>
   */
  MatchHeaders?: Array<AIGWKVMatch>
  /**
   * <p>是否启用跨服务 Fallback。开启后需提供 CrossServiceFallbackConfig。</p>
   */
  EnableCrossServiceFallback?: boolean
  /**
   * <p>跨服务 Fallback 配置。EnableCrossServiceFallback=true 时必填。</p>
   */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig
  /**
   * <p>标签过滤策略。需要网关版本 ≥ 3.9.4。</p>
   */
  TagFilter?: AIGWTagFilter
  /**
   * <p>日志输出配置（请求/响应 payload 落 LLM Log）。需要网关版本 ≥ 3.9.4。</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>Rerank场景最大文档数高级配置</p>
   */
  MaxDocumentsConfig?: AIGWRerankMaxDocumentsConfig
  /**
   * <p>敏感词路由配置</p>
   */
  SensitiveWordRoute?: AIGWSensitiveWordRoute
  /**
   * <p>请求优先级调度配置</p>
   */
  PriorityScheduleConfig?: AIGWPriorityScheduleConfig
  /**
   * <p>按请求体顶层 model 字段选择模型 API 的入口路由配置。传入对象即启用，ModelNames 须为非空列表；不传表示不启用。仅用于 Chat 场景下受支持的 POST 路由：openai 协议的 /v1/chat/completions、/v1/responses，或 anthropic 协议的 /v1/messages。公有云要求网关版本不低于 3.9.8，TCS 要求不低于 3.9.6。</p>
   */
  ModelNameRoute?: AIGWModelNameRoute
  /**
   * <p>单模型 API 的顶层标准模型名称。仅当 ListModelServiceId 包含一个模型服务且未配置 ModelServiceRoute 时可设置；多模型场景应在对应路由或降级条目中配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * AI网关自定义 Header 凭证配置
 */
export interface AIGWCustomHeaderCredentialConfig {
  /**
   * <p>Header名</p>
   */
  HeaderName?: string
  /**
   * <p>Header值</p>
   */
  HeaderValue?: string
}

/**
 * MCP tool 参数
 */
export interface CNAPIGwMCPToolParam {
  /**
   * <p>名字</p>
   */
  Name: string
  /**
   * <p>参数类型</p><p>枚举值：</p><ul><li>string： 字符串</li><li>number： 数字</li><li>boolean： 布尔</li><li>array： 数组</li><li>object： 对象</li></ul>
   */
  Type: string
  /**
   * <p>必填</p>
   */
  Required: boolean
  /**
   * <p>位置</p><p>枚举值：</p><ul><li>query： query</li><li>path： query</li><li>header： header</li><li>body： body</li></ul>
   */
  Position: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>默认值</p>
   */
  Default?: string
  /**
   * <p>数组子项</p>
   */
  Items?: CNAPIGwMCPToolParam
  /**
   * <p>对象属性</p>
   */
  Properties?: Array<CNAPIGwMCPToolParam>
  /**
   * <p>转发到后端的名称</p><p>不填则使用原始名称</p>
   */
  BackendName?: string
}

/**
 * 资源端 OAuth2 认证插件配置
 */
export interface AIGWOAuthAuthPluginConfig {
  /**
   * <p>取token的头部名称</p>
   */
  HeaderNames?: Array<string>
  /**
   * <p>过期时间</p>
   */
  TokenExpiration?: number
  /**
   * <p>授权范围</p>
   */
  Scopes?: Array<string>
  /**
   * <p>是否强制判断授权范围</p>
   */
  MandatoryScope?: boolean
}

/**
 * DescribeCloudNativeAPIGatewayConsumerGroup请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConsumerGroupRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>消费者组ID</p>
   */
  ConsumerGroupId: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolACLList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolACLListRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP 服务ID</p>
   */
  ServerId: string
  /**
   * <p>分页大小</p>
   */
  Limit: number
  /**
   * <p>分页偏移</p>
   */
  Offset: number
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
}

/**
 * DescribeCloudNativeAPIGatewayAIQuota请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIQuotaRequest {
  /**
   * <p>网关实例Id</p>
   */
  GatewayId: string
  /**
   * <p>配额 id</p>
   */
  Id: string
}

/**
 * JWT 认证插件配置
 */
export interface AIGWJWTAuthPluginConfig {
  /**
   * <p>签名的header名称列表</p>
   */
  HeaderNames?: Array<string>
  /**
   * <p>签名的cookie名称列表</p>
   */
  CookieNames?: Array<string>
  /**
   * <p>签名的URL参数名称列表</p>
   */
  URIParamNames?: Array<string>
  /**
   * <p>消费者标识</p>
   */
  KeyClaimName?: string
  /**
   * <p>标准消费者校验</p><p>枚举值：</p><ul><li>exp： exp</li><li>nbf： nbf</li></ul>
   */
  ClaimsToVerify?: Array<string>
  /**
   * <p>最大有效期</p>
   */
  MaximumExpiration?: number
  /**
   * <p>是否Base64编码</p>
   */
  SecretIsBase64?: boolean
  /**
   * <p>CORS预检验证</p>
   */
  RunOnPreFlight?: boolean
}

/**
 * MCP Tools导入任务的进度
 */
export interface CNAPIGwMCPToolImportTaskResult {
  /**
   * <p>导入失败的数量</p>
   */
  FailedCount?: number
  /**
   * <p>已处理导入Tool的总数</p>
   */
  ProcessedCount?: number
  /**
   * <p>成功导入的Tool数量</p>
   */
  SuccessCount?: number
  /**
   * <p>任务结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskEndTime?: string
  /**
   * <p>任务ID</p>
   */
  TaskId?: string
  /**
   * <p>任务开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStartTime?: string
  /**
   * <p>任务状态</p><p>枚举值：</p><ul><li>Running： 运行中</li><li>End： 结束</li></ul>
   */
  TaskStatus?: string
  /**
   * <p>导入结果详情</p>
   */
  ToolsImportResult?: Array<CNAPIGwMCPToolImportResult>
  /**
   * <p>待导入Tools的总数</p>
   */
  TotalCount?: number
}

/**
 * DescribeCNGWServicesWithRoutes返回参数结构体
 */
export interface DescribeCNGWServicesWithRoutesResponse {
  /**
   * <p>服务及路由查询结果</p>
   */
  Result?: KongServiceWithRoutes
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LLM 模型 API
 */
export interface CloudNativeAPIGatewayLLMModelAPI {
  /**
   * <p>模型 API ID。</p>
   */
  Id?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>AI 网关 LLM 模型 API 的唯一标识名称，格式规则：2-50 字符，支持英文、数字、下划线。</p>
   */
  Name?: string
  /**
   * <p>选择业务场景,xa0 选项：Chat（聊天）。</p>
   */
  SceneType?: string
  /**
   * <p>业务场景对应的请求协议，选项：OpenAI（目前只支持 OpenAI）。</p>
   */
  RequestProtocol?: string
  /**
   * <p>路由列表</p>
   */
  RouteList?: Array<DefaultKongRoute>
  /**
   * <p>为API设置统一的前缀，格式：以/开头，支持字母、数字、短横线。</p>
   */
  BasePath?: string
  /**
   * <p>路径简化，<br>启用时：客户端请求路径 → 移除Base Path → 后端接收简洁路径<br>禁用时：客户端请求路径 → 完整传递给后端。</p>
   */
  StripPath?: boolean
  /**
   * <p>模型 API 的相关描述。</p>
   */
  Description?: string
  /**
   * <p>模型服务Id</p>
   */
  ModelServiceId?: string
  /**
   * <p>模型服务名称</p>
   */
  ModelServiceName?: string
  /**
   * <p>模型服务路由策略（是指如何路由到模型服务）</p>
   */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute
  /**
   * <p>HTTP 请求头匹配规则，用于按请求头路由到不同模型服务。</p>
   */
  MatchHeaders?: Array<AIGWKVMatch>
  /**
   * <p>是否开启跨服务fallback</p>
   */
  EnableCrossServiceFallback?: boolean
  /**
   * <p>跨服务fallback配置详情</p>
   */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig
  /**
   * <p>是否展示模型API</p>
   */
  DescribeCloudNativeAPIGatewayLLMModelAPI?: boolean
  /**
   * <p>标签</p>
   */
  TagFilter?: AIGWTagFilter
  /**
   * <p>日志显示相关开关</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>日志脱敏规则</p>
   */
  LogDesensitizeConfig?: AIGWLogDesensitizeConfig
  /**
   * <p>转发脱敏规则</p>
   */
  ForwardDesensitizeConfig?: AIGWForwardDesensitizeConfig
  /**
   * <p>rerank documents 上限</p>
   */
  MaxDocumentsConfig?: AIGWRerankMaxDocumentsConfig
  /**
   * <p>敏感词路由配置</p>
   */
  SensitiveWordRoute?: AIGWSensitiveWordRoute
  /**
   * <p>消费者组模型范围</p>
   */
  ConsumerGroupModelScopes?: Array<AIGWAuthModelScopeItem>
  /**
   * <p>消费者继承的模型范围</p>
   */
  ConsumerInheritModelScope?: AIGWConsumerModelScope
  /**
   * <p>消费者模型范围</p>
   */
  ConsumerDirectModelScopes?: Array<AIGWAuthModelScopeItem>
  /**
   * <p>消费者密钥模型范围</p>
   */
  SecretKeyModelScopes?: Array<AIGWAuthModelScopeItem>
  /**
   * <p>请求优先级配置</p>
   */
  PriorityScheduleConfig?: AIGWPriorityScheduleConfig
  /**
   * <p>模型API是否支持Playground调试</p>
   */
  PlaygroundAvailable?: boolean
  /**
   * <p>模型 API 当前配置的入口模型名路由规则，根据请求体顶层 model 字段匹配 ModelNames 中的名称或别名；未配置时不启用该入口路由规则。</p>
   */
  ModelNameRoute?: AIGWModelNameRoute
  /**
   * <p>单模型 API 当前配置的顶层标准模型名称，仅适用于其关联的 TIONE 模型服务；为空表示未配置。多模型场景的标准模型名称在各路由或降级条目中返回。</p>
   */
  StandardModelName?: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelAPIs请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIsRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>每页条数，范围 [1, 1000]，默认 10。</p>
   */
  Limit?: number
  /**
   * <p>起始位置，从 0 开始。</p>
   */
  Offset?: number
  /**
   * <p>过滤条件。当前未启用具体字段。</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>模糊匹配模型 API 名称。</p>
   */
  Keyword?: string
  /**
   * <p>消费者组 ID（以 cg- 开头），与 UseToBind 搭配使用。</p>
   */
  ConsumerGroupId?: string
  /**
   * <p>是否用于绑定场景。true 时仅返回可被绑定到指定消费者组的模型 API。</p>
   */
  UseToBind?: boolean
  /**
   * <p>消费者 ID（以 consumer- 开头）。</p>
   */
  ConsumerId?: string
  /**
   * <p>密钥ID</p>
   */
  SecretKeyId?: string
}

/**
 * AI 网关 MCP Server 参数改写规则
 */
export interface AIGWMCPServerParamRewriteRule {
  /**
   * <p>操作方式</p>
   */
  Operate: string
  /**
   * <p>键</p>
   */
  Key: string
  /**
   * <p>值</p>
   */
  Value?: string
}

/**
 * 模型名字重写规则
 */
export interface AIGWModelRewriteRule {
  /**
   * <p>原始模型</p>
   */
  SourceModel?: string
  /**
   * <p>目标模型</p>
   */
  TargetModel?: string
}

/**
 * AI网关配额
 */
export interface AIGWQuota {
  /**
   * <p>Id</p>
   */
  Id?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>Consumer： 消费者</li></ul>
   */
  ResourceType?: string
  /**
   * <p>资源 id</p>
   */
  ResourceId?: string
  /**
   * <p>资源名字</p><p>如消费者名字</p>
   */
  ResourceName?: string
  /**
   * <p>配额类型</p><p>枚举值：</p><ul><li>RequestCount： 请求数</li><li>TotalToken： 总 token</li><li>Cost： 成本</li></ul>
   */
  QuotaType?: string
  /**
   * <p>配额周期单位</p><p>枚举值：</p><ul><li>Day： 天</li><li>Week： 周</li><li>Month： 月</li></ul>
   */
  PeriodUnit?: string
  /**
   * <p>配额</p>
   */
  QuotaLimit?: number
  /**
   * <p>启用</p>
   */
  Enabled?: boolean
  /**
   * <p>创建时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  ModifyTime?: string
  /**
   * <p>配额类型，手动配额还是默认配额</p>
   */
  Source?: string
  /**
   * <p>配额超限行为</p><p>枚举值：</p><ul><li>Reject： 拒绝消费者请求</li><li>AllowOverage： 允许超限</li></ul>
   */
  ExceedAction?: string
  /**
   * <p>缓存是否计入限额</p><p>枚举值：</p><ul><li>Full： 全量计入</li><li>Exclude： 不计入网关缓存命中部分</li></ul>
   */
  CacheHitStat?: string
  /**
   * <p>超限百分比</p><p>默认值：0</p><p>Consumer 的超量百分比，指定模型服务配额默认为 0；ConsumerGroup 固定为 0。</p><p>举例：20，超出设置额度的20%，可用额度为（1+20%）*QuotaLimit。当SetExceedPercentage=true时，条件必选。</p>
   */
  ExceedPercentage?: number
  /**
   * <p>是否设置超限百分比</p><p>仅 Consumer 的 AllowOverage 场景可用，指定模型服务的配额必须为 false；ConsumerGroup 必须为 false。</p><p>枚举值：</p><ul><li>true： 设置超限百分比</li><li>false： 不设置超限百分比，即不设上限</li></ul><p>默认值：false</p><p>当ExceedAction=AllowOverage时，条件必选。</p>
   */
  SetExceedPercentage?: boolean
  /**
   * <p>Consumer粒度某资源对象的配额范围，支持：全部模型服务（all）、指定模型服务（specified）</p><p>枚举值：</p><ul><li>All： 全部</li><li>Specified： 指定</li></ul><p>默认值：All</p>
   */
  Scope?: string
  /**
   * <p>Consumer粒度配额的资源类型，如“模型服务”</p><p>枚举值：</p><ul><li>ModelService： 模型服务</li></ul><p>默认值：ModelService</p>
   */
  SubResourceType?: string
  /**
   * <p>Consumer粒度配额若支持指定子资源配额，则该项为子资源配额个数</p>
   */
  SubResourceCount?: number
  /**
   * <p>消费者组完整层级路径。仅 ResourceType=ConsumerGroup 返回，未知时为空字符串；Consumer 行省略。</p>
   */
  ConsumerGroupPath?: string
  /**
   * <p>消费者组是否有效。仅 ResourceType=ConsumerGroup 返回；组不存在或非 active 时为 false。与配额规则 Enabled 区分，字段省略与 false 含义不同。</p>
   */
  ConsumerGroupActive?: boolean
  /**
   * <p>兼容用量字段。Cost 为向下取整的整数元；TotalToken 单位为 token；RequestCount 单位为次。精确显示优先使用 UsedExact。</p> 仅支持用量查询的实际规则返回；旧 Consumer 网关和 DefaultPolicy 模板可省略。
   */
  Used?: number
  /**
   * <p>精确使用量。Cost 单位为元，保留 1e-7 元精度；TotalToken 单位为 token；RequestCount 单位为次。旧版插件不提供精确值时省略，调用方可回退使用 Used；该值已换算为业务单位，不要再除以 ValueScale。</p> 仅支持用量查询的实际规则返回；旧 Consumer 网关和 DefaultPolicy 模板可省略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedExact?: number
  /**
   * <p>使用率</p> 仅支持用量查询的实际规则返回；旧 Consumer 网关和 DefaultPolicy 模板可省略。
   */
  UsageRate?: number
  /**
   * <p>预警级别</p><p>枚举值：</p><ul><li>Normal： 正常</li><li>Warning： 预警</li><li>NearLimit： 临近超限</li><li>Exceeded： 超限</li></ul> 仅支持用量查询的实际规则返回；旧 Consumer 网关和 DefaultPolicy 模板可省略。
   */
  AlarmLevel?: string
  /**
   * <p>关联消费者密钥数量。ConsumerGroup 规则固定为 0。</p>
   */
  SecretKeyCount?: number
}

/**
 * 创建资源通用结果
 */
export interface CNAPIGwCreateCommonResult {
  /**
   * 对应的id 值
   */
  ID?: string
  /**
   * 是否成功
   */
  Success?: boolean
}

/**
 * 模型服务路由配置
 */
export interface CloudNativeAPIGatewayLLMModelServiceRoute {
  /**
   * <p>生效的路由算法类型：权重路由，模型名称路由、参数路由等Weighted/ModelName/Query (预留多个，暂时只能填写一个)</p>
   */
  SelectedTypes: Array<string>
  /**
   * <p>权重路由配置，最多10个</p>
   */
  WeightedConfig?: Array<CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy>
  /**
   * <p>模型名称路由配置，最多10个</p>
   */
  ModelNameConfig?: Array<CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy>
  /**
   * <p>意图识别</p>
   */
  IntentRouteConfig?: AIGWIntentRoute
  /**
   * <p>延迟路由</p>
   */
  LatencyPriorityConfig?: AIGWLatencyPriorityConfig
  /**
   * <p>前缀缓存感知路由</p>
   */
  CacheAwareRouteConfig?: AIGWCacheAwareRouteConfig
  /**
   * <p>token 长度路</p>
   */
  TokenLengthRouteConfig?: AIGWTokenLengthRoute
}

/**
 * 消费者组结构
 */
export interface CNAPIGwConsumerGroup {
  /**
   * <p>分组id</p>
   */
  ConsumerGroupId: string
  /**
   * <p>名字</p>
   */
  Name: string
  /**
   * <p>状态Disable/Enable</p>
   */
  Status: string
  /**
   * <p>描述</p>
   */
  Description: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间 yyyy-MM-dd hh:mm:ss</p>
   */
  ModifyTime?: string
  /**
   * <p>绑定的消费者数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindCount?: number
  /**
   * <p>同步状态</p><p>枚举值：</p><ul><li>Fail： 失败</li><li>Succes： 成功</li></ul>
   */
  SyncStatus?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>Public： 公共</li><li>Private： 私有</li><li>SourceDeleted： 资源已删除</li></ul>
   */
  SourceType?: string
  /**
   * <p>同步版本</p>
   */
  SyncedVersion?: string
  /**
   * <p>只读保留的组织部门外部标识，仅 SoftDeleted 对象返回；用于后续删除检查，不在基础信息页面展示。</p>
   */
  ExternalId?: string
}

/**
 * CreateCloudNativeAPIGatewayLLMModelService返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayLLMModelServiceResponse {
  /**
   * <p>是否成功</p>
   */
  Result?: boolean
  /**
   * <p>模型服务 ID，全局唯一标识。</p>
   */
  ModelServiceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关 MCP Server ACL 配置详情
 */
export interface AIGWMCPServerACLResult {
  /**
   * <p>黑白名单鉴权类型</p><p>枚举值：</p><ul><li>None： 不鉴权</li><li>Allow： 白名单</li><li>Deny： 黑名单</li></ul>
   */
  ACLType?: string
  /**
   * <p>关联的消费者ID列表</p>
   */
  ACLConsumers?: Array<AIGWACLSubject>
  /**
   * <p>关联的消费者组ID列表</p>
   */
  ACLConsumerGroups?: Array<AIGWACLSubject>
  /**
   * <p>认证类型</p><p>枚举值：</p><ul><li>None： 无认证</li><li>ApiKey： API Key认证</li></ul>
   */
  AuthType?: string
}

/**
 * ModifyCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>消费者 ID。</p>
   */
  ConsumerId: string
  /**
   * <p>消费者名称，最长 60 字符。</p>
   */
  Name: string
  /**
   * <p>消费者优先级</p><p>枚举值：</p><ul><li>High： 高优</li><li>Medium： 中优</li><li>Low： 低优</li></ul>
   */
  Priority?: string
  /**
   * <p>消费者描述。最长 200 字符。</p>
   */
  Description?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolImportTask返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolImportTaskResponse {
  /**
   * <p>导入任务的进度</p>
   */
  Result?: CNAPIGwMCPToolImportTaskResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关日志脱敏配置
 */
export interface AIGWLogDesensitizeConfig {
  /**
   * <p>日志脱敏配置总开关</p>
   */
  Enabled: boolean
  /**
   * <p>内置规则类型：Phone、IdCard、BankCard、Email、IP、Name</p>
   */
  PredefinedRuleTypes?: Array<string>
  /**
   * <p>自定义规则，最多 20 条</p>
   */
  CustomRules?: Array<AIGWCustomDesensitizeRule>
  /**
   * <p>脱敏方向：Request、Response；为空时默认两者</p>
   */
  Scope?: Array<string>
}

/**
 * AI网关 Bearer Token 凭证配置
 */
export interface AIGWBearerTokenCredentialConfig {
  /**
   * <p>Token凭证</p>
   */
  Token?: string
}

/**
 * 配额规则中，某资源对象的指定子资源信息。如资源对象“模型服务”的“指定模型服务”的信息。当Scope=Specified 必填（1~50 项，msvc_id 不重复，QuotaLimit>0）；Scope=All 必须为空。
 */
export interface AIGWQuotaSubItem {
  /**
   * <p>子资源 ID（如：模型服务 ID）</p>
   */
  SubResourceId: string
  /**
   * <p>该子资源独立配额上限，必须 &gt; 0；单位与 QuotaType 对齐（Cost=元 TotalToken=tokens RequestCount=次）</p>
   */
  QuotaLimit?: number
}

/**
 * 新建MCP路由结果
 */
export interface AIGWCreateMCPRouteResult {
  /**
   * <p>路由ID</p>
   */
  RouteId?: string
  /**
   * <p>结果</p>
   */
  Success?: boolean
}

/**
 * DescribeCloudNativeAPIGatewayConsumer返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConsumerResponse {
  /**
   * <p>消费者详情</p>
   */
  Result?: CNAPIGwConsumer
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云原生网关MCP会话配置
 */
export interface AIGWMCPSessionConfig {
  /**
   * <p>会话存储类型</p><p>枚举值：</p><ul><li>memory： 内存</li><li>redis： redis</li></ul>
   */
  SessionStorage?: string
  /**
   * <p>Redis配置</p>
   */
  RedisConfig?: AIGWRedisConfig
}

/**
 * AI 网关 MCP Server 认证配置详情
 */
export interface AIGWMCPServerAuthResult {
  /**
   * <p>MCP服务认证类型</p><p>枚举值：</p><ul><li>None： 无认证</li><li>ApiKey： API Key认证</li></ul>
   */
  AuthType?: string
  /**
   * <p>JWT认证配置</p>
   */
  JWTAuthConfig?: AIGWJWTAuthPluginConfig
  /**
   * <p>OAuth2认证配置</p>
   */
  OAuthAuthConfig?: AIGWOAuthAuthPluginConfig
  /**
   * <p>OIDC认证配置</p>
   */
  OIDCAuthConfig?: AIGWOIDCAuthPluginConfig
}

/**
 * DeleteCloudNativeAPIGatewayMCPToolVersion返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPToolVersionResponse {
  /**
   * <p>删除mcp tool版本结果</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolListRequest {
  /**
   * <p>实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务 id</p>
   */
  ServerId: string
  /**
   * <p>条数</p><p>取值范围：[1, 100]</p>
   */
  Limit: number
  /**
   * <p>开始位置</p><p>取值范围：[1, 100000]</p>
   */
  Offset: number
}

/**
 * DeleteCloudNativeAPIGatewayMCPServer返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPServerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI网关模型可用范围
 */
export interface AIGWModelScope {
  /**
   * <p>范围类型</p><p>枚举值：</p><ul><li>ALL： 允许全部访问</li><li>ALLOWLIST： 允许访问的模型列表</li><li>MAG： 模型访问组</li></ul>
   */
  ScopeType?: string
  /**
   * <p>允许访问的模型列表，ScopeType=ALLOWLIST时设置</p>
   */
  AllowList?: Array<string>
  /**
   * <p>模型访问组，ScopeType=MAG时设置</p>
   */
  MagRefs?: Array<string>
}

/**
 * AI 网关意图路由规则
 */
export interface AIGWIntentRouteRule {
  /**
   * <p>意图编码</p><p>枚举值：</p><ul><li>Coder： 代码编写</li><li>Math： 数学计算</li><li>Translation： 翻译</li><li>Flash： 快速问答</li><li>Complex： 复杂推理</li></ul>
   */
  IntentCode?: string
  /**
   * <p>模型服务id</p>
   */
  ModelServiceId?: string
  /**
   * <p>意图ID</p>
   */
  IntentId?: string
  /**
   * <p>意图名称</p>
   */
  IntentName?: string
  /**
   * <p>当前意图路由规则中目标 ModelServiceId 对应的标准模型名称；为空表示未配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * 智能负载均衡配置，仅服务来源（ServiceSource，SourceId 非空）场景生效。
 */
export interface AIGWSmartBalanceConfig {
  /**
   * <p>负载均衡类型</p><p>枚举值：</p><ul><li>LeastRequests： 最少运行请求</li><li>LeastQueued： 最少排队请求</li><li>LeastTTFT： 最少TTFT</li><li>LeastTPOT： 最少TPOT</li></ul>
   */
  Algorithm?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPTool请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>工具名字</p>
   */
  Name: string
  /**
   * <p>路径</p>
   */
  Path: string
  /**
   * <p>报文格式</p>
   */
  ContentType: string
  /**
   * <p>请求方法</p><p>枚举值：</p><ul><li>GET： GET</li><li>PUT： PUT</li><li>POST： POST</li><li>DELETE： DELETE</li><li>PATCH： PATCH</li></ul>
   */
  Method: string
  /**
   * <p>展示</p>
   */
  DisplayName?: string
  /**
   * <p>输入参数</p>
   */
  InputParams?: Array<CNAPIGwMCPToolParam>
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>tool版本</p>
   */
  ToolVersion?: string
}

/**
 * DeleteCloudNativeAPIGatewayLLMModelAPI请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayLLMModelAPIRequest {
  /**
   * 网关 id。
   */
  GatewayId: string
  /**
   * 模型 API ID，全局唯一标识。
   */
  ModelAPIId: string
}

/**
 * LLM 模型 API 列表
 */
export interface ListCloudNativeAPIGatewayLLMModelAPI {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * AI 网关模型 API 列表。
   */
  DataList?: Array<CloudNativeAPIGatewayLLMModelAPI>
}

/**
 * DeleteCloudNativeAPIGatewayLLMModelService返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayLLMModelServiceResponse {
  /**
   * <p>是否成功。</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPRouteList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPRouteListResponse {
  /**
   * <p>路由列表信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: AIGWMCPRouteListResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI网关配额列表
 */
export interface AIGWQuotaList {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>配额列表</p>
   */
  DataList?: Array<AIGWQuota>
}

/**
 * 云原生网关路由信息
 */
export interface KongRoutePreview {
  /**
   * <p>服务ID</p>
   */
  ID: string
  /**
   * <p>服务名字</p>
   */
  Name?: string
  /**
   * <p>请求方法列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Methods?: Array<string>
  /**
   * <p>路由Paths列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Paths?: Array<string>
  /**
   * <p>路由Hosts列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hosts?: Array<string>
  /**
   * <p>协议列表</p>
   */
  Protocols?: Array<string>
  /**
   * <p>是否保留Host头</p>
   */
  PreserveHost?: boolean
  /**
   * <p>HTTPS重定向状态码</p>
   */
  HttpsRedirectStatusCode?: number
  /**
   * <p>是否去除路径前缀</p>
   */
  StripPath?: boolean
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>强制转换 https</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ForceHttps?: boolean
  /**
   * <p>服务名</p>
   */
  ServiceName?: string
  /**
   * <p>服务ID</p>
   */
  ServiceID?: string
  /**
   * <p>目的端口</p>
   */
  DestinationPorts?: Array<number | bigint>
  /**
   * <p>headers</p>
   */
  Headers?: Array<KVMapping>
  /**
   * <p>是否缓存请求body，默认true</p>
   */
  RequestBuffering?: boolean
  /**
   * <p>是否缓存响应body，默认true</p>
   */
  ResponseBuffering?: boolean
  /**
   * <p>正则优先级</p>
   */
  RegexPriority?: number
  /**
   * <p>querystring参数</p>
   */
  QueryStringParameters?: Array<KVMapping>
  /**
   * <p>路由来源</p>
   */
  RouteSource?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolsFromFile请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolsFromFileRequest {
  /**
   * <p>OpenAPI文件内容</p>
   */
  Content: string
  /**
   * <p>文件内容格式</p>
   */
  Format: string
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  MCPServerId: string
}

/**
 * OIDC 凭证物料配置
 */
export interface AIGWOIDCCredentialConfig {
  /**
   * <p>IdP 注册的 client_id</p>
   */
  ClientId: string
  /**
   * <p>IdP 注册的 client_secret</p>
   */
  ClientSecret: string
  /**
   * <p>IdP Issuer URL</p>
   */
  IssuerURL: string
  /**
   * <p>IdP 中该用户的 claim 值</p>
   */
  ConsumerClaimValue?: string
}

/**
 * 负载均衡配置，仅服务来源（ServiceSource，SourceId 非空）场景生效。
 */
export interface AIGWLoadBalanceConfig {
  /**
   * <p>负载均衡类型</p><p>枚举值：</p><ul><li>RoundRobin： 轮询</li><li>WeightedRoundRobin： 加权轮询</li><li>LeastConnections： 最少连接</li><li>Random： 随机</li></ul><p>默认值：RoundRobin</p>
   */
  Algorithm?: string
}

/**
 * CreateCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayConsumerGroupResponse {
  /**
   * <p>创建结果。包含成功标识与新建资源 ID。</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCloudNativeAPIGatewayMCPTools返回参数结构体
 */
export interface UpdateCloudNativeAPIGatewayMCPToolsResponse {
  /**
   * <p>导入任务的ID</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelAPI返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIResponse {
  /**
   * <p>模型 API 信息。</p>
   */
  Result?: CloudNativeAPIGatewayLLMModelAPI
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 新建消费者时为消费者自动绑定API密钥时自动生成密钥的参数体。仅当 SecretBindType="AutoGenerate" 时必填，其他分支禁止携带，否则返回 InvalidParameterValue.CreateError。
 */
export interface AutoSecretKey {
  /**
   * <p>密钥名称，2-60 字符。</p><p>字符集与「密钥管理-新建密钥」一致（中英文、数字、下划线、短横线），禁止 -share 后缀，同网关内不可重名。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * <p>密钥描述。长度 ≤ 200，可为空。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerStatus返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerStatusResponse {
  /**
   * <p>创建结果</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolVersion返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolVersionResponse {
  /**
   * <p>tool版本的json snapshot</p>
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云原生网关MCP后端信息，用于展示
 */
export interface AIGWMCPUpstreamInfoDetail {
  /**
   * <p>注册中心来源ID</p>
   */
  SourceId?: string
  /**
   * <p>注册中心来源名称, 入参不传，用于返回</p>
   */
  SourceName?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>服务 id</p>
   */
  MCPServerId?: string
  /**
   * <p>协议，UpstreamType是Registry 时必传</p><ul><li>http</li><li>https</li></ul>
   */
  Protocol?: string
  /**
   * <p>域名或ip</p>
   */
  Host?: string
  /**
   * <p>端口</p>
   */
  Port?: number
  /**
   * <p>服务 id</p>
   */
  ServiceId?: string
  /**
   * <p>服务名字</p>
   */
  ServiceName?: string
  /**
   * <p>服务分组</p>
   */
  ServiceGroup?: string
  /**
   * <p>mcp endpoint</p>
   */
  MCPEndpoint?: string
  /**
   * <p>SSE message路径</p>
   */
  MessageEndpoint?: string
  /**
   * <p>TLS配置</p>
   */
  TLSConfig?: AIGWUpstreamTLSConfig
}

/**
 * MCP 路由列表分页查询结果
 */
export interface AIGWMCPRouteListResult {
  /**
   * <p>路由列表</p>
   */
  DataList?: Array<AIGWMCPRoute>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelAPI请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>模型 API ID，全局唯一标识。</p>
   */
  ModelAPIId: string
}

/**
 * AI网关成本报表列表维度信息
 */
export interface AIGWLLMResourceDimension {
  /**
   * <p>维度Key</p>
   */
  Key?: string
  /**
   * <p>维度值</p>
   */
  Values?: Array<string>
}

/**
 * DescribeCloudNativeAPIGatewaySecretKeyList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyListRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>每页条数，范围 [1, 100]，默认 10。</p>
   */
  Limit: number
  /**
   * <p>起始位置，从 0 开始。</p>
   */
  Offset: number
  /**
   * <p>过滤条件。支持的 Name：Status / GenerateType / SecretType。</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>模糊匹配密钥名称。</p>
   */
  Keyword?: string
  /**
   * <p>对应资源的 ID（消费者 ID 或模型服务 ID）。</p>
   */
  ResourceId?: string
  /**
   * <p>密钥归属资源类型。UseToBind=true 时必填。</p><p>枚举值：</p><ul><li>Consumer：消费者</li><li>ModelService：模型服务</li></ul>
   */
  ResourceType?: string
  /**
   * <p>是否用于绑定场景。true 时返回可被绑定到指定资源的密钥。</p>
   */
  UseToBind?: boolean
  /**
   * <p>可选 Boolean，默认 false。仅传 true 且返回记录 ResourceType=Consumer 时，额外返回 CredentialGenerateType、CreationSource、BatchId；省略或 false 时不返回这三个字段，原字段和返回结构保持不变。此参数只控制展示字段，不控制 Filters 是否生效。</p>
   */
  IncludeCreationInfo?: boolean
}

/**
 * 键值对
 */
export interface KVMapping {
  /**
   * 键值映射的键
   */
  Key?: string
  /**
   * 键值映射的值
   */
  Value?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPRoute返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * mcp tool版本信息
 */
export interface AIGWMCPToolVersion {
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>创建者</p>
   */
  Creator?: string
  /**
   * <p>是否生效</p>
   */
  IsActive?: boolean
  /**
   * <p>总参数</p>
   */
  TotalParam?: number
  /**
   * <p>版本号</p>
   */
  Version?: string
}

/**
 * AI的服务来源授权信息
 */
export interface CNAPIGwAIServiceSourceAuth {
  /**
   * <p>账号</p>
   */
  Username?: string
  /**
   * <p>密码</p>
   */
  Password?: string
  /**
   * <p>接入Token</p>
   */
  AccessToken?: string
}

/**
 * AI 网关token长度路由配置
 */
export interface AIGWTokenLengthRoute {
  /**
   * <p>默认tokenizer编码器</p><p>枚举值：</p><ul><li>o200k_base： OpenApi o200k_base</li><li>cl100k_base： OpenApi cl100k_base</li><li>p50k_base： OpenApi p50k_base</li><li>r50k_base： OpenApi r50k_base</li></ul>
   */
  DefaultEncodingName?: string
  /**
   * <p>token 计数失败、规则为空或未命中任何规则时执行的默认二级路由（暂时只能选择一个指定模型路由）</p>
   */
  DefaultTarget?: AIGWLLMModelServiceSubRoute
  /**
   * <p>规则</p>
   */
  Rules?: Array<AIGWTokenLengthRouteRule>
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolsFromFile返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolsFromFileResponse {
  /**
   * <p>解析结果</p>
   */
  Result?: CNAPIGwParseMCPToolsResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolVersionList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolVersionListRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>分页查询limit</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移</p>
   */
  Offset?: number
}

/**
 * 缓存感知路由候选模型服务
 */
export interface AIGWCacheAwareRouteCandidate {
  /**
   * <p>模型服务ID</p>
   */
  ModelServiceId?: string
  /**
   * <p>模型服务名称</p>
   */
  ModelServiceName?: string
}

/**
 * AI服务来源
 */
export interface CNAPIGwAIServiceSource {
  /**
   * <p>服务来源</p>
   */
  SourceName: string
  /**
   * <p>服务ID</p>
   */
  SourceId: string
  /**
   * <p>来源类型</p>
   */
  SourceType: string
  /**
   * <p>来源产品</p>
   */
  SourceProduct: string
  /**
   * <p>来源配置信息</p>
   */
  SourceInfo: CNAPIGwAIServiceSourceInfo
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
}

/**
 * ModifyCloudNativeAPIGatewayAIServiceSource返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayAIServiceSourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI网关LLM健康检查配置
 */
export interface AIGWLLMHealthCheckSetting {
  /**
   * <p>检查失败阈值</p>
   */
  HealthCheckFailThreshold: number
  /**
   * <p>检查间隔</p>
   */
  HealthCheckIntervalSecond: number
  /**
   * <p>检查恢复阈值</p>
   */
  HealthCheckRecoverThreshold: number
  /**
   * <p>检查超时时间</p>
   */
  HealthCheckTimeout: number
  /**
   * <p>检查路径</p>
   */
  HealthCheckPath?: string
}

/**
 * DescribeCloudNativeAPIGatewayAIQuota返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIQuotaResponse {
  /**
   * <p>配额详情</p>
   */
  Result?: AIGWQuotaDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayAIServiceSourceList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIServiceSourceListRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>分页大小</p>
   */
  Limit: number
  /**
   * <p>分页偏移</p>
   */
  Offset: number
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerACL返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerACLResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackCloudNativeAPIGatewayMCPToolVersion请求参数结构体
 */
export interface RollbackCloudNativeAPIGatewayMCPToolVersionRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>mcp tool版本</p>
   */
  ToolVersion: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolVersion请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolVersionRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>tool版本id</p>
   */
  ToolVersion: string
}

/**
 * DeleteCloudNativeAPIGatewayMCPServer请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPServerRequest {
  /**
   * <p>云原生API网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
}

/**
 * Kong Upstream中的Target
 */
export interface KongTarget {
  /**
   * 目标主机地址
   */
  Host: string
  /**
   * 端口
   */
  Port: number
  /**
   * 权重
   */
  Weight: number
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * CVM实例ID
   */
  CvmInstanceId?: string
  /**
   * CVM实例名称
   */
  CvmInstanceName?: string
  /**
   * 健康状态
   */
  Health?: string
  /**
   * Target的来源
   */
  Source?: string
  /**
   * target标签
   */
  Tags?: Array<string>
}

/**
 * DeleteCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPTool请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server id</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest {
  /**
   * <p>网关实例Id</p>
   */
  GatewayId: string
  /**
   * <p>查询开始时间戳</p><p>单位：秒</p>
   */
  StartTime: number
  /**
   * <p>查询结束时间戳</p><p>单位：秒</p>
   */
  EndTime: number
  /**
   * <p>查询过滤条件</p>
   */
  Filters?: Array<Filter>
}

/**
 * CreateCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface CreateCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>密钥生成方式。</p><p>枚举值：</p><ul><li>System：系统自动生成</li><li>Custom：用户自定义（需传 SecretValue）</li><li>KMS：使用 KMS 密钥（需传 KmsKeyName 与 KmsKeyVersion）</li></ul>
   */
  GenerateType: string
  /**
   * <p>密钥名称，2-60 字符。</p>
   */
  Name: string
  /**
   * <p>密钥归属资源类型。</p><p>枚举值：</p><ul><li>Consumer：消费者</li><li>ModelService：模型服务</li></ul>
   */
  ResourceType: string
  /**
   * <p>密钥协议类型。</p><p>枚举值：</p><ul><li>ApiKey</li><li>Basic</li><li>Hmac</li><li>OAuth2</li><li>JWT</li></ul>
   */
  SecretType: string
  /**
   * <p>密钥描述。最长 200 字符。</p>
   */
  Description?: string
  /**
   * <p>JWT凭证配置</p>
   */
  JWTCredentialConfig?: AIGWJWTCredentialConfig
  /**
   * <p>KMS 密钥名称。GenerateType=KMS 时必填。</p>
   */
  KmsKeyName?: string
  /**
   * <p>KMS 密钥版本。GenerateType=KMS 时必填。</p>
   */
  KmsKeyVersion?: string
  /**
   * <p>OAuth2.0凭证配置</p>
   */
  OAuthCredentialConfig?: AIGWOAuthCredentialConfig
  /**
   * <p>OIDC凭证配置</p>
   */
  OIDCCredentialConfig?: AIGWOIDCCredentialConfig
  /**
   * <p>第三方平台类型</p><p>枚举值：</p><ul><li>Dify： Dify平台</li></ul>
   */
  Provider?: string
  /**
   * <p>密钥值，长度 8-256。GenerateType=Custom 时必填。</p>
   */
  SecretValue?: string
  /**
   * <p>AK/SK凭证配置</p>
   */
  AKSKCredentialConfig?: AIGWAKSKCredentialConfig
  /**
   * <p>CAM凭证配置</p>
   */
  CAMCredentialConfig?: AIGWCAMCredentialConfig
  /**
   * <p>Bearer Token凭证配置</p>
   */
  BearerTokenCredentialConfig?: AIGWBearerTokenCredentialConfig
  /**
   * <p>自定义Header凭证配置</p>
   */
  CustomHeaderCredentialConfig?: AIGWCustomHeaderCredentialConfig
  /**
   * <p>自定义Query参数凭证配置</p>
   */
  QueryParamCredentialConfig?: AIGWQueryParamCredentialConfig
  /**
   * <p>Basic Auth凭证配置</p>
   */
  BasicCredentialConfig?: AIGWBasicCredentialConfig
}

/**
 * AI 网关配额详情
 */
export interface AIGWQuotaDetail {
  /**
   * <p>id</p>
   */
  Id?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>Consumer： 消费者</li></ul>
   */
  ResourceType?: string
  /**
   * <p>资源id</p>
   */
  ResourceId?: string
  /**
   * <p>资源名字</p>
   */
  ResourceName?: string
  /**
   * <p>配额类型</p><p>枚举值：</p><ul><li>RequestCount： 请求数</li><li>TotalToken： token总数</li><li>Cost： 成本</li></ul>
   */
  QuotaType?: string
  /**
   * <p>配额单位</p><p>枚举值：</p><ul><li>Day： 天</li><li>Week： 周</li><li>Month： 月</li></ul>
   */
  PeriodUnit?: string
  /**
   * <p>配额</p><p>如果是成本则数值单位是分，如 1000 表示 10.00 元</p>
   */
  QuotaLimit?: number
  /**
   * <p>启用</p>
   */
  Enabled?: boolean
  /**
   * <p>用量</p>
   */
  Used?: number
  /**
   * <p>使用率</p>
   */
  UsageRate?: number
  /**
   * <p>预警级别</p><p>枚举值：</p><ul><li>Normal： 正常</li><li>Warning： 预警</li><li>NearLimit： 临近超限</li><li>Exceeded： 超限</li></ul>
   */
  AlarmLevel?: string
  /**
   * <p>配额规则来源</p><p>枚举值：</p><ul><li>Manual： 手动配置</li><li>Default： 默认配额</li></ul>
   */
  Source?: string
  /**
   * <p>配额超限行为</p><p>枚举值：</p><ul><li>Reject： 拒绝消费者请求</li><li>AllowOverage： 允许超限</li></ul>
   */
  ExceedAction?: string
  /**
   * <p>创建时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * <p>缓存是否计入限额</p><p>枚举值：</p><ul><li>Full： 全量计入</li><li>Exclude： 不计入网关缓存命中部分</li></ul>
   */
  CacheHitStat?: string
  /**
   * <p>是否设置超限百分比</p><p>仅 Consumer 的 AllowOverage 场景可用，指定模型服务的配额必须为 false；ConsumerGroup 必须为 false。</p><p>枚举值：</p><ul><li>true： 设置超限百分比</li><li>false： 不设置超限百分比，即不设上限</li></ul><p>默认值：false</p><p>当ExceedAction=AllowOverage时，条件必选。</p>
   */
  SetExceedPercentage?: boolean
  /**
   * <p>超限百分比</p><p>默认值：0</p><p>Consumer 的超量百分比，指定模型服务配额默认为 0；ConsumerGroup 固定为 0。</p><p>举例：20，超出设置额度的20%，可用额度为（1+20%）*QuotaLimit。当SetExceedPercentage=true时，条件必选。</p>
   */
  ExceedPercentage?: number
  /**
   * <p>精确使用量。Cost 单位为元，保留 1e-7 元精度；TotalToken 单位为 token；RequestCount 单位为次。旧版插件不提供精确值时省略，调用方可回退使用 Used；该值已换算为业务单位，不要再除以 ValueScale。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedExact?: number
  /**
   * <p>消费者组完整层级路径。仅 ResourceType=ConsumerGroup 返回，未知时为空字符串；Consumer 行省略。</p>
   */
  ConsumerGroupPath?: string
  /**
   * <p>消费者组是否有效。仅 ResourceType=ConsumerGroup 返回；组不存在或非 active 时为 false。与配额规则 Enabled 区分，字段省略与 false 含义不同。</p>
   */
  ConsumerGroupActive?: boolean
  /**
   * <p>配额规则中，某资源对象的指定子资源配额信息。如资源对象“模型服务”的“指定模型服务”的配额信息。</p>
   */
  SubResources?: Array<AIGWQuotaSubItem>
}

/**
 * DescribeCloudNativeAPIGatewayMCPServer返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerResponse {
  /**
   * <p>mcp server详情</p>
   */
  Result?: AIGWMCPServer
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回kong的服务和路由列表
 */
export interface KongServiceWithRoutes {
  /**
   * 服务及路由列表
   */
  ServiceList?: Array<KongServiceRoute>
  /**
   * 总数
   */
  TotalCount?: number
}

/**
 * 缓存感知路由
 */
export interface AIGWCacheAwareRouteConfig {
  /**
   * <p>前缀缓存感知路由模型服务列表</p>
   */
  Candidates?: Array<AIGWCacheAwareRouteCandidate>
}

/**
 * ModifyCloudNativeAPIGatewayMCPToolACL请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolACLRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
  /**
   * <p>MCP工具ID</p>
   */
  ToolId: string
  /**
   * <p>鉴权类型</p><p>枚举值：</p><ul><li>None： 继承server鉴权类型</li><li>Allow： 白名单</li><li>Deny： 黑名单</li></ul>
   */
  ACLType: string
  /**
   * <p>需要关联的消费者ID列表</p>
   */
  ACLConsumerIds?: Array<string>
  /**
   * <p>需要关联的消费者组ID列表</p>
   */
  ACLConsumerGroupIds?: Array<string>
}

/**
 * CreateCloudNativeAPIGatewayMCPServer返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPServerResponse {
  /**
   * <p>创建结果</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCloudNativeAPIGatewayMCPTools请求参数结构体
 */
export interface UpdateCloudNativeAPIGatewayMCPToolsRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  MCPServerId: string
  /**
   * <p>待导入的MCP Tools列表</p>
   */
  Tools: Array<CNAPIGwMCPTool>
}

/**
 * 用于定义kong插件自定义健康检查的配置
 */
export interface AIGWHealthCheckSetting {
  /**
   * <p>健康检查类型</p><p>枚举值：</p><ul><li>MCP： 标准mcp</li><li>HTTP： http</li></ul>
   */
  HealthCheckType: string
  /**
   * <p>检查间隔</p>
   */
  HealthCheckIntervalSecond: number
  /**
   * <p>检查超时时间</p>
   */
  HealthCheckTimeout: number
  /**
   * <p>检查失败阈值</p>
   */
  HealthCheckFailThreshold: number
  /**
   * <p>检查恢复阈值</p>
   */
  HealthCheckRecoverThreshold: number
  /**
   * <p>检查路径</p>
   */
  HealthCheckPath?: string
  /**
   * <p>检查方法</p>
   */
  HealthCheckMethod?: string
}

/**
 * AI 网关token消耗统计汇总响应结果
 */
export interface AIGWLLMTokenUsageStatisticsResult {
  /**
   * <p>查询时间范围内请求总数</p>
   */
  TotalRequestCount?: number
  /**
   * <p>查询时间范围内总输入Token数（包含命中缓存的Token数）</p>
   */
  TotalInputTokens?: number
  /**
   * <p>查询时间范围内总输出Token数</p>
   */
  TotalOutputTokens?: number
  /**
   * <p>查询时间范围内总命中缓存输入Token数</p>
   */
  TotalCachedReadInputTokens?: number
  /**
   * <p>查询时间范围内总成本</p>
   */
  TotalCost?: string
  /**
   * <p>成本货币单位</p>
   */
  Currency?: string
  /**
   * <p>未传 Dimension 时返回原消费者排行；传入 Dimension 时为 []。ConsumerGroup 汇总不逐组拆分。</p>
   */
  TopConsumers?: Array<AIGWTopConsumersItem>
  /**
   * <p>查询时间范围内原始 total_tokens 累计</p>
   */
  TotalTokens?: number
  /**
   * <p>组织归属是否不完整。网关版本不低于 3.9.8，使用 ConsumerGroup 维度或 ConsumerGroupId / ConsumerGroupName 筛选时返回，其余请求省略。true 表示时间及业务筛选范围内存在组归属未知的日志；检查不受组筛选条件遮蔽，空结果也执行检查。组范围统计仅计入可归因日志。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgAttributionIncomplete?: boolean
}

/**
 * CreateCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayConsumerRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>消费者名称，最长 60 字符。同一网关下唯一。</p>
   */
  Name: string
  /**
   * <p>优先级</p><p>枚举值：</p><ul><li>High： 高优</li><li>Medium： 中优</li><li>Low： 低优</li></ul>
   */
  Priority?: string
  /**
   * <p>消费者描述。最长 200 字符。</p>
   */
  Description?: string
  /**
   * <p>调用业务来源，可选 Legacy 或 CustomOrganization；省略或空串按 Legacy。Legacy 保持原行为，CustomOrganization 用于自定义组织架构。该字段不替代鉴权，不改变资源归属，不覆盖 RequestSource。来源保存在操作记录请求内容中。</p>
   */
  OperationSource?: string
  /**
   * <p>仅 CustomOrganization 使用 Active 或 Disabled，默认 Active。Legacy 不新增状态行为。</p>
   */
  Status?: string
  /**
   * <p>密钥关联方式，三选一枚举。不传时兼容老逻辑（等价于 None 或 Existing，取决于是否传 SecretKeyId）</p><p>枚举值：</p><ul><li>Existing： 选择已有密钥</li><li>AutoGenerate： 自动生成并关联密钥</li><li>None： 暂不关联密钥</li></ul><p>默认值：None</p>
   */
  SecretBindType?: string
  /**
   * <p>自动生成密钥的参数体。仅当 SecretBindType=&quot;AutoGenerate&quot; 时必填，其他分支禁止携带，否则返回 InvalidParameterValue.CreateError。</p>
   */
  AutoSecretKey?: AutoSecretKey
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerStatus请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerStatusRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>mcp server id</p>
   */
  ServerId: string
  /**
   * <p>mcp server状态</p><p>枚举值：</p><ul><li>Online： 上线</li><li>Offline： 下线</li></ul>
   */
  Status: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表过滤条件，模糊匹配
 */
export interface ListFilter {
  /**
   * 过滤字段
   */
  Key?: string
  /**
   * 过滤值
   */
  Value?: string
}

/**
 * RemoveCloudNativeAPIGatewayConsumerInGroup返回参数结构体
 */
export interface RemoveCloudNativeAPIGatewayConsumerInGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 跨服务降级配置
 */
export interface AIGWCrossServiceFallbackConfig {
  /**
   * <p>触发条件</p><p>枚举值：</p><ul><li>ServiceUnavailable： 服务不可用</li><li>ConnectionTimeout： 连接超时</li><li>RateLimited： 限流</li></ul>
   */
  TriggerConditions: Array<string>
  /**
   * <p>fallback 服务链</p>
   */
  FallbackServiceChain: Array<AIGWFallbackServiceItem>
  /**
   * <p>额度降级触发配置</p>
   */
  QuotaFallbackTrigger?: AIGWLLMQuotaFallbackTrigger
}

/**
 * AI网关Upstream TLS配置
 */
export interface AIGWUpstreamTLSConfig {
  /**
   * <p>是否校验上游服务端证书</p><p>默认值：false</p>
   */
  TLSVerify?: boolean
  /**
   * <p>客户端证书 ID（mTLS 用）</p>
   */
  ClientCertId?: string
  /**
   * <p>信任的 CA 证书 ID 列表</p>
   */
  UpstreamCACertIds?: Array<string>
}

/**
 * AI网关消费者模型范围
 */
export interface AIGWConsumerModelScope {
  /**
   * <p>消费者模型生效范围类型</p><p>枚举值：</p><ul><li>INHERIT： 继承所在消费者组的生效模型范围</li><li>ALLOWLIST： 自定义白名单，必须 ⊆ 所在组针对该资源的生效模型集合</li></ul>
   */
  ScopeType?: string
  /**
   * <p>模型授权白名单列表</p>
   */
  AllowList?: Array<string>
}

/**
 * DeleteCloudNativeAPIGatewayMCPRoute请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPRouteRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>路由ID</p>
   */
  RouteId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelAPIs返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIsResponse {
  /**
   * <p>模型 API 列表。</p>
   */
  Result?: ListCloudNativeAPIGatewayLLMModelAPI
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CompareCloudNativeAPIGatewayMCPToolVersion请求参数结构体
 */
export interface CompareCloudNativeAPIGatewayMCPToolVersionRequest {
  /**
   * <p>对比源版本号</p>
   */
  BaseVersion: string
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>对比目标版本号</p>
   */
  TargetVersion: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
}

/**
 * AddCloudNativeAPIGatewayConsumerInGroup请求参数结构体
 */
export interface AddCloudNativeAPIGatewayConsumerInGroupRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * <p>消费者组 ID（以 cg- 开头）。</p>
   */
  ConsumerGroupId: string
  /**
   * <p>消费者 ID 列表，长度 1-10。</p>
   */
  ConsumerIds: Array<string>
}

/**
 * CreateCloudNativeAPIGatewayConsumer返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayConsumerResponse {
  /**
   * <p>创建结果。包含成功标识与新建资源 ID。</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MCP路由对象
 */
export interface AIGWMCPRoute {
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>路由表达式</p>
   */
  Expression?: string
  /**
   * <p>Header匹配规则</p>
   */
  HeaderMatch?: Array<AIGWHeaderRule>
  /**
   * <p>是否为默认路由</p><p>枚举值：</p><ul><li>true： 是</li><li>false： 否</li></ul>
   */
  IsDefault?: boolean
  /**
   * <p>http path</p>
   */
  Methods?: Array<string>
  /**
   * <p>路由名称</p>
   */
  Name?: string
  /**
   * <p>路由路径</p>
   */
  Path?: string
  /**
   * <p>路径匹配方式</p><p>枚举值：</p><ul><li>Exact： 精确</li><li>Prefix： 前缀</li><li>Regex： 正则</li></ul>
   */
  PathMatchType?: string
  /**
   * <p>优先级</p>
   */
  Priority?: number
  /**
   * <p>路由ID</p>
   */
  RouteId?: string
  /**
   * <p>启用/禁用状态</p><p>枚举值：</p><ul><li>Enabled： 启用</li><li>Disabled： 禁用</li></ul>
   */
  Status?: string
  /**
   * <p>是否开启保留原Host功能</p>
   */
  PreserveHost?: boolean
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerACL请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerACLRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
  /**
   * <p>ACL类型</p><p>枚举值：</p><ul><li>None： 不开启</li><li>Allow： 白名单</li><li>Deny： 黑名单</li></ul><p>默认值：None</p>
   */
  ACLType: string
  /**
   * <p>需要关联的消费者ID列表</p>
   */
  ACLConsumerIds?: Array<string>
  /**
   * <p>需要关联的消费者组ID列表</p>
   */
  ACLConsumerGroupIds?: Array<string>
}

/**
 * 模型服务模型名称路由策略
 */
export interface CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy {
  /**
   * <p>模型服务id</p>
   */
  ModelServiceId: string
  /**
   * <p>匹配模型服务</p>
   */
  MatchModelName: string
  /**
   * <p>重写模型</p>
   */
  RewriteModelName?: string
  /**
   * <p>当前模型名称匹配路由条目中 ModelServiceId 对应的标准模型名称；为空表示未配置。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * DeleteCloudNativeAPIGatewayLLMModelAPI返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayLLMModelAPIResponse {
  /**
   * <p>是否成功。</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 简单密钥信息
 */
export interface AIGWSimpleSecretKey {
  /**
   * <p>密钥ID</p>
   */
  SecretKeyId?: string
  /**
   * <p>密钥名称</p>
   */
  Name?: string
  /**
   * <p>启用状态</p><p>枚举值：</p><ul><li>Enable： 启动</li><li>Disable： 禁用</li></ul>
   */
  Status?: string
  /**
   * <p>密钥类型</p><p>枚举值：</p><ul><li>ApiKey： ApiKey类型</li></ul>
   */
  SecretType?: string
  /**
   * <p>创建时间</p><p>参数格式：2026-09-03 14:11:05</p>
   */
  CreateTime?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerListResponse {
  /**
   * <p>MCP Server 列表结果</p>
   */
  Result?: AIGWMCPServerList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Token用量统计结果
 */
export interface AIGWLLMTokenUsageListResult {
  /**
   * <p>网关版本不低于 3.9.8 且 Dimension=ConsumerGroup 时，未指定节点筛选则列出 Kong CP 当前目录的全部真实节点，包含同步、自定义、禁用及保留中的软删节点，排除合成展示节点。按当前名称、节点 UUID 升序，先分页节点再查询历史指标；无调用节点仍返回，Token 与请求数补零。节点指标包含历史下属，同一请求可计入多个组行，不能逐行相加作为网关总量。</p>
   */
  DataList?: Array<AIGWLLMTokenUsageItem>
  /**
   * <p>筛选后的结果总数。新版 ConsumerGroup 查询为候选节点总数，包含无调用节点，不受 Limit / Offset 影响。</p>
   */
  TotalCount?: number
  /**
   * <p>组织归属是否不完整。网关版本不低于 3.9.8，使用 ConsumerGroup 维度或 ConsumerGroupId / ConsumerGroupName 筛选时返回，其余请求省略。true 表示时间及业务筛选范围内存在组归属未知的日志；检查不受组筛选条件遮蔽，空结果也执行检查。组范围统计仅计入可归因日志。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgAttributionIncomplete?: boolean
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerAuth返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerAuthResponse {
  /**
   * <p>MCP服务认证查询结果</p>
   */
  Result?: AIGWMCPServerAuthResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MCP Tools的导入结果
 */
export interface CNAPIGwMCPToolImportResult {
  /**
   * <p>导入失败的原因信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedMessage?: string
  /**
   * <p>请求方法</p>
   */
  Method?: string
  /**
   * <p>MCP Tool 名字</p>
   */
  Name?: string
  /**
   * <p>MCP Tool的请求路径</p>
   */
  Path?: string
  /**
   * <p>导入结果</p><p>枚举值：</p><ul><li>Waiting： 等待导入</li><li>Success： 导入成功</li><li>Failed： 导入失败</li></ul>
   */
  Status?: string
  /**
   * <p>虚拟MCP Server的Tool的完整后端地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamUrl?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPRoute请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPRouteRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>Route ID</p>
   */
  RouteId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>Header 匹配规则</p>
   */
  HeaderMatch?: Array<AIGWHeaderRule>
  /**
   * <p>http method</p>
   */
  Methods?: Array<string>
  /**
   * <p>路径</p>
   */
  Path?: string
  /**
   * <p>匹配规则</p><p>枚举值：</p><ul><li>Exact： 精确</li><li>Prefix： 前缀</li><li>Regex： 正则</li></ul>
   */
  PathMatchType?: string
  /**
   * <p>路由优先级</p>
   */
  Priority?: number
}

/**
 * 通过OpenAPI文件导入MCP tools的预览内容
 */
export interface CNAPIGwMCPToolPreview {
  /**
   * <p>MCP Tool入参的ContentType</p><p>枚举值：</p><ul><li>application/json： json格式</li><li>application/x-www-form-urlencoded： 表单格式</li></ul>
   */
  ContentType?: string
  /**
   * <p>MCP Tool的描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>MCP Tool的参数</p>
   */
  InputParams?: Array<CNAPIGwMCPToolParam>
  /**
   * <p>MCP Tool的请求方法</p>
   */
  Method?: string
  /**
   * <p>MCP Tool名字</p>
   */
  Name?: string
  /**
   * <p>MCP Tool的请求路径</p>
   */
  Path?: string
  /**
   * <p>MCP Tool的状态</p><p>枚举值：</p><ul><li>Valid： 可导入</li><li>Invalid： 不可导入</li></ul>
   */
  Status?: string
  /**
   * <p>不可导入的原因</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMessage?: string
  /**
   * <p>虚拟MCP Server的tools的完整url路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamUrl?: string
}

/**
 * MCP Tool 信息
 */
export interface CNAPIGwMCPTool {
  /**
   * <p>名字</p>
   */
  Name: string
  /**
   * <p>展示名字</p>
   */
  DisplayName: string
  /**
   * <p>方法</p><p>枚举值：</p><ul><li>GET： GET</li><li>POST： POST</li><li>PUT： PUT</li><li>DELETE： DELETE</li><li>PATCH： PATCH</li></ul>
   */
  Method: string
  /**
   * <p>描述</p>
   */
  Description: string
  /**
   * <p>工具 id</p>
   */
  ToolId?: string
  /**
   * <p>报文格式</p>
   */
  ContentType?: string
  /**
   * <p>服务 id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * <p>路径</p>
   */
  Path?: string
  /**
   * <p>参数</p>
   */
  InputParams?: Array<CNAPIGwMCPToolParam>
  /**
   * <p>创建时间</p><p>参数格式：yyyy-MM-dd hh:mm:ss</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p><p>参数格式：yyyy-MM-dd hh:mm:ss</p>
   */
  UpdateTime?: string
  /**
   * <p>tool状态</p><p>枚举值：</p><ul><li>Enable： 启用</li><li>Disable： 禁用</li></ul>
   */
  Status?: string
  /**
   * <p>当前版本号</p>
   */
  CurrentVersion?: string
}

/**
 * ModifyCloudNativeAPIGatewayAIServiceSource请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayAIServiceSourceRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>服务来源名字</p>
   */
  SourceName: string
  /**
   * <p>服务来源类型</p><p>枚举值：</p><ul><li>Registry： 普通注册中心</li><li>MCPRegistry： MCP注册中心</li><li>DNS： 域名服务</li></ul>
   */
  SourceType?: string
  /**
   * <p>服务来源id</p>
   */
  SourceId?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>来源信息</p>
   */
  SourceInfo?: CNAPIGwAIServiceSourceInfo
}

/**
 * AI 网关 Tool ACL 单条记录（DescribeMCPToolACLList 数组元素）
 */
export interface AIGWMCPToolACLItem {
  /**
   * <p>MCP工具ID</p>
   */
  ToolId?: string
  /**
   * <p>MCP工具名称</p>
   */
  ToolName?: string
  /**
   * <p>MCP工具鉴权类型</p><p>枚举值：</p><ul><li>None： 继承server鉴权类型</li><li>Allow： 白名单</li><li>Deny： 黑名单</li></ul>
   */
  ACLType?: string
  /**
   * <p>关联的消费者ID列表</p>
   */
  ACLConsumers?: Array<AIGWACLSubject>
  /**
   * <p>关联的消费者组ID列表</p>
   */
  ACLConsumerGroups?: Array<AIGWACLSubject>
}

/**
 * DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse {
  /**
   * <p>请求结果</p>
   */
  Result?: AIGWLLMTokenUsageStatisticsResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayAIQuotaList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIQuotaListRequest {
  /**
   * <p>网关实例Id</p>
   */
  GatewayId: string
  /**
   * <p>开始位置</p>
   */
  Offset: number
  /**
   * <p>每页数量</p>
   */
  Limit: number
  /**
   * <p>关键字</p>
   */
  Keyword?: string
  /**
   * 可选过滤条件，不同 Name 为 AND，同一 Values 为 OR。支持 ResourceType（单值 Consumer 或 ConsumerGroup，省略默认 Consumer）、ResourceId（资源 ID，1～100 项）、ConsumerId（仅 Consumer 可用）、Source（Manual / Default / DefaultPolicy）、QuotaId、QuotaType（RequestCount / TotalToken / Cost）、PeriodUnit（Day / Week / Month / Year / Unlimit）。Values 不得为空，QuotaId、QuotaType、PeriodUnit 各为 1～100 项。ConsumerGroup 使用 ResourceId，不使用 ConsumerId；不自动展开上下级。Source 省略时排除 DefaultPolicy。
   */
  Filters?: Array<Filter>
  /**
   * <p>配额预警级别</p><p>枚举值：</p><ul><li>Normal： 正常</li><li>Warning： 预警</li><li>NearLimit： 临近超限</li><li>Exceeded： 超限</li></ul>
   */
  AlarmLevels?: Array<string>
}

/**
 * ModifyCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * 实例 ID
   */
  GatewayId: string
  /**
   * 密钥名字
   */
  Name: string
  /**
   * 密钥id
   */
  SecretKeyId: string
  /**
   * 描述,200字以内
   */
  Description?: string
}

/**
 * LLM 模型服务列表
 */
export interface ListCloudNativeAPIGatewayLLMModelService {
  /**
   * 模型服务数量。
   */
  TotalCount?: number
  /**
   * 模型服务列表。
   */
  DataList?: Array<CloudNativeAPIGatewayLLMModelService>
}

/**
 * DescribeCNGWServicesWithRoutes请求参数结构体
 */
export interface DescribeCNGWServicesWithRoutesRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>列表数量</p>
   */
  Limit?: number
  /**
   * <p>列表 offset</p>
   */
  Offset?: number
  /**
   * <p>过滤条件，多个过滤条件之间是与的关系，支持 name,upstreamType</p>
   */
  Filters?: Array<ListFilter>
}

/**
 * DescribeCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * <p>密钥详情。</p>
   */
  Result?: CNAPIGwSecretKey
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerACL返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerACLResponse {
  /**
   * <p>MCP 服务 ACL 列表结果</p>
   */
  Result?: AIGWMCPServerACLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayAIServiceSourceList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIServiceSourceListResponse {
  /**
   * <p>MCP Server 列表结果</p>
   */
  Result?: CNAPIGwAIServiceSourceList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPRouteList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPRouteListRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>分页限制</p>
   */
  Limit?: number
  /**
   * <p>分页偏移</p>
   */
  Offset?: number
}

/**
 * ModifyCloudNativeAPIGatewayMCPServer返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCloudNativeAPIGatewayMCPRouteMatch请求参数结构体
 */
export interface CheckCloudNativeAPIGatewayMCPRouteMatchRequest {
  /**
   * <p>网关 ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>Modify时用于排除自身的Route ID</p>
   */
  ExcludeRouteId?: string
  /**
   * <p>Head匹配规则</p>
   */
  HeaderMatch?: Array<AIGWHeaderRule>
  /**
   * <p>http method</p>
   */
  Methods?: Array<string>
  /**
   * <p>路径</p>
   */
  Path?: string
  /**
   * <p>path的匹配方式</p><p>枚举值：</p><ul><li>Exact： 精确</li><li>Prefix： 前缀</li><li>Regex： 正则</li></ul>
   */
  PathMatchType?: string
}

/**
 * 云原生网关模型API 配额降级触发条件信息
 */
export interface AIGWLLMQuotaFallbackTrigger {
  /**
   * <p>配额感知阈值百分比（RPM 与 TPM 共用）</p><p>取值范围：[0, 99]</p>
   */
  ThresholdPercent?: number
  /**
   * <p>检查维度策略</p><p>枚举值：</p><ul><li>AnyInsufficient：  RPM 或 TPM 任一不足即触发</li><li>AllInsufficient： RPM 和 TPM 同时不足才触发</li></ul>
   */
  CheckDimension?: string
}

/**
 * RemoveCloudNativeAPIGatewayConsumerGroupAuth请求参数结构体
 */
export interface RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>授权资源类型。</p><p>枚举值：</p><ul><li>ModelAPI：模型 API</li><li>MCPServer：MCP Server</li></ul>
   */
  ResourceType: string
  /**
   * <p>对应资源的 ID。</p><ul><li>ResourceType=ModelAPI 时是模型 API ID</li><li>ResourceType=MCPServer 时是 MCP Server ID</li></ul>
   */
  ResourceId: string
  /**
   * <p>消费者组 ID 列表（每个 ID 以 cg- 开头），长度 1-10。</p>
   */
  ConsumerGroupIds: Array<string>
}

/**
 * AI网关入口按模型名称路由
 */
export interface AIGWModelNameRoute {
  /**
   * <p>模型名称和别名列表；对象存在即启用</p>
   */
  ModelNames?: Array<string>
}

/**
 * DescribeCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>密钥id</p>
   */
  SecretKeyId: string
  /**
   * <p>可选 Boolean，默认 false。仅传 true 且返回记录 ResourceType=Consumer 时，额外返回 CredentialGenerateType、CreationSource、BatchId；省略或 false 时不返回这三个字段，原字段和返回结构保持不变。此参数只控制展示字段，不控制 Filters 是否生效。</p>
   */
  IncludeCreationInfo?: boolean
}

/**
 * ModifyCloudNativeAPIGatewayMCPServer请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>展示名字</p>
   */
  DisplayName: string
  /**
   * <p>服务 id</p>
   */
  ServerId: string
  /**
   * <p>后端类型</p><p>枚举值：</p><ul><li>MCPRegistry： mcp 注册中心</li><li>Registry： 普通注册中心</li><li>HostIP： 域名或ip</li><li>VirtualMCPServer： 虚拟MCPServer</li><li>DNS： 私有域名</li><li>Kubernetes： Kubernetes服务</li></ul>
   */
  UpstreamType: string
  /**
   * <p>超时时间，单位ms，最大60000</p>
   */
  Timeout?: number
  /**
   * <p>重试次数，最大3次</p>
   */
  RetryCount?: number
  /**
   * <p>注册中心来源信息</p>
   */
  UpstreamInfo?: AIGWMCPUpstreamInfo
  /**
   * <p>会话配置</p>
   */
  SessionConfig?: AIGWMCPSessionConfig
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>是否启用健康检查</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>健康检查配置</p>
   */
  HealthCheck?: AIGWHealthCheckSetting
  /**
   * <p>是否开启保留原Host功能</p>
   */
  PreserveHost?: boolean
  /**
   * <p>日志配置</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>服务级参数改写配置</p>
   */
  ParamRewriteConfig?: AIGWMCPServerParamRewriteConfig
}

/**
 * AI 网关 mcp server 下所有 tool 的 ACL 状态
 */
export interface AIGWMCPToolACLListResult {
  /**
   * <p>黑白名单鉴权类型</p><p>枚举值：</p><ul><li>None： 不鉴权</li><li>Allow： 白名单</li><li>Deny： 黑名单</li></ul>
   */
  ACLType?: string
  /**
   * <p>数据列表</p>
   */
  DataList?: Array<AIGWMCPToolACLItem>
  /**
   * <p>计数</p>
   */
  TotalCount?: number
}

/**
 * AddCloudNativeAPIGatewayConsumerGroupAuth返回参数结构体
 */
export interface AddCloudNativeAPIGatewayConsumerGroupAuthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务的后端配置
 */
export interface KongUpstreamInfo {
  /**
   * 负载均衡算法，默认为 round-robin，还支持 least-connections，consisten_hashing
   */
  Algorithm?: string
  /**
   * CVM弹性伸缩组端口
   */
  AutoScalingCvmPort?: number
  /**
   * CVM弹性伸缩组ID
   */
  AutoScalingGroupID?: string
  /**
   * CVM弹性伸缩组生命周期挂钩状态
   */
  AutoScalingHookStatus?: string
  /**
   * CVM弹性伸缩组使用的CVM TAT命令状态
   */
  AutoScalingTatCmdStatus?: string
  /**
   * upstream健康状态HEALTHY（健康）, UNHEALTHY（异常）, HEALTHCHECKS_OFF（未开启）和NONE（不支持健康检查）
   */
  HealthStatus?: string
  /**
   * IP或域名
   */
  Host?: string
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 精确的服务来源类型，新建服务来源时候传入的类型
   */
  RealSourceType?: string
  /**
   * 云函数是否开启CAM鉴权，不填时默认为开启(true)
   */
  ScfCamAuthEnable?: boolean
  /**
   * 云函数是否开启Base64编码，默认为false
   */
  ScfIsBase64Encoded?: boolean
  /**
   * 云函数是否开启响应集成，默认为false
   */
  ScfIsIntegratedResponse?: boolean
  /**
   * SCF函数名
   */
  ScfLambdaName?: string
  /**
   * SCF函数版本
   */
  ScfLambdaQualifier?: string
  /**
   * SCF函数命名空间
   */
  ScfNamespace?: string
  /**
   * SCF函数类型
   */
  ScfType?: string
  /**
   * 服务（注册中心或Kubernetes中的服务）名字
   */
  ServiceName?: string
  /**
   * 冷启动时间，单位秒
   */
  SlowStart?: number
  /**
   * 服务来源ID
   */
  SourceID?: string
  /**
   * 服务来源的名字
   */
  SourceName?: string
  /**
   * 服务来源类型
   */
  SourceType?: string
  /**
   * 服务后端类型是IPList时提供
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets?: Array<KongTarget>
}

/**
 * DescribeCloudNativeAPIGatewaySecretKeyValue返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewaySecretKeyValueResponse {
  /**
   * 密钥值
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关 HTTP 转 MCP 请求阶段参数改写配置
 */
export interface AIGWMCPServerRequestRewriteConfig {
  /**
   * <p>头部重写规则</p>
   */
  Headers?: Array<AIGWMCPServerParamRewriteRule>
}

/**
 * AI网关授权模型访问范围
 */
export interface AIGWAuthModelScopeItem {
  /**
   * <p>授权主体 ID，如消费者组、消费者</p>
   */
  PrincipalId?: string
  /**
   * <p>授权主体名称，如消费者组、消费者</p>
   */
  PrincipalName?: string
  /**
   * <p>模型范围原始配置</p>
   */
  ModelScope?: AIGWModelScope
  /**
   * <p>MAG 已展开、保序去重后的可用模型名称列表</p>
   */
  EffectiveModelNames?: Array<string>
}

/**
 * MCP路由规则的校验结果
 */
export interface AIGWMCPRouteCheckResult {
  /**
   * <p>冲突路由ID</p>
   */
  ConflictRouteId?: string
  /**
   * <p>是否冲突</p><p>枚举值：</p><ul><li>true： 冲突</li><li>false： 未冲突</li></ul>
   */
  IsConflict?: boolean
  /**
   * <p>冲突原因</p>
   */
  Reason?: string
}

/**
 * DeleteCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 消费者ID<p>CustomOrganization 仅允许手工/存量消费者，拒绝目录来源、非空 SyncSourceId、Public 和只读保留对象，即使原源已删除也不借此入口清理。删除复用原依赖检查及全归属/凭证/授权清理，Legacy 原行为不变。成功响应不新增 Result。</p>
   */
  ConsumerId: string
  /**
   * <p>调用业务来源，可选 Legacy 或 CustomOrganization；省略或空串按 Legacy。Legacy 保持原行为，CustomOrganization 用于自定义组织架构。该字段不替代鉴权，不改变资源归属，不覆盖 RequestSource。来源保存在操作记录请求内容中。</p>
   */
  OperationSource?: string
}

/**
 * LLM-单模型内降级规则
 */
export interface CloudNativeAPIGatewayLLMModelFallbackRule {
  /**
   * 备选模型，主模型不可用时将依次按顺序尝试。
   */
  FallbackModels?: Array<string>
}

/**
 * ModifyCloudNativeAPIGatewayMCPToolStatus返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolStatusResponse {
  /**
   * <p>创建结果</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudNativeAPIGatewayMCPRoute返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPRouteResponse {
  /**
   * <p>操作结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: AIGWCreateMCPRouteResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPRouteStatus请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPRouteStatusRequest {
  /**
   * <p>网关ID</p>
   */
  GatewayId: string
  /**
   * <p>路由ID</p>
   */
  RouteId: string
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>启用/禁用状态</p><p>枚举值：</p><ul><li>Enabled： 启用</li><li>Disabled： 禁用</li></ul>
   */
  Status: string
}

/**
 * 云原生网关模型LLM配额限制信息
 */
export interface AIGWLLMQuotaLimit {
  /**
   * <p>该模型服务每分钟请求数上限，0 表示该维度不限</p>
   */
  RPMLimit?: number
  /**
   * <p>该模型服务每分钟 Token 数上限，0 表示该维度不限</p>
   */
  TPMLimit?: number
  /**
   * <p>并发数限流</p>
   */
  ConcurrentCountLimit?: number
}

/**
 * AI 网关自定义脱敏规则
 */
export interface AIGWCustomDesensitizeRule {
  /**
   * <p>规则名称，同一配置内唯一，最长 64</p>
   */
  Name: string
  /**
   * <p>RE2 兼容的正则表达式</p>
   */
  Pattern: string
  /**
   * <p>日志场景为掩码格式，转发场景为占位符；最长 64</p>
   */
  MaskFormat: string
  /**
   * <p>单条自定义规则是否启用</p>
   */
  Enabled: boolean
}

/**
 * CreateCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface CreateCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * <p>创建结果。包含成功标识与新建资源 ID。</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * kong实例的服务和路由列表
 */
export interface KongServiceRoute {
  /**
   * <p>服务信息</p>
   */
  Service?: KongServicePreview
  /**
   * <p>路由总数</p>
   */
  RouteTotalCount?: number
  /**
   * <p>是否还有更多路由</p>
   */
  RouteHasMore?: boolean
  /**
   * <p>路由列表</p>
   */
  Routes?: Array<KongRoutePreview>
}

/**
 * MCP Tool 列表
 */
export interface CNAPIGwMCPToolList {
  /**
   * <p>MCPTool 列表</p>
   */
  DataList?: Array<CNAPIGwMCPTool>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
}

/**
 * DeleteCloudNativeAPIGatewayAIServiceSource返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayAIServiceSourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface UnbindCloudNativeAPIGatewaySecretKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudNativeAPIGatewayAIServiceSource请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayAIServiceSourceRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>来源类型:</p><ul><li>MCPRegistry:  mcp 注册中心</li></ul>
   */
  SourceType: string
  /**
   * <p>服务来源名字</p>
   */
  SourceName?: string
  /**
   * <p>来源产品：- TSFNacos：TSF Nacos</p>
   */
  SourceProduct?: string
  /**
   * <p>来源详情</p>
   */
  SourceInfo?: CNAPIGwAIServiceSourceInfo
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * AI 网关Token长度路由规则
 */
export interface AIGWTokenLengthRouteRule {
  /**
   * <p>token 长度下界，闭区间；0 合法</p>
   */
  MinTokenLength: number
  /**
   * <p>token 长度上界，闭区间</p>
   */
  MaxTokenLength: number
  /**
   * <p>命中该分段后执行的二级路由</p>
   */
  Target: AIGWLLMModelServiceSubRoute
}

/**
 * OAuth2 凭证物料配置
 */
export interface AIGWOAuthCredentialConfig {
  /**
   * <p>OAuth2 client_id</p>
   */
  ClientId: string
  /**
   * <p>OAuth2 client_secret</p>
   */
  ClientSecret: string
  /**
   * <p>OAuth2 授权回调地址</p>
   */
  RedirectURIs?: string
}

/**
 * ModifyCloudNativeAPIGatewayConsumerGroup请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerGroupRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * <p>消费者组 ID（以 cg- 开头）。</p>
   */
  ConsumerGroupId: string
  /**
   * <p>消费者组名称，最长 60 字符。</p>
   */
  Name: string
  /**
   * <p>启用状态。</p><p>枚举值：</p><ul><li>Enable：启用</li><li>Disable：禁用</li></ul>
   */
  Status: string
  /**
   * <p>消费者组描述。最长 200 字符。</p>
   */
  Description?: string
}

/**
 * DeleteCloudNativeAPIGatewayMCPRoute返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface UnbindCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源ID，当前最多支持一个
   */
  ResourceIds: Array<string>
  /**
   * 密钥id
   */
  SecretKeyId: string
}

/**
 * AI网关 Query Param 凭证物料配置
 */
export interface AIGWQueryParamCredentialConfig {
  /**
   * <p>参数名</p>
   */
  ParamName?: string
  /**
   * <p>参数值</p>
   */
  ParamValue?: string
}

/**
 * 模型API请求优先级调度
 */
export interface AIGWPriorityScheduleConfig {
  /**
   * <p>是否开启优先级调度</p><p>枚举值：</p><ul><li>true： 是</li><li>false： 否</li></ul>
   */
  Enabled?: boolean
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolListResponse {
  /**
   * <p>tool 列表</p>
   */
  Result?: CNAPIGwMCPToolList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LLM 模型服务
 */
export interface CloudNativeAPIGatewayLLMModelService {
  /**
   * <p>模型服务 ID。</p>
   */
  Id?: string
  /**
   * <p>模型服务名称。</p>
   */
  Name?: string
  /**
   * <p>创建时间。</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间。</p>
   */
  ModifyTime?: string
  /**
   * <p>服务类型，目前只支持xa0LLMService。</p>
   */
  ServiceType?: string
  /**
   * <p>选择模型提供商, 选项：OpenAI、Anthropic、Azure OpenAI、自定义HTTP。</p>
   */
  ModelProvider?: string
  /**
   * <p>API协议标准，根据供应商动态变化：OpenAI→OpenAI/v1，Anthropic→Anthropic/v1等</p>
   */
  ModelProtocol?: string
  /**
   * <p>自定义的模型请求 URL。</p>
   */
  UpstreamURL?: string
  /**
   * <p>模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。</p>
   */
  ModelSelector?: string
  /**
   * <p>默认模型，模型选择方式为 Specify 时必填。</p>
   */
  DefaultModel?: string
  /**
   * <p>开启模型降级，模型选择方式为 Specify 时必填。</p>
   */
  EnableModelFallback?: boolean
  /**
   * <p>可以配置备用模型规则，EnableSpecifyModelFallbackxa0为 true 时必填。</p>
   */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule
  /**
   * <p>开启模型参数校验，是否校验客户端传递的 model 参数,xa0模型选择方式为 PassThrough 时必填。</p>
   */
  EnableModelParamCheck?: boolean
  /**
   * <p>模型检验信息，EnableModelParamCheckxa0为 true 时必填。</p>
   */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo
  /**
   * <p>描述。</p>
   */
  Description?: string
  /**
   * <p>连接超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：10000</p>
   */
  ConnectTimeout?: number
  /**
   * <p>写入超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：60000</p>
   */
  WriteTimeout?: number
  /**
   * <p>读取超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p>
   */
  ReadTimeout?: number
  /**
   * <p>重试次数</p><p>取值范围：[0, 5]</p><p>单位：次</p><p>默认值：0</p>
   */
  Retries?: number
  /**
   * <p>路径拼接模式</p><p>枚举值：</p><ul><li>FixedPath： 固定路径</li><li>AutoConcat： 自动拼接</li></ul>
   */
  UpstreamUrlMode?: string
  /**
   * <p>sni</p>
   */
  SNI?: string
  /**
   * <p>配额限制</p>
   */
  QuotaLimit?: AIGWLLMQuotaLimit
  /**
   * <p>标签</p>
   */
  Tags?: string
  /**
   * <p>绑定的模型服务秘钥</p>
   */
  SecretKeyIds?: Array<string>
  /**
   * <p>模型改写规则</p>
   */
  ModelRewriteRules?: Array<AIGWModelRewriteRule>
  /**
   * <p>服务来源</p>
   */
  SourceId?: string
  /**
   * <p>命名空间</p>
   */
  Namespace?: string
  /**
   * <p>服务名称</p>
   */
  ServiceName?: string
  /**
   * <p>命名空间</p>
   */
  Protocol?: string
  /**
   * <p>扩展参数</p>
   */
  ExtParams?: Array<KeyValue>
  /**
   * <p>模型自定义供应商名称</p>
   */
  CustomProviderName?: string
  /**
   * <p>是否开启密钥轮转</p>
   */
  KeyRotationEnabled?: boolean
  /**
   * <p>密钥轮转周期</p><p>单位：天</p>
   */
  KeyRotationPeriodDays?: number
  /**
   * <p>外部服务来源ID</p>
   */
  ExternalInstanceId?: string
  /**
   * <p>负载均衡配置。</p>
   */
  LoadBalanceConfig?: AIGWLoadBalanceConfig
  /**
   * <p>是否可以发布到广场</p>
   */
  CanPublish?: boolean
  /**
   * <p>发布状态</p><p>枚举值：</p><ul><li>Unpublished： 未发布</li><li>Published： 已发布</li></ul>
   */
  PublishStatus?: string
  /**
   * <p>同步状态</p><p>枚举值：</p><ul><li>Success： 成功</li><li>Fail： 失败</li></ul>
   */
  SyncStatus?: string
  /**
   * <p>资源类型</p><p>枚举值：</p><ul><li>Public： 公共</li><li>Private： 私有</li><li>SourceDeleted： 资源删除</li></ul>
   */
  SourceType?: string
  /**
   * <p>同步版本</p>
   */
  SyncedVersion?: string
  /**
   * <p>模型服务状态</p><p>枚举值：</p><ul><li>Online：  已上线</li><li>Offline： 已下线</li><li>Error： 健康检查异常</li></ul>
   */
  Status?: string
  /**
   * <p>是否启用健康检查</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>健康检查配置</p>
   */
  HealthCheck?: AIGWLLMHealthCheckSetting
  /**
   * <p>内容长度限制配置</p>
   */
  LengthLimitConfig?: AIGWLengthLimitConfig
  /**
   * <p>智能负载均衡配置。</p>
   */
  SmartBalance?: AIGWSmartBalanceConfig
}

/**
 * DeleteCloudNativeAPIGatewayConsumerGroup请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerGroupRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 消费者组ID<p>CustomOrganization 时必须为当前网关自定义部门 UUID，保留系统节点、子部门、成员与授权/MCP 依赖检查。Legacy 原 cg-* 及已有 UUID 兼容行为不变。成功响应不新增 Result。</p>
   */
  ConsumerGroupId: string
  /**
   * <p>调用业务来源，可选 Legacy 或 CustomOrganization；省略或空串按 Legacy。Legacy 保持原行为，CustomOrganization 用于自定义组织架构。该字段不替代鉴权，不改变资源归属，不覆盖 RequestSource。来源保存在操作记录请求内容中。</p>
   */
  OperationSource?: string
}

/**
 * AI 网关 HTTP 转 MCP 参数改写配置
 */
export interface AIGWMCPServerParamRewriteConfig {
  /**
   * <p>是否开启服务级参数重写</p>
   */
  Enable?: boolean
  /**
   * <p>服务级请求参数重写配置</p>
   */
  Request?: AIGWMCPServerRequestRewriteConfig
}

/**
 * 分页查询返回的mcp tool version列表
 */
export interface AIGWMCPToolVersionList {
  /**
   * <p>mcp. tool 版本详情</p>
   */
  MCPToolVersions?: Array<AIGWMCPToolVersion>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
}

/**
 * DescribeCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConsumerGroupResponse {
  /**
   * <p>消费者组详情。</p>
   */
  Result?: CNAPIGwConsumerGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCloudNativeAPIGatewayMCPToolVersionExist返回参数结构体
 */
export interface CheckCloudNativeAPIGatewayMCPToolVersionExistResponse {
  /**
   * <p>版本是否存在</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCloudNativeAPIGatewayMCPRouteMatch返回参数结构体
 */
export interface CheckCloudNativeAPIGatewayMCPRouteMatchResponse {
  /**
   * <p>是否冲突</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: AIGWMCPRouteCheckResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 延迟优先路由配置
 */
export interface AIGWLatencyPriorityConfig {
  /**
   * <p>路由规则列表</p>
   */
  Rules: Array<AIGWLatencyPriorityRouteRule>
  /**
   * <p>延迟指标</p><p>枚举值：</p><ul><li>LLMLatency： LLM 延迟</li><li>NetworkLatency： 网络延迟</li></ul>
   */
  LatencyMetric: string
  /**
   * <p>路由策略</p><p>枚举值：</p><ul><li>FastMode： 快速模式</li><li>BalanceMode： 均衡模式</li></ul>
   */
  RouteMode?: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPServerAuth请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerAuthRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
  /**
   * <p>认证类型</p><p>枚举值：</p><ul><li>None： 无认证</li><li>ApiKey： API Key认证</li></ul>
   */
  AuthType: string
  /**
   * <p>JWT认证配置</p>
   */
  JWTAuthConfig?: AIGWJWTAuthPluginConfig
  /**
   * <p>OAuth认证配置</p>
   */
  OAuthAuthConfig?: AIGWOAuthAuthPluginConfig
  /**
   * <p>OIDC认证配置</p>
   */
  OIDCAuthConfig?: AIGWOIDCAuthPluginConfig
}

/**
 * DescribeCloudNativeAPIGatewayMCPServer请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerRequest {
  /**
   * <p>云原生API网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
}

/**
 * DescribeCloudNativeAPIGatewayLLMTokenUsageList请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest {
  /**
   * <p>网关实例Id</p>
   */
  GatewayId: string
  /**
   * <p>查询起始时间戳</p><p>单位：秒</p>
   */
  StartTime: number
  /**
   * <p>查询结束时间戳</p><p>单位：秒</p>
   */
  EndTime: number
  /**
   * <p>查询过滤条件，Name取值为ConsumerId或ConsumerGroupId</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>分页条件，每页条数</p>
   */
  Limit?: number
  /**
   * <p>分页条件，分页偏移量</p>
   */
  Offset?: number
}

/**
 * BindCloudNativeAPIGatewaySecretKey请求参数结构体
 */
export interface BindCloudNativeAPIGatewaySecretKeyRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源ID，当前最多支持一个
   */
  ResourceIds: Array<string>
  /**
   * 密钥id
   */
  SecretKeyId: string
}

/**
 * ModifyCloudNativeAPIGatewayMCPToolStatus请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPToolStatusRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>mcp server id</p>
   */
  ServerId: string
  /**
   * <p>mcp tool 状态</p><p>枚举值：</p><ul><li>Enable： 启用</li><li>Disable： 禁用</li></ul>
   */
  Status: string
  /**
   * <p>mcp tool id</p>
   */
  ToolId: string
}

/**
 * AddCloudNativeAPIGatewayConsumerGroupAuth请求参数结构体
 */
export interface AddCloudNativeAPIGatewayConsumerGroupAuthRequest {
  /**
   * <p>网关实例id</p>
   */
  GatewayId: string
  /**
   * <p>授权资源类型。</p><p>枚举值：</p><ul><li>ModelAPI：模型 API</li><li>MCPServer：MCP Server</li></ul>
   */
  ResourceType: string
  /**
   * <p>对应资源的 ID。</p><ul><li>ResourceType=ModelAPI 时是模型 API ID</li><li>ResourceType=MCPServer 时是 MCP Server ID</li></ul>
   */
  ResourceId: string
  /**
   * <p>消费者组 ID 列表（每个 ID 以 cg- 开头），长度 1-10。</p>
   */
  ConsumerGroupIds: Array<string>
}

/**
 * DescribeCloudNativeAPIGatewayAIQuotaList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayAIQuotaListResponse {
  /**
   * <p>配额列表</p>
   */
  Result?: AIGWQuotaList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型服务二级路由配置
 */
export interface AIGWLLMModelServiceSubRoute {
  /**
   * <p>生效的路由算法类型：权重路由，模型名称路由、参数路由等Weighted/ModelName/Query (预留多个，暂时只能填写一个)</p>
   */
  SelectedTypes: Array<string>
  /**
   * <p>权重路由配置，最多10个</p>
   */
  WeightedConfig?: Array<CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy>
  /**
   * <p>延迟路由</p>
   */
  LatencyPriorityConfig?: AIGWLatencyPriorityConfig
  /**
   * <p>指定模型路由（暂时只用在Token长度路由时的子路由选择）</p>
   */
  ModelServiceConfig?: AIGWRouteModelServiceConfig
}

/**
 * ModifyCloudNativeAPIGatewayConsumer返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关转发脱敏配置
 */
export interface AIGWForwardDesensitizeConfig {
  /**
   * <p>转发脱敏配置总开关</p>
   */
  Enabled: boolean
  /**
   * <p>内置规则类型：Phone、IdCard、BankCard、Email、IP、Name</p>
   */
  PredefinedRuleTypes?: Array<string>
  /**
   * <p>自定义规则，最多 20 条</p>
   */
  CustomRules?: Array<AIGWCustomDesensitizeRule>
  /**
   * <p>内置规则占位符格式，最长 32；为空时默认 [{type}]</p>
   */
  PlaceholderFormat?: string
  /**
   * <p>脱敏失败处理：Reject（拒绝请求）或 Skip（跳过脱敏并转发）</p>
   */
  OnFailure?: string
}

/**
 * AI GW Sensitive Word Route
 */
export interface AIGWSensitiveWordRoute {
  /**
   * <p>是否开启</p>
   */
  Enabled?: boolean
  /**
   * <p>模型API ID列表</p>
   */
  ModelServiceRefs?: Array<string>
  /**
   * <p>查询接口会返回模型API的Name列表</p>
   */
  ModelServiceNames?: Array<string>
  /**
   * <p>路由方式</p><p>枚举值：</p><ul><li>Weighted： 权重路由</li><li>ModelName： 按模型名称路由</li></ul>
   */
  SelectedTypes?: Array<string>
  /**
   * <p>权重路由配置</p>
   */
  WeightedConfig?: Array<CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy>
  /**
   * <p>路由名称路由配置</p>
   */
  ModelNameConfig?: Array<CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy>
  /**
   * <p>敏感词路由单模型直选时的标准模型名称。仅在 Enabled=true、SelectedTypes 为空且 ModelServiceRefs 只有一个模型服务时可设置；使用 Weighted 或 ModelName 策略时应在相应配置条目中填写。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * aksk类型密钥
 */
export interface AIGWAKSKCredentialConfig {
  /**
   * <p>AccessKeyId</p>
   */
  AccessKeyId?: string
  /**
   * <p>SecretAccessKey</p>
   */
  SecretAccessKey?: string
}

/**
 * CreateCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayMCPToolResponse {
  /**
   * <p>创建结果</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudNativeAPIGatewayLLMModelService请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayLLMModelServiceRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>模型服务 ID，全局唯一标识。</p>
   */
  ModelServiceId: string
  /**
   * <p>修改服务名称，长度2-50字符，支持中英文、数字、下划线。</p>
   */
  Name?: string
  /**
   * <p>修改默认模型，模型选择方式为 Specify 时必填。</p>
   */
  DefaultModel?: string
  /**
   * <p>修改模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。</p>
   */
  ModelSelector?: string
  /**
   * <p>修改开启模型降级，模型选择方式为 Specify 时必填。</p>
   */
  EnableModelFallback?: boolean
  /**
   * <p>修改可以配置备用模型规则，EnableSpecifyModelFallback 为 true 时必填。</p>
   */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule
  /**
   * <p>修改开启模型参数校验，是否校验客户端传递的 model 参数, 模型选择方式为 PassThrough 时必填</p>
   */
  EnableModelParamCheck?: boolean
  /**
   * <p>修改模型检验信息，EnableModelParamCheck 为 true 时必填。</p>
   */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo
  /**
   * <p>修改描述。</p>
   */
  Description?: string
  /**
   * <p>修改模型服务地址</p>
   */
  UpstreamURL?: string
  /**
   * <p>连接超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：10000</p>
   */
  ConnectTimeout?: number
  /**
   * <p>写入超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：60000</p>
   */
  WriteTimeout?: number
  /**
   * <p>读取超时时间</p><p>取值范围：[1, 3600000]</p><p>单位：毫秒</p><p>默认值：60000</p>
   */
  ReadTimeout?: number
  /**
   * <p>重试次数</p><p>取值范围：[0, 5]</p><p>单位：次</p><p>默认值：0</p>
   */
  Retries?: number
  /**
   * <p>路径拼接模式</p><p>枚举值：</p><ul><li>FixedPath： 固定路径</li><li>AutoConcat： 自动拼接</li></ul>
   */
  UpstreamUrlMode?: string
  /**
   * <p>SNI</p>
   */
  SNI?: string
  /**
   * <p>模型服务级别的配额上限（RPM/TPM）。需要网关版本 ≥ 3.9.4。</p>
   */
  QuotaLimit?: AIGWLLMQuotaLimit
  /**
   * <p>标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>参数改写规则</p>
   */
  ModelRewriteRules?: Array<AIGWModelRewriteRule>
  /**
   * <p>外部服务来源ID</p>
   */
  ExternalInstanceId?: string
  /**
   * <p>其他参数</p>
   */
  ExtParams?: Array<KeyValue>
  /**
   * <p>密钥轮转开关</p>
   */
  KeyRotationEnabled?: boolean
  /**
   * <p>密钥轮转周期</p><p>单位：天数</p>
   */
  KeyRotationPeriodDays?: number
  /**
   * <p>来源服务 ID。</p>
   */
  SourceId?: string
  /**
   * <p>命名空间。</p>
   */
  Namespace?: string
  /**
   * <p>服务名称。</p>
   */
  ServiceName?: string
  /**
   * <p>协议类型，如 OpenAI、Custom。</p>
   */
  Protocol?: string
  /**
   * <p>自定义供应商名称</p>
   */
  CustomProviderName?: string
  /**
   * <p>负载均衡配置</p>
   */
  LoadBalanceConfig?: AIGWLoadBalanceConfig
  /**
   * <p>智能负载均衡配置</p>
   */
  SmartBalance?: AIGWSmartBalanceConfig
}

/**
 * DeleteCloudNativeAPIGatewayAIServiceSource请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayAIServiceSourceRequest {
  /**
   * <p>实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>服务来源id</p>
   */
  SourceId?: string
  /**
   * <p>服务来源类型</p><p>枚举值：</p><ul><li>Registry： 普通注册中心</li><li>MCPRegistry： MCP注册中心</li><li>DNS： 域名服务</li></ul>
   */
  SourceType?: string
}

/**
 * ModifyCloudNativeAPIGatewayLLMModelService返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayLLMModelServiceResponse {
  /**
   * <p>是否成功</p>
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudNativeAPIGatewayMCPToolVersion请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPToolVersionRequest {
  /**
   * <p>网关实例 id</p>
   */
  GatewayId: string
  /**
   * <p>MCPserverId</p>
   */
  ServerId: string
  /**
   * <p>工具 id</p>
   */
  ToolId: string
  /**
   * <p>mcp tool版本</p>
   */
  ToolVersion: string
}

/**
 * CreateCloudNativeAPIGatewayLLMModelAPI返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayLLMModelAPIResponse {
  /**
   * <p>是否成功。</p>
   */
  Result?: boolean
  /**
   * <p>模型 API ID，全局唯一标识。</p>
   */
  ModelAPIId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 网关 MCP Server 网关验签配置
 */
export interface AIGWGatewayVerifyConfig {
  /**
   * <p>是否开启网关验签</p>
   */
  Enable?: boolean
  /**
   * <p>网关验签类型</p><p>枚举值：</p><ul><li>OAuth： OAuth2</li></ul>
   */
  VerifyType?: string
  /**
   * <p>OAuth2验签配置</p>
   */
  OAuthConfig?: AIGWGatewayVerifyOAuthConfig
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerAuth请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerAuthRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
}

/**
 * CreateCloudNativeAPIGatewayAIServiceSource返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayAIServiceSourceResponse {
  /**
   * <p>创建结果</p>
   */
  Result?: CNAPIGwCreateCommonResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudNativeAPIGatewayLLMModelService请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayLLMModelServiceRequest {
  /**
   * 网关 id。
   */
  GatewayId: string
  /**
   * 模型服务 ID，全局唯一标识。
   */
  ModelServiceId: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPToolImportTask请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolImportTaskRequest {
  /**
   * <p>网关实例ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP Server ID</p>
   */
  MCPServerId: string
}

/**
 * DeleteCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudNativeAPIGatewayMCPServerACL请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPServerACLRequest {
  /**
   * <p>网关实例 ID</p>
   */
  GatewayId: string
  /**
   * <p>MCP服务ID</p>
   */
  ServerId: string
}

/**
 * ModifyCloudNativeAPIGatewayLLMModelAPI请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayLLMModelAPIRequest {
  /**
   * <p>网关 id。</p>
   */
  GatewayId: string
  /**
   * <p>模型 API ID，全局唯一标识。</p>
   */
  ModelAPIId: string
  /**
   * <p>模型 API 名称，最长 60 字符。</p>
   */
  Name?: string
  /**
   * <p>统一前缀路径（可选）。例如 /v1/openai。</p>
   */
  BasePath?: string
  /**
   * <p>模型 API 描述。最长 200 字符。</p>
   */
  Description?: string
  /**
   * <p>关联的模型服务 ID 列表，长度 1-10。</p>
   */
  ListModelServiceId?: Array<string>
  /**
   * <p>多模型服务路由策略。ListModelServiceId 多于 1 项时必填。</p>
   */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute
  /**
   * <p>Header 路由匹配规则。当前仅支持 Operator=exact。</p>
   */
  MatchHeaders?: Array<AIGWKVMatch>
  /**
   * <p>按请求体顶层 model 字段匹配模型 API 的全量最终态配置。要保留现值必须提交完整对象；省略或 null 表示清空。</p>
   */
  ModelNameRoute?: AIGWModelNameRoute
  /**
   * <p>是否启用跨服务 Fallback。</p>
   */
  EnableCrossServiceFallback?: boolean
  /**
   * <p>跨服务 Fallback 配置。EnableCrossServiceFallback=true 时必填。</p>
   */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig
  /**
   * <p>标签过滤策略。需要网关版本 ≥ 3.9.4。</p>
   */
  TagFilter?: AIGWTagFilter
  /**
   * <p>日志输出配置。需要网关版本 ≥ 3.9.4。</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>AI 网关Rerank场景最大文档数限制配置</p>
   */
  MaxDocumentsConfig?: AIGWRerankMaxDocumentsConfig
  /**
   * <p>敏感词路由配置</p>
   */
  SensitiveWordRoute?: AIGWSensitiveWordRoute
  /**
   * <p>请求优先级配置</p>
   */
  PriorityScheduleConfig?: AIGWPriorityScheduleConfig
  /**
   * <p>单模型 API 的顶层标准模型名称。不传保留原值，传空字符串清空，传非空字符串设置新值；仅单模型场景可设置。已配置顶层标准模型名时，需先清空该字段再切换多模型路由。仅对应 TIONE 模型服务时可配置。非空值最长 256 字节，支持中文、英文、数字、下划线和短横线，须以中文、英文或数字开头。同一网关内不同模型 API 不得使用相同的标准模型名称；同一模型 API 内同一模型服务在多处配置时须保持一致。</p>
   */
  StandardModelName?: string
}

/**
 * CAM类型密钥
 */
export interface AIGWCAMCredentialConfig {
  /**
   * <p>SecretId</p>
   */
  SecretId?: string
  /**
   * <p>SecretKey</p>
   */
  SecretKey?: string
}

/**
 * MCP Server详情
 */
export interface AIGWMCPServer {
  /**
   * <p>MCP Server ID</p>
   */
  ServerId: string
  /**
   * <p>MCP Server名称</p>
   */
  Name: string
  /**
   * <p>MCP Server类型，取值：MCP/Rest2MCP</p>
   */
  ServerType: string
  /**
   * <p>协议类型，取值: StreamableHttp</p>
   */
  Transport: string
  /**
   * <p>后端类型</p><p>枚举值：</p><ul><li>MCPRegistry： mcp 注册中心</li><li>Registry： 普通注册中心</li><li>HostIP： 域名或ip</li><li>VirtualMCPServer： 虚拟MCPServer</li><li>DNS： 私有域名</li><li>Kubernetes： Kubernetes服务</li></ul>
   */
  UpstreamType: string
  /**
   * <p>展示名字</p>
   */
  DisplayName?: string
  /**
   * <p>MCP提供给客户端的Endpoint</p>
   */
  MCPEndpoint?: string
  /**
   * <p>注册中心来源信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamInfo?: AIGWMCPUpstreamInfoDetail
  /**
   * <p>会话配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionConfig?: AIGWMCPSessionConfig
  /**
   * <p>超时时间，单位ms</p>
   */
  Timeout?: number
  /**
   * <p>失败重试次数</p>
   */
  RetryCount?: number
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>运行状态</p><p>枚举值：</p><ul><li>Online： 在线</li><li>Offline： 离线</li><li>Error： 错误</li></ul>
   */
  Status?: string
  /**
   * <p>是否启用健康检查</p>
   */
  EnableHealthCheck?: boolean
  /**
   * <p>健康检查配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthCheck?: AIGWHealthCheckSetting
  /**
   * <p>Tool分组内工具数量限制</p>
   */
  ToolCountLimit?: number
  /**
   * <p>Tool分组内工具命名冲突策略</p><p>枚举值：</p><ul><li>AutoPrefix： 自动前缀</li><li>Reject： 拒绝</li></ul>
   */
  ConflictStrategy?: string
  /**
   * <p>MCP 市场发布状态</p><p>枚举值：</p><ul><li>None： 未发布</li><li>Published： 已发布</li></ul>
   */
  MarketStatus?: string
  /**
   * <p>是否开启保留原Host功能</p>
   */
  PreserveHost?: boolean
  /**
   * <p>日志采集配置</p>
   */
  LogConfig?: AIGWLogConfig
  /**
   * <p>服务级参数重写规则</p>
   */
  ParamRewriteConfig?: AIGWMCPServerParamRewriteConfig
  /**
   * <p>网关验签配置</p>
   */
  GatewayVerifyConfig?: AIGWGatewayVerifyConfig
}

/**
 * DescribeCloudNativeAPIGatewayLLMTokenUsageList返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse {
  /**
   * <p>查询Token用量明细结果</p>
   */
  Result?: AIGWLLMTokenUsageListResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
