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
 * SearchByText返回参数结构体
 */
export interface SearchByTextResponse {
  /**
   * 原始查询词
   */
  Query?: string
  /**
   * 搜索结果图片列表，格式为json字符串。

- thumbnailUrl：缩略图地址。
- thumbnailWidth：缩略图宽度。
- thumbnailHeight：缩略图高度。
- origPicUrl：原图地址。
-  origPicWidth：原图宽度。
- siteUrl：站点地址，原图来源网页URL。
- siteName：站点名称。
- title：标题，原图标题或原图来源网页标题。
- date：内容发布时间。
   */
  Images?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchByText请求参数结构体
 */
export interface SearchByTextRequest {
  /**
   * 查询词
   */
  Query: string
}
