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
 * 邮件发送的内容，可以是纯文本(TEXT)，也可以是纯代码(HTML)，或者纯文本+HTML的组合(建议方式)
 */
export interface Simple {
  /**
   * base64之后的Html代码。需要包含所有的代码信息，不要包含外部css，否则会导致显示格式错乱
   */
  Html?: string

  /**
   * base64之后的纯文本信息，如果没有Html，邮件中会直接显示纯文本；如果有Html，它代表邮件的纯文本样式
   */
  Text?: string
}

/**
 * ListEmailAddress请求参数结构体
 */
export type ListEmailAddressRequest = null

/**
 * GetEmailIdentity返回参数结构体
 */
export interface GetEmailIdentityResponse {
  /**
   * 验证类型。固定值：DOMAIN
   */
  IdentityType?: string

  /**
   * 是否已通过验证
   */
  VerifiedForSendingStatus?: boolean

  /**
   * DNS配置详情
   */
  Attributes?: Array<DNSAttributes>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListBlackEmailAddress请求参数结构体
 */
export interface ListBlackEmailAddressRequest {
  /**
   * 开始日期，格式为YYYY-MM-DD
   */
  StartDate: string

  /**
   * 结束日期，格式为YYYY-MM-DD
   */
  EndDate: string

  /**
   * 规范，配合Offset使用
   */
  Limit: number

  /**
   * 规范，配合Limit使用，Limit最大取值为100
   */
  Offset: number

  /**
   * 可以指定邮箱进行查询
   */
  EmailAddress?: string

  /**
   * 可以指定任务ID进行查询
   */
  TaskID?: string
}

/**
 * 附件结构，包含附件名和base64之后的附件内容。
 */
export interface Attachment {
  /**
   * 附件名称，最大支持255个字符长度，不支持部分附件类型，详情请参考[附件类型](https://cloud.tencent.com/document/product/1288/51951)。
   */
  FileName: string

  /**
   * base64之后的附件内容，您可以发送的附件大小上限为5 MB。 注意：腾讯云api目前要求请求包大小不得超过10 MB。如果您要发送多个附件，那么这些附件的总大小不能超过10 MB。
   */
  Content: string
}

/**
 * 模板发送相关信息，包含模板ID，模板变量参数等信息
 */
export interface Template {
  /**
   * 模板ID。如果没有模板，请先新建一个
   */
  TemplateID: number

  /**
   * 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。
   */
  TemplateData: string
}

/**
 * GetSendEmailStatus返回参数结构体
 */
export interface GetSendEmailStatusResponse {
  /**
   * 邮件发送状态列表
   */
  EmailStatusList?: Array<SendEmailStatus>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendEmail请求参数结构体
 */
export interface SendEmailRequest {
  /**
      * 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com。如需填写发件人说明，请按照 
发信人 &lt;邮件地址&gt; 的方式填写，例如：
腾讯云团队 &lt;noreply@mail.qcloud.com&gt;
      */
  FromEmailAddress: string

  /**
   * 收信人邮箱地址，最多支持群发50人。注意：邮件内容会显示所有收件人地址，非群发邮件请多次调用API发送。
   */
  Destination: Array<string>

  /**
   * 邮件主题
   */
  Subject: string

  /**
   * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人将会回复到腾讯云。
   */
  ReplyToAddresses?: string

  /**
   * 使用模板发送时，填写的模板相关参数
   */
  Template?: Template

  /**
   * 使用API直接发送内容时，填写的邮件内容
   */
  Simple?: Simple

  /**
   * 需要发送附件时，填写附件相关参数。
   */
  Attachments?: Array<Attachment>
}

/**
 * 用于描述发件人相关信息
 */
export interface EmailSender {
  /**
   * 发信地址
   */
  EmailAddress: string

  /**
      * 发信人别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  EmailSenderName: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTimestamp: number
}

/**
 * DeleteEmailIdentity请求参数结构体
 */
export interface DeleteEmailIdentityRequest {
  /**
   * 发信域名
   */
  EmailIdentity: string
}

/**
 * UpdateEmailIdentity请求参数结构体
 */
export interface UpdateEmailIdentityRequest {
  /**
   * 请求验证的域名
   */
  EmailIdentity: string
}

/**
 * GetEmailIdentity请求参数结构体
 */
export interface GetEmailIdentityRequest {
  /**
   * 发信域名
   */
  EmailIdentity: string
}

/**
 * DeleteEmailIdentity返回参数结构体
 */
export interface DeleteEmailIdentityResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetStatisticsReport请求参数结构体
 */
export interface GetStatisticsReportRequest {
  /**
   * 开始日期
   */
  StartDate: string

  /**
   * 结束日期
   */
  EndDate: string

  /**
   * 发信域名
   */
  Domain?: string

  /**
   * 收件方邮箱类型，例如gmail.com
   */
  ReceivingMailboxType?: string
}

/**
 * DeleteEmailTemplate返回参数结构体
 */
export interface DeleteEmailTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 统计数据的结构体
 */
export interface Volume {
  /**
      * 日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  SendDate: string

  /**
   * 邮件请求数量
   */
  RequestCount: number

  /**
   * 腾讯云通过数量
   */
  AcceptedCount: number

  /**
   * 送达数量
   */
  DeliveredCount: number

  /**
   * 打开邮件的用户数量，根据收件人去重
   */
  OpenedCount: number

  /**
   * 点击了邮件中的链接数量用户数量
   */
  ClickedCount: number

  /**
   * 退信数量
   */
  BounceCount: number

  /**
      * 取消订阅的用户数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnsubscribeCount: number
}

/**
 * CreateEmailTemplate请求参数结构体
 */
export interface CreateEmailTemplateRequest {
  /**
   * 模板名称
   */
  TemplateName: string

  /**
   * 模板内容
   */
  TemplateContent: TemplateContent
}

/**
 * UpdateEmailTemplate请求参数结构体
 */
export interface UpdateEmailTemplateRequest {
  /**
   * 模板内容
   */
  TemplateContent: TemplateContent

  /**
   * 模板ID
   */
  TemplateID: number

  /**
   * 模版名字
   */
  TemplateName: string
}

/**
 * UpdateEmailIdentity返回参数结构体
 */
export interface UpdateEmailIdentityResponse {
  /**
   * 验证类型。固定值：DOMAIN
   */
  IdentityType?: string

  /**
   * 是否已通过验证
   */
  VerifiedForSendingStatus?: boolean

  /**
   * 需要配置的DNS信息
   */
  Attributes?: Array<DNSAttributes>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEmailTemplate请求参数结构体
 */
export interface DeleteEmailTemplateRequest {
  /**
   * 模版ID
   */
  TemplateID: number
}

/**
 * DeleteBlackList返回参数结构体
 */
export interface DeleteBlackListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述邮件发送状态
 */
export interface SendEmailStatus {
  /**
   * SendEmail返回的MessageId
   */
  MessageId: string

  /**
   * 收件人邮箱
   */
  ToEmailAddress: string

  /**
   * 发件人邮箱
   */
  FromEmailAddress: string

  /**
      * 腾讯云处理状态
0: 处理成功
1001: 内部系统异常
1002: 内部系统异常
1003: 内部系统异常
1003: 内部系统异常
1004: 发信超时
1005: 内部系统异常
1006: 触发频率控制，短时间内对同一地址发送过多邮件
1007: 邮件地址在黑名单中
1009: 内部系统异常
1010: 超出了每日发送限制
1011: 无发送自定义内容权限，必须使用模板
2001: 找不到相关记录
3007: 模板ID无效或者不可用
3008: 模板状态异常
3009: 无权限使用该模板
3010: TemplateData字段格式不正确 
3014: 发件域名没有经过认证，无法发送
3020: 收件方邮箱类型在黑名单
3024: 邮箱地址格式预检查失败
3030: 退信率过高，临时限制发送
3033: 余额不足，账号欠费等
      */
  SendStatus: number

  /**
      * 收件方处理状态
0: 请求成功被腾讯云接受，进入发送队列
1: 邮件递送成功，DeliverTime表示递送成功的时间
2: 邮件因某种原因被丢弃，DeliverMessage表示丢弃原因
3: 收件方ESP拒信，一般原因为邮箱地址不存在，或其它原因
8: 邮件被ESP因某些原因延迟递送，DeliverMessage表示延迟原因
      */
  DeliverStatus: number

  /**
   * 收件方处理状态描述
   */
  DeliverMessage: string

  /**
   * 请求到达腾讯云时间戳
   */
  RequestTime: number

  /**
   * 腾讯云执行递送时间戳
   */
  DeliverTime: number

  /**
   * 用户是否打开该邮件
   */
  UserOpened: boolean

  /**
   * 用户是否点击该邮件中的链接
   */
  UserClicked: boolean

  /**
   * 用户是否取消该发送者的订阅
   */
  UserUnsubscribed: boolean

  /**
   * 用户是否举报该发送者
   */
  UserComplainted: boolean
}

/**
 * ListEmailTemplates请求参数结构体
 */
export interface ListEmailTemplatesRequest {
  /**
   * 获取模版数据量，用于分页
   */
  Limit: number

  /**
   * 获取模版偏移值，用于分页
   */
  Offset: number
}

/**
 * DeleteBlackList请求参数结构体
 */
export interface DeleteBlackListRequest {
  /**
   * 需要清除的黑名单邮箱列表，数组长度至少为1
   */
  EmailAddressList: Array<string>
}

/**
 * ListEmailTemplates返回参数结构体
 */
export interface ListEmailTemplatesResponse {
  /**
   * 邮件模板列表
   */
  TemplatesMetadata?: Array<TemplatesMetadata>

  /**
   * 模版总数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendEmail返回参数结构体
 */
export interface SendEmailResponse {
  /**
   * 接受消息生成的唯一消息标识符。
   */
  MessageId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListBlackEmailAddress返回参数结构体
 */
export interface ListBlackEmailAddressResponse {
  /**
   * 黑名单列表
   */
  BlackList?: Array<BlackEmailAddress>

  /**
   * 黑名单总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetSendEmailStatus请求参数结构体
 */
export interface GetSendEmailStatusRequest {
  /**
   * 发送的日期，必填。仅支持查询某个日期，不支持范围查询。
   */
  RequestDate: string

  /**
   * 偏移量。默认为0
   */
  Offset: number

  /**
   * 拉取最大条数，最多 100。
   */
  Limit: number

  /**
   * SendMail接口返回的MessageId字段。
   */
  MessageId?: string

  /**
   * 收件人邮箱。
   */
  ToEmailAddress?: string
}

/**
 * 模板列表结构
 */
export interface TemplatesMetadata {
  /**
   * 创建时间
   */
  CreatedTimestamp: number

  /**
   * 模板名称
   */
  TemplateName: string

  /**
   * 模板状态。1-审核中|0-已通过|2-拒绝|其它-不可用
   */
  TemplateStatus: number

  /**
   * 模板ID
   */
  TemplateID: number

  /**
   * 审核原因
   */
  ReviewReason: string
}

/**
 * ListEmailIdentities返回参数结构体
 */
export interface ListEmailIdentitiesResponse {
  /**
   * 发信域名列表
   */
  EmailIdentities?: Array<EmailIdentity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEmailAddress返回参数结构体
 */
export interface ListEmailAddressResponse {
  /**
      * 发信地址列表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  EmailSenders?: Array<EmailSender>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板内容，TEXT和HTML必须至少存在一项，建议使用TEXT和HTML的组合
 */
export interface TemplateContent {
  /**
   * base64之后的Html代码
   */
  Html?: string

  /**
   * base64之后的文本内容
   */
  Text?: string
}

/**
 * GetStatisticsReport返回参数结构体
 */
export interface GetStatisticsReportResponse {
  /**
   * 发信统计报告，按天
   */
  DailyVolumes: Array<Volume>

  /**
   * 发信统计报告，总览
   */
  OverallVolume: Volume

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEmailAddress请求参数结构体
 */
export interface DeleteEmailAddressRequest {
  /**
   * 发信地址
   */
  EmailAddress: string
}

/**
 * 发信域名验证列表结构体
 */
export interface EmailIdentity {
  /**
   * 发信域名
   */
  IdentityName: string

  /**
   * 验证类型，固定为DOMAIN
   */
  IdentityType: string

  /**
   * 是否已通过验证
   */
  SendingEnabled: boolean
}

/**
 * 邮箱黑名单结构，包含被拉黑的邮箱地址和被拉黑时间
 */
export interface BlackEmailAddress {
  /**
   * 邮箱被拉黑时间
   */
  BounceTime: string

  /**
   * 被拉黑的邮箱地址
   */
  EmailAddress: string
}

/**
 * GetEmailTemplate请求参数结构体
 */
export interface GetEmailTemplateRequest {
  /**
   * 模板ID
   */
  TemplateID: number
}

/**
 * DeleteEmailAddress返回参数结构体
 */
export interface DeleteEmailAddressResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEmailIdentity返回参数结构体
 */
export interface CreateEmailIdentityResponse {
  /**
   * 验证类型。固定值：DOMAIN
   */
  IdentityType?: string

  /**
   * 是否已通过验证
   */
  VerifiedForSendingStatus?: boolean

  /**
   * 需要配置的DNS信息
   */
  Attributes?: Array<DNSAttributes>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEmailIdentity请求参数结构体
 */
export interface CreateEmailIdentityRequest {
  /**
   * 您的发信域名，建议使用三级以上域名。例如：mail.qcloud.com。
   */
  EmailIdentity: string
}

/**
 * CreateEmailAddress请求参数结构体
 */
export interface CreateEmailAddressRequest {
  /**
   * 您的发信地址（发信地址总数上限为10个）
   */
  EmailAddress: string

  /**
   * 发件人别名
   */
  EmailSenderName?: string
}

/**
 * CreateEmailTemplate返回参数结构体
 */
export interface CreateEmailTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEmailAddress返回参数结构体
 */
export interface CreateEmailAddressResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEmailTemplate返回参数结构体
 */
export interface UpdateEmailTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述DNS记录的域名、记录类型、期望得到的值、目前配置的值
 */
export interface DNSAttributes {
  /**
   * 记录类型 CNAME | A | TXT | MX
   */
  Type: string

  /**
   * 域名
   */
  SendDomain: string

  /**
   * 需要配置的值
   */
  ExpectedValue: string

  /**
   * 腾讯云目前检测到的值
   */
  CurrentValue: string

  /**
   * 检测是否通过，创建时默认为false
   */
  Status: boolean
}

/**
 * GetEmailTemplate返回参数结构体
 */
export interface GetEmailTemplateResponse {
  /**
   * 模板内容数据
   */
  TemplateContent?: TemplateContent

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEmailIdentities请求参数结构体
 */
export type ListEmailIdentitiesRequest = null
