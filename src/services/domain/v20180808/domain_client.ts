/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  AuctionInfo,
  DeleteReservedPreDomainInfoResponse,
  DescribeUnPreDomainDetailRequest,
  DeleteTemplateResponse,
  BiddingResult,
  PriceInfo,
  DescribeCustomDnsHostSetResponse,
  ModifyTemplateRequest,
  CheckDomainResponse,
  DeleteCustomDnsHostResponse,
  DescribeBiddingSuccessfulDetailRequest,
  RenewDomainBatchRequest,
  DescribeTemplateListResponse,
  SetDomainAutoRenewResponse,
  DescribeBiddingAppointDetailRequest,
  DescribeCustomDnsHostSetRequest,
  CreateCustomDnsHostResponse,
  DescribeBiddingAppointListRequest,
  DescribeDomainPriceListResponse,
  DescribeBiddingListResponse,
  CheckBatchStatusRequest,
  ReserveBidInfo,
  CreateDomainBatchRequest,
  SucDomainInfo,
  ModifyTemplateResponse,
  BiddingSuccessfulResult,
  DescribeBatchOperationLogsRequest,
  UploadImageRequest,
  ModifyCustomDnsHostResponse,
  BidPreDomainsResponse,
  DescribeAuctionListRequest,
  DescribeBatchOperationLogDetailsResponse,
  ModifyDomainDNSBatchRequest,
  DescribeReservedBidInfoRequest,
  DeletePhoneEmailResponse,
  ReservedPreDomainsResponse,
  DescribeUnPreDomainDetailResponse,
  DomainBatchDetailSet,
  UploadImageResponse,
  SendPhoneEmailCodeResponse,
  BidDetailPageRequest,
  BiddingPreReleaseResponse,
  DomainSimpleInfo,
  CreateDomainRedemptionResponse,
  DeletePhoneEmailRequest,
  DescribeReservedPreDomainInfoResponse,
  BatchStatus,
  DescribePreAuctionListResponse,
  RenewDomainBatchResponse,
  ReservedDomainInfo,
  TransferInDomainBatchResponse,
  BatchModifyDomainInfoResponse,
  DescribeDomainBaseInfoResponse,
  PhoneEmailData,
  CreateTemplateResponse,
  UpdateProhibitionBatchRequest,
  PreReleaseInfo,
  BiddingPreReleaseRequest,
  DescribePreDomainListResponse,
  ModifyIntlCustomDnsHostResponse,
  DescribeDomainBaseInfoRequest,
  DescribePayWaitDetailResponse,
  DescribeDomainNameListRequest,
  DescribeBatchOperationLogsResponse,
  DescribePreAuctionListRequest,
  SendPhoneEmailCodeRequest,
  DeleteBiddingRequest,
  DescribePhoneEmailListResponse,
  DescribePreDomainListRequest,
  PreAuctionInfo,
  CreatePhoneEmailResponse,
  FailReservedDomainInfo,
  ReservedPreDomainsRequest,
  BatchModifyDomainInfoRequest,
  DescribeBiddingDetailResponse,
  CreateDomainBatchResponse,
  DeleteReservedPreDomainInfoRequest,
  ReservedPreDomainInfo,
  DeleteBiddingResponse,
  DescribeTemplateResponse,
  DescribePayWaitDetailRequest,
  DescribeDomainSimpleInfoRequest,
  TransferProhibitionBatchRequest,
  DescribeDomainSimpleInfoResponse,
  DescribeBiddingSuccessfulListResponse,
  TemplateInfo,
  CertificateInfo,
  TransferInDomainBatchRequest,
  CreateTemplateRequest,
  DescribeReservedPreDomainInfoRequest,
  DescribeDomainPriceListRequest,
  ModifyIntlCustomDnsHostRequest,
  DescribePreReleaseListResponse,
  CheckDomainRequest,
  TransferProhibitionBatchResponse,
  DescribeBiddingListRequest,
  ModifyCustomDnsHostRequest,
  DescribeBiddingSuccessfulListRequest,
  DescribeTemplateListRequest,
  ModifyDomainOwnerBatchResponse,
  ModifyDomainOwnerBatchRequest,
  BidPreDomainsRequest,
  DescribeAuctionListResponse,
  ModifyDomainDNSBatchResponse,
  UpdateProhibitionBatchResponse,
  CreatePhoneEmailRequest,
  DescribeBiddingDetailRequest,
  DescribeTemplateRequest,
  DescribeBiddingAppointDetailResponse,
  DescribeReservedBidInfoResponse,
  DescribeBiddingSuccessfulDetailResponse,
  DescribeTldListRequest,
  DescribeBatchOperationLogDetailsRequest,
  DescribeDomainNameListResponse,
  SyncCustomDnsHostRequest,
  ContactInfo,
  DeleteTemplateRequest,
  BidDetailPageResponse,
  CustomDnsHost,
  DomainList,
  PriceScopeConf,
  DescribePhoneEmailListRequest,
  DescribeBiddingAppointListResponse,
  DomainBaseInfo,
  DescribeTldListResponse,
  DomainBatchLogSet,
  CreateCustomDnsHostRequest,
  DeleteCustomDnsHostRequest,
  CheckBatchStatusResponse,
  CreateDomainRedemptionRequest,
  SetDomainAutoRenewRequest,
  SyncCustomDnsHostResponse,
  DescribePreReleaseListRequest,
  BiddingAppointResult,
} from "./domain_models"

/**
 * domain client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("domain.tencentcloudapi.com", "2018-08-08", clientConfig)
  }

  /**
   * 本接口 ( TransferProhibitionBatch ) 用于批量禁止域名转移 。
   */
  async TransferProhibitionBatch(
    req: TransferProhibitionBatchRequest,
    cb?: (error: string, rep: TransferProhibitionBatchResponse) => void
  ): Promise<TransferProhibitionBatchResponse> {
    return this.request("TransferProhibitionBatch", req, cb)
  }

  /**
   * 我预定的域名。
   */
  async DescribeBiddingAppointList(
    req: DescribeBiddingAppointListRequest,
    cb?: (error: string, rep: DescribeBiddingAppointListResponse) => void
  ): Promise<DescribeBiddingAppointListResponse> {
    return this.request("DescribeBiddingAppointList", req, cb)
  }

  /**
   * 用于出价界面出价请求
   */
  async BiddingPreRelease(
    req: BiddingPreReleaseRequest,
    cb?: (error: string, rep: BiddingPreReleaseResponse) => void
  ): Promise<BiddingPreReleaseResponse> {
    return this.request("BiddingPreRelease", req, cb)
  }

  /**
   * 本接口 ( SetDomainAutoRenew ) 用于设置域名自动续费。
   */
  async SetDomainAutoRenew(
    req: SetDomainAutoRenewRequest,
    cb?: (error: string, rep: SetDomainAutoRenewResponse) => void
  ): Promise<SetDomainAutoRenewResponse> {
    return this.request("SetDomainAutoRenew", req, cb)
  }

  /**
   * 接口用于获取合作商竞价过程中竞价详情数据
   */
  async DescribeReservedBidInfo(
    req: DescribeReservedBidInfoRequest,
    cb?: (error: string, rep: DescribeReservedBidInfoResponse) => void
  ): Promise<DescribeReservedBidInfoResponse> {
    return this.request("DescribeReservedBidInfo", req, cb)
  }

  /**
   * 修改自定义DNS Host
   */
  async ModifyCustomDnsHost(
    req: ModifyCustomDnsHostRequest,
    cb?: (error: string, rep: ModifyCustomDnsHostResponse) => void
  ): Promise<ModifyCustomDnsHostResponse> {
    return this.request("ModifyCustomDnsHost", req, cb)
  }

  /**
   * 本接口 ( CheckBatchStatus ) 用于查询批量操作日志状态 。
   */
  async CheckBatchStatus(
    req: CheckBatchStatusRequest,
    cb?: (error: string, rep: CheckBatchStatusResponse) => void
  ): Promise<CheckBatchStatusResponse> {
    return this.request("CheckBatchStatus", req, cb)
  }

  /**
   * 本接口 ( UploadImage ) 用于证件图片上传 。
   */
  async UploadImage(
    req: UploadImageRequest,
    cb?: (error: string, rep: UploadImageResponse) => void
  ): Promise<UploadImageResponse> {
    return this.request("UploadImage", req, cb)
  }

  /**
   * 此接口用于删除已验证的手机邮箱
   */
  async DeletePhoneEmail(
    req: DeletePhoneEmailRequest,
    cb?: (error: string, rep: DeletePhoneEmailResponse) => void
  ): Promise<DeletePhoneEmailResponse> {
    return this.request("DeletePhoneEmail", req, cb)
  }

  /**
   * 用户服务商提前获取预释放域名数据，查询数据根据结束时间进行倒序。
   */
  async DescribePreDomainList(
    req: DescribePreDomainListRequest,
    cb?: (error: string, rep: DescribePreDomainListResponse) => void
  ): Promise<DescribePreDomainListResponse> {
    return this.request("DescribePreDomainList", req, cb)
  }

  /**
   * 用户合作商预释放出价
   */
  async BidPreDomains(
    req: BidPreDomainsRequest,
    cb?: (error: string, rep: BidPreDomainsResponse) => void
  ): Promise<BidPreDomainsResponse> {
    return this.request("BidPreDomains", req, cb)
  }

  /**
   * 查询自定义DNS Host
   */
  async DescribeCustomDnsHostSet(
    req: DescribeCustomDnsHostSetRequest,
    cb?: (error: string, rep: DescribeCustomDnsHostSetResponse) => void
  ): Promise<DescribeCustomDnsHostSetResponse> {
    return this.request("DescribeCustomDnsHostSet", req, cb)
  }

  /**
   * 本接口 (  DescribeDomainNameList ) 我的域名列表。
   */
  async DescribeDomainNameList(
    req: DescribeDomainNameListRequest,
    cb?: (error: string, rep: DescribeDomainNameListResponse) => void
  ): Promise<DescribeDomainNameListResponse> {
    return this.request("DescribeDomainNameList", req, cb)
  }

  /**
   * 国际站-修改DNS Host
   */
  async ModifyIntlCustomDnsHost(
    req: ModifyIntlCustomDnsHostRequest,
    cb?: (error: string, rep: ModifyIntlCustomDnsHostResponse) => void
  ): Promise<ModifyIntlCustomDnsHostResponse> {
    return this.request("ModifyIntlCustomDnsHost", req, cb)
  }

  /**
   * 获取域名实名信息详情
   */
  async DescribeDomainSimpleInfo(
    req: DescribeDomainSimpleInfoRequest,
    cb?: (error: string, rep: DescribeDomainSimpleInfoResponse) => void
  ): Promise<DescribeDomainSimpleInfoResponse> {
    return this.request("DescribeDomainSimpleInfo", req, cb)
  }

  /**
   * 本接口 ( CreateDomainBatch ) 用于批量域名注册 。
   */
  async CreateDomainBatch(
    req: CreateDomainBatchRequest,
    cb?: (error: string, rep: CreateDomainBatchResponse) => void
  ): Promise<CreateDomainBatchResponse> {
    return this.request("CreateDomainBatch", req, cb)
  }

  /**
   * 本接口 (  DescribeDomainBaseInfo) 获取域名基本信息。
   */
  async DescribeDomainBaseInfo(
    req: DescribeDomainBaseInfoRequest,
    cb?: (error: string, rep: DescribeDomainBaseInfoResponse) => void
  ): Promise<DescribeDomainBaseInfoResponse> {
    return this.request("DescribeDomainBaseInfo", req, cb)
  }

  /**
   * 本接口 ( DescribeBatchOperationLogDetails ) 用于获取批量操作日志详情。
   */
  async DescribeBatchOperationLogDetails(
    req: DescribeBatchOperationLogDetailsRequest,
    cb?: (error: string, rep: DescribeBatchOperationLogDetailsResponse) => void
  ): Promise<DescribeBatchOperationLogDetailsResponse> {
    return this.request("DescribeBatchOperationLogDetails", req, cb)
  }

  /**
   * 本接口 ( DeleteTemplate ) 用于删除信息模板。
   */
  async DeleteTemplate(
    req: DeleteTemplateRequest,
    cb?: (error: string, rep: DeleteTemplateResponse) => void
  ): Promise<DeleteTemplateResponse> {
    return this.request("DeleteTemplate", req, cb)
  }

  /**
   * 用于获取域名注册当前支持注册的后缀
   */
  async DescribeTldList(
    req?: DescribeTldListRequest,
    cb?: (error: string, rep: DescribeTldListResponse) => void
  ): Promise<DescribeTldListResponse> {
    return this.request("DescribeTldList", req, cb)
  }

  /**
   * 我得标的域名。
   */
  async DescribeBiddingSuccessfulList(
    req: DescribeBiddingSuccessfulListRequest,
    cb?: (error: string, rep: DescribeBiddingSuccessfulListResponse) => void
  ): Promise<DescribeBiddingSuccessfulListResponse> {
    return this.request("DescribeBiddingSuccessfulList", req, cb)
  }

  /**
   * 检查域名是否可以注册。
   */
  async CheckDomain(
    req: CheckDomainRequest,
    cb?: (error: string, rep: CheckDomainResponse) => void
  ): Promise<CheckDomainResponse> {
    return this.request("CheckDomain", req, cb)
  }

  /**
   * 用于合作商对预释放域名进行预留。
   */
  async ReservedPreDomains(
    req: ReservedPreDomainsRequest,
    cb?: (error: string, rep: ReservedPreDomainsResponse) => void
  ): Promise<ReservedPreDomainsResponse> {
    return this.request("ReservedPreDomains", req, cb)
  }

  /**
   * 同步自定义DNS Host
   */
  async SyncCustomDnsHost(
    req: SyncCustomDnsHostRequest,
    cb?: (error: string, rep: SyncCustomDnsHostResponse) => void
  ): Promise<SyncCustomDnsHostResponse> {
    return this.request("SyncCustomDnsHost", req, cb)
  }

  /**
   * 用于预释放竞价列表数据查询
   */
  async DescribePreAuctionList(
    req: DescribePreAuctionListRequest,
    cb?: (error: string, rep: DescribePreAuctionListResponse) => void
  ): Promise<DescribePreAuctionListResponse> {
    return this.request("DescribePreAuctionList", req, cb)
  }

  /**
   * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
   */
  async ModifyDomainDNSBatch(
    req: ModifyDomainDNSBatchRequest,
    cb?: (error: string, rep: ModifyDomainDNSBatchResponse) => void
  ): Promise<ModifyDomainDNSBatchResponse> {
    return this.request("ModifyDomainDNSBatch", req, cb)
  }

  /**
   * 创建自定义DNS Host
   */
  async CreateCustomDnsHost(
    req: CreateCustomDnsHostRequest,
    cb?: (error: string, rep: CreateCustomDnsHostResponse) => void
  ): Promise<CreateCustomDnsHostResponse> {
    return this.request("CreateCustomDnsHost", req, cb)
  }

  /**
   * 本接口 (DescribeTemplate) 用于获取模板信息。
   */
  async DescribeTemplate(
    req: DescribeTemplateRequest,
    cb?: (error: string, rep: DescribeTemplateResponse) => void
  ): Promise<DescribeTemplateResponse> {
    return this.request("DescribeTemplate", req, cb)
  }

  /**
   * 此接口用于创建有效的手机、邮箱
   */
  async CreatePhoneEmail(
    req: CreatePhoneEmailRequest,
    cb?: (error: string, rep: CreatePhoneEmailResponse) => void
  ): Promise<CreatePhoneEmailResponse> {
    return this.request("CreatePhoneEmail", req, cb)
  }

  /**
   * 创建赎回订单。
   */
  async CreateDomainRedemption(
    req: CreateDomainRedemptionRequest,
    cb?: (error: string, rep: CreateDomainRedemptionResponse) => void
  ): Promise<CreateDomainRedemptionResponse> {
    return this.request("CreateDomainRedemption", req, cb)
  }

  /**
   * 接口用于预释放页面查询
   */
  async DescribePreReleaseList(
    req: DescribePreReleaseListRequest,
    cb?: (error: string, rep: DescribePreReleaseListResponse) => void
  ): Promise<DescribePreReleaseListResponse> {
    return this.request("DescribePreReleaseList", req, cb)
  }

  /**
   * 用户控制台获取竞价列表
   */
  async DescribeAuctionList(
    req: DescribeAuctionListRequest,
    cb?: (error: string, rep: DescribeAuctionListResponse) => void
  ): Promise<DescribeAuctionListResponse> {
    return this.request("DescribeAuctionList", req, cb)
  }

  /**
   * 本接口 (DescribeTemplateList) 用于获取信息模板列表。
   */
  async DescribeTemplateList(
    req: DescribeTemplateListRequest,
    cb?: (error: string, rep: DescribeTemplateListResponse) => void
  ): Promise<DescribeTemplateListResponse> {
    return this.request("DescribeTemplateList", req, cb)
  }

  /**
   * 用于清除多余的预定域名信息
   */
  async DeleteReservedPreDomainInfo(
    req: DeleteReservedPreDomainInfoRequest,
    cb?: (error: string, rep: DeleteReservedPreDomainInfoResponse) => void
  ): Promise<DeleteReservedPreDomainInfoResponse> {
    return this.request("DeleteReservedPreDomainInfo", req, cb)
  }

  /**
   * 删除记录。
   */
  async DeleteBidding(
    req: DeleteBiddingRequest,
    cb?: (error: string, rep: DeleteBiddingResponse) => void
  ): Promise<DeleteBiddingResponse> {
    return this.request("DeleteBidding", req, cb)
  }

  /**
   * 修改模板信息
   */
  async ModifyTemplate(
    req: ModifyTemplateRequest,
    cb?: (error: string, rep: ModifyTemplateResponse) => void
  ): Promise<ModifyTemplateResponse> {
    return this.request("ModifyTemplate", req, cb)
  }

  /**
   * 该接口用于用户详情页出价请求
   */
  async BidDetailPage(
    req: BidDetailPageRequest,
    cb?: (error: string, rep: BidDetailPageResponse) => void
  ): Promise<BidDetailPageResponse> {
    return this.request("BidDetailPage", req, cb)
  }

  /**
   * 查询预释放未预约域名详情接口
   */
  async DescribeUnPreDomainDetail(
    req: DescribeUnPreDomainDetailRequest,
    cb?: (error: string, rep: DescribeUnPreDomainDetailResponse) => void
  ): Promise<DescribeUnPreDomainDetailResponse> {
    return this.request("DescribeUnPreDomainDetail", req, cb)
  }

  /**
   * 本接口 ( TransferInDomainBatch ) 用于批量转入域名 。
   */
  async TransferInDomainBatch(
    req: TransferInDomainBatchRequest,
    cb?: (error: string, rep: TransferInDomainBatchResponse) => void
  ): Promise<TransferInDomainBatchResponse> {
    return this.request("TransferInDomainBatch", req, cb)
  }

  /**
   * 本接口 ( UpdateProhibitionBatch ) 用于批量禁止更新锁。
   */
  async UpdateProhibitionBatch(
    req: UpdateProhibitionBatchRequest,
    cb?: (error: string, rep: UpdateProhibitionBatchResponse) => void
  ): Promise<UpdateProhibitionBatchResponse> {
    return this.request("UpdateProhibitionBatch", req, cb)
  }

  /**
   * 等待支付详情接口
   */
  async DescribePayWaitDetail(
    req: DescribePayWaitDetailRequest,
    cb?: (error: string, rep: DescribePayWaitDetailResponse) => void
  ): Promise<DescribePayWaitDetailResponse> {
    return this.request("DescribePayWaitDetail", req, cb)
  }

  /**
   * 我竞价的域名。
   */
  async DescribeBiddingList(
    req: DescribeBiddingListRequest,
    cb?: (error: string, rep: DescribeBiddingListResponse) => void
  ): Promise<DescribeBiddingListResponse> {
    return this.request("DescribeBiddingList", req, cb)
  }

  /**
   * 本接口 ( CreateTemplate ) 用于添加域名信息模板 。
   */
  async CreateTemplate(
    req: CreateTemplateRequest,
    cb?: (error: string, rep: CreateTemplateResponse) => void
  ): Promise<CreateTemplateResponse> {
    return this.request("CreateTemplate", req, cb)
  }

  /**
   * 我竞价的域名-竞价详情。
   */
  async DescribeBiddingDetail(
    req: DescribeBiddingDetailRequest,
    cb?: (error: string, rep: DescribeBiddingDetailResponse) => void
  ): Promise<DescribeBiddingDetailResponse> {
    return this.request("DescribeBiddingDetail", req, cb)
  }

  /**
   * 合作商用于查询预约预释放状态信息内容
   */
  async DescribeReservedPreDomainInfo(
    req: DescribeReservedPreDomainInfoRequest,
    cb?: (error: string, rep: DescribeReservedPreDomainInfoResponse) => void
  ): Promise<DescribeReservedPreDomainInfoResponse> {
    return this.request("DescribeReservedPreDomainInfo", req, cb)
  }

  /**
   * 我预约的域名-预约详情。
   */
  async DescribeBiddingAppointDetail(
    req: DescribeBiddingAppointDetailRequest,
    cb?: (error: string, rep: DescribeBiddingAppointDetailResponse) => void
  ): Promise<DescribeBiddingAppointDetailResponse> {
    return this.request("DescribeBiddingAppointDetail", req, cb)
  }

  /**
   * 本接口用于获取已验证的手机邮箱列表
   */
  async DescribePhoneEmailList(
    req: DescribePhoneEmailListRequest,
    cb?: (error: string, rep: DescribePhoneEmailListResponse) => void
  ): Promise<DescribePhoneEmailListResponse> {
    return this.request("DescribePhoneEmailList", req, cb)
  }

  /**
   * 此接口用于发送手机邮箱验证码。
   */
  async SendPhoneEmailCode(
    req: SendPhoneEmailCodeRequest,
    cb?: (error: string, rep: SendPhoneEmailCodeResponse) => void
  ): Promise<SendPhoneEmailCodeResponse> {
    return this.request("SendPhoneEmailCode", req, cb)
  }

  /**
   * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
   */
  async ModifyDomainOwnerBatch(
    req: ModifyDomainOwnerBatchRequest,
    cb?: (error: string, rep: ModifyDomainOwnerBatchResponse) => void
  ): Promise<ModifyDomainOwnerBatchResponse> {
    return this.request("ModifyDomainOwnerBatch", req, cb)
  }

  /**
   * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。
   */
  async RenewDomainBatch(
    req: RenewDomainBatchRequest,
    cb?: (error: string, rep: RenewDomainBatchResponse) => void
  ): Promise<RenewDomainBatchResponse> {
    return this.request("RenewDomainBatch", req, cb)
  }

  /**
   * 删除自定义DNS Host
   */
  async DeleteCustomDnsHost(
    req: DeleteCustomDnsHostRequest,
    cb?: (error: string, rep: DeleteCustomDnsHostResponse) => void
  ): Promise<DeleteCustomDnsHostResponse> {
    return this.request("DeleteCustomDnsHost", req, cb)
  }

  /**
   * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
   */
  async BatchModifyDomainInfo(
    req: BatchModifyDomainInfoRequest,
    cb?: (error: string, rep: BatchModifyDomainInfoResponse) => void
  ): Promise<BatchModifyDomainInfoResponse> {
    return this.request("BatchModifyDomainInfo", req, cb)
  }

  /**
   * 按照域名后缀获取对应的价格列表
   */
  async DescribeDomainPriceList(
    req: DescribeDomainPriceListRequest,
    cb?: (error: string, rep: DescribeDomainPriceListResponse) => void
  ): Promise<DescribeDomainPriceListResponse> {
    return this.request("DescribeDomainPriceList", req, cb)
  }

  /**
   * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
   */
  async DescribeBatchOperationLogs(
    req: DescribeBatchOperationLogsRequest,
    cb?: (error: string, rep: DescribeBatchOperationLogsResponse) => void
  ): Promise<DescribeBatchOperationLogsResponse> {
    return this.request("DescribeBatchOperationLogs", req, cb)
  }

  /**
   * 我得标的域名-得标详情。
   */
  async DescribeBiddingSuccessfulDetail(
    req: DescribeBiddingSuccessfulDetailRequest,
    cb?: (error: string, rep: DescribeBiddingSuccessfulDetailResponse) => void
  ): Promise<DescribeBiddingSuccessfulDetailResponse> {
    return this.request("DescribeBiddingSuccessfulDetail", req, cb)
  }
}
