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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const OrgPermission = models.OrgPermission;
const MemberIdentity = models.MemberIdentity;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const BindOrganizationMemberAuthAccountRequest = models.BindOrganizationMemberAuthAccountRequest;
const CreateOrganizationMemberRequest = models.CreateOrganizationMemberRequest;
const DescribeOrganizationMembersResponse = models.DescribeOrganizationMembersResponse;
const DescribeOrganizationMembersRequest = models.DescribeOrganizationMembersRequest;
const OrgMember = models.OrgMember;
const CreateOrganizationMemberPolicyResponse = models.CreateOrganizationMemberPolicyResponse;
const CreateOrganizationMemberPolicyRequest = models.CreateOrganizationMemberPolicyRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const BindOrganizationMemberAuthAccountResponse = models.BindOrganizationMemberAuthAccountResponse;
const CreateOrganizationMemberResponse = models.CreateOrganizationMemberResponse;


/**
 * organization client
 * @class
 */
class OrganizationClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("organization.tencentcloudapi.com", "2021-03-31", credential, region, profile);
    }
    
    /**
     * 获取企业组织成员列表
     * @param {DescribeOrganizationMembersRequest} req
     * @param {function(string, DescribeOrganizationMembersResponse):void} cb
     * @public
     */
    DescribeOrganizationMembers(req, cb) {
        let resp = new DescribeOrganizationMembersResponse();
        this.request("DescribeOrganizationMembers", req, resp, cb);
    }

    /**
     * 创建组织成员
     * @param {CreateOrganizationMemberRequest} req
     * @param {function(string, CreateOrganizationMemberResponse):void} cb
     * @public
     */
    CreateOrganizationMember(req, cb) {
        let resp = new CreateOrganizationMemberResponse();
        this.request("CreateOrganizationMember", req, resp, cb);
    }

    /**
     * 绑定组织成员和子账号的授权关系
     * @param {BindOrganizationMemberAuthAccountRequest} req
     * @param {function(string, BindOrganizationMemberAuthAccountResponse):void} cb
     * @public
     */
    BindOrganizationMemberAuthAccount(req, cb) {
        let resp = new BindOrganizationMemberAuthAccountResponse();
        this.request("BindOrganizationMemberAuthAccount", req, resp, cb);
    }

    /**
     * 获取企业组织信息
     * @param {DescribeOrganizationRequest} req
     * @param {function(string, DescribeOrganizationResponse):void} cb
     * @public
     */
    DescribeOrganization(req, cb) {
        let resp = new DescribeOrganizationResponse();
        this.request("DescribeOrganization", req, resp, cb);
    }

    /**
     * 创建组织成员的授权策略
     * @param {CreateOrganizationMemberPolicyRequest} req
     * @param {function(string, CreateOrganizationMemberPolicyResponse):void} cb
     * @public
     */
    CreateOrganizationMemberPolicy(req, cb) {
        let resp = new CreateOrganizationMemberPolicyResponse();
        this.request("CreateOrganizationMemberPolicy", req, resp, cb);
    }


}
module.exports = OrganizationClient;
