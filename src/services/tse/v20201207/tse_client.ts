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
  DescribeNacosReplicasRequest,
  DeleteWafDomainsRequest,
  DescribeCloudNativeAPIGatewayNodesRequest,
  GovernanceAlias,
  DescribeCloudNativeAPIGatewayUpstreamRequest,
  Metadata,
  DescribeUpstreamHealthCheckConfigRequest,
  KeyValue,
  CreateNativeGatewayServerGroupRequest,
  DescribeCloudNativeAPIGatewayCertificatesRequest,
  DeleteCloudNativeAPIGatewayResult,
  CloseWafProtectionRequest,
  DescribeCloudNativeAPIGatewayNodesResponse,
  CreateCloudNativeAPIGatewayResponse,
  DescribeUpstreamHealthCheckConfigResponse,
  NetworkAccessControl,
  DescribePublicNetworkResult,
  NativeGatewayServiceSourceItem,
  CreateNativeGatewayServiceSourceResponse,
  CreateCloudNativeAPIGatewayServiceRequest,
  ModifyConsoleNetworkRequest,
  PublicAddressConfig,
  DescribeCloudNativeAPIGatewayServicesRequest,
  CreateCloudNativeAPIGatewayCanaryRuleResponse,
  DeleteGovernanceNamespacesResponse,
  DescribeCloudNativeAPIGatewayRoutesResponse,
  DescribeWafProtectionResponse,
  DescribeZookeeperReplicasRequest,
  DescribeAutoScalerResourceStrategiesResponse,
  DescribeCloudNativeAPIGatewayResult,
  PolarisCLSTopicInfo,
  DeleteCloudNativeAPIGatewayRouteResponse,
  DeleteCloudNativeAPIGatewayServiceRateLimitRequest,
  CloudAPIGatewayCanaryRuleList,
  ModifyUpstreamNodeStatusRequest,
  CloudNativeAPIGatewayRateLimitDetail,
  DescribeConfigFileReleaseRequest,
  DescribeCloudNativeAPIGatewayConfigRequest,
  KongTarget,
  SourceInstanceAuth,
  AutoScalerPolicy,
  DescribeNacosServerInterfacesResponse,
  KVMapping,
  CloudNativeAPIGatewayStrategyCronScalerConfigParam,
  EnvInfo,
  DeleteGovernanceInstancesRequest,
  ConfigFileTemplate,
  CloudNativeAPIGatewayStrategy,
  UpdateEngineInternetAccessResponse,
  DeleteCloudNativeAPIGatewayRouteRateLimitRequest,
  AutoScalerBehavior,
  ListFilter,
  CreateCloudNativeAPIGatewayPublicNetworkResponse,
  ModifyGovernanceServicesRequest,
  DescribeConfigFileReleasesResponse,
  DeleteCloudNativeAPIGatewayServiceRateLimitResponse,
  CreateGovernanceServicesRequest,
  ModifyCloudNativeAPIGatewayServiceRateLimitRequest,
  NativeGatewayServerGroup,
  ModifyNetworkAccessStrategyResponse,
  RestartSREInstanceRequest,
  UnbindAutoScalerResourceStrategyFromGroupsRequest,
  DeleteCloudNativeAPIGatewayPublicNetworkRequest,
  ReleaseVersion,
  PolarisLimiterAddress,
  CreateGovernanceAliasRequest,
  ModifyCloudNativeAPIGatewayServiceRequest,
  DescribeAutoScalerResourceStrategyBindingGroupsRequest,
  DescribeConfigFilesByGroupResponse,
  DescribeWafProtectionRequest,
  DescribeAutoScalerResourceStrategiesRequest,
  RuleFilter,
  DescribeGovernanceInstancesRequest,
  DescribeGovernanceServiceContractsRequest,
  GovernanceInstanceUpdate,
  InternetConfig,
  KongUpstreamList,
  DescribeConfigFilesRequest,
  DeleteCloudNativeAPIGatewayRouteRequest,
  DescribeConfigFileReleasesRequest,
  ModifyCloudNativeAPIGatewayServiceRateLimitResponse,
  CloudNativeAPIGatewayStrategyAutoScalerConfig,
  CloudNativeAPIGatewayCanaryRuleCondition,
  DescribeGovernanceNamespacesRequest,
  DescribeSREInstancesResponse,
  AutoScalerRules,
  GovernanceInterfaceDescription,
  CreateCloudNativeAPIGatewayServiceRateLimitRequest,
  ModifyNativeGatewayServerGroupRequest,
  DescribeGatewayInstancePortResult,
  ModifyConsoleNetworkResponse,
  DescribeWafDomainsResponse,
  DescribeSREInstanceAccessAddressRequest,
  ModifyGovernanceInstancesResponse,
  DeleteCloudNativeAPIGatewayPublicNetworkResponse,
  CreateOrUpdateConfigFileAndReleaseRequest,
  ApolloEnvParam,
  DeleteNativeGatewayServiceSourceResponse,
  DescribeCloudNativeAPIGatewayServiceRateLimitRequest,
  CloudNativeAPIGatewayBalancedService,
  DescribeConfigFileGroupsResponse,
  CloudNativeAPIGatewayStrategyCronScalerConfig,
  UpdateEngineInternetAccessRequest,
  DeleteNativeGatewayServerGroupResponse,
  ModifyCloudNativeAPIGatewayCertificateResponse,
  DescribeSREInstanceAccessAddressResponse,
  CreateConfigFileRequest,
  DescribeConfigFilesResponse,
  DescribeCloudNativeAPIGatewayServicesResponse,
  CreateNativeGatewayServiceSourceRequest,
  QpsThreshold,
  GovernanceServiceInput,
  VpcInfo,
  ConfigFile,
  ModifyNativeGatewayServiceSourceRequest,
  KongActiveHealthCheck,
  ModifyCloudNativeAPIGatewayCanaryRuleResponse,
  KongServicePreview,
  NacosServerInterface,
  InstanceTagInfo,
  UnbindAutoScalerResourceStrategyFromGroupsResponse,
  UpdateUpstreamTargetsResponse,
  CreateWafDomainsRequest,
  DescribeGovernanceServiceContractVersionsRequest,
  DescribeCloudNativeAPIGatewayCertificatesResponse,
  KongUpstreamPreview,
  KongCertificate,
  SourceInfo,
  DeleteGovernanceInstancesResponse,
  DescribeWafDomainsResult,
  BindAutoScalerResourceStrategyToGroupsResponse,
  ModifyConfigFilesRequest,
  ModifyGovernanceAliasRequest,
  ModifyNetworkAccessStrategyRequest,
  CreateCloudNativeAPIGatewayRouteRateLimitRequest,
  EnvAddressInfo,
  ModifyCloudNativeAPIGatewayRouteResponse,
  KongCertificatesPreview,
  ConfigFileRelease,
  KongRoutePreview,
  DescribeInstanceRegionInfo,
  GovernanceServiceContract,
  CreateGovernanceInstancesRequest,
  BindAutoScalerResourceStrategyToGroupsRequest,
  DeleteCloudNativeAPIGatewayCertificateRequest,
  LimitRule,
  ModifyAutoScalerResourceStrategyResponse,
  CreateCloudNativeAPIGatewayCertificateResponse,
  StorageOption,
  DescribeCloudNativeAPIGatewayRouteRateLimitRequest,
  UpdateUpstreamHealthCheckConfigRequest,
  DescribeConfigFileResponse,
  AccurateQpsThreshold,
  ZookeeperRegionMyIdInfo,
  UpdateCloudNativeAPIGatewaySpecResponse,
  CloudNativeAPIGatewayConfig,
  DescribeNativeGatewayServerGroupsRequest,
  RouteWafStatus,
  DescribePublicNetworkRequest,
  DescribeGovernanceNamespacesResponse,
  DescribeConfigFilesByGroupRequest,
  DeleteGovernanceInstancesByHostResponse,
  EngineAdmin,
  DescribeGovernanceAliasesResponse,
  ServiceWafStatus,
  DeleteCloudNativeAPIGatewayResponse,
  CreateCloudNativeAPIGatewayCertificateRequest,
  ModifyCloudNativeAPIGatewayResponse,
  CreateCloudNativeAPIGatewayPublicNetworkRequest,
  UpdateCloudNativeAPIGatewayResult,
  ModifyGovernanceNamespacesRequest,
  SourceInstanceVpcInfo,
  ModifyConfigFileGroupResponse,
  DescribeAllConfigFileTemplatesRequest,
  RateLimitResponse,
  RollbackConfigFileReleasesRequest,
  DescribeCloudNativeAPIGatewayInfoByIpResponse,
  CloudNativeAPIGatewayCanaryRule,
  PublishConfigFilesResponse,
  UpdateCloudNativeAPIGatewayCertificateInfoRequest,
  BoundK8SInfo,
  DescribeCloudNativeAPIGatewayCertificateDetailsRequest,
  GovernanceInstanceInput,
  CreateNativeGatewayServerGroupResponse,
  DeleteConfigFileReleasesResponse,
  ModifyGovernanceInstancesRequest,
  GovernanceNamespace,
  DeleteCloudNativeAPIGatewayCanaryRuleResponse,
  UpdateCloudNativeAPIGatewayCertificateInfoResponse,
  ModifyNetworkBasicInfoResponse,
  DescribeCloudNativeAPIGatewayResponse,
  CreateCloudNativeAPIGatewayRequest,
  CloudNativeAPIGatewayStrategyBindingGroupInfo,
  DescribeGovernanceServiceContractVersionsResponse,
  ModifyConfigFilesResponse,
  DescribeAllConfigFileTemplatesResponse,
  ConfigFileGroupTag,
  DescribeConfigFileReleaseVersionsRequest,
  GovernanceServiceContractVersion,
  ModifyCloudNativeAPIGatewayRouteRateLimitRequest,
  ExternalRedis,
  ModifyCloudNativeAPIGatewayCertificateRequest,
  DeleteGovernanceAliasesResponse,
  GovernanceService,
  DeleteAutoScalerResourceStrategyRequest,
  NacosReplica,
  CreateGovernanceInstancesResponse,
  CreateGatewayServiceResult,
  DescribeInstanceInfoByIpResult,
  DeleteEngineResponse,
  Location,
  ModifyCloudNativeAPIGatewayCanaryRuleRequest,
  DescribeCloudNativeAPIGatewayPortsResponse,
  DeleteGovernanceNamespacesRequest,
  DescribeCloudNativeAPIGatewayConfigResponse,
  CreateCloudNativeAPIGatewayRouteResponse,
  DeleteConfigFilesResponse,
  EngineRegionInfo,
  ConfigFileReleaseDeletion,
  CreateCloudNativeAPIGatewayServiceRateLimitResponse,
  DescribeCloudNativeAPIGatewayServiceRateLimitResponse,
  ModifyGovernanceAliasResponse,
  ListCloudNativeAPIGatewayStrategyBindingGroupInfoResult,
  DeleteGovernanceInstancesByHostRequest,
  CreateCloudNativeAPIGatewayRouteRateLimitResponse,
  DescribeCloudNativeAPIGatewaysResponse,
  CreateGovernanceNamespacesResponse,
  UpstreamHealthCheckConfig,
  CreateConfigFileGroupRequest,
  ZookeeperReplica,
  DeleteAutoScalerResourceStrategyResponse,
  DescribeOneCloudNativeAPIGatewayServiceRequest,
  DeleteGovernanceAliasesRequest,
  CertificateInfo,
  DescribeWafDomainsRequest,
  ModifyUpstreamNodeStatusResponse,
  OpenWafProtectionResponse,
  DescribeCloudNativeAPIGatewayRouteRateLimitResponse,
  DescribeCloudNativeAPIGatewayRequest,
  DeleteConfigFileGroupRequest,
  KongCertificatesList,
  ListCloudNativeAPIGatewayStrategyResult,
  CreateCloudNativeAPIGatewayCanaryRuleRequest,
  OpenWafProtectionRequest,
  GovernanceInstance,
  DescribeCloudNativeAPIGatewayRoutesRequest,
  CreateEngineResponse,
  ConfigFileGroup,
  DescribeCloudNativeAPIGatewayNodesResult,
  DescribeNacosServerInterfacesRequest,
  KongUpstreamInfo,
  DescribeSREInstancesRequest,
  DescribeCloudNativeAPIGatewayInfoByIpRequest,
  DescribeZookeeperReplicasResponse,
  ModifyConfigFileGroupRequest,
  DescribePublicAddressConfigResponse,
  PublishConfigFilesRequest,
  DescribeConfigFileReleaseHistoriesRequest,
  ModifyCloudNativeAPIGatewayRequest,
  DescribeNativeGatewayServerGroupsResponse,
  ModifyNativeGatewayServerGroupResponse,
  ConfigFileTag,
  DescribeNativeGatewayServiceSourcesResponse,
  ListCloudNativeAPIGatewayResult,
  CreateCloudNativeAPIGatewayServiceResponse,
  DeleteCloudNativeAPIGatewayRouteRateLimitResponse,
  DescribeConfigFileGroupsRequest,
  CreateGovernanceNamespacesRequest,
  ModifyCloudNativeAPIGatewayRouteRequest,
  CreateGovernanceAliasResponse,
  CloudNativeAPIGatewayNodeConfig,
  DeleteConfigFileGroupResponse,
  ConfigFilePublishInfo,
  DescribeGovernanceAliasesRequest,
  ModifyCloudNativeAPIGatewayServiceResponse,
  DescribeAutoScalerResourceStrategyBindingGroupsResponse,
  DescribeInstanceTagInfosRequest,
  GovernanceNamespaceInput,
  DeleteGovernanceServicesResponse,
  DeleteCloudNativeAPIGatewayCertificateResponse,
  DeleteCloudNativeAPIGatewayCanaryRuleRequest,
  GatewayInstanceSchemeAndPorts,
  CreatePublicNetworkResult,
  DescribeNativeGatewayServiceSourcesRequest,
  CLBMultiRegion,
  CreateWafDomainsResponse,
  DescribePublicAddressConfigRequest,
  CreateConfigFileResponse,
  DescribeCloudNativeAPIGatewayUpstreamResponse,
  KVPair,
  UpdateUpstreamTargetsRequest,
  DeleteCloudNativeAPIGatewayServiceResponse,
  DescribeConfigFileRequest,
  InstancePort,
  DeleteNativeGatewayServerGroupRequest,
  RollbackConfigFileReleasesResponse,
  ConfigFileReleaseHistory,
  DeleteNativeGatewayServerGroupResult,
  ServiceGovernanceInfo,
  DescribeNacosReplicasResponse,
  KongPassiveHealthCheck,
  CloudNativeAPIGatewayVpcConfig,
  DescribeGovernanceInstancesResponse,
  ModifyGovernanceNamespacesResponse,
  DescribeCloudNativeAPIGatewaysRequest,
  DescribeCloudNativeAPIGatewayConfigResult,
  DeleteCloudNativeAPIGatewayServiceRequest,
  DescribePublicNetworkResponse,
  ZookeeperRegionInfo,
  DescribeInstanceTagInfosResponse,
  DeleteConfigFilesRequest,
  DescribeGovernanceServicesResponse,
  CloseWafProtectionResponse,
  CreateAutoScalerResourceStrategyResponse,
  UpdateCloudNativeAPIGatewaySpecRequest,
  DeleteEngineRequest,
  ModifyNetworkBasicInfoRequest,
  CloudNativeAPIGatewayStrategyAutoScalerConfigMetric,
  DescribeCloudNativeAPIGatewayCanaryRulesResponse,
  SREInstance,
  CloudNativeAPIGatewayNode,
  DescribeZookeeperServerInterfacesResponse,
  DescribeConfigFileReleaseVersionsResponse,
  DeleteCloudNativeAPIGatewayRequest,
  DescribeCloudNativeAPIGatewayCertificateDetailsResponse,
  CreateGovernanceServicesResponse,
  Filter,
  ModifyAutoScalerResourceStrategyRequest,
  CreateOrUpdateConfigFileAndReleaseResponse,
  DescribeOneCloudNativeAPIGatewayServiceResponse,
  DeleteNativeGatewayServiceSourceRequest,
  RestartSREInstanceResponse,
  DescribeZookeeperServerInterfacesRequest,
  DeleteGovernanceServicesRequest,
  ModifyGovernanceServicesResponse,
  DeleteConfigFileReleasesRequest,
  CreateAutoScalerResourceStrategyRequest,
  KongServices,
  ModifyNativeGatewayServiceSourceResponse,
  CreateCloudNativeAPIGatewayServerGroupResult,
  DescribeGovernanceServiceContractsResponse,
  UpdateUpstreamHealthCheckConfigResponse,
  KongServiceDetail,
  ZookeeperServerInterface,
  DescribePublicAddressConfigResult,
  CreateCloudNativeAPIGatewayRouteRequest,
  NativeGatewayServerGroups,
  CreateEngineRequest,
  KongServiceRouteList,
  DeleteWafDomainsResponse,
  CreateCloudNativeAPIGatewayResult,
  ModifyCloudNativeAPIGatewayRouteRateLimitResponse,
  DescribeConfigFileReleaseHistoriesResponse,
  DescribeCloudNativeAPIGatewayCanaryRulesRequest,
  CreateConfigFileGroupResponse,
  DescribeCloudNativeAPIGatewayPortsRequest,
  DescribeGovernanceServicesRequest,
  DescribeConfigFileReleaseResponse,
  DescribeWafProtectionResult,
} from "./tse_models"

/**
 * tse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tse.tencentcloudapi.com", "2020-12-07", clientConfig)
  }

  /**
   * 获取云原生网关服务详情
   */
  async DescribeOneCloudNativeAPIGatewayService(
    req: DescribeOneCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: DescribeOneCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<DescribeOneCloudNativeAPIGatewayServiceResponse> {
    return this.request("DescribeOneCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 修改引擎公网访问配置
   */
  async UpdateEngineInternetAccess(
    req: UpdateEngineInternetAccessRequest,
    cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void
  ): Promise<UpdateEngineInternetAccessResponse> {
    return this.request("UpdateEngineInternetAccess", req, cb)
  }

  /**
   * 查询云原生网关的限流插件(服务)
   */
  async DescribeCloudNativeAPIGatewayServiceRateLimit(
    req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("DescribeCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 更新云原生网关证书
   */
  async ModifyCloudNativeAPIGatewayCertificate(
    req: ModifyCloudNativeAPIGatewayCertificateRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCertificateResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayCertificateResponse> {
    return this.request("ModifyCloudNativeAPIGatewayCertificate", req, cb)
  }

  /**
   * 删除公网网络配置
   */
  async DeleteCloudNativeAPIGatewayPublicNetwork(
    req: DeleteCloudNativeAPIGatewayPublicNetworkRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayPublicNetworkResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayPublicNetworkResponse> {
    return this.request("DeleteCloudNativeAPIGatewayPublicNetwork", req, cb)
  }

  /**
   * 查询治理中心服务别名列表
   */
  async DescribeGovernanceAliases(
    req: DescribeGovernanceAliasesRequest,
    cb?: (error: string, rep: DescribeGovernanceAliasesResponse) => void
  ): Promise<DescribeGovernanceAliasesResponse> {
    return this.request("DescribeGovernanceAliases", req, cb)
  }

  /**
   * 删除配置文件分组
   */
  async DeleteConfigFileGroup(
    req: DeleteConfigFileGroupRequest,
    cb?: (error: string, rep: DeleteConfigFileGroupResponse) => void
  ): Promise<DeleteConfigFileGroupResponse> {
    return this.request("DeleteConfigFileGroup", req, cb)
  }

  /**
   * 创建服务治理中心配置文件组
   */
  async CreateConfigFileGroup(
    req: CreateConfigFileGroupRequest,
    cb?: (error: string, rep: CreateConfigFileGroupResponse) => void
  ): Promise<CreateConfigFileGroupResponse> {
    return this.request("CreateConfigFileGroup", req, cb)
  }

  /**
   * 删除引擎实例
   */
  async DeleteEngine(
    req: DeleteEngineRequest,
    cb?: (error: string, rep: DeleteEngineResponse) => void
  ): Promise<DeleteEngineResponse> {
    return this.request("DeleteEngine", req, cb)
  }

  /**
   * 修改治理中心服务
   */
  async ModifyGovernanceServices(
    req: ModifyGovernanceServicesRequest,
    cb?: (error: string, rep: ModifyGovernanceServicesResponse) => void
  ): Promise<ModifyGovernanceServicesResponse> {
    return this.request("ModifyGovernanceServices", req, cb)
  }

  /**
   * 获取云原生API网关实例列表
   */
  async DescribeCloudNativeAPIGateways(
    req: DescribeCloudNativeAPIGatewaysRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaysResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaysResponse> {
    return this.request("DescribeCloudNativeAPIGateways", req, cb)
  }

  /**
   * 创建云原生网关证书
   */
  async CreateCloudNativeAPIGatewayCertificate(
    req: CreateCloudNativeAPIGatewayCertificateRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayCertificateResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayCertificateResponse> {
    return this.request("CreateCloudNativeAPIGatewayCertificate", req, cb)
  }

  /**
   * 查询云原生网关服务列表
   */
  async DescribeCloudNativeAPIGatewayServices(
    req: DescribeCloudNativeAPIGatewayServicesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServicesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayServicesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayServices", req, cb)
  }

  /**
   * 修改云原生网关限流插件(路由)
   */
  async ModifyCloudNativeAPIGatewayRouteRateLimit(
    req: ModifyCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("ModifyCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 删除治理中心服务别名
   */
  async DeleteGovernanceAliases(
    req: DeleteGovernanceAliasesRequest,
    cb?: (error: string, rep: DeleteGovernanceAliasesResponse) => void
  ): Promise<DeleteGovernanceAliasesResponse> {
    return this.request("DeleteGovernanceAliases", req, cb)
  }

  /**
   * 查询Zookeeper类型注册引擎实例副本信息
   */
  async DescribeZookeeperReplicas(
    req: DescribeZookeeperReplicasRequest,
    cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void
  ): Promise<DescribeZookeeperReplicasResponse> {
    return this.request("DescribeZookeeperReplicas", req, cb)
  }

  /**
   * 删除服务实例
   */
  async DeleteGovernanceInstances(
    req: DeleteGovernanceInstancesRequest,
    cb?: (error: string, rep: DeleteGovernanceInstancesResponse) => void
  ): Promise<DeleteGovernanceInstancesResponse> {
    return this.request("DeleteGovernanceInstances", req, cb)
  }

  /**
   * 创建云原生网关的灰度规则
   */
  async CreateCloudNativeAPIGatewayCanaryRule(
    req: CreateCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("CreateCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 获取 WAF 防护域名
   */
  async DescribeWafDomains(
    req: DescribeWafDomainsRequest,
    cb?: (error: string, rep: DescribeWafDomainsResponse) => void
  ): Promise<DescribeWafDomainsResponse> {
    return this.request("DescribeWafDomains", req, cb)
  }

  /**
   * 查询云原生网关单个证书详情
   */
  async DescribeCloudNativeAPIGatewayCertificateDetails(
    req: DescribeCloudNativeAPIGatewayCertificateDetailsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificateDetailsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayCertificateDetailsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayCertificateDetails", req, cb)
  }

  /**
   * 查看弹性伸缩策略列表
   */
  async DescribeAutoScalerResourceStrategies(
    req: DescribeAutoScalerResourceStrategiesRequest,
    cb?: (error: string, rep: DescribeAutoScalerResourceStrategiesResponse) => void
  ): Promise<DescribeAutoScalerResourceStrategiesResponse> {
    return this.request("DescribeAutoScalerResourceStrategies", req, cb)
  }

  /**
   * 修改网关服务来源
   */
  async ModifyNativeGatewayServiceSource(
    req: ModifyNativeGatewayServiceSourceRequest,
    cb?: (error: string, rep: ModifyNativeGatewayServiceSourceResponse) => void
  ): Promise<ModifyNativeGatewayServiceSourceResponse> {
    return this.request("ModifyNativeGatewayServiceSource", req, cb)
  }

  /**
   * 修改云原生API网关实例网络基本信息，例如带宽以及描述，只支持修改客户端公网/内网的信息。
   */
  async ModifyNetworkBasicInfo(
    req: ModifyNetworkBasicInfoRequest,
    cb?: (error: string, rep: ModifyNetworkBasicInfoResponse) => void
  ): Promise<ModifyNetworkBasicInfoResponse> {
    return this.request("ModifyNetworkBasicInfo", req, cb)
  }

  /**
   * 删除云原生网关证书
   */
  async DeleteCloudNativeAPIGatewayCertificate(
    req: DeleteCloudNativeAPIGatewayCertificateRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCertificateResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayCertificateResponse> {
    return this.request("DeleteCloudNativeAPIGatewayCertificate", req, cb)
  }

  /**
   * 查询服务契约定义列表
   */
  async DescribeGovernanceServiceContracts(
    req: DescribeGovernanceServiceContractsRequest,
    cb?: (error: string, rep: DescribeGovernanceServiceContractsResponse) => void
  ): Promise<DescribeGovernanceServiceContractsResponse> {
    return this.request("DescribeGovernanceServiceContracts", req, cb)
  }

  /**
   * 修改云原生网关证书信息
   */
  async UpdateCloudNativeAPIGatewayCertificateInfo(
    req: UpdateCloudNativeAPIGatewayCertificateInfoRequest,
    cb?: (error: string, rep: UpdateCloudNativeAPIGatewayCertificateInfoResponse) => void
  ): Promise<UpdateCloudNativeAPIGatewayCertificateInfoResponse> {
    return this.request("UpdateCloudNativeAPIGatewayCertificateInfo", req, cb)
  }

  /**
   * 获取全量配置文件模板列表
   */
  async DescribeAllConfigFileTemplates(
    req: DescribeAllConfigFileTemplatesRequest,
    cb?: (error: string, rep: DescribeAllConfigFileTemplatesResponse) => void
  ): Promise<DescribeAllConfigFileTemplatesResponse> {
    return this.request("DescribeAllConfigFileTemplates", req, cb)
  }

  /**
   * 创建云原生网关引擎分组
   */
  async CreateNativeGatewayServerGroup(
    req: CreateNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: CreateNativeGatewayServerGroupResponse) => void
  ): Promise<CreateNativeGatewayServerGroupResponse> {
    return this.request("CreateNativeGatewayServerGroup", req, cb)
  }

  /**
   * 删除云原生网关的限流插件(服务)
   */
  async DeleteCloudNativeAPIGatewayServiceRateLimit(
    req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("DeleteCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 查询zookeeper服务接口列表
   */
  async DescribeZookeeperServerInterfaces(
    req: DescribeZookeeperServerInterfacesRequest,
    cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void
  ): Promise<DescribeZookeeperServerInterfacesResponse> {
    return this.request("DescribeZookeeperServerInterfaces", req, cb)
  }

  /**
   * 删除配置文件
   */
  async DeleteConfigFiles(
    req: DeleteConfigFilesRequest,
    cb?: (error: string, rep: DeleteConfigFilesResponse) => void
  ): Promise<DeleteConfigFilesResponse> {
    return this.request("DeleteConfigFiles", req, cb)
  }

  /**
   * 更新弹性伸缩策略
   */
  async ModifyAutoScalerResourceStrategy(
    req: ModifyAutoScalerResourceStrategyRequest,
    cb?: (error: string, rep: ModifyAutoScalerResourceStrategyResponse) => void
  ): Promise<ModifyAutoScalerResourceStrategyResponse> {
    return this.request("ModifyAutoScalerResourceStrategy", req, cb)
  }

  /**
   * 查看实例的标签信息
   */
  async DescribeInstanceTagInfos(
    req: DescribeInstanceTagInfosRequest,
    cb?: (error: string, rep: DescribeInstanceTagInfosResponse) => void
  ): Promise<DescribeInstanceTagInfosResponse> {
    return this.request("DescribeInstanceTagInfos", req, cb)
  }

  /**
   * 发布配置文件
   */
  async PublishConfigFiles(
    req: PublishConfigFilesRequest,
    cb?: (error: string, rep: PublishConfigFilesResponse) => void
  ): Promise<PublishConfigFilesResponse> {
    return this.request("PublishConfigFiles", req, cb)
  }

  /**
   * 删除治理中心服务
   */
  async DeleteGovernanceServices(
    req: DeleteGovernanceServicesRequest,
    cb?: (error: string, rep: DeleteGovernanceServicesResponse) => void
  ): Promise<DeleteGovernanceServicesResponse> {
    return this.request("DeleteGovernanceServices", req, cb)
  }

  /**
   * 根据命名空间、组、名字查找配置文件
   */
  async DescribeConfigFile(
    req: DescribeConfigFileRequest,
    cb?: (error: string, rep: DescribeConfigFileResponse) => void
  ): Promise<DescribeConfigFileResponse> {
    return this.request("DescribeConfigFile", req, cb)
  }

  /**
   * 查询配置版本列表
   */
  async DescribeConfigFileReleases(
    req: DescribeConfigFileReleasesRequest,
    cb?: (error: string, rep: DescribeConfigFileReleasesResponse) => void
  ): Promise<DescribeConfigFileReleasesResponse> {
    return this.request("DescribeConfigFileReleases", req, cb)
  }

  /**
   * 关闭 WAF 防护
   */
  async CloseWafProtection(
    req: CloseWafProtectionRequest,
    cb?: (error: string, rep: CloseWafProtectionResponse) => void
  ): Promise<CloseWafProtectionResponse> {
    return this.request("CloseWafProtection", req, cb)
  }

  /**
   * 创建云原生API网关实例
   */
  async CreateCloudNativeAPIGateway(
    req: CreateCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayResponse> {
    return this.request("CreateCloudNativeAPIGateway", req, cb)
  }

  /**
   * 查询云原生网关的限流插件(路由)
   */
  async DescribeCloudNativeAPIGatewayRouteRateLimit(
    req: DescribeCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("DescribeCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 修改云原生网关服务
   */
  async ModifyCloudNativeAPIGatewayService(
    req: ModifyCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayServiceResponse> {
    return this.request("ModifyCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 查看弹性伸缩策略绑定的网关分组
   */
  async DescribeAutoScalerResourceStrategyBindingGroups(
    req: DescribeAutoScalerResourceStrategyBindingGroupsRequest,
    cb?: (error: string, rep: DescribeAutoScalerResourceStrategyBindingGroupsResponse) => void
  ): Promise<DescribeAutoScalerResourceStrategyBindingGroupsResponse> {
    return this.request("DescribeAutoScalerResourceStrategyBindingGroups", req, cb)
  }

  /**
   * 获取配置文件发布
   */
  async DescribeConfigFileRelease(
    req: DescribeConfigFileReleaseRequest,
    cb?: (error: string, rep: DescribeConfigFileReleaseResponse) => void
  ): Promise<DescribeConfigFileReleaseResponse> {
    return this.request("DescribeConfigFileRelease", req, cb)
  }

  /**
   * 查询服务治理中心命名空间列表
   */
  async DescribeGovernanceNamespaces(
    req: DescribeGovernanceNamespacesRequest,
    cb?: (error: string, rep: DescribeGovernanceNamespacesResponse) => void
  ): Promise<DescribeGovernanceNamespacesResponse> {
    return this.request("DescribeGovernanceNamespaces", req, cb)
  }

  /**
   * 删除治理中心服务实例
   */
  async DeleteGovernanceInstancesByHost(
    req: DeleteGovernanceInstancesByHostRequest,
    cb?: (error: string, rep: DeleteGovernanceInstancesByHostResponse) => void
  ): Promise<DeleteGovernanceInstancesByHostResponse> {
    return this.request("DeleteGovernanceInstancesByHost", req, cb)
  }

  /**
   * 创建云原生网关路由
   */
  async CreateCloudNativeAPIGatewayRoute(
    req: CreateCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayRouteResponse> {
    return this.request("CreateCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 创建服务实例
   */
  async CreateGovernanceInstances(
    req: CreateGovernanceInstancesRequest,
    cb?: (error: string, rep: CreateGovernanceInstancesResponse) => void
  ): Promise<CreateGovernanceInstancesResponse> {
    return this.request("CreateGovernanceInstances", req, cb)
  }

  /**
   * 删除云原生网关的限流插件(路由)
   */
  async DeleteCloudNativeAPIGatewayRouteRateLimit(
    req: DeleteCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("DeleteCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 删除配置发布
   */
  async DeleteConfigFileReleases(
    req: DeleteConfigFileReleasesRequest,
    cb?: (error: string, rep: DeleteConfigFileReleasesResponse) => void
  ): Promise<DeleteConfigFileReleasesResponse> {
    return this.request("DeleteConfigFileReleases", req, cb)
  }

  /**
   * 删除弹性伸缩策略
   */
  async DeleteAutoScalerResourceStrategy(
    req: DeleteAutoScalerResourceStrategyRequest,
    cb?: (error: string, rep: DeleteAutoScalerResourceStrategyResponse) => void
  ): Promise<DeleteAutoScalerResourceStrategyResponse> {
    return this.request("DeleteAutoScalerResourceStrategy", req, cb)
  }

  /**
   * 修改云原生网关路由
   */
  async ModifyCloudNativeAPIGatewayRoute(
    req: ModifyCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayRouteResponse> {
    return this.request("ModifyCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 删除网关实例分组
   */
  async DeleteNativeGatewayServerGroup(
    req: DeleteNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: DeleteNativeGatewayServerGroupResponse) => void
  ): Promise<DeleteNativeGatewayServerGroupResponse> {
    return this.request("DeleteNativeGatewayServerGroup", req, cb)
  }

  /**
   * 获取云原生API网关实例端口信息
   */
  async DescribeCloudNativeAPIGatewayPorts(
    req: DescribeCloudNativeAPIGatewayPortsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayPortsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayPortsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayPorts", req, cb)
  }

  /**
   * 查询云原生网关灰度规则列表
   */
  async DescribeCloudNativeAPIGatewayCanaryRules(
    req: DescribeCloudNativeAPIGatewayCanaryRulesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCanaryRulesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayCanaryRulesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayCanaryRules", req, cb)
  }

  /**
   * 查询引擎实例访问地址
   */
  async DescribeSREInstanceAccessAddress(
    req: DescribeSREInstanceAccessAddressRequest,
    cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void
  ): Promise<DescribeSREInstanceAccessAddressResponse> {
    return this.request("DescribeSREInstanceAccessAddress", req, cb)
  }

  /**
   * 修改网关实例Konga网络配置
   */
  async ModifyConsoleNetwork(
    req: ModifyConsoleNetworkRequest,
    cb?: (error: string, rep: ModifyConsoleNetworkResponse) => void
  ): Promise<ModifyConsoleNetworkResponse> {
    return this.request("ModifyConsoleNetwork", req, cb)
  }

  /**
   * 查询Nacos类型引擎实例副本信息
   */
  async DescribeNacosReplicas(
    req: DescribeNacosReplicasRequest,
    cb?: (error: string, rep: DescribeNacosReplicasResponse) => void
  ): Promise<DescribeNacosReplicasResponse> {
    return this.request("DescribeNacosReplicas", req, cb)
  }

  /**
   * 获取云原生网关服务健康检查配置
   */
  async DescribeUpstreamHealthCheckConfig(
    req: DescribeUpstreamHealthCheckConfigRequest,
    cb?: (error: string, rep: DescribeUpstreamHealthCheckConfigResponse) => void
  ): Promise<DescribeUpstreamHealthCheckConfigResponse> {
    return this.request("DescribeUpstreamHealthCheckConfig", req, cb)
  }

  /**
   * 查询网关服务来源实例列表
   */
  async DescribeNativeGatewayServiceSources(
    req: DescribeNativeGatewayServiceSourcesRequest,
    cb?: (error: string, rep: DescribeNativeGatewayServiceSourcesResponse) => void
  ): Promise<DescribeNativeGatewayServiceSourcesResponse> {
    return this.request("DescribeNativeGatewayServiceSources", req, cb)
  }

  /**
   * 根据公网IP查询云原生网关实例信息
   */
  async DescribeCloudNativeAPIGatewayInfoByIp(
    req: DescribeCloudNativeAPIGatewayInfoByIpRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayInfoByIpResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayInfoByIpResponse> {
    return this.request("DescribeCloudNativeAPIGatewayInfoByIp", req, cb)
  }

  /**
   * 修改云原生API网关实例分组基础信息
   */
  async ModifyNativeGatewayServerGroup(
    req: ModifyNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: ModifyNativeGatewayServerGroupResponse) => void
  ): Promise<ModifyNativeGatewayServerGroupResponse> {
    return this.request("ModifyNativeGatewayServerGroup", req, cb)
  }

  /**
   * 查询云原生网关证书列表
   */
  async DescribeCloudNativeAPIGatewayCertificates(
    req: DescribeCloudNativeAPIGatewayCertificatesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificatesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayCertificatesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayCertificates", req, cb)
  }

  /**
   * 修改云原生网关限流插件(服务)
   */
  async ModifyCloudNativeAPIGatewayServiceRateLimit(
    req: ModifyCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("ModifyCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 创建网关服务来源
   */
  async CreateNativeGatewayServiceSource(
    req: CreateNativeGatewayServiceSourceRequest,
    cb?: (error: string, rep: CreateNativeGatewayServiceSourceResponse) => void
  ): Promise<CreateNativeGatewayServiceSourceResponse> {
    return this.request("CreateNativeGatewayServiceSource", req, cb)
  }

  /**
   * 重启微服务引擎实例
   */
  async RestartSREInstance(
    req: RestartSREInstanceRequest,
    cb?: (error: string, rep: RestartSREInstanceResponse) => void
  ): Promise<RestartSREInstanceResponse> {
    return this.request("RestartSREInstance", req, cb)
  }

  /**
   * 创建治理中心服务别名
   */
  async CreateGovernanceAlias(
    req: CreateGovernanceAliasRequest,
    cb?: (error: string, rep: CreateGovernanceAliasResponse) => void
  ): Promise<CreateGovernanceAliasResponse> {
    return this.request("CreateGovernanceAlias", req, cb)
  }

  /**
   * 查询服务实例
   */
  async DescribeGovernanceInstances(
    req: DescribeGovernanceInstancesRequest,
    cb?: (error: string, rep: DescribeGovernanceInstancesResponse) => void
  ): Promise<DescribeGovernanceInstancesResponse> {
    return this.request("DescribeGovernanceInstances", req, cb)
  }

  /**
   * 查询治理中心服务列表
   */
  async DescribeGovernanceServices(
    req: DescribeGovernanceServicesRequest,
    cb?: (error: string, rep: DescribeGovernanceServicesResponse) => void
  ): Promise<DescribeGovernanceServicesResponse> {
    return this.request("DescribeGovernanceServices", req, cb)
  }

  /**
   * 删除云原生网关的灰度规则
   */
  async DeleteCloudNativeAPIGatewayCanaryRule(
    req: DeleteCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("DeleteCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 获取云原生网关节点列表
   */
  async DescribeCloudNativeAPIGatewayNodes(
    req: DescribeCloudNativeAPIGatewayNodesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayNodesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb)
  }

  /**
   * 弹性伸缩策略批量解绑网关分组
   */
  async UnbindAutoScalerResourceStrategyFromGroups(
    req: UnbindAutoScalerResourceStrategyFromGroupsRequest,
    cb?: (error: string, rep: UnbindAutoScalerResourceStrategyFromGroupsResponse) => void
  ): Promise<UnbindAutoScalerResourceStrategyFromGroupsResponse> {
    return this.request("UnbindAutoScalerResourceStrategyFromGroups", req, cb)
  }

  /**
   * 查询某个配置所有版本信息
   */
  async DescribeConfigFileReleaseVersions(
    req: DescribeConfigFileReleaseVersionsRequest,
    cb?: (error: string, rep: DescribeConfigFileReleaseVersionsResponse) => void
  ): Promise<DescribeConfigFileReleaseVersionsResponse> {
    return this.request("DescribeConfigFileReleaseVersions", req, cb)
  }

  /**
   * 用于查询引擎实例列表
   */
  async DescribeSREInstances(
    req: DescribeSREInstancesRequest,
    cb?: (error: string, rep: DescribeSREInstancesResponse) => void
  ): Promise<DescribeSREInstancesResponse> {
    return this.request("DescribeSREInstances", req, cb)
  }

  /**
   * 根据group查询配置文件列表
   */
  async DescribeConfigFilesByGroup(
    req: DescribeConfigFilesByGroupRequest,
    cb?: (error: string, rep: DescribeConfigFilesByGroupResponse) => void
  ): Promise<DescribeConfigFilesByGroupResponse> {
    return this.request("DescribeConfigFilesByGroup", req, cb)
  }

  /**
   * 获取 WAF 防护状态
   */
  async DescribeWafProtection(
    req: DescribeWafProtectionRequest,
    cb?: (error: string, rep: DescribeWafProtectionResponse) => void
  ): Promise<DescribeWafProtectionResponse> {
    return this.request("DescribeWafProtection", req, cb)
  }

  /**
   * 获取云原生API网关实例网络配置信息
   */
  async DescribeCloudNativeAPIGatewayConfig(
    req: DescribeCloudNativeAPIGatewayConfigRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConfigResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayConfigResponse> {
    return this.request("DescribeCloudNativeAPIGatewayConfig", req, cb)
  }

  /**
   * 创建治理中心命名空间
   */
  async CreateGovernanceNamespaces(
    req: CreateGovernanceNamespacesRequest,
    cb?: (error: string, rep: CreateGovernanceNamespacesResponse) => void
  ): Promise<CreateGovernanceNamespacesResponse> {
    return this.request("CreateGovernanceNamespaces", req, cb)
  }

  /**
   * 查询服务下契约版本列表
   */
  async DescribeGovernanceServiceContractVersions(
    req: DescribeGovernanceServiceContractVersionsRequest,
    cb?: (error: string, rep: DescribeGovernanceServiceContractVersionsResponse) => void
  ): Promise<DescribeGovernanceServiceContractVersionsResponse> {
    return this.request("DescribeGovernanceServiceContractVersions", req, cb)
  }

  /**
   * 更新网关上游实例列表，仅支持IPList服务类型
   */
  async UpdateUpstreamTargets(
    req: UpdateUpstreamTargetsRequest,
    cb?: (error: string, rep: UpdateUpstreamTargetsResponse) => void
  ): Promise<UpdateUpstreamTargetsResponse> {
    return this.request("UpdateUpstreamTargets", req, cb)
  }

  /**
   * 开启 WAF 防护
   */
  async OpenWafProtection(
    req: OpenWafProtectionRequest,
    cb?: (error: string, rep: OpenWafProtectionResponse) => void
  ): Promise<OpenWafProtectionResponse> {
    return this.request("OpenWafProtection", req, cb)
  }

  /**
   * 修改云原生网关的灰度规则
   */
  async ModifyCloudNativeAPIGatewayCanaryRule(
    req: ModifyCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("ModifyCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 创建云原生网关服务
   */
  async CreateCloudNativeAPIGatewayService(
    req: CreateCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayServiceResponse> {
    return this.request("CreateCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 删除云原生API网关实例
   */
  async DeleteCloudNativeAPIGateway(
    req: DeleteCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayResponse> {
    return this.request("DeleteCloudNativeAPIGateway", req, cb)
  }

  /**
   * 修改治理中心命名空间
   */
  async ModifyGovernanceNamespaces(
    req: ModifyGovernanceNamespacesRequest,
    cb?: (error: string, rep: ModifyGovernanceNamespacesResponse) => void
  ): Promise<ModifyGovernanceNamespacesResponse> {
    return this.request("ModifyGovernanceNamespaces", req, cb)
  }

  /**
   * 查询云原生API网关实例公网详情
   */
  async DescribePublicNetwork(
    req: DescribePublicNetworkRequest,
    cb?: (error: string, rep: DescribePublicNetworkResponse) => void
  ): Promise<DescribePublicNetworkResponse> {
    return this.request("DescribePublicNetwork", req, cb)
  }

  /**
   * 创建弹性伸缩策略
   */
  async CreateAutoScalerResourceStrategy(
    req: CreateAutoScalerResourceStrategyRequest,
    cb?: (error: string, rep: CreateAutoScalerResourceStrategyResponse) => void
  ): Promise<CreateAutoScalerResourceStrategyResponse> {
    return this.request("CreateAutoScalerResourceStrategy", req, cb)
  }

  /**
   * 创建配置文件
   */
  async CreateConfigFile(
    req: CreateConfigFileRequest,
    cb?: (error: string, rep: CreateConfigFileResponse) => void
  ): Promise<CreateConfigFileResponse> {
    return this.request("CreateConfigFile", req, cb)
  }

  /**
   * 修改云原生API网关实例Kong访问策略，支持白名单或者黑名单。
   */
  async ModifyNetworkAccessStrategy(
    req: ModifyNetworkAccessStrategyRequest,
    cb?: (error: string, rep: ModifyNetworkAccessStrategyResponse) => void
  ): Promise<ModifyNetworkAccessStrategyResponse> {
    return this.request("ModifyNetworkAccessStrategy", req, cb)
  }

  /**
   * 获取云原生网关服务详情下的Upstream列表
   */
  async DescribeCloudNativeAPIGatewayUpstream(
    req: DescribeCloudNativeAPIGatewayUpstreamRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayUpstreamResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayUpstreamResponse> {
    return this.request("DescribeCloudNativeAPIGatewayUpstream", req, cb)
  }

  /**
   * 创建或更新配置文件并发布配置
   */
  async CreateOrUpdateConfigFileAndRelease(
    req: CreateOrUpdateConfigFileAndReleaseRequest,
    cb?: (error: string, rep: CreateOrUpdateConfigFileAndReleaseResponse) => void
  ): Promise<CreateOrUpdateConfigFileAndReleaseResponse> {
    return this.request("CreateOrUpdateConfigFileAndRelease", req, cb)
  }

  /**
   * 修改治理中心服务别名
   */
  async ModifyGovernanceAlias(
    req: ModifyGovernanceAliasRequest,
    cb?: (error: string, rep: ModifyGovernanceAliasResponse) => void
  ): Promise<ModifyGovernanceAliasResponse> {
    return this.request("ModifyGovernanceAlias", req, cb)
  }

  /**
   * 新建 WAF 防护域名
   */
  async CreateWafDomains(
    req: CreateWafDomainsRequest,
    cb?: (error: string, rep: CreateWafDomainsResponse) => void
  ): Promise<CreateWafDomainsResponse> {
    return this.request("CreateWafDomains", req, cb)
  }

  /**
   * 批量修改配置文件组
   */
  async ModifyConfigFileGroup(
    req: ModifyConfigFileGroupRequest,
    cb?: (error: string, rep: ModifyConfigFileGroupResponse) => void
  ): Promise<ModifyConfigFileGroupResponse> {
    return this.request("ModifyConfigFileGroup", req, cb)
  }

  /**
   * 回滚配置发布
   */
  async RollbackConfigFileReleases(
    req: RollbackConfigFileReleasesRequest,
    cb?: (error: string, rep: RollbackConfigFileReleasesResponse) => void
  ): Promise<RollbackConfigFileReleasesResponse> {
    return this.request("RollbackConfigFileReleases", req, cb)
  }

  /**
   * 创建引擎实例
   */
  async CreateEngine(
    req: CreateEngineRequest,
    cb?: (error: string, rep: CreateEngineResponse) => void
  ): Promise<CreateEngineResponse> {
    return this.request("CreateEngine", req, cb)
  }

  /**
   * 修改云原生网关上游实例节点健康状态
   */
  async ModifyUpstreamNodeStatus(
    req: ModifyUpstreamNodeStatusRequest,
    cb?: (error: string, rep: ModifyUpstreamNodeStatusResponse) => void
  ): Promise<ModifyUpstreamNodeStatusResponse> {
    return this.request("ModifyUpstreamNodeStatus", req, cb)
  }

  /**
   * 弹性伸缩策略批量绑定网关分组
   */
  async BindAutoScalerResourceStrategyToGroups(
    req: BindAutoScalerResourceStrategyToGroupsRequest,
    cb?: (error: string, rep: BindAutoScalerResourceStrategyToGroupsResponse) => void
  ): Promise<BindAutoScalerResourceStrategyToGroupsResponse> {
    return this.request("BindAutoScalerResourceStrategyToGroups", req, cb)
  }

  /**
   * 创建云原生网关限流插件(路由)
   */
  async CreateCloudNativeAPIGatewayRouteRateLimit(
    req: CreateCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("CreateCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 删除 WAF 防护域名
   */
  async DeleteWafDomains(
    req: DeleteWafDomainsRequest,
    cb?: (error: string, rep: DeleteWafDomainsResponse) => void
  ): Promise<DeleteWafDomainsResponse> {
    return this.request("DeleteWafDomains", req, cb)
  }

  /**
   * 查询公网地址信息
   */
  async DescribePublicAddressConfig(
    req: DescribePublicAddressConfigRequest,
    cb?: (error: string, rep: DescribePublicAddressConfigResponse) => void
  ): Promise<DescribePublicAddressConfigResponse> {
    return this.request("DescribePublicAddressConfig", req, cb)
  }

  /**
   * 删除云原生网关服务
   */
  async DeleteCloudNativeAPIGatewayService(
    req: DeleteCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayServiceResponse> {
    return this.request("DeleteCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 查询云原生网关路由列表
   */
  async DescribeCloudNativeAPIGatewayRoutes(
    req: DescribeCloudNativeAPIGatewayRoutesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRoutesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayRoutesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayRoutes", req, cb)
  }

  /**
   * 根据条件分页查询配置文件组
   */
  async DescribeConfigFileGroups(
    req: DescribeConfigFileGroupsRequest,
    cb?: (error: string, rep: DescribeConfigFileGroupsResponse) => void
  ): Promise<DescribeConfigFileGroupsResponse> {
    return this.request("DescribeConfigFileGroups", req, cb)
  }

  /**
   * 获取云原生API网关实例信息
   */
  async DescribeCloudNativeAPIGateway(
    req: DescribeCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayResponse> {
    return this.request("DescribeCloudNativeAPIGateway", req, cb)
  }

  /**
   * 删除云原生网关路由
   */
  async DeleteCloudNativeAPIGatewayRoute(
    req: DeleteCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayRouteResponse> {
    return this.request("DeleteCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 创建公网网络配置
   */
  async CreateCloudNativeAPIGatewayPublicNetwork(
    req: CreateCloudNativeAPIGatewayPublicNetworkRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayPublicNetworkResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayPublicNetworkResponse> {
    return this.request("CreateCloudNativeAPIGatewayPublicNetwork", req, cb)
  }

  /**
   * 查询nacos服务接口列表
   */
  async DescribeNacosServerInterfaces(
    req: DescribeNacosServerInterfacesRequest,
    cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void
  ): Promise<DescribeNacosServerInterfacesResponse> {
    return this.request("DescribeNacosServerInterfaces", req, cb)
  }

  /**
   * 修改配置文件
   */
  async ModifyConfigFiles(
    req: ModifyConfigFilesRequest,
    cb?: (error: string, rep: ModifyConfigFilesResponse) => void
  ): Promise<ModifyConfigFilesResponse> {
    return this.request("ModifyConfigFiles", req, cb)
  }

  /**
   * 修改云原生API网关实例的节点规格信息，例如节点扩缩容或者升降配
   */
  async UpdateCloudNativeAPIGatewaySpec(
    req: UpdateCloudNativeAPIGatewaySpecRequest,
    cb?: (error: string, rep: UpdateCloudNativeAPIGatewaySpecResponse) => void
  ): Promise<UpdateCloudNativeAPIGatewaySpecResponse> {
    return this.request("UpdateCloudNativeAPIGatewaySpec", req, cb)
  }

  /**
   * 创建治理中心服务
   */
  async CreateGovernanceServices(
    req: CreateGovernanceServicesRequest,
    cb?: (error: string, rep: CreateGovernanceServicesResponse) => void
  ): Promise<CreateGovernanceServicesResponse> {
    return this.request("CreateGovernanceServices", req, cb)
  }

  /**
   * 删除治理中心命名空间
   */
  async DeleteGovernanceNamespaces(
    req: DeleteGovernanceNamespacesRequest,
    cb?: (error: string, rep: DeleteGovernanceNamespacesResponse) => void
  ): Promise<DeleteGovernanceNamespacesResponse> {
    return this.request("DeleteGovernanceNamespaces", req, cb)
  }

  /**
   * 修改治理中心服务实例
   */
  async ModifyGovernanceInstances(
    req: ModifyGovernanceInstancesRequest,
    cb?: (error: string, rep: ModifyGovernanceInstancesResponse) => void
  ): Promise<ModifyGovernanceInstancesResponse> {
    return this.request("ModifyGovernanceInstances", req, cb)
  }

  /**
   * 根据命名空间、组名、名称、标签查询配置文件列表
   */
  async DescribeConfigFiles(
    req: DescribeConfigFilesRequest,
    cb?: (error: string, rep: DescribeConfigFilesResponse) => void
  ): Promise<DescribeConfigFilesResponse> {
    return this.request("DescribeConfigFiles", req, cb)
  }

  /**
   * 修改云原生API网关实例基础信息
   */
  async ModifyCloudNativeAPIGateway(
    req: ModifyCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayResponse> {
    return this.request("ModifyCloudNativeAPIGateway", req, cb)
  }

  /**
   * 创建云原生网关限流插件(服务)
   */
  async CreateCloudNativeAPIGatewayServiceRateLimit(
    req: CreateCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("CreateCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 删除网关服务来源实例
   */
  async DeleteNativeGatewayServiceSource(
    req: DeleteNativeGatewayServiceSourceRequest,
    cb?: (error: string, rep: DeleteNativeGatewayServiceSourceResponse) => void
  ): Promise<DeleteNativeGatewayServiceSourceResponse> {
    return this.request("DeleteNativeGatewayServiceSource", req, cb)
  }

  /**
   * 获取配置文件发布历史列表
   */
  async DescribeConfigFileReleaseHistories(
    req: DescribeConfigFileReleaseHistoriesRequest,
    cb?: (error: string, rep: DescribeConfigFileReleaseHistoriesResponse) => void
  ): Promise<DescribeConfigFileReleaseHistoriesResponse> {
    return this.request("DescribeConfigFileReleaseHistories", req, cb)
  }

  /**
   * 查询云原生网关分组信息
   */
  async DescribeNativeGatewayServerGroups(
    req: DescribeNativeGatewayServerGroupsRequest,
    cb?: (error: string, rep: DescribeNativeGatewayServerGroupsResponse) => void
  ): Promise<DescribeNativeGatewayServerGroupsResponse> {
    return this.request("DescribeNativeGatewayServerGroups", req, cb)
  }

  /**
   * 更新云原生网关健康检查配置
   */
  async UpdateUpstreamHealthCheckConfig(
    req: UpdateUpstreamHealthCheckConfigRequest,
    cb?: (error: string, rep: UpdateUpstreamHealthCheckConfigResponse) => void
  ): Promise<UpdateUpstreamHealthCheckConfigResponse> {
    return this.request("UpdateUpstreamHealthCheckConfig", req, cb)
  }
}
