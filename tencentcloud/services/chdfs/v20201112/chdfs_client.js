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
 * chdfs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("chdfs.tencentcloudapi.com", "2020-11-12", clientConfig);
    }
    /**
     * 批量创建回热任务，回热任务ID、状态和创建时间无需填写。
     */
    async CreateRestoreTasks(req, cb) {
        return this.request("CreateRestoreTasks", req, cb);
    }
    /**
     * 批量创建生命周期规则，生命周期规则ID和创建时间无需填写。
     */
    async CreateLifeCycleRules(req, cb) {
        return this.request("CreateLifeCycleRules", req, cb);
    }
    /**
     * 修改挂载点属性。
     */
    async ModifyMountPoint(req, cb) {
        return this.request("ModifyMountPoint", req, cb);
    }
    /**
     * 批量修改权限规则属性，需要指定权限规则ID，支持修改权限规则地址、访问模式和优先级。
     */
    async ModifyAccessRules(req, cb) {
        return this.request("ModifyAccessRules", req, cb);
    }
    /**
     * 通过权限组ID查看权限规则列表。
     */
    async DescribeAccessRules(req, cb) {
        return this.request("DescribeAccessRules", req, cb);
    }
    /**
     * 删除挂载点。
     */
    async DeleteMountPoint(req, cb) {
        return this.request("DeleteMountPoint", req, cb);
    }
    /**
     * 查看挂载点详细信息。
     */
    async DescribeMountPoint(req, cb) {
        return this.request("DescribeMountPoint", req, cb);
    }
    /**
     * 批量删除权限规则。
     */
    async DeleteAccessRules(req, cb) {
        return this.request("DeleteAccessRules", req, cb);
    }
    /**
     * 通过文件系统ID查看资源标签列表。
     */
    async DescribeResourceTags(req, cb) {
        return this.request("DescribeResourceTags", req, cb);
    }
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     */
    async CreateMountPoint(req, cb) {
        return this.request("CreateMountPoint", req, cb);
    }
    /**
     * 批量修改生命周期规则属性，需要指定生命周期规则ID，支持修改生命周期规则名称、路径、转换列表和状态。
     */
    async ModifyLifeCycleRules(req, cb) {
        return this.request("ModifyLifeCycleRules", req, cb);
    }
    /**
     * 查看权限组列表。
     */
    async DescribeAccessGroups(req, cb) {
        return this.request("DescribeAccessGroups", req, cb);
    }
    /**
     * 给挂载点解绑多个权限组。
     */
    async DisassociateAccessGroups(req, cb) {
        return this.request("DisassociateAccessGroups", req, cb);
    }
    /**
     * 删除文件系统，不允许删除非空文件系统。
     */
    async DeleteFileSystem(req, cb) {
        return this.request("DeleteFileSystem", req, cb);
    }
    /**
     * 查看文件系统详细信息。
     */
    async DescribeFileSystem(req, cb) {
        return this.request("DescribeFileSystem", req, cb);
    }
    /**
     * 创建文件系统（异步）。
     */
    async CreateFileSystem(req, cb) {
        return this.request("CreateFileSystem", req, cb);
    }
    /**
     * 查看权限组详细信息。
     */
    async DescribeAccessGroup(req, cb) {
        return this.request("DescribeAccessGroup", req, cb);
    }
    /**
     * 批量删除生命周期规则。
     */
    async DeleteLifeCycleRules(req, cb) {
        return this.request("DeleteLifeCycleRules", req, cb);
    }
    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     */
    async CreateAccessRules(req, cb) {
        return this.request("CreateAccessRules", req, cb);
    }
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     */
    async ModifyFileSystem(req, cb) {
        return this.request("ModifyFileSystem", req, cb);
    }
    /**
     * 给挂载点绑定多个权限组。
     */
    async AssociateAccessGroups(req, cb) {
        return this.request("AssociateAccessGroups", req, cb);
    }
    /**
     * 查看文件系统列表。
     */
    async DescribeFileSystems(req, cb) {
        return this.request("DescribeFileSystems", req, cb);
    }
    /**
     * 查看挂载点列表。
     */
    async DescribeMountPoints(req, cb) {
        return this.request("DescribeMountPoints", req, cb);
    }
    /**
     * 修改权限组属性。
     */
    async ModifyAccessGroup(req, cb) {
        return this.request("ModifyAccessGroup", req, cb);
    }
    /**
     * 通过文件系统ID查看回热任务列表。
     */
    async DescribeRestoreTasks(req, cb) {
        return this.request("DescribeRestoreTasks", req, cb);
    }
    /**
     * 修改资源标签列表，全量覆盖。
     */
    async ModifyResourceTags(req, cb) {
        return this.request("ModifyResourceTags", req, cb);
    }
    /**
     * 通过文件系统ID查看生命周期规则列表。
     */
    async DescribeLifeCycleRules(req, cb) {
        return this.request("DescribeLifeCycleRules", req, cb);
    }
    /**
     * 删除权限组。
     */
    async DeleteAccessGroup(req, cb) {
        return this.request("DeleteAccessGroup", req, cb);
    }
    /**
     * 创建权限组。
     */
    async CreateAccessGroup(req, cb) {
        return this.request("CreateAccessGroup", req, cb);
    }
}
exports.Client = Client;
