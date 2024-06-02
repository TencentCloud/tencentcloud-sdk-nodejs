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
  DescribePersonCertificateResponse,
  CreateOrganizationGroupInvitationLinkRequest,
  FlowBatchUrlInfo,
  BillUsageDetail,
  DescribeCancelFlowsTaskResponse,
  IntentionActionResult,
  CreateSealRequest,
  FlowGroupUrlInfo,
  CancelFlowResponse,
  DescribeExtendedServiceAuthDetailResponse,
  UpdateIntegrationEmployeesResponse,
  Department,
  CreatePreparedPersonalEsignRequest,
  DeleteStaffsResult,
  DescribeIntegrationDepartmentsResponse,
  DeleteExtendedServiceAuthInfosResponse,
  CreateFlowApproversResponse,
  DescribeFileUrlsResponse,
  CreateExtendedServiceAuthInfosRequest,
  IntentionQuestionResult,
  CancelUserAutoSignEnableUrlRequest,
  AuthInfoDetail,
  ModifyApplicationCallbackInfoResponse,
  CreateMultiFlowSignQRCodeResponse,
  FlowApproverUrlInfo,
  ReviewerInfo,
  FlowBrief,
  DescribeThirdPartyAuthCodeResponse,
  DescribeUserVerifyStatusResponse,
  HasAuthUser,
  DisableUserAutoSignResponse,
  OrgBillSummary,
  ModifyExtendedServiceRequest,
  CancelUserAutoSignEnableUrlResponse,
  BindEmployeeUserIdWithClientOpenIdResponse,
  CreateIntegrationEmployeesRequest,
  CreateFlowOption,
  ReleasedApprover,
  DescribeIntegrationRolesRequest,
  FlowBatchApproverInfo,
  CreateFlowEvidenceReportRequest,
  StartFlowResponse,
  SealInfo,
  StaffRole,
  GroupOrganization,
  CreateOrganizationAuthUrlRequest,
  CreateBatchQuickSignUrlResponse,
  CreateIntegrationRoleRequest,
  DeleteIntegrationRoleUsersResponse,
  CreateConvertTaskApiRequest,
  DeleteIntegrationEmployeesResponse,
  NeedReviewApproverInfo,
  CreateFlowGroupSignReviewResponse,
  CreateBatchSignUrlResponse,
  CreateFlowRemindsResponse,
  DescribeOrganizationGroupOrganizationsRequest,
  Agent,
  FlowApproverDetail,
  CreateFlowGroupByFilesRequest,
  DescribeFlowComponentsResponse,
  DescribeFlowEvidenceReportResponse,
  IntentionAction,
  CallbackInfo,
  DescribeSignFaceVideoRequest,
  DeleteSealPoliciesRequest,
  CreateFlowGroupByTemplatesResponse,
  CancelFailureFlow,
  CreateUserVerifyUrlResponse,
  DescribeBatchOrganizationRegistrationUrlsRequest,
  TemplateInfo,
  CreateDocumentResponse,
  DescribeIntegrationEmployeesRequest,
  UnbindEmployeeUserIdWithClientOpenIdResponse,
  CreateIntegrationUserRolesResponse,
  CreateFlowRequest,
  CreateSchemeUrlRequest,
  DeleteIntegrationDepartmentResponse,
  AutoSignConfig,
  DescribeThirdPartyAuthCodeRequest,
  CreateBatchOrganizationRegistrationTasksResponse,
  CreateReleaseFlowResponse,
  CreateWebThemeConfigResponse,
  BindEmployeeUserIdWithClientOpenIdRequest,
  CreateOrganizationInfoChangeUrlResponse,
  Permission,
  DescribeExtendedServiceAuthDetailRequest,
  OrganizationAuthUrl,
  Staff,
  ComponentLimit,
  CreateIntegrationDepartmentResponse,
  DescribeFlowTemplatesRequest,
  CreateIntegrationSubOrganizationActiveRecordResponse,
  DeleteSealPoliciesResponse,
  OrganizationInfo,
  DescribeUserAutoSignStatusResponse,
  CreateUserAutoSignSealUrlResponse,
  FillApproverInfo,
  OccupiedSeal,
  IntentionActionResultDetail,
  CreatePersonAuthCertificateImageResponse,
  FailedDeleteStaffData,
  PdfVerifyResult,
  CreateBatchCancelFlowUrlResponse,
  UserThreeFactor,
  SignQrCode,
  CreateSealPolicyResponse,
  DisableUserAutoSignRequest,
  DescribeIntegrationEmployeesResponse,
  SuccessDeleteStaffData,
  CreateConvertTaskApiResponse,
  CreateFlowSignReviewRequest,
  CreateOrganizationAuthUrlResponse,
  UnbindEmployeeUserIdWithClientOpenIdRequest,
  CreateSchemeUrlResponse,
  CreateFlowByFilesRequest,
  FlowGroupInfo,
  CreateFlowSignUrlResponse,
  RegisterInfo,
  DescribeFileUrlsRequest,
  FormField,
  CreateUserAutoSignSealUrlRequest,
  ModifyFlowDeadlineRequest,
  UserInfo,
  CreateFlowApproversRequest,
  ModifyFlowDeadlineResponse,
  ExtendAuthInfo,
  FlowCreateApprover,
  CreateOrganizationGroupInvitationLinkResponse,
  HasAuthOrganization,
  RecipientComponentInfo,
  CreateFlowEvidenceReportResponse,
  CreateIntegrationRoleResponse,
  DetectInfoVideoData,
  DescribeFlowComponentsRequest,
  CreateIntegrationDepartmentRequest,
  DescribeUserVerifyStatusRequest,
  AuthorizedUser,
  Intention,
  CreateDocumentRequest,
  RemindFlowRecords,
  CreatePreparedPersonalEsignResponse,
  DescribeOrganizationSealsResponse,
  RegistrationOrganizationInfo,
  CreateEmbedWebUrlRequest,
  DeleteIntegrationEmployeesRequest,
  FailedUpdateStaffData,
  GetTaskResultApiRequest,
  FlowGroupOptions,
  DescribeFlowBriefsResponse,
  ModifyIntegrationRoleRequest,
  CreateFlowGroupByFilesResponse,
  CreateReleaseFlowRequest,
  FillError,
  DeleteIntegrationRoleUsersRequest,
  CreateFlowSignUrlRequest,
  CreateIntegrationEmployeesResponse,
  CreateIntegrationUserRolesRequest,
  FlowDetailInfo,
  SuccessUpdateStaffData,
  CreatePersonAuthCertificateImageRequest,
  CreateFlowByFilesResponse,
  UploadFilesResponse,
  SuccessCreateStaffData,
  Recipient,
  DescribeFlowEvidenceReportRequest,
  FailedCreateRoleData,
  DescribeBillUsageRequest,
  DescribeBillUsageResponse,
  ApproverInfo,
  CreateFlowSignReviewResponse,
  ModifyIntegrationDepartmentRequest,
  RenewAutoSignLicenseRequest,
  Filter,
  CreateStaffResult,
  CreateUserAutoSignEnableUrlRequest,
  CreateOrganizationBatchSignUrlResponse,
  FileInfo,
  CreateBatchOrganizationRegistrationTasksRequest,
  CreateUserVerifyUrlRequest,
  FailedCreateStaffData,
  CreateExtendedServiceAuthInfosResponse,
  SubOrgBillUsage,
  ApproverRestriction,
  CreateWebThemeConfigRequest,
  ApproverItem,
  CreateOrganizationBatchSignUrlRequest,
  IntegrateRole,
  CreatePrepareFlowResponse,
  ModifyIntegrationDepartmentResponse,
  GetTaskResultApiResponse,
  SubOrgBillSummary,
  CancelMultiFlowSignQRCodeRequest,
  DeleteIntegrationDepartmentRequest,
  UserFlowType,
  ModifyApplicationCallbackInfoRequest,
  DescribeUserAutoSignStatusRequest,
  StartFlowRequest,
  CreateSealResponse,
  CreatePrepareFlowRequest,
  ApproverOption,
  DescribeCancelFlowsTaskRequest,
  CreateEmbedWebUrlResponse,
  ModifyExtendedServiceResponse,
  CreateFlowGroupByTemplatesRequest,
  FlowGroupApproverInfo,
  DescribeOrganizationSealsRequest,
  PermissionGroup,
  CancelFlowRequest,
  UploadFile,
  Component,
  IntegrationDepartment,
  DescribeExtendedServiceAuthInfosRequest,
  DescribeIntegrationRolesResponse,
  CreateBatchSignUrlRequest,
  CreateFlowRemindsRequest,
  UpdateIntegrationEmployeesRequest,
  FlowGroupApprovers,
  DescribeFlowBriefsRequest,
  CreateSealPolicyRequest,
  DescribeBillUsageDetailResponse,
  CreateUserAutoSignEnableUrlResponse,
  DescribeSignFaceVideoResponse,
  SignUrl,
  ModifyIntegrationRoleResponse,
  VerifyPdfResponse,
  CreateFlowGroupSignReviewRequest,
  DescribeBillUsageDetailRequest,
  Admin,
  Caller,
  DescribeFlowTemplatesResponse,
  DescribeBatchOrganizationRegistrationUrlsResponse,
  UploadFilesRequest,
  DescribePersonCertificateRequest,
  RelieveInfo,
  EmbedUrlOption,
  CreateBatchCancelFlowUrlRequest,
  WebThemeConfig,
  CreateMultiFlowSignQRCodeRequest,
  VerifyPdfRequest,
  DescribeFlowInfoRequest,
  DeleteExtendedServiceAuthInfosRequest,
  DescribeExtendedServiceAuthInfosResponse,
  DescribeIntegrationDepartmentsRequest,
  DescribeFlowInfoResponse,
  RenewAutoSignLicenseResponse,
  CancelMultiFlowSignQRCodeResponse,
  CreateFlowResponse,
  CreateIntegrationSubOrganizationActiveRecordRequest,
  FilledComponent,
  CreateBatchQuickSignUrlRequest,
  FileUrl,
  CreateOrganizationInfoChangeUrlRequest,
  DescribeOrganizationGroupOrganizationsResponse,
  ApproverComponentLimitType,
  CcInfo,
  IntentionQuestion,
  CreateResultPageConfig,
} from "./ess_models"

/**
 * ess client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ess.tencentcloudapi.com", "2020-11-11", clientConfig)
  }

  /**
     * 该接口用于发起合同后，生成个人用户的批量签署链接, 暂时不支持企业端签署。
**注意：**
1. 该接口目前仅支持签署人类型是**个人签署方的批量签署场景**(ApproverType=1)。
2. 该接口可生成批量签署链接的C端签署人**必须仅有手写签名(控件类型为SIGN_SIGNATURE)和时间类型的签署控件**，**不支持填写控件** 。
3. 请确保C端签署人在批量签署合同中**为待签署状态**，如需顺序签署请待前一位参与人签署完成后，再创建该C端用户的签署链接。
4. 该签署链接**有效期为30分钟**，过期后将失效，如需签署可重新创建批量签署链接 。
5. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档(分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式)，如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
6. 因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
  async CreateBatchQuickSignUrl(
    req: CreateBatchQuickSignUrlRequest,
    cb?: (error: string, rep: CreateBatchQuickSignUrlResponse) => void
  ): Promise<CreateBatchQuickSignUrlResponse> {
    return this.request("CreateBatchQuickSignUrl", req, cb)
  }

  /**
     * 此接口用于查询合同流程的详情信息，支持查询多个（数量不能超过100）。

适用场景：可用于主动查询某个合同详情信息。
     */
  async DescribeFlowInfo(
    req: DescribeFlowInfoRequest,
    cb?: (error: string, rep: DescribeFlowInfoResponse) => void
  ): Promise<DescribeFlowInfoResponse> {
    return this.request("DescribeFlowInfo", req, cb)
  }

  /**
     * 新增/删除企业应用集成中的回调配置。
新增回调配置只会增加不存在的CallbackUrl；删除操作将针对找到的相同CallbackUrl的配置进行删除。
请确保回调地址能够接收并处理 HTTP POST 请求，并返回状态码 200 以表示处理正常。
更多回调相关的说明参考文档[回调通知能力](https://qian.tencent.com/developers/company/callback_types_v2)
     */
  async ModifyApplicationCallbackInfo(
    req: ModifyApplicationCallbackInfoRequest,
    cb?: (error: string, rep: ModifyApplicationCallbackInfoResponse) => void
  ): Promise<ModifyApplicationCallbackInfoResponse> {
    return this.request("ModifyApplicationCallbackInfo", req, cb)
  }

  /**
     * 此接口用于启动流程。它是模板发起合同的最后一步。
在[创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)和[创建电子文档](https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument)之后，用于开始整个合同流程,  推进流程进入到签署环节。

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)

注：
1.<font color="red">合同发起后就会扣减合同的额度</font>, 只有撤销没有参与方签署过或只有自动签署签署过的合同，才会返还合同额度。（过期，拒签，签署完成，解除完成等状态不会返还额度）

2.<font color="red">静默（自动）签署不支持非本企业合同签署方存在填写</font>功能

3.<font color="red">在发起签署流程之前，建议等待 [PDF合成完成的回调](https://qian.tencent.com/developers/company/callback_types_file_resources)</font>，尤其是当模板中存在动态表格等复杂填写控件时，因为合成过程可能会耗费秒级别的时间。
     */
  async StartFlow(
    req: StartFlowRequest,
    cb?: (error: string, rep: StartFlowResponse) => void
  ): Promise<StartFlowResponse> {
    return this.request("StartFlow", req, cb)
  }

  /**
     * 用于撤销合同流程<br/>
适用场景：如果某个合同流程当前至少还有一方没有签署，则可通过该接口取消该合同流程。常用于合同发错、内容填错，需要及时撤销的场景。<br/>
- **可撤回合同状态**：未全部签署完成
- **不撤回合同状态**：已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态。

注:
1. 如果合同流程中的参与方均已签署完毕，则无法通过该接口撤销合同，签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/companyApis/operateFlows/CreateReleaseFlow" target="_blank">发起解除合同流程</a>接口。

2. 有对应合同撤销权限的人:  <font color='red'>合同的发起人（并已经授予撤销权限）或者发起人所在企业的超管、法人</font>
![image](https://qcloudimg.tencent-cloud.cn/raw/1f9f07fea6a70766cd286e0d58682ee2.png)

3. <font color='red'>只有撤销没有参与方签署过或只有自动签署签署过的合同，才会返还合同额度。</font>

4.  撤销后可以看合同PDF内容的人员： 发起方的超管， 发起方自己，发起方撤销合同的操作人员，已经签署合同、已经填写合同、邀请填写已经补充信息的参与人员
     */
  async CancelFlow(
    req: CancelFlowRequest,
    cb?: (error: string, rep: CancelFlowResponse) => void
  ): Promise<CancelFlowResponse> {
    return this.request("CancelFlow", req, cb)
  }

  /**
     * 此接口（DescribeFlowTemplates）用于查询本企业模板列表信息。


**适用场景**
该接口常用来配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument" target="_blank">模板发起合同-创建电子文档</a>接口，作为创建电子文档的前置接口使用。
通过此接口查询到模板信息后，再通过调用创建电子文档接口，指定模板ID，指定模板中需要的填写控件内容等，完成电子文档的创建。

**一个模板通常会包含以下结构信息** 

- 模板模板ID, 模板名字等基本信息
- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方
- 发起方和签署方的填写控件 Components
- 签署方的签署控件 SignComponents

![image](https://qcloudimg.tencent-cloud.cn/raw/ab81fa948a0a6fea14f48cac91d0e36a/channel_DescribeTemplates.png)

模板中各元素的层级关系, 所有的填写控件和签署控件都归属某一个角色(通过控件的ComponentRecipientId来关联)
![image](https://qcloudimg.tencent-cloud.cn/raw/45c638bd93f9c8024763add9ab47c27f.png)
     */
  async DescribeFlowTemplates(
    req: DescribeFlowTemplatesRequest,
    cb?: (error: string, rep: DescribeFlowTemplatesResponse) => void
  ): Promise<DescribeFlowTemplatesResponse> {
    return this.request("DescribeFlowTemplates", req, cb)
  }

  /**
   * 本接口（DeleteSealPolicies）用于撤销企业员工持有的印章权限
   */
  async DeleteSealPolicies(
    req: DeleteSealPoliciesRequest,
    cb?: (error: string, rep: DeleteSealPoliciesResponse) => void
  ): Promise<DeleteSealPoliciesResponse> {
    return this.request("DeleteSealPolicies", req, cb)
  }

  /**
     * 本接口（DescribeFileUrls）用于查询文件的下载URL。
适用场景：通过传参合同流程编号，下载对应的合同PDF文件流到本地。
     */
  async DescribeFileUrls(
    req: DescribeFileUrlsRequest,
    cb?: (error: string, rep: DescribeFileUrlsResponse) => void
  ): Promise<DescribeFileUrlsResponse> {
    return this.request("DescribeFileUrls", req, cb)
  }

  /**
     * 获取设置自动签印章小程序链接。

注意：
<ul><li>需要<code>企业开通自动签</code>后使用。</li>
<li>仅支持<code>已经开通了自动签的个人</code>更换自动签印章。</li>
<li>链接有效期默认7天，<code>最多30天</code>。</li>
<li>该接口的链接适用于<code>小程序</code>端。</li>
<li>该接口不会扣除您的合同套餐，暂不参与计费。</li></ul>
     */
  async CreateUserAutoSignSealUrl(
    req: CreateUserAutoSignSealUrlRequest,
    cb?: (error: string, rep: CreateUserAutoSignSealUrlResponse) => void
  ): Promise<CreateUserAutoSignSealUrlResponse> {
    return this.request("CreateUserAutoSignSealUrl", req, cb)
  }

  /**
     * 获取个人用户自动签的开通链接。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
  async CreateUserAutoSignEnableUrl(
    req: CreateUserAutoSignEnableUrlRequest,
    cb?: (error: string, rep: CreateUserAutoSignEnableUrlResponse) => void
  ): Promise<CreateUserAutoSignEnableUrlResponse> {
    return this.request("CreateUserAutoSignEnableUrl", req, cb)
  }

  /**
     * 提交合同组签署流程审批结果的适用场景包括：

1. 在使用[通过多文件创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByFiles)或[通过多模板创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByTemplates)创建合同组签署流程时，若指定了以下参数 为true，则可以调用此接口提交企业内部签署审批结果。即使是自动签署也需要进行审核通过才会进行签署。
  - [FlowGroupInfo.NeedSignReview](https://qian.tencent.com/developers/companyApis/dataTypes/#flowgroupinfo)
  - [ApproverInfo.ApproverNeedSignReview](https://qian.tencent.com/developers/companyApis/dataTypes/#approverinfo)


2. 同一合同组，同一签署人可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     */
  async CreateFlowGroupSignReview(
    req: CreateFlowGroupSignReviewRequest,
    cb?: (error: string, rep: CreateFlowGroupSignReviewResponse) => void
  ): Promise<CreateFlowGroupSignReviewResponse> {
    return this.request("CreateFlowGroupSignReview", req, cb)
  }

  /**
     * 此接口（UnbindEmployeeUserIdWithClientOpenId）用于解除电子签系统员工UserId与客户系统员工OpenId之间的绑定关系。

注：`在调用此接口时，需确保OpenId已通过调用`<a href="https://qian.tencent.com/developers/companyApis/staffs/BindEmployeeUserIdWithClientOpenId" target="_blank">BindEmployeeUserIdWithClientOpenId</a>`接口与电子签系统的UserId绑定过。若OpenId未经过绑定，则无法使用此接口进行解绑操作。`
     */
  async UnbindEmployeeUserIdWithClientOpenId(
    req: UnbindEmployeeUserIdWithClientOpenIdRequest,
    cb?: (error: string, rep: UnbindEmployeeUserIdWithClientOpenIdResponse) => void
  ): Promise<UnbindEmployeeUserIdWithClientOpenIdResponse> {
    return this.request("UnbindEmployeeUserIdWithClientOpenId", req, cb)
  }

  /**
     * 客户可以主动调用生成实名链接去做C端用户实名，会对实名的用户进行打标记为调用链接客户的用户
使用场景：
用户集成场景
使用限制：
此接口需要购买单独的实名套餐包方可调用，如有需求请联系对接人员评估
     */
  async CreateUserVerifyUrl(
    req: CreateUserVerifyUrlRequest,
    cb?: (error: string, rep: CreateUserVerifyUrlResponse) => void
  ): Promise<CreateUserVerifyUrlResponse> {
    return this.request("CreateUserVerifyUrl", req, cb)
  }

  /**
     * 本接口（CreateEmbedWebUrl）用于创建嵌入Web的链接，支持以下类型的Web链接创建：
1. 创建印章
2. 创建模板
3. 修改模板
4. 预览模板
5. 预览合同流程

用户可以通过这些链接快速将其集成到自己的系统中。
     */
  async CreateEmbedWebUrl(
    req: CreateEmbedWebUrlRequest,
    cb?: (error: string, rep: CreateEmbedWebUrlResponse) => void
  ): Promise<CreateEmbedWebUrlResponse> {
    return this.request("CreateEmbedWebUrl", req, cb)
  }

  /**
   * 对合同流程文件进行数字签名验证，判断数字签名是否有效，合同文件内容是否被篡改。
   */
  async VerifyPdf(
    req: VerifyPdfRequest,
    cb?: (error: string, rep: VerifyPdfResponse) => void
  ): Promise<VerifyPdfResponse> {
    return this.request("VerifyPdf", req, cb)
  }

  /**
     * 管理企业扩展服务 ，企业经办人需要是企业超管或者法人。

跳转小程序的几种方式：主要是设置不同的EndPoint
1. 通过链接Url直接跳转到小程序，不需要返回
设置EndPoint为WEIXINAPP，得到链接打开即可。

2. 客户App直接跳转到小程序-->腾讯电子签小程序操作完成-->返回App
跳转到小程序的实现，参考官方文档<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html">打开 App</a>
设置EndPoint为APP，得到path。

3. 客户小程序直接跳到电子签小程序-->腾讯电子签小程序操作完成--->回到客户小程序
跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>
设置EndPoint为APP，得到path。

4.其中小程序的原始Id如下，或者查看小程序信息自助获取。

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
  async ModifyExtendedService(
    req: ModifyExtendedServiceRequest,
    cb?: (error: string, rep: ModifyExtendedServiceResponse) => void
  ): Promise<ModifyExtendedServiceResponse> {
    return this.request("ModifyExtendedService", req, cb)
  }

  /**
     * 此接口用于获取企业批量认证异步任务的状态及结果。

前提条件：已调用 CreateBatchOrganizationRegistrationTasks创建企业批量认证链接任务接口，并得到了任务Id。

异步任务的处理完成时间视当前已提交的任务量、任务的复杂程度等因素决定，正常情况下 3~5 秒即可完成，但也可能需要更长的时间
     */
  async DescribeBatchOrganizationRegistrationUrls(
    req: DescribeBatchOrganizationRegistrationUrlsRequest,
    cb?: (error: string, rep: DescribeBatchOrganizationRegistrationUrlsResponse) => void
  ): Promise<DescribeBatchOrganizationRegistrationUrlsResponse> {
    return this.request("DescribeBatchOrganizationRegistrationUrls", req, cb)
  }

  /**
     * 指定需要批量撤回的签署流程Id，以获取批量撤销链接。
客户需指定要撤回的签署流程Id，最多可指定100个，超过100则不处理。
接口调用成功后，将返回批量撤回合同的链接。通过点击链接，可跳转至电子签小程序完成批量撤回操作。

- **可撤回合同状态**：未全部签署完成
- **不撤回合同状态**：已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态。

批量撤销结果可以通过接口返回的TaskId关联[批量撤销任务结果回调](https://qian.tencent.com/developers/company/callback_types_contracts_sign#%E4%B9%9D-%E6%89%B9%E9%87%8F%E6%92%A4%E9%94%80%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83)或通过接口[查询批量撤销签署流程任务结果](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)


注：
1. 如果合同流程中的参与方均已签署完毕，则无法通过该接口撤销合同，签署完毕的合同需要双方走解除流程将合同作废，可以参考<a href="https://qian.tencent.com/developers/companyApis/operateFlows/CreateReleaseFlow" target="_blank">发起解除合同流程</a>接口。

2. 有对应合同撤销权限的人:  <font color='red'>合同的发起人（并已经授予撤销权限）或者发起人所在企业的超管、法人</font>
![image](https://qcloudimg.tencent-cloud.cn/raw/1f9f07fea6a70766cd286e0d58682ee2.png)

3. <font color='red'>只有撤销没有参与方签署过或只有自动签署签署过的合同，才会返还合同额度。</font>
     */
  async CreateBatchCancelFlowUrl(
    req: CreateBatchCancelFlowUrlRequest,
    cb?: (error: string, rep: CreateBatchCancelFlowUrlResponse) => void
  ): Promise<CreateBatchCancelFlowUrlResponse> {
    return this.request("CreateBatchCancelFlowUrl", req, cb)
  }

  /**
   * 此接口（DeleteIntegrationDepartment）用于删除企业的部门信息。
   */
  async DeleteIntegrationDepartment(
    req: DeleteIntegrationDepartmentRequest,
    cb?: (error: string, rep: DeleteIntegrationDepartmentResponse) => void
  ): Promise<DeleteIntegrationDepartmentResponse> {
    return this.request("DeleteIntegrationDepartment", req, cb)
  }

  /**
     * 此接口（BindEmployeeUserIdWithClientOpenId）用于将电子签系统员工UserId与客户系统员工OpenId进行绑定。

此OpenId只在 [更新企业员工信息 ](https://qian.tencent.com/developers/companyApis/staffs/UpdateIntegrationEmployees)、[移除企业员工](https://qian.tencent.com/developers/companyApis/staffs/DeleteIntegrationEmployees) 等场景下可以使用
     */
  async BindEmployeeUserIdWithClientOpenId(
    req: BindEmployeeUserIdWithClientOpenIdRequest,
    cb?: (error: string, rep: BindEmployeeUserIdWithClientOpenIdResponse) => void
  ): Promise<BindEmployeeUserIdWithClientOpenIdResponse> {
    return this.request("BindEmployeeUserIdWithClientOpenId", req, cb)
  }

  /**
   * 本接口（CreatePreparedPersonalEsign）用于创建导入个人印章（处方单场景专用，使用此接口请与客户经理确认）。
   */
  async CreatePreparedPersonalEsign(
    req: CreatePreparedPersonalEsignRequest,
    cb?: (error: string, rep: CreatePreparedPersonalEsignResponse) => void
  ): Promise<CreatePreparedPersonalEsignResponse> {
    return this.request("CreatePreparedPersonalEsign", req, cb)
  }

  /**
     * 适用场景： 当通过模板或文件发起合同时，若未指定企业签署人信息，则可调用此接口补充或添加签署人。同一签署人可补充多个员工作为或签署人，最终实际签署人取决于谁先领取合同完成签署。

限制条件：

1.本企业（发起方企业）企业微信签署人仅支持通过企业微信UserId或姓名+手机号进行补充。
2.本企业（发起方企业）非企业微信签署人仅支持通过姓名+手机号进行补充。
3.他方企业仅支持通过姓名+手机号进行补充。
4.个人签署人支持通过姓名+手机号进行补充，补充动态签署人时：若个人用户已完成实名，则可通过姓名+证件号码进行补充。
     */
  async CreateFlowApprovers(
    req: CreateFlowApproversRequest,
    cb?: (error: string, rep: CreateFlowApproversResponse) => void
  ): Promise<CreateFlowApproversResponse> {
    return this.request("CreateFlowApprovers", req, cb)
  }

  /**
   * 通过[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)发起批量撤销任务后，可通过此接口查询批量撤销任务的结果。
   */
  async DescribeCancelFlowsTask(
    req: DescribeCancelFlowsTaskRequest,
    cb?: (error: string, rep: DescribeCancelFlowsTaskResponse) => void
  ): Promise<DescribeCancelFlowsTaskResponse> {
    return this.request("DescribeCancelFlowsTask", req, cb)
  }

  /**
     * 本接口（CreateOrganizationAuthUrl）用于生成创建企业认证链接。
用于业务方系统自己生成认证链接进行跳转.而不用电子签自带的生成链接

注： **此接口需要购买单独的实名套餐包方可调用，如有需求请联系对接人员评估**
     */
  async CreateOrganizationAuthUrl(
    req: CreateOrganizationAuthUrlRequest,
    cb?: (error: string, rep: CreateOrganizationAuthUrlResponse) => void
  ): Promise<CreateOrganizationAuthUrlResponse> {
    return this.request("CreateOrganizationAuthUrl", req, cb)
  }

  /**
   * 解绑员工与对应角色的关系，如需绑定请使用 CreateIntegrationUserRoles 接口。
   */
  async DeleteIntegrationRoleUsers(
    req: DeleteIntegrationRoleUsersRequest,
    cb?: (error: string, rep: DeleteIntegrationRoleUsersResponse) => void
  ): Promise<DeleteIntegrationRoleUsersResponse> {
    return this.request("DeleteIntegrationRoleUsers", req, cb)
  }

  /**
     * 提交企业流程审批结果 
**当前存在两种审核操作：**
<ul>
<li>签署审核
<ul>
<li>在通过接口<ul>
<li>CreateFlowByFiles</li>
<li>CreateFlow</li>
<li>CreateFlowGroupByTemplates</li>
<li>CreateFlowGroupByFiles</li>
<li>CreatePrepareFlow</li>
</ul> 
发起签署流程时，通过指定NeedSignReview为true，则可以调用此接口，并指定operate=SignReview，以提交企业内部签署审批结果</li>
<li>在通过接口
<ul>
<li>CreateFlowByFiles</li>
<li>CreateFlow</li>
<li>CreateFlowGroupByTemplates</li>
<li>CreateFlowGroupByFiles</li>
</ul>
发起签署流程时，通过指定签署人ApproverNeedSignReview为true，则可以调用此接口，并指定operate=SignReview，并指定RecipientId，以提交企业内部签署审批结果</li>
</ul>
</li>
<li>发起审核
 <ul>
<li>通过接口CreatePrepareFlow指定发起后需要审核，那么可以调用此接口，并指定operate=CreateReview，以提交企业内部审批结果。可以多次提交审批结果，但一旦审批通过，后续提交的结果将无效
</li>
</ul>
</li>
</ul>
     */
  async CreateFlowSignReview(
    req: CreateFlowSignReviewRequest,
    cb?: (error: string, rep: CreateFlowSignReviewResponse) => void
  ): Promise<CreateFlowSignReviewResponse> {
    return this.request("CreateFlowSignReview", req, cb)
  }

  /**
     * 创建发起流程web页面
<br/>适用场景：通过该接口（CreatePrepareFlow）传入合同文件/模板编号及签署人信息，可获得发起流程的可嵌入页面，在页面完成签署控件等信息的编辑与确认后，快速发起流程。
<br/>注：该接口包含模板/文件发起流程的全部功能，调用接口后不会立即发起，需在可嵌入页面点击按钮进行发起流程。
     */
  async CreatePrepareFlow(
    req: CreatePrepareFlowRequest,
    cb?: (error: string, rep: CreatePrepareFlowResponse) => void
  ): Promise<CreatePrepareFlowResponse> {
    return this.request("CreatePrepareFlow", req, cb)
  }

  /**
     * 创建签署流程电子文档<br />

###  调用流程
该接口需要给对应的流程指定一个模板id，并且填充该模板中需要补充的信息。需要配置<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow" target="_blank">创建签署流程</a>和<a href="https://qian.tencent.com/developers/companyApis/startFlows/StartFlow" target="_blank">发起签署流程</a>接口使用。具体逻辑可以参考下图:

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)


### 填充模板中定义的填写控件
模板中配置的<font color="red">发起人填充控件</font>可以通过本接口的**FormFields数组**字段填充

![image](https://qcloudimg.tencent-cloud.cn/raw/37457e0e450fc221effddfcb8b1bad55.png)

填充的传参示例如下

```
    request.FormFields = [{
            "ComponentName": "项目的名字",
            "ComponentValue": "休闲山庄"
        }, {
            "ComponentName": "项目的地址",
            "ComponentValue": "凤凰山北侧",
        }, {
            "ComponentName": "范围",
            "ComponentValue": "凤凰山至107国道",
        }, {
            "ComponentName": "面积",
            "ComponentValue": "100亩",
        }, {
            "ComponentName": "基本情况",
            "ComponentValue": "完好",
        }, , {
            "ComponentName": "用途",
            "ComponentValue": "经营农家乐",
        }
    ]
```
合成后合同样子示例

![image](https://qcloudimg.tencent-cloud.cn/raw/140a2fb771ac66a185d0a000d37485f6.png)
     */
  async CreateDocument(
    req: CreateDocumentRequest,
    cb?: (error: string, rep: CreateDocumentResponse) => void
  ): Promise<CreateDocumentResponse> {
    return this.request("CreateDocument", req, cb)
  }

  /**
     * 此接口（CreateMultiFlowSignQRCode）用于创建一码多签签署码。

**适用场景**:
签署人可通过扫描二维码补充签署信息进行实名签署。常用于提前不知道签署人的身份信息场景，例如：劳务工招工、大批量员工入职等场景。

**注意**:
1. 本接口适用于**发起方没有填写控件的 B2C或者单C模板**,  若是B2C模板,还要满足以下任意一个条件
    - 模板中配置的签署顺序是无序
    - B端企业的签署方式是静默签署
    - B端企业是非首位签署
2. 通过一码多签签署码发起的合同，合同涉及到的回调消息可参考文档[合同发起及签署相关回调
]( https://qian.tencent.com/developers/company/callback_types_contracts_sign)
3. 用户通过一码多签签署码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档[签署二维码相关回调](https://qian.tencent.com/developers/company/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83)

签署码的样式如下图:
![image](https://qcloudimg.tencent-cloud.cn/raw/27317cf5aacb094fb1dc6f94179a5148.png )
     */
  async CreateMultiFlowSignQRCode(
    req: CreateMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: CreateMultiFlowSignQRCodeResponse) => void
  ): Promise<CreateMultiFlowSignQRCodeResponse> {
    return this.request("CreateMultiFlowSignQRCode", req, cb)
  }

  /**
     * 提交申请出证报告任务并返回报告ID。

注意：
<ul><li>使用此功能`需搭配出证套餐` ，使用前请联系对接的客户经理沟通。</li>
<li>操作人必须是`发起方或者签署方企业的(非走授权书认证)法人或者超管`。</li>
<li>合同流程必须所有参与方`已经签署完成`。</li>
<li>出证过程需一定时间，建议在`提交出证任务后的24小时之后`，通过<a href="https://qian.tencent.com/developers/companyApis/certificate/DescribeFlowEvidenceReport" target="_blank">获取出证报告任务执行结果</a>接口进行查询执行结果和出证报告的下载URL。</li></ul>

<svg id="SvgjsSvg1006" width="262" height="229" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern patternUnits="userSpaceOnUse" id="pattern_mark_0" width="300" height="300"><text x="150" y="100" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><pattern patternUnits="userSpaceOnUse" id="pattern_mark_1" width="300" height="300"><text x="150" y="200" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><marker id="SvgjsMarker1021" markerWidth="12" markerHeight="8" refX="9" refY="4" viewBox="0 0 12 8" orient="auto" markerUnits="userSpaceOnUse" stroke-dasharray="0,0"><path id="SvgjsPath1022" d="M0,0 L12,4 L0,8 L0,0" fill="#323232" stroke="#323232" stroke-width="1"></path></marker></defs><rect id="svgbackgroundid" width="262" height="229" fill="transparent"></rect><rect id="SvgjsRect1009" width="262" height="229" fill="url(#pattern_mark_0)"></rect><rect id="SvgjsRect1010" width="262" height="229" fill="url(#pattern_mark_1)"></rect><g id="SvgjsG1011" transform="translate(31.75,25)"><path id="SvgjsPath1012" d="M 0 0L 198 0L 198 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1013"><text id="SvgjsText1014" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="178px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1015" dy="16" x="99"><tspan id="SvgjsTspan1016" style="text-decoration:;fill: rgb(28, 30, 33);">CreateFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1017" dy="16" x="99"><tspan id="SvgjsTspan1018" style="text-decoration:;fill: rgb(51, 51, 51);">提交申请出证报告任务</tspan></tspan></text></g></g><g id="SvgjsG1019"><path id="SvgjsPath1020" d="M130.75 84.5L130.75 114.5L130.75 114.5L130.75 143.2" stroke="#323232" stroke-width="1" fill="none" marker-end="url(#SvgjsMarker1021)"></path></g><g id="SvgjsG1023" transform="translate(25,145)"><path id="SvgjsPath1024" d="M 0 0L 211.5 0L 211.5 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1025"><text id="SvgjsText1026" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="192px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1027" dy="16" x="106"><tspan id="SvgjsTspan1028" style="text-decoration:;fill: rgb(28, 30, 33);">DescribeFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1029" dy="16" x="106"><tspan id="SvgjsTspan1030" style="text-decoration:;fill: rgb(51, 51, 51);">获取出证报告任务执行结果</tspan></tspan></text></g></g></svg>
     */
  async CreateFlowEvidenceReport(
    req: CreateFlowEvidenceReportRequest,
    cb?: (error: string, rep: CreateFlowEvidenceReportResponse) => void
  ): Promise<CreateFlowEvidenceReportResponse> {
    return this.request("CreateFlowEvidenceReport", req, cb)
  }

  /**
     * 通过模板创建签署流程<br/>
适用场景：在标准制式的合同场景中，可通过提前预制好模板文件，每次调用模板文件的id，补充合同内容信息及签署信息生成电子合同。
<table>
	<thead>
		<tr>
			<th>签署人类别</th>
			<th>需要提前准备的信息</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>自己企业的员工签署（未认证加入或已认证加入）</td>
			<td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
		</tr>
		<tr>
			<td>自己企业的员工签署（已认证加入）</td>
			<td>签署企业的名字、员工在电子签平台的ID（UserId）</td>
		</tr>
		<tr>
			<td>其他企业的员工签署</td>
			<td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
		</tr>
		<tr>
			<td>个人（自然人）签署</td>
			<td>个人的真实名字、个人的触达手机号、个人的身份证（证件号非必传）</td>
		</tr>
	</tbody>
</table>


注：配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument" target="_blank">创建电子文档</a>和<a href="https://qian.tencent.com/developers/companyApis/startFlows/StartFlow" target="_blank">发起签署流程</a>接口使用。整体的逻辑如下图

![image](https://qcloudimg.tencent-cloud.cn/raw/06f2bc0f1772d8deac2f92b5df61a5ac.png)

注：**静默（自动）签署不支持合同签署方存在填写**功能
<br>

<font color="red">相关视频指引</font> <br>
1. <a href="https://dyn.ess.tencent.cn/guide/apivideo/createflow_seversign.mp4" target="_blank">创建静默（自动）签署模板和开通自动签署</a><br>
2. <a href="https://dyn.ess.tencent.cn/guide/apivideo/flow_document_start.mp4" target="_blank">用模板创建发起合同</a><br>
     */
  async CreateFlow(
    req: CreateFlowRequest,
    cb?: (error: string, rep: CreateFlowResponse) => void
  ): Promise<CreateFlowResponse> {
    return this.request("CreateFlow", req, cb)
  }

  /**
     * 本接口（CreateBatchOrganizationRegistrationTasks）用于批量创建企业认证链接
该接口为异步提交任务接口,需要跟查询企业批量认证链接(DescribeBatchOrganizationRegistrationUrls) 配合使用.

批量创建链接有以下限制：

1. 单次最多创建10个企业。
2. 一天同一家企业最多创建8000家企业。
3. 同一批创建的企业不能重复 其中包括 企业名称，企业统一信用代码
4. 跳转到小程序的实现，参考微信官方文档（分为全屏、半屏两种方式），如何配置也可以请参考: 跳转电子签小程序配置

注：

1. **此接口需要购买单独的实名套餐包方可调用，如有需求请联系对接人员评估**
  
2. 如果生成的链接是APP链接，跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>
  

**腾讯电子签小程序的AppID 和 原始Id如下:**

| 小程序 | AppID | 原始ID |
| --- | --- | --- |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
  async CreateBatchOrganizationRegistrationTasks(
    req: CreateBatchOrganizationRegistrationTasksRequest,
    cb?: (error: string, rep: CreateBatchOrganizationRegistrationTasksResponse) => void
  ): Promise<CreateBatchOrganizationRegistrationTasksResponse> {
    return this.request("CreateBatchOrganizationRegistrationTasks", req, cb)
  }

  /**
     * 用于客户企业在调用生成[C端用户实名链接（CreateUserVerifyUrl）](https://qian.tencent.com/developers/companyApis/users/CreateUserVerifyUrl)接口之前判断C端用户是否实名，如果已经实名，就不需要再次调用生成C端链接接口去实名
注意：此接口仅会返回当前员工是否通过[C端用户实名链接（CreateUserVerifyUrl）](https://qian.tencent.com/developers/companyApis/users/CreateUserVerifyUrl)所实名的员工是否实名，并不会返回个人用户自己在电子签进行实名的状况
     */
  async DescribeUserVerifyStatus(
    req: DescribeUserVerifyStatusRequest,
    cb?: (error: string, rep: DescribeUserVerifyStatusResponse) => void
  ): Promise<DescribeUserVerifyStatusResponse> {
    return this.request("DescribeUserVerifyStatus", req, cb)
  }

  /**
     * 发起解除协议的主要应用场景为：基于一份已经签署的合同（签署流程），进行解除操作。
解除协议的模板是官方提供 ，经过提供法务审核，暂不支持自定义。

注意：
<ul><li><code>原合同必须签署完</code>成后才能发起解除协议。</li>
<li>只有原合同企业类型的参与人才能发起解除协议，<code>个人参与方不能发起解除协议</code>。</li>
<li>原合同个人类型参与人必须是解除协议的参与人，<code>不能更换其他第三方个人</code>参与解除协议。</li>
<li>如果原合同企业参与人无法参与解除协议，可以指定同企业具有同等权限的<code>企业员工代为处理</code>。</li>
<li>发起解除协议同发起其他企业合同一样，也会参与合同<code>扣费</code>，扣费标准同其他类型合同。</li>
<li>在解除协议签署完毕后，原合同及解除协议均变为已解除状态。</li>
<li>非原合同企业参与人发起解除协议时，需要有<code>解除合同的权限</code>。</li>
</ul>
     */
  async CreateReleaseFlow(
    req: CreateReleaseFlowRequest,
    cb?: (error: string, rep: CreateReleaseFlowResponse) => void
  ): Promise<CreateReleaseFlowResponse> {
    return this.request("CreateReleaseFlow", req, cb)
  }

  /**
     * 获取跳转至腾讯电子签小程序的签署链接

适用场景：如果需要签署人在自己的APP、小程序、H5应用中签署，可以通过此接口获取跳转腾讯电子签小程序的签署跳转链接。

跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>

注：
<ul><li>1. 如果签署人是在PC端扫码签署，可以通过生成跳转链接自主转换成二维码，让签署人在PC端扫码签署</li>
<li>2. 签署链接的有效期为<font color="red">90天</font>，超过有效期链接不可用</li>
<li>3. 如果需跳转详情页（即PathType值为1）进行填写或签署合同，需指定签署方信息:姓名、手机号码、企业名称等，才能生成正确的跳转链接</li>
<li>4. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）</li></ul>

其中小程序的原始Id如下，或者查看小程序信息自助获取。

| 小程序 | AppID | 原始ID |
| ------------ | ------------ | ------------ |
| 腾讯电子签（正式版） | wxa023b292fd19d41d | gh_da88f6188665 |
| 腾讯电子签Demo | wx371151823f6f3edf | gh_39a5d3de69fa |
     */
  async CreateSchemeUrl(
    req: CreateSchemeUrlRequest,
    cb?: (error: string, rep: CreateSchemeUrlResponse) => void
  ): Promise<CreateSchemeUrlResponse> {
    return this.request("CreateSchemeUrl", req, cb)
  }

  /**
     * 通过此接口获取个人用户自动签的开通状态。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
  async DescribeUserAutoSignStatus(
    req: DescribeUserAutoSignStatusRequest,
    cb?: (error: string, rep: DescribeUserAutoSignStatusResponse) => void
  ): Promise<DescribeUserAutoSignStatusResponse> {
    return this.request("DescribeUserAutoSignStatus", req, cb)
  }

  /**
     * 此接口（CreateFlowGroupByTemplates）可用于通过多个模板创建合同组签署流程。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。

注：`合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`
     */
  async CreateFlowGroupByTemplates(
    req: CreateFlowGroupByTemplatesRequest,
    cb?: (error: string, rep: CreateFlowGroupByTemplatesResponse) => void
  ): Promise<CreateFlowGroupByTemplatesResponse> {
    return this.request("CreateFlowGroupByTemplates", req, cb)
  }

  /**
     * 查询企业扩展服务的开通和授权情况，当前支持查询以下内容：

1. **企业自动签署**
2. **批量签署授权**
3. **企业与港澳台居民签署合同**
4. **拓宽签署方年龄限制**
5. **个人签署方仅校验手机号**
6. **隐藏合同经办人姓名**
7. **正楷临摹签名失败后更换其他签名类型**
8. **短信通知签署方**
9. **个人签署方手动签字**
10. **骑缝章**
11. **签署密码开通引导**


对应能力开通页面在Web控制台-更多-企业设置-拓展服务，如下图所示:

![image](https://qcloudimg.tencent-cloud.cn/raw/7d79746ecca1c5fe878a2ec36ed69c23.jpg)

注: <font color='red'>所在企业的超管、法人才有权限调用此接口</font>(Operator.UserId需要传递超管或者法人的UserId)
     */
  async DescribeExtendedServiceAuthInfos(
    req: DescribeExtendedServiceAuthInfosRequest,
    cb?: (error: string, rep: DescribeExtendedServiceAuthInfosResponse) => void
  ): Promise<DescribeExtendedServiceAuthInfosResponse> {
    return this.request("DescribeExtendedServiceAuthInfos", req, cb)
  }

  /**
     * 生成集团加入链接，分享至子企业超管或者法人，子企业管理员可通过链接加入集团。
注意:调用当前接口的企业 必须为集团企业。如何成为集团企业可以参考下面的文档[集团操作文档](https://qian.tencent.com/document/86707)
     */
  async CreateOrganizationGroupInvitationLink(
    req: CreateOrganizationGroupInvitationLinkRequest,
    cb?: (error: string, rep: CreateOrganizationGroupInvitationLinkResponse) => void
  ): Promise<CreateOrganizationGroupInvitationLinkResponse> {
    return this.request("CreateOrganizationGroupInvitationLink", req, cb)
  }

  /**
     * 此接口（UploadFiles）文件上传。<br/>

适用场景：用于合同，印章的文件上传。文件上传以后，
如果是PDF格式文件可配合<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles" target="_blank">用PDF文件创建签署流程</a>接口进行合同流程的发起
如果是其他类型可以配合<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务</a>接口转换成PDF文件

注: 
1. 图片类型(png/jpg/jpeg)限制大小为5M以下, PDF/word/excel等其他格式限制大小为60M以下
2. 调用此接口时需要设置单独的Domain请求域名，<font color="red">联调开发环境为: file.test.ess.tencent.cn，正式环境需要设置为:file.ess.tencent.cn</font>，代码示例
```
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
```

<font color="red">相关视频指引</font> <br>
1. <a href="https://dyn.ess.tencent.cn/guide/apivideo/ess_uploadfiles.mp4" target="_blank">上传用于合同发起的PDF文件代码编写示例</a><br>
     */
  async UploadFiles(
    req: UploadFilesRequest,
    cb?: (error: string, rep: UploadFilesResponse) => void
  ): Promise<UploadFilesResponse> {
    return this.request("UploadFiles", req, cb)
  }

  /**
     * 获取出证报告任务执行结果，返回报告 URL。



注意：
<ul><li>使用此功能`需搭配出证套餐` ，使用前请联系对接的客户经理沟通。</li>
<li>需调用创建并返回出证报告接口<a href="https://qian.tencent.com/developers/companyApis/certificate/CreateFlowEvidenceReport" target="_blank">提交申请出证报告任务</a>获取报告编号后调用当前接口获取报告链接。</li></ul>

<svg id="SvgjsSvg1006" width="262" height="229" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern patternUnits="userSpaceOnUse" id="pattern_mark_0" width="300" height="300"><text x="150" y="100" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><pattern patternUnits="userSpaceOnUse" id="pattern_mark_1" width="300" height="300"><text x="150" y="200" fill="rgba(229,229,229,0.8)" font-size="18" transform="rotate(-45, 150, 150)" style="dominant-baseline: middle; text-anchor: middle;"></text></pattern><marker id="SvgjsMarker1021" markerWidth="12" markerHeight="8" refX="9" refY="4" viewBox="0 0 12 8" orient="auto" markerUnits="userSpaceOnUse" stroke-dasharray="0,0"><path id="SvgjsPath1022" d="M0,0 L12,4 L0,8 L0,0" fill="#323232" stroke="#323232" stroke-width="1"></path></marker></defs><rect id="svgbackgroundid" width="262" height="229" fill="transparent"></rect><rect id="SvgjsRect1009" width="262" height="229" fill="url(#pattern_mark_0)"></rect><rect id="SvgjsRect1010" width="262" height="229" fill="url(#pattern_mark_1)"></rect><g id="SvgjsG1011" transform="translate(31.75,25)"><path id="SvgjsPath1012" d="M 0 0L 198 0L 198 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1013"><text id="SvgjsText1014" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="178px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1015" dy="16" x="99"><tspan id="SvgjsTspan1016" style="text-decoration:;fill: rgb(28, 30, 33);">CreateFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1017" dy="16" x="99"><tspan id="SvgjsTspan1018" style="text-decoration:;fill: rgb(51, 51, 51);">提交申请出证报告任务</tspan></tspan></text></g></g><g id="SvgjsG1019"><path id="SvgjsPath1020" d="M130.75 84.5L130.75 114.5L130.75 114.5L130.75 143.2" stroke="#323232" stroke-width="1" fill="none" marker-end="url(#SvgjsMarker1021)"></path></g><g id="SvgjsG1023" transform="translate(25,145)"><path id="SvgjsPath1024" d="M 0 0L 211.5 0L 211.5 59L 0 59Z" stroke="rgba(86,146,48,1)" stroke-width="1" fill-opacity="1" fill="#e7ebed"></path><g id="SvgjsG1025"><text id="SvgjsText1026" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="192px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="10.375" transform="rotate(0)"><tspan id="SvgjsTspan1027" dy="16" x="106"><tspan id="SvgjsTspan1028" style="text-decoration:;fill: rgb(28, 30, 33);">DescribeFlowEvidenceReport</tspan></tspan><tspan id="SvgjsTspan1029" dy="16" x="106"><tspan id="SvgjsTspan1030" style="text-decoration:;fill: rgb(51, 51, 51);">获取出证报告任务执行结果</tspan></tspan></text></g></g></svg>
     */
  async DescribeFlowEvidenceReport(
    req: DescribeFlowEvidenceReportRequest,
    cb?: (error: string, rep: DescribeFlowEvidenceReportResponse) => void
  ): Promise<DescribeFlowEvidenceReportResponse> {
    return this.request("DescribeFlowEvidenceReport", req, cb)
  }

  /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建待签署的合同流程。<br/>
适用场景：适用非制式的合同文件签署。一般开发者自己有完整的签署文件，可以通过该接口传入完整的PDF文件及流程信息生成待签署的合同流程。<br/>

<table>
	<thead>
		<tr>
			<th>签署人类别</th>
			<th>需要提前准备的信息</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>自己企业的员工签署（未认证加入或已认证加入）</td>
			<td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
		</tr>
		<tr>
			<td>自己企业的员工签署（已认证加入）</td>
			<td>签署企业的名字、员工在电子签平台的ID（UserId）</td>
		</tr>
		<tr>
			<td>其他企业的员工签署</td>
			<td>签署企业的名字、员工的真实名字、员工的触达手机号、员工的证件号（证件号非必传）</td>
		</tr>
		<tr>
			<td>个人（自然人）签署</td>
			<td>个人的真实名字、个人的触达手机号、个人的身份证（证件号非必传）</td>
		</tr>
	</tbody>
</table>



该接口需要依赖[上传文件](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口生成pdf资源编号（FileIds）进行使用。（如果非pdf文件需要调用[创建文件转换任务](https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi)接口转换成pdf资源）<br/>


![image](https://qcloudimg.tencent-cloud.cn/raw/f097a74b289e3e1acd740936bdfe9843.png)

注：
-  合同**发起后就会扣减合同的额度**, 只有撤销没有参与方签署过或只有自动签署签署过的合同，才会返还合同额度。（**过期，拒签，签署完成，解除完成等状态不会返还额度**）
- **静默（自动）签署不支持合同签署方存在填写**功能


<font color="red">相关视频指引</font> <br>
1. <a href="https://dyn.ess.tencent.cn/guide/apivideo/ess_uploadfiles.mp4" target="_blank">上传用于合同发起的PDF文件代码编写示例</a><br>
2.  <a href="https://dyn.ess.tencent.cn/guide/apivideo/ess-CreateFlowByFiles.mp4" target="_blank">用PDF文件创建签署流程编写示例</a><br>
     */
  async CreateFlowByFiles(
    req: CreateFlowByFilesRequest,
    cb?: (error: string, rep: CreateFlowByFilesResponse) => void
  ): Promise<CreateFlowByFilesResponse> {
    return this.request("CreateFlowByFiles", req, cb)
  }

  /**
     * 通过此接口，创建子企业激活记录，集团企业管理员可针对未激活的成员企业进行激活。
激活子企业时请保证子企业 lisence 充足。
这个操作与页面端激活成员企业操作类似
![image](https://qcloudimg.tencent-cloud.cn/raw/c4e76fbac92e4ce451a03601c964793b.png)

p.s.
此接口只能用于激活，不能用于续期。
     */
  async CreateIntegrationSubOrganizationActiveRecord(
    req: CreateIntegrationSubOrganizationActiveRecordRequest,
    cb?: (error: string, rep: CreateIntegrationSubOrganizationActiveRecordResponse) => void
  ): Promise<CreateIntegrationSubOrganizationActiveRecordResponse> {
    return this.request("CreateIntegrationSubOrganizationActiveRecord", req, cb)
  }

  /**
     * 本接口（CreateSeal）用于创建企业电子印章，支持创建企业公章，合同章，财务专用章和人事专用章创建。

1. 可以**通过图片**创建印章，图片最大5MB
2. 可以**系统创建**创建印章, 系统创建的印章样子下图(样式可以调整)

![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage.png)
     */
  async CreateSeal(
    req: CreateSealRequest,
    cb?: (error: string, rep: CreateSealResponse) => void
  ): Promise<CreateSealResponse> {
    return this.request("CreateSeal", req, cb)
  }

  /**
   * 此接口（DescribeIntegrationRoles）用于分页查询企业角色列表，列表按照角色创建时间升序排列。
   */
  async DescribeIntegrationRoles(
    req: DescribeIntegrationRolesRequest,
    cb?: (error: string, rep: DescribeIntegrationRolesResponse) => void
  ): Promise<DescribeIntegrationRolesResponse> {
    return this.request("DescribeIntegrationRoles", req, cb)
  }

  /**
   * 此接口（CreateIntegrationDepartment）用于创建企业的部门信息，支持绑定客户系统部门ID。
   */
  async CreateIntegrationDepartment(
    req: CreateIntegrationDepartmentRequest,
    cb?: (error: string, rep: CreateIntegrationDepartmentResponse) => void
  ): Promise<CreateIntegrationDepartmentResponse> {
    return this.request("CreateIntegrationDepartment", req, cb)
  }

  /**
     * 此接口（GetTaskResultApi）用来查询转换任务的状态。如需发起转换任务，请使用<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行资源文件的转换操作<br />
前提条件：已调用 <a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>进行文件转换，并得到了返回的转换任务Id。<br />

适用场景：已创建一个文件转换任务，想查询该文件转换任务的状态，或获取转换后的文件资源Id。<br />
注：
1. `大文件转换所需的时间可能会比较长`
     */
  async GetTaskResultApi(
    req: GetTaskResultApiRequest,
    cb?: (error: string, rep: GetTaskResultApiResponse) => void
  ): Promise<GetTaskResultApiResponse> {
    return this.request("GetTaskResultApi", req, cb)
  }

  /**
     * 查询企业扩展服务的授权详情（列表），当前支持查询以下内容：
1. 企业自动签（本企业授权、集团企业授权、合作企业授权）
2. 批量签署能力


注: <font color='red'>所在企业的超管、法人才有权限调用此接口</font>(Agent.ProxyOperator.OpenId 需要传递超管或者法人的OpenId)
     */
  async DescribeExtendedServiceAuthDetail(
    req: DescribeExtendedServiceAuthDetailRequest,
    cb?: (error: string, rep: DescribeExtendedServiceAuthDetailResponse) => void
  ): Promise<DescribeExtendedServiceAuthDetailResponse> {
    return this.request("DescribeExtendedServiceAuthDetail", req, cb)
  }

  /**
   * 通过此接口（DescribeBillUsage）查询该企业的套餐套餐使用情况。
   */
  async DescribeBillUsage(
    req: DescribeBillUsageRequest,
    cb?: (error: string, rep: DescribeBillUsageResponse) => void
  ): Promise<DescribeBillUsageResponse> {
    return this.request("DescribeBillUsage", req, cb)
  }

  /**
   * 此接口（ModifyIntegrationDepartment）用于更新企业的部门信息，支持更新部门名称、客户系统部门ID和部门序号等信息。
   */
  async ModifyIntegrationDepartment(
    req: ModifyIntegrationDepartmentRequest,
    cb?: (error: string, rep: ModifyIntegrationDepartmentResponse) => void
  ): Promise<ModifyIntegrationDepartmentResponse> {
    return this.request("ModifyIntegrationDepartment", req, cb)
  }

  /**
     * 创建企业扩展服务授权，当前仅支持授权 “企业自动签” 和 “批量签署” 给企业员工。
该接口作用和电子签控制台 企业设置-扩展服务-企业自动签署和批量签署授权 两个模块功能相同，可通过该接口授权给企业员工。

注：“企业自动签授权”支持集团代子企业操作，请联系运营开通此功能。
     */
  async CreateExtendedServiceAuthInfos(
    req: CreateExtendedServiceAuthInfosRequest,
    cb?: (error: string, rep: CreateExtendedServiceAuthInfosResponse) => void
  ): Promise<CreateExtendedServiceAuthInfosResponse> {
    return this.request("CreateExtendedServiceAuthInfos", req, cb)
  }

  /**
     * 此接口（CancelMultiFlowSignQRCode）用于废除一码多签签署码。
该接口所需的二维码ID，源自[创建一码多签签署码](https://qian.tencent.com/developers/companyApis/startFlows/CreateMultiFlowSignQRCode)生成的。
如果该签署码尚处于有效期内，可通过本接口将其设置为失效状态。
     */
  async CancelMultiFlowSignQRCode(
    req: CancelMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: CancelMultiFlowSignQRCodeResponse) => void
  ): Promise<CancelMultiFlowSignQRCodeResponse> {
    return this.request("CancelMultiFlowSignQRCode", req, cb)
  }

  /**
   * 此接口（DescribeIntegrationEmployees）用于分页查询企业员工信息列表，支持设置过滤条件以筛选员工查询结果。
   */
  async DescribeIntegrationEmployees(
    req: DescribeIntegrationEmployeesRequest,
    cb?: (error: string, rep: DescribeIntegrationEmployeesResponse) => void
  ): Promise<DescribeIntegrationEmployeesResponse> {
    return this.request("DescribeIntegrationEmployees", req, cb)
  }

  /**
     * 该接口用于发起合同后，生成用户的签署链接 <br/>

**注意**
1. 该接口可生成签署链接的签署人必须仅有手写签名、时间类型和印章类型的签署控件，**不支持填写控件** 。
2. 该签署**链接有效期为30分钟**，过期后将失效，如需签署可重新创建签署链接 。
3. 该接口返回的签署链接适用于APP集成的场景，支持APP打开或浏览器直接打开，**不支持微信小程序嵌入**。
跳转到小程序的实现，参考微信官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式），如何配置也可以请参考: <a href="https://qian.tencent.com/developers/company/openwxminiprogram">跳转电子签小程序配置</a>。
4. 因h5涉及人脸身份认证能力基于慧眼人脸核身，对Android和iOS系统均有一定要求， 因此<font color='red'>App嵌入H5签署合同需要按照慧眼提供的<a href="https://cloud.tencent.com/document/product/1007/61076">慧眼人脸核身兼容性文档</a>做兼容性适配</font>。
     */
  async CreateFlowSignUrl(
    req: CreateFlowSignUrlRequest,
    cb?: (error: string, rep: CreateFlowSignUrlResponse) => void
  ): Promise<CreateFlowSignUrlResponse> {
    return this.request("CreateFlowSignUrl", req, cb)
  }

  /**
     * 获取个人用户认证证书图片下载URL

个人用户认证证书图片样式如下图

![image](https://dyn.ess.tencent.cn/guide/capi/CreatePersonAuthCertificateImage.png)

注:  
<ul>
<li>只能获取个人用户证明图片, 企业员工的暂不支持</li>
<li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。  </li>
</ul>
     */
  async CreatePersonAuthCertificateImage(
    req: CreatePersonAuthCertificateImageRequest,
    cb?: (error: string, rep: CreatePersonAuthCertificateImageResponse) => void
  ): Promise<CreatePersonAuthCertificateImageResponse> {
    return this.request("CreatePersonAuthCertificateImage", req, cb)
  }

  /**
     * 此接口（CreateConvertTaskApi）用来将word、excel、html、图片、txt类型文件转换为PDF文件。<br />
前提条件：源文件已经通过 <a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles" target="_blank">文件上传接口</a>完成上传，并得到了源文件的资源Id。<br />
适用场景1：已经上传了一个word文件，希望将该word文件转换成pdf文件后发起合同
适用场景2：已经上传了一个jpg图片文件，希望将该图片文件转换成pdf文件后发起合同<br />
转换文件是一个耗时操作，若想查看转换任务是否完成，可以通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/GetTaskResultApi" target="_blank">查询转换任务状态</a>接口获取任务状态。<br />
注: 
1. `支持的文件类型有doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt`
2. `可通过发起合同时设置预览来检查转换文件是否达到预期效果`
     */
  async CreateConvertTaskApi(
    req: CreateConvertTaskApiRequest,
    cb?: (error: string, rep: CreateConvertTaskApiResponse) => void
  ): Promise<CreateConvertTaskApiResponse> {
    return this.request("CreateConvertTaskApi", req, cb)
  }

  /**
     * 查询流程基础信息
适用场景：可用于主动查询某个合同流程的签署状态信息。可以配合回调通知使用。

注: `每个企业限制日调用量限制：100W，当日超过此限制后再调用接口返回错误`
     */
  async DescribeFlowBriefs(
    req: DescribeFlowBriefsRequest,
    cb?: (error: string, rep: DescribeFlowBriefsResponse) => void
  ): Promise<DescribeFlowBriefsResponse> {
    return this.request("DescribeFlowBriefs", req, cb)
  }

  /**
     * 此接口（CreateIntegrationRole）用来创建企业自定义的SaaS角色或集团角色。

适用场景1：创建当前企业的自定义SaaS角色或集团角色，并且创建时不进行权限的设置（PermissionGroups 参数不传），角色中的权限内容可通过控制台编辑角色或通过接口 ModifyIntegrationRole 完成更新。

适用场景2：创建当前企业的自定义SaaS角色或集团角色，并且创建时进行权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考接口 DescribeIntegrationRoles 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。

适用场景3：创建集团角色时可同时设置角色管理的子企业列表，可通过设置 SubOrganizationIds 参数达到此效果。

适用场景4：主企业代理子企业操作的场景，需要设置Agent参数，并且ProxyOrganizationId设置为子企业的id即可。

注意事项：SaaS角色和集团角色对应的权限树是不一样的。
     */
  async CreateIntegrationRole(
    req: CreateIntegrationRoleRequest,
    cb?: (error: string, rep: CreateIntegrationRoleResponse) => void
  ): Promise<CreateIntegrationRoleResponse> {
    return this.request("CreateIntegrationRole", req, cb)
  }

  /**
   * 此接口用于赋予员工指定的角色权限，如需解绑请使用 DeleteIntegrationRoleUsers 接口。
   */
  async CreateIntegrationUserRoles(
    req: CreateIntegrationUserRolesRequest,
    cb?: (error: string, rep: CreateIntegrationUserRolesResponse) => void
  ): Promise<CreateIntegrationUserRolesResponse> {
    return this.request("CreateIntegrationUserRoles", req, cb)
  }

  /**
     * 该接口用于在使用视频认证方式签署合同后，获取用户的签署人脸认证视频。

1. 该接口**仅适用于在H5端签署**的合同，**在通过视频认证后**获取人脸图片。
2. 该接口**不支持小程序端**的签署人脸图片获取。
3. 请在**签署完成后的三天内**获取人脸图片，**过期后将无法获取**。

**注意：该接口需要开通白名单，请联系客户经理开通后使用。**
     */
  async DescribeSignFaceVideo(
    req: DescribeSignFaceVideoRequest,
    cb?: (error: string, rep: DescribeSignFaceVideoResponse) => void
  ): Promise<DescribeSignFaceVideoResponse> {
    return this.request("DescribeSignFaceVideo", req, cb)
  }

  /**
     * 此接口（ModifyIntegrationRole）用来更新企业自定义的SaaS角色或集团角色。

适用场景1：更新当前企业的自定义SaaS角色或集团角色，并且更新时不进行角色中权限的更新（PermissionGroups 参数不传）。

适用场景2：更新当前企业的自定义SaaS角色或集团角色，并且更新时进行角色中权限的设置（PermissionGroups 参数要传），权限树内容 PermissionGroups 可参考接口 DescribeIntegrationRoles 的输出。此处注意权限树内容可能会更新，需尽量拉取最新的权限树内容，并且权限树内容 PermissionGroups 必须是一颗完整的权限树。

适用场景3：更新集团角色管理的子企业列表，可通过设置 SubOrganizationIds 参数达到此效果。

适用场景4：主企业代理子企业操作的场景，需要设置Agent参数，并且ProxyOrganizationId设置为子企业的id即可。

注意事项：SaaS角色和集团角色对应的权限树是不一样的。
     */
  async ModifyIntegrationRole(
    req: ModifyIntegrationRoleRequest,
    cb?: (error: string, rep: ModifyIntegrationRoleResponse) => void
  ): Promise<ModifyIntegrationRoleResponse> {
    return this.request("ModifyIntegrationRole", req, cb)
  }

  /**
     * 通过此接口，可以创建小程序批量签署链接，个人/企业员工可通过此链接跳转至小程序进行批量签署。请确保生成链接时的身份信息与签署合同参与方的信息保持一致。

注意事项：
- 使用此接口生成链接，需要贵企业先开通 <font color="red">使用手机号验证签署方身份 </font>功能。您可以在 <b>【腾讯电子签网页端】->【企业设置】->【拓展服务】</b>中找到该功能。
- 生成批量签署链接时，<font color="red">合同目标参与方的状态必须为<b>待签署</b>状态</font>。签署人点击链接后需要输入短信验证码才能查看合同内容。
- 企业员工批量签署链接：需要传入签署方所在企业名称，用户名字和手机号（或者身份证件信息）参数来生成签署链接。<font color="red">该签署方企业必须已完成腾讯电子签企业认证</font>
- 个人批量签署链接：需要传入签署方用户名字和手机号（或者身份证件信息）参数来生成签署链接。个人批量签署进行的合同的签名区， 全部变成<font color="red">手写签名</font>（不管合同里边设置的签名限制）来进行。
     */
  async CreateBatchSignUrl(
    req: CreateBatchSignUrlRequest,
    cb?: (error: string, rep: CreateBatchSignUrlResponse) => void
  ): Promise<CreateBatchSignUrlResponse> {
    return this.request("CreateBatchSignUrl", req, cb)
  }

  /**
     * 使用此接口，您可以创建企业批量签署链接，员工只需点击链接即可跳转至控制台进行批量签署。<br/>
附注：
- 员工必须需作为批量签署合同的签署方，or或签合同的候选人之一。
- 对于本方企业：如有UserId，应以UserId为主要标识；如果没有UserId，则必须填写Name和Mobile信息。
- 若要生成他发企业签署链接：应传RecipientIds，且制定的合同必须是接口调用方发起的。
- 支持待签署、待填写状态的合同生成签署链接。
     */
  async CreateOrganizationBatchSignUrl(
    req: CreateOrganizationBatchSignUrlRequest,
    cb?: (error: string, rep: CreateOrganizationBatchSignUrlResponse) => void
  ): Promise<CreateOrganizationBatchSignUrlResponse> {
    return this.request("CreateOrganizationBatchSignUrl", req, cb)
  }

  /**
     * 指定需要批量催办的签署流程ID，批量催办合同，最多100个。需要符合以下条件的合同才可被催办：

1. 发起合同时，**签署人的NotifyType需设置为sms**
2. 合同中当前状态为 **待签署** 的签署人是催办的对象
3. **每个合同只能催办一次**

**催办的效果**: 对方会收到如下的短信通知

![image](https://qcloudimg.tencent-cloud.cn/raw/3caf94b7f540fa5736270d38528d3a7b.png)

注：`合同催办是白名单功能，请联系客户经理申请开白后使用`
     */
  async CreateFlowReminds(
    req: CreateFlowRemindsRequest,
    cb?: (error: string, rep: CreateFlowRemindsResponse) => void
  ): Promise<CreateFlowRemindsResponse> {
    return this.request("CreateFlowReminds", req, cb)
  }

  /**
   * 查询流程填写控件内容，可以根据合同流程ID查询该合同流程相关联的填写控件信息和填写内容。
   */
  async DescribeFlowComponents(
    req: DescribeFlowComponentsRequest,
    cb?: (error: string, rep: DescribeFlowComponentsResponse) => void
  ): Promise<DescribeFlowComponentsResponse> {
    return this.request("DescribeFlowComponents", req, cb)
  }

  /**
     * 通过此接口可以关闭个人用户自动签功能。
无需对应的用户刷脸等方式同意即可关闭。

注意: 

<ul><li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。</li>
<li>如果此用户在开通时候绑定过个人自动签账号许可,  关闭此用户的自动签不会归还个人自动签账号许可的额度。</li></ul>
     */
  async DisableUserAutoSign(
    req: DisableUserAutoSignRequest,
    cb?: (error: string, rep: DisableUserAutoSignResponse) => void
  ): Promise<DisableUserAutoSignResponse> {
    return this.request("DisableUserAutoSign", req, cb)
  }

  /**
   * 此接口（DescribePersonCertificate）用于查询个人数字证书信息。<br />注：`1.目前仅用于查询开通了医疗自动签署功能的个人数字证书。`<br />`2.调用此接口需要开通白名单，使用前请联系相关人员开通白名单。`
   */
  async DescribePersonCertificate(
    req: DescribePersonCertificateRequest,
    cb?: (error: string, rep: DescribePersonCertificateResponse) => void
  ): Promise<DescribePersonCertificateResponse> {
    return this.request("DescribePersonCertificate", req, cb)
  }

  /**
     * 通过AuthCode查询个人用户是否实名


注意: 
<ul>
<li>此接口为合作引流场景使用，使用`有白名单限制`，使用前请联系对接的客户经理沟通。</li>
<li>`AuthCode 只能使用一次`，查询一次再次查询会返回错误</li>
</ul>
     */
  async DescribeThirdPartyAuthCode(
    req: DescribeThirdPartyAuthCodeRequest,
    cb?: (error: string, rep: DescribeThirdPartyAuthCodeResponse) => void
  ): Promise<DescribeThirdPartyAuthCodeResponse> {
    return this.request("DescribeThirdPartyAuthCode", req, cb)
  }

  /**
     * 给医疗个人自动签许可续期。续期成功后，可对医疗自动签许可追加一年有效期，只可续期一次。

注意: `处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。`
     */
  async RenewAutoSignLicense(
    req: RenewAutoSignLicenseRequest,
    cb?: (error: string, rep: RenewAutoSignLicenseResponse) => void
  ): Promise<RenewAutoSignLicenseResponse> {
    return this.request("RenewAutoSignLicense", req, cb)
  }

  /**
     * 用来设置本企业嵌入式页面个性化主题配置（例如是否展示电子签logo、定义主题色等），设置后获取的web签署界面都会使用此配置进行展示。

如果多次调用，会以最后一次的配置为准
     */
  async CreateWebThemeConfig(
    req: CreateWebThemeConfigRequest,
    cb?: (error: string, rep: CreateWebThemeConfigResponse) => void
  ): Promise<CreateWebThemeConfigResponse> {
    return this.request("CreateWebThemeConfig", req, cb)
  }

  /**
     * 查询企业印章的列表，需要操作者具有查询印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
  async DescribeOrganizationSeals(
    req: DescribeOrganizationSealsRequest,
    cb?: (error: string, rep: DescribeOrganizationSealsResponse) => void
  ): Promise<DescribeOrganizationSealsResponse> {
    return this.request("DescribeOrganizationSeals", req, cb)
  }

  /**
     * 该接口（DeleteIntegrationEmployees）用于离职本企业员工，同时可选择是否进行离职交接。


- 如果该员工没有未处理的合同，可不设置交接人的ReceiveUserId或ReceiveOpenId进行离职操作。
- 如果该员工有未处理的合同，需要设置ReceiveUserId或ReceiveOpenId表示交接的负责人，交接后员工会进行离职操作。

未处理的合同包括以下：

- 待签署的合同（包括顺序签署还没有轮到的合同，此类合同某些情况可能不会出现在用户的列表中）。
- 待填写的合同。
- 待解除的合同等。

注：
1. <font color="red">超管或法人身份的员工不能被离职</font>， 需要在控制台或小程序更换法人和超管后进行离职删除。
2. <font color="red">员工存在待处理合同时必须交接</font>后才能离职无人交接时不能被离职删除。
3. 未实名的员工可以直接离职，不用交接合同
     */
  async DeleteIntegrationEmployees(
    req: DeleteIntegrationEmployeesRequest,
    cb?: (error: string, rep: DeleteIntegrationEmployeesResponse) => void
  ): Promise<DeleteIntegrationEmployeesResponse> {
    return this.request("DeleteIntegrationEmployees", req, cb)
  }

  /**
     * 此接口（CreateOrganizationInfoChangeUrl）用于创建企业信息变更链接，支持创建企业超管变更链接或企业基础信息变更链接，通过入参ChangeType指定。


<h3 id="1-企业超管变更">1. 企业超管变更</h3>

<p>换成企业的其他员工来当超管</p>

<h3 id="2-企业基础信息变更">2. 企业基础信息变更</h3>

<h4 id="可以变动">可以变动</h4>

<ul>
<li>企业名称<br>
</li>
<li>法定代表人姓名(新法人有邀请链接)<br>
</li>
<li>企业地址和所在地</li>
</ul>

<h4 id="不可变动">不可变动</h4>

<ul>
<li>统一社会信用代码<br>
</li>
<li>企业主体类型</li>
</ul>

<p>如果企业名称变动会引起下面的变动</p>

<ul>
<li>合同:   老合同不做任何处理,   新发起的合同需要用新的企业名字作为签署方, 否则无法签署</li>
<li>印章:   会删除所有的印章所有的机构公章和合同专用章,  然后用新企业名称生成新的机构公章 和合同专用章,  而法人章, 财务专用章和人事专用章不会处理</li>
<li>证书:   企业证书会重新请求CA机构用新企业名称生成新的证书</li>
</ul>
     */
  async CreateOrganizationInfoChangeUrl(
    req: CreateOrganizationInfoChangeUrlRequest,
    cb?: (error: string, rep: CreateOrganizationInfoChangeUrlResponse) => void
  ): Promise<CreateOrganizationInfoChangeUrlResponse> {
    return this.request("CreateOrganizationInfoChangeUrl", req, cb)
  }

  /**
     * 用来撤销<a href="https://qian.tencent.com/developers/companyApis/users/CreateUserAutoSignEnableUrl" target="_blank">获取个人用户自动签的开通状态</a>生成的开通链接，撤销生成的链接失效。

注:
<ul><li>若个人用户已经用生成的完成自动签署的开通，撤销链接无效不会对开通结果产生影响(此情况接口会报错)。</li>
<li>处方单等特殊场景专用，此接口为白名单功能，使用前请联系对接的客户经理沟通。</li></ul>
     */
  async CancelUserAutoSignEnableUrl(
    req: CancelUserAutoSignEnableUrlRequest,
    cb?: (error: string, rep: CancelUserAutoSignEnableUrlResponse) => void
  ): Promise<CancelUserAutoSignEnableUrlResponse> {
    return this.request("CancelUserAutoSignEnableUrl", req, cb)
  }

  /**
   * 通过此接口（DescribeBillUsageDetail）查询该企业的套餐消耗详情。
   */
  async DescribeBillUsageDetail(
    req: DescribeBillUsageDetailRequest,
    cb?: (error: string, rep: DescribeBillUsageDetailResponse) => void
  ): Promise<DescribeBillUsageDetailResponse> {
    return this.request("DescribeBillUsageDetail", req, cb)
  }

  /**
   * 此接口（DescribeIntegrationDepartments）用于查询企业的部门信息列表，支持查询单个部门节点或单个部门节点及一级子节点部门列表。
   */
  async DescribeIntegrationDepartments(
    req: DescribeIntegrationDepartmentsRequest,
    cb?: (error: string, rep: DescribeIntegrationDepartmentsResponse) => void
  ): Promise<DescribeIntegrationDepartmentsResponse> {
    return this.request("DescribeIntegrationDepartments", req, cb)
  }

  /**
     * 此接口（CreateFlowGroupByFiles）可用于通过多个文件创建合同组签署流程。

适用场景：该接口适用于需要一次性完成多份合同签署的情况，多份合同一般具有关联性，用户以目录的形式查看合同。

注意事项：使用该接口需要先依赖[多文件上传](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口返回的FileIds。

注：`合同发起后就会扣减合同的额度, 如果未签署完成时撤销合同会返还此额度（过期，拒签，签署完成，解除完成等状态不会返还额度），合同组中每个合同会扣减一个合同额度`
     */
  async CreateFlowGroupByFiles(
    req: CreateFlowGroupByFilesRequest,
    cb?: (error: string, rep: CreateFlowGroupByFilesResponse) => void
  ): Promise<CreateFlowGroupByFilesResponse> {
    return this.request("CreateFlowGroupByFiles", req, cb)
  }

  /**
     * 此API接口用来查询加入集团的成员企业信息
适用场景：子企业在加入集团后，主企业可能通过此接口获取到所有的子企业列表，方便进行展示和统计
     */
  async DescribeOrganizationGroupOrganizations(
    req: DescribeOrganizationGroupOrganizationsRequest,
    cb?: (error: string, rep: DescribeOrganizationGroupOrganizationsResponse) => void
  ): Promise<DescribeOrganizationGroupOrganizationsResponse> {
    return this.request("DescribeOrganizationGroupOrganizations", req, cb)
  }

  /**
   * 本接口（CreateSealPolicy）用于对企业员工进行印章授权
   */
  async CreateSealPolicy(
    req: CreateSealPolicyRequest,
    cb?: (error: string, rep: CreateSealPolicyResponse) => void
  ): Promise<CreateSealPolicyResponse> {
    return this.request("CreateSealPolicy", req, cb)
  }

  /**
     * 删除企业扩展服务授权，当前仅支持 “企业自动签” 和“批量签署”  的取消授权。
该接口作用和电子签控制台 企业设置-扩展服务-企业自动签署和批量签署授权 两个模块功能相同，可通过该接口取消企业员工授权。

注：支持集团代子企业操作，请联系运营开通此功能。
     */
  async DeleteExtendedServiceAuthInfos(
    req: DeleteExtendedServiceAuthInfosRequest,
    cb?: (error: string, rep: DeleteExtendedServiceAuthInfosResponse) => void
  ): Promise<DeleteExtendedServiceAuthInfosResponse> {
    return this.request("DeleteExtendedServiceAuthInfos", req, cb)
  }

  /**
     * 此接口（CreateIntegrationEmployees）用于创建企业员工。创建的员工初始化为未实名，如下图所示。

![image](https://qcloudimg.tencent-cloud.cn/raw/2bdcc0d91ac3146b5e8c28811a78ffe9.png)

支持以下场景
<table>
<tbody>
<tr>
<td>生成端</td>
<td >入参</td>
<td>提醒方式</td>
</tr>
<tr>
<td>普通saas员工</td>
<td>将Employees中的DisplayName设置员工的名字，Mobile设置成员工的手机号</td>
<td>发送短信通知员工（短信中带有认证加入企业的链接）  </td>
</tr>
<tr>
<td>企微员工</td>
<td>将Employees 中的WeworkOpenId字段设置为企微员工明文的openid，需<font color="red">确保该企微员工在应用的可见范围内</font></td>
<td>企微内部实名消息</td>
</tr>
<tr>
<td>H5端 saas员工</td>
<td>传递 InvitationNotifyType = H5，将Employees中的DisplayName设置员工的名字，Mobile设置成员工的手机号，<font color="red">此场景不支持企微</font></td>
<td>生成认证加入企业的H5链接，贵方可以通过自己的渠道触达到此员工</td>
</tr>
</tbody>
</table>
注意：

-  <b> 新增员工的手机号、OpenId不能与已加入员工重复</b>， 不管已加入员工的手机号、OpenId是否已经实名
- <b>若通过手机号发现员工已经创建且信息一致（名字，openId等），则不会重复创建，但会发送短信或者生成链接提醒员工实名。</b>
- jumpUrl 仅支持H5的邀请方式，回跳的url，使用前请联系对接的客户经理沟通，进行域名的配置。



短信的样式

![image](https://qcloudimg.tencent-cloud.cn/raw/b6ad1b79e0adaaa41d282456c72a1ee6.png)
     */
  async CreateIntegrationEmployees(
    req: CreateIntegrationEmployeesRequest,
    cb?: (error: string, rep: CreateIntegrationEmployeesResponse) => void
  ): Promise<CreateIntegrationEmployeesResponse> {
    return this.request("CreateIntegrationEmployees", req, cb)
  }

  /**
     * 此接口（UpdateIntegrationEmployees）<font color="red"><b>用于修改未实名企业员工信息(姓名，手机号，邮件、部门)</b></font>。
如果企业员工已经实名， 姓名，手机号，邮件等需要企业员工到小程序或者控制台自己修改， 部门则需要超管到控制台分配

修改手机号的时候,支持以下场景进行提醒通知
<table>
<tbody>
<tr>
<td>生成端</td>
<td >入参</td>
<td>提醒方式</td>
</tr>
<tr>
<td>普通saas员工</td>
<td>将Employees中的DisplayName设置员工的名字，Mobile设置成员工的手机号</td>
<td>发送短信通知员工（短信中带有认证加入企业的链接）</td>
</tr>
<tr>
<td>企微员工</td>
<td>将Employees 中的WeworkOpenId字段设置为企微员工明文的openid，需<font color="red">确保该企微员工在应用的可见范围内</font></td>
<td>企微内部实名消息</td>
</tr>
<tr>
<td>H5端 saas员工</td>
<td>传递 InvitationNotifyType = H5，将Employees中的DisplayName设置员工的名字，Mobile设置成员工的手机号，<font color="red">此场景不支持企微</font></td>
<td>生成认证加入企业的H5链接，贵方可以通过自己的渠道触达到此员工</td>
</tr>
</tbody>
</table>
注意：

- <b>若通过手机号发现员工已经创建，则不会重复创建，但会发送短信或者生成链接提醒员工实名。</b>
- jumpUrl 仅支持H5的邀请方式，回跳的url，使用前请联系对接的客户经理沟通，进行域名的配置。
     */
  async UpdateIntegrationEmployees(
    req: UpdateIntegrationEmployeesRequest,
    cb?: (error: string, rep: UpdateIntegrationEmployeesResponse) => void
  ): Promise<UpdateIntegrationEmployeesResponse> {
    return this.request("UpdateIntegrationEmployees", req, cb)
  }

  /**
     * 在已发起的签署流程中，支持对签署截止日期进行延期操作，主要涉及以下两个维度：
1. 合同（流程）维度：只需要传递签署流程ID。这将对签署流程和发起时未单独设定签署截止时间的签署人进行延期操作。
2. 签署人维度：需要传递流程ID和签署人ID。此操作将对签署人进行延期操作，尤其对于有序的合同（流程），签署截止时间不能超过后一位合同（流程）签署人的流程截止时间。

此接口有如下限制条件：
1. 执行操作的员工需为发起方企业的超级管理员、法定代表人或签署流程的发起人。
2. 在延长整个签署流程时，签署流程应至少还有一方未签署（即签署流程不能处于已全部签署完成、已拒签、已过期、已撤回、拒绝填写、已解除等合同状态）。
3. 在延长整个签署流程时，新的签署截止日期应晚于合同已设定的签署截止日期和当前日期。
4. 在延长签署方的截止时间时，签署方不能处于流程完结或已终止状态（即签署人不能处于已签署、已拒签、已过期、已撤回、拒绝填写、已解除等状态）。
5. 在延长签署方的截止时间时，签署方的新签署截止日期应晚于当前日期和签署方已设定的截止日期。若为有序合同，还应早于或等于下一签署人的截止日期，且早于签署流程整体的截止日期。
6. 不支持操作合同组合同。
     */
  async ModifyFlowDeadline(
    req: ModifyFlowDeadlineRequest,
    cb?: (error: string, rep: ModifyFlowDeadlineResponse) => void
  ): Promise<ModifyFlowDeadlineResponse> {
    return this.request("ModifyFlowDeadline", req, cb)
  }
}
