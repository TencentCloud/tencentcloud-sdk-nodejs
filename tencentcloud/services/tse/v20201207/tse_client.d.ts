import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayServiceRateLimitRequest, CreateCloudNativeAPIGatewayRequest, DescribeCloudNativeAPIGatewayNodesRequest, ModifyCloudNativeAPIGatewayRouteRequest, DeleteNativeGatewayServerGroupResponse, ModifyCloudNativeAPIGatewayCertificateResponse, CreateCloudNativeAPIGatewayRouteRateLimitResponse, DescribeSREInstanceAccessAddressResponse, ModifyCloudNativeAPIGatewayCanaryRuleResponse, CreateNativeGatewayServerGroupRequest, DescribeCloudNativeAPIGatewayCertificatesRequest, ModifyCloudNativeAPIGatewayServiceResponse, DescribeCloudNativeAPIGatewayNodesResponse, CreateCloudNativeAPIGatewayResponse, DeleteCloudNativeAPIGatewayCertificateResponse, DeleteCloudNativeAPIGatewayCanaryRuleRequest, ModifyCloudNativeAPIGatewayRouteRateLimitRequest, DescribeNacosReplicasRequest, CreateCloudNativeAPIGatewayServiceRequest, ModifyCloudNativeAPIGatewayCertificateRequest, DescribeCloudNativeAPIGatewayServicesRequest, UpdateUpstreamTargetsResponse, DescribeCloudNativeAPIGatewayCertificatesResponse, UpdateEngineInternetAccessRequest, CreateCloudNativeAPIGatewayCanaryRuleResponse, DescribeSREInstancesRequest, DeleteEngineResponse, DescribeCloudNativeAPIGatewayRoutesResponse, DescribeZookeeperReplicasRequest, UpdateUpstreamTargetsRequest, DeleteCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayRouteResponse, DescribeCloudNativeAPIGatewayPortsResponse, CreateCloudNativeAPIGatewayRouteRateLimitRequest, DeleteNativeGatewayServerGroupRequest, ModifyCloudNativeAPIGatewayRouteResponse, DescribeNacosReplicasResponse, DeleteCloudNativeAPIGatewayServiceRateLimitRequest, DescribeCloudNativeAPIGatewayConfigResponse, CreateCloudNativeAPIGatewayRouteResponse, DescribeCloudNativeAPIGatewayConfigRequest, DescribeCloudNativeAPIGatewaysRequest, DescribeNacosServerInterfacesResponse, DescribeCloudNativeAPIGatewayServiceRateLimitResponse, DeleteCloudNativeAPIGatewayServiceRequest, CreateCloudNativeAPIGatewayCertificateResponse, CreateCloudNativeAPIGatewayCanaryRuleRequest, ModifyNativeGatewayServerGroupRequest, DescribeCloudNativeAPIGatewayRouteRateLimitRequest, DescribeOneCloudNativeAPIGatewayServiceRequest, DescribeCloudNativeAPIGatewaysResponse, UpdateEngineInternetAccessResponse, UpdateCloudNativeAPIGatewaySpecRequest, DescribeCloudNativeAPIGatewayServicesResponse, DeleteCloudNativeAPIGatewayRouteRateLimitRequest, DeleteEngineRequest, ModifyCloudNativeAPIGatewayServiceRateLimitRequest, DescribeSREInstanceAccessAddressRequest, DescribeCloudNativeAPIGatewayCanaryRulesResponse, DeleteCloudNativeAPIGatewayCertificateRequest, DeleteCloudNativeAPIGatewayServiceRateLimitResponse, UpdateCloudNativeAPIGatewaySpecResponse, DescribeZookeeperServerInterfacesResponse, DescribeNativeGatewayServerGroupsRequest, DeleteCloudNativeAPIGatewayRequest, DescribeCloudNativeAPIGatewayCertificateDetailsResponse, UpdateCloudNativeAPIGatewayCertificateInfoRequest, DescribeOneCloudNativeAPIGatewayServiceResponse, ModifyCloudNativeAPIGatewayServiceRequest, DeleteCloudNativeAPIGatewayResponse, CreateCloudNativeAPIGatewayCertificateRequest, ModifyCloudNativeAPIGatewayResponse, DescribeZookeeperServerInterfacesRequest, DescribeCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayRequest, DescribeNativeGatewayServerGroupsResponse, DeleteCloudNativeAPIGatewayRouteRequest, DescribeCloudNativeAPIGatewayRoutesRequest, CreateEngineResponse, CreateCloudNativeAPIGatewayServiceRateLimitResponse, ModifyCloudNativeAPIGatewayServiceRateLimitResponse, DescribeNacosServerInterfacesRequest, DescribeSREInstancesResponse, DescribeCloudNativeAPIGatewayCertificateDetailsRequest, CreateCloudNativeAPIGatewayRouteRequest, CreateNativeGatewayServerGroupResponse, CreateCloudNativeAPIGatewayServiceRateLimitRequest, DescribeZookeeperReplicasResponse, CreateEngineRequest, ModifyCloudNativeAPIGatewayCanaryRuleRequest, ModifyCloudNativeAPIGatewayRequest, ModifyCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayCanaryRulesRequest, DeleteCloudNativeAPIGatewayCanaryRuleResponse, DescribeCloudNativeAPIGatewayPortsRequest, ModifyNativeGatewayServerGroupResponse, UpdateCloudNativeAPIGatewayCertificateInfoResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    DescribeNacosReplicas(req: DescribeNacosReplicasRequest, cb?: (error: string, rep: DescribeNacosReplicasResponse) => void): Promise<DescribeNacosReplicasResponse>;
    /**
     * 修改云原生API网关实例分组基础信息
     */
    ModifyNativeGatewayServerGroup(req: ModifyNativeGatewayServerGroupRequest, cb?: (error: string, rep: ModifyNativeGatewayServerGroupResponse) => void): Promise<ModifyNativeGatewayServerGroupResponse>;
    /**
     * 删除云原生网关的限流插件(服务)
     */
    DeleteCloudNativeAPIGatewayServiceRateLimit(req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 查询zookeeper服务接口列表
     */
    DescribeZookeeperServerInterfaces(req: DescribeZookeeperServerInterfacesRequest, cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void): Promise<DescribeZookeeperServerInterfacesResponse>;
    /**
     * 获取云原生网关服务详情
     */
    DescribeOneCloudNativeAPIGatewayService(req: DescribeOneCloudNativeAPIGatewayServiceRequest, cb?: (error: string, rep: DescribeOneCloudNativeAPIGatewayServiceResponse) => void): Promise<DescribeOneCloudNativeAPIGatewayServiceResponse>;
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
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    DescribeZookeeperReplicas(req: DescribeZookeeperReplicasRequest, cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void): Promise<DescribeZookeeperReplicasResponse>;
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
     * 查询云原生网关单个证书详情
     */
    DescribeCloudNativeAPIGatewayCertificateDetails(req: DescribeCloudNativeAPIGatewayCertificateDetailsRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCertificateDetailsResponse) => void): Promise<DescribeCloudNativeAPIGatewayCertificateDetailsResponse>;
    /**
     * 修改引擎公网访问配置
     */
    UpdateEngineInternetAccess(req: UpdateEngineInternetAccessRequest, cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void): Promise<UpdateEngineInternetAccessResponse>;
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
     * 更新网关上游实例列表，仅支持IPList服务类型
     */
    UpdateUpstreamTargets(req: UpdateUpstreamTargetsRequest, cb?: (error: string, rep: UpdateUpstreamTargetsResponse) => void): Promise<UpdateUpstreamTargetsResponse>;
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
     * 修改云原生API网关实例的节点规格信息，比如节点扩缩容或者升降配
     */
    UpdateCloudNativeAPIGatewaySpec(req: UpdateCloudNativeAPIGatewaySpecRequest, cb?: (error: string, rep: UpdateCloudNativeAPIGatewaySpecResponse) => void): Promise<UpdateCloudNativeAPIGatewaySpecResponse>;
    /**
     * 查询云原生网关的限流插件(服务)
     */
    DescribeCloudNativeAPIGatewayServiceRateLimit(req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse>;
}
