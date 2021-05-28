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
const PreviewReplacedCommandContentResponse = models.PreviewReplacedCommandContentResponse;
const CreateCommandResponse = models.CreateCommandResponse;
const AutomationAgentInfo = models.AutomationAgentInfo;
const RunCommandRequest = models.RunCommandRequest;
const DescribeInvocationTasksRequest = models.DescribeInvocationTasksRequest;
const Invocation = models.Invocation;
const CommandDocument = models.CommandDocument;
const TaskResult = models.TaskResult;
const ModifyCommandResponse = models.ModifyCommandResponse;
const RegionInfo = models.RegionInfo;
const DeleteCommandResponse = models.DeleteCommandResponse;
const DescribeCommandsResponse = models.DescribeCommandsResponse;
const DescribeAutomationAgentStatusRequest = models.DescribeAutomationAgentStatusRequest;
const InvokeCommandResponse = models.InvokeCommandResponse;
const ModifyCommandRequest = models.ModifyCommandRequest;
const DescribeCommandsRequest = models.DescribeCommandsRequest;
const DescribeInvocationsRequest = models.DescribeInvocationsRequest;
const PreviewReplacedCommandContentRequest = models.PreviewReplacedCommandContentRequest;
const Filter = models.Filter;
const DescribeInvocationsResponse = models.DescribeInvocationsResponse;
const DescribeInvocationTasksResponse = models.DescribeInvocationTasksResponse;
const Command = models.Command;
const InvocationTask = models.InvocationTask;
const DescribeAutomationAgentStatusResponse = models.DescribeAutomationAgentStatusResponse;
const InvocationTaskBasicInfo = models.InvocationTaskBasicInfo;
const DeleteCommandRequest = models.DeleteCommandRequest;
const InvokeCommandRequest = models.InvokeCommandRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const Tag = models.Tag;
const RunCommandResponse = models.RunCommandResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateCommandRequest = models.CreateCommandRequest;


/**
 * tat client
 * @class
 */
class TatClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tat.tencentcloudapi.com", "2020-10-28", credential, region, profile);
    }
    
    /**
     * 此接口用于查询命令详情。
     * @param {DescribeCommandsRequest} req
     * @param {function(string, DescribeCommandsResponse):void} cb
     * @public
     */
    DescribeCommands(req, cb) {
        let resp = new DescribeCommandsResponse();
        this.request("DescribeCommands", req, resp, cb);
    }

    /**
     * 此接口用于查询执行活动详情。
     * @param {DescribeInvocationsRequest} req
     * @param {function(string, DescribeInvocationsResponse):void} cb
     * @public
     */
    DescribeInvocations(req, cb) {
        let resp = new DescribeInvocationsResponse();
        this.request("DescribeInvocations", req, resp, cb);
    }

    /**
     * 此接口用于查询执行任务详情。
     * @param {DescribeInvocationTasksRequest} req
     * @param {function(string, DescribeInvocationTasksResponse):void} cb
     * @public
     */
    DescribeInvocationTasks(req, cb) {
        let resp = new DescribeInvocationTasksResponse();
        this.request("DescribeInvocationTasks", req, resp, cb);
    }

    /**
     * 此接口用于查询地域列表
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 此接口用于预览自定义参数替换后的命令内容。不会触发真实执行。
     * @param {PreviewReplacedCommandContentRequest} req
     * @param {function(string, PreviewReplacedCommandContentResponse):void} cb
     * @public
     */
    PreviewReplacedCommandContent(req, cb) {
        let resp = new PreviewReplacedCommandContentResponse();
        this.request("PreviewReplacedCommandContent", req, resp, cb);
    }

    /**
     * 此接口用于创建命令。
     * @param {CreateCommandRequest} req
     * @param {function(string, CreateCommandResponse):void} cb
     * @public
     */
    CreateCommand(req, cb) {
        let resp = new CreateCommandResponse();
        this.request("CreateCommand", req, resp, cb);
    }

    /**
     * 此接口用于删除命令。
     * @param {DeleteCommandRequest} req
     * @param {function(string, DeleteCommandResponse):void} cb
     * @public
     */
    DeleteCommand(req, cb) {
        let resp = new DeleteCommandResponse();
        this.request("DeleteCommand", req, resp, cb);
    }

    /**
     * 此接口用于修改命令。
     * @param {ModifyCommandRequest} req
     * @param {function(string, ModifyCommandResponse):void} cb
     * @public
     */
    ModifyCommand(req, cb) {
        let resp = new ModifyCommandResponse();
        this.request("ModifyCommand", req, resp, cb);
    }

    /**
     * 此接口用于查询自动化助手客户端的状态。
     * @param {DescribeAutomationAgentStatusRequest} req
     * @param {function(string, DescribeAutomationAgentStatusResponse):void} cb
     * @public
     */
    DescribeAutomationAgentStatus(req, cb) {
        let resp = new DescribeAutomationAgentStatusResponse();
        this.request("DescribeAutomationAgentStatus", req, resp, cb);
    }

    /**
     * 执行命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 `RUNNING` 状态
* 不可同时指定 CVM 和 Lighthouse
     * @param {RunCommandRequest} req
     * @param {function(string, RunCommandResponse):void} cb
     * @public
     */
    RunCommand(req, cb) {
        let resp = new RunCommandResponse();
        this.request("RunCommand", req, resp, cb);
    }

    /**
     * 在指定的实例上触发命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 RUNNING 状态
* 不可同时指定 CVM 和 Lighthouse
     * @param {InvokeCommandRequest} req
     * @param {function(string, InvokeCommandResponse):void} cb
     * @public
     */
    InvokeCommand(req, cb) {
        let resp = new InvokeCommandResponse();
        this.request("InvokeCommand", req, resp, cb);
    }


}
module.exports = TatClient;
