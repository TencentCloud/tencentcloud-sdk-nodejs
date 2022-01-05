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
  PullSmsReplyStatusRequest,
  DeleteSmsTemplateResponse,
  ModifySmsTemplateResponse,
  ModifySmsSignRequest,
  SmsPackagesStatisticsRequest,
  AddSmsSignRequest,
  AddTemplateStatus,
  DescribeSmsTemplateListResponse,
  DescribePhoneNumberInfoRequest,
  PullSmsSendStatusByPhoneNumberRequest,
  AddSmsTemplateRequest,
  ModifySmsTemplateRequest,
  PullSmsReplyStatus,
  CallbackStatusStatisticsResponse,
  PullSmsSendStatusRequest,
  SmsPackagesStatistics,
  PullSmsSendStatusByPhoneNumberResponse,
  ModifySignStatus,
  DescribeSignListStatus,
  SendSmsResponse,
  SendStatusStatisticsResponse,
  SendSmsRequest,
  SendStatusStatistics,
  CallbackStatusStatisticsRequest,
  DeleteTemplateStatus,
  DescribeSmsSignListRequest,
  DescribePhoneNumberInfoResponse,
  DescribeTemplateListStatus,
  AddSmsTemplateResponse,
  PullSmsSendStatus,
  DescribeSmsSignListResponse,
  DescribeSmsTemplateListRequest,
  CallbackStatusStatistics,
  PhoneNumberInfo,
  SendStatusStatisticsRequest,
  DeleteSmsTemplateRequest,
  PullSmsReplyStatusByPhoneNumberResponse,
  SendStatus,
  DeleteSmsSignResponse,
  AddSmsSignResponse,
  DeleteSmsSignRequest,
  PullSmsReplyStatusByPhoneNumberRequest,
  ModifySmsSignResponse,
  AddSignStatus,
  ModifyTemplateStatus,
  PullSmsSendStatusResponse,
  SmsPackagesStatisticsResponse,
  DeleteSignStatus,
  PullSmsReplyStatusResponse,
} from "./sms_models"

/**
 * sms client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("sms.tencentcloudapi.com", "2021-01-11", clientConfig)
  }

  /**
     * 1. 修改短信签名，修改之前请先认证参阅 [腾讯云短信签名审核标准](https://cloud.tencent.com/document/product/382/39022)。
2. ⚠️注意：个人认证用户不支持使用 API 修改短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录 [控制台](https://console.cloud.tencent.com/smsv2) 修改短信签名。
3. 修改短信签名，仅当签名为**待审核**或**已拒绝**状态时，才能进行修改，**已审核通过**的签名不支持修改。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async ModifySmsSign(
    req: ModifySmsSignRequest,
    cb?: (error: string, rep: ModifySmsSignResponse) => void
  ): Promise<ModifySmsSignResponse> {
    return this.request("ModifySmsSign", req, cb)
  }

  /**
     * 1. 添加短信签名，申请之前请先认真参阅 [腾讯云短信签名审核标准](https://cloud.tencent.com/document/product/382/39022)。
2. ⚠️注意：个人认证用户不支持使用 API 申请短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录控制台申请短信签名。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async AddSmsSign(
    req: AddSmsSignRequest,
    cb?: (error: string, rep: AddSmsSignResponse) => void
  ): Promise<AddSmsSignResponse> {
    return this.request("AddSmsSign", req, cb)
  }

  /**
     * 拉取短信下发状态。
目前也支持 [配置回调](https://cloud.tencent.com/document/product/382/37809#.E8.AE.BE.E7.BD.AE.E4.BA.8B.E4.BB.B6.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE) 的方式来获取下发状态。
>- 注：此接口需要联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81) 开通。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async PullSmsSendStatus(
    req: PullSmsSendStatusRequest,
    cb?: (error: string, rep: PullSmsSendStatusResponse) => void
  ): Promise<PullSmsSendStatusResponse> {
    return this.request("PullSmsSendStatus", req, cb)
  }

  /**
     * 短信发送接口，用于给用户发短信验证码、通知类短信或营销短信。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 [SDK](https://cloud.tencent.com/document/product/382/43193) 来使用云短信服务。
>- 注：您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
>- 注：当前接口属于 2021-01-11 版本，如果您仍在使用 [2019-07-11 版本](https://cloud.tencent.com/document/product/382/38778)，建议您使用当前最新版本的接口，版本差异可参考[版本描述](https://cloud.tencent.com/document/product/382/63195#.E7.89.88.E6.9C.AC.E6.8F.8F.E8.BF.B0)。
     */
  async SendSms(
    req: SendSmsRequest,
    cb?: (error: string, rep: SendSmsResponse) => void
  ): Promise<SendSmsResponse> {
    return this.request("SendSms", req, cb)
  }

  /**
     * ⚠️注意：个人认证用户不支持使用 API 删除短信正文模板，请登录 [控制台](https://console.cloud.tencent.com/smsv2) 删除短信正文模板，如需了解请参阅 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async DeleteSmsTemplate(
    req: DeleteSmsTemplateRequest,
    cb?: (error: string, rep: DeleteSmsTemplateResponse) => void
  ): Promise<DeleteSmsTemplateResponse> {
    return this.request("DeleteSmsTemplate", req, cb)
  }

  /**
     * 用户套餐包信息统计。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async SmsPackagesStatistics(
    req: SmsPackagesStatisticsRequest,
    cb?: (error: string, rep: SmsPackagesStatisticsResponse) => void
  ): Promise<SmsPackagesStatisticsResponse> {
    return this.request("SmsPackagesStatistics", req, cb)
  }

  /**
     * 统计用户发送短信的数据。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async SendStatusStatistics(
    req: SendStatusStatisticsRequest,
    cb?: (error: string, rep: SendStatusStatisticsResponse) => void
  ): Promise<SendStatusStatisticsResponse> {
    return this.request("SendStatusStatistics", req, cb)
  }

  /**
     * 统计用户回执的数据。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async CallbackStatusStatistics(
    req: CallbackStatusStatisticsRequest,
    cb?: (error: string, rep: CallbackStatusStatisticsResponse) => void
  ): Promise<CallbackStatusStatisticsResponse> {
    return this.request("CallbackStatusStatistics", req, cb)
  }

  /**
     * ⚠️注意：个人认证用户不支持使用 API 查询短信正文模板，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async DescribeSmsTemplateList(
    req: DescribeSmsTemplateListRequest,
    cb?: (error: string, rep: DescribeSmsTemplateListResponse) => void
  ): Promise<DescribeSmsTemplateListResponse> {
    return this.request("DescribeSmsTemplateList", req, cb)
  }

  /**
     * 拉取短信回复状态。
目前也支持 [配置回复回调](https://cloud.tencent.com/document/product/382/42907) 的方式来获取上行回复。
>- 注：此接口需要联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81) 开通。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async PullSmsReplyStatus(
    req: PullSmsReplyStatusRequest,
    cb?: (error: string, rep: PullSmsReplyStatusResponse) => void
  ): Promise<PullSmsReplyStatusResponse> {
    return this.request("PullSmsReplyStatus", req, cb)
  }

  /**
     * ⚠️注意：个人认证用户不支持使用 API 查询短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629),如果为个人认证请登录 [控制台](https://console.cloud.tencent.com/smsv2) 查询短信签名。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async DescribeSmsSignList(
    req: DescribeSmsSignListRequest,
    cb?: (error: string, rep: DescribeSmsSignListResponse) => void
  ): Promise<DescribeSmsSignListResponse> {
    return this.request("DescribeSmsSignList", req, cb)
  }

  /**
     * 拉取单个号码短信下发状态。
目前也支持 [配置回调](https://cloud.tencent.com/document/product/382/37809#.E8.AE.BE.E7.BD.AE.E4.BA.8B.E4.BB.B6.E5.9B.9E.E8.B0.83.E9.85.8D.E7.BD.AE) 的方式来获取下发状态。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async PullSmsSendStatusByPhoneNumber(
    req: PullSmsSendStatusByPhoneNumberRequest,
    cb?: (error: string, rep: PullSmsSendStatusByPhoneNumberResponse) => void
  ): Promise<PullSmsSendStatusByPhoneNumberResponse> {
    return this.request("PullSmsSendStatusByPhoneNumber", req, cb)
  }

  /**
     * 1. 修改短信正文模板，修改之前请先认真参阅 [腾讯云短信正文模板审核标准](https://cloud.tencent.com/document/product/382/39023)。
2. ⚠️注意：个人认证用户不支持使用 API 修改短信正文模板，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录 [控制台](https://console.cloud.tencent.com/smsv2) 修改短信正文模板。
3. 修改短信模板，仅当正文模板为**待审核**或**已拒绝**状态时，才能进行修改，**已审核通过**的正文模板不支持修改。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2019-07-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async ModifySmsTemplate(
    req: ModifySmsTemplateRequest,
    cb?: (error: string, rep: ModifySmsTemplateResponse) => void
  ): Promise<ModifySmsTemplateResponse> {
    return this.request("ModifySmsTemplate", req, cb)
  }

  /**
     * 拉取单个号码短信回复状态。
目前也支持 [配置回复回调](https://cloud.tencent.com/document/product/382/42907) 的方式来获取上行回复。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。

     */
  async PullSmsReplyStatusByPhoneNumber(
    req: PullSmsReplyStatusByPhoneNumberRequest,
    cb?: (error: string, rep: PullSmsReplyStatusByPhoneNumberResponse) => void
  ): Promise<PullSmsReplyStatusByPhoneNumberResponse> {
    return this.request("PullSmsReplyStatusByPhoneNumber", req, cb)
  }

  /**
     * 提供电话号码的信息查询，包括国家（或地区）码、规范的 E.164 格式号码等。
>- 例如：查询号码 +86018845720123，可以得到国家码 86、规范的 E.164 号码 +8618845720123 等信息。
     */
  async DescribePhoneNumberInfo(
    req: DescribePhoneNumberInfoRequest,
    cb?: (error: string, rep: DescribePhoneNumberInfoResponse) => void
  ): Promise<DescribePhoneNumberInfoResponse> {
    return this.request("DescribePhoneNumberInfo", req, cb)
  }

  /**
     * ⚠️注意：个人认证用户不支持使用 API 删除短信签名，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，请登录 [控制台](https://console.cloud.tencent.com/smsv2) 删除短信签名。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async DeleteSmsSign(
    req: DeleteSmsSignRequest,
    cb?: (error: string, rep: DeleteSmsSignResponse) => void
  ): Promise<DeleteSmsSignResponse> {
    return this.request("DeleteSmsSign", req, cb)
  }

  /**
     * 1. 添加短信模板，申请之前请先认真参阅 [腾讯云短信正文模板审核标准](https://cloud.tencent.com/document/product/382/39023)。
2. ⚠️注意：个人认证用户不支持使用 API 申请短信正文模板，请参阅了解 [实名认证基本介绍](https://cloud.tencent.com/document/product/378/3629)，如果为个人认证请登录 [控制台](https://console.cloud.tencent.com/smsv2) 申请短信正文模板。
>- 注：由于云 **API3.0 安全性**有所提升，所以**接口鉴权**较为复杂，建议使用 SDK 来使用云短信服务。
>- 您可以在 [API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=sms&Version=2021-01-11&Action=SendSms) 中直接运行该接口，可以先免去签名计算步骤。运行成功后，API Explorer可以**自动生成**SDK代码示例。
     */
  async AddSmsTemplate(
    req: AddSmsTemplateRequest,
    cb?: (error: string, rep: AddSmsTemplateResponse) => void
  ): Promise<AddSmsTemplateResponse> {
    return this.request("AddSmsTemplate", req, cb)
  }
}
