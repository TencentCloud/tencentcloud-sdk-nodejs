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
 * DeleteSkillShare请求参数结构体
 */
export interface DeleteSkillShareRequest {
  /**
   * <p>申请备注，必填（弹窗&quot;申请备注&quot;）</p>
   */
  ApplyRemark: string
  /**
   * <p>原 Skill ID，必填（前端无须感知 _shared 后缀）</p>
   */
  SkillId: string
  /**
   * <p>空间ID，必填</p>
   */
  SpaceId: string
  /**
   * <p>原版本 ID，必填（与 CreateSkillShare 上架时传的同一 version_id）</p>
   */
  VersionId: string
}

/**
 * ToolConfig
 */
export interface ToolConfig {
  /**
   * <p>API工具配置信息</p>
   */
  ApiToolConfig?: ApiToolConfig
  /**
   * <p>应用配置信息</p>
   */
  AppToolConfig?: AppToolConfig
  /**
   * <p>代码工具配置信息</p>
   */
  CodeToolConfig?: CodeToolConfig
  /**
   * <p>MCP工具配置信息</p>
   */
  MCPToolConfig?: MCPToolConfig
}

/**
 * SkillClassification Skill 分类与来源信息。
 */
export interface SkillClassification {
  /**
   * Skill 计费类型

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 免费 |
| 1 | 付费 |
   */
  BillingType: number
  /**
   * Skill 内置来源，仅在 create_type 为 SKILL_CREATE_TYPE_BUILTIN 时生效

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 占位 |
| 1 | ADP 专有 |
| 2 | 腾讯专有 |
| 3 | SkillHub |
| 99 | 其他 |
   */
  BuiltinSource: number
  /**
   * Skill 分类
   */
  CategoryKey: string
  /**
   * Skill 创建方式

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 占位 |
| 1 | 文件上传 |
| 2 | 由企业级共享流程生成 |
| 3 | AIGC 生成 |
| 99 | 内置 Skill |
   */
  CreateType: number
  /**
   * Skill 提供方类型

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 占位 |
| 1 | 官方 |
| 2 | 第三方 |
| 3 | 自定义 |
| 4 | 自定义企业级共享 |
   */
  ProviderType: number
  /**
   * Skill 来源链接
   */
  SourceLink: string
}

/**
 * Agent高级设置
 */
export interface AgentAdvancedConfig {
  /**
   * <p>最大推理轮数</p>
   */
  MaxReasoningRound?: number
}

/**
 * PluginStatistics
 */
export interface PluginStatistics {
  /**
   * 插件调用量
   */
  CallCount?: number
  /**
   * 工具数量
   */
  ToolCount?: number
}

/**
 * 意图达成信息
 */
export interface IntentAchievementInfo {
  /**
   * 描述
   */
  Description: string
  /**
   * 名称
   */
  Name: string
}

/**
 * RollbackRelease请求参数结构体
 */
export interface RollbackReleaseRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * release_id
   */
  ReleaseId: string
}

/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
  /**
   * <p>模型列表</p>
   */
  ModelList?: Array<Model>
  /**
   * <p>模型总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型配置
 */
export interface AppModelConfig {
  /**
   * AI一键优化模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiOptimizeModel: AIOptimizeModel
  /**
   * 实时文件解析模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileParseModel: FileParseModel
  /**
   * 生成模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  GenerateModel: GenerateModel
  /**
   * 多模态问答模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiModalQaModel: MultiModalQAModel
  /**
   * 多模态理解模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiModalUnderstandingModel: MultiModalUnderstandingModel
  /**
   * Prompt改写模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PromptRewriteModel: PromptRewriteModel
  /**
   * 思考模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThinkModel: ThinkModel
}

/**
 * 插件详情
 */
export interface Plugin {
  /**
   * 插件配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: PluginConfig
  /**
   * 创建时间，unix时间戳
   */
  CreateTime?: string
  /**
   * 插件运营管理信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation?: PluginOperation
  /**
   * 插件id
   */
  PluginId?: string
  /**
   * 插件版本号
   */
  PluginVersion?: number
  /**
   * 插件基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Profile?: PluginProfile
  /**
   * 插件统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: PluginStatistics
  /**
   * <p>插件状态，1:可用，2:不可用 </p><p>枚举值：</p><ul><li>1： 可用</li><li>2： 不可用</li></ul>
   */
  Status?: number
  /**
   * 工具列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolList?: Array<Tool>
  /**
   * 更新时间，Unix时间戳
   */
  UpdateTime?: string
  /**
   * 用户维度的插件状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserState?: PluginUserState
}

/**
 * ApiKey鉴权配置
 */
export interface ApiKeyAuthConfig {
  /**
   * 密钥位置 HEADER/QUERY

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | Header鉴权 |
| 1 | Query鉴权 |
   */
  KeyLocation: number
  /**
   * 密钥参数名
   */
  KeyParamName: string
  /**
   * 密钥参数值
   */
  KeyParamValue: string
}

/**
 * DescribeConversation请求参数结构体
 */
export interface DescribeConversationRequest {
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>子用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
}

/**
 * Conversation 会话信息
 */
export interface Conversation {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>创建时间</p>
   */
  CreateTime: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime: string
  /**
   * <p>会话标题</p>
   */
  Title?: string
  /**
   * <p>会话使用的用户端 AgentId</p>
   */
  AgentId?: string
}

/**
 * 插件授权配置
 */
export interface AuthConfig {
  /**
   * <p>授权方式。</p><p>枚举值：</p><ul><li>0：无鉴权</li><li>1：API Key 鉴权</li><li>2：CAM 授权</li><li>3：OAuth 2.0 授权</li></ul>
   */
  AuthType: number
  /**
   * API Key授权配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKeyAuthConfig?: ApiKeyAuthConfig
  /**
   * CAM授权配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  CamAuthConfig?: CamAuthConfig
  /**
   * OAuth2.0授权配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  OAuthConfig?: OAuthConfig
}

/**
 * AppShareAccessControl
 */
export interface AppShareAccessControl {
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_SHARE_ACCESS_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>APP_SHARE_ACCESS_TYPE_PUBLIC</td><td>1</td><td>公开访问(所有用户都可访问)</td></tr><tr><td>APP_SHARE_ACCESS_TYPE_INTERNAL</td><td>2</td><td>内部访问(仅企业用户可访问)</td></tr><tr><td>APP_SHARE_ACCESS_TYPE_ACCOUNT_WHITELIST</td><td>3</td><td>账号白名单(指定UIN/手机/邮箱/IP可访问)</td></tr></tbody></table>
   */
  AccessType?: number
  /**
   * <p>是否开启访问控制</p><p>枚举值：</p><ul><li>true： 启用</li><li>false： 禁用</li></ul>
   */
  Enabled?: boolean
  /**
   * <p>白名单信息</p>
   */
  Whitelist?: Array<AppShareWhitelistItem>
}

/**
 * 对话端自定义配置(所有模式共用,允许对话中动态修改配置)
 */
export interface DialogCustomConfig {
  /**
   * <p>是否开启对话端动态修改配置</p>
   */
  Enabled?: boolean
}

/**
 * DescribeMetricOverviewList返回参数结构体
 */
export interface DescribeMetricOverviewListResponse {
  /**
   * <p>所有域 Overview 统一出参：KPI 卡片列表，key 字符串标识指标，客户端按 resource_type 解析；key 白名单参考 platform.common.v2.MetricOverview 注释</p>
   */
  MetricList?: Array<MetricOverview>
  /**
   * <p>总记录数，等于 MetricList 长度，仅为列表接口一致性预留</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppSummaryList请求参数结构体
 */
export interface DescribeAppSummaryListRequest {
  /**
   * 空间ID(必填)
   */
  SpaceId: string
  /**
   * 过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - AppStatus: 应用状态,枚举值,精确匹配(APP_STATUS_OFFLINE=1/APP_STATUS_RUNNING=2/APP_STATUS_DISABLED=3) - AppMode: 应用模式,枚举值,精确匹配(APP_MODE_STANDARD=1/APP_MODE_AGENT=2/APP_MODE_SINGLE_WORKFLOW=3/APP_MODE_CLAW_AGENT=4)
   */
  FilterList?: Array<Filter>
  /**
   * 页码(从0开始)
   */
  PageNumber?: number
  /**
   * 每页数量(最大值:100)
   */
  PageSize?: number
  /**
   * 模糊查询
   */
  Query?: string
}

/**
 * ExecuteConfig
 */
export interface ExecuteConfig {
  /**
   * <p>Prompt配置</p>
   */
  PromptConfig?: AppTriggerPromptExecuteConfig
  /**
   * <p>工作流配置</p>
   */
  WorkflowConfig?: AppTriggerWorkflowExecuteConfig
}

/**
 * TriggerConfig
 */
export interface TriggerConfig {
  /**
   * <p>定时器配置</p>
   */
  ScheduledConfig?: AppTriggerScheduleConfig
  /**
   * <p>Webhook配置</p>
   */
  WebhookConfig?: AppTriggerWebhookConfig
}

/**
 * DescribeModelList请求参数结构体
 */
export interface DescribeModelListRequest {
  /**
   * <p>模型场景。0-不区分场景, 1-标准生成, 2-标准思考, 3-Agent思考, 4-多模态理解, 5-多模态问答, 6-改写, 7-长期记忆, 8-自然语言转SQL, 9-AI优化, 10-实时文件解析, 11-文件解析, 12-GraphRAG, 13-OpenClaw, 14-多模态Embedding, 15-Rerank, 16-文本Embedding, 17-Widget, 18-Claw模式, 19-工作流代码生成, 20-工作流大模型节点, 21-工作流节点专用向量化, 22-工作流参数提取, 23-工作流大模型知识问答, 24-工作流标签提取, 25-工作流意图识别, 26-工作流选项卡, 27-工作流逻辑判断, 28-文档生成问答, 29-知识库Schema</p><p>枚举值：</p><ul><li>0： 不区分场景</li><li>1： 标准生成</li><li>2： 标准思考</li><li>3： Agent思考</li><li>4： 多模态理解</li><li>5： 多模态问答</li><li>6： 改写</li><li>7： 长期记忆</li><li>8： 自然语言转SQL</li><li>9： AI优化</li><li>10： 实时文件解析</li><li>11： 文件解析</li><li>12： GraphRAG</li><li>13： OpenClaw</li><li>14： 多模态Embedding</li><li>15： Rerank</li><li>16： 文本Embedding</li><li>17： Widget</li><li>18： Claw模式</li><li>19： 工作流代码生成</li><li>20： 工作流大模型节点</li><li>21： 工作流节点专用向量化</li><li>22： 工作流参数提取</li><li>23： 工作流大模型知识问答</li><li>24： 工作流标签提取</li><li>25： 工作流意图识别</li><li>26： 工作流选项卡</li><li>27： 工作流逻辑判断</li><li>28： 文档生成问答</li><li>29： 知识库Schema</li></ul>
   */
  ModelScene: number
  /**
   * <p>空间ID</p>
   */
  SpaceId?: string
  /**
   * <p>关键词模糊搜索</p>
   */
  Query?: string
  /**
   * <p>页码。从0开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，默认20，最大100</p>
   */
  PageSize?: number
  /**
   * <p>过滤条件(多个 Filter 之间为 AND, 同一 Filter 多 Values 为 OR)<br>DeveloperName： 模型作者名称<br>ProviderName： 模型提供商名称<br>ProviderType：模型提供商类型</p>
   */
  FilterList?: Array<Filter>
}

/**
 * DescribeMsgRecordCategoryList返回参数结构体
 */
export interface DescribeMsgRecordCategoryListResponse {
  /**
   * <p>消息记录分类树列表</p>
   */
  CategoryList?: Array<MsgRecordCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVariable返回参数结构体
 */
export interface DeleteVariableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * API插件配置
 */
export interface ApiPluginConfig {
  /**
   * 授权配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthConfig?: AuthConfig
}

/**
 * 申诉中的配置 - 记录各配置项是否在申诉中
 */
export interface AppealingStatus {
  /**
   * 头像是否在申诉中
   */
  AvatarInAppeal: boolean
  /**
   * 兜底回复语是否在申诉中
   */
  FallbackReplyInAppeal: boolean
  /**
   * 欢迎语是否在申诉中
   */
  GreetingInAppeal: boolean
  /**
   * 应用名称是否在申诉中
   */
  NameInAppeal: boolean
  /**
   * 角色描述是否在申诉中
   */
  RoleInAppeal: boolean
}

/**
 * DescribeVariable返回参数结构体
 */
export interface DescribeVariableResponse {
  /**
   * 变量信息
   */
  Variable?: Variable
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CodeToolConfig
 */
export interface CodeToolConfig {
  /**
   * <p>代码</p>
   */
  Code?: string
  /**
   * <p>示例</p>
   */
  Example?: ToolExample
  /**
   * <p>输入参数</p>
   */
  Inputs?: Array<RequestParam>
  /**
   * <p>输出参数</p>
   */
  Outputs?: Array<ResponseParam>
}

/**
 * DescribeMsgRecordList请求参数结构体
 */
export interface DescribeMsgRecordListRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>过滤条件列表，支持：ChannelType（渠道类型，0 全部）、FeedbackType（反馈类型，-1 为全部）、QueryType、Query、CategoryId、ReplyMethod、StartTime、EndTime（秒时间戳）、Cursor（游标信息，上一页取响应 PrevCursor，下一页取响应 NextCursor）、Direction（方向，next 下一页，prev 上一页）、CallResult（调用结果，默认 0 为全部，1 为成功，2 为失败）、FailReason、Intent</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码，从 0 开始；不传时按 0 处理</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，最大 100；不传或传 0 时按默认分页大小处理</p>
   */
  PageSize?: number
  /**
   * <p>排序条件，只支持按 CreateTime 排序</p>
   */
  Sort?: Sort
}

/**
 * WeeklyTime
 */
export interface WeeklyTime {
  /**
   * 时间
   */
  TimeOfDay?: string
  /**
   * 周几
   */
  Weekday?: number
}

/**
 * 资源用量聚合明细
 */
export interface UsageSummary {
  /**
   * <p>MODEL 域专属</p>
   */
  Model?: ModelUsageSummary
  /**
   * <p>PLATFORM 域专属</p>
   */
  Platform?: PlatformUsageSummary
  /**
   * <p>PLUGIN 域专属</p>
   */
  Plugin?: PluginUsageSummary
  /**
   * <p>来源 ID；CORP 视图=space_id（企业视图按 space 分组），SPACE 视图=app_id（uint64 字符串），APP 视图=app_id</p>
   */
  SourceId?: string
  /**
   * <p>来源名称；CORP 视图=space_name，SPACE 视图=app_name，APP 视图=app_name</p>
   */
  SourceName?: string
  /**
   * <p>视图类型，决定 SourceId/SourceName 的业务含义</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>VIEW_TYPE_UNSPECIFIED</td><td>0</td><td>未指定（无效值，请求勿传）</td></tr><tr><td>VIEW_TYPE_CORP</td><td>1</td><td>企业视图</td></tr><tr><td>VIEW_TYPE_SPACE</td><td>2</td><td>空间视图</td></tr><tr><td>VIEW_TYPE_APP</td><td>3</td><td>应用视图</td></tr></tbody></table>
   */
  ViewType?: number
}

/**
 * 引用摘要（用于详情页展示，对应DB t_skill_reference）
 */
export interface SkillReferenceSummary {
  /**
   * <p>关联ID</p>
   */
  ReferenceId?: string
  /**
   * <p>关联名称</p>
   */
  ReferenceName?: string
  /**
   * <p>关联类型</p><p>枚举值:<br>| uint | 描述 |<br>| --- | --- |<br>| 0 | 占位 |<br>| 1 | ClawPro |<br>| 2 | agent |</p>
   */
  ReferenceType?: number
  /**
   * <p>空间ID</p>
   */
  SpaceId?: string
  /**
   * <p>空间名称</p>
   */
  SpaceName?: string
  /**
   * <p>Reference实例拥有者</p>
   */
  Owner?: string
}

/**
 * ModifyAppTrigger请求参数结构体
 */
export interface ModifyAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>触发器信息</p>
   */
  Trigger?: AppTrigger
  /**
   * <p>触发器唯一ID</p>
   */
  TriggerId?: string
  /**
   * <p>修改字段</p>
   */
  UpdateMask?: FieldMask
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * DescribeConcurrencyLimitDetailList返回参数结构体
 */
export interface DescribeConcurrencyLimitDetailListResponse {
  /**
   * <p>并发超限明细列表</p>
   */
  ConcurrencyLimitDetailList?: Array<ConcurrencyLimitDetail>
  /**
   * <p>总记录数，用于前端分页</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 可编辑配置
 */
export interface AgentSpec {
  /**
   * <p>Agent基本配置</p>
   */
  Profile?: AgentProfile
  /**
   * 系统提示词
   */
  Instructions?: string
  /**
   * 主模型配置
   */
  Model?: AgentModelConfig
  /**
   * <p>工具信息</p>
   */
  ToolList?: Array<AgentToolConfig>
  /**
   * <p>插件信息</p>
   */
  PluginList?: Array<AgentPluginConfig>
  /**
   * <p>技能信息</p>
   */
  SkillList?: Array<AgentSkillConfig>
  /**
   * 高级设置
   */
  AdvancedConfig?: AgentAdvancedConfig
}

/**
 * ClawAgent配置
 */
export interface ClawAgentConfig {
  /**
   * Agent团队协作配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentTeamConfig?: ClawAgentAgentTeamConfig
  /**
   * 长期记忆配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  LongMemoryConfig?: ClawAgentLongMemoryConfig
}

/**
 * CreatePlugin请求参数结构体
 */
export interface CreatePluginRequest {
  /**
   * <p>插件基础资料</p>
   */
  Profile: PluginProfile
  /**
   * <p>插件类型配置</p>
   */
  Config: PluginConfig
  /**
   * <p>当前空间id</p>
   */
  SpaceId: string
  /**
   * <p>插件的工具列表</p>
   */
  ToolList?: Array<Tool>
  /**
   * <p>登录用户主账号(集成商模式必填)</p>
   */
  LoginUin?: string
  /**
   * <p>登录用户子账号(集成商模式必填)</p>
   */
  LoginSubAccountUin?: string
}

/**
 * 思考模型配置
 */
export interface ThinkModel {
  /**
   * 思考模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * DeleteAgent返回参数结构体
 */
export interface DeleteAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryRelease请求参数结构体
 */
export interface RetryReleaseRequest {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 发布任务ID
   */
  ReleaseId: string
}

/**
 * 应用配置 - 用户可修改的所有配置
 */
export interface AppConfig {
  /**
   * 体验配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Experience: AppExperienceConfig
  /**
   * 欢迎语配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Greeting: AppGreetingConfig
  /**
   * 记忆配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory: AppMemoryConfig
  /**
   * 模式相关配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode: AppModeConfig
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: AppModelConfig
  /**
   * 联网搜索配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebSearch: AppWebSearchConfig
  /**
   * 工作流配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workflow: AppWorkflowConfig
}

/**
 * 应用辅助信息 - 包含各类辅助状态和扩展信息(用户不可修改)
 */
export interface AppAuxiliaryInfo {
  /**
   * 申诉信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Appeal: AppAppeal
  /**
   * 搜索资源状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchResourceStatus: SearchResourceStatusInfo
  /**
   * 特殊状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecialStatusInfo: SpecialStatusInfo
  /**
   * 子状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubStatus: AppSubStatusInfo
}

/**
 * ModifyConversation请求参数结构体
 */
export interface ModifyConversationRequest {
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>登录用户子账号(集成商模式必填)</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>登录用户主账号(集成商模式必填)</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
  /**
   * 会话ID
   */
  ConversationId?: string
  /**
   * 会话标题
   */
  Title?: string
}

/**
 * DescribeAgentReleasePreviewList返回参数结构体
 */
export interface DescribeAgentReleasePreviewListResponse {
  /**
   * <p>发布预览列表</p>
   */
  ReleaseList?: Array<AgentReleasePreview>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsageDetailList返回参数结构体
 */
export interface DescribeUsageDetailListResponse {
  /**
   * <p>总记录数，用于前端分页</p>
   */
  TotalCount?: string
  /**
   * <p>资源调用时序明细列表</p>
   */
  UsageDetailList?: Array<UsageDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppTrigger返回参数结构体
 */
export interface DescribeAppTriggerResponse {
  /**
   * <p>应用触发器信息</p>
   */
  Trigger?: AppTrigger
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVariable返回参数结构体
 */
export interface ModifyVariableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 技能入参
 */
export interface AgentSkillConfig {
  /**
   * <p>技能ID</p>
   */
  SkillId?: string
}

/**
 * ModifyAgent请求参数结构体
 */
export interface ModifyAgentRequest {
  /**
   * <p>应用Id</p>
   */
  AppId?: string
  /**
   * <p>Agent Id</p>
   */
  AgentId?: string
  /**
   * <p>修改后的Agent的信息</p>
   */
  Agent?: AgentSpec
  /**
   * <p>需要更新的字段路径，如 ["Profile.Name", "Profile.IconUrl", "Instructions", "Model", "ToolList", "PluginList", "SkillList", "AdvancedConfig"]</p>
   */
  UpdateMask?: FieldMask
}

/**
 * PluginOperation
 */
export interface PluginOperation {
  /**
   * 是否允许外部调用
   */
  AllowExternalAccess?: boolean
  /**
   * <p>计费类型。</p><p>枚举值：</p><ul><li>0：免费</li><li>1：公测</li><li>2：官方收费</li></ul>
   */
  BillingType?: number
  /**
   * 插件分类标识
   */
  CategoryKey?: string
  /**
   * 插件概述
   */
  Introduction?: string
  /**
   * 是否精选
   */
  IsRecommended?: boolean
}

/**
 * 联网搜索配置(国际版使用)
 */
export interface AppWebSearchConfig {
  /**
   * API密钥
   */
  ApiKey: string
  /**
   * 是否开启
   */
  Enabled: boolean
  /**
   * 服务提供商
   */
  Provider: string
  /**
   * 返回结果数量
   */
  TopN: number
}

/**
 * Agent 基本配置
 */
export interface AgentProfile {
  /**
   * <p>Agent名称</p>
   */
  Name?: string
  /**
   * <p>图标URL</p>
   */
  IconUrl?: string
  /**
   * <p>Agent 角色：0=主 / 1=子</p>
   */
  Role?: number
  /**
   * <p>Agent 描述</p>
   */
  Description?: string
  /**
   * <p>应用名称</p>
   */
  AppName?: string
  /**
   * <p>开发者</p>
   */
  Developer?: string
  /**
   * <p>主AgentId，只读，不可通过修改接口进行变更</p>
   */
  ParentAgentId?: string
}

/**
 * 模型限制信息
 */
export interface ModelLimit {
  /**
   * 模型上下文长度展示文案（如 "128K"、"1000K"）
   */
  ContextLengthDescription?: string
  /**
   * 模型对话框输入长度字符数限制
   */
  InputLengthLimit?: number
  /**
   * 模型提示词长度字符数限制
   */
  PromptLengthLimit?: number
}

/**
 * RunAppTriggerNow请求参数结构体
 */
export interface RunAppTriggerNowRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * AppTriggerWebhookConfig
 */
export interface AppTriggerWebhookConfig {
  /**
   * <p>触发器webhook参数配置</p>
   */
  ParamSchemaConfig?: AppTriggerWebhookParamSchemaConfig
  /**
   * <p>webhook的key</p>
   */
  WebhookKey?: string
  /**
   * <p>webhook的密钥</p>
   */
  WebhookToken?: string
  /**
   * <p>webhook的地址</p>
   */
  WebhookUrl?: string
}

/**
 * MsgRecordSource
 */
export interface MsgRecordSource {
  /**
   * 对话消息的接入渠道类型：0=未指定, 1=坐席, 2=体验页面(腾讯云), 3=评测端对话, 4=体验页面(手机号), 5=对话端API接入, 6=评测任务对话, 10=工作流调试, 10000=微信公众号, 10001=微信服务号, 10002=企微应用, 10003=网页组件, 10004=微信客服, 10005=微信小程序, 10006=元器, 10007=应用宝, 10008=元宝, 10009=企微智能机器人, 10010=元器API, 10011=LINE, 10012=Telegram, 10100=电脑管家, 20001=荣耀智能体平台, 20002=小米应用商店；user_id（string）为该渠道下的访客唯一标识。
   */
  ChannelType?: number
  /**
   * 用户ID
   */
  FromId?: string
  /**
   * 消息发送者的用户来源类型：1=用户（访客/C端用户）, 2=机器人（AI回复）, 3=坐席（人工客服）；from_id（string）为该来源类型下的用户唯一标识 ID。
   */
  FromType?: number
  /**
   * 用户头像
   */
  UserAvatar?: string
  /**
   * 访客ID
   */
  UserId?: string
  /**
   * 访客名称
   */
  UserNickname?: string
}

/**
 * MsgRecordResult
 */
export interface MsgRecordResult {
  /**
   * 表示该条消息的调用结果：0=CALL_RESULT_UNKNOWN（全部/未知）, 1=CALL_RESULT_SUCCESS（成功）, 2=CALL_RESULT_FAILED（失败）；fail_reason（string）为调用失败时的失败原因描述。
   */
  CallResult?: number
  /**
   * 自定义变量，json字符串
   */
  CustomerVariable?: string
  /**
   * 失败原因
   */
  FailReason?: string
  /**
   * 首token耗时
   */
  FirstTokenLatency?: number
  /**
   * 输入token数
   */
  InputToken?: number
  /**
   * 输出token数
   */
  OutputToken?: number
  /**
   * 总token数
   */
  TotalToken?: number
  /**
   * 总token耗时
   */
  TotalTokenLatency?: number
}

/**
 * CreateVariable返回参数结构体
 */
export interface CreateVariableResponse {
  /**
   * variable_id
   */
  VariableId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分享链接信息(详情查询返回，用户不可修改部分；access_control 用户可修改部分由 ModifyApp 承载)
 */
export interface AppShareURLInfo {
  /**
   * 当前生效的访问控制配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessControl: AppShareAccessControl
  /**
   * 分享URL
   */
  ShareUrl: string
}

/**
 * 模型属性
 */
export interface ModelProperty {
  /**
   * 属性名称
   */
  Name?: string
  /**
   * 属性值
   */
  Value?: string
}

/**
 * CreateRelease返回参数结构体
 */
export interface CreateReleaseResponse {
  /**
   * <p>need_approval</p>
   */
  NeedApproval?: boolean
  /**
   * <p>release_id</p>
   */
  ReleaseId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConversationList请求参数结构体
 */
export interface DescribeConversationListRequest {
  /**
   * <p>会话类型，传 CONVERSATION_TYPE_UNSPECIFIED 表示全部 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>关键词</p>
   */
  Keyword?: string
  /**
   * <p>限制数目（整型），配合Offset使用</p>
   */
  Limit?: number
  /**
   * <p>子账户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主账户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>偏移量（整型），配合Limit使用，从0开始</p>
   */
  Offset?: number
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
  /**
   * <p>用户端 AgentId，当需要查询基于用户端 AgentId 创建的会话时使用</p>
   */
  AgentId?: string
}

/**
 * 模型详细信息
 */
export interface ModelDetailInfo {
  /**
   * 模型别名
   */
  Alias?: string
  /**
   * 历史对话条数限制
   */
  HistoryLimit?: number
  /**
   * 模型唯一 ID
   */
  ModelId?: string
  /**
   * 模型参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelParams?: ModelParams
}

/**
 * CreateApp请求参数结构体
 */
export interface CreateAppRequest {
  /**
   * 空间ID
   */
  SpaceId: string
  /**
   * 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式
   */
  AppMode?: number
  /**
   * 应用头像
   */
  Avatar?: string
  /**
   * 应用描述
   */
  Description?: string
  /**
   * 应用名称
   */
  Name?: string
}

/**
 * DescribeConcurrencyLimitDetailList请求参数结构体
 */
export interface DescribeConcurrencyLimitDetailListRequest {
  /**
   * <p>查询时间范围（Unix 秒）</p>
   */
  TimeRange: TimeRange
  /**
   * <p>视图范围：企业视图 / 空间视图/ 应用视图</p>
   */
  ViewScope: ViewScope
  /**
   * <p>扩展过滤。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：concurrency_type（qpm_tpm/dedicated，默认 qpm_tpm）、model_name（必填）、space_id、app_id/resource_id/source_id（应用ID，多选）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数）</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码，从 0 开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  PageSize?: number
}

/**
 * MCP插件配置信息
 */
export interface MCPPluginConfig {
  /**
   * <p>MCP插件外部访问地址</p>
   */
  ExternalMCPServerUrl?: string
  /**
   * <p>MCP server地址</p>
   */
  MCPServerUrl?: string
  /**
   * <p>MCP传输类型: SSE/Streamable<br>枚举值:<br>| uint | 描述 |<br>| --- | --- |<br>| 0 | SSE + HTTP 模式 |<br>| 1 | Streamable HTTP 模式 |</p>
   */
  MCPTransport?: number
  /**
   * <p>MCP插件的header参数</p>
   */
  PluginHeader?: Array<PluginParam>
  /**
   * <p>MCP插件的query参数</p>
   */
  PluginQuery?: Array<PluginParam>
  /**
   * <p>SSE长连接超时时间，单位秒</p>
   */
  SSEReadTimeout?: number
  /**
   * <p>请求超时时间，单位秒</p>
   */
  Timeout?: number
  /**
   * <p>授权信息</p>
   */
  AuthConfig?: AuthConfig
}

/**
 * CreateMsgRecordCategory返回参数结构体
 */
export interface CreateMsgRecordCategoryResponse {
  /**
   * <p>新建分类的业务 ID</p>
   */
  CategoryId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVariable请求参数结构体
 */
export interface DeleteVariableRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * variable_id
   */
  VariableId: string
  /**
   * module_type。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数
   */
  ModuleType?: number
}

/**
 * ReleaseSkill返回参数结构体
 */
export interface ReleaseSkillResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AppTriggerInstance
 */
export interface AppTriggerInstance {
  /**
   * <p>应用id</p>
   */
  AppId?: string
  /**
   * <p>会话id</p>
   */
  ConversationId?: string
  /**
   * <p>触发器创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>结束时间</p>
   */
  FinishedAt?: string
  /**
   * <p>触发器运行实例id</p>
   */
  InstanceId?: string
  /**
   * <p>请求ID</p>
   */
  RequestId?: string
  /**
   * <p>结果码</p>
   */
  ResultCode?: string
  /**
   * <p>结果摘要</p>
   */
  ResultSummary?: string
  /**
   * <p>单次对话id</p>
   */
  RunId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_INSTANCE_SOURCE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_INSTANCE_SOURCE_APP_TRIGGER</td><td>1</td><td>来源于应用触发器</td></tr></tbody></table>
   */
  Source?: number
  /**
   * <p>触发器开始执行时间</p>
   */
  StartedAt?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>TIMER_RUN_STATUS_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>TIMER_RUN_STATUS_PENDING</td><td>1</td><td>等待执行</td></tr><tr><td>TIMER_RUN_STATUS_RUNNING</td><td>2</td><td>执行中</td></tr><tr><td>TIMER_RUN_STATUS_RETRY_WAIT</td><td>3</td><td>等待重试</td></tr><tr><td>TIMER_RUN_STATUS_SUCCESS</td><td>4</td><td>成功</td></tr><tr><td>TIMER_RUN_STATUS_DEAD</td><td>5</td><td>失败终态 (重试耗尽 / 不可重试)</td></tr><tr><td>TIMER_RUN_STATUS_CANCELLED</td><td>6</td><td>被任务暂停/删除/修改取消</td></tr></tbody></table>
   */
  Status?: number
  /**
   * <p>TraceId，用于日志记录</p>
   */
  TraceId?: string
  /**
   * <p>触发器id</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
  /**
   * <p>工作流运行ID</p>
   */
  WorkflowRunId?: string
}

/**
 * DeleteConversation请求参数结构体
 */
export interface DeleteConversationRequest {
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>子用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
}

/**
 * DescribeSkillSummaryList请求参数结构体
 */
export interface DescribeSkillSummaryListRequest {
  /**
   * 空间ID，必填
   */
  SpaceId: string
  /**
   * 仅查询当前用户收藏的 Skill
   */
  FavoriteOnly?: boolean
  /**
   *    过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系):
   - SkillIdList: Skill ID列表,字符串数组,精确匹配
   - ProviderType: Skill 提供方类型,枚举值数组,精确匹配
     (SKILL_PROVIDER_TYPE_OFFICIAL=1/SKILL_PROVIDER_TYPE_THIRD_PARTY=2/SKILL_PROVIDER_TYPE_CUSTOM=3/SKILL_PROVIDER_TYPE_CUSTOM_SHARED=4)
   - CategoryKey: 分类标识,字符串数组,精确匹配
   - AnalysisStatus: 安全检测状态,枚举值数组,精确匹配
     (SKILL_ANALYSIS_PENDING=0/SKILL_ANALYSIS_RUNNING=1/SKILL_ANALYSIS_AVAILABLE=2/SKILL_ANALYSIS_UNAVAILABLE=3/SKILL_ANALYSIS_FAILED=4)
   - RiskLevel: 风险等级,枚举值数组,精确匹配
     (SKILL_RISK_NONE=0/SKILL_RISK_LOW=1/SKILL_RISK_MEDIUM=2/SKILL_RISK_HIGH=3)
- SkillStatus: Skill 维度发布状态,枚举值数组,精确匹配,多值之间 OR;仅在 Perspective=EDITOR/ALL 时有实际意义
(SKILL_STATUS_INITIALIZED=0/SKILL_STATUS_AUDITING=1/SKILL_STATUS_PENDING_RELEASE=2/SKILL_STATUS_RELEASED=3)
   - ShareStatus: 共享状态,枚举值数组,精确匹配,仅在ProviderType包含SKILL_PROVIDER_TYPE_CUSTOM/SKILL_PROVIDER_TYPE_CUSTOM_SHARED时生效
     (SHARE_STATUS_UNSHARED=0/SHARE_STATUS_SHARED=1/SHARE_STATUS_APPROVING=2)
   - Perspective: 视角枚举,字符串单值,Values 长度必须为 1,多值视为非法;仅在 ProviderType=SKILL_PROVIDER_TYPE_CUSTOM 时生效;不传默认 USER
     (USER=使用者视角,仅返回仅有使用权限的 Skill / EDITOR=编辑者视角,仅返回有编辑权限的 Skill / ALL=全量视角,返回有任一权限位的 Skill)
  - Creator: 创建者过滤,字符串单值,Values 长度必须为 1,多值视为非法;仅在 ProviderType=SKILL_PROVIDER_TYPE_CUSTOM 时生效
   当前仅支持占位符 "$self",表示仅返回当前调用者创建的 Skill
   后续如需扩展为指定身份,再在此处追加约定
   */
  FilterList?: Array<Filter>
  /**
   * 页码，从 0 开始
   */
  PageNumber?: number
  /**
   * 每页数量，最大值 100
   */
  PageSize?: number
  /**
   * 名称/展示名称模糊搜索
   */
  Query?: string
}

/**
 * CopyApp返回参数结构体
 */
export interface CopyAppResponse {
  /**
   * new_app_id
   */
  NewAppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ComplexBillingItem
 */
export interface ComplexBillingItem {
  /**
   * <p>复合计费维度信息</p>
   */
  BillingAttributeList?: Array<BillingAttribute>
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>UNKNOW</td><td>0</td><td></td></tr><tr><td>TOKEN</td><td>1</td><td>按token</td></tr><tr><td>PAGE_COUNT</td><td>2</td><td>按页数</td></tr><tr><td>TIMES</td><td>3</td><td>按次数</td></tr><tr><td>TIMES_THOUSAND</td><td>4</td><td>按千次数</td></tr><tr><td>SECOND</td><td>5</td><td>按时长</td></tr><tr><td>CHARACTER</td><td>6</td><td>按字符数</td></tr><tr><td>CHARACTER_THOUSAND</td><td>7</td><td>按千字符数</td></tr><tr><td>SHEET</td><td>8</td><td>按张</td></tr><tr><td>NUMBER</td><td>9</td><td>按个数</td></tr></tbody></table>
   */
  BillingUnit?: number
  /**
   * <p>现金价格</p><p>单位：元</p>
   */
  CashPrice?: number
  /**
   * <p>pu价格</p><p>单位：pu</p>
   */
  PuPrice?: number
}

/**
 * BackgroundImage 背景图片配置
 */
export interface BackgroundImage {
  /**
   * 亮度值
   */
  Brightness: number
  /**
   * 横图(pc)
   */
  LandscapeImageUrl: string
  /**
   * 原始图
   */
  OriginalImageUrl: string
  /**
   * 长图(手机)
   */
  PortraitImageUrl: string
  /**
   * 主题色
   */
  ThemeColor: string
}

/**
 * DescribeSkillCategoryList请求参数结构体
 */
export type DescribeSkillCategoryListRequest = null

/**
 * 模型完整信息
 */
export interface Model {
  /**
   * <p>模型徽章列表</p>
   */
  BadgeList?: Array<ModelBadge>
  /**
   * <p>模型限制信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LimitInfo?: ModelLimit
  /**
   * <p>模型基本信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelBasic?: ModelBasic
  /**
   * <p>模型超参配置</p>
   */
  ParameterList?: Array<ModelParameter>
  /**
   * <p>模型属性配置</p>
   */
  PropertyList?: Array<ModelProperty>
  /**
   * <p>模型提供商信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProviderInfo?: ModelProviderBasic
  /**
   * <p>模型状态信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInfo?: ModelStatus
  /**
   * <p>模型标签列表</p>
   */
  TagList?: Array<string>
  /**
   * <p>模型作者信息</p>
   */
  DeveloperInfo?: ModelDeveloperBasic
}

/**
 * ModifySkill返回参数结构体
 */
export interface ModifySkillResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceList请求参数结构体
 */
export interface DescribeSpaceListRequest {
  /**
   * 支持空间名称模糊搜索
   */
  Query?: string
}

/**
 * AppTriggerRunLog
 */
export interface AppTriggerRunLog {
  /**
   * <p>会话id</p>
   */
  ConversationId?: string
  /**
   * <p>执行时间</p>
   */
  DurationMs?: string
  /**
   * <p>结束时间</p><p>参数格式：YYYY-MM-DD hh:mm:ss</p>
   */
  EndTime?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_FIRE_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_FIRE_TYPE_SCHEDULED</td><td>1</td><td>定时触发</td></tr><tr><td>APP_TRIGGER_FIRE_TYPE_WEBHOOK</td><td>2</td><td>Webhook 触发</td></tr><tr><td>APP_TRIGGER_FIRE_TYPE_MANUAL_RUN</td><td>3</td><td>手动立即执行</td></tr><tr><td>APP_TRIGGER_FIRE_TYPE_TEST_RUN</td><td>4</td><td>测试执行</td></tr></tbody></table>
   */
  FireType?: number
  /**
   * <p>触发实例id</p>
   */
  InstanceId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>TIMER_RUN_PUSH_STATUS_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>TIMER_RUN_PUSH_STATUS_NONE</td><td>1</td><td>未配置推送</td></tr><tr><td>TIMER_RUN_PUSH_STATUS_WAITING</td><td>2</td><td>等待推送</td></tr><tr><td>TIMER_RUN_PUSH_STATUS_SUCCESS</td><td>3</td><td>推送成功</td></tr><tr><td>TIMER_RUN_PUSH_STATUS_FAILED</td><td>4</td><td>推送失败</td></tr></tbody></table>
   */
  PushStatus?: number
  /**
   * <p>结果码</p>
   */
  ResultCode?: string
  /**
   * <p>结果概要</p>
   */
  ResultSummary?: string
  /**
   * <p>单次对话id</p>
   */
  RunId?: string
  /**
   * <p>触发时间</p><p>参数格式：YYYY:MM:DD hh:mm:ss</p>
   */
  ScheduledFireTime?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>开始执行时间</p><p>参数格式：YYYY:MM:DD hh:mm:ss</p>
   */
  StartTime?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>TIMER_RUN_STATUS_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>TIMER_RUN_STATUS_PENDING</td><td>1</td><td>等待执行</td></tr><tr><td>TIMER_RUN_STATUS_RUNNING</td><td>2</td><td>执行中</td></tr><tr><td>TIMER_RUN_STATUS_RETRY_WAIT</td><td>3</td><td>等待重试</td></tr><tr><td>TIMER_RUN_STATUS_SUCCESS</td><td>4</td><td>成功</td></tr><tr><td>TIMER_RUN_STATUS_DEAD</td><td>5</td><td>失败终态 (重试耗尽 / 不可重试)</td></tr><tr><td>TIMER_RUN_STATUS_CANCELLED</td><td>6</td><td>被任务暂停/删除/修改取消</td></tr></tbody></table>
   */
  Status?: number
  /**
   * <p>触发器id</p>
   */
  TriggerId?: string
  /**
   * <p>是否已读</p>
   */
  Unread?: boolean
  /**
   * <p>访客Id</p>
   */
  UserId?: string
  /**
   * <p>工作流运行id</p>
   */
  WorkflowRunId?: string
}

/**
 * Content 消息内容信息
 */
export interface ConversationContent {
  /**
   * <p>文本内容</p>
   */
  Text: string
  /**
   * <p>内容类型, text：文本,image：图片,file：文件,custom_variables：自定义输入参数信息,widget_action：widget动作信息</p>
   */
  Type: string
  /**
   * <p>自定义参数数据</p>
   */
  CustomParamList?: Array<string>
  /**
   * <p>自定义参数数据</p>
   */
  CustomParams?: Array<string>
  /**
   * <p>自定义变量数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomVariablesData?: string
  /**
   * <p>企业表单</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnterpriseCharts?: string
  /**
   * <p>选项卡列表</p>
   */
  OptionCardList?: Array<string>
  /**
   * <p>选项卡列表</p>
   */
  OptionCards?: Array<string>
  /**
   * <p>选项卡模式 枚举值: 0-OPTION_MODE_SINGLE(单选), 1-OPTION_MODE_MULTI(多选)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionMode?: number
  /**
   * <p>引用角标信息列表</p>
   */
  QuoteInfoList?: Array<ConversationQuoteInfo>
  /**
   * <p>引用角标信息列表</p>
   */
  QuoteInfos?: Array<ConversationQuoteInfo>
  /**
   * <p>参考来源列表</p>
   */
  ReferenceList?: Array<ConversationReference>
  /**
   * <p>参考来源列表</p>
   */
  References?: Array<ConversationReference>
  /**
   * <p>关联记录 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedRecordId?: string
  /**
   * <p>智能体任务列表</p>
   */
  TaskList?: Array<ConversationAgentTask>
  /**
   * <p>智能体任务列表</p>
   */
  Tasks?: Array<ConversationAgentTask>
  /**
   * <p>工作流输入参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowInput?: string
}

/**
 * CAM授权信息
 */
export interface CamAuthConfig {
  /**
   * 角色名称
   */
  RoleName: string
  /**
   * 密钥位置 HEADER/QUERY

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 头鉴权 |
| 1 | 请求信息鉴权 |
   */
  KeyLocation?: number
  /**
   * SecretId字段名称
   */
  SecretIdName?: string
  /**
   * SecretKey字段名称
   */
  SecretKeyName?: string
}

/**
 * DescribeSkillReferenceList返回参数结构体
 */
export interface DescribeSkillReferenceListResponse {
  /**
   * <p>按 SkillRefType 分组的引用汇总：某类型 total_count = 0 时不入组（不返回空占位） 本期同时落 OPENCLAW / AGENT / CORP_ASSISTANT 三路</p>
   */
  ReferenceList?: Array<SkillReferenceGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnfavoritePlugin返回参数结构体
 */
export interface UnfavoritePluginResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySpace请求参数结构体
 */
export interface ModifySpaceRequest {
  /**
   * 工作空间名称,长度最大30个字符
   */
  Name?: string
  /**
   * 空间描述，长度最大150个字符
   */
  Description?: string
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 指定需要更新的字段，支持Name和Description
   */
  FieldMask?: FieldMask
}

/**
 * DeleteMsgRecordCategory返回参数结构体
 */
export interface DeleteMsgRecordCategoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 生成模型配置
 */
export interface GenerateModel {
  /**
   * 生成模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * FavoriteSkill返回参数结构体
 */
export interface FavoriteSkillResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SkillShare Skill 企业共享信息。
 */
export interface SkillShare {
  /**
   * 审批ID
   */
  ApprovalId: string
  /**
   * 共享后关联的新 skill_id
   */
  ShareSkillId: string
  /**
   * 共享版本，如 1.0.0
   */
  ShareVersion: string
  /**
   * 共享版本ID
   */
  ShareVersionId: string
  /**
   * 原 skill_id
   */
  SkillId: string
  /**
   * 共享状态

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 未共享 |
| 1 | 已共享 |
| 2 | 审批中 |
   */
  Status: number
}

/**
 * AppShareWhitelistItem
 */
export interface AppShareWhitelistItem {
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_UIN</td><td>1</td><td>UIN账号</td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_PHONE</td><td>2</td><td>手机号码</td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_EMAIL</td><td>3</td><td>邮箱地址</td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_IP</td><td>4</td><td>IP地址</td></tr><tr><td>APP_SHARE_WHITELIST_TYPE_RTX</td><td>5</td><td>RTX账号</td></tr></tbody></table>
   */
  Type?: number
  /**
   * <p>白名单数组信息</p><p>参数格式：白名单值</p>
   */
  Values?: Array<string>
}

/**
 * CreateWebSocketToken请求参数结构体
 */
export interface CreateWebSocketTokenRequest {
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>子用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
}

/**
 * DeleteSkill返回参数结构体
 */
export interface DeleteSkillResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentReleasePreviewList请求参数结构体
 */
export interface DescribeAgentReleasePreviewListRequest {
  /**
   * <p>应用Id</p>
   */
  AppId: string
  /**
   * <p>页码</p>
   */
  PageNumber: number
  /**
   * <p>每页数量在1到200之间</p>
   */
  PageSize: number
  /**
   * <p>查询关键字, 用于模糊匹配标题</p>
   */
  Query?: string
  /**
   * <p>过滤条件</p><p>入参限制：支持 StartTime、EndTime、ActionList、ReleaseStatusList</p>
   */
  FilterList?: Array<Filter>
}

/**
 * PauseAppTrigger请求参数结构体
 */
export interface PauseAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * CopyAgentFromApp请求参数结构体
 */
export interface CopyAgentFromAppRequest {
  /**
   * <p>应用Id</p>
   */
  AppId: string
  /**
   * <p>目标应用ID，kind=0时需传入</p>
   */
  TargetAppId?: string
  /**
   * <p>Agent 类型，区分 B 端配置态 Agent 与 C 端用户态 Agent</p><p>枚举值：</p><ul><li>0：  配置端Agent </li><li>1：  用户态 Agent</li></ul>
   */
  Kind?: number
}

/**
 * 模型超参
 */
export interface ModelParameter {
  /**
   * <p>默认值</p>
   */
  DefaultValue?: string
  /**
   * <p>可选值列表</p>
   */
  EnumValueList?: Array<string>
  /**
   * <p>最大值（仅数值类型有效）</p>
   */
  MaxValue?: number
  /**
   * <p>最小值（仅数值类型有效）</p>
   */
  MinValue?: number
  /**
   * <p>超参名称</p>
   */
  Name?: string
  /**
   * <p>超参类型。1-浮点数, 2-整数, 3-字符串</p>
   */
  Type?: number
}

/**
 * ModifyApp返回参数结构体
 */
export interface ModifyAppResponse {
  /**
   * <p>app_id</p>
   */
  AppId?: string
  /**
   * <p>更新时间 (Unix时间戳,秒级)</p>
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountList请求参数结构体
 */
export interface DescribeAccountListRequest {
  /**
   * <p>页码</p><p>从0开始</p>
   */
  PageNumber?: number
  /**
   * <p>分页数量</p><p>取值范围：[1, 100]</p><p>单位：个</p><p>最大100</p>
   */
  PageSize?: number
  /**
   * <p>参数过滤</p><p>支持SpaceId,NIckName 过滤查询</p>
   */
  FilterList?: Array<Filter>
}

/**
 * DescribeConversationList返回参数结构体
 */
export interface DescribeConversationListResponse {
  /**
   * <p>会话列表</p>
   */
  ConversationList?: Array<Conversation>
  /**
   * <p>会话列表</p>
   */
  Conversations?: Array<Conversation>
  /**
   * <p>总数</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多智能体配置
 */
export interface MultiAgentConfig {
  /**
   * Agent协同配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentCollaboration: AgentCollaborationConfig
}

/**
 * CreateWebSocketToken返回参数结构体
 */
export interface CreateWebSocketTokenResponse {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>WebSocket Token</p>
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillCategoryList返回参数结构体
 */
export interface DescribeSkillCategoryListResponse {
  /**
   * Skill 分类列表
   */
  CategoryList?: Array<SkillCategory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询时间范围（Unix 秒）
 */
export interface TimeRange {
  /**
   * <p>结束时间，Unix 秒</p>
   */
  EndTime: string
  /**
   * <p>开始时间，Unix 秒</p>
   */
  StartTime: string
}

/**
 * DescribeConsumptionDetailList返回参数结构体
 */
export interface DescribeConsumptionDetailListResponse {
  /**
   * <p>资源消耗明细列表</p>
   */
  ConsumptionDetailList?: Array<ConsumptionDetail>
  /**
   * <p>总记录数，用于前端分页</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePlugin返回参数结构体
 */
export interface CreatePluginResponse {
  /**
   * <p>插件id</p>
   */
  PluginId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClawAgent Agent团队协作配置
 */
export interface ClawAgentAgentTeamConfig {
  /**
   * <p>是否开启Agent团队协作</p>
   */
  Enabled?: boolean
  /**
   * <p>prompt内容</p>
   */
  PromptContent?: string
}

/**
 * DescribeSystemVariableList返回参数结构体
 */
export interface DescribeSystemVariableListResponse {
  /**
   * system_variable_list
   */
  SystemVariableList?: Array<SystemVariable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 的插件信息
 */
export interface AgentPlugin {
  /**
   * <p>插件基本配置</p>
   */
  Config?: AgentPluginConfig
  /**
   * <p>插件名称</p>
   */
  Name?: string
  /**
   * <p>插件图标url</p>
   */
  IconUrl?: string
  /**
   * <p>插件描述</p>
   */
  Description?: string
  /**
   * <p>插件产品分类</p><p>枚举值：</p><ul><li>0： 普通插件</li><li>1： 连接器类插件</li></ul>
   */
  PluginClass?: number
  /**
   * <p>插件状态</p><p>枚举值：</p><ul><li>0： 未知</li><li>1： 可用</li><li>2： 不可用</li></ul>
   */
  Status?: number
  /**
   * <p>插件鉴权配置状态</p><p>枚举值：</p><ul><li>0： 不需要授权</li><li>1： 未配置</li><li>2： 已配置</li></ul>
   */
  AuthConfigStatus?: number
}

/**
 * 会话重置信息
 */
export interface ConversationResetInfo {
  /**
   * <p>最近一次重置的毫秒级时间戳</p>
   */
  ResetTime?: string
  /**
   * <p>最近一次重置边界；该记录及更早的记录不再作为对话上下文</p>
   */
  ResetThroughRecordId?: string
}

/**
 * ModifyConversation返回参数结构体
 */
export interface ModifyConversationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuoteInfo 参考来源索引信息
 */
export interface ConversationQuoteInfo {
  /**
   * <p>参考来源的索引值</p>
   */
  Index: number
  /**
   * <p>参考来源位置</p>
   */
  Position: number
}

/**
 * DescribeSpaceList返回参数结构体
 */
export interface DescribeSpaceListResponse {
  /**
   * 总数
   */
  TotalCount?: string
  /**
   * 空间列表
   */
  SpaceList?: Array<Space>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单次对话记录统计信息
 */
export interface ConversationRecordSummary {
  /**
   * <p>回复记录 ID，对应 messages 中回复消息的 record_id</p>
   */
  RecordId?: string
  /**
   * <p>用户提问记录 ID，对应 messages 中用户消息的 record_id</p>
   */
  RelatedRecordId?: string
  /**
   * <p>单次对话耗时信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUsage?: ConversationRecordTimeUsage
  /**
   * <p>单次对话 token 消耗信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenUsage?: ConversationRecordTokenUsage
  /**
   * <p>单次对话失败信息；成功时为空</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: ConversationRecordErrorInfo
  /**
   * <p>单次员工助理对话当前状态</p><p>枚举值：</p><ul><li>pending： 待处理</li><li>processing： 处理中</li><li>success： 成功</li><li>failed： 失败</li><li>stop： 停止</li></ul>
   */
  Status?: string
}

/**
 * 单次对话耗时信息
 */
export interface ConversationRecordTimeUsage {
  /**
   * <p>单次对话总耗时，单位毫秒</p>
   */
  Elapsed?: string
  /**
   * <p>首 token 耗时，单位毫秒</p>
   */
  FirstTokenCost?: string
  /**
   * <p>模型推理总耗时，单位毫秒</p>
   */
  TotalCost?: string
}

/**
 * App 应用完整信息
 */
export interface App {
  /**
   * <p>辅助信息(子状态/审批/申诉/搜索资源/特殊状态等)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuxiliaryInfo: AppAuxiliaryInfo
  /**
   * <p>配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config: AppConfig
  /**
   * <p>元数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metadata: AppMetadata
  /**
   * <p>应用密钥信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretInfo: AppSecretInfo
  /**
   * <p>分享链接信息(含访问控制)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareUrlInfo: AppShareURLInfo
  /**
   * <p>状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: AppStatusInfo
  /**
   * <p>应用引用的共享知识库列表</p>
   */
  SharedKbList?: Array<AppSharedKbInfo>
  /**
   * <p>企业共享配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpShareConfig?: CorpShareConfig
}

/**
 * CronSchedule
 */
export interface CronSchedule {
  /**
   * cron表达式
   */
  Expression?: string
}

/**
 * DescribeAppTriggerRunLogList返回参数结构体
 */
export interface DescribeAppTriggerRunLogListResponse {
  /**
   * <p>日志列表</p>
   */
  RunLogList?: Array<AppTriggerRunLog>
  /**
   * <p>日志列表数量</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文档解析模型参数
 */
export interface FileParseModel {
  /**
   * 模型别名
   */
  Alias: string
  /**
   * 模型描述
   */
  Description: string
  /**
   * 增强模式
   */
  EnhancementMode: string
  /**
   * 模型唯一ID
   */
  ModelId: string
  /**
   * 模型类型
   */
  ModelProviderType: string
  /**
   * 是否启用公式增强
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableFormulaEnhancement?: boolean
  /**
   * 是否启用 LLM 增强
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableLLMEnhancement?: boolean
  /**
   * 是否输出 HTML 表格
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputHtmlTable?: boolean
  /**
   * 支持的文件类型列表
   */
  SupportedFileList?: Array<SupportedFileType>
}

/**
 * 应用申诉信息(用户不可修改)
 */
export interface AppAppeal {
  /**
   * 申诉中的配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppealingStatus: AppealingStatus
}

/**
 * TimerScheduleConfig
 */
export interface TimerScheduleConfig {
  /**
   * cron配置
   */
  Cron?: CronSchedule
  /**
   * 每日触发
   */
  Daily?: DailySchedule
  /**
   * 固定间隔
   */
  Interval?: IntervalSchedule
  /**
   * 仅手动
   */
  ManualOnly?: ManualOnlySchedule
  /**
   * 单次
   */
  Once?: OnceSchedule
  /**
   * 
枚举值:
| uint | 描述 |
| --- | --- |
| 0 |  |
| 1 | 仅手动 |
| 2 | 每天 |
| 3 | 每周 |
| 4 | 按间隔 |
| 5 | 一次性 |
| 6 | Cron |
   */
  ScheduleType?: number
  /**
   * 时区
   */
  Timezone?: string
  /**
   * 每周固定时间触发
   */
  Weekly?: WeeklySchedule
}

/**
 * 数智人配置
 */
export interface DigitalHumanConfig {
  /**
   * 数智人形象资产id
   */
  AssetKey: string
  /**
   * 数智人图片
   */
  Avatar: string
  /**
   * 数智人形象名称
   */
  Name: string
  /**
   * 数智人预览地址
   */
  PreviewUrl: string
}

/**
 * DescribeLatestRelease返回参数结构体
 */
export interface DescribeLatestReleaseResponse {
  /**
   * 是否有发布变更
   */
  IsChanged?: boolean
  /**
   * 发布信息
   */
  ReleaseSummary?: ReleaseSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Skill 异常通知。
 */
export interface SkillNotice {
  /**
   * 通知级别

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 占位 |
| 1 | 成功，字符串面："success" |
| 2 | 警告，字符串面："warning" |
| 3 | 错误，字符串面："error" |
   */
  Level?: number
  /**
   * 文案（i18n 后字符串）
   */
  NoticeContent?: string
  /**
   * 触发本通知的 Skill 版本ID
   */
  TriggerVersionId?: string
  /**
   * 通知类型 

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 占位 |
| 1 | 发布失败 |
| 2 | 共享审批被拒 |
   */
  Type?: number
}

/**
 * ResponseParam
 */
export interface ResponseParam {
  /**
   * <p>变量描述</p>
   */
  Description?: string
  /**
   * <p>参数名称</p>
   */
  Name?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>OUTPUT_RENDER_REPLACE</td><td>0</td><td>覆盖（全量替换）</td></tr><tr><td>OUTPUT_RENDER_APPEND</td><td>1</td><td>增量追加</td></tr></tbody></table>
   */
  RenderMode?: number
  /**
   * <p>只对 OBJECT 或 ARRAY_OBJECT 类型有用</p>
   */
  SubParams?: Array<ResponseParam>
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>PARAM_TYPE_STRING</td><td>0</td><td>字符串</td></tr><tr><td>PARAM_TYPE_INT</td><td>1</td><td>整数</td></tr><tr><td>PARAM_TYPE_FLOAT</td><td>2</td><td>浮点数</td></tr><tr><td>PARAM_TYPE_BOOL</td><td>3</td><td>布尔值</td></tr><tr><td>PARAM_TYPE_OBJECT</td><td>4</td><td>对象</td></tr><tr><td>PARAM_TYPE_ARRAY_STRING</td><td>5</td><td>字符串数组</td></tr><tr><td>PARAM_TYPE_ARRAY_INT</td><td>6</td><td>整数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_FLOAT</td><td>7</td><td>浮点数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_BOOL</td><td>8</td><td>布尔值数组</td></tr><tr><td>PARAM_TYPE_ARRAY_OBJECT</td><td>9</td><td>对象数组</td></tr><tr><td>PARAM_TYPE_ARRAY_ARRAY</td><td>20</td><td>数组嵌套</td></tr><tr><td>PARAM_TYPE_NULL</td><td>99</td><td>空值</td></tr><tr><td>PARAM_TYPE_UNSPECIFIED</td><td>100</td><td>未指定类型，用于OneOf和AnyOf场景</td></tr></tbody></table>
   */
  Type?: number
}

/**
 * 单工作流配置
 */
export interface SingleWorkflowConfig {
  /**
   * <p>是否开启异步工作流</p>
   */
  AsyncWorkflow: boolean
  /**
   * <p>状态 发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 PUBLISHED_FAIL:发布失败；DRAFT：待调试)</p>
   */
  Status: string
  /**
   * <p>工作流描述</p>
   */
  WorkflowDescription: string
  /**
   * <p>工作流Id</p>
   */
  WorkflowId: string
  /**
   * <p>工作流名称</p>
   */
  WorkflowName: string
  /**
   * <p>工作流是否启用</p>
   */
  Enabled?: boolean
}

/**
 * Agent 的插件基本配置
 */
export interface AgentPluginConfig {
  /**
   * <p>插件id</p>
   */
  PluginId?: string
  /**
   * <p>插件 Header 参数</p>
   */
  HeaderParameterList?: Array<AgentPluginParameter>
  /**
   * <p>插件 Query 参数</p>
   */
  QueryParameterList?: Array<AgentPluginParameter>
  /**
   * <p>是否使用CAM一键授权，仅 auth_type=2时生效</p>
   */
  EnableCamRoleAuth?: boolean
  /**
   * <p>授权类型</p><p>枚举值：</p><ul><li>0： 无鉴权</li><li>1： API Key</li><li>2： CAM授权</li><li>3： OAuth2.0授权</li></ul>
   */
  AuthType?: number
  /**
   * <p>OAuth 授权同意模式；0-开发者授权；1-使用者授权（仅在auth_type=3时生效）</p>
   */
  OAuthConsent?: number
}

/**
 * 插件概要信息（用于插件列表）
 */
export interface PluginSummary {
  /**
   * <p>插件运营管理信息</p>
   */
  Operation?: PluginOperation
  /**
   * <p>插件id</p>
   */
  PluginId?: string
  /**
   * <p>插件基础信息</p>
   */
  Profile?: PluginProfile
  /**
   * <p>插件统计信息</p>
   */
  Statistics?: PluginStatistics
  /**
   * <p>插件状态，1:可用，2:不可用 </p><p>枚举值：</p><ul><li>1： 可用</li><li>2： 不可用</li></ul>
   */
  Status?: number
  /**
   * <p>用户维度的插件状态信息</p>
   */
  UserState?: PluginUserState
  /**
   * <p>插件配置信息</p>
   */
  Config?: PluginConfig
  /**
   * <p>工具信息</p>
   */
  ToolList?: Array<ToolSummary>
}

/**
 * CreateWorkspaceCredential返回参数结构体
 */
export interface CreateWorkspaceCredentialResponse {
  /**
   * <p>存储类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * <p>工作空间 ID</p>
   */
  WorkspaceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPlugin请求参数结构体
 */
export interface ModifyPluginRequest {
  /**
   * <p>插件id</p>
   */
  PluginId: string
  /**
   * <p>插件版本号</p>
   */
  PluginVersion: number
  /**
   * <p>插件基础资料</p>
   */
  Profile?: PluginProfile
  /**
   * <p>插件类型配置</p>
   */
  Config?: PluginConfig
  /**
   * <p>指定需要更新的字段，避免全量覆盖</p>
   */
  UpdateMask?: FieldMask
  /**
   * <p>插件的工具列表，mcp插件不传</p>
   */
  ToolList?: Array<Tool>
  /**
   * <p>登录用户主账号(集成商模式必填)</p>
   */
  LoginUin?: string
  /**
   * <p>登录用户子账号(集成商模式必填)</p>
   */
  LoginSubAccountUin?: string
}

/**
 * DescribeAccountList返回参数结构体
 */
export interface DescribeAccountListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: string
  /**
   * <p>员工列表</p>
   */
  AccountList?: Array<AccountInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户输入值
 */
export interface AgentUserInputValue {
  /**
   * <p>用户输入参数值</p>
   */
  ValueList?: Array<string>
}

/**
 * SkillProfile Skill 基础展示信息。
 */
export interface SkillProfile {
  /**
   * 创建时间（Unix秒）
   */
  CreateTime: string
  /**
   * 创建者
   */
  Creator: string
  /**
   * Skill 描述
   */
  Description: string
  /**
   * Skill 展示描述
   */
  DisplayDescription: string
  /**
   * Skill 展示名称
   */
  DisplayName: string
  /**
   * Skill 图标
   */
  IconUrl: string
  /**
   * Skill 名称
   */
  Name: string
  /**
   * 更新时间（Unix秒）
   */
  UpdateTime: string
}

/**
 * DescribeMetricOverviewList请求参数结构体
 */
export interface DescribeMetricOverviewListRequest {
  /**
   * <p>看板域，必填，决定返回哪个域的 KPI 数据</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>RESOURCE_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>RESOURCE_TYPE_MODEL</td><td>1</td><td>模型用量</td></tr><tr><td>RESOURCE_TYPE_PLUGIN</td><td>2</td><td>插件用量</td></tr><tr><td>RESOURCE_TYPE_PLATFORM</td><td>3</td><td>平台功能用量</td></tr><tr><td>RESOURCE_TYPE_MODEL_CONCURRENCY</td><td>4</td><td>模型并发超限</td></tr><tr><td>RESOURCE_TYPE_KB_CAPACITY</td><td>5</td><td>知识库容量</td></tr><tr><td>RESOURCE_TYPE_USAGE_SUMMARY</td><td>6</td><td>用量汇总</td></tr><tr><td>RESOURCE_TYPE_RESOURCE_CONSUME</td><td>7</td><td>资源消耗（计费明细）</td></tr></tbody></table>
   */
  ResourceType: number
  /**
   * <p>查询时间范围（Unix 秒）</p>
   */
  TimeRange: TimeRange
  /**
   * <p>视图范围：企业视图 / 空间视图</p>
   */
  ViewScope: ViewScope
  /**
   * <p>扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name（模型名）、user_id（用户ID）、space_id（空间ID）、resource_id/source_id（来源ID）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数）</p>
   */
  FilterList?: Array<Filter>
}

/**
 * ApiToolConfig
 */
export interface ApiToolConfig {
  /**
   * <p>请求体参数</p>
   */
  Body?: Array<RequestParam>
  /**
   * <p>示例</p>
   */
  Example?: ToolExample
  /**
   * <p>API插件外部调用地址</p>
   */
  ExternalApiUrl?: string
  /**
   * <p>Header</p>
   */
  Header?: Array<RequestParam>
  /**
   * <p>请求方式</p>
   */
  Method?: string
  /**
   * <p>输出</p>
   */
  Outputs?: Array<ResponseParam>
  /**
   * <p>查询参数</p>
   */
  Query?: Array<RequestParam>
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>STREAM_MODE_UNARY</td><td>0</td><td>非流式</td></tr><tr><td>STREAM_MODE_STREAMING</td><td>1</td><td>流式</td></tr></tbody></table>
   */
  StreamMode?: number
  /**
   * <p>地址</p>
   */
  Url?: string
}

/**
 * ToolExample
 */
export interface ToolExample {
  /**
   * <p>请求参数</p>
   */
  Request?: string
  /**
   * <p>响应参数</p>
   */
  Response?: string
}

/**
 * DescribeAppTriggerRunLogList请求参数结构体
 */
export interface DescribeAppTriggerRunLogListRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>过滤参数</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码</p><p>取值范围：[1, 1000000]</p>
   */
  PageNumber?: number
  /**
   * <p>每页数据量</p><p>取值范围：[1, 100]</p>
   */
  PageSize?: number
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * 单项消耗计量
 */
export interface ResourceConsumption {
  /**
   * <p>功能标签，PLATFORM 场景取 PlatformBizType 枚举名称；MODEL/PLUGIN 场景为空</p>
   */
  Label?: string
  /**
   * <p>消耗计量单位</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>DOSAGE_UNIT_TOKEN</td><td>0</td><td>token（默认）</td></tr><tr><td>DOSAGE_UNIT_PAGE_COUNT</td><td>1</td><td>page_count（页数）</td></tr><tr><td>DOSAGE_UNIT_TIMES</td><td>2</td><td>times（次数）</td></tr><tr><td>DOSAGE_UNIT_SECOND</td><td>3</td><td>second（秒）</td></tr><tr><td>DOSAGE_UNIT_ITEM</td><td>4</td><td>item（条）</td></tr><tr><td>DOSAGE_UNIT_SHEET</td><td>5</td><td>sheet（张）</td></tr><tr><td>DOSAGE_UNIT_CHARACTER</td><td>6</td><td>character（字符）</td></tr><tr><td>DOSAGE_UNIT_GB</td><td>7</td><td>GB</td></tr><tr><td>DOSAGE_UNIT_NUMBER</td><td>8</td><td>number（个数）</td></tr><tr><td>DOSAGE_UNIT_MILL_SECOND</td><td>9</td><td>mill_second（毫秒）</td></tr></tbody></table>
   */
  Unit?: number
  /**
   * <p>消耗数值</p>
   */
  Value?: number
}

/**
 * 模型基本信息
 */
export interface ModelBasic {
  /**
   * 模型描述
   */
  Description?: string
  /**
   * 模型图标地址
   */
  IconUrl?: string
  /**
   * 模型ID
   */
  ModelId?: string
  /**
   * 模型类型。1-LLM模型, 2-Rerank模型, 3-Embedding模型, 4-文档解析模型
   */
  ModelType?: number
  /**
   * 模型名称
   */
  Name?: string
}

/**
 * ModifyApp请求参数结构体
 */
export interface ModifyAppRequest {
  /**
   * <p>应用ID</p>
   */
  AppId: string
  /**
   * <p>应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式</p>
   */
  AppMode?: number
  /**
   * <p>应用头像</p>
   */
  Avatar?: string
  /**
   * <p>应用配置</p>
   */
  Config?: AppConfig
  /**
   * <p>应用描述</p>
   */
  Description?: string
  /**
   * <p>应用名称</p>
   */
  Name?: string
  /**
   * <p>引用的共享知识库ID列表(全量覆盖)</p>
   */
  SharedKbIdList?: Array<string>
  /**
   * <p>字段掩码，指定需要更新的字段(Paths为空则不更新任何字段)。Paths枚举值：<br>【顶层】Name, Avatar, Description, AppMode, SharedKbIdList<br>【Greeting】Config.Greeting, Config.Greeting.Greeting, Config.Greeting.OpeningQuestionList<br>【Model】Config.Model, Config.Model.ThinkModel, Config.Model.GenerateModel, Config.Model.AiOptimizeModel, Config.Model.FileParseModel, Config.Model.PromptRewriteModel, Config.Model.MultiModalQaModel, Config.Model.MultiModalUnderstandingModel<br>【WebSearch】Config.WebSearch<br>【Memory】Config.Memory, Config.Memory.Enabled, Config.Memory.LongMemoryDay, Config.Memory.Model, Config.Memory.PromptMode, Config.Memory.PromptContent<br>【Mode】Config.Mode, Config.Mode.MultiAgentConfig, Config.Mode.SingleWorkflowConfig, Config.Mode.ClawAgentConfig<br>【Mode.ClawAgentConfig】Config.Mode.ClawAgentConfig.LongMemoryConfig, Config.Mode.ClawAgentConfig.AgentTeamConfig<br>【Experience】Config.Experience, Config.Experience.Conversation, Config.Experience.Role, Config.Experience.Advanced<br>【Experience.Conversation】Config.Experience.Conversation.AiCall, Config.Experience.Conversation.BackgroundImage, Config.Experience.Conversation.Method, Config.Experience.Conversation.FallbackReply, Config.Experience.Conversation.Recommended, Config.Experience.Conversation.InputBoxConfig, Config.Experience.Conversation.WebSearch<br>【Experience.Conversation.AiCall】Config.Experience.Conversation.AiCall.VoiceInteract, Config.Experience.Conversation.AiCall.VoiceCall, Config.Experience.Conversation.AiCall.DigitalHuman<br>【Experience.Advanced】Config.Experience.Advanced.ContextRewrite, Config.Experience.Advanced.ImageTextRetrieval, Config.Experience.Advanced.IntentAchievement, Config.Experience.Advanced.ReplyFlexibility, Config.Experience.Advanced.DialogCustomConfig</p>
   */
  UpdateMask?: FieldMask
}

/**
 * ModifySkill请求参数结构体
 */
export interface ModifySkillRequest {
  /**
   * <p>SkillId</p>
   */
  SkillId: string
  /**
   * <p>空间ID</p>
   */
  SpaceId: string
  /**
   * <p>skill描述</p>
   */
  DisplayDescription?: string
  /**
   * <p>skill名称</p>
   */
  DisplayName?: string
  /**
   * <p>skill包文件地址（zip）；传入则触发新版本生成，需与SkillVersion、UpdateDescription配套传入</p>
   */
  FileUrl?: string
  /**
   * <p>图标地址</p>
   */
  IconUrl?: string
  /**
   * <p>skill版本号（与FileUrl配套传入）</p>
   */
  SkillVersion?: string
  /**
   * <p>版本变更说明（与FileUrl配套传入）</p>
   */
  UpdateDescription?: string
}

/**
 * CreateSpace返回参数结构体
 */
export interface CreateSpaceResponse {
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVariable请求参数结构体
 */
export interface CreateVariableRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * 变量信息
   */
  Variable?: Variable
}

/**
 * 消耗分类
 */
export interface ConsumptionClassification {
  /**
   * <p>消耗场景（如推理/训练/评测等）</p>
   */
  ConsumptionScene?: string
  /**
   * <p>消耗目标（如具体模型名/插件名/平台功能名）</p>
   */
  ConsumptionTarget?: string
  /**
   * <p>消耗类型，取值集合由业务方定义（如 model/plugin/platform 等）</p>
   */
  ConsumptionType?: string
  /**
   * <p>套餐包名称</p>
   */
  PackageName?: string
}

/**
 * DescribeSystemVariableList请求参数结构体
 */
export interface DescribeSystemVariableListRequest {
  /**
   * 应用ID
   */
  AppId: string
}

/**
 * DescribeReleaseSummary返回参数结构体
 */
export interface DescribeReleaseSummaryResponse {
  /**
   * 发布信息
   */
  ReleaseSummary?: ReleaseSummary
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MCPToolConfig
 */
export interface MCPToolConfig {
  /**
   * <p>输入参数</p>
   */
  Inputs?: Array<RequestParam>
  /**
   * <p>输出参数</p>
   */
  Outputs?: Array<ResponseParam>
}

/**
 * SkillSummary 列表中的 Skill 摘要。
 */
export interface SkillSummary {
  /**
   * 分类信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassificationInfo: SkillClassification
  /**
   * 当前版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentVersionInfo: SkillVersion
  /**
   * 当前用户是否收藏
   */
  IsFavorite: boolean
  /**
   * 基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Profile: SkillProfile
  /**
   * Skill ID
   */
  SkillId: string
  /**
   * Skill 异常通知列表
   */
  NoticeList?: Array<SkillNotice>
  /**
   * 当前用户对该 Skill 的资源操作权限位列表；内置/共享 Skill 固定为空数组
   */
  PermissionIdList?: Array<string>
  /**
   * 共享信息；可能有两条，一条是已共享的，一条是审核中的
   */
  ShareList?: Array<SkillShare>
  /**
   * Skill状态 

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 初始化（无任何已发布版本，且最新版本处于 INITIALIZED/UNRELEASED） |
| 1 | 安全检测中（无任何已发布版本，且最新版本处于 AUDITING） |
| 2 | 待发布（无任何已发布版本，且最新版本处于 PENDING_RELEASE） |
| 3 | 已发布（存在任一 RELEASED 版本，吸收态） |
   */
  SkillStatus?: number
}

/**
 * [数据结构定义] Agent协同配置
 */
export interface AgentCollaborationConfig {
  /**
   * 协同方式。枚举值: 1:自由转交：Agent之间可自由传递任务, 2:工作流编排：基于预定义流程的协同, 3:Plan-and-Execute：规划与执行分离的协同模式
   */
  AgentCollaborationMode: number
  /**
   * 工作流Id
   */
  WorkflowId: string
  /**
   * 工作流名称
   */
  WorkflowName: string
}

/**
 * ModifyAppTrigger返回参数结构体
 */
export interface ModifyAppTriggerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 角色配置
 */
export interface RoleConfig {
  /**
   * 角色描述
   */
  RoleDescription: string
}

/**
 * DescribeAuditLogList返回参数结构体
 */
export interface DescribeAuditLogListResponse {
  /**
   * <p>操作日志列表</p>
   */
  AuditLogList?: Array<AuditLog>
  /**
   * <p>es查询起始位置</p><p>用于入参查询下一页</p>
   */
  SearchAfter?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsageDetailList请求参数结构体
 */
export interface DescribeUsageDetailListRequest {
  /**
   * <p>资源类型，限定为 RESOURCE_TYPE_MODEL / RESOURCE_TYPE_PLUGIN</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>RESOURCE_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>RESOURCE_TYPE_MODEL</td><td>1</td><td>模型用量</td></tr><tr><td>RESOURCE_TYPE_PLUGIN</td><td>2</td><td>插件用量</td></tr><tr><td>RESOURCE_TYPE_PLATFORM</td><td>3</td><td>平台功能用量</td></tr><tr><td>RESOURCE_TYPE_MODEL_CONCURRENCY</td><td>4</td><td>模型并发超限</td></tr><tr><td>RESOURCE_TYPE_KB_CAPACITY</td><td>5</td><td>知识库容量</td></tr><tr><td>RESOURCE_TYPE_USAGE_SUMMARY</td><td>6</td><td>用量汇总</td></tr><tr><td>RESOURCE_TYPE_RESOURCE_CONSUME</td><td>7</td><td>资源消耗（计费明细）</td></tr></tbody></table>
   */
  ResourceType: number
  /**
   * <p>查询时间范围（Unix 秒）</p>
   */
  TimeRange: TimeRange
  /**
   * <p>视图范围：企业视图 / 空间视图 / 应用视图</p>
   */
  ViewScope: ViewScope
  /**
   * <p>扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name、user_id、space_id、resource_id/source_id、metric_source_type（METRIC_SOURCE_TYPE_* 或整数）、call_type（调用类型）</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码，从 0 开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  PageSize?: number
}

/**
 * DescribeUsageSummaryList返回参数结构体
 */
export interface DescribeUsageSummaryListResponse {
  /**
   * <p>总记录数，用于前端分页</p>
   */
  TotalCount?: string
  /**
   * <p>资源用量聚合明细列表</p>
   */
  UsageSummaryList?: Array<UsageSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApp返回参数结构体
 */
export interface DescribeAppResponse {
  /**
   * <p>应用详情</p>
   */
  App?: App
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogMeta请求参数结构体
 */
export type DescribeAuditLogMetaRequest = null

/**
 * DeleteApp请求参数结构体
 */
export interface DeleteAppRequest {
  /**
   * <p>app_id</p>
   */
  AppId: string
  /**
   * <p>删除原因(非必填,审批时展示)</p>
   */
  Reason?: string
}

/**
 * DescribeAppSummaryList返回参数结构体
 */
export interface DescribeAppSummaryListResponse {
  /**
   * 应用摘要列表
   */
  AppSummaryList?: Array<AppSummary>
  /**
   * total_count
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClawAgent长期记忆配置
 */
export interface ClawAgentLongMemoryConfig {
  /**
   * <p>是否开启长期记忆</p>
   */
  Enabled?: boolean
}

/**
 * FavoritePlugin请求参数结构体
 */
export interface FavoritePluginRequest {
  /**
   * <p>插件id</p>
   */
  PluginId: string
  /**
   * <p>当前空间id</p>
   */
  SpaceId: string
}

/**
 * 支持的文件类型
 */
export interface SupportedFileType {
  /**
   * 文件类型描述(如"文本文档")
   */
  Description: string
  /**
   * 文件类型(如 txt、pdf、jpg, 建议用扩展名)
   */
  FileExt: string
  /**
   * 文件大小限制(单位: 字节)
   */
  MaxSizeBytes: string
}

/**
 * SkillCategory Skill 分类信息。
 */
export interface SkillCategory {
  /**
   * 分类标识
   */
  CategoryKey: string
  /**
   * 分类名称
   */
  CategoryName: string
}

/**
 * Agent 工具详情
 */
export interface AgentTool {
  /**
   * <p>工具配置字段</p>
   */
  Config?: AgentToolBasicConfig
  /**
   * <p>工具名称</p>
   */
  Name?: string
  /**
   * <p>工具状态</p><p>枚举值：</p><ul><li>1： 可用</li><li>2： 不可用</li><li>3： 已失效</li></ul>
   */
  Status?: number
  /**
   * <p>调用方式</p><p>枚举值：</p><ul><li>0： 非流式</li><li>1： 流式</li></ul>
   */
  StreamMode?: number
  /**
   * <p>工具访问模式</p><p>枚举值：</p><ul><li>0： 未指定</li><li>1： 只读</li><li>2： 写/删除</li></ul>
   */
  ToolAccessMode?: number
}

/**
 * ReleaseSkill请求参数结构体
 */
export interface ReleaseSkillRequest {
  /**
   * <p>SkillId</p>
   */
  SkillId: string
  /**
   * <p>空间ID</p>
   */
  SpaceId: string
  /**
   * <p>版本ID</p>
   */
  VersionId: string
}

/**
 * DescribeVariable请求参数结构体
 */
export interface DescribeVariableRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * variable_id
   */
  VariableId: string
  /**
   * module_type。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数
   */
  ModuleType?: number
}

/**
 * 资源调用时序明细
 */
export interface UsageDetail {
  /**
   * <p>调用来源</p>
   */
  CallSource?: CallSource
  /**
   * <p>计量 ID，用于对账/回溯</p>
   */
  DosageId?: string
  /**
   * <p>调用时间戳（Unix 秒）</p>
   */
  EventTime?: string
  /**
   * <p>MODEL 域专属</p>
   */
  Model?: ModelUsageDetail
  /**
   * <p>PLUGIN 域专属</p>
   */
  Plugin?: PluginUsageDetail
  /**
   * <p>调用链路追踪 ID</p>
   */
  TraceId?: string
  /**
   * <p>用户 ID</p>
   */
  UserId?: string
}

/**
 * 操作日志
 */
export interface AuditLog {
  /**
   * <p>员工信息</p>
   */
  AccountInfo?: AccountInfo
  /**
   * <p>应用业务id</p>
   */
  AppId?: string
  /**
   * <p>应用名称</p><p>操作日志触发时的名称</p>
   */
  AppName?: string
  /**
   * <p>操作时间</p><p>参数格式：秒时间戳</p>
   */
  OperateTime?: string
  /**
   * <p>操作类型</p>
   */
  Action?: string
  /**
   * <p>操作对象</p>
   */
  Biz?: string
  /**
   * <p>操作内容</p>
   */
  Content?: string
  /**
   * <p>操作唯一ID</p>
   */
  UniqueId?: string
}

/**
 * UnfavoriteSkill请求参数结构体
 */
export interface UnfavoriteSkillRequest {
  /**
   * <p>SkillId</p>
   */
  SkillId: string
  /**
   * <p>空间ID</p>
   */
  SpaceId: string
}

/**
 * 输入框配置
 */
export interface InputBoxConfig {
  /**
   * 输入框按钮，1：上传图片、2：上传文档，3：腾讯文档，4：联网搜索
   */
  InputBoxButtons?: Array<number | bigint>
}

/**
 * AppTrigger
 */
export interface AppTrigger {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>执行配置</p>
   */
  ExecuteConfig?: ExecuteConfig
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_PROMPT</td><td>1</td><td>指令执行</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_WORKFLOW</td><td>2</td><td>工作流执行</td></tr></tbody></table>
   */
  ExecuteType?: number
  /**
   * <p>失败次数</p>
   */
  FailedCount?: string
  /**
   * <p>推送渠道配置</p>
   */
  PushConfig?: TimerPushConfig
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_STATUS_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_STATUS_ENABLED</td><td>1</td><td>启用</td></tr><tr><td>APP_TRIGGER_STATUS_PAUSED</td><td>2</td><td>暂停</td></tr><tr><td>APP_TRIGGER_STATUS_DELETED</td><td>3</td><td>已删除</td></tr></tbody></table>
   */
  Status?: number
  /**
   * <p>成功次数</p>
   */
  SuccessCount?: string
  /**
   * <p>触发器配置</p>
   */
  TriggerConfig?: TriggerConfig
  /**
   * <p>触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>触发器名称</p>
   */
  TriggerName?: string
  /**
   * <p>触发器状态</p>
   */
  TriggerStatus?: TriggerStatus
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_TYPE_SCHEDULED</td><td>1</td><td>定时触发</td></tr><tr><td>APP_TRIGGER_TYPE_WEBHOOK</td><td>2</td><td>Webhook 触发</td></tr></tbody></table>
   */
  TriggerType?: number
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * DescribeAgentSummaryList返回参数结构体
 */
export interface DescribeAgentSummaryListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>Agent摘要信息</p>
   */
  AgentList?: Array<AgentSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SkillVersion Skill 版本信息。
 */
export interface SkillVersion {
  /**
   * 检测信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisInfo: SkillAnalysisInfo
  /**
   * 当前生效版本号
   */
  Version: string
  /**
   * 当前生效版本ID
   */
  VersionId: string
  /**
   *     Skill 版本发布流程状态：
      - 0 INITIALIZED      初始化（版本初始态）
      - 1 AUDITING         审核中（f_analysis_status ∈ {PENDING, RUNNING}）
      - 2 PENDING_RELEASE  待发布（低/中风险，等用户确认上架）
      - 3 RELEASED         已发布
      - 4 UNRELEASED       未发布（HIGH / UNAVAILABLE / FAILED / 用户放弃，含历史"不通过"语义）
    与 SkillAnalysisStatus 解耦：前者是用户视角发布生命周期，后者是安全检测阶段。
   */
  VersionStatus?: number
  /**
   * Skill包的md5信息
   */
  SkillMd5?: string
  /**
   * 版本包地址
   */
  SkillUrl?: string
  /**
   * 版本创建时间（Unix秒）
   */
  CreateTime?: string
  /**
   * skill md文档
   */
  SkillMarkdownUrl?: string
  /**
   * 版本变更说明
   */
  UpdateDesc?: string
}

/**
 * ModifyAgent返回参数结构体
 */
export interface ModifyAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMsgRecordList返回参数结构体
 */
export interface DescribeMsgRecordListResponse {
  /**
   * <p>是否有更多页</p>
   */
  HasMore?: boolean
  /**
   * <p>消息记录列表</p>
   */
  MsgRecordList?: Array<MsgRecord>
  /**
   * <p>下一页游标信息</p>
   */
  NextCursor?: string
  /**
   * <p>上一页游标信息</p>
   */
  PrevCursor?: string
  /**
   * <p>符合条件的总记录数，用于前端分页显示</p>
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型资源用量聚合明细（MODEL 域专属）
 */
export interface ModelUsageSummary {
  /**
   * <p>调用次数（业务调用维度的顶层计数）</p>
   */
  CallCount?: number
  /**
   * <p>是否默认知识库</p>
   */
  IsDefaultKB?: boolean
  /**
   * <p>模型名称，标识使用的 AI 模型</p>
   */
  ModelName?: string
  /**
   * <p>MODEL 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_* /cache_*），label 为空表示 total_tokens；unit=PAGE_COUNT 表示模型消耗页数</p>
   */
  ResourceConsumptionList?: Array<ResourceConsumption>
  /**
   * <p>模型消耗 PU 总量（聚合维度内的 PU 消耗之和）</p>
   */
  ConsumptionPU?: number
}

/**
 * DescribeVariableList返回参数结构体
 */
export interface DescribeVariableListResponse {
  /**
   * total_count
   */
  TotalCount?: number
  /**
   * variable_list
   */
  VariableList?: Array<Variable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseList请求参数结构体
 */
export interface DescribeReleaseListRequest {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 页码(从0开始)
   */
  PageNumber?: number
  /**
   * 每页数量(最大值:100)
   */
  PageSize?: number
}

/**
 * Reference 参考来源信息
 */
export interface ConversationReference {
  /**
   * <p>参考来源索引</p>
   */
  Index: number
  /**
   * <p>参考来源名称</p>
   */
  Name: string
  /**
   * <p>参考来源类型 枚举值: 0-APP_REFERENCE_TYPE_UNSPECIFIED(未指定), 1-APP_REFERENCE_TYPE_QA(问答), 2-APP_REFERENCE_TYPE_SEGMENT(分片), 3-APP_REFERENCE_TYPE_DOC(文档), 4-APP_REFERENCE_TYPE_WEB_SEARCH(Web 搜索), 5-APP_REFERENCE_TYPE_GRAPH_RAG(GraphRAG)</p>
   */
  Type: number
}

/**
 * MsgRecord
 */
export interface MsgRecord {
  /**
   * 答案
   */
  Answer?: string
  /**
   * 应用ID
   */
  AppId?: string
  /**
   * 分类ID
   */
  CategoryId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 意图
   */
  Intent?: string
  /**
   * 意图分类
   */
  IntentCategory?: string
  /**
   * 是否是智能分类
   */
  IsSmart?: boolean
  /**
   * 问题
   */
  Question?: string
  /**
   * 记录ID
   */
  RecordId?: string
  /**
   * 表示消息的回复方式，枚举 ReplyMethod：0=未指定, 1=大模型直接回复, 2=保守回复, 3=拒答, 4=敏感回复, 5=问答对优先回复, 6=欢迎语, 7=并发超限, 8=全局干预知识, 9=任务流程过程回复, 10=任务流程答案, 11=搜索引擎, 12=知识润色, 13=图片理解, 14=实时文档, 15=澄清确认, 16=工作流回复, 17=工作流结束, 18=智能体回复, 19=多意图, 20=中断, 21=智能体计划预览, 22=智能体计划结果, 23=智能体结构化输出。
   */
  ReplyMethod?: number
  /**
   * 返回结果
   */
  Result?: MsgRecordResult
  /**
   * 分数
   */
  Score?: number
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 来源
   */
  Source?: MsgRecordSource
  /**
   * trace_id
   */
  TraceId?: string
}

/**
 * DeleteMsgRecordCategory请求参数结构体
 */
export interface DeleteMsgRecordCategoryRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>待删除的分类业务 ID</p>
   */
  CategoryId: string
}

/**
 * ModifyMsgRecordCategory返回参数结构体
 */
export interface ModifyMsgRecordCategoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnfavoritePlugin请求参数结构体
 */
export interface UnfavoritePluginRequest {
  /**
   * <p>插件id</p>
   */
  PluginId: string
  /**
   * <p>当前空间id</p>
   */
  SpaceId: string
}

/**
 * Agent 配置里面的模型定义
 */
export interface AgentModelConfig {
  /**
   * <p>模型唯一id</p>
   */
  ModelId?: string
  /**
   * <p>模型别名</p>
   */
  Alias?: string
  /**
   * <p>模型上下文长度字符限制</p>
   */
  ContextWordsLimit?: number
  /**
   * <p>指令长度字符限制</p>
   */
  InstructionsWordsLimit?: number
  /**
   * <p>模型参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelParameters?: ModelParams
}

/**
 * 模型调用明细
 */
export interface ModelUsageDetail {
  /**
   * <p>调用类型，来源于计费 scene_billing（与 filter.call_type 对应）</p>
   */
  CallType?: string
  /**
   * <p>是否默认知识库</p>
   */
  IsDefaultKB?: boolean
  /**
   * <p>模型名称</p>
   */
  ModelName?: string
  /**
   * <p>MODEL 域单次调用的消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_* /cache_*），label 为空表示 total_tokens；unit=PAGE_COUNT 表示模型消耗页数</p>
   */
  ResourceConsumptionList?: Array<ResourceConsumption>
  /**
   * <p>本次调用消耗 PU 量</p>
   */
  ConsumptionPU?: number
}

/**
 * CreateConversation返回参数结构体
 */
export interface CreateConversationResponse {
  /**
   * <p>会话 ID</p>
   */
  ConversationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillDetail请求参数结构体
 */
export interface DescribeSkillDetailRequest {
  /**
   * skillID
   */
  SkillId: string
  /**
   * 空间ID
   */
  SpaceId: string
  /**
   * 版本过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - Perspective: 视角枚举,字符串单值,Values 长度必须为 1,多值视为非法;仅作用于详情返回的 version_list 裁剪,不决定接口本身可见性;不传默认 USER (USER=使用者视角,version_list 仅返回已上线版本 / EDITOR=编辑者视角,version_list 返回全部存活版本 / ALL=全量视角,同 EDITOR)
   */
  VersionFilterList?: Array<Filter>
}

/**
 * 变量信息
 */
export interface Variable {
  /**
   * <p>默认文件名称</p>
   */
  DefaultFileName: string
  /**
   * <p>默认值</p>
   */
  DefaultValue: string
  /**
   * <p>变量描述</p>
   */
  Description: string
  /**
   * <p>模块类型。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数</p>
   */
  ModuleType: number
  /**
   * <p>变量名称</p>
   */
  Name: string
  /**
   * <p>变量类型</p><p>枚举值：</p><ul><li>0： 字符串</li><li>1： 整数</li><li>2： 浮点数</li><li>3： 布尔值</li><li>4： 对象</li><li>5： 字符串数组</li><li>6： 整数数组</li><li>7： 浮点数数组</li><li>8： 布尔值数组</li><li>9： 对象数组</li><li>10： 文件</li><li>11： 文档</li><li>12： 图片</li><li>13： 音频</li><li>14： 视频</li><li>15： 文件数组</li><li>16： 文档数组</li><li>17： 图片数组</li><li>18： 音频数组</li><li>19： 视频数组</li><li>20： 数组的数组</li><li>21： 密钥</li></ul>
   */
  Type: number
  /**
   * <p>变量ID</p>
   */
  VariableId: string
  /**
   * <p>是否启用网络策略(仅环境变量生效)</p>
   */
  EnableEndpoints?: boolean
  /**
   * <p>网络策略列表(支持: 精确域名、*.通配子域名、可带协议/端口/路径前缀)</p>
   */
  EndpointList?: Array<string>
}

/**
 * FavoriteSkill请求参数结构体
 */
export interface FavoriteSkillRequest {
  /**
   * <p>SkillId</p>
   */
  SkillId: string
  /**
   * <p>空间ID</p>
   */
  SpaceId: string
}

/**
 * 应用引用的共享知识库简要信息(查询时仅返回ID和名称)
 */
export interface AppSharedKbInfo {
  /**
   * 共享知识库ID
   */
  KbId: string
  /**
   * 共享知识库名称
   */
  KbName: string
}

/**
 * ModifyMsgRecordCategory请求参数结构体
 */
export interface ModifyMsgRecordCategoryRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>待修改的分类业务 ID</p>
   */
  CategoryId: string
  /**
   * <p>修改后的分类名称</p>
   */
  Name: string
}

/**
 * ResetConversation返回参数结构体
 */
export interface ResetConversationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DailySchedule
 */
export interface DailySchedule {
  /**
   * 时间
   */
  TimeOfDay?: string
}

/**
 * 应用子状态信息
 */
export interface AppSubStatusInfo {
  /**
   * 审批记录ID (当sub_status_list包含PUBLISH_APPROVING时有效)
   */
  ApprovalId: string
  /**
   * 应用子状态列表 (可能同时处于多个子状态)
   */
  SubStatusList?: Array<number | bigint>
}

/**
 * ManualOnlySchedule
 */
export interface ManualOnlySchedule {
  /**
   * 启用
   */
  Enabled?: boolean
}

/**
 * DescribePluginSummaryList请求参数结构体
 */
export interface DescribePluginSummaryListRequest {
  /**
   * 空间ID，查询空间内的插件列表时使用
   */
  SpaceId: string
  /**
   * 过滤条件列表 支持：PluginKind、CategoryKey、PluginSource、PluginId、PluginClass、BillingType
   */
  FilterList?: Array<Filter>
  /**
   * <p>是否只返回已收藏插件。取 true 时，仅返回当前用户已收藏的插件；取 false 或不传时不按收藏状态过滤。</p>
   */
  IsFavoriteOnly?: boolean
  /**
   * <p>插件展示场景。不传或取 0 时不限定场景。</p><p>枚举值：</p><ul><li>0：不限定场景</li><li>1：Agent 模式</li><li>2：工作流</li><li>3：智能工作台</li></ul>
   */
  Module?: number
  /**
   * 页码 从0开始
   */
  PageNumber?: number
  /**
   * 每页大小
   */
  PageSize?: number
  /**
   * 查询内容 模糊匹配：插件名称/插件描述/工具名称/工具描述
   */
  Query?: string
  /**
   * <p>排序方式。</p><p>枚举值：</p><ul><li>0：未指定，默认排序</li><li>1：按相关性排序</li><li>2：按更新时间排序</li><li>3：默认排序</li><li>4：按热度排序</li></ul>
   */
  SortType?: number
}

/**
 * CreateApp返回参数结构体
 */
export interface CreateAppResponse {
  /**
   * app_id
   */
  AppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作日志元数据
 */
export interface AuditLogMetaField {
  /**
   * <p>操作日志元数据key</p>
   */
  Key?: string
  /**
   * <p>操作日志元数据Name</p>
   */
  Name?: string
}

/**
 * 模型作者信息
 */
export interface ModelDeveloperBasic {
  /**
   * <p>作者标识</p>
   */
  Name?: string
  /**
   * <p>作者显示名称</p>
   */
  Alias?: string
}

/**
 * 体验配置
 */
export interface AppExperienceConfig {
  /**
   * 高级配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Advanced: AppAdvancedConf
  /**
   * 对话体验配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conversation: ConversationExperience
  /**
   * 角色配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Role: RoleConfig
}

/**
 * ResumeAppTrigger请求参数结构体
 */
export interface ResumeAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * MCP插件参数信息
 */
export interface PluginParam {
  /**
   * 参数配置是否隐藏不可见
   */
  IsGlobalHidden?: boolean
  /**
   * 参数是否必填
   */
  IsRequired?: boolean
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数值
   */
  Value?: string
}

/**
 * CreateRelease请求参数结构体
 */
export interface CreateReleaseRequest {
  /**
   * <p>应用ID</p>
   */
  AppId: string
  /**
   * <p>应用分享访问控制配置</p>
   */
  AppShareAccessControl?: AppShareAccessControl
  /**
   * <p>渠道ID列表</p>
   */
  ChannelIdList?: Array<string>
  /**
   * <p>企业共享配置</p>
   */
  CorpShareConfig?: CorpShareConfig
  /**
   * <p>发布描述</p>
   */
  Description?: string
  /**
   * <p>将默认知识库中，仅调试生效的知识批量变更为&quot;调试/发布都生效&quot;</p>
   */
  IsDevToRelease?: boolean
  /**
   * <p>是否同步发布为应用模板</p>
   */
  IsPublishAsTemplate?: boolean
}

/**
 * CreateWorkspaceCredential请求参数结构体
 */
export interface CreateWorkspaceCredentialRequest {
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>工作空间 ID</p>
   */
  WorkspaceId: string
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>子用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
}

/**
 * BillingAttribute
 */
export interface BillingAttribute {
  /**
   * <p>属性名称</p>
   */
  Name?: string
  /**
   * <p>属性值</p>
   */
  Value?: string
}

/**
 * DescribeAppTriggerSummaryList返回参数结构体
 */
export interface DescribeAppTriggerSummaryListResponse {
  /**
   * <p>应用触发器数量</p>
   */
  TotalCount?: string
  /**
   * <p>应用触发器列表</p>
   */
  TriggerList?: Array<AppTriggerSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgent请求参数结构体
 */
export interface CreateAgentRequest {
  /**
   * <p>应用Id</p>
   */
  AppId: string
  /**
   * <p>Agent 配置</p>
   */
  Agent?: AgentSpec
  /**
   * <p>Agent 类型，区分 B 端配置态 Agent 与 C 端用户态 Agent</p><p>枚举值：</p><ul><li>0： 配置端Agent</li><li>1： 用户态 Agent</li></ul>
   */
  Kind?: number
}

/**
 * 对话体验配置
 */
export interface ConversationExperience {
  /**
   * AI通话配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiCall: AICallConfig
  /**
   * 背景图片配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackgroundImage: BackgroundImage
  /**
   * 兜底回复开关
   */
  EnableFallbackReply: boolean
  /**
   * 是否使用推荐问
   */
  EnableRecommended: boolean
  /**
   * 是否使用联网搜索
   */
  EnableWebSearch: boolean
  /**
   * 兜底回复语
   */
  FallbackReply: string
  /**
   * 输入框配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputBoxConfig: InputBoxConfig
  /**
   * 输出方式。枚举值: 1:流式, 2:非流式
   */
  Method: number
  /**
   * 推荐问生成prompt模式。枚举值: 1:仅结合知识库输出推荐问的prompt
   */
  RecommendPromptMode: number
}

/**
 * DeletePlugin返回参数结构体
 */
export interface DeletePluginResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePlugin请求参数结构体
 */
export interface DeletePluginRequest {
  /**
   * <p>插件id</p>
   */
  PluginId: string
  /**
   * <p>登录用户主账号(集成商模式必填)</p>
   */
  LoginUin?: string
  /**
   * <p>登录用户子账号(集成商模式必填)</p>
   */
  LoginSubAccountUin?: string
}

/**
 * AI一键优化模型配置
 */
export interface AIOptimizeModel {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * Tool
 */
export interface Tool {
  /**
   * <p>工具计费信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Billing?: ToolBilling
  /**
   * <p>工具调用次数</p><p>单位：次数</p>
   */
  CallCount?: number
  /**
   * <p>工具描述信息</p>
   */
  Description?: string
  /**
   * <p>工具名称</p>
   */
  Name?: string
  /**
   * <p>插件ID</p>
   */
  PluginId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>TOOL_ACCESS_MODE_UNKNOWN</td><td>0</td><td>未指定</td></tr><tr><td>TOOL_ACCESS_MODE_READ_ONLY</td><td>1</td><td>只读</td></tr><tr><td>TOOL_ACCESS_MODE_WRITE_DELETE</td><td>2</td><td>写/删除</td></tr></tbody></table>
   */
  ToolAccessMode?: number
  /**
   * <p>工具配置信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolConfig?: ToolConfig
  /**
   * <p>工具ID</p>
   */
  ToolId?: string
}

/**
 * ModifySpace返回参数结构体
 */
export interface ModifySpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * skill详情
 */
export interface SkillDetail {
  /**
   * 调用情况摘要
   */
  ReferenceSummaryList?: Array<SkillReferenceSummary>
  /**
   * Skill 摘要
   */
  SkillSummary?: SkillSummary
  /**
   * 版本列表
   */
  VersionList?: Array<SkillVersion>
}

/**
 * DescribePluginSummaryList返回参数结构体
 */
export interface DescribePluginSummaryListResponse {
  /**
   * plugin_list
   */
  PluginList?: Array<PluginSummary>
  /**
   * total_count
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Prompt改写配置
 */
export interface PromptRewriteModel {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * 视图范围
 */
export interface ViewScope {
  /**
   * <p>视图类型；枚举值：VIEW_TYPE_CORP(1) 企业视图、VIEW_TYPE_SPACE(2) 空间视图、VIEW_TYPE_APP(3) 应用视图</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>VIEW_TYPE_UNSPECIFIED</td><td>0</td><td>未指定（无效值，请求勿传）</td></tr><tr><td>VIEW_TYPE_CORP</td><td>1</td><td>企业视图</td></tr><tr><td>VIEW_TYPE_SPACE</td><td>2</td><td>空间视图</td></tr><tr><td>VIEW_TYPE_APP</td><td>3</td><td>应用视图</td></tr></tbody></table>
   */
  ViewType: number
  /**
   * <p>视图范围 ID；VIEW_TYPE_CORP 留空；VIEW_TYPE_SPACE 填 space_id；VIEW_TYPE_APP 填 app_id（uint64 雪花 ID 的十进制字符串）</p>
   */
  ScopeId?: string
}

/**
 * CreateConversation请求参数结构体
 */
export interface CreateConversationRequest {
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>登录用户子账号(集成商模式必填)</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>登录用户主账号(集成商模式必填)</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
  /**
   * <p>用户端 AgnetId，当Claw模式开启了“允许在对话中动态修改配置”时可用</p>
   */
  AgentId?: string
}

/**
 * DescribeMsgRecordCategoryList请求参数结构体
 */
export interface DescribeMsgRecordCategoryListRequest {
  /**
   * <p>应用 ID</p>
   */
  AppId: string
}

/**
 * 调用来源
 */
export interface CallSource {
  /**
   * <p>调用主体 ID，含义由 subject_type 决定（如 app_id、kb_id 等）</p>
   */
  SubjectId?: string
  /**
   * <p>调用主体名称</p>
   */
  SubjectName?: string
  /**
   * <p>调用主体类型：APP/KB/WIDGET/OPEN_CLAW/KB_RECALL_TEST/WORKBENCH/MODEL_API</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>METRIC_SOURCE_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>METRIC_SOURCE_TYPE_APP</td><td>1</td><td>应用开发</td></tr><tr><td>METRIC_SOURCE_TYPE_KB</td><td>2</td><td>知识库</td></tr><tr><td>METRIC_SOURCE_TYPE_WIDGET</td><td>3</td><td>Widget</td></tr><tr><td>METRIC_SOURCE_TYPE_OPEN_CLAW</td><td>4</td><td>ClawPro</td></tr><tr><td>METRIC_SOURCE_TYPE_KB_RECALL_TEST</td><td>5</td><td>知识库召回测试</td></tr><tr><td>METRIC_SOURCE_TYPE_WORKBENCH</td><td>6</td><td>智能工作台</td></tr><tr><td>METRIC_SOURCE_TYPE_MODEL_API</td><td>7</td><td>模型 API 调用</td></tr></tbody></table>
   */
  SubjectType?: number
}

/**
 * 消耗用量
 */
export interface ConsumptionUsage {
  /**
   * <p>消耗PU</p>
   */
  ConsumptionPU?: number
  /**
   * <p>用量数值</p>
   */
  Usage?: number
  /**
   * <p>用量单位，枚举值 DosageUnit</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>DOSAGE_UNIT_TOKEN</td><td>0</td><td>token（默认）</td></tr><tr><td>DOSAGE_UNIT_PAGE_COUNT</td><td>1</td><td>page_count（页数）</td></tr><tr><td>DOSAGE_UNIT_TIMES</td><td>2</td><td>times（次数）</td></tr><tr><td>DOSAGE_UNIT_SECOND</td><td>3</td><td>second（秒）</td></tr><tr><td>DOSAGE_UNIT_ITEM</td><td>4</td><td>item（条）</td></tr><tr><td>DOSAGE_UNIT_SHEET</td><td>5</td><td>sheet（张）</td></tr><tr><td>DOSAGE_UNIT_CHARACTER</td><td>6</td><td>character（字符）</td></tr><tr><td>DOSAGE_UNIT_GB</td><td>7</td><td>GB</td></tr><tr><td>DOSAGE_UNIT_NUMBER</td><td>8</td><td>number（个数）</td></tr><tr><td>DOSAGE_UNIT_MILL_SECOND</td><td>9</td><td>mill_second（毫秒）</td></tr></tbody></table>
   */
  UsageUnit?: number
}

/**
 * AppTriggerPromptExecuteConfig
 */
export interface AppTriggerPromptExecuteConfig {
  /**
   * <p>触发器执行提示词</p>
   */
  ExecutePrompt?: string
  /**
   * <p>api参数绑定</p>
   */
  ParamBindingsApi?: AppTriggerParamBindingConfig
}

/**
 * DeleteSkillShare返回参数结构体
 */
export interface DeleteSkillShareResponse {
  /**
   * <p>是否走审批流（false 表示无需审批已直接执行下架）</p>
   */
  NeedApproval?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent的工具基础配置
 */
export interface AgentToolBasicConfig {
  /**
   * <p>插件id</p>
   */
  PluginId?: string
  /**
   * <p>工具id</p>
   */
  ToolId?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>工具输入参数列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputList?: Array<AgentToolInputParameter>
  /**
   * <p>工具输出参数列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputList?: Array<AgentToolOutputParameter>
  /**
   * <p>工具Header参数列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeaderParameterList?: Array<AgentPluginParameter>
  /**
   * <p>工具Query参数列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryParameterList?: Array<AgentPluginParameter>
  /**
   * <p>工具来源: 0-来自插件，1-来自工作流</p>
   */
  ToolSource?: number
  /**
   * <p>是否禁用</p>
   */
  IsDisabled?: boolean
}

/**
 * 应用状态信息 - 运行时状态信息(用户不可修改)
 */
export interface AppStatusInfo {
  /**
   * <p>应用状态</p><p>枚举值：</p><ul><li>1： 未上线</li><li>2： 运行中</li><li>3： 停用</li><li>4： 导入中</li></ul>
   */
  Status: number
  /**
   * <p>状态描述</p>
   */
  StatusDescription: string
}

/**
 * ComplexBilling
 */
export interface ComplexBilling {
  /**
   * <p>复合计费列表</p>
   */
  ComplexList?: Array<ComplexBillingItem>
}

/**
 * DeleteConversation返回参数结构体
 */
export interface DeleteConversationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogMeta返回参数结构体
 */
export interface DescribeAuditLogMetaResponse {
  /**
   * <p>操作类型列表</p>
   */
  Actions?: Array<AuditLogMetaField>
  /**
   * <p>操作对象列表</p>
   */
  BizObjects?: Array<AuditLogMetaField>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多模态问答模型配置
 */
export interface MultiModalQAModel {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * TimerPushConfig
 */
export interface TimerPushConfig {
  /**
   * <p>枚举值:<br>| uint | 描述 |<br>| --- | --- |<br>| 0 |  |<br>| 1 | 不推送 |<br>| 2 | 微信公众号 |<br>| 3 | 企业微信 AI 机器人 |</p>
   */
  PushChannel?: number
  /**
   * <p>推送会话ID</p>
   */
  PushTargetId?: string
  /**
   * <p>枚举值:<br>| uint | 描述 |<br>| --- | --- |<br>| 0 |  |<br>| 1 | 用户 (微信公众号 openid) |<br>| 2 | 群聊 (企微机器人 chat_id) |</p>
   */
  PushTargetType?: number
  /**
   * <p>推送webhook的url</p>
   */
  PushWebhookUrl?: string
}

/**
 * Agent 工具入参
 */
export interface AgentToolConfig {
  /**
   * <p>工具配置</p>
   */
  Config?: AgentToolBasicConfig
}

/**
 * OAuth2.0授权信息
 */
export interface OAuthConfig {
  /**
   * OAuth服务方授权页url地址
   */
  AuthorizationUrl?: string
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 客户端密钥
   */
  ClientSecret?: string
  /**
   * 请求授权的数据范围
   */
  ScopeList?: Array<string>
  /**
   * 获取access token的url地址
   */
  TokenUrl?: string
}

/**
 * WeeklySchedule
 */
export interface WeeklySchedule {
  /**
   * 定时配置（星期）
   */
  Times?: Array<WeeklyTime>
}

/**
 * 模型参数
 */
export interface ModelParams {
  /**
   * 是否开启深度思考
   */
  DeepThinking?: string
  /**
   * 频率惩罚
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrequencyPenalty?: number
  /**
   * 最大输出长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxTokens?: number
  /**
   * 存在惩罚
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresencePenalty?: number
  /**
   * 深度思考效果
   */
  ReasoningEffort?: string
  /**
   * 重复惩罚
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepetitionPenalty?: number
  /**
   * 输出格式（text、json_object）
   */
  ReplyFormat?: string
  /**
   * seed 随机种子
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seed?: number
  /**
   * 停止序列
   */
  StopSequenceList?: Array<string>
  /**
   * 温度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Temperature?: number
  /**
   * top_p
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopP?: number
}

/**
 * Agent输入值，支持直接赋值和引用
 */
export interface AgentInput {
  /**
   * <p>输入来源类型：0 用户输入，3 自定义变量（API参数）</p>
   */
  InputType?: number
  /**
   * <p>用户手写输入</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserInputValue?: AgentUserInputValue
  /**
   * <p>系统参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemVariable?: AgentSystemVariable
  /**
   * <p>自定义变量（API参数）</p>
   */
  CustomVariableId?: string
  /**
   * <p>环境变量参数</p>
   */
  EnvVariableId?: string
  /**
   * <p>应用变量参数</p>
   */
  AppVariableId?: string
}

/**
 * Agent 发布预览信息
 */
export interface AgentReleasePreview {
  /**
   * <p>AgentID</p>
   */
  AgentId?: string
  /**
   * <p>Agent名称</p>
   */
  Name?: string
  /**
   * <p>更新时间, unix 秒时间戳 (s)</p>
   */
  UpdateTime?: string
  /**
   * <p>状态, 状态值：1:新增, 2:修改, 3:删除</p>
   */
  Action?: number
  /**
   * <p>动作描述</p>
   */
  ActionDescription?: string
  /**
   * <p>发布消息</p>
   */
  Message?: string
  /**
   * <p>发布详情</p>
   */
  ReleaseList?: Array<AgentRelease>
}

/**
 * Agent 工具输出参数
 */
export interface AgentToolOutputParameter {
  /**
   * <p>参数名称</p>
   */
  Name?: string
  /**
   * <p>变量描述</p>
   */
  Description?: string
  /**
   * <p>参数类型</p><p>枚举值：</p><ul><li>0： STRING</li><li>1： INT</li><li>2： FLOAT</li><li>3： BOOL</li><li>4： OBJECT</li><li>5： ARRAY_STRING</li><li>6： ARRAY_INT</li><li>7： ARRAY_FLOAT</li><li>8： ARRAY_BOOL</li><li>9： ARRAY_OBJECT</li><li>20： ARRAY_ARRAY</li><li>99： NULL</li></ul>
   */
  Type?: number
  /**
   * <p>子参数，仅 OBJECT 或 ARRAY_OBJECT 类型时使用</p>
   */
  SubParameterList?: Array<AgentToolOutputParameter>
  /**
   * <p>解析方式</p>
   */
  RenderMode?: number
}

/**
 * 通用身份信息（支持数字 ID 与字符串 ID 两种形态）
 */
export interface Identity {
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>数字 ID</p>
   */
  Id?: string
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>字符串 ID</p>
   */
  StrId?: string
}

/**
 * DescribeAgentDetail返回参数结构体
 */
export interface DescribeAgentDetailResponse {
  /**
   * <p>Agent信息</p>
   */
  Agent?: AgentDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAppTrigger返回参数结构体
 */
export interface CreateAppTriggerResponse {
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 系统变量
 */
export interface SystemVariable {
  /**
   * 变量描述
   */
  Description: string
  /**
   * 变量名称
   */
  Name: string
}

/**
 * ModifyPlugin返回参数结构体
 */
export interface ModifyPluginResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppTriggerInstance返回参数结构体
 */
export interface DescribeAppTriggerInstanceResponse {
  /**
   * <p>应用触发器实例</p>
   */
  Instance?: AppTriggerInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSkillShare请求参数结构体
 */
export interface CreateSkillShareRequest {
  /**
   * <p>必填，申请备注（弹窗&quot;申请备注&quot;）</p>
   */
  ApplyRemark: string
  /**
   * <p>必填，原skill_id</p>
   */
  SkillId: string
  /**
   * <p>空间ID，必填</p>
   */
  SpaceId: string
  /**
   * <p>必填，被共享的版本id（必须高于已共享版本）</p>
   */
  VersionId: string
}

/**
 * 资源消耗明细
 */
export interface ConsumptionDetail {
  /**
   * <p>消耗分类（类型/目标/场景/套餐包）</p>
   */
  Classification?: ConsumptionClassification
  /**
   * <p>消耗发生时间，Unix 秒</p>
   */
  EventTime?: string
  /**
   * <p>用量来源类型</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>METRIC_SOURCE_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>METRIC_SOURCE_TYPE_APP</td><td>1</td><td>应用开发</td></tr><tr><td>METRIC_SOURCE_TYPE_KB</td><td>2</td><td>知识库</td></tr><tr><td>METRIC_SOURCE_TYPE_WIDGET</td><td>3</td><td>Widget</td></tr><tr><td>METRIC_SOURCE_TYPE_OPEN_CLAW</td><td>4</td><td>ClawPro</td></tr><tr><td>METRIC_SOURCE_TYPE_KB_RECALL_TEST</td><td>5</td><td>知识库召回测试</td></tr><tr><td>METRIC_SOURCE_TYPE_WORKBENCH</td><td>6</td><td>智能工作台</td></tr><tr><td>METRIC_SOURCE_TYPE_MODEL_API</td><td>7</td><td>模型 API 调用</td></tr></tbody></table>
   */
  MetricSourceType?: number
  /**
   * <p>名称</p>
   */
  Name?: string
  /**
   * <p>空间名称</p>
   */
  SpaceName?: string
  /**
   * <p>消耗用量（数值/单位/PU 消耗）</p>
   */
  Usage?: ConsumptionUsage
  /**
   * <p>用户名称</p>
   */
  UserName?: string
}

/**
 * 欢迎语配置
 */
export interface AppGreetingConfig {
  /**
   * <p>欢迎语内容</p>
   */
  Greeting: string
  /**
   * <p>开场问题列表</p>
   */
  OpeningQuestionList?: Array<string>
}

/**
 * DescribeAppTriggerSummaryList请求参数结构体
 */
export interface DescribeAppTriggerSummaryListRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>参数过滤列表</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码</p><p>取值范围：[1, 1000000]</p>
   */
  PageNumber?: number
  /**
   * <p>每页大小</p><p>取值范围：[1, 100]</p>
   */
  PageSize?: number
  /**
   * <p>模糊查询字符串</p>
   */
  Query?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * AppTriggerScheduleConfig
 */
export interface AppTriggerScheduleConfig {
  /**
   * <p>触发器定时配置</p>
   */
  Schedule?: TimerScheduleConfig
}

/**
 * 员工信息
 */
export interface AccountInfo {
  /**
   * <p>员工子账号id</p>
   */
  AccountUin?: string
  /**
   * <p>员工昵称</p>
   */
  NickName?: string
  /**
   * <p>员工头像</p>
   */
  Avatar?: string
}

/**
 * CreateSkill请求参数结构体
 */
export interface CreateSkillRequest {
  /**
   * <p>Skill 创建方式，必填；仅允许</p><p>枚举值：</p><ul><li>1： FILE_UPLOAD（文件上传）</li><li>3： AIGC（AIGC生成）</li></ul>
   */
  CreateType: number
  /**
   * <p>skill包文件地址（zip）；FILE_UPLOAD / AIGC 均必填</p>
   */
  FileUrl: string
  /**
   * <p>空间ID</p>
   */
  SpaceId: string
  /**
   * <p>skill展示描述</p>
   */
  DisplayDescription?: string
  /**
   * <p>skill展示名称</p>
   */
  DisplayName?: string
  /**
   * <p>图标地址</p>
   */
  IconUrl?: string
  /**
   * <p>skill业务唯一标识名（同企业下唯一）；未传时从skill包解析</p>
   */
  Name?: string
  /**
   * <p>版本号</p>
   */
  SkillVersion?: string
  /**
   * <p>版本变更说明</p>
   */
  UpdateDescription?: string
}

/**
 * <p>排序条件</p>
 */
export interface Sort {
  /**
   * <p>排序字段名，如 create_time</p>
   */
  Name: string
  /**
   * <p>排序方向，1 升序，2 降序</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>SORT_ORDER_INVALID</td><td>0</td><td>无效</td></tr><tr><td>SORT_ORDER_ASC</td><td>1</td><td>升序</td></tr><tr><td>SORT_ORDER_DESC</td><td>2</td><td>降序</td></tr></tbody></table>
   */
  Direction?: number
}

/**
 * CreateAgent返回参数结构体
 */
export interface CreateAgentResponse {
  /**
   * <p>Agent Id</p>
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FavoritePlugin返回参数结构体
 */
export interface FavoritePluginResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 总览 KPI 卡片指标项
 */
export interface MetricOverview {
  /**
   * <p>指标键，取值参考 MetricOverview 注释中的 key 白名单</p>
   */
  Key?: string
  /**
   * <p>环比百分比，无环比时填 0</p>
   */
  Mom?: number
  /**
   * <p>指标单位，枚举值 DosageUnit；key 与 unit 的对应关系参考 MetricOverview 注释白名单</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>DOSAGE_UNIT_TOKEN</td><td>0</td><td>token（默认）</td></tr><tr><td>DOSAGE_UNIT_PAGE_COUNT</td><td>1</td><td>page_count（页数）</td></tr><tr><td>DOSAGE_UNIT_TIMES</td><td>2</td><td>times（次数）</td></tr><tr><td>DOSAGE_UNIT_SECOND</td><td>3</td><td>second（秒）</td></tr><tr><td>DOSAGE_UNIT_ITEM</td><td>4</td><td>item（条）</td></tr><tr><td>DOSAGE_UNIT_SHEET</td><td>5</td><td>sheet（张）</td></tr><tr><td>DOSAGE_UNIT_CHARACTER</td><td>6</td><td>character（字符）</td></tr><tr><td>DOSAGE_UNIT_GB</td><td>7</td><td>GB</td></tr><tr><td>DOSAGE_UNIT_NUMBER</td><td>8</td><td>number（个数）</td></tr><tr><td>DOSAGE_UNIT_MILL_SECOND</td><td>9</td><td>mill_second（毫秒）</td></tr></tbody></table>
   */
  Unit?: number
  /**
   * <p>指标数值</p>
   */
  Value?: number
}

/**
 * Agent 技能详情
 */
export interface AgentSkill {
  /**
   * <p>skillId</p>
   */
  SkillId?: string
  /**
   * <p>skill名称</p>
   */
  Name?: string
  /**
   * <p>技能描述</p>
   */
  Description?: string
  /**
   * <p>skill展示名称</p>
   */
  DisplayName?: string
  /**
   * <p>技能展示描述</p>
   */
  DisplayDescription?: string
  /**
   * <p>skill图标url</p>
   */
  IconUrl?: string
  /**
   * <p>Skill来源</p>
   */
  SourceType?: number
  /**
   * <p>Skill版本</p>
   */
  CurrentVersion?: string
}

/**
 * 模型徽章
 */
export interface ModelBadge {
  /**
   * 展示文案
   */
  Text?: string
  /**
   * 样式主题。1-信息（蓝色）, 2-成功（绿色）, 3-警告（橙色）, 4-危险（红色）
   */
  Theme?: number
  /**
   * tooltip文案，为空则不展示
   */
  Tips?: string
  /**
   * 徽章类型。1-限时免费, 2-即将下线, 3-新模型, 4-热门
   */
  Type?: number
}

/**
 * 平台资源用量聚合明细（PLATFORM 域专属）
 */
export interface PlatformUsageSummary {
  /**
   * <p>PLATFORM 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量，label 取 PlatformBizType 枚举名称字符串；典型如 unit=TIMES + label=PLATFORM_BIZ_TYPE_SECURITY_AUDIT/WEB_SEARCH/OPEN_CLAW/APP_INVOKE，unit=ITEM + label=PLATFORM_BIZ_TYPE_LONG_TERM_MEMORY</p>
   */
  ResourceConsumptionList?: Array<ResourceConsumption>
}

/**
 * 系统参数
 */
export interface AgentSystemVariable {
  /**
   * <p>系统参数名</p>
   */
  Name?: string
  /**
   * <p>对话历史轮数的配置；如果Input是系统变量中的“对话历史”时才使用；</p>
   */
  DialogHistoryLimit?: number
}

/**
 * 应用操作信息
 */
export interface AppOperation {
  /**
   * 创建人
   */
  Creator: string
  /**
   * 创建人UIN
   */
  CreatorUin: string
  /**
   * 创建人账号(私有化场景使用)
   */
  CreatorUserAccount: string
  /**
   * 修改时间 (Unix时间戳,秒级)
   */
  UpdateTime: string
  /**
   * 最后修改人
   */
  Updater: string
  /**
   * 修改人UIN
   */
  UpdaterUin: string
}

/**
 * PluginProfile
 */
export interface PluginProfile {
  /**
   * 插件作者
   */
  Author?: string
  /**
   * 插件描述
   */
  Description?: string
  /**
   * 插件图标url
   */
  IconUrl?: string
  /**
   * 插件名称
   */
  Name?: string
  /**
   * <p>插件产品分类</p><p>枚举值：</p><ul><li>0：普通插件</li><li>1：连接器类插件</li></ul>
   */
  PluginClass?: number
  /**
   * <p>插件类型</p><p>枚举值：</p><ul><li>0：API接口</li><li>1：代码</li><li>2：MCP</li><li>3：应用</li></ul>
   */
  PluginKind?: number
  /**
   * <p>插件来源</p><p>枚举值：</p><ul><li>0：自定义插件</li><li>1：官方插件</li><li>2：第三方插件</li></ul>
   */
  PluginSource?: number
}

/**
 * DescribePlugin返回参数结构体
 */
export interface DescribePluginResponse {
  /**
   * <p>插件详情</p>
   */
  Plugin?: Plugin
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillSummaryList返回参数结构体
 */
export interface DescribeSkillSummaryListResponse {
  /**
   * Skill 摘要列表
   */
  SkillSummaryList?: Array<SkillSummary>
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConversationMessageList请求参数结构体
 */
export interface DescribeConversationMessageListRequest {
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>返回记录总数量，默认 10，最大 50。向前或向后查询时，不包含record_id指定记录的消息，查询方向中心向前后查询时，包含record_id指定的记录消息，返回记录数量为前后各limit / 2条，向上取整</p>
   */
  Limit?: number
  /**
   * <p>子用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>查询锚点记录 ID</p>
   */
  RecordId?: string
  /**
   * <p>相对于 record_id 的查询方向 枚举值: 0-RECORD_QUERY_DIRECTION_UNSPECIFIED(未指定，兼容旧逻辑，默认向前查询), 1-RECORD_QUERY_DIRECTION_BACKWARD(从 record_id 向前查询更早的消息), 2-RECORD_QUERY_DIRECTION_FORWARD(从 record_id 向后查询更新的消息), 3-RECORD_QUERY_DIRECTION_BIDIRECTIONAL(以 record_id 为中心，同时向前后查询)</p>
   */
  RecordQueryDirection?: number
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
}

/**
 * DescribeReleaseList返回参数结构体
 */
export interface DescribeReleaseListResponse {
  /**
   * release_list
   */
  ReleaseList?: Array<ReleaseRecord>
  /**
   * total_count
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgent请求参数结构体
 */
export interface DeleteAgentRequest {
  /**
   * <p>应用Id</p>
   */
  AppId: string
  /**
   * <p>待删除AgentId</p>
   */
  AgentId: string
  /**
   * 协作模式；0-Claw模式；1-Multi-Agent模式
   */
  CollaborationMode?: number
}

/**
 * RequestParam
 */
export interface RequestParam {
  /**
   * <p>AnyOf类型的参数</p>
   */
  AnyOf?: Array<RequestParam>
  /**
   * <p>默认值</p>
   */
  DefaultValue?: string
  /**
   * <p>参数描述</p>
   */
  Description?: string
  /**
   * <p>全局隐藏不可见（区别于Agent场景的agent_hidden），true-全局隐藏不可见，false-可见</p>
   */
  IsGlobalHidden?: boolean
  /**
   * <p>是否必选</p>
   */
  IsRequired?: boolean
  /**
   * <p>参数名称</p>
   */
  Name?: string
  /**
   * <p>OneOf类型的参数</p>
   */
  OneOf?: Array<RequestParam>
  /**
   * <p>子参数,ParamType 是OBJECT 或 ARRAY&lt;&gt;类型有用</p>
   */
  SubParams?: Array<RequestParam>
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>PARAM_TYPE_STRING</td><td>0</td><td>字符串</td></tr><tr><td>PARAM_TYPE_INT</td><td>1</td><td>整数</td></tr><tr><td>PARAM_TYPE_FLOAT</td><td>2</td><td>浮点数</td></tr><tr><td>PARAM_TYPE_BOOL</td><td>3</td><td>布尔值</td></tr><tr><td>PARAM_TYPE_OBJECT</td><td>4</td><td>对象</td></tr><tr><td>PARAM_TYPE_ARRAY_STRING</td><td>5</td><td>字符串数组</td></tr><tr><td>PARAM_TYPE_ARRAY_INT</td><td>6</td><td>整数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_FLOAT</td><td>7</td><td>浮点数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_BOOL</td><td>8</td><td>布尔值数组</td></tr><tr><td>PARAM_TYPE_ARRAY_OBJECT</td><td>9</td><td>对象数组</td></tr><tr><td>PARAM_TYPE_ARRAY_ARRAY</td><td>20</td><td>数组嵌套</td></tr><tr><td>PARAM_TYPE_NULL</td><td>99</td><td>空值</td></tr><tr><td>PARAM_TYPE_UNSPECIFIED</td><td>100</td><td>未指定类型，用于OneOf和AnyOf场景</td></tr></tbody></table>
   */
  Type?: number
}

/**
 * 单次对话失败信息
 */
export interface ConversationRecordErrorInfo {
  /**
   * <p>对话失败错误码</p>
   */
  Code?: string
  /**
   * <p>对话失败错误信息</p>
   */
  Message?: string
}

/**
 * DescribeUsageSummaryList请求参数结构体
 */
export interface DescribeUsageSummaryListRequest {
  /**
   * <p>资源类型，限定为 MODEL / PLUGIN / PLATFORM</p><table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>RESOURCE_TYPE_UNSPECIFIED</td><td>0</td><td></td></tr><tr><td>RESOURCE_TYPE_MODEL</td><td>1</td><td>模型用量</td></tr><tr><td>RESOURCE_TYPE_PLUGIN</td><td>2</td><td>插件用量</td></tr><tr><td>RESOURCE_TYPE_PLATFORM</td><td>3</td><td>平台功能用量</td></tr><tr><td>RESOURCE_TYPE_MODEL_CONCURRENCY</td><td>4</td><td>模型并发超限</td></tr><tr><td>RESOURCE_TYPE_KB_CAPACITY</td><td>5</td><td>知识库容量</td></tr><tr><td>RESOURCE_TYPE_USAGE_SUMMARY</td><td>6</td><td>用量汇总</td></tr><tr><td>RESOURCE_TYPE_RESOURCE_CONSUME</td><td>7</td><td>资源消耗（计费明细）</td></tr></tbody></table>
   */
  ResourceType: number
  /**
   * <p>查询时间范围（Unix 秒）</p>
   */
  TimeRange: TimeRange
  /**
   * <p>视图范围：企业视图 / 空间视图 / 应用视图</p>
   */
  ViewScope: ViewScope
  /**
   * <p>扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name（模型名）、user_id（用户ID）、space_id（空间ID）、resource_id/source_id（来源ID）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数）</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码，从 0 开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  PageSize?: number
}

/**
 * Agent发布项目详情
 */
export interface AgentRelease {
  /**
   * <p>名称</p>
   */
  ItemName?: string
  /**
   * <p>更新时间, unix 秒时间戳 (s)</p>
   */
  UpdateTime?: string
  /**
   * <p>动作描述</p>
   */
  ActionDescription?: string
  /**
   * <p>变更为 测试</p>
   */
  ReleaseMessage?: string
}

/**
 * Agent 工具输入参数定义
 */
export interface AgentToolInputParameter {
  /**
   * <p>工具名称</p>
   */
  Name?: string
  /**
   * <p>工具描述</p>
   */
  Description?: string
  /**
   * <p>工具参数类型</p><p>枚举值：</p><ul><li>0： STRING</li><li>1： INT</li><li>2： FLOAT</li><li>3： BOOL</li><li>4： OBJECT</li><li>5： ARRAY_STRING</li><li>6： ARRAY_INT</li><li>7： ARRAY_FLOAT</li><li>8： ARRAY_BOOL</li><li>9： ARRAY_OBJECT</li><li>20： ARRAY_ARRAY</li><li>99： NULL</li></ul>
   */
  Type?: number
  /**
   * <p>是否必填</p>
   */
  IsRequired?: boolean
  /**
   * <p>子参数，仅 OBJECT 或 ARRAY&lt;&gt; 类型时使用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubParameterList?: Array<AgentToolInputParameter>
  /**
   * <p>模式下是否对模型隐藏</p>
   */
  IsHidden?: boolean
  /**
   * <p>OneOf类型的参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OneOfList?: Array<AgentToolInputParameter>
  /**
   * <p>AnyOf类型的参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnyOfList?: Array<AgentToolInputParameter>
  /**
   * <p>参数取值来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: AgentInput
}

/**
 * RunAppTriggerNow返回参数结构体
 */
export interface RunAppTriggerNowResponse {
  /**
   * <p>应用触发器实例ID</p>
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillDetail返回参数结构体
 */
export interface DescribeSkillDetailResponse {
  /**
   * skill详情
   */
  SkillDetail?: SkillDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAppTrigger请求参数结构体
 */
export interface DeleteAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * 发布摘要信息
 */
export interface ReleaseSummary {
  /**
   * <p>创建时间 (Unix时间戳,秒级)</p>
   */
  CreateTime: string
  /**
   * <p>发布描述</p>
   */
  Description: string
  /**
   * <p>发布ID</p>
   */
  ReleaseId: string
  /**
   * <p>发布状态。枚举值: 1:待发布, 2:发布中, 3:发布成功, 4:发布失败, 5:审核中, 6:审核成功, 7:审核失败, 8:发布成功回调处理中, 9:发布暂停, 10:申诉审核中, 11:申诉审核通过, 12:申诉审核不通过</p>
   */
  Status: number
  /**
   * <p>状态描述</p>
   */
  StatusDescription: string
  /**
   * <p>应用分享访问控制</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppShareAccessControl?: AppShareAccessControl
  /**
   * <p>发布渠道ID列表</p>
   */
  ChannelIdList?: Array<string>
  /**
   * <p>企业共享配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorpShareConfig?: CorpShareConfig
}

/**
 * OnceSchedule
 */
export interface OnceSchedule {
  /**
   * 触发时间
   */
  FireTime?: string
}

/**
 * UnfavoriteSkill返回参数结构体
 */
export interface UnfavoriteSkillResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AppTriggerParamSchema
 */
export interface AppTriggerParamSchema {
  /**
   * <p>参数名</p>
   */
  ParamName?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>PARAM_TYPE_STRING</td><td>0</td><td>字符串</td></tr><tr><td>PARAM_TYPE_INT</td><td>1</td><td>整数</td></tr><tr><td>PARAM_TYPE_FLOAT</td><td>2</td><td>浮点数</td></tr><tr><td>PARAM_TYPE_BOOL</td><td>3</td><td>布尔值</td></tr><tr><td>PARAM_TYPE_OBJECT</td><td>4</td><td>对象</td></tr><tr><td>PARAM_TYPE_ARRAY_STRING</td><td>5</td><td>字符串数组</td></tr><tr><td>PARAM_TYPE_ARRAY_INT</td><td>6</td><td>整数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_FLOAT</td><td>7</td><td>浮点数数组</td></tr><tr><td>PARAM_TYPE_ARRAY_BOOL</td><td>8</td><td>布尔值数组</td></tr><tr><td>PARAM_TYPE_ARRAY_OBJECT</td><td>9</td><td>对象数组</td></tr><tr><td>PARAM_TYPE_ARRAY_ARRAY</td><td>20</td><td>数组嵌套</td></tr><tr><td>PARAM_TYPE_NULL</td><td>99</td><td>空值</td></tr><tr><td>PARAM_TYPE_UNSPECIFIED</td><td>100</td><td>未指定类型，用于OneOf和AnyOf场景</td></tr></tbody></table>
   */
  ParamType?: number
  /**
   * <p>是否必选</p>
   */
  Required?: boolean
  /**
   * <p>子参数列表</p>
   */
  SubParamList?: Array<AppTriggerParamSchema>
}

/**
 * CreateSpace请求参数结构体
 */
export interface CreateSpaceRequest {
  /**
   * 工作空间名称,长度最大30个字符
   */
  Name?: string
  /**
   * 空间描述，长度最大150个字符
   */
  Description?: string
}

/**
 * 搜索资源状态信息
 */
export interface SearchResourceStatusInfo {
  /**
   * 搜索资源状态: AVAILABLE(1)=资源可用, EXHAUSTED(2)=资源已用尽。枚举值: 1:资源可用, 2:资源已用尽
   */
  ResourceStatus: number
}

/**
 * FieldMask
 */
export interface FieldMask {
  /**
   * <p>参数名称</p><p>参数格式：需要获取的指定字段路径</p>
   */
  Paths?: Array<string>
}

/**
 * AppTriggerWebhookParamSchemaConfig
 */
export interface AppTriggerWebhookParamSchemaConfig {
  /**
   * <p>触发器API参数列表</p>
   */
  SchemaList?: Array<AppTriggerParamSchema>
}

/**
 * Message 消息信息
 */
export interface ConversationMessage {
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>消息图标</p>
   */
  Icon: string
  /**
   * <p>消息 ID</p>
   */
  MessageId: string
  /**
   * <p>消息名称</p>
   */
  Name: string
  /**
   * <p>记录 ID</p>
   */
  RecordId: string
  /**
   * <p>消息角色</p>
   */
  Role: string
  /**
   * <p>消息状态，pending:待执行，processing:处理中，success:已完成，failed:处理失败，stop:已取消</p>
   */
  Status: string
  /**
   * <p>状态描述</p>
   */
  StatusDesc: string
  /**
   * <p>消息标题</p>
   */
  Title: string
  /**
   * <p>消息内容列表</p>
   */
  ContentList?: Array<ConversationContent>
  /**
   * <p>消息内容列表</p>
   */
  Contents?: Array<ConversationContent>
  /**
   * <p>类型</p>
   */
  Type?: string
}

/**
 * DescribeConsumptionDetailList请求参数结构体
 */
export interface DescribeConsumptionDetailListRequest {
  /**
   * <p>查询时间范围（Unix 秒）</p>
   */
  TimeRange: TimeRange
  /**
   * <p>视图范围：企业视图 / 空间视图</p>
   */
  ViewScope: ViewScope
  /**
   * <p>扩展过滤。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：metric_source_type（METRIC_SOURCE_TYPE_* 或整数）、source_ids（多选来源ID）、resource_id/source_id（单选来源ID，source_ids 未传时生效）、space_id、user_id</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>页码，从 0 开始</p>
   */
  PageNumber?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  PageSize?: number
}

/**
 * DescribeVariableList请求参数结构体
 */
export interface DescribeVariableListRequest {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 过滤条件(支持: VariableIdList-变量ID列表, VariableType-变量类型)
   */
  FilterList?: Array<Filter>
  /**
   * 模块类型。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数
   */
  ModuleType?: number
  /**
   * 是否需要内部变量
   */
  NeedInternalVariable?: boolean
  /**
   * 页码(从0开始)
   */
  PageNumber?: number
  /**
   * 每页数量(最大值:100)
   */
  PageSize?: number
  /**
   * 查询关键词
   */
  Query?: string
}

/**
 * DescribeConversationMessageList返回参数结构体
 */
export interface DescribeConversationMessageListResponse {
  /**
   * <p>第一个记录 ID</p>
   */
  FirstRecordId?: string
  /**
   * <p>更新消息方向是否还有更多</p>
   */
  HasMoreAfter?: boolean
  /**
   * <p>更早消息方向是否还有更多</p>
   */
  HasMoreBefore?: boolean
  /**
   * <p>最后一个记录 ID</p>
   */
  LastRecordId?: string
  /**
   * <p>消息列表</p>
   */
  MessageList?: Array<ConversationMessage>
  /**
   * <p>消息列表</p>
   * @deprecated
   */
  Messages?: Array<ConversationMessage>
  /**
   * <p>最近一次重置信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResetInfo?: ConversationResetInfo
  /**
   * <p>单次对话记录统计列表，与 message_list 通过 record_id / related_record_id 关联</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordSummaryList?: Array<ConversationRecordSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AppToolConfig
 */
export interface AppToolConfig {
  /**
   * <p>输入参数</p>
   */
  Inputs?: Array<RequestParam>
  /**
   * <p>输出参数</p>
   */
  Outputs?: Array<ResponseParam>
}

/**
 * RollbackRelease返回参数结构体
 */
export interface RollbackReleaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseSummary请求参数结构体
 */
export interface DescribeReleaseSummaryRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * release_id
   */
  ReleaseId: string
}

/**
 * 工作流配置
 */
export interface AppWorkflowConfig {
  /**
   * 是否使用PDL
   */
  EnablePDL: boolean
}

/**
 * AgentTask 智能体任务信息
 */
export interface ConversationAgentTask {
  /**
   * <p>任务内容</p>
   */
  Content: string
  /**
   * <p>任务序号</p>
   */
  Index: string
  /**
   * <p>任务状态，pending:待执行，processing:处理中，success:已完成，failed:处理失败，stop:已取消</p>
   */
  Status: string
}

/**
 * AppTriggerScheduleStatus
 */
export interface AppTriggerScheduleStatus {
  /**
   * <p>最近一次触发时间</p><p>参数格式：格式为YYYY-MM-DD hh:mm:ss</p>
   */
  LastFireTime?: string
  /**
   * <p>下一次触发时间</p><p>参数格式：格式为YYYY-MM-DD hh:mm:ss</p>
   */
  NextFireTime?: string
  /**
   * <p>触发方式</p>
   */
  PolicySummary?: string
}

/**
 * DeleteSkill请求参数结构体
 */
export interface DeleteSkillRequest {
  /**
   * <p>Skill ID，必填</p>
   */
  SkillId: string
  /**
   * <p>空间ID，必填</p>
   */
  SpaceId: string
}

/**
 * DescribePlugin请求参数结构体
 */
export interface DescribePluginRequest {
  /**
   * <p>插件id</p>
   */
  PluginId: string
  /**
   * <p>当前空间id</p>
   */
  SpaceId: string
  /**
   * <p>获取指定字段</p>
   */
  FieldMask?: FieldMask
  /**
   * <p>插件展示场景。不传或取 0 时不限定场景。</p><p>枚举值：</p><ul><li>0：不限定场景</li><li>1：Agent 模式</li><li>2：工作流</li><li>3：智能工作台</li></ul>
   */
  Module?: number
}

/**
 * PluginUserState
 */
export interface PluginUserState {
  /**
   * 是否已收藏该插件
   */
  IsFavorite?: boolean
  /**
   * 是否在插件白名单内
   */
  IsInWhiteList?: boolean
  /**
   * <p>白名单类型，用于表示当前用户是否可直接使用该插件。</p><p>枚举值：</p><ul><li>0：非白名单插件，全量开放</li><li>1：当前用户在白名单内</li><li>2：当前用户不在白名单内，需提交申请</li></ul>
   */
  WhiteListType?: number
}

/**
 * DuplexBilling
 */
export interface DuplexBilling {
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>UNKNOW</td><td>0</td><td></td></tr><tr><td>TOKEN</td><td>1</td><td>按token</td></tr><tr><td>PAGE_COUNT</td><td>2</td><td>按页数</td></tr><tr><td>TIMES</td><td>3</td><td>按次数</td></tr><tr><td>TIMES_THOUSAND</td><td>4</td><td>按千次数</td></tr><tr><td>SECOND</td><td>5</td><td>按时长</td></tr><tr><td>CHARACTER</td><td>6</td><td>按字符数</td></tr><tr><td>CHARACTER_THOUSAND</td><td>7</td><td>按千字符数</td></tr><tr><td>SHEET</td><td>8</td><td>按张</td></tr><tr><td>NUMBER</td><td>9</td><td>按个数</td></tr></tbody></table>
   */
  BillingUnit?: number
  /**
   * <p>输入现金价格</p><p>单位：元</p>
   */
  InputCashPrice?: number
  /**
   * <p>输入pu价格</p><p>单位：pu</p>
   */
  InputPuPrice?: number
  /**
   * <p>输出现金价格</p><p>单位：元</p>
   */
  OutputCashPrice?: number
  /**
   * <p>输出pu价格</p><p>单位：pu</p>
   */
  OutputPuPrice?: number
}

/**
 * 多模态理解模型配置
 */
export interface MultiModalUnderstandingModel {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
}

/**
 * DescribeAppTrigger请求参数结构体
 */
export interface DescribeAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>应用触发器ID</p>
   */
  TriggerId?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * CorpShareConfig
 */
export interface CorpShareConfig {
  /**
   * <p>企业共享开关</p>
   */
  Enabled?: boolean
  /**
   * <p>共享范围类型，1：企业全员，2：指定账户，3：指定空间</p>
   */
  ShareScope?: number
  /**
   * <p>企业共享应用标签</p>
   */
  TagIdList?: Array<string>
  /**
   * <p>共享范围信息(用户时StrId为uin,Name为用户名称;空间时StrId为空间ID,Name为空间名称)</p>
   */
  ShareScopeList?: Array<Identity>
}

/**
 * 应用摘要 - 列表查询返回的应用信息
 */
export interface AppSummary {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式
   */
  AppMode: number
  /**
   * 应用头像
   */
  Avatar: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 操作信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationInfo: AppOperation
  /**
   * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: AppStatusInfo
  /**
   * 子状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubStatus: AppSubStatusInfo
  /**
   * 资源操作权限
   */
  PermissionIdList?: Array<string>
}

/**
 * AppTriggerSummary
 */
export interface AppTriggerSummary {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_PROMPT</td><td>1</td><td>指令执行</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_WORKFLOW</td><td>2</td><td>工作流执行</td></tr></tbody></table>
   */
  ExecuteType?: number
  /**
   * <p>失败次数</p>
   */
  FailedCount?: string
  /**
   * <p>最近一次会话id</p>
   */
  LastSessionId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table><p>取值范围：[0, 2]</p>
   */
  Scope?: number
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_STATUS_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_STATUS_ENABLED</td><td>1</td><td>启用</td></tr><tr><td>APP_TRIGGER_STATUS_PAUSED</td><td>2</td><td>暂停</td></tr><tr><td>APP_TRIGGER_STATUS_DELETED</td><td>3</td><td>已删除</td></tr></tbody></table>
   */
  Status?: number
  /**
   * <p>成功次数</p>
   */
  SuccessCount?: string
  /**
   * <p>触发器id</p>
   */
  TriggerId?: string
  /**
   * <p>触发器名称</p>
   */
  TriggerName?: string
  /**
   * <p>触发器执行状态</p>
   */
  TriggerStatus?: TriggerStatus
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_TYPE_SCHEDULED</td><td>1</td><td>定时触发</td></tr><tr><td>APP_TRIGGER_TYPE_WEBHOOK</td><td>2</td><td>Webhook 触发</td></tr></tbody></table>
   */
  TriggerType?: number
  /**
   * <p>未读日志的数量</p>
   */
  UnreadRunLogCount?: string
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * Workspace 工作空间信息
 */
export interface ConversationWorkspace {
  /**
   * <p>工作空间 ID</p>
   */
  WorkspaceId: string
  /**
   * <p>存储类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
}

/**
 * 同一 SkillRefType 下的引用分组（含总数 + 引用详情列表）。 total_count 始终以未过滤的原始总量为准；reference_summary_list 受二次鉴权开关影响。
 */
export interface SkillReferenceGroup {
  /**
   * <p>该类型下的引用详情列表</p>
   */
  ReferenceSummaryList?: Array<SkillReferenceSummary>
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>SKILL_REF_UNKNOWN</td><td>0</td><td>占位</td></tr><tr><td>SKILL_REF_OPENCLAW</td><td>1</td><td>openclaw</td></tr><tr><td>SKILL_REF_AGENT</td><td>2</td><td>agent</td></tr><tr><td>SKILL_REF_CORP_ASSISTANT</td><td>3</td><td>企业助手</td></tr></tbody></table>
   */
  ReferenceType?: number
  /**
   * <p>该类型下的引用总数</p>
   */
  TotalCount?: number
}

/**
 * DeleteSpace返回参数结构体
 */
export interface DeleteSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppTriggerInstance请求参数结构体
 */
export interface DescribeAppTriggerInstanceRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>触发器运行实例ID</p>
   */
  InstanceId?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * 应用密钥信息
 */
export interface AppSecretInfo {
  /**
   * 应用密钥
   */
  AppKey: string
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * Agent 详情
 */
export interface AgentDetail {
  /**
   * <p>Agent ID</p>
   */
  AgentId?: string
  /**
   * <p>Agent基本配置</p>
   */
  Profile?: AgentProfile
  /**
   * <p>系统提示词</p>
   */
  Instructions?: string
  /**
   * <p>模型信息</p>
   */
  Model?: AgentModelConfig
  /**
   * <p>工具详情</p>
   */
  ToolList?: Array<AgentTool>
  /**
   * <p>插件配置</p>
   */
  PluginList?: Array<AgentPlugin>
  /**
   * <p>技能详情</p>
   */
  SkillList?: Array<AgentSkill>
  /**
   * <p>高级配置</p>
   */
  AdvancedConfig?: AgentAdvancedConfig
}

/**
 * ModifyVariable请求参数结构体
 */
export interface ModifyVariableRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * 变量信息
   */
  Variable?: Variable
}

/**
 * DeleteApp返回参数结构体
 */
export interface DeleteAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAppTrigger请求参数结构体
 */
export interface CreateAppTriggerRequest {
  /**
   * <p>应用ID</p>
   */
  AppId?: string
  /**
   * <p>应用触发器执行配置</p>
   */
  ExecuteConfig?: ExecuteConfig
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_PROMPT</td><td>1</td><td>指令执行</td></tr><tr><td>APP_TRIGGER_EXECUTE_TYPE_WORKFLOW</td><td>2</td><td>工作流执行</td></tr></tbody></table>
   */
  ExecuteType?: number
  /**
   * <p>第三方推送配置</p>
   */
  PushConfig?: TimerPushConfig
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>触发器配置</p>
   */
  TriggerConfig?: TriggerConfig
  /**
   * <p>触发器名字</p>
   */
  TriggerName?: string
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_TYPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_TYPE_SCHEDULED</td><td>1</td><td>定时触发</td></tr><tr><td>APP_TRIGGER_TYPE_WEBHOOK</td><td>2</td><td>Webhook 触发</td></tr></tbody></table>
   */
  TriggerType?: number
  /**
   * <p>访客ID</p>
   */
  UserId?: string
}

/**
 * AppTriggerWebhookStatus
 */
export interface AppTriggerWebhookStatus {
  /**
   * <p>推送Webbook地址</p>
   */
  WebhookUrl?: string
}

/**
 * ResumeAppTrigger返回参数结构体
 */
export interface ResumeAppTriggerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CategoryPermission
 */
export interface CategoryPermission {
  /**
   * <p>当前用户是否可新增子分类</p>
   */
  CanAdd?: boolean
  /**
   * <p>当前用户是否可删除该分类</p>
   */
  CanDelete?: boolean
  /**
   * <p>当前用户是否可编辑该分类</p>
   */
  CanEdit?: boolean
}

/**
 * ResetConversation请求参数结构体
 */
export interface ResetConversationRequest {
  /**
   * <p>会话 ID</p>
   */
  ConversationId: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type: number
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，应用密钥</p>
   */
  AppKey?: string
  /**
   * <p>子用户Uin</p>
   */
  LoginSubAccountUin?: string
  /**
   * <p>主用户Uin</p>
   */
  LoginUin?: string
  /**
   * <p>Type=CONVERSATION_TYPE_SHARE 时必填，分享码</p>
   */
  ShareCode?: string
  /**
   * <p>Type=CONVERSATION_TYPE_API 时必填，访客ID</p>
   */
  UserId?: string
}

/**
 * ToolBilling
 */
export interface ToolBilling {
  /**
   * <p>基础计费信息</p>
   */
  BasicBilling?: BasicBilling
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>BILLING_TYPE_FREE</td><td>0</td><td>免费</td></tr><tr><td>BILLING_TYPE_LIMITED_FREE</td><td>1</td><td>限时免费</td></tr><tr><td>BILLING_TYPE_OFFICIAL_PAID</td><td>2</td><td>官方收费</td></tr><tr><td>BILLING_TYPE_OFFICIAL_PAID_OLD_FREE</td><td>3</td><td>官方收费（新/升级用户收费，存量老用户限时免费）</td></tr></tbody></table>
   */
  BillingType?: number
  /**
   * <p>复合类型计费信息</p>
   */
  ComplexBilling?: ComplexBilling
  /**
   * <p>双向计费信息</p>
   */
  DuplexBilling?: DuplexBilling
}

/**
 * BasicBilling
 */
export interface BasicBilling {
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>UNKNOW</td><td>0</td><td></td></tr><tr><td>TOKEN</td><td>1</td><td>按token</td></tr><tr><td>PAGE_COUNT</td><td>2</td><td>按页数</td></tr><tr><td>TIMES</td><td>3</td><td>按次数</td></tr><tr><td>TIMES_THOUSAND</td><td>4</td><td>按千次数</td></tr><tr><td>SECOND</td><td>5</td><td>按时长</td></tr><tr><td>CHARACTER</td><td>6</td><td>按字符数</td></tr><tr><td>CHARACTER_THOUSAND</td><td>7</td><td>按千字符数</td></tr><tr><td>SHEET</td><td>8</td><td>按张</td></tr><tr><td>NUMBER</td><td>9</td><td>按个数</td></tr></tbody></table>
   */
  BillingUnit?: number
  /**
   * <p>现金价格</p><p>单位：元</p>
   */
  CashPrice?: number
  /**
   * <p>PU价格</p><p>单位：pu</p>
   */
  PuPrice?: number
}

/**
 * DescribeApp请求参数结构体
 */
export interface DescribeAppRequest {
  /**
   * <p>应用ID</p>
   */
  AppId: string
  /**
   * <p>应用域: ADP_DOMAIN_DEV(1)=开发域, ADP_DOMAIN_PROD(2)=发布域。枚举值: 1:开发域, 2:生产域</p>
   */
  Domain?: number
  /**
   * <p>字段掩码，指定需要返回的字段(Paths为空则返回所有字段)。Paths枚举值：AppConfig(应用配置), SecretInfo(应用密钥信息), ShareUrlInfo(分享链接信息), SpecialStatusInfo(特殊状态信息), SearchResourceStatus(搜索资源状态), SharedKbList(应用引用的共享知识库列表),CorpShareConfig(企业共享配置)</p>
   */
  FieldMask?: FieldMask
  /**
   * <p>特殊状态类型(当FieldMask包含SpecialStatusInfo时必填)。枚举值: 1:回滚状态, 2:首次导入状态</p>
   */
  StatusType?: number
}

/**
 * IntervalSchedule
 */
export interface IntervalSchedule {
  /**
   * 开始时间
   */
  StartAt?: string
  /**
   * 
枚举值:
| 枚举值 | uint |
| --- | --- |
| INTERVAL_UNIT_UNSPECIFIED | 0 |
| INTERVAL_UNIT_HOUR | 1 |
| INTERVAL_UNIT_DAY | 2 |
   */
  Unit?: number
  /**
   * 值
   */
  Value?: number
}

/**
 * DescribeLatestRelease请求参数结构体
 */
export interface DescribeLatestReleaseRequest {
  /**
   * app_id
   */
  AppId: string
}

/**
 * AppTriggerParamBindingValue
 */
export interface AppTriggerParamBindingValue {
  /**
   * <p>参数值</p>
   */
  ParamValue?: string
  /**
   * <p>应用变量名</p>
   */
  VariableName?: string
}

/**
 * CopyAgentFromApp返回参数结构体
 */
export interface CopyAgentFromAppResponse {
  /**
   * <p>主 Agent Id</p>
   */
  ParentAgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryRelease返回参数结构体
 */
export interface RetryReleaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能通话配置
 */
export interface AICallConfig {
  /**
   * 数智人配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DigitalHuman: DigitalHumanConfig
  /**
   * 启用数智人
   */
  EnableDigitalHuman: boolean
  /**
   * 启用语音通话
   */
  EnableVoiceCall: boolean
  /**
   * 启用语音互动功能
   */
  EnableVoiceInteract: boolean
  /**
   * 音色配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Voice: VoiceConfig
}

/**
 * CreateSkillShare返回参数结构体
 */
export interface CreateSkillShareResponse {
  /**
   * <p>是否走了审批流（false表示无需审批已直接创建共享任务）</p>
   */
  NeedApproval?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent摘要信息
 */
export interface AgentSummary {
  /**
   * <p>AgentId</p>
   */
  AgentId?: string
  /**
   * <p>Agent 身份画像</p>
   */
  Profile?: AgentProfile
  /**
   * <p>高级设置;scope=0 时返回</p>
   */
  AdvancedConfig?: AgentAdvancedConfig
}

/**
 * DeleteAppTrigger返回参数结构体
 */
export interface DeleteAppTriggerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 列表通用过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 value_list 为 OR 关系）
 */
export interface Filter {
  /**
   * 过滤字段名
   */
  Name?: string
  /**
   * 操作符，默认 IN（向后兼容）<table><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>FILTER_OPERATOR_IN</td><td>0</td><td>属于 value_list（默认值，向后兼容；value_list 不可为空）</td></tr><tr><td>FILTER_OPERATOR_NOT_IN</td><td>1</td><td>不属于 value_list（value_list 不可为空）</td></tr></table>
   */
  Operator?: number
  /**
   * 过滤值数组
   */
  ValueList?: Array<string>
}

/**
 * 工具信息
 */
export interface ToolSummary {
  /**
   * <p>工具Id</p>
   */
  ToolId?: string
}

/**
 * MsgRecordCategory
 */
export interface MsgRecordCategory {
  /**
   * <p>分类的业务 ID</p>
   */
  CategoryId?: string
  /**
   * <p>子分类列表，树形嵌套</p>
   */
  Children?: Array<MsgRecordCategory>
  /**
   * <p>分类名称</p>
   */
  Name?: string
  /**
   * <p>当前用户对该分类的操作权限</p>
   */
  Permission?: CategoryPermission
  /**
   * <p>该分类下消息记录的数量</p>
   */
  TotalCount?: string
}

/**
 * DescribeSkillReferenceList请求参数结构体
 */
export interface DescribeSkillReferenceListRequest {
  /**
   * <p>Skill ID，必填</p>
   */
  SkillId: string
  /**
   * <p>空间ID，必填</p>
   */
  SpaceId: string
}

/**
 * AppTriggerParamBindingConfig
 */
export interface AppTriggerParamBindingConfig {
  /**
   * <p>绑定参数列表</p>
   */
  ParamList?: Array<AppTriggerParamBinding>
}

/**
 * CreateSkill返回参数结构体
 */
export interface CreateSkillResponse {
  /**
   * <p>创建成功后的skillID</p>
   */
  SkillId?: string
  /**
   * <p>创建成功后的版本ID</p>
   */
  VersionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogList请求参数结构体
 */
export interface DescribeAuditLogListRequest {
  /**
   * <p>空间id</p>
   */
  SpaceId?: string
  /**
   * <p>每页数量</p><p>取值范围：[1, 100]</p>
   */
  Limit?: number
  /**
   * <p>es查询起始位置</p><p>对应接口返回SearchAfter</p>
   */
  SearchAfter?: Array<string>
  /**
   * <p>参数过滤</p><p>支持 Action,BizObject,Content<br>支持SpaceId,AccountUin,AppId(最多100个)<br>支持startTime,endTime(秒时间戳)</p>
   */
  FilterList?: Array<Filter>
}

/**
 * VoiceConfig
 */
export interface VoiceConfig {
  /**
   * 数智人音色key,需要和公有云音色id对齐
   */
  TimbreKey: string
  /**
   * 音色名称
   */
  VoiceName: string
  /**
   * 公有云音色id
   */
  VoiceType: number
}

/**
 * DescribeConversation返回参数结构体
 */
export interface DescribeConversationResponse {
  /**
   * <p>应用 ID</p>
   */
  AppId?: string
  /**
   * <p>会话 ID</p>
   */
  ConversationId?: string
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接)</p>
   */
  Type?: number
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>工作空间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workspace?: ConversationWorkspace
  /**
   * <p>会话标题</p>
   */
  Title?: string
  /**
   * <p>会话使用的用户端 AgentId</p>
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 空间信息
 */
export interface Space {
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 空间名称
   */
  Name?: string
  /**
   * 空间描述
   */
  Description?: string
  /**
   * 空间权限
   */
  PermissionIdList?: Array<string>
}

/**
 * 插件资源用量聚合明细（PLUGIN 域专属）
 */
export interface PluginUsageSummary {
  /**
   * <p>调用次数（业务调用维度的顶层计数）</p>
   */
  CallCount?: number
  /**
   * <p>PLUGIN 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_*），label 为空表示 total_tokens</p>
   */
  ResourceConsumptionList?: Array<ResourceConsumption>
}

/**
 * 应用元数据 - 基础标识和描述信息
 */
export interface AppMetadata {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式
   */
  AppMode: number
  /**
   * 应用头像
   */
  Avatar: string
  /**
   * 创建时间 (Unix时间戳,秒级)
   */
  CreateTime: string
  /**
   * 应用描述
   */
  Description: string
  /**
   * 应用名称
   */
  Name: string
  /**
   * 空间ID
   */
  SpaceId: string
  /**
   * 更新时间 (Unix时间戳,秒级)
   */
  UpdateTime: string
}

/**
 * 应用插件配置信息
 */
export interface AppPluginConfig {
  /**
   * 基于发布应用创建插件的应用ID
   */
  AppId: string
}

/**
 * 模型状态信息
 */
export interface ModelStatus {
  /**
   * 专属并发数
   */
  Concurrency?: number
  /**
   * 是否专属并发
   */
  IsExclusive?: boolean
  /**
   * 资源状态。1-资源可用, 2-资源已用尽
   */
  ResourceStatus?: number
}

/**
 * 记忆配置
 */
export interface AppMemoryConfig {
  /**
   * 是否开启长记忆
   */
  Enabled: boolean
  /**
   * 长记忆时长
   */
  LongMemoryDay: number
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model: ModelDetailInfo
  /**
   * prompt内容
   */
  PromptContent: string
  /**
   * 提示词模式。枚举值: 1:自定义
   */
  PromptMode: number
}

/**
 * TriggerStatus
 */
export interface TriggerStatus {
  /**
   * <p>定时器状态</p>
   */
  ScheduledStatus?: AppTriggerScheduleStatus
  /**
   * <table><tbody><tr><td>枚举项</td><td>枚举值</td><td>描述</td></tr><tr><td>APP_TRIGGER_SCOPE_UNSPECIFIED</td><td>0</td><td>未指定</td></tr><tr><td>APP_TRIGGER_SCOPE_APP</td><td>1</td><td>B 端管理员</td></tr><tr><td>APP_TRIGGER_SCOPE_USER</td><td>2</td><td>C 端访客</td></tr></tbody></table>
   */
  Scope?: number
  /**
   * <p>访客id</p>
   */
  UserId?: string
  /**
   * <p>Webhook状态</p>
   */
  WebhookStatus?: AppTriggerWebhookStatus
}

/**
 * DescribeAgentSummaryList请求参数结构体
 */
export interface DescribeAgentSummaryListRequest {
  /**
   * <p>查询范围；0-单应用查询；1-跨应用查询</p>
   */
  Scope?: number
  /**
   * <p>应用Id，Scope=0 时为目标应用ID（必填）；scope=1 时无需填写</p>
   */
  AppId?: string
  /**
   * <p>过滤条件（name: "SearchWord", "SpaceId", "AgentSource", "AppId"）</p>
   */
  FilterList?: Array<Filter>
  /**
   * <p>每页数目</p>
   */
  PageSize?: number
  /**
   * <p>页码</p>
   */
  PageNumber?: number
}

/**
 * AppTriggerParamBinding
 */
export interface AppTriggerParamBinding {
  /**
   * <p>参数名字</p>
   */
  ParamName?: string
  /**
   * <p>参数类型</p><p>枚举值：</p><ul><li>0： 字符串</li><li>1： 整数</li><li>2： 浮点数</li><li>4： 对象</li><li>5： 字符串数组</li><li>6： 整数数组</li><li>7： 浮点数数组</li><li>8： 布尔值数组</li><li>3： 布尔值</li><li>9： 对象数组</li><li>10： 文件</li><li>11： 文档</li><li>12： 图片</li><li>13： 音频</li><li>14： 视频</li><li>15： 文件数组</li><li>16： 文档数组</li><li>17： 图片数组</li><li>18： 音频数组</li><li>19： 视频数组</li><li>20： 数组嵌套</li><li>22： 密钥</li><li>99： 空值</li><li>100： 未指定类型，用于OneOf和AnyOf场景</li></ul>
   */
  ParamType?: number
  /**
   * <p>参数值</p>
   */
  Value?: AppTriggerParamBindingValue
}

/**
 * 插件配置
 */
export interface PluginConfig {
  /**
   * API插件配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiPluginConfig?: ApiPluginConfig
  /**
   * 应用插件配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppPluginConfig?: AppPluginConfig
  /**
   * mcp插件配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  MCPPluginConfig?: MCPPluginConfig
}

/**
 * 并发超限明细
 */
export interface ConcurrencyLimitDetail {
  /**
   * <p>调用来源（subject_type 决定 subject_id/subject_name 的含义，如 APP 时 subject_id=app_id、subject_name=app_name）</p>
   */
  CallSource?: CallSource
  /**
   * <p>超限发生时间（Unix秒）</p>
   */
  EventTime?: string
  /**
   * <p>模型名称</p>
   */
  ModelName?: string
  /**
   * <p>请求内容（用户请求的原始查询文本）</p>
   */
  RequestQuery?: string
  /**
   * <p>空间 ID</p>
   */
  SpaceId?: string
}

/**
 * CreateMsgRecordCategory请求参数结构体
 */
export interface CreateMsgRecordCategoryRequest {
  /**
   * <p>分类名称</p>
   */
  Name: string
  /**
   * <p>应用 ID</p>
   */
  AppId: string
  /**
   * <p>父分类业务 ID，0 表示一级分类（未分类）</p>
   */
  ParentId?: string
}

/**
 * DescribeAgentDetail请求参数结构体
 */
export interface DescribeAgentDetailRequest {
  /**
   * <p>应用Id</p>
   */
  AppId?: string
  /**
   * <p>AgentId</p>
   */
  AgentId?: string
}

/**
 * Agent 插件参数配置
 */
export interface AgentPluginParameter {
  /**
   * <p>参数名称</p>
   */
  Name?: string
  /**
   * <p>是否必填</p>
   */
  IsRequired?: boolean
  /**
   * <p>输入的值</p>
   */
  Input?: AgentInput
}

/**
 * 插件调用明细
 */
export interface PluginUsageDetail {
  /**
   * <p>插件名称</p>
   */
  PluginName?: string
  /**
   * <p>PLUGIN 域单次调用的消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_*），label 为空表示 total_tokens</p>
   */
  ResourceConsumptionList?: Array<ResourceConsumption>
  /**
   * <p>插件工具名（tool_name）</p>
   */
  ToolName?: string
}

/**
 * CopyApp请求参数结构体
 */
export interface CopyAppRequest {
  /**
   * app_id
   */
  AppId: string
  /**
   * target_space_id
   */
  TargetSpaceId?: string
}

/**
 * DeleteSpace请求参数结构体
 */
export interface DeleteSpaceRequest {
  /**
   * 空间id
   */
  SpaceId?: string
}

/**
 * [数据结构定义] 发布记录
 */
export interface ReleaseRecord {
  /**
   * 是否可导出
   */
  CanExport: boolean
  /**
   * 是否可回滚
   */
  CanRollback: boolean
  /**
   * 发布描述
   */
  Description: string
  /**
   * 发布失败数
   */
  FailCount: number
  /**
   * 失败原因
   */
  Reason: string
  /**
   * 发布ID
   */
  ReleaseId: string
  /**
   * 发布版本
   */
  ReleaseVersion: string
  /**
   * 发布状态。枚举值: 1:待发布, 2:发布中, 3:发布成功, 4:发布失败, 5:审核中, 6:审核成功, 7:审核失败, 8:发布成功回调处理中, 9:发布暂停, 10:申诉审核中, 11:申诉审核通过, 12:申诉审核不通过
   */
  Status: number
  /**
   * 状态描述
   */
  StatusDescription: string
  /**
   * 发布成功数
   */
  SuccessCount: number
  /**
   * 更新时间 (Unix时间戳,秒级)
   */
  UpdateTime: string
  /**
   * 发布人
   */
  Updater: string
}

/**
 * 单次对话 token 消耗信息
 */
export interface ConversationRecordTokenUsage {
  /**
   * <p>输入 token 总数</p>
   */
  InputTokens?: string
  /**
   * <p>输出 token 总数</p>
   */
  OutputTokens?: string
  /**
   * <p>消耗 token 总数</p>
   */
  TotalTokens?: string
  /**
   * <p>缓存命中 token 总数</p>
   */
  CachedTokens?: string
  /**
   * <p>推理 token 总数</p>
   */
  ReasoningTokens?: string
}

/**
 * SkillAnalysisInfo Skill 安全扫描信息。
 */
export interface SkillAnalysisInfo {
  /**
   * 安全检测状态

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 待检测 |
| 1 | 检测中 |
| 2 | 可用 |
| 3 | 不可用 |
| 4 | 检测失败 |
   */
  AnalysisStatus: number
  /**
   * 风险描述
   */
  RiskDescription: string
  /**
   * 风险等级

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 无风险 |
| 1 | 低风险 |
| 2 | 中风险 |
| 3 | 高风险 |
   */
  RiskLevel: number
  /**
   * 安全报告跳转url;
   */
  SecurityReportUrl: string
}

/**
 * AppTriggerWorkflowExecuteConfig
 */
export interface AppTriggerWorkflowExecuteConfig {
  /**
   * <p>工作流API参数绑定</p>
   */
  ParamBindingsApi?: AppTriggerParamBindingConfig
  /**
   * <p>工作流参数绑定</p>
   */
  ParamBindingsWorkflow?: AppTriggerParamBindingConfig
  /**
   * <p>工作流ID</p>
   */
  WorkflowId?: string
  /**
   * <p>工作流名字</p>
   */
  WorkflowName?: string
}

/**
 * 模式配置 - 包含不同模式的独有配置
 */
export interface AppModeConfig {
  /**
   * 多智能体配置(Agent模式)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiAgentConfig: MultiAgentConfig
  /**
   * 单工作流配置(单工作流模式)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SingleWorkflowConfig: SingleWorkflowConfig
  /**
   * ClawAgent配置(ClawAgent模式)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClawAgentConfig?: ClawAgentConfig
}

/**
 * 模型提供商基本信息
 */
export interface ModelProviderBasic {
  /**
   * 模型提供商别名
   */
  Alias?: string
  /**
   * 模型提供商名称
   */
  Name?: string
  /**
   * 模型提供商类型。1-自有提供商, 2-自定义模型提供商, 3-第三方模型提供商
   */
  ProviderType?: number
}

/**
 * 应用高级配置
 */
export interface AppAdvancedConf {
  /**
   * <p>是否开启上下文改写</p>
   */
  EnableContextRewrite: boolean
  /**
   * <p>是否开启图文检索</p>
   */
  EnableImageTextRetrieval: boolean
  /**
   * <p>回复灵活度</p>
   */
  ReplyFlexibility: number
  /**
   * <p>对话端自定义配置(所有模式共用,允许对话中动态修改配置)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DialogCustomConfig?: DialogCustomConfig
  /**
   * <p>意图达成优先级</p>
   */
  IntentAchievement?: Array<IntentAchievementInfo>
}

/**
 * PauseAppTrigger返回参数结构体
 */
export interface PauseAppTriggerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 特殊状态信息
 */
export interface SpecialStatusInfo {
  /**
   * 状态 (0-不在特殊状态中, 1-在特殊状态中)。枚举值: 1:在特殊状态中
   */
  Status: number
}
