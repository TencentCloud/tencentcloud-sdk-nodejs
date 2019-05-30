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
const DayStreamPlayInfo = models.DayStreamPlayInfo;
const RegisterIMRequest = models.RegisterIMRequest;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const RegisterIMResponse = models.RegisterIMResponse;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeStreamPlayInfoListResponse = models.DescribeStreamPlayInfoListResponse;
const DescribeStreamPlayInfoListRequest = models.DescribeStreamPlayInfoListRequest;


/**
 * bizlive client
 * @class
 */
class BizliveClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bizlive.tencentcloudapi.com", "2019-03-13", credential, region, profile);
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
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据。
     * @param {DescribeStreamPlayInfoListRequest} req
     * @param {function(string, DescribeStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPlayInfoList(req, cb) {
        let resp = new DescribeStreamPlayInfoListResponse();
        this.request("DescribeStreamPlayInfoList", req, resp, cb);
    }

    /**
     * 注册聊天室
     * @param {RegisterIMRequest} req
     * @param {function(string, RegisterIMResponse):void} cb
     * @public
     */
    RegisterIM(req, cb) {
        let resp = new RegisterIMResponse();
        this.request("RegisterIM", req, resp, cb);
    }


}
module.exports = BizliveClient;
