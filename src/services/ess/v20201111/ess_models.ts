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
 * DescribeFileUrls返回参数结构体
 */
export interface DescribeFileUrlsResponse {
  /**
   * URL信息
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
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
  /**
   * 返回的电子文档ID
   */
  DocumentId: string

  /**
      * 返回合同文件的预览地址 5分钟内有效。仅当NeedPreview为true 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  PreviewFileUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartFlow请求参数结构体
 */
export interface StartFlowRequest {
  /**
   * 用户信息
   */
  Operator: UserInfo

  /**
   * 流程编号
   */
  FlowId: string

  /**
   * 应用相关信息
   */
  Agent?: Agent

  /**
   * 客户端Token，保持接口幂等性
   */
  ClientToken?: string
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
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
  /**
   * 无
   */
  Operator: UserInfo

  /**
   * 用户上传的模板ID
   */
  TemplateId: string

  /**
   * 流程ID
   */
  FlowId: string

  /**
   * 文件名列表
   */
  FileNames: Array<string>

  /**
   * 内容控件信息数组
   */
  FormFields?: Array<FormField>

  /**
   * 应用相关信息
   */
  Agent?: Agent

  /**
   * 客户端Token，保持接口幂等性
   */
  ClientToken?: string

  /**
      * 是否需要生成预览文件 默认不生成；
预览链接有效期300秒；
      */
  NeedPreview?: boolean
}

/**
 * CreateFlow请求参数结构体
 */
export interface CreateFlowRequest {
  /**
   * 操作人信息
   */
  Operator: UserInfo

  /**
   * 流程的名字, 长度不能超过200，中文字母数字下划线
   */
  FlowName: string

  /**
   * 参与者信息
   */
  Approvers: Array<FlowCreateApprover>

  /**
   * 流程的描述, 长度不能超过1000
   */
  FlowDescription?: string

  /**
   * 发送类型(true为无序签,false为顺序签)
   */
  Unordered?: boolean

  /**
   * 流程的种类(如销售合同/入职合同等)
   */
  FlowType?: string

  /**
   * 过期时间戳,如果是0则为不过期
   */
  DeadLine?: number

  /**
   * 执行结果的回调URL(需要以http://或者https://)开头
   */
  CallbackUrl?: string

  /**
   * 用户自定义字段(需进行base64 encode),回调的时候会进行透传, 长度需要小于20480
   */
  UserData?: string

  /**
   * 应用相关信息
   */
  Agent?: Agent

  /**
   * 客户端Token，保持接口幂等性
   */
  ClientToken?: string
}

/**
 * CreateSchemeUrl请求参数结构体
 */
export interface CreateSchemeUrlRequest {
  /**
   * 调用方用户信息，参考通用结构
   */
  Operator: UserInfo

  /**
   * 调用方渠道信息，参考通用结构
   */
  Agent?: Agent

  /**
   * 姓名
   */
  Name?: string

  /**
   * 手机号
   */
  Mobile?: string

  /**
   * 跳转页面 1: 小程序合同详情 2: 小程序合同列表页 0: 不传, 默认主页
   */
  PathType?: number

  /**
   * 合同详情 id (PathType=1时必传)
   */
  FlowId?: string

  /**
   * 企业名称
   */
  OrganizationName?: string

  /**
   * 链接类型 HTTP：跳转电子签小程序的http_url，APP：第三方APP或小程序跳转电子签小程序，默认为HTTP类型
   */
  EndPoint?: string

  /**
   * 是否自动回跳 true：是， false：否。该参数只针对"APP" 类型的签署链接有效
   */
  AutoJumpBack?: boolean
}

/**
 * 下载文件的URL信息
 */
export interface FileUrl {
  /**
   * 下载文件的URL
   */
  Url: string

  /**
      * 下载文件的附加信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Option: string
}

/**
 * DescribeThirdPartyAuthCode请求参数结构体
 */
export interface DescribeThirdPartyAuthCodeRequest {
  /**
   * AuthCode 值
   */
  AuthCode: string
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
  FileUrls?: string

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
 * CancelFlow请求参数结构体
 */
export interface CancelFlowRequest {
  /**
   * 操作用户id
   */
  Operator: UserInfo

  /**
   * 流程id
   */
  FlowId: string

  /**
   * 撤销原因
   */
  CancelMessage: string

  /**
   * 应用相关信息
   */
  Agent?: Agent
}

/**
 * DescribeFlowBriefs返回参数结构体
 */
export interface DescribeFlowBriefsResponse {
  /**
   * 流程列表
   */
  FlowBriefs: Array<FlowBrief>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板控件信息
 */
export interface Component {
  /**
      * 如果是 Component 控件类型，则可选类型为：
TEXT - 内容文本控件
DATE - 内容日期控件
SELECT - 勾选框控件
如果是 SignComponent 控件类型，则可选类型为：
SIGN_SEAL - 签署印章控件
SIGN_DATE - 签署日期控件
SIGN_SIGNATURE - 手写签名控件
      */
  ComponentType: string

  /**
   * 参数控件宽度，单位px
   */
  ComponentWidth: number

  /**
   * 参数控件高度，单位px
   */
  ComponentHeight: number

  /**
   * 参数控件所在页码，取值为：1-N
   */
  ComponentPage: number

  /**
   * 参数控件X位置，单位px
   */
  ComponentPosX: number

  /**
   * 参数控件Y位置，单位px
   */
  ComponentPosY: number

  /**
   * 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N）
   */
  FileIndex: number

  /**
   * 控件编号
   */
  ComponentId?: string

  /**
   * 控件名称
   */
  ComponentName?: string

  /**
   * 是否必选，默认为false
   */
  ComponentRequired?: boolean

  /**
   * 参数控件样式
   */
  ComponentExtra?: string

  /**
   * 控件关联的签署人ID
   */
  ComponentRecipientId?: string

  /**
   * 控件所填写的内容
   */
  ComponentValue?: string

  /**
   * 是否是表单域类型，默认不存在
   */
  IsFormType?: boolean

  /**
      * NORMAL 正常模式，使用坐标制定签署控件位置
FIELD 表单域，需使用ComponentName指定表单域名称
KEYWORD 关键字，使用ComponentId指定关键字
      */
  GenerateMode?: string

  /**
   * 日期控件类型字号
   */
  ComponentDateFontSize?: number
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
 * DescribeThirdPartyAuthCode返回参数结构体
 */
export interface DescribeThirdPartyAuthCodeResponse {
  /**
   * 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名
   */
  VerifyStatus: string

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
   * 流程编号
   */
  FlowId: string

  /**
      * 合同预览链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  PreviewUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowBriefs请求参数结构体
 */
export interface DescribeFlowBriefsRequest {
  /**
   * 操作人信息
   */
  Operator: UserInfo

  /**
   * 需要查询的流程ID列表
   */
  FlowIds: Array<string>

  /**
   * 代理商信息
   */
  Agent?: Agent
}

/**
 * DescribeFileUrls请求参数结构体
 */
export interface DescribeFileUrlsRequest {
  /**
      * 文件对应的业务类型，目前支持：
- 模板 "TEMPLATE"
- 文档 "DOCUMENT"
- 印章  “SEAL”
- 流程 "FLOW"
      */
  BusinessType: string

  /**
   * 操作者信息
   */
  Operator: UserInfo

  /**
   * 业务编号的数组，如模板编号、文档编号、印章编号
   */
  BusinessIds: Array<string>

  /**
   * 文件类型，"JPG", "PDF","ZIP"等
   */
  FileType?: string

  /**
   * 下载后的文件命名，只有fileType为zip的时候生效
   */
  FileName?: string

  /**
   * 指定资源起始偏移量
   */
  Offset?: number

  /**
   * 指定资源数量，查询全部资源则传入-1
   */
  Limit?: number

  /**
   * 应用相关信息
   */
  Agent?: Agent

  /**
   * 下载url过期时间，0: 按默认值5分钟，允许范围：1s~24*60*60s(1天)
   */
  UrlTtl?: number

  /**
   * 流程校验发送邮件权限
   */
  CcToken?: string

  /**
   * 场景
   */
  Scene?: string
}

/**
 * 参与者信息
 */
export interface ApproverInfo {
  /**
      * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
      */
  ApproverType: number

  /**
   * 本环节需要操作人的名字
   */
  ApproverName: string

  /**
   * 本环节需要操作人的手机号
   */
  ApproverMobile: string

  /**
   * 本环节操作人签署控件配置，为企业静默签署时，只允许类型为SIGN_SEAL（印章）和SIGN_DATE（日期）控件，并且传入印章编号。
   */
  SignComponents: Array<Component>

  /**
   * 如果是企业,则为企业的名字
   */
  OrganizationName?: string

  /**
   * 身份证号
   */
  ApproverIdCardNumber?: string

  /**
      * 证件类型 
ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
      */
  ApproverIdCardType?: string

  /**
   * sms--短信，none--不通知
   */
  NotifyType?: string

  /**
   * 1--收款人、2--开具人、3--见证人
   */
  ApproverRole?: number

  /**
   * 签署意愿确认渠道,WEIXINAPP:人脸识别
   */
  VerifyChannel?: Array<string>

  /**
   * 合同的强制预览时间：3~300s，未指定则按合同页数计算
   */
  PreReadTime?: number
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
   * 主机构ID
   */
  OrganizationId?: string

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
 * StartFlow返回参数结构体
 */
export interface StartFlowResponse {
  /**
   * 返回描述，START-发起成功， REVIEW-提交审核成功，EXECUTING-已提交发起任务
   */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建流程的签署方信息
 */
export interface FlowCreateApprover {
  /**
      * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
      */
  ApproverType: number

  /**
   * 如果签署方为企业，需要填入企业全称
   */
  OrganizationName?: string

  /**
      * 是否需要签署
- `false`: 不需要签署
-  `true`:  需要签署
      */
  Required?: boolean

  /**
   * 签署方经办人姓名
   */
  ApproverName?: string

  /**
   * 签署方经办人手机号码
   */
  ApproverMobile?: string

  /**
   * 签署方经办人证件号码
   */
  ApproverIdCardNumber?: string

  /**
      * 签署方经办人证件类型ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
      */
  ApproverIdCardType?: string

  /**
   * 签署方经办人在模板中的角色ID
   */
  RecipientId?: string

  /**
   * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个
   */
  UserId?: string

  /**
   * 签署前置条件：是否需要阅读全文，默认为不需要
   */
  IsFullText?: boolean

  /**
   * 签署前置条件：阅读时长限制，默认为不需要
   */
  PreReadTime?: number

  /**
   * 是否发送短信，sms--短信通知，none--不通知，默认为sms
   */
  NotifyType?: string

  /**
   * 签署意愿确认渠道,WEIXINAPP:人脸识别
   */
  VerifyChannel?: Array<string>
}

/**
 * CreateSchemeUrl返回参数结构体
 */
export interface CreateSchemeUrlResponse {
  /**
   * 小程序链接地址
   */
  SchemeUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
  /**
   * 调用方用户信息
   */
  Operator: UserInfo

  /**
   * 流程名称
   */
  FlowName: string

  /**
   * 签署pdf文件的资源编号列表
   */
  FileIds: Array<string>

  /**
   * 签署参与者信息
   */
  Approvers: Array<ApproverInfo>

  /**
   * 流程描述
   */
  FlowDescription?: string

  /**
      * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签）
      */
  Unordered?: boolean

  /**
   * 流程的类型
   */
  FlowType?: string

  /**
   * 流程的签署截止时间
   */
  Deadline?: number

  /**
   * 应用号信息
   */
  Agent?: Agent

  /**
      * 经办人内容控件配置。可选类型为：
TEXT - 内容文本控件
MULTI_LINE_TEXT - 多行文本控件
注：默认字体大小为 字号12
      */
  Components?: Array<Component>

  /**
   * 被抄送人的信息列表
   */
  CcInfos?: Array<CcInfo>

  /**
   * 是否需要预览，true：预览模式，false：非预览（默认）
   */
  NeedPreview?: boolean
}

/**
 * CreateFlow返回参数结构体
 */
export interface CreateFlowResponse {
  /**
   * 流程编号
   */
  FlowId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用相关信息
 */
export type Agent = null

/**
 * 电子文档的控件填充信息
 */
export interface FormField {
  /**
   * 控件填充value
   */
  ComponentValue: string

  /**
   * 控件id
   */
  ComponentId?: string

  /**
   * 控件名字
   */
  ComponentName?: string
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
   * 用户的来源渠道
   */
  Channel?: string

  /**
   * 用户在渠道的编号
   */
  OpenId?: string

  /**
   * 用户真实IP
   */
  ClientIp?: string

  /**
   * 用户代理IP
   */
  ProxyIp?: string
}

/**
 * 流程信息摘要
 */
export interface FlowBrief {
  /**
   * 流程的编号
   */
  FlowId: string

  /**
   * 流程的名称
   */
  FlowName: string

  /**
      * 流程的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowDescription: string

  /**
   * 流程的类型
   */
  FlowType: string

  /**
      * 流程状态
- `1` 未签署
- `2`  部分签署
- `3`  已退回
- `4`  完成签署
- `5`  已过期
- `6`  已取消
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowStatus: number

  /**
      * 流程创建的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedOn: number

  /**
      * 拒签或者取消的原因描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowMessage: string
}

/**
 * 抄送信息
 */
export interface CcInfo {
  /**
   * 被抄送人手机号
   */
  Mobile?: string
}
