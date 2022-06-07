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
 * 批次
 */
export interface CodeBatch {
  /**
      * 批次号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchId: string

  /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CorpId: number

  /**
      * 码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchCode: string

  /**
      * 码数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeCnt: number

  /**
      * 所属商户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantId: string

  /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
      * 批次类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchType: number

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 微信模板
注意：此字段可能返回 null，表示取不到有效值。
      */
  MpTpl: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 所属商户名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantName: string

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 0
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ext: Ext

  /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TplName?: string
}

/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
  /**
   * 商品ID
   */
  ProductId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyCodeBatch请求参数结构体
 */
export interface ModifyCodeBatchRequest {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 状态 0: 未激活 1: 已激活 -1: 已冻结
   */
  Status?: number

  /**
   * 模板ID
   */
  MpTpl?: string
}

/**
 * CreateCodeBatch返回参数结构体
 */
export interface CreateCodeBatchResponse {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductById请求参数结构体
 */
export interface DescribeProductByIdRequest {
  /**
   * 商品ID
   */
  ProductId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyTraceDataRanks请求参数结构体
 */
export interface ModifyTraceDataRanksRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 批次ID
   */
  BatchId?: string

  /**
   * 生产任务ID
   */
  TaskId?: string

  /**
   * 溯源ID
   */
  TraceIds?: Array<string>
}

/**
 * CreateTraceCodes返回参数结构体
 */
export interface CreateTraceCodesResponse {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 导入成功码数量
   */
  ActiveCnt: number

  /**
   * 批次码数量
   */
  CodeCnt: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTraceCodes返回参数结构体
 */
export interface DescribeTraceCodesResponse {
  /**
      * 标识列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceCodes: Array<TraceCode>

  /**
      * 条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTraceData请求参数结构体
 */
export interface DeleteTraceDataRequest {
  /**
   * 溯源ID
   */
  TraceId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyMerchant请求参数结构体
 */
export interface ModifyMerchantRequest {
  /**
   * 商户名称
   */
  Name: string

  /**
   * 商户标识码
   */
  MerchantId: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyProduct返回参数结构体
 */
export interface ModifyProductResponse {
  /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTraceData请求参数结构体
 */
export interface ModifyTraceDataRequest {
  /**
   * 溯源ID
   */
  TraceId?: string

  /**
   * 批次ID
   */
  BatchId?: string

  /**
   * 生产溯源任务ID
   */
  TaskId?: string

  /**
   * 溯源信息
   */
  TraceItems?: Array<TraceItem>

  /**
   * 溯源阶段名称
   */
  PhaseName?: string

  /**
   * [无效] 类型
   */
  Type?: number

  /**
   * [无效] 溯源码
   */
  Code?: string

  /**
   * [无效] 排序
   */
  Rank?: number

  /**
   * [无效] 溯源阶段 0:商品 1:通用 2:物流
   */
  Phase?: number

  /**
   * [无效] 溯源时间
   */
  TraceTime?: string

  /**
   * [无效] 创建时间
   */
  CreateTime?: string

  /**
   * [无效] 上链状态
   */
  ChainStatus?: number

  /**
   * [无效] 上链时间
   */
  ChainTime?: string

  /**
   * [无效] 上链数据
   */
  ChainData?: ChainData

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * [无效] 溯源状态
   */
  Status?: number
}

/**
 * CreateMerchant返回参数结构体
 */
export interface CreateMerchantResponse {
  /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMerchantById请求参数结构体
 */
export interface DescribeMerchantByIdRequest {
  /**
   * 商户标识码
   */
  MerchantId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyTraceDataRanks返回参数结构体
 */
export interface ModifyTraceDataRanksResponse {
  /**
      * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 商户信息
 */
export interface Merchant {
  /**
   * 商户标识码
   */
  MerchantId: string

  /**
   * 企业id
   */
  CorpId: number

  /**
   * 商户名称
   */
  Name: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 商户码规则
   */
  CodeRule: string
}

/**
 * CreateTraceCodes请求参数结构体
 */
export interface CreateTraceCodesRequest {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 码
   */
  Codes?: Array<CodeItem>
}

/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
  /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodeBatchs请求参数结构体
 */
export interface DescribeCodeBatchsRequest {
  /**
   * 查询商户ID
   */
  MerchantId?: string

  /**
   * 查询商品ID
   */
  ProductId?: string

  /**
   * 查询关键字
   */
  Keyword?: string

  /**
   * 条数
   */
  PageSize?: number

  /**
   * 页数
   */
  PageNumber?: number

  /**
   * 批次类型 0:溯源 1:营销
   */
  BatchType?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
  /**
   * 商品名称
   */
  Name?: string

  /**
   * 条数
   */
  PageSize?: number

  /**
   * 页数
   */
  PageNumber?: number

  /**
   * 商品ID
   */
  MerchantId?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * DescribeCodeBatchById返回参数结构体
 */
export interface DescribeCodeBatchByIdResponse {
  /**
   * 批次
   */
  CodeBatch: CodeBatch

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 溯源码
 */
export interface TraceCode {
  /**
   * 码
   */
  Code: string

  /**
   * 企业ID
   */
  CorpId: number

  /**
   * 包ID
   */
  PackId: string

  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 所属商户ID
   */
  MerchantId: string

  /**
   * 产品ID
   */
  ProductId: string

  /**
   * 状态
   */
  Status: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  UpdateTime: string

  /**
   * 商户名称
   */
  MerchantName: string

  /**
   * 产品名称
   */
  ProductName: string
}

/**
 * DeleteTraceData返回参数结构体
 */
export interface DeleteTraceDataResponse {
  /**
      * 溯源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProduct请求参数结构体
 */
export interface ModifyProductRequest {
  /**
   * 商品名称
   */
  Name: string

  /**
   * 商品ID
   */
  ProductId: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 商品规格
   */
  Specification?: string

  /**
   * 商品图片
   */
  Logo?: Array<string>

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 预留字段
   */
  Ext?: Ext
}

/**
 * CreateCodePack返回参数结构体
 */
export interface CreateCodePackResponse {
  /**
   * 码包ID
   */
  PackId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMerchants返回参数结构体
 */
export interface DescribeMerchantsResponse {
  /**
      * 商户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Merchants: Array<Merchant>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTraceDataList请求参数结构体
 */
export interface DescribeTraceDataListRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 批次ID
   */
  BatchId?: string

  /**
   * 任务ID 用于外部溯源
   */
  TaskId?: string

  /**
   * 页数
   */
  PageNumber?: number

  /**
   * 二维码
   */
  Code?: string

  /**
   * 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源
   */
  Phase?: number

  /**
   * 数量
   */
  PageSize?: number
}

/**
 * DescribeMerchantById返回参数结构体
 */
export interface DescribeMerchantByIdResponse {
  /**
      * 商户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Merchant: Merchant

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMerchant返回参数结构体
 */
export interface ModifyMerchantResponse {
  /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMerchant返回参数结构体
 */
export interface DeleteMerchantResponse {
  /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodesByPack返回参数结构体
 */
export interface DescribeCodesByPackResponse {
  /**
      * 码列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Codes: Array<CodeItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCodeBatch返回参数结构体
 */
export interface DeleteCodeBatchResponse {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTraceDataList返回参数结构体
 */
export interface DescribeTraceDataListResponse {
  /**
   * 数量
   */
  TotalCount: number

  /**
   * 无
   */
  TraceDataList: Array<TraceData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTraceChain请求参数结构体
 */
export interface CreateTraceChainRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 溯源ID
   */
  TraceId?: string
}

/**
 * 溯源数据
 */
export interface TraceItem {
  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 单个值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 只读
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReadOnly: boolean

  /**
      * 扫码展示
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hidden: boolean

  /**
      * 多个值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Values: Array<string>
}

/**
 * DeleteCodeBatch请求参数结构体
 */
export interface DeleteCodeBatchRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 批次ID
   */
  BatchId?: string
}

/**
 * 预留字段
 */
export type Ext = null

/**
 * DescribeMerchants请求参数结构体
 */
export interface DescribeMerchantsRequest {
  /**
   * 搜索商户名称
   */
  Name?: string

  /**
   * 条数
   */
  PageSize?: number

  /**
   * 页数
   */
  PageNumber?: number

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * 码类型
 */
export interface CodeItem {
  /**
   * 无
   */
  Code?: string
}

/**
 * ModifyTraceCode请求参数结构体
 */
export interface ModifyTraceCodeRequest {
  /**
   * 二维码
   */
  Code: string

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 状态 0: 冻结 1: 激活
   */
  Status?: number
}

/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
  /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTraceData返回参数结构体
 */
export interface CreateTraceDataResponse {
  /**
   * 溯源ID
   */
  TraceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTraceData请求参数结构体
 */
export interface CreateTraceDataRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 批次ID
   */
  BatchId?: string

  /**
   * 任务ID
   */
  TaskId?: string

  /**
   * 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源
   */
  Phase?: number

  /**
   * 溯源阶段名称
   */
  PhaseName?: string

  /**
   * [无效] 上链状态
   */
  ChainStatus?: number

  /**
   * [无效] 码类型 0: 批次, 1: 码, 2: 生产任务, 3: 物流信息
   */
  Type?: number

  /**
   * [无效] 溯源ID
   */
  TraceId?: string

  /**
   * 溯源信息
   */
  TraceItems?: Array<TraceItem>
}

/**
 * CreateMerchant请求参数结构体
 */
export interface CreateMerchantRequest {
  /**
   * 商户名称
   */
  Name: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * DescribeCodeBatchs返回参数结构体
 */
export interface DescribeCodeBatchsResponse {
  /**
      * 批次列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeBatchs: Array<CodeBatch>

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodeBatchById请求参数结构体
 */
export interface DescribeCodeBatchByIdRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 批次ID
   */
  BatchId?: string
}

/**
 * DescribeTraceCodeById返回参数结构体
 */
export interface DescribeTraceCodeByIdResponse {
  /**
   * 无
   */
  TraceCode: TraceCode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCodePacks返回参数结构体
 */
export interface DescribeCodePacksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 溯源数据
 */
export interface TraceData {
  /**
      * 溯源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceId: string

  /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CorpId: number

  /**
      * 0
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: number

  /**
      * 码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: string

  /**
      * 排序
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rank: number

  /**
      * 溯源阶段 0:商品 1:通用 2:物流
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phase: number

  /**
      * 环节名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhaseName: string

  /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceTime: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceItems: Array<TraceItem>

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 上链状态 0: 未上链 1: 上链中 2: 已上链 -1: 异常
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChainStatus: number

  /**
      * 上链时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChainTime: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChainData: ChainData
}

/**
 * DescribeProductById返回参数结构体
 */
export interface DescribeProductByIdResponse {
  /**
      * 商品信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Product: Product

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数组
 */
export interface PackSpec {
  /**
   * 层级
   */
  Level: number

  /**
   * 比例
   */
  Rate: number

  /**
   * 数量
   */
  Amount: number
}

/**
 * DescribeCodesByPack请求参数结构体
 */
export interface DescribeCodesByPackRequest {
  /**
   * 码包ID
   */
  PackId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * DescribeCodePacks请求参数结构体
 */
export interface DescribeCodePacksRequest {
  /**
   * 每页数量
   */
  PageSize?: number

  /**
   * 页数
   */
  PageNumber?: number

  /**
   * 查询关键字
   */
  Keyword?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
  /**
      * 商品列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Products: Array<Product>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
  /**
   * 商品名称
   */
  Name: string

  /**
   * 商户ID
   */
  MerchantId: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * 商户名称
   */
  MerchantName?: string

  /**
   * 商品规格
   */
  Specification?: string

  /**
   * 商品图片
   */
  Logo?: Array<string>

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 预留字段
   */
  Ext?: Ext
}

/**
 * CreateTraceChain返回参数结构体
 */
export interface CreateTraceChainResponse {
  /**
   * 溯源ID
   */
  TraceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTraceCodeById请求参数结构体
 */
export interface DescribeTraceCodeByIdRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 二维码
   */
  Code?: string
}

/**
 * CreateCodePack请求参数结构体
 */
export interface CreateCodePackRequest {
  /**
   * 商户ID
   */
  MerchantId: string

  /**
   * 码长度
   */
  CodeLength: number

  /**
   * 码类型 alphabet 字母, number 数字, mixin 混合
   */
  CodeType: string

  /**
   * 生码数量 普通码包时必填
   */
  Amount?: number

  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 码包类型 0: 普通码包 1: 层级码包
   */
  PackType?: number

  /**
   * 码包层级
   */
  PackLevel?: number

  /**
   * 码包规格
   */
  PackSpec?: Array<PackSpec>
}

/**
 * CreateCodeBatch请求参数结构体
 */
export interface CreateCodeBatchRequest {
  /**
   * 企业ID
   */
  CorpId?: number

  /**
   * 商户ID
   */
  MerchantId?: string

  /**
   * 产品ID
   */
  ProductId?: string

  /**
   * 批次类型 0:溯源 1:营销
   */
  BatchType?: number

  /**
   * 批次ID，系统自动生成
   */
  BatchId?: string

  /**
   * 备注
   */
  Remark?: string
}

/**
 * ModifyCodeBatch返回参数结构体
 */
export interface ModifyCodeBatchResponse {
  /**
   * 批次ID
   */
  BatchId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 商品信息
 */
export interface Product {
  /**
   * 商品id
   */
  ProductId: string

  /**
   * 企业id
   */
  CorpId: number

  /**
   * 商户标识码
   */
  MerchantId: string

  /**
   * 商品编号
   */
  ProductCode: string

  /**
   * 商品名称
   */
  Name: string

  /**
      * 商品规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Specification: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 商品图片
注意：此字段可能返回 null，表示取不到有效值。
      */
  Logo: Array<string>

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  UpdateTime: string

  /**
      * 预留字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ext: Ext

  /**
   * 商户名称
   */
  MerchantName: string
}

/**
 * DescribeTraceCodes请求参数结构体
 */
export interface DescribeTraceCodesRequest {
  /**
   * 搜索关键字 码标识，或者批次ID
   */
  Keyword?: string

  /**
   * 条数
   */
  PageNumber?: number

  /**
   * 页码
   */
  PageSize?: number

  /**
   * 批次ID，弃用
   */
  BatchId?: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyTraceCode返回参数结构体
 */
export interface ModifyTraceCodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 上链数据
 */
export interface ChainData {
  /**
      * 区块hash
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlockHash: string

  /**
      * 区块高度
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlockHeight: string

  /**
      * 区块时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlockTime: string
}

/**
 * DeleteMerchant请求参数结构体
 */
export interface DeleteMerchantRequest {
  /**
   * 商户标识码
   */
  MerchantId: string

  /**
   * 企业ID
   */
  CorpId?: number
}

/**
 * ModifyTraceData返回参数结构体
 */
export interface ModifyTraceDataResponse {
  /**
   * 溯源ID
   */
  TraceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
