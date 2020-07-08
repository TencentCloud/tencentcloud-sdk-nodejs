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
const InstanceLog = models.InstanceLog;
const LocalDiskInfo = models.LocalDiskInfo;
const TaskDetail = models.TaskDetail;
const NodeInfo = models.NodeInfo;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const OperationDetail = models.OperationDetail;
const EsPublicAcl = models.EsPublicAcl;
const DictInfo = models.DictInfo;
const RestartInstanceResponse = models.RestartInstanceResponse;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const UpgradeLicenseRequest = models.UpgradeLicenseRequest;
const CosBackup = models.CosBackup;
const TagInfo = models.TagInfo;
const KeyValue = models.KeyValue;
const CreateInstanceRequest = models.CreateInstanceRequest;
const InstanceInfo = models.InstanceInfo;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const UpdatePluginsResponse = models.UpdatePluginsResponse;
const RestartInstanceRequest = models.RestartInstanceRequest;
const ZoneDetail = models.ZoneDetail;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const UpdatePluginsRequest = models.UpdatePluginsRequest;
const UpgradeLicenseResponse = models.UpgradeLicenseResponse;
const EsAcl = models.EsAcl;
const MasterNodeInfo = models.MasterNodeInfo;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const SubTaskDetail = models.SubTaskDetail;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const Operation = models.Operation;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 查询实例指定条件下的操作记录
     * @param {DescribeInstanceOperationsRequest} req
     * @param {function(string, DescribeInstanceOperationsResponse):void} cb
     * @public
     */
    DescribeInstanceOperations(req, cb) {
        let resp = new DescribeInstanceOperationsResponse();
        this.request("DescribeInstanceOperations", req, resp, cb);
    }

    /**
     * 查询用户该地域下符合条件的所有实例
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 变更插件列表
     * @param {UpdatePluginsRequest} req
     * @param {function(string, UpdatePluginsResponse):void} cb
     * @public
     */
    UpdatePlugins(req, cb) {
        let resp = new UpdatePluginsResponse();
        this.request("UpdatePlugins", req, resp, cb);
    }

    /**
     * 创建指定规格的ES集群实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 升级ES集群版本
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * 升级ES商业特性
     * @param {UpgradeLicenseRequest} req
     * @param {function(string, UpgradeLicenseResponse):void} cb
     * @public
     */
    UpgradeLicense(req, cb) {
        let resp = new UpgradeLicenseResponse();
        this.request("UpgradeLicense", req, resp, cb);
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
     * @param {UpdateInstanceRequest} req
     * @param {function(string, UpdateInstanceResponse):void} cb
     * @public
     */
    UpdateInstance(req, cb) {
        let resp = new UpdateInstanceResponse();
        this.request("UpdateInstance", req, resp, cb);
    }

    /**
     * 销毁集群实例 
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * 重启ES集群实例(用于系统版本更新等操作) 
     * @param {RestartInstanceRequest} req
     * @param {function(string, RestartInstanceResponse):void} cb
     * @public
     */
    RestartInstance(req, cb) {
        let resp = new RestartInstanceResponse();
        this.request("RestartInstance", req, resp, cb);
    }

    /**
     * 查询用户该地域下符合条件的ES集群的日志
     * @param {DescribeInstanceLogsRequest} req
     * @param {function(string, DescribeInstanceLogsResponse):void} cb
     * @public
     */
    DescribeInstanceLogs(req, cb) {
        let resp = new DescribeInstanceLogsResponse();
        this.request("DescribeInstanceLogs", req, resp, cb);
    }


}
module.exports = EsClient;
