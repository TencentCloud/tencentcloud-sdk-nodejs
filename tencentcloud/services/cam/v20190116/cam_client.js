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
 * cam client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cam.tencentcloudapi.com", "2019-01-16", clientConfig);
    }
    /**
     * 创建子用户
     */
    async AddUser(req, cb) {
        return this.request("AddUser", req, cb);
    }
    /**
     * 创建服务相关角色
     */
    async CreateServiceLinkedRole(req, cb) {
        return this.request("CreateServiceLinkedRole", req, cb);
    }
    /**
     * 获取用户权限边界
     */
    async GetUserPermissionBoundary(req, cb) {
        return this.request("GetUserPermissionBoundary", req, cb);
    }
    /**
     * 查询账户摘要
     */
    async GetAccountSummary(req, cb) {
        return this.request("GetAccountSummary", req, cb);
    }
    /**
     * 删除角色权限边界
     */
    async DeleteRolePermissionsBoundary(req, cb) {
        return this.request("DeleteRolePermissionsBoundary", req, cb);
    }
    /**
     * 获取消息接收人列表
     */
    async ListReceiver(req, cb) {
        return this.request("ListReceiver", req, cb);
    }
    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     */
    async ListAttachedGroupPolicies(req, cb) {
        return this.request("ListAttachedGroupPolicies", req, cb);
    }
    /**
     * 验证自定义多因子Token
     */
    async ConsumeCustomMFAToken(req, cb) {
        return this.request("ConsumeCustomMFAToken", req, cb);
    }
    /**
     * 更新子用户
     */
    async UpdateUser(req, cb) {
        return this.request("UpdateUser", req, cb);
    }
    /**
     * 获取自定义多因子Token关联信息
     */
    async GetCustomMFATokenInfo(req, cb) {
        return this.request("GetCustomMFATokenInfo", req, cb);
    }
    /**
     * 查询子用户
     */
    async GetUser(req, cb) {
        return this.request("GetUser", req, cb);
    }
    /**
     * 修改用户OIDC配置
     */
    async UpdateUserOIDCConfig(req, cb) {
        return this.request("UpdateUserOIDCConfig", req, cb);
    }
    /**
     * 根据删除TaskId获取服务相关角色删除状态
     */
    async GetServiceLinkedRoleDeletionStatus(req, cb) {
        return this.request("GetServiceLinkedRoleDeletionStatus", req, cb);
    }
    /**
     * 查询用户OIDC配置
     */
    async DescribeUserOIDCConfig(req, cb) {
        return this.request("DescribeUserOIDCConfig", req, cb);
    }
    /**
     * 修改用户SAML配置
     */
    async UpdateUserSAMLConfig(req, cb) {
        return this.request("UpdateUserSAMLConfig", req, cb);
    }
    /**
     * 为CAM用户创建访问密钥
     */
    async CreateAccessKey(req, cb) {
        return this.request("CreateAccessKey", req, cb);
    }
    /**
     * 删除子用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     */
    async UpdateRoleDescription(req, cb) {
        return this.request("UpdateRoleDescription", req, cb);
    }
    /**
     * 获取数据流认证Token
     */
    async BuildDataFlowAuthToken(req, cb) {
        return this.request("BuildDataFlowAuthToken", req, cb);
    }
    /**
     * 更新SAML身份提供商信息
     */
    async UpdateSAMLProvider(req, cb) {
        return this.request("UpdateSAMLProvider", req, cb);
    }
    /**
     * 角色解绑标签。
     */
    async UntagRole(req, cb) {
        return this.request("UntagRole", req, cb);
    }
    /**
     * 通过子用户UIN列表查询子用户
     */
    async DescribeSubAccounts(req, cb) {
        return this.request("DescribeSubAccounts", req, cb);
    }
    /**
     * 从用户组删除用户
     */
    async RemoveUserFromGroup(req, cb) {
        return this.request("RemoveUserFromGroup", req, cb);
    }
    /**
     * 查询SAML身份提供商列表
     */
    async ListSAMLProviders(req, cb) {
        return this.request("ListSAMLProviders", req, cb);
    }
    /**
     * 查询用户组关联的用户列表
     */
    async ListUsersForGroup(req, cb) {
        return this.request("ListUsersForGroup", req, cb);
    }
    /**
     * 查询用户组详情
     */
    async GetGroup(req, cb) {
        return this.request("GetGroup", req, cb);
    }
    /**
     * 创建用户OIDC配置。只能创建一个用户OIDC身份提供商，并且创建用户OIDC配置之后会自动关闭用户SAML SSO身份提供商。
     */
    async CreateUserOIDCConfig(req, cb) {
        return this.request("CreateUserOIDCConfig", req, cb);
    }
    /**
     * 为CAM用户删除访问密钥。
此接口属于高风险操作，删除密钥后不可恢复，腾讯云将永久拒绝此密钥的所有请求，请谨慎使用。
     */
    async DeleteAccessKey(req, cb) {
        return this.request("DeleteAccessKey", req, cb);
    }
    /**
     * 获取用户AppId
     */
    async GetUserAppId(req, cb) {
        return this.request("GetUserAppId", req, cb);
    }
    /**
     * 设置角色权限边界
     */
    async PutRolePermissionsBoundary(req, cb) {
        return this.request("PutRolePermissionsBoundary", req, cb);
    }
    /**
     * 删除服务相关角色
     */
    async DeleteServiceLinkedRole(req, cb) {
        return this.request("DeleteServiceLinkedRole", req, cb);
    }
    /**
     * 拉取子用户
     */
    async ListUsers(req, cb) {
        return this.request("ListUsers", req, cb);
    }
    /**
     * 查询用户SAML配置
     */
    async DescribeUserSAMLConfig(req, cb) {
        return this.request("DescribeUserSAMLConfig", req, cb);
    }
    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     */
    async DetachRolePolicy(req, cb) {
        return this.request("DetachRolePolicy", req, cb);
    }
    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     */
    async DescribeRoleList(req, cb) {
        return this.request("DescribeRoleList", req, cb);
    }
    /**
     * 创建SAML身份提供商
     */
    async CreateSAMLProvider(req, cb) {
        return this.request("CreateSAMLProvider", req, cb);
    }
    /**
     * 删除OIDC身份提供商
     */
    async DeleteOIDCConfig(req, cb) {
        return this.request("DeleteOIDCConfig", req, cb);
    }
    /**
     * 修改角色OIDC配置
     */
    async UpdateOIDCConfig(req, cb) {
        return this.request("UpdateOIDCConfig", req, cb);
    }
    /**
     * 本接口（DeleteRole）用于删除指定角色。
     */
    async DeleteRole(req, cb) {
        return this.request("DeleteRole", req, cb);
    }
    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     */
    async AttachGroupPolicy(req, cb) {
        return this.request("AttachGroupPolicy", req, cb);
    }
    /**
     * 获取所有已授权服务
     */
    async ListPoliciesGrantingServiceAccess(req, cb) {
        return this.request("ListPoliciesGrantingServiceAccess", req, cb);
    }
    /**
     * 为CAM用户更新访问密钥
     */
    async UpdateAccessKey(req, cb) {
        return this.request("UpdateAccessKey", req, cb);
    }
    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     */
    async UpdatePolicy(req, cb) {
        return this.request("UpdatePolicy", req, cb);
    }
    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     */
    async ListAttachedUserPolicies(req, cb) {
        return this.request("ListAttachedUserPolicies", req, cb);
    }
    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     */
    async CreatePolicyVersion(req, cb) {
        return this.request("CreatePolicyVersion", req, cb);
    }
    /**
     * 获取协作者列表
     */
    async ListCollaborators(req, cb) {
        return this.request("ListCollaborators", req, cb);
    }
    /**
     * 角色绑定标签
     */
    async TagRole(req, cb) {
        return this.request("TagRole", req, cb);
    }
    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     */
    async UpdateRoleConsoleLogin(req, cb) {
        return this.request("UpdateRoleConsoleLogin", req, cb);
    }
    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     */
    async AttachUserPolicy(req, cb) {
        return this.request("AttachUserPolicy", req, cb);
    }
    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     */
    async UpdateAssumeRolePolicy(req, cb) {
        return this.request("UpdateAssumeRolePolicy", req, cb);
    }
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     */
    async SetMfaFlag(req, cb) {
        return this.request("SetMfaFlag", req, cb);
    }
    /**
     * 获取密钥最近使用情况
     */
    async GetSecurityLastUsed(req, cb) {
        return this.request("GetSecurityLastUsed", req, cb);
    }
    /**
     * 创建用户组
     */
    async CreateGroup(req, cb) {
        return this.request("CreateGroup", req, cb);
    }
    /**
     * 本接口（DeletePolicy）可用于删除策略。
     */
    async DeletePolicy(req, cb) {
        return this.request("DeletePolicy", req, cb);
    }
    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     */
    async DeletePolicyVersion(req, cb) {
        return this.request("DeletePolicyVersion", req, cb);
    }
    /**
     * 列出指定CAM用户的访问密钥
     */
    async ListAccessKeys(req, cb) {
        return this.request("ListAccessKeys", req, cb);
    }
    /**
     * 删除用户组
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 创建消息接收人接口：仅允许已完成实名认证的用户访问消息接收人接口，并对每个用户限制每天最多请求10次。
     */
    async CreateMessageReceiver(req, cb) {
        return this.request("CreateMessageReceiver", req, cb);
    }
    /**
     * 创建角色OIDC配置
     */
    async CreateOIDCConfig(req, cb) {
        return this.request("CreateOIDCConfig", req, cb);
    }
    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     */
    async GetPolicyVersion(req, cb) {
        return this.request("GetPolicyVersion", req, cb);
    }
    /**
     * 列出用户关联的策略（包括随组关联）
     */
    async ListAttachedUserAllPolicies(req, cb) {
        return this.request("ListAttachedUserAllPolicies", req, cb);
    }
    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     */
    async SetDefaultPolicyVersion(req, cb) {
        return this.request("SetDefaultPolicyVersion", req, cb);
    }
    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     */
    async DetachGroupPolicy(req, cb) {
        return this.request("DetachGroupPolicy", req, cb);
    }
    /**
     * 查询用户安全设置
     */
    async DescribeSafeAuthFlag(req, cb) {
        return this.request("DescribeSafeAuthFlag", req, cb);
    }
    /**
     * 查询安全设置(国际站)
     */
    async DescribeSafeAuthFlagIntl(req, cb) {
        return this.request("DescribeSafeAuthFlagIntl", req, cb);
    }
    /**
     * 修改角色会话时长
     */
    async UpdateRoleSessionDuration(req, cb) {
        return this.request("UpdateRoleSessionDuration", req, cb);
    }
    /**
     * 查询用户组列表
     */
    async ListGroups(req, cb) {
        return this.request("ListGroups", req, cb);
    }
    /**
     * 获取企业微信子用户列表
     */
    async ListWeChatWorkSubAccounts(req, cb) {
        return this.request("ListWeChatWorkSubAccounts", req, cb);
    }
    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     */
    async ListPolicyVersions(req, cb) {
        return this.request("ListPolicyVersions", req, cb);
    }
    /**
     * 更新用户组
     */
    async UpdateGroup(req, cb) {
        return this.request("UpdateGroup", req, cb);
    }
    /**
     * 本接口（CreatePolicy）可用于创建策略。
     */
    async CreatePolicy(req, cb) {
        return this.request("CreatePolicy", req, cb);
    }
    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     */
    async DetachUserPolicy(req, cb) {
        return this.request("DetachUserPolicy", req, cb);
    }
    /**
     * 列出用户关联的用户组
     */
    async ListGroupsForUser(req, cb) {
        return this.request("ListGroupsForUser", req, cb);
    }
    /**
     * 删除消息接收人
     */
    async DeleteMessageReceiver(req, cb) {
        return this.request("DeleteMessageReceiver", req, cb);
    }
    /**
     * 查询SAML身份提供商详情
     */
    async GetSAMLProvider(req, cb) {
        return this.request("GetSAMLProvider", req, cb);
    }
    /**
     * 本接口（CreateRole）用于创建角色。
     */
    async CreateRole(req, cb) {
        return this.request("CreateRole", req, cb);
    }
    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     */
    async ListAttachedRolePolicies(req, cb) {
        return this.request("ListAttachedRolePolicies", req, cb);
    }
    /**
     * 删除SAML身份提供商
     */
    async DeleteSAMLProvider(req, cb) {
        return this.request("DeleteSAMLProvider", req, cb);
    }
    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     */
    async GetPolicy(req, cb) {
        return this.request("GetPolicy", req, cb);
    }
    /**
     * 获取角色权限边界
     */
    async GetRolePermissionBoundary(req, cb) {
        return this.request("GetRolePermissionBoundary", req, cb);
    }
    /**
     * 删除用户权限边界
     */
    async DeleteUserPermissionsBoundary(req, cb) {
        return this.request("DeleteUserPermissionsBoundary", req, cb);
    }
    /**
     * 查询角色OIDC配置
     */
    async DescribeOIDCConfig(req, cb) {
        return this.request("DescribeOIDCConfig", req, cb);
    }
    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     */
    async ListEntitiesForPolicy(req, cb) {
        return this.request("ListEntitiesForPolicy", req, cb);
    }
    /**
     * 设置用户权限边界
     */
    async PutUserPermissionsBoundary(req, cb) {
        return this.request("PutUserPermissionsBoundary", req, cb);
    }
    /**
     * 创建用户SAML配置
     */
    async CreateUserSAMLConfig(req, cb) {
        return this.request("CreateUserSAMLConfig", req, cb);
    }
    /**
     * 用户加入到用户组
     */
    async AddUserToGroup(req, cb) {
        return this.request("AddUserToGroup", req, cb);
    }
    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     */
    async AttachRolePolicy(req, cb) {
        return this.request("AttachRolePolicy", req, cb);
    }
    /**
     * 获取子账号安全设置
     */
    async DescribeSafeAuthFlagColl(req, cb) {
        return this.request("DescribeSafeAuthFlagColl", req, cb);
    }
    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     */
    async GetRole(req, cb) {
        return this.request("GetRole", req, cb);
    }
    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     */
    async ListPolicies(req, cb) {
        return this.request("ListPolicies", req, cb);
    }
    /**
     * 禁用用户SSO
     */
    async DisableUserSSO(req, cb) {
        return this.request("DisableUserSSO", req, cb);
    }
}
exports.Client = Client;
