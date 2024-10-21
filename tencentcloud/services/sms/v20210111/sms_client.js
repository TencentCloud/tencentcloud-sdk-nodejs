"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * sms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("sms.tencentcloudapi.com", "2021-01-11", clientConfig);
    }
    /**
     * 本接口 (ModifySmsSign) 用于修改短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>修改短信签名前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39022">腾讯云短信签名审核标准。</a></li><li>个人认证用户不支持使用 API 修改短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 修改短信签名。</li><li>修改短信签名，仅当签名为<b>待审核</b>或<b>已拒绝</b>状态时，才能进行修改，<b>已审核通过</b>的签名不支持修改。</li></ul></blockquote>
     */
    async ModifySmsSign(req, cb) {
        return this.request("ModifySmsSign", req, cb);
    }
    /**
     * 本接口 (AddSmsSign) 用于添加短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>添加短信签名前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39022">腾讯云短信签名审核标准。</a></li><li>个人认证用户不支持使用 API 申请短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 申请短信签名。</li></ul></blockquote>
     */
    async AddSmsSign(req, cb) {
        return this.request("AddSmsSign", req, cb);
    }
    /**
     * 本接口 (PullSmsSendStatus) 用于拉取短信下发状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>此接口需要联系  <a href="https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81">腾讯云短信小助手</a> 开通。</li><li>下发状态也支持 <a href="https://cloud.tencent.com/document/product/382/37809#.E7.9F.AD.E4.BF.A1.E7.8A.B6.E6.80.81.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE">配置回调</a> 的方式获取。</li></ul></blockquote>
     */
    async PullSmsSendStatus(req, cb) {
        return this.request("PullSmsSendStatus", req, cb);
    }
    /**
     * 本接口 (SendSms) 用于发送验证码、通知类短信和营销短信。支持国内短信与国际/港澳台短信。
- 当前接口属于 2021-01-11 版本，如果您仍在使用 [2019-07-11 版本](https://cloud.tencent.com/document/product/382/38778)，建议您使用当前最新版本的接口，版本差异可参考[版本描述](https://cloud.tencent.com/document/product/382/63195#.E7.89.88.E6.9C.AC.E6.8F.8F.E8.BF.B0)。
     */
    async SendSms(req, cb) {
        return this.request("SendSms", req, cb);
    }
    /**
     * 本接口 (DeleteSmsTemplate) 用于删除短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 删除短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 删除短信正文模板。</li></ul></blockquote>
     */
    async DeleteSmsTemplate(req, cb) {
        return this.request("DeleteSmsTemplate", req, cb);
    }
    /**
     * 本接口 (SmsPackagesStatistics) 用于统计用户套餐包数据。
     */
    async SmsPackagesStatistics(req, cb) {
        return this.request("SmsPackagesStatistics", req, cb);
    }
    /**
     * 本接口 (SendStatusStatistics) 用于统计用户发送短信的数据。
     */
    async SendStatusStatistics(req, cb) {
        return this.request("SendStatusStatistics", req, cb);
    }
    /**
     * 本接口 (CallbackStatusStatistics) 用于统计用户回执的数据。
     */
    async CallbackStatusStatistics(req, cb) {
        return this.request("CallbackStatusStatistics", req, cb);
    }
    /**
     * 本接口 (DescribeSmsTemplateList) 用于查询短信模板状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 查询短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 查询短信正文模板。</li></ul></blockquote>
     */
    async DescribeSmsTemplateList(req, cb) {
        return this.request("DescribeSmsTemplateList", req, cb);
    }
    /**
     * 本接口 (PullSmsReplyStatus) 用于拉取短信回复状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>此接口需要联系  <a href="https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81">腾讯云短信小助手</a> 开通。</li><li>上行回复也支持 <a href="https://cloud.tencent.com/document/product/382/42907">配置回复回调</a> 的方式获取。</li></ul></blockquote>
     */
    async PullSmsReplyStatus(req, cb) {
        return this.request("PullSmsReplyStatus", req, cb);
    }
    /**
     * 本接口 (DescribeSmsSignList) 用于查询短信签名状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 查询短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 查询短信签名。</li></ul></blockquote>
     */
    async DescribeSmsSignList(req, cb) {
        return this.request("DescribeSmsSignList", req, cb);
    }
    /**
     * 本接口 (PullSmsSendStatusByPhoneNumber) 用于拉取单个号码短信下发状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>下发状态也支持 <a href="https://cloud.tencent.com/document/product/382/37809#.E7.9F.AD.E4.BF.A1.E7.8A.B6.E6.80.81.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE">配置回调</a> 的方式获取。</li></ul></blockquote>
     */
    async PullSmsSendStatusByPhoneNumber(req, cb) {
        return this.request("PullSmsSendStatusByPhoneNumber", req, cb);
    }
    /**
     * 本接口 (ReportConversion) 用于短信转化率上报。将已接收到短信的流水号上报到腾讯云短信服务。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>该接口当前以白名单方式对外开放，如有需要请联系  <a href="https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81">腾讯云短信小助手</a> 开通。</li></ul></blockquote>
     */
    async ReportConversion(req, cb) {
        return this.request("ReportConversion", req, cb);
    }
    /**
     * 本接口 (ModifySmsTemplate) 用于修改短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>修改短信正文模板前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39023">腾讯云短信正文模板审核标准。</a></li><li>个人认证用户不支持使用 API 修改短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 修改短信正文模板。</li><li>修改短信模板，仅当正文模板为<b>待审核</b>或<b>已拒绝</b>状态时，才能进行修改，<b>已审核通过</b>的正文模板不支持修改。</li></ul></blockquote>
     */
    async ModifySmsTemplate(req, cb) {
        return this.request("ModifySmsTemplate", req, cb);
    }
    /**
     * 本接口 (PullSmsReplyStatusByPhoneNumber) 用于拉取单个号码短信回复状态。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>上行回复也支持 <a href="https://cloud.tencent.com/document/product/382/42907">配置回复回调</a> 的方式获取。</li></ul></blockquote>
     */
    async PullSmsReplyStatusByPhoneNumber(req, cb) {
        return this.request("PullSmsReplyStatusByPhoneNumber", req, cb);
    }
    /**
     * 本接口 (DescribePhoneNumberInfo) 用于提供电话号码的信息查询，包括国家（或地区）码、规范的 E.164 格式号码等。
- 例如：查询号码 +86018501234444，可以得到国家码 86、规范的 E.164 号码 +8618501234444 等信息。
     */
    async DescribePhoneNumberInfo(req, cb) {
        return this.request("DescribePhoneNumberInfo", req, cb);
    }
    /**
     * 本接口 (DeleteSmsSign) 用于删除短信签名。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>个人认证用户不支持使用 API 删除短信签名，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 删除短信签名。</li></ul></blockquote>
     */
    async DeleteSmsSign(req, cb) {
        return this.request("DeleteSmsSign", req, cb);
    }
    /**
     * 本接口 (AddSmsTemplate) 用于创建短信模板。
<blockquote class="d-mod-explain"><div class="d-mod-title d-explain-title" style="line-height: normal;"><i class="d-icon-explain"></i>说明：</div><p></p><ul><li>申请短信模板前，请先认真参阅 <a href="https://cloud.tencent.com/document/product/382/39023">腾讯云短信正文模板审核标准。</a></li><li>个人认证用户不支持使用 API 申请短信正文模板，请参阅了解 <a href="https://cloud.tencent.com/document/product/378/3629">实名认证基本介绍</a>，如果为个人认证请登录 <a href="https://console.cloud.tencent.com/smsv2">控制台</a> 申请短信正文模板。</li></ul></blockquote>
     */
    async AddSmsTemplate(req, cb) {
        return this.request("AddSmsTemplate", req, cb);
    }
}
exports.Client = Client;
