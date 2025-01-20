import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNacosReplicasRequest, DeleteWafDomainsRequest, DescribeCloudNativeAPIGatewayNodesRequest, DescribeCloudNativeAPIGatewayUpstreamRequest, DescribeUpstreamHealthCheckConfigRequest, CreateNativeGatewayServerGroupRequest, DescribeCloudNativeAPIGatewayCertificatesRequest, CloseWafProtectionRequest, DescribeCloudNativeAPIGatewayNodesResponse, CreateCloudNativeAPIGatewayResponse, DescribeUpstreamHealthCheckConfigResponse, CreateNativeGatewayServiceSourceResponse, CreateCloudNativeAPIGatewayServiceRequest, ModifyConsoleNetworkRequest, DescribeCloudNativeAPIGatewayServicesRequest, CreateCloudNativeAPIGatewayCanaryRuleResponse, DeleteGovernanceNamespacesResponse, DescribeCloudNativeAPIGatewayRoutesResponse, DescribeWafProtectionResponse, DescribeZookeeperReplicasRequest, DescribeAutoScalerResourceStrategiesResponse, DeleteCloudNativeAPIGatewayRouteResponse, DeleteCloudNativeAPIGatewayServiceRateLimitRequest, ModifyUpstreamNodeStatusRequest, DescribeConfigFileReleaseRequest, DescribeCloudNativeAPIGatewayConfigRequest, DescribeNacosServerInterfacesResponse, DeleteGovernanceInstancesRequest, UpdateEngineInternetAccessResponse, DeleteCloudNativeAPIGatewayRouteRateLimitRequest, CreateCloudNativeAPIGatewayPublicNetworkResponse, ModifyGovernanceServicesRequest, DescribeConfigFileReleasesResponse, DeleteCloudNativeAPIGatewayServiceRateLimitResponse, CreateGovernanceServicesRequest, ModifyCloudNativeAPIGatewayServiceRateLimitRequest, ModifyNetworkAccessStrategyResponse, RestartSREInstanceRequest, UnbindAutoScalerResourceStrategyFromGroupsRequest, DeleteCloudNativeAPIGatewayPublicNetworkRequest, CreateGovernanceAliasRequest, ModifyCloudNativeAPIGatewayServiceRequest, DescribeAutoScalerResourceStrategyBindingGroupsRequest, DescribeConfigFilesByGroupResponse, DescribeWafProtectionRequest, DescribeAutoScalerResourceStrategiesRequest, DescribeGovernanceInstancesRequest, DescribeGovernanceServiceContractsRequest, DescribeConfigFilesRequest, DeleteCloudNativeAPIGatewayRouteRequest, DescribeConfigFileReleasesRequest, ModifyCloudNativeAPIGatewayServiceRateLimitResponse, DescribeGovernanceNamespacesRequest, DescribeSREInstancesResponse, CreateCloudNativeAPIGatewayServiceRateLimitRequest, ModifyNativeGatewayServerGroupRequest, ModifyConsoleNetworkResponse, DescribeWafDomainsResponse, DescribeSREInstanceAccessAddressRequest, ModifyGovernanceInstancesResponse, DeleteCloudNativeAPIGatewayPublicNetworkResponse, CreateOrUpdateConfigFileAndReleaseRequest, DeleteNativeGatewayServiceSourceResponse, DescribeCloudNativeAPIGatewayServiceRateLimitRequest, DescribeConfigFileGroupsResponse, UpdateEngineInternetAccessRequest, DeleteNativeGatewayServerGroupResponse, ModifyCloudNativeAPIGatewayCertificateResponse, DescribeSREInstanceAccessAddressResponse, CreateConfigFileRequest, DescribeConfigFilesResponse, DescribeCloudNativeAPIGatewayServicesResponse, CreateNativeGatewayServiceSourceRequest, ModifyNativeGatewayServiceSourceRequest, ModifyCloudNativeAPIGatewayCanaryRuleResponse, UnbindAutoScalerResourceStrategyFromGroupsResponse, UpdateUpstreamTargetsResponse, CreateWafDomainsRequest, DescribeGovernanceServiceContractVersionsRequest, DescribeCloudNativeAPIGatewayCertificatesResponse, DeleteGovernanceInstancesResponse, BindAutoScalerResourceStrategyToGroupsResponse, ModifyConfigFilesRequest, ModifyGovernanceAliasRequest, ModifyNetworkAccessStrategyRequest, CreateCloudNativeAPIGatewayRouteRateLimitRequest, ModifyCloudNativeAPIGatewayRouteResponse, CreateGovernanceInstancesRequest, BindAutoScalerResourceStrategyToGroupsRequest, DeleteCloudNativeAPIGatewayCertificateRequest, ModifyAutoScalerResourceStrategyResponse, CreateCloudNativeAPIGatewayCertificateResponse, DescribeCloudNativeAPIGatewayRouteRateLimitRequest, UpdateUpstreamHealthCheckConfigRequest, DescribeConfigFileResponse, UpdateCloudNativeAPIGatewaySpecResponse, DescribeNativeGatewayServerGroupsRequest, DescribePublicNetworkRequest, DescribeGovernanceNamespacesResponse, DescribeConfigFilesByGroupRequest, DeleteGovernanceInstancesByHostResponse, DescribeGovernanceAliasesResponse, DeleteCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayCertificateRequest, ModifyCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayPublicNetworkRequest, ModifyGovernanceNamespacesRequest, ModifyConfigFileGroupResponse, DescribeAllConfigFileTemplatesRequest, RollbackConfigFileReleasesRequest, DescribeCloudNativeAPIGatewayInfoByIpResponse, PublishConfigFilesResponse, UpdateCloudNativeAPIGatewayCertificateInfoRequest, DescribeCloudNativeAPIGatewayCertificateDetailsRequest, CreateNativeGatewayServerGroupResponse, DeleteConfigFileReleasesResponse, ModifyGovernanceInstancesRequest, DeleteCloudNativeAPIGatewayCanaryRuleResponse, UpdateCloudNativeAPIGatewayCertificateInfoResponse, ModifyNetworkBasicInfoResponse, DescribeCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayRequest, DescribeGovernanceServiceContractVersionsResponse, ModifyConfigFilesResponse, DescribeAllConfigFileTemplatesResponse, DescribeConfigFileReleaseVersionsRequest, ModifyCloudNativeAPIGatewayRouteRateLimitRequest, ModifyCloudNativeAPIGatewayCertificateRequest, DeleteGovernanceAliasesResponse, DeleteAutoScalerResourceStrategyRequest, CreateGovernanceInstancesResponse, DeleteEngineResponse, ModifyCloudNativeAPIGatewayCanaryRuleRequest, DescribeCloudNativeAPIGatewayPortsResponse, DeleteGovernanceNamespacesRequest, DescribeCloudNativeAPIGatewayConfigResponse, CreateCloudNativeAPIGatewayRouteResponse, DeleteConfigFilesResponse, CreateCloudNativeAPIGatewayServiceRateLimitResponse, DescribeCloudNativeAPIGatewayServiceRateLimitResponse, ModifyGovernanceAliasResponse, DeleteGovernanceInstancesByHostRequest, CreateCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewaysResponse, CreateGovernanceNamespacesResponse, CreateConfigFileGroupRequest, DeleteAutoScalerResourceStrategyResponse, DescribeOneCloudNativeAPIGatewayServiceRequest, DeleteGovernanceAliasesRequest, DescribeWafDomainsRequest, ModifyUpstreamNodeStatusResponse, OpenWafProtectionResponse, DescribeCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayRequest, DeleteConfigFileGroupRequest, CreateCloudNativeAPIGatewayCanaryRuleRequest, OpenWafProtectionRequest, DescribeCloudNativeAPIGatewayRoutesRequest, CreateEngineResponse, DescribeNacosServerInterfacesRequest, DescribeSREInstancesRequest, DescribeCloudNativeAPIGatewayInfoByIpRequest, DescribeZookeeperReplicasResponse, ModifyConfigFileGroupRequest, DescribePublicAddressConfigResponse, PublishConfigFilesRequest, DescribeConfigFileReleaseHistoriesRequest, ModifyCloudNativeAPIGatewayRequest, DescribeNativeGatewayServerGroupsResponse, ModifyNativeGatewayServerGroupResponse, DescribeNativeGatewayServiceSourcesResponse, CreateCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayRouteRateLimitResponse, DescribeConfigFileGroupsRequest, CreateGovernanceNamespacesRequest, ModifyCloudNativeAPIGatewayRouteRequest, CreateGovernanceAliasResponse, DeleteConfigFileGroupResponse, DescribeGovernanceAliasesRequest, ModifyCloudNativeAPIGatewayServiceResponse, DescribeAutoScalerResourceStrategyBindingGroupsResponse, DescribeInstanceTagInfosRequest, DeleteGovernanceServicesResponse, DeleteCloudNativeAPIGatewayCertificateResponse, DeleteCloudNativeAPIGatewayCanaryRuleRequest, DescribeNativeGatewayServiceSourcesRequest, CreateWafDomainsResponse, DescribePublicAddressConfigRequest, CreateConfigFileResponse, DescribeCloudNativeAPIGatewayUpstreamResponse, UpdateUpstreamTargetsRequest, DeleteCloudNativeAPIGatewayServiceResponse, DescribeConfigFileRequest, DeleteNativeGatewayServerGroupRequest, RollbackConfigFileReleasesResponse, DescribeNacosReplicasResponse, DescribeGovernanceInstancesResponse, ModifyGovernanceNamespacesResponse, DescribeCloudNativeAPIGatewaysRequest, DeleteCloudNativeAPIGatewayServiceRequest, DescribePublicNetworkResponse, DescribeInstanceTagInfosResponse, DeleteConfigFilesRequest, DescribeGovernanceServicesResponse, CloseWafProtectionResponse, CreateAutoScalerResourceStrategyResponse, UpdateCloudNativeAPIGatewaySpecRequest, DeleteEngineRequest, ModifyNetworkBasicInfoRequest, DescribeCloudNativeAPIGatewayCanaryRulesResponse, DescribeZookeeperServerInterfacesResponse, DescribeConfigFileReleaseVersionsResponse, DeleteCloudNativeAPIGatewayRequest, DescribeCloudNativeAPIGatewayCertificateDetailsResponse, CreateGovernanceServicesResponse, ModifyAutoScalerResourceStrategyRequest, CreateOrUpdateConfigFileAndReleaseResponse, DescribeOneCloudNativeAPIGatewayServiceResponse, DeleteNativeGatewayServiceSourceRequest, RestartSREInstanceResponse, DescribeZookeeperServerInterfacesRequest, DeleteGovernanceServicesRequest, ModifyGovernanceServicesResponse, DeleteConfigFileReleasesRequest, CreateAutoScalerResourceStrategyRequest, ModifyNativeGatewayServiceSourceResponse, DescribeGovernanceServiceContractsResponse, UpdateUpstreamHealthCheckConfigResponse, CreateCloudNativeAPIGatewayRouteRequest, CreateEngineRequest, DeleteWafDomainsResponse, ModifyCloudNativeAPIGatewayRouteRateLimitResponse, DescribeConfigFileReleaseHistoriesResponse, DescribeCloudNativeAPIGatewayCanaryRulesRequest, CreateConfigFileGroupResponse, DescribeCloudNativeAPIGatewayPortsRequest, DescribeGovernanceServicesRequest, DescribeConfigFileReleaseResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取云原生网关服务详情
     */
    DescribeOneCloudNativeAPIGatewayService(req: DescribeOneCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: DescribeOneCloudNativeAPIGatewayServiceResponse) => void): Promise<DescribeOneCloudNativeAPIGatewayServiceResponse>;
    /**
     * 修改引擎公网访问配置
     */
    UpdateEngineInternetAccess(req: UpdateEngineInternetAccessRequest, cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void): Promise<UpdateEngineInternetAccessResponse>;
    /**
     * 查询云原生网关的限流插件(服务)
     */
    DescribeCloudNativeAPIGatewayServiceRateLimit(req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 更新云原生网关证书
     */
    ModifyCloudNativeAPIGatewayCertificate(req: ModifyCloudNativeAPIGatewayCertificateRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCertificateResponse) => void): Promise<ModifyCloudNativeAPIGatewayCertificateResponse>;
    /**
     * 删除公网网络配置
     */
    DeleteCloudNativeAPIGatewayPublicNetwork(req: DeleteCloudNativeAPIGatewayPublicNetworkRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayPublicNetworkResponse) => void): Promise<DeleteCloudNativeAPIGatewayPublicNetworkResponse>;
    /**
     * 查询治理中心服务别名列表
     */
    DescribeGovernanceAliases(req: DescribeGovernanceAliasesRequest, cb?: (error: string, rep: DescribeGovernanceAliasesResponse) => void): Promise<DescribeGovernanceAliasesResponse>;
    /**
     * 删除配置文件分组
     */
    DeleteConfigFileGroup(req: DeleteConfigFileGroupRequest, cb?: (error: string, rep: DeleteConfigFileGroupResponse) => void): Promise<DeleteConfigFileGroupResponse>;
    /**
     * 创建服务治理中心配置文件组
     */
    CreateConfigFileGroup(req: CreateConfigFileGroupRequest, cb?: (error: string, rep: CreateConfigFileGroupResponse) => void): Promise<CreateConfigFileGroupResponse>;
    /**
     * 删除引擎实例
     */
    DeleteEngine(req: DeleteEngineRequest, cb?: (error: string, rep: DeleteEngineResponse) => void): Promise<DeleteEngineResponse>;
    /**
     * 修改治理中心服务
     */
    ModifyGovernanceServices(req: ModifyGovernanceServicesRequest, cb?: (error: string, rep: ModifyGovernanceServicesResponse) => void): Promise<ModifyGovernanceServicesResponse>;
    /**
     * 获取云原生API网关实例列表
     */
    DescribeCloudNativeAPIGateways(req: DescribeCloudNativeAPIGatewaysRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewaysResponse) => void): Promise<DescribeCloudNativeAPIGatewaysResponse>;
    /**
     * 创建云原生网关证书
     */
    CreateCloudNativeAPIGatewayCertificate(req: CreateCloudNativeAPIGatewayCertificateRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayCertificateResponse) => void): Promise<CreateCloudNativeAPIGatewayCertificateResponse>;
    /**
     * 查询云原生网关服务列表
     */
    DescribeCloudNativeAPIGatewayServices(req: DescribeCloudNativeAPIGatewayServicesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServicesResponse) => void): Promise<DescribeCloudNativeAPIGatewayServicesResponse>;
    /**
     * 修改云原生网关限流插件(路由)
     */
    ModifyCloudNativeAPIGatewayRouteRateLimit(req: ModifyCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<ModifyCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 删除治理中心服务别名
     */
    DeleteGovernanceAliases(req: DeleteGovernanceAliasesRequest, cb?: (error: string, rep: DeleteGovernanceAliasesResponse) => void): Promise<DeleteGovernanceAliasesResponse>;
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    DescribeZookeeperReplicas(req: DescribeZookeeperReplicasRequest, cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void): Promise<DescribeZookeeperReplicasResponse>;
    /**
     * 删除服务实例
     */
    DeleteGovernanceInstances(req: DeleteGovernanceInstancesRequest, cb?: (error: string, rep: DeleteGovernanceInstancesResponse) => void): Promise<DeleteGovernanceInstancesResponse>;
    /**
     * 创建云原生网关的灰度规则
     */
    CreateCloudNativeAPIGatewayCanaryRule(req: CreateCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<CreateCloudNativeAPIGatewayCanaryRuleResponse>;
    /**
     * 获取 WAF 防护域名
     */
    DescribeWafDomains(req: DescribeWafDomainsRequest, cb?: (error: string, rep: DescribeWafDomainsResponse) => void): Promise<DescribeWafDomainsResponse>;
    /**
     * 查询云原生网关单个证书详情
     */
    DescribeCloudNativeAPIGatewayCertificateDetails(req: DescribeCloudNativeAPIGatewayCertificateDetailsRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificateDetailsResponse) => void): Promise<DescribeCloudNativeAPIGatewayCertificateDetailsResponse>;
    /**
     * 查看弹性伸缩策略列表
     */
    DescribeAutoScalerResourceStrategies(req: DescribeAutoScalerResourceStrategiesRequest, cb?: (error: string, rep: DescribeAutoScalerResourceStrategiesResponse) => void): Promise<DescribeAutoScalerResourceStrategiesResponse>;
    /**
     * 修改网关服务来源
     */
    ModifyNativeGatewayServiceSource(req: ModifyNativeGatewayServiceSourceRequest, cb?: (error: string, rep: ModifyNativeGatewayServiceSourceResponse) => void): Promise<ModifyNativeGatewayServiceSourceResponse>;
    /**
     * 修改云原生API网关实例网络基本信息，例如带宽以及描述，只支持修改客户端公网/内网的信息。
     */
    ModifyNetworkBasicInfo(req: ModifyNetworkBasicInfoRequest, cb?: (error: string, rep: ModifyNetworkBasicInfoResponse) => void): Promise<ModifyNetworkBasicInfoResponse>;
    /**
     * 删除云原生网关证书
     */
    DeleteCloudNativeAPIGatewayCertificate(req: DeleteCloudNativeAPIGatewayCertificateRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCertificateResponse) => void): Promise<DeleteCloudNativeAPIGatewayCertificateResponse>;
    /**
     * 查询服务契约定义列表
     */
    DescribeGovernanceServiceContracts(req: DescribeGovernanceServiceContractsRequest, cb?: (error: string, rep: DescribeGovernanceServiceContractsResponse) => void): Promise<DescribeGovernanceServiceContractsResponse>;
    /**
     * 修改云原生网关证书信息
     */
    UpdateCloudNativeAPIGatewayCertificateInfo(req: UpdateCloudNativeAPIGatewayCertificateInfoRequest, cb?: (error: string, rep: UpdateCloudNativeAPIGatewayCertificateInfoResponse) => void): Promise<UpdateCloudNativeAPIGatewayCertificateInfoResponse>;
    /**
     * 获取全量配置文件模板列表
     */
    DescribeAllConfigFileTemplates(req: DescribeAllConfigFileTemplatesRequest, cb?: (error: string, rep: DescribeAllConfigFileTemplatesResponse) => void): Promise<DescribeAllConfigFileTemplatesResponse>;
    /**
     * 创建云原生网关引擎分组
     */
    CreateNativeGatewayServerGroup(req: CreateNativeGatewayServerGroupRequest, cb?: (error: string, rep: CreateNativeGatewayServerGroupResponse) => void): Promise<CreateNativeGatewayServerGroupResponse>;
    /**
     * 删除云原生网关的限流插件(服务)
     */
    DeleteCloudNativeAPIGatewayServiceRateLimit(req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 查询zookeeper服务接口列表
     */
    DescribeZookeeperServerInterfaces(req: DescribeZookeeperServerInterfacesRequest, cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void): Promise<DescribeZookeeperServerInterfacesResponse>;
    /**
     * 删除配置文件
     */
    DeleteConfigFiles(req: DeleteConfigFilesRequest, cb?: (error: string, rep: DeleteConfigFilesResponse) => void): Promise<DeleteConfigFilesResponse>;
    /**
     * 更新弹性伸缩策略
     */
    ModifyAutoScalerResourceStrategy(req: ModifyAutoScalerResourceStrategyRequest, cb?: (error: string, rep: ModifyAutoScalerResourceStrategyResponse) => void): Promise<ModifyAutoScalerResourceStrategyResponse>;
    /**
     * 查看实例的标签信息
     */
    DescribeInstanceTagInfos(req: DescribeInstanceTagInfosRequest, cb?: (error: string, rep: DescribeInstanceTagInfosResponse) => void): Promise<DescribeInstanceTagInfosResponse>;
    /**
     * 发布配置文件
     */
    PublishConfigFiles(req: PublishConfigFilesRequest, cb?: (error: string, rep: PublishConfigFilesResponse) => void): Promise<PublishConfigFilesResponse>;
    /**
     * 删除治理中心服务
     */
    DeleteGovernanceServices(req: DeleteGovernanceServicesRequest, cb?: (error: string, rep: DeleteGovernanceServicesResponse) => void): Promise<DeleteGovernanceServicesResponse>;
    /**
     * 根据命名空间、组、名字查找配置文件
     */
    DescribeConfigFile(req: DescribeConfigFileRequest, cb?: (error: string, rep: DescribeConfigFileResponse) => void): Promise<DescribeConfigFileResponse>;
    /**
     * 查询配置版本列表
     */
    DescribeConfigFileReleases(req: DescribeConfigFileReleasesRequest, cb?: (error: string, rep: DescribeConfigFileReleasesResponse) => void): Promise<DescribeConfigFileReleasesResponse>;
    /**
     * 关闭 WAF 防护
     */
    CloseWafProtection(req: CloseWafProtectionRequest, cb?: (error: string, rep: CloseWafProtectionResponse) => void): Promise<CloseWafProtectionResponse>;
    /**
     * 创建云原生API网关实例
     */
    CreateCloudNativeAPIGateway(req: CreateCloudNativeAPIGatewayRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayResponse) => void): Promise<CreateCloudNativeAPIGatewayResponse>;
    /**
     * 查询云原生网关的限流插件(路由)
     */
    DescribeCloudNativeAPIGatewayRouteRateLimit(req: DescribeCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 修改云原生网关服务
     */
    ModifyCloudNativeAPIGatewayService(req: ModifyCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceResponse) => void): Promise<ModifyCloudNativeAPIGatewayServiceResponse>;
    /**
     * 查看弹性伸缩策略绑定的网关分组
     */
    DescribeAutoScalerResourceStrategyBindingGroups(req: DescribeAutoScalerResourceStrategyBindingGroupsRequest, cb?: (error: string, rep: DescribeAutoScalerResourceStrategyBindingGroupsResponse) => void): Promise<DescribeAutoScalerResourceStrategyBindingGroupsResponse>;
    /**
     * 获取配置文件发布
     */
    DescribeConfigFileRelease(req: DescribeConfigFileReleaseRequest, cb?: (error: string, rep: DescribeConfigFileReleaseResponse) => void): Promise<DescribeConfigFileReleaseResponse>;
    /**
     * 查询服务治理中心命名空间列表
     */
    DescribeGovernanceNamespaces(req: DescribeGovernanceNamespacesRequest, cb?: (error: string, rep: DescribeGovernanceNamespacesResponse) => void): Promise<DescribeGovernanceNamespacesResponse>;
    /**
     * 删除治理中心服务实例
     */
    DeleteGovernanceInstancesByHost(req: DeleteGovernanceInstancesByHostRequest, cb?: (error: string, rep: DeleteGovernanceInstancesByHostResponse) => void): Promise<DeleteGovernanceInstancesByHostResponse>;
    /**
     * 创建云原生网关路由
     */
    CreateCloudNativeAPIGatewayRoute(req: CreateCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteResponse>;
    /**
     * 创建服务实例
     */
    CreateGovernanceInstances(req: CreateGovernanceInstancesRequest, cb?: (error: string, rep: CreateGovernanceInstancesResponse) => void): Promise<CreateGovernanceInstancesResponse>;
    /**
     * 删除云原生网关的限流插件(路由)
     */
    DeleteCloudNativeAPIGatewayRouteRateLimit(req: DeleteCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 删除配置发布
     */
    DeleteConfigFileReleases(req: DeleteConfigFileReleasesRequest, cb?: (error: string, rep: DeleteConfigFileReleasesResponse) => void): Promise<DeleteConfigFileReleasesResponse>;
    /**
     * 删除弹性伸缩策略
     */
    DeleteAutoScalerResourceStrategy(req: DeleteAutoScalerResourceStrategyRequest, cb?: (error: string, rep: DeleteAutoScalerResourceStrategyResponse) => void): Promise<DeleteAutoScalerResourceStrategyResponse>;
    /**
     * 修改云原生网关路由
     */
    ModifyCloudNativeAPIGatewayRoute(req: ModifyCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteResponse) => void): Promise<ModifyCloudNativeAPIGatewayRouteResponse>;
    /**
     * 删除网关实例分组
     */
    DeleteNativeGatewayServerGroup(req: DeleteNativeGatewayServerGroupRequest, cb?: (error: string, rep: DeleteNativeGatewayServerGroupResponse) => void): Promise<DeleteNativeGatewayServerGroupResponse>;
    /**
     * 获取云原生API网关实例端口信息
     */
    DescribeCloudNativeAPIGatewayPorts(req: DescribeCloudNativeAPIGatewayPortsRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayPortsResponse) => void): Promise<DescribeCloudNativeAPIGatewayPortsResponse>;
    /**
     * 查询云原生网关灰度规则列表
     */
    DescribeCloudNativeAPIGatewayCanaryRules(req: DescribeCloudNativeAPIGatewayCanaryRulesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCanaryRulesResponse) => void): Promise<DescribeCloudNativeAPIGatewayCanaryRulesResponse>;
    /**
     * 查询引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
    /**
     * 修改网关实例Konga网络配置
     */
    ModifyConsoleNetwork(req: ModifyConsoleNetworkRequest, cb?: (error: string, rep: ModifyConsoleNetworkResponse) => void): Promise<ModifyConsoleNetworkResponse>;
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    DescribeNacosReplicas(req: DescribeNacosReplicasRequest, cb?: (error: string, rep: DescribeNacosReplicasResponse) => void): Promise<DescribeNacosReplicasResponse>;
    /**
     * 获取云原生网关服务健康检查配置
     */
    DescribeUpstreamHealthCheckConfig(req: DescribeUpstreamHealthCheckConfigRequest, cb?: (error: string, rep: DescribeUpstreamHealthCheckConfigResponse) => void): Promise<DescribeUpstreamHealthCheckConfigResponse>;
    /**
     * 查询网关服务来源实例列表
     */
    DescribeNativeGatewayServiceSources(req: DescribeNativeGatewayServiceSourcesRequest, cb?: (error: string, rep: DescribeNativeGatewayServiceSourcesResponse) => void): Promise<DescribeNativeGatewayServiceSourcesResponse>;
    /**
     * 根据公网IP查询云原生网关实例信息
     */
    DescribeCloudNativeAPIGatewayInfoByIp(req: DescribeCloudNativeAPIGatewayInfoByIpRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayInfoByIpResponse) => void): Promise<DescribeCloudNativeAPIGatewayInfoByIpResponse>;
    /**
     * 修改云原生API网关实例分组基础信息
     */
    ModifyNativeGatewayServerGroup(req: ModifyNativeGatewayServerGroupRequest, cb?: (error: string, rep: ModifyNativeGatewayServerGroupResponse) => void): Promise<ModifyNativeGatewayServerGroupResponse>;
    /**
     * 查询云原生网关证书列表
     */
    DescribeCloudNativeAPIGatewayCertificates(req: DescribeCloudNativeAPIGatewayCertificatesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificatesResponse) => void): Promise<DescribeCloudNativeAPIGatewayCertificatesResponse>;
    /**
     * 修改云原生网关限流插件(服务)
     */
    ModifyCloudNativeAPIGatewayServiceRateLimit(req: ModifyCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 创建网关服务来源
     */
    CreateNativeGatewayServiceSource(req: CreateNativeGatewayServiceSourceRequest, cb?: (error: string, rep: CreateNativeGatewayServiceSourceResponse) => void): Promise<CreateNativeGatewayServiceSourceResponse>;
    /**
     * 重启微服务引擎实例
     */
    RestartSREInstance(req: RestartSREInstanceRequest, cb?: (error: string, rep: RestartSREInstanceResponse) => void): Promise<RestartSREInstanceResponse>;
    /**
     * 创建治理中心服务别名
     */
    CreateGovernanceAlias(req: CreateGovernanceAliasRequest, cb?: (error: string, rep: CreateGovernanceAliasResponse) => void): Promise<CreateGovernanceAliasResponse>;
    /**
     * 查询服务实例
     */
    DescribeGovernanceInstances(req: DescribeGovernanceInstancesRequest, cb?: (error: string, rep: DescribeGovernanceInstancesResponse) => void): Promise<DescribeGovernanceInstancesResponse>;
    /**
     * 查询治理中心服务列表
     */
    DescribeGovernanceServices(req: DescribeGovernanceServicesRequest, cb?: (error: string, rep: DescribeGovernanceServicesResponse) => void): Promise<DescribeGovernanceServicesResponse>;
    /**
     * 删除云原生网关的灰度规则
     */
    DeleteCloudNativeAPIGatewayCanaryRule(req: DeleteCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<DeleteCloudNativeAPIGatewayCanaryRuleResponse>;
    /**
     * 获取云原生网关节点列表
     */
    DescribeCloudNativeAPIGatewayNodes(req: DescribeCloudNativeAPIGatewayNodesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void): Promise<DescribeCloudNativeAPIGatewayNodesResponse>;
    /**
     * 弹性伸缩策略批量解绑网关分组
     */
    UnbindAutoScalerResourceStrategyFromGroups(req: UnbindAutoScalerResourceStrategyFromGroupsRequest, cb?: (error: string, rep: UnbindAutoScalerResourceStrategyFromGroupsResponse) => void): Promise<UnbindAutoScalerResourceStrategyFromGroupsResponse>;
    /**
     * 查询某个配置所有版本信息
     */
    DescribeConfigFileReleaseVersions(req: DescribeConfigFileReleaseVersionsRequest, cb?: (error: string, rep: DescribeConfigFileReleaseVersionsResponse) => void): Promise<DescribeConfigFileReleaseVersionsResponse>;
    /**
     * 用于查询引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
    /**
     * 根据group查询配置文件列表
     */
    DescribeConfigFilesByGroup(req: DescribeConfigFilesByGroupRequest, cb?: (error: string, rep: DescribeConfigFilesByGroupResponse) => void): Promise<DescribeConfigFilesByGroupResponse>;
    /**
     * 获取 WAF 防护状态
     */
    DescribeWafProtection(req: DescribeWafProtectionRequest, cb?: (error: string, rep: DescribeWafProtectionResponse) => void): Promise<DescribeWafProtectionResponse>;
    /**
     * 获取云原生API网关实例网络配置信息
     */
    DescribeCloudNativeAPIGatewayConfig(req: DescribeCloudNativeAPIGatewayConfigRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConfigResponse) => void): Promise<DescribeCloudNativeAPIGatewayConfigResponse>;
    /**
     * 创建治理中心命名空间
     */
    CreateGovernanceNamespaces(req: CreateGovernanceNamespacesRequest, cb?: (error: string, rep: CreateGovernanceNamespacesResponse) => void): Promise<CreateGovernanceNamespacesResponse>;
    /**
     * 查询服务下契约版本列表
     */
    DescribeGovernanceServiceContractVersions(req: DescribeGovernanceServiceContractVersionsRequest, cb?: (error: string, rep: DescribeGovernanceServiceContractVersionsResponse) => void): Promise<DescribeGovernanceServiceContractVersionsResponse>;
    /**
     * 更新网关上游实例列表，仅支持IPList服务类型
     */
    UpdateUpstreamTargets(req: UpdateUpstreamTargetsRequest, cb?: (error: string, rep: UpdateUpstreamTargetsResponse) => void): Promise<UpdateUpstreamTargetsResponse>;
    /**
     * 开启 WAF 防护
     */
    OpenWafProtection(req: OpenWafProtectionRequest, cb?: (error: string, rep: OpenWafProtectionResponse) => void): Promise<OpenWafProtectionResponse>;
    /**
     * 修改云原生网关的灰度规则
     */
    ModifyCloudNativeAPIGatewayCanaryRule(req: ModifyCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<ModifyCloudNativeAPIGatewayCanaryRuleResponse>;
    /**
     * 创建云原生网关服务
     */
    CreateCloudNativeAPIGatewayService(req: CreateCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceResponse) => void): Promise<CreateCloudNativeAPIGatewayServiceResponse>;
    /**
     * 删除云原生API网关实例
     */
    DeleteCloudNativeAPIGateway(req: DeleteCloudNativeAPIGatewayRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayResponse) => void): Promise<DeleteCloudNativeAPIGatewayResponse>;
    /**
     * 修改治理中心命名空间
     */
    ModifyGovernanceNamespaces(req: ModifyGovernanceNamespacesRequest, cb?: (error: string, rep: ModifyGovernanceNamespacesResponse) => void): Promise<ModifyGovernanceNamespacesResponse>;
    /**
     * 查询云原生API网关实例公网详情
     */
    DescribePublicNetwork(req: DescribePublicNetworkRequest, cb?: (error: string, rep: DescribePublicNetworkResponse) => void): Promise<DescribePublicNetworkResponse>;
    /**
     * 创建弹性伸缩策略
     */
    CreateAutoScalerResourceStrategy(req: CreateAutoScalerResourceStrategyRequest, cb?: (error: string, rep: CreateAutoScalerResourceStrategyResponse) => void): Promise<CreateAutoScalerResourceStrategyResponse>;
    /**
     * 创建配置文件
     */
    CreateConfigFile(req: CreateConfigFileRequest, cb?: (error: string, rep: CreateConfigFileResponse) => void): Promise<CreateConfigFileResponse>;
    /**
     * 修改云原生API网关实例Kong访问策略，支持白名单或者黑名单。
     */
    ModifyNetworkAccessStrategy(req: ModifyNetworkAccessStrategyRequest, cb?: (error: string, rep: ModifyNetworkAccessStrategyResponse) => void): Promise<ModifyNetworkAccessStrategyResponse>;
    /**
     * 获取云原生网关服务详情下的Upstream列表
     */
    DescribeCloudNativeAPIGatewayUpstream(req: DescribeCloudNativeAPIGatewayUpstreamRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayUpstreamResponse) => void): Promise<DescribeCloudNativeAPIGatewayUpstreamResponse>;
    /**
     * 创建或更新配置文件并发布配置
     */
    CreateOrUpdateConfigFileAndRelease(req: CreateOrUpdateConfigFileAndReleaseRequest, cb?: (error: string, rep: CreateOrUpdateConfigFileAndReleaseResponse) => void): Promise<CreateOrUpdateConfigFileAndReleaseResponse>;
    /**
     * 修改治理中心服务别名
     */
    ModifyGovernanceAlias(req: ModifyGovernanceAliasRequest, cb?: (error: string, rep: ModifyGovernanceAliasResponse) => void): Promise<ModifyGovernanceAliasResponse>;
    /**
     * 新建 WAF 防护域名
     */
    CreateWafDomains(req: CreateWafDomainsRequest, cb?: (error: string, rep: CreateWafDomainsResponse) => void): Promise<CreateWafDomainsResponse>;
    /**
     * 批量修改配置文件组
     */
    ModifyConfigFileGroup(req: ModifyConfigFileGroupRequest, cb?: (error: string, rep: ModifyConfigFileGroupResponse) => void): Promise<ModifyConfigFileGroupResponse>;
    /**
     * 回滚配置发布
     */
    RollbackConfigFileReleases(req: RollbackConfigFileReleasesRequest, cb?: (error: string, rep: RollbackConfigFileReleasesResponse) => void): Promise<RollbackConfigFileReleasesResponse>;
    /**
     * 创建引擎实例
     */
    CreateEngine(req: CreateEngineRequest, cb?: (error: string, rep: CreateEngineResponse) => void): Promise<CreateEngineResponse>;
    /**
     * 修改云原生网关上游实例节点健康状态
     */
    ModifyUpstreamNodeStatus(req: ModifyUpstreamNodeStatusRequest, cb?: (error: string, rep: ModifyUpstreamNodeStatusResponse) => void): Promise<ModifyUpstreamNodeStatusResponse>;
    /**
     * 弹性伸缩策略批量绑定网关分组
     */
    BindAutoScalerResourceStrategyToGroups(req: BindAutoScalerResourceStrategyToGroupsRequest, cb?: (error: string, rep: BindAutoScalerResourceStrategyToGroupsResponse) => void): Promise<BindAutoScalerResourceStrategyToGroupsResponse>;
    /**
     * 创建云原生网关限流插件(路由)
     */
    CreateCloudNativeAPIGatewayRouteRateLimit(req: CreateCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 删除 WAF 防护域名
     */
    DeleteWafDomains(req: DeleteWafDomainsRequest, cb?: (error: string, rep: DeleteWafDomainsResponse) => void): Promise<DeleteWafDomainsResponse>;
    /**
     * 查询公网地址信息
     */
    DescribePublicAddressConfig(req: DescribePublicAddressConfigRequest, cb?: (error: string, rep: DescribePublicAddressConfigResponse) => void): Promise<DescribePublicAddressConfigResponse>;
    /**
     * 删除云原生网关服务
     */
    DeleteCloudNativeAPIGatewayService(req: DeleteCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceResponse>;
    /**
     * 查询云原生网关路由列表
     */
    DescribeCloudNativeAPIGatewayRoutes(req: DescribeCloudNativeAPIGatewayRoutesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRoutesResponse) => void): Promise<DescribeCloudNativeAPIGatewayRoutesResponse>;
    /**
     * 根据条件分页查询配置文件组
     */
    DescribeConfigFileGroups(req: DescribeConfigFileGroupsRequest, cb?: (error: string, rep: DescribeConfigFileGroupsResponse) => void): Promise<DescribeConfigFileGroupsResponse>;
    /**
     * 获取云原生API网关实例信息
     */
    DescribeCloudNativeAPIGateway(req: DescribeCloudNativeAPIGatewayRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayResponse) => void): Promise<DescribeCloudNativeAPIGatewayResponse>;
    /**
     * 删除云原生网关路由
     */
    DeleteCloudNativeAPIGatewayRoute(req: DeleteCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteResponse) => void): Promise<DeleteCloudNativeAPIGatewayRouteResponse>;
    /**
     * 创建公网网络配置
     */
    CreateCloudNativeAPIGatewayPublicNetwork(req: CreateCloudNativeAPIGatewayPublicNetworkRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayPublicNetworkResponse) => void): Promise<CreateCloudNativeAPIGatewayPublicNetworkResponse>;
    /**
     * 查询nacos服务接口列表
     */
    DescribeNacosServerInterfaces(req: DescribeNacosServerInterfacesRequest, cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void): Promise<DescribeNacosServerInterfacesResponse>;
    /**
     * 修改配置文件
     */
    ModifyConfigFiles(req: ModifyConfigFilesRequest, cb?: (error: string, rep: ModifyConfigFilesResponse) => void): Promise<ModifyConfigFilesResponse>;
    /**
     * 修改云原生API网关实例的节点规格信息，例如节点扩缩容或者升降配
     */
    UpdateCloudNativeAPIGatewaySpec(req: UpdateCloudNativeAPIGatewaySpecRequest, cb?: (error: string, rep: UpdateCloudNativeAPIGatewaySpecResponse) => void): Promise<UpdateCloudNativeAPIGatewaySpecResponse>;
    /**
     * 创建治理中心服务
     */
    CreateGovernanceServices(req: CreateGovernanceServicesRequest, cb?: (error: string, rep: CreateGovernanceServicesResponse) => void): Promise<CreateGovernanceServicesResponse>;
    /**
     * 删除治理中心命名空间
     */
    DeleteGovernanceNamespaces(req: DeleteGovernanceNamespacesRequest, cb?: (error: string, rep: DeleteGovernanceNamespacesResponse) => void): Promise<DeleteGovernanceNamespacesResponse>;
    /**
     * 修改治理中心服务实例
     */
    ModifyGovernanceInstances(req: ModifyGovernanceInstancesRequest, cb?: (error: string, rep: ModifyGovernanceInstancesResponse) => void): Promise<ModifyGovernanceInstancesResponse>;
    /**
     * 根据命名空间、组名、名称、标签查询配置文件列表
     */
    DescribeConfigFiles(req: DescribeConfigFilesRequest, cb?: (error: string, rep: DescribeConfigFilesResponse) => void): Promise<DescribeConfigFilesResponse>;
    /**
     * 修改云原生API网关实例基础信息
     */
    ModifyCloudNativeAPIGateway(req: ModifyCloudNativeAPIGatewayRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayResponse) => void): Promise<ModifyCloudNativeAPIGatewayResponse>;
    /**
     * 创建云原生网关限流插件(服务)
     */
    CreateCloudNativeAPIGatewayServiceRateLimit(req: CreateCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 删除网关服务来源实例
     */
    DeleteNativeGatewayServiceSource(req: DeleteNativeGatewayServiceSourceRequest, cb?: (error: string, rep: DeleteNativeGatewayServiceSourceResponse) => void): Promise<DeleteNativeGatewayServiceSourceResponse>;
    /**
     * 获取配置文件发布历史列表
     */
    DescribeConfigFileReleaseHistories(req: DescribeConfigFileReleaseHistoriesRequest, cb?: (error: string, rep: DescribeConfigFileReleaseHistoriesResponse) => void): Promise<DescribeConfigFileReleaseHistoriesResponse>;
    /**
     * 查询云原生网关分组信息
     */
    DescribeNativeGatewayServerGroups(req: DescribeNativeGatewayServerGroupsRequest, cb?: (error: string, rep: DescribeNativeGatewayServerGroupsResponse) => void): Promise<DescribeNativeGatewayServerGroupsResponse>;
    /**
     * 更新云原生网关健康检查配置
     */
    UpdateUpstreamHealthCheckConfig(req: UpdateUpstreamHealthCheckConfigRequest, cb?: (error: string, rep: UpdateUpstreamHealthCheckConfigResponse) => void): Promise<UpdateUpstreamHealthCheckConfigResponse>;
}
