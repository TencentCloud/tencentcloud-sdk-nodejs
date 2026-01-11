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
  UploadAndCommitFileRequest,
  GetKnowledgeBaseListRequest,
  AddChunkRequest,
  ModifyChunkResponse,
  ChatAIResponse,
  DeleteChunkRequest,
  GetSessionDetailsResponse,
  ModelUserAuthority,
  ModifyChunkRequest,
  QueryChunkListResponse,
  GetJobsByKnowledgeBaseIdRequest,
  UploadJob,
  QueryChunkListRequest,
  StopChatAIRequest,
  StepExpand,
  GetSessionDetailsRequest,
  QueryUserAuthorityResponse,
  ModifyKnowledgeBaseRequest,
  DeleteChunkResponse,
  CreateDataAgentSessionResponse,
  CosFileInfo,
  KnowledgeBase,
  ModifyUserAuthorityRequest,
  GetJobsByKnowledgeBaseIdResponse,
  StopChatAIResponse,
  GetUploadJobDetailsResponse,
  Task,
  DeleteDataAgentSessionResponse,
  GetKnowledgeBaseFileListResponse,
  Record,
  ChatAIRequest,
  QueryUserAuthorityRequest,
  FileInfo,
  GetKnowledgeBaseFileListRequest,
  GetUploadJobDetailsRequest,
  ModifyUserAuthorityResponse,
  AddChunkResponse,
  StepInfo,
  GetKnowledgeBaseListResponse,
  UploadAndCommitFileResponse,
  KnowledgeTaskConfig,
  CreateDataAgentSessionRequest,
  ModifyKnowledgeBaseResponse,
  DeleteDataAgentSessionRequest,
  ColumnInfo,
  Chunk,
} from "./dataagent_models"

/**
 * dataagent client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dataagent.tencentcloudapi.com", "2025-05-13", clientConfig)
  }

  /**
   * 上传提交文件
   */
  async UploadAndCommitFile(
    req: UploadAndCommitFileRequest,
    cb?: (error: string, rep: UploadAndCommitFileResponse) => void
  ): Promise<UploadAndCommitFileResponse> {
    return this.request("UploadAndCommitFile", req, cb)
  }

  /**
   * 编辑修改分片
   */
  async ModifyChunk(
    req: ModifyChunkRequest,
    cb?: (error: string, rep: ModifyChunkResponse) => void
  ): Promise<ModifyChunkResponse> {
    return this.request("ModifyChunk", req, cb)
  }

  /**
   * 文档切片删除
   */
  async DeleteChunk(
    req: DeleteChunkRequest,
    cb?: (error: string, rep: DeleteChunkResponse) => void
  ): Promise<DeleteChunkResponse> {
    return this.request("DeleteChunk", req, cb)
  }

  /**
   * 查询上传任务
   */
  async GetUploadJobDetails(
    req: GetUploadJobDetailsRequest,
    cb?: (error: string, rep: GetUploadJobDetailsResponse) => void
  ): Promise<GetUploadJobDetailsResponse> {
    return this.request("GetUploadJobDetails", req, cb)
  }

  /**
   * 获取知识库列表
   */
  async GetKnowledgeBaseList(
    req: GetKnowledgeBaseListRequest,
    cb?: (error: string, rep: GetKnowledgeBaseListResponse) => void
  ): Promise<GetKnowledgeBaseListResponse> {
    return this.request("GetKnowledgeBaseList", req, cb)
  }

  /**
   * 文档切片新增
   */
  async AddChunk(
    req: AddChunkRequest,
    cb?: (error: string, rep: AddChunkResponse) => void
  ): Promise<AddChunkResponse> {
    return this.request("AddChunk", req, cb)
  }

  /**
   * 提供DataAgent 产品服务API
   */
  async ChatAI(
    req: ChatAIRequest,
    cb?: (error: string, rep: ChatAIResponse) => void
  ): Promise<ChatAIResponse> {
    return this.request("ChatAI", req, cb)
  }

  /**
   * 生成DataAgent 会话ID
   */
  async CreateDataAgentSession(
    req: CreateDataAgentSessionRequest,
    cb?: (error: string, rep: CreateDataAgentSessionResponse) => void
  ): Promise<CreateDataAgentSessionResponse> {
    return this.request("CreateDataAgentSession", req, cb)
  }

  /**
   * 操作知识库
   */
  async ModifyKnowledgeBase(
    req: ModifyKnowledgeBaseRequest,
    cb?: (error: string, rep: ModifyKnowledgeBaseResponse) => void
  ): Promise<ModifyKnowledgeBaseResponse> {
    return this.request("ModifyKnowledgeBase", req, cb)
  }

  /**
   * 修改对象权限
   */
  async ModifyUserAuthority(
    req: ModifyUserAuthorityRequest,
    cb?: (error: string, rep: ModifyUserAuthorityResponse) => void
  ): Promise<ModifyUserAuthorityResponse> {
    return this.request("ModifyUserAuthority", req, cb)
  }

  /**
   * 删除会话
   */
  async DeleteDataAgentSession(
    req: DeleteDataAgentSessionRequest,
    cb?: (error: string, rep: DeleteDataAgentSessionResponse) => void
  ): Promise<DeleteDataAgentSessionResponse> {
    return this.request("DeleteDataAgentSession", req, cb)
  }

  /**
   * 查询对象权限
   */
  async QueryUserAuthority(
    req?: QueryUserAuthorityRequest,
    cb?: (error: string, rep: QueryUserAuthorityResponse) => void
  ): Promise<QueryUserAuthorityResponse> {
    return this.request("QueryUserAuthority", req, cb)
  }

  /**
   * 文档切片查询
   */
  async QueryChunkList(
    req: QueryChunkListRequest,
    cb?: (error: string, rep: QueryChunkListResponse) => void
  ): Promise<QueryChunkListResponse> {
    return this.request("QueryChunkList", req, cb)
  }

  /**
   * 获取知识库文件信息列表
   */
  async GetKnowledgeBaseFileList(
    req: GetKnowledgeBaseFileListRequest,
    cb?: (error: string, rep: GetKnowledgeBaseFileListResponse) => void
  ): Promise<GetKnowledgeBaseFileListResponse> {
    return this.request("GetKnowledgeBaseFileList", req, cb)
  }

  /**
   * 获取用户会话记录详情列表
   */
  async GetSessionDetails(
    req: GetSessionDetailsRequest,
    cb?: (error: string, rep: GetSessionDetailsResponse) => void
  ): Promise<GetSessionDetailsResponse> {
    return this.request("GetSessionDetails", req, cb)
  }

  /**
   * 根据知识库id查询jobs 列表
   */
  async GetJobsByKnowledgeBaseId(
    req: GetJobsByKnowledgeBaseIdRequest,
    cb?: (error: string, rep: GetJobsByKnowledgeBaseIdResponse) => void
  ): Promise<GetJobsByKnowledgeBaseIdResponse> {
    return this.request("GetJobsByKnowledgeBaseId", req, cb)
  }

  /**
   * 中断DataAgent的回答输出
   */
  async StopChatAI(
    req: StopChatAIRequest,
    cb?: (error: string, rep: StopChatAIResponse) => void
  ): Promise<StopChatAIResponse> {
    return this.request("StopChatAI", req, cb)
  }
}
