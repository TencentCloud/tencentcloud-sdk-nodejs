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
 * cdwch client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdwch.tencentcloudapi.com", "2020-09-15", clientConfig);
    }
    /**
     * 创建或者修改备份策略
     */
    async CreateBackUpSchedule(req, cb) {
        return this.request("CreateBackUpSchedule", req, cb);
    }
    /**
     * 查询备份任务列表
     */
    async DescribeBackUpJob(req, cb) {
        return this.request("DescribeBackUpJob", req, cb);
    }
    /**
     * 销毁集群 open api
     */
    async DestroyInstance(req, cb) {
        return this.request("DestroyInstance", req, cb);
    }
    /**
     * 在集群详情页面获取所有参数列表
     */
    async DescribeInstanceKeyValConfigs(req, cb) {
        return this.request("DescribeInstanceKeyValConfigs", req, cb);
    }
    /**
     * 开启或者关闭策略
     */
    async OpenBackUp(req, cb) {
        return this.request("OpenBackUp", req, cb);
    }
    /**
     * KV模式修改配置接口
     */
    async ModifyInstanceKeyValConfigs(req, cb) {
        return this.request("ModifyInstanceKeyValConfigs", req, cb);
    }
    /**
     * 垂直扩缩容节点规格，修改节点cvm的规格cpu，内存。 规格变化阶段，服务不可用。
     */
    async ScaleUpInstance(req, cb) {
        return this.request("ScaleUpInstance", req, cb);
    }
    /**
     * 获取可备份表信息
     */
    async DescribeBackUpTables(req, cb) {
        return this.request("DescribeBackUpTables", req, cb);
    }
    /**
     * 调整clickhouse节点数量
     */
    async ScaleOutInstance(req, cb) {
        return this.request("ScaleOutInstance", req, cb);
    }
    /**
     * 获取实例shard信息列表
     */
    async DescribeInstanceShards(req, cb) {
        return this.request("DescribeInstanceShards", req, cb);
    }
    /**
     * 获取实例列表，供外部sdk使用
     */
    async DescribeInstancesNew(req, cb) {
        return this.request("DescribeInstancesNew", req, cb);
    }
    /**
     * 删除备份数据
     */
    async DeleteBackUpData(req, cb) {
        return this.request("DeleteBackUpData", req, cb);
    }
    /**
     * 新增和修改用户接口
     */
    async ActionAlterCkUser(req, cb) {
        return this.request("ActionAlterCkUser", req, cb);
    }
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    async DescribeInstanceState(req, cb) {
        return this.request("DescribeInstanceState", req, cb);
    }
    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     */
    async DescribeClusterConfigs(req, cb) {
        return this.request("DescribeClusterConfigs", req, cb);
    }
    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    async ModifyClusterConfigs(req, cb) {
        return this.request("ModifyClusterConfigs", req, cb);
    }
    /**
     * open-api接口提供弹性伸缩云原生集群能力
     */
    async ScaleCNOutUpInstance(req, cb) {
        return this.request("ScaleCNOutUpInstance", req, cb);
    }
    /**
     * 备份恢复
     */
    async RecoverBackUpJob(req, cb) {
        return this.request("RecoverBackUpJob", req, cb);
    }
    /**
     * 查询集群用户、集群表，数据库等相关信息
     */
    async DescribeCkSqlApis(req, cb) {
        return this.request("DescribeCkSqlApis", req, cb);
    }
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    async DescribeSpec(req, cb) {
        return this.request("DescribeSpec", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateInstanceNew(req, cb) {
        return this.request("CreateInstanceNew", req, cb);
    }
    /**
     * 查询备份策略信息
     */
    async DescribeBackUpSchedule(req, cb) {
        return this.request("DescribeBackUpSchedule", req, cb);
    }
    /**
     * 查询备份任务详情
     */
    async DescribeBackUpJobDetail(req, cb) {
        return this.request("DescribeBackUpJobDetail", req, cb);
    }
    /**
     * 集群vcluster列表
     */
    async DescribeInstanceClusters(req, cb) {
        return this.request("DescribeInstanceClusters", req, cb);
    }
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 获取实例节点信息列表
     */
    async DescribeInstanceNodes(req, cb) {
        return this.request("DescribeInstanceNodes", req, cb);
    }
    /**
     * 针对集群账号的权限做管控（新版）
     */
    async ModifyUserNewPrivilege(req, cb) {
        return this.request("ModifyUserNewPrivilege", req, cb);
    }
    /**
     * 扩容磁盘，包含扩容数据节点，zk节点
     */
    async ResizeDisk(req, cb) {
        return this.request("ResizeDisk", req, cb);
    }
}
exports.Client = Client;
