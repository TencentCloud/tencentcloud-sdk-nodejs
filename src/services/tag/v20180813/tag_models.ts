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
  FailedResources?: Array<FailedResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
  /**
   * 是否可以删除
   */
  CanDelete?: number
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * DetachResourcesTag请求参数结构体
 */
export interface DetachResourcesTagRequest {
  /**
   * 业务类型，示例 cvm 。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
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
   * 资源所在地域，示例：ap-guangzhou 。不区分地域的资源则不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string
  /**
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId。cos存储桶为非必填，其他云资源为必填
   */
  ResourcePrefix?: string
}

/**
 * GetTagValues返回参数结构体
 */
export interface GetTagValuesResponse {
  /**
   * 获取的下一页的Token值，如果当前是最后一页，返回为空
   */
  PaginationToken?: string
  /**
   * 标签列表。
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachResourcesTag返回参数结构体
 */
export interface AttachResourcesTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddProject返回参数结构体
 */
export interface AddProjectResponse {
  /**
   * 项目Id
   */
  ProjectId?: number
  /**
   * 是否为新项目，1是新项目，0不是新项目
   */
  IsNew?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByTagKeys请求参数结构体
 */
export interface DescribeResourceTagsByTagKeysRequest {
  /**
   * 业务类型，示例 cvm 。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
   */
  ServiceType: string
  /**
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId。cos存储桶为非必填，其他云资源为必填
   */
  ResourcePrefix: string
  /**
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion: string
  /**
   * 资源唯一标识ID的列表，列表容量不超过20
   */
  ResourceIds: Array<string>
  /**
   * 资源标签键列表，列表容量不超过20
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 是否展现项目标签。1:展示  0:不展示
   */
  ShowProject?: number
}

/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
  /**
   * 传1拉取所有项目（包括隐藏项目），传0拉取显示项目
   */
  AllList: number
  /**
   * 分页条数，固定值1000。
   */
  Limit: number
  /**
   * 分页偏移量。
   */
  Offset: number
  /**
   * 按项目ID筛选，大于0
   */
  ProjectId?: number
  /**
   * 按项目名称筛选
   */
  ProjectName?: string
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
}

/**
 * UpdateProject请求参数结构体
 */
export interface UpdateProjectRequest {
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 禁用项目，1，禁用，0，启用
   */
  Disable?: number
  /**
   * 备注
   */
  Info?: string
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
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId。cos存储桶为非必填，其他云资源为必填
   */
  ResourcePrefix?: string
  /**
   * 资源唯一标记
   */
  ResourceId?: string
  /**
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string
  /**
   * 业务类型，示例 cvm 。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
   */
  ServiceType?: string
}

/**
 * DeleteTags返回参数结构体
 */
export interface DeleteTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourcesTagValue返回参数结构体
 */
export interface ModifyResourcesTagValueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 每页大小，默认为 15，最大1000
   */
  Limit?: number
  /**
   * 是否展现项目。1:展示  0:不展示
   */
  ShowProject?: number
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * 数据总条数
   */
  Total?: number
  /**
   * 项目列表
   */
  Projects?: Array<Project>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnTagResources请求参数结构体
 */
export interface UnTagResourcesRequest {
  /**
   * 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByResourceIds请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsRequest {
  /**
   * 业务类型，示例 cvm 。资源所属业务名称（资源六段式中的第三段）
   */
  ServiceType: string
  /**
   * 资源前缀，示例 instance
   */
  ResourcePrefix: string
  /**
   * 资源ID数组，大小不超过50
   */
  ResourceIds: Array<string>
  /**
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTags返回参数结构体
 */
export interface GetTagsResponse {
  /**
   * 获取的下一页的Token值，如果当前是最后一页，返回为空
   */
  PaginationToken?: string
  /**
   * 标签列表。
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourcesTagValue请求参数结构体
 */
export interface ModifyResourcesTagValueRequest {
  /**
   * 业务类型，示例 cvm 。资源所属业务名称（资源六段式中的第三段）
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
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string
  /**
   * 资源前缀（资源六段式中最后一段"/"前面的部分），例如“qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584” 中资源前缀为ckafkaId），cos存储桶不需要传入该字段，其他云资源必填
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
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 标签键MD5值
   */
  TagKeyMd5?: string
  /**
   * 标签值MD5值
   */
  TagValueMd5?: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceType?: string
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * AddProject请求参数结构体
 */
export interface AddProjectRequest {
  /**
   * 项目名称
   */
  ProjectName: string
  /**
   * 项目描述
   */
  Info?: string
}

/**
 * AddResourceTag返回参数结构体
 */
export interface AddResourceTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Rows?: Array<ResourceTag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddResourceTag请求参数结构体
 */
export interface AddResourceTagRequest {
  /**
   * 需要绑定的标签键，取值规范参考：https://cloud.tencent.com/document/product/651/13354
   */
  TagKey: string
  /**
   * 需要绑定的标签值，取值规范参考：https://cloud.tencent.com/document/product/651/13354
   */
  TagValue: string
  /**
   * 待关联的资源，用标准的资源六段式表示。正确的资源六段式请参考：https://cloud.tencent.com/document/product/651/89122
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 是否展现项目标签。1:展示  0:不展示
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 项目信息
 */
export interface Project {
  /**
   * 项目ID
   */
  ProjectId: number
  /**
   * 项目名称
   */
  ProjectName: string
  /**
   * 创建人uin
   */
  CreatorUin: number
  /**
   * 项目描述
   */
  ProjectInfo: string
  /**
   * 创建时间
   */
  CreateTime: string
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * AttachResourcesTag请求参数结构体
 */
export interface AttachResourcesTagRequest {
  /**
   * 业务类型，示例 cvm 。资源所属业务名称（资源六段式中的第三段）
   */
  ServiceType: string
  /**
   * 资源ID数组，资源个数最多为50
   */
  ResourceIds: Array<string>
  /**
   * 需要绑定的标签键，取值规范参考：https://cloud.tencent.com/document/product/651/13354
   */
  TagKey: string
  /**
   * 需要绑定的标签值，取值规范参考：https://cloud.tencent.com/document/product/651/13354
   */
  TagValue: string
  /**
   * 资源所在地域，不区分地域的资源则不必填。区分地域的资源则必填，且必填时必须是参数ResourceIds.N资源所对应的地域，且如果ResourceIds.N为批量时，这些资源也必须是同一个地域的。例如示例值：ap-beijing，则参数ResourceIds.N中都应该填写该地域的资源。
   */
  ResourceRegion?: string
  /**
   * 资源前缀（资源六段式中最后一段"/"前面的部分，例如“qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584” 中资源前缀为ckafkaId），cos存储桶不需要传入该字段，其他云资源必填
   */
  ResourcePrefix?: string
}

/**
 * CreateTag返回参数结构体
 */
export interface CreateTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
}

/**
 * DetachResourcesTag返回参数结构体
 */
export interface DetachResourcesTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTag返回参数结构体
 */
export interface DeleteTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetTagKeys返回参数结构体
 */
export interface GetTagKeysResponse {
  /**
   * 获取的下一页的Token值，如果当前是最后一页，返回为空
   */
  PaginationToken?: string
  /**
   * 标签键信息。
   */
  TagKeys?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  FailedResources?: Array<FailedResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
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
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId。cos存储桶为非必填，其他云资源为必填
   */
  ResourcePrefix?: string
  /**
   * 资源唯一标记
   */
  ResourceId?: string
  /**
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string
  /**
   * 业务类型，示例 cvm 。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
   */
  ServiceType?: string
}

/**
 * TagResources请求参数结构体
 */
export interface TagResourcesRequest {
  /**
   * 待绑定的云资源，用标准的资源六段式表示。正确的资源六段式请参考：[标准的资源六段式](https://cloud.tencent.com/document/product/598/10606)和[支持标签的云产品及资源描述方式](https://cloud.tencent.com/document/product/651/89122)。
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
   * 资源六段式。示例：qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584
   */
  Resource: string
}

/**
 * UpdateResourceTagValue返回参数结构体
 */
export interface UpdateResourceTagValueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 资源创建者UIN
   */
  CreateUin?: number
  /**
   * 资源所在地域，示例：ap-guangzhou 。不区分地域的资源则不需要传入该字段，区分地域的资源必填
   */
  ResourceRegion?: string
  /**
   * 业务类型，示例 ckafka。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
   */
  ServiceType?: string
  /**
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId
   */
  ResourcePrefix?: string
  /**
   * 资源唯一标识（资源六段式中最后一段"/"后面的部分）。注：只输入ResourceId查询时，如资源量大可能较慢，或无法匹配到结果，建议在输入ResourceId的同时也输入ServiceType、ResourcePrefix和ResourceRegion（不区分地域的资源可忽略该参数）。若传入的是cos资源的Id，则CosResourceId 字段请同时传1。
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
   * 是否为cos的资源，取值 0 表示：非cos资源。取值1 表示：cos资源，且此时ResourceId也为必填。不填则默认为 0
   */
  CosResourceId?: number
}

/**
 * UpdateProject返回参数结构体
 */
export interface UpdateProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceTagsByResourceIdsSeq请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsSeqRequest {
  /**
   * 业务类型，示例 cvm 。指资源所属业务类型，也是资源六段式中的第三段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中业务类型为ckafka
   */
  ServiceType: string
  /**
   * 该业务类型对应的资源前缀，示例 cvm对应instance、image、volume等。也是资源六段式中的第六段，例如qcs::ckafka:ap-shanghai:uin/123456789:ckafkaId/ckafka-o85jq584中资源前缀为ckafkaId。cos存储桶为非必填，其他云资源为必填
   */
  ResourcePrefix: string
  /**
   * 资源唯一标记
   */
  ResourceIds: Array<string>
  /**
   * 资源所在地域，示例：ap-guangzhou 不区分地域的资源不需要传入该字段，区分地域的资源必填
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
  /**
   * 标签类型。取值： Custom：自定义标签。 System：系统标签。 All：全部标签。 默认值：All。
   */
  Category?: string
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
