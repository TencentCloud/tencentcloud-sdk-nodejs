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
 * tag client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tag.tencentcloudapi.com", "2018-08-13", clientConfig);
    }
    /**
     * 本接口用于删除一对标签键和标签值
     */
    async DeleteTags(req, cb) {
        return this.request("DeleteTags", req, cb);
    }
    /**
     * 根据标签键获取资源标签
     */
    async DescribeResourceTagsByTagKeys(req, cb) {
        return this.request("DescribeResourceTagsByTagKeys", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    async GetTagValues(req, cb) {
        return this.request("GetTagValues", req, cb);
    }
    /**
     * 用于批量查询已有资源关联的标签键值对
     */
    async DescribeResourceTagsByResourceIds(req, cb) {
        return this.request("DescribeResourceTagsByResourceIds", req, cb);
    }
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     */
    async UpdateResourceTagValue(req, cb) {
        return this.request("UpdateResourceTagValue", req, cb);
    }
    /**
     * 按顺序查看资源关联的标签
     */
    async DescribeResourceTagsByResourceIdsSeq(req, cb) {
        return this.request("DescribeResourceTagsByResourceIdsSeq", req, cb);
    }
    /**
     * 用于获取已建立的标签列表。
     */
    async GetTags(req, cb) {
        return this.request("GetTags", req, cb);
    }
    /**
     * 修改多个资源关联的某个标签键对应的标签值
     */
    async ModifyResourcesTagValue(req, cb) {
        return this.request("ModifyResourcesTagValue", req, cb);
    }
    /**
     * 通过标签查询资源列表
     */
    async DescribeResourcesByTags(req, cb) {
        return this.request("DescribeResourcesByTags", req, cb);
    }
    /**
     * 本接口用于删除一对标签键和标签值
     */
    async DeleteTag(req, cb) {
        return this.request("DeleteTag", req, cb);
    }
    /**
     * 查询绑定了标签的资源列表。
     */
    async GetResources(req, cb) {
        return this.request("GetResources", req, cb);
    }
    /**
     * 查询资源关联标签
     */
    async DescribeResourceTags(req, cb) {
        return this.request("DescribeResourceTags", req, cb);
    }
    /**
     * 查询标签键列表。
     */
    async GetTagKeys(req, cb) {
        return this.request("GetTagKeys", req, cb);
    }
    /**
     * 用于查询已建立的标签列表。

     */
    async DescribeTagsSeq(req, cb) {
        return this.request("DescribeTagsSeq", req, cb);
    }
    /**
     * 本接口用于给标签关联资源
     */
    async AddResourceTag(req, cb) {
        return this.request("AddResourceTag", req, cb);
    }
    /**
     * 给多个资源关联某个标签
     */
    async AttachResourcesTag(req, cb) {
        return this.request("AttachResourcesTag", req, cb);
    }
    /**
     * 本接口用于创建一对标签键和标签值
     */
    async CreateTag(req, cb) {
        return this.request("CreateTag", req, cb);
    }
    /**
     * 解绑多个资源关联的某个标签
     */
    async DetachResourcesTag(req, cb) {
        return this.request("DetachResourcesTag", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    async DescribeTagValues(req, cb) {
        return this.request("DescribeTagValues", req, cb);
    }
    /**
     * 为指定的多个云产品的多个云资源统一创建并绑定标签。
     */
    async TagResources(req, cb) {
        return this.request("TagResources", req, cb);
    }
    /**
     * 本接口用于解除标签和资源的关联关系
     */
    async DeleteResourceTag(req, cb) {
        return this.request("DeleteResourceTag", req, cb);
    }
    /**
     * 用于查询已建立的标签列表。

     */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签键。

     */
    async DescribeTagKeys(req, cb) {
        return this.request("DescribeTagKeys", req, cb);
    }
    /**
     * 指定的多个云产品的多个云资源统一解绑标签。
     */
    async UnTagResources(req, cb) {
        return this.request("UnTagResources", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    async DescribeTagValuesSeq(req, cb) {
        return this.request("DescribeTagValuesSeq", req, cb);
    }
    /**
     * 本接口用于创建多对标签键和标签值
     */
    async CreateTags(req, cb) {
        return this.request("CreateTags", req, cb);
    }
    /**
     * 通过标签查询资源列表并集
     */
    async DescribeResourcesByTagsUnion(req, cb) {
        return this.request("DescribeResourcesByTagsUnion", req, cb);
    }
    /**
     * 本接口用于修改资源关联的所有标签
     */
    async ModifyResourceTags(req, cb) {
        return this.request("ModifyResourceTags", req, cb);
    }
}
exports.Client = Client;
