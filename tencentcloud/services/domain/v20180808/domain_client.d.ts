import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteReservedPreDomainInfoResponse, DescribeUnPreDomainDetailRequest, DeleteTemplateResponse, DescribeCustomDnsHostSetResponse, ModifyTemplateRequest, CheckDomainResponse, DeleteCustomDnsHostResponse, DescribeBiddingSuccessfulDetailRequest, RenewDomainBatchRequest, DescribeTemplateListResponse, SetDomainAutoRenewResponse, DescribeBiddingAppointDetailRequest, DescribeCustomDnsHostSetRequest, CreateCustomDnsHostResponse, DescribeBiddingAppointListRequest, DescribeDomainPriceListResponse, DescribeBiddingListResponse, CheckBatchStatusRequest, CreateDomainBatchRequest, ModifyTemplateResponse, DescribeBatchOperationLogsRequest, UploadImageRequest, ModifyCustomDnsHostResponse, BidPreDomainsResponse, DescribeAuctionListRequest, DescribeBatchOperationLogDetailsResponse, ModifyDomainDNSBatchRequest, DescribeReservedBidInfoRequest, DeletePhoneEmailResponse, ReservedPreDomainsResponse, DescribeUnPreDomainDetailResponse, UploadImageResponse, SendPhoneEmailCodeResponse, BidDetailPageRequest, BiddingPreReleaseResponse, CreateDomainRedemptionResponse, DeletePhoneEmailRequest, DescribeReservedPreDomainInfoResponse, DescribePreAuctionListResponse, RenewDomainBatchResponse, TransferInDomainBatchResponse, BatchModifyDomainInfoResponse, DescribeDomainBaseInfoResponse, CreateTemplateResponse, UpdateProhibitionBatchRequest, BiddingPreReleaseRequest, DescribePreDomainListResponse, ModifyIntlCustomDnsHostResponse, DescribeDomainBaseInfoRequest, DescribePayWaitDetailResponse, DescribeDomainNameListRequest, DescribeBatchOperationLogsResponse, DescribePreAuctionListRequest, SendPhoneEmailCodeRequest, DeleteBiddingRequest, DescribePhoneEmailListResponse, DescribePreDomainListRequest, CreatePhoneEmailResponse, ReservedPreDomainsRequest, BatchModifyDomainInfoRequest, DescribeBiddingDetailResponse, CreateDomainBatchResponse, DeleteReservedPreDomainInfoRequest, DeleteBiddingResponse, DescribeTemplateResponse, DescribePayWaitDetailRequest, DescribeDomainSimpleInfoRequest, TransferProhibitionBatchRequest, DescribeDomainSimpleInfoResponse, DescribeBiddingSuccessfulListResponse, TransferInDomainBatchRequest, CreateTemplateRequest, DescribeReservedPreDomainInfoRequest, DescribeDomainPriceListRequest, ModifyIntlCustomDnsHostRequest, DescribePreReleaseListResponse, CheckDomainRequest, TransferProhibitionBatchResponse, DescribeBiddingListRequest, ModifyCustomDnsHostRequest, DescribeBiddingSuccessfulListRequest, DescribeTemplateListRequest, ModifyDomainOwnerBatchResponse, ModifyDomainOwnerBatchRequest, BidPreDomainsRequest, DescribeAuctionListResponse, ModifyDomainDNSBatchResponse, UpdateProhibitionBatchResponse, CreatePhoneEmailRequest, DescribeBiddingDetailRequest, DescribeTemplateRequest, DescribeBiddingAppointDetailResponse, DescribeReservedBidInfoResponse, DescribeBiddingSuccessfulDetailResponse, DescribeTldListRequest, DescribeBatchOperationLogDetailsRequest, DescribeDomainNameListResponse, SyncCustomDnsHostRequest, DeleteTemplateRequest, BidDetailPageResponse, DescribePhoneEmailListRequest, DescribeBiddingAppointListResponse, DescribeTldListResponse, CreateCustomDnsHostRequest, DeleteCustomDnsHostRequest, CheckBatchStatusResponse, CreateDomainRedemptionRequest, SetDomainAutoRenewRequest, SyncCustomDnsHostResponse, DescribePreReleaseListRequest } from "./domain_models";
/**
 * domain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 ( TransferProhibitionBatch ) 用于批量禁止域名转移 。
     */
    TransferProhibitionBatch(req: TransferProhibitionBatchRequest, cb?: (error: string, rep: TransferProhibitionBatchResponse) => void): Promise<TransferProhibitionBatchResponse>;
    /**
     * 我预定的域名。
     */
    DescribeBiddingAppointList(req: DescribeBiddingAppointListRequest, cb?: (error: string, rep: DescribeBiddingAppointListResponse) => void): Promise<DescribeBiddingAppointListResponse>;
    /**
     * 用于出价界面出价请求
     */
    BiddingPreRelease(req: BiddingPreReleaseRequest, cb?: (error: string, rep: BiddingPreReleaseResponse) => void): Promise<BiddingPreReleaseResponse>;
    /**
     * 本接口 ( SetDomainAutoRenew ) 用于设置域名自动续费。
     */
    SetDomainAutoRenew(req: SetDomainAutoRenewRequest, cb?: (error: string, rep: SetDomainAutoRenewResponse) => void): Promise<SetDomainAutoRenewResponse>;
    /**
     * 接口用于获取合作商竞价过程中竞价详情数据
     */
    DescribeReservedBidInfo(req: DescribeReservedBidInfoRequest, cb?: (error: string, rep: DescribeReservedBidInfoResponse) => void): Promise<DescribeReservedBidInfoResponse>;
    /**
     * 修改自定义DNS Host
     */
    ModifyCustomDnsHost(req: ModifyCustomDnsHostRequest, cb?: (error: string, rep: ModifyCustomDnsHostResponse) => void): Promise<ModifyCustomDnsHostResponse>;
    /**
     * 本接口 ( CheckBatchStatus ) 用于查询批量操作日志状态 。
     */
    CheckBatchStatus(req: CheckBatchStatusRequest, cb?: (error: string, rep: CheckBatchStatusResponse) => void): Promise<CheckBatchStatusResponse>;
    /**
     * 本接口 ( UploadImage ) 用于证件图片上传 。
     */
    UploadImage(req: UploadImageRequest, cb?: (error: string, rep: UploadImageResponse) => void): Promise<UploadImageResponse>;
    /**
     * 此接口用于删除已验证的手机邮箱
     */
    DeletePhoneEmail(req: DeletePhoneEmailRequest, cb?: (error: string, rep: DeletePhoneEmailResponse) => void): Promise<DeletePhoneEmailResponse>;
    /**
     * 用户服务商提前获取预释放域名数据，查询数据根据结束时间进行倒序。
     */
    DescribePreDomainList(req: DescribePreDomainListRequest, cb?: (error: string, rep: DescribePreDomainListResponse) => void): Promise<DescribePreDomainListResponse>;
    /**
     * 用户合作商预释放出价
     */
    BidPreDomains(req: BidPreDomainsRequest, cb?: (error: string, rep: BidPreDomainsResponse) => void): Promise<BidPreDomainsResponse>;
    /**
     * 查询自定义DNS Host
     */
    DescribeCustomDnsHostSet(req: DescribeCustomDnsHostSetRequest, cb?: (error: string, rep: DescribeCustomDnsHostSetResponse) => void): Promise<DescribeCustomDnsHostSetResponse>;
    /**
     * 本接口 (  DescribeDomainNameList ) 我的域名列表。
     */
    DescribeDomainNameList(req: DescribeDomainNameListRequest, cb?: (error: string, rep: DescribeDomainNameListResponse) => void): Promise<DescribeDomainNameListResponse>;
    /**
     * 国际站-修改DNS Host
     */
    ModifyIntlCustomDnsHost(req: ModifyIntlCustomDnsHostRequest, cb?: (error: string, rep: ModifyIntlCustomDnsHostResponse) => void): Promise<ModifyIntlCustomDnsHostResponse>;
    /**
     * 获取域名实名信息详情
     */
    DescribeDomainSimpleInfo(req: DescribeDomainSimpleInfoRequest, cb?: (error: string, rep: DescribeDomainSimpleInfoResponse) => void): Promise<DescribeDomainSimpleInfoResponse>;
    /**
     * 本接口 ( CreateDomainBatch ) 用于批量域名注册 。
     */
    CreateDomainBatch(req: CreateDomainBatchRequest, cb?: (error: string, rep: CreateDomainBatchResponse) => void): Promise<CreateDomainBatchResponse>;
    /**
     * 本接口 (  DescribeDomainBaseInfo) 获取域名基本信息。
     */
    DescribeDomainBaseInfo(req: DescribeDomainBaseInfoRequest, cb?: (error: string, rep: DescribeDomainBaseInfoResponse) => void): Promise<DescribeDomainBaseInfoResponse>;
    /**
     * 本接口 ( DescribeBatchOperationLogDetails ) 用于获取批量操作日志详情。
     */
    DescribeBatchOperationLogDetails(req: DescribeBatchOperationLogDetailsRequest, cb?: (error: string, rep: DescribeBatchOperationLogDetailsResponse) => void): Promise<DescribeBatchOperationLogDetailsResponse>;
    /**
     * 本接口 ( DeleteTemplate ) 用于删除信息模板。
     */
    DeleteTemplate(req: DeleteTemplateRequest, cb?: (error: string, rep: DeleteTemplateResponse) => void): Promise<DeleteTemplateResponse>;
    /**
     * 用于获取域名注册当前支持注册的后缀
     */
    DescribeTldList(req?: DescribeTldListRequest, cb?: (error: string, rep: DescribeTldListResponse) => void): Promise<DescribeTldListResponse>;
    /**
     * 我得标的域名。
     */
    DescribeBiddingSuccessfulList(req: DescribeBiddingSuccessfulListRequest, cb?: (error: string, rep: DescribeBiddingSuccessfulListResponse) => void): Promise<DescribeBiddingSuccessfulListResponse>;
    /**
     * 检查域名是否可以注册。
     */
    CheckDomain(req: CheckDomainRequest, cb?: (error: string, rep: CheckDomainResponse) => void): Promise<CheckDomainResponse>;
    /**
     * 用于合作商对预释放域名进行预留。
     */
    ReservedPreDomains(req: ReservedPreDomainsRequest, cb?: (error: string, rep: ReservedPreDomainsResponse) => void): Promise<ReservedPreDomainsResponse>;
    /**
     * 同步自定义DNS Host
     */
    SyncCustomDnsHost(req: SyncCustomDnsHostRequest, cb?: (error: string, rep: SyncCustomDnsHostResponse) => void): Promise<SyncCustomDnsHostResponse>;
    /**
     * 用于预释放竞价列表数据查询
     */
    DescribePreAuctionList(req: DescribePreAuctionListRequest, cb?: (error: string, rep: DescribePreAuctionListResponse) => void): Promise<DescribePreAuctionListResponse>;
    /**
     * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
     */
    ModifyDomainDNSBatch(req: ModifyDomainDNSBatchRequest, cb?: (error: string, rep: ModifyDomainDNSBatchResponse) => void): Promise<ModifyDomainDNSBatchResponse>;
    /**
     * 创建自定义DNS Host
     */
    CreateCustomDnsHost(req: CreateCustomDnsHostRequest, cb?: (error: string, rep: CreateCustomDnsHostResponse) => void): Promise<CreateCustomDnsHostResponse>;
    /**
     * 本接口 (DescribeTemplate) 用于获取模板信息。
     */
    DescribeTemplate(req: DescribeTemplateRequest, cb?: (error: string, rep: DescribeTemplateResponse) => void): Promise<DescribeTemplateResponse>;
    /**
     * 此接口用于创建有效的手机、邮箱
     */
    CreatePhoneEmail(req: CreatePhoneEmailRequest, cb?: (error: string, rep: CreatePhoneEmailResponse) => void): Promise<CreatePhoneEmailResponse>;
    /**
     * 创建赎回订单。
     */
    CreateDomainRedemption(req: CreateDomainRedemptionRequest, cb?: (error: string, rep: CreateDomainRedemptionResponse) => void): Promise<CreateDomainRedemptionResponse>;
    /**
     * 接口用于预释放页面查询
     */
    DescribePreReleaseList(req: DescribePreReleaseListRequest, cb?: (error: string, rep: DescribePreReleaseListResponse) => void): Promise<DescribePreReleaseListResponse>;
    /**
     * 用户控制台获取竞价列表
     */
    DescribeAuctionList(req: DescribeAuctionListRequest, cb?: (error: string, rep: DescribeAuctionListResponse) => void): Promise<DescribeAuctionListResponse>;
    /**
     * 本接口 (DescribeTemplateList) 用于获取信息模板列表。
     */
    DescribeTemplateList(req: DescribeTemplateListRequest, cb?: (error: string, rep: DescribeTemplateListResponse) => void): Promise<DescribeTemplateListResponse>;
    /**
     * 用于清除多余的预定域名信息
     */
    DeleteReservedPreDomainInfo(req: DeleteReservedPreDomainInfoRequest, cb?: (error: string, rep: DeleteReservedPreDomainInfoResponse) => void): Promise<DeleteReservedPreDomainInfoResponse>;
    /**
     * 删除记录。
     */
    DeleteBidding(req: DeleteBiddingRequest, cb?: (error: string, rep: DeleteBiddingResponse) => void): Promise<DeleteBiddingResponse>;
    /**
     * 修改模板信息
     */
    ModifyTemplate(req: ModifyTemplateRequest, cb?: (error: string, rep: ModifyTemplateResponse) => void): Promise<ModifyTemplateResponse>;
    /**
     * 该接口用于用户详情页出价请求
     */
    BidDetailPage(req: BidDetailPageRequest, cb?: (error: string, rep: BidDetailPageResponse) => void): Promise<BidDetailPageResponse>;
    /**
     * 查询预释放未预约域名详情接口
     */
    DescribeUnPreDomainDetail(req: DescribeUnPreDomainDetailRequest, cb?: (error: string, rep: DescribeUnPreDomainDetailResponse) => void): Promise<DescribeUnPreDomainDetailResponse>;
    /**
     * 本接口 ( TransferInDomainBatch ) 用于批量转入域名 。
     */
    TransferInDomainBatch(req: TransferInDomainBatchRequest, cb?: (error: string, rep: TransferInDomainBatchResponse) => void): Promise<TransferInDomainBatchResponse>;
    /**
     * 本接口 ( UpdateProhibitionBatch ) 用于批量禁止更新锁。
     */
    UpdateProhibitionBatch(req: UpdateProhibitionBatchRequest, cb?: (error: string, rep: UpdateProhibitionBatchResponse) => void): Promise<UpdateProhibitionBatchResponse>;
    /**
     * 等待支付详情接口
     */
    DescribePayWaitDetail(req: DescribePayWaitDetailRequest, cb?: (error: string, rep: DescribePayWaitDetailResponse) => void): Promise<DescribePayWaitDetailResponse>;
    /**
     * 我竞价的域名。
     */
    DescribeBiddingList(req: DescribeBiddingListRequest, cb?: (error: string, rep: DescribeBiddingListResponse) => void): Promise<DescribeBiddingListResponse>;
    /**
     * 本接口 ( CreateTemplate ) 用于添加域名信息模板 。
     */
    CreateTemplate(req: CreateTemplateRequest, cb?: (error: string, rep: CreateTemplateResponse) => void): Promise<CreateTemplateResponse>;
    /**
     * 我竞价的域名-竞价详情。
     */
    DescribeBiddingDetail(req: DescribeBiddingDetailRequest, cb?: (error: string, rep: DescribeBiddingDetailResponse) => void): Promise<DescribeBiddingDetailResponse>;
    /**
     * 合作商用于查询预约预释放状态信息内容
     */
    DescribeReservedPreDomainInfo(req: DescribeReservedPreDomainInfoRequest, cb?: (error: string, rep: DescribeReservedPreDomainInfoResponse) => void): Promise<DescribeReservedPreDomainInfoResponse>;
    /**
     * 我预约的域名-预约详情。
     */
    DescribeBiddingAppointDetail(req: DescribeBiddingAppointDetailRequest, cb?: (error: string, rep: DescribeBiddingAppointDetailResponse) => void): Promise<DescribeBiddingAppointDetailResponse>;
    /**
     * 本接口用于获取已验证的手机邮箱列表
     */
    DescribePhoneEmailList(req: DescribePhoneEmailListRequest, cb?: (error: string, rep: DescribePhoneEmailListResponse) => void): Promise<DescribePhoneEmailListResponse>;
    /**
     * 此接口用于发送手机邮箱验证码。
     */
    SendPhoneEmailCode(req: SendPhoneEmailCodeRequest, cb?: (error: string, rep: SendPhoneEmailCodeResponse) => void): Promise<SendPhoneEmailCodeResponse>;
    /**
     * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
     */
    ModifyDomainOwnerBatch(req: ModifyDomainOwnerBatchRequest, cb?: (error: string, rep: ModifyDomainOwnerBatchResponse) => void): Promise<ModifyDomainOwnerBatchResponse>;
    /**
     * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。
     */
    RenewDomainBatch(req: RenewDomainBatchRequest, cb?: (error: string, rep: RenewDomainBatchResponse) => void): Promise<RenewDomainBatchResponse>;
    /**
     * 删除自定义DNS Host
     */
    DeleteCustomDnsHost(req: DeleteCustomDnsHostRequest, cb?: (error: string, rep: DeleteCustomDnsHostResponse) => void): Promise<DeleteCustomDnsHostResponse>;
    /**
     * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
     */
    BatchModifyDomainInfo(req: BatchModifyDomainInfoRequest, cb?: (error: string, rep: BatchModifyDomainInfoResponse) => void): Promise<BatchModifyDomainInfoResponse>;
    /**
     * 按照域名后缀获取对应的价格列表
     */
    DescribeDomainPriceList(req: DescribeDomainPriceListRequest, cb?: (error: string, rep: DescribeDomainPriceListResponse) => void): Promise<DescribeDomainPriceListResponse>;
    /**
     * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
     */
    DescribeBatchOperationLogs(req: DescribeBatchOperationLogsRequest, cb?: (error: string, rep: DescribeBatchOperationLogsResponse) => void): Promise<DescribeBatchOperationLogsResponse>;
    /**
     * 我得标的域名-得标详情。
     */
    DescribeBiddingSuccessfulDetail(req: DescribeBiddingSuccessfulDetailRequest, cb?: (error: string, rep: DescribeBiddingSuccessfulDetailResponse) => void): Promise<DescribeBiddingSuccessfulDetailResponse>;
}
