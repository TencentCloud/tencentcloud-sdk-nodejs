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
 * iotvideoindustry client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotvideoindustry.tencentcloudapi.com", "2020-12-01", clientConfig);
    }
    /**
     * 获取IPC设备下属通道
     */
    async DescribeIPCChannels(req, cb) {
        return this.request("DescribeIPCChannels", req, cb);
    }
    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
     */
    async UpdateRecordPlan(req, cb) {
        return this.request("UpdateRecordPlan", req, cb);
    }
    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     */
    async DescribeSubGroups(req, cb) {
        return this.request("DescribeSubGroups", req, cb);
    }
    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     */
    async UpdateDeviceGroup(req, cb) {
        return this.request("UpdateDeviceGroup", req, cb);
    }
    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     */
    async CreateDeviceGroup(req, cb) {
        return this.request("CreateDeviceGroup", req, cb);
    }
    /**
     * 获取回放视频流(NVR录制用)
RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     */
    async DescribeRecordStream(req, cb) {
        return this.request("DescribeRecordStream", req, cb);
    }
    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     */
    async DescribeStatisticSummary(req, cb) {
        return this.request("DescribeStatisticSummary", req, cb);
    }
    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
     */
    async GetVideoListByCon(req, cb) {
        return this.request("GetVideoListByCon", req, cb);
    }
    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     */
    async UpdateTimeTemplate(req, cb) {
        return this.request("UpdateTimeTemplate", req, cb);
    }
    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     */
    async UpdateDevicePassWord(req, cb) {
        return this.request("UpdateDevicePassWord", req, cb);
    }
    /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
     */
    async ControlRecordStream(req, cb) {
        return this.request("ControlRecordStream", req, cb);
    }
    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     */
    async GetTimeTemplateById(req, cb) {
        return this.request("GetTimeTemplateById", req, cb);
    }
    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     */
    async DescribeDevicePassWord(req, cb) {
        return this.request("DescribeDevicePassWord", req, cb);
    }
    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     */
    async DescribeGroupDevices(req, cb) {
        return this.request("DescribeGroupDevices", req, cb);
    }
    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
     */
    async GetRecordPlans(req, cb) {
        return this.request("GetRecordPlans", req, cb);
    }
    /**
     * 本接口(DeleteDevice)用于删除设备。
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 本接口(ModifyDeviceData)用于编辑设备信息。
     */
    async ModifyDeviceData(req, cb) {
        return this.request("ModifyDeviceData", req, cb);
    }
    /**
     * 根据分组路径查询分组
     */
    async DescribeGroupByPath(req, cb) {
        return this.request("DescribeGroupByPath", req, cb);
    }
    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
     */
    async GetRecordDatesByDev(req, cb) {
        return this.request("GetRecordDatesByDev", req, cb);
    }
    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     */
    async GetTimeTemplates(req, cb) {
        return this.request("GetTimeTemplates", req, cb);
    }
    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
     */
    async DescribeDeviceStreams(req, cb) {
        return this.request("DescribeDeviceStreams", req, cb);
    }
    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     */
    async DescribeStatisticDetails(req, cb) {
        return this.request("DescribeStatisticDetails", req, cb);
    }
    /**
     * 本接口(CreateDevice) 用于创建设备。
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
     */
    async GetRecordPlanById(req, cb) {
        return this.request("GetRecordPlanById", req, cb);
    }
    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.
     */
    async GetRecordPlanByDev(req, cb) {
        return this.request("GetRecordPlanByDev", req, cb);
    }
    /**
     * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
     */
    async DescribeDeviceGroup(req, cb) {
        return this.request("DescribeDeviceGroup", req, cb);
    }
    /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
    async DeleteRecordPlan(req, cb) {
        return this.request("DeleteRecordPlan", req, cb);
    }
    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     */
    async DescribeGroups(req, cb) {
        return this.request("DescribeGroups", req, cb);
    }
    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     */
    async DeleteTimeTemplate(req, cb) {
        return this.request("DeleteTimeTemplate", req, cb);
    }
    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     */
    async DescribeSIPServer(req, cb) {
        return this.request("DescribeSIPServer", req, cb);
    }
    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     */
    async DeleteDeviceGroup(req, cb) {
        return this.request("DeleteDeviceGroup", req, cb);
    }
    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
     */
    async ControlDevicePTZ(req, cb) {
        return this.request("ControlDevicePTZ", req, cb);
    }
    /**
     * 根据时间获取回放文件列表(云端录制用)
     */
    async DescribeVideoList(req, cb) {
        return this.request("DescribeVideoList", req, cb);
    }
    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
     */
    async DescribeAllDeviceList(req, cb) {
        return this.request("DescribeAllDeviceList", req, cb);
    }
    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     */
    async BindGroupDevices(req, cb) {
        return this.request("BindGroupDevices", req, cb);
    }
    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     */
    async DescribeGroupById(req, cb) {
        return this.request("DescribeGroupById", req, cb);
    }
    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
     */
    async CreateRecordPlan(req, cb) {
        return this.request("CreateRecordPlan", req, cb);
    }
    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     */
    async CreateTimeTemplate(req, cb) {
        return this.request("CreateTimeTemplate", req, cb);
    }
}
exports.Client = Client;
