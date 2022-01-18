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
请使用DescribeChannels接口
     */
    async DescribeIPCChannels(req, cb) {
        return this.request("DescribeIPCChannels", req, cb);
    }
    /**
     * 修改录像存储列表
     */
    async ModifyVideoInfo(req, cb) {
        return this.request("ModifyVideoInfo", req, cb);
    }
    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     */
    async DescribeSubGroups(req, cb) {
        return this.request("DescribeSubGroups", req, cb);
    }
    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     */
    async DescribeStatisticSummary(req, cb) {
        return this.request("DescribeStatisticSummary", req, cb);
    }
    /**
     * 创建场景
     */
    async CreateScene(req, cb) {
        return this.request("CreateScene", req, cb);
    }
    /**
     * 场景详情
     */
    async DescribeScene(req, cb) {
        return this.request("DescribeScene", req, cb);
    }
    /**
     * 获取指定设备详细信息
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 本接口(ModifyBindRecordingPlan)用于更新录制计划绑定的通道
     */
    async ModifyBindRecordingPlan(req, cb) {
        return this.request("ModifyBindRecordingPlan", req, cb);
    }
    /**
     * 本接口(DescribeVideoListByChannel)用于查询指定通道的录制文件列表
     */
    async DescribeVideoListByChannel(req, cb) {
        return this.request("DescribeVideoListByChannel", req, cb);
    }
    /**
     * 直播拉流接口
     */
    async DescribeLiveStream(req, cb) {
        return this.request("DescribeLiveStream", req, cb);
    }
    /**
     * 修改场景
     */
    async ModifyScene(req, cb) {
        return this.request("ModifyScene", req, cb);
    }
    /**
     * 本接口(DescribeRecordingPlanById)用于根据录制计划ID获取录制计划。
     */
    async DescribeRecordingPlanById(req, cb) {
        return this.request("DescribeRecordingPlanById", req, cb);
    }
    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     */
    async DescribeGroupDevices(req, cb) {
        return this.request("DescribeGroupDevices", req, cb);
    }
    /**
     * 查询设备统计当前信息
     */
    async DescribeCurrentDeviceData(req, cb) {
        return this.request("DescribeCurrentDeviceData", req, cb);
    }
    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
请使用DescribeChannelStreamURL接口
     */
    async DescribeDeviceStreams(req, cb) {
        return this.request("DescribeDeviceStreams", req, cb);
    }
    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
请使用DescribeVideoListByChannel接口
     */
    async GetVideoListByCon(req, cb) {
        return this.request("GetVideoListByCon", req, cb);
    }
    /**
     * 本接口(DescribeRecordingPlans)用于获取用户的全部录制计划。
     */
    async DescribeRecordingPlans(req, cb) {
        return this.request("DescribeRecordingPlans", req, cb);
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
请使用DeleteRecordingPlan接口
     */
    async DeleteRecordPlan(req, cb) {
        return this.request("DeleteRecordPlan", req, cb);
    }
    /**
     * 创建消息转发配置
     */
    async CreateMessageForward(req, cb) {
        return this.request("CreateMessageForward", req, cb);
    }
    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     */
    async DeleteTimeTemplate(req, cb) {
        return this.request("DeleteTimeTemplate", req, cb);
    }
    /**
     * 本接口（DescribeChannels）用于获取设备下属通道列表
     */
    async DescribeChannels(req, cb) {
        return this.request("DescribeChannels", req, cb);
    }
    /**
     * 编辑直播接口
     */
    async ModifyLiveChannel(req, cb) {
        return this.request("ModifyLiveChannel", req, cb);
    }
    /**
     * 重置设备告警
     */
    async ResetWarning(req, cb) {
        return this.request("ResetWarning", req, cb);
    }
    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
请使用ControlChannelPTZ接口
     */
    async ControlDevicePTZ(req, cb) {
        return this.request("ControlDevicePTZ", req, cb);
    }
    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
请使用DescribeRecordDatesByChannel接口
     */
    async GetRecordDatesByDev(req, cb) {
        return this.request("GetRecordDatesByDev", req, cb);
    }
    /**
     * 看守位控制
     */
    async ControlHomePosition(req, cb) {
        return this.request("ControlHomePosition", req, cb);
    }
    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     */
    async DescribeStatisticDetails(req, cb) {
        return this.request("DescribeStatisticDetails", req, cb);
    }
    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     */
    async DescribeGroupById(req, cb) {
        return this.request("DescribeGroupById", req, cb);
    }
    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     */
    async CreateTimeTemplate(req, cb) {
        return this.request("CreateTimeTemplate", req, cb);
    }
    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     */
    async CreateDeviceGroup(req, cb) {
        return this.request("CreateDeviceGroup", req, cb);
    }
    /**
     * 本接口（ControlChannelLocalRecord）用于对通道本地回放流进行控制，包括暂停、播放、拉动、结束等

     */
    async ControlChannelLocalRecord(req, cb) {
        return this.request("ControlChannelLocalRecord", req, cb);
    }
    /**
     * 本接口（DescribeChannelLocalRecordURL）用于将NVR等设备对应通道本地回放文件，通过GB28181信令推送至云端，并生成对应的实时视频流URL，流地址URL是动态生成，如需重新播放请重新调用此接口获取最新地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    async DescribeChannelLocalRecordURL(req, cb) {
        return this.request("DescribeChannelLocalRecordURL", req, cb);
    }
    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     */
    async UpdateDevicePassWord(req, cb) {
        return this.request("UpdateDevicePassWord", req, cb);
    }
    /**
     * 编辑设备订阅状态
     */
    async ModifySubscriptionStatus(req, cb) {
        return this.request("ModifySubscriptionStatus", req, cb);
    }
    /**
     * 告警等级列表
     */
    async DescribeWarnMod(req, cb) {
        return this.request("DescribeWarnMod", req, cb);
    }
    /**
     * 直播录制计划绑定解绑直播频道
     */
    async ModifyBindPlanLiveChannel(req, cb) {
        return this.request("ModifyBindPlanLiveChannel", req, cb);
    }
    /**
     * 获取设备事件
     */
    async DescribeDeviceEvent(req, cb) {
        return this.request("DescribeDeviceEvent", req, cb);
    }
    /**
     * 编辑直播录制计划
     */
    async ModifyLiveRecordPlan(req, cb) {
        return this.request("ModifyLiveRecordPlan", req, cb);
    }
    /**
     * 本接口用于删除设备下的通道
注意： 在线状态的设备不允许删除
     */
    async DeleteChannel(req, cb) {
        return this.request("DeleteChannel", req, cb);
    }
    /**
     * 根据直播录制计划获取频道列表
     */
    async DescribeChannelsByLiveRecordPlan(req, cb) {
        return this.request("DescribeChannelsByLiveRecordPlan", req, cb);
    }
    /**
     * 场景绑定/解绑通道接口
     */
    async ModifyBindSceneDevice(req, cb) {
        return this.request("ModifyBindSceneDevice", req, cb);
    }
    /**
     * 直播录像存储日期列表
     */
    async DescribeRecordDatesByLive(req, cb) {
        return this.request("DescribeRecordDatesByLive", req, cb);
    }
    /**
     * 本接口(DescribeChannelLiveStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    async DescribeChannelLiveStreamURL(req, cb) {
        return this.request("DescribeChannelLiveStreamURL", req, cb);
    }
    /**
     * 查询主设备订阅状态
     */
    async DescribeSubscriptionStatus(req, cb) {
        return this.request("DescribeSubscriptionStatus", req, cb);
    }
    /**
     * 本接口(CreateDevice) 用于创建设备。
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 设备告警-删除告警
     */
    async DeleteWarning(req, cb) {
        return this.request("DeleteWarning", req, cb);
    }
    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     */
    async DescribeGroups(req, cb) {
        return this.request("DescribeGroups", req, cb);
    }
    /**
     * 获取直播录制计划列表
     */
    async DescribeLiveRecordPlanIds(req, cb) {
        return this.request("DescribeLiveRecordPlanIds", req, cb);
    }
    /**
     * 预置位控制
     */
    async ControlPreset(req, cb) {
        return this.request("ControlPreset", req, cb);
    }
    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
请使用CreateRecordingPlan代替
     */
    async CreateRecordPlan(req, cb) {
        return this.request("CreateRecordPlan", req, cb);
    }
    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     */
    async UpdateDeviceGroup(req, cb) {
        return this.request("UpdateDeviceGroup", req, cb);
    }
    /**
     * 删除录像存储列表
     */
    async DeleteVideoList(req, cb) {
        return this.request("DeleteVideoList", req, cb);
    }
    /**
     * 获取场景绑定设备列表
     */
    async DescribeBindSceneDevices(req, cb) {
        return this.request("DescribeBindSceneDevices", req, cb);
    }
    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     */
    async UpdateTimeTemplate(req, cb) {
        return this.request("UpdateTimeTemplate", req, cb);
    }
    /**
     * 本接口(CreateRecordingPlan) 用于创建录制计划，使通道与时间模板绑定，以便及时启动录制
     */
    async CreateRecordingPlan(req, cb) {
        return this.request("CreateRecordingPlan", req, cb);
    }
    /**
     * 查询设备统计monitor信息
     */
    async DescribeDeviceMonitorData(req, cb) {
        return this.request("DescribeDeviceMonitorData", req, cb);
    }
    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     */
    async GetTimeTemplateById(req, cb) {
        return this.request("GetTimeTemplateById", req, cb);
    }
    /**
     * 查看消息转发配置列表
     */
    async DescribeMessageForwards(req, cb) {
        return this.request("DescribeMessageForwards", req, cb);
    }
    /**
     * 获取预置位列表
     */
    async DescribePresetList(req, cb) {
        return this.request("DescribePresetList", req, cb);
    }
    /**
     * 修改消息转发配置
     */
    async ModifyMessageForward(req, cb) {
        return this.request("ModifyMessageForward", req, cb);
    }
    /**
     * 本接口(DescribeDevicesList) 用于获取设备列表，支持模糊搜索
     */
    async DescribeDeviceList(req, cb) {
        return this.request("DescribeDeviceList", req, cb);
    }
    /**
     * 创建直播录制计划
     */
    async CreateLiveRecordPlan(req, cb) {
        return this.request("CreateLiveRecordPlan", req, cb);
    }
    /**
     * 查看消息转发配置详情
     */
    async DescribeMessageForward(req, cb) {
        return this.request("DescribeMessageForward", req, cb);
    }
    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     */
    async GetTimeTemplates(req, cb) {
        return this.request("GetTimeTemplates", req, cb);
    }
    /**
     * 获取异常事件统计
     */
    async DescribeAbnormalEvents(req, cb) {
        return this.request("DescribeAbnormalEvents", req, cb);
    }
    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
请使用DescribeRecordingPlanById接口
     */
    async GetRecordPlanById(req, cb) {
        return this.request("GetRecordPlanById", req, cb);
    }
    /**
     * 获取回放视频流地址
请使用DescribeChannelLocalRecordURL接口

RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     */
    async DescribeRecordStream(req, cb) {
        return this.request("DescribeRecordStream", req, cb);
    }
    /**
     * 删除直播录制计划
     */
    async DeleteLiveRecordPlan(req, cb) {
        return this.request("DeleteLiveRecordPlan", req, cb);
    }
    /**
     * 运营中心-设备录像存储统计
     */
    async DescribeMonitorDataByDate(req, cb) {
        return this.request("DescribeMonitorDataByDate", req, cb);
    }
    /**
     * 获取告警列表
     */
    async DescribeWarnings(req, cb) {
        return this.request("DescribeWarnings", req, cb);
    }
    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     */
    async DeleteDeviceGroup(req, cb) {
        return this.request("DeleteDeviceGroup", req, cb);
    }
    /**
     * 本接口(ModifyRecordingPlan)用于更新录制计划。

     */
    async ModifyRecordingPlan(req, cb) {
        return this.request("ModifyRecordingPlan", req, cb);
    }
    /**
     * 本接口(DescribeChannelStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     */
    async DescribeChannelStreamURL(req, cb) {
        return this.request("DescribeChannelStreamURL", req, cb);
    }
    /**
     * 直播详情接口
     */
    async DescribeLiveChannel(req, cb) {
        return this.request("DescribeLiveChannel", req, cb);
    }
    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
请使用DescribeDevicesList接口
     */
    async DescribeAllDeviceList(req, cb) {
        return this.request("DescribeAllDeviceList", req, cb);
    }
    /**
     * 删除场景
     */
    async DeleteScene(req, cb) {
        return this.request("DeleteScene", req, cb);
    }
    /**
     * 创建直播频道
     */
    async CreateLiveChannel(req, cb) {
        return this.request("CreateLiveChannel", req, cb);
    }
    /**
     * 获取场景绑定通道列表
     */
    async DescribeBindSceneChannels(req, cb) {
        return this.request("DescribeBindSceneChannels", req, cb);
    }
    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
请使用 ModifyRecordingPlan接口和ModifyBindRecordingPlan接口
     */
    async UpdateRecordPlan(req, cb) {
        return this.request("UpdateRecordPlan", req, cb);
    }
    /**
     * 本接口(DeleteRecordingPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     */
    async DeleteRecordingPlan(req, cb) {
        return this.request("DeleteRecordingPlan", req, cb);
    }
    /**
     * 本接口(ControlChannelPTZ) 用于对支持GB28181 PTZ信令的设备进行指定通道的远程控制。
     */
    async ControlChannelPTZ(req, cb) {
        return this.request("ControlChannelPTZ", req, cb);
    }
    /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
请使用ControlChannelLocalRecord接口
     */
    async ControlRecordStream(req, cb) {
        return this.request("ControlRecordStream", req, cb);
    }
    /**
     * 直播录像回放列表
     */
    async DescribeLiveVideoList(req, cb) {
        return this.request("DescribeLiveVideoList", req, cb);
    }
    /**
     * 场景绑定解绑通道接口
     */
    async ModifyBindSceneChannels(req, cb) {
        return this.request("ModifyBindSceneChannels", req, cb);
    }
    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     */
    async DescribeDevicePassWord(req, cb) {
        return this.request("DescribeDevicePassWord", req, cb);
    }
    /**
     * 直播列表接口
     */
    async DescribeLiveChannelList(req, cb) {
        return this.request("DescribeLiveChannelList", req, cb);
    }
    /**
     * 删除消息转发配置
     */
    async DeleteMessageForward(req, cb) {
        return this.request("DeleteMessageForward", req, cb);
    }
    /**
     * 编辑预置位信息
     */
    async ModifyPreset(req, cb) {
        return this.request("ModifyPreset", req, cb);
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
     * 删除直播接口
     */
    async DeleteLiveChannel(req, cb) {
        return this.request("DeleteLiveChannel", req, cb);
    }
    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
请使用DescribeRecordingPlans接口
     */
    async GetRecordPlans(req, cb) {
        return this.request("GetRecordPlans", req, cb);
    }
    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.

     */
    async GetRecordPlanByDev(req, cb) {
        return this.request("GetRecordPlanByDev", req, cb);
    }
    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     */
    async DescribeSIPServer(req, cb) {
        return this.request("DescribeSIPServer", req, cb);
    }
    /**
     * 直播录像删除
     */
    async DeleteLiveVideoList(req, cb) {
        return this.request("DeleteLiveVideoList", req, cb);
    }
    /**
     * 根据时间获取云端录制文件列表
     */
    async DescribeVideoList(req, cb) {
        return this.request("DescribeVideoList", req, cb);
    }
    /**
     * 直播录像编辑
     */
    async ModifyLiveVideo(req, cb) {
        return this.request("ModifyLiveVideo", req, cb);
    }
    /**
     * 获取X-P2P的统计数据
     */
    async DescribeXP2PData(req, cb) {
        return this.request("DescribeXP2PData", req, cb);
    }
    /**
     * 获取场景列表
     */
    async DescribeScenes(req, cb) {
        return this.request("DescribeScenes", req, cb);
    }
    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     */
    async BindGroupDevices(req, cb) {
        return this.request("BindGroupDevices", req, cb);
    }
    /**
     * 获取直播录制计划详情
     */
    async DescribeLiveRecordPlanById(req, cb) {
        return this.request("DescribeLiveRecordPlanById", req, cb);
    }
    /**
     * 本接口(DescribeRecordDatesByChannel)用于查询设备含有录像文件的日期列表。
     */
    async DescribeRecordDatesByChannel(req, cb) {
        return this.request("DescribeRecordDatesByChannel", req, cb);
    }
}
exports.Client = Client;
