"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * dlc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dlc.tencentcloudapi.com", "2021-01-25", clientConfig);
    }
    /**
     * 解绑工作组鉴权策略
     */
    async DetachWorkGroupPolicy(req, cb) {
        return this.request("DetachWorkGroupPolicy", req, cb);
    }
    /**
     * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 添加用户到工作组
     */
    async AddUsersToWorkGroup(req, cb) {
        return this.request("AddUsersToWorkGroup", req, cb);
    }
    /**
     * 该接口（CreateImportTask）用于创建导入任务
     */
    async CreateImportTask(req, cb) {
        return this.request("CreateImportTask", req, cb);
    }
    /**
     * 查询任务结果
     */
    async DescribeTaskResult(req, cb) {
        return this.request("DescribeTaskResult", req, cb);
    }
    /**
     * 绑定工作组到用户
     */
    async BindWorkGroupsToUser(req, cb) {
        return this.request("BindWorkGroupsToUser", req, cb);
    }
    /**
     * 本接口（CreateTable）用于生成建表SQL。
     */
    async CreateTable(req, cb) {
        return this.request("CreateTable", req, cb);
    }
    /**
     * 该接口（CreateExportTask）用于创建导出任务
     */
    async CreateExportTask(req, cb) {
        return this.request("CreateExportTask", req, cb);
    }
    /**
     * 获取用户列表信息
     */
    async DescribeUsers(req, cb) {
        return this.request("DescribeUsers", req, cb);
    }
    /**
     * 本接口（CreateTasks），用于批量创建任务
     */
    async CreateTasks(req, cb) {
        return this.request("CreateTasks", req, cb);
    }
    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     */
    async DescribeScripts(req, cb) {
        return this.request("DescribeScripts", req, cb);
    }
    /**
     * 删除工作组
     */
    async DeleteWorkGroup(req, cb) {
        return this.request("DeleteWorkGroup", req, cb);
    }
    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     */
    async CreateStoreLocation(req, cb) {
        return this.request("CreateStoreLocation", req, cb);
    }
    /**
     * 从工作组中删除用户
     */
    async DeleteUsersFromWorkGroup(req, cb) {
        return this.request("DeleteUsersFromWorkGroup", req, cb);
    }
    /**
     * 创建工作组
     */
    async CreateWorkGroup(req, cb) {
        return this.request("CreateWorkGroup", req, cb);
    }
    /**
     * 解绑用户上的用户组
     */
    async UnbindWorkGroupsFromUser(req, cb) {
        return this.request("UnbindWorkGroupsFromUser", req, cb);
    }
    /**
     * 绑定鉴权策略到工作组
     */
    async AttachWorkGroupPolicy(req, cb) {
        return this.request("AttachWorkGroupPolicy", req, cb);
    }
    /**
     * 获取工作组列表
     */
    async DescribeWorkGroups(req, cb) {
        return this.request("DescribeWorkGroups", req, cb);
    }
    /**
     * 本接口（CancelTask），用于取消任务执行
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    /**
     * 该接口（CreateScript）用于创建sql脚本。
     */
    async CreateScript(req, cb) {
        return this.request("CreateScript", req, cb);
    }
    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     */
    async CreateDatabase(req, cb) {
        return this.request("CreateDatabase", req, cb);
    }
    /**
     * 修改工作组信息
     */
    async ModifyWorkGroup(req, cb) {
        return this.request("ModifyWorkGroup", req, cb);
    }
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    async DescribeViews(req, cb) {
        return this.request("DescribeViews", req, cb);
    }
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    async DescribeTable(req, cb) {
        return this.request("DescribeTable", req, cb);
    }
    /**
     * 该接口（DescribleTasks）用于查询任务列表
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     */
    async DeleteScript(req, cb) {
        return this.request("DeleteScript", req, cb);
    }
    /**
     * 修改用户信息
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
    async CreateTasksInOrder(req, cb) {
        return this.request("CreateTasksInOrder", req, cb);
    }
    /**
     * 绑定鉴权策略到用户
     */
    async AttachUserPolicy(req, cb) {
        return this.request("AttachUserPolicy", req, cb);
    }
    /**
     * 查询计算结果存储位置。
     */
    async DescribeStoreLocation(req, cb) {
        return this.request("DescribeStoreLocation", req, cb);
    }
    /**
     * 创建用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 解绑用户鉴权策略
     */
    async DetachUserPolicy(req, cb) {
        return this.request("DetachUserPolicy", req, cb);
    }
    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
}
exports.Client = Client;
