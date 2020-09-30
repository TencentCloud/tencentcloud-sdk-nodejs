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
  DeleteModelRequest,
  Log,
  DeleteJobResponse,
  CreateJobRequest,
  CreateJobResponse,
  InstallAgentResponse,
  DescribeModelResponse,
  DescribeModelRequest,
  DescribeJobRequest,
  ListJobsRequest,
  Job,
  CreateModelResponse,
  ListModelsRequest,
  QueryLogsResponse,
  InstallAgentRequest,
  ListJobsResponse,
  QueryLogsRequest,
  Model,
  DeleteModelResponse,
  ListModelsResponse,
  DeleteJobRequest,
  CreateModelRequest,
  DescribeJobResponse,
} from "./tia_models"

/**
 * tia client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tia.tencentcloudapi.com", "2018-02-26", clientConfig)
  }

  /**
   * 部署模型，用以对外提供服务。有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
   */
  async CreateModel(
    req: CreateModelRequest,
    cb?: (error: string, rep: CreateModelResponse) => void
  ): Promise<CreateModelResponse> {
    return this.request("CreateModel", req, cb)
  }

  /**
   * 列举训练任务
   */
  async ListJobs(
    req: ListJobsRequest,
    cb?: (error: string, rep: ListJobsResponse) => void
  ): Promise<ListJobsResponse> {
    return this.request("ListJobs", req, cb)
  }

  /**
   * 创建训练任务
   */
  async CreateJob(
    req: CreateJobRequest,
    cb?: (error: string, rep: CreateJobResponse) => void
  ): Promise<CreateJobResponse> {
    return this.request("CreateJob", req, cb)
  }

  /**
   * 描述已经部署的某个模型。而模型部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
   */
  async DescribeModel(
    req: DescribeModelRequest,
    cb?: (error: string, rep: DescribeModelResponse) => void
  ): Promise<DescribeModelResponse> {
    return this.request("DescribeModel", req, cb)
  }

  /**
   * 查询 TI-A 训练任务的日志
   */
  async QueryLogs(
    req: QueryLogsRequest,
    cb?: (error: string, rep: QueryLogsResponse) => void
  ): Promise<QueryLogsResponse> {
    return this.request("QueryLogs", req, cb)
  }

  /**
   * 用以列举已经部署的模型。而部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。不同部署模式下的模型分开列出。
   */
  async ListModels(
    req: ListModelsRequest,
    cb?: (error: string, rep: ListModelsResponse) => void
  ): Promise<ListModelsResponse> {
    return this.request("ListModels", req, cb)
  }

  /**
   * 删除训练任务
   */
  async DeleteJob(
    req: DeleteJobRequest,
    cb?: (error: string, rep: DeleteJobResponse) => void
  ): Promise<DeleteJobResponse> {
    return this.request("DeleteJob", req, cb)
  }

  /**
   * 删除指定的部署模型。模型有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
   */
  async DeleteModel(
    req: DeleteModelRequest,
    cb?: (error: string, rep: DeleteModelResponse) => void
  ): Promise<DeleteModelResponse> {
    return this.request("DeleteModel", req, cb)
  }

  /**
   * 获取训练任务详情
   */
  async DescribeJob(
    req: DescribeJobRequest,
    cb?: (error: string, rep: DescribeJobResponse) => void
  ): Promise<DescribeJobResponse> {
    return this.request("DescribeJob", req, cb)
  }

  /**
   * 安装agent
   */
  async InstallAgent(
    req: InstallAgentRequest,
    cb?: (error: string, rep: InstallAgentResponse) => void
  ): Promise<InstallAgentResponse> {
    return this.request("InstallAgent", req, cb)
  }
}
