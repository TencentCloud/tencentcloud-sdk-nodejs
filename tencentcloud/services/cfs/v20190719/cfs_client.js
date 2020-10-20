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
 * cfs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cfs.tencentcloudapi.com", "2019-07-19", clientConfig);
    }
    /**
     * 用于添加新文件系统
     */
    async CreateCfsFileSystem(req, cb) {
        return this.request("CreateCfsFileSystem", req, cb);
    }
    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     */
    async DescribeCfsPGroups(req, cb) {
        return this.request("DescribeCfsPGroups", req, cb);
    }
    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     */
    async DescribeCfsRules(req, cb) {
        return this.request("DescribeCfsRules", req, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     */
    async UpdateCfsFileSystemPGroup(req, cb) {
        return this.request("UpdateCfsFileSystemPGroup", req, cb);
    }
    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     */
    async DescribeAvailableZoneInfo(req, cb) {
        return this.request("DescribeAvailableZoneInfo", req, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     */
    async UpdateCfsFileSystemName(req, cb) {
        return this.request("UpdateCfsFileSystemName", req, cb);
    }
    /**
     * 用于删除文件系统
     */
    async DeleteCfsFileSystem(req, cb) {
        return this.request("DeleteCfsFileSystem", req, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     */
    async UpdateCfsFileSystemSizeLimit(req, cb) {
        return this.request("UpdateCfsFileSystemSizeLimit", req, cb);
    }
    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     */
    async CreateCfsPGroup(req, cb) {
        return this.request("CreateCfsPGroup", req, cb);
    }
    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     */
    async UpdateCfsRule(req, cb) {
        return this.request("UpdateCfsRule", req, cb);
    }
    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     */
    async DescribeCfsServiceStatus(req, cb) {
        return this.request("DescribeCfsServiceStatus", req, cb);
    }
    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     */
    async DescribeCfsFileSystems(req, cb) {
        return this.request("DescribeCfsFileSystems", req, cb);
    }
    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     */
    async SignUpCfsService(req, cb) {
        return this.request("SignUpCfsService", req, cb);
    }
    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     */
    async CreateCfsRule(req, cb) {
        return this.request("CreateCfsRule", req, cb);
    }
    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     */
    async DeleteCfsPGroup(req, cb) {
        return this.request("DeleteCfsPGroup", req, cb);
    }
    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     */
    async DescribeMountTargets(req, cb) {
        return this.request("DescribeMountTargets", req, cb);
    }
    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     */
    async UpdateCfsPGroup(req, cb) {
        return this.request("UpdateCfsPGroup", req, cb);
    }
    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     */
    async DeleteCfsRule(req, cb) {
        return this.request("DeleteCfsRule", req, cb);
    }
    /**
     * 查询挂载该文件系统的客户端。此功能需要客户端安装CFS监控插件。
     */
    async DescribeCfsFileSystemClients(req, cb) {
        return this.request("DescribeCfsFileSystemClients", req, cb);
    }
    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     */
    async DeleteMountTarget(req, cb) {
        return this.request("DeleteMountTarget", req, cb);
    }
}
exports.Client = Client;
