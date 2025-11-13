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
   * 	 新 Chunk 插入到目标 Chunk ​之后的位置。插入位置的上一个 chunkId
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChunkList请求参数结构体
 */
export interface QueryChunkListRequest {
  /**
   * 默认 1 表示第一页
   */
  Page?: number
  /**
   * 	 默认 10 一页展示 10 条
   */
  PageSize?: number
}

/**
 * StopChatAI请求参数结构体
 */
export type StopChatAIRequest = null

/**
 * GetSessionDetails请求参数结构体
 */
export type GetSessionDetailsRequest = null

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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataAgentSession返回参数结构体
 */
export interface DeleteDataAgentSessionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 新增的chunkid
   */
  ChunkId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

/**
 * CreateDataAgentSession请求参数结构体
 */
export type CreateDataAgentSessionRequest = null

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
export type DeleteDataAgentSessionRequest = null
