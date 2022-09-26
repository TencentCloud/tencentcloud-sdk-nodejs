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
 * DescribeFraudBase请求参数结构体
 */
export interface DescribeFraudBaseRequest {
  /**
   * 客户端通过SDK获取的设备Token
   */
  DeviceToken: string
}

/**
 * 风险信息
 */
export interface RiskInfo {
  /**
   * 风险类型
   */
  Type: number

  /**
   * 风险等级
   */
  Level: number
}

/**
 * DescribeFraudPremium返回参数结构体
 */
export interface DescribeFraudPremiumResponse {
  /**
   * App版本信息
   */
  AppVersion: string

  /**
   * 品牌
   */
  Brand: string

  /**
   * 客户端IP
   */
  ClientIp: string

  /**
   * 机型
   */
  Model: string

  /**
   * 网络类型
   */
  NetworkType: string

  /**
   * 应用包名
   */
  PackageName: string

  /**
   * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
   */
  Platform: string

  /**
   * 系统版本
   */
  SystemVersion: string

  /**
   * SDK版本号
   */
  SdkBuildNo: string

  /**
   * 实时风险信息
   */
  RiskInfos: Array<RiskInfo>

  /**
   * 离线风险信息
   */
  HistRiskInfos: Array<RiskInfo>

  /**
   * 设备匿名标识
   */
  Openid: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrustedID返回参数结构体
 */
export interface DescribeTrustedIDResponse {
  /**
   * 设备匿名标识
   */
  Openid: string

  /**
   * App版本信息
   */
  AppVersion: string

  /**
   * 品牌
   */
  Brand: string

  /**
   * 客户端IP
   */
  ClientIp: string

  /**
   * 机型
   */
  Model: string

  /**
   * 网络类型
   */
  NetworkType: string

  /**
   * 应用包名
   */
  PackageName: string

  /**
   * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
   */
  Platform: string

  /**
   * 系统版本
   */
  SystemVersion: string

  /**
   * SDK版本号
   */
  SdkBuildNo: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFraudBase返回参数结构体
 */
export interface DescribeFraudBaseResponse {
  /**
   * App版本信息
   */
  AppVersion: string

  /**
   * 品牌
   */
  Brand: string

  /**
   * 客户端IP
   */
  ClientIp: string

  /**
   * 机型
   */
  Model: string

  /**
   * 网络类型
   */
  NetworkType: string

  /**
   * 应用包名
   */
  PackageName: string

  /**
   * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
   */
  Platform: string

  /**
   * 系统版本
   */
  SystemVersion: string

  /**
   * SDK版本号
   */
  SdkBuildNo: string

  /**
   * 实时风险信息
   */
  RiskInfos: Array<RiskInfo>

  /**
   * 离线风险信息
   */
  HistRiskInfos: Array<RiskInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrustedID请求参数结构体
 */
export interface DescribeTrustedIDRequest {
  /**
   * 客户端通过SDK获取的设备Token
   */
  DeviceToken: string
}

/**
 * DescribeFraudPremium请求参数结构体
 */
export interface DescribeFraudPremiumRequest {
  /**
   * 客户端通过SDK获取的设备Token
   */
  DeviceToken: string
}
