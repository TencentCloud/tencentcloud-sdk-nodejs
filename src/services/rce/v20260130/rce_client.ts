/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  TaskEvent,
  DigitalOrder,
  Billing,
  Decision,
  Receiver,
  Person,
  Environment,
  Wallet,
  Score,
  ClaimRedPacketEvent,
  PromotionCode,
  ModifyGuildEvent,
  ChargeBackEvent,
  IPLocation,
  ReportEventRequest,
  RegisterEvent,
  BrowseEvent,
  ChatEvent,
  Merchant,
  Delivery,
  Cust,
  AssessEnvironmentRiskRsp,
  AssessEnvironmentRiskResponse,
  PaymentMethod,
  LuckyDrawEvent,
  AssessDeviceRiskPremiumProRequest,
  Order,
  AssessDeviceRiskProResponse,
  User,
  Address,
  Device,
  DataAuthorization,
  CreateOrderEvent,
  Card,
  Result,
  ReportEventResponse,
  RiskLabel,
  CustEvent,
  Guild,
  Sender,
  DataScore,
  AddFriendEvent,
  AssessDeviceRiskPremiumProResponse,
  AssessDeviceRiskProRequest,
  CreditPoint,
  Item,
  Amount,
  SMSEvent,
  AssessRiskResponse,
  AssessEnvironmentRiskRequest,
  AddPromotionEvent,
  Promotion,
  ModifyAccountEvent,
  Inviter,
  LogoutEvent,
  Browser,
  PaymentResult,
  TransactionEvent,
  AssessRiskRsp,
  ModifyPasswordEvent,
  AssessDeviceRiskRsp,
  Coupon,
  ModifyRoleEvent,
  App,
  LoginEvent,
  WithdrawEvent,
  EventDetail,
  IPNetwork,
  SecurityVerificationEvent,
  AssessDeviceRiskPremiumRsp,
  Chat,
  RedeemEvent,
  InvitationEvent,
  Role,
  AssessRiskRequest,
  ScanCodeEvent,
} from "./rce_models"

/**
 * rce client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rce.tencentcloudapi.com", "2026-01-30", clientConfig)
  }

  /**
   * 基于设备端SDK 采集设备指纹 token和IP进行风险识别，提供设备维度的风险标签和设备基础信息，以及 IP 的地理位置和网络信息。
   */
  async AssessDeviceRiskPro(
    req: AssessDeviceRiskProRequest,
    cb?: (error: string, rep: AssessDeviceRiskProResponse) => void
  ): Promise<AssessDeviceRiskProResponse> {
    return this.request("AssessDeviceRiskPro", req, cb)
  }

  /**
   * 基于设备端SDK 采集设备指纹 token和IP进行风险识别，提供设备、环境、行为等维度给出的综合风险评估（包含决策结果、风险评分、风险标签）和设备以及 IP 的基础信息。
   */
  async AssessDeviceRiskPremiumPro(
    req: AssessDeviceRiskPremiumProRequest,
    cb?: (error: string, rep: AssessDeviceRiskPremiumProResponse) => void
  ): Promise<AssessDeviceRiskPremiumProResponse> {
    return this.request("AssessDeviceRiskPremiumPro", req, cb)
  }

  /**
   * 事件信息上报。用于上报您业务中无需实时决策的事件，我们会通过引擎计算、机器学习挖掘风险特征用于实时事件风险评估。
   */
  async ReportEvent(
    req: ReportEventRequest,
    cb?: (error: string, rep: ReportEventResponse) => void
  ): Promise<ReportEventResponse> {
    return this.request("ReportEvent", req, cb)
  }

  /**
   * 基于传入的客户端IP进行风险识别，提供环境的风险评估（包含风险等级、风险标签）以及IP的地理位置和网络信息。
   */
  async AssessEnvironmentRisk(
    req: AssessEnvironmentRiskRequest,
    cb?: (error: string, rep: AssessEnvironmentRiskResponse) => void
  ): Promise<AssessEnvironmentRiskResponse> {
    return this.request("AssessEnvironmentRisk", req, cb)
  }

  /**
   * 事件风险评估。用于实时获取事件的风险信息，您可以在业务的关键事件中获取到我们根据设备风险、环境风险、账号风险、行为风险以及历史上报的事件信息评估出来的风险决策结果、风险评分和风险标签等。
   */
  async AssessRisk(
    req: AssessRiskRequest,
    cb?: (error: string, rep: AssessRiskResponse) => void
  ): Promise<AssessRiskResponse> {
    return this.request("AssessRisk", req, cb)
  }
}
