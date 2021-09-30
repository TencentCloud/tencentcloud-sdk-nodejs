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
 * SyncProxyOrganization返回参数结构体
 */
export interface SyncProxyOrganizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建流程签署人入参
 */
export interface FlowApproverInfo {
  /**
   * 签署人姓名
   */
  Name: string

  /**
   * 签署人手机号，脱敏显示
   */
  Mobile: string

  /**
   * 经办人身份证号
   */
  IdCardNumber?: string

  /**
   * 签署完前端跳转的url，暂未使用
   */
  JumpUrl?: string

  /**
   * 签署截止时间
   */
  Deadline?: number

  /**
   * 签署完回调url
   */
  CallbackUrl?: string

  /**
   * 签署人类型，PERSON和ORGANIZATION
   */
  ApproverType?: string

  /**
   * 用户侧第三方id
   */
  OpenId?: string
}

/**
 * PrepareFlows返回参数结构体
 */
export interface PrepareFlowsResponse {
  /**
   * 待发起文件确认页
   */
  ConfirmUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。
 */
export interface TemplateInfo {
  /**
   * 模板ID
   */
  TemplateId: string

  /**
   * 模板名字
   */
  TemplateName: string

  /**
   * 模板描述信息
   */
  Description: string

  /**
   * 模板控件信息结构
   */
  Components: Array<Component>

  /**
   * 签署区模板信息结构
   */
  SignComponents: Array<Component>

  /**
   * 模板的创建者信息
   */
  Creator: string

  /**
   * 模板创建的时间戳（精确到秒）
   */
  CreatedOn: number

  /**
   * 模板类型：1-静默签；2-静默签授权；3-普通模版
   */
  TemplateType: number

  /**
   * 模板中的流程参与人信息
   */
  Recipients: Array<Recipient>
}

/**
 * DescribeTemplates返回参数结构体
 */
export interface DescribeTemplatesResponse {
  /**
   * 模板详情
   */
  Templates: Array<TemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncProxyOrganizationOperators请求参数结构体
 */
export interface SyncProxyOrganizationOperatorsRequest {
  /**
   * 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN"
   */
  OperatorType: string

  /**
   * 应用信息
   */
  Agent: Agent

  /**
   * 经办人信息列表
   */
  ProxyOrganizationOperators: Array<ProxyOrganizationOperator>

  /**
   * 操作者的信息
   */
  Operator?: UserInfo
}

/**
 * CreateSignUrls请求参数结构体
 */
export interface CreateSignUrlsRequest {
  /**
   * 渠道应用相关信息
   */
  Agent: Agent

  /**
   * 所签署合同ID数组
   */
  FlowIds: Array<string>

  /**
   * 操作者的信息
   */
  Operator?: UserInfo

  /**
   * 签署链接类型，默认：“WEIXINAPP”-直接跳小程序; “CHANNEL”-跳转H5页面; “APP”-第三方APP或小程序跳转电子签小程序;
   */
  Endpoint?: string

  /**
   * 签署完成后H5引导页跳转URL
   */
  JumpUrl?: string
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

创建控件时，此值为空
查询时返回完整结构
      */
  ComponentId?: string

  /**
      * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件；
DATE - 普通日期控件；跟TEXT相比会有校验逻辑
如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件；

表单域的控件不能作为印章和签名控件
      */
  ComponentType?: string

  /**
   * 控件简称
   */
  ComponentName?: string

  /**
   * 定义控件是否为必填项，默认为false
   */
  ComponentRequired?: boolean

  /**
   * 控件所属文件的序号 (文档中文件的排列序号)
   */
  FileIndex?: number

  /**
      * 控件生成的方式：
NORMAL - 普通控件
FIELD - 表单域
KEYWORD - 关键字
      */
  GenerateMode?: string

  /**
      * 参数控件宽度，默认100，单位px
表单域和关键字转换控件不用填
      */
  ComponentWidth?: number

  /**
      * 参数控件高度，默认100，单位px
表单域和关键字转换控件不用填
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
      * 参数控件样式，json格式表述
不同类型的控件会有部分非通用参数
TEXT控件可以指定字体
例如：{"FontSize":12}
      */
  ComponentExtra?: string

  /**
      * 印章 ID，传参 DEFAULT_COMPANY_SEAL 表示使用默认印章。
控件填入内容，印章控件里面，如果是手写签名内容为PNG图片格式的base64编码
      */
  ComponentValue?: string

  /**
      * 日期签署控件的字号，默认为 12

签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小
      */
  ComponentDateFontSize?: number

  /**
   * 控件所属文档的Id, 模块相关接口为空值
   */
  DocumentId?: string

  /**
   * 控件描述
   */
  ComponentDescription?: string
}

/**
 * 签署链接内容
 */
export interface SignUrlInfo {
  /**
      * 签署链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignUrl: string

  /**
      * 链接失效时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Deadline: number

  /**
      * 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignOrder: number

  /**
      * 签署人编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignId: string

  /**
      * 自定义用户编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomUserId: string

  /**
      * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 用户手机号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mobile: string

  /**
      * 签署参与者机构名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrganizationName: string

  /**
      * 参与者类型:
ORGANIZATION 企业经办人
PERSON 自然人
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApproverType: string

  /**
      * 经办人身份证号
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCardNumber: string

  /**
      * 签署链接对应流程Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: string

  /**
      * 企业经办人 用户在渠道的编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenId: string
}

/**
 * CreateConsoleLoginUrl请求参数结构体
 */
export interface CreateConsoleLoginUrlRequest {
  /**
      * 应用信息
此接口Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
      */
  Agent: Agent

  /**
   * 渠道侧合作企业名称
   */
  ProxyOrganizationName: string

  /**
   * 渠道侧合作企业统一社会信用代码
   */
  UniformSocialCreditCode?: string

  /**
   * 渠道侧合作企业经办人的姓名
   */
  ProxyOperatorName?: string

  /**
   * 操作者的信息
   */
  Operator?: UserInfo

  /**
   * 控制台指定模块，文件/合同管理:"DOCUMENT"，模版管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息"
   */
  Module?: string

  /**
   * 控制台指定模块Id
   */
  ModuleId?: string
}

/**
 * CreateFlowsByTemplates返回参数结构体
 */
export interface CreateFlowsByTemplatesResponse {
  /**
   * 多个合同ID
   */
  FlowIds: Array<string>

  /**
   * 渠道的业务信息，限制1024字符
   */
  CustomerData: Array<string>

  /**
      * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
      */
  ErrorMessages: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合作企业经办人列表信息
 */
export interface ProxyOrganizationOperator {
  /**
   * 经办人ID（渠道颁发）
   */
  Id: string

  /**
   * 经办人姓名
   */
  Name?: string

  /**
      * 经办人身份证件类型
用户证件类型：默认ID_CARD
1. ID_CARD - 居民身份证
2. HOUSEHOLD_REGISTER - 户口本
3. TEMP_ID_CARD - 临时居民身份证
      */
  IdCardType?: string

  /**
   * 经办人身份证号
   */
  IdCardNumber?: string

  /**
   * 经办人手机号
   */
  Mobile?: string
}

/**
 * SyncProxyOrganizationOperators返回参数结构体
 */
export interface SyncProxyOrganizationOperatorsResponse {
  /**
      * Status 同步状态,全部同步失败接口会直接报错
1-成功 
2-部分成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 同步失败经办人及其失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedList: Array<SyncFailReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTemplates请求参数结构体
 */
export interface DescribeTemplatesRequest {
  /**
   * 渠道应用相关信息
   */
  Agent: Agent

  /**
   * 操作者的信息
   */
  Operator?: UserInfo

  /**
   * 模版唯一标识
   */
  TemplateId?: string
}

/**
 * CreateConsoleLoginUrl返回参数结构体
 */
export interface CreateConsoleLoginUrlResponse {
  /**
   * 控制台url
   */
  ConsoleUrl: string

  /**
      * 渠道合作企业是否认证开通腾讯电子签。
当渠道合作企业未完成认证开通腾讯电子签,建议先调用同步企业信息(SyncProxyOrganization)和同步经办人信息(SyncProxyOrganizationOperators)接口成功后再跳转到登录页面。
      */
  IsActivated: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowsByTemplates请求参数结构体
 */
export interface CreateFlowsByTemplatesRequest {
  /**
   * 渠道应用相关信息
   */
  Agent: Agent

  /**
   * 多个合同（流程）信息
   */
  FlowInfos: Array<FlowInfo>

  /**
   * 操作者的信息
   */
  Operator?: UserInfo
}

/**
 * SyncProxyOrganization请求参数结构体
 */
export interface SyncProxyOrganizationRequest {
  /**
      * 应用信息
此接口Agent.ProxyOrganizationOpenId必填
      */
  Agent: Agent

  /**
   * 渠道侧合作企业名称
   */
  ProxyOrganizationName: string

  /**
   * 渠道侧合作企业统一社会信用代码
   */
  UniformSocialCreditCode?: string

  /**
   * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
   */
  BusinessLicense?: string

  /**
   * 操作者的信息
   */
  Operator?: UserInfo
}

/**
 * PrepareFlows请求参数结构体
 */
export interface PrepareFlowsRequest {
  /**
   * 渠道应用相关信息
   */
  Agent: Agent

  /**
   * 多个合同（流程）信息
   */
  FlowInfos: Array<FlowInfo>

  /**
   * 操作完成后的跳转地址
   */
  JumpUrl: string

  /**
   * 操作者的信息
   */
  Operator?: UserInfo
}

/**
 * 用量明细
 */
export interface UsageDetail {
  /**
   * 渠道侧合作企业唯一标识
   */
  ProxyOrganizationOpenId: string

  /**
   * 消耗量
   */
  Usage: number

  /**
      * 日期，当需要汇总数据时日期为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date: string
}

/**
 * CreateSignUrls返回参数结构体
 */
export interface CreateSignUrlsResponse {
  /**
   * 签署参与者签署H5链接信息数组
   */
  SignUrlInfos: Array<SignUrlInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 同步经办人失败原因
 */
export interface SyncFailReason {
  /**
   * 经办人Id
   */
  Id: string

  /**
      * 失败原因
例如：Id不符合规范、证件号码不合法等
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message: string
}

/**
 * DescribeUsage请求参数结构体
 */
export interface DescribeUsageRequest {
  /**
   * 应用信息
   */
  Agent: Agent

  /**
   * 开始时间 eg:2021-03-21
   */
  StartDate: string

  /**
      * 结束时间 eg:2021-06-21 
开始时间到结束时间的区间长度小于等于90天
      */
  EndDate: string

  /**
   * 操作者的信息
   */
  Operator?: UserInfo

  /**
      * 是否汇总数据，默认不汇总
不汇总:返回在统计区间内渠道下所有企业的每日明细，即每个企业N条数据，N为统计天数
汇总:返回在统计区间内渠道下所有企业的汇总后数据，即每个企业一条数据
      */
  NeedAggregate?: boolean

  /**
   * 单次返回的最多条目数量,默认为1000,且不能超过1000
   */
  Limit?: number

  /**
   * 偏移量,默认是0
   */
  Offset?: number
}

/**
 * 签署参与者信息
 */
export interface Recipient {
  /**
   * 签署人唯一标识
   */
  RecipientId?: string

  /**
   * 签署方类型：ENTERPRISE-企业INDIVIDUAL-自然人
   */
  RecipientType?: string

  /**
   * 描述
   */
  Description?: string

  /**
   * 签署方备注信息
   */
  RoleName?: string

  /**
   * 是否需要校验
   */
  RequireValidation?: boolean

  /**
   * 是否必须填写
   */
  RequireSign?: boolean

  /**
   * 签署类型
   */
  SignType?: number

  /**
   * 签署顺序：数字越小优先级越高
   */
  RoutingOrder?: number
}

/**
 * 应用相关信息
 */
export interface Agent {
  /**
   * 腾讯电子签颁发给渠道的应用ID，32位字符串
   */
  AppId: string

  /**
   * 腾讯电子签颁发给渠道侧合作企业的企业ID
   */
  ProxyOrganizationId?: string

  /**
   * 腾讯电子签颁发给渠道侧合作企业的应用ID
   */
  ProxyAppId?: string

  /**
   * 渠道/平台合作企业经办人（操作员）
   */
  ProxyOperator?: UserInfo

  /**
   * 渠道/平台合作企业的企业ID
   */
  ProxyOrganizationOpenId?: string
}

/**
 * 此结构 (FormField) 用于描述内容控件填充结构。
 */
export interface FormField {
  /**
   * 表单域或控件的Value
   */
  ComponentValue: string

  /**
      * 表单域或控件的ID，跟ComponentName二选一，不能全为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComponentId?: string

  /**
      * 控件的名字，跟ComponentId二选一，不能全为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComponentName?: string
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
   * 模版ID
   */
  TemplateId?: string

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
   * 多个签署人信息
   */
  FlowApprovers?: Array<FlowApproverInfo>

  /**
   * 表单K-V对列表
   */
  FormFields?: Array<FormField>

  /**
   * 合同描述
   */
  FlowDescription?: string

  /**
   * 渠道的业务信息，限制1024字符
   */
  CustomerData?: string
}

/**
 * 接口调用者信息
 */
export interface UserInfo {
  /**
   * 自定义用户编号
   */
  CustomUserId?: string

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
 * DescribeUsage返回参数结构体
 */
export interface DescribeUsageResponse {
  /**
   * 用量明细条数
   */
  Total: number

  /**
      * 用量明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  Details: Array<UsageDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
