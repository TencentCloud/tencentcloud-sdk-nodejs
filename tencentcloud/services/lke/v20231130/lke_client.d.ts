import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyQAAttrRangeResponse, GetWsTokenResponse, CheckAttributeLabelExistRequest, DescribeQAResponse, GetAppKnowledgeCountRequest, ResetSessionResponse, ListSelectDocResponse, DescribeReleaseInfoRequest, DeleteDocRequest, GetAnswerTypeDataCountRequest, DescribeAppResponse, UploadAttributeLabelResponse, ListUnsatisfiedReplyResponse, ExportAttributeLabelResponse, ExportQAListResponse, GetAppSecretResponse, ListRejectedQuestionRequest, CreateQACateResponse, ModifyDocAttrRangeResponse, GetAnswerTypeDataCountResponse, DescribeQARequest, DescribeUnsatisfiedReplyContextRequest, ListAppRequest, ModifyQAAttrRangeRequest, ListRejectedQuestionResponse, ModifyDocResponse, CreateCorpResponse, ListQARequest, ListUnsatisfiedReplyRequest, DeleteQARequest, GetLikeDataCountResponse, ListReleaseRequest, ListModelRequest, ModifyAppResponse, ListDocResponse, ModifyQARequest, GetDocPreviewRequest, ListRejectedQuestionPreviewResponse, DescribeCorpRequest, ListAppCategoryResponse, CreateAppResponse, DescribeAttributeLabelRequest, CreateQARequest, CreateCorpRequest, RetryDocParseRequest, QueryRewriteResponse, DeleteAttributeLabelRequest, DescribeRobotBizIDByAppKeyResponse, ReconstructDocumentResponse, DescribeDocResponse, CreateReleaseRequest, CheckAttributeLabelReferRequest, ModifyQACateRequest, ModifyAttributeLabelRequest, ResetSessionRequest, GetAppSecretRequest, DeleteQACateResponse, QueryParseDocResultResponse, ListReleaseDocPreviewResponse, GenerateQAResponse, GetTaskStatusResponse, DescribeDocRequest, ConvertDocumentResponse, RetryDocAuditRequest, SaveDocRequest, ModifyQACateResponse, DescribeAttributeLabelResponse, ModifyAttributeLabelResponse, ListQACateResponse, RetryDocParseResponse, CreateRejectedQuestionResponse, GetEmbeddingResponse, ExportUnsatisfiedReplyRequest, GroupQAResponse, CreateAppRequest, DescribeReleaseRequest, ListAppCategoryRequest, ListReleaseConfigPreviewRequest, ListReleaseQAPreviewResponse, ModifyRejectedQuestionResponse, ListReleaseDocPreviewRequest, DescribeUnsatisfiedReplyContextResponse, ExportUnsatisfiedReplyResponse, RateMsgRecordResponse, DescribeReferResponse, ListDocRequest, GetEmbeddingRequest, GroupQARequest, RateMsgRecordRequest, IsTransferIntentResponse, GetMsgRecordResponse, DescribeAppRequest, GetReconstructDocumentResultRequest, ListQAResponse, IgnoreUnsatisfiedReplyRequest, DescribeReleaseResponse, ConvertDocumentRequest, ParseDocRequest, ReconstructDocumentRequest, RetryDocAuditResponse, GetReconstructDocumentResultResponse, GetLikeDataCountRequest, DeleteRejectedQuestionResponse, CreateAttributeLabelRequest, ListAppResponse, CreateReconstructDocumentFlowRequest, QueryParseDocResultRequest, ListRejectedQuestionPreviewRequest, ListReleaseConfigPreviewResponse, DeleteRejectedQuestionRequest, ExportQAListRequest, GetDocPreviewResponse, CreateReleaseResponse, QueryRewriteRequest, ModifyAppRequest, DeleteAttributeLabelResponse, RetryReleaseRequest, VerifyQARequest, DeleteQACateRequest, GenerateQARequest, GetWsTokenRequest, ModifyDocRequest, DeleteAppResponse, ListAttributeLabelRequest, DeleteDocResponse, DescribeSegmentsResponse, UploadAttributeLabelRequest, ExportAttributeLabelRequest, GetAppKnowledgeCountResponse, RetryReleaseResponse, CreateAttributeLabelResponse, CreateQAResponse, StopDocParseResponse, ParseDocResponse, ListQACateRequest, ListReleaseQAPreviewRequest, DescribeReleaseInfoResponse, IsTransferIntentRequest, DescribeReferRequest, DeleteAppRequest, CreateRejectedQuestionRequest, DescribeStorageCredentialRequest, DescribeCorpResponse, SaveDocResponse, ListReleaseResponse, ListModelResponse, ListAttributeLabelResponse, ModifyQAResponse, DeleteQAResponse, GetMsgRecordRequest, DescribeStorageCredentialResponse, CheckAttributeLabelExistResponse, GetTaskStatusRequest, CheckAttributeLabelReferResponse, ModifyDocAttrRangeRequest, CreateQACateRequest, DescribeRobotBizIDByAppKeyRequest, CreateReconstructDocumentFlowResponse, VerifyQAResponse, DescribeSegmentsRequest, ModifyRejectedQuestionRequest, IgnoreUnsatisfiedReplyResponse, StopDocParseRequest, ListSelectDocRequest } from "./lke_models";
/**
 * lke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 文档列表
     */
    ListDoc(req: ListDocRequest, cb?: (error: string, rep: ListDocResponse) => void): Promise<ListDocResponse>;
    /**
     * 查询不满意回复列表
     */
    ListUnsatisfiedReply(req: ListUnsatisfiedReplyRequest, cb?: (error: string, rep: ListUnsatisfiedReplyResponse) => void): Promise<ListUnsatisfiedReplyResponse>;
    /**
     * 删除属性标签
     */
    DeleteAttributeLabel(req: DeleteAttributeLabelRequest, cb?: (error: string, rep: DeleteAttributeLabelResponse) => void): Promise<DeleteAttributeLabelResponse>;
    /**
     * 保存文档
     */
    SaveDoc(req: SaveDocRequest, cb?: (error: string, rep: SaveDocResponse) => void): Promise<SaveDocResponse>;
    /**
     * 创建拒答问题
     */
    CreateRejectedQuestion(req: CreateRejectedQuestionRequest, cb?: (error: string, rep: CreateRejectedQuestionResponse) => void): Promise<CreateRejectedQuestionResponse>;
    /**
     * 更新问答
     */
    ModifyQA(req: ModifyQARequest, cb?: (error: string, rep: ModifyQAResponse) => void): Promise<ModifyQAResponse>;
    /**
     * 检查属性下的标签名是否存在
     */
    CheckAttributeLabelExist(req: CheckAttributeLabelExistRequest, cb?: (error: string, rep: CheckAttributeLabelExistResponse) => void): Promise<CheckAttributeLabelExistResponse>;
    /**
     * 批量修改问答适用范围
     */
    ModifyQAAttrRange(req: ModifyQAAttrRangeRequest, cb?: (error: string, rep: ModifyQAAttrRangeResponse) => void): Promise<ModifyQAAttrRangeResponse>;
    /**
     * 文档详情
     */
    DescribeDoc(req: DescribeDocRequest, cb?: (error: string, rep: DescribeDocResponse) => void): Promise<DescribeDocResponse>;
    /**
     * 获取文档预览信息
     */
    GetDocPreview(req: GetDocPreviewRequest, cb?: (error: string, rep: GetDocPreviewResponse) => void): Promise<GetDocPreviewResponse>;
    /**
     * 删除拒答问题
     */
    DeleteRejectedQuestion(req: DeleteRejectedQuestionRequest, cb?: (error: string, rep: DeleteRejectedQuestionResponse) => void): Promise<DeleteRejectedQuestionResponse>;
    /**
     * 本接口为异步接口的查询结果接口，用于获取文档解析处理结果。
     */
    GetReconstructDocumentResult(req: GetReconstructDocumentResultRequest, cb?: (error: string, rep: GetReconstructDocumentResultResponse) => void): Promise<GetReconstructDocumentResultResponse>;
    /**
     * 获取账户信息
     */
    ListSelectDoc(req: ListSelectDocRequest, cb?: (error: string, rep: ListSelectDocResponse) => void): Promise<ListSelectDocResponse>;
    /**
     * 多轮改写（QueryRewrite）主要用于多轮对话中，进行指代消解和省略补全。使用本接口，无需输入prompt描述，根据对话历史即可生成更精确的用户查询。在应用场景上，本接口可应用于智能问答、对话式搜索等多种场景。
本接口（QueryRewrite）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
    QueryRewrite(req: QueryRewriteRequest, cb?: (error: string, rep: QueryRewriteResponse) => void): Promise<QueryRewriteResponse>;
    /**
     * 获取不满意回复上下文
     */
    DescribeUnsatisfiedReplyContext(req: DescribeUnsatisfiedReplyContextRequest, cb?: (error: string, rep: DescribeUnsatisfiedReplyContextResponse) => void): Promise<DescribeUnsatisfiedReplyContextResponse>;
    /**
     * 批量修改文档适用范围
     */
    ModifyDocAttrRange(req: ModifyDocAttrRangeRequest, cb?: (error: string, rep: ModifyDocAttrRangeResponse) => void): Promise<ModifyDocAttrRangeResponse>;
    /**
     * 获取文件上传临时密钥
     */
    DescribeStorageCredential(req: DescribeStorageCredentialRequest, cb?: (error: string, rep: DescribeStorageCredentialResponse) => void): Promise<DescribeStorageCredentialResponse>;
    /**
     * 创建发布
     */
    CreateRelease(req: CreateReleaseRequest, cb?: (error: string, rep: CreateReleaseResponse) => void): Promise<CreateReleaseResponse>;
    /**
     * 本接口（GetEmbedding）调用文本表示模型，将文本转化为用数值表示的向量形式，可用于文本检索、信息推荐、知识挖掘等场景。
本接口（GetEmbedding）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
    GetEmbedding(req: GetEmbeddingRequest, cb?: (error: string, rep: GetEmbeddingResponse) => void): Promise<GetEmbeddingResponse>;
    /**
     * 文档解析重试
     */
    RetryDocAudit(req: RetryDocAuditRequest, cb?: (error: string, rep: RetryDocAuditResponse) => void): Promise<RetryDocAuditResponse>;
    /**
     * 获取应用密钥
     */
    GetAppSecret(req: GetAppSecretRequest, cb?: (error: string, rep: GetAppSecretResponse) => void): Promise<GetAppSecretResponse>;
    /**
     * 编辑属性标签
     */
    ModifyAttributeLabel(req: ModifyAttributeLabelRequest, cb?: (error: string, rep: ModifyAttributeLabelResponse) => void): Promise<ModifyAttributeLabelResponse>;
    /**
     * 发布列表
     */
    ListRelease(req: ListReleaseRequest, cb?: (error: string, rep: ListReleaseResponse) => void): Promise<ListReleaseResponse>;
    /**
     * 点赞点踩消息
     */
    RateMsgRecord(req: RateMsgRecordRequest, cb?: (error: string, rep: RateMsgRecordResponse) => void): Promise<RateMsgRecordResponse>;
    /**
     * 回答类型数据统计
     */
    GetAnswerTypeDataCount(req: GetAnswerTypeDataCountRequest, cb?: (error: string, rep: GetAnswerTypeDataCountResponse) => void): Promise<GetAnswerTypeDataCountResponse>;
    /**
     * 点赞点踩数据统计
     */
    GetLikeDataCount(req: GetLikeDataCountRequest, cb?: (error: string, rep: GetLikeDataCountResponse) => void): Promise<GetLikeDataCountResponse>;
    /**
     * 删除问答
     */
    DeleteQA(req: DeleteQARequest, cb?: (error: string, rep: DeleteQAResponse) => void): Promise<DeleteQAResponse>;
    /**
     * 通过appKey获取应用业务ID
     */
    DescribeRobotBizIDByAppKey(req: DescribeRobotBizIDByAppKeyRequest, cb?: (error: string, rep: DescribeRobotBizIDByAppKeyResponse) => void): Promise<DescribeRobotBizIDByAppKeyResponse>;
    /**
     * 文档列表
     */
    ListReleaseQAPreview(req: ListReleaseQAPreviewRequest, cb?: (error: string, rep: ListReleaseQAPreviewResponse) => void): Promise<ListReleaseQAPreviewResponse>;
    /**
     * 导出QA列表
     */
    ExportQAList(req: ExportQAListRequest, cb?: (error: string, rep: ExportQAListResponse) => void): Promise<ExportQAListResponse>;
    /**
     * 更新QA分类
     */
    ModifyQACate(req: ModifyQACateRequest, cb?: (error: string, rep: ModifyQACateResponse) => void): Promise<ModifyQACateResponse>;
    /**
     * 删除应用
     */
    DeleteApp(req: DeleteAppRequest, cb?: (error: string, rep: DeleteAppResponse) => void): Promise<DeleteAppResponse>;
    /**
     * 修改应用请求结构体
     */
    ModifyApp(req: ModifyAppRequest, cb?: (error: string, rep: ModifyAppResponse) => void): Promise<ModifyAppResponse>;
    /**
     * 终止文档解析
     */
    StopDocParse(req: StopDocParseRequest, cb?: (error: string, rep: StopDocParseResponse) => void): Promise<StopDocParseResponse>;
    /**
     * 修改拒答问题
     */
    ModifyRejectedQuestion(req: ModifyRejectedQuestionRequest, cb?: (error: string, rep: ModifyRejectedQuestionResponse) => void): Promise<ModifyRejectedQuestionResponse>;
    /**
     * 检查属性标签引用
     */
    CheckAttributeLabelRefer(req: CheckAttributeLabelReferRequest, cb?: (error: string, rep: CheckAttributeLabelReferResponse) => void): Promise<CheckAttributeLabelReferResponse>;
    /**
     * 企业详情
     */
    DescribeCorp(req?: DescribeCorpRequest, cb?: (error: string, rep: DescribeCorpResponse) => void): Promise<DescribeCorpResponse>;
    /**
     * 创建属性
     */
    CreateAttributeLabel(req: CreateAttributeLabelRequest, cb?: (error: string, rep: CreateAttributeLabelResponse) => void): Promise<CreateAttributeLabelResponse>;
    /**
     * 本接口为异步接口的发起请求接口，用于发起文档解析任务。
文档解析支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
    CreateReconstructDocumentFlow(req: CreateReconstructDocumentFlowRequest, cb?: (error: string, rep: CreateReconstructDocumentFlowResponse) => void): Promise<CreateReconstructDocumentFlowResponse>;
    /**
     * 上传导入属性标签
     */
    UploadAttributeLabel(req: UploadAttributeLabelRequest, cb?: (error: string, rep: UploadAttributeLabelResponse) => void): Promise<UploadAttributeLabelResponse>;
    /**
     * 获取企业下应用列表
     */
    ListApp(req: ListAppRequest, cb?: (error: string, rep: ListAppResponse) => void): Promise<ListAppResponse>;
    /**
     * 文档生成问答
     */
    GenerateQA(req: GenerateQARequest, cb?: (error: string, rep: GenerateQAResponse) => void): Promise<GenerateQAResponse>;
    /**
     * 发布文档预览
     */
    ListReleaseDocPreview(req: ListReleaseDocPreviewRequest, cb?: (error: string, rep: ListReleaseDocPreviewResponse) => void): Promise<ListReleaseDocPreviewResponse>;
    /**
     * 问答列表
     */
    ListQA(req: ListQARequest, cb?: (error: string, rep: ListQAResponse) => void): Promise<ListQAResponse>;
    /**
     * 创建企业
     */
    CreateCorp(req: CreateCorpRequest, cb?: (error: string, rep: CreateCorpResponse) => void): Promise<CreateCorpResponse>;
    /**
     * 查询属性标签详情
     */
    DescribeAttributeLabel(req: DescribeAttributeLabelRequest, cb?: (error: string, rep: DescribeAttributeLabelResponse) => void): Promise<DescribeAttributeLabelResponse>;
    /**
     * 发布详情
     */
    DescribeRelease(req: DescribeReleaseRequest, cb?: (error: string, rep: DescribeReleaseResponse) => void): Promise<DescribeReleaseResponse>;
    /**
     * 问答详情
     */
    DescribeQA(req: DescribeQARequest, cb?: (error: string, rep: DescribeQAResponse) => void): Promise<DescribeQAResponse>;
    /**
     * 文档解析重试
     */
    RetryDocParse(req: RetryDocParseRequest, cb?: (error: string, rep: RetryDocParseResponse) => void): Promise<RetryDocParseResponse>;
    /**
     * 拉取发布按钮状态、最后发布时间
     */
    DescribeReleaseInfo(req: DescribeReleaseInfoRequest, cb?: (error: string, rep: DescribeReleaseInfoResponse) => void): Promise<DescribeReleaseInfoResponse>;
    /**
     * 录入问答
     */
    CreateQA(req: CreateQARequest, cb?: (error: string, rep: CreateQAResponse) => void): Promise<CreateQAResponse>;
    /**
     * 查询文档解析结果。该接口需开通文档解析原子能力后调用。文档解析原子能力内测中，如有需要请联系架构师或[联系客服](https://cloud.tencent.com/act/event/Online_service) 。
     */
    QueryParseDocResult(req: QueryParseDocResultRequest, cb?: (error: string, rep: QueryParseDocResultResponse) => void): Promise<QueryParseDocResultResponse>;
    /**
     * 查询属性标签列表
     */
    ListAttributeLabel(req: ListAttributeLabelRequest, cb?: (error: string, rep: ListAttributeLabelResponse) => void): Promise<ListAttributeLabelResponse>;
    /**
     * 获取QA分类
     */
    ListQACate(req: ListQACateRequest, cb?: (error: string, rep: ListQACateResponse) => void): Promise<ListQACateResponse>;
    /**
     * 获取模型列表
     */
    GetAppKnowledgeCount(req: GetAppKnowledgeCountRequest, cb?: (error: string, rep: GetAppKnowledgeCountResponse) => void): Promise<GetAppKnowledgeCountResponse>;
    /**
     * 接口支持图片和PDF转可编辑word格式文件，将文件中的图片、文本、表格等元素识别，并根据位置进行还原。
     */
    ConvertDocument(req: ConvertDocumentRequest, cb?: (error: string, rep: ConvertDocumentResponse) => void): Promise<ConvertDocumentResponse>;
    /**
     * 应用类型列表
     */
    ListAppCategory(req?: ListAppCategoryRequest, cb?: (error: string, rep: ListAppCategoryResponse) => void): Promise<ListAppCategoryResponse>;
    /**
     * 获取企业下应用详情
     */
    DescribeApp(req: DescribeAppRequest, cb?: (error: string, rep: DescribeAppResponse) => void): Promise<DescribeAppResponse>;
    /**
     * 创建知识引擎应用。
     */
    CreateApp(req: CreateAppRequest, cb?: (error: string, rep: CreateAppResponse) => void): Promise<CreateAppResponse>;
    /**
     * 是否意图转人工
     */
    IsTransferIntent(req: IsTransferIntentRequest, cb?: (error: string, rep: IsTransferIntentResponse) => void): Promise<IsTransferIntentResponse>;
    /**
     * 发布拒答问题预览
     */
    ListRejectedQuestionPreview(req: ListRejectedQuestionPreviewRequest, cb?: (error: string, rep: ListRejectedQuestionPreviewResponse) => void): Promise<ListRejectedQuestionPreviewResponse>;
    /**
     * 获取聊天历史请求
     */
    GetMsgRecord(req: GetMsgRecordRequest, cb?: (error: string, rep: GetMsgRecordResponse) => void): Promise<GetMsgRecordResponse>;
    /**
     * 修改文档
     */
    ModifyDoc(req: ModifyDocRequest, cb?: (error: string, rep: ModifyDocResponse) => void): Promise<ModifyDocResponse>;
    /**
     * 接口即将下线，请切换使用新接口：[文档解析](https://cloud.tencent.com/document/product/1759/107504)
     */
    ParseDoc(req: ParseDocRequest, cb?: (error: string, rep: ParseDocResponse) => void): Promise<ParseDocResponse>;
    /**
     * 获取ws token
     */
    GetWsToken(req: GetWsTokenRequest, cb?: (error: string, rep: GetWsTokenResponse) => void): Promise<GetWsTokenResponse>;
    /**
     * 删除文档
     */
    DeleteDoc(req: DeleteDocRequest, cb?: (error: string, rep: DeleteDocResponse) => void): Promise<DeleteDocResponse>;
    /**
     * 获取模型列表
     */
    ListModel(req: ListModelRequest, cb?: (error: string, rep: ListModelResponse) => void): Promise<ListModelResponse>;
    /**
     * 校验问答
     */
    VerifyQA(req: VerifyQARequest, cb?: (error: string, rep: VerifyQAResponse) => void): Promise<VerifyQAResponse>;
    /**
     * QA分组
     */
    GroupQA(req: GroupQARequest, cb?: (error: string, rep: GroupQAResponse) => void): Promise<GroupQAResponse>;
    /**
     * 获取片段详情
     */
    DescribeSegments(req: DescribeSegmentsRequest, cb?: (error: string, rep: DescribeSegmentsResponse) => void): Promise<DescribeSegmentsResponse>;
    /**
     * 获取拒答问题
     */
    ListRejectedQuestion(req: ListRejectedQuestionRequest, cb?: (error: string, rep: ListRejectedQuestionResponse) => void): Promise<ListRejectedQuestionResponse>;
    /**
     * 发布配置项预览
     */
    ListReleaseConfigPreview(req: ListReleaseConfigPreviewRequest, cb?: (error: string, rep: ListReleaseConfigPreviewResponse) => void): Promise<ListReleaseConfigPreviewResponse>;
    /**
     * 获取任务状态
     */
    GetTaskStatus(req: GetTaskStatusRequest, cb?: (error: string, rep: GetTaskStatusResponse) => void): Promise<GetTaskStatusResponse>;
    /**
     * 分类删除
     */
    DeleteQACate(req: DeleteQACateRequest, cb?: (error: string, rep: DeleteQACateResponse) => void): Promise<DeleteQACateResponse>;
    /**
     * 创建QA分类
     */
    CreateQACate(req: CreateQACateRequest, cb?: (error: string, rep: CreateQACateResponse) => void): Promise<CreateQACateResponse>;
    /**
     * 导出不满意回复
     */
    ExportUnsatisfiedReply(req: ExportUnsatisfiedReplyRequest, cb?: (error: string, rep: ExportUnsatisfiedReplyResponse) => void): Promise<ExportUnsatisfiedReplyResponse>;
    /**
     * 支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
    ReconstructDocument(req: ReconstructDocumentRequest, cb?: (error: string, rep: ReconstructDocumentResponse) => void): Promise<ReconstructDocumentResponse>;
    /**
     * 重置会话
     */
    ResetSession(req: ResetSessionRequest, cb?: (error: string, rep: ResetSessionResponse) => void): Promise<ResetSessionResponse>;
    /**
     * 导出属性标签
     */
    ExportAttributeLabel(req: ExportAttributeLabelRequest, cb?: (error: string, rep: ExportAttributeLabelResponse) => void): Promise<ExportAttributeLabelResponse>;
    /**
     * 发布暂停后重试
     */
    RetryRelease(req: RetryReleaseRequest, cb?: (error: string, rep: RetryReleaseResponse) => void): Promise<RetryReleaseResponse>;
    /**
     * 获取来源详情列表
     */
    DescribeRefer(req: DescribeReferRequest, cb?: (error: string, rep: DescribeReferResponse) => void): Promise<DescribeReferResponse>;
    /**
     * 忽略不满意回复
     */
    IgnoreUnsatisfiedReply(req: IgnoreUnsatisfiedReplyRequest, cb?: (error: string, rep: IgnoreUnsatisfiedReplyResponse) => void): Promise<IgnoreUnsatisfiedReplyResponse>;
}
