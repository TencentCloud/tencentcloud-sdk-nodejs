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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CodeBatch = models.CodeBatch;
const DescribeScanLogsResponse = models.DescribeScanLogsResponse;
const Quota = models.Quota;
const ScanLog = models.ScanLog;
const DescribeProductsRequest = models.DescribeProductsRequest;
const CreateCorporationOrderResponse = models.CreateCorporationOrderResponse;
const ModifyProductResponse = models.ModifyProductResponse;
const ModifyProductRequest = models.ModifyProductRequest;
const ModifyCustomRuleRequest = models.ModifyCustomRuleRequest;
const CodePart = models.CodePart;
const CodePack = models.CodePack;
const DeleteCodeBatchRequest = models.DeleteCodeBatchRequest;
const DescribeMerchantsRequest = models.DescribeMerchantsRequest;
const ModifyTraceCodeRequest = models.ModifyTraceCodeRequest;
const DescribeCustomRulesResponse = models.DescribeCustomRulesResponse;
const CreateMerchantRequest = models.CreateMerchantRequest;
const DescribeCodeBatchByIdRequest = models.DescribeCodeBatchByIdRequest;
const DescribeTraceCodeByIdResponse = models.DescribeTraceCodeByIdResponse;
const CustomRule = models.CustomRule;
const DescribeProductsResponse = models.DescribeProductsResponse;
const CreateCodeBatchResponse = models.CreateCodeBatchResponse;
const DescribeTraceDataListResponse = models.DescribeTraceDataListResponse;
const DescribeTraceCodesRequest = models.DescribeTraceCodesRequest;
const CreateTraceCodesAsyncRequest = models.CreateTraceCodesAsyncRequest;
const ModifyTraceDataResponse = models.ModifyTraceDataResponse;
const DeleteProductRequest = models.DeleteProductRequest;
const CreateTraceChainResponse = models.CreateTraceChainResponse;
const CorpQuota = models.CorpQuota;
const CreateCustomRuleRequest = models.CreateCustomRuleRequest;
const DescribeCodePackStatusRequest = models.DescribeCodePackStatusRequest;
const ModifyTraceDataRequest = models.ModifyTraceDataRequest;
const DescribeCodeBatchsRequest = models.DescribeCodeBatchsRequest;
const ModifyTraceDataRanksResponse = models.ModifyTraceDataRanksResponse;
const CreateTraceCodesRequest = models.CreateTraceCodesRequest;
const DescribeCodeBatchByIdResponse = models.DescribeCodeBatchByIdResponse;
const DescribeCorpQuotasResponse = models.DescribeCorpQuotasResponse;
const DescribeCodePackStatusResponse = models.DescribeCodePackStatusResponse;
const Job = models.Job;
const TraceData = models.TraceData;
const PackSpec = models.PackSpec;
const ModifyCustomRuleResponse = models.ModifyCustomRuleResponse;
const ModifyMerchantResponse = models.ModifyMerchantResponse;
const DescribeCodesByPackResponse = models.DescribeCodesByPackResponse;
const CreateProductResponse = models.CreateProductResponse;
const CreateTraceDataRequest = models.CreateTraceDataRequest;
const Ext = models.Ext;
const DescribeCorpQuotasRequest = models.DescribeCorpQuotasRequest;
const CreateProductRequest = models.CreateProductRequest;
const CreateCustomPackRequest = models.CreateCustomPackRequest;
const CreateCodePackRequest = models.CreateCodePackRequest;
const CreateCodeBatchRequest = models.CreateCodeBatchRequest;
const TraceItem = models.TraceItem;
const DescribeCustomRuleByIdRequest = models.DescribeCustomRuleByIdRequest;
const ChainData = models.ChainData;
const PhaseData = models.PhaseData;
const ModifyTraceDataRanksRequest = models.ModifyTraceDataRanksRequest;
const ModifyCustomRuleStatusResponse = models.ModifyCustomRuleStatusResponse;
const CreateCustomPackResponse = models.CreateCustomPackResponse;
const ModifyMerchantRequest = models.ModifyMerchantRequest;
const DescribeTmpTokenResponse = models.DescribeTmpTokenResponse;
const DescribeCodePackUrlRequest = models.DescribeCodePackUrlRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const DeleteTraceDataResponse = models.DeleteTraceDataResponse;
const ModifyCustomRuleStatusRequest = models.ModifyCustomRuleStatusRequest;
const CreateCodePackResponse = models.CreateCodePackResponse;
const DescribeMerchantByIdResponse = models.DescribeMerchantByIdResponse;
const CodeItem = models.CodeItem;
const CreateTraceDataResponse = models.CreateTraceDataResponse;
const DescribeCustomRuleByIdResponse = models.DescribeCustomRuleByIdResponse;
const DescribeCodeBatchsResponse = models.DescribeCodeBatchsResponse;
const CreateCustomRuleResponse = models.CreateCustomRuleResponse;
const ModifyTraceCodeUnlinkRequest = models.ModifyTraceCodeUnlinkRequest;
const DescribeCodePacksResponse = models.DescribeCodePacksResponse;
const DescribeCodesByPackRequest = models.DescribeCodesByPackRequest;
const DescribeJobFileUrlRequest = models.DescribeJobFileUrlRequest;
const CreateTraceCodesAsyncResponse = models.CreateTraceCodesAsyncResponse;
const DescribeCustomRulesRequest = models.DescribeCustomRulesRequest;
const ModifyCodeBatchRequest = models.ModifyCodeBatchRequest;
const DescribeProductByIdRequest = models.DescribeProductByIdRequest;
const DescribeTraceCodesResponse = models.DescribeTraceCodesResponse;
const UsageQuota = models.UsageQuota;
const CreateCorporationOrderRequest = models.CreateCorporationOrderRequest;
const CreateTraceCodesResponse = models.CreateTraceCodesResponse;
const DeleteTraceDataRequest = models.DeleteTraceDataRequest;
const DescribeScanLogsRequest = models.DescribeScanLogsRequest;
const ModifyTraceCodeUnlinkResponse = models.ModifyTraceCodeUnlinkResponse;
const Merchant = models.Merchant;
const Product = models.Product;
const DescribeTmpTokenRequest = models.DescribeTmpTokenRequest;
const TraceCode = models.TraceCode;
const DescribeScanStatsResponse = models.DescribeScanStatsResponse;
const CreateMerchantResponse = models.CreateMerchantResponse;
const DescribeMerchantsResponse = models.DescribeMerchantsResponse;
const DescribeTraceDataListRequest = models.DescribeTraceDataListRequest;
const DescribeScanStatsRequest = models.DescribeScanStatsRequest;
const DeleteMerchantResponse = models.DeleteMerchantResponse;
const DeleteCodeBatchResponse = models.DeleteCodeBatchResponse;
const CreateTraceChainRequest = models.CreateTraceChainRequest;
const DescribeMerchantByIdRequest = models.DescribeMerchantByIdRequest;
const DescribeProductByIdResponse = models.DescribeProductByIdResponse;
const DescribeCodePacksRequest = models.DescribeCodePacksRequest;
const DescribeJobFileUrlResponse = models.DescribeJobFileUrlResponse;
const DescribeTraceCodeByIdRequest = models.DescribeTraceCodeByIdRequest;
const DeleteMerchantRequest = models.DeleteMerchantRequest;
const ScanStat = models.ScanStat;
const ModifyTraceCodeResponse = models.ModifyTraceCodeResponse;
const DescribeCodePackUrlResponse = models.DescribeCodePackUrlResponse;
const ModifyCodeBatchResponse = models.ModifyCodeBatchResponse;


/**
 * trp client
 * @class
 */
class TrpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trp.tencentcloudapi.com", "2021-05-15", credential, region, profile);
    }
    
    /**
     * 查询二维码信息
     * @param {DescribeTraceCodeByIdRequest} req
     * @param {function(string, DescribeTraceCodeByIdResponse):void} cb
     * @public
     */
    DescribeTraceCodeById(req, cb) {
        let resp = new DescribeTraceCodeByIdResponse();
        this.request("DescribeTraceCodeById", req, resp, cb);
    }

    /**
     * 查自定义码规则列表
     * @param {DescribeCustomRulesRequest} req
     * @param {function(string, DescribeCustomRulesResponse):void} cb
     * @public
     */
    DescribeCustomRules(req, cb) {
        let resp = new DescribeCustomRulesResponse();
        this.request("DescribeCustomRules", req, resp, cb);
    }

    /**
     * 解绑溯源码和批次的关系，让溯源码重置为未关联的状态，以便关联其他批次
注意：溯源码必须属于指定的批次才会解绑
     * @param {ModifyTraceCodeUnlinkRequest} req
     * @param {function(string, ModifyTraceCodeUnlinkResponse):void} cb
     * @public
     */
    ModifyTraceCodeUnlink(req, cb) {
        let resp = new ModifyTraceCodeUnlinkResponse();
        this.request("ModifyTraceCodeUnlink", req, resp, cb);
    }

    /**
     * 查自定义码规则
     * @param {DescribeCustomRuleByIdRequest} req
     * @param {function(string, DescribeCustomRuleByIdResponse):void} cb
     * @public
     */
    DescribeCustomRuleById(req, cb) {
        let resp = new DescribeCustomRuleByIdResponse();
        this.request("DescribeCustomRuleById", req, resp, cb);
    }

    /**
     * 异步导入激活码包，如果是第三方码包，需要域名跟配置的匹配
     * @param {CreateTraceCodesAsyncRequest} req
     * @param {function(string, CreateTraceCodesAsyncResponse):void} cb
     * @public
     */
    CreateTraceCodesAsync(req, cb) {
        let resp = new CreateTraceCodesAsyncResponse();
        this.request("CreateTraceCodesAsync", req, resp, cb);
    }

    /**
     * 查询批次信息
     * @param {DescribeCodeBatchByIdRequest} req
     * @param {function(string, DescribeCodeBatchByIdResponse):void} cb
     * @public
     */
    DescribeCodeBatchById(req, cb) {
        let resp = new DescribeCodeBatchByIdResponse();
        this.request("DescribeCodeBatchById", req, resp, cb);
    }

    /**
     * 查询二维码列表
     * @param {DescribeTraceCodesRequest} req
     * @param {function(string, DescribeTraceCodesResponse):void} cb
     * @public
     */
    DescribeTraceCodes(req, cb) {
        let resp = new DescribeTraceCodesResponse();
        this.request("DescribeTraceCodes", req, resp, cb);
    }

    /**
     * 修改溯源信息的排序
     * @param {ModifyTraceDataRanksRequest} req
     * @param {function(string, ModifyTraceDataRanksResponse):void} cb
     * @public
     */
    ModifyTraceDataRanks(req, cb) {
        let resp = new ModifyTraceDataRanksResponse();
        this.request("ModifyTraceDataRanks", req, resp, cb);
    }

    /**
     * 查询码包的二维码列表，上限 3 万
     * @param {DescribeCodesByPackRequest} req
     * @param {function(string, DescribeCodesByPackResponse):void} cb
     * @public
     */
    DescribeCodesByPack(req, cb) {
        let resp = new DescribeCodesByPackResponse();
        this.request("DescribeCodesByPack", req, resp, cb);
    }

    /**
     * 查询商户信息
     * @param {DescribeMerchantByIdRequest} req
     * @param {function(string, DescribeMerchantByIdResponse):void} cb
     * @public
     */
    DescribeMerchantById(req, cb) {
        let resp = new DescribeMerchantByIdResponse();
        this.request("DescribeMerchantById", req, resp, cb);
    }

    /**
     * 新建商品
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        let resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }

    /**
     * 查询商品列表
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * 查询渠道商下属企业额度使用情况
     * @param {DescribeCorpQuotasRequest} req
     * @param {function(string, DescribeCorpQuotasResponse):void} cb
     * @public
     */
    DescribeCorpQuotas(req, cb) {
        let resp = new DescribeCorpQuotasResponse();
        this.request("DescribeCorpQuotas", req, resp, cb);
    }

    /**
     * 修改自定义码规则
     * @param {ModifyCustomRuleRequest} req
     * @param {function(string, ModifyCustomRuleResponse):void} cb
     * @public
     */
    ModifyCustomRule(req, cb) {
        let resp = new ModifyCustomRuleResponse();
        this.request("ModifyCustomRule", req, resp, cb);
    }

    /**
     * 修改溯源信息
     * @param {ModifyTraceDataRequest} req
     * @param {function(string, ModifyTraceDataResponse):void} cb
     * @public
     */
    ModifyTraceData(req, cb) {
        let resp = new ModifyTraceDataResponse();
        this.request("ModifyTraceData", req, resp, cb);
    }

    /**
     * 编辑商品
     * @param {ModifyProductRequest} req
     * @param {function(string, ModifyProductResponse):void} cb
     * @public
     */
    ModifyProduct(req, cb) {
        let resp = new ModifyProductResponse();
        this.request("ModifyProduct", req, resp, cb);
    }

    /**
     * 更新自定义码规则状态
     * @param {ModifyCustomRuleStatusRequest} req
     * @param {function(string, ModifyCustomRuleStatusResponse):void} cb
     * @public
     */
    ModifyCustomRuleStatus(req, cb) {
        let resp = new ModifyCustomRuleStatusResponse();
        this.request("ModifyCustomRuleStatus", req, resp, cb);
    }

    /**
     * 查询商品信息
     * @param {DescribeProductByIdRequest} req
     * @param {function(string, DescribeProductByIdResponse):void} cb
     * @public
     */
    DescribeProductById(req, cb) {
        let resp = new DescribeProductByIdResponse();
        this.request("DescribeProductById", req, resp, cb);
    }

    /**
     * 查询临时Token，主要用于上传接口
     * @param {DescribeTmpTokenRequest} req
     * @param {function(string, DescribeTmpTokenResponse):void} cb
     * @public
     */
    DescribeTmpToken(req, cb) {
        let resp = new DescribeTmpTokenResponse();
        this.request("DescribeTmpToken", req, resp, cb);
    }

    /**
     * 批量导入二维码，只支持平台发的码
     * @param {CreateTraceCodesRequest} req
     * @param {function(string, CreateTraceCodesResponse):void} cb
     * @public
     */
    CreateTraceCodes(req, cb) {
        let resp = new CreateTraceCodesResponse();
        this.request("CreateTraceCodes", req, resp, cb);
    }

    /**
     * 删除商品，如果商品被使用，则不可删除
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * 上链溯源信息
     * @param {CreateTraceChainRequest} req
     * @param {function(string, CreateTraceChainResponse):void} cb
     * @public
     */
    CreateTraceChain(req, cb) {
        let resp = new CreateTraceChainResponse();
        this.request("CreateTraceChain", req, resp, cb);
    }

    /**
     * 生成自定义码包
     * @param {CreateCustomPackRequest} req
     * @param {function(string, CreateCustomPackResponse):void} cb
     * @public
     */
    CreateCustomPack(req, cb) {
        let resp = new CreateCustomPackResponse();
        this.request("CreateCustomPack", req, resp, cb);
    }

    /**
     * 以订单方式新建企业信息/配额信息
     * @param {CreateCorporationOrderRequest} req
     * @param {function(string, CreateCorporationOrderResponse):void} cb
     * @public
     */
    CreateCorporationOrder(req, cb) {
        let resp = new CreateCorporationOrderResponse();
        this.request("CreateCorporationOrder", req, resp, cb);
    }

    /**
     * 删除商户
     * @param {DeleteMerchantRequest} req
     * @param {function(string, DeleteMerchantResponse):void} cb
     * @public
     */
    DeleteMerchant(req, cb) {
        let resp = new DeleteMerchantResponse();
        this.request("DeleteMerchant", req, resp, cb);
    }

    /**
     * 查询某个批次被扫码的统计列表，没有被扫过的不会返回
     * @param {DescribeScanStatsRequest} req
     * @param {function(string, DescribeScanStatsResponse):void} cb
     * @public
     */
    DescribeScanStats(req, cb) {
        let resp = new DescribeScanStatsResponse();
        this.request("DescribeScanStats", req, resp, cb);
    }

    /**
     * 查询码包状态
     * @param {DescribeCodePackStatusRequest} req
     * @param {function(string, DescribeCodePackStatusResponse):void} cb
     * @public
     */
    DescribeCodePackStatus(req, cb) {
        let resp = new DescribeCodePackStatusResponse();
        this.request("DescribeCodePackStatus", req, resp, cb);
    }

    /**
     * 查询批次列表
     * @param {DescribeCodeBatchsRequest} req
     * @param {function(string, DescribeCodeBatchsResponse):void} cb
     * @public
     */
    DescribeCodeBatchs(req, cb) {
        let resp = new DescribeCodeBatchsResponse();
        this.request("DescribeCodeBatchs", req, resp, cb);
    }

    /**
     * 新建自定义码规则
     * @param {CreateCustomRuleRequest} req
     * @param {function(string, CreateCustomRuleResponse):void} cb
     * @public
     */
    CreateCustomRule(req, cb) {
        let resp = new CreateCustomRuleResponse();
        this.request("CreateCustomRule", req, resp, cb);
    }

    /**
     * 查询码包地址
     * @param {DescribeCodePackUrlRequest} req
     * @param {function(string, DescribeCodePackUrlResponse):void} cb
     * @public
     */
    DescribeCodePackUrl(req, cb) {
        let resp = new DescribeCodePackUrlResponse();
        this.request("DescribeCodePackUrl", req, resp, cb);
    }

    /**
     * 编辑商户
     * @param {ModifyMerchantRequest} req
     * @param {function(string, ModifyMerchantResponse):void} cb
     * @public
     */
    ModifyMerchant(req, cb) {
        let resp = new ModifyMerchantResponse();
        this.request("ModifyMerchant", req, resp, cb);
    }

    /**
     * 新增批次
     * @param {CreateCodeBatchRequest} req
     * @param {function(string, CreateCodeBatchResponse):void} cb
     * @public
     */
    CreateCodeBatch(req, cb) {
        let resp = new CreateCodeBatchResponse();
        this.request("CreateCodeBatch", req, resp, cb);
    }

    /**
     * 删除批次
     * @param {DeleteCodeBatchRequest} req
     * @param {function(string, DeleteCodeBatchResponse):void} cb
     * @public
     */
    DeleteCodeBatch(req, cb) {
        let resp = new DeleteCodeBatchResponse();
        this.request("DeleteCodeBatch", req, resp, cb);
    }

    /**
     * 删除溯源信息，如果已经上链则不可删除
     * @param {DeleteTraceDataRequest} req
     * @param {function(string, DeleteTraceDataResponse):void} cb
     * @public
     */
    DeleteTraceData(req, cb) {
        let resp = new DeleteTraceDataResponse();
        this.request("DeleteTraceData", req, resp, cb);
    }

    /**
     * 新增溯源信息
     * @param {CreateTraceDataRequest} req
     * @param {function(string, CreateTraceDataResponse):void} cb
     * @public
     */
    CreateTraceData(req, cb) {
        let resp = new CreateTraceDataResponse();
        this.request("CreateTraceData", req, resp, cb);
    }

    /**
     * 新建商户
     * @param {CreateMerchantRequest} req
     * @param {function(string, CreateMerchantResponse):void} cb
     * @public
     */
    CreateMerchant(req, cb) {
        let resp = new CreateMerchantResponse();
        this.request("CreateMerchant", req, resp, cb);
    }

    /**
     * 查询溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
     * @param {DescribeTraceDataListRequest} req
     * @param {function(string, DescribeTraceDataListResponse):void} cb
     * @public
     */
    DescribeTraceDataList(req, cb) {
        let resp = new DescribeTraceDataListResponse();
        this.request("DescribeTraceDataList", req, resp, cb);
    }

    /**
     * 冻结或者激活二维码，所属的批次的冻结状态优先级大于单个二维码的状态，即如果批次是冻结的，那么该批次下二维码的状态都是冻结的
     * @param {ModifyTraceCodeRequest} req
     * @param {function(string, ModifyTraceCodeResponse):void} cb
     * @public
     */
    ModifyTraceCode(req, cb) {
        let resp = new ModifyTraceCodeResponse();
        this.request("ModifyTraceCode", req, resp, cb);
    }

    /**
     * 查询码包列表
     * @param {DescribeCodePacksRequest} req
     * @param {function(string, DescribeCodePacksResponse):void} cb
     * @public
     */
    DescribeCodePacks(req, cb) {
        let resp = new DescribeCodePacksResponse();
        this.request("DescribeCodePacks", req, resp, cb);
    }

    /**
     * 查询扫码日志明细
     * @param {DescribeScanLogsRequest} req
     * @param {function(string, DescribeScanLogsResponse):void} cb
     * @public
     */
    DescribeScanLogs(req, cb) {
        let resp = new DescribeScanLogsResponse();
        this.request("DescribeScanLogs", req, resp, cb);
    }

    /**
     * 修改批次
     * @param {ModifyCodeBatchRequest} req
     * @param {function(string, ModifyCodeBatchResponse):void} cb
     * @public
     */
    ModifyCodeBatch(req, cb) {
        let resp = new ModifyCodeBatchResponse();
        this.request("ModifyCodeBatch", req, resp, cb);
    }

    /**
     * 查询商户列表
     * @param {DescribeMerchantsRequest} req
     * @param {function(string, DescribeMerchantsResponse):void} cb
     * @public
     */
    DescribeMerchants(req, cb) {
        let resp = new DescribeMerchantsResponse();
        this.request("DescribeMerchants", req, resp, cb);
    }

    /**
     * 生成普通码包
     * @param {CreateCodePackRequest} req
     * @param {function(string, CreateCodePackResponse):void} cb
     * @public
     */
    CreateCodePack(req, cb) {
        let resp = new CreateCodePackResponse();
        this.request("CreateCodePack", req, resp, cb);
    }

    /**
     * 获取异步任务的输出地址
     * @param {DescribeJobFileUrlRequest} req
     * @param {function(string, DescribeJobFileUrlResponse):void} cb
     * @public
     */
    DescribeJobFileUrl(req, cb) {
        let resp = new DescribeJobFileUrlResponse();
        this.request("DescribeJobFileUrl", req, resp, cb);
    }


}
module.exports = TrpClient;
