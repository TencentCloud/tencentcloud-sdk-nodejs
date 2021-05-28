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
const ModifySmsTemplateResponse = models.ModifySmsTemplateResponse;
const SmsAddCrowdPackInfoResponse = models.SmsAddCrowdPackInfoResponse;
const PushMmsContentResponse = models.PushMmsContentResponse;
const AddSmsTemplateDataStruct = models.AddSmsTemplateDataStruct;
const DescribeMmsInstanceListRequest = models.DescribeMmsInstanceListRequest;
const DescribeMmsInstanceInfoResponse = models.DescribeMmsInstanceInfoResponse;
const SendSmsPaasDataStruct = models.SendSmsPaasDataStruct;
const AddCrowdPackInfoResponse = models.AddCrowdPackInfoResponse;
const AddSmsSignRequest = models.AddSmsSignRequest;
const AddSmsSignResponse = models.AddSmsSignResponse;
const GetSmsCampaignStatusRequest = models.GetSmsCampaignStatusRequest;
const DescribeSmsTemplateListResponse = models.DescribeSmsTemplateListResponse;
const MmsInstanceInfoList = models.MmsInstanceInfoList;
const GetCrowdPackListResponse = models.GetCrowdPackListResponse;
const CreateMmsInstanceResp = models.CreateMmsInstanceResp;
const AddSmsTemplateRequest = models.AddSmsTemplateRequest;
const DescribeMmsInstanceInfoRequest = models.DescribeMmsInstanceInfoRequest;
const CreateCampaignResponse = models.CreateCampaignResponse;
const PushMmsContentResp = models.PushMmsContentResp;
const UploadFansInfoCosInfo = models.UploadFansInfoCosInfo;
const CreateCampaignRequest = models.CreateCampaignRequest;
const SmsAmountDataStruct = models.SmsAmountDataStruct;
const AddCrowdPackInfoRequest = models.AddCrowdPackInfoRequest;
const SmsSuccessResponse = models.SmsSuccessResponse;
const SmsGetCrowdPackListResponse = models.SmsGetCrowdPackListResponse;
const DescribeSmsTemplateListDataStruct = models.DescribeSmsTemplateListDataStruct;
const DeleteMmsInstanceResponse = models.DeleteMmsInstanceResponse;
const ModifySmsTemplateRequest = models.ModifySmsTemplateRequest;
const MmsInstanceStateInfo = models.MmsInstanceStateInfo;
const CancelActivityData = models.CancelActivityData;
const SendSmsResponse = models.SendSmsResponse;
const PaasStrategy = models.PaasStrategy;
const CancelCampaignResponse = models.CancelCampaignResponse;
const SmsCampaignStatisticsCrowdData = models.SmsCampaignStatisticsCrowdData;
const DescribeSmsSignListRequest = models.DescribeSmsSignListRequest;
const GetCrowdUploadInfoResponse = models.GetCrowdUploadInfoResponse;
const SmsGetCrowdPackList = models.SmsGetCrowdPackList;
const GetSmsAmountInfoResponse = models.GetSmsAmountInfoResponse;
const DescribeSmsSignListDataStruct = models.DescribeSmsSignListDataStruct;
const GetCrowdPackListRequest = models.GetCrowdPackListRequest;
const AddSmsTemplateResponse = models.AddSmsTemplateResponse;
const PaasCreateSignResp = models.PaasCreateSignResp;
const PaasSmsCampaignStatusResp = models.PaasSmsCampaignStatusResp;
const DelCrowdPackResponse = models.DelCrowdPackResponse;
const DelCrowdPackRequest = models.DelCrowdPackRequest;
const CreateMmsInstanceResponse = models.CreateMmsInstanceResponse;
const DescribeSmsTemplateListRequest = models.DescribeSmsTemplateListRequest;
const DeleteMmsInstanceRequest = models.DeleteMmsInstanceRequest;
const DelMmsInstanceData = models.DelMmsInstanceData;
const PaasStrategyItem = models.PaasStrategyItem;
const GetSmsAmountInfoRequest = models.GetSmsAmountInfoRequest;
const DelTemplateRequest = models.DelTemplateRequest;
const SmsCreateCampaignResponse = models.SmsCreateCampaignResponse;
const ModifySmsTemplateDataStruct = models.ModifySmsTemplateDataStruct;
const PushMmsContentRequest = models.PushMmsContentRequest;
const DescribeMmsInstanceListResponse = models.DescribeMmsInstanceListResponse;
const CreateMmsInstanceItem = models.CreateMmsInstanceItem;
const GetCrowdUploadInfoRequest = models.GetCrowdUploadInfoRequest;
const CancelCampaignRequest = models.CancelCampaignRequest;
const SmsCampaignStatisticsData = models.SmsCampaignStatisticsData;
const MmsInstanceInfo = models.MmsInstanceInfo;
const DelTemplateResponse = models.DelTemplateResponse;
const SmsGetCrowdUploadInfoResponse = models.SmsGetCrowdUploadInfoResponse;
const CreateMmsInstanceRequest = models.CreateMmsInstanceRequest;
const DescribeSmsSignListResponse = models.DescribeSmsSignListResponse;
const DescribeSmsCampaignStatisticsResponse = models.DescribeSmsCampaignStatisticsResponse;
const GetSmsCampaignStatusResponse = models.GetSmsCampaignStatusResponse;
const DescribeSmsCampaignStatisticsRequest = models.DescribeSmsCampaignStatisticsRequest;
const SendSmsRequest = models.SendSmsRequest;
const SmsCampaignStatisticsTemplateData = models.SmsCampaignStatisticsTemplateData;


/**
 * zj client
 * @class
 */
class ZjClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("zj.tencentcloudapi.com", "2019-01-21", credential, region, profile);
    }
    
    /**
     * 获取彩信实例列表
     * @param {DescribeMmsInstanceListRequest} req
     * @param {function(string, DescribeMmsInstanceListResponse):void} cb
     * @public
     */
    DescribeMmsInstanceList(req, cb) {
        let resp = new DescribeMmsInstanceListResponse();
        this.request("DescribeMmsInstanceList", req, resp, cb);
    }

    /**
     * 删除人群包
     * @param {DelCrowdPackRequest} req
     * @param {function(string, DelCrowdPackResponse):void} cb
     * @public
     */
    DelCrowdPack(req, cb) {
        let resp = new DelCrowdPackResponse();
        this.request("DelCrowdPack", req, resp, cb);
    }

    /**
     * 删除短信模板
     * @param {DelTemplateRequest} req
     * @param {function(string, DelTemplateResponse):void} cb
     * @public
     */
    DelTemplate(req, cb) {
        let resp = new DelTemplateResponse();
        this.request("DelTemplate", req, resp, cb);
    }

    /**
     * 添加短信人群包信息
     * @param {AddCrowdPackInfoRequest} req
     * @param {function(string, AddCrowdPackInfoResponse):void} cb
     * @public
     */
    AddCrowdPackInfo(req, cb) {
        let resp = new AddCrowdPackInfoResponse();
        this.request("AddCrowdPackInfo", req, resp, cb);
    }

    /**
     * 创建普通短信签名信息
     * @param {AddSmsSignRequest} req
     * @param {function(string, AddSmsSignResponse):void} cb
     * @public
     */
    AddSmsSign(req, cb) {
        let resp = new AddSmsSignResponse();
        this.request("AddSmsSign", req, resp, cb);
    }

    /**
     * 删除超级短信样例
     * @param {DeleteMmsInstanceRequest} req
     * @param {function(string, DeleteMmsInstanceResponse):void} cb
     * @public
     */
    DeleteMmsInstance(req, cb) {
        let resp = new DeleteMmsInstanceResponse();
        this.request("DeleteMmsInstance", req, resp, cb);
    }

    /**
     * 获取人群包列表接口
     * @param {GetCrowdPackListRequest} req
     * @param {function(string, GetCrowdPackListResponse):void} cb
     * @public
     */
    GetCrowdPackList(req, cb) {
        let resp = new GetCrowdPackListResponse();
        this.request("GetCrowdPackList", req, resp, cb);
    }

    /**
     * 根据短信标题、模板内容等创建短信模板
     * @param {AddSmsTemplateRequest} req
     * @param {function(string, AddSmsTemplateResponse):void} cb
     * @public
     */
    AddSmsTemplate(req, cb) {
        let resp = new AddSmsTemplateResponse();
        this.request("AddSmsTemplate", req, resp, cb);
    }

    /**
     * 发送短信
     * @param {SendSmsRequest} req
     * @param {function(string, SendSmsResponse):void} cb
     * @public
     */
    SendSms(req, cb) {
        let resp = new SendSmsResponse();
        this.request("SendSms", req, resp, cb);
    }

    /**
     * 获取短信活动状态信息
     * @param {GetSmsCampaignStatusRequest} req
     * @param {function(string, GetSmsCampaignStatusResponse):void} cb
     * @public
     */
    GetSmsCampaignStatus(req, cb) {
        let resp = new GetSmsCampaignStatusResponse();
        this.request("GetSmsCampaignStatus", req, resp, cb);
    }

    /**
     * 获取普通短信签名信息
     * @param {DescribeSmsSignListRequest} req
     * @param {function(string, DescribeSmsSignListResponse):void} cb
     * @public
     */
    DescribeSmsSignList(req, cb) {
        let resp = new DescribeSmsSignListResponse();
        this.request("DescribeSmsSignList", req, resp, cb);
    }

    /**
     * 获取模板信息
     * @param {DescribeSmsTemplateListRequest} req
     * @param {function(string, DescribeSmsTemplateListResponse):void} cb
     * @public
     */
    DescribeSmsTemplateList(req, cb) {
        let resp = new DescribeSmsTemplateListResponse();
        this.request("DescribeSmsTemplateList", req, resp, cb);
    }

    /**
     * 获取短信超短活动统计数据
     * @param {DescribeSmsCampaignStatisticsRequest} req
     * @param {function(string, DescribeSmsCampaignStatisticsResponse):void} cb
     * @public
     */
    DescribeSmsCampaignStatistics(req, cb) {
        let resp = new DescribeSmsCampaignStatisticsResponse();
        this.request("DescribeSmsCampaignStatistics", req, resp, cb);
    }

    /**
     * 创建超级短信的素材样例内容
     * @param {CreateMmsInstanceRequest} req
     * @param {function(string, CreateMmsInstanceResponse):void} cb
     * @public
     */
    CreateMmsInstance(req, cb) {
        let resp = new CreateMmsInstanceResponse();
        this.request("CreateMmsInstance", req, resp, cb);
    }

    /**
     * 获取彩信实例信息
     * @param {DescribeMmsInstanceInfoRequest} req
     * @param {function(string, DescribeMmsInstanceInfoResponse):void} cb
     * @public
     */
    DescribeMmsInstanceInfo(req, cb) {
        let resp = new DescribeMmsInstanceInfoResponse();
        this.request("DescribeMmsInstanceInfo", req, resp, cb);
    }

    /**
     * 取消短信推送活动
     * @param {CancelCampaignRequest} req
     * @param {function(string, CancelCampaignResponse):void} cb
     * @public
     */
    CancelCampaign(req, cb) {
        let resp = new CancelCampaignResponse();
        this.request("CancelCampaign", req, resp, cb);
    }

    /**
     * 获取账号短信额度配置信息
     * @param {GetSmsAmountInfoRequest} req
     * @param {function(string, GetSmsAmountInfoResponse):void} cb
     * @public
     */
    GetSmsAmountInfo(req, cb) {
        let resp = new GetSmsAmountInfoResponse();
        this.request("GetSmsAmountInfo", req, resp, cb);
    }

    /**
     * 推送超级短信
     * @param {PushMmsContentRequest} req
     * @param {function(string, PushMmsContentResponse):void} cb
     * @public
     */
    PushMmsContent(req, cb) {
        let resp = new PushMmsContentResponse();
        this.request("PushMmsContent", req, resp, cb);
    }

    /**
     * 创建短信推送活动
     * @param {CreateCampaignRequest} req
     * @param {function(string, CreateCampaignResponse):void} cb
     * @public
     */
    CreateCampaign(req, cb) {
        let resp = new CreateCampaignResponse();
        this.request("CreateCampaign", req, resp, cb);
    }

    /**
     * 获取短信人群包cos上传需要的信息
     * @param {GetCrowdUploadInfoRequest} req
     * @param {function(string, GetCrowdUploadInfoResponse):void} cb
     * @public
     */
    GetCrowdUploadInfo(req, cb) {
        let resp = new GetCrowdUploadInfoResponse();
        this.request("GetCrowdUploadInfo", req, resp, cb);
    }

    /**
     * 对未审核或者审核未通过的短信模板内容进行编辑修改
     * @param {ModifySmsTemplateRequest} req
     * @param {function(string, ModifySmsTemplateResponse):void} cb
     * @public
     */
    ModifySmsTemplate(req, cb) {
        let resp = new ModifySmsTemplateResponse();
        this.request("ModifySmsTemplate", req, resp, cb);
    }


}
module.exports = ZjClient;
