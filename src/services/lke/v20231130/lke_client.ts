/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
  ModifyQAAttrRangeResponse,
  GetWsTokenResponse,
  ListUsageCallDetailRequest,
  CheckAttributeLabelExistRequest,
  AttributeFilters,
  DescribeQAResponse,
  GetWsTokenReq_Label,
  GetAppKnowledgeCountRequest,
  ResetSessionResponse,
  ListSelectDocResponse,
  DescribeReleaseInfoRequest,
  DeleteDocRequest,
  GetAnswerTypeDataCountRequest,
  RunNodeInfo,
  DescribeAppResponse,
  UploadAttributeLabelResponse,
  MsgRecord,
  CreateDocCateResponse,
  DeleteDocCateResponse,
  ExportAttributeLabelResponse,
  KnowledgeCapacityPieGraphDetail,
  ExportQAListResponse,
  GetAppSecretResponse,
  ListRejectedQuestionRequest,
  CreateQACateResponse,
  ModifyDocAttrRangeResponse,
  GetAnswerTypeDataCountResponse,
  DescribeQARequest,
  AttrLabelRefer,
  CreateReconstructDocumentFlowConfig,
  DescribeUnsatisfiedReplyContextRequest,
  Procedure,
  QAQuery,
  ListAppRequest,
  AttrLabel,
  ModifyQAAttrRangeRequest,
  ListRejectedQuestionResponse,
  ModifyDocResponse,
  ReleaseDoc,
  KnowledgeQaSearch,
  CreateCorpResponse,
  ListQARequest,
  DescribeKnowledgeUsageResponse,
  ReferDetail,
  ListUnsatisfiedReplyRequest,
  DeleteQARequest,
  GetLikeDataCountResponse,
  ListReleaseRequest,
  IsTransferIntentResponse,
  CreateDocCateRequest,
  InvokeAPI,
  SummaryOutput,
  ModifyAppResponse,
  ListDocResponse,
  GetDocPreviewRequest,
  ModifyQARequest,
  TaskFlowInfo,
  ExportUnsatisfiedReplyResponse,
  ListDocCateResponse,
  ListRejectedQuestionPreviewResponse,
  DescribeCorpRequest,
  ListAppCategoryResponse,
  CreateAppResponse,
  DescribeAttributeLabelRequest,
  CreateQARequest,
  KnowledgeSummary,
  TaskFlowSummary,
  CreateCorpRequest,
  PluginToolReqParam,
  QueryRewriteResponse,
  ListQaItem,
  DeleteAttributeLabelRequest,
  DescribeRobotBizIDByAppKeyResponse,
  ReconstructDocumentResponse,
  ListDocCateRequest,
  DescribeDocResponse,
  CreateReleaseRequest,
  Label,
  AgentProcedure,
  KnowledgeQaOutput,
  ApiVarAttrInfo,
  AgentThought,
  GroupDocRequest,
  CheckAttributeLabelReferRequest,
  ModifyQACateRequest,
  SearchStrategy,
  ModifyAttributeLabelRequest,
  ConvertDocumentRequest,
  AttributeLabel,
  Option,
  Usage,
  ListUnsatisfiedReplyResponse,
  GetAppSecretRequest,
  ModelParameter,
  DeleteQACateResponse,
  QueryParseDocResultResponse,
  ListReleaseDocPreviewResponse,
  WordRecognizeInfo,
  SummaryConfig,
  GenerateQAResponse,
  GetTaskStatusResponse,
  DescribeConcurrencyUsageGraphRequest,
  DescribeDocRequest,
  AgentProcedureDebugging,
  DescribeTokenUsageGraphRequest,
  ConvertDocumentResponse,
  RetryDocAuditRequest,
  SaveDocRequest,
  RetryDocParseRequest,
  ReconstructDocumentFailedPage,
  ListAppKnowledgeDetailResponse,
  ModifyQACateResponse,
  DescribeAttributeLabelResponse,
  ModifyAttributeLabelResponse,
  KnowledgeQaSingleWorkflow,
  ListQACateResponse,
  RetryDocParseResponse,
  CreateRejectedQuestionResponse,
  ReconstructDocumentConfig,
  GetEmbeddingResponse,
  ExportUnsatisfiedReplyRequest,
  GroupQAResponse,
  QuoteInfo,
  CreateAppRequest,
  ResetSessionRequest,
  AppConfig,
  DescribeReleaseRequest,
  ReleaseQA,
  ListAppCategoryRequest,
  ListReleaseConfigPreviewRequest,
  CallDetail,
  ModifyRejectedQuestionResponse,
  ListReleaseDocPreviewRequest,
  TokenStat,
  DocSegment,
  UnsatisfiedReply,
  DescribeUnsatisfiedReplyContextResponse,
  Message,
  CreateRejectedQuestionRequest,
  DescribeKnowledgeUsagePieGraphRequest,
  AttrLabelDetail,
  DescribeReferResponse,
  Context,
  ListDocRequest,
  ReconstructDocumentRequest,
  GetEmbeddingRequest,
  GroupQARequest,
  RateMsgRecordRequest,
  DescribeCallStatsGraphRequest,
  GetMsgRecordResponse,
  DescribeAppRequest,
  GetReconstructDocumentResultRequest,
  DescribeKnowledgeUsageRequest,
  ListQAResponse,
  IgnoreUnsatisfiedReplyRequest,
  DescribeReleaseResponse,
  DescribeConcurrencyUsageGraphResponse,
  ListDocItem,
  ParseDocRequest,
  Polygon,
  AppModel,
  Stat,
  DescribeKnowledgeUsagePieGraphResponse,
  ClassifyLabel,
  ListReleaseQAPreviewResponse,
  DescribeTokenUsageGraphResponse,
  SimilarQuestionModify,
  WorkflowRunNodeInfo,
  StatisticInfo,
  RetryDocAuditResponse,
  GetReconstructDocumentResultResponse,
  ModifyDocCateRequest,
  RejectedQuestion,
  GetLikeDataCountRequest,
  DeleteRejectedQuestionResponse,
  Credentials,
  MsgFileInfo,
  CreateAttributeLabelRequest,
  ListAppResponse,
  AppInfo,
  CateInfo,
  CreateReconstructDocumentFlowRequest,
  RunReRankResponse,
  ProcedureDebugging,
  KnowledgeQaConfig,
  Coord,
  MsgRecordReference,
  ListRejectedQuestionPreviewRequest,
  ListReleaseConfigPreviewResponse,
  ModelInfo,
  DeleteRejectedQuestionRequest,
  Highlight,
  FileInfo,
  ExportQAListRequest,
  GetDocPreviewResponse,
  DescribeConcurrencyUsageResponse,
  CreateReleaseResponse,
  QueryRewriteRequest,
  ModifyAppRequest,
  RunReRankRequest,
  KnowledgeDetail,
  DeleteAttributeLabelResponse,
  RetryReleaseRequest,
  KnowledgeQaPlugin,
  VerifyQARequest,
  DeleteQACateRequest,
  GenerateQARequest,
  GetWsTokenRequest,
  QACate,
  EmbeddingObject,
  ModifyDocRequest,
  DescribeTokenUsageResponse,
  DeleteAppResponse,
  SearchRange,
  ListAttributeLabelRequest,
  DeleteDocCateRequest,
  AgentReference,
  DeleteDocResponse,
  DocumentElement,
  BaseConfig,
  DescribeSegmentsResponse,
  SimilarQuestion,
  ClassifyConfig,
  DescribeConcurrencyUsageRequest,
  GroupDocResponse,
  UploadAttributeLabelRequest,
  ListUsageCallDetailResponse,
  ExportAttributeLabelRequest,
  DescribeTokenUsageRequest,
  GetAppKnowledgeCountResponse,
  RetryReleaseResponse,
  CreateAttributeLabelResponse,
  ListAppKnowledgeDetailRequest,
  CreateQAResponse,
  ReRankDataObject,
  StopDocParseResponse,
  ParseDocResponse,
  ListQACateRequest,
  ListReleaseQAPreviewRequest,
  DescribeReleaseInfoResponse,
  IsTransferIntentRequest,
  DescribeReferRequest,
  DeleteAppRequest,
  WorkFlowSummary,
  TaskParams,
  ListAppCategoryRspOption,
  ValueInfo,
  DescribeStorageCredentialRequest,
  QAList,
  DescribeCorpResponse,
  QueryParseDocResultRequest,
  ModifyDocCateResponse,
  SaveDocResponse,
  ListReleaseResponse,
  ListModelResponse,
  ListAttributeLabelResponse,
  ListReleaseItem,
  ModifyQAResponse,
  DeleteQAResponse,
  DescribeCallStatsGraphResponse,
  GetMsgRecordRequest,
  DescribeStorageCredentialResponse,
  CheckAttributeLabelExistResponse,
  StrValue,
  GetTaskStatusRequest,
  CheckAttributeLabelReferResponse,
  RateMsgRecordResponse,
  ModifyDocAttrRangeRequest,
  ReleaseRejectedQuestion,
  CreateQACateRequest,
  DescribeRobotBizIDByAppKeyRequest,
  DocumentRecognizeInfo,
  CreateReconstructDocumentFlowResponse,
  HistorySummary,
  VerifyQAResponse,
  ReleaseConfigs,
  DescribeSegmentsRequest,
  DescribeSearchStatsGraphRequest,
  DescribeSearchStatsGraphResponse,
  Filters,
  ModifyRejectedQuestionRequest,
  IgnoreUnsatisfiedReplyResponse,
  StopDocParseRequest,
  KnowledgeWorkflow,
  ListModelRequest,
  ListSelectDocRequest,
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
   * 本接口为异步接口的查询结果接口，用于获取文档解析处理结果。
   */
  async GetReconstructDocumentResult(
    req: GetReconstructDocumentResultRequest,
    cb?: (error: string, rep: GetReconstructDocumentResultResponse) => void
  ): Promise<GetReconstructDocumentResultResponse> {
    return this.request("GetReconstructDocumentResult", req, cb)
  }

  /**
   * 获取账户信息
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
   * 终止文档解析
   */
  async StopDocParse(
    req: StopDocParseRequest,
    cb?: (error: string, rep: StopDocParseResponse) => void
  ): Promise<StopDocParseResponse> {
    return this.request("StopDocParse", req, cb)
  }

  /**
   * 创建属性
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
     * 产品规划

接口支持图片和PDF转可编辑word格式文件，将文件中的图片、文本、表格等元素识别，并根据位置进行还原。
     */
  async ConvertDocument(
    req: ConvertDocumentRequest,
    cb?: (error: string, rep: ConvertDocumentResponse) => void
  ): Promise<ConvertDocumentResponse> {
    return this.request("ConvertDocument", req, cb)
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
   * 基于知识引擎精调模型技术的rerank模型，支持对多路召回的结果进行重排序，根据query与切片内容的相关性，按分数由高到低对切片进行排序，并输出对应的打分结果。
   */
  async RunReRank(
    req: RunReRankRequest,
    cb?: (error: string, rep: RunReRankResponse) => void
  ): Promise<RunReRankResponse> {
    return this.request("RunReRank", req, cb)
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
   * 查询搜索服务调用折线图
   */
  async DescribeSearchStatsGraph(
    req: DescribeSearchStatsGraphRequest,
    cb?: (error: string, rep: DescribeSearchStatsGraphResponse) => void
  ): Promise<DescribeSearchStatsGraphResponse> {
    return this.request("DescribeSearchStatsGraph", req, cb)
  }

  /**
     * 接口已迁移到新接口了，无调用量

查询文档解析结果。该接口需开通文档解析原子能力后调用。文档解析原子能力内测中，如有需要请联系架构师或[联系客服](https://cloud.tencent.com/act/event/Online_service) 。
     */
  async QueryParseDocResult(
    req: QueryParseDocResultRequest,
    cb?: (error: string, rep: QueryParseDocResultResponse) => void
  ): Promise<QueryParseDocResultResponse> {
    return this.request("QueryParseDocResult", req, cb)
  }

  /**
   * 校验问答
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
   * 企业详情
   */
  async DescribeCorp(
    req?: DescribeCorpRequest,
    cb?: (error: string, rep: DescribeCorpResponse) => void
  ): Promise<DescribeCorpResponse> {
    return this.request("DescribeCorp", req, cb)
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
   */
  async ListQACate(
    req: ListQACateRequest,
    cb?: (error: string, rep: ListQACateResponse) => void
  ): Promise<ListQACateResponse> {
    return this.request("ListQACate", req, cb)
  }

  /**
   * 应用类型列表
   */
  async ListAppCategory(
    req?: ListAppCategoryRequest,
    cb?: (error: string, rep: ListAppCategoryResponse) => void
  ): Promise<ListAppCategoryResponse> {
    return this.request("ListAppCategory", req, cb)
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
   * 创建QA分类
   */
  async CreateQACate(
    req: CreateQACateRequest,
    cb?: (error: string, rep: CreateQACateResponse) => void
  ): Promise<CreateQACateResponse> {
    return this.request("CreateQACate", req, cb)
  }

  /**
   * 导出属性标签
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
   * 通过appKey获取应用业务ID
   */
  async DescribeRobotBizIDByAppKey(
    req: DescribeRobotBizIDByAppKeyRequest,
    cb?: (error: string, rep: DescribeRobotBizIDByAppKeyResponse) => void
  ): Promise<DescribeRobotBizIDByAppKeyResponse> {
    return this.request("DescribeRobotBizIDByAppKey", req, cb)
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
   * 问答列表
   */
  async ListQA(
    req: ListQARequest,
    cb?: (error: string, rep: ListQAResponse) => void
  ): Promise<ListQAResponse> {
    return this.request("ListQA", req, cb)
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
   * 修改Doc分类
   */
  async ModifyDocCate(
    req: ModifyDocCateRequest,
    cb?: (error: string, rep: ModifyDocCateResponse) => void
  ): Promise<ModifyDocCateResponse> {
    return this.request("ModifyDocCate", req, cb)
  }

  /**
   * 导出QA列表
   */
  async ExportQAList(
    req: ExportQAListRequest,
    cb?: (error: string, rep: ExportQAListResponse) => void
  ): Promise<ExportQAListResponse> {
    return this.request("ExportQAList", req, cb)
  }

  /**
     * 本接口为异步接口的发起请求接口，用于发起文档解析任务。
文档解析支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
  async CreateReconstructDocumentFlow(
    req: CreateReconstructDocumentFlowRequest,
    cb?: (error: string, rep: CreateReconstructDocumentFlowResponse) => void
  ): Promise<CreateReconstructDocumentFlowResponse> {
    return this.request("CreateReconstructDocumentFlow", req, cb)
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
     * 接口已迁移到新接口了，无调用量

接口即将下线，请切换使用新接口：[文档解析](https://cloud.tencent.com/document/product/1759/107504)
     */
  async ParseDoc(
    req: ParseDocRequest,
    cb?: (error: string, rep: ParseDocResponse) => void
  ): Promise<ParseDocResponse> {
    return this.request("ParseDoc", req, cb)
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
   * 拉取发布按钮状态、最后发布时间
   */
  async DescribeReleaseInfo(
    req: DescribeReleaseInfoRequest,
    cb?: (error: string, rep: DescribeReleaseInfoResponse) => void
  ): Promise<DescribeReleaseInfoResponse> {
    return this.request("DescribeReleaseInfo", req, cb)
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
   * 保存文档
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
     * 多轮改写（QueryRewrite）主要用于多轮对话中，进行指代消解和省略补全。使用本接口，无需输入prompt描述，根据对话历史即可生成更精确的用户查询。在应用场景上，本接口可应用于智能问答、对话式搜索等多种场景。
本接口（QueryRewrite）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
  async QueryRewrite(
    req: QueryRewriteRequest,
    cb?: (error: string, rep: QueryRewriteResponse) => void
  ): Promise<QueryRewriteResponse> {
    return this.request("QueryRewrite", req, cb)
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
   * 修改应用请求结构体
   */
  async ModifyApp(
    req: ModifyAppRequest,
    cb?: (error: string, rep: ModifyAppResponse) => void
  ): Promise<ModifyAppResponse> {
    return this.request("ModifyApp", req, cb)
  }

  /**
     * 本接口（GetEmbedding）调用文本表示模型，将文本转化为用数值表示的向量形式，可用于文本检索、信息推荐、知识挖掘等场景。
本接口（GetEmbedding）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
  async GetEmbedding(
    req: GetEmbeddingRequest,
    cb?: (error: string, rep: GetEmbeddingResponse) => void
  ): Promise<GetEmbeddingResponse> {
    return this.request("GetEmbedding", req, cb)
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
   * 创建企业
   */
  async CreateCorp(
    req: CreateCorpRequest,
    cb?: (error: string, rep: CreateCorpResponse) => void
  ): Promise<CreateCorpResponse> {
    return this.request("CreateCorp", req, cb)
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
   * 获取聊天历史请求
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
   * QA分组
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
     * 支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
  async ReconstructDocument(
    req: ReconstructDocumentRequest,
    cb?: (error: string, rep: ReconstructDocumentResponse) => void
  ): Promise<ReconstructDocumentResponse> {
    return this.request("ReconstructDocument", req, cb)
  }

  /**
   * 重置会话
   */
  async ResetSession(
    req: ResetSessionRequest,
    cb?: (error: string, rep: ResetSessionResponse) => void
  ): Promise<ResetSessionResponse> {
    return this.request("ResetSession", req, cb)
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
   * 忽略不满意回复
   */
  async IgnoreUnsatisfiedReply(
    req: IgnoreUnsatisfiedReplyRequest,
    cb?: (error: string, rep: IgnoreUnsatisfiedReplyResponse) => void
  ): Promise<IgnoreUnsatisfiedReplyResponse> {
    return this.request("IgnoreUnsatisfiedReply", req, cb)
  }
}
