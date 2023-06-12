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
 * DescribeStockEstimation返回参数结构体
 */
export interface DescribeStockEstimationResponse {
  /**
   * 用户信誉分，1-5从低到高
   */
  ServiceRsp: Score
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNewUserAcquisition请求参数结构体
 */
export interface DescribeNewUserAcquisitionRequest {
  /**
   * 用户信息
   */
  ServiceParams: UserInfos
}

/**
 * 信誉分，1-5从低到高
 */
export interface Score {
  /**
   * 信誉分，1-5从低到高
   */
  Star: number
}

/**
 * 用户信息
 */
export interface UserInfos {
  /**
   * 用户的手机号
   */
  PhoneNum: string
  /**
   * 用户的微信OpenID
   */
  Openid: string
  /**
   * 用户移动设备的客户端IP
   */
  IP?: string
  /**
   * 用户WiFi的BSSID
   */
  WiFiBssid?: string
  /**
   * 用户Android设备的IMEI
   */
  IMEI?: string
  /**
   * 用户Android设备的OAID
   */
  OAID?: string
  /**
   * 用户iOS设备的IDFA
   */
  IDFA?: string
}

/**
 * DescribeStockEstimation请求参数结构体
 */
export interface DescribeStockEstimationRequest {
  /**
   * 用户信息
   */
  ServiceParams: UserInfos
}

/**
 * DescribeNewUserAcquisition返回参数结构体
 */
export interface DescribeNewUserAcquisitionResponse {
  /**
   * 用户信誉分，1-5从低到高
   */
  ServiceRsp: Score
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
