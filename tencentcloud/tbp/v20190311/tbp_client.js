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
const PostAudioResponse = models.PostAudioResponse;
const SlotInfo = models.SlotInfo;
const ResetRequest = models.ResetRequest;
const PostTextRequest = models.PostTextRequest;
const ResetResponse = models.ResetResponse;
const PostTextResponse = models.PostTextResponse;
const PostAudioRequest = models.PostAudioRequest;


/**
 * tbp client
 * @class
 */
class TbpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbp.tencentcloudapi.com", "2019-03-11", credential, region, profile);
    }
    
    /**
     * 对当前机器人的会话状态进行复位
     * @param {ResetRequest} req
     * @param {function(string, ResetResponse):void} cb
     * @public
     */
    Reset(req, cb) {
        let resp = new ResetResponse();
        this.request("Reset", req, resp, cb);
    }

    /**
     * 机器人会话接口，接收文本信息，传递给后台机器人
     * @param {PostTextRequest} req
     * @param {function(string, PostTextResponse):void} cb
     * @public
     */
    PostText(req, cb) {
        let resp = new PostTextResponse();
        this.request("PostText", req, resp, cb);
    }

    /**
     * 机器人会话接口，接收音频信息，传递给后台机器人
     * @param {PostAudioRequest} req
     * @param {function(string, PostAudioResponse):void} cb
     * @public
     */
    PostAudio(req, cb) {
        let resp = new PostAudioResponse();
        this.request("PostAudio", req, resp, cb);
    }


}
module.exports = TbpClient;
