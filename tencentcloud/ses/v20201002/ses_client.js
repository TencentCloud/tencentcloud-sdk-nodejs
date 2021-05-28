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
const Simple = models.Simple;
const ListEmailAddressRequest = models.ListEmailAddressRequest;
const GetEmailIdentityResponse = models.GetEmailIdentityResponse;
const ListBlackEmailAddressRequest = models.ListBlackEmailAddressRequest;
const Attachment = models.Attachment;
const Template = models.Template;
const GetSendEmailStatusResponse = models.GetSendEmailStatusResponse;
const SendEmailRequest = models.SendEmailRequest;
const EmailSender = models.EmailSender;
const DeleteEmailIdentityRequest = models.DeleteEmailIdentityRequest;
const UpdateEmailIdentityRequest = models.UpdateEmailIdentityRequest;
const GetEmailIdentityRequest = models.GetEmailIdentityRequest;
const DeleteEmailIdentityResponse = models.DeleteEmailIdentityResponse;
const GetStatisticsReportRequest = models.GetStatisticsReportRequest;
const DeleteEmailTemplateResponse = models.DeleteEmailTemplateResponse;
const Volume = models.Volume;
const CreateEmailTemplateRequest = models.CreateEmailTemplateRequest;
const UpdateEmailTemplateRequest = models.UpdateEmailTemplateRequest;
const UpdateEmailIdentityResponse = models.UpdateEmailIdentityResponse;
const DeleteEmailTemplateRequest = models.DeleteEmailTemplateRequest;
const DeleteBlackListResponse = models.DeleteBlackListResponse;
const SendEmailStatus = models.SendEmailStatus;
const ListEmailTemplatesRequest = models.ListEmailTemplatesRequest;
const DeleteBlackListRequest = models.DeleteBlackListRequest;
const ListEmailTemplatesResponse = models.ListEmailTemplatesResponse;
const SendEmailResponse = models.SendEmailResponse;
const ListBlackEmailAddressResponse = models.ListBlackEmailAddressResponse;
const GetSendEmailStatusRequest = models.GetSendEmailStatusRequest;
const TemplatesMetadata = models.TemplatesMetadata;
const ListEmailIdentitiesResponse = models.ListEmailIdentitiesResponse;
const ListEmailAddressResponse = models.ListEmailAddressResponse;
const TemplateContent = models.TemplateContent;
const GetStatisticsReportResponse = models.GetStatisticsReportResponse;
const DeleteEmailAddressRequest = models.DeleteEmailAddressRequest;
const EmailIdentity = models.EmailIdentity;
const BlackEmailAddress = models.BlackEmailAddress;
const GetEmailTemplateRequest = models.GetEmailTemplateRequest;
const DeleteEmailAddressResponse = models.DeleteEmailAddressResponse;
const CreateEmailIdentityResponse = models.CreateEmailIdentityResponse;
const CreateEmailIdentityRequest = models.CreateEmailIdentityRequest;
const CreateEmailAddressRequest = models.CreateEmailAddressRequest;
const CreateEmailTemplateResponse = models.CreateEmailTemplateResponse;
const CreateEmailAddressResponse = models.CreateEmailAddressResponse;
const UpdateEmailTemplateResponse = models.UpdateEmailTemplateResponse;
const DNSAttributes = models.DNSAttributes;
const GetEmailTemplateResponse = models.GetEmailTemplateResponse;
const ListEmailIdentitiesRequest = models.ListEmailIdentitiesRequest;


/**
 * ses client
 * @class
 */
class SesClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ses.tencentcloudapi.com", "2020-10-02", credential, region, profile);
    }
    
    /**
     * 获取发信地址列表
     * @param {ListEmailAddressRequest} req
     * @param {function(string, ListEmailAddressResponse):void} cb
     * @public
     */
    ListEmailAddress(req, cb) {
        let resp = new ListEmailAddressResponse();
        this.request("ListEmailAddress", req, resp, cb);
    }

    /**
     * 在使用身份发送电子邮件之前，您需要有一个电子邮件域名，该域名可以是您的网站或者移动应用的域名。您首先必须进行验证，证明自己是该域名的所有者，并且授权给腾讯云SES发送许可，才可以从该域名发送电子邮件。
     * @param {CreateEmailIdentityRequest} req
     * @param {function(string, CreateEmailIdentityResponse):void} cb
     * @public
     */
    CreateEmailIdentity(req, cb) {
        let resp = new CreateEmailIdentityResponse();
        this.request("CreateEmailIdentity", req, resp, cb);
    }

    /**
     * 邮箱被拉黑之后，用户如果确认收件邮箱有效或者已经处于激活状态，可以从腾讯云地址库中删除该黑名单之后继续投递。
     * @param {DeleteBlackListRequest} req
     * @param {function(string, DeleteBlackListResponse):void} cb
     * @public
     */
    DeleteBlackList(req, cb) {
        let resp = new DeleteBlackListResponse();
        this.request("DeleteBlackList", req, resp, cb);
    }

    /**
     * 在验证了发信域名之后，您需要一个发信地址来发送邮件。例如发信域名是mail.qcloud.com，那么发信地址可以为 service@mail.qcloud.com。如果您想要收件人在收件箱列表中显示您的别名，例如"腾讯云邮件通知"。那么发信地址为： 别名 空格 尖括号 邮箱地址。请注意中间需要有空格
     * @param {CreateEmailAddressRequest} req
     * @param {function(string, CreateEmailAddressResponse):void} cb
     * @public
     */
    CreateEmailAddress(req, cb) {
        let resp = new CreateEmailAddressResponse();
        this.request("CreateEmailAddress", req, resp, cb);
    }

    /**
     * 创建模板，该模板可以是TXT或者HTML，请注意如果HTML不要包含外部文件的CSS。模板中的变量使用 {{变量名}} 表示。
注意：模版需要审核通过才可以使用。
     * @param {CreateEmailTemplateRequest} req
     * @param {function(string, CreateEmailTemplateResponse):void} cb
     * @public
     */
    CreateEmailTemplate(req, cb) {
        let resp = new CreateEmailTemplateResponse();
        this.request("CreateEmailTemplate", req, resp, cb);
    }

    /**
     * 获取近期发送的统计情况，包含发送量、送达率、打开率、退信率等一系列数据。
     * @param {GetStatisticsReportRequest} req
     * @param {function(string, GetStatisticsReportResponse):void} cb
     * @public
     */
    GetStatisticsReport(req, cb) {
        let resp = new GetStatisticsReportResponse();
        this.request("GetStatisticsReport", req, resp, cb);
    }

    /**
     * 您可以通过此API发送TEXT或者HTML邮件，默认仅支持使用模板发送邮件，如需发送自定义内容，请单独联系商务开通此功能。
     * @param {SendEmailRequest} req
     * @param {function(string, SendEmailResponse):void} cb
     * @public
     */
    SendEmail(req, cb) {
        let resp = new SendEmailResponse();
        this.request("SendEmail", req, resp, cb);
    }

    /**
     * 获取当前发信域名列表，包含已验证通过与未验证的域名
     * @param {ListEmailIdentitiesRequest} req
     * @param {function(string, ListEmailIdentitiesResponse):void} cb
     * @public
     */
    ListEmailIdentities(req, cb) {
        let resp = new ListEmailIdentitiesResponse();
        this.request("ListEmailIdentities", req, resp, cb);
    }

    /**
     * 腾讯云发送的邮件一旦被收件方判断为硬退(Hard Bounce)，腾讯云会拉黑该地址，并不允许所有用户向该地址发送邮件。成为邮箱黑名单。如果业务方确认是误判，可以从黑名单中删除。
     * @param {ListBlackEmailAddressRequest} req
     * @param {function(string, ListBlackEmailAddressResponse):void} cb
     * @public
     */
    ListBlackEmailAddress(req, cb) {
        let resp = new ListBlackEmailAddressResponse();
        this.request("ListBlackEmailAddress", req, resp, cb);
    }

    /**
     * 获取邮件发送状态。仅支持查询90天之内的数据
     * @param {GetSendEmailStatusRequest} req
     * @param {function(string, GetSendEmailStatusResponse):void} cb
     * @public
     */
    GetSendEmailStatus(req, cb) {
        let resp = new GetSendEmailStatusResponse();
        this.request("GetSendEmailStatus", req, resp, cb);
    }

    /**
     * 删除发信模版
     * @param {DeleteEmailTemplateRequest} req
     * @param {function(string, DeleteEmailTemplateResponse):void} cb
     * @public
     */
    DeleteEmailTemplate(req, cb) {
        let resp = new DeleteEmailTemplateResponse();
        this.request("DeleteEmailTemplate", req, resp, cb);
    }

    /**
     * 更新邮件模板，更新后需再次审核
     * @param {UpdateEmailTemplateRequest} req
     * @param {function(string, UpdateEmailTemplateResponse):void} cb
     * @public
     */
    UpdateEmailTemplate(req, cb) {
        let resp = new UpdateEmailTemplateResponse();
        this.request("UpdateEmailTemplate", req, resp, cb);
    }

    /**
     * 获取某个发信域名的配置详情
     * @param {GetEmailIdentityRequest} req
     * @param {function(string, GetEmailIdentityResponse):void} cb
     * @public
     */
    GetEmailIdentity(req, cb) {
        let resp = new GetEmailIdentityResponse();
        this.request("GetEmailIdentity", req, resp, cb);
    }

    /**
     * 获取当前邮件模板列表
     * @param {ListEmailTemplatesRequest} req
     * @param {function(string, ListEmailTemplatesResponse):void} cb
     * @public
     */
    ListEmailTemplates(req, cb) {
        let resp = new ListEmailTemplatesResponse();
        this.request("ListEmailTemplates", req, resp, cb);
    }

    /**
     * 您已经成功配置好了您的DNS，接下来请求腾讯云验证您的DNS配置是否正确
     * @param {UpdateEmailIdentityRequest} req
     * @param {function(string, UpdateEmailIdentityResponse):void} cb
     * @public
     */
    UpdateEmailIdentity(req, cb) {
        let resp = new UpdateEmailIdentityResponse();
        this.request("UpdateEmailIdentity", req, resp, cb);
    }

    /**
     * 根据模板ID获取模板详情
     * @param {GetEmailTemplateRequest} req
     * @param {function(string, GetEmailTemplateResponse):void} cb
     * @public
     */
    GetEmailTemplate(req, cb) {
        let resp = new GetEmailTemplateResponse();
        this.request("GetEmailTemplate", req, resp, cb);
    }

    /**
     * 删除发信域名，删除后，将不可再使用该域名进行发信
     * @param {DeleteEmailIdentityRequest} req
     * @param {function(string, DeleteEmailIdentityResponse):void} cb
     * @public
     */
    DeleteEmailIdentity(req, cb) {
        let resp = new DeleteEmailIdentityResponse();
        this.request("DeleteEmailIdentity", req, resp, cb);
    }

    /**
     * 删除发信人地址
     * @param {DeleteEmailAddressRequest} req
     * @param {function(string, DeleteEmailAddressResponse):void} cb
     * @public
     */
    DeleteEmailAddress(req, cb) {
        let resp = new DeleteEmailAddressResponse();
        this.request("DeleteEmailAddress", req, resp, cb);
    }


}
module.exports = SesClient;
