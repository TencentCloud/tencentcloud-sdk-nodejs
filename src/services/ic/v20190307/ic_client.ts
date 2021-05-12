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
  SendMultiSmsResponse,
  AppInfo,
  RenewCardsResponse,
  CardList,
  DescribeCardsResponse,
  ModifyUserCardRemarkRequest,
  DescribeCardResponse,
  CardInfo,
  DescribeAppResponse,
  DescribeCardRequest,
  DescribeAppRequest,
  SendSmsResponse,
  ModifyUserCardRemarkResponse,
  SendSmsRequest,
  DescribeCardsRequest,
  SendMultiSmsRequest,
  ResRenew,
  SmsRet,
  SmsSid,
  RenewCardsRequest,
} from "./ic_models"

/**
 * ic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ic.tencentcloudapi.com", "2019-03-07", clientConfig)
  }

  /**
   * 根据应用id查询物联卡应用详情
   */
  async DescribeApp(
    req: DescribeAppRequest,
    cb?: (error: string, rep: DescribeAppResponse) => void
  ): Promise<DescribeAppResponse> {
    return this.request("DescribeApp", req, cb)
  }

  /**
   * 查询卡片详细信息
   */
  async DescribeCard(
    req: DescribeCardRequest,
    cb?: (error: string, rep: DescribeCardResponse) => void
  ): Promise<DescribeCardResponse> {
    return this.request("DescribeCard", req, cb)
  }

  /**
   * 发送短信息接口
   */
  async SendSms(
    req: SendSmsRequest,
    cb?: (error: string, rep: SendSmsResponse) => void
  ): Promise<SendSmsResponse> {
    return this.request("SendSms", req, cb)
  }

  /**
   * 群发短信
   */
  async SendMultiSms(
    req: SendMultiSmsRequest,
    cb?: (error: string, rep: SendMultiSmsResponse) => void
  ): Promise<SendMultiSmsResponse> {
    return this.request("SendMultiSms", req, cb)
  }

  /**
   * 编辑卡片备注
   */
  async ModifyUserCardRemark(
    req: ModifyUserCardRemarkRequest,
    cb?: (error: string, rep: ModifyUserCardRemarkResponse) => void
  ): Promise<ModifyUserCardRemarkResponse> {
    return this.request("ModifyUserCardRemark", req, cb)
  }

  /**
     * 批量为卡片续费，此接口建议调用至少间隔10s,如果出现返回deal lock failed相关的错误，请过10s再重试。
续费的必要条件：
1、单次续费的卡片不可以超过 100张。
2、接口只支持在控制台购买的卡片进行续费
3、销户和未激活的卡片不支持续费。
4、每张物联网卡，续费总周期不能超过24个月
     */
  async RenewCards(
    req: RenewCardsRequest,
    cb?: (error: string, rep: RenewCardsResponse) => void
  ): Promise<RenewCardsResponse> {
    return this.request("RenewCards", req, cb)
  }

  /**
   * 查询卡片列表信息
   */
  async DescribeCards(
    req: DescribeCardsRequest,
    cb?: (error: string, rep: DescribeCardsResponse) => void
  ): Promise<DescribeCardsResponse> {
    return this.request("DescribeCards", req, cb)
  }
}
