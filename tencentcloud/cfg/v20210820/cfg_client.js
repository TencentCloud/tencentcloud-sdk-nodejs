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
const ModifyTaskRunStatusResponse = models.ModifyTaskRunStatusResponse;
const TaskGroupAction = models.TaskGroupAction;
const TaskMonitor = models.TaskMonitor;
const TaskConfig = models.TaskConfig;
const DeleteTaskRequest = models.DeleteTaskRequest;
const TaskGroup = models.TaskGroup;
const ExecuteTaskResponse = models.ExecuteTaskResponse;
const TaskGroupConfig = models.TaskGroupConfig;
const Template = models.Template;
const DescribeTaskExecuteLogsRequest = models.DescribeTaskExecuteLogsRequest;
const DescribeTaskResponse = models.DescribeTaskResponse;
const ModifyTaskRunStatusRequest = models.ModifyTaskRunStatusRequest;
const DescribeTemplateResponse = models.DescribeTemplateResponse;
const DescribePolicy = models.DescribePolicy;
const DescribeTemplateRequest = models.DescribeTemplateRequest;
const ExecuteTaskInstanceRequest = models.ExecuteTaskInstanceRequest;
const TaskGroupInstance = models.TaskGroupInstance;
const ExecuteTaskRequest = models.ExecuteTaskRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const TemplateGroupAction = models.TemplateGroupAction;
const DescribeTemplateListResponse = models.DescribeTemplateListResponse;
const TagWithDescribe = models.TagWithDescribe;
const CreateTaskFromTemplateResponse = models.CreateTaskFromTemplateResponse;
const DeleteTaskResponse = models.DeleteTaskResponse;
const DescribeTaskRequest = models.DescribeTaskRequest;
const Task = models.Task;
const CreateTaskFromTemplateRequest = models.CreateTaskFromTemplateRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const TaskListItem = models.TaskListItem;
const ExecuteTaskInstanceResponse = models.ExecuteTaskInstanceResponse;
const DescribeTaskExecuteLogsResponse = models.DescribeTaskExecuteLogsResponse;
const TemplateMonitor = models.TemplateMonitor;
const TemplateGroup = models.TemplateGroup;
const TemplatePolicy = models.TemplatePolicy;
const TaskGroupActionConfig = models.TaskGroupActionConfig;
const DescribeTemplateListRequest = models.DescribeTemplateListRequest;
const TemplateListItem = models.TemplateListItem;
const TagWithCreate = models.TagWithCreate;


/**
 * cfg client
 * @class
 */
class CfgClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfg.tencentcloudapi.com", "2021-08-20", credential, region, profile);
    }
    
    /**
     * 从经验库创建演练
     * @param {CreateTaskFromTemplateRequest} req
     * @param {function(string, CreateTaskFromTemplateResponse):void} cb
     * @public
     */
    CreateTaskFromTemplate(req, cb) {
        let resp = new CreateTaskFromTemplateResponse();
        this.request("CreateTaskFromTemplate", req, resp, cb);
    }

    /**
     * 查询经验库
     * @param {DescribeTemplateRequest} req
     * @param {function(string, DescribeTemplateResponse):void} cb
     * @public
     */
    DescribeTemplate(req, cb) {
        let resp = new DescribeTemplateResponse();
        this.request("DescribeTemplate", req, resp, cb);
    }

    /**
     * 触发混沌演练任务的动作，对于实例进行演练操作
     * @param {ExecuteTaskInstanceRequest} req
     * @param {function(string, ExecuteTaskInstanceResponse):void} cb
     * @public
     */
    ExecuteTaskInstance(req, cb) {
        let resp = new ExecuteTaskInstanceResponse();
        this.request("ExecuteTaskInstance", req, resp, cb);
    }

    /**
     * 查询经验库列表
     * @param {DescribeTemplateListRequest} req
     * @param {function(string, DescribeTemplateListResponse):void} cb
     * @public
     */
    DescribeTemplateList(req, cb) {
        let resp = new DescribeTemplateListResponse();
        this.request("DescribeTemplateList", req, resp, cb);
    }

    /**
     * 修改任务运行状态
     * @param {ModifyTaskRunStatusRequest} req
     * @param {function(string, ModifyTaskRunStatusResponse):void} cb
     * @public
     */
    ModifyTaskRunStatus(req, cb) {
        let resp = new ModifyTaskRunStatusResponse();
        this.request("ModifyTaskRunStatus", req, resp, cb);
    }

    /**
     * 查询任务列表
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * 获取演练过程中的所有日志
     * @param {DescribeTaskExecuteLogsRequest} req
     * @param {function(string, DescribeTaskExecuteLogsResponse):void} cb
     * @public
     */
    DescribeTaskExecuteLogs(req, cb) {
        let resp = new DescribeTaskExecuteLogsResponse();
        this.request("DescribeTaskExecuteLogs", req, resp, cb);
    }

    /**
     * 查询任务
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * 执行任务
     * @param {ExecuteTaskRequest} req
     * @param {function(string, ExecuteTaskResponse):void} cb
     * @public
     */
    ExecuteTask(req, cb) {
        let resp = new ExecuteTaskResponse();
        this.request("ExecuteTask", req, resp, cb);
    }

    /**
     * 删除任务
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }


}
module.exports = CfgClient;
