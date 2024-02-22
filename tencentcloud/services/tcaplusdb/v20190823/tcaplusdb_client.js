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
 * tcaplusdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", clientConfig);
    }
    /**
     * 删除表格的分布式索引
     */
    async DeleteTableIndex(req, cb) {
        return this.request("DeleteTableIndex", req, cb);
    }
    /**
     * 获取表格标签
     */
    async DescribeTableTags(req, cb) {
        return this.request("DescribeTableTags", req, cb);
    }
    /**
     * 更新申请单状态
     */
    async UpdateApply(req, cb) {
        return this.request("UpdateApply", req, cb);
    }
    /**
     * 修改表格标签
     */
    async ModifyTableTags(req, cb) {
        return this.request("ModifyTableTags", req, cb);
    }
    /**
     * 本接口用于创建TcaplusDB集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 查询独占集群可以申请的剩余机器
     */
    async DescribeMachine(req, cb) {
        return this.request("DescribeMachine", req, cb);
    }
    /**
     * 合并指定表格
     */
    async MergeTablesData(req, cb) {
        return this.request("MergeTablesData", req, cb);
    }
    /**
     * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
     */
    async DescribeUinInWhitelist(req, cb) {
        return this.request("DescribeUinInWhitelist", req, cb);
    }
    /**
     * 查询回收站中的表详情
     */
    async DescribeTablesInRecycle(req, cb) {
        return this.request("DescribeTablesInRecycle", req, cb);
    }
    /**
     * 修改指定的集群名称
     */
    async ModifyClusterName(req, cb) {
        return this.request("ModifyClusterName", req, cb);
    }
    /**
     * 当restful api为关闭状态时，可以通过此接口关闭restful api
     */
    async DisableRestProxy(req, cb) {
        return this.request("DisableRestProxy", req, cb);
    }
    /**
     * 表格数据回档
     */
    async RollbackTables(req, cb) {
        return this.request("RollbackTables", req, cb);
    }
    /**
     * 删除手工备份
     */
    async DeleteBackupRecords(req, cb) {
        return this.request("DeleteBackupRecords", req, cb);
    }
    /**
     * 新增、修改表格数据订阅
     */
    async SetTableDataFlow(req, cb) {
        return this.request("SetTableDataFlow", req, cb);
    }
    /**
     * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     */
    async ModifyClusterPassword(req, cb) {
        return this.request("ModifyClusterPassword", req, cb);
    }
    /**
     * 设置表格分布式索引
     */
    async SetTableIndex(req, cb) {
        return this.request("SetTableIndex", req, cb);
    }
    /**
     * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
     */
    async DeleteIdlFiles(req, cb) {
        return this.request("DeleteIdlFiles", req, cb);
    }
    /**
     * 构造表格过去时间点的快照
     */
    async CreateSnapshots(req, cb) {
        return this.request("CreateSnapshots", req, cb);
    }
    /**
     * 当restful api为关闭状态时，可以通过此接口开启restful api。
     */
    async EnableRestProxy(req, cb) {
        return this.request("EnableRestProxy", req, cb);
    }
    /**
     * 新增、删除、修改备份过期策略， ClusterId必须为具体的集群Id（appid）
     */
    async SetBackupExpireRule(req, cb) {
        return this.request("SetBackupExpireRule", req, cb);
    }
    /**
     * 用户创建备份任务
     */
    async CreateBackup(req, cb) {
        return this.request("CreateBackup", req, cb);
    }
    /**
     * 修改集群审批状态
     */
    async ModifyCensorship(req, cb) {
        return this.request("ModifyCensorship", req, cb);
    }
    /**
     * 根据选择的IDL文件列表，批量创建表格
     */
    async CreateTables(req, cb) {
        return this.request("CreateTables", req, cb);
    }
    /**
     * 表格扩缩容
     */
    async ModifyTableQuotas(req, cb) {
        return this.request("ModifyTableQuotas", req, cb);
    }
    /**
     * 查询TcaplusDB集群列表，包含集群详细信息。
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 修改独占集群机器
     */
    async ModifyClusterMachine(req, cb) {
        return this.request("ModifyClusterMachine", req, cb);
    }
    /**
     * 删除表格组
     */
    async DeleteTableGroup(req, cb) {
        return this.request("DeleteTableGroup", req, cb);
    }
    /**
     * 修改TcaplusDB表格组名称
     */
    async ModifyTableGroupName(req, cb) {
        return this.request("ModifyTableGroupName", req, cb);
    }
    /**
     * 删除表格的快照
     */
    async DeleteSnapshots(req, cb) {
        return this.request("DeleteSnapshots", req, cb);
    }
    /**
     * 在TcaplusDB集群下创建表格组
     */
    async CreateTableGroup(req, cb) {
        return this.request("CreateTableGroup", req, cb);
    }
    /**
     * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
     */
    async RecoverRecycleTables(req, cb) {
        return this.request("RecoverRecycleTables", req, cb);
    }
    /**
     * 查询TcaplusDB服务支持的地域列表
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 查询任务列表
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 查询快照列表
     */
    async DescribeSnapshots(req, cb) {
        return this.request("DescribeSnapshots", req, cb);
    }
    /**
     * 查询备份记录

查询集群级别时， 将TableGroupId设置为"-1", 将TableName设置为"-1"
查询集群+表格组级别时， 将TableName设置为"-1"
查询集群+表格组+表格级别时， 都不能设置为“-1”
     */
    async DescribeBackupRecords(req, cb) {
        return this.request("DescribeBackupRecords", req, cb);
    }
    /**
     * 修改集群标签
     */
    async ModifyClusterTags(req, cb) {
        return this.request("ModifyClusterTags", req, cb);
    }
    /**
     * 修改表格组标签
     */
    async ModifyTableGroupTags(req, cb) {
        return this.request("ModifyTableGroupTags", req, cb);
    }
    /**
     * 获取审批管理的申请单
     */
    async DescribeApplications(req, cb) {
        return this.request("DescribeApplications", req, cb);
    }
    /**
     * 获取表格组关联的标签列表
     */
    async DescribeTableGroupTags(req, cb) {
        return this.request("DescribeTableGroupTags", req, cb);
    }
    /**
     * 将快照数据导入到新表或当前表
     */
    async ImportSnapshots(req, cb) {
        return this.request("ImportSnapshots", req, cb);
    }
    /**
     * 查询表格组列表
     */
    async DescribeTableGroups(req, cb) {
        return this.request("DescribeTableGroups", req, cb);
    }
    /**
     * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
     */
    async CompareIdlFiles(req, cb) {
        return this.request("CompareIdlFiles", req, cb);
    }
    /**
     * 查询表描述文件详情
     */
    async DescribeIdlFileInfos(req, cb) {
        return this.request("DescribeIdlFileInfos", req, cb);
    }
    /**
     * 删除指定的表,第一次调用此接口代表将表移动至回收站，再次调用代表将此表格从回收站中彻底删除。
     */
    async DeleteTables(req, cb) {
        return this.request("DeleteTables", req, cb);
    }
    /**
     * 修改表备注信息
     */
    async ModifyTableMemos(req, cb) {
        return this.request("ModifyTableMemos", req, cb);
    }
    /**
     * 修改表格快照的过期时间
     */
    async ModifySnapshots(req, cb) {
        return this.request("ModifySnapshots", req, cb);
    }
    /**
     * 上传并校验创建表格文件，返回校验合法的表格定义
     */
    async VerifyIdlFiles(req, cb) {
        return this.request("VerifyIdlFiles", req, cb);
    }
    /**
     * 根据给定的表信息，清除表数据。
     */
    async ClearTables(req, cb) {
        return this.request("ClearTables", req, cb);
    }
    /**
     * 删除表格的数据订阅
     */
    async DeleteTableDataFlow(req, cb) {
        return this.request("DeleteTableDataFlow", req, cb);
    }
    /**
     * 根据用户选定的表定义IDL文件，批量修改指定的表
     */
    async ModifyTables(req, cb) {
        return this.request("ModifyTables", req, cb);
    }
    /**
     * 查询表详情
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
    /**
     * 获取集群关联的标签列表
     */
    async DescribeClusterTags(req, cb) {
        return this.request("DescribeClusterTags", req, cb);
    }
}
exports.Client = Client;
