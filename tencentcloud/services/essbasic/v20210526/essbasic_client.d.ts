import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ChannelCreateConvertTaskApiResponse, OperateChannelTemplateRequest, ChannelDescribeEmployeesRequest, SyncProxyOrganizationResponse, ChannelBatchCancelFlowsResponse, GetDownloadFlowUrlResponse, DescribeTemplatesResponse, DescribeResourceUrlsByFlowsResponse, ChannelCreateMultiFlowSignQRCodeResponse, OperateChannelTemplateResponse, CreateSignUrlsResponse, CreateSignUrlsRequest, ChannelCreateMultiFlowSignQRCodeRequest, DescribeFlowDetailInfoRequest, ChannelGetTaskResultApiResponse, ChannelGetTaskResultApiRequest, ChannelVerifyPdfResponse, GetDownloadFlowUrlRequest, ChannelBatchCancelFlowsRequest, CreateConsoleLoginUrlRequest, CreateFlowsByTemplatesResponse, ChannelCreateFlowSignReviewRequest, DescribeUsageResponse, SyncProxyOrganizationOperatorsResponse, CreateSealByImageResponse, ChannelVerifyPdfRequest, DescribeTemplatesRequest, SyncProxyOrganizationOperatorsRequest, CreateConsoleLoginUrlResponse, CreateFlowsByTemplatesRequest, SyncProxyOrganizationRequest, CreateSealByImageRequest, ChannelCreateFlowGroupByFilesResponse, PrepareFlowsRequest, ChannelCreateBatchCancelFlowUrlResponse, DescribeResourceUrlsByFlowsRequest, ChannelCancelMultiFlowSignQRCodeRequest, PrepareFlowsResponse, ChannelDescribeEmployeesResponse, DescribeUsageRequest, ChannelCreateBatchCancelFlowUrlRequest, ChannelCreateFlowByFilesRequest, ChannelCreateFlowByFilesResponse, UploadFilesResponse, ChannelCreateFlowSignReviewResponse, ChannelCreateConvertTaskApiRequest, ChannelCreateFlowGroupByFilesRequest, UploadFilesRequest, ChannelCancelMultiFlowSignQRCodeResponse, DescribeFlowDetailInfoResponse } from "./essbasic_models";
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
     * 渠道通过图片为子客代创建印章，图片最大5m；此接口不可直接使用，需要运营申请
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
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建签署流程。当前可批量发起合同（签署流程）数量最大为20个。

     */
    CreateFlowsByTemplates(req: CreateFlowsByTemplatesRequest, cb?: (error: string, rep: CreateFlowsByTemplatesResponse) => void): Promise<CreateFlowsByTemplatesResponse>;
    /**
     * 创建跳转小程序查看或签署的链接；自动签署的签署方不创建签署链接；
     */
    CreateSignUrls(req: CreateSignUrlsRequest, cb?: (error: string, rep: CreateSignUrlsResponse) => void): Promise<CreateSignUrlsResponse>;
    /**
     * 此接口（CreateConsoleLoginUrl）用于创建渠道子客企业控制台Web端登录链接。Web端登录链接是子客控制台的唯一入口。
若子客企业未激活，会进入企业激活流程,首次参与激活流程的经办人会成为超管。（若企业激活过程中填写信息有误，需要重置激活流程，可以换一个经办人OpenId获取新的链接进入。）
若子客企业已激活，使用了新的经办人OpenId进入，则会进入经办人的实名流程。
若子客企业、经办人均已完成认证，则会直接进入子客Web控制台。

     */
    CreateConsoleLoginUrl(req: CreateConsoleLoginUrlRequest, cb?: (error: string, rep: CreateConsoleLoginUrlResponse) => void): Promise<CreateConsoleLoginUrlResponse>;
    /**
     * 指定需要批量撤销的签署流程Id，获取批量撤销链接
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；
接口调用成功返回批量撤销合同的链接，通过链接跳转到电子签小程序完成批量撤销;
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
    ChannelCreateBatchCancelFlowUrl(req: ChannelCreateBatchCancelFlowUrlRequest, cb?: (error: string, rep: ChannelCreateBatchCancelFlowUrlResponse) => void): Promise<ChannelCreateBatchCancelFlowUrlResponse>;
    /**
     * 渠道版查询转换任务状态
     */
    ChannelGetTaskResultApi(req: ChannelGetTaskResultApiRequest, cb?: (error: string, rep: ChannelGetTaskResultApiResponse) => void): Promise<ChannelGetTaskResultApiResponse>;
    /**
     * 此接口（SyncProxyOrganization）用于同步渠道子客企业信息，主要是子客企业的营业执照，便于子客企业开通过程中不用手动上传。若有需要调用此接口，需要在创建控制链接CreateConsoleLoginUrl之后即刻进行调用。
     */
    SyncProxyOrganization(req: SyncProxyOrganizationRequest, cb?: (error: string, rep: SyncProxyOrganizationResponse) => void): Promise<SyncProxyOrganizationResponse>;
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
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于渠道平台的，无法针对员工做新增/更新/离职等操作。
若经办人信息有误，或者需要修改，也可以先将之前的经办人做离职操作，然后重新使用控制台链接CreateConsoleLoginUrl让经办人重新实名。
     */
    SyncProxyOrganizationOperators(req: SyncProxyOrganizationOperatorsRequest, cb?: (error: string, rep: SyncProxyOrganizationOperatorsResponse) => void): Promise<SyncProxyOrganizationOperatorsResponse>;
    /**
     * 查询企业员工
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
目前该接口只支持B2C，不建议使用。
     */
    PrepareFlows(req: PrepareFlowsRequest, cb?: (error: string, rep: PrepareFlowsResponse) => void): Promise<PrepareFlowsResponse>;
    /**
     * 根据签署流程信息批量获取资源下载链接，需合作企业先进行授权
     */
    DescribeResourceUrlsByFlows(req: DescribeResourceUrlsByFlowsRequest, cb?: (error: string, rep: DescribeResourceUrlsByFlowsResponse) => void): Promise<DescribeResourceUrlsByFlowsResponse>;
    /**
     * 通过此接口（DescribeTemplates）查询该企业在电子签渠道版中配置的有效模板列表
     */
    DescribeTemplates(req: DescribeTemplatesRequest, cb?: (error: string, rep: DescribeTemplatesResponse) => void): Promise<DescribeTemplatesResponse>;
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn
     */
    UploadFiles(req: UploadFilesRequest, cb?: (error: string, rep: UploadFilesResponse) => void): Promise<UploadFilesResponse>;
    /**
     * 此接口（OperateChannelTemplate）用于渠道侧将模板库中的模板对合作企业进行查询和设置, 其中包括可见性的修改以及对合作企业的设置.
1、同步标识=select时：
返回渠道侧模板库当前模板的属性.
2、同步标识=update或者delete时：
对渠道子客进行模板库中模板授权,修改操作
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
