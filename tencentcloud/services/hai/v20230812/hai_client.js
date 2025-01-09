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
 * hai client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("hai.tencentcloudapi.com", "2023-08-12", clientConfig);
    }
    /**
     * 查询实例
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 查询应用
     */
    async DescribeApplications(req, cb) {
        return this.request("DescribeApplications", req, cb);
    }
    /**
     * 获取prompt任务列表
     */
    async DescribeMuskPrompts(req, cb) {
        return this.request("DescribeMuskPrompts", req, cb);
    }
    /**
     * 查询场景
     */
    async DescribeScenes(req, cb) {
        return this.request("DescribeScenes", req, cb);
    }
    /**
     * 查询地域列表
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
     */
    async RunInstances(req, cb) {
        return this.request("RunInstances", req, cb);
    }
    /**
     * 本接口 (StartInstance) 用于主动启动实例。
     */
    async StartInstance(req, cb) {
        return this.request("StartInstance", req, cb);
    }
    /**
     * 创建musk prompt 任务
     */
    async CreateMuskPrompt(req, cb) {
        return this.request("CreateMuskPrompt", req, cb);
    }
    /**
     * 本接口 (TerminateInstances) 用于主动退还实例。
     */
    async TerminateInstances(req, cb) {
        return this.request("TerminateInstances", req, cb);
    }
    /**
     * 查询实例的网络配置及消耗情况
     */
    async DescribeInstanceNetworkStatus(req, cb) {
        return this.request("DescribeInstanceNetworkStatus", req, cb);
    }
    /**
     * 查询服务登录配置
     */
    async DescribeServiceLoginSettings(req, cb) {
        return this.request("DescribeServiceLoginSettings", req, cb);
    }
    /**
     * 本接口 (InquirePriceRunInstances) 用于实例询价。
     */
    async InquirePriceRunInstances(req, cb) {
        return this.request("InquirePriceRunInstances", req, cb);
    }
    /**
     * 本接口 (StopInstance) 用于主动关闭实例。
     */
    async StopInstance(req, cb) {
        return this.request("StopInstance", req, cb);
    }
}
exports.Client = Client;
