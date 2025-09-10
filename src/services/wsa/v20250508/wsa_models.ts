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
   * 返回结果类型，0-自然检索结果(默认)，1-多模态VR结果，2-混合结果（多模态VR结果+自然检索结果）
   */
  Mode?: number
  /**
   * 指定域名站内搜索（用于过滤自然检索结果）
注意： mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效
   */
  Site?: string
  /**
   * 起始时间（用于过滤自然检索结果），精确到秒时间戳格式
注意： mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效
   */
  FromTime?: number
  /**
   * 结束时间（用于过滤自然检索结果），精确到秒时间戳格式
注意：mode=1模式下，参数无效；mode=0模式下，对所有结果生效；mode=2模式下，对输出的自然结果生效
   */
  ToTime?: number
  /**
   * cnt=10/20/30/40/50，最多可支持返回50条搜索结果，**仅限尊享版使用**
   */
  Cnt?: number
  /**
   * Industry=gov/news/acad，对应党政机关、权威媒体、学术（英文），**仅限尊享版使用**
   */
  Industry?: string
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
   * 搜索结果页面详情，格式为json字符串。
title：结果标题
date：内容发布时间
url：内容发布源url
passage：标准摘要
content：动态摘要 （尊享版字段）
site：网站名称，部分不知名站点结果可能为空
score：相关性得分，取值0～1，越靠近1表示越相关
images：图片列表
favicon：网站图标链接，部分不知名站点结果可能为空
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
