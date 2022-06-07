/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CodeBatch,
  DeleteProductRequest,
  ModifyCodeBatchRequest,
  CreateCodeBatchResponse,
  DescribeProductByIdRequest,
  ModifyTraceDataRanksRequest,
  CreateTraceCodesResponse,
  DescribeTraceCodesResponse,
  DeleteTraceDataRequest,
  ModifyMerchantRequest,
  ModifyProductResponse,
  ModifyTraceDataRequest,
  CreateMerchantResponse,
  DescribeMerchantByIdRequest,
  ModifyTraceDataRanksResponse,
  Merchant,
  CreateTraceCodesRequest,
  DeleteProductResponse,
  DescribeCodeBatchsRequest,
  DescribeProductsRequest,
  DescribeCodeBatchByIdResponse,
  TraceCode,
  DeleteTraceDataResponse,
  ModifyProductRequest,
  CreateCodePackResponse,
  DescribeMerchantsResponse,
  DescribeTraceDataListRequest,
  DescribeMerchantByIdResponse,
  ModifyMerchantResponse,
  DeleteMerchantResponse,
  DescribeCodesByPackResponse,
  DeleteCodeBatchResponse,
  DescribeTraceDataListResponse,
  CreateTraceChainRequest,
  TraceItem,
  DeleteCodeBatchRequest,
  Ext,
  DescribeMerchantsRequest,
  CodeItem,
  ModifyTraceCodeRequest,
  CreateProductResponse,
  CreateTraceDataResponse,
  CreateTraceDataRequest,
  CreateMerchantRequest,
  DescribeCodeBatchsResponse,
  DescribeCodeBatchByIdRequest,
  DescribeTraceCodeByIdResponse,
  DescribeCodePacksResponse,
  TraceData,
  DescribeProductByIdResponse,
  PackSpec,
  DescribeCodesByPackRequest,
  DescribeCodePacksRequest,
  DescribeProductsResponse,
  CreateProductRequest,
  CreateTraceChainResponse,
  DescribeTraceCodeByIdRequest,
  CreateCodePackRequest,
  CreateCodeBatchRequest,
  ModifyCodeBatchResponse,
  Product,
  DescribeTraceCodesRequest,
  ModifyTraceCodeResponse,
  ChainData,
  DeleteMerchantRequest,
  ModifyTraceDataResponse,
} from "./trp_models"

/**
 * trp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("trp.tencentcloudapi.com", "2021-05-15", clientConfig)
  }

  /**
   * 查询二维码信息
   */
  async DescribeTraceCodeById(
    req: DescribeTraceCodeByIdRequest,
    cb?: (error: string, rep: DescribeTraceCodeByIdResponse) => void
  ): Promise<DescribeTraceCodeByIdResponse> {
    return this.request("DescribeTraceCodeById", req, cb)
  }

  /**
   * 修改溯源信息的排序
   */
  async ModifyTraceDataRanks(
    req: ModifyTraceDataRanksRequest,
    cb?: (error: string, rep: ModifyTraceDataRanksResponse) => void
  ): Promise<ModifyTraceDataRanksResponse> {
    return this.request("ModifyTraceDataRanks", req, cb)
  }

  /**
   * 编辑商品
   */
  async ModifyProduct(
    req: ModifyProductRequest,
    cb?: (error: string, rep: ModifyProductResponse) => void
  ): Promise<ModifyProductResponse> {
    return this.request("ModifyProduct", req, cb)
  }

  /**
   * 查询批次信息
   */
  async DescribeCodeBatchById(
    req: DescribeCodeBatchByIdRequest,
    cb?: (error: string, rep: DescribeCodeBatchByIdResponse) => void
  ): Promise<DescribeCodeBatchByIdResponse> {
    return this.request("DescribeCodeBatchById", req, cb)
  }

  /**
   * 查询二维码列表
   */
  async DescribeTraceCodes(
    req: DescribeTraceCodesRequest,
    cb?: (error: string, rep: DescribeTraceCodesResponse) => void
  ): Promise<DescribeTraceCodesResponse> {
    return this.request("DescribeTraceCodes", req, cb)
  }

  /**
   * 查询码包的二维码列表，上限 3 万
   */
  async DescribeCodesByPack(
    req: DescribeCodesByPackRequest,
    cb?: (error: string, rep: DescribeCodesByPackResponse) => void
  ): Promise<DescribeCodesByPackResponse> {
    return this.request("DescribeCodesByPack", req, cb)
  }

  /**
   * 查询商户信息
   */
  async DescribeMerchantById(
    req: DescribeMerchantByIdRequest,
    cb?: (error: string, rep: DescribeMerchantByIdResponse) => void
  ): Promise<DescribeMerchantByIdResponse> {
    return this.request("DescribeMerchantById", req, cb)
  }

  /**
   * 新建商品
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
   * 查询商品列表
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 修改溯源信息
   */
  async ModifyTraceData(
    req: ModifyTraceDataRequest,
    cb?: (error: string, rep: ModifyTraceDataResponse) => void
  ): Promise<ModifyTraceDataResponse> {
    return this.request("ModifyTraceData", req, cb)
  }

  /**
   * 查询商品信息
   */
  async DescribeProductById(
    req: DescribeProductByIdRequest,
    cb?: (error: string, rep: DescribeProductByIdResponse) => void
  ): Promise<DescribeProductByIdResponse> {
    return this.request("DescribeProductById", req, cb)
  }

  /**
   * 批量导入二维码，只支持平台发的码
   */
  async CreateTraceCodes(
    req: CreateTraceCodesRequest,
    cb?: (error: string, rep: CreateTraceCodesResponse) => void
  ): Promise<CreateTraceCodesResponse> {
    return this.request("CreateTraceCodes", req, cb)
  }

  /**
   * 删除商品，如果商品被使用，则不可删除
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 上链溯源信息
   */
  async CreateTraceChain(
    req: CreateTraceChainRequest,
    cb?: (error: string, rep: CreateTraceChainResponse) => void
  ): Promise<CreateTraceChainResponse> {
    return this.request("CreateTraceChain", req, cb)
  }

  /**
   * 删除商户
   */
  async DeleteMerchant(
    req: DeleteMerchantRequest,
    cb?: (error: string, rep: DeleteMerchantResponse) => void
  ): Promise<DeleteMerchantResponse> {
    return this.request("DeleteMerchant", req, cb)
  }

  /**
   * 查询批次列表
   */
  async DescribeCodeBatchs(
    req: DescribeCodeBatchsRequest,
    cb?: (error: string, rep: DescribeCodeBatchsResponse) => void
  ): Promise<DescribeCodeBatchsResponse> {
    return this.request("DescribeCodeBatchs", req, cb)
  }

  /**
   * 编辑商户
   */
  async ModifyMerchant(
    req: ModifyMerchantRequest,
    cb?: (error: string, rep: ModifyMerchantResponse) => void
  ): Promise<ModifyMerchantResponse> {
    return this.request("ModifyMerchant", req, cb)
  }

  /**
   * 新增批次
   */
  async CreateCodeBatch(
    req: CreateCodeBatchRequest,
    cb?: (error: string, rep: CreateCodeBatchResponse) => void
  ): Promise<CreateCodeBatchResponse> {
    return this.request("CreateCodeBatch", req, cb)
  }

  /**
   * 删除批次
   */
  async DeleteCodeBatch(
    req: DeleteCodeBatchRequest,
    cb?: (error: string, rep: DeleteCodeBatchResponse) => void
  ): Promise<DeleteCodeBatchResponse> {
    return this.request("DeleteCodeBatch", req, cb)
  }

  /**
   * 查询溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
   */
  async DescribeTraceDataList(
    req: DescribeTraceDataListRequest,
    cb?: (error: string, rep: DescribeTraceDataListResponse) => void
  ): Promise<DescribeTraceDataListResponse> {
    return this.request("DescribeTraceDataList", req, cb)
  }

  /**
   * 新增溯源信息
   */
  async CreateTraceData(
    req: CreateTraceDataRequest,
    cb?: (error: string, rep: CreateTraceDataResponse) => void
  ): Promise<CreateTraceDataResponse> {
    return this.request("CreateTraceData", req, cb)
  }

  /**
   * 新建商户
   */
  async CreateMerchant(
    req: CreateMerchantRequest,
    cb?: (error: string, rep: CreateMerchantResponse) => void
  ): Promise<CreateMerchantResponse> {
    return this.request("CreateMerchant", req, cb)
  }

  /**
   * 删除溯源信息，如果已经上链则不可删除
   */
  async DeleteTraceData(
    req: DeleteTraceDataRequest,
    cb?: (error: string, rep: DeleteTraceDataResponse) => void
  ): Promise<DeleteTraceDataResponse> {
    return this.request("DeleteTraceData", req, cb)
  }

  /**
   * 冻结或者激活二维码，所属的批次的冻结状态优先级大于单个二维码的状态，即如果批次是冻结的，那么该批次下二维码的状态都是冻结的
   */
  async ModifyTraceCode(
    req: ModifyTraceCodeRequest,
    cb?: (error: string, rep: ModifyTraceCodeResponse) => void
  ): Promise<ModifyTraceCodeResponse> {
    return this.request("ModifyTraceCode", req, cb)
  }

  /**
   * 查询码包列表
   */
  async DescribeCodePacks(
    req: DescribeCodePacksRequest,
    cb?: (error: string, rep: DescribeCodePacksResponse) => void
  ): Promise<DescribeCodePacksResponse> {
    return this.request("DescribeCodePacks", req, cb)
  }

  /**
   * 修改批次
   */
  async ModifyCodeBatch(
    req: ModifyCodeBatchRequest,
    cb?: (error: string, rep: ModifyCodeBatchResponse) => void
  ): Promise<ModifyCodeBatchResponse> {
    return this.request("ModifyCodeBatch", req, cb)
  }

  /**
   * 查询商户列表
   */
  async DescribeMerchants(
    req: DescribeMerchantsRequest,
    cb?: (error: string, rep: DescribeMerchantsResponse) => void
  ): Promise<DescribeMerchantsResponse> {
    return this.request("DescribeMerchants", req, cb)
  }

  /**
   * 生成码包
   */
  async CreateCodePack(
    req: CreateCodePackRequest,
    cb?: (error: string, rep: CreateCodePackResponse) => void
  ): Promise<CreateCodePackResponse> {
    return this.request("CreateCodePack", req, cb)
  }
}
