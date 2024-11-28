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
 * bi client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bi.tencentcloudapi.com", "2022-01-05", clientConfig);
    }
    /**
     * 更新数据源
     */
    async ModifyDatasource(req, cb) {
        return this.request("ModifyDatasource", req, cb);
    }
    /**
     * 查询数据源列表
     */
    async DescribeDatasourceList(req, cb) {
        return this.request("DescribeDatasourceList", req, cb);
    }
    /**
     * 创建数据源
     */
    async CreateDatasource(req, cb) {
        return this.request("CreateDatasource", req, cb);
    }
    /**
     * 项目详情接口
     */
    async DescribeProjectInfo(req, cb) {
        return this.request("DescribeProjectInfo", req, cb);
    }
    /**
     * 申请延长Token可用时间接口-强鉴权
     */
    async ApplyEmbedInterval(req, cb) {
        return this.request("ApplyEmbedInterval", req, cb);
    }
    /**
     * 页面截图导出
     */
    async ExportScreenPage(req, cb) {
        return this.request("ExportScreenPage", req, cb);
    }
    /**
     * 修改用户角色信息
     */
    async ModifyUserRole(req, cb) {
        return this.request("ModifyUserRole", req, cb);
    }
    /**
     * 创建云数据库
     */
    async CreateDatasourceCloud(req, cb) {
        return this.request("CreateDatasourceCloud", req, cb);
    }
    /**
     * 创建嵌出报表-强鉴权
     */
    async CreateEmbedToken(req, cb) {
        return this.request("CreateEmbedToken", req, cb);
    }
    /**
     * 创建用户角色
     */
    async CreateUserRole(req, cb) {
        return this.request("CreateUserRole", req, cb);
    }
    /**
     * 删除数据源
     */
    async DeleteDatasource(req, cb) {
        return this.request("DeleteDatasource", req, cb);
    }
    /**
     * 删除用户角色，会删除用户
     */
    async DeleteUserRole(req, cb) {
        return this.request("DeleteUserRole", req, cb);
    }
    /**
     * 修改项目信息
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 用户角色列表
     */
    async DescribeUserRoleList(req, cb) {
        return this.request("DescribeUserRoleList", req, cb);
    }
    /**
     * 查询页面组件信息
     */
    async DescribePageWidgetList(req, cb) {
        return this.request("DescribePageWidgetList", req, cb);
    }
    /**
     * 项目内-用户角色列表
     */
    async DescribeUserRoleProjectList(req, cb) {
        return this.request("DescribeUserRoleProjectList", req, cb);
    }
    /**
     * 更新云数据库
     */
    async ModifyDatasourceCloud(req, cb) {
        return this.request("ModifyDatasourceCloud", req, cb);
    }
    /**
     * 项目内-创建用户角色
     */
    async CreateUserRoleProject(req, cb) {
        return this.request("CreateUserRoleProject", req, cb);
    }
    /**
     * 项目内-删除用户角色
     */
    async DeleteUserRoleProject(req, cb) {
        return this.request("DeleteUserRoleProject", req, cb);
    }
    /**
     * 创建项目
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 项目内-用户接口
     */
    async DescribeUserProjectList(req, cb) {
        return this.request("DescribeUserProjectList", req, cb);
    }
    /**
     * 删除项目
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 项目-修改用户角色信息
     */
    async ModifyUserRoleProject(req, cb) {
        return this.request("ModifyUserRoleProject", req, cb);
    }
    /**
     * 项目信息
     */
    async DescribeProjectList(req, cb) {
        return this.request("DescribeProjectList", req, cb);
    }
}
exports.Client = Client;
