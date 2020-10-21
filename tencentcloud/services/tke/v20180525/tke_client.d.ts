import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeClusterEndpointVipStatusRequest, DescribeClusterSecurityResponse, DescribeClusterSecurityRequest, DeleteClusterInstancesResponse, DescribeClusterKubeconfigResponse, CreateClusterRouteRequest, DescribeClusterEndpointVipStatusResponse, ModifyClusterEndpointSPRequest, DescribeClusterInstancesResponse, DeleteClusterResponse, CreateClusterRouteTableResponse, DeleteClusterEndpointResponse, DeleteClusterRequest, DeleteClusterAsGroupsRequest, DescribeExistedInstancesRequest, DescribeRegionsResponse, CreateClusterRouteResponse, DescribeClusterEndpointStatusRequest, DescribePrometheusAgentInstancesRequest, DescribeImagesResponse, ModifyClusterAttributeRequest, DeleteClusterRouteResponse, CreateClusterEndpointVipResponse, DescribeClusterRoutesResponse, DescribeClustersRequest, DeleteClusterEndpointVipResponse, CreatePrometheusDashboardResponse, DeleteClusterInstancesRequest, ModifyClusterAsGroupAttributeResponse, CreateClusterInstancesRequest, DescribeClusterRouteTablesResponse, DescribeClusterKubeconfigRequest, CreateClusterEndpointVipRequest, DescribeRouteTableConflictsResponse, DescribeRegionsRequest, DescribeClustersResponse, DescribeExistedInstancesResponse, ModifyClusterAttributeResponse, CreateClusterAsGroupRequest, CreateClusterResponse, DeleteClusterRouteTableRequest, CreateClusterRequest, AcquireClusterAdminRoleRequest, CreateClusterAsGroupResponse, DeleteClusterAsGroupsResponse, DescribeClusterInstancesRequest, CreateClusterEndpointResponse, AcquireClusterAdminRoleResponse, DeleteClusterEndpointVipRequest, DescribeClusterEndpointStatusResponse, CreatePrometheusDashboardRequest, AddExistedInstancesResponse, DeleteClusterRouteTableResponse, DescribeClusterAsGroupOptionRequest, DescribePrometheusAgentInstancesResponse, CreateClusterEndpointRequest, AddExistedInstancesRequest, CreateClusterInstancesResponse, DescribeClusterRouteTablesRequest, DescribeClusterRoutesRequest, DeleteClusterRouteRequest, DeleteClusterEndpointRequest, CreateClusterRouteTableRequest, DescribeClusterAsGroupsRequest, DescribeImagesRequest, ModifyClusterEndpointSPResponse, DescribeRouteTableConflictsRequest, DescribeClusterAsGroupOptionResponse, ModifyClusterAsGroupAttributeRequest, DescribeClusterAsGroupsResponse } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 创建grafana监控面板
     */
    CreatePrometheusDashboard(req: CreatePrometheusDashboardRequest, cb?: (error: string, rep: CreatePrometheusDashboardResponse) => void): Promise<CreatePrometheusDashboardResponse>;
    /**
     * 获取镜像信息
     */
    DescribeImages(req?: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 修改集群伸缩组属性
     */
    ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse>;
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse>;
    /**
     * 扩展(新建)集群节点
     */
    CreateClusterInstances(req: CreateClusterInstancesRequest, cb?: (error: string, rep: CreateClusterInstancesResponse) => void): Promise<CreateClusterInstancesResponse>;
    /**
     * 修改集群属性
     */
    ModifyClusterAttribute(req: ModifyClusterAttributeRequest, cb?: (error: string, rep: ModifyClusterAttributeResponse) => void): Promise<ModifyClusterAttributeResponse>;
    /**
     * 删除集群伸缩组
     */
    DeleteClusterAsGroups(req: DeleteClusterAsGroupsRequest, cb?: (error: string, rep: DeleteClusterAsGroupsResponse) => void): Promise<DeleteClusterAsGroupsResponse>;
    /**
     * 删除集群路由
     */
    DeleteClusterRoute(req: DeleteClusterRouteRequest, cb?: (error: string, rep: DeleteClusterRouteResponse) => void): Promise<DeleteClusterRouteResponse>;
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse>;
    /**
     * 删除集群(YUNAPI V3版本)
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 为已经存在的集群创建伸缩组
     */
    CreateClusterAsGroup(req: CreateClusterAsGroupRequest, cb?: (error: string, rep: CreateClusterAsGroupResponse) => void): Promise<CreateClusterAsGroupResponse>;
    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     */
    AcquireClusterAdminRole(req: AcquireClusterAdminRoleRequest, cb?: (error: string, rep: AcquireClusterAdminRoleResponse) => void): Promise<AcquireClusterAdminRoleResponse>;
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     */
    DescribeExistedInstances(req: DescribeExistedInstancesRequest, cb?: (error: string, rep: DescribeExistedInstancesResponse) => void): Promise<DescribeExistedInstancesResponse>;
    /**
     * 创建集群路由
     */
    CreateClusterRoute(req: CreateClusterRouteRequest, cb?: (error: string, rep: CreateClusterRouteResponse) => void): Promise<CreateClusterRouteResponse>;
    /**
     * 创建集群路由表
     */
    CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse>;
    /**
     * 集群弹性伸缩配置
     */
    DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse>;
    /**
     * 查询集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DescribeClusterEndpointStatus(req: DescribeClusterEndpointStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void): Promise<DescribeClusterEndpointStatusResponse>;
    /**
     * 集群关联的伸缩组列表
     */
    DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse>;
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse>;
    /**
     * 获取关联目标集群的实例列表
     */
    DescribePrometheusAgentInstances(req: DescribePrometheusAgentInstancesRequest, cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void): Promise<DescribePrometheusAgentInstancesResponse>;
    /**
     * 查询集群路由表
     */
    DescribeClusterRouteTables(req?: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse>;
    /**
     * 获取容器服务支持的所有地域
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 添加已经存在的实例到集群
     */
    AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse>;
    /**
     * 集群的密钥信息
     */
    DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse>;
    /**
     * 查询路由表冲突列表
     */
    DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse>;
    /**
     *  查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse>;
    /**
     * 删除集群中的实例
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    DescribeClusterKubeconfig(req: DescribeClusterKubeconfigRequest, cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void): Promise<DescribeClusterKubeconfigResponse>;
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     */
    ModifyClusterEndpointSP(req: ModifyClusterEndpointSPRequest, cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void): Promise<ModifyClusterEndpointSPResponse>;
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    CreateClusterEndpointVip(req: CreateClusterEndpointVipRequest, cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void): Promise<CreateClusterEndpointVipResponse>;
    /**
     * 删除集群路由表
     */
    DeleteClusterRouteTable(req: DeleteClusterRouteTableRequest, cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void): Promise<DeleteClusterRouteTableResponse>;
    /**
     * 查询集群路由
     */
    DescribeClusterRoutes(req: DescribeClusterRoutesRequest, cb?: (error: string, rep: DescribeClusterRoutesResponse) => void): Promise<DescribeClusterRoutesResponse>;
}
