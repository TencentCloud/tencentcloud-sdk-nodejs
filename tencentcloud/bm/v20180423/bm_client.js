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
const UserCmdTask = models.UserCmdTask;
const TaskOperationLog = models.TaskOperationLog;
const CreatePsaRegulationRequest = models.CreatePsaRegulationRequest;
const DescribeUserCmdTasksResponse = models.DescribeUserCmdTasksResponse;
const DescribeDeviceOperationLogRequest = models.DescribeDeviceOperationLogRequest;
const DescribeDeviceInventoryResponse = models.DescribeDeviceInventoryResponse;
const DescribeOsInfoResponse = models.DescribeOsInfoResponse;
const DescribeOsInfoRequest = models.DescribeOsInfoRequest;
const FailedTaskInfo = models.FailedTaskInfo;
const DescribeDevicePositionResponse = models.DescribeDevicePositionResponse;
const DeleteUserCmdsResponse = models.DeleteUserCmdsResponse;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const RebootDevicesResponse = models.RebootDevicesResponse;
const ResetDevicePasswordRequest = models.ResetDevicePasswordRequest;
const ModifyDeviceAliasesRequest = models.ModifyDeviceAliasesRequest;
const UnbindPsaTagRequest = models.UnbindPsaTagRequest;
const ModifyPayModePre2PostResponse = models.ModifyPayModePre2PostResponse;
const PsaRegulation = models.PsaRegulation;
const SuccessTaskInfo = models.SuccessTaskInfo;
const DescribeTaskOperationLogResponse = models.DescribeTaskOperationLogResponse;
const DescribeDeviceInventoryRequest = models.DescribeDeviceInventoryRequest;
const DescribeDevicePriceInfoResponse = models.DescribeDevicePriceInfoResponse;
const ModifyDeviceAliasesResponse = models.ModifyDeviceAliasesResponse;
const DescribeUserCmdsRequest = models.DescribeUserCmdsRequest;
const ModifyDeviceAutoRenewFlagRequest = models.ModifyDeviceAutoRenewFlagRequest;
const DeviceAlias = models.DeviceAlias;
const DescribeUserCmdTaskInfoResponse = models.DescribeUserCmdTaskInfoResponse;
const RunUserCmdRequest = models.RunUserCmdRequest;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const ResetDevicePasswordResponse = models.ResetDevicePasswordResponse;
const DescribeDevicePositionRequest = models.DescribeDevicePositionRequest;
const UserCmdTaskInfo = models.UserCmdTaskInfo;
const UserCmd = models.UserCmd;
const DeviceClass = models.DeviceClass;
const DescribeRepairTaskConstantRequest = models.DescribeRepairTaskConstantRequest;
const DeletePsaRegulationRequest = models.DeletePsaRegulationRequest;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const CreateSpotDeviceRequest = models.CreateSpotDeviceRequest;
const DeleteUserCmdsRequest = models.DeleteUserCmdsRequest;
const OsInfo = models.OsInfo;
const ModifyUserCmdResponse = models.ModifyUserCmdResponse;
const CreateUserCmdRequest = models.CreateUserCmdRequest;
const ModifyPayModePre2PostRequest = models.ModifyPayModePre2PostRequest;
const BindPsaTagResponse = models.BindPsaTagResponse;
const DeviceOperationLog = models.DeviceOperationLog;
const DescribeRepairTaskConstantResponse = models.DescribeRepairTaskConstantResponse;
const RepairTaskControlResponse = models.RepairTaskControlResponse;
const DevicePriceInfo = models.DevicePriceInfo;
const RebootDevicesRequest = models.RebootDevicesRequest;
const DescribeDeviceClassResponse = models.DescribeDeviceClassResponse;
const DescribePsaRegulationsResponse = models.DescribePsaRegulationsResponse;
const DescribeDeviceOperationLogResponse = models.DescribeDeviceOperationLogResponse;
const UnbindPsaTagResponse = models.UnbindPsaTagResponse;
const ModifyUserCmdRequest = models.ModifyUserCmdRequest;
const SetOutBandVpnAuthPasswordResponse = models.SetOutBandVpnAuthPasswordResponse;
const OfflineDevicesResponse = models.OfflineDevicesResponse;
const CreatePsaRegulationResponse = models.CreatePsaRegulationResponse;
const ModifyPsaRegulationRequest = models.ModifyPsaRegulationRequest;
const DescribeUserCmdsResponse = models.DescribeUserCmdsResponse;
const RunUserCmdResponse = models.RunUserCmdResponse;
const ModifyDeviceAutoRenewFlagResponse = models.ModifyDeviceAutoRenewFlagResponse;
const SetOutBandVpnAuthPasswordRequest = models.SetOutBandVpnAuthPasswordRequest;
const DescribeDeviceClassRequest = models.DescribeDeviceClassRequest;
const DescribeUserCmdTaskInfoRequest = models.DescribeUserCmdTaskInfoRequest;
const DevicePositionInfo = models.DevicePositionInfo;
const BindPsaTagRequest = models.BindPsaTagRequest;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const RepairTaskControlRequest = models.RepairTaskControlRequest;
const CreateSpotDeviceResponse = models.CreateSpotDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const OfflineDevicesRequest = models.OfflineDevicesRequest;
const DescribePsaRegulationsRequest = models.DescribePsaRegulationsRequest;
const Tag = models.Tag;
const DeletePsaRegulationResponse = models.DeletePsaRegulationResponse;
const DescribeUserCmdTasksRequest = models.DescribeUserCmdTasksRequest;
const DescribeDevicePriceInfoRequest = models.DescribeDevicePriceInfoRequest;
const CreateUserCmdResponse = models.CreateUserCmdResponse;
const TaskType = models.TaskType;
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
     * 获取自定义脚本信息列表
     * @param {DescribeUserCmdsRequest} req
     * @param {function(string, DescribeUserCmdsResponse):void} cb
     * @public
     */
    DescribeUserCmds(req, cb) {
        let resp = new DescribeUserCmdsResponse();
        this.request("DescribeUserCmds", req, resp, cb);
    }

    /**
     * 允许修改规则信息及关联故障类型
     * @param {ModifyPsaRegulationRequest} req
     * @param {function(string, ModifyPsaRegulationResponse):void} cb
     * @public
     */
    ModifyPsaRegulation(req, cb) {
        let resp = new ModifyPsaRegulationResponse();
        this.request("ModifyPsaRegulation", req, resp, cb);
    }

    /**
     * 获取预授权规则列表
     * @param {DescribePsaRegulationsRequest} req
     * @param {function(string, DescribePsaRegulationsResponse):void} cb
     * @public
     */
    DescribePsaRegulations(req, cb) {
        let resp = new DescribePsaRegulationsResponse();
        this.request("DescribePsaRegulations", req, resp, cb);
    }

    /**
     * 修改物理机服务器自动续费标志
     * @param {ModifyDeviceAutoRenewFlagRequest} req
     * @param {function(string, ModifyDeviceAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyDeviceAutoRenewFlag(req, cb) {
        let resp = new ModifyDeviceAutoRenewFlagResponse();
        this.request("ModifyDeviceAutoRenewFlag", req, resp, cb);
    }

    /**
     * 用于销毁可退还的服务器
     * @param {OfflineDevicesRequest} req
     * @param {function(string, OfflineDevicesResponse):void} cb
     * @public
     */
    OfflineDevices(req, cb) {
        let resp = new OfflineDevicesResponse();
        this.request("OfflineDevices", req, resp, cb);
    }

    /**
     * 运行自定义脚本
     * @param {RunUserCmdRequest} req
     * @param {function(string, RunUserCmdResponse):void} cb
     * @public
     */
    RunUserCmd(req, cb) {
        let resp = new RunUserCmdResponse();
        this.request("RunUserCmd", req, resp, cb);
    }

    /**
     * 获取自定义脚本任务列表
     * @param {DescribeUserCmdTasksRequest} req
     * @param {function(string, DescribeUserCmdTasksResponse):void} cb
     * @public
     */
    DescribeUserCmdTasks(req, cb) {
        let resp = new DescribeUserCmdTasksResponse();
        this.request("DescribeUserCmdTasks", req, resp, cb);
    }

    /**
     * 创建预授权规则
     * @param {CreatePsaRegulationRequest} req
     * @param {function(string, CreatePsaRegulationResponse):void} cb
     * @public
     */
    CreatePsaRegulation(req, cb) {
        let resp = new CreatePsaRegulationResponse();
        this.request("CreatePsaRegulation", req, resp, cb);
    }

    /**
     * 获取获取设备类型
     * @param {DescribeDeviceClassRequest} req
     * @param {function(string, DescribeDeviceClassResponse):void} cb
     * @public
     */
    DescribeDeviceClass(req, cb) {
        let resp = new DescribeDeviceClassResponse();
        this.request("DescribeDeviceClass", req, resp, cb);
    }

    /**
     * 修改自定义脚本
     * @param {ModifyUserCmdRequest} req
     * @param {function(string, ModifyUserCmdResponse):void} cb
     * @public
     */
    ModifyUserCmd(req, cb) {
        let resp = new ModifyUserCmdResponse();
        this.request("ModifyUserCmd", req, resp, cb);
    }

    /**
     * 删除自定义脚本
     * @param {DeleteUserCmdsRequest} req
     * @param {function(string, DeleteUserCmdsResponse):void} cb
     * @public
     */
    DeleteUserCmds(req, cb) {
        let resp = new DeleteUserCmdsResponse();
        this.request("DeleteUserCmds", req, resp, cb);
    }

    /**
     * 为预授权规则绑定标签
     * @param {BindPsaTagRequest} req
     * @param {function(string, BindPsaTagResponse):void} cb
     * @public
     */
    BindPsaTag(req, cb) {
        let resp = new BindPsaTagResponse();
        this.request("BindPsaTag", req, resp, cb);
    }

    /**
     * 删除预授权规则
     * @param {DeletePsaRegulationRequest} req
     * @param {function(string, DeletePsaRegulationResponse):void} cb
     * @public
     */
    DeletePsaRegulation(req, cb) {
        let resp = new DeletePsaRegulationResponse();
        this.request("DeletePsaRegulation", req, resp, cb);
    }

    /**
     * 创建自定义脚本
     * @param {CreateUserCmdRequest} req
     * @param {function(string, CreateUserCmdResponse):void} cb
     * @public
     */
    CreateUserCmd(req, cb) {
        let resp = new CreateUserCmdResponse();
        this.request("CreateUserCmd", req, resp, cb);
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
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * 重启机器
     * @param {RebootDevicesRequest} req
     * @param {function(string, RebootDevicesResponse):void} cb
     * @public
     */
    RebootDevices(req, cb) {
        let resp = new RebootDevicesResponse();
        this.request("RebootDevices", req, resp, cb);
    }

    /**
     * 查询指定机型所支持的操作系统
     * @param {DescribeOsInfoRequest} req
     * @param {function(string, DescribeOsInfoResponse):void} cb
     * @public
     */
    DescribeOsInfo(req, cb) {
        let resp = new DescribeOsInfoResponse();
        this.request("DescribeOsInfo", req, resp, cb);
    }

    /**
     * 查询服务器所在的位置，如机架，上联交换机等信息
     * @param {DescribeDevicePositionRequest} req
     * @param {function(string, DescribeDevicePositionResponse):void} cb
     * @public
     */
    DescribeDevicePosition(req, cb) {
        let resp = new DescribeDevicePositionResponse();
        this.request("DescribeDevicePosition", req, resp, cb);
    }

    /**
     * 获取自定义脚本任务详细信息
     * @param {DescribeUserCmdTaskInfoRequest} req
     * @param {function(string, DescribeUserCmdTaskInfoResponse):void} cb
     * @public
     */
    DescribeUserCmdTaskInfo(req, cb) {
        let resp = new DescribeUserCmdTaskInfoResponse();
        this.request("DescribeUserCmdTaskInfo", req, resp, cb);
    }

    /**
     * 查询服务器价格信息，支持设备的批量查找，支持标准机型和弹性机型的混合查找
     * @param {DescribeDevicePriceInfoRequest} req
     * @param {function(string, DescribeDevicePriceInfoResponse):void} cb
     * @public
     */
    DescribeDevicePriceInfo(req, cb) {
        let resp = new DescribeDevicePriceInfoResponse();
        this.request("DescribeDevicePriceInfo", req, resp, cb);
    }

    /**
     * 获取维修任务操作日志
     * @param {DescribeTaskOperationLogRequest} req
     * @param {function(string, DescribeTaskOperationLogResponse):void} cb
     * @public
     */
    DescribeTaskOperationLog(req, cb) {
        let resp = new DescribeTaskOperationLogResponse();
        this.request("DescribeTaskOperationLog", req, resp, cb);
    }

    /**
     * 将设备的预付费模式修改为后付费计费模式，支持批量转换。（前提是客户要加入黑石物理机后付费计费的白名单，申请黑石物理机后付费可以联系腾讯云客服）
     * @param {ModifyPayModePre2PostRequest} req
     * @param {function(string, ModifyPayModePre2PostResponse):void} cb
     * @public
     */
    ModifyPayModePre2Post(req, cb) {
        let resp = new ModifyPayModePre2PostResponse();
        this.request("ModifyPayModePre2Post", req, resp, cb);
    }

    /**
     * 解除标签与预授权规则的绑定
     * @param {UnbindPsaTagRequest} req
     * @param {function(string, UnbindPsaTagResponse):void} cb
     * @public
     */
    UnbindPsaTag(req, cb) {
        let resp = new UnbindPsaTagResponse();
        this.request("UnbindPsaTag", req, resp, cb);
    }

    /**
     * 创建黑石竞价实例
     * @param {CreateSpotDeviceRequest} req
     * @param {function(string, CreateSpotDeviceResponse):void} cb
     * @public
     */
    CreateSpotDevice(req, cb) {
        let resp = new CreateSpotDeviceResponse();
        this.request("CreateSpotDevice", req, resp, cb);
    }

    /**
     * 重置服务器密码
     * @param {ResetDevicePasswordRequest} req
     * @param {function(string, ResetDevicePasswordResponse):void} cb
     * @public
     */
    ResetDevicePassword(req, cb) {
        let resp = new ResetDevicePasswordResponse();
        this.request("ResetDevicePassword", req, resp, cb);
    }

    /**
     * 查询设备库存
     * @param {DescribeDeviceInventoryRequest} req
     * @param {function(string, DescribeDeviceInventoryResponse):void} cb
     * @public
     */
    DescribeDeviceInventory(req, cb) {
        let resp = new DescribeDeviceInventoryResponse();
        this.request("DescribeDeviceInventory", req, resp, cb);
    }

    /**
     * 查询设备操作日志， 如设备重启，重装，设置密码等操作
     * @param {DescribeDeviceOperationLogRequest} req
     * @param {function(string, DescribeDeviceOperationLogResponse):void} cb
     * @public
     */
    DescribeDeviceOperationLog(req, cb) {
        let resp = new DescribeDeviceOperationLogResponse();
        this.request("DescribeDeviceOperationLog", req, resp, cb);
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
        this.request("RepairTaskControl", req, resp, cb);
    }

    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }

    /**
     * 维修任务配置获取
     * @param {DescribeRepairTaskConstantRequest} req
     * @param {function(string, DescribeRepairTaskConstantResponse):void} cb
     * @public
     */
    DescribeRepairTaskConstant(req, cb) {
        let resp = new DescribeRepairTaskConstantResponse();
        this.request("DescribeRepairTaskConstant", req, resp, cb);
    }

    /**
     * 设置带外VPN认证用户密码
     * @param {SetOutBandVpnAuthPasswordRequest} req
     * @param {function(string, SetOutBandVpnAuthPasswordResponse):void} cb
     * @public
     */
    SetOutBandVpnAuthPassword(req, cb) {
        let resp = new SetOutBandVpnAuthPasswordResponse();
        this.request("SetOutBandVpnAuthPassword", req, resp, cb);
    }

    /**
     * 修改服务器名称
     * @param {ModifyDeviceAliasesRequest} req
     * @param {function(string, ModifyDeviceAliasesResponse):void} cb
     * @public
     */
    ModifyDeviceAliases(req, cb) {
        let resp = new ModifyDeviceAliasesResponse();
        this.request("ModifyDeviceAliases", req, resp, cb);
    }


}
module.exports = BmClient;
