import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { EnableVpcCniNetworkTypeRequest, DescribeClusterEndpointVipStatusRequest, CreateEKSContainerInstancesResponse, DescribeClusterSecurityResponse, ScaleOutClusterMasterRequest, DescribeClusterSecurityRequest, ModifyPrometheusAlertRuleRequest, DeleteClusterInstancesResponse, GetTkeAppChartListRequest, ModifyNodePoolDesiredCapacityAboutAsgResponse, ModifyClusterNodePoolResponse, DescribeClusterKubeconfigResponse, RemoveNodeFromNodePoolResponse, CreateClusterRouteRequest, DescribeClusterEndpointVipStatusResponse, ModifyClusterEndpointSPRequest, DescribeClusterInstancesResponse, DeleteClusterResponse, CreatePrometheusAlertRuleRequest, UpdateEKSClusterRequest, CreateClusterRouteTableResponse, DescribeClusterCommonNamesRequest, DescribeTKEEdgeScriptResponse, DeleteClusterEndpointResponse, CreatePrometheusTemplateRequest, CreateImageCacheResponse, RestartEKSContainerInstancesRequest, DescribeExternalClusterSpecRequest, DeletePrometheusTemplateRequest, DescribeClusterAsGroupOptionRequest, DescribeEKSContainerInstanceRegionsRequest, DescribeEKSClustersResponse, GetMostSuitableImageCacheRequest, CreateEKSClusterRequest, DeleteClusterAsGroupsRequest, DescribeClusterControllersResponse, DescribeExistedInstancesRequest, DescribeRegionsResponse, CreateClusterRouteResponse, DescribePrometheusTemplatesRequest, ModifyPrometheusAlertRuleResponse, AddNodeToNodePoolRequest, DescribeEKSContainerInstanceEventResponse, DescribePrometheusAlertRuleResponse, EnableClusterDeletionProtectionResponse, DescribePrometheusInstanceResponse, DescribeVpcCniPodLimitsResponse, DescribeVersionsResponse, ScaleInClusterMasterRequest, UpdateImageCacheRequest, CreateClusterNodePoolFromExistingAsgRequest, DescribePrometheusAgentInstancesRequest, ForwardApplicationRequestV3Response, DescribeImagesResponse, ModifyClusterAttributeRequest, DeleteClusterRouteResponse, ModifyClusterEndpointSPResponse, CreateClusterEndpointVipResponse, DescribeClustersRequest, ModifyClusterAttributeResponse, DeletePrometheusAlertRuleRequest, DescribePrometheusTemplateSyncResponse, DescribePrometheusAlertHistoryRequest, DeletePrometheusTemplateSyncRequest, SetNodePoolNodeProtectionResponse, DisableVpcCniNetworkTypeRequest, DeleteEKSContainerInstancesRequest, UpgradeClusterInstancesRequest, DeleteClusterEndpointVipResponse, SyncPrometheusTemplateRequest, CreatePrometheusDashboardResponse, DescribeEKSClusterCredentialResponse, DeleteClusterInstancesRequest, ModifyClusterAsGroupAttributeResponse, CreateClusterInstancesRequest, DescribeClusterAuthenticationOptionsRequest, DescribeEksContainerInstanceLogResponse, DeleteEKSClusterResponse, DescribeClusterStatusRequest, DescribeClusterStatusResponse, DeleteClusterNodePoolRequest, UpdateImageCacheResponse, DisableVpcCniNetworkTypeResponse, DescribeClusterKubeconfigRequest, CreatePrometheusTemplateResponse, CreateClusterEndpointVipRequest, EnableVpcCniNetworkTypeResponse, CheckInstancesUpgradeAbleRequest, ModifyNodePoolInstanceTypesRequest, AddClusterCIDRRequest, DeleteEKSContainerInstancesResponse, DescribePrometheusAlertRuleRequest, DescribeEKSClusterCredentialRequest, GetUpgradeInstanceProgressRequest, EnableClusterDeletionProtectionRequest, ModifyPrometheusTemplateRequest, DescribeExternalClusterSpecResponse, AddNodeToNodePoolResponse, DescribeClusterLevelAttributeRequest, UpdateEKSClusterResponse, DisableClusterDeletionProtectionRequest, DescribeRegionsRequest, UpdateEKSContainerInstanceRequest, DescribeClustersResponse, DescribeVpcCniPodLimitsRequest, DescribePrometheusOverviewsRequest, DescribeRouteTableConflictsRequest, SyncPrometheusTemplateResponse, DeleteEKSClusterRequest, GetUpgradeInstanceProgressResponse, DescribeExistedInstancesResponse, CreateEKSClusterResponse, DeleteImageCachesResponse, CreatePrometheusAlertRuleResponse, UpdateEKSContainerInstanceResponse, ModifyNodePoolInstanceTypesResponse, CreateClusterNodePoolFromExistingAsgResponse, DescribeEnableVpcCniProgressRequest, DescribeClusterEndpointStatusRequest, GetClusterLevelPriceResponse, DescribeResourceUsageResponse, CreateClusterAsGroupRequest, DescribeClusterNodePoolsResponse, DescribeRouteTableConflictsResponse, DescribeVersionsRequest, CreateClusterResponse, DescribeClusterRoutesResponse, DescribeEKSContainerInstancesResponse, DeleteClusterRouteTableRequest, DescribeAvailableClusterVersionRequest, CreateClusterRequest, DeletePrometheusAlertRuleResponse, AcquireClusterAdminRoleRequest, CreateClusterAsGroupResponse, DescribeEksContainerInstanceLogRequest, ModifyClusterAuthenticationOptionsResponse, DescribeClusterAuthenticationOptionsResponse, DeleteClusterAsGroupsResponse, DescribePrometheusTemplatesResponse, DescribePrometheusInstanceRequest, DescribeClusterInstancesRequest, DescribeResourceUsageRequest, DescribePrometheusAgentsRequest, DescribeEnableVpcCniProgressResponse, AddClusterCIDRResponse, ModifyClusterNodePoolRequest, DescribeImageCachesResponse, GetClusterLevelPriceRequest, CreateClusterEndpointResponse, DescribeEKSClustersRequest, CreateClusterNodePoolRequest, AcquireClusterAdminRoleResponse, RestartEKSContainerInstancesResponse, ModifyPrometheusTemplateResponse, GetTkeAppChartListResponse, DeletePrometheusTemplateResponse, DescribePrometheusTemplateSyncRequest, UpdateClusterVersionRequest, ModifyClusterAuthenticationOptionsRequest, DeleteClusterEndpointVipRequest, DescribeClusterLevelChangeRecordsResponse, CheckInstancesUpgradeAbleResponse, DescribeClusterEndpointStatusResponse, UpgradeClusterInstancesResponse, CreatePrometheusDashboardRequest, DescribePrometheusAgentsResponse, AddExistedInstancesResponse, DeleteClusterRouteTableResponse, CreateClusterInstancesResponse, DisableClusterDeletionProtectionResponse, DeleteClusterRequest, DescribePrometheusAgentInstancesResponse, CreateClusterEndpointRequest, DescribeEKSContainerInstanceRegionsResponse, ModifyClusterAsGroupOptionAttributeResponse, DescribeClusterLevelAttributeResponse, AddExistedInstancesRequest, DescribeTKEEdgeScriptRequest, AddVpcCniSubnetsResponse, ModifyNodePoolDesiredCapacityAboutAsgRequest, DescribeClusterNodePoolsRequest, DescribeClusterRouteTablesRequest, ModifyClusterAsGroupOptionAttributeRequest, DescribeClusterRoutesRequest, DeleteClusterRouteRequest, DescribePrometheusOverviewsResponse, DescribePrometheusTargetsRequest, DescribePrometheusTargetsResponse, DescribeClusterNodePoolDetailRequest, SetNodePoolNodeProtectionRequest, DeletePrometheusTemplateSyncResponse, CreateClusterRouteTableRequest, ScaleInClusterMasterResponse, DescribeClusterAsGroupsRequest, DescribeImagesRequest, GetMostSuitableImageCacheResponse, DescribeAvailableClusterVersionResponse, DescribeClusterLevelChangeRecordsRequest, DescribeClusterRouteTablesResponse, AddVpcCniSubnetsRequest, DescribePrometheusAlertHistoryResponse, DescribeClusterCommonNamesResponse, DescribeClusterAsGroupOptionResponse, DeleteClusterNodePoolResponse, DeleteImageCachesRequest, UpdateClusterVersionResponse, CreateEKSContainerInstancesRequest, DeleteClusterEndpointRequest, CreateClusterNodePoolResponse, CreateImageCacheRequest, ModifyClusterAsGroupAttributeRequest, RemoveNodeFromNodePoolRequest, DescribeClusterAsGroupsResponse, DescribeEKSContainerInstancesRequest, DescribeClusterNodePoolDetailResponse, ForwardApplicationRequestV3Request, DescribeClusterControllersRequest, DescribeEKSContainerInstanceEventRequest, ScaleOutClusterMasterResponse, DescribeImageCachesRequest } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新镜像缓存接口
     */
    UpdateImageCache(req: UpdateImageCacheRequest, cb?: (error: string, rep: UpdateImageCacheResponse) => void): Promise<UpdateImageCacheResponse>;
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 修改集群弹性伸缩属性
     */
    ModifyClusterAsGroupOptionAttribute(req: ModifyClusterAsGroupOptionAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupOptionAttributeResponse) => void): Promise<ModifyClusterAsGroupOptionAttributeResponse>;
    /**
     * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
     */
    EnableVpcCniNetworkType(req: EnableVpcCniNetworkTypeRequest, cb?: (error: string, rep: EnableVpcCniNetworkTypeResponse) => void): Promise<EnableVpcCniNetworkTypeResponse>;
    /**
     * 删除集群(YUNAPI V3版本)
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 修改告警规则
     */
    ModifyPrometheusAlertRule(req: ModifyPrometheusAlertRuleRequest, cb?: (error: string, rep: ModifyPrometheusAlertRuleResponse) => void): Promise<ModifyPrometheusAlertRuleResponse>;
    /**
     * 仅能设置节点池中处于伸缩组的节点
     */
    SetNodePoolNodeProtection(req: SetNodePoolNodeProtectionRequest, cb?: (error: string, rep: SetNodePoolNodeProtectionResponse) => void): Promise<SetNodePoolNodeProtectionResponse>;
    /**
     * 查询容器实例的事件
     */
    DescribeEKSContainerInstanceEvent(req: DescribeEKSContainerInstanceEventRequest, cb?: (error: string, rep: DescribeEKSContainerInstanceEventResponse) => void): Promise<DescribeEKSContainerInstanceEventResponse>;
    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     */
    DescribeClusterCommonNames(req: DescribeClusterCommonNamesRequest, cb?: (error: string, rep: DescribeClusterCommonNamesResponse) => void): Promise<DescribeClusterCommonNamesResponse>;
    /**
     * 获取告警历史
     */
    DescribePrometheusAlertHistory(req: DescribePrometheusAlertHistoryRequest, cb?: (error: string, rep: DescribePrometheusAlertHistoryResponse) => void): Promise<DescribePrometheusAlertHistoryResponse>;
    /**
     * 创建集群路由表
     */
    CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse>;
    /**
     * 获得节点升级当前的进度
     */
    GetUpgradeInstanceProgress(req: GetUpgradeInstanceProgressRequest, cb?: (error: string, rep: GetUpgradeInstanceProgressResponse) => void): Promise<GetUpgradeInstanceProgressResponse>;
    /**
     * 创建一个云原生Prometheus模板实例
     */
    CreatePrometheusTemplate(req: CreatePrometheusTemplateRequest, cb?: (error: string, rep: CreatePrometheusTemplateResponse) => void): Promise<CreatePrometheusTemplateResponse>;
    /**
     * 根据镜像列表，查询匹配的镜像缓存
     */
    GetMostSuitableImageCache(req: GetMostSuitableImageCacheRequest, cb?: (error: string, rep: GetMostSuitableImageCacheResponse) => void): Promise<GetMostSuitableImageCacheResponse>;
    /**
     * 从伸缩组创建节点池
     */
    CreateClusterNodePoolFromExistingAsg(req: CreateClusterNodePoolFromExistingAsgRequest, cb?: (error: string, rep: CreateClusterNodePoolFromExistingAsgResponse) => void): Promise<CreateClusterNodePoolFromExistingAsgResponse>;
    /**
     * 获取集群版本信息
     */
    DescribeVersions(req?: DescribeVersionsRequest, cb?: (error: string, rep: DescribeVersionsResponse) => void): Promise<DescribeVersionsResponse>;
    /**
     * 删除弹性集群(yunapiv3)
     */
    DeleteEKSCluster(req: DeleteEKSClusterRequest, cb?: (error: string, rep: DeleteEKSClusterResponse) => void): Promise<DeleteEKSClusterResponse>;
    /**
     * 编辑节点池
     */
    ModifyClusterNodePool(req: ModifyClusterNodePoolRequest, cb?: (error: string, rep: ModifyClusterNodePoolResponse) => void): Promise<ModifyClusterNodePoolResponse>;
    /**
     * 查询镜像缓存信息接口
     */
    DescribeImageCaches(req: DescribeImageCachesRequest, cb?: (error: string, rep: DescribeImageCachesResponse) => void): Promise<DescribeImageCachesResponse>;
    /**
     * 升级集群 Master 组件到指定版本
     */
    UpdateClusterVersion(req: UpdateClusterVersionRequest, cb?: (error: string, rep: UpdateClusterVersionResponse) => void): Promise<UpdateClusterVersionResponse>;
    /**
     * 获取集群可以升级的所有版本
     */
    DescribeAvailableClusterVersion(req: DescribeAvailableClusterVersionRequest, cb?: (error: string, rep: DescribeAvailableClusterVersionResponse) => void): Promise<DescribeAvailableClusterVersionResponse>;
    /**
     * 批量删除镜像缓存
     */
    DeleteImageCaches(req: DeleteImageCachesRequest, cb?: (error: string, rep: DeleteImageCachesResponse) => void): Promise<DeleteImageCachesResponse>;
    /**
     * 删除集群路由表
     */
    DeleteClusterRouteTable(req: DeleteClusterRouteTableRequest, cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void): Promise<DeleteClusterRouteTableResponse>;
    /**
     * 查看集群认证配置
     */
    DescribeClusterAuthenticationOptions(req: DescribeClusterAuthenticationOptionsRequest, cb?: (error: string, rep: DescribeClusterAuthenticationOptionsResponse) => void): Promise<DescribeClusterAuthenticationOptionsResponse>;
    /**
     * 查看集群状态列表
     */
    DescribeClusterStatus(req: DescribeClusterStatusRequest, cb?: (error: string, rep: DescribeClusterStatusResponse) => void): Promise<DescribeClusterStatusResponse>;
    /**
     * 查询节点池详情
     */
    DescribeClusterNodePoolDetail(req: DescribeClusterNodePoolDetailRequest, cb?: (error: string, rep: DescribeClusterNodePoolDetailResponse) => void): Promise<DescribeClusterNodePoolDetailResponse>;
    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     */
    DeletePrometheusTemplateSync(req: DeletePrometheusTemplateSyncRequest, cb?: (error: string, rep: DeletePrometheusTemplateSyncResponse) => void): Promise<DeletePrometheusTemplateSyncResponse>;
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
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     */
    AddVpcCniSubnets(req: AddVpcCniSubnetsRequest, cb?: (error: string, rep: AddVpcCniSubnetsResponse) => void): Promise<AddVpcCniSubnetsResponse>;
    /**
     * 为已经存在的集群创建伸缩组
     */
    CreateClusterAsGroup(req: CreateClusterAsGroupRequest, cb?: (error: string, rep: CreateClusterAsGroupResponse) => void): Promise<CreateClusterAsGroupResponse>;
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     */
    DescribeExistedInstances(req: DescribeExistedInstancesRequest, cb?: (error: string, rep: DescribeExistedInstancesResponse) => void): Promise<DescribeExistedInstancesResponse>;
    /**
     * 获取弹性容器集群的接入认证信息
     */
    DescribeEKSClusterCredential(req: DescribeEKSClusterCredentialRequest, cb?: (error: string, rep: DescribeEKSClusterCredentialResponse) => void): Promise<DescribeEKSClusterCredentialResponse>;
    /**
     * 给集群的一批work节点进行升级
     */
    UpgradeClusterInstances(req: UpgradeClusterInstancesRequest, cb?: (error: string, rep: UpgradeClusterInstancesResponse) => void): Promise<UpgradeClusterInstancesResponse>;
    /**
     * 查询集群路由表
     */
    DescribeClusterRouteTables(req?: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse>;
    /**
     * 将集群内节点移入节点池
     */
    AddNodeToNodePool(req: AddNodeToNodePoolRequest, cb?: (error: string, rep: AddNodeToNodePoolResponse) => void): Promise<AddNodeToNodePoolResponse>;
    /**
     * 查询集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DescribeClusterEndpointStatus(req: DescribeClusterEndpointStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void): Promise<DescribeClusterEndpointStatusResponse>;
    /**
     * 获取容器服务支持的所有地域
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 添加已经存在的实例到集群
     */
    AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse>;
    /**
     * 关闭集群删除保护
     */
    DisableClusterDeletionProtection(req: DisableClusterDeletionProtectionRequest, cb?: (error: string, rep: DisableClusterDeletionProtectionResponse) => void): Promise<DisableClusterDeletionProtectionResponse>;
    /**
     * 获取targets信息
     */
    DescribePrometheusTargets(req: DescribePrometheusTargetsRequest, cb?: (error: string, rep: DescribePrometheusTargetsResponse) => void): Promise<DescribePrometheusTargetsResponse>;
    /**
     * 删除容器实例，可批量删除
     */
    DeleteEKSContainerInstances(req: DeleteEKSContainerInstancesRequest, cb?: (error: string, rep: DeleteEKSContainerInstancesResponse) => void): Promise<DeleteEKSContainerInstancesResponse>;
    /**
     *  查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 获取集群规模
     */
    DescribeClusterLevelAttribute(req: DescribeClusterLevelAttributeRequest, cb?: (error: string, rep: DescribeClusterLevelAttributeResponse) => void): Promise<DescribeClusterLevelAttributeResponse>;
    /**
     * 给GR集群增加可用的ClusterCIDR
     */
    AddClusterCIDR(req: AddClusterCIDRRequest, cb?: (error: string, rep: AddClusterCIDRResponse) => void): Promise<AddClusterCIDRResponse>;
    /**
     * 查询容器实例中容器日志
     */
    DescribeEksContainerInstanceLog(req: DescribeEksContainerInstanceLogRequest, cb?: (error: string, rep: DescribeEksContainerInstanceLogResponse) => void): Promise<DescribeEksContainerInstanceLogResponse>;
    /**
     * 更新容器实例
     */
    UpdateEKSContainerInstance(req: UpdateEKSContainerInstanceRequest, cb?: (error: string, rep: UpdateEKSContainerInstanceResponse) => void): Promise<UpdateEKSContainerInstanceResponse>;
    /**
     * 获取告警规则列表
     */
    DescribePrometheusAlertRule(req: DescribePrometheusAlertRuleRequest, cb?: (error: string, rep: DescribePrometheusAlertRuleResponse) => void): Promise<DescribePrometheusAlertRuleResponse>;
    /**
     * 重启弹性容器实例，支持批量操作
     */
    RestartEKSContainerInstances(req: RestartEKSContainerInstancesRequest, cb?: (error: string, rep: RestartEKSContainerInstancesResponse) => void): Promise<RestartEKSContainerInstancesResponse>;
    /**
     * 获取边缘脚本链接
     */
    DescribeTKEEdgeScript(req: DescribeTKEEdgeScriptRequest, cb?: (error: string, rep: DescribeTKEEdgeScriptResponse) => void): Promise<DescribeTKEEdgeScriptResponse>;
    /**
     * 修改节点池关联伸缩组的期望实例数
     */
    ModifyNodePoolDesiredCapacityAboutAsg(req: ModifyNodePoolDesiredCapacityAboutAsgRequest, cb?: (error: string, rep: ModifyNodePoolDesiredCapacityAboutAsgResponse) => void): Promise<ModifyNodePoolDesiredCapacityAboutAsgResponse>;
    /**
     * 创建弹性集群
     */
    CreateEKSCluster(req: CreateEKSClusterRequest, cb?: (error: string, rep: CreateEKSClusterResponse) => void): Promise<CreateEKSClusterResponse>;
    /**
     * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
     */
    DescribeVpcCniPodLimits(req: DescribeVpcCniPodLimitsRequest, cb?: (error: string, rep: DescribeVpcCniPodLimitsResponse) => void): Promise<DescribeVpcCniPodLimitsResponse>;
    /**
     * 修改节点池的机型配置
     */
    ModifyNodePoolInstanceTypes(req: ModifyNodePoolInstanceTypesRequest, cb?: (error: string, rep: ModifyNodePoolInstanceTypesResponse) => void): Promise<ModifyNodePoolInstanceTypesResponse>;
    /**
     * 修改集群伸缩组属性
     */
    ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse>;
    /**
     * 集群关联的伸缩组列表
     */
    DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse>;
    /**
     * 获取模板同步信息
     */
    DescribePrometheusTemplateSync(req: DescribePrometheusTemplateSyncRequest, cb?: (error: string, rep: DescribePrometheusTemplateSyncResponse) => void): Promise<DescribePrometheusTemplateSyncResponse>;
    /**
     * 获取实例详细信息
     */
    DescribePrometheusInstance(req: DescribePrometheusInstanceRequest, cb?: (error: string, rep: DescribePrometheusInstanceResponse) => void): Promise<DescribePrometheusInstanceResponse>;
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse>;
    /**
     * 查询容器实例
     */
    DescribeEKSContainerInstances(req: DescribeEKSContainerInstancesRequest, cb?: (error: string, rep: DescribeEKSContainerInstancesResponse) => void): Promise<DescribeEKSContainerInstancesResponse>;
    /**
     * 查询路由表冲突列表
     */
    DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse>;
    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     */
    AcquireClusterAdminRole(req: AcquireClusterAdminRoleRequest, cb?: (error: string, rep: AcquireClusterAdminRoleResponse) => void): Promise<AcquireClusterAdminRoleResponse>;
    /**
     * 创建集群路由
     */
    CreateClusterRoute(req: CreateClusterRouteRequest, cb?: (error: string, rep: CreateClusterRouteResponse) => void): Promise<CreateClusterRouteResponse>;
    /**
     * 获取导入第三方集群YAML定义
     */
    DescribeExternalClusterSpec(req: DescribeExternalClusterSpecRequest, cb?: (error: string, rep: DescribeExternalClusterSpecResponse) => void): Promise<DescribeExternalClusterSpecResponse>;
    /**
     * 创建容器实例
     */
    CreateEKSContainerInstances(req: CreateEKSContainerInstancesRequest, cb?: (error: string, rep: CreateEKSContainerInstancesResponse) => void): Promise<CreateEKSContainerInstancesResponse>;
    /**
     * 删除告警规则
     */
    DeletePrometheusAlertRule(req: DeletePrometheusAlertRuleRequest, cb?: (error: string, rep: DeletePrometheusAlertRuleResponse) => void): Promise<DeletePrometheusAlertRuleResponse>;
    /**
     * 查询集群变配记录
     */
    DescribeClusterLevelChangeRecords(req: DescribeClusterLevelChangeRecordsRequest, cb?: (error: string, rep: DescribeClusterLevelChangeRecordsResponse) => void): Promise<DescribeClusterLevelChangeRecordsResponse>;
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse>;
    /**
     * 操作TKE集群的addon
     */
    ForwardApplicationRequestV3(req: ForwardApplicationRequestV3Request, cb?: (error: string, rep: ForwardApplicationRequestV3Response) => void): Promise<ForwardApplicationRequestV3Response>;
    /**
     * 获取关联目标集群的实例列表
     */
    DescribePrometheusAgentInstances(req: DescribePrometheusAgentInstancesRequest, cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void): Promise<DescribePrometheusAgentInstancesResponse>;
    /**
     * 扩容独立集群master节点
     */
    ScaleOutClusterMaster(req: ScaleOutClusterMasterRequest, cb?: (error: string, rep: ScaleOutClusterMasterResponse) => void): Promise<ScaleOutClusterMasterResponse>;
    /**
     * 创建告警规则
     */
    CreatePrometheusAlertRule(req: CreatePrometheusAlertRuleRequest, cb?: (error: string, rep: CreatePrometheusAlertRuleResponse) => void): Promise<CreatePrometheusAlertRuleResponse>;
    /**
     * 用于查询Kubernetes的各个原生控制器是否开启
     */
    DescribeClusterControllers(req: DescribeClusterControllersRequest, cb?: (error: string, rep: DescribeClusterControllersResponse) => void): Promise<DescribeClusterControllersResponse>;
    /**
     * 集群的密钥信息
     */
    DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse>;
    /**
     * 删除节点池
     */
    DeleteClusterNodePool(req: DeleteClusterNodePoolRequest, cb?: (error: string, rep: DeleteClusterNodePoolResponse) => void): Promise<DeleteClusterNodePoolResponse>;
    /**
     * 缩容独立集群master节点
     */
    ScaleInClusterMaster(req: ScaleInClusterMasterRequest, cb?: (error: string, rep: ScaleInClusterMasterResponse) => void): Promise<ScaleInClusterMasterResponse>;
    /**
     * 获取集群资源使用量
     */
    DescribeResourceUsage(req: DescribeResourceUsageRequest, cb?: (error: string, rep: DescribeResourceUsageResponse) => void): Promise<DescribeResourceUsageResponse>;
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse>;
    /**
     * 查询节点池列表
     */
    DescribeClusterNodePools(req: DescribeClusterNodePoolsRequest, cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void): Promise<DescribeClusterNodePoolsResponse>;
    /**
     * 获取镜像信息
     */
    DescribeImages(req?: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     */
    ModifyClusterEndpointSP(req: ModifyClusterEndpointSPRequest, cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void): Promise<ModifyClusterEndpointSPResponse>;
    /**
     * 查询集群路由
     */
    DescribeClusterRoutes(req: DescribeClusterRoutesRequest, cb?: (error: string, rep: DescribeClusterRoutesResponse) => void): Promise<DescribeClusterRoutesResponse>;
    /**
     * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
     */
    CreateImageCache(req: CreateImageCacheRequest, cb?: (error: string, rep: CreateImageCacheResponse) => void): Promise<CreateImageCacheResponse>;
    /**
     * 检查给定节点列表中哪些是可升级的
     */
    CheckInstancesUpgradeAble(req: CheckInstancesUpgradeAbleRequest, cb?: (error: string, rep: CheckInstancesUpgradeAbleResponse) => void): Promise<CheckInstancesUpgradeAbleResponse>;
    /**
     * 创建grafana监控面板
     */
    CreatePrometheusDashboard(req: CreatePrometheusDashboardRequest, cb?: (error: string, rep: CreatePrometheusDashboardResponse) => void): Promise<CreatePrometheusDashboardResponse>;
    /**
     * 获取实例列表
     */
    DescribePrometheusOverviews(req: DescribePrometheusOverviewsRequest, cb?: (error: string, rep: DescribePrometheusOverviewsResponse) => void): Promise<DescribePrometheusOverviewsResponse>;
    /**
     * 删除一个云原生Prometheus配置模板
     */
    DeletePrometheusTemplate(req: DeletePrometheusTemplateRequest, cb?: (error: string, rep: DeletePrometheusTemplateResponse) => void): Promise<DeletePrometheusTemplateResponse>;
    /**
     * 修改集群认证配置
     */
    ModifyClusterAuthenticationOptions(req: ModifyClusterAuthenticationOptionsRequest, cb?: (error: string, rep: ModifyClusterAuthenticationOptionsResponse) => void): Promise<ModifyClusterAuthenticationOptionsResponse>;
    /**
     * 获取被关联集群列表
     */
    DescribePrometheusAgents(req: DescribePrometheusAgentsRequest, cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void): Promise<DescribePrometheusAgentsResponse>;
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse>;
    /**
     * 获取集群规模价格
     */
    GetClusterLevelPrice(req: GetClusterLevelPriceRequest, cb?: (error: string, rep: GetClusterLevelPriceResponse) => void): Promise<GetClusterLevelPriceResponse>;
    /**
     * 修改模板内容
     */
    ModifyPrometheusTemplate(req: ModifyPrometheusTemplateRequest, cb?: (error: string, rep: ModifyPrometheusTemplateResponse) => void): Promise<ModifyPrometheusTemplateResponse>;
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    DescribeClusterKubeconfig(req: DescribeClusterKubeconfigRequest, cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void): Promise<DescribeClusterKubeconfigResponse>;
    /**
     * 集群弹性伸缩配置
     */
    DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse>;
    /**
     * 查询弹性集群列表
     */
    DescribeEKSClusters(req: DescribeEKSClustersRequest, cb?: (error: string, rep: DescribeEKSClustersResponse) => void): Promise<DescribeEKSClustersResponse>;
    /**
     * 创建节点池
     */
    CreateClusterNodePool(req: CreateClusterNodePoolRequest, cb?: (error: string, rep: CreateClusterNodePoolResponse) => void): Promise<CreateClusterNodePoolResponse>;
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    DescribePrometheusTemplates(req: DescribePrometheusTemplatesRequest, cb?: (error: string, rep: DescribePrometheusTemplatesResponse) => void): Promise<DescribePrometheusTemplatesResponse>;
    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     */
    DescribeEnableVpcCniProgress(req: DescribeEnableVpcCniProgressRequest, cb?: (error: string, rep: DescribeEnableVpcCniProgressResponse) => void): Promise<DescribeEnableVpcCniProgressResponse>;
    /**
     * 启用集群删除保护
     */
    EnableClusterDeletionProtection(req: EnableClusterDeletionProtectionRequest, cb?: (error: string, rep: EnableClusterDeletionProtectionResponse) => void): Promise<EnableClusterDeletionProtectionResponse>;
    /**
     * 同步模板到实例或者集群
     */
    SyncPrometheusTemplate(req: SyncPrometheusTemplateRequest, cb?: (error: string, rep: SyncPrometheusTemplateResponse) => void): Promise<SyncPrometheusTemplateResponse>;
    /**
     * 查询容器实例支持的地域
     */
    DescribeEKSContainerInstanceRegions(req?: DescribeEKSContainerInstanceRegionsRequest, cb?: (error: string, rep: DescribeEKSContainerInstanceRegionsResponse) => void): Promise<DescribeEKSContainerInstanceRegionsResponse>;
    /**
     * 移出节点池节点，但保留在集群内
     */
    RemoveNodeFromNodePool(req: RemoveNodeFromNodePoolRequest, cb?: (error: string, rep: RemoveNodeFromNodePoolResponse) => void): Promise<RemoveNodeFromNodePoolResponse>;
    /**
     * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
     */
    DisableVpcCniNetworkType(req: DisableVpcCniNetworkTypeRequest, cb?: (error: string, rep: DisableVpcCniNetworkTypeResponse) => void): Promise<DisableVpcCniNetworkTypeResponse>;
    /**
     * 删除集群中的实例
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 修改弹性集群名称等属性
     */
    UpdateEKSCluster(req: UpdateEKSClusterRequest, cb?: (error: string, rep: UpdateEKSClusterResponse) => void): Promise<UpdateEKSClusterResponse>;
    /**
     * 获取TKE支持的App列表
     */
    GetTkeAppChartList(req: GetTkeAppChartListRequest, cb?: (error: string, rep: GetTkeAppChartListResponse) => void): Promise<GetTkeAppChartListResponse>;
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    CreateClusterEndpointVip(req: CreateClusterEndpointVipRequest, cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void): Promise<CreateClusterEndpointVipResponse>;
}
