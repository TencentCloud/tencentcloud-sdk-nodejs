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
        super("organization.tencentcloudapi.com", "2018-12-25", clientConfig);
    }
    /**
     * 拒绝企业组织邀请
     */
    async DenyOrganizationInvitation(req, cb) {
        return this.request("DenyOrganizationInvitation", req, cb);
    }
    /**
     * 获取邀请信息列表
     */
    async ListOrganizationInvitations(req, cb) {
        return this.request("ListOrganizationInvitations", req, cb);
    }
    /**
     * 更新企业组织单元
     */
    async UpdateOrganizationNode(req, cb) {
        return this.request("UpdateOrganizationNode", req, cb);
    }
    /**
     * 接受加入企业组织邀请
     */
    async AcceptOrganizationInvitation(req, cb) {
        return this.request("AcceptOrganizationInvitation", req, cb);
    }
    /**
     * 获取企业组织成员
     */
    async GetOrganizationMember(req, cb) {
        return this.request("GetOrganizationMember", req, cb);
    }
    /**
     * 获取企业组织信息
     */
    async GetOrganization(req, cb) {
        return this.request("GetOrganization", req, cb);
    }
    /**
     * 获取企业组织单元列表
     */
    async ListOrganizationNodes(req, cb) {
        return this.request("ListOrganizationNodes", req, cb);
    }
    /**
     * 更新企业成员信息
     */
    async UpdateOrganizationMember(req, cb) {
        return this.request("UpdateOrganizationMember", req, cb);
    }
    /**
     * 退出企业组织
     */
    async QuitOrganization(req, cb) {
        return this.request("QuitOrganization", req, cb);
    }
    /**
     * 批量删除企业组织单元
     */
    async DeleteOrganizationNodes(req, cb) {
        return this.request("DeleteOrganizationNodes", req, cb);
    }
    /**
     * 获取企业组织成员列表
     */
    async ListOrganizationMembers(req, cb) {
        return this.request("ListOrganizationMembers", req, cb);
    }
    /**
     * 删除企业组织成员
     */
    async DeleteOrganizationMemberFromNode(req, cb) {
        return this.request("DeleteOrganizationMemberFromNode", req, cb);
    }
    /**
     * 添加企业组织单元
     */
    async AddOrganizationNode(req, cb) {
        return this.request("AddOrganizationNode", req, cb);
    }
    /**
     * 发送企业组织邀请
     */
    async SendOrganizationInvitation(req, cb) {
        return this.request("SendOrganizationInvitation", req, cb);
    }
    /**
     * 取消企业组织邀请
     */
    async CancelOrganizationInvitation(req, cb) {
        return this.request("CancelOrganizationInvitation", req, cb);
    }
    /**
     * 删除企业组织
     */
    async DeleteOrganization(req, cb) {
        return this.request("DeleteOrganization", req, cb);
    }
    /**
     * 批量删除企业组织成员
     */
    async DeleteOrganizationMembers(req, cb) {
        return this.request("DeleteOrganizationMembers", req, cb);
    }
    /**
     * 获取企业组织单元成员列表
     */
    async ListOrganizationNodeMembers(req, cb) {
        return this.request("ListOrganizationNodeMembers", req, cb);
    }
    /**
     * 创建企业组织
     */
    async CreateOrganization(req, cb) {
        return this.request("CreateOrganization", req, cb);
    }
    /**
     * 移动成员到指定企业组织单元
     */
    async MoveOrganizationMembersToNode(req, cb) {
        return this.request("MoveOrganizationMembersToNode", req, cb);
    }
}
exports.Client = Client;
