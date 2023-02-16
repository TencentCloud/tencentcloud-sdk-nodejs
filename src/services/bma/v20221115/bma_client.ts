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
  CreateBPFakeAPPResponse,
  DeleteBPWhiteListResponse,
  DescribeBPBrandsResponse,
  DescribeBPBrandsRequest,
  CreateBPBrandRequest,
  DescribeBPFakeURLsRequest,
  FakeAPPData,
  WhiteListData,
  TrademarkData,
  DescribeBPFakeURLsResponse,
  CreateBPFakeURLRequest,
  CreateBPFakeAPPListResponse,
  DescribeBPWhiteListsResponse,
  CreateBPFakeAPPListRequest,
  Filter,
  CreateBPWhiteListResponse,
  ServiceData,
  FakeURLData,
  DeleteBPWhiteListRequest,
  DescribeBPWhiteListsRequest,
  CreateBPFakeURLsResponse,
  DescribeBPFakeAPPListRequest,
  CreateBPFakeAPPRequest,
  BrandData,
  CreateBPBrandResponse,
  CreateBPFakeURLResponse,
  CreateBPWhiteListRequest,
  CreateBPFakeURLsRequest,
  DescribeBPFakeAPPListResponse,
} from "./bma_models"

/**
 * bma client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bma.tencentcloudapi.com", "2022-11-15", clientConfig)
  }

  /**
   * 查询白名单列表
   */
  async DescribeBPWhiteLists(
    req: DescribeBPWhiteListsRequest,
    cb?: (error: string, rep: DescribeBPWhiteListsResponse) => void
  ): Promise<DescribeBPWhiteListsResponse> {
    return this.request("DescribeBPWhiteLists", req, cb)
  }

  /**
   * 添加白名单
   */
  async CreateBPWhiteList(
    req: CreateBPWhiteListRequest,
    cb?: (error: string, rep: CreateBPWhiteListResponse) => void
  ): Promise<CreateBPWhiteListResponse> {
    return this.request("CreateBPWhiteList", req, cb)
  }

  /**
   * 仿冒应用举报
   */
  async CreateBPFakeAPP(
    req: CreateBPFakeAPPRequest,
    cb?: (error: string, rep: CreateBPFakeAPPResponse) => void
  ): Promise<CreateBPFakeAPPResponse> {
    return this.request("CreateBPFakeAPP", req, cb)
  }

  /**
   * 删除白名单
   */
  async DeleteBPWhiteList(
    req: DeleteBPWhiteListRequest,
    cb?: (error: string, rep: DeleteBPWhiteListResponse) => void
  ): Promise<DeleteBPWhiteListResponse> {
    return this.request("DeleteBPWhiteList", req, cb)
  }

  /**
   * 批量仿冒网址举报
   */
  async CreateBPFakeURLs(
    req: CreateBPFakeURLsRequest,
    cb?: (error: string, rep: CreateBPFakeURLsResponse) => void
  ): Promise<CreateBPFakeURLsResponse> {
    return this.request("CreateBPFakeURLs", req, cb)
  }

  /**
   * 添加品牌
   */
  async CreateBPBrand(
    req: CreateBPBrandRequest,
    cb?: (error: string, rep: CreateBPBrandResponse) => void
  ): Promise<CreateBPBrandResponse> {
    return this.request("CreateBPBrand", req, cb)
  }

  /**
   * 查询品牌列表
   */
  async DescribeBPBrands(
    req?: DescribeBPBrandsRequest,
    cb?: (error: string, rep: DescribeBPBrandsResponse) => void
  ): Promise<DescribeBPBrandsResponse> {
    return this.request("DescribeBPBrands", req, cb)
  }

  /**
   * 批量仿冒应用举报
   */
  async CreateBPFakeAPPList(
    req: CreateBPFakeAPPListRequest,
    cb?: (error: string, rep: CreateBPFakeAPPListResponse) => void
  ): Promise<CreateBPFakeAPPListResponse> {
    return this.request("CreateBPFakeAPPList", req, cb)
  }

  /**
   * 查询仿冒应用列表
   */
  async DescribeBPFakeAPPList(
    req: DescribeBPFakeAPPListRequest,
    cb?: (error: string, rep: DescribeBPFakeAPPListResponse) => void
  ): Promise<DescribeBPFakeAPPListResponse> {
    return this.request("DescribeBPFakeAPPList", req, cb)
  }

  /**
   * 查询仿冒网址列表
   */
  async DescribeBPFakeURLs(
    req: DescribeBPFakeURLsRequest,
    cb?: (error: string, rep: DescribeBPFakeURLsResponse) => void
  ): Promise<DescribeBPFakeURLsResponse> {
    return this.request("DescribeBPFakeURLs", req, cb)
  }

  /**
   * 仿冒网址举报
   */
  async CreateBPFakeURL(
    req: CreateBPFakeURLRequest,
    cb?: (error: string, rep: CreateBPFakeURLResponse) => void
  ): Promise<CreateBPFakeURLResponse> {
    return this.request("CreateBPFakeURL", req, cb)
  }
}
