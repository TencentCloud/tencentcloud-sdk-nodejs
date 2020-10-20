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
 * QueryAntiFraudVip请求参数结构体
 */
export interface QueryAntiFraudVipRequest {
  /**
   * 电话号码(五选二)
   */
  PhoneNumber?: string

  /**
   * Id号(五选二)
   */
  IdNumber?: string

  /**
   * 银行卡号(五选二)
   */
  BankCardNumber?: string

  /**
   * 用户请求来源 IP(五选二)
   */
  UserIp?: string

  /**
   * 国际移动设备识别码(五选二)
   */
  Imei?: string

  /**
   * ios 系统广告标示符(五选二)
   */
  Idfa?: string

  /**
   * 业务场景 ID，需要找技术对接
   */
  Scene?: string

  /**
   * 姓名
   */
  Name?: string

  /**
   * 用户邮箱地址
   */
  EmailAddress?: string

  /**
   * 用户住址
   */
  Address?: string

  /**
      * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
      */
  AccountType?: string

  /**
   * 可选的 QQ 或微信 openid
   */
  Uid?: string

  /**
      * qq 或微信分配给网站或应用的 appid，用来
唯一标识网站或应用
      */
  AppIdU?: string

  /**
   * WIFI MAC
   */
  WifiMac?: string

  /**
   * WIFI 服务集标识
   */
  WifiSSID?: string

  /**
   * WIFI-BSSID
   */
  WifiBSSID?: string

  /**
      * 业务 ID，在多个业务中使用此服务，通过此
ID 区分统计数据
      */
  BusinessId?: string

  /**
      * Id加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
      */
  IdCryptoType?: string

  /**
      * 手机号加密类型
0：不加密（默认值）
1：md5, 2：sha256
3：SM3
      */
  PhoneCryptoType?: string

  /**
   * MAC 地址
   */
  Mac?: string

  /**
   * 国际移动用户识别码
   */
  Imsi?: string

  /**
      * 姓名加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
      */
  NameCryptoType?: string
}

/**
 * 扩展字段，对风险类型的说明
 */
export interface RiskDetail {
  /**
   * 风险码
   */
  RiskCode: number
}

/**
 * QueryAntiFraudVip返回参数结构体
 */
export interface QueryAntiFraudVipResponse {
  /**
   * 表示该条记录能否查到：1为能查到，-1为查不到
   */
  Found?: number

  /**
   * 表示该条Id能否查到：1为能查到，-1为查不到
   */
  IdFound?: number

  /**
   * 0~100;值越高 欺诈可能性越大
   */
  RiskScore?: number

  /**
      * 扩展字段，对风险类型的说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskInfo?: Array<RiskDetail>

  /**
      * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeDesc?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
