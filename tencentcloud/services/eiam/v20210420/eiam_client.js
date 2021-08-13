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
 * eiam client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("eiam.tencentcloudapi.com", "2021-04-20", clientConfig);
    }
    /**
     * 获取用户组信息
     */
    async DescribeUserGroup(req, cb) {
        return this.request("DescribeUserGroup", req, cb);
    }
    /**
     * 查询指定机构下的资源授权列表
     */
    async DescribeOrgResourcesAuthorization(req, cb) {
        return this.request("DescribeOrgResourcesAuthorization", req, cb);
    }
    /**
     * 通过用户名或用户 id 冻结用户
     */
    async ModifyUserInfo(req, cb) {
        return this.request("ModifyUserInfo", req, cb);
    }
    /**
     * 获取JWT公钥信息。
     */
    async DescribePublicKey(req, cb) {
        return this.request("DescribePublicKey", req, cb);
    }
    /**
     * 获取用户列表信息。
     */
    async ListUsers(req, cb) {
        return this.request("ListUsers", req, cb);
    }
    /**
     * 通过用户组ID获得被授权访问的应用列表。
     */
    async ListAuthorizedApplicationsToUserGroup(req, cb) {
        return this.request("ListAuthorizedApplicationsToUserGroup", req, cb);
    }
    /**
     * 应用授权关系列表（含搜索条件匹配）。
     */
    async ListApplicationAuthorizations(req, cb) {
        return this.request("ListApplicationAuthorizations", req, cb);
    }
    /**
     * 查询指定用户下的资源授权列表
     */
    async DescribeUserResourcesAuthorization(req, cb) {
        return this.request("DescribeUserResourcesAuthorization", req, cb);
    }
    /**
     * 删除一个用户组
     */
    async DeleteUserGroup(req, cb) {
        return this.request("DeleteUserGroup", req, cb);
    }
    /**
     * 更新一个应用的信息
     */
    async ModifyApplication(req, cb) {
        return this.request("ModifyApplication", req, cb);
    }
    /**
     * 获取用户组列表信息（包含查询条件）。
     */
    async ListUserGroups(req, cb) {
        return this.request("ListUserGroups", req, cb);
    }
    /**
     * 加入用户到用户组
     */
    async AddUserToUserGroup(req, cb) {
        return this.request("AddUserToUserGroup", req, cb);
    }
    /**
     * 查询指定用户组下的资源授权列表
     */
    async DescribeUserGroupResourcesAuthorization(req, cb) {
        return this.request("DescribeUserGroupResourcesAuthorization", req, cb);
    }
    /**
     * 获取用户组中的用户列表
     */
    async ListUsersInUserGroup(req, cb) {
        return this.request("ListUsersInUserGroup", req, cb);
    }
    /**
     * 新建一个用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 通过用户ID获得被授权访问的应用列表。
     */
    async ListAuthorizedApplicationsToUser(req, cb) {
        return this.request("ListAuthorizedApplicationsToUser", req, cb);
    }
    /**
     * 根据机构节点ID读取机构节点信息
     */
    async DescribeOrgNode(req, cb) {
        return this.request("DescribeOrgNode", req, cb);
    }
    /**
     * 通过用户名或用户 id 搜索用户
     */
    async DescribeUserInfo(req, cb) {
        return this.request("DescribeUserInfo", req, cb);
    }
    /**
     * 从用户组中移除用户
     */
    async RemoveUserFromUserGroup(req, cb) {
        return this.request("RemoveUserFromUserGroup", req, cb);
    }
    /**
     * 新建一个机构节点
     */
    async CreateOrgNode(req, cb) {
        return this.request("CreateOrgNode", req, cb);
    }
    /**
     * 通过用户名或用户 id 删除用户。
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 获取应用列表信息。
     */
    async ListApplications(req, cb) {
        return this.request("ListApplications", req, cb);
    }
    /**
     * 通过机构节点ID获得被授权访问的应用列表。
     */
    async ListAuthorizedApplicationsToOrgNode(req, cb) {
        return this.request("ListAuthorizedApplicationsToOrgNode", req, cb);
    }
    /**
     * 删除一个机构节点
     */
    async DeleteOrgNode(req, cb) {
        return this.request("DeleteOrgNode", req, cb);
    }
    /**
     * 新建用户组
     */
    async CreateUserGroup(req, cb) {
        return this.request("CreateUserGroup", req, cb);
    }
    /**
     * 获取用户所在的用户组列表
     */
    async ListUserGroupsOfUser(req, cb) {
        return this.request("ListUserGroupsOfUser", req, cb);
    }
    /**
     * 获取一个应用的信息。
     */
    async DescribeApplication(req, cb) {
        return this.request("DescribeApplication", req, cb);
    }
    /**
     * 根据机构节点ID读取节点下用户
     */
    async ListUsersInOrgNode(req, cb) {
        return this.request("ListUsersInOrgNode", req, cb);
    }
    /**
     * 新建一个机构节点，
     */
    async UpdateOrgNode(req, cb) {
        return this.request("UpdateOrgNode", req, cb);
    }
}
exports.Client = Client;
