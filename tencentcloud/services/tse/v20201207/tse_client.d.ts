import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNacosReplicasRequest, CreateCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayServiceRateLimitRequest, DescribeCloudNativeAPIGatewayNodesRequest, ModifyCloudNativeAPIGatewayRouteRequest, DescribeSREInstanceAccessAddressResponse, DeleteCloudNativeAPIGatewayCanaryRuleRequest, DescribeCloudNativeAPIGatewayServicesResponse, ModifyCloudNativeAPIGatewayServiceResponse, DescribeCloudNativeAPIGatewayNodesResponse, ModifyCloudNativeAPIGatewayCanaryRuleResponse, ModifyCloudNativeAPIGatewayRouteRateLimitRequest, CreateCloudNativeAPIGatewayServiceRequest, DescribeCloudNativeAPIGatewayServicesRequest, UpdateEngineInternetAccessRequest, CreateCloudNativeAPIGatewayCanaryRuleResponse, CreateCloudNativeAPIGatewayRouteRequest, DeleteEngineResponse, DescribeCloudNativeAPIGatewayRoutesResponse, DescribeZookeeperReplicasRequest, DeleteCloudNativeAPIGatewayServiceResponse, DeleteCloudNativeAPIGatewayRouteResponse, DescribeCloudNativeAPIGatewayPortsResponse, CreateCloudNativeAPIGatewayRouteRateLimitRequest, ModifyCloudNativeAPIGatewayRouteResponse, DescribeNacosReplicasResponse, DeleteCloudNativeAPIGatewayServiceRateLimitRequest, CreateCloudNativeAPIGatewayRouteResponse, DescribeNacosServerInterfacesResponse, DescribeCloudNativeAPIGatewayServiceRateLimitResponse, DeleteCloudNativeAPIGatewayServiceRequest, DescribeCloudNativeAPIGatewayRouteRateLimitRequest, DescribeOneCloudNativeAPIGatewayServiceRequest, CreateCloudNativeAPIGatewayRouteRateLimitResponse, UpdateEngineInternetAccessResponse, DeleteCloudNativeAPIGatewayRouteRateLimitRequest, DeleteEngineRequest, DescribeCloudNativeAPIGatewayCanaryRulesResponse, DeleteCloudNativeAPIGatewayServiceRateLimitResponse, ModifyCloudNativeAPIGatewayServiceRateLimitRequest, DescribeZookeeperServerInterfacesResponse, DescribeOneCloudNativeAPIGatewayServiceResponse, ModifyCloudNativeAPIGatewayServiceRequest, DescribeZookeeperServerInterfacesRequest, DescribeCloudNativeAPIGatewayRouteRateLimitResponse, CreateCloudNativeAPIGatewayCanaryRuleRequest, DeleteCloudNativeAPIGatewayRouteRequest, DescribeCloudNativeAPIGatewayRoutesRequest, CreateEngineResponse, CreateCloudNativeAPIGatewayServiceRateLimitResponse, ModifyCloudNativeAPIGatewayServiceRateLimitResponse, DescribeNacosServerInterfacesRequest, DescribeSREInstancesResponse, DescribeSREInstancesRequest, CreateCloudNativeAPIGatewayServiceRateLimitRequest, DescribeZookeeperReplicasResponse, CreateEngineRequest, ModifyCloudNativeAPIGatewayCanaryRuleRequest, DescribeSREInstanceAccessAddressRequest, ModifyCloudNativeAPIGatewayRouteRateLimitResponse, DescribeCloudNativeAPIGatewayCanaryRulesRequest, DeleteCloudNativeAPIGatewayCanaryRuleResponse, DescribeCloudNativeAPIGatewayPortsRequest } from "./tse_models";
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
     * 删除云原生网关的限流插件(服务)
     */
    DeleteCloudNativeAPIGatewayServiceRateLimit(req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 查询zookeeper服务接口列表
     */
    DescribeZookeeperServerInterfaces(req: DescribeZookeeperServerInterfacesRequest, cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void): Promise<DescribeZookeeperServerInterfacesResponse>;
    /**
     * 修改云原生网关限流插件(服务)
     */
    ModifyCloudNativeAPIGatewayServiceRateLimit(req: ModifyCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 创建引擎实例
     */
    CreateEngine(req: CreateEngineRequest, cb?: (error: string, rep: CreateEngineResponse) => void): Promise<CreateEngineResponse>;
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
     * 删除云原生网关的灰度规则
     */
    DeleteCloudNativeAPIGatewayCanaryRule(req: DeleteCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<DeleteCloudNativeAPIGatewayCanaryRuleResponse>;
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
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    DescribeZookeeperReplicas(req: DescribeZookeeperReplicasRequest, cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void): Promise<DescribeZookeeperReplicasResponse>;
    /**
     * 用于查询引擎实例列表
     */
    DescribeSREInstances(req: DescribeSREInstancesRequest, cb?: (error: string, rep: DescribeSREInstancesResponse) => void): Promise<DescribeSREInstancesResponse>;
    /**
     * 查询云原生网关的限流插件(服务)
     */
    DescribeCloudNativeAPIGatewayServiceRateLimit(req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 查询云原生网关的限流插件(路由)
     */
    DescribeCloudNativeAPIGatewayRouteRateLimit(req: DescribeCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse>;
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
     * 修改引擎公网访问配置
     */
    UpdateEngineInternetAccess(req: UpdateEngineInternetAccessRequest, cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void): Promise<UpdateEngineInternetAccessResponse>;
    /**
     * 修改云原生网关的灰度规则
     */
    ModifyCloudNativeAPIGatewayCanaryRule(req: ModifyCloudNativeAPIGatewayCanaryRuleRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCanaryRuleResponse) => void): Promise<ModifyCloudNativeAPIGatewayCanaryRuleResponse>;
    /**
     * 创建云原生网关限流插件(服务)
     */
    CreateCloudNativeAPIGatewayServiceRateLimit(req: CreateCloudNativeAPIGatewayServiceRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayServiceRateLimitResponse>;
    /**
     * 创建云原生网关路由
     */
    CreateCloudNativeAPIGatewayRoute(req: CreateCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteResponse>;
    /**
     * 删除云原生网关的限流插件(路由)
     */
    DeleteCloudNativeAPIGatewayRouteRateLimit(req: DeleteCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 创建云原生网关限流插件(路由)
     */
    CreateCloudNativeAPIGatewayRouteRateLimit(req: CreateCloudNativeAPIGatewayRouteRateLimitRequest, cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteRateLimitResponse) => void): Promise<CreateCloudNativeAPIGatewayRouteRateLimitResponse>;
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    DescribeNacosReplicas(req: DescribeNacosReplicasRequest, cb?: (error: string, rep: DescribeNacosReplicasResponse) => void): Promise<DescribeNacosReplicasResponse>;
    /**
     * 修改云原生网关路由
     */
    ModifyCloudNativeAPIGatewayRoute(req: ModifyCloudNativeAPIGatewayRouteRequest, cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteResponse) => void): Promise<ModifyCloudNativeAPIGatewayRouteResponse>;
    /**
     * 查询云原生网关灰度规则列表
     */
    DescribeCloudNativeAPIGatewayCanaryRules(req: DescribeCloudNativeAPIGatewayCanaryRulesRequest, cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCanaryRulesResponse) => void): Promise<DescribeCloudNativeAPIGatewayCanaryRulesResponse>;
    /**
     * 查询引擎实例访问地址
     */
    DescribeSREInstanceAccessAddress(req: DescribeSREInstanceAccessAddressRequest, cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void): Promise<DescribeSREInstanceAccessAddressResponse>;
}
