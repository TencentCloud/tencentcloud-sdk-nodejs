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
const Group = models.Group;
const CreateDeviceGroupResponse = models.CreateDeviceGroupResponse;
const DeleteAclsRequest = models.DeleteAclsRequest;
const AddDeviceGroupMembersResponse = models.AddDeviceGroupMembersResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const DeleteUsersRequest = models.DeleteUsersRequest;
const DeleteDeviceGroupMembersResponse = models.DeleteDeviceGroupMembersResponse;
const AddUserGroupMembersResponse = models.AddUserGroupMembersResponse;
const DescribeDasbImageIdsResponse = models.DescribeDasbImageIdsResponse;
const CreateUserResponse = models.CreateUserResponse;
const ModifyUserResponse = models.ModifyUserResponse;
const AddUserGroupMembersRequest = models.AddUserGroupMembersRequest;
const DescribeUserGroupsRequest = models.DescribeUserGroupsRequest;
const DescribeUserGroupMembersResponse = models.DescribeUserGroupMembersResponse;
const CreateUserGroupResponse = models.CreateUserGroupResponse;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const DescribeUserGroupMembersRequest = models.DescribeUserGroupMembersRequest;
const CreateAclRequest = models.CreateAclRequest;
const DeleteUserGroupsRequest = models.DeleteUserGroupsRequest;
const User = models.User;
const ModifyAclResponse = models.ModifyAclResponse;
const Device = models.Device;
const DescribeAclsRequest = models.DescribeAclsRequest;
const DeleteDeviceGroupsRequest = models.DeleteDeviceGroupsRequest;
const DeleteUserGroupMembersRequest = models.DeleteUserGroupMembersRequest;
const DescribeDasbImageIdsRequest = models.DescribeDasbImageIdsRequest;
const DeleteDeviceGroupMembersRequest = models.DeleteDeviceGroupMembersRequest;
const Resource = models.Resource;
const DeleteUserGroupsResponse = models.DeleteUserGroupsResponse;
const BindDeviceResourceRequest = models.BindDeviceResourceRequest;
const CreateDeviceGroupRequest = models.CreateDeviceGroupRequest;
const CreateAclResponse = models.CreateAclResponse;
const DescribeAclsResponse = models.DescribeAclsResponse;
const DescribeUsersResponse = models.DescribeUsersResponse;
const Acl = models.Acl;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const DescribeDeviceGroupsRequest = models.DescribeDeviceGroupsRequest;
const ModifyAclRequest = models.ModifyAclRequest;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const BindDeviceResourceResponse = models.BindDeviceResourceResponse;
const CreateUserRequest = models.CreateUserRequest;
const DeleteUsersResponse = models.DeleteUsersResponse;
const DescribeDeviceGroupsResponse = models.DescribeDeviceGroupsResponse;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DeleteUserGroupMembersResponse = models.DeleteUserGroupMembersResponse;
const DescribeUserGroupsResponse = models.DescribeUserGroupsResponse;
const DescribeDeviceGroupMembersResponse = models.DescribeDeviceGroupMembersResponse;
const CmdTemplate = models.CmdTemplate;
const DeleteAclsResponse = models.DeleteAclsResponse;
const DescribeDeviceGroupMembersRequest = models.DescribeDeviceGroupMembersRequest;
const DeleteDeviceGroupsResponse = models.DeleteDeviceGroupsResponse;
const CreateUserGroupRequest = models.CreateUserGroupRequest;
const AddDeviceGroupMembersRequest = models.AddDeviceGroupMembersRequest;


/**
 * dasb client
 * @class
 */
class DasbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dasb.tencentcloudapi.com", "2019-10-18", credential, region, profile);
    }
    
    /**
     * 查询资产组成员列表
     * @param {DescribeDeviceGroupMembersRequest} req
     * @param {function(string, DescribeDeviceGroupMembersResponse):void} cb
     * @public
     */
    DescribeDeviceGroupMembers(req, cb) {
        let resp = new DescribeDeviceGroupMembersResponse();
        this.request("DescribeDeviceGroupMembers", req, resp, cb);
    }

    /**
     * 新建资产组
     * @param {CreateDeviceGroupRequest} req
     * @param {function(string, CreateDeviceGroupResponse):void} cb
     * @public
     */
    CreateDeviceGroup(req, cb) {
        let resp = new CreateDeviceGroupResponse();
        this.request("CreateDeviceGroup", req, resp, cb);
    }

    /**
     * 添加用户组成员
     * @param {AddUserGroupMembersRequest} req
     * @param {function(string, AddUserGroupMembersResponse):void} cb
     * @public
     */
    AddUserGroupMembers(req, cb) {
        let resp = new AddUserGroupMembersResponse();
        this.request("AddUserGroupMembers", req, resp, cb);
    }

    /**
     * 查询用户列表
     * @param {DescribeUsersRequest} req
     * @param {function(string, DescribeUsersResponse):void} cb
     * @public
     */
    DescribeUsers(req, cb) {
        let resp = new DescribeUsersResponse();
        this.request("DescribeUsers", req, resp, cb);
    }

    /**
     * 修改资产绑定的堡垒机服务
     * @param {BindDeviceResourceRequest} req
     * @param {function(string, BindDeviceResourceResponse):void} cb
     * @public
     */
    BindDeviceResource(req, cb) {
        let resp = new BindDeviceResourceResponse();
        this.request("BindDeviceResource", req, resp, cb);
    }

    /**
     * 删除访问权限
     * @param {DeleteAclsRequest} req
     * @param {function(string, DeleteAclsResponse):void} cb
     * @public
     */
    DeleteAcls(req, cb) {
        let resp = new DeleteAclsResponse();
        this.request("DeleteAcls", req, resp, cb);
    }

    /**
     * 查询用户组列表
     * @param {DescribeUserGroupsRequest} req
     * @param {function(string, DescribeUserGroupsResponse):void} cb
     * @public
     */
    DescribeUserGroups(req, cb) {
        let resp = new DescribeUserGroupsResponse();
        this.request("DescribeUserGroups", req, resp, cb);
    }

    /**
     * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
     * @param {DescribeResourcesRequest} req
     * @param {function(string, DescribeResourcesResponse):void} cb
     * @public
     */
    DescribeResources(req, cb) {
        let resp = new DescribeResourcesResponse();
        this.request("DescribeResources", req, resp, cb);
    }

    /**
     * 删除用户组成员
     * @param {DeleteUserGroupMembersRequest} req
     * @param {function(string, DeleteUserGroupMembersResponse):void} cb
     * @public
     */
    DeleteUserGroupMembers(req, cb) {
        let resp = new DeleteUserGroupMembersResponse();
        this.request("DeleteUserGroupMembers", req, resp, cb);
    }

    /**
     * 删除资产组
     * @param {DeleteDeviceGroupsRequest} req
     * @param {function(string, DeleteDeviceGroupsResponse):void} cb
     * @public
     */
    DeleteDeviceGroups(req, cb) {
        let resp = new DeleteDeviceGroupsResponse();
        this.request("DeleteDeviceGroups", req, resp, cb);
    }

    /**
     * 修改访问权限
     * @param {ModifyAclRequest} req
     * @param {function(string, ModifyAclResponse):void} cb
     * @public
     */
    ModifyAcl(req, cb) {
        let resp = new ModifyAclResponse();
        this.request("ModifyAcl", req, resp, cb);
    }

    /**
     * 删除用户
     * @param {DeleteUsersRequest} req
     * @param {function(string, DeleteUsersResponse):void} cb
     * @public
     */
    DeleteUsers(req, cb) {
        let resp = new DeleteUsersResponse();
        this.request("DeleteUsers", req, resp, cb);
    }

    /**
     * 新建访问权限
     * @param {CreateAclRequest} req
     * @param {function(string, CreateAclResponse):void} cb
     * @public
     */
    CreateAcl(req, cb) {
        let resp = new CreateAclResponse();
        this.request("CreateAcl", req, resp, cb);
    }

    /**
     * 获取镜像列表
     * @param {DescribeDasbImageIdsRequest} req
     * @param {function(string, DescribeDasbImageIdsResponse):void} cb
     * @public
     */
    DescribeDasbImageIds(req, cb) {
        let resp = new DescribeDasbImageIdsResponse();
        this.request("DescribeDasbImageIds", req, resp, cb);
    }

    /**
     * 查询访问权限列表
     * @param {DescribeAclsRequest} req
     * @param {function(string, DescribeAclsResponse):void} cb
     * @public
     */
    DescribeAcls(req, cb) {
        let resp = new DescribeAclsResponse();
        this.request("DescribeAcls", req, resp, cb);
    }

    /**
     * 删除资产组成员
     * @param {DeleteDeviceGroupMembersRequest} req
     * @param {function(string, DeleteDeviceGroupMembersResponse):void} cb
     * @public
     */
    DeleteDeviceGroupMembers(req, cb) {
        let resp = new DeleteDeviceGroupMembersResponse();
        this.request("DeleteDeviceGroupMembers", req, resp, cb);
    }

    /**
     * 删除用户组
     * @param {DeleteUserGroupsRequest} req
     * @param {function(string, DeleteUserGroupsResponse):void} cb
     * @public
     */
    DeleteUserGroups(req, cb) {
        let resp = new DeleteUserGroupsResponse();
        this.request("DeleteUserGroups", req, resp, cb);
    }

    /**
     * 修改用户信息
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * 查询资产组列表
     * @param {DescribeDeviceGroupsRequest} req
     * @param {function(string, DescribeDeviceGroupsResponse):void} cb
     * @public
     */
    DescribeDeviceGroups(req, cb) {
        let resp = new DescribeDeviceGroupsResponse();
        this.request("DescribeDeviceGroups", req, resp, cb);
    }

    /**
     * 查询资产列表
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }

    /**
     * 查询用户组成员列表
     * @param {DescribeUserGroupMembersRequest} req
     * @param {function(string, DescribeUserGroupMembersResponse):void} cb
     * @public
     */
    DescribeUserGroupMembers(req, cb) {
        let resp = new DescribeUserGroupMembersResponse();
        this.request("DescribeUserGroupMembers", req, resp, cb);
    }

    /**
     * 添加资产组成员
     * @param {AddDeviceGroupMembersRequest} req
     * @param {function(string, AddDeviceGroupMembersResponse):void} cb
     * @public
     */
    AddDeviceGroupMembers(req, cb) {
        let resp = new AddDeviceGroupMembersResponse();
        this.request("AddDeviceGroupMembers", req, resp, cb);
    }

    /**
     * 新建用户组
     * @param {CreateUserGroupRequest} req
     * @param {function(string, CreateUserGroupResponse):void} cb
     * @public
     */
    CreateUserGroup(req, cb) {
        let resp = new CreateUserGroupResponse();
        this.request("CreateUserGroup", req, resp, cb);
    }

    /**
     * 新建用户
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }


}
module.exports = DasbClient;
