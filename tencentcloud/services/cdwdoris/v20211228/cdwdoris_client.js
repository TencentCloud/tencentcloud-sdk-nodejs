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
 * cdwdoris client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdwdoris.tencentcloudapi.com", "2021-12-28", clientConfig);
    }
    /**
     * 销毁集群
     */
    async DestroyInstance(req, cb) {
        return this.request("DestroyInstance", req, cb);
    }
    /**
     * 针对驱动sql命令查询ck集群接口
     */
    async DescribeSqlApis(req, cb) {
        return this.request("DescribeSqlApis", req, cb);
    }
    /**
     * 查询恢复任务进度详情
     */
    async DescribeRestoreTaskDetail(req, cb) {
        return this.request("DescribeRestoreTaskDetail", req, cb);
    }
    /**
     * 创建资源组
     */
    async CreateWorkloadGroup(req, cb) {
        return this.request("CreateWorkloadGroup", req, cb);
    }
    /**
     * 下载数据库审计日志
     */
    async DescribeDatabaseAuditDownload(req, cb) {
        return this.request("DescribeDatabaseAuditDownload", req, cb);
    }
    /**
     * 获取BE/FE节点角色
     */
    async DescribeInstanceNodesInfo(req, cb) {
        return this.request("DescribeInstanceNodesInfo", req, cb);
    }
    /**
     * 获取集群已使用子网信息
     */
    async DescribeInstanceUsedSubnets(req, cb) {
        return this.request("DescribeInstanceUsedSubnets", req, cb);
    }
    /**
     * 获取当前集群各用户绑定的资源信息
     */
    async DescribeUserBindWorkloadGroup(req, cb) {
        return this.request("DescribeUserBindWorkloadGroup", req, cb);
    }
    /**
     * 计算资源垂直变配
     */
    async ScaleUpInstance(req, cb) {
        return this.request("ScaleUpInstance", req, cb);
    }
    /**
     * 购买页获取地域及可用区列表、内核版本、网络规则等
     */
    async DescribeRegionZone(req, cb) {
        return this.request("DescribeRegionZone", req, cb);
    }
    /**
     * 修改资源组信息
     */
    async ModifyWorkloadGroup(req, cb) {
        return this.request("ModifyWorkloadGroup", req, cb);
    }
    /**
     * 获取慢查询列表
     */
    async DescribeSlowQueryRecords(req, cb) {
        return this.request("DescribeSlowQueryRecords", req, cb);
    }
    /**
     * 开启或关闭资源组
     */
    async ModifyWorkloadGroupStatus(req, cb) {
        return this.request("ModifyWorkloadGroupStatus", req, cb);
    }
    /**
     * 修改用户绑定的资源组
     */
    async ModifyUserBindWorkloadGroup(req, cb) {
        return this.request("ModifyUserBindWorkloadGroup", req, cb);
    }
    /**
     * 水平扩容节点
     */
    async ScaleOutInstance(req, cb) {
        return this.request("ScaleOutInstance", req, cb);
    }
    /**
     * 获取集群列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
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
     * 删除资源组
     */
    async DeleteWorkloadGroup(req, cb) {
        return this.request("DeleteWorkloadGroup", req, cb);
    }
    /**
     * 更改安全组
     */
    async ModifySecurityGroups(req, cb) {
        return this.request("ModifySecurityGroups", req, cb);
    }
    /**
     * 获取联合身份临时访问凭证
     */
    async DescribeFederationToken(req, cb) {
        return this.request("DescribeFederationToken", req, cb);
    }
    /**
     * 集群缩容
     */
    async ReduceInstance(req, cb) {
        return this.request("ReduceInstance", req, cb);
    }
    /**
     * 修改用户权限,支持catalog，全部db，部分db表三种权限设置类别
     */
    async ModifyUserPrivilegesV3(req, cb) {
        return this.request("ModifyUserPrivilegesV3", req, cb);
    }
    /**
     * 给已存在集群，配置日志服务
     */
    async FitClsLog(req, cb) {
        return this.request("FitClsLog", req, cb);
    }
    /**
     * 获取数据库审计记录
     */
    async DescribeDatabaseAuditRecords(req, cb) {
        return this.request("DescribeDatabaseAuditRecords", req, cb);
    }
    /**
     * 根据集群ID查询某个集群的具体信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 通过API创建集群
     */
    async CreateInstanceNew(req, cb) {
        return this.request("CreateInstanceNew", req, cb);
    }
    /**
     * 获取集群节点信息列表
     */
    async DescribeInstanceNodes(req, cb) {
        return this.request("DescribeInstanceNodes", req, cb);
    }
    /**
     * 生成计费相关接口的GoodsDetail结构
     */
    async DescribeGoodsDetail(req, cb) {
        return this.request("DescribeGoodsDetail", req, cb);
    }
    /**
     * 扩容云盘
     */
    async ResizeDisk(req, cb) {
        return this.request("ResizeDisk", req, cb);
    }
    /**
     * 集群滚动重启
     */
    async RestartClusterForNode(req, cb) {
        return this.request("RestartClusterForNode", req, cb);
    }
    /**
     * 下载慢查询文件
     */
    async DescribeSlowQueryRecordsDownload(req, cb) {
        return this.request("DescribeSlowQueryRecordsDownload", req, cb);
    }
    /**
     * 检查内核版本是否支持新的备份恢复语法
     */
    async DescribeReplicaVersion(req, cb) {
        return this.request("DescribeReplicaVersion", req, cb);
    }
    /**
     * 获取资源组信息
     */
    async DescribeWorkloadGroup(req, cb) {
        return this.request("DescribeWorkloadGroup", req, cb);
    }
    /**
     * 修改集群名称
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * KV模式修改配置接口
     */
    async ModifyInstanceKeyValConfigs(req, cb) {
        return this.request("ModifyInstanceKeyValConfigs", req, cb);
    }
}
exports.Client = Client;
