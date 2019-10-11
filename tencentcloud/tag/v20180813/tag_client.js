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
const DescribeTagsResponse = models.DescribeTagsResponse;
const DeleteTagRequest = models.DeleteTagRequest;
const DeleteResourceTagResponse = models.DeleteResourceTagResponse;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const DescribeTagKeysResponse = models.DescribeTagKeysResponse;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeResourcesByTagsResponse = models.DescribeResourcesByTagsResponse;
const DescribeTagKeysRequest = models.DescribeTagKeysRequest;
const DescribeResourcesByTagsRequest = models.DescribeResourcesByTagsRequest;
const DescribeResourceTagsByResourceIdsRequest = models.DescribeResourceTagsByResourceIdsRequest;
const Tag = models.Tag;
const TagResource = models.TagResource;
const DescribeTagsRequest = models.DescribeTagsRequest;
const AddResourceTagRequest = models.AddResourceTagRequest;
const CreateTagRequest = models.CreateTagRequest;
const TagFilter = models.TagFilter;
const CreateTagResponse = models.CreateTagResponse;
const DescribeResourceTagsByResourceIdsResponse = models.DescribeResourceTagsByResourceIdsResponse;
const DeleteTagResponse = models.DeleteTagResponse;
const AddResourceTagResponse = models.AddResourceTagResponse;
const UpdateResourceTagValueRequest = models.UpdateResourceTagValueRequest;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const DeleteResourceTagRequest = models.DeleteResourceTagRequest;
const UpdateResourceTagValueResponse = models.UpdateResourceTagValueResponse;
const TagKeyObject = models.TagKeyObject;
const TagWithDelete = models.TagWithDelete;
const ResourceTag = models.ResourceTag;


/**
 * tag client
 * @class
 */
class TagClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tag.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     * @param {UpdateResourceTagValueRequest} req
     * @param {function(string, UpdateResourceTagValueResponse):void} cb
     * @public
     */
    UpdateResourceTagValue(req, cb) {
        let resp = new UpdateResourceTagValueResponse();
        this.request("UpdateResourceTagValue", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {DescribeTagValuesRequest} req
     * @param {function(string, DescribeTagValuesResponse):void} cb
     * @public
     */
    DescribeTagValues(req, cb) {
        let resp = new DescribeTagValuesResponse();
        this.request("DescribeTagValues", req, resp, cb);
    }

    /**
     * 用于查询已有资源标签键值对
     * @param {DescribeResourceTagsByResourceIdsRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIds(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsResponse();
        this.request("DescribeResourceTagsByResourceIds", req, resp, cb);
    }

    /**
     * 本接口用于修改资源关联的所有标签
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        let resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签键。

     * @param {DescribeTagKeysRequest} req
     * @param {function(string, DescribeTagKeysResponse):void} cb
     * @public
     */
    DescribeTagKeys(req, cb) {
        let resp = new DescribeTagKeysResponse();
        this.request("DescribeTagKeys", req, resp, cb);
    }

    /**
     * 本接口用于解除标签和资源的关联关系
     * @param {DeleteResourceTagRequest} req
     * @param {function(string, DeleteResourceTagResponse):void} cb
     * @public
     */
    DeleteResourceTag(req, cb) {
        let resp = new DeleteResourceTagResponse();
        this.request("DeleteResourceTag", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表。

     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * 通过标签查询资源列表
     * @param {DescribeResourcesByTagsRequest} req
     * @param {function(string, DescribeResourcesByTagsResponse):void} cb
     * @public
     */
    DescribeResourcesByTags(req, cb) {
        let resp = new DescribeResourcesByTagsResponse();
        this.request("DescribeResourcesByTags", req, resp, cb);
    }

    /**
     * 本接口用于给标签关联资源
     * @param {AddResourceTagRequest} req
     * @param {function(string, AddResourceTagResponse):void} cb
     * @public
     */
    AddResourceTag(req, cb) {
        let resp = new AddResourceTagResponse();
        this.request("AddResourceTag", req, resp, cb);
    }

    /**
     * 本接口用于删除一对标签键和标签值
     * @param {DeleteTagRequest} req
     * @param {function(string, DeleteTagResponse):void} cb
     * @public
     */
    DeleteTag(req, cb) {
        let resp = new DeleteTagResponse();
        this.request("DeleteTag", req, resp, cb);
    }

    /**
     * 本接口用于创建一对标签键和标签值
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        let resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }


}
module.exports = TagClient;
