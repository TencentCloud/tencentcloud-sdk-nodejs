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
  DescribeCRWorkInfoRequest,
  DescribeCRWorkInfoResponse,
  CreateCRRightRequest,
  CreateCRRightResponse,
  CreateCRBlockRequest,
  CreateCRBlockResponse,
  CreateCRCompanyVerifyResponse,
  CreateCRCompanyVerifyRequest,
} from "./bma_models"

/**
 * bma client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bma.tencentcloudapi.com", "2021-06-24", clientConfig)
  }

  /**
   * 查询作品基本信息
   */
  async DescribeCRWorkInfo(
    req: DescribeCRWorkInfoRequest,
    cb?: (error: string, rep: DescribeCRWorkInfoResponse) => void
  ): Promise<DescribeCRWorkInfoResponse> {
    return this.request("DescribeCRWorkInfo", req, cb)
  }

  /**
   * 版权保护-新建发函接口
   */
  async CreateCRRight(
    req: CreateCRRightRequest,
    cb?: (error: string, rep: CreateCRRightResponse) => void
  ): Promise<CreateCRRightResponse> {
    return this.request("CreateCRRight", req, cb)
  }

  /**
   * 版权保护-新建拦截接口
   */
  async CreateCRBlock(
    req: CreateCRBlockRequest,
    cb?: (error: string, rep: CreateCRBlockResponse) => void
  ): Promise<CreateCRBlockResponse> {
    return this.request("CreateCRBlock", req, cb)
  }

  /**
   * 品牌经营管家-版权保护模块企业认证接口
   */
  async CreateCRCompanyVerify(
    req: CreateCRCompanyVerifyRequest,
    cb?: (error: string, rep: CreateCRCompanyVerifyResponse) => void
  ): Promise<CreateCRCompanyVerifyResponse> {
    return this.request("CreateCRCompanyVerify", req, cb)
  }
}
