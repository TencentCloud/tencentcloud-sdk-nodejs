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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeApplicationYamlResponse = models.DescribeApplicationYamlResponse;
const OperationLogsCondition = models.OperationLogsCondition;
const RedeployEdgeUnitApplicationResponse = models.RedeployEdgeUnitApplicationResponse;
const CreateEdgeUnitCloudResponse = models.CreateEdgeUnitCloudResponse;
const ModifyEdgeUnitApplicationBasicInfoRequest = models.ModifyEdgeUnitApplicationBasicInfoRequest;
const CreateEdgeNodeGroupRequest = models.CreateEdgeNodeGroupRequest;
const CreateEdgeUnitApplicationVisualizationRequest = models.CreateEdgeUnitApplicationVisualizationRequest;
const GridPodInfo = models.GridPodInfo;
const CreateSecretRequest = models.CreateSecretRequest;
const DescribeEdgeUnitApplicationYamlRequest = models.DescribeEdgeUnitApplicationYamlRequest;
const CreateEdgeUnitApplicationVisualizationResponse = models.CreateEdgeUnitApplicationVisualizationResponse;
const CreateEdgeNodeBatchResponse = models.CreateEdgeNodeBatchResponse;
const DescribeNamespacesResponse = models.DescribeNamespacesResponse;
const DescribeSecretResponse = models.DescribeSecretResponse;
const NodeUnitTemplate = models.NodeUnitTemplate;
const DescribeSecretYamlErrorResponse = models.DescribeSecretYamlErrorResponse;
const ModifyEdgeUnitDeployGridItemRequest = models.ModifyEdgeUnitDeployGridItemRequest;
const NodeGroupNodeUnitTemplateInfo = models.NodeGroupNodeUnitTemplateInfo;
const DescribeEdgeUnitMonitorStatusRequest = models.DescribeEdgeUnitMonitorStatusRequest;
const GetMarketComponentResponse = models.GetMarketComponentResponse;
const CreateApplicationVisualizationRequest = models.CreateApplicationVisualizationRequest;
const NodeUnitNodeInfo = models.NodeUnitNodeInfo;
const DeleteNodeUnitResponse = models.DeleteNodeUnitResponse;
const VolumeNFS = models.VolumeNFS;
const Service = models.Service;
const DescribeEdgeUnitApplicationsResponse = models.DescribeEdgeUnitApplicationsResponse;
const DescribeNodeUnitTemplateOnNodeGroupResponse = models.DescribeNodeUnitTemplateOnNodeGroupResponse;
const ApplicationStatusInfo = models.ApplicationStatusInfo;
const DescribeEdgeUnitGridEventsResponse = models.DescribeEdgeUnitGridEventsResponse;
const IotDevicesInfo = models.IotDevicesInfo;
const DescribeEdgeUnitApplicationYamlErrorResponse = models.DescribeEdgeUnitApplicationYamlErrorResponse;
const DeleteEdgeUnitCloudResponse = models.DeleteEdgeUnitCloudResponse;
const ModifyConfigMapRequest = models.ModifyConfigMapRequest;
const ApplicationBasicConfig = models.ApplicationBasicConfig;
const VolumeMount = models.VolumeMount;
const ModifyApplicationBasicInfoResponse = models.ModifyApplicationBasicInfoResponse;
const DeleteEdgeUnitDeployGridItemResponse = models.DeleteEdgeUnitDeployGridItemResponse;
const DescribeApplicationVisualizationRequest = models.DescribeApplicationVisualizationRequest;
const DescribeEdgeSnNodesResponse = models.DescribeEdgeSnNodesResponse;
const DescribeEdgeUnitApplicationsRequest = models.DescribeEdgeUnitApplicationsRequest;
const DescribeEdgeUnitApplicationYamlResponse = models.DescribeEdgeUnitApplicationYamlResponse;
const DescribeConfigMapYamlErrorResponse = models.DescribeConfigMapYamlErrorResponse;
const DescribeConfigMapResponse = models.DescribeConfigMapResponse;
const GetMarketComponentListRequest = models.GetMarketComponentListRequest;
const DescribeApplicationYamlRequest = models.DescribeApplicationYamlRequest;
const ModifyApplicationVisualizationRequest = models.ModifyApplicationVisualizationRequest;
const DescribeEdgeUnitNodeUnitTemplatesRequest = models.DescribeEdgeUnitNodeUnitTemplatesRequest;
const DeleteEdgeUnitApplicationsRequest = models.DeleteEdgeUnitApplicationsRequest;
const DeleteApplicationsRequest = models.DeleteApplicationsRequest;
const DescribeEdgeUnitApplicationPodContainersRequest = models.DescribeEdgeUnitApplicationPodContainersRequest;
const TcpProbe = models.TcpProbe;
const VolumeConfigMapKeyToPath = models.VolumeConfigMapKeyToPath;
const DescribeDracoEdgeNodeInstallerResponse = models.DescribeDracoEdgeNodeInstallerResponse;
const ModifyEdgeUnitCloudApiRequest = models.ModifyEdgeUnitCloudApiRequest;
const DescribeEdgeUnitDeployGridItemRequest = models.DescribeEdgeUnitDeployGridItemRequest;
const ModifyEdgeUnitRequest = models.ModifyEdgeUnitRequest;
const ContainerStatus = models.ContainerStatus;
const DescribeEdgeUnitCloudResponse = models.DescribeEdgeUnitCloudResponse;
const PodStatus = models.PodStatus;
const RedeployEdgeUnitApplicationRequest = models.RedeployEdgeUnitApplicationRequest;
const DescribeEdgeNodeRemarkListRequest = models.DescribeEdgeNodeRemarkListRequest;
const DeleteSecretResponse = models.DeleteSecretResponse;
const DeleteConfigMapResponse = models.DeleteConfigMapResponse;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const DeleteConfigMapRequest = models.DeleteConfigMapRequest;
const DescribeEdgeUnitDeployGridItemResponse = models.DescribeEdgeUnitDeployGridItemResponse;
const CreateMessageRouteRequest = models.CreateMessageRouteRequest;
const DescribeEdgeUnitExtraRequest = models.DescribeEdgeUnitExtraRequest;
const CreateUpdateNodeUnitRequest = models.CreateUpdateNodeUnitRequest;
const DescribeIotDeviceRequest = models.DescribeIotDeviceRequest;
const CreateConfigMapResponse = models.CreateConfigMapResponse;
const DescribeEdgeUnitsCloudRequest = models.DescribeEdgeUnitsCloudRequest;
const ApplicationTemplate = models.ApplicationTemplate;
const ApplicationBasicInfo = models.ApplicationBasicInfo;
const DescribeEdgeDefaultVpcRequest = models.DescribeEdgeDefaultVpcRequest;
const DescribeSecretsResponse = models.DescribeSecretsResponse;
const DeleteEdgeNodeGroupRequest = models.DeleteEdgeNodeGroupRequest;
const DescribeEdgeUnitApplicationYamlErrorRequest = models.DescribeEdgeUnitApplicationYamlErrorRequest;
const DescribeEdgeNodePodsResponse = models.DescribeEdgeNodePodsResponse;
const DescribeEdgePodResponse = models.DescribeEdgePodResponse;
const CreateEdgeNodeUnitTemplateResponse = models.CreateEdgeNodeUnitTemplateResponse;
const DescribeMonitorMetricsResponse = models.DescribeMonitorMetricsResponse;
const Env = models.Env;
const DescribeConfigMapsResponse = models.DescribeConfigMapsResponse;
const NodeGroupInfo = models.NodeGroupInfo;
const OperationLog = models.OperationLog;
const GetMarketComponentListResponse = models.GetMarketComponentListResponse;
const DescribeEdgeNodePodContainersResponse = models.DescribeEdgeNodePodContainersResponse;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const DeleteEdgeUnitDevicesRequest = models.DeleteEdgeUnitDevicesRequest;
const CronJob = models.CronJob;
const DeleteEdgeUnitPodRequest = models.DeleteEdgeUnitPodRequest;
const CreateIotDeviceRequest = models.CreateIotDeviceRequest;
const CreateSecretResponse = models.CreateSecretResponse;
const DeleteEdgeNodeUnitTemplatesRequest = models.DeleteEdgeNodeUnitTemplatesRequest;
const ModifyEdgeNodeLabelsResponse = models.ModifyEdgeNodeLabelsResponse;
const DescribeEdgeUnitNodeGroupRequest = models.DescribeEdgeUnitNodeGroupRequest;
const EdgeUnitStatisticItem = models.EdgeUnitStatisticItem;
const DescribeEdgeUnitApplicationPodsRequest = models.DescribeEdgeUnitApplicationPodsRequest;
const Job = models.Job;
const DescribeEdgeUnitApplicationLogsResponse = models.DescribeEdgeUnitApplicationLogsResponse;
const ModifyEdgeUnitDeployGridItemResponse = models.ModifyEdgeUnitDeployGridItemResponse;
const CreateEdgeNodeRequest = models.CreateEdgeNodeRequest;
const BuildMessageRouteResponse = models.BuildMessageRouteResponse;
const DescribeEdgeUnitMonitorStatusResponse = models.DescribeEdgeUnitMonitorStatusResponse;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const DescribeEdgeUnitExtraResponse = models.DescribeEdgeUnitExtraResponse;
const DescribeConfigMapsRequest = models.DescribeConfigMapsRequest;
const DescribeEdgeUnitNodeUnitTemplatesResponse = models.DescribeEdgeUnitNodeUnitTemplatesResponse;
const GridDetail = models.GridDetail;
const ModifyIotDeviceResponse = models.ModifyIotDeviceResponse;
const ModifyEdgeNodeLabelsRequest = models.ModifyEdgeNodeLabelsRequest;
const DeleteEdgeUnitDevicesResponse = models.DeleteEdgeUnitDevicesResponse;
const CreateEdgeNodeGroupResponse = models.CreateEdgeNodeGroupResponse;
const EdgeNodePodInfo = models.EdgeNodePodInfo;
const RouteInfo = models.RouteInfo;
const CreateEdgeUnitApplicationYamlRequest = models.CreateEdgeUnitApplicationYamlRequest;
const HttpHeader = models.HttpHeader;
const DeleteEdgeUnitApplicationsResponse = models.DeleteEdgeUnitApplicationsResponse;
const DescribeSecretRequest = models.DescribeSecretRequest;
const DeleteApplicationsResponse = models.DeleteApplicationsResponse;
const DracoNodeInfo = models.DracoNodeInfo;
const NodeUnitInfo = models.NodeUnitInfo;
const DockerConfig = models.DockerConfig;
const DescribeEdgeUnitDeployGridItemYamlRequest = models.DescribeEdgeUnitDeployGridItemYamlRequest;
const CreateEdgeNodeBatchRequest = models.CreateEdgeNodeBatchRequest;
const DescribeNamespaceRequest = models.DescribeNamespaceRequest;
const DescribeNamespaceResponse = models.DescribeNamespaceResponse;
const MarketComponentInfo = models.MarketComponentInfo;
const DescribeConfigMapRequest = models.DescribeConfigMapRequest;
const ConfigMapBasicInfo = models.ConfigMapBasicInfo;
const NamespaceInfo = models.NamespaceInfo;
const CreateEdgeNodeUnitTemplateRequest = models.CreateEdgeNodeUnitTemplateRequest;
const GridInfo = models.GridInfo;
const CreateApplicationVisualizationResponse = models.CreateApplicationVisualizationResponse;
const Event = models.Event;
const DescribeEdgeUnitCloudRequest = models.DescribeEdgeUnitCloudRequest;
const CreateEdgeUnitApplicationYamlResponse = models.CreateEdgeUnitApplicationYamlResponse;
const DescribeSecretYamlErrorRequest = models.DescribeSecretYamlErrorRequest;
const DescribeMessageRouteListResponse = models.DescribeMessageRouteListResponse;
const FieldSort = models.FieldSort;
const EdgeCloudCluster = models.EdgeCloudCluster;
const CreateUserTokenResponse = models.CreateUserTokenResponse;
const DeleteSecretRequest = models.DeleteSecretRequest;
const DescribeEdgeUnitApplicationPodsResponse = models.DescribeEdgeUnitApplicationPodsResponse;
const EdgeDracoNodeInfo = models.EdgeDracoNodeInfo;
const DescribeEdgeUnitApplicationVisualizationRequest = models.DescribeEdgeUnitApplicationVisualizationRequest;
const DescribeEdgeNodesResponse = models.DescribeEdgeNodesResponse;
const ModifyIotDeviceRequest = models.ModifyIotDeviceRequest;
const DescribeEdgeUnitGridPodsRequest = models.DescribeEdgeUnitGridPodsRequest;
const VolumeConfigMap = models.VolumeConfigMap;
const DeleteEdgeUnitDevicesDevice = models.DeleteEdgeUnitDevicesDevice;
const DeleteIotDeviceResponse = models.DeleteIotDeviceResponse;
const DescribeEdgeDefaultVpcResponse = models.DescribeEdgeDefaultVpcResponse;
const ModifyNodeUnitTemplateRequest = models.ModifyNodeUnitTemplateRequest;
const DescribeEdgeNodesRequest = models.DescribeEdgeNodesRequest;
const DescribeEdgeUnitApplicationLogsRequest = models.DescribeEdgeUnitApplicationLogsRequest;
const CreateUserTokenRequest = models.CreateUserTokenRequest;
const DescribeEdgeAgentNodeInstallerResponse = models.DescribeEdgeAgentNodeInstallerResponse;
const ModifyEdgeUnitApplicationVisualizationRequest = models.ModifyEdgeUnitApplicationVisualizationRequest;
const ModifyConfigMapResponse = models.ModifyConfigMapResponse;
const ModifyApplicationVisualizationResponse = models.ModifyApplicationVisualizationResponse;
const DescribeEdgeNodePodsRequest = models.DescribeEdgeNodePodsRequest;
const DeleteIotDeviceBatchRequest = models.DeleteIotDeviceBatchRequest;
const DescribeEdgeAgentNodeInstallerRequest = models.DescribeEdgeAgentNodeInstallerRequest;
const DescribeApplicationVisualizationResponse = models.DescribeApplicationVisualizationResponse;
const DescribeDracoEdgeNodeInstallerRequest = models.DescribeDracoEdgeNodeInstallerRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const VolumeHostPath = models.VolumeHostPath;
const DeleteMessageRouteRequest = models.DeleteMessageRouteRequest;
const ApplyMarketComponentRequest = models.ApplyMarketComponentRequest;
const NodeSimpleInfo = models.NodeSimpleInfo;
const EnvValueSelector = models.EnvValueSelector;
const DescribeNamespaceResourcesResponse = models.DescribeNamespaceResourcesResponse;
const DescribeEdgeUnitGridEventsRequest = models.DescribeEdgeUnitGridEventsRequest;
const CreateEdgeUnitDevicesResponse = models.CreateEdgeUnitDevicesResponse;
const SecretItem = models.SecretItem;
const ModifyEdgeDracoNodeRequest = models.ModifyEdgeDracoNodeRequest;
const CreateMessageRouteResponse = models.CreateMessageRouteResponse;
const DescribeNodeUnitResponse = models.DescribeNodeUnitResponse;
const DeleteEdgeNodeGroupResponse = models.DeleteEdgeNodeGroupResponse;
const DescribeMessageRouteListRequest = models.DescribeMessageRouteListRequest;
const KeyValueObj = models.KeyValueObj;
const Label = models.Label;
const ModifyEdgeUnitResponse = models.ModifyEdgeUnitResponse;
const DescribeYeheResourceLimitResponse = models.DescribeYeheResourceLimitResponse;
const DescribeEdgeUnitsCloudResponse = models.DescribeEdgeUnitsCloudResponse;
const DescribeIotDevicesRequest = models.DescribeIotDevicesRequest;
const CreateConfigMapRequest = models.CreateConfigMapRequest;
const DescribeEdgeUnitDeployGridResponse = models.DescribeEdgeUnitDeployGridResponse;
const ModifyEdgeUnitCloudApiResponse = models.ModifyEdgeUnitCloudApiResponse;
const CreateUpdateNodeUnitResponse = models.CreateUpdateNodeUnitResponse;
const ModifyEdgeUnitApplicationVisualizationResponse = models.ModifyEdgeUnitApplicationVisualizationResponse;
const DeleteEdgeNodesResponse = models.DeleteEdgeNodesResponse;
const EdgeNodePodContainerInfo = models.EdgeNodePodContainerInfo;
const BuildMessageRouteRequest = models.BuildMessageRouteRequest;
const GridEventInfo = models.GridEventInfo;
const ResourceMetricTarget = models.ResourceMetricTarget;
const DescribeEdgeNodePodContainersRequest = models.DescribeEdgeNodePodContainersRequest;
const DescribeEdgeUnitApplicationEventsResponse = models.DescribeEdgeUnitApplicationEventsResponse;
const ModifySecretRequest = models.ModifySecretRequest;
const DeleteEdgeUnitPodResponse = models.DeleteEdgeUnitPodResponse;
const Probe = models.Probe;
const Container = models.Container;
const DescribeEdgeUnitApplicationEventsRequest = models.DescribeEdgeUnitApplicationEventsRequest;
const DescribeNamespacesRequest = models.DescribeNamespacesRequest;
const DeleteIotDeviceRequest = models.DeleteIotDeviceRequest;
const DescribeEdgeNodeRemarkListResponse = models.DescribeEdgeNodeRemarkListResponse;
const HorizontalPodAutoscaler = models.HorizontalPodAutoscaler;
const NamespaceResource = models.NamespaceResource;
const EdgeNodeInstallerOnline = models.EdgeNodeInstallerOnline;
const DescribeEdgeUnitApplicationPodContainersResponse = models.DescribeEdgeUnitApplicationPodContainersResponse;
const ModifyApplicationBasicInfoRequest = models.ModifyApplicationBasicInfoRequest;
const DescribeEdgeUnitNodeGroupResponse = models.DescribeEdgeUnitNodeGroupResponse;
const DescribeEdgeOperationLogsResponse = models.DescribeEdgeOperationLogsResponse;
const DescribeEdgeSnNodesRequest = models.DescribeEdgeSnNodesRequest;
const DeleteEdgeUnitDeployGridItemRequest = models.DeleteEdgeUnitDeployGridItemRequest;
const SecurityContext = models.SecurityContext;
const ApplicationDeployMode = models.ApplicationDeployMode;
const CreateIotDeviceResponse = models.CreateIotDeviceResponse;
const CreateEdgeUnitDevicesRequest = models.CreateEdgeUnitDevicesRequest;
const ModifySecretResponse = models.ModifySecretResponse;
const Sort = models.Sort;
const DescribeEdgeUnitDeployGridItemYamlResponse = models.DescribeEdgeUnitDeployGridItemYamlResponse;
const DescribeEdgeUnitApplicationVisualizationResponse = models.DescribeEdgeUnitApplicationVisualizationResponse;
const DescribeIotDeviceResponse = models.DescribeIotDeviceResponse;
const DescribeEdgePodRequest = models.DescribeEdgePodRequest;
const DescribeNamespaceResourcesRequest = models.DescribeNamespaceResourcesRequest;
const DescribeMonitorMetricsRequest = models.DescribeMonitorMetricsRequest;
const ModifyNodeUnitTemplateResponse = models.ModifyNodeUnitTemplateResponse;
const Volume = models.Volume;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const DescribeEdgeOperationLogsRequest = models.DescribeEdgeOperationLogsRequest;
const GridItemInfo = models.GridItemInfo;
const SetRouteOnOffResponse = models.SetRouteOnOffResponse;
const EdgeNodeLabel = models.EdgeNodeLabel;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const EdgeNodeInfo = models.EdgeNodeInfo;
const GetMarketComponentRequest = models.GetMarketComponentRequest;
const HttpProbe = models.HttpProbe;
const DeleteMessageRouteResponse = models.DeleteMessageRouteResponse;
const DescribeEdgeUnitDeployGridRequest = models.DescribeEdgeUnitDeployGridRequest;
const ApplyMarketComponentResponse = models.ApplyMarketComponentResponse;
const DescribeApplicationYamlErrorResponse = models.DescribeApplicationYamlErrorResponse;
const DeleteIotDeviceBatchResponse = models.DeleteIotDeviceBatchResponse;
const CreateEdgeNodeResponse = models.CreateEdgeNodeResponse;
const DeleteEdgeNodesRequest = models.DeleteEdgeNodesRequest;
const DescribeApplicationYamlErrorRequest = models.DescribeApplicationYamlErrorRequest;
const PortConfig = models.PortConfig;
const DescribeYeheResourceLimitRequest = models.DescribeYeheResourceLimitRequest;
const DescribeIotDevicesResponse = models.DescribeIotDevicesResponse;
const DescribeSecretsRequest = models.DescribeSecretsRequest;
const DescribeNodeUnitTemplateOnNodeGroupRequest = models.DescribeNodeUnitTemplateOnNodeGroupRequest;
const MonitorMetricsColumn = models.MonitorMetricsColumn;
const DescribeEdgeNodeRequest = models.DescribeEdgeNodeRequest;
const DescribeNodeUnitRequest = models.DescribeNodeUnitRequest;
const DeleteNodeUnitRequest = models.DeleteNodeUnitRequest;
const ModifyEdgeUnitApplicationYamlResponse = models.ModifyEdgeUnitApplicationYamlResponse;
const EdgeNodeResourceInfo = models.EdgeNodeResourceInfo;
const SecurityCapabilities = models.SecurityCapabilities;
const DeleteEdgeNodeUnitTemplatesResponse = models.DeleteEdgeNodeUnitTemplatesResponse;
const ModifyEdgeDracoNodeResponse = models.ModifyEdgeDracoNodeResponse;
const DescribeEdgeNodeResponse = models.DescribeEdgeNodeResponse;
const ModifyEdgeUnitApplicationYamlRequest = models.ModifyEdgeUnitApplicationYamlRequest;
const DeleteEdgeUnitCloudRequest = models.DeleteEdgeUnitCloudRequest;
const CreateEdgeUnitCloudRequest = models.CreateEdgeUnitCloudRequest;
const DescribeEdgeUnitGridPodsResponse = models.DescribeEdgeUnitGridPodsResponse;
const DescribeConfigMapYamlErrorRequest = models.DescribeConfigMapYamlErrorRequest;
const ModifyEdgeUnitApplicationBasicInfoResponse = models.ModifyEdgeUnitApplicationBasicInfoResponse;
const SetRouteOnOffRequest = models.SetRouteOnOffRequest;


/**
 * iecp client
 * @class
 */
class IecpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iecp.tencentcloudapi.com", "2021-09-14", credential, region, profile);
    }
    
    /**
     * 获取命名空间
     * @param {DescribeNamespaceRequest} req
     * @param {function(string, DescribeNamespaceResponse):void} cb
     * @public
     */
    DescribeNamespace(req, cb) {
        let resp = new DescribeNamespaceResponse();
        this.request("DescribeNamespace", req, resp, cb);
    }

    /**
     * 获取单元可视化配置信息
     * @param {DescribeEdgeUnitApplicationVisualizationRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationVisualizationResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationVisualization(req, cb) {
        let resp = new DescribeEdgeUnitApplicationVisualizationResponse();
        this.request("DescribeEdgeUnitApplicationVisualization", req, resp, cb);
    }

    /**
     * 查询边缘单元额外信息
     * @param {DescribeEdgeUnitExtraRequest} req
     * @param {function(string, DescribeEdgeUnitExtraResponse):void} cb
     * @public
     */
    DescribeEdgeUnitExtra(req, cb) {
        let resp = new DescribeEdgeUnitExtraResponse();
        this.request("DescribeEdgeUnitExtra", req, resp, cb);
    }

    /**
     * 创建或更新边缘单元NodeUnit
     * @param {CreateUpdateNodeUnitRequest} req
     * @param {function(string, CreateUpdateNodeUnitResponse):void} cb
     * @public
     */
    CreateUpdateNodeUnit(req, cb) {
        let resp = new CreateUpdateNodeUnitResponse();
        this.request("CreateUpdateNodeUnit", req, resp, cb);
    }

    /**
     * 修改边缘单元NodeUnit模板
     * @param {ModifyNodeUnitTemplateRequest} req
     * @param {function(string, ModifyNodeUnitTemplateResponse):void} cb
     * @public
     */
    ModifyNodeUnitTemplate(req, cb) {
        let resp = new ModifyNodeUnitTemplateResponse();
        this.request("ModifyNodeUnitTemplate", req, resp, cb);
    }

    /**
     * 创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 修改边缘单元Grid部署应用副本数
     * @param {ModifyEdgeUnitDeployGridItemRequest} req
     * @param {function(string, ModifyEdgeUnitDeployGridItemResponse):void} cb
     * @public
     */
    ModifyEdgeUnitDeployGridItem(req, cb) {
        let resp = new ModifyEdgeUnitDeployGridItemResponse();
        this.request("ModifyEdgeUnitDeployGridItem", req, resp, cb);
    }

    /**
     * 获取Secrets列表
     * @param {DescribeSecretsRequest} req
     * @param {function(string, DescribeSecretsResponse):void} cb
     * @public
     */
    DescribeSecrets(req, cb) {
        let resp = new DescribeSecretsResponse();
        this.request("DescribeSecrets", req, resp, cb);
    }

    /**
     * 查询指定Grid下应用的Yaml
     * @param {DescribeEdgeUnitDeployGridItemYamlRequest} req
     * @param {function(string, DescribeEdgeUnitDeployGridItemYamlResponse):void} cb
     * @public
     */
    DescribeEdgeUnitDeployGridItemYaml(req, cb) {
        let resp = new DescribeEdgeUnitDeployGridItemYamlResponse();
        this.request("DescribeEdgeUnitDeployGridItemYaml", req, resp, cb);
    }

    /**
     * yaml方式创建应用
     * @param {CreateEdgeUnitApplicationYamlRequest} req
     * @param {function(string, CreateEdgeUnitApplicationYamlResponse):void} cb
     * @public
     */
    CreateEdgeUnitApplicationYaml(req, cb) {
        let resp = new CreateEdgeUnitApplicationYamlResponse();
        this.request("CreateEdgeUnitApplicationYaml", req, resp, cb);
    }

    /**
     * 修改ConfigMap
     * @param {ModifyConfigMapRequest} req
     * @param {function(string, ModifyConfigMapResponse):void} cb
     * @public
     */
    ModifyConfigMap(req, cb) {
        let resp = new ModifyConfigMapResponse();
        this.request("ModifyConfigMap", req, resp, cb);
    }

    /**
     * 获取应用事件列表
     * @param {DescribeEdgeUnitApplicationEventsRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationEventsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationEvents(req, cb) {
        let resp = new DescribeEdgeUnitApplicationEventsResponse();
        this.request("DescribeEdgeUnitApplicationEvents", req, resp, cb);
    }

    /**
     * 获取组件市场组件列表
     * @param {GetMarketComponentListRequest} req
     * @param {function(string, GetMarketComponentListResponse):void} cb
     * @public
     */
    GetMarketComponentList(req, cb) {
        let resp = new GetMarketComponentListResponse();
        this.request("GetMarketComponentList", req, resp, cb);
    }

    /**
     * 删除ConfigMap
     * @param {DeleteConfigMapRequest} req
     * @param {function(string, DeleteConfigMapResponse):void} cb
     * @public
     */
    DeleteConfigMap(req, cb) {
        let resp = new DeleteConfigMapResponse();
        this.request("DeleteConfigMap", req, resp, cb);
    }

    /**
     * 创建边缘单元NodeUnit模板
     * @param {CreateEdgeNodeUnitTemplateRequest} req
     * @param {function(string, CreateEdgeNodeUnitTemplateResponse):void} cb
     * @public
     */
    CreateEdgeNodeUnitTemplate(req, cb) {
        let resp = new CreateEdgeNodeUnitTemplateResponse();
        this.request("CreateEdgeNodeUnitTemplate", req, resp, cb);
    }

    /**
     * 批量解绑单元设备
     * @param {DeleteEdgeUnitDevicesRequest} req
     * @param {function(string, DeleteEdgeUnitDevicesResponse):void} cb
     * @public
     */
    DeleteEdgeUnitDevices(req, cb) {
        let resp = new DeleteEdgeUnitDevicesResponse();
        this.request("DeleteEdgeUnitDevices", req, resp, cb);
    }

    /**
     * 批量绑定设备到单元
     * @param {CreateEdgeUnitDevicesRequest} req
     * @param {function(string, CreateEdgeUnitDevicesResponse):void} cb
     * @public
     */
    CreateEdgeUnitDevices(req, cb) {
        let resp = new CreateEdgeUnitDevicesResponse();
        this.request("CreateEdgeUnitDevices", req, resp, cb);
    }

    /**
     * 获取设备列表信息
     * @param {DescribeIotDevicesRequest} req
     * @param {function(string, DescribeIotDevicesResponse):void} cb
     * @public
     */
    DescribeIotDevices(req, cb) {
        let resp = new DescribeIotDevicesResponse();
        this.request("DescribeIotDevices", req, resp, cb);
    }

    /**
     * 查询指定NodeGroup下NodeUnit模板列表
     * @param {DescribeNodeUnitTemplateOnNodeGroupRequest} req
     * @param {function(string, DescribeNodeUnitTemplateOnNodeGroupResponse):void} cb
     * @public
     */
    DescribeNodeUnitTemplateOnNodeGroup(req, cb) {
        let resp = new DescribeNodeUnitTemplateOnNodeGroupResponse();
        this.request("DescribeNodeUnitTemplateOnNodeGroup", req, resp, cb);
    }

    /**
     * 编辑draco设备信息
     * @param {ModifyEdgeDracoNodeRequest} req
     * @param {function(string, ModifyEdgeDracoNodeResponse):void} cb
     * @public
     */
    ModifyEdgeDracoNode(req, cb) {
        let resp = new ModifyEdgeDracoNodeResponse();
        this.request("ModifyEdgeDracoNode", req, resp, cb);
    }

    /**
     * 获取单元下应用列表
     * @param {DescribeEdgeUnitApplicationsRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplications(req, cb) {
        let resp = new DescribeEdgeUnitApplicationsResponse();
        this.request("DescribeEdgeUnitApplications", req, resp, cb);
    }

    /**
     * 查询边缘节点列表
     * @param {DescribeEdgeNodesRequest} req
     * @param {function(string, DescribeEdgeNodesResponse):void} cb
     * @public
     */
    DescribeEdgeNodes(req, cb) {
        let resp = new DescribeEdgeNodesResponse();
        this.request("DescribeEdgeNodes", req, resp, cb);
    }

    /**
     * 获取应用模板列表
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }

    /**
     * 获取设备信息
     * @param {DescribeIotDeviceRequest} req
     * @param {function(string, DescribeIotDeviceResponse):void} cb
     * @public
     */
    DescribeIotDevice(req, cb) {
        let resp = new DescribeIotDeviceResponse();
        this.request("DescribeIotDevice", req, resp, cb);
    }

    /**
     * 删除指定pod
     * @param {DeleteEdgeUnitPodRequest} req
     * @param {function(string, DeleteEdgeUnitPodResponse):void} cb
     * @public
     */
    DeleteEdgeUnitPod(req, cb) {
        let resp = new DeleteEdgeUnitPodResponse();
        this.request("DeleteEdgeUnitPod", req, resp, cb);
    }

    /**
     * 查询边缘单元Grid事件列表
     * @param {DescribeEdgeUnitGridEventsRequest} req
     * @param {function(string, DescribeEdgeUnitGridEventsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitGridEvents(req, cb) {
        let resp = new DescribeEdgeUnitGridEventsResponse();
        this.request("DescribeEdgeUnitGridEvents", req, resp, cb);
    }

    /**
     * 查询边缘集群监控状态
     * @param {DescribeEdgeUnitMonitorStatusRequest} req
     * @param {function(string, DescribeEdgeUnitMonitorStatusResponse):void} cb
     * @public
     */
    DescribeEdgeUnitMonitorStatus(req, cb) {
        let resp = new DescribeEdgeUnitMonitorStatusResponse();
        this.request("DescribeEdgeUnitMonitorStatus", req, resp, cb);
    }

    /**
     * 删除边缘单元NodeGroup
     * @param {DeleteEdgeNodeGroupRequest} req
     * @param {function(string, DeleteEdgeNodeGroupResponse):void} cb
     * @public
     */
    DeleteEdgeNodeGroup(req, cb) {
        let resp = new DeleteEdgeNodeGroupResponse();
        this.request("DeleteEdgeNodeGroup", req, resp, cb);
    }

    /**
     * 创建子设备
     * @param {CreateIotDeviceRequest} req
     * @param {function(string, CreateIotDeviceResponse):void} cb
     * @public
     */
    CreateIotDevice(req, cb) {
        let resp = new CreateIotDeviceResponse();
        this.request("CreateIotDevice", req, resp, cb);
    }

    /**
     * 获取节点安装信息
     * @param {DescribeEdgeAgentNodeInstallerRequest} req
     * @param {function(string, DescribeEdgeAgentNodeInstallerResponse):void} cb
     * @public
     */
    DescribeEdgeAgentNodeInstaller(req, cb) {
        let resp = new DescribeEdgeAgentNodeInstallerResponse();
        this.request("DescribeEdgeAgentNodeInstaller", req, resp, cb);
    }

    /**
     * 批量删除设备
     * @param {DeleteIotDeviceBatchRequest} req
     * @param {function(string, DeleteIotDeviceBatchResponse):void} cb
     * @public
     */
    DeleteIotDeviceBatch(req, cb) {
        let resp = new DeleteIotDeviceBatchResponse();
        this.request("DeleteIotDeviceBatch", req, resp, cb);
    }

    /**
     * 单元应用重部署
     * @param {RedeployEdgeUnitApplicationRequest} req
     * @param {function(string, RedeployEdgeUnitApplicationResponse):void} cb
     * @public
     */
    RedeployEdgeUnitApplication(req, cb) {
        let resp = new RedeployEdgeUnitApplicationResponse();
        this.request("RedeployEdgeUnitApplication", req, resp, cb);
    }

    /**
     * 修改边缘集群
     * @param {ModifyEdgeUnitRequest} req
     * @param {function(string, ModifyEdgeUnitResponse):void} cb
     * @public
     */
    ModifyEdgeUnit(req, cb) {
        let resp = new ModifyEdgeUnitResponse();
        this.request("ModifyEdgeUnit", req, resp, cb);
    }

    /**
     * 获取节点备注信息列表
     * @param {DescribeEdgeNodeRemarkListRequest} req
     * @param {function(string, DescribeEdgeNodeRemarkListResponse):void} cb
     * @public
     */
    DescribeEdgeNodeRemarkList(req, cb) {
        let resp = new DescribeEdgeNodeRemarkListResponse();
        this.request("DescribeEdgeNodeRemarkList", req, resp, cb);
    }

    /**
     * 创建边缘节点
     * @param {CreateEdgeNodeRequest} req
     * @param {function(string, CreateEdgeNodeResponse):void} cb
     * @public
     */
    CreateEdgeNode(req, cb) {
        let resp = new CreateEdgeNodeResponse();
        this.request("CreateEdgeNode", req, resp, cb);
    }

    /**
     * 删除边缘单元NodeUnit模板
     * @param {DeleteEdgeNodeUnitTemplatesRequest} req
     * @param {function(string, DeleteEdgeNodeUnitTemplatesResponse):void} cb
     * @public
     */
    DeleteEdgeNodeUnitTemplates(req, cb) {
        let resp = new DeleteEdgeNodeUnitTemplatesResponse();
        this.request("DeleteEdgeNodeUnitTemplates", req, resp, cb);
    }

    /**
     * 重新部署边缘单元指定Grid下应用
     * @param {DeleteEdgeUnitDeployGridItemRequest} req
     * @param {function(string, DeleteEdgeUnitDeployGridItemResponse):void} cb
     * @public
     */
    DeleteEdgeUnitDeployGridItem(req, cb) {
        let resp = new DeleteEdgeUnitDeployGridItemResponse();
        this.request("DeleteEdgeUnitDeployGridItem", req, resp, cb);
    }

    /**
     * 获取应用的Yaml配置
     * @param {DescribeEdgeUnitApplicationYamlRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationYamlResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationYaml(req, cb) {
        let resp = new DescribeEdgeUnitApplicationYamlResponse();
        this.request("DescribeEdgeUnitApplicationYaml", req, resp, cb);
    }

    /**
     * 可视化修改应用配置
     * @param {ModifyEdgeUnitApplicationVisualizationRequest} req
     * @param {function(string, ModifyEdgeUnitApplicationVisualizationResponse):void} cb
     * @public
     */
    ModifyEdgeUnitApplicationVisualization(req, cb) {
        let resp = new ModifyEdgeUnitApplicationVisualizationResponse();
        this.request("ModifyEdgeUnitApplicationVisualization", req, resp, cb);
    }

    /**
     * 删除应用模板
     * @param {DeleteApplicationsRequest} req
     * @param {function(string, DeleteApplicationsResponse):void} cb
     * @public
     */
    DeleteApplications(req, cb) {
        let resp = new DeleteApplicationsResponse();
        this.request("DeleteApplications", req, resp, cb);
    }

    /**
     * 修改应用模板配置
     * @param {ModifyApplicationVisualizationRequest} req
     * @param {function(string, ModifyApplicationVisualizationResponse):void} cb
     * @public
     */
    ModifyApplicationVisualization(req, cb) {
        let resp = new ModifyApplicationVisualizationResponse();
        this.request("ModifyApplicationVisualization", req, resp, cb);
    }

    /**
     * 查询边缘单元Grid的Pod列表
     * @param {DescribeEdgeUnitGridPodsRequest} req
     * @param {function(string, DescribeEdgeUnitGridPodsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitGridPods(req, cb) {
        let resp = new DescribeEdgeUnitGridPodsResponse();
        this.request("DescribeEdgeUnitGridPods", req, resp, cb);
    }

    /**
     * 获取边缘集群默认VPC信息
     * @param {DescribeEdgeDefaultVpcRequest} req
     * @param {function(string, DescribeEdgeDefaultVpcResponse):void} cb
     * @public
     */
    DescribeEdgeDefaultVpc(req, cb) {
        let resp = new DescribeEdgeDefaultVpcResponse();
        this.request("DescribeEdgeDefaultVpc", req, resp, cb);
    }

    /**
     * 查询节点Pod列表
     * @param {DescribeEdgeNodePodsRequest} req
     * @param {function(string, DescribeEdgeNodePodsResponse):void} cb
     * @public
     */
    DescribeEdgeNodePods(req, cb) {
        let resp = new DescribeEdgeNodePodsResponse();
        this.request("DescribeEdgeNodePods", req, resp, cb);
    }

    /**
     * 查询边缘单元NodeUnit列表
     * @param {DescribeNodeUnitRequest} req
     * @param {function(string, DescribeNodeUnitResponse):void} cb
     * @public
     */
    DescribeNodeUnit(req, cb) {
        let resp = new DescribeNodeUnitResponse();
        this.request("DescribeNodeUnit", req, resp, cb);
    }

    /**
     * 检查单元应用的Yaml配置
     * @param {DescribeEdgeUnitApplicationYamlErrorRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationYamlErrorResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationYamlError(req, cb) {
        let resp = new DescribeEdgeUnitApplicationYamlErrorResponse();
        this.request("DescribeEdgeUnitApplicationYamlError", req, resp, cb);
    }

    /**
     * 修改Secret
     * @param {ModifySecretRequest} req
     * @param {function(string, ModifySecretResponse):void} cb
     * @public
     */
    ModifySecret(req, cb) {
        let resp = new ModifySecretResponse();
        this.request("ModifySecret", req, resp, cb);
    }

    /**
     * 获取Secret详情
     * @param {DescribeSecretRequest} req
     * @param {function(string, DescribeSecretResponse):void} cb
     * @public
     */
    DescribeSecret(req, cb) {
        let resp = new DescribeSecretResponse();
        this.request("DescribeSecret", req, resp, cb);
    }

    /**
     * 获取命名空间下的资源信息
     * @param {DescribeNamespaceResourcesRequest} req
     * @param {function(string, DescribeNamespaceResourcesResponse):void} cb
     * @public
     */
    DescribeNamespaceResources(req, cb) {
        let resp = new DescribeNamespaceResourcesResponse();
        this.request("DescribeNamespaceResources", req, resp, cb);
    }

    /**
     * 修改设备信息
     * @param {ModifyIotDeviceRequest} req
     * @param {function(string, ModifyIotDeviceResponse):void} cb
     * @public
     */
    ModifyIotDevice(req, cb) {
        let resp = new ModifyIotDeviceResponse();
        this.request("ModifyIotDevice", req, resp, cb);
    }

    /**
     * 校验ConfigMap的Yaml语法
     * @param {DescribeConfigMapYamlErrorRequest} req
     * @param {function(string, DescribeConfigMapYamlErrorResponse):void} cb
     * @public
     */
    DescribeConfigMapYamlError(req, cb) {
        let resp = new DescribeConfigMapYamlErrorResponse();
        this.request("DescribeConfigMapYamlError", req, resp, cb);
    }

    /**
     * 创建边缘单元NodeGroup
     * @param {CreateEdgeNodeGroupRequest} req
     * @param {function(string, CreateEdgeNodeGroupResponse):void} cb
     * @public
     */
    CreateEdgeNodeGroup(req, cb) {
        let resp = new CreateEdgeNodeGroupResponse();
        this.request("CreateEdgeNodeGroup", req, resp, cb);
    }

    /**
     * 删除边缘单元NodeUnit
     * @param {DeleteNodeUnitRequest} req
     * @param {function(string, DeleteNodeUnitResponse):void} cb
     * @public
     */
    DeleteNodeUnit(req, cb) {
        let resp = new DeleteNodeUnitResponse();
        this.request("DeleteNodeUnit", req, resp, cb);
    }

    /**
     * 获取应用日志
     * @param {DescribeEdgeUnitApplicationLogsRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationLogsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationLogs(req, cb) {
        let resp = new DescribeEdgeUnitApplicationLogsResponse();
        this.request("DescribeEdgeUnitApplicationLogs", req, resp, cb);
    }

    /**
     * 获取边缘节点信息
     * @param {DescribeEdgeNodeRequest} req
     * @param {function(string, DescribeEdgeNodeResponse):void} cb
     * @public
     */
    DescribeEdgeNode(req, cb) {
        let resp = new DescribeEdgeNodeResponse();
        this.request("DescribeEdgeNode", req, resp, cb);
    }

    /**
     * 删除设备
     * @param {DeleteIotDeviceRequest} req
     * @param {function(string, DeleteIotDeviceResponse):void} cb
     * @public
     */
    DeleteIotDevice(req, cb) {
        let resp = new DeleteIotDeviceResponse();
        this.request("DeleteIotDevice", req, resp, cb);
    }

    /**
     * 检查应用模板的Yaml配置
     * @param {DescribeApplicationYamlErrorRequest} req
     * @param {function(string, DescribeApplicationYamlErrorResponse):void} cb
     * @public
     */
    DescribeApplicationYamlError(req, cb) {
        let resp = new DescribeApplicationYamlErrorResponse();
        this.request("DescribeApplicationYamlError", req, resp, cb);
    }

    /**
     * 创建token
     * @param {CreateUserTokenRequest} req
     * @param {function(string, CreateUserTokenResponse):void} cb
     * @public
     */
    CreateUserToken(req, cb) {
        let resp = new CreateUserTokenResponse();
        this.request("CreateUserToken", req, resp, cb);
    }

    /**
     * 查询边缘单元列表
     * @param {DescribeEdgeUnitsCloudRequest} req
     * @param {function(string, DescribeEdgeUnitsCloudResponse):void} cb
     * @public
     */
    DescribeEdgeUnitsCloud(req, cb) {
        let resp = new DescribeEdgeUnitsCloudResponse();
        this.request("DescribeEdgeUnitsCloud", req, resp, cb);
    }

    /**
     * 创建边缘单元
     * @param {CreateEdgeUnitCloudRequest} req
     * @param {function(string, CreateEdgeUnitCloudResponse):void} cb
     * @public
     */
    CreateEdgeUnitCloud(req, cb) {
        let resp = new CreateEdgeUnitCloudResponse();
        this.request("CreateEdgeUnitCloud", req, resp, cb);
    }

    /**
     * 删除Secret
     * @param {DeleteSecretRequest} req
     * @param {function(string, DeleteSecretResponse):void} cb
     * @public
     */
    DeleteSecret(req, cb) {
        let resp = new DeleteSecretResponse();
        this.request("DeleteSecret", req, resp, cb);
    }

    /**
     * 可视化创建应用
     * @param {CreateEdgeUnitApplicationVisualizationRequest} req
     * @param {function(string, CreateEdgeUnitApplicationVisualizationResponse):void} cb
     * @public
     */
    CreateEdgeUnitApplicationVisualization(req, cb) {
        let resp = new CreateEdgeUnitApplicationVisualizationResponse();
        this.request("CreateEdgeUnitApplicationVisualization", req, resp, cb);
    }

    /**
     * 开关消息路由
     * @param {SetRouteOnOffRequest} req
     * @param {function(string, SetRouteOnOffResponse):void} cb
     * @public
     */
    SetRouteOnOff(req, cb) {
        let resp = new SetRouteOnOffResponse();
        this.request("SetRouteOnOff", req, resp, cb);
    }

    /**
     * 查询边缘集群NodeGroup
     * @param {DescribeEdgeUnitNodeGroupRequest} req
     * @param {function(string, DescribeEdgeUnitNodeGroupResponse):void} cb
     * @public
     */
    DescribeEdgeUnitNodeGroup(req, cb) {
        let resp = new DescribeEdgeUnitNodeGroupResponse();
        this.request("DescribeEdgeUnitNodeGroup", req, resp, cb);
    }

    /**
     * 删除消息路由
     * @param {DeleteMessageRouteRequest} req
     * @param {function(string, DeleteMessageRouteResponse):void} cb
     * @public
     */
    DeleteMessageRoute(req, cb) {
        let resp = new DeleteMessageRouteResponse();
        this.request("DeleteMessageRoute", req, resp, cb);
    }

    /**
     * 从组件市场选中组件并添加到应用模板列表
     * @param {ApplyMarketComponentRequest} req
     * @param {function(string, ApplyMarketComponentResponse):void} cb
     * @public
     */
    ApplyMarketComponent(req, cb) {
        let resp = new ApplyMarketComponentResponse();
        this.request("ApplyMarketComponent", req, resp, cb);
    }

    /**
     * 获取应用模板可视化配置信息
     * @param {DescribeApplicationVisualizationRequest} req
     * @param {function(string, DescribeApplicationVisualizationResponse):void} cb
     * @public
     */
    DescribeApplicationVisualization(req, cb) {
        let resp = new DescribeApplicationVisualizationResponse();
        this.request("DescribeApplicationVisualization", req, resp, cb);
    }

    /**
     * 查询边缘单元EdgeUnit模板列表
     * @param {DescribeEdgeUnitNodeUnitTemplatesRequest} req
     * @param {function(string, DescribeEdgeUnitNodeUnitTemplatesResponse):void} cb
     * @public
     */
    DescribeEdgeUnitNodeUnitTemplates(req, cb) {
        let resp = new DescribeEdgeUnitNodeUnitTemplatesResponse();
        this.request("DescribeEdgeUnitNodeUnitTemplates", req, resp, cb);
    }

    /**
     * 获取组件市场的组件信息
     * @param {GetMarketComponentRequest} req
     * @param {function(string, GetMarketComponentResponse):void} cb
     * @public
     */
    GetMarketComponent(req, cb) {
        let resp = new GetMarketComponentResponse();
        this.request("GetMarketComponent", req, resp, cb);
    }

    /**
     * 获取命名空间列表信息
     * @param {DescribeNamespacesRequest} req
     * @param {function(string, DescribeNamespacesResponse):void} cb
     * @public
     */
    DescribeNamespaces(req, cb) {
        let resp = new DescribeNamespacesResponse();
        this.request("DescribeNamespaces", req, resp, cb);
    }

    /**
     * 查询边缘操作日志
     * @param {DescribeEdgeOperationLogsRequest} req
     * @param {function(string, DescribeEdgeOperationLogsResponse):void} cb
     * @public
     */
    DescribeEdgeOperationLogs(req, cb) {
        let resp = new DescribeEdgeOperationLogsResponse();
        this.request("DescribeEdgeOperationLogs", req, resp, cb);
    }

    /**
     * 创建Secret
     * @param {CreateSecretRequest} req
     * @param {function(string, CreateSecretResponse):void} cb
     * @public
     */
    CreateSecret(req, cb) {
        let resp = new CreateSecretResponse();
        this.request("CreateSecret", req, resp, cb);
    }

    /**
     * 查询边缘单元Pod
     * @param {DescribeEdgePodRequest} req
     * @param {function(string, DescribeEdgePodResponse):void} cb
     * @public
     */
    DescribeEdgePod(req, cb) {
        let resp = new DescribeEdgePodResponse();
        this.request("DescribeEdgePod", req, resp, cb);
    }

    /**
     * 获取应用下Pod状态
     * @param {DescribeEdgeUnitApplicationPodsRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationPodsResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationPods(req, cb) {
        let resp = new DescribeEdgeUnitApplicationPodsResponse();
        this.request("DescribeEdgeUnitApplicationPods", req, resp, cb);
    }

    /**
     * 删除应用列表
     * @param {DeleteEdgeUnitApplicationsRequest} req
     * @param {function(string, DeleteEdgeUnitApplicationsResponse):void} cb
     * @public
     */
    DeleteEdgeUnitApplications(req, cb) {
        let resp = new DeleteEdgeUnitApplicationsResponse();
        this.request("DeleteEdgeUnitApplications", req, resp, cb);
    }

    /**
     * 查询边缘单元Grid列表
     * @param {DescribeEdgeUnitDeployGridRequest} req
     * @param {function(string, DescribeEdgeUnitDeployGridResponse):void} cb
     * @public
     */
    DescribeEdgeUnitDeployGrid(req, cb) {
        let resp = new DescribeEdgeUnitDeployGridResponse();
        this.request("DescribeEdgeUnitDeployGrid", req, resp, cb);
    }

    /**
     * 建立消息路由
     * @param {BuildMessageRouteRequest} req
     * @param {function(string, BuildMessageRouteResponse):void} cb
     * @public
     */
    BuildMessageRoute(req, cb) {
        let resp = new BuildMessageRouteResponse();
        this.request("BuildMessageRoute", req, resp, cb);
    }

    /**
     * 批量删除边缘节点
     * @param {DeleteEdgeNodesRequest} req
     * @param {function(string, DeleteEdgeNodesResponse):void} cb
     * @public
     */
    DeleteEdgeNodes(req, cb) {
        let resp = new DeleteEdgeNodesResponse();
        this.request("DeleteEdgeNodes", req, resp, cb);
    }

    /**
     * 自动获取Draco设备的安装包
     * @param {DescribeDracoEdgeNodeInstallerRequest} req
     * @param {function(string, DescribeDracoEdgeNodeInstallerResponse):void} cb
     * @public
     */
    DescribeDracoEdgeNodeInstaller(req, cb) {
        let resp = new DescribeDracoEdgeNodeInstallerResponse();
        this.request("DescribeDracoEdgeNodeInstaller", req, resp, cb);
    }

    /**
     * 创建ConfigMap
     * @param {CreateConfigMapRequest} req
     * @param {function(string, CreateConfigMapResponse):void} cb
     * @public
     */
    CreateConfigMap(req, cb) {
        let resp = new CreateConfigMapResponse();
        this.request("CreateConfigMap", req, resp, cb);
    }

    /**
     * 查询边缘集群详情
     * @param {DescribeEdgeUnitCloudRequest} req
     * @param {function(string, DescribeEdgeUnitCloudResponse):void} cb
     * @public
     */
    DescribeEdgeUnitCloud(req, cb) {
        let resp = new DescribeEdgeUnitCloudResponse();
        this.request("DescribeEdgeUnitCloud", req, resp, cb);
    }

    /**
     * 删除命名空间
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * 获取消息路由列表
     * @param {DescribeMessageRouteListRequest} req
     * @param {function(string, DescribeMessageRouteListResponse):void} cb
     * @public
     */
    DescribeMessageRouteList(req, cb) {
        let resp = new DescribeMessageRouteListResponse();
        this.request("DescribeMessageRouteList", req, resp, cb);
    }

    /**
     * 编辑边缘节点标签
     * @param {ModifyEdgeNodeLabelsRequest} req
     * @param {function(string, ModifyEdgeNodeLabelsResponse):void} cb
     * @public
     */
    ModifyEdgeNodeLabels(req, cb) {
        let resp = new ModifyEdgeNodeLabelsResponse();
        this.request("ModifyEdgeNodeLabels", req, resp, cb);
    }

    /**
     * 查询边缘单元监控数据
     * @param {DescribeMonitorMetricsRequest} req
     * @param {function(string, DescribeMonitorMetricsResponse):void} cb
     * @public
     */
    DescribeMonitorMetrics(req, cb) {
        let resp = new DescribeMonitorMetricsResponse();
        this.request("DescribeMonitorMetrics", req, resp, cb);
    }

    /**
     * 获取ConfigMap列表
     * @param {DescribeConfigMapsRequest} req
     * @param {function(string, DescribeConfigMapsResponse):void} cb
     * @public
     */
    DescribeConfigMaps(req, cb) {
        let resp = new DescribeConfigMapsResponse();
        this.request("DescribeConfigMaps", req, resp, cb);
    }

    /**
     * 校验Secret的Yaml语法
     * @param {DescribeSecretYamlErrorRequest} req
     * @param {function(string, DescribeSecretYamlErrorResponse):void} cb
     * @public
     */
    DescribeSecretYamlError(req, cb) {
        let resp = new DescribeSecretYamlErrorResponse();
        this.request("DescribeSecretYamlError", req, resp, cb);
    }

    /**
     * 更新边缘单元信息
     * @param {ModifyEdgeUnitCloudApiRequest} req
     * @param {function(string, ModifyEdgeUnitCloudApiResponse):void} cb
     * @public
     */
    ModifyEdgeUnitCloudApi(req, cb) {
        let resp = new ModifyEdgeUnitCloudApiResponse();
        this.request("ModifyEdgeUnitCloudApi", req, resp, cb);
    }

    /**
     * 修改应用模板基本信息
     * @param {ModifyApplicationBasicInfoRequest} req
     * @param {function(string, ModifyApplicationBasicInfoResponse):void} cb
     * @public
     */
    ModifyApplicationBasicInfo(req, cb) {
        let resp = new ModifyApplicationBasicInfoResponse();
        this.request("ModifyApplicationBasicInfo", req, resp, cb);
    }

    /**
     * 查询边缘单元指定Grid下的部署应用列表
     * @param {DescribeEdgeUnitDeployGridItemRequest} req
     * @param {function(string, DescribeEdgeUnitDeployGridItemResponse):void} cb
     * @public
     */
    DescribeEdgeUnitDeployGridItem(req, cb) {
        let resp = new DescribeEdgeUnitDeployGridItemResponse();
        this.request("DescribeEdgeUnitDeployGridItem", req, resp, cb);
    }

    /**
     * 查询应用模板Yaml
     * @param {DescribeApplicationYamlRequest} req
     * @param {function(string, DescribeApplicationYamlResponse):void} cb
     * @public
     */
    DescribeApplicationYaml(req, cb) {
        let resp = new DescribeApplicationYamlResponse();
        this.request("DescribeApplicationYaml", req, resp, cb);
    }

    /**
     * 修改单元应用基本信息
     * @param {ModifyEdgeUnitApplicationBasicInfoRequest} req
     * @param {function(string, ModifyEdgeUnitApplicationBasicInfoResponse):void} cb
     * @public
     */
    ModifyEdgeUnitApplicationBasicInfo(req, cb) {
        let resp = new ModifyEdgeUnitApplicationBasicInfoResponse();
        this.request("ModifyEdgeUnitApplicationBasicInfo", req, resp, cb);
    }

    /**
     * 创建可视化创建应用模板
     * @param {CreateApplicationVisualizationRequest} req
     * @param {function(string, CreateApplicationVisualizationResponse):void} cb
     * @public
     */
    CreateApplicationVisualization(req, cb) {
        let resp = new CreateApplicationVisualizationResponse();
        this.request("CreateApplicationVisualization", req, resp, cb);
    }

    /**
     * 获取ConfigMap详情
     * @param {DescribeConfigMapRequest} req
     * @param {function(string, DescribeConfigMapResponse):void} cb
     * @public
     */
    DescribeConfigMap(req, cb) {
        let resp = new DescribeConfigMapResponse();
        this.request("DescribeConfigMap", req, resp, cb);
    }

    /**
     * 查询节点Pod内的容器列表
     * @param {DescribeEdgeNodePodContainersRequest} req
     * @param {function(string, DescribeEdgeNodePodContainersResponse):void} cb
     * @public
     */
    DescribeEdgeNodePodContainers(req, cb) {
        let resp = new DescribeEdgeNodePodContainersResponse();
        this.request("DescribeEdgeNodePodContainers", req, resp, cb);
    }

    /**
     * 获取应用容器状态
     * @param {DescribeEdgeUnitApplicationPodContainersRequest} req
     * @param {function(string, DescribeEdgeUnitApplicationPodContainersResponse):void} cb
     * @public
     */
    DescribeEdgeUnitApplicationPodContainers(req, cb) {
        let resp = new DescribeEdgeUnitApplicationPodContainersResponse();
        this.request("DescribeEdgeUnitApplicationPodContainers", req, resp, cb);
    }

    /**
     * 批量预注册节点
     * @param {CreateEdgeNodeBatchRequest} req
     * @param {function(string, CreateEdgeNodeBatchResponse):void} cb
     * @public
     */
    CreateEdgeNodeBatch(req, cb) {
        let resp = new CreateEdgeNodeBatchResponse();
        this.request("CreateEdgeNodeBatch", req, resp, cb);
    }

    /**
     * 创建消息路由
     * @param {CreateMessageRouteRequest} req
     * @param {function(string, CreateMessageRouteResponse):void} cb
     * @public
     */
    CreateMessageRoute(req, cb) {
        let resp = new CreateMessageRouteResponse();
        this.request("CreateMessageRoute", req, resp, cb);
    }

    /**
     * 查询用户的资源限制
     * @param {DescribeYeheResourceLimitRequest} req
     * @param {function(string, DescribeYeheResourceLimitResponse):void} cb
     * @public
     */
    DescribeYeheResourceLimit(req, cb) {
        let resp = new DescribeYeheResourceLimitResponse();
        this.request("DescribeYeheResourceLimit", req, resp, cb);
    }

    /**
     * Yaml方式修改应用配置
     * @param {ModifyEdgeUnitApplicationYamlRequest} req
     * @param {function(string, ModifyEdgeUnitApplicationYamlResponse):void} cb
     * @public
     */
    ModifyEdgeUnitApplicationYaml(req, cb) {
        let resp = new ModifyEdgeUnitApplicationYamlResponse();
        this.request("ModifyEdgeUnitApplicationYaml", req, resp, cb);
    }

    /**
     * 删除边缘单元
     * @param {DeleteEdgeUnitCloudRequest} req
     * @param {function(string, DeleteEdgeUnitCloudResponse):void} cb
     * @public
     */
    DeleteEdgeUnitCloud(req, cb) {
        let resp = new DeleteEdgeUnitCloudResponse();
        this.request("DeleteEdgeUnitCloud", req, resp, cb);
    }

    /**
     * 查询预注册节点列表
     * @param {DescribeEdgeSnNodesRequest} req
     * @param {function(string, DescribeEdgeSnNodesResponse):void} cb
     * @public
     */
    DescribeEdgeSnNodes(req, cb) {
        let resp = new DescribeEdgeSnNodesResponse();
        this.request("DescribeEdgeSnNodes", req, resp, cb);
    }


}
module.exports = IecpClient;
