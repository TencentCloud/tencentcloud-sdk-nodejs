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
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const PublishTime = models.PublishTime;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const DescribeLiveStreamOnlineInfoResponse = models.DescribeLiveStreamOnlineInfoResponse;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const StreamName = models.StreamName;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const StreamOnlineInfo = models.StreamOnlineInfo;
const StreamInfo = models.StreamInfo;
const DescribeLiveStreamOnlineInfoRequest = models.DescribeLiveStreamOnlineInfoRequest;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
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
     * 对流设置延播
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


}
module.exports = LiveClient;
