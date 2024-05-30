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
  CheckAttributeLabelExistRequest,
  AttributeFilters,
  DescribeQAResponse,
  GetWsTokenReq_Label,
  GetAppKnowledgeCountRequest,
  ResetSessionResponse,
  ListSelectDocResponse,
  DescribeReleaseInfoRequest,
  DeleteDocRequest,
  DescribeAppResponse,
  UploadAttributeLabelResponse,
  MsgRecord,
  ListUnsatisfiedReplyResponse,
  ExportAttributeLabelResponse,
  ExportQAListResponse,
  GetAppSecretResponse,
  UnsatisfiedReply,
  CreateQACateResponse,
  ModifyDocAttrRangeResponse,
  GetMsgRecordResponse,
  AttrLabelRefer,
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
  ReferDetail,
  ListUnsatisfiedReplyRequest,
  DeleteQARequest,
  ParseDocRequest,
  ListReleaseRequest,
  ListModelRequest,
  SummaryOutput,
  ModifyAppResponse,
  ListDocResponse,
  ModifyQARequest,
  TaskFlowInfo,
  GetDocPreviewRequest,
  ListRejectedQuestionPreviewResponse,
  DescribeCorpRequest,
  ListAppCategoryResponse,
  CreateAppResponse,
  DescribeAttributeLabelRequest,
  CreateQARequest,
  CreateCorpRequest,
  RetryDocParseRequest,
  QueryRewriteResponse,
  ListQaItem,
  DeleteAttributeLabelRequest,
  DescribeRobotBizIDByAppKeyResponse,
  DescribeDocResponse,
  CreateReleaseRequest,
  Label,
  KnowledgeQaOutput,
  CheckAttributeLabelReferRequest,
  ModifyQACateRequest,
  ModifyAttributeLabelRequest,
  VerifyQARequest,
  AttributeLabel,
  Option,
  Usage,
  ResetSessionRequest,
  GetAppSecretRequest,
  DeleteQACateResponse,
  QueryParseDocResultResponse,
  ListReleaseDocPreviewResponse,
  SummaryConfig,
  GenerateQAResponse,
  GetTaskStatusResponse,
  DescribeDocRequest,
  RetryDocAuditRequest,
  SaveDocRequest,
  ModifyQACateResponse,
  DescribeAttributeLabelResponse,
  ModifyAttributeLabelResponse,
  ListQACateResponse,
  RetryDocParseResponse,
  CreateRejectedQuestionResponse,
  GetEmbeddingResponse,
  ExportUnsatisfiedReplyRequest,
  GroupQAResponse,
  RetryReleaseRequest,
  CreateAppRequest,
  AppConfig,
  DescribeReleaseRequest,
  ReleaseQA,
  ListAppCategoryRequest,
  ListReleaseConfigPreviewRequest,
  ListReleaseQAPreviewResponse,
  ModifyRejectedQuestionResponse,
  ListReleaseDocPreviewRequest,
  DescribeUnsatisfiedReplyContextResponse,
  Message,
  ExportUnsatisfiedReplyResponse,
  RateMsgRecordResponse,
  AttrLabelDetail,
  DescribeReferResponse,
  Context,
  ListDocRequest,
  GetEmbeddingRequest,
  GroupQARequest,
  IsTransferIntentResponse,
  DescribeQARequest,
  DescribeAppRequest,
  ListQAResponse,
  IgnoreUnsatisfiedReplyRequest,
  DescribeReleaseResponse,
  TaskParams,
  ListDocItem,
  RateMsgRecordRequest,
  AppModel,
  ClassifyLabel,
  RetryDocAuditResponse,
  RetryReleaseResponse,
  SaveDocResponse,
  DeleteRejectedQuestionResponse,
  Credentials,
  CreateAttributeLabelRequest,
  ListAppResponse,
  AppInfo,
  QueryParseDocResultRequest,
  KnowledgeQaConfig,
  RejectedQuestion,
  MsgRecordReference,
  ListRejectedQuestionPreviewRequest,
  ListReleaseConfigPreviewResponse,
  ModelInfo,
  DeleteRejectedQuestionRequest,
  Highlight,
  ExportQAListRequest,
  GetDocPreviewResponse,
  CreateReleaseResponse,
  QueryRewriteRequest,
  ModifyAppRequest,
  DeleteAttributeLabelResponse,
  DeleteQACateRequest,
  GenerateQARequest,
  GetWsTokenRequest,
  QACate,
  EmbeddingObject,
  ModifyDocRequest,
  DeleteAppResponse,
  ListAttributeLabelRequest,
  DeleteDocResponse,
  BaseConfig,
  ClassifyConfig,
  UploadAttributeLabelRequest,
  ExportAttributeLabelRequest,
  GetAppKnowledgeCountResponse,
  CreateAttributeLabelResponse,
  CreateQAResponse,
  StopDocParseResponse,
  ParseDocResponse,
  ListQACateRequest,
  ListReleaseQAPreviewRequest,
  DescribeReleaseInfoResponse,
  IsTransferIntentRequest,
  DescribeReferRequest,
  DeleteAppRequest,
  TokenStat,
  ListAppCategoryRspOption,
  DescribeStorageCredentialRequest,
  QAList,
  DescribeCorpResponse,
  ListReleaseResponse,
  ListModelResponse,
  ListAttributeLabelResponse,
  ListReleaseItem,
  ModifyQAResponse,
  DeleteQAResponse,
  GetMsgRecordRequest,
  DescribeStorageCredentialResponse,
  CheckAttributeLabelExistResponse,
  GetTaskStatusRequest,
  CheckAttributeLabelReferResponse,
  ModifyDocAttrRangeRequest,
  ReleaseRejectedQuestion,
  CreateQACateRequest,
  DescribeRobotBizIDByAppKeyRequest,
  CreateRejectedQuestionRequest,
  ListRejectedQuestionRequest,
  VerifyQAResponse,
  ReleaseConfigs,
  Filters,
  ModifyRejectedQuestionRequest,
  IgnoreUnsatisfiedReplyResponse,
  StopDocParseRequest,
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
   * 文档列表
   */
  async ListDoc(
    req: ListDocRequest,
    cb?: (error: string, rep: ListDocResponse) => void
  ): Promise<ListDocResponse> {
    return this.request("ListDoc", req, cb)
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
   * 保存文档
   */
  async SaveDoc(
    req: SaveDocRequest,
    cb?: (error: string, rep: SaveDocResponse) => void
  ): Promise<SaveDocResponse> {
    return this.request("SaveDoc", req, cb)
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
   * 检查属性下的标签名是否存在
   */
  async CheckAttributeLabelExist(
    req: CheckAttributeLabelExistRequest,
    cb?: (error: string, rep: CheckAttributeLabelExistResponse) => void
  ): Promise<CheckAttributeLabelExistResponse> {
    return this.request("CheckAttributeLabelExist", req, cb)
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
   * 文档详情
   */
  async DescribeDoc(
    req: DescribeDocRequest,
    cb?: (error: string, rep: DescribeDocResponse) => void
  ): Promise<DescribeDocResponse> {
    return this.request("DescribeDoc", req, cb)
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
   * 获取账户信息
   */
  async ListSelectDoc(
    req: ListSelectDocRequest,
    cb?: (error: string, rep: ListSelectDocResponse) => void
  ): Promise<ListSelectDocResponse> {
    return this.request("ListSelectDoc", req, cb)
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
   * 更新问答
   */
  async ModifyQA(
    req: ModifyQARequest,
    cb?: (error: string, rep: ModifyQAResponse) => void
  ): Promise<ModifyQAResponse> {
    return this.request("ModifyQA", req, cb)
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
   * 获取文件上传临时密钥
   */
  async DescribeStorageCredential(
    req: DescribeStorageCredentialRequest,
    cb?: (error: string, rep: DescribeStorageCredentialResponse) => void
  ): Promise<DescribeStorageCredentialResponse> {
    return this.request("DescribeStorageCredential", req, cb)
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
   * 文档解析重试
   */
  async RetryDocAudit(
    req: RetryDocAuditRequest,
    cb?: (error: string, rep: RetryDocAuditResponse) => void
  ): Promise<RetryDocAuditResponse> {
    return this.request("RetryDocAudit", req, cb)
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
   * 发布列表
   */
  async ListRelease(
    req: ListReleaseRequest,
    cb?: (error: string, rep: ListReleaseResponse) => void
  ): Promise<ListReleaseResponse> {
    return this.request("ListRelease", req, cb)
  }

  /**
   * 是否意图转人工
   */
  async RateMsgRecord(
    req: RateMsgRecordRequest,
    cb?: (error: string, rep: RateMsgRecordResponse) => void
  ): Promise<RateMsgRecordResponse> {
    return this.request("RateMsgRecord", req, cb)
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
   * 删除问答
   */
  async DeleteQA(
    req: DeleteQARequest,
    cb?: (error: string, rep: DeleteQAResponse) => void
  ): Promise<DeleteQAResponse> {
    return this.request("DeleteQA", req, cb)
  }

  /**
   * 通过appKey获取机器人业务ID
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
  async ListReleaseQAPreview(
    req: ListReleaseQAPreviewRequest,
    cb?: (error: string, rep: ListReleaseQAPreviewResponse) => void
  ): Promise<ListReleaseQAPreviewResponse> {
    return this.request("ListReleaseQAPreview", req, cb)
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
   * 修改应用请求结构体
   */
  async ModifyApp(
    req: ModifyAppRequest,
    cb?: (error: string, rep: ModifyAppResponse) => void
  ): Promise<ModifyAppResponse> {
    return this.request("ModifyApp", req, cb)
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
   * 修改拒答问题
   */
  async ModifyRejectedQuestion(
    req: ModifyRejectedQuestionRequest,
    cb?: (error: string, rep: ModifyRejectedQuestionResponse) => void
  ): Promise<ModifyRejectedQuestionResponse> {
    return this.request("ModifyRejectedQuestion", req, cb)
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
   * 创建属性
   */
  async CreateAttributeLabel(
    req: CreateAttributeLabelRequest,
    cb?: (error: string, rep: CreateAttributeLabelResponse) => void
  ): Promise<CreateAttributeLabelResponse> {
    return this.request("CreateAttributeLabel", req, cb)
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
   * 上传导入属性标签
   */
  async UploadAttributeLabel(
    req: UploadAttributeLabelRequest,
    cb?: (error: string, rep: UploadAttributeLabelResponse) => void
  ): Promise<UploadAttributeLabelResponse> {
    return this.request("UploadAttributeLabel", req, cb)
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
   * 获取文档预览信息
   */
  async GetDocPreview(
    req: GetDocPreviewRequest,
    cb?: (error: string, rep: GetDocPreviewResponse) => void
  ): Promise<GetDocPreviewResponse> {
    return this.request("GetDocPreview", req, cb)
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
   * 创建企业
   */
  async CreateCorp(
    req: CreateCorpRequest,
    cb?: (error: string, rep: CreateCorpResponse) => void
  ): Promise<CreateCorpResponse> {
    return this.request("CreateCorp", req, cb)
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
   * 发布详情
   */
  async DescribeRelease(
    req: DescribeReleaseRequest,
    cb?: (error: string, rep: DescribeReleaseResponse) => void
  ): Promise<DescribeReleaseResponse> {
    return this.request("DescribeRelease", req, cb)
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
   * 文档解析重试
   */
  async RetryDocParse(
    req: RetryDocParseRequest,
    cb?: (error: string, rep: RetryDocParseResponse) => void
  ): Promise<RetryDocParseResponse> {
    return this.request("RetryDocParse", req, cb)
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
   * 录入问答
   */
  async CreateQA(
    req: CreateQARequest,
    cb?: (error: string, rep: CreateQAResponse) => void
  ): Promise<CreateQAResponse> {
    return this.request("CreateQA", req, cb)
  }

  /**
   * 查询文档解析结果。该接口需开通文档解析原子能力后调用。文档解析原子能力内测中，如有需要请联系架构师或[联系客服](https://cloud.tencent.com/act/event/Online_service) 。
   */
  async QueryParseDocResult(
    req: QueryParseDocResultRequest,
    cb?: (error: string, rep: QueryParseDocResultResponse) => void
  ): Promise<QueryParseDocResultResponse> {
    return this.request("QueryParseDocResult", req, cb)
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
   * 获取QA分类
   */
  async ListQACate(
    req: ListQACateRequest,
    cb?: (error: string, rep: ListQACateResponse) => void
  ): Promise<ListQACateResponse> {
    return this.request("ListQACate", req, cb)
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
   * 文档生成问答
   */
  async GenerateQA(
    req: GenerateQARequest,
    cb?: (error: string, rep: GenerateQAResponse) => void
  ): Promise<GenerateQAResponse> {
    return this.request("GenerateQA", req, cb)
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
   * 获取企业下应用详情
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
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
   * 是否意图转人工
   */
  async IsTransferIntent(
    req: IsTransferIntentRequest,
    cb?: (error: string, rep: IsTransferIntentResponse) => void
  ): Promise<IsTransferIntentResponse> {
    return this.request("IsTransferIntent", req, cb)
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
   * 获取推荐问题
   */
  async GetMsgRecord(
    req: GetMsgRecordRequest,
    cb?: (error: string, rep: GetMsgRecordResponse) => void
  ): Promise<GetMsgRecordResponse> {
    return this.request("GetMsgRecord", req, cb)
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
   * 解析拆分文档。该接口需开通文档解析原子能力后调用。文档解析原子能力内测中，如有需要请联系架构师或 [联系客服](https://cloud.tencent.com/act/event/Online_service)  。
   */
  async ParseDoc(
    req: ParseDocRequest,
    cb?: (error: string, rep: ParseDocResponse) => void
  ): Promise<ParseDocResponse> {
    return this.request("ParseDoc", req, cb)
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
   * 创建企业
   */
  async DeleteDoc(
    req: DeleteDocRequest,
    cb?: (error: string, rep: DeleteDocResponse) => void
  ): Promise<DeleteDocResponse> {
    return this.request("DeleteDoc", req, cb)
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
   * 校验问答
   */
  async VerifyQA(
    req: VerifyQARequest,
    cb?: (error: string, rep: VerifyQAResponse) => void
  ): Promise<VerifyQAResponse> {
    return this.request("VerifyQA", req, cb)
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
   * 获取拒答问题
   */
  async ListRejectedQuestion(
    req: ListRejectedQuestionRequest,
    cb?: (error: string, rep: ListRejectedQuestionResponse) => void
  ): Promise<ListRejectedQuestionResponse> {
    return this.request("ListRejectedQuestion", req, cb)
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
   * 获取任务状态
   */
  async GetTaskStatus(
    req: GetTaskStatusRequest,
    cb?: (error: string, rep: GetTaskStatusResponse) => void
  ): Promise<GetTaskStatusResponse> {
    return this.request("GetTaskStatus", req, cb)
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
   * 创建QA分类
   */
  async CreateQACate(
    req: CreateQACateRequest,
    cb?: (error: string, rep: CreateQACateResponse) => void
  ): Promise<CreateQACateResponse> {
    return this.request("CreateQACate", req, cb)
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
   * 重置会话
   */
  async ResetSession(
    req: ResetSessionRequest,
    cb?: (error: string, rep: ResetSessionResponse) => void
  ): Promise<ResetSessionResponse> {
    return this.request("ResetSession", req, cb)
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
   * 发布暂停后重试
   */
  async RetryRelease(
    req: RetryReleaseRequest,
    cb?: (error: string, rep: RetryReleaseResponse) => void
  ): Promise<RetryReleaseResponse> {
    return this.request("RetryRelease", req, cb)
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
   * 忽略不满意回复
   */
  async IgnoreUnsatisfiedReply(
    req: IgnoreUnsatisfiedReplyRequest,
    cb?: (error: string, rep: IgnoreUnsatisfiedReplyResponse) => void
  ): Promise<IgnoreUnsatisfiedReplyResponse> {
    return this.request("IgnoreUnsatisfiedReply", req, cb)
  }
}
