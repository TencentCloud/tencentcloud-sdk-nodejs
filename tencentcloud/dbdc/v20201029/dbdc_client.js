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
const InstanceDetail = models.InstanceDetail;
const DescribeInstanceDetailResponse = models.DescribeInstanceDetailResponse;
const DescribeInstanceDetail = models.DescribeInstanceDetail;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeInstanceDetailRequest = models.DescribeInstanceDetailRequest;
const HostDetail = models.HostDetail;
const InstanceDeviceInfo = models.InstanceDeviceInfo;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DeviceInfo = models.DeviceInfo;
const DBInstanceDetail = models.DBInstanceDetail;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const InstanceExpand = models.InstanceExpand;
const DescribeHostListResponse = models.DescribeHostListResponse;
const DescribeInstanceListResponse = models.DescribeInstanceListResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const DescribeHostListRequest = models.DescribeHostListRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceListRequest = models.DescribeInstanceListRequest;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;


/**
 * dbdc client
 * @class
 */
class DbdcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbdc.tencentcloudapi.com", "2020-10-29", credential, region, profile);
    }
    
    /**
     * 本接口用于查询独享集群实例列表
     * @param {DescribeInstanceListRequest} req
     * @param {function(string, DescribeInstanceListResponse):void} cb
     * @public
     */
    DescribeInstanceList(req, cb) {
        let resp = new DescribeInstanceListResponse();
        this.request("DescribeInstanceList", req, resp, cb);
    }

    /**
     * 根据不同地域不同用户，获取集群列表信息
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口用于查询主机列表
     * @param {DescribeHostListRequest} req
     * @param {function(string, DescribeHostListResponse):void} cb
     * @public
     */
    DescribeHostList(req, cb) {
        let resp = new DescribeHostListResponse();
        this.request("DescribeHostList", req, resp, cb);
    }

    /**
     * 本接口用于修改集群名称
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * 本接口用于查询独享集群详情
     * @param {DescribeInstanceDetailRequest} req
     * @param {function(string, DescribeInstanceDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDetail(req, cb) {
        let resp = new DescribeInstanceDetailResponse();
        this.request("DescribeInstanceDetail", req, resp, cb);
    }

    /**
     * 本接口用于查询独享集群内的DB实例列表
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }


}
module.exports = DbdcClient;
