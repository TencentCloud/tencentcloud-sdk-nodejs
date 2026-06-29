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
  ConversationContent,
  CamAuthConfig,
  ModelParameter,
  RequestParam,
  AgentRelease,
  AgentToolInputParameter,
  DescribeVariableListResponse,
  SkillClassification,
  ModifySpaceRequest,
  DescribeReleaseListRequest,
  GenerateModel,
  AgentAdvancedConfig,
  SkillShare,
  AppShareWhitelistItem,
  ReleaseSummary,
  CreateWebSocketTokenRequest,
  IntentAchievementInfo,
  RollbackReleaseRequest,
  ModelProperty,
  DescribeAgentReleasePreviewListRequest,
  DescribeModelListResponse,
  AppModelConfig,
  CreateSpaceRequest,
  AgentModelConfig,
  SearchResourceStatusInfo,
  Plugin,
  ApiKeyAuthConfig,
  CreateConversationResponse,
  DescribePluginResponse,
  DescribeConversationRequest,
  Variable,
  Conversation,
  AuthConfig,
  AppShareAccessControl,
  PluginOperation,
  AppSharedKbInfo,
  ModifyAppResponse,
  ResetConversationResponse,
  PromptRewriteModel,
  DeleteAppResponse,
  DescribeConversationListResponse,
  CreateAppResponse,
  DescribeAppSummaryListRequest,
  AppSummary,
  MultiAgentConfig,
  CreateWebSocketTokenResponse,
  DescribeAgentDetailRequest,
  DescribePluginSummaryListRequest,
  ModelDeveloperBasic,
  DescribeConversationMessageListResponse,
  AppExperienceConfig,
  RollbackReleaseResponse,
  DescribeSkillCategoryListResponse,
  DescribeReleaseSummaryRequest,
  AppWorkflowConfig,
  ConversationAgentTask,
  DeleteVariableResponse,
  PluginParam,
  CreateReleaseRequest,
  CreateWorkspaceCredentialRequest,
  ApiPluginConfig,
  DescribeConversationListRequest,
  DescribeVariableResponse,
  CodeToolConfig,
  CreateAgentRequest,
  ConversationExperience,
  DescribeSystemVariableListResponse,
  PluginUserState,
  AIOptimizeModel,
  DuplexBilling,
  ModifySpaceResponse,
  DescribePluginSummaryListResponse,
  MultiModalUnderstandingModel,
  SkillAnalysisInfo,
  SupportedFileType,
  AgentPlugin,
  AppSubStatusInfo,
  CreateConversationRequest,
  DescribeVariableListRequest,
  ConversationWorkspace,
  BillingAttribute,
  AppWebSearchConfig,
  AgentSpec,
  ModifyConversationResponse,
  ClawAgentConfig,
  ConversationQuoteInfo,
  AppSecretInfo,
  AgentDetail,
  ThinkModel,
  DescribeSpaceListResponse,
  ReleaseRecord,
  CreateAppRequest,
  App,
  AppAuxiliaryInfo,
  AgentToolBasicConfig,
  PluginStatistics,
  AppStatusInfo,
  ComplexBilling,
  FileParseModel,
  AppAppeal,
  DescribeAgentReleasePreviewListResponse,
  DeleteConversationResponse,
  AppToolConfig,
  ResetConversationRequest,
  ModifyAgentResponse,
  DescribeLatestReleaseResponse,
  SkillNotice,
  ResponseParam,
  MultiModalQAModel,
  ToolBilling,
  SingleWorkflowConfig,
  BasicBilling,
  DescribeAppRequest,
  AgentToolConfig,
  ModifyVariableResponse,
  AgentSkillConfig,
  ModifyAgentRequest,
  DescribeModelListRequest,
  DescribeLatestReleaseRequest,
  AgentPluginConfig,
  PluginSummary,
  AgentProfile,
  OAuthConfig,
  CreateWorkspaceCredentialResponse,
  ModelParams,
  RetryReleaseResponse,
  AgentInput,
  AICallConfig,
  AgentReleasePreview,
  ToolConfig,
  AgentToolOutputParameter,
  ModelLimit,
  DescribeReleaseSummaryResponse,
  AgentUserInputValue,
  DescribeAgentDetailResponse,
  SkillProfile,
  CreateVariableResponse,
  Filter,
  ApiToolConfig,
  ToolExample,
  ConversationReference,
  AppShareURLInfo,
  ModelBasic,
  CreateReleaseResponse,
  ModifyAppRequest,
  RetryReleaseRequest,
  CreateSpaceResponse,
  AppealingStatus,
  ModelDetailInfo,
  ModifyVariableRequest,
  CreateVariableRequest,
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
  AppPluginConfig,
  ModelStatus,
  AppMemoryConfig,
  ModifyConversationRequest,
  RoleConfig,
  CreateAgentResponse,
  ClawAgentCustomConfig,
  AgentSkill,
  DeleteConversationRequest,
  PluginConfig,
  ModelBadge,
  DescribeAppResponse,
  DeleteAppRequest,
  DescribeSkillSummaryListRequest,
  DescribeAppSummaryListResponse,
  CopyAppResponse,
  AgentPluginParameter,
  CopyAppRequest,
  AgentSystemVariable,
  AppOperation,
  PluginProfile,
  DeleteSpaceRequest,
  SkillCategory,
  FieldMask,
  DescribeReleaseListResponse,
  ComplexBillingItem,
  BackgroundImage,
  DescribeVariableRequest,
  DescribeSkillCategoryListRequest,
  Model,
  DescribeSkillSummaryListResponse,
  DescribeConversationMessageListRequest,
  DigitalHumanConfig,
  ModelProviderBasic,
  ConversationMessage,
  DescribeConversationResponse,
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
   * 获取参数变量
   */
  async DescribeVariable(
    req: DescribeVariableRequest,
    cb?: (error: string, rep: DescribeVariableResponse) => void
  ): Promise<DescribeVariableResponse> {
    return this.request("DescribeVariable", req, cb)
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
   * 修改Agent配置信息
   */
  async ModifyAgent(
    req: ModifyAgentRequest,
    cb?: (error: string, rep: ModifyAgentResponse) => void
  ): Promise<ModifyAgentResponse> {
    return this.request("ModifyAgent", req, cb)
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
   * 重置会话
   */
  async ResetConversation(
    req: ResetConversationRequest,
    cb?: (error: string, rep: ResetConversationResponse) => void
  ): Promise<ResetConversationResponse> {
    return this.request("ResetConversation", req, cb)
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
   * 编辑空间
   */
  async ModifySpace(
    req: ModifySpaceRequest,
    cb?: (error: string, rep: ModifySpaceResponse) => void
  ): Promise<ModifySpaceResponse> {
    return this.request("ModifySpace", req, cb)
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
   * 获取应用信息
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
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
   * 重试发布(发布暂停之后再次重新发布)
   */
  async RetryRelease(
    req: RetryReleaseRequest,
    cb?: (error: string, rep: RetryReleaseResponse) => void
  ): Promise<RetryReleaseResponse> {
    return this.request("RetryRelease", req, cb)
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
