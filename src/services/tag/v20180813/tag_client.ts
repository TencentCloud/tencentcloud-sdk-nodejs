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
  UnTagResourcesResponse,
  TagWithDelete,
  DetachResourcesTagRequest,
  GetTagValuesResponse,
  AttachResourcesTagResponse,
  AddProjectResponse,
  GetResourcesRequest,
  DeleteTagRequest,
  DeleteResourceTagResponse,
  DescribeResourceTagsByTagKeysRequest,
  ModifyResourceTagsResponse,
  DescribeTagsRequest,
  DescribeProjectsRequest,
  DescribeTagValuesRequest,
  UpdateProjectRequest,
  DescribeResourcesByTagsUnionRequest,
  DeleteTagsResponse,
  ModifyResourcesTagValueResponse,
  DescribeTagsResponse,
  DeleteTagsRequest,
  DescribeTagKeysRequest,
  DescribeProjectsResponse,
  UnTagResourcesRequest,
  DescribeTagsSeqResponse,
  ModifyResourceTagsRequest,
  DescribeResourceTagsResponse,
  DescribeResourceTagsByResourceIdsRequest,
  DescribeResourcesByTagsUnionResponse,
  DescribeResourceTagsByResourceIdsResponse,
  GetTagsResponse,
  ModifyResourcesTagValueRequest,
  TagResource,
  AddProjectRequest,
  AddResourceTagResponse,
  DescribeResourcesByTagsResponse,
  AddResourceTagRequest,
  DescribeTagValuesSeqResponse,
  CreateTagRequest,
  DescribeResourceTagsByTagKeysResponse,
  DescribeTagsSeqRequest,
  DescribeTagValuesResponse,
  ResourceIdTag,
  TagFilter,
  Project,
  Tag,
  AttachResourcesTagRequest,
  CreateTagResponse,
  FailedResource,
  ResourceTagMapping,
  GetTagKeysRequest,
  DetachResourcesTagResponse,
  GetResourcesResponse,
  DescribeResourceTagsByResourceIdsSeqResponse,
  DeleteTagResponse,
  DescribeTagKeysResponse,
  DescribeTagValuesSeqRequest,
  UpdateResourceTagValueRequest,
  GetTagKeysResponse,
  TagResourcesResponse,
  CreateTagsRequest,
  CreateTagsResponse,
  GetTagsRequest,
  DescribeResourcesByTagsRequest,
  TagResourcesRequest,
  DeleteResourceTagRequest,
  UpdateResourceTagValueResponse,
  TagKeyObject,
  DescribeResourceTagsRequest,
  UpdateProjectResponse,
  DescribeResourceTagsByResourceIdsSeqRequest,
  GetTagValuesRequest,
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
   * 本接口用于批量删除标签键和标签值。
   */
  async DeleteTags(
    req: DeleteTagsRequest,
    cb?: (error: string, rep: DeleteTagsResponse) => void
  ): Promise<DeleteTagsResponse> {
    return this.request("DeleteTags", req, cb)
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
  async GetTagValues(
    req: GetTagValuesRequest,
    cb?: (error: string, rep: GetTagValuesResponse) => void
  ): Promise<GetTagValuesResponse> {
    return this.request("GetTagValues", req, cb)
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
   * 本接口用于修改资源已关联的标签值（标签键不变）
   */
  async UpdateResourceTagValue(
    req: UpdateResourceTagValueRequest,
    cb?: (error: string, rep: UpdateResourceTagValueResponse) => void
  ): Promise<UpdateResourceTagValueResponse> {
    return this.request("UpdateResourceTagValue", req, cb)
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
   * 用于获取已建立的标签列表。
   */
  async GetTags(
    req: GetTagsRequest,
    cb?: (error: string, rep: GetTagsResponse) => void
  ): Promise<GetTagsResponse> {
    return this.request("GetTags", req, cb)
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
   * 本接口用于删除一对标签键和标签值
   */
  async DeleteTag(
    req: DeleteTagRequest,
    cb?: (error: string, rep: DeleteTagResponse) => void
  ): Promise<DeleteTagResponse> {
    return this.request("DeleteTag", req, cb)
  }

  /**
   * 查询绑定了标签的资源列表。
   */
  async GetResources(
    req: GetResourcesRequest,
    cb?: (error: string, rep: GetResourcesResponse) => void
  ): Promise<GetResourcesResponse> {
    return this.request("GetResources", req, cb)
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
   * 创建项目
   */
  async AddProject(
    req: AddProjectRequest,
    cb?: (error: string, rep: AddProjectResponse) => void
  ): Promise<AddProjectResponse> {
    return this.request("AddProject", req, cb)
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
   * 本接口用于给标签关联资源
   */
  async AddResourceTag(
    req: AddResourceTagRequest,
    cb?: (error: string, rep: AddResourceTagResponse) => void
  ): Promise<AddResourceTagResponse> {
    return this.request("AddResourceTag", req, cb)
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
   * 为指定的多个云产品的多个云资源统一创建并绑定标签。
   */
  async TagResources(
    req: TagResourcesRequest,
    cb?: (error: string, rep: TagResourcesResponse) => void
  ): Promise<TagResourcesResponse> {
    return this.request("TagResources", req, cb)
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
   * 用于查询已建立的标签列表。
   */
  async DescribeTags(
    req: DescribeTagsRequest,
    cb?: (error: string, rep: DescribeTagsResponse) => void
  ): Promise<DescribeTagsResponse> {
    return this.request("DescribeTags", req, cb)
  }

  /**
   * 获取项目列表
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
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
   * 指定的多个云产品的多个云资源统一解绑标签。
   */
  async UnTagResources(
    req: UnTagResourcesRequest,
    cb?: (error: string, rep: UnTagResourcesResponse) => void
  ): Promise<UnTagResourcesResponse> {
    return this.request("UnTagResources", req, cb)
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
   * 本接口用于创建多对标签键和标签值
   */
  async CreateTags(
    req: CreateTagsRequest,
    cb?: (error: string, rep: CreateTagsResponse) => void
  ): Promise<CreateTagsResponse> {
    return this.request("CreateTags", req, cb)
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
   * 修改项目
   */
  async UpdateProject(
    req: UpdateProjectRequest,
    cb?: (error: string, rep: UpdateProjectResponse) => void
  ): Promise<UpdateProjectResponse> {
    return this.request("UpdateProject", req, cb)
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
   * 查询标签键列表。
   */
  async GetTagKeys(
    req: GetTagKeysRequest,
    cb?: (error: string, rep: GetTagKeysResponse) => void
  ): Promise<GetTagKeysResponse> {
    return this.request("GetTagKeys", req, cb)
  }
}
