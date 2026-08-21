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
 * 搜索文档结果
 */
export interface SearchDocumentItem {
  /**
   * <p>文档URL</p>
   */
  Url?: string
  /**
   * <p>文档标题</p>
   */
  Title?: string
  /**
   * <p>产品名称</p>
   */
  ProductName?: string
  /**
   * <p>文档片段</p>
   */
  Snippet?: string
}

/**
 * SearchDocuments返回参数结构体
 */
export interface SearchDocumentsResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>文档列表</p>
   */
  Documents?: Array<SearchDocumentItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchDocuments请求参数结构体
 */
export interface SearchDocumentsRequest {
  /**
   * <p>搜索关键词</p>
   */
  Query: string
  /**
   * <p>页码</p><p>取值范围：[1, 99]</p>
   */
  Page: number
  /**
   * <p>每页条数</p><p>取值范围：[1, 20]</p>
   */
  PageSize: number
  /**
   * <p>产品名称</p>
   */
  ProductName?: string
}
