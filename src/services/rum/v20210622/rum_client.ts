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
  RumProject,
  DescribeDataPerformancePageResponse,
  DescribeDataPerformancePageRequest,
  DescribeProjectsResponse,
  DescribeScoresRequest,
  DescribeErrorRequest,
  ScoreInfo,
  DescribeProjectsRequest,
  DescribeLogListResponse,
  Filter,
  DescribeDataLogUrlStatisticsResponse,
  CreateProjectResponse,
  DescribeLogListRequest,
  DescribeScoresResponse,
  DescribeErrorResponse,
  DescribeDataLogUrlStatisticsRequest,
  CreateProjectRequest,
} from "./rum_models"

/**
 * rum client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rum.tencentcloudapi.com", "2021-06-22", clientConfig)
  }

  /**
   * 获取首页错误信息
   */
  async DescribeError(
    req: DescribeErrorRequest,
    cb?: (error: string, rep: DescribeErrorResponse) => void
  ): Promise<DescribeErrorResponse> {
    return this.request("DescribeError", req, cb)
  }

  /**
   * 获取项目下的日志列表（实例创建的项目下的日志列表）
   */
  async DescribeLogList(
    req: DescribeLogListRequest,
    cb?: (error: string, rep: DescribeLogListResponse) => void
  ): Promise<DescribeLogListResponse> {
    return this.request("DescribeLogList", req, cb)
  }

  /**
   * 获取首页分数列表
   */
  async DescribeScores(
    req: DescribeScoresRequest,
    cb?: (error: string, rep: DescribeScoresResponse) => void
  ): Promise<DescribeScoresResponse> {
    return this.request("DescribeScores", req, cb)
  }

  /**
   * 获取PerformancePage信息
   */
  async DescribeDataPerformancePage(
    req: DescribeDataPerformancePageRequest,
    cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void
  ): Promise<DescribeDataPerformancePageResponse> {
    return this.request("DescribeDataPerformancePage", req, cb)
  }

  /**
   * 创建项目（归属于某个团队）
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 获取LogUrlStatistics信息
   */
  async DescribeDataLogUrlStatistics(
    req: DescribeDataLogUrlStatisticsRequest,
    cb?: (error: string, rep: DescribeDataLogUrlStatisticsResponse) => void
  ): Promise<DescribeDataLogUrlStatisticsResponse> {
    return this.request("DescribeDataLogUrlStatistics", req, cb)
  }

  /**
   * 获取项目列表（实例创建的团队下的项目列表）
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }
}
