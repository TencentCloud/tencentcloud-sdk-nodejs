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

/**
 * DescribePersonCertificate返回参数结构体
 */
export interface DescribePersonCertificateResponse {
  /**
   * 证书的Base64
   */
  Cert?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationGroupInvitationLink请求参数结构体
 */
export interface CreateOrganizationGroupInvitationLinkRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 到期时间（以秒为单位的时间戳），其上限为30天的有效期限。
   */
  ExpireTime: number
}

/**
 * 批量签署合同相关信息，指定批量签署合同和签署方的信息，用于补充动态签署人。
 */
export interface FlowBatchUrlInfo {
  /**
   * 批量签署合同和签署方的信息，用于补充动态签署人。
   */
  FlowBatchApproverInfos?: Array<FlowBatchApproverInfo>
}

/**
 * 用户计费使用情况详情
 */
export interface BillUsageDetail {
  /**
   * 合同流程ID，为32位字符串。
可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId?: string
  /**
   * 合同经办人名称
如果有多个经办人用分号隔开。
   */
  OperatorName?: string
  /**
   * 发起方组织机构名称
   */
  CreateOrganizationName?: string
  /**
   * 合同流程的名称。
   */
  FlowName?: string
  /**
   * 当前合同状态,如下是状态码对应的状态。
<ul>
<li>**0**: 还没有发起</li>
<li>**1**: 等待签署</li>
<li>**2**: 部分签署 </li>
<li>**3**: 拒签</li>
<li>**4**: 已签署 </li>
<li>**5**: 已过期 </li>
<li>**6**: 已撤销 </li>
<li>**7**: 还没有预发起</li>
<li>**8**: 等待填写</li>
<li>**9**: 部分填写 </li>
<li>**10**: 拒签</li>
<li>**11**: 已解除</li>
</ul>
   */
  Status?: number
  /**
   * 查询的套餐类型
对应关系如下:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
</ul>
   */
  QuotaType?: string
  /**
   * 合同使用量
注: `如果消耗类型是撤销返还，此值为负值代表返还的合同数量`
   */
  UseCount?: number
  /**
   * 消耗的时间戳，格式为Unix标准时间戳（秒）。
   */
  CostTime?: number
  /**
   * 消耗的套餐名称
   */
  QuotaName?: string
  /**
   * 消耗类型
   **1**.扣费
   **2**.撤销返还
   */
  CostType?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeCancelFlowsTask返回参数结构体
 */
export interface DescribeCancelFlowsTaskResponse {
  /**
   * 批量撤销任务编号，为32位字符串，通过接口[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)获得。
   */
  TaskId?: string
  /**
   * 任务状态，需要关注的状态
<ul><li>**PROCESSING**  - 任务执行中</li>
<li>**END** - 任务处理完成</li>
<li>**TIMEOUT** 任务超时未处理完成，用户未在批量撤销链接有效期内操作</li></ul>
   */
  TaskStatus?: string
  /**
   * 批量撤销成功的签署流程编号
   */
  SuccessFlowIds?: Array<string>
  /**
   * 批量撤销失败的签署流程信息
   */
  FailureFlows?: Array<CancelFailureFlow>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 意愿核身点头确认模式结果
 */
export interface IntentionActionResult {
  /**
   * 意愿核身结果详细数据，与每段点头确认过程一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  Details?: Array<IntentionActionResultDetail>
}

/**
 * DescribeFileCounterSignResult请求参数结构体
 */
export interface DescribeFileCounterSignResultRequest {
  /**
   * 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 加签任务Id
   */
  TaskId?: string
}

/**
 * CreateSeal请求参数结构体
 */
export interface CreateSealRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 电子印章名字，1-50个中文字符
注:`同一企业下电子印章名字不能相同`
   */
  SealName: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 电子印章生成方式
<ul>
<li><strong>空值</strong>:(默认)使用上传的图片生成印章, 此时需要上传SealImage图片</li>
<li><strong>SealGenerateSourceSystem</strong>: 系统生成印章, 无需上传SealImage图片</li>
</ul>
   */
  GenerateSource?: string
  /**
   * 电子印章类型 , 可选类型如下: <ul><li>**OFFICIAL**: (默认)公章</li><li>**CONTRACT**: 合同专用章;</li><li>**FINANCE**: 财务专用章;</li><li>**PERSONNEL**: 人事专用章</li><li>**INVOICE**: 发票专用章</li><li>**OTHER**: 其他</li></ul>注: 同企业下只能有<font color="red">一个</font>公章, 重复创建会报错
   */
  SealType?: string
  /**
   * 电子印章图片文件名称，1-50个中文字符。
   */
  FileName?: string
  /**
   * 电子印章图片base64编码，大小不超过10M（原始图片不超过5M），只支持PNG或JPG图片格式

注: `通过图片创建的电子印章，需电子签平台人工审核`


   */
  Image?: string
  /**
   * 电子印章宽度,单位px
参数不再启用，系统会设置印章大小为标准尺寸。
   */
  Width?: number
  /**
   * 电子印章高度,单位px
参数不再启用，系统会设置印章大小为标准尺寸。
   */
  Height?: number
  /**
   * 电子印章印章颜色(默认红色RED),RED-红色

系统目前只支持红色印章创建。
   */
  Color?: string
  /**
   * 企业印章横向文字，最多可填15个汉字  (若超过印章最大宽度，优先压缩字间距，其次缩小字号)
横向文字的位置如下图中的"印章横向文字在这里"

![image](https://dyn.ess.tencent.cn/guide/capi/CreateSealByImage2.png)

   */
  SealHorizontalText?: string
  /**
   * 暂时不支持下弦文字设置
   */
  SealChordText?: string
  /**
   * 系统生成的印章只支持STAR
   */
  SealCentralType?: string
  /**
   * 通过文件上传时，服务端生成的电子印章上传图片的token

   */
  FileToken?: string
  /**
   * 印章样式, 可以选择的样式如下: 
<ul><li>**circle**:(默认)圆形印章</li>
<li>**ellipse**:椭圆印章</li></ul>
   */
  SealStyle?: string
  /**
   * 印章尺寸取值描述, 可以选择的尺寸如下: <ul><li> **38_38**: 圆形企业公章直径38mm, 当SealStyle是圆形的时候才有效</li> <li> **40_40**: 圆形企业公章直径40mm, 当SealStyle是圆形的时候才有效</li> <li> **42_42**（默认）: 圆形企业公章直径42mm, 当SealStyle是圆形的时候才有效</li> <li> **45_45**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效</li> <li> **50_50**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效</li> <li> **58_58**: 圆形企业印章直径45mm, 当SealStyle是圆形的时候才有效</li>  <li> **40_30**: 椭圆形印章40mm x 30mm, 当SealStyle是椭圆的时候才有效</li> <li> **45_30**: 椭圆形印章45mm x 30mm, 当SealStyle是椭圆的时候才有效</li> </ul>
   */
  SealSize?: string
  /**
   * 企业税号
注:
<ul>
<li>1.印章类型SealType是INVOICE类型时，此参数才会生效</li>
<li>2.印章类型SealType是INVOICE类型，且该字段没有传入值或传入空时，会取该企业对应的统一社会信用代码作为默认的企业税号（<font color="red">如果是通过授权书授权方式认证的企业，此参数必传不能为空</font>）</li>
</ul>
   */
  TaxIdentifyCode?: string
}

/**
 * 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。
 */
export interface FlowGroupUrlInfo {
  /**
   * 合同组子合同和签署方的信息，用于补充动态签署人。
   */
  FlowGroupApproverInfos?: Array<FlowGroupApproverInfo>
}

/**
 * CancelFlow返回参数结构体
 */
export interface CancelFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtendedServiceAuthDetail返回参数结构体
 */
export interface DescribeExtendedServiceAuthDetailResponse {
  /**
   * 服务授权的信息列表，根据查询类型返回特定扩展服务的授权状况。
   */
  AuthInfoDetail?: AuthInfoDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateIntegrationEmployees返回参数结构体
 */
export interface UpdateIntegrationEmployeesResponse {
  /**
   * 更新成功的用户列表
   */
  SuccessEmployeeData?: Array<SuccessUpdateStaffData>
  /**
   * 更新失败的用户列表
   */
  FailedEmployeeData?: Array<FailedUpdateStaffData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集成版员工部门信息。
 */
export interface Department {
  /**
   * 部门ID。
   */
  DepartmentId?: string
  /**
   * 部门名称。
   */
  DepartmentName?: string
}

/**
 * CreatePreparedPersonalEsign请求参数结构体
 */
export interface CreatePreparedPersonalEsignRequest {
  /**
   * 个人用户姓名
   */
  UserName: string
  /**
   * 证件号码，应符合以下规则
<ul><li> 中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
  /**
   * 印章名称，长度1-50个字。
   */
  SealName: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同 中国大陆居民身份证)</li></ul>
   */
  IdCardType?: string
  /**
   * 印章图片的base64
注：已废弃
请先通过UploadFiles接口上传文件，获取 FileId
   * @deprecated
   */
  SealImage?: string
  /**
   * 是否开启印章图片压缩处理，默认不开启，如需开启请设置为 true。当印章超过 2M 时建议开启，开启后图片的 hash 将发生变化。
   */
  SealImageCompress?: boolean
  /**
   * 手机号码；当需要开通自动签时，该参数必传
   */
  Mobile?: string
  /**
   * 此字段已废弃，请勿继续使用。
   */
  EnableAutoSign?: boolean
  /**
   * 印章颜色（参数ProcessSeal=true时生效）
默认值：BLACK黑色
取值: 
BLACK 黑色,
RED 红色,
BLUE 蓝色。
   */
  SealColor?: string
  /**
   * 是否处理印章，默认不做印章处理。
取值如下：
<ul>
<li>false：不做任何处理；</li>
<li>true：做透明化处理和颜色增强。</li>
</ul>
   */
  ProcessSeal?: boolean
  /**
   * 印章图片文件 id
取值：
填写的FileId通过UploadFiles接口上传文件获取。
   */
  FileId?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减
   */
  LicenseType?: number
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>

注: `不传默认为处方单场景，即E_PRESCRIPTION_AUTO_SIGN`
   */
  SceneKey?: string
}

/**
 * CreateLegalSealQrCode返回参数结构体
 */
export interface CreateLegalSealQrCodeResponse {
  /**
   * 二维码图片base64值，二维码有效期7天（604800秒）

二维码图片的样式如下图：
![image](https://qcloudimg.tencent-cloud.cn/raw/7ec2478761158a35a9c623882839a5df.png)
   */
  QrcodeBase64?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationDepartments返回参数结构体
 */
export interface DescribeIntegrationDepartmentsResponse {
  /**
   * 部门信息列表。部门信息根据部门排序号OrderNo降序排列，根据部门创建时间升序排列。
   */
  Departments?: Array<IntegrationDepartment>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFileCounterSign请求参数结构体
 */
export interface CreateFileCounterSignRequest {
  /**
   * 需要加签的文件Id。

注: `暂时只支持pdf类型的文件`
   */
  FileId: string
  /**
   * 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 是否使用同步模式。
<ul><li><b>false</b>:异步模式，返回taskId。需要使用taskId轮询结果查询接口。</li>
<li><b>true</b>: 同步模式，此接口将直接返回taskId和ResultFileId(加签后文件id)。</li></ul>
注：
1. 当加签文件较大的时候，建议使用异步接口进行操作。否则文件加签时间过长会导致接口超时。
   */
  SyncMode?: boolean
}

/**
 * 模板中文件的信息结构
 */
export interface FileInfo {
  /**
   * 文件ID
   */
  FileId?: string
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 文件大小，单位为Byte
   */
  FileSize?: number
  /**
   * 文件上传时间，格式为Unix标准时间戳（秒）
   */
  CreatedOn?: number
}

/**
 * DescribeOrganizationVerifyStatus返回参数结构体
 */
export interface DescribeOrganizationVerifyStatusResponse {
  /**
   * 当前企业认证状态
<ul>
<li> <b>0 </b>:未认证</li>
<li> <b>1 </b> : 认证中</li>
<li> <b>2 </b> : 已认证</li>
</ul>
   */
  VerifyStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteExtendedServiceAuthInfos返回参数结构体
 */
export interface DeleteExtendedServiceAuthInfosResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDynamicFlowApprover请求参数结构体
 */
export interface CreateDynamicFlowApproverRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。支持填入集团子公司经办人 userId 代发合同。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串
   */
  FlowId: string
  /**
   * 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。
   */
  Approvers: Array<ApproverInfo>
  /**
   * 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：<ul><li> **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签）  </li><li> **OTHER** :  通用场景</li></ul>注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
   */
  AutoSignScene?: string
}

/**
 * CreateFlowApprovers返回参数结构体
 */
export interface CreateFlowApproversResponse {
  /**
   * 批量补充签署人时，补充失败的报错说明

注:`目前仅补充动态签署人时会返回补充失败的原因`
   */
  FillError?: Array<FillError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileUrls返回参数结构体
 */
export interface DescribeFileUrlsResponse {
  /**
   * 文件URL信息；
链接不是永久链接,  过期时间受UrlTtl入参的影响,  默认有效期5分钟后,  到期后链接失效。
   */
  FileUrls?: Array<FileUrl>
  /**
   * URL数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowReminds请求参数结构体
 */
export interface CreateFlowRemindsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 需执行催办的签署流程ID数组，最多包含100个。
   */
  FlowIds: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。
 */
export interface IntentionQuestionResult {
  /**
   * 视频base64（其中包含全程问题和回答音频，mp4格式）

注：`需进行base64解码获取视频文件`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Video?: string
  /**
   *  和答案匹配结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultCode?: Array<string>
  /**
   * 回答问题语音识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsrResult?: Array<string>
}

/**
 * CancelUserAutoSignEnableUrl请求参数结构体
 */
export interface CancelUserAutoSignEnableUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 预撤销链接的用户信息，包含姓名、证件类型、证件号码等信息。

   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 企业扩展服务授权列表详情
 */
export interface AuthInfoDetail {
  /**
   * 扩展服务类型，和入参一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 扩展服务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 授权员工列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthUserList?: Array<HasAuthUser>
  /**
   * 授权企业列表（企业自动签时，该字段有值）
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthOrganizationList?: Array<HasAuthOrganization>
  /**
   * 授权员工列表总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthUserTotal?: number
  /**
   * 授权企业列表总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthOrganizationTotal?: number
}

/**
 * 清理的企业认证流信息
 */
export interface DeleteOrganizationAuthorizationInfo {
  /**
   * 认证流 Id 是指在企业认证过程中，当前操作人的认证流程的唯一标识。每个企业在认证过程中只能有一条认证流认证成功。这意味着在同一认证过程内，一个企业只能有一个认证流程处于成功状态，以确保认证的唯一性和有效性。
   */
  AuthorizationId?: string
  /**
   * 认证的企业名称
   */
  OrganizationName?: string
  /**
   * 清除认证流产生的错误信息
   */
  Errormessage?: string
}

/**
 * ModifyApplicationCallbackInfo返回参数结构体
 */
export interface ModifyApplicationCallbackInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMultiFlowSignQRCode返回参数结构体
 */
export interface CreateMultiFlowSignQRCodeResponse {
  /**
   * 一码多签签署码的基本信息，用户可扫描该二维码进行签署操作。
   */
  QrCode?: SignQrCode
  /**
   * 一码多签签署码的链接信息，适用于客户系统整合二维码功能。通过链接，用户可直接访问电子签名小程序并签署合同。
   */
  SignUrls?: SignUrl
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationDepartments请求参数结构体
 */
export interface DescribeIntegrationDepartmentsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 查询类型，支持以下类型：
<ul><li>**0**：查询单个部门节点列表，不包含子节点部门信息</li>
<li>**1**：查询单个部门节点级一级子节点部门信息列表</li></ul>
   */
  QueryType: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 查询的部门ID。
注：`如果同时指定了DeptId与DeptOpenId参数，系统将优先使用DeptId参数进行查询。当二者都未指定时，系统将返回根节点部门数据。`
   */
  DeptId?: string
  /**
   * 查询的客户系统部门ID。
注：`如果同时指定了DeptId与DeptOpenId参数，系统将优先使用DeptId参数进行查询。当二者都未指定时，系统将返回根节点部门数据。`
   */
  DeptOpenId?: string
}

/**
 * 关注方信息
 */
export interface ReviewerInfo {
  /**
   * 姓名
   */
  Name?: string
  /**
   * 手机号
   */
  Mobile?: string
}

/**
 * 合同流程的基础信息
 */
export interface FlowBrief {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 合同流程的名称。
   */
  FlowName?: string
  /**
   * 合同流程描述信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowDescription?: string
  /**
   * 合同流程的类别分类（如销售合同/入职合同等）。
   */
  FlowType?: string
  /**
   * 合同流程当前的签署状态, 会存在下列的状态值
<ul><li> **0** : 未开启流程(合同中不存在填写环节)</li>
<li> **1** : 待签署</li>
<li> **2** : 部分签署</li>
<li> **3** : 已拒签</li>
<li> **4** : 已签署</li>
<li> **5** : 已过期</li>
<li> **6** : 已撤销</li>
<li> **7** : 未开启流程(合同中存在填写环节)</li>
<li> **8** : 等待填写</li>
<li> **9** : 部分填写</li>
<li> **10** : 已拒填</li>
<li> **21** : 已解除</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowStatus?: number
  /**
   * 合同流程创建时间，格式为Unix标准时间戳（秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: number
  /**
   * 当合同流程状态为已拒签（即 FlowStatus=3）或已撤销（即 FlowStatus=6）时，此字段 FlowMessage 为拒签或撤销原因。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMessage?: string
  /**
   *  合同流程发起方的员工编号, 即员工在腾讯电子签平台的唯一身份标识。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deadline?: number
}

/**
 * DescribeThirdPartyAuthCode返回参数结构体
 */
export interface DescribeThirdPartyAuthCodeResponse {
  /**
   * AuthCode 中对应个人用户是否实名
<ul>
<li> **VERIFIED** : 此个人已实名</li>
<li> **UNVERIFIED**: 此个人未实名</li></ul>
   */
  VerifyStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserVerifyStatus返回参数结构体
 */
export interface DescribeUserVerifyStatusResponse {
  /**
   * true:表示已实名
false：表示未实名
   */
  VerifyStatus?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 被授权的用户信息
 */
export interface HasAuthUser {
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 当前员工的归属情况，可能值是：
MainOrg：在集团企业的场景下，返回此值代表是归属主企业
CurrentOrg：在普通企业场景下返回此值；或者在集团企业的场景下，返回此值代表归属子企业
注意：此字段可能返回 null，表示取不到有效值。
   */
  BelongTo?: string
  /**
   * 集团主企业id，当前企业为集团子企业时，该字段有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainOrganizationId?: string
}

/**
 * DisableUserAutoSign返回参数结构体
 */
export interface DisableUserAutoSignResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业套餐余额情况
 */
export interface OrgBillSummary {
  /**
   * 套餐总数
   */
  Total?: number
  /**
   * 套餐使用数
   */
  Used?: number
  /**
   * 套餐剩余数
   */
  Available?: number
  /**
   * 套餐类型
对应关系如下:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
</ul>
   */
  QuotaType?: string
}

/**
 * ModifyExtendedService请求参数结构体
 */
export interface ModifyExtendedServiceRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 要管理的拓展服务类型。
<ul><li>OPEN_SERVER_SIGN：企业自动签署</li>
<li>AUTO_SIGN_CAN_FILL_IN：本企业自动签合同支持签前内容补充</li>
<li>OVERSEA_SIGN：企业与港澳台居民签署合同</li>
<li>AGE_LIMIT_EXPANSION：拓宽签署方年龄限制</li>
<li>MOBILE_CHECK_APPROVER：个人签署方仅校验手机号</li>
<li>HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名</li>
<li>ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型</li>
<li>ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方</li>
<li>HIDE_ONE_KEY_SIGN：个人签署方手动签字</li>
<li>ORGANIZATION_FLOW_EMAIL_NOTIFY：邮件通知签署方</li>
<li>FLOW_APPROVAL：合同审批强制开启</li>
<li>ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导</li></ul>
   */
  ServiceType: string
  /**
   * 操作类型
<ul>
<li>OPEN : 开通</li>
<li>CLOSE : 关闭</li>
</ul>
   */
  Operate: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 链接跳转类型，支持以下类型
<ul>
<li>WEIXINAPP : 短链直接跳转到电子签小程序  (默认值)</li>
<li>APP : 第三方APP或小程序跳转电子签小程序</li>
<li>WEIXIN_QRCODE_URL：直接跳转至电子签小程序的二维码链接，无需通过中转页。<font color="red">您需要自行将其转换为二维码，使用微信扫码后可直接进入。请注意，直接点击链接是无效的。</font></li>
</ul>
   */
  Endpoint?: string
}

/**
 * CreateBatchInitOrganizationUrl返回参数结构体
 */
export interface CreateBatchInitOrganizationUrlResponse {
  /**
   * 小程序路径
   */
  MiniAppPath?: string
  /**
   * 操作长链
   */
  OperateLongUrl?: string
  /**
   * 操作短链
   */
  OperateShortUrl?: string
  /**
   * 操作二维码
   */
  QRCodeUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindEmployeeUserIdWithClientOpenId返回参数结构体
 */
export interface BindEmployeeUserIdWithClientOpenIdResponse {
  /**
   * 绑定是否成功。
<ul><li>**0**：失败</li><li>**1**：成功</li></ul>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationEmployees请求参数结构体
 */
export interface CreateIntegrationEmployeesRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 待创建员工的信息最多不超过20个。

**1. 在创建企业微信员工的场景下** :  只需传入下面的参数，其他信息不支持设置。
<table> <thead> <tr> <th>参数</th> <th>是否必填</th> <th>含义</th> </tr> </thead> <tbody> <tr> <td>WeworkOpenId</td> <td>是</td> <td>企业微信用户账号ID</td> </tr> </tbody> </table>

**2. 在其他场景下** :   只需传入下面的参数，其他信息不支持设置。
<table> <thead> <tr> <th>参数</th> <th>是否必填</th> <th>含义</th> </tr> </thead> <tbody> <tr> <td>DisplayName</td> <td>是</td> <td>用户的真实名字</td> </tr> <tr> <td>Mobile</td> <td>是</td> <td>用户手机号码</td> </tr> <tr> <td>OpenId</td> <td>否</td> <td>用户的自定义ID</td> </tr> <tr> <td>Email</td> <td>否</td> <td>用户的邮箱</td> </tr> <tr> <td>Department.DepartmentId</td> <td>否</td> <td>用户加入后的部门ID</td> </tr> </tbody> </table>


注: `每个手机号每天最多使用3次`
   */
  Employees: Array<Staff>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 员工邀请方式
可通过以下途径进行设置：
<ul><li>**SMS（默认）**：邀请将通过短信或企业微信消息发送。若场景非企业微信，则采用企业微信消息；其他情境下则使用短信通知。短信内含链接，点击后将进入微信小程序进行认证并加入企业的流程。</li><li>**H5**：将生成H5链接，用户点击链接后可进入H5页面进行认证并加入企业的流程。</li><li>**NONE**：系统会根据Endpoint生成签署链接，业务方需获取链接并通知客户。</li></ul>
   */
  InvitationNotifyType?: string
  /**
   * 回跳地址，为认证成功后页面进行回跳的URL，请确保回跳地址的可用性。

注：`只有在员工邀请方式（InvitationNotifyType参数）为H5场景下才生效， 其他方式下设置无效。`

   */
  JumpUrl?: string
  /**
   * 要跳转的链接类型<ul><li> **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型  ，此时返回长链 (默认类型)</li><li>**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链</li><li>**APP**： 第三方APP或小程序跳转电子签小程序的path,  APP或者小程序跳转适合此类型</li><li>**H5**： 第三方移动端浏览器进行嵌入，不支持小程序嵌入，过期时间一个月</li></ul>注意：InvitationNotifyType 和 Endpoint 的关系图<table><tbody><tr><td>通知类型（InvitationNotifyType）</td><td>Endpoint</td></tr><tr><td>SMS（默认）</td><td>不需要传递，会将 Endpoint 默认设置为HTTP_SHORT_URL</td></tr><tr><td>H5</td><td>不需要传递，会将 Endpoint 默认设置为 H5</td></tr><tr><td>NONE</td><td>所有 Endpoint 都支持（HTTP_URL/HTTP_SHORT_URL/H5/APP）默认为HTTP_SHORT_URL</td></tr></tbody></table>
   */
  Endpoint?: string
}

/**
 * 创建合同个性化参数
 */
export interface CreateFlowOption {
  /**
   * 是否允许修改发起合同时确认弹窗的合同信息（合同名称、合同类型、签署截止时间），若不允许编辑，则表单字段将被禁止输入。
<br/>true：允许编辑<br/>false：不允许编辑（默认值）<br/>
   */
  CanEditFlow?: boolean
  /**
   * 是否允许编辑模板控件
<br/>true:允许编辑模板控件信息
<br/>false:不允许编辑模板控件信息（默认值）
<br/>
   */
  CanEditFormField?: boolean
  /**
   * 发起页面隐藏合同名称展示
<br/>true:发起页面隐藏合同名称展示
<br/>false:发起页面不隐藏合同名称展示（默认值）
<br/>
   */
  HideShowFlowName?: boolean
  /**
   * 发起页面隐藏合同类型展示
<br/>true:发起页面隐藏合同类型展示
<br/>false:发起页面不隐藏合同类型展示（默认值）
<br/>

   */
  HideShowFlowType?: boolean
  /**
   * 发起页面隐藏合同截止日期展示
<br/>true:发起页面隐藏合同截止日期展示
<br/>false:发起页面不隐藏合同截止日期展示（默认值）
<br/>
   */
  HideShowDeadline?: boolean
  /**
   * 发起页面允许跳过添加签署人环节
<br/>true:发起页面允许跳过添加签署人环节
<br/>false:发起页面不允许跳过添加签署人环节（默认值）
<br/>

   */
  CanSkipAddApprover?: boolean
  /**
   * 文件发起页面跳过文件上传步骤
<br/>true:文件发起页面跳过文件上传步骤
<br/>false:文件发起页面不跳过文件上传步骤（默认值）
<br/>
   */
  SkipUploadFile?: boolean
  /**
   * 禁止编辑填写控件
<br/>true:禁止编辑填写控件
<br/>false:允许编辑填写控件（默认值）
<br/>
   */
  ForbidEditFillComponent?: boolean
  /**
   * 定制化发起合同弹窗的描述信息，描述信息最长500字符

   */
  CustomCreateFlowDescription?: string
  /**
   *   禁止添加签署方，若为true则在发起流程的可嵌入页面隐藏“添加签署人按钮”

   */
  ForbidAddApprover?: boolean
  /**
   *   禁止设置设置签署流程属性 (顺序、合同签署认证方式等)，若为true则在发起流程的可嵌入页面隐藏签署流程设置面板

   */
  ForbidEditFlowProperties?: boolean
  /**
   * 在发起流程的可嵌入页面要隐藏的控件列表，和 ShowComponentTypes 参数 只能二选一使用，具体的控件类型如下
<ul><li>SIGN_SIGNATURE : 个人签名/印章</li>
<li>SIGN_SEAL : 企业印章</li>
<li>SIGN_PAGING_SEAL : 骑缝章</li>
<li>SIGN_LEGAL_PERSON_SEAL : 法定代表人章</li>
<li>SIGN_APPROVE : 签批</li>
<li>SIGN_OPINION : 签署意见</li>
<li>BUSI-FULL-NAME  : 企业全称</li>
<li>BUSI-CREDIT-CODE : 统一社会信用代码</li>
<li>BUSI-LEGAL-NAME : 法人/经营者姓名</li>
<li>PERSONAL-NAME : 签署人姓名</li>
<li>PERSONAL-MOBILE : 签署人手机号</li>
<li>PERSONAL-IDCARD-TYPE : 签署人证件类型</li>
<li>PERSONAL-IDCARD : 签署人证件号</li>
<li>TEXT : 单行文本</li>
<li>MULTI_LINE_TEXT : 多行文本</li>
<li>CHECK_BOX : 勾选框</li>
<li>SELECTOR : 选择器</li>
<li>DIGIT : 数字</li>
<li>DATE : 日期</li>
<li>FILL_IMAGE : 图片</li>
<li>ATTACHMENT : 附件</li>
<li>EMAIL : 邮箱</li>
<li>LOCATION : 地址</li>
<li>EDUCATION : 学历</li>
<li>GENDER : 性别</li>
<li>DISTRICT : 省市区</li></ul>
   */
  HideComponentTypes?: Array<string>
  /**
   * 在发起流程的可嵌入页面要显示的控件列表，和 HideComponentTypes 参数 只能二选一使用，具体的控件类型如下
<ul><li>SIGN_SIGNATURE : 个人签名/印章</li>
<li>SIGN_SEAL : 企业印章</li>
<li>SIGN_PAGING_SEAL : 骑缝章</li>
<li>SIGN_LEGAL_PERSON_SEAL : 法定代表人章</li>
<li>SIGN_APPROVE : 签批</li>
<li>SIGN_OPINION : 签署意见</li>
<li>BUSI-FULL-NAME  : 企业全称</li>
<li>BUSI-CREDIT-CODE : 统一社会信用代码</li>
<li>BUSI-LEGAL-NAME : 法人/经营者姓名</li>
<li>PERSONAL-NAME : 签署人姓名</li>
<li>PERSONAL-MOBILE : 签署人手机号</li>
<li>PERSONAL-IDCARD-TYPE : 签署人证件类型</li>
<li>PERSONAL-IDCARD : 签署人证件号</li>
<li>TEXT : 单行文本</li>
<li>MULTI_LINE_TEXT : 多行文本</li>
<li>CHECK_BOX : 勾选框</li>
<li>SELECTOR : 选择器</li>
<li>DIGIT : 数字</li>
<li>DATE : 日期</li>
<li>FILL_IMAGE : 图片</li>
<li>ATTACHMENT : 附件</li>
<li>EMAIL : 邮箱</li>
<li>LOCATION : 地址</li>
<li>EDUCATION : 学历</li>
<li>GENDER : 性别</li>
<li>DISTRICT : 省市区</li></ul>
   */
  ShowComponentTypes?: Array<string>
  /**
   * 发起流程的可嵌入页面结果页配置
   */
  ResultPageConfig?: Array<CreateResultPageConfig>
}

/**
 * CreateOrganizationAuthFile返回参数结构体
 */
export interface CreateOrganizationAuthFileResponse {
  /**
   * 授权书链接，有效期5分钟。
   */
  FileUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文档内的填充控件返回结构体，返回控件的基本信息和填写内容值
 */
export interface FilledComponent {
  /**
   * 控件Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentId?: string
  /**
   * 控件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentName?: string
  /**
   * 控件填写状态；0-未填写；1-已填写
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentFillStatus?: string
  /**
   * 控件填写内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentValue?: string
  /**
   * 控件所属参与方Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComponentRecipientId?: string
  /**
   * 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrl?: string
}

/**
 * DescribeIntegrationRoles请求参数结构体
 */
export interface DescribeIntegrationRolesRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 指定分页每页返回的数据条数，单页最大支持 200。
   */
  Limit: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 查询的关键字段，支持Key-Value单值查询。可选键值对如下：
<ul>
  <li>Key:"RoleType"，查询角色类型，Values可选：
    <ul><li>**"1"**：查询系统角色</li><li>**"2"**：查询自定义角色</li></ul>
  </li><li>Key:"RoleStatus"，查询角色状态，Values可选：
    <ul><li>**"1"**：查询启用角色</li><li>**"2"**：查询禁用角色</li></ul>
  </li><li>Key:"IsGroupRole"，是否查询集团角色，Values可选：
    <ul><li>**"0"**：查询非集团角色</li><li>**"1"**：查询集团角色</li></ul>
  </li><li>Key:"IsReturnPermissionGroup"，是否返回角色对应权限树，Values可选：
    <ul><li>**"0"**：接口不返回角色对应的权限树字段</li><li>**"1"**：接口返回角色对应的权限树字段</li></ul>
  </li>
</ul>
   */
  Filters?: Array<Filter>
  /**
   * OFFSET 用于指定查询结果的偏移量，如果不传默认偏移为0,最大2000。
分页参数, 需要limit, offset 配合使用
例如:
您希望得到第三页的数据, 且每页限制最多10条
您可以使用 LIMIT 10 OFFSET 20

   */
  Offset?: number
}

/**
 * 批量签署合同相关信息，指定批量签署合同和签署方的信息，用于补充动态签署人。
 */
export interface FlowBatchApproverInfo {
  /**
   * 合同流程ID。
   */
  FlowId?: string
  /**
   * 签署节点ID，用于生成动态签署人链接完成领取。注：`生成动态签署人补充链接时必传。`
   */
  RecipientId?: string
}

/**
 * CreateFlowEvidenceReport请求参数结构体
 */
export interface CreateFlowEvidenceReportRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 指定申请的报告类型，可选类型如下：
<ul><li> **0** :合同签署报告（默认）</li>
<li> **1** :公证处核验报告</li></ul>
   */
  ReportType?: number
}

/**
 * StartFlow返回参数结构体
 */
export interface StartFlowResponse {
  /**
   * 发起成功后返回的状态，根据合同流程的不同，返回不同状态：
<ul><li> **START** : 发起成功, 合同进入签署环节</li>
<li> **REVIEW** : 提交审核成功, 合同需要发起审核, 发起方企业通过接口审核通过后合同才进入签署环境  `白名单功能，使用前请联系对接的客户经理沟通。`</li>
<li> **EXECUTING** : 已提交发起任务且PDF合同正在合成中, 等PDF合同合成成功后进入签署环节</li></ul>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板中指定的印章信息
 */
export interface SealInfo {
  /**
   * 印章ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SealId: string
  /**
   * 印章类型。LEGAL_PERSON_SEAL: 法定代表人章；
ORGANIZATIONSEAL：企业印章；
OFFICIAL：企业公章；
CONTRACT：合同专用章
注意：此字段可能返回 null，表示取不到有效值。
   */
  SealType: string
  /**
   * 印章名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SealName: string
}

/**
 * 集成版企业角色信息。
 */
export interface StaffRole {
  /**
   * 角色ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId?: string
  /**
   * 角色名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
}

/**
 * 成员企业信息
 */
export interface GroupOrganization {
  /**
   * 成员企业名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 成员企业别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 成员企业id，为 32 位字符串，可在电子签PC 控制台，企业设置->企业电子签账号 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationId?: string
  /**
   * 记录更新时间， unix时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 成员企业加入集团的当前状态
<ul><li> **1**：待授权</li>
<li> **2**：已授权待激活</li>
<li> **3**：拒绝授权</li>
<li> **4**：已解除</li>
<li> **5**：已加入</li>
</ul>

注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 是否为集团主企业
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsMainOrganization?: boolean
  /**
   * 企业社会信用代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdCardNumber?: string
  /**
   * 企业超管信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminInfo?: Admin
  /**
   * 企业许可证Id，此字段暂时不需要关注
注意：此字段可能返回 null，表示取不到有效值。
   */
  License?: string
  /**
   * 企业许可证过期时间，unix时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseExpireTime?: number
  /**
   * 成员企业加入集团时间，unix时间戳，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  JoinTime?: number
  /**
   * 是否使用自建审批流引擎（即不是企微审批流引擎）
<ul><li> **true**：是</li>
<li> **false**：否</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowEngineEnable?: boolean
}

/**
 * 机构信息
 */
export interface OrganizationInfo {
  /**
   * 机构在平台的编号，内部字段，暂未开放
   * @deprecated
   */
  OrganizationId?: string
  /**
   * 用户渠道，内部字段，暂未开放
   * @deprecated
   */
  Channel?: string
  /**
   * 用户在渠道的机构编号，内部字段，暂未开放
   * @deprecated
   */
  OrganizationOpenId?: string
  /**
   * 用户真实的IP，内部字段，暂未开放
   * @deprecated
   */
  ClientIp?: string
  /**
   * 机构的代理IP，内部字段，暂未开放
   * @deprecated
   */
  ProxyIp?: string
}

/**
 * 动态签署2.0合同参与人信息
 */
export interface ArchiveDynamicApproverData {
  /**
   * 签署方唯一编号，一个全局唯一的标识符，不同的流程不会出现冲突。

可以使用签署方的唯一编号来生成签署链接（也可以通过RecipientId来生成签署链接）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 签署方角色编号，签署方角色编号是用于区分同一个流程中不同签署方的唯一标识。不同的流程会出现同样的签署方角色编号。

填写控件和签署控件都与特定的角色编号关联。

注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
}

/**
 * CreateOrganizationAuthUrl请求参数结构体
 */
export interface CreateOrganizationAuthUrlRequest {
  /**
   * 操作人信息
   */
  Operator: UserInfo
  /**
   * 指定授权方式 支持多选:

<ul>
<li><strong>1</strong>:上传授权书方式</li>
<li><strong>2</strong>: 法人授权方式</li>
<li><strong>3</strong>: 法人身份认证方式</li>
</ul>
   */
  AuthorizationTypes?: Array<number | bigint>
  /**
   * 认证企业名称，请确认该名称与企业营业执照中注册的名称一致。

注：

1. `如果名称中包含英文括号()，请使用中文括号（）代替。`

2. `EndPointType=“H5”或者"SHORT_H5"时，该参数必填`

   */
  OrganizationName?: string
  /**
   * 企业统一社会信用代码
   */
  UniformSocialCreditCode?: string
  /**
   * 企业法人的姓名
   */
  LegalName?: string
  /**
   * 认证完成跳回的链接，最长500个字符
   */
  AutoJumpUrl?: string
  /**
   * 营业执照企业地址
   */
  OrganizationAddress?: string
  /**
   * 认证人姓名
   */
  AdminName?: string
  /**
   * 认证人手机号
   */
  AdminMobile?: string
  /**
   * 认证人身份证号
   */
  AdminIdCardNumber?: string
  /**
   * 认证人证件类型， 支持以下类型
<ul><li><b>ID_CARD</b> : 中国大陆居民身份证  (默认值)</li>
<li><b>HONGKONG_AND_MACAO</b>  : 中国港澳居民来往内地通行证</li>
<li><b>HONGKONG_MACAO_AND_TAIWAN</b>  : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>

   */
  AdminIdCardType?: string
  /**
   * 对方打开链接认证时，对方填写的营业执照的社会信用代码是否与接口上传上来的要保持一致。<ul><li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li><li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li></ul>
   */
  UniformSocialCreditCodeSame?: boolean
  /**
   * 对方打开链接认证时，法人姓名是否要与接口传递上来的保持一致。<ul><li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li><li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li></ul>

p.s. 仅在法人姓名不为空时有效
   */
  LegalNameSame?: boolean
  /**
   * 对方打开链接认证时，认证人姓名是否要与接口传递上来的保持一致。<ul><li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li><li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li></ul>

p.s. 仅在认证人姓名不为空时有效
   */
  AdminNameSame?: boolean
  /**
   * 对方打开链接认证时，认证人居民身份证件号是否要与接口传递上来的保持一致。<ul><li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li><li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li></ul>

p.s. 仅在认证人身份证号不为空时有效

   */
  AdminIdCardNumberSame?: boolean
  /**
   * 对方打开链接认证时，认证人手机号是否要与接口传递上来的保持一致。<ul>
<li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li>
<li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li>
</ul>

p.s. 仅在认证人手机号不为空时有效
   */
  AdminMobileSame?: boolean
  /**
   * 对方打开链接认证时，企业名称是否要与接口传递上来的保持一致。<ul><li><b>false（默认值）</b>：关闭状态，实际认证时允许与接口传递的信息存在不一致。</li><li><b>true</b>：启用状态，实际认证时必须与接口传递的信息完全相符。</li></ul>


p.s. 仅在企业名称不为空时有效
   */
  OrganizationNameSame?: boolean
  /**
   * 营业执照正面照（支持PNG或JPG格式）需以base64格式提供，且文件大小不得超过5MB。
   */
  BusinessLicense?: string
  /**
   * 跳转链接类型：

<ul>
<li><b>PC</b>：适用于PC端的认证链接</li>
<li><b>APP</b>：用于全屏或半屏跳转的小程序链接</li>
<li><b>SHORT_URL</b>：跳转小程序的链接的短链形式</li>
<li><b>H5</b>：适用于H5页面的认证链接</li>
<li><b>SHORT_H5</b>：H5认证链接的短链形式</li>
</ul>

   */
  Endpoint?: string
  /**
   * 指定企业初始化引导，现在可以配置如下的选项：

<b>1</b>: 启用此选项后，在企业认证的最终步骤将添加创建印章的引导。如下图的位置
![image](https://qcloudimg.tencent-cloud.cn/raw/88e0b45095a5c589de8995462ad755dc.jpg)
   */
  Initialization?: Array<number | bigint>
  /**
   * 授权书(PNG或JPG或PDF) base64格式, 大小不超过8M 。 
授权书可以通过接口[生成企业授权书](https://qian.tencent.com/developers/companyApis/organizations/CreateOrganizationAuthFile) 来获得。
p.s. 如果上传授权书 ，需遵循以下条件 
1.  超管的信息（超管姓名，超管手机号）必须为必填参数。
2.  认证方式AuthorizationTypes必须只能是上传授权书方式 
   */
  PowerOfAttorneys?: Array<string>
}

/**
 * CreateBatchQuickSignUrl返回参数结构体
 */
export interface CreateBatchQuickSignUrlResponse {
  /**
   * 签署人签署链接信息
   */
  FlowApproverUrlInfo?: FlowApproverUrlInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationRole请求参数结构体
 */
export interface CreateIntegrationRoleRequest {
  /**
   * 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。
   */
  Name: string
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
支持填入集团子公司经办人 userId 代发合同。

注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 角色描述，最大长度为50个字符
   */
  Description?: string
  /**
   * 角色类型，0:saas角色，1:集团角色
默认0，saas角色
   */
  IsGroupRole?: number
  /**
   * 权限树
   */
  PermissionGroups?: Array<PermissionGroup>
  /**
   * 集团角色的话，需要传递集团子企业列表，如果是全选，则传1
   */
  SubOrganizationIds?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DeleteIntegrationRoleUsers返回参数结构体
 */
export interface DeleteIntegrationRoleUsersResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConvertTaskApi请求参数结构体
 */
export interface CreateConvertTaskApiRequest {
  /**
   * 需要进行转换的资源文件类型
支持的文件类型如下：
<ul><li>doc</li>
<li>docx</li>
<li>xls</li>
<li>xlsx</li>
<li>jpg</li>
<li>jpeg</li>
<li>png</li>
<li>html</li>
<li>bmp</li>
<li>txt</li></ul>
   */
  ResourceType: string
  /**
   * 需要进行转换操作的文件资源名称，带资源后缀名。

注:  `资源名称长度限制为256个字符`
   */
  ResourceName: string
  /**
   * 需要进行转换操作的文件资源Id，通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles" target="_blank">UploadFiles</a>接口获取文件资源Id。

注:  `目前，此接口仅支持单个文件进行转换。`
   */
  ResourceId: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * DeleteIntegrationEmployees返回参数结构体
 */
export interface DeleteIntegrationEmployeesResponse {
  /**
   * 员工删除结果。包含成功数据与失败数据。
<ul><li>**成功数据**：展示员工姓名、手机号与电子签平台UserId</li>
<li>**失败数据**：展示员工电子签平台UserId、第三方平台OpenId和失败原因</li></ul>
   */
  DeleteEmployeeResult?: DeleteStaffsResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 需要进行签署审核的签署人信息
 */
export interface NeedReviewApproverInfo {
  /**
   * 签署方经办人的类型，支持以下类型
<ul><li> ORGANIZATION 企业（含企业自动签）</li>
<li>PERSON 个人（含个人自动签）</li></ul>
   */
  ApproverType: string
  /**
   * 签署方经办人的姓名。 经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  ApproverName: string
  /**
   * 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 请确认手机号所有方为此合同签署方。
   */
  ApproverMobile?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD 中国大陆居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN 中国港澳台居民居住证(格式同居民身份证)</li>
<li>OTHER_CARD_TYPE 其他证件</li></ul>

注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  ApproverIdCardType?: string
  /**
   * 签署方经办人的证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  ApproverIdCardNumber?: string
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。

   */
  OrganizationName?: string
}

/**
 * CreateFlowGroupSignReview返回参数结构体
 */
export interface CreateFlowGroupSignReviewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchSignUrl返回参数结构体
 */
export interface CreateBatchSignUrlResponse {
  /**
   * 批量签署链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。

注: 
1. 非小程序和APP集成使用
2. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  SignUrl?: string
  /**
   * 链接过期时间以 Unix 时间戳格式表示，默认生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。
   */
  ExpiredTime?: number
  /**
   * 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径

注: 
1. 小程序和APP集成使用
2. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  MiniAppPath?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowReminds返回参数结构体
 */
export interface CreateFlowRemindsResponse {
  /**
   * 合同催办结果的详细信息列表。
   */
  RemindFlowRecords?: Array<RemindFlowRecords>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationGroupOrganizations请求参数结构体
 */
export interface DescribeOrganizationGroupOrganizationsRequest {
  /**
   * 执行本接口操作的员工信息,userId必填。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 指定分页每页返回的数据条数，单页最大1000
   */
  Limit: number
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0
   */
  Offset: number
  /**
   * 查询成员企业的企业名，模糊匹配
   */
  Name?: string
  /**
   * 成员企业加入集团的当前状态
<ul><li> **1**：待授权</li>
<li> **2**：已授权待激活</li>
<li> **3**：拒绝授权</li>
<li> **4**：已解除</li>
<li> **5**：已加入</li>
</ul>
   */
  Status?: number
  /**
   * 是否导出当前成员企业数据
<ul><li> **false**：不导出（默认值）</li>
<li> **true**：导出</li></ul>
   */
  Export?: boolean
  /**
   * 成员企业机构 ID，32 位字符串，在PC控制台 集团管理可获取
   */
  Id?: string
}

/**
 * 代理相关应用信息，如集团主企业代子企业操作
 */
export interface Agent {
  /**
   * 代理机构的应用编号,32位字符串，一般不用传
   * @deprecated
   */
  AppId?: string
  /**
   * 被代理机构的应用号，一般不用传
   * @deprecated
   */
  ProxyAppId?: string
  /**
   * 被代理机构在电子签平台的机构编号，集团代理下场景必传
   */
  ProxyOrganizationId?: string
  /**
   * 被代理机构的经办人，一般不用传
   * @deprecated
   */
  ProxyOperator?: string
}

/**
 * DescribeUserAutoSignStatus返回参数结构体
 */
export interface DescribeUserAutoSignStatusResponse {
  /**
   * 查询用户是否已开通自动签
   */
  IsOpen?: boolean
  /**
   * 自动签许可生效时间。当且仅当已通过许可开通自动签时有值。

值为unix时间戳,单位为秒。
   */
  LicenseFrom?: number
  /**
   * 自动签许可到期时间。当且仅当已通过许可开通自动签时有值。

值为unix时间戳,单位为秒。
   */
  LicenseTo?: number
  /**
   * 设置用户开通自动签时是否绑定个人自动签账号许可。<ul><li>**0**: 使用个人自动签账号许可进行开通，个人自动签账号许可有效期1年，注: `不可解绑释放更换他人`</li><li>**1**: 不绑定自动签账号许可开通，后续使用合同份额进行合同发起</li></ul>
   */
  LicenseType?: number
  /**
   * 用户开通自动签指定使用的印章，为空则未设置印章，需重新进入开通链接设置印章。
   */
  SealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签署人详情信息
 */
export interface FlowApproverDetail {
  /**
   * 签署时的相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveMessage?: string
  /**
   * 签署方姓名
   */
  ApproveName?: string
  /**
   * 签署方的签署状态
0：还没有发起
1：流程中 没有开始处理
2：待签署
3：已签署
4：已拒绝
5：已过期
6：已撤销
7：还没有预发起
8：待填写
9：因为各种原因而终止
10：填写完成
15：已解除
19：转他人处理
   */
  ApproveStatus?: number
  /**
   * 模板配置中的参与方ID,与控件绑定
   * @deprecated
   */
  ReceiptId?: string
  /**
   * 客户自定义的用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomUserId?: string
  /**
   * 签署人手机号
   */
  Mobile?: string
  /**
   * 签署顺序，如果是有序签署，签署顺序从小到大
   */
  SignOrder?: number
  /**
   * 签署人签署时间，时间戳，单位秒
   */
  ApproveTime?: number
  /**
   * 签署方类型，ORGANIZATION-企业员工，PERSON-个人，ENTERPRISESERVER-企业静默签
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveType?: string
  /**
   * 签署方侧用户来源，如WEWORKAPP-企业微信等
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverSource?: string
  /**
   * 客户自定义签署方标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomApproverTag?: string
  /**
   * 签署方企业Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationId?: string
  /**
   * 签署方企业名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName?: string
  /**
   * 签署参与人在本流程中的编号ID（每个流程不同），可用此ID来定位签署参与人在本流程的签署节点，也可用于后续创建签署链接等操作。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 自定义签署人角色
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverRoleName?: string
  /**
   * 模板配置中的参与方ID,与控件绑定
   */
  RecipientId?: string
}

/**
 * CreateFlowGroupByFiles请求参数结构体
 */
export interface CreateFlowGroupByFilesRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同（流程）组名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowGroupName: string
  /**
   * 合同（流程）组的子合同信息，支持2-50个子合同
   */
  FlowGroupInfos: Array<FlowGroupInfo>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 合同（流程）组的配置项信息。
其中包括：
<ul>
<li>是否通知本企业签署方</li>
<li>是否通知其他签署方</li>
</ul>
   */
  FlowGroupOptions?: FlowGroupOptions
}

/**
 * DescribeFlowComponents返回参数结构体
 */
export interface DescribeFlowComponentsResponse {
  /**
   * 合同流程关联的填写控件信息，包括填写控件的归属方以及是否填写等内容。
   */
  RecipientComponentInfos?: Array<RecipientComponentInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowEvidenceReport返回参数结构体
 */
export interface DescribeFlowEvidenceReportResponse {
  /**
   * 出证报告PDF的下载 URL，`有效期为5分钟`，超过有效期后将无法再下载。
   */
  ReportUrl?: string
  /**
   * 出证任务执行的状态, 状态含义如下：

<ul><li>**EvidenceStatusExecuting**：  出证任务在执行中</li>
<li>**EvidenceStatusSuccess**：  出证任务执行成功</li>
<li>**EvidenceStatusFailed** ： 出证任务执行失败</li></ul>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 意愿核身（点头确认模式）使用的文案，若未使用意愿核身（点头确认模式），则该字段无需传入。当前仅支持一个提示文本。
 */
export interface IntentionAction {
  /**
   * 点头确认模式下，系统语音播报使用的问题文本，问题最大长度为150个字符。
   */
  Text?: string
}

/**
 * 企业应用回调信息
 */
export interface CallbackInfo {
  /**
   * 回调url,。请确保回调地址能够接收并处理 HTTP POST 请求，并返回状态码 200 以表示处理正常。
   */
  CallbackUrl: string
  /**
   * 回调加密key，已废弃
   * @deprecated
   */
  Token?: string
  /**
   * 回调加密key，用于回调消息加解密。
   */
  CallbackKey?: string
  /**
   * 回调验签token，用于回调通知校验。
   */
  CallbackToken?: string
}

/**
 * DescribeSignFaceVideo请求参数结构体
 */
export interface DescribeSignFaceVideoRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId: string
  /**
   * 签署参与人在本流程中的编号ID(每个流程不同)，可用此ID来定位签署参与人在本流程的签署节点，也可用于后续创建签署链接等操作。
   */
  SignId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateEmployeeQualificationSealQrCode返回参数结构体
 */
export interface CreateEmployeeQualificationSealQrCodeResponse {
  /**
   * 二维码图片的Base64  注:  `此二维码的有效时间为7天，过期后需要重新生成新的二维码图片`
   */
  QrcodeBase64?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowGroupByTemplates返回参数结构体
 */
export interface CreateFlowGroupByTemplatesResponse {
  /**
   * 合同(流程)组的合同组Id
   */
  FlowGroupId?: string
  /**
   * 合同(流程)组中子合同列表.
   */
  FlowIds?: Array<string>
  /**
   * 合同组签署人信息。
   */
  Approvers?: Array<FlowGroupApprovers>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 撤销失败的流程信息
 */
export interface CancelFailureFlow {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 撤销失败原因
   */
  Reason?: string
}

/**
 * CreateUserVerifyUrl返回参数结构体
 */
export interface CreateUserVerifyUrlResponse {
  /**
   * 腾讯电子签小程序的实名认证链接。
如果没有传递，默认值是 HTTP。 链接的有效期均是 7 天。

<strong>1.如果EndPoint是APP</strong>：
得到的链接类似于<a href="">pages/guide/index?to=MP_PERSONAL_VERIFY&shortKey=yDCZHUyOcExAlcOvNod0</a>, 用法可以参考描述中的"跳转到小程序的实现"

<strong>2.如果EndPoint是HTTP</strong>：
得到的链接类似于 <a href="">https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?to=TAG_VERIFY&shortKey=yDCZHUyOcChrfpaswT0d</a>，点击后会跳转到腾讯电子签小程序进行签署

<strong>3.如果EndPoint是HTTP_SHORT_URL</strong>：
得到的链接类似于<a href="">https://essurl.cn/2n**42Nd</a>，点击后会跳转到腾讯电子签小程序进行签署

<strong>4.如果EndPoint是H5</strong>：
得到的链接类似于 <a href="">https://quick.test.qian.tencent.cn/guide?Code=yDU****VJhsS5q&CodeType=xxx&shortKey=yD*****frcb</a>，点击后会跳转到腾讯电子签H5页面进行签署

<strong>5.如果EndPoint是H5_SHORT_URL</strong>：
得到的链接类似于<a href="">https://essurl.cn/2n**42Nd</a>，点击后会跳转到腾讯电子签H5页面进行签署


`注：` <font color="red">生成的链路后面不能再增加参数，防止出错重复参数覆盖原有的参数</font>
示例值：https://essurl.cn/2n**42Nd
   */
  UserVerifyUrl?: string
  /**
   * 链接过期时间，为Unix时间戳（单位为秒）。
   */
  ExpireTime?: number
  /**
   * 小程序appid，用于半屏拉起电子签小程序， 仅在 Endpoint 设置为 APP 的时候返回
   */
  MiniAppId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBatchOrganizationRegistrationUrls请求参数结构体
 */
export interface DescribeBatchOrganizationRegistrationUrlsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 通过接口CreateBatchOrganizationRegistrationTasks创建企业批量认证链接任得到的任务Id
   */
  TaskId: string
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
}

/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。

> **模板组成** 
>
>  一个模板通常会包含以下结构信息
>- 模板基本信息
>- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方
>- 填写控件 Components
>- 签署控件 SignComponents
>- 生成模板的文件基础信息 FileInfos
 */
export interface TemplateInfo {
  /**
   * 模板ID，模板的唯一标识
   */
  TemplateId?: string
  /**
   * 模板的名字
   */
  TemplateName?: string
  /**
   * 此模块需要签署的各个参与方的角色列表。RecipientId标识每个参与方角色对应的唯一标识符，用于确定此角色的信息。

[点击查看在模板中配置的签署参与方角色列表的样子](https://qcloudimg.tencent-cloud.cn/raw/e082bbcc0d923f8cb723d98382410aa2.png)


   */
  Recipients?: Array<Recipient>
  /**
   * 模板的填充控件列表

[点击查看在模板中配置的填充控件的样子](https://qcloudimg.tencent-cloud.cn/raw/cb2f58529fca8d909258f9d45a56f7f4.png)
   */
  Components?: Array<Component>
  /**
   * 此模板中的签署控件列表

[点击查看在模板中配置的签署控件的样子](https://qcloudimg.tencent-cloud.cn/raw/29bc6ed753a5a0fce4a3ab02e2c0d955.png)
   */
  SignComponents?: Array<Component>
  /**
   * 模板描述信息
   */
  Description?: string
  /**
   * 此模板的资源ID
   */
  DocumentResourceIds?: Array<string>
  /**
   * 生成模板的文件基础信息
   */
  FileInfos?: Array<FileInfo>
  /**
   * 此模板里边附件的资源ID
   */
  AttachmentResourceIds?: Array<string>
  /**
   * 签署人参与签署的顺序，可以分为以下两种方式：

<b>无序</b>：不限定签署人的签署顺序，签署人可以在任何时间签署。此种方式值为 ：｛-1｝
<b>有序</b>：通过序列数字标识签署顺序，从0开始编码，数字越大签署顺序越靠后，签署人按照指定的顺序依次签署。此种方式值为： ｛0，1，2，3………｝
   */
  SignOrder?: Array<number | bigint>
  /**
   * 此模板的状态可以分为以下几种：

<b>-1</b>：不可用状态。
<b>0</b>：草稿态，即模板正在编辑或未发布状态。
<b>1</b>：正式态，只有正式态的模板才可以发起合同。
   */
  Status?: number
  /**
   * 模板的创建者信息，用户的名字

注： `是创建者的名字，而非创建者的用户ID`
   */
  Creator?: string
  /**
   * 模板创建的时间戳，格式为Unix标准时间戳（秒）
   */
  CreatedOn?: number
  /**
   * 此模板创建方角色信息。

[点击查看在模板中配置的创建方角色的样子](https://qcloudimg.tencent-cloud.cn/raw/e082bbcc0d923f8cb723d98382410aa2.png)

   */
  Promoter?: Recipient
  /**
   * 模板类型可以分为以下两种：

<b>1</b>：带有本企业自动签署的模板，即签署过程无需签署人手动操作，系统自动完成签署。
<b>3</b>：普通模板，即签署人需要手动进行签署操作。
   */
  TemplateType?: number
  /**
   * 模板可用状态可以分为以下两种：

<b>1</b>：（默认）启用状态，即模板可以正常使用。
<b>2</b>：停用状态，即模板暂时无法使用。

可到控制台启停模板
   */
  Available?: number
  /**
   * 创建模板的企业ID，电子签的机构ID
   */
  OrganizationId?: string
  /**
   * 模板创建人用户ID
   */
  CreatorId?: string
  /**
   * 模板的 H5 预览链接，有效期为 5 分钟。
您可以通过浏览器直接打开此链接预览模板，或将其嵌入到 iframe 中进行预览。

注意：只有在请求接口时将 <b>WithPreviewUrl </b>参数设置为 true，才会生成预览链接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewUrl?: string
  /**
   * 用户自定义合同类型。

返回配置模板的时候选择的合同类型。[点击查看配置的位置](https://qcloudimg.tencent-cloud.cn/raw/4a766f0540253bf2a05d50c58bd14990.png)

自定义合同类型配置的地方如链接图所示。[点击查看自定义合同类型管理的位置](https://qcloudimg.tencent-cloud.cn/raw/36582cea03ae6a2559894844942b5d5c.png)

注意：此字段可能返回 null，表示取不到有效值。
   */
  UserFlowType?: UserFlowType
  /**
   * 模板版本的编号，旨在标识其独特的版本信息，通常呈现为一串字符串，由日期和递增的数字组成
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateVersion?: string
  /**
   * 模板是否已发布可以分为以下两种状态：

<b>true</b>：已发布状态，表示该模板已经发布并可以正常使用。
<b>false</b>：未发布状态，表示该模板还未发布，无法使用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Published?: boolean
  /**
   * <b>集体账号场景下</b>： 集团账号分享给子企业的模板的来源模板ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareTemplateId?: string
  /**
   * 此模板配置的预填印章列表（包括自动签署指定的印章）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateSeals?: Array<SealInfo>
  /**
   * 模板内部指定的印章列表
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Seals?: Array<SealInfo>
}

/**
 * 签署二维码的基本信息，用于创建二维码，用户可扫描该二维码进行签署操作。
 */
export interface SignQrCode {
  /**
   * 二维码ID，为32位字符串。
   */
  QrCodeId?: string
  /**
   * 二维码URL，可通过转换二维码的工具或代码组件将此URL转化为二维码，以便用户扫描进行流程签署。
   */
  QrCodeUrl?: string
  /**
   * 二维码的有截止时间，格式为Unix标准时间戳（秒）。
一旦超过二维码的有效期限，该二维码将自动失效。
   */
  ExpiredTime?: number
  /**
   * 微信小程序二维码
   */
  WeixinQrCodeUrl?: string
}

/**
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
  /**
   * 合同流程的底层电子文档ID，为32位字符串。

注:
后续需用同样的FlowId再次调用[发起签署流程](https://qian.tencent.com/developers/companyApis/startFlows/StartFlow)，合同才能进入签署环节
   */
  DocumentId?: string
  /**
   * 合同预览链接URL。

注: `1.如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL`
`2.当使用的模板中存在动态表格控件时，预览结果中没有动态表格的填写内容,完整的预览链接需通过[合同文档合成完成回调](https://qian.tencent.com/developers/company/callback_types_contracts_sign/#%E4%B9%9D-%E5%90%88%E5%90%8C%E6%96%87%E6%A1%A3%E5%90%88%E6%88%90%E5%AE%8C%E6%88%90%E5%9B%9E%E8%B0%83)获取。
   */
  PreviewFileUrl?: string
  /**
   * 签署方信息，如角色ID、角色名称等
   */
  Approvers?: Array<ApproverItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationEmployees请求参数结构体
 */
export interface DescribeIntegrationEmployeesRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 指定分页每页返回的数据条数，单页最大支持 20。
   */
  Limit: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 查询的关键字段，支持Key-Values查询。可选键值如下：
<ul>
  <li>Key:**"Status"**，根据实名状态查询员工，Values可选：
    <ul><li>**["IsVerified"]**：查询已实名的员工</li><li>**["NotVerified"]**：查询未实名的员工</li></ul></li>
  <li>Key:**"DepartmentId"**，根据部门ID查询部门下的员工，Values为指定的部门ID：**["DepartmentId"]**</li>
  <li>Key:**"UserId"**，根据用户ID查询员工，Values为指定的用户ID：**["UserId"]**</li>
  <li>Key:**"UserWeWorkOpenId"**，根据用户企微账号ID查询员工，Values为指定用户的企微账号ID：**["UserWeWorkOpenId"]**</li>
  <li>Key:**"StaffOpenId"**，根据第三方系统用户OpenId查询员工，Values为第三方系统用户OpenId列表：**["OpenId1","OpenId2",...]**</li>
  <li>Key:**"RoleId"**，根据电子签角色ID查询员工，Values为指定的角色ID，满足其中任意一个角色即可：**["RoleId1","RoleId2",...]**</li>
</ul>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0，最大20000。关于<code>Offset</code>的更进一步介绍请参考 API <a href="https://cloud.tencent.com/document/api/213/15688" target="_blank">简介</a>中的相关小节。
   */
  Offset?: number
}

/**
 * UnbindEmployeeUserIdWithClientOpenId返回参数结构体
 */
export interface UnbindEmployeeUserIdWithClientOpenIdResponse {
  /**
   * 解绑是否成功。
<ul><li> **0**：失败 </li>
<li> **1**：成功 </li></ul>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationUserRoles返回参数结构体
 */
export interface CreateIntegrationUserRolesResponse {
  /**
   * 绑定角色失败列表信息
   */
  FailedCreateRoleData?: Array<FailedCreateRoleData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlow请求参数结构体
 */
export interface CreateFlowRequest {
  /**
   * 本合同的发起人，<a href="https://qcloudimg.tencent-cloud.cn/raw/f850cfbe163a1cb38439a9f551c2505c.png" target="_blank">点击查看合同发起人展示的位置</a>

注： 支持填入集团子公司经办人 userId 代发合同。
   */
  Operator: UserInfo
  /**
   * 自定义的合同流程的名称，长度不能超过200个字符，只能由中文汉字、中文标点、英文字母、阿拉伯数字、空格、小括号、中括号、中划线、下划线以及（,）、（;）、（.）、(&)、（+）组成。

该名称还将用于合同签署完成后文件下载的默认文件名称。
   */
  FlowName: string
  /**
   * 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。

注:  
<font color="red" > <b> 在发起流程时，需要保证 approver 中的顺序与模板定义顺序一致，否则会发起失败。
例如，如果模板中定义的第一个参与人是个人用户，第二个参与人是企业员工，则在 approver 中传参时，第一个也必须是个人用户，第二个参与人必须是企业员工。</b></font>

[点击查看模板参与人顺序定义位置](https://qcloudimg.tencent-cloud.cn/raw/d14457b48cc66b29262ccb9d7b3ed556.png)
   */
  Approvers: Array<FlowCreateApprover>
  /**
   * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
   */
  FlowDescription?: string
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
此合同类型需要跟模板配置的合同类型保持一致。
   */
  FlowType?: string
  /**
   * 已经废弃字段，客户端Token，保持接口幂等性,最大长度64个字符
   */
  ClientToken?: string
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  DeadLine?: number
  /**
   * 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。

到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。
   */
  RemindedOn?: number
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
  /**
   * 合同流程的签署顺序类型：
<ul><li> **false**：(默认)有序签署, 本合同多个参与人需要依次签署 </li>
<li> **true**：无序签署, 本合同多个参与人没有先后签署限制</li></ul>
注：`请和模板中的配置保持一致`
   */
  Unordered?: boolean
  /**
   * 您可以自定义**腾讯电子签小程序合同列表页**展示的合同内容模板，模板中支持以下变量：
<ul><li>{合同名称}   </li>
<li>{发起方企业} </li>
<li>{发起方姓名} </li>
<li>{签署方N企业}</li>
<li>{签署方N姓名}</li></ul>
其中，N表示签署方的编号，从1开始，不能超过签署人的数量。

例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子

合同名称：租房合同 
发起方：腾讯公司(张三) 
签署方：李四

![image](https://qcloudimg.tencent-cloud.cn/raw/628f0928cac15d2e3bfa6088f53f5998.png)


   */
  CustomShowMap?: string
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。

<b>注</b>
1. 抄送人名单中可以包括自然人以及本企业的员工。
2. 请确保抄送人列表中的成员不与任何签署人重复。
   */
  CcInfos?: Array<CcInfo>
  /**
   * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：
<ul><li> **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签）  </li><li> **OTHER** :  通用场景</li></ul>
注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
   */
  AutoSignScene?: string
  /**
   * 暂未开放
   * @deprecated
   */
  RelatedFlowId?: string
  /**
   * 暂未开放
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下： 
 <ul><li> <b>0</b> :合同（默认值）</li> <li> <b>1</b> :文件</li> <li> <b>2</b> :协议</li></ul>

效果如下:
![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png)
   */
  FlowDisplayType?: number
}

/**
 * CreateSchemeUrl请求参数结构体
 */
export interface CreateSchemeUrlRequest {
  /**
   * 执行本接口操作的员工信息, userId 必填。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程签署方的组织机构名称。如果名称中包含英文括号()，请使用中文括号（）代替。注: `获取B端动态签署人领取链接时,可指定此字段来预先设定签署人的企业,预设后只能以该企业身份去领取合同并完成签署`
   */
  OrganizationName?: string
  /**
   * 合同流程里边签署方经办人的姓名。

   */
  Name?: string
  /**
   * 合同流程里边签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
   */
  Mobile?: string
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证</li>
<li>HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>
   */
  IdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成(如存在X，请大写)。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber?: string
  /**
   * 要跳转的链接类型

<ul><li> **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型  ，此时返回长链 (默认类型)</li>
<li>**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链</li>
<li>**APP**： 第三方APP或小程序跳转电子签小程序的path,  APP或者小程序跳转适合此类型</li></ul>
   */
  EndPoint?: string
  /**
   * 合同流程ID 
注: `如果准备跳转到合同流程签署的详情页面(即PathType=1时)必传,   跳转其他页面可不传`
   */
  FlowId?: string
  /**
   * 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值
   */
  FlowGroupId?: string
  /**
   * 要跳转到的页面类型 <ul><li> **0** : 腾讯电子签小程序个人首页 (默认) <a href="https://qcloudimg.tencent-cloud.cn/raw/a2667ea84ec993cc060321afe3191d65.jpg" target="_blank" >点击查看示例页面</a></li><li> **1** : 腾讯电子签小程序流程合同的详情页,即合同签署页面(注:`仅生成短链或者小程序Path时支持跳转合同详情页,即EndPoint传HTTP_SHORT_URL或者APP`)<a href="https://qcloudimg.tencent-cloud.cn/raw/446a679f09b1b7f40eb84e67face8acc.jpg" target="_blank" >点击查看示例页面</a></li><li> **2** : 腾讯电子签小程序合同列表页 <a href="https://qcloudimg.tencent-cloud.cn/raw/c7b80e44c1d68ae3270a6fc4939c7214.jpg" target="_blank" >点击查看示例页面</a> </li><li> **3** : 腾讯电子签小程序合同封面页  （注：`生成动态签署人补充链接时，必须指定为封面页`）<a href="https://qcloudimg.tencent-cloud.cn/raw/0d22cc587be4bf084877c151350c3bf7.jpg" target="_blank" >点击查看示例页面</a></li></ul>
   */
  PathType?: number
  /**
   * 签署完成后是否自动回跳
<ul><li>**false**：否, 签署完成不会自动跳转回来(默认)</li><li>**true**：是, 签署完成会自动跳转回来</li></ul>

注: 
1. 该参数<font color="red">只针对APP类型（电子签小程序跳转贵方小程序）场景</font> 的签署链接有效
2. <font color="red">手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑</font>, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)
3. <font color="red">电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制）</font> 
   */
  AutoJumpBack?: boolean
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 生成的签署链接在签署页面隐藏的按钮列表，可设置如下：

<ul><li> **0** :合同签署页面更多操作按钮</li>
<li> **1** :合同签署页面更多操作的拒绝签署按钮</li>
<li> **2** :合同签署页面更多操作的转他人处理按钮</li>
<li> **3** :签署成功页的查看详情按钮</li></ul>

注:  `字段为数组, 可以传值隐藏多个按钮`
   */
  Hides?: Array<number | bigint>
  /**
   * 签署节点ID，用于生成动态签署人链接完成领取。

注：`生成动态签署人补充链接时必传。`
   */
  RecipientId?: string
  /**
   * 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。
   */
  FlowGroupUrlInfo?: FlowGroupUrlInfo
  /**
   * <font color="red">仅公众号 H5 跳转电子签小程序时</font>，如需签署完成的“返回应用”功能，在获取签署链接接口的 UrlUseEnv 参数需设置为 **WeChatOfficialAccounts**，小程序签署成功的结果页面中才会出现“返回应用”按钮。在用户点击“返回应用”按钮之后，会返回到公众号 H5。 

参考 [公众号 H5 跳转电子签小程序](https://qian.tencent.com/developers/company/openwxminiprogram/#23-%E5%85%AC%E4%BC%97%E5%8F%B7-h5-%E4%B8%AD%E8%B7%B3%E8%BD%AC)。
   */
  UrlUseEnv?: string
}

/**
 * DeleteIntegrationDepartment返回参数结构体
 */
export interface DeleteIntegrationDepartmentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动签开启、签署相关配置
 */
export interface AutoSignConfig {
  /**
   * 自动签开通个人用户信息, 包括名字,身份证等
   */
  UserInfo: UserThreeFactor
  /**
   * 是否回调证书信息:
<ul><li>**false**: 不需要(默认)</li>
<li>**true**:需要</li></ul>
   */
  CertInfoCallback?: boolean
  /**
   * 是否支持用户自定义签名印章:
<ul><li>**false**: 不能自己定义(默认)</li>
<li>**true**: 可以自己定义</li></ul>
   */
  UserDefineSeal?: boolean
  /**
   * 回调中是否需要自动签将要使用的印章(签名) 图片的 base64:
<ul><li>**false**: 不需要(默认)</li>
<li>**true**: 需要</li></ul>
   */
  SealImgCallback?: boolean
  /**
   * 执行结果的回调URL，该URL仅支持HTTP或HTTPS协议，建议采用HTTPS协议以保证数据传输的安全性。
腾讯电子签服务器将通过POST方式，application/json格式通知执行结果，请确保外网可以正常访问该URL。
回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 开通时候的身份验证方式, 取值为：
<ul><li>**WEIXINAPP** : 微信人脸识别</li>
<li>**INSIGHT** : 慧眼人脸认别</li>
<li>**TELECOM** : 运营商三要素验证</li></ul>
注：
<ul><li>如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。为空默认 WEIXINAPP</li>
<li>如果是 H5 开通链接，支持传 INSIGHT / TELECOM。为空默认 INSIGHT </li></ul>
   */
  VerifyChannels?: Array<string>
  /**
   * 设置用户自动签合同的扣费方式。

<ul><li><b>1</b>: (默认)使用合同份额进行扣减</li></ul>
   */
  LicenseType?: number
  /**
   * 开通成功后前端页面跳转的url，此字段的用法场景请联系客户经理确认。

注：`仅支持H5开通场景`, `跳转链接仅支持 https:// , qianapp:// 开头`

跳转场景：
<ul><li>**贵方H5 -> 腾讯电子签H5 -> 贵方H5** : JumpUrl格式: https://YOUR_CUSTOM_URL/xxxx，只需满足 https:// 开头的正确且合规的网址即可。</li>
<li>**贵方原生App -> 腾讯电子签H5 -> 贵方原生App** : JumpUrl格式: qianapp://YOUR_CUSTOM_URL，只需满足 qianapp:// 开头的URL即可。`APP实现方，需要拦截Webview地址跳转，发现url是qianapp:// 开头时跳转到原生页面。`APP拦截地址跳转可参考：<a href='https://stackoverflow.com/questions/41693263/android-webview-err-unknown-url-scheme'>Android</a>，<a href='https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/webview/upi-intent-ios/'>IOS</a> </li></ul>

成功结果返回：
若贵方需要在跳转回时通过链接query参数提示开通成功，JumpUrl中的query应携带如下参数：`appendResult=qian`。这样腾讯电子签H5会在跳转回的url后面会添加query参数提示贵方签署成功，例如： qianapp://YOUR_CUSTOM_URL?action=sign&result=success&from=tencent_ess
   */
  JumpUrl?: string
}

/**
 * DescribeThirdPartyAuthCode请求参数结构体
 */
export interface DescribeThirdPartyAuthCodeRequest {
  /**
   * 腾讯电子签小程序跳转客户企业小程序时携带的授权查看码，AuthCode由腾讯电子签小程序生成。
   */
  AuthCode: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateDynamicFlowApprover返回参数结构体
 */
export interface CreateDynamicFlowApproverResponse {
  /**
   * 合同流程ID，为32位字符串
   */
  FlowId?: string
  /**
   * 补充动态合同签署人的结果数组
   */
  DynamicFlowApproverList?: Array<DynamicFlowApproverResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchOrganizationRegistrationTasks返回参数结构体
 */
export interface CreateBatchOrganizationRegistrationTasksResponse {
  /**
   * 生成注册链接的任务Id，
根据这个id， 调用DescribeBatchOrganizationRegistrationUrls 获取生成的链接，进入认证流程
   */
  TaskId?: string
  /**
   * 批量生成企业认证链接的详细错误信息，
顺序与输入参数保持一致。
若企业认证均成功生成，则不返回错误信息；
若存在任何错误，则返回具体的错误描述。
   */
  ErrorMessages?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReleaseFlow返回参数结构体
 */
export interface CreateReleaseFlowResponse {
  /**
   * 解除协议流程编号
`注意：这里的流程编号对应的合同是本次发起的解除协议。`

   */
  FlowId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchInitOrganizationUrl请求参数结构体
 */
export interface CreateBatchInitOrganizationUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 初始化操作类型
<ul>
<li>CREATE_SEAL : 创建印章</li>
<li>AUTH_JOIN_ORGANIZATION_GROUP : 加入集团企业</li>
<li>OPEN_AUTO_SIGN :开通企业自动签署</li>
<li>PARTNER_AUTO_SIGN_AUTH :合作方企业授权自动签</li>
</ul>
   */
  OperateTypes: Array<string>
  /**
   * 批量操作的企业Id列表，最大支持50个
   */
  OrganizationIds: Array<string>
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
  /**
   * 被授权的合作方企业在电子签的企业电子签账号，当操作类型包含 PARTNER_AUTO_SIGN_AUTH （合作方企业授权自动签）时必传。

企业电子签账号可在[电子签的网页端](https://qian.tencent.com/console/company-settings/company-center) ，于企业设置-企业信息菜单栏下复制获取。

![企业电子签账号](https://qcloudimg.tencent-cloud.cn/raw/4e6b30ee92f00671f7f1c5bd127c27db.png)
   */
  AuthorizedOrganizationId?: string
}

/**
 * CreateWebThemeConfig返回参数结构体
 */
export interface CreateWebThemeConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindEmployeeUserIdWithClientOpenId请求参数结构体
 */
export interface BindEmployeeUserIdWithClientOpenIdRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。

通过<a href="https://qian.tencent.com/developers/companyApis/staffs/DescribeIntegrationEmployees" target="_blank">DescribeIntegrationEmployees</a>接口获取，也可登录腾讯电子签控制台查看
![image](https://qcloudimg.tencent-cloud.cn/raw/97cfffabb0caa61df16999cd395d7850.png)
   */
  UserId: string
  /**
   * 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。 该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。
   */
  OpenId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateOrganizationInfoChangeUrl返回参数结构体
 */
export interface CreateOrganizationInfoChangeUrlResponse {
  /**
   * 创建的企业信息变更链接。
   */
  Url?: string
  /**
   * 链接过期时间。链接7天有效。
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganizationAuthorizations返回参数结构体
 */
export interface DeleteOrganizationAuthorizationsResponse {
  /**
   * 清理的认证流的详细信息，其中包括企业名称，认证流唯一 Id 以及清理过程中产生的错误信息
   */
  DeleteOrganizationAuthorizationInfos?: Array<DeleteOrganizationAuthorizationInfo>
  /**
   * 批量清理认证流返回的状态值
其中包括
- 1 全部成功
- 2 部分成功
- 3 全部失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtendedServiceAuthDetail请求参数结构体
 */
export interface DescribeExtendedServiceAuthDetailRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 要查询的扩展服务类型。
如下所示：
<ul><li>OPEN_SERVER_SIGN：企业静默签署</li>
<li>BATCH_SIGN：批量签署</li>
</ul>

   */
  ExtendServiceType?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用。 注：`1.默认值为20，单页做大值为200。`
   */
  Limit?: number
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。 注：`1.offset从0开始，即第一页为0。` `2.默认从第一页返回。`
   */
  Offset?: number
}

/**
 * CreateOrganizationAuthFile请求参数结构体
 */
export interface CreateOrganizationAuthFileRequest {
  /**
   * 企业授权书信息参数， 需要自行保证这些参数跟营业执照中的信息一致。
   */
  OrganizationCommonInfo: OrganizationCommonInfo
  /**
   * 代理企业和员工的信息。<br/>在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 执行本接口操作的员工信息。<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 授权书类型：
- 0: 企业认证超管授权书
- 1: 超管变更授权书
- 2: 企业注销授权书
   */
  Type?: number
}

/**
 * 企业员工信息。
 */
export interface Staff {
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。
注：`创建和更新场景无需填写。`
   */
  UserId?: string
  /**
   * 显示的用户名/昵称。
   */
  DisplayName?: string
  /**
   * 用户手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
   */
  Mobile?: string
  /**
   * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 用户在第三方平台ID。
注：`如需在此接口提醒员工实名，该参数不传。`
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId?: string
  /**
   * 员工角色信息。
注：`创建和更新场景无需填写。`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<StaffRole>
  /**
   * 员工部门信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Department?: Department
  /**
   * 员工是否实名。
注：`创建和更新场景无需填写。`
   */
  Verified?: boolean
  /**
   * 员工创建时间戳，单位秒。
注：`创建和更新场景无需填写。`
   */
  CreatedOn?: number
  /**
   * 员工实名时间戳，单位秒。
注：`创建和更新场景无需填写。`
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifiedOn?: number
  /**
   * 员工是否离职：
<ul><li>**0**：未离职</li><li>**1**：离职</li></ul>
注：`创建和更新场景无需填写。`
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuiteJob?: number
  /**
   * 员工离职交接人用户ID。
注：`创建和更新场景无需填写。`
   */
  ReceiveUserId?: string
  /**
   * 员工离职交接人用户OpenId。
注：`创建和更新场景无需填写。`
   */
  ReceiveOpenId?: string
  /**
   * 企业微信用户账号ID。
注：`仅企微类型的企业创建员工接口支持该字段。`
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeworkOpenId?: string
}

/**
 * 签署控件的类型和范围限制条件，用于控制文件发起后签署人拖拽签署区时可使用的控件类型和具体的印章或签名方式。
 */
export interface ComponentLimit {
  /**
   * 控件类型，支持以下类型
<ul><li>SIGN_SEAL : 印章控件</li>
<li>SIGN_PAGING_SEAL : 骑缝章控件</li>
<li>SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件</li>
<li>SIGN_SIGNATURE : 用户签名控件</li></ul>
   */
  ComponentType: string
  /**
   * 签署控件类型的值(可选)，用与限制签署时印章或者签名的选择范围

1.当ComponentType 是 SIGN_SEAL 或者 SIGN_PAGING_SEAL 时可传入企业印章Id（支持多个）或者以下印章类型

<ul><li> <b>OFFICIAL</b> :  企业公章</li>
<li> <b>CONTRACT</b> : 合同专用章</li>
<li> <b>FINANCE</b> : 财务专用章</li>
<li> <b>PERSONNEL</b> : 人事专用章</li>
<li> <b>OTHER</b> : 其他</li>
</ul>

**注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个),他方企业签署人只能限制类型.若同时指定了印章类型和印章Id,以印章Id为主,印章类型会被忽略`**


2.当ComponentType 是 SIGN_SIGNATURE 时可传入以下类型（支持多个）

<ul><li>HANDWRITE : 需要实时手写的手写签名</li>
<li>HANDWRITTEN_ESIGN : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE)</li>
<li>OCR_ESIGN : OCR印章（智慧手写签名）</li>
<li>ESIGN : 个人印章</li>
<li>SYSTEM_ESIGN : 系统印章</li></ul>

3.当ComponentType 是 SIGN_LEGAL_PERSON_SEAL 时无需传递此参数。
   */
  ComponentValue?: Array<string>
}

/**
 * CreateIntegrationDepartment返回参数结构体
 */
export interface CreateIntegrationDepartmentResponse {
  /**
   * 电子签部门ID。建议开发者保存此部门ID，方便后续查询或修改部门信息。
   */
  DeptId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTemplates请求参数结构体
 */
export interface DescribeFlowTemplatesRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 查询内容控制

<ul><li>**0**：模板列表及详情（默认）</li>
<li>**1**：仅模板列表</li></ul>
   */
  ContentType?: number
  /**
   * 搜索过滤的条件，本字段允许您通过指定模板 ID 或模板名称来进行查询。
<ul><li><strong>模板 ID</strong>：<strong>Key</strong>设置为 <code>template-id</code> ，<strong>Values</strong>为您想要查询的 <a href="https://qcloudimg.tencent-cloud.cn/raw/5c27b917b2bbe8c341566c78ca6f8782.png" target="_blank">模板 ID </a>列表。</li>  <li><strong>主企业模板 ID</strong>：<strong>Key</strong>设置为 <code>share-template-id</code> ，<strong>Values</strong>为您想要查询的 <a href="https://qcloudimg.tencent-cloud.cn/raw/5c27b917b2bbe8c341566c78ca6f8782.png" target="_blank">主企业模板 ID </a>列表。用来查询主企业分享模板到子企业场景下，子企业的模板信息，在此情境下，参数 <strong>Agent.ProxyOrganizationId</strong>（子企业的组织ID）为必填项。</li> <li><strong>模板名称</strong>：<strong>Key</strong>设置为 <code>template-name</code> ，<strong>Values</strong>为您想要查询的<a href="https://qcloudimg.tencent-cloud.cn/raw/03a924ee0a53d86575f8067d1c97876d.png" target="_blank">模板名称</a>列表。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * 查询结果分页返回，指定从第几页返回数据，和Limit参数配合使用。

注：`1.offset从0开始，即第一页为0。`
`2.默认从第一页返回。`
   */
  Offset?: number
  /**
   * 指定每页返回的数据条数，和Offset参数配合使用。

注：`1.默认值为20，单页做大值为200。`
   */
  Limit?: number
  /**
   * 通过指定[第三方应用的应用号（ApplicationId）](https://qcloudimg.tencent-cloud.cn/raw/60efa1e9049732e5246b20a268882b1a.png)，您可以查询<a href="https://qcloudimg.tencent-cloud.cn/raw/18319e5e77f7d47eab493d43d47827d3.png" target="_blank">【应用模板库管理】</a>中某个第三方应用下的模板。

<p><strong>注意事项：</strong></p>
<ul><li>当 <strong>ApplicationId</strong> 为空时（默认），系统将查询<a href="https://qcloudimg.tencent-cloud.cn/raw/376943a1d472393dd5388592f2e85ee5.png" target="_blank">平台企业的所有模板</a>（自建应用使用的模板）。</li><li>当 <strong>ApplicationId</strong> 不为空时，系统将从<a href="https://qcloudimg.tencent-cloud.cn/raw/18319e5e77f7d47eab493d43d47827d3.png" target="_blank">【应用模板库管理】</a>中查询该特定应用下的模板（分享给第三方应用子企业的模板）。</li></ul>
   */
  ApplicationId?: string
  /**
   * 默认为false，查询SaaS模板库列表；
为true，查询第三方应用集成平台企业模板库管理列表
   * @deprecated
   */
  IsChannel?: boolean
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 暂未开放
   * @deprecated
   */
  GenerateSource?: number
  /**
   * 是否获取模板预览链接。

<ul><li><strong>false</strong>：不获取（默认）</li><li><strong>true</strong>：需要获取</li></ul>
设置为true之后， 返回参数PreviewUrl，为模板的H5预览链接, 有效期5分钟。可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。
   */
  WithPreviewUrl?: boolean
}

/**
 * 企业授权书信息参数， 需要保证这些参数跟营业执照中的信息一致。
 */
export interface OrganizationCommonInfo {
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName: string
  /**
   * 组织机构企业统一社会信用代码。
请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UniformSocialCreditCode: string
  /**
   * 组织机构法人的姓名。
请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LegalName: string
  /**
   * 组织机构法人的证件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LegalIdCardType?: string
  /**
   * 组织机构法人的证件号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  LegalIdCardNumber?: string
  /**
   * 组织机构超管姓名。

注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminName?: string
  /**
   * 组织机构超管手机号。

注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminMobile?: string
  /**
   * 组织机构超管证件类型

注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminIdCardType?: string
  /**
   * 组织机构超管证件号码

注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminIdCardNumber?: string
  /**
   * 原超管姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldAdminName?: string
  /**
   * 原超管手机号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldAdminMobile?: string
  /**
   * 原超管证件类型
   */
  OldAdminIdCardType?: string
  /**
   * 原超管证件号码
   */
  OldAdminIdCardNumber?: string
}

/**
 * CreateIntegrationSubOrganizationActiveRecord返回参数结构体
 */
export interface CreateIntegrationSubOrganizationActiveRecordResponse {
  /**
   * 激活失败的成员企业ID集合
   */
  FailedSubOrganizationIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArchiveDynamicFlow返回参数结构体
 */
export interface ArchiveDynamicFlowResponse {
  /**
   * 合同流程ID
   */
  FlowId?: string
  /**
   * 动态签署人的参与人信息
   */
  Approvers?: Array<ArchiveDynamicApproverData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSealPolicies返回参数结构体
 */
export interface DeleteSealPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限树节点权限
 */
export interface Permission {
  /**
   * 权限名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 权限key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 权限类型 1前端，2后端
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 是否隐藏
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hide?: number
  /**
   * 数据权限标签 1:表示根节点，2:表示叶子结点
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataLabel?: number
  /**
   * 数据权限独有，1:关联其他模块鉴权，2:表示关联自己模块鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataType?: number
  /**
   * 数据权限独有，表示数据范围，1：全公司，2:部门及下级部门，3:自己
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRange?: number
  /**
   * 关联权限, 表示这个功能权限要受哪个数据权限管控
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataTo?: string
  /**
   * 父级权限key
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentKey?: string
  /**
   * 是否选中
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsChecked?: boolean
  /**
   * 子权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<Permission>
}

/**
 * CreateLegalSealQrCode请求参数结构体
 */
export interface CreateLegalSealQrCodeRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 机构信息，暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * DescribeOrganizationAuthStatus返回参数结构体
 */
export interface DescribeOrganizationAuthStatusResponse {
  /**
   * 企业是否已认证
   */
  IsVerified?: boolean
  /**
   * 企业认证状态 0-未认证 1-认证中 2-已认证
   */
  AuthStatus?: number
  /**
   * 企业认证信息
   */
  AuthRecords?: Array<AuthRecord>
  /**
   * 企业在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多"->"企业设置"->"企业中心"- 中查看企业电子签账号。
p.s. 只有当前企业认证成功的时候返回
   */
  OrganizationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserAutoSignSealUrl返回参数结构体
 */
export interface CreateUserAutoSignSealUrlResponse {
  /**
   * 腾讯电子签小程序的AppId，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  AppId?: string
  /**
   * 腾讯电子签小程序的原始Id，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  AppOriginalId?: string
  /**
   * 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。
   */
  Url?: string
  /**
   * 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用。
   */
  Path?: string
  /**
   * base64格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。
   */
  QrCode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 补充签署人信息
- RecipientId 必须指定
-  通过企业微信自定义账号ID补充签署人时，ApproverSource 和 CustomUserId 必填，ApproverSource取值：WEWORKAPP
- 通过二要素（姓名/手机号）补充签署人时，ApproverName 和 ApproverMobile 必填，ApproverSource设置为空
- 补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充
 */
export interface FillApproverInfo {
  /**
   * 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。
模板发起合同时，该参数为必填项。
文件发起合同是，该参数无需传值。
如果开发者后序用合同模板发起合同，建议保存此值，在用合同模板发起合同中需此值绑定对应的签署经办人 。
   */
  RecipientId: string
  /**
   * 签署人来源
WEWORKAPP: 企业微信
<br/>仅【企微或签】时指定WEWORKAPP
   */
  ApproverSource?: string
  /**
   * 企业微信UserId
<br/>当ApproverSource为WEWORKAPP的企微或签场景下，必须指企业自有应用获取企业微信的UserId
   */
  CustomUserId?: string
  /**
   * 补充企业签署人员工姓名
   */
  ApproverName?: string
  /**
   * 补充企业签署人员工手机号
   */
  ApproverMobile?: string
  /**
   * 补充企业动态签署人时，需要指定对应企业名称
   */
  OrganizationName?: string
  /**
   * 签署方经办人的证件类型，支持以下类型
<ul><li>ID_CARD 中国大陆居民身份证</li>
<li>HONGKONG_AND_MACAO 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN 中国港澳台居民居住证(格式同中国大陆居民身份证)</li>
<li>OTHER_CARD_TYPE 其他证件</li></ul>

注: `1.其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
`2.补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。`
   */
  ApproverIdCardType?: string
  /**
   * 签署方经办人的证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>

注：`补充个人签署方时，若该用户已在电子签完成实名则可通过指定姓名和证件类型、证件号码完成补充。`
   */
  ApproverIdCardNumber?: string
  /**
   * 合同流程ID
- 补充合同组子合同动态签署人时必传。
- 补充普通合同时，请阅读：<a href="https://qian.tencent.com/developers/companyApis/operateFlows/CreateFlowApprovers/" target="_blank">补充签署人接口</a>的接口使用说明
   */
  FlowId?: string
}

/**
 * 持有的电子印章信息
 */
export interface OccupiedSeal {
  /**
   * 电子印章编号
   */
  SealId?: string
  /**
   * 电子印章名称
   */
  SealName?: string
  /**
   * 电子印章授权时间戳，单位秒
   */
  CreateOn?: number
  /**
   * 电子印章授权人的UserId
   */
  Creator?: string
  /**
   * 电子印章策略Id
   */
  SealPolicyId?: string
  /**
   * 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止）
   */
  SealStatus?: string
  /**
   * 审核失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason?: string
  /**
   * 印章图片url，5分钟内有效
   */
  Url?: string
  /**
   * 印章类型,OFFICIAL-企业公章, CONTRACT-合同专用章,ORGANIZATIONSEAL-企业印章(本地上传印章类型),LEGAL_PERSON_SEAL-法人印章
   */
  SealType?: string
  /**
   * 用印申请是否为永久授权，true-是，false-否
   */
  IsAllTime?: boolean
  /**
   * 授权人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizedUsers?: Array<AuthorizedUser>
  /**
   * 印章扩展数据信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendScene?: ExtendScene
}

/**
 * 意愿核身点头确认模式结果详细数据
 */
export interface IntentionActionResultDetail {
  /**
   * 视频base64编码（其中包含全程提示文本和点头音频，mp4格式）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Video?: string
}

/**
 * CreateEmployeeQualificationSealQrCode请求参数结构体
 */
export interface CreateEmployeeQualificationSealQrCodeRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 提示信息，扫码后此信息会展示给扫描用户，用来提示用户授权操作的目的，会在授权界面下面的位置展示。

![image](https://qcloudimg.tencent-cloud.cn/raw/8436ffd78c20605e6b133ff4bc4d2ac7.png)
   */
  HintText?: string
}

/**
 * CreatePersonAuthCertificateImage返回参数结构体
 */
export interface CreatePersonAuthCertificateImageResponse {
  /**
   * 个人用户认证证书图片下载URL，`有效期为5分钟`，超过有效期后将无法再下载。
   */
  AuthCertUrl?: string
  /**
   * 个人用户认证证书的编号, 为20位数字组成的字符串,  由腾讯电子签下发此编号 。
该编号会合成到个人用户证书证明图片。

注: `个人用户认证证书的编号和证明图片绑定, 获取新的证明图片编号会变动`
   */
  ImageCertId?: string
  /**
   * 在数字证书申请过程中，系统会自动生成一个独一无二的序列号。请注意，当证书到期并自动续期时，该序列号将会发生变化。值得注意的是，此序列号不会被合成至个人用户证书的证明图片中。
   */
  SerialNumber?: string
  /**
   * CA证书颁发时间，格式为Unix标准时间戳（秒）   
该时间格式化后会合成到个人用户证书证明图片
   */
  ValidFrom?: number
  /**
   * CA证书有效截止时间，格式为Unix标准时间戳（秒）
该时间格式化后会合成到个人用户证书证明图片
   */
  ValidTo?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除员工失败数据
 */
export interface FailedDeleteStaffData {
  /**
   * 员工在电子签的userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 员工在第三方平台的openId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenId?: string
  /**
   * 失败原因
   */
  Reason?: string
}

/**
 * 合同文件验签单个结果结构体
 */
export interface PdfVerifyResult {
  /**
   * 验签结果。0-签名域未签名；1-验签成功； 3-验签失败；4-未找到签名域：文件内没有签名域；5-签名值格式不正确。
   */
  VerifyResult?: number
  /**
   * 签署平台
如果文件是在腾讯电子签平台签署，则为**腾讯电子签**，
如果文件不在腾讯电子签平台签署，则为**其他平台**。
   */
  SignPlatform?: string
  /**
   * 申请证书的主体的名字

如果是在腾讯电子签平台签署, 则对应的主体的名字个数如下
**企业**:  ESS@企业名称@编码
**个人**: ESS@个人姓名@证件号@808854

如果在其他平台签署的, 主体的名字参考其他平台的说明
   */
  SignerName?: string
  /**
   * 签署时间的Unix时间戳，单位毫秒
   */
  SignTime?: number
  /**
   * 证书签名算法,  如SHA1withRSA等算法
   */
  SignAlgorithm?: string
  /**
   * 在数字证书申请过程中，系统会自动生成一个独一无二的序列号。
   */
  CertSn?: string
  /**
   * 证书起始时间的Unix时间戳，单位毫秒
   */
  CertNotBefore?: number
  /**
   * 证书过期时间的时间戳，单位毫秒
   */
  CertNotAfter?: number
  /**
   * 签名域横坐标，单位px
   */
  ComponentPosX?: number
  /**
   * 签名域纵坐标，单位px
   */
  ComponentPosY?: number
  /**
   * 签名域宽度，单位px
   */
  ComponentWidth?: number
  /**
   * 签名域高度，单位px
   */
  ComponentHeight?: number
  /**
   * 签名域所在页码，1～N
   */
  ComponentPage?: number
}

/**
 * CreateBatchCancelFlowUrl返回参数结构体
 */
export interface CreateBatchCancelFlowUrlResponse {
  /**
   * 批量撤回签署流程链接
   */
  BatchCancelFlowUrl?: string
  /**
   * 签署流程撤回失败信息
数组里边的错误原因与传进来的FlowIds一一对应,如果是空字符串则标识没有出错
   */
  FailMessages?: Array<string>
  /**
   * 签署连接过期时间字符串：年月日-时分秒

   */
  UrlExpireOn?: string
  /**
   * 批量撤销任务编号，为32位字符串，可用于[查询批量撤销签署流程任务结果](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl) 或关联[批量撤销任务结果回调](https://qian.tencent.com/developers/company/callback_types_contracts_sign#%E4%B9%9D-%E6%89%B9%E9%87%8F%E6%92%A4%E9%94%80%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83)
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户的三要素：姓名，证件号，证件类型
 */
export interface UserThreeFactor {
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  Name: string
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>
   */
  IdCardType: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
}

/**
 * 企业批量注册链接信息
 */
export interface OrganizationAuthUrl {
  /**
   * 企业批量注册链接，根据Endpoint的不同设置，返回不同的链接地址。失效时间：7天
跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表
<table> <thead> <tr> <th>Endpoint</th> <th>示例</th> <th>链接有效期限</th> </tr> </thead>  <tbody>
 <tr> <td>PC</td> <td>https://qian.tencent.com/console/batch-register?token=yDSx0UUgtjuaf4UEfd2MjCnfI1iuXFE6&orgName=批量认证线上测试企业9</td> <td>7天</td> </tr> 
<tr> <td>PC_SHORT_URL</td> <td>https://test.essurl.cn/8gDKUBAWK8</td> <td>7天</td> </tr> 
<tr> <td>APP</td> <td>/pages/guide/index?to=REGISTER_ENTERPRISE_FOR_BATCH&urlAuthToken=yDSx0UUgtjuaf4UEfd2MjCnfI1iuXFE6&orgName=批量认证线上测试企业9</td> <td>7天</td> </tr> </tbody> </table>
注： 
`1.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义`

   */
  AuthUrl?: string
  /**
   * 企业批量注册的错误信息，例如：企业三要素不通过
   */
  ErrorMessage?: string
  /**
   * 企业批量注册的唯一 Id， 此 Id 可以用在[创建企业批量认证链接-单链接](https://qian.tencent.com/developers/companyApis/organizations/CreateBatchOrganizationAuthorizationUrl)。
   */
  SubTaskId?: string
}

/**
 * 企业认证信息
 */
export interface AuthRecord {
  /**
   * 经办人姓名。
   */
  OperatorName?: string
  /**
   * 经办人手机号。
   */
  OperatorMobile?: string
  /**
   * 认证授权方式：
<ul><li> **0**：未选择授权方式（默认值）</li>
<li> **1**：上传授权书</li>
<li> **2**：法人授权</li>
<li> **3**：法人认证</li></ul>
   */
  AuthType?: number
  /**
   * 企业认证授权书审核状态：
<ul><li> **0**：未提交授权书（默认值）</li>
<li> **1**：审核通过</li>
<li> **2**：审核驳回</li>
<li> **3**：审核中</li>
<li> **4**：AI识别中</li>
<li> **5**：客户确认AI信息</li></ul>
   */
  AuditStatus?: number
}

/**
 * CreateSealPolicy返回参数结构体
 */
export interface CreateSealPolicyResponse {
  /**
   * 最终授权成功的用户ID，在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
   */
  UserIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签署链接信息。
 */
export interface FlowApproverUrlInfo {
  /**
   * 签署短链接。
注意:
1. 该链接有效期为<b>30分钟</b>，同时需要注意保密，不要外泄给无关用户。
2. 该链接不支持小程序嵌入，仅支持<b>移动端浏览器</b>打开。
3. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  SignUrl?: string
  /**
   * 签署人类型。
- **1**: 个人
   */
  ApproverType?: number
  /**
   * 签署人姓名。
   */
  ApproverName?: string
  /**
   * 签署人手机号。
   */
  ApproverMobile?: string
  /**
   * 签署长链接。
注意:
1. 该链接有效期为**30分钟**，同时需要注意保密，不要外泄给无关用户。
2. 该链接不支持小程序嵌入，仅支持**移动端浏览器**打开。
3. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  LongUrl?: string
}

/**
 * DisableUserAutoSign请求参数结构体
 */
export interface DisableUserAutoSignRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 需要关闭自动签的个人的信息，如姓名，证件信息等。
   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeIntegrationEmployees返回参数结构体
 */
export interface DescribeIntegrationEmployeesResponse {
  /**
   * 员工信息列表。
   */
  Employees?: Array<Staff>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，单页最大支持 20。
   */
  Limit?: number
  /**
   * 符合条件的员工数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除员工的成功数据
 */
export interface SuccessDeleteStaffData {
  /**
   * 员工名
   */
  DisplayName?: string
  /**
   * 员工手机号
   */
  Mobile?: string
  /**
   * 员工在电子签平台的id
   */
  UserId?: string
}

/**
 * DeleteSealPolicies请求参数结构体
 */
export interface DeleteSealPoliciesRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填
   */
  PolicyIds?: Array<string>
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
注：印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填。
   */
  SealId?: string
  /**
   * 待授权的员工ID，员工在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
   */
  UserIds?: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateConvertTaskApi返回参数结构体
 */
export interface CreateConvertTaskApiResponse {
  /**
   * 接口返回的文件转换任务Id，可以调用接口<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/GetTaskResultApi" target="_blank">查询转换任务状态</a>获取转换任务的状态和转换后的文件资源Id。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowSignReview请求参数结构体
 */
export interface CreateFlowSignReviewRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
<ul><li>建议开发者妥善保存此流程ID，以便于顺利进行后续操作。</li>
<li>可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。</li></ul>
   */
  FlowId: string
  /**
   * 企业内部审核结果
<ul><li>PASS: 审核通过</li>
<li>REJECT: 审核拒绝</li>
<li>SIGN_REJECT:拒签(流程结束)</li></ul>
   */
  ReviewType: string
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
  /**
   * 审核节点的签署人标志，用于指定当前审核的签署方
<ul><li>**如果签署审核节点是个人， 此参数必填**。</li></ul>
   */
  RecipientId?: string
  /**
   * 操作类型：（接口通过该字段区分不同的操作类型）

<ul><li>SignReview: 签署审核（默认）</li>
<li>CreateReview: 创建审核</li></ul>

如果审核节点是个人，则操作类型只能为SignReview。
   */
  OperateType?: string
  /**
   * 审核结果原因
<ul><li>字符串长度不超过200</li>
<li>当ReviewType 是拒绝（REJECT） 时此字段必填。</li>
<li>当ReviewType 是拒绝（SIGN_REJECT） 时此字段必填。</li></ul>


   */
  ReviewMessage?: string
}

/**
 * CreateOrganizationAuthUrl返回参数结构体
 */
export interface CreateOrganizationAuthUrlResponse {
  /**
   * 生成的认证链接。

注： `链接有效期统一30天`
   */
  AuthUrl?: string
  /**
   * 链接过期时间，格式为Unix标准时间戳（秒）
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationAuthStatus请求参数结构体
 */
export interface DescribeOrganizationAuthStatusRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 组织机构名称。 请确认该名称与企业营业执照中注册的名称一致。 如果名称中包含英文括号()，请使用中文括号（）代替。
   */
  OrganizationName?: string
  /**
   * 企业统一社会信用代码
注意：OrganizationName和UniformSocialCreditCode不能同时为空
   */
  UniformSocialCreditCode?: string
  /**
   * 法人姓名
   */
  LegalName?: string
}

/**
 * CreateSchemeUrl返回参数结构体
 */
export interface CreateSchemeUrlResponse {
  /**
   * 腾讯电子签小程序的签署链接。

<ul><li>如果EndPoint是**APP**，得到的链接类似于`pages/guide?from=default&where=mini&id=yDwJSUUirqauh***7jNSxwdirTSGuH&to=CONTRACT_DETAIL&name=&phone=&shortKey=yDw***k1xFc5`, 用法可以参加接口描述中的"跳转到小程序的实现"</li>
<li>如果EndPoint是**HTTP**，得到的链接类似于 `https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?where=mini&from=SFY&id=yDwfEUUw**4rV6Avz&to=MVP_CONTRACT_COVER&name=%E9%83%**5%86%9B`，点击后会跳转到腾讯电子签小程序进行签署</li>
<li>如果EndPoint是**HTTP_SHORT_URL**，得到的链接类似于 `https://essurl.cn/2n**42Nd`，点击后会跳转到腾讯电子签小程序进行签署</li></ul>


注： <font color="red">生成的链路后面不能再增加参数</font>
   */
  SchemeUrl?: string
  /**
   * 二维码，在生成动态签署人跳转封面页链接时返回
   */
  SchemeQrcodeUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
  /**
   * 本合同的发起人  <a href="https://qcloudimg.tencent-cloud.cn/raw/f850cfbe163a1cb38439a9f551c2505c.png" target="_blank">点击查看合同发起人展示的位置</a>

注： 支持填入集团子公司经办人 userId 代发合同。

   */
  Operator: UserInfo
  /**
   * 自定义的合同流程的名称，长度不能超过200个字符，只能由中文汉字、中文标点、英文字母、阿拉伯数字、空格、小括号、中括号、中划线、下划线以及（,）、（;）、（.）、(&)、（+）组成。

该名称还将用于合同签署完成后文件下载的默认文件名称。
   */
  FlowName: string
  /**
   * 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。

如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。
   */
  Approvers: Array<ApproverInfo>
  /**
   * 本合同流程需包含的PDF文件资源编号列表，通过[UploadFiles](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口获取PDF文件资源编号。

注:  `目前，此接口仅支持单个文件发起。`
   */
  FileIds: Array<string>
  /**
   * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
   */
  FlowDescription?: string
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
如果用户已经在控制台创建了自定义合同类型，可以将这里的类型名称传入。 如果没有创建，我们会自动给发起方公司创建此自定义合同类型。
![image](https://qcloudimg.tencent-cloud.cn/raw/36582cea03ae6a2559894844942b5d5c.png)
   */
  FlowType?: string
  /**
   * 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
<ul><li> 单行文本控件      </li>
<li> 多行文本控件      </li>
<li> 勾选框控件        </li>
<li> 数字控件          </li>
<li> 图片控件          </li>
<li> 水印控件          </li>
<li> 动态表格等填写控件</li></ul>
   */
  Components?: Array<Component>
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。

<b>注</b>
1. 抄送人名单中可以包括自然人以及本企业的员工。
2. 请确保抄送人列表中的成员不与任何签署人重复。

   */
  CcInfos?: Array<CcInfo>
  /**
   * 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容：
<ul><li> **0**：合同发起时通知（默认值）</li>
<li> **1**：签署完成后通知</li></ul>
   */
  CcNotifyType?: number
  /**
   * 是否为预览模式，取值如下：
<ul><li> **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。</li>
<li> **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。</li></ul>
   */
  NeedPreview?: boolean
  /**
   * 预览模式下产生的预览链接类型 
<ul><li> **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 </li>
<li> **1** :H5链接 ,点开后在浏览器中展示合同的样子</li></ul>
注: `此参数在NeedPreview 为true时有效`

   */
  PreviewType?: number
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline?: number
  /**
   * 合同流程的签署顺序类型：
<ul><li> **false**：(默认)有序签署, 本合同多个参与人需要依次签署 </li>
<li> **true**：无序签署, 本合同多个参与人没有先后签署限制</li></ul>
   */
  Unordered?: boolean
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的[回调通知](https://qian.tencent.com/developers/company/callback_types_v2)模块。
   */
  UserData?: string
  /**
   * 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。

到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。
   */
  RemindedOn?: number
  /**
   * 指定个人签署方查看合同的校验方式
<ul><li>   **VerifyCheck**  :（默认）人脸识别,人脸识别后才能合同内容 </li>
<li>   **MobileCheck**  :  手机号验证, 用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）</li></ul>
   */
  ApproverVerifyType?: string
  /**
   * 签署方签署控件（印章/签名等）的生成方式：
<ul><li> **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。</li>
<li> **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。</li></ul>
   */
  SignBeanTag?: number
  /**
   * 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：
<ul><li>{合同名称}   </li>
<li>{发起方企业} </li>
<li>{发起方姓名} </li>
<li>{签署方N企业}</li>
<li>{签署方N姓名}</li></ul>
其中，N表示签署方的编号，从1开始，不能超过签署人的数量。

例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子

合同名称：租房合同 
发起方：腾讯公司(张三) 
签署方：李四


![image](https://qcloudimg.tencent-cloud.cn/raw/628f0928cac15d2e3bfa6088f53f5998.png)


   */
  CustomShowMap?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：
<ul><li> **E_PRESCRIPTION_AUTO_SIGN**：电子处方单（医疗自动签）  </li><li> **OTHER** :  通用场景</li></ul>
注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
   */
  AutoSignScene?: string
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下：  <ul><li> <b>0</b> :合同（默认值）</li> <li> <b>1</b> :文件</li> <li> <b>2</b> :协议</li></ul>效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png)
   */
  FlowDisplayType?: number
  /**
   * 是否开启动态签署合同：
<ul><li> **true**：开启动态签署合同，可在签署过程中追加签署人（必须满足：1，发起方企业开启了模块化计费能力；2，发起方企业在企业应用管理中开启了动态签署人2.0能力）    。</li>
<li> **false**：不开启动态签署合同。</li></ul>
   */
  OpenDynamicSignFlow?: boolean
}

/**
 * 此结构体(FlowGroupInfo)描述的是合同组(流程组)的单个合同(流程)信息
 */
export interface FlowGroupInfo {
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
该名称还将用于合同签署完成后的下载文件名。
   */
  FlowName: string
  /**
   * 签署流程参与者信息，最大限制50方
注意 approver中的顺序需要和模板中的顺序保持一致， 否则会导致模板中配置的信息无效。
   */
  Approvers: Array<ApproverInfo>
  /**
   * 文件资源ID，通过多文件上传[UploadFiles](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)接口获得，为32位字符串。
建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。
   */
  FileIds?: Array<string>
  /**
   * 合同模板ID，为32位字符串。
建议开发者保存此模板ID，后续用此模板发起合同流程需要此参数。
可登录腾讯电子签控制台，在 "模板"->"模板中心"->"列表展示设置"选中模板 ID 中查看某个模板的TemplateId(在页面中展示为模板ID)。
   */
  TemplateId?: string
  /**
   * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
   */
  FlowType?: string
  /**
   * 签署流程描述,最大长度1000个字符
   */
  FlowDescription?: string
  /**
   * 签署流程的签署截止时间。

值为unix时间戳,精确到秒,不传默认为当前时间一年后
示例值：1604912664
   */
  Deadline?: number
  /**
   * 合同（流程）的回调地址
   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。
在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。
回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
  /**
   * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签），请和模板中的配置保持一致
示例值：true
   */
  Unordered?: boolean
  /**
   * 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
<ul><li>单行文本控件</li>
<li>多行文本控件</li>
<li>勾选框控件</li>
<li>数字控件</li>
<li>图片控件</li>
<li>动态表格等填写控件</li></ul>
   */
  Components?: Array<Component>
  /**
   * 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。
若设置为true，审核结果需通过接口 [CreateFlowSignReview](https://qian.tencent.com/developers/companyApis/operateFlows/CreateFlowSignReview) 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
示例值：true
   */
  NeedSignReview?: boolean
  /**
   * 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN

   */
  AutoSignScene?: string
  /**
   * 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下：  <ul><li> <b>0</b> :合同（默认值）</li> <li> <b>1</b> :文件</li> <li> <b>2</b> :协议</li></ul>效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png)
   */
  FlowDisplayType?: number
}

/**
 * CreateFlowSignUrl返回参数结构体
 */
export interface CreateFlowSignUrlResponse {
  /**
   * 签署人签署链接信息
   */
  FlowApproverUrlInfos?: Array<FlowApproverUrlInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发起流程快速注册相关信息
 */
export interface RegisterInfo {
  /**
   * 法人姓名
注意：此字段可能返回 null，表示取不到有效值。
   */
  LegalName: string
  /**
   * 社会统一信用代码
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Uscc?: string
  /**
   * 社会统一信用代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnifiedSocialCreditCode?: string
}

/**
 * DescribeFileUrls请求参数结构体
 */
export interface DescribeFileUrlsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 文件对应的业务类型，目前支持：<ul><li>**FLOW ** : <font color="red">如需下载合同文件请选择此项</font></li><li>**TEMPLATE ** : 如需下载模板文件请选择此项</li><li>**DOCUMENT  **: 如需下载文档文件请选择此项</li><li>**SEAL  **: 如需下载印章图片请选择此项</li><li>**DIGITFILE**: 如需下载加签文件请选择此项</li></ul>
   */
  BusinessType: string
  /**
   * 业务编号的数组，取值如下：<ul><li>流程编号</li><li>模板编号</li><li>文档编号</li><li>印章编号</li><li>加签文件编号</li><li>如需下载合同文件请传入FlowId，最大支持20个资源</li></ul>
   */
  BusinessIds: Array<string>
  /**
   * 下载后的文件命名，只有FileType为zip的时候生效
   */
  FileName?: string
  /**
   * 要下载的文件类型，取值如下：
<ul>
<li>JPG</li>
<li>PDF</li>
<li>ZIP</li>
</ul>
   */
  FileType?: string
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0，最大 1000。
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，如果不传默认为 20，单页最大支持 100。
   */
  Limit?: number
  /**
   * 下载url过期时间，单位秒。0: 按默认值5分钟，允许范围：1s~24x60x60s(1天)
   */
  UrlTtl?: number
  /**
   * 暂不开放
   * @deprecated
   */
  CcToken?: string
  /**
   * 暂不开放
   * @deprecated
   */
  Scene?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 电子文档的控件填充信息。按照控件类型进行相应的填充。

当控件的 ComponentType=‘SIGN_SEAL'时，FormField.ComponentValue填入印章id。

* 可用于指定自动签模板未设置自动签印章时，可由接口传入自动签印章
* 若指定的控件上已设置ComponentValue，那以已经设置的ComponentValue为准

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "sealId（印章id）"
}
```

当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "文本内容"
}
```

当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "多行文本内容"
}
```

当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "true"
}
```

当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue支持填入附件图片或者文件的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；
支持的文件类型包括doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt、pdf

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"
}
```

当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "选择的内容"
}
```

当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "2023年01月01日"
}
```

当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；

```
FormField输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "广东省深圳市福田区"
}
```

【数据表格传参说明】
当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
输入示例1：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}
```

输入示例2（表格表头宽度比例配置）：

```
{
    "headers":[
        {
            "content":"head1",
            "widthPercent": 30
        },
        {
            "content":"head2",
            "widthPercent": 30
        },
        {
            "content":"head3",
            "widthPercent": 40
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}
```

输入示例3（表格设置字体加粗颜色）：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123",
                "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "CENTER"}
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456",
                "style": {"color": "#b50000", "fontSize": 12,"bold": true,"align": "LEFT"}
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789",
                "style": {"color": "#b500bf", "fontSize": 12,"bold": false,"align": "RIGHT"}
            }
        ]
    }
}

```

表格参数说明

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| headers             | Array   | 表头：不超过10列，不支持单元格合并，字数不超过100 |
| rowCount            | Integer | 表格内容最大行数                                  |
| cells.N.rowStart    | Integer | 单元格坐标：行起始index                           |
| cells.N.rowEnd      | Integer | 单元格坐标：行结束index                           |
| cells.N.columnStart | Integer | 单元格坐标：列起始index                           |
| cells.N.columnEnd   | Integer | 单元格坐标：列结束index                           |
| cells.N.content     | String  | 单元格内容，字数不超过100                         |
| cells.N.style         | String  | 单元格字体风格配置 ，风格配置的json字符串  如： {"font":"黑体","fontSize":12,"color":"#FFFFFF","bold":true,"align":"CENTER"}      |

表格参数headers说明
widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35

content String 表头单元格内容，字数不超过100


style String 为字体风格设置 风格支持： font : 目前支持 黑体、宋体; fontSize： 6-72; color：000000-FFFFFF  字符串形如：  "#FFFFFF" 或者 "0xFFFFFF"; bold ： 是否加粗， true ： 加粗 false： 不加粗; align: 对其方式， 支持 LEFT / RIGHT / CENTER
 */
export interface FormField {
  /**
   * 控件填充vaule，ComponentType和传入值类型对应关系：
<ul><li> <b>TEXT</b> : 文本内容</li>
<li> <b>MULTI_LINE_TEXT</b> : 文本内容， 可以用  \n 来控制换行位置</li>
<li> <b>CHECK_BOX</b> : true/false</li>
<li> <b>FILL_IMAGE、ATTACHMENT</b> : 附件的FileId，需要通过UploadFiles接口上传获取</li>
<li> <b>SELECTOR</b> : 选项值</li>
<li> <b>DYNAMIC_TABLE</b>  - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/company/dynamic_table)</li>
<li> <b>DATE</b> : 格式化：xxxx年xx月xx日（例如：2024年05月28日）</li>
</ul>


<b>控件值约束说明</b>：
<table> <thead> <tr> <th>特殊控件</th> <th>填写约束</th> </tr> </thead> <tbody> <tr> <td>企业全称控件</td> <td>企业名称中文字符中文括号</td> </tr> <tr> <td>统一社会信用代码控件</td> <td>企业注册的统一社会信用代码</td> </tr> <tr> <td>法人名称控件</td> <td>最大50个字符，2到25个汉字或者1到50个字母</td> </tr> <tr> <td>签署意见控件</td> <td>签署意见最大长度为50字符</td> </tr> <tr> <td>签署人手机号控件</td> <td>国内手机号 13,14,15,16,17,18,19号段长度11位</td> </tr> <tr> <td>签署人身份证控件</td> <td>合法的身份证号码检查</td> </tr> <tr> <td>控件名称</td> <td>控件名称最大长度为20字符，不支持表情</td> </tr> <tr> <td>单行文本控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>多行文本控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>勾选框控件</td> <td>选择填字符串true，不选填字符串false</td> </tr> <tr> <td>选择器控件</td> <td>同单行文本控件约束，填写选择值中的字符串</td> </tr> <tr> <td>数字控件</td> <td>请输入有效的数字(可带小数点)</td> </tr> <tr> <td>日期控件</td> <td>格式：yyyy年mm月dd日</td> </tr> <tr> <td>附件控件</td> <td>JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID</td> </tr> <tr> <td>图片控件</td> <td>JPG或PNG图片，填写上传的图片资源ID</td> </tr> <tr> <td>邮箱控件</td> <td>有效的邮箱地址, w3c标准</td> </tr> <tr> <td>地址控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>省市区控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>性别控件</td> <td>选择值中的字符串</td> </tr> <tr> <td>学历控件</td> <td>选择值中的字符串</td> </tr> </tbody> </table>

   */
  ComponentValue: string
  /**
   * 控件id，和ComponentName选择一项传入即可

<a href="https://dyn.ess.tencent.cn/guide/apivideo/component_name.mp4" target="_blank">点击查看在模板中找到控件ID的方式</a>
   */
  ComponentId?: string
  /**
   * 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可

<a href="https://dyn.ess.tencent.cn/guide/apivideo/component_name.mp4" target="_blank">点击查看在模板中找到控件名字的方式</a>
   */
  ComponentName?: string
}

/**
 * CreatePartnerAutoSignAuthUrl返回参数结构体
 */
export interface CreatePartnerAutoSignAuthUrlResponse {
  /**
   * 授权链接，以短链形式返回，短链的有效期参考回参中的 ExpiredTime。
   */
  Url?: string
  /**
   * 从客户小程序或者客户APP跳转至腾讯电子签小程序进行批量签署的跳转路径
   */
  MiniAppPath?: string
  /**
   * 链接过期时间以 Unix 时间戳格式表示，从生成链接时间起，往后7天有效期。过期后短链将失效，无法打开。
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArchiveDynamicFlow请求参数结构体
 */
export interface ArchiveDynamicFlowRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID, 为32位字符串。

可登录腾讯电子签控制台，[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateUserAutoSignSealUrl请求参数结构体
 */
export interface CreateUserAutoSignSealUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 自动签开通个人用户信息, 包括名字,身份证等。
   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。`
   */
  ExpiredTime?: number
}

/**
 * ModifyFlowDeadline请求参数结构体
 */
export interface ModifyFlowDeadlineRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
<ul><li>建议开发者妥善保存此流程ID，以便于顺利进行后续操作。</li>
<li>可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。</li></ul>
   */
  FlowId: string
  /**
   * 签署流程或签署人新的签署截止时间，格式为Unix标准时间戳（秒）
   */
  Deadline: number
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
  /**
   * 签署方角色编号，为32位字符串
<ul><li>若指定了此参数，则只调整签署流程中此签署人的签署截止时间，否则调整合同整体的签署截止时间（合同截止时间+发起时未设置签署人截止时间的参与人的签署截止时间）</li>
<li>通过[用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles)发起合同，或通过[模板发起合同-创建电子文档](https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument)时，返回参数[Approvers](https://qian.tencent.com/developers/companyApis/dataTypes/#approveritem)会返回此信息，建议开发者妥善保存</li>
<li>也可通过[查询合同流程的详情信息](https://qian.tencent.com/developers/companyApis/queryFlows/DescribeFlowInfo)接口查询签署人的RecipientId编号</li></ul>
   */
  RecipientId?: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  /**
   * 用户在平台的编号
   */
  UserId?: string
  /**
   * 用户的来源渠道，一般不用传，特定场景根据接口说明传值
   * @deprecated
   */
  Channel?: string
  /**
   * 用户在渠道的编号，一般不用传，特定场景根据接口说明传值
   * @deprecated
   */
  OpenId?: string
  /**
   * 用户真实IP，内部字段，暂未开放
   * @deprecated
   */
  ClientIp?: string
  /**
   * 用户代理IP，内部字段，暂未开放
   * @deprecated
   */
  ProxyIp?: string
}

/**
 * CreateFlowApprovers请求参数结构体
 */
export interface CreateFlowApproversRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 补充签署环节签署候选人信息。

注：` 如果发起方指定的补充签署人是企业微信签署人（ApproverSource=WEWORKAPP），则需要提供企业微信UserId进行补充； 如果不指定，则使用姓名和手机号进行补充。`
   */
  Approvers: Array<FillApproverInfo>
  /**
   * 合同流程ID，为32位字符串。
- 建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
- 可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
- <font color="red">不建议继续使用</font>，请使用<a href="https://qian.tencent.com/developers/companyApis/dataTypes/#fillapproverinfo/" target="_blank">补充签署人结构体</a>中的FlowId来指定需要补充的合同id
   */
  FlowId?: string
  /**
   * 签署人信息补充方式

<ul><li>**0**: <font color="red">或签合同</font>添加签署候选人，或签支持一个节点传多个签署人，不传值默认或签。
注: `或签只支持企业签署方`</li>
<li>**1**: <font color="red">动态签署人合同</font>的添加签署候选人，支持企业或个人签署方。</li></ul>
   */
  FillApproverType?: number
  /**
   * 在可定制的企业微信通知中，发起人可以根据具体需求进行自定义设置。
   */
  Initiator?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 合同流程组的组ID, 在合同流程组场景下，生成合同流程组的签署链接时需要赋值
   */
  FlowGroupId?: string
}

/**
 * ModifyFlowDeadline返回参数结构体
 */
export interface ModifyFlowDeadlineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扩展服务开通和授权的详细信息
 */
export interface ExtendAuthInfo {
  /**
   * 扩展服务的类型，可能是以下值：
<ul><li>OPEN_SERVER_SIGN：企业自动签署</li>
<li>BATCH_SIGN：批量签署</li>
<li>OVERSEA_SIGN：企业与港澳台居民签署合同</li>
<li>AGE_LIMIT_EXPANSION：拓宽签署方年龄限制</li>
<li>MOBILE_CHECK_APPROVER：个人签署方仅校验手机号</li>
<li>HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名</li>
<li>ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型</li>
<li>ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方</li>
<li>HIDE_ONE_KEY_SIGN：个人签署方手动签字</li>
<li>PAGING_SEAL：骑缝章</li>
<li>ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导</li></ul>
   */
  Type?: string
  /**
   * 扩展服务的名称
   */
  Name?: string
  /**
   * 扩展服务的开通状态：
<ul>
<li>ENABLE : 已开通</li>
<li>DISABLE : 未开通</li>
</ul>
   */
  Status?: string
  /**
   * 操作扩展服务的操作人UserId，员工在腾讯电子签平台的唯一身份标识，为32位字符串。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUserId?: string
  /**
   * 扩展服务的操作时间，格式为Unix标准时间戳（秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateOn?: number
  /**
   * 该扩展服务若可以授权，此参数对应授权人员的列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAuthUserList?: Array<HasAuthUser>
}

/**
 * 创建流程的签署方信息
 */
export interface FlowCreateApprover {
  /**
   * 在指定签署方时，可以选择企业B端或个人C端等不同的参与者类型，可选类型如下：

<ul><li> <b>0</b> :企业B端。</li>
<li> <b>1</b> :个人C端。</li>
<li> <b>3</b> :企业B端静默（自动）签署，无需签署人参与，自动签署可以参考<a href="https://qian.tencent.com/developers/company/autosign_guide" target="_blank" rel="noopener noreferrer">自动签署使用说明</a>文档。</li>
<li> <b>7</b> :个人C端自动签署，适用于个人自动签场景。注: <b>个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。</b> </li></ul>
   */
  ApproverType: number
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。

注: `当approverType=0(企业签署方) 或 approverType=3(企业静默签署)时，必须指定`


   */
  OrganizationName?: string
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。

在未指定签署人电子签UserId情况下，为必填参数
   */
  ApproverName?: string
  /**
   * 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。 此手机号用于通知和用户的实名认证等环境，请确认手机号所有方为此合同签署方。

注：`在未指定签署人电子签UserId情况下，为必填参数`

   */
  ApproverMobile?: string
  /**
   * 证件类型，支持以下类型
<ul><li><b>ID_CARD</b>: 居民身份证 (默认值)</li>
<li><b>HONGKONG_AND_MACAO</b> : 港澳居民来往内地通行证</li>
<li><b>HONGKONG_MACAO_AND_TAIWAN</b> : 港澳台居民居住证(格式同居民身份证)</li></ul>
   */
  ApproverIdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  ApproverIdCardNumber?: string
  /**
   * 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。

<b>模板发起合同时，该参数为必填项，可以通过[查询模板信息接口](https://qian.tencent.com/developers/companyApis/templatesAndFiles/DescribeFlowTemplates)获得。</b>
<b>文件发起合同时，该参数无需传值。</b>

如果开发者后续用合同模板发起合同，建议保存此值，在用合同模板发起合同中需此值绑定对应的签署经办人 。
   */
  RecipientId?: string
  /**
   * 签署意愿确认渠道，默认为WEIXINAPP:人脸识别

注: <font color="red">将要废弃</font >, `用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置`
   */
  VerifyChannel?: Array<string>
  /**
   * 通知签署方经办人的方式,  有以下途径:
<ul><li>  **sms**  :  (默认)短信</li>
<li>   **none**   : 不通知</li></ul>

注: `既是发起方又是签署方时，不给此签署方发送短信`
   */
  NotifyType?: string
  /**
   * 合同强制需要阅读全文，无需传此参数
   */
  IsFullText?: boolean
  /**
   * 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。

若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：
<ul>
<li>合同页数少于等于2页，阅读时间为3秒；</li>
<li>合同页数为3到5页，阅读时间为5秒；</li>
<li>合同页数大于等于6页，阅读时间为10秒。</li>
</ul>
   */
  PreReadTime?: number
  /**
   * 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得

注： 
如果传进来的<font color="red">UserId已经实名， 则忽略ApproverName，ApproverIdCardType，ApproverIdCardNumber，ApproverMobile这四个入参</font>（会用此UserId实名的身份证和登录的手机号覆盖）
   */
  UserId?: string
  /**
   * <font color="red">字段已经废弃</font>，当前只支持true，默认为true
   */
  Required?: boolean
  /**
   * 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。
   */
  ApproverSource?: string
  /**
   * 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。
所有参与或签的人员均需具备该标识。
注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。
如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。
   */
  CustomApproverTag?: string
  /**
   * 已经废弃, 快速注册相关信息
   */
  RegisterInfo?: RegisterInfo
  /**
   * 签署人个性化能力值，如是否可以转发他人处理、是否可以拒签、是否为动态补充签署人等功能开关。
   */
  ApproverOption?: ApproverOption
  /**
   * 签署完前端跳转的url，暂未使用
   * @deprecated
   */
  JumpUrl?: string
  /**
   * 签署人的签署ID

<ul>
<li>在CreateFlow、CreatePrepareFlow等发起流程时不需要传入此参数，电子签后台系统会自动生成。</li>
<li>在CreateFlowSignUrl、CreateBatchQuickSignUrl等生成签署链接时，可以通过查询详情接口获取签署人的SignId，然后可以将此值传入，为该签署人创建签署链接。这样可以避免重复传输姓名、手机号、证件号等其他信息。</li>
</ul>
   */
  SignId?: string
  /**
   * 此签署人(员工或者个人)签署时，是否需要发起方企业审批，取值如下：
<ul><li>**false**：（默认）不需要审批，直接签署。</li>
<li>**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li>如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li>如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>

注：`此功能可用于与发起方企业内部的审批流程进行关联，支持手动、静默签署合同`

![image](https://qcloudimg.tencent-cloud.cn/raw/b14d5188ed0229d1401e74a9a49cab6d.png)
   */
  ApproverNeedSignReview?: boolean
  /**
   * 签署人签署控件， 此参数仅针对文件发起（CreateFlowByFiles）生效

合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体
<ul><li> 个人签名/印章</li>
<li> 企业印章</li>
<li> 骑缝章等签署控件</li></ul>

`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`
   */
  SignComponents?: Array<Component>
  /**
   * 签署人填写控件 此参数仅针对文件发起（CreateFlowByFiles）生效

合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
<ul><li>单行文本控件</li>
<li>多行文本控件</li>
<li>勾选框控件</li>
<li>数字控件</li>
<li>图片控件</li>
<li>动态表格等填写控件</li></ul>

`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`
   */
  Components?: Array<Component>
  /**
   * 当签署方控件类型为 <b>SIGN_SIGNATURE</b> 时，可以指定签署方签名方式。如果不指定，签署人可以使用所有的签名类型，可指定的签名类型包括：

<ul><li> <b>HANDWRITE</b> :需要实时手写的手写签名。</li>
<li> <b>HANDWRITTEN_ESIGN</b> :长效手写签名， 是使用保存到个人中心的印章列表的手写签名。(并且包含HANDWRITE)</li>
<li> <b>OCR_ESIGN</b> :AI智能识别手写签名。</li>
<li> <b>ESIGN</b> :个人印章类型。</li>
<li> <b>IMG_ESIGN</b>  : 图片印章。该类型支持用户在签署将上传的PNG格式的图片作为签名。</li>
<li> <b>SYSTEM_ESIGN</b> :系统签名。该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署。</li></ul>

各种签名的样式可以参考下图：
![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg)
   */
  ComponentLimitType?: Array<string>
  /**
   * 指定个人签署方查看合同的校验方式,可以传值如下:
<ul><li>  **1**   : （默认）人脸识别,人脸识别后才能合同内容</li>
<li>  **2**  : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
</li></ul>
注: 
<ul><li>如果合同流程设置ApproverVerifyType查看合同的校验方式,    则忽略此签署人的查看合同的校验方式</li>
<li>此字段可传多个校验方式</li></ul>

`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`

.
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 您可以指定签署方签署合同的认证校验方式，可传递以下值：
<ul><li>**1**：人脸认证，需进行人脸识别成功后才能签署合同；</li>
<li>**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；</li>
<li>**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。（如果是港澳台客户，建议不要选择这个）</li>
<li>**5**：设备指纹识别，需要对比手机机主预留的指纹信息，校验一致才能成功进行合同签署。（iOS系统暂不支持该校验方式）</li>
<li>**6**：设备面容识别，需要对比手机机主预留的人脸信息，校验一致才能成功进行合同签署。（Android系统暂不支持该校验方式）</li></ul>

注：
<ul><li>默认情况下，认证校验方式为人脸认证和签署密码两种形式；</li>
<li>您可以传递多种值，表示可用多种认证校验方式。</li>
<li>校验方式不允许只包含设备指纹识别和设备面容识别，至少需要再增加一种其他校验方式。</li>
<li>设备指纹识别和设备面容识别只支持小程序使用，其他端暂不支持。</li></ul>

注:
`此参数仅针对文件发起设置生效,模板发起合同签署流程, 请以模板配置为主`
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：
<ul><li>**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；</li>
<li>**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。</li></ul>
注：
`不指定该值时，默认为签署方自行选择。`
   */
  SignTypeSelector?: number
  /**
   * 签署人的签署截止时间，格式为Unix标准时间戳（秒）, 超过此时间未签署的合同变成已过期状态，不能在继续签署

注: `若不设置此参数，则默认使用合同的截止时间，此参数暂不支持合同组子合同`
   */
  Deadline?: number
  /**
   * <b>只有在生成H5签署链接的情形下</b>（ 如调用<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowSignUrl" target="_blank">获取H5签署链接</a>、<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateBatchQuickSignUrl" target="_blank">获取H5批量签署链接</a>等接口），该配置才会生效。

您可以指定H5签署视频核身的意图配置，选择问答模式或点头模式的语音文本。

注意：
1. 视频认证为<b>白名单功能，使用前请联系对接的客户经理沟通</b>。
2. 使用视频认证时，<b>生成H5签署链接必须将签署认证方式指定为人脸</b>（即ApproverSignTypes设置成人脸签署）。
3. 签署完成后，可以通过<a href="https://qian.tencent.com/developers/companyApis/queryFlows/DescribeSignFaceVideo" target="_blank">查询签署认证人脸视频</a>获取到当时的视频。
   */
  Intention?: Intention
  /**
   * 进入签署流程的限制，目前支持以下选项：
<ul><li> <b>空值（默认）</b> :无限制，可在任何场景进入签署流程。</li><li> <b>link</b> :选择此选项后，将无法通过控制台或电子签小程序列表进入填写或签署操作，仅可预览合同。填写或签署流程只能通过短信或发起方提供的专用链接进行。</li></ul>
   */
  SignEndpoints?: Array<string>
}

/**
 * 签署方在使用个人印章签署控件（SIGN_SIGNATURE） 时可使用的签署方式
 */
export interface ApproverComponentLimitType {
  /**
   * 签署方经办人在模板中配置的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。
   */
  RecipientId: string
  /**
   * 签署方经办人控件类型是个人印章签署控件（SIGN_SIGNATURE） 时，可选的签名方式，可多选

签名方式：
<ul>
<li>HANDWRITE-手写签名</li>
<li>ESIGN-个人印章类型</li>
<li>OCR_ESIGN-AI智能识别手写签名</li>
<li>SYSTEM_ESIGN-系统签名</li>
</ul>
   */
  Values: Array<string>
}

/**
 * 授权企业列表（目前仅用于“企业自动签 -> 合作企业授权”）
 */
export interface HasAuthOrganization {
  /**
   * 授权企业id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationId?: string
  /**
   * 授权企业名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName?: string
  /**
   * 被授权企业id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizedOrganizationId?: string
  /**
   * 被授权企业名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizedOrganizationName?: string
  /**
   * 授权模板id（仅当授权方式为模板授权时有值）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 授权模板名称（仅当授权方式为模板授权时有值）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateName?: string
  /**
   * 授权时间，格式为时间戳，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizeTime?: number
}

/**
 * 参与方填写控件信息
 */
export interface RecipientComponentInfo {
  /**
   * 签署方经办人在合同流程中的参与方ID，与控件绑定，是控件的归属方
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 参与方填写状态
<ul>
<li>**空值** : 此参与方没有填写控件</li>
<li>**0**:  未填写, 表示此参与方还没有填写合同的填写控件</li>
<li>**1**:  已填写, 表示此参与方已经填写所有的填写控件</li></ul>

注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientFillStatus?: string
  /**
   * 是否为发起方
<ul><li>true-发起方</li>
<li>false-参与方</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPromoter?: boolean
  /**
   * 改参与方填写控件信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Components?: Array<FilledComponent>
}

/**
 * CreateFlowEvidenceReport返回参数结构体
 */
export interface CreateFlowEvidenceReportResponse {
  /**
   * 出证报告 ID，可用于<a href="https://qian.tencent.com/developers/companyApis/certificate/DescribeFlowEvidenceReport" target="_blank">获取出证报告任务执行结果</a>查询出证任务结果和出证PDF的下载URL
   */
  ReportId?: string
  /**
   * 出证任务执行的状态, 状态含义如下：

<ul><li>**EvidenceStatusExecuting**：  出证任务在执行中</li>
<li>**EvidenceStatusSuccess**：  出证任务执行成功</li>
<li>**EvidenceStatusFailed** ： 出证任务执行失败</li></ul>
   */
  Status?: string
  /**
   * 此字段已经废除,不再使用.
出证的PDF下载地址请调用DescribeChannelFlowEvidenceReport接口获取
   * @deprecated
   */
  ReportUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationRole返回参数结构体
 */
export interface CreateIntegrationRoleResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频认证结果
 */
export interface DetectInfoVideoData {
  /**
   * 活体视频的base64编码，mp4格式

注:`需进行base64解码获取活体视频文件`
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveNessVideo?: string
}

/**
 * DescribeFlowComponents请求参数结构体
 */
export interface DescribeFlowComponentsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。

[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateIntegrationDepartment请求参数结构体
 */
export interface CreateIntegrationDepartmentRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 部门名称，最大长度为50个字符。
   */
  DeptName: string
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 电子签父部门ID。
注：`如果同时指定了ParentDeptId与ParentDeptOpenId参数，系统将优先使用ParentDeptId。当二者都未指定时，创建的新部门将自动填充至根节点部门下。`
   */
  ParentDeptId?: string
  /**
   * 第三方平台中父部门ID。
注：`如果同时指定了ParentDeptId与ParentDeptOpenId参数，系统将优先使用ParentDeptId。当二者都未指定时，创建的新部门将自动填充至根节点部门下。`
   */
  ParentDeptOpenId?: string
  /**
   * 客户系统部门ID，最大长度为64个字符。
   */
  DeptOpenId?: string
  /**
   * 排序号，支持设置的数值范围为1~30000。同一父部门下，排序号越大，部门顺序越靠前。
   */
  OrderNo?: number
}

/**
 * DescribeUserVerifyStatus请求参数结构体
 */
export interface DescribeUserVerifyStatusRequest {
  /**
   * 用户信息
   */
  Operator: UserInfo
  /**
   * 姓名
   */
  Name: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>
   */
  IdCardType: string
}

/**
 * 授权用户
 */
export interface AuthorizedUser {
  /**
   * 电子签系统中的用户id
   */
  UserId?: string
}

/**
 * 视频核身意图配置，可指定问答模式或者点头模式的语音文本。

注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。`
 */
export interface Intention {
  /**
   * 视频认证类型，支持以下类型
<ul><li>1 : 问答模式</li>
<li>2 : 点头模式</li></ul>

注: `视频认证为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  IntentionType?: number
  /**
   * 意愿核身语音问答模式（即语音播报+语音回答）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。支持传入1～10轮问答，最多为10轮。

注：`选择问答模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可语音回复“同意”或“不同意”。`
   */
  IntentionQuestions?: Array<IntentionQuestion>
  /**
   * 意愿核身（点头确认模式）使用的文案，若未使用意愿核身（点头确认模式），则该字段无需传入。支持传入1～10轮点头确认文本，最多支持10轮。

注：`选择点头模式时，此字段可不传，不传则使用默认语音文本：请问，您是否同意签署本协议？可点头同意。`
   */
  IntentionActions?: Array<IntentionAction>
}

/**
 * CreateFlowBlockchainEvidenceUrl返回参数结构体
 */
export interface CreateFlowBlockchainEvidenceUrlResponse {
  /**
   * 二维码图片下载链接，下载链接有效时间5分钟，请尽快下载保存。
   */
  QrCode?: string
  /**
   * 查看短链，可直接点击短链查看证书。
   */
  Url?: string
  /**
   * 二维码和短链的过期时间戳，过期时间默认为生成链接后7天。
   */
  ExpiredOn?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
  /**
   * 本合同的发起人，<a href="https://qcloudimg.tencent-cloud.cn/raw/f850cfbe163a1cb38439a9f551c2505c.png" target="_blank">点击查看合同发起人展示的位置</a>

注：支持填入集团子公司经办人 userId代发合同。
   */
  Operator: UserInfo
  /**
   * 用户配置的合同模板ID，会基于此模板创建合同文档，为32位字符串。

[点击查看模板Id在控制台上的位置](https://qcloudimg.tencent-cloud.cn/raw/253071cc2f7becb063c7cf71b37b7861.png)
   */
  TemplateId: string
  /**
   * 合同流程ID，为32位字符串。
此接口的合同流程ID需要由[创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)接口创建得到。
   */
  FlowId?: string
  /**
   * 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起。设置后流程对应的文件名称当前设置的值。
   */
  FileNames?: Array<string>
  /**
   * 电子文档的填写控件的填充内容。具体方式可以参考[FormField](https://qian.tencent.com/developers/companyApis/dataTypes/#formfield)结构体的定义。
<ul>
<li>支持自动签传递印章，可通过指定自动签控件id，指定印章id来完成</li>
<li>附件控件支持传入图片、文件资源id，并将内容合成到合同文件中。支持的文件类型有doc、docx、xls、xlsx、html、jpg、jpeg、png、bmp、txt、pdf。需要注意如果传入的资源类型都是图片类型，图片资源会放置在合同文件的末尾，如果传入的资源有非图片类型资源，会将资源放置在附件控件所在页面的下一页。</li>
</ul>
注：只有在控制台编辑模板时，<font color="red">归属给发起方</font>的填写控件（如下图）才能在创建文档的时候进行内容填充。
![image](https://qcloudimg.tencent-cloud.cn/raw/a54a76a58c454593d06d8e9883ecc9b3.png)
   */
  FormFields?: Array<FormField>
  /**
   * 是否为预览模式，取值如下：
<ul><li> **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。</li> 
<li> **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。 <font color="red">注意： 以预览模式创建的合同仅供查看，因此参与方无法进行签署操作</font> </li></ul>
注: `当使用的模板中存在动态表格控件时，预览结果中没有动态表格的填写内容，动态表格合成完后会触发文档合成完成的回调通知`
   */
  NeedPreview?: boolean
  /**
   * 预览模式下产生的预览链接类型 
<ul><li> **0** :(默认) 文件流 ,点开后下载预览的合同PDF文件 </li>
<li> **1** :H5链接 ,点开后在浏览器中展示合同的样子。</li></ul>
注: `1.此参数在NeedPreview 为true时有效`
`2.动态表格控件不支持H5链接方式预览`
   */
  PreviewType?: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 已废弃字段，客户端Token，保持接口幂等性,最大长度64个字符
   */
  ClientToken?: string
}

/**
 * 催办接口返回的详细信息。
 */
export interface RemindFlowRecords {
  /**
   * 合同流程是否可以催办：
true - 可以，false - 不可以。
若无法催办，将返回RemindMessage以解释原因。
   */
  CanRemind?: boolean
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 在合同流程无法催办的情况下，系统将返回RemindMessage以阐述原因。
   */
  RemindMessage?: string
}

/**
 * CreatePreparedPersonalEsign返回参数结构体
 */
export interface CreatePreparedPersonalEsignResponse {
  /**
   * 导入生成的印章ID，为32位字符串。
建议开发者保存此印章ID，开头实名认证后，通过此 ID查询导入的印章。
   */
  SealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyDigitFile返回参数结构体
 */
export interface VerifyDigitFileResponse {
  /**
   * 加签文件MD5哈希值
   */
  PdfResourceMd5?: string
  /**
   * 验签结果代码，代码的含义如下：<ul><li>**1**：文件验证成功。</li><li>**2**：文件验证失败。</li></ul>
   */
  VerifyResult?: number
  /**
   * 验签序列号, 为11为数组组成的字符串
   */
  VerifySerialNo?: string
  /**
   * 验签结果详情，每个签名域对应的验签结果。
   */
  VerifyDigitFileResults?: Array<VerifyDigitFileResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationSeals返回参数结构体
 */
export interface DescribeOrganizationSealsResponse {
  /**
   * 在设定了SealId时，返回值为0或1；若未设定SealId，则返回公司的总印章数量
   */
  TotalCount?: number
  /**
   * 查询到的印章结果数组
   */
  Seals?: Array<OccupiedSeal>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserMobileChangeUrl请求参数结构体
 */
export interface CreateUserMobileChangeUrlRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 如果您要修改企业员工用户ID，传递此用户ID即可，其他参数（Name，UserAccountType，IdCardType，IdCardNumber）将被忽略。如果不传此用户ID，则会使用其他参数来进行链接生成。

[点击查看用户ID的获取方式](https://res.ess.tencent.cn/cdn/tsign-developer-center/assets/images/%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84-47eb7105dd300e6dc0c502fba22688ae.png)
   */
  UserId?: string
  /**
   * 要修改手机号用户的类型。
<ul><li>0：员工 （默认）</li><li>1：个人</li>
</ul>
如果是员工类型，<b>只能修改本方员工，而不能修改其他企业的员工</b>。
如果是个人类型，可<b>不指定用户身份，生成的是固定的链接，当前登录电子签小程序的用户可进行换绑。</b>

   */
  UserAccountType?: number
  /**
   * 要修改手机号用户的姓名，请确保填写的姓名为对方的真实姓名，而非昵称等代名。

如果没有传递 userId且 userAccountType 是 0 或者没有传递， 此参数为<b>必填项。</b>
   */
  Name?: string
  /**
   * 要修改手机号用户的证件类型，
目前支持的账号类型如下：

<ul><li><b>ID_CARD </b>: （默认）中国大陆居民身份证 </li>
<li><b>HONGKONG_AND_MACAO</b> : 港澳居民来往内地通行证</li>
<li><b>HONGKONG_MACAO_AND_TAIWAN </b>: 港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>

   */
  IdCardType?: string
  /**
   * 要修改手机号用户的身份证号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
如果没有传递 userId且 userAccountType 是 0 或者没有传递， 此参数为<b>必填项。</b>
   */
  IdCardNumber?: string
  /**
   * 要跳转的链接类型

<ul>
<li><b>HTTP</b>：（默认）跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型 ，此时返回长链 (默认类型)</li>
<li><b>HTTP_SHORT_URL</b>：跳转电子签小程序的http_url,短信通知或者H5跳转适合此类型，此时返回短链</li>
<li><b>APP</b>：第三方APP或小程序跳转电子签小程序的path, APP或者小程序跳转适合此类型</li>
</ul>


   */
  Endpoint?: string
  /**
   * 在用户完成实名认证后，其自定义数据将通过[手机号换绑回调](https://qian.tencent.com/developers/company/callback_types_staffs/#%E5%8D%81%E4%B8%89-%E4%B8%AA%E4%BA%BA%E5%91%98%E5%B7%A5%E6%89%8B%E6%9C%BA%E5%8F%B7%E4%BF%AE%E6%94%B9%E5%90%8E%E5%9B%9E%E8%B0%83)返回，以便用户确认其个人数据信息。请注意，自定义数据的字符长度上限为1000，且必须采用base64编码格式。

请注意：
此参数仅支持通过[获取c端用户实名链接](https://qian.tencent.com/developers/companyApis/users/CreateUserVerifyUrl)接口实名的用户生效。
   */
  UserData?: string
}

/**
 * 企业认证信息参数， 需要保证这些参数跟营业执照中的信息一致。
 */
export interface RegistrationOrganizationInfo {
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
   */
  OrganizationName: string
  /**
   * 组织机构企业统一社会信用代码。
请确认该企业统一社会信用代码与企业营业执照中注册的统一社会信用代码一致。
   */
  UniformSocialCreditCode: string
  /**
   * 组织机构法人的姓名。
请确认该企业统一社会信用代码与企业营业执照中注册的法人姓名一致。
   */
  LegalName: string
  /**
   * 组织机构企业注册地址。
请确认该企业注册地址与企业营业执照中注册的地址一致。
   */
  Address?: string
  /**
   * 组织机构超管姓名。
在注册流程中，必须是超管本人进行操作。
如果法人做为超管管理组织机构,超管姓名就是法人姓名
如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数。
   */
  AdminName?: string
  /**
   * 组织机构超管手机号。
在注册流程中，这个手机号必须跟操作人在电子签注册的个人手机号一致。
如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数
   */
  AdminMobile?: string
  /**
   * 可选的此企业允许的授权方式, 可以设置的方式有:
1：上传授权书
2：法人授权超管
5：授权书+对公打款


注:
`1. 当前仅支持一种认证方式`
`2. 如果当前的企业类型是政府/事业单位, 则只支持上传授权书+对公打款`
`3. 如果当前操作人是法人,则是法人认证`
   */
  AuthorizationTypes?: Array<number | bigint>
  /**
   * 认证人身份证号，如果入参中传递超管授权书PowerOfAttorneys，则此参数为必填参数

   */
  AdminIdCardNumber?: string
  /**
   * 认证人证件类型 
支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>

   */
  AdminIdCardType?: string
  /**
   * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
   */
  BusinessLicense?: string
  /**
   * 授权书(PNG或JPG或PDF) base64格式, 大小不超过8M 。
p.s. 如果上传授权书 ，需遵循以下条件
1. 超管的信息（超管姓名，超管手机号）必须为必填参数。
2. 超管的个人身份必须在电子签已经实名。
2. 认证方式AuthorizationTypes必须只能是上传授权书方式 

   */
  PowerOfAttorneys?: Array<string>
}

/**
 * CreateEmbedWebUrl请求参数结构体
 */
export interface CreateEmbedWebUrlRequest {
  /**
   * 执行本接口操作的员工信息。
<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * WEB嵌入资源类型，支持以下类型
<ul><li>CREATE_SEAL: 生成创建印章的嵌入页面</li>
<li>CREATE_TEMPLATE：生成创建模板的嵌入页面</li>
<li>MODIFY_TEMPLATE：生成编辑模板的嵌入页面</li>
<li>PREVIEW_TEMPLATE：生成预览模板的嵌入页面</li>
<li>PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面</li>
<li>PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面</li>
<li>EXTEND_SERVICE：生成拓展服务的嵌入页面</li>
<li>PREVIEW_FLOW：生成预览合同的嵌入页面（支持移动端）</li>
<li>PREVIEW_FLOW_DETAIL：生成查看合同详情的嵌入页面（仅支持PC端）</li></ul>
   */
  EmbedType: string
  /**
   * WEB嵌入的业务资源ID

当EmbedType取值
<ul>
<li>为PREVIEW_SEAL_DETAIL，必填，取值为印章id。</li>
<li>为CREATE_TEMPLATE，非必填，取值为资源id。*资源Id获取可使用接口[上传文件](https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles)*</li>
<li>为MODIFY_TEMPLATE，PREVIEW_TEMPLATE，必填，取值为模板id。</li>
<li>为PREVIEW_FLOW，PREVIEW_FLOW_DETAIL，必填，取值为合同id。</li>
</ul>

注意：
 1. CREATE_TEMPLATE中的BusinessId仅支持PDF文件类型， 如果您的文件不是PDF， 请使用接口[创建文件转换任务
](https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi) 和[查询转换任务状态](https://qian.tencent.com/developers/companyApis/templatesAndFiles/GetTaskResultApi) 来进行转换成PDF资源。
   */
  BusinessId?: string
  /**
   * 代理企业和员工的信息。
<br/>在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 抄送方信息
   */
  Reviewer?: ReviewerInfo
  /**
   * 个性化参数，用于控制页面展示内容
   */
  Option?: EmbedUrlOption
  /**
   * <ul> <li>目前仅支持EmbedType=CREATE_TEMPLATE时传入</li> <li>指定后，创建，编辑，删除模板时，回调都会携带该userData</li> <li>支持的格式：json字符串的BASE64编码字符串</li> <li>示例：<ul>                  <li>json字符串：{"ComeFrom":"xxx"}，BASE64编码：eyJDb21lRnJvbSI6Inh4eCJ9</li>                  <li>eyJDb21lRnJvbSI6Inh4eCJ9，为符合要求的userData数据格式</li> </ul> </li> </ul>
   */
  UserData?: string
}

/**
 * DeleteIntegrationEmployees请求参数结构体
 */
export interface DeleteIntegrationEmployeesRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 待离职员工的信息最多不超过100个。应符合以下规则：

1. UserId和OpenId不可同时为空，必须填写其中一个，优先使用UserId。

2. **若需要进行离职交接**，交接人信息ReceiveUserId和ReceiveOpenId不可同时为空，必须填写其中一个，优先使用ReceiveUserId。
   */
  Employees: Array<Staff>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeUserAutoSignStatus请求参数结构体
 */
export interface DescribeUserAutoSignStatusRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 要查询状态的用户信息, 包括名字,身份证等
   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * GetTaskResultApi请求参数结构体
 */
export interface GetTaskResultApiRequest {
  /**
   * 转换任务Id，通过接口<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务接口</a>得到的转换任务id
   */
  TaskId: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
}

/**
 * 此结构体(FlowGroupOptions)描述的是合同组的个性化配置，支持控制是否发送短信、未实名个人签署方查看合同组时是否需要实名认证（仅在合同组文件发起配置时生效）
 */
export interface FlowGroupOptions {
  /**
   * 签署人校验方式,支持以下类型
<ul><li>VerifyCheck : 人脸识别 (默认值)</li>
<li>MobileCheck : 手机号验证</li></ul>
参数说明：此参数仅在合同组文件发起有效，可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
   */
  ApproverVerifyType?: string
  /**
   * 发起合同（流程）组本方企业经办人通知方式
签署通知类型，支持以下类型
<ul><li>sms : 短信 (默认值)</li><li>none : 不通知</li></ul>
   */
  SelfOrganizationApproverNotifyType?: string
  /**
   * 发起合同（流程）组他方经办人通知方式
签署通知类型，支持以下类型
<ul><li>sms : 短信 (默认值)</li><li>none : 不通知</li></ul>
   */
  OtherApproverNotifyType?: string
}

/**
 * DescribeFlowBriefs返回参数结构体
 */
export interface DescribeFlowBriefsResponse {
  /**
   * 合同流程基础信息列表，包含流程的名称、状态、创建日期等基本信息。 
注：`与入参 FlowIds 的顺序可能存在不一致的情况。`
   */
  FlowBriefs?: Array<FlowBrief>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationRole请求参数结构体
 */
export interface ModifyIntegrationRoleRequest {
  /**
   * 角色Id，可通过接口 DescribeIntegrationRoles 查询获取
   */
  RoleId: string
  /**
   * 角色名称，最大长度为20个字符，仅限中文、字母、数字和下划线组成。
   */
  Name: string
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
支持填入集团子公司经办人 userId 代发合同。

注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 角色描述，最大长度为50个字符
   */
  Description?: string
  /**
   * 权限树
   */
  PermissionGroups?: Array<PermissionGroup>
  /**
   * 集团角色的话，需要传递集团子企业列表，如果是全选，则传1
   */
  SubOrganizationIds?: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateFlowGroupByFiles返回参数结构体
 */
export interface CreateFlowGroupByFilesResponse {
  /**
   * 合同(流程)组的合同组Id
   */
  FlowGroupId?: string
  /**
   * 合同(流程)组中子合同列表.
   */
  FlowIds?: Array<string>
  /**
   * 合同组签署方信息。
   */
  Approvers?: Array<FlowGroupApprovers>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReleaseFlow请求参数结构体
 */
export interface CreateReleaseFlowRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 待解除的签署流程编号（即原签署流程的编号）。
   */
  NeedRelievedFlowId: string
  /**
   * 解除协议内容, 包括解除理由等信息。
   */
  ReliveInfo: RelieveInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 替换解除协议的签署人， 如不指定新的签署人，将继续使用原流程的签署人作为本解除协议的参与方。 <br/>
如需更换原合同中的企业端签署人，可通过指定该签署人的RecipientId编号更换此企业端签署人。(可通过接口<a href="https://qian.tencent.com/developers/companyApis/queryFlows/DescribeFlowInfo/">DescribeFlowInfo</a>查询签署人的RecipientId编号)<br/>

注：
1. 支持更换企业的签署人，不支持更换个人类型的签署人。
2. 己方企业支持自动签署，他方企业不支持自动签署。
3. <b>仅将需要替换的签署人添加至此列表</b>，无需替换的签署人无需添加进来。
   */
  ReleasedApprovers?: Array<ReleasedApprover>
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的7天时截止。
如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
   */
  Deadline?: number
  /**
   * 调用方自定义的个性化字段，该字段的值可以是字符串JSON或其他字符串形式，客户可以根据自身需求自定义数据格式并在需要时进行解析。该字段的信息将以Base64编码的形式传输，支持的最大数据大小为20480长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。

回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
}

/**
 * 批量补充签署人时，补充失败的报错说明
 */
export interface FillError {
  /**
   * 为签署方经办人在签署合同中的参与方ID，与控件绑定，是控件的归属方，ID为32位字符串。与入参中补充的签署人角色ID对应，批量补充部分失败返回对应的错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 补充失败错误说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMessage?: string
  /**
   * 合同流程ID，为32位字符串。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
}

/**
 * DeleteIntegrationRoleUsers请求参数结构体
 */
export interface DeleteIntegrationRoleUsersRequest {
  /**
   * 执行本接口操作的员工信息。 注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 角色id，可以通过DescribeIntegrationRoles接口获取角色信息
   */
  RoleId: string
  /**
   * 用户信息,最多 200 个用户，并且 UserId 和 OpenId 二选一，其他字段不需要传
   */
  Users: Array<UserInfo>
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateFlowSignUrl请求参数结构体
 */
export interface CreateFlowSignUrlRequest {
  /**
   * 合同流程ID为32位字符串。

您可以登录腾讯电子签控制台，在 "合同" -> "合同中心" 中查看某个合同的FlowId（在页面中展示为合同ID）。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)。

   */
  FlowId: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 流程签署人列表中，结构体的ApproverName、ApproverMobile和ApproverType为必传字段。如果是企业签署人，还需传递OrganizationName。

此结构体和CreateFlow发起接口参与方结构体复用，除了上述参数外，可传递的参数有：
1. RecipientId: 发起合同会返回，可以直接用于指定需要生成链接的签署方。
2. ApproverSignTypes: 指定签署方签署时候的认证方式，仅此链接生效。
3. SignTypeSelector: 可以指定签署方签署合同的认证校验方式的选择模式。
4. Intention: 指定H5签署视频核身的意图配置，仅视频签署需要使用。

注：
1. 签署人<b>只能使用手写签名、时间类型、印章类型、签批类型的签署控件和内容填写控件</b>，其他类型的签署控件暂时不支持。
2. 生成发起方预览链接时，该字段（FlowApproverInfos）可以传空或者不传。


   */
  FlowApproverInfos?: Array<FlowCreateApprover>
  /**
   * 机构信息，暂未开放
   * @deprecated
   */
  Organization?: OrganizationInfo
  /**
   * 签署完之后的H5页面的跳转链接，最大长度1000个字符。链接类型请参考 <a href="https://qian.tencent.com/developers/company/openqianh5" target="_blank">跳转电子签H5</a>

   */
  JumpUrl?: string
  /**
   * 链接类型支持以下指定类型：

<ul><li><b>0</b>: 签署链接（默认值），进入后可以填写或签署合同。</li><li><b>1 </b>: 预览链接，进入后可以预览合同当前的样子。</li></ul>

注：

1. 当指定链接类型为1时，链接为预览链接，打开链接后无法进行签署操作，仅支持预览和查看当前合同状态。
2. 如需生成发起方预览链接，则签署方信息应传空，即FlowApproverInfos传空或者不传。
   */
  UrlType?: number
}

/**
 * CreateIntegrationEmployees返回参数结构体
 */
export interface CreateIntegrationEmployeesResponse {
  /**
   * 创建员工的结果。包含创建成功的数据与创建失败数据。
   */
  CreateEmployeeResult?: CreateStaffResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationUserRoles请求参数结构体
 */
export interface CreateIntegrationUserRolesRequest {
  /**
   * 执行本接口操作的员工信息。 注: 在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 绑定角色的用户id列表，不能重复，不能大于 100 个
   */
  UserIds: Array<string>
  /**
   * 绑定角色的角色id列表，不能重复，不能大于 100，可以通过DescribeIntegrationRoles接口获取角色信息
   */
  RoleIds: Array<string>
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息
 */
export interface FlowDetailInfo {
  /**
   * 合同流程ID，为32位字符串。
   */
  FlowId?: string
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowName?: string
  /**
   * 合同流程的类别分类（如销售合同/入职合同等）。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowType?: string
  /**
   * 合同流程当前的签署状态, 会存在下列的状态值 <ul><li> **0** : 未开启流程(合同中不存在填写环节)</li> <li> **1** : 待签署</li> <li> **2** : 部分签署</li> <li> **3** : 已拒签</li> <li> **4** : 已签署</li> <li> **5** : 已过期</li> <li> **6** : 已撤销</li> <li> **7** : 未开启流程(合同中存在填写环节)</li> <li> **8** : 等待填写</li> <li> **9** : 部分填写</li> <li> **10** : 已拒填</li> <li> **21** : 已解除</li></ul>
   */
  FlowStatus?: number
  /**
   * 当合同流程状态为已拒签（即 FlowStatus=3）或已撤销（即 FlowStatus=6）时，此字段 FlowMessage 为拒签或撤销原因。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMessage?: string
  /**
   * 合同流程描述信息。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowDescription?: string
  /**
   * 合同流程的创建时间戳，格式为Unix标准时间戳（秒）。
   */
  CreatedOn?: number
  /**
   * 合同流程的签署方数组
   */
  FlowApproverInfos?: Array<FlowApproverDetail>
  /**
   * 合同流程的关注方信息数组
   */
  CcInfos?: Array<FlowApproverDetail>
  /**
   * 合同流程发起方的员工编号, 即员工在腾讯电子签平台的唯一身份标识。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
}

/**
 * 更新员工信息成功返回的数据信息， 仅支持未实名的用户进行更新
会通过短信、企微消息或者H5Url 链接
如果是通过H5邀请加入的方式，会返回H5 链接
 */
export interface SuccessUpdateStaffData {
  /**
   * 传入的用户名称
   */
  DisplayName?: string
  /**
   * 传入的手机号，没有打码
   */
  Mobile?: string
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
   */
  UserId?: string
  /**
   * H5端员工实名链接
只有入参 InvitationNotifyType = H5的时候才会进行返回。
   */
  Url?: string
}

/**
 * CreatePersonAuthCertificateImage请求参数结构体
 */
export interface CreatePersonAuthCertificateImageRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 个人用户名称
   */
  UserName: string
  /**
   * 证件类型，支持以下类型
<ul><li> ID_CARD  : 中国大陆居民身份证 (默认值)</li>
<li> HONGKONG_AND_MACAO  : 中国港澳居民来往内地通行证</li>
<li> HONGKONG_MACAO_AND_TAIWAN  : 中国港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>
   */
  IdCardType: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  IdCardNumber: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>

注: `不传默认为处方单场景，即E_PRESCRIPTION_AUTO_SIGN`
   */
  SceneKey?: string
}

/**
 * CreateFlowByFiles返回参数结构体
 */
export interface CreateFlowByFilesResponse {
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。

注: 如果是预览模式(即NeedPreview设置为true)时, 此处不会有值返回。

[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowId?: string
  /**
   * 合同预览链接URL。

注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL
   */
  PreviewUrl?: string
  /**
   * 签署方信息，如角色ID、角色名称等
   */
  Approvers?: Array<ApproverItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFiles返回参数结构体
 */
export interface UploadFilesResponse {
  /**
   * 文件资源ID数组，每个文件资源ID为32位字符串。
建议开发者保存此资源ID，后续创建合同或创建合同流程需此资源ID。
注:`有效期一个小时（超过一小时后系统不定期清理，会有部分时间差）, 有效期内此文件id可以反复使用, 超过有效期无法使用`
   */
  FileIds?: Array<string>
  /**
   * 上传成功文件数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建/修改员工成功返回的信息
现在支持saas/企微/H5端进行加入。
 */
export interface SuccessCreateStaffData {
  /**
   * 员工名
   */
  DisplayName?: string
  /**
   * 员工手机号
   */
  Mobile?: string
  /**
   * 员工在电子签平台的id
   */
  UserId?: string
  /**
   * 提示，当创建已存在未实名用户时，该字段有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Note?: string
  /**
   * 传入的企微账号id
   */
  WeworkOpenId?: string
  /**
   * 员工邀请返回链接 根据入参的 InvitationNotifyType 和 Endpoint 返回链接 <table><tbody><tr><td>链接类型</td><td>有效期</td><td>示例</td></tr><tr><td>HTTP_SHORT_URL（短链）</td><td>一天</td><td>https://test.essurl.cn/fvG7UBEd0F</td></tr><tr><td>HTTP（长链）</td><td>一天</td><td>https://res.ess.tencent.cn/cdn/h5-activity-dev/jump-mp.html?where=mini&from=MSG&to=USER_VERIFY&verifyToken=yDCVbUUckpwocmfpUySko7IS83LTV0u0&expireTime=1710840183</td></tr><tr><td>H5</td><td>30 天</td><td>https://quick.test.qian.tencent.cn/guide?Code=yDCVbUUckpwtvxqoUbTw4VBBjLbfAtW7&CodeType=QUICK&shortKey=yDCVbUY7lhqV7mZlCL2d</td></tr><tr><td>APP</td><td>一天</td><td>/pages/guide/index?to=USER_VERIFY&verifyToken=yDCVbUUckpwocm96UySko7ISvEIZH7Yz&expireTime=1710840455 </td></tr></tbody></table>
   */
  Url?: string
}

/**
 * 流程中参与方的信息结构
 */
export interface Recipient {
  /**
   * 签署参与者ID，唯一标识
   */
  RecipientId?: string
  /**
   * 参与者类型。
默认为空。
ENTERPRISE-企业；
INDIVIDUAL-个人；
PROMOTER-发起方
   */
  RecipientType?: string
  /**
   * 描述信息
   */
  Description?: string
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 是否需要验证，
默认为false-不需要验证
   */
  RequireValidation?: boolean
  /**
   * 是否需要签署，
默认为true-需要签署
   */
  RequireSign?: boolean
  /**
   * 此参与方添加的顺序，从0～N
   */
  RoutingOrder?: number
  /**
   * 是否需要发送，
默认为true-需要发送
   */
  RequireDelivery?: boolean
  /**
   * 邮箱地址
   */
  Email?: string
  /**
   * 电话号码
   */
  Mobile?: string
  /**
   * 关联的用户ID，电子签系统的用户ID
   */
  UserId?: string
  /**
   * 发送方式，默认为EMAIL。
EMAIL-邮件；
MOBILE-手机短信；
WECHAT-微信通知
   */
  DeliveryMethod?: string
  /**
   * 参与方的一些附属信息，json格式
   */
  RecipientExtra?: string
  /**
   * 签署人查看合同校验方式, 支持的类型如下:
<ul><li> 1 :实名认证查看</li>
<li> 2 :手机号校验查看</li></ul>
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 签署人进行合同签署时的认证方式，支持的类型如下:
<ul><li> 1 :人脸认证</li>
<li> 2 :签署密码</li>
<li> 3 :运营商三要素认证</li>
<li> 4 :UKey认证</li>
<li> 5 :设备指纹识别</li>
<li> 6 :设备面容识别</li></ul>
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 签署方是否可以转他人处理

<ul><li> **false** : ( 默认)可以转他人处理</li>
<li> **true** :不可以转他人处理</li></ul>
   */
  NoTransfer?: boolean
}

/**
 * DescribeFlowEvidenceReport请求参数结构体
 */
export interface DescribeFlowEvidenceReportRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 签署报告编号, 由<a href="https://qian.tencent.com/developers/companyApis/certificate/CreateFlowEvidenceReport" target="_blank">提交申请出证报告任务</a>产生
   */
  ReportId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 指定申请的报告类型，可选类型如下：
<ul><li> **0** :合同签署报告（默认）</li>
<li> **1** :公证处核验报告</li></ul>
   */
  ReportType?: number
}

/**
 * 绑定角色失败信息
 */
export interface FailedCreateRoleData {
  /**
   * 用户userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 角色id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleIds?: Array<string>
}

/**
 * DescribeBillUsage请求参数结构体
 */
export interface DescribeBillUsageRequest {
  /**
   * 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于90天
   */
  StartTime: string
  /**
   * 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于90天
   */
  EndTime: string
  /**
   * 查询的套餐类型 （选填 ）不传则查询所有套餐；目前支持:<ul><li>**CloudEnterprise**: 企业版合同</li><li>**SingleSignature**: 单方签章</li><li>**CloudProve**: 签署报告</li><li>**CloudOnlineSign**: 腾讯会议在线签约</li><li>**ChannelWeCard**: 微工卡</li><li>**SignFlow**: 合同套餐</li><li>**SignFace**: 签署意愿（人脸识别）</li><li>**SignPassword**: 签署意愿（密码）</li><li>**SignSMS**: 签署意愿（短信）</li><li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li><li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li><li>**OrgEssAuth**: 签署企业实名</li><li>**FlowNotify**: 短信通知</li><li>**AuthService**: 企业工商信息查询</li></ul>
   */
  QuotaType?: string
  /**
   * 是否展示集团子企业的明细，默认否
   */
  DisplaySubEnterprise?: boolean
}

/**
 * 印章扩展信息
 */
export interface ExtendScene {
  /**
   * 印章来源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GenerateType?: string
  /**
   * 印章来源类型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  GenerateTypeDesc?: string
  /**
   * 印章来源logo
注意：此字段可能返回 null，表示取不到有效值。
   */
  GenerateTypeLogo?: string
}

/**
 * DescribeBillUsage返回参数结构体
 */
export interface DescribeBillUsageResponse {
  /**
   * 企业套餐余额及使用情况
   */
  Summary?: Array<OrgBillSummary>
  /**
   * 集团子企业套餐使用情况
   */
  SubOrgSummary?: Array<SubOrgBillSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合同参与者信息。
 */
export interface ApproverInfo {
  /**
   * 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:
**0**：企业
**1**：个人
**3**：企业静默签署
注：`类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。`
**7**: 个人自动签署，适用于个人自动签场景。
注: `个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  ApproverType: number
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
   */
  ApproverName?: string
  /**
   * 签署方经办人手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
请确认手机号所有方为此合同签署方。
   */
  ApproverMobile?: string
  /**
   * 组织机构名称。
请确认该名称与企业营业执照中注册的名称一致。
如果名称中包含英文括号()，请使用中文括号（）代替。
如果签署方是企业签署方(approverType = 0 或者 approverType = 3)， 则企业名称必填。

   */
  OrganizationName?: string
  /**
   * 合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体
<ul><li> 个人签名/印章</li>
<li> 企业印章</li>
<li> 骑缝章等签署控件</li></ul>
   */
  SignComponents?: Array<Component>
  /**
   * 签署方经办人的证件类型，支持以下类型，样式可以参考<a href="https://qian.tencent.com/developers/partner/id_card_support/" target="_blank">常见个人证件类型介绍</a>
<ul><li>ID_CARD 中国大陆居民身份证  (默认值)</li>
<li>HONGKONG_AND_MACAO 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)</li>
<li>OTHER_CARD_TYPE 其他证件</li></ul>




注: 
1. <b>其他证件类型为白名单功能</b>，使用前请联系对接的客户经理沟通。
2. 港澳居民来往内地通行证 和  港澳台居民居住证 类型的签署人<b>至少要过一次大陆的海关</b>才能使用。
   */
  ApproverIdCardType?: string
  /**
   * 签署方经办人的证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
   */
  ApproverIdCardNumber?: string
  /**
   * 通知签署方经办人的方式,  有以下途径:
<ul><li>  **sms**  :  (默认)短信</li>
<li>   **none**   : 不通知</li></ul>

注意：
`如果使用的是通过文件发起合同（CreateFlowByFiles），NotifyType必须 是 sms 才会发送短信`
   */
  NotifyType?: string
  /**
   * 收据场景设置签署人角色类型, 可以设置如下<b>类型</b>:
<ul><li> **1**  :收款人</li>
<li>   **2**   :开具人</li>
<li>   **3** :见证人</li></ul>
注: `收据场景为白名单功能，使用前请联系对接的客户经理沟通。`
   */
  ApproverRole?: number
  /**
   * 可以自定义签署人角色名：收款人、开具人、见证人等，长度不能超过20，只能由中文、字母、数字和下划线组成。

注: `如果是用模板发起, 优先使用此处上传的, 如果不传则用模板的配置的`
   */
  ApproverRoleName?: string
  /**
   * 签署意愿确认渠道，默认为WEIXINAPP:人脸识别

注: 将要废弃, 用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置
   */
  VerifyChannel?: Array<string>
  /**
   * 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。

若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：
<ul><li>合同页数少于等于2页，阅读时间为3秒；</li>
<li>合同页数为3到5页，阅读时间为5秒；</li>
<li>合同页数大于等于6页，阅读时间为10秒。</li></ul>
   */
  PreReadTime?: number
  /**
   * 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得

注： 
如果传进来的<font color="red">UserId已经实名， 则忽略ApproverName，ApproverIdCardType，ApproverIdCardNumber，ApproverMobile这四个入参</font>（会用此UserId实名的身份证和登录的手机号覆盖）
   */
  UserId?: string
  /**
   * 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。
   */
  ApproverSource?: string
  /**
   * 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。
所有参与或签的人员均需具备该标识。
注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。
如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。
   */
  CustomApproverTag?: string
  /**
   * 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人等。
详细操作可以参考开发者中心的ApproverOption结构体。
   */
  ApproverOption?: ApproverOption
  /**
   * 指定个人签署方查看合同的校验方式,可以传值如下:
<ul><li>  **1**   : （默认）人脸识别,人脸识别后才能合同内容</li>
<li>  **2**  : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
</li></ul>
注: 
<ul><li>如果合同流程设置ApproverVerifyType查看合同的校验方式,    则忽略此签署人的查看合同的校验方式</li>
<li>此字段可传多个校验方式</li></ul>
   */
  ApproverVerifyTypes?: Array<number | bigint>
  /**
   * 您可以指定签署方签署合同的认证校验方式，可传递以下值：
<ul><li>**1**：人脸认证，需进行人脸识别成功后才能签署合同；</li>
<li>**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；</li>
<li>**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。（如果是港澳台客户，建议不要选择这个）</li>
<li>**5**：设备指纹识别，需要对比手机机主预留的指纹信息，校验一致才能成功进行合同签署。（iOS系统暂不支持该校验方式）</li>
<li>**6**：设备面容识别，需要对比手机机主预留的人脸信息，校验一致才能成功进行合同签署。（Android系统暂不支持该校验方式）</li></ul>


默认为：
1(人脸认证 ),2(签署密码),3(运营商三要素),5(设备指纹识别),6(设备面容识别)

注：
1. 用<font color='red'>模板创建合同场景</font>, 签署人的认证方式需要在配置模板的时候指定, <font color='red'>在创建合同重新指定无效</font>
2. 运营商三要素认证方式对手机号运营商及前缀有限制,可以参考[运营商支持列表类](https://qian.tencent.com/developers/company/mobile_support)得到具体的支持说明
3. 校验方式不允许只包含<font color='red'>设备指纹识别</font>和<font color='red'>设备面容识别</font>，至少需要再增加一种其他校验方式。
4. <font color='red'>设备指纹识别</font>和<font color='red'>设备面容识别</font>只支持小程序使用，其他端暂不支持。
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 此签署人（员工或者个人）签署前，是否需要发起方企业审批，取值如下：
<ul><li>**false**：（默认）不需要审批，直接签署。</li>
<li>**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li>如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li>如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>

注：`此功能可用于与发起方企业内部的审批流程进行关联，支持手动、静默签署合同`

![image](https://qcloudimg.tencent-cloud.cn/raw/b14d5188ed0229d1401e74a9a49cab6d.png)
   */
  ApproverNeedSignReview?: boolean
  /**
   * [用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles)时,如果设置了外层参数SignBeanTag=1(允许签署过程中添加签署控件),则可通过此参数明确规定合同所使用的签署控件类型（骑缝章、普通章法人章等）和具体的印章（印章ID或者印章类型）或签名方式。

注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个），他方企业或个人只支持限制控件类型。`
   */
  AddSignComponentsLimits?: Array<ComponentLimit>
  /**
   * 签署须知：支持传入富文本，最长字数：500个中文字符
   */
  SignInstructionContent?: string
  /**
   * 签署人的签署截止时间，格式为Unix标准时间戳（秒）

注: `若不设置此参数，则默认使用合同的截止时间，此参数暂不支持合同组子合同`
   */
  Deadline?: number
  /**
   * 签署人在合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
<ul><li>单行文本控件</li>
<li>多行文本控件</li>
<li>勾选框控件</li>
<li>数字控件</li>
<li>图片控件</li>
</ul>

具体使用说明可参考[为签署方指定填写控件](https://qian.tencent.cn/developers/company/createFlowByFiles/#指定签署方填写控件)

注：`此参数仅在通过文件发起合同或者合同组时生效`
   */
  Components?: Array<Component>
  /**
   * 进入签署流程的限制，目前支持以下选项：
<ul><li> <b>空值（默认）</b> :无限制，可在任何场景进入签署流程。</li><li> <b>link</b> :选择此选项后，将无法通过控制台或电子签小程序列表进入填写或签署操作，仅可预览合同。填写或签署流程只能通过短信或发起方提供的专用链接进行。</li></ul>
   */
  SignEndpoints?: Array<string>
}

/**
 * CreateFlowSignReview返回参数结构体
 */
export interface CreateFlowSignReviewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationDepartment请求参数结构体
 */
export interface ModifyIntegrationDepartmentRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 电子签部门ID，通过<a href="https://qian.tencent.com/developers/companyApis/organizations/DescribeIntegrationDepartments" target="_blank">DescribeIntegrationDepartments</a>接口获得。
   */
  DeptId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 电子签父部门ID，通过<a href="https://qian.tencent.com/developers/companyApis/organizations/DescribeIntegrationDepartments" target="_blank">DescribeIntegrationDepartments</a>接口获得。
   */
  ParentDeptId?: string
  /**
   * 部门名称，最大长度为50个字符。
   */
  DeptName?: string
  /**
   * 客户系统部门ID，最大长度为64个字符。
   */
  DeptOpenId?: string
  /**
   * 排序号，支持设置的数值范围为1~30000。同一父部门下，排序号越大，部门顺序越靠前。
   */
  OrderNo?: number
}

/**
 * RenewAutoSignLicense请求参数结构体
 */
export interface RenewAutoSignLicenseRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 需要续期自动签的个人的信息，如姓名，证件信息等。
   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 查询过滤条件
 */
export interface Filter {
  /**
   * 查询过滤条件的Key
   */
  Key: string
  /**
   * 查询过滤条件的Value列表
   */
  Values: Array<string>
}

/**
 * 创建员工的结果
 */
export interface CreateStaffResult {
  /**
   * 创建员工的成功列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessEmployeeData: Array<SuccessCreateStaffData>
  /**
   * 创建员工的失败列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedEmployeeData: Array<FailedCreateStaffData>
}

/**
 * CreateUserAutoSignEnableUrl请求参数结构体
 */
export interface CreateUserAutoSignEnableUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 自动签使用的场景值, 可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey: string
  /**
   * 自动签开通配置信息, 包括开通的人员的信息等
   */
  AutoSignConfig: AutoSignConfig
  /**
   * 生成的链接类型：
<ul><li> 不传(即为空值) 则会生成小程序端开通链接(默认)</li>
<li> **H5SIGN** : 生成H5端开通链接</li></ul>
   */
  UrlType?: string
  /**
   * 是否通知开通方，通知类型:<ul><li>默认为不通知开通方</li><li>**SMS** :  短信通知 ,如果需要短信通知则NotifyAddress填写对方的手机号</li></ul>
   */
  NotifyType?: string
  /**
   * 如果通知类型NotifyType选择为SMS，则此处为手机号, 其他通知类型不需要设置此项
   */
  NotifyAddress?: string
  /**
   * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为当前时间往后30天。`如果不传，默认过期时间为当前时间往后7天。`
   */
  ExpiredTime?: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。 在个人自动签的开通、关闭等回调信息场景中，该字段的信息将原封不动地透传给贵方。
   */
  UserData?: string
}

/**
 * CreateOrganizationBatchSignUrl返回参数结构体
 */
export interface CreateOrganizationBatchSignUrlResponse {
  /**
   * 批量签署入口链接，用户可使用这个链接跳转到控制台页面对合同进行签署操作。
   */
  SignUrl?: string
  /**
   * 链接过期截止时间，格式为Unix标准时间戳（秒），默认为7天后截止。
   */
  ExpiredTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 动态添加签署人的结果信息
 */
export interface DynamicFlowApproverResult {
  /**
   * 签署方角色编号，签署方角色编号是用于区分同一个流程中不同签署方的唯一标识。不同的流程会出现同样的签署方角色编号。

填写控件和签署控件都与特定的角色编号关联。

在进行新增签署方操作时，建议记录下该签署方的角色编号。后续可以拉取流程信息，用来判断该签署方的当前状态。

注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 签署方唯一编号，一个全局唯一的标识符，不同的流程不会出现冲突。

可以使用签署方的唯一编号来生成签署链接（也可以通过RecipientId来生成签署链接）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 签署方当前状态，会出现下面的状态

2：待签署
3：已签署
4：已拒绝
5：已过期
6：已撤销
8：待填写
9：因为各种原因（签署人改名等）而终止
10：填写完成
15：已解除
19：转他人处理
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverStatus?: number
}

/**
 * UnbindEmployeeUserIdWithClientOpenId请求参数结构体
 */
export interface UnbindEmployeeUserIdWithClientOpenIdRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。

通过<a href="https://qian.tencent.com/developers/companyApis/staffs/DescribeIntegrationEmployees" target="_blank">DescribeIntegrationEmployees</a>接口获取，也可登录腾讯电子签控制台查看
![image](https://qcloudimg.tencent-cloud.cn/raw/97cfffabb0caa61df16999cd395d7850.png)
   */
  UserId: string
  /**
   * 员工在贵司业务系统中的唯一身份标识，用于与腾讯电子签账号进行映射，确保在同一企业内不会出现重复。
该标识最大长度为64位字符串，仅支持包含26个英文字母和数字0-9的字符。
   */
  OpenId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DeleteOrganizationAuthorizations请求参数结构体
 */
export interface DeleteOrganizationAuthorizationsRequest {
  /**
   * 执行本接口操作的员工信息, userId 必填。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 认证流Ids数组
认证流 Id 是指在企业认证过程中，当前操作人的认证流程的唯一标识。每个企业在认证过程中只能有一条认证流认证成功。这意味着在同一认证过程内，一个企业只能有一个认证流程处于成功状态，以确保认证的唯一性和有效性。


认证流 Id可以通过回调 [授权书认证审核结果回调](https://qian.tencent.com/developers/company/callback_types_staffs/#%E5%8D%81%E5%9B%9B-%E6%8E%88%E6%9D%83%E4%B9%A6%E8%AE%A4%E8%AF%81%E5%AE%A1%E6%A0%B8%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83) 获取

注意：
如果传递了认证流Id，则下面的参数 超管二要素不会生效
   */
  AuthorizationIds?: Array<string>
  /**
   * 认证人姓名，组织机构超管姓名。 
在注册流程中，必须是超管本人进行操作。 
   */
  AdminName?: string
  /**
   * 认证人手机号，组织机构超管手机号。 在注册流程中，必须是超管本人进行操作。
   */
  AdminMobile?: string
  /**
   * 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateBatchOrganizationRegistrationTasks请求参数结构体
 */
export interface CreateBatchOrganizationRegistrationTasksRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 组织机构注册信息。
一次最多支持10条认证流
   */
  RegistrationOrganizations: Array<RegistrationOrganizationInfo>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 要生成链接的类型, 可以选择的值如下: 

<ul>
<li>(默认)PC: 生成PC端的链接</li>
<li>SHORT_URL: H5跳转到电子签小程序链接的短链形式, 一般用于发送短信中带的链接, 打开后进入腾讯电子签小程序</li>
<li>APP：生成小程序跳转链接</li>
<li>H5：生成H5跳转长链接</li>
<li>SHORT_H5：生成H5跳转短链</li>
</ul>
   */
  Endpoint?: string
}

/**
 * CreateUserVerifyUrl请求参数结构体
 */
export interface CreateUserVerifyUrlRequest {
  /**
   * 操作人信息
   */
  Operator: UserInfo
  /**
   * 要实名的姓名
   */
  Name?: string
  /**
   * 要实名的身份证号码，
身份证号码如果有x的话，统一传大写X
   */
  IdCardNumber?: string
  /**
   * 证件类型，目前只支持身份证类型：ID_CARD
   */
  IdCardType?: string
  /**
   * 要实名的手机号，兼容带+86的格式
   */
  Mobile?: string
  /**
   * 实名完之后的跳转链接，最大长度1000个字符。
链接类型请参考 <a href="https://qian.tencent.com/developers/company/openqianh5" target="_blank">跳转电子签H5</a>。

注：此参数仅支持 Endpoint 为 <font color="red">H5 或 H5_SHORT_URL </font>的时候传递

   */
  JumpUrl?: string
  /**
   * 要跳转的链接类型

<ul>
<li><strong>HTTP</strong>：适用于短信通知或H5跳转的电子签小程序HTTP长链接</li>
<li><strong>HTTP_SHORT_URL</strong>：适用于短信通知或H5跳转的电子签小程序HTTP短链接</li>
<li><strong>APP</strong>：（默认类型）适用于第三方APP或小程序跳转的电子签小程序路径</li>
<li><strong>H5</strong>：适用于跳转至电子签H5实名页面的长链接</li>
<li><strong>H5_SHORT_URL</strong>：适用于跳转至电子签H5实名页面的短链接</li>
</ul>

注：如果不传递，默认值是 <font color="red"> APP </font>
   */
  Endpoint?: string
  /**
   * 签署完成后是否自动回跳
<ul><li>false：否, 实名完成不会自动跳转回来(默认)</li><li>true：是, 实名完成会自动跳转回来</li></ul>

注: 
1. 该参数<font color="red">只针对APP类型（第三方APP或小程序跳转电子签小程序）场景</font> 的实名链接有效
2. <font color="red">手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑</font>, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)
3. <font color="red">电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制）</font> 
   */
  AutoJumpBack?: boolean
  /**
   * 在用户完成实名认证后，其自定义数据将通过[企业引导个人实名认证后回调](https://qian.tencent.com/developers/company/callback_types_staffs/#%E5%8D%81%E4%BA%8C-%E4%BC%81%E4%B8%9A%E5%BC%95%E5%AF%BC%E4%B8%AA%E4%BA%BA%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81%E5%90%8E%E5%9B%9E%E8%B0%83)返回，以便用户确认其个人数据信息。请注意，自定义数据的字符长度上限为1000，且必须采用base64编码格式。
   */
  UserData?: string
}

/**
 * CreatePartnerAutoSignAuthUrl请求参数结构体
 */
export interface CreatePartnerAutoSignAuthUrlRequest {
  /**
   * 代理企业和员工的信息。<br/>在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 执行本接口操作的员工信息。<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 被授企业id/授权方企业id（即OrganizationId），和AuthorizedOrganizationName二选一传入
   */
  AuthorizedOrganizationId?: string
  /**
   * 被授企业名称/授权方企业的名字，和AuthorizedOrganizationId二选一传入即可。请确认该名称与企业营业执照中注册的名称一致。
注: `如果名称中包含英文括号()，请使用中文括号（）代替。`
   */
  AuthorizedOrganizationName?: string
  /**
   * 在设置印章授权时，可以指定特定的印章类型，以确保在授权过程中只使用相应类型的印章。支持的印章类型包括：

<ul>
<li><strong>OFFICIAL</strong>：企业公章，用于代表企业对外的正式文件和重要事务的认证。</li>
<li><strong>CONTRACT</strong>：合同专用章，专门用于签署各类合同。</li>
<li><strong>FINANCE</strong>：财务专用章，用于企业的财务相关文件，如发票、收据等财务凭证的认证。</li>
<li><strong>PERSONNEL</strong>：人事专用章，用于人事管理相关文件，如劳动合同、人事任命等。</li>
</ul>
   */
  SealTypes?: Array<string>
  /**
   * 在处理授权关系时，授权的方向
<ul>
<li><strong>false</strong>（默认值）：表示我方授权他方。在这种情况下，<code>AuthorizedOrganizationName</code> 代表的是【被授权方】的企业名称，即接收授权的企业。</li>
<li><strong>true</strong>：表示他方授权我方。在这种情况下，<code>AuthorizedOrganizationName</code> 代表的是【授权方】的企业名称，即提供授权的企业。</li>
</ul>
   */
  AuthToMe?: boolean
}

/**
 * 创建员工的失败数据
 */
export interface FailedCreateStaffData {
  /**
   * 员工名
   */
  DisplayName?: string
  /**
   * 员工手机号
   */
  Mobile?: string
  /**
   * 传入的企微账号id
   */
  WeworkOpenId?: string
  /**
   * 失败原因
   */
  Reason?: string
}

/**
 * CreateExtendedServiceAuthInfos返回参数结构体
 */
export interface CreateExtendedServiceAuthInfosResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集团子企业使用集团主企业的套餐使用情况
 */
export interface SubOrgBillUsage {
  /**
   * 套餐使用数
   */
  Used?: number
  /**
   * 套餐类型
对应关系如下:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
</ul>
   */
  QuotaType?: string
}

/**
 * 指定签署人限制项
 */
export interface ApproverRestriction {
  /**
   * 指定签署人名字
   */
  Name?: string
  /**
   * 指定签署人手机号，11位数字
   */
  Mobile?: string
  /**
   * 指定签署人证件类型，ID_CARD-身份证
   */
  IdCardType?: string
  /**
   * 指定签署人证件号码，字母大写
   */
  IdCardNumber?: string
}

/**
 * CreateWebThemeConfig请求参数结构体
 */
export interface CreateWebThemeConfigRequest {
  /**
   * 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 主题类型，取值如下：
<ul><li> **EMBED_WEB_THEME**：嵌入式主题（默认），web页面嵌入的主题风格配置</li>
</ul>
   */
  ThemeType: string
  /**
   * 电子签logo是否展示，主体颜色等配置项
   */
  WebThemeConfig: WebThemeConfig
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 签署方信息，发起合同后可获取到对应的签署方信息，如角色ID，角色名称
 */
export interface ApproverItem {
  /**
   * 签署方唯一编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignId?: string
  /**
   * 签署方角色编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecipientId?: string
  /**
   * 签署方角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverRoleName?: string
}

/**
 * CreateOrganizationBatchSignUrl请求参数结构体
 */
export interface CreateOrganizationBatchSignUrlRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
支持填入集团子公司经办人 userId 代发合同。

注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 请指定需执行批量签署的流程ID，数量范围为1-100。
您可登录腾讯电子签控制台，浏览 "合同"->"合同中心" 以查阅某一合同的FlowId（在页面中显示为合同ID）。
用户将利用链接对这些合同实施批量操作。
   */
  FlowIds: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 员工在腾讯电子签平台的独特身份标识，为32位字符串。
您可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查阅某位员工的UserId（在页面中显示为用户ID）。
UserId必须是传入合同（FlowId）中的签署人。

<ul>
<li>1. 若UserId为空，Name和Mobile 必须提供。</li>
<li>2. 若UserId 与 Name，Mobile均存在，将优先采用UserId对应的员工。</li>
</ul>
   */
  UserId?: string
  /**
   * 员工姓名，必须与手机号码一起使用。
如果UserId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。
   */
  Name?: string
  /**
   * 员工手机号，必须与姓名一起使用。
 如果UserId为空，则此字段不能为空。同时，姓名和手机号码必须与传入合同（FlowId）中的签署人信息一致。
   */
  Mobile?: string
  /**
   * 为签署方经办人在签署合同中的参与方ID，必须与参数FlowIds数组一一对应。
您可以通过查询合同接口（DescribeFlowInfo）查询此参数。
若传了此参数，则可以不传 UserId, Name, Mobile等参数
   */
  RecipientIds?: Array<string>
}

/**
 * 企业角色数据信息
 */
export interface IntegrateRole {
  /**
   * 角色id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleId?: string
  /**
   * 角色名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleName?: string
  /**
   * 角色状态，1-启用，2-禁用
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleStatus?: number
  /**
   * 是否是集团角色，true-是，false-否
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsGroupRole?: boolean
  /**
   * 管辖的子企业列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubOrgIdList?: Array<string>
  /**
   * 权限树
注意：此字段可能返回 null，表示取不到有效值。
   */
  PermissionGroups?: Array<PermissionGroup>
}

/**
 * CreatePrepareFlow返回参数结构体
 */
export interface CreatePrepareFlowResponse {
  /**
   * 发起流程的web页面链接，有效期5分钟
   */
  Url?: string
  /**
   * 创建的合同id（还未实际发起），每次调用会生成新的id，用户可以记录此字段对应后续页面发起的合同，若在页面上未成功发起，则此字段无效。
   */
  FlowId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationDepartment返回参数结构体
 */
export interface ModifyIntegrationDepartmentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTaskResultApi返回参数结构体
 */
export interface GetTaskResultApiResponse {
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务状态，需要关注的状态
<ul><li>**0**  :NeedTranform   - 任务已提交</li>
<li>**4**  :Processing     - 文档转换中</li>
<li>**8**  :TaskEnd        - 任务处理完成</li>
<li>**-2** :DownloadFailed - 下载失败</li>
<li>**-6** :ProcessFailed  - 转换失败</li>
<li>**-13**:ProcessTimeout - 转换文件超时</li></ul>
   */
  TaskStatus?: number
  /**
   * 状态描述，需要关注的状态
<ul><li> **NeedTranform** : 任务已提交</li>
<li> **Processing** : 文档转换中</li>
<li> **TaskEnd** : 任务处理完成</li>
<li> **DownloadFailed** : 下载失败</li>
<li> **ProcessFailed** : 转换失败</li>
<li> **ProcessTimeout** : 转换文件超时</li></ul>
   */
  TaskMessage?: string
  /**
   * 资源Id（即FileId），用于[用PDF文件创建签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowByFiles)
   */
  ResourceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 更新员工信息失败返回的数据信息
 */
export interface FailedUpdateStaffData {
  /**
   * 用户传入的名称
   */
  DisplayName?: string
  /**
   * 用户传入的手机号，明文展示
   */
  Mobile?: string
  /**
   * 失败原因
   */
  Reason?: string
  /**
   * 员工在腾讯电子签平台的唯一身份标识，为32位字符串。
可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
   */
  UserId?: string
  /**
   * 员工在第三方平台的openId
   */
  OpenId?: string
}

/**
 * DescribeOrganizationVerifyStatus请求参数结构体
 */
export interface DescribeOrganizationVerifyStatusRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 子企业套餐使用情况
 */
export interface SubOrgBillSummary {
  /**
   * 子企业名称
   */
  OrganizationName?: string
  /**
   *
   */
  Usage?: Array<SubOrgBillUsage>
}

/**
 * 删除员工结果
 */
export interface DeleteStaffsResult {
  /**
   * 删除员工的成功数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessEmployeeData: Array<SuccessDeleteStaffData>
  /**
   * 删除员工的失败数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedEmployeeData: Array<FailedDeleteStaffData>
}

/**
 * CancelMultiFlowSignQRCode请求参数结构体
 */
export interface CancelMultiFlowSignQRCodeRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 需要取消的签署码ID，为32位字符串。由[创建一码多签签署码](https://qian.tencent.com/developers/companyApis/startFlows/CreateMultiFlowSignQRCode/)返回
   */
  QrCodeId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DeleteIntegrationDepartment请求参数结构体
 */
export interface DeleteIntegrationDepartmentRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 电子签中的部门ID，通过<a href="https://qian.tencent.com/developers/companyApis/organizations/DescribeIntegrationDepartments" target="_blank">DescribeIntegrationDepartments</a>接口可获得。
   */
  DeptId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 交接部门ID。
待删除部门中的合同、印章和模板数据，将会被交接至该部门ID下；若未填写则交接至公司根部门。
   */
  ReceiveDeptId?: string
}

/**
 * CancelUserAutoSignEnableUrl返回参数结构体
 */
export interface CancelUserAutoSignEnableUrlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationCallbackInfo请求参数结构体
 */
export interface ModifyApplicationCallbackInfoRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 操作类型：
1-新增
2-删除
   */
  OperateType: number
  /**
   * 企业应用回调信息
   */
  CallbackInfo: CallbackInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateFileCounterSign返回参数结构体
 */
export interface CreateFileCounterSignResponse {
  /**
   * 加签任务的状态。

<ul>
<li><b>PROCESSING</b>: 任务正在执行中。</li>
<li><b>FINISHED</b>: 已执行成功</li>
</ul>
   */
  Status?: string
  /**
   * 加签完成后新的文件Id
   */
  ResultFileId?: string
  /**
   * 异步模式下用于轮询状态的任务Id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数字加签文件验签结果
 */
export interface VerifyDigitFileResult {
  /**
   * 证书起始时间的Unix时间戳，单位毫秒
   */
  CertNotBefore?: number
  /**
   * 证书过期时间的时间戳，单位毫秒
   */
  CertNotAfter?: number
  /**
   * 证书序列号，在数字证书申请过程中，系统会自动生成一个独一无二的序号。
   */
  CertSn?: string
  /**
   * 证书签名算法, 如SHA1withRSA等算法
   */
  SignAlgorithm?: string
  /**
   * 签署时间的Unix时间戳，单位毫秒
   */
  SignTime?: number
  /**
   * 签名类型。0表示带签章的数字签名，1表示仅数字签名
   */
  SignType?: number
  /**
   * 申请证书的主体的名字

如果是在腾讯电子签平台签署, 则对应的主体的名字个数如下
**企业**:  ESS@企业名称@编码
**个人**: ESS@个人姓名@证件号@808854

如果在其他平台签署的, 主体的名字参考其他平台的说明
   */
  SignerName?: string
}

/**
 * StartFlow请求参数结构体
 */
export interface StartFlowRequest {
  /**
   * 本合同的发起人，<a href="https://qcloudimg.tencent-cloud.cn/raw/f850cfbe163a1cb38439a9f551c2505c.png" target="_blank">点击查看合同发起人展示的位置</a>
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
此处需要传入[创建签署流程接口](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlow)得到的FlowId。
   */
  FlowId: string
  /**
   * 客户端Token，保持接口幂等性,最大长度64个字符
   * @deprecated
   */
  ClientToken?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 若在创建签署流程时指定了关注人CcInfos，此参数可设定向关注人发送短信通知的类型：
<ul><li> **0** :合同发起时通知通知对方来查看合同（默认）</li>
<li> **1** : 签署完成后通知对方来查看合同</li></ul>
   */
  CcNotifyType?: number
}

/**
 * CreateSeal返回参数结构体
 */
export interface CreateSealResponse {
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
   */
  SealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrepareFlow请求参数结构体
 */
export interface CreatePrepareFlowRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
支持填入集团子公司经办人 userId 代发合同。

注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 资源id，与ResourceType相对应，取值范围：
<ul>
<li>文件Id（通过UploadFiles获取文件资源Id）</li>
<li>模板Id（通过控制台创建模板后获取模板Id）</li>
</ul>
注意：需要同时设置 ResourceType 参数指定资源类型
   */
  ResourceId: string
  /**
   * 自定义的合同流程的名称，长度不能超过200个字符，只能由中文汉字、中文标点、英文字母、阿拉伯数字、空格、小括号、中括号、中划线、下划线以及（,）、（;）、（.）、(&)、（+）组成。

该名称还将用于合同签署完成后文件下载的默认文件名称。
   */
  FlowName: string
  /**
   * 资源类型，取值有：
<ul><li> **1**：模板</li>
<li> **2**：文件（默认值）</li></ul>
   */
  ResourceType?: number
  /**
   * 合同流程的签署顺序类型：
<ul><li> **false**：(默认)有序签署, 本合同多个参与人需要依次签署 </li>
<li> **true**：无序签署, 本合同多个参与人没有先后签署限制</li></ul>
   */
  Unordered?: boolean
  /**
   * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。

   */
  Deadline?: number
  /**
   * 用户自定义合同类型Id

该id为电子签企业内的合同类型id， 可以在控制台-合同-自定义合同类型处获取
注: `该参数如果和FlowType同时传，以该参数优先生效`
   */
  UserFlowTypeId?: string
  /**
   * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
   */
  FlowType?: string
  /**
   * 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。

如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。
   */
  Approvers?: Array<FlowCreateApprover>
  /**
   * 开启或者关闭智能添加填写区：
<ul><li> **OPEN**：开启（默认值）</li>
<li> **CLOSE**：关闭</li></ul>
   */
  IntelligentStatus?: string
  /**
   * 该字段已废弃，请使用InitiatorComponents
   */
  Components?: Component
  /**
   * 发起合同个性化参数
用于满足创建及页面操作过程中的个性化要求
具体定制化内容详见数据接口说明
   */
  FlowOption?: CreateFlowOption
  /**
   * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
<ul><li> **false**：（默认）不需要审批，直接签署。</li>
<li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
<ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
<li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
   */
  NeedSignReview?: boolean
  /**
   * 发起方企业的签署人进行发起操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。

若设置为true，发起审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行发起操作，否则会阻塞其发起操作。


   */
  NeedCreateReview?: boolean
  /**
   * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。

在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
  /**
   * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。

   */
  CcInfos?: Array<CcInfo>
  /**
   * 合同Id：用于通过一个已发起的合同快速生成一个发起流程web链接
注: `该参数必须是一个待发起审核的合同id，并且还未审核通过`
   */
  FlowId?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体

   */
  InitiatorComponents?: Array<Component>
  /**
   * 在短信通知、填写、签署流程中，若标题、按钮、合同详情等地方存在“合同”字样时，可根据此配置指定文案，可选文案如下：  <ul><li> <b>0</b> :合同（默认值）</li> <li> <b>1</b> :文件</li> <li> <b>2</b> :协议</li></ul>效果如下:![FlowDisplayType](https://qcloudimg.tencent-cloud.cn/raw/e4a2c4d638717cc901d3dbd5137c9bbc.png)
   */
  FlowDisplayType?: number
}

/**
 * 签署人个性化能力信息
 */
export interface ApproverOption {
  /**
   * 签署方是否可以拒签

<ul><li> **false** : ( 默认)可以拒签</li>
<li> **true** :不可以拒签</li></ul>
   */
  NoRefuse?: boolean
  /**
   * 签署方是否可以转他人处理

<ul><li> **false** : ( 默认)可以转他人处理</li>
<li> **true** :不可以转他人处理</li></ul>
   */
  NoTransfer?: boolean
  /**
   * 允许编辑签署人信息（嵌入式使用） 默认true-可以编辑 false-不可以编辑
   */
  CanEditApprover?: boolean
  /**
   * 签署人信息补充类型，默认无需补充。

<ul><li> **1** :  动态签署人（可发起合同后再补充签署人信息）注：`企业自动签不支持动态补充`</li></ul>

注：
`使用动态签署人能力前，需登陆腾讯电子签控制台打开服务开关`
   */
  FillType?: number
  /**
   * 签署人阅读合同限制参数
 <br/>取值：
<ul>
<li> LimitReadTimeAndBottom，阅读合同必须限制阅读时长并且必须阅读到底</li>
<li> LimitReadTime，阅读合同仅限制阅读时长</li>
<li> LimitBottom，阅读合同仅限制必须阅读到底</li>
<li> NoReadTimeAndBottom，阅读合同不限制阅读时长且不限制阅读到底（白名单功能，请联系客户经理开白使用）</li>
</ul>
   */
  FlowReadLimit?: string
  /**
   * 禁止在签署过程中添加签署日期控件
 <br/>前置条件：文件发起合同时，指定SignBeanTag=1（可以在签署过程中添加签署控件）：
<ul>
<li> 默认值：false，在开启：签署过程中添加签署控件时，添加签署控件会默认自带签署日期控件</li>
<li> 可选值：true，在开启：签署过程中添加签署控件时，添加签署控件不会自带签署日期控件</li>
</ul>
   */
  ForbidAddSignDate?: boolean
}

/**
 * DescribeCancelFlowsTask请求参数结构体
 */
export interface DescribeCancelFlowsTaskRequest {
  /**
   * 执行本接口操作的员工信息。
<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 批量撤销任务编号，为32位字符串，通过接口[获取批量撤销签署流程腾讯电子签小程序链接](https://qian.tencent.com/developers/companyApis/operateFlows/CreateBatchCancelFlowUrl)获得。
   */
  TaskId: string
  /**
   * 代理企业和员工的信息。
<br/>在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateEmbedWebUrl返回参数结构体
 */
export interface CreateEmbedWebUrlResponse {
  /**
   * 嵌入的web链接，有效期：5分钟
<br/>EmbedType=PREVIEW_CC_FLOW，该url为h5链接
   */
  WebUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyExtendedService返回参数结构体
 */
export interface ModifyExtendedServiceResponse {
  /**
   * 操作跳转链接
<ul>
<li><strong>有效期：</strong> 跳转链接的有效期为24小时。</li>
<li><strong>无跳转链接返回的情况：</strong> 如果在操作过程中没有返回跳转链接，这意味着无需进行跳转操作。在这种情况下，服务将会直接被开通或关闭。
<li><strong>有跳转链接返回的情况：</strong> 当操作类型为“OPEN”（开通服务），并且扩展服务类型为以下之一时，  系统将返回一个操作链接。当前操作人（超级管理员或法人）需要点击此链接，以完成服务的开通操作。

<ul>
<li><strong>OPEN_SERVER_SIGN</strong>（企业自动签署）</li>
</ul></li></li>
</ul>
   */
  OperateUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowGroupByTemplates请求参数结构体
 */
export interface CreateFlowGroupByTemplatesRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同（流程）组名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
   */
  FlowGroupName: string
  /**
   * 合同（流程）组的子合同信息，支持2-50个子合同
   */
  FlowGroupInfos: Array<FlowGroupInfo>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 合同（流程）组的配置项信息。
其中包括：
<ul>
<li>是否通知本企业签署方</li>
<li>是否通知其他签署方</li>
</ul>
   */
  FlowGroupOptions?: FlowGroupOptions
}

/**
 * 合同组相关信息，指定合同组子合同和签署方的信息，用于补充动态签署人。
 */
export interface FlowGroupApproverInfo {
  /**
   * 合同流程ID。
   */
  FlowId?: string
  /**
   * 签署节点ID，用于生成动态签署人链接完成领取。注：`生成动态签署人补充链接时必传。`
   */
  RecipientId?: string
}

/**
 * DescribeFileCounterSignResult返回参数结构体
 */
export interface DescribeFileCounterSignResultResponse {
  /**
   * 加签任务的状态。

<ul>
<li><b>PROCESSING</b>: 任务正在执行中。</li>
<li><b>FINISHED</b>: 已执行成功</li>
<li><b>FAILED</b>: 执行失败</li>
</ul>
   */
  Status?: string
  /**
   * 加签完成后新的文件Id
   */
  ResultFileId?: string
  /**
   * 失败的错误信息，加签任务失败的情况下会返回。
   */
  ErrorDetail?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权限树中的权限组
 */
export interface PermissionGroup {
  /**
   * 权限组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 权限组key
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupKey?: string
  /**
   * 是否隐藏分组，0否1是
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hide?: number
  /**
   * 权限集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions?: Array<Permission>
}

/**
 * CancelFlow请求参数结构体
 */
export interface CancelFlowRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID, 为32位字符串。

可登录腾讯电子签控制台，[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowId: string
  /**
   * 撤销此合同流程的**撤销理由**，最多支持200个字符长度。只能由中文、字母、数字、中文标点和英文标点组成（不支持表情）。

![image](https://qcloudimg.tencent-cloud.cn/raw/f16cf37dbb3a09d6569877f093b92204/channel_ChannelCancelFlow.png)
   */
  CancelMessage: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 此结构体 (UploadFile) 用于描述多文件上传的文件信息。
 */
export interface UploadFile {
  /**
   * Base64编码后的文件内容
   */
  FileBody: string
  /**
   * 文件的名字。
文件名的最大长度应不超过200个字符，并且文件名的后缀必须反映其文件类型。
例如，PDF文件应以“.pdf”结尾，如“XXX.pdf”，而Word文件应以“.doc”或“.docx”结尾，如“XXX.doc”或“XXX.docx”。
   */
  FileName?: string
}

/**
 * 此结构体 (Component) 用于描述控件属性。

在通过文件发起合同时，对应的component有三种定位方式
1. 绝对定位方式 （可以通过 [PDF坐标计算助手](https://qian.tencent.com/developers/tools/template-editor)计算控件的坐标）
2. 表单域(FIELD)定位方式
3. 关键字(KEYWORD)定位方式，使用关键字定位时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找
 */
export interface Component {
  /**
   * **如果是Component填写控件类型，则可选的字段为**：

<ul><li> <b>TEXT</b> : 普通文本控件，输入文本字符串；</li>
<li> <b>MULTI_LINE_TEXT</b> : 多行文本控件，输入文本字符串；</li>
<li> <b>CHECK_BOX</b> : 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；</li>
<li> <b>FILL_IMAGE</b> : 图片控件，ComponentValue 填写图片的资源 ID；</li>
<li> <b>DYNAMIC_TABLE</b> : 动态表格控件；</li>
<li> <b>ATTACHMENT</b> : 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分隔；</li>
<li> <b>SELECTOR</b> : 选择器控件，ComponentValue填写选择的字符串内容；</li>
<li> <b>DATE</b> : 日期控件；默认是格式化为xxxx年xx月xx日字符串；</li>
<li> <b>WATERMARK</b> : 水印控件；只能分配给发起方，必须设置ComponentExtra；</li>
<li> <b>DISTRICT</b> : 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；</li></ul>

**如果是SignComponent签署控件类型，
需要根据签署人的类型可选的字段为**
* 企业方
<ul><li> <b>SIGN_SEAL</b> : 签署印章控件；</li>
<li> <b>SIGN_DATE</b> : 签署日期控件；</li>
<li> <b>SIGN_SIGNATURE</b> : 用户签名控件；</li>
<li> <b>SIGN_PAGING_SEAL</b> : 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight</li>
<li> <b>SIGN_OPINION</b> : 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认；</li>
<li> <b>SIGN_VIRTUAL_COMBINATION</b> : 签批控件。内部最多组合4个特定控件（SIGN_SIGNATURE，SIGN_DATA,SIGN_MULTI_LINE_TEXT,SIGN_SELECTOR），本身不填充任何文字内容</li>
<li> <b>SIGN_MULTI_LINE_TEXT</b> : 多行文本，<font color="red">仅可用在签批控件内部作为组合控件，单独无法使用</font>，常用作批注附言</li>
<li> <b>SIGN_SELECTOR</b> : 选择器，<font color="red">仅可用在签批控件内部作为组合控件，单独无法使用</font>，常用作审批意见的选择</li>
<li> <b>SIGN_LEGAL_PERSON_SEAL</b> : 企业法定代表人控件。</li></ul>

* 个人方
<ul><li> <b>SIGN_DATE</b> : 签署日期控件；</li>
<li> <b>SIGN_SIGNATURE</b> : 用户签名控件；</li>
<li> <b>SIGN_VIRTUAL_COMBINATION</b> : 签批控件。内部最多组合4个特定控件（SIGN_SIGNATURE，SIGN_DATA,SIGN_MULTI_LINE_TEXT,SIGN_SELECTOR），本身不填充任何文字内容</li>
<li> <b>SIGN_MULTI_LINE_TEXT</b> : 多行文本，<font color="red">仅可用在签批控件内部作为组合控件，单独无法使用</font>，常用作批注附言</li>
<li> <b>SIGN_SELECTOR</b> : 选择器，<font color="red">仅可用在签批控件内部作为组合控件，单独无法使用</font>，常用作审批意见的选择</li>
<li> <b>SIGN_OPINION</b> : 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认；</li></ul>
 
注：` 表单域的控件不能作为印章和签名控件`
   */
  ComponentType: string
  /**
   * **在绝对定位方式和关键字定位方式下**，指定控件的高度， 控件高度是指控件在PDF文件中的高度，单位为pt（点）。

   */
  ComponentHeight: number
  /**
   * **在绝对定位方式和关键字定位方式下**，指定控件宽度，控件宽度是指控件在PDF文件中的宽度，单位为pt（点）。

   */
  ComponentWidth: number
  /**
   * **在绝对定位方式方式下**，指定控件所在PDF文件上的页码
**在使用文件发起的情况下**，绝对定位方式的填写控件和签署控件支持使用负数来指定控件在PDF文件上的页码，使用负数时，页码从最后一页开始。例如：ComponentPage设置为-1，即代表在PDF文件的最后一页，以此类推。

注：
1. 页码编号是从<font color="red">1</font>开始编号的。
2.  <font color="red">页面编号不能超过PDF文件的页码总数</font>。如果指定的页码超过了PDF文件的页码总数，在填写和签署时会出现错误，导致无法正常进行操作。
   */
  ComponentPage: number
  /**
   * **在绝对定位方式和关键字定位方式下**，可以指定控件横向位置的位置，单位为pt（点）。
   */
  ComponentPosX: number
  /**
   * **在绝对定位方式和关键字定位方式下**，可以指定控件纵向位置的位置，单位为pt（点）。
   */
  ComponentPosY: number
  /**
   * <font color="red">【暂未使用】</font>控件所属文件的序号（取值为：0-N）。 目前单文件的情况下，值一直为0
   */
  FileIndex: number
  /**
   * 控件生成的方式：
<ul><li> <b>NORMAL</b> : 绝对定位控件</li>
<li> <b>FIELD</b> : 表单域</li>
<li> <b>KEYWORD</b> : 关键字（设置关键字时，请确保PDF原始文件内是关键字以文字形式保存在PDF文件中，不支持对图片内文字进行关键字查找）</li></ul>
   */
  GenerateMode?: string
  /**
   * 控件唯一ID。

**在绝对定位方式方式下**，ComponentId为控件的ID，长度不能超过30，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。

**在关键字定位方式下**，ComponentId不仅为控件的ID，也是关键字整词。此方式下可以通过"^"来决定是否使用关键字整词匹配能力。

例：

- 如传入的关键字<font color="red">"^甲方签署^"</font >，则会在PDF文件中有且仅有"甲方签署"关键字的地方（<font color="red">前后不能有其他字符</font >）进行对应操作。
- 如传入的关键字为<font color="red">"甲方签署</font >"，则PDF文件中每个出现关键字的位置（<font color="red">前后可以有其他字符</font >）都会执行相应操作。


注：`控件ID可以在一个PDF中不可重复`

<a href="https://qcloudimg.tencent-cloud.cn/raw/93178569d07b4d7dbbe0967ae679e35c.png" target="_blank">点击查看ComponentId在模板编辑页面的位置</a>

   */
  ComponentId?: string
  /**
   * **在绝对定位方式方式下**，ComponentName为控件名，长度不能超过20，只能由中文、字母、数字和下划线组成，可以在后续的操作中使用该名称来引用控件。

**在表单域定位方式下**，ComponentName不仅为控件名，也是表单域名称。

注：`控件名可以在一个PDF中可以重复`

<a href="https://qcloudimg.tencent-cloud.cn/raw/93178569d07b4d7dbbe0967ae679e35c.png" target="_blank">点击查看ComponentName在模板页面的位置</a>
   */
  ComponentName?: string
  /**
   * 如果是<b>填写控件</b>，ComponentRequired表示在填写页面此控件是否必填
<ul><li>false（默认）：可以不填写</li>
<li>true ：必须填写此填写控件</li></ul>
如果是<b>签署控件</b>，签批控件中签署意见等可以不填写， 其他签署控件不受此字段影响
   */
  ComponentRequired?: boolean
  /**
   * **在通过接口拉取控件信息场景下**，为出参参数，此控件归属的参与方的角色ID角色（即RecipientId），**发起合同时候不要填写此字段留空即可**
   */
  ComponentRecipientId?: string
  /**
   * **在所有的定位方式下**，控件的扩展参数，为<font color="red">JSON格式</font>，不同类型的控件会有部分非通用参数。

<font color="red">ComponentType为TEXT、MULTI_LINE_TEXT时</font>，支持以下参数：
<ul><li> <b>Font</b>：目前只支持黑体、宋体</li>
<li> <b>FontSize</b>： 范围12 :72</li>
<li> <b>FontAlign</b>： Left/Right/Center，左对齐/居中/右对齐</li>
<li> <b>FontColor</b>：字符串类型，格式为RGB颜色数字</li></ul>
<b>参数样例</b>：`{"FontColor":"255,0,0","FontSize":12}`

<font color="red">ComponentType为DATE时</font>，支持以下参数：
<ul><li> <b>Font</b>：目前只支持黑体、宋体</li>
<li> <b>FontSize</b>： 范围12 :72</li></ul>
<b>参数样例</b>：`{"FontColor":"255,0,0","FontSize":12}`

<font color="red">ComponentType为WATERMARK时</font>，支持以下参数：
<ul><li> <b>Font</b>：目前只支持黑体、宋体</li>
<li> <b>FontSize</b>： 范围6 :24</li>
<li> <b>Opacity</b>： 透明度，范围0 :1</li>
<li> <b>Density</b>： 水印样式，1-宽松，2-标准（默认值），3-密集，</li>
<li> <b>SubType</b>： 水印类型：CUSTOM_WATERMARK-自定义内容，PERSON_INFO_WATERMARK-访问者信息</li></ul>
<b>参数样例</b>：`"{\"Font\":\"黑体\",\"FontSize\":20,\"Opacity\":0.1,\"Density\":2,\"SubType\":\"PERSON_INFO_WATERMARK\"}"`

<font color="red">ComponentType为FILL_IMAGE时</font>，支持以下参数：
<ul><li> <b>NotMakeImageCenter</b>：bool。是否设置图片居中。false：居中（默认）。 true : 不居中</li>
<li> <b>FillMethod</b> : int. 填充方式。0-铺满（默认）；1-等比例缩放</li></ul>

<font color="red">ComponentType为SIGN_SIGNATURE类型时</font>，可以通过**ComponentTypeLimit**参数控制签名方式
<ul><li> <b>HANDWRITE</b> :  需要实时手写的手写签名</li>
<li> <b>HANDWRITTEN_ESIGN</b> : 长效手写签名， 是使用保存到个人中心的印章列表的手写签名(并且包含HANDWRITE)</li>
<li> <b>OCR_ESIGN</b> : AI智能识别手写签名</li>
<li> <b>ESIGN</b> : 个人印章类型</li>
<li> <b>SYSTEM_ESIGN</b> : 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）</li>
<li> <b>IMG_ESIGN</b> : 图片印章(该类型支持用户在签署将上传的PNG格式的图片作为签名)</li></ul>
<b>参考样例</b>：`{"ComponentTypeLimit": ["SYSTEM_ESIGN"]}`
印章的对应关系参考下图
![image](https://qcloudimg.tencent-cloud.cn/raw/ee0498856c060c065628a0c5ba780d6b.jpg)<br><br>

<font color="red">ComponentType为SIGN_SEAL 或者 SIGN_PAGING_SEAL类型时</font>，可以通过**ComponentTypeLimit**参数控制签署方签署时要使用的印章类型，支持指定以下印章类型
<ul><li> <b>OFFICIAL</b> :  企业公章</li>
<li> <b>CONTRACT</b> : 合同专用章</li>
<li> <b>FINANCE</b> : 财务专用章</li>
<li> <b>PERSONNEL</b> : 人事专用章</li>
<li> <b>OTHER</b> : 其他</li>
</ul>
<b>参考样例</b>：`{\"ComponentTypeLimit\":[\"PERSONNEL\",\"FINANCE\"]}` 表示改印章签署区,客户需使用人事专用章或财务专用章盖章签署。<br><br>

<font color="red">ComponentType为SIGN_DATE时</font>，支持以下参数：
<ul><li> <b>Font</b> :字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体"</li>
<li> <b>FontSize</b> : 数字类型，范围6-72，默认值为12</li>
<li> <b>FontAlign</b> : 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐</li>
<li> <b>Format</b> : 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。</li>
<li> <b>Gaps</b> : 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数</li></ul>
如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期
特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）
<b>参数样例</b>： ` "{"Format":"yyyy m d","FontSize":12,"Gaps":"2,2", "FontAlign":"Right"}"`

<font color="red">ComponentType为SIGN_SEAL、SIGN_SIGNATURE类型时</font>，支持以下参数：
<ul><li> <b>PageRanges</b> :PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）</li></ul>
<b>参数样例</b>：` "{"PageRanges":[{"BeginPage":1,"EndPage":-1}]}"`

<font color="red">签署印章透明度功能设置，</font>当ComponentType为SIGN_SIGNATURE、SIGN_SEAL、SIGN_PAGING_SEAL、SIGN_LEGAL_PERSON_SEAL时，可以通过以下参数设置签署印章的透明度：
<ul><li> <b>Opacity</b>：印章透明度，支持范围：0.6-1，0.7表示70%的透明度，1表示无透明度</li></ul>
<b>参数样例</b>：`{"Opacity":0.7}`

<font color="red">签署印章大小功能设置，</font>当ComponentType为SIGN_SEAL、SIGN_PAGING_SEAL、SIGN_LEGAL_PERSON_SEAL时，可以通过以下参数设置签署时按照实际印章的大小进行签署，如果印章没有设置大小，那么默认会是4.2cm的印章大小：
<ul><li> <b>UseSealSize</b>：使用印章设置的大小盖章，true表示使用印章设置的大小盖章，false表示使用签署控件的大小进行盖章；不传则为false</li></ul>
<b>参数样例</b>：`{"UseSealSize":true}`

<font color="red">关键字模式下支持关键字找不到的情况下不进行报错的设置</font>
<ul><li> <b>IgnoreKeywordError</b> :1-关键字查找不到时不进行报错</li></ul>
场景说明：如果使用关键字进行定位，但是指定的PDF文件中又没有设置的关键字时，发起合同会进行关键字是否存在的校验，如果关键字不存在，会进行报错返回。如果不希望进行报错，可以设置"IgnoreKeywordError"来忽略错误。请注意，如果关键字签署控件对应的签署方在整个PDF文件中一个签署控件都没有，还是会触发报错逻辑。
<b>参数样例</b>：` "{"IgnoreKeywordError":1}"`

<font color="red">ComponentType为SIGN_VIRTUAL_COMBINATION时</font>，支持以下参数：
<ul>
<li><b>Children:</b> 绝对定位模式下，用来指定此签批控件的组合子控件 </li>
<b>参数样例</b>：<br>`{"Children":["ComponentId_29","ComponentId_27","ComponentId_28","ComponentId_30"]}`
<li><b>ChildrenComponents:</b> 关键字定位模式下，用来指定此签批控件的组合子控件 </li>
ChildrenComponent结构体定义:
<table border="1">     <thead>         <tr>             <th>字段名称</th>             <th>类型</th>             <th>描述</th>         </tr>     </thead>     <tbody>         <tr>             <td>ComponentType</td>             <td>string</td>             <td>子控件类型-可选值:SIGN_SIGNATURE,SIGN_DATE,SIGN_SELECTOR,SIGN_MULTI_LINE_TEXT</td>         </tr>         <tr>             <td>ComponentName</td>             <td>string</td>             <td>子控件名称</td>         </tr>         <tr>             <td>Placeholder</td>             <td>string</td>             <td>子控件提示语</td>         </tr>         <tr>             <td>ComponentOffsetX</td>             <td>float</td>             <td>控件偏移位置X（相对于父控件（签批控件的ComponentX））</td>         </tr>         <tr>             <td>ComponentOffsetY</td>             <td>float</td>             <td>控件偏移位置Y 相对于父控件（签批控件的ComponentY））</td>         </tr>         <tr>             <td>ComponentWidth</td>             <td>float</td>             <td>控件宽</td>         </tr>         <tr>             <td>ComponentHeight</td>             <td>float</td>             <td>控件高</td>         </tr>         <tr>             <td>ComponentExtra</td>             <td>string</td>             <td>控件的附属信息，根据ComponentType设置</td>         </tr>     </tbody> </table>
<b>参数样例</b>：
  
输入:
<pre>
{
    ChildrenComponents: [
        {
            ComponentType: SIGN_SIGNATURE,
            ComponentName: 个人签名,
            Placeholder: 请签名,
            ComponentOffsetX: 10,
            ComponentOffsetY: 30,
            ComponentWidth: 119,
            ComponentHeight: 43,
            ComponentExtra: {\ComponentTypeLimit\:[\SYSTEM_ESIGN\]}
        },
        {
            ComponentType: SIGN_SELECTOR,
            ComponentName: 是否同意此协议,
            Placeholder: ,
            ComponentOffsetX: 50,
            ComponentOffsetY: 130,
            ComponentWidth: 120,
            ComponentHeight: 43,
            ComponentExtra: {\Values\:[\同意\,\不同意\,\再想想\],\FontSize\:12,\FontAlign\:\Left\,\Font\:\黑体\,\MultiSelect\:false}
        },
        {
            ComponentType: SIGN_MULTI_LINE_TEXT,
            ComponentName: 批注附言,
            Placeholder: ,
            ComponentOffsetX: 150,
            ComponentOffsetY: 300,
            ComponentWidth: 200,
            ComponentHeight: 86,
            ComponentExtra: 
        }
    ]
}
</pre>
</ul>


   */
  ComponentExtra?: string
  /**
   * **在通过接口拉取控件信息场景下**，为出参参数，此控件是否通过表单域定位方式生成，默认false-不是，**发起合同时候不要填写此字段留空即可**
   */
  IsFormType?: boolean
  /**
   * 控件填充vaule，ComponentType和传入值类型对应关系：
<ul><li> <b>TEXT</b> : 文本内容</li>
<li> <b>MULTI_LINE_TEXT</b> : 文本内容，可以用  \n 来控制换行位置 </li>
<li> <b>CHECK_BOX</b> : true/false</li>
<li> <b>FILL_IMAGE、ATTACHMENT</b> : 附件的FileId，需要通过UploadFiles接口上传获取</li>
<li> <b>SELECTOR</b> : 选项值</li>
<li> <b>DYNAMIC_TABLE</b>  - 传入json格式的表格内容，详见说明：[数据表格](https://qian.tencent.com/developers/company/dynamic_table)</li>
<li> <b>DATE</b> : 格式化为：xxxx年xx月xx日（例如2024年05年28日）</li>
<li> <b>SIGN_SEAL</b> : 印章ID，于控制台查询获取， [点击查看在控制台上位置](https://qcloudimg.tencent-cloud.cn/raw/f7b0f2ea4a534aada4b893dbf9671eae.png)</li>
<li> <b>SIGN_PAGING_SEAL</b> : 可以指定印章ID，于控制台查询获取， [点击查看在控制台上位置](https://qcloudimg.tencent-cloud.cn/raw/f7b0f2ea4a534aada4b893dbf9671eae.png)</li></ul>


<b>控件值约束说明</b>：
<table> <thead> <tr> <th>特殊控件</th> <th>填写约束</th> </tr> </thead> <tbody> <tr> <td>企业全称控件</td> <td>企业名称中文字符中文括号</td> </tr> <tr> <td>统一社会信用代码控件</td> <td>企业注册的统一社会信用代码</td> </tr> <tr> <td>法人名称控件</td> <td>最大50个字符，2到25个汉字或者1到50个字母</td> </tr> <tr> <td>签署意见控件</td> <td>签署意见最大长度为50字符</td> </tr> <tr> <td>签署人手机号控件</td> <td>国内手机号 13,14,15,16,17,18,19号段长度11位</td> </tr> <tr> <td>签署人身份证控件</td> <td>合法的身份证号码检查</td> </tr> <tr> <td>控件名称</td> <td>控件名称最大长度为20字符，不支持表情</td> </tr> <tr> <td>单行文本控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>多行文本控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>勾选框控件</td> <td>选择填字符串true，不选填字符串false</td> </tr> <tr> <td>选择器控件</td> <td>同单行文本控件约束，填写选择值中的字符串</td> </tr> <tr> <td>数字控件</td> <td>请输入有效的数字(可带小数点)</td> </tr> <tr> <td>日期控件</td> <td>格式：yyyy年mm月dd日</td> </tr> <tr> <td>附件控件</td> <td>JPG或PNG图片，上传数量限制，1到6个，最大6个附件，填写上传的资源ID</td> </tr> <tr> <td>图片控件</td> <td>JPG或PNG图片，填写上传的图片资源ID</td> </tr> <tr> <td>邮箱控件</td> <td>有效的邮箱地址, w3c标准</td> </tr> <tr> <td>地址控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>省市区控件</td> <td>只允许输入中文，英文，数字，中英文标点符号，不支持表情</td> </tr> <tr> <td>性别控件</td> <td>选择值中的字符串</td> </tr> <tr> <td>学历控件</td> <td>选择值中的字符串</td> </tr> <tr> <td>水印控件</td> <td>水印控件设置为CUSTOM_WATERMARK类型时的水印内容</td> </tr> </tbody> </table>
注：   `部分特殊控件需要在控制台配置模板形式创建`
   */
  ComponentValue?: string
  /**
   * **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行横坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏左或偏右，可以通过调整横坐标方向的参数来使控件位置更加准确。
注意： `向左调整设置为负数， 向右调整设置成正数`
注意：此字段可能返回 null，表示取不到有效值。
   */
  OffsetX?: number
  /**
   * **如果控件是关键字定位方式**，可以对关键字定位出来的区域进行纵坐标方向的调整，单位为pt（点）。例如，如果关键字定位出来的区域偏上或偏下，可以通过调整纵坐标方向的参数来使控件位置更加准确。
注意： `向上调整设置为负数， 向下调整设置成正数`
注意：此字段可能返回 null，表示取不到有效值。
   */
  OffsetY?: number
  /**
   * **如果控件是关键字定位方式**，指定关键字排序规则时，可以选择Positive或Reverse两种排序方式。
<ul><li> <b>Positive</b> :表示正序，即根据关键字在PDF文件内的顺序进行排列</li>
<li> <b>Reverse</b> :表示倒序，即根据关键字在PDF文件内的反序进行排列</li></ul>

在指定KeywordIndexes时，如果使用Positive排序方式，0代表在PDF内查找内容时，查找到的第一个关键字；如果使用Reverse排序方式，0代表在PDF内查找内容时，查找到的最后一个关键字。
   */
  KeywordOrder?: string
  /**
   * **如果控件是关键字定位方式**，在KeywordPage中指定关键字页码时，将只会在该页码中查找关键字，非该页码的关键字将不会查询出来。如果不设置查找所有页面中的关键字。
   */
  KeywordPage?: number
  /**
   * **如果控件是关键字定位方式**，关键字生成的区域的对齐方式， 可以设置下面的值
<ul><li> <b>Middle</b> :居中</li>
<li> <b>Below</b> :正下方</li>
<li> <b>Right</b> :正右方</li>
<li> <b>LowerRight</b> :右下角</li>
<li> <b>UpperRight</b> :右上角。</li></ul>
示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方
   */
  RelativeLocation?: string
  /**
   * **如果控件是关键字定位方式**，关键字索引是指在PDF文件中存在多个相同的关键字时，通过索引指定使用哪一个关键字作为最后的结果。可以通过指定多个索引来同时使用多个关键字。例如，[0,2]表示使用PDF文件内第1个和第3个关键字位置作为最后的结果。

注意：关键字索引是从0开始计数的
   */
  KeywordIndexes?: Array<number | bigint>
  /**
   * **web嵌入发起合同场景下**， 是否锁定填写和签署控件值不允许嵌入页面进行编辑
<ul><li>false（默认）：不锁定控件值，允许在页面编辑控件值</li>
<li>true：锁定控件值，在页面编辑控件值</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockComponentValue?: boolean
  /**
   * **web嵌入发起合同场景下**，是否禁止移动和删除填写和签署控件
<ul><li> <b>false（默认）</b> :不禁止移动和删除控件</li>
<li> <b>true</b> : 可以移动和删除控件</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForbidMoveAndDelete?: boolean
  /**
   * <font color="red">【暂未使用】</font>日期签署控件的字号，默认为 12
   */
  ComponentDateFontSize?: number
  /**
   * <font color="red">【暂未使用】</font>第三方应用集成平台模板控件 ID 标识
   */
  ChannelComponentId?: string
  /**
   * <font color="red">【暂未使用】</font>第三方应用集成中子客企业控件来源。
<ul><li> <b>0</b> :平台指定；</li>
<li> <b>1</b> :用户自定义</li></ul>
   */
  ChannelComponentSource?: number
}

/**
 * 部门信息
 */
export interface IntegrationDepartment {
  /**
   * 部门ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeptId?: string
  /**
   * 部门名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeptName?: string
  /**
   * 父部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentDeptId?: string
  /**
   * 客户系统部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeptOpenId?: string
  /**
   * 序列号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderNo?: number
}

/**
 * DescribeExtendedServiceAuthInfos请求参数结构体
 */
export interface DescribeExtendedServiceAuthInfosRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 要查询的扩展服务类型。
默认为空，即查询当前支持的所有扩展服务信息。
若需查询单个扩展服务的开通情况，请传递相应的值，如下所示：
<ul><li>OPEN_SERVER_SIGN：企业自动签署</li>
<li>AUTO_SIGN_CAN_FILL_IN：本企业自动签合同支持签前内容补充</li>
<li>BATCH_SIGN：批量签署</li>
<li>OVERSEA_SIGN：企业与港澳台居民签署合同</li>
<li>AGE_LIMIT_EXPANSION：拓宽签署方年龄限制</li>
<li>MOBILE_CHECK_APPROVER：个人签署方仅校验手机号</li>
<li>HIDE_OPERATOR_DISPLAY：隐藏合同经办人姓名</li>
<li>ORGANIZATION_OCR_FALLBACK：正楷临摹签名失败后更换其他签名类型</li>
<li>ORGANIZATION_FLOW_NOTIFY_TYPE：短信通知签署方</li>
<li>HIDE_ONE_KEY_SIGN：个人签署方手动签字</li>
<li>ORGANIZATION_FLOW_EMAIL_NOTIFY：邮件通知签署方</li>
<li>FLOW_APPROVAL：合同审批强制开启</li>
<li>ORGANIZATION_FLOW_PASSWD_NOTIFY：签署密码开通引导</li></ul>
   */
  ExtendServiceType?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeIntegrationRoles返回参数结构体
 */
export interface DescribeIntegrationRolesResponse {
  /**
   * OFFSET 用于指定查询结果的偏移量，如果不传默认偏移为0, 最大为2000
分页参数, 需要limit, offset 配合使用
例如:
您希望得到第三页的数据, 且每页限制最多10条
您可以使用 LIMIT 10 OFFSET 20
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，单页最大支持 200。
   */
  Limit?: number
  /**
   * 符合查询条件的总角色数。
   */
  TotalCount?: number
  /**
   * 企业角色信息列表。
   */
  IntegrateRoles?: Array<IntegrateRole>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchSignUrl请求参数结构体
 */
export interface CreateBatchSignUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 签署方经办人的姓名。
经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。

注：`请确保和合同中填入的一致`, `除动态签署人场景外，此参数必填`
   */
  Name?: string
  /**
   * 手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
请确认手机号所有方为此业务通知方。

注：`请确保和合同中填入的一致,  若无法保持一致，请确保在发起和生成批量签署链接时传入相同的参与方证件信息`，`除动态签署人场景外，此参数必填`
   */
  Mobile?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 证件类型，支持以下类型
<ul><li>ID_CARD : 中国大陆居民身份证 (默认值)</li>
<li>HONGKONG_AND_MACAO : 港澳居民来往内地通行证</li>
<li>HONGKONG_MACAO_AND_TAIWAN : 港澳台居民居住证(格式同中国大陆居民身份证)</li></ul>

注：`请确保和合同中填入的一致`
   */
  IdCardType?: string
  /**
   * 证件号码，应符合以下规则
<ul><li>中国大陆居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
<li>中国港澳居民来往内地通行证号码共11位。第1位为字母，“H”字头签发给中国香港居民，“M”字头签发给中国澳门居民；第2位至第11位为数字。</li>
<li>中国港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>

注：`请确保和合同中填入的一致`
   */
  IdCardNumber?: string
  /**
   * 通知用户方式：
<ul>
<li>**NONE** : 不通知（默认）</li>
<li>**SMS** : 短信通知（发送短信通知到Mobile参数所传的手机号）</li>
</ul>
   */
  NotifyType?: string
  /**
   * 批量签署的合同流程ID数组。
注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。`
   */
  FlowIds?: Array<string>
  /**
   * 目标签署人的企业名称，签署人如果是企业员工身份，需要传此参数。

注：
<ul>
<li>请确认该名称与企业营业执照中注册的名称一致。</li>
<li>如果名称中包含英文括号()，请使用中文括号（）代替。</li>
<li>请确保此企业已完成腾讯电子签企业认证。</li>
</ul>
   */
  OrganizationName?: string
  /**
   * 是否直接跳转至合同内容页面进行签署
<ul>
<li>**false**: 会跳转至批量合同流程的列表,  点击需要批量签署合同后进入合同内容页面进行签署(默认)</li>
<li>**true**: 跳过合同流程列表, 直接进入合同内容页面进行签署</li>
</ul>
   */
  JumpToDetail?: boolean
  /**
   * 批量签署合同相关信息，指定合同和签署方的信息，用于补充动态签署人。
   */
  FlowBatchUrlInfo?: FlowBatchUrlInfo
  /**
   * 签署完成后是否自动回跳
<ul><li>false：否, 签署完成不会自动跳转回来(默认)</li><li>true：是, 签署完成会自动跳转回来</li></ul>

注: 
1. 该参数<font color="red">只针对APP类型（电子签小程序跳转贵方小程序）场景</font> 的签署链接有效
2. <font color="red">手机应用APP 或 微信小程序需要监控界面的返回走后序逻辑</font>, 微信小程序的文档可以参考[这个](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object)
3. <font color="red">电子签小程序跳转贵方APP，不支持自动跳转，必需用户手动点击完成按钮（微信的限制）</font> 
   */
  AutoJumpBack?: boolean
  /**
   * <font color="red">仅公众号 H5 跳转电子签小程序时</font>，如需签署完成的“返回应用”功能，在获取签署链接接口的 UrlUseEnv 参数需设置为 **WeChatOfficialAccounts**，小程序签署成功的结果页面中才会出现“返回应用”按钮。在用户点击“返回应用”按钮之后，会返回到公众号 H5。 

参考 [公众号 H5 跳转电子签小程序](https://qian.tencent.com/developers/company/openwxminiprogram/#23-%E5%85%AC%E4%BC%97%E5%8F%B7-h5-%E4%B8%AD%E8%B7%B3%E8%BD%AC)。
   */
  UrlUseEnv?: string
}

/**
 * CreateExtendedServiceAuthInfos请求参数结构体
 */
export interface CreateExtendedServiceAuthInfosRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 本企业员工的id，需要已实名，正常在职员工
   */
  UserIds: Array<string>
  /**
   * 取值
<ul><li>OPEN_SERVER_SIGN：企业自动签</li>
<li>BATCH_SIGN：批量签署</li>
</ul>
   */
  ExtendServiceType?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * VerifyDigitFile请求参数结构体
 */
export interface VerifyDigitFileRequest {
  /**
   * 执行本接口操作的员工信息。注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 加签接口返回的文件Id
   */
  FileId?: string
}

/**
 * UpdateIntegrationEmployees请求参数结构体
 */
export interface UpdateIntegrationEmployeesRequest {
  /**
   * 执行本接口操作的员工信息,UserId必填。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 需要更新的员工信息，最多不超过100个。根据UserId或OpenId更新员工信息，必须填写其中一个，优先使用UserId。

可更新以下字段，其他字段暂不支持
<table> <thead> <tr> <th>参数</th> <th>含义</th> </tr> </thead> <tbody> <tr> <td>DisplayName</td> <td>用户的真实名字</td> </tr> <tr> <td>Mobile</td> <td>用户手机号码</td> </tr> <tr> <td>Email</td> <td>用户的邮箱</td> </tr> <tr> <td>Department.DepartmentId</td> <td>用户进入后的部门ID</td> </tr> </tbody> </table>
   */
  Employees: Array<Staff>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 员工邀请方式可通过以下途径进行设置：<ul><li>**SMS（默认）**：邀请将通过短信或企业微信消息发送。若场景非企业微信，则采用企业微信消息；其他情境下则使用短信通知。短信内含链接，点击后将进入微信小程序进行认证并加入企业的流程。</li><li>**H5**：将生成H5链接，用户点击链接后可进入H5页面进行认证并加入企业的流程。</li><li>**NONE**：系统会根据Endpoint生成签署链接，业务方需获取链接并通知客户。</li></ul>
   */
  InvitationNotifyType?: string
  /**
   * 回跳地址，为认证成功后页面进行回跳的URL，请确保回跳地址的可用性。注：`只有在员工邀请方式（InvitationNotifyType参数）为H5场景下才生效， 其他方式下设置无效。`
   */
  JumpUrl?: string
  /**
   * 要跳转的链接类型<ul><li> **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型  ，此时返回长链 (默认类型)</li><li>**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链</li><li>**APP**： 第三方APP或小程序跳转电子签小程序的path,  APP或者小程序跳转适合此类型</li><li>**H5**： 第三方移动端浏览器进行嵌入，不支持小程序嵌入，过期时间一个月</li></ul>注意：InvitationNotifyType 和 Endpoint 的关系图<table><tbody><tr><td>通知类型（InvitationNotifyType）</td><td>Endpoint</td></tr><tr><td>SMS（默认）</td><td>不需要传递，会将 Endpoint 默认设置为HTTP_SHORT_URL</td></tr><tr><td>H5</td><td>不需要传递，会将 Endpoint 默认设置为 H5</td></tr><tr><td>NONE</td><td>所有 Endpoint 都支持（HTTP_URL/HTTP_SHORT_URL/H5/APP）默认为HTTP_SHORT_URL</td></tr></tbody></table>
   */
  Endpoint?: string
}

/**
 * 合同组签署方信息
 */
export interface FlowGroupApprovers {
  /**
   * 合同流程ID 
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 签署方信息，包含合同ID和角色ID用于定位RecipientId。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Approvers?: Array<ApproverItem>
}

/**
 * DescribeFlowBriefs请求参数结构体
 */
export interface DescribeFlowBriefsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 查询的合同流程ID列表最多支持100个流程ID。 

如果某个合同流程ID不存在，系统会跳过此ID的查询，继续查询剩余存在的合同流程。

可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowIds: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * CreateSealPolicy请求参数结构体
 */
export interface CreateSealPolicyRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 用户在电子文件签署平台标识信息，具体参考UserInfo结构体。可跟下面的UserIds可叠加起作用
   */
  Users: Array<UserInfo>
  /**
   * 电子印章ID，为32位字符串。
建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
   */
  SealId: string
  /**
   * 授权有效期，时间戳秒级。可以传0，代表有效期到2099年12月12日23点59分59秒。
   */
  Expired: number
  /**
   * 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用
   */
  UserIds?: Array<string>
  /**
   * 印章授权内容
   */
  Policy?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeBillUsageDetail返回参数结构体
 */
export interface DescribeBillUsageDetailResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 消耗详情
   */
  Details?: Array<BillUsageDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserMobileChangeUrl返回参数结构体
 */
export interface CreateUserMobileChangeUrlResponse {
  /**
   * 腾讯电子签小程序的实名认证链接。 如果没有传递，默认值是 HTTP。 链接的有效期均是 7 天。

<b>1.如果EndPoint是APP</b>，
得到的链接类似于<a href="">pages/guide/index?to=MOBILE_CHANGE_INTENTION&shortKey=yDCZHUyOcExAlcOvNod0</a>, 用法可以参考描述中的"跳转到小程序的实现"

<b>2.如果EndPoint是HTTP</b>，
得到的链接类似于<a href="">https://res.ess.tencent.cn/cdn/h5-activity/jump-mp.html?to=MOBILE_CHANGE_INTENTION&shortKey=yDCZHUyOcChrfpaswT0d</a>，点击后会跳转到腾讯电子签小程序进行签署

<b>3.如果EndPoint是HTTP_SHORT_URL</b>，
得到的链接类似于<a href="">https://essurl.cn/2n**42Nd</a>，点击后会跳转到腾讯电子签小程序进行签署

注： <font color="red">生成的链路后面不能再增加参数</font>

   */
  Url?: string
  /**
   * 链接失效期限，为Unix时间戳（单位秒），有如下规则：

<ul>
<li>如果指定更换绑定手机号的用户(指定用户ID或姓名等信息)，则设定的链接失效期限为7天后。</li>
<li>如果没有指定更换绑定手机号的用户，则生成通用跳转到个人换手机号的界面，链接不会过期。</li>
</ul>
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserAutoSignEnableUrl返回参数结构体
 */
export interface CreateUserAutoSignEnableUrlResponse {
  /**
   * 个人用户自动签的开通链接, 短链形式。过期时间受 `ExpiredTime` 参数控制。
   */
  Url?: string
  /**
   * 腾讯电子签小程序的 AppID，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  AppId?: string
  /**
   * 腾讯电子签小程序的原始 Id,  ，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  AppOriginalId?: string
  /**
   * 腾讯电子签小程序的跳转路径，用于其他小程序/APP等应用跳转至腾讯电子签小程序使用

注: `如果获取的是H5链接, 则不会返回此值`
   */
  Path?: string
  /**
   * base64 格式的跳转二维码图片，可通过微信扫描后跳转到腾讯电子签小程序的开通界面。

注: `如果获取的是H5链接, 则不会返回此二维码图片`
   */
  QrCode?: string
  /**
   * 返回的链接类型
<ul><li> 空: 默认小程序端链接</li>
<li> **H5SIGN** : h5端链接</li></ul>
   */
  UrlType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSignFaceVideo返回参数结构体
 */
export interface DescribeSignFaceVideoResponse {
  /**
   * 核身视频结果。
   */
  VideoData?: DetectInfoVideoData
  /**
   * 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。
   */
  IntentionQuestionResult?: IntentionQuestionResult
  /**
   * 意愿核身点头确认模式的结果信息，若未使用该意愿核身功能，该字段返回值可以不处理。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntentionActionResult?: IntentionActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流程签署二维码的签署信息，适用于客户系统整合二维码功能。
通过链接，用户可直接访问电子签名小程序并签署合同。
 */
export interface SignUrl {
  /**
   * 跳转至电子签名小程序签署的链接地址。
适用于客户端APP及小程序直接唤起电子签名小程序。
   */
  AppSignUrl?: string
  /**
   * 签署链接有效时间，格式类似"2022-08-05 15:55:01"
   */
  EffectiveTime?: string
  /**
   * 跳转至电子签名小程序签署的链接地址，格式类似于https://essurl.cn/xxx。
打开此链接将会展示H5中间页面，随后唤起电子签名小程序以进行合同签署。
   */
  HttpSignUrl?: string
}

/**
 * ModifyIntegrationRole返回参数结构体
 */
export interface ModifyIntegrationRoleResponse {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyPdf返回参数结构体
 */
export interface VerifyPdfResponse {
  /**
   * 验签结果代码，代码的含义如下：

<ul><li>**1**：文件未被篡改，全部签名在腾讯电子签完成。</li>
<li>**2**：文件未被篡改，部分签名在腾讯电子签完成。</li>
<li>**3**：文件被篡改。</li>
<li>**4**：异常：文件内没有签名域。</li>
<li>**5**：异常：文件签名格式错误。</li></ul>
   */
  VerifyResult?: number
  /**
   * 验签结果详情，每个签名域对应的验签结果。状态值如下
<ul><li> **1** :验签成功，在电子签签署</li>
<li> **2** :验签成功，在其他平台签署</li>
<li> **3** :验签失败</li>
<li> **4** :pdf文件没有签名域</li>
<li> **5** :文件签名格式错误</li></ul>
   */
  PdfVerifyResults?: Array<PdfVerifyResult>
  /**
   * 验签序列号, 为11为数组组成的字符串
   */
  VerifySerialNo?: string
  /**
   * 合同文件MD5哈希值
   */
  PdfResourceMd5?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 解除协议的签署人，如不指定，默认使用原流程中的签署人。<br/>
`注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该C端签署人。`<br/>
`注意：目前不支持替换C端（个人身份类型）签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。`<br/>
`注意：当指定C端签署人的签署方自定义控件别名不空时，除RelievedApproverReceiptId参数外，可以只参数ApproverSignRole。`<br/>
 */
export interface ReleasedApprover {
  /**
   * 签署人姓名，最大长度50个字。

   */
  Name: string
  /**
   * 签署人手机号。
   */
  Mobile: string
  /**
   * 要更换的原合同参与人RecipientId编号。(可通过接口<a href="https://qian.tencent.com/developers/companyApis/queryFlows/DescribeFlowInfo/">DescribeFlowInfo</a>查询签署人的RecipientId编号)<br/>
   * @deprecated
   */
  RelievedApproverReceiptId?: string
  /**
   * 指定签署人类型，目前仅支持
<ul><li> **ORGANIZATION**：企业（默认值）</li>
<li> **ENTERPRISESERVER**：企业静默签</li></ul>
   */
  ApproverType?: string
  /**
   * 签署控件类型，支持自定义企业签署方的签署控件类型
<ul><li> **SIGN_SEAL**：默认为印章控件类型（默认值）</li>
<li> **SIGN_SIGNATURE**：手写签名控件类型</li></ul>
   */
  ApproverSignComponentType?: string
  /**
   * 参与方在合同中的角色是按照创建合同的时候来排序的，解除协议默认会将第一个参与人叫`甲方`,第二个叫`乙方`,  第三个叫`丙方`，以此类推。

如果需改动此参与人的角色名字，可用此字段指定，由汉字,英文字符,数字组成，最大20个字。

![image](https://qcloudimg.tencent-cloud.cn/raw/973a820ab66d1ce57082c160c2b2d44a.png)

   */
  ApproverSignRole?: string
  /**
   * 印章Id，签署控件类型为印章时，用于指定本企业签署方在解除协议中使用那个印章进行签署
   */
  ApproverSignSealId?: string
  /**
   * 要更换的原合同参与人RecipientId编号。(可通过接口<a href="https://qian.tencent.com/developers/companyApis/queryFlows/DescribeFlowInfo/">DescribeFlowInfo</a>查询签署人的RecipientId编号)<br/>
   */
  RelievedApproverRecipientId?: string
}

/**
 * CreateFlowGroupSignReview请求参数结构体
 */
export interface CreateFlowGroupSignReviewRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同(流程)组的合同组Id，为32位字符串，通过接口[通过多文件创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByFiles) 或[通过多模板创建合同组签署流程](https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByTemplates)创建合同组签署流程时返回。
   */
  FlowGroupId: string
  /**
   * 提交的审核结果，审核结果有下面三种情况
<ul><li><b>PASS</b>: 审核通过，合同流程可以继续执行签署等操作</li>
<li><b>REJECT</b>: 审核拒绝，合同流程不会变动</li>
<li><b>SIGN_REJECT</b>:拒签，合同流程直接结束，合同状态变为**合同拒签**</li></ul>
   */
  ReviewType: string
  /**
   * 需要进行签署审核的签署人的个人信息或企业信息，签署方的匹配方式按照以下规则:

个人：二选一（选择其中任意信息组合即可）
<ul><li>姓名+证件类型+证件号</li>
<li>姓名+手机号</li></ul>

企业：二选一  （选择其中任意信息组合即可）
<ul><li>企业名+姓名+证件类型+证件号</li>
<li>企业名+姓名+手机号</li></ul>
   */
  ApproverInfo: NeedReviewApproverInfo
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
  /**
   * 审核不通过的原因，该字段的字符串长度不超过200个字符。

注：`当审核类型（ReviewType）为审核拒绝（REJECT）或拒签（SIGN_REJECT）时，审核结果原因字段必须填写`

   */
  ReviewMessage?: string
}

/**
 * DescribeBillUsageDetail请求参数结构体
 */
export interface DescribeBillUsageDetailRequest {
  /**
   * 查询开始时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  StartTime: string
  /**
   * 查询结束时间字符串，格式为yyyymmdd,时间跨度不能大于31天
   */
  EndTime: string
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0
   */
  Offset?: number
  /**
   * 指定分页每页返回的数据条数，如果不传默认为 50，单页最大支持 50。
   */
  Limit?: number
  /**
   * 查询的套餐类型 （选填 ）不传则查询所有套餐；
目前支持:
<ul>
<li>**CloudEnterprise**: 企业版合同</li>
<li>**SingleSignature**: 单方签章</li>
<li>**CloudProve**: 签署报告</li>
<li>**CloudOnlineSign**: 腾讯会议在线签约</li>
<li>**ChannelWeCard**: 微工卡</li>
<li>**SignFlow**: 合同套餐</li>
<li>**SignFace**: 签署意愿（人脸识别）</li>
<li>**SignPassword**: 签署意愿（密码）</li>
<li>**SignSMS**: 签署意愿（短信）</li>
<li>**PersonalEssAuth**: 签署人实名（腾讯电子签认证）</li>
<li>**PersonalThirdAuth**: 签署人实名（信任第三方认证）</li>
<li>**OrgEssAuth**: 签署企业实名</li>
<li>**FlowNotify**: 短信通知</li>
<li>**AuthService**: 企业工商信息查询</li>
<li>**NoAuthSign**: 形式签</li>
</ul>
   */
  QuotaType?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 企业超管信息
 */
export interface Admin {
  /**
   * 超管名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 超管手机号，打码显示
示例值：138****1569

注意：此字段可能返回 null，表示取不到有效值。
   */
  Mobile?: string
}

/**
 * 此结构体 (Caller) 用于描述调用方属性。
 */
export interface Caller {
  /**
   * 应用号
   * @deprecated
   */
  ApplicationId?: string
  /**
   * 主机构ID
   * @deprecated
   */
  OrganizationId?: string
  /**
   * 经办人的用户ID，同UserId
   */
  OperatorId?: string
  /**
   * 下属机构ID
   * @deprecated
   */
  SubOrganizationId?: string
}

/**
 * DescribeFlowTemplates返回参数结构体
 */
export interface DescribeFlowTemplatesResponse {
  /**
   * 模板详情列表数据
   */
  Templates?: Array<TemplateInfo>
  /**
   * 查询到的模板总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBatchOrganizationRegistrationUrls返回参数结构体
 */
export interface DescribeBatchOrganizationRegistrationUrlsResponse {
  /**
   * 企业批量注册链接信息
   */
  OrganizationAuthUrls?: Array<OrganizationAuthUrl>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
  /**
   * 文件对应业务类型,可以选择的类型如下
<ul><li> **TEMPLATE** : 此上传的文件用户生成合同模板，文件类型支持.pdf/.doc/.docx/.html格式，如果非pdf文件需要通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务</a>转换后才能使用</li>
<li> **DOCUMENT** : 此文件用来发起合同流程，文件类型支持.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html，如果非pdf文件需要通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/CreateConvertTaskApi" target="_blank">创建文件转换任务</a>转换后才能使用</li>
<li> **SEAL** : 此文件用于印章的生成，文件类型支持.jpg/.jpeg/.png</li></ul>
   */
  BusinessType: string
  /**
   * 执行本接口操作的员工信息。其中OperatorId为必填字段，即用户的UserId。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Caller?: Caller
  /**
   * 请上传文件内容数组，最多可上传20个文件。

<b>所有文件必须符合<font color="red">FileType</font>指定的文件类型。</b>
   */
  FileInfos?: Array<UploadFile>
  /**
   * 文件类型， 默认通过文件内容和文件后缀一起解析得到文件类型，调用接口时可以显示的指定上传文件的类型。
可支持的指定类型如下:
<ul><li>pdf</li>
<li>doc</li>
<li>docx</li>
<li>xls</li>
<li>xlsx</li>
<li>html</li>
<li>jpg</li>
<li>jpeg</li>
<li>png</li></ul>
如：pdf 表示上传的文件 张三入职合同.pdf的文件类型是 pdf
   */
  FileType?: string
  /**
   * 此参数仅对上传的PDF文件有效。其主要作用是确定是否将PDF中的灰色矩阵置为白色。
<ul><li>**true**：将灰色矩阵置为白色。</li>
<li>**false**：无需处理，不会将灰色矩阵置为白色（默认）。</li></ul>

注: `该参数仅在关键字定位时，需要去除关键字所在的灰框场景下使用。`
   */
  CoverRect?: boolean
  /**
   * 用户自定义ID数组，与上传文件一一对应

注: `历史遗留问题，已经废弃，调用接口时不用赋值`
   */
  CustomIds?: Array<string>
  /**
   * 不再使用，上传文件链接数组，最多支持20个URL
   * @deprecated
   */
  FileUrls?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeOrganizationSeals请求参数结构体
 */
export interface DescribeOrganizationSealsRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 指定分页每页返回的数据条数，如果不传默认为 20，单页最大支持 200。
   */
  Limit?: number
  /**
   * 指定分页返回第几页的数据，如果不传默认返回第一页，页码从 0 开始，即首页为 0，最大 20000。
   */
  Offset?: number
  /**
   * 查询授权用户信息类型，取值如下：

<ul> <li><b>0</b>：（默认）不返回授权用户信息</li> <li><b>1</b>：返回授权用户的信息</li> </ul>
   */
  InfoType?: number
  /**
   * 印章id，是否查询特定的印章（没有输入返回所有）
   */
  SealId?: string
  /**
   * 印章种类列表（均为组织机构印章）。 若无特定需求，将展示所有类型的印章。 目前支持以下几种：<ul> <li><strong>OFFICIAL</strong>：企业公章；</li> <li><strong>CONTRACT</strong>：合同专用章；</li> <li><strong>ORGANIZATION_SEAL</strong>：企业印章（通过图片上传创建）；</li> <li><strong>LEGAL_PERSON_SEAL</strong>：法定代表人章。</li> <li><strong>EMPLOYEE_QUALIFICATION_SEAL</strong>：员工执业章。</li> </ul>
   */
  SealTypes?: Array<string>
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 需查询的印章状态列表。
<ul>
<li>空：（默认）仅查询启用状态的印章；</li>
<li><strong>ALL</strong>：查询所有状态的印章；</li>
<li><strong>CHECKING</strong>：查询待审核的印章；</li>
<li><strong>SUCCESS</strong>：查询启用状态的印章；</li>
<li><strong>FAIL</strong>：查询印章审核拒绝的印章；</li>
<li><strong>DISABLE</strong>：查询已停用的印章；</li>
<li><strong>STOPPED</strong>：查询已终止的印章；</li>
<li><strong>VOID</strong>：查询已作废的印章；</li>
<li><strong>INVALID</strong>：查询已失效的印章。</li>
</ul>
   */
  SealStatuses?: Array<string>
}

/**
 * DescribePersonCertificate请求参数结构体
 */
export interface DescribePersonCertificateRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 个人用户的三要素信息：
<ul><li>姓名</li>
<li>证件号</li>
<li>证件类型</li></ul>
   */
  UserInfo: UserThreeFactor
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 证书使用场景，可以选择的场景值如下:
<ul><li> **E_PRESCRIPTION_AUTO_SIGN** :  电子处方场景</li><li> **OTHER** :  通用场景</li></ul>
   */
  SceneKey?: string
}

/**
 * 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。下面各种字段在解除协议中的位置参考：

![image](https://qcloudimg.tencent-cloud.cn/raw/5087164cfe5a15fa3ced3180842d5da9.png)
 */
export interface RelieveInfo {
  /**
   * 解除理由，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。
   */
  Reason: string
  /**
   * 解除后仍然有效的条款，保留条款，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。

   */
  RemainInForceItem?: string
  /**
   * 原合同事项处理-费用结算，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。
   */
  OriginalExpenseSettlement?: string
  /**
   * 原合同事项处理-其他事项，长度不能超过200，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。
   */
  OriginalOtherSettlement?: string
  /**
   * 其他约定（如约定的与解除协议存在冲突的，以【其他约定】为准），最大支持200个字，只能由中文、字母、数字、中文标点和英文标点组成(不支持表情)。
   */
  OtherDeals?: string
}

/**
 * 用户自定义合同类型， 自定义合同类型的管理可以[点击查看在控制台位置的截图](https://qcloudimg.tencent-cloud.cn/raw/85a9b2ebce07b0cd6d75d5327d538235.png)
 */
export interface UserFlowType {
  /**
   * 合同类型ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserFlowTypeId?: string
  /**
   * 合同类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 合同类型说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * 个性化参数
 */
export interface EmbedUrlOption {
  /**
   * 合同详情预览，允许展示控件信息
<ul>
<li><b>true</b>：允许在合同详情页展示控件</li>
<li><b>false</b>：（默认）不允许在合同详情页展示控件</li>
</ul>
   */
  ShowFlowDetailComponent?: boolean
  /**
   * 模板预览，允许展示模板控件信息
<ul><li> <b>true</b> :允许在模板预览页展示控件</li>
<li> <b>false</b> :（默认）不允许在模板预览页展示控件</li></ul>
   */
  ShowTemplateComponent?: boolean
  /**
   * 跳过上传文件，默认为false(展示上传文件页）![image](https://qcloudimg.tencent-cloud.cn/raw/8ca33745cf772e79831dbe5a70e82400.png)
- false: 展示上传文件页
- true: 不展示上传文件页
 

注意: 此参数仅针对**EmbedType=CREATE_TEMPLATE(创建模板)有效**，
   */
  SkipUploadFile?: boolean
}

/**
 * CreateBatchOrganizationAuthorizationUrl请求参数结构体
 */
export interface CreateBatchOrganizationAuthorizationUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 组织机构超管姓名。 在注册流程中，必须是超管本人进行操作。
此参数需要跟[创建企业批量认证链接](https://qian.tencent.com/developers/companyApis/organizations/CreateBatchOrganizationRegistrationTasks)中 AdminName 保持一致。
   */
  AdminName: string
  /**
   * 组织机构超管手机号。 在注册流程中，必须是超管本人进行操作。此参数需要跟[创建企业批量认证链接](https://qian.tencent.com/developers/companyApis/organizations/CreateBatchOrganizationRegistrationTasks)中 Admin Mobile保持一致。
   */
  AdminMobile: string
  /**
   * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
   */
  Agent?: Agent
  /**
   * 企业批量认证链接的子任务 SubTaskId，该 SubTaskId 是通过接口 查询企业批量认证链接 DescribeBatchOrganizationRegistrationUrls 获得。此参数需与超管个人三要素（AdminName，AdminMobile，AdminIdCardNumber）配合使用。若 SubTaskId 不属于传入的超级管理员，将进行筛选。
   */
  SubTaskIds?: Array<string>
  /**
   * 组织机构超管证件类型支持以下类型
- ID_CARD : 中国大陆居民身份证 (默认值)
-  HONGKONG_AND_MACAO : 中国港澳居民来往内地通行证
- HONGKONG_MACAO_AND_TAIWAN : 中国港澳台居民居住证(格式同中国大陆居民身份证)
此参数需要跟[创建企业批量认证链接](https://qian.tencent.com/developers/companyApis/organizations/CreateBatchOrganizationRegistrationTasks)中 AdminIdCardType保持一致。
   */
  AdminIdCardType?: string
  /**
   * 组织机构超管证件号。 在注册流程中，必须是超管本人进行操作。此参数需要跟[创建企业批量认证链接](https://qian.tencent.com/developers/companyApis/organizations/CreateBatchOrganizationRegistrationTasks)中 AdminIdCardNumber保持一致。
   */
  AdminIdCardNumber?: string
  /**
   * 要跳转的链接类型<ul><li> **HTTP**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型  ，此时返回长链 (默认类型)</li><li>**HTTP_SHORT_URL**：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链</li><li>**APP**： 第三方APP或小程序跳转电子签小程序的path,  APP或者小程序跳转适合此类型</li><li>**QR_CODE**： 跳转电子签小程序的http_url的二维码形式,  可以在页面展示适合此类型</li></ul>
   */
  Endpoint?: string
}

/**
 * CreateBatchCancelFlowUrl请求参数结构体
 */
export interface CreateBatchCancelFlowUrlRequest {
  /**
   * 执行本接口操作的员工信息。
<br/>注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator: UserInfo
  /**
   * 需要执行撤回的流程(合同)的编号列表，最多100个.
列表中的流程(合同)编号不要重复.
   */
  FlowIds: Array<string>
  /**
   * 代理企业和员工的信息。
<br/>在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * 页面主题配置
 */
export interface WebThemeConfig {
  /**
   * 是否显示页面底部电子签logo，取值如下：
<ul><li> **true**：页面底部显示电子签logo</li>
<li> **false**：页面底部不显示电子签logo（默认）</li></ul>
   */
  DisplaySignBrandLogo?: boolean
  /**
   * 主题颜色：
支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65)
<br/>
   */
  WebEmbedThemeColor?: string
}

/**
 * CreateMultiFlowSignQRCode请求参数结构体
 */
export interface CreateMultiFlowSignQRCodeRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同模板ID，为32位字符串。
可登录腾讯电子签控制台，在 "模板"->"模板中心"->"列表展示设置"选中模板 ID 中查看某个模板的TemplateId(在页面中展示为模板ID)。
   */
  TemplateId: string
  /**
   * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
该名称还将用于合同签署完成后的下载文件名。
   */
  FlowName: string
  /**
   * 通过此二维码可发起的流程最大限额，如未明确指定，默认为5份。
一旦发起流程数超越该限制，该二维码将自动失效。
   */
  MaxFlowNum?: number
  /**
   * 二维码的有效期限，默认为7天，最高设定不得超过90天。
一旦超过二维码的有效期限，该二维码将自动失效。
   */
  QrEffectiveDay?: number
  /**
   * 合同流程的签署有效期限，若未设定签署截止日期，则默认为自合同流程创建起的7天内截止。
若在签署截止日期前未完成签署，合同状态将变更为已过期，从而导致合同无效。
最长设定期限不得超过30天。
   */
  FlowEffectiveDay?: number
  /**
   * 指定签署人信息。
在指定签署人后，仅允许特定签署人通过扫描二维码进行签署。
   */
  Restrictions?: Array<ApproverRestriction>
  /**
   * 调用方自定义的个性化字段(可自定义此字段的值)，并以base64方式编码，支持的最大数据大小为 20480长度。
在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。
回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
   */
  UserData?: string
  /**
   * 已废弃，回调配置统一使用企业应用管理-应用集成-企业版应用中的配置 
<br/> 通过一码多扫二维码发起的合同，回调消息可参考文档 https://qian.tencent.com/developers/company/callback_types_contracts_sign
<br/> 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档 https://qian.tencent.com/developers/company/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83

   * @deprecated
   */
  CallbackUrl?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 限制二维码用户条件（已弃用）
   * @deprecated
   */
  ApproverRestrictions?: ApproverRestriction
  /**
   * 指定签署方在使用个人印章签署控件（SIGN_SIGNATURE） 时可使用的签署方式：自由书写、正楷临摹、系统签名、个人印章。
   */
  ApproverComponentLimitTypes?: Array<ApproverComponentLimitType>
  /**
   * 禁止个人用户重复签署，默认不禁止，即同一用户可多次扫码签署多份合同。若要求同一用户仅能扫码签署一份合同，请传入true。
   */
  ForbidPersonalMultipleSign?: boolean
  /**
   * 合同流程名称是否应包含扫码签署人的信息，且遵循特定格式（flowname-姓名-手机号后四位）。
例如，通过参数FlowName设定的扫码发起合同名称为“员工入职合同”，当扫码人张三（手机号18800009527）扫码签署时，合同名称将自动生成为“员工入职合同-张三-9527”。
   */
  FlowNameAppendScannerInfo?: boolean
}

/**
 * VerifyPdf请求参数结构体
 */
export interface VerifyPdfRequest {
  /**
   * 合同流程ID，为32位字符串。
可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId: string
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。
   */
  Operator?: UserInfo
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeFlowInfo请求参数结构体
 */
export interface DescribeFlowInfoRequest {
  /**
   * 执行本接口操作的员工信息。 注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 需要查询的流程ID列表，最多可传入100个ID。
如果要查询合同组的信息，则不需要传入此参数，只需传入 FlowGroupId 参数即可。


可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。

[点击查看FlowId在控制台中的位置](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)
   */
  FlowIds?: Array<string>
  /**
   * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 需要查询的流程组ID，如果传入此参数，则会忽略 FlowIds 参数。该合同组由<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateFlowGroupByFiles" target="_blank">通过多文件创建合同组签署流程</a>等接口创建。
   */
  FlowGroupId?: string
}

/**
 * DeleteExtendedServiceAuthInfos请求参数结构体
 */
export interface DeleteExtendedServiceAuthInfosRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 本企业员工的id，需要已实名，正常在职员工
   */
  UserIds: Array<string>
  /**
   * 取值如下所示：
<ul><li>OPEN_SERVER_SIGN：企业自动签</li>
<li>BATCH_SIGN：批量签署</li>
</ul>
   */
  ExtendServiceType?: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeExtendedServiceAuthInfos返回参数结构体
 */
export interface DescribeExtendedServiceAuthInfosResponse {
  /**
   * 服务开通和授权的信息列表，根据查询类型返回所有支持的扩展服务开通和授权状况，或者返回特定扩展服务的开通和授权状况。
   */
  AuthInfoList?: Array<ExtendAuthInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchOrganizationAuthorizationUrl返回参数结构体
 */
export interface CreateBatchOrganizationAuthorizationUrlResponse {
  /**
   * 批量企业注册链接-单链接包含多条认证流，根据Endpoint的不同设置，返回不同的链接地址。失效时间：7天
跳转链接, 链接的有效期根据企业,员工状态和终端等有区别, 可以参考下表
<table> <thead> <tr> <th>Endpoint</th> <th>示例</th> <th>链接有效期限</th> </tr> </thead>  <tbody>
 <tr> <td>HTTP</td> <td>https://res.ess.tencent.cn/cdn/h5-activity-dev/jump-mp.html?to=AUTHORIZATION_ENTERPRISE_FOR_BATCH_SUBMIT&shortKey=yDCHHURDfBxSB2rj2Bfa</td> <td>7天</td> </tr> 
<tr> <td>HTTP_SHORT_URL</td> <td>https://test.essurl.cn/8gDKUBAWK8</td> <td>7天</td> </tr> 
<tr> <td>APP</td> <td>pages/guide/index?to=AUTHORIZATION_ENTERPRISE_FOR_BATCH_SUBMIT&shortKey=yDCHpURDfR6iEkdpsDde</td> <td>7天</td> </tr><tr> <td>QR_CODE</td> <td>https://dyn.test.ess.tencent.cn/imgs/qrcode_urls/authorization_enterprise_for_batch_submit/yDCHHUUckpbdauq9UEjnoFDCCumAMmv1.png</td> <td>7天</td> </tr> </tbody> </table>
注： 
`1.创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义`

   */
  AuthUrl?: string
  /**
   * 认证流认证失败信息
   */
  ErrorMessages?: Array<string>
  /**
   * 链接过期时间，为 7 天后，创建时间，格式为Unix标准时间戳（秒）。
   */
  ExpireTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowInfo返回参数结构体
 */
export interface DescribeFlowInfoResponse {
  /**
   * 合同流程的详细信息。
如果查询的是合同组信息，则返回的是组内所有子合同流程的详细信息。
   */
  FlowDetailInfos?: Array<FlowDetailInfo>
  /**
   * 合同组ID，只有在查询合同组信息时才会返回。
   */
  FlowGroupId?: string
  /**
   * 合同组名称，只有在查询合同组信息时才会返回。
   */
  FlowGroupName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewAutoSignLicense返回参数结构体
 */
export interface RenewAutoSignLicenseResponse {
  /**
   * 续期成功后新的自动签许可到期时间。当且仅当已通过许可开通自动签时有值。

值为unix时间戳,单位为秒。
   */
  LicenseTo?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelMultiFlowSignQRCode返回参数结构体
 */
export interface CancelMultiFlowSignQRCodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlow返回参数结构体
 */
export interface CreateFlowResponse {
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。

注:
此返回的合同流程ID，需再次调用<a href="https://qian.tencent.com/developers/companyApis/startFlows/CreateDocument" target="_blank">创建电子文档</a>和<a href="https://qian.tencent.com/developers/companyApis/startFlows/StartFlow" target="_blank">发起签署流程</a>接口将合同开始后，合同才能进入签署环节，[点击查看FlowId在控制台中的位置（只在进入签署环节后有效）](https://qcloudimg.tencent-cloud.cn/raw/0a83015166cfe1cb043d14f9ec4bd75e.png)


   */
  FlowId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationSubOrganizationActiveRecord请求参数结构体
 */
export interface CreateIntegrationSubOrganizationActiveRecordRequest {
  /**
   * 执行本接口操作的员工信息。使用此接口时，必须填写userId。 支持填入集团子公司经办人 userId 代发合同。  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 待激活成员企业ID集合
   */
  SubOrganizationIds: Array<string>
}

/**
 * CreateFlowBlockchainEvidenceUrl请求参数结构体
 */
export interface CreateFlowBlockchainEvidenceUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 合同流程ID，为32位字符串。
建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
   */
  FlowId: string
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
  /**
   * 链接/二维码的有效截止时间，格式为unix时间戳。最长不超过 2099年12月31日（4102415999）。
默认值为有效期为当前时间后7天。
   */
  ExpiredOn?: number
}

/**
 * CreateBatchQuickSignUrl请求参数结构体
 */
export interface CreateBatchQuickSignUrlRequest {
  /**
   * 批量签署的流程签署人，其中姓名(ApproverName)、参与人类型(ApproverType)必传，手机号(ApproverMobile)和证件信息(ApproverIdCardType、ApproverIdCardNumber)可任选一种或全部传入。
<ul>
<li>若为个人参与方：ApproverType=1</li>
<li>若为企业参与方：ApproverType=0。同时 OrganizationName 参数需传入参与方企业名称。 </li>
</ul>
注:
`1. 暂不支持签署人拖动签署控件功能，以及签批控件。`
`2. 当需要通过短信验证码签署时，手机号ApproverMobile需要与发起合同时填写的用户手机号一致。`
   */
  FlowApproverInfo: FlowCreateApprover
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId(子企业的组织ID)为必填项。
   */
  Agent?: Agent
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator?: UserInfo
  /**
   * 批量签署的合同流程ID数组。
注: `在调用此接口时，请确保合同流程均为本企业发起，且合同数量不超过100个。`
   */
  FlowIds?: Array<string>
  /**
   * 合同组编号
注：`该参数和合同流程ID数组必须二选一`
   */
  FlowGroupId?: string
  /**
   * 签署完之后的H5页面的跳转链接，此链接及支持http://和https://，最大长度1000个字符。(建议https协议)
   */
  JumpUrl?: string
  /**
   * 指定批量签署合同的签名类型，可传递以下值：
<ul><li>**0**：手写签名(默认)</li>
<li>**1**：OCR楷体</li>
<li>**2**：姓名印章</li>
<li>**3**：图片印章</li>
<li>**4**：系统签名</li></ul>
注：
<ul><li>默认情况下，签名类型为手写签名</li>
<li>您可以传递多种值，表示可用多种签名类型。</li>
<li>该参数会覆盖您合同中的签名类型，若您在发起合同时限定了签名类型(赋值签名类型给ComponentTypeLimit)，请将这些签名类型赋予此参数</li>
<li>若签署方为企业员工，此参数无效，签名方式将以合同中为准。</li>
</ul>
   */
  SignatureTypes?: Array<number | bigint>
  /**
   * 指定批量签署合同的认证校验方式，可传递以下值：
<ul><li>**1**：人脸认证(默认)，需进行人脸识别成功后才能签署合同</li>
<li>**2**：密码认证(默认)，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署</li>
<li>**3**：运营商三要素，需到运营商处比对手机号实名信息(名字、手机号、证件号)校验一致才能成功进行合同签署。</li></ul>
注：
<ul><li>默认情况下，认证校验方式为人脸和密码认证</li>
<li>您可以传递多种值，表示可用多种认证校验方式。</li></ul>
   */
  ApproverSignTypes?: Array<number | bigint>
  /**
   * 生成H5签署链接时，您可以指定签署方签署合同的认证校验方式的选择模式，可传递一下值：
<ul><li>**0**：签署方自行选择，签署方可以从预先指定的认证方式中自由选择；</li>
<li>**1**：自动按顺序首位推荐，签署方无需选择，系统会优先推荐使用第一种认证方式。</li></ul>
注：
`不指定该值时，默认为签署方自行选择。`
   */
  SignTypeSelector?: number
  /**
   * 批量签署合同相关信息，指定合同和签署方的信息，用于补充动态签署人。	

注: `若签署方为企业员工，暂不支持通过H5端进行动态签署人的补充`
   */
  FlowBatchUrlInfo?: FlowBatchUrlInfo
  /**
   * <b>只有在生成H5签署链接的情形下</b>（ 如调用<a href="https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelCreateFlowSignUrl" target="_blank">获取H5签署链接</a>、<a href="https://qian.tencent.com/developers/partnerApis/operateFlows/ChannelCreateBatchQuickSignUrl" target="_blank">获取H5批量签署链接</a>等接口），该配置才会生效。  您可以指定H5签署视频核身的意图配置，选择问答模式或点头模式的语音文本。 

 注意： 
1. 视频认证为<b>白名单功能，使用前请联系对接的客户经理沟通</b>。
2. 使用视频认证时，<b>生成H5签署链接的时候必须将签署认证方式指定为人脸</b>（即ApproverSignTypes设置成人脸签署）。 
3. 签署完成后，可以通过<a href="https://qian.tencent.com/developers/partnerApis/flows/ChannelDescribeSignFaceVideo" target="_blank">查询签署认证人脸视频</a>获取到当时的视频。
   */
  Intention?: Intention
  /**
   * 缓存签署人信息。在H5签署链接动态领取场景，首次填写后，选择缓存签署人信息，在下次签署人点击领取链接时，会自动将个人信息（姓名、身份证号、手机号）填入，否则需要每次手动填写。

注: `若参与方为企业员工时，暂不支持对参与方信息进行缓存`
   */
  CacheApproverInfo?: boolean
}

/**
 * 下载文件的URL信息
 */
export interface FileUrl {
  /**
   * 下载文件的URL，有效期为输入的UrlTtl，默认5分钟
   */
  Url: string
  /**
   * 下载文件的附加信息。如果是pdf文件，会返回pdf文件每页的有效高宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  Option: string
}

/**
 * CreateOrganizationInfoChangeUrl请求参数结构体
 */
export interface CreateOrganizationInfoChangeUrlRequest {
  /**
   * 执行本接口操作的员工信息。
注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
   */
  Operator: UserInfo
  /**
   * 企业信息变更类型，可选类型如下：
<ul><li>**1**：企业超管变更</li><li>**2**：企业基础信息变更</li></ul>
   */
  ChangeType: number
  /**
   * 代理企业和员工的信息。
在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
   */
  Agent?: Agent
}

/**
 * DescribeOrganizationGroupOrganizations返回参数结构体
 */
export interface DescribeOrganizationGroupOrganizationsResponse {
  /**
   * 符合查询条件的资源实例总数量。
   */
  Total?: number
  /**
   * 已授权待激活的子企业总数量
   */
  JoinedTotal?: number
  /**
   * 已加入的企业数量(废弃,请使用ActivatedTotal)
   * @deprecated
   */
  ActivedTotal?: number
  /**
   * 如果入参Export为 true 时使用，表示导出Excel的url
   */
  ExportUrl?: string
  /**
   * 成员企业信息列表
   */
  List?: Array<GroupOrganization>
  /**
   * 已加入的子企业总数量
   */
  ActivatedTotal?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationGroupInvitationLink返回参数结构体
 */
export interface CreateOrganizationGroupInvitationLinkResponse {
  /**
   * 加入集团二维码链接，子企业的管理员可以直接扫码进入。
注意:1. 该链接有效期时间为ExpireTime，同时需要注意保密，不要外泄给无关用户。2. 该链接不支持小程序嵌入，仅支持<b>移动端浏览器</b>打开。3. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  Link?: string
  /**
   * 到期时间（以秒为单位的时间戳）
   */
  ExpireTime?: number
  /**
   * 加入集团短链接。
注意:
1. 该链接有效期时间为ExpireTime，同时需要注意保密，不要外泄给无关用户。
2. 该链接不支持小程序嵌入，仅支持<b>移动端浏览器</b>打开。
3. <font color="red">生成的链路后面不能再增加参数</font>（会出现覆盖链接中已有参数导致错误）
   */
  JumpUrl?: string
  /**
   * 腾讯电子签小程序加入集团链接。

<li>小程序和APP集成使用</li>
<li>得到的链接类似于`pages/guide?shortKey=yDw***k1xFc5`, 用法可以参考：<a href="https://qian.tencent.com/developers/company/openwxminiprogram" target="_blank">跳转电子签小程序</a></li>


注： <font color="red">生成的链路后面不能再增加参数</font>
   */
  MiniAppPath?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 抄送信息
 */
export interface CcInfo {
  /**
   * 被抄送方手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
请确认手机号所有方为此业务通知方。
   */
  Mobile?: string
  /**
   * 被抄送方姓名。
抄送方的姓名将用于身份认证，请确保填写的姓名为抄送方的真实姓名，而非昵称等代名。
   */
  Name?: string
  /**
   * 被抄送方类型, 可设置以下类型:
<ul><li> **0** :个人抄送方</li>
<li> **1** :企业员工抄送方</li></ul>
   */
  CcType?: number
  /**
   * 被抄送方权限, 可设置如下权限:
<ul><li> **0** :可查看合同内容</li>
<li> **1** :可查看合同内容也可下载原文</li></ul>
   */
  CcPermission?: number
  /**
   * 通知签署方经办人的方式,  有以下途径:
<ul><li> **sms** :  (默认)短信</li>
<li> **none** : 不通知</li></ul>
   */
  NotifyType?: string
}

/**
 * 意愿核身语音问答模式（即语音播报+语音回答）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。当前仅支持1轮问答。
 */
export interface IntentionQuestion {
  /**
   * 当选择语音问答模式时，系统自动播报的问题文本，最大长度为150个字符。
   */
  Question?: string
  /**
   *  当选择语音问答模式时，用于判断用户回答是否通过的标准答案列表，传入后可自动判断用户回答文本是否在标准文本列表中。
   */
  Answers?: Array<string>
}

/**
 * 发起流程的可嵌入页面操作结果页配置
 */
export interface CreateResultPageConfig {
  /**
   * <ul>
  <li>0 : 发起审批成功页面（通过接口<a href="https://qian.tencent.com/developers/companyApis/embedPages/CreatePrepareFlow/" target="_blank">创建发起流程web页面</a>发起时设置了NeedCreateReview参数为true）</li>
</ul>
   */
  Type: number
  /**
   * 结果页标题，不超过50字
   */
  Title: string
  /**
   * 结果页描述，不超过200字
   */
  Description?: string
}
