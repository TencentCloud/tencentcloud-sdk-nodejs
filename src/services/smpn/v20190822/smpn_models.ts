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
 * DescribeSmpnChp请求参数结构体
 */
export interface DescribeSmpnChpRequest {
  /**
   * 客户用于计费的资源Id
   */
  ResourceId: string

  /**
   * 终端骚扰保护请求
   */
  RequestData: CHPRequest
}

/**
 * 企业号码认证请求
 */
export interface EPARequest {
  /**
   * 电话号码
   */
  PhoneNumber: string

  /**
   * 黄页名称
   */
  Name: string
}

/**
 * 号码营销监控请求
 */
export interface MHMRequest {
  /**
   * 电话号码
   */
  PhoneNumber: string
}

/**
 * 号码恶意标记等级请求
 */
export interface MRLRequest {
  /**
   * 电话号码
   */
  PhoneNumber: string
}

/**
 * CreateSmpnEpa返回参数结构体
 */
export interface CreateSmpnEpaResponse {
  /**
   * 业号码认证回应内容
   */
  ResponseData?: EPAResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmpnFnr返回参数结构体
 */
export interface DescribeSmpnFnrResponse {
  /**
   * 虚假号码识别回应内容
   */
  ResponseData?: FNRResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmpnMhm返回参数结构体
 */
export interface DescribeSmpnMhmResponse {
  /**
   * 号码营销监控回应内容
   */
  ResponseData?: MHMResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmpnFnr请求参数结构体
 */
export interface DescribeSmpnFnrRequest {
  /**
   * 虚假号码识别请求内容
   */
  RequestData: FNRRequest

  /**
   * 用于计费的资源ID
   */
  ResourceId: string
}

/**
 * DescribeSmpnMrl请求参数结构体
 */
export interface DescribeSmpnMrlRequest {
  /**
   * 恶意标记等级请求内容
   */
  RequestData: MRLRequest

  /**
   * 用于计费的资源ID
   */
  ResourceId: string
}

/**
 * 终端骚扰保护请求内容
 */
export interface CHPRequest {
  /**
   * 电话号码
   */
  PhoneNumber: string
}

/**
 * 号码恶意标记等级
 */
export interface MRLResponse {
  /**
   * 骚扰电话恶意标记等级
   */
  DisturbLevel: number

  /**
   * 房产中介恶意标记等级
   */
  HouseAgentLevel: number

  /**
   * 保险理财恶意标记等级
   */
  InsuranceLevel: number

  /**
   * 广告推销恶意标记等级
   */
  SalesLevel: number

  /**
   * 诈骗电话恶意标记等级
   */
  CheatLevel: number
}

/**
 * DescribeSmpnMrl返回参数结构体
 */
export interface DescribeSmpnMrlResponse {
  /**
   * 恶意标记等级回应内容
   */
  ResponseData?: MRLResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmpnMhm请求参数结构体
 */
export interface DescribeSmpnMhmRequest {
  /**
   * 号码营销监控请求内容
   */
  RequestData: MHMRequest

  /**
   * 用于计费的资源ID
   */
  ResourceId: string
}

/**
 * 号码营销监控回应
 */
export interface MHMResponse {
  /**
      * 标记类型
 0: 无标记
 50:骚扰电话
 51:房产中介
 52:保险理财
 53:广告推销
 54:诈骗电话
 55:快递电话
 56:出租车专车
      */
  TagType: number

  /**
   * 标记次数
   */
  TagCount: number
}

/**
 * CreateSmpnEpa请求参数结构体
 */
export interface CreateSmpnEpaRequest {
  /**
   * 企业号码认证请求内容
   */
  RequestData: EPARequest

  /**
   * 用于计费的资源ID
   */
  ResourceId: string
}

/**
 * 企业号码认证回应
 */
export interface EPAResponse {
  /**
   * 0成功 其他失败
   */
  RetCode: number
}

/**
 * 虚假号码识别回应
 */
export interface FNRResponse {
  /**
   * 虚假号码描述
   */
  Status: number
}

/**
 * 终端骚扰保护
 */
export interface CHPResponse {
  /**
      * 标记类型
 0: 无标记
 50:骚扰电话
 51:房产中介
 52:保险理财
 53:广告推销
 54:诈骗电话
 55:快递电话
 56:出租车专车
      */
  TagType: number

  /**
   * 标记次数
   */
  TagCount: number
}

/**
 * DescribeSmpnChp返回参数结构体
 */
export interface DescribeSmpnChpResponse {
  /**
   * 终端骚扰保护回应
   */
  ResponseData?: CHPResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 虚假号码识别请求
 */
export interface FNRRequest {
  /**
   * 电话号码
   */
  PhoneNumber: string
}
