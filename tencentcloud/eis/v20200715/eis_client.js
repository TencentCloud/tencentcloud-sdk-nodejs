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
const EisConnectionOperation = models.EisConnectionOperation;
const ListEisConnectorsRequest = models.ListEisConnectorsRequest;
const EisConnectorSummary = models.EisConnectorSummary;
const ListEisConnectorOperationsResponse = models.ListEisConnectorOperationsResponse;
const DescribeEisConnectorConfigResponse = models.DescribeEisConnectorConfigResponse;
const ListEisConnectorOperationsRequest = models.ListEisConnectorOperationsRequest;
const DescribeEisConnectorConfigRequest = models.DescribeEisConnectorConfigRequest;
const ListEisConnectorsResponse = models.ListEisConnectorsResponse;


/**
 * eis client
 * @class
 */
class EisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("eis.tencentcloudapi.com", "2020-07-15", credential, region, profile);
    }
    
    /**
     * 获取连接器操作列表
     * @param {ListEisConnectorOperationsRequest} req
     * @param {function(string, ListEisConnectorOperationsResponse):void} cb
     * @public
     */
    ListEisConnectorOperations(req, cb) {
        let resp = new ListEisConnectorOperationsResponse();
        this.request("ListEisConnectorOperations", req, resp, cb);
    }

    /**
     * 连接器列表
     * @param {ListEisConnectorsRequest} req
     * @param {function(string, ListEisConnectorsResponse):void} cb
     * @public
     */
    ListEisConnectors(req, cb) {
        let resp = new ListEisConnectorsResponse();
        this.request("ListEisConnectors", req, resp, cb);
    }

    /**
     * 获取连接器配置参数
     * @param {DescribeEisConnectorConfigRequest} req
     * @param {function(string, DescribeEisConnectorConfigResponse):void} cb
     * @public
     */
    DescribeEisConnectorConfig(req, cb) {
        let resp = new DescribeEisConnectorConfigResponse();
        this.request("DescribeEisConnectorConfig", req, resp, cb);
    }


}
module.exports = EisClient;
