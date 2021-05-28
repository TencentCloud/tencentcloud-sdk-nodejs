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
const DescribeExecutionHistoryResponse = models.DescribeExecutionHistoryResponse;
const DescribeExecutionsRequest = models.DescribeExecutionsRequest;
const DescribeFlowServicesResponse = models.DescribeFlowServicesResponse;
const StateMachine = models.StateMachine;
const DescribeFlowServiceDetailResponse = models.DescribeFlowServiceDetailResponse;
const DescribeExecutionResponse = models.DescribeExecutionResponse;
const DescribeFlowServicesRequest = models.DescribeFlowServicesRequest;
const DescribeExecutionRequest = models.DescribeExecutionRequest;
const DescribeExecutionHistoryRequest = models.DescribeExecutionHistoryRequest;
const CreateFlowServiceResponse = models.CreateFlowServiceResponse;
const StartExecutionRequest = models.StartExecutionRequest;
const Filter = models.Filter;
const ExecutionEvent = models.ExecutionEvent;
const ModifyFlowServiceResponse = models.ModifyFlowServiceResponse;
const StartExecutionResponse = models.StartExecutionResponse;
const CreateFlowServiceRequest = models.CreateFlowServiceRequest;
const DescribeExecutionsResponse = models.DescribeExecutionsResponse;
const ModifyFlowServiceRequest = models.ModifyFlowServiceRequest;
const DescribeFlowServiceDetailRequest = models.DescribeFlowServiceDetailRequest;
const StopExecutionResponse = models.StopExecutionResponse;
const StopExecutionRequest = models.StopExecutionRequest;


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
     * 终止某个状态机
     * @param {StopExecutionRequest} req
     * @param {function(string, StopExecutionResponse):void} cb
     * @public
     */
    StopExecution(req, cb) {
        let resp = new StopExecutionResponse();
        this.request("StopExecution", req, resp, cb);
    }

    /**
     * 一次执行会有很多步骤，经过很多节点，这个接口描述某一次执行的事件的历史
     * @param {DescribeExecutionHistoryRequest} req
     * @param {function(string, DescribeExecutionHistoryResponse):void} cb
     * @public
     */
    DescribeExecutionHistory(req, cb) {
        let resp = new DescribeExecutionHistoryResponse();
        this.request("DescribeExecutionHistory", req, resp, cb);
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
     * 查询指定用户下所有状态机，以列表形式返回
     * @param {DescribeFlowServicesRequest} req
     * @param {function(string, DescribeFlowServicesResponse):void} cb
     * @public
     */
    DescribeFlowServices(req, cb) {
        let resp = new DescribeFlowServicesResponse();
        this.request("DescribeFlowServices", req, resp, cb);
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
