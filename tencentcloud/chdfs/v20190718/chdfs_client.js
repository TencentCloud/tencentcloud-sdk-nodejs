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
const AccessRule = models.AccessRule;
const DescribeFileSystemResponse = models.DescribeFileSystemResponse;
const AccessGroup = models.AccessGroup;
const ModifyFileSystemResponse = models.ModifyFileSystemResponse;
const ModifyAccessGroupRequest = models.ModifyAccessGroupRequest;
const DescribeFileSystemsResponse = models.DescribeFileSystemsResponse;
const DescribeFileSystemRequest = models.DescribeFileSystemRequest;
const CreateMountPointRequest = models.CreateMountPointRequest;
const DeleteAccessGroupRequest = models.DeleteAccessGroupRequest;
const DeleteFileSystemRequest = models.DeleteFileSystemRequest;
const DescribeMountPointRequest = models.DescribeMountPointRequest;
const DescribeAccessGroupsRequest = models.DescribeAccessGroupsRequest;
const DeleteAccessGroupResponse = models.DeleteAccessGroupResponse;
const DeleteMountPointResponse = models.DeleteMountPointResponse;
const CreateMountPointResponse = models.CreateMountPointResponse;
const CreateFileSystemRequest = models.CreateFileSystemRequest;
const ModifyFileSystemRequest = models.ModifyFileSystemRequest;
const DescribeMountPointsResponse = models.DescribeMountPointsResponse;
const DeleteMountPointRequest = models.DeleteMountPointRequest;
const DeleteFileSystemResponse = models.DeleteFileSystemResponse;
const Filter = models.Filter;
const CreateAccessGroupResponse = models.CreateAccessGroupResponse;
const FileSystem = models.FileSystem;
const ModifyMountPointRequest = models.ModifyMountPointRequest;
const DescribeAccessGroupsResponse = models.DescribeAccessGroupsResponse;
const CreateAccessRulesResponse = models.CreateAccessRulesResponse;
const DeleteAccessRulesRequest = models.DeleteAccessRulesRequest;
const DescribeAccessRulesResponse = models.DescribeAccessRulesResponse;
const DescribeFileSystemsRequest = models.DescribeFileSystemsRequest;
const CreateAccessRulesRequest = models.CreateAccessRulesRequest;
const DeleteAccessRulesResponse = models.DeleteAccessRulesResponse;
const MountPoint = models.MountPoint;
const DescribeAccessRulesRequest = models.DescribeAccessRulesRequest;
const ModifyAccessRulesResponse = models.ModifyAccessRulesResponse;
const DescribeMountPointsRequest = models.DescribeMountPointsRequest;
const ModifyAccessGroupResponse = models.ModifyAccessGroupResponse;
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
        super("chdfs.tencentcloudapi.com", "2019-07-18", credential, region, profile);
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
     * 通过文件系统ID或者权限组ID查看挂载点列表。
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
     * 批量修改权限规则属性，需要指定权限规则ID。
     * @param {ModifyAccessRulesRequest} req
     * @param {function(string, ModifyAccessRulesResponse):void} cb
     * @public
     */
    ModifyAccessRules(req, cb) {
        let resp = new ModifyAccessRulesResponse();
        this.request("ModifyAccessRules", req, resp, cb);
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
     * 创建权限组。
     * @param {CreateAccessGroupRequest} req
     * @param {function(string, CreateAccessGroupResponse):void} cb
     * @public
     */
    CreateAccessGroup(req, cb) {
        let resp = new CreateAccessGroupResponse();
        this.request("CreateAccessGroup", req, resp, cb);
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
     * 删除挂载点。
     * @param {DeleteMountPointRequest} req
     * @param {function(string, DeleteMountPointResponse):void} cb
     * @public
     */
    DeleteMountPoint(req, cb) {
        let resp = new DeleteMountPointResponse();
        this.request("DeleteMountPoint", req, resp, cb);
    }


}
module.exports = ChdfsClient;
