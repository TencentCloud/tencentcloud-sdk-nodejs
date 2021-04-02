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
  DescribeExecutionHistoryResponse,
  DescribeExecutionsRequest,
  DescribeFlowServicesResponse,
  StateMachine,
  DescribeFlowServiceDetailResponse,
  DescribeExecutionResponse,
  DescribeFlowServicesRequest,
  DescribeExecutionRequest,
  DescribeExecutionHistoryRequest,
  CreateFlowServiceResponse,
  StartExecutionRequest,
  Filter,
  ExecutionEvent,
  ModifyFlowServiceResponse,
  StartExecutionResponse,
  CreateFlowServiceRequest,
  DescribeExecutionsResponse,
  ModifyFlowServiceRequest,
  DescribeFlowServiceDetailRequest,
  StopExecutionResponse,
  StopExecutionRequest,
} from "./asw_models"

/**
 * asw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("asw.tencentcloudapi.com", "2020-07-22", clientConfig)
  }

  /**
   * 为指定的状态机启动一次执行
   */
  async StartExecution(
    req: StartExecutionRequest,
    cb?: (error: string, rep: StartExecutionResponse) => void
  ): Promise<StartExecutionResponse> {
    return this.request("StartExecution", req, cb)
  }

  /**
   * 终止某个状态机
   */
  async StopExecution(
    req: StopExecutionRequest,
    cb?: (error: string, rep: StopExecutionResponse) => void
  ): Promise<StopExecutionResponse> {
    return this.request("StopExecution", req, cb)
  }

  /**
   * 一次执行会有很多步骤，经过很多节点，这个接口描述某一次执行的事件的历史
   */
  async DescribeExecutionHistory(
    req: DescribeExecutionHistoryRequest,
    cb?: (error: string, rep: DescribeExecutionHistoryResponse) => void
  ): Promise<DescribeExecutionHistoryResponse> {
    return this.request("DescribeExecutionHistory", req, cb)
  }

  /**
   * 查询执行详细信息
   */
  async DescribeExecution(
    req: DescribeExecutionRequest,
    cb?: (error: string, rep: DescribeExecutionResponse) => void
  ): Promise<DescribeExecutionResponse> {
    return this.request("DescribeExecution", req, cb)
  }

  /**
   * 查询指定用户下所有状态机，以列表形式返回
   */
  async DescribeFlowServices(
    req: DescribeFlowServicesRequest,
    cb?: (error: string, rep: DescribeFlowServicesResponse) => void
  ): Promise<DescribeFlowServicesResponse> {
    return this.request("DescribeFlowServices", req, cb)
  }

  /**
   * 对状态机的执行历史进行描述.
   */
  async DescribeExecutions(
    req: DescribeExecutionsRequest,
    cb?: (error: string, rep: DescribeExecutionsResponse) => void
  ): Promise<DescribeExecutionsResponse> {
    return this.request("DescribeExecutions", req, cb)
  }

  /**
   * 该接口用于生成状态机服务
   */
  async CreateFlowService(
    req: CreateFlowServiceRequest,
    cb?: (error: string, rep: CreateFlowServiceResponse) => void
  ): Promise<CreateFlowServiceResponse> {
    return this.request("CreateFlowService", req, cb)
  }

  /**
   * 查询该用户指定状态机下的详情数据。
   */
  async DescribeFlowServiceDetail(
    req: DescribeFlowServiceDetailRequest,
    cb?: (error: string, rep: DescribeFlowServiceDetailResponse) => void
  ): Promise<DescribeFlowServiceDetailResponse> {
    return this.request("DescribeFlowServiceDetail", req, cb)
  }

  /**
   * 该接口用于修改状态机
   */
  async ModifyFlowService(
    req: ModifyFlowServiceRequest,
    cb?: (error: string, rep: ModifyFlowServiceResponse) => void
  ): Promise<ModifyFlowServiceResponse> {
    return this.request("ModifyFlowService", req, cb)
  }
}
