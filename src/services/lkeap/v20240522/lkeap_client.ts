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
  CreateSplitDocumentFlowRequest,
  ImportQAsResponse,
  RetrievalRecordMetadata,
  ListQAsRequest,
  ReconstructDocumentSSEResponse,
  DocItem,
  GetEmbeddingRequest,
  UploadDocRealtimeRequest,
  DescribeDocResponse,
  AttributeLabelReferItem,
  DeleteQAsRequest,
  ModifyQARequest,
  Usage,
  GetReconstructDocumentResultRequest,
  ListQAsResponse,
  DeleteAttributeLabelsResponse,
  RetrievalSetting,
  ListDocsRequest,
  CreateAttributeLabelResponse,
  RetrieveKnowledgeResponse,
  CreateSplitDocumentFlowResponse,
  SegmentationConfig,
  CreateQAResponse,
  ModifyAttributeLabelRequest,
  ReconstructDocumentSSEConfig,
  ListDocsResponse,
  DocumentUsage,
  ListAttributeLabelsRequest,
  DeleteAttributeLabelsRequest,
  RetrieveKnowledgeRequest,
  GetReconstructDocumentResultResponse,
  CreateReconstructDocumentFlowConfig,
  RunRerankRequest,
  GetSplitDocumentResultRequest,
  ReconstructDocumentSSERequest,
  ListAttributeLabelsResponse,
  RetrievalRecord,
  AttributeLabelItem,
  CreateAttributeLabelRequest,
  ImportQAsRequest,
  DescribeDocRequest,
  DeleteKnowledgeBaseResponse,
  DeleteDocsResponse,
  LabelItem,
  CreateReconstructDocumentFlowRequest,
  GetSplitDocumentResultResponse,
  ModifyQAResponse,
  ReconstructDocumentFailedPage,
  UploadDocRealtimeResponse,
  SplitDocumentFailedPage,
  ModifyAttributeLabelResponse,
  UploadDocRequest,
  DeleteQAsResponse,
  CreateKnowledgeBaseResponse,
  GetEmbeddingResponse,
  QueryRewriteRequest,
  QaItem,
  CreateSplitDocumentFlowConfig,
  RunRerankResponse,
  CreateReconstructDocumentFlowResponse,
  QueryRewriteResponse,
  CreateQARequest,
  UploadDocResponse,
  AttributeItem,
  EmbeddingObject,
  Message,
  CreateKnowledgeBaseRequest,
  DeleteKnowledgeBaseRequest,
  DeleteDocsRequest,
} from "./lkeap_models"

/**
 * lkeap client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("lkeap.tencentcloudapi.com", "2024-05-22", clientConfig)
  }

  /**
   * 用于检索知识库中的文档和问答对内容。 使用场景：适用于查询长期存储在知识库中的文档和问答对，比如产品手册、用户指南等内容的检索。
   */
  async RetrieveKnowledge(
    req: RetrieveKnowledgeRequest,
    cb?: (error: string, rep: RetrieveKnowledgeResponse) => void
  ): Promise<RetrieveKnowledgeResponse> {
    return this.request("RetrieveKnowledge", req, cb)
  }

  /**
   * 用于修改已有的问答对。 使用场景：当需要更新问答对的内容或答案时使用。
   */
  async ModifyQA(
    req: ModifyQARequest,
    cb?: (error: string, rep: ModifyQAResponse) => void
  ): Promise<ModifyQAResponse> {
    return this.request("ModifyQA", req, cb)
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
   * 查询文档拆分任务结果
   */
  async GetSplitDocumentResult(
    req: GetSplitDocumentResultRequest,
    cb?: (error: string, rep: GetSplitDocumentResultResponse) => void
  ): Promise<GetSplitDocumentResultResponse> {
    return this.request("GetSplitDocumentResult", req, cb)
  }

  /**
   * 用于查询特定文档的详细信息。 使用场景：当需要查看某个文档的具体内容和属性时使用。
   */
  async DescribeDoc(
    req?: DescribeDocRequest,
    cb?: (error: string, rep: DescribeDocResponse) => void
  ): Promise<DescribeDocResponse> {
    return this.request("DescribeDoc", req, cb)
  }

  /**
   * 准实时文档解析接口，使用HTTP SSE 协议通信。
   */
  async ReconstructDocumentSSE(
    req: ReconstructDocumentSSERequest,
    cb?: (error: string, rep: ReconstructDocumentSSEResponse) => void
  ): Promise<ReconstructDocumentSSEResponse> {
    return this.request("ReconstructDocumentSSE", req, cb)
  }

  /**
   * 用于删除已有的文档。 使用场景：当某个文档不再需要时，可以将其删除以保持文档库的整洁。
   */
  async DeleteDocs(
    req?: DeleteDocsRequest,
    cb?: (error: string, rep: DeleteDocsResponse) => void
  ): Promise<DeleteDocsResponse> {
    return this.request("DeleteDocs", req, cb)
  }

  /**
   * 用于删除已有的问答对。 使用场景：当某个问答对不再适用或需要移除时使用。
   */
  async DeleteQAs(
    req?: DeleteQAsRequest,
    cb?: (error: string, rep: DeleteQAsResponse) => void
  ): Promise<DeleteQAsResponse> {
    return this.request("DeleteQAs", req, cb)
  }

  /**
     * 多轮改写（QueryRewrite）主要用于多轮对话中，进行指代消解和省略补全。使用本接口，无需输入prompt描述，根据对话历史即可生成更精确的用户查询。在应用场景上，本接口可应用于智能问答、对话式搜索等多种场景。
开通[产品体验](https://lke.cloud.tencent.com/lke/#/trialProduct)后可获得50wtoken体验额度。本接口（QueryRewrite）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
  async QueryRewrite(
    req: QueryRewriteRequest,
    cb?: (error: string, rep: QueryRewriteResponse) => void
  ): Promise<QueryRewriteResponse> {
    return this.request("QueryRewrite", req, cb)
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
   * 用于修改已有的属性标签。 使用场景：当需要更改属性标签的名称或描述时使用，比如将“售后”标签改为“售前”。
   */
  async ModifyAttributeLabel(
    req: ModifyAttributeLabelRequest,
    cb?: (error: string, rep: ModifyAttributeLabelResponse) => void
  ): Promise<ModifyAttributeLabelResponse> {
    return this.request("ModifyAttributeLabel", req, cb)
  }

  /**
   * 基于知识引擎精调模型技术的rerank模型，支持对多路召回的结果进行重排序，根据query与切片内容的相关性，按分数由高到低对切片进行排序，并输出对应的打分结果。
   */
  async RunRerank(
    req: RunRerankRequest,
    cb?: (error: string, rep: RunRerankResponse) => void
  ): Promise<RunRerankResponse> {
    return this.request("RunRerank", req, cb)
  }

  /**
   * 用于获取所有问答对的列表。 使用场景：用于查看当前系统中所有已有的问答对，方便进行管理和维护。
   */
  async ListQAs(
    req?: ListQAsRequest,
    cb?: (error: string, rep: ListQAsResponse) => void
  ): Promise<ListQAsResponse> {
    return this.request("ListQAs", req, cb)
  }

  /**
   * 用于删除不再需要的属性标签。 使用场景：当某个标签不再使用时，可以将其删除以保持标签系统的整洁。
   */
  async DeleteAttributeLabels(
    req?: DeleteAttributeLabelsRequest,
    cb?: (error: string, rep: DeleteAttributeLabelsResponse) => void
  ): Promise<DeleteAttributeLabelsResponse> {
    return this.request("DeleteAttributeLabels", req, cb)
  }

  /**
   * 用于为问答对创建属性标签，以便对内容进行分类和管理。 使用场景：当需要为问答对添加分类标签和属性标记时使用，比如为问答对添加“售后”标签。
   */
  async CreateAttributeLabel(
    req: CreateAttributeLabelRequest,
    cb?: (error: string, rep: CreateAttributeLabelResponse) => void
  ): Promise<CreateAttributeLabelResponse> {
    return this.request("CreateAttributeLabel", req, cb)
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
   * 用于获取所有属性标签的列表。 使用场景：用于查看当前系统中所有已有的属性标签，方便进行管理和维护。
   */
  async ListAttributeLabels(
    req?: ListAttributeLabelsRequest,
    cb?: (error: string, rep: ListAttributeLabelsResponse) => void
  ): Promise<ListAttributeLabelsResponse> {
    return this.request("ListAttributeLabels", req, cb)
  }

  /**
   * 用于获取所有文档的列表。 使用场景：用于查看当前系统中所有已有的文档，方便进行管理和维护。
   */
  async ListDocs(
    req?: ListDocsRequest,
    cb?: (error: string, rep: ListDocsResponse) => void
  ): Promise<ListDocsResponse> {
    return this.request("ListDocs", req, cb)
  }

  /**
   * 用于在系统中创建一个新的知识库。知识库是一个用于存储和管理知识条目的集合，可以包括文档、问答对、属性标签等。创建知识库后，可以向其中添加各种知识条目，以便在后续的知识检索中使用。 使用场景：当需要在系统中建立一个新的知识库以存储和管理特定领域或项目的知识条目时使用。例如，一个用户可能需要创建一个知识库，以存储用户指南、常见问题解答和技术文档。
   */
  async CreateKnowledgeBase(
    req?: CreateKnowledgeBaseRequest,
    cb?: (error: string, rep: CreateKnowledgeBaseResponse) => void
  ): Promise<CreateKnowledgeBaseResponse> {
    return this.request("CreateKnowledgeBase", req, cb)
  }

  /**
   * 用于批量导入问答对，最多支持50,000条数据导入。通过此接口，可以将多个问答对一次性导入系统中，以便在后续的知识检索中使用。导入的问答对可以来自外部系统、文件或其他数据源。使用场景：当需要一次性导入大量的问答对时使用。例如，一个公司可能需要将其产品的常见问题解答从一个文档或外部系统批量导入到知识库中，以便用户可以通过知识检索系统进行查询。
   */
  async ImportQAs(
    req?: ImportQAsRequest,
    cb?: (error: string, rep: ImportQAsResponse) => void
  ): Promise<ImportQAsResponse> {
    return this.request("ImportQAs", req, cb)
  }

  /**
   * 用于创建新的问答对。问答对可以在SearchKnowledge接口知识检索时提供匹配的答案。 使用场景：当需要添加新的知识点和对应的问答对时使用，比如为产品添加新的常见问题解答。
   */
  async CreateQA(
    req: CreateQARequest,
    cb?: (error: string, rep: CreateQAResponse) => void
  ): Promise<CreateQAResponse> {
    return this.request("CreateQA", req, cb)
  }

  /**
   * 用于从系统中删除一个现有的知识库。删除知识库将移除该知识库及其所有关联的知识条目（如文档、问答对、属性标签等）。该操作是不可逆的，请在执行前确认是否需要删除。**使用场景**：当某个知识库不再需要时，可以使用此接口将其从系统中删除。例如，一个项目结束后，其相关的知识库可能不再需要存储，可以使用该接口进行删除。
   */
  async DeleteKnowledgeBase(
    req: DeleteKnowledgeBaseRequest,
    cb?: (error: string, rep: DeleteKnowledgeBaseResponse) => void
  ): Promise<DeleteKnowledgeBaseResponse> {
    return this.request("DeleteKnowledgeBase", req, cb)
  }

  /**
   * 创建文档拆分任务
   */
  async CreateSplitDocumentFlow(
    req: CreateSplitDocumentFlowRequest,
    cb?: (error: string, rep: CreateSplitDocumentFlowResponse) => void
  ): Promise<CreateSplitDocumentFlowResponse> {
    return this.request("CreateSplitDocumentFlow", req, cb)
  }

  /**
   * 用于上传实时文档内容。实时文档在上传后可以立即通过SearchRealtime进行实时检索，适用于在会话中对文档进行问答的场景。
   */
  async UploadDocRealtime(
    req?: UploadDocRealtimeRequest,
    cb?: (error: string, rep: UploadDocRealtimeResponse) => void
  ): Promise<UploadDocRealtimeResponse> {
    return this.request("UploadDocRealtime", req, cb)
  }

  /**
     * 用于上传文档内容。上传的文档将存储在知识库中，可以通过SearchKnowledge知识库内容检索接口进行检索。 
使用场景：适用于需要长期存储和检索的文档内容，如产品手册、用户指南等。
     */
  async UploadDoc(
    req: UploadDocRequest,
    cb?: (error: string, rep: UploadDocResponse) => void
  ): Promise<UploadDocResponse> {
    return this.request("UploadDoc", req, cb)
  }
}
