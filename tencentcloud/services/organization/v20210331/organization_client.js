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
 * organization client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("organization.tencentcloudapi.com", "2021-03-31", clientConfig);
    }
    /**
     * 获取企业组织成员列表
     */
    async DescribeOrganizationMembers(req, cb) {
        return this.request("DescribeOrganizationMembers", req, cb);
    }
    /**
     * 移动成员到指定企业组织节点
     */
    async MoveOrganizationNodeMembers(req, cb) {
        return this.request("MoveOrganizationNodeMembers", req, cb);
    }
    /**
     * 更新企业组织节点
     */
    async UpdateOrganizationNode(req, cb) {
        return this.request("UpdateOrganizationNode", req, cb);
    }
    /**
     * 创建组织成员
     */
    async CreateOrganizationMember(req, cb) {
        return this.request("CreateOrganizationMember", req, cb);
    }
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    async BindOrganizationMemberAuthAccount(req, cb) {
        return this.request("BindOrganizationMemberAuthAccount", req, cb);
    }
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    async DescribeOrganizationMemberAuthAccounts(req, cb) {
        return this.request("DescribeOrganizationMemberAuthAccounts", req, cb);
    }
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    async DescribeOrganizationAuthNode(req, cb) {
        return this.request("DescribeOrganizationAuthNode", req, cb);
    }
    /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
    async CancelOrganizationMemberAuthAccount(req, cb) {
        return this.request("CancelOrganizationMemberAuthAccount", req, cb);
    }
    /**
     * 批量删除企业组织节点
     */
    async DeleteOrganizationNodes(req, cb) {
        return this.request("DeleteOrganizationNodes", req, cb);
    }
    /**
     * 获取企业组织信息
     */
    async DescribeOrganization(req, cb) {
        return this.request("DescribeOrganization", req, cb);
    }
    /**
     * 获取组织节点列表
     */
    async DescribeOrganizationNodes(req, cb) {
        return this.request("DescribeOrganizationNodes", req, cb);
    }
    /**
     * 添加企业组织节点
     */
    async AddOrganizationNode(req, cb) {
        return this.request("AddOrganizationNode", req, cb);
    }
    /**
     * 获取组织成员的授权策略列表
     */
    async DescribeOrganizationMemberPolicies(req, cb) {
        return this.request("DescribeOrganizationMemberPolicies", req, cb);
    }
    /**
     * 创建组织成员访问授权策略
     */
    async CreateOrganizationMemberPolicy(req, cb) {
        return this.request("CreateOrganizationMemberPolicy", req, cb);
    }
    /**
     * 获取组织成员可被管理的身份列表
     */
    async DescribeOrganizationMemberAuthIdentities(req, cb) {
        return this.request("DescribeOrganizationMemberAuthIdentities", req, cb);
    }
    /**
     * 批量删除企业组织成员
     */
    async DeleteOrganizationMembers(req, cb) {
        return this.request("DeleteOrganizationMembers", req, cb);
    }
    /**
     * 获取组织成员访问身份列表
     */
    async ListOrganizationIdentity(req, cb) {
        return this.request("ListOrganizationIdentity", req, cb);
    }
}
exports.Client = Client;
