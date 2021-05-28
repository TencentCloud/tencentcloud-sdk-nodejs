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
const SendTtsVoiceResponse = models.SendTtsVoiceResponse;
const SendCodeVoiceResponse = models.SendCodeVoiceResponse;
const SendStatus = models.SendStatus;
const SendCodeVoiceRequest = models.SendCodeVoiceRequest;
const SendTtsVoiceRequest = models.SendTtsVoiceRequest;


/**
 * vms client
 * @class
 */
class VmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vms.tencentcloudapi.com", "2020-09-02", credential, region, profile);
    }
    
    /**
     * 给用户发语音验证码（仅支持数字）。
     * @param {SendCodeVoiceRequest} req
     * @param {function(string, SendCodeVoiceResponse):void} cb
     * @public
     */
    SendCodeVoice(req, cb) {
        let resp = new SendCodeVoiceResponse();
        this.request("SendCodeVoice", req, resp, cb);
    }

    /**
     * 给用户发送指定模板的语音通知。
     * @param {SendTtsVoiceRequest} req
     * @param {function(string, SendTtsVoiceResponse):void} cb
     * @public
     */
    SendTtsVoice(req, cb) {
        let resp = new SendTtsVoiceResponse();
        this.request("SendTtsVoice", req, resp, cb);
    }


}
module.exports = VmsClient;
