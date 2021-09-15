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
 * DescribeFaceIdResults请求参数结构体
 */
export interface DescribeFaceIdResultsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 慧眼业务ID
   */
  WbAppId: string

  /**
   * 订单号(orderNo); 限制在3个或以内
   */
  OrderNumbers: Array<string>

  /**
   * 1:视频+照片,2:照片,3:视频,0（或其他数字）:无; 可选
   */
  FileType?: number
}

/**
 * CreateSubOrganization请求参数结构体
 */
export interface CreateSubOrganizationRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
      * 机构证件号码类型可选值：
1. USCC - 统一社会信用代码
2. BIZREGISTNO - 营业执照注册号
      */
  IdCardType: string

  /**
   * 机构证件号码
   */
  IdCardNumber: string

  /**
      * 机构类型可选值：
1. ENTERPRISE - 企业
2. INDIVIDUALBIZ - 个体工商户
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
      */
  OrganizationType: string

  /**
   * 机构法人/经营者姓名
   */
  LegalName: string

  /**
      * 机构法人/经营者证件类型可选值：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
      */
  LegalIdCardType: string

  /**
      * 机构法人/经营者证件号码；
OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填
      */
  LegalIdCardNumber: string

  /**
   * 机构名称全称
   */
  Name: string

  /**
   * 机构在第三方的唯一标识，32位以内标识符
   */
  OpenId?: string

  /**
   * 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一
   */
  UseOpenId?: boolean

  /**
      * 机构证件文件类型可选值：
1. USCCFILE - 统一社会信用代码证书
2. LICENSEFILE - 营业执照
      */
  IdCardFileType?: string

  /**
   * 机构证件照片文件，base64编码，支持jpg、jpeg、png格式
   */
  BizLicenseFile?: string

  /**
   * 机构证件照片文件名
   */
  BizLicenseFileName?: string

  /**
   * 机构法人/经营者/联系人手机号码
   */
  LegalMobile?: string

  /**
   * 组织联系人姓名
   */
  ContactName?: string

  /**
   * 实名认证的客户端IP
   */
  VerifyClientIp?: string

  /**
   * 实名认证的服务器IP
   */
  VerifyServerIp?: string

  /**
   * 企业联系地址
   */
  ContactAddress?: Address

  /**
   * 机构电子邮箱
   */
  Email?: string
}

/**
 * 此结构体 (Component) 用于描述控件属性。
 */
export interface Component {
  /**
      * 控件编号

注：
当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。
例：
当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。
      */
  ComponentId?: string

  /**
      * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件；
DATE - 普通日期控件；
SELECT- 勾选框控件；
如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL- 签署印章控件；
SIGN_DATE- 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
      */
  ComponentType?: string

  /**
   * 控件名称
   */
  ComponentName?: string

  /**
   * 定义控件是否为必填项，默认为false
   */
  ComponentRequired?: boolean

  /**
   * 控件所属文件的序号 (模板中的resourceId排列序号)
   */
  FileIndex?: number

  /**
      * 控件生成的方式：
0 - 普通控件
1 - 表单域
2 - html 控件
3 - 关键字
      */
  GenerateMode?: number

  /**
   * 参数控件宽度，单位px
   */
  ComponentWidth?: number

  /**
   * 参数控件高度，单位px
   */
  ComponentHeight?: number

  /**
   * 参数控件所在页码
   */
  ComponentPage?: number

  /**
   * 参数控件X位置，单位px
   */
  ComponentPosX?: number

  /**
   * 参数控件Y位置，单位px
   */
  ComponentPosY?: number

  /**
   * 参数控件样式
   */
  ComponentExtra?: string

  /**
      * 印章ID，如果是手写签名则为jpg或png格式的base64图片

SIGN_SEAL控件,可以用ORG_DEFAULT_SEAL表示主企业的默认印章
SIGN_SEAL控件,可以用SUBORG_DEFAULT_SEAL表示子企业的默认印章
SIGN_SEAL控件,可以用USER_DEFAULT_SEAL表示个人默认印章
      */
  ComponentValue?: string

  /**
   * 如果是SIGN_SEAL类型的签署控件, 参数标识H5签署界面是否在该签署区上进行放置展示, 1为放置,其他为不放置
   */
  SealOperate?: number

  /**
   * 不同GenerateMode对应的额外信息
   */
  GenerateExtra?: string
}

/**
 * CreateSeal请求参数结构体
 */
export interface CreateSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
      * 印章类型：
1. PERSONAL - 个人私章
2. OFFICIAL - 公章
3. SPECIAL_FINANCIAL - 财务专用章
4. CONTRACT - 合同专用章
5. LEGAL_REPRESENTATIVE - 法定代表人章
6. SPECIAL_NATIONWIDE_INVOICE - 发票专用章
7. OTHER-其他
      */
  SealType: string

  /**
   * 印章名称
   */
  SealName: string

  /**
   * 请求创建印章的客户端IP
   */
  SourceIp: string

  /**
   * 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数）
   */
  Image?: string

  /**
   * 印章文件图片ID（与Image参数二选一，同时传入参数时优先使用Image参数）
   */
  FileId?: string

  /**
   * 需要创建印章的用户ID
   */
  UserId?: string

  /**
   * 是否是默认印章 true：是，false：否
   */
  IsDefault?: boolean
}

/**
 * CancelFlow返回参数结构体
 */
export interface CancelFlowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (FaceIdPhoto) 用于描述慧眼人脸核身照片信息。
 */
export interface FaceIdPhoto {
  /**
      * 核身结果：
0 - 通过；
1 - 未通过
      */
  Result: number

  /**
   * 核身失败描述
   */
  Description: string

  /**
   * 照片数据 (base64编码, 一般为JPG或PNG)
   */
  Photo: string

  /**
   * 订单号 (orderNo)
   */
  OrderNumber: string
}

/**
 * VerifySubOrganization请求参数结构体
 */
export interface VerifySubOrganizationRequest {
  /**
   * 调用方信息，该接口SubOrganizationId必填
   */
  Caller: Caller

  /**
   * 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
   */
  OpenId?: string
}

/**
 * VerifyUser请求参数结构体
 */
export interface VerifyUserRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 电子签平台用户ID
   */
  UserId: string

  /**
      * 是否需要下发个人长效证书，默认为false
注：如您有下发个人长效证书需求，请提前邮件至e-contract@oa.com进行申请。
      */
  CertificateRequired?: boolean
}

/**
 * DescribeFaceIdPhotos返回参数结构体
 */
export interface DescribeFaceIdPhotosResponse {
  /**
   * 照片信息列表
   */
  Photos?: Array<FaceIdPhoto>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckVerifyCodeMatchFlowId请求参数结构体
 */
export interface CheckVerifyCodeMatchFlowIdRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 手机号
   */
  Mobile: string

  /**
   * 验证码
   */
  VerifyCode: string

  /**
   * 流程(目录) id
   */
  FlowId: string
}

/**
 * CheckBankCard2EVerification请求参数结构体
 */
export interface CheckBankCard2EVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 银行卡号
   */
  BankCard: string

  /**
   * 姓名
   */
  Name: string
}

/**
 * DescribeFileIdsByCustomIds返回参数结构体
 */
export interface DescribeFileIdsByCustomIdsResponse {
  /**
   * <自定义Id,文件id>数组
   */
  CustomIdList: Array<CustomFileIdMap>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySubOrganizationInfo返回参数结构体
 */
export interface ModifySubOrganizationInfoResponse {
  /**
   * 子机构ID
   */
  SubOrganizationId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCatalogApprovers请求参数结构体
 */
export interface DescribeCatalogApproversRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 目录ID
   */
  CatalogId: string

  /**
   * 查询指定用户是否为参与者,为空表示查询所有参与者
   */
  UserId?: string
}

/**
 * CheckFaceIdentify请求参数结构体
 */
export interface CheckFaceIdentifyRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 人脸核身渠道; 必选; WEIXINAPP:腾讯电子签小程序,FACEID:腾讯电子签慧眼,None:白名单中的客户直接通过
   */
  VerifyChannel: string

  /**
   * 核身订单号; 必选; 对于WEIXINAPP,直接取响应的{VerifyResult};对于FACEID,使用{WbAppId}:{OrderNo}拼接
   */
  VerifyResult: string

  /**
   * 要对比的姓名; 可选; 未填写时对比caller.OperatorId的实名信息
   */
  Name?: string

  /**
   * 要对比的身份证号码; 可选; 未填写时对比caller.OperatorId的实名信息
   */
  IdCardNumber?: string

  /**
   * 是否取认证时的照片
   */
  GetPhoto?: boolean
}

/**
 * CreateServerFlowSign返回参数结构体
 */
export interface CreateServerFlowSignResponse {
  /**
      * 任务状态：
0：失败
1：成功
      */
  SignStatus: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 腾讯电子签平台用户唯一标识
   */
  UserId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckBankCard4EVerification返回参数结构体
 */
export interface CheckBankCard4EVerificationResponse {
  /**
      * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileUrls请求参数结构体
 */
export interface DescribeFileUrlsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 业务编号数组，如模板编号、文档编号、印章编号、流程编号、目录编号
   */
  BusinessIds: Array<string>

  /**
      * 业务类型：
1. TEMPLATE - 模板
2. SEAL - 印章
3. FLOW - 流程
4.CATALOG - 目录
      */
  BusinessType: string

  /**
   * 下载后的文件命名，只有FileType为“ZIP”时生效
   */
  FileName?: string

  /**
   * 单个业务ID多个资源情况下，指定资源起始偏移量
   */
  ResourceOffset?: number

  /**
   * 单个业务ID多个资源情况下，指定资源数量
   */
  ResourceLimit?: number

  /**
   * 文件类型，支持"JPG", "PDF","ZIP"等，默认为上传的文件类型
   */
  FileType?: string
}

/**
 * 此结构体 (FlowFileInfo) 用于描述流程文档信息。
 */
export interface FlowFileInfo {
  /**
   * 文件序号
   */
  FileIndex: number

  /**
   * 文件类型
   */
  FileType: string

  /**
   * 文件的MD5码
   */
  FileMd5: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 文件大小，单位为Byte
   */
  FileSize: number

  /**
   * 文件创建时间戳
   */
  CreatedOn: number

  /**
   * 文件的下载地址
   */
  Url: string
}

/**
 * 此结构体 (SmsTemplate) 用于描述短信模板。
 */
export interface SmsTemplate {
  /**
   * 模板ID，必须填写已审核通过的模板ID。模板ID可登录短信控制台查看。
   */
  TemplateId: string

  /**
   * 短信签名内容，使用UTF-8编码，必须填写已审核通过的签名，签名信息可登录短信控制台查看。
   */
  Sign: string
}

/**
 * 此结构体 (Address) 用于描述住址或通讯地址。
 */
export interface Address {
  /**
   * 省份
   */
  Province: string

  /**
   * 城市
   */
  City: string

  /**
   * 区县
   */
  County: string

  /**
   * 详细地址
   */
  Details: string

  /**
   * 国家，默认中国
   */
  Country?: string
}

/**
 * ModifyUserDefaultSeal请求参数结构体
 */
export interface ModifyUserDefaultSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 用户唯一标识，需要重新指定默认印章的用户ID
   */
  UserId: string

  /**
   * 重新指定的默认印章ID
   */
  SealId: string

  /**
   * 请求重新指定个人默认印章的客户端IP
   */
  SourceIp: string
}

/**
 * GenerateUserSeal请求参数结构体
 */
export interface GenerateUserSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 用户ID
   */
  UserId: string

  /**
   * 请求生成个人印章的客户端IP
   */
  SourceIp: string

  /**
   * 电子印章名称
   */
  SealName?: string

  /**
   * 是否是默认印章 true：是，false：否
   */
  IsDefault?: boolean
}

/**
 * CheckIdCardVerification返回参数结构体
 */
export interface CheckIdCardVerificationResponse {
  /**
      * 检测结果; 
收费错误码:
  0: 通过,
  1: 姓名和身份证号不一致,
免费错误码:
  101: 非法身份证号(长度,格式等不正确),
  102: 非法姓名(长度,格式等不正确),
  103: 验证平台异常,
  104: 证件库中无此身份证记录
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlow返回参数结构体
 */
export interface DescribeFlowResponse {
  /**
   * 流程创建者信息
   */
  Creator: Caller

  /**
   * 流程编号
   */
  FlowId: string

  /**
   * 流程名称
   */
  FlowName: string

  /**
   * 流程描述
   */
  FlowDescription: string

  /**
   * 流程的类型: ”劳务合同“,”租赁合同“,”销售合同“,”其他“
   */
  FlowType: string

  /**
      * 流程状态：
0-创建；
1-签署中；
2-拒签；
3-撤回；
4-签完存档完成；
5-已过期；
6-已销毁
7-签署完成未归档
      */
  FlowStatus: number

  /**
   * 流程创建时间
   */
  CreatedOn: number

  /**
   * 流程完成时间
   */
  UpdatedOn: number

  /**
   * 流程截止日期
   */
  Deadline: number

  /**
   * 回调地址
   */
  CallbackUrl: string

  /**
   * 流程中止原因
   */
  FlowMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubOrganizationAndSeal请求参数结构体
 */
export interface CreateSubOrganizationAndSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 机构名称全称
   */
  Name: string

  /**
      * 机构证件号码类型可选值：
1. USCC - 统一社会信用代码
2. BIZREGISTNO - 营业执照注册号
      */
  IdCardType: string

  /**
   * 机构证件号码
   */
  IdCardNumber: string

  /**
      * 机构类型可选值：
1. ENTERPRISE - 企业
2. INDIVIDUALBIZ - 个体工商户
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
      */
  OrganizationType: string

  /**
   * 机构法人/经营者姓名
   */
  LegalName: string

  /**
      * 机构法人/经营者证件类型可选值：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
      */
  LegalIdCardType: string

  /**
      * 机构法人/经营者证件号码；
OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填
      */
  LegalIdCardNumber: string

  /**
   * 实名认证的客户端IP/请求生成企业印章的客户端Ip
   */
  VerifyClientIp: string

  /**
   * 机构电子邮箱
   */
  Email?: string

  /**
      * 机构证件文件类型可选值：
1. USCCFILE - 统一社会信用代码证书
2. LICENSEFILE - 营业执照
      */
  IdCardFileType?: string

  /**
   * 机构证件照片文件，base64编码，支持jpg、jpeg、png格式
   */
  BizLicenseFile?: string

  /**
   * 机构证件照片文件名
   */
  BizLicenseFileName?: string

  /**
   * 机构法人/经营者/联系人手机号码
   */
  LegalMobile?: string

  /**
   * 组织联系人姓名
   */
  ContactName?: string

  /**
   * 实名认证的服务器IP
   */
  VerifyServerIp?: string

  /**
   * 企业联系地址
   */
  ContactAddress?: Address

  /**
   * 电子印章名称
   */
  SealName?: string

  /**
      * 印章类型：默认: CONTRACT
1. OFFICIAL-公章
2. SPECIAL_FINANCIAL-财务专用章
3. CONTRACT-合同专用章
4. LEGAL_REPRESENTATIVE-法定代表人章
5. SPECIAL_NATIONWIDE_INVOICE-发票专用章
6. OTHER-其他
      */
  SealType?: string

  /**
   * 企业印章横向文字，最多可填8个汉字（可为空，默认为"电子签名专用章"）
   */
  SealHorizontalText?: string

  /**
   * 机构在第三方的唯一标识，32位以内标识符
   */
  OpenId?: string

  /**
   * 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一
   */
  UseOpenId?: boolean
}

/**
 * CheckMobileVerification请求参数结构体
 */
export interface CheckMobileVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 手机号
   */
  Mobile: string

  /**
   * 姓名
   */
  Name: string

  /**
   * 身份证件号码
   */
  IdCardNumber: string

  /**
   * 身份证件类型; ID_CARD
   */
  IdCardType?: string
}

/**
 * SendFlowUrl返回参数结构体
 */
export interface SendFlowUrlResponse {
  /**
   * 签署任务ID，标识每一次的流程发送
   */
  SignId: string

  /**
   * 签署链接
   */
  SignUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCatalogApprovers返回参数结构体
 */
export interface DescribeCatalogApproversResponse {
  /**
   * 参与者列表
   */
  Approvers: Array<CatalogApprovers>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * <自定义Id,文件id>映射对象
 */
export interface CustomFileIdMap {
  /**
   * 用户自定义ID
   */
  CustomId: string

  /**
   * 文件id
   */
  FileId: string
}

/**
 * SendFlow返回参数结构体
 */
export interface SendFlowResponse {
  /**
   * 签署任务ID，标识每一次的流程发送
   */
  SignId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 目录流程参与者
 */
export interface CatalogApprovers {
  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 参与者列表
   */
  Approvers: Array<FlowApproverInfo>
}

/**
 * DescribeSeals请求参数结构体
 */
export interface DescribeSealsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 印章ID列表
   */
  SealIds: Array<string>

  /**
   * 用户唯一标识
   */
  UserId?: string
}

/**
 * 此结构体 (FlowApproverInfo) 用于描述流程参与者信息。
 */
export interface FlowApproverInfo {
  /**
   * 用户ID
   */
  UserId: string

  /**
      * 认证方式：
WEIXINAPP - 微信小程序；
FACEID - 慧眼 (默认)；
VERIFYCODE - 验证码；
THIRD - 第三方 (暂不支持)
      */
  VerifyChannel: Array<string>

  /**
      * 签署状态：
0 - 待签署；
1- 已签署；
2 - 拒绝；
3 - 过期未处理；
4 - 流程已撤回,
12-审核中,
13-审核驳回
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApproveStatus: number

  /**
      * 拒签/签署/审核驳回原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApproveMessage: string

  /**
      * 签约时间的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApproveTime: number

  /**
      * 签署企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubOrganizationId: string

  /**
      * 签署完成后跳转的URL
注意：此字段可能返回 null，表示取不到有效值。
      */
  JumpUrl: string

  /**
      * 用户签署区ID到印章ID的映射集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComponentSeals: Array<ComponentSeal>

  /**
   * 签署前置条件：是否强制用户全文阅读，即阅读到待签署文档的最后一页。默认FALSE
   */
  IsFullText: boolean

  /**
   * 签署前置条件：强制阅读时长，页面停留时长不足则不允许签署。默认不限制
   */
  PreReadTime: number

  /**
   * 签署人手机号，脱敏显示
   */
  Mobile: string

  /**
   * 签署链接截止时间，默认签署流程发起后7天失效
   */
  Deadline: number

  /**
   * 是否为最后一个签署人, 若为最后一人，则其签署完成后自动归档
   */
  IsLastApprover: boolean

  /**
      * 短信模板
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmsTemplate: SmsTemplate

  /**
   * 身份证号，脱敏显示
   */
  IdCardNumber: string

  /**
   * 用户姓名
   */
  Name: string

  /**
   * 是否支持线下核身
   */
  CanOffLine: boolean

  /**
      * 证件号码类型：ID_CARD - 身份证，PASSPORT - 护照，MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证; 暂不支持用于电子签自有平台实名认证，MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证; 暂不支持用于电子签自有平台实名认证，HOUSEHOLD_REGISTER - 户口本; 暂不支持用于电子签自有平台实名认证，TEMP_ID_CARD - 临时居民身份证; 暂不支持用于电子签自有平台实名认证
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCardType: string

  /**
      * 签署回调地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CallbackUrl: string

  /**
      * 签署任务ID，标识每一次的流程发送
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignId: string
}

/**
 * DescribeFlowFiles请求参数结构体
 */
export interface DescribeFlowFilesRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 需要查询的流程ID
   */
  FlowId: string
}

/**
 * DescribeCustomFlowIds返回参数结构体
 */
export interface DescribeCustomFlowIdsResponse {
  /**
   * 自定义流程 id 映射列表
   */
  CustomIdList: Array<CustomFlowIdMap>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (SubOrganizationDetail) 用于描述子机构或子企业的详情信息。
 */
export interface SubOrganizationDetail {
  /**
   * 组织ID
   */
  Id: string

  /**
   * 机构名称全称
   */
  Name: string

  /**
   * 机构电子邮箱
   */
  Email: string

  /**
   * 机构证件号码类型
   */
  IdCardType: string

  /**
   * 机构证件号码
   */
  IdCardNumber: string

  /**
   * 机构类型
   */
  OrganizationType: string

  /**
      * 机构证件文件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCardFileType: string

  /**
      * 机构证件照片文件，base64编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizLicenseFile: string

  /**
   * 机构证件照片文件名
   */
  BizLicenseFileName: string

  /**
   * 机构法人/经营者姓名
   */
  LegalName: string

  /**
   * 机构法人/经营者证件类型
   */
  LegalIdCardType: string

  /**
   * 机构法人/经营者证件号码
   */
  LegalIdCardNumber: string

  /**
   * 机构法人/经营者/联系人手机号码
   */
  LegalMobile: string

  /**
      * 组织联系人姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContactName: string

  /**
   * 机构实名状态
   */
  VerifyStatus: string

  /**
      * 机构通过实名时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifiedOn: number

  /**
   * 机构创建时间
   */
  CreatedOn: number

  /**
      * 机构更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedOn: number

  /**
      * 实名认证的客户端IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifyClientIp: string

  /**
      * 实名认证的服务器IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifyServerIp: string

  /**
      * 企业联系地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContactAddress: Address
}

/**
 * CheckIdCardVerification请求参数结构体
 */
export interface CheckIdCardVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 姓名
   */
  Name: string

  /**
   * 身份证件号码
   */
  IdCardNumber: string

  /**
   * 身份证件类型; ID_CARD
   */
  IdCardType?: string
}

/**
 * CreateSignUrl返回参数结构体
 */
export interface CreateSignUrlResponse {
  /**
   * 合同签署链接
   */
  SignUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySubOrganizationInfo请求参数结构体
 */
export interface ModifySubOrganizationInfoRequest {
  /**
   * 调用方信息，该接口 SubOrganizationId 字段与 OpenId 字段二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
   */
  Caller: Caller

  /**
   * 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
   */
  OpenId?: string

  /**
   * 机构名称全称，修改后机构状态将变为未实名，需要调用实名接口重新实名。
   */
  Name?: string

  /**
      * 机构类型可选值：
1. ENTERPRISE - 企业；
2. INDIVIDUALBIZ - 个体工商户；
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
      */
  OrganizationType?: string

  /**
   * 机构证件照片文件，base64编码。支持jpg，jpeg，png格式；如果传值，则重新上传文件后，机构状态将变为未实名，需要调用实名接口重新实名。
   */
  BizLicenseFile?: string

  /**
   * 机构证件照片文件名
   */
  BizLicenseFileName?: string

  /**
   * 机构法人/经营者姓名
   */
  LegalName?: string

  /**
   * 机构法人/经营者证件类型，可选值：ID_CARD - 居民身份证。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填。
   */
  LegalIdCardType?: string

  /**
   * 机构法人/经营者证件号码。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填
   */
  LegalIdCardNumber?: string

  /**
   * 机构法人/经营者/联系人手机号码
   */
  LegalMobile?: string

  /**
   * 组织联系人姓名
   */
  ContactName?: string

  /**
   * 企业联系地址
   */
  ContactAddress?: Address

  /**
   * 机构电子邮箱
   */
  Email?: string
}

/**
 * SendSignInnerVerifyCode返回参数结构体
 */
export interface SendSignInnerVerifyCodeResponse {
  /**
   * true: 验证码正确，false: 验证码错误
   */
  Result: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFaceIdPhotos请求参数结构体
 */
export interface DescribeFaceIdPhotosRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 慧眼业务ID
   */
  WbAppId: string

  /**
   * 订单号(orderNo); 限制在3个或以内
   */
  OrderNumbers: Array<string>
}

/**
 * 此结构体 (FileUrl) 用于描述下载文件的URL信息。
 */
export interface FileUrl {
  /**
   * 下载文件的URL
   */
  Url: string

  /**
   * 下载文件的附加信息
   */
  Option: string

  /**
   * 下载文件所属的资源序号
   */
  Index: number

  /**
   * 目录业务下，文件对应的流程
   */
  FlowId: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 用户ID，按应用号隔离
   */
  UserId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckVerifyCodeMatchFlowId返回参数结构体
 */
export interface CheckVerifyCodeMatchFlowIdResponse {
  /**
   * true: 验证码正确，false: 验证码错误
   */
  Success: boolean

  /**
      * 0: 验证码正确 1:验证码错误或过期 2:验证码错误 3:验证码和流程不匹配 4:验证码输入错误超过次数 5:内部错误
6:参数错误
      */
  Result: number

  /**
   * 结果描述
   */
  Description: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyOrganizationDefaultSeal请求参数结构体
 */
export interface ModifyOrganizationDefaultSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 重新指定的默认印章ID
   */
  SealId: string

  /**
   * 请求重新指定企业默认印章的客户端IP
   */
  SourceIp: string
}

/**
 * CreateFaceIdSign返回参数结构体
 */
export interface CreateFaceIdSignResponse {
  /**
   * 慧眼API签名
   */
  Sign?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowApprovers返回参数结构体
 */
export interface DescribeFlowApproversResponse {
  /**
   * 流程编号
   */
  FlowId: string

  /**
   * 流程参与者信息
   */
  Approvers: Array<FlowApproverInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckMobileAndName请求参数结构体
 */
export interface CheckMobileAndNameRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 手机号
   */
  Mobile: string

  /**
   * 姓名
   */
  Name: string
}

/**
 * DeleteSeal请求参数结构体
 */
export interface DeleteSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 印章ID
   */
  SealId: string

  /**
   * 请求删除印章的客户端IP
   */
  SourceIp: string

  /**
   * 用户唯一标识，默认为空时删除企业印章，如非空则删除个人印章
   */
  UserId?: string
}

/**
 * CheckBankCardVerification返回参数结构体
 */
export interface CheckBankCardVerificationResponse {
  /**
      * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ArchiveFlow请求参数结构体
 */
export interface ArchiveFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程ID
   */
  FlowId: string
}

/**
 * CreateUserAndSeal返回参数结构体
 */
export interface CreateUserAndSealResponse {
  /**
   * 用户唯一标识，按应用号隔离
   */
  UserId: string

  /**
   * 默认印章ID
   */
  SealId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (FaceIdResult) 用于描述慧眼人脸核身结果。
 */
export interface FaceIdResult {
  /**
      * 核身结果：
0 - 通过；
1 - 未通过
      */
  Result: number

  /**
   * 核身失败描述
   */
  Description: string

  /**
   * 订单号 (orderNo)
   */
  OrderNumber: string

  /**
      * 姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 身份证件类型： 
ID_CARD - 居民身份证
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCardType: string

  /**
      * 身份证件号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCardNumber: string

  /**
      * 活体检测得分 (百分制)
注意：此字段可能返回 null，表示取不到有效值。
      */
  LiveRate: number

  /**
      * 人脸检测得分 (百分制)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Similarity: number

  /**
      * 刷脸时间 (UNIX时间戳)
注意：此字段可能返回 null，表示取不到有效值。
      */
  OccurredTime: number

  /**
      * 照片数据 (base64编码, 一般为JPG或PNG)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Photo: string

  /**
      * 视频数据 (base64编码, 一般为MP4)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Video: string
}

/**
 * CreateSignUrl请求参数结构体
 */
export interface CreateSignUrlRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 签署人ID
   */
  UserId: string

  /**
   * 文件签署截止时间戳
   */
  Deadline: number

  /**
   * 目录ID。当 SignUrlType 为 CATALOG 时必填
   */
  CatalogId?: string

  /**
   * 流程ID。当 SignUrlType 为 FLOW 时必填
   */
  FlowId?: string

  /**
      * 签署链接类型：
1. FLOW - 单流程签署 (默认) 
2. CATALOG - 目录签署
      */
  SignUrlType?: string

  /**
   * 发送流程或目录时生成的签署任务ID
   */
  SignId?: string
}

/**
 * 此结构体 (ComponentSeal) 用于描述“签署区ID”到“印章ID”的映射。
 */
export interface ComponentSeal {
  /**
   * 签署区ID
   */
  ComponentId: string

  /**
   * 印章ID
   */
  SealId: string
}

/**
 * DeleteSeal返回参数结构体
 */
export interface DeleteSealResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
      * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模版； 文件类型：.pdf/.html
2. DOCUMENT - 签署过程及签署后的合同文档 文件类型：.pdf/.html
3. FLOW - 签署过程 文件类型：.pdf/.html
4. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
5. BUSINESSLICENSE - 营业执照 文件类型：.jpg/.jpeg/.png
6. IDCARD - 身份证 文件类型：.jpg/.jpeg/.png
      */
  BusinessType: string

  /**
   * 上传文件内容数组，最多支持20个文件
   */
  FileInfos?: Array<UploadFile>

  /**
   * 上传文件链接数组，最多支持20个URL
   */
  FileUrls?: Array<string>

  /**
      * 是否将pdf灰色矩阵置白
true--是，处理置白
false--否，不处理
      */
  CoverRect?: boolean

  /**
      * 特殊文件类型需要指定文件类型：
HTML-- .html文件
      */
  FileType?: string

  /**
   * 用户自定义ID数组，与上传文件一一对应
   */
  CustomIds?: Array<string>
}

/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * UserId列表，最多支持100个UserId
   */
  UserIds: Array<string>
}

/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程创建信息
   */
  FlowInfo: FlowInfo

  /**
   * 文件资源列表 (支持多文件)
   */
  FileIds: Array<string>

  /**
   * 自定义流程id
   */
  CustomId?: string
}

/**
 * 目录流程签署区
 */
export interface CatalogComponents {
  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 签署区列表
   */
  SignComponents: Array<Component>

  /**
   * 签署任务ID
   */
  SignId: string
}

/**
 * ArchiveFlow返回参数结构体
 */
export interface ArchiveFlowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (FlowInfo) 用于描述流程信息。
 */
export interface FlowInfo {
  /**
   * 合同名字
   */
  FlowName: string

  /**
   * 签署截止时间戳，超过有效签署时间则该签署流程失败
   */
  Deadline: number

  /**
   * 合同描述
   */
  FlowDescription?: string

  /**
      * 合同类型：
1. “劳务”
2. “销售”
3. “租赁”
4. “其他”
      */
  FlowType?: string

  /**
   * 回调地址
   */
  CallbackUrl?: string

  /**
   * 用户自定义数据
   */
  UserData?: string
}

/**
 * 此结构体 (UserDescribe) 用于描述个人帐号查询结果。
 */
export interface UserDescribe {
  /**
   * 用户ID
   */
  UserId: string

  /**
   * 手机号，隐藏中间4位数字，用*代替
   */
  Mobile: string

  /**
   * 注册时间点 (UNIX时间戳)
   */
  CreatedOn: number

  /**
      * 实名认证状态：
0 - 未实名；
1 - 通过实名
      */
  VerifyStatus: number

  /**
   * 真实姓名
   */
  Name: string

  /**
   * 实名认证通过时间 (UNIX时间戳)
   */
  VerifiedOn: number

  /**
      * 身份证件类型; 
ID_CARD - 居民身份证；
PASSPORT - 护照；
MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证；
MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证；
HOUSEHOLD_REGISTER - 户口本；
TEMP_ID_CARD - 临时居民身份证
      */
  IdCardType: string

  /**
   * 身份证件号码 (脱敏)
   */
  IdCardNumber: string
}

/**
 * CheckBankCard2EVerification返回参数结构体
 */
export interface CheckBankCard2EVerificationResponse {
  /**
      * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifySubOrganization返回参数结构体
 */
export interface VerifySubOrganizationResponse {
  /**
   * 子机构ID
   */
  SubOrganizationId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSeals返回参数结构体
 */
export interface DescribeSealsResponse {
  /**
   * 印章信息
   */
  Seals: Array<Seal>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileUrls返回参数结构体
 */
export interface DescribeFileUrlsResponse {
  /**
   * 文件下载URL数组
   */
  FileUrls: Array<FileUrl>

  /**
   * URL数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySeal请求参数结构体
 */
export interface ModifySealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 请求更新印章的客户端IP
   */
  SourceIp: string

  /**
   * 电子印章ID。若为空，则修改个人/机构的默认印章。
   */
  SealId?: string

  /**
   * 电子印章名称
   */
  SealName?: string

  /**
   * 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数）
   */
  Image?: string

  /**
   * 印章图片文件ID（与Image参数二选一，同时传入参数时优先使用Image参数）
   */
  FileId?: string

  /**
   * 需要更新印章的用户ID
   */
  UserId?: string
}

/**
 * CheckBankCard3EVerification请求参数结构体
 */
export interface CheckBankCard3EVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 银行卡号
   */
  BankCard: string

  /**
   * 姓名
   */
  Name: string

  /**
   * 身份证件号码
   */
  IdCardNumber: string

  /**
   * 身份证件类型; ID_CARD
   */
  IdCardType?: string
}

/**
 * CheckBankCardVerification请求参数结构体
 */
export interface CheckBankCardVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 银行卡号
   */
  BankCard: string

  /**
   * 姓名
   */
  Name: string

  /**
   * 身份证件号码
   */
  IdCardNumber?: string

  /**
   * 手机号
   */
  Mobile?: string

  /**
   * 身份证件类型; ID_CARD
   */
  IdCardType?: string
}

/**
 * RejectFlow请求参数结构体
 */
export interface RejectFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程编号
   */
  FlowId: string

  /**
      * 意愿确认票据。
1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；
2. VerifyChannel 为 FACEID时，使用OrderNo；
3. VerifyChannel 为 VERIFYCODE，使用短信验证码
4. VerifyChannel 为 NONE，传空值
（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
      */
  VerifyResult: string

  /**
      * 意愿确认渠道：
1. WEIXINAPP - 微信小程序
2. FACEID - 慧眼 (默认) 
3. VERIFYCODE - 验证码
4. THIRD - 第三方 (暂不支持)
5. NONE - 无需电子签系统验证
（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
      */
  VerifyChannel: string

  /**
   * 客户端来源IP
   */
  SourceIp: string

  /**
   * 拒签原因
   */
  RejectMessage?: string

  /**
   * 签署参与者编号
   */
  SignId?: string
}

/**
 * DescribeSubOrganizations请求参数结构体
 */
export interface DescribeSubOrganizationsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 子机构ID数组
   */
  SubOrganizationIds: Array<string>
}

/**
 * 此结构体 (SignSeal) 用于描述签名/印章信息。
 */
export interface SignSeal {
  /**
   * 签署控件ID
   */
  ComponentId: string

  /**
      * 签署印章类型:
SIGN_SIGNATURE - 签名
SIGN_SEAL - 印章
SIGN_DATE - 日期
SIGN_IMAGE - 图片
      */
  SignType: string

  /**
   * 合同文件ID
   */
  FileIndex: number

  /**
   * 印章ID，仅当 SignType 为 SIGN_SEAL 时必填
   */
  SealId?: string

  /**
   * 签名内容，仅当 SignType 为SIGN_SIGNATURE或SIGN_IMAGE 时必填，base64编码
   */
  SealContent?: string
}

/**
 * DescribeCatalogSignComponents请求参数结构体
 */
export interface DescribeCatalogSignComponentsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 目录ID
   */
  CatalogId: string
}

/**
 * ModifyOrganizationDefaultSeal返回参数结构体
 */
export interface ModifyOrganizationDefaultSealResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowByFiles返回参数结构体
 */
export interface CreateFlowByFilesResponse {
  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserDefaultSeal返回参数结构体
 */
export interface ModifyUserDefaultSealResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFiles返回参数结构体
 */
export interface UploadFilesResponse {
  /**
   * 文件id数组
   */
  FileIds: Array<string>

  /**
   * 上传成功文件数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckBankCard3EVerification返回参数结构体
 */
export interface CheckBankCard3EVerificationResponse {
  /**
      * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SignFlow请求参数结构体
 */
export interface SignFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程编号
   */
  FlowId: string

  /**
      * 意愿确认票据。
1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；
2. VerifyChannel 为 FACEID时，使用OrderNo；
3. VerifyChannel 为 VERIFYCODE，使用短信验证码
4. VerifyChannel 为 NONE，传空值
（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
      */
  VerifyResult: string

  /**
      * 意愿确认渠道：
1. WEIXINAPP - 微信小程序
2. FACEID - 慧眼 (默认) 
3. VERIFYCODE - 验证码
4. THIRD - 第三方 (暂不支持)
5. NONE - 无需电子签系统验证
（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
      */
  VerifyChannel: string

  /**
   * 客户端来源IP
   */
  SourceIp: string

  /**
   * 签署内容
   */
  SignSeals: Array<SignSeal>

  /**
   * 签署备注
   */
  ApproveMessage?: string

  /**
   * 签署参与者编号
   */
  SignId?: string
}

/**
 * 自定义流程id映射关系
 */
export interface CustomFlowIdMap {
  /**
   * 自定义id
   */
  CustomId: string

  /**
   * 流程id
   */
  FlowId: string
}

/**
 * DescribeCustomFlowIdsByFlowId请求参数结构体
 */
export interface DescribeCustomFlowIdsByFlowIdRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程 id 列表，最多同时查询 10 个流程 id
   */
  FlowIds: Array<string>
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
   * 文件名
   */
  FileName?: string
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 用户信息查询结果
   */
  Users: Array<UserDescribe>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateH5FaceIdUrl请求参数结构体
 */
export interface CreateH5FaceIdUrlRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 慧眼业务ID; 不填写时后台使用Caller反查
   */
  WbAppId?: string

  /**
   * 姓名; 可选(未通过实名认证的用户必选)
   */
  Name?: string

  /**
   * 用户证件类型; 可选; 默认ID_CARD:中国居民身份证
   */
  IdCardType?: string

  /**
   * 用户证件号; 可选(未通过实名认证的用户必选)
   */
  IdCardNumber?: string

  /**
   * H5人脸核身完成后回调的第三方Url; 可选; 不需要做Encode, 跳转的参数: ?code=XX&orderNo=XX&liveRate=xx, code=0表示成功,orderNo为订单号,liveRate为百分制活体检测得分
   */
  JumpUrl?: string

  /**
   * 参数值为"1":直接跳转到url回调地址; 可选; 其他值:跳转提供的结果页面
   */
  JumpType?: string

  /**
   * browser:表示在浏览器启动刷脸, app:表示在App里启动刷脸,默认值为browser; 可选
   */
  OpenFrom?: string

  /**
   * 跳转类型; 可选; 参数值为"1"时,刷脸页面使用replace方式跳转,不在浏览器history中留下记录;不传或其他值则正常跳转
   */
  RedirectType?: string
}

/**
 * CheckMobileVerification返回参数结构体
 */
export interface CheckMobileVerificationResponse {
  /**
      * 检测结果
计费结果码：
  0:  验证结果一致
  1:  手机号未实名
  2:  姓名和手机号不一致
  3:  信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)
不收费结果码:
  101: 查无记录
  102: 非法姓名(长度,格式等不正确)
  103: 非法手机号(长度,格式等不正确)
  104: 非法身份证号(长度,校验位等不正确)
  105: 认证未通过
  106: 验证平台异常
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowFiles返回参数结构体
 */
export interface DescribeFlowFilesResponse {
  /**
   * 流程编号
   */
  FlowId?: string

  /**
   * 流程文件列表
   */
  FlowFileInfos?: Array<FlowFileInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 第三方平台唯一标识；要求应用内OpenId唯一; len<=32
   */
  OpenId: string

  /**
   * 用户姓名
   */
  Name: string

  /**
      * 用户证件类型：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
      */
  IdCardType: string

  /**
   * 用户证件号
   */
  IdCardNumber: string

  /**
   * 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId)
   */
  UseOpenId?: boolean

  /**
   * 用户邮箱，不要求唯一
   */
  Email?: string

  /**
   * 用户手机号码，不要求唯一
   */
  Mobile?: string
}

/**
 * CreatePreviewSignUrl请求参数结构体
 */
export interface CreatePreviewSignUrlRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * URL过期时间戳
   */
  Deadline: number

  /**
   * 目录ID。当 SignUrlType 为 CATALOG 时必填
   */
  CatalogId?: string

  /**
   * 流程ID。当 SignUrlType 为 FLOW 时必填
   */
  FlowId?: string

  /**
      * 签署链接类型：
1. FLOW - 单流程签署 (默认) 
2. CATALOG - 目录签署
      */
  SignUrlType?: string
}

/**
 * CreateUserAndSeal请求参数结构体
 */
export interface CreateUserAndSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 第三方平台唯一标识，要求应用内OpenId唯一
   */
  OpenId: string

  /**
   * 用户姓名
   */
  Name: string

  /**
      * 用户证件类型：
1. ID_CARD - 居民身份证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
      */
  IdCardType: string

  /**
   * 用户证件号
   */
  IdCardNumber: string

  /**
   * 请求生成个人印章的客户端IP
   */
  SourceIp: string

  /**
   * 用户手机号码，不要求唯一
   */
  Mobile?: string

  /**
   * 用户邮箱，不要求唯一
   */
  Email?: string

  /**
   * 默认印章名称
   */
  SealName?: string

  /**
   * 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId)
   */
  UseOpenId?: boolean
}

/**
 * CreatePreviewSignUrl返回参数结构体
 */
export interface CreatePreviewSignUrlResponse {
  /**
   * 合同预览URL
   */
  PreviewSignUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFaceIdSign请求参数结构体
 */
export interface CreateFaceIdSignRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 除api_ticket之外的其它要参与签名的参数值,包括UserId
   */
  Values: Array<string>
}

/**
 * DescribeCustomFlowIdsByFlowId返回参数结构体
 */
export interface DescribeCustomFlowIdsByFlowIdResponse {
  /**
   * 自定义流程 id 映射列表
   */
  CustomIdList: Array<CustomFlowIdMap>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SignFlow返回参数结构体
 */
export interface SignFlowResponse {
  /**
   * 签署任务状态。签署成功 - SUCCESS、提交审核 - REVIEW
   */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RejectFlow返回参数结构体
 */
export interface RejectFlowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlow请求参数结构体
 */
export interface DescribeFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 需要查询的流程ID
   */
  FlowId: string
}

/**
 * DescribeFileIdsByCustomIds请求参数结构体
 */
export interface DescribeFileIdsByCustomIdsRequest {
  /**
   * 调用方信息, OrganizationId必填
   */
  Caller: Caller

  /**
   * 用户自定义ID
   */
  CustomIds?: Array<string>
}

/**
 * CreateSeal返回参数结构体
 */
export interface CreateSealResponse {
  /**
   * 电子印章Id
   */
  SealId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateOrganizationSeal返回参数结构体
 */
export interface GenerateOrganizationSealResponse {
  /**
   * 电子印章Id
   */
  SealId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubOrganizations返回参数结构体
 */
export interface DescribeSubOrganizationsResponse {
  /**
   * 子机构信息列表
   */
  SubOrganizationInfos: Array<SubOrganizationDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyFlowFile请求参数结构体
 */
export interface DestroyFlowFileRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程ID
   */
  FlowId: string
}

/**
 * CheckFaceIdentify返回参数结构体
 */
export interface CheckFaceIdentifyResponse {
  /**
   * 核身结果; 0:通过,1:不通过
   */
  Result?: number

  /**
   * 核身结果描述
   */
  Description?: string

  /**
   * 渠道名
   */
  ChannelName?: string

  /**
      * 认证通过时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifiedOn?: number

  /**
   * 核身流水号
   */
  SerialNumber?: string

  /**
      * 渠道核身服务器IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  VerifyServerIp?: string

  /**
      * 核身照片文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhotoFileName?: string

  /**
      * 核身照片内容base64(文件格式见文件名后缀,一般为jpg)
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhotoFileData?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (Seal) 用于描述电子印章的信息。
 */
export interface Seal {
  /**
   * 电子印章ID
   */
  SealId: string

  /**
   * 电子印章名称
   */
  SealName: string

  /**
   * 电子印章类型
   */
  SealType: string

  /**
      * 电子印章来源：
CREATE - 通过图片上传
GENERATE - 通过文字生成
      */
  SealSource: string

  /**
   * 电子印章创建者
   */
  Creator: Caller

  /**
   * 电子印章创建时间戳
   */
  CreatedOn: number

  /**
   * 电子印章所有人
   */
  UserId: string

  /**
   * 电子印章URL
   */
  FileUrl: FileUrl

  /**
   * 是否为默认印章，false-非默认，true-默认
   */
  DefaultSeal: boolean
}

/**
 * SendFlowUrl请求参数结构体
 */
export interface SendFlowUrlRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 需要推送合同的流程ID
   */
  FlowId: string

  /**
   * 签署人ID
   */
  UserId: string

  /**
   * 签署控件信息 (支持添加多个控件)
   */
  SignComponents: Array<Component>

  /**
   * 签署人手机号 (如果选择短信验证码签署，则此字段必填)
   */
  Mobile?: string

  /**
   * 签署人对应的子机构ID，个人签署者此字段不填
   */
  SubOrganizationId?: string

  /**
      * 签名后校验方式：
1. WEIXINAPP - 微信小程序；
2. FACEID - 慧眼 (默认) ；
3. VERIFYCODE - 验证码；
4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；
5. THIRD - 第三方 (暂不支持)
6. OFFLINE - 线下人工审核
      */
  VerifyChannel?: Array<string>

  /**
   * 签署链接失效截止时间，默认为7天
   */
  Deadline?: number

  /**
   * 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档
   */
  IsLastApprover?: boolean

  /**
   * 签署完成后，前端跳转的url
   */
  JumpUrl?: string

  /**
      * 短信模板
默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。
      */
  SmsTemplate?: SmsTemplate

  /**
   * 签署前置条件：是否要全文阅读，默认否
   */
  IsFullText?: boolean

  /**
   * 签署前置条件：强制用户阅读待签署文件时长，默认不限制
   */
  PreReadTime?: number

  /**
   * 当前参与者是否支持线下核身,默认为不支持
   */
  CanOffLine?: boolean

  /**
   * 签署任务的回调地址
   */
  CallbackUrl?: string
}

/**
 * CancelFlow请求参数结构体
 */
export interface CancelFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 撤销原因
   */
  CancelMessage?: string
}

/**
 * CreateH5FaceIdUrl返回参数结构体
 */
export interface CreateH5FaceIdUrlResponse {
  /**
   * 跳转到人脸核身页面的链接
   */
  Url?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomFlowIds请求参数结构体
 */
export interface DescribeCustomFlowIdsRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 自定义 id 列表，最多同时查询 10 个自定义 id
   */
  CustomIds: Array<string>
}

/**
 * DescribeFlowApprovers请求参数结构体
 */
export interface DescribeFlowApproversRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 需要查询的流程ID
   */
  FlowId: string

  /**
   * 需要查询的用户ID，为空则默认查询所有用户信息
   */
  UserId?: string

  /**
   * 需要查询的签署ID，为空则不按签署ID过滤
   */
  SignId?: string
}

/**
 * DescribeFaceIdResults返回参数结构体
 */
export interface DescribeFaceIdResultsResponse {
  /**
   * 核身结果列表
   */
  Results?: Array<FaceIdResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckBankCard4EVerification请求参数结构体
 */
export interface CheckBankCard4EVerificationRequest {
  /**
   * 调用方信息; 必选
   */
  Caller: Caller

  /**
   * 银行卡号
   */
  BankCard: string

  /**
   * 姓名
   */
  Name: string

  /**
   * 身份证件号码
   */
  IdCardNumber?: string

  /**
   * 手机号
   */
  Mobile?: string

  /**
   * 身份证件类型; ID_CARD
   */
  IdCardType?: string
}

/**
 * GenerateUserSeal返回参数结构体
 */
export interface GenerateUserSealResponse {
  /**
   * 电子印章Id
   */
  SealId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCatalogSignComponents返回参数结构体
 */
export interface DescribeCatalogSignComponentsResponse {
  /**
   * 签署区列表
   */
  SignComponents: Array<CatalogComponents>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateOrganizationSeal请求参数结构体
 */
export interface GenerateOrganizationSealRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
      * 印章类型：
OFFICIAL-公章
SPECIAL_FINANCIAL-财务专用章
CONTRACT-合同专用章
LEGAL_REPRESENTATIVE-法定代表人章
SPECIAL_NATIONWIDE_INVOICE-发票专用章
OTHER-其他
      */
  SealType: string

  /**
   * 请求生成企业印章的客户端Ip
   */
  SourceIp: string

  /**
   * 电子印章名称
   */
  SealName?: string

  /**
   * 企业印章横向文字，最多可填8个汉字（可不填，默认为"电子签名专用章"）
   */
  SealHorizontalText?: string

  /**
   * 是否是默认印章 true：是，false：否
   */
  IsDefault?: boolean
}

/**
 * CreateServerFlowSign请求参数结构体
 */
export interface CreateServerFlowSignRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 签署区域信息
   */
  SignComponents: Array<Component>

  /**
   * 客户端IP
   */
  SourceIp: string
}

/**
 * 此结构体 (Caller) 用于描述调用方属性。
 */
export interface Caller {
  /**
   * 应用号
   */
  ApplicationId: string

  /**
   * 下属机构ID
   */
  SubOrganizationId?: string

  /**
   * 经办人的用户ID
   */
  OperatorId?: string
}

/**
 * VerifyUser返回参数结构体
 */
export interface VerifyUserResponse {
  /**
   * 电子签平台用户ID
   */
  UserId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendFlow请求参数结构体
 */
export interface SendFlowRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 需要推送合同的流程ID
   */
  FlowId: string

  /**
   * 签署人用户ID
   */
  UserId: string

  /**
   * 签署控件信息 (支持添加多个控件)
   */
  SignComponents: Array<Component>

  /**
   * 签署人手机号 (如果选择短信验证码签署，则此字段必填)
   */
  Mobile?: string

  /**
   * 签署人对应的子机构ID，个人签署者此字段不填
   */
  SubOrganizationId?: string

  /**
      * 签名后校验方式：
1. WEIXINAPP - 微信小程序；
2. FACEID - 慧眼 (默认) ；
3. VERIFYCODE - 验证码；
4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；
5. THIRD - 第三方 (暂不支持)
      */
  VerifyChannel?: Array<string>

  /**
   * 签署链接失效截止时间，默认为7天
   */
  Deadline?: number

  /**
   * 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档。
   */
  IsLastApprover?: boolean

  /**
   * 签署完成后，前端跳转的URL
   */
  JumpUrl?: string

  /**
   * 短信模板。默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。
   */
  SmsTemplate?: SmsTemplate

  /**
   * 签署前置条件：是否要全文阅读，默认否
   */
  IsFullText?: boolean

  /**
   * 签署前置条件：强制用户阅读待签署文件时长，默认不限制
   */
  PreReadTime?: number

  /**
   * 当前参与者是否支持线下核身,默认为不支持
   */
  CanOffLine?: boolean

  /**
   * 签署任务的回调地址
   */
  CallbackUrl?: string
}

/**
 * SendSignInnerVerifyCode请求参数结构体
 */
export interface SendSignInnerVerifyCodeRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 手机号
   */
  Mobile: string

  /**
   * 验证码类型，取值(SIGN)
   */
  VerifyType: string

  /**
   * 用户 id
   */
  UserId?: string

  /**
   * 模板 id
   */
  VerifyTemplateId?: string

  /**
   * 签名
   */
  VerifySign?: string

  /**
   * 流程(目录) id
   */
  FlowId?: string

  /**
   * 三要素检测结果
   */
  CheckThreeElementResult?: number
}

/**
 * DestroyFlowFile返回参数结构体
 */
export interface DestroyFlowFileResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubOrganization返回参数结构体
 */
export interface CreateSubOrganizationResponse {
  /**
   * 子机构ID
   */
  SubOrganizationId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubOrganizationAndSeal返回参数结构体
 */
export interface CreateSubOrganizationAndSealResponse {
  /**
   * 子机构在电子文件签署平台唯一标识
   */
  SubOrganizationId: string

  /**
   * 电子印章ID
   */
  SealId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 调用方信息
   */
  Caller: Caller

  /**
   * 第三方平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId
   */
  OpenId?: string

  /**
   * 腾讯电子签平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId
   */
  UserId?: string

  /**
   * 用户手机号码，不要求唯一
   */
  Mobile?: string

  /**
   * 用户邮箱，不要求唯一
   */
  Email?: string

  /**
   * 用户姓名
   */
  Name?: string
}

/**
 * CheckMobileAndName返回参数结构体
 */
export interface CheckMobileAndNameResponse {
  /**
      * 检测结果
计费结果码：
  0:  验证结果一致
  1:  手机号未实名
  2:  姓名和手机号不一致
  3:  信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)
不收费结果码:
  101: 查无记录
  102: 非法姓名(长度,格式等不正确)
  103: 非法手机号(长度,格式等不正确)
  104: 非法身份证号(长度,校验位等不正确)
  105: 认证未通过
  106: 验证平台异常
      */
  Result?: number

  /**
   * 结果描述; 未通过时必选
   */
  Description?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySeal返回参数结构体
 */
export interface ModifySealResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
