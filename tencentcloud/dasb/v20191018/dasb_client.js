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
const ResetDeviceAccountPasswordResponse = models.ResetDeviceAccountPasswordResponse;
const BindDeviceAccountPasswordRequest = models.BindDeviceAccountPasswordRequest;
const DeleteAclsRequest = models.DeleteAclsRequest;
const DeleteDeviceGroupsResponse = models.DeleteDeviceGroupsResponse;
const DescribeDeviceGroupsResponse = models.DescribeDeviceGroupsResponse;
const DeleteCmdTemplatesResponse = models.DeleteCmdTemplatesResponse;
const DeleteDevicesResponse = models.DeleteDevicesResponse;
const Department = models.Department;
const DeviceAccount = models.DeviceAccount;
const BindDeviceAccountPasswordResponse = models.BindDeviceAccountPasswordResponse;
const ResetDeviceAccountPasswordRequest = models.ResetDeviceAccountPasswordRequest;
const AddUserGroupMembersRequest = models.AddUserGroupMembersRequest;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const ResetUserResponse = models.ResetUserResponse;
const DeleteUserGroupMembersRequest = models.DeleteUserGroupMembersRequest;
const DeleteUserGroupsResponse = models.DeleteUserGroupsResponse;
const ModifyDeviceRequest = models.ModifyDeviceRequest;
const ImportExternalDeviceRequest = models.ImportExternalDeviceRequest;
const BindDeviceResourceResponse = models.BindDeviceResourceResponse;
const DeleteUserGroupMembersResponse = models.DeleteUserGroupMembersResponse;
const CmdTemplate = models.CmdTemplate;
const CreateUserGroupRequest = models.CreateUserGroupRequest;
const BindDeviceAccountPrivateKeyResponse = models.BindDeviceAccountPrivateKeyResponse;
const CreateDeviceGroupResponse = models.CreateDeviceGroupResponse;
const DescribeUserGroupMembersRequest = models.DescribeUserGroupMembersRequest;
const CreateUserResponse = models.CreateUserResponse;
const DescribeAssetSyncStatusResponse = models.DescribeAssetSyncStatusResponse;
const CreateAclRequest = models.CreateAclRequest;
const DeleteDeviceGroupMembersRequest = models.DeleteDeviceGroupMembersRequest;
const CreateDeviceGroupRequest = models.CreateDeviceGroupRequest;
const CreateAclResponse = models.CreateAclResponse;
const DescribeAclsResponse = models.DescribeAclsResponse;
const CreateCmdTemplateResponse = models.CreateCmdTemplateResponse;
const ModifyAclRequest = models.ModifyAclRequest;
const TagFilter = models.TagFilter;
const DeleteUsersResponse = models.DeleteUsersResponse;
const AssetSyncStatus = models.AssetSyncStatus;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DeployResourceRequest = models.DeployResourceRequest;
const CreateCmdTemplateRequest = models.CreateCmdTemplateRequest;
const ResetDeviceAccountPrivateKeyRequest = models.ResetDeviceAccountPrivateKeyRequest;
const CreateAssetSyncJobResponse = models.CreateAssetSyncJobResponse;
const BindDeviceAccountPrivateKeyRequest = models.BindDeviceAccountPrivateKeyRequest;
const CreateAssetSyncJobRequest = models.CreateAssetSyncJobRequest;
const Group = models.Group;
const DescribeAssetSyncStatusRequest = models.DescribeAssetSyncStatusRequest;
const ResetDeviceAccountPrivateKeyResponse = models.ResetDeviceAccountPrivateKeyResponse;
const DeleteUsersRequest = models.DeleteUsersRequest;
const DeleteDeviceAccountsRequest = models.DeleteDeviceAccountsRequest;
const DeleteDeviceGroupMembersResponse = models.DeleteDeviceGroupMembersResponse;
const ModifyDeviceGroupResponse = models.ModifyDeviceGroupResponse;
const DescribeUserGroupMembersResponse = models.DescribeUserGroupMembersResponse;
const ImportExternalDeviceResponse = models.ImportExternalDeviceResponse;
const DeleteUserGroupsRequest = models.DeleteUserGroupsRequest;
const User = models.User;
const ResetUserRequest = models.ResetUserRequest;
const Device = models.Device;
const DescribeDasbImageIdsRequest = models.DescribeDasbImageIdsRequest;
const CreateDeviceAccountResponse = models.CreateDeviceAccountResponse;
const ModifyDeviceGroupRequest = models.ModifyDeviceGroupRequest;
const Filter = models.Filter;
const DescribeUsersResponse = models.DescribeUsersResponse;
const DeployResourceResponse = models.DeployResourceResponse;
const CreateUserRequest = models.CreateUserRequest;
const DescribeUserGroupsResponse = models.DescribeUserGroupsResponse;
const ModifyUserResponse = models.ModifyUserResponse;
const DescribeCmdTemplatesResponse = models.DescribeCmdTemplatesResponse;
const CreateDeviceAccountRequest = models.CreateDeviceAccountRequest;
const AddDeviceGroupMembersResponse = models.AddDeviceGroupMembersResponse;
const DeleteCmdTemplatesRequest = models.DeleteCmdTemplatesRequest;
const ModifyDeviceResponse = models.ModifyDeviceResponse;
const AddUserGroupMembersResponse = models.AddUserGroupMembersResponse;
const DescribeDeviceAccountsRequest = models.DescribeDeviceAccountsRequest;
const DescribeDasbImageIdsResponse = models.DescribeDasbImageIdsResponse;
const DescribeCmdTemplatesRequest = models.DescribeCmdTemplatesRequest;
const DeleteAclsResponse = models.DeleteAclsResponse;
const CreateUserGroupResponse = models.CreateUserGroupResponse;
const DeleteDevicesRequest = models.DeleteDevicesRequest;
const DescribeDeviceAccountsResponse = models.DescribeDeviceAccountsResponse;
const DescribeDeviceGroupMembersRequest = models.DescribeDeviceGroupMembersRequest;
const ModifyAclResponse = models.ModifyAclResponse;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const DeleteDeviceGroupsRequest = models.DeleteDeviceGroupsRequest;
const DescribeDeviceGroupMembersResponse = models.DescribeDeviceGroupMembersResponse;
const Resource = models.Resource;
const BindDeviceResourceRequest = models.BindDeviceResourceRequest;
const Acl = models.Acl;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const DescribeDeviceGroupsRequest = models.DescribeDeviceGroupsRequest;
const ExternalDevice = models.ExternalDevice;
const DescribeUserGroupsRequest = models.DescribeUserGroupsRequest;
const ModifyUserRequest = models.ModifyUserRequest;
const DescribeAclsRequest = models.DescribeAclsRequest;
const AddDeviceGroupMembersRequest = models.AddDeviceGroupMembersRequest;
const DeleteDeviceAccountsResponse = models.DeleteDeviceAccountsResponse;


/**
 * dasb client
 * @class
 */
class DasbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dasb.tencentcloudapi.com", "2019-10-18", credential, region, profile);
    }
    
    /**
     * 修改资产组
     * @param {ModifyDeviceGroupRequest} req
     * @param {function(string, ModifyDeviceGroupResponse):void} cb
     * @public
     */
    ModifyDeviceGroup(req, cb) {
        let resp = new ModifyDeviceGroupResponse();
        this.request("ModifyDeviceGroup", req, resp, cb);
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
     * 查询主机账号列表
     * @param {DescribeDeviceAccountsRequest} req
     * @param {function(string, DescribeDeviceAccountsResponse):void} cb
     * @public
     */
    DescribeDeviceAccounts(req, cb) {
        let resp = new DescribeDeviceAccountsResponse();
        this.request("DescribeDeviceAccounts", req, resp, cb);
    }

    /**
     * 重置用户
     * @param {ResetUserRequest} req
     * @param {function(string, ResetUserResponse):void} cb
     * @public
     */
    ResetUser(req, cb) {
        let resp = new ResetUserResponse();
        this.request("ResetUser", req, resp, cb);
    }

    /**
     * 删除主机
     * @param {DeleteDevicesRequest} req
     * @param {function(string, DeleteDevicesResponse):void} cb
     * @public
     */
    DeleteDevices(req, cb) {
        let resp = new DeleteDevicesResponse();
        this.request("DeleteDevices", req, resp, cb);
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
     * 开通服务，初始化资源，只针对新购资源
     * @param {DeployResourceRequest} req
     * @param {function(string, DeployResourceResponse):void} cb
     * @public
     */
    DeployResource(req, cb) {
        let resp = new DeployResourceResponse();
        this.request("DeployResource", req, resp, cb);
    }

    /**
     * 修改资产信息
     * @param {ModifyDeviceRequest} req
     * @param {function(string, ModifyDeviceResponse):void} cb
     * @public
     */
    ModifyDevice(req, cb) {
        let resp = new ModifyDeviceResponse();
        this.request("ModifyDevice", req, resp, cb);
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
     * 绑定主机账号密码
     * @param {BindDeviceAccountPasswordRequest} req
     * @param {function(string, BindDeviceAccountPasswordResponse):void} cb
     * @public
     */
    BindDeviceAccountPassword(req, cb) {
        let resp = new BindDeviceAccountPasswordResponse();
        this.request("BindDeviceAccountPassword", req, resp, cb);
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
     * 创建手工资产同步任务
     * @param {CreateAssetSyncJobRequest} req
     * @param {function(string, CreateAssetSyncJobResponse):void} cb
     * @public
     */
    CreateAssetSyncJob(req, cb) {
        let resp = new CreateAssetSyncJobResponse();
        this.request("CreateAssetSyncJob", req, resp, cb);
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
     * 清除设备账号绑定密码
     * @param {ResetDeviceAccountPasswordRequest} req
     * @param {function(string, ResetDeviceAccountPasswordResponse):void} cb
     * @public
     */
    ResetDeviceAccountPassword(req, cb) {
        let resp = new ResetDeviceAccountPasswordResponse();
        this.request("ResetDeviceAccountPassword", req, resp, cb);
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
     * 新建主机账号
     * @param {CreateDeviceAccountRequest} req
     * @param {function(string, CreateDeviceAccountResponse):void} cb
     * @public
     */
    CreateDeviceAccount(req, cb) {
        let resp = new CreateDeviceAccountResponse();
        this.request("CreateDeviceAccount", req, resp, cb);
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
     * 删除主机账号
     * @param {DeleteDeviceAccountsRequest} req
     * @param {function(string, DeleteDeviceAccountsResponse):void} cb
     * @public
     */
    DeleteDeviceAccounts(req, cb) {
        let resp = new DeleteDeviceAccountsResponse();
        this.request("DeleteDeviceAccounts", req, resp, cb);
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
     * 新建高危命令模板
     * @param {CreateCmdTemplateRequest} req
     * @param {function(string, CreateCmdTemplateResponse):void} cb
     * @public
     */
    CreateCmdTemplate(req, cb) {
        let resp = new CreateCmdTemplateResponse();
        this.request("CreateCmdTemplate", req, resp, cb);
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
     * 查询命令模板列表
     * @param {DescribeCmdTemplatesRequest} req
     * @param {function(string, DescribeCmdTemplatesResponse):void} cb
     * @public
     */
    DescribeCmdTemplates(req, cb) {
        let resp = new DescribeCmdTemplatesResponse();
        this.request("DescribeCmdTemplates", req, resp, cb);
    }

    /**
     * 删除高危命令模板
     * @param {DeleteCmdTemplatesRequest} req
     * @param {function(string, DeleteCmdTemplatesResponse):void} cb
     * @public
     */
    DeleteCmdTemplates(req, cb) {
        let resp = new DeleteCmdTemplatesResponse();
        this.request("DeleteCmdTemplates", req, resp, cb);
    }

    /**
     * 查询资产同步状态
     * @param {DescribeAssetSyncStatusRequest} req
     * @param {function(string, DescribeAssetSyncStatusResponse):void} cb
     * @public
     */
    DescribeAssetSyncStatus(req, cb) {
        let resp = new DescribeAssetSyncStatusResponse();
        this.request("DescribeAssetSyncStatus", req, resp, cb);
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
     * 导入外部资产信息
     * @param {ImportExternalDeviceRequest} req
     * @param {function(string, ImportExternalDeviceResponse):void} cb
     * @public
     */
    ImportExternalDevice(req, cb) {
        let resp = new ImportExternalDeviceResponse();
        this.request("ImportExternalDevice", req, resp, cb);
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
     * 清除设备账号绑定的密钥
     * @param {ResetDeviceAccountPrivateKeyRequest} req
     * @param {function(string, ResetDeviceAccountPrivateKeyResponse):void} cb
     * @public
     */
    ResetDeviceAccountPrivateKey(req, cb) {
        let resp = new ResetDeviceAccountPrivateKeyResponse();
        this.request("ResetDeviceAccountPrivateKey", req, resp, cb);
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

    /**
     * 绑定主机账号私钥
     * @param {BindDeviceAccountPrivateKeyRequest} req
     * @param {function(string, BindDeviceAccountPrivateKeyResponse):void} cb
     * @public
     */
    BindDeviceAccountPrivateKey(req, cb) {
        let resp = new BindDeviceAccountPrivateKeyResponse();
        this.request("BindDeviceAccountPrivateKey", req, resp, cb);
    }


}
module.exports = DasbClient;
