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
const ResourceUrlInfo = models.ResourceUrlInfo;
const SyncProxyOrganizationResponse = models.SyncProxyOrganizationResponse;
const FlowApproverInfo = models.FlowApproverInfo;
const PrepareFlowsResponse = models.PrepareFlowsResponse;
const ProxyOrganizationOperator = models.ProxyOrganizationOperator;
const TemplateInfo = models.TemplateInfo;
const GetDownloadFlowUrlResponse = models.GetDownloadFlowUrlResponse;
const DescribeResourceUrlsByFlowsResponse = models.DescribeResourceUrlsByFlowsResponse;
const Recipient = models.Recipient;
const DescribeTemplatesResponse = models.DescribeTemplatesResponse;
const OperateChannelTemplateResponse = models.OperateChannelTemplateResponse;
const CreateSignUrlsRequest = models.CreateSignUrlsRequest;
const AuthFailMessage = models.AuthFailMessage;
const DescribeFlowDetailInfoRequest = models.DescribeFlowDetailInfoRequest;
const UploadFilesRequest = models.UploadFilesRequest;
const DescribeResourceUrlsByFlowsRequest = models.DescribeResourceUrlsByFlowsRequest;
const UploadFile = models.UploadFile;
const Component = models.Component;
const GetDownloadFlowUrlRequest = models.GetDownloadFlowUrlRequest;
const FlowDetailInfo = models.FlowDetailInfo;
const CreateConsoleLoginUrlRequest = models.CreateConsoleLoginUrlRequest;
const CreateFlowsByTemplatesResponse = models.CreateFlowsByTemplatesResponse;
const PrepareFlowsRequest = models.PrepareFlowsRequest;
const SyncProxyOrganizationOperatorsResponse = models.SyncProxyOrganizationOperatorsResponse;
const CreateSealByImageResponse = models.CreateSealByImageResponse;
const FlowResourceUrlInfo = models.FlowResourceUrlInfo;
const DescribeTemplatesRequest = models.DescribeTemplatesRequest;
const SyncProxyOrganizationOperatorsRequest = models.SyncProxyOrganizationOperatorsRequest;
const CreateConsoleLoginUrlResponse = models.CreateConsoleLoginUrlResponse;
const CreateFlowsByTemplatesRequest = models.CreateFlowsByTemplatesRequest;
const SyncProxyOrganizationRequest = models.SyncProxyOrganizationRequest;
const CreateSealByImageRequest = models.CreateSealByImageRequest;
const UserInfo = models.UserInfo;
const UsageDetail = models.UsageDetail;
const CreateSignUrlsResponse = models.CreateSignUrlsResponse;
const OperateChannelTemplateRequest = models.OperateChannelTemplateRequest;
const DownloadFlowInfo = models.DownloadFlowInfo;
const CcInfo = models.CcInfo;
const SyncFailReason = models.SyncFailReason;
const DescribeUsageRequest = models.DescribeUsageRequest;
const ChannelCreateFlowByFilesRequest = models.ChannelCreateFlowByFilesRequest;
const ChannelCreateFlowByFilesResponse = models.ChannelCreateFlowByFilesResponse;
const UploadFilesResponse = models.UploadFilesResponse;
const Agent = models.Agent;
const FormField = models.FormField;
const FlowApproverDetail = models.FlowApproverDetail;
const FlowInfo = models.FlowInfo;
const SignUrlInfo = models.SignUrlInfo;
const DescribeUsageResponse = models.DescribeUsageResponse;
const DescribeFlowDetailInfoResponse = models.DescribeFlowDetailInfoResponse;


/**
 * essbasic client
 * @class
 */
class EssbasicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("essbasic.tencentcloudapi.com", "2021-05-26", credential, region, profile);
    }
    
    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建流程。当前可批量发起合同（流程）数量最大为20个。
     * @param {CreateFlowsByTemplatesRequest} req
     * @param {function(string, CreateFlowsByTemplatesResponse):void} cb
     * @public
     */
    CreateFlowsByTemplates(req, cb) {
        let resp = new CreateFlowsByTemplatesResponse();
        this.request("CreateFlowsByTemplates", req, resp, cb);
    }

    /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载地址，让合作企业进入控制台直接下载，支持客户合同（流程）按照自定义文件夹形式 分类下载。
当前接口限制最多合同（流程）50个.

     * @param {GetDownloadFlowUrlRequest} req
     * @param {function(string, GetDownloadFlowUrlResponse):void} cb
     * @public
     */
    GetDownloadFlowUrl(req, cb) {
        let resp = new GetDownloadFlowUrlResponse();
        this.request("GetDownloadFlowUrl", req, resp, cb);
    }

    /**
     * 通过此接口（DescribeTemplates）查询该企业在电子签渠道版中配置的有效模板列表
     * @param {DescribeTemplatesRequest} req
     * @param {function(string, DescribeTemplatesResponse):void} cb
     * @public
     */
    DescribeTemplates(req, cb) {
        let resp = new DescribeTemplatesResponse();
        this.request("DescribeTemplates", req, resp, cb);
    }

    /**
     * 接口（ChannelCreateFlowByFiles）用于渠道版通过文件创建流程。此接口不可直接使用，需要运营申请
     * @param {ChannelCreateFlowByFilesRequest} req
     * @param {function(string, ChannelCreateFlowByFilesResponse):void} cb
     * @public
     */
    ChannelCreateFlowByFiles(req, cb) {
        let resp = new ChannelCreateFlowByFilesResponse();
        this.request("ChannelCreateFlowByFiles", req, resp, cb);
    }

    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，不建议使用。
     * @param {PrepareFlowsRequest} req
     * @param {function(string, PrepareFlowsResponse):void} cb
     * @public
     */
    PrepareFlows(req, cb) {
        let resp = new PrepareFlowsResponse();
        this.request("PrepareFlows", req, resp, cb);
    }

    /**
     * 此接口（OperateChannelTemplate）用于渠道侧将模板库中的模板对合作企业进行查询和设置, 其中包括可见性的修改以及对合作企业的设置.
1、同步标识=select时：
返回渠道侧模板库当前模板的属性.
2、同步标识=update或者delete时：
对渠道子客进行模板库中模板授权,修改操作
     * @param {OperateChannelTemplateRequest} req
     * @param {function(string, OperateChannelTemplateResponse):void} cb
     * @public
     */
    OperateChannelTemplate(req, cb) {
        let resp = new OperateChannelTemplateResponse();
        this.request("OperateChannelTemplate", req, resp, cb);
    }

    /**
     * 渠道通过图片为子客代创建印章，图片最大5m；此接口不可直接使用，需要运营申请
     * @param {CreateSealByImageRequest} req
     * @param {function(string, CreateSealByImageResponse):void} cb
     * @public
     */
    CreateSealByImage(req, cb) {
        let resp = new CreateSealByImageResponse();
        this.request("CreateSealByImage", req, resp, cb);
    }

    /**
     * 创建参与者签署短链
     * @param {CreateSignUrlsRequest} req
     * @param {function(string, CreateSignUrlsResponse):void} cb
     * @public
     */
    CreateSignUrls(req, cb) {
        let resp = new CreateSignUrlsResponse();
        this.request("CreateSignUrls", req, resp, cb);
    }

    /**
     * 此接口（CreateConsoleLoginUrl）用于创建电子签控制台登录链接。若企业未激活，调用同步企业信息、同步经办人信息

     * @param {CreateConsoleLoginUrlRequest} req
     * @param {function(string, CreateConsoleLoginUrlResponse):void} cb
     * @public
     */
    CreateConsoleLoginUrl(req, cb) {
        let resp = new CreateConsoleLoginUrlResponse();
        this.request("CreateConsoleLoginUrl", req, resp, cb);
    }

    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道合作企业经办人列表
     * @param {SyncProxyOrganizationOperatorsRequest} req
     * @param {function(string, SyncProxyOrganizationOperatorsResponse):void} cb
     * @public
     */
    SyncProxyOrganizationOperators(req, cb) {
        let resp = new SyncProxyOrganizationOperatorsResponse();
        this.request("SyncProxyOrganizationOperators", req, resp, cb);
    }

    /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     * @param {DescribeUsageRequest} req
     * @param {function(string, DescribeUsageResponse):void} cb
     * @public
     */
    DescribeUsage(req, cb) {
        let resp = new DescribeUsageResponse();
        this.request("DescribeUsage", req, resp, cb);
    }

    /**
     * 此接口（DescribeFlowDetailInfo）用于查询合同(流程)的详细信息。
     * @param {DescribeFlowDetailInfoRequest} req
     * @param {function(string, DescribeFlowDetailInfoResponse):void} cb
     * @public
     */
    DescribeFlowDetailInfo(req, cb) {
        let resp = new DescribeFlowDetailInfoResponse();
        this.request("DescribeFlowDetailInfo", req, resp, cb);
    }

    /**
     * 此接口（SyncProxyOrganization）用于同步渠道侧企业信息
     * @param {SyncProxyOrganizationRequest} req
     * @param {function(string, SyncProxyOrganizationResponse):void} cb
     * @public
     */
    SyncProxyOrganization(req, cb) {
        let resp = new SyncProxyOrganizationResponse();
        this.request("SyncProxyOrganization", req, resp, cb);
    }

    /**
     * 根据流程信息批量获取资源下载链接，可直接下载
限制：只能下载合作企业授权过的、单方签署的流程文件（若合作企业与渠道是同一企业，可以下载所有流程文件）
     * @param {DescribeResourceUrlsByFlowsRequest} req
     * @param {function(string, DescribeResourceUrlsByFlowsResponse):void} cb
     * @public
     */
    DescribeResourceUrlsByFlows(req, cb) {
        let resp = new DescribeResourceUrlsByFlowsResponse();
        this.request("DescribeResourceUrlsByFlows", req, resp, cb);
    }

    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn
     * @param {UploadFilesRequest} req
     * @param {function(string, UploadFilesResponse):void} cb
     * @public
     */
    UploadFiles(req, cb) {
        let resp = new UploadFilesResponse();
        this.request("UploadFiles", req, resp, cb);
    }


}
module.exports = EssbasicClient;
