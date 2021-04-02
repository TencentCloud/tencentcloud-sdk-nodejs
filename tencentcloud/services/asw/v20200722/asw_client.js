"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * asw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("asw.tencentcloudapi.com", "2020-07-22", clientConfig);
    }
    /**
     * 为指定的状态机启动一次执行
     */
    async StartExecution(req, cb) {
        return this.request("StartExecution", req, cb);
    }
    /**
     * 终止某个状态机
     */
    async StopExecution(req, cb) {
        return this.request("StopExecution", req, cb);
    }
    /**
     * 一次执行会有很多步骤，经过很多节点，这个接口描述某一次执行的事件的历史
     */
    async DescribeExecutionHistory(req, cb) {
        return this.request("DescribeExecutionHistory", req, cb);
    }
    /**
     * 查询执行详细信息
     */
    async DescribeExecution(req, cb) {
        return this.request("DescribeExecution", req, cb);
    }
    /**
     * 查询指定用户下所有状态机，以列表形式返回
     */
    async DescribeFlowServices(req, cb) {
        return this.request("DescribeFlowServices", req, cb);
    }
    /**
     * 对状态机的执行历史进行描述.
     */
    async DescribeExecutions(req, cb) {
        return this.request("DescribeExecutions", req, cb);
    }
    /**
     * 该接口用于生成状态机服务
     */
    async CreateFlowService(req, cb) {
        return this.request("CreateFlowService", req, cb);
    }
    /**
     * 查询该用户指定状态机下的详情数据。
     */
    async DescribeFlowServiceDetail(req, cb) {
        return this.request("DescribeFlowServiceDetail", req, cb);
    }
    /**
     * 该接口用于修改状态机
     */
    async ModifyFlowService(req, cb) {
        return this.request("ModifyFlowService", req, cb);
    }
}
exports.Client = Client;
