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
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ModifyClusterNameRequest = models.ModifyClusterNameRequest;
const ModifyClustersAutoRenewFlagResponse = models.ModifyClustersAutoRenewFlagResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const DeleteClusterInstancesResponse = models.DeleteClusterInstancesResponse;
const ModifyClusterInstancesSpecRequest = models.ModifyClusterInstancesSpecRequest;
const DescribeClusterBackupsRequest = models.DescribeClusterBackupsRequest;
const AvailableRecoveryTimeRange = models.AvailableRecoveryTimeRange;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models.DeleteClusterResponse;
const CreateClusterInstancesResponse = models.CreateClusterInstancesResponse;
const RestartClusterInstancesRequest = models.RestartClusterInstancesRequest;
const CreateClusterResponse = models.CreateClusterResponse;
const RecoverClusterInstancesRequest = models.RecoverClusterInstancesRequest;
const CloneClusterToPointInTimeResponse = models.CloneClusterToPointInTimeResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const DeleteClusterInstancesRequest = models.DeleteClusterInstancesRequest;
const RestartClusterInstancesResponse = models.RestartClusterInstancesResponse;
const ModifyClusterInstancesSpecResponse = models.ModifyClusterInstancesSpecResponse;
const CreateClusterInstancesRequest = models.CreateClusterInstancesRequest;
const DescribeClusterRecoveryTimeRangeResponse = models.DescribeClusterRecoveryTimeRangeResponse;
const DescribeClusterEndpointsResponse = models.DescribeClusterEndpointsResponse;
const DescribeResourcesByDealNameRequest = models.DescribeResourcesByDealNameRequest;
const ModifyClusterEndpointWanStatusResponse = models.ModifyClusterEndpointWanStatusResponse;
const ModifyClusterEndpointWanStatusRequest = models.ModifyClusterEndpointWanStatusRequest;
const RecoverClusterRequest = models.RecoverClusterRequest;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const DeleteClusterRequest = models.DeleteClusterRequest;
const Account = models.Account;
const Endpoint = models.Endpoint;
const RecoverClusterInstancesResponse = models.RecoverClusterInstancesResponse;
const ResourceIdInfo = models.ResourceIdInfo;
const RecoverClusterResponse = models.RecoverClusterResponse;
const Filter = models.Filter;
const DescribeClusterBackupsResponse = models.DescribeClusterBackupsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const TransformClusterPayModeRequest = models.TransformClusterPayModeRequest;
const Backup = models.Backup;
const RenewClusterRequest = models.RenewClusterRequest;
const DescribeClusterEndpointsRequest = models.DescribeClusterEndpointsRequest;
const ModifyClusterNameResponse = models.ModifyClusterNameResponse;
const IsolateClusterInstancesResponse = models.IsolateClusterInstancesResponse;
const RenewClusterResponse = models.RenewClusterResponse;
const IsolateClusterInstancesRequest = models.IsolateClusterInstancesRequest;
const Instance = models.Instance;
const IsolateClusterResponse = models.IsolateClusterResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const IsolateClusterRequest = models.IsolateClusterRequest;
const ModifyClustersAutoRenewFlagRequest = models.ModifyClustersAutoRenewFlagRequest;
const TransformClusterPayModeResponse = models.TransformClusterPayModeResponse;
const Cluster = models.Cluster;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DescribeResourcesByDealNameResponse = models.DescribeResourcesByDealNameResponse;
const CloneClusterToPointInTimeRequest = models.CloneClusterToPointInTimeRequest;
const DescribeClusterRecoveryTimeRangeRequest = models.DescribeClusterRecoveryTimeRangeRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;


/**
 * tdcpg client
 * @class
 */
class TdcpgClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdcpg.tencentcloudapi.com", "2021-11-18", credential, region, profile);
    }
    
    /**
     * 修改实例规格，此接口只针对状态为running(运行中)的实例生效
     * @param {ModifyClusterInstancesSpecRequest} req
     * @param {function(string, ModifyClusterInstancesSpecResponse):void} cb
     * @public
     */
    ModifyClusterInstancesSpec(req, cb) {
        let resp = new ModifyClusterInstancesSpecResponse();
        this.request("ModifyClusterInstancesSpec", req, resp, cb);
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
     * 修改数据库账号描述
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * 修改集群名字
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        let resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }

    /**
     * 转换集群付费模式，目前只支持从 后付费 转换成 与预付费。
     * @param {TransformClusterPayModeRequest} req
     * @param {function(string, TransformClusterPayModeResponse):void} cb
     * @public
     */
    TransformClusterPayMode(req, cb) {
        let resp = new TransformClusterPayModeResponse();
        this.request("TransformClusterPayMode", req, resp, cb);
    }

    /**
     * 修改集群自动续费，只对预付费集群生效。
     * @param {ModifyClustersAutoRenewFlagRequest} req
     * @param {function(string, ModifyClustersAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyClustersAutoRenewFlag(req, cb) {
        let resp = new ModifyClustersAutoRenewFlagResponse();
        this.request("ModifyClustersAutoRenewFlag", req, resp, cb);
    }

    /**
     * 重置数据库账号密码
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 在集群中新建实例
     * @param {CreateClusterInstancesRequest} req
     * @param {function(string, CreateClusterInstancesResponse):void} cb
     * @public
     */
    CreateClusterInstances(req, cb) {
        let resp = new CreateClusterInstancesResponse();
        this.request("CreateClusterInstances", req, resp, cb);
    }

    /**
     * 删除集群，集群中的实例和数据都将被删除，且无法恢复。只有当集群状态处于isolated(已隔离)时才生效。
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 查询实例
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * 查询集群可回档时间范围
     * @param {DescribeClusterRecoveryTimeRangeRequest} req
     * @param {function(string, DescribeClusterRecoveryTimeRangeResponse):void} cb
     * @public
     */
    DescribeClusterRecoveryTimeRange(req, cb) {
        let resp = new DescribeClusterRecoveryTimeRangeResponse();
        this.request("DescribeClusterRecoveryTimeRange", req, resp, cb);
    }

    /**
     * 隔离集群，集群的接入点网络将会断掉无法连接使用数据库。只有当集群状态处于running(运行中)时才生效。
     * @param {IsolateClusterRequest} req
     * @param {function(string, IsolateClusterResponse):void} cb
     * @public
     */
    IsolateCluster(req, cb) {
        let resp = new IsolateClusterResponse();
        this.request("IsolateCluster", req, resp, cb);
    }

    /**
     * 查询集群
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 重启实例，此接口只针对状态为running(运行中)的实例生效。
     * @param {RestartClusterInstancesRequest} req
     * @param {function(string, RestartClusterInstancesResponse):void} cb
     * @public
     */
    RestartClusterInstances(req, cb) {
        let resp = new RestartClusterInstancesResponse();
        this.request("RestartClusterInstances", req, resp, cb);
    }

    /**
     * 恢复实例。此接口的使用场景包括：
 - 读写实例状态为running(运行中)时，批量恢复状态为isolated(已隔离)的只读实例
 - 读写实例状态为isolated(已隔离)时，恢复读写实例
 - 读写实例状态为isolated(已隔离)时，批量恢复读写实例以及状态为isolated(已隔离)的只读实例
     * @param {RecoverClusterInstancesRequest} req
     * @param {function(string, RecoverClusterInstancesResponse):void} cb
     * @public
     */
    RecoverClusterInstances(req, cb) {
        let resp = new RecoverClusterInstancesResponse();
        this.request("RecoverClusterInstances", req, resp, cb);
    }

    /**
     * 开启或者关闭接入点外网
     * @param {ModifyClusterEndpointWanStatusRequest} req
     * @param {function(string, ModifyClusterEndpointWanStatusResponse):void} cb
     * @public
     */
    ModifyClusterEndpointWanStatus(req, cb) {
        let resp = new ModifyClusterEndpointWanStatusResponse();
        this.request("ModifyClusterEndpointWanStatus", req, resp, cb);
    }

    /**
     * 恢复集群，恢复集群的接入点网络，恢复后继续连接使用数据库。只有当集群状态处于isolated(已隔离)时才生效。
     * @param {RecoverClusterRequest} req
     * @param {function(string, RecoverClusterResponse):void} cb
     * @public
     */
    RecoverCluster(req, cb) {
        let resp = new RecoverClusterResponse();
        this.request("RecoverCluster", req, resp, cb);
    }

    /**
     * 使用指定时间点的备份克隆一个新的集群
     * @param {CloneClusterToPointInTimeRequest} req
     * @param {function(string, CloneClusterToPointInTimeResponse):void} cb
     * @public
     */
    CloneClusterToPointInTime(req, cb) {
        let resp = new CloneClusterToPointInTimeResponse();
        this.request("CloneClusterToPointInTime", req, resp, cb);
    }

    /**
     * 查询数据库账号信息
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 根据订单号获取资源信息
     * @param {DescribeResourcesByDealNameRequest} req
     * @param {function(string, DescribeResourcesByDealNameResponse):void} cb
     * @public
     */
    DescribeResourcesByDealName(req, cb) {
        let resp = new DescribeResourcesByDealNameResponse();
        this.request("DescribeResourcesByDealName", req, resp, cb);
    }

    /**
     * 删除实例。只有当实例状态处于isolated(已隔离)时才生效。
     * @param {DeleteClusterInstancesRequest} req
     * @param {function(string, DeleteClusterInstancesResponse):void} cb
     * @public
     */
    DeleteClusterInstances(req, cb) {
        let resp = new DeleteClusterInstancesResponse();
        this.request("DeleteClusterInstances", req, resp, cb);
    }

    /**
     * 查询集群接入点信息
     * @param {DescribeClusterEndpointsRequest} req
     * @param {function(string, DescribeClusterEndpointsResponse):void} cb
     * @public
     */
    DescribeClusterEndpoints(req, cb) {
        let resp = new DescribeClusterEndpointsResponse();
        this.request("DescribeClusterEndpoints", req, resp, cb);
    }

    /**
     * 查询集群的备份集
     * @param {DescribeClusterBackupsRequest} req
     * @param {function(string, DescribeClusterBackupsResponse):void} cb
     * @public
     */
    DescribeClusterBackups(req, cb) {
        let resp = new DescribeClusterBackupsResponse();
        this.request("DescribeClusterBackups", req, resp, cb);
    }

    /**
     * 续费集群
     * @param {RenewClusterRequest} req
     * @param {function(string, RenewClusterResponse):void} cb
     * @public
     */
    RenewCluster(req, cb) {
        let resp = new RenewClusterResponse();
        this.request("RenewCluster", req, resp, cb);
    }

    /**
     * 隔离实例。此接口只针对状态为running的实例生效，使用场景包括：
 - 批量隔离集群内所有的实例
 - 在读写实例为running(运行中)时，单个/批量隔离只读实例
 - 集群内所有只读实例为isolated(已隔离)时，单独隔离读写实例
     * @param {IsolateClusterInstancesRequest} req
     * @param {function(string, IsolateClusterInstancesResponse):void} cb
     * @public
     */
    IsolateClusterInstances(req, cb) {
        let resp = new IsolateClusterInstancesResponse();
        this.request("IsolateClusterInstances", req, resp, cb);
    }


}
module.exports = TdcpgClient;
