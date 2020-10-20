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
  CrowdAntiRushInfo,
  QueryActivityAntiRushResponse,
  OutputActivityAntiRushAdvancedValue,
  QQAccountInfo,
  ManageMarketingRiskRequest,
  OutputManageMarketingRisk,
  OnlineScamInfo,
  InputManageMarketingRisk,
  InputActivityAntiRushAdvanced,
  OtherAccountInfo,
  AccountInfo,
  QueryActivityAntiRushAdvancedResponse,
  ManageMarketingRiskResponse,
  WeChatAccountInfo,
  SponsorInfo,
  QueryActivityAntiRushRequest,
  InputDetails,
  OutputManageMarketingRiskValue,
  OutputActivityAntiRushAdvanced,
  QueryActivityAntiRushAdvancedRequest,
} from "./aa_models"

/**
 * aa client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("aa.tencentcloudapi.com", "2020-02-24", clientConfig)
  }

  /**
   * 腾讯云活动防刷（ActivityAntiRush，AA）是针对电商、O2O、P2P、游戏、支付等行业在促销活动中遇到“羊毛党”恶意刷取优惠福利的行为时，通过防刷引擎，精准识别出“薅羊毛”恶意行为的活动防刷服务，避免了企业被刷带来的巨大经济损失。
   */
  async QueryActivityAntiRush(
    req: QueryActivityAntiRushRequest,
    cb?: (error: string, rep: QueryActivityAntiRushResponse) => void
  ): Promise<QueryActivityAntiRushResponse> {
    return this.request("QueryActivityAntiRush", req, cb)
  }

  /**
   * 活动防刷、注册保护、登录保护等营销产品的高级版本
   */
  async ManageMarketingRisk(
    req: ManageMarketingRiskRequest,
    cb?: (error: string, rep: ManageMarketingRiskResponse) => void
  ): Promise<ManageMarketingRiskResponse> {
    return this.request("ManageMarketingRisk", req, cb)
  }

  /**
   * 活动防刷高级版，支持对网赚众包、网赚防刷、引流反诈骗场景的检测识别
   */
  async QueryActivityAntiRushAdvanced(
    req: QueryActivityAntiRushAdvancedRequest,
    cb?: (error: string, rep: QueryActivityAntiRushAdvancedResponse) => void
  ): Promise<QueryActivityAntiRushAdvancedResponse> {
    return this.request("QueryActivityAntiRushAdvanced", req, cb)
  }
}
