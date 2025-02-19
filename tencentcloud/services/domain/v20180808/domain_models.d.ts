/**
 * 用于域名预释放详情页面
 */
export interface AuctionInfo {
    /**
     * 竞拍人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bidder?: string;
    /**
     * 竞拍时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuctionTime?: string;
    /**
     * 竞拍价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuctionPrice?: number;
    /**
     * 状态 up: 领先 down: 落后
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
}
/**
 * DeleteReservedPreDomainInfo返回参数结构体
 */
export interface DeleteReservedPreDomainInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnPreDomainDetail请求参数结构体
 */
export interface DescribeUnPreDomainDetailRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * DeleteTemplate返回参数结构体
 */
export interface DeleteTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 我竞价的域名结构体。
 */
export interface BiddingResult {
    /**
     * business_id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessID?: string;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 当前价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPrice?: number;
    /**
     * 当前用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentNickname?: string;
    /**
     * 我的出价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingPrice?: number;
    /**
     * 竞价保证金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingBondPrice?: number;
    /**
     * 竞价结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingEndTime?: string;
    /**
     * 竞价标识，1 领先，2 落后
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingFlag?: number;
    /**
     * 出价次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingNum?: number;
    /**
     * 2 竞价中  3 等待出价 4 竞价失败 10 竞价持有者赎回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
}
/**
 * 域名价格信息
 */
export interface PriceInfo {
    /**
     * 域名后缀，例如.com
     */
    Tld?: string;
    /**
     * 购买年限，范围[1-10]
     */
    Year?: number;
    /**
     * 域名原价
     */
    Price?: number;
    /**
     * 域名现价
     */
    RealPrice?: number;
    /**
     * 商品的购买类型，新购，续费，赎回，转入，续费并转入
     */
    Operation?: string;
}
/**
 * DescribeCustomDnsHostSet返回参数结构体
 */
export interface DescribeCustomDnsHostSetResponse {
    /**
     * 自定义DNS Host 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsHostSet?: Array<CustomDnsHost>;
    /**
     * 自定义DNS Host总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTemplate请求参数结构体
 */
export interface ModifyTemplateRequest {
    /**
     * 证件信息
     */
    CertificateInfo: CertificateInfo;
    /**
     * 联系人信息
     */
    ContactInfo: ContactInfo;
    /**
     * 模板ID
     */
    TemplateId: string;
}
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
     * 域名真实价格, 溢价词时价格跟年限有关，非溢价词时价格为1年的价格
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCustomDnsHost返回参数结构体
 */
export interface DeleteCustomDnsHostResponse {
    /**
     * 异步任务ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingSuccessfulDetail请求参数结构体
 */
export interface DescribeBiddingSuccessfulDetailRequest {
    /**
     * business_id
     */
    BusinessID?: string;
}
/**
 * RenewDomainBatch请求参数结构体
 */
export interface RenewDomainBatchRequest {
    /**
     * 域名续费的年限。
     */
    Period: number;
    /**
     * 批量续费的域名。
     */
    Domains: Array<string>;
    /**
     * 付费模式 0手动在线付费，1使用余额付费，2使用特惠包。
     */
    PayMode: number;
    /**
     * 自动续费开关。有三个可选值：
  0 表示关闭，不自动续费
  1 表示开启，将自动续费
  2 表示不处理，保留域名原有状态（默认值）
     */
    AutoRenewFlag?: number;
    /**
     * 特惠包ID
     */
    PackageResourceId?: string;
    /**
     * 渠道来源，pc/miniprogram/h5等
     */
    ChannelFrom?: string;
    /**
     * 订单来源，common正常/dianshi_active点石活动等
     */
    OrderFrom?: string;
    /**
     * 活动id
     */
    ActivityId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetDomainAutoRenew返回参数结构体
 */
export interface SetDomainAutoRenewResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingAppointDetail请求参数结构体
 */
export interface DescribeBiddingAppointDetailRequest {
    /**
     * business_id
     */
    BusinessID?: string;
}
/**
 * DescribeCustomDnsHostSet请求参数结构体
 */
export interface DescribeCustomDnsHostSetRequest {
    /**
     * 域名实例ID(域名基本信息或我的域名列表接口可获取)
     */
    DomainId: string;
    /**
     * 返回数量，默认为20，取值范围[1,100]
     */
    Limit: number;
    /**
     * 偏移量，默认为0
     */
    Offset: number;
}
/**
 * CreateCustomDnsHost返回参数结构体
 */
export interface CreateCustomDnsHostResponse {
    /**
     * 异步任务ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingAppointList请求参数结构体
 */
export interface DescribeBiddingAppointListRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数量
     */
    PageSize: number;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 状态： 1 已预约 9 预约持有者索回
     */
    Status?: Array<number | bigint>;
    /**
     * 排序字段：AppointEndTime 预约结束时间
     */
    SortField?: string;
    /**
     * 排序规则：asc升序，desc降序
     */
    SortOrder?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingList返回参数结构体
 */
export interface DescribeBiddingListResponse {
    /**
     * 搜索结果条数
     */
    Total?: number;
    /**
     * 竞价列表
     */
    BiddingList?: Array<BiddingResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckBatchStatus请求参数结构体
 */
export interface CheckBatchStatusRequest {
    /**
     * 操作日志 ID数组，最多 200 个
     */
    LogIds: Array<number | bigint>;
}
/**
 * 合作商竞价详情
 */
export interface ReserveBidInfo {
    /**
     * 用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: string;
    /**
     * 出价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Price?: number;
    /**
     * 出价时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BidTime?: string;
    /**
     * 当前状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BidStatus?: string;
}
/**
 * CreateDomainBatch请求参数结构体
 */
export interface CreateDomainBatchRequest {
    /**
     * 模板ID。详情请查看：[获取模板列表](https://cloud.tencent.com/document/product/242/48940)
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
     * 付费模式 0手动在线付费，1使用余额付费，2使用特惠包
     */
    PayMode: number;
    /**
     * 自动续费开关。有两个可选值：
  0 表示关闭，不自动续费（默认值）
  1 表示开启，将自动续费
     */
    AutoRenewFlag?: number;
    /**
     * 使用的特惠包ID，PayMode为2时必填
     */
    PackageResourceId?: string;
    /**
     * 是否开启更新锁：0=默认不开启，1=开启
     */
    UpdateProhibition?: number;
    /**
     * 是否开启转移锁：0=默认不开启，1=开启
     */
    TransferProhibition?: number;
    /**
     * 渠道来源，pc/miniprogram/h5等
     */
    ChannelFrom?: string;
    /**
     * 订单来源，common正常/dianshi_active点石活动等
     */
    OrderFrom?: string;
    /**
     * 活动id
     */
    ActivityId?: string;
}
/**
 * 预释放域名预约参数补充成功信息
 */
export interface SucDomainInfo {
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 业务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId?: string;
}
/**
 * ModifyTemplate返回参数结构体
 */
export interface ModifyTemplateResponse {
    /**
     * 模板信息
     */
    Template?: TemplateInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 我得标的域名结构体。
 */
export interface BiddingSuccessfulResult {
    /**
     * 支付结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayEndTime?: string;
}
/**
 * DescribeBatchOperationLogs请求参数结构体
 */
export interface DescribeBatchOperationLogsRequest {
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为200。
     */
    Limit?: number;
}
/**
 * UploadImage请求参数结构体
 */
export interface UploadImageRequest {
    /**
     * 资质照片，照片的base64编码。
     */
    ImageFile: string;
}
/**
 * ModifyCustomDnsHost返回参数结构体
 */
export interface ModifyCustomDnsHostResponse {
    /**
     * 异步任务ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BidPreDomains返回参数结构体
 */
export interface BidPreDomainsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAuctionList请求参数结构体
 */
export interface DescribeAuctionListRequest {
    /**
     * 业务ID，通过接口DescribeBiddingList返回结果中获取
     */
    BusinessId: string;
    /**
     * 条数，默认10条
     */
    Limit?: number;
    /**
     * 偏移量
     */
    OffSet?: number;
}
/**
 * DescribeBatchOperationLogDetails返回参数结构体
 */
export interface DescribeBatchOperationLogDetailsResponse {
    /**
     * 总数量。
     */
    TotalCount?: number;
    /**
     * 日志详情列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainBatchDetailSet?: Array<DomainBatchDetailSet>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDomainDNSBatch请求参数结构体
 */
export interface ModifyDomainDNSBatchRequest {
    /**
     * 批量操作的域名。
     */
    Domains: Array<string>;
    /**
     * 域名DNS 数组。
     */
    Dns: Array<string>;
}
/**
 * DescribeReservedBidInfo请求参数结构体
 */
export interface DescribeReservedBidInfoRequest {
    /**
     * 业务ID
     */
    BusinessId: string;
}
/**
 * DeletePhoneEmail返回参数结构体
 */
export interface DeletePhoneEmailResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReservedPreDomains返回参数结构体
 */
export interface ReservedPreDomainsResponse {
    /**
     * 预定成功域名列表
     */
    SucDomainList?: Array<string>;
    /**
     * 预定失败域名列表
     */
    FailDomainList?: Array<FailReservedDomainInfo>;
    /**
     * 域名预定成功详情
     */
    SucDomains?: Array<SucDomainInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnPreDomainDetail返回参数结构体
 */
export interface DescribeUnPreDomainDetailResponse {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 预约人数
     */
    PreCount?: number;
    /**
     * 域名注册时间
     */
    RegTime?: string;
    /**
     * 域名删除时间
     */
    DeleteTime?: string;
    /**
     * 到期时间
     */
    ExpireTime?: string;
    /**
     * 域名状态
     */
    Status?: string;
    /**
     * 域名价格
     */
    CurrentPrice?: number;
    /**
     * 域名保证金
     */
    AppointBondPrice?: number;
    /**
     * 是否已经预约
     */
    IsAppoint?: boolean;
    /**
     * 业务ID
     */
    BusinessId?: string;
    /**
     * 是否为原持有者域名
     */
    IsDomainUser?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量操作日志详情
 */
export interface DomainBatchDetailSet {
    /**
     * 详情ID
     */
    Id?: number;
    /**
     * 类型  new: 注册域名 batch_transfer_prohibition_on:开启禁止转移  batch_transfer_prohibition_off:关闭禁止转移 batch_update_prohibition_on:开启禁止更新   batch_update_prohibition_off:关闭禁止更新
     */
    Action?: string;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 执行状态：
  doing 执行中。
  failed 操作失败。
  success  操作成功。
     */
    Status?: string;
    /**
     * 失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason?: string;
    /**
     * 创建时间
     */
    CreatedOn?: string;
    /**
     * 更新时间
     */
    UpdatedOn?: string;
    /**
     * 订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BigDealId?: string;
}
/**
 * UploadImage返回参数结构体
 */
export interface UploadImageResponse {
    /**
     * 资质照片地址。
     */
    AccessUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SendPhoneEmailCode返回参数结构体
 */
export interface SendPhoneEmailCodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BidDetailPage请求参数结构体
 */
export interface BidDetailPageRequest {
    /**
     * 业务ID
     */
    BusinessId: string;
}
/**
 * BiddingPreRelease返回参数结构体
 */
export interface BiddingPreReleaseResponse {
    /**
     * 是否需要额外支付
     */
    IsNeedPay?: boolean;
    /**
     * 计费请求参数，以Json字符串的形式进行返回。
     */
    BillingParam?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取域名基础模板信息
 */
export interface DomainSimpleInfo {
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
  NoAudit: 无需实名认证
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
  serverRenewProhibited: 注册局禁止续费
  clientRenewProhobited: 注册商禁止续费
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
     * 注册商类型
  epp: DNSPod, Inc.（烟台帝思普网络科技有限公司）
  qcloud: Tencent Cloud Computing (Beijing) Limited Liability Company（腾讯云计算（北京）有限责任公司）
  yunxun: Guangzhou Yunxun Information Technology Co., Ltd.（广州云讯信息科技有限公司）
  xinnet: Xin Net Technology Corporation（北京新网数码信息技术有限公司）
     */
    RegistrarType: string;
    /**
     * 域名绑定的ns
     */
    NameServer: Array<string>;
    /**
     * true：开启锁定
  false：关闭锁定
     */
    LockTransfer: boolean;
    /**
     * 锁定结束时间
     */
    LockEndTime: string;
    /**
     * 认证类型：I=个人，E=企业
     */
    RegistrantType: string;
    /**
     * 域名所有者，中文
     */
    OrganizationNameCN: string;
    /**
     * 域名所有者，英文
     */
    OrganizationName: string;
    /**
     * 域名联系人，中文
     */
    RegistrantNameCN: string;
    /**
     * 域名联系人，英文
     */
    RegistrantName: string;
}
/**
 * CreateDomainRedemption返回参数结构体
 */
export interface CreateDomainRedemptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePhoneEmail请求参数结构体
 */
export interface DeletePhoneEmailRequest {
    /**
     * 手机或者邮箱
     */
    Code: string;
    /**
     * 1：手机  2：邮箱
     */
    Type: number;
}
/**
 * DescribeReservedPreDomainInfo返回参数结构体
 */
export interface DescribeReservedPreDomainInfoResponse {
    /**
     * 预释放预约列表
     */
    ReservedPreDomainInfoList?: Array<ReservedPreDomainInfo>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    LogId?: number;
    /**
     * 批量任务状态  doing：进行中  success：成功  failed：失败  partial_success：部分成功
     */
    Status?: string;
    /**
     * 批量任务类型
     */
    BatchAction?: string;
}
/**
 * DescribePreAuctionList返回参数结构体
 */
export interface DescribePreAuctionListResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 预释放竞价列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreAuctionList?: Array<PreAuctionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RenewDomainBatch返回参数结构体
 */
export interface RenewDomainBatchResponse {
    /**
     * 操作日志ID。
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询预释放预约列表域名详情
 */
export interface ReservedDomainInfo {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 注册时间
     */
    RegTime?: string;
    /**
     * 到期时间
     */
    ExpireTime?: string;
    /**
     * 续费时间结束
     */
    RenewEndTime?: string;
    /**
     * 赎回结束时间
     */
    RestoreEndTime?: string;
    /**
     * 域名预约结束时间
     */
    ReservedEndTime?: string;
}
/**
 * TransferInDomainBatch返回参数结构体
 */
export interface TransferInDomainBatchResponse {
    /**
     * 日志ID
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchModifyDomainInfo返回参数结构体
 */
export interface BatchModifyDomainInfoResponse {
    /**
     * 日志ID
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 用户Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 手机号邮箱列表
 */
export interface PhoneEmailData {
    /**
     * 手机号或者邮箱
     */
    Code?: string;
    /**
     * 1：手机  2：邮箱
     */
    Type?: number;
    /**
     * 创建时间
     */
    CreatedOn?: string;
    /**
     * 1=控制台校验，2=第三方校验
     */
    CheckStatus?: number;
}
/**
 * CreateTemplate返回参数结构体
 */
export interface CreateTemplateResponse {
    /**
     * 模板信息
     */
    Template?: TemplateInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateProhibitionBatch请求参数结构体
 */
export interface UpdateProhibitionBatchRequest {
    /**
     * 批量操作的域名。
     */
    Domains: Array<string>;
    /**
     * 是否开启禁止域名更新。
  True:开启禁止域名更新状态。
  False：关闭禁止域名更新状态。
     */
    Status: boolean;
}
/**
 * 预释放列表信息
 */
export interface PreReleaseInfo {
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 预订倒计时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReservationTime?: string;
    /**
     * 域名注册时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegTime?: string;
    /**
     * 域名删除时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DelTime?: string;
    /**
     * 当前人数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPeople?: number;
    /**
     * 当前价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Price?: number;
    /**
     * 是否收藏
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsFollow?: boolean;
    /**
     * 是否已经预约
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAppoint?: boolean;
    /**
     * 业务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId?: string;
    /**
     * 是否为原持有者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDomainUser?: boolean;
}
/**
 * BiddingPreRelease请求参数结构体
 */
export interface BiddingPreReleaseRequest {
    /**
     * 业务ID
     */
    BusinessId: string;
    /**
     * 价格
     */
    Price: number;
}
/**
 * DescribePreDomainList返回参数结构体
 */
export interface DescribePreDomainListResponse {
    /**
     * 预释放预约列表数据
     */
    ReservedDomainList?: Array<ReservedDomainInfo>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyIntlCustomDnsHost返回参数结构体
 */
export interface ModifyIntlCustomDnsHostResponse {
    /**
     * 任务ID
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribePayWaitDetail返回参数结构体
 */
export interface DescribePayWaitDetailResponse {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 域名类型
     */
    Status?: string;
    /**
     * 支付结束时间
     */
    EndTime?: string;
    /**
     * 域名注册时间
     */
    RegTime?: string;
    /**
     * 域名成交价格
     */
    Price?: number;
    /**
     * 待退还保证金
     */
    RetDeposit?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeBatchOperationLogs返回参数结构体
 */
export interface DescribeBatchOperationLogsResponse {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainBatchLogSet?: Array<DomainBatchLogSet>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePreAuctionList请求参数结构体
 */
export interface DescribePreAuctionListRequest {
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 条数
     */
    PageSize?: number;
}
/**
 * SendPhoneEmailCode请求参数结构体
 */
export interface SendPhoneEmailCodeRequest {
    /**
     * 手机或者邮箱号。
     */
    Code: string;
    /**
     * 1：手机  2：邮箱。
     */
    Type: number;
}
/**
 * DeleteBidding请求参数结构体
 */
export interface DeleteBiddingRequest {
    /**
     * business_id
     */
    BusinessID?: string;
}
/**
 * DescribePhoneEmailList返回参数结构体
 */
export interface DescribePhoneEmailListResponse {
    /**
     * 手机或者邮箱列表
     */
    PhoneEmailList?: Array<PhoneEmailData>;
    /**
     * 总数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePreDomainList请求参数结构体
 */
export interface DescribePreDomainListRequest {
    /**
     * 页码，默认为1
     */
    Page?: number;
    /**
     * 条数，默认为20
     */
    Size?: number;
    /**
     * 用于结束时间筛选
     */
    EndTime?: string;
    /**
     * 用户指定上架时间筛选
     */
    UpTime?: string;
}
/**
 * 预释放竞价列表
 */
export interface PreAuctionInfo {
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 竞价倒计时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BiddingTime?: string;
    /**
     * 出价次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BidCount?: number;
    /**
     * 当前价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Price?: number;
    /**
     * 用户操作 bid：出价 "noAction"：无法操作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Op?: string;
    /**
     * 业务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId?: string;
}
/**
 * CreatePhoneEmail返回参数结构体
 */
export interface CreatePhoneEmailResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 失败预约预释放域名信息
 */
export interface FailReservedDomainInfo {
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 预约失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailReason?: string;
}
/**
 * ReservedPreDomains请求参数结构体
 */
export interface ReservedPreDomainsRequest {
    /**
     * 预约预释放域名列表
     */
    DomainList: Array<string>;
    /**
     * 模板ID
     */
    TemplateId: string;
    /**
     * 结束后是否自动支付尾款，默认开启 传入1关闭
     */
    IsAutoPay?: number;
    /**
     * 结束后是否自动进行梯度保证金扣除，默认开启 传入1关闭
     */
    IsBidAutoPay?: number;
}
/**
 * BatchModifyDomainInfo请求参数结构体
 */
export interface BatchModifyDomainInfoRequest {
    /**
     * 批量修改的域名。
     */
    Domains: Array<string>;
    /**
     * 模板ID(可从模板列表接口获取)
     */
    TemplateId: string;
    /**
     * true： 开启60天内禁止转移注册商锁定
  false：关闭60天内禁止转移注册商锁定
  默认 true
     */
    LockTransfer?: boolean;
}
/**
 * DescribeBiddingDetail返回参数结构体
 */
export interface DescribeBiddingDetailResponse {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 出价次数
     */
    BiddingNum?: number;
    /**
     * 竞价开始时间
     */
    BiddingStartTime?: string;
    /**
     * 竞价结束时间
     */
    BiddingEndTime?: string;
    /**
     *  注册时间
     */
    RegTime?: string;
    /**
     * 过期时间
     */
    ExpireTime?: string;
    /**
     * 删除时间
     */
    DeleteTime?: string;
    /**
     * 当前价格
     */
    CurrentPrice?: number;
    /**
     * 当前用户昵称
     */
    CurrentNickname?: string;
    /**
     * 竞价保证金
     */
    BiddingBondPrice?: number;
    /**
     * 2 竞价中  3 等待出价 4 竞价失败 10 竞价持有者赎回
     */
    Status?: number;
    /**
     * 竞价标识，1 领先，2 落后
     */
    BiddingFlag?: number;
    /**
     * 是否退款，yes表示退款，no表示不退款
     */
    BiddingBondRefund?: string;
    /**
     * 我的出价
     */
    BiddingPrice?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteReservedPreDomainInfo请求参数结构体
 */
export interface DeleteReservedPreDomainInfoRequest {
    /**
     * 资源ID列表
     */
    ResourceIdList: Array<string>;
}
/**
 * 预约预释放域名详情信息
 */
export interface ReservedPreDomainInfo {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 1. 预定成功 2. 预定失败（预定失败Reason字段将会被赋值）3. 域名交割中 4. 域名交割完成
     */
    ReservedStatus?: number;
    /**
     * 域名预定失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailReason?: string;
    /**
     * 预计变更所有权时间（仅用于参考，实际时间会存在误差）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChangeOwnerTime?: string;
    /**
     * 注册时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegTime?: string;
    /**
     * 到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 资源ID，用于删除资源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 业务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId?: string;
}
/**
 * DeleteBidding返回参数结构体
 */
export interface DeleteBiddingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTemplate返回参数结构体
 */
export interface DescribeTemplateResponse {
    /**
     * 模板信息
     */
    Template?: TemplateInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePayWaitDetail请求参数结构体
 */
export interface DescribePayWaitDetailRequest {
    /**
     * 业务ID
     */
    BusinessId: string;
}
/**
 * DescribeDomainSimpleInfo请求参数结构体
 */
export interface DescribeDomainSimpleInfoRequest {
    /**
     * 域名
     */
    DomainName: string;
}
/**
 * TransferProhibitionBatch请求参数结构体
 */
export interface TransferProhibitionBatchRequest {
    /**
     * 批量操作的域名。
     */
    Domains: Array<string>;
    /**
     * 是否开启禁止域名转移。
  True: 开启禁止域名转移状态。
  False：关闭禁止域名转移状态。
     */
    Status: boolean;
}
/**
 * DescribeDomainSimpleInfo返回参数结构体
 */
export interface DescribeDomainSimpleInfoResponse {
    /**
     * 域名信息
     */
    DomainInfo?: DomainSimpleInfo;
    /**
     * 账号ID
     */
    Uin?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingSuccessfulList返回参数结构体
 */
export interface DescribeBiddingSuccessfulListResponse {
    /**
     * 搜索结果条数
     */
    Total?: number;
    /**
     * 得标列表
     */
    SuccessfulList?: Array<BiddingSuccessfulResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TemplateId?: string;
    /**
     * 认证状态：未实名认证:NotUpload, 实名审核中:InAudit，已实名认证:Approved，实名审核失败:Reject
     */
    AuditStatus?: string;
    /**
     * 创建时间
     */
    CreatedOn?: string;
    /**
     * 更新时间
     */
    UpdatedOn?: string;
    /**
     * 用户UIN
     */
    UserUin?: string;
    /**
     * 是否是默认模板: 是:yes，否:no
     */
    IsDefault?: string;
    /**
     * 认证失败原因
     */
    AuditReason?: string;
    /**
     * 认证信息
     */
    CertificateInfo?: CertificateInfo;
    /**
     * 联系人信息
     */
    ContactInfo?: ContactInfo;
    /**
     * 模板是否符合规范， 1是 0 否
     */
    IsValidTemplate?: number;
    /**
     * 不符合规范原因
     */
    InvalidReason?: string;
    /**
     * 是包含黑名单手机或邮箱
     */
    IsBlack?: boolean;
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
  SFZ: 身份证。
  HZ: 护照。
  TXZ: 中国港澳居民来往内地通行证。
  TWSFZ: 中国台湾居民来往大陆通行证。
  GWSFZ: 外国人永久居留身份证。
  ORG: 组织机构代码证
  YYZZ: 工商营业执照。
  TYDMZ: 统一社会信用代码证书。
  BDDH: 部队代号
  JDXKZ: 军队单位对外有偿服务许可证。
  SYZS: 事业单位法定代表人证书。
  GWCZDJZ: 外国企业常驻代表机构登记证。
  STDJZ: 社会团体法定代表人登记证书。
  ZJDJZ: 宗教活动场所登记证。
  MBDJZ: 民办非企业单位登记证书。
  JJDJZ: 基金会法定代表人登记证书。
  LSXKZ: 律师事务所执业许可证。
  GWZHDJZ: 外国在华文化中心登记证。
  GWLYDJZ: 外国政府旅游部门常驻代表机构批准登记证。
  SFXKZ: 司法鉴定许可证
  GWJGZJ: 外国机构证件。
  SHFWJGZ: 社会服务机构登记证书。
  MBXXXKZ: 民办学校办学许可证。
  YLJGXKZ: 医疗机构执业许可证。
  GAJZZ: 中国港澳居住证。
  TWJZZ: 中国台湾居住证。
  QTTYDM: 其他-统一社会信用代码证书。
  GZJGZY: 公证机构执业证。
     */
    CertificateType: string;
    /**
     * 证件照片地址。
     */
    ImgUrl: string;
    /**
     * 原始照片地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginImgUrl?: string;
    /**
     * 联系人证件号码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistrantCertificateCode?: string;
    /**
     * 联系人证件类型。
  SFZ: 身份证。
  HZ: 护照。
  TXZ: 中国港澳居民来往内地通行证。
  TWSFZ: 中国台湾居民来往大陆通行证。
  GWSFZ: 外国人永久居留身份证。
  ORG: 组织机构代码证
  YYZZ: 工商营业执照。
  TYDMZ: 统一社会信用代码证书。
  BDDH: 部队代号
  JDXKZ: 军队单位对外有偿服务许可证。
  SYZS: 事业单位法定代表人证书。
  GWCZDJZ: 外国企业常驻代表机构登记证。
  STDJZ: 社会团体法定代表人登记证书。
  ZJDJZ: 宗教活动场所登记证。
  MBDJZ: 民办非企业单位登记证书。
  JJDJZ: 基金会法定代表人登记证书。
  LSXKZ: 律师事务所执业许可证。
  GWZHDJZ: 外国在华文化中心登记证。
  GWLYDJZ: 外国政府旅游部门常驻代表机构批准登记证。
  SFXKZ: 司法鉴定许可证
  GWJGZJ: 外国机构证件。
  SHFWJGZ: 社会服务机构登记证书。
  MBXXXKZ: 民办学校办学许可证。
  YLJGXKZ: 医疗机构执业许可证。
  GAJZZ: 中国港澳居住证。
  TWJZZ: 中国台湾居住证。
  QTTYDM: 其他-统一社会信用代码证书。
  GZJGZY: 公证机构执业证。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistrantCertificateType?: string;
    /**
     * 联系人证件照片地址。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistrantImgUrl?: string;
}
/**
 * TransferInDomainBatch请求参数结构体
 */
export interface TransferInDomainBatchRequest {
    /**
     * 转入的域名名称数组。
     */
    Domains: Array<string>;
    /**
     * 域名转移码数组。
     */
    PassWords: Array<string>;
    /**
     * 模板ID。
     */
    TemplateId: string;
    /**
     * 付费模式 0手动在线付费，1使用余额付费。
     */
    PayMode: number;
    /**
     * 自动续费开关。有两个可选值：
  0 表示关闭，不自动续费（默认值）
  1 表示开启，将自动续费
     */
    AutoRenewFlag?: number;
    /**
     * true： 开启60天内禁止转移注册商锁定
  false：关闭60天内禁止转移注册商锁定
  默认 true
     */
    LockTransfer?: boolean;
    /**
     * 是否开启更新锁：0=默认不开启，1=开启
     */
    UpdateProhibition?: number;
    /**
     * 是否开启转移锁：0=默认不开启，1=开启
     */
    TransferProhibition?: number;
    /**
     * 渠道来源，pc/miniprogram/h5等
     */
    ChannelFrom?: string;
    /**
     * 订单来源，common正常/dianshi_active点石活动等
     */
    OrderFrom?: string;
    /**
     * 活动id
     */
    ActivityId?: string;
}
/**
 * CreateTemplate请求参数结构体
 */
export interface CreateTemplateRequest {
    /**
     * 联系人信息
     */
    ContactInfo: ContactInfo;
    /**
     * 证件信息
     */
    CertificateInfo?: CertificateInfo;
}
/**
 * DescribeReservedPreDomainInfo请求参数结构体
 */
export interface DescribeReservedPreDomainInfoRequest {
    /**
     * 域名,每次最多支持500条域名查询
     */
    DomainList?: Array<string>;
    /**
     * 状态，用于筛选，可不填写(1. 成功 2. 失败（失败Reason字段将会被赋值）3. 域名交割中 4. 域名交割完成 5. 预约 6. 竞价)
     */
    ReservedStatus?: number;
    /**
     * 根据预约时间排序，仅支持："desc","asc"。
     */
    ReservedTimeSort?: string;
    /**
     * 条数
     */
    Limit?: number;
    /**
     * 偏移量
     */
    Offset?: number;
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
    Year?: Array<number | bigint>;
    /**
     * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
     */
    Operation?: Array<string>;
}
/**
 * ModifyIntlCustomDnsHost请求参数结构体
 */
export interface ModifyIntlCustomDnsHostRequest {
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * DNS Host
     */
    DnsName: string;
    /**
     * IP地址
     */
    IpSet: Array<string>;
}
/**
 * DescribePreReleaseList返回参数结构体
 */
export interface DescribePreReleaseListResponse {
    /**
     * 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 预释放列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreReleaseList?: Array<PreReleaseInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 年限。该参数为空时无法查询溢价词域名
     */
    Period?: string;
}
/**
 * TransferProhibitionBatch返回参数结构体
 */
export interface TransferProhibitionBatchResponse {
    /**
     * 日志ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingList请求参数结构体
 */
export interface DescribeBiddingListRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数量
     */
    PageSize: number;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 2 竞价中  3 等待出价 4 竞价失败 10 竞价持有者赎回
     */
    Status?: Array<number | bigint>;
    /**
     * 排序字段：BiddingEndTime 竞价结束时间
  BiddingPrice 我的价格
     */
    SortField?: string;
    /**
     * 排序规则：asc升序，desc降序
     */
    SortOrder?: string;
}
/**
 * ModifyCustomDnsHost请求参数结构体
 */
export interface ModifyCustomDnsHostRequest {
    /**
     * 域名实例ID
     */
    DomainId: string;
    /**
     * DNS名称
     */
    DnsName: string;
    /**
     * IP地址列表
     */
    IpSet: Array<string>;
}
/**
 * DescribeBiddingSuccessfulList请求参数结构体
 */
export interface DescribeBiddingSuccessfulListRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数量
     */
    PageSize: number;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 状态：5 等待支付 6 等待转移， 7 转移中，8 交易成功，11 尾款阶段持有者索回，12 已违约
     */
    Status?: Array<number | bigint>;
    /**
     * 排序字段：SuccessfulTime 预约结束时间
     */
    SortField?: string;
    /**
     * 排序规则：asc升序，desc降序
     */
    SortOrder?: string;
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
     * 认证状态：未实名审核:NotUpload, 实名审核中:InAudit，已实名审核:Approved，实名审核失败:Reject，更新手机邮箱:NotVerified。
     */
    Status?: string;
    /**
     * 关键字，用于域名所有者筛选
     */
    Keyword?: string;
}
/**
 * ModifyDomainOwnerBatch返回参数结构体
 */
export interface ModifyDomainOwnerBatchResponse {
    /**
     * 日志id
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDomainOwnerBatch请求参数结构体
 */
export interface ModifyDomainOwnerBatchRequest {
    /**
     * 要过户的域名。
     */
    Domains: Array<string>;
    /**
     * 转入账户的uin。
     */
    NewOwnerUin: string;
    /**
     * 是否同时转移对应的 DNS 解析域名，默认false
     */
    TransferDns?: boolean;
    /**
     * 转入账户的appid。
     */
    NewOwnerAppId?: string;
}
/**
 * BidPreDomains请求参数结构体
 */
export interface BidPreDomainsRequest {
    /**
     * 业务ID
     */
    BusinessId?: string;
    /**
     * 价格
     */
    Price?: number;
}
/**
 * DescribeAuctionList返回参数结构体
 */
export interface DescribeAuctionListResponse {
    /**
     * 竞拍详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuctionList?: Array<AuctionInfo>;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDomainDNSBatch返回参数结构体
 */
export interface ModifyDomainDNSBatchResponse {
    /**
     * 日志ID。
     */
    LogId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateProhibitionBatch返回参数结构体
 */
export interface UpdateProhibitionBatchResponse {
    /**
     * 日志ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePhoneEmail请求参数结构体
 */
export interface CreatePhoneEmailRequest {
    /**
     * 手机号或者邮箱
     */
    Code: string;
    /**
     * 1：手机   2：邮箱
     */
    Type: number;
    /**
     * 验证码(通过SendPhoneEmailCode发送到手机或邮箱的验证码)
     */
    VerifyCode: string;
}
/**
 * DescribeBiddingDetail请求参数结构体
 */
export interface DescribeBiddingDetailRequest {
    /**
     * business_id
     */
    BusinessID?: string;
}
/**
 * DescribeTemplate请求参数结构体
 */
export interface DescribeTemplateRequest {
    /**
     * 模板ID(模板列表接口可获取)
     */
    TemplateId: string;
}
/**
 * DescribeBiddingAppointDetail返回参数结构体
 */
export interface DescribeBiddingAppointDetailResponse {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 预约人数
     */
    AppointNum?: number;
    /**
     * 预约开始时间
     */
    AppointStartTime?: string;
    /**
     * 预约结束时间
     */
    AppointEndTime?: string;
    /**
     *  注册时间
     */
    RegTime?: string;
    /**
     * 过期时间
     */
    ExpireTime?: string;
    /**
     * 删除时间
     */
    DeleteTime?: string;
    /**
     * 当前价格
     */
    AppointPrice?: number;
    /**
     * 预约保证金
     */
    AppointBondPrice?: number;
    /**
     * 1 已预约，2 竞价中，3 等待出价 4 竞价失败 5 等待支付 6 等待转移，7 转移中 8 交易成功 9 预约持有者赎回 10 竞价持有者赎回 11 其他阶段持有者赎回 12 违约
     */
    Status?: number;
    /**
     * 预约保证金是否已经退回
  yes：退回 no: 未退回
     */
    BiddingBondRefund?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReservedBidInfo返回参数结构体
 */
export interface DescribeReservedBidInfoResponse {
    /**
     * 竞价领先价格
     */
    UpPrice?: number;
    /**
     * 请求用户当前价格
     */
    Price?: number;
    /**
     * 领先用户
     */
    UpUser?: string;
    /**
     * 竞价详细数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BidList?: Array<ReserveBidInfo>;
    /**
     * 竞价结束时间
     */
    BidEndTime?: string;
    /**
     * 是否领先
     */
    IsUp?: boolean;
    /**
     * 下次出价金额
     */
    NextPrice?: number;
    /**
     * 状态：1. 等待竞价 2.竞价中 3.竞价结束
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBiddingSuccessfulDetail返回参数结构体
 */
export interface DescribeBiddingSuccessfulDetailResponse {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 得标时间
     */
    SuccessfulTime?: string;
    /**
     * 得标价格
     */
    SuccessfulPrice?: number;
    /**
     *  注册时间
     */
    RegTime?: string;
    /**
     * 过期时间
     */
    ExpireTime?: string;
    /**
     * 删除时间
     */
    DeleteTime?: string;
    /**
     * 付款结束时间
     */
    PayEndTime?: string;
    /**
     * 保证金，是否退款，yes表示退款，no表示不退款
     */
    BiddingBondRefund?: string;
    /**
     * 保证金
     */
    BiddingBondPrice?: number;
    /**
     * 状态：5 等待支付 6 等待转移， 7 转移中，8 交易成功，11 尾款阶段持有者索回，12 已违约
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTldList请求参数结构体
 */
export declare type DescribeTldListRequest = null;
/**
 * DescribeBatchOperationLogDetails请求参数结构体
 */
export interface DescribeBatchOperationLogDetailsRequest {
    /**
     * 日志ID。
     */
    LogId: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为200。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SyncCustomDnsHost请求参数结构体
 */
export interface SyncCustomDnsHostRequest {
    /**
     * 域名实例ID
     */
    DomainId: string;
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
 * DeleteTemplate请求参数结构体
 */
export interface DeleteTemplateRequest {
    /**
     * 模板ID(可通过模板信息列表获取)
     */
    TemplateId: string;
}
/**
 * BidDetailPage返回参数结构体
 */
export interface BidDetailPageResponse {
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 当前域名价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPrice?: number;
    /**
     * 用户上次出价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BidPrice?: number;
    /**
     * 当前加价幅度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPriceScope?: number;
    /**
     * 加价幅度区间配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceScope?: Array<PriceScopeConf>;
    /**
     * 用户当前已经支付了的保证金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepositPrice?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自定义DNS Host
 */
export interface CustomDnsHost {
    /**
     * DNS名称
     */
    DnsName: string;
    /**
     * IP地址列表
     */
    IpSet: Array<string>;
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
    IsPremium?: boolean;
    /**
     * 域名资源ID。
     */
    DomainId?: string;
    /**
     * 域名名称。
     */
    DomainName?: string;
    /**
     * 是否已设置自动续费 。
  0：未设置
  1：已设置
  2：设置后，关闭
     */
    AutoRenew?: number;
    /**
     * 注册时间。
     */
    CreationDate?: string;
    /**
     * 到期时间。
     */
    ExpirationDate?: string;
    /**
     * 域名后缀
     */
    Tld?: string;
    /**
     * 编码后的后缀（中文会进行编码）
     */
    CodeTld?: string;
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
    BuyStatus?: string;
}
/**
 * 预释放价格区间配置
 */
export interface PriceScopeConf {
    /**
     * 最高价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxPrice?: number;
    /**
     * 最低价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinPrice?: number;
    /**
     * 价格幅度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Price?: number;
    /**
     * 保证金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepositPrice?: number;
}
/**
 * DescribePhoneEmailList请求参数结构体
 */
export interface DescribePhoneEmailListRequest {
    /**
     * 0：所有类型  1：手机  2：邮箱，默认0
     */
    Type?: number;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，取值范围[1,200]
     */
    Limit?: number;
    /**
     * 手机或者邮箱，用于精确搜索
     */
    Code?: string;
}
/**
 * DescribeBiddingAppointList返回参数结构体
 */
export interface DescribeBiddingAppointListResponse {
    /**
     * 搜索结果条数
     */
    Total?: number;
    /**
     * 预约列表
     */
    AppointList?: Array<BiddingAppointResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  NoAudit: 无需实名认证
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
  serverRenewProhibited: 注册局禁止续费
  clientRenewProhobited: 注册商禁止续费
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
     * 注册商类型
  epp: DNSPod, Inc.（烟台帝思普网络科技有限公司）
  qcloud: Tencent Cloud Computing (Beijing) Limited Liability Company（腾讯云计算（北京）有限责任公司）
  yunxun: Guangzhou Yunxun Information Technology Co., Ltd.（广州云讯信息科技有限公司）
  xinnet: Xin Net Technology Corporation（北京新网数码信息技术有限公司）
     */
    RegistrarType: string;
    /**
     * 域名绑定的ns
     */
    NameServer: Array<string>;
    /**
     * true：开启锁定
  false：关闭锁定
     */
    LockTransfer: boolean;
    /**
     * 锁定结束时间
     */
    LockEndTime: string;
}
/**
 * DescribeTldList返回参数结构体
 */
export interface DescribeTldListResponse {
    /**
     * 支持的后缀列表
     */
    List?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量操作记录
 */
export interface DomainBatchLogSet {
    /**
     * 日志ID
     */
    LogId?: number;
    /**
     * 数量
     */
    Number?: number;
    /**
     * 执行状态：
  doing 执行中。
  done 执行完成。
     */
    Status?: string;
    /**
     * 提交时间
     */
    CreatedOn?: string;
    /**
     * 批量操作成功个数
     */
    Success?: number;
    /**
     * 批量操作处理中个数
     */
    Doing?: number;
    /**
     * 批量操作失败个数
     */
    Failed?: number;
}
/**
 * CreateCustomDnsHost请求参数结构体
 */
export interface CreateCustomDnsHostRequest {
    /**
     * 域名实例ID
     */
    DomainId: string;
    /**
     * Dns名称
     */
    DnsName: string;
    /**
     * IP地址列表
     */
    IpSet: Array<string>;
}
/**
 * DeleteCustomDnsHost请求参数结构体
 */
export interface DeleteCustomDnsHostRequest {
    /**
     * 域名实例ID
     */
    DomainId: string;
    /**
     * DNS名称
     */
    DnsName: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDomainRedemption请求参数结构体
 */
export interface CreateDomainRedemptionRequest {
    /**
     * 域名 ID
     */
    DomainId: string;
}
/**
 * SetDomainAutoRenew请求参数结构体
 */
export interface SetDomainAutoRenewRequest {
    /**
     * 域名ID 例如：domain-123abc
     */
    DomainId: string;
    /**
     * AutoRenew 有三个可选值：
   0：不设置自动续费
  1：设置自动续费
  2：设置到期后不续费
     */
    AutoRenew: number;
}
/**
 * SyncCustomDnsHost返回参数结构体
 */
export interface SyncCustomDnsHostResponse {
    /**
     * 异步任务ID
     */
    LogId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePreReleaseList请求参数结构体
 */
export interface DescribePreReleaseListRequest {
    /**
     * 关键词
     */
    Keywords?: string;
    /**
     * 搜索关键字，开头
     */
    DomainStart?: boolean;
    /**
     * 搜索关键字结尾
     */
    DomainEnd?: boolean;
    /**
     * 排序
     */
    Sort?: number;
    /**
     * 起始价格
     */
    PriceStart?: number;
    /**
     * 结束价格
     */
    PriceEnd?: number;
    /**
     * 起始域名长度
     */
    LengthStart?: number;
    /**
     * 结束域名长度
     */
    LengthEnd?: number;
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 每页显示数
     */
    PageSize?: number;
    /**
     * 后缀
     */
    Suffix?: Array<number | bigint>;
    /**
     * 一级分类
     */
    ClassOne?: number;
    /**
     * 二级分类
     */
    ClassTwo?: Array<number | bigint>;
    /**
     * 三级分类
     */
    ClassThree?: Array<number | bigint>;
    /**
     * 四级分类
     */
    ClassFour?: Array<number | bigint>;
    /**
     * 排除关键字，开头
     */
    FilterStart?: boolean;
    /**
     * 排除关键字，结尾
     */
    FilterEnd?: boolean;
    /**
     * 排除关键字
     */
    FilterWords?: string;
    /**
     * 交易类型
     */
    TransType?: number;
    /**
     * 搜索白金域名
     */
    IsTop?: boolean;
    /**
     * 结束时间排序啊 desc:倒序 asc:正序
     */
    EndTimeSort?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
}
/**
 * 我预定的域名结构体。
 */
export interface BiddingAppointResult {
    /**
     * business_id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessID?: string;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 预定价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppointPrice?: number;
    /**
     * 预约保证金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppointBondPrice?: number;
    /**
     * 预约结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppointEndTime?: string;
    /**
     * 预约人数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppointNum?: number;
    /**
     * 1 已预约，2 竞价中，3 等待出价 4 竞价失败 5 等待支付 6 等待转移，7 转移中 8 交易成功 9 预约持有者赎回 10 竞价持有者赎回 11 其他阶段持有者赎回 12 违约
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
}
