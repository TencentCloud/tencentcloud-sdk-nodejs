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
 * tse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tse.tencentcloudapi.com", "2020-12-07", clientConfig);
    }
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    async DescribeZookeeperReplicas(req, cb) {
        return this.request("DescribeZookeeperReplicas", req, cb);
    }
    /**
     * 删除引擎实例
     */
    async DeleteEngine(req, cb) {
        return this.request("DeleteEngine", req, cb);
    }
    /**
     * 用于查询引擎实例列表
     */
    async DescribeSREInstances(req, cb) {
        return this.request("DescribeSREInstances", req, cb);
    }
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    async DescribeNacosReplicas(req, cb) {
        return this.request("DescribeNacosReplicas", req, cb);
    }
    /**
     * 获取云原生网关节点列表
     */
    async DescribeCloudNativeAPIGatewayNodes(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb);
    }
    /**
     * 查询zookeeper服务接口列表
     */
    async DescribeZookeeperServerInterfaces(req, cb) {
        return this.request("DescribeZookeeperServerInterfaces", req, cb);
    }
    /**
     * 修改引擎公网访问配置
     */
    async UpdateEngineInternetAccess(req, cb) {
        return this.request("UpdateEngineInternetAccess", req, cb);
    }
    /**
     * 创建引擎实例
     */
    async CreateEngine(req, cb) {
        return this.request("CreateEngine", req, cb);
    }
    /**
     * 查询nacos服务接口列表
     */
    async DescribeNacosServerInterfaces(req, cb) {
        return this.request("DescribeNacosServerInterfaces", req, cb);
    }
    /**
     * 查询引擎实例访问地址
     */
    async DescribeSREInstanceAccessAddress(req, cb) {
        return this.request("DescribeSREInstanceAccessAddress", req, cb);
    }
}
exports.Client = Client;
