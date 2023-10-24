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
 * cdwpg client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cdwpg.tencentcloudapi.com", "2020-12-30", clientConfig);
    }
    /**
     * 获取云原生实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    async DescribeInstanceState(req, cb) {
        return this.request("DescribeInstanceState", req, cb);
    }
    /**
     * 销毁集群
     */
    async DestroyInstanceByApi(req, cb) {
        return this.request("DestroyInstanceByApi", req, cb);
    }
    /**
     * 根据实例ID查询某个实例的具体信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 获取集群信息
     */
    async DescribeInstanceInfo(req, cb) {
        return this.request("DescribeInstanceInfo", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateInstanceByApi(req, cb) {
        return this.request("CreateInstanceByApi", req, cb);
    }
    /**
     * 获取集群实例列表
     */
    async DescribeSimpleInstances(req, cb) {
        return this.request("DescribeSimpleInstances", req, cb);
    }
    /**
     * 修改实例信息，目前为实例名称
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
}
exports.Client = Client;
