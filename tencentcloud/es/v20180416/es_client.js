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
const TaskDetail = models.TaskDetail;
const DescribeInstanceOperationsRequest = models.DescribeInstanceOperationsRequest;
const OperationDetail = models.OperationDetail;
const RestartInstanceResponse = models.RestartInstanceResponse;
const DictInfo = models.DictInfo;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const CosBackup = models.CosBackup;
const TagInfo = models.TagInfo;
const KeyValue = models.KeyValue;
const CreateInstanceRequest = models.CreateInstanceRequest;
const InstanceInfo = models.InstanceInfo;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const RestartInstanceRequest = models.RestartInstanceRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const MultiZoneInfo = models.MultiZoneInfo;
const DescribeInstanceOperationsResponse = models.DescribeInstanceOperationsResponse;
const EsAcl = models.EsAcl;
const MasterNodeInfo = models.MasterNodeInfo;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const SubTaskDetail = models.SubTaskDetail;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
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
     * 对集群进行扩缩容，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeNum：集群数据节点横向扩缩容
- NodeType, DiskSize：集群数据节点纵向扩缩容
- MasterNodeNum: 集群专用主节点横向扩缩容
- MasterNodeType, MasterNodeDiskSize: 集群专用主节点纵向扩缩容
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
