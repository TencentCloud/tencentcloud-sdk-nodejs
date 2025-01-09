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
 * PullSmsReplyStatus请求参数结构体
 */
export interface PullSmsReplyStatusRequest {
  /**
   * 拉取最大条数，最多100条。
   */
  Limit: number
  /**
   * 短信 SdkAppid 在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际 SdkAppid，例如1400006666。
   */
  SmsSdkAppid: string
}

/**
 * DeleteSmsTemplate返回参数结构体
 */
export interface DeleteSmsTemplateResponse {
  /**
   * 删除模板响应
   */
  DeleteTemplateStatus?: DeleteTemplateStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySmsTemplate返回参数结构体
 */
export interface ModifySmsTemplateResponse {
  /**
   * 修改模板参数响应
   */
  ModifyTemplateStatus?: ModifyTemplateStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySmsSign请求参数结构体
 */
export interface ModifySmsSignRequest {
  /**
   * 待修改的签名 ID。
   */
  SignId: number
  /**
   * 签名名称。
   */
  SignName: string
  /**
   * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
   */
  SignType: number
  /**
   * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
   */
  DocumentType: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
注：需要和待修改签名International值保持一致，该参数不能直接修改国内签名到国际签名。
   */
  International: number
  /**
   * 签名用途：
0：自用。
1：他用。
   */
  UsedMethod: number
  /**
   * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
   */
  ProofImage: string
  /**
   * 委托授权证明。选择 UsedMethod 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 UsedMethod 在选择为 1（他用）时，这个字段才会生效。
   */
  CommissionImage?: string
  /**
   * 签名的申请备注。
   */
  Remark?: string
  /**
   * 已审核通过的国内短信的资质 ID。资质 ID 信息可前往国内短信的 [实名资质管理](https://console.cloud.tencent.com/smsv2/enterprise) 页查看。<dx-alert infotype="notice" title="说明"><ul><li>国内短信需填写资质ID，国际短信无需填写。</li></ul></dx-alert>
   */
  QualificationId?: number
}

/**
 * AddSmsSign请求参数结构体
 */
export interface AddSmsSignRequest {
  /**
   * 签名名称。
注：不能重复申请已通过或待审核的签名。
   */
  SignName: string
  /**
   * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
   */
  SignType: number
  /**
   * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
   */
  DocumentType: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International: number
  /**
   * 签名用途：
0：自用。
1：他用。
   */
  UsedMethod: number
  /**
   * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
   */
  ProofImage: string
  /**
   * 委托授权证明。选择 UsedMethod 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 UsedMethod 在选择为 1（他用）时，这个字段才会生效。
   */
  CommissionImage?: string
  /**
   * 签名的申请备注。
   */
  Remark?: string
  /**
   * 已审核通过的国内短信的资质 ID。资质 ID 信息可前往国内短信的 [实名资质管理](https://console.cloud.tencent.com/smsv2/enterprise) 页查看。<dx-alert infotype="notice" title="说明"><ul><li>国内短信需填写资质ID，国际短信无需填写。</li></ul></dx-alert>
   */
  QualificationId?: number
}

/**
 * 添加模板参数响应
 */
export interface AddTemplateStatus {
  /**
   * 模板参数
   */
  TemplateId?: string
}

/**
 * DescribeSmsTemplateList返回参数结构体
 */
export interface DescribeSmsTemplateListResponse {
  /**
   * 获取短信模板信息响应
   */
  DescribeTemplateStatusSet?: Array<DescribeTemplateListStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PullSmsSendStatusByPhoneNumber请求参数结构体
 */
export interface PullSmsSendStatusByPhoneNumberRequest {
  /**
   * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期7天前的数据。
   */
  SendDateTime: number
  /**
   * 偏移量。
注：目前固定设置为0。
   */
  Offset: number
  /**
   * 拉取最大条数，最多 100。
   */
  Limit: number
  /**
   * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PhoneNumber: string
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 拉取截止时间，UNIX 时间戳（时间：秒）。
   */
  EndDateTime?: number
}

/**
 * AddSmsTemplate请求参数结构体
 */
export interface AddSmsTemplateRequest {
  /**
   * 模板名称。
   */
  TemplateName: string
  /**
   * 模板内容。
   */
  TemplateContent: string
  /**
   * 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。
注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。
   */
  SmsType: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International: number
  /**
   * 模板备注，例如申请原因，使用场景等。
   */
  Remark: string
}

/**
 * ModifySmsTemplate请求参数结构体
 */
export interface ModifySmsTemplateRequest {
  /**
   * 待修改的模板的模板 ID。
   */
  TemplateId: number
  /**
   * 新的模板名称。
   */
  TemplateName: string
  /**
   * 新的模板内容。
   */
  TemplateContent: string
  /**
   * 短信类型，1表示营销短信，2表示通知短信，3表示验证码短信。
注：为进一步提升短信发送质量、提高短信模板审核通过率，从2024年5月16日起，腾讯云短信模板类型优化为“验证码短信”、“通知短信”、“营销短信”，可参考[关于腾讯云短信模板类型优化公告](https://cloud.tencent.com/document/product/382/106171)。新开通短信服务的客户需严格参考新的短信类型申请短信模板。
   */
  SmsType: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International: number
  /**
   * 模板备注，例如申请原因，使用场景等。
   */
  Remark: string
}

/**
 * 短信回复状态
 */
export interface PullSmsReplyStatus {
  /**
   * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。
   */
  ExtendCode?: string
  /**
   * 国家（或地区）码。
   */
  NationCode?: string
  /**
   * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PhoneNumber?: string
  /**
   * 短信签名。
   */
  Sign?: string
  /**
   * 用户回复的内容。
   */
  ReplyContent?: string
  /**
   * 回复时间（例如：2019-10-08 17:18:37）。
   */
  ReplyTime?: string
  /**
   * 回复时间，UNIX 时间戳（单位：秒）。
   */
  ReplyUnixTime?: number
}

/**
 * CallbackStatusStatistics返回参数结构体
 */
export interface CallbackStatusStatisticsResponse {
  /**
   * 回执数据统计响应包体。
   */
  CallbackStatusStatistics?: CallbackStatusStatistics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PullSmsSendStatus请求参数结构体
 */
export interface PullSmsSendStatusRequest {
  /**
   * 拉取最大条数，最多100条。
   */
  Limit: number
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。
   */
  SmsSdkAppid: string
}

/**
 * 套餐包信息统计响应包体
 */
export interface SmsPackagesStatistics {
  /**
   * 套餐包创建时间，标准时间，例如：2019-10-08 17:18:37。
   */
  PackageCreateTime?: string
  /**
   * 套餐包创建时间，UNIX 时间戳（单位：秒）。
   */
  PackageCreateUnixTime?: number
  /**
   * 套餐包生效时间，标准时间，例如：2019-10-08 17:18:37。
   */
  PackageEffectiveTime?: string
  /**
   * 套餐包生效时间，UNIX 时间戳（单位：秒）。
   */
  PackageEffectiveUnixTime?: number
  /**
   * 套餐包过期时间，标准时间，例如：2019-10-08 17:18:37。
   */
  PackageExpiredTime?: string
  /**
   * 套餐包过期时间，UNIX 时间戳（单位：秒）。
   */
  PackageExpiredUnixTime?: number
  /**
   * 套餐包条数。
   */
  AmountOfPackage?: number
  /**
   * 0表示赠送套餐包，1表示购买套餐包。
   */
  TypeOfPackage?: number
  /**
   * 套餐包 ID。
   */
  PackageId?: number
  /**
   * 当前使用量。
   */
  CurrentUsage?: number
}

/**
 * PullSmsSendStatusByPhoneNumber返回参数结构体
 */
export interface PullSmsSendStatusByPhoneNumberResponse {
  /**
   * 下发状态响应集合。
   */
  PullSmsSendStatusSet?: Array<PullSmsSendStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改签名响应
 */
export interface ModifySignStatus {
  /**
   * 签名Id
   */
  SignId?: number
  /**
   * 签名修改申请Id
   */
  SignApplyId?: string
}

/**
 * 获取短信签名信息响应
 */
export interface DescribeSignListStatus {
  /**
   * 签名Id
   */
  SignId?: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International?: number
  /**
   * 申请签名状态。其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。
   */
  StatusCode?: number
  /**
   * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
   */
  ReviewReply?: string
  /**
   * 签名名称。
   */
  SignName?: string
  /**
   * 提交审核时间，UNIX 时间戳（单位：秒）。
   */
  CreateTime?: number
  /**
   * 国内短信的资质 ID。资质 ID 信息可前往国内短信的 [实名资质管理](https://console.cloud.tencent.com/smsv2/enterprise) 页查看。
注：国际短信不涉及，默认为0。
   */
  QualificationId?: number
  /**
   * 国内短信的资质名称。
注：国际短信不涉及，默认为空。
   */
  QualificationName?: string
  /**
   * 国内短信的资质状态。其中0表示待审核，1表示已通过，2表示已拒绝，3表示待补充后提交，4表示变更后待审核，5表示变更后被驳回。可参考 [实名资质审核状态说明](https://cloud.tencent.com/document/product/382/13444#.E5.AE.A1.E6.A0.B8.E7.8A.B6.E6.80.81.E8.AF.B4.E6.98.8E) 。
注：国际短信不涉及，默认为0。
   */
  QualificationStatusCode?: number
}

/**
 * SendSms返回参数结构体
 */
export interface SendSmsResponse {
  /**
   * 短信发送状态。
   */
  SendStatusSet?: Array<SendStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendStatusStatistics返回参数结构体
 */
export interface SendStatusStatisticsResponse {
  /**
   * 发送数据统计响应包体。
   */
  SendStatusStatistics?: SendStatusStatistics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendSms请求参数结构体
 */
export interface SendSmsRequest {
  /**
   * 下发手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号或全为境外手机号。
例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PhoneNumberSet: Array<string>
  /**
   * 模板 ID，必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台](https://console.cloud.tencent.com/smsv2) 查看，若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。
   */
  TemplateID: string
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2)  添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台](https://console.cloud.tencent.com/smsv2)  查看。注：国内短信为必填参数。
   */
  Sign?: string
  /**
   * 模板参数，若无模板参数，则设置为空。
   */
  TemplateParamSet?: Array<string>
  /**
   * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。
   */
  ExtendCode?: string
  /**
   * 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。注意长度需小于512字节。
   */
  SessionContext?: string
  /**
   * 国内短信无senderid，无需填写该项；若需开通国际/港澳台短信senderid，请联系smshelper。
   */
  SenderId?: string
}

/**
 * 发送数据统计响应包体
 */
export interface SendStatusStatistics {
  /**
   * 短信计费条数统计，例如提交成功量为100条，其中有20条是长短信（长度为80字）被拆分成2条，则计费条数为： ```80 * 1 + 20 * 2 = 120``` 条。
   */
  FeeCount?: number
  /**
   * 短信提交量统计。
   */
  RequestCount?: number
  /**
   * 短信提交成功量统计。
   */
  RequestSuccessCount?: number
}

/**
 * CallbackStatusStatistics请求参数结构体
 */
export interface CallbackStatusStatisticsRequest {
  /**
   * 开始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。
   */
  StartDateTime: number
  /**
   * 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时。
注：EndDataTime 必须大于等于 StartDateTime。
   */
  EndDataTime: number
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 最大上限。
注：目前固定设置为0。
   */
  Limit: number
  /**
   * 偏移量。
注：目前固定设置为0。
   */
  Offset: number
}

/**
 * 删除模板响应
 */
export interface DeleteTemplateStatus {
  /**
   * 删除状态信息。
   */
  DeleteStatus?: string
  /**
   * 删除时间，UNIX 时间戳（单位：秒）。
   */
  DeleteTime?: number
}

/**
 * DescribeSmsSignList请求参数结构体
 */
export interface DescribeSmsSignListRequest {
  /**
   * 签名 ID 数组。
   */
  SignIdSet: Array<number | bigint>
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International: number
}

/**
 * SmsPackagesStatistics请求参数结构体
 */
export interface SmsPackagesStatisticsRequest {
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 最大上限(需要拉取的套餐包个数)。
注：Limit默认最大值为500，可结合Offset实现分页查询。
   */
  Limit: number
  /**
   * 偏移量。
   */
  Offset: number
}

/**
 * 获取短信模板信息响应
 */
export interface DescribeTemplateListStatus {
  /**
   * 模板Id
   */
  TemplateId?: number
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International?: number
  /**
   * 申请模板状态，其中0表示审核通过且已生效，1表示审核中，2表示审核通过待生效，-1表示审核未通过或审核失败。
   */
  StatusCode?: number
  /**
   * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
   */
  ReviewReply?: string
  /**
   * 模板名称。
   */
  TemplateName?: string
  /**
   * 提交审核时间，UNIX 时间戳（单位：秒）。
   */
  CreateTime?: number
}

/**
 * AddSmsTemplate返回参数结构体
 */
export interface AddSmsTemplateResponse {
  /**
   * 添加短信模板响应包体
   */
  AddTemplateStatus?: AddTemplateStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 短信的下发状态详细信息
 */
export interface PullSmsSendStatus {
  /**
   * 用户实际接收到短信的时间。
   */
  UserReceiveTime?: string
  /**
   * 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。
   */
  UserReceiveUnixTime?: number
  /**
   * 国家（或地区）码。
   */
  NationCode?: string
  /**
   * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PurePhoneNumber?: string
  /**
   * 手机号码，普通格式，示例如：18501234444。
   */
  PhoneNumber?: string
  /**
   * 本次发送标识 ID。
   */
  SerialNo?: string
  /**
   * 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）。
   */
  ReportStatus?: string
  /**
   * 用户接收短信状态描述。
   */
  Description?: string
}

/**
 * DescribeSmsSignList返回参数结构体
 */
export interface DescribeSmsSignListResponse {
  /**
   * 获取签名信息响应
   */
  DescribeSignListStatusSet?: Array<DescribeSignListStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmsTemplateList请求参数结构体
 */
export interface DescribeSmsTemplateListRequest {
  /**
   * 模板 ID 数组。
   */
  TemplateIdSet: Array<number | bigint>
  /**
   * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
   */
  International: number
}

/**
 * 回执数据统计响应包体
 */
export interface CallbackStatusStatistics {
  /**
   * 短信回执量统计。
   */
  CallbackCount?: number
  /**
   * 短信提交成功量统计。
   */
  RequestSuccessCount?: number
  /**
   * 短信回执失败量统计。
   */
  CallbackFailCount?: number
  /**
   * 短信回执成功量统计。
   */
  CallbackSuccessCount?: number
  /**
   * 运营商内部错误统计。
   */
  InternalErrorCount?: number
  /**
   * 号码无效或空号统计。
   */
  InvalidNumberCount?: number
  /**
   * 停机、关机等错误统计。
   */
  ShutdownErrorCount?: number
  /**
   * 号码拉入黑名单统计。
   */
  BlackListCount?: number
  /**
   * 运营商频率限制统计。
   */
  FrequencyLimitCount?: number
}

/**
 * SendStatusStatistics请求参数结构体
 */
export interface SendStatusStatisticsRequest {
  /**
   * 拉取起始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。
   */
  StartDateTime: number
  /**
   * 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
注：EndDataTime 必须大于等于 StartDateTime。
   */
  EndDataTime: number
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 最大上限。
注：目前固定设置为0。
   */
  Limit: number
  /**
   * 偏移量。
注：目前固定设置为0。
   */
  Offset: number
}

/**
 * DeleteSmsTemplate请求参数结构体
 */
export interface DeleteSmsTemplateRequest {
  /**
   * 待删除的模板 ID。
   */
  TemplateId: number
}

/**
 * PullSmsReplyStatusByPhoneNumber返回参数结构体
 */
export interface PullSmsReplyStatusByPhoneNumberResponse {
  /**
   * 回复状态响应集合。
   */
  PullSmsReplyStatusSet?: Array<PullSmsReplyStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发送短信状态
 */
export interface SendStatus {
  /**
   * 发送流水号。
   */
  SerialNo?: string
  /**
   * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PhoneNumber?: string
  /**
   * 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。
   */
  Fee?: number
  /**
   * 用户Session内容。
   */
  SessionContext?: string
  /**
   * 短信请求错误码，具体含义请参考错误码。
   */
  Code?: string
  /**
   * 短信请求错误码描述。
   */
  Message?: string
  /**
   * 国家码或地区码，例如CN,US等，对于未识别出国家码或者地区码，默认返回DEF,具体支持列表请参考国际/港澳台计费总览。
   */
  IsoCode?: string
}

/**
 * DeleteSmsSign返回参数结构体
 */
export interface DeleteSmsSignResponse {
  /**
   * 删除签名响应
   */
  DeleteSignStatus?: DeleteSignStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddSmsSign返回参数结构体
 */
export interface AddSmsSignResponse {
  /**
   * 添加签名响应
   */
  AddSignStatus?: AddSignStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSmsSign请求参数结构体
 */
export interface DeleteSmsSignRequest {
  /**
   * 待删除的签名 ID。
   */
  SignId: number
}

/**
 * PullSmsReplyStatusByPhoneNumber请求参数结构体
 */
export interface PullSmsReplyStatusByPhoneNumberRequest {
  /**
   * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期7天前的数据。
   */
  SendDateTime: number
  /**
   * 偏移量。
注：目前固定设置为0。
   */
  Offset: number
  /**
   * 拉取最大条数，最多 100。
   */
  Limit: number
  /**
   * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8618501234444， 其中前面有一个+号 ，86为国家码，18501234444为手机号。
   */
  PhoneNumber: string
  /**
   * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/smsv2) 添加应用后生成的实际SdkAppid，例如1400006666。
   */
  SmsSdkAppid: string
  /**
   * 拉取截止时间，UNIX 时间戳（时间：秒）。
   */
  EndDateTime?: number
}

/**
 * ModifySmsSign返回参数结构体
 */
export interface ModifySmsSignResponse {
  /**
   * 修改签名响应
   */
  ModifySignStatus?: ModifySignStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加签名响应
 */
export interface AddSignStatus {
  /**
   * 签名Id。
   */
  SignId?: number
  /**
   * 签名申请Id。
   */
  SignApplyId?: number
}

/**
 * 修改模板参数响应
 */
export interface ModifyTemplateStatus {
  /**
   * 模板参数
   */
  TemplateId?: number
}

/**
 * PullSmsSendStatus返回参数结构体
 */
export interface PullSmsSendStatusResponse {
  /**
   * 下发状态响应集合。
   */
  PullSmsSendStatusSet?: Array<PullSmsSendStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SmsPackagesStatistics返回参数结构体
 */
export interface SmsPackagesStatisticsResponse {
  /**
   * 发送数据统计响应包体。
   */
  SmsPackagesStatisticsSet?: Array<SmsPackagesStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除签名响应
 */
export interface DeleteSignStatus {
  /**
   * 删除状态信息。
   */
  DeleteStatus: string
  /**
   * 删除时间，UNIX 时间戳（单位：秒）。
   */
  DeleteTime: number
}

/**
 * PullSmsReplyStatus返回参数结构体
 */
export interface PullSmsReplyStatusResponse {
  /**
   * 回复状态响应集合。
   */
  PullSmsReplyStatusSet?: Array<PullSmsReplyStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
