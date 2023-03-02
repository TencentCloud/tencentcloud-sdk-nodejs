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
const DescribeInstanceShardsRequest = models.DescribeInstanceShardsRequest;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const ResizeDiskRequest = models.ResizeDiskRequest;
const DestroyInstanceResponse = models.DestroyInstanceResponse;
const DescribeInstanceKeyValConfigsRequest = models.DescribeInstanceKeyValConfigsRequest;
const OpenBackUpResponse = models.OpenBackUpResponse;
const Charge = models.Charge;
const DescribeClusterConfigsResponse = models.DescribeClusterConfigsResponse;
const ActionAlterCkUserRequest = models.ActionAlterCkUserRequest;
const DescribeSpecRequest = models.DescribeSpecRequest;
const CkUserAlterInfo = models.CkUserAlterInfo;
const DescribeBackUpScheduleRequest = models.DescribeBackUpScheduleRequest;
const DescribeSpecResponse = models.DescribeSpecResponse;
const ModifyInstanceKeyValConfigsResponse = models.ModifyInstanceKeyValConfigsResponse;
const DestroyInstanceRequest = models.DestroyInstanceRequest;
const ModifyUserNewPrivilegeRequest = models.ModifyUserNewPrivilegeRequest;
const DescribeCkSqlApisRequest = models.DescribeCkSqlApisRequest;
const ClusterConfigsInfoFromEMR = models.ClusterConfigsInfoFromEMR;
const OpenBackUpRequest = models.OpenBackUpRequest;
const BackupTableContent = models.BackupTableContent;
const CreateInstanceNewResponse = models.CreateInstanceNewResponse;
const ConfigSubmitContext = models.ConfigSubmitContext;
const CreateInstanceNewRequest = models.CreateInstanceNewRequest;
const InstanceInfo = models.InstanceInfo;
const ModifyClusterConfigsRequest = models.ModifyClusterConfigsRequest;
const DescribeInstanceKeyValConfigsResponse = models.DescribeInstanceKeyValConfigsResponse;
const ResourceSpec = models.ResourceSpec;
const ModifyClusterConfigsResponse = models.ModifyClusterConfigsResponse;
const DiskSpec = models.DiskSpec;
const DescribeClusterConfigsRequest = models.DescribeClusterConfigsRequest;
const ModifyInstanceKeyValConfigsRequest = models.ModifyInstanceKeyValConfigsRequest;
const MapConfigItem = models.MapConfigItem;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const CreateBackUpScheduleResponse = models.CreateBackUpScheduleResponse;
const InstanceConfigItem = models.InstanceConfigItem;
const DescribeInstanceResponse = models.DescribeInstanceResponse;
const ScaleUpInstanceRequest = models.ScaleUpInstanceRequest;
const NodesSummary = models.NodesSummary;
const DescribeInstanceShardsResponse = models.DescribeInstanceShardsResponse;
const InstanceConfigInfo = models.InstanceConfigInfo;
const CreateBackUpScheduleRequest = models.CreateBackUpScheduleRequest;
const NodeSpec = models.NodeSpec;
const DescribeInstanceRequest = models.DescribeInstanceRequest;
const ActionAlterCkUserResponse = models.ActionAlterCkUserResponse;
const Tag = models.Tag;
const ScheduleStrategy = models.ScheduleStrategy;
const ResizeDiskResponse = models.ResizeDiskResponse;
const DescribeBackUpScheduleResponse = models.DescribeBackUpScheduleResponse;
const DescribeCkSqlApisResponse = models.DescribeCkSqlApisResponse;
const ScaleUpInstanceResponse = models.ScaleUpInstanceResponse;
const ModifyUserNewPrivilegeResponse = models.ModifyUserNewPrivilegeResponse;


/**
 * cdwch client
 * @class
 */
class CdwchClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdwch.tencentcloudapi.com", "2020-09-15", credential, region, profile);
    }
    
    /**
     * 查询备份策略信息
     * @param {DescribeBackUpScheduleRequest} req
     * @param {function(string, DescribeBackUpScheduleResponse):void} cb
     * @public
     */
    DescribeBackUpSchedule(req, cb) {
        let resp = new DescribeBackUpScheduleResponse();
        this.request("DescribeBackUpSchedule", req, resp, cb);
    }

    /**
     * 创建或者修改备份策略
     * @param {CreateBackUpScheduleRequest} req
     * @param {function(string, CreateBackUpScheduleResponse):void} cb
     * @public
     */
    CreateBackUpSchedule(req, cb) {
        let resp = new CreateBackUpScheduleResponse();
        this.request("CreateBackUpSchedule", req, resp, cb);
    }

    /**
     * 垂直扩缩容节点规格，修改节点cvm的规格cpu，内存。 规格变化阶段，服务不可用。
     * @param {ScaleUpInstanceRequest} req
     * @param {function(string, ScaleUpInstanceResponse):void} cb
     * @public
     */
    ScaleUpInstance(req, cb) {
        let resp = new ScaleUpInstanceResponse();
        this.request("ScaleUpInstance", req, resp, cb);
    }

    /**
     * 查询集群用户、集群表，数据库等相关信息
     * @param {DescribeCkSqlApisRequest} req
     * @param {function(string, DescribeCkSqlApisResponse):void} cb
     * @public
     */
    DescribeCkSqlApis(req, cb) {
        let resp = new DescribeCkSqlApisResponse();
        this.request("DescribeCkSqlApis", req, resp, cb);
    }

    /**
     * 新增和修改用户接口
     * @param {ActionAlterCkUserRequest} req
     * @param {function(string, ActionAlterCkUserResponse):void} cb
     * @public
     */
    ActionAlterCkUser(req, cb) {
        let resp = new ActionAlterCkUserResponse();
        this.request("ActionAlterCkUser", req, resp, cb);
    }

    /**
     * 开启或者关闭策略
     * @param {OpenBackUpRequest} req
     * @param {function(string, OpenBackUpResponse):void} cb
     * @public
     */
    OpenBackUp(req, cb) {
        let resp = new OpenBackUpResponse();
        this.request("OpenBackUp", req, resp, cb);
    }

    /**
     * 在集群详情页面获取所有参数列表
     * @param {DescribeInstanceKeyValConfigsRequest} req
     * @param {function(string, DescribeInstanceKeyValConfigsResponse):void} cb
     * @public
     */
    DescribeInstanceKeyValConfigs(req, cb) {
        let resp = new DescribeInstanceKeyValConfigsResponse();
        this.request("DescribeInstanceKeyValConfigs", req, resp, cb);
    }

    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     * @param {DescribeSpecRequest} req
     * @param {function(string, DescribeSpecResponse):void} cb
     * @public
     */
    DescribeSpec(req, cb) {
        let resp = new DescribeSpecResponse();
        this.request("DescribeSpec", req, resp, cb);
    }

    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     * @param {DescribeClusterConfigsRequest} req
     * @param {function(string, DescribeClusterConfigsResponse):void} cb
     * @public
     */
    DescribeClusterConfigs(req, cb) {
        let resp = new DescribeClusterConfigsResponse();
        this.request("DescribeClusterConfigs", req, resp, cb);
    }

    /**
     * 销毁集群 open api
     * @param {DestroyInstanceRequest} req
     * @param {function(string, DestroyInstanceResponse):void} cb
     * @public
     */
    DestroyInstance(req, cb) {
        let resp = new DestroyInstanceResponse();
        this.request("DestroyInstance", req, resp, cb);
    }

    /**
     * 根据实例ID查询某个实例的具体信息
     * @param {DescribeInstanceRequest} req
     * @param {function(string, DescribeInstanceResponse):void} cb
     * @public
     */
    DescribeInstance(req, cb) {
        let resp = new DescribeInstanceResponse();
        this.request("DescribeInstance", req, resp, cb);
    }

    /**
     * 在集群配置页面修改集群配置文件接口，xml模式
     * @param {ModifyClusterConfigsRequest} req
     * @param {function(string, ModifyClusterConfigsResponse):void} cb
     * @public
     */
    ModifyClusterConfigs(req, cb) {
        let resp = new ModifyClusterConfigsResponse();
        this.request("ModifyClusterConfigs", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateInstanceNewRequest} req
     * @param {function(string, CreateInstanceNewResponse):void} cb
     * @public
     */
    CreateInstanceNew(req, cb) {
        let resp = new CreateInstanceNewResponse();
        this.request("CreateInstanceNew", req, resp, cb);
    }

    /**
     * KV模式修改配置接口
     * @param {ModifyInstanceKeyValConfigsRequest} req
     * @param {function(string, ModifyInstanceKeyValConfigsResponse):void} cb
     * @public
     */
    ModifyInstanceKeyValConfigs(req, cb) {
        let resp = new ModifyInstanceKeyValConfigsResponse();
        this.request("ModifyInstanceKeyValConfigs", req, resp, cb);
    }

    /**
     * 针对ck账号的权限做管控（新版）
     * @param {ModifyUserNewPrivilegeRequest} req
     * @param {function(string, ModifyUserNewPrivilegeResponse):void} cb
     * @public
     */
    ModifyUserNewPrivilege(req, cb) {
        let resp = new ModifyUserNewPrivilegeResponse();
        this.request("ModifyUserNewPrivilege", req, resp, cb);
    }

    /**
     * 调整clickhouse节点数量
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * 扩容磁盘，包含扩容数据节点，zk节点
     * @param {ResizeDiskRequest} req
     * @param {function(string, ResizeDiskResponse):void} cb
     * @public
     */
    ResizeDisk(req, cb) {
        let resp = new ResizeDiskResponse();
        this.request("ResizeDisk", req, resp, cb);
    }

    /**
     * 获取实例shard信息列表
     * @param {DescribeInstanceShardsRequest} req
     * @param {function(string, DescribeInstanceShardsResponse):void} cb
     * @public
     */
    DescribeInstanceShards(req, cb) {
        let resp = new DescribeInstanceShardsResponse();
        this.request("DescribeInstanceShards", req, resp, cb);
    }


}
module.exports = CdwchClient;
