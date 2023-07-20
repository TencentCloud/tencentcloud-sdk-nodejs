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
  DescribeConfigRequest,
  DescribeWorkspacesRequest,
  Env,
  RunWorkspaceRequest,
  CreateWorkspaceTokenResponse,
  GitRepository,
  CreateWorkspaceTokenRequest,
  CreateWorkspaceRequest,
  RunWorkspaceResponse,
  StopWorkspaceResponse,
  RemoveWorkspaceResponse,
  RemoveWorkspaceRequest,
  LifeCycleCommand,
  StopWorkspaceRequest,
  WorkspaceStatusInfo,
  LifeCycle,
  ModifyWorkspaceResponse,
  CreateWorkspaceResponse,
  Image,
  DescribeConfigResponse,
  DescribeImagesRequest,
  DescribeWorkspacesResponse,
  ModifyWorkspaceRequest,
  DescribeImagesResponse,
} from "./cloudstudio_models"

/**
 * cloudstudio client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudstudio.tencentcloudapi.com", "2023-05-08", clientConfig)
  }

  /**
   * 获取用户配置
   */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 修改工作空间
   */
  async ModifyWorkspace(
    req: ModifyWorkspaceRequest,
    cb?: (error: string, rep: ModifyWorkspaceResponse) => void
  ): Promise<ModifyWorkspaceResponse> {
    return this.request("ModifyWorkspace", req, cb)
  }

  /**
   * 获取用户工作空间列表
   */
  async DescribeWorkspaces(
    req: DescribeWorkspacesRequest,
    cb?: (error: string, rep: DescribeWorkspacesResponse) => void
  ): Promise<DescribeWorkspacesResponse> {
    return this.request("DescribeWorkspaces", req, cb)
  }

  /**
   * 获取基础镜像列表
   */
  async DescribeImages(
    req?: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 创建工作空间
   */
  async CreateWorkspace(
    req: CreateWorkspaceRequest,
    cb?: (error: string, rep: CreateWorkspaceResponse) => void
  ): Promise<CreateWorkspaceResponse> {
    return this.request("CreateWorkspace", req, cb)
  }

  /**
   * 创建工作空间临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
   */
  async CreateWorkspaceToken(
    req: CreateWorkspaceTokenRequest,
    cb?: (error: string, rep: CreateWorkspaceTokenResponse) => void
  ): Promise<CreateWorkspaceTokenResponse> {
    return this.request("CreateWorkspaceToken", req, cb)
  }

  /**
   * 删除工作空间
   */
  async RemoveWorkspace(
    req: RemoveWorkspaceRequest,
    cb?: (error: string, rep: RemoveWorkspaceResponse) => void
  ): Promise<RemoveWorkspaceResponse> {
    return this.request("RemoveWorkspace", req, cb)
  }

  /**
   * 停止运行空间
   */
  async StopWorkspace(
    req: StopWorkspaceRequest,
    cb?: (error: string, rep: StopWorkspaceResponse) => void
  ): Promise<StopWorkspaceResponse> {
    return this.request("StopWorkspace", req, cb)
  }

  /**
   * 运行空间
   */
  async RunWorkspace(
    req: RunWorkspaceRequest,
    cb?: (error: string, rep: RunWorkspaceResponse) => void
  ): Promise<RunWorkspaceResponse> {
    return this.request("RunWorkspace", req, cb)
  }
}
