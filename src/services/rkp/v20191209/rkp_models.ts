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
 * GetToken返回参数结构体
 */
export interface GetTokenResponse {
  /**
   * 返回token
   */
  Token?: string

  /**
   * 过期时间
   */
  ExpireTime?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDevAndRisk请求参数结构体
 */
export interface QueryDevAndRiskRequest {
  /**
   * 设备类型 0表示Android， 1表示IOS
   */
  DevType: number

  /**
   * Android Imei号
   */
  Imei?: string

  /**
   * Mac地址
   */
  Mac?: string

  /**
   * android  Aid
   */
  Aid?: string

  /**
   * Android Cid
   */
  Cid?: string

  /**
   * 手机Imsi
   */
  Imsi?: string

  /**
   * Df 磁盘分区信息
   */
  Df?: string

  /**
   * 内核版本
   */
  KernelVer?: string

  /**
   * 存储大小
   */
  Storage?: string

  /**
   * 设备驱动指纹
   */
  Dfp?: string

  /**
   * 启动时间
   */
  BootTime?: string

  /**
   * 分辨率 水平*垂直 格式
   */
  Resolution?: string

  /**
   * 铃声列表
   */
  RingList?: string

  /**
   * 字体列表
   */
  FontList?: string

  /**
   * 传感器列表
   */
  SensorList?: string

  /**
   * CPU型号
   */
  CpuType?: string

  /**
   * 电池容量
   */
  Battery?: string

  /**
   * 信通院广告ID
   */
  Oaid?: string

  /**
   * IOS 广告ID
   */
  Idfa?: string

  /**
   * IOS 应用ID
   */
  Idfv?: string

  /**
   * 设备名称
   */
  DeviceName?: string

  /**
   * IOS手机型号
   */
  IphoneModel?: string

  /**
   * Android 指纹
   */
  Fingerprint?: string

  /**
   * Android序列号
   */
  SerialId?: string
}

/**
 * 设备信息
 */
export interface DevInfoQ {
  /**
   * devid
   */
  OpenId: string

  /**
   * 风险值
   */
  RiskScore: number

  /**
      * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskInfo: Array<RiskDetail>

  /**
   * 概率值
   */
  Probability: number
}

/**
 * 风险详情
 */
export interface RiskDetail {
  /**
   * 风险码
   */
  RiskCode: number

  /**
      * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskCodeValue: string
}

/**
 * 风险信息
 */
export interface RiskInfo {
  /**
   * 风险码
   */
  Key: number

  /**
      * 风险详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * GetOpenId请求参数结构体
 */
export interface GetOpenIdRequest {
  /**
   * dev临时token，通过sdk接口获取
   */
  DeviceToken: string

  /**
   * 业务ID
   */
  BusinessId: number

  /**
   * 业务侧账号体系下的用户ID
   */
  BusinessUserId?: string

  /**
   * 平台：0-Android， 1-iOS， 2-web
   */
  Platform?: number

  /**
   * 选项
   */
  Option?: string
}

/**
 * QueryDevAndRisk返回参数结构体
 */
export interface QueryDevAndRiskResponse {
  /**
   * 是否查得
   */
  Found?: number

  /**
      * 匹配数量级别
注意：此字段可能返回 null，表示取不到有效值。
      */
  AllCnt?: number

  /**
      * 匹配到的设备信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Matches?: Array<DevInfoQ>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetToken请求参数结构体
 */
export interface GetTokenRequest {
  /**
   * 业务ID
   */
  BusinessId: number

  /**
   * 业务子场景
   */
  Scene: number

  /**
   * 业务侧账号体系下的用户ID
   */
  BusinessUserId?: string

  /**
   * 用户侧的IP
   */
  AppClientIp?: string

  /**
   * 过期时间
   */
  ExpireTime?: number

  /**
   * 上一个token
   */
  OldToken?: string
}

/**
 * GetOpenId返回参数结构体
 */
export interface GetOpenIdResponse {
  /**
      * 设备ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenId?: string

  /**
      * 设备风险
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskInfo?: Array<RiskInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
