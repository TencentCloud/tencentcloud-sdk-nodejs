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
const DescribeAbnormalEventResponse = models.DescribeAbnormalEventResponse;
const RealtimeData = models.RealtimeData;
const DescribeAbnormalEventRequest = models.DescribeAbnormalEventRequest;
const LayoutParams = models.LayoutParams;
const TimeValue = models.TimeValue;
const StopMCUMixTranscodeResponse = models.StopMCUMixTranscodeResponse;
const DescribeRealtimeScaleResponse = models.DescribeRealtimeScaleResponse;
const DismissRoomResponse = models.DismissRoomResponse;
const DescribeRealtimeNetworkResponse = models.DescribeRealtimeNetworkResponse;
const RemoveUserRequest = models.RemoveUserRequest;
const DescribeCallDetailRequest = models.DescribeCallDetailRequest;
const DescribeRealtimeNetworkRequest = models.DescribeRealtimeNetworkRequest;
const DismissRoomRequest = models.DismissRoomRequest;
const EncodeParams = models.EncodeParams;
const StartMCUMixTranscodeRequest = models.StartMCUMixTranscodeRequest;
const DescribeRealtimeQualityResponse = models.DescribeRealtimeQualityResponse;
const StopMCUMixTranscodeRequest = models.StopMCUMixTranscodeRequest;
const UserInformation = models.UserInformation;
const DescribeHistoryScaleRequest = models.DescribeHistoryScaleRequest;
const DescribeRoomInformationResponse = models.DescribeRoomInformationResponse;
const OutputParams = models.OutputParams;
const EventMessage = models.EventMessage;
const CreateTroubleInfoResponse = models.CreateTroubleInfoResponse;
const QualityData = models.QualityData;
const AbnormalEvent = models.AbnormalEvent;
const DescribeRealtimeQualityRequest = models.DescribeRealtimeQualityRequest;
const ScaleInfomation = models.ScaleInfomation;
const CreateTroubleInfoRequest = models.CreateTroubleInfoRequest;
const EventList = models.EventList;
const DescribeDetailEventResponse = models.DescribeDetailEventResponse;
const StartMCUMixTranscodeResponse = models.StartMCUMixTranscodeResponse;
const SmallVideoLayoutParams = models.SmallVideoLayoutParams;
const DescribeRealtimeScaleRequest = models.DescribeRealtimeScaleRequest;
const DescribeCallDetailResponse = models.DescribeCallDetailResponse;
const DescribeRoomInformationRequest = models.DescribeRoomInformationRequest;
const DescribeDetailEventRequest = models.DescribeDetailEventRequest;
const AbnormalExperience = models.AbnormalExperience;
const RoomState = models.RoomState;
const RemoveUserResponse = models.RemoveUserResponse;
const DescribeHistoryScaleResponse = models.DescribeHistoryScaleResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {RemoveUserRequest} req
     * @param {function(string, RemoveUserResponse):void} cb
     * @public
     */
    RemoveUser(req, cb) {
        let resp = new RemoveUserResponse();
        this.request("RemoveUser", req, resp, cb);
    }

    /**
     * 创建异常信息
     * @param {CreateTroubleInfoRequest} req
     * @param {function(string, CreateTroubleInfoResponse):void} cb
     * @public
     */
    CreateTroubleInfo(req, cb) {
        let resp = new CreateTroubleInfoResponse();
        this.request("CreateTroubleInfo", req, resp, cb);
    }

    /**
     * 可查询sdkqppid 每天的房间数和用户数，每分钟1次，可查询最近5天的数据。当天未结束，无法查到当天的房间数与用户数。
     * @param {DescribeHistoryScaleRequest} req
     * @param {function(string, DescribeHistoryScaleResponse):void} cb
     * @public
     */
    DescribeHistoryScale(req, cb) {
        let resp = new DescribeHistoryScaleResponse();
        this.request("DescribeHistoryScale", req, resp, cb);
    }

    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置。
     * @param {StartMCUMixTranscodeRequest} req
     * @param {function(string, StartMCUMixTranscodeResponse):void} cb
     * @public
     */
    StartMCUMixTranscode(req, cb) {
        let resp = new StartMCUMixTranscodeResponse();
        this.request("StartMCUMixTranscode", req, resp, cb);
    }

    /**
     * 查询sdkappid维度下实时规模，可查询24小时内数据，查询起止时间不超过1个小时。
     * @param {DescribeRealtimeScaleRequest} req
     * @param {function(string, DescribeRealtimeScaleResponse):void} cb
     * @public
     */
    DescribeRealtimeScale(req, cb) {
        let resp = new DescribeRealtimeScaleResponse();
        this.request("DescribeRealtimeScale", req, resp, cb);
    }

    /**
     * 查询sdkappid维度下实时网络状态，包括上行丢包与下行丢包。可查询24小时内数据，查询起止时间不超过1个小时。
     * @param {DescribeRealtimeNetworkRequest} req
     * @param {function(string, DescribeRealtimeNetworkResponse):void} cb
     * @public
     */
    DescribeRealtimeNetwork(req, cb) {
        let resp = new DescribeRealtimeNetworkResponse();
        this.request("DescribeRealtimeNetwork", req, resp, cb);
    }

    /**
     * 查询sdkappid下的房间列表。默认返回10条通话，一次最多返回100条通话。可查询5天内的数据。
     * @param {DescribeRoomInformationRequest} req
     * @param {function(string, DescribeRoomInformationResponse):void} cb
     * @public
     */
    DescribeRoomInformation(req, cb) {
        let resp = new DescribeRoomInformationResponse();
        this.request("DescribeRoomInformation", req, resp, cb);
    }

    /**
     * 查询用户某次通话内的进退房，视频开关等详细事件。可查询5天内数据。
     * @param {DescribeDetailEventRequest} req
     * @param {function(string, DescribeDetailEventResponse):void} cb
     * @public
     */
    DescribeDetailEvent(req, cb) {
        let resp = new DescribeDetailEventResponse();
        this.request("DescribeDetailEvent", req, resp, cb);
    }

    /**
     * 查询指定时间内的用户列表及用户通话质量数据。可查询5天内数据，查询起止时间不超过1个小时，查询用户不超过6个，不支持跨天查询。
     * @param {DescribeCallDetailRequest} req
     * @param {function(string, DescribeCallDetailResponse):void} cb
     * @public
     */
    DescribeCallDetail(req, cb) {
        let resp = new DescribeCallDetailResponse();
        this.request("DescribeCallDetail", req, resp, cb);
    }

    /**
     * 接口说明：结束云端混流
     * @param {StopMCUMixTranscodeRequest} req
     * @param {function(string, StopMCUMixTranscodeResponse):void} cb
     * @public
     */
    StopMCUMixTranscode(req, cb) {
        let resp = new StopMCUMixTranscodeResponse();
        this.request("StopMCUMixTranscode", req, resp, cb);
    }

    /**
     * 查询SDKAppID下用户的异常体验事件，返回异常体验ID与可能产生异常体验的原因。可查询24小时内数据，查询起止时间不超过1个小时。支持跨天查询。异常体验ID映射见：https://cloud.tencent.com/document/product/647/44916
     * @param {DescribeAbnormalEventRequest} req
     * @param {function(string, DescribeAbnormalEventResponse):void} cb
     * @public
     */
    DescribeAbnormalEvent(req, cb) {
        let resp = new DescribeAbnormalEventResponse();
        this.request("DescribeAbnormalEvent", req, resp, cb);
    }

    /**
     * 查询sdkappid维度下实时质量数据，包括：进房成功率，首帧秒开率，音频卡顿率，视频卡顿率。可查询24小时内数据，查询起止时间不超过1个小时。
     * @param {DescribeRealtimeQualityRequest} req
     * @param {function(string, DescribeRealtimeQualityResponse):void} cb
     * @public
     */
    DescribeRealtimeQuality(req, cb) {
        let resp = new DescribeRealtimeQualityResponse();
        this.request("DescribeRealtimeQuality", req, resp, cb);
    }

    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {DismissRoomRequest} req
     * @param {function(string, DismissRoomResponse):void} cb
     * @public
     */
    DismissRoom(req, cb) {
        let resp = new DismissRoomResponse();
        this.request("DismissRoom", req, resp, cb);
    }


}
module.exports = TrtcClient;
