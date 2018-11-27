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
const DstInfo = models.DstInfo;
const SrcInfo = models.SrcInfo;
const DescribeMigrationTaskRequest = models.DescribeMigrationTaskRequest;
const TimeObj = models.TimeObj;
const ModifyMigrationTaskBelongToProjectRequest = models.ModifyMigrationTaskBelongToProjectRequest;
const TaskStatus = models.TaskStatus;
const ModifyMigrationTaskStatusResponse = models.ModifyMigrationTaskStatusResponse;
const ListMigrationTaskRequest = models.ListMigrationTaskRequest;
const DeregisterMigrationTaskResponse = models.DeregisterMigrationTaskResponse;
const Project = models.Project;
const ModifyMigrationTaskBelongToProjectResponse = models.ModifyMigrationTaskBelongToProjectResponse;
const ListMigrationProjectResponse = models.ListMigrationProjectResponse;
const Task = models.Task;
const RegisterMigrationTaskResponse = models.RegisterMigrationTaskResponse;
const ModifyMigrationTaskStatusRequest = models.ModifyMigrationTaskStatusRequest;
const ListMigrationProjectRequest = models.ListMigrationProjectRequest;
const DeregisterMigrationTaskRequest = models.DeregisterMigrationTaskRequest;
const ListMigrationTaskResponse = models.ListMigrationTaskResponse;
const DescribeMigrationTaskResponse = models.DescribeMigrationTaskResponse;
const RegisterMigrationTaskRequest = models.RegisterMigrationTaskRequest;


/**
 * msp client
 * @class
 */
class MspClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("msp.tencentcloudapi.com", "2018-03-19", credential, region, profile);
    }
    
    /**
     * 获取迁移任务列表
     * @param {ListMigrationTaskRequest} req
     * @param {function(string, ListMigrationTaskResponse):void} cb
     * @public
     */
    ListMigrationTask(req, cb) {
        let resp = new ListMigrationTaskResponse();
        this.request("ListMigrationTask", req, resp, cb);
    }

    /**
     * 注册迁移任务
     * @param {RegisterMigrationTaskRequest} req
     * @param {function(string, RegisterMigrationTaskResponse):void} cb
     * @public
     */
    RegisterMigrationTask(req, cb) {
        let resp = new RegisterMigrationTaskResponse();
        this.request("RegisterMigrationTask", req, resp, cb);
    }

    /**
     * 更新迁移任务状态
     * @param {ModifyMigrationTaskStatusRequest} req
     * @param {function(string, ModifyMigrationTaskStatusResponse):void} cb
     * @public
     */
    ModifyMigrationTaskStatus(req, cb) {
        let resp = new ModifyMigrationTaskStatusResponse();
        this.request("ModifyMigrationTaskStatus", req, resp, cb);
    }

    /**
     * 取消注册迁移任务
     * @param {DeregisterMigrationTaskRequest} req
     * @param {function(string, DeregisterMigrationTaskResponse):void} cb
     * @public
     */
    DeregisterMigrationTask(req, cb) {
        let resp = new DeregisterMigrationTaskResponse();
        this.request("DeregisterMigrationTask", req, resp, cb);
    }

    /**
     * 获取指定迁移任务详情
     * @param {DescribeMigrationTaskRequest} req
     * @param {function(string, DescribeMigrationTaskResponse):void} cb
     * @public
     */
    DescribeMigrationTask(req, cb) {
        let resp = new DescribeMigrationTaskResponse();
        this.request("DescribeMigrationTask", req, resp, cb);
    }

    /**
     * 更改迁移任务所属项目
     * @param {ModifyMigrationTaskBelongToProjectRequest} req
     * @param {function(string, ModifyMigrationTaskBelongToProjectResponse):void} cb
     * @public
     */
    ModifyMigrationTaskBelongToProject(req, cb) {
        let resp = new ModifyMigrationTaskBelongToProjectResponse();
        this.request("ModifyMigrationTaskBelongToProject", req, resp, cb);
    }

    /**
     * 获取迁移项目名称列表
     * @param {ListMigrationProjectRequest} req
     * @param {function(string, ListMigrationProjectResponse):void} cb
     * @public
     */
    ListMigrationProject(req, cb) {
        let resp = new ListMigrationProjectResponse();
        this.request("ListMigrationProject", req, resp, cb);
    }


}
module.exports = MspClient;
