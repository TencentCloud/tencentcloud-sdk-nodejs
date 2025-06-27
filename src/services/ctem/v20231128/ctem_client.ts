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
  ModifyCustomerResponse,
  DisplayWechatOfficialAccount,
  ModifyCustomerRequest,
  DescribeWechatAppletsResponse,
  DescribeManagesRequest,
  CreateJobRecordRequest,
  DescribeWechatOfficialAccountsRequest,
  DescribeJobRecordsResponse,
  DescribeVulsRequest,
  DisplayJobRecord,
  DescribeAppsRequest,
  DescribeDarkWebsRequest,
  DisplayNetDisk,
  DescribeHttpsRequest,
  DescribeEnterprisesResponse,
  DescribeSuspiciousAssetsResponse,
  CreateCustomerRequest,
  DisplayVul,
  DescribeSensitiveInfosRequest,
  DescribeNetDisksRequest,
  DescribeAssetsRequest,
  DescribeJobRecordDetailsRequest,
  DescribeJobRecordDetailsResponse,
  DescribeSubDomainsRequest,
  DescribeCustomersRequest,
  DisplayJobRecordDetail,
  DisplayGithub,
  DisplayAsset,
  DisplayApp,
  DescribeVulsResponse,
  DisplaySubDomain,
  DisplayToolCommon,
  DescribeGithubsResponse,
  DescribeAssetsResponse,
  Customer,
  DescribeWechatOfficialAccountsResponse,
  DisplayManage,
  DescribeSuspiciousAssetsRequest,
  DisplayConfig,
  DisplayEnterprise,
  StopJobRecordRequest,
  DisplaySensitiveInfo,
  DescribeNetDisksResponse,
  CreateJobRecordResponse,
  DescribeSubDomainsResponse,
  DescribeCustomersResponse,
  DescribeDomainsResponse,
  DisplayPort,
  DescribeEnterprisesRequest,
  DescribeWechatAppletsRequest,
  DescribeConfigsRequest,
  DescribeAppsResponse,
  DescribeWeakPasswordsResponse,
  DescribePortsResponse,
  DisplaySuspiciousAsset,
  Filter,
  DisplayWeakPassword,
  IdndValue,
  CreateCustomerResponse,
  DescribeHttpsResponse,
  DisplayHttp,
  DescribeConfigsResponse,
  DescribeSensitiveInfosResponse,
  DescribeJobRecordsRequest,
  DisplayDarkWeb,
  DescribeManagesResponse,
  DescribeDomainsRequest,
  JobRecordProgress,
  DescribeWeakPasswordsRequest,
  DisplayDomain,
  DescribePortsRequest,
  StopJobRecordResponse,
  DisplayWechatApplet,
  DescribeGithubsRequest,
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
   * 查看敏感信息泄露数据
   */
  async DescribeSensitiveInfos(
    req: DescribeSensitiveInfosRequest,
    cb?: (error: string, rep: DescribeSensitiveInfosResponse) => void
  ): Promise<DescribeSensitiveInfosResponse> {
    return this.request("DescribeSensitiveInfos", req, cb)
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
   * 查看企业列表
   */
  async DescribeCustomers(
    req: DescribeCustomersRequest,
    cb?: (error: string, rep: DescribeCustomersResponse) => void
  ): Promise<DescribeCustomersResponse> {
    return this.request("DescribeCustomers", req, cb)
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
