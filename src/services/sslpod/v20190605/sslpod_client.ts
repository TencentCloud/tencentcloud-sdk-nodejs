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
  RefreshDomainResponse,
  DeleteDomainRequest,
  DescribeNoticeInfoRequest,
  ModifyDomainTagsResponse,
  DescribeDomainCertsRequest,
  RefreshDomainRequest,
  ResolveDomainRequest,
  DescribeDomains,
  DashboardResult,
  DescribeNoticeInfoResponse,
  ChartNameValue,
  CreateDomainRequest,
  ResolveDomainResponse,
  ModifyDomainTagsRequest,
  CertInfo,
  DescribeDashboardResponse,
  DescribeDomainTagsResponse,
  ChartHistogram,
  LimitInfo,
  DescribeDashboardRequest,
  DescribeDomainsResponse,
  NoticeInfoResult,
  DescribeDomainCertsResponse,
  DomainSiteInfo,
  DeleteDomainResponse,
  CreateDomainResponse,
  DescribeDomainTagsRequest,
  DescribeDomainsRequest,
} from "./sslpod_models"

/**
 * sslpod client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("sslpod.tencentcloudapi.com", "2019-06-05", clientConfig)
  }

  /**
   * 获取通知额度信息
   */
  async DescribeNoticeInfo(
    req?: DescribeNoticeInfoRequest,
    cb?: (error: string, rep: DescribeNoticeInfoResponse) => void
  ): Promise<DescribeNoticeInfoResponse> {
    return this.request("DescribeNoticeInfo", req, cb)
  }

  /**
   * 强制重新检测域名
   */
  async RefreshDomain(
    req: RefreshDomainRequest,
    cb?: (error: string, rep: RefreshDomainResponse) => void
  ): Promise<RefreshDomainResponse> {
    return this.request("RefreshDomain", req, cb)
  }

  /**
   * 修改域名tag
   */
  async ModifyDomainTags(
    req: ModifyDomainTagsRequest,
    cb?: (error: string, rep: ModifyDomainTagsResponse) => void
  ): Promise<ModifyDomainTagsResponse> {
    return this.request("ModifyDomainTags", req, cb)
  }

  /**
   * 获取账号下所有tag
   */
  async DescribeDomainTags(
    req?: DescribeDomainTagsRequest,
    cb?: (error: string, rep: DescribeDomainTagsResponse) => void
  ): Promise<DescribeDomainTagsResponse> {
    return this.request("DescribeDomainTags", req, cb)
  }

  /**
   * 获取域名关联证书
   */
  async DescribeDomainCerts(
    req: DescribeDomainCertsRequest,
    cb?: (error: string, rep: DescribeDomainCertsResponse) => void
  ): Promise<DescribeDomainCertsResponse> {
    return this.request("DescribeDomainCerts", req, cb)
  }

  /**
   * 获取仪表盘数据
   */
  async DescribeDashboard(
    req?: DescribeDashboardRequest,
    cb?: (error: string, rep: DescribeDashboardResponse) => void
  ): Promise<DescribeDashboardResponse> {
    return this.request("DescribeDashboard", req, cb)
  }

  /**
   * 通过searchType搜索已经添加的域名
   */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
   * 通过域名ID删除监控的域名
   */
  async DeleteDomain(
    req: DeleteDomainRequest,
    cb?: (error: string, rep: DeleteDomainResponse) => void
  ): Promise<DeleteDomainResponse> {
    return this.request("DeleteDomain", req, cb)
  }

  /**
   * 通过域名端口添加监控
   */
  async CreateDomain(
    req: CreateDomainRequest,
    cb?: (error: string, rep: CreateDomainResponse) => void
  ): Promise<CreateDomainResponse> {
    return this.request("CreateDomain", req, cb)
  }

  /**
   * 解析域名获得多个IP地址
   */
  async ResolveDomain(
    req: ResolveDomainRequest,
    cb?: (error: string, rep: ResolveDomainResponse) => void
  ): Promise<ResolveDomainResponse> {
    return this.request("ResolveDomain", req, cb)
  }
}
