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
const DescribeOrganizationAuthNodeResponse = models.DescribeOrganizationAuthNodeResponse;
const OrgPermission = models.OrgPermission;
const BindOrganizationMemberAuthAccountRequest = models.BindOrganizationMemberAuthAccountRequest;
const DeleteOrganizationMembersResponse = models.DeleteOrganizationMembersResponse;
const OrgMember = models.OrgMember;
const DescribeOrganizationMemberAuthIdentitiesRequest = models.DescribeOrganizationMemberAuthIdentitiesRequest;
const CreateOrganizationMemberPolicyRequest = models.CreateOrganizationMemberPolicyRequest;
const DescribeOrganizationRequest = models.DescribeOrganizationRequest;
const DescribeOrganizationNodesRequest = models.DescribeOrganizationNodesRequest;
const BindOrganizationMemberAuthAccountResponse = models.BindOrganizationMemberAuthAccountResponse;
const CreateOrganizationMemberResponse = models.CreateOrganizationMemberResponse;
const MoveOrganizationNodeMembersRequest = models.MoveOrganizationNodeMembersRequest;
const ListOrganizationIdentityRequest = models.ListOrganizationIdentityRequest;
const AuthNode = models.AuthNode;
const MoveOrganizationNodeMembersResponse = models.MoveOrganizationNodeMembersResponse;
const DeleteOrganizationMembersRequest = models.DeleteOrganizationMembersRequest;
const DescribeOrganizationMemberPoliciesResponse = models.DescribeOrganizationMemberPoliciesResponse;
const DeleteOrganizationNodesRequest = models.DeleteOrganizationNodesRequest;
const AddOrganizationNodeResponse = models.AddOrganizationNodeResponse;
const IdentityPolicy = models.IdentityPolicy;
const ListOrganizationIdentityResponse = models.ListOrganizationIdentityResponse;
const DescribeOrganizationNodesResponse = models.DescribeOrganizationNodesResponse;
const DescribeOrganizationMembersResponse = models.DescribeOrganizationMembersResponse;
const CreateOrganizationMemberPolicyResponse = models.CreateOrganizationMemberPolicyResponse;
const CancelOrganizationMemberAuthAccountResponse = models.CancelOrganizationMemberAuthAccountResponse;
const DescribeOrganizationResponse = models.DescribeOrganizationResponse;
const DescribeOrganizationMemberPoliciesRequest = models.DescribeOrganizationMemberPoliciesRequest;
const AddOrganizationNodeRequest = models.AddOrganizationNodeRequest;
const DescribeOrganizationMemberAuthIdentitiesResponse = models.DescribeOrganizationMemberAuthIdentitiesResponse;
const OrgMemberPolicy = models.OrgMemberPolicy;
const DescribeOrganizationAuthNodeRequest = models.DescribeOrganizationAuthNodeRequest;
const UpdateOrganizationNodeResponse = models.UpdateOrganizationNodeResponse;
const DescribeOrganizationMemberAuthAccountsRequest = models.DescribeOrganizationMemberAuthAccountsRequest;
const CancelOrganizationMemberAuthAccountRequest = models.CancelOrganizationMemberAuthAccountRequest;
const DeleteOrganizationNodesResponse = models.DeleteOrganizationNodesResponse;
const DescribeOrganizationMemberAuthAccountsResponse = models.DescribeOrganizationMemberAuthAccountsResponse;
const OrgMemberAuthAccount = models.OrgMemberAuthAccount;
const OrgMemberAuthIdentity = models.OrgMemberAuthIdentity;
const MemberMainInfo = models.MemberMainInfo;
const CreateOrganizationMemberRequest = models.CreateOrganizationMemberRequest;
const OrgIdentity = models.OrgIdentity;
const DescribeOrganizationMembersRequest = models.DescribeOrganizationMembersRequest;
const MemberIdentity = models.MemberIdentity;
const UpdateOrganizationNodeRequest = models.UpdateOrganizationNodeRequest;
const OrgNode = models.OrgNode;


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
     * 移动成员到指定企业组织节点
     * @param {MoveOrganizationNodeMembersRequest} req
     * @param {function(string, MoveOrganizationNodeMembersResponse):void} cb
     * @public
     */
    MoveOrganizationNodeMembers(req, cb) {
        let resp = new MoveOrganizationNodeMembersResponse();
        this.request("MoveOrganizationNodeMembers", req, resp, cb);
    }

    /**
     * 更新企业组织节点
     * @param {UpdateOrganizationNodeRequest} req
     * @param {function(string, UpdateOrganizationNodeResponse):void} cb
     * @public
     */
    UpdateOrganizationNode(req, cb) {
        let resp = new UpdateOrganizationNodeResponse();
        this.request("UpdateOrganizationNode", req, resp, cb);
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
     * 绑定组织成员和组织管理员子账号的授权关系
     * @param {BindOrganizationMemberAuthAccountRequest} req
     * @param {function(string, BindOrganizationMemberAuthAccountResponse):void} cb
     * @public
     */
    BindOrganizationMemberAuthAccount(req, cb) {
        let resp = new BindOrganizationMemberAuthAccountResponse();
        this.request("BindOrganizationMemberAuthAccount", req, resp, cb);
    }

    /**
     * 获取组织成员被绑定授权关系的子账号列表
     * @param {DescribeOrganizationMemberAuthAccountsRequest} req
     * @param {function(string, DescribeOrganizationMemberAuthAccountsResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberAuthAccounts(req, cb) {
        let resp = new DescribeOrganizationMemberAuthAccountsResponse();
        this.request("DescribeOrganizationMemberAuthAccounts", req, resp, cb);
    }

    /**
     * 获取已设置管理员的互信主体关系列表
     * @param {DescribeOrganizationAuthNodeRequest} req
     * @param {function(string, DescribeOrganizationAuthNodeResponse):void} cb
     * @public
     */
    DescribeOrganizationAuthNode(req, cb) {
        let resp = new DescribeOrganizationAuthNodeResponse();
        this.request("DescribeOrganizationAuthNode", req, resp, cb);
    }

    /**
     * 取消组织成员和组织管理员子账号的授权关系

     * @param {CancelOrganizationMemberAuthAccountRequest} req
     * @param {function(string, CancelOrganizationMemberAuthAccountResponse):void} cb
     * @public
     */
    CancelOrganizationMemberAuthAccount(req, cb) {
        let resp = new CancelOrganizationMemberAuthAccountResponse();
        this.request("CancelOrganizationMemberAuthAccount", req, resp, cb);
    }

    /**
     * 批量删除企业组织节点
     * @param {DeleteOrganizationNodesRequest} req
     * @param {function(string, DeleteOrganizationNodesResponse):void} cb
     * @public
     */
    DeleteOrganizationNodes(req, cb) {
        let resp = new DeleteOrganizationNodesResponse();
        this.request("DeleteOrganizationNodes", req, resp, cb);
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
     * 获取组织节点列表
     * @param {DescribeOrganizationNodesRequest} req
     * @param {function(string, DescribeOrganizationNodesResponse):void} cb
     * @public
     */
    DescribeOrganizationNodes(req, cb) {
        let resp = new DescribeOrganizationNodesResponse();
        this.request("DescribeOrganizationNodes", req, resp, cb);
    }

    /**
     * 添加企业组织节点
     * @param {AddOrganizationNodeRequest} req
     * @param {function(string, AddOrganizationNodeResponse):void} cb
     * @public
     */
    AddOrganizationNode(req, cb) {
        let resp = new AddOrganizationNodeResponse();
        this.request("AddOrganizationNode", req, resp, cb);
    }

    /**
     * 获取组织成员的授权策略列表
     * @param {DescribeOrganizationMemberPoliciesRequest} req
     * @param {function(string, DescribeOrganizationMemberPoliciesResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberPolicies(req, cb) {
        let resp = new DescribeOrganizationMemberPoliciesResponse();
        this.request("DescribeOrganizationMemberPolicies", req, resp, cb);
    }

    /**
     * 创建组织成员访问授权策略
     * @param {CreateOrganizationMemberPolicyRequest} req
     * @param {function(string, CreateOrganizationMemberPolicyResponse):void} cb
     * @public
     */
    CreateOrganizationMemberPolicy(req, cb) {
        let resp = new CreateOrganizationMemberPolicyResponse();
        this.request("CreateOrganizationMemberPolicy", req, resp, cb);
    }

    /**
     * 获取组织成员可被管理的身份列表
     * @param {DescribeOrganizationMemberAuthIdentitiesRequest} req
     * @param {function(string, DescribeOrganizationMemberAuthIdentitiesResponse):void} cb
     * @public
     */
    DescribeOrganizationMemberAuthIdentities(req, cb) {
        let resp = new DescribeOrganizationMemberAuthIdentitiesResponse();
        this.request("DescribeOrganizationMemberAuthIdentities", req, resp, cb);
    }

    /**
     * 批量删除企业组织成员
     * @param {DeleteOrganizationMembersRequest} req
     * @param {function(string, DeleteOrganizationMembersResponse):void} cb
     * @public
     */
    DeleteOrganizationMembers(req, cb) {
        let resp = new DeleteOrganizationMembersResponse();
        this.request("DeleteOrganizationMembers", req, resp, cb);
    }

    /**
     * 获取组织成员访问身份列表
     * @param {ListOrganizationIdentityRequest} req
     * @param {function(string, ListOrganizationIdentityResponse):void} cb
     * @public
     */
    ListOrganizationIdentity(req, cb) {
        let resp = new ListOrganizationIdentityResponse();
        this.request("ListOrganizationIdentity", req, resp, cb);
    }


}
module.exports = OrganizationClient;
