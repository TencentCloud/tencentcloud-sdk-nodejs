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
 * ModifyCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerGroupResponse {
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
 * DeleteCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayMCPToolResponse {
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
   * <p>后端类型</p><p>枚举值：</p><ul><li>MCPRegistry： mcp 注册中心- Registry</li><li>Registry： 普通注册中心</li><li>HostIP： 域名或ip</li><li>VirtualMCPServer： 虚拟MCPServer</li></ul>
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
   * <p>消费者组信息列表</p>
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
  Host: string
  /**
   * <p>端口</p>
   */
  Port: number
  /**
   * <p>用户名</p>
   */
  Username?: string
  /**
   * <p>密码</p>
   */
  Password?: string
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
   * <p>后端类型</p><p>枚举值：</p><ul><li>HostIP： 域名 ip</li><li>MCPRegistry： MCP 注册中心</li><li>VirtualMCPServer： 虚拟MCP 服务</li></ul>
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
 * DeleteCloudNativeAPIGatewayConsumerGroup请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerGroupRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 消费者组ID
   */
  ConsumerGroupId: string
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
 * ModifyCloudNativeAPIGatewayMCPServerAuth返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerAuthResponse {
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
   * <p>消费者组名称，最长 60 字符。同一网关下唯一。</p>
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
 * 密钥信息
 */
export interface CNAPIGwSecretKey {
  /**
   * <p>密钥id</p>
   */
  SecretKeyId?: string
  /**
   * <p>密钥名字</p>
   */
  Name?: string
  /**
   * <p>密钥协议类型。</p>
   */
  SecretType?: string
  /**
   * <p>状态。</p><p>枚举值：</p><ul><li>Enable： 启用</li><li>Disable： 禁用</li></ul>
   */
  Status?: string
  /**
   * <p>密钥生成方式。</p><p>枚举值：</p><ul><li>System： 系统自动生成</li><li>Custom： 用户自定义</li><li>KMS： 使用 KMS 密钥</li></ul>
   */
  GenerateType?: string
  /**
   * <p>密钥明文</p>
   */
  SecretValue?: string
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
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
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
   * <p>修改时间</p>
   */
  ModifyTime?: string
  /**
   * <p>绑定数</p>
   */
  BindCount?: number
  /**
   * <p>密钥归属资源类型。</p><p>枚举值：</p><ul><li>Consumer： 消费者</li><li>ModelService： 模型服务</li></ul>
   */
  ResourceType?: string
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
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>消费者分组</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroups?: Array<CNAPIGwConsumerGroup>
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
 * AI 网关 MCP Server 认证配置详情
 */
export interface AIGWMCPServerAuthResult {
  /**
   * <p>MCP服务认证类型</p><p>枚举值：</p><ul><li>None： 无认证</li><li>ApiKey： API Key认证</li></ul>
   */
  AuthType?: string
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
 * ModifyCloudNativeAPIGatewayMCPServerACL返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerACLResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayConsumerRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * <p>消费者名称，最长 60 字符。同一网关下唯一。</p>
   */
  Name: string
  /**
   * <p>消费者描述。最长 200 字符。</p>
   */
  Description?: string
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
   * <p>无</p>
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
}

/**
 * DescribeCloudNativeAPIGatewayLLMModelAPIs请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIsRequest {
  /**
   * 网关 id。
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
 * 创建资源通用结果
 */
export interface CNAPIGwCreateCommonResult {
  /**
   * 是否成功
   */
  Success?: boolean
  /**
   * 对应的id 值
   */
  ID?: string
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
}

/**
 * 消费者组结构
 */
export interface CNAPIGwConsumerGroup {
  /**
   * 分组id
   */
  ConsumerGroupId: string
  /**
   * 名字
   */
  Name: string
  /**
   * 状态Disable/Enable
   */
  Status: string
  /**
   * 描述
   */
  Description: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间 yyyy-MM-dd hh:mm:ss
   */
  ModifyTime?: string
  /**
   * 绑定的消费者数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindCount?: number
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
   * 网关实例id
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
   * <p>消费者描述。最长 200 字符。</p>
   */
  Description?: string
}

/**
 * AI 网关 B 层日志脱敏配置（写入 LLM Log 前对 payload 掩码）
 */
export interface AIGWLogDesensitizeConfig {
  /**
   * <p>日志脱敏开关</p>
   */
  Enabled: boolean
  /**
   * <p>预定义规则类型</p><p>枚举值：</p><ul><li>Phone： 电话号码</li><li>IdCard： 身份证号</li><li>BankCard： 银行卡号</li><li>Email： 邮箱地址</li><li>IP： IP地址</li><li>Name： 姓名</li></ul>
   */
  PredefinedRuleTypes?: Array<string>
  /**
   * <p>自定义脱敏规则</p>
   */
  CustomRules?: Array<AIGWCustomDesensitizeRule>
  /**
   * <p>日志脱敏范围</p><p>枚举值：</p><ul><li>Request： 请求</li><li>Response： 响应</li></ul>
   */
  Scope?: Array<string>
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
 * DescribeCloudNativeAPIGatewayMCPTool返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayMCPToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyCloudNativeAPIGatewayConsumer返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayConsumerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 实例 ID
   */
  GatewayId: string
  /**
   * <p>密钥协议类型。</p><p>枚举值：</p><ul><li>ApiKey</li><li>Basic</li><li>Hmac</li><li>OAuth2</li><li>JWT</li></ul>
   */
  SecretType: string
  /**
   * <p>密钥名称，2-60 字符。</p>
   */
  Name: string
  /**
   * <p>密钥生成方式。</p><p>枚举值：</p><ul><li>System：系统自动生成</li><li>Custom：用户自定义（需传 SecretValue）</li><li>KMS：使用 KMS 密钥（需传 KmsKeyName 与 KmsKeyVersion）</li></ul>
   */
  GenerateType: string
  /**
   * <p>密钥归属资源类型。</p><p>枚举值：</p><ul><li>Consumer：消费者</li><li>ModelService：模型服务</li></ul>
   */
  ResourceType: string
  /**
   * <p>KMS 密钥名称。GenerateType=KMS 时必填。</p>
   */
  KmsKeyName?: string
  /**
   * <p>KMS 密钥版本。GenerateType=KMS 时必填。</p>
   */
  KmsKeyVersion?: string
  /**
   * <p>密钥值，长度 8-256。GenerateType=Custom 时必填。</p>
   */
  SecretValue?: string
  /**
   * <p>密钥描述。最长 200 字符。</p>
   */
  Description?: string
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
   * <p>查询时间范围内成本最高的消费者</p>
   */
  TopConsumers?: Array<AIGWTopConsumersItem>
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
 * DescribeCloudNativeAPIGatewayLLMModelAPIs返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayLLMModelAPIsResponse {
  /**
   * 模型 API 列表。
   */
  Result?: ListCloudNativeAPIGatewayLLMModelAPI
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * UnbindCloudNativeAPIGatewaySecretKey返回参数结构体
 */
export interface UnbindCloudNativeAPIGatewaySecretKeyResponse {
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
   * <p>Token用量明细返回结果列表</p>
   */
  DataList?: Array<AIGWLLMTokenUsageItem>
  /**
   * <p>结果总数</p>
   */
  TotalCount?: number
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
 * ModifyCloudNativeAPIGatewayMCPServer返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayMCPServerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteCloudNativeAPIGatewayConsumer请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerRequest {
  /**
   * 网关实例id
   */
  GatewayId: string
  /**
   * 消费者ID
   */
  ConsumerId: string
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
}

/**
 * AI 网关自定义脱敏规则（A 层 / B 层共用结构体，MaskFormat 含义随所属层不同）
 */
export interface AIGWCustomDesensitizeRule {
  /**
   * <p>自定义脱敏规则名称</p>
   */
  Name: string
  /**
   * <p>自定义脱敏规则匹配正则</p>
   */
  Pattern: string
  /**
   * <p>自定义脱敏规则掩码</p>
   */
  MaskFormat: string
  /**
   * <p>自定义脱敏规则开关</p>
   */
  Enabled: boolean
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
 * AI 网关 A 层转发脱敏配置（请求转发到 LLM 供应商前对 messages 替换为占位符）
 */
export interface AIGWForwardDesensitizeConfig {
  /**
   * <p>转发脱敏开关</p>
   */
  Enabled: boolean
  /**
   * <p>预定义规则类型</p><p>枚举值：</p><ul><li>Phone： 电话号码</li><li>IdCard： 身份证号</li><li>BankCard： 银行卡号</li><li>Email： 电子邮箱地址</li><li>IP： IP地址</li><li>Name： 姓名</li></ul>
   */
  PredefinedRuleTypes?: Array<string>
  /**
   * <p>自定义脱敏规则</p>
   */
  CustomRules?: Array<AIGWCustomDesensitizeRule>
  /**
   * <p>掩码</p>
   */
  PlaceholderFormat?: string
  /**
   * <p>脱敏异常处理</p><p>枚举值：</p><ul><li>Reject： 拒绝请求</li><li>Skip： 跳过</li></ul>
   */
  OnFailure?: string
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
   * <p>服务类型：</p><ul><li>Registry  </li><li>HostIP</li></ul>
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
 * DeleteCloudNativeAPIGatewayConsumerGroup返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
