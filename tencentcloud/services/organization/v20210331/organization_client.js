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
     * 退出企业组织
     */
    async QuitOrganization(req, cb) {
        return this.request("QuitOrganization", req, cb);
    }
    /**
     * 获取组织成员访问身份列表
     */
    async ListOrganizationIdentity(req, cb) {
        return this.request("ListOrganizationIdentity", req, cb);
    }
    /**
     * 更新组织成员信息
     */
    async UpdateOrganizationMember(req, cb) {
        return this.request("UpdateOrganizationMember", req, cb);
    }
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    async DescribeOrganizationMemberAuthAccounts(req, cb) {
        return this.request("DescribeOrganizationMemberAuthAccounts", req, cb);
    }
    /**
     * 删除组织成员访问策略
     */
    async DeleteOrganizationMembersPolicy(req, cb) {
        return this.request("DeleteOrganizationMembersPolicy", req, cb);
    }
    /**
     * 添加企业组织节点
     */
    async AddOrganizationNode(req, cb) {
        return this.request("AddOrganizationNode", req, cb);
    }
    /**
     * 修改绑定成员邮箱
     */
    async UpdateOrganizationMemberEmailBind(req, cb) {
        return this.request("UpdateOrganizationMemberEmailBind", req, cb);
    }
    /**
     * 获取组织成员访问授权列表
     */
    async DescribeOrganizationMemberAuthIdentities(req, cb) {
        return this.request("DescribeOrganizationMemberAuthIdentities", req, cb);
    }
    /**
     * 更新企业组织节点
     */
    async UpdateOrganizationNode(req, cb) {
        return this.request("UpdateOrganizationNode", req, cb);
    }
    /**
     * 添加组织成员访问授权
     */
    async CreateOrganizationMemberAuthIdentity(req, cb) {
        return this.request("CreateOrganizationMemberAuthIdentity", req, cb);
    }
    /**
     * 批量删除企业组织成员
     */
    async DeleteOrganizationMembers(req, cb) {
        return this.request("DeleteOrganizationMembers", req, cb);
    }
    /**
     * 以月维度获取组织财务信息趋势
     */
    async DescribeOrganizationFinancialByMonth(req, cb) {
        return this.request("DescribeOrganizationFinancialByMonth", req, cb);
    }
    /**
     * 批量删除企业组织节点
     */
    async DeleteOrganizationNodes(req, cb) {
        return this.request("DeleteOrganizationNodes", req, cb);
    }
    /**
     * 获取组织成员的授权策略列表
     */
    async DescribeOrganizationMemberPolicies(req, cb) {
        return this.request("DescribeOrganizationMemberPolicies", req, cb);
    }
    /**
     * 删除企业组织
     */
    async DeleteOrganization(req, cb) {
        return this.request("DeleteOrganization", req, cb);
    }
    /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
    async CancelOrganizationMemberAuthAccount(req, cb) {
        return this.request("CancelOrganizationMemberAuthAccount", req, cb);
    }
    /**
     * 以成员维度获取组织财务信息
     */
    async DescribeOrganizationFinancialByMember(req, cb) {
        return this.request("DescribeOrganizationFinancialByMember", req, cb);
    }
    /**
     * 更新组织身份
     */
    async UpdateOrganizationIdentity(req, cb) {
        return this.request("UpdateOrganizationIdentity", req, cb);
    }
    /**
     * 创建组织成员访问策略
     */
    async CreateOrganizationMembersPolicy(req, cb) {
        return this.request("CreateOrganizationMembersPolicy", req, cb);
    }
    /**
     * 获取企业组织信息
     */
    async DescribeOrganization(req, cb) {
        return this.request("DescribeOrganization", req, cb);
    }
    /**
     * 移动成员到指定企业组织节点
     */
    async MoveOrganizationNodeMembers(req, cb) {
        return this.request("MoveOrganizationNodeMembers", req, cb);
    }
    /**
     * 创建企业组织
     */
    async CreateOrganization(req, cb) {
        return this.request("CreateOrganization", req, cb);
    }
    /**
     * 添加组织身份
     */
    async CreateOrganizationIdentity(req, cb) {
        return this.request("CreateOrganizationIdentity", req, cb);
    }
    /**
     * 删除组织身份
     */
    async DeleteOrganizationIdentity(req, cb) {
        return this.request("DeleteOrganizationIdentity", req, cb);
    }
    /**
     * 添加组织成员邮箱
     */
    async AddOrganizationMemberEmail(req, cb) {
        return this.request("AddOrganizationMemberEmail", req, cb);
    }
    /**
     * 查询成员邮箱绑定详细信息
     */
    async DescribeOrganizationMemberEmailBind(req, cb) {
        return this.request("DescribeOrganizationMemberEmailBind", req, cb);
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
     * 以产品维度获取组织财务信息
     */
    async DescribeOrganizationFinancialByProduct(req, cb) {
        return this.request("DescribeOrganizationFinancialByProduct", req, cb);
    }
    /**
     * 获取已设置管理员的互信主体关系列表
     */
    async DescribeOrganizationAuthNode(req, cb) {
        return this.request("DescribeOrganizationAuthNode", req, cb);
    }
    /**
     * 获取组织节点列表
     */
    async DescribeOrganizationNodes(req, cb) {
        return this.request("DescribeOrganizationNodes", req, cb);
    }
    /**
     * 创建组织成员访问授权策略
     */
    async CreateOrganizationMemberPolicy(req, cb) {
        return this.request("CreateOrganizationMemberPolicy", req, cb);
    }
    /**
     * 删除组织成员访问授权
     */
    async DeleteOrganizationMemberAuthIdentity(req, cb) {
        return this.request("DeleteOrganizationMemberAuthIdentity", req, cb);
    }
}
exports.Client = Client;
