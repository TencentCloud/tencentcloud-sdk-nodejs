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
const PullSmsReplyStatusRequest = models.PullSmsReplyStatusRequest;
const PullSmsReplyStatusByPhoneNumberRequest = models.PullSmsReplyStatusByPhoneNumberRequest;
const PullSmsSendStatus = models.PullSmsSendStatus;
const PullSmsSendStatusRequest = models.PullSmsSendStatusRequest;
const PullSmsSendStatusByPhoneNumberResponse = models.PullSmsSendStatusByPhoneNumberResponse;
const PullSmsReplyStatus = models.PullSmsReplyStatus;
const SendSmsResponse = models.SendSmsResponse;
const PullSmsSendStatusByPhoneNumberRequest = models.PullSmsSendStatusByPhoneNumberRequest;
const SendSmsRequest = models.SendSmsRequest;
const PullSmsReplyStatusResponse = models.PullSmsReplyStatusResponse;
const PullSmsReplyStatusByPhoneNumberResponse = models.PullSmsReplyStatusByPhoneNumberResponse;
const SendStatus = models.SendStatus;
const PullSmsSendStatusResponse = models.PullSmsSendStatusResponse;


/**
 * sms client
 * @class
 */
class SmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sms.tencentcloudapi.com", "2019-07-11", credential, region, profile);
    }
    
    /**
     * 拉取短信回复状态
     * @param {PullSmsReplyStatusRequest} req
     * @param {function(string, PullSmsReplyStatusResponse):void} cb
     * @public
     */
    PullSmsReplyStatus(req, cb) {
        let resp = new PullSmsReplyStatusResponse();
        this.request("PullSmsReplyStatus", req, resp, cb);
    }

    /**
     * 拉取短信下发状态
     * @param {PullSmsSendStatusRequest} req
     * @param {function(string, PullSmsSendStatusResponse):void} cb
     * @public
     */
    PullSmsSendStatus(req, cb) {
        let resp = new PullSmsSendStatusResponse();
        this.request("PullSmsSendStatus", req, resp, cb);
    }

    /**
     * 短信发送接口，用户给用户发短信验证码、通知类短信或营销短信。


     * @param {SendSmsRequest} req
     * @param {function(string, SendSmsResponse):void} cb
     * @public
     */
    SendSms(req, cb) {
        let resp = new SendSmsResponse();
        this.request("SendSms", req, resp, cb);
    }

    /**
     * 拉取单个号码短信下发状态
     * @param {PullSmsSendStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsSendStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsSendStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsSendStatusByPhoneNumberResponse();
        this.request("PullSmsSendStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * 拉取单个号码短信回复状态
     * @param {PullSmsReplyStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsReplyStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsReplyStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsReplyStatusByPhoneNumberResponse();
        this.request("PullSmsReplyStatusByPhoneNumber", req, resp, cb);
    }


}
module.exports = SmsClient;
