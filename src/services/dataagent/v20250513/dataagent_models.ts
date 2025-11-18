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
 * DeleteChunk返回参数结构体
 */
export interface DeleteChunkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteDataAgentSession返回参数结构体
 */
export interface DeleteDataAgentSessionResponse {
  /**
   * 删除的会话ID
   */
  SessionId?: string
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
