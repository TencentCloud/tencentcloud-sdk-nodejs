/**
 * DescribeKnowledgeSetList请求参数结构体
 */
export interface DescribeKnowledgeSetListRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识，精准查询
     */
    Name?: string;
    /**
     * 知识库名称，精准查询
     */
    Title?: string;
    /**
     * 分页起始位
     */
    Offset?: number;
    /**
     * 查询条数
     */
    Limit?: number;
    /**
     * NoPage标识不分页
     */
    QueryMode?: string;
}
/**
 * 文档信息
 */
export interface KnowledgeDocumentSetInfo {
    /**
     * 文件的字符数。
     */
    TextLength?: number;
    /**
     * 文件的字节数。
     */
    ByteLength?: number;
    /**
     * 文件被预处理、Embedding 向量化的进度。
     */
    IndexedProgress?: number;
    /**
     * 文件预处理、Embedding 向量化的状态。
  New：等待解析。
  Loading：文件解析中。
  Failure：文件解析、写入出错。
  Ready：文件解析、写入完成。
  
     */
    IndexedStatus?: string;
    /**
     * 文件创建时间。
     */
    CreateTime?: string;
    /**
     * 文件最后更新时间。
     */
    LastUpdateTime?: string;
    /**
     * 文件关键字。
     */
    Keywords?: string;
}
/**
 * 删除文档出参
 */
export interface DeleteKnowledgeDocumentSetRsp {
    /**
     * 删除文档数量。
     */
    AffectedCount?: number;
}
/**
 * UploadKnowledgeDocumentSet请求参数结构体
 */
export interface UploadKnowledgeDocumentSetRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    CollectionView: string;
    /**
     * 状态;ENABLED启用；NOT_ENABLED不启用
     */
    FileName: string;
    /**
     * 腾讯云文件存储位置的可读地址
     */
    CosUrl: string;
    /**
     * 文件类型，例如: .docx, .md
     */
    DocumentType?: string;
    /**
     * 对文件的描述
     */
    DocumentDesc?: string;
    /**
     * 文件标题
     */
    FileTitle?: string;
    /**
     * 	文件元信息，为jsonstring
     */
    FileMetaData?: string;
    /**
     * 文件id
     */
    DocumentSetId?: string;
}
/**
 * UpdateKnowledgeSet返回参数结构体
 */
export interface UpdateKnowledgeSetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchDocList请求参数结构体
 */
export interface SearchDocListRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库名称
     */
    CollectionView?: string;
    /**
     * 搜索模式
     */
    SearchKey?: string;
    /**
     * 搜索值
     */
    SearchValue?: string;
    /**
     * 页码
     */
    PageNo?: number;
    /**
     * 页大小
     */
    PageSize?: number;
}
/**
 * DescribeKnowledgeDocumentSetList返回参数结构体
 */
export interface DescribeKnowledgeDocumentSetListResponse {
    /**
     * 新增文件返回信息
     */
    Data?: DescribeKnowledgeDocumentSetListRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 上传知识库文档返回结果
 */
export interface UploadKnowledgeDocumentSetRsp {
    /**
     * 给文件分配的 ID 信息。
     */
    DocumentSetId?: string;
    /**
     * 文件名
     */
    DocumentSetName?: string;
    /**
     * 文件标题
     */
    FileTitle?: string;
    /**
     * 文件元信息，为jsonstring
     */
    FileMetaData?: string;
}
/**
 * 数据源模糊查询参数
 */
export interface DataSourceQueryOption {
    /**
     * 数据源标识模糊匹配
     */
    LikeName?: string;
    /**
     * 数据源名称模糊匹配
     */
    LikeTitle?: string;
}
/**
 * 查询条件
 */
export interface PageQuery {
    /**
     * 文件id数组，表示要查询的文件的所有 ID，支持批量查询，数组元素范围[1,20]。
     */
    DocumentSetId?: Array<string>;
    /**
     * 表示要查询的文档名称，支持批量查询，数组元素范围[1,20]。
     */
    DocumentSetName?: Array<string>;
    /**
     * 取值范围：[1,16384]
     */
    Limit?: number;
    /**
     * 设置分页偏移量，用于控制分页查询返回结果的起始位置，方便用户对数据进行分页展示和浏览。
  取值：为 limit 整数倍。
  计算公式：offset=limit*(page-1)。
  例如：当 limit = 10，page = 2 时，分页偏移量 offset = 10 * (2 - 1) = 10，表示从查询结果的第 11 条记录开始返回数据。
  
     */
    Offset?: number;
    /**
     * 设置后，其他字段为空值
     */
    OutputFields?: Array<string>;
    /**
     * 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式。
     */
    Filter?: string;
}
/**
 * SearchDocList返回参数结构体
 */
export interface SearchDocListResponse {
    /**
     * 知识库文档搜索数据
     */
    Data?: SearchDocRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteKnowledgeSet返回参数结构体
 */
export interface DeleteKnowledgeSetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 删除文档时查询入参
 */
export interface DocumentQuery {
    /**
     * 文件ids
     */
    DocumentSetId?: Array<string>;
    /**
     * 文件名集合
     */
    DocumentSetName?: Array<string>;
    /**
     * 使用创建 CollectionView 指定的 Filter 索引的字段设置查询过滤表达式
     */
    Filter?: string;
}
/**
 * UpdateKnowledgeSet请求参数结构体
 */
export interface UpdateKnowledgeSetRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    Name: string;
    /**
     * 知识库名称
     */
    Title?: string;
    /**
     * 描述
     */
    Desc?: string;
    /**
     * 状态;ENABLED启用；NOT_ENABLED不启用
     */
    Active?: string;
    /**
     * 知识库的meta信息
     */
    Meta?: string;
}
/**
 * 知识库搜索文档信息
 */
export interface SearchDocInfo {
    /**
     * 知识库名称
     */
    CollectionViewName?: string;
    /**
     * 文档Id
     */
    DocSetId?: string;
    /**
     * 文档Name
     */
    DocSetName?: string;
    /**
     * 文档类型
     */
    DocType?: string;
    /**
     * 文档标题
     */
    FileTitle?: string;
    /**
     * 文档元信息
     */
    FileMetaData?: string;
    /**
     * 文档描述
     */
    DocDesc?: string;
    /**
     * 文档大小
     */
    FileSize?: number;
}
/**
 * 数据源详情列表
 */
export interface DataSourceDetail {
    /**
     * 数据源 ID
     */
    Id?: string;
    /**
     * 数据源名称
     */
    Title?: string;
    /**
     * 数据源标识
     */
    Name?: string;
    /**
     * 数据源类型
     */
    Type?: string;
    /**
     * 数据源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 数据源配置
     */
    Schema?: string;
    /**
     * cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息
     */
    CmsProject?: string;
    /**
     * 当前为环境 id
     */
    PkgId?: string;
    /**
     * schema 版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaVersion?: string;
    /**
     * 创建者用户 ID
     */
    CreatorId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 环境 id
     */
    EnvId?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceVersion?: string;
    /**
     * 所属应用数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppUsageList?: Array<DataSourceLinkApp>;
    /**
     * 发布时间
     */
    PublishedAt?: string;
    /**
     * 子数据源ids
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildDataSourceIds?: Array<string>;
    /**
     * 数据源发布信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fun?: string;
    /**
     * 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting  9 Deleted 11 CreatFailed  12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut
     */
    ScfStatus?: number;
    /**
     * 自定义方法
     */
    Methods?: string;
    /**
     * 子数据源名数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildDataSourceNames?: Array<string>;
    /**
     * 是否旧数据源 1 新 0 旧
     */
    IsNewDataSource?: number;
    /**
     * 数据源视图id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ViewId?: string;
    /**
     * 数据源属性配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration?: string;
    /**
     * 外部数据源模板code
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateCode?: string;
    /**
     * 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Source?: number;
    /**
     * 发布版本
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    PublishVersion?: string;
    /**
     * 发布视图id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishViewId?: string;
    /**
     * 数据源子类型   "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源
     */
    SubType?: string;
    /**
     * 授权状态  0 授权无效 1 授权有效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthStatus?: number;
    /**
     * 数据源授权信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthInfo?: TicketAuthInfo;
    /**
     * 1发布0未发布
     */
    PublishStatus?: number;
    /**
     * 更新版本
     */
    UpdateVersion?: number;
    /**
     * 模型关联关系字段列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelationFieldList?: Array<RelationField>;
    /**
     * db实例类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbInstanceType?: string;
    /**
     * 体验环境db表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewTableName?: string;
    /**
     * 正式环境db表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishedTableName?: string;
    /**
     * DB来源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbSourceType?: string;
}
/**
 * 知识库信息
 */
export interface KnowledgeSet {
    /**
     * 知识库标识
     */
    Name?: string;
    /**
     * 知识库名称
     */
    Title?: string;
    /**
     * 描述
     */
    Desc?: string;
    /**
     * 状态，
  NOT_ENABLED未启用
  ENABLED 已启用
     */
    Active?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 知识库的meta信息
     */
    Meta?: string;
}
/**
 * 文件拆分信息
 */
export interface KnowledgeSplitterPreprocess {
    /**
     * 在对文件拆分时，配置是否将 Title 追加到切分后的段落后面一并 Embedding。取值如下所示：
  false：不追加。
  true：将段落 Title 追加到切分后的段落。
  
     */
    AppendTitleToChunk?: boolean;
    /**
     * 在对文件拆分时，配置是否将关键字 keywords 追加到切分后的段落一并 Embedding。取值如下所示：
  false：不追加。
  true：将全文的 keywords 追加到切分后的段落。
  
     */
    AppendKeywordsToChunk?: boolean;
}
/**
 * DescribeKnowledgeDocumentSetDetail请求参数结构体
 */
export interface DescribeKnowledgeDocumentSetDetailRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    CollectionView: string;
    /**
     * 文件名
     */
    DocumentSetName?: string;
    /**
     * 文件id
     */
    DocumentSetId?: string;
}
/**
 * CreateKnowledgeSet返回参数结构体
 */
export interface CreateKnowledgeSetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteKnowledgeSet请求参数结构体
 */
export interface DeleteKnowledgeSetRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    Name: string;
}
/**
 * 数据源关联的的信息
 */
export interface RelationField {
    /**
     * 关联关系字段
     */
    Field?: string;
    /**
     * 关联关系格式
     */
    Format?: string;
    /**
     * 关联数据源名称
     */
    RelateDataSourceName?: string;
}
/**
 * DescribeKnowledgeDocumentSetList请求参数结构体
 */
export interface DescribeKnowledgeDocumentSetListRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    CollectionView: string;
    /**
     * 查询条件
     */
    Query?: PageQuery;
}
/**
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
    /**
     * 每页条数
     */
    PageSize: number;
    /**
     * 页码
     */
    PageIndex: number;
    /**
     * 环境 id
     */
    EnvId: string;
    /**
     * 应用id数组
     */
    Appids?: Array<string>;
    /**
     * 数据源id数组
     */
    DataSourceIds?: Array<string>;
    /**
     * 数据源名称数组
     */
    DataSourceNames?: Array<string>;
    /**
     * 数据源类型 database-自建数据源；cloud-integration-自定义数据源
     */
    DataSourceType?: string;
    /**
     * 数据源模糊查询参数
     */
    QueryOption?: DataSourceQueryOption;
    /**
     * 数据源视图Id数组
     */
    ViewIds?: Array<string>;
    /**
     * 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用
     */
    AppLinkStatus?: number;
    /**
     * 查询应用绑定数据源: 0: 否,1: 是
     */
    QueryBindToApp?: number;
    /**
     * 查询连接器 0 数据模型 1 连接器 2 自定义连接器
     */
    QueryConnector?: number;
    /**
     * 废弃中
     */
    NotQuerySubTypeList?: Array<string>;
    /**
     * 查询channelList
     */
    ChannelList?: Array<string>;
    /**
     * 是否查询数据源关联关系
     */
    QueryDataSourceRelationList?: boolean;
    /**
     * db实例类型
     */
    DbInstanceType?: string;
    /**
     * 数据库表名列表
     */
    DatabaseTableNames?: Array<string>;
    /**
     * 是否查询系统模型，默认为true，需要显示设置为False才能过滤系统模型
     */
    QuerySystemModel?: boolean;
}
/**
 * DeleteKnowledgeDocumentSet请求参数结构体
 */
export interface DeleteKnowledgeDocumentSetRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    CollectionView: string;
    /**
     * 删除时制定的条件
     */
    Query?: DocumentQuery;
}
/**
 * 搜索数据的集合
 */
export interface QureyKnowledgeDocumentSet {
    /**
     * 文件id
     */
    DocumentSetId?: string;
    /**
     * 文件名
     */
    DocumentSetName?: string;
    /**
     * 文件内容前 200个字符。
     */
    TextPrefix?: string;
    /**
     * 文件拆分信息
     */
    SplitterPreprocess?: KnowledgeSplitterPreprocess;
    /**
     * 文件详情
     */
    DocumentSetInfo?: QureyKnowledgeDocumentSetInfo;
    /**
     * 文件标题
     */
    FileTitle?: string;
    /**
     * 文件元信息，必须为jsonstring
     */
    FileMetaData?: string;
    /**
     * name
     */
    Name?: string;
    /**
     * 作者
     */
    Author?: string;
}
/**
 * DescribeKnowledgeSetList返回参数结构体
 */
export interface DescribeKnowledgeSetListResponse {
    /**
     * 知识库列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: KnowledgeSetRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
    /**
     * data 数据
     */
    Data?: DataSourceDetailItems;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadKnowledgeDocumentSet返回参数结构体
 */
export interface UploadKnowledgeDocumentSetResponse {
    /**
     * 新增文件返回信息
     */
    Data?: UploadKnowledgeDocumentSetRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteKnowledgeDocumentSet返回参数结构体
 */
export interface DeleteKnowledgeDocumentSetResponse {
    /**
     * 新增文件返回信息
     */
    Data?: DeleteKnowledgeDocumentSetRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据源授权信息
 */
export interface TicketAuthInfo {
    /**
     * 授权用户
     */
    AuthUser?: string;
}
/**
 * CreateKnowledgeSet请求参数结构体
 */
export interface CreateKnowledgeSetRequest {
    /**
     * 环境ID
     */
    EnvId: string;
    /**
     * 知识库标识
     */
    Name: string;
    /**
     * 知识库名称
     */
    Title: string;
    /**
     * 描述
     */
    Desc?: string;
    /**
     * 知识库的meta信息
     */
    Meta?: string;
}
/**
 * 上传知识库文档返回结果
 */
export interface DescribeKnowledgeDocumentSetDetailRsp {
    /**
     * 获取的数量。
     */
    Count?: number;
    /**
     * 文档信息
     */
    DocumentSet?: KnowledgeDocumentSet;
}
/**
 * 查询文件集合信息详情
 */
export interface QureyKnowledgeDocumentSetInfo {
    /**
     * 文件的字符数。
     */
    TextLength?: number;
    /**
     * 文件的字节数。
     */
    ByteLength?: number;
    /**
     * 文件被预处理、Embedding 向量化的进度。
     */
    IndexedProgress?: number;
    /**
     * 文件预处理、Embedding 向量化的状态。
  New：等待解析。
  Loading：文件解析中。
  Failure：文件解析、写入出错。
  Ready：文件解析、写入完成。
  
     */
    IndexedStatus?: string;
    /**
     * 错误信息
     */
    IndexedErrorMsg?: string;
    /**
     * 文件创建时间。
     */
    CreateTime?: string;
    /**
     * 文件最后更新时间。
     */
    LastUpdateTime?: string;
    /**
     * 文件关键字。
     */
    Keywords?: string;
}
/**
 * 删除文档出参
 */
export interface DescribeKnowledgeDocumentSetListRsp {
    /**
     * 文件集
     */
    DocumentSets?: Array<QureyKnowledgeDocumentSet>;
    /**
     * 条数
     */
    Count?: number;
}
/**
 * 文档信息
 */
export interface KnowledgeDocumentSet {
    /**
     * 文档id
     */
    DocumentSetId?: string;
    /**
     * 文档名
     */
    DocumentSetName?: string;
    /**
     * 文件完整内容。
     */
    Text?: string;
    /**
     * 文件内容前 200个字符。
     */
    TextPrefix?: string;
    /**
     * 文件详情
     */
    DocumentSetInfo?: KnowledgeDocumentSetInfo;
    /**
     * 文件拆分信息
     */
    SplitterPreprocess?: KnowledgeSplitterPreprocess;
    /**
     * 未使用
     */
    Name?: string;
    /**
     * 文档标题
     */
    FileTitle?: string;
    /**
     * 文档元信息，必须为jsonstring
     */
    FileMetaData?: string;
    /**
     * 作者
     */
    Author?: string;
}
/**
 * DescribeKnowledgeDocumentSetDetail返回参数结构体
 */
export interface DescribeKnowledgeDocumentSetDetailResponse {
    /**
     * 新增文件返回信息
     */
    Data?: DescribeKnowledgeDocumentSetDetailRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据源关联App信息
 */
export interface DataSourceLinkApp {
    /**
     * 应用Id
     */
    Id?: string;
    /**
     * 应用名称
     */
    Title?: string;
    /**
     * 是否编辑状态使用
     */
    EditStatusUse?: number;
    /**
     * 是否预览状态使用
     */
    PreviewStatusUse?: number;
    /**
     * 是否正式状态使用
     */
    OnlineStatusUse?: number;
    /**
     * 数据源ID
     */
    DataSourceId?: string;
}
/**
 * 知识库文档搜索结果
 */
export interface SearchDocRsp {
    /**
     * 文档基本信息
     */
    DocInfos?: Array<SearchDocInfo>;
    /**
     * 文档总数
     */
    Total?: number;
}
/**
 * 查询知识库列表返回
 */
export interface KnowledgeSetRsp {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 知识库列表
     */
    KnowledgeSets?: Array<KnowledgeSet>;
}
/**
 * 数据详情列表
 */
export interface DataSourceDetailItems {
    /**
     * 数据详情列表
     */
    Rows?: Array<DataSourceDetail>;
    /**
     * 数据源列表总个数
     */
    Count?: number;
}
