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
 * iss client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iss.tencentcloudapi.com", "2023-05-17", clientConfig);
    }
    /**
     * 用于删除实时上云模板
     */
    async DeleteRecordTemplate(req, cb) {
        return this.request("DeleteRecordTemplate", req, cb);
    }
    /**
     * 用于启用/禁用设备，禁用后拒绝设备注册。
     */
    async UpdateDeviceStatus(req, cb) {
        return this.request("UpdateDeviceStatus", req, cb);
    }
    /**
     * 用于修改网关信息（支持对网关名称和描述的修改）。
     */
    async UpdateGateway(req, cb) {
        return this.request("UpdateGateway", req, cb);
    }
    /**
     * 用于查询取回任务列表
     */
    async ListRecordRetrieveTasks(req, cb) {
        return this.request("ListRecordRetrieveTasks", req, cb);
    }
    /**
     * 用于修改录像上云模板。
     */
    async UpdateRecordBackupTemplate(req, cb) {
        return this.request("UpdateRecordBackupTemplate", req, cb);
    }
    /**
     * 用于删除已添加的设备。
     */
    async DeleteUserDevice(req, cb) {
        return this.request("DeleteUserDevice", req, cb);
    }
    /**
     * 用于查询设备的通道。
     */
    async DescribeDeviceChannel(req, cb) {
        return this.request("DescribeDeviceChannel", req, cb);
    }
    /**
     * 用于删除录像上云模板。
     */
    async DeleteRecordBackupTemplate(req, cb) {
        return this.request("DeleteRecordBackupTemplate", req, cb);
    }
    /**
     * 用于用户添加域名时，查询可以绑定的服务节点，结果为平台支持的所有服务节点。（注意：每个服务节点只能绑定一个域名）
     */
    async DescribeDomainRegion(req, cb) {
        return this.request("DescribeDomainRegion", req, cb);
    }
    /**
     * 平台支持将数据以TS切片的形式存入客户自有COS桶，该接口用于支持客户快捷查询切片信息列表
（注意：只支持标准存储类型的查询）
     */
    async DescribeRecordSlice(req, cb) {
        return this.request("DescribeRecordSlice", req, cb);
    }
    /**
     * 用于查询网关接入协议。
     */
    async DescribeGatewayProtocol(req, cb) {
        return this.request("DescribeGatewayProtocol", req, cb);
    }
    /**
     * 用于查询录像上云模板详情。
     */
    async DescribeRecordBackupTemplate(req, cb) {
        return this.request("DescribeRecordBackupTemplate", req, cb);
    }
    /**
     * 用于获取网关的数据及流量监控信息。
     */
    async DescribeGatewayMonitor(req, cb) {
        return this.request("DescribeGatewayMonitor", req, cb);
    }
    /**
     * 用于查询录像上云计划列表。
     */
    async ListRecordBackupPlans(req, cb) {
        return this.request("ListRecordBackupPlans", req, cb);
    }
    /**
     * 用于获取视频通道的码率信息
     */
    async DescribeVideoBitRate(req, cb) {
        return this.request("DescribeVideoBitRate", req, cb);
    }
    /**
     * 查询网关服务版本
     */
    async DescribeGatewayVersion(req, cb) {
        return this.request("DescribeGatewayVersion", req, cb);
    }
    /**
     * 更新AI任务
     */
    async UpdateAITask(req, cb) {
        return this.request("UpdateAITask", req, cb);
    }
    /**
     * 用于查询任务的子任务列表
     */
    async ListSubTasks(req, cb) {
        return this.request("ListSubTasks", req, cb);
    }
    /**
     * 用于查询用户下所有实时上云计划中的通道列表
     */
    async ListRecordPlanChannels(req, cb) {
        return this.request("ListRecordPlanChannels", req, cb);
    }
    /**
     * 用于添加设备时，查询设备可以使用的服务节点，查询结果为已经绑定了域名的服务节点。
     */
    async DescribeDeviceRegion(req, cb) {
        return this.request("DescribeDeviceRegion", req, cb);
    }
    /**
     * 用于新增组织。
     */
    async AddOrganization(req, cb) {
        return this.request("AddOrganization", req, cb);
    }
    /**
     * 用于查询设备通道预置位信息。
     */
    async DescribeDevicePreset(req, cb) {
        return this.request("DescribeDevicePreset", req, cb);
    }
    /**
     * 用于查询实时上云计划列表
     */
    async ListRecordPlans(req, cb) {
        return this.request("ListRecordPlans", req, cb);
    }
    /**
     * 用于查询录像上云计划详情。
     */
    async DescribeRecordBackupPlan(req, cb) {
        return this.request("DescribeRecordBackupPlan", req, cb);
    }
    /**
     * 用于查询设备云端录像时间轴信息（即为视频上云后设置录像计划后云存储的录像）
     */
    async DescribeRecordFile(req, cb) {
        return this.request("DescribeRecordFile", req, cb);
    }
    /**
     * 用于查询云录像取回任务详情
     */
    async DescribeRecordRetrieveTask(req, cb) {
        return this.request("DescribeRecordRetrieveTask", req, cb);
    }
    /**
     * 用于查询设备的详细信息。
     */
    async DescribeUserDevice(req, cb) {
        return this.request("DescribeUserDevice", req, cb);
    }
    /**
     * 查询禁播通道列表
     */
    async QueryForbidPlayChannelList(req, cb) {
        return this.request("QueryForbidPlayChannelList", req, cb);
    }
    /**
     * 获取AI任务识别结果
     */
    async DescribeAITaskResult(req, cb) {
        return this.request("DescribeAITaskResult", req, cb);
    }
    /**
     * 用于查询实时上云模板详情
     */
    async DescribeRecordTemplate(req, cb) {
        return this.request("DescribeRecordTemplate", req, cb);
    }
    /**
     * 用于修改实时上云模板
     */
    async UpdateRecordTemplate(req, cb) {
        return this.request("UpdateRecordTemplate", req, cb);
    }
    /**
     * 用于新建取回任务
     */
    async AddRecordRetrieveTask(req, cb) {
        return this.request("AddRecordRetrieveTask", req, cb);
    }
    /**
     * 用于根据服务节点获取 CNAME 值。
     */
    async DescribeCNAME(req, cb) {
        return this.request("DescribeCNAME", req, cb);
    }
    /**
     * 用于新增单个设备。添加设备之后，可根据返回结果到设备上进行配置，配置后等待设备注册/推流。
     */
    async AddUserDevice(req, cb) {
        return this.request("AddUserDevice", req, cb);
    }
    /**
     * 用于查询任务详情
     */
    async DescribeTask(req, cb) {
        return this.request("DescribeTask", req, cb);
    }
    /**
     * 添加AI任务
     */
    async AddAITask(req, cb) {
        return this.request("AddAITask", req, cb);
    }
    /**
     * 用于删除组织。
     */
    async DeleteOrganization(req, cb) {
        return this.request("DeleteOrganization", req, cb);
    }
    /**
     * 用于获取云端录像回放url地址
     */
    async DescribeRecordPlaybackUrl(req, cb) {
        return this.request("DescribeRecordPlaybackUrl", req, cb);
    }
    /**
     * 用于批量更改设备的组织。
     */
    async UpdateDeviceOrganization(req, cb) {
        return this.request("UpdateDeviceOrganization", req, cb);
    }
    /**
     * 用于查询添加的域名列表。
     */
    async DescribeDomain(req, cb) {
        return this.request("DescribeDomain", req, cb);
    }
    /**
     * 用于获取设备的实时开流地址。
     */
    async ControlDeviceStream(req, cb) {
        return this.request("ControlDeviceStream", req, cb);
    }
    /**
     * 用于获取云录像下载 url
     */
    async DescribeVideoDownloadUrl(req, cb) {
        return this.request("DescribeVideoDownloadUrl", req, cb);
    }
    /**
     * 用于同步国标设备的通道（接口调用后，触发向设备请求通道列表，新增的通道入库，设备上已删除的通道需自行删除、后台不自动删除）。
     */
    async RefreshDeviceChannel(req, cb) {
        return this.request("RefreshDeviceChannel", req, cb);
    }
    /**
     * 用于操作设备预置位，包括设置、删除、调用。
     */
    async ControlDevicePreset(req, cb) {
        return this.request("ControlDevicePreset", req, cb);
    }
    /**
     * 用于批量操作（启用，禁用，删除）设备
     */
    async BatchOperateDevice(req, cb) {
        return this.request("BatchOperateDevice", req, cb);
    }
    /**
     * 本接口可基于海康ISUP 5.0协议实现透传ISAPI的请求数据，调用接口前需确保设备采用ISUP协议成功注册至本平台
     */
    async CallISAPI(req, cb) {
        return this.request("CallISAPI", req, cb);
    }
    /**
     * 用于查询实时上云计划详情
     */
    async DescribeRecordPlan(req, cb) {
        return this.request("DescribeRecordPlan", req, cb);
    }
    /**
     * 用于修改实时上云计划
     */
    async UpdateRecordPlan(req, cb) {
        return this.request("UpdateRecordPlan", req, cb);
    }
    /**
     * 用于获取网关详情。
     */
    async DescribeGateway(req, cb) {
        return this.request("DescribeGateway", req, cb);
    }
    /**
     * 用于网关升级（支持对所有待更新的服务一键升级）。
     */
    async UpgradeGateway(req, cb) {
        return this.request("UpgradeGateway", req, cb);
    }
    /**
     * 用于修改组织。
     */
    async UpdateOrganization(req, cb) {
        return this.request("UpdateOrganization", req, cb);
    }
    /**
     * 用于删除实时上云计划
     */
    async DeleteRecordPlan(req, cb) {
        return this.request("DeleteRecordPlan", req, cb);
    }
    /**
     * 用于新增实时上云模板
     */
    async AddRecordTemplate(req, cb) {
        return this.request("AddRecordTemplate", req, cb);
    }
    /**
     * 用于新增实时上云计划
     */
    async AddRecordPlan(req, cb) {
        return this.request("AddRecordPlan", req, cb);
    }
    /**
     * 禁止主、子账号对视频通道的实况预览
     */
    async SetForbidPlayChannels(req, cb) {
        return this.request("SetForbidPlayChannels", req, cb);
    }
    /**
     * 用于查询组织目录下的未添加到实时上云计划中的通道数量
     */
    async ListOrganizationChannelNumbers(req, cb) {
        return this.request("ListOrganizationChannelNumbers", req, cb);
    }
    /**
     * 用于修改录像上云计划。
     */
    async UpdateRecordBackupPlan(req, cb) {
        return this.request("UpdateRecordBackupPlan", req, cb);
    }
    /**
     * 用于获取网关列表。
     */
    async ListGateways(req, cb) {
        return this.request("ListGateways", req, cb);
    }
    /**
     * 用于查询组织。
     */
    async DescribeOrganization(req, cb) {
        return this.request("DescribeOrganization", req, cb);
    }
    /**
     * 用于录像回放过程中的倍速、跳转、播放/暂停/停止等控制。
     */
    async ControlRecord(req, cb) {
        return this.request("ControlRecord", req, cb);
    }
    /**
     * 用于获取对应组织下的设备列表。
     */
    async ListDevices(req, cb) {
        return this.request("ListDevices", req, cb);
    }
    /**
     * 用于查询录像上云模板列表。
     */
    async ListRecordBackupTemplates(req, cb) {
        return this.request("ListRecordBackupTemplates", req, cb);
    }
    /**
     * 用于设备通道云台控制，包括转动、变倍、变焦、光圈等。
     */
    async ControlDevicePTZ(req, cb) {
        return this.request("ControlDevicePTZ", req, cb);
    }
    /**
     * 更新 AI 任务状态
     */
    async UpdateAITaskStatus(req, cb) {
        return this.request("UpdateAITaskStatus", req, cb);
    }
    /**
     * 用于修改设备的配置信息。
     */
    async UpdateUserDevice(req, cb) {
        return this.request("UpdateUserDevice", req, cb);
    }
    /**
     * 用于查询录像上云计划下的设备通道列表。
     */
    async ListRecordBackupPlanDevices(req, cb) {
        return this.request("ListRecordBackupPlanDevices", req, cb);
    }
    /**
     * 获取AI任务列表
     */
    async ListAITasks(req, cb) {
        return this.request("ListAITasks", req, cb);
    }
    /**
     * 用于查询实时上云模板列表
     */
    async ListRecordTemplates(req, cb) {
        return this.request("ListRecordTemplates", req, cb);
    }
    /**
     * 用于查询实时上云计划下的设备通道列表
     */
    async ListRecordPlanDevices(req, cb) {
        return this.request("ListRecordPlanDevices", req, cb);
    }
    /**
     * 删除AI任务
     */
    async DeleteAITask(req, cb) {
        return this.request("DeleteAITask", req, cb);
    }
    /**
     * 用于设置推拉流鉴权配置。
     */
    async AddStreamAuth(req, cb) {
        return this.request("AddStreamAuth", req, cb);
    }
    /**
     * 用于查询批量任务和简单任务列表
     */
    async ListTasks(req, cb) {
        return this.request("ListTasks", req, cb);
    }
    /**
     * 用于删除取回任务
     */
    async DeleteRecordRetrieveTask(req, cb) {
        return this.request("DeleteRecordRetrieveTask", req, cb);
    }
    /**
     * 用于新增录像上云计划 （当前仅适用于通过GB28181协议和网关接入的设备/视频通道）
     */
    async AddRecordBackupPlan(req, cb) {
        return this.request("AddRecordBackupPlan", req, cb);
    }
    /**
     * 用于查询推拉流鉴权配置。
     */
    async DescribeStreamAuth(req, cb) {
        return this.request("DescribeStreamAuth", req, cb);
    }
    /**
     * 用于查询设备本地录像时间轴信息，为NVR/IPC本地存储的录像。
     */
    async ControlRecordTimeline(req, cb) {
        return this.request("ControlRecordTimeline", req, cb);
    }
    /**
     * 获取AI任务详情
     */
    async DescribeAITask(req, cb) {
        return this.request("DescribeAITask", req, cb);
    }
    /**
     * 用于删除录像上云模板。
     */
    async DeleteRecordBackupPlan(req, cb) {
        return this.request("DeleteRecordBackupPlan", req, cb);
    }
    /**
     * 用于删除网关。
     */
    async DeleteGateway(req, cb) {
        return this.request("DeleteGateway", req, cb);
    }
    /**
     * 用于查询网关下挂载的设备列表。
     */
    async ListGatewayDevices(req, cb) {
        return this.request("ListGatewayDevices", req, cb);
    }
    /**
     * 用于删除域名。
     */
    async DeleteDomain(req, cb) {
        return this.request("DeleteDomain", req, cb);
    }
    /**
     * 用于获取设备本地录像 URL 地址。
     */
    async PlayRecord(req, cb) {
        return this.request("PlayRecord", req, cb);
    }
    /**
     * 用于新增录像上云模板。
> 该功能本质是拉取设备本地录像数据上云（即存在 IPC 摄像头存储卡或 NVR 硬盘中的录像），操作时需先设定录像时间段（即想要上云的设备本地录像），再设定上云时间段和上云倍速，平台将于上云时间段倍速拉取设备对应前一天的录像时间段数据。

> 设定需至少满足（上云时间段=前一天的录像时间段/上云倍速），建议上云时间段可多设定10%左右的时间，避免因网络波动导致数据拉取不完整。
     */
    async AddRecordBackupTemplate(req, cb) {
        return this.request("AddRecordBackupTemplate", req, cb);
    }
    /**
     * 用于查询组织目录下的通道列表
     */
    async ListOrganizationChannels(req, cb) {
        return this.request("ListOrganizationChannels", req, cb);
    }
}
exports.Client = Client;
