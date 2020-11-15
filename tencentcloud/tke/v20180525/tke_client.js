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
const DescribeClusterEndpointVipStatusRequest = models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const DescribeClusterKubeconfigResponse = models.DescribeClusterKubeconfigResponse;
const RemoveNodeFromNodePoolResponse = models.RemoveNodeFromNodePoolResponse;
const CreateClusterRouteRequest = models.CreateClusterRouteRequest;
const DescribeClusterEndpointVipStatusResponse = models.DescribeClusterEndpointVipStatusResponse;
const ModifyClusterEndpointSPRequest = models.ModifyClusterEndpointSPRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AutoscalingAdded = models.AutoscalingAdded;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const DeleteClusterEndpointResponse = models.DeleteClusterEndpointResponse;
const RouteInfo = models.RouteInfo;
const DeleteClusterRequest = models.DeleteClusterRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const CreateClusterRouteResponse = models.CreateClusterRouteResponse;
const AddNodeToNodePoolRequest = models.AddNodeToNodePoolRequest;
const NodePool = models.NodePool;
const RouteTableInfo = models.RouteTableInfo;
const ClusterAsGroup = models.ClusterAsGroup;
const Instance = models.Instance;
const CreateClusterNodePoolFromExistingAsgRequest = models.CreateClusterNodePoolFromExistingAsgRequest;
const Tag = models.Tag;
const DescribePrometheusAgentInstancesRequest = models.DescribePrometheusAgentInstancesRequest;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DescribeImagesResponse = models.DescribeImagesResponse;
const AutoScalingGroupRange = models.AutoScalingGroupRange;
const ModifyClusterAttributeRequest = models.ModifyClusterAttributeRequest;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const CreateClusterEndpointVipResponse = models.CreateClusterEndpointVipResponse;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ExtensionAddon = models.ExtensionAddon;
const RegionInstance = models.RegionInstance;
const Label = models.Label;
const DeleteClusterEndpointVipResponse = models.DeleteClusterEndpointVipResponse;
const ClusterBasicSettings = models.ClusterBasicSettings;
const CreatePrometheusDashboardResponse = models.CreatePrometheusDashboardResponse;
const RouteTableConflict = models.RouteTableConflict;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const ModifyClusterAsGroupAttributeResponse = models.ModifyClusterAsGroupAttributeResponse;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const ManuallyAdded = models.ManuallyAdded;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const DescribeClusterKubeconfigRequest = models.DescribeClusterKubeconfigRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const CreateClusterEndpointVipRequest = models.CreateClusterEndpointVipRequest;
const Taint = models.Taint;
const ExistedInstance = models.ExistedInstance;
const DescribeClusterNodePoolsResponse = models.DescribeClusterNodePoolsResponse;
const AddNodeToNodePoolResponse = models.AddNodeToNodePoolResponse;
const TagSpecification = models.TagSpecification;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClusterExtraArgs = models.ClusterExtraArgs;
const DataDisk = models.DataDisk;
const ModifyClusterNodePoolResponse = models.ModifyClusterNodePoolResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const ResourceDeleteOption = models.ResourceDeleteOption;
const LoginSettings = models.LoginSettings;
const CreateClusterNodePoolFromExistingAsgResponse = models.CreateClusterNodePoolFromExistingAsgResponse;
const DescribeClusterEndpointStatusRequest = models.DescribeClusterEndpointStatusRequest;
const ModifyClusterAttributeResponse = models.ModifyClusterAttributeResponse;
const EnhancedService = models.EnhancedService;
const CreateClusterAsGroupRequest = models.CreateClusterAsGroupRequest;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const AcquireClusterAdminRoleRequest = models.AcquireClusterAdminRoleRequest;
const CreateClusterAsGroupResponse = models.CreateClusterAsGroupResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const Filter = models.Filter;
const ModifyClusterNodePoolRequest = models.ModifyClusterNodePoolRequest;
const ImageInstance = models.ImageInstance;
const CreateClusterEndpointResponse = models.CreateClusterEndpointResponse;
const CreateClusterNodePoolRequest = models.CreateClusterNodePoolRequest;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const AcquireClusterAdminRoleResponse = models.AcquireClusterAdminRoleResponse;
const DeleteClusterNodePoolRequest = models.DeleteClusterNodePoolRequest;
const DeleteClusterEndpointVipRequest = models.DeleteClusterEndpointVipRequest;
const Cluster = models.Cluster;
const DescribeClusterEndpointStatusResponse = models.DescribeClusterEndpointStatusResponse;
const CreatePrometheusDashboardRequest = models.CreatePrometheusDashboardRequest;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const DescribeClusterAsGroupOptionRequest = models.DescribeClusterAsGroupOptionRequest;
const DescribePrometheusAgentInstancesResponse = models.DescribePrometheusAgentInstancesResponse;
const CreateClusterEndpointRequest = models.CreateClusterEndpointRequest;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models.ClusterAsGroupOption;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const DescribeClusterNodePoolsRequest = models.DescribeClusterNodePoolsRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const DeleteClusterEndpointRequest = models.DeleteClusterEndpointRequest;
const DescribeClusterNodePoolDetailRequest = models.DescribeClusterNodePoolDetailRequest;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DescribeClusterAsGroupsRequest = models.DescribeClusterAsGroupsRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const ModifyClusterEndpointSPResponse = models.ModifyClusterEndpointSPResponse;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DescribeClusterAsGroupOptionResponse = models.DescribeClusterAsGroupOptionResponse;
const ClusterAsGroupAttribute = models.ClusterAsGroupAttribute;
const DeleteClusterNodePoolResponse = models.DeleteClusterNodePoolResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const CreateClusterNodePoolResponse = models.CreateClusterNodePoolResponse;
const ModifyClusterAsGroupAttributeRequest = models.ModifyClusterAsGroupAttributeRequest;
const InstanceDataDiskMountSetting = models.InstanceDataDiskMountSetting;
const NodeCountSummary = models.NodeCountSummary;
const DescribeClusterAsGroupsResponse = models.DescribeClusterAsGroupsResponse;
const RemoveNodeFromNodePoolRequest = models.RemoveNodeFromNodePoolRequest;
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


}
module.exports = TkeClient;
