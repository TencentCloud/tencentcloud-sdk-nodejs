import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { EnableVpcCniNetworkTypeRequest, DescribeClusterEndpointVipStatusRequest, DescribeClusterSecurityResponse, DescribeClusterSecurityRequest, DeleteClusterInstancesResponse, ModifyNodePoolDesiredCapacityAboutAsgResponse, ModifyClusterNodePoolResponse, DescribeClusterKubeconfigResponse, RemoveNodeFromNodePoolResponse, CreateClusterRouteRequest, DescribeClusterEndpointVipStatusResponse, ModifyClusterEndpointSPRequest, DescribeClusterInstancesResponse, DeleteClusterResponse, DescribePrometheusTemplateSyncResponse, UpdateEKSClusterRequest, CreateClusterRouteTableResponse, DescribeClusterCommonNamesRequest, DeleteClusterEndpointResponse, CreatePrometheusTemplateRequest, DeletePrometheusTemplateRequest, DescribeEKSClustersResponse, DeleteClusterRequest, CreateEKSClusterRequest, DisableVpcCniNetworkTypeResponse, DeleteClusterAsGroupsRequest, DescribeClusterControllersResponse, DescribeExistedInstancesRequest, DescribeRegionsResponse, CreateClusterRouteResponse, DescribePrometheusTemplatesRequest, AddNodeToNodePoolRequest, EnableVpcCniNetworkTypeResponse, DescribePrometheusAlertRuleResponse, DescribeVpcCniPodLimitsResponse, CreateClusterNodePoolFromExistingAsgRequest, DescribePrometheusAgentInstancesRequest, DescribeImagesResponse, ModifyClusterAttributeRequest, DeleteClusterRouteResponse, ModifyClusterEndpointSPResponse, CreateClusterEndpointVipResponse, DescribeClusterRoutesResponse, DescribeClustersRequest, UpgradeClusterInstancesRequest, DescribePrometheusAlertHistoryRequest, DeletePrometheusTemplateSyncRequest, SetNodePoolNodeProtectionResponse, DisableVpcCniNetworkTypeRequest, DescribePrometheusTemplatesResponse, DeleteClusterEndpointVipResponse, SyncPrometheusTemplateRequest, CreatePrometheusDashboardResponse, DescribeEKSClusterCredentialResponse, DeleteClusterInstancesRequest, ModifyClusterAsGroupAttributeResponse, CreateClusterInstancesRequest, DeleteEKSClusterResponse, DeleteClusterNodePoolRequest, DescribeClusterKubeconfigRequest, CreatePrometheusTemplateResponse, CreateClusterEndpointVipRequest, CheckInstancesUpgradeAbleRequest, AddClusterCIDRRequest, DescribeClusterNodePoolsResponse, DescribePrometheusAlertRuleRequest, DescribeEKSClusterCredentialRequest, GetUpgradeInstanceProgressRequest, ModifyPrometheusTemplateRequest, AddNodeToNodePoolResponse, UpdateEKSClusterResponse, DescribeRegionsRequest, DescribeClustersResponse, DescribeVpcCniPodLimitsRequest, DescribePrometheusOverviewsRequest, DescribeRouteTableConflictsRequest, SyncPrometheusTemplateResponse, DeleteEKSClusterRequest, GetUpgradeInstanceProgressResponse, DescribeExistedInstancesResponse, CreateEKSClusterResponse, DescribeEKSClustersRequest, CreateClusterNodePoolFromExistingAsgResponse, DescribeEnableVpcCniProgressRequest, DescribeClusterEndpointStatusRequest, ModifyClusterAttributeResponse, CreateClusterAsGroupRequest, DescribeRouteTableConflictsResponse, CreateClusterResponse, DeleteClusterRouteTableRequest, DescribeAvailableClusterVersionRequest, CreateClusterRequest, AcquireClusterAdminRoleRequest, CreateClusterAsGroupResponse, DeleteClusterAsGroupsResponse, DescribeClusterInstancesRequest, DescribePrometheusAgentsRequest, DescribeEnableVpcCniProgressResponse, AddClusterCIDRResponse, ModifyClusterNodePoolRequest, CreateClusterEndpointResponse, CreateClusterNodePoolRequest, AcquireClusterAdminRoleResponse, ModifyPrometheusTemplateResponse, DeletePrometheusTemplateResponse, DescribePrometheusTemplateSyncRequest, DeleteClusterEndpointVipRequest, CheckInstancesUpgradeAbleResponse, DescribeClusterEndpointStatusResponse, UpgradeClusterInstancesResponse, CreatePrometheusDashboardRequest, DescribePrometheusAgentsResponse, AddExistedInstancesResponse, DeleteClusterRouteTableResponse, CreateClusterInstancesResponse, DescribeClusterAsGroupOptionRequest, DescribePrometheusAgentInstancesResponse, CreateClusterEndpointRequest, ModifyClusterAsGroupOptionAttributeResponse, AddExistedInstancesRequest, AddVpcCniSubnetsResponse, ModifyNodePoolDesiredCapacityAboutAsgRequest, DescribeClusterNodePoolsRequest, DescribeClusterRouteTablesRequest, ModifyClusterAsGroupOptionAttributeRequest, DescribeClusterRoutesRequest, DeleteClusterRouteRequest, DescribePrometheusOverviewsResponse, DeleteClusterEndpointRequest, DescribePrometheusTargetsRequest, DescribePrometheusTargetsResponse, DescribeClusterNodePoolDetailRequest, SetNodePoolNodeProtectionRequest, DeletePrometheusTemplateSyncResponse, CreateClusterRouteTableRequest, RemoveNodeFromNodePoolRequest, DescribeClusterAsGroupsRequest, DescribeImagesRequest, DescribeAvailableClusterVersionResponse, DescribeClusterRouteTablesResponse, AddVpcCniSubnetsRequest, DescribePrometheusAlertHistoryResponse, DescribeClusterCommonNamesResponse, DescribeClusterAsGroupOptionResponse, DeleteClusterNodePoolResponse, UpdateClusterVersionResponse, CreateClusterNodePoolResponse, ModifyClusterAsGroupAttributeRequest, UpdateClusterVersionRequest, DescribeClusterAsGroupsResponse, DescribeClusterNodePoolDetailResponse, DescribeClusterControllersRequest } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    DescribePrometheusTemplates(req: DescribePrometheusTemplatesRequest, cb?: (error: string, rep: DescribePrometheusTemplatesResponse) => void): Promise<DescribePrometheusTemplatesResponse>;
    /**
     * 查询弹性集群列表
     */
    DescribeEKSClusters(req: DescribeEKSClustersRequest, cb?: (error: string, rep: DescribeEKSClustersResponse) => void): Promise<DescribeEKSClustersResponse>;
    /**
     * 检查给定节点列表中哪些是可升级的
     */
    CheckInstancesUpgradeAble(req: CheckInstancesUpgradeAbleRequest, cb?: (error: string, rep: CheckInstancesUpgradeAbleResponse) => void): Promise<CheckInstancesUpgradeAbleResponse>;
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 创建grafana监控面板
     */
    CreatePrometheusDashboard(req: CreatePrometheusDashboardRequest, cb?: (error: string, rep: CreatePrometheusDashboardResponse) => void): Promise<CreatePrometheusDashboardResponse>;
    /**
     * 获取实例列表
     */
    DescribePrometheusOverviews(req: DescribePrometheusOverviewsRequest, cb?: (error: string, rep: DescribePrometheusOverviewsResponse) => void): Promise<DescribePrometheusOverviewsResponse>;
    /**
     * 创建弹性集群
     */
    CreateEKSCluster(req: CreateEKSClusterRequest, cb?: (error: string, rep: CreateEKSClusterResponse) => void): Promise<CreateEKSClusterResponse>;
    /**
     * 查询节点池详情
     */
    DescribeClusterNodePoolDetail(req: DescribeClusterNodePoolDetailRequest, cb?: (error: string, rep: DescribeClusterNodePoolDetailResponse) => void): Promise<DescribeClusterNodePoolDetailResponse>;
    /**
     * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
     */
    DescribeVpcCniPodLimits(req: DescribeVpcCniPodLimitsRequest, cb?: (error: string, rep: DescribeVpcCniPodLimitsResponse) => void): Promise<DescribeVpcCniPodLimitsResponse>;
    /**
     * 删除一个云原生Prometheus配置模板
     */
    DeletePrometheusTemplate(req: DeletePrometheusTemplateRequest, cb?: (error: string, rep: DeletePrometheusTemplateResponse) => void): Promise<DeletePrometheusTemplateResponse>;
    /**
     * 获取被关联集群列表
     */
    DescribePrometheusAgents(req: DescribePrometheusAgentsRequest, cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void): Promise<DescribePrometheusAgentsResponse>;
    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     */
    DeletePrometheusTemplateSync(req: DeletePrometheusTemplateSyncRequest, cb?: (error: string, rep: DeletePrometheusTemplateSyncResponse) => void): Promise<DeletePrometheusTemplateSyncResponse>;
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse>;
    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     */
    DescribeEnableVpcCniProgress(req: DescribeEnableVpcCniProgressRequest, cb?: (error: string, rep: DescribeEnableVpcCniProgressResponse) => void): Promise<DescribeEnableVpcCniProgressResponse>;
    /**
     * 同步模板到实例或者集群
     */
    SyncPrometheusTemplate(req: SyncPrometheusTemplateRequest, cb?: (error: string, rep: SyncPrometheusTemplateResponse) => void): Promise<SyncPrometheusTemplateResponse>;
    /**
     * 获取告警历史
     */
    DescribePrometheusAlertHistory(req: DescribePrometheusAlertHistoryRequest, cb?: (error: string, rep: DescribePrometheusAlertHistoryResponse) => void): Promise<DescribePrometheusAlertHistoryResponse>;
    /**
     * 扩展(新建)集群节点
     */
    CreateClusterInstances(req: CreateClusterInstancesRequest, cb?: (error: string, rep: CreateClusterInstancesResponse) => void): Promise<CreateClusterInstancesResponse>;
    /**
     * 获取targets信息
     */
    DescribePrometheusTargets(req: DescribePrometheusTargetsRequest, cb?: (error: string, rep: DescribePrometheusTargetsResponse) => void): Promise<DescribePrometheusTargetsResponse>;
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
     * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
     */
    EnableVpcCniNetworkType(req: EnableVpcCniNetworkTypeRequest, cb?: (error: string, rep: EnableVpcCniNetworkTypeResponse) => void): Promise<EnableVpcCniNetworkTypeResponse>;
    /**
     * 修改模板内容
     */
    ModifyPrometheusTemplate(req: ModifyPrometheusTemplateRequest, cb?: (error: string, rep: ModifyPrometheusTemplateResponse) => void): Promise<ModifyPrometheusTemplateResponse>;
    /**
     * 仅能设置节点池中处于伸缩组的节点
     */
    SetNodePoolNodeProtection(req: SetNodePoolNodeProtectionRequest, cb?: (error: string, rep: SetNodePoolNodeProtectionResponse) => void): Promise<SetNodePoolNodeProtectionResponse>;
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse>;
    /**
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     */
    AddVpcCniSubnets(req: AddVpcCniSubnetsRequest, cb?: (error: string, rep: AddVpcCniSubnetsResponse) => void): Promise<AddVpcCniSubnetsResponse>;
    /**
     * 删除集群(YUNAPI V3版本)
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     */
    DescribeClusterCommonNames(req: DescribeClusterCommonNamesRequest, cb?: (error: string, rep: DescribeClusterCommonNamesResponse) => void): Promise<DescribeClusterCommonNamesResponse>;
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
     * 查询节点池列表
     */
    DescribeClusterNodePools(req: DescribeClusterNodePoolsRequest, cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void): Promise<DescribeClusterNodePoolsResponse>;
    /**
     * 创建集群路由表
     */
    CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse>;
    /**
     * 编辑节点池
     */
    ModifyClusterNodePool(req: ModifyClusterNodePoolRequest, cb?: (error: string, rep: ModifyClusterNodePoolResponse) => void): Promise<ModifyClusterNodePoolResponse>;
    /**
     * 获得节点升级当前的进度
     */
    GetUpgradeInstanceProgress(req: GetUpgradeInstanceProgressRequest, cb?: (error: string, rep: GetUpgradeInstanceProgressResponse) => void): Promise<GetUpgradeInstanceProgressResponse>;
    /**
     * 集群弹性伸缩配置
     */
    DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse>;
    /**
     * 将集群内节点移入节点池
     */
    AddNodeToNodePool(req: AddNodeToNodePoolRequest, cb?: (error: string, rep: AddNodeToNodePoolResponse) => void): Promise<AddNodeToNodePoolResponse>;
    /**
     * 创建一个云原生Prometheus模板实例
     */
    CreatePrometheusTemplate(req: CreatePrometheusTemplateRequest, cb?: (error: string, rep: CreatePrometheusTemplateResponse) => void): Promise<CreatePrometheusTemplateResponse>;
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DescribeClusterEndpointStatus(req: DescribeClusterEndpointStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void): Promise<DescribeClusterEndpointStatusResponse>;
    /**
     * 集群关联的伸缩组列表
     */
    DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse>;
    /**
     * 创建节点池
     */
    CreateClusterNodePool(req: CreateClusterNodePoolRequest, cb?: (error: string, rep: CreateClusterNodePoolResponse) => void): Promise<CreateClusterNodePoolResponse>;
    /**
     * 给集群的一批work节点进行升级
     */
    UpgradeClusterInstances(req: UpgradeClusterInstancesRequest, cb?: (error: string, rep: UpgradeClusterInstancesResponse) => void): Promise<UpgradeClusterInstancesResponse>;
    /**
     * 获取镜像信息
     */
    DescribeImages(req?: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse>;
    /**
     * 从伸缩组创建节点池
     */
    CreateClusterNodePoolFromExistingAsg(req: CreateClusterNodePoolFromExistingAsgRequest, cb?: (error: string, rep: CreateClusterNodePoolFromExistingAsgResponse) => void): Promise<CreateClusterNodePoolFromExistingAsgResponse>;
    /**
     * 查询集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 获取关联目标集群的实例列表
     */
    DescribePrometheusAgentInstances(req: DescribePrometheusAgentInstancesRequest, cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void): Promise<DescribePrometheusAgentInstancesResponse>;
    /**
     * 查询集群路由表
     */
    DescribeClusterRouteTables(req?: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse>;
    /**
     * 获取模板同步信息
     */
    DescribePrometheusTemplateSync(req: DescribePrometheusTemplateSyncRequest, cb?: (error: string, rep: DescribePrometheusTemplateSyncResponse) => void): Promise<DescribePrometheusTemplateSyncResponse>;
    /**
     * 获取容器服务支持的所有地域
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 添加已经存在的实例到集群
     */
    AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse>;
    /**
     * 删除弹性集群(yunapiv3)
     */
    DeleteEKSCluster(req: DeleteEKSClusterRequest, cb?: (error: string, rep: DeleteEKSClusterResponse) => void): Promise<DeleteEKSClusterResponse>;
    /**
     * 修改节点池关联伸缩组的期望实例数
     */
    ModifyNodePoolDesiredCapacityAboutAsg(req: ModifyNodePoolDesiredCapacityAboutAsgRequest, cb?: (error: string, rep: ModifyNodePoolDesiredCapacityAboutAsgResponse) => void): Promise<ModifyNodePoolDesiredCapacityAboutAsgResponse>;
    /**
     * 移出节点池节点，但保留在集群内
     */
    RemoveNodeFromNodePool(req: RemoveNodeFromNodePoolRequest, cb?: (error: string, rep: RemoveNodeFromNodePoolResponse) => void): Promise<RemoveNodeFromNodePoolResponse>;
    /**
     * 集群的密钥信息
     */
    DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse>;
    /**
     * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
     */
    DisableVpcCniNetworkType(req: DisableVpcCniNetworkTypeRequest, cb?: (error: string, rep: DisableVpcCniNetworkTypeResponse) => void): Promise<DisableVpcCniNetworkTypeResponse>;
    /**
     * 查询路由表冲突列表
     */
    DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse>;
    /**
     *  查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 删除节点池
     */
    DeleteClusterNodePool(req: DeleteClusterNodePoolRequest, cb?: (error: string, rep: DeleteClusterNodePoolResponse) => void): Promise<DeleteClusterNodePoolResponse>;
    /**
     * 修改集群伸缩组属性
     */
    ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse>;
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse>;
    /**
     * 用于查询Kubernetes的各个原生控制器是否开启
     */
    DescribeClusterControllers(req: DescribeClusterControllersRequest, cb?: (error: string, rep: DescribeClusterControllersResponse) => void): Promise<DescribeClusterControllersResponse>;
    /**
     * 删除集群中的实例
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 给GR集群增加可用的ClusterCIDR
     */
    AddClusterCIDR(req: AddClusterCIDRRequest, cb?: (error: string, rep: AddClusterCIDRResponse) => void): Promise<AddClusterCIDRResponse>;
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    DescribeClusterKubeconfig(req: DescribeClusterKubeconfigRequest, cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void): Promise<DescribeClusterKubeconfigResponse>;
    /**
     * 修改弹性集群名称等属性
     */
    UpdateEKSCluster(req: UpdateEKSClusterRequest, cb?: (error: string, rep: UpdateEKSClusterResponse) => void): Promise<UpdateEKSClusterResponse>;
    /**
     * 升级集群 Master 组件到指定版本
     */
    UpdateClusterVersion(req: UpdateClusterVersionRequest, cb?: (error: string, rep: UpdateClusterVersionResponse) => void): Promise<UpdateClusterVersionResponse>;
    /**
     * 获取弹性容器集群的接入认证信息
     */
    DescribeEKSClusterCredential(req: DescribeEKSClusterCredentialRequest, cb?: (error: string, rep: DescribeEKSClusterCredentialResponse) => void): Promise<DescribeEKSClusterCredentialResponse>;
    /**
     * 获取告警规则列表
     */
    DescribePrometheusAlertRule(req: DescribePrometheusAlertRuleRequest, cb?: (error: string, rep: DescribePrometheusAlertRuleResponse) => void): Promise<DescribePrometheusAlertRuleResponse>;
    /**
     * 获取集群可以升级的所有版本
     */
    DescribeAvailableClusterVersion(req: DescribeAvailableClusterVersionRequest, cb?: (error: string, rep: DescribeAvailableClusterVersionResponse) => void): Promise<DescribeAvailableClusterVersionResponse>;
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
    /**
     * 修改集群弹性伸缩属性
     */
    ModifyClusterAsGroupOptionAttribute(req: ModifyClusterAsGroupOptionAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupOptionAttributeResponse) => void): Promise<ModifyClusterAsGroupOptionAttributeResponse>;
}
