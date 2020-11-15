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
const DescribeExecutionsRequest = models.DescribeExecutionsRequest;
const DescribeExecutionResponse = models.DescribeExecutionResponse;
const StartExecutionResponse = models.StartExecutionResponse;
const DescribeExecutionRequest = models.DescribeExecutionRequest;
const DescribeFlowServiceDetailResponse = models.DescribeFlowServiceDetailResponse;
const CreateFlowServiceResponse = models.CreateFlowServiceResponse;
const StartExecutionRequest = models.StartExecutionRequest;
const ModifyFlowServiceResponse = models.ModifyFlowServiceResponse;
const CreateFlowServiceRequest = models.CreateFlowServiceRequest;
const DescribeExecutionsResponse = models.DescribeExecutionsResponse;
const ModifyFlowServiceRequest = models.ModifyFlowServiceRequest;
const DescribeFlowServiceDetailRequest = models.DescribeFlowServiceDetailRequest;


/**
 * asw client
 * @class
 */
class AswClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("asw.tencentcloudapi.com", "2020-07-22", credential, region, profile);
    }
    
    /**
     * 为指定的状态机启动一次执行
     * @param {StartExecutionRequest} req
     * @param {function(string, StartExecutionResponse):void} cb
     * @public
     */
    StartExecution(req, cb) {
        let resp = new StartExecutionResponse();
        this.request("StartExecution", req, resp, cb);
    }

    /**
     * 查询执行详细信息
     * @param {DescribeExecutionRequest} req
     * @param {function(string, DescribeExecutionResponse):void} cb
     * @public
     */
    DescribeExecution(req, cb) {
        let resp = new DescribeExecutionResponse();
        this.request("DescribeExecution", req, resp, cb);
    }

    /**
     * 对状态机的执行历史进行描述.
     * @param {DescribeExecutionsRequest} req
     * @param {function(string, DescribeExecutionsResponse):void} cb
     * @public
     */
    DescribeExecutions(req, cb) {
        let resp = new DescribeExecutionsResponse();
        this.request("DescribeExecutions", req, resp, cb);
    }

    /**
     * 该接口用于生成状态机服务
     * @param {CreateFlowServiceRequest} req
     * @param {function(string, CreateFlowServiceResponse):void} cb
     * @public
     */
    CreateFlowService(req, cb) {
        let resp = new CreateFlowServiceResponse();
        this.request("CreateFlowService", req, resp, cb);
    }

    /**
     * 查询该用户指定状态机下的详情数据。
     * @param {DescribeFlowServiceDetailRequest} req
     * @param {function(string, DescribeFlowServiceDetailResponse):void} cb
     * @public
     */
    DescribeFlowServiceDetail(req, cb) {
        let resp = new DescribeFlowServiceDetailResponse();
        this.request("DescribeFlowServiceDetail", req, resp, cb);
    }

    /**
     * 该接口用于修改状态机
     * @param {ModifyFlowServiceRequest} req
     * @param {function(string, ModifyFlowServiceResponse):void} cb
     * @public
     */
    ModifyFlowService(req, cb) {
        let resp = new ModifyFlowServiceResponse();
        this.request("ModifyFlowService", req, resp, cb);
    }


}
module.exports = AswClient;
