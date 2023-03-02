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
const CancelFlowResponse = models.CancelFlowResponse;
const DescribeFlowEvidenceReportRequest = models.DescribeFlowEvidenceReportRequest;
const Department = models.Department;
const CreateSchemeUrlRequest = models.CreateSchemeUrlRequest;
const FileInfo = models.FileInfo;
const CreateFlowApproversResponse = models.CreateFlowApproversResponse;
const DescribeIntegrationMainOrganizationUserRequest = models.DescribeIntegrationMainOrganizationUserRequest;
const ModifyApplicationCallbackInfoResponse = models.ModifyApplicationCallbackInfoResponse;
const CreateMultiFlowSignQRCodeResponse = models.CreateMultiFlowSignQRCodeResponse;
const FlowCreateApprover = models.FlowCreateApprover;
const DescribeThirdPartyAuthCodeResponse = models.DescribeThirdPartyAuthCodeResponse;
const CreateIntegrationEmployeesRequest = models.CreateIntegrationEmployeesRequest;
const CreateFlowEvidenceReportRequest = models.CreateFlowEvidenceReportRequest;
const StartFlowResponse = models.StartFlowResponse;
const StaffRole = models.StaffRole;
const FlowApproverUrlInfo = models.FlowApproverUrlInfo;
const CreateConvertTaskApiRequest = models.CreateConvertTaskApiRequest;
const CreateFlowRemindsResponse = models.CreateFlowRemindsResponse;
const DescribeOrganizationGroupOrganizationsRequest = models.DescribeOrganizationGroupOrganizationsRequest;
const Agent = models.Agent;
const FlowApproverDetail = models.FlowApproverDetail;
const DescribeFlowTemplatesRequest = models.DescribeFlowTemplatesRequest;
const DescribeFlowEvidenceReportResponse = models.DescribeFlowEvidenceReportResponse;
const TemplateInfo = models.TemplateInfo;
const CreateDocumentResponse = models.CreateDocumentResponse;
const DescribeIntegrationEmployeesRequest = models.DescribeIntegrationEmployeesRequest;
const CreateFlowRequest = models.CreateFlowRequest;
const FileUrl = models.FileUrl;
const DescribeThirdPartyAuthCodeRequest = models.DescribeThirdPartyAuthCodeRequest;
const DescribeFlowInfoRequest = models.DescribeFlowInfoRequest;
const DeleteSealPoliciesResponse = models.DeleteSealPoliciesResponse;
const OrganizationInfo = models.OrganizationInfo;
const FillApproverInfo = models.FillApproverInfo;
const OccupiedSeal = models.OccupiedSeal;
const FailedDeleteStaffData = models.FailedDeleteStaffData;
const PdfVerifyResult = models.PdfVerifyResult;
const CreateBatchCancelFlowUrlResponse = models.CreateBatchCancelFlowUrlResponse;
const CreateSealPolicyResponse = models.CreateSealPolicyResponse;
const DescribeIntegrationEmployeesResponse = models.DescribeIntegrationEmployeesResponse;
const SuccessDeleteStaffData = models.SuccessDeleteStaffData;
const CreateConvertTaskApiResponse = models.CreateConvertTaskApiResponse;
const CreateFlowSignReviewRequest = models.CreateFlowSignReviewRequest;
const FailedCreateStaffData = models.FailedCreateStaffData;
const CreateFlowByFilesRequest = models.CreateFlowByFilesRequest;
const CreateFlowSignUrlResponse = models.CreateFlowSignUrlResponse;
const DescribeFileUrlsRequest = models.DescribeFileUrlsRequest;
const FormField = models.FormField;
const UserInfo = models.UserInfo;
const CreateFlowApproversRequest = models.CreateFlowApproversRequest;
const Staff = models.Staff;
const CreateFlowEvidenceReportResponse = models.CreateFlowEvidenceReportResponse;
const DescribeFileUrlsResponse = models.DescribeFileUrlsResponse;
const AuthorizedUser = models.AuthorizedUser;
const CreateDocumentRequest = models.CreateDocumentRequest;
const RemindFlowRecords = models.RemindFlowRecords;
const DescribeOrganizationSealsResponse = models.DescribeOrganizationSealsResponse;
const DeleteIntegrationEmployeesRequest = models.DeleteIntegrationEmployeesRequest;
const SignQrCode = models.SignQrCode;
const GetTaskResultApiRequest = models.GetTaskResultApiRequest;
const RegisterInfo = models.RegisterInfo;
const GroupOrganization = models.GroupOrganization;
const CreateFlowSignUrlRequest = models.CreateFlowSignUrlRequest;
const CreateIntegrationEmployeesResponse = models.CreateIntegrationEmployeesResponse;
const FlowDetailInfo = models.FlowDetailInfo;
const CreateFlowByFilesResponse = models.CreateFlowByFilesResponse;
const UploadFilesResponse = models.UploadFilesResponse;
const SuccessCreateStaffData = models.SuccessCreateStaffData;
const Recipient = models.Recipient;
const VerifyPdfRequest = models.VerifyPdfRequest;
const ApproverInfo = models.ApproverInfo;
const CreateFlowSignReviewResponse = models.CreateFlowSignReviewResponse;
const Filter = models.Filter;
const CreateStaffResult = models.CreateStaffResult;
const DescribeIntegrationMainOrganizationUserResponse = models.DescribeIntegrationMainOrganizationUserResponse;
const CreateSchemeUrlResponse = models.CreateSchemeUrlResponse;
const ApproverRestriction = models.ApproverRestriction;
const DeleteSealPoliciesRequest = models.DeleteSealPoliciesRequest;
const CreatePrepareFlowResponse = models.CreatePrepareFlowResponse;
const GetTaskResultApiResponse = models.GetTaskResultApiResponse;
const CancelMultiFlowSignQRCodeRequest = models.CancelMultiFlowSignQRCodeRequest;
const ModifyApplicationCallbackInfoRequest = models.ModifyApplicationCallbackInfoRequest;
const IntegrationMainOrganizationUser = models.IntegrationMainOrganizationUser;
const StartFlowRequest = models.StartFlowRequest;
const CreatePrepareFlowRequest = models.CreatePrepareFlowRequest;
const ApproverOption = models.ApproverOption;
const CreateSealPolicyRequest = models.CreateSealPolicyRequest;
const DescribeOrganizationSealsRequest = models.DescribeOrganizationSealsRequest;
const CancelFlowRequest = models.CancelFlowRequest;
const UploadFile = models.UploadFile;
const Component = models.Component;
const CreateFlowRemindsRequest = models.CreateFlowRemindsRequest;
const DescribeFlowBriefsRequest = models.DescribeFlowBriefsRequest;
const DeleteIntegrationEmployeesResponse = models.DeleteIntegrationEmployeesResponse;
const SignUrl = models.SignUrl;
const VerifyPdfResponse = models.VerifyPdfResponse;
const DeleteStaffsResult = models.DeleteStaffsResult;
const DescribeFlowBriefsResponse = models.DescribeFlowBriefsResponse;
const Admin = models.Admin;
const Caller = models.Caller;
const DescribeFlowTemplatesResponse = models.DescribeFlowTemplatesResponse;
const UploadFilesRequest = models.UploadFilesRequest;
const CreateBatchCancelFlowUrlRequest = models.CreateBatchCancelFlowUrlRequest;
const CreateMultiFlowSignQRCodeRequest = models.CreateMultiFlowSignQRCodeRequest;
const DescribeFlowInfoResponse = models.DescribeFlowInfoResponse;
const CcInfo = models.CcInfo;
const CreateFlowResponse = models.CreateFlowResponse;
const FlowBrief = models.FlowBrief;
const DescribeOrganizationGroupOrganizationsResponse = models.DescribeOrganizationGroupOrganizationsResponse;
const CancelMultiFlowSignQRCodeResponse = models.CancelMultiFlowSignQRCodeResponse;


/**
 * ess client
 * @class
 */
class EssClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ess.tencentcloudapi.com", "2020-11-11", credential, region, profile);
    }
    
    /**
     * 此API接口用户查询加入集团的成员企业
     * @param {DescribeOrganizationGroupOrganizationsRequest} req
     * @param {function(string, DescribeOrganizationGroupOrganizationsResponse):void} cb
     * @public
     */
    DescribeOrganizationGroupOrganizations(req, cb) {
        let resp = new DescribeOrganizationGroupOrganizationsResponse();
        this.request("DescribeOrganizationGroupOrganizations", req, resp, cb);
    }

    /**
     * 新增/删除应用callbackinfo
callbackinfo包含： 回调地址和签名key
操作：新增/删除
     * @param {ModifyApplicationCallbackInfoRequest} req
     * @param {function(string, ModifyApplicationCallbackInfoResponse):void} cb
     * @public
     */
    ModifyApplicationCallbackInfo(req, cb) {
        let resp = new ModifyApplicationCallbackInfoResponse();
        this.request("ModifyApplicationCallbackInfo", req, resp, cb);
    }

    /**
     * 此接口用于发起流程
适用场景：见创建签署流程接口。
注：该接口是“创建电子文档”接口的后置接口，用于激活包含完整合同信息（模板及内容信息）的流程。激活后的流程就是一份待签署的电子合同。
     * @param {StartFlowRequest} req
     * @param {function(string, StartFlowResponse):void} cb
     * @public
     */
    StartFlow(req, cb) {
        let resp = new StartFlowResponse();
        this.request("StartFlow", req, resp, cb);
    }

    /**
     * 用于撤销签署流程
适用场景：如果某个合同流程当前至少还有一方没有签署，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。
注：如果合同流程中的参与方均已签署完毕，则无法通过该接口撤销合同。
     * @param {CancelFlowRequest} req
     * @param {function(string, CancelFlowResponse):void} cb
     * @public
     */
    CancelFlow(req, cb) {
        let resp = new CancelFlowResponse();
        this.request("CancelFlow", req, resp, cb);
    }

    /**
     * 当模板较多或模板中的控件较多时，可以通过查询模板接口更方便的获取模板列表，以及每个模板内的控件信息。该接口常用来配合“创建电子文档”接口作为前置的接口使用。
     * @param {DescribeFlowTemplatesRequest} req
     * @param {function(string, DescribeFlowTemplatesResponse):void} cb
     * @public
     */
    DescribeFlowTemplates(req, cb) {
        let resp = new DescribeFlowTemplatesResponse();
        this.request("DescribeFlowTemplates", req, resp, cb);
    }

    /**
     * 撤销员工持有的印章权限
     * @param {DeleteSealPoliciesRequest} req
     * @param {function(string, DeleteSealPoliciesResponse):void} cb
     * @public
     */
    DeleteSealPolicies(req, cb) {
        let resp = new DeleteSealPoliciesResponse();
        this.request("DeleteSealPolicies", req, resp, cb);
    }

    /**
     * 查询文件下载URL
适用场景：通过传参合同流程编号，下载对应的合同PDF文件流到本地。
     * @param {DescribeFileUrlsRequest} req
     * @param {function(string, DescribeFileUrlsResponse):void} cb
     * @public
     */
    DescribeFileUrls(req, cb) {
        let resp = new DescribeFileUrlsResponse();
        this.request("DescribeFileUrls", req, resp, cb);
    }

    /**
     * 创建出证报告，返回报告 ID。需要配合出证套餐才能调用。
出证需要一定时间，建议调用创建出证24小时之后再通过DescribeFlowEvidenceReport进行查询。
     * @param {CreateFlowEvidenceReportRequest} req
     * @param {function(string, CreateFlowEvidenceReportResponse):void} cb
     * @public
     */
    CreateFlowEvidenceReport(req, cb) {
        let resp = new CreateFlowEvidenceReportResponse();
        this.request("CreateFlowEvidenceReport", req, resp, cb);
    }

    /**
     * 验证合同文件
     * @param {VerifyPdfRequest} req
     * @param {function(string, VerifyPdfResponse):void} cb
     * @public
     */
    VerifyPdf(req, cb) {
        let resp = new VerifyPdfResponse();
        this.request("VerifyPdf", req, resp, cb);
    }

    /**
     * 电子签企业版：指定需要批量撤回的签署流程Id，获取批量撤销链接
客户指定需要撤回的签署流程Id，最多100个，超过100不处理；接口调用成功返回批量撤回合同的链接，通过链接跳转到电子签小程序完成批量撤回
     * @param {CreateBatchCancelFlowUrlRequest} req
     * @param {function(string, CreateBatchCancelFlowUrlResponse):void} cb
     * @public
     */
    CreateBatchCancelFlowUrl(req, cb) {
        let resp = new CreateBatchCancelFlowUrlResponse();
        this.request("CreateBatchCancelFlowUrl", req, resp, cb);
    }

    /**
     * 补充签署流程本企业签署人信息
适用场景：在通过模板或者文件发起合同时，若未指定本企业签署人信息，则流程发起后，可以调用此接口补充签署人。
同一签署人可以补充多个员工作为候选签署人,最终签署人取决于谁先领取合同完成签署。

注：目前暂时只支持补充来源于企业微信的员工作为候选签署人
     * @param {CreateFlowApproversRequest} req
     * @param {function(string, CreateFlowApproversResponse):void} cb
     * @public
     */
    CreateFlowApprovers(req, cb) {
        let resp = new CreateFlowApproversResponse();
        this.request("CreateFlowApprovers", req, resp, cb);
    }

    /**
     * 提交企业签署流程审批结果
适用场景: 
在通过接口(CreateFlow 或者CreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true，且发起方企业作为签署方参与了流程签署，则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。

     * @param {CreateFlowSignReviewRequest} req
     * @param {function(string, CreateFlowSignReviewResponse):void} cb
     * @public
     */
    CreateFlowSignReview(req, cb) {
        let resp = new CreateFlowSignReviewResponse();
        this.request("CreateFlowSignReview", req, resp, cb);
    }

    /**
     * 创建快速发起流程
适用场景：用户通过API 合同文件及签署信息，并可通过我们返回的URL在页面完成签署控件等信息的编辑与确认，快速发起合同.
注：该接口文件的resourceId 是通过上传文件之后获取的。
     * @param {CreatePrepareFlowRequest} req
     * @param {function(string, CreatePrepareFlowResponse):void} cb
     * @public
     */
    CreatePrepareFlow(req, cb) {
        let resp = new CreatePrepareFlowResponse();
        this.request("CreatePrepareFlow", req, resp, cb);
    }

    /**
     * 创建签署流程电子文档
适用场景：见创建签署流程接口。x0b
注：该接口需要给对应的流程指定一个模板id，并且填充该模板中需要补充的信息。是“发起流程”接口的前置接口。
     * @param {CreateDocumentRequest} req
     * @param {function(string, CreateDocumentResponse):void} cb
     * @public
     */
    CreateDocument(req, cb) {
        let resp = new CreateDocumentResponse();
        this.request("CreateDocument", req, resp, cb);
    }

    /**
     * 查询合同详情
适用场景：可用于主动查询某个合同详情信息。
     * @param {DescribeFlowInfoRequest} req
     * @param {function(string, DescribeFlowInfoResponse):void} cb
     * @public
     */
    DescribeFlowInfo(req, cb) {
        let resp = new DescribeFlowInfoResponse();
        this.request("DescribeFlowInfo", req, resp, cb);
    }

    /**
     * 对企业员工进行印章授权
     * @param {CreateSealPolicyRequest} req
     * @param {function(string, CreateSealPolicyResponse):void} cb
     * @public
     */
    CreateSealPolicy(req, cb) {
        let resp = new CreateSealPolicyResponse();
        this.request("CreateSealPolicy", req, resp, cb);
    }

    /**
     * 创建签署流程
适用场景：在标准制式的合同场景中，可通过提前预制好模板文件，每次调用模板文件的id，补充合同内容信息及签署信息生成电子合同。
注：该接口是通过模板生成合同流程的前置接口，先创建一个不包含签署文件的流程。配合“创建电子文档”接口和“发起流程”接口使用。
     * @param {CreateFlowRequest} req
     * @param {function(string, CreateFlowResponse):void} cb
     * @public
     */
    CreateFlow(req, cb) {
        let resp = new CreateFlowResponse();
        this.request("CreateFlow", req, resp, cb);
    }

    /**
     * 查询出证报告，返回报告 URL。
     * @param {DescribeFlowEvidenceReportRequest} req
     * @param {function(string, DescribeFlowEvidenceReportResponse):void} cb
     * @public
     */
    DescribeFlowEvidenceReport(req, cb) {
        let resp = new DescribeFlowEvidenceReportResponse();
        this.request("DescribeFlowEvidenceReport", req, resp, cb);
    }

    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建待签署的合同流程。
适用场景1：适用非制式的合同文件签署。一般开发者自己有完整的签署文件，可以通过该接口传入完整的PDF文件及流程信息生成待签署的合同流程。
适用场景2：可通过该接口传入制式合同文件，同时在指定位置添加签署控件。可以起到接口创建临时模板的效果。如果是标准的制式文件，建议使用模板功能生成模板ID进行合同流程的生成。
注意事项：该接口需要依赖“多文件上传”接口生成pdf资源编号（FileIds）进行使用。
     * @param {CreateFlowByFilesRequest} req
     * @param {function(string, CreateFlowByFilesResponse):void} cb
     * @public
     */
    CreateFlowByFiles(req, cb) {
        let resp = new CreateFlowByFilesResponse();
        this.request("CreateFlowByFiles", req, resp, cb);
    }

    /**
     * 此接口（CreateMultiFlowSignQRCode）用于创建一码多扫流程签署二维码。
适用场景：无需填写签署人信息，可通过模板id生成签署二维码，签署人可通过扫描二维码补充签署信息进行实名签署。常用于提前不知道签署人的身份信息场景，例如：劳务工招工、大批量员工入职等场景。
适用的模板仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模板，且模板中发起方没有填写控件。
     * @param {CreateMultiFlowSignQRCodeRequest} req
     * @param {function(string, CreateMultiFlowSignQRCodeResponse):void} cb
     * @public
     */
    CreateMultiFlowSignQRCode(req, cb) {
        let resp = new CreateMultiFlowSignQRCodeResponse();
        this.request("CreateMultiFlowSignQRCode", req, resp, cb);
    }

    /**
     * 查询转换任务状态
     * @param {GetTaskResultApiRequest} req
     * @param {function(string, GetTaskResultApiResponse):void} cb
     * @public
     */
    GetTaskResultApi(req, cb) {
        let resp = new GetTaskResultApiResponse();
        this.request("GetTaskResultApi", req, resp, cb);
    }

    /**
     * 此接口（CancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     * @param {CancelMultiFlowSignQRCodeRequest} req
     * @param {function(string, CancelMultiFlowSignQRCodeResponse):void} cb
     * @public
     */
    CancelMultiFlowSignQRCode(req, cb) {
        let resp = new CancelMultiFlowSignQRCodeResponse();
        this.request("CancelMultiFlowSignQRCode", req, resp, cb);
    }

    /**
     * 查询员工信息，每次返回的数据量最大为20
     * @param {DescribeIntegrationEmployeesRequest} req
     * @param {function(string, DescribeIntegrationEmployeesResponse):void} cb
     * @public
     */
    DescribeIntegrationEmployees(req, cb) {
        let resp = new DescribeIntegrationEmployeesResponse();
        this.request("DescribeIntegrationEmployees", req, resp, cb);
    }

    /**
     * 创建签署链接，需要联系运营人员开白后才可使用
     * @param {CreateFlowSignUrlRequest} req
     * @param {function(string, CreateFlowSignUrlResponse):void} cb
     * @public
     */
    CreateFlowSignUrl(req, cb) {
        let resp = new CreateFlowSignUrlResponse();
        this.request("CreateFlowSignUrl", req, resp, cb);
    }

    /**
     * 创建文件转换任务
     * @param {CreateConvertTaskApiRequest} req
     * @param {function(string, CreateConvertTaskApiResponse):void} cb
     * @public
     */
    CreateConvertTaskApi(req, cb) {
        let resp = new CreateConvertTaskApiResponse();
        this.request("CreateConvertTaskApi", req, resp, cb);
    }

    /**
     * 查询流程摘要
适用场景：可用于主动查询某个合同流程的签署状态信息。可以配合回调通知使用。
日调用量默认10W
     * @param {DescribeFlowBriefsRequest} req
     * @param {function(string, DescribeFlowBriefsResponse):void} cb
     * @public
     */
    DescribeFlowBriefs(req, cb) {
        let resp = new DescribeFlowBriefsResponse();
        this.request("DescribeFlowBriefs", req, resp, cb);
    }

    /**
     * 此接口（UploadFiles）用于文件上传。
适用场景：用于生成pdf资源编号（FileIds）来配合“用PDF创建流程”接口使用，使用场景可详见“用PDF创建流程”接口说明。
调用时需要设置Domain/接口请求域名为 file.ess.tencent.cn，并设置参数Version/版本号为2020-12-22
     * @param {UploadFilesRequest} req
     * @param {function(string, UploadFilesResponse):void} cb
     * @public
     */
    UploadFiles(req, cb) {
        let resp = new UploadFilesResponse();
        this.request("UploadFiles", req, resp, cb);
    }

    /**
     * 指定需要批量催办的签署流程Id，批量催办合同，最多100个; 接口失败后返回错误信息
注意:
该接口不可直接调用，需要联系运营开通后方可调用。
     * @param {CreateFlowRemindsRequest} req
     * @param {function(string, CreateFlowRemindsResponse):void} cb
     * @public
     */
    CreateFlowReminds(req, cb) {
        let resp = new CreateFlowRemindsResponse();
        this.request("CreateFlowReminds", req, resp, cb);
    }

    /**
     * 通过子企业影子账号查询主企业员工账号
     * @param {DescribeIntegrationMainOrganizationUserRequest} req
     * @param {function(string, DescribeIntegrationMainOrganizationUserResponse):void} cb
     * @public
     */
    DescribeIntegrationMainOrganizationUser(req, cb) {
        let resp = new DescribeIntegrationMainOrganizationUserResponse();
        this.request("DescribeIntegrationMainOrganizationUser", req, resp, cb);
    }

    /**
     * 通过AuthCode查询用户是否实名
     * @param {DescribeThirdPartyAuthCodeRequest} req
     * @param {function(string, DescribeThirdPartyAuthCodeResponse):void} cb
     * @public
     */
    DescribeThirdPartyAuthCode(req, cb) {
        let resp = new DescribeThirdPartyAuthCodeResponse();
        this.request("DescribeThirdPartyAuthCode", req, resp, cb);
    }

    /**
     * 查询企业印章的列表，需要操作者具有查询印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     * @param {DescribeOrganizationSealsRequest} req
     * @param {function(string, DescribeOrganizationSealsResponse):void} cb
     * @public
     */
    DescribeOrganizationSeals(req, cb) {
        let resp = new DescribeOrganizationSealsResponse();
        this.request("DescribeOrganizationSeals", req, resp, cb);
    }

    /**
     * 移除员工
     * @param {DeleteIntegrationEmployeesRequest} req
     * @param {function(string, DeleteIntegrationEmployeesResponse):void} cb
     * @public
     */
    DeleteIntegrationEmployees(req, cb) {
        let resp = new DeleteIntegrationEmployeesResponse();
        this.request("DeleteIntegrationEmployees", req, resp, cb);
    }

    /**
     * 获取小程序跳转链接

适用场景：如果需要签署人在自己的APP、小程序、H5应用中签署，可以通过此接口获取跳转腾讯电子签小程序的签署跳转链接。

注：如果签署人是在PC端扫码签署，可以通过生成跳转链接自主转换成二维码，让签署人在PC端扫码签署。


跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式）


如您需要自主配置小程序跳转链接，请参考: <a href="https://cloud.tencent.com/document/product/1323/74774">跳转小程序链接配置说明</a>
     * @param {CreateSchemeUrlRequest} req
     * @param {function(string, CreateSchemeUrlResponse):void} cb
     * @public
     */
    CreateSchemeUrl(req, cb) {
        let resp = new CreateSchemeUrlResponse();
        this.request("CreateSchemeUrl", req, resp, cb);
    }

    /**
     * 创建员工
     * @param {CreateIntegrationEmployeesRequest} req
     * @param {function(string, CreateIntegrationEmployeesResponse):void} cb
     * @public
     */
    CreateIntegrationEmployees(req, cb) {
        let resp = new CreateIntegrationEmployeesResponse();
        this.request("CreateIntegrationEmployees", req, resp, cb);
    }


}
module.exports = EssClient;
