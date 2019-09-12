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
const DeleteClusterRequest = models.DeleteClusterRequest;
const DescribeClusterSecurityResponse = models.DescribeClusterSecurityResponse;
const DescribeExistedInstancesResponse = models.DescribeExistedInstancesResponse;
const DescribeClusterRoutesResponse = models.DescribeClusterRoutesResponse;
const DescribeClusterSecurityRequest = models.DescribeClusterSecurityRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const EnhancedService = models.EnhancedService;
const LoginSettings = models.LoginSettings;
const Label = models.Label;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const CreateClusterRouteRequest = models.CreateClusterRouteRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const CreateClusterAsGroupRequest = models.CreateClusterAsGroupRequest;
const DescribeClusterRouteTablesRequest = models.DescribeClusterRouteTablesRequest;
const CreateClusterRouteTableResponse = models.CreateClusterRouteTableResponse;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeClusterRoutesRequest = models.DescribeClusterRoutesRequest;
const DeleteClusterRouteTableRequest = models.DeleteClusterRouteTableRequest;
const DeleteClusterRouteRequest = models.DeleteClusterRouteRequest;
const ClusterBasicSettings = models.ClusterBasicSettings;
const CreateClusterRequest = models.CreateClusterRequest;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const CreateClusterAsGroupResponse = models.CreateClusterAsGroupResponse;
const Tag = models.Tag;
const CreateClusterRouteTableRequest = models.CreateClusterRouteTableRequest;
const DescribeClusterRouteTablesResponse = models.DescribeClusterRouteTablesResponse;
const DeleteClusterAsGroupsResponse = models.DeleteClusterAsGroupsResponse;
const RouteTableInfo = models.RouteTableInfo;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const DescribeRouteTableConflictsRequest = models.DescribeRouteTableConflictsRequest;
const RunInstancesForNode = models.RunInstancesForNode;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ExistedInstancesPara = models.ExistedInstancesPara;
const DeleteClusterAsGroupsRequest = models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models.DescribeExistedInstancesRequest;
const ExistedInstance = models.ExistedInstance;
const CreateClusterRouteResponse = models.CreateClusterRouteResponse;
const DescribeRouteTableConflictsResponse = models.DescribeRouteTableConflictsResponse;
const RouteInfo = models.RouteInfo;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const RouteTableConflict = models.RouteTableConflict;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const Filter = models.Filter;
const Instance = models.Instance;
const TagSpecification = models.TagSpecification;
const DescribeClustersRequest = models.DescribeClustersRequest;
const Cluster = models.Cluster;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const DeleteClusterRouteResponse = models.DeleteClusterRouteResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models.DeleteClusterRouteTableResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
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
     *  查询集群下节点实例信息 
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }


}
module.exports = TkeClient;
