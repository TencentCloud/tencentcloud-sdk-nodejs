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
const SyncProxyOrganizationResponse = models.SyncProxyOrganizationResponse;
const ChannelCreateConvertTaskApiResponse = models.ChannelCreateConvertTaskApiResponse;
const ChannelCreateFlowRemindsResponse = models.ChannelCreateFlowRemindsResponse;
const ChannelDeleteSealPoliciesRequest = models.ChannelDeleteSealPoliciesRequest;
const ChannelBatchCancelFlowsResponse = models.ChannelBatchCancelFlowsResponse;
const Department = models.Department;
const ChannelCreateFlowSignReviewRequest = models.ChannelCreateFlowSignReviewRequest;
const AuthFailMessage = models.AuthFailMessage;
const DescribeFlowDetailInfoRequest = models.DescribeFlowDetailInfoRequest;
const ModifyExtendedServiceRequest = models.ModifyExtendedServiceRequest;
const DescribeResourceUrlsByFlowsRequest = models.DescribeResourceUrlsByFlowsRequest;
const RemindFlowRecords = models.RemindFlowRecords;
const ChannelCreateFlowSignUrlResponse = models.ChannelCreateFlowSignUrlResponse;
const CreateSealByImageResponse = models.CreateSealByImageResponse;
const OperateChannelTemplateResponse = models.OperateChannelTemplateResponse;
const FlowFileInfo = models.FlowFileInfo;
const CreateConsoleLoginUrlResponse = models.CreateConsoleLoginUrlResponse;
const SyncProxyOrganizationRequest = models.SyncProxyOrganizationRequest;
const CreateSealByImageRequest = models.CreateSealByImageRequest;
const ChannelCreateFlowRemindsRequest = models.ChannelCreateFlowRemindsRequest;
const ChannelCreateSealPolicyResponse = models.ChannelCreateSealPolicyResponse;
const ChannelCancelFlowResponse = models.ChannelCancelFlowResponse;
const DownloadFlowInfo = models.DownloadFlowInfo;
const FlowApproverUrlInfo = models.FlowApproverUrlInfo;
const ChannelCreateConvertTaskApiRequest = models.ChannelCreateConvertTaskApiRequest;
const ChannelCreateFlowByFilesRequest = models.ChannelCreateFlowByFilesRequest;
const Agent = models.Agent;
const FlowApproverDetail = models.FlowApproverDetail;
const RelieveInfo = models.RelieveInfo;
const ChannelCreateFlowGroupByFilesRequest = models.ChannelCreateFlowGroupByFilesRequest;
const DescribeFlowDetailInfoResponse = models.DescribeFlowDetailInfoResponse;
const ResourceUrlInfo = models.ResourceUrlInfo;
const FlowApproverInfo = models.FlowApproverInfo;
const PrepareFlowsResponse = models.PrepareFlowsResponse;
const TemplateInfo = models.TemplateInfo;
const GetDownloadFlowUrlResponse = models.GetDownloadFlowUrlResponse;
const Recipient = models.Recipient;
const DescribeTemplatesResponse = models.DescribeTemplatesResponse;
const StaffRole = models.StaffRole;
const ChannelVerifyPdfRequest = models.ChannelVerifyPdfRequest;
const CreateChannelFlowEvidenceReportRequest = models.CreateChannelFlowEvidenceReportRequest;
const ChannelVerifyPdfResponse = models.ChannelVerifyPdfResponse;
const CreateConsoleLoginUrlRequest = models.CreateConsoleLoginUrlRequest;
const OrganizationInfo = models.OrganizationInfo;
const PdfVerifyResult = models.PdfVerifyResult;
const ChannelCancelMultiFlowSignQRCodeRequest = models.ChannelCancelMultiFlowSignQRCodeRequest;
const UploadFilesRequest = models.UploadFilesRequest;
const ChannelDescribeOrganizationSealsRequest = models.ChannelDescribeOrganizationSealsRequest;
const DescribeUsageRequest = models.DescribeUsageRequest;
const DescribeExtendedServiceAuthInfoRequest = models.DescribeExtendedServiceAuthInfoRequest;
const FormField = models.FormField;
const FlowInfo = models.FlowInfo;
const UserInfo = models.UserInfo;
const TaskInfo = models.TaskInfo;
const DescribeUsageResponse = models.DescribeUsageResponse;
const Staff = models.Staff;
const ChannelCreateBoundFlowsRequest = models.ChannelCreateBoundFlowsRequest;
const ChannelDescribeEmployeesRequest = models.ChannelDescribeEmployeesRequest;
const AuthorizedUser = models.AuthorizedUser;
const DescribeResourceUrlsByFlowsResponse = models.DescribeResourceUrlsByFlowsResponse;
const SyncProxyOrganizationOperatorsRequest = models.SyncProxyOrganizationOperatorsRequest;
const CreateSignUrlsRequest = models.CreateSignUrlsRequest;
const ChannelCreateMultiFlowSignQRCodeRequest = models.ChannelCreateMultiFlowSignQRCodeRequest;
const SignQrCode = models.SignQrCode;
const ChannelGetTaskResultApiRequest = models.ChannelGetTaskResultApiRequest;
const FlowDetailInfo = models.FlowDetailInfo;
const CreateFlowsByTemplatesResponse = models.CreateFlowsByTemplatesResponse;
const DescribeChannelFlowEvidenceReportRequest = models.DescribeChannelFlowEvidenceReportRequest;
const SyncProxyOrganizationOperatorsResponse = models.SyncProxyOrganizationOperatorsResponse;
const SignUrlInfo = models.SignUrlInfo;
const FlowResourceUrlInfo = models.FlowResourceUrlInfo;
const UploadFile = models.UploadFile;
const ExtentServiceAuthInfo = models.ExtentServiceAuthInfo;
const Filter = models.Filter;
const ReleasedApprover = models.ReleasedApprover;
const CreateSignUrlsResponse = models.CreateSignUrlsResponse;
const UploadFilesResponse = models.UploadFilesResponse;
const ChannelCreateBatchCancelFlowUrlRequest = models.ChannelCreateBatchCancelFlowUrlRequest;
const ApproverRestriction = models.ApproverRestriction;
const PrepareFlowsRequest = models.PrepareFlowsRequest;
const ChannelCreateFlowByFilesResponse = models.ChannelCreateFlowByFilesResponse;
const ChannelCreateFlowSignReviewResponse = models.ChannelCreateFlowSignReviewResponse;
const ChannelDescribeOrganizationSealsResponse = models.ChannelDescribeOrganizationSealsResponse;
const ChannelCancelMultiFlowSignQRCodeResponse = models.ChannelCancelMultiFlowSignQRCodeResponse;
const ChannelCreateReleaseFlowRequest = models.ChannelCreateReleaseFlowRequest;
const ChannelCreateFlowGroupByFilesResponse = models.ChannelCreateFlowGroupByFilesResponse;
const ChannelCreateMultiFlowSignQRCodeResponse = models.ChannelCreateMultiFlowSignQRCodeResponse;
const ApproverOption = models.ApproverOption;
const ChannelCreateBoundFlowsResponse = models.ChannelCreateBoundFlowsResponse;
const ProxyOrganizationOperator = models.ProxyOrganizationOperator;
const ModifyExtendedServiceResponse = models.ModifyExtendedServiceResponse;
const ChannelGetTaskResultApiResponse = models.ChannelGetTaskResultApiResponse;
const ChannelDeleteSealPoliciesResponse = models.ChannelDeleteSealPoliciesResponse;
const Component = models.Component;
const GetDownloadFlowUrlRequest = models.GetDownloadFlowUrlRequest;
const ChannelBatchCancelFlowsRequest = models.ChannelBatchCancelFlowsRequest;
const ChannelUpdateSealStatusRequest = models.ChannelUpdateSealStatusRequest;
const SignUrl = models.SignUrl;
const ChannelCancelFlowRequest = models.ChannelCancelFlowRequest;
const DescribeTemplatesRequest = models.DescribeTemplatesRequest;
const ChannelCreateSealPolicyRequest = models.ChannelCreateSealPolicyRequest;
const OccupiedSeal = models.OccupiedSeal;
const CreateFlowsByTemplatesRequest = models.CreateFlowsByTemplatesRequest;
const UsageDetail = models.UsageDetail;
const ChannelCreateBatchCancelFlowUrlResponse = models.ChannelCreateBatchCancelFlowUrlResponse;
const OperateChannelTemplateRequest = models.OperateChannelTemplateRequest;
const CreateChannelFlowEvidenceReportResponse = models.CreateChannelFlowEvidenceReportResponse;
const SyncFailReason = models.SyncFailReason;
const ChannelDescribeEmployeesResponse = models.ChannelDescribeEmployeesResponse;
const ChannelCreateReleaseFlowResponse = models.ChannelCreateReleaseFlowResponse;
const DescribeChannelFlowEvidenceReportResponse = models.DescribeChannelFlowEvidenceReportResponse;
const ChannelUpdateSealStatusResponse = models.ChannelUpdateSealStatusResponse;
const ChannelCreateFlowSignUrlRequest = models.ChannelCreateFlowSignUrlRequest;
const DescribeExtendedServiceAuthInfoResponse = models.DescribeExtendedServiceAuthInfoResponse;
const CcInfo = models.CcInfo;


/**
 * essbasic client
 * @class
 */
class EssbasicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("essbasic.tencentcloudapi.com", "2021-05-26", credential, region, profile);
    }
    
    /**
     * 删除指定印章下多个授权信息
     * @param {ChannelDeleteSealPoliciesRequest} req
     * @param {function(string, ChannelDeleteSealPoliciesResponse):void} cb
     * @public
     */
    ChannelDeleteSealPolicies(req, cb) {
        let resp = new ChannelDeleteSealPoliciesResponse();
        this.request("ChannelDeleteSealPolicies", req, resp, cb);
    }

    /**
     * 提交企业签署流程审批结果

在通过接口(CreateFlowsByTemplates 或者ChannelCreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true,则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     * @param {ChannelCreateFlowSignReviewRequest} req
     * @param {function(string, ChannelCreateFlowSignReviewResponse):void} cb
     * @public
     */
    ChannelCreateFlowSignReview(req, cb) {
        let resp = new ChannelCreateFlowSignReviewResponse();
        this.request("ChannelCreateFlowSignReview", req, resp, cb);
    }

    /**
     * 此接口（ChannelCreateMultiFlowSignQRCode）用于创建一码多扫签署流程二维码。
适用的模版仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模版，且模版中发起方没有填写控件。
     * @param {ChannelCreateMultiFlowSignQRCodeRequest} req
     * @param {function(string, ChannelCreateMultiFlowSignQRCodeResponse):void} cb
     * @public
     */
    ChannelCreateMultiFlowSignQRCode(req, cb) {
        let resp = new ChannelCreateMultiFlowSignQRCodeResponse();
        this.request("ChannelCreateMultiFlowSignQRCode", req, resp, cb);
    }

    /**
     * 接口（ChannelCreateFlowByFiles）用于通过文件创建签署流程。此接口静默签能力不可直接使用，需要运营申请
     * @param {ChannelCreateFlowByFilesRequest} req
     * @param {function(string, ChannelCreateFlowByFilesResponse):void} cb
     * @public
     */
    ChannelCreateFlowByFiles(req, cb) {
        let resp = new ChannelCreateFlowByFilesResponse();
        this.request("ChannelCreateFlowByFiles", req, resp, cb);
    }

    /**
     * 渠道通过图片为子客代创建印章，图片最大5MB
     * @param {CreateSealByImageRequest} req
     * @param {function(string, CreateSealByImageResponse):void} cb
     * @public
     */
    CreateSealByImage(req, cb) {
        let resp = new CreateSealByImageResponse();
        this.request("CreateSealByImage", req, resp, cb);
    }

    /**
     * 此接口（ChannelCancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     * @param {ChannelCancelMultiFlowSignQRCodeRequest} req
     * @param {function(string, ChannelCancelMultiFlowSignQRCodeResponse):void} cb
     * @public
     */
    ChannelCancelMultiFlowSignQRCode(req, cb) {
        let resp = new ChannelCancelMultiFlowSignQRCodeResponse();
        this.request("ChannelCancelMultiFlowSignQRCode", req, resp, cb);
    }

    /**
     * 查询企业扩展服务授权信息，企业经办人需要是企业超管或者法人
     * @param {DescribeExtendedServiceAuthInfoRequest} req
     * @param {function(string, DescribeExtendedServiceAuthInfoResponse):void} cb
     * @public
     */
    DescribeExtendedServiceAuthInfo(req, cb) {
        let resp = new DescribeExtendedServiceAuthInfoResponse();
        this.request("DescribeExtendedServiceAuthInfo", req, resp, cb);
    }

    /**
     * 修改（操作）企业扩展服务 ，企业经办人需要是企业超管或者法人
     * @param {ModifyExtendedServiceRequest} req
     * @param {function(string, ModifyExtendedServiceResponse):void} cb
     * @public
     */
    ModifyExtendedService(req, cb) {
        let resp = new ModifyExtendedServiceResponse();
        this.request("ModifyExtendedService", req, resp, cb);
    }

    /**
     * 创建文件转换任务
     * @param {ChannelCreateConvertTaskApiRequest} req
     * @param {function(string, ChannelCreateConvertTaskApiResponse):void} cb
     * @public
     */
    ChannelCreateConvertTaskApi(req, cb) {
        let resp = new ChannelCreateConvertTaskApiResponse();
        this.request("ChannelCreateConvertTaskApi", req, resp, cb);
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
     * 撤销签署流程接口，可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     * @param {ChannelCancelFlowRequest} req
     * @param {function(string, ChannelCancelFlowResponse):void} cb
     * @public
     */
    ChannelCancelFlow(req, cb) {
        let resp = new ChannelCancelFlowResponse();
        this.request("ChannelCancelFlow", req, resp, cb);
    }

    /**
     * 将指定印章授权给子客企业下的某些员工
     * @param {ChannelCreateSealPolicyRequest} req
     * @param {function(string, ChannelCreateSealPolicyResponse):void} cb
     * @public
     */
    ChannelCreateSealPolicy(req, cb) {
        let resp = new ChannelCreateSealPolicyResponse();
        this.request("ChannelCreateSealPolicy", req, resp, cb);
    }

    /**
     * 查询子客企业电子印章，需要操作者具有管理印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     * @param {ChannelDescribeOrganizationSealsRequest} req
     * @param {function(string, ChannelDescribeOrganizationSealsResponse):void} cb
     * @public
     */
    ChannelDescribeOrganizationSeals(req, cb) {
        let resp = new ChannelDescribeOrganizationSealsResponse();
        this.request("ChannelDescribeOrganizationSeals", req, resp, cb);
    }

    /**
     * 创建跳转小程序查看或签署的链接。

跳转小程序的几种方式：主要是设置不同的EndPoint
1. 通过链接Url直接跳转到小程序，不需要返回
设置EndPoint为WEIXINAPP，得到链接打开即可。（与短信提醒用户签署形式一样）。
2. 通过链接Url打开H5引导页-->点击跳转到小程序-->签署完退出小程序-->回到H5引导页-->跳转到指定JumpUrl
设置EndPoint为CHANNEL，指定JumpUrl，得到链接打开即可。
3. 客户App直接跳转到小程序-->小程序签署完成-->返回App
跳转到小程序的实现，参考官方文档（分为全屏、半屏两种方式）
全屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html）
半屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html）
其中小程序的原始Id，请联系<对接技术人员>获取，或者查看小程序信息自助获取。
使用CreateSignUrls，设置EndPoint为APP，得到path。
4. 客户小程序直接跳到电子签小程序-->签署完成退出电子签小程序-->回到客户小程序
实现方式同App跳小程序。
     * @param {CreateSignUrlsRequest} req
     * @param {function(string, CreateSignUrlsResponse):void} cb
     * @public
     */
    CreateSignUrls(req, cb) {
        let resp = new CreateSignUrlsResponse();
        this.request("CreateSignUrls", req, resp, cb);
    }

    /**
     * 此接口（CreateConsoleLoginUrl）用于创建渠道子客企业控制台Web/移动登录链接。登录链接是子客控制台的唯一入口。
若子客企业未激活，会进入企业激活流程，首次参与激活流程的经办人会成为超管。（若企业激活过程中填写信息有误，需要重置激活流程，可以换一个经办人OpenId获取新的链接进入。）
若子客企业已激活，使用了新的经办人OpenId进入，则会进入经办人的实名流程。
若子客企业、经办人均已完成认证，则会直接进入子客Web控制台。
     * @param {CreateConsoleLoginUrlRequest} req
     * @param {function(string, CreateConsoleLoginUrlResponse):void} cb
     * @public
     */
    CreateConsoleLoginUrl(req, cb) {
        let resp = new CreateConsoleLoginUrlResponse();
        this.request("CreateConsoleLoginUrl", req, resp, cb);
    }

    /**
     * 此接口（ChannelCreateBoundFlows）用于子客领取合同，经办人需要有相应的角色，领取后的合同不能重复领取。
     * @param {ChannelCreateBoundFlowsRequest} req
     * @param {function(string, ChannelCreateBoundFlowsResponse):void} cb
     * @public
     */
    ChannelCreateBoundFlows(req, cb) {
        let resp = new ChannelCreateBoundFlowsResponse();
        this.request("ChannelCreateBoundFlows", req, resp, cb);
    }

    /**
     * 指定需要批量撤销的签署流程Id，获取批量撤销链接 - 不建议使用此接口，可使用ChannelBatchCancelFlows
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；
接口调用成功返回批量撤销合同的链接，通过链接跳转到电子签小程序完成批量撤销;
可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     * @param {ChannelCreateBatchCancelFlowUrlRequest} req
     * @param {function(string, ChannelCreateBatchCancelFlowUrlResponse):void} cb
     * @public
     */
    ChannelCreateBatchCancelFlowUrl(req, cb) {
        let resp = new ChannelCreateBatchCancelFlowUrlResponse();
        this.request("ChannelCreateBatchCancelFlowUrl", req, resp, cb);
    }

    /**
     * 查询转换任务状态
     * @param {ChannelGetTaskResultApiRequest} req
     * @param {function(string, ChannelGetTaskResultApiResponse):void} cb
     * @public
     */
    ChannelGetTaskResultApi(req, cb) {
        let resp = new ChannelGetTaskResultApiResponse();
        this.request("ChannelGetTaskResultApi", req, resp, cb);
    }

    /**
     * 创建出证报告，返回报告 ID。需要配合出证套餐才能调用。
出证需要一定时间，建议调用创建出证24小时之后再通过DescribeChannelFlowEvidenceReport进行查询。
     * @param {CreateChannelFlowEvidenceReportRequest} req
     * @param {function(string, CreateChannelFlowEvidenceReportResponse):void} cb
     * @public
     */
    CreateChannelFlowEvidenceReport(req, cb) {
        let resp = new CreateChannelFlowEvidenceReportResponse();
        this.request("CreateChannelFlowEvidenceReport", req, resp, cb);
    }

    /**
     * 本接口（ChannelUpdateSealStatus）用于渠道为子客企业更新印章状态
     * @param {ChannelUpdateSealStatusRequest} req
     * @param {function(string, ChannelUpdateSealStatusResponse):void} cb
     * @public
     */
    ChannelUpdateSealStatus(req, cb) {
        let resp = new ChannelUpdateSealStatusResponse();
        this.request("ChannelUpdateSealStatus", req, resp, cb);
    }

    /**
     * 合同文件验签
     * @param {ChannelVerifyPdfRequest} req
     * @param {function(string, ChannelVerifyPdfResponse):void} cb
     * @public
     */
    ChannelVerifyPdf(req, cb) {
        let resp = new ChannelVerifyPdfResponse();
        this.request("ChannelVerifyPdf", req, resp, cb);
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
     * 创建签署链接，需要联系运营人员开白后才可使用
     * @param {ChannelCreateFlowSignUrlRequest} req
     * @param {function(string, ChannelCreateFlowSignUrlResponse):void} cb
     * @public
     */
    ChannelCreateFlowSignUrl(req, cb) {
        let resp = new ChannelCreateFlowSignUrlResponse();
        this.request("ChannelCreateFlowSignUrl", req, resp, cb);
    }

    /**
     * 发起解除协议，主要应用场景为：基于一份已经签署的合同，进行解除操作。
合同发起人必须在电子签已经进行实名。
     * @param {ChannelCreateReleaseFlowRequest} req
     * @param {function(string, ChannelCreateReleaseFlowResponse):void} cb
     * @public
     */
    ChannelCreateReleaseFlow(req, cb) {
        let resp = new ChannelCreateReleaseFlowResponse();
        this.request("ChannelCreateReleaseFlow", req, resp, cb);
    }

    /**
     * 查询企业员工列表
     * @param {ChannelDescribeEmployeesRequest} req
     * @param {function(string, ChannelDescribeEmployeesResponse):void} cb
     * @public
     */
    ChannelDescribeEmployees(req, cb) {
        let resp = new ChannelDescribeEmployeesResponse();
        this.request("ChannelDescribeEmployees", req, resp, cb);
    }

    /**
     * 指定需要批量撤销的签署流程Id，批量撤销合同
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；接口失败后返回错误信息
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     * @param {ChannelBatchCancelFlowsRequest} req
     * @param {function(string, ChannelBatchCancelFlowsResponse):void} cb
     * @public
     */
    ChannelBatchCancelFlows(req, cb) {
        let resp = new ChannelBatchCancelFlowsResponse();
        this.request("ChannelBatchCancelFlows", req, resp, cb);
    }

    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入签署流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，不建议使用，将会废弃。
     * @param {PrepareFlowsRequest} req
     * @param {function(string, PrepareFlowsResponse):void} cb
     * @public
     */
    PrepareFlows(req, cb) {
        let resp = new PrepareFlowsResponse();
        this.request("PrepareFlows", req, resp, cb);
    }

    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建签署流程。当前可批量发起合同（签署流程）数量最大为20个。
如若在模板中配置了动态表格, 上传的附件必须为A4大小
合同发起人必须在电子签已经进行实名。
     * @param {CreateFlowsByTemplatesRequest} req
     * @param {function(string, CreateFlowsByTemplatesResponse):void} cb
     * @public
     */
    CreateFlowsByTemplates(req, cb) {
        let resp = new CreateFlowsByTemplatesResponse();
        this.request("CreateFlowsByTemplates", req, resp, cb);
    }

    /**
     * 根据签署流程信息批量获取资源下载链接，可以下载签署中、签署完的合同，需合作企业先进行授权。
此接口直接返回下载的资源的url，与接口GetDownloadFlowUrl跳转到控制台的下载方式不同。
     * @param {DescribeResourceUrlsByFlowsRequest} req
     * @param {function(string, DescribeResourceUrlsByFlowsResponse):void} cb
     * @public
     */
    DescribeResourceUrlsByFlows(req, cb) {
        let resp = new DescribeResourceUrlsByFlowsResponse();
        this.request("DescribeResourceUrlsByFlows", req, resp, cb);
    }

    /**
     * 通过此接口（DescribeTemplates）查询该子客企业在电子签拥有的有效模板，不包括渠道模板
     * @param {DescribeTemplatesRequest} req
     * @param {function(string, DescribeTemplatesResponse):void} cb
     * @public
     */
    DescribeTemplates(req, cb) {
        let resp = new DescribeTemplatesResponse();
        this.request("DescribeTemplates", req, resp, cb);
    }

    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain, 正式环境为 file.ess.tencent.cn。
代码示例：
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
     * @param {UploadFilesRequest} req
     * @param {function(string, UploadFilesResponse):void} cb
     * @public
     */
    UploadFiles(req, cb) {
        let resp = new UploadFilesResponse();
        this.request("UploadFiles", req, resp, cb);
    }

    /**
     * 指定需要批量催办的签署流程Id，批量催办合同，最多100个；接口失败后返回错误信息
注意:
该接口不可直接调用，请联系电子签运营开通后方可调用。
     * @param {ChannelCreateFlowRemindsRequest} req
     * @param {function(string, ChannelCreateFlowRemindsResponse):void} cb
     * @public
     */
    ChannelCreateFlowReminds(req, cb) {
        let resp = new ChannelCreateFlowRemindsResponse();
        this.request("ChannelCreateFlowReminds", req, resp, cb);
    }

    /**
     * 此接口（SyncProxyOrganization）用于同步渠道子客企业信息，主要是子客企业的营业执照，便于子客企业开通过程中不用手动上传。若有需要调用此接口，需要在创建控制链接CreateConsoleLoginUrl之后即刻进行调用。
     * @param {SyncProxyOrganizationRequest} req
     * @param {function(string, SyncProxyOrganizationResponse):void} cb
     * @public
     */
    SyncProxyOrganization(req, cb) {
        let resp = new SyncProxyOrganizationResponse();
        this.request("SyncProxyOrganization", req, resp, cb);
    }

    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于渠道平台的，无法针对员工做新增/更新/离职等操作。
若经办人信息有误，或者需要修改，也可以先将之前的经办人做离职操作，然后重新使用控制台链接CreateConsoleLoginUrl让经办人重新实名。
     * @param {SyncProxyOrganizationOperatorsRequest} req
     * @param {function(string, SyncProxyOrganizationOperatorsResponse):void} cb
     * @public
     */
    SyncProxyOrganizationOperators(req, cb) {
        let resp = new SyncProxyOrganizationOperatorsResponse();
        this.request("SyncProxyOrganizationOperators", req, resp, cb);
    }

    /**
     * 查询出证报告，返回报告 URL。
     * @param {DescribeChannelFlowEvidenceReportRequest} req
     * @param {function(string, DescribeChannelFlowEvidenceReportResponse):void} cb
     * @public
     */
    DescribeChannelFlowEvidenceReport(req, cb) {
        let resp = new DescribeChannelFlowEvidenceReportResponse();
        this.request("DescribeChannelFlowEvidenceReport", req, resp, cb);
    }

    /**
     * 此接口（OperateChannelTemplate）用于针对渠道模板库中的模板对子客企业可见性的查询和设置，不会直接分配渠道模板给子客企业。
1、OperateType=select时：
查询渠道模板库
2、OperateType=update或者delete时：
对子客企业进行模板库中模板可见性的修改、删除操作。
     * @param {OperateChannelTemplateRequest} req
     * @param {function(string, OperateChannelTemplateResponse):void} cb
     * @public
     */
    OperateChannelTemplate(req, cb) {
        let resp = new OperateChannelTemplateResponse();
        this.request("OperateChannelTemplate", req, resp, cb);
    }

    /**
     * 接口（ChannelCreateFlowGroupByFiles）用于通过多文件创建合同组签署流程。
     * @param {ChannelCreateFlowGroupByFilesRequest} req
     * @param {function(string, ChannelCreateFlowGroupByFilesResponse):void} cb
     * @public
     */
    ChannelCreateFlowGroupByFiles(req, cb) {
        let resp = new ChannelCreateFlowGroupByFilesResponse();
        this.request("ChannelCreateFlowGroupByFiles", req, resp, cb);
    }

    /**
     * 此接口（DescribeFlowDetailInfo）用于查询合同(签署流程)的详细信息。
     * @param {DescribeFlowDetailInfoRequest} req
     * @param {function(string, DescribeFlowDetailInfoResponse):void} cb
     * @public
     */
    DescribeFlowDetailInfo(req, cb) {
        let resp = new DescribeFlowDetailInfoResponse();
        this.request("DescribeFlowDetailInfo", req, resp, cb);
    }


}
module.exports = EssbasicClient;
