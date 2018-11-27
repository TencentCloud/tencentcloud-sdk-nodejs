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
const MasterNodeInfo = models.MasterNodeInfo;
const CreateInstanceResponse = models.CreateInstanceResponse;
const RestartInstanceRequest = models.RestartInstanceRequest;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const EsDictionaryInfo = models.EsDictionaryInfo;
const UpdateInstanceResponse = models.UpdateInstanceResponse;
const EsAcl = models.EsAcl;
const UpdateInstanceRequest = models.UpdateInstanceRequest;
const CreateInstanceRequest = models.CreateInstanceRequest;
const InstanceInfo = models.InstanceInfo;
const RestartInstanceResponse = models.RestartInstanceResponse;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DictInfo = models.DictInfo;
const DescribeInstancesResponse = models.DescribeInstancesResponse;


/**
 * es client
 * @class
 */
class EsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("es.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * 对已存在的集群进行扩缩容，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作 
     * @param {UpdateInstanceRequest} req
     * @param {function(string, UpdateInstanceResponse):void} cb
     * @public
     */
    UpdateInstance(req, cb) {
        let resp = new UpdateInstanceResponse();
        this.request("UpdateInstance", req, resp, cb);
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


}
module.exports = EsClient;
