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
  DescribeDataRepositoryTaskStatusResponse,
  DescribeClusterRoleTokenRequest,
  ClientToken,
  RoleToken,
  DescribeClusterRoleTokenResponse,
  DescribeClusterRolesRequest,
  CreateDataRepositoryTaskRequest,
  DescribeClusterClientTokenRequest,
  CreateDataRepositoryTaskResponse,
  DescribeClusterRolesResponse,
  DescribeDataRepositoryTaskStatusRequest,
  ClusterRole,
  DescribeClusterClientTokenResponse,
} from "./goosefs_models"

/**
 * goosefs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("goosefs.tencentcloudapi.com", "2022-05-19", clientConfig)
  }

  /**
   * 查询GooseFS集群角色
   */
  async DescribeClusterRoles(
    req: DescribeClusterRolesRequest,
    cb?: (error: string, rep: DescribeClusterRolesResponse) => void
  ): Promise<DescribeClusterRolesResponse> {
    return this.request("DescribeClusterRoles", req, cb)
  }

  /**
   * 查询GooseFS集群客户端凭证
   */
  async DescribeClusterClientToken(
    req: DescribeClusterClientTokenRequest,
    cb?: (error: string, rep: DescribeClusterClientTokenResponse) => void
  ): Promise<DescribeClusterClientTokenResponse> {
    return this.request("DescribeClusterClientToken", req, cb)
  }

  /**
   * 获取数据流通任务实时状态，用作客户端控制
   */
  async DescribeDataRepositoryTaskStatus(
    req: DescribeDataRepositoryTaskStatusRequest,
    cb?: (error: string, rep: DescribeDataRepositoryTaskStatusResponse) => void
  ): Promise<DescribeDataRepositoryTaskStatusResponse> {
    return this.request("DescribeDataRepositoryTaskStatus", req, cb)
  }

  /**
   * 查询GooseFS集群角色凭证
   */
  async DescribeClusterRoleToken(
    req: DescribeClusterRoleTokenRequest,
    cb?: (error: string, rep: DescribeClusterRoleTokenResponse) => void
  ): Promise<DescribeClusterRoleTokenResponse> {
    return this.request("DescribeClusterRoleToken", req, cb)
  }

  /**
   * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
   */
  async CreateDataRepositoryTask(
    req: CreateDataRepositoryTaskRequest,
    cb?: (error: string, rep: CreateDataRepositoryTaskResponse) => void
  ): Promise<CreateDataRepositoryTaskResponse> {
    return this.request("CreateDataRepositoryTask", req, cb)
  }
}
