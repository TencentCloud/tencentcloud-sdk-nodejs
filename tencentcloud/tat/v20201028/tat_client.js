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
const ScheduleSettings = models.ScheduleSettings;
const InvocationTaskBasicInfo = models.InvocationTaskBasicInfo;
const PreviewReplacedCommandContentResponse = models.PreviewReplacedCommandContentResponse;
const CreateCommandResponse = models.CreateCommandResponse;
const DisableInvokerRequest = models.DisableInvokerRequest;
const AutomationAgentInfo = models.AutomationAgentInfo;
const RunCommandRequest = models.RunCommandRequest;
const Invoker = models.Invoker;
const DescribeInvocationTasksRequest = models.DescribeInvocationTasksRequest;
const Invocation = models.Invocation;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const CommandDocument = models.CommandDocument;
const DescribeInvokerRecordsResponse = models.DescribeInvokerRecordsResponse;
const TaskResult = models.TaskResult;
const ModifyInvokerRequest = models.ModifyInvokerRequest;
const EnableInvokerResponse = models.EnableInvokerResponse;
const EnableInvokerRequest = models.EnableInvokerRequest;
const ModifyCommandResponse = models.ModifyCommandResponse;
const RegionInfo = models.RegionInfo;
const DescribeInvokersResponse = models.DescribeInvokersResponse;
const CancelInvocationResponse = models.CancelInvocationResponse;
const DeleteCommandResponse = models.DeleteCommandResponse;
const DisableInvokerResponse = models.DisableInvokerResponse;
const DescribeCommandsResponse = models.DescribeCommandsResponse;
const CreateInvokerRequest = models.CreateInvokerRequest;
const DescribeAutomationAgentStatusRequest = models.DescribeAutomationAgentStatusRequest;
const InvokeCommandResponse = models.InvokeCommandResponse;
const ModifyCommandRequest = models.ModifyCommandRequest;
const DescribeInvokersRequest = models.DescribeInvokersRequest;
const DescribeCommandsRequest = models.DescribeCommandsRequest;
const DeleteInvokerResponse = models.DeleteInvokerResponse;
const DescribeInvocationsRequest = models.DescribeInvocationsRequest;
const Filter = models.Filter;
const DescribeInvocationsResponse = models.DescribeInvocationsResponse;
const DescribeInvocationTasksResponse = models.DescribeInvocationTasksResponse;
const Command = models.Command;
const PreviewReplacedCommandContentRequest = models.PreviewReplacedCommandContentRequest;
const InvocationTask = models.InvocationTask;
const ModifyInvokerResponse = models.ModifyInvokerResponse;
const InvokerRecord = models.InvokerRecord;
const DescribeAutomationAgentStatusResponse = models.DescribeAutomationAgentStatusResponse;
const CreateInvokerResponse = models.CreateInvokerResponse;
const CancelInvocationRequest = models.CancelInvocationRequest;
const DeleteCommandRequest = models.DeleteCommandRequest;
const DeleteInvokerRequest = models.DeleteInvokerRequest;
const InvokeCommandRequest = models.InvokeCommandRequest;
const DescribeInvokerRecordsRequest = models.DescribeInvokerRecordsRequest;
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
     * 此接口用于启用执行器。
     * @param {EnableInvokerRequest} req
     * @param {function(string, EnableInvokerResponse):void} cb
     * @public
     */
    EnableInvoker(req, cb) {
        let resp = new EnableInvokerResponse();
        this.request("EnableInvoker", req, resp, cb);
    }

    /**
     * 此接口用于删除执行器。
     * @param {DeleteInvokerRequest} req
     * @param {function(string, DeleteInvokerResponse):void} cb
     * @public
     */
    DeleteInvoker(req, cb) {
        let resp = new DeleteInvokerResponse();
        this.request("DeleteInvoker", req, resp, cb);
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
     * 取消一台或多台CVM实例执行的命令

* 如果命令还未下发到agent，任务状态处于处于PENDING、DELIVERING、DELIVER_DELAYED，取消后任务状态是CANCELLED
* 如果命令已下发到agent，任务状态处于RUNNING， 取消后任务状态是TERMINATED
     * @param {CancelInvocationRequest} req
     * @param {function(string, CancelInvocationResponse):void} cb
     * @public
     */
    CancelInvocation(req, cb) {
        let resp = new CancelInvocationResponse();
        this.request("CancelInvocation", req, resp, cb);
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
     * 此接口用于创建执行器。
     * @param {CreateInvokerRequest} req
     * @param {function(string, CreateInvokerResponse):void} cb
     * @public
     */
    CreateInvoker(req, cb) {
        let resp = new CreateInvokerResponse();
        this.request("CreateInvoker", req, resp, cb);
    }

    /**
     * 此接口用于查询执行器的执行记录。
     * @param {DescribeInvokerRecordsRequest} req
     * @param {function(string, DescribeInvokerRecordsResponse):void} cb
     * @public
     */
    DescribeInvokerRecords(req, cb) {
        let resp = new DescribeInvokerRecordsResponse();
        this.request("DescribeInvokerRecords", req, resp, cb);
    }

    /**
     * 此接口用于查询 TAT 产品后台地域列表。
RegionState 为 AVAILABLE，代表该地域的 TAT 后台服务已经可用；未返回，代表该地域的 TAT 后台服务尚不可用。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 此接口用于停止执行器。
     * @param {DisableInvokerRequest} req
     * @param {function(string, DisableInvokerResponse):void} cb
     * @public
     */
    DisableInvoker(req, cb) {
        let resp = new DisableInvokerResponse();
        this.request("DisableInvoker", req, resp, cb);
    }

    /**
     * 此接口用于修改执行器。
     * @param {ModifyInvokerRequest} req
     * @param {function(string, ModifyInvokerResponse):void} cb
     * @public
     */
    ModifyInvoker(req, cb) {
        let resp = new ModifyInvokerResponse();
        this.request("ModifyInvoker", req, resp, cb);
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
如果命令与执行器关联，则无法被删除。
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
     * 此接口用于查询执行器信息。
     * @param {DescribeInvokersRequest} req
     * @param {function(string, DescribeInvokersResponse):void} cb
     * @public
     */
    DescribeInvokers(req, cb) {
        let resp = new DescribeInvokersResponse();
        this.request("DescribeInvokers", req, resp, cb);
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
