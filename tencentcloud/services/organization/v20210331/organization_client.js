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
     * 退出企业组织
     */
    async QuitOrganization(req, cb) {
        return this.request("QuitOrganization", req, cb);
    }
    /**
     * 查询用户组中的用户列表
     */
    async ListGroupMembers(req, cb) {
        return this.request("ListGroupMembers", req, cb);
    }
    /**
     * 获取组织成员访问身份列表
     */
    async ListOrganizationIdentity(req, cb) {
        return this.request("ListOrganizationIdentity", req, cb);
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
     * 为权限配置移除策略
     */
    async RemovePermissionPolicyFromRoleConfiguration(req, cb) {
        return this.request("RemovePermissionPolicyFromRoleConfiguration", req, cb);
    }
    /**
     * 启用/禁用SCIM密钥
     */
    async UpdateSCIMCredentialStatus(req, cb) {
        return this.request("UpdateSCIMCredentialStatus", req, cb);
    }
    /**
     * 修改用户信息
     */
    async UpdateUser(req, cb) {
        return this.request("UpdateUser", req, cb);
    }
    /**
     * 添加集团服务委派管理员
     */
    async CreateOrgServiceAssign(req, cb) {
        return this.request("CreateOrgServiceAssign", req, cb);
    }
    /**
     * 查询目标关联的有效策略
     */
    async DescribeEffectivePolicy(req, cb) {
        return this.request("DescribeEffectivePolicy", req, cb);
    }
    /**
     * 查询用户信息
     */
    async GetUser(req, cb) {
        return this.request("GetUser", req, cb);
    }
    /**
     * 开通身份中心服务（CIC）
     */
    async OpenIdentityCenter(req, cb) {
        return this.request("OpenIdentityCenter", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 查询权限配置信息
     */
    async GetRoleConfiguration(req, cb) {
        return this.request("GetRoleConfiguration", req, cb);
    }
    /**
     * 创建组织成员
     */
    async CreateOrganizationMember(req, cb) {
        return this.request("CreateOrganizationMember", req, cb);
    }
    /**
     * 查询成员邮箱绑定详细信息
     */
    async DescribeOrganizationMemberEmailBind(req, cb) {
        return this.request("DescribeOrganizationMemberEmailBind", req, cb);
    }
    /**
     * 删除共享单元资源
     */
    async DeleteShareUnitResources(req, cb) {
        return this.request("DeleteShareUnitResources", req, cb);
    }
    /**
     * 查询异步任务列表
     */
    async ListTasks(req, cb) {
        return this.request("ListTasks", req, cb);
    }
    /**
     * 从用户组中移除用户
     */
    async RemoveUserFromGroup(req, cb) {
        return this.request("RemoveUserFromGroup", req, cb);
    }
    /**
     * 以产品维度获取组织财务信息
     */
    async DescribeOrganizationFinancialByProduct(req, cb) {
        return this.request("DescribeOrganizationFinancialByProduct", req, cb);
    }
    /**
     * 获取组织节点列表
     */
    async DescribeOrganizationNodes(req, cb) {
        return this.request("DescribeOrganizationNodes", req, cb);
    }
    /**
     * 创建用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 查询SAML签名证书列表
     */
    async ListExternalSAMLIdPCertificates(req, cb) {
        return this.request("ListExternalSAMLIdPCertificates", req, cb);
    }
    /**
     * 移除SAML签名证书
     */
    async RemoveExternalSAMLIdPCertificate(req, cb) {
        return this.request("RemoveExternalSAMLIdPCertificate", req, cb);
    }
    /**
     * 成员账号删除检查
     */
    async CheckAccountDelete(req, cb) {
        return this.request("CheckAccountDelete", req, cb);
    }
    /**
     * 获取企业组织成员列表
     */
    async DescribeOrganizationMembers(req, cb) {
        return this.request("DescribeOrganizationMembers", req, cb);
    }
    /**
     * 在成员账号上授权
     */
    async CreateRoleAssignment(req, cb) {
        return this.request("CreateRoleAssignment", req, cb);
    }
    /**
     * 创建权限配置
     */
    async CreateRoleConfiguration(req, cb) {
        return this.request("CreateRoleConfiguration", req, cb);
    }
    /**
     * 接受加入共享单元邀请。
     */
    async AcceptJoinShareUnitInvitation(req, cb) {
        return this.request("AcceptJoinShareUnitInvitation", req, cb);
    }
    /**
     * 查询用户列表
     */
    async ListUsers(req, cb) {
        return this.request("ListUsers", req, cb);
    }
    /**
     * 本接口（DescribePolicy）可用于查询查看策略详情。
     */
    async DescribePolicy(req, cb) {
        return this.request("DescribePolicy", req, cb);
    }
    /**
     * 查询SAML身份提供商配置信息
     */
    async GetExternalSAMLIdentityProvider(req, cb) {
        return this.request("GetExternalSAMLIdentityProvider", req, cb);
    }
    /**
     * 清空SAML身份提供商配置信息
     */
    async ClearExternalSAMLIdentityProvider(req, cb) {
        return this.request("ClearExternalSAMLIdentityProvider", req, cb);
    }
    /**
     * 更新组织身份
     */
    async UpdateOrganizationIdentity(req, cb) {
        return this.request("UpdateOrganizationIdentity", req, cb);
    }
    /**
     * 将权限配置部署到成员账号上
     */
    async ProvisionRoleConfiguration(req, cb) {
        return this.request("ProvisionRoleConfiguration", req, cb);
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
     * 查询用户组信息
     */
    async GetGroup(req, cb) {
        return this.request("GetGroup", req, cb);
    }
    /**
     * 移除成员账号上的授权
     */
    async DeleteRoleAssignment(req, cb) {
        return this.request("DeleteRoleAssignment", req, cb);
    }
    /**
     * 创建组织成员访问策略
     */
    async CreateOrganizationMembersPolicy(req, cb) {
        return this.request("CreateOrganizationMembersPolicy", req, cb);
    }
    /**
     * 移动成员到指定企业组织节点
     */
    async MoveOrganizationNodeMembers(req, cb) {
        return this.request("MoveOrganizationNodeMembers", req, cb);
    }
    /**
     * 更新用户空间名
     */
    async UpdateZone(req, cb) {
        return this.request("UpdateZone", req, cb);
    }
    /**
     * 添加组织身份
     */
    async CreateOrganizationIdentity(req, cb) {
        return this.request("CreateOrganizationIdentity", req, cb);
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
     * 查询用户加入的用户组
     */
    async ListJoinedGroupsForUser(req, cb) {
        return this.request("ListJoinedGroupsForUser", req, cb);
    }
    /**
     * 获取权限配置中的策略列表
     */
    async ListPermissionPoliciesInRoleConfiguration(req, cb) {
        return this.request("ListPermissionPoliciesInRoleConfiguration", req, cb);
    }
    /**
     * 创建共享单元。
     */
    async AddShareUnit(req, cb) {
        return this.request("AddShareUnit", req, cb);
    }
    /**
     * 获取组织成员被绑定授权关系的子账号列表
     */
    async DescribeOrganizationMemberAuthAccounts(req, cb) {
        return this.request("DescribeOrganizationMemberAuthAccounts", req, cb);
    }
    /**
     * 查询权限配置部署列表
     */
    async ListRoleConfigurationProvisionings(req, cb) {
        return this.request("ListRoleConfigurationProvisionings", req, cb);
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
     * 编辑策略
     */
    async UpdatePolicy(req, cb) {
        return this.request("UpdatePolicy", req, cb);
    }
    /**
     * 获取共享单元列表。
     */
    async DescribeShareUnits(req, cb) {
        return this.request("DescribeShareUnits", req, cb);
    }
    /**
     * 查询CAM用户同步列表
     */
    async ListUserSyncProvisionings(req, cb) {
        return this.request("ListUserSyncProvisionings", req, cb);
    }
    /**
     * 修改用户状态
     */
    async UpdateUserStatus(req, cb) {
        return this.request("UpdateUserStatus", req, cb);
    }
    /**
     * 禁用策略类型
     */
    async DisablePolicyType(req, cb) {
        return this.request("DisablePolicyType", req, cb);
    }
    /**
     * 创建子用户同步任务
     */
    async CreateUserSyncProvisioning(req, cb) {
        return this.request("CreateUserSyncProvisioning", req, cb);
    }
    /**
     * 为权限配置添加策略
     */
    async AddPermissionPolicyToRoleConfiguration(req, cb) {
        return this.request("AddPermissionPolicyToRoleConfiguration", req, cb);
    }
    /**
     * 删除组织成员访问策略
     */
    async DeleteOrganizationMembersPolicy(req, cb) {
        return this.request("DeleteOrganizationMembersPolicy", req, cb);
    }
    /**
     * 删除策略
     */
    async DeletePolicy(req, cb) {
        return this.request("DeletePolicy", req, cb);
    }
    /**
     * 创建用户组
     */
    async CreateGroup(req, cb) {
        return this.request("CreateGroup", req, cb);
    }
    /**
     * 获取共享单元成员列表。
     */
    async DescribeShareUnitMembers(req, cb) {
        return this.request("DescribeShareUnitMembers", req, cb);
    }
    /**
     * 解除权限配置在成员账号上的部署
     */
    async DismantleRoleConfiguration(req, cb) {
        return this.request("DismantleRoleConfiguration", req, cb);
    }
    /**
     * 删除共享单元。
     */
    async DeleteShareUnit(req, cb) {
        return this.request("DeleteShareUnit", req, cb);
    }
    /**
     * 从组织中移除成员账号，不会删除账号。
     */
    async DeleteOrganizationMembers(req, cb) {
        return this.request("DeleteOrganizationMembers", req, cb);
    }
    /**
     * 获取集团服务委派管理员列表
     */
    async ListOrgServiceAssignMember(req, cb) {
        return this.request("ListOrgServiceAssignMember", req, cb);
    }
    /**
     * 拒绝加入共享单元邀请。
     */
    async RejectJoinShareUnitInvitation(req, cb) {
        return this.request("RejectJoinShareUnitInvitation", req, cb);
    }
    /**
     * 获取成员标签检测不合规资源列表
     */
    async ListNonCompliantResource(req, cb) {
        return this.request("ListNonCompliantResource", req, cb);
    }
    /**
     * 删除用户组
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 获取SCIM同步状态
     */
    async GetSCIMSynchronizationStatus(req, cb) {
        return this.request("GetSCIMSynchronizationStatus", req, cb);
    }
    /**
     * 配置SAML身份提供商信息
     */
    async SetExternalSAMLIdentityProvider(req, cb) {
        return this.request("SetExternalSAMLIdentityProvider", req, cb);
    }
    /**
     * 删除企业组织
     */
    async DeleteOrganization(req, cb) {
        return this.request("DeleteOrganization", req, cb);
    }
    /**
     * 本接口（ListPoliciesForTarget）查询目标关联的策略列表
     */
    async ListPoliciesForTarget(req, cb) {
        return this.request("ListPoliciesForTarget", req, cb);
    }
    /**
     * 删除SCIM密钥
     */
    async DeleteSCIMCredential(req, cb) {
        return this.request("DeleteSCIMCredential", req, cb);
    }
    /**
     * 创建子用户同步任务
     */
    async UpdateUserSyncProvisioning(req, cb) {
        return this.request("UpdateUserSyncProvisioning", req, cb);
    }
    /**
     * 查询CAM用户同步
     */
    async GetUserSyncProvisioning(req, cb) {
        return this.request("GetUserSyncProvisioning", req, cb);
    }
    /**
     * 获取企业组织信息
     */
    async DescribeOrganization(req, cb) {
        return this.request("DescribeOrganization", req, cb);
    }
    /**
     * 启用/禁用用户SCIM同步
     */
    async UpdateSCIMSynchronizationStatus(req, cb) {
        return this.request("UpdateSCIMSynchronizationStatus", req, cb);
    }
    /**
     * 查询用户组列表
     */
    async ListGroups(req, cb) {
        return this.request("ListGroups", req, cb);
    }
    /**
     * 获取共享单元资源列表。
     */
    async DescribeShareUnitResources(req, cb) {
        return this.request("DescribeShareUnitResources", req, cb);
    }
    /**
     * 绑定组织成员和组织管理员子账号的授权关系
     */
    async BindOrganizationMemberAuthAccount(req, cb) {
        return this.request("BindOrganizationMemberAuthAccount", req, cb);
    }
    /**
     * 修改用户组信息
     */
    async UpdateGroup(req, cb) {
        return this.request("UpdateGroup", req, cb);
    }
    /**
     * 创建一个特殊类型的策略，您可以关联到企业组织Root节点、企业部门节点或者企业的成员账号。
     */
    async CreatePolicy(req, cb) {
        return this.request("CreatePolicy", req, cb);
    }
    /**
     * 查询用户同步异步任务的状态
     */
    async GetProvisioningTaskStatus(req, cb) {
        return this.request("GetProvisioningTaskStatus", req, cb);
    }
    /**
     * 更新企业组织节点
     */
    async UpdateOrganizationNode(req, cb) {
        return this.request("UpdateOrganizationNode", req, cb);
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
     * 获取已设置管理员的互信主体关系列表
     */
    async DescribeOrganizationAuthNode(req, cb) {
        return this.request("DescribeOrganizationAuthNode", req, cb);
    }
    /**
     * 获取集团账号身份中心服务信息
     */
    async DescribeIdentityCenter(req, cb) {
        return this.request("DescribeIdentityCenter", req, cb);
    }
    /**
     * 创建SCIM密钥
     */
    async CreateSCIMCredential(req, cb) {
        return this.request("CreateSCIMCredential", req, cb);
    }
    /**
     * 获取组织成员访问授权列表
     */
    async DescribeOrganizationMemberAuthIdentities(req, cb) {
        return this.request("DescribeOrganizationMemberAuthIdentities", req, cb);
    }
    /**
     * 重新发送成员绑定邮箱激活邮件
     */
    async SendOrgMemberAccountBindEmail(req, cb) {
        return this.request("SendOrgMemberAccountBindEmail", req, cb);
    }
    /**
     * 查询空间的统计信息
     */
    async GetZoneStatistics(req, cb) {
        return this.request("GetZoneStatistics", req, cb);
    }
    /**
     * 解绑策略
     */
    async DetachPolicy(req, cb) {
        return this.request("DetachPolicy", req, cb);
    }
    /**
     * 查询用户SCIM密钥列表
     */
    async ListSCIMCredentials(req, cb) {
        return this.request("ListSCIMCredentials", req, cb);
    }
    /**
     * 添加组织成员访问授权
     */
    async CreateOrganizationMemberAuthIdentity(req, cb) {
        return this.request("CreateOrganizationMemberAuthIdentity", req, cb);
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
     * 查询授权列表
     */
    async ListRoleAssignments(req, cb) {
        return this.request("ListRoleAssignments", req, cb);
    }
    /**
     * 获取组织成员的授权策略列表
     */
    async DescribeOrganizationMemberPolicies(req, cb) {
        return this.request("DescribeOrganizationMemberPolicies", req, cb);
    }
    /**
     * 删除子用户同步任务
     */
    async DeleteUserSyncProvisioning(req, cb) {
        return this.request("DeleteUserSyncProvisioning", req, cb);
    }
    /**
     * 修改权限配置信息
     */
    async UpdateRoleConfiguration(req, cb) {
        return this.request("UpdateRoleConfiguration", req, cb);
    }
    /**
     * 查询权限配置列表
     */
    async ListRoleConfigurations(req, cb) {
        return this.request("ListRoleConfigurations", req, cb);
    }
    /**
     * 邀请组织成员
     */
    async InviteOrganizationMember(req, cb) {
        return this.request("InviteOrganizationMember", req, cb);
    }
    /**
     * 添加共享单元资源
     */
    async AddShareUnitResources(req, cb) {
        return this.request("AddShareUnitResources", req, cb);
    }
    /**
     * 绑定策略
     */
    async AttachPolicy(req, cb) {
        return this.request("AttachPolicy", req, cb);
    }
    /**
     * 获取可共享地域列表
     */
    async DescribeShareAreas(req, cb) {
        return this.request("DescribeShareAreas", req, cb);
    }
    /**
     * 为用户组添加用户
     */
    async AddUserToGroup(req, cb) {
        return this.request("AddUserToGroup", req, cb);
    }
    /**
     * 删除权限配置信息
     */
    async DeleteRoleConfiguration(req, cb) {
        return this.request("DeleteRoleConfiguration", req, cb);
    }
    /**
     * 创建企业组织
     */
    async CreateOrganization(req, cb) {
        return this.request("CreateOrganization", req, cb);
    }
    /**
     * 添加SAML签名证书
     */
    async AddExternalSAMLIdPCertificate(req, cb) {
        return this.request("AddExternalSAMLIdPCertificate", req, cb);
    }
    /**
     * 删除集团服务委派管理员
     */
    async DeleteOrgServiceAssign(req, cb) {
        return this.request("DeleteOrgServiceAssign", req, cb);
    }
    /**
     * 删除组织身份
     */
    async DeleteOrganizationIdentity(req, cb) {
        return this.request("DeleteOrganizationIdentity", req, cb);
    }
    /**
     * 启用策略类型
     */
    async EnablePolicyType(req, cb) {
        return this.request("EnablePolicyType", req, cb);
    }
    /**
     * 查询SAML服务提供商配置信息
     */
    async GetZoneSAMLServiceProviderInfo(req, cb) {
        return this.request("GetZoneSAMLServiceProviderInfo", req, cb);
    }
    /**
     * 本接口（ListTargetsForPolicy）查询某个指定策略关联的目标列表
     */
    async ListTargetsForPolicy(req, cb) {
        return this.request("ListTargetsForPolicy", req, cb);
    }
    /**
     * 本接口（ListPolicies）可用于查询查看策略列表数据
     */
    async ListPolicies(req, cb) {
        return this.request("ListPolicies", req, cb);
    }
    /**
     * 查询异步任务的状态
     */
    async GetTaskStatus(req, cb) {
        return this.request("GetTaskStatus", req, cb);
    }
    /**
     * 创建组织成员访问授权策略
     */
    async CreateOrganizationMemberPolicy(req, cb) {
        return this.request("CreateOrganizationMemberPolicy", req, cb);
    }
    /**
     * 获取集团服务设置列表
     */
    async ListOrganizationService(req, cb) {
        return this.request("ListOrganizationService", req, cb);
    }
    /**
     * 为权限配置修改自定义策略
     */
    async UpdateCustomPolicyForRoleConfiguration(req, cb) {
        return this.request("UpdateCustomPolicyForRoleConfiguration", req, cb);
    }
    /**
     * 删除组织成员访问授权
     */
    async DeleteOrganizationMemberAuthIdentity(req, cb) {
        return this.request("DeleteOrganizationMemberAuthIdentity", req, cb);
    }
}
exports.Client = Client;
