import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeApplicationYamlResponse, RedeployEdgeUnitApplicationResponse, CreateEdgeUnitCloudResponse, ModifyEdgeUnitApplicationBasicInfoRequest, CreateEdgeNodeGroupRequest, CreateEdgeUnitApplicationVisualizationRequest, CreateSecretRequest, DescribeEdgeUnitApplicationYamlRequest, CreateEdgeUnitApplicationVisualizationResponse, CreateEdgeNodeBatchResponse, DescribeNamespacesResponse, DescribeSecretResponse, DescribeSecretYamlErrorResponse, ModifyEdgeUnitDeployGridItemRequest, DescribeEdgeUnitMonitorStatusRequest, GetMarketComponentResponse, CreateApplicationVisualizationRequest, DeleteNodeUnitResponse, DescribeEdgeUnitApplicationsResponse, DescribeNodeUnitTemplateOnNodeGroupResponse, CreateUserTokenRequest, DescribeEdgeUnitGridEventsResponse, ModifyApplicationVisualizationResponse, DescribeEdgeUnitApplicationYamlErrorResponse, DeleteEdgeUnitCloudResponse, ModifyConfigMapRequest, ModifyApplicationBasicInfoResponse, DeleteEdgeUnitDeployGridItemResponse, DescribeApplicationVisualizationRequest, DescribeEdgeSnNodesResponse, DescribeEdgeUnitApplicationsRequest, DescribeEdgeUnitApplicationYamlResponse, DescribeConfigMapYamlErrorResponse, DescribeConfigMapResponse, DescribeApplicationYamlRequest, ModifyApplicationVisualizationRequest, DescribeEdgeUnitNodeUnitTemplatesRequest, DeleteEdgeUnitApplicationsRequest, DeleteApplicationsRequest, DescribeEdgeUnitApplicationPodContainersRequest, DescribeDracoEdgeNodeInstallerResponse, ModifyEdgeUnitCloudApiRequest, DescribeEdgeUnitDeployGridItemRequest, ModifyEdgeUnitRequest, DescribeEdgeUnitCloudResponse, RedeployEdgeUnitApplicationRequest, DescribeEdgeNodeRemarkListRequest, DeleteSecretResponse, DeleteConfigMapResponse, DescribeApplicationsResponse, DeleteConfigMapRequest, DescribeEdgeUnitDeployGridItemResponse, DescribeEdgeUnitExtraRequest, CreateUpdateNodeUnitRequest, CreateConfigMapResponse, DescribeEdgeUnitsCloudRequest, DescribeEdgeDefaultVpcRequest, DescribeSecretsResponse, DescribeEdgeAgentNodeInstallerRequest, DescribeEdgeUnitApplicationYamlErrorRequest, DescribeEdgeNodePodsResponse, DescribeEdgePodResponse, CreateEdgeNodeUnitTemplateResponse, DescribeMonitorMetricsResponse, DescribeConfigMapsResponse, GetMarketComponentListResponse, DescribeEdgeNodePodContainersResponse, CreateNamespaceResponse, DeleteEdgeUnitPodRequest, CreateSecretResponse, DeleteEdgeNodeUnitTemplatesRequest, ModifyEdgeNodeLabelsResponse, DescribeEdgeUnitNodeGroupRequest, DescribeEdgeUnitApplicationPodsRequest, DescribeEdgeUnitApplicationLogsResponse, ModifyEdgeUnitDeployGridItemResponse, CreateEdgeNodeRequest, DescribeEdgeUnitMonitorStatusResponse, DeleteNamespaceResponse, DescribeEdgeUnitExtraResponse, DescribeConfigMapsRequest, DescribeEdgeUnitNodeUnitTemplatesResponse, ModifyEdgeNodeLabelsRequest, CreateEdgeNodeGroupResponse, ModifyNodeUnitTemplateRequest, DescribeEdgeDefaultVpcResponse, DeleteEdgeUnitApplicationsResponse, DescribeEdgeUnitApplicationEventsResponse, DeleteApplicationsResponse, DescribeEdgeUnitDeployGridItemYamlRequest, CreateEdgeNodeBatchRequest, DescribeNamespaceRequest, DescribeNamespaceResponse, DescribeConfigMapRequest, CreateEdgeNodeUnitTemplateRequest, CreateApplicationVisualizationResponse, DescribeEdgeUnitCloudRequest, CreateEdgeUnitApplicationYamlResponse, DescribeSecretYamlErrorRequest, CreateUserTokenResponse, DeleteSecretRequest, DescribeEdgeUnitApplicationPodsResponse, DescribeEdgeUnitApplicationVisualizationRequest, DescribeEdgeNodesResponse, DescribeEdgeUnitGridPodsRequest, CreateEdgeUnitApplicationYamlRequest, DescribeSecretRequest, DescribeEdgeNodesRequest, DescribeEdgeUnitApplicationLogsRequest, DescribeEdgeAgentNodeInstallerResponse, ModifyEdgeUnitApplicationVisualizationRequest, ModifyConfigMapResponse, DescribeEdgeNodePodsRequest, DeleteIotDeviceBatchRequest, GetMarketComponentListRequest, DescribeApplicationVisualizationResponse, DescribeDracoEdgeNodeInstallerRequest, CreateNamespaceRequest, ApplyMarketComponentRequest, DescribeNamespaceResourcesResponse, DescribeEdgeUnitGridEventsRequest, ModifyEdgeDracoNodeRequest, DescribeNodeUnitResponse, DeleteEdgeNodeGroupResponse, ModifyEdgeUnitResponse, DescribeYeheResourceLimitResponse, DescribeEdgeUnitsCloudResponse, CreateConfigMapRequest, DescribeEdgeUnitDeployGridResponse, ModifyEdgeUnitCloudApiResponse, CreateUpdateNodeUnitResponse, ModifyEdgeUnitApplicationVisualizationResponse, DeleteEdgeNodesResponse, DescribeEdgeNodePodContainersRequest, DeleteEdgeNodeGroupRequest, ModifySecretRequest, DeleteEdgeUnitPodResponse, DescribeEdgeUnitApplicationEventsRequest, DescribeNamespacesRequest, DescribeEdgeNodeRemarkListResponse, DescribeEdgeUnitApplicationPodContainersResponse, ModifyApplicationBasicInfoRequest, DescribeEdgeUnitNodeGroupResponse, DescribeEdgeOperationLogsResponse, DescribeEdgeSnNodesRequest, DeleteEdgeUnitDeployGridItemRequest, ModifySecretResponse, DescribeEdgeUnitDeployGridItemYamlResponse, DescribeEdgeUnitApplicationVisualizationResponse, DescribeEdgePodRequest, DescribeNamespaceResourcesRequest, DescribeMonitorMetricsRequest, ModifyNodeUnitTemplateResponse, DescribeApplicationsRequest, DescribeEdgeOperationLogsRequest, DeleteNamespaceRequest, GetMarketComponentRequest, DescribeEdgeUnitDeployGridRequest, ApplyMarketComponentResponse, DescribeApplicationYamlErrorResponse, DeleteIotDeviceBatchResponse, CreateEdgeNodeResponse, DeleteEdgeNodesRequest, DescribeApplicationYamlErrorRequest, DescribeYeheResourceLimitRequest, DescribeSecretsRequest, DescribeNodeUnitTemplateOnNodeGroupRequest, DescribeEdgeNodeRequest, DescribeNodeUnitRequest, DeleteNodeUnitRequest, ModifyEdgeUnitApplicationYamlResponse, DeleteEdgeNodeUnitTemplatesResponse, ModifyEdgeDracoNodeResponse, DescribeEdgeNodeResponse, ModifyEdgeUnitApplicationYamlRequest, DeleteEdgeUnitCloudRequest, CreateEdgeUnitCloudRequest, DescribeEdgeUnitGridPodsResponse, DescribeConfigMapYamlErrorRequest, ModifyEdgeUnitApplicationBasicInfoResponse } from "./iecp_models";
/**
 * iecp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取命名空间
     */
    DescribeNamespace(req: DescribeNamespaceRequest, cb?: (error: string, rep: DescribeNamespaceResponse) => void): Promise<DescribeNamespaceResponse>;
    /**
     * 获取单元可视化配置信息
     */
    DescribeEdgeUnitApplicationVisualization(req: DescribeEdgeUnitApplicationVisualizationRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationVisualizationResponse) => void): Promise<DescribeEdgeUnitApplicationVisualizationResponse>;
    /**
     * 查询边缘单元额外信息
     */
    DescribeEdgeUnitExtra(req: DescribeEdgeUnitExtraRequest, cb?: (error: string, rep: DescribeEdgeUnitExtraResponse) => void): Promise<DescribeEdgeUnitExtraResponse>;
    /**
     * 创建或更新边缘单元NodeUnit
     */
    CreateUpdateNodeUnit(req: CreateUpdateNodeUnitRequest, cb?: (error: string, rep: CreateUpdateNodeUnitResponse) => void): Promise<CreateUpdateNodeUnitResponse>;
    /**
     * 修改边缘单元NodeUnit模板
     */
    ModifyNodeUnitTemplate(req: ModifyNodeUnitTemplateRequest, cb?: (error: string, rep: ModifyNodeUnitTemplateResponse) => void): Promise<ModifyNodeUnitTemplateResponse>;
    /**
     * 创建命名空间
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 修改边缘单元Grid部署应用副本数
     */
    ModifyEdgeUnitDeployGridItem(req: ModifyEdgeUnitDeployGridItemRequest, cb?: (error: string, rep: ModifyEdgeUnitDeployGridItemResponse) => void): Promise<ModifyEdgeUnitDeployGridItemResponse>;
    /**
     * 获取Secrets列表
     */
    DescribeSecrets(req: DescribeSecretsRequest, cb?: (error: string, rep: DescribeSecretsResponse) => void): Promise<DescribeSecretsResponse>;
    /**
     * 查询指定Grid下应用的Yaml
     */
    DescribeEdgeUnitDeployGridItemYaml(req: DescribeEdgeUnitDeployGridItemYamlRequest, cb?: (error: string, rep: DescribeEdgeUnitDeployGridItemYamlResponse) => void): Promise<DescribeEdgeUnitDeployGridItemYamlResponse>;
    /**
     * yaml方式创建应用
     */
    CreateEdgeUnitApplicationYaml(req: CreateEdgeUnitApplicationYamlRequest, cb?: (error: string, rep: CreateEdgeUnitApplicationYamlResponse) => void): Promise<CreateEdgeUnitApplicationYamlResponse>;
    /**
     * 修改ConfigMap
     */
    ModifyConfigMap(req: ModifyConfigMapRequest, cb?: (error: string, rep: ModifyConfigMapResponse) => void): Promise<ModifyConfigMapResponse>;
    /**
     * 获取应用事件列表
     */
    DescribeEdgeUnitApplicationEvents(req: DescribeEdgeUnitApplicationEventsRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationEventsResponse) => void): Promise<DescribeEdgeUnitApplicationEventsResponse>;
    /**
     * 获取组件市场组件列表
     */
    GetMarketComponentList(req: GetMarketComponentListRequest, cb?: (error: string, rep: GetMarketComponentListResponse) => void): Promise<GetMarketComponentListResponse>;
    /**
     * 删除ConfigMap
     */
    DeleteConfigMap(req: DeleteConfigMapRequest, cb?: (error: string, rep: DeleteConfigMapResponse) => void): Promise<DeleteConfigMapResponse>;
    /**
     * 创建边缘单元NodeUnit模板
     */
    CreateEdgeNodeUnitTemplate(req: CreateEdgeNodeUnitTemplateRequest, cb?: (error: string, rep: CreateEdgeNodeUnitTemplateResponse) => void): Promise<CreateEdgeNodeUnitTemplateResponse>;
    /**
     * 查询指定NodeGroup下NodeUnit模板列表
     */
    DescribeNodeUnitTemplateOnNodeGroup(req: DescribeNodeUnitTemplateOnNodeGroupRequest, cb?: (error: string, rep: DescribeNodeUnitTemplateOnNodeGroupResponse) => void): Promise<DescribeNodeUnitTemplateOnNodeGroupResponse>;
    /**
     * 编辑draco设备信息
     */
    ModifyEdgeDracoNode(req: ModifyEdgeDracoNodeRequest, cb?: (error: string, rep: ModifyEdgeDracoNodeResponse) => void): Promise<ModifyEdgeDracoNodeResponse>;
    /**
     * 获取单元下应用列表
     */
    DescribeEdgeUnitApplications(req: DescribeEdgeUnitApplicationsRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationsResponse) => void): Promise<DescribeEdgeUnitApplicationsResponse>;
    /**
     * 查询边缘节点列表
     */
    DescribeEdgeNodes(req: DescribeEdgeNodesRequest, cb?: (error: string, rep: DescribeEdgeNodesResponse) => void): Promise<DescribeEdgeNodesResponse>;
    /**
     * 获取应用模板列表
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 删除指定pod
     */
    DeleteEdgeUnitPod(req: DeleteEdgeUnitPodRequest, cb?: (error: string, rep: DeleteEdgeUnitPodResponse) => void): Promise<DeleteEdgeUnitPodResponse>;
    /**
     * 查询边缘单元Grid事件列表
     */
    DescribeEdgeUnitGridEvents(req: DescribeEdgeUnitGridEventsRequest, cb?: (error: string, rep: DescribeEdgeUnitGridEventsResponse) => void): Promise<DescribeEdgeUnitGridEventsResponse>;
    /**
     * 查询边缘集群监控状态
     */
    DescribeEdgeUnitMonitorStatus(req: DescribeEdgeUnitMonitorStatusRequest, cb?: (error: string, rep: DescribeEdgeUnitMonitorStatusResponse) => void): Promise<DescribeEdgeUnitMonitorStatusResponse>;
    /**
     * 删除边缘单元NodeGroup
     */
    DeleteEdgeNodeGroup(req: DeleteEdgeNodeGroupRequest, cb?: (error: string, rep: DeleteEdgeNodeGroupResponse) => void): Promise<DeleteEdgeNodeGroupResponse>;
    /**
     * 获取节点安装信息
     */
    DescribeEdgeAgentNodeInstaller(req: DescribeEdgeAgentNodeInstallerRequest, cb?: (error: string, rep: DescribeEdgeAgentNodeInstallerResponse) => void): Promise<DescribeEdgeAgentNodeInstallerResponse>;
    /**
     * 批量删除设备
     */
    DeleteIotDeviceBatch(req: DeleteIotDeviceBatchRequest, cb?: (error: string, rep: DeleteIotDeviceBatchResponse) => void): Promise<DeleteIotDeviceBatchResponse>;
    /**
     * 单元应用重部署
     */
    RedeployEdgeUnitApplication(req: RedeployEdgeUnitApplicationRequest, cb?: (error: string, rep: RedeployEdgeUnitApplicationResponse) => void): Promise<RedeployEdgeUnitApplicationResponse>;
    /**
     * 修改边缘集群
     */
    ModifyEdgeUnit(req: ModifyEdgeUnitRequest, cb?: (error: string, rep: ModifyEdgeUnitResponse) => void): Promise<ModifyEdgeUnitResponse>;
    /**
     * 获取节点备注信息列表
     */
    DescribeEdgeNodeRemarkList(req: DescribeEdgeNodeRemarkListRequest, cb?: (error: string, rep: DescribeEdgeNodeRemarkListResponse) => void): Promise<DescribeEdgeNodeRemarkListResponse>;
    /**
     * 创建边缘节点
     */
    CreateEdgeNode(req: CreateEdgeNodeRequest, cb?: (error: string, rep: CreateEdgeNodeResponse) => void): Promise<CreateEdgeNodeResponse>;
    /**
     * 删除边缘单元NodeUnit模板
     */
    DeleteEdgeNodeUnitTemplates(req: DeleteEdgeNodeUnitTemplatesRequest, cb?: (error: string, rep: DeleteEdgeNodeUnitTemplatesResponse) => void): Promise<DeleteEdgeNodeUnitTemplatesResponse>;
    /**
     * 重新部署边缘单元指定Grid下应用
     */
    DeleteEdgeUnitDeployGridItem(req: DeleteEdgeUnitDeployGridItemRequest, cb?: (error: string, rep: DeleteEdgeUnitDeployGridItemResponse) => void): Promise<DeleteEdgeUnitDeployGridItemResponse>;
    /**
     * 获取应用的Yaml配置
     */
    DescribeEdgeUnitApplicationYaml(req: DescribeEdgeUnitApplicationYamlRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationYamlResponse) => void): Promise<DescribeEdgeUnitApplicationYamlResponse>;
    /**
     * 可视化修改应用配置
     */
    ModifyEdgeUnitApplicationVisualization(req: ModifyEdgeUnitApplicationVisualizationRequest, cb?: (error: string, rep: ModifyEdgeUnitApplicationVisualizationResponse) => void): Promise<ModifyEdgeUnitApplicationVisualizationResponse>;
    /**
     * 删除应用模板
     */
    DeleteApplications(req: DeleteApplicationsRequest, cb?: (error: string, rep: DeleteApplicationsResponse) => void): Promise<DeleteApplicationsResponse>;
    /**
     * 修改应用模板配置
     */
    ModifyApplicationVisualization(req: ModifyApplicationVisualizationRequest, cb?: (error: string, rep: ModifyApplicationVisualizationResponse) => void): Promise<ModifyApplicationVisualizationResponse>;
    /**
     * 查询边缘单元Grid的Pod列表
     */
    DescribeEdgeUnitGridPods(req: DescribeEdgeUnitGridPodsRequest, cb?: (error: string, rep: DescribeEdgeUnitGridPodsResponse) => void): Promise<DescribeEdgeUnitGridPodsResponse>;
    /**
     * 获取边缘集群默认VPC信息
     */
    DescribeEdgeDefaultVpc(req?: DescribeEdgeDefaultVpcRequest, cb?: (error: string, rep: DescribeEdgeDefaultVpcResponse) => void): Promise<DescribeEdgeDefaultVpcResponse>;
    /**
     * 查询节点Pod列表
     */
    DescribeEdgeNodePods(req: DescribeEdgeNodePodsRequest, cb?: (error: string, rep: DescribeEdgeNodePodsResponse) => void): Promise<DescribeEdgeNodePodsResponse>;
    /**
     * 查询边缘单元NodeUnit列表
     */
    DescribeNodeUnit(req: DescribeNodeUnitRequest, cb?: (error: string, rep: DescribeNodeUnitResponse) => void): Promise<DescribeNodeUnitResponse>;
    /**
     * 检查单元应用的Yaml配置
     */
    DescribeEdgeUnitApplicationYamlError(req: DescribeEdgeUnitApplicationYamlErrorRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationYamlErrorResponse) => void): Promise<DescribeEdgeUnitApplicationYamlErrorResponse>;
    /**
     * 修改Secret
     */
    ModifySecret(req: ModifySecretRequest, cb?: (error: string, rep: ModifySecretResponse) => void): Promise<ModifySecretResponse>;
    /**
     * 获取Secret详情
     */
    DescribeSecret(req: DescribeSecretRequest, cb?: (error: string, rep: DescribeSecretResponse) => void): Promise<DescribeSecretResponse>;
    /**
     * 获取命名空间下的资源信息
     */
    DescribeNamespaceResources(req: DescribeNamespaceResourcesRequest, cb?: (error: string, rep: DescribeNamespaceResourcesResponse) => void): Promise<DescribeNamespaceResourcesResponse>;
    /**
     * 校验ConfigMap的Yaml语法
     */
    DescribeConfigMapYamlError(req: DescribeConfigMapYamlErrorRequest, cb?: (error: string, rep: DescribeConfigMapYamlErrorResponse) => void): Promise<DescribeConfigMapYamlErrorResponse>;
    /**
     * 创建边缘单元NodeGroup
     */
    CreateEdgeNodeGroup(req: CreateEdgeNodeGroupRequest, cb?: (error: string, rep: CreateEdgeNodeGroupResponse) => void): Promise<CreateEdgeNodeGroupResponse>;
    /**
     * 删除边缘单元NodeUnit
     */
    DeleteNodeUnit(req: DeleteNodeUnitRequest, cb?: (error: string, rep: DeleteNodeUnitResponse) => void): Promise<DeleteNodeUnitResponse>;
    /**
     * 获取应用日志
     */
    DescribeEdgeUnitApplicationLogs(req: DescribeEdgeUnitApplicationLogsRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationLogsResponse) => void): Promise<DescribeEdgeUnitApplicationLogsResponse>;
    /**
     * 获取边缘节点信息
     */
    DescribeEdgeNode(req: DescribeEdgeNodeRequest, cb?: (error: string, rep: DescribeEdgeNodeResponse) => void): Promise<DescribeEdgeNodeResponse>;
    /**
     * 检查应用模板的Yaml配置
     */
    DescribeApplicationYamlError(req: DescribeApplicationYamlErrorRequest, cb?: (error: string, rep: DescribeApplicationYamlErrorResponse) => void): Promise<DescribeApplicationYamlErrorResponse>;
    /**
     * 创建token
     */
    CreateUserToken(req: CreateUserTokenRequest, cb?: (error: string, rep: CreateUserTokenResponse) => void): Promise<CreateUserTokenResponse>;
    /**
     * 查询边缘单元列表
     */
    DescribeEdgeUnitsCloud(req: DescribeEdgeUnitsCloudRequest, cb?: (error: string, rep: DescribeEdgeUnitsCloudResponse) => void): Promise<DescribeEdgeUnitsCloudResponse>;
    /**
     * 创建边缘单元
     */
    CreateEdgeUnitCloud(req: CreateEdgeUnitCloudRequest, cb?: (error: string, rep: CreateEdgeUnitCloudResponse) => void): Promise<CreateEdgeUnitCloudResponse>;
    /**
     * 可视化创建应用
     */
    CreateEdgeUnitApplicationVisualization(req: CreateEdgeUnitApplicationVisualizationRequest, cb?: (error: string, rep: CreateEdgeUnitApplicationVisualizationResponse) => void): Promise<CreateEdgeUnitApplicationVisualizationResponse>;
    /**
     * 查询边缘集群NodeGroup
     */
    DescribeEdgeUnitNodeGroup(req: DescribeEdgeUnitNodeGroupRequest, cb?: (error: string, rep: DescribeEdgeUnitNodeGroupResponse) => void): Promise<DescribeEdgeUnitNodeGroupResponse>;
    /**
     * 从组件市场选中组件并添加到应用模板列表
     */
    ApplyMarketComponent(req: ApplyMarketComponentRequest, cb?: (error: string, rep: ApplyMarketComponentResponse) => void): Promise<ApplyMarketComponentResponse>;
    /**
     * 获取应用模板可视化配置信息
     */
    DescribeApplicationVisualization(req: DescribeApplicationVisualizationRequest, cb?: (error: string, rep: DescribeApplicationVisualizationResponse) => void): Promise<DescribeApplicationVisualizationResponse>;
    /**
     * 查询边缘单元EdgeUnit模板列表
     */
    DescribeEdgeUnitNodeUnitTemplates(req: DescribeEdgeUnitNodeUnitTemplatesRequest, cb?: (error: string, rep: DescribeEdgeUnitNodeUnitTemplatesResponse) => void): Promise<DescribeEdgeUnitNodeUnitTemplatesResponse>;
    /**
     * 获取组件市场的组件信息
     */
    GetMarketComponent(req: GetMarketComponentRequest, cb?: (error: string, rep: GetMarketComponentResponse) => void): Promise<GetMarketComponentResponse>;
    /**
     * 获取命名空间列表信息
     */
    DescribeNamespaces(req: DescribeNamespacesRequest, cb?: (error: string, rep: DescribeNamespacesResponse) => void): Promise<DescribeNamespacesResponse>;
    /**
     * 查询边缘操作日志
     */
    DescribeEdgeOperationLogs(req: DescribeEdgeOperationLogsRequest, cb?: (error: string, rep: DescribeEdgeOperationLogsResponse) => void): Promise<DescribeEdgeOperationLogsResponse>;
    /**
     * 创建Secret
     */
    CreateSecret(req: CreateSecretRequest, cb?: (error: string, rep: CreateSecretResponse) => void): Promise<CreateSecretResponse>;
    /**
     * 查询边缘单元Pod
     */
    DescribeEdgePod(req: DescribeEdgePodRequest, cb?: (error: string, rep: DescribeEdgePodResponse) => void): Promise<DescribeEdgePodResponse>;
    /**
     * 获取应用下Pod状态
     */
    DescribeEdgeUnitApplicationPods(req: DescribeEdgeUnitApplicationPodsRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationPodsResponse) => void): Promise<DescribeEdgeUnitApplicationPodsResponse>;
    /**
     * 删除应用列表
     */
    DeleteEdgeUnitApplications(req: DeleteEdgeUnitApplicationsRequest, cb?: (error: string, rep: DeleteEdgeUnitApplicationsResponse) => void): Promise<DeleteEdgeUnitApplicationsResponse>;
    /**
     * 查询边缘单元Grid列表
     */
    DescribeEdgeUnitDeployGrid(req: DescribeEdgeUnitDeployGridRequest, cb?: (error: string, rep: DescribeEdgeUnitDeployGridResponse) => void): Promise<DescribeEdgeUnitDeployGridResponse>;
    /**
     * 删除Secret
     */
    DeleteSecret(req: DeleteSecretRequest, cb?: (error: string, rep: DeleteSecretResponse) => void): Promise<DeleteSecretResponse>;
    /**
     * 批量删除边缘节点
     */
    DeleteEdgeNodes(req: DeleteEdgeNodesRequest, cb?: (error: string, rep: DeleteEdgeNodesResponse) => void): Promise<DeleteEdgeNodesResponse>;
    /**
     * 自动获取Draco设备的安装包
     */
    DescribeDracoEdgeNodeInstaller(req: DescribeDracoEdgeNodeInstallerRequest, cb?: (error: string, rep: DescribeDracoEdgeNodeInstallerResponse) => void): Promise<DescribeDracoEdgeNodeInstallerResponse>;
    /**
     * 创建ConfigMap
     */
    CreateConfigMap(req: CreateConfigMapRequest, cb?: (error: string, rep: CreateConfigMapResponse) => void): Promise<CreateConfigMapResponse>;
    /**
     * 查询边缘集群详情
     */
    DescribeEdgeUnitCloud(req: DescribeEdgeUnitCloudRequest, cb?: (error: string, rep: DescribeEdgeUnitCloudResponse) => void): Promise<DescribeEdgeUnitCloudResponse>;
    /**
     * 删除命名空间
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 编辑边缘节点标签
     */
    ModifyEdgeNodeLabels(req: ModifyEdgeNodeLabelsRequest, cb?: (error: string, rep: ModifyEdgeNodeLabelsResponse) => void): Promise<ModifyEdgeNodeLabelsResponse>;
    /**
     * 查询边缘单元监控数据
     */
    DescribeMonitorMetrics(req: DescribeMonitorMetricsRequest, cb?: (error: string, rep: DescribeMonitorMetricsResponse) => void): Promise<DescribeMonitorMetricsResponse>;
    /**
     * 获取ConfigMap列表
     */
    DescribeConfigMaps(req: DescribeConfigMapsRequest, cb?: (error: string, rep: DescribeConfigMapsResponse) => void): Promise<DescribeConfigMapsResponse>;
    /**
     * 校验Secret的Yaml语法
     */
    DescribeSecretYamlError(req: DescribeSecretYamlErrorRequest, cb?: (error: string, rep: DescribeSecretYamlErrorResponse) => void): Promise<DescribeSecretYamlErrorResponse>;
    /**
     * 更新边缘单元信息
     */
    ModifyEdgeUnitCloudApi(req: ModifyEdgeUnitCloudApiRequest, cb?: (error: string, rep: ModifyEdgeUnitCloudApiResponse) => void): Promise<ModifyEdgeUnitCloudApiResponse>;
    /**
     * 修改应用模板基本信息
     */
    ModifyApplicationBasicInfo(req: ModifyApplicationBasicInfoRequest, cb?: (error: string, rep: ModifyApplicationBasicInfoResponse) => void): Promise<ModifyApplicationBasicInfoResponse>;
    /**
     * 查询边缘单元指定Grid下的部署应用列表
     */
    DescribeEdgeUnitDeployGridItem(req: DescribeEdgeUnitDeployGridItemRequest, cb?: (error: string, rep: DescribeEdgeUnitDeployGridItemResponse) => void): Promise<DescribeEdgeUnitDeployGridItemResponse>;
    /**
     * 查询应用模板Yaml
     */
    DescribeApplicationYaml(req: DescribeApplicationYamlRequest, cb?: (error: string, rep: DescribeApplicationYamlResponse) => void): Promise<DescribeApplicationYamlResponse>;
    /**
     * 修改单元应用基本信息
     */
    ModifyEdgeUnitApplicationBasicInfo(req: ModifyEdgeUnitApplicationBasicInfoRequest, cb?: (error: string, rep: ModifyEdgeUnitApplicationBasicInfoResponse) => void): Promise<ModifyEdgeUnitApplicationBasicInfoResponse>;
    /**
     * 创建可视化创建应用模板
     */
    CreateApplicationVisualization(req: CreateApplicationVisualizationRequest, cb?: (error: string, rep: CreateApplicationVisualizationResponse) => void): Promise<CreateApplicationVisualizationResponse>;
    /**
     * 获取ConfigMap详情
     */
    DescribeConfigMap(req: DescribeConfigMapRequest, cb?: (error: string, rep: DescribeConfigMapResponse) => void): Promise<DescribeConfigMapResponse>;
    /**
     * 查询节点Pod内的容器列表
     */
    DescribeEdgeNodePodContainers(req: DescribeEdgeNodePodContainersRequest, cb?: (error: string, rep: DescribeEdgeNodePodContainersResponse) => void): Promise<DescribeEdgeNodePodContainersResponse>;
    /**
     * 获取应用容器状态
     */
    DescribeEdgeUnitApplicationPodContainers(req: DescribeEdgeUnitApplicationPodContainersRequest, cb?: (error: string, rep: DescribeEdgeUnitApplicationPodContainersResponse) => void): Promise<DescribeEdgeUnitApplicationPodContainersResponse>;
    /**
     * 批量预注册节点
     */
    CreateEdgeNodeBatch(req: CreateEdgeNodeBatchRequest, cb?: (error: string, rep: CreateEdgeNodeBatchResponse) => void): Promise<CreateEdgeNodeBatchResponse>;
    /**
     * 查询用户的资源限制
     */
    DescribeYeheResourceLimit(req?: DescribeYeheResourceLimitRequest, cb?: (error: string, rep: DescribeYeheResourceLimitResponse) => void): Promise<DescribeYeheResourceLimitResponse>;
    /**
     * Yaml方式修改应用配置
     */
    ModifyEdgeUnitApplicationYaml(req: ModifyEdgeUnitApplicationYamlRequest, cb?: (error: string, rep: ModifyEdgeUnitApplicationYamlResponse) => void): Promise<ModifyEdgeUnitApplicationYamlResponse>;
    /**
     * 删除边缘单元
     */
    DeleteEdgeUnitCloud(req: DeleteEdgeUnitCloudRequest, cb?: (error: string, rep: DeleteEdgeUnitCloudResponse) => void): Promise<DeleteEdgeUnitCloudResponse>;
    /**
     * 查询预注册节点列表
     */
    DescribeEdgeSnNodes(req: DescribeEdgeSnNodesRequest, cb?: (error: string, rep: DescribeEdgeSnNodesResponse) => void): Promise<DescribeEdgeSnNodesResponse>;
}
