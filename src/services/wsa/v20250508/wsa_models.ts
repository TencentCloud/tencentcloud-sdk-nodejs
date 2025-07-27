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
 * SearchPro请求参数结构体
 */
export interface SearchProRequest {
  /**
   * 搜索词
   */
  Query: string
  /**
   * 返回结果类型，0-自然检索结果(默认)，1-垂类VR结果，2-混合结果（垂类VR结果+自然检索结果）
   */
  Mode?: number
  /**
   * 指定域名站内搜索（用于过滤自然检索结果）  注意：  mode=1模式下，参数无效 mode=0模式下对所有结果生效 mode=2模式下对输出的自然结果生效
   */
  Site?: string
  /**
   * 起始时间（用于过滤自然检索结果），精确到秒时间戳格式  注意：  mode=1模式下，参数无效 mode=0模式下对所有结果生效 mode=2模式下对输出的自然结果生效
   */
  FromTime?: number
  /**
   * 结束时间（用于过滤自然检索结果），精确到秒时间戳格式  注意：  mode=1模式下，参数无效 mode=0模式下对所有结果生效 mode=2模式下对输出的自然结果生效
   */
  ToTime?: number
}

/**
 * SearchPro返回参数结构体
 */
export interface SearchProResponse {
  /**
   * 原始查询语
   */
  Query?: string
  /**
   * 搜索结果页面
   */
  Pages?: Array<string>
  /**
   * 提示信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
