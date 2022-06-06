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
const SREInstance = models.SREInstance;
const DescribeSREInstanceAccessAddressResponse = models.DescribeSREInstanceAccessAddressResponse;
const DescribeSREInstancesResponse = models.DescribeSREInstancesResponse;
const KVPair = models.KVPair;
const EnvInfo = models.EnvInfo;
const Filter = models.Filter;
const EnvAddressInfo = models.EnvAddressInfo;
const VpcInfo = models.VpcInfo;
const BoundK8SInfo = models.BoundK8SInfo;
const DescribeSREInstanceAccessAddressRequest = models.DescribeSREInstanceAccessAddressRequest;
const ServiceGovernanceInfo = models.ServiceGovernanceInfo;


/**
 * tse client
 * @class
 */
class TseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tse.tencentcloudapi.com", "2020-12-07", credential, region, profile);
    }
    
    /**
     * 查询引擎实例访问地址
     * @param {DescribeSREInstanceAccessAddressRequest} req
     * @param {function(string, DescribeSREInstanceAccessAddressResponse):void} cb
     * @public
     */
    DescribeSREInstanceAccessAddress(req, cb) {
        let resp = new DescribeSREInstanceAccessAddressResponse();
        this.request("DescribeSREInstanceAccessAddress", req, resp, cb);
    }

    /**
     * 用于查询引擎实例列表
     * @param {DescribeSREInstancesRequest} req
     * @param {function(string, DescribeSREInstancesResponse):void} cb
     * @public
     */
    DescribeSREInstances(req, cb) {
        let resp = new DescribeSREInstancesResponse();
        this.request("DescribeSREInstances", req, resp, cb);
    }


}
module.exports = TseClient;
