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
  DisableGlobalDomainRequest,
  RegionDetail,
  DestAddressInfo,
  DescribeUDPListenersRequest,
  SupportFeature,
  DescribeGlobalDomainsRequest,
  DeleteProxyGroupRequest,
  OpenSecurityPolicyResponse,
  ModifyGlobalDomainAttributeRequest,
  DescribeResourcesByTagRequest,
  DescribeListenerStatisticsRequest,
  DescribeProxyAndStatisticsListenersResponse,
  DeleteRuleRequest,
  DescribeCrossBorderProxiesRequest,
  BindRuleRealServersRequest,
  DescribeHTTPSListenersResponse,
  ModifyProxiesProjectRequest,
  DomainErrorPageInfo,
  AccessConfiguration,
  ModifyProxiesProjectResponse,
  DescribeCertificateDetailRequest,
  ProxyAccessInfo,
  SetAuthenticationResponse,
  DescribeProxyGroupStatisticsResponse,
  DisableGlobalDomainResponse,
  DescribeResourcesByTagResponse,
  ModifyGroupDomainConfigRequest,
  BandwidthPriceGradient,
  DescribeHTTPListenersRequest,
  BindListenerRealServersResponse,
  DescribeCustomHeaderResponse,
  ModifyRealServerNameResponse,
  DescribeGroupDomainConfigResponse,
  ModifyCertificateResponse,
  OpenSecurityPolicyRequest,
  DeleteDomainErrorPageInfoRequest,
  DescribeListenerRealServersRequest,
  DescribeProxyGroupStatisticsRequest,
  DescribeHTTPSListenersRequest,
  DescribeCountryAreaMappingRequest,
  CheckProxyCreateResponse,
  ModifyCertificateRequest,
  DestroyProxiesRequest,
  SetTlsVersionResponse,
  DescribeRulesResponse,
  DescribeProxiesResponse,
  CreateRuleResponse,
  ModifyRealServerNameRequest,
  ModifyGroupDomainConfigResponse,
  DeleteProxyGroupResponse,
  CreateGlobalDomainDnsResponse,
  CreateDomainErrorPageInfoResponse,
  BindListenerRealServersRequest,
  DeleteDomainErrorPageInfoResponse,
  DescribeRuleRealServersRequest,
  DescribeGroupDomainConfigRequest,
  CreateProxyGroupDomainRequest,
  CreateTCPListenersRequest,
  CertificateDetail,
  DescribeListenerStatisticsResponse,
  DescribeProxyGroupDetailsRequest,
  CloseProxiesRequest,
  DescribeListenerRealServersResponse,
  DescribeProxyDetailRequest,
  IPDetail,
  SetTlsVersionRequest,
  ProxyStatus,
  DeleteDomainRequest,
  CreateFirstLinkSessionRequest,
  ModifyCertificateAttributesResponse,
  DescribeSecurityPolicyDetailResponse,
  CreateHTTPListenerResponse,
  DeleteGlobalDomainDnsResponse,
  CreateProxyGroupRequest,
  RuleInfo,
  RealServerStatus,
  DescribeTaskStatusResponse,
  DescribeTCPListenersResponse,
  DescribeRulesRequest,
  DescribeCountryAreaMappingResponse,
  DescribeCrossBorderProxiesResponse,
  DescribeRealServersResponse,
  ModifyHTTPListenerAttributeResponse,
  DescribeRealServerStatisticsRequest,
  DeleteFirstLinkSessionRequest,
  BindRealServerInfo,
  ModifyGlobalDomainAttributeResponse,
  DescribeProxyAndStatisticsListenersRequest,
  DescribeAccessRegionsResponse,
  DeleteListenersRequest,
  DescribeSecurityRulesRequest,
  DescribeDestRegionsResponse,
  DescribeAuthSignatureResponse,
  DescribeDomainErrorPageInfoByIdsResponse,
  DescribeProxiesRequest,
  DescribeAccessRegionsByDestRegionResponse,
  ModifyProxyGroupAttributeResponse,
  CreateGlobalDomainResponse,
  ListenerInfo,
  DescribeUDPListenersResponse,
  CreateUDPListenersRequest,
  CreateGlobalDomainRequest,
  CreateSecurityPolicyResponse,
  TCPListener,
  EnableGlobalDomainResponse,
  TagResourceInfo,
  CreateSecurityRulesResponse,
  DescribeAccessRegionsRequest,
  CreateCertificateRequest,
  CreateProxyGroupDomainResponse,
  DescribeCustomHeaderRequest,
  DescribeProxyGroupListResponse,
  DescribeGlobalDomainDnsRequest,
  DescribeDomainErrorPageInfoRequest,
  Domain,
  BanAndRecoverProxyRequest,
  CloseSecurityPolicyRequest,
  ModifyCertificateAttributesRequest,
  ModifyGlobalDomainDnsRequest,
  CreateSecurityRulesRequest,
  DescribeCertificatesRequest,
  DescribeProxiesStatusRequest,
  ModifyTCPListenerAttributeRequest,
  DeleteSecurityPolicyResponse,
  CreateDomainResponse,
  EnableGlobalDomainRequest,
  DescribeAuthSignatureRequest,
  ModifyDomainRequest,
  DeleteGlobalDomainDnsRequest,
  CreateCustomHeaderResponse,
  DescribeAccessRegionsByDestRegionRequest,
  RealServer,
  DescribeRealServersRequest,
  StatisticsDataInfo,
  CreateCustomHeaderRequest,
  ProxyGroupInfo,
  Capacity,
  DescribeCertificatesResponse,
  Certificate,
  DescribeDomainErrorPageInfoResponse,
  DestroyProxiesResponse,
  DescribeRuleRealServersResponse,
  BanAndRecoverProxyResponse,
  DescribeRealServersStatusRequest,
  ModifyHTTPListenerAttributeRequest,
  CreateProxyRequest,
  DeleteCertificateRequest,
  ModifySecurityRuleResponse,
  DescribeProxiesStatusResponse,
  RemoveRealServersRequest,
  CreateDomainRequest,
  CreateRuleRequest,
  ModifyProxyConfigurationRequest,
  CreateGlobalDomainDnsRequest,
  ProxySimpleInfo,
  DeleteSecurityPolicyRequest,
  HTTPListener,
  ProxyGroupDetail,
  CreateHTTPListenerRequest,
  CloseSecurityPolicyResponse,
  DescribeRegionAndPriceResponse,
  AddRealServersResponse,
  CloseProxiesResponse,
  DeleteCertificateResponse,
  SecurityPolicyRuleIn,
  DescribeBlackHeaderResponse,
  DescribeDestRegionsRequest,
  HTTPSListener,
  ModifyRuleAttributeResponse,
  CreateTCPListenersResponse,
  DescribeSecurityPolicyDetailRequest,
  ModifyDomainResponse,
  DescribeRulesByRuleIdsResponse,
  SetAuthenticationRequest,
  DomainAccessRegionDict,
  GlobalDns,
  InquiryPriceCreateProxyResponse,
  NewRealServer,
  DescribeFirstLinkSessionResponse,
  DescribeHTTPListenersResponse,
  DescribeTaskStatusRequest,
  HttpHeaderParam,
  DescribeRealServerStatisticsResponse,
  AccessRegionDomainConf,
  DeleteDomainResponse,
  DeleteListenersResponse,
  RuleCheckParams,
  CreateSecurityPolicyRequest,
  ModifyHTTPSListenerAttributeResponse,
  AccessRegionDetial,
  DescribeProxyGroupListRequest,
  SecurityPolicyRuleOut,
  CreateFirstLinkSessionResponse,
  BindRealServer,
  GroupStatisticsInfo,
  TagPair,
  CreateProxyGroupResponse,
  CreateHTTPSListenerResponse,
  DeleteRuleResponse,
  ModifyRuleAttributeRequest,
  DescribeFirstLinkSessionRequest,
  BindRuleRealServersResponse,
  DescribeGlobalDomainDnsResponse,
  ModifyUDPListenerAttributeResponse,
  DescribeGroupAndStatisticsProxyRequest,
  SrcAddressInfo,
  ModifyUDPListenerAttributeRequest,
  DeleteSecurityRulesResponse,
  ModifyTCPListenerAttributeResponse,
  CountryAreaMap,
  MetricStatisticsInfo,
  DescribeProxyDetailResponse,
  DescribeGroupAndStatisticsProxyResponse,
  CreateUDPListenersResponse,
  ModifyHTTPSListenerAttributeRequest,
  DescribeProxyStatisticsRequest,
  DomainRuleSet,
  DescribeTCPListenersRequest,
  CreateCertificateResponse,
  DescribeBlackHeaderRequest,
  DescribeProxyStatisticsResponse,
  DescribeRealServersStatusResponse,
  ModifyProxyGroupAttributeRequest,
  ModifyGlobalDomainDnsResponse,
  CloseProxyGroupResponse,
  DeleteFirstLinkSessionResponse,
  ModifyProxiesAttributeResponse,
  DescribeDomainErrorPageInfoByIdsRequest,
  CheckProxyCreateRequest,
  DescribeRegionAndPriceRequest,
  AddRealServersRequest,
  ModifyProxiesAttributeRequest,
  DescribeSecurityRulesResponse,
  CertificateAliasInfo,
  CreateHTTPSListenerRequest,
  DeleteSecurityRulesRequest,
  DescribeCertificateDetailResponse,
  OpenProxyGroupResponse,
  ModifySecurityRuleRequest,
  NationCountryInnerInfo,
  ProxyIdDict,
  Filter,
  CreateProxyResponse,
  OpenProxiesRequest,
  InquiryPriceCreateProxyRequest,
  DescribeProxyGroupDetailsResponse,
  OpenProxyGroupRequest,
  DeviceInfo,
  UDPListener,
  DeleteGlobalDomainRequest,
  ProxyInfo,
  RemoveRealServersResponse,
  DescribeRulesByRuleIdsRequest,
  DeleteGlobalDomainResponse,
  RealServerBindSetReq,
  CloseProxyGroupRequest,
  DescribeGlobalDomainsResponse,
  OpenProxiesResponse,
  ModifyProxyConfigurationResponse,
  CreateDomainErrorPageInfoRequest,
} from "./gaap_models"

/**
 * gaap client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gaap.tencentcloudapi.com", "2018-05-29", clientConfig)
  }

  /**
   * 修改域名解析记录
   */
  async ModifyGlobalDomainDns(
    req: ModifyGlobalDomainDnsRequest,
    cb?: (error: string, rep: ModifyGlobalDomainDnsResponse) => void
  ): Promise<ModifyGlobalDomainDnsResponse> {
    return this.request("ModifyGlobalDomainDns", req, cb)
  }

  /**
   * 本接口（DescribeCertificates）用来查询可以使用的证书列表。
   */
  async DescribeCertificates(
    req: DescribeCertificatesRequest,
    cb?: (error: string, rep: DescribeCertificatesResponse) => void
  ): Promise<DescribeCertificatesResponse> {
    return this.request("DescribeCertificates", req, cb)
  }

  /**
   * 添加安全策略规则
   */
  async CreateSecurityRules(
    req: CreateSecurityRulesRequest,
    cb?: (error: string, rep: CreateSecurityRulesResponse) => void
  ): Promise<CreateSecurityRulesResponse> {
    return this.request("CreateSecurityRules", req, cb)
  }

  /**
   * 本接口（DescribeHTTPSListeners）用来查询HTTPS监听器信息。
   */
  async DescribeHTTPSListeners(
    req: DescribeHTTPSListenersRequest,
    cb?: (error: string, rep: DescribeHTTPSListenersResponse) => void
  ): Promise<DescribeHTTPSListenersResponse> {
    return this.request("DescribeHTTPSListeners", req, cb)
  }

  /**
   * 删除安全策略
   */
  async DeleteSecurityPolicy(
    req: DeleteSecurityPolicyRequest,
    cb?: (error: string, rep: DeleteSecurityPolicyResponse) => void
  ): Promise<DeleteSecurityPolicyResponse> {
    return this.request("DeleteSecurityPolicy", req, cb)
  }

  /**
   * 本接口（DescribeBlackHeader）用于查询禁用的自定义header 名称
   */
  async DescribeBlackHeader(
    req?: DescribeBlackHeaderRequest,
    cb?: (error: string, rep: DescribeBlackHeaderResponse) => void
  ): Promise<DescribeBlackHeaderResponse> {
    return this.request("DescribeBlackHeader", req, cb)
  }

  /**
   * 本接口（DescribeCountryAreaMapping）用于获取国家地区编码映射表。
   */
  async DescribeCountryAreaMapping(
    req?: DescribeCountryAreaMappingRequest,
    cb?: (error: string, rep: DescribeCountryAreaMappingResponse) => void
  ): Promise<DescribeCountryAreaMappingResponse> {
    return this.request("DescribeCountryAreaMapping", req, cb)
  }

  /**
     * 该接口（ModifyHTTPListenerAttribute）用于修改通道的HTTP监听器配置信息，目前仅支持修改监听器的名称。
注意：通道组通道暂时不支持HTTP/HTTPS监听器。
     */
  async ModifyHTTPListenerAttribute(
    req: ModifyHTTPListenerAttributeRequest,
    cb?: (error: string, rep: ModifyHTTPListenerAttributeResponse) => void
  ): Promise<ModifyHTTPListenerAttributeResponse> {
    return this.request("ModifyHTTPListenerAttribute", req, cb)
  }

  /**
   * 本接口（ModifyCertificateAttributes）用于修改证书，包括证书名字以及证书内容。
   */
  async ModifyCertificateAttributes(
    req: ModifyCertificateAttributesRequest,
    cb?: (error: string, rep: ModifyCertificateAttributesResponse) => void
  ): Promise<ModifyCertificateAttributesResponse> {
    return this.request("ModifyCertificateAttributes", req, cb)
  }

  /**
   * 查询域名解析列表
   */
  async DescribeGlobalDomainDns(
    req: DescribeGlobalDomainDnsRequest,
    cb?: (error: string, rep: DescribeGlobalDomainDnsResponse) => void
  ): Promise<DescribeGlobalDomainDnsResponse> {
    return this.request("DescribeGlobalDomainDns", req, cb)
  }

  /**
   * 用来创建统一域名
   */
  async CreateGlobalDomain(
    req: CreateGlobalDomainRequest,
    cb?: (error: string, rep: CreateGlobalDomainResponse) => void
  ): Promise<CreateGlobalDomainResponse> {
    return this.request("CreateGlobalDomain", req, cb)
  }

  /**
   * 本接口（CreateCustomHeader）用于创建HTTP/HTTPS监听器的自定义header，客户端请求通过访问该监听器时，会将监听器中配置的header信息发送到源站。
   */
  async CreateCustomHeader(
    req: CreateCustomHeaderRequest,
    cb?: (error: string, rep: CreateCustomHeaderResponse) => void
  ): Promise<CreateCustomHeaderResponse> {
    return this.request("CreateCustomHeader", req, cb)
  }

  /**
   * 本接口（DescribeCrossBorderProxies）用于查询跨境通道实例列表。
   */
  async DescribeCrossBorderProxies(
    req?: DescribeCrossBorderProxiesRequest,
    cb?: (error: string, rep: DescribeCrossBorderProxiesResponse) => void
  ): Promise<DescribeCrossBorderProxiesResponse> {
    return this.request("DescribeCrossBorderProxies", req, cb)
  }

  /**
   * 该接口为内部接口，用于查询可以获取统计数据的通道组和通道信息
   */
  async DescribeGroupAndStatisticsProxy(
    req: DescribeGroupAndStatisticsProxyRequest,
    cb?: (error: string, rep: DescribeGroupAndStatisticsProxyResponse) => void
  ): Promise<DescribeGroupAndStatisticsProxyResponse> {
    return this.request("DescribeGroupAndStatisticsProxy", req, cb)
  }

  /**
   * 关闭安全策略
   */
  async CloseSecurityPolicy(
    req: CloseSecurityPolicyRequest,
    cb?: (error: string, rep: CloseSecurityPolicyResponse) => void
  ): Promise<CloseSecurityPolicyResponse> {
    return this.request("CloseSecurityPolicy", req, cb)
  }

  /**
   * 本接口（CreateProxyGroupDomain）用于创建通道组域名，并开启域名解析。
   */
  async CreateProxyGroupDomain(
    req: CreateProxyGroupDomainRequest,
    cb?: (error: string, rep: CreateProxyGroupDomainResponse) => void
  ): Promise<CreateProxyGroupDomainResponse> {
    return this.request("CreateProxyGroupDomain", req, cb)
  }

  /**
   * 设置监听器TLS配置
   */
  async SetTlsVersion(
    req: SetTlsVersionRequest,
    cb?: (error: string, rep: SetTlsVersionResponse) => void
  ): Promise<SetTlsVersionResponse> {
    return this.request("SetTlsVersion", req, cb)
  }

  /**
   * 该接口（CreateUDPListeners）用于批量创建单通道或者通道组的UDP协议类型的监听器。
   */
  async CreateUDPListeners(
    req: CreateUDPListenersRequest,
    cb?: (error: string, rep: CreateUDPListenersResponse) => void
  ): Promise<CreateUDPListenersResponse> {
    return this.request("CreateUDPListeners", req, cb)
  }

  /**
   * 本接口（DescribeProxyDetail）用于查询通道详情。
   */
  async DescribeProxyDetail(
    req: DescribeProxyDetailRequest,
    cb?: (error: string, rep: DescribeProxyDetailResponse) => void
  ): Promise<DescribeProxyDetailResponse> {
    return this.request("DescribeProxyDetail", req, cb)
  }

  /**
   * 本接口（DescribeRuleRealServers）用于查询转发规则相关的源站信息， 包括该规则可绑定的源站信息和已绑定的源站信息。
   */
  async DescribeRuleRealServers(
    req: DescribeRuleRealServersRequest,
    cb?: (error: string, rep: DescribeRuleRealServersResponse) => void
  ): Promise<DescribeRuleRealServersResponse> {
    return this.request("DescribeRuleRealServers", req, cb)
  }

  /**
   * 该接口（DescribeUDPListeners）用于查询单通道或者通道组下的UDP监听器信息
   */
  async DescribeUDPListeners(
    req: DescribeUDPListenersRequest,
    cb?: (error: string, rep: DescribeUDPListenersResponse) => void
  ): Promise<DescribeUDPListenersResponse> {
    return this.request("DescribeUDPListeners", req, cb)
  }

  /**
   * 本接口（DescribeDestRegions）用于查询源站区域，即源站服务器所在区域。
   */
  async DescribeDestRegions(
    req: DescribeDestRegionsRequest,
    cb?: (error: string, rep: DescribeDestRegionsResponse) => void
  ): Promise<DescribeDestRegionsResponse> {
    return this.request("DescribeDestRegions", req, cb)
  }

  /**
   * 本接口（DescribeProxyGroupList）用于拉取通道组列表及各通道组基本信息。
   */
  async DescribeProxyGroupList(
    req: DescribeProxyGroupListRequest,
    cb?: (error: string, rep: DescribeProxyGroupListResponse) => void
  ): Promise<DescribeProxyGroupListResponse> {
    return this.request("DescribeProxyGroupList", req, cb)
  }

  /**
   * 开启安全策略
   */
  async OpenSecurityPolicy(
    req: OpenSecurityPolicyRequest,
    cb?: (error: string, rep: OpenSecurityPolicyResponse) => void
  ): Promise<OpenSecurityPolicyResponse> {
    return this.request("OpenSecurityPolicy", req, cb)
  }

  /**
   * 删除域名的定制错误
   */
  async DeleteDomainErrorPageInfo(
    req: DeleteDomainErrorPageInfoRequest,
    cb?: (error: string, rep: DeleteDomainErrorPageInfoResponse) => void
  ): Promise<DeleteDomainErrorPageInfoResponse> {
    return this.request("DeleteDomainErrorPageInfo", req, cb)
  }

  /**
   * 本接口（ModifyCertificate）用于修改监听器下的域名对应的证书。该接口仅适用于version3.0的通道。
   */
  async ModifyCertificate(
    req: ModifyCertificateRequest,
    cb?: (error: string, rep: ModifyCertificateResponse) => void
  ): Promise<ModifyCertificateResponse> {
    return this.request("ModifyCertificate", req, cb)
  }

  /**
   * 定制域名指定错误码的错误响应
   */
  async CreateDomainErrorPageInfo(
    req: CreateDomainErrorPageInfoRequest,
    cb?: (error: string, rep: CreateDomainErrorPageInfoResponse) => void
  ): Promise<CreateDomainErrorPageInfoResponse> {
    return this.request("CreateDomainErrorPageInfo", req, cb)
  }

  /**
   * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
   */
  async DescribeProxyGroupStatistics(
    req: DescribeProxyGroupStatisticsRequest,
    cb?: (error: string, rep: DescribeProxyGroupStatisticsResponse) => void
  ): Promise<DescribeProxyGroupStatisticsResponse> {
    return this.request("DescribeProxyGroupStatistics", req, cb)
  }

  /**
   * 本接口（ModifyRealServerName）用于修改源站的名称
   */
  async ModifyRealServerName(
    req: ModifyRealServerNameRequest,
    cb?: (error: string, rep: ModifyRealServerNameResponse) => void
  ): Promise<ModifyRealServerNameResponse> {
    return this.request("ModifyRealServerName", req, cb)
  }

  /**
     * 本接口（BindListenerRealServers）用于TCP/UDP监听器绑定解绑源站。
注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。例如：原来绑定的源站为A，B，C，本次调用的选择绑定的源站为C，D，E，那么调用后所绑定的源站为C，D，E。
     */
  async BindListenerRealServers(
    req: BindListenerRealServersRequest,
    cb?: (error: string, rep: BindListenerRealServersResponse) => void
  ): Promise<BindListenerRealServersResponse> {
    return this.request("BindListenerRealServers", req, cb)
  }

  /**
   * 删除安全策略规则
   */
  async DeleteSecurityRules(
    req: DeleteSecurityRulesRequest,
    cb?: (error: string, rep: DeleteSecurityRulesResponse) => void
  ): Promise<DeleteSecurityRulesResponse> {
    return this.request("DeleteSecurityRules", req, cb)
  }

  /**
   * 本接口（DeleteCertificate）用于删除证书。
   */
  async DeleteCertificate(
    req: DeleteCertificateRequest,
    cb?: (error: string, rep: DeleteCertificateResponse) => void
  ): Promise<DeleteCertificateResponse> {
    return this.request("DeleteCertificate", req, cb)
  }

  /**
     * 产品功能已下线，对应的api接口下线

本接口（CreateFirstLinkSession）用于创建接入段加速会话，创建有可能成功，也可能失败，需要通过返回码来进行判断。
     */
  async CreateFirstLinkSession(
    req: CreateFirstLinkSessionRequest,
    cb?: (error: string, rep: CreateFirstLinkSessionResponse) => void
  ): Promise<CreateFirstLinkSessionResponse> {
    return this.request("CreateFirstLinkSession", req, cb)
  }

  /**
   * 本接口（DescribeAccessRegionsByDestRegion）根据源站区域查询可用的加速区域列表。
   */
  async DescribeAccessRegionsByDestRegion(
    req: DescribeAccessRegionsByDestRegionRequest,
    cb?: (error: string, rep: DescribeAccessRegionsByDestRegionResponse) => void
  ): Promise<DescribeAccessRegionsByDestRegionResponse> {
    return this.request("DescribeAccessRegionsByDestRegion", req, cb)
  }

  /**
   * 本接口（ModifyGroupDomainConfig）用于配置通道组就近接入域名。
   */
  async ModifyGroupDomainConfig(
    req: ModifyGroupDomainConfigRequest,
    cb?: (error: string, rep: ModifyGroupDomainConfigResponse) => void
  ): Promise<ModifyGroupDomainConfigResponse> {
    return this.request("ModifyGroupDomainConfig", req, cb)
  }

  /**
   * 该接口（DescribeTCPListeners）用于查询单通道或者通道组下的TCP监听器信息。
   */
  async DescribeTCPListeners(
    req: DescribeTCPListenersRequest,
    cb?: (error: string, rep: DescribeTCPListenersResponse) => void
  ): Promise<DescribeTCPListenersResponse> {
    return this.request("DescribeTCPListeners", req, cb)
  }

  /**
   * 本接口（DescribeRealServers）用于查询源站信息，可以根据项目名查询所有的源站信息，此外支持指定IP或者域名的源站模糊查询。
   */
  async DescribeRealServers(
    req: DescribeRealServersRequest,
    cb?: (error: string, rep: DescribeRealServersResponse) => void
  ): Promise<DescribeRealServersResponse> {
    return this.request("DescribeRealServers", req, cb)
  }

  /**
   * 该接口为内部接口，用于查询可以获取统计数据的通道和监听器信息
   */
  async DescribeProxyAndStatisticsListeners(
    req: DescribeProxyAndStatisticsListenersRequest,
    cb?: (error: string, rep: DescribeProxyAndStatisticsListenersResponse) => void
  ): Promise<DescribeProxyAndStatisticsListenersResponse> {
    return this.request("DescribeProxyAndStatisticsListeners", req, cb)
  }

  /**
   * 修改域名属性
   */
  async ModifyGlobalDomainAttribute(
    req: ModifyGlobalDomainAttributeRequest,
    cb?: (error: string, rep: ModifyGlobalDomainAttributeResponse) => void
  ): Promise<ModifyGlobalDomainAttributeResponse> {
    return this.request("ModifyGlobalDomainAttribute", req, cb)
  }

  /**
   * 本接口（DescribeRulesByRuleIds）用于根据规则ID拉取规则信息列表。支持一个或者多个规则信息的拉取。一次最多支持10个规则信息的拉取。
   */
  async DescribeRulesByRuleIds(
    req: DescribeRulesByRuleIdsRequest,
    cb?: (error: string, rep: DescribeRulesByRuleIdsResponse) => void
  ): Promise<DescribeRulesByRuleIdsResponse> {
    return this.request("DescribeRulesByRuleIds", req, cb)
  }

  /**
   * 本接口（ModifyProxyConfiguration）用于修改通道的配置。根据当前业务的容量需求，扩容或缩容相关通道的配置。仅支持Scalarable为1的通道,Scalarable可通过接口DescribeProxies获取。
   */
  async ModifyProxyConfiguration(
    req: ModifyProxyConfigurationRequest,
    cb?: (error: string, rep: ModifyProxyConfigurationResponse) => void
  ): Promise<ModifyProxyConfigurationResponse> {
    return this.request("ModifyProxyConfiguration", req, cb)
  }

  /**
   * 本接口（CloseProxyGroup）用于关闭通道组。通道组关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
   */
  async CloseProxyGroup(
    req: CloseProxyGroupRequest,
    cb?: (error: string, rep: CloseProxyGroupResponse) => void
  ): Promise<CloseProxyGroupResponse> {
    return this.request("CloseProxyGroup", req, cb)
  }

  /**
   * 本接口（ModifyTCPListenerAttribute）用于修改通道实例下TCP监听器配置，包括健康检查的配置，调度策略。
   */
  async ModifyTCPListenerAttribute(
    req: ModifyTCPListenerAttributeRequest,
    cb?: (error: string, rep: ModifyTCPListenerAttributeResponse) => void
  ): Promise<ModifyTCPListenerAttributeResponse> {
    return this.request("ModifyTCPListenerAttribute", req, cb)
  }

  /**
   * 该接口（CreateHTTPListener）用于在通道实例下创建HTTP协议类型的监听器。
   */
  async CreateHTTPListener(
    req: CreateHTTPListenerRequest,
    cb?: (error: string, rep: CreateHTTPListenerResponse) => void
  ): Promise<CreateHTTPListenerResponse> {
    return this.request("CreateHTTPListener", req, cb)
  }

  /**
   * 该接口（DescribeRealServerStatistics）用于查询源站健康检查结果的统计数据。源站状态展示位为1：正常或者0：异常。查询的源站需要在监听器或者规则上进行了绑定，查询时需指定绑定的监听器或者规则ID。该接口支持1分钟细粒度的源站状态统计数据展示。
   */
  async DescribeRealServerStatistics(
    req: DescribeRealServerStatisticsRequest,
    cb?: (error: string, rep: DescribeRealServerStatisticsResponse) => void
  ): Promise<DescribeRealServerStatisticsResponse> {
    return this.request("DescribeRealServerStatistics", req, cb)
  }

  /**
   * 该接口（DescribeHTTPListeners）用来查询HTTP监听器信息。
   */
  async DescribeHTTPListeners(
    req: DescribeHTTPListenersRequest,
    cb?: (error: string, rep: DescribeHTTPListenersResponse) => void
  ): Promise<DescribeHTTPListenersResponse> {
    return this.request("DescribeHTTPListeners", req, cb)
  }

  /**
   * 本接口（CreateProxyGroup）用于创建通道组。
   */
  async CreateProxyGroup(
    req: CreateProxyGroupRequest,
    cb?: (error: string, rep: CreateProxyGroupResponse) => void
  ): Promise<CreateProxyGroupResponse> {
    return this.request("CreateProxyGroup", req, cb)
  }

  /**
   * 本接口（CreateCertificate）用于创建Gaap相关证书和配置文件，包括基础认证配置文件，客户端CA证书，服务器SSL证书，Gaap SSL证书以及源站CA证书。
   */
  async CreateCertificate(
    req: CreateCertificateRequest,
    cb?: (error: string, rep: CreateCertificateResponse) => void
  ): Promise<CreateCertificateResponse> {
    return this.request("CreateCertificate", req, cb)
  }

  /**
   * 本接口（DescribeCustomHeader）用于自定义header列表
   */
  async DescribeCustomHeader(
    req: DescribeCustomHeaderRequest,
    cb?: (error: string, rep: DescribeCustomHeaderResponse) => void
  ): Promise<DescribeCustomHeaderResponse> {
    return this.request("DescribeCustomHeader", req, cb)
  }

  /**
   * 删除域名的某条解析记录
   */
  async DeleteGlobalDomainDns(
    req: DeleteGlobalDomainDnsRequest,
    cb?: (error: string, rep: DeleteGlobalDomainDnsResponse) => void
  ): Promise<DeleteGlobalDomainDnsResponse> {
    return this.request("DeleteGlobalDomainDns", req, cb)
  }

  /**
   * 本接口（DestroyProxies）用于销毁。通道销毁后，不再产生任何费用。
   */
  async DestroyProxies(
    req: DestroyProxiesRequest,
    cb?: (error: string, rep: DestroyProxiesResponse) => void
  ): Promise<DestroyProxiesResponse> {
    return this.request("DestroyProxies", req, cb)
  }

  /**
   * 本接口（CreateProxy）用于创建/复制一个指定配置的加速通道。当复制通道时，需要设置新通道的基本配置参数，并设置ClonedProxyId来指定被复制的通道。
   */
  async CreateProxy(
    req: CreateProxyRequest,
    cb?: (error: string, rep: CreateProxyResponse) => void
  ): Promise<CreateProxyResponse> {
    return this.request("CreateProxy", req, cb)
  }

  /**
   * 本接口（DeleteDomain）仅适用于7层监听器，用于删除该监听器下对应域名及域名下的所有规则，所有已绑定源站的规则将自动解绑。
   */
  async DeleteDomain(
    req: DeleteDomainRequest,
    cb?: (error: string, rep: DeleteDomainResponse) => void
  ): Promise<DeleteDomainResponse> {
    return this.request("DeleteDomain", req, cb)
  }

  /**
   * 获取安全策略详情
   */
  async DescribeSecurityPolicyDetail(
    req: DescribeSecurityPolicyDetailRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyDetailResponse) => void
  ): Promise<DescribeSecurityPolicyDetailResponse> {
    return this.request("DescribeSecurityPolicyDetail", req, cb)
  }

  /**
   * 删除已添加的源站(服务器)IP或域名
   */
  async RemoveRealServers(
    req: RemoveRealServersRequest,
    cb?: (error: string, rep: RemoveRealServersResponse) => void
  ): Promise<RemoveRealServersResponse> {
    return this.request("RemoveRealServers", req, cb)
  }

  /**
   * 删除统一域名
   */
  async DeleteGlobalDomain(
    req: DeleteGlobalDomainRequest,
    cb?: (error: string, rep: DeleteGlobalDomainResponse) => void
  ): Promise<DeleteGlobalDomainResponse> {
    return this.request("DeleteGlobalDomain", req, cb)
  }

  /**
   * 本接口（DescribeSecurityRules）用于根据安全规则ID查询安全规则详情列表。支持一个或多个安全规则的查询。一次最多支持20个安全规则的查询。
   */
  async DescribeSecurityRules(
    req: DescribeSecurityRulesRequest,
    cb?: (error: string, rep: DescribeSecurityRulesResponse) => void
  ): Promise<DescribeSecurityRulesResponse> {
    return this.request("DescribeSecurityRules", req, cb)
  }

  /**
   * 创建安全策略
   */
  async CreateSecurityPolicy(
    req: CreateSecurityPolicyRequest,
    cb?: (error: string, rep: CreateSecurityPolicyResponse) => void
  ): Promise<CreateSecurityPolicyResponse> {
    return this.request("CreateSecurityPolicy", req, cb)
  }

  /**
   * 该接口（DeleteRule）用于删除HTTP/HTTPS监听器的转发规则。
   */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 该接口（CreateRule）用于创建HTTP/HTTPS监听器转发规则。
   */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 本接口（ModifyDomain）用于监听器下的域名。当通道版本为3.0时，支持对该域名所对应的证书修改。
   */
  async ModifyDomain(
    req: ModifyDomainRequest,
    cb?: (error: string, rep: ModifyDomainResponse) => void
  ): Promise<ModifyDomainResponse> {
    return this.request("ModifyDomain", req, cb)
  }

  /**
   * 该接口（OpenProxies）用于开启一条或者多条通道。
   */
  async OpenProxies(
    req: OpenProxiesRequest,
    cb?: (error: string, rep: OpenProxiesResponse) => void
  ): Promise<OpenProxiesResponse> {
    return this.request("OpenProxies", req, cb)
  }

  /**
   * 本接口（ModifyUDPListenerAttribute）用于修改通道实例下UDP监听器配置，包括监听器名称和调度策略的修改。
   */
  async ModifyUDPListenerAttribute(
    req: ModifyUDPListenerAttributeRequest,
    cb?: (error: string, rep: ModifyUDPListenerAttributeResponse) => void
  ): Promise<ModifyUDPListenerAttributeResponse> {
    return this.request("ModifyUDPListenerAttribute", req, cb)
  }

  /**
   * 本接口（DescribeProxyGroupDetails）用于查询通道组详情。
   */
  async DescribeProxyGroupDetails(
    req: DescribeProxyGroupDetailsRequest,
    cb?: (error: string, rep: DescribeProxyGroupDetailsResponse) => void
  ): Promise<DescribeProxyGroupDetailsResponse> {
    return this.request("DescribeProxyGroupDetails", req, cb)
  }

  /**
   * 本接口（DescribeProxies）用于查询通道实例列表。
   */
  async DescribeProxies(
    req: DescribeProxiesRequest,
    cb?: (error: string, rep: DescribeProxiesResponse) => void
  ): Promise<DescribeProxiesResponse> {
    return this.request("DescribeProxies", req, cb)
  }

  /**
   * 本接口（DeleteProxyGroup）用于删除通道组。
   */
  async DeleteProxyGroup(
    req: DeleteProxyGroupRequest,
    cb?: (error: string, rep: DeleteProxyGroupResponse) => void
  ): Promise<DeleteProxyGroupResponse> {
    return this.request("DeleteProxyGroup", req, cb)
  }

  /**
   * 本接口（ModifyProxiesProject）用于修改通道所属项目。
   */
  async ModifyProxiesProject(
    req: ModifyProxiesProjectRequest,
    cb?: (error: string, rep: ModifyProxiesProjectResponse) => void
  ): Promise<ModifyProxiesProjectResponse> {
    return this.request("ModifyProxiesProject", req, cb)
  }

  /**
   * 添加源站(服务器)信息，支持IP或域名
   */
  async AddRealServers(
    req: AddRealServersRequest,
    cb?: (error: string, rep: AddRealServersResponse) => void
  ): Promise<AddRealServersResponse> {
    return this.request("AddRealServers", req, cb)
  }

  /**
     * 本接口（CreateDomain）用于创建HTTP/HTTPS监听器的访问域名，客户端请求通过访问该域名来请求后端业务。
该接口仅支持version3.0的通道。
     */
  async CreateDomain(
    req: CreateDomainRequest,
    cb?: (error: string, rep: CreateDomainResponse) => void
  ): Promise<CreateDomainResponse> {
    return this.request("CreateDomain", req, cb)
  }

  /**
   * 本接口（DescribeCertificateDetail）用于查询证书详情，包括证书ID，证书名字，证书类型，证书内容以及密钥等信息。
   */
  async DescribeCertificateDetail(
    req: DescribeCertificateDetailRequest,
    cb?: (error: string, rep: DescribeCertificateDetailResponse) => void
  ): Promise<DescribeCertificateDetailResponse> {
    return this.request("DescribeCertificateDetail", req, cb)
  }

  /**
     * 产品功能已下线，下线对应的api接口

本接口（DescribeFirstLinkSession）用于查询接入段加速会话状态，包括会话状态，生效时长，加速套餐等信息。
     */
  async DescribeFirstLinkSession(
    req: DescribeFirstLinkSessionRequest,
    cb?: (error: string, rep: DescribeFirstLinkSessionResponse) => void
  ): Promise<DescribeFirstLinkSessionResponse> {
    return this.request("DescribeFirstLinkSession", req, cb)
  }

  /**
   * 查询异步任务执行状态
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
  }

  /**
     * 产品功能已下线，下线对应的api接口

本接口（DeleteFirstLinkSession）用于删除接入段加速会话，删除加速会话后会停止加速。
     */
  async DeleteFirstLinkSession(
    req: DeleteFirstLinkSessionRequest,
    cb?: (error: string, rep: DeleteFirstLinkSessionResponse) => void
  ): Promise<DeleteFirstLinkSessionResponse> {
    return this.request("DeleteFirstLinkSession", req, cb)
  }

  /**
   * 暂停域名解析
   */
  async DisableGlobalDomain(
    req: DisableGlobalDomainRequest,
    cb?: (error: string, rep: DisableGlobalDomainResponse) => void
  ): Promise<DisableGlobalDomainResponse> {
    return this.request("DisableGlobalDomain", req, cb)
  }

  /**
   * 该接口（DescribeRegionAndPrice）用于获取源站区域和带宽梯度价格
   */
  async DescribeRegionAndPrice(
    req: DescribeRegionAndPriceRequest,
    cb?: (error: string, rep: DescribeRegionAndPriceResponse) => void
  ): Promise<DescribeRegionAndPriceResponse> {
    return this.request("DescribeRegionAndPrice", req, cb)
  }

  /**
   * 查询域名列表
   */
  async DescribeGlobalDomains(
    req: DescribeGlobalDomainsRequest,
    cb?: (error: string, rep: DescribeGlobalDomainsResponse) => void
  ): Promise<DescribeGlobalDomainsResponse> {
    return this.request("DescribeGlobalDomains", req, cb)
  }

  /**
   * 本接口（DescribeRealServersStatus）用于查询源站是否已被规则或者监听器绑定
   */
  async DescribeRealServersStatus(
    req: DescribeRealServersStatusRequest,
    cb?: (error: string, rep: DescribeRealServersStatusResponse) => void
  ): Promise<DescribeRealServersStatusResponse> {
    return this.request("DescribeRealServersStatus", req, cb)
  }

  /**
   * 本接口（DescribeRules）用于查询监听器下的所有规则信息，包括规则域名，路径以及该规则下所绑定的源站列表。当通道版本为3.0时，该接口会返回该域名对应的高级认证配置信息。
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
   * 开启域名解析
   */
  async EnableGlobalDomain(
    req: EnableGlobalDomainRequest,
    cb?: (error: string, rep: EnableGlobalDomainResponse) => void
  ): Promise<EnableGlobalDomainResponse> {
    return this.request("EnableGlobalDomain", req, cb)
  }

  /**
   * 该接口（DescribeListenerRealServers）用于查询TCP/UDP监听器源站列表，包括该监听器已经绑定的源站列表以及可以绑定的源站列表。
   */
  async DescribeListenerRealServers(
    req: DescribeListenerRealServersRequest,
    cb?: (error: string, rep: DescribeListenerRealServersResponse) => void
  ): Promise<DescribeListenerRealServersResponse> {
    return this.request("DescribeListenerRealServers", req, cb)
  }

  /**
   * 本接口（SetAuthentication）用于通道的高级认证配置，包括认证方式选择，以及各种认证方式对应的证书选择。仅支持Version3.0的通道。
   */
  async SetAuthentication(
    req: SetAuthenticationRequest,
    cb?: (error: string, rep: SetAuthenticationResponse) => void
  ): Promise<SetAuthenticationResponse> {
    return this.request("SetAuthentication", req, cb)
  }

  /**
   * 该接口（CreateHTTPSListener）用于在通道实例下创建HTTPS协议类型的监听器。
   */
  async CreateHTTPSListener(
    req: CreateHTTPSListenerRequest,
    cb?: (error: string, rep: CreateHTTPSListenerResponse) => void
  ): Promise<CreateHTTPSListenerResponse> {
    return this.request("CreateHTTPSListener", req, cb)
  }

  /**
   * 本接口(CheckProxyCreate)用于查询能否创建指定配置的加速通道。
   */
  async CheckProxyCreate(
    req: CheckProxyCreateRequest,
    cb?: (error: string, rep: CheckProxyCreateResponse) => void
  ): Promise<CheckProxyCreateResponse> {
    return this.request("CheckProxyCreate", req, cb)
  }

  /**
   * 该接口（OpenProxyGroup）用于开启一条通道组中的所有通道
   */
  async OpenProxyGroup(
    req: OpenProxyGroupRequest,
    cb?: (error: string, rep: OpenProxyGroupResponse) => void
  ): Promise<OpenProxyGroupResponse> {
    return this.request("OpenProxyGroup", req, cb)
  }

  /**
   * 本接口（DescribeAccessRegions）用于查询加速区域，即客户端接入区域。
   */
  async DescribeAccessRegions(
    req?: DescribeAccessRegionsRequest,
    cb?: (error: string, rep: DescribeAccessRegionsResponse) => void
  ): Promise<DescribeAccessRegionsResponse> {
    return this.request("DescribeAccessRegions", req, cb)
  }

  /**
   * 本接口（ModifyRuleAttribute）用于修改转发规则的信息，包括健康检查的配置以及转发策略。
   */
  async ModifyRuleAttribute(
    req: ModifyRuleAttributeRequest,
    cb?: (error: string, rep: ModifyRuleAttributeResponse) => void
  ): Promise<ModifyRuleAttributeResponse> {
    return this.request("ModifyRuleAttribute", req, cb)
  }

  /**
   * 本接口（DescribeGroupDomainConfig）用于获取通道组域名解析配置详情。
   */
  async DescribeGroupDomainConfig(
    req: DescribeGroupDomainConfigRequest,
    cb?: (error: string, rep: DescribeGroupDomainConfigResponse) => void
  ): Promise<DescribeGroupDomainConfigResponse> {
    return this.request("DescribeGroupDomainConfig", req, cb)
  }

  /**
   * 本接口（ModifyProxiesAttribute）用于修改实例的属性（目前只支持修改通道的名称）。
   */
  async ModifyProxiesAttribute(
    req: ModifyProxiesAttributeRequest,
    cb?: (error: string, rep: ModifyProxiesAttributeResponse) => void
  ): Promise<ModifyProxiesAttributeResponse> {
    return this.request("ModifyProxiesAttribute", req, cb)
  }

  /**
   * 该接口（ModifyHTTPSListenerAttribute）用于修改HTTPS监听器配置，当前不支持通道组和v1版本通道。
   */
  async ModifyHTTPSListenerAttribute(
    req: ModifyHTTPSListenerAttributeRequest,
    cb?: (error: string, rep: ModifyHTTPSListenerAttributeResponse) => void
  ): Promise<ModifyHTTPSListenerAttributeResponse> {
    return this.request("ModifyHTTPSListenerAttribute", req, cb)
  }

  /**
   * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300秒, 3600秒和86400秒的细粒度，取值为细粒度范围内最大值。
   */
  async DescribeListenerStatistics(
    req: DescribeListenerStatisticsRequest,
    cb?: (error: string, rep: DescribeListenerStatisticsResponse) => void
  ): Promise<DescribeListenerStatisticsResponse> {
    return this.request("DescribeListenerStatistics", req, cb)
  }

  /**
   * 该接口（DeleteListeners）用于批量删除通道或通道组的监听器，包括4/7层监听器。
   */
  async DeleteListeners(
    req: DeleteListenersRequest,
    cb?: (error: string, rep: DeleteListenersResponse) => void
  ): Promise<DeleteListenersResponse> {
    return this.request("DeleteListeners", req, cb)
  }

  /**
   * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发，丢包和时延数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
   */
  async DescribeProxyStatistics(
    req: DescribeProxyStatisticsRequest,
    cb?: (error: string, rep: DescribeProxyStatisticsResponse) => void
  ): Promise<DescribeProxyStatisticsResponse> {
    return this.request("DescribeProxyStatistics", req, cb)
  }

  /**
   * 查询目前定制域名的错误响应
   */
  async DescribeDomainErrorPageInfo(
    req: DescribeDomainErrorPageInfoRequest,
    cb?: (error: string, rep: DescribeDomainErrorPageInfoResponse) => void
  ): Promise<DescribeDomainErrorPageInfoResponse> {
    return this.request("DescribeDomainErrorPageInfo", req, cb)
  }

  /**
   * 为了防止在下单、询价、后付费开通等过程中确保来源合法以及订单参数没有被篡改过，各个业务方使用下单、询价等场景需调用计费签名接口获取签名，获取签名的请求需带上签名以验证身份，本接口可以获取计费签名。
   */
  async DescribeAuthSignature(
    req?: DescribeAuthSignatureRequest,
    cb?: (error: string, rep: DescribeAuthSignatureResponse) => void
  ): Promise<DescribeAuthSignatureResponse> {
    return this.request("DescribeAuthSignature", req, cb)
  }

  /**
   * 本接口（BanAndRecoverProxy）用于联通封禁解封GAAP跨境通道实例，支持按照客户UIN维度下发请求。被封禁的实例带宽上限将会被限制到0Mbps，无法正常处理客户端和源站之间的请求。
   */
  async BanAndRecoverProxy(
    req?: BanAndRecoverProxyRequest,
    cb?: (error: string, rep: BanAndRecoverProxyResponse) => void
  ): Promise<BanAndRecoverProxyResponse> {
    return this.request("BanAndRecoverProxy", req, cb)
  }

  /**
   * 本接口（ModifyProxyGroupAttribute）用于修改通道组属性，目前仅支持修改通道组名称与项目ID。
   */
  async ModifyProxyGroupAttribute(
    req: ModifyProxyGroupAttributeRequest,
    cb?: (error: string, rep: ModifyProxyGroupAttributeResponse) => void
  ): Promise<ModifyProxyGroupAttributeResponse> {
    return this.request("ModifyProxyGroupAttribute", req, cb)
  }

  /**
   * 本接口（InquiryPriceCreateProxy）用于创建加速通道询价。
   */
  async InquiryPriceCreateProxy(
    req: InquiryPriceCreateProxyRequest,
    cb?: (error: string, rep: InquiryPriceCreateProxyResponse) => void
  ): Promise<InquiryPriceCreateProxyResponse> {
    return this.request("InquiryPriceCreateProxy", req, cb)
  }

  /**
   * 创建域名解析记录
   */
  async CreateGlobalDomainDns(
    req: CreateGlobalDomainDnsRequest,
    cb?: (error: string, rep: CreateGlobalDomainDnsResponse) => void
  ): Promise<CreateGlobalDomainDnsResponse> {
    return this.request("CreateGlobalDomainDns", req, cb)
  }

  /**
   * 修改安全策略规则名
   */
  async ModifySecurityRule(
    req: ModifySecurityRuleRequest,
    cb?: (error: string, rep: ModifySecurityRuleResponse) => void
  ): Promise<ModifySecurityRuleResponse> {
    return this.request("ModifySecurityRule", req, cb)
  }

  /**
   * 本接口（CloseProxies）用于关闭通道。通道关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
   */
  async CloseProxies(
    req: CloseProxiesRequest,
    cb?: (error: string, rep: CloseProxiesResponse) => void
  ): Promise<CloseProxiesResponse> {
    return this.request("CloseProxies", req, cb)
  }

  /**
   * 根据定制错误ID查询错误响应
   */
  async DescribeDomainErrorPageInfoByIds(
    req: DescribeDomainErrorPageInfoByIdsRequest,
    cb?: (error: string, rep: DescribeDomainErrorPageInfoByIdsResponse) => void
  ): Promise<DescribeDomainErrorPageInfoByIdsResponse> {
    return this.request("DescribeDomainErrorPageInfoByIds", req, cb)
  }

  /**
   * 本接口（DescribeProxiesStatus）用于查询通道状态列表。
   */
  async DescribeProxiesStatus(
    req: DescribeProxiesStatusRequest,
    cb?: (error: string, rep: DescribeProxiesStatusResponse) => void
  ): Promise<DescribeProxiesStatusResponse> {
    return this.request("DescribeProxiesStatus", req, cb)
  }

  /**
   * 该接口（CreateTCPListeners）用于批量创建单通道或者通道组的TCP协议类型的监听器。
   */
  async CreateTCPListeners(
    req: CreateTCPListenersRequest,
    cb?: (error: string, rep: CreateTCPListenersResponse) => void
  ): Promise<CreateTCPListenersResponse> {
    return this.request("CreateTCPListeners", req, cb)
  }

  /**
   * 该接口用于7层监听器的转发规则绑定源站。注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。
   */
  async BindRuleRealServers(
    req: BindRuleRealServersRequest,
    cb?: (error: string, rep: BindRuleRealServersResponse) => void
  ): Promise<BindRuleRealServersResponse> {
    return this.request("BindRuleRealServers", req, cb)
  }

  /**
   * 本接口（DescribeResourcesByTag）用于根据标签来查询对应的资源信息，包括通道，通道组和源站。
   */
  async DescribeResourcesByTag(
    req: DescribeResourcesByTagRequest,
    cb?: (error: string, rep: DescribeResourcesByTagResponse) => void
  ): Promise<DescribeResourcesByTagResponse> {
    return this.request("DescribeResourcesByTag", req, cb)
  }
}
