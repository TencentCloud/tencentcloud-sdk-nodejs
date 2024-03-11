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
 * 搜索结果
 */
export interface SearchResult {
  /**
   * 检索耗时，单位ms
   */
  CostTime: number
  /**
   * 搜索最多可以展示的结果数，多页
   */
  DisplayNum: number
  /**
   * 和检索请求中的echo相对应
   */
  Echo: string
  /**
   * 检索结果的估算篇数，由索引平台估算
   */
  EResultNum: number
  /**
   * 检索返回的当前页码结果数
   */
  ResultNum: number
  /**
   * 检索结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultList: Array<SearchResultItem>
  /**
   * 检索的分词结果，array类型，可包含多个
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegList: Array<SearchResultSeg>
}

/**
 * SearchResultSeg
 */
export interface SearchResultSeg {
  /**
   * 分词
   */
  SegStr: string
}

/**
 * 数据操作结果
 */
export interface DataManipulationResult {
  /**
   * 应用ID
   */
  AppId: number
  /**
   * 序号
   */
  Seq: number
  /**
   * 结果
   */
  TotalResult: string
  /**
   * 操作结果明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: Array<DataManipulationResultItem>
  /**
   * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorResult: string
}

/**
 * 搜索结果元素
 */
export interface SearchResultItem {
  /**
   * 动态摘要信息
   */
  DocAbs: string
  /**
   * 检索文档id
   */
  DocId: string
  /**
   * 原始文档信息
   */
  DocMeta: string
  /**
   * 精计算得分
   */
  L2Score: number
  /**
   * 文档级回传信息
   */
  SearchDebuginfo: string
}

/**
 * DataSearch返回参数结构体
 */
export interface DataSearchResponse {
  /**
   * 检索结果
   */
  Data?: SearchResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DataSearch请求参数结构体
 */
export interface DataSearchRequest {
  /**
   * 云搜的业务ID，用以表明当前数据请求的业务
   */
  ResourceId: number
  /**
   * 检索串
   */
  SearchQuery?: string
  /**
   * 当前页，从第0页开始计算
   */
  PageId?: number
  /**
   * 每页结果数
   */
  NumPerPage?: number
  /**
   * 当前检索号，用于定位问题，建议指定并且全局唯一
   */
  SearchId?: string
  /**
   * 请求编码，0表示utf8，1表示gbk，建议指定
   */
  QueryEncode?: number
  /**
   * 排序类型
   */
  RankType?: number
  /**
   * 数值过滤，结果中按属性过滤
   */
  NumFilter?: string
  /**
   * 分类过滤，导航类检索请求
   */
  ClFilter?: string
  /**
   * 检索用户相关字段
   */
  Extra?: string
  /**
   * 检索来源
   */
  SourceId?: number
  /**
   * 是否进行二次检索，0关闭，1打开
   */
  SecondSearch?: number
  /**
   * 指定返回最大篇数，无特殊原因不建议指定
   */
  MaxDocReturn?: number
  /**
   * 是否smartbox检索，0关闭，1打开
   */
  IsSmartbox?: number
  /**
   * 是否打开高红标亮，0关闭，1打开
   */
  EnableAbsHighlight?: number
  /**
   * 指定访问QC纠错业务ID
   */
  QcBid?: number
  /**
   * 按指定字段进行group by，只能对数值字段进行操作
   */
  GroupBy?: string
  /**
   * 按指定字段进行distinct，只能对数值字段进行操作
   */
  Distinct?: string
  /**
   * 高级排序参数，具体参见高级排序说明
   */
  L4RankExpression?: string
  /**
   * 高级排序参数，具体参见高级排序说明
   */
  MatchValue?: string
  /**
   * 经度信息
   */
  Longitude?: number
  /**
   * 纬度信息
   */
  Latitude?: number
  /**
   * 分类过滤并集
   */
  MultiFilter?: Array<string>
}

/**
 * 数据操作结果明细
 */
export interface DataManipulationResultItem {
  /**
   * 结果
   */
  Result: string
  /**
   * 文档ID
   */
  DocId: string
  /**
   * 错误码
   */
  Errno: number
}

/**
 * DataManipulation请求参数结构体
 */
export interface DataManipulationRequest {
  /**
   * 操作类型，add或del
   */
  OpType: string
  /**
   * 数据编码类型
   */
  Encoding: string
  /**
   * 数据
   */
  Contents: string
  /**
   * 应用Id
   */
  ResourceId: number
}

/**
 * DataManipulation返回参数结构体
 */
export interface DataManipulationResponse {
  /**
   * 数据操作结果
   */
  Data?: DataManipulationResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
