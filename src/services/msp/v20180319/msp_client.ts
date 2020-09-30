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
  DstInfo,
  SrcInfo,
  DescribeMigrationTaskRequest,
  TimeObj,
  ModifyMigrationTaskBelongToProjectRequest,
  TaskStatus,
  ModifyMigrationTaskStatusResponse,
  ListMigrationTaskRequest,
  DeregisterMigrationTaskResponse,
  Project,
  ModifyMigrationTaskBelongToProjectResponse,
  ListMigrationProjectResponse,
  Task,
  RegisterMigrationTaskResponse,
  ModifyMigrationTaskStatusRequest,
  ListMigrationProjectRequest,
  DeregisterMigrationTaskRequest,
  ListMigrationTaskResponse,
  DescribeMigrationTaskResponse,
  RegisterMigrationTaskRequest,
} from "./msp_models"

/**
 * msp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("msp.tencentcloudapi.com", "2018-03-19", clientConfig)
  }

  /**
   * 获取迁移任务列表
   */
  async ListMigrationTask(
    req: ListMigrationTaskRequest,
    cb?: (error: string, rep: ListMigrationTaskResponse) => void
  ): Promise<ListMigrationTaskResponse> {
    return this.request("ListMigrationTask", req, cb)
  }

  /**
   * 注册迁移任务
   */
  async RegisterMigrationTask(
    req: RegisterMigrationTaskRequest,
    cb?: (error: string, rep: RegisterMigrationTaskResponse) => void
  ): Promise<RegisterMigrationTaskResponse> {
    return this.request("RegisterMigrationTask", req, cb)
  }

  /**
   * 更新迁移任务状态
   */
  async ModifyMigrationTaskStatus(
    req: ModifyMigrationTaskStatusRequest,
    cb?: (error: string, rep: ModifyMigrationTaskStatusResponse) => void
  ): Promise<ModifyMigrationTaskStatusResponse> {
    return this.request("ModifyMigrationTaskStatus", req, cb)
  }

  /**
   * 取消注册迁移任务
   */
  async DeregisterMigrationTask(
    req: DeregisterMigrationTaskRequest,
    cb?: (error: string, rep: DeregisterMigrationTaskResponse) => void
  ): Promise<DeregisterMigrationTaskResponse> {
    return this.request("DeregisterMigrationTask", req, cb)
  }

  /**
   * 获取指定迁移任务详情
   */
  async DescribeMigrationTask(
    req: DescribeMigrationTaskRequest,
    cb?: (error: string, rep: DescribeMigrationTaskResponse) => void
  ): Promise<DescribeMigrationTaskResponse> {
    return this.request("DescribeMigrationTask", req, cb)
  }

  /**
   * 更改迁移任务所属项目
   */
  async ModifyMigrationTaskBelongToProject(
    req: ModifyMigrationTaskBelongToProjectRequest,
    cb?: (error: string, rep: ModifyMigrationTaskBelongToProjectResponse) => void
  ): Promise<ModifyMigrationTaskBelongToProjectResponse> {
    return this.request("ModifyMigrationTaskBelongToProject", req, cb)
  }

  /**
   * 获取迁移项目名称列表
   */
  async ListMigrationProject(
    req: ListMigrationProjectRequest,
    cb?: (error: string, rep: ListMigrationProjectResponse) => void
  ): Promise<ListMigrationProjectResponse> {
    return this.request("ListMigrationProject", req, cb)
  }
}
