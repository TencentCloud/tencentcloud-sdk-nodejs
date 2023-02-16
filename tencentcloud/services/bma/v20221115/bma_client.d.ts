import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateBPFakeAPPResponse, DeleteBPWhiteListResponse, DescribeBPBrandsResponse, DescribeBPBrandsRequest, CreateBPBrandRequest, DescribeBPFakeURLsRequest, DescribeBPFakeURLsResponse, CreateBPFakeURLRequest, CreateBPFakeAPPListResponse, DescribeBPWhiteListsResponse, CreateBPFakeAPPListRequest, CreateBPWhiteListResponse, DeleteBPWhiteListRequest, DescribeBPWhiteListsRequest, CreateBPFakeURLsResponse, DescribeBPFakeAPPListRequest, CreateBPFakeAPPRequest, CreateBPBrandResponse, CreateBPFakeURLResponse, CreateBPWhiteListRequest, CreateBPFakeURLsRequest, DescribeBPFakeAPPListResponse } from "./bma_models";
/**
 * bma client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询白名单列表
     */
    DescribeBPWhiteLists(req: DescribeBPWhiteListsRequest, cb?: (error: string, rep: DescribeBPWhiteListsResponse) => void): Promise<DescribeBPWhiteListsResponse>;
    /**
     * 添加白名单
     */
    CreateBPWhiteList(req: CreateBPWhiteListRequest, cb?: (error: string, rep: CreateBPWhiteListResponse) => void): Promise<CreateBPWhiteListResponse>;
    /**
     * 仿冒应用举报
     */
    CreateBPFakeAPP(req: CreateBPFakeAPPRequest, cb?: (error: string, rep: CreateBPFakeAPPResponse) => void): Promise<CreateBPFakeAPPResponse>;
    /**
     * 删除白名单
     */
    DeleteBPWhiteList(req: DeleteBPWhiteListRequest, cb?: (error: string, rep: DeleteBPWhiteListResponse) => void): Promise<DeleteBPWhiteListResponse>;
    /**
     * 批量仿冒网址举报
     */
    CreateBPFakeURLs(req: CreateBPFakeURLsRequest, cb?: (error: string, rep: CreateBPFakeURLsResponse) => void): Promise<CreateBPFakeURLsResponse>;
    /**
     * 添加品牌
     */
    CreateBPBrand(req: CreateBPBrandRequest, cb?: (error: string, rep: CreateBPBrandResponse) => void): Promise<CreateBPBrandResponse>;
    /**
     * 查询品牌列表
     */
    DescribeBPBrands(req?: DescribeBPBrandsRequest, cb?: (error: string, rep: DescribeBPBrandsResponse) => void): Promise<DescribeBPBrandsResponse>;
    /**
     * 批量仿冒应用举报
     */
    CreateBPFakeAPPList(req: CreateBPFakeAPPListRequest, cb?: (error: string, rep: CreateBPFakeAPPListResponse) => void): Promise<CreateBPFakeAPPListResponse>;
    /**
     * 查询仿冒应用列表
     */
    DescribeBPFakeAPPList(req: DescribeBPFakeAPPListRequest, cb?: (error: string, rep: DescribeBPFakeAPPListResponse) => void): Promise<DescribeBPFakeAPPListResponse>;
    /**
     * 查询仿冒网址列表
     */
    DescribeBPFakeURLs(req: DescribeBPFakeURLsRequest, cb?: (error: string, rep: DescribeBPFakeURLsResponse) => void): Promise<DescribeBPFakeURLsResponse>;
    /**
     * 仿冒网址举报
     */
    CreateBPFakeURL(req: CreateBPFakeURLRequest, cb?: (error: string, rep: CreateBPFakeURLResponse) => void): Promise<CreateBPFakeURLResponse>;
}
