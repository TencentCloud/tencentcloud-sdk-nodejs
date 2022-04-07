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

/**
 * UnTagResources返回参数结构体
 */
export interface UnTagResourcesResponse {
  /**
      * 失败资源信息。
解绑标签成功时，返回的FailedResources为空。
解绑标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。
      */
  FailedResources: Array<FailedResource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表示一个标签键值对以及是否允许删除
 */
export interface TagWithDelete {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string

  /**
   * 是否可以删除
   */
  CanDelete: number
}

/**
 * DetachResourcesTag请求参数结构体
 */
export interface DetachResourcesTagRequest {
  /**
   * 资源所属业务名称（资源六段式中的第三段）
   */
  ServiceType: string

  /**
   * 资源ID数组，资源个数最多为50
   */
  ResourceIds: Array<string>

  /**
   * 需要解绑的标签键
   */
  TagKey: string

  /**
   * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string

  /**
   * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
   */
  ResourcePrefix?: string
}

/**
 * GetTagValues返回参数结构体
 */
export interface GetTagValuesResponse {
  /**
   * 获取的下一页的Token值
   */
  PaginationToken: string

  /**
   * 标签列表。
   */
  Tags: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachResourcesTag返回参数结构体
 */
export interface AttachResourcesTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTagKeys返回参数结构体
 */
export interface GetTagKeysResponse {
  /**
   * 获取的下一页的Token值
   */
  PaginationToken: string

  /**
   * 标签键信息。
   */
  TagKeys: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetResources请求参数结构体
 */
export interface GetResourcesRequest {
  /**
      * 资源六段式列表。腾讯云使用资源六段式描述一个资源。
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
如果传入了此参数会返回所有匹配的资源列表，指定的MaxResults会失效。
N取值范围：0~9
      */
  ResourceList?: Array<string>

  /**
      * 标签键和标签值。
指定多个标签，会查询同时绑定了该多个标签的资源。
N取值范围：0~5。
每个TagFilters中的TagValue最多支持10个
      */
  TagFilters?: Array<TagFilter>

  /**
      * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
      */
  PaginationToken?: string

  /**
      * 每一页返回的数据最大条数，最大200。
缺省值：50。
      */
  MaxResults?: number
}

/**
 * DeleteTag请求参数结构体
 */
export interface DeleteTagRequest {
  /**
   * 需要删除的标签键
   */
  TagKey: string

  /**
   * 需要删除的标签值
   */
  TagValue: string
}

/**
 * DeleteResourceTag返回参数结构体
 */
export interface DeleteResourceTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByTagKeys请求参数结构体
 */
export interface DescribeResourceTagsByTagKeysRequest {
  /**
   * 业务类型
   */
  ServiceType: string

  /**
   * 资源前缀
   */
  ResourcePrefix: string

  /**
   * 资源地域
   */
  ResourceRegion: string

  /**
   * 资源唯一标识
   */
  ResourceIds: Array<string>

  /**
   * 资源标签键
   */
  TagKeys: Array<string>

  /**
   * 每页大小，默认为 400
   */
  Limit?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number
}

/**
 * ModifyResourceTags返回参数结构体
 */
export interface ModifyResourceTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTags请求参数结构体
 */
export interface DescribeTagsRequest {
  /**
   * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
   */
  TagKey?: string

  /**
   * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
   */
  TagValue?: string

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
   */
  CreateUin?: number

  /**
   * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
   */
  TagKeys?: Array<string>

  /**
   * 是否展现项目标签
   */
  ShowProject?: number
}

/**
 * DescribeTagKeys返回参数结构体
 */
export interface DescribeTagKeysResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagValues请求参数结构体
 */
export interface DescribeTagValuesRequest {
  /**
   * 标签键列表
   */
  TagKeys: Array<string>

  /**
   * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
   */
  CreateUin?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number
}

/**
 * DescribeResourcesByTagsUnion请求参数结构体
 */
export interface DescribeResourcesByTagsUnionRequest {
  /**
   * 标签过滤数组
   */
  TagFilters: Array<TagFilter>

  /**
   * 创建标签者uin
   */
  CreateUin?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 资源前缀
   */
  ResourcePrefix?: string

  /**
   * 资源唯一标记
   */
  ResourceId?: string

  /**
   * 资源所在地域
   */
  ResourceRegion?: string

  /**
   * 业务类型
   */
  ServiceType?: string
}

/**
 * DeleteTags返回参数结构体
 */
export interface DeleteTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourcesTagValue返回参数结构体
 */
export interface ModifyResourcesTagValueResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTags返回参数结构体
 */
export interface DescribeTagsResponse {
  /**
   * 结果总数
   */
  TotalCount: number

  /**
   * 数据位移偏量
   */
  Offset: number

  /**
   * 每页大小
   */
  Limit: number

  /**
   * 标签列表
   */
  Tags: Array<TagWithDelete>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTags请求参数结构体
 */
export interface DeleteTagsRequest {
  /**
      * 标签列表。
N取值范围：0~9
      */
  Tags: Array<Tag>
}

/**
 * DescribeTagKeys请求参数结构体
 */
export interface DescribeTagKeysRequest {
  /**
   * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
   */
  CreateUin?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 是否展现项目
   */
  ShowProject?: number
}

/**
 * GetTags请求参数结构体
 */
export interface GetTagsRequest {
  /**
      * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
      */
  PaginationToken?: string

  /**
      * 每一页返回的数据最大条数，最大1000。
缺省值：50。
      */
  MaxResults?: number

  /**
      * 标签键。
返回所有标签键列表对应的标签。
最大长度：20
      */
  TagKeys?: Array<string>
}

/**
 * UnTagResources请求参数结构体
 */
export interface UnTagResourcesRequest {
  /**
      * 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
N取值范围：0~9
      */
  ResourceList: Array<string>

  /**
      * 标签键。
取值范围：0~9
      */
  TagKeys: Array<string>
}

/**
 * DescribeTagsSeq返回参数结构体
 */
export interface DescribeTagsSeqResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<TagWithDelete>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourceTags请求参数结构体
 */
export interface ModifyResourceTagsRequest {
  /**
   * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
   */
  Resource: string

  /**
   * 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
   */
  ReplaceTags?: Array<Tag>

  /**
   * 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
   */
  DeleteTags?: Array<TagKeyObject>
}

/**
 * DescribeResourceTags返回参数结构体
 */
export interface DescribeResourceTagsResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
      * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Limit?: number

  /**
   * 资源标签
   */
  Rows?: Array<TagResource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByResourceIds请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsRequest {
  /**
   * 业务类型
   */
  ServiceType: string

  /**
   * 资源前缀
   */
  ResourcePrefix: string

  /**
   * 资源ID数组，大小不超过50
   */
  ResourceIds: Array<string>

  /**
   * 资源所在地域
   */
  ResourceRegion: string

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number
}

/**
 * DescribeResourcesByTagsUnion返回参数结构体
 */
export interface DescribeResourcesByTagsUnionResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 资源标签
   */
  Rows?: Array<ResourceTag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByResourceIds返回参数结构体
 */
export interface DescribeResourceTagsByResourceIdsResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<TagResource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTags返回参数结构体
 */
export interface GetTagsResponse {
  /**
   * 获取的下一页的Token值
   */
  PaginationToken: string

  /**
   * 标签列表。
   */
  Tags: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourcesTagValue请求参数结构体
 */
export interface ModifyResourcesTagValueRequest {
  /**
   * 资源所属业务名称（资源六段式中的第三段）
   */
  ServiceType: string

  /**
   * 资源ID数组，资源个数最多为50
   */
  ResourceIds: Array<string>

  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string

  /**
   * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string

  /**
   * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
   */
  ResourcePrefix?: string
}

/**
 * 标签键值对以及资源ID
 */
export interface TagResource {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string

  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 标签键MD5值
   */
  TagKeyMd5: string

  /**
   * 标签值MD5值
   */
  TagValueMd5: string

  /**
      * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceType: string
}

/**
 * GetTagKeys请求参数结构体
 */
export interface GetTagKeysRequest {
  /**
      * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
      */
  PaginationToken?: string

  /**
      * 每一页返回的数据最大条数，最大1000。
缺省值：50。
      */
  MaxResults?: number
}

/**
 * AddResourceTag返回参数结构体
 */
export interface AddResourceTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcesByTags返回参数结构体
 */
export interface DescribeResourcesByTagsResponse {
  /**
   * 结果总数
   */
  TotalCount: number

  /**
   * 数据位移偏量
   */
  Offset: number

  /**
      * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Limit: number

  /**
   * 资源标签
   */
  Rows: Array<ResourceTag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddResourceTag请求参数结构体
 */
export interface AddResourceTagRequest {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string

  /**
   * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
   */
  Resource: string
}

/**
 * DescribeTagValuesSeq返回参数结构体
 */
export interface DescribeTagValuesSeqResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTag请求参数结构体
 */
export interface CreateTagRequest {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeResourceTagsByTagKeys返回参数结构体
 */
export interface DescribeResourceTagsByTagKeysResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 资源标签
   */
  Rows?: Array<ResourceIdTag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTagsSeq请求参数结构体
 */
export interface DescribeTagsSeqRequest {
  /**
   * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
   */
  TagKey?: string

  /**
   * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
   */
  TagValue?: string

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
   */
  CreateUin?: number

  /**
   * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
   */
  TagKeys?: Array<string>

  /**
   * 是否展现项目标签
   */
  ShowProject?: number
}

/**
 * DescribeTagValues返回参数结构体
 */
export interface DescribeTagValuesResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * tag过滤数组多个是与的关系
 */
export interface TagFilter {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值数组 多个值的话是或的关系
   */
  TagValue?: Array<string>
}

/**
 * 表示一个标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string
}

/**
 * AttachResourcesTag请求参数结构体
 */
export interface AttachResourcesTagRequest {
  /**
   * 资源所属业务名称（资源六段式中的第三段）
   */
  ServiceType: string

  /**
   * 资源ID数组，资源个数最多为50
   */
  ResourceIds: Array<string>

  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string

  /**
   * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string

  /**
   * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
   */
  ResourcePrefix?: string
}

/**
 * CreateTag返回参数结构体
 */
export interface CreateTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 失败资源信息。
绑定或解绑资源标签时失败返回
 */
export interface FailedResource {
  /**
   * 失败的资源六段式
   */
  Resource: string

  /**
   * 错误码
   */
  Code: string

  /**
   * 错误信息
   */
  Message: string
}

/**
 * 资源及关联的标签(键和值)。
 */
export interface ResourceTagMapping {
  /**
      * 资源六段式。腾讯云使用资源六段式描述一个资源。
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
      */
  Resource: string

  /**
   * 资源关联的标签列表
   */
  Tags: Array<Tag>
}

/**
 * DetachResourcesTag返回参数结构体
 */
export interface DetachResourcesTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetResources返回参数结构体
 */
export interface GetResourcesResponse {
  /**
   * 获取的下一页的Token值
   */
  PaginationToken: string

  /**
   * 资源及关联的标签(键和值)列表
   */
  ResourceTagMappingList: Array<ResourceTagMapping>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByResourceIdsSeq返回参数结构体
 */
export interface DescribeResourceTagsByResourceIdsSeqResponse {
  /**
   * 结果总数
   */
  TotalCount?: number

  /**
   * 数据位移偏量
   */
  Offset?: number

  /**
   * 每页大小
   */
  Limit?: number

  /**
   * 标签列表
   */
  Tags?: Array<TagResource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTag返回参数结构体
 */
export interface DeleteTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源标签键值
 */
export interface ResourceIdTag {
  /**
      * 资源唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKeyValues: Array<Tag>
}

/**
 * DescribeTagValuesSeq请求参数结构体
 */
export interface DescribeTagValuesSeqRequest {
  /**
   * 标签键列表
   */
  TagKeys: Array<string>

  /**
   * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
   */
  CreateUin?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number
}

/**
 * UpdateResourceTagValue请求参数结构体
 */
export interface UpdateResourceTagValueRequest {
  /**
   * 资源关联的标签键
   */
  TagKey: string

  /**
   * 修改后的标签值
   */
  TagValue: string

  /**
   * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
   */
  Resource: string
}

/**
 * TagResources返回参数结构体
 */
export interface TagResourcesResponse {
  /**
      * 失败资源信息。
创建并绑定标签成功时，返回的FailedResources为空。
创建并绑定标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。
      */
  FailedResources: Array<FailedResource>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTags请求参数结构体
 */
export interface CreateTagsRequest {
  /**
      * 标签列表。
N取值范围：0~9
      */
  Tags?: Array<Tag>
}

/**
 * CreateTags返回参数结构体
 */
export interface CreateTagsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourcesByTags请求参数结构体
 */
export interface DescribeResourcesByTagsRequest {
  /**
   * 标签过滤数组
   */
  TagFilters: Array<TagFilter>

  /**
   * 创建标签者uin
   */
  CreateUin?: number

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 资源前缀
   */
  ResourcePrefix?: string

  /**
   * 资源唯一标记
   */
  ResourceId?: string

  /**
   * 资源所在地域
   */
  ResourceRegion?: string

  /**
   * 业务类型
   */
  ServiceType?: string
}

/**
 * TagResources请求参数结构体
 */
export interface TagResourcesRequest {
  /**
      * 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
N取值范围：0~9
      */
  ResourceList: Array<string>

  /**
      * 标签键和标签值。
如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。
同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
如果标签不存在会为您自动创建标签。
N取值范围：0~9
      */
  Tags: Array<Tag>
}

/**
 * DeleteResourceTag请求参数结构体
 */
export interface DeleteResourceTagRequest {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
   */
  Resource: string
}

/**
 * UpdateResourceTagValue返回参数结构体
 */
export interface UpdateResourceTagValueResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签键对象
 */
export interface TagKeyObject {
  /**
   * 标签键
   */
  TagKey: string
}

/**
 * DescribeResourceTags请求参数结构体
 */
export interface DescribeResourceTagsRequest {
  /**
   * 创建者uin
   */
  CreateUin?: number

  /**
   * 资源所在地域
   */
  ResourceRegion?: string

  /**
   * 业务类型
   */
  ServiceType?: string

  /**
   * 资源前缀
   */
  ResourcePrefix?: string

  /**
   * 资源唯一标识。只输入ResourceId进行查询可能会查询较慢，或者无法匹配到结果，建议在输入ResourceId的同时也输入ServiceType、ResourcePrefix和ResourceRegion（不区分地域的资源可忽略该参数）
   */
  ResourceId?: string

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number

  /**
   * 是否是cos的资源（0或者1），输入的ResourceId为cos资源时必填
   */
  CosResourceId?: number
}

/**
 * DescribeResourceTagsByResourceIdsSeq请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsSeqRequest {
  /**
   * 业务类型
   */
  ServiceType: string

  /**
   * 资源前缀
   */
  ResourcePrefix: string

  /**
   * 资源唯一标记
   */
  ResourceIds: Array<string>

  /**
   * 资源所在地域
   */
  ResourceRegion: string

  /**
   * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
   */
  Offset?: number

  /**
   * 每页大小，默认为 15
   */
  Limit?: number
}

/**
 * GetTagValues请求参数结构体
 */
export interface GetTagValuesRequest {
  /**
      * 标签键。
返回所有标签键列表对应的标签值。
最大长度：20
      */
  TagKeys: Array<string>

  /**
      * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
      */
  PaginationToken?: string

  /**
      * 每一页返回的数据最大条数，最大1000。
缺省值：50。
      */
  MaxResults?: number
}

/**
 * 资源标签
 */
export interface ResourceTag {
  /**
      * 资源所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceRegion: string

  /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceType: string

  /**
      * 资源前缀
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourcePrefix: string

  /**
      * 资源唯一标记
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>
}
