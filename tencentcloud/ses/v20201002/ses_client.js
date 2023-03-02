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
const BatchSendEmailRequest = models.BatchSendEmailRequest;
const GetEmailTemplateRequest = models.GetEmailTemplateRequest;
const ListSendTasksResponse = models.ListSendTasksResponse;
const CreateReceiverResponse = models.CreateReceiverResponse;
const CreateEmailTemplateRequest = models.CreateEmailTemplateRequest;
const ListEmailAddressResponse = models.ListEmailAddressResponse;
const ListEmailAddressRequest = models.ListEmailAddressRequest;
const UpdateEmailSmtpPassWordResponse = models.UpdateEmailSmtpPassWordResponse;
const ListReceiversRequest = models.ListReceiversRequest;
const GetEmailIdentityResponse = models.GetEmailIdentityResponse;
const ListBlackEmailAddressRequest = models.ListBlackEmailAddressRequest;
const Attachment = models.Attachment;
const Template = models.Template;
const ListSendTasksRequest = models.ListSendTasksRequest;
const GetSendEmailStatusResponse = models.GetSendEmailStatusResponse;
const SendEmailRequest = models.SendEmailRequest;
const DeleteBlackListRequest = models.DeleteBlackListRequest;
const EmailSender = models.EmailSender;
const BatchSendEmailResponse = models.BatchSendEmailResponse;
const DeleteEmailIdentityRequest = models.DeleteEmailIdentityRequest;
const UpdateEmailIdentityRequest = models.UpdateEmailIdentityRequest;
const GetEmailIdentityRequest = models.GetEmailIdentityRequest;
const DeleteEmailIdentityResponse = models.DeleteEmailIdentityResponse;
const GetStatisticsReportRequest = models.GetStatisticsReportRequest;
const CreateReceiverRequest = models.CreateReceiverRequest;
const SendTaskData = models.SendTaskData;
const TemplatesMetadata = models.TemplatesMetadata;
const DeleteEmailTemplateResponse = models.DeleteEmailTemplateResponse;
const Volume = models.Volume;
const CreateEmailIdentityRequest = models.CreateEmailIdentityRequest;
const UpdateEmailSmtpPassWordRequest = models.UpdateEmailSmtpPassWordRequest;
const ReceiverData = models.ReceiverData;
const UpdateEmailIdentityResponse = models.UpdateEmailIdentityResponse;
const DeleteEmailTemplateRequest = models.DeleteEmailTemplateRequest;
const DeleteBlackListResponse = models.DeleteBlackListResponse;
const UpdateEmailTemplateRequest = models.UpdateEmailTemplateRequest;
const SendEmailStatus = models.SendEmailStatus;
const ListEmailTemplatesRequest = models.ListEmailTemplatesRequest;
const CreateReceiverDetailWithDataResponse = models.CreateReceiverDetailWithDataResponse;
const ReceiverInputData = models.ReceiverInputData;
const CreateReceiverDetailResponse = models.CreateReceiverDetailResponse;
const ListEmailTemplatesResponse = models.ListEmailTemplatesResponse;
const SendEmailResponse = models.SendEmailResponse;
const ListBlackEmailAddressResponse = models.ListBlackEmailAddressResponse;
const GetSendEmailStatusRequest = models.GetSendEmailStatusRequest;
const Simple = models.Simple;
const DeleteReceiverRequest = models.DeleteReceiverRequest;
const ListEmailIdentitiesResponse = models.ListEmailIdentitiesResponse;
const DeleteReceiverResponse = models.DeleteReceiverResponse;
const TemplateContent = models.TemplateContent;
const GetStatisticsReportResponse = models.GetStatisticsReportResponse;
const DeleteEmailAddressRequest = models.DeleteEmailAddressRequest;
const EmailIdentity = models.EmailIdentity;
const BlackEmailAddress = models.BlackEmailAddress;
const CycleEmailParam = models.CycleEmailParam;
const DeleteEmailAddressResponse = models.DeleteEmailAddressResponse;
const CreateEmailIdentityResponse = models.CreateEmailIdentityResponse;
const CreateEmailAddressRequest = models.CreateEmailAddressRequest;
const CreateReceiverDetailRequest = models.CreateReceiverDetailRequest;
const CreateEmailTemplateResponse = models.CreateEmailTemplateResponse;
const ListReceiversResponse = models.ListReceiversResponse;
const CreateEmailAddressResponse = models.CreateEmailAddressResponse;
const UpdateEmailTemplateResponse = models.UpdateEmailTemplateResponse;
const CreateReceiverDetailWithDataRequest = models.CreateReceiverDetailWithDataRequest;
const TimedEmailParam = models.TimedEmailParam;
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
     * 添加收件人地址附带模板参数，使用本接口在添加收件人地址的同时传入模板参数，使每一个收件人地址在发信的时候使用的模板变量取值不同。用户首先调用创建收件人列表接口-CreateReceiver后，然后调用本接口传入收件人地址和发信时的模板参数，最后使用批量发送邮件接口-BatchSendEmail，即可完成批量发信。需要注意的是在使用本接口后BatchSendEmail接口中的Template参数不需再传。用户也可以在控制台上邮件发送-收件人列表菜单中，通过导入文件的方式，导入收件人地址和模板变量和参数值。本接口一次请求的收件人地址数量限制为2W条，本接口同时也可以用来向已经上传完成的收件人列表追加收件人地址，但收件人列表中收件人地址的总量不能超过一定的数量，目前是限制5万条。本接口不支持去除重复的收件人地址，用户需要自己保证上传和追加地址不重复，不与之前上传的地址重复。
     * @param {CreateReceiverDetailWithDataRequest} req
     * @param {function(string, CreateReceiverDetailWithDataResponse):void} cb
     * @public
     */
    CreateReceiverDetailWithData(req, cb) {
        let resp = new CreateReceiverDetailWithDataResponse();
        this.request("CreateReceiverDetailWithData", req, resp, cb);
    }

    /**
     * 获取邮件发送状态。仅支持查询30天之内的数据
默认接口请求频率限制：1次/秒
     * @param {GetSendEmailStatusRequest} req
     * @param {function(string, GetSendEmailStatusResponse):void} cb
     * @public
     */
    GetSendEmailStatus(req, cb) {
        let resp = new GetSendEmailStatusResponse();
        this.request("GetSendEmailStatus", req, resp, cb);
    }

    /**
     * 创建收件人列表，收件人列表是发送批量邮件的目标邮件地址列表。创建列表后，需要上传收件人邮箱地址。之后创建发送任务，关联列表，便可以实现批量发送邮件的功能
     * @param {CreateReceiverRequest} req
     * @param {function(string, CreateReceiverResponse):void} cb
     * @public
     */
    CreateReceiver(req, cb) {
        let resp = new CreateReceiverResponse();
        this.request("CreateReceiver", req, resp, cb);
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
     * 根据收件id删除收件人列表,同时删除列表中的所有收件邮箱
     * @param {DeleteReceiverRequest} req
     * @param {function(string, DeleteReceiverResponse):void} cb
     * @public
     */
    DeleteReceiver(req, cb) {
        let resp = new DeleteReceiverResponse();
        this.request("DeleteReceiver", req, resp, cb);
    }

    /**
     * 创建模板，该模板可以是TXT或者HTML，请注意如果HTML不要包含外部文件的CSS。模板中的变量使用 {{变量名}} 表示。
注意：模板需要审核通过才可以使用。
     * @param {CreateEmailTemplateRequest} req
     * @param {function(string, CreateEmailTemplateResponse):void} cb
     * @public
     */
    CreateEmailTemplate(req, cb) {
        let resp = new CreateEmailTemplateResponse();
        this.request("CreateEmailTemplate", req, resp, cb);
    }

    /**
     * 您可以通过此API批量发送TEXT或者HTML邮件，适用于营销类、通知类邮件。默认仅支持使用模板发送邮件。批量发送之前，需先创建收件人列表，和收件人地址，并通过收件人列表id来进行发送。批量发送任务支持定时发送和周期重复发送，定时发送需传TimedParam，周期重复发送需传CycleParam
     * @param {BatchSendEmailRequest} req
     * @param {function(string, BatchSendEmailResponse):void} cb
     * @public
     */
    BatchSendEmail(req, cb) {
        let resp = new BatchSendEmailResponse();
        this.request("BatchSendEmail", req, resp, cb);
    }

    /**
     * 设置邮箱的smtp密码。若要通过smtp发送邮件，必须为邮箱设置smtp密码。初始时，邮箱没有设置smtp密码，不能使用smtp的方式发送邮件。设置smtp密码后，可以修改密码。
     * @param {UpdateEmailSmtpPassWordRequest} req
     * @param {function(string, UpdateEmailSmtpPassWordResponse):void} cb
     * @public
     */
    UpdateEmailSmtpPassWord(req, cb) {
        let resp = new UpdateEmailSmtpPassWordResponse();
        this.request("UpdateEmailSmtpPassWord", req, resp, cb);
    }

    /**
     * 删除发信模板
     * @param {DeleteEmailTemplateRequest} req
     * @param {function(string, DeleteEmailTemplateResponse):void} cb
     * @public
     */
    DeleteEmailTemplate(req, cb) {
        let resp = new DeleteEmailTemplateResponse();
        this.request("DeleteEmailTemplate", req, resp, cb);
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
     * 分页查询批量发送邮件任务，包含即时发送任务，定时发送任务，周期重复发送任务，查询发送情况，包括请求数量，已发数量，缓存数量，任务状态等信息
     * @param {ListSendTasksRequest} req
     * @param {function(string, ListSendTasksResponse):void} cb
     * @public
     */
    ListSendTasks(req, cb) {
        let resp = new ListSendTasksResponse();
        this.request("ListSendTasks", req, resp, cb);
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
     * 您可以通过此API发送HTML或者TEXT邮件，适用于触发类邮件（验证码、交易类）。默认仅支持使用模板发送邮件。
     * @param {SendEmailRequest} req
     * @param {function(string, SendEmailResponse):void} cb
     * @public
     */
    SendEmail(req, cb) {
        let resp = new SendEmailResponse();
        this.request("SendEmail", req, resp, cb);
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
     * 在创建完收件人列表后，向这个收件人列表中批量增加收件人邮箱地址，一次最大支持2万，异步完成处理。数据量比较大的时候，上传可能需要一点时间，可以通过查询收件人列表了解上传状态和上传数量。本接口与接口CreateReceiverDetailWithData的功能特性基本一致，只是不支持上传发信时的模板参数。用户首先调用创建收件人列表接口-CreateReceiver后，然后调用本接口传入收件人地址，最后使用批量发送邮件接口-BatchSendEmail，即可完成批量发信。本接口也支持追加收件人地址，也不支持去重，需要用户自己保证收件人地址不重复。本接口一次请求的收件人地址数量限制为2W条，但收件人列表中收件人地址的总量不能超过一定的数量，目前是限制5万条。
     * @param {CreateReceiverDetailRequest} req
     * @param {function(string, CreateReceiverDetailResponse):void} cb
     * @public
     */
    CreateReceiverDetail(req, cb) {
        let resp = new CreateReceiverDetailResponse();
        this.request("CreateReceiverDetail", req, resp, cb);
    }

    /**
     * 根据条件查询收件人列表，支持分页，模糊查询，状态查询
     * @param {ListReceiversRequest} req
     * @param {function(string, ListReceiversResponse):void} cb
     * @public
     */
    ListReceivers(req, cb) {
        let resp = new ListReceiversResponse();
        this.request("ListReceivers", req, resp, cb);
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
