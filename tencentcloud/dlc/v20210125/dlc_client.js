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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DatabaseInfo = models.DatabaseInfo;
const DescribeTasksRequest = models.DescribeTasksRequest;
const Script = models.Script;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeTableRequest = models.DescribeTableRequest;
const Other = models.Other;
const TaskResponseInfo = models.TaskResponseInfo;
const DescribeViewsResponse = models.DescribeViewsResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const Property = models.Property;
const DeleteScriptRequest = models.DeleteScriptRequest;
const DescribeTableResponse = models.DescribeTableResponse;
const CreateTaskRequest = models.CreateTaskRequest;
const TableResponseInfo = models.TableResponseInfo;
const CreateScriptResponse = models.CreateScriptResponse;
const Task = models.Task;
const DescribeTablesResponse = models.DescribeTablesResponse;
const Execution = models.Execution;
const DeleteScriptResponse = models.DeleteScriptResponse;
const CreateTableResponse = models.CreateTableResponse;
const CreateDatabaseResponse = models.CreateDatabaseResponse;
const CreateScriptRequest = models.CreateScriptRequest;
const Partition = models.Partition;
const TableInfo = models.TableInfo;
const Column = models.Column;
const DescribeTasksResponse = models.DescribeTasksResponse;
const Filter = models.Filter;
const DescribeScriptsResponse = models.DescribeScriptsResponse;
const TableBaseInfo = models.TableBaseInfo;
const ViewResponseInfo = models.ViewResponseInfo;
const TextFile = models.TextFile;
const DataFormat = models.DataFormat;
const CSV = models.CSV;
const CreateTableRequest = models.CreateTableRequest;
const SQLTask = models.SQLTask;
const DescribeScriptsRequest = models.DescribeScriptsRequest;
const CSVSerde = models.CSVSerde;
const DescribeTablesRequest = models.DescribeTablesRequest;
const CreateDatabaseRequest = models.CreateDatabaseRequest;
const DescribeViewsRequest = models.DescribeViewsRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DatabaseResponseInfo = models.DatabaseResponseInfo;
const ViewBaseInfo = models.ViewBaseInfo;


/**
 * dlc client
 * @class
 */
class DlcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dlc.tencentcloudapi.com", "2021-01-25", credential, region, profile);
    }
    
    /**
     * 本接口（CreateTask）用于创建sql查询任务。
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     * @param {DescribeViewsRequest} req
     * @param {function(string, DescribeViewsResponse):void} cb
     * @public
     */
    DescribeViews(req, cb) {
        let resp = new DescribeViewsResponse();
        this.request("DescribeViews", req, resp, cb);
    }

    /**
     * 查询单个表的详细信息。
     * @param {DescribeTableRequest} req
     * @param {function(string, DescribeTableResponse):void} cb
     * @public
     */
    DescribeTable(req, cb) {
        let resp = new DescribeTableResponse();
        this.request("DescribeTable", req, resp, cb);
    }

    /**
     * 本接口（CreateTable）用于生成建表SQL。
     * @param {CreateTableRequest} req
     * @param {function(string, CreateTableResponse):void} cb
     * @public
     */
    CreateTable(req, cb) {
        let resp = new CreateTableResponse();
        this.request("CreateTable", req, resp, cb);
    }

    /**
     * 该接口（DescribleTasks）用于查询任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     * @param {DeleteScriptRequest} req
     * @param {function(string, DeleteScriptResponse):void} cb
     * @public
     */
    DeleteScript(req, cb) {
        let resp = new DeleteScriptResponse();
        this.request("DeleteScript", req, resp, cb);
    }

    /**
     * 该接口（CreateScript）用于创建sql脚本。
     * @param {CreateScriptRequest} req
     * @param {function(string, CreateScriptResponse):void} cb
     * @public
     */
    CreateScript(req, cb) {
        let resp = new CreateScriptResponse();
        this.request("CreateScript", req, resp, cb);
    }

    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     * @param {DescribeScriptsRequest} req
     * @param {function(string, DescribeScriptsResponse):void} cb
     * @public
     */
    DescribeScripts(req, cb) {
        let resp = new DescribeScriptsResponse();
        this.request("DescribeScripts", req, resp, cb);
    }

    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     * @param {CreateDatabaseRequest} req
     * @param {function(string, CreateDatabaseResponse):void} cb
     * @public
     */
    CreateDatabase(req, cb) {
        let resp = new CreateDatabaseResponse();
        this.request("CreateDatabase", req, resp, cb);
    }

    /**
     * 本接口（DescribleTables）用于查询数据表列表。
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }


}
module.exports = DlcClient;
