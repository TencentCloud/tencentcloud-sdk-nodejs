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
  ScheduleSettings,
  CreateRegisterCodeResponse,
  PreviewReplacedCommandContentResponse,
  CreateCommandResponse,
  DisableInvokerRequest,
  RegisterInstanceInfo,
  AutomationAgentInfo,
  DisableRegisterCodesRequest,
  DescribeRegisterInstancesRequest,
  DeleteRegisterCodesRequest,
  Invocation,
  GeneralResourceQuotaSet,
  RunCommandRequest,
  InvokeCommandRequest,
  DescribeInvocationTasksRequest,
  DeleteRegisterInstanceResponse,
  DescribeRegionsRequest,
  CommandDocument,
  DescribeInvokerRecordsResponse,
  TaskResult,
  ModifyInvokerRequest,
  InvocationTaskBasicInfo,
  DeleteCommandsRequest,
  EnableInvokerResponse,
  DescribeQuotasRequest,
  EnableInvokerRequest,
  DefaultParameterConf,
  DescribeScenesResponse,
  DescribeRegisterInstancesResponse,
  ModifyCommandResponse,
  RegionInfo,
  DescribeInvokersResponse,
  CancelInvocationResponse,
  DeleteRegisterInstanceRequest,
  DeleteCommandResponse,
  DisableInvokerResponse,
  DescribeCommandsResponse,
  CreateRegisterCodeRequest,
  CreateInvokerRequest,
  DescribeAutomationAgentStatusRequest,
  InvokeCommandResponse,
  ModifyCommandRequest,
  DescribeInvokersRequest,
  DescribeCommandsRequest,
  DeleteInvokerResponse,
  DescribeInvocationsRequest,
  Filter,
  DescribeInvocationsResponse,
  DescribeInvocationTasksResponse,
  Command,
  PreviewReplacedCommandContentRequest,
  InvocationTask,
  ModifyInvokerResponse,
  ModifyRegisterInstanceResponse,
  InvokerRecord,
  DescribeRegisterCodesResponse,
  DescribeAutomationAgentStatusResponse,
  CreateInvokerResponse,
  CancelInvocationRequest,
  DescribeRegisterCodesRequest,
  DeleteCommandRequest,
  DeleteCommandsResponse,
  Scene,
  DescribeScenesRequest,
  DeleteRegisterCodesResponse,
  DescribeInvokerRecordsRequest,
  DeleteInvokerRequest,
  ModifyRegisterInstanceRequest,
  Tag,
  RunCommandResponse,
  DisableRegisterCodesResponse,
  DescribeQuotasResponse,
  RegisterCodeInfo,
  DescribeRegionsResponse,
  CreateCommandRequest,
  Invoker,
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
     * 取消一台或多台CVM实例执行的命令

* 如果命令还未下发到agent，任务状态处于处于PENDING、DELIVERING、DELIVER_DELAYED，取消后任务状态是CANCELLED
* 如果命令已下发到agent，任务状态处于RUNNING， 取消后任务状态是TERMINATED
     */
  async CancelInvocation(
    req: CancelInvocationRequest,
    cb?: (error: string, rep: CancelInvocationResponse) => void
  ): Promise<CancelInvocationResponse> {
    return this.request("CancelInvocation", req, cb)
  }

  /**
   * 接口用于修改托管实例信息。
   */
  async ModifyRegisterInstance(
    req: ModifyRegisterInstanceRequest,
    cb?: (error: string, rep: ModifyRegisterInstanceResponse) => void
  ): Promise<ModifyRegisterInstanceResponse> {
    return this.request("ModifyRegisterInstance", req, cb)
  }

  /**
   * 此接口用于创建执行器。
   */
  async CreateInvoker(
    req: CreateInvokerRequest,
    cb?: (error: string, rep: CreateInvokerResponse) => void
  ): Promise<CreateInvokerResponse> {
    return this.request("CreateInvoker", req, cb)
  }

  /**
     * 此接口用于删除命令。
如果命令与执行器关联，则无法被删除。
     */
  async DeleteCommand(
    req: DeleteCommandRequest,
    cb?: (error: string, rep: DeleteCommandResponse) => void
  ): Promise<DeleteCommandResponse> {
    return this.request("DeleteCommand", req, cb)
  }

  /**
   * 接口用于创建注册码。
   */
  async CreateRegisterCode(
    req: CreateRegisterCodeRequest,
    cb?: (error: string, rep: CreateRegisterCodeResponse) => void
  ): Promise<CreateRegisterCodeResponse> {
    return this.request("CreateRegisterCode", req, cb)
  }

  /**
   * 此接口用于启用执行器。
   */
  async EnableInvoker(
    req: EnableInvokerRequest,
    cb?: (error: string, rep: EnableInvokerResponse) => void
  ): Promise<EnableInvokerResponse> {
    return this.request("EnableInvoker", req, cb)
  }

  /**
   * 此接口用于删除执行器。
   */
  async DeleteInvoker(
    req: DeleteInvokerRequest,
    cb?: (error: string, rep: DeleteInvokerResponse) => void
  ): Promise<DeleteInvokerResponse> {
    return this.request("DeleteInvoker", req, cb)
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
   * 此接口用于预览自定义参数替换后的命令内容。不会触发真实执行。
   */
  async PreviewReplacedCommandContent(
    req: PreviewReplacedCommandContentRequest,
    cb?: (error: string, rep: PreviewReplacedCommandContentResponse) => void
  ): Promise<PreviewReplacedCommandContentResponse> {
    return this.request("PreviewReplacedCommandContent", req, cb)
  }

  /**
   * 此接口用于停止执行器。
   */
  async DisableInvoker(
    req: DisableInvokerRequest,
    cb?: (error: string, rep: DisableInvokerResponse) => void
  ): Promise<DisableInvokerResponse> {
    return this.request("DisableInvoker", req, cb)
  }

  /**
   * 接口用于删除托管实例。
   */
  async DeleteRegisterInstance(
    req: DeleteRegisterInstanceRequest,
    cb?: (error: string, rep: DeleteRegisterInstanceResponse) => void
  ): Promise<DeleteRegisterInstanceResponse> {
    return this.request("DeleteRegisterInstance", req, cb)
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

  /**
   * 批量删除命令接口
   */
  async DeleteCommands(
    req: DeleteCommandsRequest,
    cb?: (error: string, rep: DeleteCommandsResponse) => void
  ): Promise<DeleteCommandsResponse> {
    return this.request("DeleteCommands", req, cb)
  }

  /**
   * 接口用于查询被托管的实例信息。
   */
  async DescribeRegisterInstances(
    req: DescribeRegisterInstancesRequest,
    cb?: (error: string, rep: DescribeRegisterInstancesResponse) => void
  ): Promise<DescribeRegisterInstancesResponse> {
    return this.request("DescribeRegisterInstances", req, cb)
  }

  /**
     * 此接口用于查询 TAT 产品后台地域列表。
RegionState 为 AVAILABLE，代表该地域的 TAT 后台服务已经可用；未返回，代表该地域的 TAT 后台服务尚不可用。
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
   * 此接口用于批量删除注册码。
   */
  async DeleteRegisterCodes(
    req: DeleteRegisterCodesRequest,
    cb?: (error: string, rep: DeleteRegisterCodesResponse) => void
  ): Promise<DeleteRegisterCodesResponse> {
    return this.request("DeleteRegisterCodes", req, cb)
  }

  /**
   * 接口用于查询注册码信息。
   */
  async DescribeRegisterCodes(
    req: DescribeRegisterCodesRequest,
    cb?: (error: string, rep: DescribeRegisterCodesResponse) => void
  ): Promise<DescribeRegisterCodesResponse> {
    return this.request("DescribeRegisterCodes", req, cb)
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
   * 此接口用于获取配额信息
   */
  async DescribeQuotas(
    req: DescribeQuotasRequest,
    cb?: (error: string, rep: DescribeQuotasResponse) => void
  ): Promise<DescribeQuotasResponse> {
    return this.request("DescribeQuotas", req, cb)
  }

  /**
   * 此接口用于批量禁用注册码。
   */
  async DisableRegisterCodes(
    req: DisableRegisterCodesRequest,
    cb?: (error: string, rep: DisableRegisterCodesResponse) => void
  ): Promise<DisableRegisterCodesResponse> {
    return this.request("DisableRegisterCodes", req, cb)
  }

  /**
   * 此接口用于查询场景详情。
   */
  async DescribeScenes(
    req: DescribeScenesRequest,
    cb?: (error: string, rep: DescribeScenesResponse) => void
  ): Promise<DescribeScenesResponse> {
    return this.request("DescribeScenes", req, cb)
  }

  /**
   * 此接口用于查询执行器的执行记录。
   */
  async DescribeInvokerRecords(
    req: DescribeInvokerRecordsRequest,
    cb?: (error: string, rep: DescribeInvokerRecordsResponse) => void
  ): Promise<DescribeInvokerRecordsResponse> {
    return this.request("DescribeInvokerRecords", req, cb)
  }

  /**
   * 此接口用于修改执行器。
   */
  async ModifyInvoker(
    req: ModifyInvokerRequest,
    cb?: (error: string, rep: ModifyInvokerResponse) => void
  ): Promise<ModifyInvokerResponse> {
    return this.request("ModifyInvoker", req, cb)
  }

  /**
   * 此接口用于查询执行器信息。
   */
  async DescribeInvokers(
    req: DescribeInvokersRequest,
    cb?: (error: string, rep: DescribeInvokersResponse) => void
  ): Promise<DescribeInvokersResponse> {
    return this.request("DescribeInvokers", req, cb)
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
}
