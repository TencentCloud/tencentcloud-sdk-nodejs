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
  RemoveChatRequest,
  SqlAgentParameter,
  DescribeReportUrlResponse,
  DescribeAgentDutyTaskDetailRequest,
  UploadDelta,
  DescribeChatDetailRequest,
  DescribeAgentsRequest,
  DescribeChatsRequest,
  ModifyChatTitleResponse,
  CreateAgentInstanceRequest,
  UploadChoice,
  DescribeAgentDutyTasksResponse,
  Parameter,
  RecoverAgentInstanceResponse,
  InstanceInfos,
  DescribeAgentsResponse,
  CreateChatCompletionRequest,
  ModifyChatTitleRequest,
  DescribeAgentInstancesRequest,
  IsolateAgentInstanceResponse,
  PauseAgentWorkRequest,
  CreateAgentInstanceResponse,
  DescribeAgentDutyTasksRequest,
  PauseAgentWorkResponse,
  DescribeChatDetailResponse,
  TerminateAgentInstanceResponse,
  ModifyAgentInstanceParametersResponse,
  IsolateAgentInstanceRequest,
  TagFilter,
  DescribeAgentInstanceRequest,
  ModifyAgentInstanceParametersRequest,
  ContinueAgentWorkResponse,
  DescribeAgentInstancesResponse,
  TagItem,
  CreateChatCompletionRes,
  RecoverAgentInstanceRequest,
  CodeRepo,
  ContinueAgentWorkRequest,
  ChatBrief,
  DescribeChatsResponse,
  Agent,
  DescribeAgentInstanceResponse,
  CreateChatCompletionResponse,
  DescribeReportUrlRequest,
  DescribeAgentDutyTaskDetailResponse,
  AgentInstance,
  ChatDetail,
  RemoveChatResponse,
  TerminateAgentInstanceRequest,
} from "./tdai_models"

/**
 * tdai client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdai.tencentcloudapi.com", "2025-07-17", clientConfig)
  }

  /**
   * 本接口（DescribeChatDetail）用于查询对话详情，通常在用户查询会话的历史记录时使用。
   */
  async DescribeChatDetail(
    req: DescribeChatDetailRequest,
    cb?: (error: string, rep: DescribeChatDetailResponse) => void
  ): Promise<DescribeChatDetailResponse> {
    return this.request("DescribeChatDetail", req, cb)
  }

  /**
   * 本接口（RemoveChat）用于删除会话，通常在用户删除会话时使用。
   */
  async RemoveChat(
    req: RemoveChatRequest,
    cb?: (error: string, rep: RemoveChatResponse) => void
  ): Promise<RemoveChatResponse> {
    return this.request("RemoveChat", req, cb)
  }

  /**
   * 本接口（IsolateAgentInstance）用于隔离智能体实例，通常在用户需要隔离智能体实例时使用。
   */
  async IsolateAgentInstance(
    req: IsolateAgentInstanceRequest,
    cb?: (error: string, rep: IsolateAgentInstanceResponse) => void
  ): Promise<IsolateAgentInstanceResponse> {
    return this.request("IsolateAgentInstance", req, cb)
  }

  /**
   * 本接口（ContinueAgentWork）用于重启智能体实例的值守任务，通常在用户需要重启时使用。
   */
  async ContinueAgentWork(
    req: ContinueAgentWorkRequest,
    cb?: (error: string, rep: ContinueAgentWorkResponse) => void
  ): Promise<ContinueAgentWorkResponse> {
    return this.request("ContinueAgentWork", req, cb)
  }

  /**
   * 查询智能体值守任务列表
   */
  async DescribeAgentDutyTasks(
    req: DescribeAgentDutyTasksRequest,
    cb?: (error: string, rep: DescribeAgentDutyTasksResponse) => void
  ): Promise<DescribeAgentDutyTasksResponse> {
    return this.request("DescribeAgentDutyTasks", req, cb)
  }

  /**
   * 本接口（PauseAgentWork）用于暂停智能体实例的值守任务，通常在用户需要暂停时使用。
   */
  async PauseAgentWork(
    req: PauseAgentWorkRequest,
    cb?: (error: string, rep: PauseAgentWorkResponse) => void
  ): Promise<PauseAgentWorkResponse> {
    return this.request("PauseAgentWork", req, cb)
  }

  /**
   * 本接口（DescribeChats）用于查询对话列表，通常在用户查询会话列表时使用。
   */
  async DescribeChats(
    req: DescribeChatsRequest,
    cb?: (error: string, rep: DescribeChatsResponse) => void
  ): Promise<DescribeChatsResponse> {
    return this.request("DescribeChats", req, cb)
  }

  /**
   * 本接口（DescribeAgentInstance）用于查询智能体实例详情，通常在用户查询所购买的所有智能体实例详情时使用。
   */
  async DescribeAgentInstance(
    req: DescribeAgentInstanceRequest,
    cb?: (error: string, rep: DescribeAgentInstanceResponse) => void
  ): Promise<DescribeAgentInstanceResponse> {
    return this.request("DescribeAgentInstance", req, cb)
  }

  /**
   * 用于创建一次回话的SSE接口
   */
  async CreateChatCompletion(
    req: CreateChatCompletionRequest,
    cb?: (error: string, rep: CreateChatCompletionResponse) => void
  ): Promise<CreateChatCompletionResponse> {
    return this.request("CreateChatCompletion", req, cb)
  }

  /**
   * 本接口（ModifyChatTitle）用于修改会话标题，通常在用户修改会话标题时使用。
   */
  async ModifyChatTitle(
    req: ModifyChatTitleRequest,
    cb?: (error: string, rep: ModifyChatTitleResponse) => void
  ): Promise<ModifyChatTitleResponse> {
    return this.request("ModifyChatTitle", req, cb)
  }

  /**
   * 查询智能体值守任务详情
   */
  async DescribeAgentDutyTaskDetail(
    req: DescribeAgentDutyTaskDetailRequest,
    cb?: (error: string, rep: DescribeAgentDutyTaskDetailResponse) => void
  ): Promise<DescribeAgentDutyTaskDetailResponse> {
    return this.request("DescribeAgentDutyTaskDetail", req, cb)
  }

  /**
   * 智能体报告地址生成并下载
   */
  async DescribeReportUrl(
    req?: DescribeReportUrlRequest,
    cb?: (error: string, rep: DescribeReportUrlResponse) => void
  ): Promise<DescribeReportUrlResponse> {
    return this.request("DescribeReportUrl", req, cb)
  }

  /**
   * 本接口（TerminateAgentInstance）用于下线智能体实例，通常在用户需要下线智能体实例时使用。
   */
  async TerminateAgentInstance(
    req: TerminateAgentInstanceRequest,
    cb?: (error: string, rep: TerminateAgentInstanceResponse) => void
  ): Promise<TerminateAgentInstanceResponse> {
    return this.request("TerminateAgentInstance", req, cb)
  }

  /**
   * 本接口（RecoverAgentInstance）用于解隔离智能体实例，通常在用户需要解隔离智能体实例时使用。
   */
  async RecoverAgentInstance(
    req: RecoverAgentInstanceRequest,
    cb?: (error: string, rep: RecoverAgentInstanceResponse) => void
  ): Promise<RecoverAgentInstanceResponse> {
    return this.request("RecoverAgentInstance", req, cb)
  }

  /**
   * 本接口（ModifyAgentInstanceParameters）用于修改智能体实例的参数列表，通常在用户需要配置智能体实例时使用。
   */
  async ModifyAgentInstanceParameters(
    req: ModifyAgentInstanceParametersRequest,
    cb?: (error: string, rep: ModifyAgentInstanceParametersResponse) => void
  ): Promise<ModifyAgentInstanceParametersResponse> {
    return this.request("ModifyAgentInstanceParameters", req, cb)
  }

  /**
   * 本接口（DescribeAgentInstances）用于查询智能体实例列表，通常在用户查询所购买的所有智能体列表。
   */
  async DescribeAgentInstances(
    req: DescribeAgentInstancesRequest,
    cb?: (error: string, rep: DescribeAgentInstancesResponse) => void
  ): Promise<DescribeAgentInstancesResponse> {
    return this.request("DescribeAgentInstances", req, cb)
  }

  /**
   * 本接口（DescribeAgents）用于查询智能体列表，通常在用户查询所购买的所有智能体列表。
   */
  async DescribeAgents(
    req: DescribeAgentsRequest,
    cb?: (error: string, rep: DescribeAgentsResponse) => void
  ): Promise<DescribeAgentsResponse> {
    return this.request("DescribeAgents", req, cb)
  }

  /**
   * 本接口（CreateAgentInstance）用于创建一个智能体实例，通常在用户购买一个智能体实例时使用。
   */
  async CreateAgentInstance(
    req: CreateAgentInstanceRequest,
    cb?: (error: string, rep: CreateAgentInstanceResponse) => void
  ): Promise<CreateAgentInstanceResponse> {
    return this.request("CreateAgentInstance", req, cb)
  }
}
