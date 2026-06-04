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
   * 输入参数
   */
  Inputs?: Array<RequestParam>
  /**
   * 输出参数
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
 * 模型超参
 */
export interface ModelParameter {
  /**
   * 默认值
   */
  DefaultValue?: string
  /**
   * 枚举值列表（仅枚举类型有效）
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
   * 超参类型。1-浮点数, 2-整数, 3-字符串, 4-枚举
   */
  Type?: number
}

/**
 * 定义工具的请求参数
 */
export interface RequestParam {
  /**
   * 默认值
   */
  DefaultValue: string
  /**
   * 参数描述
   */
  Description: string
  /**
   * 全局隐藏不可见（区别于Agent场景的agent_hidden），true-全局隐藏不可见，false-可见
   */
  IsGlobalHidden: boolean
  /**
   * 是否必选
   */
  IsRequired: boolean
  /**
   * 参数名称
   */
  Name: string
  /**
   * 参数类型

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 默认值是string，如果不填就按string处理 |
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
| 5 |  |
| 6 |  |
| 7 |  |
| 8 |  |
| 9 |  |
| 20 |  |
| 99 | 空值 |
| 100 | 未指定类型，用于类型为OneOf和AnyOf的场景 |
   */
  Type: number
  /**
   * AnyOf类型的参数
   */
  AnyOf?: Array<RequestParam>
  /**
   * OneOf类型的参数
   */
  OneOf?: Array<RequestParam>
  /**
   * 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用
   */
  SubParams?: Array<RequestParam>
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
   * 指定需要更新的字段，支持name和description
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
   * 模型列表
   */
  ModelList?: Array<Model>
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
   * 插件详情
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
 * 应用引用的共享知识库简要信息(查询时仅返回ID和名称)
 */
export interface AppSharedKnowledgeInfo {
  /**
   * 共享知识库ID
   */
  KnowledgeId: string
  /**
   * 共享知识库名称
   */
  KnowledgeName: string
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
   * 计费类型
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 免费 |
| 1 | 限时免费 |
| 2 | 官方收费 |
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
   * true-筛选收藏的插件，false不过滤
   */
  IsFavoriteOnly?: boolean
  /**
   * module

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 所有模块 |
| 1 | agent模式模块 |
| 2 | 工作流模块 |
| 3 | 企业员工助理模块 |
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
   * 排序类型，仅搜索场景有效

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 未指定，使用默认行为 |
| 1 | 按相关性排序 |
| 2 | 按更新时间排序 |
   */
  SortType?: number
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
 * DescribePlugin请求参数结构体
 */
export interface DescribePluginRequest {
  /**
   * 插件id
   */
  PluginId: string
  /**
   * 当前空间id
   */
  SpaceId: string
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
   * 代码
   */
  Code: string
  /**
   * 示例
   */
  Example?: ToolExample
  /**
   * 输入参数
   */
  Inputs?: Array<RequestParam>
  /**
   * 输出参数
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
   * 白名单类型
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 非白名单插件，全量开放 |
| 1 | 在白名单里 |
| 2 | 不在白名单里，需要提交申请 |
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
 * 插件的工具信息
 */
export interface Tool {
  /**
   * 工具描述信息
   */
  Description?: string
  /**
   * 工具名称
   */
  Name?: string
  /**
   * 插件id
   */
  PluginId?: string
  /**
   * 工具id
   */
  ToolId?: string
  /**
   * 工具计费信息
   */
  Billing?: ToolBilling
  /**
   * 工具调用次数
   */
  CallCount?: number
  /**
   * <p>工具访问模式</p><p>枚举值：</p><ul><li>0： 未指定</li><li>1： READ_ONLY</li><li>2： WRITE_DELETE</li></ul>
   */
  ToolAccessMode?: number
  /**
   * 工具配置
   */
  ToolConfig?: ToolConfig
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
 * DeleteApp返回参数结构体
 */
export interface DeleteAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 模版中心同步信息(私有化独有)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplatePublish: TemplatePublishInfo
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
 * 模版中心同步信息(私有化独有 - 公有云/SaaS 版本忽略此字段)
 */
export interface TemplatePublishInfo {
  /**
   * 是否已同步到模版中心
   */
  IsPublished: boolean
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
   * 输入参数
   */
  Inputs?: Array<RequestParam>
  /**
   * 输出参数
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
 * 定义工具的回复参数
 */
export interface ResponseParam {
  /**
   * 变量描述
   */
  Description: string
  /**
   * 参数名称
   */
  Name: string
  /**
   * 参数类型

枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 默认值是string，如果不填就按string处理 |
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |
| 5 |  |
| 6 |  |
| 7 |  |
| 8 |  |
| 9 |  |
| 20 |  |
| 99 | 空值 |
| 100 | 未指定类型，用于类型为OneOf和AnyOf的场景 |
   */
  Type: number
  /**
   * 
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 覆盖（全量替换） |
| 1 | 增量追加 |
   */
  RenderMode?: number
  /**
   * 只对 OBJECT 或 ARRAY_OBJECT 类型有用
   */
  SubParams?: Array<ResponseParam>
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
   * 计费类型
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 免费 |
| 1 | 限时免费 |
| 2 | 官方收费 |
| 3 | 官方收费(存量老用户限时免费) |
   */
  BillingType?: number
}

/**
 * 单工作流配置
 */
export interface SingleWorkflowConfig {
  /**
   * 是否开启异步工作流
   */
  AsyncWorkflow: boolean
  /**
   * 状态 发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 PUBLISHED_FAIL:发布失败；DRAFT：待调试)
   */
  Status: string
  /**
   * 工作流描述
   */
  WorkflowDescription: string
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
   * 字段掩码，指定需要返回的字段(Paths为空则返回所有字段)。Paths枚举值：AppConfig(应用配置), SecretInfo(应用密钥信息), ShareUrlInfo(分享链接信息), SpecialStatusInfo(特殊状态信息), SearchResourceStatus(搜索资源状态), SharedKnowledgeList(应用引用的共享知识库列表)
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
   * <p>需要更新的字段路径，如 [&quot;instructions&quot;, &quot;model&quot;, &quot;tool_list&quot;, &quot;plugin_list&quot;, &quot;skill_list&quot;, &quot;advanced_config&quot;]</p>
   */
  UpdateMask?: FieldMask
}

/**
 * DescribeModelList请求参数结构体
 */
export interface DescribeModelListRequest {
  /**
   * 模型场景。1-标准生成, 2-标准思考, 3-Agent思考, 4-多模态理解, 5-多模态问答, 6-改写, 7-长期记忆, 8-自然语言转SQL, 9-AI优化, 10-实时文件解析, 11-文件解析, 12-GraphRAG, 13-OpenClaw, 14-多模态Embedding, 15-Rerank, 16-文本Embedding, 17-Widget, 18-Claw模式, 19-工作流代码生成, 20-工作流大模型节点, 21-工作流节点专用向量化, 22-工作流参数提取, 23-工作流大模型知识问答, 24-工作流标签提取, 25-工作流意图识别, 26-工作流选项卡, 27-工作流逻辑判断, 28-文档生成问答, 29-知识库Schema
   */
  ModelScene: number
  /**
   * 空间ID
   */
  SpaceId?: string
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
   * 插件运营管理信息
   */
  Operation?: PluginOperation
  /**
   * 插件id
   */
  PluginId?: string
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
   * 用户维度的插件状态信息
   */
  UserState?: PluginUserState
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
  DeepThinking: string
  /**
   * 深度思考效果
   */
  ReasoningEffort: string
  /**
   * 输出格式  text、json_object
   */
  ReplyFormat: string
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
   * 重复惩罚
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepetitionPenalty?: number
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
   * API插件工具配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiToolConfig?: ApiToolConfig
  /**
   * 应用插件工具配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppToolConfig?: AppToolConfig
  /**
   * 代码插件工具配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeToolConfig?: CodeToolConfig
  /**
   * mcp插件工具配置
注意：此字段可能返回 null，表示取不到有效值。
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
 * Filter
 */
export interface Filter {
  /**
   * 检索名称
   */
  Name?: string
  /**
   * 检索值
   */
  ValueList?: Array<string>
}

/**
 * ApiToolConfig
 */
export interface ApiToolConfig {
  /**
   * API插件支持对外调用的工具URL
   */
  ExternalApiUrl?: string
  /**
   * 请求method
   */
  Method?: string
  /**
   * 请求的url
   */
  Url?: string
  /**
   * body参数
   */
  Body?: Array<RequestParam>
  /**
   * 示例
   */
  Example?: ToolExample
  /**
   * Header信息
   */
  Header?: Array<RequestParam>
  /**
   * 输出参数
   */
  Outputs?: Array<ResponseParam>
  /**
   * query参数
   */
  Query?: Array<RequestParam>
  /**
   * 流式模式
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 非流式 |
| 1 | 流式 |
   */
  StreamMode?: number
}

/**
 * ToolExample
 */
export interface ToolExample {
  /**
   * 请求示例，json字符串
   */
  Request?: string
  /**
   * 回复示例，json字符串
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
  SharedKnowledgeIdList?: Array<string>
  /**
   * 字段掩码，指定需要更新的字段(Paths为空则不更新任何字段)。Paths枚举值：
【顶层】Name, Avatar, Description, AppMode, ShareConfig, SharedKnowledgeIdList
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
  Alias: string
  /**
   * 历史对话条数限制
   */
  HistoryLimit: number
  /**
   * 模型唯一ID
   */
  ModelId: string
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
 * DescribeSystemVariableList请求参数结构体
 */
export interface DescribeSystemVariableListRequest {
  /**
   * 应用ID
   */
  AppId: string
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
  SharedKnowledgeList?: Array<AppSharedKnowledgeInfo>
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
   * 共享信息；可能有两条，一条是已共享的，一条是审核中的
   */
  ShareList?: Array<SkillShare>
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
   * Agent Id
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - SkillIdList: Skill ID列表,字符串数组,精确匹配 - ProviderType: Skill 提供方类型,枚举值数组,精确匹配 (SKILL_PROVIDER_TYPE_OFFICIAL=1/SKILL_PROVIDER_TYPE_THIRD_PARTY=2/SKILL_PROVIDER_TYPE_CUSTOM=3/SKILL_PROVIDER_TYPE_CUSTOM_SHARED=4) - CategoryKey: 分类标识,字符串数组,精确匹配 - AnalysisStatus: 安全检测状态,枚举值数组,精确匹配 (SKILL_ANALYSIS_PENDING=0/SKILL_ANALYSIS_RUNNING=1/SKILL_ANALYSIS_AVAILABLE=2/SKILL_ANALYSIS_UNAVAILABLE=3/SKILL_ANALYSIS_FAILED=4) - RiskLevel: 风险等级,枚举值数组,精确匹配 (SKILL_RISK_NONE=0/SKILL_RISK_LOW=1/SKILL_RISK_MEDIUM=2/SKILL_RISK_HIGH=3) - ShareStatus: 共享状态,枚举值数组,精确匹配,仅在ProviderType包含SKILL_PROVIDER_TYPE_CUSTOM/SKILL_PROVIDER_TYPE_CUSTOM_SHARED时生效 (SHARE_STATUS_UNSHARED=0/SHARE_STATUS_SHARED=1/SHARE_STATUS_APPROVING=2)
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
   * 插件产品分类
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 普通插件 |
| 1 | 连接器类插件 |
   */
  PluginClass?: number
  /**
   * 插件类型
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | API接口 |
| 1 | 代码 |
| 2 | MCP |
| 3 | 应用 |
   */
  PluginKind?: number
  /**
   * 插件来源
枚举值:
| uint | 描述 |
| --- | --- |
| 0 | 自定义插件 |
| 1 | 官方插件 |
| 2 | 第三方插件 |
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
   * paths
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
   * 模型徽章列表
   */
  BadgeList?: Array<ModelBadge>
  /**
   * 模型限制信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LimitInfo?: ModelLimit
  /**
   * 模型基本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelBasic?: ModelBasic
  /**
   * 模型超参配置
   */
  ParameterList?: Array<ModelParameter>
  /**
   * 模型属性配置
   */
  PropertyList?: Array<ModelProperty>
  /**
   * 模型提供商信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProviderInfo?: ModelProviderBasic
  /**
   * 模型状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInfo?: ModelStatus
  /**
   * 模型标签列表
   */
  TagList?: Array<string>
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
   * 会话标题
   */
  Title?: string
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
   * 会话标题
   */
  Title?: string
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
