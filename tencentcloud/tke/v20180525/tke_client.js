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
const DescribeClustersRequest = models.DescribeClustersRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const LoginSettings = models.LoginSettings;
const AddExistedInstancesRequest = models.AddExistedInstancesRequest;
const Instance = models.Instance;
const EnhancedService = models.EnhancedService;
const ExistedInstancesForNode = models.ExistedInstancesForNode;
const CreateClusterResponse = models.CreateClusterResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ClusterBasicSettings = models.ClusterBasicSettings;
const CreateClusterRequest = models.CreateClusterRequest;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const ClusterCIDRSettings = models.ClusterCIDRSettings;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const RunInstancesForNode = models.RunInstancesForNode;
const ExistedInstancesPara = models.ExistedInstancesPara;
const Filter = models.Filter;
const ClusterNetworkSettings = models.ClusterNetworkSettings;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ClusterAdvancedSettings = models.ClusterAdvancedSettings;
const Cluster = models.Cluster;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const AddExistedInstancesResponse = models.AddExistedInstancesResponse;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
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


}
module.exports = TkeClient;
