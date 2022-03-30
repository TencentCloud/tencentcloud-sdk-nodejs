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
  ModifyTaskRunStatusResponse,
  TaskGroupAction,
  TaskMonitor,
  TaskConfig,
  DeleteTaskRequest,
  TaskGroup,
  ExecuteTaskResponse,
  TaskGroupConfig,
  Template,
  DescribeTaskExecuteLogsRequest,
  DescribeTaskResponse,
  ModifyTaskRunStatusRequest,
  DescribeTemplateResponse,
  DescribePolicy,
  DescribeTemplateRequest,
  ExecuteTaskInstanceRequest,
  TaskGroupInstance,
  ExecuteTaskRequest,
  DescribeTaskListResponse,
  TemplateGroupAction,
  DescribeTemplateListResponse,
  TagWithDescribe,
  CreateTaskFromTemplateResponse,
  DeleteTaskResponse,
  DescribeTaskRequest,
  Task,
  CreateTaskFromTemplateRequest,
  DescribeTaskListRequest,
  TaskListItem,
  ExecuteTaskInstanceResponse,
  DescribeTaskExecuteLogsResponse,
  TemplateMonitor,
  TemplateGroup,
  TemplatePolicy,
  TaskGroupActionConfig,
  DescribeTemplateListRequest,
  TemplateListItem,
  TagWithCreate,
} from "./cfg_models"

/**
 * cfg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cfg.tencentcloudapi.com", "2021-08-20", clientConfig)
  }

  /**
   * 从经验库创建演练
   */
  async CreateTaskFromTemplate(
    req: CreateTaskFromTemplateRequest,
    cb?: (error: string, rep: CreateTaskFromTemplateResponse) => void
  ): Promise<CreateTaskFromTemplateResponse> {
    return this.request("CreateTaskFromTemplate", req, cb)
  }

  /**
   * 查询经验库
   */
  async DescribeTemplate(
    req: DescribeTemplateRequest,
    cb?: (error: string, rep: DescribeTemplateResponse) => void
  ): Promise<DescribeTemplateResponse> {
    return this.request("DescribeTemplate", req, cb)
  }

  /**
   * 触发混沌演练任务的动作，对于实例进行演练操作
   */
  async ExecuteTaskInstance(
    req: ExecuteTaskInstanceRequest,
    cb?: (error: string, rep: ExecuteTaskInstanceResponse) => void
  ): Promise<ExecuteTaskInstanceResponse> {
    return this.request("ExecuteTaskInstance", req, cb)
  }

  /**
   * 查询经验库列表
   */
  async DescribeTemplateList(
    req: DescribeTemplateListRequest,
    cb?: (error: string, rep: DescribeTemplateListResponse) => void
  ): Promise<DescribeTemplateListResponse> {
    return this.request("DescribeTemplateList", req, cb)
  }

  /**
   * 修改任务运行状态
   */
  async ModifyTaskRunStatus(
    req: ModifyTaskRunStatusRequest,
    cb?: (error: string, rep: ModifyTaskRunStatusResponse) => void
  ): Promise<ModifyTaskRunStatusResponse> {
    return this.request("ModifyTaskRunStatus", req, cb)
  }

  /**
   * 查询任务列表
   */
  async DescribeTaskList(
    req: DescribeTaskListRequest,
    cb?: (error: string, rep: DescribeTaskListResponse) => void
  ): Promise<DescribeTaskListResponse> {
    return this.request("DescribeTaskList", req, cb)
  }

  /**
   * 获取演练过程中的所有日志
   */
  async DescribeTaskExecuteLogs(
    req: DescribeTaskExecuteLogsRequest,
    cb?: (error: string, rep: DescribeTaskExecuteLogsResponse) => void
  ): Promise<DescribeTaskExecuteLogsResponse> {
    return this.request("DescribeTaskExecuteLogs", req, cb)
  }

  /**
   * 查询任务
   */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
   * 执行任务
   */
  async ExecuteTask(
    req: ExecuteTaskRequest,
    cb?: (error: string, rep: ExecuteTaskResponse) => void
  ): Promise<ExecuteTaskResponse> {
    return this.request("ExecuteTask", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteTask(
    req: DeleteTaskRequest,
    cb?: (error: string, rep: DeleteTaskResponse) => void
  ): Promise<DeleteTaskResponse> {
    return this.request("DeleteTask", req, cb)
  }
}
