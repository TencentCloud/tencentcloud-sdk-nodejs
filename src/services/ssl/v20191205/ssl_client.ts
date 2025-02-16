/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeCertificateBindResourceTaskDetailRequest,
  GatewayCertificate,
  DescribeHostDdosInstanceListRequest,
  CompleteCertificateRequest,
  DownloadCertificateResponse,
  ManagerInfo,
  DescribeHostDeployRecordDetailResponse,
  TCBAccessInstance,
  DeployRecordDetail,
  CancelCertificateOrderRequest,
  ModifyCertificateProjectResponse,
  Certificates,
  CertificateExtra,
  TeoInstanceList,
  RootCertificates,
  CdnInstanceDetail,
  VerifyManagerResponse,
  DescribeCertificateDetailRequest,
  TkeNameSpaceDetail,
  CreateCertificateBindResourceSyncTaskResponse,
  TkeInstanceList,
  DescribeDeployedResourcesRequest,
  TCBHostInstance,
  UploadRevokeLetterRequest,
  ClbListener,
  COSInstanceList,
  DescribeCompaniesResponse,
  UpdateRecordInfo,
  CheckCertificateChainResponse,
  DescribeHostCosInstanceListResponse,
  DvAuths,
  ModifyCertificateAliasRequest,
  DescribeManagerDetailRequest,
  ClbListenerRule,
  LighthouseInstanceDetail,
  SubmitCertificateInformationRequest,
  DescribeCertificateOperateLogsRequest,
  CancelCertificateOrderResponse,
  ModifyCertificatesExpiringNotificationSwitchResponse,
  PackageInfo,
  DescribeHostLiveInstanceListRequest,
  DescribeHostDdosInstanceListResponse,
  UpdateRecordDetails,
  DeployCertificateRecordRetryRequest,
  ModifyCertificateResubmitRequest,
  SupportDownloadType,
  DescribeCertificateResponse,
  DownloadCertificateRequest,
  DescribeHostTkeInstanceListResponse,
  DescribeCertificateBindResourceTaskResultRequest,
  UpdateRecordDetail,
  BindResourceResult,
  ApplyCertificateResponse,
  DescribeHostDeployRecordRequest,
  UpdateSyncProgressRegion,
  CreateCertificateBindResourceSyncTaskRequest,
  CosInstanceDetail,
  UploadConfirmLetterResponse,
  DescribeHostUpdateRecordDetailRequest,
  ReplaceCertificateResponse,
  SyncTaskBindResourceResult,
  ClbInstanceDetail,
  UpdateSyncProgress,
  DescribeManagersResponse,
  VodInstanceDetail,
  CompanyInfo,
  PackageTransferOutInfo,
  DeleteCertificatesResponse,
  DescribeDeleteCertificatesTaskResultResponse,
  ResourceTypeRegions,
  DeleteManagerRequest,
  DescribeHostUpdateRecordResponse,
  CertificateOrderSubmitRequest,
  UpdateCertificateRecordRollbackResponse,
  DescribeHostVodInstanceListRequest,
  DescribeCertificateBindResourceTaskDetailResponse,
  DeployCertificateRecordRetryResponse,
  DvAuthDetail,
  CheckCertificateDomainVerificationRequest,
  CdnInstanceList,
  UpdateCertificateRecordRetryRequest,
  DdosInstanceDetail,
  DescribeHostWafInstanceListResponse,
  DescribeDeployedResourcesResponse,
  CertBasicInfo,
  CreateCertificateRequest,
  DescribeCertificatesResponse,
  CommitCertificateInformationResponse,
  DeleteManagerResponse,
  SubmitAuditManagerRequest,
  UploadCertificateResponse,
  DeployCertificateInstanceResponse,
  LiveInstanceDetail,
  CreateCertificateByPackageResponse,
  TCBEnvironment,
  WafInstanceDetail,
  DescribeCertificatesRequest,
  UpdateCertificateRecordRollbackRequest,
  ApiGatewayInstanceList,
  TeoInstanceDetail,
  DescribeHostClbInstanceListResponse,
  RevokeCertificateRequest,
  PreAuditInfo,
  DescribeManagerDetailResponse,
  UploadCertificateRequest,
  Certificate,
  CreateCertificateByPackageRequest,
  CommitCertificateInformationRequest,
  DeleteTaskResult,
  DescribeHostDeployRecordDetailRequest,
  UpdateCertificateInstanceRequest,
  ReplaceCertificateRequest,
  BatchDeleteFail,
  TkeSecretDetail,
  DescribeHostDeployRecordResponse,
  CheckCertificateDomainVerificationResponse,
  Tags,
  DescribeDownloadCertificateUrlResponse,
  DescribeHostTkeInstanceListRequest,
  DeployCertificateRecordRollbackRequest,
  DeleteCertificateResponse,
  RevokeCertificateResponse,
  DeployedResources,
  ModifyCertificateProjectRequest,
  DescribePackagesRequest,
  DeleteCertificatesRequest,
  DescribeHostVodInstanceListResponse,
  WafInstanceList,
  ModifyCertificatesExpiringNotificationSwitchRequest,
  Filter,
  RevokeDomainValidateAuths,
  DescribeHostUpdateRecordDetailResponse,
  DescribeDeleteCertificatesTaskResultRequest,
  DescribeHostUpdateRecordRequest,
  DescribeHostClbInstanceListRequest,
  VerifyManagerRequest,
  CertTaskId,
  DescribeHostLiveInstanceListResponse,
  CheckCertificateExistResponse,
  DescribeHostApiGatewayInstanceListRequest,
  TCBAccessService,
  DdosInstanceList,
  TSEInstanceDetail,
  DescribeDownloadCertificateUrlRequest,
  SubmittedData,
  DeployCertificateRecordRollbackResponse,
  TCBInstanceList,
  DescribeHostCosInstanceListRequest,
  DescribeHostCdnInstanceListResponse,
  TkeIngressDetail,
  DeployCertificateInstanceRequest,
  ApiGatewayInstanceDetail,
  LiveInstanceList,
  DeleteCertificateRequest,
  DescribeCertificateOperateLogsResponse,
  DescribeHostLighthouseInstanceListRequest,
  DescribeHostCdnInstanceListRequest,
  CertificateInfoSubmitResponse,
  DescribeHostTeoInstanceListResponse,
  DescribeHostWafInstanceListRequest,
  UploadRevokeLetterResponse,
  CancelAuditCertificateRequest,
  ModifyCertificateResubmitResponse,
  SubmitAuditManagerResponse,
  UpdateCertificateInstanceResponse,
  DescribeCertificateRequest,
  OperationLog,
  ModifyCertificateAliasResponse,
  ApplyCertificateRequest,
  CreateCertificateResponse,
  Error,
  DomainValidationResult,
  HostingConfig,
  DescribeHostApiGatewayInstanceListResponse,
  DescribeCertificateDetailResponse,
  DescribeCertificateBindResourceTaskResultResponse,
  ProjectInfo,
  DescribeHostTeoInstanceListRequest,
  BindResourceRegionResult,
  TkeInstanceDetail,
  UploadConfirmLetterRequest,
  SubmitCertificateInformationResponse,
  TCBEnvironments,
  CertificateInfoSubmitRequest,
  ClbInstanceList,
  UpdateCertificateRecordRetryResponse,
  CertificateOrderSubmitResponse,
  TCBHostService,
  CheckCertificateChainRequest,
  CheckCertificateExistRequest,
  DescribeCompaniesRequest,
  ManagerStatusInfo,
  CancelAuditCertificateResponse,
  DeployRecordInfo,
  DescribePackagesResponse,
  DescribeManagersRequest,
  TSEInstanceList,
  DescribeHostLighthouseInstanceListResponse,
  CompleteCertificateResponse,
  VODInstanceList,
} from "./ssl_models"

/**
 * ssl client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ssl.tencentcloudapi.com", "2019-12-05", clientConfig)
  }

  /**
   * 查询证书cos云资源部署实例列表
   */
  async DescribeHostCosInstanceList(
    req: DescribeHostCosInstanceListRequest,
    cb?: (error: string, rep: DescribeHostCosInstanceListResponse) => void
  ): Promise<DescribeHostCosInstanceListResponse> {
    return this.request("DescribeHostCosInstanceList", req, cb)
  }

  /**
   * 本接口（DescribeCertificates）用于获取证书列表。
   */
  async DescribeCertificates(
    req: DescribeCertificatesRequest,
    cb?: (error: string, rep: DescribeCertificatesResponse) => void
  ): Promise<DescribeCertificatesResponse> {
    return this.request("DescribeCertificates", req, cb)
  }

  /**
   * 查询证书cdn云资源部署实例列表
   */
  async DescribeHostCdnInstanceList(
    req: DescribeHostCdnInstanceListRequest,
    cb?: (error: string, rep: DescribeHostCdnInstanceListResponse) => void
  ): Promise<DescribeHostCdnInstanceListResponse> {
    return this.request("DescribeHostCdnInstanceList", req, cb)
  }

  /**
   * 取消证书审核
   */
  async CancelAuditCertificate(
    req: CancelAuditCertificateRequest,
    cb?: (error: string, rep: CancelAuditCertificateResponse) => void
  ): Promise<CancelAuditCertificateResponse> {
    return this.request("CancelAuditCertificate", req, cb)
  }

  /**
   * 查询证书tke云资源部署实例列表
   */
  async DescribeHostTkeInstanceList(
    req: DescribeHostTkeInstanceListRequest,
    cb?: (error: string, rep: DescribeHostTkeInstanceListResponse) => void
  ): Promise<DescribeHostTkeInstanceListResponse> {
    return this.request("DescribeHostTkeInstanceList", req, cb)
  }

  /**
   * 查询证书云资源更新记录列表
   */
  async DescribeHostUpdateRecord(
    req: DescribeHostUpdateRecordRequest,
    cb?: (error: string, rep: DescribeHostUpdateRecordResponse) => void
  ): Promise<DescribeHostUpdateRecordResponse> {
    return this.request("DescribeHostUpdateRecord", req, cb)
  }

  /**
   * 查询证书云资源部署记录列表
   */
  async DescribeHostDeployRecord(
    req: DescribeHostDeployRecordRequest,
    cb?: (error: string, rep: DescribeHostDeployRecordResponse) => void
  ): Promise<DescribeHostDeployRecordResponse> {
    return this.request("DescribeHostDeployRecord", req, cb)
  }

  /**
   * 删除管理人
   */
  async DeleteManager(
    req: DeleteManagerRequest,
    cb?: (error: string, rep: DeleteManagerResponse) => void
  ): Promise<DeleteManagerResponse> {
    return this.request("DeleteManager", req, cb)
  }

  /**
   * 付费提交证书资料
   */
  async CertificateInfoSubmit(
    req: CertificateInfoSubmitRequest,
    cb?: (error: string, rep: CertificateInfoSubmitResponse) => void
  ): Promise<CertificateInfoSubmitResponse> {
    return this.request("CertificateInfoSubmit", req, cb)
  }

  /**
   * 获取下载证书链接
   */
  async DescribeDownloadCertificateUrl(
    req: DescribeDownloadCertificateUrlRequest,
    cb?: (error: string, rep: DescribeDownloadCertificateUrlResponse) => void
  ): Promise<DescribeDownloadCertificateUrlResponse> {
    return this.request("DescribeDownloadCertificateUrl", req, cb)
  }

  /**
     * 证书部署到云资源实例列表，本接口只会创建部署任务， 部署任务结果可通过DescribeHostDeployRecordDetail查询。本接口创建部署任务时，会校验证书和部署实例的匹配关系，存在不匹配的则会创建部署任务失败。以下为匹配关系校验规则：
- 若待部署的证书和传入实例域名的当前绑定的证书一致， 则不会创建成功
- 若待部署的证书和传入域名不匹配， 则不会创建成功
- 若部署clb实例时， 7层监听器下无规则，则不会创建成功
- 若部署clb实例时， 7层监听器未开启SNI，该监听器下存在任一域名和证书不匹配， 则不会创建成功
- 若部署clb实例时，监听器规则为正则表示式， 则不会创建成功

<dx-alert infotype="explain" title="">一个证书ID，相同的资源类型，只能创建一个部署任务，必须等部署任务执行完成，才能创建新的部署任务</dx-alert>
     */
  async DeployCertificateInstance(
    req: DeployCertificateInstanceRequest,
    cb?: (error: string, rep: DeployCertificateInstanceResponse) => void
  ): Promise<DeployCertificateInstanceResponse> {
    return this.request("DeployCertificateInstance", req, cb)
  }

  /**
   * 重新提交审核管理人
   */
  async SubmitAuditManager(
    req: SubmitAuditManagerRequest,
    cb?: (error: string, rep: SubmitAuditManagerResponse) => void
  ): Promise<SubmitAuditManagerResponse> {
    return this.request("SubmitAuditManager", req, cb)
  }

  /**
   * 获得权益包列表
   */
  async DescribePackages(
    req: DescribePackagesRequest,
    cb?: (error: string, rep: DescribePackagesResponse) => void
  ): Promise<DescribePackagesResponse> {
    return this.request("DescribePackages", req, cb)
  }

  /**
   * 付费证书提交资料； 本接口不维护新功能， 可使用新接口进行资料提交， [CertificateInfoSubmit](https://cloud.tencent.com/document/product/400/116033)
   */
  async SubmitCertificateInformation(
    req: SubmitCertificateInformationRequest,
    cb?: (error: string, rep: SubmitCertificateInformationResponse) => void
  ): Promise<SubmitCertificateInformationResponse> {
    return this.request("SubmitCertificateInformation", req, cb)
  }

  /**
   * 云资源更新成功记录回滚， 只对更新已成功的记录回滚
   */
  async UpdateCertificateRecordRollback(
    req: UpdateCertificateRecordRollbackRequest,
    cb?: (error: string, rep: UpdateCertificateRecordRollbackResponse) => void
  ): Promise<UpdateCertificateRecordRollbackResponse> {
    return this.request("UpdateCertificateRecordRollback", req, cb)
  }

  /**
   * 云资源更新重试部署记录
   */
  async UpdateCertificateRecordRetry(
    req: UpdateCertificateRecordRetryRequest,
    cb?: (error: string, rep: UpdateCertificateRecordRetryResponse) => void
  ): Promise<UpdateCertificateRecordRetryResponse> {
    return this.request("UpdateCertificateRecordRetry", req, cb)
  }

  /**
   * 查询证书ddos云资源部署实例列表
   */
  async DescribeHostDdosInstanceList(
    req: DescribeHostDdosInstanceListRequest,
    cb?: (error: string, rep: DescribeHostDdosInstanceListResponse) => void
  ): Promise<DescribeHostDdosInstanceListResponse> {
    return this.request("DescribeHostDdosInstanceList", req, cb)
  }

  /**
   * 重新核验管理人
   */
  async VerifyManager(
    req: VerifyManagerRequest,
    cb?: (error: string, rep: VerifyManagerResponse) => void
  ): Promise<VerifyManagerResponse> {
    return this.request("VerifyManager", req, cb)
  }

  /**
   * 查询证书clb云资源部署实例列表
   */
  async DescribeHostClbInstanceList(
    req: DescribeHostClbInstanceListRequest,
    cb?: (error: string, rep: DescribeHostClbInstanceListResponse) => void
  ): Promise<DescribeHostClbInstanceListResponse> {
    return this.request("DescribeHostClbInstanceList", req, cb)
  }

  /**
   * 查询证书EdgeOne云资源部署实例列表
   */
  async DescribeHostTeoInstanceList(
    req: DescribeHostTeoInstanceListRequest,
    cb?: (error: string, rep: DescribeHostTeoInstanceListResponse) => void
  ): Promise<DescribeHostTeoInstanceListResponse> {
    return this.request("DescribeHostTeoInstanceList", req, cb)
  }

  /**
   * 取消证书订单。
   */
  async CancelCertificateOrder(
    req: CancelCertificateOrderRequest,
    cb?: (error: string, rep: CancelCertificateOrderResponse) => void
  ): Promise<CancelCertificateOrderResponse> {
    return this.request("CancelCertificateOrder", req, cb)
  }

  /**
   * 提交付费证书订单
   */
  async CertificateOrderSubmit(
    req: CertificateOrderSubmitRequest,
    cb?: (error: string, rep: CertificateOrderSubmitResponse) => void
  ): Promise<CertificateOrderSubmitResponse> {
    return this.request("CertificateOrderSubmit", req, cb)
  }

  /**
   * 本接口（DownloadCertificate）用于下载证书。
   */
  async DownloadCertificate(
    req: DownloadCertificateRequest,
    cb?: (error: string, rep: DownloadCertificateResponse) => void
  ): Promise<DownloadCertificateResponse> {
    return this.request("DownloadCertificate", req, cb)
  }

  /**
   * 本接口（DeleteCertificate）用于删除证书。
   */
  async DeleteCertificate(
    req: DeleteCertificateRequest,
    cb?: (error: string, rep: DeleteCertificateResponse) => void
  ): Promise<DeleteCertificateResponse> {
    return this.request("DeleteCertificate", req, cb)
  }

  /**
   * 本接口（CompleteCertificate）用于主动触发证书验证。DNSPod和Wotrus品牌的证书不支持使用此接口。
   */
  async CompleteCertificate(
    req: CompleteCertificateRequest,
    cb?: (error: string, rep: CompleteCertificateResponse) => void
  ): Promise<CompleteCertificateResponse> {
    return this.request("CompleteCertificate", req, cb)
  }

  /**
   * 一键更新旧证书资源，本接口为异步接口， 调用之后DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常
   */
  async UpdateCertificateInstance(
    req: UpdateCertificateInstanceRequest,
    cb?: (error: string, rep: UpdateCertificateInstanceResponse) => void
  ): Promise<UpdateCertificateInstanceResponse> {
    return this.request("UpdateCertificateInstance", req, cb)
  }

  /**
   * 本接口（UploadCertificate）用于上传证书。
   */
  async UploadCertificate(
    req: UploadCertificateRequest,
    cb?: (error: string, rep: UploadCertificateResponse) => void
  ): Promise<UploadCertificateResponse> {
    return this.request("UploadCertificate", req, cb)
  }

  /**
   * 本接口（CheckCertificateChain）用于检查证书链是否完整。
   */
  async CheckCertificateChain(
    req: CheckCertificateChainRequest,
    cb?: (error: string, rep: CheckCertificateChainResponse) => void
  ): Promise<CheckCertificateChainResponse> {
    return this.request("CheckCertificateChain", req, cb)
  }

  /**
   * 用户传入证书id和备注来修改证书备注。
   */
  async ModifyCertificateAlias(
    req: ModifyCertificateAliasRequest,
    cb?: (error: string, rep: ModifyCertificateAliasResponse) => void
  ): Promise<ModifyCertificateAliasResponse> {
    return this.request("ModifyCertificateAlias", req, cb)
  }

  /**
   * 查询公司列表
   */
  async DescribeCompanies(
    req: DescribeCompaniesRequest,
    cb?: (error: string, rep: DescribeCompaniesResponse) => void
  ): Promise<DescribeCompaniesResponse> {
    return this.request("DescribeCompanies", req, cb)
  }

  /**
   * 获取证书详情。
   */
  async DescribeCertificateDetail(
    req: DescribeCertificateDetailRequest,
    cb?: (error: string, rep: DescribeCertificateDetailResponse) => void
  ): Promise<DescribeCertificateDetailResponse> {
    return this.request("DescribeCertificateDetail", req, cb)
  }

  /**
   * 查询证书Vod云资源部署实例列表
   */
  async DescribeHostVodInstanceList(
    req: DescribeHostVodInstanceListRequest,
    cb?: (error: string, rep: DescribeHostVodInstanceListResponse) => void
  ): Promise<DescribeHostVodInstanceListResponse> {
    return this.request("DescribeHostVodInstanceList", req, cb)
  }

  /**
   * 查询证书live云资源部署实例列表
   */
  async DescribeHostLiveInstanceList(
    req: DescribeHostLiveInstanceListRequest,
    cb?: (error: string, rep: DescribeHostLiveInstanceListResponse) => void
  ): Promise<DescribeHostLiveInstanceListResponse> {
    return this.request("DescribeHostLiveInstanceList", req, cb)
  }

  /**
   * 查询证书waf云资源部署实例列表
   */
  async DescribeHostWafInstanceList(
    req: DescribeHostWafInstanceListRequest,
    cb?: (error: string, rep: DescribeHostWafInstanceListResponse) => void
  ): Promise<DescribeHostWafInstanceListResponse> {
    return this.request("DescribeHostWafInstanceList", req, cb)
  }

  /**
   * 查询管理人详情
   */
  async DescribeManagerDetail(
    req: DescribeManagerDetailRequest,
    cb?: (error: string, rep: DescribeManagerDetailResponse) => void
  ): Promise<DescribeManagerDetailResponse> {
    return this.request("DescribeManagerDetail", req, cb)
  }

  /**
   * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
   */
  async UploadRevokeLetter(
    req: UploadRevokeLetterRequest,
    cb?: (error: string, rep: UploadRevokeLetterResponse) => void
  ): Promise<UploadRevokeLetterResponse> {
    return this.request("UploadRevokeLetter", req, cb)
  }

  /**
   * 查询证书云资源部署记录详情列表
   */
  async DescribeHostDeployRecordDetail(
    req: DescribeHostDeployRecordDetailRequest,
    cb?: (error: string, rep: DescribeHostDeployRecordDetailResponse) => void
  ): Promise<DescribeHostDeployRecordDetailResponse> {
    return this.request("DescribeHostDeployRecordDetail", req, cb)
  }

  /**
   * 云资源部署成功记录回滚， 部署失败的记录不会回滚； 接口调用成功后， 会创建一个用于回滚的部署任务， 并返回该任务的ID
   */
  async DeployCertificateRecordRollback(
    req: DeployCertificateRecordRollbackRequest,
    cb?: (error: string, rep: DeployCertificateRecordRollbackResponse) => void
  ): Promise<DeployCertificateRecordRollbackResponse> {
    return this.request("DeployCertificateRecordRollback", req, cb)
  }

  /**
   * 云资源部署重试部署记录
   */
  async DeployCertificateRecordRetry(
    req: DeployCertificateRecordRetryRequest,
    cb?: (error: string, rep: DeployCertificateRecordRetryResponse) => void
  ): Promise<DeployCertificateRecordRetryResponse> {
    return this.request("DeployCertificateRecordRetry", req, cb)
  }

  /**
   * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos
   */
  async DescribeCertificateBindResourceTaskResult(
    req: DescribeCertificateBindResourceTaskResultRequest,
    cb?: (error: string, rep: DescribeCertificateBindResourceTaskResultResponse) => void
  ): Promise<DescribeCertificateBindResourceTaskResultResponse> {
    return this.request("DescribeCertificateBindResourceTaskResult", req, cb)
  }

  /**
   * 检查证书域名验证结果
   */
  async CheckCertificateDomainVerification(
    req: CheckCertificateDomainVerificationRequest,
    cb?: (error: string, rep: CheckCertificateDomainVerificationResponse) => void
  ): Promise<CheckCertificateDomainVerificationResponse> {
    return this.request("CheckCertificateDomainVerification", req, cb)
  }

  /**
   * 根据证书内容检测当前账号下是否存在一致的证书， 存在则返回证书ID， 不存在则返回空
   */
  async CheckCertificateExist(
    req: CheckCertificateExistRequest,
    cb?: (error: string, rep: CheckCertificateExistResponse) => void
  ): Promise<CheckCertificateExistResponse> {
    return this.request("CheckCertificateExist", req, cb)
  }

  /**
   * 批量删除证书，删除证书前支持查询证书是否关联了腾讯云云资源 （需自定义配置参数，参数名称：IsSync）
   */
  async DeleteCertificates(
    req: DeleteCertificatesRequest,
    cb?: (error: string, rep: DeleteCertificatesResponse) => void
  ): Promise<DeleteCertificatesResponse> {
    return this.request("DeleteCertificates", req, cb)
  }

  /**
   * 本接口（RevokeCertificate）用于吊销证书。
   */
  async RevokeCertificate(
    req: RevokeCertificateRequest,
    cb?: (error: string, rep: RevokeCertificateResponse) => void
  ): Promise<RevokeCertificateResponse> {
    return this.request("RevokeCertificate", req, cb)
  }

  /**
   * 批量修改证书所属项目。
   */
  async ModifyCertificateProject(
    req: ModifyCertificateProjectRequest,
    cb?: (error: string, rep: ModifyCertificateProjectResponse) => void
  ): Promise<ModifyCertificateProjectResponse> {
    return this.request("ModifyCertificateProject", req, cb)
  }

  /**
   * 本接口（DescribeCertificate）用于获取证书信息。
   */
  async DescribeCertificate(
    req: DescribeCertificateRequest,
    cb?: (error: string, rep: DescribeCertificateResponse) => void
  ): Promise<DescribeCertificateResponse> {
    return this.request("DescribeCertificate", req, cb)
  }

  /**
   * 证书查询关联资源， 最新查询接口请使用CreateCertificateBindResourceSyncTask， 可以查询更多支持的云资源
   */
  async DescribeDeployedResources(
    req: DescribeDeployedResourcesRequest,
    cb?: (error: string, rep: DescribeDeployedResourcesResponse) => void
  ): Promise<DescribeDeployedResourcesResponse> {
    return this.request("DescribeDeployedResources", req, cb)
  }

  /**
   * 本接口（CreateCertificate）用于创建付费证书。
   */
  async CreateCertificate(
    req: CreateCertificateRequest,
    cb?: (error: string, rep: CreateCertificateResponse) => void
  ): Promise<CreateCertificateResponse> {
    return this.request("CreateCertificate", req, cb)
  }

  /**
   * 本接口（UploadConfirmLetter）用于上传证书确认函。
   */
  async UploadConfirmLetter(
    req: UploadConfirmLetterRequest,
    cb?: (error: string, rep: UploadConfirmLetterResponse) => void
  ): Promise<UploadConfirmLetterResponse> {
    return this.request("UploadConfirmLetter", req, cb)
  }

  /**
   * 查询证书Lighthouse云资源部署实例列表
   */
  async DescribeHostLighthouseInstanceList(
    req: DescribeHostLighthouseInstanceListRequest,
    cb?: (error: string, rep: DescribeHostLighthouseInstanceListResponse) => void
  ): Promise<DescribeHostLighthouseInstanceListResponse> {
    return this.request("DescribeHostLighthouseInstanceList", req, cb)
  }

  /**
   * 查询证书云资源更新记录详情
   */
  async DescribeHostUpdateRecordDetail(
    req: DescribeHostUpdateRecordDetailRequest,
    cb?: (error: string, rep: DescribeHostUpdateRecordDetailResponse) => void
  ): Promise<DescribeHostUpdateRecordDetailResponse> {
    return this.request("DescribeHostUpdateRecordDetail", req, cb)
  }

  /**
   * 付费证书提交订单； 本接口不维护新功能， 可使用新接口进行提交， [CertificateOrderSubmit](https://cloud.tencent.com/document/product/400/116032)
   */
  async CommitCertificateInformation(
    req: CommitCertificateInformationRequest,
    cb?: (error: string, rep: CommitCertificateInformationResponse) => void
  ): Promise<CommitCertificateInformationResponse> {
    return this.request("CommitCertificateInformation", req, cb)
  }

  /**
   * 获取用户账号下有关证书的操作日志。
   */
  async DescribeCertificateOperateLogs(
    req: DescribeCertificateOperateLogsRequest,
    cb?: (error: string, rep: DescribeCertificateOperateLogsResponse) => void
  ): Promise<DescribeCertificateOperateLogsResponse> {
    return this.request("DescribeCertificateOperateLogs", req, cb)
  }

  /**
   * 查询证书apiGateway云资源部署实例列表
   */
  async DescribeHostApiGatewayInstanceList(
    req: DescribeHostApiGatewayInstanceListRequest,
    cb?: (error: string, rep: DescribeHostApiGatewayInstanceListResponse) => void
  ): Promise<DescribeHostApiGatewayInstanceListResponse> {
    return this.request("DescribeHostApiGatewayInstanceList", req, cb)
  }

  /**
   * 使用权益点创建证书
   */
  async CreateCertificateByPackage(
    req: CreateCertificateByPackageRequest,
    cb?: (error: string, rep: CreateCertificateByPackageResponse) => void
  ): Promise<CreateCertificateByPackageResponse> {
    return this.request("CreateCertificateByPackage", req, cb)
  }

  /**
   * 创建证书绑定关联云资源异步任务， 该接口用于查询证书关联云资源。 若证书ID已存在查询云资源任务，则结果返回该任务ID。关联云资源类型，支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos。查询关联云资源结果使用DescribeCertificateBindResourceTaskResult接口
   */
  async CreateCertificateBindResourceSyncTask(
    req: CreateCertificateBindResourceSyncTaskRequest,
    cb?: (error: string, rep: CreateCertificateBindResourceSyncTaskResponse) => void
  ): Promise<CreateCertificateBindResourceSyncTaskResponse> {
    return this.request("CreateCertificateBindResourceSyncTask", req, cb)
  }

  /**
   * 修改忽略证书到期通知。打开或关闭证书到期通知。
   */
  async ModifyCertificatesExpiringNotificationSwitch(
    req: ModifyCertificatesExpiringNotificationSwitchRequest,
    cb?: (error: string, rep: ModifyCertificatesExpiringNotificationSwitchResponse) => void
  ): Promise<ModifyCertificatesExpiringNotificationSwitchResponse> {
    return this.request("ModifyCertificatesExpiringNotificationSwitch", req, cb)
  }

  /**
   * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
   */
  async ReplaceCertificate(
    req: ReplaceCertificateRequest,
    cb?: (error: string, rep: ReplaceCertificateResponse) => void
  ): Promise<ReplaceCertificateResponse> {
    return this.request("ReplaceCertificate", req, cb)
  }

  /**
   * 本接口（ApplyCertificate）用于免费证书申请。
   */
  async ApplyCertificate(
    req: ApplyCertificateRequest,
    cb?: (error: string, rep: ApplyCertificateResponse) => void
  ): Promise<ApplyCertificateResponse> {
    return this.request("ApplyCertificate", req, cb)
  }

  /**
   * 查询批量删除任务结果
   */
  async DescribeDeleteCertificatesTaskResult(
    req: DescribeDeleteCertificatesTaskResultRequest,
    cb?: (error: string, rep: DescribeDeleteCertificatesTaskResultResponse) => void
  ): Promise<DescribeDeleteCertificatesTaskResultResponse> {
    return this.request("DescribeDeleteCertificatesTaskResult", req, cb)
  }

  /**
   * 查询管理人列表
   */
  async DescribeManagers(
    req: DescribeManagersRequest,
    cb?: (error: string, rep: DescribeManagersResponse) => void
  ): Promise<DescribeManagersResponse> {
    return this.request("DescribeManagers", req, cb)
  }

  /**
   * 查询CreateCertificateBindResourceSyncTask任务结果， 返回证书关联云资源异步任务结果， 支持以下云资源：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）、cos
   */
  async DescribeCertificateBindResourceTaskDetail(
    req: DescribeCertificateBindResourceTaskDetailRequest,
    cb?: (error: string, rep: DescribeCertificateBindResourceTaskDetailResponse) => void
  ): Promise<DescribeCertificateBindResourceTaskDetailResponse> {
    return this.request("DescribeCertificateBindResourceTaskDetail", req, cb)
  }

  /**
   * 针对审核失败或审核取消的付费证书，重新发起审核
   */
  async ModifyCertificateResubmit(
    req: ModifyCertificateResubmitRequest,
    cb?: (error: string, rep: ModifyCertificateResubmitResponse) => void
  ): Promise<ModifyCertificateResubmitResponse> {
    return this.request("ModifyCertificateResubmit", req, cb)
  }
}
