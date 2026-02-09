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

/**
 * UploadAndCommitFile请求参数结构体
 */
export interface UploadAndCommitFileRequest {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 上传文件列表
   */
  CosFiles?: Array<CosFileInfo>
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * GetKnowledgeBaseList请求参数结构体
 */
export interface GetKnowledgeBaseListRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * AddChunk请求参数结构体
 */
export interface AddChunkRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 文件ID
   */
  FileId: string
  /**
   * 新增chunk的后面一个ChunkID。如果是空就是插到队尾。插入位置的下一个 chunkId。如果插到最前面，传入原切片的第一个。
   */
  BeforeChunkId?: string
  /**
   * 显式指定的位置,实际的位置。从 0 开始计算。0 代表插到最前面，chunk total 代表插到最后面。
   */
  InsertPos?: number
  /**
   * chunk内容
   */
  Content?: string
  /**
   * 新 Chunk 插入到目标 Chunk ​之后的位置。插入位置的上一个 chunkId
   */
  AfterChunkId?: string
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * QuerySceneList返回参数结构体
 */
export interface QuerySceneListResponse {
  /**
   * 场景列表
   */
  Datas?: Array<Scene>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyChunk请求参数结构体
 */
export interface ModifyChunkRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 文件ID
   */
  FileId: string
  /**
   * 切片ID
   */
  ChunkId?: string
  /**
   * 编辑后的文本
   */
  Content?: string
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * ChatAI返回参数结构体
 */
export interface ChatAIResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * DeleteChunk请求参数结构体
 */
export interface DeleteChunkRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 文件ID
   */
  FileId: string
  /**
   * 切片ID
   */
  ChunkIds: Array<string>
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * GetSessionDetails返回参数结构体
 */
export interface GetSessionDetailsResponse {
  /**
   * 会话记录详情
   */
  RecordList?: Array<Record>
  /**
   * 记录总数
   */
  RecordCount?: number
  /**
   * 当前在运行的record信息
   */
  RunRecord?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户对象的权限
 */
export interface ModelUserAuthority {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 模块，分为知识库knowledge、数据源datasource、自定义场景scene
   */
  Module?: string
  /**
   * 对象创建者
   */
  CreatorUin?: string
  /**
   * 对象id,分为知识库id、数据源id、场景id
   */
  ObjectId?: string
  /**
   * 作用范围：1仅自己使用，2指定用户，0全员
   */
  UseScope?: number
  /**
   * 可使用的用户列表
   */
  AuthorityUins?: Array<string>
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * 问答数据
 */
export interface ExampleQA {
  /**
   * 示例记录的唯一业务 ID
   */
  ExampleId?: string
  /**
   * 问题列表
   */
  Questions?: Array<string>
  /**
   * 对应的标准答案或回复
   */
  Answer?: string
  /**
   * 内容类型，类型包含 'text', 'sql', 'code'
   */
  Type?: string
  /**
   * 记录的创建时间
   */
  CreateTime?: string
  /**
   * 记录的最后更新时间
   */
  UpdateTime?: string
}

/**
 * QueryChunkList返回参数结构体
 */
export interface QueryChunkListResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 分片信息
   */
  Chunks?: Array<Chunk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddScene请求参数结构体
 */
export interface AddSceneRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 场景
   */
  Scene?: Scene
  /**
   * 1仅自己使用，2指定用户，0全员
   */
  UseScope?: number
  /**
   * 可使用用户列表
   */
  AuthorityUins?: Array<string>
}

/**
 * GetJobsByKnowledgeBaseId请求参数结构体
 */
export interface GetJobsByKnowledgeBaseIdRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * 上传任务
 */
export interface UploadJob {
  /**
   * id
   */
  Id?: number
  /**
   * 任务id
   */
  JobId?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
  /**
   * uin
   */
  Uin?: string
  /**
   * subuin
   */
  SubUin?: string
  /**
   * Pending、FileUploading、
FileParsing、
Success、
Failed 
	
   */
  Status?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务更新时间
   */
  UpdateTime?: string
  /**
   * 错误信息
   */
  Message?: string
}

/**
 * QueryChunkList请求参数结构体
 */
export interface QueryChunkListRequest {
  /**
   * 表示第一页
   */
  Page?: number
  /**
   * 默认一页展示 10 条
   */
  PageSize?: number
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * StopChatAI请求参数结构体
 */
export interface StopChatAIRequest {
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
}

/**
 * 检索配置
 */
export interface SearchConfig {
  /**
   * 检索类型：0:混合搜索 1：向量搜索 2：全文搜索
   */
  Type?: number
  /**
   * 召回数量最大值
   */
  Num?: number
  /**
   * 权重配置
   */
  EmbeddingWeight?: number
  /**
   * 0:关闭 1:开启，默认1
   */
  Rerank?: number
  /**
   * 0:关闭 1:开启，默认0
   */
  AutoRag?: number
  /**
   * AutoRag关联的知识库ID列表
   */
  KnowledgeBaseIds?: Array<string>
  /**
   * AutoRag搜索状态：0-未完成，1-已完成。仅当AutoRag=1时，该字段有效
   */
  SearchStatus?: number
}

/**
 * 步骤扩展结构
 */
export interface StepExpand {
  /**
   * 标题
   */
  Title?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * cellid数组
   */
  CellIds?: Array<string>
}

/**
 * GetSessionDetails请求参数结构体
 */
export interface GetSessionDetailsRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 会话ID
   */
  SessionId?: string
}

/**
 * QueryUserAuthority返回参数结构体
 */
export interface QueryUserAuthorityResponse {
  /**
   * 对象权限信息
   */
  ModelUserAuthority?: ModelUserAuthority
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyKnowledgeBase请求参数结构体
 */
export interface ModifyKnowledgeBaseRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 操作类型：Create，Update，Delete
   */
  OperateType: string
  /**
   * 知识库id，update和delete时必填
   */
  KnowledgeBaseId?: string
  /**
   * 知识库名称，create和update时必填。只允许字母、数字、汉字、下划线
   */
  KnowledgeBaseName?: string
  /**
   * 知识库描述，create和update时必填
   */
  KnowledgeBaseDesc?: string
  /**
   * 1仅自己使用，2指定用户，0全员
   */
  UseScope?: number
  /**
   * 可使用用户列表
   */
  AuthorityUins?: Array<string>
}

/**
 * DeleteChunk返回参数结构体
 */
export interface DeleteChunkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataAgentSession返回参数结构体
 */
export interface CreateDataAgentSessionResponse {
  /**
   * 会话
   */
  SessionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos 文件信息
 */
export interface CosFileInfo {
  /**
   * 文件名称，包含后缀
   */
  FileName?: string
  /**
   * 文件类型，"PDF", "DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX", "MD", "TXT", "PNG", "JPG", "JPEG", "CSV"
   */
  FileType?: string
  /**
   * 用户文件的cosurl
   */
  UserCosUrl?: string
}

/**
 * 知识库信息
 */
export interface KnowledgeBase {
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
  /**
   * 知识库名称

   */
  KnowledgeBaseName?: string
  /**
   * 知识库描述
   */
  KnowledgeBaseDesc?: string
  /**
   * 创建者subuin
   */
  Creator?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 文件数量
   */
  FileNum?: number
  /**
   * 知识库关联的数据库列表，目前是只绑定一个数据源，数组预留拓展
   */
  DatasourceIds?: Array<string>
}

/**
 * ModifyUserAuthority请求参数结构体
 */
export interface ModifyUserAuthorityRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 分为知识库knowledge、数据源datasource、自定义场景scene
   */
  Module: string
  /**
   * 对象id,分为知识库id、数据源id、场景id
   */
  ObjectId: string
  /**
   * 作用范围：1仅自己使用，2指定用户，0全员
   */
  UseScope?: number
  /**
   * 可使用的用户列表，UseScope=0/1,取值为[]
   */
  AuthorityUins?: Array<string>
}

/**
 * GetJobsByKnowledgeBaseId返回参数结构体
 */
export interface GetJobsByKnowledgeBaseIdResponse {
  /**
   * 任务列表详情
   */
  Jobs?: Array<UploadJob>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuerySceneList请求参数结构体
 */
export interface QuerySceneListRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 场景id
   */
  SceneId?: string
  /**
   * 场景名称
   */
  SceneName?: string
  /**
   * 页数
   */
  Page?: number
  /**
   * 页的大小
   */
  PageSize?: number
}

/**
 * StopChatAI返回参数结构体
 */
export interface StopChatAIResponse {
  /**
   * 会话
   */
  SessionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetUploadJobDetails返回参数结构体
 */
export interface GetUploadJobDetailsResponse {
  /**
   * 任务详情
   */
  Job?: UploadJob
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadAndCommitFile返回参数结构体
 */
export interface UploadAndCommitFileResponse {
  /**
   * 上传任务
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyChunk返回参数结构体
 */
export interface ModifyChunkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataAgentSession返回参数结构体
 */
export interface DeleteDataAgentSessionResponse {
  /**
   * 删除的会话ID
   */
  SessionId?: string
  /**
   * 删除的会话ID列表
   */
  SessionIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddScene返回参数结构体
 */
export interface AddSceneResponse {
  /**
   * 场景id
   */
  SceneId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetKnowledgeBaseFileList返回参数结构体
 */
export interface GetKnowledgeBaseFileListResponse {
  /**
   * 文件信息列表
   */
  FileList?: Array<FileInfo>
  /**
   * 文件信息总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 问答结构
 */
export interface Record {
  /**
   * 问题内容
   */
  Question: string
  /**
   * 回答内容
   */
  Answer?: string
  /**
   * 思考内容
   */
  Think?: string
  /**
   * 任务列表
   */
  TaskList?: Array<Task>
  /**
   * 记录创建时间
   */
  CreateTime?: string
  /**
   * 记录更新时间
   */
  UpdateTime?: string
  /**
   * 记录id
   */
  RecordId?: string
  /**
   * 总结内容
   */
  FinalSummary?: string
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 1=赞，2=踩，0=无反馈
   */
  Feedback?: number
  /**
   * 数据库信息
   */
  DbInfo?: string
  /**
   * 错误信息
   */
  ErrorContext?: string
  /**
   * TaskList的string字符串
   */
  TaskListStr?: string
  /**
   * 知识库id列表
   */
  KnowledgeBaseIds?: Array<string>
  /**
   * 上下文
   */
  Context?: string
}

/**
 * ChatAI请求参数结构体
 */
export interface ChatAIRequest {
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 问题内容
   */
  Question?: string
  /**
   * 上下文
   */
  Context?: string
  /**
   * 模型
   */
  Model?: string
  /**
   * 是否深度思考
   */
  DeepThinking?: boolean
  /**
   * 数据源id
   */
  DataSourceIds?: Array<string>
  /**
   * agent类型
   */
  AgentType?: string
  /**
   * 需要重新生成答案的记录ID
   */
  OldRecordId?: string
  /**
   * 知识库id列表
   */
  KnowledgeBaseIds?: Array<string>
}

/**
 * DeleteScene返回参数结构体
 */
export interface DeleteSceneResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryUserAuthority请求参数结构体
 */
export interface QueryUserAuthorityRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 分为知识库knowledge、数据源datasource、自定义场景scene
   */
  Module: string
  /**
   * 对象id,分为知识库id、数据源id、场景id
   */
  ObjectId: string
}

/**
 * 知识库文件信息
 */
export interface FileInfo {
  /**
   * 文件名称
   */
  FileName: string
  /**
   * 文件大小，字节
   */
  FileSize: number
  /**
   * 文件类型,0=文本,1=表格，默认0

   */
  Type: number
  /**
   * 文件ID
   */
  FileId: string
  /**
   * 状态，0：数据处理中  1：可用 -1：错误
   */
  Status?: number
  /**
   * 操作者

   */
  CreateUser?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 分片策略
   */
  ChunkConfig?: KnowledgeTaskConfig
  /**
   * 文件来源0=unknow,1=user_cos,2=local
   */
  Source?: number
  /**
   * 文件url
   */
  FileUrl?: string
  /**
   * 是否官方示例，0=否，1=是
   */
  IsShowCase?: number
  /**
   * 文档摘要
   */
  DocumentSummary?: string
}

/**
 * GetKnowledgeBaseFileList请求参数结构体
 */
export interface GetKnowledgeBaseFileListRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 默认 1 表示第一页，可以不填
   */
  Page?: number
  /**
   * 默认 10 一页展示 10 条，可以不填
   */
  PageSize?: number
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
}

/**
 * GetUploadJobDetails请求参数结构体
 */
export interface GetUploadJobDetailsRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 任务id
   */
  JobId?: string
}

/**
 * ModifyUserAuthority返回参数结构体
 */
export interface ModifyUserAuthorityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddChunk返回参数结构体
 */
export interface AddChunkResponse {
  /**
   * 新增的ChunkId
   */
  ChunkId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务步骤
 */
export interface StepInfo {
  /**
   * 步骤id
   */
  Id: number
  /**
   * 步骤名称
   */
  Name: string
  /**
   * 步骤状态
   */
  Status: string
  /**
   * 类型(text/expand)
   */
  Type: string
  /**
   * 总结
   */
  Summary?: string
  /**
   * 步骤扩展结构
   */
  Expand?: StepExpand
  /**
   * 描述
   */
  Desc?: string
}

/**
 * 文件分片
 */
export interface Chunk {
  /**
   * 切片ID
   */
  Id?: string
  /**
   * 切片内容
   */
  Content?: string
  /**
   * 切片的字数
   */
  Size?: number
  /**
   * 切片概要
   */
  Summary?: string
}

/**
 * UpdateScene返回参数结构体
 */
export interface UpdateSceneResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 场景
 */
export interface Scene {
  /**
   * 场景ID
   */
  SceneId?: string
  /**
   * 场景名称
   */
  SceneName?: string
  /**
   * 技能列表，包含：rag（知识检索）、data_analytics（数据分析）、data_prediction（数据预测）
   */
  Skills?: Array<string>
  /**
   * 提示词文本
   */
  Prompt?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 检索配置
   */
  SearchConfig?: SearchConfig
  /**
   * 示例问答列表
   */
  ExampleQAList?: Array<ExampleQA>
  /**
   * 记录的创建时间
   */
  CreateTime?: string
  /**
   * 记录的最后更新时间
   */
  UpdateTime?: string
  /**
   * 创建者Uin
   */
  CreatorUin?: string
}

/**
 * 任务配置
 */
export interface KnowledgeTaskConfig {
  /**
   * 切片类型  0:自定义切片，1：智能切片
   */
  ChunkType?: number
  /**
   * /智能切片：最小值 1000，默认 4800 自定义切片：正整数即可,默认值 1000
   */
  MaxChunkSize?: number
  /**
   *  切片分隔符,自定义切片使用：默认值为：["\n\n", "\n", "。", "！", "？", "，", ""]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delimiters?: Array<string>
  /**
   * 自定义切片使用:默认0 可重叠字符长度
   */
  ChunkOverlap?: number
  /**
   * 表格类文档解析
   */
  Columns?: Array<ColumnInfo>
  /**
   * 带检索的索引列表
   */
  Indexes?: Array<number | bigint>
  /**
   * 0：不生成文档摘要，1：生成文档概要。默认0，当取1时，GenParaSummary必须也为1
   */
  GenDocSummary?: number
  /**
   * 0：不生成段落摘要，1：生成段落概要。默认0
   */
  GenParaSummary?: number
}

/**
 * UpdateScene请求参数结构体
 */
export interface UpdateSceneRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 场景
   */
  Scene?: Scene
}

/**
 * CreateDataAgentSession请求参数结构体
 */
export interface CreateDataAgentSessionRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
}

/**
 * ModifyKnowledgeBase返回参数结构体
 */
export interface ModifyKnowledgeBaseResponse {
  /**
   * 知识库id
   */
  KnowledgeBaseId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteScene请求参数结构体
 */
export interface DeleteSceneRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 场景id
   */
  SceneId?: string
}

/**
 * 任务信息
 */
export interface Task {
  /**
   * 任务ID
   */
  Id?: number
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 任务步骤列表
   */
  StepInfoList?: Array<StepInfo>
}

/**
 * DeleteDataAgentSession请求参数结构体
 */
export interface DeleteDataAgentSessionRequest {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 会话ID
   */
  SessionId?: string
  /**
   * 批量删除 会话id 列表
   */
  SessionIds?: Array<string>
}

/**
 * 知识库文档表列信息
 */
export interface ColumnInfo {
  /**
   * 列名称
   */
  Name?: string
  /**
   * 列类型：int, bigint, double, date, datetime, string，decimal
   */
  Type?: string
  /**
   * 列名称描述
   */
  Description?: string
  /**
   * 列索引
   */
  Index?: number
  /**
   * 原始字段名称
   */
  OriginalName?: string
}

/**
 * GetKnowledgeBaseList返回参数结构体
 */
export interface GetKnowledgeBaseListResponse {
  /**
   * 用户实例所有知识库列表
   */
  KnowledgeBaseList?: Array<KnowledgeBase>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
