import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CancelFlowResponse, DescribeFlowEvidenceReportRequest, CreateSchemeUrlRequest, CreateFlowApproversResponse, UploadFilesRequest, DescribeThirdPartyAuthCodeResponse, CreateIntegrationEmployeesRequest, CreateFlowEvidenceReportRequest, StartFlowResponse, CreateConvertTaskApiRequest, CreateFlowRemindsResponse, DescribeFlowTemplatesRequest, DescribeFlowEvidenceReportResponse, CreateDocumentResponse, DescribeIntegrationEmployeesRequest, CreateFlowRequest, DescribeThirdPartyAuthCodeRequest, DescribeFlowInfoRequest, CreateBatchCancelFlowUrlResponse, DescribeIntegrationEmployeesResponse, CreateConvertTaskApiResponse, CreateFlowSignReviewRequest, CreateFlowByFilesRequest, CreateFlowSignUrlResponse, DescribeFileUrlsRequest, CreateFlowApproversRequest, CreateFlowEvidenceReportResponse, DescribeFileUrlsResponse, CreateDocumentRequest, CreateMultiFlowSignQRCodeResponse, DescribeOrganizationSealsResponse, DeleteIntegrationEmployeesRequest, GetTaskResultApiRequest, CreateFlowSignUrlRequest, CreateIntegrationEmployeesResponse, CreateFlowByFilesResponse, UploadFilesResponse, VerifyPdfRequest, CreateFlowSignReviewResponse, CreateSchemeUrlResponse, CreatePrepareFlowResponse, GetTaskResultApiResponse, CancelMultiFlowSignQRCodeRequest, StartFlowRequest, CreatePrepareFlowRequest, DeleteIntegrationEmployeesResponse, DescribeOrganizationSealsRequest, CancelFlowRequest, CreateFlowRemindsRequest, DescribeFlowBriefsRequest, VerifyPdfResponse, DescribeFlowBriefsResponse, DescribeFlowTemplatesResponse, CreateBatchCancelFlowUrlRequest, CreateMultiFlowSignQRCodeRequest, DescribeFlowInfoResponse, CreateFlowResponse, CancelMultiFlowSignQRCodeResponse } from "./ess_models";
/**
 * ess client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口用于发起流程
适用场景：见创建签署流程接口。
注：该接口是“创建电子文档”接口的后置接口，用于激活包含完整合同信息（模板及内容信息）的流程。激活后的流程就是一份待签署的电子合同。
     */
    StartFlow(req: StartFlowRequest, cb?: (error: string, rep: StartFlowResponse) => void): Promise<StartFlowResponse>;
    /**
     * 用于撤销签署流程
适用场景：如果某个合同流程当前至少还有一方没有签署，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。
注：如果合同流程中的参与方均已签署完毕，则无法通过该接口撤销合同。
     */
    CancelFlow(req: CancelFlowRequest, cb?: (error: string, rep: CancelFlowResponse) => void): Promise<CancelFlowResponse>;
    /**
     * 当模板较多或模板中的控件较多时，可以通过查询模板接口更方便的获取模板列表，以及每个模板内的控件信息。该接口常用来配合“创建电子文档”接口作为前置的接口使用。
     */
    DescribeFlowTemplates(req: DescribeFlowTemplatesRequest, cb?: (error: string, rep: DescribeFlowTemplatesResponse) => void): Promise<DescribeFlowTemplatesResponse>;
    /**
     * 查询文件下载URL
适用场景：通过传参合同流程编号，下载对应的合同PDF文件流到本地。
     */
    DescribeFileUrls(req: DescribeFileUrlsRequest, cb?: (error: string, rep: DescribeFileUrlsResponse) => void): Promise<DescribeFileUrlsResponse>;
    /**
     * 验证合同文件
     */
    VerifyPdf(req: VerifyPdfRequest, cb?: (error: string, rep: VerifyPdfResponse) => void): Promise<VerifyPdfResponse>;
    /**
     * 电子签企业版：指定需要批量撤回的签署流程Id，获取批量撤销链接
客户指定需要撤回的签署流程Id，最多100个，超过100不处理；接口调用成功返回批量撤回合同的链接，通过链接跳转到电子签小程序完成批量撤回
     */
    CreateBatchCancelFlowUrl(req: CreateBatchCancelFlowUrlRequest, cb?: (error: string, rep: CreateBatchCancelFlowUrlResponse) => void): Promise<CreateBatchCancelFlowUrlResponse>;
    /**
     * 补充签署流程本企业签署人信息
适用场景：在通过模板或者文件发起合同时，若未指定本企业签署人信息，则流程发起后，可以调用此接口补充签署人。
同一签署人可以补充多个员工作为候选签署人,最终签署人取决于谁先领取合同完成签署。

注：目前暂时只支持补充来源于企业微信的员工作为候选签署人
     */
    CreateFlowApprovers(req: CreateFlowApproversRequest, cb?: (error: string, rep: CreateFlowApproversResponse) => void): Promise<CreateFlowApproversResponse>;
    /**
     * 提交企业签署流程审批结果
适用场景:
在通过接口(CreateFlow 或者CreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true，且发起方企业作为签署方参与了流程签署，则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。

     */
    CreateFlowSignReview(req: CreateFlowSignReviewRequest, cb?: (error: string, rep: CreateFlowSignReviewResponse) => void): Promise<CreateFlowSignReviewResponse>;
    /**
     * 创建快速发起流程
适用场景：用户通过API 合同文件及签署信息，并可通过我们返回的URL在页面完成签署控件等信息的编辑与确认，快速发起合同.
注：该接口文件的resourceId 是通过上传文件之后获取的。
     */
    CreatePrepareFlow(req: CreatePrepareFlowRequest, cb?: (error: string, rep: CreatePrepareFlowResponse) => void): Promise<CreatePrepareFlowResponse>;
    /**
     * 创建签署流程电子文档
适用场景：见创建签署流程接口。
注：该接口需要给对应的流程指定一个模板id，并且填充该模板中需要补充的信息。是“发起流程”接口的前置接口。
     */
    CreateDocument(req: CreateDocumentRequest, cb?: (error: string, rep: CreateDocumentResponse) => void): Promise<CreateDocumentResponse>;
    /**
     * 查询合同详情
适用场景：可用于主动查询某个合同详情信息。
     */
    DescribeFlowInfo(req: DescribeFlowInfoRequest, cb?: (error: string, rep: DescribeFlowInfoResponse) => void): Promise<DescribeFlowInfoResponse>;
    /**
     * 创建出证报告，返回报告 ID。需要配合出证套餐才能调用。
出证需要一定时间，建议调用创建出证24小时之后再通过DescribeFlowEvidenceReport进行查询。
     */
    CreateFlowEvidenceReport(req: CreateFlowEvidenceReportRequest, cb?: (error: string, rep: CreateFlowEvidenceReportResponse) => void): Promise<CreateFlowEvidenceReportResponse>;
    /**
     * 创建签署流程
适用场景：在标准制式的合同场景中，可通过提前预制好模板文件，每次调用模板文件的id，补充合同内容信息及签署信息生成电子合同。
注：该接口是通过模板生成合同流程的前置接口，先创建一个不包含签署文件的流程。配合“创建电子文档”接口和“发起流程”接口使用。
     */
    CreateFlow(req: CreateFlowRequest, cb?: (error: string, rep: CreateFlowResponse) => void): Promise<CreateFlowResponse>;
    /**
     * 查询出证报告，返回报告 URL。
     */
    DescribeFlowEvidenceReport(req: DescribeFlowEvidenceReportRequest, cb?: (error: string, rep: DescribeFlowEvidenceReportResponse) => void): Promise<DescribeFlowEvidenceReportResponse>;
    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建待签署的合同流程。
适用场景1：适用非制式的合同文件签署。一般开发者自己有完整的签署文件，可以通过该接口传入完整的PDF文件及流程信息生成待签署的合同流程。
适用场景2：可通过该接口传入制式合同文件，同时在指定位置添加签署控件。可以起到接口创建临时模板的效果。如果是标准的制式文件，建议使用模板功能生成模板ID进行合同流程的生成。
注意事项：该接口需要依赖“多文件上传”接口生成pdf资源编号（FileIds）进行使用。
     */
    CreateFlowByFiles(req: CreateFlowByFilesRequest, cb?: (error: string, rep: CreateFlowByFilesResponse) => void): Promise<CreateFlowByFilesResponse>;
    /**
     * 此接口（CreateMultiFlowSignQRCode）用于创建一码多扫流程签署二维码。
适用场景：无需填写签署人信息，可通过模板id生成签署二维码，签署人可通过扫描二维码补充签署信息进行实名签署。常用于提前不知道签署人的身份信息场景，例如：劳务工招工、大批量员工入职等场景。
适用的模板仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模板，且模板中发起方没有填写控件。
     */
    CreateMultiFlowSignQRCode(req: CreateMultiFlowSignQRCodeRequest, cb?: (error: string, rep: CreateMultiFlowSignQRCodeResponse) => void): Promise<CreateMultiFlowSignQRCodeResponse>;
    /**
     * 查询转换任务状态
     */
    GetTaskResultApi(req: GetTaskResultApiRequest, cb?: (error: string, rep: GetTaskResultApiResponse) => void): Promise<GetTaskResultApiResponse>;
    /**
     * 此接口（CancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     */
    CancelMultiFlowSignQRCode(req: CancelMultiFlowSignQRCodeRequest, cb?: (error: string, rep: CancelMultiFlowSignQRCodeResponse) => void): Promise<CancelMultiFlowSignQRCodeResponse>;
    /**
     * 查询员工信息，每次返回的数据量最大为20
     */
    DescribeIntegrationEmployees(req: DescribeIntegrationEmployeesRequest, cb?: (error: string, rep: DescribeIntegrationEmployeesResponse) => void): Promise<DescribeIntegrationEmployeesResponse>;
    /**
     * 创建签署链接，需要联系运营人员开白后才可使用
     */
    CreateFlowSignUrl(req: CreateFlowSignUrlRequest, cb?: (error: string, rep: CreateFlowSignUrlResponse) => void): Promise<CreateFlowSignUrlResponse>;
    /**
     * 创建文件转换任务
     */
    CreateConvertTaskApi(req: CreateConvertTaskApiRequest, cb?: (error: string, rep: CreateConvertTaskApiResponse) => void): Promise<CreateConvertTaskApiResponse>;
    /**
     * 查询流程摘要
适用场景：可用于主动查询某个合同流程的签署状态信息。可以配合回调通知使用。
日调用量默认10W
     */
    DescribeFlowBriefs(req: DescribeFlowBriefsRequest, cb?: (error: string, rep: DescribeFlowBriefsResponse) => void): Promise<DescribeFlowBriefsResponse>;
    /**
     * 此接口（UploadFiles）用于文件上传。
适用场景：用于生成pdf资源编号（FileIds）来配合“用PDF创建流程”接口使用，使用场景可详见“用PDF创建流程”接口说明。
调用时需要设置Domain/接口请求域名为 file.ess.tencent.cn，并设置参数Version/版本号为2020-12-22
     */
    UploadFiles(req: UploadFilesRequest, cb?: (error: string, rep: UploadFilesResponse) => void): Promise<UploadFilesResponse>;
    /**
     * 指定需要批量催办的签署流程Id，批量催办合同，最多100个; 接口失败后返回错误信息
注意:
该接口需要开白后使用
     */
    CreateFlowReminds(req: CreateFlowRemindsRequest, cb?: (error: string, rep: CreateFlowRemindsResponse) => void): Promise<CreateFlowRemindsResponse>;
    /**
     * 通过AuthCode查询用户是否实名
     */
    DescribeThirdPartyAuthCode(req: DescribeThirdPartyAuthCodeRequest, cb?: (error: string, rep: DescribeThirdPartyAuthCodeResponse) => void): Promise<DescribeThirdPartyAuthCodeResponse>;
    /**
     * 查询企业印章的列表，需要操作者具有查询印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
    DescribeOrganizationSeals(req: DescribeOrganizationSealsRequest, cb?: (error: string, rep: DescribeOrganizationSealsResponse) => void): Promise<DescribeOrganizationSealsResponse>;
    /**
     * 移除员工
     */
    DeleteIntegrationEmployees(req: DeleteIntegrationEmployeesRequest, cb?: (error: string, rep: DeleteIntegrationEmployeesResponse) => void): Promise<DeleteIntegrationEmployeesResponse>;
    /**
     * 获取小程序跳转链接

适用场景：如果需要签署人在自己的APP、小程序、H5应用中签署，可以通过此接口获取跳转腾讯电子签小程序的签署跳转链接。

注：如果签署人是在PC端扫码签署，可以通过生成跳转链接自主转换成二维码，让签署人在PC端扫码签署。


跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式）


如您需要自主配置小程序跳转链接，请参考: <a href="https://cloud.tencent.com/document/product/1323/74774">跳转小程序链接配置说明</a>
     */
    CreateSchemeUrl(req: CreateSchemeUrlRequest, cb?: (error: string, rep: CreateSchemeUrlResponse) => void): Promise<CreateSchemeUrlResponse>;
    /**
     * 创建员工
     */
    CreateIntegrationEmployees(req: CreateIntegrationEmployeesRequest, cb?: (error: string, rep: CreateIntegrationEmployeesResponse) => void): Promise<CreateIntegrationEmployeesResponse>;
}
