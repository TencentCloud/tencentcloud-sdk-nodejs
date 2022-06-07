import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteProductRequest, ModifyCodeBatchRequest, CreateCodeBatchResponse, DescribeProductByIdRequest, ModifyTraceDataRanksRequest, CreateTraceCodesResponse, DescribeTraceCodesResponse, DeleteTraceDataRequest, ModifyMerchantRequest, ModifyProductResponse, ModifyTraceDataRequest, CreateMerchantResponse, DescribeMerchantByIdRequest, ModifyTraceDataRanksResponse, CreateTraceCodesRequest, DeleteProductResponse, DescribeCodeBatchsRequest, DescribeProductsRequest, DescribeCodeBatchByIdResponse, DeleteTraceDataResponse, ModifyProductRequest, CreateCodePackResponse, DescribeMerchantsResponse, DescribeTraceDataListRequest, DescribeMerchantByIdResponse, ModifyMerchantResponse, DeleteMerchantResponse, DescribeCodesByPackResponse, DeleteCodeBatchResponse, DescribeTraceDataListResponse, CreateTraceChainRequest, DeleteCodeBatchRequest, DescribeMerchantsRequest, ModifyTraceCodeRequest, CreateProductResponse, CreateTraceDataResponse, CreateTraceDataRequest, CreateMerchantRequest, DescribeCodeBatchsResponse, DescribeCodeBatchByIdRequest, DescribeTraceCodeByIdResponse, DescribeCodePacksResponse, DescribeProductByIdResponse, DescribeCodesByPackRequest, DescribeCodePacksRequest, DescribeProductsResponse, CreateProductRequest, CreateTraceChainResponse, DescribeTraceCodeByIdRequest, CreateCodePackRequest, CreateCodeBatchRequest, ModifyCodeBatchResponse, DescribeTraceCodesRequest, ModifyTraceCodeResponse, DeleteMerchantRequest, ModifyTraceDataResponse } from "./trp_models";
/**
 * trp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询二维码信息
     */
    DescribeTraceCodeById(req: DescribeTraceCodeByIdRequest, cb?: (error: string, rep: DescribeTraceCodeByIdResponse) => void): Promise<DescribeTraceCodeByIdResponse>;
    /**
     * 修改溯源信息的排序
     */
    ModifyTraceDataRanks(req: ModifyTraceDataRanksRequest, cb?: (error: string, rep: ModifyTraceDataRanksResponse) => void): Promise<ModifyTraceDataRanksResponse>;
    /**
     * 编辑商品
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 查询批次信息
     */
    DescribeCodeBatchById(req: DescribeCodeBatchByIdRequest, cb?: (error: string, rep: DescribeCodeBatchByIdResponse) => void): Promise<DescribeCodeBatchByIdResponse>;
    /**
     * 查询二维码列表
     */
    DescribeTraceCodes(req: DescribeTraceCodesRequest, cb?: (error: string, rep: DescribeTraceCodesResponse) => void): Promise<DescribeTraceCodesResponse>;
    /**
     * 查询码包的二维码列表，上限 3 万
     */
    DescribeCodesByPack(req: DescribeCodesByPackRequest, cb?: (error: string, rep: DescribeCodesByPackResponse) => void): Promise<DescribeCodesByPackResponse>;
    /**
     * 查询商户信息
     */
    DescribeMerchantById(req: DescribeMerchantByIdRequest, cb?: (error: string, rep: DescribeMerchantByIdResponse) => void): Promise<DescribeMerchantByIdResponse>;
    /**
     * 新建商品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 查询商品列表
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 修改溯源信息
     */
    ModifyTraceData(req: ModifyTraceDataRequest, cb?: (error: string, rep: ModifyTraceDataResponse) => void): Promise<ModifyTraceDataResponse>;
    /**
     * 查询商品信息
     */
    DescribeProductById(req: DescribeProductByIdRequest, cb?: (error: string, rep: DescribeProductByIdResponse) => void): Promise<DescribeProductByIdResponse>;
    /**
     * 批量导入二维码，只支持平台发的码
     */
    CreateTraceCodes(req: CreateTraceCodesRequest, cb?: (error: string, rep: CreateTraceCodesResponse) => void): Promise<CreateTraceCodesResponse>;
    /**
     * 删除商品，如果商品被使用，则不可删除
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 上链溯源信息
     */
    CreateTraceChain(req: CreateTraceChainRequest, cb?: (error: string, rep: CreateTraceChainResponse) => void): Promise<CreateTraceChainResponse>;
    /**
     * 删除商户
     */
    DeleteMerchant(req: DeleteMerchantRequest, cb?: (error: string, rep: DeleteMerchantResponse) => void): Promise<DeleteMerchantResponse>;
    /**
     * 查询批次列表
     */
    DescribeCodeBatchs(req: DescribeCodeBatchsRequest, cb?: (error: string, rep: DescribeCodeBatchsResponse) => void): Promise<DescribeCodeBatchsResponse>;
    /**
     * 编辑商户
     */
    ModifyMerchant(req: ModifyMerchantRequest, cb?: (error: string, rep: ModifyMerchantResponse) => void): Promise<ModifyMerchantResponse>;
    /**
     * 新增批次
     */
    CreateCodeBatch(req: CreateCodeBatchRequest, cb?: (error: string, rep: CreateCodeBatchResponse) => void): Promise<CreateCodeBatchResponse>;
    /**
     * 删除批次
     */
    DeleteCodeBatch(req: DeleteCodeBatchRequest, cb?: (error: string, rep: DeleteCodeBatchResponse) => void): Promise<DeleteCodeBatchResponse>;
    /**
     * 查询溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
     */
    DescribeTraceDataList(req: DescribeTraceDataListRequest, cb?: (error: string, rep: DescribeTraceDataListResponse) => void): Promise<DescribeTraceDataListResponse>;
    /**
     * 新增溯源信息
     */
    CreateTraceData(req: CreateTraceDataRequest, cb?: (error: string, rep: CreateTraceDataResponse) => void): Promise<CreateTraceDataResponse>;
    /**
     * 新建商户
     */
    CreateMerchant(req: CreateMerchantRequest, cb?: (error: string, rep: CreateMerchantResponse) => void): Promise<CreateMerchantResponse>;
    /**
     * 删除溯源信息，如果已经上链则不可删除
     */
    DeleteTraceData(req: DeleteTraceDataRequest, cb?: (error: string, rep: DeleteTraceDataResponse) => void): Promise<DeleteTraceDataResponse>;
    /**
     * 冻结或者激活二维码，所属的批次的冻结状态优先级大于单个二维码的状态，即如果批次是冻结的，那么该批次下二维码的状态都是冻结的
     */
    ModifyTraceCode(req: ModifyTraceCodeRequest, cb?: (error: string, rep: ModifyTraceCodeResponse) => void): Promise<ModifyTraceCodeResponse>;
    /**
     * 查询码包列表
     */
    DescribeCodePacks(req: DescribeCodePacksRequest, cb?: (error: string, rep: DescribeCodePacksResponse) => void): Promise<DescribeCodePacksResponse>;
    /**
     * 修改批次
     */
    ModifyCodeBatch(req: ModifyCodeBatchRequest, cb?: (error: string, rep: ModifyCodeBatchResponse) => void): Promise<ModifyCodeBatchResponse>;
    /**
     * 查询商户列表
     */
    DescribeMerchants(req: DescribeMerchantsRequest, cb?: (error: string, rep: DescribeMerchantsResponse) => void): Promise<DescribeMerchantsResponse>;
    /**
     * 生成码包
     */
    CreateCodePack(req: CreateCodePackRequest, cb?: (error: string, rep: CreateCodePackResponse) => void): Promise<CreateCodePackResponse>;
}
