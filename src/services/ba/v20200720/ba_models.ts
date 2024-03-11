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
 * DescribeGetAuthInfo返回参数结构体
 */
export interface DescribeGetAuthInfoResponse {
  /**
   * 实名认证状态：0未实名，1已实名
   */
  IsTenPayMasked?: string
  /**
   * 实名认证类型：0个人，1企业
   */
  IsAuthenticated?: string
  /**
   * 认证类型，个人0，企业1
   */
  Type?: string
  /**
   * 大客户标识：
1004、1003、1002、1001

其余为普通的用户
   */
  Level?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncIcpOrderWebInfo返回参数结构体
 */
export interface SyncIcpOrderWebInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncIcpOrderWebInfo请求参数结构体
 */
export interface SyncIcpOrderWebInfoRequest {
  /**
   * 备案ICP订单号
   */
  IcpOrderId: string
  /**
   * 订单里的webId
   */
  SourceWebId: string
  /**
   * 订单里的webId 数组(如果传入的webIds含有 订单中不包含的webId，会自动跳过)
   */
  TargetWebIds: Array<string>
  /**
   * 网站信息字段名 数组
   */
  SyncFields: Array<string>
  /**
   * 是否先判断同步的网站负责人是否一致 (这里会判断 sitePersonName, sitePersonCerType,sitePersonCerNum三个字段完全一致)  默认:true. 非必要 不建议关闭修改该参数默认值
   */
  CheckSamePerson?: boolean
}

/**
 * CreateWeappQRUrl请求参数结构体
 */
export interface CreateWeappQRUrlRequest {
  /**
   * 代理角色临时密钥的Token
   */
  SessionKey: string
}

/**
 * CreateWeappQRUrl返回参数结构体
 */
export interface CreateWeappQRUrlResponse {
  /**
   * 渠道备案小程序二维码
   */
  Url?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGetAuthInfo请求参数结构体
 */
export type DescribeGetAuthInfoRequest = null
