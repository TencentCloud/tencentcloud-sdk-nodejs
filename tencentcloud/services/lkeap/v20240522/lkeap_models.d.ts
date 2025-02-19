/**
 * ChatCompletions请求参数结构体
 */
export interface ChatCompletionsRequest {
    /**
     * 模型名称
     */
    Model: string;
    /**
     * 聊天上下文信息。
  说明：
  1. 长度最多为 40，按对话时间从旧到新在数组中排列。
  2. Message.Role 可选值：system、user、assistant。
  其中，system 角色可选，如存在则必须位于列表的最开始。user 和 assistant 需交替出现，以 user 提问开始，user 提问结束，Content 不能为空。Role 的顺序示例：[system（可选） user assistant user assistant user ...]。
  
     */
    Messages: Array<Message>;
    /**
     * 是否流式输出
     */
    Stream?: boolean;
    /**
     * 控制生成的随机性，较高的值会产生更多样化的输出。
     */
    Temperature?: number;
    /**
     * 最大生成的token数量
     */
    MaxTokens?: number;
}
/**
 * CreateSplitDocumentFlow请求参数结构体
 */
export interface CreateSplitDocumentFlowRequest {
    /**
     * 文件类型。
  
  **支持的文件类型：**
  - `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`
  
  **支持的文件大小：**
   - `PDF` 最大500M
   - `DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M
   - `TXT`、`MD` 最大10M
   - 其他 最大20M
  
     */
    FileType: string;
    /**
     * 文件的 URL 地址。
  文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
  参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
     */
    FileUrl: string;
    /**
     * 文件名，可选。
  **需带文件类型后缀**，当文件名无法从传入的`FileUrl`获取时需要通过该字段来明确。
     */
    FileName?: string;
    /**
     * 文件的 Base64 值。
  支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
  支持的图片像素：单边介于20-10000px之间。
  文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
     * @deprecated
     */
    FileBase64?: string;
    /**
     * 文档的起始页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
     */
    FileStartPageNumber?: number;
    /**
     * 文档的结束页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。
     */
    FileEndPageNumber?: number;
    /**
     * 文档拆分任务的配置信息。
  
     */
    Config?: CreateSplitDocumentFlowConfig;
}
/**
 * 检索结果的元数据
 */
export interface RetrievalRecordMetadata {
    /**
     * 结果的类型。
  - `DOC`：文档
  - `QA`：问答对
     */
    Type?: string;
    /**
     * 检索结果的来源。
  - `SEMANTIC`：从语义检索中得到的结果
  - `FULL_TEXT`：从全文检索中得到的结果
     */
    ResultSource?: string;
    /**
     * 切片在文档中的页码，仅部分文档支持
     */
    ChunkPageNumbers?: Array<number | bigint>;
}
/**
 * ListQAs请求参数结构体
 */
export interface ListQAsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 每页数目，最大50，默认20
     */
    PageSize?: number;
}
/**
 * ReconstructDocumentSSE返回参数结构体
 */
export interface ReconstructDocumentSSEResponse {
    /**
     * 任务ID。本次请求的唯一标识
     */
    TaskId?: string;
    /**
     * 响应类型。1：返回进度信息，2：返回解析结果
     */
    ResponseType?: string;
    /**
     * 进度。0~100
     */
    Progress?: string;
    /**
     * 进度信息。
     */
    ProgressMessage?: string;
    /**
     * 文档解析结果URL。存储在腾讯云cos，可以通过http请求下载，URL十分钟内有效。
     */
    DocumentRecognizeResultUrl?: string;
    /**
     * 文档解析失败的页码。
     */
    FailedPages?: Array<ReconstructDocumentFailedPage>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
     */
    RequestId?: string;
}
/**
 * 离线文档列表回包
 */
export interface DocItem {
    /**
     * 文档id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DocId?: string;
    /**
     *  状态，
  - Uploading  上传中
  - Auditing 审核中
  - Parsing 解析中
  - ParseFailed 解析失败
  - Indexing 创建索引中
  - IndexFailed 创建索引失败
  - Success  发布成功
  - Failed  失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 属性标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
}
/**
 * GetEmbedding请求参数结构体
 */
export interface GetEmbeddingRequest {
    /**
     * 模型名称
     */
    Model: string;
    /**
     * 需要 embedding 的文本, 单条文本最大长度500个字符, 总条数最大7条
     */
    Inputs: Array<string>;
}
/**
 * ImportQAs返回参数结构体
 */
export interface ImportQAsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDocRealtime请求参数结构体
 */
export interface UploadDocRealtimeRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 文件名，可选。
  **需带文件类型后缀**，当文件名无法从传入的`FileUrl`获取时需要通过该字段来明确。
     */
    FileName: string;
    /**
     * 文件类型。
  **支持的文件类型：**
  - `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`
  
  **支持的文件大小：**
   - `PDF`、`DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M
   - `TXT`、`MD` 最大10M
   - 其他 最大20M
     */
    FileType: string;
    /**
     * 文件的 URL 地址。
  文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
  参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
     */
    FileUrl: string;
    /**
     * 过期时间的秒数，最长24小时，默认24小时
     */
    ExpireTime?: number;
}
/**
 * DescribeDoc返回参数结构体
 */
export interface DescribeDocResponse {
    /**
     * 文档ID
     */
    DocId?: string;
    /**
     * 状态，
  
  - Uploading  上传中
  - Auditing 审核中
  - Parsing 解析中
  - ParseFailed 解析失败
  - Indexing 创建索引中
  - IndexFailed 创建索引失败
  - Success  发布成功
  - Failed  失败
     */
    Status?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 属性标签
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 属性标签引用
 */
export interface AttributeLabelReferItem {
    /**
     * 属性id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeId?: string;
    /**
     * 标签id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelIds?: Array<string>;
}
/**
 * DeleteQAs请求参数结构体
 */
export interface DeleteQAsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 问答对ID列表。支持批量删除，数量不超过100
     */
    QaIds: Array<string>;
}
/**
 * ModifyQA请求参数结构体
 */
export interface ModifyQARequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 问答对ID
     */
    QaId: string;
    /**
     * 问题，最大1000个英文字符
     */
    Question: string;
    /**
     * 答案，最大4000个英文字符
     */
    Answer: string;
    /**
     * 属性标签
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
}
/**
 * 消耗量
 */
export interface Usage {
    /**
     * 文档页数
     */
    TotalPages?: number;
    /**
     * 输入token数
     */
    InputTokens?: number;
    /**
     * 输出token数
     */
    OutputTokens?: number;
    /**
     * 总token数
     */
    TotalTokens?: number;
}
/**
 * GetReconstructDocumentResult请求参数结构体
 */
export interface GetReconstructDocumentResultRequest {
    /**
     * 解析任务ID
     */
    TaskId: string;
}
/**
 * ListQAs返回参数结构体
 */
export interface ListQAsResponse {
    /**
     * 问答对总数量
     */
    TotalCount?: number;
    /**
     * 问答对信息
     */
    List?: Array<QaItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAttributeLabels返回参数结构体
 */
export interface DeleteAttributeLabelsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 检索参数设置
 */
export interface RetrievalSetting {
    /**
     * 检索的类型，不填该参数则检索全部。
  - `DOC`：文档
  - `QA`：QA
  
  仅RetrieveKnowledge接口支持该参数
     */
    Type?: string;
    /**
     * 返回个数
     */
    TopK?: number;
    /**
     * 分数过滤
     */
    ScoreThreshold?: number;
}
/**
 * ListDocs请求参数结构体
 */
export interface ListDocsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 每页数目，最大50，默认20
     */
    PageSize?: number;
}
/**
 * CreateAttributeLabel返回参数结构体
 */
export interface CreateAttributeLabelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RetrieveKnowledge返回参数结构体
 */
export interface RetrieveKnowledgeResponse {
    /**
     * 检索结果
     */
    Records?: Array<RetrievalRecord>;
    /**
     * 检索结果数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSplitDocumentFlow返回参数结构体
 */
export interface CreateSplitDocumentFlowResponse {
    /**
     * 拆分任务唯一ID。
  30天内可以通过`GetSplitDocumentResult`接口查询TaskId对应的拆分结果。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分段配置
 */
export interface SegmentationConfig {
    /**
     * 最大分片长度
     */
    MaxChunkSize?: number;
}
/**
 * CreateQA返回参数结构体
 */
export interface CreateQAResponse {
    /**
     * 问答对ID
     */
    QaId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAttributeLabel请求参数结构体
 */
export interface ModifyAttributeLabelRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 属性ID
     */
    AttributeId: string;
    /**
     * 属性标识，最大40个英文字符，如style
     */
    AttributeKey: string;
    /**
     * 属性名称，最大80个英文字符，如风格
     */
    AttributeName: string;
    /**
     * 属性标签
     */
    Labels?: Array<AttributeLabelItem>;
}
/**
 * GetReconstructDocumentResult返回参数结构体
 */
export interface GetReconstructDocumentResultResponse {
    /**
     * 任务状态。- `Success`：执行完成- `Processing`：执行中- `Pause`: 暂停- `Failed`：执行失败- `WaitExecute`：等待执行
     */
    Status?: string;
    /**
     * 解析结果的临时下载地址。文件类型为zip压缩包，下载链接有效期30分钟
     */
    DocumentRecognizeResultUrl?: string;
    /**
     * 文档解析失败的页码
     */
    FailedPages?: Array<ReconstructDocumentFailedPage>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReconstructDocumentSSE 功能配置参数
 */
export interface ReconstructDocumentSSEConfig {
    /**
     * Markdown文件中表格返回的形式
  0，表格以MD形式返回
  1，表格以HTML形式返回
  默认为0
     */
    TableResultType?: string;
    /**
     * Markdown文件中图片返回的形式
  0:markdown中图片以链接形式返回
  1:markdown中图片只返回图片中提取的文本内容
  默认是0
     */
    MarkdownImageResponseType?: string;
    /**
     * Markdown文件中是否包含页码信息
     */
    ReturnPageFormat?: boolean;
    /**
     * 自定义输出页码样式,{{p}}为页码占位符，开启ReturnPageFormat生效。未填默认样式:<page_num>page {{p}}</page_num>
     */
    PageFormat?: string;
}
/**
 * ListDocs返回参数结构体
 */
export interface ListDocsResponse {
    /**
     * 文档总数
     */
    TotalCount?: number;
    /**
     * 文档信息
     */
    List?: Array<DocItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文档拆分任务的用量
 */
export interface DocumentUsage {
    /**
     * 文档拆分任务的页数
     */
    PageNumber?: number;
    /**
     * 文档拆分任务消耗的总token数
     * @deprecated
     */
    TotalToken?: number;
    /**
     * 文档拆分任务消耗的总token数
     */
    TotalTokens?: number;
}
/**
 * ListAttributeLabels请求参数结构体
 */
export interface ListAttributeLabelsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 页码，默认1
     */
    PageNumber?: number;
    /**
     * 每页数目，最大50，默认20
     */
    PageSize?: number;
}
/**
 * DeleteAttributeLabels请求参数结构体
 */
export interface DeleteAttributeLabelsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 属性ID
     */
    AttributeIds: Array<string>;
}
/**
 * RetrieveKnowledge请求参数结构体
 */
export interface RetrieveKnowledgeRequest {
    /**
     * 知识库ID。
     */
    KnowledgeBaseId: string;
    /**
     * 用于检索的文本。
     */
    Query: string;
    /**
     * 检索方法，默认使用`HYBRID`混合检索。
  - `SEMANTIC`：语义检索
  - `FULL_TEXT`：全文检索
  - `HYBRID`：混合检索
     */
    RetrievalMethod?: string;
    /**
     * 检索设置。
     */
    RetrievalSetting?: RetrievalSetting;
    /**
     * 标签过滤。
     */
    AttributeLabels?: Array<LabelItem>;
}
/**
 * 返回的回复, 支持多个
 */
export interface Choice {
    /**
     * 结束标志位，可能为 stop、 content_filter。
  stop 表示输出正常结束。
  content_filter 只在开启流式输出审核时会出现，表示安全审核未通过。
     */
    FinishReason?: string;
    /**
     * 增量返回值，流式调用时使用该字段。
     */
    Delta?: Delta;
    /**
     * 返回值，非流式调用时使用该字段。
     */
    Message?: Message;
    /**
     * 索引值，流式调用时使用该字段。
     */
    Index?: number;
}
/**
 * 创建智能文档解析任务的配置信息
 */
export interface CreateReconstructDocumentFlowConfig {
    /**
     * Markdown文件中表格返回的形式
  0，表格以MD形式返回
  1，表格以HTML形式返回
  默认为1
     */
    TableResultType?: string;
    /**
     * 智能文档解析返回结果的格式
  0：只返回全文MD；
  1：只返回每一页的OCR原始Json；
  2：只返回每一页的MD，
  3：返回全文MD + 每一页的OCR原始Json；
  4：返回全文MD + 每一页的MD，
  默认值为3（返回全文MD + 每一页的OCR原始Json）
  
  
     */
    ResultType?: string;
}
/**
 * RunRerank请求参数结构体
 */
export interface RunRerankRequest {
    /**
     * 查询内容
     */
    Query: string;
    /**
     * 文档列表，最多20个
     */
    Docs: Array<string>;
    /**
     * 模型名称, 默认: lke-reranker-base
     */
    Model?: string;
}
/**
 * 消耗量
 */
export interface ChatUsage {
    /**
     * 输入token数
     */
    PromptTokens?: number;
    /**
     * 输出token数
     */
    CompletionTokens?: number;
    /**
     * 总token数
     */
    TotalTokens?: number;
}
/**
 * GetSplitDocumentResult请求参数结构体
 */
export interface GetSplitDocumentResultRequest {
    /**
     * 拆分任务ID
     */
    TaskId: string;
}
/**
 * 返回的内容
 */
export interface Delta {
    /**
     * 角色名称。
     */
    Role?: string;
    /**
     * 内容详情。
     */
    Content?: string;
}
/**
 * ReconstructDocumentSSE请求参数结构体
 */
export interface ReconstructDocumentSSERequest {
    /**
     * 文件类型。
  **支持的文件类型**：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2
  **支持的文件大小**：
  - PDF、DOC、DOCX、PPT、PPTX 支持100M
  - MD、TXT 支持10M
  - 其他支持20M
  
     */
    FileType: string;
    /**
     * 文件的 URL 地址。
  文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
  参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
     */
    FileUrl?: string;
    /**
     * 文件的 Base64 值。
  支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
  支持的图片像素：单边介于20-10000px之间。
  文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
     */
    FileBase64?: string;
    /**
     * 文档的起始页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
     */
    FileStartPageNumber?: number;
    /**
     * 文档的结束页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。
     */
    FileEndPageNumber?: number;
    /**
     * 文档解析配置信息
     */
    Config?: ReconstructDocumentSSEConfig;
}
/**
 * ListAttributeLabels返回参数结构体
 */
export interface ListAttributeLabelsResponse {
    /**
     * 属性总数
     */
    TotalCount?: number;
    /**
     * 属性标签列表
     */
    List?: Array<AttributeItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 检索的结果
 */
export interface RetrievalRecord {
    /**
     * 检索结果的元数据
     */
    Metadata?: RetrievalRecordMetadata;
    /**
     * 检索到的标题
     */
    Title?: string;
    /**
     * 检索到的内容
     */
    Content?: string;
}
/**
 * 属性标签信息
 */
export interface AttributeLabelItem {
    /**
     * 标签id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelId?: string;
    /**
     * 标签名称，最大80个英文字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelName?: string;
}
/**
 * CreateAttributeLabel请求参数结构体
 */
export interface CreateAttributeLabelRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 属性标识，最大40个英文字符，如style
     */
    AttributeKey: string;
    /**
     * 属性名称，最大80个英文字符，如风格
     */
    AttributeName: string;
    /**
     * 属性标签信息
     */
    Labels?: Array<AttributeLabelItem>;
}
/**
 * ImportQAs请求参数结构体
 */
export interface ImportQAsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 文件名
     */
    FileName: string;
    /**
     * 文件的 Url 地址。文件存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。
  导入模板：https://cdn.xiaowei.qq.com/lke/assets//static/批量导入问答模板v6.xlsx
     */
    FileUrl: string;
    /**
     * 文件类型，仅支持XLSX格式，请使用模板
     */
    FileType?: string;
}
/**
 * DescribeDoc请求参数结构体
 */
export interface DescribeDocRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 文档ID
     */
    DocId: string;
}
/**
 * DeleteKnowledgeBase返回参数结构体
 */
export interface DeleteKnowledgeBaseResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDocs返回参数结构体
 */
export interface DeleteDocsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 属性标签
 */
export interface LabelItem {
    /**
     * 属性key
     */
    Name?: string;
    /**
     * 标签值
     */
    Values?: Array<string>;
}
/**
 * CreateReconstructDocumentFlow请求参数结构体
 */
export interface CreateReconstructDocumentFlowRequest {
    /**
     * 文件类型。
  
  **支持的文件类型：**
  - `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`、`BMP`、`GIF`、`WEBP`、`HEIC`、`EPS`、`ICNS`、`IM`、`PCX`、`PPM`、`TIFF`、`XBM`、`HEIF`、`JP2`
  
  **支持的文件大小：**
   - `PDF` 最大500M
   - `DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M
   - `TXT`、`MD` 最大10M
   - 其他 最大20M
  
     */
    FileType: string;
    /**
     * 文件的 URL 地址。
  文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
  参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
     */
    FileUrl?: string;
    /**
     * 文件的 Base64 值。
  支持的文件类型： PNG、JPG、JPEG、PDF、GIF、BMP、TIFF
  支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
  支持的图片像素：单边介于20-10000px之间。
  文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
     */
    FileBase64?: string;
    /**
     * 文档的起始页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
     */
    FileStartPageNumber?: number;
    /**
     * 文档的结束页码。
  当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。
     */
    FileEndPageNumber?: number;
    /**
     * 创建文档解析任务配置信息。
     */
    Config?: CreateReconstructDocumentFlowConfig;
}
/**
 * GetSplitDocumentResult返回参数结构体
 */
export interface GetSplitDocumentResultResponse {
    /**
     * 任务状态。
  
  - `Success`：执行完成
  - `Processing`：执行中
  - `Pause`: 暂停
  - `Failed`：执行失败
  - `WaitExecute`：等待执行
     */
    Status?: string;
    /**
     * 拆分结果的临时下载地址。
  文件类型为zip压缩包，下载链接有效期30分钟。
  压缩包内包含\*.md、\*.jsonl、\*mllm.json以及images文件夹。
  
  > **jsonl** 结构说明：
  - `page_content`:
   用于生成嵌入（embedding）库，以便于检索使用。该字段中的图片将使用占位符替换。
  - `org_data`:
   表示与 page_content 对应的最小语义完整性块，用于问答模型的处理。
  - `big_data`:
   表示与 page_content 对应的最大语义完整性块，也用于问答模型的处理。
     */
    DocumentRecognizeResultUrl?: string;
    /**
     * 文档拆分失败的页码
     * @deprecated
     */
    FailedPages?: Array<SplitDocumentFailedPage>;
    /**
     * 文档拆分任务的用量
     */
    Usage?: DocumentUsage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyQA返回参数结构体
 */
export interface ModifyQAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文档解析失败记录
 */
export interface ReconstructDocumentFailedPage {
    /**
     * 失败页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
}
/**
 * UploadDocRealtime返回参数结构体
 */
export interface UploadDocRealtimeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
     */
    RequestId?: string;
}
/**
 * 文档解析失败记录
 */
export interface SplitDocumentFailedPage {
    /**
     * 失败页码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
}
/**
 * ModifyAttributeLabel返回参数结构体
 */
export interface ModifyAttributeLabelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryRewrite返回参数结构体
 */
export interface QueryRewriteResponse {
    /**
     * 改写结果
     */
    Content?: string;
    /**
     * 消耗量，返回输入token数，输出token数以及总token数
     */
    Usage?: Usage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadDoc请求参数结构体
 */
export interface UploadDocRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 文件名。
  **需带文件类型后缀**
     */
    FileName: string;
    /**
     * 文件类型。
  
  **支持的文件类型：**
  - `PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`
  
  **支持的文件大小：**
   - `PDF`、`DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M
   - `TXT`、`MD` 最大10M
   - 其他 最大20M
  
     */
    FileType: string;
    /**
     * 文件的 URL 地址。
  文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
  参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
     */
    FileUrl: string;
    /**
     * 属性标签引用
     * @deprecated
     */
    AttributeLabel?: Array<AttributeLabelReferItem>;
    /**
     * 属性标签引用
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
    /**
     * 分段信息
     */
    Config?: SegmentationConfig;
}
/**
 * DeleteQAs返回参数结构体
 */
export interface DeleteQAsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateKnowledgeBase返回参数结构体
 */
export interface CreateKnowledgeBaseResponse {
    /**
     * 知识库ID
     */
    KnowledgeBaseId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetEmbedding返回参数结构体
 */
export interface GetEmbeddingResponse {
    /**
     * 特征
     */
    Data?: Array<EmbeddingObject>;
    /**
     * 消耗量，返回TotalToken
     */
    Usage?: Usage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryRewrite请求参数结构体
 */
export interface QueryRewriteRequest {
    /**
     * 需要改写的多轮历史会话，每轮历史对话需要包含user（问）和assistant（答）成对输入，由于模型字符限制，最多提供4轮对话。针对最后一轮对话进行改写
     */
    Messages: Array<Message>;
    /**
     * 模型名称
     */
    Model?: string;
}
/**
 * 问答对信息
 */
export interface QaItem {
    /**
     * 问答id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QaId?: string;
    /**
     * 问题
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Question?: string;
    /**
     * 答案
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Answer?: string;
    /**
     * 属性标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * 创建智能文档拆分任务的配置信息
 */
export interface CreateSplitDocumentFlowConfig {
    /**
     * Markdown文件中表格返回的形式
  0，表格以MD形式返回
  1，表格以HTML形式返回
  默认为
     * @deprecated
     */
    TableResultType?: string;
    /**
     * 智能文档解析返回结果的格式
  0：只返回全文MD；
  1：只返回每一页的OCR原始Json；
  2：只返回每一页的MD，
  3：返回全文MD + 每一页的OCR原始Json；
  4：返回全文MD + 每一页的MD，
  默认值为3（返回全文MD + 每一页的OCR原始Json）
  
  
     * @deprecated
     */
    ResultType?: string;
    /**
     * 是否开启mllm
     */
    EnableMllm?: boolean;
    /**
     * 最大分片长度
     */
    MaxChunkSize?: number;
}
/**
 * RunRerank返回参数结构体
 */
export interface RunRerankResponse {
    /**
     * 相关性, 数值越大越相关
     */
    ScoreList?: Array<number>;
    /**
     * 消耗量，仅返回TotalToken
     */
    Usage?: Usage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateReconstructDocumentFlow返回参数结构体
 */
export interface CreateReconstructDocumentFlowResponse {
    /**
     * 任务唯一id。30天内可以通过GetReconstructDocumentResult接口查询TaskId对应的处理结果。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteKnowledgeBase请求参数结构体
 */
export interface DeleteKnowledgeBaseRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
}
/**
 * CreateQA请求参数结构体
 */
export interface CreateQARequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 问题，最大1000个英文字符
     */
    Question: string;
    /**
     * 答案，最大4000个英文字符
     */
    Answer: string;
    /**
     * 属性标签
     */
    AttributeLabels?: Array<AttributeLabelReferItem>;
}
/**
 * UploadDoc返回参数结构体
 */
export interface UploadDocResponse {
    /**
     * 文档ID
     */
    DocId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 属性信息
 */
export interface AttributeItem {
    /**
     * 属性id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeId?: string;
    /**
     * 属性标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeKey?: string;
    /**
     * 属性名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttributeName?: string;
    /**
     * 标签名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<AttributeLabelItem>;
}
/**
 * 向量
 */
export interface EmbeddingObject {
    /**
     * 向量
     */
    Embedding?: Array<number>;
}
/**
 * 会话内容
 */
export interface Message {
    /**
     * 角色
     */
    Role?: string;
    /**
     * 内容
     */
    Content?: string;
    /**
     * 思维链内容。
  ReasoningConent参数仅支持出参，且只有deepseek-r1模型会返回。
     */
    ReasoningContent?: string;
}
/**
 * CreateKnowledgeBase请求参数结构体
 */
export declare type CreateKnowledgeBaseRequest = null;
/**
 * ChatCompletions返回参数结构体
 */
export interface ChatCompletionsResponse {
    /**
     * Unix 时间戳，单位为秒。
     */
    Created?: number;
    /**
     * Token 统计信息。
  按照总 Token 数量计费。
     */
    Usage?: ChatUsage;
    /**
     * 本次请求的 RequestId。
     */
    Id?: string;
    /**
     * 回复内容。
     */
    Choices?: Array<Choice>;
    /**
     * 模型名称。
     */
    Model?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
     */
    RequestId?: string;
}
/**
 * DeleteDocs请求参数结构体
 */
export interface DeleteDocsRequest {
    /**
     * 知识库ID
     */
    KnowledgeBaseId: string;
    /**
     * 文档ID列表。支持批量删除，数量不超过100
     */
    DocIds: Array<string>;
}
