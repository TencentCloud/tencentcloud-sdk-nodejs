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
  TaskResult,
  CreateCommandResponse,
  AutomationAgentInfo,
  RunCommandRequest,
  DescribeInvocationTasksRequest,
  Invocation,
  CommandDocument,
  ModifyCommandResponse,
  RegionInfo,
  DeleteCommandResponse,
  DescribeCommandsResponse,
  DescribeAutomationAgentStatusRequest,
  InvokeCommandResponse,
  ModifyCommandRequest,
  DescribeCommandsRequest,
  DescribeInvocationsRequest,
  Filter,
  DescribeInvocationsResponse,
  DescribeInvocationTasksResponse,
  Command,
  InvocationTask,
  DescribeAutomationAgentStatusResponse,
  InvocationTaskBasicInfo,
  DeleteCommandRequest,
  InvokeCommandRequest,
  DescribeRegionsRequest,
  RunCommandResponse,
  DescribeRegionsResponse,
  CreateCommandRequest,
} from "./tat_models"

/**
 * tat client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tat.tencentcloudapi.com", "2020-10-28", clientConfig)
  }

  /**
   * 此接口用于查询命令详情。
   */
  async DescribeCommands(
    req: DescribeCommandsRequest,
    cb?: (error: string, rep: DescribeCommandsResponse) => void
  ): Promise<DescribeCommandsResponse> {
    return this.request("DescribeCommands", req, cb)
  }

  /**
   * 此接口用于查询执行活动详情。
   */
  async DescribeInvocations(
    req: DescribeInvocationsRequest,
    cb?: (error: string, rep: DescribeInvocationsResponse) => void
  ): Promise<DescribeInvocationsResponse> {
    return this.request("DescribeInvocations", req, cb)
  }

  /**
   * 此接口用于查询执行任务详情。
   */
  async DescribeInvocationTasks(
    req: DescribeInvocationTasksRequest,
    cb?: (error: string, rep: DescribeInvocationTasksResponse) => void
  ): Promise<DescribeInvocationTasksResponse> {
    return this.request("DescribeInvocationTasks", req, cb)
  }

  /**
   * 此接口用于查询地域列表
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 此接口用于创建命令。
   */
  async CreateCommand(
    req: CreateCommandRequest,
    cb?: (error: string, rep: CreateCommandResponse) => void
  ): Promise<CreateCommandResponse> {
    return this.request("CreateCommand", req, cb)
  }

  /**
   * 此接口用于删除命令。
   */
  async DeleteCommand(
    req: DeleteCommandRequest,
    cb?: (error: string, rep: DeleteCommandResponse) => void
  ): Promise<DeleteCommandResponse> {
    return this.request("DeleteCommand", req, cb)
  }

  /**
   * 此接口用于修改命令。
   */
  async ModifyCommand(
    req: ModifyCommandRequest,
    cb?: (error: string, rep: ModifyCommandResponse) => void
  ): Promise<ModifyCommandResponse> {
    return this.request("ModifyCommand", req, cb)
  }

  /**
   * 此接口用于查询自动化助手客户端的状态。
   */
  async DescribeAutomationAgentStatus(
    req: DescribeAutomationAgentStatusRequest,
    cb?: (error: string, rep: DescribeAutomationAgentStatusResponse) => void
  ): Promise<DescribeAutomationAgentStatusResponse> {
    return this.request("DescribeAutomationAgentStatus", req, cb)
  }

  /**
     * 执行命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 `RUNNING` 状态
* 不可同时指定 CVM 和 Lighthouse
     */
  async RunCommand(
    req: RunCommandRequest,
    cb?: (error: string, rep: RunCommandResponse) => void
  ): Promise<RunCommandResponse> {
    return this.request("RunCommand", req, cb)
  }

  /**
     * 在指定的实例上触发命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 RUNNING 状态
* 不可同时指定 CVM 和 Lighthouse
     */
  async InvokeCommand(
    req: InvokeCommandRequest,
    cb?: (error: string, rep: InvokeCommandResponse) => void
  ): Promise<InvokeCommandResponse> {
    return this.request("InvokeCommand", req, cb)
  }
}
