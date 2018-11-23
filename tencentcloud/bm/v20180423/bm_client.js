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
const ModifyPsaRegulationResponse = models.ModifyPsaRegulationResponse;
const DescribeTaskOperationLogRequest = models.DescribeTaskOperationLogRequest;
const TaskOperationLog = models.TaskOperationLog;
const CreatePsaRegulationRequest = models.CreatePsaRegulationRequest;
const PsaRegulation = models.PsaRegulation;
const DescribeTaskOperationLogResponse = models.DescribeTaskOperationLogResponse;
const RepairTaskControlResponse = models.RepairTaskControlResponse;
const UnbindPsaTagRequest = models.UnbindPsaTagRequest;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const DescribeRepairTaskConstantRequest = models.DescribeRepairTaskConstantRequest;
const DeletePsaRegulationRequest = models.DeletePsaRegulationRequest;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const CreateSpotDeviceRequest = models.CreateSpotDeviceRequest;
const CreateUserCmdResponse = models.CreateUserCmdResponse;
const CreateUserCmdRequest = models.CreateUserCmdRequest;
const UnbindPsaTagResponse = models.UnbindPsaTagResponse;
const BindPsaTagResponse = models.BindPsaTagResponse;
const DescribeRepairTaskConstantResponse = models.DescribeRepairTaskConstantResponse;
const TaskType = models.TaskType;
const DescribePsaRegulationsResponse = models.DescribePsaRegulationsResponse;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const CreatePsaRegulationResponse = models.CreatePsaRegulationResponse;
const ModifyPsaRegulationRequest = models.ModifyPsaRegulationRequest;
const BindPsaTagRequest = models.BindPsaTagRequest;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const RepairTaskControlRequest = models.RepairTaskControlRequest;
const CreateSpotDeviceResponse = models.CreateSpotDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const DescribePsaRegulationsRequest = models.DescribePsaRegulationsRequest;
const Tag = models.Tag;
const DeletePsaRegulationResponse = models.DeletePsaRegulationResponse;
const TaskInfo = models.TaskInfo;


/**
 * bm client
 * @class
 */
class BmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bm.tencentcloudapi.com", "2018-04-23", credential, region, profile);
    }
    
    /**
     * 解除标签与预授权规则的绑定
     * @param {UnbindPsaTagRequest} req
     * @param {function(string, UnbindPsaTagResponse):void} cb
     * @public
     */
    UnbindPsaTag(req, cb) {
        let resp = new UnbindPsaTagResponse();
        this.request("UnbindPsaTag", req, resp, options, cb);
    }

    /**
     * 创建黑石竞价实例
     * @param {CreateSpotDeviceRequest} req
     * @param {function(string, CreateSpotDeviceResponse):void} cb
     * @public
     */
    CreateSpotDevice(req, cb) {
        let resp = new CreateSpotDeviceResponse();
        this.request("CreateSpotDevice", req, resp, options, cb);
    }

    /**
     * 允许修改规则信息及关联故障类型
     * @param {ModifyPsaRegulationRequest} req
     * @param {function(string, ModifyPsaRegulationResponse):void} cb
     * @public
     */
    ModifyPsaRegulation(req, cb) {
        let resp = new ModifyPsaRegulationResponse();
        this.request("ModifyPsaRegulation", req, resp, options, cb);
    }

    /**
     * 获取预授权规则列表
     * @param {DescribePsaRegulationsRequest} req
     * @param {function(string, DescribePsaRegulationsResponse):void} cb
     * @public
     */
    DescribePsaRegulations(req, cb) {
        let resp = new DescribePsaRegulationsResponse();
        this.request("DescribePsaRegulations", req, resp, options, cb);
    }

    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, options, cb);
    }

    /**
     * 维修任务配置获取
     * @param {DescribeRepairTaskConstantRequest} req
     * @param {function(string, DescribeRepairTaskConstantResponse):void} cb
     * @public
     */
    DescribeRepairTaskConstant(req, cb) {
        let resp = new DescribeRepairTaskConstantResponse();
        this.request("DescribeRepairTaskConstant", req, resp, options, cb);
    }

    /**
     * 为预授权规则绑定标签
     * @param {BindPsaTagRequest} req
     * @param {function(string, BindPsaTagResponse):void} cb
     * @public
     */
    BindPsaTag(req, cb) {
        let resp = new BindPsaTagResponse();
        this.request("BindPsaTag", req, resp, options, cb);
    }

    /**
     * 获取维修任务操作日志
     * @param {DescribeTaskOperationLogRequest} req
     * @param {function(string, DescribeTaskOperationLogResponse):void} cb
     * @public
     */
    DescribeTaskOperationLog(req, cb) {
        let resp = new DescribeTaskOperationLogResponse();
        this.request("DescribeTaskOperationLog", req, resp, options, cb);
    }

    /**
     * 删除预授权规则
     * @param {DeletePsaRegulationRequest} req
     * @param {function(string, DeletePsaRegulationResponse):void} cb
     * @public
     */
    DeletePsaRegulation(req, cb) {
        let resp = new DeletePsaRegulationResponse();
        this.request("DeletePsaRegulation", req, resp, options, cb);
    }

    /**
     * 创建自定义脚本
     * @param {CreateUserCmdRequest} req
     * @param {function(string, CreateUserCmdResponse):void} cb
     * @public
     */
    CreateUserCmd(req, cb) {
        let resp = new CreateUserCmdResponse();
        this.request("CreateUserCmd", req, resp, options, cb);
    }

    /**
     * 获取用户维修任务列表及详细信息<br>
<br>
TaskStatus（任务状态ID）与状态中文名的对应关系如下：<br>
1：未授权<br>
2：处理中<br>
3：待确认<br>
4：未授权-暂不处理<br>
5：已恢复<br>
6：待确认-未恢复<br>
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, options, cb);
    }

    /**
     * 此接口用于操作维修任务<br>
入参TaskId为维修任务ID<br>
入参Operate表示对维修任务的操作，支持如下取值：<br>
AuthorizeRepair（授权维修）<br>
Ignore（暂不提醒）<br>
ConfirmRecovered（维修完成后，确认故障恢复）<br>
ConfirmUnRecovered（维修完成后，确认故障未恢复）<br>
<br>
操作约束（当前任务状态(TaskStatus)->对应可执行的操作）：<br>
未授权(1)->授权维修；暂不处理<br>
暂不处理(4)->授权维修<br>
待确认(3)->确认故障恢复；确认故障未恢复<br>
未恢复(6)->确认故障恢复<br>
<br>
对于Ping不可达故障的任务，还允许：<br>
未授权->确认故障恢复<br>
暂不处理->确认故障恢复<br>
<br>
处理中与已恢复状态的任务不允许进行操作。<br>
<br>
详细信息请访问：https://cloud.tencent.com/document/product/386/18190
     * @param {RepairTaskControlRequest} req
     * @param {function(string, RepairTaskControlResponse):void} cb
     * @public
     */
    RepairTaskControl(req, cb) {
        let resp = new RepairTaskControlResponse();
        this.request("RepairTaskControl", req, resp, options, cb);
    }

    /**
     * 创建预授权规则
     * @param {CreatePsaRegulationRequest} req
     * @param {function(string, CreatePsaRegulationResponse):void} cb
     * @public
     */
    CreatePsaRegulation(req, cb) {
        let resp = new CreatePsaRegulationResponse();
        this.request("CreatePsaRegulation", req, resp, options, cb);
    }


}
module.exports = BmClient;
