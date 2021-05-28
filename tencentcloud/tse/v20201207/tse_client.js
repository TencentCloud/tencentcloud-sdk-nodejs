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
const DescribeSREInstancesRequest = models.DescribeSREInstancesRequest;
const ManageConfigRequest = models.ManageConfigRequest;
const SREInstance = models.SREInstance;
const DescribeSREInstanceAccessAddressResponse = models.DescribeSREInstanceAccessAddressResponse;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DescribeSREInstancesResponse = models.DescribeSREInstancesResponse;
const DescribeConfigResponse = models.DescribeConfigResponse;
const Filter = models.Filter;
const DescribeSREInstanceAccessAddressRequest = models.DescribeSREInstanceAccessAddressRequest;
const ManageConfigResponse = models.ManageConfigResponse;


/**
 * tse client
 * @class
 */
class TseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tse.tencentcloudapi.com", "2020-12-07", credential, region, profile);
    }
    
    /**
     * 用于查询微服务注册中心实例列表
     * @param {DescribeSREInstancesRequest} req
     * @param {function(string, DescribeSREInstancesResponse):void} cb
     * @public
     */
    DescribeSREInstances(req, cb) {
        let resp = new DescribeSREInstancesResponse();
        this.request("DescribeSREInstances", req, resp, cb);
    }

    /**
     * 管理配置
     * @param {ManageConfigRequest} req
     * @param {function(string, ManageConfigResponse):void} cb
     * @public
     */
    ManageConfig(req, cb) {
        let resp = new ManageConfigResponse();
        this.request("ManageConfig", req, resp, cb);
    }

    /**
     * 查询微服务注册引擎实例访问地址
     * @param {DescribeSREInstanceAccessAddressRequest} req
     * @param {function(string, DescribeSREInstanceAccessAddressResponse):void} cb
     * @public
     */
    DescribeSREInstanceAccessAddress(req, cb) {
        let resp = new DescribeSREInstanceAccessAddressResponse();
        this.request("DescribeSREInstanceAccessAddress", req, resp, cb);
    }

    /**
     * 查看配置项
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }


}
module.exports = TseClient;
