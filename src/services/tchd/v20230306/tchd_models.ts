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
 * 事件详情信息，包含：产品名称、地域名称、事件开始时间、事件结束时间、事件当前状态；
 */
export interface EventDetail {
  /**
   * 产品ID
   */
  ProductId?: string
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 地域ID，非区域性地域返回non-regional
   */
  RegionId?: string
  /**
   * 地域名称
   */
  RegionName?: string
  /**
   * 事件开始时间
   */
  StartTime?: string
  /**
   * 事件结束时间，当事件正在发生还未结束时，结束时间返回空
   */
  EndTime?: string
  /**
   * 事件当前状态：提示、异常、正常
   */
  CurrentStatus?: string
}

/**
 * DescribeEvents返回参数结构体
 */
export interface DescribeEventsResponse {
  /**
   * 事件详情列表
   */
  Data?: ProductEventList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEvents请求参数结构体
 */
export interface DescribeEventsRequest {
  /**
   * 事件的发生日期
   */
  EventDate: string
  /**
   * 1. 不指定产品列表时将查询所有产品。
2. 产品ID示例：cvm、lb、cdb、cdn、crs
   */
  ProductIds?: Array<string>
  /**
   * 1. 不指定地域列表时将查询所有地域。
2. 查询非区域性产品事件时，地域ID指定为：non-regional
3. 其他地域ID取值请参考：https://cloud.tencent.com/document/api/213/15692
   */
  RegionIds?: Array<string>
}

/**
 * 产品可用性事件详情列表
 */
export interface ProductEventList {
  /**
   * 事件详情列表
   */
  EventList?: Array<EventDetail>
}
