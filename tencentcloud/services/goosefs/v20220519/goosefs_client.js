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
 * goosefs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("goosefs.tencentcloudapi.com", "2022-05-19", clientConfig);
    }
    /**
     * 查询GooseFS集群角色
     */
    async DescribeClusterRoles(req, cb) {
        return this.request("DescribeClusterRoles", req, cb);
    }
    /**
     * 删除文件系统
     */
    async DeleteFileSystem(req, cb) {
        return this.request("DeleteFileSystem", req, cb);
    }
    /**
     * 为客户端节点添加跨vpc或子网访问能力
     */
    async AddCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("AddCrossVpcSubnetSupportForClientNode", req, cb);
    }
    /**
     * 批量添加客户端节点
     */
    async BatchAddClientNodes(req, cb) {
        return this.request("BatchAddClientNodes", req, cb);
    }
    /**
     * 解绑文件系统与Bucket的映射
     */
    async DetachFileSystemBucket(req, cb) {
        return this.request("DetachFileSystemBucket", req, cb);
    }
    /**
     * 列出所有的文件系统
     */
    async DescribeFileSystems(req, cb) {
        return this.request("DescribeFileSystems", req, cb);
    }
    /**
     * 查询数据流动带宽
     */
    async QueryDataRepositoryBandwidth(req, cb) {
        return this.request("QueryDataRepositoryBandwidth", req, cb);
    }
    /**
     * 罗列文件系统关联的Bucket映射
     */
    async DescribeFileSystemBuckets(req, cb) {
        return this.request("DescribeFileSystemBuckets", req, cb);
    }
    /**
     * 列出集群中所有的客户端节点
     */
    async DescribeClientNodes(req, cb) {
        return this.request("DescribeClientNodes", req, cb);
    }
    /**
     * 获取数据流通任务实时状态，用作客户端控制
     */
    async DescribeDataRepositoryTaskStatus(req, cb) {
        return this.request("DescribeDataRepositoryTaskStatus", req, cb);
    }
    /**
     * 为客户端节点删除跨vpc子网访问能力
     */
    async DeleteCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("DeleteCrossVpcSubnetSupportForClientNode", req, cb);
    }
    /**
     * 修改数据流动带宽
     */
    async ModifyDataRepositoryBandwidth(req, cb) {
        return this.request("ModifyDataRepositoryBandwidth", req, cb);
    }
    /**
     * 为文件系统关联Bucket
     */
    async AttachFileSystemBucket(req, cb) {
        return this.request("AttachFileSystemBucket", req, cb);
    }
    /**
     * 批量删除客户端节点
     */
    async BatchDeleteClientNodes(req, cb) {
        return this.request("BatchDeleteClientNodes", req, cb);
    }
    /**
     * 查询客户端节点跨vpc子网访问能力
     */
    async QueryCrossVpcSubnetSupportForClientNode(req, cb) {
        return this.request("QueryCrossVpcSubnetSupportForClientNode", req, cb);
    }
    /**
     * 查询GooseFS集群客户端凭证
     */
    async DescribeClusterClientToken(req, cb) {
        return this.request("DescribeClusterClientToken", req, cb);
    }
    /**
     * 创建文件系统
     */
    async CreateFileSystem(req, cb) {
        return this.request("CreateFileSystem", req, cb);
    }
    /**
     * 扩展文件系统容量
     */
    async ExpandCapacity(req, cb) {
        return this.request("ExpandCapacity", req, cb);
    }
    /**
     * 查询GooseFS集群角色凭证
     */
    async DescribeClusterRoleToken(req, cb) {
        return this.request("DescribeClusterRoleToken", req, cb);
    }
    /**
     * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
     */
    async CreateDataRepositoryTask(req, cb) {
        return this.request("CreateDataRepositoryTask", req, cb);
    }
}
exports.Client = Client;
