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
 * CreateModelService请求参数结构体
 */
export interface CreateModelServiceRequest {
  /**
   * <p>实例</p>
   */
  InstanceID: string
  /**
   * <p>模型服务名称</p>
   */
  Name: string
  /**
   * <p>描述</p>
   */
  Description: string
  /**
   * <p>访问路径</p>
   */
  PubPath: string
  /**
   * <p>模型ID列表</p>
   */
  TargetModels: Array<TargetModelDTO>
  /**
   * <p>路径匹配类型: prefix 前缀匹配(不送默认); absolute 绝对匹配; regex正则匹配;</p>
   */
  PathMatchType?: string
  /**
   * <p>是否开启限流</p>
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * <p>限流配置</p>
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * <p>是否开启token控制</p>
   */
  TokenLimitStatus?: boolean
  /**
   * <p>token控制</p>
   */
  TokenLimitConfig?: TokenLimitConfigDTO
  /**
   * <p>是否开启内容安全</p>
   */
  TmsStatus?: boolean
  /**
   * <p>内容安全配置</p>
   */
  TmsConfig?: TmsConfigDTO
  /**
   * <p>是否开启IP白名单</p>
   */
  IpWhiteStatus?: boolean
  /**
   * <p>IP白名单</p>
   */
  IpWhiteList?: Array<string>
  /**
   * <p>IP黑名单</p>
   */
  IpBlackList?: Array<string>
  /**
   * <p>插件配置</p>
   */
  PluginConfigs?: Array<PluginConfigDTO>
  /**
   * <p>超时配置，秒</p>
   */
  Timeout?: number
  /**
   * <p>是否开启提示词安全检测</p>
   */
  PromptModerateStatus?: boolean
  /**
   * <p>提示词安全检测配置</p>
   */
  PromptModerateConfig?: PromptModerateConfigDTO
  /**
   * <p>是否开启敏感数据检测</p>
   */
  SensitiveDataCheckStatus?: boolean
  /**
   * <p>敏感数据检测配置</p>
   */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO
}

/**
 * secretKey的出参
 */
export interface AgentAppSecretKeyVO {
  /**
   * secret id
   */
  SecretID?: string
  /**
   * secret key
   */
  SecretKey?: string
}

/**
 * mcp安全规则
 */
export interface McpSecurityRule {
  /**
   * 规则ID
   */
  ID?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 处置动作
   */
  Act?: string
}

/**
 * ModifyAgentApp请求参数结构体
 */
export interface ModifyAgentAppRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * 名称
   */
  Name?: string
  /**
   * OAuth2资源服务器ID
   */
  OAuth2ResourceServerID?: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * InvokeLimitConfigDTO
 */
export interface InvokeLimitConfigDTO {
  /**
   * Type类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 令牌桶最大容量

注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenBucketMaxNum?: number
  /**
   * 令牌生成速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenBucketRate?: number
  /**
   * 漏斗容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunnelMaxNum?: number
  /**
   * 漏嘴流速
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunnelRate?: number
  /**
   * 滑动窗口最大请求数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlidingWindowMaxNum?: number
  /**
   * 滑动窗口长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlidingWindowSize?: number
  /**
   * 时间窗口最大请求数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeWindow?: number
  /**
   * 时间窗口长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeWindowInterval?: number
  /**
   * 请求的超时时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeout?: number
}

/**
 * 工具级别配置
 */
export interface ToolConfigDTO {
  /**
   * 工具名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolName?: string
  /**
   * 是否开启限流配置
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 限流配置
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * 绑定安全规则
   */
  McpSecurityRules?: Array<BindMcpSecurityRuleDTO>
}

/**
 * CreateAgentApp返回参数结构体
 */
export interface CreateAgentAppResponse {
  /**
   * app id
   */
  Data?: CreateAgentAppResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentAppModelServices请求参数结构体
 */
export type DescribeAgentAppModelServicesRequest = null

/**
 * DeleteAgentCredential返回参数结构体
 */
export interface DeleteAgentCredentialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMcpServer返回参数结构体
 */
export interface DescribeMcpServerResponse {
  /**
   * mcp server详情
   */
  Data?: DescribeMcpServerResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询模型列表的响应
 */
export interface DescribeModelsResponseVO {
  /**
   * 条目
   */
  Total?: number
  /**
   * 列表
   */
  Items?: Array<DescribeModelResponseVO>
}

/**
 * BindMcpSecurityRuleDTO，替换之前的McpSecurityRule
 */
export interface BindMcpSecurityRuleDTO {
  /**
   * 规则ID
   */
  ID?: string
  /**
   * 处置动作
   */
  Act?: string
}

/**
 * 应用关联的mcp响应
 */
export interface AgentAppMcpServerVO {
  /**
   * 绑定ID
   */
  ID?: string
  /**
   * 需要认证
   */
  NeedAuth?: boolean
  /**
   * 凭据ID
   */
  AgentCredentialID?: string
  /**
   * 凭据详情
   */
  AgentCredentialVO?: DescribeAgentCredentialResp
  /**
   * mcp详情
   */
  McpServerVO?: DescribeMcpServerResponseVO
  /**
   * 关联时间
   */
  RelateTime?: string
  /**
   * 应用为OAuth2认证时，sse模式请求mcp时的资源标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSEResourceIdentifier?: string
  /**
   * 应用为OAuth2认证时，streamable模式请求mcp时的资源标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamableResourceIdentifier?: string
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentAppID?: string
  /**
   * mcp ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  McpServerID?: string
}

/**
 * DeleteModelService返回参数结构体
 */
export interface DeleteModelServiceResponse {
  /**
   * 结果集
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMcpServerResponseVO
 */
export interface DescribeMcpServerResponseVO {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceID?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 标签ID数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelIDs?: Array<string>
  /**
   * 目录ID数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  CategoryIDs?: Array<string>
  /**
   * 负载方式，robin random consistentHash
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetSelect?: string
  /**
   * 目标服务器
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetHosts?: Array<TargetHostDTO>
  /**
   * 后端协议：http https
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpProtocolType?: string
  /**
   * 证书检查
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckTargetCertsError?: boolean
  /**
   * 目标路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetPath?: string
  /**
   * 流量控制状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 流量控制配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * IP白名单开启状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpWhiteStatus?: boolean
  /**
   * IP白名单配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpWhiteConfig?: IpConfig
  /**
   * IP黑名单开启状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpBlackStatus?: boolean
  /**
   * IP黑名单配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpBlackConfig?: IpConfig
  /**
   * mcp server ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 预览地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  App?: IDNameVO
  /**
   * 目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalogs?: Array<IDNameVO>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<IDNameVO>
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
  /**
   * 用户appID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppID?: number
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 自定义host
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomHttpHost?: string
  /**
   *  Http 请求host类型 useRequestHost 保持源请求host targetHost 修正为源站host  customHost 自定义host
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpHostType?: string
  /**
   * 请求的超时时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeout?: number
  /**
   * mcp server模式
   */
  Mode?: string
  /**
   * mcp version
   */
  McpVersion?: string
  /**
   * 封装模式下绑定的服务ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  WrapServices?: Array<string>
  /**
   * 工具数量
   */
  ToolNum?: number
  /**
   * 安全规则集响应
   */
  McpSecurityRulesVO?: Array<McpSecurityRulesVO>
  /**
   * 真实工具级别配置，实时拉取了tool/list做渲染的，如果tool/list不通，就拉不到。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolConfigs?: Array<ToolConfigVO>
  /**
   * 访问URL
   */
  UrlObj?: McpUrlObj
  /**
   * 后端mcp服务是否正常
   */
  ToolMessage?: string
  /**
   * 后端mcp服务的工具列表
   */
  Tools?: Array<McpTool>
  /**
   * 封装的API分组ID
   */
  WrapPaasID?: string
  /**
   * 关联的agentApp数量
   */
  RelateAgentAppNum?: number
  /**
   * 插件配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginConfigs?: Array<PluginConfigDTO>
}

/**
 * mcp工具注解
 */
export interface McpToolAnnotation {
  /**
   * title for the tool
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * If true, the tool does not modify its environment
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadOnlyHint?: boolean
  /**
   * If true, the tool may perform destructive updates
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestructiveHint?: boolean
  /**
   * If true, repeated calls with same args have no additional effect
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdempotentHint?: boolean
  /**
   * If true, tool interacts with external entities
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenWorldHint?: boolean
}

/**
 * 开始结束时间结构体
 */
export interface StartEndTime {
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * DeleteModel返回参数结构体
 */
export interface DeleteModelResponse {
  /**
   * 结果集
   */
  Data?: ResultIDsVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IDNameVO
 */
export interface IDNameVO {
  /**
   * 业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * ServicesVO
 */
export interface DescribeMcpServersResponseVO {
  /**
   * 条目
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DescribeMcpServerResponseVO>
}

/**
 * ModifyModelService请求参数结构体
 */
export interface ModifyModelServiceRequest {
  /**
   * <p>实例</p>
   */
  InstanceID: string
  /**
   * <p>模型服务ID</p>
   */
  ID: string
  /**
   * <p>模型服务名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>模板模型列表</p>
   */
  TargetModels?: Array<TargetModelDTO>
  /**
   * <p>是否开启限流</p>
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * <p>限流配置</p>
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * <p>是否开启token控制</p>
   */
  TokenLimitStatus?: boolean
  /**
   * <p>token控制</p>
   */
  TokenLimitConfig?: TokenLimitConfigDTO
  /**
   * <p>是否开启内容安全</p>
   */
  TmsStatus?: boolean
  /**
   * <p>内容安全配置</p>
   */
  TmsConfig?: TmsConfigDTO
  /**
   * <p>是否开启IP白名单</p>
   */
  IpWhiteStatus?: boolean
  /**
   * <p>IP白名单</p>
   */
  IpWhiteList?: Array<string>
  /**
   * <p>是否开启IP黑名单</p>
   */
  IpBlackStatus?: boolean
  /**
   * <p>IP黑名单</p>
   */
  IpBlackList?: Array<string>
  /**
   * <p>插件配置</p>
   */
  PluginConfigs?: Array<PluginConfigDTO>
  /**
   * <p>超时配置，秒</p>
   */
  Timeout?: number
  /**
   * <p>是否开启提示词安全检测配置</p>
   */
  PromptModerateStatus?: boolean
  /**
   * <p>提示词安全检测配置</p>
   */
  PromptModerateConfig?: PromptModerateConfigDTO
  /**
   * <p>是否开启敏感数据检测</p>
   */
  SensitiveDataCheckStatus?: boolean
  /**
   * <p>敏感数据检测配置</p>
   */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO
}

/**
 * ModifyModel返回参数结构体
 */
export interface ModifyModelResponse {
  /**
   * 结果集
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentAppModelServices请求参数结构体
 */
export interface CreateAgentAppModelServicesRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * 关联的model service
   */
  ModelServices: Array<AgentAppModelServiceDTO>
}

/**
 * 查询模型列表的响应
 */
export interface DescribeModelServicesResponseVO {
  /**
   * 条目
   */
  Total?: number
  /**
   * 列表
   */
  Items?: Array<DescribeModelServiceResponseVO>
}

/**
 * DeleteMcpServer返回参数结构体
 */
export interface DeleteMcpServerResponse {
  /**
   * mcp server ID
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结果ID数组
 */
export interface ResultIDsVO {
  /**
   * 结果ID数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  IDs?: Array<string>
}

/**
 * DescribeAgentCredentials请求参数结构体
 */
export type DescribeAgentCredentialsRequest = null

/**
 * 创建Agent应用的返回值，根据创建的AuthType，返回ApiKey或者SecretKey
 */
export interface CreateAgentAppResp {
  /**
   * app id
   */
  ID?: string
  /**
   * 如果authType为apiKey时，返回该字段
   */
  ApiKey?: string
  /**
   * 如果authType为secretKey时，返回该字段
   */
  SecretKey?: string
  /**
   * 如果authType为secretKey时，返回该字段
   */
  SecretID?: string
}

/**
 * CreateMcpServer返回参数结构体
 */
export interface CreateMcpServerResponse {
  /**
   * mcp server ID
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentApps请求参数结构体
 */
export interface DescribeAgentAppsRequest {
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 服务ID数组
   */
  IDs?: Array<string>
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * notID列表
   */
  NotIDs?: Array<string>
  /**
   * 状态：normal正常状态，disabled下线状态
   */
  Status?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 认证类型：apiKey，secretKey
   */
  AuthType?: string
  /**
   * 排序
   */
  Sort?: DescribeAgentAppsSortDTO
  /**
   * 凭据ID
   */
  AgentCredentialID?: string
}

/**
 * 工具配置响应
 */
export interface ToolConfigVO {
  /**
   * 工具名称
   */
  ToolName?: string
  /**
   * 是否开启限流配置
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 限流配置
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * 绑定安全规则（响应）
   */
  McpSecurityRules?: Array<BindMcpSecurityRuleVO>
}

/**
 * DescribeAgentApp返回参数结构体
 */
export interface DescribeAgentAppResponse {
  /**
   * app详情
   */
  Data?: DescribeAgentAppResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResultIDVO
 */
export interface ResultIDVO {
  /**
   * 对象ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
}

/**
 * CreateModel请求参数结构体
 */
export interface CreateModelRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型名称
   */
  Name: string
  /**
   * 协议类型：http/https
   */
  HttpProtocolType: string
  /**
   * 目标路径
   */
  TargetPath: string
  /**
   * 目标服务器
   */
  TargetHosts: Array<TargetHostDTO>
  /**
   * 凭据ID
   */
  CredentialID?: string
  /**
   * https时，是否检查证书合法
   */
  CheckTargetCertsError?: boolean
  /**
   * http协议版本：1.1/2.0
   */
  HttpProtocolVersion?: string
}

/**
 * DescribeModel请求参数结构体
 */
export interface DescribeModelRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型ID
   */
  ID: string
}

/**
 * 凭证内容头
 */
export interface AgentCredentialContentHeaderDTO {
  /**
   * 凭据header key
   */
  Key?: string
  /**
   * 凭据header value
   */
  Value?: string
}

/**
 * 敏感数据检测配置
 */
export interface SensitiveDataCheckConfigDTO {
  /**
   * <p>执行动作</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: string
  /**
   * <p>响应拦截内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InterceptMessage?: string
  /**
   * <p>检测项</p><p>枚举值：</p><ul><li>birthday： 生日</li><li>email： 邮箱</li><li>identity_number： 身份证</li><li>phone_number： 电话号码</li><li>secret： 秘钥</li><li>password： 密码</li><li>private_key： 私钥</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckItems?: Array<string>
}

/**
 * BindMcpSecurityRuleVO，重新定义了之前的McpSecurityRulesVO
 */
export interface BindMcpSecurityRuleVO {
  /**
   * 规则ID
   */
  ID?: string
  /**
   * 规则类型
   */
  Type?: string
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 版本号
   */
  VersionNumber?: string
  /**
   * 当前选择的处置动作
   */
  Act?: string
  /**
   * 支持的处置动作
   */
  SupportActs?: Array<string>
  /**
   * 内容类型
   */
  BodyType?: string
  /**
   * icon类型
   */
  IconType?: string
}

/**
 * 绑定的安全规则列表
 */
export interface McpSecurityRulesVO {
  /**
   * 规则ID
   */
  ID?: string
  /**
   * 规则类型
   */
  Type?: string
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 风险等级
   */
  RiskLevel?: string
  /**
   * 版本号
   */
  VersionNumber?: string
  /**
   * 状态开关
   */
  Status?: string
  /**
   * 当前选择的处置动作
   */
  Act?: string
  /**
   * 支持的处置动作
   */
  SupportActs?: Array<string>
  /**
   * 内容类型
   */
  BodyType?: string
  /**
   * icon类型
   */
  IconType?: string
}

/**
 * DeleteAgentAppModelServices返回参数结构体
 */
export interface DeleteAgentAppModelServicesResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateModel返回参数结构体
 */
export interface CreateModelResponse {
  /**
   * 结果集
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询模型服务列表的排序
 */
export interface DescribeModelServicesSort {
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 最后修改时间
   */
  LastUpdateTime?: number
  /**
   * 模型名称
   */
  Name?: number
  /**
   * 状态
   */
  Status?: number
}

/**
 * agentApp查询排序
 */
export interface DescribeAgentAppsSortDTO {
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 修改时间
   */
  UpdateTime?: number
  /**
   * 名称
   */
  Name?: number
  /**
   * 状态
   */
  Status?: number
}

/**
 * DescribeMcpServers请求参数结构体
 */
export interface DescribeMcpServersRequest {
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 状态数组：normal正常状态，disabled下线状态
   */
  Statuses?: Array<string>
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 服务ID数组
   */
  IDs?: Array<string>
  /**
   * 模式：proxy代理模式； wrap封装模式；
   */
  Modes?: Array<string>
  /**
   * 绑定的安全规则ID
   */
  McpSecurityRuleID?: string
  /**
   * 绑定安全规则的处置动作（填写时McpSecurityRuleID得必填）
   */
  McpSecurityRuleAct?: string
  /**
   * 已绑定插件id
   */
  PluginID?: string
}

/**
 * DescribeAgentApps返回参数结构体
 */
export interface DescribeAgentAppsResponse {
  /**
   * app列表
   */
  Data?: DescribeAgentAppsResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentApp返回参数结构体
 */
export interface ModifyAgentAppResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelService返回参数结构体
 */
export interface DescribeModelServiceResponse {
  /**
   * 结果集
   */
  Data?: DescribeModelServiceResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 凭证内容
 */
export interface AgentCredentialContentDTO {
  /**
   * 如果认证类型为sts时，该项必填
   */
  STSSystem?: string
  /**
   * 如果认证类型为sts时，该项必填
   */
  STSService?: string
  /**
   * 如果认证类型为reqKey时，该项必填
   */
  Headers?: Array<AgentCredentialContentHeaderDTO>
}

/**
 * DescribeAgentCredential返回参数结构体
 */
export interface DescribeAgentCredentialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Mcp的访问URL
 */
export interface McpUrlObj {
  /**
   * sse访问URL
   */
  SSEUrl?: string
  /**
   * streamable访问URL
   */
  StreamAbleUrl?: string
}

/**
 * ModifyAgentAppModelServices请求参数结构体
 */
export interface ModifyAgentAppModelServicesRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * 关联的model service
   */
  ModelServices: Array<AgentAppModelServiceDTO>
}

/**
 * DescribeModelService请求参数结构体
 */
export interface DescribeModelServiceRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型服务ID
   */
  ID: string
}

/**
 * DeleteAgentAppMcpServers请求参数结构体
 */
export interface DeleteAgentAppMcpServersRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * mcp server id数组
   */
  McpServerIDs: Array<string>
}

/**
 * 查询app详情响应
 */
export interface DescribeAgentAppResp {
  /**
   * 租户appID
   */
  AppID?: number
  /**
   * 租户ID
   */
  Uin?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 应用ID
   */
  ID?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  UpdateTime?: string
  /**
   * 认证类型
   */
  AuthType?: string
  /**
   * apiKeys列表，脱敏
   */
  ApiKeys?: Array<string>
  /**
   * secretKey列表，脱敏
   */
  SecretKeys?: Array<AgentAppSecretKeyVO>
  /**
   * OAuth2 Resource Server ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OAuth2ResourceServerID?: string
  /**
   * 绑定mcpServer数量
   */
  McpServersNum?: number
  /**
   * 绑定的模型服务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelServicesNum?: number
}

/**
 * CreateMcpServer请求参数结构体
 */
export interface CreateMcpServerRequest {
  /**
   * 模式：proxy代理模式； wrap封装模式；
   */
  Mode: string
  /**
   * 版本号：2024-11-05 2025-03-26
   */
  McpVersion: string
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 名称
   */
  Name: string
  /**
   * 描述
   */
  Description: string
  /**
   * 封装服务列表
   */
  WrapServices?: Array<string>
  /**
   * 负载方式，robin random consistentHash
   */
  TargetSelect?: string
  /**
   * 目标服务器
   */
  TargetHosts?: Array<TargetHostDTO>
  /**
   * 后端协议：http https
   */
  HttpProtocolType?: string
  /**
   * 证书检查
   */
  CheckTargetCertsError?: boolean
  /**
   * 目标路径
   */
  TargetPath?: string
  /**
   * 流量控制开启状态
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 流量控制配置
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * IP白名单开启状态
   */
  IpWhiteStatus?: boolean
  /**
   * IP白名单配置
   */
  IpWhiteConfig?: IpConfig
  /**
   * IP黑名单开启状态
   */
  IpBlackStatus?: boolean
  /**
   * IP黑名单配置
   */
  IpBlackConfig?: IpConfig
  /**
   * 自定义host
   */
  CustomHttpHost?: string
  /**
   * Http 请求host类型：useRequestHost 保持源请求；host targetHost 修正为源站host；  customHost 自定义host
   */
  HttpHostType?: string
  /**
   * 请求的超时时间
   */
  Timeout?: number
  /**
   * 安全规则集
   */
  McpSecurityRules?: Array<McpSecurityRule>
  /**
   * 工具集配置（openapi时或许用的是）
   */
  ToolConfigs?: Array<ToolConfigDTO>
  /**
   * 封装的API分组ID
   */
  WrapPaasID?: string
  /**
   * 插件配置
   */
  PluginConfigs?: Array<PluginConfigDTO>
}

/**
 * DeleteModelService请求参数结构体
 */
export interface DeleteModelServiceRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型服务ID
   */
  ID: string
}

/**
 * DeleteAgentApp请求参数结构体
 */
export interface DeleteAgentAppRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
}

/**
 * DeleteMcpServer请求参数结构体
 */
export interface DeleteMcpServerRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * mcp server ID
   */
  ID: string
}

/**
 * ModifyModel请求参数结构体
 */
export interface ModifyModelRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型ID
   */
  ID: string
  /**
   * 模型名称
   */
  Name?: string
  /**
   * 协议类型：http/https
   */
  HttpProtocolType?: string
  /**
   * 目标路径
   */
  TargetPath?: string
  /**
   * 目标服务器
   */
  TargetHosts?: Array<TargetHostDTO>
  /**
   * 凭据ID
   */
  CredentialID?: string
  /**
   * https时，是否检查证书合法
   */
  CheckTargetCertsError?: boolean
  /**
   * http协议版本：1.1/2.0
   */
  HttpProtocolVersion?: string
}

/**
 * 凭据详情响应
 */
export interface DescribeAgentCredentialResp {
  /**
   * 租户应用ID
   */
  AppID?: number
  /**
   * 租户ID
   */
  Uin?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 凭据ID
   */
  ID?: string
  /**
   * 凭据名称
   */
  Name?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 关联应用数
   */
  RelateAgentAppNum?: number
  /**
   * 关联mcp数
   */
  RelateMcpServerNum?: number
  /**
   * 关联模型数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelateModelNum?: number
  /**
   * 凭据内容
   */
  Content?: AgentCredentialContentDTO
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  LastUpdateTime?: string
  /**
   * 类型
   */
  Type?: string
}

/**
 * CreateAgentAppModelServices返回参数结构体
 */
export interface CreateAgentAppModelServicesResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentAppMcpServers返回参数结构体
 */
export interface DescribeAgentAppMcpServersResponse {
  /**
   * 列表
   */
  Data?: DescribeAgentAppMcpServersResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelServices请求参数结构体
 */
export interface DescribeModelServicesRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 分页参数
   */
  Offset?: number
  /**
   * 分页限制
   */
  Limit?: number
  /**
   * ID列表
   */
  IDs?: Array<string>
  /**
   * 排除的ID列表
   */
  NotIDs?: Array<string>
  /**
   * 状态：normal，disabled
   */
  Status?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 模型ID
   */
  ModelID?: string
  /**
   * 排序
   */
  Sort?: DescribeModelServicesSort
}

/**
 * DescribeMcpServer请求参数结构体
 */
export interface DescribeMcpServerRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * mcp server ID
   */
  ID: string
}

/**
 * 内容安全配置
 */
export interface TmsConfigDTO {
  /**
   * 检测范围,请求/响应
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: Array<string>
  /**
   * 检测形式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 执行动作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: string
  /**
   * 合并请求检测event数，联动Mode字段sync
注意：此字段可能返回 null，表示取不到有效值。
   */
  MergeCount?: number
  /**
   * 风控策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizType?: string
  /**
   * 响应拦截内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  InterceptMessage?: string
}

/**
 * 应用绑定模型服务入参
 */
export interface AgentAppModelServiceDTO {
  /**
   * 模型服务ID
   */
  ID?: string
  /**
   * 是否开启流量控制
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 流量控制
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * 是否开启token控制
   */
  TokenLimitStatus?: boolean
  /**
   * token控制
   */
  TokenLimitConfig?: TokenLimitConfigDTO
}

/**
 * mcp工具
 */
export interface McpTool {
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 入参参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputSchema?: McpInputOutSchema
  /**
   * 注释
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations?: McpToolAnnotation
  /**
   * 出参参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputSchema?: McpInputOutSchema
}

/**
 * ModifyAgentAppModelServices返回参数结构体
 */
export interface ModifyAgentAppModelServicesResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgentAppModelServices请求参数结构体
 */
export interface DeleteAgentAppModelServicesRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * 关联的model service id
   */
  ModelServiceIDs: Array<string>
}

/**
 * ModifyAgentCredential返回参数结构体
 */
export interface ModifyAgentCredentialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询模型详情的响应
 */
export interface DescribeModelResponseVO {
  /**
   * 腾讯云AppID
   */
  AppID?: number
  /**
   * 腾讯云Uin
   */
  Uin?: string
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 模型ID
   */
  ID?: string
  /**
   * 模型名称
   */
  Name?: string
  /**
   * 凭据ID
   */
  CredentialID?: string
  /**
   * 凭据名称
   */
  CredentialName?: string
  /**
   * http协议类型
   */
  HttpProtocolType?: string
  /**
   * https时，是否校验目标证书
   */
  CheckTargetCertsError?: boolean
  /**
   * http协议版本：1.1/2.0
   */
  HttpProtocolVersion?: string
  /**
   * 目标路径
   */
  TargetPath?: string
  /**
   * 目标器列表
   */
  TargetHosts?: Array<TargetHostDTO>
  /**
   * 被模型服务使用的个数
   */
  ModelServiceCount?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后修改时间
   */
  LastUpdateTime?: string
}

/**
 * DeleteAgentCredential请求参数结构体
 */
export type DeleteAgentCredentialRequest = null

/**
 * ModifyModelService返回参数结构体
 */
export interface ModifyModelServiceResponse {
  /**
   * <p>结果集</p>
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentAppMcpServers请求参数结构体
 */
export interface CreateAgentAppMcpServersRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 应用ID
   */
  ID: string
  /**
   * 关联的mcp server
   */
  McpServers: Array<AgentAppMcpServerDTO>
}

/**
 * DescribeMcpServers返回参数结构体
 */
export interface DescribeMcpServersResponse {
  /**
   * mcp server列表
   */
  Data?: DescribeMcpServersResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentCredential请求参数结构体
 */
export type ModifyAgentCredentialRequest = null

/**
 * CreateAgentApp请求参数结构体
 */
export interface CreateAgentAppRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 名称
   */
  Name: string
  /**
   * 认证类型
   */
  AuthType: string
  /**
   * OAuth2资源服务器ID
   */
  OAuth2ResourceServerID?: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * 查询App列表响应
 */
export interface DescribeAgentAppsResp {
  /**
   * 条目总数
   */
  Total?: number
  /**
   * 具体条目
   */
  Items?: Array<DescribeAgentAppResp>
}

/**
 * CreateModelService返回参数结构体
 */
export interface CreateModelServiceResponse {
  /**
   * <p>结果集</p>
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentCredentials返回参数结构体
 */
export interface DescribeAgentCredentialsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgentAppMcpServers返回参数结构体
 */
export interface DeleteAgentAppMcpServersResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提示词安全配置
 */
export interface PromptModerateConfigDTO {
  /**
   * 执行动作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: string
  /**
   * 响应拦截内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  InterceptMessage?: string
}

/**
 * TargetHostDTO
 */
export interface TargetHostDTO {
  /**
   * 服务器
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rank?: number
}

/**
 * DescribeModels请求参数结构体
 */
export interface DescribeModelsRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 分页参数
   */
  Offset?: number
  /**
   * 分页限制
   */
  Limit?: number
  /**
   * ID列表
   */
  IDs?: Array<string>
  /**
   * 排除的ID列表
   */
  NotIDs?: Array<string>
  /**
   * 凭据ID
   */
  CredentialID?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 排序
   */
  Sort?: DescribeModelsSort
}

/**
 * DescribeAgentCredential请求参数结构体
 */
export type DescribeAgentCredentialRequest = null

/**
 * 限流窗口配置
 */
export interface LimitWindowsDTO {
  /**
   * 时间窗口，分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: number
  /**
   * 累计上限，k
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
}

/**
 * CreateAgentCredential请求参数结构体
 */
export type CreateAgentCredentialRequest = null

/**
 * ip黑白名单配置
 */
export interface IpConfig {
  /**
   * ip数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ips?: Array<string>
  /**
   * 生效类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EffectType?: string
  /**
   * 生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EffectTimes?: Array<StartEndTime>
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
}

/**
 * CreateAgentAppMcpServers返回参数结构体
 */
export interface CreateAgentAppMcpServersResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMcpServer请求参数结构体
 */
export interface ModifyMcpServerRequest {
  /**
   * mcp server ID
   */
  ID: string
  /**
   * 模式：proxy代理模式； wrap封装模式；
   */
  Mode: string
  /**
   * 版本号：2024-11-05 2025-03-26
   */
  McpVersion: string
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * 名称
   */
  Name: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 封装服务列表
   */
  WrapServices?: Array<string>
  /**
   * 负载方式，robin random consistentHash
   */
  TargetSelect?: string
  /**
   * 目标服务器
   */
  TargetHosts?: Array<TargetHostDTO>
  /**
   * 后端协议：http https
   */
  HttpProtocolType?: string
  /**
   * 证书检查
   */
  CheckTargetCertsError?: boolean
  /**
   * 目标路径
   */
  TargetPath?: string
  /**
   * 流量控制开启状态
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * 流量控制配置
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * IP白名单开启状态
   */
  IpWhiteStatus?: boolean
  /**
   * IP白名单配置
   */
  IpWhiteConfig?: IpConfig
  /**
   * IP黑名单开启状态
   */
  IpBlackStatus?: boolean
  /**
   * IP黑名单配置
   */
  IpBlackConfig?: IpConfig
  /**
   * 目标Host类型 0 默认 1 vpc
   */
  TargetHostType?: number
  /**
   * 自定义host
   */
  CustomHttpHost?: string
  /**
   * Http 请求host类型：useRequestHost 保持源请求；host targetHost 修正为源站host； customHost 自定义host
   */
  HttpHostType?: string
  /**
   * 请求的超时时间
   */
  Timeout?: number
  /**
   * 安全规则集
   */
  McpSecurityRules?: Array<McpSecurityRule>
  /**
   * 工具集配置（openapi可能会用到）
   */
  ToolConfigs?: Array<ToolConfigDTO>
  /**
   * 封装的API分组ID
   */
  WrapPaasID?: string
  /**
   * 插件配置
   */
  PluginConfigs?: Array<PluginConfigDTO>
}

/**
 * DescribeModel返回参数结构体
 */
export interface DescribeModelResponse {
  /**
   * 结果集
   */
  Data?: DescribeModelResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentAppMcpServers请求参数结构体
 */
export interface DescribeAgentAppMcpServersRequest {
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 应用ID
   */
  AgentAppIDs?: Array<string>
  /**
   * 关联的mcp
   */
  McpServerIDs?: Array<string>
  /**
   * 凭据ID
   */
  AgentCredentialIDs?: Array<string>
  /**
   * 关键词
   */
  Keyword?: string
}

/**
 * 关联的mcp服务配置
 */
export interface AgentAppMcpServerDTO {
  /**
   * mcp server id
   */
  ID: string
  /**
   * 是否需要鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  NeedAuth?: boolean
  /**
   * 凭据代填的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentCredentialID?: string
  /**
   * 应用为OAuth2认证时，sse模式请求mcp时的资源标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSEResourceIdentifier?: string
  /**
   * 应用为OAuth2认证时，streamable模式请求mcp时的资源标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamableResourceIdentifier?: string
}

/**
 * 模板模型
 */
export interface TargetModelDTO {
  /**
   * 模型ID
   */
  ID?: string
  /**
   * 匹配名称
   */
  Name?: string
  /**
   * 权重
   */
  Rank?: number
}

/**
 * Token限流配置
 */
export interface TokenLimitConfigDTO {
  /**
   * 单次请求上限，k
注意：此字段可能返回 null，表示取不到有效值。
   */
  LimitRequestBody?: number
  /**
   * 累次token总量消耗上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  LimitWindows?: Array<LimitWindowsDTO>
}

/**
 * 查询App mcpServer绑定列表响应
 */
export interface DescribeAgentAppMcpServersResp {
  /**
   * 条目总数
   */
  Total?: number
  /**
   * 具体条目
   */
  Items?: Array<AgentAppMcpServerVO>
}

/**
 * 查询模型服务详情的响应
 */
export interface DescribeModelServiceResponseVO {
  /**
   * <p>腾讯云AppID</p>
   */
  AppID?: number
  /**
   * <p>腾讯云Uin</p>
   */
  Uin?: string
  /**
   * <p>实例ID</p>
   */
  InstanceID?: string
  /**
   * <p>模型ID</p>
   */
  ID?: string
  /**
   * <p>模型名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>访问路径</p>
   */
  PubPath?: string
  /**
   * <p>路径匹配方式：absolute，prefix，regex</p>
   */
  PathMatchType?: string
  /**
   * <p>目标模型列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetModels?: Array<TargetModelDTO>
  /**
   * <p>模板模型的名称列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelNames?: Array<string>
  /**
   * <p>是否开启限流</p>
   */
  InvokeLimitConfigStatus?: boolean
  /**
   * <p>限流配置</p>
   */
  InvokeLimitConfig?: InvokeLimitConfigDTO
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>最后修改时间</p>
   */
  LastUpdateTime?: string
  /**
   * <p>是否开启token控制</p>
   */
  TokenLimitStatus?: boolean
  /**
   * <p>token控制</p>
   */
  TokenLimitConfig?: TokenLimitConfigDTO
  /**
   * <p>是否开启tms配置</p>
   */
  TmsStatus?: boolean
  /**
   * <p>tms配置</p>
   */
  TmsConfig?: TmsConfigDTO
  /**
   * <p>是否开启IP白名单</p>
   */
  IpWhiteStatus?: boolean
  /**
   * <p>IP白名单列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpWhiteList?: Array<string>
  /**
   * <p>是否开启IP黑名单</p>
   */
  IpBlackStatus?: boolean
  /**
   * <p>IP黑名单列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpBlackList?: Array<string>
  /**
   * <p>插件配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginConfigs?: Array<PluginConfigDTO>
  /**
   * <p>超时配置，单位秒</p>
   */
  Timeout?: number
  /**
   * <p>状态：normal，disabled</p>
   */
  Status?: string
  /**
   * <p>关联应用数</p>
   */
  RelateAgentAppNum?: number
  /**
   * <p>请求路径</p>
   */
  Url?: string
  /**
   * <p>是否开启提示词安全检测</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PromptModerateStatus?: boolean
  /**
   * <p>提示词安全检测配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PromptModerateConfig?: PromptModerateConfigDTO
  /**
   * <p>是否开启敏感数据检测</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SensitiveDataCheckStatus?: boolean
  /**
   * <p>敏感数据检测配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO
}

/**
 * DescribeModelsSort
 */
export interface DescribeModelsSort {
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 最后修改时间
   */
  LastUpdateTime?: number
  /**
   * 模型名称
   */
  Name?: number
}

/**
 * PluginConfigDTO
 */
export interface PluginConfigDTO {
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginName?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginID?: string
  /**
   * 优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level?: number
  /**
   * 表单配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginFormValues?: Array<PluginFormValueDTO>
}

/**
 * PluginFormValueDTO
 */
export interface PluginFormValueDTO {
  /**
   * 字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Field?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * DescribeAgentApp请求参数结构体
 */
export interface DescribeAgentAppRequest {
  /**
   * 实例ID
   */
  InstanceID: string
  /**
   * app id
   */
  ID: string
}

/**
 * DeleteAgentApp返回参数结构体
 */
export interface DeleteAgentAppResponse {
  /**
   * app id
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentCredential返回参数结构体
 */
export interface CreateAgentCredentialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentAppModelServices返回参数结构体
 */
export interface DescribeAgentAppModelServicesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMcpServer返回参数结构体
 */
export interface ModifyMcpServerResponse {
  /**
   * mcp server ID
   */
  Data?: ResultIDVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteModel请求参数结构体
 */
export interface DeleteModelRequest {
  /**
   * 实例
   */
  InstanceID: string
  /**
   * 模型ID数组
   */
  IDs: Array<string>
}

/**
 * DescribeModels返回参数结构体
 */
export interface DescribeModelsResponse {
  /**
   * 结果集
   */
  Data?: DescribeModelsResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelServices返回参数结构体
 */
export interface DescribeModelServicesResponse {
  /**
   * 结果集
   */
  Data?: DescribeModelServicesResponseVO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 出入参说明
 */
export interface McpInputOutSchema {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: string
  /**
   * 必填字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Required?: Array<string>
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}
