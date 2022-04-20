import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UploadImageResponse, RenewDomainBatchResponse, BatchModifyDomainInfoRequest, UpdateProhibitionBatchRequest, TransferInDomainBatchResponse, DeleteTemplateResponse, TransferInDomainBatchRequest, CreateDomainBatchResponse, SendPhoneEmailCodeResponse, ModifyDomainDNSBatchResponse, DeletePhoneEmailRequest, DescribeTemplateResponse, UpdateProhibitionBatchResponse, CheckDomainResponse, DescribeDomainSimpleInfoRequest, CreatePhoneEmailRequest, DescribeTemplateRequest, RenewDomainBatchRequest, BatchModifyDomainInfoResponse, ModifyDomainOwnerBatchResponse, DescribeDomainBaseInfoResponse, DescribeTemplateListResponse, TransferProhibitionBatchRequest, DescribeBatchOperationLogDetailsRequest, DescribeDomainNameListResponse, DescribeDomainPriceListResponse, CreateTemplateResponse, DeleteTemplateRequest, CheckBatchStatusRequest, SetDomainAutoRenewResponse, CreateTemplateRequest, DescribeDomainPriceListRequest, CreateDomainBatchRequest, DescribeDomainSimpleInfoResponse, DescribeDomainBaseInfoRequest, DescribePhoneEmailListRequest, DescribeDomainNameListRequest, DescribeBatchOperationLogsRequest, UploadImageRequest, CheckDomainRequest, DescribeBatchOperationLogsResponse, TransferProhibitionBatchResponse, ModifyDomainDNSBatchRequest, DescribeBatchOperationLogDetailsResponse, DescribePhoneEmailListResponse, CheckBatchStatusResponse, DeletePhoneEmailResponse, DescribeTemplateListRequest, CreatePhoneEmailResponse, SetDomainAutoRenewRequest, ModifyDomainOwnerBatchRequest, SendPhoneEmailCodeRequest } from "./domain_models";
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
     * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
     */
    ModifyDomainDNSBatch(req: ModifyDomainDNSBatchRequest, cb?: (error: string, rep: ModifyDomainDNSBatchResponse) => void): Promise<ModifyDomainDNSBatchResponse>;
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
     * 本接口 (  DescribeDomainNameList ) 我的域名列表。

     */
    DescribeDomainNameList(req: DescribeDomainNameListRequest, cb?: (error: string, rep: DescribeDomainNameListResponse) => void): Promise<DescribeDomainNameListResponse>;
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
     * 检查域名是否可以注册。
     */
    CheckDomain(req: CheckDomainRequest, cb?: (error: string, rep: CheckDomainResponse) => void): Promise<CheckDomainResponse>;
    /**
     * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。

     */
    RenewDomainBatch(req: RenewDomainBatchRequest, cb?: (error: string, rep: RenewDomainBatchResponse) => void): Promise<RenewDomainBatchResponse>;
    /**
     * 本接口 (DescribeTemplate) 用于获取模板信息。
     */
    DescribeTemplate(req: DescribeTemplateRequest, cb?: (error: string, rep: DescribeTemplateResponse) => void): Promise<DescribeTemplateResponse>;
    /**
     * 此接口用于创建有效的手机、邮箱
     */
    CreatePhoneEmail(req: CreatePhoneEmailRequest, cb?: (error: string, rep: CreatePhoneEmailResponse) => void): Promise<CreatePhoneEmailResponse>;
    /**
     * 本接口 (DescribeTemplateList) 用于获取信息模板列表。

     */
    DescribeTemplateList(req: DescribeTemplateListRequest, cb?: (error: string, rep: DescribeTemplateListResponse) => void): Promise<DescribeTemplateListResponse>;
    /**
     * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
     */
    BatchModifyDomainInfo(req: BatchModifyDomainInfoRequest, cb?: (error: string, rep: BatchModifyDomainInfoResponse) => void): Promise<BatchModifyDomainInfoResponse>;
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
     * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
     */
    ModifyDomainOwnerBatch(req: ModifyDomainOwnerBatchRequest, cb?: (error: string, rep: ModifyDomainOwnerBatchResponse) => void): Promise<ModifyDomainOwnerBatchResponse>;
    /**
     * 本接口用于获取已验证的手机邮箱列表
     */
    DescribePhoneEmailList(req: DescribePhoneEmailListRequest, cb?: (error: string, rep: DescribePhoneEmailListResponse) => void): Promise<DescribePhoneEmailListResponse>;
    /**
     * 此接口用于发送手机邮箱验证码。
     */
    SendPhoneEmailCode(req: SendPhoneEmailCodeRequest, cb?: (error: string, rep: SendPhoneEmailCodeResponse) => void): Promise<SendPhoneEmailCodeResponse>;
    /**
     * 获取域名实名信息详情
     */
    DescribeDomainSimpleInfo(req: DescribeDomainSimpleInfoRequest, cb?: (error: string, rep: DescribeDomainSimpleInfoResponse) => void): Promise<DescribeDomainSimpleInfoResponse>;
    /**
     * 按照域名后缀获取对应的价格列表
     */
    DescribeDomainPriceList(req: DescribeDomainPriceListRequest, cb?: (error: string, rep: DescribeDomainPriceListResponse) => void): Promise<DescribeDomainPriceListResponse>;
    /**
     * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
     */
    DescribeBatchOperationLogs(req: DescribeBatchOperationLogsRequest, cb?: (error: string, rep: DescribeBatchOperationLogsResponse) => void): Promise<DescribeBatchOperationLogsResponse>;
}
