import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProductsRequest, CreateCorporationOrderResponse, ModifyProductResponse, ModifyProductRequest, ModifyCustomRuleRequest, DeleteCodeBatchRequest, DescribeMerchantsRequest, ModifyTraceCodeRequest, DescribeCustomRulesResponse, CreateMerchantRequest, DescribeCodeBatchByIdRequest, DescribeTraceCodeByIdResponse, DescribeProductsResponse, CreateCodeBatchResponse, DescribeTraceDataListResponse, DescribeTraceCodesRequest, CreateTraceCodesAsyncRequest, ModifyTraceDataResponse, DeleteProductRequest, CreateTraceChainResponse, CreateCustomRuleRequest, DescribeCodePackStatusRequest, ModifyTraceDataRequest, DescribeCodeBatchsRequest, ModifyTraceDataRanksResponse, CreateTraceCodesRequest, DescribeCodeBatchByIdResponse, DescribeCorpQuotasResponse, DescribeCodePackStatusResponse, ModifyCustomRuleResponse, ModifyMerchantResponse, DescribeCodesByPackResponse, CreateProductResponse, CreateTraceDataRequest, DescribeCorpQuotasRequest, CreateProductRequest, CreateCustomPackRequest, CreateCodePackRequest, CreateCodeBatchRequest, DescribeCustomRuleByIdRequest, ModifyTraceDataRanksRequest, ModifyCustomRuleStatusResponse, CreateCustomPackResponse, ModifyMerchantRequest, DescribeTmpTokenResponse, DescribeCodePackUrlRequest, DeleteProductResponse, DeleteTraceDataResponse, ModifyCustomRuleStatusRequest, CreateCodePackResponse, DescribeMerchantByIdResponse, CreateTraceDataResponse, DescribeCustomRuleByIdResponse, DescribeCodeBatchsResponse, CreateCustomRuleResponse, DescribeCodePacksResponse, DescribeCodesByPackRequest, DescribeJobFileUrlRequest, CreateTraceCodesAsyncResponse, DescribeCustomRulesRequest, ModifyCodeBatchRequest, DescribeProductByIdRequest, DescribeTraceCodesResponse, CreateCorporationOrderRequest, CreateTraceCodesResponse, DeleteTraceDataRequest, DescribeTmpTokenRequest, CreateMerchantResponse, DescribeMerchantsResponse, DescribeTraceDataListRequest, DeleteMerchantResponse, DeleteCodeBatchResponse, CreateTraceChainRequest, DescribeMerchantByIdRequest, DescribeProductByIdResponse, DescribeCodePacksRequest, DescribeJobFileUrlResponse, DescribeTraceCodeByIdRequest, DeleteMerchantRequest, ModifyTraceCodeResponse, DescribeCodePackUrlResponse, ModifyCodeBatchResponse } from "./trp_models";
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
     * 查自定义码规则列表
     */
    DescribeCustomRules(req: DescribeCustomRulesRequest, cb?: (error: string, rep: DescribeCustomRulesResponse) => void): Promise<DescribeCustomRulesResponse>;
    /**
     * 修改溯源信息的排序
     */
    ModifyTraceDataRanks(req: ModifyTraceDataRanksRequest, cb?: (error: string, rep: ModifyTraceDataRanksResponse) => void): Promise<ModifyTraceDataRanksResponse>;
    /**
     * 查自定义码规则
     */
    DescribeCustomRuleById(req: DescribeCustomRuleByIdRequest, cb?: (error: string, rep: DescribeCustomRuleByIdResponse) => void): Promise<DescribeCustomRuleByIdResponse>;
    /**
     * 异步导入激活码包，如果是第三方码包，需要域名跟配置的匹配
     */
    CreateTraceCodesAsync(req: CreateTraceCodesAsyncRequest, cb?: (error: string, rep: CreateTraceCodesAsyncResponse) => void): Promise<CreateTraceCodesAsyncResponse>;
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
     * 查询渠道商下属企业额度使用情况
     */
    DescribeCorpQuotas(req: DescribeCorpQuotasRequest, cb?: (error: string, rep: DescribeCorpQuotasResponse) => void): Promise<DescribeCorpQuotasResponse>;
    /**
     * 修改自定义码规则
     */
    ModifyCustomRule(req: ModifyCustomRuleRequest, cb?: (error: string, rep: ModifyCustomRuleResponse) => void): Promise<ModifyCustomRuleResponse>;
    /**
     * 修改溯源信息
     */
    ModifyTraceData(req: ModifyTraceDataRequest, cb?: (error: string, rep: ModifyTraceDataResponse) => void): Promise<ModifyTraceDataResponse>;
    /**
     * 编辑商品
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 更新自定义码规则状态
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 查询商品信息
     */
    DescribeProductById(req: DescribeProductByIdRequest, cb?: (error: string, rep: DescribeProductByIdResponse) => void): Promise<DescribeProductByIdResponse>;
    /**
     * 查询临时Token，主要用于上传接口
     */
    DescribeTmpToken(req: DescribeTmpTokenRequest, cb?: (error: string, rep: DescribeTmpTokenResponse) => void): Promise<DescribeTmpTokenResponse>;
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
     * 生成自定义码包
     */
    CreateCustomPack(req: CreateCustomPackRequest, cb?: (error: string, rep: CreateCustomPackResponse) => void): Promise<CreateCustomPackResponse>;
    /**
     * 以订单方式新建企业信息/配额信息
     */
    CreateCorporationOrder(req: CreateCorporationOrderRequest, cb?: (error: string, rep: CreateCorporationOrderResponse) => void): Promise<CreateCorporationOrderResponse>;
    /**
     * 删除商户
     */
    DeleteMerchant(req: DeleteMerchantRequest, cb?: (error: string, rep: DeleteMerchantResponse) => void): Promise<DeleteMerchantResponse>;
    /**
     * 查询码包状态
     */
    DescribeCodePackStatus(req: DescribeCodePackStatusRequest, cb?: (error: string, rep: DescribeCodePackStatusResponse) => void): Promise<DescribeCodePackStatusResponse>;
    /**
     * 查询批次列表
     */
    DescribeCodeBatchs(req: DescribeCodeBatchsRequest, cb?: (error: string, rep: DescribeCodeBatchsResponse) => void): Promise<DescribeCodeBatchsResponse>;
    /**
     * 新建自定义码规则
     */
    CreateCustomRule(req: CreateCustomRuleRequest, cb?: (error: string, rep: CreateCustomRuleResponse) => void): Promise<CreateCustomRuleResponse>;
    /**
     * 查询码包地址
     */
    DescribeCodePackUrl(req: DescribeCodePackUrlRequest, cb?: (error: string, rep: DescribeCodePackUrlResponse) => void): Promise<DescribeCodePackUrlResponse>;
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
     * 删除溯源信息，如果已经上链则不可删除
     */
    DeleteTraceData(req: DeleteTraceDataRequest, cb?: (error: string, rep: DeleteTraceDataResponse) => void): Promise<DeleteTraceDataResponse>;
    /**
     * 新增溯源信息
     */
    CreateTraceData(req: CreateTraceDataRequest, cb?: (error: string, rep: CreateTraceDataResponse) => void): Promise<CreateTraceDataResponse>;
    /**
     * 新建商户
     */
    CreateMerchant(req: CreateMerchantRequest, cb?: (error: string, rep: CreateMerchantResponse) => void): Promise<CreateMerchantResponse>;
    /**
     * 查询溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
     */
    DescribeTraceDataList(req: DescribeTraceDataListRequest, cb?: (error: string, rep: DescribeTraceDataListResponse) => void): Promise<DescribeTraceDataListResponse>;
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
     * 生成普通码包
     */
    CreateCodePack(req: CreateCodePackRequest, cb?: (error: string, rep: CreateCodePackResponse) => void): Promise<CreateCodePackResponse>;
    /**
     * 获取异步任务的输出地址
     */
    DescribeJobFileUrl(req: DescribeJobFileUrlRequest, cb?: (error: string, rep: DescribeJobFileUrlResponse) => void): Promise<DescribeJobFileUrlResponse>;
}
