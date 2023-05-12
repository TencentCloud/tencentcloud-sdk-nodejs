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
  RetryRunsResponse,
  RunApplicationResponse,
  ExecutionTime,
  RunStatusCount,
  GetRunStatusRequest,
  DescribeRunsResponse,
  ImportTableFileResponse,
  DeleteEnvironmentResponse,
  Environment,
  GetRunCallsRequest,
  DescribeRunsRequest,
  Run,
  TableColumn,
  DescribeTablesRowsRequest,
  DescribeEnvironmentsResponse,
  DescribeTablesResponse,
  VPCOption,
  RetryRunsRequest,
  ImportTableFileRequest,
  ClusterOption,
  RunApplicationRequest,
  DeleteEnvironmentRequest,
  RunGroup,
  DatabaseOption,
  GetRunCallsResponse,
  Filter,
  ResourceIds,
  DescribeRunGroupsResponse,
  EnvironmentConfig,
  DescribeTablesRowsResponse,
  CreateEnvironmentResponse,
  TableRow,
  DescribeRunGroupsRequest,
  GetRunStatusResponse,
  StorageOption,
  DescribeTablesRequest,
  DescribeEnvironmentsRequest,
  RunOption,
  Table,
  CVMOption,
  RunMetadata,
  CreateEnvironmentRequest,
} from "./omics_models"

/**
 * omics client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("omics.tencentcloudapi.com", "2022-11-28", clientConfig)
  }

  /**
   * 查询表格行数据。
   */
  async DescribeTablesRows(
    req: DescribeTablesRowsRequest,
    cb?: (error: string, rep: DescribeTablesRowsResponse) => void
  ): Promise<DescribeTablesRowsResponse> {
    return this.request("DescribeTablesRows", req, cb)
  }

  /**
   * 查询环境列表。
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 导入表格文件。
   */
  async ImportTableFile(
    req: ImportTableFileRequest,
    cb?: (error: string, rep: ImportTableFileResponse) => void
  ): Promise<ImportTableFileResponse> {
    return this.request("ImportTableFile", req, cb)
  }

  /**
   * 查询任务详情。
   */
  async GetRunStatus(
    req: GetRunStatusRequest,
    cb?: (error: string, rep: GetRunStatusResponse) => void
  ): Promise<GetRunStatusResponse> {
    return this.request("GetRunStatus", req, cb)
  }

  /**
   * 运行应用。
   */
  async RunApplication(
    req: RunApplicationRequest,
    cb?: (error: string, rep: RunApplicationResponse) => void
  ): Promise<RunApplicationResponse> {
    return this.request("RunApplication", req, cb)
  }

  /**
   * 创建组学平台计算环境。
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 重试任务。
   */
  async RetryRuns(
    req: RetryRunsRequest,
    cb?: (error: string, rep: RetryRunsResponse) => void
  ): Promise<RetryRunsResponse> {
    return this.request("RetryRuns", req, cb)
  }

  /**
   * 查询任务列表。
   */
  async DescribeRuns(
    req: DescribeRunsRequest,
    cb?: (error: string, rep: DescribeRunsResponse) => void
  ): Promise<DescribeRunsResponse> {
    return this.request("DescribeRuns", req, cb)
  }

  /**
   * 查询任务批次列表。
   */
  async DescribeRunGroups(
    req: DescribeRunGroupsRequest,
    cb?: (error: string, rep: DescribeRunGroupsResponse) => void
  ): Promise<DescribeRunGroupsResponse> {
    return this.request("DescribeRunGroups", req, cb)
  }

  /**
   * 删除环境。
   */
  async DeleteEnvironment(
    req: DeleteEnvironmentRequest,
    cb?: (error: string, rep: DeleteEnvironmentResponse) => void
  ): Promise<DeleteEnvironmentResponse> {
    return this.request("DeleteEnvironment", req, cb)
  }

  /**
   * 查询表格。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }

  /**
   * 查询作业详情。
   */
  async GetRunCalls(
    req: GetRunCallsRequest,
    cb?: (error: string, rep: GetRunCallsResponse) => void
  ): Promise<GetRunCallsResponse> {
    return this.request("GetRunCalls", req, cb)
  }
}
