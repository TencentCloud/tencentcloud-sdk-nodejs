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
 * cynosdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", clientConfig);
    }
    /**
     * 查询备份文件列表
     */
    async DescribeBackupList(req, cb) {
        return this.request("DescribeBackupList", req, cb);
    }
    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     */
    async DescribeBackupConfig(req, cb) {
        return this.request("DescribeBackupConfig", req, cb);
    }
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组
     */
    async DescribeClusterInstanceGrps(req, cb) {
        return this.request("DescribeClusterInstanceGrps", req, cb);
    }
    /**
     * 下线集群
     */
    async OfflineCluster(req, cb) {
        return this.request("OfflineCluster", req, cb);
    }
    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     */
    async DescribeInstanceDetail(req, cb) {
        return this.request("DescribeInstanceDetail", req, cb);
    }
    /**
     * 查询指定集群有效回滚时间范围
     */
    async DescribeRollbackTimeRange(req, cb) {
        return this.request("DescribeRollbackTimeRange", req, cb);
    }
    /**
     * 修改指定集群的备份配置
     */
    async ModifyBackupConfig(req, cb) {
        return this.request("ModifyBackupConfig", req, cb);
    }
    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 修改维护时间配置
     */
    async ModifyMaintainPeriodConfig(req, cb) {
        return this.request("ModifyMaintainPeriodConfig", req, cb);
    }
    /**
     * 下线实例
     */
    async OfflineInstance(req, cb) {
        return this.request("OfflineInstance", req, cb);
    }
    /**
     * 查询实例维护时间窗
     */
    async DescribeMaintainPeriod(req, cb) {
        return this.request("DescribeMaintainPeriod", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 隔离集群
     */
    async IsolateCluster(req, cb) {
        return this.request("IsolateCluster", req, cb);
    }
    /**
     * 查询项目安全组信息
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 显示集群详情
     */
    async DescribeClusterDetail(req, cb) {
        return this.request("DescribeClusterDetail", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    async IsolateInstance(req, cb) {
        return this.request("IsolateInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     */
    async DescribeInstanceSpecs(req, cb) {
        return this.request("DescribeInstanceSpecs", req, cb);
    }
    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 根据计费订单id查询资源列表
     */
    async DescribeResourcesByDealName(req, cb) {
        return this.request("DescribeResourcesByDealName", req, cb);
    }
    /**
     * SetRenewFlag设置实例的自动续费功能
     */
    async SetRenewFlag(req, cb) {
        return this.request("SetRenewFlag", req, cb);
    }
    /**
     * 升级实例
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateClusters(req, cb) {
        return this.request("CreateClusters", req, cb);
    }
    /**
     * 指定时间和集群查询是否可回滚
     */
    async DescribeRollbackTimeValidity(req, cb) {
        return this.request("DescribeRollbackTimeValidity", req, cb);
    }
    /**
     * 查询实例安全组信息
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 本接口（AddInstances）用于集群添加实例
     */
    async AddInstances(req, cb) {
        return this.request("AddInstances", req, cb);
    }
}
exports.Client = Client;
