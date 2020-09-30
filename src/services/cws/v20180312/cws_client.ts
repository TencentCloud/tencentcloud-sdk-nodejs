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
  ModifySiteAttributeRequest,
  MonitorsDetail,
  DescribeSitesResponse,
  DescribeMonitorsResponse,
  DeleteSitesRequest,
  DescribeConfigRequest,
  DescribeVulsRequest,
  ModifyConfigAttributeResponse,
  CreateSitesResponse,
  DescribeVulsNumberRequest,
  ModifyMonitorAttributeResponse,
  ModifySiteAttributeResponse,
  CreateVulsReportRequest,
  CreateSitesScansResponse,
  SitesVerification,
  DescribeSiteQuotaResponse,
  DescribeVulsNumberResponse,
  CreateVulsMisinformationRequest,
  DescribeVulsNumberTimelineRequest,
  MonitorMiniSite,
  CreateSitesScansRequest,
  CreateMonitorsResponse,
  DescribeVulsResponse,
  VerifySitesResponse,
  CreateMonitorsRequest,
  DeleteMonitorsResponse,
  Monitor,
  Vul,
  VulsTimeline,
  CreateVulsMisinformationResponse,
  VerifySitesRequest,
  MiniSite,
  ModifyMonitorAttributeRequest,
  DescribeVulsNumberTimelineResponse,
  CreateVulsReportResponse,
  CreateSitesRequest,
  ModifyConfigAttributeRequest,
  Filter,
  DescribeMonitorsRequest,
  DeleteSitesResponse,
  DeleteMonitorsRequest,
  DescribeSitesVerificationResponse,
  Site,
  DescribeConfigResponse,
  DescribeSitesRequest,
  DescribeSiteQuotaRequest,
  DescribeSitesVerificationRequest,
} from "./cws_models"

/**
 * cws client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cws.tencentcloudapi.com", "2018-03-12", clientConfig)
  }

  /**
   * 本接口 (CreateVulsReport) 用于生成漏洞报告并返回下载链接。
   */
  async CreateVulsReport(
    req: CreateVulsReportRequest,
    cb?: (error: string, rep: CreateVulsReportResponse) => void
  ): Promise<CreateVulsReportResponse> {
    return this.request("CreateVulsReport", req, cb)
  }

  /**
   * 本接口 (DescribeVuls) 用于查询一个或多个漏洞的详细信息。
   */
  async DescribeVuls(
    req: DescribeVulsRequest,
    cb?: (error: string, rep: DescribeVulsResponse) => void
  ): Promise<DescribeVulsResponse> {
    return this.request("DescribeVuls", req, cb)
  }

  /**
   * 本接口 (ModifyMonitorAttribute) 用于修改监测任务的属性。
   */
  async ModifyMonitorAttribute(
    req: ModifyMonitorAttributeRequest,
    cb?: (error: string, rep: ModifyMonitorAttributeResponse) => void
  ): Promise<ModifyMonitorAttributeResponse> {
    return this.request("ModifyMonitorAttribute", req, cb)
  }

  /**
   * 本接口（CreateSitesScans）用于新增一个或多个站点的单次扫描任务。
   */
  async CreateSitesScans(
    req: CreateSitesScansRequest,
    cb?: (error: string, rep: CreateSitesScansResponse) => void
  ): Promise<CreateSitesScansResponse> {
    return this.request("CreateSitesScans", req, cb)
  }

  /**
   * 本接口（CreateSites）用于新增一个或多个站点。
   */
  async CreateSites(
    req: CreateSitesRequest,
    cb?: (error: string, rep: CreateSitesResponse) => void
  ): Promise<CreateSitesResponse> {
    return this.request("CreateSites", req, cb)
  }

  /**
   * 本接口（CreateVulsMisinformation）可以用于新增一个或多个漏洞误报信息。
   */
  async CreateVulsMisinformation(
    req: CreateVulsMisinformationRequest,
    cb?: (error: string, rep: CreateVulsMisinformationResponse) => void
  ): Promise<CreateVulsMisinformationResponse> {
    return this.request("CreateVulsMisinformation", req, cb)
  }

  /**
   * 本接口 (DescribeConfig) 用于查询用户配置的详细信息。
   */
  async DescribeConfig(
    req?: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 本接口 (DescribeSites) 用于查询一个或多个站点的详细信息。
   */
  async DescribeSites(
    req: DescribeSitesRequest,
    cb?: (error: string, rep: DescribeSitesResponse) => void
  ): Promise<DescribeSitesResponse> {
    return this.request("DescribeSites", req, cb)
  }

  /**
   * 本接口 (DescribeSitesVerification) 用于查询一个或多个待验证站点的验证信息。
   */
  async DescribeSitesVerification(
    req: DescribeSitesVerificationRequest,
    cb?: (error: string, rep: DescribeSitesVerificationResponse) => void
  ): Promise<DescribeSitesVerificationResponse> {
    return this.request("DescribeSitesVerification", req, cb)
  }

  /**
   * 本接口 (ModifySiteAttribute) 用于修改站点的属性。
   */
  async ModifySiteAttribute(
    req: ModifySiteAttributeRequest,
    cb?: (error: string, rep: ModifySiteAttributeResponse) => void
  ): Promise<ModifySiteAttributeResponse> {
    return this.request("ModifySiteAttribute", req, cb)
  }

  /**
   * 本接口 (ModifyConfigAttribute) 用于修改用户配置的属性。
   */
  async ModifyConfigAttribute(
    req: ModifyConfigAttributeRequest,
    cb?: (error: string, rep: ModifyConfigAttributeResponse) => void
  ): Promise<ModifyConfigAttributeResponse> {
    return this.request("ModifyConfigAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeVulsNumberTimeline) 用于查询漏洞数随时间变化统计信息。
   */
  async DescribeVulsNumberTimeline(
    req?: DescribeVulsNumberTimelineRequest,
    cb?: (error: string, rep: DescribeVulsNumberTimelineResponse) => void
  ): Promise<DescribeVulsNumberTimelineResponse> {
    return this.request("DescribeVulsNumberTimeline", req, cb)
  }

  /**
   * 本接口 (VerifySites) 用于验证一个或多个待验证站点。
   */
  async VerifySites(
    req: VerifySitesRequest,
    cb?: (error: string, rep: VerifySitesResponse) => void
  ): Promise<VerifySitesResponse> {
    return this.request("VerifySites", req, cb)
  }

  /**
   * 本接口 (DeleteMonitors) 用于删除用户监控任务。
   */
  async DeleteMonitors(
    req: DeleteMonitorsRequest,
    cb?: (error: string, rep: DeleteMonitorsResponse) => void
  ): Promise<DeleteMonitorsResponse> {
    return this.request("DeleteMonitors", req, cb)
  }

  /**
   * 本接口（CreateMonitors）用于新增一个或多个站点的监测任务。
   */
  async CreateMonitors(
    req: CreateMonitorsRequest,
    cb?: (error: string, rep: CreateMonitorsResponse) => void
  ): Promise<CreateMonitorsResponse> {
    return this.request("CreateMonitors", req, cb)
  }

  /**
   * 本接口 (DeleteSites) 用于删除站点。
   */
  async DeleteSites(
    req: DeleteSitesRequest,
    cb?: (error: string, rep: DeleteSitesResponse) => void
  ): Promise<DeleteSitesResponse> {
    return this.request("DeleteSites", req, cb)
  }

  /**
   * 本接口 (DescribeVulsNumber) 用于查询用户网站的漏洞总计数量。
   */
  async DescribeVulsNumber(
    req?: DescribeVulsNumberRequest,
    cb?: (error: string, rep: DescribeVulsNumberResponse) => void
  ): Promise<DescribeVulsNumberResponse> {
    return this.request("DescribeVulsNumber", req, cb)
  }

  /**
   * 本接口 (DescribeMonitors) 用于查询一个或多个监控任务的详细信息。
   */
  async DescribeMonitors(
    req: DescribeMonitorsRequest,
    cb?: (error: string, rep: DescribeMonitorsResponse) => void
  ): Promise<DescribeMonitorsResponse> {
    return this.request("DescribeMonitors", req, cb)
  }

  /**
   * 本接口 (DescribeSiteQuota) 用于查询用户购买的扫描次数总数和已使用数。
   */
  async DescribeSiteQuota(
    req?: DescribeSiteQuotaRequest,
    cb?: (error: string, rep: DescribeSiteQuotaResponse) => void
  ): Promise<DescribeSiteQuotaResponse> {
    return this.request("DescribeSiteQuota", req, cb)
  }
}
