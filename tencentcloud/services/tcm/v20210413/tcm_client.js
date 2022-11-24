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
 * tcm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcm.tencentcloudapi.com", "2021-04-13", clientConfig);
    }
    /**
     * 删除网格
     */
    async DeleteMesh(req, cb) {
        return this.request("DeleteMesh", req, cb);
    }
    /**
     * 获取AccessLog配置
     */
    async DescribeAccessLogConfig(req, cb) {
        return this.request("DescribeAccessLogConfig", req, cb);
    }
    /**
     * 关联集群
     */
    async LinkClusterList(req, cb) {
        return this.request("LinkClusterList", req, cb);
    }
    /**
     * 关联Prometheus
     */
    async LinkPrometheus(req, cb) {
        return this.request("LinkPrometheus", req, cb);
    }
    /**
     * 查询网格列表
     */
    async DescribeMeshList(req, cb) {
        return this.request("DescribeMeshList", req, cb);
    }
    /**
     * 修改网格
     */
    async ModifyMesh(req, cb) {
        return this.request("ModifyMesh", req, cb);
    }
    /**
     * 解关联集群
     */
    async UnlinkCluster(req, cb) {
        return this.request("UnlinkCluster", req, cb);
    }
    /**
     * 修改 Tracing 配置
     */
    async ModifyTracingConfig(req, cb) {
        return this.request("ModifyTracingConfig", req, cb);
    }
    /**
     * 修改访问日志配置
     */
    async ModifyAccessLogConfig(req, cb) {
        return this.request("ModifyAccessLogConfig", req, cb);
    }
    /**
     * 创建网格
     */
    async CreateMesh(req, cb) {
        return this.request("CreateMesh", req, cb);
    }
    /**
     * 查询网格详情
     */
    async DescribeMesh(req, cb) {
        return this.request("DescribeMesh", req, cb);
    }
    /**
     * 解除关联Prometheus
     */
    async UnlinkPrometheus(req, cb) {
        return this.request("UnlinkPrometheus", req, cb);
    }
}
exports.Client = Client;
