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
const DescribePresetListRequest = models.DescribePresetListRequest;
const ControlRecordStreamRequest = models.ControlRecordStreamRequest;
const CreateRecordingPlanResponse = models.CreateRecordingPlanResponse;
const ModifySubscriptionStatusRequest = models.ModifySubscriptionStatusRequest;
const CreateSceneResponse = models.CreateSceneResponse;
const DeleteTimeTemplateResponse = models.DeleteTimeTemplateResponse;
const DescribeMonitorDataByDateRequest = models.DescribeMonitorDataByDateRequest;
const ModifyLiveChannelResponse = models.ModifyLiveChannelResponse;
const ServerConfiguration = models.ServerConfiguration;
const DescribeLiveVideoListRequest = models.DescribeLiveVideoListRequest;
const GetRecordPlanByDevRequest = models.GetRecordPlanByDevRequest;
const GetRecordDatesByDevResponse = models.GetRecordDatesByDevResponse;
const ControlChannelPTZResponse = models.ControlChannelPTZResponse;
const DescribeChannelsRequest = models.DescribeChannelsRequest;
const DescribeLiveChannelRequest = models.DescribeLiveChannelRequest;
const DescribeRecordDatesByChannelResponse = models.DescribeRecordDatesByChannelResponse;
const DescribeRecordDatesByChannelRequest = models.DescribeRecordDatesByChannelRequest;
const DescribeVideoListByChannelRequest = models.DescribeVideoListByChannelRequest;
const ModifyPresetResponse = models.ModifyPresetResponse;
const DescribeGroupByPathResponse = models.DescribeGroupByPathResponse;
const DescribeAbnormalEventsRequest = models.DescribeAbnormalEventsRequest;
const ModifyPresetRequest = models.ModifyPresetRequest;
const DescribeSubscriptionStatusResponse = models.DescribeSubscriptionStatusResponse;
const DescribeScenesResponse = models.DescribeScenesResponse;
const DeleteRecordingPlanRequest = models.DeleteRecordingPlanRequest;
const DescribeBindSceneChannelsResponse = models.DescribeBindSceneChannelsResponse;
const DescribeSIPServerRequest = models.DescribeSIPServerRequest;
const DescribeVideoListByChannelResponse = models.DescribeVideoListByChannelResponse;
const CreateLiveRecordPlanResponse = models.CreateLiveRecordPlanResponse;
const GetRecordPlansRequest = models.GetRecordPlansRequest;
const DeviceItem = models.DeviceItem;
const DeleteDeviceGroupResponse = models.DeleteDeviceGroupResponse;
const DescribeWarningsResponse = models.DescribeWarningsResponse;
const DeleteRecordPlanResponse = models.DeleteRecordPlanResponse;
const DeleteMessageForwardResponse = models.DeleteMessageForwardResponse;
const GetTimeTemplatesRequest = models.GetTimeTemplatesRequest;
const UpdateDeviceGroupResponse = models.UpdateDeviceGroupResponse;
const ModifyRecordingPlanRequest = models.ModifyRecordingPlanRequest;
const DescribeDeviceEventRequest = models.DescribeDeviceEventRequest;
const GetVideoListByConRequest = models.GetVideoListByConRequest;
const ResetWarningRequest = models.ResetWarningRequest;
const DescribeDeviceMonitorDataResponse = models.DescribeDeviceMonitorDataResponse;
const DevGroupInfo = models.DevGroupInfo;
const DescribeDeviceListRequest = models.DescribeDeviceListRequest;
const DescribeRecordingPlansResponse = models.DescribeRecordingPlansResponse;
const ControlHomePositionResponse = models.ControlHomePositionResponse;
const DescribeLiveRecordPlanByIdRequest = models.DescribeLiveRecordPlanByIdRequest;
const LiveRecordPlanItem = models.LiveRecordPlanItem;
const DescribeVideoListResponse = models.DescribeVideoListResponse;
const RecordPlanDetail = models.RecordPlanDetail;
const RecordTaskItem = models.RecordTaskItem;
const ChannelItem = models.ChannelItem;
const DescribeIPCChannelsRequest = models.DescribeIPCChannelsRequest;
const DescribeSubGroupsRequest = models.DescribeSubGroupsRequest;
const UpdateTimeTemplateRequest = models.UpdateTimeTemplateRequest;
const DeleteRecordPlanRequest = models.DeleteRecordPlanRequest;
const CreateDeviceGroupResponse = models.CreateDeviceGroupResponse;
const GetVideoListByConResponse = models.GetVideoListByConResponse;
const DescribeCurrentDeviceDataRequest = models.DescribeCurrentDeviceDataRequest;
const LiveRecordItem = models.LiveRecordItem;
const DescribeIPCChannelsResponse = models.DescribeIPCChannelsResponse;
const UpdateRecordPlanRequest = models.UpdateRecordPlanRequest;
const DescribeRecordingPlanByIdRequest = models.DescribeRecordingPlanByIdRequest;
const ModifyDeviceDataResponse = models.ModifyDeviceDataResponse;
const DescribeStatisticDetailsResponse = models.DescribeStatisticDetailsResponse;
const DescribeWarnModResponse = models.DescribeWarnModResponse;
const GroupDeviceItem = models.GroupDeviceItem;
const DescribeSubGroupsResponse = models.DescribeSubGroupsResponse;
const DescribeChannelStreamURLResponse = models.DescribeChannelStreamURLResponse;
const DescribeStatisticDetailsRequest = models.DescribeStatisticDetailsRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const UpdateDevicePassWordRequest = models.UpdateDevicePassWordRequest;
const DescribeMessageForwardRequest = models.DescribeMessageForwardRequest;
const CreateTimeTemplateRequest = models.CreateTimeTemplateRequest;
const ModifyBindSceneChannelsResponse = models.ModifyBindSceneChannelsResponse;
const CreateMessageForwardRequest = models.CreateMessageForwardRequest;
const GroupItem = models.GroupItem;
const DeleteWarningRequest = models.DeleteWarningRequest;
const ModifyBindPlanLiveChannelRequest = models.ModifyBindPlanLiveChannelRequest;
const DescribeLiveStreamRequest = models.DescribeLiveStreamRequest;
const ModifyMessageForwardRequest = models.ModifyMessageForwardRequest;
const ModifyLiveRecordPlanResponse = models.ModifyLiveRecordPlanResponse;
const DescribeXP2PDataResponse = models.DescribeXP2PDataResponse;
const DescribeDeviceEventResponse = models.DescribeDeviceEventResponse;
const RecordStatisticValue = models.RecordStatisticValue;
const ModifySceneRequest = models.ModifySceneRequest;
const DescribeAllDeviceListRequest = models.DescribeAllDeviceListRequest;
const DescribeRecordDatesByLiveRequest = models.DescribeRecordDatesByLiveRequest;
const DescribeDevicePassWordRequest = models.DescribeDevicePassWordRequest;
const GetRecordPlanByIdRequest = models.GetRecordPlanByIdRequest;
const ModifyRecordingPlanResponse = models.ModifyRecordingPlanResponse;
const DescribeLiveChannelListRequest = models.DescribeLiveChannelListRequest;
const GetRecordPlanByDevResponse = models.GetRecordPlanByDevResponse;
const DeleteVideoListRequest = models.DeleteVideoListRequest;
const GroupInfo = models.GroupInfo;
const ControlPresetRequest = models.ControlPresetRequest;
const CreateRecordPlanRequest = models.CreateRecordPlanRequest;
const DescribeRecordStreamData = models.DescribeRecordStreamData;
const DeleteRecordingPlanResponse = models.DeleteRecordingPlanResponse;
const CreateDeviceGroupRequest = models.CreateDeviceGroupRequest;
const SceneItem = models.SceneItem;
const ModifyBindSceneChannelsRequest = models.ModifyBindSceneChannelsRequest;
const DescribeLiveRecordPlanIdsResponse = models.DescribeLiveRecordPlanIdsResponse;
const ModifyBindSceneDeviceRequest = models.ModifyBindSceneDeviceRequest;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateDeviceRequest = models.CreateDeviceRequest;
const WarningsData = models.WarningsData;
const DescribeStatisticSummaryResponse = models.DescribeStatisticSummaryResponse;
const ModifyBindPlanLiveChannelResponse = models.ModifyBindPlanLiveChannelResponse;
const DescribeRecordStreamRequest = models.DescribeRecordStreamRequest;
const PresetItem = models.PresetItem;
const BindGroupDevicesRequest = models.BindGroupDevicesRequest;
const ControlHomePositionRequest = models.ControlHomePositionRequest;
const ModifyLiveRecordPlanRequest = models.ModifyLiveRecordPlanRequest;
const DescribeSceneResponse = models.DescribeSceneResponse;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const GetTimeTemplateByIdResponse = models.GetTimeTemplateByIdResponse;
const DescribeLiveChannelResponse = models.DescribeLiveChannelResponse;
const DescribeChannelsResponse = models.DescribeChannelsResponse;
const DeviceMonitorValue = models.DeviceMonitorValue;
const DescribeMessageForwardsRequest = models.DescribeMessageForwardsRequest;
const ControlDevicePTZResponse = models.ControlDevicePTZResponse;
const DescribeRecordingPlansRequest = models.DescribeRecordingPlansRequest;
const TimeTemplateSpec = models.TimeTemplateSpec;
const ControlDevicePTZRequest = models.ControlDevicePTZRequest;
const UpdateDeviceGroupRequest = models.UpdateDeviceGroupRequest;
const DescribeChannelsByLiveRecordPlanResponse = models.DescribeChannelsByLiveRecordPlanResponse;
const DescribeGroupDevicesRequest = models.DescribeGroupDevicesRequest;
const DescribeGroupByIdRequest = models.DescribeGroupByIdRequest;
const Events = models.Events;
const UpdateDevicePassWordResponse = models.UpdateDevicePassWordResponse;
const DescribeLiveRecordPlanByIdResponse = models.DescribeLiveRecordPlanByIdResponse;
const DeleteChannelRequest = models.DeleteChannelRequest;
const DescribeXP2PDataRequest = models.DescribeXP2PDataRequest;
const UpdateTimeTemplateResponse = models.UpdateTimeTemplateResponse;
const DescribeSubscriptionStatusRequest = models.DescribeSubscriptionStatusRequest;
const DescribeDeviceStreamsRequest = models.DescribeDeviceStreamsRequest;
const DescribeRecordStreamResponse = models.DescribeRecordStreamResponse;
const CreateRecordPlanResponse = models.CreateRecordPlanResponse;
const DescribeWarningsRequest = models.DescribeWarningsRequest;
const CreateSceneRequest = models.CreateSceneRequest;
const AllDeviceInfo = models.AllDeviceInfo;
const DescribeAbnormalEventsResponse = models.DescribeAbnormalEventsResponse;
const DescribeDeviceStreamsResponse = models.DescribeDeviceStreamsResponse;
const DescribeLiveVideoListResponse = models.DescribeLiveVideoListResponse;
const DeleteDeviceGroupRequest = models.DeleteDeviceGroupRequest;
const DescribeSceneRequest = models.DescribeSceneRequest;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const ControlPresetResponse = models.ControlPresetResponse;
const DescribeDeviceGroupResponse = models.DescribeDeviceGroupResponse;
const DeleteChannelResponse = models.DeleteChannelResponse;
const ModifySubscriptionStatusResponse = models.ModifySubscriptionStatusResponse;
const MessageForward = models.MessageForward;
const ResetWarningResponse = models.ResetWarningResponse;
const ModifyDeviceDataRequest = models.ModifyDeviceDataRequest;
const DeleteSceneResponse = models.DeleteSceneResponse;
const GetRecordDatesByDevRequest = models.GetRecordDatesByDevRequest;
const DescribeLiveChannelListResponse = models.DescribeLiveChannelListResponse;
const GetTimeTemplatesResponse = models.GetTimeTemplatesResponse;
const CreateLiveChannelResponse = models.CreateLiveChannelResponse;
const DeleteVideoListResponse = models.DeleteVideoListResponse;
const ModifyLiveVideoResponse = models.ModifyLiveVideoResponse;
const DescribeChannelStreamURLRequest = models.DescribeChannelStreamURLRequest;
const DescribeAllDeviceListResponse = models.DescribeAllDeviceListResponse;
const DescribeStatisticSummaryRequest = models.DescribeStatisticSummaryRequest;
const DescribeGroupsResponse = models.DescribeGroupsResponse;
const ChannelDetail = models.ChannelDetail;
const DescribeChannelLiveStreamURLResponse = models.DescribeChannelLiveStreamURLResponse;
const DescribeDeviceStreamsData = models.DescribeDeviceStreamsData;
const DeleteLiveRecordPlanRequest = models.DeleteLiveRecordPlanRequest;
const ModifyBindRecordingPlanRequest = models.ModifyBindRecordingPlanRequest;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeleteLiveVideoListResponse = models.DeleteLiveVideoListResponse;
const DescribeDeviceMonitorDataRequest = models.DescribeDeviceMonitorDataRequest;
const CreateTimeTemplateResponse = models.CreateTimeTemplateResponse;
const DeleteLiveChannelRequest = models.DeleteLiveChannelRequest;
const StatisticItem = models.StatisticItem;
const DescribeChannelLiveStreamURLRequest = models.DescribeChannelLiveStreamURLRequest;
const DescribeSIPServerResponse = models.DescribeSIPServerResponse;
const DescribeGroupByPathRequest = models.DescribeGroupByPathRequest;
const DescribeRecordDatesByLiveResponse = models.DescribeRecordDatesByLiveResponse;
const UpdateRecordPlanResponse = models.UpdateRecordPlanResponse;
const ModifyBindSceneDeviceResponse = models.ModifyBindSceneDeviceResponse;
const AbnormalEventsInfo = models.AbnormalEventsInfo;
const TimeTemplateItem = models.TimeTemplateItem;
const AbnormalEvents = models.AbnormalEvents;
const DescribeDeviceGroupRequest = models.DescribeDeviceGroupRequest;
const LiveChannelInfo = models.LiveChannelInfo;
const LiveChannelItem = models.LiveChannelItem;
const DescribeGroupsRequest = models.DescribeGroupsRequest;
const ControlChannelPTZRequest = models.ControlChannelPTZRequest;
const GetRecordPlansResponse = models.GetRecordPlansResponse;
const DescribeChannelsByLiveRecordPlanRequest = models.DescribeChannelsByLiveRecordPlanRequest;
const ControlChannelLocalRecordRequest = models.ControlChannelLocalRecordRequest;
const ControlChannelLocalRecordResponse = models.ControlChannelLocalRecordResponse;
const GetTimeTemplateByIdRequest = models.GetTimeTemplateByIdRequest;
const RecordPlanItem = models.RecordPlanItem;
const DescribeMessageForwardsResponse = models.DescribeMessageForwardsResponse;
const ModifyVideoInfoRequest = models.ModifyVideoInfoRequest;
const DescribeCurrentDeviceDataResponse = models.DescribeCurrentDeviceDataResponse;
const GetRecordPlanByIdResponse = models.GetRecordPlanByIdResponse;
const DeleteTimeTemplateRequest = models.DeleteTimeTemplateRequest;
const DeleteWarningResponse = models.DeleteWarningResponse;
const ModifyLiveChannelRequest = models.ModifyLiveChannelRequest;
const DescribeMessageForwardResponse = models.DescribeMessageForwardResponse;
const DescribeRecordingPlanByIdResponse = models.DescribeRecordingPlanByIdResponse;
const DescribeWarnModRequest = models.DescribeWarnModRequest;
const ModifyBindRecordingPlanResponse = models.ModifyBindRecordingPlanResponse;
const DescribeLiveRecordPlanIdsRequest = models.DescribeLiveRecordPlanIdsRequest;
const DeleteLiveVideoListRequest = models.DeleteLiveVideoListRequest;
const ModifyVideoInfoResponse = models.ModifyVideoInfoResponse;
const ModifyMessageForwardResponse = models.ModifyMessageForwardResponse;
const DescribeDeviceListResponse = models.DescribeDeviceListResponse;
const DescribeScenesRequest = models.DescribeScenesRequest;
const DeleteLiveRecordPlanResponse = models.DeleteLiveRecordPlanResponse;
const DescribeBindSceneChannelsRequest = models.DescribeBindSceneChannelsRequest;
const DescribePresetListResponse = models.DescribePresetListResponse;
const DescribeGroupByIdResponse = models.DescribeGroupByIdResponse;
const ControlRecordStreamResponse = models.ControlRecordStreamResponse;
const DeleteMessageForwardRequest = models.DeleteMessageForwardRequest;
const DeleteLiveChannelResponse = models.DeleteLiveChannelResponse;
const StreamAddress = models.StreamAddress;
const BindGroupDevicesResponse = models.BindGroupDevicesResponse;
const DescribeChannelLocalRecordURLResponse = models.DescribeChannelLocalRecordURLResponse;
const RecordStatistic = models.RecordStatistic;
const DescribeVideoListRequest = models.DescribeVideoListRequest;
const CreateLiveRecordPlanRequest = models.CreateLiveRecordPlanRequest;
const DescribeDevicePassWordResponse = models.DescribeDevicePassWordResponse;
const ModifySceneResponse = models.ModifySceneResponse;
const DescribeBindSceneDevicesRequest = models.DescribeBindSceneDevicesRequest;
const DescribeBindSceneDevicesResponse = models.DescribeBindSceneDevicesResponse;
const DescribeMonitorDataByDateResponse = models.DescribeMonitorDataByDateResponse;
const ModifyLiveVideoRequest = models.ModifyLiveVideoRequest;
const DescribeChannelLocalRecordURLRequest = models.DescribeChannelLocalRecordURLRequest;
const CreateMessageForwardResponse = models.CreateMessageForwardResponse;
const CreateLiveChannelRequest = models.CreateLiveChannelRequest;
const DescribeGroupDevicesResponse = models.DescribeGroupDevicesResponse;
const DeleteSceneRequest = models.DeleteSceneRequest;
const CreateRecordingPlanRequest = models.CreateRecordingPlanRequest;
const DescribeLiveStreamResponse = models.DescribeLiveStreamResponse;


/**
 * iotvideoindustry client
 * @class
 */
class IotvideoindustryClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotvideoindustry.tencentcloudapi.com", "2020-12-01", credential, region, profile);
    }
    
    /**
     * 获取IPC设备下属通道
请使用DescribeChannels接口
     * @param {DescribeIPCChannelsRequest} req
     * @param {function(string, DescribeIPCChannelsResponse):void} cb
     * @public
     */
    DescribeIPCChannels(req, cb) {
        let resp = new DescribeIPCChannelsResponse();
        this.request("DescribeIPCChannels", req, resp, cb);
    }

    /**
     * 修改录像存储列表
     * @param {ModifyVideoInfoRequest} req
     * @param {function(string, ModifyVideoInfoResponse):void} cb
     * @public
     */
    ModifyVideoInfo(req, cb) {
        let resp = new ModifyVideoInfoResponse();
        this.request("ModifyVideoInfo", req, resp, cb);
    }

    /**
     * 本接口(DescribeSubGroups)用于查询分组下的子分组列表。
     * @param {DescribeSubGroupsRequest} req
     * @param {function(string, DescribeSubGroupsResponse):void} cb
     * @public
     */
    DescribeSubGroups(req, cb) {
        let resp = new DescribeSubGroupsResponse();
        this.request("DescribeSubGroups", req, resp, cb);
    }

    /**
     * 本接口(DescribeStatisticSummary)用于查询用户昨日的概览数据。
     * @param {DescribeStatisticSummaryRequest} req
     * @param {function(string, DescribeStatisticSummaryResponse):void} cb
     * @public
     */
    DescribeStatisticSummary(req, cb) {
        let resp = new DescribeStatisticSummaryResponse();
        this.request("DescribeStatisticSummary", req, resp, cb);
    }

    /**
     * 创建场景
     * @param {CreateSceneRequest} req
     * @param {function(string, CreateSceneResponse):void} cb
     * @public
     */
    CreateScene(req, cb) {
        let resp = new CreateSceneResponse();
        this.request("CreateScene", req, resp, cb);
    }

    /**
     * 场景详情
     * @param {DescribeSceneRequest} req
     * @param {function(string, DescribeSceneResponse):void} cb
     * @public
     */
    DescribeScene(req, cb) {
        let resp = new DescribeSceneResponse();
        this.request("DescribeScene", req, resp, cb);
    }

    /**
     * 获取指定设备详细信息
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        let resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }

    /**
     * 本接口(ModifyBindRecordingPlan)用于更新录制计划绑定的通道
     * @param {ModifyBindRecordingPlanRequest} req
     * @param {function(string, ModifyBindRecordingPlanResponse):void} cb
     * @public
     */
    ModifyBindRecordingPlan(req, cb) {
        let resp = new ModifyBindRecordingPlanResponse();
        this.request("ModifyBindRecordingPlan", req, resp, cb);
    }

    /**
     * 本接口(DescribeVideoListByChannel)用于查询指定通道的录制文件列表
     * @param {DescribeVideoListByChannelRequest} req
     * @param {function(string, DescribeVideoListByChannelResponse):void} cb
     * @public
     */
    DescribeVideoListByChannel(req, cb) {
        let resp = new DescribeVideoListByChannelResponse();
        this.request("DescribeVideoListByChannel", req, resp, cb);
    }

    /**
     * 直播拉流接口
     * @param {DescribeLiveStreamRequest} req
     * @param {function(string, DescribeLiveStreamResponse):void} cb
     * @public
     */
    DescribeLiveStream(req, cb) {
        let resp = new DescribeLiveStreamResponse();
        this.request("DescribeLiveStream", req, resp, cb);
    }

    /**
     * 修改场景
     * @param {ModifySceneRequest} req
     * @param {function(string, ModifySceneResponse):void} cb
     * @public
     */
    ModifyScene(req, cb) {
        let resp = new ModifySceneResponse();
        this.request("ModifyScene", req, resp, cb);
    }

    /**
     * 本接口(DescribeRecordingPlanById)用于根据录制计划ID获取录制计划。
     * @param {DescribeRecordingPlanByIdRequest} req
     * @param {function(string, DescribeRecordingPlanByIdResponse):void} cb
     * @public
     */
    DescribeRecordingPlanById(req, cb) {
        let resp = new DescribeRecordingPlanByIdResponse();
        this.request("DescribeRecordingPlanById", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroupDevices)用于查询分组下的设备列表。
     * @param {DescribeGroupDevicesRequest} req
     * @param {function(string, DescribeGroupDevicesResponse):void} cb
     * @public
     */
    DescribeGroupDevices(req, cb) {
        let resp = new DescribeGroupDevicesResponse();
        this.request("DescribeGroupDevices", req, resp, cb);
    }

    /**
     * 查询设备统计当前信息
     * @param {DescribeCurrentDeviceDataRequest} req
     * @param {function(string, DescribeCurrentDeviceDataResponse):void} cb
     * @public
     */
    DescribeCurrentDeviceData(req, cb) {
        let resp = new DescribeCurrentDeviceDataResponse();
        this.request("DescribeCurrentDeviceData", req, resp, cb);
    }

    /**
     * 本接口(DescribeDeviceStreams)用于获取设备实时流地址。
请使用DescribeChannelStreamURL接口
     * @param {DescribeDeviceStreamsRequest} req
     * @param {function(string, DescribeDeviceStreamsResponse):void} cb
     * @public
     */
    DescribeDeviceStreams(req, cb) {
        let resp = new DescribeDeviceStreamsResponse();
        this.request("DescribeDeviceStreams", req, resp, cb);
    }

    /**
     * 本接口(GetVideoListByCon)用于查询设备的录制文件列表
请使用DescribeVideoListByChannel接口
     * @param {GetVideoListByConRequest} req
     * @param {function(string, GetVideoListByConResponse):void} cb
     * @public
     */
    GetVideoListByCon(req, cb) {
        let resp = new GetVideoListByConResponse();
        this.request("GetVideoListByCon", req, resp, cb);
    }

    /**
     * 本接口(DescribeRecordingPlans)用于获取用户的全部录制计划。
     * @param {DescribeRecordingPlansRequest} req
     * @param {function(string, DescribeRecordingPlansResponse):void} cb
     * @public
     */
    DescribeRecordingPlans(req, cb) {
        let resp = new DescribeRecordingPlansResponse();
        this.request("DescribeRecordingPlans", req, resp, cb);
    }

    /**
     * 本接口(DescribeDeviceGroup)用于根据设备ID查询设备所在分组信息，可批量查询。
     * @param {DescribeDeviceGroupRequest} req
     * @param {function(string, DescribeDeviceGroupResponse):void} cb
     * @public
     */
    DescribeDeviceGroup(req, cb) {
        let resp = new DescribeDeviceGroupResponse();
        this.request("DescribeDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口(DeleteRecordPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
请使用DeleteRecordingPlan接口
     * @param {DeleteRecordPlanRequest} req
     * @param {function(string, DeleteRecordPlanResponse):void} cb
     * @public
     */
    DeleteRecordPlan(req, cb) {
        let resp = new DeleteRecordPlanResponse();
        this.request("DeleteRecordPlan", req, resp, cb);
    }

    /**
     * 创建消息转发配置
     * @param {CreateMessageForwardRequest} req
     * @param {function(string, CreateMessageForwardResponse):void} cb
     * @public
     */
    CreateMessageForward(req, cb) {
        let resp = new CreateMessageForwardResponse();
        this.request("CreateMessageForward", req, resp, cb);
    }

    /**
     * 本接口(DeleteTimeTemplate) 用于删除时间模板。
     * @param {DeleteTimeTemplateRequest} req
     * @param {function(string, DeleteTimeTemplateResponse):void} cb
     * @public
     */
    DeleteTimeTemplate(req, cb) {
        let resp = new DeleteTimeTemplateResponse();
        this.request("DeleteTimeTemplate", req, resp, cb);
    }

    /**
     * 本接口（DescribeChannels）用于获取设备下属通道列表
     * @param {DescribeChannelsRequest} req
     * @param {function(string, DescribeChannelsResponse):void} cb
     * @public
     */
    DescribeChannels(req, cb) {
        let resp = new DescribeChannelsResponse();
        this.request("DescribeChannels", req, resp, cb);
    }

    /**
     * 编辑直播接口
     * @param {ModifyLiveChannelRequest} req
     * @param {function(string, ModifyLiveChannelResponse):void} cb
     * @public
     */
    ModifyLiveChannel(req, cb) {
        let resp = new ModifyLiveChannelResponse();
        this.request("ModifyLiveChannel", req, resp, cb);
    }

    /**
     * 重置设备告警
     * @param {ResetWarningRequest} req
     * @param {function(string, ResetWarningResponse):void} cb
     * @public
     */
    ResetWarning(req, cb) {
        let resp = new ResetWarningResponse();
        this.request("ResetWarning", req, resp, cb);
    }

    /**
     * 本接口(ControlDevicePTZ) 用于对支持GB28181 PTZ信令的设备进行远程控制。
请使用ControlChannelPTZ接口
     * @param {ControlDevicePTZRequest} req
     * @param {function(string, ControlDevicePTZResponse):void} cb
     * @public
     */
    ControlDevicePTZ(req, cb) {
        let resp = new ControlDevicePTZResponse();
        this.request("ControlDevicePTZ", req, resp, cb);
    }

    /**
     * 本接口(GetRecordDatesByDev)用于查询设备含有录像文件的日期列表。
请使用DescribeRecordDatesByChannel接口
     * @param {GetRecordDatesByDevRequest} req
     * @param {function(string, GetRecordDatesByDevResponse):void} cb
     * @public
     */
    GetRecordDatesByDev(req, cb) {
        let resp = new GetRecordDatesByDevResponse();
        this.request("GetRecordDatesByDev", req, resp, cb);
    }

    /**
     * 看守位控制
     * @param {ControlHomePositionRequest} req
     * @param {function(string, ControlHomePositionResponse):void} cb
     * @public
     */
    ControlHomePosition(req, cb) {
        let resp = new ControlHomePositionResponse();
        this.request("ControlHomePosition", req, resp, cb);
    }

    /**
     * 本接口(DescribeStatisticDetails)用于查询指定统计项详情，返回结果按天为单位聚合，支持的最大时间查询范围为31天。
     * @param {DescribeStatisticDetailsRequest} req
     * @param {function(string, DescribeStatisticDetailsResponse):void} cb
     * @public
     */
    DescribeStatisticDetails(req, cb) {
        let resp = new DescribeStatisticDetailsResponse();
        this.request("DescribeStatisticDetails", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroupById)用于根据分组ID查询分组。
     * @param {DescribeGroupByIdRequest} req
     * @param {function(string, DescribeGroupByIdResponse):void} cb
     * @public
     */
    DescribeGroupById(req, cb) {
        let resp = new DescribeGroupByIdResponse();
        this.request("DescribeGroupById", req, resp, cb);
    }

    /**
     * 本接口(CreateTimeTemplate) 用于根据模板描述的具体录制时间片段，创建定制化的时间模板。
     * @param {CreateTimeTemplateRequest} req
     * @param {function(string, CreateTimeTemplateResponse):void} cb
     * @public
     */
    CreateTimeTemplate(req, cb) {
        let resp = new CreateTimeTemplateResponse();
        this.request("CreateTimeTemplate", req, resp, cb);
    }

    /**
     * 本接口(CreateDeviceGroup) 用于创建设备管理分组。
     * @param {CreateDeviceGroupRequest} req
     * @param {function(string, CreateDeviceGroupResponse):void} cb
     * @public
     */
    CreateDeviceGroup(req, cb) {
        let resp = new CreateDeviceGroupResponse();
        this.request("CreateDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口（ControlChannelLocalRecord）用于对通道本地回放流进行控制，包括暂停、播放、拉动、结束等

     * @param {ControlChannelLocalRecordRequest} req
     * @param {function(string, ControlChannelLocalRecordResponse):void} cb
     * @public
     */
    ControlChannelLocalRecord(req, cb) {
        let resp = new ControlChannelLocalRecordResponse();
        this.request("ControlChannelLocalRecord", req, resp, cb);
    }

    /**
     * 本接口（DescribeChannelLocalRecordURL）用于将NVR等设备对应通道本地回放文件，通过GB28181信令推送至云端，并生成对应的实时视频流URL，流地址URL是动态生成，如需重新播放请重新调用此接口获取最新地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     * @param {DescribeChannelLocalRecordURLRequest} req
     * @param {function(string, DescribeChannelLocalRecordURLResponse):void} cb
     * @public
     */
    DescribeChannelLocalRecordURL(req, cb) {
        let resp = new DescribeChannelLocalRecordURLResponse();
        this.request("DescribeChannelLocalRecordURL", req, resp, cb);
    }

    /**
     * 本接口(UpdateDevicePassWord)用于修改设备密码。
     * @param {UpdateDevicePassWordRequest} req
     * @param {function(string, UpdateDevicePassWordResponse):void} cb
     * @public
     */
    UpdateDevicePassWord(req, cb) {
        let resp = new UpdateDevicePassWordResponse();
        this.request("UpdateDevicePassWord", req, resp, cb);
    }

    /**
     * 编辑设备订阅状态
     * @param {ModifySubscriptionStatusRequest} req
     * @param {function(string, ModifySubscriptionStatusResponse):void} cb
     * @public
     */
    ModifySubscriptionStatus(req, cb) {
        let resp = new ModifySubscriptionStatusResponse();
        this.request("ModifySubscriptionStatus", req, resp, cb);
    }

    /**
     * 告警等级列表
     * @param {DescribeWarnModRequest} req
     * @param {function(string, DescribeWarnModResponse):void} cb
     * @public
     */
    DescribeWarnMod(req, cb) {
        let resp = new DescribeWarnModResponse();
        this.request("DescribeWarnMod", req, resp, cb);
    }

    /**
     * 直播录制计划绑定解绑直播频道
     * @param {ModifyBindPlanLiveChannelRequest} req
     * @param {function(string, ModifyBindPlanLiveChannelResponse):void} cb
     * @public
     */
    ModifyBindPlanLiveChannel(req, cb) {
        let resp = new ModifyBindPlanLiveChannelResponse();
        this.request("ModifyBindPlanLiveChannel", req, resp, cb);
    }

    /**
     * 获取设备事件
     * @param {DescribeDeviceEventRequest} req
     * @param {function(string, DescribeDeviceEventResponse):void} cb
     * @public
     */
    DescribeDeviceEvent(req, cb) {
        let resp = new DescribeDeviceEventResponse();
        this.request("DescribeDeviceEvent", req, resp, cb);
    }

    /**
     * 编辑直播录制计划
     * @param {ModifyLiveRecordPlanRequest} req
     * @param {function(string, ModifyLiveRecordPlanResponse):void} cb
     * @public
     */
    ModifyLiveRecordPlan(req, cb) {
        let resp = new ModifyLiveRecordPlanResponse();
        this.request("ModifyLiveRecordPlan", req, resp, cb);
    }

    /**
     * 本接口用于删除设备下的通道
注意： 在线状态的设备不允许删除
     * @param {DeleteChannelRequest} req
     * @param {function(string, DeleteChannelResponse):void} cb
     * @public
     */
    DeleteChannel(req, cb) {
        let resp = new DeleteChannelResponse();
        this.request("DeleteChannel", req, resp, cb);
    }

    /**
     * 根据直播录制计划获取频道列表
     * @param {DescribeChannelsByLiveRecordPlanRequest} req
     * @param {function(string, DescribeChannelsByLiveRecordPlanResponse):void} cb
     * @public
     */
    DescribeChannelsByLiveRecordPlan(req, cb) {
        let resp = new DescribeChannelsByLiveRecordPlanResponse();
        this.request("DescribeChannelsByLiveRecordPlan", req, resp, cb);
    }

    /**
     * 场景绑定/解绑通道接口
     * @param {ModifyBindSceneDeviceRequest} req
     * @param {function(string, ModifyBindSceneDeviceResponse):void} cb
     * @public
     */
    ModifyBindSceneDevice(req, cb) {
        let resp = new ModifyBindSceneDeviceResponse();
        this.request("ModifyBindSceneDevice", req, resp, cb);
    }

    /**
     * 直播录像存储日期列表
     * @param {DescribeRecordDatesByLiveRequest} req
     * @param {function(string, DescribeRecordDatesByLiveResponse):void} cb
     * @public
     */
    DescribeRecordDatesByLive(req, cb) {
        let resp = new DescribeRecordDatesByLiveResponse();
        this.request("DescribeRecordDatesByLive", req, resp, cb);
    }

    /**
     * 本接口(DescribeChannelLiveStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     * @param {DescribeChannelLiveStreamURLRequest} req
     * @param {function(string, DescribeChannelLiveStreamURLResponse):void} cb
     * @public
     */
    DescribeChannelLiveStreamURL(req, cb) {
        let resp = new DescribeChannelLiveStreamURLResponse();
        this.request("DescribeChannelLiveStreamURL", req, resp, cb);
    }

    /**
     * 查询主设备订阅状态
     * @param {DescribeSubscriptionStatusRequest} req
     * @param {function(string, DescribeSubscriptionStatusResponse):void} cb
     * @public
     */
    DescribeSubscriptionStatus(req, cb) {
        let resp = new DescribeSubscriptionStatusResponse();
        this.request("DescribeSubscriptionStatus", req, resp, cb);
    }

    /**
     * 本接口(CreateDevice) 用于创建设备。
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * 设备告警-删除告警
     * @param {DeleteWarningRequest} req
     * @param {function(string, DeleteWarningResponse):void} cb
     * @public
     */
    DeleteWarning(req, cb) {
        let resp = new DeleteWarningResponse();
        this.request("DeleteWarning", req, resp, cb);
    }

    /**
     * 本接口(DescribeGroups)用于批量查询分组信息。
     * @param {DescribeGroupsRequest} req
     * @param {function(string, DescribeGroupsResponse):void} cb
     * @public
     */
    DescribeGroups(req, cb) {
        let resp = new DescribeGroupsResponse();
        this.request("DescribeGroups", req, resp, cb);
    }

    /**
     * 获取直播录制计划列表
     * @param {DescribeLiveRecordPlanIdsRequest} req
     * @param {function(string, DescribeLiveRecordPlanIdsResponse):void} cb
     * @public
     */
    DescribeLiveRecordPlanIds(req, cb) {
        let resp = new DescribeLiveRecordPlanIdsResponse();
        this.request("DescribeLiveRecordPlanIds", req, resp, cb);
    }

    /**
     * 预置位控制
     * @param {ControlPresetRequest} req
     * @param {function(string, ControlPresetResponse):void} cb
     * @public
     */
    ControlPreset(req, cb) {
        let resp = new ControlPresetResponse();
        this.request("ControlPreset", req, resp, cb);
    }

    /**
     * 本接口(CreateRecordPlan) 用于创建录制计划，使设备与时间模板绑定，以便及时启动录制
请使用CreateRecordingPlan代替
     * @param {CreateRecordPlanRequest} req
     * @param {function(string, CreateRecordPlanResponse):void} cb
     * @public
     */
    CreateRecordPlan(req, cb) {
        let resp = new CreateRecordPlanResponse();
        this.request("CreateRecordPlan", req, resp, cb);
    }

    /**
     * 本接口(UpdateDeviceGroup)用于修改分组信息。
     * @param {UpdateDeviceGroupRequest} req
     * @param {function(string, UpdateDeviceGroupResponse):void} cb
     * @public
     */
    UpdateDeviceGroup(req, cb) {
        let resp = new UpdateDeviceGroupResponse();
        this.request("UpdateDeviceGroup", req, resp, cb);
    }

    /**
     * 删除录像存储列表
     * @param {DeleteVideoListRequest} req
     * @param {function(string, DeleteVideoListResponse):void} cb
     * @public
     */
    DeleteVideoList(req, cb) {
        let resp = new DeleteVideoListResponse();
        this.request("DeleteVideoList", req, resp, cb);
    }

    /**
     * 获取场景绑定设备列表
     * @param {DescribeBindSceneDevicesRequest} req
     * @param {function(string, DescribeBindSceneDevicesResponse):void} cb
     * @public
     */
    DescribeBindSceneDevices(req, cb) {
        let resp = new DescribeBindSceneDevicesResponse();
        this.request("DescribeBindSceneDevices", req, resp, cb);
    }

    /**
     * 本接口(UpdateTimeTemplate)用于更新时间模板。
     * @param {UpdateTimeTemplateRequest} req
     * @param {function(string, UpdateTimeTemplateResponse):void} cb
     * @public
     */
    UpdateTimeTemplate(req, cb) {
        let resp = new UpdateTimeTemplateResponse();
        this.request("UpdateTimeTemplate", req, resp, cb);
    }

    /**
     * 本接口(CreateRecordingPlan) 用于创建录制计划，使通道与时间模板绑定，以便及时启动录制
     * @param {CreateRecordingPlanRequest} req
     * @param {function(string, CreateRecordingPlanResponse):void} cb
     * @public
     */
    CreateRecordingPlan(req, cb) {
        let resp = new CreateRecordingPlanResponse();
        this.request("CreateRecordingPlan", req, resp, cb);
    }

    /**
     * 查询设备统计monitor信息
     * @param {DescribeDeviceMonitorDataRequest} req
     * @param {function(string, DescribeDeviceMonitorDataResponse):void} cb
     * @public
     */
    DescribeDeviceMonitorData(req, cb) {
        let resp = new DescribeDeviceMonitorDataResponse();
        this.request("DescribeDeviceMonitorData", req, resp, cb);
    }

    /**
     * 本接口(GetTimeTemplateById)用于根据模板ID获取时间模板详情。
     * @param {GetTimeTemplateByIdRequest} req
     * @param {function(string, GetTimeTemplateByIdResponse):void} cb
     * @public
     */
    GetTimeTemplateById(req, cb) {
        let resp = new GetTimeTemplateByIdResponse();
        this.request("GetTimeTemplateById", req, resp, cb);
    }

    /**
     * 查看消息转发配置列表
     * @param {DescribeMessageForwardsRequest} req
     * @param {function(string, DescribeMessageForwardsResponse):void} cb
     * @public
     */
    DescribeMessageForwards(req, cb) {
        let resp = new DescribeMessageForwardsResponse();
        this.request("DescribeMessageForwards", req, resp, cb);
    }

    /**
     * 获取预置位列表
     * @param {DescribePresetListRequest} req
     * @param {function(string, DescribePresetListResponse):void} cb
     * @public
     */
    DescribePresetList(req, cb) {
        let resp = new DescribePresetListResponse();
        this.request("DescribePresetList", req, resp, cb);
    }

    /**
     * 修改消息转发配置
     * @param {ModifyMessageForwardRequest} req
     * @param {function(string, ModifyMessageForwardResponse):void} cb
     * @public
     */
    ModifyMessageForward(req, cb) {
        let resp = new ModifyMessageForwardResponse();
        this.request("ModifyMessageForward", req, resp, cb);
    }

    /**
     * 本接口(DescribeDevicesList) 用于获取设备列表，支持模糊搜索
     * @param {DescribeDeviceListRequest} req
     * @param {function(string, DescribeDeviceListResponse):void} cb
     * @public
     */
    DescribeDeviceList(req, cb) {
        let resp = new DescribeDeviceListResponse();
        this.request("DescribeDeviceList", req, resp, cb);
    }

    /**
     * 创建直播录制计划
     * @param {CreateLiveRecordPlanRequest} req
     * @param {function(string, CreateLiveRecordPlanResponse):void} cb
     * @public
     */
    CreateLiveRecordPlan(req, cb) {
        let resp = new CreateLiveRecordPlanResponse();
        this.request("CreateLiveRecordPlan", req, resp, cb);
    }

    /**
     * 查看消息转发配置详情
     * @param {DescribeMessageForwardRequest} req
     * @param {function(string, DescribeMessageForwardResponse):void} cb
     * @public
     */
    DescribeMessageForward(req, cb) {
        let resp = new DescribeMessageForwardResponse();
        this.request("DescribeMessageForward", req, resp, cb);
    }

    /**
     * 本接口(GetTimeTemplates)用于获取时间模板列表。
     * @param {GetTimeTemplatesRequest} req
     * @param {function(string, GetTimeTemplatesResponse):void} cb
     * @public
     */
    GetTimeTemplates(req, cb) {
        let resp = new GetTimeTemplatesResponse();
        this.request("GetTimeTemplates", req, resp, cb);
    }

    /**
     * 获取异常事件统计
     * @param {DescribeAbnormalEventsRequest} req
     * @param {function(string, DescribeAbnormalEventsResponse):void} cb
     * @public
     */
    DescribeAbnormalEvents(req, cb) {
        let resp = new DescribeAbnormalEventsResponse();
        this.request("DescribeAbnormalEvents", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlanById)用于根据录制计划ID获取录制计划。
请使用DescribeRecordingPlanById接口
     * @param {GetRecordPlanByIdRequest} req
     * @param {function(string, GetRecordPlanByIdResponse):void} cb
     * @public
     */
    GetRecordPlanById(req, cb) {
        let resp = new GetRecordPlanByIdResponse();
        this.request("GetRecordPlanById", req, resp, cb);
    }

    /**
     * 获取回放视频流地址
请使用DescribeChannelLocalRecordURL接口

RecordId和StartTime/EndTime互斥
当存在RecordId时，StartTime和EndTime无效
当RecordId为空，StartTime和EndTime生效
     * @param {DescribeRecordStreamRequest} req
     * @param {function(string, DescribeRecordStreamResponse):void} cb
     * @public
     */
    DescribeRecordStream(req, cb) {
        let resp = new DescribeRecordStreamResponse();
        this.request("DescribeRecordStream", req, resp, cb);
    }

    /**
     * 删除直播录制计划
     * @param {DeleteLiveRecordPlanRequest} req
     * @param {function(string, DeleteLiveRecordPlanResponse):void} cb
     * @public
     */
    DeleteLiveRecordPlan(req, cb) {
        let resp = new DeleteLiveRecordPlanResponse();
        this.request("DeleteLiveRecordPlan", req, resp, cb);
    }

    /**
     * 运营中心-设备录像存储统计
     * @param {DescribeMonitorDataByDateRequest} req
     * @param {function(string, DescribeMonitorDataByDateResponse):void} cb
     * @public
     */
    DescribeMonitorDataByDate(req, cb) {
        let resp = new DescribeMonitorDataByDateResponse();
        this.request("DescribeMonitorDataByDate", req, resp, cb);
    }

    /**
     * 获取告警列表
     * @param {DescribeWarningsRequest} req
     * @param {function(string, DescribeWarningsResponse):void} cb
     * @public
     */
    DescribeWarnings(req, cb) {
        let resp = new DescribeWarningsResponse();
        this.request("DescribeWarnings", req, resp, cb);
    }

    /**
     * 本接口(DeleteDeviceGroup)用于删除分组。
     * @param {DeleteDeviceGroupRequest} req
     * @param {function(string, DeleteDeviceGroupResponse):void} cb
     * @public
     */
    DeleteDeviceGroup(req, cb) {
        let resp = new DeleteDeviceGroupResponse();
        this.request("DeleteDeviceGroup", req, resp, cb);
    }

    /**
     * 本接口(ModifyRecordingPlan)用于更新录制计划。

     * @param {ModifyRecordingPlanRequest} req
     * @param {function(string, ModifyRecordingPlanResponse):void} cb
     * @public
     */
    ModifyRecordingPlan(req, cb) {
        let resp = new ModifyRecordingPlanResponse();
        this.request("ModifyRecordingPlan", req, resp, cb);
    }

    /**
     * 本接口(DescribeChannelStreamURL)用于获取设备指定通道实时流地址，地址是动态生成，如重新播放需要调用此接口重新获取最新播放地址。
正常推流，如未设置对应录制计划，且180s无人观看此流，将会被自动掐断。
     * @param {DescribeChannelStreamURLRequest} req
     * @param {function(string, DescribeChannelStreamURLResponse):void} cb
     * @public
     */
    DescribeChannelStreamURL(req, cb) {
        let resp = new DescribeChannelStreamURLResponse();
        this.request("DescribeChannelStreamURL", req, resp, cb);
    }

    /**
     * 直播详情接口
     * @param {DescribeLiveChannelRequest} req
     * @param {function(string, DescribeLiveChannelResponse):void} cb
     * @public
     */
    DescribeLiveChannel(req, cb) {
        let resp = new DescribeLiveChannelResponse();
        this.request("DescribeLiveChannel", req, resp, cb);
    }

    /**
     * 本接口(DescribeAllDeviceList) 用于获取设备列表。
请使用DescribeDevicesList接口
     * @param {DescribeAllDeviceListRequest} req
     * @param {function(string, DescribeAllDeviceListResponse):void} cb
     * @public
     */
    DescribeAllDeviceList(req, cb) {
        let resp = new DescribeAllDeviceListResponse();
        this.request("DescribeAllDeviceList", req, resp, cb);
    }

    /**
     * 删除场景
     * @param {DeleteSceneRequest} req
     * @param {function(string, DeleteSceneResponse):void} cb
     * @public
     */
    DeleteScene(req, cb) {
        let resp = new DeleteSceneResponse();
        this.request("DeleteScene", req, resp, cb);
    }

    /**
     * 创建直播频道
     * @param {CreateLiveChannelRequest} req
     * @param {function(string, CreateLiveChannelResponse):void} cb
     * @public
     */
    CreateLiveChannel(req, cb) {
        let resp = new CreateLiveChannelResponse();
        this.request("CreateLiveChannel", req, resp, cb);
    }

    /**
     * 获取场景绑定通道列表
     * @param {DescribeBindSceneChannelsRequest} req
     * @param {function(string, DescribeBindSceneChannelsResponse):void} cb
     * @public
     */
    DescribeBindSceneChannels(req, cb) {
        let resp = new DescribeBindSceneChannelsResponse();
        this.request("DescribeBindSceneChannels", req, resp, cb);
    }

    /**
     * 本接口(UpdateRecordPlan)用于更新录制计划。
请使用 ModifyRecordingPlan接口和ModifyBindRecordingPlan接口
     * @param {UpdateRecordPlanRequest} req
     * @param {function(string, UpdateRecordPlanResponse):void} cb
     * @public
     */
    UpdateRecordPlan(req, cb) {
        let resp = new UpdateRecordPlanResponse();
        this.request("UpdateRecordPlan", req, resp, cb);
    }

    /**
     * 本接口(DeleteRecordingPlan)用于删除录制计划
录制计划删除的同时，会停止该录制计划下的全部录制任务。
     * @param {DeleteRecordingPlanRequest} req
     * @param {function(string, DeleteRecordingPlanResponse):void} cb
     * @public
     */
    DeleteRecordingPlan(req, cb) {
        let resp = new DeleteRecordingPlanResponse();
        this.request("DeleteRecordingPlan", req, resp, cb);
    }

    /**
     * 本接口(ControlChannelPTZ) 用于对支持GB28181 PTZ信令的设备进行指定通道的远程控制。
     * @param {ControlChannelPTZRequest} req
     * @param {function(string, ControlChannelPTZResponse):void} cb
     * @public
     */
    ControlChannelPTZ(req, cb) {
        let resp = new ControlChannelPTZResponse();
        this.request("ControlChannelPTZ", req, resp, cb);
    }

    /**
     * 对回放流进行控制，包括暂停、播放、拉动、结束等
请使用ControlChannelLocalRecord接口
     * @param {ControlRecordStreamRequest} req
     * @param {function(string, ControlRecordStreamResponse):void} cb
     * @public
     */
    ControlRecordStream(req, cb) {
        let resp = new ControlRecordStreamResponse();
        this.request("ControlRecordStream", req, resp, cb);
    }

    /**
     * 直播录像回放列表
     * @param {DescribeLiveVideoListRequest} req
     * @param {function(string, DescribeLiveVideoListResponse):void} cb
     * @public
     */
    DescribeLiveVideoList(req, cb) {
        let resp = new DescribeLiveVideoListResponse();
        this.request("DescribeLiveVideoList", req, resp, cb);
    }

    /**
     * 场景绑定解绑通道接口
     * @param {ModifyBindSceneChannelsRequest} req
     * @param {function(string, ModifyBindSceneChannelsResponse):void} cb
     * @public
     */
    ModifyBindSceneChannels(req, cb) {
        let resp = new ModifyBindSceneChannelsResponse();
        this.request("ModifyBindSceneChannels", req, resp, cb);
    }

    /**
     * 本接口(DescribeDevicePassWord)用于查询设备密码。
     * @param {DescribeDevicePassWordRequest} req
     * @param {function(string, DescribeDevicePassWordResponse):void} cb
     * @public
     */
    DescribeDevicePassWord(req, cb) {
        let resp = new DescribeDevicePassWordResponse();
        this.request("DescribeDevicePassWord", req, resp, cb);
    }

    /**
     * 直播列表接口
     * @param {DescribeLiveChannelListRequest} req
     * @param {function(string, DescribeLiveChannelListResponse):void} cb
     * @public
     */
    DescribeLiveChannelList(req, cb) {
        let resp = new DescribeLiveChannelListResponse();
        this.request("DescribeLiveChannelList", req, resp, cb);
    }

    /**
     * 删除消息转发配置
     * @param {DeleteMessageForwardRequest} req
     * @param {function(string, DeleteMessageForwardResponse):void} cb
     * @public
     */
    DeleteMessageForward(req, cb) {
        let resp = new DeleteMessageForwardResponse();
        this.request("DeleteMessageForward", req, resp, cb);
    }

    /**
     * 编辑预置位信息
     * @param {ModifyPresetRequest} req
     * @param {function(string, ModifyPresetResponse):void} cb
     * @public
     */
    ModifyPreset(req, cb) {
        let resp = new ModifyPresetResponse();
        this.request("ModifyPreset", req, resp, cb);
    }

    /**
     * 本接口(DeleteDevice)用于删除设备。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 本接口(ModifyDeviceData)用于编辑设备信息。
     * @param {ModifyDeviceDataRequest} req
     * @param {function(string, ModifyDeviceDataResponse):void} cb
     * @public
     */
    ModifyDeviceData(req, cb) {
        let resp = new ModifyDeviceDataResponse();
        this.request("ModifyDeviceData", req, resp, cb);
    }

    /**
     * 根据分组路径查询分组
     * @param {DescribeGroupByPathRequest} req
     * @param {function(string, DescribeGroupByPathResponse):void} cb
     * @public
     */
    DescribeGroupByPath(req, cb) {
        let resp = new DescribeGroupByPathResponse();
        this.request("DescribeGroupByPath", req, resp, cb);
    }

    /**
     * 删除直播接口
     * @param {DeleteLiveChannelRequest} req
     * @param {function(string, DeleteLiveChannelResponse):void} cb
     * @public
     */
    DeleteLiveChannel(req, cb) {
        let resp = new DeleteLiveChannelResponse();
        this.request("DeleteLiveChannel", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlans)用于获取用户的全部录制计划。
请使用DescribeRecordingPlans接口
     * @param {GetRecordPlansRequest} req
     * @param {function(string, GetRecordPlansResponse):void} cb
     * @public
     */
    GetRecordPlans(req, cb) {
        let resp = new GetRecordPlansResponse();
        this.request("GetRecordPlans", req, resp, cb);
    }

    /**
     * 本接口(GetRecordPlanByDev)用于根据设备ID查询其绑定的录制计划.

     * @param {GetRecordPlanByDevRequest} req
     * @param {function(string, GetRecordPlanByDevResponse):void} cb
     * @public
     */
    GetRecordPlanByDev(req, cb) {
        let resp = new GetRecordPlanByDevResponse();
        this.request("GetRecordPlanByDev", req, resp, cb);
    }

    /**
     * 本接口用于获取SIP服务器相关配置，用户可以通过这些配置项，将设备通过GB28181协议注册到本服务。
     * @param {DescribeSIPServerRequest} req
     * @param {function(string, DescribeSIPServerResponse):void} cb
     * @public
     */
    DescribeSIPServer(req, cb) {
        let resp = new DescribeSIPServerResponse();
        this.request("DescribeSIPServer", req, resp, cb);
    }

    /**
     * 直播录像删除
     * @param {DeleteLiveVideoListRequest} req
     * @param {function(string, DeleteLiveVideoListResponse):void} cb
     * @public
     */
    DeleteLiveVideoList(req, cb) {
        let resp = new DeleteLiveVideoListResponse();
        this.request("DeleteLiveVideoList", req, resp, cb);
    }

    /**
     * 根据时间获取云端录制文件列表
     * @param {DescribeVideoListRequest} req
     * @param {function(string, DescribeVideoListResponse):void} cb
     * @public
     */
    DescribeVideoList(req, cb) {
        let resp = new DescribeVideoListResponse();
        this.request("DescribeVideoList", req, resp, cb);
    }

    /**
     * 直播录像编辑
     * @param {ModifyLiveVideoRequest} req
     * @param {function(string, ModifyLiveVideoResponse):void} cb
     * @public
     */
    ModifyLiveVideo(req, cb) {
        let resp = new ModifyLiveVideoResponse();
        this.request("ModifyLiveVideo", req, resp, cb);
    }

    /**
     * 获取X-P2P的统计数据
     * @param {DescribeXP2PDataRequest} req
     * @param {function(string, DescribeXP2PDataResponse):void} cb
     * @public
     */
    DescribeXP2PData(req, cb) {
        let resp = new DescribeXP2PDataResponse();
        this.request("DescribeXP2PData", req, resp, cb);
    }

    /**
     * 获取场景列表
     * @param {DescribeScenesRequest} req
     * @param {function(string, DescribeScenesResponse):void} cb
     * @public
     */
    DescribeScenes(req, cb) {
        let resp = new DescribeScenesResponse();
        this.request("DescribeScenes", req, resp, cb);
    }

    /**
     * 本接口(BindGroupDevices) 用于绑定设备到分组。
     * @param {BindGroupDevicesRequest} req
     * @param {function(string, BindGroupDevicesResponse):void} cb
     * @public
     */
    BindGroupDevices(req, cb) {
        let resp = new BindGroupDevicesResponse();
        this.request("BindGroupDevices", req, resp, cb);
    }

    /**
     * 获取直播录制计划详情
     * @param {DescribeLiveRecordPlanByIdRequest} req
     * @param {function(string, DescribeLiveRecordPlanByIdResponse):void} cb
     * @public
     */
    DescribeLiveRecordPlanById(req, cb) {
        let resp = new DescribeLiveRecordPlanByIdResponse();
        this.request("DescribeLiveRecordPlanById", req, resp, cb);
    }

    /**
     * 本接口(DescribeRecordDatesByChannel)用于查询设备含有录像文件的日期列表。
     * @param {DescribeRecordDatesByChannelRequest} req
     * @param {function(string, DescribeRecordDatesByChannelResponse):void} cb
     * @public
     */
    DescribeRecordDatesByChannel(req, cb) {
        let resp = new DescribeRecordDatesByChannelResponse();
        this.request("DescribeRecordDatesByChannel", req, resp, cb);
    }


}
module.exports = IotvideoindustryClient;
