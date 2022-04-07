import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UnTagResourcesResponse, DetachResourcesTagRequest, GetTagValuesResponse, AttachResourcesTagResponse, GetTagKeysResponse, GetResourcesRequest, DeleteTagRequest, DeleteResourceTagResponse, DescribeResourceTagsByTagKeysRequest, ModifyResourceTagsResponse, DescribeTagsRequest, DescribeTagKeysResponse, DescribeTagValuesRequest, DescribeResourcesByTagsUnionRequest, DeleteTagsResponse, ModifyResourcesTagValueResponse, DescribeTagsResponse, DeleteTagsRequest, DescribeTagKeysRequest, GetTagsRequest, UnTagResourcesRequest, DescribeTagsSeqResponse, ModifyResourceTagsRequest, DescribeResourceTagsResponse, DescribeResourceTagsByResourceIdsRequest, DescribeResourcesByTagsUnionResponse, DescribeResourceTagsByResourceIdsResponse, GetTagsResponse, ModifyResourcesTagValueRequest, GetTagKeysRequest, AddResourceTagResponse, DescribeResourcesByTagsResponse, AddResourceTagRequest, DescribeTagValuesSeqResponse, CreateTagRequest, DescribeResourceTagsByTagKeysResponse, DescribeTagsSeqRequest, DescribeTagValuesResponse, AttachResourcesTagRequest, CreateTagResponse, DetachResourcesTagResponse, GetResourcesResponse, DescribeResourceTagsByResourceIdsSeqResponse, DeleteTagResponse, DescribeTagValuesSeqRequest, UpdateResourceTagValueRequest, TagResourcesResponse, CreateTagsRequest, CreateTagsResponse, DescribeResourcesByTagsRequest, TagResourcesRequest, DeleteResourceTagRequest, UpdateResourceTagValueResponse, DescribeResourceTagsRequest, DescribeResourceTagsByResourceIdsSeqRequest, GetTagValuesRequest } from "./tag_models";
/**
 * tag client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于删除一对标签键和标签值
     */
    DeleteTags(req: DeleteTagsRequest, cb?: (error: string, rep: DeleteTagsResponse) => void): Promise<DeleteTagsResponse>;
    /**
     * 根据标签键获取资源标签
     */
    DescribeResourceTagsByTagKeys(req: DescribeResourceTagsByTagKeysRequest, cb?: (error: string, rep: DescribeResourceTagsByTagKeysResponse) => void): Promise<DescribeResourceTagsByTagKeysResponse>;
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    GetTagValues(req: GetTagValuesRequest, cb?: (error: string, rep: GetTagValuesResponse) => void): Promise<GetTagValuesResponse>;
    /**
     * 用于批量查询已有资源关联的标签键值对
     */
    DescribeResourceTagsByResourceIds(req: DescribeResourceTagsByResourceIdsRequest, cb?: (error: string, rep: DescribeResourceTagsByResourceIdsResponse) => void): Promise<DescribeResourceTagsByResourceIdsResponse>;
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     */
    UpdateResourceTagValue(req: UpdateResourceTagValueRequest, cb?: (error: string, rep: UpdateResourceTagValueResponse) => void): Promise<UpdateResourceTagValueResponse>;
    /**
     * 按顺序查看资源关联的标签
     */
    DescribeResourceTagsByResourceIdsSeq(req: DescribeResourceTagsByResourceIdsSeqRequest, cb?: (error: string, rep: DescribeResourceTagsByResourceIdsSeqResponse) => void): Promise<DescribeResourceTagsByResourceIdsSeqResponse>;
    /**
     * 用于获取已建立的标签列表。
     */
    GetTags(req: GetTagsRequest, cb?: (error: string, rep: GetTagsResponse) => void): Promise<GetTagsResponse>;
    /**
     * 修改多个资源关联的某个标签键对应的标签值
     */
    ModifyResourcesTagValue(req: ModifyResourcesTagValueRequest, cb?: (error: string, rep: ModifyResourcesTagValueResponse) => void): Promise<ModifyResourcesTagValueResponse>;
    /**
     * 通过标签查询资源列表
     */
    DescribeResourcesByTags(req: DescribeResourcesByTagsRequest, cb?: (error: string, rep: DescribeResourcesByTagsResponse) => void): Promise<DescribeResourcesByTagsResponse>;
    /**
     * 本接口用于删除一对标签键和标签值
     */
    DeleteTag(req: DeleteTagRequest, cb?: (error: string, rep: DeleteTagResponse) => void): Promise<DeleteTagResponse>;
    /**
     * 查询绑定了标签的资源列表。
     */
    GetResources(req: GetResourcesRequest, cb?: (error: string, rep: GetResourcesResponse) => void): Promise<GetResourcesResponse>;
    /**
     * 查询资源关联标签
     */
    DescribeResourceTags(req: DescribeResourceTagsRequest, cb?: (error: string, rep: DescribeResourceTagsResponse) => void): Promise<DescribeResourceTagsResponse>;
    /**
     * 查询标签键列表。
     */
    GetTagKeys(req: GetTagKeysRequest, cb?: (error: string, rep: GetTagKeysResponse) => void): Promise<GetTagKeysResponse>;
    /**
     * 用于查询已建立的标签列表。

     */
    DescribeTagsSeq(req: DescribeTagsSeqRequest, cb?: (error: string, rep: DescribeTagsSeqResponse) => void): Promise<DescribeTagsSeqResponse>;
    /**
     * 本接口用于给标签关联资源
     */
    AddResourceTag(req: AddResourceTagRequest, cb?: (error: string, rep: AddResourceTagResponse) => void): Promise<AddResourceTagResponse>;
    /**
     * 给多个资源关联某个标签
     */
    AttachResourcesTag(req: AttachResourcesTagRequest, cb?: (error: string, rep: AttachResourcesTagResponse) => void): Promise<AttachResourcesTagResponse>;
    /**
     * 本接口用于创建一对标签键和标签值
     */
    CreateTag(req: CreateTagRequest, cb?: (error: string, rep: CreateTagResponse) => void): Promise<CreateTagResponse>;
    /**
     * 解绑多个资源关联的某个标签
     */
    DetachResourcesTag(req: DetachResourcesTagRequest, cb?: (error: string, rep: DetachResourcesTagResponse) => void): Promise<DetachResourcesTagResponse>;
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    DescribeTagValues(req: DescribeTagValuesRequest, cb?: (error: string, rep: DescribeTagValuesResponse) => void): Promise<DescribeTagValuesResponse>;
    /**
     * 为指定的多个云产品的多个云资源统一创建并绑定标签。
     */
    TagResources(req: TagResourcesRequest, cb?: (error: string, rep: TagResourcesResponse) => void): Promise<TagResourcesResponse>;
    /**
     * 本接口用于解除标签和资源的关联关系
     */
    DeleteResourceTag(req: DeleteResourceTagRequest, cb?: (error: string, rep: DeleteResourceTagResponse) => void): Promise<DeleteResourceTagResponse>;
    /**
     * 用于查询已建立的标签列表。

     */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
     * 用于查询已建立的标签列表中的标签键。

     */
    DescribeTagKeys(req: DescribeTagKeysRequest, cb?: (error: string, rep: DescribeTagKeysResponse) => void): Promise<DescribeTagKeysResponse>;
    /**
     * 指定的多个云产品的多个云资源统一解绑标签。
     */
    UnTagResources(req: UnTagResourcesRequest, cb?: (error: string, rep: UnTagResourcesResponse) => void): Promise<UnTagResourcesResponse>;
    /**
     * 用于查询已建立的标签列表中的标签值。
     */
    DescribeTagValuesSeq(req: DescribeTagValuesSeqRequest, cb?: (error: string, rep: DescribeTagValuesSeqResponse) => void): Promise<DescribeTagValuesSeqResponse>;
    /**
     * 本接口用于创建多对标签键和标签值
     */
    CreateTags(req: CreateTagsRequest, cb?: (error: string, rep: CreateTagsResponse) => void): Promise<CreateTagsResponse>;
    /**
     * 通过标签查询资源列表并集
     */
    DescribeResourcesByTagsUnion(req: DescribeResourcesByTagsUnionRequest, cb?: (error: string, rep: DescribeResourcesByTagsUnionResponse) => void): Promise<DescribeResourcesByTagsUnionResponse>;
    /**
     * 本接口用于修改资源关联的所有标签
     */
    ModifyResourceTags(req: ModifyResourceTagsRequest, cb?: (error: string, rep: ModifyResourceTagsResponse) => void): Promise<ModifyResourceTagsResponse>;
}
