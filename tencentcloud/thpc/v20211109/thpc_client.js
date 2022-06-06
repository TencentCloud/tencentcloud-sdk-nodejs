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
const ClusterOverview = models.ClusterOverview;
const DescribeClustersRequest = models.DescribeClustersRequest;
const LoginSettings = models.LoginSettings;
const DeleteClusterResponse = models.DeleteClusterResponse;
const InternetAccessible = models.InternetAccessible;
const CFSOption = models.CFSOption;
const LoginNode = models.LoginNode;
const CreateClusterRequest = models.CreateClusterRequest;
const Tag = models.Tag;
const CreateClusterResponse = models.CreateClusterResponse;
const BindAutoScalingGroupResponse = models.BindAutoScalingGroupResponse;
const ManagerNodeOverview = models.ManagerNodeOverview;
const ManagerNode = models.ManagerNode;
const DeleteClusterRequest = models.DeleteClusterRequest;
const ComputeNodeOverview = models.ComputeNodeOverview;
const SystemDisk = models.SystemDisk;
const Placement = models.Placement;
const BindAutoScalingGroupRequest = models.BindAutoScalingGroupRequest;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const StorageOption = models.StorageOption;
const LoginNodeOverview = models.LoginNodeOverview;
const ComputeNode = models.ComputeNode;
const DescribeClustersResponse = models.DescribeClustersResponse;
const GooseFSOption = models.GooseFSOption;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DataDisk = models.DataDisk;


/**
 * thpc client
 * @class
 */
class ThpcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("thpc.tencentcloudapi.com", "2021-11-09", credential, region, profile);
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


}
module.exports = ThpcClient;
