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
  DeleteSkillShareRequest,
  ToolConfig,
  SkillClassification,
  SearchInput,
  AgentAdvancedConfig,
  FinalRerankConfig,
  PluginStatistics,
  IntentAchievementInfo,
  RollbackReleaseRequest,
  DescribeModelListResponse,
  AppModelConfig,
  Plugin,
  ApiKeyAuthConfig,
  AgentPluginCredentialParam,
  DescribeConversationRequest,
  Conversation,
  AuthConfig,
  AppShareAccessControl,
  KBCategory,
  DialogCustomConfig,
  DescribeMetricOverviewListResponse,
  DescribeAppSummaryListRequest,
  ExecuteConfig,
  CreateLabelResponse,
  TriggerConfig,
  DescribeModelListRequest,
  DescribeMsgRecordCategoryListResponse,
  DeleteVariableResponse,
  DescribeLabelSummaryListResponse,
  DescribeDocResponse,
  ApiPluginConfig,
  AppealingStatus,
  DescribeVariableResponse,
  CreateLabelRequest,
  CodeToolConfig,
  ModelStatus,
  SkillCorpShareConfig,
  DescribeMsgRecordListRequest,
  WeeklyTime,
  UsageSummary,
  SkillReferenceSummary,
  BillingAttribute,
  DescribeConcurrencyLimitDetailListResponse,
  DescribeChannelRequest,
  AgentSpec,
  ClawAgentConfig,
  ModelLimit,
  CreatePluginRequest,
  ThinkModel,
  DeleteAgentResponse,
  ModifyConversationResponse,
  RetryReleaseRequest,
  AppConfig,
  AppAuxiliaryInfo,
  ModifyLabelResponse,
  ModifyConversationRequest,
  CreateChannelResponse,
  TimerScheduleConfig,
  DeleteCategoryResponse,
  SearchResultPayload,
  DescribeUsageDetailListResponse,
  DescribeAppTriggerResponse,
  ModifyVariableResponse,
  DescribeKBSummaryListRequest,
  AgentSkillConfig,
  ModifyAgentRequest,
  PluginOperation,
  AppWebSearchConfig,
  AgentProfile,
  SearchAdvancedConfig,
  KnowledgeScope,
  WechatChannelConfig,
  RunAppTriggerNowRequest,
  AppTriggerWebhookConfig,
  MsgRecordSource,
  MsgRecordResult,
  CreateVariableResponse,
  AppShareURLInfo,
  ReleaseSkillResponse,
  ModelProperty,
  DocParseConfig,
  CreateReleaseResponse,
  DescribeConflictQASummaryListResponse,
  DescribeConversationListRequest,
  ModelDetailInfo,
  ModifyVariableRequest,
  DescribeConcurrencyLimitDetailListRequest,
  MCPPluginConfig,
  CreateMsgRecordCategoryResponse,
  CreateQAListRequest,
  DeleteVariableRequest,
  CreateAppTriggerRequest,
  AppTriggerInstance,
  ModifyDocListRequest,
  DeleteConversationRequest,
  ModifyConflictQARequest,
  DescribeAppTriggerRunLogListResponse,
  DescribeConflictQASummaryListRequest,
  DescribeSkillSummaryListRequest,
  DocLink,
  CopyAppResponse,
  AgentPluginCredentialConfig,
  ComplexBillingItem,
  BackgroundImage,
  ModifyConflictQAResponse,
  Model,
  LabelTermCheckResult,
  SearchResourceStatusInfo,
  CreateQAGenerationTaskRequest,
  DingTalkChannelConfig,
  DescribeSpaceListRequest,
  AppTriggerRunLog,
  ConversationContent,
  CamAuthConfig,
  DescribeSkillReferenceListResponse,
  UnfavoritePluginResponse,
  CreateKBRequest,
  DeleteMsgRecordCategoryResponse,
  GenerateModel,
  FavoriteSkillResponse,
  SkillShare,
  AppShareWhitelistItem,
  ModifyKBRequest,
  CreateWebSocketTokenRequest,
  DescribeChannelListRequest,
  DescribeQARequest,
  DocQuery,
  SkillNotice,
  DescribeAgentReleasePreviewListRequest,
  DocSwitch,
  PauseAppTriggerRequest,
  MetaValue,
  LabelTermModifyItem,
  CopyAgentFromAppRequest,
  QACreateSpec,
  ModelParameter,
  ModifyAppResponse,
  ExpirationPolicy,
  DescribeAccountListRequest,
  WechatCustomerServiceChannelConfig,
  DescribeConversationListResponse,
  MultiAgentConfig,
  CreateWebSocketTokenResponse,
  DescribeChannelListResponse,
  QASegmentHighlight,
  DescribeSkillCategoryListResponse,
  LarkChannelConfig,
  TimeRange,
  DescribeConsumptionDetailListResponse,
  ConflictQASummary,
  ModifyChannelResponse,
  DeleteCategoryRequest,
  AppOperation,
  ClawAgentAgentTeamConfig,
  DescribeSystemVariableListResponse,
  UserAccessConfig,
  TelegramChannelConfig,
  AgentPlugin,
  SimilarQuestionModifySpec,
  SearchBilling,
  DeleteQAListResponse,
  ConversationResetInfo,
  QASourceInfo,
  CheckResult,
  ConversationQuoteInfo,
  DeleteLabelListRequest,
  DescribeSpaceListResponse,
  LineChannelConfig,
  ConversationRecordSummary,
  ConversationRecordTimeUsage,
  App,
  AppTriggerParamBindingValue,
  DocMetadata,
  FileParseModel,
  AppAppeal,
  DescribeSkillCategoryListRequest,
  DigitalHumanConfig,
  DescribeLatestReleaseResponse,
  SearchContext,
  ResponseParam,
  ModifyQAListResponse,
  SingleWorkflowConfig,
  CreatePluginResponse,
  CreateSimilarQuestionResponse,
  DescribeChannelResponse,
  QAModifyFields,
  AgentPluginConfig,
  PluginSummary,
  ModifyDocListResponse,
  DescribeQASummaryListRequest,
  CreateWorkspaceCredentialResponse,
  ConversationMcpApp,
  ModifyPluginRequest,
  DeDuplicateStrategy,
  DescribeAccountListResponse,
  DeleteChannelResponse,
  PluginParam,
  DocModifyFields,
  AgentUserInputValue,
  SkillProfile,
  DescribeMetricOverviewListRequest,
  ApiToolConfig,
  ToolExample,
  DescribeAppTriggerRunLogListRequest,
  ResourceConsumption,
  ModelBasic,
  DescribeKBSummaryListResponse,
  ModifyAppRequest,
  DeleteQAListRequest,
  MCPToolMeta,
  CreateSpaceResponse,
  DocImportSpec,
  CreateVariableRequest,
  ConsumptionClassification,
  ExportQARequest,
  DescribeSystemVariableListRequest,
  DescribeReleaseSummaryResponse,
  QASummary,
  MCPToolConfig,
  DescribeKBResponse,
  SkillSummary,
  DescribeLabelRequest,
  WecomRobotWebsocketAccess,
  AgentCollaborationConfig,
  MsgRecordCategory,
  SummaryListSwitch,
  CheckLabelRequest,
  ModifySkillResponse,
  RoleConfig,
  DescribeAuditLogListResponse,
  DescribeUsageDetailListRequest,
  DescribeUsageSummaryListResponse,
  DescribeAppResponse,
  DescribeAuditLogMetaRequest,
  DeleteAppRequest,
  DescribeAppSummaryListResponse,
  ClawAgentLongMemoryConfig,
  FavoritePluginRequest,
  KnowledgeSnippetProfile,
  ContentFilter,
  ImportDocListResponse,
  SupportedFileType,
  SkillCategory,
  AgentTool,
  ReleaseSkillRequest,
  DescribeVariableRequest,
  UsageDetail,
  WechatClawBotChannelConfig,
  AuditLog,
  UnfavoriteSkillRequest,
  InputBoxConfig,
  AppTrigger,
  DescribeAgentSummaryListResponse,
  DeleteKBRequest,
  SkillVersion,
  AppModeConfig,
  DescribeMsgRecordListResponse,
  Tool,
  ModelUsageSummary,
  DescribeQAResponse,
  DescribeVariableListResponse,
  LabelRef,
  ModifyQARequest,
  LabelSummary,
  DescribeReleaseListRequest,
  ModifySpaceResponse,
  ConversationReference,
  MsgRecord,
  LabelModifyFields,
  DeleteMsgRecordCategoryRequest,
  DocOperator,
  DescribeDocSummaryListRequest,
  ModifyMsgRecordCategoryResponse,
  UnfavoritePluginRequest,
  AgentModelConfig,
  ModelUsageDetail,
  ModifyQAListRequest,
  CreateConversationResponse,
  DescribeSkillDetailRequest,
  Variable,
  ExpirationAwareness,
  FavoriteSkillRequest,
  AppSharedKbInfo,
  ModifyMsgRecordCategoryRequest,
  ResetConversationResponse,
  DailySchedule,
  PromptRewriteModel,
  ManualOnlySchedule,
  ModifySpaceRequest,
  DescribePluginSummaryListRequest,
  CreateAppResponse,
  KBModifyExtendFields,
  QARetrievalConfig,
  AuditLogMetaField,
  CreateQAListResponse,
  ModelDeveloperBasic,
  ModifySkillRequest,
  AppExperienceConfig,
  ResumeAppTriggerRequest,
  QAOperator,
  LabelRefIdentityList,
  CreateReleaseRequest,
  CreateWorkspaceCredentialRequest,
  ModifyAppTriggerRequest,
  DescribeAppTriggerSummaryListResponse,
  DescribeKBRequest,
  CreateAgentRequest,
  ConversationExperience,
  DeletePluginResponse,
  DeletePluginRequest,
  AIOptimizeModel,
  SearchFilterConfig,
  CreateSimilarQuestionRequest,
  KBRetrievalConfig,
  SkillDetail,
  DescribePluginSummaryListResponse,
  AppSubStatusInfo,
  ViewScope,
  CreateConversationRequest,
  CreateSkillResponse,
  DescribeDocRequest,
  WecomAppChannelConfig,
  DescribeMsgRecordCategoryListRequest,
  CallSource,
  ConsumptionUsage,
  AppTriggerPromptExecuteConfig,
  DeleteSkillShareResponse,
  ModifyCategoryResponse,
  ReleaseSummary,
  SimilarQuestion,
  AgentToolBasicConfig,
  DescribeConflictQAResponse,
  AppStatusInfo,
  ComplexBilling,
  DocRetrievalConfig,
  DescribeLabelSummaryListRequest,
  SearchKnowledgeResponse,
  DeleteConversationResponse,
  DescribeAuditLogMetaResponse,
  DescribeCategoryListResponse,
  AppTriggerParamSchema,
  TimerPushConfig,
  ChannelSpec,
  AgentToolConfig,
  DeleteSkillResponse,
  KBCapacity,
  SimilarQuestionExtra,
  DeleteDocListRequest,
  WeeklySchedule,
  ModelParams,
  AgentInput,
  AgentReleasePreview,
  AgentToolOutputParameter,
  CreateChannelRequest,
  Identity,
  AccessKeyAuthConfig,
  DescribeLabelResponse,
  CreateAppTriggerResponse,
  DeleteKBResponse,
  DocSummary,
  KBSpec,
  SystemVariable,
  ModifyPluginResponse,
  DescribeQASummaryListResponse,
  DescribeAppTriggerInstanceResponse,
  UserAgentReference,
  CreateSkillShareRequest,
  LabelTerm,
  ConsumptionDetail,
  QALifecycle,
  CategoryPath,
  ModifyDocRequest,
  AppGreetingConfig,
  DescribeAppTriggerSummaryListRequest,
  AppTriggerScheduleConfig,
  KnowledgeResult,
  ModifyAppTriggerResponse,
  AccountInfo,
  CreateSkillRequest,
  Sort,
  CreateAgentResponse,
  FavoritePluginResponse,
  MetricOverview,
  AgentSkill,
  SearchKnowledgeRequest,
  DBRetrievalConfig,
  ModelBadge,
  TokenUsage,
  PlatformUsageSummary,
  DeleteLabelListResponse,
  AgentSystemVariable,
  DocExternalLink,
  PluginProfile,
  DescribePluginResponse,
  DescribeAgentReleasePreviewListResponse,
  DescribeSkillSummaryListResponse,
  DescribeConversationMessageListRequest,
  EffectivePeriod,
  DescribeDocSummaryListResponse,
  DeleteDocListResponse,
  DescribeReleaseListResponse,
  DeleteAgentRequest,
  RequestParam,
  ConversationRecordErrorInfo,
  DescribeUsageSummaryListRequest,
  AgentRelease,
  AgentToolInputParameter,
  WecomRobotCallbackAccess,
  RunAppTriggerNowResponse,
  DescribeConflictQARequest,
  DescribeSkillDetailResponse,
  CallbackConfig,
  DeleteAppTriggerRequest,
  QAPermission,
  CreateQAGenerationTaskResponse,
  CategoryModifyFields,
  OperationResult,
  OnceSchedule,
  QAQuery,
  UnfavoriteSkillResponse,
  MultiModalQAModel,
  CreateSpaceRequest,
  MCPToolUIMeta,
  ModifyDocResponse,
  SearchFilter,
  DescribeCategoryListRequest,
  FieldMask,
  AppTriggerWebhookParamSchemaConfig,
  ConversationMessage,
  CreateCategoryResponse,
  WecomRobotChannelConfig,
  ImportDocListRequest,
  DescribeConsumptionDetailListRequest,
  DescribeVariableListRequest,
  Operator,
  ExportQAResponse,
  QAMetadata,
  DescribeConversationMessageListResponse,
  AppToolConfig,
  RollbackReleaseResponse,
  DescribeReleaseSummaryRequest,
  AppWorkflowConfig,
  ConversationAgentTask,
  CheckLabelResponse,
  AppTriggerScheduleStatus,
  KVPair,
  DeleteSkillRequest,
  DescribePluginRequest,
  Channel,
  PluginUserState,
  DocLifecycle,
  MultiModalUnderstandingModel,
  DescribeAppTriggerRequest,
  CorpShareConfig,
  AppSummary,
  AppTriggerSummary,
  ConversationWorkspace,
  SkillReferenceGroup,
  DeleteSpaceResponse,
  DescribeAppTriggerInstanceRequest,
  AppSecretInfo,
  AgentDetail,
  GraphRAG,
  ModifyQAResponse,
  CreateAppRequest,
  DeleteAppResponse,
  ESConfig,
  AppTriggerWebhookStatus,
  ResumeAppTriggerResponse,
  AccessKeyParamConfig,
  CategoryPermission,
  DocTaskStatus,
  ResetConversationRequest,
  OAuthConfig,
  ToolBilling,
  BasicBilling,
  DescribeAppRequest,
  IntervalSchedule,
  DescribeLatestReleaseRequest,
  DeleteChannelRequest,
  CronSchedule,
  CopyAgentFromAppResponse,
  AgentExternalToolConfig,
  ConflictQA,
  RetryReleaseResponse,
  AICallConfig,
  ModifyChannelRequest,
  CreateSkillShareResponse,
  TableEnhancement,
  KnowledgeSource,
  AgentSummary,
  DeleteAppTriggerResponse,
  Filter,
  ToolSummary,
  ModifyLabelRequest,
  ModifyCategoryRequest,
  AccessKeyPassThroughConfig,
  DescribeSkillReferenceListRequest,
  AppTriggerParamBindingConfig,
  KBModelConfig,
  DescribeAuditLogListRequest,
  VoiceConfig,
  DocUpdatePeriod,
  DescribeConversationResponse,
  Space,
  PluginUsageSummary,
  AppMetadata,
  CreateKBResponse,
  AppPluginConfig,
  DocPermission,
  AppMemoryConfig,
  TriggerStatus,
  DescribeAgentSummaryListRequest,
  AppTriggerParamBinding,
  PluginConfig,
  RerankConfig,
  ConcurrencyLimitDetail,
  CreateMsgRecordCategoryRequest,
  DescribeAgentDetailRequest,
  AgentPluginParameter,
  PluginUsageDetail,
  CopyAppRequest,
  CreateCategoryRequest,
  DescribeAgentDetailResponse,
  RetrievalOption,
  DeleteSpaceRequest,
  ReleaseRecord,
  ConversationRecordTokenUsage,
  SkillAnalysisInfo,
  AppTriggerWorkflowExecuteConfig,
  LabelRefIdentity,
  ModifyAgentResponse,
  ModelProviderBasic,
  SimilarQuestionStat,
  AppAdvancedConf,
  KBSummary,
  PauseAppTriggerResponse,
  ModifyKBResponse,
  DuplexBilling,
  SpecialStatusInfo,
} from "./adp_models"

/**
 * adp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("adp.tencentcloudapi.com", "2026-05-20", clientConfig)
  }

  /**
   * DeleteAppTrigger
   */
  async DeleteAppTrigger(
    req: DeleteAppTriggerRequest,
    cb?: (error: string, rep: DeleteAppTriggerResponse) => void
  ): Promise<DeleteAppTriggerResponse> {
    return this.request("DeleteAppTrigger", req, cb)
  }

  /**
   * 查询标签详情
   */
  async DescribeLabel(
    req: DescribeLabelRequest,
    cb?: (error: string, rep: DescribeLabelResponse) => void
  ): Promise<DescribeLabelResponse> {
    return this.request("DescribeLabel", req, cb)
  }

  /**
   * 查询skill详情
   */
  async DescribeSkillDetail(
    req: DescribeSkillDetailRequest,
    cb?: (error: string, rep: DescribeSkillDetailResponse) => void
  ): Promise<DescribeSkillDetailResponse> {
    return this.request("DescribeSkillDetail", req, cb)
  }

  /**
   * 获取应用摘要列表
   */
  async DescribeAppSummaryList(
    req: DescribeAppSummaryListRequest,
    cb?: (error: string, rep: DescribeAppSummaryListResponse) => void
  ): Promise<DescribeAppSummaryListResponse> {
    return this.request("DescribeAppSummaryList", req, cb)
  }

  /**
   * 创建渠道（通过scene区分B端应用发布渠道与C端IM渠道）
   */
  async CreateChannel(
    req: CreateChannelRequest,
    cb?: (error: string, rep: CreateChannelResponse) => void
  ): Promise<CreateChannelResponse> {
    return this.request("CreateChannel", req, cb)
  }

  /**
   * 修改渠道（支持修改备注与企微机器人渠道回调机器人ID）
   */
  async ModifyChannel(
    req: ModifyChannelRequest,
    cb?: (error: string, rep: ModifyChannelResponse) => void
  ): Promise<ModifyChannelResponse> {
    return this.request("ModifyChannel", req, cb)
  }

  /**
   * DescribeAppTriggerRunLogList
   */
  async DescribeAppTriggerRunLogList(
    req: DescribeAppTriggerRunLogListRequest,
    cb?: (error: string, rep: DescribeAppTriggerRunLogListResponse) => void
  ): Promise<DescribeAppTriggerRunLogListResponse> {
    return this.request("DescribeAppTriggerRunLogList", req, cb)
  }

  /**
   * 新增发布任务
   */
  async CreateRelease(
    req: CreateReleaseRequest,
    cb?: (error: string, rep: CreateReleaseResponse) => void
  ): Promise<CreateReleaseResponse> {
    return this.request("CreateRelease", req, cb)
  }

  /**
   * 获取渠道详情（scene区分场景）
   */
  async DescribeChannel(
    req: DescribeChannelRequest,
    cb?: (error: string, rep: DescribeChannelResponse) => void
  ): Promise<DescribeChannelResponse> {
    return this.request("DescribeChannel", req, cb)
  }

  /**
   * CreateAppTrigger
   */
  async CreateAppTrigger(
    req: CreateAppTriggerRequest,
    cb?: (error: string, rep: CreateAppTriggerResponse) => void
  ): Promise<CreateAppTriggerResponse> {
    return this.request("CreateAppTrigger", req, cb)
  }

  /**
   * 查询应用的对话消息记录列表，支持按渠道类型、反馈类型、意图、调用结果等条件过滤，并支持游标分页与按创建时间排序
   */
  async DescribeMsgRecordList(
    req: DescribeMsgRecordListRequest,
    cb?: (error: string, rep: DescribeMsgRecordListResponse) => void
  ): Promise<DescribeMsgRecordListResponse> {
    return this.request("DescribeMsgRecordList", req, cb)
  }

  /**
   * 查询知识库列表
   */
  async DescribeKBSummaryList(
    req: DescribeKBSummaryListRequest,
    cb?: (error: string, rep: DescribeKBSummaryListResponse) => void
  ): Promise<DescribeKBSummaryListResponse> {
    return this.request("DescribeKBSummaryList", req, cb)
  }

  /**
   * 修改Agent配置信息
   */
  async ModifyAgent(
    req: ModifyAgentRequest,
    cb?: (error: string, rep: ModifyAgentResponse) => void
  ): Promise<ModifyAgentResponse> {
    return this.request("ModifyAgent", req, cb)
  }

  /**
   * 删除指定的消息记录分类
   */
  async DeleteMsgRecordCategory(
    req: DeleteMsgRecordCategoryRequest,
    cb?: (error: string, rep: DeleteMsgRecordCategoryResponse) => void
  ): Promise<DeleteMsgRecordCategoryResponse> {
    return this.request("DeleteMsgRecordCategory", req, cb)
  }

  /**
     * 重置会话
注意：当前Claw模式应用会话不支持重置
     */
  async ResetConversation(
    req: ResetConversationRequest,
    cb?: (error: string, rep: ResetConversationResponse) => void
  ): Promise<ResetConversationResponse> {
    return this.request("ResetConversation", req, cb)
  }

  /**
   * 创建参数变量
   */
  async CreateVariable(
    req: CreateVariableRequest,
    cb?: (error: string, rep: CreateVariableResponse) => void
  ): Promise<CreateVariableResponse> {
    return this.request("CreateVariable", req, cb)
  }

  /**
   * 获取插件列表
   */
  async DescribePluginSummaryList(
    req: DescribePluginSummaryListRequest,
    cb?: (error: string, rep: DescribePluginSummaryListResponse) => void
  ): Promise<DescribePluginSummaryListResponse> {
    return this.request("DescribePluginSummaryList", req, cb)
  }

  /**
   * 查询看板总览KPI卡片数据，通过resource_type区分资源看板与业务看板域，返回各域KPI指标列表
   */
  async DescribeMetricOverviewList(
    req: DescribeMetricOverviewListRequest,
    cb?: (error: string, rep: DescribeMetricOverviewListResponse) => void
  ): Promise<DescribeMetricOverviewListResponse> {
    return this.request("DescribeMetricOverviewList", req, cb)
  }

  /**
   * 获取会话列表
   */
  async DescribeConversationList(
    req: DescribeConversationListRequest,
    cb?: (error: string, rep: DescribeConversationListResponse) => void
  ): Promise<DescribeConversationListResponse> {
    return this.request("DescribeConversationList", req, cb)
  }

  /**
   * 编辑空间
   */
  async ModifySpace(
    req: ModifySpaceRequest,
    cb?: (error: string, rep: ModifySpaceResponse) => void
  ): Promise<ModifySpaceResponse> {
    return this.request("ModifySpace", req, cb)
  }

  /**
   * 提交自定义Skill至企业级共享审批（两段式：提交→审批→回调创建共享任务）
   */
  async CreateSkillShare(
    req: CreateSkillShareRequest,
    cb?: (error: string, rep: CreateSkillShareResponse) => void
  ): Promise<CreateSkillShareResponse> {
    return this.request("CreateSkillShare", req, cb)
  }

  /**
   * 收藏skill
   */
  async FavoriteSkill(
    req: FavoriteSkillRequest,
    cb?: (error: string, rep: FavoriteSkillResponse) => void
  ): Promise<FavoriteSkillResponse> {
    return this.request("FavoriteSkill", req, cb)
  }

  /**
   * 获取应用信息
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
  }

  /**
   * Skill修改
   */
  async ModifySkill(
    req: ModifySkillRequest,
    cb?: (error: string, rep: ModifySkillResponse) => void
  ): Promise<ModifySkillResponse> {
    return this.request("ModifySkill", req, cb)
  }

  /**
   * PauseAppTrigger
   */
  async PauseAppTrigger(
    req: PauseAppTriggerRequest,
    cb?: (error: string, rep: PauseAppTriggerResponse) => void
  ): Promise<PauseAppTriggerResponse> {
    return this.request("PauseAppTrigger", req, cb)
  }

  /**
   * 回滚发布
   */
  async RollbackRelease(
    req: RollbackReleaseRequest,
    cb?: (error: string, rep: RollbackReleaseResponse) => void
  ): Promise<RollbackReleaseResponse> {
    return this.request("RollbackRelease", req, cb)
  }

  /**
   * 查询 Agent 摘要信息列表
   */
  async DescribeAgentSummaryList(
    req: DescribeAgentSummaryListRequest,
    cb?: (error: string, rep: DescribeAgentSummaryListResponse) => void
  ): Promise<DescribeAgentSummaryListResponse> {
    return this.request("DescribeAgentSummaryList", req, cb)
  }

  /**
   * 修改会话信息
   */
  async ModifyConversation(
    req: ModifyConversationRequest,
    cb?: (error: string, rep: ModifyConversationResponse) => void
  ): Promise<ModifyConversationResponse> {
    return this.request("ModifyConversation", req, cb)
  }

  /**
   * 修改冲突问
   */
  async ModifyConflictQA(
    req: ModifyConflictQARequest,
    cb?: (error: string, rep: ModifyConflictQAResponse) => void
  ): Promise<ModifyConflictQAResponse> {
    return this.request("ModifyConflictQA", req, cb)
  }

  /**
   * DescribeAppTriggerInstance
   */
  async DescribeAppTriggerInstance(
    req: DescribeAppTriggerInstanceRequest,
    cb?: (error: string, rep: DescribeAppTriggerInstanceResponse) => void
  ): Promise<DescribeAppTriggerInstanceResponse> {
    return this.request("DescribeAppTriggerInstance", req, cb)
  }

  /**
   * 查询文档详情
   */
  async DescribeDoc(
    req: DescribeDocRequest,
    cb?: (error: string, rep: DescribeDocResponse) => void
  ): Promise<DescribeDocResponse> {
    return this.request("DescribeDoc", req, cb)
  }

  /**
   * 取消收藏skill
   */
  async UnfavoriteSkill(
    req: UnfavoriteSkillRequest,
    cb?: (error: string, rep: UnfavoriteSkillResponse) => void
  ): Promise<UnfavoriteSkillResponse> {
    return this.request("UnfavoriteSkill", req, cb)
  }

  /**
   * 校验标签下的标准词是否已存在
   */
  async CheckLabel(
    req: CheckLabelRequest,
    cb?: (error: string, rep: CheckLabelResponse) => void
  ): Promise<CheckLabelResponse> {
    return this.request("CheckLabel", req, cb)
  }

  /**
   * 修改指定消息记录分类的名称
   */
  async ModifyMsgRecordCategory(
    req: ModifyMsgRecordCategoryRequest,
    cb?: (error: string, rep: ModifyMsgRecordCategoryResponse) => void
  ): Promise<ModifyMsgRecordCategoryResponse> {
    return this.request("ModifyMsgRecordCategory", req, cb)
  }

  /**
   * 查询资源消耗明细，包含计费相关字段（消耗类型、消耗目标、消耗场景、套餐包及PU消耗等）
   */
  async DescribeConsumptionDetailList(
    req: DescribeConsumptionDetailListRequest,
    cb?: (error: string, rep: DescribeConsumptionDetailListResponse) => void
  ): Promise<DescribeConsumptionDetailListResponse> {
    return this.request("DescribeConsumptionDetailList", req, cb)
  }

  /**
   * 删除渠道（通过scene区分场景）
   */
  async DeleteChannel(
    req: DeleteChannelRequest,
    cb?: (error: string, rep: DeleteChannelResponse) => void
  ): Promise<DeleteChannelResponse> {
    return this.request("DeleteChannel", req, cb)
  }

  /**
   * 查询知识库详情
   */
  async DescribeKB(
    req: DescribeKBRequest,
    cb?: (error: string, rep: DescribeKBResponse) => void
  ): Promise<DescribeKBResponse> {
    return this.request("DescribeKB", req, cb)
  }

  /**
   * 取消收藏插件
   */
  async UnfavoritePlugin(
    req: UnfavoritePluginRequest,
    cb?: (error: string, rep: UnfavoritePluginResponse) => void
  ): Promise<UnfavoritePluginResponse> {
    return this.request("UnfavoritePlugin", req, cb)
  }

  /**
   * 查询 Agent 详情
   */
  async DescribeAgentDetail(
    req: DescribeAgentDetailRequest,
    cb?: (error: string, rep: DescribeAgentDetailResponse) => void
  ): Promise<DescribeAgentDetailResponse> {
    return this.request("DescribeAgentDetail", req, cb)
  }

  /**
   * 删除应用
   */
  async DeleteApp(
    req: DeleteAppRequest,
    cb?: (error: string, rep: DeleteAppResponse) => void
  ): Promise<DeleteAppResponse> {
    return this.request("DeleteApp", req, cb)
  }

  /**
   * 查询发布任务
   */
  async DescribeReleaseSummary(
    req: DescribeReleaseSummaryRequest,
    cb?: (error: string, rep: DescribeReleaseSummaryResponse) => void
  ): Promise<DescribeReleaseSummaryResponse> {
    return this.request("DescribeReleaseSummary", req, cb)
  }

  /**
   * ResumeAppTrigger
   */
  async ResumeAppTrigger(
    req: ResumeAppTriggerRequest,
    cb?: (error: string, rep: ResumeAppTriggerResponse) => void
  ): Promise<ResumeAppTriggerResponse> {
    return this.request("ResumeAppTrigger", req, cb)
  }

  /**
   * 复制应用
   */
  async CopyApp(
    req: CopyAppRequest,
    cb?: (error: string, rep: CopyAppResponse) => void
  ): Promise<CopyAppResponse> {
    return this.request("CopyApp", req, cb)
  }

  /**
   * 批量导入文档
   */
  async ImportDocList(
    req: ImportDocListRequest,
    cb?: (error: string, rep: ImportDocListResponse) => void
  ): Promise<ImportDocListResponse> {
    return this.request("ImportDocList", req, cb)
  }

  /**
   * 提交共享 Skill 下架审批（v2，两段式：提交→审批→回调下架共享 Skill） 鉴权：删除权 拒绝场景：未共享 / 上架审批中 / 下架审批中
   */
  async DeleteSkillShare(
    req: DeleteSkillShareRequest,
    cb?: (error: string, rep: DeleteSkillShareResponse) => void
  ): Promise<DeleteSkillShareResponse> {
    return this.request("DeleteSkillShare", req, cb)
  }

  /**
   * 复制 Agent（目前仅支持claw模式））
   */
  async CopyAgentFromApp(
    req: CopyAgentFromAppRequest,
    cb?: (error: string, rep: CopyAgentFromAppResponse) => void
  ): Promise<CopyAgentFromAppResponse> {
    return this.request("CopyAgentFromApp", req, cb)
  }

  /**
   * 获取应用下 Agent 的发布预览列表
   */
  async DescribeAgentReleasePreviewList(
    req: DescribeAgentReleasePreviewListRequest,
    cb?: (error: string, rep: DescribeAgentReleasePreviewListResponse) => void
  ): Promise<DescribeAgentReleasePreviewListResponse> {
    return this.request("DescribeAgentReleasePreviewList", req, cb)
  }

  /**
   * 创建空间
   */
  async CreateSpace(
    req: CreateSpaceRequest,
    cb?: (error: string, rep: CreateSpaceResponse) => void
  ): Promise<CreateSpaceResponse> {
    return this.request("CreateSpace", req, cb)
  }

  /**
   * 创建知识库
   */
  async CreateKB(
    req: CreateKBRequest,
    cb?: (error: string, rep: CreateKBResponse) => void
  ): Promise<CreateKBResponse> {
    return this.request("CreateKB", req, cb)
  }

  /**
   * 创建skill
   */
  async CreateSkill(
    req: CreateSkillRequest,
    cb?: (error: string, rep: CreateSkillResponse) => void
  ): Promise<CreateSkillResponse> {
    return this.request("CreateSkill", req, cb)
  }

  /**
   * 创建相似问生成任务
   */
  async CreateSimilarQuestion(
    req: CreateSimilarQuestionRequest,
    cb?: (error: string, rep: CreateSimilarQuestionResponse) => void
  ): Promise<CreateSimilarQuestionResponse> {
    return this.request("CreateSimilarQuestion", req, cb)
  }

  /**
   * 获取渠道列表（scene区分场景）
   */
  async DescribeChannelList(
    req: DescribeChannelListRequest,
    cb?: (error: string, rep: DescribeChannelListResponse) => void
  ): Promise<DescribeChannelListResponse> {
    return this.request("DescribeChannelList", req, cb)
  }

  /**
   * 创建 WebSocket Token
   */
  async CreateWebSocketToken(
    req: CreateWebSocketTokenRequest,
    cb?: (error: string, rep: CreateWebSocketTokenResponse) => void
  ): Promise<CreateWebSocketTokenResponse> {
    return this.request("CreateWebSocketToken", req, cb)
  }

  /**
   * 获取空间列表
   */
  async DescribeSpaceList(
    req: DescribeSpaceListRequest,
    cb?: (error: string, rep: DescribeSpaceListResponse) => void
  ): Promise<DescribeSpaceListResponse> {
    return this.request("DescribeSpaceList", req, cb)
  }

  /**
   * 查询 QA 详情
   */
  async DescribeQA(
    req: DescribeQARequest,
    cb?: (error: string, rep: DescribeQAResponse) => void
  ): Promise<DescribeQAResponse> {
    return this.request("DescribeQA", req, cb)
  }

  /**
   * 创建应用
   */
  async CreateApp(
    req: CreateAppRequest,
    cb?: (error: string, rep: CreateAppResponse) => void
  ): Promise<CreateAppResponse> {
    return this.request("CreateApp", req, cb)
  }

  /**
   * 修改单个文档
   */
  async ModifyDoc(
    req: ModifyDocRequest,
    cb?: (error: string, rep: ModifyDocResponse) => void
  ): Promise<ModifyDocResponse> {
    return this.request("ModifyDoc", req, cb)
  }

  /**
   * 创建 QA 生成任务
   */
  async CreateQAGenerationTask(
    req: CreateQAGenerationTaskRequest,
    cb?: (error: string, rep: CreateQAGenerationTaskResponse) => void
  ): Promise<CreateQAGenerationTaskResponse> {
    return this.request("CreateQAGenerationTask", req, cb)
  }

  /**
   * 获取插件详情
   */
  async CreatePlugin(
    req: CreatePluginRequest,
    cb?: (error: string, rep: CreatePluginResponse) => void
  ): Promise<CreatePluginResponse> {
    return this.request("CreatePlugin", req, cb)
  }

  /**
   * 删除Agent
   */
  async DeleteAgent(
    req: DeleteAgentRequest,
    cb?: (error: string, rep: DeleteAgentResponse) => void
  ): Promise<DeleteAgentResponse> {
    return this.request("DeleteAgent", req, cb)
  }

  /**
   * 批量删除标签
   */
  async DeleteLabelList(
    req: DeleteLabelListRequest,
    cb?: (error: string, rep: DeleteLabelListResponse) => void
  ): Promise<DeleteLabelListResponse> {
    return this.request("DeleteLabelList", req, cb)
  }

  /**
   * 修改分类
   */
  async ModifyCategory(
    req: ModifyCategoryRequest,
    cb?: (error: string, rep: ModifyCategoryResponse) => void
  ): Promise<ModifyCategoryResponse> {
    return this.request("ModifyCategory", req, cb)
  }

  /**
   * 创建标签
   */
  async CreateLabel(
    req: CreateLabelRequest,
    cb?: (error: string, rep: CreateLabelResponse) => void
  ): Promise<CreateLabelResponse> {
    return this.request("CreateLabel", req, cb)
  }

  /**
   * 删除空间
   */
  async DeleteSpace(
    req: DeleteSpaceRequest,
    cb?: (error: string, rep: DeleteSpaceResponse) => void
  ): Promise<DeleteSpaceResponse> {
    return this.request("DeleteSpace", req, cb)
  }

  /**
   * 查询文档摘要列表
   */
  async DescribeDocSummaryList(
    req: DescribeDocSummaryListRequest,
    cb?: (error: string, rep: DescribeDocSummaryListResponse) => void
  ): Promise<DescribeDocSummaryListResponse> {
    return this.request("DescribeDocSummaryList", req, cb)
  }

  /**
   * 查询分类列表
   */
  async DescribeCategoryList(
    req: DescribeCategoryListRequest,
    cb?: (error: string, rep: DescribeCategoryListResponse) => void
  ): Promise<DescribeCategoryListResponse> {
    return this.request("DescribeCategoryList", req, cb)
  }

  /**
   * 收藏插件
   */
  async FavoritePlugin(
    req: FavoritePluginRequest,
    cb?: (error: string, rep: FavoritePluginResponse) => void
  ): Promise<FavoritePluginResponse> {
    return this.request("FavoritePlugin", req, cb)
  }

  /**
   * 修改知识库
   */
  async ModifyKB(
    req: ModifyKBRequest,
    cb?: (error: string, rep: ModifyKBResponse) => void
  ): Promise<ModifyKBResponse> {
    return this.request("ModifyKB", req, cb)
  }

  /**
   * 查看操作日志列表
   */
  async DescribeAuditLogList(
    req: DescribeAuditLogListRequest,
    cb?: (error: string, rep: DescribeAuditLogListResponse) => void
  ): Promise<DescribeAuditLogListResponse> {
    return this.request("DescribeAuditLogList", req, cb)
  }

  /**
   * 获取参数变量
   */
  async DescribeVariable(
    req: DescribeVariableRequest,
    cb?: (error: string, rep: DescribeVariableResponse) => void
  ): Promise<DescribeVariableResponse> {
    return this.request("DescribeVariable", req, cb)
  }

  /**
   * 批量删除文档
   */
  async DeleteDocList(
    req: DeleteDocListRequest,
    cb?: (error: string, rep: DeleteDocListResponse) => void
  ): Promise<DeleteDocListResponse> {
    return this.request("DeleteDocList", req, cb)
  }

  /**
   * 获取审计日志元信息
   */
  async DescribeAuditLogMeta(
    req?: DescribeAuditLogMetaRequest,
    cb?: (error: string, rep: DescribeAuditLogMetaResponse) => void
  ): Promise<DescribeAuditLogMetaResponse> {
    return this.request("DescribeAuditLogMeta", req, cb)
  }

  /**
   * RunAppTriggerNow
   */
  async RunAppTriggerNow(
    req: RunAppTriggerNowRequest,
    cb?: (error: string, rep: RunAppTriggerNowResponse) => void
  ): Promise<RunAppTriggerNowResponse> {
    return this.request("RunAppTriggerNow", req, cb)
  }

  /**
   * 查询 QA 列表
   */
  async DescribeQASummaryList(
    req: DescribeQASummaryListRequest,
    cb?: (error: string, rep: DescribeQASummaryListResponse) => void
  ): Promise<DescribeQASummaryListResponse> {
    return this.request("DescribeQASummaryList", req, cb)
  }

  /**
   * 发布记录列表
   */
  async DescribeReleaseList(
    req: DescribeReleaseListRequest,
    cb?: (error: string, rep: DescribeReleaseListResponse) => void
  ): Promise<DescribeReleaseListResponse> {
    return this.request("DescribeReleaseList", req, cb)
  }

  /**
   * 创建Agent（目前仅支持claw模式）
   */
  async CreateAgent(
    req: CreateAgentRequest,
    cb?: (error: string, rep: CreateAgentResponse) => void
  ): Promise<CreateAgentResponse> {
    return this.request("CreateAgent", req, cb)
  }

  /**
   * 修改标签
   */
  async ModifyLabel(
    req: ModifyLabelRequest,
    cb?: (error: string, rep: ModifyLabelResponse) => void
  ): Promise<ModifyLabelResponse> {
    return this.request("ModifyLabel", req, cb)
  }

  /**
   * 批量修改 QA
   */
  async ModifyQAList(
    req: ModifyQAListRequest,
    cb?: (error: string, rep: ModifyQAListResponse) => void
  ): Promise<ModifyQAListResponse> {
    return this.request("ModifyQAList", req, cb)
  }

  /**
   * 创建工作空间凭证
   */
  async CreateWorkspaceCredential(
    req: CreateWorkspaceCredentialRequest,
    cb?: (error: string, rep: CreateWorkspaceCredentialResponse) => void
  ): Promise<CreateWorkspaceCredentialResponse> {
    return this.request("CreateWorkspaceCredential", req, cb)
  }

  /**
   * 查询冲突问列表
   */
  async DescribeConflictQASummaryList(
    req: DescribeConflictQASummaryListRequest,
    cb?: (error: string, rep: DescribeConflictQASummaryListResponse) => void
  ): Promise<DescribeConflictQASummaryListResponse> {
    return this.request("DescribeConflictQASummaryList", req, cb)
  }

  /**
   * DescribeAppTrigger
   */
  async DescribeAppTrigger(
    req: DescribeAppTriggerRequest,
    cb?: (error: string, rep: DescribeAppTriggerResponse) => void
  ): Promise<DescribeAppTriggerResponse> {
    return this.request("DescribeAppTrigger", req, cb)
  }

  /**
   * 删除自定义 Skill  鉴权：创建者 ∨ (编辑权限 ∧ 删除权限） 拒绝场景：非 Custom 类型 / 已共享 / 安全检测中 / 上架审批中 / 下架审批中
   */
  async DeleteSkill(
    req: DeleteSkillRequest,
    cb?: (error: string, rep: DeleteSkillResponse) => void
  ): Promise<DeleteSkillResponse> {
    return this.request("DeleteSkill", req, cb)
  }

  /**
   * 获取插件详情
   */
  async DescribePlugin(
    req: DescribePluginRequest,
    cb?: (error: string, rep: DescribePluginResponse) => void
  ): Promise<DescribePluginResponse> {
    return this.request("DescribePlugin", req, cb)
  }

  /**
   * 查询 Skill 列表
   */
  async DescribeSkillSummaryList(
    req: DescribeSkillSummaryListRequest,
    cb?: (error: string, rep: DescribeSkillSummaryListResponse) => void
  ): Promise<DescribeSkillSummaryListResponse> {
    return this.request("DescribeSkillSummaryList", req, cb)
  }

  /**
   * 知识检索
   */
  async SearchKnowledge(
    req: SearchKnowledgeRequest,
    cb?: (error: string, rep: SearchKnowledgeResponse) => void
  ): Promise<SearchKnowledgeResponse> {
    return this.request("SearchKnowledge", req, cb)
  }

  /**
   * 查询资源调用时序明细，支持模型和插件两类资源，按时间顺序返回每条调用记录的详细信息
   */
  async DescribeUsageDetailList(
    req: DescribeUsageDetailListRequest,
    cb?: (error: string, rep: DescribeUsageDetailListResponse) => void
  ): Promise<DescribeUsageDetailListResponse> {
    return this.request("DescribeUsageDetailList", req, cb)
  }

  /**
   * 查询并发超限明细，包含QPM/TPM超限与专属并发超限记录，返回超限发生时间、空间、应用、模型及请求内容
   */
  async DescribeConcurrencyLimitDetailList(
    req: DescribeConcurrencyLimitDetailListRequest,
    cb?: (error: string, rep: DescribeConcurrencyLimitDetailListResponse) => void
  ): Promise<DescribeConcurrencyLimitDetailListResponse> {
    return this.request("DescribeConcurrencyLimitDetailList", req, cb)
  }

  /**
   * 查看企业下的员工列表
   */
  async DescribeAccountList(
    req: DescribeAccountListRequest,
    cb?: (error: string, rep: DescribeAccountListResponse) => void
  ): Promise<DescribeAccountListResponse> {
    return this.request("DescribeAccountList", req, cb)
  }

  /**
   * 删除分类
   */
  async DeleteCategory(
    req: DeleteCategoryRequest,
    cb?: (error: string, rep: DeleteCategoryResponse) => void
  ): Promise<DeleteCategoryResponse> {
    return this.request("DeleteCategory", req, cb)
  }

  /**
   * 重试发布(发布暂停之后再次重新发布)
   */
  async RetryRelease(
    req: RetryReleaseRequest,
    cb?: (error: string, rep: RetryReleaseResponse) => void
  ): Promise<RetryReleaseResponse> {
    return this.request("RetryRelease", req, cb)
  }

  /**
   * ModifyAppTrigger
   */
  async ModifyAppTrigger(
    req: ModifyAppTriggerRequest,
    cb?: (error: string, rep: ModifyAppTriggerResponse) => void
  ): Promise<ModifyAppTriggerResponse> {
    return this.request("ModifyAppTrigger", req, cb)
  }

  /**
   * 修改单个 QA
   */
  async ModifyQA(
    req: ModifyQARequest,
    cb?: (error: string, rep: ModifyQAResponse) => void
  ): Promise<ModifyQAResponse> {
    return this.request("ModifyQA", req, cb)
  }

  /**
   * 获取系统变量
   */
  async DescribeSystemVariableList(
    req: DescribeSystemVariableListRequest,
    cb?: (error: string, rep: DescribeSystemVariableListResponse) => void
  ): Promise<DescribeSystemVariableListResponse> {
    return this.request("DescribeSystemVariableList", req, cb)
  }

  /**
   * 查看会话信息
   */
  async DescribeConversation(
    req: DescribeConversationRequest,
    cb?: (error: string, rep: DescribeConversationResponse) => void
  ): Promise<DescribeConversationResponse> {
    return this.request("DescribeConversation", req, cb)
  }

  /**
   * 创建一条消息记录分类，支持指定分类名称与父分类（ParentId 为 0 时表示一级分类）
   */
  async CreateMsgRecordCategory(
    req: CreateMsgRecordCategoryRequest,
    cb?: (error: string, rep: CreateMsgRecordCategoryResponse) => void
  ): Promise<CreateMsgRecordCategoryResponse> {
    return this.request("CreateMsgRecordCategory", req, cb)
  }

  /**
   * 查询某个 Skill 被引用的详情列表（按 SkillRefType 分组：OpenClaw / cloud agent / 企业助手 agent） 鉴权：同 DescribeSkillDetail（能看该 Skill 即可查）
   */
  async DescribeSkillReferenceList(
    req: DescribeSkillReferenceListRequest,
    cb?: (error: string, rep: DescribeSkillReferenceListResponse) => void
  ): Promise<DescribeSkillReferenceListResponse> {
    return this.request("DescribeSkillReferenceList", req, cb)
  }

  /**
   * 上架skill
   */
  async ReleaseSkill(
    req: ReleaseSkillRequest,
    cb?: (error: string, rep: ReleaseSkillResponse) => void
  ): Promise<ReleaseSkillResponse> {
    return this.request("ReleaseSkill", req, cb)
  }

  /**
   * 修改插件
   */
  async ModifyPlugin(
    req: ModifyPluginRequest,
    cb?: (error: string, rep: ModifyPluginResponse) => void
  ): Promise<ModifyPluginResponse> {
    return this.request("ModifyPlugin", req, cb)
  }

  /**
   * 异步导出 QA
   */
  async ExportQA(
    req: ExportQARequest,
    cb?: (error: string, rep: ExportQAResponse) => void
  ): Promise<ExportQAResponse> {
    return this.request("ExportQA", req, cb)
  }

  /**
   * 修改应用
   */
  async ModifyApp(
    req: ModifyAppRequest,
    cb?: (error: string, rep: ModifyAppResponse) => void
  ): Promise<ModifyAppResponse> {
    return this.request("ModifyApp", req, cb)
  }

  /**
   * DescribeAppTriggerSummaryList
   */
  async DescribeAppTriggerSummaryList(
    req: DescribeAppTriggerSummaryListRequest,
    cb?: (error: string, rep: DescribeAppTriggerSummaryListResponse) => void
  ): Promise<DescribeAppTriggerSummaryListResponse> {
    return this.request("DescribeAppTriggerSummaryList", req, cb)
  }

  /**
   * 查询冲突问详情
   */
  async DescribeConflictQA(
    req: DescribeConflictQARequest,
    cb?: (error: string, rep: DescribeConflictQAResponse) => void
  ): Promise<DescribeConflictQAResponse> {
    return this.request("DescribeConflictQA", req, cb)
  }

  /**
   * 批量创建 QA
   */
  async CreateQAList(
    req: CreateQAListRequest,
    cb?: (error: string, rep: CreateQAListResponse) => void
  ): Promise<CreateQAListResponse> {
    return this.request("CreateQAList", req, cb)
  }

  /**
   * 查询模型列表
   */
  async DescribeModelList(
    req: DescribeModelListRequest,
    cb?: (error: string, rep: DescribeModelListResponse) => void
  ): Promise<DescribeModelListResponse> {
    return this.request("DescribeModelList", req, cb)
  }

  /**
   * 新建会话
   */
  async CreateConversation(
    req: CreateConversationRequest,
    cb?: (error: string, rep: CreateConversationResponse) => void
  ): Promise<CreateConversationResponse> {
    return this.request("CreateConversation", req, cb)
  }

  /**
   * 创建分类
   */
  async CreateCategory(
    req: CreateCategoryRequest,
    cb?: (error: string, rep: CreateCategoryResponse) => void
  ): Promise<CreateCategoryResponse> {
    return this.request("CreateCategory", req, cb)
  }

  /**
   * 修改插件
   */
  async DeletePlugin(
    req: DeletePluginRequest,
    cb?: (error: string, rep: DeletePluginResponse) => void
  ): Promise<DeletePluginResponse> {
    return this.request("DeletePlugin", req, cb)
  }

  /**
   * 批量删除 QA
   */
  async DeleteQAList(
    req: DeleteQAListRequest,
    cb?: (error: string, rep: DeleteQAListResponse) => void
  ): Promise<DeleteQAListResponse> {
    return this.request("DeleteQAList", req, cb)
  }

  /**
   * 查询应用的消息记录分类树，返回分类及子分类、各分类下记录数量与操作权限
   */
  async DescribeMsgRecordCategoryList(
    req: DescribeMsgRecordCategoryListRequest,
    cb?: (error: string, rep: DescribeMsgRecordCategoryListResponse) => void
  ): Promise<DescribeMsgRecordCategoryListResponse> {
    return this.request("DescribeMsgRecordCategoryList", req, cb)
  }

  /**
   * 删除参数变量
   */
  async DeleteVariable(
    req: DeleteVariableRequest,
    cb?: (error: string, rep: DeleteVariableResponse) => void
  ): Promise<DeleteVariableResponse> {
    return this.request("DeleteVariable", req, cb)
  }

  /**
   * 查询标签列表
   */
  async DescribeLabelSummaryList(
    req: DescribeLabelSummaryListRequest,
    cb?: (error: string, rep: DescribeLabelSummaryListResponse) => void
  ): Promise<DescribeLabelSummaryListResponse> {
    return this.request("DescribeLabelSummaryList", req, cb)
  }

  /**
   * 删除知识库
   */
  async DeleteKB(
    req: DeleteKBRequest,
    cb?: (error: string, rep: DeleteKBResponse) => void
  ): Promise<DeleteKBResponse> {
    return this.request("DeleteKB", req, cb)
  }

  /**
   * 获取参数变量列表
   */
  async DescribeVariableList(
    req: DescribeVariableListRequest,
    cb?: (error: string, rep: DescribeVariableListResponse) => void
  ): Promise<DescribeVariableListResponse> {
    return this.request("DescribeVariableList", req, cb)
  }

  /**
   * 更新参数变量
   */
  async ModifyVariable(
    req: ModifyVariableRequest,
    cb?: (error: string, rep: ModifyVariableResponse) => void
  ): Promise<ModifyVariableResponse> {
    return this.request("ModifyVariable", req, cb)
  }

  /**
   * 批量修改文档
   */
  async ModifyDocList(
    req: ModifyDocListRequest,
    cb?: (error: string, rep: ModifyDocListResponse) => void
  ): Promise<ModifyDocListResponse> {
    return this.request("ModifyDocList", req, cb)
  }

  /**
   * 查询资源用量聚合明细，支持模型、插件、平台三类资源，按空间/应用维度聚合展示调用次数、Token消耗等指标
   */
  async DescribeUsageSummaryList(
    req: DescribeUsageSummaryListRequest,
    cb?: (error: string, rep: DescribeUsageSummaryListResponse) => void
  ): Promise<DescribeUsageSummaryListResponse> {
    return this.request("DescribeUsageSummaryList", req, cb)
  }

  /**
   * 获取会话历史消息
   */
  async DescribeConversationMessageList(
    req: DescribeConversationMessageListRequest,
    cb?: (error: string, rep: DescribeConversationMessageListResponse) => void
  ): Promise<DescribeConversationMessageListResponse> {
    return this.request("DescribeConversationMessageList", req, cb)
  }

  /**
   * 查询 Skill 分类列表
   */
  async DescribeSkillCategoryList(
    req?: DescribeSkillCategoryListRequest,
    cb?: (error: string, rep: DescribeSkillCategoryListResponse) => void
  ): Promise<DescribeSkillCategoryListResponse> {
    return this.request("DescribeSkillCategoryList", req, cb)
  }

  /**
   * 拉取最新发布信息(包含发布时间、状态、渠道)
   */
  async DescribeLatestRelease(
    req: DescribeLatestReleaseRequest,
    cb?: (error: string, rep: DescribeLatestReleaseResponse) => void
  ): Promise<DescribeLatestReleaseResponse> {
    return this.request("DescribeLatestRelease", req, cb)
  }

  /**
   * 删除会话
   */
  async DeleteConversation(
    req: DeleteConversationRequest,
    cb?: (error: string, rep: DeleteConversationResponse) => void
  ): Promise<DeleteConversationResponse> {
    return this.request("DeleteConversation", req, cb)
  }
}
