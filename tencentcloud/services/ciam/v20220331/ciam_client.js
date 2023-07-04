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
 * ciam client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ciam.tencentcloudapi.com", "2022-03-31", clientConfig);
    }
    /**
     * 更新用户状态
     */
    async UpdateUserStatus(req, cb) {
        return this.request("UpdateUserStatus", req, cb);
    }
    /**
     * 查询任务详情
     */
    async ListJobs(req, cb) {
        return this.request("ListJobs", req, cb);
    }
    /**
     * 删除用户目录
     */
    async DeleteUserStore(req, cb) {
        return this.request("DeleteUserStore", req, cb);
    }
    /**
     * 批量删除用户组
     */
    async DeleteUserGroups(req, cb) {
        return this.request("DeleteUserGroups", req, cb);
    }
    /**
     * 更新用户目录
     */
    async UpdateUserStore(req, cb) {
        return this.request("UpdateUserStore", req, cb);
    }
    /**
     * 新建接口导入用户任务
     */
    async CreateApiImportUserJob(req, cb) {
        return this.request("CreateApiImportUserJob", req, cb);
    }
    /**
     * 账号融合
     */
    async LinkAccount(req, cb) {
        return this.request("LinkAccount", req, cb);
    }
    /**
     * 重置用户密码
     */
    async ResetPassword(req, cb) {
        return this.request("ResetPassword", req, cb);
    }
    /**
     * 更新用户
     */
    async UpdateUser(req, cb) {
        return this.request("UpdateUser", req, cb);
    }
    /**
     * 多条件查询用户信息
     */
    async DescribeUser(req, cb) {
        return this.request("DescribeUser", req, cb);
    }
    /**
     * 查询用户组列表
     */
    async ListUserGroups(req, cb) {
        return this.request("ListUserGroups", req, cb);
    }
    /**
     * 查询用户列表
     */
    async ListUser(req, cb) {
        return this.request("ListUser", req, cb);
    }
    /**
     * 更新用户组
     */
    async UpdateUserGroup(req, cb) {
        return this.request("UpdateUserGroup", req, cb);
    }
    /**
     * 创建用户目录
     */
    async CreateUserStore(req, cb) {
        return this.request("CreateUserStore", req, cb);
    }
    /**
     * 批量删除用户
     */
    async DeleteUsers(req, cb) {
        return this.request("DeleteUsers", req, cb);
    }
    /**
     * 根据属性查询用户列表
     */
    async ListUserByProperty(req, cb) {
        return this.request("ListUserByProperty", req, cb);
    }
    /**
     * 根据ID查询用户信息
     */
    async DescribeUserById(req, cb) {
        return this.request("DescribeUserById", req, cb);
    }
    /**
     * 设置用户密码
     */
    async SetPassword(req, cb) {
        return this.request("SetPassword", req, cb);
    }
    /**
     * 新建文件导出用户任务
     */
    async CreateFileExportUserJob(req, cb) {
        return this.request("CreateFileExportUserJob", req, cb);
    }
    /**
     * 查询用户目录列表
     */
    async ListUserStore(req, cb) {
        return this.request("ListUserStore", req, cb);
    }
    /**
     * 创建用户组
     */
    async CreateUserGroup(req, cb) {
        return this.request("CreateUserGroup", req, cb);
    }
    /**
     * 创建用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 查询日志信息
     */
    async ListLogMessageByCondition(req, cb) {
        return this.request("ListLogMessageByCondition", req, cb);
    }
}
exports.Client = Client;
