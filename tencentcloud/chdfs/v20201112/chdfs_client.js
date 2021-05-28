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
const CreateFileSystemResponse = models.CreateFileSystemResponse;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeAccessRulesRequest = models.DescribeAccessRulesRequest;
const AccessRule = models.AccessRule;
const DescribeFileSystemResponse = models.DescribeFileSystemResponse;
const AccessGroup = models.AccessGroup;
const ModifyFileSystemResponse = models.ModifyFileSystemResponse;
const ModifyFileSystemRequest = models.ModifyFileSystemRequest;
const DescribeLifeCycleRulesRequest = models.DescribeLifeCycleRulesRequest;
const AssociateAccessGroupsRequest = models.AssociateAccessGroupsRequest;
const ModifyAccessGroupRequest = models.ModifyAccessGroupRequest;
const DescribeFileSystemsResponse = models.DescribeFileSystemsResponse;
const DescribeFileSystemRequest = models.DescribeFileSystemRequest;
const CreateMountPointRequest = models.CreateMountPointRequest;
const DeleteAccessGroupRequest = models.DeleteAccessGroupRequest;
const ModifyLifeCycleRulesRequest = models.ModifyLifeCycleRulesRequest;
const CreateRestoreTasksResponse = models.CreateRestoreTasksResponse;
const DeleteFileSystemRequest = models.DeleteFileSystemRequest;
const DescribeMountPointsRequest = models.DescribeMountPointsRequest;
const DescribeMountPointRequest = models.DescribeMountPointRequest;
const DescribeAccessGroupsRequest = models.DescribeAccessGroupsRequest;
const DeleteAccessGroupResponse = models.DeleteAccessGroupResponse;
const ModifyLifeCycleRulesResponse = models.ModifyLifeCycleRulesResponse;
const DeleteMountPointResponse = models.DeleteMountPointResponse;
const CreateMountPointResponse = models.CreateMountPointResponse;
const CreateFileSystemRequest = models.CreateFileSystemRequest;
const DisassociateAccessGroupsRequest = models.DisassociateAccessGroupsRequest;
const DescribeResourceTagsResponse = models.DescribeResourceTagsResponse;
const DescribeAccessGroupsResponse = models.DescribeAccessGroupsResponse;
const DeleteMountPointRequest = models.DeleteMountPointRequest;
const DeleteFileSystemResponse = models.DeleteFileSystemResponse;
const CreateLifeCycleRulesRequest = models.CreateLifeCycleRulesRequest;
const CreateAccessRulesResponse = models.CreateAccessRulesResponse;
const DeleteLifeCycleRulesRequest = models.DeleteLifeCycleRulesRequest;
const FileSystem = models.FileSystem;
const RestoreTask = models.RestoreTask;
const ModifyMountPointRequest = models.ModifyMountPointRequest;
const DescribeAccessRulesResponse = models.DescribeAccessRulesResponse;
const DeleteLifeCycleRulesResponse = models.DeleteLifeCycleRulesResponse;
const CreateRestoreTasksRequest = models.CreateRestoreTasksRequest;
const Transition = models.Transition;
const DescribeRestoreTasksResponse = models.DescribeRestoreTasksResponse;
const DescribeLifeCycleRulesResponse = models.DescribeLifeCycleRulesResponse;
const CreateAccessGroupResponse = models.CreateAccessGroupResponse;
const DisassociateAccessGroupsResponse = models.DisassociateAccessGroupsResponse;
const DeleteAccessRulesRequest = models.DeleteAccessRulesRequest;
const DeleteAccessRulesResponse = models.DeleteAccessRulesResponse;
const DescribeFileSystemsRequest = models.DescribeFileSystemsRequest;
const DescribeResourceTagsRequest = models.DescribeResourceTagsRequest;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const LifeCycleRule = models.LifeCycleRule;
const CreateAccessRulesRequest = models.CreateAccessRulesRequest;
const DescribeAccessGroupResponse = models.DescribeAccessGroupResponse;
const MountPoint = models.MountPoint;
const DescribeMountPointsResponse = models.DescribeMountPointsResponse;
const DescribeRestoreTasksRequest = models.DescribeRestoreTasksRequest;
const DescribeAccessGroupRequest = models.DescribeAccessGroupRequest;
const AssociateAccessGroupsResponse = models.AssociateAccessGroupsResponse;
const ModifyAccessRulesResponse = models.ModifyAccessRulesResponse;
const CreateLifeCycleRulesResponse = models.CreateLifeCycleRulesResponse;
const ModifyAccessGroupResponse = models.ModifyAccessGroupResponse;
const Tag = models.Tag;
const ModifyMountPointResponse = models.ModifyMountPointResponse;
const ModifyAccessRulesRequest = models.ModifyAccessRulesRequest;
const CreateAccessGroupRequest = models.CreateAccessGroupRequest;
const DescribeMountPointResponse = models.DescribeMountPointResponse;


/**
 * chdfs client
 * @class
 */
class ChdfsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("chdfs.tencentcloudapi.com", "2020-11-12", credential, region, profile);
    }
    
    /**
     * 批量创建回热任务，回热任务ID、状态和创建时间无需填写。
     * @param {CreateRestoreTasksRequest} req
     * @param {function(string, CreateRestoreTasksResponse):void} cb
     * @public
     */
    CreateRestoreTasks(req, cb) {
        let resp = new CreateRestoreTasksResponse();
        this.request("CreateRestoreTasks", req, resp, cb);
    }

    /**
     * 批量创建生命周期规则，生命周期规则ID和创建时间无需填写。
     * @param {CreateLifeCycleRulesRequest} req
     * @param {function(string, CreateLifeCycleRulesResponse):void} cb
     * @public
     */
    CreateLifeCycleRules(req, cb) {
        let resp = new CreateLifeCycleRulesResponse();
        this.request("CreateLifeCycleRules", req, resp, cb);
    }

    /**
     * 修改挂载点属性。
     * @param {ModifyMountPointRequest} req
     * @param {function(string, ModifyMountPointResponse):void} cb
     * @public
     */
    ModifyMountPoint(req, cb) {
        let resp = new ModifyMountPointResponse();
        this.request("ModifyMountPoint", req, resp, cb);
    }

    /**
     * 批量修改权限规则属性，需要指定权限规则ID，支持修改权限规则地址、访问模式和优先级。
     * @param {ModifyAccessRulesRequest} req
     * @param {function(string, ModifyAccessRulesResponse):void} cb
     * @public
     */
    ModifyAccessRules(req, cb) {
        let resp = new ModifyAccessRulesResponse();
        this.request("ModifyAccessRules", req, resp, cb);
    }

    /**
     * 通过权限组ID查看权限规则列表。
     * @param {DescribeAccessRulesRequest} req
     * @param {function(string, DescribeAccessRulesResponse):void} cb
     * @public
     */
    DescribeAccessRules(req, cb) {
        let resp = new DescribeAccessRulesResponse();
        this.request("DescribeAccessRules", req, resp, cb);
    }

    /**
     * 删除挂载点。
     * @param {DeleteMountPointRequest} req
     * @param {function(string, DeleteMountPointResponse):void} cb
     * @public
     */
    DeleteMountPoint(req, cb) {
        let resp = new DeleteMountPointResponse();
        this.request("DeleteMountPoint", req, resp, cb);
    }

    /**
     * 查看挂载点详细信息。
     * @param {DescribeMountPointRequest} req
     * @param {function(string, DescribeMountPointResponse):void} cb
     * @public
     */
    DescribeMountPoint(req, cb) {
        let resp = new DescribeMountPointResponse();
        this.request("DescribeMountPoint", req, resp, cb);
    }

    /**
     * 批量删除权限规则。
     * @param {DeleteAccessRulesRequest} req
     * @param {function(string, DeleteAccessRulesResponse):void} cb
     * @public
     */
    DeleteAccessRules(req, cb) {
        let resp = new DeleteAccessRulesResponse();
        this.request("DeleteAccessRules", req, resp, cb);
    }

    /**
     * 通过文件系统ID查看资源标签列表。
     * @param {DescribeResourceTagsRequest} req
     * @param {function(string, DescribeResourceTagsResponse):void} cb
     * @public
     */
    DescribeResourceTags(req, cb) {
        let resp = new DescribeResourceTagsResponse();
        this.request("DescribeResourceTags", req, resp, cb);
    }

    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     * @param {CreateMountPointRequest} req
     * @param {function(string, CreateMountPointResponse):void} cb
     * @public
     */
    CreateMountPoint(req, cb) {
        let resp = new CreateMountPointResponse();
        this.request("CreateMountPoint", req, resp, cb);
    }

    /**
     * 批量修改生命周期规则属性，需要指定生命周期规则ID，支持修改生命周期规则名称、路径、转换列表和状态。
     * @param {ModifyLifeCycleRulesRequest} req
     * @param {function(string, ModifyLifeCycleRulesResponse):void} cb
     * @public
     */
    ModifyLifeCycleRules(req, cb) {
        let resp = new ModifyLifeCycleRulesResponse();
        this.request("ModifyLifeCycleRules", req, resp, cb);
    }

    /**
     * 查看权限组列表。
     * @param {DescribeAccessGroupsRequest} req
     * @param {function(string, DescribeAccessGroupsResponse):void} cb
     * @public
     */
    DescribeAccessGroups(req, cb) {
        let resp = new DescribeAccessGroupsResponse();
        this.request("DescribeAccessGroups", req, resp, cb);
    }

    /**
     * 给挂载点解绑多个权限组。
     * @param {DisassociateAccessGroupsRequest} req
     * @param {function(string, DisassociateAccessGroupsResponse):void} cb
     * @public
     */
    DisassociateAccessGroups(req, cb) {
        let resp = new DisassociateAccessGroupsResponse();
        this.request("DisassociateAccessGroups", req, resp, cb);
    }

    /**
     * 删除文件系统，不允许删除非空文件系统。
     * @param {DeleteFileSystemRequest} req
     * @param {function(string, DeleteFileSystemResponse):void} cb
     * @public
     */
    DeleteFileSystem(req, cb) {
        let resp = new DeleteFileSystemResponse();
        this.request("DeleteFileSystem", req, resp, cb);
    }

    /**
     * 查看文件系统详细信息。
     * @param {DescribeFileSystemRequest} req
     * @param {function(string, DescribeFileSystemResponse):void} cb
     * @public
     */
    DescribeFileSystem(req, cb) {
        let resp = new DescribeFileSystemResponse();
        this.request("DescribeFileSystem", req, resp, cb);
    }

    /**
     * 创建文件系统（异步）。
     * @param {CreateFileSystemRequest} req
     * @param {function(string, CreateFileSystemResponse):void} cb
     * @public
     */
    CreateFileSystem(req, cb) {
        let resp = new CreateFileSystemResponse();
        this.request("CreateFileSystem", req, resp, cb);
    }

    /**
     * 查看权限组详细信息。
     * @param {DescribeAccessGroupRequest} req
     * @param {function(string, DescribeAccessGroupResponse):void} cb
     * @public
     */
    DescribeAccessGroup(req, cb) {
        let resp = new DescribeAccessGroupResponse();
        this.request("DescribeAccessGroup", req, resp, cb);
    }

    /**
     * 批量删除生命周期规则。
     * @param {DeleteLifeCycleRulesRequest} req
     * @param {function(string, DeleteLifeCycleRulesResponse):void} cb
     * @public
     */
    DeleteLifeCycleRules(req, cb) {
        let resp = new DeleteLifeCycleRulesResponse();
        this.request("DeleteLifeCycleRules", req, resp, cb);
    }

    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     * @param {CreateAccessRulesRequest} req
     * @param {function(string, CreateAccessRulesResponse):void} cb
     * @public
     */
    CreateAccessRules(req, cb) {
        let resp = new CreateAccessRulesResponse();
        this.request("CreateAccessRules", req, resp, cb);
    }

    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     * @param {ModifyFileSystemRequest} req
     * @param {function(string, ModifyFileSystemResponse):void} cb
     * @public
     */
    ModifyFileSystem(req, cb) {
        let resp = new ModifyFileSystemResponse();
        this.request("ModifyFileSystem", req, resp, cb);
    }

    /**
     * 给挂载点绑定多个权限组。
     * @param {AssociateAccessGroupsRequest} req
     * @param {function(string, AssociateAccessGroupsResponse):void} cb
     * @public
     */
    AssociateAccessGroups(req, cb) {
        let resp = new AssociateAccessGroupsResponse();
        this.request("AssociateAccessGroups", req, resp, cb);
    }

    /**
     * 查看文件系统列表。
     * @param {DescribeFileSystemsRequest} req
     * @param {function(string, DescribeFileSystemsResponse):void} cb
     * @public
     */
    DescribeFileSystems(req, cb) {
        let resp = new DescribeFileSystemsResponse();
        this.request("DescribeFileSystems", req, resp, cb);
    }

    /**
     * 查看挂载点列表。
     * @param {DescribeMountPointsRequest} req
     * @param {function(string, DescribeMountPointsResponse):void} cb
     * @public
     */
    DescribeMountPoints(req, cb) {
        let resp = new DescribeMountPointsResponse();
        this.request("DescribeMountPoints", req, resp, cb);
    }

    /**
     * 修改权限组属性。
     * @param {ModifyAccessGroupRequest} req
     * @param {function(string, ModifyAccessGroupResponse):void} cb
     * @public
     */
    ModifyAccessGroup(req, cb) {
        let resp = new ModifyAccessGroupResponse();
        this.request("ModifyAccessGroup", req, resp, cb);
    }

    /**
     * 通过文件系统ID查看回热任务列表。
     * @param {DescribeRestoreTasksRequest} req
     * @param {function(string, DescribeRestoreTasksResponse):void} cb
     * @public
     */
    DescribeRestoreTasks(req, cb) {
        let resp = new DescribeRestoreTasksResponse();
        this.request("DescribeRestoreTasks", req, resp, cb);
    }

    /**
     * 修改资源标签列表，全量覆盖。
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        let resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }

    /**
     * 通过文件系统ID查看生命周期规则列表。
     * @param {DescribeLifeCycleRulesRequest} req
     * @param {function(string, DescribeLifeCycleRulesResponse):void} cb
     * @public
     */
    DescribeLifeCycleRules(req, cb) {
        let resp = new DescribeLifeCycleRulesResponse();
        this.request("DescribeLifeCycleRules", req, resp, cb);
    }

    /**
     * 删除权限组。
     * @param {DeleteAccessGroupRequest} req
     * @param {function(string, DeleteAccessGroupResponse):void} cb
     * @public
     */
    DeleteAccessGroup(req, cb) {
        let resp = new DeleteAccessGroupResponse();
        this.request("DeleteAccessGroup", req, resp, cb);
    }

    /**
     * 创建权限组。
     * @param {CreateAccessGroupRequest} req
     * @param {function(string, CreateAccessGroupResponse):void} cb
     * @public
     */
    CreateAccessGroup(req, cb) {
        let resp = new CreateAccessGroupResponse();
        this.request("CreateAccessGroup", req, resp, cb);
    }


}
module.exports = ChdfsClient;
