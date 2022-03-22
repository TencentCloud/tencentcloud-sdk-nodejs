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
  DescribeTaskResultResponse,
  DescribeDatabasesRequest,
  WorkGroupMessage,
  DeleteUserRequest,
  CreateStoreLocationResponse,
  CreateScriptResponse,
  CreateTasksInOrderResponse,
  DescribeTablesResponse,
  WorkGroupInfo,
  ModifyUserResponse,
  DeleteScriptResponse,
  Task,
  DetachUserPolicyRequest,
  TableInfo,
  DescribeTasksResponse,
  CreateTasksInOrderRequest,
  DetachWorkGroupPolicyResponse,
  DataFormat,
  CSVSerde,
  CreateDatabaseRequest,
  UserIdSetOfWorkGroupId,
  ViewBaseInfo,
  CreateDatabaseResponse,
  DescribeTasksRequest,
  Script,
  DeleteWorkGroupRequest,
  KVPair,
  TableBaseInfo,
  TasksInfo,
  AttachWorkGroupPolicyRequest,
  CreateUserResponse,
  DeleteUserResponse,
  CreateStoreLocationRequest,
  Partition,
  CreateTaskRequest,
  Property,
  CreateTableRequest,
  DescribeWorkGroupsResponse,
  DescribeUsersRequest,
  DescribeScriptsRequest,
  DeleteUsersFromWorkGroupResponse,
  AddUsersToWorkGroupRequest,
  DescribeStoreLocationRequest,
  DescribeViewsRequest,
  UserInfo,
  CreateExportTaskRequest,
  AttachWorkGroupPolicyResponse,
  ModifyWorkGroupResponse,
  AttachUserPolicyRequest,
  CancelTaskRequest,
  TaskResponseInfo,
  TextFile,
  BindWorkGroupsToUserResponse,
  DescribeStoreLocationResponse,
  DeleteScriptRequest,
  CreateImportTaskResponse,
  Execution,
  CreateTableResponse,
  CreateScriptRequest,
  BindWorkGroupsToUserRequest,
  Column,
  DescribeTaskResultRequest,
  Filter,
  DescribeUsersResponse,
  DescribeScriptsResponse,
  ViewResponseInfo,
  CreateUserRequest,
  ModifyWorkGroupRequest,
  CancelTaskResponse,
  DeleteWorkGroupResponse,
  WorkGroupIdSetOfUserId,
  CreateWorkGroupResponse,
  TaskResultInfo,
  DescribeTablesRequest,
  DescribeDatabasesResponse,
  DatabaseInfo,
  CreateImportTaskRequest,
  CreateExportTaskResponse,
  UnbindWorkGroupsFromUserRequest,
  DescribeTableRequest,
  Other,
  CSV,
  DeleteUsersFromWorkGroupRequest,
  Policy,
  CreateTasksRequest,
  CreateTaskResponse,
  DescribeWorkGroupsRequest,
  DescribeTableResponse,
  TableResponseInfo,
  AddUsersToWorkGroupResponse,
  DetachUserPolicyResponse,
  CreateTasksResponse,
  UnbindWorkGroupsFromUserResponse,
  CreateWorkGroupRequest,
  SQLTask,
  UserMessage,
  AttachUserPolicyResponse,
  DetachWorkGroupPolicyRequest,
  DescribeViewsResponse,
  ModifyUserRequest,
  DatabaseResponseInfo,
} from "./dlc_models"

/**
 * dlc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dlc.tencentcloudapi.com", "2021-01-25", clientConfig)
  }

  /**
   * 解绑工作组鉴权策略
   */
  async DetachWorkGroupPolicy(
    req: DetachWorkGroupPolicyRequest,
    cb?: (error: string, rep: DetachWorkGroupPolicyResponse) => void
  ): Promise<DetachWorkGroupPolicyResponse> {
    return this.request("DetachWorkGroupPolicy", req, cb)
  }

  /**
   * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 添加用户到工作组
   */
  async AddUsersToWorkGroup(
    req: AddUsersToWorkGroupRequest,
    cb?: (error: string, rep: AddUsersToWorkGroupResponse) => void
  ): Promise<AddUsersToWorkGroupResponse> {
    return this.request("AddUsersToWorkGroup", req, cb)
  }

  /**
   * 该接口（CreateImportTask）用于创建导入任务
   */
  async CreateImportTask(
    req: CreateImportTaskRequest,
    cb?: (error: string, rep: CreateImportTaskResponse) => void
  ): Promise<CreateImportTaskResponse> {
    return this.request("CreateImportTask", req, cb)
  }

  /**
   * 查询任务结果
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
  }

  /**
   * 绑定工作组到用户
   */
  async BindWorkGroupsToUser(
    req: BindWorkGroupsToUserRequest,
    cb?: (error: string, rep: BindWorkGroupsToUserResponse) => void
  ): Promise<BindWorkGroupsToUserResponse> {
    return this.request("BindWorkGroupsToUser", req, cb)
  }

  /**
   * 本接口（CreateTable）用于生成建表SQL。
   */
  async CreateTable(
    req: CreateTableRequest,
    cb?: (error: string, rep: CreateTableResponse) => void
  ): Promise<CreateTableResponse> {
    return this.request("CreateTable", req, cb)
  }

  /**
   * 该接口（CreateExportTask）用于创建导出任务
   */
  async CreateExportTask(
    req: CreateExportTaskRequest,
    cb?: (error: string, rep: CreateExportTaskResponse) => void
  ): Promise<CreateExportTaskResponse> {
    return this.request("CreateExportTask", req, cb)
  }

  /**
   * 获取用户列表信息
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 本接口（CreateTasks），用于批量创建任务
   */
  async CreateTasks(
    req: CreateTasksRequest,
    cb?: (error: string, rep: CreateTasksResponse) => void
  ): Promise<CreateTasksResponse> {
    return this.request("CreateTasks", req, cb)
  }

  /**
   * 该接口（DescribeScripts）用于获取所有SQL查询。
   */
  async DescribeScripts(
    req: DescribeScriptsRequest,
    cb?: (error: string, rep: DescribeScriptsResponse) => void
  ): Promise<DescribeScriptsResponse> {
    return this.request("DescribeScripts", req, cb)
  }

  /**
   * 删除工作组
   */
  async DeleteWorkGroup(
    req: DeleteWorkGroupRequest,
    cb?: (error: string, rep: DeleteWorkGroupResponse) => void
  ): Promise<DeleteWorkGroupResponse> {
    return this.request("DeleteWorkGroup", req, cb)
  }

  /**
   * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
   */
  async CreateStoreLocation(
    req: CreateStoreLocationRequest,
    cb?: (error: string, rep: CreateStoreLocationResponse) => void
  ): Promise<CreateStoreLocationResponse> {
    return this.request("CreateStoreLocation", req, cb)
  }

  /**
   * 从工作组中删除用户
   */
  async DeleteUsersFromWorkGroup(
    req: DeleteUsersFromWorkGroupRequest,
    cb?: (error: string, rep: DeleteUsersFromWorkGroupResponse) => void
  ): Promise<DeleteUsersFromWorkGroupResponse> {
    return this.request("DeleteUsersFromWorkGroup", req, cb)
  }

  /**
   * 创建工作组
   */
  async CreateWorkGroup(
    req: CreateWorkGroupRequest,
    cb?: (error: string, rep: CreateWorkGroupResponse) => void
  ): Promise<CreateWorkGroupResponse> {
    return this.request("CreateWorkGroup", req, cb)
  }

  /**
   * 解绑用户上的用户组
   */
  async UnbindWorkGroupsFromUser(
    req: UnbindWorkGroupsFromUserRequest,
    cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void
  ): Promise<UnbindWorkGroupsFromUserResponse> {
    return this.request("UnbindWorkGroupsFromUser", req, cb)
  }

  /**
   * 绑定鉴权策略到工作组
   */
  async AttachWorkGroupPolicy(
    req: AttachWorkGroupPolicyRequest,
    cb?: (error: string, rep: AttachWorkGroupPolicyResponse) => void
  ): Promise<AttachWorkGroupPolicyResponse> {
    return this.request("AttachWorkGroupPolicy", req, cb)
  }

  /**
   * 获取工作组列表
   */
  async DescribeWorkGroups(
    req: DescribeWorkGroupsRequest,
    cb?: (error: string, rep: DescribeWorkGroupsResponse) => void
  ): Promise<DescribeWorkGroupsResponse> {
    return this.request("DescribeWorkGroups", req, cb)
  }

  /**
   * 本接口（CancelTask），用于取消任务执行
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }

  /**
   * 该接口（CreateScript）用于创建sql脚本。
   */
  async CreateScript(
    req: CreateScriptRequest,
    cb?: (error: string, rep: CreateScriptResponse) => void
  ): Promise<CreateScriptResponse> {
    return this.request("CreateScript", req, cb)
  }

  /**
   * 本接口（CreateDatabase）用于生成建库SQL语句。
   */
  async CreateDatabase(
    req: CreateDatabaseRequest,
    cb?: (error: string, rep: CreateDatabaseResponse) => void
  ): Promise<CreateDatabaseResponse> {
    return this.request("CreateDatabase", req, cb)
  }

  /**
   * 修改工作组信息
   */
  async ModifyWorkGroup(
    req: ModifyWorkGroupRequest,
    cb?: (error: string, rep: ModifyWorkGroupResponse) => void
  ): Promise<ModifyWorkGroupResponse> {
    return this.request("ModifyWorkGroup", req, cb)
  }

  /**
   * 本接口（DescribeViews）用于查询数据视图列表。
   */
  async DescribeViews(
    req: DescribeViewsRequest,
    cb?: (error: string, rep: DescribeViewsResponse) => void
  ): Promise<DescribeViewsResponse> {
    return this.request("DescribeViews", req, cb)
  }

  /**
   * 本接口（DescribeTable），用于查询单个表的详细信息。
   */
  async DescribeTable(
    req: DescribeTableRequest,
    cb?: (error: string, rep: DescribeTableResponse) => void
  ): Promise<DescribeTableResponse> {
    return this.request("DescribeTable", req, cb)
  }

  /**
   * 该接口（DescribleTasks）用于查询任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 该接口（DeleteScript）用于删除sql脚本。
   */
  async DeleteScript(
    req: DeleteScriptRequest,
    cb?: (error: string, rep: DeleteScriptResponse) => void
  ): Promise<DeleteScriptResponse> {
    return this.request("DeleteScript", req, cb)
  }

  /**
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 本接口（DescribeDatabases）用于查询数据库列表。
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
   */
  async CreateTasksInOrder(
    req: CreateTasksInOrderRequest,
    cb?: (error: string, rep: CreateTasksInOrderResponse) => void
  ): Promise<CreateTasksInOrderResponse> {
    return this.request("CreateTasksInOrder", req, cb)
  }

  /**
   * 绑定鉴权策略到用户
   */
  async AttachUserPolicy(
    req: AttachUserPolicyRequest,
    cb?: (error: string, rep: AttachUserPolicyResponse) => void
  ): Promise<AttachUserPolicyResponse> {
    return this.request("AttachUserPolicy", req, cb)
  }

  /**
   * 查询计算结果存储位置。
   */
  async DescribeStoreLocation(
    req?: DescribeStoreLocationRequest,
    cb?: (error: string, rep: DescribeStoreLocationResponse) => void
  ): Promise<DescribeStoreLocationResponse> {
    return this.request("DescribeStoreLocation", req, cb)
  }

  /**
   * 创建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 解绑用户鉴权策略
   */
  async DetachUserPolicy(
    req: DetachUserPolicyRequest,
    cb?: (error: string, rep: DetachUserPolicyResponse) => void
  ): Promise<DetachUserPolicyResponse> {
    return this.request("DetachUserPolicy", req, cb)
  }

  /**
   * 本接口（DescribeTables）用于查询数据表列表。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }
}
