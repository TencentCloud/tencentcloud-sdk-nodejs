/**
 * CheckDomain返回参数结构体
 */
export interface CheckDomainResponse {
    /**
     * 所查询域名名称
     */
    DomainName?: string;
    /**
     * 是否能够注册
     */
    Available?: boolean;
    /**
     * 不能注册原因
     */
    Reason?: string;
    /**
     * 是否是溢价词
     */
    Premium?: boolean;
    /**
     * 域名价格
     */
    Price?: number;
    /**
     * 是否是敏感词
     */
    BlackWord?: boolean;
    /**
        * 溢价词描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Describe?: string;
    /**
        * 溢价词的续费价格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FeeRenew?: number;
    /**
        * 域名真实价格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RealPrice?: number;
    /**
        * 溢价词的转入价格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FeeTransfer?: number;
    /**
     * 溢价词的赎回价格
     */
    FeeRestore?: number;
    /**
     * 检测年限
     */
    Period?: number;
    /**
     * 是否支持北京备案  true 支持  false 不支持
     */
    RecordSupport?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量任务状态
 */
export interface BatchStatus {
    /**
     * 批量任务id
     */
    LogId: number;
    /**
     * 批量任务状态  doing：进行中  success：成功  failed：失败  partial_success：部分成功
     */
    Status: string;
    /**
     * 批量任务类型
     */
    BatchAction: string;
}
/**
 * 域名列表
 */
export interface DomainList {
    /**
        * 是否是溢价域名：
  ture 是
  false 不是
        */
    IsPremium: boolean;
    /**
     * 域名资源ID。
     */
    DomainId: string;
    /**
     * 域名名称。
     */
    DomainName: string;
    /**
        * 是否已设置自动续费 。
  0：未设置
  1：已设置
        */
    AutoRenew: number;
    /**
     * 注册时间。
     */
    CreationDate: string;
    /**
     * 到期时间。
     */
    ExpirationDate: string;
    /**
     * 域名后缀
     */
    Tld: string;
    /**
     * 编码后的后缀（中文会进行编码）
     */
    CodeTld: string;
    /**
        * 域名购买状态。
  ok：正常
  AboutToExpire: 即将到期
  RegisterPending：注册中
  RegisterDoing：注册中
  RegisterFailed：注册失败
  RenewPending：续费期
  RenewDoing：续费中
  RedemptionPending：赎回期
  RedemptionDoing：赎回中
  TransferPending：转入中
  TransferTransing：转入中
  TransferFailed：转入失败
        */
    BuyStatus: string;
}
/**
 * DescribeDomainPriceList请求参数结构体
 */
export interface DescribeDomainPriceListRequest {
    /**
     * 查询价格的后缀列表。默认则为全部后缀
     */
    TldList?: Array<string>;
    /**
     * 查询购买的年份，默认会列出所有年份的价格
     */
    Year?: Array<number>;
    /**
     * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
     */
    Operation?: Array<string>;
}
/**
 * DescribeDomainBaseInfo返回参数结构体
 */
export interface DescribeDomainBaseInfoResponse {
    /**
     * 域名信息
     */
    DomainInfo?: DomainBaseInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Template数据
 */
export interface TemplateInfo {
    /**
     * 模板ID
     */
    TemplateId: string;
    /**
     * 认证状态
     */
    AuditStatus: string;
    /**
     * 创建时间
     */
    CreatedOn: string;
    /**
     * 更新时间
     */
    UpdatedOn: string;
    /**
     * 用户UIN
     */
    UserUin: string;
    /**
     * 是否是默认模板
     */
    IsDefault: string;
    /**
     * 认证失败原因
     */
    AuditReason: string;
    /**
     * 认证信息
     */
    CertificateInfo: CertificateInfo;
    /**
     * 联系人信息
     */
    ContactInfo: ContactInfo;
    /**
     * 模板是否符合规范， 1是 0 否
     */
    IsValidTemplate: number;
    /**
     * 不符合规范原因
     */
    InvalidReason: string;
}
/**
 * CreateDomainBatch请求参数结构体
 */
export interface CreateDomainBatchRequest {
    /**
     * 模板ID
     */
    TemplateId: string;
    /**
     * 购买域名的年限，可选值：[1-10]
     */
    Period: number;
    /**
     * 批量购买的域名,最多为4000个
     */
    Domains: Array<string>;
    /**
     * 付费模式 0手动在线付费，1使用余额付费
     */
    PayMode: number;
}
/**
 * CheckBatchStatus请求参数结构体
 */
export interface CheckBatchStatusRequest {
    /**
     * 批量任务id数组，最多 200 个
     */
    LogIds: Array<number>;
}
/**
 * CheckBatchStatus返回参数结构体
 */
export interface CheckBatchStatusResponse {
    /**
     * 批量任务状态集
     */
    StatusSet?: Array<BatchStatus>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplateList返回参数结构体
 */
export interface DescribeTemplateListResponse {
    /**
     * 模板数量。
     */
    TotalCount?: number;
    /**
     * 模板详细信息列表。
     */
    TemplateSet?: Array<TemplateInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomainBaseInfo请求参数结构体
 */
export interface DescribeDomainBaseInfoRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * DescribeTemplateList请求参数结构体
 */
export interface DescribeTemplateListRequest {
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。
     */
    Limit?: number;
    /**
     * 用户注册类型，默认:all , 个人：I ,企业: E
     */
    Type?: string;
    /**
     * 认证状态：未实名认证:NotUpload, 实名审核中:InAudit，已实名认证:Approved，实名审核失败:Reject
     */
    Status?: string;
}
/**
 * CreateDomainBatch返回参数结构体
 */
export interface CreateDomainBatchResponse {
    /**
        * 批量日志ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LogId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取域名基础信息
 */
export interface DomainBaseInfo {
    /**
     * 域名资源ID。
     */
    DomainId: string;
    /**
     * 域名名称。
     */
    DomainName: string;
    /**
        * 域名实名认证状态。
  NotUpload：未实名认证
  InAudit：实名审核中
  Approved：实名审核通过
  Reject：实名审核失败
        */
    RealNameAuditStatus: string;
    /**
        * 域名实名认证不通过原因。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RealNameAuditUnpassReason: string;
    /**
        * 域名命名审核状态。
  NotAudit：命名审核未上传
  Pending：命名审核待上传
  Auditing：域名命名审核中
  Approved：域名命名审核通过
  Rejected：域名命名审核拒绝
        */
    DomainNameAuditStatus: string;
    /**
        * 域名命名审核不通过原因。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DomainNameAuditUnpassReason: string;
    /**
     * 注册时间。
     */
    CreationDate: string;
    /**
     * 到期时间
     */
    ExpirationDate: string;
    /**
        * 域名状态。
  ok：正常
  serverHold：注册局暂停解析
  clientHold：注册商暂停解析
  pendingTransfer：转移中
  renewingPeriod：续费期
  redemptionPeriod：偿还期
  pendingDelete：删除期
  serverTransferProhibited：注册局禁止转移
  serverUpdateProhibited：注册局禁止更新
  serverDeleteProhibited：注册局禁止删除
  clientTransferProhibited：注册商禁止转移
  clientUpdateProhibited：注册商禁止更新
  clientDeleteProhibited：注册商禁止删除
        */
    DomainStatus: Array<string>;
    /**
        * 域名购买状态。
  ok：正常
  RegisterPending：待注册
  RegisterDoing：注册中
  RegisterFailed：注册失败
  AboutToExpire: 即将过期
  RenewPending：已进入续费期，需要进行续费
  RenewDoing：续费中
  RedemptionPending：已进入赎回期，需要进行续费
  RedemptionDoing：赎回中
  TransferPending：待转入中
  TransferTransing：转入中
  TransferFailed：转入失败
        */
    BuyStatus: string;
    /**
        * 注册类型
  epp （腾讯云自有域名）
  xinnet (新网域名)
        */
    RegistrarType: string;
}
/**
 * 域名价格信息
 */
export interface PriceInfo {
    /**
     * 域名后缀，例如.com
     */
    Tld: string;
    /**
     * 购买年限，范围[1-10]
     */
    Year: number;
    /**
     * 域名原价
     */
    Price: number;
    /**
     * 域名现价
     */
    RealPrice: number;
    /**
     * 商品的购买类型，新购，续费，赎回，转入，续费并转入
     */
    Operation: string;
}
/**
 * DescribeDomainNameList请求参数结构体
 */
export interface DescribeDomainNameListRequest {
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，取值范围[1,100]
     */
    Limit?: number;
}
/**
 * DescribeDomainNameList返回参数结构体
 */
export interface DescribeDomainNameListResponse {
    /**
        * 域名信息集合
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DomainSet?: Array<DomainList>;
    /**
     * 域名总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 域名联系人信息
 */
export interface ContactInfo {
    /**
     * 注册人（中文）
     */
    OrganizationNameCN: string;
    /**
     * 注册人（英文）
     */
    OrganizationName: string;
    /**
     * 联系人（中文）
     */
    RegistrantNameCN: string;
    /**
     * 联系人（英文）
     */
    RegistrantName: string;
    /**
     * 省份（中文）
     */
    ProvinceCN: string;
    /**
     * 城市（中文）
     */
    CityCN: string;
    /**
     * 街道（中文）
     */
    StreetCN: string;
    /**
     * 街道（英文）
     */
    Street: string;
    /**
     * 国家（中文）
     */
    CountryCN: string;
    /**
     * 联系人手机号
     */
    Telephone: string;
    /**
     * 联系人邮箱
     */
    Email: string;
    /**
     * 邮编
     */
    ZipCode: string;
    /**
     * 用户类型 E:组织， I:个人
     */
    RegistrantType: string;
    /**
     * 省份（英文）。作为入参时可以不填
     */
    Province?: string;
    /**
     * 城市（英文）。作为入参时可以不填
     */
    City?: string;
    /**
     * 国家（英文）。作为入参时可以不填
     */
    Country?: string;
}
/**
 * DescribeDomainPriceList返回参数结构体
 */
export interface DescribeDomainPriceListResponse {
    /**
     * 域名价格列表
     */
    PriceList?: Array<PriceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckDomain请求参数结构体
 */
export interface CheckDomainRequest {
    /**
     * 所查询域名名称
     */
    DomainName: string;
    /**
     * 年限
     */
    Period?: string;
}
/**
 * 认证资料信息
 */
export interface CertificateInfo {
    /**
     * 证件号码。
     */
    CertificateCode: string;
    /**
     * 证件类型。
     */
    CertificateType: string;
    /**
     * 证件照片地址。
     */
    ImgUrl: string;
}
