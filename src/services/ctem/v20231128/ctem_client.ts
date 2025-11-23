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
  CreateEnterpriseResponse,
  CreateAssetResponse,
  DescribeFakeAppsRequest,
  DescribeJobRecordsResponse,
  DisplayLeakageCode,
  CreateWechatAppletRequest,
  DescribeAppsRequest,
  DescribeSensitiveInfosRequest,
  DeleteAssetsRequest,
  DisplayAsset,
  DescribeWechatAppletsResponse,
  DescribeCustomersRequest,
  ModifyLabelRequest,
  DisplayLeakageData,
  DescribeFakeWebsitesResponse,
  CreatePortResponse,
  DeletePortsResponse,
  DeleteManagesRequest,
  DescribeManagesRequest,
  DisplayWechatOfficialAccount,
  DisplayConfig,
  DescribeNetDisksResponse,
  CreateJobRecordResponse,
  DescribeCustomersResponse,
  DescribeDomainsResponse,
  DisplayDarkWeb,
  ModifySeedStatusResponse,
  DeleteEnterprisesResponse,
  CreateSeedsRequest,
  DescribePortsResponse,
  DeleteWechatAppletsRequest,
  DescribeSensitiveInfosResponse,
  DescribeConfigsResponse,
  CreateAppResponse,
  DisplayLeakageEmail,
  DeleteSubDomainsResponse,
  CreateSeedsResponse,
  DeleteSuspiciousAssetsRequest,
  DescribeFakeWebsitesRequest,
  IdndValue,
  ModifyCustomerResponse,
  CreateJobRecordRequest,
  DescribeSuspiciousAssetsResponse,
  DescribeSeedsResponse,
  DisplayJobRecordDetail,
  DescribeAssetsRequest,
  DescribeJobRecordDetailsRequest,
  DescribeSubDomainsRequest,
  DisplayFakeWebsite,
  DescribeVulsResponse,
  CreateSuspiciousAssetResponse,
  DescribeLeakageEmailsResponse,
  CreateHttpRequest,
  DescribeAssetsResponse,
  DeleteAssetsResponse,
  DeletePortsRequest,
  DisplayEnterprise,
  DeleteManagesResponse,
  StopJobRecordRequest,
  DisplaySensitiveInfo,
  ModifyLabelResponse,
  DescribeEnterprisesRequest,
  DescribeLeakageCodesRequest,
  DeleteHttpsRequest,
  DisplayFakeMiniProgram,
  DisplayFakeWechatOfficial,
  CreateAppRequest,
  DisplayHttp,
  CreateDomainResponse,
  DeleteWechatOfficialAccountsRequest,
  DeleteSeedsResponse,
  DescribePortsRequest,
  DisplayWechatApplet,
  DescribeGithubsRequest,
  DescribeConfigsRequest,
  DeleteSeedsRequest,
  CreateHttpResponse,
  DescribeSeedsRequest,
  CreateSubDomainRequest,
  DescribeWechatOfficialAccountsRequest,
  DisplayFakeApp,
  DescribeDarkWebsRequest,
  DescribeHttpsRequest,
  DescribeEnterprisesResponse,
  DeleteSuspiciousAssetsResponse,
  DescribeNetDisksRequest,
  IgnoreDataRequest,
  CreateDomainRequest,
  DeleteDomainsRequest,
  ModifyCustomerRequest,
  DisplayApp,
  DescribeApiSecsResponse,
  CreateAssetRequest,
  DisplayNetDisk,
  DisplaySubDomain,
  DeleteHttpsResponse,
  CreatePortRequest,
  DescribeSuspiciousAssetsRequest,
  IgnoreDataResponse,
  CreateWechatAppletResponse,
  Filter,
  DisplayVul,
  DescribeWechatAppletsRequest,
  DescribeFakeAppsResponse,
  DisplayWeakPassword,
  DescribeLeakageEmailsRequest,
  DescribeGithubsResponse,
  CreateCustomerResponse,
  CreateWechatOfficialAccountRequest,
  DeleteWechatOfficialAccountsResponse,
  DescribeManagesResponse,
  CreateEnterpriseRequest,
  DeleteDomainsResponse,
  DescribeWeakPasswordsRequest,
  DisplayPort,
  StopJobRecordResponse,
  CreateManageResponse,
  DescribeFakeMiniProgramsRequest,
  CreateManageRequest,
  DisplayJobRecord,
  ModifySeedStatusRequest,
  CreateCustomerRequest,
  DeleteEnterprisesRequest,
  DescribeLeakageDatasRequest,
  DescribeJobRecordDetailsResponse,
  DeleteSubDomainsRequest,
  DescribeVulsRequest,
  CreateWechatOfficialAccountResponse,
  DisplayGithub,
  DisplayApiSec,
  CreateSubDomainResponse,
  DisplayToolCommon,
  DeleteAppsResponse,
  Customer,
  DisplayManage,
  DisplayDomain,
  DescribeFakeMiniProgramsResponse,
  DescribeSubDomainsResponse,
  DescribeHttpsResponse,
  DescribeWechatOfficialAccountsResponse,
  DescribeLeakageDatasResponse,
  DeleteWechatAppletsResponse,
  CreateSuspiciousAssetRequest,
  DescribeAppsResponse,
  DescribeWeakPasswordsResponse,
  DescribeFakeWechatOfficialsRequest,
  DisplaySuspiciousAsset,
  DescribeApiSecsRequest,
  DescribeJobRecordsRequest,
  DescribeLeakageCodesResponse,
  DescribeDomainsRequest,
  DisplaySeed,
  DeleteAppsRequest,
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
   * 添加微信小程序资产
   */
  async CreateWechatApplet(
    req: CreateWechatAppletRequest,
    cb?: (error: string, rep: CreateWechatAppletResponse) => void
  ): Promise<CreateWechatAppletResponse> {
    return this.request("CreateWechatApplet", req, cb)
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
   * 添加后台数据
   */
  async CreateManage(
    req: CreateManageRequest,
    cb?: (error: string, rep: CreateManageResponse) => void
  ): Promise<CreateManageResponse> {
    return this.request("CreateManage", req, cb)
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
   * 查看http数据
   */
  async DescribeHttps(
    req: DescribeHttpsRequest,
    cb?: (error: string, rep: DescribeHttpsResponse) => void
  ): Promise<DescribeHttpsResponse> {
    return this.request("DescribeHttps", req, cb)
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
   * 添加主机资产
   */
  async CreateAsset(
    req: CreateAssetRequest,
    cb?: (error: string, rep: CreateAssetResponse) => void
  ): Promise<CreateAssetResponse> {
    return this.request("CreateAsset", req, cb)
  }

  /**
   * 删除后台数据
   */
  async DeleteManages(
    req: DeleteManagesRequest,
    cb?: (error: string, rep: DeleteManagesResponse) => void
  ): Promise<DeleteManagesResponse> {
    return this.request("DeleteManages", req, cb)
  }

  /**
   * 删除网站资产数据
   */
  async DeleteHttps(
    req: DeleteHttpsRequest,
    cb?: (error: string, rep: DeleteHttpsResponse) => void
  ): Promise<DeleteHttpsResponse> {
    return this.request("DeleteHttps", req, cb)
  }

  /**
   * 添加影子资产
   */
  async CreateSuspiciousAsset(
    req: CreateSuspiciousAssetRequest,
    cb?: (error: string, rep: CreateSuspiciousAssetResponse) => void
  ): Promise<CreateSuspiciousAssetResponse> {
    return this.request("CreateSuspiciousAsset", req, cb)
  }

  /**
   * 删除影子资产数据
   */
  async DeleteSuspiciousAssets(
    req: DeleteSuspiciousAssetsRequest,
    cb?: (error: string, rep: DeleteSuspiciousAssetsResponse) => void
  ): Promise<DeleteSuspiciousAssetsResponse> {
    return this.request("DeleteSuspiciousAssets", req, cb)
  }

  /**
   * 查看API安全数据
   */
  async DescribeApiSecs(
    req: DescribeApiSecsRequest,
    cb?: (error: string, rep: DescribeApiSecsResponse) => void
  ): Promise<DescribeApiSecsResponse> {
    return this.request("DescribeApiSecs", req, cb)
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
   * 查看主机资产
   */
  async DescribeAssets(
    req: DescribeAssetsRequest,
    cb?: (error: string, rep: DescribeAssetsResponse) => void
  ): Promise<DescribeAssetsResponse> {
    return this.request("DescribeAssets", req, cb)
  }

  /**
   * 删除子域名数据
   */
  async DeleteSubDomains(
    req: DeleteSubDomainsRequest,
    cb?: (error: string, rep: DeleteSubDomainsResponse) => void
  ): Promise<DeleteSubDomainsResponse> {
    return this.request("DeleteSubDomains", req, cb)
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
   * 查看种子列表
   */
  async DescribeSeeds(
    req: DescribeSeedsRequest,
    cb?: (error: string, rep: DescribeSeedsResponse) => void
  ): Promise<DescribeSeedsResponse> {
    return this.request("DescribeSeeds", req, cb)
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
   * 删除微信公众号数据
   */
  async DeleteWechatOfficialAccounts(
    req: DeleteWechatOfficialAccountsRequest,
    cb?: (error: string, rep: DeleteWechatOfficialAccountsResponse) => void
  ): Promise<DeleteWechatOfficialAccountsResponse> {
    return this.request("DeleteWechatOfficialAccounts", req, cb)
  }

  /**
   * 删除微信小程序数据
   */
  async DeleteWechatApplets(
    req: DeleteWechatAppletsRequest,
    cb?: (error: string, rep: DeleteWechatAppletsResponse) => void
  ): Promise<DeleteWechatAppletsResponse> {
    return this.request("DeleteWechatApplets", req, cb)
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
   * 忽略数据
   */
  async IgnoreData(
    req: IgnoreDataRequest,
    cb?: (error: string, rep: IgnoreDataResponse) => void
  ): Promise<IgnoreDataResponse> {
    return this.request("IgnoreData", req, cb)
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
   * 添加子域名数据
   */
  async CreateSubDomain(
    req: CreateSubDomainRequest,
    cb?: (error: string, rep: CreateSubDomainResponse) => void
  ): Promise<CreateSubDomainResponse> {
    return this.request("CreateSubDomain", req, cb)
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
   * 查看企业列表
   */
  async DescribeCustomers(
    req: DescribeCustomersRequest,
    cb?: (error: string, rep: DescribeCustomersResponse) => void
  ): Promise<DescribeCustomersResponse> {
    return this.request("DescribeCustomers", req, cb)
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
   * 删除端口数据
   */
  async DeletePorts(
    req: DeletePortsRequest,
    cb?: (error: string, rep: DeletePortsResponse) => void
  ): Promise<DeletePortsResponse> {
    return this.request("DeletePorts", req, cb)
  }

  /**
   * 添加端口服务资产
   */
  async CreatePort(
    req: CreatePortRequest,
    cb?: (error: string, rep: CreatePortResponse) => void
  ): Promise<CreatePortResponse> {
    return this.request("CreatePort", req, cb)
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
   * 添加微信公众号资产
   */
  async CreateWechatOfficialAccount(
    req: CreateWechatOfficialAccountRequest,
    cb?: (error: string, rep: CreateWechatOfficialAccountResponse) => void
  ): Promise<CreateWechatOfficialAccountResponse> {
    return this.request("CreateWechatOfficialAccount", req, cb)
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
   * 添加网站资产
   */
  async CreateHttp(
    req: CreateHttpRequest,
    cb?: (error: string, rep: CreateHttpResponse) => void
  ): Promise<CreateHttpResponse> {
    return this.request("CreateHttp", req, cb)
  }

  /**
   * 删除APP数据
   */
  async DeleteApps(
    req: DeleteAppsRequest,
    cb?: (error: string, rep: DeleteAppsResponse) => void
  ): Promise<DeleteAppsResponse> {
    return this.request("DeleteApps", req, cb)
  }

  /**
   * 创建种子
   */
  async CreateSeeds(
    req: CreateSeedsRequest,
    cb?: (error: string, rep: CreateSeedsResponse) => void
  ): Promise<CreateSeedsResponse> {
    return this.request("CreateSeeds", req, cb)
  }

  /**
   * 删除企业架构数据
   */
  async DeleteEnterprises(
    req: DeleteEnterprisesRequest,
    cb?: (error: string, rep: DeleteEnterprisesResponse) => void
  ): Promise<DeleteEnterprisesResponse> {
    return this.request("DeleteEnterprises", req, cb)
  }

  /**
   * 修改种子状态
   */
  async ModifySeedStatus(
    req: ModifySeedStatusRequest,
    cb?: (error: string, rep: ModifySeedStatusResponse) => void
  ): Promise<ModifySeedStatusResponse> {
    return this.request("ModifySeedStatus", req, cb)
  }

  /**
   * 删除主域名数据
   */
  async DeleteDomains(
    req: DeleteDomainsRequest,
    cb?: (error: string, rep: DeleteDomainsResponse) => void
  ): Promise<DeleteDomainsResponse> {
    return this.request("DeleteDomains", req, cb)
  }

  /**
   * 删除主机资产数据
   */
  async DeleteAssets(
    req: DeleteAssetsRequest,
    cb?: (error: string, rep: DeleteAssetsResponse) => void
  ): Promise<DeleteAssetsResponse> {
    return this.request("DeleteAssets", req, cb)
  }

  /**
   * 添加APP资产
   */
  async CreateApp(
    req: CreateAppRequest,
    cb?: (error: string, rep: CreateAppResponse) => void
  ): Promise<CreateAppResponse> {
    return this.request("CreateApp", req, cb)
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
   * 添加主域名数据
   */
  async CreateDomain(
    req: CreateDomainRequest,
    cb?: (error: string, rep: CreateDomainResponse) => void
  ): Promise<CreateDomainResponse> {
    return this.request("CreateDomain", req, cb)
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
   * 添加企业架构资产
   */
  async CreateEnterprise(
    req: CreateEnterpriseRequest,
    cb?: (error: string, rep: CreateEnterpriseResponse) => void
  ): Promise<CreateEnterpriseResponse> {
    return this.request("CreateEnterprise", req, cb)
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
   * 删除种子
   */
  async DeleteSeeds(
    req: DeleteSeedsRequest,
    cb?: (error: string, rep: DeleteSeedsResponse) => void
  ): Promise<DeleteSeedsResponse> {
    return this.request("DeleteSeeds", req, cb)
  }
}
