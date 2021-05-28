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
const DescribeTokenRequest = models.DescribeTokenRequest;
const DescribeServiceAlertObjectResponse = models.DescribeServiceAlertObjectResponse;
const DescribeComponentAlertObjectResponse = models.DescribeComponentAlertObjectResponse;
const DescribeServiceAlertObjectRequest = models.DescribeServiceAlertObjectRequest;
const DescribeComponentAlertObjectRequest = models.DescribeComponentAlertObjectRequest;
const DescribeTokenResponse = models.DescribeTokenResponse;


/**
 * tsw client
 * @class
 */
class TswClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tsw.tencentcloudapi.com", "2021-04-12", credential, region, profile);
    }
    
    /**
     * 查询token
     * @param {DescribeTokenRequest} req
     * @param {function(string, DescribeTokenResponse):void} cb
     * @public
     */
    DescribeToken(req, cb) {
        let resp = new DescribeTokenResponse();
        this.request("DescribeToken", req, resp, cb);
    }

    /**
     * 获取告警对象-服务告警表
     * @param {DescribeServiceAlertObjectRequest} req
     * @param {function(string, DescribeServiceAlertObjectResponse):void} cb
     * @public
     */
    DescribeServiceAlertObject(req, cb) {
        let resp = new DescribeServiceAlertObjectResponse();
        this.request("DescribeServiceAlertObject", req, resp, cb);
    }

    /**
     * 获取告警对象-组件告警
     * @param {DescribeComponentAlertObjectRequest} req
     * @param {function(string, DescribeComponentAlertObjectResponse):void} cb
     * @public
     */
    DescribeComponentAlertObject(req, cb) {
        let resp = new DescribeComponentAlertObjectResponse();
        this.request("DescribeComponentAlertObject", req, resp, cb);
    }


}
module.exports = TswClient;
