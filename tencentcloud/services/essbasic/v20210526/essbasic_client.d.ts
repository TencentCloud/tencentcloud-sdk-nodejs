import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SyncProxyOrganizationResponse, ChannelCreateConvertTaskApiResponse, ChannelBatchCancelFlowsResponse, ChannelCreateFlowSignReviewRequest, DescribeFlowDetailInfoRequest, UploadFilesRequest, DescribeResourceUrlsByFlowsRequest, CreateSealByImageResponse, OperateChannelTemplateResponse, CreateConsoleLoginUrlResponse, SyncProxyOrganizationRequest, CreateSealByImageRequest, PrepareFlowsRequest, ChannelCancelFlowResponse, ChannelCreateConvertTaskApiRequest, ChannelCreateFlowByFilesRequest, ChannelCreateFlowGroupByFilesRequest, DescribeFlowDetailInfoResponse, PrepareFlowsResponse, GetDownloadFlowUrlResponse, DescribeTemplatesResponse, ChannelVerifyPdfRequest, CreateChannelFlowEvidenceReportRequest, ChannelVerifyPdfResponse, CreateConsoleLoginUrlRequest, ChannelCancelMultiFlowSignQRCodeRequest, ChannelDescribeOrganizationSealsRequest, DescribeUsageResponse, ChannelCreateBoundFlowsRequest, ChannelDescribeEmployeesRequest, DescribeResourceUrlsByFlowsResponse, SyncProxyOrganizationOperatorsRequest, CreateSignUrlsRequest, ChannelCreateMultiFlowSignQRCodeRequest, ChannelGetTaskResultApiRequest, CreateFlowsByTemplatesResponse, SyncProxyOrganizationOperatorsResponse, DescribeUsageRequest, CreateSignUrlsResponse, UploadFilesResponse, ChannelCreateBatchCancelFlowUrlRequest, DescribeChannelFlowEvidenceReportRequest, ChannelCreateFlowByFilesResponse, ChannelCreateFlowSignReviewResponse, ChannelDescribeOrganizationSealsResponse, ChannelCancelMultiFlowSignQRCodeResponse, ChannelCreateReleaseFlowRequest, ChannelCreateFlowGroupByFilesResponse, ChannelCreateMultiFlowSignQRCodeResponse, ChannelCreateBoundFlowsResponse, ChannelGetTaskResultApiResponse, GetDownloadFlowUrlRequest, ChannelBatchCancelFlowsRequest, ChannelCancelFlowRequest, DescribeTemplatesRequest, CreateFlowsByTemplatesRequest, ChannelCreateBatchCancelFlowUrlResponse, OperateChannelTemplateRequest, CreateChannelFlowEvidenceReportResponse, ChannelDescribeEmployeesResponse, ChannelCreateReleaseFlowResponse, DescribeChannelFlowEvidenceReportResponse } from "./essbasic_models";
/**
 * essbasic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 提交企业签署流程审批结果

在通过接口(CreateFlowsByTemplates 或者ChannelCreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true,则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     */
    ChannelCreateFlowSignReview(req: ChannelCreateFlowSignReviewRequest, cb?: (error: string, rep: ChannelCreateFlowSignReviewResponse) => void): Promise<ChannelCreateFlowSignReviewResponse>;
    /**
     * 此接口（ChannelCreateMultiFlowSignQRCode）用于创建一码多扫签署流程二维码。
适用的模版仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模版，且模版中发起方没有填写控件。
     */
    ChannelCreateMultiFlowSignQRCode(req: ChannelCreateMultiFlowSignQRCodeRequest, cb?: (error: string, rep: ChannelCreateMultiFlowSignQRCodeResponse) => void): Promise<ChannelCreateMultiFlowSignQRCodeResponse>;
    /**
     * 接口（ChannelCreateFlowByFiles）用于渠道版通过文件创建签署流程。此接口静默签能力不可直接使用，需要运营申请
     */
    ChannelCreateFlowByFiles(req: ChannelCreateFlowByFilesRequest, cb?: (error: string, rep: ChannelCreateFlowByFilesResponse) => void): Promise<ChannelCreateFlowByFilesResponse>;
    /**
     * 渠道通过图片为子客代创建印章，图片最大5MB
     */
    CreateSealByImage(req: CreateSealByImageRequest, cb?: (error: string, rep: CreateSealByImageResponse) => void): Promise<CreateSealByImageResponse>;
    /**
     * 此接口（ChannelCancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     */
    ChannelCancelMultiFlowSignQRCode(req: ChannelCancelMultiFlowSignQRCodeRequest, cb?: (error: string, rep: ChannelCancelMultiFlowSignQRCodeResponse) => void): Promise<ChannelCancelMultiFlowSignQRCodeResponse>;
    /**
     * 渠道创建文件转换任务
     */
    ChannelCreateConvertTaskApi(req: ChannelCreateConvertTaskApiRequest, cb?: (error: string, rep: ChannelCreateConvertTaskApiResponse) => void): Promise<ChannelCreateConvertTaskApiResponse>;
    /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
    DescribeUsage(req: DescribeUsageRequest, cb?: (error: string, rep: DescribeUsageResponse) => void): Promise<DescribeUsageResponse>;
    /**
     * 渠道版撤销签署流程接口，可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人

     */
    ChannelCancelFlow(req: ChannelCancelFlowRequest, cb?: (error: string, rep: ChannelCancelFlowResponse) => void): Promise<ChannelCancelFlowResponse>;
    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建签署流程。当前可批量发起合同（签署流程）数量最大为20个。
如若在模板中配置了动态表格, 上传的附件必须为A4大小
合同发起人必须在电子签已经进行实名。
     */
    CreateFlowsByTemplates(req: CreateFlowsByTemplatesRequest, cb?: (error: string, rep: CreateFlowsByTemplatesResponse) => void): Promise<CreateFlowsByTemplatesResponse>;
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
     */
    CreateSignUrls(req: CreateSignUrlsRequest, cb?: (error: string, rep: CreateSignUrlsResponse) => void): Promise<CreateSignUrlsResponse>;
    /**
     * 此接口（CreateConsoleLoginUrl）用于创建渠道子客企业控制台Web/移动登录链接。登录链接是子客控制台的唯一入口。
若子客企业未激活，会进入企业激活流程，首次参与激活流程的经办人会成为超管。（若企业激活过程中填写信息有误，需要重置激活流程，可以换一个经办人OpenId获取新的链接进入。）
若子客企业已激活，使用了新的经办人OpenId进入，则会进入经办人的实名流程。
若子客企业、经办人均已完成认证，则会直接进入子客Web控制台。
     */
    CreateConsoleLoginUrl(req: CreateConsoleLoginUrlRequest, cb?: (error: string, rep: CreateConsoleLoginUrlResponse) => void): Promise<CreateConsoleLoginUrlResponse>;
    /**
     * 此接口（ChannelCreateBoundFlows）用于渠道子客领取合同，经办人需要有相应的角色，领取后的合同不能重复领取。
     */
    ChannelCreateBoundFlows(req: ChannelCreateBoundFlowsRequest, cb?: (error: string, rep: ChannelCreateBoundFlowsResponse) => void): Promise<ChannelCreateBoundFlowsResponse>;
    /**
     * 指定需要批量撤销的签署流程Id，获取批量撤销链接 - 不建议使用此接口，可使用ChannelBatchCancelFlows
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；
接口调用成功返回批量撤销合同的链接，通过链接跳转到电子签小程序完成批量撤销;
可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
    ChannelCreateBatchCancelFlowUrl(req: ChannelCreateBatchCancelFlowUrlRequest, cb?: (error: string, rep: ChannelCreateBatchCancelFlowUrlResponse) => void): Promise<ChannelCreateBatchCancelFlowUrlResponse>;
    /**
     * 渠道版查询转换任务状态
     */
    ChannelGetTaskResultApi(req: ChannelGetTaskResultApiRequest, cb?: (error: string, rep: ChannelGetTaskResultApiResponse) => void): Promise<ChannelGetTaskResultApiResponse>;
    /**
     * 创建出证报告，返回报告 ID。需要配合出证套餐才能调用。
出证需要一定时间，建议调用创建出证24小时之后再通过DescribeChannelFlowEvidenceReport进行查询。
     */
    CreateChannelFlowEvidenceReport(req: CreateChannelFlowEvidenceReportRequest, cb?: (error: string, rep: CreateChannelFlowEvidenceReportResponse) => void): Promise<CreateChannelFlowEvidenceReportResponse>;
    /**
     * 合同文件验签
     */
    ChannelVerifyPdf(req: ChannelVerifyPdfRequest, cb?: (error: string, rep: ChannelVerifyPdfResponse) => void): Promise<ChannelVerifyPdfResponse>;
    /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载地址，让合作企业进入控制台直接下载，支持客户合同（流程）按照自定义文件夹形式 分类下载。
当前接口限制最多合同（流程）50个.

     */
    GetDownloadFlowUrl(req: GetDownloadFlowUrlRequest, cb?: (error: string, rep: GetDownloadFlowUrlResponse) => void): Promise<GetDownloadFlowUrlResponse>;
    /**
     * 查询渠道子客企业电子印章，需要操作者具有管理印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
    ChannelDescribeOrganizationSeals(req: ChannelDescribeOrganizationSealsRequest, cb?: (error: string, rep: ChannelDescribeOrganizationSealsResponse) => void): Promise<ChannelDescribeOrganizationSealsResponse>;
    /**
     * 渠道版发起解除协议，主要应用场景为：基于一份已经签署的合同，进行解除操作。
合同发起人必须在电子签已经进行实名。
     */
    ChannelCreateReleaseFlow(req: ChannelCreateReleaseFlowRequest, cb?: (error: string, rep: ChannelCreateReleaseFlowResponse) => void): Promise<ChannelCreateReleaseFlowResponse>;
    /**
     * 查询企业员工列表
     */
    ChannelDescribeEmployees(req: ChannelDescribeEmployeesRequest, cb?: (error: string, rep: ChannelDescribeEmployeesResponse) => void): Promise<ChannelDescribeEmployeesResponse>;
    /**
     * 指定需要批量撤销的签署流程Id，批量撤销合同
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；接口失败后返回错误信息
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
    ChannelBatchCancelFlows(req: ChannelBatchCancelFlowsRequest, cb?: (error: string, rep: ChannelBatchCancelFlowsResponse) => void): Promise<ChannelBatchCancelFlowsResponse>;
    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入签署流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，不建议使用，将会废弃。
     */
    PrepareFlows(req: PrepareFlowsRequest, cb?: (error: string, rep: PrepareFlowsResponse) => void): Promise<PrepareFlowsResponse>;
    /**
     * 根据签署流程信息批量获取资源下载链接，可以下载签署中、签署完的合同，需合作企业先进行授权。
此接口直接返回下载的资源的url，与接口GetDownloadFlowUrl跳转到控制台的下载方式不同。
     */
    DescribeResourceUrlsByFlows(req: DescribeResourceUrlsByFlowsRequest, cb?: (error: string, rep: DescribeResourceUrlsByFlowsResponse) => void): Promise<DescribeResourceUrlsByFlowsResponse>;
    /**
     * 通过此接口（DescribeTemplates）查询该子客企业在电子签拥有的有效模板，不包括渠道模板
     */
    DescribeTemplates(req: DescribeTemplatesRequest, cb?: (error: string, rep: DescribeTemplatesResponse) => void): Promise<DescribeTemplatesResponse>;
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain, 正式环境为 file.ess.tencent.cn。
代码示例：
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
     */
    UploadFiles(req: UploadFilesRequest, cb?: (error: string, rep: UploadFilesResponse) => void): Promise<UploadFilesResponse>;
    /**
     * 此接口（SyncProxyOrganization）用于同步渠道子客企业信息，主要是子客企业的营业执照，便于子客企业开通过程中不用手动上传。若有需要调用此接口，需要在创建控制链接CreateConsoleLoginUrl之后即刻进行调用。
     */
    SyncProxyOrganization(req: SyncProxyOrganizationRequest, cb?: (error: string, rep: SyncProxyOrganizationResponse) => void): Promise<SyncProxyOrganizationResponse>;
    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于渠道平台的，无法针对员工做新增/更新/离职等操作。
若经办人信息有误，或者需要修改，也可以先将之前的经办人做离职操作，然后重新使用控制台链接CreateConsoleLoginUrl让经办人重新实名。
     */
    SyncProxyOrganizationOperators(req: SyncProxyOrganizationOperatorsRequest, cb?: (error: string, rep: SyncProxyOrganizationOperatorsResponse) => void): Promise<SyncProxyOrganizationOperatorsResponse>;
    /**
     * 查询出证报告，返回报告 URL。

     */
    DescribeChannelFlowEvidenceReport(req: DescribeChannelFlowEvidenceReportRequest, cb?: (error: string, rep: DescribeChannelFlowEvidenceReportResponse) => void): Promise<DescribeChannelFlowEvidenceReportResponse>;
    /**
     * 此接口（OperateChannelTemplate）用于针对渠道模板库中的模板对子客企业可见性的查询和设置，不会直接分配渠道模板给子客企业。
1、OperateType=select时：
查询渠道模板库
2、OperateType=update或者delete时：
对子客企业进行模板库中模板可见性的修改、删除操作。
     */
    OperateChannelTemplate(req: OperateChannelTemplateRequest, cb?: (error: string, rep: OperateChannelTemplateResponse) => void): Promise<OperateChannelTemplateResponse>;
    /**
     * 接口（ChannelCreateFlowGroupByFiles）用于通过多文件创建合同组签署流程。
     */
    ChannelCreateFlowGroupByFiles(req: ChannelCreateFlowGroupByFilesRequest, cb?: (error: string, rep: ChannelCreateFlowGroupByFilesResponse) => void): Promise<ChannelCreateFlowGroupByFilesResponse>;
    /**
     * 此接口（DescribeFlowDetailInfo）用于查询合同(签署流程)的详细信息。
     */
    DescribeFlowDetailInfo(req: DescribeFlowDetailInfoRequest, cb?: (error: string, rep: DescribeFlowDetailInfoResponse) => void): Promise<DescribeFlowDetailInfoResponse>;
}
