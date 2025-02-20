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
 * BatchSendEmail请求参数结构体
 */
export interface BatchSendEmailRequest {
  /**
   * 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com。如需填写发件人说明，请按照
发信人 &lt;邮件地址&gt; 的方式填写，例如：
腾讯云团队 &lt;noreply@mail.qcloud.com&gt;
   */
  FromEmailAddress: string
  /**
   * 收件人列表ID
   */
  ReceiverId: number
  /**
   * 邮件主题
   */
  Subject: string
  /**
   * 任务类型 1: 立即发送 2: 定时发送 3: 周期（频率）发送
   */
  TaskType: number
  /**
   * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。
   */
  ReplyToAddresses?: string
  /**
   * 使用模板发送时，填写的模板相关参数
<dx-alert infotype="notice" title="注意"> 如您未申请过特殊配置，则该字段为必填 </dx-alert>
   */
  Template?: Template
  /**
   * 已废弃
<dx-alert infotype="notice" title="说明"> 仅部分历史上申请了特殊配置的客户需要使用。如您未申请过特殊配置，则不存在该字段。</dx-alert> 
   */
  Simple?: Simple
  /**
   * 需要发送附件时，填写附件相关参数（暂未支持）
   */
  Attachments?: Array<Attachment>
  /**
   * 周期发送任务的必要参数
   */
  CycleParam?: CycleEmailParam
  /**
   * 定时发送任务的必要参数
   */
  TimedParam?: TimedEmailParam
  /**
   * 退订链接选项 0: 不加入退订链接 1: 简体中文 2: 英文 3: 繁体中文 4: 西班牙语 5: 法语 6: 德语 7: 日语 8: 韩语 9: 阿拉伯语 10: 泰语
   */
  Unsubscribe?: string
  /**
   * 是否添加广告标识 0:不添加 1:添加到subject前面，2:添加到subject后面
   */
  ADLocation?: number
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
 * ListSendTasks返回参数结构体
 */
export interface ListSendTasksResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 数据记录
   */
  Data?: Array<SendTaskData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReceiver返回参数结构体
 */
export interface CreateReceiverResponse {
  /**
   * 收件人列表id，后续根据收件人列表id上传收件人地址
   */
  ReceiverId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCustomBlacklist请求参数结构体
 */
export interface CreateCustomBlacklistRequest {
  /**
   * 添加到黑名单的邮件地址
   */
  Emails: Array<string>
  /**
   * 过期日期
   */
  ExpireDate?: string
}

/**
 * ListEmailAddress返回参数结构体
 */
export interface ListEmailAddressResponse {
  /**
   * 发信地址列表详情
   */
  EmailSenders?: Array<EmailSender>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEmailAddress请求参数结构体
 */
export type ListEmailAddressRequest = null

/**
 * UpdateCustomBlackList返回参数结构体
 */
export interface UpdateCustomBlackListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEmailSmtpPassWord返回参数结构体
 */
export interface UpdateEmailSmtpPassWordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListReceivers请求参数结构体
 */
export interface ListReceiversRequest {
  /**
   * 偏移量，整型，从0开始
   */
  Offset: number
  /**
   * 限制数目，整型，不超过100
   */
  Limit: number
  /**
   * 列表状态(1 待上传 2 上传中  3传完成)，若查询所有就不传这个字段
   */
  Status?: number
  /**
   * 列表名称的关键字，模糊查询
   */
  KeyWord?: string
}

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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 已废弃
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
   * Base64之后的附件内容，您可以发送的附件大小上限为4M。注意：腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍。应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 接口会返回错误。
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
注意：参数值不能是html等复杂类型的数据。
示例：{"name":"xxx","age":"xx"}
   */
  TemplateData: string
}

/**
 * ListSendTasks请求参数结构体
 */
export interface ListSendTasksRequest {
  /**
   * 偏移量，整型，从0开始，0代表跳过0行
   */
  Offset: number
  /**
   * 限制数目，整型,不超过100
   */
  Limit: number
  /**
   * 任务状态 1 待开始 5 发送中 6 今日暂停发送  7 发信异常 10 发送完成。查询所有状态，则不传这个字段
   */
  Status?: number
  /**
   * 收件人列表ID
   */
  ReceiverId?: number
  /**
   * 任务类型 1即时 2定时 3周期，查询所有类型则不传这个字段
   */
  TaskType?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板列表结构
 */
export interface TemplatesMetadata {
  /**
   * 创建时间
   */
  CreatedTimestamp?: number
  /**
   * 模板名称
   */
  TemplateName?: string
  /**
   * 模板状态。1-审核中|0-已通过|2-拒绝|其它-不可用
   */
  TemplateStatus?: number
  /**
   * 模板ID
   */
  TemplateID?: number
  /**
   * 审核原因
   */
  ReviewReason?: string
}

/**
 * 收件人列表详情
 */
export interface ReceiverDetail {
  /**
   * 收件人地址
   */
  Email?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 模板参数
   */
  TemplateData?: string
  /**
   * 无效原因
   */
  Reason?: string
  /**
   * 1:有效，2:无效
   */
  Status?: number
  /**
   * 收件人地址id
   */
  EmailId?: number
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
 * 用于描述发件人相关信息
 */
export interface EmailSender {
  /**
   * 发信地址
   */
  EmailAddress?: string
  /**
   * 发信人别名
   */
  EmailSenderName?: string
  /**
   * 创建时间
   */
  CreatedTimestamp?: number
  /**
   * smtp密码类型,0=没有设置密码,1=已经设置了密码
   */
  SmtpPwdType?: number
}

/**
 * BatchSendEmail返回参数结构体
 */
export interface BatchSendEmailResponse {
  /**
   * 发送任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 统计数据的结构体
 */
export interface Volume {
  /**
   * 日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendDate?: string
  /**
   * 邮件请求数量
   */
  RequestCount?: number
  /**
   * 腾讯云通过数量
   */
  AcceptedCount?: number
  /**
   * 送达数量
   */
  DeliveredCount?: number
  /**
   * 打开邮件的用户数量，根据收件人去重
   */
  OpenedCount?: number
  /**
   * 点击了邮件中的链接数量用户数量
   */
  ClickedCount?: number
  /**
   * 退信数量
   */
  BounceCount?: number
  /**
   * 取消订阅的用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnsubscribeCount?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateCustomBlacklist返回参数结构体
 */
export interface CreateCustomBlacklistResponse {
  /**
   * 收件人总数
   */
  TotalCount?: number
  /**
   * 实际上传数量
   */
  ValidCount?: number
  /**
   * 数据过长数量
   */
  TooLongCount?: number
  /**
   * 重复数量
   */
  RepeatCount?: number
  /**
   * 格式不正确数量
   */
  InvalidCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReceiver请求参数结构体
 */
export interface CreateReceiverRequest {
  /**
   * 收件人列表名称
   */
  ReceiversName: string
  /**
   * 收件人列表描述
   */
  Desc?: string
}

/**
 * 发送任务数据
 */
export interface SendTaskData {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 发信地址
   */
  FromEmailAddress?: string
  /**
   * 收件人列表Id
   */
  ReceiverId?: number
  /**
   * 任务状态 1 待开始 5 发送中 6 今日暂停发送  7 发信异常 10 发送完成
   */
  TaskStatus?: number
  /**
   * 任务类型 1 即时 2 定时 3 周期
   */
  TaskType?: number
  /**
   * 任务请求发信数量
   */
  RequestCount?: number
  /**
   * 已经发送数量
   */
  SendCount?: number
  /**
   * 缓存数量
   */
  CacheCount?: number
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务更新时间
   */
  UpdateTime?: string
  /**
   * 邮件主题
   */
  Subject?: string
  /**
   * 模板和模板数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Template?: Template
  /**
   * 周期任务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleParam?: CycleEmailParam
  /**
   * 定时任务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimedParam?: TimedEmailParam
  /**
   * 任务异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
  /**
   * 收件人列表名称
   */
  ReceiversName?: string
}

/**
 * ListReceiverDetails返回参数结构体
 */
export interface ListReceiverDetailsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 数据记录
   */
  Data?: Array<ReceiverDetail>
  /**
   * 有效邮件地址数
   */
  ValidCount?: number
  /**
   * 无效邮件地址数
   */
  InvalidCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEmailTemplate返回参数结构体
 */
export interface DeleteEmailTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCustomBlackList请求参数结构体
 */
export interface UpdateCustomBlackListRequest {
  /**
   * 需要更改的黑名单id
   */
  Id: number
  /**
   * 修改后的邮件地址
   */
  Email: string
  /**
   * 过期时间，为空则表示永久有效
   */
  ExpireDate?: string
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
 * ListCustomBlacklist请求参数结构体
 */
export interface ListCustomBlacklistRequest {
  /**
   * 偏移量，整型，从0开始
   */
  Offset: number
  /**
   * 限制数目，整型,不超过100
   */
  Limit: number
  /**
   * 筛选黑名单的状态，0:已过期，1:生效中, 2:全部
   */
  Status: number
  /**
   * 黑名单中的邮箱地址
   */
  Email?: string
}

/**
 * UpdateEmailSmtpPassWord请求参数结构体
 */
export interface UpdateEmailSmtpPassWordRequest {
  /**
   * smtp密码，长度限制64
   */
  Password: string
  /**
   * 发信邮箱,长度限制128
   */
  EmailAddress: string
}

/**
 * 收件人列表数据类型
 */
export interface ReceiverData {
  /**
   * 收件人列表ID
   */
  ReceiverId?: number
  /**
   * 收件人列表名称
   */
  ReceiversName?: string
  /**
   * 收件人地址总数
   */
  Count?: number
  /**
   * 收件人列表描述
   */
  Desc?: string
  /**
   * 列表状态(1 待上传 2 上传中 3 上传完成)
   */
  ReceiversStatus?: number
  /**
   * 创建时间,如:2021-09-28 16:40:35
   */
  CreateTime?: string
  /**
   * 无效收件人数量
   */
  InvalidCount?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteBlackList返回参数结构体
 */
export interface DeleteBlackListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomBlackList请求参数结构体
 */
export interface DeleteCustomBlackListRequest {
  /**
   * 需要删除的邮箱地址
   */
  Emails: Array<string>
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
   * 模板名字
   */
  TemplateName: string
}

/**
 * ListCustomBlacklist返回参数结构体
 */
export interface ListCustomBlacklistResponse {
  /**
   * 列表总数
   */
  TotalCount?: number
  /**
   * 黑名单列表详情
   */
  Data?: Array<BlackAddressDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MessageId?: string
  /**
   * 收件人邮箱
   */
  ToEmailAddress?: string
  /**
   * 发件人邮箱
   */
  FromEmailAddress?: string
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
1008: 域名被收件人拒收
1009: 内部系统异常
1010: 超出了每日发送限制
1011: 无发送自定义内容权限，必须使用模板
1013: 域名被收件人取消订阅
2001: 找不到相关记录
3007: 模板ID无效或者不可用
3008: 被收信域名临时封禁
3009: 无权限使用该模板
3010: TemplateData字段格式不正确 
3014: 发件域名没有经过认证，无法发送
3020: 收件方邮箱类型在黑名单
3024: 邮箱地址格式预检查失败
3030: 退信率过高，临时限制发送
3033: 余额不足，账号欠费等
   */
  SendStatus?: number
  /**
   * 收件方处理状态
0: 请求成功被腾讯云接受，进入发送队列
1: 邮件递送成功，DeliverTime表示递送成功的时间
2: 邮件因某种原因被丢弃，DeliverMessage表示丢弃原因
3: 收件方ESP拒信，一般原因为邮箱地址不存在，或其它原因
8: 邮件被ESP因某些原因延迟递送，DeliverMessage表示延迟原因
   */
  DeliverStatus?: number
  /**
   * 收件方处理状态描述
   */
  DeliverMessage?: string
  /**
   * 请求到达腾讯云时间戳
   */
  RequestTime?: number
  /**
   * 腾讯云执行递送时间戳
   */
  DeliverTime?: number
  /**
   * 用户是否打开该邮件
   */
  UserOpened?: boolean
  /**
   * 用户是否点击该邮件中的链接
   */
  UserClicked?: boolean
  /**
   * 用户是否取消该发送者的订阅
   */
  UserUnsubscribed?: boolean
  /**
   * 用户是否举报该发送者
   */
  UserComplainted?: boolean
}

/**
 * ListEmailTemplates请求参数结构体
 */
export interface ListEmailTemplatesRequest {
  /**
   * 获取模板数据量，用于分页
   */
  Limit: number
  /**
   * 获取模板偏移值，用于分页
   */
  Offset: number
}

/**
 * CreateReceiverDetailWithData返回参数结构体
 */
export interface CreateReceiverDetailWithDataResponse {
  /**
   * 收件人总数
   */
  TotalCount?: number
  /**
   * 实际上传数量
   */
  ValidCount?: number
  /**
   * 数据过长数量
   */
  TooLongCount?: number
  /**
   * 邮件地址为空数量
   */
  EmptyEmailCount?: number
  /**
   * 重复数量
   */
  RepeatCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 收件人明细输入参数，包含收件人邮箱，以及模板参数
 */
export interface ReceiverInputData {
  /**
   * 收件人邮箱
   */
  Email: string
  /**
   * 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。
注意：参数值不能是html等复杂类型的数据。TemplateData (整个 JSON 结构) 总长度限制为 800 bytes。
   */
  TemplateData: string
}

/**
 * CreateReceiverDetail返回参数结构体
 */
export interface CreateReceiverDetailResponse {
  /**
   * 收件人总数
   */
  TotalCount?: number
  /**
   * 实际上传数量
   */
  ValidCount?: number
  /**
   * 数据过长数量
   */
  TooLongCount?: number
  /**
   * 邮件地址为空数量
   */
  EmptyEmailCount?: number
  /**
   * 重复数量
   */
  RepeatCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReceiver返回参数结构体
 */
export interface DeleteReceiverResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 模板总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  MessageId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendEmail请求参数结构体
 */
export interface SendEmailRequest {
  /**
   * 发件人邮箱地址。不使用别名时请直接填写发件人邮箱地址，例如：noreply@mail.qcloud.com如需填写发件人别名时，请按照如下方式（注意别名与邮箱地址之间必须使用一个空格隔开）：别名+一个空格+<邮箱地址>，别名中不能带有冒号(:)。
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
   * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人的回复邮件将会发送失败。
   */
  ReplyToAddresses?: string
  /**
   * 抄送人邮箱地址，最多支持抄送20人。
   */
  Cc?: Array<string>
  /**
   * 密送人邮箱地址，最多支持抄送20人,Bcc和Destination不能重复。
   */
  Bcc?: Array<string>
  /**
   * 使用模板发送时，填写模板相关参数。
<dx-alert infotype="notice" title="注意"> 如您未申请过特殊配置，则该字段为必填 </dx-alert>
   */
  Template?: Template
  /**
   * 已废弃
<dx-alert infotype="notice" title="说明"> 仅部分历史上申请了特殊配置的客户需要使用。如您未申请过特殊配置，则不存在该字段。</dx-alert>
   */
  Simple?: Simple
  /**
   * 需要发送附件时，填写附件相关参数。腾讯云接口请求最大支持 8M 的请求包，附件内容经过 Base64 预期扩大1.5倍，应该控制所有附件的总大小最大在 4M 以内，整体请求超出 8M 时接口会返回错误
   */
  Attachments?: Array<Attachment>
  /**
   * 退订链接选项 0: 不加入退订链接 1: 简体中文 2: 英文 3: 繁体中文 4: 西班牙语 5: 法语 6: 德语 7: 日语 8: 韩语 9: 阿拉伯语 10: 泰语
   */
  Unsubscribe?: string
  /**
   * 邮件触发类型 0:非触发类，默认类型，营销类邮件、非即时类邮件等选择此类型  1:触发类，验证码等即时发送类邮件，若邮件超过一定大小，系统会自动选择非触发类型通道
   */
  TriggerType?: number
  /**
   * smtp头中的Message-Id字段
   */
  SmtpMessageId?: string
  /**
   * smtp头中可以设置的其它字段
   */
  SmtpHeaders?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteReceiver请求参数结构体
 */
export interface DeleteReceiverRequest {
  /**
   * 收件人列表id，创建收件人列表时会返回
   */
  ReceiverId: number
}

/**
 * ListEmailIdentities返回参数结构体
 */
export interface ListEmailIdentitiesResponse {
  /**
   * 发信域名列表
   */
  EmailIdentities: Array<EmailIdentity>
  /**
   * 最大信誉等级
   */
  MaxReputationLevel: number
  /**
   * 单域名最高日发送量
   */
  MaxDailyQuota: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEmailTemplate请求参数结构体
 */
export interface DeleteEmailTemplateRequest {
  /**
   * 模板ID
   */
  TemplateID: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 黑名单详情
 */
export interface BlackAddressDetail {
  /**
   * 黑名单地址id
   */
  Id?: number
  /**
   * 邮箱地址
   */
  Email?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 过期时间
   */
  ExpireDate?: string
  /**
   * 黑名单状态，0:已过期，1:生效中
   */
  Status?: number
}

/**
 * 发信域名验证列表结构体
 */
export interface EmailIdentity {
  /**
   * 发信域名
   */
  IdentityName?: string
  /**
   * 验证类型，固定为DOMAIN
   */
  IdentityType?: string
  /**
   * 是否已通过验证
   */
  SendingEnabled?: boolean
  /**
   * 当前信誉等级
   */
  CurrentReputationLevel?: number
  /**
   * 当日最高发信量
   */
  DailyQuota?: number
  /**
   * 域名配置的独立ip
   */
  SendIp?: Array<string>
}

/**
 * 邮箱黑名单结构，包含被拉黑的邮箱地址和被拉黑时间，以及被拉黑的理由
 */
export interface BlackEmailAddress {
  /**
   * 邮箱被拉黑时间
   */
  BounceTime?: string
  /**
   * 被拉黑的邮箱地址
   */
  EmailAddress?: string
  /**
   * 被拉黑的理由
   */
  IspDesc?: string
}

/**
 * DeleteEmailAddress返回参数结构体
 */
export interface DeleteEmailAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建重复周期发送邮件任务的参数
 */
export interface CycleEmailParam {
  /**
   * 任务开始时间
   */
  BeginTime: string
  /**
   * 任务周期 小时维度
   */
  IntervalTime: number
  /**
   * 是否终止周期，用于任务更新 0否1是
   */
  TermCycle?: number
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListReceiverDetails请求参数结构体
 */
export interface ListReceiverDetailsRequest {
  /**
   * 收件人列表ID,CreateReceiver接口创建收件人列表时会返回该值
   */
  ReceiverId: number
  /**
   * 偏移量，整型，从0开始
   */
  Offset: number
  /**
   * 限制数目，整型,不超过100
   */
  Limit: number
  /**
   * 收件人地址，长度0-50，示例：xxx@te.com，支持模糊查询
   */
  Email?: string
  /**
   * 搜索开始时间
   */
  CreateTimeBegin?: string
  /**
   * 搜索结束时间
   */
  CreateTimeEnd?: string
  /**
   * 1:有效，2:无效
   */
  Status?: number
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
 * DeleteCustomBlackList返回参数结构体
 */
export interface DeleteCustomBlackListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReceiverDetail请求参数结构体
 */
export interface CreateReceiverDetailRequest {
  /**
   * 收件人列表ID
   */
  ReceiverId: number
  /**
   * 邮箱
   */
  Emails: Array<string>
}

/**
 * CreateEmailTemplate返回参数结构体
 */
export interface CreateEmailTemplateResponse {
  /**
   * 模板id
   */
  TemplateID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListReceivers返回参数结构体
 */
export interface ListReceiversResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 数据记录
   */
  Data?: Array<ReceiverData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEmailAddress返回参数结构体
 */
export interface CreateEmailAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEmailTemplate返回参数结构体
 */
export interface UpdateEmailTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReceiverDetailWithData请求参数结构体
 */
export interface CreateReceiverDetailWithDataRequest {
  /**
   * 收件人列表ID
   */
  ReceiverId: number
  /**
   * 收信人邮箱以及模板参数，数组形式。收件人个数限制20000个以内。
   */
  Datas: Array<ReceiverInputData>
}

/**
 * 创建定时发送邮件任务时，设置的定时参数，比如开始时间之类
 */
export interface TimedEmailParam {
  /**
   * 定时发送邮件的开始时间
   */
  BeginTime: string
}

/**
 * 用于描述DNS记录的域名、记录类型、期望得到的值、目前配置的值
 */
export interface DNSAttributes {
  /**
   * 记录类型 CNAME | A | TXT | MX
   */
  Type?: string
  /**
   * 域名
   */
  SendDomain?: string
  /**
   * 需要配置的值
   */
  ExpectedValue?: string
  /**
   * 腾讯云目前检测到的值
   */
  CurrentValue?: string
  /**
   * 检测是否通过，创建时默认为false
   */
  Status?: boolean
}

/**
 * GetEmailTemplate返回参数结构体
 */
export interface GetEmailTemplateResponse {
  /**
   * 模板内容数据
   */
  TemplateContent: TemplateContent
  /**
   * 模板状态 0-审核通过 1-待审核 2-审核拒绝
   */
  TemplateStatus: number
  /**
   * 模板名称
   */
  TemplateName: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEmailIdentities请求参数结构体
 */
export type ListEmailIdentitiesRequest = null
