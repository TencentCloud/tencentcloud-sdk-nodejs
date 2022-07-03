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
  DescribeProjectResponse,
  DescribeProjectRequest,
  DescribeTaskInstancesRequest,
  DescribeTaskInstancesResponse,
  TaskInstanceInfo,
  DescribeTaskInstancesData,
  OrderField,
  DescribeRelatedInstancesRequest,
  DescribeRelatedInstancesResponse,
} from "./wedata_models"

/**
 * wedata client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wedata.tencentcloudapi.com", "2021-08-20", clientConfig)
  }

  /**
   * 获取项目信息
   */
  async DescribeProject(
    req: DescribeProjectRequest,
    cb?: (error: string, rep: DescribeProjectResponse) => void
  ): Promise<DescribeProjectResponse> {
    return this.request("DescribeProject", req, cb)
  }

  /**
   * 查询任务实例的关联实例列表
   */
  async DescribeRelatedInstances(
    req: DescribeRelatedInstancesRequest,
    cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void
  ): Promise<DescribeRelatedInstancesResponse> {
    return this.request("DescribeRelatedInstances", req, cb)
  }

  /**
   * 查询任务实例列表
   */
  async DescribeTaskInstances(
    req: DescribeTaskInstancesRequest,
    cb?: (error: string, rep: DescribeTaskInstancesResponse) => void
  ): Promise<DescribeTaskInstancesResponse> {
    return this.request("DescribeTaskInstances", req, cb)
  }
}
