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
const DescribeAutoScalingConfigurationResponse = models.DescribeAutoScalingConfigurationResponse;
const DescribeClusterStorageOptionRequest = models.DescribeClusterStorageOptionRequest;
const ClusterOverview = models.ClusterOverview;
const QueueOverview = models.QueueOverview;
const DescribeClustersRequest = models.DescribeClustersRequest;
const SetAutoScalingConfigurationRequest = models.SetAutoScalingConfigurationRequest;
const NodeOverview = models.NodeOverview;
const DescribeNodesRequest = models.DescribeNodesRequest;
const DeleteNodesResponse = models.DeleteNodesResponse;
const AddClusterStorageOptionResponse = models.AddClusterStorageOptionResponse;
const StorageOptionOverview = models.StorageOptionOverview;
const DeleteClusterResponse = models.DeleteClusterResponse;
const ExpansionNodeConfig = models.ExpansionNodeConfig;
const NodeActivity = models.NodeActivity;
const Placement = models.Placement;
const AddQueueRequest = models.AddQueueRequest;
const LoginNodeOverview = models.LoginNodeOverview;
const CFSOption = models.CFSOption;
const ClusterActivity = models.ClusterActivity;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeQueuesRequest = models.DescribeQueuesRequest;
const SetAutoScalingConfigurationResponse = models.SetAutoScalingConfigurationResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const AddQueueResponse = models.AddQueueResponse;
const DescribeClusterStorageOptionResponse = models.DescribeClusterStorageOptionResponse;
const DescribeQueuesResponse = models.DescribeQueuesResponse;
const GooseFSOptionOverview = models.GooseFSOptionOverview;
const QueueConfig = models.QueueConfig;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const Tag = models.Tag;
const LoginNode = models.LoginNode;
const BindAutoScalingGroupResponse = models.BindAutoScalingGroupResponse;
const ManagerNodeOverview = models.ManagerNodeOverview;
const ManagerNode = models.ManagerNode;
const DeleteClusterRequest = models.DeleteClusterRequest;
const ComputeNodeOverview = models.ComputeNodeOverview;
const SystemDisk = models.SystemDisk;
const LoginSettings = models.LoginSettings;
const GooseFSOption = models.GooseFSOption;
const DescribeClusterActivitiesRequest = models.DescribeClusterActivitiesRequest;
const DeleteQueueRequest = models.DeleteQueueRequest;
const Filter = models.Filter;
const AddNodesRequest = models.AddNodesRequest;
const CFSOptionOverview = models.CFSOptionOverview;
const DeleteClusterStorageOptionRequest = models.DeleteClusterStorageOptionRequest;
const AddClusterStorageOptionRequest = models.AddClusterStorageOptionRequest;
const QueueConfigOverview = models.QueueConfigOverview;
const BindAutoScalingGroupRequest = models.BindAutoScalingGroupRequest;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const ExpansionNodeConfigOverview = models.ExpansionNodeConfigOverview;
const DescribeAutoScalingConfigurationRequest = models.DescribeAutoScalingConfigurationRequest;
const StorageOption = models.StorageOption;
const InternetAccessible = models.InternetAccessible;
const ComputeNode = models.ComputeNode;
const DeleteNodesRequest = models.DeleteNodesRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DeleteClusterStorageOptionResponse = models.DeleteClusterStorageOptionResponse;
const DescribeNodesResponse = models.DescribeNodesResponse;
const DescribeClusterActivitiesResponse = models.DescribeClusterActivitiesResponse;
const DataDisk = models.DataDisk;
const DeleteQueueResponse = models.DeleteQueueResponse;
const AddNodesResponse = models.AddNodesResponse;


/**
 * thpc client
 * @class
 */
class ThpcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("thpc.tencentcloudapi.com", "2022-04-01", credential, region, profile);
    }
    
    /**
     * 本接口 (DescribeClusterStorageOption) 用于查询集群存储选项信息。
     * @param {DescribeClusterStorageOptionRequest} req
     * @param {function(string, DescribeClusterStorageOptionResponse):void} cb
     * @public
     */
    DescribeClusterStorageOption(req, cb) {
        let resp = new DescribeClusterStorageOptionResponse();
        this.request("DescribeClusterStorageOption", req, resp, cb);
    }

    /**
     * 本接口(DeleteNodes)用于删除指定集群中一个或者多个计算节点或者登录节点。
     * @param {DeleteNodesRequest} req
     * @param {function(string, DeleteNodesResponse):void} cb
     * @public
     */
    DeleteNodes(req, cb) {
        let resp = new DeleteNodesResponse();
        this.request("DeleteNodes", req, resp, cb);
    }

    /**
     * 本接口(BindAutoScalingGroup)用于为集群队列绑定弹性伸缩组
     * @param {BindAutoScalingGroupRequest} req
     * @param {function(string, BindAutoScalingGroupResponse):void} cb
     * @public
     */
    BindAutoScalingGroup(req, cb) {
        let resp = new BindAutoScalingGroupResponse();
        this.request("BindAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口 (CreateCluster) 用于创建并启动集群。
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * 本接口（DeleteCluster）用于删除一个指定的集群。
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 本接口(SetAutoScalingConfiguration)用于为集群设置集群弹性伸缩配置信息。
     * @param {SetAutoScalingConfigurationRequest} req
     * @param {function(string, SetAutoScalingConfigurationResponse):void} cb
     * @public
     */
    SetAutoScalingConfiguration(req, cb) {
        let resp = new SetAutoScalingConfigurationResponse();
        this.request("SetAutoScalingConfiguration", req, resp, cb);
    }

    /**
     * 本接口(AddQueue)用于添加队列到指定集群。
     * @param {AddQueueRequest} req
     * @param {function(string, AddQueueResponse):void} cb
     * @public
     */
    AddQueue(req, cb) {
        let resp = new AddQueueResponse();
        this.request("AddQueue", req, resp, cb);
    }

    /**
     * 本接口 (DescribeNodes) 用于查询指定集群节点概览信息列表。
     * @param {DescribeNodesRequest} req
     * @param {function(string, DescribeNodesResponse):void} cb
     * @public
     */
    DescribeNodes(req, cb) {
        let resp = new DescribeNodesResponse();
        this.request("DescribeNodes", req, resp, cb);
    }

    /**
     * 本接口(DeleteQueue)用于从指定集群删除队列。

* 删除队列时，需要保证队列内不存在节点。
     * @param {DeleteQueueRequest} req
     * @param {function(string, DeleteQueueResponse):void} cb
     * @public
     */
    DeleteQueue(req, cb) {
        let resp = new DeleteQueueResponse();
        this.request("DeleteQueue", req, resp, cb);
    }

    /**
     * 本接口 (DeleteClusterStorageOption) 用于删除集群存储选项信息。
     * @param {DeleteClusterStorageOptionRequest} req
     * @param {function(string, DeleteClusterStorageOptionResponse):void} cb
     * @public
     */
    DeleteClusterStorageOption(req, cb) {
        let resp = new DeleteClusterStorageOptionResponse();
        this.request("DeleteClusterStorageOption", req, resp, cb);
    }

    /**
     * 本接口(AddNodes)用于添加一个或者多个计算节点或者登录节点到指定集群。
     * @param {AddNodesRequest} req
     * @param {function(string, AddNodesResponse):void} cb
     * @public
     */
    AddNodes(req, cb) {
        let resp = new AddNodesResponse();
        this.request("AddNodes", req, resp, cb);
    }

    /**
     * 本接口(DescribeAutoScalingConfiguration)用于查询集群弹性伸缩配置信息。本接口仅适用于弹性伸缩类型为THPC_AS的集群。
     * @param {DescribeAutoScalingConfigurationRequest} req
     * @param {function(string, DescribeAutoScalingConfigurationResponse):void} cb
     * @public
     */
    DescribeAutoScalingConfiguration(req, cb) {
        let resp = new DescribeAutoScalingConfigurationResponse();
        this.request("DescribeAutoScalingConfiguration", req, resp, cb);
    }

    /**
     * 本接口（DescribeClusters）用于查询集群列表。
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 本接口（AddClusterStorageOption）用于添加集群存储选项信息。
     * @param {AddClusterStorageOptionRequest} req
     * @param {function(string, AddClusterStorageOptionResponse):void} cb
     * @public
     */
    AddClusterStorageOption(req, cb) {
        let resp = new AddClusterStorageOptionResponse();
        this.request("AddClusterStorageOption", req, resp, cb);
    }

    /**
     * 本接口（DescribeClusterActivities）用于查询集群活动历史记录列表。
     * @param {DescribeClusterActivitiesRequest} req
     * @param {function(string, DescribeClusterActivitiesResponse):void} cb
     * @public
     */
    DescribeClusterActivities(req, cb) {
        let resp = new DescribeClusterActivitiesResponse();
        this.request("DescribeClusterActivities", req, resp, cb);
    }

    /**
     * 本接口(DescribeQueues)用于查询指定集群队列概览信息列表。
     * @param {DescribeQueuesRequest} req
     * @param {function(string, DescribeQueuesResponse):void} cb
     * @public
     */
    DescribeQueues(req, cb) {
        let resp = new DescribeQueuesResponse();
        this.request("DescribeQueues", req, resp, cb);
    }


}
module.exports = ThpcClient;
