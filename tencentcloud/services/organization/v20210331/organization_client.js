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
     * 禁用策略类型
     */
    async DisablePolicyType(req, cb) {
        return this.request("DisablePolicyType", req, cb);
    }
    /**
     * 更新共享单元。
     */
    async UpdateShareUnit(req, cb) {
        return this.request("UpdateShareUnit", req, cb);
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
     * 获取共享单元资源列表。
     */
    async DescribeShareUnitResources(req, cb) {
        return this.request("DescribeShareUnitResources", req, cb);
    }
    /**
     * 删除组织成员访问策略
     */
    async DeleteOrganizationMembersPolicy(req, cb) {
        return this.request("DeleteOrganizationMembersPolicy", req, cb);
    }
    /**
     * 获取组织成员访问身份列表
     */
    async ListOrganizationIdentity(req, cb) {
        return this.request("ListOrganizationIdentity", req, cb);
    }
    /**
     * 本接口（ListPoliciesForTarget）查询目标关联的策略列表
     */
    async ListPoliciesForTarget(req, cb) {
        return this.request("ListPoliciesForTarget", req, cb);
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
     * 获取共享单元成员列表。
     */
    async DescribeShareUnitMembers(req, cb) {
        return this.request("DescribeShareUnitMembers", req, cb);
    }
    /**
     * 获取组织成员访问授权列表
     */
    async DescribeOrganizationMemberAuthIdentities(req, cb) {
        return this.request("DescribeOrganizationMemberAuthIdentities", req, cb);
    }
    /**
     * 本接口（DescribePolicy）可用于查询查看策略详情。
     */
    async DescribePolicy(req, cb) {
        return this.request("DescribePolicy", req, cb);
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
     * 更新组织身份
     */
    async UpdateOrganizationIdentity(req, cb) {
        return this.request("UpdateOrganizationIdentity", req, cb);
    }
    /**
     * 以月维度获取组织财务信息趋势
     */
    async DescribeOrganizationFinancialByMonth(req, cb) {
        return this.request("DescribeOrganizationFinancialByMonth", req, cb);
    }
    /**
     * 删除成员账号
     */
    async DeleteAccount(req, cb) {
        return this.request("DeleteAccount", req, cb);
    }
    /**
     * 批量删除企业组织节点
     */
    async DeleteOrganizationNodes(req, cb) {
        return this.request("DeleteOrganizationNodes", req, cb);
    }
    /**
     * 查询目标关联的有效策略
     */
    async DescribeEffectivePolicy(req, cb) {
        return this.request("DescribeEffectivePolicy", req, cb);
    }
    /**
     * 删除共享单元资源
     */
    async DeleteShareUnitResources(req, cb) {
        return this.request("DeleteShareUnitResources", req, cb);
    }
    /**
     * 获取共享单元列表。
     */
    async DescribeShareUnits(req, cb) {
        return this.request("DescribeShareUnits", req, cb);
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
     * 添加共享单元资源
     */
    async AddShareUnitResources(req, cb) {
        return this.request("AddShareUnitResources", req, cb);
    }
    /**
     * 获取成员标签检测不合规资源列表
     */
    async ListNonCompliantResource(req, cb) {
        return this.request("ListNonCompliantResource", req, cb);
    }
    /**
     * 绑定策略
     */
    async AttachPolicy(req, cb) {
        return this.request("AttachPolicy", req, cb);
    }
    /**
     * 创建组织成员访问策略
     */
    async CreateOrganizationMembersPolicy(req, cb) {
        return this.request("CreateOrganizationMembersPolicy", req, cb);
    }
    /**
     * 获取可共享地域列表
     */
    async DescribeShareAreas(req, cb) {
        return this.request("DescribeShareAreas", req, cb);
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
     * 解绑策略
     */
    async DetachPolicy(req, cb) {
        return this.request("DetachPolicy", req, cb);
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
     * 删除共享单元成员
     */
    async DeleteShareUnitMembers(req, cb) {
        return this.request("DeleteShareUnitMembers", req, cb);
    }
    /**
     * 查询成员邮箱绑定详细信息
     */
    async DescribeOrganizationMemberEmailBind(req, cb) {
        return this.request("DescribeOrganizationMemberEmailBind", req, cb);
    }
    /**
     * 启用策略类型
     */
    async EnablePolicyType(req, cb) {
        return this.request("EnablePolicyType", req, cb);
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
     * 创建共享单元，只有企业组织管理员可创建。
     */
    async AddShareUnit(req, cb) {
        return this.request("AddShareUnit", req, cb);
    }
    /**
     * 删除共享单元。
     */
    async DeleteShareUnit(req, cb) {
        return this.request("DeleteShareUnit", req, cb);
    }
    /**
     * 本接口（ListPolicies）可用于查询查看策略列表数据
     */
    async ListPolicies(req, cb) {
        return this.request("ListPolicies", req, cb);
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
     * 添加共享单元成员
     */
    async AddShareUnitMembers(req, cb) {
        return this.request("AddShareUnitMembers", req, cb);
    }
    /**
     * 本接口（DescribePolicyConfig）可用于查询企业组织策略配置
     */
    async DescribePolicyConfig(req, cb) {
        return this.request("DescribePolicyConfig", req, cb);
    }
    /**
     * 获取组织节点列表
     */
    async DescribeOrganizationNodes(req, cb) {
        return this.request("DescribeOrganizationNodes", req, cb);
    }
    /**
     * 删除策略
     */
    async DeletePolicy(req, cb) {
        return this.request("DeletePolicy", req, cb);
    }
    /**
     * 成员账号删除检查
     */
    async CheckAccountDelete(req, cb) {
        return this.request("CheckAccountDelete", req, cb);
    }
    /**
     * 创建一个特殊类型的策略，您可以关联到企业组织Root节点、企业部门节点或者企业的成员账号。
     */
    async CreatePolicy(req, cb) {
        return this.request("CreatePolicy", req, cb);
    }
    /**
     * 创建组织成员访问授权策略
     */
    async CreateOrganizationMemberPolicy(req, cb) {
        return this.request("CreateOrganizationMemberPolicy", req, cb);
    }
    /**
     * 本接口（ListTargetsForPolicy）查询某个指定策略关联的目标列表
     */
    async ListTargetsForPolicy(req, cb) {
        return this.request("ListTargetsForPolicy", req, cb);
    }
    /**
     * 删除组织成员访问授权
     */
    async DeleteOrganizationMemberAuthIdentity(req, cb) {
        return this.request("DeleteOrganizationMemberAuthIdentity", req, cb);
    }
    /**
     * 编辑策略
     */
    async UpdatePolicy(req, cb) {
        return this.request("UpdatePolicy", req, cb);
    }
}
exports.Client = Client;
