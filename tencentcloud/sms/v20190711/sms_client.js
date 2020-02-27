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
const DeleteSmsTemplateResponse = models.DeleteSmsTemplateResponse;
const ModifySmsTemplateResponse = models.ModifySmsTemplateResponse;
const ModifySmsSignRequest = models.ModifySmsSignRequest;
const AddSmsSignRequest = models.AddSmsSignRequest;
const AddTemplateStatus = models.AddTemplateStatus;
const DescribeSmsTemplateListResponse = models.DescribeSmsTemplateListResponse;
const PullSmsSendStatusByPhoneNumberRequest = models.PullSmsSendStatusByPhoneNumberRequest;
const AddSmsTemplateRequest = models.AddSmsTemplateRequest;
const ModifySmsTemplateRequest = models.ModifySmsTemplateRequest;
const PullSmsReplyStatus = models.PullSmsReplyStatus;
const CallbackStatusStatisticsResponse = models.CallbackStatusStatisticsResponse;
const PullSmsSendStatusRequest = models.PullSmsSendStatusRequest;
const SmsPackagesStatistics = models.SmsPackagesStatistics;
const PullSmsSendStatusByPhoneNumberResponse = models.PullSmsSendStatusByPhoneNumberResponse;
const ModifySignStatus = models.ModifySignStatus;
const DescribeSignListStatus = models.DescribeSignListStatus;
const SendSmsResponse = models.SendSmsResponse;
const SendStatusStatisticsResponse = models.SendStatusStatisticsResponse;
const SendSmsRequest = models.SendSmsRequest;
const SendStatusStatistics = models.SendStatusStatistics;
const CallbackStatusStatisticsRequest = models.CallbackStatusStatisticsRequest;
const DeleteTemplateStatus = models.DeleteTemplateStatus;
const DescribeSmsSignListRequest = models.DescribeSmsSignListRequest;
const SmsPackagesStatisticsRequest = models.SmsPackagesStatisticsRequest;
const DescribeTemplateListStatus = models.DescribeTemplateListStatus;
const AddSmsTemplateResponse = models.AddSmsTemplateResponse;
const PullSmsSendStatus = models.PullSmsSendStatus;
const DescribeSmsSignListResponse = models.DescribeSmsSignListResponse;
const DescribeSmsTemplateListRequest = models.DescribeSmsTemplateListRequest;
const CallbackStatusStatistics = models.CallbackStatusStatistics;
const SendStatusStatisticsRequest = models.SendStatusStatisticsRequest;
const DeleteSmsTemplateRequest = models.DeleteSmsTemplateRequest;
const PullSmsReplyStatusByPhoneNumberResponse = models.PullSmsReplyStatusByPhoneNumberResponse;
const SendStatus = models.SendStatus;
const DeleteSmsSignResponse = models.DeleteSmsSignResponse;
const AddSmsSignResponse = models.AddSmsSignResponse;
const DeleteSmsSignRequest = models.DeleteSmsSignRequest;
const PullSmsReplyStatusByPhoneNumberRequest = models.PullSmsReplyStatusByPhoneNumberRequest;
const ModifySmsSignResponse = models.ModifySmsSignResponse;
const AddSignStatus = models.AddSignStatus;
const ModifyTemplateStatus = models.ModifyTemplateStatus;
const PullSmsSendStatusResponse = models.PullSmsSendStatusResponse;
const SmsPackagesStatisticsResponse = models.SmsPackagesStatisticsResponse;
const DeleteSignStatus = models.DeleteSignStatus;
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
     * 修改短信签名，修改之前请先认证参阅 [腾讯云短信签名审核标准](https://cloud.tencent.com/document/product/382/39022)。
>- ⚠️注意：个人认证用户不支持使用 API 修改短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录控制台修改短信签名。
>- 修改短信签名，仅当签名为待审核或已拒绝状态时，才能进行修改，已审核通过的签名不支持修改。
     * @param {ModifySmsSignRequest} req
     * @param {function(string, ModifySmsSignResponse):void} cb
     * @public
     */
    ModifySmsSign(req, cb) {
        let resp = new ModifySmsSignResponse();
        this.request("ModifySmsSign", req, resp, cb);
    }

    /**
     * 添加短信签名，申请之前请先认证参阅 [腾讯云短信签名审核标准](https://cloud.tencent.com/document/product/382/39022)。
>⚠️注意：个人认证用户不支持使用 API 申请短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录控制台申请短信签名，具体操作请参阅 [创建短信签名](https://cloud.tencent.com/document/product/382/36136#Sign)。
     * @param {AddSmsSignRequest} req
     * @param {function(string, AddSmsSignResponse):void} cb
     * @public
     */
    AddSmsSign(req, cb) {
        let resp = new AddSmsSignResponse();
        this.request("AddSmsSign", req, resp, cb);
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
     * >⚠️注意：个人认证用户不支持使用 API 删除短信正文模版，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，请登录控制台删除短信正文模版，具体操作请参阅 [短信正文模版操作](https://cloud.tencent.com/document/product/382/36136#Template) 中查看删除短信正文模版须知。
     * @param {DeleteSmsTemplateRequest} req
     * @param {function(string, DeleteSmsTemplateResponse):void} cb
     * @public
     */
    DeleteSmsTemplate(req, cb) {
        let resp = new DeleteSmsTemplateResponse();
        this.request("DeleteSmsTemplate", req, resp, cb);
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
     * >⚠️注意：个人认证用户不支持使用 API 查询短信正文模版，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)。
     * @param {DescribeSmsTemplateListRequest} req
     * @param {function(string, DescribeSmsTemplateListResponse):void} cb
     * @public
     */
    DescribeSmsTemplateList(req, cb) {
        let resp = new DescribeSmsTemplateListResponse();
        this.request("DescribeSmsTemplateList", req, resp, cb);
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
     * >⚠️注意：个人认证用户不支持使用 API 查询短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)。
     * @param {DescribeSmsSignListRequest} req
     * @param {function(string, DescribeSmsSignListResponse):void} cb
     * @public
     */
    DescribeSmsSignList(req, cb) {
        let resp = new DescribeSmsSignListResponse();
        this.request("DescribeSmsSignList", req, resp, cb);
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
     * 修改短信正文模版，修改之前请先认真参阅 [腾讯云短信正文模版审核标准](https://cloud.tencent.com/document/product/382/39023)。
>- ⚠️注意：个人认证用户不支持使用 API 修改短信正文模版，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录控制台申请短信正文模版。
>- 修改短信签名，仅当正文模版为待审核或已拒绝状态时，才能进行修改，已审核通过的正文模版不支持修改。
     * @param {ModifySmsTemplateRequest} req
     * @param {function(string, ModifySmsTemplateResponse):void} cb
     * @public
     */
    ModifySmsTemplate(req, cb) {
        let resp = new ModifySmsTemplateResponse();
        this.request("ModifySmsTemplate", req, resp, cb);
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

    /**
     * >⚠️注意：个人认证用户不支持使用 API 删除短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，请登录控制台删除短信签名，具体操作请参阅 [短信签名操作](https://cloud.tencent.com/document/product/382/36136#Sign) 中查看删除短信签名须知。
     * @param {DeleteSmsSignRequest} req
     * @param {function(string, DeleteSmsSignResponse):void} cb
     * @public
     */
    DeleteSmsSign(req, cb) {
        let resp = new DeleteSmsSignResponse();
        this.request("DeleteSmsSign", req, resp, cb);
    }

    /**
     * 添加短信模版，申请之前请先认证参阅 [腾讯云短信正文模版审核标准](https://cloud.tencent.com/document/product/382/39023)。
>⚠️注意：个人认证用户不支持使用 API 申请短信正文模版，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录控制台申请短信正文模版，具体操作请参阅 [创建短信正文模版](https://cloud.tencent.com/document/product/382/36136#Template)。
     * @param {AddSmsTemplateRequest} req
     * @param {function(string, AddSmsTemplateResponse):void} cb
     * @public
     */
    AddSmsTemplate(req, cb) {
        let resp = new AddSmsTemplateResponse();
        this.request("AddSmsTemplate", req, resp, cb);
    }


}
module.exports = SmsClient;
