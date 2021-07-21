/**
 * 表示一个标签键值对以及是否允许删除
 */
export interface TagWithDelete {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
    /**
      * 是否可以删除
      */
    CanDelete: number;
}
/**
 * DetachResourcesTag请求参数结构体
 */
export interface DetachResourcesTagRequest {
    /**
      * 资源所属业务名称（资源六段式中的第三段）
      */
    ServiceType: string;
    /**
      * 资源ID数组，资源个数最多为50
      */
    ResourceIds: Array<string>;
    /**
      * 需要解绑的标签键
      */
    TagKey: string;
    /**
      * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
      */
    ResourceRegion?: string;
    /**
      * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
      */
    ResourcePrefix?: string;
}
/**
 * AttachResourcesTag返回参数结构体
 */
export interface AttachResourcesTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTag请求参数结构体
 */
export interface DeleteTagRequest {
    /**
      * 需要删除的标签键
      */
    TagKey: string;
    /**
      * 需要删除的标签值
      */
    TagValue: string;
}
/**
 * DeleteResourceTag返回参数结构体
 */
export interface DeleteResourceTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceTagsByTagKeys请求参数结构体
 */
export interface DescribeResourceTagsByTagKeysRequest {
    /**
      * 业务类型
      */
    ServiceType: string;
    /**
      * 资源前缀
      */
    ResourcePrefix: string;
    /**
      * 资源地域
      */
    ResourceRegion: string;
    /**
      * 资源唯一标识
      */
    ResourceIds: Array<string>;
    /**
      * 资源标签键
      */
    TagKeys: Array<string>;
    /**
      * 每页大小，默认为 400
      */
    Limit?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
}
/**
 * ModifyResourceTags返回参数结构体
 */
export interface ModifyResourceTagsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTags请求参数结构体
 */
export interface DescribeTagsRequest {
    /**
      * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
      */
    TagKey?: string;
    /**
      * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
      */
    TagValue?: string;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
      */
    CreateUin?: number;
    /**
      * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
      */
    TagKeys?: Array<string>;
    /**
      * 是否展现项目标签
      */
    ShowProject?: number;
}
/**
 * DescribeTagKeys返回参数结构体
 */
export interface DescribeTagKeysResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTagValues请求参数结构体
 */
export interface DescribeTagValuesRequest {
    /**
      * 标签键列表
      */
    TagKeys: Array<string>;
    /**
      * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
      */
    CreateUin?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
}
/**
 * ModifyResourceTags请求参数结构体
 */
export interface ModifyResourceTagsRequest {
    /**
      * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
      */
    Resource: string;
    /**
      * 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
      */
    ReplaceTags?: Array<Tag>;
    /**
      * 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
      */
    DeleteTags?: Array<TagKeyObject>;
}
/**
 * DescribeResourcesByTagsUnion请求参数结构体
 */
export interface DescribeResourcesByTagsUnionRequest {
    /**
      * 标签过滤数组
      */
    TagFilters: Array<TagFilter>;
    /**
      * 创建标签者uin
      */
    CreateUin?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 资源前缀
      */
    ResourcePrefix?: string;
    /**
      * 资源唯一标记
      */
    ResourceId?: string;
    /**
      * 资源所在地域
      */
    ResourceRegion?: string;
    /**
      * 业务类型
      */
    ServiceType?: string;
}
/**
 * DescribeTags返回参数结构体
 */
export interface DescribeTagsResponse {
    /**
      * 结果总数
      */
    TotalCount: number;
    /**
      * 数据位移偏量
      */
    Offset: number;
    /**
      * 每页大小
      */
    Limit: number;
    /**
      * 标签列表
      */
    Tags: Array<TagWithDelete>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourcesByTags返回参数结构体
 */
export interface DescribeResourcesByTagsResponse {
    /**
      * 结果总数
      */
    TotalCount: number;
    /**
      * 数据位移偏量
      */
    Offset: number;
    /**
      * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Limit: number;
    /**
      * 资源标签
      */
    Rows: Array<ResourceTag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTagKeys请求参数结构体
 */
export interface DescribeTagKeysRequest {
    /**
      * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
      */
    CreateUin?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 是否展现项目
      */
    ShowProject?: number;
}
/**
 * DescribeTagsSeq返回参数结构体
 */
export interface DescribeTagsSeqResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<TagWithDelete>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceTags返回参数结构体
 */
export interface DescribeResourceTagsResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Limit?: number;
    /**
      * 资源标签
      */
    Rows?: Array<TagResource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceTagsByResourceIds请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsRequest {
    /**
      * 业务类型
      */
    ServiceType: string;
    /**
      * 资源前缀
      */
    ResourcePrefix: string;
    /**
      * 资源ID数组，大小不超过50
      */
    ResourceIds: Array<string>;
    /**
      * 资源所在地域
      */
    ResourceRegion: string;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
}
/**
 * DescribeResourcesByTagsUnion返回参数结构体
 */
export interface DescribeResourcesByTagsUnionResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 资源标签
      */
    Rows?: Array<ResourceTag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceTagsByResourceIds返回参数结构体
 */
export interface DescribeResourceTagsByResourceIdsResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<TagResource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyResourcesTagValue请求参数结构体
 */
export interface ModifyResourcesTagValueRequest {
    /**
      * 资源所属业务名称（资源六段式中的第三段）
      */
    ServiceType: string;
    /**
      * 资源ID数组，资源个数最多为50
      */
    ResourceIds: Array<string>;
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
    /**
      * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
      */
    ResourceRegion?: string;
    /**
      * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
      */
    ResourcePrefix?: string;
}
/**
 * 标签键值对以及资源ID
 */
export interface TagResource {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
    /**
      * 资源ID
      */
    ResourceId: string;
    /**
      * 标签键MD5值
      */
    TagKeyMd5: string;
    /**
      * 标签值MD5值
      */
    TagValueMd5: string;
    /**
      * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceType: string;
}
/**
 * AddResourceTag返回参数结构体
 */
export interface AddResourceTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyResourcesTagValue返回参数结构体
 */
export interface ModifyResourcesTagValueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddResourceTag请求参数结构体
 */
export interface AddResourceTagRequest {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
    /**
      * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
      */
    Resource: string;
}
/**
 * DescribeTagValuesSeq返回参数结构体
 */
export interface DescribeTagValuesSeqResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTag请求参数结构体
 */
export interface CreateTagRequest {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * DescribeResourceTagsByTagKeys返回参数结构体
 */
export interface DescribeResourceTagsByTagKeysResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 资源标签
      */
    Rows?: Array<ResourceIdTag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTagsSeq请求参数结构体
 */
export interface DescribeTagsSeqRequest {
    /**
      * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
      */
    TagKey?: string;
    /**
      * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
      */
    TagValue?: string;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
      */
    CreateUin?: number;
    /**
      * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
      */
    TagKeys?: Array<string>;
    /**
      * 是否展现项目标签
      */
    ShowProject?: number;
}
/**
 * DescribeTagValues返回参数结构体
 */
export interface DescribeTagValuesResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * tag过滤数组多个是与的关系
 */
export interface TagFilter {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值数组 多个值的话是或的关系
      */
    TagValue?: Array<string>;
}
/**
 * 表示一个标签键值对
 */
export interface Tag {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * AttachResourcesTag请求参数结构体
 */
export interface AttachResourcesTagRequest {
    /**
      * 资源所属业务名称（资源六段式中的第三段）
      */
    ServiceType: string;
    /**
      * 资源ID数组，资源个数最多为50
      */
    ResourceIds: Array<string>;
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
    /**
      * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
      */
    ResourceRegion?: string;
    /**
      * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
      */
    ResourcePrefix?: string;
}
/**
 * CreateTag返回参数结构体
 */
export interface CreateTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetachResourcesTag返回参数结构体
 */
export interface DetachResourcesTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceTagsByResourceIdsSeq返回参数结构体
 */
export interface DescribeResourceTagsByResourceIdsSeqResponse {
    /**
      * 结果总数
      */
    TotalCount?: number;
    /**
      * 数据位移偏量
      */
    Offset?: number;
    /**
      * 每页大小
      */
    Limit?: number;
    /**
      * 标签列表
      */
    Tags?: Array<TagResource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTag返回参数结构体
 */
export interface DeleteTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源标签键值
 */
export interface ResourceIdTag {
    /**
      * 资源唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKeyValues: Array<Tag>;
}
/**
 * DescribeTagValuesSeq请求参数结构体
 */
export interface DescribeTagValuesSeqRequest {
    /**
      * 标签键列表
      */
    TagKeys: Array<string>;
    /**
      * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
      */
    CreateUin?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
}
/**
 * UpdateResourceTagValue请求参数结构体
 */
export interface UpdateResourceTagValueRequest {
    /**
      * 资源关联的标签键
      */
    TagKey: string;
    /**
      * 修改后的标签值
      */
    TagValue: string;
    /**
      * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
      */
    Resource: string;
}
/**
 * DescribeResourcesByTags请求参数结构体
 */
export interface DescribeResourcesByTagsRequest {
    /**
      * 标签过滤数组
      */
    TagFilters: Array<TagFilter>;
    /**
      * 创建标签者uin
      */
    CreateUin?: number;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 资源前缀
      */
    ResourcePrefix?: string;
    /**
      * 资源唯一标记
      */
    ResourceId?: string;
    /**
      * 资源所在地域
      */
    ResourceRegion?: string;
    /**
      * 业务类型
      */
    ServiceType?: string;
}
/**
 * DeleteResourceTag请求参数结构体
 */
export interface DeleteResourceTagRequest {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
      */
    Resource: string;
}
/**
 * UpdateResourceTagValue返回参数结构体
 */
export interface UpdateResourceTagValueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签键对象
 */
export interface TagKeyObject {
    /**
      * 标签键
      */
    TagKey: string;
}
/**
 * DescribeResourceTags请求参数结构体
 */
export interface DescribeResourceTagsRequest {
    /**
      * 创建者uin
      */
    CreateUin?: number;
    /**
      * 资源所在地域
      */
    ResourceRegion?: string;
    /**
      * 业务类型
      */
    ServiceType?: string;
    /**
      * 资源前缀
      */
    ResourcePrefix?: string;
    /**
      * 资源唯一标识。只输入ResourceId进行查询可能会查询较慢，或者无法匹配到结果，建议在输入ResourceId的同时也输入ServiceType、ResourcePrefix和ResourceRegion（不区分地域的资源可忽略该参数）
      */
    ResourceId?: string;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
    /**
      * 是否是cos的资源（0或者1），输入的ResourceId为cos资源时必填
      */
    CosResourceId?: number;
}
/**
 * DescribeResourceTagsByResourceIdsSeq请求参数结构体
 */
export interface DescribeResourceTagsByResourceIdsSeqRequest {
    /**
      * 业务类型
      */
    ServiceType: string;
    /**
      * 资源前缀
      */
    ResourcePrefix: string;
    /**
      * 资源唯一标记
      */
    ResourceIds: Array<string>;
    /**
      * 资源所在地域
      */
    ResourceRegion: string;
    /**
      * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
      */
    Offset?: number;
    /**
      * 每页大小，默认为 15
      */
    Limit?: number;
}
/**
 * 资源标签
 */
export interface ResourceTag {
    /**
      * 资源所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceRegion: string;
    /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceType: string;
    /**
      * 资源前缀
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourcePrefix: string;
    /**
      * 资源唯一标记
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
