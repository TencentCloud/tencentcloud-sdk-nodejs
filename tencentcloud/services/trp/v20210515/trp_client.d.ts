import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeScanStatsRequest, DescribeScanLogsResponse, DescribeProductsRequest, CreateCorporationOrderResponse, ModifyProductResponse, ModifyProductRequest, ModifyCustomRuleRequest, DeleteCodeBatchRequest, DescribeMerchantsRequest, ModifyTraceCodeRequest, DescribePlanQRCodesResponse, CreateMerchantRequest, DescribeCodeBatchByIdRequest, DescribeTraceCodeByIdResponse, DescribeProductsResponse, CreateTraceChainResponse, DescribeTraceDataListResponse, DescribeTraceCodesRequest, CreateTraceCodesAsyncRequest, ModifyTraceDataResponse, AuthorizedTransferResponse, CreateCodeBatchResponse, DescribeCustomRulesRequest, CreateCustomRuleRequest, DescribeCodePackStatusRequest, ModifyTraceDataRequest, DescribeCodeBatchsRequest, DescribeAgentCorpsResponse, ModifyTraceDataRanksResponse, CreateTraceCodesRequest, DescribeCodeBatchByIdResponse, DescribeCorpQuotasResponse, DescribeCodePackStatusResponse, EffectFeedbackResponse, ModifyCustomRuleResponse, ModifyMerchantResponse, DescribeCodesByPackResponse, CreateProductResponse, CreateTraceDataRequest, CreateCodePackRequest, DescribeCorpQuotasRequest, AuthorizedTransferRequest, ReportBatchCallbackStatusRequest, DescribeCodeBatchesResponse, CreateProductRequest, CreateCustomPackRequest, CreateCodeBatchRequest, DescribeCustomRuleByIdRequest, DescribeAgentCorpsRequest, ReportBatchCallbackStatusResponse, DescribeRawScanLogsRequest, DeleteProductRequest, ModifyTraceDataRanksRequest, ModifyCustomRuleStatusResponse, CreateCustomPackResponse, ModifyMerchantRequest, DescribeTmpTokenResponse, DescribeCodePackUrlRequest, DeleteProductResponse, CreateChainBatchRequest, DeleteTraceDataResponse, ModifyCustomRuleStatusRequest, CreateCodePackResponse, DescribeMerchantByIdResponse, EffectFeedbackRequest, DescribeTraceDataByIdResponse, CreateTraceDataResponse, DescribeCustomRuleByIdResponse, DescribeCodeBatchsResponse, CreateCustomRuleResponse, DescribePlanQRCodeScanRecordsResponse, ModifyTraceCodeUnlinkRequest, DescribeCodePacksResponse, DescribeCodesByPackRequest, DescribeJobFileUrlRequest, CreateTraceCodesAsyncResponse, DescribePlanQRCodeScanRecordsRequest, DescribePlanQRCodesRequest, CreateChainBatchResponse, ModifyCodeBatchRequest, DescribeProductByIdRequest, DescribeTraceCodesResponse, CreateCorporationOrderRequest, CreateTraceCodesResponse, DeleteTraceDataRequest, DescribeScanLogsRequest, ModifyTraceCodeUnlinkResponse, DescribeCodeBatchesRequest, DescribeTmpTokenRequest, DescribeScanStatsResponse, CreateMerchantResponse, DescribeMerchantsResponse, DescribeRawScanLogsResponse, DescribeTraceDataListRequest, DeleteMerchantResponse, DeleteCodeBatchResponse, CreateTraceChainRequest, DescribeMerchantByIdRequest, DescribeTraceDataByIdRequest, DescribeProductByIdResponse, DescribeCodePacksRequest, DescribeJobFileUrlResponse, DescribeCustomRulesResponse, DescribeTraceCodeByIdRequest, ModifyCodeBatchResponse, ModifyTraceCodeResponse, DescribeCodePackUrlResponse, DeleteMerchantRequest } from "./trp_models";
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
     * 查询商品列表
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 查自定义码规则列表
     */
    DescribeCustomRules(req: DescribeCustomRulesRequest, cb?: (error: string, rep: DescribeCustomRulesResponse) => void): Promise<DescribeCustomRulesResponse>;
    /**
     * 解绑溯源码和批次的关系，让溯源码重置为未关联的状态，以便关联其他批次
注意：溯源码必须属于指定的批次才会解绑
     */
    ModifyTraceCodeUnlink(req: ModifyTraceCodeUnlinkRequest, cb?: (error: string, rep: ModifyTraceCodeUnlinkResponse) => void): Promise<ModifyTraceCodeUnlinkResponse>;
    /**
     * 接收客户侧的用户已授权的号码。
     */
    AuthorizedTransfer(req: AuthorizedTransferRequest, cb?: (error: string, rep: AuthorizedTransferResponse) => void): Promise<AuthorizedTransferResponse>;
    /**
     * 查自定义码规则
     */
    DescribeCustomRuleById(req: DescribeCustomRuleByIdRequest, cb?: (error: string, rep: DescribeCustomRuleByIdResponse) => void): Promise<DescribeCustomRuleByIdResponse>;
    /**
     * 支持增量查询扫码日志，通常提供给数据同步使用，调用时需要指定从哪一行开始查询数据
     */
    DescribeRawScanLogs(req: DescribeRawScanLogsRequest, cb?: (error: string, rep: DescribeRawScanLogsResponse) => void): Promise<DescribeRawScanLogsResponse>;
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
     * 查询安心计划二维码列表
     */
    DescribePlanQRCodes(req: DescribePlanQRCodesRequest, cb?: (error: string, rep: DescribePlanQRCodesResponse) => void): Promise<DescribePlanQRCodesResponse>;
    /**
     * 修改溯源信息的排序
     */
    ModifyTraceDataRanks(req: ModifyTraceDataRanksRequest, cb?: (error: string, rep: ModifyTraceDataRanksResponse) => void): Promise<ModifyTraceDataRanksResponse>;
    /**
     * 查询码包的二维码列表，上限 3 万
     */
    DescribeCodesByPack(req: DescribeCodesByPackRequest, cb?: (error: string, rep: DescribeCodesByPackResponse) => void): Promise<DescribeCodesByPackResponse>;
    /**
     * 批量上链接口
     */
    CreateChainBatch(req: CreateChainBatchRequest, cb?: (error: string, rep: CreateChainBatchResponse) => void): Promise<CreateChainBatchResponse>;
    /**
     * 查询商户信息
     */
    DescribeMerchantById(req: DescribeMerchantByIdRequest, cb?: (error: string, rep: DescribeMerchantByIdResponse) => void): Promise<DescribeMerchantByIdResponse>;
    /**
     * 新建商品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 修改自定义码规则
     */
    ModifyCustomRule(req: ModifyCustomRuleRequest, cb?: (error: string, rep: ModifyCustomRuleResponse) => void): Promise<ModifyCustomRuleResponse>;
    /**
     * 查询渠道企业列表
     */
    DescribeAgentCorps(req: DescribeAgentCorpsRequest, cb?: (error: string, rep: DescribeAgentCorpsResponse) => void): Promise<DescribeAgentCorpsResponse>;
    /**
     * 查询渠道商下属企业额度使用情况
     */
    DescribeCorpQuotas(req: DescribeCorpQuotasRequest, cb?: (error: string, rep: DescribeCorpQuotasResponse) => void): Promise<DescribeCorpQuotasResponse>;
    /**
     * 接收离线筛选包回执，用于效果统计和分析。
     */
    ReportBatchCallbackStatus(req: ReportBatchCallbackStatusRequest, cb?: (error: string, rep: ReportBatchCallbackStatusResponse) => void): Promise<ReportBatchCallbackStatusResponse>;
    /**
     * 查询安心计划二维码扫码记录
     */
    DescribePlanQRCodeScanRecords(req: DescribePlanQRCodeScanRecordsRequest, cb?: (error: string, rep: DescribePlanQRCodeScanRecordsResponse) => void): Promise<DescribePlanQRCodeScanRecordsResponse>;
    /**
     * 修改溯源信息
     */
    ModifyTraceData(req: ModifyTraceDataRequest, cb?: (error: string, rep: ModifyTraceDataResponse) => void): Promise<ModifyTraceDataResponse>;
    /**
     * 查询批次列表
     */
    DescribeCodeBatches(req: DescribeCodeBatchesRequest, cb?: (error: string, rep: DescribeCodeBatchesResponse) => void): Promise<DescribeCodeBatchesResponse>;
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
     * 批量绑定指定批次并激活二维码，只支持平台发的码，且只会激活没有使用过的码
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
     * 查询溯源ID查溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
     */
    DescribeTraceDataById(req: DescribeTraceDataByIdRequest, cb?: (error: string, rep: DescribeTraceDataByIdResponse) => void): Promise<DescribeTraceDataByIdResponse>;
    /**
     * 以订单方式新建企业信息/配额信息
     */
    CreateCorporationOrder(req: CreateCorporationOrderRequest, cb?: (error: string, rep: CreateCorporationOrderResponse) => void): Promise<CreateCorporationOrderResponse>;
    /**
     * 删除商户
     */
    DeleteMerchant(req: DeleteMerchantRequest, cb?: (error: string, rep: DeleteMerchantResponse) => void): Promise<DeleteMerchantResponse>;
    /**
     * 查询扫码的统计信息列表，支持按照商户ID，产品ID，批次ID，安心码筛选，筛选条件至少有一个
没有被扫过的不会返回
     */
    DescribeScanStats(req: DescribeScanStatsRequest, cb?: (error: string, rep: DescribeScanStatsResponse) => void): Promise<DescribeScanStatsResponse>;
    /**
     * 查询码包状态
     */
    DescribeCodePackStatus(req: DescribeCodePackStatusRequest, cb?: (error: string, rep: DescribeCodePackStatusResponse) => void): Promise<DescribeCodePackStatusResponse>;
    /**
     * 查询批次列表

旧版接口已经弃用，新业务请使用新版的接口 DescribeCodeBatches
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
     * 接收客户反馈的各环节数据
     */
    EffectFeedback(req: EffectFeedbackRequest, cb?: (error: string, rep: EffectFeedbackResponse) => void): Promise<EffectFeedbackResponse>;
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
     * 生成普通码包
     */
    CreateCodePack(req: CreateCodePackRequest, cb?: (error: string, rep: CreateCodePackResponse) => void): Promise<CreateCodePackResponse>;
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
     * 查询扫码日志明细
     */
    DescribeScanLogs(req: DescribeScanLogsRequest, cb?: (error: string, rep: DescribeScanLogsResponse) => void): Promise<DescribeScanLogsResponse>;
    /**
     * 修改批次
     */
    ModifyCodeBatch(req: ModifyCodeBatchRequest, cb?: (error: string, rep: ModifyCodeBatchResponse) => void): Promise<ModifyCodeBatchResponse>;
    /**
     * 查询商户列表
     */
    DescribeMerchants(req: DescribeMerchantsRequest, cb?: (error: string, rep: DescribeMerchantsResponse) => void): Promise<DescribeMerchantsResponse>;
    /**
     * 新建商户
     */
    CreateMerchant(req: CreateMerchantRequest, cb?: (error: string, rep: CreateMerchantResponse) => void): Promise<CreateMerchantResponse>;
    /**
     * 获取异步任务的输出地址
     */
    DescribeJobFileUrl(req: DescribeJobFileUrlRequest, cb?: (error: string, rep: DescribeJobFileUrlResponse) => void): Promise<DescribeJobFileUrlResponse>;
}
