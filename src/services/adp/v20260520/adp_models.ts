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
 * 模型超参
 */
export interface ModelParameter {
  /**
   * 默认值
   */
  DefaultValue?: string
  /**
   * 可选值列表
   */
  EnumValueList?: Array<string>
  /**
   * 最大值（仅数值类型有效）
   */
  MaxValue?: number
  /**
   * 最小值（仅数值类型有效）
   */
  MinValue?: number
  /**
   * 超参名称
   */
  Name?: string
  /**
   * 超参类型。1-浮点数, 2-整数, 3-字符串
   */
  Type?: number
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
 * Agent高级设置
 */
export interface AgentAdvancedConfig {
  /**
   * <p>最大推理轮数</p>
   */
  MaxReasoningRound?: number
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
 * 应用分享白名单项
 */
export interface AppShareWhitelistItem {
  /**
   * 白名单类型。枚举值: 1:UIN账号, 2:手机号码, 3:邮箱地址, 4:IP地址
   */
  Type: number
  /**
   * 白名单值列表(UIN/手机号/邮箱/IP等)
   */
  Values?: Array<string>
}

/**
 * 发布摘要信息
 */
export interface ReleaseSummary {
  /**
   * 创建时间 (Unix时间戳,秒级)
   */
  CreateTime: string
  /**
   * 发布描述
   */
  Description: string
  /**
   * 发布ID
   */
  ReleaseId: string
  /**
   * 发布状态。枚举值: 1:待发布, 2:发布中, 3:发布成功, 4:发布失败, 5:审核中, 6:审核成功, 7:审核失败, 8:发布成功回调处理中, 9:发布暂停, 10:申诉审核中, 11:申诉审核通过, 12:申诉审核不通过
   */
  Status: number
  /**
   * 状态描述
   */
  StatusDescription: string
  /**
   * 发布渠道ID列表
   */
  ChannelIdList?: Array<string>
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
 * 搜索资源状态信息
 */
export interface SearchResourceStatusInfo {
  /**
   * 搜索资源状态: AVAILABLE(1)=资源可用, EXHAUSTED(2)=资源已用尽。枚举值: 1:资源可用, 2:资源已用尽
   */
  ResourceStatus: number
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
   */
  Profile?: PluginProfile
  /**
   * 插件统计信息
   */
  Statistics?: PluginStatistics
  /**
   * <p>插件状态，1:可用，2:不可用 </p><p>枚举值：</p><ul><li>1： 可用</li><li>2： 不可用</li></ul>
   */
  Status?: number
  /**
   * 工具列表
   */
  ToolList?: Array<Tool>
  /**
   * 更新时间，Unix时间戳
   */
  UpdateTime?: string
  /**
   * 用户维度的插件状态信息
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
 * 变量信息
 */
export interface Variable {
  /**
   * 默认文件名称
   */
  DefaultFileName: string
  /**
   * 默认值
   */
  DefaultValue: string
  /**
   * 变量描述
   */
  Description: string
  /**
   * 模块类型。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数
   */
  ModuleType: number
  /**
   * 变量名称
   */
  Name: string
  /**
   * 变量类型。枚举值: 1:字符串, 2:整数, 3:浮点数, 4:布尔值, 5:对象, 6:字符串数组, 7:整数数组, 8:浮点数数组, 9:布尔值数组, 10:对象数组, 11:文件, 12:文档, 13:图片, 14:音频, 15:视频, 16:文件数组, 17:文档数组, 18:图片数组, 19:音频数组, 20:视频数组, 21:数组的数组, 22:密钥/敏感信息, 99:空值
   */
  Type: number
  /**
   * 变量ID
   */
  VariableId: string
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
 * 应用分享访问控制配置
 */
export interface AppShareAccessControl {
  /**
   * 访问控制类型。枚举值: 1:公开访问(所有用户都可访问), 2:内部访问(仅企业用户可访问), 3:账号白名单(指定UIN/手机/邮箱/IP可访问)
   */
  AccessType: number
  /**
   * 体验链接开关
   */
  Enabled: boolean
  /**
   * 白名单(仅 access_type=ACCOUNT_WHITELIST 时生效)
   */
  Whitelist?: Array<AppShareWhitelistItem>
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
 * ModifyApp返回参数结构体
 */
export interface ModifyAppResponse {
  /**
   * app_id
   */
  AppId?: string
  /**
   * 更新时间 (Unix时间戳,秒级)
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteApp返回参数结构体
 */
export interface DeleteAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  Messages?: Array<ConversationMessage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * RollbackRelease返回参数结构体
 */
export interface RollbackReleaseResponse {
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
 * DeleteVariable返回参数结构体
 */
export interface DeleteVariableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 应用ID
   */
  AppId: string
  /**
   * 渠道ID列表
   */
  ChannelIdList?: Array<string>
  /**
   * 发布描述
   */
  Description?: string
  /**
   * 将默认知识库中，仅调试生效的知识批量变更为"调试/发布都生效"
   */
  IsDevToRelease?: boolean
  /**
   * 是否同步发布为应用模板
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
 * ModifySpace返回参数结构体
 */
export interface ModifySpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Agent 的插件信息
 */
export interface AgentPlugin {
  /**
   * 插件基本配置
   */
  Config?: AgentPluginConfig
  /**
   * 插件名称
   */
  Name?: string
  /**
   * 插件图标url
   */
  IconUrl?: string
  /**
   * 插件描述
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
 * ModifyConversation返回参数结构体
 */
export interface ModifyConversationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClawAgent配置
 */
export interface ClawAgentConfig {
  /**
   * 调用方自定义配置(控制C端用户在对话时可动态传入哪些自定义配置)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomConfig: ClawAgentCustomConfig
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
 * App 应用完整信息
 */
export interface App {
  /**
   * 辅助信息(子状态/审批/申诉/搜索资源/特殊状态等)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuxiliaryInfo: AppAuxiliaryInfo
  /**
   * 配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config: AppConfig
  /**
   * 元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metadata: AppMetadata
  /**
   * 应用密钥信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretInfo: AppSecretInfo
  /**
   * 分享链接信息(含访问控制)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareUrlInfo: AppShareURLInfo
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: AppStatusInfo
  /**
   * 应用引用的共享知识库列表
   */
  SharedKbList?: Array<AppSharedKbInfo>
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
 * 应用状态信息 - 运行时状态信息(用户不可修改)
 */
export interface AppStatusInfo {
  /**
   * 应用状态 (OFFLINE:未上线, RUNNING:运行中, DISABLED:停用)。枚举值: 1:未上线, 2:运行中, 3:停用
   */
  Status: number
  /**
   * 状态描述
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
 * DeleteConversation返回参数结构体
 */
export interface DeleteConversationResponse {
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
 * ModifyAgent返回参数结构体
 */
export interface ModifyAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 应用ID
   */
  AppId: string
  /**
   * 应用域: ADP_DOMAIN_DEV(1)=开发域, ADP_DOMAIN_PROD(2)=发布域。枚举值: 1:开发域, 2:生产域
   */
  Domain?: number
  /**
   * 字段掩码，指定需要返回的字段(Paths为空则返回所有字段)。Paths枚举值：AppConfig(应用配置), SecretInfo(应用密钥信息), ShareUrlInfo(分享链接信息), SpecialStatusInfo(特殊状态信息), SearchResourceStatus(搜索资源状态), SharedKbList(应用引用的共享知识库列表)
   */
  FieldMask?: FieldMask
  /**
   * 特殊状态类型(当FieldMask包含SpecialStatusInfo时必填)。枚举值: 1:回滚状态, 2:首次导入状态
   */
  StatusType?: number
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
 * DescribeLatestRelease请求参数结构体
 */
export interface DescribeLatestReleaseRequest {
  /**
   * app_id
   */
  AppId: string
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
   * OAuth 授权同意模式；0-开发者授权；1-使用者授权（仅在auth_type=3时生效）
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
 * RetryRelease返回参数结构体
 */
export interface RetryReleaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 用户输入值
 */
export interface AgentUserInputValue {
  /**
   * <p>用户输入参数值</p>
   */
  ValueList?: Array<string>
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
 * CreateRelease返回参数结构体
 */
export interface CreateReleaseResponse {
  /**
   * need_approval
   */
  NeedApproval?: boolean
  /**
   * release_id
   */
  ReleaseId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApp请求参数结构体
 */
export interface ModifyAppRequest {
  /**
   * 应用ID
   */
  AppId: string
  /**
   * 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式
   */
  AppMode?: number
  /**
   * 应用头像
   */
  Avatar?: string
  /**
   * 应用配置
   */
  Config?: AppConfig
  /**
   * 应用描述
   */
  Description?: string
  /**
   * 应用名称
   */
  Name?: string
  /**
   * 分享配置
   */
  ShareConfig?: AppShareAccessControl
  /**
   * 引用的共享知识库ID列表(全量覆盖)
   */
  SharedKbIdList?: Array<string>
  /**
   * 字段掩码，指定需要更新的字段(Paths为空则不更新任何字段)。Paths枚举值：
【顶层】Name, Avatar, Description, AppMode, ShareConfig, SharedKbIdList
【Greeting】Config.Greeting, Config.Greeting.Greeting, Config.Greeting.OpeningQuestionList
【Model】Config.Model, Config.Model.ThinkModel, Config.Model.GenerateModel, Config.Model.AiOptimizeModel, Config.Model.FileParseModel, Config.Model.PromptRewriteModel, Config.Model.MultiModalQaModel, Config.Model.MultiModalUnderstandingModel
【WebSearch】Config.WebSearch
【Memory】Config.Memory, Config.Memory.Enabled, Config.Memory.LongMemoryDay, Config.Memory.Model, Config.Memory.PromptMode, Config.Memory.PromptContent
【Mode】Config.Mode, Config.Mode.MultiAgentConfig, Config.Mode.SingleWorkflowConfig
【Experience】Config.Experience, Config.Experience.Conversation, Config.Experience.Role, Config.Experience.Advanced
【Experience.Conversation】Config.Experience.Conversation.AiCall, Config.Experience.Conversation.BackgroundImage, Config.Experience.Conversation.Method, Config.Experience.Conversation.FallbackReply, Config.Experience.Conversation.Recommended, Config.Experience.Conversation.InputBoxConfig, Config.Experience.Conversation.WebSearch
【Experience.Conversation.AiCall】Config.Experience.Conversation.AiCall.VoiceInteract, Config.Experience.Conversation.AiCall.VoiceCall, Config.Experience.Conversation.AiCall.DigitalHuman
【Experience.Advanced】Config.Experience.Advanced.ContextRewrite, Config.Experience.Advanced.ImageTextRetrieval, Config.Experience.Advanced.IntentAchievement, Config.Experience.Advanced.ReplyFlexibility
   */
  UpdateMask?: FieldMask
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
 * 欢迎语配置
 */
export interface AppGreetingConfig {
  /**
   * 欢迎语内容
   */
  Greeting: string
  /**
   * 开场问题列表
   */
  OpeningQuestionList?: Array<string>
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
 * 特殊状态信息
 */
export interface SpecialStatusInfo {
  /**
   * 状态 (0-不在特殊状态中, 1-在特殊状态中)。枚举值: 1:在特殊状态中
   */
  Status: number
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
 * 角色配置
 */
export interface RoleConfig {
  /**
   * 角色描述
   */
  RoleDescription: string
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
 * ClawAgent调用方自定义配置开关集合
 */
export interface ClawAgentCustomConfig {
  /**
   * <p>是否允许C端用户在对话时动态传入自定义Agent配置</p>
   */
  Enabled?: boolean
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
 * DescribeApp返回参数结构体
 */
export interface DescribeAppResponse {
  /**
   * 应用详情
   */
  App?: App
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApp请求参数结构体
 */
export interface DeleteAppRequest {
  /**
   * app_id
   */
  AppId: string
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
 * DeleteSpace请求参数结构体
 */
export interface DeleteSpaceRequest {
  /**
   * 空间id
   */
  SpaceId?: string
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
 * FieldMask
 */
export interface FieldMask {
  /**
   * <p>参数名称</p><p>参数格式：需要获取的指定字段路径</p>
   */
  Paths?: Array<string>
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
 * 应用高级配置
 */
export interface AppAdvancedConf {
  /**
   * 是否开启上下文改写
   */
  EnableContextRewrite: boolean
  /**
   * 是否开启图文检索
   */
  EnableImageTextRetrieval: boolean
  /**
   * 回复灵活度
   */
  ReplyFlexibility: number
  /**
   * 意图达成优先级
   */
  IntentAchievement?: Array<IntentAchievementInfo>
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
 * DeleteSpace返回参数结构体
 */
export interface DeleteSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
