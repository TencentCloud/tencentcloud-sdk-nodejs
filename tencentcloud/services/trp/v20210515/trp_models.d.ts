/**
 * 批次
 */
export interface CodeBatch {
    /**
      * 批次号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchId: string;
    /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CorpId: number;
    /**
      * 批次编码(未使用)
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchCode: string;
    /**
      * 码数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeCnt: number;
    /**
      * 所属商户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 批次类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchType: number;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 微信模板
注意：此字段可能返回 null，表示取不到有效值。
      */
    MpTpl: string;
    /**
      * 批次状态 0: 未激活 1: 已激活 -1: 已冻结
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 所属商户名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantName: string;
    /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductName: string;
    /**
      * 未使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ext: Ext;
    /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TplName?: string;
    /**
      * 调度任务
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job?: Job;
}
/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
    /**
      * 商品名称
      */
    Name?: string;
    /**
      * 条数
      */
    PageSize?: number;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 商品ID
      */
    MerchantId?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * CreateCorporationOrder返回参数结构体
 */
export interface CreateCorporationOrderResponse {
    /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CorpId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProduct返回参数结构体
 */
export interface ModifyProductResponse {
    /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProduct请求参数结构体
 */
export interface ModifyProductRequest {
    /**
      * 商品名称
      */
    Name: string;
    /**
      * 商品ID
      */
    ProductId: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 商品规格
      */
    Specification?: string;
    /**
      * 商品图片
      */
    Logo?: Array<string>;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 预留字段
      */
    Ext?: Ext;
}
/**
 * ModifyCustomRule请求参数结构体
 */
export interface ModifyCustomRuleRequest {
    /**
      * 码规则ID
      */
    CustomId: string;
    /**
      * 规则名称
      */
    Name: string;
    /**
      * 码长度
      */
    CodeLength: number;
    /**
      * 码段配置
      */
    CodeParts: Array<CodePart>;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * 码段配置
 */
export interface CodePart {
    /**
      * 码段名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 码段类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 码段内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 码段长度
      */
    Length: number;
    /**
      * 扩展字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ext: string;
}
/**
 * 码包类型
 */
export interface CodePack {
    /**
      * 码id
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackId: string;
    /**
      * 企业id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CorpId: number;
    /**
      * 商户id
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 制码状态 init: 初始化, pending: 执行中, done: 完成, error: 失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 执行日志
注意：此字段可能返回 null，表示取不到有效值。
      */
    Log: string;
    /**
      * 创建人
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateUser: string;
    /**
      * 码数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Amount: number;
    /**
      * 码长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeLength: number;
    /**
      * 码类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeType: string;
    /**
      * 是否暗码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cipher: number;
    /**
      * [弃用] 文字码地址，通过另一个接口查
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextUrl: string;
    /**
      * [弃用] 二维码地址，通过另一个接口查
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackUrl: string;
    /**
      * 商户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantName: string;
    /**
      * 码规则类型 0: 默认, 1: 自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleType: number;
    /**
      * 自定义码规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomId: string;
    /**
      * 码包类型 0: 普通码包 1: 层级码包
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackType: number;
    /**
      * 生码层级
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackLevel: number;
    /**
      * 层级码配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackSpec: Array<PackSpec>;
}
/**
 * DeleteCodeBatch请求参数结构体
 */
export interface DeleteCodeBatchRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
}
/**
 * DescribeMerchants请求参数结构体
 */
export interface DescribeMerchantsRequest {
    /**
      * 搜索商户名称
      */
    Name?: string;
    /**
      * 条数
      */
    PageSize?: number;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码来源类型 0:自建, 1:第三方
      */
    CodeType?: number;
}
/**
 * ModifyTraceCode请求参数结构体
 */
export interface ModifyTraceCodeRequest {
    /**
      * 二维码
      */
    Code: string;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 状态 0: 冻结 1: 激活
      */
    Status?: number;
}
/**
 * DescribeCustomRules返回参数结构体
 */
export interface DescribeCustomRulesResponse {
    /**
      * 码规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomRules: Array<CustomRule>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMerchant请求参数结构体
 */
export interface CreateMerchantRequest {
    /**
      * 商户名称
      */
    Name: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码包来源 0:自建, 1:第三发
      */
    CodeType?: number;
    /**
      * 码包前缀地址 第三方码包时必填
      */
    CodeUrl?: string;
}
/**
 * DescribeCodeBatchById请求参数结构体
 */
export interface DescribeCodeBatchByIdRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
}
/**
 * DescribeTraceCodeById返回参数结构体
 */
export interface DescribeTraceCodeByIdResponse {
    /**
      * 无
      */
    TraceCode: TraceCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 码规则
 */
export interface CustomRule {
    /**
      * 码规则ID
      */
    CustomId: string;
    /**
      * 码规则名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CorpId: number;
    /**
      * 商户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 码ID长度
      */
    CodeLength: number;
    /**
      * 规则状态
      */
    Status: number;
    /**
      * 码段配置
      */
    CodeParts: Array<CodePart>;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
    /**
      * 商品列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Products: Array<Product>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCodeBatch返回参数结构体
 */
export interface CreateCodeBatchResponse {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTraceDataList返回参数结构体
 */
export interface DescribeTraceDataListResponse {
    /**
      * 数量
      */
    TotalCount: number;
    /**
      * 无
      */
    TraceDataList: Array<TraceData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTraceCodes请求参数结构体
 */
export interface DescribeTraceCodesRequest {
    /**
      * 搜索关键字 码标识，或者批次ID
      */
    Keyword?: string;
    /**
      * 条数
      */
    PageNumber?: number;
    /**
      * 页码
      */
    PageSize?: number;
    /**
      * 批次ID，弃用
      */
    BatchId?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * CreateTraceCodesAsync请求参数结构体
 */
export interface CreateTraceCodesAsyncRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
    /**
      * 上传文件Key，仅支持 csv 或者 zip 类型
      */
    FileKey?: string;
}
/**
 * ModifyTraceData返回参数结构体
 */
export interface ModifyTraceDataResponse {
    /**
      * 溯源ID
      */
    TraceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
    /**
      * 商品ID
      */
    ProductId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * CreateTraceChain返回参数结构体
 */
export interface CreateTraceChainResponse {
    /**
      * 溯源ID
      */
    TraceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCustomRule请求参数结构体
 */
export interface CreateCustomRuleRequest {
    /**
      * 规则名称
      */
    Name: string;
    /**
      * 商户ID
      */
    MerchantId: string;
    /**
      * 码长度
      */
    CodeLength: number;
    /**
      * 码段配置
      */
    CodeParts: Array<CodePart>;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * DescribeCodePackStatus请求参数结构体
 */
export interface DescribeCodePackStatusRequest {
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * ModifyTraceData请求参数结构体
 */
export interface ModifyTraceDataRequest {
    /**
      * 溯源ID
      */
    TraceId?: string;
    /**
      * 批次ID
      */
    BatchId?: string;
    /**
      * 生产溯源任务ID
      */
    TaskId?: string;
    /**
      * 溯源信息
      */
    TraceItems?: Array<TraceItem>;
    /**
      * 溯源阶段名称
      */
    PhaseName?: string;
    /**
      * [无效] 类型
      */
    Type?: number;
    /**
      * [无效] 溯源码
      */
    Code?: string;
    /**
      * [无效] 排序
      */
    Rank?: number;
    /**
      * [无效] 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
      */
    Phase?: number;
    /**
      * [无效] 溯源时间
      */
    TraceTime?: string;
    /**
      * [无效] 创建时间
      */
    CreateTime?: string;
    /**
      * [无效] 上链状态
      */
    ChainStatus?: number;
    /**
      * [无效] 上链时间
      */
    ChainTime?: string;
    /**
      * [无效] 上链数据
      */
    ChainData?: ChainData;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 溯源状态 0: 无效, 1: 有效
      */
    Status?: number;
    /**
      * 环节数据
      */
    PhaseData?: PhaseData;
}
/**
 * DescribeCodeBatchs请求参数结构体
 */
export interface DescribeCodeBatchsRequest {
    /**
      * 查询商户ID
      */
    MerchantId?: string;
    /**
      * 查询商品ID
      */
    ProductId?: string;
    /**
      * 查询关键字
      */
    Keyword?: string;
    /**
      * 条数
      */
    PageSize?: number;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 批次类型 0:溯源 1:营销
      */
    BatchType?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * ModifyTraceDataRanks返回参数结构体
 */
export interface ModifyTraceDataRanksResponse {
    /**
      * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTraceCodes请求参数结构体
 */
export interface CreateTraceCodesRequest {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码
      */
    Codes?: Array<CodeItem>;
}
/**
 * DescribeCodeBatchById返回参数结构体
 */
export interface DescribeCodeBatchByIdResponse {
    /**
      * 批次
      */
    CodeBatch: CodeBatch;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodePackStatus返回参数结构体
 */
export interface DescribeCodePackStatusResponse {
    /**
      * 码包状态 init: 初始化, pending: 执行中, done: 完成, error: 失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 通用调度任务
 */
export interface Job {
    /**
      * 调度ID
      */
    JobId: number;
    /**
      * 执行状态 init:初始化, pending: 执行中, done: 执行成功, error: 执行失败
      */
    Status: string;
}
/**
 * 溯源数据
 */
export interface TraceData {
    /**
      * 溯源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TraceId: string;
    /**
      * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CorpId: number;
    /**
      * 码类型 0: 批次, 1: 码, 2: 生产任务
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 码值，跟码类型一一对应
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 排序，在Phase相同情况下，值越小排名靠前
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rank: number;
    /**
      * 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phase: number;
    /**
      * 溯源环节名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhaseName: string;
    /**
      * 溯源时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    TraceTime: string;
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    TraceItems: Array<TraceItem>;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 上链状态 0: 未上链 1: 上链中 2: 已上链 -1: 异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChainStatus: number;
    /**
      * 上链时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChainTime: string;
    /**
      * 上链数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChainData: ChainData;
    /**
      * 溯源阶段配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhaseData: PhaseData;
    /**
      * 溯源阶段状态 0: 无效, 1: 有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * 层级码配置
 */
export interface PackSpec {
    /**
      * 层级
      */
    Level: number;
    /**
      * 比例
      */
    Rate: number;
    /**
      * 数量
      */
    Amount: number;
    /**
      * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomId?: string;
    /**
      * 码段配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeParts?: Array<CodePart>;
}
/**
 * ModifyCustomRule返回参数结构体
 */
export interface ModifyCustomRuleResponse {
    /**
      * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMerchant返回参数结构体
 */
export interface ModifyMerchantResponse {
    /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
    /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodesByPack返回参数结构体
 */
export interface DescribeCodesByPackResponse {
    /**
      * 码列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Codes: Array<CodeItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTraceData请求参数结构体
 */
export interface CreateTraceDataRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
    /**
      * 任务ID
      */
    TaskId?: string;
    /**
      * 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
      */
    Phase?: number;
    /**
      * 溯源阶段名称
      */
    PhaseName?: string;
    /**
      * [无效] 上链状态
      */
    ChainStatus?: number;
    /**
      * [无效] 码类型 0: 批次, 1: 码, 2: 生产任务, 3: 物流信息
      */
    Type?: number;
    /**
      * [无效] 溯源ID
      */
    TraceId?: string;
    /**
      * 溯源信息
      */
    TraceItems?: Array<TraceItem>;
    /**
      * 溯源状态 0: 无效, 1: 有效
      */
    Status?: number;
    /**
      * 环节数据
      */
    PhaseData?: PhaseData;
}
/**
 * 预留字段
 */
export declare type Ext = null;
/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
    /**
      * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCustomPack请求参数结构体
 */
export interface CreateCustomPackRequest {
    /**
      * 商户ID
      */
    MerchantId: string;
    /**
      * 生码数量, 普通码包时必填
      */
    Amount?: number;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码包类型 0: 普通码包 1: 层级码包
      */
    PackType?: number;
    /**
      * 码包层级
      */
    PackLevel?: number;
    /**
      * 层级码包规则
      */
    PackSpec?: Array<PackSpec>;
    /**
      * 码规则ID,  和CodeParts二选一必填
      */
    CustomId?: string;
    /**
      * 码段配置，和CustomId二选一必填
      */
    CodeParts?: Array<CodePart>;
    /**
      * 批次ID，如果传了生码后会同时绑定批次，并激活码
      */
    BatchId?: string;
}
/**
 * CreateCodePack请求参数结构体
 */
export interface CreateCodePackRequest {
    /**
      * 商户ID
      */
    MerchantId: string;
    /**
      * 码长度
      */
    CodeLength: number;
    /**
      * 码类型 alphabet 字母, number 数字, mixin 混合
      */
    CodeType: string;
    /**
      * 生码数量 普通码包时必填
      */
    Amount?: number;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码包类型 0: 普通码包 1: 层级码包
      */
    PackType?: number;
    /**
      * 码包层级
      */
    PackLevel?: number;
    /**
      * 码包规格
      */
    PackSpec?: Array<PackSpec>;
    /**
      * 批次ID，如果传了生码后会同时绑定批次，并激活码
      */
    BatchId?: string;
}
/**
 * CreateCodeBatch请求参数结构体
 */
export interface CreateCodeBatchRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 商户ID
      */
    MerchantId?: string;
    /**
      * 产品ID
      */
    ProductId?: string;
    /**
      * 批次类型 0:溯源 1:营销
      */
    BatchType?: number;
    /**
      * 批次ID，系统自动生成
      */
    BatchId?: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 模版ID，或者活动ID
      */
    MpTpl?: string;
    /**
      * 克隆批次ID，同时会复制溯源信息
      */
    CloneId?: string;
}
/**
 * 溯源数据项
Type的枚举值
text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型
具体组合如下
Type: "text" 文本类型, 对应值 Value: "文本字符串"
Type: "longtext" 长文本类型, 对应值 Value: "长文本字符串, 支持换行\n"
Type: "banner" 单图片类型, 对应图片地址 Value: "https://sample.cdn.com/xxx.jpg"
Type: "image" 多图片类型, 对应图片地址 Values: ["https://sample.cdn.com/1.jpg", "https://sample.cdn.com/2.jpg"]
Type: "video" 视频类型, 对应视频地址 Value: "https://sample.cdn.com/xxx.mp4"
Type: "mp" 小程序类型, 对应配置 Values: ["WXAPPID", "WXAPP_PATH", "跳转说明"]
 */
export interface TraceItem {
    /**
      * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 字段值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 类型 text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 只读
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnly: boolean;
    /**
      * 扫码展示
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hidden: boolean;
    /**
      * 多个值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Values: Array<string>;
    /**
      * 类型标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 扩展字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ext: string;
}
/**
 * DescribeCustomRuleById请求参数结构体
 */
export interface DescribeCustomRuleByIdRequest {
    /**
      * 码规则ID
      */
    CustomId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * 上链数据
 */
export interface ChainData {
    /**
      * 区块hash
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlockHash: string;
    /**
      * 区块高度
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlockHeight: string;
    /**
      * 区块时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlockTime: string;
}
/**
 * 环节数据
 */
export interface PhaseData {
    /**
      * 启用头
      */
    HeadEnabled?: boolean;
    /**
      * 标题
      */
    HeadTitle?: string;
    /**
      * 标识符
      */
    Key?: string;
    /**
      * 小程序AppId
      */
    AppId?: string;
    /**
      * 小程序AppPath
      */
    AppPath?: string;
    /**
      * 小程序名称AppName
      */
    AppName?: string;
}
/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
    /**
      * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCustomPack返回参数结构体
 */
export interface CreateCustomPackResponse {
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMerchant请求参数结构体
 */
export interface ModifyMerchantRequest {
    /**
      * 商户名称
      */
    Name: string;
    /**
      * 商户标识码
      */
    MerchantId: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码包来源 0:自建, 1:第三码包，暂不支持修改
      */
    CodeType?: number;
    /**
      * 码包前缀地址 第三方码包时必填
      */
    CodeUrl?: string;
}
/**
 * DescribeTmpToken返回参数结构体
 */
export interface DescribeTmpTokenResponse {
    /**
      * 临时token
注意：此字段可能返回 null，表示取不到有效值。
      */
    Token: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodePackUrl请求参数结构体
 */
export interface DescribeCodePackUrlRequest {
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * ModifyTraceDataRanks请求参数结构体
 */
export interface ModifyTraceDataRanksRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
    /**
      * 生产任务ID
      */
    TaskId?: string;
    /**
      * 溯源ID
      */
    TraceIds?: Array<string>;
}
/**
 * DeleteTraceData返回参数结构体
 */
export interface DeleteTraceDataResponse {
    /**
      * 溯源id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TraceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
    /**
      * 码规则ID
      */
    CustomId: string;
    /**
      * 码规则状态 0:未生效 1:已生效 -1:已失效
      */
    Status: number;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * CreateCodePack返回参数结构体
 */
export interface CreateCodePackResponse {
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMerchantById返回参数结构体
 */
export interface DescribeMerchantByIdResponse {
    /**
      * 商户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Merchant: Merchant;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 码类型
 */
export interface CodeItem {
    /**
      * 无
      */
    Code?: string;
}
/**
 * CreateTraceData返回参数结构体
 */
export interface CreateTraceDataResponse {
    /**
      * 溯源ID
      */
    TraceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomRuleById返回参数结构体
 */
export interface DescribeCustomRuleByIdResponse {
    /**
      * 码规则信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomRule: CustomRule;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodeBatchs返回参数结构体
 */
export interface DescribeCodeBatchsResponse {
    /**
      * 批次列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeBatchs: Array<CodeBatch>;
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCustomRule返回参数结构体
 */
export interface CreateCustomRuleResponse {
    /**
      * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodePacks返回参数结构体
 */
export interface DescribeCodePacksResponse {
    /**
      * 码列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodePacks: Array<CodePack>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodesByPack请求参数结构体
 */
export interface DescribeCodesByPackRequest {
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * DescribeJobFileUrl请求参数结构体
 */
export interface DescribeJobFileUrlRequest {
    /**
      * 调度ID
      */
    JobId: number;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * CreateTraceCodesAsync返回参数结构体
 */
export interface CreateTraceCodesAsyncResponse {
    /**
      * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomRules请求参数结构体
 */
export interface DescribeCustomRulesRequest {
    /**
      * 搜索关键字
      */
    Keyword?: string;
    /**
      * 条数
      */
    PageSize?: number;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 码规则状态 0:未生效 1:已生效 -1:已失效
      */
    Status?: number;
    /**
      * 商户ID
      */
    MerchantId?: string;
}
/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
    /**
      * 商品名称
      */
    Name: string;
    /**
      * 商户ID
      */
    MerchantId: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 商户名称
      */
    MerchantName?: string;
    /**
      * 商品规格
      */
    Specification?: string;
    /**
      * 商品图片
      */
    Logo?: Array<string>;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 预留字段
      */
    Ext?: Ext;
}
/**
 * ModifyCodeBatch请求参数结构体
 */
export interface ModifyCodeBatchRequest {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 状态 0: 未激活 1: 已激活 -1: 已冻结
      */
    Status?: number;
    /**
      * 模版ID，或者活动ID
      */
    MpTpl?: string;
    /**
      * 商户ID
      */
    MerchantId?: string;
    /**
      * 商品ID
      */
    ProductId?: string;
    /**
      * 备注
      */
    Remark?: string;
}
/**
 * DescribeProductById请求参数结构体
 */
export interface DescribeProductByIdRequest {
    /**
      * 商品ID
      */
    ProductId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * DescribeTraceCodes返回参数结构体
 */
export interface DescribeTraceCodesResponse {
    /**
      * 标识列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TraceCodes: Array<TraceCode>;
    /**
      * 条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCorporationOrder请求参数结构体
 */
export interface CreateCorporationOrderRequest {
    /**
      * 企业名称
      */
    CorpName: string;
    /**
      * 所有者ID
      */
    Owner: string;
    /**
      * 溯源码额度
      */
    CodeQuota: number;
    /**
      * 额度过期时间
      */
    ExpireTime: string;
    /**
      * 金额
      */
    Amount: number;
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 联系人
      */
    ContactPerson?: string;
    /**
      * 联系电话
      */
    ContactNumber?: string;
    /**
      * 备注
      */
    Remark?: string;
}
/**
 * CreateTraceCodes返回参数结构体
 */
export interface CreateTraceCodesResponse {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 导入成功码数量
      */
    ActiveCnt: number;
    /**
      * 批次码数量
      */
    CodeCnt: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTraceData请求参数结构体
 */
export interface DeleteTraceDataRequest {
    /**
      * 溯源ID
      */
    TraceId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * 商户信息
 */
export interface Merchant {
    /**
      * 商户标识码
      */
    MerchantId: string;
    /**
      * 企业id
      */
    CorpId: number;
    /**
      * 商户名称
      */
    Name: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 商户码规则
      */
    CodeRule: string;
    /**
      * 码来源类型 0: 安心平台 1: 第三方码
      */
    CodeType: number;
    /**
      * 第三方码域名前缀
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeUrl: string;
}
/**
 * 商品信息
 */
export interface Product {
    /**
      * 商品id
      */
    ProductId: string;
    /**
      * 企业id
      */
    CorpId: number;
    /**
      * 商户标识码
      */
    MerchantId: string;
    /**
      * 商品编号
      */
    ProductCode: string;
    /**
      * 商品名称
      */
    Name: string;
    /**
      * 商品规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Specification: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 商品图片
注意：此字段可能返回 null，表示取不到有效值。
      */
    Logo: Array<string>;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 修改时间
      */
    UpdateTime: string;
    /**
      * 预留字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ext: Ext;
    /**
      * 商户名称
      */
    MerchantName: string;
}
/**
 * DescribeTmpToken请求参数结构体
 */
export interface DescribeTmpTokenRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * 溯源码
 */
export interface TraceCode {
    /**
      * 二维码
      */
    Code: string;
    /**
      * 企业ID
      */
    CorpId: number;
    /**
      * 码包ID
      */
    PackId: string;
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 所属商户ID
      */
    MerchantId: string;
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 码状态 0: 冻结 1: 激活
      */
    Status: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 修改时间
      */
    UpdateTime: string;
    /**
      * 商户名称
      */
    MerchantName: string;
    /**
      * 产品名称
      */
    ProductName: string;
}
/**
 * CreateMerchant返回参数结构体
 */
export interface CreateMerchantResponse {
    /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMerchants返回参数结构体
 */
export interface DescribeMerchantsResponse {
    /**
      * 商户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Merchants: Array<Merchant>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTraceDataList请求参数结构体
 */
export interface DescribeTraceDataListRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 批次ID
      */
    BatchId?: string;
    /**
      * 任务ID 用于外部溯源
      */
    TaskId?: string;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 二维码
      */
    Code?: string;
    /**
      * 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源
      */
    Phase?: number;
    /**
      * 数量
      */
    PageSize?: number;
}
/**
 * DeleteMerchant返回参数结构体
 */
export interface DeleteMerchantResponse {
    /**
      * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
      */
    MerchantId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCodeBatch返回参数结构体
 */
export interface DeleteCodeBatchResponse {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTraceChain请求参数结构体
 */
export interface CreateTraceChainRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 溯源ID
      */
    TraceId?: string;
}
/**
 * DescribeMerchantById请求参数结构体
 */
export interface DescribeMerchantByIdRequest {
    /**
      * 商户标识码
      */
    MerchantId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * DescribeProductById返回参数结构体
 */
export interface DescribeProductByIdResponse {
    /**
      * 商品信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Product: Product;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodePacks请求参数结构体
 */
export interface DescribeCodePacksRequest {
    /**
      * 每页数量
      */
    PageSize?: number;
    /**
      * 页数
      */
    PageNumber?: number;
    /**
      * 查询关键字
      */
    Keyword?: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * DescribeJobFileUrl返回参数结构体
 */
export interface DescribeJobFileUrlResponse {
    /**
      * 码包地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTraceCodeById请求参数结构体
 */
export interface DescribeTraceCodeByIdRequest {
    /**
      * 企业ID
      */
    CorpId?: number;
    /**
      * 二维码
      */
    Code?: string;
}
/**
 * DeleteMerchant请求参数结构体
 */
export interface DeleteMerchantRequest {
    /**
      * 商户标识码
      */
    MerchantId: string;
    /**
      * 企业ID
      */
    CorpId?: number;
}
/**
 * ModifyTraceCode返回参数结构体
 */
export interface ModifyTraceCodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCodePackUrl返回参数结构体
 */
export interface DescribeCodePackUrlResponse {
    /**
      * 文字码包地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 图片码包地址，可能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImgUrl: string;
    /**
      * 文字码包Key，用于上传导入
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileKey: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCodeBatch返回参数结构体
 */
export interface ModifyCodeBatchResponse {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
