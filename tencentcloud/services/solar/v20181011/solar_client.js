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
 * solar client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("solar.tencentcloudapi.com", "2018-10-11", clientConfig);
    }
    /**
     * 子项目详情
     */
    async DescribeSubProject(req, cb) {
        return this.request("DescribeSubProject", req, cb);
    }
    /**
     * 项目库存详情
     */
    async DescribeProjectStock(req, cb) {
        return this.request("DescribeProjectStock", req, cb);
    }
    /**
     * 项目详情展示
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 素材查询服务号模板的列表（样例）
     */
    async DescribeResourceTemplateHeaders(req, cb) {
        return this.request("DescribeResourceTemplateHeaders", req, cb);
    }
    /**
     * 查询客户档案列表
     */
    async DescribeCustomers(req, cb) {
        return this.request("DescribeCustomers", req, cb);
    }
    /**
     * 发送企业微信触达任务
     */
    async SendWxTouchTask(req, cb) {
        return this.request("SendWxTouchTask", req, cb);
    }
    /**
     * 创建项目
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 补充子项目库存
     */
    async ReplenishProjectStock(req, cb) {
        return this.request("ReplenishProjectStock", req, cb);
    }
    /**
     * 项目列表展示
     */
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    /**
     * 下线项目
     */
    async OffLineProject(req, cb) {
        return this.request("OffLineProject", req, cb);
    }
    /**
     * 把审批中的工单置为已失效
     */
    async ExpireFlow(req, cb) {
        return this.request("ExpireFlow", req, cb);
    }
    /**
     * 删除项目
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 员工渠道更改员工状态
     */
    async CheckStaffChUser(req, cb) {
        return this.request("CheckStaffChUser", req, cb);
    }
    /**
     * 客户档案查询客户详情
     */
    async DescribeCustomer(req, cb) {
        return this.request("DescribeCustomer", req, cb);
    }
    /**
     * 修改项目
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 创建子项目
     */
    async CreateSubProject(req, cb) {
        return this.request("CreateSubProject", req, cb);
    }
    /**
     * 复制活动渠道的策略
     */
    async CopyActivityChannel(req, cb) {
        return this.request("CopyActivityChannel", req, cb);
    }
}
exports.Client = Client;
