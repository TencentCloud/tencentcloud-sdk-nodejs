import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayPublicNetworkResponse, DeleteCloudNativeAPIGatewayRouteRateLimitResponse, DeleteWafDomainsRequest, DescribeCloudNativeAPIGatewayServiceRateLimitRequest, CreateCloudNativeAPIGatewayRequest, DescribeCloudNativeAPIGatewayNodesRequest, ModifyCloudNativeAPIGatewayRouteRequest, DescribeCloudNativeAPIGatewayUpstreamRequest, DeleteNativeGatewayServerGroupResponse, ModifyCloudNativeAPIGatewayCertificateResponse, CreateCloudNativeAPIGatewayRouteRateLimitResponse, DescribeSREInstanceAccessAddressResponse, ModifyCloudNativeAPIGatewayCanaryRuleResponse, DescribeUpstreamHealthCheckConfigRequest, CreateNativeGatewayServerGroupRequest, DescribeCloudNativeAPIGatewayCertificatesRequest, ModifyCloudNativeAPIGatewayRouteRateLimitRequest, ModifyCloudNativeAPIGatewayResponse, CloseWafProtectionRequest, ModifyCloudNativeAPIGatewayServiceResponse, DescribeCloudNativeAPIGatewayNodesResponse, CreateCloudNativeAPIGatewayResponse, DescribeUpstreamHealthCheckConfigResponse, OpenWafProtectionResponse, DeleteCloudNativeAPIGatewayCertificateResponse, DeleteCloudNativeAPIGatewayCanaryRuleRequest, DescribeZookeeperServerInterfacesRequest, DescribeNacosReplicasRequest, CreateCloudNativeAPIGatewayServiceRequest, ModifyConsoleNetworkRequest, ModifyCloudNativeAPIGatewayCertificateRequest, CreateWafDomainsResponse, DescribeCloudNativeAPIGatewayServicesRequest, DescribeCloudNativeAPIGatewayUpstreamResponse, DescribeCloudNativeAPIGatewayCertificatesResponse, UpdateEngineInternetAccessRequest, CreateCloudNativeAPIGatewayCanaryRuleResponse, DescribeSREInstancesRequest, DeleteEngineResponse, DescribeCloudNativeAPIGatewayRoutesResponse, DescribeWafProtectionResponse, DescribeZookeeperReplicasRequest, UpdateUpstreamTargetsRequest, DeleteCloudNativeAPIGatewayServiceResponse, ModifyNetworkAccessStrategyRequest, DeleteCloudNativeAPIGatewayRouteResponse, DescribeCloudNativeAPIGatewayPortsResponse, CreateCloudNativeAPIGatewayRouteRateLimitRequest, DeleteNativeGatewayServerGroupRequest, ModifyCloudNativeAPIGatewayRouteResponse, DescribeNacosReplicasResponse, DeleteCloudNativeAPIGatewayServiceRateLimitRequest, ModifyUpstreamNodeStatusRequest, DescribeCloudNativeAPIGatewayConfigResponse, CreateCloudNativeAPIGatewayRouteResponse, DescribeCloudNativeAPIGatewayConfigRequest, DescribeCloudNativeAPIGatewaysRequest, DescribeNacosServerInterfacesResponse, DescribeCloudNativeAPIGatewayServiceRateLimitResponse, DeleteCloudNativeAPIGatewayServiceRequest, CreateCloudNativeAPIGatewayCertificateResponse, CreateCloudNativeAPIGatewayCanaryRuleRequest, ModifyNativeGatewayServerGroupRequest, DescribeCloudNativeAPIGatewayRouteRateLimitRequest, DescribeOneCloudNativeAPIGatewayServiceRequest, DescribeCloudNativeAPIGatewaysResponse, UpdateEngineInternetAccessResponse, UpdateCloudNativeAPIGatewaySpecRequest, DescribeCloudNativeAPIGatewayServicesResponse, DeleteCloudNativeAPIGatewayRouteRateLimitRequest, DeleteEngineRequest, CreateCloudNativeAPIGatewayPublicNetworkResponse, DescribeWafDomainsResponse, ModifyNetworkBasicInfoRequest, ModifyCloudNativeAPIGatewayServiceRateLimitRequest, DescribeSREInstanceAccessAddressRequest, DescribeCloudNativeAPIGatewayCanaryRulesResponse, UpdateUpstreamTargetsResponse, DeleteCloudNativeAPIGatewayCertificateRequest, DeleteCloudNativeAPIGatewayServiceRateLimitResponse, CloseWafProtectionResponse, UpdateUpstreamHealthCheckConfigRequest, UpdateCloudNativeAPIGatewaySpecResponse, DescribeZookeeperServerInterfacesResponse, ModifyNetworkAccessStrategyResponse, DescribeNativeGatewayServerGroupsRequest, DeleteCloudNativeAPIGatewayRequest, DescribeCloudNativeAPIGatewayCertificateDetailsResponse, UpdateCloudNativeAPIGatewayCertificateInfoRequest, DescribeOneCloudNativeAPIGatewayServiceResponse, ModifyCloudNativeAPIGatewayServiceRequest, DeleteCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayCertificateRequest, DescribeWafDomainsRequest, DescribeWafProtectionRequest, ModifyUpstreamNodeStatusResponse, CreateCloudNativeAPIGatewayPublicNetworkRequest, DescribeCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayRequest, DescribeNativeGatewayServerGroupsResponse, OpenWafProtectionRequest, DeleteCloudNativeAPIGatewayPublicNetworkRequest, DeleteCloudNativeAPIGatewayRouteRequest, DescribeCloudNativeAPIGatewayRoutesRequest, CreateEngineResponse, CreateCloudNativeAPIGatewayServiceRateLimitResponse, ModifyCloudNativeAPIGatewayServiceRateLimitResponse, DescribeNacosServerInterfacesRequest, UpdateUpstreamHealthCheckConfigResponse, DescribeSREInstancesResponse, DescribeCloudNativeAPIGatewayCertificateDetailsRequest, CreateWafDomainsRequest, CreateCloudNativeAPIGatewayRouteRequest, CreateNativeGatewayServerGroupResponse, CreateCloudNativeAPIGatewayServiceRateLimitRequest, DescribeZookeeperReplicasResponse, CreateEngineRequest, ModifyCloudNativeAPIGatewayCanaryRuleRequest, ModifyConsoleNetworkResponse, DeleteWafDomainsResponse, ModifyCloudNativeAPIGatewayRequest, ModifyCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayCanaryRulesRequest, DeleteCloudNativeAPIGatewayCanaryRuleResponse, DescribeCloudNativeAPIGatewayPortsRequest, ModifyNativeGatewayServerGroupResponse, UpdateCloudNativeAPIGatewayCertificateInfoResponse, ModifyNetworkBasicInfoResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改网关实例Konga网络配置
     */
    ModifyConsoleNetwork(req: ModifyConsoleNetworkRequest, cb?: (error: string, rep: ModifyConsoleNetworkResponse) => void): Promise<ModifyConsoleNetworkResponse>;
    /**
     * 创建公网网络配置
     */
    CreateCloudNativeAPIGatewayPublicNetwork(req: CreateCloudNativeAPIGatewayPublicNetworkRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayPublicNetworkResponse) => void): Promise<CreateCloudNativeAPIGatewayPublicNetworkResponse>;
    /**
     * 获取云原生网关服务健康检查配置
     */
    DescribeUpstreamHealthCheckConfig(req: DescribeUpstreamHealthCheckConfigRequest, cb?: (error: string, rep: DescribeUpstreamHealthCheckConfigResponse) => void): Promise<DescribeUpstreamHealthCheckConfigResponse>;
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    DescribeZookeeperReplicas(req: DescribeZookeeperReplicasRequest, cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void): Promise<DescribeZookeeperReplicasResponse>;
    /**
     * 修改云原生API网关实例分组基础信息
     */
    ModifyNativeGatewayServerGroup(req: ModifyNativeGatewayServerGroupRequest, cb?: (error: string, rep: ModifyNativeGatewayServerGroupResponse) => void): Promise<ModifyNativeGatewayServerGroupResponse>;
    /**
     * 修改云原生网关上游实例节点健康状态
     */
    ModifyUpstreamNodeStatus(req: ModifyUpstreamNodeStatusRequest, cb?: (error: string, rep: ModifyUpstreamNodeStatusResponse) => void): Promise<ModifyUpstreamNodeStatusResponse>;
    /**
     * 删除云原生网关的限流插件(服务)
     */
    DeleteCloudNativeAPIGatewayServiceRateLimit(req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 新建 WAF 防护域名
     */
    CreateWafDomains(req: CreateWafDomainsRequest, cb?: (error: string, rep: CreateWafDomainsResponse) => void): Promise<CreateWafDomainsResponse>;
    /**
     * 查询zookeeper服务接口列表
     */
    DescribeZookeeperServerInterfaces(req: DescribeZookeeperServerInterfacesRequest, cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void): Promise<DescribeZookeeperServerInterfacesResponse>;
    /**
     * 获取云原生网关服务详情
     */
    DescribeOneCloudNativeAPIGatewayService(req: DescribeOneCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: DescribeOneCloudNativeAPIGatewayServiceResponse) => void): Promise<DescribeOneCloudNativeAPIGatewayServiceResponse>;
    /**
     * 获取云原生网关服务详情下的Upstream列表
     */
    DescribeCloudNativeAPIGatewayUpstream(req: DescribeCloudNativeAPIGatewayUpstreamRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayUpstreamResponse) => void): Promise<DescribeCloudNativeAPIGatewayUpstreamResponse>;
    /**
     * 查询云原生网关证书列表
     */
    DescribeCloudNativeAPIGatewayCertificates(req: DescribeCloudNativeAPIGatewayCertificatesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificatesResponse) => void): Promise<DescribeCloudNativeAPIGatewayCertificatesResponse>;
    /**
     * 修改云原生网关限流插件(服务)
     */
    ModifyCloudNativeAPIGatewayServiceRateLimit(req: ModifyCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 创建引擎实例
     */
    CreateEngine(req: CreateEngineRequest, cb?: (error: string, rep: CreateEngineResponse) => void): Promise<CreateEngineResponse>;
    /**
     * 修改云原生网关的灰度规则
     */
    ModifyCloudNativeAPIGatewayCanaryRule(req: ModifyCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<ModifyCloudNativeAPIGatewayCanaryRuleResponse>;
    /**
     * 删除公网网络配置
     */
    DeleteCloudNativeAPIGatewayPublicNetwork(req: DeleteCloudNativeAPIGatewayPublicNetworkRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayPublicNetworkResponse) => void): Promise<DeleteCloudNativeAPIGatewayPublicNetworkResponse>;
    /**
     * 删除 WAF 防护域名
     */
    DeleteWafDomains(req: DeleteWafDomainsRequest, cb?: (error: string, rep: DeleteWafDomainsResponse) => void): Promise<DeleteWafDomainsResponse>;
    /**
     * 删除云原生网关服务
     */
    DeleteCloudNativeAPIGatewayService(req: DeleteCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceResponse>;
    /**
     * 创建云原生网关服务
     */
    CreateCloudNativeAPIGatewayService(req: CreateCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceResponse) => void): Promise<CreateCloudNativeAPIGatewayServiceResponse>;
    /**
     * 查询云原生网关路由列表
     */
    DescribeCloudNativeAPIGatewayRoutes(req: DescribeCloudNativeAPIGatewayRoutesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRoutesResponse) => void): Promise<DescribeCloudNativeAPIGatewayRoutesResponse>;
    /**
     * 获取云原生API网关实例信息
     */
    DescribeCloudNativeAPIGateway(req: DescribeCloudNativeAPIGatewayRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayResponse) => void): Promise<DescribeCloudNativeAPIGatewayResponse>;
    /**
     * 获取云原生API网关实例端口信息
     */
    DescribeCloudNativeAPIGatewayPorts(req: DescribeCloudNativeAPIGatewayPortsRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayPortsResponse) => void): Promise<DescribeCloudNativeAPIGatewayPortsResponse>;
    /**
     * 删除云原生网关路由
     */
    DeleteCloudNativeAPIGatewayRoute(req: DeleteCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteResponse) => void): Promise<DeleteCloudNativeAPIGatewayRouteResponse>;
    /**
     * 删除引擎实例
     */
    DeleteEngine(req: DeleteEngineRequest, cb?: (error: string, rep: DeleteEngineResponse) => void): Promise<DeleteEngineResponse>;
    /**
     * 更新云原生网关证书
     */
    ModifyCloudNativeAPIGatewayCertificate(req: ModifyCloudNativeAPIGatewayCertificateRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCertificateResponse) => void): Promise<ModifyCloudNativeAPIGatewayCertificateResponse>;
    /**
     * 删除云原生网关的灰度规则
     */
    DeleteCloudNativeAPIGatewayCanaryRule(req: DeleteCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<DeleteCloudNativeAPIGatewayCanaryRuleResponse>;
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
     * 查询nacos服务接口列表
     */
    DescribeNacosServerInterfaces(req: DescribeNacosServerInterfacesRequest, cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void): Promise<DescribeNacosServerInterfacesResponse>;
    /**
     * 修改云原生网关路由
     */
    ModifyCloudNativeAPIGatewayRoute(req: ModifyCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteResponse) => void): Promise<ModifyCloudNativeAPIGatewayRouteResponse>;
    /**
     * 关闭 WAF 防护
     */
    CloseWafProtection(req: CloseWafProtectionRequest, cb?: (error: string, rep: CloseWafProtectionResponse) => void): Promise<CloseWafProtectionResponse>;
    /**
     * 创建云原生API网关实例
     */
    CreateCloudNativeAPIGateway(req: CreateCloudNativeAPIGatewayRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayResponse) => void): Promise<CreateCloudNativeAPIGatewayResponse>;
    /**
     * 用于查询引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
    /**
     * 查询云原生网关的限流插件(路由)
     */
    DescribeCloudNativeAPIGatewayRouteRateLimit(req: DescribeCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 获取 WAF 防护状态
     */
    DescribeWafProtection(req: DescribeWafProtectionRequest, cb?: (error: string, rep: DescribeWafProtectionResponse) => void): Promise<DescribeWafProtectionResponse>;
    /**
     * 获取云原生API网关实例网络配置信息
     */
    DescribeCloudNativeAPIGatewayConfig(req: DescribeCloudNativeAPIGatewayConfigRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayConfigResponse) => void): Promise<DescribeCloudNativeAPIGatewayConfigResponse>;
    /**
     * 修改云原生网关服务
     */
    ModifyCloudNativeAPIGatewayService(req: ModifyCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceResponse) => void): Promise<ModifyCloudNativeAPIGatewayServiceResponse>;
    /**
     * 获取云原生网关节点列表
     */
    DescribeCloudNativeAPIGatewayNodes(req: DescribeCloudNativeAPIGatewayNodesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void): Promise<DescribeCloudNativeAPIGatewayNodesResponse>;
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
     * 修改引擎公网访问配置
     */
    UpdateEngineInternetAccess(req: UpdateEngineInternetAccessRequest, cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void): Promise<UpdateEngineInternetAccessResponse>;
    /**
     * 开启 WAF 防护
     */
    OpenWafProtection(req: OpenWafProtectionRequest, cb?: (error: string, rep: OpenWafProtectionResponse) => void): Promise<OpenWafProtectionResponse>;
    /**
     * 更新网关上游实例列表，仅支持IPList服务类型
     */
    UpdateUpstreamTargets(req: UpdateUpstreamTargetsRequest, cb?: (error: string, rep: UpdateUpstreamTargetsResponse) => void): Promise<UpdateUpstreamTargetsResponse>;
    /**
     * 修改云原生API网关实例基础信息
     */
    ModifyCloudNativeAPIGateway(req: ModifyCloudNativeAPIGatewayRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayResponse) => void): Promise<ModifyCloudNativeAPIGatewayResponse>;
    /**
     * 创建云原生网关限流插件(服务)
     */
    CreateCloudNativeAPIGatewayServiceRateLimit(req: CreateCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 删除云原生API网关实例
     */
    DeleteCloudNativeAPIGateway(req: DeleteCloudNativeAPIGatewayRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayResponse) => void): Promise<DeleteCloudNativeAPIGatewayResponse>;
    /**
     * 修改云原生API网关实例网络基本信息，例如带宽以及描述，只支持修改客户端公网/内网的信息。
     */
    ModifyNetworkBasicInfo(req: ModifyNetworkBasicInfoRequest, cb?: (error: string, rep: ModifyNetworkBasicInfoResponse) => void): Promise<ModifyNetworkBasicInfoResponse>;
    /**
     * 修改云原生API网关实例Kong访问策略，支持白名单或者黑名单。
     */
    ModifyNetworkAccessStrategy(req: ModifyNetworkAccessStrategyRequest, cb?: (error: string, rep: ModifyNetworkAccessStrategyResponse) => void): Promise<ModifyNetworkAccessStrategyResponse>;
    /**
     * 删除云原生网关证书
     */
    DeleteCloudNativeAPIGatewayCertificate(req: DeleteCloudNativeAPIGatewayCertificateRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCertificateResponse) => void): Promise<DeleteCloudNativeAPIGatewayCertificateResponse>;
    /**
     * 创建云原生网关路由
     */
    CreateCloudNativeAPIGatewayRoute(req: CreateCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteResponse>;
    /**
     * 修改云原生网关证书信息
     */
    UpdateCloudNativeAPIGatewayCertificateInfo(req: UpdateCloudNativeAPIGatewayCertificateInfoRequest, cb?: (error: string, rep: UpdateCloudNativeAPIGatewayCertificateInfoResponse) => void): Promise<UpdateCloudNativeAPIGatewayCertificateInfoResponse>;
    /**
     * 创建云原生网关引擎分组
     */
    CreateNativeGatewayServerGroup(req: CreateNativeGatewayServerGroupRequest, cb?: (error: string, rep: CreateNativeGatewayServerGroupResponse) => void): Promise<CreateNativeGatewayServerGroupResponse>;
    /**
     * 删除云原生网关的限流插件(路由)
     */
    DeleteCloudNativeAPIGatewayRouteRateLimit(req: DeleteCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 创建云原生网关限流插件(路由)
     */
    CreateCloudNativeAPIGatewayRouteRateLimit(req: CreateCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 查询云原生网关分组信息
     */
    DescribeNativeGatewayServerGroups(req: DescribeNativeGatewayServerGroupsRequest, cb?: (error: string, rep: DescribeNativeGatewayServerGroupsResponse) => void): Promise<DescribeNativeGatewayServerGroupsResponse>;
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    DescribeNacosReplicas(req: DescribeNacosReplicasRequest, cb?: (error: string, rep: DescribeNacosReplicasResponse) => void): Promise<DescribeNacosReplicasResponse>;
    /**
     * 更新云原生网关健康检查配置
     */
    UpdateUpstreamHealthCheckConfig(req: UpdateUpstreamHealthCheckConfigRequest, cb?: (error: string, rep: UpdateUpstreamHealthCheckConfigResponse) => void): Promise<UpdateUpstreamHealthCheckConfigResponse>;
    /**
     * 查询引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
    /**
     * 删除网关实例分组
     */
    DeleteNativeGatewayServerGroup(req: DeleteNativeGatewayServerGroupRequest, cb?: (error: string, rep: DeleteNativeGatewayServerGroupResponse) => void): Promise<DeleteNativeGatewayServerGroupResponse>;
    /**
     * 查询云原生网关灰度规则列表
     */
    DescribeCloudNativeAPIGatewayCanaryRules(req: DescribeCloudNativeAPIGatewayCanaryRulesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCanaryRulesResponse) => void): Promise<DescribeCloudNativeAPIGatewayCanaryRulesResponse>;
    /**
     * 修改云原生API网关实例的节点规格信息，例如节点扩缩容或者升降配
     */
    UpdateCloudNativeAPIGatewaySpec(req: UpdateCloudNativeAPIGatewaySpecRequest, cb?: (error: string, rep: UpdateCloudNativeAPIGatewaySpecResponse) => void): Promise<UpdateCloudNativeAPIGatewaySpecResponse>;
    /**
     * 查询云原生网关的限流插件(服务)
     */
    DescribeCloudNativeAPIGatewayServiceRateLimit(req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse>;
}
