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
  CheckDomainResponse,
  BatchStatus,
  DomainList,
  DescribeDomainPriceListRequest,
  DescribeDomainBaseInfoResponse,
  TemplateInfo,
  CreateDomainBatchRequest,
  CheckBatchStatusRequest,
  CheckBatchStatusResponse,
  DescribeTemplateListResponse,
  DescribeDomainBaseInfoRequest,
  DescribeTemplateListRequest,
  CreateDomainBatchResponse,
  DomainBaseInfo,
  PriceInfo,
  DescribeDomainNameListRequest,
  DescribeDomainNameListResponse,
  ContactInfo,
  DescribeDomainPriceListResponse,
  CheckDomainRequest,
  CertificateInfo,
} from "./domain_models"

/**
 * domain client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("domain.tencentcloudapi.com", "2018-08-08", clientConfig)
  }

  /**
     * 本接口 (  DescribeDomainNameList ) 获取域名列表。

默认接口请求频率限制：20次/秒。

     */
  async DescribeDomainNameList(
    req: DescribeDomainNameListRequest,
    cb?: (error: string, rep: DescribeDomainNameListResponse) => void
  ): Promise<DescribeDomainNameListResponse> {
    return this.request("DescribeDomainNameList", req, cb)
  }

  /**
     * 本接口 ( CreateDomainBatch ) 用于批量注册域名 。

默认接口请求频率限制：20次/秒。
     */
  async CreateDomainBatch(
    req: CreateDomainBatchRequest,
    cb?: (error: string, rep: CreateDomainBatchResponse) => void
  ): Promise<CreateDomainBatchResponse> {
    return this.request("CreateDomainBatch", req, cb)
  }

  /**
     * 本接口 (  DescribeDomainBaseInfo) 获取域名基础信息。

默认接口请求频率限制：20次/秒。

     */
  async DescribeDomainBaseInfo(
    req: DescribeDomainBaseInfoRequest,
    cb?: (error: string, rep: DescribeDomainBaseInfoResponse) => void
  ): Promise<DescribeDomainBaseInfoResponse> {
    return this.request("DescribeDomainBaseInfo", req, cb)
  }

  /**
     * 本接口 (DescribeTemplateList) 用于获取模板列表。

默认接口请求频率限制：20次/秒。

     */
  async DescribeTemplateList(
    req: DescribeTemplateListRequest,
    cb?: (error: string, rep: DescribeTemplateListResponse) => void
  ): Promise<DescribeTemplateListResponse> {
    return this.request("DescribeTemplateList", req, cb)
  }

  /**
   * 按照域名后缀获取对应的价格列表
   */
  async DescribeDomainPriceList(
    req: DescribeDomainPriceListRequest,
    cb?: (error: string, rep: DescribeDomainPriceListResponse) => void
  ): Promise<DescribeDomainPriceListResponse> {
    return this.request("DescribeDomainPriceList", req, cb)
  }

  /**
     * 本接口 ( CheckBatchStatus ) 用于检查批量任务状态 。

默认接口请求频率限制：20次/秒。
     */
  async CheckBatchStatus(
    req: CheckBatchStatusRequest,
    cb?: (error: string, rep: CheckBatchStatusResponse) => void
  ): Promise<CheckBatchStatusResponse> {
    return this.request("CheckBatchStatus", req, cb)
  }

  /**
   * 检查域名是否可以注册。
   */
  async CheckDomain(
    req: CheckDomainRequest,
    cb?: (error: string, rep: CheckDomainResponse) => void
  ): Promise<CheckDomainResponse> {
    return this.request("CheckDomain", req, cb)
  }
}
