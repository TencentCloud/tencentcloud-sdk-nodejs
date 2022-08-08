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
 * wedata client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("wedata.tencentcloudapi.com", "2021-08-20", clientConfig);
    }
    /**
     * 创建任务（Beta版本）
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 设置任务告警，新建/更新告警信息（最新）（Beta版本）
     */
    async SetTaskAlarmNew(req, cb) {
        return this.request("SetTaskAlarmNew", req, cb);
    }
    /**
     * 查询任务实例列表
     */
    async DescribeTaskInstances(req, cb) {
        return this.request("DescribeTaskInstances", req, cb);
    }
    /**
     * 修改任务脚本（Beta版本）
     */
    async ModifyTaskScript(req, cb) {
        return this.request("ModifyTaskScript", req, cb);
    }
    /**
     * 提交任务（Beta版本）
     */
    async SubmitTask(req, cb) {
        return this.request("SubmitTask", req, cb);
    }
    /**
     * 批量冻结任务（Beta版本）
     */
    async FreezeTasks(req, cb) {
        return this.request("FreezeTasks", req, cb);
    }
    /**
     * 工作流下所有任务的补录（Beta版本）
     */
    async MakeUpWorkflowNew(req, cb) {
        return this.request("MakeUpWorkflowNew", req, cb);
    }
    /**
     * 注册事件（Beta版本）
     */
    async RegisterEvent(req, cb) {
        return this.request("RegisterEvent", req, cb);
    }
    /**
     * 更新任务（Beta版本）
     */
    async ModifyTaskInfo(req, cb) {
        return this.request("ModifyTaskInfo", req, cb);
    }
    /**
     * 实例批量终止操作（Beta版本）
     */
    async KillInstances(req, cb) {
        return this.request("KillInstances", req, cb);
    }
    /**
     * 拉取文件夹下的工作流（Beta版本）
     */
    async DescribeFolderWorkflowList(req, cb) {
        return this.request("DescribeFolderWorkflowList", req, cb);
    }
    /**
     * 实例批量重跑（Beta版本）
     */
    async RerunInstances(req, cb) {
        return this.request("RerunInstances", req, cb);
    }
    /**
     * 查询任务具体详情（Beta版本）
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 任务批量补录，调度状态任务才可以补录；（Beta版本）

     */
    async MakeUpTasksNew(req, cb) {
        return this.request("MakeUpTasksNew", req, cb);
    }
    /**
     * 基于多个工作流进行批量冻结任务操作（Beta版本）
     */
    async FreezeTasksByMultiWorkflow(req, cb) {
        return this.request("FreezeTasksByMultiWorkflow", req, cb);
    }
    /**
     * 获取实例日志列表（Beta版本）
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
    /**
     * 查询任务实例的关联实例列表
     */
    async DescribeRelatedInstances(req, cb) {
        return this.request("DescribeRelatedInstances", req, cb);
    }
    /**
     * 批量删除任务，仅对任务状态为”已停止“有效；（Beta版本）

     */
    async BatchDeleteTasksNew(req, cb) {
        return this.request("BatchDeleteTasksNew", req, cb);
    }
    /**
     * 删除工作流（Beta版本）
     */
    async DeleteWorkflowNew(req, cb) {
        return this.request("DeleteWorkflowNew", req, cb);
    }
    /**
     * 更新工作流调度（Beta版本）
     */
    async ModifyWorkflowSchedule(req, cb) {
        return this.request("ModifyWorkflowSchedule", req, cb);
    }
    /**
     * 根据工作流分页查询任务（Beta版本）
     */
    async DescribeTasksByPage(req, cb) {
        return this.request("DescribeTasksByPage", req, cb);
    }
    /**
     * 更新工作流（Beta版本）
     */
    async ModifyWorkflowInfo(req, cb) {
        return this.request("ModifyWorkflowInfo", req, cb);
    }
    /**
     * 创建文件夹（Beta版本）
     */
    async CreateFolder(req, cb) {
        return this.request("CreateFolder", req, cb);
    }
    /**
     * 文件夹更新（Beta版本）
     */
    async ModifyFolder(req, cb) {
        return this.request("ModifyFolder", req, cb);
    }
    /**
     * 拉取文件夹目录（Beta版本）
     */
    async DescribeFolderList(req, cb) {
        return this.request("DescribeFolderList", req, cb);
    }
    /**
     * 删除文件夹（Beta版本）
     */
    async DeleteFolder(req, cb) {
        return this.request("DeleteFolder", req, cb);
    }
    /**
     * 注册事件监听器（Beta版本）
     */
    async RegisterEventListener(req, cb) {
        return this.request("RegisterEventListener", req, cb);
    }
    /**
     * 触发事件（Beta版本）
     */
    async TriggerEvent(req, cb) {
        return this.request("TriggerEvent", req, cb);
    }
    /**
     * 添加父任务依赖（Beta版本）
     */
    async ModifyTaskLinks(req, cb) {
        return this.request("ModifyTaskLinks", req, cb);
    }
    /**
     * 创建工作流（Beta版本）
     */
    async CreateWorkflow(req, cb) {
        return this.request("CreateWorkflow", req, cb);
    }
    /**
     * 获取项目信息
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 实例批量置成功（Beta版本）
     */
    async ForceSucInstances(req, cb) {
        return this.request("ForceSucInstances", req, cb);
    }
    /**
     * 运行任务（Beta版本）
     */
    async RunTask(req, cb) {
        return this.request("RunTask", req, cb);
    }
    /**
     * 根据层级查找上/下游任务节点（Beta版本）
     */
    async DescribeDependTasksNew(req, cb) {
        return this.request("DescribeDependTasksNew", req, cb);
    }
    /**
     * 提交工作流（Beta版本）
     */
    async SubmitWorkflow(req, cb) {
        return this.request("SubmitWorkflow", req, cb);
    }
    /**
     * 查询任务脚本（Beta版本）
     */
    async DescribeTaskScript(req, cb) {
        return this.request("DescribeTaskScript", req, cb);
    }
    /**
     * 批量修改任务责任人（Beta版本）
     */
    async BatchModifyOwnersNew(req, cb) {
        return this.request("BatchModifyOwnersNew", req, cb);
    }
    /**
     * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度（Beta版本）
     */
    async BatchStopTasksNew(req, cb) {
        return this.request("BatchStopTasksNew", req, cb);
    }
}
exports.Client = Client;
