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
const CreatePictureRequest = models.CreatePictureRequest;
const DescribeRelayUsageRequest = models.DescribeRelayUsageRequest;
const DescribeTRTCMarketQualityMetricDataResponse = models.DescribeTRTCMarketQualityMetricDataResponse;
const MixLayout = models.MixLayout;
const McuVideoParams = models.McuVideoParams;
const RemoveUserByStrRoomIdResponse = models.RemoveUserByStrRoomIdResponse;
const McuLayoutVolume = models.McuLayoutVolume;
const DescribeUserEventRequest = models.DescribeUserEventRequest;
const StopPublishCdnStreamResponse = models.StopPublishCdnStreamResponse;
const AbnormalEvent = models.AbnormalEvent;
const ScaleInfomation = models.ScaleInfomation;
const DescribeTRTCRealTimeScaleMetricDataRequest = models.DescribeTRTCRealTimeScaleMetricDataRequest;
const DescribeUserEventResponse = models.DescribeUserEventResponse;
const VideoEncode = models.VideoEncode;
const StopMCUMixTranscodeByStrRoomIdResponse = models.StopMCUMixTranscodeByStrRoomIdResponse;
const PictureInfo = models.PictureInfo;
const DescribeCallDetailInfoRequest = models.DescribeCallDetailInfoRequest;
const ModifyPictureRequest = models.ModifyPictureRequest;
const DescribeUserInfoRequest = models.DescribeUserInfoRequest;
const WaterMarkParams = models.WaterMarkParams;
const DescribeRecordStatisticResponse = models.DescribeRecordStatisticResponse;
const StartMCUMixTranscodeByStrRoomIdResponse = models.StartMCUMixTranscodeByStrRoomIdResponse;
const CloudStorage = models.CloudStorage;
const DescribeTrtcUsageResponse = models.DescribeTrtcUsageResponse;
const TimeValue = models.TimeValue;
const DismissRoomByStrRoomIdRequest = models.DismissRoomByStrRoomIdRequest;
const DescribeTRTCMarketQualityMetricDataRequest = models.DescribeTRTCMarketQualityMetricDataRequest;
const EventMessage = models.EventMessage;
const DescribeRecordStatisticRequest = models.DescribeRecordStatisticRequest;
const DescribeRoomInfoRequest = models.DescribeRoomInfoRequest;
const StorageParams = models.StorageParams;
const CloudVod = models.CloudVod;
const SdkAppIdNewTrtcTimeUsage = models.SdkAppIdNewTrtcTimeUsage;
const EncodeParams = models.EncodeParams;
const DescribeCallDetailInfoResponse = models.DescribeCallDetailInfoResponse;
const McuCustomCrop = models.McuCustomCrop;
const TrtcTimeNewUsage = models.TrtcTimeNewUsage;
const DescribeMixTranscodingUsageRequest = models.DescribeMixTranscodingUsageRequest;
const MixTranscodeParams = models.MixTranscodeParams;
const SmallVideoLayoutParams = models.SmallVideoLayoutParams;
const SubscribeStreamUserIds = models.SubscribeStreamUserIds;
const WaterMarkImage = models.WaterMarkImage;
const McuUserInfoParams = models.McuUserInfoParams;
const UserMediaStream = models.UserMediaStream;
const EventList = models.EventList;
const DescribeTrtcUsageRequest = models.DescribeTrtcUsageRequest;
const DescribeRoomInfoResponse = models.DescribeRoomInfoResponse;
const McuLayoutParams = models.McuLayoutParams;
const DescribeTRTCRealTimeQualityMetricDataRequest = models.DescribeTRTCRealTimeQualityMetricDataRequest;
const SdkAppIdTrtcMcuTranscodeTimeUsage = models.SdkAppIdTrtcMcuTranscodeTimeUsage;
const McuLayout = models.McuLayout;
const DescribeUserInfoResponse = models.DescribeUserInfoResponse;
const DescribeTRTCRealTimeScaleMetricDataResponse = models.DescribeTRTCRealTimeScaleMetricDataResponse;
const StartMCUMixTranscodeRequest = models.StartMCUMixTranscodeRequest;
const McuWaterMarkImage = models.McuWaterMarkImage;
const StartPublishCdnStreamResponse = models.StartPublishCdnStreamResponse;
const TrtcUsage = models.TrtcUsage;
const DescribeTRTCMarketScaleMetricDataRequest = models.DescribeTRTCMarketScaleMetricDataRequest;
const DescribeRelayUsageResponse = models.DescribeRelayUsageResponse;
const DescribeRecordingUsageResponse = models.DescribeRecordingUsageResponse;
const StopMCUMixTranscodeRequest = models.StopMCUMixTranscodeRequest;
const ModifyPictureResponse = models.ModifyPictureResponse;
const DescribeRecordingUsageRequest = models.DescribeRecordingUsageRequest;
const StorageFile = models.StorageFile;
const WaterMark = models.WaterMark;
const DescribeScaleInfoResponse = models.DescribeScaleInfoResponse;
const MixLayoutParams = models.MixLayoutParams;
const StopMCUMixTranscodeResponse = models.StopMCUMixTranscodeResponse;
const DescribeMixTranscodingUsageResponse = models.DescribeMixTranscodingUsageResponse;
const McuFeedBackRoomParams = models.McuFeedBackRoomParams;
const SdkAppIdRecordUsage = models.SdkAppIdRecordUsage;
const AudioEncode = models.AudioEncode;
const RemoveUserRequest = models.RemoveUserRequest;
const DismissRoomRequest = models.DismissRoomRequest;
const DescribeUnusualEventRequest = models.DescribeUnusualEventRequest;
const DescribeCloudRecordingRequest = models.DescribeCloudRecordingRequest;
const TencentVod = models.TencentVod;
const McuPassThrough = models.McuPassThrough;
const DescribeTRTCRealTimeQualityMetricDataResponse = models.DescribeTRTCRealTimeQualityMetricDataResponse;
const LayoutParams = models.LayoutParams;
const RecordUsage = models.RecordUsage;
const CreateCloudRecordingRequest = models.CreateCloudRecordingRequest;
const OutputParams = models.OutputParams;
const DeleteCloudRecordingResponse = models.DeleteCloudRecordingResponse;
const StopMCUMixTranscodeByStrRoomIdRequest = models.StopMCUMixTranscodeByStrRoomIdRequest;
const QualityData = models.QualityData;
const StopPublishCdnStreamRequest = models.StopPublishCdnStreamRequest;
const DeletePictureResponse = models.DeletePictureResponse;
const ModifyCloudRecordingRequest = models.ModifyCloudRecordingRequest;
const VideoParams = models.VideoParams;
const StartPublishCdnStreamRequest = models.StartPublishCdnStreamRequest;
const OneSdkAppIdTranscodeTimeUsagesInfo = models.OneSdkAppIdTranscodeTimeUsagesInfo;
const CreateCloudRecordingResponse = models.CreateCloudRecordingResponse;
const StartMCUMixTranscodeResponse = models.StartMCUMixTranscodeResponse;
const DescribeTrtcMcuTranscodeTimeResponse = models.DescribeTrtcMcuTranscodeTimeResponse;
const DeleteCloudRecordingRequest = models.DeleteCloudRecordingRequest;
const DescribePictureRequest = models.DescribePictureRequest;
const TRTCDataResp = models.TRTCDataResp;
const DescribeExternalTrtcMeasureResponse = models.DescribeExternalTrtcMeasureResponse;
const DescribePictureResponse = models.DescribePictureResponse;
const DescribeTrtcMcuTranscodeTimeRequest = models.DescribeTrtcMcuTranscodeTimeRequest;
const UserInformation = models.UserInformation;
const DescribeScaleInfoRequest = models.DescribeScaleInfoRequest;
const DismissRoomByStrRoomIdResponse = models.DismissRoomByStrRoomIdResponse;
const DescribeUnusualEventResponse = models.DescribeUnusualEventResponse;
const ModifyCloudRecordingResponse = models.ModifyCloudRecordingResponse;
const StartMCUMixTranscodeByStrRoomIdRequest = models.StartMCUMixTranscodeByStrRoomIdRequest;
const DescribeCloudRecordingResponse = models.DescribeCloudRecordingResponse;
const MixUserInfo = models.MixUserInfo;
const DismissRoomResponse = models.DismissRoomResponse;
const UpdatePublishCdnStreamRequest = models.UpdatePublishCdnStreamRequest;
const MaxVideoUser = models.MaxVideoUser;
const AgentParams = models.AgentParams;
const DeletePictureRequest = models.DeletePictureRequest;
const McuSeiParams = models.McuSeiParams;
const DescribeExternalTrtcMeasureRequest = models.DescribeExternalTrtcMeasureRequest;
const UpdatePublishCdnStreamResponse = models.UpdatePublishCdnStreamResponse;
const RemoveUserByStrRoomIdRequest = models.RemoveUserByStrRoomIdRequest;
const RecordParams = models.RecordParams;
const DescribeTRTCMarketScaleMetricDataResponse = models.DescribeTRTCMarketScaleMetricDataResponse;
const McuAudioParams = models.McuAudioParams;
const PresetLayoutConfig = models.PresetLayoutConfig;
const McuPublishCdnParam = models.McuPublishCdnParam;
const AudioParams = models.AudioParams;
const SeriesInfo = models.SeriesInfo;
const SingleSubscribeParams = models.SingleSubscribeParams;
const PublishCdnParams = models.PublishCdnParams;
const McuWaterMarkParams = models.McuWaterMarkParams;
const AbnormalExperience = models.AbnormalExperience;
const RoomState = models.RoomState;
const CreatePictureResponse = models.CreatePictureResponse;
const RemoveUserResponse = models.RemoveUserResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * 查询SdkAppId下的房间列表。默认返回10条通话，一次最多返回100条通话。可查询14天内的数据。（同老接口DescribeRoomInformation）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口目前免费提供中，监控仪表盘商业化计费后该接口需要订阅付费版后方可调用，仪表盘商业化说明请见：https://cloud.tencent.com/document/product/647/77735
     * @param {DescribeRoomInfoRequest} req
     * @param {function(string, DescribeRoomInfoResponse):void} cb
     * @public
     */
    DescribeRoomInfo(req, cb) {
        let resp = new DescribeRoomInfoResponse();
        this.request("DescribeRoomInfo", req, resp, cb);
    }

    /**
     * 获取TRTC音视频互动的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     * @param {DescribeTrtcUsageRequest} req
     * @param {function(string, DescribeTrtcUsageResponse):void} cb
     * @public
     */
    DescribeTrtcUsage(req, cb) {
        let resp = new DescribeTrtcUsageResponse();
        this.request("DescribeTrtcUsage", req, resp, cb);
    }

    /**
     * 查询TRTC监控仪表盘-数据大盘质量指标（包括下列指标）
joinSuccessRate：加入频道成功率。
joinSuccessIn5sRate：5s内加入频道成功率。
audioFreezeRate：音频卡顿率。
videoFreezeRate：视频卡顿率。
networkDelay ：网络延迟率。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     * @param {DescribeTRTCMarketQualityMetricDataRequest} req
     * @param {function(string, DescribeTRTCMarketQualityMetricDataResponse):void} cb
     * @public
     */
    DescribeTRTCMarketQualityMetricData(req, cb) {
        let resp = new DescribeTRTCMarketQualityMetricDataResponse();
        this.request("DescribeTRTCMarketQualityMetricData", req, resp, cb);
    }

    /**
     * 接口说明：启动旁路以及混流转推任务。TRTC 的房间中可能会同时存在多路音视频流，您可以通过此API接口，实现以下几种效果：
1、支持将单个主播的音视频流发布（也称作“转推”）到直播CDN上，请参考示例2（发起单流音视频旁路转推）和示例3（发起单流纯音频旁路转推）。
2、支持将同个房间多个主播或者不同房间多个主播的音视频混合成1路后再发布到直播CDN上，您可以通过AudioParams.SubscribeAudioList和VideoParams.LayoutParams调整参与混音的用户列表以及指定各路混流画面的布局位置。请参考示例1（发起混流转推）。
3、支持预先设置一个房间的混流模板，将该房间中的多个音视频混合成1路发布到直播CDN，腾讯云后台实时监控TRTC房间中的主播变化，自动按照混流模板调整布局。目前已经支持了如下几种混流预设模板：
     - 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面。
     - 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小，最多支持16个画面。
     - 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
4、支持同时将音视频流发布到最多10个直播CDN上。您可以通过PublishCdnParams.PublishCdnUrl指定转推CDN的url，如果您想转推到腾讯云CDN，PublishCdnParams.IsTencentCdn填为1。
5、支持通过配置服务端回调，实时将转推状态以HTTP/HTTPS POST 请求发送给您的服务器，如果您需要接入转推事件回调，请联系腾讯云技术支持。
6、云API调用支持广州、上海、北京、香港四个地域，如果您想转推海外，请选择香港地域。
7、国内站默认只支持转推腾讯云CDN，如您有转推第三方CDN的需求，请联系腾讯云技术支持，由后台进行评估。
注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转推计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、**转推非腾讯云CDN将产生云端转推费用，详见[云端混流转推计费说明](https://cloud.tencent.com/document/product/647/82155)。**

其他使用说明如下：
1、使用混流转推接口时，您需要先调用启动转推任务接口（StartPublishCdnStream），获取启动转推任务响应中的任务ID标识（TaskId）。后续传入任务ID标识（TaskId）来更新转推任务（UpdatePublishCdnStream）和停止转推任务（StopPublishCdnStream）。
2、为了确保转推链接的稳定，同一个转推任务不支持纯音频、音视频、纯视频之间的切换。
3、为了确保转推链接的稳定，更新转推任务接口（UpdatePublishCdnStream）不支持时更改视频参数（codec）和音频参数（codec、采样率、码率、声道数），其余参数建议全量带齐。
4、发起单流旁路任务时，AudioParams和VideoParams都填写表示音视频旁路，如果仅填写AudioParams表示纯音频旁路，任务进行过程中不支持纯音频到音视频的切换。音视频旁路时，VideoParams中的Width、Height、Fps、BitRate、Gop需要按照真实上行参数填写。
5、更新转推任务（UpdatePublishCdnStream）必须携带SequenceNumber参数，用于防止请求乱序。客户保证对同一个任务更新时的SequenceNumber参数递增：腾讯云返回InternalError错误码时，需重试请求（不换SequenceNumber）；腾讯云返回FailedOperation.OutdateRequest过期错误码时，无需处理即可。
6、您可以在主播进房前，提前创建转推任务，结束转推任务时需要主动调用停止接口。如果您没有调用停止转推任务接口时，腾讯云后台会按照所有参与混流的用户没有任何数据上行的时间算起，直到超过启动转推任务时设置的超时时间（AgentParams.MaxIdleTime）为止，自动停止混流转推任务。
     * @param {StartPublishCdnStreamRequest} req
     * @param {function(string, StartPublishCdnStreamResponse):void} cb
     * @public
     */
    StartPublishCdnStream(req, cb) {
        let resp = new StartPublishCdnStreamResponse();
        this.request("StartPublishCdnStream", req, resp, cb);
    }

    /**
     * 查询指定时间内的用户列表及用户通话质量数据，可查询14天内数据。DataType 不为null，查询起止时间不超过1个小时，查询用户不超过6个，支持跨天查询。DataType为null时，查询起止时间不超过4个小时， 默认查询6个用户，同时支持每页查询100以内用户个数（PageSize不超过100）。接口用于查询质量问题，不推荐作为计费使用。（同老接口DescribeCallDetail）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口目前免费提供中，监控仪表盘商业化计费后该接口需要订阅付费版后方可调用，仪表盘商业化说明请见：https://cloud.tencent.com/document/product/647/77735
     * @param {DescribeCallDetailInfoRequest} req
     * @param {function(string, DescribeCallDetailInfoResponse):void} cb
     * @public
     */
    DescribeCallDetailInfo(req, cb) {
        let resp = new DescribeCallDetailInfoResponse();
        this.request("DescribeCallDetailInfo", req, resp, cb);
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
     * 查询TRTC监控仪表盘-数据大盘规模指标（会返回通话人数，通话房间数，峰值同时在线人数，峰值同时在线频道数）
userCount：通话人数，
roomCount：通话房间数，从有用户加入频道到所有用户离开频道计为一个通话频道。
peakCurrentChannels：峰值同时在线频道数。
peakCurrentUsers：峰值同时在线人数。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     * @param {DescribeTRTCMarketScaleMetricDataRequest} req
     * @param {function(string, DescribeTRTCMarketScaleMetricDataResponse):void} cb
     * @public
     */
    DescribeTRTCMarketScaleMetricData(req, cb) {
        let resp = new DescribeTRTCMarketScaleMetricDataResponse();
        this.request("DescribeTRTCMarketScaleMetricData", req, resp, cb);
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
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     * @param {StartMCUMixTranscodeByStrRoomIdRequest} req
     * @param {function(string, StartMCUMixTranscodeByStrRoomIdResponse):void} cb
     * @public
     */
    StartMCUMixTranscodeByStrRoomId(req, cb) {
        let resp = new StartMCUMixTranscodeByStrRoomIdResponse();
        this.request("StartMCUMixTranscodeByStrRoomId", req, resp, cb);
    }

    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁删除自定义背景图或水印，可通过此接口删除已上传的图片。无需频繁删除图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     * @param {DeletePictureRequest} req
     * @param {function(string, DeletePictureResponse):void} cb
     * @public
     */
    DeletePicture(req, cb) {
        let resp = new DeletePictureResponse();
        this.request("DeletePicture", req, resp, cb);
    }

    /**
     * 查询TRTC监控仪表盘-实时监控质量指标（会返回下列指标）
-视频卡顿率
-音频卡顿率
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
     * @param {DescribeTRTCRealTimeQualityMetricDataRequest} req
     * @param {function(string, DescribeTRTCRealTimeQualityMetricDataResponse):void} cb
     * @public
     */
    DescribeTRTCRealTimeQualityMetricData(req, cb) {
        let resp = new DescribeTRTCRealTimeQualityMetricDataResponse();
        this.request("DescribeTRTCRealTimeQualityMetricData", req, resp, cb);
    }

    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁新增自定义背景图或水印，可通过此接口上传新的图片素材。无需频繁新增图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     * @param {CreatePictureRequest} req
     * @param {function(string, CreatePictureResponse):void} cb
     * @public
     */
    CreatePicture(req, cb) {
        let resp = new CreatePictureResponse();
        this.request("CreatePicture", req, resp, cb);
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
     * 成功开启录制后，可以使用此接口来更新录制任务。仅在录制任务进行时有效，录制退出后更新将会返回错误。更新操作是全量覆盖，并不是增量更新的模式，也就是说每次更新都需要携带全量的信息。
     * @param {ModifyCloudRecordingRequest} req
     * @param {function(string, ModifyCloudRecordingResponse):void} cb
     * @public
     */
    ModifyCloudRecording(req, cb) {
        let resp = new ModifyCloudRecordingResponse();
        this.request("ModifyCloudRecording", req, resp, cb);
    }

    /**
     * 查询用户某次通话内的进退房，视频开关等详细事件。可查询14天内数据。（同接口DescribeDetailEvent）
     * @param {DescribeUserEventRequest} req
     * @param {function(string, DescribeUserEventResponse):void} cb
     * @public
     */
    DescribeUserEvent(req, cb) {
        let resp = new DescribeUserEventResponse();
        this.request("DescribeUserEvent", req, resp, cb);
    }

    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。房间销毁后混流自动结束。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置，最多支持2个画面。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     * @param {StartMCUMixTranscodeRequest} req
     * @param {function(string, StartMCUMixTranscodeResponse):void} cb
     * @public
     */
    StartMCUMixTranscode(req, cb) {
        let resp = new StartMCUMixTranscodeResponse();
        this.request("StartMCUMixTranscode", req, resp, cb);
    }

    /**
     * 接口说明：
启动云端录制功能，完成房间内的音视频录制，并上传到指定的云存储。您可以通过此 API 接口把TRTC 房间中的每一路音视频流做单独的录制有或者多路视频画面混流一路。

您可以通过此接口实现如下目标：
* 指定订阅流参数（RecordParams）来指定需要录制的主播的黑名单或者白名单。
* 指定第三方存储的参数（StorageParams）来指定上传到您希望的云存储，目前仅支持云点播存储（CloudVod）
* 指定混流模式下的音视频转码详细参数（MixTranscodeParams），包括视频分辨率、视频码率、视频帧率、以及声音质量等
* 指定混流模式各路画面的位置和布局或者也可以指定自动模板的方式来配置。

关键名词：
* 单流录制：分别录制房间的订阅UserId的音频和视频。录制服务会实时将录制文件上传至云点播存储。
* 合流录制：将房间内订阅UserId的音视频混录成一个音视频文件，并将录制文件上传至云点播存储（录制结束后可前往云点播控制台查看录制文件：https://console.cloud.tencent.com/vod/media）。
     * @param {CreateCloudRecordingRequest} req
     * @param {function(string, CreateCloudRecordingResponse):void} cb
     * @public
     */
    CreateCloudRecording(req, cb) {
        let resp = new CreateCloudRecordingResponse();
        this.request("CreateCloudRecording", req, resp, cb);
    }

    /**
     * 获取Trtc的用量统计数据。走计费渠道二期 只允许查两天的数据。
当前接口已不再更新维护，请使用新版音视频用量接口：DescribeTrtcUsage （https://cloud.tencent.com/document/product/647/81425）
     * @param {DescribeExternalTrtcMeasureRequest} req
     * @param {function(string, DescribeExternalTrtcMeasureResponse):void} cb
     * @public
     */
    DescribeExternalTrtcMeasure(req, cb) {
        let resp = new DescribeExternalTrtcMeasureResponse();
        this.request("DescribeExternalTrtcMeasure", req, resp, cb);
    }

    /**
     * 可查询SdkAppId每天的房间数和用户数，按天统计，可查询最近14天的数据。当天未结束，数据未统计完成，无法查到当天的房间数与用户数。（同老接口DescribeHistoryScale） 
     * @param {DescribeScaleInfoRequest} req
     * @param {function(string, DescribeScaleInfoResponse):void} cb
     * @public
     */
    DescribeScaleInfo(req, cb) {
        let resp = new DescribeScaleInfoResponse();
        this.request("DescribeScaleInfo", req, resp, cb);
    }

    /**
     * 获取TRTC旁路转推的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     * @param {DescribeRelayUsageRequest} req
     * @param {function(string, DescribeRelayUsageResponse):void} cb
     * @public
     */
    DescribeRelayUsage(req, cb) {
        let resp = new DescribeRelayUsageResponse();
        this.request("DescribeRelayUsage", req, resp, cb);
    }

    /**
     * 查询指定时间内的用户列表，可查询14天内数据，查询起止时间不超过4小时。默认每页查询6个用户，支持每页最大查询100个用户PageSize不超过100）。（同老接口DescribeUserInformation）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口目前免费提供中，监控仪表盘商业化计费后该接口需要订阅付费版后方可调用，仪表盘商业化说明请见：https://cloud.tencent.com/document/product/647/77735
     * @param {DescribeUserInfoRequest} req
     * @param {function(string, DescribeUserInfoResponse):void} cb
     * @public
     */
    DescribeUserInfo(req, cb) {
        let resp = new DescribeUserInfoResponse();
        this.request("DescribeUserInfo", req, resp, cb);
    }

    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {DismissRoomByStrRoomIdRequest} req
     * @param {function(string, DismissRoomByStrRoomIdResponse):void} cb
     * @public
     */
    DismissRoomByStrRoomId(req, cb) {
        let resp = new DismissRoomByStrRoomIdResponse();
        this.request("DismissRoomByStrRoomId", req, resp, cb);
    }

    /**
     * 接口说明：结束云端混流
     * @param {StopMCUMixTranscodeByStrRoomIdRequest} req
     * @param {function(string, StopMCUMixTranscodeByStrRoomIdResponse):void} cb
     * @public
     */
    StopMCUMixTranscodeByStrRoomId(req, cb) {
        let resp = new StopMCUMixTranscodeByStrRoomIdResponse();
        this.request("StopMCUMixTranscodeByStrRoomId", req, resp, cb);
    }

    /**
     * 获取TRTC录制的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     * @param {DescribeRecordingUsageRequest} req
     * @param {function(string, DescribeRecordingUsageResponse):void} cb
     * @public
     */
    DescribeRecordingUsage(req, cb) {
        let resp = new DescribeRecordingUsageResponse();
        this.request("DescribeRecordingUsage", req, resp, cb);
    }

    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {RemoveUserByStrRoomIdRequest} req
     * @param {function(string, RemoveUserByStrRoomIdResponse):void} cb
     * @public
     */
    RemoveUserByStrRoomId(req, cb) {
        let resp = new RemoveUserByStrRoomIdResponse();
        this.request("RemoveUserByStrRoomId", req, resp, cb);
    }

    /**
     * 获取TRTC混流转码的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     * @param {DescribeMixTranscodingUsageRequest} req
     * @param {function(string, DescribeMixTranscodingUsageResponse):void} cb
     * @public
     */
    DescribeMixTranscodingUsage(req, cb) {
        let resp = new DescribeMixTranscodingUsageResponse();
        this.request("DescribeMixTranscodingUsage", req, resp, cb);
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

    /**
     * 查询云端录制计费时长。

- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     * @param {DescribeRecordStatisticRequest} req
     * @param {function(string, DescribeRecordStatisticResponse):void} cb
     * @public
     */
    DescribeRecordStatistic(req, cb) {
        let resp = new DescribeRecordStatisticResponse();
        this.request("DescribeRecordStatistic", req, resp, cb);
    }

    /**
     * 查询旁路转码计费时长。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     * @param {DescribeTrtcMcuTranscodeTimeRequest} req
     * @param {function(string, DescribeTrtcMcuTranscodeTimeResponse):void} cb
     * @public
     */
    DescribeTrtcMcuTranscodeTime(req, cb) {
        let resp = new DescribeTrtcMcuTranscodeTimeResponse();
        this.request("DescribeTrtcMcuTranscodeTime", req, resp, cb);
    }

    /**
     * 成功开启录制后，可以使用此接口来查询录制状态。仅在录制任务进行时有效，录制退出后查询将会返回错误。
录制文件上传到云点播VOD时，StorageFileList中不会返回录制文件信息，请订阅相关录制文件回调事件，获取录制文件信息。
     * @param {DescribeCloudRecordingRequest} req
     * @param {function(string, DescribeCloudRecordingResponse):void} cb
     * @public
     */
    DescribeCloudRecording(req, cb) {
        let resp = new DescribeCloudRecordingResponse();
        this.request("DescribeCloudRecording", req, resp, cb);
    }

    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁修改自定义背景图或水印素材，可通过此接口修改已上传的图片。无需频繁修改图片素材的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     * @param {ModifyPictureRequest} req
     * @param {function(string, ModifyPictureResponse):void} cb
     * @public
     */
    ModifyPicture(req, cb) {
        let resp = new ModifyPictureResponse();
        this.request("ModifyPicture", req, resp, cb);
    }

    /**
     * 更新转推任务。
注：请参见启动转推任务的接口说明和使用说明。
     * @param {UpdatePublishCdnStreamRequest} req
     * @param {function(string, UpdatePublishCdnStreamResponse):void} cb
     * @public
     */
    UpdatePublishCdnStream(req, cb) {
        let resp = new UpdatePublishCdnStreamResponse();
        this.request("UpdatePublishCdnStream", req, resp, cb);
    }

    /**
     * 成功开启录制后，可以使用此接口来停止录制任务。停止录制成功后不代表文件全部传输完成，如果未完成后台将会继续上传文件，成功后通过事件回调通知客户文件全部传输完成状态。
     * @param {DeleteCloudRecordingRequest} req
     * @param {function(string, DeleteCloudRecordingResponse):void} cb
     * @public
     */
    DeleteCloudRecording(req, cb) {
        let resp = new DeleteCloudRecordingResponse();
        this.request("DeleteCloudRecording", req, resp, cb);
    }

    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁查找自定义背景图或水印信息，可通过此接口查找已上传的图片信息。无需频繁查找图片信息的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中查看。
     * @param {DescribePictureRequest} req
     * @param {function(string, DescribePictureResponse):void} cb
     * @public
     */
    DescribePicture(req, cb) {
        let resp = new DescribePictureResponse();
        this.request("DescribePicture", req, resp, cb);
    }

    /**
     * 停止转推任务。
     * @param {StopPublishCdnStreamRequest} req
     * @param {function(string, StopPublishCdnStreamResponse):void} cb
     * @public
     */
    StopPublishCdnStream(req, cb) {
        let resp = new StopPublishCdnStreamResponse();
        this.request("StopPublishCdnStream", req, resp, cb);
    }

    /**
     * 查询SdkAppId下任意20条异常体验事件，返回异常体验ID与可能产生异常体验的原因。可查询14天内数据，查询起止时间不超过1个小时。支持跨天查询。（同老接口DescribeAbnormalEvent）
异常体验ID映射见：https://cloud.tencent.com/document/product/647/44916
     * @param {DescribeUnusualEventRequest} req
     * @param {function(string, DescribeUnusualEventResponse):void} cb
     * @public
     */
    DescribeUnusualEvent(req, cb) {
        let resp = new DescribeUnusualEventResponse();
        this.request("DescribeUnusualEvent", req, resp, cb);
    }

    /**
     * 查询TRTC监控仪表盘-实时监控规模指标（会返回下列指标）
-userCount（在线用户数）
-roomCount（在线房间数）
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
     * @param {DescribeTRTCRealTimeScaleMetricDataRequest} req
     * @param {function(string, DescribeTRTCRealTimeScaleMetricDataResponse):void} cb
     * @public
     */
    DescribeTRTCRealTimeScaleMetricData(req, cb) {
        let resp = new DescribeTRTCRealTimeScaleMetricDataResponse();
        this.request("DescribeTRTCRealTimeScaleMetricData", req, resp, cb);
    }


}
module.exports = TrtcClient;
