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
  OperationLogsCondition,
  RedeployEdgeUnitApplicationResponse,
  CreateEdgeUnitCloudResponse,
  ModifyEdgeUnitApplicationBasicInfoRequest,
  CreateEdgeNodeGroupRequest,
  DescribeNodeUnitTemplateOnNodeGroupResponse,
  GridPodInfo,
  CreateSecretRequest,
  CreateEdgeNodeBatchResponse,
  DescribeNamespacesResponse,
  NodeUnitTemplate,
  ModifyEdgeUnitDeployGridItemRequest,
  NodeGroupNodeUnitTemplateInfo,
  DescribeEdgeUnitMonitorStatusRequest,
  GetMarketComponentResponse,
  NodeUnitNodeInfo,
  DeleteNodeUnitResponse,
  VolumeNFS,
  Service,
  DescribeEdgeUnitApplicationsResponse,
  ApplicationStatusInfo,
  DescribeEdgeUnitGridEventsResponse,
  IotDevicesInfo,
  DeleteEdgeUnitCloudResponse,
  ModifyConfigMapRequest,
  ApplicationBasicConfig,
  VolumeMount,
  DeleteEdgeUnitDeployGridItemResponse,
  DescribeEdgeSnNodesResponse,
  DescribeEdgeUnitApplicationsRequest,
  EdgeDracoNodeInfo,
  DescribeConfigMapYamlErrorResponse,
  DescribeConfigMapResponse,
  ModifyEdgeUnitApplicationYamlResponse,
  DescribeEdgeUnitNodeUnitTemplatesRequest,
  DescribeSecretYamlErrorResponse,
  VolumeConfigMapKeyToPath,
  DescribeDracoEdgeNodeInstallerResponse,
  ModifyEdgeUnitCloudApiRequest,
  DescribeEdgeUnitDeployGridItemRequest,
  ModifyEdgeUnitRequest,
  RedeployEdgeUnitApplicationRequest,
  DescribeEdgeNodeRemarkListRequest,
  DeleteSecretResponse,
  DeleteConfigMapResponse,
  DeleteConfigMapRequest,
  DescribeEdgeUnitDeployGridItemResponse,
  CreateMessageRouteRequest,
  DescribeEdgeUnitExtraRequest,
  CreateUpdateNodeUnitRequest,
  DescribeIotDeviceRequest,
  CreateConfigMapResponse,
  DescribeEdgeUnitsCloudRequest,
  ApplicationBasicInfo,
  DescribeEdgeDefaultVpcRequest,
  DescribeSecretsResponse,
  DeleteEdgeNodeGroupRequest,
  EnvValueSelector,
  DescribeEdgeNodePodsResponse,
  DescribeEdgePodResponse,
  CreateEdgeNodeUnitTemplateResponse,
  DescribeMonitorMetricsResponse,
  Env,
  DescribeConfigMapsResponse,
  NodeGroupInfo,
  OperationLog,
  GetMarketComponentListResponse,
  DescribeEdgeNodePodContainersResponse,
  CreateNamespaceResponse,
  DeleteEdgeUnitDevicesRequest,
  CronJob,
  DeleteEdgeUnitPodRequest,
  CreateIotDeviceRequest,
  CreateSecretResponse,
  DeleteEdgeNodeUnitTemplatesRequest,
  ModifyEdgeNodeLabelsResponse,
  DescribeEdgeUnitNodeGroupRequest,
  Job,
  ModifyEdgeUnitDeployGridItemResponse,
  CreateEdgeNodeRequest,
  BuildMessageRouteResponse,
  DescribeEdgeUnitMonitorStatusResponse,
  DeleteNamespaceResponse,
  SecurityCapabilities,
  DescribeConfigMapsRequest,
  GridDetail,
  ModifyIotDeviceResponse,
  ModifyEdgeNodeLabelsRequest,
  DeleteEdgeUnitDevicesResponse,
  CreateEdgeNodeGroupResponse,
  EdgeNodePodInfo,
  RouteInfo,
  DescribeEdgeDefaultVpcResponse,
  HttpHeader,
  DeleteEdgeNodesResponse,
  DracoNodeInfo,
  NodeUnitInfo,
  DockerConfig,
  DescribeEdgeUnitDeployGridItemYamlRequest,
  CreateEdgeNodeBatchRequest,
  DescribeNamespaceRequest,
  DescribeNamespaceResponse,
  MarketComponentInfo,
  DescribeConfigMapRequest,
  ConfigMapBasicInfo,
  NodeSimpleInfo,
  CreateEdgeNodeUnitTemplateRequest,
  GridInfo,
  DescribeSecretResponse,
  DescribeSecretYamlErrorRequest,
  DescribeMessageRouteListResponse,
  FieldSort,
  EdgeCloudCluster,
  CreateUserTokenResponse,
  DeleteSecretRequest,
  TcpProbe,
  DescribeEdgeNodesResponse,
  ModifyIotDeviceRequest,
  DescribeEdgeUnitGridPodsRequest,
  VolumeConfigMap,
  DeleteEdgeUnitDevicesDevice,
  DeleteIotDeviceResponse,
  ModifyNodeUnitTemplateRequest,
  DescribeEdgeNodesRequest,
  CreateUserTokenRequest,
  DescribeEdgeAgentNodeInstallerResponse,
  ModifyEdgeUnitApplicationVisualizationRequest,
  ModifyConfigMapResponse,
  SetRouteOnOffRequest,
  DescribeEdgeNodePodsRequest,
  DeleteIotDeviceBatchRequest,
  DescribeEdgeAgentNodeInstallerRequest,
  GetMarketComponentListRequest,
  DescribeDracoEdgeNodeInstallerRequest,
  CreateNamespaceRequest,
  VolumeHostPath,
  DeleteMessageRouteRequest,
  DescribeEdgeOperationLogsRequest,
  ModifyEdgeDracoNodeRequest,
  DescribeNamespaceResourcesResponse,
  DescribeEdgeUnitGridEventsRequest,
  CreateEdgeUnitDevicesResponse,
  SecretItem,
  CreateMessageRouteResponse,
  DescribeNodeUnitResponse,
  DeleteEdgeNodeGroupResponse,
  DescribeMessageRouteListRequest,
  KeyValueObj,
  Label,
  ModifyEdgeUnitResponse,
  DescribeYeheResourceLimitResponse,
  DescribeEdgeUnitsCloudResponse,
  DescribeIotDevicesRequest,
  CreateConfigMapRequest,
  DescribeEdgeUnitDeployGridResponse,
  CreateUpdateNodeUnitResponse,
  ModifyEdgeUnitApplicationVisualizationResponse,
  MonitorMetricsColumn,
  EdgeNodePodContainerInfo,
  BuildMessageRouteRequest,
  GridEventInfo,
  ResourceMetricTarget,
  DescribeEdgeNodePodContainersRequest,
  DescribeSecretRequest,
  ModifySecretRequest,
  DeleteEdgeUnitPodResponse,
  Probe,
  Container,
  DescribeNamespacesRequest,
  DeleteIotDeviceRequest,
  DescribeEdgeNodeRemarkListResponse,
  HorizontalPodAutoscaler,
  NamespaceResource,
  EdgeNodeInstallerOnline,
  ModifyEdgeUnitCloudApiResponse,
  DescribeEdgeUnitNodeGroupResponse,
  DescribeEdgeOperationLogsResponse,
  DescribeEdgeSnNodesRequest,
  DeleteEdgeUnitDeployGridItemRequest,
  SecurityContext,
  ApplicationDeployMode,
  CreateIotDeviceResponse,
  CreateEdgeUnitDevicesRequest,
  ModifySecretResponse,
  Sort,
  DescribeEdgeUnitDeployGridItemYamlResponse,
  DescribeIotDeviceResponse,
  DescribeEdgePodRequest,
  DescribeNamespaceResourcesRequest,
  DescribeMonitorMetricsRequest,
  ModifyNodeUnitTemplateResponse,
  Volume,
  GridItemInfo,
  SetRouteOnOffResponse,
  EdgeNodeLabel,
  DeleteNamespaceRequest,
  EdgeNodeInfo,
  GetMarketComponentRequest,
  HttpProbe,
  DeleteMessageRouteResponse,
  DescribeEdgeUnitDeployGridRequest,
  DescribeEdgeUnitExtraResponse,
  DescribeEdgeUnitNodeUnitTemplatesResponse,
  DeleteIotDeviceBatchResponse,
  CreateEdgeNodeResponse,
  DeleteEdgeNodesRequest,
  NamespaceInfo,
  PortConfig,
  DescribeYeheResourceLimitRequest,
  DescribeIotDevicesResponse,
  DescribeSecretsRequest,
  DescribeNodeUnitTemplateOnNodeGroupRequest,
  DescribeEdgeNodeRequest,
  DescribeNodeUnitRequest,
  DeleteNodeUnitRequest,
  EdgeNodeResourceInfo,
  DeleteEdgeNodeUnitTemplatesResponse,
  ModifyEdgeDracoNodeResponse,
  DescribeEdgeNodeResponse,
  ModifyEdgeUnitApplicationYamlRequest,
  DeleteEdgeUnitCloudRequest,
  CreateEdgeUnitCloudRequest,
  DescribeEdgeUnitGridPodsResponse,
  DescribeConfigMapYamlErrorRequest,
  ModifyEdgeUnitApplicationBasicInfoResponse,
} from "./iecp_models"

/**
 * iecp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iecp.tencentcloudapi.com", "2021-09-14", clientConfig)
  }

  /**
   * 查询边缘集群监控状态
   */
  async DescribeEdgeUnitMonitorStatus(
    req: DescribeEdgeUnitMonitorStatusRequest,
    cb?: (error: string, rep: DescribeEdgeUnitMonitorStatusResponse) => void
  ): Promise<DescribeEdgeUnitMonitorStatusResponse> {
    return this.request("DescribeEdgeUnitMonitorStatus", req, cb)
  }

  /**
   * 删除边缘单元NodeGroup
   */
  async DeleteEdgeNodeGroup(
    req: DeleteEdgeNodeGroupRequest,
    cb?: (error: string, rep: DeleteEdgeNodeGroupResponse) => void
  ): Promise<DeleteEdgeNodeGroupResponse> {
    return this.request("DeleteEdgeNodeGroup", req, cb)
  }

  /**
   * 创建子设备
   */
  async CreateIotDevice(
    req: CreateIotDeviceRequest,
    cb?: (error: string, rep: CreateIotDeviceResponse) => void
  ): Promise<CreateIotDeviceResponse> {
    return this.request("CreateIotDevice", req, cb)
  }

  /**
   * 删除设备
   */
  async DeleteIotDevice(
    req: DeleteIotDeviceRequest,
    cb?: (error: string, rep: DeleteIotDeviceResponse) => void
  ): Promise<DeleteIotDeviceResponse> {
    return this.request("DeleteIotDevice", req, cb)
  }

  /**
   * 获取节点安装信息
   */
  async DescribeEdgeAgentNodeInstaller(
    req: DescribeEdgeAgentNodeInstallerRequest,
    cb?: (error: string, rep: DescribeEdgeAgentNodeInstallerResponse) => void
  ): Promise<DescribeEdgeAgentNodeInstallerResponse> {
    return this.request("DescribeEdgeAgentNodeInstaller", req, cb)
  }

  /**
   * 查询边缘单元额外信息
   */
  async DescribeEdgeUnitExtra(
    req: DescribeEdgeUnitExtraRequest,
    cb?: (error: string, rep: DescribeEdgeUnitExtraResponse) => void
  ): Promise<DescribeEdgeUnitExtraResponse> {
    return this.request("DescribeEdgeUnitExtra", req, cb)
  }

  /**
   * 获取命名空间下的资源信息
   */
  async DescribeNamespaceResources(
    req: DescribeNamespaceResourcesRequest,
    cb?: (error: string, rep: DescribeNamespaceResourcesResponse) => void
  ): Promise<DescribeNamespaceResourcesResponse> {
    return this.request("DescribeNamespaceResources", req, cb)
  }

  /**
   * 创建token
   */
  async CreateUserToken(
    req: CreateUserTokenRequest,
    cb?: (error: string, rep: CreateUserTokenResponse) => void
  ): Promise<CreateUserTokenResponse> {
    return this.request("CreateUserToken", req, cb)
  }

  /**
   * 批量删除边缘节点
   */
  async DeleteEdgeNodes(
    req: DeleteEdgeNodesRequest,
    cb?: (error: string, rep: DeleteEdgeNodesResponse) => void
  ): Promise<DeleteEdgeNodesResponse> {
    return this.request("DeleteEdgeNodes", req, cb)
  }

  /**
   * 创建或更新边缘单元NodeUnit
   */
  async CreateUpdateNodeUnit(
    req: CreateUpdateNodeUnitRequest,
    cb?: (error: string, rep: CreateUpdateNodeUnitResponse) => void
  ): Promise<CreateUpdateNodeUnitResponse> {
    return this.request("CreateUpdateNodeUnit", req, cb)
  }

  /**
   * 修改边缘单元NodeUnit模板
   */
  async ModifyNodeUnitTemplate(
    req: ModifyNodeUnitTemplateRequest,
    cb?: (error: string, rep: ModifyNodeUnitTemplateResponse) => void
  ): Promise<ModifyNodeUnitTemplateResponse> {
    return this.request("ModifyNodeUnitTemplate", req, cb)
  }

  /**
   * 查询边缘单元EdgeUnit模板列表
   */
  async DescribeEdgeUnitNodeUnitTemplates(
    req: DescribeEdgeUnitNodeUnitTemplatesRequest,
    cb?: (error: string, rep: DescribeEdgeUnitNodeUnitTemplatesResponse) => void
  ): Promise<DescribeEdgeUnitNodeUnitTemplatesResponse> {
    return this.request("DescribeEdgeUnitNodeUnitTemplates", req, cb)
  }

  /**
   * 创建命名空间
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
  }

  /**
   * 自动获取Draco设备的安装包
   */
  async DescribeDracoEdgeNodeInstaller(
    req: DescribeDracoEdgeNodeInstallerRequest,
    cb?: (error: string, rep: DescribeDracoEdgeNodeInstallerResponse) => void
  ): Promise<DescribeDracoEdgeNodeInstallerResponse> {
    return this.request("DescribeDracoEdgeNodeInstaller", req, cb)
  }

  /**
   * 单元应用重部署
   */
  async RedeployEdgeUnitApplication(
    req: RedeployEdgeUnitApplicationRequest,
    cb?: (error: string, rep: RedeployEdgeUnitApplicationResponse) => void
  ): Promise<RedeployEdgeUnitApplicationResponse> {
    return this.request("RedeployEdgeUnitApplication", req, cb)
  }

  /**
   * 获取边缘节点信息
   */
  async DescribeEdgeNode(
    req: DescribeEdgeNodeRequest,
    cb?: (error: string, rep: DescribeEdgeNodeResponse) => void
  ): Promise<DescribeEdgeNodeResponse> {
    return this.request("DescribeEdgeNode", req, cb)
  }

  /**
   * 获取节点备注信息列表
   */
  async DescribeEdgeNodeRemarkList(
    req: DescribeEdgeNodeRemarkListRequest,
    cb?: (error: string, rep: DescribeEdgeNodeRemarkListResponse) => void
  ): Promise<DescribeEdgeNodeRemarkListResponse> {
    return this.request("DescribeEdgeNodeRemarkList", req, cb)
  }

  /**
   * 创建边缘单元
   */
  async CreateEdgeUnitCloud(
    req: CreateEdgeUnitCloudRequest,
    cb?: (error: string, rep: CreateEdgeUnitCloudResponse) => void
  ): Promise<CreateEdgeUnitCloudResponse> {
    return this.request("CreateEdgeUnitCloud", req, cb)
  }

  /**
   * 查询边缘单元监控数据
   */
  async DescribeMonitorMetrics(
    req: DescribeMonitorMetricsRequest,
    cb?: (error: string, rep: DescribeMonitorMetricsResponse) => void
  ): Promise<DescribeMonitorMetricsResponse> {
    return this.request("DescribeMonitorMetrics", req, cb)
  }

  /**
   * 删除命名空间
   */
  async DeleteNamespace(
    req: DeleteNamespaceRequest,
    cb?: (error: string, rep: DeleteNamespaceResponse) => void
  ): Promise<DeleteNamespaceResponse> {
    return this.request("DeleteNamespace", req, cb)
  }

  /**
   * 建立消息路由
   */
  async BuildMessageRoute(
    req: BuildMessageRouteRequest,
    cb?: (error: string, rep: BuildMessageRouteResponse) => void
  ): Promise<BuildMessageRouteResponse> {
    return this.request("BuildMessageRoute", req, cb)
  }

  /**
   * 获取Secrets列表
   */
  async DescribeSecrets(
    req: DescribeSecretsRequest,
    cb?: (error: string, rep: DescribeSecretsResponse) => void
  ): Promise<DescribeSecretsResponse> {
    return this.request("DescribeSecrets", req, cb)
  }

  /**
   * 开关消息路由
   */
  async SetRouteOnOff(
    req: SetRouteOnOffRequest,
    cb?: (error: string, rep: SetRouteOnOffResponse) => void
  ): Promise<SetRouteOnOffResponse> {
    return this.request("SetRouteOnOff", req, cb)
  }

  /**
   * 创建ConfigMap
   */
  async CreateConfigMap(
    req: CreateConfigMapRequest,
    cb?: (error: string, rep: CreateConfigMapResponse) => void
  ): Promise<CreateConfigMapResponse> {
    return this.request("CreateConfigMap", req, cb)
  }

  /**
   * 创建边缘节点
   */
  async CreateEdgeNode(
    req: CreateEdgeNodeRequest,
    cb?: (error: string, rep: CreateEdgeNodeResponse) => void
  ): Promise<CreateEdgeNodeResponse> {
    return this.request("CreateEdgeNode", req, cb)
  }

  /**
   * 删除边缘单元NodeUnit模板
   */
  async DeleteEdgeNodeUnitTemplates(
    req: DeleteEdgeNodeUnitTemplatesRequest,
    cb?: (error: string, rep: DeleteEdgeNodeUnitTemplatesResponse) => void
  ): Promise<DeleteEdgeNodeUnitTemplatesResponse> {
    return this.request("DeleteEdgeNodeUnitTemplates", req, cb)
  }

  /**
   * 编辑边缘节点标签
   */
  async ModifyEdgeNodeLabels(
    req: ModifyEdgeNodeLabelsRequest,
    cb?: (error: string, rep: ModifyEdgeNodeLabelsResponse) => void
  ): Promise<ModifyEdgeNodeLabelsResponse> {
    return this.request("ModifyEdgeNodeLabels", req, cb)
  }

  /**
   * 查询指定Grid下应用的Yaml
   */
  async DescribeEdgeUnitDeployGridItemYaml(
    req: DescribeEdgeUnitDeployGridItemYamlRequest,
    cb?: (error: string, rep: DescribeEdgeUnitDeployGridItemYamlResponse) => void
  ): Promise<DescribeEdgeUnitDeployGridItemYamlResponse> {
    return this.request("DescribeEdgeUnitDeployGridItemYaml", req, cb)
  }

  /**
   * 获取ConfigMap列表
   */
  async DescribeConfigMaps(
    req: DescribeConfigMapsRequest,
    cb?: (error: string, rep: DescribeConfigMapsResponse) => void
  ): Promise<DescribeConfigMapsResponse> {
    return this.request("DescribeConfigMaps", req, cb)
  }

  /**
   * 获取组件市场组件列表
   */
  async GetMarketComponentList(
    req: GetMarketComponentListRequest,
    cb?: (error: string, rep: GetMarketComponentListResponse) => void
  ): Promise<GetMarketComponentListResponse> {
    return this.request("GetMarketComponentList", req, cb)
  }

  /**
   * 重新部署边缘单元指定Grid下应用
   */
  async DeleteEdgeUnitDeployGridItem(
    req: DeleteEdgeUnitDeployGridItemRequest,
    cb?: (error: string, rep: DeleteEdgeUnitDeployGridItemResponse) => void
  ): Promise<DeleteEdgeUnitDeployGridItemResponse> {
    return this.request("DeleteEdgeUnitDeployGridItem", req, cb)
  }

  /**
   * 获取ConfigMap详情
   */
  async DescribeConfigMap(
    req: DescribeConfigMapRequest,
    cb?: (error: string, rep: DescribeConfigMapResponse) => void
  ): Promise<DescribeConfigMapResponse> {
    return this.request("DescribeConfigMap", req, cb)
  }

  /**
   * 删除消息路由
   */
  async DeleteMessageRoute(
    req: DeleteMessageRouteRequest,
    cb?: (error: string, rep: DeleteMessageRouteResponse) => void
  ): Promise<DeleteMessageRouteResponse> {
    return this.request("DeleteMessageRoute", req, cb)
  }

  /**
   * 修改边缘集群
   */
  async ModifyEdgeUnit(
    req: ModifyEdgeUnitRequest,
    cb?: (error: string, rep: ModifyEdgeUnitResponse) => void
  ): Promise<ModifyEdgeUnitResponse> {
    return this.request("ModifyEdgeUnit", req, cb)
  }

  /**
   * 修改ConfigMap
   */
  async ModifyConfigMap(
    req: ModifyConfigMapRequest,
    cb?: (error: string, rep: ModifyConfigMapResponse) => void
  ): Promise<ModifyConfigMapResponse> {
    return this.request("ModifyConfigMap", req, cb)
  }

  /**
   * 查询边缘单元NodeUnit列表
   */
  async DescribeNodeUnit(
    req: DescribeNodeUnitRequest,
    cb?: (error: string, rep: DescribeNodeUnitResponse) => void
  ): Promise<DescribeNodeUnitResponse> {
    return this.request("DescribeNodeUnit", req, cb)
  }

  /**
   * 查询边缘单元指定Grid下的部署应用列表
   */
  async DescribeEdgeUnitDeployGridItem(
    req: DescribeEdgeUnitDeployGridItemRequest,
    cb?: (error: string, rep: DescribeEdgeUnitDeployGridItemResponse) => void
  ): Promise<DescribeEdgeUnitDeployGridItemResponse> {
    return this.request("DescribeEdgeUnitDeployGridItem", req, cb)
  }

  /**
   * 编辑draco设备信息
   */
  async ModifyEdgeDracoNode(
    req: ModifyEdgeDracoNodeRequest,
    cb?: (error: string, rep: ModifyEdgeDracoNodeResponse) => void
  ): Promise<ModifyEdgeDracoNodeResponse> {
    return this.request("ModifyEdgeDracoNode", req, cb)
  }

  /**
   * 修改设备信息
   */
  async ModifyIotDevice(
    req: ModifyIotDeviceRequest,
    cb?: (error: string, rep: ModifyIotDeviceResponse) => void
  ): Promise<ModifyIotDeviceResponse> {
    return this.request("ModifyIotDevice", req, cb)
  }

  /**
   * 修改单元应用基本信息
   */
  async ModifyEdgeUnitApplicationBasicInfo(
    req: ModifyEdgeUnitApplicationBasicInfoRequest,
    cb?: (error: string, rep: ModifyEdgeUnitApplicationBasicInfoResponse) => void
  ): Promise<ModifyEdgeUnitApplicationBasicInfoResponse> {
    return this.request("ModifyEdgeUnitApplicationBasicInfo", req, cb)
  }

  /**
   * 获取组件市场的组件信息
   */
  async GetMarketComponent(
    req: GetMarketComponentRequest,
    cb?: (error: string, rep: GetMarketComponentResponse) => void
  ): Promise<GetMarketComponentResponse> {
    return this.request("GetMarketComponent", req, cb)
  }

  /**
   * 查询边缘单元Grid的Pod列表
   */
  async DescribeEdgeUnitGridPods(
    req: DescribeEdgeUnitGridPodsRequest,
    cb?: (error: string, rep: DescribeEdgeUnitGridPodsResponse) => void
  ): Promise<DescribeEdgeUnitGridPodsResponse> {
    return this.request("DescribeEdgeUnitGridPods", req, cb)
  }

  /**
   * 批量删除设备
   */
  async DeleteIotDeviceBatch(
    req: DeleteIotDeviceBatchRequest,
    cb?: (error: string, rep: DeleteIotDeviceBatchResponse) => void
  ): Promise<DeleteIotDeviceBatchResponse> {
    return this.request("DeleteIotDeviceBatch", req, cb)
  }

  /**
   * 获取命名空间
   */
  async DescribeNamespace(
    req: DescribeNamespaceRequest,
    cb?: (error: string, rep: DescribeNamespaceResponse) => void
  ): Promise<DescribeNamespaceResponse> {
    return this.request("DescribeNamespace", req, cb)
  }

  /**
   * 获取边缘集群默认VPC信息
   */
  async DescribeEdgeDefaultVpc(
    req?: DescribeEdgeDefaultVpcRequest,
    cb?: (error: string, rep: DescribeEdgeDefaultVpcResponse) => void
  ): Promise<DescribeEdgeDefaultVpcResponse> {
    return this.request("DescribeEdgeDefaultVpc", req, cb)
  }

  /**
   * 校验Secret的Yaml语法
   */
  async DescribeSecretYamlError(
    req: DescribeSecretYamlErrorRequest,
    cb?: (error: string, rep: DescribeSecretYamlErrorResponse) => void
  ): Promise<DescribeSecretYamlErrorResponse> {
    return this.request("DescribeSecretYamlError", req, cb)
  }

  /**
   * 删除ConfigMap
   */
  async DeleteConfigMap(
    req: DeleteConfigMapRequest,
    cb?: (error: string, rep: DeleteConfigMapResponse) => void
  ): Promise<DeleteConfigMapResponse> {
    return this.request("DeleteConfigMap", req, cb)
  }

  /**
   * 创建边缘单元NodeUnit模板
   */
  async CreateEdgeNodeUnitTemplate(
    req: CreateEdgeNodeUnitTemplateRequest,
    cb?: (error: string, rep: CreateEdgeNodeUnitTemplateResponse) => void
  ): Promise<CreateEdgeNodeUnitTemplateResponse> {
    return this.request("CreateEdgeNodeUnitTemplate", req, cb)
  }

  /**
   * 批量解绑单元设备
   */
  async DeleteEdgeUnitDevices(
    req: DeleteEdgeUnitDevicesRequest,
    cb?: (error: string, rep: DeleteEdgeUnitDevicesResponse) => void
  ): Promise<DeleteEdgeUnitDevicesResponse> {
    return this.request("DeleteEdgeUnitDevices", req, cb)
  }

  /**
   * 修改Secret
   */
  async ModifySecret(
    req: ModifySecretRequest,
    cb?: (error: string, rep: ModifySecretResponse) => void
  ): Promise<ModifySecretResponse> {
    return this.request("ModifySecret", req, cb)
  }

  /**
   * 批量绑定设备到单元
   */
  async CreateEdgeUnitDevices(
    req: CreateEdgeUnitDevicesRequest,
    cb?: (error: string, rep: CreateEdgeUnitDevicesResponse) => void
  ): Promise<CreateEdgeUnitDevicesResponse> {
    return this.request("CreateEdgeUnitDevices", req, cb)
  }

  /**
   * 获取设备列表信息
   */
  async DescribeIotDevices(
    req: DescribeIotDevicesRequest,
    cb?: (error: string, rep: DescribeIotDevicesResponse) => void
  ): Promise<DescribeIotDevicesResponse> {
    return this.request("DescribeIotDevices", req, cb)
  }

  /**
   * 删除边缘单元
   */
  async DeleteEdgeUnitCloud(
    req: DeleteEdgeUnitCloudRequest,
    cb?: (error: string, rep: DeleteEdgeUnitCloudResponse) => void
  ): Promise<DeleteEdgeUnitCloudResponse> {
    return this.request("DeleteEdgeUnitCloud", req, cb)
  }

  /**
   * 查询指定NodeGroup下NodeUnit模板列表
   */
  async DescribeNodeUnitTemplateOnNodeGroup(
    req: DescribeNodeUnitTemplateOnNodeGroupRequest,
    cb?: (error: string, rep: DescribeNodeUnitTemplateOnNodeGroupResponse) => void
  ): Promise<DescribeNodeUnitTemplateOnNodeGroupResponse> {
    return this.request("DescribeNodeUnitTemplateOnNodeGroup", req, cb)
  }

  /**
   * 查询节点Pod内的容器列表
   */
  async DescribeEdgeNodePodContainers(
    req: DescribeEdgeNodePodContainersRequest,
    cb?: (error: string, rep: DescribeEdgeNodePodContainersResponse) => void
  ): Promise<DescribeEdgeNodePodContainersResponse> {
    return this.request("DescribeEdgeNodePodContainers", req, cb)
  }

  /**
   * 获取消息路由列表
   */
  async DescribeMessageRouteList(
    req: DescribeMessageRouteListRequest,
    cb?: (error: string, rep: DescribeMessageRouteListResponse) => void
  ): Promise<DescribeMessageRouteListResponse> {
    return this.request("DescribeMessageRouteList", req, cb)
  }

  /**
   * 校验ConfigMap的Yaml语法
   */
  async DescribeConfigMapYamlError(
    req: DescribeConfigMapYamlErrorRequest,
    cb?: (error: string, rep: DescribeConfigMapYamlErrorResponse) => void
  ): Promise<DescribeConfigMapYamlErrorResponse> {
    return this.request("DescribeConfigMapYamlError", req, cb)
  }

  /**
   * 获取单元下应用列表
   */
  async DescribeEdgeUnitApplications(
    req: DescribeEdgeUnitApplicationsRequest,
    cb?: (error: string, rep: DescribeEdgeUnitApplicationsResponse) => void
  ): Promise<DescribeEdgeUnitApplicationsResponse> {
    return this.request("DescribeEdgeUnitApplications", req, cb)
  }

  /**
   * 获取命名空间列表信息
   */
  async DescribeNamespaces(
    req: DescribeNamespacesRequest,
    cb?: (error: string, rep: DescribeNamespacesResponse) => void
  ): Promise<DescribeNamespacesResponse> {
    return this.request("DescribeNamespaces", req, cb)
  }

  /**
   * 查询边缘节点列表
   */
  async DescribeEdgeNodes(
    req: DescribeEdgeNodesRequest,
    cb?: (error: string, rep: DescribeEdgeNodesResponse) => void
  ): Promise<DescribeEdgeNodesResponse> {
    return this.request("DescribeEdgeNodes", req, cb)
  }

  /**
   * 查询边缘操作日志
   */
  async DescribeEdgeOperationLogs(
    req: DescribeEdgeOperationLogsRequest,
    cb?: (error: string, rep: DescribeEdgeOperationLogsResponse) => void
  ): Promise<DescribeEdgeOperationLogsResponse> {
    return this.request("DescribeEdgeOperationLogs", req, cb)
  }

  /**
   * 创建Secret
   */
  async CreateSecret(
    req: CreateSecretRequest,
    cb?: (error: string, rep: CreateSecretResponse) => void
  ): Promise<CreateSecretResponse> {
    return this.request("CreateSecret", req, cb)
  }

  /**
   * 查询边缘集群NodeGroup
   */
  async DescribeEdgeUnitNodeGroup(
    req: DescribeEdgeUnitNodeGroupRequest,
    cb?: (error: string, rep: DescribeEdgeUnitNodeGroupResponse) => void
  ): Promise<DescribeEdgeUnitNodeGroupResponse> {
    return this.request("DescribeEdgeUnitNodeGroup", req, cb)
  }

  /**
   * 查询边缘单元Pod
   */
  async DescribeEdgePod(
    req: DescribeEdgePodRequest,
    cb?: (error: string, rep: DescribeEdgePodResponse) => void
  ): Promise<DescribeEdgePodResponse> {
    return this.request("DescribeEdgePod", req, cb)
  }

  /**
   * 获取Secret详情
   */
  async DescribeSecret(
    req: DescribeSecretRequest,
    cb?: (error: string, rep: DescribeSecretResponse) => void
  ): Promise<DescribeSecretResponse> {
    return this.request("DescribeSecret", req, cb)
  }

  /**
   * 更新边缘单元信息
   */
  async ModifyEdgeUnitCloudApi(
    req: ModifyEdgeUnitCloudApiRequest,
    cb?: (error: string, rep: ModifyEdgeUnitCloudApiResponse) => void
  ): Promise<ModifyEdgeUnitCloudApiResponse> {
    return this.request("ModifyEdgeUnitCloudApi", req, cb)
  }

  /**
   * 获取设备信息
   */
  async DescribeIotDevice(
    req: DescribeIotDeviceRequest,
    cb?: (error: string, rep: DescribeIotDeviceResponse) => void
  ): Promise<DescribeIotDeviceResponse> {
    return this.request("DescribeIotDevice", req, cb)
  }

  /**
   * 创建边缘单元NodeGroup
   */
  async CreateEdgeNodeGroup(
    req: CreateEdgeNodeGroupRequest,
    cb?: (error: string, rep: CreateEdgeNodeGroupResponse) => void
  ): Promise<CreateEdgeNodeGroupResponse> {
    return this.request("CreateEdgeNodeGroup", req, cb)
  }

  /**
   * 查询节点Pod列表
   */
  async DescribeEdgeNodePods(
    req: DescribeEdgeNodePodsRequest,
    cb?: (error: string, rep: DescribeEdgeNodePodsResponse) => void
  ): Promise<DescribeEdgeNodePodsResponse> {
    return this.request("DescribeEdgeNodePods", req, cb)
  }

  /**
   * 批量预注册节点
   */
  async CreateEdgeNodeBatch(
    req: CreateEdgeNodeBatchRequest,
    cb?: (error: string, rep: CreateEdgeNodeBatchResponse) => void
  ): Promise<CreateEdgeNodeBatchResponse> {
    return this.request("CreateEdgeNodeBatch", req, cb)
  }

  /**
   * 修改边缘单元Grid部署应用副本数
   */
  async ModifyEdgeUnitDeployGridItem(
    req: ModifyEdgeUnitDeployGridItemRequest,
    cb?: (error: string, rep: ModifyEdgeUnitDeployGridItemResponse) => void
  ): Promise<ModifyEdgeUnitDeployGridItemResponse> {
    return this.request("ModifyEdgeUnitDeployGridItem", req, cb)
  }

  /**
   * 创建消息路由
   */
  async CreateMessageRoute(
    req: CreateMessageRouteRequest,
    cb?: (error: string, rep: CreateMessageRouteResponse) => void
  ): Promise<CreateMessageRouteResponse> {
    return this.request("CreateMessageRoute", req, cb)
  }

  /**
   * 查询用户的资源限制
   */
  async DescribeYeheResourceLimit(
    req?: DescribeYeheResourceLimitRequest,
    cb?: (error: string, rep: DescribeYeheResourceLimitResponse) => void
  ): Promise<DescribeYeheResourceLimitResponse> {
    return this.request("DescribeYeheResourceLimit", req, cb)
  }

  /**
   * 删除边缘单元NodeUnit
   */
  async DeleteNodeUnit(
    req: DeleteNodeUnitRequest,
    cb?: (error: string, rep: DeleteNodeUnitResponse) => void
  ): Promise<DeleteNodeUnitResponse> {
    return this.request("DeleteNodeUnit", req, cb)
  }

  /**
   * Yaml方式修改应用配置
   */
  async ModifyEdgeUnitApplicationYaml(
    req: ModifyEdgeUnitApplicationYamlRequest,
    cb?: (error: string, rep: ModifyEdgeUnitApplicationYamlResponse) => void
  ): Promise<ModifyEdgeUnitApplicationYamlResponse> {
    return this.request("ModifyEdgeUnitApplicationYaml", req, cb)
  }

  /**
   * 删除指定pod
   */
  async DeleteEdgeUnitPod(
    req: DeleteEdgeUnitPodRequest,
    cb?: (error: string, rep: DeleteEdgeUnitPodResponse) => void
  ): Promise<DeleteEdgeUnitPodResponse> {
    return this.request("DeleteEdgeUnitPod", req, cb)
  }

  /**
   * 查询边缘单元Grid列表
   */
  async DescribeEdgeUnitDeployGrid(
    req: DescribeEdgeUnitDeployGridRequest,
    cb?: (error: string, rep: DescribeEdgeUnitDeployGridResponse) => void
  ): Promise<DescribeEdgeUnitDeployGridResponse> {
    return this.request("DescribeEdgeUnitDeployGrid", req, cb)
  }

  /**
   * 查询边缘单元Grid事件列表
   */
  async DescribeEdgeUnitGridEvents(
    req: DescribeEdgeUnitGridEventsRequest,
    cb?: (error: string, rep: DescribeEdgeUnitGridEventsResponse) => void
  ): Promise<DescribeEdgeUnitGridEventsResponse> {
    return this.request("DescribeEdgeUnitGridEvents", req, cb)
  }

  /**
   * 可视化修改应用配置
   */
  async ModifyEdgeUnitApplicationVisualization(
    req: ModifyEdgeUnitApplicationVisualizationRequest,
    cb?: (error: string, rep: ModifyEdgeUnitApplicationVisualizationResponse) => void
  ): Promise<ModifyEdgeUnitApplicationVisualizationResponse> {
    return this.request("ModifyEdgeUnitApplicationVisualization", req, cb)
  }

  /**
   * 查询预注册节点列表
   */
  async DescribeEdgeSnNodes(
    req: DescribeEdgeSnNodesRequest,
    cb?: (error: string, rep: DescribeEdgeSnNodesResponse) => void
  ): Promise<DescribeEdgeSnNodesResponse> {
    return this.request("DescribeEdgeSnNodes", req, cb)
  }

  /**
   * 删除Secret
   */
  async DeleteSecret(
    req: DeleteSecretRequest,
    cb?: (error: string, rep: DeleteSecretResponse) => void
  ): Promise<DeleteSecretResponse> {
    return this.request("DeleteSecret", req, cb)
  }

  /**
   * 查询边缘单元列表
   */
  async DescribeEdgeUnitsCloud(
    req: DescribeEdgeUnitsCloudRequest,
    cb?: (error: string, rep: DescribeEdgeUnitsCloudResponse) => void
  ): Promise<DescribeEdgeUnitsCloudResponse> {
    return this.request("DescribeEdgeUnitsCloud", req, cb)
  }
}
