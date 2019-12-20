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
const SmsPackagesStatisticsRequest = models.SmsPackagesStatisticsRequest;
const PullSmsSendStatusByPhoneNumberRequest = models.PullSmsSendStatusByPhoneNumberRequest;
const CallbackStatusStatisticsResponse = models.CallbackStatusStatisticsResponse;
const PullSmsSendStatusRequest = models.PullSmsSendStatusRequest;
const SmsPackagesStatistics = models.SmsPackagesStatistics;
const PullSmsSendStatusByPhoneNumberResponse = models.PullSmsSendStatusByPhoneNumberResponse;
const PullSmsReplyStatus = models.PullSmsReplyStatus;
const SendSmsResponse = models.SendSmsResponse;
const SendStatusStatisticsResponse = models.SendStatusStatisticsResponse;
const SendSmsRequest = models.SendSmsRequest;
const SendStatus = models.SendStatus;
const PullSmsSendStatus = models.PullSmsSendStatus;
const CallbackStatusStatistics = models.CallbackStatusStatistics;
const SendStatusStatisticsRequest = models.SendStatusStatisticsRequest;
const PullSmsReplyStatusByPhoneNumberResponse = models.PullSmsReplyStatusByPhoneNumberResponse;
const CallbackStatusStatisticsRequest = models.CallbackStatusStatisticsRequest;
const PullSmsReplyStatusByPhoneNumberRequest = models.PullSmsReplyStatusByPhoneNumberRequest;
const SendStatusStatistics = models.SendStatusStatistics;
const PullSmsSendStatusResponse = models.PullSmsSendStatusResponse;
const SmsPackagesStatisticsResponse = models.SmsPackagesStatisticsResponse;
const PullSmsReplyStatusResponse = models.PullSmsReplyStatusResponse;


/**
 * sms client
 * @class
 */
class SmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sms.tencentcloudapi.com", "2019-07-11", credential, region, profile);
    }
    
    /**
     * 拉取短信下发状态。
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
     * 用户套餐包信息统计。
     * @param {SmsPackagesStatisticsRequest} req
     * @param {function(string, SmsPackagesStatisticsResponse):void} cb
     * @public
     */
    SmsPackagesStatistics(req, cb) {
        let resp = new SmsPackagesStatisticsResponse();
        this.request("SmsPackagesStatistics", req, resp, cb);
    }

    /**
     * 统计用户发送短信的数据。
     * @param {SendStatusStatisticsRequest} req
     * @param {function(string, SendStatusStatisticsResponse):void} cb
     * @public
     */
    SendStatusStatistics(req, cb) {
        let resp = new SendStatusStatisticsResponse();
        this.request("SendStatusStatistics", req, resp, cb);
    }

    /**
     * 统计用户回执的数据。
     * @param {CallbackStatusStatisticsRequest} req
     * @param {function(string, CallbackStatusStatisticsResponse):void} cb
     * @public
     */
    CallbackStatusStatistics(req, cb) {
        let resp = new CallbackStatusStatisticsResponse();
        this.request("CallbackStatusStatistics", req, resp, cb);
    }

    /**
     * 拉取短信回复状态。
     * @param {PullSmsReplyStatusRequest} req
     * @param {function(string, PullSmsReplyStatusResponse):void} cb
     * @public
     */
    PullSmsReplyStatus(req, cb) {
        let resp = new PullSmsReplyStatusResponse();
        this.request("PullSmsReplyStatus", req, resp, cb);
    }

    /**
     * 拉取单个号码短信下发状态。
     * @param {PullSmsSendStatusByPhoneNumberRequest} req
     * @param {function(string, PullSmsSendStatusByPhoneNumberResponse):void} cb
     * @public
     */
    PullSmsSendStatusByPhoneNumber(req, cb) {
        let resp = new PullSmsSendStatusByPhoneNumberResponse();
        this.request("PullSmsSendStatusByPhoneNumber", req, resp, cb);
    }

    /**
     * 拉取单个号码短信回复状态。
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
