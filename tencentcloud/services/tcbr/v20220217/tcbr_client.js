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
 * tcbr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcbr.tencentcloudapi.com", "2022-02-17", clientConfig);
    }
    /**
     * 创建云托管服务接口
     */
    async CreateCloudRunServer(req, cb) {
        return this.request("CreateCloudRunServer", req, cb);
    }
    /**
     * 查询服务管理任务信息
     */
    async DescribeServerManageTask(req, cb) {
        return this.request("DescribeServerManageTask", req, cb);
    }
    /**
     * 查询环境基础信息
     */
    async DescribeEnvBaseInfo(req, cb) {
        return this.request("DescribeEnvBaseInfo", req, cb);
    }
    /**
     * 查询云托管服务列表接口
     */
    async DescribeCloudRunServers(req, cb) {
        return this.request("DescribeCloudRunServers", req, cb);
    }
    /**
     * 灰度发布
     */
    async ReleaseGray(req, cb) {
        return this.request("ReleaseGray", req, cb);
    }
    /**
     * 更新云托管服务
     */
    async UpdateCloudRunServer(req, cb) {
        return this.request("UpdateCloudRunServer", req, cb);
    }
    /**
     * 创建云托管环境，并开通资源。
     */
    async CreateCloudRunEnv(req, cb) {
        return this.request("CreateCloudRunEnv", req, cb);
    }
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    async DescribeCloudRunEnvs(req, cb) {
        return this.request("DescribeCloudRunEnvs", req, cb);
    }
    /**
     * 操作发布单
     */
    async OperateServerManage(req, cb) {
        return this.request("OperateServerManage", req, cb);
    }
    /**
     * 查询云托管服务详情
     */
    async DescribeCloudRunServerDetail(req, cb) {
        return this.request("DescribeCloudRunServerDetail", req, cb);
    }
}
exports.Client = Client;
