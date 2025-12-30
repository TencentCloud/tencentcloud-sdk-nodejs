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
  GetWsTokenResponse,
  GetAppSecretRequest,
  ExtraInfo,
  ListSelectDocResponse,
  DeleteDocRequest,
  AgentAdvancedConfig,
  WorkflowInfo,
  DocReference,
  GetAppSecretResponse,
  UploadAttributeLabelResponse,
  CreateSharedKnowledgeRequest,
  AttrLabelRefer,
  CustomVariable,
  KnowledgeQaAgent,
  AttrLabel,
  ReleaseDoc,
  DescribeKnowledgeUsageResponse,
  DeleteSharedKnowledgeResponse,
  ListUnsatisfiedReplyRequest,
  DeleteQARequest,
  CreateDocCateRequest,
  ListRejectedQuestionPreviewResponse,
  DeleteAttributeLabelRequest,
  DescribeRobotBizIDByAppKeyResponse,
  ListDocCateRequest,
  DescribeDocResponse,
  Label,
  DeleteVarResponse,
  ListQACateResponse,
  CreateSharedKnowledgeResponse,
  QAList,
  AttributeLabel,
  AgentToolInfo,
  RenameDocRequest,
  StopWorkflowRunResponse,
  TaskFlowInfo,
  GenerateQAResponse,
  AgentInputSystemVariable,
  ClarificationConfig,
  SaveDocRequest,
  ListSharedKnowledgeResponse,
  DescribeAttributeLabelResponse,
  ModifyAttributeLabelResponse,
  KnowledgeQaSingleWorkflow,
  CallbackWorkflowToolNodeRequest,
  RetryDocParseResponse,
  DeleteAgentResponse,
  GroupQAResponse,
  RetryReleaseRequest,
  AppConfig,
  ContentReference,
  AgentToolReqParam,
  QaReference,
  AttrLabelDetail,
  QAQuery,
  DescribeKnowledgeUsageRequest,
  DeleteSharedKnowledgeRequest,
  TaskParams,
  ListDocItem,
  Stat,
  StatisticInfo,
  CreateAttributeLabelRequest,
  ListAppResponse,
  ValueInfo,
  RejectedQuestion,
  ExportQAListRequest,
  Procedure,
  CreateReleaseResponse,
  KnowledgeDetail,
  FileInfoContent,
  GenerateQARequest,
  ListReferShareKnowledgeRequest,
  ListAttributeLabelRequest,
  AgentOutputConfig,
  AgentReference,
  DeleteDocResponse,
  DescribeSegmentsResponse,
  UploadAttributeLabelRequest,
  DescribeAppAgentListRequest,
  CreateQAResponse,
  BackgroundImageConfig,
  DescribeReleaseInfoResponse,
  ModifyRejectedQuestionRequest,
  DescribeWorkflowRunResponse,
  OptionCardIndex,
  ListReleaseDocPreviewRequest,
  AgentPluginHeader,
  DescribeStorageCredentialRequest,
  SearchStrategy,
  OutputWidgetConfig,
  ListReleaseResponse,
  ListModelResponse,
  DocFilterFlag,
  CreateVarResponse,
  CreateQACateRequest,
  ShareKnowledgeBase,
  HistorySummary,
  DescribeSearchStatsGraphRequest,
  RateMsgRecordResponse,
  DescribeReferRequest,
  KnowledgeWorkflow,
  ReferShareKnowledgeRequest,
  GetAppKnowledgeCountRequest,
  CreateWorkflowRunResponse,
  GetAnswerTypeDataCountRequest,
  ListQaItem,
  ListUnsatisfiedReplyResponse,
  Widget,
  CreateWorkflowRunRequest,
  DescribeQARequest,
  WidgetParam,
  WebSearchReference,
  ListQARequest,
  KnowledgeCapacityPieGraphDetail,
  ModelParameter,
  InvokeAPI,
  AgentMCPServerInfo,
  ModifyAppResponse,
  IgnoreUnsatisfiedReplyRequest,
  ListReleaseConfigPreviewResponse,
  DescribeReleaseResponse,
  AgentKnowledgeFilterTag,
  ApiVarAttrInfo,
  AgentThought,
  CheckAttributeLabelReferRequest,
  AgentKnowledge,
  UpdateVarResponse,
  ListWorkflowRunsRequest,
  ListReleaseDocPreviewResponse,
  TaskFlowSummary,
  DuplicateFileHandle,
  AttributeLabelRefByWorkflow,
  RetryDocAuditRequest,
  ExportUnsatisfiedReplyRequest,
  FileCollection,
  TokenStat,
  DigitalHumanConfig,
  ExportUnsatisfiedReplyResponse,
  DescribeReferResponse,
  WorkflowRef,
  ListDocCateResponse,
  AgentKnowledgeFilter,
  KnowledgeQaOutput,
  WorkflowRunBase,
  AppModel,
  WorkflowRunNodeInfo,
  GetLikeDataCountRequest,
  ListAttributeLabelResponse,
  ModifyQAAttrRangeRequest,
  CateInfo,
  WebSearchContent,
  DeleteRejectedQuestionResponse,
  ListRejectedQuestionPreviewRequest,
  ListSelectDocRequest,
  ToolAdvanceConfig,
  FileInfo,
  ModifyAppRequest,
  StrValue,
  AgentInputUserInputValue,
  ParameterConfig,
  DeleteDocCateRequest,
  ClassifyConfig,
  DescribeConcurrencyUsageRequest,
  ListQACateRequest,
  ListReleaseQAPreviewRequest,
  DescribeAppResponse,
  DeleteAppRequest,
  GetVarListResponse,
  WorkFlowSummary,
  DescribeNodeRunResponse,
  ModifyQAResponse,
  DeleteQAResponse,
  UpdateSharedKnowledgeRequest,
  GetMsgRecordRequest,
  InputBoxConfig,
  ReleaseConfigs,
  DescribeSearchStatsGraphResponse,
  ModifyQAAttrRangeResponse,
  StopDocParseResponse,
  DescribeAppAgentListResponse,
  DescribeQAResponse,
  DescribeReleaseInfoRequest,
  ModifyQARequest,
  MsgRecord,
  DeleteDocCateResponse,
  ExportAttributeLabelResponse,
  KnowledgeQaWorkflowInfo,
  DescribeWorkflowRunRequest,
  DescribeUnsatisfiedReplyContextRequest,
  ListRejectedQuestionResponse,
  KnowledgeQaSearch,
  ListReleaseRequest,
  ListModelRequest,
  SummaryOutput,
  ListDocResponse,
  CreateAppResponse,
  Agent,
  CreateQARequest,
  RateMsgRecordRequest,
  RenameDocResponse,
  MsgRecordReference,
  CreateReleaseRequest,
  AgentProcedure,
  ExportAttributeLabelRequest,
  ModifyQACateRequest,
  ProcedureDebugging,
  StopDocParseRequest,
  DeleteQACateResponse,
  ListChannelResponse,
  DescribeDocRequest,
  AgentProcedureDebugging,
  DescribeTokenUsageGraphRequest,
  DescribeConcurrencyUsageGraphRequest,
  DescribeReleaseRequest,
  ReleaseQA,
  UnsatisfiedReply,
  AgentToolRspParam,
  CreateRejectedQuestionRequest,
  StructuredOutputConfig,
  SearchRange,
  ModifyDocAttrRangeResponse,
  DescribeCallStatsGraphRequest,
  ListQAResponse,
  VerifyQARequest,
  ListAppKnowledgeDetailResponse,
  CreateRejectedQuestionResponse,
  DescribeTokenUsageGraphResponse,
  SimilarQuestionModify,
  ModifyDocCateRequest,
  ModelParams,
  AgentInput,
  DeleteVarRequest,
  KnowledgeQaConfig,
  ImageInfoContent,
  GetDocPreviewResponse,
  ModelInfo,
  DeleteRejectedQuestionRequest,
  Highlight,
  TaskFLowVar,
  KnowledgeBaseInfo,
  GetLikeDataCountResponse,
  ListChannelRequest,
  DeleteAttributeLabelResponse,
  IntentAchievement,
  VerifyQAResponse,
  DescribeSharedKnowledgeRequest,
  ModifyDocRequest,
  KnowledgeModelConfig,
  ListWorkflowRunsResponse,
  YuanQi,
  NodeRunDetail,
  BaseConfig,
  SimilarQuestion,
  MsgFileInfo,
  Content,
  DescribeTokenUsageRequest,
  AgentKnowledgeFilterDocAndAnswer,
  CreateAttributeLabelResponse,
  IsTransferIntentRequest,
  ModifyRejectedQuestionResponse,
  ClarificationWidgetConfig,
  ModifyDocCateResponse,
  QuoteInfo,
  DescribeCallStatsGraphResponse,
  DescribeStorageCredentialResponse,
  CheckAttributeLabelExistResponse,
  GetTaskStatusRequest,
  AgentPluginQuery,
  DescribeRobotBizIDByAppKeyRequest,
  CreateVarRequest,
  QACate,
  ListRejectedQuestionRequest,
  ModifyDocResponse,
  AgentKnowledgeAttrLabel,
  PluginToolReqParam,
  UpdateSharedKnowledgeResponse,
  DeleteAgentRequest,
  CheckAttributeLabelExistRequest,
  AppModelDetailInfo,
  ListAppRequest,
  GetWsTokenReq_Label,
  ListReferShareKnowledgeResponse,
  RunNodeInfo,
  AgentDebugInfo,
  CreateDocCateResponse,
  ChannelListInfo,
  ExportQAListResponse,
  CreateQACateResponse,
  ListDocRequest,
  GetAnswerTypeDataCountResponse,
  GetMsgRecordResponse,
  ReferShareKnowledgeResponse,
  AgentModelInfo,
  AgentKnowledgeQAPlugin,
  SandboxContent,
  ReferDetail,
  KnowledgeUpdateInfo,
  CallbackWorkflowToolNodeResponse,
  GetDocPreviewRequest,
  DescribeAttributeLabelRequest,
  KnowledgeSummary,
  ListSharedKnowledgeRequest,
  RetryDocParseRequest,
  WidgetAction,
  GroupDocRequest,
  GroupQARequest,
  ModifyAttributeLabelRequest,
  Option,
  ListUsageCallDetailRequest,
  GetTaskStatusResponse,
  DescribeKnowledgeUsagePieGraphResponse,
  GetVarListRequest,
  ClassifyLabel,
  ListReleaseQAPreviewResponse,
  CreateAppRequest,
  DeleteAppResponse,
  CallDetail,
  UserBaseInfo,
  DocSegment,
  DescribeUnsatisfiedReplyContextResponse,
  ModifyDocAttrRangeRequest,
  DescribeKnowledgeUsagePieGraphRequest,
  AttributeFilters,
  UpdatePeriodInfo,
  IsTransferIntentResponse,
  DescribeAppRequest,
  DescribeNodeRunRequest,
  DescribeConcurrencyUsageGraphResponse,
  AgentPluginInfo,
  SummaryConfig,
  RetryDocAuditResponse,
  RetryReleaseResponse,
  NodeRunBase,
  AICallConfig,
  Credentials,
  AppInfo,
  DescribeSharedKnowledgeResponse,
  NL2SQLModelConfig,
  ListReleaseItem,
  DescribeConcurrencyUsageResponse,
  KnowledgeQaPlugin,
  UpdateVarRequest,
  DeleteQACateRequest,
  GetWsTokenRequest,
  VoiceConfig,
  DescribeTokenUsageResponse,
  ListReleaseConfigPreviewRequest,
  KnowledgeAdvancedConfig,
  StopWorkflowRunRequest,
  AppBaseInfo,
  GroupDocResponse,
  ListUsageCallDetailResponse,
  GetAppKnowledgeCountResponse,
  ListAppKnowledgeDetailRequest,
  WorkflowRunDetail,
  KnowledgeDetailInfo,
  SaveDocResponse,
  Context,
  ModifyQACateResponse,
  CheckAttributeLabelReferResponse,
  ReleaseRejectedQuestion,
  DescribeSegmentsRequest,
  Filters,
  IgnoreUnsatisfiedReplyResponse,
  AgentHandoffAdvancedSetting,
} from "./lke_models"

/**
 * lke client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lke.tencentcloudapi.com", "2023-11-30", clientConfig)
  }

  /**
   * 查询不满意回复列表
   */
  async ListUnsatisfiedReply(
    req: ListUnsatisfiedReplyRequest,
    cb?: (error: string, rep: ListUnsatisfiedReplyResponse) => void
  ): Promise<ListUnsatisfiedReplyResponse> {
    return this.request("ListUnsatisfiedReply", req, cb)
  }

  /**
   * 删除属性标签
   */
  async DeleteAttributeLabel(
    req: DeleteAttributeLabelRequest,
    cb?: (error: string, rep: DeleteAttributeLabelResponse) => void
  ): Promise<DeleteAttributeLabelResponse> {
    return this.request("DeleteAttributeLabel", req, cb)
  }

  /**
   * 查询自定义变量列表
   */
  async GetVarList(
    req: GetVarListRequest,
    cb?: (error: string, rep: GetVarListResponse) => void
  ): Promise<GetVarListResponse> {
    return this.request("GetVarList", req, cb)
  }

  /**
   * 查询企业知识库容量饼图
   */
  async DescribeKnowledgeUsagePieGraph(
    req: DescribeKnowledgeUsagePieGraphRequest,
    cb?: (error: string, rep: DescribeKnowledgeUsagePieGraphResponse) => void
  ): Promise<DescribeKnowledgeUsagePieGraphResponse> {
    return this.request("DescribeKnowledgeUsagePieGraph", req, cb)
  }

  /**
   * 批量修改问答适用范围
   */
  async ModifyQAAttrRange(
    req: ModifyQAAttrRangeRequest,
    cb?: (error: string, rep: ModifyQAAttrRangeResponse) => void
  ): Promise<ModifyQAAttrRangeResponse> {
    return this.request("ModifyQAAttrRange", req, cb)
  }

  /**
   * 获取文档下拉列表。
   */
  async ListSelectDoc(
    req: ListSelectDocRequest,
    cb?: (error: string, rep: ListSelectDocResponse) => void
  ): Promise<ListSelectDocResponse> {
    return this.request("ListSelectDoc", req, cb)
  }

  /**
   * 批量修改文档适用范围
   */
  async ModifyDocAttrRange(
    req: ModifyDocAttrRangeRequest,
    cb?: (error: string, rep: ModifyDocAttrRangeResponse) => void
  ): Promise<ModifyDocAttrRangeResponse> {
    return this.request("ModifyDocAttrRange", req, cb)
  }

  /**
   * 创建发布
   */
  async CreateRelease(
    req: CreateReleaseRequest,
    cb?: (error: string, rep: CreateReleaseResponse) => void
  ): Promise<CreateReleaseResponse> {
    return this.request("CreateRelease", req, cb)
  }

  /**
   * 删除问答
   */
  async DeleteQA(
    req: DeleteQARequest,
    cb?: (error: string, rep: DeleteQAResponse) => void
  ): Promise<DeleteQAResponse> {
    return this.request("DeleteQA", req, cb)
  }

  /**
   * 工作流工具节点异步回调
   */
  async CallbackWorkflowToolNode(
    req: CallbackWorkflowToolNodeRequest,
    cb?: (error: string, rep: CallbackWorkflowToolNodeResponse) => void
  ): Promise<CallbackWorkflowToolNodeResponse> {
    return this.request("CallbackWorkflowToolNode", req, cb)
  }

  /**
   * 此接口用来停止正在进行的工作流异步运行实例。
   */
  async StopWorkflowRun(
    req: StopWorkflowRunRequest,
    cb?: (error: string, rep: StopWorkflowRunResponse) => void
  ): Promise<StopWorkflowRunResponse> {
    return this.request("StopWorkflowRun", req, cb)
  }

  /**
   * 创建标签
   */
  async CreateAttributeLabel(
    req: CreateAttributeLabelRequest,
    cb?: (error: string, rep: CreateAttributeLabelResponse) => void
  ): Promise<CreateAttributeLabelResponse> {
    return this.request("CreateAttributeLabel", req, cb)
  }

  /**
   * 获取Doc分类
   */
  async ListDocCate(
    req: ListDocCateRequest,
    cb?: (error: string, rep: ListDocCateResponse) => void
  ): Promise<ListDocCateResponse> {
    return this.request("ListDocCate", req, cb)
  }

  /**
   * 列举共享知识库。
   */
  async ListSharedKnowledge(
    req: ListSharedKnowledgeRequest,
    cb?: (error: string, rep: ListSharedKnowledgeResponse) => void
  ): Promise<ListSharedKnowledgeResponse> {
    return this.request("ListSharedKnowledge", req, cb)
  }

  /**
   * 查询属性标签详情
   */
  async DescribeAttributeLabel(
    req: DescribeAttributeLabelRequest,
    cb?: (error: string, rep: DescribeAttributeLabelResponse) => void
  ): Promise<DescribeAttributeLabelResponse> {
    return this.request("DescribeAttributeLabel", req, cb)
  }

  /**
   * 发布拒答问题预览
   */
  async ListRejectedQuestionPreview(
    req: ListRejectedQuestionPreviewRequest,
    cb?: (error: string, rep: ListRejectedQuestionPreviewResponse) => void
  ): Promise<ListRejectedQuestionPreviewResponse> {
    return this.request("ListRejectedQuestionPreview", req, cb)
  }

  /**
   * 查询共享知识库。
   */
  async DescribeSharedKnowledge(
    req: DescribeSharedKnowledgeRequest,
    cb?: (error: string, rep: DescribeSharedKnowledgeResponse) => void
  ): Promise<DescribeSharedKnowledgeResponse> {
    return this.request("DescribeSharedKnowledge", req, cb)
  }

  /**
   * 文档解析重试
   */
  async RetryDocParse(
    req: RetryDocParseRequest,
    cb?: (error: string, rep: RetryDocParseResponse) => void
  ): Promise<RetryDocParseResponse> {
    return this.request("RetryDocParse", req, cb)
  }

  /**
     * 录入问答
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async CreateQA(
    req: CreateQARequest,
    cb?: (error: string, rep: CreateQAResponse) => void
  ): Promise<CreateQAResponse> {
    return this.request("CreateQA", req, cb)
  }

  /**
   * 接口调用token折线图
   */
  async DescribeTokenUsageGraph(
    req: DescribeTokenUsageGraphRequest,
    cb?: (error: string, rep: DescribeTokenUsageGraphResponse) => void
  ): Promise<DescribeTokenUsageGraphResponse> {
    return this.request("DescribeTokenUsageGraph", req, cb)
  }

  /**
   * 文档生成问答
   */
  async GenerateQA(
    req: GenerateQARequest,
    cb?: (error: string, rep: GenerateQAResponse) => void
  ): Promise<GenerateQAResponse> {
    return this.request("GenerateQA", req, cb)
  }

  /**
   * 获取企业下应用详情
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
  }

  /**
   * 获取ws token
   */
  async GetWsToken(
    req: GetWsTokenRequest,
    cb?: (error: string, rep: GetWsTokenResponse) => void
  ): Promise<GetWsTokenResponse> {
    return this.request("GetWsToken", req, cb)
  }

  /**
   * 查询属性标签列表
   */
  async ListAttributeLabel(
    req: ListAttributeLabelRequest,
    cb?: (error: string, rep: ListAttributeLabelResponse) => void
  ): Promise<ListAttributeLabelResponse> {
    return this.request("ListAttributeLabel", req, cb)
  }

  /**
   * 发布配置项预览
   */
  async ListReleaseConfigPreview(
    req: ListReleaseConfigPreviewRequest,
    cb?: (error: string, rep: ListReleaseConfigPreviewResponse) => void
  ): Promise<ListReleaseConfigPreviewResponse> {
    return this.request("ListReleaseConfigPreview", req, cb)
  }

  /**
   * 查看应用引用了哪些共享知识库，可以看到共享知识库的基础信息，包括名称，id等
   */
  async ListReferShareKnowledge(
    req: ListReferShareKnowledgeRequest,
    cb?: (error: string, rep: ListReferShareKnowledgeResponse) => void
  ): Promise<ListReferShareKnowledgeResponse> {
    return this.request("ListReferShareKnowledge", req, cb)
  }

  /**
   * 查询搜索服务调用折线图
   */
  async DescribeSearchStatsGraph(
    req: DescribeSearchStatsGraphRequest,
    cb?: (error: string, rep: DescribeSearchStatsGraphResponse) => void
  ): Promise<DescribeSearchStatsGraphResponse> {
    return this.request("DescribeSearchStatsGraph", req, cb)
  }

  /**
   * 此接口可查询已创建的所有工作流异步运行实例。
   */
  async ListWorkflowRuns(
    req: ListWorkflowRunsRequest,
    cb?: (error: string, rep: ListWorkflowRunsResponse) => void
  ): Promise<ListWorkflowRunsResponse> {
    return this.request("ListWorkflowRuns", req, cb)
  }

  /**
     * 校验问答
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async VerifyQA(
    req: VerifyQARequest,
    cb?: (error: string, rep: VerifyQAResponse) => void
  ): Promise<VerifyQAResponse> {
    return this.request("VerifyQA", req, cb)
  }

  /**
   * 创建Doc分类
   */
  async CreateDocCate(
    req: CreateDocCateRequest,
    cb?: (error: string, rep: CreateDocCateResponse) => void
  ): Promise<CreateDocCateResponse> {
    return this.request("CreateDocCate", req, cb)
  }

  /**
   * 检查属性下的标签名是否存在
   */
  async CheckAttributeLabelExist(
    req: CheckAttributeLabelExistRequest,
    cb?: (error: string, rep: CheckAttributeLabelExistResponse) => void
  ): Promise<CheckAttributeLabelExistResponse> {
    return this.request("CheckAttributeLabelExist", req, cb)
  }

  /**
   * 文档重命名
   */
  async RenameDoc(
    req: RenameDocRequest,
    cb?: (error: string, rep: RenameDocResponse) => void
  ): Promise<RenameDocResponse> {
    return this.request("RenameDoc", req, cb)
  }

  /**
   * 文档详情
   */
  async DescribeDoc(
    req: DescribeDocRequest,
    cb?: (error: string, rep: DescribeDocResponse) => void
  ): Promise<DescribeDocResponse> {
    return this.request("DescribeDoc", req, cb)
  }

  /**
   * 列表查询单次调用明细
   */
  async ListUsageCallDetail(
    req: ListUsageCallDetailRequest,
    cb?: (error: string, rep: ListUsageCallDetailResponse) => void
  ): Promise<ListUsageCallDetailResponse> {
    return this.request("ListUsageCallDetail", req, cb)
  }

  /**
   * 获取文件上传临时密钥
   */
  async DescribeStorageCredential(
    req: DescribeStorageCredentialRequest,
    cb?: (error: string, rep: DescribeStorageCredentialResponse) => void
  ): Promise<DescribeStorageCredentialResponse> {
    return this.request("DescribeStorageCredential", req, cb)
  }

  /**
   * 点赞点踩消息
   */
  async RateMsgRecord(
    req: RateMsgRecordRequest,
    cb?: (error: string, rep: RateMsgRecordResponse) => void
  ): Promise<RateMsgRecordResponse> {
    return this.request("RateMsgRecord", req, cb)
  }

  /**
   * 文档列表
   */
  async ListReleaseQAPreview(
    req: ListReleaseQAPreviewRequest,
    cb?: (error: string, rep: ListReleaseQAPreviewResponse) => void
  ): Promise<ListReleaseQAPreviewResponse> {
    return this.request("ListReleaseQAPreview", req, cb)
  }

  /**
   * 更新QA分类
   */
  async ModifyQACate(
    req: ModifyQACateRequest,
    cb?: (error: string, rep: ModifyQACateResponse) => void
  ): Promise<ModifyQACateResponse> {
    return this.request("ModifyQACate", req, cb)
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
   * 检查属性标签引用
   */
  async CheckAttributeLabelRefer(
    req: CheckAttributeLabelReferRequest,
    cb?: (error: string, rep: CheckAttributeLabelReferResponse) => void
  ): Promise<CheckAttributeLabelReferResponse> {
    return this.request("CheckAttributeLabelRefer", req, cb)
  }

  /**
   * 创建共享知识库。
   */
  async CreateSharedKnowledge(
    req: CreateSharedKnowledgeRequest,
    cb?: (error: string, rep: CreateSharedKnowledgeResponse) => void
  ): Promise<CreateSharedKnowledgeResponse> {
    return this.request("CreateSharedKnowledge", req, cb)
  }

  /**
   * 获取不满意回复上下文
   */
  async DescribeUnsatisfiedReplyContext(
    req: DescribeUnsatisfiedReplyContextRequest,
    cb?: (error: string, rep: DescribeUnsatisfiedReplyContextResponse) => void
  ): Promise<DescribeUnsatisfiedReplyContextResponse> {
    return this.request("DescribeUnsatisfiedReplyContext", req, cb)
  }

  /**
   * Doc分组
   */
  async GroupDoc(
    req: GroupDocRequest,
    cb?: (error: string, rep: GroupDocResponse) => void
  ): Promise<GroupDocResponse> {
    return this.request("GroupDoc", req, cb)
  }

  /**
   * 获取企业下应用列表
   */
  async ListApp(
    req: ListAppRequest,
    cb?: (error: string, rep: ListAppResponse) => void
  ): Promise<ListAppResponse> {
    return this.request("ListApp", req, cb)
  }

  /**
   * 接口调用token详情
   */
  async DescribeTokenUsage(
    req: DescribeTokenUsageRequest,
    cb?: (error: string, rep: DescribeTokenUsageResponse) => void
  ): Promise<DescribeTokenUsageResponse> {
    return this.request("DescribeTokenUsage", req, cb)
  }

  /**
   * 通过DescribeWorkflowRun接口获取了工作流异步运行的整体内容，其中包含了基本的节点信息，再通过本接口可查看节点的运行详情（包括输入、输出、日志等）。
   */
  async DescribeNodeRun(
    req: DescribeNodeRunRequest,
    cb?: (error: string, rep: DescribeNodeRunResponse) => void
  ): Promise<DescribeNodeRunResponse> {
    return this.request("DescribeNodeRun", req, cb)
  }

  /**
   * Doc分类删除
   */
  async DeleteDocCate(
    req: DeleteDocCateRequest,
    cb?: (error: string, rep: DeleteDocCateResponse) => void
  ): Promise<DeleteDocCateResponse> {
    return this.request("DeleteDocCate", req, cb)
  }

  /**
     * 获取QA分类
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async ListQACate(
    req: ListQACateRequest,
    cb?: (error: string, rep: ListQACateResponse) => void
  ): Promise<ListQACateResponse> {
    return this.request("ListQACate", req, cb)
  }

  /**
   * 问答详情
   */
  async DescribeQA(
    req: DescribeQARequest,
    cb?: (error: string, rep: DescribeQAResponse) => void
  ): Promise<DescribeQAResponse> {
    return this.request("DescribeQA", req, cb)
  }

  /**
   * 创建知识引擎应用。
   */
  async CreateApp(
    req: CreateAppRequest,
    cb?: (error: string, rep: CreateAppResponse) => void
  ): Promise<CreateAppResponse> {
    return this.request("CreateApp", req, cb)
  }

  /**
   * 修改文档
   */
  async ModifyDoc(
    req: ModifyDocRequest,
    cb?: (error: string, rep: ModifyDocResponse) => void
  ): Promise<ModifyDocResponse> {
    return this.request("ModifyDoc", req, cb)
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
     * 创建QA分类
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async CreateQACate(
    req: CreateQACateRequest,
    cb?: (error: string, rep: CreateQACateResponse) => void
  ): Promise<CreateQACateResponse> {
    return this.request("CreateQACate", req, cb)
  }

  /**
   * 更新共享知识库。
   */
  async UpdateSharedKnowledge(
    req: UpdateSharedKnowledgeRequest,
    cb?: (error: string, rep: UpdateSharedKnowledgeResponse) => void
  ): Promise<UpdateSharedKnowledgeResponse> {
    return this.request("UpdateSharedKnowledge", req, cb)
  }

  /**
   * 获取发布渠道列表
   */
  async ListChannel(
    req: ListChannelRequest,
    cb?: (error: string, rep: ListChannelResponse) => void
  ): Promise<ListChannelResponse> {
    return this.request("ListChannel", req, cb)
  }

  /**
   * 导出标签
   */
  async ExportAttributeLabel(
    req: ExportAttributeLabelRequest,
    cb?: (error: string, rep: ExportAttributeLabelResponse) => void
  ): Promise<ExportAttributeLabelResponse> {
    return this.request("ExportAttributeLabel", req, cb)
  }

  /**
   * 获取来源详情列表
   */
  async DescribeRefer(
    req: DescribeReferRequest,
    cb?: (error: string, rep: DescribeReferResponse) => void
  ): Promise<DescribeReferResponse> {
    return this.request("DescribeRefer", req, cb)
  }

  /**
   * 查询知识库用量
   */
  async DescribeKnowledgeUsage(
    req?: DescribeKnowledgeUsageRequest,
    cb?: (error: string, rep: DescribeKnowledgeUsageResponse) => void
  ): Promise<DescribeKnowledgeUsageResponse> {
    return this.request("DescribeKnowledgeUsage", req, cb)
  }

  /**
   * 删除共享知识库。
   */
  async DeleteSharedKnowledge(
    req: DeleteSharedKnowledgeRequest,
    cb?: (error: string, rep: DeleteSharedKnowledgeResponse) => void
  ): Promise<DeleteSharedKnowledgeResponse> {
    return this.request("DeleteSharedKnowledge", req, cb)
  }

  /**
   * 修改Doc分类
   */
  async ModifyDocCate(
    req: ModifyDocCateRequest,
    cb?: (error: string, rep: ModifyDocCateResponse) => void
  ): Promise<ModifyDocCateResponse> {
    return this.request("ModifyDocCate", req, cb)
  }

  /**
   * 文档列表
   */
  async ListDoc(
    req: ListDocRequest,
    cb?: (error: string, rep: ListDocResponse) => void
  ): Promise<ListDocResponse> {
    return this.request("ListDoc", req, cb)
  }

  /**
     * 本接口用来创建工作流的异步运行实例，创建成功后工作流会在后台异步运行，接口返回工作流运行实例ID（WorkflowRunId）等信息。后面可通过调用DescribeWorkflowRun接口查工作流运行的详情。
注意：工作流的异步运行是基于应用的，需要先把对应的应用配置成“单工作流模式”，并且打开“异步调用”的开关，才能创建成功。
     */
  async CreateWorkflowRun(
    req: CreateWorkflowRunRequest,
    cb?: (error: string, rep: CreateWorkflowRunResponse) => void
  ): Promise<CreateWorkflowRunResponse> {
    return this.request("CreateWorkflowRun", req, cb)
  }

  /**
     * 问答列表
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async ListQA(
    req: ListQARequest,
    cb?: (error: string, rep: ListQAResponse) => void
  ): Promise<ListQAResponse> {
    return this.request("ListQA", req, cb)
  }

  /**
   * 创建变量
   */
  async CreateVar(
    req: CreateVarRequest,
    cb?: (error: string, rep: CreateVarResponse) => void
  ): Promise<CreateVarResponse> {
    return this.request("CreateVar", req, cb)
  }

  /**
   * 点赞点踩数据统计
   */
  async GetLikeDataCount(
    req: GetLikeDataCountRequest,
    cb?: (error: string, rep: GetLikeDataCountResponse) => void
  ): Promise<GetLikeDataCountResponse> {
    return this.request("GetLikeDataCount", req, cb)
  }

  /**
   * 通过appKey获取应用业务ID
   */
  async DescribeRobotBizIDByAppKey(
    req: DescribeRobotBizIDByAppKeyRequest,
    cb?: (error: string, rep: DescribeRobotBizIDByAppKeyResponse) => void
  ): Promise<DescribeRobotBizIDByAppKeyResponse> {
    return this.request("DescribeRobotBizIDByAppKey", req, cb)
  }

  /**
     * 导出QA列表
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async ExportQAList(
    req: ExportQAListRequest,
    cb?: (error: string, rep: ExportQAListResponse) => void
  ): Promise<ExportQAListResponse> {
    return this.request("ExportQAList", req, cb)
  }

  /**
   * 上传导入属性标签
   */
  async UploadAttributeLabel(
    req: UploadAttributeLabelRequest,
    cb?: (error: string, rep: UploadAttributeLabelResponse) => void
  ): Promise<UploadAttributeLabelResponse> {
    return this.request("UploadAttributeLabel", req, cb)
  }

  /**
   * 获取文档预览信息
   */
  async GetDocPreview(
    req: GetDocPreviewRequest,
    cb?: (error: string, rep: GetDocPreviewResponse) => void
  ): Promise<GetDocPreviewResponse> {
    return this.request("GetDocPreview", req, cb)
  }

  /**
   * 并发调用响应
   */
  async DescribeConcurrencyUsage(
    req: DescribeConcurrencyUsageRequest,
    cb?: (error: string, rep: DescribeConcurrencyUsageResponse) => void
  ): Promise<DescribeConcurrencyUsageResponse> {
    return this.request("DescribeConcurrencyUsage", req, cb)
  }

  /**
   * 修改拒答问题
   */
  async ModifyRejectedQuestion(
    req: ModifyRejectedQuestionRequest,
    cb?: (error: string, rep: ModifyRejectedQuestionResponse) => void
  ): Promise<ModifyRejectedQuestionResponse> {
    return this.request("ModifyRejectedQuestion", req, cb)
  }

  /**
   * 是否意图转人工
   */
  async IsTransferIntent(
    req: IsTransferIntentRequest,
    cb?: (error: string, rep: IsTransferIntentResponse) => void
  ): Promise<IsTransferIntentResponse> {
    return this.request("IsTransferIntent", req, cb)
  }

  /**
   * 忽略不满意回复
   */
  async IgnoreUnsatisfiedReply(
    req: IgnoreUnsatisfiedReplyRequest,
    cb?: (error: string, rep: IgnoreUnsatisfiedReplyResponse) => void
  ): Promise<IgnoreUnsatisfiedReplyResponse> {
    return this.request("IgnoreUnsatisfiedReply", req, cb)
  }

  /**
   * 更新变量
   */
  async UpdateVar(
    req: UpdateVarRequest,
    cb?: (error: string, rep: UpdateVarResponse) => void
  ): Promise<UpdateVarResponse> {
    return this.request("UpdateVar", req, cb)
  }

  /**
   * 应用引用共享知识库，可以引用一个或多个，每次都是全量覆盖
   */
  async ReferShareKnowledge(
    req: ReferShareKnowledgeRequest,
    cb?: (error: string, rep: ReferShareKnowledgeResponse) => void
  ): Promise<ReferShareKnowledgeResponse> {
    return this.request("ReferShareKnowledge", req, cb)
  }

  /**
   * 发布列表
   */
  async ListRelease(
    req: ListReleaseRequest,
    cb?: (error: string, rep: ListReleaseResponse) => void
  ): Promise<ListReleaseResponse> {
    return this.request("ListRelease", req, cb)
  }

  /**
   * 获取模型列表
   */
  async ListModel(
    req: ListModelRequest,
    cb?: (error: string, rep: ListModelResponse) => void
  ): Promise<ListModelResponse> {
    return this.request("ListModel", req, cb)
  }

  /**
   * 获取拒答问题
   */
  async ListRejectedQuestion(
    req: ListRejectedQuestionRequest,
    cb?: (error: string, rep: ListRejectedQuestionResponse) => void
  ): Promise<ListRejectedQuestionResponse> {
    return this.request("ListRejectedQuestion", req, cb)
  }

  /**
   * 分类删除
   */
  async DeleteQACate(
    req: DeleteQACateRequest,
    cb?: (error: string, rep: DeleteQACateResponse) => void
  ): Promise<DeleteQACateResponse> {
    return this.request("DeleteQACate", req, cb)
  }

  /**
     * 导出不满意回复
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async ExportUnsatisfiedReply(
    req: ExportUnsatisfiedReplyRequest,
    cb?: (error: string, rep: ExportUnsatisfiedReplyResponse) => void
  ): Promise<ExportUnsatisfiedReplyResponse> {
    return this.request("ExportUnsatisfiedReply", req, cb)
  }

  /**
   * 发布暂停后重试
   */
  async RetryRelease(
    req: RetryReleaseRequest,
    cb?: (error: string, rep: RetryReleaseResponse) => void
  ): Promise<RetryReleaseResponse> {
    return this.request("RetryRelease", req, cb)
  }

  /**
   * 更新问答
   */
  async ModifyQA(
    req: ModifyQARequest,
    cb?: (error: string, rep: ModifyQAResponse) => void
  ): Promise<ModifyQAResponse> {
    return this.request("ModifyQA", req, cb)
  }

  /**
     * 知识库文档问答保存。
将文件存储到应用的知识库内需要三步：
1.获取临时密钥，参考[接口文档](https://cloud.tencent.com/document/product/1759/105050)。获取临时密钥不同参数组合权限不一样，可参考 [智能体开发平台操作 cos 指南](https://cloud.tencent.com/document/product/1759/116238)
2.调用腾讯云提供的 cos 存储接口，将文件存储到智能体开发平台 cos 中：具体可参考[ COS SDK 概览](https://cloud.tencent.com/document/product/436/6474), 注意使用的是临时密钥的方式操作 COS 
3.调用本接口，将文件的基础信息存储到智能体开发平台中。
以上步骤可参考[文档](https://cloud.tencent.com/document/product/1759/108903)，文档最后有[代码demo](https://cloud.tencent.com/document/product/1759/108903#demo)，可作为参考。
     */
  async SaveDoc(
    req: SaveDocRequest,
    cb?: (error: string, rep: SaveDocResponse) => void
  ): Promise<SaveDocResponse> {
    return this.request("SaveDoc", req, cb)
  }

  /**
   * 删除文档
   */
  async DeleteDoc(
    req: DeleteDocRequest,
    cb?: (error: string, rep: DeleteDocResponse) => void
  ): Promise<DeleteDocResponse> {
    return this.request("DeleteDoc", req, cb)
  }

  /**
   * 删除拒答问题
   */
  async DeleteRejectedQuestion(
    req: DeleteRejectedQuestionRequest,
    cb?: (error: string, rep: DeleteRejectedQuestionResponse) => void
  ): Promise<DeleteRejectedQuestionResponse> {
    return this.request("DeleteRejectedQuestion", req, cb)
  }

  /**
   * 删除变量
   */
  async DeleteVar(
    req: DeleteVarRequest,
    cb?: (error: string, rep: DeleteVarResponse) => void
  ): Promise<DeleteVarResponse> {
    return this.request("DeleteVar", req, cb)
  }

  /**
   * 修改应用请求结构体
   */
  async ModifyApp(
    req: ModifyAppRequest,
    cb?: (error: string, rep: ModifyAppResponse) => void
  ): Promise<ModifyAppResponse> {
    return this.request("ModifyApp", req, cb)
  }

  /**
   * 获取应用密钥
   */
  async GetAppSecret(
    req: GetAppSecretRequest,
    cb?: (error: string, rep: GetAppSecretResponse) => void
  ): Promise<GetAppSecretResponse> {
    return this.request("GetAppSecret", req, cb)
  }

  /**
   * 编辑属性标签
   */
  async ModifyAttributeLabel(
    req: ModifyAttributeLabelRequest,
    cb?: (error: string, rep: ModifyAttributeLabelResponse) => void
  ): Promise<ModifyAttributeLabelResponse> {
    return this.request("ModifyAttributeLabel", req, cb)
  }

  /**
   * 回答类型数据统计
   */
  async GetAnswerTypeDataCount(
    req: GetAnswerTypeDataCountRequest,
    cb?: (error: string, rep: GetAnswerTypeDataCountResponse) => void
  ): Promise<GetAnswerTypeDataCountResponse> {
    return this.request("GetAnswerTypeDataCount", req, cb)
  }

  /**
   * 创建了工作流的异步运行实例后，通过本接口可以查询整体的运行详情。
   */
  async DescribeWorkflowRun(
    req: DescribeWorkflowRunRequest,
    cb?: (error: string, rep: DescribeWorkflowRunResponse) => void
  ): Promise<DescribeWorkflowRunResponse> {
    return this.request("DescribeWorkflowRun", req, cb)
  }

  /**
   * 查询指定应用下的Agent列表
   */
  async DescribeAppAgentList(
    req: DescribeAppAgentListRequest,
    cb?: (error: string, rep: DescribeAppAgentListResponse) => void
  ): Promise<DescribeAppAgentListResponse> {
    return this.request("DescribeAppAgentList", req, cb)
  }

  /**
   * 文档解析重试
   */
  async RetryDocAudit(
    req: RetryDocAuditRequest,
    cb?: (error: string, rep: RetryDocAuditResponse) => void
  ): Promise<RetryDocAuditResponse> {
    return this.request("RetryDocAudit", req, cb)
  }

  /**
   * 发布文档预览
   */
  async ListReleaseDocPreview(
    req: ListReleaseDocPreviewRequest,
    cb?: (error: string, rep: ListReleaseDocPreviewResponse) => void
  ): Promise<ListReleaseDocPreviewResponse> {
    return this.request("ListReleaseDocPreview", req, cb)
  }

  /**
   * 发布详情
   */
  async DescribeRelease(
    req: DescribeReleaseRequest,
    cb?: (error: string, rep: DescribeReleaseResponse) => void
  ): Promise<DescribeReleaseResponse> {
    return this.request("DescribeRelease", req, cb)
  }

  /**
   * 获取模型列表
   */
  async GetAppKnowledgeCount(
    req: GetAppKnowledgeCountRequest,
    cb?: (error: string, rep: GetAppKnowledgeCountResponse) => void
  ): Promise<GetAppKnowledgeCountResponse> {
    return this.request("GetAppKnowledgeCount", req, cb)
  }

  /**
   * 并发调用折线图
   */
  async DescribeConcurrencyUsageGraph(
    req: DescribeConcurrencyUsageGraphRequest,
    cb?: (error: string, rep: DescribeConcurrencyUsageGraphResponse) => void
  ): Promise<DescribeConcurrencyUsageGraphResponse> {
    return this.request("DescribeConcurrencyUsageGraph", req, cb)
  }

  /**
     * 获取聊天历史
根据会话session id获取聊天历史（仅保留180天内的历史对话数据）
     */
  async GetMsgRecord(
    req: GetMsgRecordRequest,
    cb?: (error: string, rep: GetMsgRecordResponse) => void
  ): Promise<GetMsgRecordResponse> {
    return this.request("GetMsgRecord", req, cb)
  }

  /**
   * 创建拒答问题
   */
  async CreateRejectedQuestion(
    req: CreateRejectedQuestionRequest,
    cb?: (error: string, rep: CreateRejectedQuestionResponse) => void
  ): Promise<CreateRejectedQuestionResponse> {
    return this.request("CreateRejectedQuestion", req, cb)
  }

  /**
   * 接口调用折线图
   */
  async DescribeCallStatsGraph(
    req: DescribeCallStatsGraphRequest,
    cb?: (error: string, rep: DescribeCallStatsGraphResponse) => void
  ): Promise<DescribeCallStatsGraphResponse> {
    return this.request("DescribeCallStatsGraph", req, cb)
  }

  /**
     * 用户将多个问答批量的分类到知识库的具体分类
知识库相关背景知识介绍
“知识库检索范围”文档：https://cloud.tencent.com/document/product/1759/112704
“标签”文档：https://cloud.tencent.com/document/product/1759/112956
     */
  async GroupQA(
    req: GroupQARequest,
    cb?: (error: string, rep: GroupQAResponse) => void
  ): Promise<GroupQAResponse> {
    return this.request("GroupQA", req, cb)
  }

  /**
   * 获取片段详情
   */
  async DescribeSegments(
    req: DescribeSegmentsRequest,
    cb?: (error: string, rep: DescribeSegmentsResponse) => void
  ): Promise<DescribeSegmentsResponse> {
    return this.request("DescribeSegments", req, cb)
  }

  /**
   * 获取任务状态
   */
  async GetTaskStatus(
    req: GetTaskStatusRequest,
    cb?: (error: string, rep: GetTaskStatusResponse) => void
  ): Promise<GetTaskStatusResponse> {
    return this.request("GetTaskStatus", req, cb)
  }

  /**
   * 终止文档解析
   */
  async StopDocParse(
    req: StopDocParseRequest,
    cb?: (error: string, rep: StopDocParseResponse) => void
  ): Promise<StopDocParseResponse> {
    return this.request("StopDocParse", req, cb)
  }

  /**
   * 列表查询知识库容量详情
   */
  async ListAppKnowledgeDetail(
    req: ListAppKnowledgeDetailRequest,
    cb?: (error: string, rep: ListAppKnowledgeDetailResponse) => void
  ): Promise<ListAppKnowledgeDetailResponse> {
    return this.request("ListAppKnowledgeDetail", req, cb)
  }

  /**
   * 拉取发布按钮状态、最后发布时间
   */
  async DescribeReleaseInfo(
    req: DescribeReleaseInfoRequest,
    cb?: (error: string, rep: DescribeReleaseInfoResponse) => void
  ): Promise<DescribeReleaseInfoResponse> {
    return this.request("DescribeReleaseInfo", req, cb)
  }
}
