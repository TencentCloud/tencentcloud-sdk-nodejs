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

/**
 * CreateGlobalAccelerator返回参数结构体
 */
export interface CreateGlobalAcceleratorResponse {
  /**
   * <p>任务ID。</p>
   */
  TaskId?: string
  /**
   * <p>全球加速实例ID。</p>
   */
  GlobalAcceleratorId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * CreateGlobalAccelerator请求参数结构体
 */
export interface CreateGlobalAcceleratorRequest {
  /**
   * <p>名称，最大长度不能超过60个字节。</p>
   */
  Name: string
  /**
   * <p>计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。当前仅支持后付费。</p>
   */
  InstanceChargeType?: string
  /**
   * <p>描述信息，最大长度不能超过100个字节。</p>
   */
  Description?: string
  /**
   * <p>跨境类型；HighQuality：精品BGP-IP跨境；Unicom：联通专线跨境。</p>
   */
  CrossBorderType?: string
  /**
   * <p>此Flag代表签署跨境服务承诺书。当使用跨境服务时候，此字段必传。True：代表签署。</p>
   */
  CrossBorderPromiseFlag?: boolean
  /**
   * <p>标签信息</p>
   */
  Tags?: Array<Tag>
}

/**
 * DescribeCrossBorderSettlement请求参数结构体
 */
export interface DescribeCrossBorderSettlementRequest {
  /**
   * 全球加速实例ID。
   */
  GlobalAcceleratorId: string
  /**
   * 加速地域。
   */
  AccelerateRegion: string
  /**
   * 终端节点组地域。
   */
  EndpointGroupRegion: string
  /**
   * 账单年月时间。
   */
  SettlementMonth: number
}

/**
 * DescribeCrossBorderSettlement返回参数结构体
 */
export interface DescribeCrossBorderSettlementResponse {
  /**
   * 流量用量，单位是GB；精度为保留小数点6位。
   */
  Traffic?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
