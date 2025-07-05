/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  MatchKBPURLListResponse,
  DescribeKBComponentVulnerabilityRequest,
  AffectedComponent,
  DescribeKBComponentVersionListRequest,
  ComponentVulnerabilityUnion,
  LicenseUnion,
  DescribeKBComponentVulnerabilityResponse,
  LicenseSummary,
  SearchKBComponentRequest,
  Qualifier,
  CVSSV3Info,
  Component,
  DescribeKBVulnerabilityResponse,
  DescribeKBLicenseResponse,
  ComponentVersion,
  MatchKBPURLListRequest,
  ComponentVersionInfo,
  VulnerabilityUnion,
  LicenseDetail,
  DescribeKBVulnerabilityRequest,
  VulnerabilityDetail,
  DescribeKBComponentResponse,
  DescribeKBComponentVersionListResponse,
  VulnerabilitySummary,
  ComponentTagFilter,
  DescribeKBLicenseRequest,
  CVSSV2Info,
  DescribeKBComponentRequest,
  PURL,
  SearchKBComponentResponse,
  ComponentVulnerabilitySummary,
  LicenseRestriction,
} from "./bsca_models"

/**
 * bsca client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bsca.tencentcloudapi.com", "2021-08-11", clientConfig)
  }

  /**
   * 根据输入的组件名、组件类型搜索相应的组件，返回符合条件的组件列表
   */
  async SearchKBComponent(
    req: SearchKBComponentRequest,
    cb?: (error: string, rep: SearchKBComponentResponse) => void
  ): Promise<SearchKBComponentResponse> {
    return this.request("SearchKBComponent", req, cb)
  }

  /**
   * 查询特定组件的版本列表
   */
  async DescribeKBComponentVersionList(
    req: DescribeKBComponentVersionListRequest,
    cb?: (error: string, rep: DescribeKBComponentVersionListResponse) => void
  ): Promise<DescribeKBComponentVersionListResponse> {
    return this.request("DescribeKBComponentVersionList", req, cb)
  }

  /**
   * 本接口(DescribeKBComponent)用于在知识库中查询开源组件信息。本接口根据用户输入的PURL在知识库中寻找对应的开源组件，其中Name为必填字段。
   */
  async DescribeKBComponent(
    req: DescribeKBComponentRequest,
    cb?: (error: string, rep: DescribeKBComponentResponse) => void
  ): Promise<DescribeKBComponentResponse> {
    return this.request("DescribeKBComponent", req, cb)
  }

  /**
   * 本接口(DescribeKBLicense)用于在知识库中查询许可证信息。
   */
  async DescribeKBLicense(
    req: DescribeKBLicenseRequest,
    cb?: (error: string, rep: DescribeKBLicenseResponse) => void
  ): Promise<DescribeKBLicenseResponse> {
    return this.request("DescribeKBLicense", req, cb)
  }

  /**
   * 本接口(MatchKBPURLList)用于在知识库中匹配与特征对应的开源组件列表。
   */
  async MatchKBPURLList(
    req: MatchKBPURLListRequest,
    cb?: (error: string, rep: MatchKBPURLListResponse) => void
  ): Promise<MatchKBPURLListResponse> {
    return this.request("MatchKBPURLList", req, cb)
  }

  /**
   * 本接口(DescribeKBComponentVulnerability)用于在知识库中查询开源组件的漏洞信息。
   */
  async DescribeKBComponentVulnerability(
    req: DescribeKBComponentVulnerabilityRequest,
    cb?: (error: string, rep: DescribeKBComponentVulnerabilityResponse) => void
  ): Promise<DescribeKBComponentVulnerabilityResponse> {
    return this.request("DescribeKBComponentVulnerability", req, cb)
  }

  /**
   * 本接口(DescribeKBVulnerability)用于在知识库中查询漏洞详细信息，支持根据CVE、Vul ID、CNVD ID、CNNVD ID查询。
   */
  async DescribeKBVulnerability(
    req: DescribeKBVulnerabilityRequest,
    cb?: (error: string, rep: DescribeKBVulnerabilityResponse) => void
  ): Promise<DescribeKBVulnerabilityResponse> {
    return this.request("DescribeKBVulnerability", req, cb)
  }
}
