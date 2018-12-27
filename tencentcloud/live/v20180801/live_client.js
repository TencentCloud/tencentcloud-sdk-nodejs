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
const DeleteLiveRecordResponse = models.DeleteLiveRecordResponse;
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const StopLiveRecordResponse = models.StopLiveRecordResponse;
const ModifyPullStreamConfigRequest = models.ModifyPullStreamConfigRequest;
const PlayAuthKeyInfo = models.PlayAuthKeyInfo;
const PullStreamConfig = models.PullStreamConfig;
const DeletePullStreamConfigRequest = models.DeletePullStreamConfigRequest;
const UpdateLiveWatermarkResponse = models.UpdateLiveWatermarkResponse;
const ModifyLivePlayAuthKeyResponse = models.ModifyLivePlayAuthKeyResponse;
const DescribeLiveWatermarksResponse = models.DescribeLiveWatermarksResponse;
const ModifyPullStreamStatusRequest = models.ModifyPullStreamStatusRequest;
const CreatePullStreamConfigResponse = models.CreatePullStreamConfigResponse;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const ModifyPullStreamStatusResponse = models.ModifyPullStreamStatusResponse;
const WatermarkInfo = models.WatermarkInfo;
const PushAuthKeyInfo = models.PushAuthKeyInfo;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeLiveStreamOnlineInfoResponse = models.DescribeLiveStreamOnlineInfoResponse;
const DescribeLivePlayAuthKeyRequest = models.DescribeLivePlayAuthKeyRequest;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const ModifyLivePlayAuthKeyRequest = models.ModifyLivePlayAuthKeyRequest;
const SetLiveWatermarkStatusRequest = models.SetLiveWatermarkStatusRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const UpdateLiveWatermarkRequest = models.UpdateLiveWatermarkRequest;
const DeleteLiveWatermarkRequest = models.DeleteLiveWatermarkRequest;
const CreateLiveRecordRequest = models.CreateLiveRecordRequest;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const StopLiveRecordRequest = models.StopLiveRecordRequest;
const DeletePullStreamConfigResponse = models.DeletePullStreamConfigResponse;
const ModifyLivePushAuthKeyRequest = models.ModifyLivePushAuthKeyRequest;
const DescribeLiveWatermarksRequest = models.DescribeLiveWatermarksRequest;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const DescribeLivePlayAuthKeyResponse = models.DescribeLivePlayAuthKeyResponse;
const DeleteLiveWatermarkResponse = models.DeleteLiveWatermarkResponse;
const DescribeLivePushAuthKeyResponse = models.DescribeLivePushAuthKeyResponse;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const PublishTime = models.PublishTime;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const ModifyPullStreamConfigResponse = models.ModifyPullStreamConfigResponse;
const ModifyLivePushAuthKeyResponse = models.ModifyLivePushAuthKeyResponse;
const CreateLiveRecordResponse = models.CreateLiveRecordResponse;
const AddLiveWatermarkResponse = models.AddLiveWatermarkResponse;
const DescribePullStreamConfigsResponse = models.DescribePullStreamConfigsResponse;
const StreamName = models.StreamName;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const StreamOnlineInfo = models.StreamOnlineInfo;
const StreamInfo = models.StreamInfo;
const CreatePullStreamConfigRequest = models.CreatePullStreamConfigRequest;
const DescribeLiveStreamOnlineInfoRequest = models.DescribeLiveStreamOnlineInfoRequest;
const AddLiveWatermarkRequest = models.AddLiveWatermarkRequest;
const DeleteLiveRecordRequest = models.DeleteLiveRecordRequest;
const DescribeLivePushAuthKeyRequest = models.DescribeLivePushAuthKeyRequest;
const SetLiveWatermarkStatusResponse = models.SetLiveWatermarkStatusResponse;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
const DescribePullStreamConfigsRequest = models.DescribePullStreamConfigsRequest;
const DescribeLiveStreamPublishedListResponse = models.DescribeLiveStreamPublishedListResponse;


/**
 * live client
 * @class
 */
class LiveClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("live.tencentcloudapi.com", "2018-08-01", credential, region, profile);
    }
    
    /**
     * 断开推流连接，但可以重新推流
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        let resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }

    /**
     * 查询水印列表
     * @param {DescribeLiveWatermarksRequest} req
     * @param {function(string, DescribeLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeLiveWatermarks(req, cb) {
        let resp = new DescribeLiveWatermarksResponse();
        this.request("DescribeLiveWatermarks", req, resp, cb);
    }

    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式。
    需要传入开始时间与结束时间，录制任务根据时间自动开始与结束。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及频繁调用都有可能产生重复录制任务。
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        let resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }

    /**
     * 更新水印
     * @param {UpdateLiveWatermarkRequest} req
     * @param {function(string, UpdateLiveWatermarkResponse):void} cb
     * @public
     */
    UpdateLiveWatermark(req, cb) {
        let resp = new UpdateLiveWatermarkResponse();
        this.request("UpdateLiveWatermark", req, resp, cb);
    }

    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     * @param {StopLiveRecordRequest} req
     * @param {function(string, StopLiveRecordResponse):void} cb
     * @public
     */
    StopLiveRecord(req, cb) {
        let resp = new StopLiveRecordResponse();
        this.request("StopLiveRecord", req, resp, cb);
    }

    /**
     * 删除水印
     * @param {DeleteLiveWatermarkRequest} req
     * @param {function(string, DeleteLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteLiveWatermark(req, cb) {
        let resp = new DeleteLiveWatermarkResponse();
        this.request("DeleteLiveWatermark", req, resp, cb);
    }

    /**
     * 设置水印是否启用
     * @param {SetLiveWatermarkStatusRequest} req
     * @param {function(string, SetLiveWatermarkStatusResponse):void} cb
     * @public
     */
    SetLiveWatermarkStatus(req, cb) {
        let resp = new SetLiveWatermarkStatusResponse();
        this.request("SetLiveWatermarkStatus", req, resp, cb);
    }

    /**
     * 修改直播推流鉴权key
     * @param {ModifyLivePushAuthKeyRequest} req
     * @param {function(string, ModifyLivePushAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePushAuthKey(req, cb) {
        let resp = new ModifyLivePushAuthKeyResponse();
        this.request("ModifyLivePushAuthKey", req, resp, cb);
    }

    /**
     * 查询拉流配置
     * @param {DescribePullStreamConfigsRequest} req
     * @param {function(string, DescribePullStreamConfigsResponse):void} cb
     * @public
     */
    DescribePullStreamConfigs(req, cb) {
        let resp = new DescribePullStreamConfigsResponse();
        this.request("DescribePullStreamConfigs", req, resp, cb);
    }

    /**
     * 用于删除录制任务
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        let resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }

    /**
     * 对流设置延播时间
注意：如果在推流前设置延播，需要提前5分钟设置。

     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        let resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
    }

    /**
     * 返回直播中、无推流或者禁播等状态
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        let resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
    }

    /**
     * 查询在线推流信息列表
     * @param {DescribeLiveStreamOnlineInfoRequest} req
     * @param {function(string, DescribeLiveStreamOnlineInfoResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineInfo(req, cb) {
        let resp = new DescribeLiveStreamOnlineInfoResponse();
        this.request("DescribeLiveStreamOnlineInfo", req, resp, cb);
    }

    /**
     * 查询播放鉴权key
     * @param {DescribeLivePlayAuthKeyRequest} req
     * @param {function(string, DescribeLivePlayAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePlayAuthKey(req, cb) {
        let resp = new DescribeLivePlayAuthKeyResponse();
        this.request("DescribeLivePlayAuthKey", req, resp, cb);
    }

    /**
     * 返回已经推过流的流列表
     * @param {DescribeLiveStreamPublishedListRequest} req
     * @param {function(string, DescribeLiveStreamPublishedListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPublishedList(req, cb) {
        let resp = new DescribeLiveStreamPublishedListResponse();
        this.request("DescribeLiveStreamPublishedList", req, resp, cb);
    }

    /**
     * 修改直播拉流配置状态
     * @param {ModifyPullStreamStatusRequest} req
     * @param {function(string, ModifyPullStreamStatusResponse):void} cb
     * @public
     */
    ModifyPullStreamStatus(req, cb) {
        let resp = new ModifyPullStreamStatusResponse();
        this.request("ModifyPullStreamStatus", req, resp, cb);
    }

    /**
     * 修改播放鉴权key
     * @param {ModifyLivePlayAuthKeyRequest} req
     * @param {function(string, ModifyLivePlayAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePlayAuthKey(req, cb) {
        let resp = new ModifyLivePlayAuthKeyResponse();
        this.request("ModifyLivePlayAuthKey", req, resp, cb);
    }

    /**
     * 恢复延迟播放设置
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        let resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }

    /**
     * 恢复某条流的推送。
     * @param {ResumeLiveStreamRequest} req
     * @param {function(string, ResumeLiveStreamResponse):void} cb
     * @public
     */
    ResumeLiveStream(req, cb) {
        let resp = new ResumeLiveStreamResponse();
        this.request("ResumeLiveStream", req, resp, cb);
    }

    /**
     * 添加水印
     * @param {AddLiveWatermarkRequest} req
     * @param {function(string, AddLiveWatermarkResponse):void} cb
     * @public
     */
    AddLiveWatermark(req, cb) {
        let resp = new AddLiveWatermarkResponse();
        this.request("AddLiveWatermark", req, resp, cb);
    }

    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        let resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
    }

    /**
     * 更新拉流配置
     * @param {ModifyPullStreamConfigRequest} req
     * @param {function(string, ModifyPullStreamConfigResponse):void} cb
     * @public
     */
    ModifyPullStreamConfig(req, cb) {
        let resp = new ModifyPullStreamConfigResponse();
        this.request("ModifyPullStreamConfig", req, resp, cb);
    }

    /**
     * 返回正在直播中的流列表
     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        let resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }

    /**
     * 添加拉流配置，目前限制添加10条任务。
     * @param {CreatePullStreamConfigRequest} req
     * @param {function(string, CreatePullStreamConfigResponse):void} cb
     * @public
     */
    CreatePullStreamConfig(req, cb) {
        let resp = new CreatePullStreamConfigResponse();
        this.request("CreatePullStreamConfig", req, resp, cb);
    }

    /**
     * 查询直播推流鉴权key
     * @param {DescribeLivePushAuthKeyRequest} req
     * @param {function(string, DescribeLivePushAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePushAuthKey(req, cb) {
        let resp = new DescribeLivePushAuthKeyResponse();
        this.request("DescribeLivePushAuthKey", req, resp, cb);
    }

    /**
     * 删除直播拉流配置
     * @param {DeletePullStreamConfigRequest} req
     * @param {function(string, DeletePullStreamConfigResponse):void} cb
     * @public
     */
    DeletePullStreamConfig(req, cb) {
        let resp = new DeletePullStreamConfigResponse();
        this.request("DeletePullStreamConfig", req, resp, cb);
    }


}
module.exports = LiveClient;
