import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteReservedPreDomainInfoResponse, DeleteTemplateResponse, DescribeCustomDnsHostSetResponse, ModifyTemplateRequest, CheckDomainResponse, DeleteCustomDnsHostResponse, RenewDomainBatchRequest, DescribeTemplateListResponse, TransferProhibitionBatchRequest, DescribeCustomDnsHostSetRequest, CreateCustomDnsHostResponse, ModifyCustomDnsHostRequest, DescribeDomainPriceListResponse, CheckBatchStatusRequest, CreateDomainBatchRequest, DescribeBatchOperationLogsRequest, UploadImageRequest, ModifyCustomDnsHostResponse, BidPreDomainsResponse, ModifyDomainDNSBatchRequest, DescribeBatchOperationLogDetailsResponse, DescribeReservedBidInfoRequest, DeletePhoneEmailResponse, ReservedPreDomainsResponse, UploadImageResponse, CreateDomainRedemptionResponse, DeletePhoneEmailRequest, DescribeReservedPreDomainInfoResponse, RenewDomainBatchResponse, TransferInDomainBatchResponse, BatchModifyDomainInfoResponse, DescribeDomainBaseInfoResponse, CreateTemplateResponse, UpdateProhibitionBatchRequest, DescribePreDomainListResponse, SendPhoneEmailCodeRequest, DescribeDomainBaseInfoRequest, DescribeDomainNameListRequest, DescribeBatchOperationLogsResponse, ModifyDomainOwnerBatchRequest, DescribePhoneEmailListResponse, DescribePreDomainListRequest, CreatePhoneEmailResponse, ReservedPreDomainsRequest, BatchModifyDomainInfoRequest, CreateDomainBatchResponse, DeleteReservedPreDomainInfoRequest, SendPhoneEmailCodeResponse, DescribeTemplateResponse, DescribeDomainSimpleInfoRequest, DescribeDomainSimpleInfoResponse, ModifyDomainOwnerBatchResponse, TransferInDomainBatchRequest, ModifyDomainDNSBatchResponse, DescribeReservedPreDomainInfoRequest, DescribeDomainPriceListRequest, ModifyIntlCustomDnsHostRequest, CheckDomainRequest, TransferProhibitionBatchResponse, ModifyTemplateResponse, DescribeTemplateListRequest, ModifyIntlCustomDnsHostResponse, BidPreDomainsRequest, CreateTemplateRequest, UpdateProhibitionBatchResponse, CreatePhoneEmailRequest, DescribeTemplateRequest, DescribeReservedBidInfoResponse, DescribeTldListRequest, DescribeBatchOperationLogDetailsRequest, DescribeDomainNameListResponse, SyncCustomDnsHostRequest, DeleteTemplateRequest, SetDomainAutoRenewResponse, DescribePhoneEmailListRequest, DescribeTldListResponse, CreateCustomDnsHostRequest, DeleteCustomDnsHostRequest, CheckBatchStatusResponse, CreateDomainRedemptionRequest, SetDomainAutoRenewRequest, SyncCustomDnsHostResponse } from "./domain_models";
/**
 * domain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
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
     * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
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
     * 本接口 (DescribeTemplateList) 用于获取信息模板列表。
     */
    DescribeTemplateList(req: DescribeTemplateListRequest, cb?: (error: string, rep: DescribeTemplateListResponse) => void): Promise<DescribeTemplateListResponse>;
    /**
     * 用于清除多余的预定域名信息
     */
    DeleteReservedPreDomainInfo(req: DeleteReservedPreDomainInfoRequest, cb?: (error: string, rep: DeleteReservedPreDomainInfoResponse) => void): Promise<DeleteReservedPreDomainInfoResponse>;
    /**
     * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
     */
    BatchModifyDomainInfo(req: BatchModifyDomainInfoRequest, cb?: (error: string, rep: BatchModifyDomainInfoResponse) => void): Promise<BatchModifyDomainInfoResponse>;
    /**
     * 修改模板信息
     */
    ModifyTemplate(req: ModifyTemplateRequest, cb?: (error: string, rep: ModifyTemplateResponse) => void): Promise<ModifyTemplateResponse>;
    /**
     * 本接口 ( TransferProhibitionBatch ) 用于批量禁止域名转移 。
     */
    TransferProhibitionBatch(req: TransferProhibitionBatchRequest, cb?: (error: string, rep: TransferProhibitionBatchResponse) => void): Promise<TransferProhibitionBatchResponse>;
    /**
     * 本接口 ( TransferInDomainBatch ) 用于批量转入域名 。
     */
    TransferInDomainBatch(req: TransferInDomainBatchRequest, cb?: (error: string, rep: TransferInDomainBatchResponse) => void): Promise<TransferInDomainBatchResponse>;
    /**
     * 本接口 ( UpdateProhibitionBatch ) 用于批量禁止更新锁。
     */
    UpdateProhibitionBatch(req: UpdateProhibitionBatchRequest, cb?: (error: string, rep: UpdateProhibitionBatchResponse) => void): Promise<UpdateProhibitionBatchResponse>;
    /**
     * 本接口 ( CreateTemplate ) 用于添加域名信息模板 。
     */
    CreateTemplate(req: CreateTemplateRequest, cb?: (error: string, rep: CreateTemplateResponse) => void): Promise<CreateTemplateResponse>;
    /**
     * 合作商用于查询预约预释放状态信息内容
     */
    DescribeReservedPreDomainInfo(req: DescribeReservedPreDomainInfoRequest, cb?: (error: string, rep: DescribeReservedPreDomainInfoResponse) => void): Promise<DescribeReservedPreDomainInfoResponse>;
    /**
     * 删除自定义DNS Host
     */
    DeleteCustomDnsHost(req: DeleteCustomDnsHostRequest, cb?: (error: string, rep: DeleteCustomDnsHostResponse) => void): Promise<DeleteCustomDnsHostResponse>;
    /**
     * 本接口用于获取已验证的手机邮箱列表
     */
    DescribePhoneEmailList(req: DescribePhoneEmailListRequest, cb?: (error: string, rep: DescribePhoneEmailListResponse) => void): Promise<DescribePhoneEmailListResponse>;
    /**
     * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
     */
    ModifyDomainOwnerBatch(req: ModifyDomainOwnerBatchRequest, cb?: (error: string, rep: ModifyDomainOwnerBatchResponse) => void): Promise<ModifyDomainOwnerBatchResponse>;
    /**
     * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。

     */
    RenewDomainBatch(req: RenewDomainBatchRequest, cb?: (error: string, rep: RenewDomainBatchResponse) => void): Promise<RenewDomainBatchResponse>;
    /**
     * 获取域名实名信息详情
     */
    DescribeDomainSimpleInfo(req: DescribeDomainSimpleInfoRequest, cb?: (error: string, rep: DescribeDomainSimpleInfoResponse) => void): Promise<DescribeDomainSimpleInfoResponse>;
    /**
     * 此接口用于发送手机邮箱验证码。
     */
    SendPhoneEmailCode(req: SendPhoneEmailCodeRequest, cb?: (error: string, rep: SendPhoneEmailCodeResponse) => void): Promise<SendPhoneEmailCodeResponse>;
    /**
     * 按照域名后缀获取对应的价格列表
     */
    DescribeDomainPriceList(req: DescribeDomainPriceListRequest, cb?: (error: string, rep: DescribeDomainPriceListResponse) => void): Promise<DescribeDomainPriceListResponse>;
    /**
     * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
     */
    DescribeBatchOperationLogs(req: DescribeBatchOperationLogsRequest, cb?: (error: string, rep: DescribeBatchOperationLogsResponse) => void): Promise<DescribeBatchOperationLogsResponse>;
}
