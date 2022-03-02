"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tdcpg client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tdcpg.tencentcloudapi.com", "2021-11-18", clientConfig);
    }
    /**
     * 修改实例规格，此接口只针对状态为running(运行中)的实例生效
     */
    async ModifyClusterInstancesSpec(req, cb) {
        return this.request("ModifyClusterInstancesSpec", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 修改数据库账号描述
     */
    async ModifyAccountDescription(req, cb) {
        return this.request("ModifyAccountDescription", req, cb);
    }
    /**
     * 修改集群名字
     */
    async ModifyClusterName(req, cb) {
        return this.request("ModifyClusterName", req, cb);
    }
    /**
     * 转换集群付费模式，目前只支持从 后付费 转换成 与预付费。
     */
    async TransformClusterPayMode(req, cb) {
        return this.request("TransformClusterPayMode", req, cb);
    }
    /**
     * 修改集群自动续费，只对预付费集群生效。
     */
    async ModifyClustersAutoRenewFlag(req, cb) {
        return this.request("ModifyClustersAutoRenewFlag", req, cb);
    }
    /**
     * 重置数据库账号密码
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 在集群中新建实例
     */
    async CreateClusterInstances(req, cb) {
        return this.request("CreateClusterInstances", req, cb);
    }
    /**
     * 删除集群，集群中的实例和数据都将被删除，且无法恢复。只有当集群状态处于isolated(已隔离)时才生效。
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 查询实例
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 查询集群可回档时间范围
     */
    async DescribeClusterRecoveryTimeRange(req, cb) {
        return this.request("DescribeClusterRecoveryTimeRange", req, cb);
    }
    /**
     * 隔离集群，集群的接入点网络将会断掉无法连接使用数据库。只有当集群状态处于running(运行中)时才生效。
     */
    async IsolateCluster(req, cb) {
        return this.request("IsolateCluster", req, cb);
    }
    /**
     * 查询集群
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 重启实例，此接口只针对状态为running(运行中)的实例生效。
     */
    async RestartClusterInstances(req, cb) {
        return this.request("RestartClusterInstances", req, cb);
    }
    /**
     * 恢复实例。此接口的使用场景包括：
 - 读写实例状态为running(运行中)时，批量恢复状态为isolated(已隔离)的只读实例
 - 读写实例状态为isolated(已隔离)时，恢复读写实例
 - 读写实例状态为isolated(已隔离)时，批量恢复读写实例以及状态为isolated(已隔离)的只读实例
     */
    async RecoverClusterInstances(req, cb) {
        return this.request("RecoverClusterInstances", req, cb);
    }
    /**
     * 开启或者关闭接入点外网
     */
    async ModifyClusterEndpointWanStatus(req, cb) {
        return this.request("ModifyClusterEndpointWanStatus", req, cb);
    }
    /**
     * 恢复集群，恢复集群的接入点网络，恢复后继续连接使用数据库。只有当集群状态处于isolated(已隔离)时才生效。
     */
    async RecoverCluster(req, cb) {
        return this.request("RecoverCluster", req, cb);
    }
    /**
     * 使用指定时间点的备份克隆一个新的集群
     */
    async CloneClusterToPointInTime(req, cb) {
        return this.request("CloneClusterToPointInTime", req, cb);
    }
    /**
     * 查询数据库账号信息
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 根据订单号获取资源信息
     */
    async DescribeResourcesByDealName(req, cb) {
        return this.request("DescribeResourcesByDealName", req, cb);
    }
    /**
     * 删除实例。只有当实例状态处于isolated(已隔离)时才生效。
     */
    async DeleteClusterInstances(req, cb) {
        return this.request("DeleteClusterInstances", req, cb);
    }
    /**
     * 查询集群接入点信息
     */
    async DescribeClusterEndpoints(req, cb) {
        return this.request("DescribeClusterEndpoints", req, cb);
    }
    /**
     * 查询集群的备份集
     */
    async DescribeClusterBackups(req, cb) {
        return this.request("DescribeClusterBackups", req, cb);
    }
    /**
     * 续费集群
     */
    async RenewCluster(req, cb) {
        return this.request("RenewCluster", req, cb);
    }
    /**
     * 隔离实例。此接口只针对状态为running的实例生效，使用场景包括：
 - 批量隔离集群内所有的实例
 - 在读写实例为running(运行中)时，单个/批量隔离只读实例
 - 集群内所有只读实例为isolated(已隔离)时，单独隔离读写实例
     */
    async IsolateClusterInstances(req, cb) {
        return this.request("IsolateClusterInstances", req, cb);
    }
}
exports.Client = Client;
