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
  MCPToolConfig,
  DeleteAgentRequest,
  ConversationContent,
  CamAuthConfig,
  FavoriteSkillRequest,
  DescribeSkillReferenceListResponse,
  AgentRelease,
  AgentToolInputParameter,
  UnfavoritePluginResponse,
  DescribeVariableListResponse,
  SkillClassification,
  ModifySpaceRequest,
  DeleteSkillShareRequest,
  GenerateModel,
  DescribeSkillDetailResponse,
  AgentAdvancedConfig,
  SkillShare,
  AppShareWhitelistItem,
  ModifyVariableRequest,
  ReleaseSummary,
  CreateWebSocketTokenRequest,
  IntentAchievementInfo,
  RollbackReleaseRequest,
  DeleteSkillResponse,
  ModelProperty,
  DescribeAgentReleasePreviewListRequest,
  DescribeModelListResponse,
  UnfavoriteSkillResponse,
  AppModelConfig,
  CreateSpaceRequest,
  AgentModelConfig,
  SearchResourceStatusInfo,
  Plugin,
  ApiKeyAuthConfig,
  CreateConversationResponse,
  CopyAgentFromAppRequest,
  DescribeConversationRequest,
  Variable,
  Conversation,
  AuthConfig,
  AppShareAccessControl,
  PluginOperation,
  AppSharedKbInfo,
  ModifyAppResponse,
  ResetConversationResponse,
  ToolExample,
  DescribeAccountListRequest,
  PromptRewriteModel,
  ModifyAppRequest,
  DescribeAppRequest,
  DeleteAppResponse,
  DescribeConversationListResponse,
  CreateAppResponse,
  DescribeAppSummaryListRequest,
  AppSummary,
  DescribeReleaseListRequest,
  CreateWebSocketTokenResponse,
  AuditLogMetaField,
  DescribeAgentDetailRequest,
  DescribePluginSummaryListRequest,
  SkillReferenceSummary,
  ModelDeveloperBasic,
  DescribeConversationMessageListResponse,
  AppExperienceConfig,
  RollbackReleaseResponse,
  DescribeSkillCategoryListResponse,
  DescribeReleaseSummaryRequest,
  AppWorkflowConfig,
  ConversationAgentTask,
  ModifyPluginRequest,
  DeleteVariableResponse,
  PluginParam,
  CreateReleaseRequest,
  CreateWorkspaceCredentialRequest,
  DeleteSkillRequest,
  ApiPluginConfig,
  DescribeConversationListRequest,
  DescribeVariableResponse,
  CodeToolConfig,
  CreateAgentRequest,
  MultiAgentConfig,
  ConversationExperience,
  ClawAgentAgentTeamConfig,
  DescribeSkillReferenceListRequest,
  DeletePluginRequest,
  AIOptimizeModel,
  DuplexBilling,
  ModelParameter,
  ModifySpaceResponse,
  SkillDetail,
  DescribePluginSummaryListResponse,
  MultiModalUnderstandingModel,
  SkillAnalysisInfo,
  SupportedFileType,
  AgentPlugin,
  AppSubStatusInfo,
  CorpShareConfig,
  CreateConversationRequest,
  DescribeVariableListRequest,
  ConversationWorkspace,
  BillingAttribute,
  SkillReferenceGroup,
  AppWebSearchConfig,
  AgentSpec,
  ModifyConversationResponse,
  ClawAgentConfig,
  ModelLimit,
  ConversationQuoteInfo,
  AppSecretInfo,
  AgentDetail,
  ThinkModel,
  DeleteAgentResponse,
  DescribeSpaceListResponse,
  ReleaseRecord,
  CreateAppRequest,
  App,
  AppAuxiliaryInfo,
  ReleaseSkillRequest,
  AgentToolBasicConfig,
  PluginStatistics,
  AppStatusInfo,
  ComplexBilling,
  FileParseModel,
  AppAppeal,
  DescribeAgentReleasePreviewListResponse,
  DeleteConversationResponse,
  DescribeAuditLogMetaResponse,
  DescribeVariableRequest,
  AppToolConfig,
  ResetConversationRequest,
  ModifyAgentResponse,
  DescribeLatestReleaseResponse,
  SkillNotice,
  ResponseParam,
  MultiModalQAModel,
  FavoriteSkillResponse,
  ToolBilling,
  SingleWorkflowConfig,
  BasicBilling,
  DeleteSkillShareResponse,
  AgentToolConfig,
  CreatePluginResponse,
  ModifyVariableResponse,
  AgentSkillConfig,
  ModifyAgentRequest,
  DescribeModelListRequest,
  DescribeLatestReleaseRequest,
  AgentPluginConfig,
  PluginSummary,
  CreatePluginRequest,
  AgentProfile,
  OAuthConfig,
  CopyAgentFromAppResponse,
  CreateWorkspaceCredentialResponse,
  ModelParams,
  RetryReleaseResponse,
  AgentInput,
  AICallConfig,
  AgentReleasePreview,
  ToolConfig,
  AgentToolOutputParameter,
  DescribeAccountListResponse,
  CreateSkillShareResponse,
  DescribeReleaseSummaryResponse,
  AgentSummary,
  AgentUserInputValue,
  DescribeAgentDetailResponse,
  SkillProfile,
  CreateVariableResponse,
  Filter,
  ApiToolConfig,
  ModifySkillResponse,
  ConversationReference,
  AppShareURLInfo,
  ModelBasic,
  ModifyPluginResponse,
  CreateReleaseResponse,
  FavoritePluginResponse,
  UnfavoritePluginRequest,
  ModifySkillRequest,
  RetryReleaseRequest,
  CreateSpaceResponse,
  AppealingStatus,
  ModelDetailInfo,
  CreateSkillShareRequest,
  DeletePluginResponse,
  CreateVariableRequest,
  CreateSkillResponse,
  DescribeAuditLogListRequest,
  VoiceConfig,
  MCPPluginConfig,
  DescribePluginRequest,
  DescribeSystemVariableListRequest,
  AppConfig,
  SystemVariable,
  AppGreetingConfig,
  InputBoxConfig,
  SkillSummary,
  SpecialStatusInfo,
  Space,
  AppMetadata,
  AgentCollaborationConfig,
  DeleteVariableRequest,
  ReleaseSkillResponse,
  AccountInfo,
  AppPluginConfig,
  ModelStatus,
  CreateSkillRequest,
  AppMemoryConfig,
  ModifyConversationRequest,
  RoleConfig,
  CreateAgentResponse,
  ClawAgentCustomConfig,
  DescribeAuditLogListResponse,
  AgentSkill,
  DeleteConversationRequest,
  PluginConfig,
  ModelBadge,
  DescribeSystemVariableListResponse,
  DescribeAppResponse,
  DescribeAuditLogMetaRequest,
  DeleteAppRequest,
  DescribeSkillSummaryListRequest,
  DescribeAppSummaryListResponse,
  ClawAgentLongMemoryConfig,
  FavoritePluginRequest,
  CopyAppResponse,
  AgentPluginParameter,
  CopyAppRequest,
  AgentSystemVariable,
  AppOperation,
  PluginProfile,
  DeleteSpaceRequest,
  DescribeAgentSummaryListRequest,
  SkillCategory,
  DescribePluginResponse,
  DescribeReleaseListResponse,
  ComplexBillingItem,
  BackgroundImage,
  DescribeSkillDetailRequest,
  DescribeSkillCategoryListRequest,
  Model,
  AuditLog,
  DescribeSkillSummaryListResponse,
  DescribeConversationMessageListRequest,
  DigitalHumanConfig,
  ModelProviderBasic,
  UnfavoriteSkillRequest,
  ConversationMessage,
  RequestParam,
  DescribeConversationResponse,
  FieldMask,
  DescribeAgentSummaryListResponse,
  PluginUserState,
  AppAdvancedConf,
  DescribeSpaceListRequest,
  SkillVersion,
  AgentTool,
  AppModeConfig,
  Tool,
  DeleteSpaceResponse,
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
   * 修改Agent配置信息
   */
  async ModifyAgent(
    req: ModifyAgentRequest,
    cb?: (error: string, rep: ModifyAgentResponse) => void
  ): Promise<ModifyAgentResponse> {
    return this.request("ModifyAgent", req, cb)
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
   * 获取空间列表
   */
  async DescribeSpaceList(
    req: DescribeSpaceListRequest,
    cb?: (error: string, rep: DescribeSpaceListResponse) => void
  ): Promise<DescribeSpaceListResponse> {
    return this.request("DescribeSpaceList", req, cb)
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
   * 重置会话
   */
  async ResetConversation(
    req: ResetConversationRequest,
    cb?: (error: string, rep: ResetConversationResponse) => void
  ): Promise<ResetConversationResponse> {
    return this.request("ResetConversation", req, cb)
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
   * 修改会话信息
   */
  async ModifyConversation(
    req: ModifyConversationRequest,
    cb?: (error: string, rep: ModifyConversationResponse) => void
  ): Promise<ModifyConversationResponse> {
    return this.request("ModifyConversation", req, cb)
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
   * 查看会话信息
   */
  async DescribeConversation(
    req: DescribeConversationRequest,
    cb?: (error: string, rep: DescribeConversationResponse) => void
  ): Promise<DescribeConversationResponse> {
    return this.request("DescribeConversation", req, cb)
  }

  /**
   * 创建Agent
   */
  async CopyAgentFromApp(
    req: CopyAgentFromAppRequest,
    cb?: (error: string, rep: CopyAgentFromAppResponse) => void
  ): Promise<CopyAgentFromAppResponse> {
    return this.request("CopyAgentFromApp", req, cb)
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
   * 取消收藏skill
   */
  async UnfavoriteSkill(
    req: UnfavoriteSkillRequest,
    cb?: (error: string, rep: UnfavoriteSkillResponse) => void
  ): Promise<UnfavoriteSkillResponse> {
    return this.request("UnfavoriteSkill", req, cb)
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
   * 查看操作日志列表
   */
  async DescribeAuditLogList(
    req: DescribeAuditLogListRequest,
    cb?: (error: string, rep: DescribeAuditLogListResponse) => void
  ): Promise<DescribeAuditLogListResponse> {
    return this.request("DescribeAuditLogList", req, cb)
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
   * 新增发布任务
   */
  async CreateRelease(
    req: CreateReleaseRequest,
    cb?: (error: string, rep: CreateReleaseResponse) => void
  ): Promise<CreateReleaseResponse> {
    return this.request("CreateRelease", req, cb)
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
   * 获取应用信息
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
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
   * 编辑空间
   */
  async ModifySpace(
    req: ModifySpaceRequest,
    cb?: (error: string, rep: ModifySpaceResponse) => void
  ): Promise<ModifySpaceResponse> {
    return this.request("ModifySpace", req, cb)
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
   * 查询模型列表
   */
  async DescribeModelList(
    req: DescribeModelListRequest,
    cb?: (error: string, rep: DescribeModelListResponse) => void
  ): Promise<DescribeModelListResponse> {
    return this.request("DescribeModelList", req, cb)
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
   * 发布记录列表
   */
  async DescribeReleaseList(
    req: DescribeReleaseListRequest,
    cb?: (error: string, rep: DescribeReleaseListResponse) => void
  ): Promise<DescribeReleaseListResponse> {
    return this.request("DescribeReleaseList", req, cb)
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
   * 创建Agent
   */
  async CreateAgent(
    req: CreateAgentRequest,
    cb?: (error: string, rep: CreateAgentResponse) => void
  ): Promise<CreateAgentResponse> {
    return this.request("CreateAgent", req, cb)
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
   * 查询发布任务
   */
  async DescribeReleaseSummary(
    req: DescribeReleaseSummaryRequest,
    cb?: (error: string, rep: DescribeReleaseSummaryResponse) => void
  ): Promise<DescribeReleaseSummaryResponse> {
    return this.request("DescribeReleaseSummary", req, cb)
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
   * 修改插件
   */
  async DeletePlugin(
    req: DeletePluginRequest,
    cb?: (error: string, rep: DeletePluginResponse) => void
  ): Promise<DeletePluginResponse> {
    return this.request("DeletePlugin", req, cb)
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
   * 删除参数变量
   */
  async DeleteVariable(
    req: DeleteVariableRequest,
    cb?: (error: string, rep: DeleteVariableResponse) => void
  ): Promise<DeleteVariableResponse> {
    return this.request("DeleteVariable", req, cb)
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
   * 创建skill
   */
  async CreateSkill(
    req: CreateSkillRequest,
    cb?: (error: string, rep: CreateSkillResponse) => void
  ): Promise<CreateSkillResponse> {
    return this.request("CreateSkill", req, cb)
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
   * 创建 WebSocket Token
   */
  async CreateWebSocketToken(
    req: CreateWebSocketTokenRequest,
    cb?: (error: string, rep: CreateWebSocketTokenResponse) => void
  ): Promise<CreateWebSocketTokenResponse> {
    return this.request("CreateWebSocketToken", req, cb)
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
   * 更新参数变量
   */
  async ModifyVariable(
    req: ModifyVariableRequest,
    cb?: (error: string, rep: ModifyVariableResponse) => void
  ): Promise<ModifyVariableResponse> {
    return this.request("ModifyVariable", req, cb)
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
   * 查看企业下的员工列表
   */
  async DescribeAccountList(
    req: DescribeAccountListRequest,
    cb?: (error: string, rep: DescribeAccountListResponse) => void
  ): Promise<DescribeAccountListResponse> {
    return this.request("DescribeAccountList", req, cb)
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
   * 查询 Skill 列表
   */
  async DescribeSkillSummaryList(
    req: DescribeSkillSummaryListRequest,
    cb?: (error: string, rep: DescribeSkillSummaryListResponse) => void
  ): Promise<DescribeSkillSummaryListResponse> {
    return this.request("DescribeSkillSummaryList", req, cb)
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
   * 获取审计日志元信息
   */
  async DescribeAuditLogMeta(
    req?: DescribeAuditLogMetaRequest,
    cb?: (error: string, rep: DescribeAuditLogMetaResponse) => void
  ): Promise<DescribeAuditLogMetaResponse> {
    return this.request("DescribeAuditLogMeta", req, cb)
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
   * 创建应用
   */
  async CreateApp(
    req: CreateAppRequest,
    cb?: (error: string, rep: CreateAppResponse) => void
  ): Promise<CreateAppResponse> {
    return this.request("CreateApp", req, cb)
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
   * 回滚发布
   */
  async RollbackRelease(
    req: RollbackReleaseRequest,
    cb?: (error: string, rep: RollbackReleaseResponse) => void
  ): Promise<RollbackReleaseResponse> {
    return this.request("RollbackRelease", req, cb)
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
   * 重试发布(发布暂停之后再次重新发布)
   */
  async RetryRelease(
    req: RetryReleaseRequest,
    cb?: (error: string, rep: RetryReleaseResponse) => void
  ): Promise<RetryReleaseResponse> {
    return this.request("RetryRelease", req, cb)
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
   * 获取会话历史消息
   */
  async DescribeConversationMessageList(
    req: DescribeConversationMessageListRequest,
    cb?: (error: string, rep: DescribeConversationMessageListResponse) => void
  ): Promise<DescribeConversationMessageListResponse> {
    return this.request("DescribeConversationMessageList", req, cb)
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
   * 获取参数变量
   */
  async DescribeVariable(
    req: DescribeVariableRequest,
    cb?: (error: string, rep: DescribeVariableResponse) => void
  ): Promise<DescribeVariableResponse> {
    return this.request("DescribeVariable", req, cb)
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
