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
const EnableVpcCniNetworkTypeRequest = models.EnableVpcCniNetworkTypeRequest;
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const ModifyNodePoolDesiredCapacityAboutAsgResponse = models.ModifyNodePoolDesiredCapacityAboutAsgResponse;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const CreateClusterRouteRequest = models.CreateClusterRouteRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AutoscalingAdded = models.AutoscalingAdded;
const DescribePrometheusTemplateSyncResponse = models.DescribePrometheusTemplateSyncResponse;
const UpdateEKSClusterRequest = models.UpdateEKSClusterRequest;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const DescribeClusterCommonNamesRequest = models.DescribeClusterCommonNamesRequest;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const PrometheusTemplateModify = models.PrometheusTemplateModify;
const PrometheusNotification = models.PrometheusNotification;
const ClusterVersion = models.ClusterVersion;
const CreatePrometheusTemplateRequest = models.CreatePrometheusTemplateRequest;
const DeletePrometheusTemplateRequest = models.DeletePrometheusTemplateRequest;
const InstanceUpgradeProgressItem = models.InstanceUpgradeProgressItem;
const NodePool = models.NodePool;
const DescribeEKSClustersResponse = models.DescribeEKSClustersResponse;
const RouteTableInfo = models.RouteTableInfo;
const IPAddress = models.IPAddress;
const DeleteClusterRequest = models.DeleteClusterRequest;
const PrometheusTarget = models.PrometheusTarget;
const CreateEKSClusterRequest = models.CreateEKSClusterRequest;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const Tag = models.Tag;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const PrometheusAlertHistoryItem = models.PrometheusAlertHistoryItem;
const CreateClusterRouteResponse = models.CreateClusterRouteResponse;
const PrometheusTemplateSyncTarget = models.PrometheusTemplateSyncTarget;
const DescribePrometheusTemplatesRequest = models.DescribePrometheusTemplatesRequest;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const EnableVpcCniNetworkTypeResponse = models.EnableVpcCniNetworkTypeResponse;
const DescribePrometheusAlertRuleResponse = models.DescribePrometheusAlertRuleResponse;
const ClusterAsGroup = models.ClusterAsGroup;
const Instance = models.Instance;
const PrometheusAlertRuleDetail = models.PrometheusAlertRuleDetail;
const UpgradeAbleInstancesItem = models.UpgradeAbleInstancesItem;
const CreateClusterNodePoolFromExistingAsgRequest = models.CreateClusterNodePoolFromExistingAsgRequest;
const PrometheusAlertRule = models.PrometheusAlertRule;
const DescribePrometheusAgentInstancesRequest = models.DescribePrometheusAgentInstancesRequest;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const UpgradeClusterInstancesRequest = models.UpgradeClusterInstancesRequest;
const ClusterPublicLB = models.ClusterPublicLB;
const ExtensionAddon = models.ExtensionAddon;
const RegionInstance = models.RegionInstance;
const Label = models.Label;
const DescribePrometheusAlertHistoryRequest = models.DescribePrometheusAlertHistoryRequest;
const DeletePrometheusTemplateSyncRequest = models.DeletePrometheusTemplateSyncRequest;
const SetNodePoolNodeProtectionResponse = models.SetNodePoolNodeProtectionResponse;
const DescribePrometheusTemplatesResponse = models.DescribePrometheusTemplatesResponse;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const SyncPrometheusTemplateRequest = models.SyncPrometheusTemplateRequest;
const ClusterBasicSettings = models.ClusterBasicSettings;
const CreatePrometheusDashboardResponse = models.CreatePrometheusDashboardResponse;
const DescribeEKSClusterCredentialResponse = models.DescribeEKSClusterCredentialResponse;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const UpgradeNodeResetParam = models.UpgradeNodeResetParam;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const ManuallyAdded = models.ManuallyAdded;
const DeleteEKSClusterResponse = models.DeleteEKSClusterResponse;
const PrometheusConfigItem = models.PrometheusConfigItem;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const CreatePrometheusTemplateResponse = models.CreatePrometheusTemplateResponse;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const RouteInfo = models.RouteInfo;
const ClusterInternalLB = models.ClusterInternalLB;
const Taint = models.Taint;
const CheckInstancesUpgradeAbleRequest = models.CheckInstancesUpgradeAbleRequest;
const ExistedInstance = models.ExistedInstance;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const DescribePrometheusAlertRuleRequest = models.DescribePrometheusAlertRuleRequest;
const DescribeEKSClusterCredentialRequest = models.DescribeEKSClusterCredentialRequest;
const GetUpgradeInstanceProgressRequest = models.GetUpgradeInstanceProgressRequest;
const ModifyPrometheusTemplateRequest = models.ModifyPrometheusTemplateRequest;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const UpdateEKSClusterResponse = models.UpdateEKSClusterResponse;
const TagSpecification = models.TagSpecification;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClusterCredential = models.ClusterCredential;
const LoginSettings = models.LoginSettings;
const DescribePrometheusOverviewsRequest = models.DescribePrometheusOverviewsRequest;
const ClusterExtraArgs = models.ClusterExtraArgs;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const SyncPrometheusTemplateResponse = models.SyncPrometheusTemplateResponse;
const DataDisk = models.DataDisk;
const DeleteEKSClusterRequest = models.DeleteEKSClusterRequest;
const GetUpgradeInstanceProgressResponse = models.GetUpgradeInstanceProgressResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const CreateEKSClusterResponse = models.CreateEKSClusterResponse;
const DescribeEKSClustersRequest = models.DescribeEKSClustersRequest;
const ResourceDeleteOption = models.ResourceDeleteOption;
const DnsServerConf = models.DnsServerConf;
const EksCluster = models.EksCluster;
const CreateClusterNodePoolFromExistingAsgResponse = models.CreateClusterNodePoolFromExistingAsgResponse;
const DescribeEnableVpcCniProgressRequest = models.DescribeEnableVpcCniProgressRequest;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const EnhancedService = models.EnhancedService;
const CreateClusterAsGroupRequest = models.CreateClusterAsGroupRequest;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const TaskStepInfo = models.TaskStepInfo;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DescribeAvailableClusterVersionRequest = models.DescribeAvailableClusterVersionRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const CreateClusterAsGroupResponse = models.CreateClusterAsGroupResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const DescribePrometheusAgentsRequest = models.DescribePrometheusAgentsRequest;
const DescribeEnableVpcCniProgressResponse = models.DescribeEnableVpcCniProgressResponse;
const PrometheusAgentOverview = models.PrometheusAgentOverview;
const Filter = models.Filter;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const ImageInstance = models.ImageInstance;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const ModifyPrometheusTemplateResponse = models.ModifyPrometheusTemplateResponse;
const DeletePrometheusTemplateResponse = models.DeletePrometheusTemplateResponse;
const DescribePrometheusTemplateSyncRequest = models.DescribePrometheusTemplateSyncRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const CheckInstancesUpgradeAbleResponse = models.CheckInstancesUpgradeAbleResponse;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const UpgradeClusterInstancesResponse = models.UpgradeClusterInstancesResponse;
const CreatePrometheusDashboardRequest = models.CreatePrometheusDashboardRequest;
const DescribePrometheusAgentsResponse = models.DescribePrometheusAgentsResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const DescribePrometheusAgentInstancesResponse = models.DescribePrometheusAgentInstancesResponse;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const PrometheusJobTargets = models.PrometheusJobTargets;
const ModifyClusterAsGroupOptionAttributeResponse = models.ModifyClusterAsGroupOptionAttributeResponse;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const AddVpcCniSubnetsResponse = models.AddVpcCniSubnetsResponse;
const ModifyNodePoolDesiredCapacityAboutAsgRequest = models.ModifyNodePoolDesiredCapacityAboutAsgRequest;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const ModifyClusterAsGroupOptionAttributeRequest = models.ModifyClusterAsGroupOptionAttributeRequest;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const InstanceUpgradeClusterStatus = models.InstanceUpgradeClusterStatus;
const RunInstancesForNode = models.RunInstancesForNode;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const DescribePrometheusOverviewsResponse = models.DescribePrometheusOverviewsResponse;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const DescribePrometheusTargetsRequest = models.DescribePrometheusTargetsRequest;
const DescribePrometheusTargetsResponse = models.DescribePrometheusTargetsResponse;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const SetNodePoolNodeProtectionRequest = models.SetNodePoolNodeProtectionRequest;
const DeletePrometheusTemplateSyncResponse = models.DeletePrometheusTemplateSyncResponse;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const DescribeAvailableClusterVersionResponse = models.DescribeAvailableClusterVersionResponse;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const AddVpcCniSubnetsRequest = models.AddVpcCniSubnetsRequest;
const InstanceUpgradePreCheckResultItem = models.InstanceUpgradePreCheckResultItem;
const DescribePrometheusAlertHistoryResponse = models.DescribePrometheusAlertHistoryResponse;
const DescribeClusterCommonNamesResponse = models.DescribeClusterCommonNamesResponse;
const ExistedInstancesPara = models.ExistedInstancesPara;
const CommonName = models.CommonName;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const PrometheusTemplate = models.PrometheusTemplate;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const UpdateClusterVersionResponse = models.UpdateClusterVersionResponse;
const RouteTableConflict = models.RouteTableConflict;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const NodePoolOption = models.NodePoolOption;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const UpdateClusterVersionRequest = models.UpdateClusterVersionRequest;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const PrometheusInstanceOverview = models.PrometheusInstanceOverview;
const NodeCountSummary = models.NodeCountSummary;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const InstanceUpgradePreCheckResult = models.InstanceUpgradePreCheckResult;
const DescribeClusterNodePoolDetailResponse = models.DescribeClusterNodePoolDetailResponse;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
    }
    
    /**
     * 拉取模板列表，默认模板将总是在最前面
     * @param {DescribePrometheusTemplatesRequest} req
     * @param {function(string, DescribePrometheusTemplatesResponse):void} cb
     * @public
     */
    DescribePrometheusTemplates(req, cb) {
        let resp = new DescribePrometheusTemplatesResponse();
        this.request("DescribePrometheusTemplates", req, resp, cb);
    }

    /**
     * 查询弹性集群列表
     * @param {DescribeEKSClustersRequest} req
     * @param {function(string, DescribeEKSClustersResponse):void} cb
     * @public
     */
    DescribeEKSClusters(req, cb) {
        let resp = new DescribeEKSClustersResponse();
        this.request("DescribeEKSClusters", req, resp, cb);
    }

    /**
     * 检查给定节点列表中哪些是可升级的 
     * @param {CheckInstancesUpgradeAbleRequest} req
     * @param {function(string, CheckInstancesUpgradeAbleResponse):void} cb
     * @public
     */
    CheckInstancesUpgradeAble(req, cb) {
        let resp = new CheckInstancesUpgradeAbleResponse();
        this.request("CheckInstancesUpgradeAble", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * 创建grafana监控面板
     * @param {CreatePrometheusDashboardRequest} req
     * @param {function(string, CreatePrometheusDashboardResponse):void} cb
     * @public
     */
    CreatePrometheusDashboard(req, cb) {
        let resp = new CreatePrometheusDashboardResponse();
        this.request("CreatePrometheusDashboard", req, resp, cb);
    }

    /**
     * 获取实例列表
     * @param {DescribePrometheusOverviewsRequest} req
     * @param {function(string, DescribePrometheusOverviewsResponse):void} cb
     * @public
     */
    DescribePrometheusOverviews(req, cb) {
        let resp = new DescribePrometheusOverviewsResponse();
        this.request("DescribePrometheusOverviews", req, resp, cb);
    }

    /**
     * 创建弹性集群
     * @param {CreateEKSClusterRequest} req
     * @param {function(string, CreateEKSClusterResponse):void} cb
     * @public
     */
    CreateEKSCluster(req, cb) {
        let resp = new CreateEKSClusterResponse();
        this.request("CreateEKSCluster", req, resp, cb);
    }

    /**
     * 查询节点池详情
     * @param {DescribeClusterNodePoolDetailRequest} req
     * @param {function(string, DescribeClusterNodePoolDetailResponse):void} cb
     * @public
     */
    DescribeClusterNodePoolDetail(req, cb) {
        let resp = new DescribeClusterNodePoolDetailResponse();
        this.request("DescribeClusterNodePoolDetail", req, resp, cb);
    }

    /**
     * 删除一个云原生Prometheus配置模板
     * @param {DeletePrometheusTemplateRequest} req
     * @param {function(string, DeletePrometheusTemplateResponse):void} cb
     * @public
     */
    DeletePrometheusTemplate(req, cb) {
        let resp = new DeletePrometheusTemplateResponse();
        this.request("DeletePrometheusTemplate", req, resp, cb);
    }

    /**
     * 获取被关联集群列表
     * @param {DescribePrometheusAgentsRequest} req
     * @param {function(string, DescribePrometheusAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusAgents(req, cb) {
        let resp = new DescribePrometheusAgentsResponse();
        this.request("DescribePrometheusAgents", req, resp, cb);
    }

    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     * @param {DeletePrometheusTemplateSyncRequest} req
     * @param {function(string, DeletePrometheusTemplateSyncResponse):void} cb
     * @public
     */
    DeletePrometheusTemplateSync(req, cb) {
        let resp = new DeletePrometheusTemplateSyncResponse();
        this.request("DeletePrometheusTemplateSync", req, resp, cb);
    }

    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {DeleteClusterEndpointRequest} req
     * @param {function(string, DeleteClusterEndpointResponse):void} cb
     * @public
     */
    DeleteClusterEndpoint(req, cb) {
        let resp = new DeleteClusterEndpointResponse();
        this.request("DeleteClusterEndpoint", req, resp, cb);
    }

    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     * @param {DescribeEnableVpcCniProgressRequest} req
     * @param {function(string, DescribeEnableVpcCniProgressResponse):void} cb
     * @public
     */
    DescribeEnableVpcCniProgress(req, cb) {
        let resp = new DescribeEnableVpcCniProgressResponse();
        this.request("DescribeEnableVpcCniProgress", req, resp, cb);
    }

    /**
     * 同步模板到实例或者集群
     * @param {SyncPrometheusTemplateRequest} req
     * @param {function(string, SyncPrometheusTemplateResponse):void} cb
     * @public
     */
    SyncPrometheusTemplate(req, cb) {
        let resp = new SyncPrometheusTemplateResponse();
        this.request("SyncPrometheusTemplate", req, resp, cb);
    }

    /**
     * 获取告警历史
     * @param {DescribePrometheusAlertHistoryRequest} req
     * @param {function(string, DescribePrometheusAlertHistoryResponse):void} cb
     * @public
     */
    DescribePrometheusAlertHistory(req, cb) {
        let resp = new DescribePrometheusAlertHistoryResponse();
        this.request("DescribePrometheusAlertHistory", req, resp, cb);
    }

    /**
     * 扩展(新建)集群节点
     * @param {CreateClusterInstancesRequest} req
     * @param {function(string, CreateClusterInstancesResponse):void} cb
     * @public
     */
    CreateClusterInstances(req, cb) {
        let resp = new CreateClusterInstancesResponse();
        this.request("CreateClusterInstances", req, resp, cb);
    }

    /**
     * 获取targets信息
     * @param {DescribePrometheusTargetsRequest} req
     * @param {function(string, DescribePrometheusTargetsResponse):void} cb
     * @public
     */
    DescribePrometheusTargets(req, cb) {
        let resp = new DescribePrometheusTargetsResponse();
        this.request("DescribePrometheusTargets", req, resp, cb);
    }

    /**
     * 修改集群属性
     * @param {ModifyClusterAttributeRequest} req
     * @param {function(string, ModifyClusterAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAttribute(req, cb) {
        let resp = new ModifyClusterAttributeResponse();
        this.request("ModifyClusterAttribute", req, resp, cb);
    }

    /**
     * 删除集群伸缩组
     * @param {DeleteClusterAsGroupsRequest} req
     * @param {function(string, DeleteClusterAsGroupsResponse):void} cb
     * @public
     */
    DeleteClusterAsGroups(req, cb) {
        let resp = new DeleteClusterAsGroupsResponse();
        this.request("DeleteClusterAsGroups", req, resp, cb);
    }

    /**
     * 删除集群路由
     * @param {DeleteClusterRouteRequest} req
     * @param {function(string, DeleteClusterRouteResponse):void} cb
     * @public
     */
    DeleteClusterRoute(req, cb) {
        let resp = new DeleteClusterRouteResponse();
        this.request("DeleteClusterRoute", req, resp, cb);
    }

    /**
     * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
     * @param {EnableVpcCniNetworkTypeRequest} req
     * @param {function(string, EnableVpcCniNetworkTypeResponse):void} cb
     * @public
     */
    EnableVpcCniNetworkType(req, cb) {
        let resp = new EnableVpcCniNetworkTypeResponse();
        this.request("EnableVpcCniNetworkType", req, resp, cb);
    }

    /**
     * 修改模板内容
     * @param {ModifyPrometheusTemplateRequest} req
     * @param {function(string, ModifyPrometheusTemplateResponse):void} cb
     * @public
     */
    ModifyPrometheusTemplate(req, cb) {
        let resp = new ModifyPrometheusTemplateResponse();
        this.request("ModifyPrometheusTemplate", req, resp, cb);
    }

    /**
     * 仅能设置节点池中处于伸缩组的节点
     * @param {SetNodePoolNodeProtectionRequest} req
     * @param {function(string, SetNodePoolNodeProtectionResponse):void} cb
     * @public
     */
    SetNodePoolNodeProtection(req, cb) {
        let resp = new SetNodePoolNodeProtectionResponse();
        this.request("SetNodePoolNodeProtection", req, resp, cb);
    }

    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @param {DescribeClusterEndpointVipStatusRequest} req
     * @param {function(string, DescribeClusterEndpointVipStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointVipStatus(req, cb) {
        let resp = new DescribeClusterEndpointVipStatusResponse();
        this.request("DescribeClusterEndpointVipStatus", req, resp, cb);
    }

    /**
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     * @param {AddVpcCniSubnetsRequest} req
     * @param {function(string, AddVpcCniSubnetsResponse):void} cb
     * @public
     */
    AddVpcCniSubnets(req, cb) {
        let resp = new AddVpcCniSubnetsResponse();
        this.request("AddVpcCniSubnets", req, resp, cb);
    }

    /**
     * 删除集群(YUNAPI V3版本)
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     * @param {DescribeClusterCommonNamesRequest} req
     * @param {function(string, DescribeClusterCommonNamesResponse):void} cb
     * @public
     */
    DescribeClusterCommonNames(req, cb) {
        let resp = new DescribeClusterCommonNamesResponse();
        this.request("DescribeClusterCommonNames", req, resp, cb);
    }

    /**
     * 为已经存在的集群创建伸缩组
     * @param {CreateClusterAsGroupRequest} req
     * @param {function(string, CreateClusterAsGroupResponse):void} cb
     * @public
     */
    CreateClusterAsGroup(req, cb) {
        let resp = new CreateClusterAsGroupResponse();
        this.request("CreateClusterAsGroup", req, resp, cb);
    }

    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     * @param {AcquireClusterAdminRoleRequest} req
     * @param {function(string, AcquireClusterAdminRoleResponse):void} cb
     * @public
     */
    AcquireClusterAdminRole(req, cb) {
        let resp = new AcquireClusterAdminRoleResponse();
        this.request("AcquireClusterAdminRole", req, resp, cb);
    }

    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @param {DescribeExistedInstancesRequest} req
     * @param {function(string, DescribeExistedInstancesResponse):void} cb
     * @public
     */
    DescribeExistedInstances(req, cb) {
        let resp = new DescribeExistedInstancesResponse();
        this.request("DescribeExistedInstances", req, resp, cb);
    }

    /**
     * 创建集群路由
     * @param {CreateClusterRouteRequest} req
     * @param {function(string, CreateClusterRouteResponse):void} cb
     * @public
     */
    CreateClusterRoute(req, cb) {
        let resp = new CreateClusterRouteResponse();
        this.request("CreateClusterRoute", req, resp, cb);
    }

    /**
     * 查询节点池列表
     * @param {DescribeClusterNodePoolsRequest} req
     * @param {function(string, DescribeClusterNodePoolsResponse):void} cb
     * @public
     */
    DescribeClusterNodePools(req, cb) {
        let resp = new DescribeClusterNodePoolsResponse();
        this.request("DescribeClusterNodePools", req, resp, cb);
    }

    /**
     * 创建集群路由表
     * @param {CreateClusterRouteTableRequest} req
     * @param {function(string, CreateClusterRouteTableResponse):void} cb
     * @public
     */
    CreateClusterRouteTable(req, cb) {
        let resp = new CreateClusterRouteTableResponse();
        this.request("CreateClusterRouteTable", req, resp, cb);
    }

    /**
     * 编辑节点池
     * @param {ModifyClusterNodePoolRequest} req
     * @param {function(string, ModifyClusterNodePoolResponse):void} cb
     * @public
     */
    ModifyClusterNodePool(req, cb) {
        let resp = new ModifyClusterNodePoolResponse();
        this.request("ModifyClusterNodePool", req, resp, cb);
    }

    /**
     * 获得节点升级当前的进度 
     * @param {GetUpgradeInstanceProgressRequest} req
     * @param {function(string, GetUpgradeInstanceProgressResponse):void} cb
     * @public
     */
    GetUpgradeInstanceProgress(req, cb) {
        let resp = new GetUpgradeInstanceProgressResponse();
        this.request("GetUpgradeInstanceProgress", req, resp, cb);
    }

    /**
     * 集群弹性伸缩配置
     * @param {DescribeClusterAsGroupOptionRequest} req
     * @param {function(string, DescribeClusterAsGroupOptionResponse):void} cb
     * @public
     */
    DescribeClusterAsGroupOption(req, cb) {
        let resp = new DescribeClusterAsGroupOptionResponse();
        this.request("DescribeClusterAsGroupOption", req, resp, cb);
    }

    /**
     * 将集群内节点移入节点池
     * @param {AddNodeToNodePoolRequest} req
     * @param {function(string, AddNodeToNodePoolResponse):void} cb
     * @public
     */
    AddNodeToNodePool(req, cb) {
        let resp = new AddNodeToNodePoolResponse();
        this.request("AddNodeToNodePool", req, resp, cb);
    }

    /**
     * 创建一个云原生Prometheus模板实例
     * @param {CreatePrometheusTemplateRequest} req
     * @param {function(string, CreatePrometheusTemplateResponse):void} cb
     * @public
     */
    CreatePrometheusTemplate(req, cb) {
        let resp = new CreatePrometheusTemplateResponse();
        this.request("CreatePrometheusTemplate", req, resp, cb);
    }

    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {DescribeClusterEndpointStatusRequest} req
     * @param {function(string, DescribeClusterEndpointStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointStatus(req, cb) {
        let resp = new DescribeClusterEndpointStatusResponse();
        this.request("DescribeClusterEndpointStatus", req, resp, cb);
    }

    /**
     * 集群关联的伸缩组列表
     * @param {DescribeClusterAsGroupsRequest} req
     * @param {function(string, DescribeClusterAsGroupsResponse):void} cb
     * @public
     */
    DescribeClusterAsGroups(req, cb) {
        let resp = new DescribeClusterAsGroupsResponse();
        this.request("DescribeClusterAsGroups", req, resp, cb);
    }

    /**
     * 创建节点池
     * @param {CreateClusterNodePoolRequest} req
     * @param {function(string, CreateClusterNodePoolResponse):void} cb
     * @public
     */
    CreateClusterNodePool(req, cb) {
        let resp = new CreateClusterNodePoolResponse();
        this.request("CreateClusterNodePool", req, resp, cb);
    }

    /**
     * 给集群的一批work节点进行升级 
     * @param {UpgradeClusterInstancesRequest} req
     * @param {function(string, UpgradeClusterInstancesResponse):void} cb
     * @public
     */
    UpgradeClusterInstances(req, cb) {
        let resp = new UpgradeClusterInstancesResponse();
        this.request("UpgradeClusterInstances", req, resp, cb);
    }

    /**
     * 获取镜像信息
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {CreateClusterEndpointRequest} req
     * @param {function(string, CreateClusterEndpointResponse):void} cb
     * @public
     */
    CreateClusterEndpoint(req, cb) {
        let resp = new CreateClusterEndpointResponse();
        this.request("CreateClusterEndpoint", req, resp, cb);
    }

    /**
     * 从伸缩组创建节点池
     * @param {CreateClusterNodePoolFromExistingAsgRequest} req
     * @param {function(string, CreateClusterNodePoolFromExistingAsgResponse):void} cb
     * @public
     */
    CreateClusterNodePoolFromExistingAsg(req, cb) {
        let resp = new CreateClusterNodePoolFromExistingAsgResponse();
        this.request("CreateClusterNodePoolFromExistingAsg", req, resp, cb);
    }

    /**
     * 查询集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 获取关联目标集群的实例列表
     * @param {DescribePrometheusAgentInstancesRequest} req
     * @param {function(string, DescribePrometheusAgentInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusAgentInstances(req, cb) {
        let resp = new DescribePrometheusAgentInstancesResponse();
        this.request("DescribePrometheusAgentInstances", req, resp, cb);
    }

    /**
     * 查询集群路由表
     * @param {DescribeClusterRouteTablesRequest} req
     * @param {function(string, DescribeClusterRouteTablesResponse):void} cb
     * @public
     */
    DescribeClusterRouteTables(req, cb) {
        let resp = new DescribeClusterRouteTablesResponse();
        this.request("DescribeClusterRouteTables", req, resp, cb);
    }

    /**
     * 获取模板同步信息
     * @param {DescribePrometheusTemplateSyncRequest} req
     * @param {function(string, DescribePrometheusTemplateSyncResponse):void} cb
     * @public
     */
    DescribePrometheusTemplateSync(req, cb) {
        let resp = new DescribePrometheusTemplateSyncResponse();
        this.request("DescribePrometheusTemplateSync", req, resp, cb);
    }

    /**
     * 获取容器服务支持的所有地域
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 添加已经存在的实例到集群
     * @param {AddExistedInstancesRequest} req
     * @param {function(string, AddExistedInstancesResponse):void} cb
     * @public
     */
    AddExistedInstances(req, cb) {
        let resp = new AddExistedInstancesResponse();
        this.request("AddExistedInstances", req, resp, cb);
    }

    /**
     * 删除弹性集群(yunapiv3)
     * @param {DeleteEKSClusterRequest} req
     * @param {function(string, DeleteEKSClusterResponse):void} cb
     * @public
     */
    DeleteEKSCluster(req, cb) {
        let resp = new DeleteEKSClusterResponse();
        this.request("DeleteEKSCluster", req, resp, cb);
    }

    /**
     * 修改节点池关联伸缩组的期望实例数
     * @param {ModifyNodePoolDesiredCapacityAboutAsgRequest} req
     * @param {function(string, ModifyNodePoolDesiredCapacityAboutAsgResponse):void} cb
     * @public
     */
    ModifyNodePoolDesiredCapacityAboutAsg(req, cb) {
        let resp = new ModifyNodePoolDesiredCapacityAboutAsgResponse();
        this.request("ModifyNodePoolDesiredCapacityAboutAsg", req, resp, cb);
    }

    /**
     * 移出节点池节点，但保留在集群内
     * @param {RemoveNodeFromNodePoolRequest} req
     * @param {function(string, RemoveNodeFromNodePoolResponse):void} cb
     * @public
     */
    RemoveNodeFromNodePool(req, cb) {
        let resp = new RemoveNodeFromNodePoolResponse();
        this.request("RemoveNodeFromNodePool", req, resp, cb);
    }

    /**
     * 集群的密钥信息
     * @param {DescribeClusterSecurityRequest} req
     * @param {function(string, DescribeClusterSecurityResponse):void} cb
     * @public
     */
    DescribeClusterSecurity(req, cb) {
        let resp = new DescribeClusterSecurityResponse();
        this.request("DescribeClusterSecurity", req, resp, cb);
    }

    /**
     * 查询路由表冲突列表
     * @param {DescribeRouteTableConflictsRequest} req
     * @param {function(string, DescribeRouteTableConflictsResponse):void} cb
     * @public
     */
    DescribeRouteTableConflicts(req, cb) {
        let resp = new DescribeRouteTableConflictsResponse();
        this.request("DescribeRouteTableConflicts", req, resp, cb);
    }

    /**
     *  查询集群下节点实例信息 
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * 删除节点池
     * @param {DeleteClusterNodePoolRequest} req
     * @param {function(string, DeleteClusterNodePoolResponse):void} cb
     * @public
     */
    DeleteClusterNodePool(req, cb) {
        let resp = new DeleteClusterNodePoolResponse();
        this.request("DeleteClusterNodePool", req, resp, cb);
    }

    /**
     * 修改集群伸缩组属性
     * @param {ModifyClusterAsGroupAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupAttributeResponse();
        this.request("ModifyClusterAsGroupAttribute", req, resp, cb);
    }

    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {DeleteClusterEndpointVipRequest} req
     * @param {function(string, DeleteClusterEndpointVipResponse):void} cb
     * @public
     */
    DeleteClusterEndpointVip(req, cb) {
        let resp = new DeleteClusterEndpointVipResponse();
        this.request("DeleteClusterEndpointVip", req, resp, cb);
    }

    /**
     * 删除集群中的实例
     * @param {DeleteClusterInstancesRequest} req
     * @param {function(string, DeleteClusterInstancesResponse):void} cb
     * @public
     */
    DeleteClusterInstances(req, cb) {
        let resp = new DeleteClusterInstancesResponse();
        this.request("DeleteClusterInstances", req, resp, cb);
    }

    /**
     * 获取集群可以升级的所有版本
     * @param {DescribeAvailableClusterVersionRequest} req
     * @param {function(string, DescribeAvailableClusterVersionResponse):void} cb
     * @public
     */
    DescribeAvailableClusterVersion(req, cb) {
        let resp = new DescribeAvailableClusterVersionResponse();
        this.request("DescribeAvailableClusterVersion", req, resp, cb);
    }

    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     * @param {DescribeClusterKubeconfigRequest} req
     * @param {function(string, DescribeClusterKubeconfigResponse):void} cb
     * @public
     */
    DescribeClusterKubeconfig(req, cb) {
        let resp = new DescribeClusterKubeconfigResponse();
        this.request("DescribeClusterKubeconfig", req, resp, cb);
    }

    /**
     * 修改弹性集群名称等属性 
     * @param {UpdateEKSClusterRequest} req
     * @param {function(string, UpdateEKSClusterResponse):void} cb
     * @public
     */
    UpdateEKSCluster(req, cb) {
        let resp = new UpdateEKSClusterResponse();
        this.request("UpdateEKSCluster", req, resp, cb);
    }

    /**
     * 升级集群 Master 组件到指定版本
     * @param {UpdateClusterVersionRequest} req
     * @param {function(string, UpdateClusterVersionResponse):void} cb
     * @public
     */
    UpdateClusterVersion(req, cb) {
        let resp = new UpdateClusterVersionResponse();
        this.request("UpdateClusterVersion", req, resp, cb);
    }

    /**
     * 获取弹性容器集群的接入认证信息
     * @param {DescribeEKSClusterCredentialRequest} req
     * @param {function(string, DescribeEKSClusterCredentialResponse):void} cb
     * @public
     */
    DescribeEKSClusterCredential(req, cb) {
        let resp = new DescribeEKSClusterCredentialResponse();
        this.request("DescribeEKSClusterCredential", req, resp, cb);
    }

    /**
     * 获取告警规则列表
     * @param {DescribePrometheusAlertRuleRequest} req
     * @param {function(string, DescribePrometheusAlertRuleResponse):void} cb
     * @public
     */
    DescribePrometheusAlertRule(req, cb) {
        let resp = new DescribePrometheusAlertRuleResponse();
        this.request("DescribePrometheusAlertRule", req, resp, cb);
    }

    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @param {ModifyClusterEndpointSPRequest} req
     * @param {function(string, ModifyClusterEndpointSPResponse):void} cb
     * @public
     */
    ModifyClusterEndpointSP(req, cb) {
        let resp = new ModifyClusterEndpointSPResponse();
        this.request("ModifyClusterEndpointSP", req, resp, cb);
    }

    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {CreateClusterEndpointVipRequest} req
     * @param {function(string, CreateClusterEndpointVipResponse):void} cb
     * @public
     */
    CreateClusterEndpointVip(req, cb) {
        let resp = new CreateClusterEndpointVipResponse();
        this.request("CreateClusterEndpointVip", req, resp, cb);
    }

    /**
     * 删除集群路由表
     * @param {DeleteClusterRouteTableRequest} req
     * @param {function(string, DeleteClusterRouteTableResponse):void} cb
     * @public
     */
    DeleteClusterRouteTable(req, cb) {
        let resp = new DeleteClusterRouteTableResponse();
        this.request("DeleteClusterRouteTable", req, resp, cb);
    }

    /**
     * 查询集群路由
     * @param {DescribeClusterRoutesRequest} req
     * @param {function(string, DescribeClusterRoutesResponse):void} cb
     * @public
     */
    DescribeClusterRoutes(req, cb) {
        let resp = new DescribeClusterRoutesResponse();
        this.request("DescribeClusterRoutes", req, resp, cb);
    }

    /**
     * 修改集群弹性伸缩属性
     * @param {ModifyClusterAsGroupOptionAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupOptionAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupOptionAttribute(req, cb) {
        let resp = new ModifyClusterAsGroupOptionAttributeResponse();
        this.request("ModifyClusterAsGroupOptionAttribute", req, resp, cb);
    }


}
module.exports = TkeClient;
