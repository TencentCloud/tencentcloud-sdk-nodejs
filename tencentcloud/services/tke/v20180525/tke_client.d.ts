import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeClusterEndpointVipStatusRequest, DescribeClusterSecurityRequest, GetTkeAppChartListRequest, DescribeEdgeCVMInstancesRequest, InstallLogAgentRequest, DescribeClusterEndpointVipStatusResponse, DeleteClusterResponse, CreateClusterRouteTableResponse, ModifyClusterImageResponse, DescribeAddonResponse, DescribeEKSClustersRequest, DescribePrometheusInstancesOverviewRequest, ModifyOpenPolicyListResponse, CreateClusterNodePoolRequest, UpgradeClusterReleaseRequest, DescribeEdgeClusterUpgradeInfoRequest, DisableVpcCniNetworkTypeResponse, DescribeClusterControllersResponse, DescribeExistedInstancesRequest, DeletePrometheusClusterAgentRequest, ModifyPrometheusAlertRuleResponse, DescribeEKSContainerInstanceEventResponse, EnableClusterDeletionProtectionResponse, EnableClusterAuditResponse, CreateBackupStorageLocationResponse, UpdateImageCacheRequest, DescribePrometheusAgentInstancesRequest, ModifyClusterAttributeRequest, DescribeClusterRoutesResponse, DescribeClustersRequest, UpgradeClusterInstancesRequest, DescribeAddonValuesRequest, DescribeResourceUsageRequest, DeletePrometheusTemplateSyncRequest, DisableVpcCniNetworkTypeRequest, DescribeClusterReleaseDetailsResponse, SyncPrometheusTempResponse, CreateEdgeLogConfigRequest, CreatePrometheusDashboardResponse, CancelClusterReleaseRequest, DescribeTKEEdgeClusterStatusResponse, ModifyClusterAsGroupOptionAttributeRequest, DescribeClusterStatusRequest, CreateBackupStorageLocationRequest, DeleteClusterNodePoolRequest, DescribeEKSClusterCredentialResponse, CheckInstancesUpgradeAbleRequest, ModifyPrometheusTemplateRequest, DescribeEncryptionStatusRequest, DeleteClusterVirtualNodePoolRequest, DescribeImageCachesRequest, DeleteAddonRequest, DescribeEdgeAvailableExtraArgsRequest, CreateReservedInstancesResponse, AddNodeToNodePoolResponse, DescribePostNodeResourcesRequest, DescribePrometheusInstanceInitStatusResponse, DisableEventPersistenceResponse, UpdateEKSContainerInstanceRequest, DescribeReservedInstancesResponse, ModifyClusterTagsResponse, DescribeEdgeAvailableExtraArgsResponse, CreatePrometheusRecordRuleYamlRequest, DescribeEnableVpcCniProgressRequest, ModifyClusterAttributeResponse, CreateEksLogConfigRequest, CreateClusterResponse, DeletePrometheusAlertRuleResponse, DescribeClusterPendingReleasesRequest, DeletePrometheusConfigResponse, DescribeEksContainerInstanceLogRequest, CreatePrometheusRecordRuleYamlResponse, DescribeClusterInstancesRequest, ModifyPrometheusTempRequest, DeletePrometheusTempSyncResponse, DescribePrometheusRecordRulesRequest, DescribeTKEEdgeClusterStatusRequest, AcquireClusterAdminRoleResponse, DescribeEdgeClusterInstancesResponse, UpdateEdgeClusterVersionRequest, GetTkeAppChartListResponse, DescribePrometheusTemplateSyncRequest, DescribeExternalNodeSupportConfigRequest, ModifyClusterImageRequest, UpgradeClusterInstancesResponse, DescribeClusterAsGroupOptionRequest, DescribePrometheusAgentInstancesResponse, AddExistedInstancesRequest, DeletePrometheusTempResponse, DescribeClusterNodePoolsRequest, DescribeClusterRouteTablesRequest, DeleteClusterRouteRequest, CreateCLSLogConfigResponse, DeleteClusterEndpointRequest, DeleteClusterVirtualNodeRequest, DescribeClusterNodePoolDetailRequest, DescribePrometheusTempSyncRequest, DescribePrometheusGlobalConfigResponse, DescribeClusterReleaseHistoryResponse, DescribeImagesRequest, UninstallEdgeLogAgentResponse, DescribeSupportedRuntimeRequest, AddVpcCniSubnetsRequest, DescribePrometheusAlertHistoryResponse, DescribeClusterAsGroupOptionResponse, CreateTKEEdgeClusterResponse, DescribeEdgeClusterExtraArgsResponse, ListClusterInspectionResultsResponse, InstallEdgeLogAgentRequest, CheckEdgeClusterCIDRRequest, CreateImageCacheRequest, UpdateClusterVersionRequest, ModifyOpenPolicyListRequest, DescribeClusterNodePoolDetailResponse, DeletePrometheusConfigRequest, DescribeEKSContainerInstanceEventRequest, ScaleOutClusterMasterResponse, DeleteClusterAsGroupsRequest, CreateEKSContainerInstancesResponse, DeleteEdgeCVMInstancesResponse, DescribeIPAMDRequest, DescribeClusterKubeconfigResponse, DescribeClusterCommonNamesRequest, DescribeBatchModifyTagsStatusResponse, DescribeRIUtilizationDetailRequest, DescribeEKSClustersResponse, DeleteClusterRequest, DescribeTKEEdgeClustersResponse, DescribeAvailableTKEEdgeVersionRequest, DescribeClusterInspectionResultsOverviewRequest, ModifyPrometheusAlertPolicyRequest, ForwardApplicationRequestV3Request, DescribeOpenPolicyListRequest, DescribePrometheusTemplatesRequest, DescribePrometheusAlertPolicyResponse, EnableVpcCniNetworkTypeResponse, DescribePrometheusAlertRuleResponse, DescribeEdgeClusterInstancesRequest, DisableClusterAuditRequest, SyncPrometheusTempRequest, DeleteBackupStorageLocationResponse, DescribePrometheusGlobalNotificationResponse, DescribeBatchModifyTagsStatusRequest, CreateClusterVirtualNodeRequest, DescribeTKEEdgeClustersRequest, DescribePrometheusAlertHistoryRequest, SetNodePoolNodeProtectionResponse, DeletePrometheusAlertPolicyRequest, ModifyPrometheusAgentExternalLabelsResponse, RollbackClusterReleaseRequest, DescribePodDeductionRateResponse, DeleteClusterInstancesRequest, CreateClusterInstancesRequest, DeleteBackupStorageLocationRequest, UninstallClusterReleaseResponse, ModifyNodePoolInstanceTypesRequest, AddClusterCIDRRequest, CreateClusterRequest, CreateEdgeCVMInstancesRequest, DescribeClusterReleaseHistoryRequest, DescribeEdgeClusterExtraArgsRequest, DescribeClustersResponse, DeleteClusterVirtualNodeResponse, CreateEdgeCVMInstancesResponse, DescribeEdgeLogSwitchesResponse, CreatePrometheusClusterAgentResponse, DescribePrometheusTemplatesResponse, UpdateEKSContainerInstanceResponse, ModifyNodePoolInstanceTypesResponse, GetClusterLevelPriceResponse, DescribeResourceUsageResponse, RenewReservedInstancesResponse, DescribeAvailableClusterVersionRequest, UpgradeClusterReleaseResponse, DescribePrometheusAlertPolicyRequest, DeleteClusterAsGroupsResponse, ModifyClusterRuntimeConfigRequest, DescribePrometheusConfigRequest, DescribeEdgeLogSwitchesRequest, DescribeExternalNodeSupportConfigResponse, EnableEncryptionProtectionResponse, DeletePrometheusTemplateRequest, DeletePrometheusRecordRuleYamlResponse, DescribePrometheusTempSyncResponse, CreatePrometheusConfigResponse, DescribeClusterEndpointStatusResponse, AddExistedInstancesResponse, RestartEKSContainerInstancesResponse, DisableClusterDeletionProtectionResponse, EnableVpcCniNetworkTypeRequest, CreateClusterEndpointRequest, DeletePrometheusClusterAgentResponse, DescribePrometheusInstanceResponse, UpdateTKEEdgeClusterRequest, DescribeOpenPolicyListResponse, CreateClusterInstancesResponse, DeleteReservedInstancesResponse, DescribeLogSwitchesResponse, ModifyClusterVirtualNodePoolResponse, DescribeClusterRoutesRequest, DeleteECMInstancesRequest, RemoveNodeFromNodePoolResponse, SetNodePoolNodeProtectionRequest, EnableClusterAuditRequest, CreateClusterRouteTableRequest, DisableClusterAuditResponse, DescribeClusterEndpointsResponse, RemoveNodeFromNodePoolRequest, DescribeEncryptionStatusResponse, DescribeClusterLevelChangeRecordsRequest, UpdateClusterVersionResponse, DeleteClusterNodePoolResponse, DeleteImageCachesRequest, CreateClusterNodePoolResponse, UpdateTKEEdgeClusterResponse, UpdateAddonResponse, DescribeEKSContainerInstancesRequest, DescribeClusterControllersRequest, ModifyPrometheusAlertRuleRequest, DescribeClusterSecurityResponse, ModifyNodePoolDesiredCapacityAboutAsgResponse, DescribeReservedInstanceUtilizationRateRequest, CreateClusterRouteRequest, DescribeReservedInstanceUtilizationRateResponse, ModifyClusterEndpointSPRequest, DescribePrometheusConfigResponse, DeleteClusterEndpointResponse, RollbackClusterReleaseResponse, DescribeClusterVirtualNodePoolsRequest, DescribePrometheusRecordRulesResponse, DescribePodsBySpecResponse, ModifyPrometheusConfigResponse, DescribeTKEEdgeExternalKubeconfigRequest, CreatePrometheusAlertPolicyResponse, DescribeClusterVirtualNodeRequest, DescribeClusterReleasesResponse, AddNodeToNodePoolRequest, CreateReservedInstancesRequest, ModifyPrometheusGlobalNotificationResponse, UninstallClusterReleaseRequest, ModifyPrometheusTempResponse, DescribePodChargeInfoRequest, ForwardTKEEdgeApplicationRequestV3Response, CreateClusterVirtualNodePoolRequest, ModifyPrometheusConfigRequest, DescribePrometheusGlobalNotificationRequest, DescribePrometheusTemplateSyncResponse, CreateEksLogConfigResponse, ModifyPrometheusTemplateResponse, ModifyPrometheusAlertPolicyResponse, DescribeClusterAuthenticationOptionsRequest, DescribeEksContainerInstanceLogResponse, DeleteEKSClusterResponse, RenewReservedInstancesRequest, UpdateImageCacheResponse, DescribeIPAMDResponse, CreatePrometheusConfigRequest, CreateCLSLogConfigRequest, CreateClusterVirtualNodeResponse, CreatePrometheusClusterAgentRequest, DescribeRouteTableConflictsResponse, DescribePrometheusInstancesOverviewResponse, DescribeEKSClusterCredentialRequest, EnableClusterDeletionProtectionRequest, RestartEKSContainerInstancesRequest, DrainClusterVirtualNodeRequest, DescribeClusterLevelAttributeRequest, DescribeClusterReleaseDetailsRequest, CreateECMInstancesRequest, DescribeClusterReleasesRequest, DescribePrometheusOverviewsRequest, DescribeClusterPendingReleasesResponse, DeleteEKSClusterRequest, DescribeLogConfigsResponse, DescribeExistedInstancesResponse, CreatePrometheusTemplateRequest, DescribeEKSContainerInstancesResponse, CreatePrometheusAlertRuleResponse, EnableEncryptionProtectionRequest, DeleteEKSContainerInstancesResponse, DescribePostNodeResourcesResponse, DescribePrometheusAlertRuleRequest, UninstallLogAgentRequest, DeleteEdgeClusterInstancesResponse, DeleteTKEEdgeClusterRequest, CreatePrometheusGlobalNotificationResponse, ListClusterInspectionResultsItemsRequest, DescribeClusterAuthenticationOptionsResponse, CreateClusterReleaseRequest, DescribePrometheusAgentsRequest, AddClusterCIDRResponse, DescribePrometheusInstanceInitStatusRequest, DescribeClusterLevelAttributeResponse, CreatePrometheusAlertPolicyRequest, DescribeImageCachesResponse, DescribeClusterVirtualNodePoolsResponse, CheckEdgeClusterCIDRResponse, DescribePrometheusClusterAgentsRequest, DescribeTKEEdgeExternalKubeconfigResponse, CheckInstancesUpgradeAbleResponse, CreatePrometheusTempRequest, CreatePrometheusDashboardRequest, DeleteClusterRouteTableResponse, DescribeAddonValuesResponse, DisableClusterDeletionProtectionRequest, ListClusterInspectionResultsItemsResponse, ModifyClusterAsGroupOptionAttributeResponse, UninstallLogAgentResponse, DeleteTKEEdgeClusterResponse, CreatePrometheusTempResponse, DescribePrometheusTargetsRequest, RunPrometheusInstanceResponse, DeletePrometheusTemplateSyncResponse, DescribeClusterAsGroupsRequest, GetMostSuitableImageCacheResponse, ModifyClusterEndpointSPResponse, SyncPrometheusTemplateResponse, DescribeClusterExtraArgsResponse, ForwardTKEEdgeApplicationRequestV3Request, DisableEventPersistenceRequest, CreateEKSContainerInstancesRequest, DescribeTKEEdgeClusterCredentialResponse, CancelClusterReleaseResponse, UpdateEdgeClusterVersionResponse, ModifyClusterAsGroupAttributeRequest, DescribeClusterExtraArgsRequest, DescribeClusterAsGroupsResponse, DescribeLogSwitchesRequest, ScaleOutClusterMasterRequest, DeleteClusterInstancesResponse, CreatePrometheusGlobalNotificationRequest, DescribeRIUtilizationDetailResponse, GetUpgradeInstanceProgressResponse, DescribeClusterInstancesResponse, CreatePrometheusAlertRuleRequest, UpdateEKSClusterRequest, CreateTKEEdgeClusterRequest, DescribeSupportedRuntimeResponse, CreateClusterVirtualNodePoolResponse, CreateEKSClusterResponse, CreateImageCacheResponse, CreateEdgeLogConfigResponse, DescribeAvailableTKEEdgeVersionResponse, ModifyPrometheusRecordRuleYamlRequest, DeletePrometheusAlertPolicyResponse, InstallEdgeLogAgentResponse, DescribeTKEEdgeClusterCredentialRequest, DescribeLogConfigsRequest, DisableEncryptionProtectionResponse, CreateEKSClusterRequest, EnableEventPersistenceRequest, ModifyClusterAuthenticationOptionsResponse, UpdateAddonRequest, ModifyClusterVirtualNodePoolRequest, DescribeRegionsResponse, CreateClusterRouteResponse, DescribeEKSContainerInstanceRegionsRequest, DescribeECMInstancesRequest, DrainClusterVirtualNodeResponse, DescribeVpcCniPodLimitsResponse, DescribeVersionsResponse, ScaleInClusterMasterRequest, DeleteEdgeClusterInstancesRequest, EnableEventPersistenceResponse, DescribeImagesResponse, UninstallEdgeLogAgentRequest, CreateClusterEndpointVipResponse, DeletePrometheusAlertRuleRequest, ModifyReservedInstanceScopeResponse, DescribeRouteTableConflictsRequest, DeleteClusterEndpointVipResponse, DescribeBackupStorageLocationsResponse, ModifyClusterAsGroupAttributeResponse, DeletePrometheusTempRequest, DescribeTKEEdgeScriptResponse, DescribeClusterRouteTablesResponse, DeleteLogConfigsRequest, ModifyClusterTagsRequest, DescribeClusterKubeconfigRequest, DeletePrometheusTempSyncRequest, CreatePrometheusTemplateResponse, CreateClusterEndpointVipRequest, UpdateClusterKubeconfigRequest, DeleteReservedInstancesRequest, DescribePrometheusGlobalConfigRequest, CreateECMInstancesResponse, ModifyPrometheusGlobalNotificationRequest, DescribeClusterNodePoolsResponse, GetUpgradeInstanceProgressRequest, UpdateEKSClusterResponse, DescribeEdgeCVMInstancesResponse, DescribeRegionsRequest, ModifyNodePoolDesiredCapacityAboutAsgRequest, DeleteClusterRouteResponse, DeleteECMInstancesResponse, DescribeEdgeClusterUpgradeInfoResponse, ModifyClusterNodePoolResponse, ModifyPrometheusAgentExternalLabelsRequest, DeleteClusterVirtualNodePoolResponse, SyncPrometheusTemplateRequest, DescribeClusterEndpointStatusRequest, DescribeClusterStatusResponse, DescribePrometheusClusterAgentsResponse, DescribeVersionsRequest, DescribePrometheusTempRequest, DeleteAddonResponse, DeleteClusterRouteTableRequest, DescribeClusterEndpointsRequest, AcquireClusterAdminRoleRequest, ListClusterInspectionResultsRequest, DeletePrometheusTemplateResponse, DescribePodDeductionRateRequest, DescribeECMInstancesResponse, DescribePrometheusInstanceRequest, DescribePrometheusTempResponse, CreateClusterReleaseResponse, DescribePrometheusTargetsResponse, DescribeEnableVpcCniProgressResponse, DeleteEdgeCVMInstancesRequest, ModifyClusterNodePoolRequest, InstallLogAgentResponse, GetClusterLevelPriceRequest, CreateClusterEndpointResponse, DescribeReservedInstancesRequest, DescribePodsBySpecRequest, UpdateClusterKubeconfigResponse, ForwardApplicationRequestV3Response, ModifyClusterAuthenticationOptionsRequest, DeleteClusterEndpointVipRequest, DescribeClusterLevelChangeRecordsResponse, DescribePrometheusAgentsResponse, DescribeVpcCniPodLimitsRequest, DeleteImageCachesResponse, DescribeEKSContainerInstanceRegionsResponse, ModifyClusterRuntimeConfigResponse, ModifyPrometheusRecordRuleYamlResponse, DescribeTKEEdgeScriptRequest, AddVpcCniSubnetsResponse, DescribePrometheusOverviewsResponse, DescribeClusterInspectionResultsOverviewResponse, DescribePodChargeInfoResponse, DeletePrometheusRecordRuleYamlRequest, InstallAddonRequest, ScaleInClusterMasterResponse, DescribeAvailableClusterVersionResponse, GetMostSuitableImageCacheRequest, DeleteEKSContainerInstancesRequest, DescribeClusterCommonNamesResponse, DescribeAddonRequest, InstallAddonResponse, DeleteLogConfigsResponse, ModifyReservedInstanceScopeRequest, DisableEncryptionProtectionRequest, DescribeClusterVirtualNodeResponse, RunPrometheusInstanceRequest, DescribeBackupStorageLocationsRequest } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解除TMP实例的集群关联
     */
    DeletePrometheusClusterAgent(req: DeletePrometheusClusterAgentRequest, cb?: (error: string, rep: DeletePrometheusClusterAgentResponse) => void): Promise<DeletePrometheusClusterAgentResponse>;
    /**
     * 创建边缘计算ECM机器
     */
    CreateECMInstances(req: CreateECMInstancesRequest, cb?: (error: string, rep: CreateECMInstancesResponse) => void): Promise<CreateECMInstancesResponse>;
    /**
     * 查看超级节点列表
     */
    DescribeClusterVirtualNode(req: DescribeClusterVirtualNodeRequest, cb?: (error: string, rep: DescribeClusterVirtualNodeResponse) => void): Promise<DescribeClusterVirtualNodeResponse>;
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 根据K8S版本获取可选运行时版本
     */
    DescribeSupportedRuntime(req: DescribeSupportedRuntimeRequest, cb?: (error: string, rep: DescribeSupportedRuntimeResponse) => void): Promise<DescribeSupportedRuntimeResponse>;
    /**
     * 在tke@edge集群的边缘节点上安装日志采集组件
     */
    InstallEdgeLogAgent(req: InstallEdgeLogAgentRequest, cb?: (error: string, rep: InstallEdgeLogAgentResponse) => void): Promise<InstallEdgeLogAgentResponse>;
    /**
     * 查询opa策略列表
     */
    DescribeOpenPolicyList(req: DescribeOpenPolicyListRequest, cb?: (error: string, rep: DescribeOpenPolicyListResponse) => void): Promise<DescribeOpenPolicyListResponse>;
    /**
     * 创建超级节点池
     */
    CreateClusterVirtualNodePool(req: CreateClusterVirtualNodePoolRequest, cb?: (error: string, rep: CreateClusterVirtualNodePoolResponse) => void): Promise<CreateClusterVirtualNodePoolResponse>;
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
     * 升级边缘集群组件到指定版本，此版本为TKEEdge专用版本。
     */
    UpdateEdgeClusterVersion(req: UpdateEdgeClusterVersionRequest, cb?: (error: string, rep: UpdateEdgeClusterVersionResponse) => void): Promise<UpdateEdgeClusterVersionResponse>;
    /**
     * 从tke@edge集群边缘节点上卸载日志采集组件
     */
    UninstallEdgeLogAgent(req: UninstallEdgeLogAgentRequest, cb?: (error: string, rep: UninstallEdgeLogAgentResponse) => void): Promise<UninstallEdgeLogAgentResponse>;
    /**
     * 查看开启第三方节点池配置信息
     */
    DescribeExternalNodeSupportConfig(req: DescribeExternalNodeSupportConfigRequest, cb?: (error: string, rep: DescribeExternalNodeSupportConfigResponse) => void): Promise<DescribeExternalNodeSupportConfigResponse>;
    /**
     * 删除边缘计算实例
     */
    DeleteEdgeClusterInstances(req: DeleteEdgeClusterInstancesRequest, cb?: (error: string, rep: DeleteEdgeClusterInstancesResponse) => void): Promise<DeleteEdgeClusterInstancesResponse>;
    /**
     * 包括 Pod 资源统计和绑定的预留券资源统计。
     */
    DescribePostNodeResources(req: DescribePostNodeResourcesRequest, cb?: (error: string, rep: DescribePostNodeResourcesResponse) => void): Promise<DescribePostNodeResourcesResponse>;
    /**
     * 仅能设置节点池中处于伸缩组的节点
     */
    SetNodePoolNodeProtection(req: SetNodePoolNodeProtectionRequest, cb?: (error: string, rep: SetNodePoolNodeProtectionResponse) => void): Promise<SetNodePoolNodeProtectionResponse>;
    /**
     * 查询容器实例的事件
     */
    DescribeEKSContainerInstanceEvent(req: DescribeEKSContainerInstanceEventRequest, cb?: (error: string, rep: DescribeEKSContainerInstanceEventResponse) => void): Promise<DescribeEKSContainerInstanceEventResponse>;
    /**
     * 查询边缘容器集群可用的自定义参数
     */
    DescribeEdgeAvailableExtraArgs(req: DescribeEdgeAvailableExtraArgsRequest, cb?: (error: string, rep: DescribeEdgeAvailableExtraArgsResponse) => void): Promise<DescribeEdgeAvailableExtraArgsResponse>;
    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     */
    DescribeClusterCommonNames(req: DescribeClusterCommonNamesRequest, cb?: (error: string, rep: DescribeClusterCommonNamesResponse) => void): Promise<DescribeClusterCommonNamesResponse>;
    /**
     * 获取2.0实例初始化任务状态
     */
    DescribePrometheusInstanceInitStatus(req: DescribePrometheusInstanceInitStatusRequest, cb?: (error: string, rep: DescribePrometheusInstanceInitStatusResponse) => void): Promise<DescribePrometheusInstanceInitStatusResponse>;
    /**
     * 开启事件持久化功能
     */
    EnableEventPersistence(req: EnableEventPersistenceRequest, cb?: (error: string, rep: EnableEventPersistenceResponse) => void): Promise<EnableEventPersistenceResponse>;
    /**
     * 获取告警历史
     */
    DescribePrometheusAlertHistory(req: DescribePrometheusAlertHistoryRequest, cb?: (error: string, rep: DescribePrometheusAlertHistoryResponse) => void): Promise<DescribePrometheusAlertHistoryResponse>;
    /**
     * 获取eniipamd组件信息
     */
    DescribeIPAMD(req: DescribeIPAMDRequest, cb?: (error: string, rep: DescribeIPAMDResponse) => void): Promise<DescribeIPAMDResponse>;
    /**
     * 创建集群路由表
     */
    CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse>;
    /**
     * 获得节点升级当前的进度，若集群未处于节点升级状态，则接口会报错：任务未找到。
     */
    GetUpgradeInstanceProgress(req: GetUpgradeInstanceProgressRequest, cb?: (error: string, rep: GetUpgradeInstanceProgressResponse) => void): Promise<GetUpgradeInstanceProgressResponse>;
    /**
     * 创建一个云原生Prometheus模板实例
     */
    CreatePrometheusTemplate(req: CreatePrometheusTemplateRequest, cb?: (error: string, rep: CreatePrometheusTemplateResponse) => void): Promise<CreatePrometheusTemplateResponse>;
    /**
     * 查询可以用预留券抵扣的 Pod 信息。
     */
    DescribePodsBySpec(req: DescribePodsBySpecRequest, cb?: (error: string, rep: DescribePodsBySpecResponse) => void): Promise<DescribePodsBySpecResponse>;
    /**
     * 查询预留实例列表
     */
    DescribeReservedInstances(req: DescribeReservedInstancesRequest, cb?: (error: string, rep: DescribeReservedInstancesResponse) => void): Promise<DescribeReservedInstancesResponse>;
    /**
     * 删除超级节点
     */
    DeleteClusterVirtualNode(req: DeleteClusterVirtualNodeRequest, cb?: (error: string, rep: DeleteClusterVirtualNodeResponse) => void): Promise<DeleteClusterVirtualNodeResponse>;
    /**
     * 删除备份仓库
     */
    DeleteBackupStorageLocation(req: DeleteBackupStorageLocationRequest, cb?: (error: string, rep: DeleteBackupStorageLocationResponse) => void): Promise<DeleteBackupStorageLocationResponse>;
    /**
     * 边缘计算支持版本和k8s版本
     */
    DescribeAvailableTKEEdgeVersion(req: DescribeAvailableTKEEdgeVersionRequest, cb?: (error: string, rep: DescribeAvailableTKEEdgeVersionResponse) => void): Promise<DescribeAvailableTKEEdgeVersionResponse>;
    /**
     * 查询边缘集群列表
     */
    DescribeTKEEdgeClusters(req: DescribeTKEEdgeClustersRequest, cb?: (error: string, rep: DescribeTKEEdgeClustersResponse) => void): Promise<DescribeTKEEdgeClustersResponse>;
    /**
     * 从TKE集群中卸载CLS日志采集组件
     */
    UninstallLogAgent(req: UninstallLogAgentRequest, cb?: (error: string, rep: UninstallLogAgentResponse) => void): Promise<UninstallLogAgentResponse>;
    /**
     * 查询正在运行中Pod的计费信息。可以通过 Namespace 和 Name 来查询某个 Pod 的信息，也可以通过 Pod 的 Uid 批量查询。
     */
    DescribePodChargeInfo(req: DescribePodChargeInfoRequest, cb?: (error: string, rep: DescribePodChargeInfoResponse) => void): Promise<DescribePodChargeInfoResponse>;
    /**
     * 获取集群版本信息
     */
    DescribeVersions(req?: DescribeVersionsRequest, cb?: (error: string, rep: DescribeVersionsResponse) => void): Promise<DescribeVersionsResponse>;
    /**
     * 操作TKE集群的addon
     */
    ForwardApplicationRequestV3(req: ForwardApplicationRequestV3Request, cb?: (error: string, rep: ForwardApplicationRequestV3Response) => void): Promise<ForwardApplicationRequestV3Response>;
    /**
     * 修改被关联集群的external labels
     */
    ModifyPrometheusAgentExternalLabels(req: ModifyPrometheusAgentExternalLabelsRequest, cb?: (error: string, rep: ModifyPrometheusAgentExternalLabelsResponse) => void): Promise<ModifyPrometheusAgentExternalLabelsResponse>;
    /**
     * 查询边缘集群自定义参数
     */
    DescribeEdgeClusterExtraArgs(req: DescribeEdgeClusterExtraArgsRequest, cb?: (error: string, rep: DescribeEdgeClusterExtraArgsResponse) => void): Promise<DescribeEdgeClusterExtraArgsResponse>;
    /**
     * 删除弹性集群(yunapiv3)
     */
    DeleteEKSCluster(req: DeleteEKSClusterRequest, cb?: (error: string, rep: DeleteEKSClusterResponse) => void): Promise<DeleteEKSClusterResponse>;
    /**
     * 获取事件、审计和日志的状态
     */
    DescribeEdgeLogSwitches(req: DescribeEdgeLogSwitchesRequest, cb?: (error: string, rep: DescribeEdgeLogSwitchesResponse) => void): Promise<DescribeEdgeLogSwitchesResponse>;
    /**
     * 修改预留券的抵扣范围，抵扣范围取值：Region、Zone 和 Node。
     */
    ModifyReservedInstanceScope(req: ModifyReservedInstanceScopeRequest, cb?: (error: string, rep: ModifyReservedInstanceScopeResponse) => void): Promise<ModifyReservedInstanceScopeResponse>;
    /**
     * 获取边缘计算外部访问的kubeconfig
     */
    DescribeTKEEdgeExternalKubeconfig(req: DescribeTKEEdgeExternalKubeconfigRequest, cb?: (error: string, rep: DescribeTKEEdgeExternalKubeconfigResponse) => void): Promise<DescribeTKEEdgeExternalKubeconfigResponse>;
    /**
     * 修改集群标签
     */
    ModifyClusterTags(req: ModifyClusterTagsRequest, cb?: (error: string, rep: ModifyClusterTagsResponse) => void): Promise<ModifyClusterTagsResponse>;
    /**
     * 创建日志采集配置
     */
    CreateCLSLogConfig(req: CreateCLSLogConfigRequest, cb?: (error: string, rep: CreateCLSLogConfigResponse) => void): Promise<CreateCLSLogConfigResponse>;
    /**
     * 开启集群审计
     */
    EnableClusterAudit(req: EnableClusterAuditRequest, cb?: (error: string, rep: EnableClusterAuditResponse) => void): Promise<EnableClusterAuditResponse>;
    /**
     * 创建备份仓库，指定了存储仓库类型（如COS）、COS桶地区、名称等信息，当前最多允许创建100个仓库， 注意此接口当前是全局接口，多个地域的TKE集群如果要备份到相同的备份仓库中，不需要重复创建备份仓库
     */
    CreateBackupStorageLocation(req: CreateBackupStorageLocationRequest, cb?: (error: string, rep: CreateBackupStorageLocationResponse) => void): Promise<CreateBackupStorageLocationResponse>;
    /**
     * 修改超级节点池
     */
    ModifyClusterVirtualNodePool(req: ModifyClusterVirtualNodePoolRequest, cb?: (error: string, rep: ModifyClusterVirtualNodePoolResponse) => void): Promise<ModifyClusterVirtualNodePoolResponse>;
    /**
     * 获取集群可以升级的所有版本
     */
    DescribeAvailableClusterVersion(req: DescribeAvailableClusterVersionRequest, cb?: (error: string, rep: DescribeAvailableClusterVersionResponse) => void): Promise<DescribeAvailableClusterVersionResponse>;
    /**
     * 修改集群采集配置
     */
    ModifyPrometheusConfig(req: ModifyPrometheusConfigRequest, cb?: (error: string, rep: ModifyPrometheusConfigResponse) => void): Promise<ModifyPrometheusConfigResponse>;
    /**
     * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
     */
    DescribeVpcCniPodLimits(req: DescribeVpcCniPodLimitsRequest, cb?: (error: string, rep: DescribeVpcCniPodLimitsResponse) => void): Promise<DescribeVpcCniPodLimitsResponse>;
    /**
     * 升级集群 Master 组件到指定版本
     */
    UpdateClusterVersion(req: UpdateClusterVersionRequest, cb?: (error: string, rep: UpdateClusterVersionResponse) => void): Promise<UpdateClusterVersionResponse>;
    /**
     * 在应用市场中查询正在安装中的应用列表
     */
    DescribeClusterPendingReleases(req: DescribeClusterPendingReleasesRequest, cb?: (error: string, rep: DescribeClusterPendingReleasesResponse) => void): Promise<DescribeClusterPendingReleasesResponse>;
    /**
     * 创建聚合规则yaml方式
     */
    CreatePrometheusRecordRuleYaml(req: CreatePrometheusRecordRuleYamlRequest, cb?: (error: string, rep: CreatePrometheusRecordRuleYamlResponse) => void): Promise<CreatePrometheusRecordRuleYamlResponse>;
    /**
     * 批量删除镜像缓存
     */
    DeleteImageCaches(req: DeleteImageCachesRequest, cb?: (error: string, rep: DeleteImageCachesResponse) => void): Promise<DeleteImageCachesResponse>;
    /**
     * 删除集群路由表
     */
    DeleteClusterRouteTable(req: DeleteClusterRouteTableRequest, cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void): Promise<DeleteClusterRouteTableResponse>;
    /**
     * 获取边缘脚本链接，此接口用于添加第三方节点，通过下载脚本从而将节点添加到边缘集群。
     */
    DescribeTKEEdgeScript(req: DescribeTKEEdgeScriptRequest, cb?: (error: string, rep: DescribeTKEEdgeScriptResponse) => void): Promise<DescribeTKEEdgeScriptResponse>;
    /**
     * 修改2.0实例告警策略
     */
    ModifyPrometheusAlertPolicy(req: ModifyPrometheusAlertPolicyRequest, cb?: (error: string, rep: ModifyPrometheusAlertPolicyResponse) => void): Promise<ModifyPrometheusAlertPolicyResponse>;
    /**
     * 更新一个addon的参数和版本
     */
    UpdateAddon(req: UpdateAddonRequest, cb?: (error: string, rep: UpdateAddonResponse) => void): Promise<UpdateAddonResponse>;
    /**
     * 查看集群认证配置
     */
    DescribeClusterAuthenticationOptions(req: DescribeClusterAuthenticationOptionsRequest, cb?: (error: string, rep: DescribeClusterAuthenticationOptionsResponse) => void): Promise<DescribeClusterAuthenticationOptionsResponse>;
    /**
     * 修改集群伸缩组属性
     */
    ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse>;
    /**
     * 为目标集群安装一个addon
     */
    InstallAddon(req: InstallAddonRequest, cb?: (error: string, rep: InstallAddonResponse) => void): Promise<InstallAddonResponse>;
    /**
     * 删除ECM实例
     */
    DeleteECMInstances(req: DeleteECMInstancesRequest, cb?: (error: string, rep: DeleteECMInstancesResponse) => void): Promise<DeleteECMInstancesResponse>;
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
     * 在应用市场中集群删除某个应用
     */
    UninstallClusterRelease(req: UninstallClusterReleaseRequest, cb?: (error: string, rep: UninstallClusterReleaseResponse) => void): Promise<UninstallClusterReleaseResponse>;
    /**
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     */
    AddVpcCniSubnets(req: AddVpcCniSubnetsRequest, cb?: (error: string, rep: AddVpcCniSubnetsResponse) => void): Promise<AddVpcCniSubnetsResponse>;
    /**
     * 获取镜像信息
     */
    DescribeImages(req?: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     */
    DescribeExistedInstances(req: DescribeExistedInstancesRequest, cb?: (error: string, rep: DescribeExistedInstancesResponse) => void): Promise<DescribeExistedInstancesResponse>;
    /**
     * 查询指定集群的巡检结果信息
     */
    ListClusterInspectionResults(req: ListClusterInspectionResultsRequest, cb?: (error: string, rep: ListClusterInspectionResultsResponse) => void): Promise<ListClusterInspectionResultsResponse>;
    /**
     * 查询节点池列表
     */
    DescribeClusterNodePools(req: DescribeClusterNodePoolsRequest, cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void): Promise<DescribeClusterNodePoolsResponse>;
    /**
     * 获取边缘计算集群的认证信息
     */
    DescribeTKEEdgeClusterCredential(req: DescribeTKEEdgeClusterCredentialRequest, cb?: (error: string, rep: DescribeTKEEdgeClusterCredentialResponse) => void): Promise<DescribeTKEEdgeClusterCredentialResponse>;
    /**
     * 给集群的一批work节点进行升级
     */
    UpgradeClusterInstances(req: UpgradeClusterInstancesRequest, cb?: (error: string, rep: UpgradeClusterInstancesResponse) => void): Promise<UpgradeClusterInstancesResponse>;
    /**
     * 查询集群路由表
     */
    DescribeClusterRouteTables(req?: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse>;
    /**
     * 删除边缘容器CVM实例
     */
    DeleteEdgeCVMInstances(req: DeleteEdgeCVMInstancesRequest, cb?: (error: string, rep: DeleteEdgeCVMInstancesResponse) => void): Promise<DeleteEdgeCVMInstancesResponse>;
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
     * 预留券实例的购买会预先扣除本次实例购买所需金额，在调用本接口前请确保账户余额充足。
     */
    CreateReservedInstances(req: CreateReservedInstancesRequest, cb?: (error: string, rep: CreateReservedInstancesResponse) => void): Promise<CreateReservedInstancesResponse>;
    /**
     * 更新镜像缓存接口
     */
    UpdateImageCache(req: UpdateImageCacheRequest, cb?: (error: string, rep: UpdateImageCacheResponse) => void): Promise<UpdateImageCacheResponse>;
    /**
     * 查询批量修改标签状态
     */
    DescribeBatchModifyTagsStatus(req: DescribeBatchModifyTagsStatusRequest, cb?: (error: string, rep: DescribeBatchModifyTagsStatusResponse) => void): Promise<DescribeBatchModifyTagsStatusResponse>;
    /**
     * 获取容器服务支持的所有地域
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 查询各种规格类型的预留券使用率
     */
    DescribeReservedInstanceUtilizationRate(req: DescribeReservedInstanceUtilizationRateRequest, cb?: (error: string, rep: DescribeReservedInstanceUtilizationRateResponse) => void): Promise<DescribeReservedInstanceUtilizationRateResponse>;
    /**
     * 添加已经存在的实例到集群
     */
    AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse>;
    /**
     * 修改告警规则
     */
    ModifyPrometheusAlertRule(req: ModifyPrometheusAlertRuleRequest, cb?: (error: string, rep: ModifyPrometheusAlertRuleResponse) => void): Promise<ModifyPrometheusAlertRuleResponse>;
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     */
    ModifyClusterEndpointSP(req: ModifyClusterEndpointSPRequest, cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void): Promise<ModifyClusterEndpointSPResponse>;
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
     * 查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 获取边缘容器CVM实例相关信息
     */
    DescribeEdgeCVMInstances(req: DescribeEdgeCVMInstancesRequest, cb?: (error: string, rep: DescribeEdgeCVMInstancesResponse) => void): Promise<DescribeEdgeCVMInstancesResponse>;
    /**
     * 用于查询Kubernetes的各个原生控制器是否开启
     */
    DescribeClusterControllers(req: DescribeClusterControllersRequest, cb?: (error: string, rep: DescribeClusterControllersResponse) => void): Promise<DescribeClusterControllersResponse>;
    /**
     * 获取一个addon的参数
     */
    DescribeAddonValues(req: DescribeAddonValuesRequest, cb?: (error: string, rep: DescribeAddonValuesResponse) => void): Promise<DescribeAddonValuesResponse>;
    /**
     * 给GR集群增加可用的ClusterCIDR（开白才能使用此功能，如需要请联系我们）
     */
    AddClusterCIDR(req: AddClusterCIDRRequest, cb?: (error: string, rep: AddClusterCIDRResponse) => void): Promise<AddClusterCIDRResponse>;
    /**
     * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
     */
    CreateImageCache(req: CreateImageCacheRequest, cb?: (error: string, rep: CreateImageCacheResponse) => void): Promise<CreateImageCacheResponse>;
    /**
     * 删除超级节点池
     */
    DeleteClusterVirtualNodePool(req: DeleteClusterVirtualNodePoolRequest, cb?: (error: string, rep: DeleteClusterVirtualNodePoolResponse) => void): Promise<DeleteClusterVirtualNodePoolResponse>;
    /**
     * 关闭加密信息保护
     */
    DisableEncryptionProtection(req: DisableEncryptionProtectionRequest, cb?: (error: string, rep: DisableEncryptionProtectionResponse) => void): Promise<DisableEncryptionProtectionResponse>;
    /**
     * 更新容器实例
     */
    UpdateEKSContainerInstance(req: UpdateEKSContainerInstanceRequest, cb?: (error: string, rep: UpdateEKSContainerInstanceResponse) => void): Promise<UpdateEKSContainerInstanceResponse>;
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    DescribePrometheusTemp(req: DescribePrometheusTempRequest, cb?: (error: string, rep: DescribePrometheusTempResponse) => void): Promise<DescribePrometheusTempResponse>;
    /**
     * 删除一个addon
     */
    DeleteAddon(req: DeleteAddonRequest, cb?: (error: string, rep: DeleteAddonResponse) => void): Promise<DeleteAddonResponse>;
    /**
     * 为弹性集群创建日志采集配置
     */
    CreateEksLogConfig(req: CreateEksLogConfigRequest, cb?: (error: string, rep: CreateEksLogConfigResponse) => void): Promise<CreateEksLogConfigResponse>;
    /**
     * 驱逐超级节点
     */
    DrainClusterVirtualNode(req: DrainClusterVirtualNodeRequest, cb?: (error: string, rep: DrainClusterVirtualNodeResponse) => void): Promise<DrainClusterVirtualNodeResponse>;
    /**
     * 重启弹性容器实例，支持批量操作
     */
    RestartEKSContainerInstances(req: RestartEKSContainerInstancesRequest, cb?: (error: string, rep: RestartEKSContainerInstancesResponse) => void): Promise<RestartEKSContainerInstancesResponse>;
    /**
     * 删除集群采集配置
     */
    DeletePrometheusConfig(req: DeletePrometheusConfigRequest, cb?: (error: string, rep: DeletePrometheusConfigResponse) => void): Promise<DeletePrometheusConfigResponse>;
    /**
     * 修改节点池关联伸缩组的期望实例数
     */
    ModifyNodePoolDesiredCapacityAboutAsg(req: ModifyNodePoolDesiredCapacityAboutAsgRequest, cb?: (error: string, rep: ModifyNodePoolDesiredCapacityAboutAsgResponse) => void): Promise<ModifyNodePoolDesiredCapacityAboutAsgResponse>;
    /**
     * 修改集群认证配置
     */
    ModifyClusterAuthenticationOptions(req: ModifyClusterAuthenticationOptionsRequest, cb?: (error: string, rep: ModifyClusterAuthenticationOptionsResponse) => void): Promise<ModifyClusterAuthenticationOptionsResponse>;
    /**
     * 创建弹性集群
     */
    CreateEKSCluster(req: CreateEKSClusterRequest, cb?: (error: string, rep: CreateEKSClusterResponse) => void): Promise<CreateEKSClusterResponse>;
    /**
     * 查询集群自定义参数
     */
    DescribeClusterExtraArgs(req: DescribeClusterExtraArgsRequest, cb?: (error: string, rep: DescribeClusterExtraArgsResponse) => void): Promise<DescribeClusterExtraArgsResponse>;
    /**
     * 对集群的Kubeconfig信息进行更新
     */
    UpdateClusterKubeconfig(req: UpdateClusterKubeconfigRequest, cb?: (error: string, rep: UpdateClusterKubeconfigResponse) => void): Promise<UpdateClusterKubeconfigResponse>;
    /**
     * 查看集群状态列表
     */
    DescribeClusterStatus(req: DescribeClusterStatusRequest, cb?: (error: string, rep: DescribeClusterStatusResponse) => void): Promise<DescribeClusterStatusResponse>;
    /**
     * 修改节点池的机型配置
     */
    ModifyNodePoolInstanceTypes(req: ModifyNodePoolInstanceTypesRequest, cb?: (error: string, rep: ModifyNodePoolInstanceTypesResponse) => void): Promise<ModifyNodePoolInstanceTypesResponse>;
    /**
     * 修改集群镜像
     */
    ModifyClusterImage(req: ModifyClusterImageRequest, cb?: (error: string, rep: ModifyClusterImageResponse) => void): Promise<ModifyClusterImageResponse>;
    /**
     * 查询日志采集规则
     */
    DescribeLogConfigs(req: DescribeLogConfigsRequest, cb?: (error: string, rep: DescribeLogConfigsResponse) => void): Promise<DescribeLogConfigsResponse>;
    /**
     * 创建一个云原生Prometheus模板
     */
    CreatePrometheusTemp(req: CreatePrometheusTempRequest, cb?: (error: string, rep: CreatePrometheusTempResponse) => void): Promise<CreatePrometheusTempResponse>;
    /**
     * 查询集群巡检结果历史列表
     */
    ListClusterInspectionResultsItems(req: ListClusterInspectionResultsItemsRequest, cb?: (error: string, rep: ListClusterInspectionResultsItemsResponse) => void): Promise<ListClusterInspectionResultsItemsResponse>;
    /**
     * 开启加密数据保护，需要先开启KMS能力，完成KMS授权
     */
    EnableEncryptionProtection(req: EnableEncryptionProtectionRequest, cb?: (error: string, rep: EnableEncryptionProtectionResponse) => void): Promise<EnableEncryptionProtectionResponse>;
    /**
     * 获取模板同步信息
     */
    DescribePrometheusTemplateSync(req: DescribePrometheusTemplateSyncRequest, cb?: (error: string, rep: DescribePrometheusTemplateSyncResponse) => void): Promise<DescribePrometheusTemplateSyncResponse>;
    /**
     * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
     */
    DisableVpcCniNetworkType(req: DisableVpcCniNetworkTypeRequest, cb?: (error: string, rep: DisableVpcCniNetworkTypeResponse) => void): Promise<DisableVpcCniNetworkTypeResponse>;
    /**
     * 获取实例详细信息
     */
    DescribePrometheusInstance(req: DescribePrometheusInstanceRequest, cb?: (error: string, rep: DescribePrometheusInstanceResponse) => void): Promise<DescribePrometheusInstanceResponse>;
    /**
     * 创建全局告警通知渠道
     */
    CreatePrometheusGlobalNotification(req: CreatePrometheusGlobalNotificationRequest, cb?: (error: string, rep: CreatePrometheusGlobalNotificationResponse) => void): Promise<CreatePrometheusGlobalNotificationResponse>;
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse>;
    /**
     * 查询容器实例
     */
    DescribeEKSContainerInstances(req: DescribeEKSContainerInstancesRequest, cb?: (error: string, rep: DescribeEKSContainerInstancesResponse) => void): Promise<DescribeEKSContainerInstancesResponse>;
    /**
     * 查询集群日志（审计、事件、普通日志）开关列表
     */
    DescribeLogSwitches(req: DescribeLogSwitchesRequest, cb?: (error: string, rep: DescribeLogSwitchesResponse) => void): Promise<DescribeLogSwitchesResponse>;
    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     */
    AcquireClusterAdminRole(req: AcquireClusterAdminRoleRequest, cb?: (error: string, rep: AcquireClusterAdminRoleResponse) => void): Promise<AcquireClusterAdminRoleResponse>;
    /**
     * 创建集群路由
     */
    CreateClusterRoute(req: CreateClusterRouteRequest, cb?: (error: string, rep: CreateClusterRouteResponse) => void): Promise<CreateClusterRouteResponse>;
    /**
     * 查询集群在应用市场中某个已安装应用的版本历史
     */
    DescribeClusterReleaseHistory(req: DescribeClusterReleaseHistoryRequest, cb?: (error: string, rep: DescribeClusterReleaseHistoryResponse) => void): Promise<DescribeClusterReleaseHistoryResponse>;
    /**
     * 在应用市场中集群回滚应用至某个历史版本
     */
    RollbackClusterRelease(req: RollbackClusterReleaseRequest, cb?: (error: string, rep: RollbackClusterReleaseResponse) => void): Promise<RollbackClusterReleaseResponse>;
    /**
     * 编辑节点池
     */
    ModifyClusterNodePool(req: ModifyClusterNodePoolRequest, cb?: (error: string, rep: ModifyClusterNodePoolResponse) => void): Promise<ModifyClusterNodePoolResponse>;
    /**
     * 查询etcd数据是否进行加密
     */
    DescribeEncryptionStatus(req: DescribeEncryptionStatusRequest, cb?: (error: string, rep: DescribeEncryptionStatusResponse) => void): Promise<DescribeEncryptionStatusResponse>;
    /**
     * 创建容器实例
     */
    CreateEKSContainerInstances(req: CreateEKSContainerInstancesRequest, cb?: (error: string, rep: CreateEKSContainerInstancesResponse) => void): Promise<CreateEKSContainerInstancesResponse>;
    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     */
    DescribePrometheusRecordRules(req: DescribePrometheusRecordRulesRequest, cb?: (error: string, rep: DescribePrometheusRecordRulesResponse) => void): Promise<DescribePrometheusRecordRulesResponse>;
    /**
     * 删除告警规则
     */
    DeletePrometheusAlertRule(req: DeletePrometheusAlertRuleRequest, cb?: (error: string, rep: DeletePrometheusAlertRuleResponse) => void): Promise<DeletePrometheusAlertRuleResponse>;
    /**
     * 查询全局告警通知渠道
     */
    DescribePrometheusGlobalNotification(req: DescribePrometheusGlobalNotificationRequest, cb?: (error: string, rep: DescribePrometheusGlobalNotificationResponse) => void): Promise<DescribePrometheusGlobalNotificationResponse>;
    /**
     * 缩容独立集群master节点，本功能为内测能力，使用之前请先提单联系我们。
     */
    ScaleInClusterMaster(req: ScaleInClusterMasterRequest, cb?: (error: string, rep: ScaleInClusterMasterResponse) => void): Promise<ScaleInClusterMasterResponse>;
    /**
     * 查询集群变配记录
     */
    DescribeClusterLevelChangeRecords(req: DescribeClusterLevelChangeRecordsRequest, cb?: (error: string, rep: DescribeClusterLevelChangeRecordsResponse) => void): Promise<DescribeClusterLevelChangeRecordsResponse>;
    /**
     * 创建集群访问端口
     */
    CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse>;
    /**
     * 查询各个规格的 Pod 的抵扣率
     */
    DescribePodDeductionRate(req: DescribePodDeductionRateRequest, cb?: (error: string, rep: DescribePodDeductionRateResponse) => void): Promise<DescribePodDeductionRateResponse>;
    /**
     * 修改全局告警通知渠道
     */
    ModifyPrometheusGlobalNotification(req: ModifyPrometheusGlobalNotificationRequest, cb?: (error: string, rep: ModifyPrometheusGlobalNotificationResponse) => void): Promise<ModifyPrometheusGlobalNotificationResponse>;
    /**
     * 预留券实例如符合退还规则，可通过本接口主动退还。
     */
    DeleteReservedInstances(req: DeleteReservedInstancesRequest, cb?: (error: string, rep: DeleteReservedInstancesResponse) => void): Promise<DeleteReservedInstancesResponse>;
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
     * 删除聚合规则
     */
    DeletePrometheusRecordRuleYaml(req: DeletePrometheusRecordRuleYamlRequest, cb?: (error: string, rep: DeletePrometheusRecordRuleYamlResponse) => void): Promise<DeletePrometheusRecordRuleYamlResponse>;
    /**
     * 查询备份仓库信息
     */
    DescribeBackupStorageLocations(req: DescribeBackupStorageLocationsRequest, cb?: (error: string, rep: DescribeBackupStorageLocationsResponse) => void): Promise<DescribeBackupStorageLocationsResponse>;
    /**
     * 修改模板内容
     */
    ModifyPrometheusTemp(req: ModifyPrometheusTempRequest, cb?: (error: string, rep: ModifyPrometheusTempResponse) => void): Promise<ModifyPrometheusTempResponse>;
    /**
     * 修改聚合规则yaml方式
     */
    ModifyPrometheusRecordRuleYaml(req: ModifyPrometheusRecordRuleYamlRequest, cb?: (error: string, rep: ModifyPrometheusRecordRuleYamlResponse) => void): Promise<ModifyPrometheusRecordRuleYamlResponse>;
    /**
     * 获取集群规模
     */
    DescribeClusterLevelAttribute(req: DescribeClusterLevelAttributeRequest, cb?: (error: string, rep: DescribeClusterLevelAttributeResponse) => void): Promise<DescribeClusterLevelAttributeResponse>;
    /**
     * 集群的密钥信息
     */
    DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse>;
    /**
     * 续费时请确保账户余额充足。
     */
    RenewReservedInstances(req: RenewReservedInstancesRequest, cb?: (error: string, rep: RenewReservedInstancesResponse) => void): Promise<RenewReservedInstancesResponse>;
    /**
     * 获取TMP实例关联集群列表
     */
    DescribePrometheusClusterAgents(req: DescribePrometheusClusterAgentsRequest, cb?: (error: string, rep: DescribePrometheusClusterAgentsResponse) => void): Promise<DescribePrometheusClusterAgentsResponse>;
    /**
     * 删除节点池
     */
    DeleteClusterNodePool(req: DeleteClusterNodePoolRequest, cb?: (error: string, rep: DeleteClusterNodePoolResponse) => void): Promise<DeleteClusterNodePoolResponse>;
    /**
     * 创建边缘计算集群
     */
    CreateTKEEdgeCluster(req: CreateTKEEdgeClusterRequest, cb?: (error: string, rep: CreateTKEEdgeClusterResponse) => void): Promise<CreateTKEEdgeClusterResponse>;
    /**
     * 获取集群资源使用量
     */
    DescribeResourceUsage(req: DescribeResourceUsageRequest, cb?: (error: string, rep: DescribeResourceUsageResponse) => void): Promise<DescribeResourceUsageResponse>;
    /**
     * 获取模板关联实例信息，针对V2版本实例
     */
    DescribePrometheusTempSync(req: DescribePrometheusTempSyncRequest, cb?: (error: string, rep: DescribePrometheusTempSyncResponse) => void): Promise<DescribePrometheusTempSyncResponse>;
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse>;
    /**
     * 获取ECM实例相关信息
     */
    DescribeECMInstances(req: DescribeECMInstancesRequest, cb?: (error: string, rep: DescribeECMInstancesResponse) => void): Promise<DescribeECMInstancesResponse>;
    /**
     * 删除边缘计算集群
     */
    DeleteTKEEdgeCluster(req: DeleteTKEEdgeClusterRequest, cb?: (error: string, rep: DeleteTKEEdgeClusterResponse) => void): Promise<DeleteTKEEdgeClusterResponse>;
    /**
     * 根据镜像列表，查询匹配的镜像缓存
     */
    GetMostSuitableImageCache(req: GetMostSuitableImageCacheRequest, cb?: (error: string, rep: GetMostSuitableImageCacheResponse) => void): Promise<GetMostSuitableImageCacheResponse>;
    /**
     * 获取集群的访问地址，包括内网地址，外网地址，外网域名，外网访问安全策略
     */
    DescribeClusterEndpoints(req: DescribeClusterEndpointsRequest, cb?: (error: string, rep: DescribeClusterEndpointsResponse) => void): Promise<DescribeClusterEndpointsResponse>;
    /**
     * 与云监控融合的2.0实例关联集群
     */
    CreatePrometheusClusterAgent(req: CreatePrometheusClusterAgentRequest, cb?: (error: string, rep: CreatePrometheusClusterAgentResponse) => void): Promise<CreatePrometheusClusterAgentResponse>;
    /**
     * 删除2.0实例告警策略
     */
    DeletePrometheusAlertPolicy(req: DeletePrometheusAlertPolicyRequest, cb?: (error: string, rep: DeletePrometheusAlertPolicyResponse) => void): Promise<DeletePrometheusAlertPolicyResponse>;
    /**
     * 获取弹性容器集群的接入认证信息
     */
    DescribeEKSClusterCredential(req: DescribeEKSClusterCredentialRequest, cb?: (error: string, rep: DescribeEKSClusterCredentialResponse) => void): Promise<DescribeEKSClusterCredentialResponse>;
    /**
     * 查询通过应用市场安装的某个应用详情
     */
    DescribeClusterReleaseDetails(req: DescribeClusterReleaseDetailsRequest, cb?: (error: string, rep: DescribeClusterReleaseDetailsResponse) => void): Promise<DescribeClusterReleaseDetailsResponse>;
    /**
     * 关闭集群审计
     */
    DisableClusterAudit(req: DisableClusterAuditRequest, cb?: (error: string, rep: DisableClusterAuditResponse) => void): Promise<DisableClusterAuditResponse>;
    /**
     * 创建边缘容器CVM机器
     */
    CreateEdgeCVMInstances(req: CreateEdgeCVMInstancesRequest, cb?: (error: string, rep: CreateEdgeCVMInstancesResponse) => void): Promise<CreateEdgeCVMInstancesResponse>;
    /**
     * 查询集群路由
     */
    DescribeClusterRoutes(req: DescribeClusterRoutesRequest, cb?: (error: string, rep: DescribeClusterRoutesResponse) => void): Promise<DescribeClusterRoutesResponse>;
    /**
     * 获得实例级别抓取配置
     */
    DescribePrometheusGlobalConfig(req: DescribePrometheusGlobalConfigRequest, cb?: (error: string, rep: DescribePrometheusGlobalConfigResponse) => void): Promise<DescribePrometheusGlobalConfigResponse>;
    /**
     * 同步模板到实例或者集群，针对V2版本实例
     */
    SyncPrometheusTemp(req: SyncPrometheusTempRequest, cb?: (error: string, rep: SyncPrometheusTempResponse) => void): Promise<SyncPrometheusTempResponse>;
    /**
     * 批量修改opa策略
     */
    ModifyOpenPolicyList(req: ModifyOpenPolicyListRequest, cb?: (error: string, rep: ModifyOpenPolicyListResponse) => void): Promise<ModifyOpenPolicyListResponse>;
    /**
     * 查询容器实例中容器日志
     */
    DescribeEksContainerInstanceLog(req: DescribeEksContainerInstanceLogRequest, cb?: (error: string, rep: DescribeEksContainerInstanceLogResponse) => void): Promise<DescribeEksContainerInstanceLogResponse>;
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
     * 移出节点池节点，但保留在集群内
     */
    RemoveNodeFromNodePool(req: RemoveNodeFromNodePoolRequest, cb?: (error: string, rep: RemoveNodeFromNodePoolResponse) => void): Promise<RemoveNodeFromNodePoolResponse>;
    /**
     * 获取边缘计算集群的当前状态以及过程信息
     */
    DescribeTKEEdgeClusterStatus(req: DescribeTKEEdgeClusterStatusRequest, cb?: (error: string, rep: DescribeTKEEdgeClusterStatusResponse) => void): Promise<DescribeTKEEdgeClusterStatusResponse>;
    /**
     * 创建告警策略
     */
    CreatePrometheusAlertPolicy(req: CreatePrometheusAlertPolicyRequest, cb?: (error: string, rep: CreatePrometheusAlertPolicyResponse) => void): Promise<CreatePrometheusAlertPolicyResponse>;
    /**
     * 删除一个云原生Prometheus配置模板
     */
    DeletePrometheusTemplate(req: DeletePrometheusTemplateRequest, cb?: (error: string, rep: DeletePrometheusTemplateResponse) => void): Promise<DeletePrometheusTemplateResponse>;
    /**
     * 获取2.0实例告警策略列表
     */
    DescribePrometheusAlertPolicy(req: DescribePrometheusAlertPolicyRequest, cb?: (error: string, rep: DescribePrometheusAlertPolicyResponse) => void): Promise<DescribePrometheusAlertPolicyResponse>;
    /**
     * 获取被关联集群列表
     */
    DescribePrometheusAgents(req: DescribePrometheusAgentsRequest, cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void): Promise<DescribePrometheusAgentsResponse>;
    /**
     * 关闭事件持久化功能
     */
    DisableEventPersistence(req: DisableEventPersistenceRequest, cb?: (error: string, rep: DisableEventPersistenceResponse) => void): Promise<DisableEventPersistenceResponse>;
    /**
     * 删除集群访问端口
     */
    DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse>;
    /**
     * 集群创建应用
     */
    CreateClusterRelease(req: CreateClusterReleaseRequest, cb?: (error: string, rep: CreateClusterReleaseResponse) => void): Promise<CreateClusterReleaseResponse>;
    /**
     * 同步模板到实例或者集群
     */
    SyncPrometheusTemplate(req: SyncPrometheusTemplateRequest, cb?: (error: string, rep: SyncPrometheusTemplateResponse) => void): Promise<SyncPrometheusTemplateResponse>;
    /**
     * 查看超级节点池列表
     */
    DescribeClusterVirtualNodePools(req: DescribeClusterVirtualNodePoolsRequest, cb?: (error: string, rep: DescribeClusterVirtualNodePoolsResponse) => void): Promise<DescribeClusterVirtualNodePoolsResponse>;
    /**
     * 获取集群规模价格
     */
    GetClusterLevelPrice(req: GetClusterLevelPriceRequest, cb?: (error: string, rep: GetClusterLevelPriceResponse) => void): Promise<GetClusterLevelPriceResponse>;
    /**
     * 预留实例用量查询
     */
    DescribeRIUtilizationDetail(req: DescribeRIUtilizationDetailRequest, cb?: (error: string, rep: DescribeRIUtilizationDetailResponse) => void): Promise<DescribeRIUtilizationDetailResponse>;
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    DescribeClusterKubeconfig(req: DescribeClusterKubeconfigRequest, cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void): Promise<DescribeClusterKubeconfigResponse>;
    /**
     * 可以查询边缘集群升级信息，包含可以升级的组件，当前升级状态和升级错误信息
     */
    DescribeEdgeClusterUpgradeInfo(req: DescribeEdgeClusterUpgradeInfoRequest, cb?: (error: string, rep: DescribeEdgeClusterUpgradeInfoResponse) => void): Promise<DescribeEdgeClusterUpgradeInfoResponse>;
    /**
     * 删除集群内采集规则
     */
    DeleteLogConfigs(req: DeleteLogConfigsRequest, cb?: (error: string, rep: DeleteLogConfigsResponse) => void): Promise<DeleteLogConfigsResponse>;
    /**
     * 获取集群采集配置
     */
    DescribePrometheusConfig(req: DescribePrometheusConfigRequest, cb?: (error: string, rep: DescribePrometheusConfigResponse) => void): Promise<DescribePrometheusConfigResponse>;
    /**
     * 在应用市场中取消安装失败的应用
     */
    CancelClusterRelease(req: CancelClusterReleaseRequest, cb?: (error: string, rep: CancelClusterReleaseResponse) => void): Promise<CancelClusterReleaseResponse>;
    /**
     * 查询边缘计算集群的节点信息
     */
    DescribeEdgeClusterInstances(req: DescribeEdgeClusterInstancesRequest, cb?: (error: string, rep: DescribeEdgeClusterInstancesResponse) => void): Promise<DescribeEdgeClusterInstancesResponse>;
    /**
     * 集群弹性伸缩配置
     */
    DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse>;
    /**
     * 查询弹性集群列表
     */
    DescribeEKSClusters(req: DescribeEKSClustersRequest, cb?: (error: string, rep: DescribeEKSClustersResponse) => void): Promise<DescribeEKSClustersResponse>;
    /**
     * 集群关联的伸缩组列表
     */
    DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse>;
    /**
     * 创建节点池
     */
    CreateClusterNodePool(req: CreateClusterNodePoolRequest, cb?: (error: string, rep: CreateClusterNodePoolResponse) => void): Promise<CreateClusterNodePoolResponse>;
    /**
     * 创建边缘集群日志采集配置
     */
    CreateEdgeLogConfig(req: CreateEdgeLogConfigRequest, cb?: (error: string, rep: CreateEdgeLogConfigResponse) => void): Promise<CreateEdgeLogConfigResponse>;
    /**
     * 查询用户单个Region下的所有集群巡检结果概览信息
     */
    DescribeClusterInspectionResultsOverview(req: DescribeClusterInspectionResultsOverviewRequest, cb?: (error: string, rep: DescribeClusterInspectionResultsOverviewResponse) => void): Promise<DescribeClusterInspectionResultsOverviewResponse>;
    /**
     * 删除一个云原生Prometheus配置模板
     */
    DeletePrometheusTemp(req: DeletePrometheusTempRequest, cb?: (error: string, rep: DeletePrometheusTempResponse) => void): Promise<DeletePrometheusTempResponse>;
    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     */
    DescribeEnableVpcCniProgress(req: DescribeEnableVpcCniProgressRequest, cb?: (error: string, rep: DescribeEnableVpcCniProgressResponse) => void): Promise<DescribeEnableVpcCniProgressResponse>;
    /**
     * 获取告警规则列表
     */
    DescribePrometheusAlertRule(req: DescribePrometheusAlertRuleRequest, cb?: (error: string, rep: DescribePrometheusAlertRuleResponse) => void): Promise<DescribePrometheusAlertRuleResponse>;
    /**
     * 启用集群删除保护
     */
    EnableClusterDeletionProtection(req: EnableClusterDeletionProtectionRequest, cb?: (error: string, rep: EnableClusterDeletionProtectionResponse) => void): Promise<EnableClusterDeletionProtectionResponse>;
    /**
     * 操作TKEEdge集群的addon
     */
    ForwardTKEEdgeApplicationRequestV3(req: ForwardTKEEdgeApplicationRequestV3Request, cb?: (error: string, rep: ForwardTKEEdgeApplicationRequestV3Response) => void): Promise<ForwardTKEEdgeApplicationRequestV3Response>;
    /**
     * 查询镜像缓存信息接口
     */
    DescribeImageCaches(req: DescribeImageCachesRequest, cb?: (error: string, rep: DescribeImageCachesResponse) => void): Promise<DescribeImageCachesResponse>;
    /**
     * 查询集群在应用市场中已安装应用列表
     */
    DescribeClusterReleases(req: DescribeClusterReleasesRequest, cb?: (error: string, rep: DescribeClusterReleasesResponse) => void): Promise<DescribeClusterReleasesResponse>;
    /**
     * 升级集群中已安装的应用
     */
    UpgradeClusterRelease(req: UpgradeClusterReleaseRequest, cb?: (error: string, rep: UpgradeClusterReleaseResponse) => void): Promise<UpgradeClusterReleaseResponse>;
    /**
     * 查询容器实例支持的地域
     */
    DescribeEKSContainerInstanceRegions(req?: DescribeEKSContainerInstanceRegionsRequest, cb?: (error: string, rep: DescribeEKSContainerInstanceRegionsResponse) => void): Promise<DescribeEKSContainerInstanceRegionsResponse>;
    /**
     * 修改边缘计算集群名称等属性
     */
    UpdateTKEEdgeCluster(req: UpdateTKEEdgeClusterRequest, cb?: (error: string, rep: UpdateTKEEdgeClusterResponse) => void): Promise<UpdateTKEEdgeClusterResponse>;
    /**
     * 修改模板内容
     */
    ModifyPrometheusTemplate(req: ModifyPrometheusTemplateRequest, cb?: (error: string, rep: ModifyPrometheusTemplateResponse) => void): Promise<ModifyPrometheusTemplateResponse>;
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    DescribePrometheusTemplates(req: DescribePrometheusTemplatesRequest, cb?: (error: string, rep: DescribePrometheusTemplatesResponse) => void): Promise<DescribePrometheusTemplatesResponse>;
    /**
     * 获取addon列表
     */
    DescribeAddon(req: DescribeAddonRequest, cb?: (error: string, rep: DescribeAddonResponse) => void): Promise<DescribeAddonResponse>;
    /**
     * 获取与云监控融合实例列表
     */
    DescribePrometheusInstancesOverview(req: DescribePrometheusInstancesOverviewRequest, cb?: (error: string, rep: DescribePrometheusInstancesOverviewResponse) => void): Promise<DescribePrometheusInstancesOverviewResponse>;
    /**
     * 删除集群中的实例
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     */
    DeletePrometheusTempSync(req: DeletePrometheusTempSyncRequest, cb?: (error: string, rep: DeletePrometheusTempSyncResponse) => void): Promise<DeletePrometheusTempSyncResponse>;
    /**
     * 创建集群采集配置
     */
    CreatePrometheusConfig(req: CreatePrometheusConfigRequest, cb?: (error: string, rep: CreatePrometheusConfigResponse) => void): Promise<CreatePrometheusConfigResponse>;
    /**
     * 初始化TMP实例，开启集成中心时调用
     */
    RunPrometheusInstance(req: RunPrometheusInstanceRequest, cb?: (error: string, rep: RunPrometheusInstanceResponse) => void): Promise<RunPrometheusInstanceResponse>;
    /**
     * 修改弹性集群名称等属性
     */
    UpdateEKSCluster(req: UpdateEKSClusterRequest, cb?: (error: string, rep: UpdateEKSClusterResponse) => void): Promise<UpdateEKSClusterResponse>;
    /**
     * 获取TKE支持的App列表
     */
    GetTkeAppChartList(req: GetTkeAppChartListRequest, cb?: (error: string, rep: GetTkeAppChartListResponse) => void): Promise<GetTkeAppChartListResponse>;
    /**
     * 创建按量计费超级节点
     */
    CreateClusterVirtualNode(req: CreateClusterVirtualNodeRequest, cb?: (error: string, rep: CreateClusterVirtualNodeResponse) => void): Promise<CreateClusterVirtualNodeResponse>;
    /**
     * 在TKE集群中安装CLS日志采集组件
     */
    InstallLogAgent(req: InstallLogAgentRequest, cb?: (error: string, rep: InstallLogAgentResponse) => void): Promise<InstallLogAgentResponse>;
    /**
     * 检查边缘计算集群的CIDR是否冲突
     */
    CheckEdgeClusterCIDR(req: CheckEdgeClusterCIDRRequest, cb?: (error: string, rep: CheckEdgeClusterCIDRResponse) => void): Promise<CheckEdgeClusterCIDRResponse>;
    /**
     * 创建托管集群外网访问端口（不再维护，准备下线）请使用新接口：CreateClusterEndpoint
     */
    CreateClusterEndpointVip(req: CreateClusterEndpointVipRequest, cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void): Promise<CreateClusterEndpointVipResponse>;
    /**
     * 修改集群及节点池纬度运行时配置
     */
    ModifyClusterRuntimeConfig(req: ModifyClusterRuntimeConfigRequest, cb?: (error: string, rep: ModifyClusterRuntimeConfigResponse) => void): Promise<ModifyClusterRuntimeConfigResponse>;
    /**
     * 查询路由表冲突列表
     */
    DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse>;
}
