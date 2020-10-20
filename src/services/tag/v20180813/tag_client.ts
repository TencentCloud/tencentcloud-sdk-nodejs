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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  TagWithDelete,
  DetachResourcesTagRequest,
  AttachResourcesTagResponse,
  DeleteTagRequest,
  DeleteResourceTagResponse,
  DescribeResourceTagsByTagKeysRequest,
  ModifyResourceTagsResponse,
  DescribeTagsRequest,
  DescribeTagKeysResponse,
  DescribeTagValuesRequest,
  ModifyResourceTagsRequest,
  DescribeResourcesByTagsUnionRequest,
  DescribeTagsResponse,
  DescribeResourcesByTagsResponse,
  DescribeTagKeysRequest,
  DescribeTagsSeqResponse,
  DescribeResourceTagsResponse,
  DescribeResourceTagsByResourceIdsRequest,
  DescribeResourcesByTagsUnionResponse,
  DescribeResourceTagsByResourceIdsResponse,
  ModifyResourcesTagValueRequest,
  TagResource,
  AddResourceTagResponse,
  ModifyResourcesTagValueResponse,
  AddResourceTagRequest,
  DescribeTagValuesSeqResponse,
  CreateTagRequest,
  DescribeResourceTagsByTagKeysResponse,
  DescribeTagsSeqRequest,
  DescribeTagValuesResponse,
  TagFilter,
  Tag,
  AttachResourcesTagRequest,
  CreateTagResponse,
  DetachResourcesTagResponse,
  DescribeResourceTagsByResourceIdsSeqResponse,
  DeleteTagResponse,
  ResourceIdTag,
  DescribeTagValuesSeqRequest,
  UpdateResourceTagValueRequest,
  DescribeResourcesByTagsRequest,
  DeleteResourceTagRequest,
  UpdateResourceTagValueResponse,
  TagKeyObject,
  DescribeResourceTagsRequest,
  DescribeResourceTagsByResourceIdsSeqRequest,
  ResourceTag,
} from "./tag_models"

/**
 * tag client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tag.tencentcloudapi.com", "2018-08-13", clientConfig)
  }

  /**
   * 根据标签键获取资源标签
   */
  async DescribeResourceTagsByTagKeys(
    req: DescribeResourceTagsByTagKeysRequest,
    cb?: (error: string, rep: DescribeResourceTagsByTagKeysResponse) => void
  ): Promise<DescribeResourceTagsByTagKeysResponse> {
    return this.request("DescribeResourceTagsByTagKeys", req, cb)
  }

  /**
   * 用于查询已建立的标签列表中的标签值。
   */
  async DescribeTagValuesSeq(
    req: DescribeTagValuesSeqRequest,
    cb?: (error: string, rep: DescribeTagValuesSeqResponse) => void
  ): Promise<DescribeTagValuesSeqResponse> {
    return this.request("DescribeTagValuesSeq", req, cb)
  }

  /**
   * 解绑多个资源关联的某个标签
   */
  async DetachResourcesTag(
    req: DetachResourcesTagRequest,
    cb?: (error: string, rep: DetachResourcesTagResponse) => void
  ): Promise<DetachResourcesTagResponse> {
    return this.request("DetachResourcesTag", req, cb)
  }

  /**
   * 用于查询已建立的标签列表中的标签值。
   */
  async DescribeTagValues(
    req: DescribeTagValuesRequest,
    cb?: (error: string, rep: DescribeTagValuesResponse) => void
  ): Promise<DescribeTagValuesResponse> {
    return this.request("DescribeTagValues", req, cb)
  }

  /**
   * 用于批量查询已有资源关联的标签键值对
   */
  async DescribeResourceTagsByResourceIds(
    req: DescribeResourceTagsByResourceIdsRequest,
    cb?: (error: string, rep: DescribeResourceTagsByResourceIdsResponse) => void
  ): Promise<DescribeResourceTagsByResourceIdsResponse> {
    return this.request("DescribeResourceTagsByResourceIds", req, cb)
  }

  /**
   * 查询资源关联标签
   */
  async DescribeResourceTags(
    req: DescribeResourceTagsRequest,
    cb?: (error: string, rep: DescribeResourceTagsResponse) => void
  ): Promise<DescribeResourceTagsResponse> {
    return this.request("DescribeResourceTags", req, cb)
  }

  /**
   * 本接口用于修改资源关联的所有标签
   */
  async ModifyResourceTags(
    req: ModifyResourceTagsRequest,
    cb?: (error: string, rep: ModifyResourceTagsResponse) => void
  ): Promise<ModifyResourceTagsResponse> {
    return this.request("ModifyResourceTags", req, cb)
  }

  /**
     * 用于查询已建立的标签列表中的标签键。

     */
  async DescribeTagKeys(
    req: DescribeTagKeysRequest,
    cb?: (error: string, rep: DescribeTagKeysResponse) => void
  ): Promise<DescribeTagKeysResponse> {
    return this.request("DescribeTagKeys", req, cb)
  }

  /**
   * 本接口用于修改资源已关联的标签值（标签键不变）
   */
  async UpdateResourceTagValue(
    req: UpdateResourceTagValueRequest,
    cb?: (error: string, rep: UpdateResourceTagValueResponse) => void
  ): Promise<UpdateResourceTagValueResponse> {
    return this.request("UpdateResourceTagValue", req, cb)
  }

  /**
   * 本接口用于解除标签和资源的关联关系
   */
  async DeleteResourceTag(
    req: DeleteResourceTagRequest,
    cb?: (error: string, rep: DeleteResourceTagResponse) => void
  ): Promise<DeleteResourceTagResponse> {
    return this.request("DeleteResourceTag", req, cb)
  }

  /**
   * 通过标签查询资源列表并集
   */
  async DescribeResourcesByTagsUnion(
    req: DescribeResourcesByTagsUnionRequest,
    cb?: (error: string, rep: DescribeResourcesByTagsUnionResponse) => void
  ): Promise<DescribeResourcesByTagsUnionResponse> {
    return this.request("DescribeResourcesByTagsUnion", req, cb)
  }

  /**
   * 按顺序查看资源关联的标签
   */
  async DescribeResourceTagsByResourceIdsSeq(
    req: DescribeResourceTagsByResourceIdsSeqRequest,
    cb?: (error: string, rep: DescribeResourceTagsByResourceIdsSeqResponse) => void
  ): Promise<DescribeResourceTagsByResourceIdsSeqResponse> {
    return this.request("DescribeResourceTagsByResourceIdsSeq", req, cb)
  }

  /**
     * 用于查询已建立的标签列表。

     */
  async DescribeTags(
    req: DescribeTagsRequest,
    cb?: (error: string, rep: DescribeTagsResponse) => void
  ): Promise<DescribeTagsResponse> {
    return this.request("DescribeTags", req, cb)
  }

  /**
     * 用于查询已建立的标签列表。

     */
  async DescribeTagsSeq(
    req: DescribeTagsSeqRequest,
    cb?: (error: string, rep: DescribeTagsSeqResponse) => void
  ): Promise<DescribeTagsSeqResponse> {
    return this.request("DescribeTagsSeq", req, cb)
  }

  /**
   * 通过标签查询资源列表
   */
  async DescribeResourcesByTags(
    req: DescribeResourcesByTagsRequest,
    cb?: (error: string, rep: DescribeResourcesByTagsResponse) => void
  ): Promise<DescribeResourcesByTagsResponse> {
    return this.request("DescribeResourcesByTags", req, cb)
  }

  /**
   * 本接口用于给标签关联资源
   */
  async AddResourceTag(
    req: AddResourceTagRequest,
    cb?: (error: string, rep: AddResourceTagResponse) => void
  ): Promise<AddResourceTagResponse> {
    return this.request("AddResourceTag", req, cb)
  }

  /**
   * 本接口用于删除一对标签键和标签值
   */
  async DeleteTag(
    req: DeleteTagRequest,
    cb?: (error: string, rep: DeleteTagResponse) => void
  ): Promise<DeleteTagResponse> {
    return this.request("DeleteTag", req, cb)
  }

  /**
   * 给多个资源关联某个标签
   */
  async AttachResourcesTag(
    req: AttachResourcesTagRequest,
    cb?: (error: string, rep: AttachResourcesTagResponse) => void
  ): Promise<AttachResourcesTagResponse> {
    return this.request("AttachResourcesTag", req, cb)
  }

  /**
   * 本接口用于创建一对标签键和标签值
   */
  async CreateTag(
    req: CreateTagRequest,
    cb?: (error: string, rep: CreateTagResponse) => void
  ): Promise<CreateTagResponse> {
    return this.request("CreateTag", req, cb)
  }

  /**
   * 修改多个资源关联的某个标签键对应的标签值
   */
  async ModifyResourcesTagValue(
    req: ModifyResourcesTagValueRequest,
    cb?: (error: string, rep: ModifyResourcesTagValueResponse) => void
  ): Promise<ModifyResourcesTagValueResponse> {
    return this.request("ModifyResourcesTagValue", req, cb)
  }
}
