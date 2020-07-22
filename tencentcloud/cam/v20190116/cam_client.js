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
const GetUserResponse = models.GetUserResponse;
const ListAccessKeysRequest = models.ListAccessKeysRequest;
const SetMfaFlagResponse = models.SetMfaFlagResponse;
const DeleteUserRequest = models.DeleteUserRequest;
const DetachGroupPolicyRequest = models.DetachGroupPolicyRequest;
const DescribeRoleListResponse = models.DescribeRoleListResponse;
const CreatePolicyResponse = models.CreatePolicyResponse;
const GetRoleRequest = models.GetRoleRequest;
const CreateServiceLinkedRoleRequest = models.CreateServiceLinkedRoleRequest;
const ListAttachedGroupPoliciesRequest = models.ListAttachedGroupPoliciesRequest;
const ListGroupsForUserRequest = models.ListGroupsForUserRequest;
const AttachRolePolicyResponse = models.AttachRolePolicyResponse;
const GetServiceLinkedRoleDeletionStatusResponse = models.GetServiceLinkedRoleDeletionStatusResponse;
const DeleteUserPermissionsBoundaryResponse = models.DeleteUserPermissionsBoundaryResponse;
const ListUsersResponse = models.ListUsersResponse;
const UpdateRoleDescriptionResponse = models.UpdateRoleDescriptionResponse;
const DetachUserPolicyRequest = models.DetachUserPolicyRequest;
const ListGroupsResponse = models.ListGroupsResponse;
const ListPolicyVersionsRequest = models.ListPolicyVersionsRequest;
const GetCustomMFATokenInfoRequest = models.GetCustomMFATokenInfoRequest;
const DescribeRoleListRequest = models.DescribeRoleListRequest;
const GetGroupRequest = models.GetGroupRequest;
const DeleteRoleResponse = models.DeleteRoleResponse;
const PolicyVersionItem = models.PolicyVersionItem;
const DeleteUserPermissionsBoundaryRequest = models.DeleteUserPermissionsBoundaryRequest;
const ListSAMLProvidersRequest = models.ListSAMLProvidersRequest;
const ListGroupsRequest = models.ListGroupsRequest;
const DeletePolicyVersionResponse = models.DeletePolicyVersionResponse;
const UpdateSAMLProviderRequest = models.UpdateSAMLProviderRequest;
const UpdateAssumeRolePolicyRequest = models.UpdateAssumeRolePolicyRequest;
const ListGroupsForUserResponse = models.ListGroupsForUserResponse;
const ListUsersForGroupRequest = models.ListUsersForGroupRequest;
const RemoveUserFromGroupRequest = models.RemoveUserFromGroupRequest;
const CreatePolicyVersionResponse = models.CreatePolicyVersionResponse;
const ListPoliciesResponse = models.ListPoliciesResponse;
const GroupIdOfUidInfo = models.GroupIdOfUidInfo;
const UpdateRoleDescriptionRequest = models.UpdateRoleDescriptionRequest;
const SetDefaultPolicyVersionRequest = models.SetDefaultPolicyVersionRequest;
const RoleInfo = models.RoleInfo;
const CreatePolicyVersionRequest = models.CreatePolicyVersionRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const ListAttachedRolePoliciesResponse = models.ListAttachedRolePoliciesResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const DetachRolePolicyRequest = models.DetachRolePolicyRequest;
const DeleteRolePermissionsBoundaryRequest = models.DeleteRolePermissionsBoundaryRequest;
const StrategyInfo = models.StrategyInfo;
const DeletePolicyRequest = models.DeletePolicyRequest;
const GroupInfo = models.GroupInfo;
const AddUserRequest = models.AddUserRequest;
const DeleteRoleRequest = models.DeleteRoleRequest;
const UpdateRoleConsoleLoginRequest = models.UpdateRoleConsoleLoginRequest;
const GetCustomMFATokenInfoResponse = models.GetCustomMFATokenInfoResponse;
const UpdateAssumeRolePolicyResponse = models.UpdateAssumeRolePolicyResponse;
const ListAttachedUserPoliciesResponse = models.ListAttachedUserPoliciesResponse;
const CreateSAMLProviderResponse = models.CreateSAMLProviderResponse;
const DeleteRolePermissionsBoundaryResponse = models.DeleteRolePermissionsBoundaryResponse;
const GetUserRequest = models.GetUserRequest;
const LoginActionMfaFlag = models.LoginActionMfaFlag;
const SubAccountInfo = models.SubAccountInfo;
const CreateGroupRequest = models.CreateGroupRequest;
const SAMLProviderInfo = models.SAMLProviderInfo;
const UpdateSAMLProviderResponse = models.UpdateSAMLProviderResponse;
const UpdateUserRequest = models.UpdateUserRequest;
const CreateSAMLProviderRequest = models.CreateSAMLProviderRequest;
const AttachPolicyInfo = models.AttachPolicyInfo;
const PutRolePermissionsBoundaryRequest = models.PutRolePermissionsBoundaryRequest;
const UpdateRoleConsoleLoginResponse = models.UpdateRoleConsoleLoginResponse;
const AttachRolePolicyRequest = models.AttachRolePolicyRequest;
const ConsumeCustomMFATokenResponse = models.ConsumeCustomMFATokenResponse;
const AttachUserPolicyRequest = models.AttachUserPolicyRequest;
const ListAttachedGroupPoliciesResponse = models.ListAttachedGroupPoliciesResponse;
const GetPolicyVersionRequest = models.GetPolicyVersionRequest;
const PutUserPermissionsBoundaryResponse = models.PutUserPermissionsBoundaryResponse;
const DeletePolicyResponse = models.DeletePolicyResponse;
const ConsumeCustomMFATokenRequest = models.ConsumeCustomMFATokenRequest;
const AccessKey = models.AccessKey;
const GetGroupResponse = models.GetGroupResponse;
const DeleteSAMLProviderRequest = models.DeleteSAMLProviderRequest;
const DeleteSAMLProviderResponse = models.DeleteSAMLProviderResponse;
const UpdateUserResponse = models.UpdateUserResponse;
const CreateServiceLinkedRoleResponse = models.CreateServiceLinkedRoleResponse;
const ListUsersRequest = models.ListUsersRequest;
const ListCollaboratorsRequest = models.ListCollaboratorsRequest;
const UpdatePolicyResponse = models.UpdatePolicyResponse;
const AttachGroupPolicyResponse = models.AttachGroupPolicyResponse;
const UpdateGroupResponse = models.UpdateGroupResponse;
const ListEntitiesForPolicyRequest = models.ListEntitiesForPolicyRequest;
const ListPoliciesRequest = models.ListPoliciesRequest;
const GetServiceLinkedRoleDeletionStatusRequest = models.GetServiceLinkedRoleDeletionStatusRequest;
const DetachGroupPolicyResponse = models.DetachGroupPolicyResponse;
const CreatePolicyRequest = models.CreatePolicyRequest;
const DeletePolicyVersionRequest = models.DeletePolicyVersionRequest;
const UpdateGroupRequest = models.UpdateGroupRequest;
const GetPolicyVersionResponse = models.GetPolicyVersionResponse;
const CreateRoleResponse = models.CreateRoleResponse;
const GetSAMLProviderResponse = models.GetSAMLProviderResponse;
const ListPolicyVersionsResponse = models.ListPolicyVersionsResponse;
const GetPolicyRequest = models.GetPolicyRequest;
const AddUserToGroupRequest = models.AddUserToGroupRequest;
const RemoveUserFromGroupResponse = models.RemoveUserFromGroupResponse;
const DetachRolePolicyResponse = models.DetachRolePolicyResponse;
const AttachedPolicyOfRole = models.AttachedPolicyOfRole;
const PutUserPermissionsBoundaryRequest = models.PutUserPermissionsBoundaryRequest;
const ListSAMLProvidersResponse = models.ListSAMLProvidersResponse;
const SetDefaultPolicyVersionResponse = models.SetDefaultPolicyVersionResponse;
const ListAttachedRolePoliciesRequest = models.ListAttachedRolePoliciesRequest;
const GetSAMLProviderRequest = models.GetSAMLProviderRequest;
const DetachUserPolicyResponse = models.DetachUserPolicyResponse;
const GetRoleResponse = models.GetRoleResponse;
const CreateRoleRequest = models.CreateRoleRequest;
const DeleteServiceLinkedRoleResponse = models.DeleteServiceLinkedRoleResponse;
const GetPolicyResponse = models.GetPolicyResponse;
const DeleteGroupResponse = models.DeleteGroupResponse;
const AttachGroupPolicyRequest = models.AttachGroupPolicyRequest;
const DeleteServiceLinkedRoleRequest = models.DeleteServiceLinkedRoleRequest;
const AttachEntityOfPolicy = models.AttachEntityOfPolicy;
const ListUsersForGroupResponse = models.ListUsersForGroupResponse;
const PolicyVersionDetail = models.PolicyVersionDetail;
const AddUserResponse = models.AddUserResponse;
const ListEntitiesForPolicyResponse = models.ListEntitiesForPolicyResponse;
const AddUserToGroupResponse = models.AddUserToGroupResponse;
const AttachUserPolicyResponse = models.AttachUserPolicyResponse;
const PutRolePermissionsBoundaryResponse = models.PutRolePermissionsBoundaryResponse;
const SetMfaFlagRequest = models.SetMfaFlagRequest;
const ListCollaboratorsResponse = models.ListCollaboratorsResponse;
const ListAccessKeysResponse = models.ListAccessKeysResponse;
const ListAttachedUserPoliciesRequest = models.ListAttachedUserPoliciesRequest;
const UpdatePolicyRequest = models.UpdatePolicyRequest;
const GroupMemberInfo = models.GroupMemberInfo;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * cam client
 * @class
 */
class CamClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cam.tencentcloudapi.com", "2019-01-16", credential, region, profile);
    }
    
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     * @param {SetMfaFlagRequest} req
     * @param {function(string, SetMfaFlagResponse):void} cb
     * @public
     */
    SetMfaFlag(req, cb) {
        let resp = new SetMfaFlagResponse();
        this.request("SetMfaFlag", req, resp, cb);
    }

    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     * @param {UpdateRoleConsoleLoginRequest} req
     * @param {function(string, UpdateRoleConsoleLoginResponse):void} cb
     * @public
     */
    UpdateRoleConsoleLogin(req, cb) {
        let resp = new UpdateRoleConsoleLoginResponse();
        this.request("UpdateRoleConsoleLogin", req, resp, cb);
    }

    /**
     * 创建用户组
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * 删除服务相关角色
     * @param {DeleteServiceLinkedRoleRequest} req
     * @param {function(string, DeleteServiceLinkedRoleResponse):void} cb
     * @public
     */
    DeleteServiceLinkedRole(req, cb) {
        let resp = new DeleteServiceLinkedRoleResponse();
        this.request("DeleteServiceLinkedRole", req, resp, cb);
    }

    /**
     * 添加子用户
     * @param {AddUserRequest} req
     * @param {function(string, AddUserResponse):void} cb
     * @public
     */
    AddUser(req, cb) {
        let resp = new AddUserResponse();
        this.request("AddUser", req, resp, cb);
    }

    /**
     * 创建服务相关角色
     * @param {CreateServiceLinkedRoleRequest} req
     * @param {function(string, CreateServiceLinkedRoleResponse):void} cb
     * @public
     */
    CreateServiceLinkedRole(req, cb) {
        let resp = new CreateServiceLinkedRoleResponse();
        this.request("CreateServiceLinkedRole", req, resp, cb);
    }

    /**
     * 查询SAML身份提供商详情
     * @param {GetSAMLProviderRequest} req
     * @param {function(string, GetSAMLProviderResponse):void} cb
     * @public
     */
    GetSAMLProvider(req, cb) {
        let resp = new GetSAMLProviderResponse();
        this.request("GetSAMLProvider", req, resp, cb);
    }

    /**
     * 查询SAML身份提供商列表
     * @param {ListSAMLProvidersRequest} req
     * @param {function(string, ListSAMLProvidersResponse):void} cb
     * @public
     */
    ListSAMLProviders(req, cb) {
        let resp = new ListSAMLProvidersResponse();
        this.request("ListSAMLProviders", req, resp, cb);
    }

    /**
     * 本接口（CreateRole）用于创建角色。
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        let resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }

    /**
     * 设置角色权限边界
     * @param {PutRolePermissionsBoundaryRequest} req
     * @param {function(string, PutRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    PutRolePermissionsBoundary(req, cb) {
        let resp = new PutRolePermissionsBoundaryResponse();
        this.request("PutRolePermissionsBoundary", req, resp, cb);
    }

    /**
     * 拉取子用户
     * @param {ListUsersRequest} req
     * @param {function(string, ListUsersResponse):void} cb
     * @public
     */
    ListUsers(req, cb) {
        let resp = new ListUsersResponse();
        this.request("ListUsers", req, resp, cb);
    }

    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     * @param {ListAttachedRolePoliciesRequest} req
     * @param {function(string, ListAttachedRolePoliciesResponse):void} cb
     * @public
     */
    ListAttachedRolePolicies(req, cb) {
        let resp = new ListAttachedRolePoliciesResponse();
        this.request("ListAttachedRolePolicies", req, resp, cb);
    }

    /**
     * 本接口（DeletePolicy）可用于删除策略。
     * @param {DeletePolicyRequest} req
     * @param {function(string, DeletePolicyResponse):void} cb
     * @public
     */
    DeletePolicy(req, cb) {
        let resp = new DeletePolicyResponse();
        this.request("DeletePolicy", req, resp, cb);
    }

    /**
     * 删除角色权限边界
     * @param {DeleteRolePermissionsBoundaryRequest} req
     * @param {function(string, DeleteRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteRolePermissionsBoundary(req, cb) {
        let resp = new DeleteRolePermissionsBoundaryResponse();
        this.request("DeleteRolePermissionsBoundary", req, resp, cb);
    }

    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     * @param {DeletePolicyVersionRequest} req
     * @param {function(string, DeletePolicyVersionResponse):void} cb
     * @public
     */
    DeletePolicyVersion(req, cb) {
        let resp = new DeletePolicyVersionResponse();
        this.request("DeletePolicyVersion", req, resp, cb);
    }

    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     * @param {DetachRolePolicyRequest} req
     * @param {function(string, DetachRolePolicyResponse):void} cb
     * @public
     */
    DetachRolePolicy(req, cb) {
        let resp = new DetachRolePolicyResponse();
        this.request("DetachRolePolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        let resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }

    /**
     * 创建SAML身份提供商
     * @param {CreateSAMLProviderRequest} req
     * @param {function(string, CreateSAMLProviderResponse):void} cb
     * @public
     */
    CreateSAMLProvider(req, cb) {
        let resp = new CreateSAMLProviderResponse();
        this.request("CreateSAMLProvider", req, resp, cb);
    }

    /**
     * 删除SAML身份提供商
     * @param {DeleteSAMLProviderRequest} req
     * @param {function(string, DeleteSAMLProviderResponse):void} cb
     * @public
     */
    DeleteSAMLProvider(req, cb) {
        let resp = new DeleteSAMLProviderResponse();
        this.request("DeleteSAMLProvider", req, resp, cb);
    }

    /**
     * 更新子用户
     * @param {UpdateUserRequest} req
     * @param {function(string, UpdateUserResponse):void} cb
     * @public
     */
    UpdateUser(req, cb) {
        let resp = new UpdateUserResponse();
        this.request("UpdateUser", req, resp, cb);
    }

    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     * @param {GetPolicyRequest} req
     * @param {function(string, GetPolicyResponse):void} cb
     * @public
     */
    GetPolicy(req, cb) {
        let resp = new GetPolicyResponse();
        this.request("GetPolicy", req, resp, cb);
    }

    /**
     * 更新SAML身份提供商信息
     * @param {UpdateSAMLProviderRequest} req
     * @param {function(string, UpdateSAMLProviderResponse):void} cb
     * @public
     */
    UpdateSAMLProvider(req, cb) {
        let resp = new UpdateSAMLProviderResponse();
        this.request("UpdateSAMLProvider", req, resp, cb);
    }

    /**
     * 获取自定义多因子Token关联信息
     * @param {GetCustomMFATokenInfoRequest} req
     * @param {function(string, GetCustomMFATokenInfoResponse):void} cb
     * @public
     */
    GetCustomMFATokenInfo(req, cb) {
        let resp = new GetCustomMFATokenInfoResponse();
        this.request("GetCustomMFATokenInfo", req, resp, cb);
    }

    /**
     * 列出指定CAM用户的访问密钥
     * @param {ListAccessKeysRequest} req
     * @param {function(string, ListAccessKeysResponse):void} cb
     * @public
     */
    ListAccessKeys(req, cb) {
        let resp = new ListAccessKeysResponse();
        this.request("ListAccessKeys", req, resp, cb);
    }

    /**
     * 删除用户组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 本接口（DeleteRole）用于删除指定角色。
     * @param {DeleteRoleRequest} req
     * @param {function(string, DeleteRoleResponse):void} cb
     * @public
     */
    DeleteRole(req, cb) {
        let resp = new DeleteRoleResponse();
        this.request("DeleteRole", req, resp, cb);
    }

    /**
     * 查询子用户
     * @param {GetUserRequest} req
     * @param {function(string, GetUserResponse):void} cb
     * @public
     */
    GetUser(req, cb) {
        let resp = new GetUserResponse();
        this.request("GetUser", req, resp, cb);
    }

    /**
     * 删除用户权限边界
     * @param {DeleteUserPermissionsBoundaryRequest} req
     * @param {function(string, DeleteUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteUserPermissionsBoundary(req, cb) {
        let resp = new DeleteUserPermissionsBoundaryResponse();
        this.request("DeleteUserPermissionsBoundary", req, resp, cb);
    }

    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     * @param {ListAttachedGroupPoliciesRequest} req
     * @param {function(string, ListAttachedGroupPoliciesResponse):void} cb
     * @public
     */
    ListAttachedGroupPolicies(req, cb) {
        let resp = new ListAttachedGroupPoliciesResponse();
        this.request("ListAttachedGroupPolicies", req, resp, cb);
    }

    /**
     * 根据删除TaskId获取服务相关角色删除状态
     * @param {GetServiceLinkedRoleDeletionStatusRequest} req
     * @param {function(string, GetServiceLinkedRoleDeletionStatusResponse):void} cb
     * @public
     */
    GetServiceLinkedRoleDeletionStatus(req, cb) {
        let resp = new GetServiceLinkedRoleDeletionStatusResponse();
        this.request("GetServiceLinkedRoleDeletionStatus", req, resp, cb);
    }

    /**
     * 验证自定义多因子Token
     * @param {ConsumeCustomMFATokenRequest} req
     * @param {function(string, ConsumeCustomMFATokenResponse):void} cb
     * @public
     */
    ConsumeCustomMFAToken(req, cb) {
        let resp = new ConsumeCustomMFATokenResponse();
        this.request("ConsumeCustomMFAToken", req, resp, cb);
    }

    /**
     * 查询用户组详情
     * @param {GetGroupRequest} req
     * @param {function(string, GetGroupResponse):void} cb
     * @public
     */
    GetGroup(req, cb) {
        let resp = new GetGroupResponse();
        this.request("GetGroup", req, resp, cb);
    }

    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     * @param {GetPolicyVersionRequest} req
     * @param {function(string, GetPolicyVersionResponse):void} cb
     * @public
     */
    GetPolicyVersion(req, cb) {
        let resp = new GetPolicyVersionResponse();
        this.request("GetPolicyVersion", req, resp, cb);
    }

    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     * @param {UpdateAssumeRolePolicyRequest} req
     * @param {function(string, UpdateAssumeRolePolicyResponse):void} cb
     * @public
     */
    UpdateAssumeRolePolicy(req, cb) {
        let resp = new UpdateAssumeRolePolicyResponse();
        this.request("UpdateAssumeRolePolicy", req, resp, cb);
    }

    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     * @param {SetDefaultPolicyVersionRequest} req
     * @param {function(string, SetDefaultPolicyVersionResponse):void} cb
     * @public
     */
    SetDefaultPolicyVersion(req, cb) {
        let resp = new SetDefaultPolicyVersionResponse();
        this.request("SetDefaultPolicyVersion", req, resp, cb);
    }

    /**
     * 查询用户组列表
     * @param {ListGroupsRequest} req
     * @param {function(string, ListGroupsResponse):void} cb
     * @public
     */
    ListGroups(req, cb) {
        let resp = new ListGroupsResponse();
        this.request("ListGroups", req, resp, cb);
    }

    /**
     * 用户加入到用户组
     * @param {AddUserToGroupRequest} req
     * @param {function(string, AddUserToGroupResponse):void} cb
     * @public
     */
    AddUserToGroup(req, cb) {
        let resp = new AddUserToGroupResponse();
        this.request("AddUserToGroup", req, resp, cb);
    }

    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     * @param {AttachRolePolicyRequest} req
     * @param {function(string, AttachRolePolicyResponse):void} cb
     * @public
     */
    AttachRolePolicy(req, cb) {
        let resp = new AttachRolePolicyResponse();
        this.request("AttachRolePolicy", req, resp, cb);
    }

    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     * @param {UpdatePolicyRequest} req
     * @param {function(string, UpdatePolicyResponse):void} cb
     * @public
     */
    UpdatePolicy(req, cb) {
        let resp = new UpdatePolicyResponse();
        this.request("UpdatePolicy", req, resp, cb);
    }

    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     * @param {ListPolicyVersionsRequest} req
     * @param {function(string, ListPolicyVersionsResponse):void} cb
     * @public
     */
    ListPolicyVersions(req, cb) {
        let resp = new ListPolicyVersionsResponse();
        this.request("ListPolicyVersions", req, resp, cb);
    }

    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     * @param {GetRoleRequest} req
     * @param {function(string, GetRoleResponse):void} cb
     * @public
     */
    GetRole(req, cb) {
        let resp = new GetRoleResponse();
        this.request("GetRole", req, resp, cb);
    }

    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     * @param {UpdateRoleDescriptionRequest} req
     * @param {function(string, UpdateRoleDescriptionResponse):void} cb
     * @public
     */
    UpdateRoleDescription(req, cb) {
        let resp = new UpdateRoleDescriptionResponse();
        this.request("UpdateRoleDescription", req, resp, cb);
    }

    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     * @param {ListAttachedUserPoliciesRequest} req
     * @param {function(string, ListAttachedUserPoliciesResponse):void} cb
     * @public
     */
    ListAttachedUserPolicies(req, cb) {
        let resp = new ListAttachedUserPoliciesResponse();
        this.request("ListAttachedUserPolicies", req, resp, cb);
    }

    /**
     * 删除子用户
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     * @param {CreatePolicyVersionRequest} req
     * @param {function(string, CreatePolicyVersionResponse):void} cb
     * @public
     */
    CreatePolicyVersion(req, cb) {
        let resp = new CreatePolicyVersionResponse();
        this.request("CreatePolicyVersion", req, resp, cb);
    }

    /**
     * 获取协作者列表
     * @param {ListCollaboratorsRequest} req
     * @param {function(string, ListCollaboratorsResponse):void} cb
     * @public
     */
    ListCollaborators(req, cb) {
        let resp = new ListCollaboratorsResponse();
        this.request("ListCollaborators", req, resp, cb);
    }

    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     * @param {DetachGroupPolicyRequest} req
     * @param {function(string, DetachGroupPolicyResponse):void} cb
     * @public
     */
    DetachGroupPolicy(req, cb) {
        let resp = new DetachGroupPolicyResponse();
        this.request("DetachGroupPolicy", req, resp, cb);
    }

    /**
     * 从用户组删除用户
     * @param {RemoveUserFromGroupRequest} req
     * @param {function(string, RemoveUserFromGroupResponse):void} cb
     * @public
     */
    RemoveUserFromGroup(req, cb) {
        let resp = new RemoveUserFromGroupResponse();
        this.request("RemoveUserFromGroup", req, resp, cb);
    }

    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     * @param {ListPoliciesRequest} req
     * @param {function(string, ListPoliciesResponse):void} cb
     * @public
     */
    ListPolicies(req, cb) {
        let resp = new ListPoliciesResponse();
        this.request("ListPolicies", req, resp, cb);
    }

    /**
     * 查询用户组关联的用户列表
     * @param {ListUsersForGroupRequest} req
     * @param {function(string, ListUsersForGroupResponse):void} cb
     * @public
     */
    ListUsersForGroup(req, cb) {
        let resp = new ListUsersForGroupResponse();
        this.request("ListUsersForGroup", req, resp, cb);
    }

    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     * @param {AttachUserPolicyRequest} req
     * @param {function(string, AttachUserPolicyResponse):void} cb
     * @public
     */
    AttachUserPolicy(req, cb) {
        let resp = new AttachUserPolicyResponse();
        this.request("AttachUserPolicy", req, resp, cb);
    }

    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     * @param {ListEntitiesForPolicyRequest} req
     * @param {function(string, ListEntitiesForPolicyResponse):void} cb
     * @public
     */
    ListEntitiesForPolicy(req, cb) {
        let resp = new ListEntitiesForPolicyResponse();
        this.request("ListEntitiesForPolicy", req, resp, cb);
    }

    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     * @param {AttachGroupPolicyRequest} req
     * @param {function(string, AttachGroupPolicyResponse):void} cb
     * @public
     */
    AttachGroupPolicy(req, cb) {
        let resp = new AttachGroupPolicyResponse();
        this.request("AttachGroupPolicy", req, resp, cb);
    }

    /**
     * 更新用户组
     * @param {UpdateGroupRequest} req
     * @param {function(string, UpdateGroupResponse):void} cb
     * @public
     */
    UpdateGroup(req, cb) {
        let resp = new UpdateGroupResponse();
        this.request("UpdateGroup", req, resp, cb);
    }

    /**
     * 设置用户权限边界
     * @param {PutUserPermissionsBoundaryRequest} req
     * @param {function(string, PutUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    PutUserPermissionsBoundary(req, cb) {
        let resp = new PutUserPermissionsBoundaryResponse();
        this.request("PutUserPermissionsBoundary", req, resp, cb);
    }

    /**
     * 本接口（CreatePolicy）可用于创建策略。
     * @param {CreatePolicyRequest} req
     * @param {function(string, CreatePolicyResponse):void} cb
     * @public
     */
    CreatePolicy(req, cb) {
        let resp = new CreatePolicyResponse();
        this.request("CreatePolicy", req, resp, cb);
    }

    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     * @param {DetachUserPolicyRequest} req
     * @param {function(string, DetachUserPolicyResponse):void} cb
     * @public
     */
    DetachUserPolicy(req, cb) {
        let resp = new DetachUserPolicyResponse();
        this.request("DetachUserPolicy", req, resp, cb);
    }

    /**
     * 列出用户关联的用户组
     * @param {ListGroupsForUserRequest} req
     * @param {function(string, ListGroupsForUserResponse):void} cb
     * @public
     */
    ListGroupsForUser(req, cb) {
        let resp = new ListGroupsForUserResponse();
        this.request("ListGroupsForUser", req, resp, cb);
    }


}
module.exports = CamClient;
