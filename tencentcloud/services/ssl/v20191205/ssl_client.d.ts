import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCertificateBindResourceTaskDetailRequest, DescribeHostDdosInstanceListRequest, CompleteCertificateRequest, DownloadCertificateResponse, DescribeHostDeployRecordDetailResponse, CancelCertificateOrderRequest, ModifyCertificateProjectResponse, VerifyManagerResponse, DescribeCertificateDetailRequest, CreateCertificateBindResourceSyncTaskResponse, DescribeDeployedResourcesRequest, UploadRevokeLetterRequest, DescribeCompaniesResponse, CheckCertificateChainResponse, DescribeHostCosInstanceListResponse, ModifyCertificateAliasRequest, DescribeManagerDetailRequest, SubmitCertificateInformationRequest, DescribeCertificateOperateLogsRequest, CancelCertificateOrderResponse, ModifyCertificatesExpiringNotificationSwitchResponse, DescribeHostLiveInstanceListRequest, DescribeHostDdosInstanceListResponse, DeployCertificateRecordRetryRequest, ModifyCertificateResubmitRequest, DescribeCertificateResponse, DownloadCertificateRequest, DescribeHostTkeInstanceListResponse, DescribeCertificateBindResourceTaskResultRequest, ApplyCertificateResponse, DescribeHostDeployRecordRequest, CreateCertificateBindResourceSyncTaskRequest, UploadConfirmLetterResponse, DescribeHostUpdateRecordDetailRequest, ReplaceCertificateResponse, DescribeManagersResponse, DeleteCertificatesResponse, DescribeDeleteCertificatesTaskResultResponse, DeleteManagerRequest, DescribeHostUpdateRecordResponse, CertificateOrderSubmitRequest, UpdateCertificateRecordRollbackResponse, DescribeHostVodInstanceListRequest, DescribeCertificateBindResourceTaskDetailResponse, DeployCertificateRecordRetryResponse, CheckCertificateDomainVerificationRequest, UpdateCertificateRecordRetryRequest, DescribeHostWafInstanceListResponse, DescribeDeployedResourcesResponse, CreateCertificateRequest, DescribeCertificatesResponse, CommitCertificateInformationResponse, DeleteManagerResponse, SubmitAuditManagerRequest, UploadCertificateResponse, DeployCertificateInstanceResponse, CreateCertificateByPackageResponse, DescribeCertificatesRequest, UpdateCertificateRecordRollbackRequest, DescribeHostClbInstanceListResponse, RevokeCertificateRequest, DescribeManagerDetailResponse, UploadCertificateRequest, CreateCertificateByPackageRequest, CommitCertificateInformationRequest, DescribeHostDeployRecordDetailRequest, UpdateCertificateInstanceRequest, ReplaceCertificateRequest, DescribeHostDeployRecordResponse, CheckCertificateDomainVerificationResponse, DescribeDownloadCertificateUrlResponse, DescribeHostTkeInstanceListRequest, DeployCertificateRecordRollbackRequest, DeleteCertificateResponse, RevokeCertificateResponse, ModifyCertificateProjectRequest, DescribePackagesRequest, DeleteCertificatesRequest, DescribeHostVodInstanceListResponse, ModifyCertificatesExpiringNotificationSwitchRequest, DescribeHostUpdateRecordDetailResponse, DescribeDeleteCertificatesTaskResultRequest, DescribeHostUpdateRecordRequest, DescribeHostClbInstanceListRequest, VerifyManagerRequest, DescribeHostLiveInstanceListResponse, CheckCertificateExistResponse, DescribeHostApiGatewayInstanceListRequest, DescribeDownloadCertificateUrlRequest, DeployCertificateRecordRollbackResponse, DescribeHostCosInstanceListRequest, DescribeHostCdnInstanceListResponse, DeployCertificateInstanceRequest, DeleteCertificateRequest, DescribeCertificateOperateLogsResponse, DescribeHostLighthouseInstanceListRequest, DescribeHostCdnInstanceListRequest, CertificateInfoSubmitResponse, DescribeHostTeoInstanceListResponse, DescribeHostWafInstanceListRequest, UploadRevokeLetterResponse, CancelAuditCertificateRequest, ModifyCertificateResubmitResponse, SubmitAuditManagerResponse, UpdateCertificateInstanceResponse, DescribeCertificateRequest, ModifyCertificateAliasResponse, ApplyCertificateRequest, CreateCertificateResponse, DescribeHostApiGatewayInstanceListResponse, DescribeCertificateDetailResponse, DescribeCertificateBindResourceTaskResultResponse, DescribeHostTeoInstanceListRequest, UploadConfirmLetterRequest, SubmitCertificateInformationResponse, CertificateInfoSubmitRequest, UpdateCertificateRecordRetryResponse, CertificateOrderSubmitResponse, CheckCertificateChainRequest, CheckCertificateExistRequest, DescribeCompaniesRequest, CancelAuditCertificateResponse, DescribePackagesResponse, DescribeManagersRequest, DescribeHostLighthouseInstanceListResponse, CompleteCertificateResponse } from "./ssl_models";
/**
 * ssl client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询证书cos云资源部署实例列表
     */
    DescribeHostCosInstanceList(req: DescribeHostCosInstanceListRequest, cb?: (error: string, rep: DescribeHostCosInstanceListResponse) => void): Promise<DescribeHostCosInstanceListResponse>;
    /**
     * 本接口（DescribeCertificates）用于获取证书列表。
     */
    DescribeCertificates(req: DescribeCertificatesRequest, cb?: (error: string, rep: DescribeCertificatesResponse) => void): Promise<DescribeCertificatesResponse>;
    /**
     * 查询证书cdn云资源部署实例列表
     */
    DescribeHostCdnInstanceList(req: DescribeHostCdnInstanceListRequest, cb?: (error: string, rep: DescribeHostCdnInstanceListResponse) => void): Promise<DescribeHostCdnInstanceListResponse>;
    /**
     * 取消证书审核
     */
    CancelAuditCertificate(req: CancelAuditCertificateRequest, cb?: (error: string, rep: CancelAuditCertificateResponse) => void): Promise<CancelAuditCertificateResponse>;
    /**
     * 查询证书tke云资源部署实例列表
     */
    DescribeHostTkeInstanceList(req: DescribeHostTkeInstanceListRequest, cb?: (error: string, rep: DescribeHostTkeInstanceListResponse) => void): Promise<DescribeHostTkeInstanceListResponse>;
    /**
     * 查询证书云资源更新记录列表
     */
    DescribeHostUpdateRecord(req: DescribeHostUpdateRecordRequest, cb?: (error: string, rep: DescribeHostUpdateRecordResponse) => void): Promise<DescribeHostUpdateRecordResponse>;
    /**
     * 查询证书云资源部署记录列表
     */
    DescribeHostDeployRecord(req: DescribeHostDeployRecordRequest, cb?: (error: string, rep: DescribeHostDeployRecordResponse) => void): Promise<DescribeHostDeployRecordResponse>;
    /**
     * 删除管理人
     */
    DeleteManager(req: DeleteManagerRequest, cb?: (error: string, rep: DeleteManagerResponse) => void): Promise<DeleteManagerResponse>;
    /**
     * 付费提交证书资料
     */
    CertificateInfoSubmit(req: CertificateInfoSubmitRequest, cb?: (error: string, rep: CertificateInfoSubmitResponse) => void): Promise<CertificateInfoSubmitResponse>;
    /**
     * 获取下载证书链接
     */
    DescribeDownloadCertificateUrl(req: DescribeDownloadCertificateUrlRequest, cb?: (error: string, rep: DescribeDownloadCertificateUrlResponse) => void): Promise<DescribeDownloadCertificateUrlResponse>;
    /**
     * 证书部署到云资源实例列表，本接口只会创建部署任务， 部署任务结果可通过DescribeHostDeployRecordDetail查询。本接口创建部署任务时，会校验证书和部署实例的匹配关系，存在不匹配的则会创建部署任务失败。以下为匹配关系校验规则：
- 若待部署的证书和传入实例域名的当前绑定的证书一致， 则不会创建成功
- 若待部署的证书和传入域名不匹配， 则不会创建成功
- 若部署clb实例时， 7层监听器下无规则，则不会创建成功
- 若部署clb实例时， 7层监听器未开启SNI，该监听器下存在任一域名和证书不匹配， 则不会创建成功
- 若部署clb实例时，监听器规则为正则表示式， 则不会创建成功

<dx-alert infotype="explain" title="">一个证书ID，相同的资源类型，只能创建一个部署任务，必须等部署任务执行完成，才能创建新的部署任务</dx-alert>
     */
    DeployCertificateInstance(req: DeployCertificateInstanceRequest, cb?: (error: string, rep: DeployCertificateInstanceResponse) => void): Promise<DeployCertificateInstanceResponse>;
    /**
     * 重新提交审核管理人
     */
    SubmitAuditManager(req: SubmitAuditManagerRequest, cb?: (error: string, rep: SubmitAuditManagerResponse) => void): Promise<SubmitAuditManagerResponse>;
    /**
     * 获得权益包列表
     */
    DescribePackages(req: DescribePackagesRequest, cb?: (error: string, rep: DescribePackagesResponse) => void): Promise<DescribePackagesResponse>;
    /**
     * 付费证书提交资料； 本接口不维护新功能， 可使用新接口进行资料提交， [CertificateInfoSubmit](https://cloud.tencent.com/document/product/400/116033)
     */
    SubmitCertificateInformation(req: SubmitCertificateInformationRequest, cb?: (error: string, rep: SubmitCertificateInformationResponse) => void): Promise<SubmitCertificateInformationResponse>;
    /**
     * 云资源更新成功记录回滚， 只对更新已成功的记录回滚
     */
    UpdateCertificateRecordRollback(req: UpdateCertificateRecordRollbackRequest, cb?: (error: string, rep: UpdateCertificateRecordRollbackResponse) => void): Promise<UpdateCertificateRecordRollbackResponse>;
    /**
     * 云资源更新重试部署记录
     */
    UpdateCertificateRecordRetry(req: UpdateCertificateRecordRetryRequest, cb?: (error: string, rep: UpdateCertificateRecordRetryResponse) => void): Promise<UpdateCertificateRecordRetryResponse>;
    /**
     * 查询证书ddos云资源部署实例列表
     */
    DescribeHostDdosInstanceList(req: DescribeHostDdosInstanceListRequest, cb?: (error: string, rep: DescribeHostDdosInstanceListResponse) => void): Promise<DescribeHostDdosInstanceListResponse>;
    /**
     * 重新核验管理人
     */
    VerifyManager(req: VerifyManagerRequest, cb?: (error: string, rep: VerifyManagerResponse) => void): Promise<VerifyManagerResponse>;
    /**
     * 查询证书clb云资源部署实例列表
     */
    DescribeHostClbInstanceList(req: DescribeHostClbInstanceListRequest, cb?: (error: string, rep: DescribeHostClbInstanceListResponse) => void): Promise<DescribeHostClbInstanceListResponse>;
    /**
     * 查询证书EdgeOne云资源部署实例列表
     */
    DescribeHostTeoInstanceList(req: DescribeHostTeoInstanceListRequest, cb?: (error: string, rep: DescribeHostTeoInstanceListResponse) => void): Promise<DescribeHostTeoInstanceListResponse>;
    /**
     * 取消证书订单。
     */
    CancelCertificateOrder(req: CancelCertificateOrderRequest, cb?: (error: string, rep: CancelCertificateOrderResponse) => void): Promise<CancelCertificateOrderResponse>;
    /**
     * 提交付费证书订单
     */
    CertificateOrderSubmit(req: CertificateOrderSubmitRequest, cb?: (error: string, rep: CertificateOrderSubmitResponse) => void): Promise<CertificateOrderSubmitResponse>;
    /**
     * 本接口（DownloadCertificate）用于下载证书。
     */
    DownloadCertificate(req: DownloadCertificateRequest, cb?: (error: string, rep: DownloadCertificateResponse) => void): Promise<DownloadCertificateResponse>;
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     */
    DeleteCertificate(req: DeleteCertificateRequest, cb?: (error: string, rep: DeleteCertificateResponse) => void): Promise<DeleteCertificateResponse>;
    /**
     * 本接口（CompleteCertificate）用于主动触发证书验证。DNSPod和Wotrus品牌的证书不支持使用此接口。
     */
    CompleteCertificate(req: CompleteCertificateRequest, cb?: (error: string, rep: CompleteCertificateResponse) => void): Promise<CompleteCertificateResponse>;
    /**
     * 一键更新旧证书资源，本接口为异步接口， 调用之后DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常
     */
    UpdateCertificateInstance(req: UpdateCertificateInstanceRequest, cb?: (error: string, rep: UpdateCertificateInstanceResponse) => void): Promise<UpdateCertificateInstanceResponse>;
    /**
     * 本接口（UploadCertificate）用于上传证书。
     */
    UploadCertificate(req: UploadCertificateRequest, cb?: (error: string, rep: UploadCertificateResponse) => void): Promise<UploadCertificateResponse>;
    /**
     * 本接口（CheckCertificateChain）用于检查证书链是否完整。
     */
    CheckCertificateChain(req: CheckCertificateChainRequest, cb?: (error: string, rep: CheckCertificateChainResponse) => void): Promise<CheckCertificateChainResponse>;
    /**
     * 用户传入证书id和备注来修改证书备注。
     */
    ModifyCertificateAlias(req: ModifyCertificateAliasRequest, cb?: (error: string, rep: ModifyCertificateAliasResponse) => void): Promise<ModifyCertificateAliasResponse>;
    /**
     * 查询公司列表
     */
    DescribeCompanies(req: DescribeCompaniesRequest, cb?: (error: string, rep: DescribeCompaniesResponse) => void): Promise<DescribeCompaniesResponse>;
    /**
     * 获取证书详情。
     */
    DescribeCertificateDetail(req: DescribeCertificateDetailRequest, cb?: (error: string, rep: DescribeCertificateDetailResponse) => void): Promise<DescribeCertificateDetailResponse>;
    /**
     * 查询证书Vod云资源部署实例列表
     */
    DescribeHostVodInstanceList(req: DescribeHostVodInstanceListRequest, cb?: (error: string, rep: DescribeHostVodInstanceListResponse) => void): Promise<DescribeHostVodInstanceListResponse>;
    /**
     * 查询证书live云资源部署实例列表
     */
    DescribeHostLiveInstanceList(req: DescribeHostLiveInstanceListRequest, cb?: (error: string, rep: DescribeHostLiveInstanceListResponse) => void): Promise<DescribeHostLiveInstanceListResponse>;
    /**
     * 查询证书waf云资源部署实例列表
     */
    DescribeHostWafInstanceList(req: DescribeHostWafInstanceListRequest, cb?: (error: string, rep: DescribeHostWafInstanceListResponse) => void): Promise<DescribeHostWafInstanceListResponse>;
    /**
     * 查询管理人详情
     */
    DescribeManagerDetail(req: DescribeManagerDetailRequest, cb?: (error: string, rep: DescribeManagerDetailResponse) => void): Promise<DescribeManagerDetailResponse>;
    /**
     * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
     */
    UploadRevokeLetter(req: UploadRevokeLetterRequest, cb?: (error: string, rep: UploadRevokeLetterResponse) => void): Promise<UploadRevokeLetterResponse>;
    /**
     * 查询证书云资源部署记录详情列表
     */
    DescribeHostDeployRecordDetail(req: DescribeHostDeployRecordDetailRequest, cb?: (error: string, rep: DescribeHostDeployRecordDetailResponse) => void): Promise<DescribeHostDeployRecordDetailResponse>;
    /**
     * 云资源部署成功记录回滚， 部署失败的记录不会回滚； 接口调用成功后， 会创建一个用于回滚的部署任务， 并返回该任务的ID
     */
    DeployCertificateRecordRollback(req: DeployCertificateRecordRollbackRequest, cb?: (error: string, rep: DeployCertificateRecordRollbackResponse) => void): Promise<DeployCertificateRecordRollbackResponse>;
    /**
     * 云资源部署重试部署记录
     */
    DeployCertificateRecordRetry(req: DeployCertificateRecordRetryRequest, cb?: (error: string, rep: DeployCertificateRecordRetryResponse) => void): Promise<DeployCertificateRecordRetryResponse>;
    /**
     * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos
     */
    DescribeCertificateBindResourceTaskResult(req: DescribeCertificateBindResourceTaskResultRequest, cb?: (error: string, rep: DescribeCertificateBindResourceTaskResultResponse) => void): Promise<DescribeCertificateBindResourceTaskResultResponse>;
    /**
     * 检查证书域名验证结果
     */
    CheckCertificateDomainVerification(req: CheckCertificateDomainVerificationRequest, cb?: (error: string, rep: CheckCertificateDomainVerificationResponse) => void): Promise<CheckCertificateDomainVerificationResponse>;
    /**
     * 根据证书内容检测当前账号下是否存在一致的证书， 存在则返回证书ID， 不存在则返回空
     */
    CheckCertificateExist(req: CheckCertificateExistRequest, cb?: (error: string, rep: CheckCertificateExistResponse) => void): Promise<CheckCertificateExistResponse>;
    /**
     * 批量删除证书，删除证书前支持查询证书是否关联了腾讯云云资源 （需自定义配置参数，参数名称：IsSync）
     */
    DeleteCertificates(req: DeleteCertificatesRequest, cb?: (error: string, rep: DeleteCertificatesResponse) => void): Promise<DeleteCertificatesResponse>;
    /**
     * 本接口（RevokeCertificate）用于吊销证书。
     */
    RevokeCertificate(req: RevokeCertificateRequest, cb?: (error: string, rep: RevokeCertificateResponse) => void): Promise<RevokeCertificateResponse>;
    /**
     * 批量修改证书所属项目。
     */
    ModifyCertificateProject(req: ModifyCertificateProjectRequest, cb?: (error: string, rep: ModifyCertificateProjectResponse) => void): Promise<ModifyCertificateProjectResponse>;
    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     */
    DescribeCertificate(req: DescribeCertificateRequest, cb?: (error: string, rep: DescribeCertificateResponse) => void): Promise<DescribeCertificateResponse>;
    /**
     * 证书查询关联资源， 最新查询接口请使用CreateCertificateBindResourceSyncTask， 可以查询更多支持的云资源
     */
    DescribeDeployedResources(req: DescribeDeployedResourcesRequest, cb?: (error: string, rep: DescribeDeployedResourcesResponse) => void): Promise<DescribeDeployedResourcesResponse>;
    /**
     * 本接口（CreateCertificate）用于创建付费证书。
     */
    CreateCertificate(req: CreateCertificateRequest, cb?: (error: string, rep: CreateCertificateResponse) => void): Promise<CreateCertificateResponse>;
    /**
     * 本接口（UploadConfirmLetter）用于上传证书确认函。
     */
    UploadConfirmLetter(req: UploadConfirmLetterRequest, cb?: (error: string, rep: UploadConfirmLetterResponse) => void): Promise<UploadConfirmLetterResponse>;
    /**
     * 查询证书Lighthouse云资源部署实例列表
     */
    DescribeHostLighthouseInstanceList(req: DescribeHostLighthouseInstanceListRequest, cb?: (error: string, rep: DescribeHostLighthouseInstanceListResponse) => void): Promise<DescribeHostLighthouseInstanceListResponse>;
    /**
     * 查询证书云资源更新记录详情
     */
    DescribeHostUpdateRecordDetail(req: DescribeHostUpdateRecordDetailRequest, cb?: (error: string, rep: DescribeHostUpdateRecordDetailResponse) => void): Promise<DescribeHostUpdateRecordDetailResponse>;
    /**
     * 付费证书提交订单； 本接口不维护新功能， 可使用新接口进行提交， [CertificateOrderSubmit](https://cloud.tencent.com/document/product/400/116032)
     */
    CommitCertificateInformation(req: CommitCertificateInformationRequest, cb?: (error: string, rep: CommitCertificateInformationResponse) => void): Promise<CommitCertificateInformationResponse>;
    /**
     * 获取用户账号下有关证书的操作日志。
     */
    DescribeCertificateOperateLogs(req: DescribeCertificateOperateLogsRequest, cb?: (error: string, rep: DescribeCertificateOperateLogsResponse) => void): Promise<DescribeCertificateOperateLogsResponse>;
    /**
     * 查询证书apiGateway云资源部署实例列表
     */
    DescribeHostApiGatewayInstanceList(req: DescribeHostApiGatewayInstanceListRequest, cb?: (error: string, rep: DescribeHostApiGatewayInstanceListResponse) => void): Promise<DescribeHostApiGatewayInstanceListResponse>;
    /**
     * 使用权益点创建证书
     */
    CreateCertificateByPackage(req: CreateCertificateByPackageRequest, cb?: (error: string, rep: CreateCertificateByPackageResponse) => void): Promise<CreateCertificateByPackageResponse>;
    /**
     * 创建证书绑定关联云资源异步任务， 该接口用于查询证书关联云资源。 若证书ID已存在查询云资源任务，则结果返回该任务ID。关联云资源类型，支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos。查询关联云资源结果使用DescribeCertificateBindResourceTaskResult接口
     */
    CreateCertificateBindResourceSyncTask(req: CreateCertificateBindResourceSyncTaskRequest, cb?: (error: string, rep: CreateCertificateBindResourceSyncTaskResponse) => void): Promise<CreateCertificateBindResourceSyncTaskResponse>;
    /**
     * 修改忽略证书到期通知。打开或关闭证书到期通知。
     */
    ModifyCertificatesExpiringNotificationSwitch(req: ModifyCertificatesExpiringNotificationSwitchRequest, cb?: (error: string, rep: ModifyCertificatesExpiringNotificationSwitchResponse) => void): Promise<ModifyCertificatesExpiringNotificationSwitchResponse>;
    /**
     * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
     */
    ReplaceCertificate(req: ReplaceCertificateRequest, cb?: (error: string, rep: ReplaceCertificateResponse) => void): Promise<ReplaceCertificateResponse>;
    /**
     * 本接口（ApplyCertificate）用于免费证书申请。
     */
    ApplyCertificate(req: ApplyCertificateRequest, cb?: (error: string, rep: ApplyCertificateResponse) => void): Promise<ApplyCertificateResponse>;
    /**
     * 查询批量删除任务结果
     */
    DescribeDeleteCertificatesTaskResult(req: DescribeDeleteCertificatesTaskResultRequest, cb?: (error: string, rep: DescribeDeleteCertificatesTaskResultResponse) => void): Promise<DescribeDeleteCertificatesTaskResultResponse>;
    /**
     * 查询管理人列表
     */
    DescribeManagers(req: DescribeManagersRequest, cb?: (error: string, rep: DescribeManagersResponse) => void): Promise<DescribeManagersResponse>;
    /**
     * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos
     */
    DescribeCertificateBindResourceTaskDetail(req: DescribeCertificateBindResourceTaskDetailRequest, cb?: (error: string, rep: DescribeCertificateBindResourceTaskDetailResponse) => void): Promise<DescribeCertificateBindResourceTaskDetailResponse>;
    /**
     * 针对审核失败或审核取消的付费证书，重新发起审核
     */
    ModifyCertificateResubmit(req: ModifyCertificateResubmitRequest, cb?: (error: string, rep: ModifyCertificateResubmitResponse) => void): Promise<ModifyCertificateResubmitResponse>;
}
