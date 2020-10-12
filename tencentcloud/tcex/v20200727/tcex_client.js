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
const InvokeServiceRequest = models.InvokeServiceRequest;
const DescribeInvocationResultResponse = models.DescribeInvocationResultResponse;
const AlgorithmResult = models.AlgorithmResult;
const InvokeServiceResponse = models.InvokeServiceResponse;
const DescribeInvocationResultRequest = models.DescribeInvocationResultRequest;


/**
 * tcex client
 * @class
 */
class TcexClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcex.tencentcloudapi.com", "2020-07-27", credential, region, profile);
    }
    
    /**
     * 获取服务调用结果。和InvokeService接口配置合适，其InvokeId参数为InvokeService接口返回的RequestId。
     * @param {DescribeInvocationResultRequest} req
     * @param {function(string, DescribeInvocationResultResponse):void} cb
     * @public
     */
    DescribeInvocationResult(req, cb) {
        let resp = new DescribeInvocationResultResponse();
        this.request("DescribeInvocationResult", req, resp, cb);
    }

    /**
     * 通过传入文档url，测试服务算法。此接口需要和DescribeInvocationResult接口配置使用，该接口使用InvokeService返回的RequestId作为InvokeId参数，用于查询调用结果。
     * @param {InvokeServiceRequest} req
     * @param {function(string, InvokeServiceResponse):void} cb
     * @public
     */
    InvokeService(req, cb) {
        let resp = new InvokeServiceResponse();
        this.request("InvokeService", req, resp, cb);
    }


}
module.exports = TcexClient;
