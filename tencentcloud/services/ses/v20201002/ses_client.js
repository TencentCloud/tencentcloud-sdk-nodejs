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
 * ses client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ses.tencentcloudapi.com", "2020-10-02", clientConfig);
    }
    /**
     * 获取发信地址列表
     */
    async ListEmailAddress(req, cb) {
        return this.request("ListEmailAddress", req, cb);
    }
    /**
     * 在使用身份发送电子邮件之前，您需要有一个电子邮件域名，该域名可以是您的网站或者移动应用的域名。您首先必须进行验证，证明自己是该域名的所有者，并且授权给腾讯云SES发送许可，才可以从该域名发送电子邮件。
     */
    async CreateEmailIdentity(req, cb) {
        return this.request("CreateEmailIdentity", req, cb);
    }
    /**
     * 邮箱被拉黑之后，用户如果确认收件邮箱有效或者已经处于激活状态，可以从腾讯云地址库中删除该黑名单之后继续投递。
     */
    async DeleteBlackList(req, cb) {
        return this.request("DeleteBlackList", req, cb);
    }
    /**
     * 在验证了发信域名之后，您需要一个发信地址来发送邮件。例如发信域名是mail.qcloud.com，那么发信地址可以为 service@mail.qcloud.com。如果您想要收件人在收件箱列表中显示您的别名，例如"腾讯云邮件通知"。那么发信地址为： 别名 空格 尖括号 邮箱地址。请注意中间需要有空格
     */
    async CreateEmailAddress(req, cb) {
        return this.request("CreateEmailAddress", req, cb);
    }
    /**
     * 创建模板，该模板可以是TXT或者HTML，请注意如果HTML不要包含外部文件的CSS。模板中的变量使用 {{变量名}} 表示。
注意：模版需要审核通过才可以使用。
     */
    async CreateEmailTemplate(req, cb) {
        return this.request("CreateEmailTemplate", req, cb);
    }
    /**
     * 获取近期发送的统计情况，包含发送量、送达率、打开率、退信率等一系列数据。
     */
    async GetStatisticsReport(req, cb) {
        return this.request("GetStatisticsReport", req, cb);
    }
    /**
     * 您可以通过此API发送TEXT或者HTML邮件，默认仅支持使用模板发送邮件，如需发送自定义内容，请单独联系商务开通此功能。
     */
    async SendEmail(req, cb) {
        return this.request("SendEmail", req, cb);
    }
    /**
     * 获取当前发信域名列表，包含已验证通过与未验证的域名
     */
    async ListEmailIdentities(req, cb) {
        return this.request("ListEmailIdentities", req, cb);
    }
    /**
     * 腾讯云发送的邮件一旦被收件方判断为硬退(Hard Bounce)，腾讯云会拉黑该地址，并不允许所有用户向该地址发送邮件。成为邮箱黑名单。如果业务方确认是误判，可以从黑名单中删除。
     */
    async ListBlackEmailAddress(req, cb) {
        return this.request("ListBlackEmailAddress", req, cb);
    }
    /**
     * 获取邮件发送状态。仅支持查询90天之内的数据
     */
    async GetSendEmailStatus(req, cb) {
        return this.request("GetSendEmailStatus", req, cb);
    }
    /**
     * 删除发信模版
     */
    async DeleteEmailTemplate(req, cb) {
        return this.request("DeleteEmailTemplate", req, cb);
    }
    /**
     * 更新邮件模板，更新后需再次审核
     */
    async UpdateEmailTemplate(req, cb) {
        return this.request("UpdateEmailTemplate", req, cb);
    }
    /**
     * 获取某个发信域名的配置详情
     */
    async GetEmailIdentity(req, cb) {
        return this.request("GetEmailIdentity", req, cb);
    }
    /**
     * 获取当前邮件模板列表
     */
    async ListEmailTemplates(req, cb) {
        return this.request("ListEmailTemplates", req, cb);
    }
    /**
     * 您已经成功配置好了您的DNS，接下来请求腾讯云验证您的DNS配置是否正确
     */
    async UpdateEmailIdentity(req, cb) {
        return this.request("UpdateEmailIdentity", req, cb);
    }
    /**
     * 根据模板ID获取模板详情
     */
    async GetEmailTemplate(req, cb) {
        return this.request("GetEmailTemplate", req, cb);
    }
    /**
     * 删除发信域名，删除后，将不可再使用该域名进行发信
     */
    async DeleteEmailIdentity(req, cb) {
        return this.request("DeleteEmailIdentity", req, cb);
    }
    /**
     * 删除发信人地址
     */
    async DeleteEmailAddress(req, cb) {
        return this.request("DeleteEmailAddress", req, cb);
    }
}
exports.Client = Client;
