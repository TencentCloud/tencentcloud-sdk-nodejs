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
 * es client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("es.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * 智能运维诊断集群
     */
    async DiagnoseInstance(req, cb) {
        return this.request("DiagnoseInstance", req, cb);
    }
    /**
     * 用于删除Logstash实例
     */
    async DeleteLogstashInstance(req, cb) {
        return this.request("DeleteLogstashInstance", req, cb);
    }
    /**
     * 快照备份恢复，从仓库中恢复快照到集群中
     */
    async RestoreClusterSnapshot(req, cb) {
        return this.request("RestoreClusterSnapshot", req, cb);
    }
    /**
     * 获取接收客户端请求的节点类型
     */
    async GetRequestTargetNodeTypes(req, cb) {
        return this.request("GetRequestTargetNodeTypes", req, cb);
    }
    /**
     * 用于批量停止Logstash管道
     */
    async StopLogstashPipelines(req, cb) {
        return this.request("StopLogstashPipelines", req, cb);
    }
    /**
     * 获取Serverless索引空间列表
     */
    async DescribeServerlessSpaces(req, cb) {
        return this.request("DescribeServerlessSpaces", req, cb);
    }
    /**
     * ES集群安装模型接口
     */
    async InstallInstanceModel(req, cb) {
        return this.request("InstallInstanceModel", req, cb);
    }
    /**
     * 获取索引列表
     */
    async DescribeIndexList(req, cb) {
        return this.request("DescribeIndexList", req, cb);
    }
    /**
     * 用于更新管道描述信息
     */
    async UpdateLogstashPipelineDesc(req, cb) {
        return this.request("UpdateLogstashPipelineDesc", req, cb);
    }
    /**
     * 查询快照信息接口
     */
    async DescribeUserCosSnapshotList(req, cb) {
        return this.request("DescribeUserCosSnapshotList", req, cb);
    }
    /**
     * 更新索引
     */
    async UpdateIndex(req, cb) {
        return this.request("UpdateIndex", req, cb);
    }
    /**
     * 销毁集群实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 查看智能运维配置
     */
    async GetDiagnoseSettings(req, cb) {
        return this.request("GetDiagnoseSettings", req, cb);
    }
    /**
     * 创建索引
     */
    async CreateIndex(req, cb) {
        return this.request("CreateIndex", req, cb);
    }
    /**
     * 用于启动Logstash管道
     */
    async StartLogstashPipelines(req, cb) {
        return this.request("StartLogstashPipelines", req, cb);
    }
    /**
     * 更新接收客户端请求的节点类型
     */
    async UpdateRequestTargetNodeTypes(req, cb) {
        return this.request("UpdateRequestTargetNodeTypes", req, cb);
    }
    /**
     * 更新智能运维配置
     */
    async UpdateDiagnoseSettings(req, cb) {
        return this.request("UpdateDiagnoseSettings", req, cb);
    }
    /**
     * cos迁移流程
     */
    async CreateCosMigrateToServerlessInstance(req, cb) {
        return this.request("CreateCosMigrateToServerlessInstance", req, cb);
    }
    /**
     * 变更插件列表
     */
    async UpdatePlugins(req, cb) {
        return this.request("UpdatePlugins", req, cb);
    }
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，等操作。参数中InstanceId为必传参数，参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeNum: 修改实例节点数量（节点横向扩缩容，纵向扩缩容等）
- YMLConfig: 修改实例YML配置
- BindedES：修改绑定的ES集群配置
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    async UpdateLogstashInstance(req, cb) {
        return this.request("UpdateLogstashInstance", req, cb);
    }
    /**
     * 检查cos迁移索引元数据
     */
    async CheckMigrateIndexMetaData(req, cb) {
        return this.request("CheckMigrateIndexMetaData", req, cb);
    }
    /**
     * 更新实例Jdk配置
     */
    async UpdateJdk(req, cb) {
        return this.request("UpdateJdk", req, cb);
    }
    /**
     * 删除Serverless索引
     */
    async DeleteServerlessInstance(req, cb) {
        return this.request("DeleteServerlessInstance", req, cb);
    }
    /**
     * 创建Serverless索引空间
     */
    async CreateServerlessSpaceV2(req, cb) {
        return this.request("CreateServerlessSpaceV2", req, cb);
    }
    /**
     * 获取快照备份列表
     */
    async DescribeClusterSnapshot(req, cb) {
        return this.request("DescribeClusterSnapshot", req, cb);
    }
    /**
     * 用于创建Logstash实例
     */
    async CreateLogstashInstance(req, cb) {
        return this.request("CreateLogstashInstance", req, cb);
    }
    /**
     * 重启ES集群实例(用于系统版本更新等操作)
     */
    async RestartInstance(req, cb) {
        return this.request("RestartInstance", req, cb);
    }
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    async UpdateInstance(req, cb) {
        return this.request("UpdateInstance", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的ES集群的日志
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
    /**
     * 重启Kibana
     */
    async RestartKibana(req, cb) {
        return this.request("RestartKibana", req, cb);
    }
    /**
     * 修改绑定VIP的安全组，传安全组id列表
     */
    async ModifyEsVipSecurityGroup(req, cb) {
        return this.request("ModifyEsVipSecurityGroup", req, cb);
    }
    /**
     * 创建Serverless索引
     */
    async CreateServerlessInstance(req, cb) {
        return this.request("CreateServerlessInstance", req, cb);
    }
    /**
     * 获取serverless实例对应指标，获取space维度时不需要传入indexid，获取index时不需要传入spaceid
获取一段时间时间范围内的指标数据
     */
    async DescribeServerlessMetrics(req, cb) {
        return this.request("DescribeServerlessMetrics", req, cb);
    }
    /**
     * 查询实例指定条件下的操作记录
     */
    async DescribeInstanceOperations(req, cb) {
        return this.request("DescribeInstanceOperations", req, cb);
    }
    /**
     * space维度的kibana获取登录token
     */
    async DescribeSpaceKibanaTools(req, cb) {
        return this.request("DescribeSpaceKibanaTools", req, cb);
    }
    /**
     * 用于获取Logstash实例管道列表
     */
    async DescribeLogstashPipelines(req, cb) {
        return this.request("DescribeLogstashPipelines", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的所有Logstash实例
     */
    async DescribeLogstashInstances(req, cb) {
        return this.request("DescribeLogstashInstances", req, cb);
    }
    /**
     * Serverless获取索引列表
     */
    async DescribeServerlessInstances(req, cb) {
        return this.request("DescribeServerlessInstances", req, cb);
    }
    /**
     * 查询集群各视图数据，包括集群维度、节点维度、Kibana维度
     */
    async DescribeViews(req, cb) {
        return this.request("DescribeViews", req, cb);
    }
    /**
     * 创建指定规格的ES集群实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 更新Serverless索引
     */
    async UpdateServerlessInstance(req, cb) {
        return this.request("UpdateServerlessInstance", req, cb);
    }
    /**
     * 升级ES集群版本
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 查询智能运维诊断结果报告
     */
    async DescribeDiagnose(req, cb) {
        return this.request("DescribeDiagnose", req, cb);
    }
    /**
     * 删除Serverless空间子用户
     */
    async DeleteServerlessSpaceUser(req, cb) {
        return this.request("DeleteServerlessSpaceUser", req, cb);
    }
    /**
     * 用于批量删除Logstash管道
     */
    async DeleteLogstashPipelines(req, cb) {
        return this.request("DeleteLogstashPipelines", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的所有实例
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 更新Serverless索引空间
     */
    async UpdateServerlessSpace(req, cb) {
        return this.request("UpdateServerlessSpace", req, cb);
    }
    /**
     * 删除索引
     */
    async DeleteIndex(req, cb) {
        return this.request("DeleteIndex", req, cb);
    }
    /**
     * 用于重启Logstash实例
     */
    async RestartLogstashInstance(req, cb) {
        return this.request("RestartLogstashInstance", req, cb);
    }
    /**
     * 集群快照手动创建
     */
    async CreateClusterSnapshot(req, cb) {
        return this.request("CreateClusterSnapshot", req, cb);
    }
    /**
     * 删除快照仓库里备份的快照
     */
    async DeleteClusterSnapshot(req, cb) {
        return this.request("DeleteClusterSnapshot", req, cb);
    }
    /**
     * 查询用户该地域下符合条件的Logstash实例的日志
     */
    async DescribeLogstashInstanceLogs(req, cb) {
        return this.request("DescribeLogstashInstanceLogs", req, cb);
    }
    /**
     * 用于重启集群节点
     */
    async RestartNodes(req, cb) {
        return this.request("RestartNodes", req, cb);
    }
    /**
     * 查看Serverless空间子用户
     */
    async DescribeServerlessSpaceUser(req, cb) {
        return this.request("DescribeServerlessSpaceUser", req, cb);
    }
    /**
     * 用于下发并且部署管道
     */
    async SaveAndDeployLogstashPipeline(req, cb) {
        return this.request("SaveAndDeployLogstashPipeline", req, cb);
    }
    /**
     * 更新ES集群词典
     */
    async UpdateDictionaries(req, cb) {
        return this.request("UpdateDictionaries", req, cb);
    }
    /**
     * 升级ES商业特性
     */
    async UpgradeLicense(req, cb) {
        return this.request("UpgradeLicense", req, cb);
    }
    /**
     * 查询实例插件列表
     */
    async DescribeInstancePluginList(req, cb) {
        return this.request("DescribeInstancePluginList", req, cb);
    }
    /**
     * 获取索引元数据
     */
    async DescribeIndexMeta(req, cb) {
        return this.request("DescribeIndexMeta", req, cb);
    }
    /**
     * 查询实例指定条件下的操作记录
     */
    async DescribeLogstashInstanceOperations(req, cb) {
        return this.request("DescribeLogstashInstanceOperations", req, cb);
    }
    /**
     * 集群续费询价接口，续费前通过调用该接口，可获取集群续费的价格。
     */
    async InquirePriceRenewInstance(req, cb) {
        return this.request("InquirePriceRenewInstance", req, cb);
    }
}
exports.Client = Client;
