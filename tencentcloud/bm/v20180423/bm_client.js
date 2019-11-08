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
const DescribeUserCmdTasksResponse = models.DescribeUserCmdTasksResponse;
const RunUserCmdRequest = models.RunUserCmdRequest;
const CreatePsaRegulationRequest = models.CreatePsaRegulationRequest;
const DescribeDeviceInventoryResponse = models.DescribeDeviceInventoryResponse;
const DescribeOsInfoResponse = models.DescribeOsInfoResponse;
const DescribeOsInfoRequest = models.DescribeOsInfoRequest;
const DescribeTaskOperationLogResponse = models.DescribeTaskOperationLogResponse;
const CreateCustomImageRequest = models.CreateCustomImageRequest;
const DescribeCustomImagesRequest = models.DescribeCustomImagesRequest;
const DescribeUserCmdTaskInfoResponse = models.DescribeUserCmdTaskInfoResponse;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const ModifyLanIpRequest = models.ModifyLanIpRequest;
const DeviceClass = models.DeviceClass;
const DescribeRepairTaskConstantRequest = models.DescribeRepairTaskConstantRequest;
const DeletePsaRegulationRequest = models.DeletePsaRegulationRequest;
const DescribeCustomImageProcessRequest = models.DescribeCustomImageProcessRequest;
const CpuInfo = models.CpuInfo;
const CustomImage = models.CustomImage;
const ModifyDeviceAutoRenewFlagRequest = models.ModifyDeviceAutoRenewFlagRequest;
const StartDevicesResponse = models.StartDevicesResponse;
const BindPsaTagRequest = models.BindPsaTagRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DevicePartition = models.DevicePartition;
const OfflineDevicesResponse = models.OfflineDevicesResponse;
const ModifyPsaRegulationRequest = models.ModifyPsaRegulationRequest;
const RecoverDevicesRequest = models.RecoverDevicesRequest;
const DescribeDeviceClassPartitionRequest = models.DescribeDeviceClassPartitionRequest;
const ZoneInfo = models.ZoneInfo;
const CreateSpotDeviceResponse = models.CreateSpotDeviceResponse;
const BuyDevicesRequest = models.BuyDevicesRequest;
const DescribeHardwareSpecificationRequest = models.DescribeHardwareSpecificationRequest;
const Tag = models.Tag;
const CreateCustomImageResponse = models.CreateCustomImageResponse;
const HostedDeviceOutBandInfo = models.HostedDeviceOutBandInfo;
const ReturnDevicesRequest = models.ReturnDevicesRequest;
const ModifyDeviceAliasesResponse = models.ModifyDeviceAliasesResponse;
const PsaRegulation = models.PsaRegulation;
const DescribeDevicePartitionResponse = models.DescribeDevicePartitionResponse;
const DescribeHostedDeviceOutBandInfoRequest = models.DescribeHostedDeviceOutBandInfoRequest;
const RebootDevicesResponse = models.RebootDevicesResponse;
const ResetDevicePasswordRequest = models.ResetDevicePasswordRequest;
const SubtaskStatus = models.SubtaskStatus;
const DescribeDeviceInventoryRequest = models.DescribeDeviceInventoryRequest;
const DescribeCustomImagesResponse = models.DescribeCustomImagesResponse;
const DeviceAlias = models.DeviceAlias;
const DeleteCustomImagesRequest = models.DeleteCustomImagesRequest;
const PartitionInfo = models.PartitionInfo;
const DescribeDevicePositionRequest = models.DescribeDevicePositionRequest;
const UserCmdTaskInfo = models.UserCmdTaskInfo;
const ShutdownDevicesResponse = models.ShutdownDevicesResponse;
const TaskType = models.TaskType;
const DeleteUserCmdsRequest = models.DeleteUserCmdsRequest;
const DeviceDiskSizeInfo = models.DeviceDiskSizeInfo;
const AttachCamRoleRequest = models.AttachCamRoleRequest;
const DescribeDeviceClassResponse = models.DescribeDeviceClassResponse;
const DescribeDeviceHardwareInfoResponse = models.DescribeDeviceHardwareInfoResponse;
const ModifyUserCmdRequest = models.ModifyUserCmdRequest;
const DescribeDevicePriceInfoResponse = models.DescribeDevicePriceInfoResponse;
const RunUserCmdResponse = models.RunUserCmdResponse;
const DescribeUserCmdsRequest = models.DescribeUserCmdsRequest;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const RepairTaskControlResponse = models.RepairTaskControlResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribePsaRegulationsRequest = models.DescribePsaRegulationsRequest;
const UnbindPsaTagResponse = models.UnbindPsaTagResponse;
const DescribeDevicePriceInfoRequest = models.DescribeDevicePriceInfoRequest;
const DescribeDevicePartitionRequest = models.DescribeDevicePartitionRequest;
const TaskInfo = models.TaskInfo;
const ModifyPsaRegulationResponse = models.ModifyPsaRegulationResponse;
const UserCmdTask = models.UserCmdTask;
const TaskOperationLog = models.TaskOperationLog;
const FailedTaskInfo = models.FailedTaskInfo;
const DescribeDevicePositionResponse = models.DescribeDevicePositionResponse;
const DeleteUserCmdsResponse = models.DeleteUserCmdsResponse;
const ModifyDeviceAliasesRequest = models.ModifyDeviceAliasesRequest;
const ModifyPayModePre2PostResponse = models.ModifyPayModePre2PostResponse;
const SuccessTaskInfo = models.SuccessTaskInfo;
const SetOutBandVpnAuthPasswordRequest = models.SetOutBandVpnAuthPasswordRequest;
const OfflineDevicesRequest = models.OfflineDevicesRequest;
const DeviceHardwareInfo = models.DeviceHardwareInfo;
const DiskInfo = models.DiskInfo;
const SetOutBandVpnAuthPasswordResponse = models.SetOutBandVpnAuthPasswordResponse;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeUserCmdTaskInfoRequest = models.DescribeUserCmdTaskInfoRequest;
const CreateUserCmdResponse = models.CreateUserCmdResponse;
const ModifyUserCmdResponse = models.ModifyUserCmdResponse;
const ModifyPayModePre2PostRequest = models.ModifyPayModePre2PostRequest;
const DeviceOperationLog = models.DeviceOperationLog;
const DescribeRepairTaskConstantResponse = models.DescribeRepairTaskConstantResponse;
const BuyDevicesResponse = models.BuyDevicesResponse;
const ModifyLanIpResponse = models.ModifyLanIpResponse;
const DescribePsaRegulationsResponse = models.DescribePsaRegulationsResponse;
const StartDevicesRequest = models.StartDevicesRequest;
const DescribeUserCmdsResponse = models.DescribeUserCmdsResponse;
const ModifyDeviceAutoRenewFlagResponse = models.ModifyDeviceAutoRenewFlagResponse;
const DescribeOperationResultResponse = models.DescribeOperationResultResponse;
const DescribeDeviceClassRequest = models.DescribeDeviceClassRequest;
const ModifyCustomImageAttributeRequest = models.ModifyCustomImageAttributeRequest;
const DeletePsaRegulationResponse = models.DeletePsaRegulationResponse;
const DeviceClassPartitionInfo = models.DeviceClassPartitionInfo;
const DescribeTaskOperationLogRequest = models.DescribeTaskOperationLogRequest;
const DescribeDeviceOperationLogRequest = models.DescribeDeviceOperationLogRequest;
const DescribeOperationResultRequest = models.DescribeOperationResultRequest;
const AttachCamRoleResponse = models.AttachCamRoleResponse;
const RecoverDevicesResponse = models.RecoverDevicesResponse;
const DetachCamRoleResponse = models.DetachCamRoleResponse;
const ShutdownDevicesRequest = models.ShutdownDevicesRequest;
const UnbindPsaTagRequest = models.UnbindPsaTagRequest;
const ModifyCustomImageAttributeResponse = models.ModifyCustomImageAttributeResponse;
const RegionInfo = models.RegionInfo;
const UserCmd = models.UserCmd;
const CustomImageProcess = models.CustomImageProcess;
const CreateSpotDeviceRequest = models.CreateSpotDeviceRequest;
const OsInfo = models.OsInfo;
const CreateUserCmdRequest = models.CreateUserCmdRequest;
const ReturnDevicesResponse = models.ReturnDevicesResponse;
const BindPsaTagResponse = models.BindPsaTagResponse;
const DescribeHostedDeviceOutBandInfoResponse = models.DescribeHostedDeviceOutBandInfoResponse;
const DevicePriceInfo = models.DevicePriceInfo;
const RebootDevicesRequest = models.RebootDevicesRequest;
const DeleteCustomImagesResponse = models.DeleteCustomImagesResponse;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const DescribeHardwareSpecificationResponse = models.DescribeHardwareSpecificationResponse;
const CreatePsaRegulationResponse = models.CreatePsaRegulationResponse;
const DescribeCustomImageProcessResponse = models.DescribeCustomImageProcessResponse;
const DescribeDeviceHardwareInfoRequest = models.DescribeDeviceHardwareInfoRequest;
const DescribeDeviceOperationLogResponse = models.DescribeDeviceOperationLogResponse;
const RepairTaskControlRequest = models.RepairTaskControlRequest;
const DevicePositionInfo = models.DevicePositionInfo;
const DeviceInfo = models.DeviceInfo;
const ResetDevicePasswordResponse = models.ResetDevicePasswordResponse;
const DescribeUserCmdTasksRequest = models.DescribeUserCmdTasksRequest;
const DetachCamRoleRequest = models.DetachCamRoleRequest;
const DescribeDeviceClassPartitionResponse = models.DescribeDeviceClassPartitionResponse;


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
     * 销毁黑石物理机实例：可以销毁物理机列表中的竞价实例，或回收站列表中所有计费模式的实例
     * @param {OfflineDevicesRequest} req
     * @param {function(string, OfflineDevicesResponse):void} cb
     * @public
     */
    OfflineDevices(req, cb) {
        let resp = new OfflineDevicesResponse();
        this.request("OfflineDevices", req, resp, cb);
    }

    /**
     * 修改物理机内网IP（不重装系统）
     * @param {ModifyLanIpRequest} req
     * @param {function(string, ModifyLanIpResponse):void} cb
     * @public
     */
    ModifyLanIp(req, cb) {
        let resp = new ModifyLanIpResponse();
        this.request("ModifyLanIp", req, resp, cb);
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
     * 查询自定义镜像制作进度
     * @param {DescribeCustomImageProcessRequest} req
     * @param {function(string, DescribeCustomImageProcessResponse):void} cb
     * @public
     */
    DescribeCustomImageProcess(req, cb) {
        let resp = new DescribeCustomImageProcessResponse();
        this.request("DescribeCustomImageProcess", req, resp, cb);
    }

    /**
     * 开启服务器
     * @param {StartDevicesRequest} req
     * @param {function(string, StartDevicesResponse):void} cb
     * @public
     */
    StartDevices(req, cb) {
        let resp = new StartDevicesResponse();
        this.request("StartDevices", req, resp, cb);
    }

    /**
     * 查询设备硬件配置信息，如 CPU 型号，内存大小，磁盘大小和数量
     * @param {DescribeDeviceHardwareInfoRequest} req
     * @param {function(string, DescribeDeviceHardwareInfoResponse):void} cb
     * @public
     */
    DescribeDeviceHardwareInfo(req, cb) {
        let resp = new DescribeDeviceHardwareInfoResponse();
        this.request("DescribeDeviceHardwareInfo", req, resp, cb);
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
     * 购买黑石物理机
     * @param {BuyDevicesRequest} req
     * @param {function(string, BuyDevicesResponse):void} cb
     * @public
     */
    BuyDevices(req, cb) {
        let resp = new BuyDevicesResponse();
        this.request("BuyDevices", req, resp, cb);
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
     * 查询托管设备带外信息
     * @param {DescribeHostedDeviceOutBandInfoRequest} req
     * @param {function(string, DescribeHostedDeviceOutBandInfoResponse):void} cb
     * @public
     */
    DescribeHostedDeviceOutBandInfo(req, cb) {
        let resp = new DescribeHostedDeviceOutBandInfoResponse();
        this.request("DescribeHostedDeviceOutBandInfo", req, resp, cb);
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
     * 删除自定义镜像<br>
正用于部署或重装中的镜像被删除后，镜像文件将保留一段时间，直到部署或重装结束
     * @param {DeleteCustomImagesRequest} req
     * @param {function(string, DeleteCustomImagesResponse):void} cb
     * @public
     */
    DeleteCustomImages(req, cb) {
        let resp = new DeleteCustomImagesResponse();
        this.request("DeleteCustomImages", req, resp, cb);
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
     * 查询自定义机型部件信息，包括CpuId对应的型号，DiskTypeId对应的磁盘类型
     * @param {DescribeHardwareSpecificationRequest} req
     * @param {function(string, DescribeHardwareSpecificationResponse):void} cb
     * @public
     */
    DescribeHardwareSpecification(req, cb) {
        let resp = new DescribeHardwareSpecificationResponse();
        this.request("DescribeHardwareSpecification", req, resp, cb);
    }

    /**
     * 服务器绑定CAM角色
     * @param {DetachCamRoleRequest} req
     * @param {function(string, DetachCamRoleResponse):void} cb
     * @public
     */
    DetachCamRole(req, cb) {
        let resp = new DetachCamRoleResponse();
        this.request("DetachCamRole", req, resp, cb);
    }

    /**
     * 服务器绑定CAM角色，该角色授权访问黑石物理服务器服务，为黑石物理服务器提供了访问资源的权限，如请求服务器的临时证书
     * @param {AttachCamRoleRequest} req
     * @param {function(string, AttachCamRoleResponse):void} cb
     * @public
     */
    AttachCamRole(req, cb) {
        let resp = new AttachCamRoleResponse();
        this.request("AttachCamRole", req, resp, cb);
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
     * 获取异步操作状态的完成状态
     * @param {DescribeOperationResultRequest} req
     * @param {function(string, DescribeOperationResultResponse):void} cb
     * @public
     */
    DescribeOperationResult(req, cb) {
        let resp = new DescribeOperationResultResponse();
        this.request("DescribeOperationResult", req, resp, cb);
    }

    /**
     * 用于修改自定义镜像名或描述
     * @param {ModifyCustomImageAttributeRequest} req
     * @param {function(string, ModifyCustomImageAttributeResponse):void} cb
     * @public
     */
    ModifyCustomImageAttribute(req, cb) {
        let resp = new ModifyCustomImageAttributeResponse();
        this.request("ModifyCustomImageAttribute", req, resp, cb);
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
     * 查询地域以及可用区
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
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
     * 退回物理机至回收站，支持批量退还不同计费模式的物理机（包括预付费、后付费、预付费转后付费）
     * @param {ReturnDevicesRequest} req
     * @param {function(string, ReturnDevicesResponse):void} cb
     * @public
     */
    ReturnDevices(req, cb) {
        let resp = new ReturnDevicesResponse();
        this.request("ReturnDevices", req, resp, cb);
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
     * 修改服务器名称
     * @param {ModifyDeviceAliasesRequest} req
     * @param {function(string, ModifyDeviceAliasesResponse):void} cb
     * @public
     */
    ModifyDeviceAliases(req, cb) {
        let resp = new ModifyDeviceAliasesResponse();
        this.request("ModifyDeviceAliases", req, resp, cb);
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
     * 查看自定义镜像列表
     * @param {DescribeCustomImagesRequest} req
     * @param {function(string, DescribeCustomImagesResponse):void} cb
     * @public
     */
    DescribeCustomImages(req, cb) {
        let resp = new DescribeCustomImagesResponse();
        this.request("DescribeCustomImages", req, resp, cb);
    }

    /**
     * 恢复回收站中的物理机（仅限后付费的物理机）
     * @param {RecoverDevicesRequest} req
     * @param {function(string, RecoverDevicesResponse):void} cb
     * @public
     */
    RecoverDevices(req, cb) {
        let resp = new RecoverDevicesResponse();
        this.request("RecoverDevices", req, resp, cb);
    }

    /**
     * 获取物理机的分区格式
     * @param {DescribeDevicePartitionRequest} req
     * @param {function(string, DescribeDevicePartitionResponse):void} cb
     * @public
     */
    DescribeDevicePartition(req, cb) {
        let resp = new DescribeDevicePartitionResponse();
        this.request("DescribeDevicePartition", req, resp, cb);
    }

    /**
     * 关闭服务器
     * @param {ShutdownDevicesRequest} req
     * @param {function(string, ShutdownDevicesResponse):void} cb
     * @public
     */
    ShutdownDevices(req, cb) {
        let resp = new ShutdownDevicesResponse();
        this.request("ShutdownDevices", req, resp, cb);
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
     * 查询机型支持的RAID方式， 并返回系统盘的分区和逻辑盘的列表
     * @param {DescribeDeviceClassPartitionRequest} req
     * @param {function(string, DescribeDeviceClassPartitionResponse):void} cb
     * @public
     */
    DescribeDeviceClassPartition(req, cb) {
        let resp = new DescribeDeviceClassPartitionResponse();
        this.request("DescribeDeviceClassPartition", req, resp, cb);
    }

    /**
     * 创建自定义镜像<br>
每个AppId在每个可用区最多保留20个自定义镜像
     * @param {CreateCustomImageRequest} req
     * @param {function(string, CreateCustomImageResponse):void} cb
     * @public
     */
    CreateCustomImage(req, cb) {
        let resp = new CreateCustomImageResponse();
        this.request("CreateCustomImage", req, resp, cb);
    }


}
module.exports = BmClient;
