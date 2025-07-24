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
  DescribeFakeWechatOfficialsResponse,
  DescribeManagesRequest,
  DescribeFakeAppsRequest,
  DescribeJobRecordsResponse,
  DisplayLeakageCode,
  DescribeAppsRequest,
  DescribeSensitiveInfosRequest,
  DisplayAsset,
  DescribeWechatAppletsResponse,
  DescribeCustomersRequest,
  ModifyLabelRequest,
  DisplayLeakageData,
  DescribeFakeWebsitesResponse,
  DisplayWechatOfficialAccount,
  DisplayConfig,
  DescribeNetDisksResponse,
  CreateJobRecordResponse,
  DescribeCustomersResponse,
  DescribeDomainsResponse,
  DisplayDarkWeb,
  DescribePortsResponse,
  DescribeSensitiveInfosResponse,
  DescribeConfigsResponse,
  IdndValue,
  DisplayLeakageEmail,
  DescribeFakeWebsitesRequest,
  ModifyCustomerResponse,
  CreateJobRecordRequest,
  DescribeSuspiciousAssetsResponse,
  DisplayJobRecordDetail,
  DescribeAssetsRequest,
  DescribeJobRecordDetailsRequest,
  DescribeSubDomainsRequest,
  DisplayFakeWebsite,
  DescribeVulsResponse,
  DescribeGithubsResponse,
  DescribeLeakageEmailsResponse,
  DescribeAssetsResponse,
  DisplayEnterprise,
  StopJobRecordRequest,
  DisplaySensitiveInfo,
  ModifyLabelResponse,
  DescribeEnterprisesRequest,
  DescribeLeakageCodesRequest,
  DisplayFakeMiniProgram,
  DisplayFakeWechatOfficial,
  DisplayHttp,
  DescribePortsRequest,
  DisplayWechatApplet,
  DescribeGithubsRequest,
  DescribeWechatOfficialAccountsResponse,
  DescribeWechatOfficialAccountsRequest,
  DisplayFakeApp,
  DescribeDarkWebsRequest,
  DescribeHttpsRequest,
  DescribeEnterprisesResponse,
  DescribeNetDisksRequest,
  ModifyCustomerRequest,
  DisplayApp,
  DisplayNetDisk,
  DisplaySubDomain,
  DescribeSuspiciousAssetsRequest,
  Filter,
  DisplayVul,
  DescribeWechatAppletsRequest,
  DescribeFakeAppsResponse,
  DisplayWeakPassword,
  DescribeLeakageEmailsRequest,
  CreateCustomerResponse,
  DescribeManagesResponse,
  DescribeConfigsRequest,
  DescribeWeakPasswordsRequest,
  DisplayPort,
  StopJobRecordResponse,
  DescribeFakeMiniProgramsRequest,
  DisplayJobRecord,
  CreateCustomerRequest,
  DescribeLeakageDatasRequest,
  DescribeJobRecordDetailsResponse,
  DescribeVulsRequest,
  DisplayGithub,
  DisplayToolCommon,
  Customer,
  DisplayManage,
  DisplayDomain,
  DescribeFakeMiniProgramsResponse,
  DescribeSubDomainsResponse,
  DescribeHttpsResponse,
  DescribeLeakageDatasResponse,
  DescribeAppsResponse,
  DescribeWeakPasswordsResponse,
  DescribeFakeWechatOfficialsRequest,
  DisplaySuspiciousAsset,
  DescribeJobRecordsRequest,
  DescribeLeakageCodesResponse,
  DescribeDomainsRequest,
  JobRecordProgress,
  DescribeDarkWebsResponse,
} from "./ctem_models"

/**
 * ctem client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ctem.tencentcloudapi.com", "2023-11-28", clientConfig)
  }

  /**
   * 查看网盘泄露数据
   */
  async DescribeNetDisks(
    req: DescribeNetDisksRequest,
    cb?: (error: string, rep: DescribeNetDisksResponse) => void
  ): Promise<DescribeNetDisksResponse> {
    return this.request("DescribeNetDisks", req, cb)
  }

  /**
   * 查看后台管理数据
   */
  async DescribeManages(
    req: DescribeManagesRequest,
    cb?: (error: string, rep: DescribeManagesResponse) => void
  ): Promise<DescribeManagesResponse> {
    return this.request("DescribeManages", req, cb)
  }

  /**
   * 获取数据泄露事件
   */
  async DescribeLeakageDatas(
    req: DescribeLeakageDatasRequest,
    cb?: (error: string, rep: DescribeLeakageDatasResponse) => void
  ): Promise<DescribeLeakageDatasResponse> {
    return this.request("DescribeLeakageDatas", req, cb)
  }

  /**
   * 编辑企业
   */
  async ModifyCustomer(
    req: ModifyCustomerRequest,
    cb?: (error: string, rep: ModifyCustomerResponse) => void
  ): Promise<ModifyCustomerResponse> {
    return this.request("ModifyCustomer", req, cb)
  }

  /**
   * 查看主域名数据
   */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
   * 查看漏洞数据
   */
  async DescribeVuls(
    req: DescribeVulsRequest,
    cb?: (error: string, rep: DescribeVulsResponse) => void
  ): Promise<DescribeVulsResponse> {
    return this.request("DescribeVuls", req, cb)
  }

  /**
   * 查看目录爆破数据
   */
  async DescribeConfigs(
    req: DescribeConfigsRequest,
    cb?: (error: string, rep: DescribeConfigsResponse) => void
  ): Promise<DescribeConfigsResponse> {
    return this.request("DescribeConfigs", req, cb)
  }

  /**
   * 查看微信小程序
   */
  async DescribeWechatApplets(
    req: DescribeWechatAppletsRequest,
    cb?: (error: string, rep: DescribeWechatAppletsResponse) => void
  ): Promise<DescribeWechatAppletsResponse> {
    return this.request("DescribeWechatApplets", req, cb)
  }

  /**
   * 查询仿冒网站
   */
  async DescribeFakeWebsites(
    req: DescribeFakeWebsitesRequest,
    cb?: (error: string, rep: DescribeFakeWebsitesResponse) => void
  ): Promise<DescribeFakeWebsitesResponse> {
    return this.request("DescribeFakeWebsites", req, cb)
  }

  /**
   * 查看敏感信息泄露数据
   */
  async DescribeSensitiveInfos(
    req: DescribeSensitiveInfosRequest,
    cb?: (error: string, rep: DescribeSensitiveInfosResponse) => void
  ): Promise<DescribeSensitiveInfosResponse> {
    return this.request("DescribeSensitiveInfos", req, cb)
  }

  /**
   * 查询仿冒小程序
   */
  async DescribeFakeMiniPrograms(
    req: DescribeFakeMiniProgramsRequest,
    cb?: (error: string, rep: DescribeFakeMiniProgramsResponse) => void
  ): Promise<DescribeFakeMiniProgramsResponse> {
    return this.request("DescribeFakeMiniPrograms", req, cb)
  }

  /**
   * 查看子域名数据
   */
  async DescribeSubDomains(
    req: DescribeSubDomainsRequest,
    cb?: (error: string, rep: DescribeSubDomainsResponse) => void
  ): Promise<DescribeSubDomainsResponse> {
    return this.request("DescribeSubDomains", req, cb)
  }

  /**
   * 查询仿冒公众号
   */
  async DescribeFakeWechatOfficials(
    req: DescribeFakeWechatOfficialsRequest,
    cb?: (error: string, rep: DescribeFakeWechatOfficialsResponse) => void
  ): Promise<DescribeFakeWechatOfficialsResponse> {
    return this.request("DescribeFakeWechatOfficials", req, cb)
  }

  /**
   * 获取邮箱泄露数据
   */
  async DescribeLeakageEmails(
    req: DescribeLeakageEmailsRequest,
    cb?: (error: string, rep: DescribeLeakageEmailsResponse) => void
  ): Promise<DescribeLeakageEmailsResponse> {
    return this.request("DescribeLeakageEmails", req, cb)
  }

  /**
   * 查询仿冒应用
   */
  async DescribeFakeApps(
    req: DescribeFakeAppsRequest,
    cb?: (error: string, rep: DescribeFakeAppsResponse) => void
  ): Promise<DescribeFakeAppsResponse> {
    return this.request("DescribeFakeApps", req, cb)
  }

  /**
   * 修改标签
   */
  async ModifyLabel(
    req: ModifyLabelRequest,
    cb?: (error: string, rep: ModifyLabelResponse) => void
  ): Promise<ModifyLabelResponse> {
    return this.request("ModifyLabel", req, cb)
  }

  /**
   * 查看移动端资产
   */
  async DescribeApps(
    req: DescribeAppsRequest,
    cb?: (error: string, rep: DescribeAppsResponse) => void
  ): Promise<DescribeAppsResponse> {
    return this.request("DescribeApps", req, cb)
  }

  /**
   * 查看企业列表
   */
  async DescribeCustomers(
    req: DescribeCustomersRequest,
    cb?: (error: string, rep: DescribeCustomersResponse) => void
  ): Promise<DescribeCustomersResponse> {
    return this.request("DescribeCustomers", req, cb)
  }

  /**
   * 查看链路详情
   */
  async DescribeJobRecordDetails(
    req: DescribeJobRecordDetailsRequest,
    cb?: (error: string, rep: DescribeJobRecordDetailsResponse) => void
  ): Promise<DescribeJobRecordDetailsResponse> {
    return this.request("DescribeJobRecordDetails", req, cb)
  }

  /**
   * 查看影子资产
   */
  async DescribeSuspiciousAssets(
    req: DescribeSuspiciousAssetsRequest,
    cb?: (error: string, rep: DescribeSuspiciousAssetsResponse) => void
  ): Promise<DescribeSuspiciousAssetsResponse> {
    return this.request("DescribeSuspiciousAssets", req, cb)
  }

  /**
   * 查看Github泄露数据
   */
  async DescribeGithubs(
    req: DescribeGithubsRequest,
    cb?: (error: string, rep: DescribeGithubsResponse) => void
  ): Promise<DescribeGithubsResponse> {
    return this.request("DescribeGithubs", req, cb)
  }

  /**
   * 查看端口数据
   */
  async DescribePorts(
    req: DescribePortsRequest,
    cb?: (error: string, rep: DescribePortsResponse) => void
  ): Promise<DescribePortsResponse> {
    return this.request("DescribePorts", req, cb)
  }

  /**
   * 启动测绘
   */
  async CreateJobRecord(
    req: CreateJobRecordRequest,
    cb?: (error: string, rep: CreateJobRecordResponse) => void
  ): Promise<CreateJobRecordResponse> {
    return this.request("CreateJobRecord", req, cb)
  }

  /**
   * 查看http数据
   */
  async DescribeHttps(
    req: DescribeHttpsRequest,
    cb?: (error: string, rep: DescribeHttpsResponse) => void
  ): Promise<DescribeHttpsResponse> {
    return this.request("DescribeHttps", req, cb)
  }

  /**
   * 查看主机资产
   */
  async DescribeAssets(
    req: DescribeAssetsRequest,
    cb?: (error: string, rep: DescribeAssetsResponse) => void
  ): Promise<DescribeAssetsResponse> {
    return this.request("DescribeAssets", req, cb)
  }

  /**
   * 查看暗网数据
   */
  async DescribeDarkWebs(
    req: DescribeDarkWebsRequest,
    cb?: (error: string, rep: DescribeDarkWebsResponse) => void
  ): Promise<DescribeDarkWebsResponse> {
    return this.request("DescribeDarkWebs", req, cb)
  }

  /**
   * 获取代码泄露数据
   */
  async DescribeLeakageCodes(
    req: DescribeLeakageCodesRequest,
    cb?: (error: string, rep: DescribeLeakageCodesResponse) => void
  ): Promise<DescribeLeakageCodesResponse> {
    return this.request("DescribeLeakageCodes", req, cb)
  }

  /**
   * 查看公众号数据
   */
  async DescribeWechatOfficialAccounts(
    req: DescribeWechatOfficialAccountsRequest,
    cb?: (error: string, rep: DescribeWechatOfficialAccountsResponse) => void
  ): Promise<DescribeWechatOfficialAccountsResponse> {
    return this.request("DescribeWechatOfficialAccounts", req, cb)
  }

  /**
   * 查看企业架构数据
   */
  async DescribeEnterprises(
    req: DescribeEnterprisesRequest,
    cb?: (error: string, rep: DescribeEnterprisesResponse) => void
  ): Promise<DescribeEnterprisesResponse> {
    return this.request("DescribeEnterprises", req, cb)
  }

  /**
   * 创建企业
   */
  async CreateCustomer(
    req: CreateCustomerRequest,
    cb?: (error: string, rep: CreateCustomerResponse) => void
  ): Promise<CreateCustomerResponse> {
    return this.request("CreateCustomer", req, cb)
  }

  /**
   * 停止扫描
   */
  async StopJobRecord(
    req: StopJobRecordRequest,
    cb?: (error: string, rep: StopJobRecordResponse) => void
  ): Promise<StopJobRecordResponse> {
    return this.request("StopJobRecord", req, cb)
  }

  /**
   * 查看任务运行记录列表
   */
  async DescribeJobRecords(
    req: DescribeJobRecordsRequest,
    cb?: (error: string, rep: DescribeJobRecordsResponse) => void
  ): Promise<DescribeJobRecordsResponse> {
    return this.request("DescribeJobRecords", req, cb)
  }

  /**
   * 查看弱口令数据
   */
  async DescribeWeakPasswords(
    req: DescribeWeakPasswordsRequest,
    cb?: (error: string, rep: DescribeWeakPasswordsResponse) => void
  ): Promise<DescribeWeakPasswordsResponse> {
    return this.request("DescribeWeakPasswords", req, cb)
  }
}
