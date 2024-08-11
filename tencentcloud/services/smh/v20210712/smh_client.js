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
 * smh client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("smh.tencentcloudapi.com", "2021-07-12", clientConfig);
    }
    /**
     * 更新用户信息。
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 一次删除多个用户。
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 验证短信验证码以换绑官方云盘实例的超级管理员账号
     */
    async VerifySmsCode(req, cb) {
        return this.request("VerifySmsCode", req, cb);
    }
    /**
     * 查询官方云盘实例
     */
    async DescribeOfficialInstances(req, cb) {
        return this.request("DescribeOfficialInstances", req, cb);
    }
    /**
     * 创建 PaaS 服务媒体库
     */
    async CreateLibrary(req, cb) {
        return this.request("CreateLibrary", req, cb);
    }
    /**
     * 发送用于换绑官方云盘实例的超级管理员账号的短信验证码
     */
    async SendSmsCode(req, cb) {
        return this.request("SendSmsCode", req, cb);
    }
    /**
     * 新建用户。
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 设置用户生命周期。如果指定的用户已经设置了生命周期，重复调用此接口将覆盖已有的设置。也可用于清除指定用户的生命周期。
     */
    async CreateUserLifecycle(req, cb) {
        return this.request("CreateUserLifecycle", req, cb);
    }
    /**
     * 查询 PaaS 服务媒体库列表
     */
    async DescribeLibraries(req, cb) {
        return this.request("DescribeLibraries", req, cb);
    }
    /**
     * 修改 PaaS 服务媒体库配置项
     */
    async ModifyLibrary(req, cb) {
        return this.request("ModifyLibrary", req, cb);
    }
    /**
     * 查询官方云盘实例概览数据
     */
    async DescribeOfficialOverview(req, cb) {
        return this.request("DescribeOfficialOverview", req, cb);
    }
    /**
     * 查询流量资源包
     */
    async DescribeTrafficPackages(req, cb) {
        return this.request("DescribeTrafficPackages", req, cb);
    }
    /**
     * 删除 PaaS 服务媒体库
     */
    async DeleteLibrary(req, cb) {
        return this.request("DeleteLibrary", req, cb);
    }
    /**
     * 查询用户生命周期。
     */
    async DescribeUserLifecycle(req, cb) {
        return this.request("DescribeUserLifecycle", req, cb);
    }
    /**
     * 查询 PaaS 服务媒体库密钥
     */
    async DescribeLibrarySecret(req, cb) {
        return this.request("DescribeLibrarySecret", req, cb);
    }
}
exports.Client = Client;
