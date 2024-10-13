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
 * oceanus client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("oceanus.tencentcloudapi.com", "2019-04-22", clientConfig);
    }
    /**
     * 生成树状作业显示结构
     */
    async DescribeTreeJobs(req, cb) {
        return this.request("DescribeTreeJobs", req, cb);
    }
    /**
     * 查询树状结构资源列表
     */
    async DescribeTreeResources(req, cb) {
        return this.request("DescribeTreeResources", req, cb);
    }
    /**
     * 单条和批量复制作业
     */
    async CopyJobs(req, cb) {
        return this.request("CopyJobs", req, cb);
    }
    /**
     * 通过Sql gateway执行satement
     */
    async RunSqlGatewayStatement(req, cb) {
        return this.request("RunSqlGatewayStatement", req, cb);
    }
    /**
     * 删除资源版本
     */
    async DeleteResourceConfigs(req, cb) {
        return this.request("DeleteResourceConfigs", req, cb);
    }
    /**
     * 创建工作空间
     */
    async CreateWorkSpace(req, cb) {
        return this.request("CreateWorkSpace", req, cb);
    }
    /**
     * 创建资源配置接口
     */
    async CreateResourceConfig(req, cb) {
        return this.request("CreateResourceConfig", req, cb);
    }
    /**
     * 删除作业表配置
     */
    async DeleteTableConfig(req, cb) {
        return this.request("DeleteTableConfig", req, cb);
    }
    /**
     * 查询指定文件夹及其相应的子文件夹信息
     */
    async DescribeFolder(req, cb) {
        return this.request("DescribeFolder", req, cb);
    }
    /**
     * 删除工作空间
     */
    async DeleteWorkSpace(req, cb) {
        return this.request("DeleteWorkSpace", req, cb);
    }
    /**
     * 自定义树状结构页面拖拽文件夹
     */
    async ModifyFolder(req, cb) {
        return this.request("ModifyFolder", req, cb);
    }
    /**
     * 查找Savepoint列表
     */
    async DescribeJobSavepoint(req, cb) {
        return this.request("DescribeJobSavepoint", req, cb);
    }
    /**
     * 查询作业实例启动日志
     */
    async DescribeJobSubmissionLog(req, cb) {
        return this.request("DescribeJobSubmissionLog", req, cb);
    }
    /**
     * 描述资源接口
     */
    async DescribeResources(req, cb) {
        return this.request("DescribeResources", req, cb);
    }
    /**
     * 获取作业运行时的信息
     */
    async DescribeJobRuntimeInfo(req, cb) {
        return this.request("DescribeJobRuntimeInfo", req, cb);
    }
    /**
     * 查询Sql Gateway的Statement执行结果
     */
    async FetchSqlGatewayStatementResult(req, cb) {
        return this.request("FetchSqlGatewayStatementResult", req, cb);
    }
    /**
     * 获取指定作业的事件，包括作业启动停止、运行失败、快照失败、作业异常等各种事件类型
     */
    async DescribeJobEvents(req, cb) {
        return this.request("DescribeJobEvents", req, cb);
    }
    /**
     * 描述资源配置接口
     */
    async DescribeResourceConfigs(req, cb) {
        return this.request("DescribeResourceConfigs", req, cb);
    }
    /**
     * 作业列表删除文件夹
     */
    async DeleteFolders(req, cb) {
        return this.request("DeleteFolders", req, cb);
    }
    /**
     * 授权工作空间列表
     */
    async DescribeWorkSpaces(req, cb) {
        return this.request("DescribeWorkSpaces", req, cb);
    }
    /**
     * 新建作业接口，一个 AppId 最多允许创建1000个作业
     */
    async CreateJob(req, cb) {
        return this.request("CreateJob", req, cb);
    }
    /**
     * 触发Savepoint
     */
    async TriggerJobSavepoint(req, cb) {
        return this.request("TriggerJobSavepoint", req, cb);
    }
    /**
     * 批量启动或者恢复作业，批量操作数量上限20
     */
    async RunJobs(req, cb) {
        return this.request("RunJobs", req, cb);
    }
    /**
     * 批量删除作业接口，批量操作数量上限20
     */
    async DeleteJobs(req, cb) {
        return this.request("DeleteJobs", req, cb);
    }
    /**
     * 作业列表页面新建文件夹请求
     */
    async CreateFolder(req, cb) {
        return this.request("CreateFolder", req, cb);
    }
    /**
     * 检查快照是否可用
     */
    async CheckSavepoint(req, cb) {
        return this.request("CheckSavepoint", req, cb);
    }
    /**
     * 创建作业配置，一个作业最多有100个配置版本
     */
    async CreateJobConfig(req, cb) {
        return this.request("CreateJobConfig", req, cb);
    }
    /**
     * 查询集群
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 删除作业配置
     */
    async DeleteJobConfigs(req, cb) {
        return this.request("DeleteJobConfigs", req, cb);
    }
    /**
     * 批量停止作业，批量操作数量上限为20
     */
    async StopJobs(req, cb) {
        return this.request("StopJobs", req, cb);
    }
    /**
     * 获取资源关联作业信息
     */
    async DescribeResourceRelatedJobs(req, cb) {
        return this.request("DescribeResourceRelatedJobs", req, cb);
    }
    /**
     * 修改工作空间
     */
    async ModifyWorkSpace(req, cb) {
        return this.request("ModifyWorkSpace", req, cb);
    }
    /**
     * 删除资源接口
     */
    async DeleteResources(req, cb) {
        return this.request("DeleteResources", req, cb);
    }
    /**
     * 查询作业
     */
    async DescribeJobs(req, cb) {
        return this.request("DescribeJobs", req, cb);
    }
    /**
     * 更新作业属性，仅允许以下3种操作，不支持组合操作：
(1)	更新作业名称
(2)	更新作业备注
(3)	更新作业最大并行度
变更前提：WorkerCuNum<=MaxParallelism
如果MaxParallelism变小，不重启作业，待下一次重启生效
如果MaxParallelism变大，则要求入参RestartAllowed必须为True
假设作业运行状态，则先停止作业，再启动作业，中间状态丢失
假设作业暂停状态，则将作业更改为停止状态，中间状态丢失
     */
    async ModifyJob(req, cb) {
        return this.request("ModifyJob", req, cb);
    }
    /**
     * 创建资源接口
     */
    async CreateResource(req, cb) {
        return this.request("CreateResource", req, cb);
    }
    /**
     * 描述系统资源接口
     */
    async DescribeSystemResources(req, cb) {
        return this.request("DescribeSystemResources", req, cb);
    }
    /**
     * 查询元数据表
     */
    async GetMetaTable(req, cb) {
        return this.request("GetMetaTable", req, cb);
    }
    /**
     * 查询作业配置列表，一次最多查询100个
     */
    async DescribeJobConfigs(req, cb) {
        return this.request("DescribeJobConfigs", req, cb);
    }
}
exports.Client = Client;
