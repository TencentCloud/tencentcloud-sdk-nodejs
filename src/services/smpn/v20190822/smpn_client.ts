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
  DescribeSmpnChpRequest,
  EPARequest,
  MHMRequest,
  MRLRequest,
  CreateSmpnEpaResponse,
  DescribeSmpnFnrResponse,
  DescribeSmpnMhmResponse,
  DescribeSmpnFnrRequest,
  DescribeSmpnMrlRequest,
  CHPRequest,
  MRLResponse,
  DescribeSmpnMrlResponse,
  DescribeSmpnMhmRequest,
  MHMResponse,
  CreateSmpnEpaRequest,
  EPAResponse,
  FNRResponse,
  CHPResponse,
  DescribeSmpnChpResponse,
  FNRRequest,
} from "./smpn_models"

/**
 * smpn client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("smpn.tencentcloudapi.com", "2019-08-22", clientConfig)
  }

  /**
   * 号码营销监控
   */
  async DescribeSmpnMhm(
    req: DescribeSmpnMhmRequest,
    cb?: (error: string, rep: DescribeSmpnMhmResponse) => void
  ): Promise<DescribeSmpnMhmResponse> {
    return this.request("DescribeSmpnMhm", req, cb)
  }

  /**
   * 虚假号码识别
   */
  async DescribeSmpnFnr(
    req: DescribeSmpnFnrRequest,
    cb?: (error: string, rep: DescribeSmpnFnrResponse) => void
  ): Promise<DescribeSmpnFnrResponse> {
    return this.request("DescribeSmpnFnr", req, cb)
  }

  /**
   * 企业号码认证
   */
  async CreateSmpnEpa(
    req: CreateSmpnEpaRequest,
    cb?: (error: string, rep: CreateSmpnEpaResponse) => void
  ): Promise<CreateSmpnEpaResponse> {
    return this.request("CreateSmpnEpa", req, cb)
  }

  /**
   * 查询号码的标记和标记次数
   */
  async DescribeSmpnChp(
    req: DescribeSmpnChpRequest,
    cb?: (error: string, rep: DescribeSmpnChpResponse) => void
  ): Promise<DescribeSmpnChpResponse> {
    return this.request("DescribeSmpnChp", req, cb)
  }

  /**
   * 查询号码恶意标记等级
   */
  async DescribeSmpnMrl(
    req: DescribeSmpnMrlRequest,
    cb?: (error: string, rep: DescribeSmpnMrlResponse) => void
  ): Promise<DescribeSmpnMrlResponse> {
    return this.request("DescribeSmpnMrl", req, cb)
  }
}
