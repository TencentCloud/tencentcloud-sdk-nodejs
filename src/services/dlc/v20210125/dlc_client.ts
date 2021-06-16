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
  DatabaseInfo,
  DescribeTasksRequest,
  Script,
  KVPair,
  DescribeDatabasesRequest,
  DescribeTableRequest,
  Other,
  TaskResponseInfo,
  DescribeViewsResponse,
  CreateTaskResponse,
  Property,
  DeleteScriptRequest,
  DescribeTableResponse,
  CreateStoreLocationResponse,
  TableResponseInfo,
  CreateScriptResponse,
  Task,
  DescribeDatabasesResponse,
  Execution,
  DeleteScriptResponse,
  CreateTableResponse,
  CreateDatabaseResponse,
  DescribeTablesResponse,
  DescribeTasksResponse,
  CreateScriptRequest,
  Partition,
  TableInfo,
  Column,
  CreateStoreLocationRequest,
  Filter,
  CreateTaskRequest,
  TableBaseInfo,
  ViewResponseInfo,
  TextFile,
  DataFormat,
  CSV,
  CreateTableRequest,
  SQLTask,
  DescribeScriptsRequest,
  CSVSerde,
  DescribeTablesRequest,
  CreateDatabaseRequest,
  DescribeViewsRequest,
  DescribeScriptsResponse,
  DatabaseResponseInfo,
  ViewBaseInfo,
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
   * 本接口（CreateTask）用于创建sql查询任务。
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
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
   * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
   */
  async CreateStoreLocation(
    req: CreateStoreLocationRequest,
    cb?: (error: string, rep: CreateStoreLocationResponse) => void
  ): Promise<CreateStoreLocationResponse> {
    return this.request("CreateStoreLocation", req, cb)
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
   * 查询单个表的详细信息。
   */
  async DescribeTable(
    req: DescribeTableRequest,
    cb?: (error: string, rep: DescribeTableResponse) => void
  ): Promise<DescribeTableResponse> {
    return this.request("DescribeTable", req, cb)
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
   * 该接口（CreateScript）用于创建sql脚本。
   */
  async CreateScript(
    req: CreateScriptRequest,
    cb?: (error: string, rep: CreateScriptResponse) => void
  ): Promise<CreateScriptResponse> {
    return this.request("CreateScript", req, cb)
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
   * 本接口（CreateDatabase）用于生成建库SQL语句。
   */
  async CreateDatabase(
    req: CreateDatabaseRequest,
    cb?: (error: string, rep: CreateDatabaseResponse) => void
  ): Promise<CreateDatabaseResponse> {
    return this.request("CreateDatabase", req, cb)
  }

  /**
   * 本接口（DescribleTables）用于查询数据表列表。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }
}
