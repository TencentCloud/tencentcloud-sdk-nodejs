import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRecordRequest, DeleteDomainAliasResponse, ModifySubdomainStatusRequest, CreateRecordBatchResponse, DescribeBatchTaskRequest, DescribeDomainResponse, DescribeRecordLineListResponse, CreateDomainBatchRequest, DescribeDomainShareInfoRequest, DescribeRecordTypeResponse, ModifyDomainRemarkResponse, DescribeDomainAliasListResponse, DeleteShareDomainResponse, ModifyRecordRequest, DeleteDomainRequest, ModifyDomainOwnerRequest, DescribeRecordLineListRequest, DescribeRecordListResponse, CreateRecordBatchRequest, DeleteDomainAliasRequest, ModifyDomainLockRequest, ModifyDomainStatusRequest, ModifyDomainStatusResponse, DescribeRecordRequest, CreateDomainGroupResponse, DeleteRecordRequest, DescribeDomainRequest, ModifyRecordStatusRequest, CreateRecordResponse, DescribeRecordResponse, ModifyRecordResponse, ModifyDomainUnlockResponse, DescribeDomainLogListRequest, DescribeDomainListResponse, ModifyRecordBatchRequest, DeleteRecordResponse, CreateDomainResponse, ModifyRecordBatchResponse, DescribeDomainLogListResponse, DescribeRecordTypeRequest, CreateDomainBatchResponse, ModifyDomainOwnerResponse, DescribeUserDetailResponse, CreateDomainRequest, DescribeDomainShareInfoResponse, ModifyDomainRemarkRequest, CreateDomainAliasResponse, DescribeRecordListRequest, DescribeDomainPurviewResponse, ModifySubdomainStatusResponse, ModifyRecordStatusResponse, CreateDomainGroupRequest, DeleteDomainResponse, DescribeDomainAliasListRequest, CreateDomainAliasRequest, DeleteShareDomainRequest, ModifyDynamicDNSRequest, ModifyRecordRemarkRequest, DescribeUserDetailRequest, ModifyRecordRemarkResponse, DescribeDomainListRequest, DescribeDomainPurviewRequest, ModifyDomainUnlockRequest, ModifyDomainLockResponse, DescribeBatchTaskResponse, ModifyDynamicDNSResponse } from "./dnspod_models";
/**
 * dnspod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取某个域名下的解析记录
     */
    DescribeRecordList(req: DescribeRecordListRequest, cb?: (error: string, rep: DescribeRecordListResponse) => void): Promise<DescribeRecordListResponse>;
    /**
     * 获取域名权限
     */
    DescribeDomainPurview(req: DescribeDomainPurviewRequest, cb?: (error: string, rep: DescribeDomainPurviewResponse) => void): Promise<DescribeDomainPurviewResponse>;
    /**
     * 暂停子域名的解析记录
     */
    ModifySubdomainStatus(req: ModifySubdomainStatusRequest, cb?: (error: string, rep: ModifySubdomainStatusResponse) => void): Promise<ModifySubdomainStatusResponse>;
    /**
     * 删除记录
     */
    DeleteRecord(req: DeleteRecordRequest, cb?: (error: string, rep: DeleteRecordResponse) => void): Promise<DeleteRecordResponse>;
    /**
     * 获取域名别名列表
     */
    DescribeDomainAliasList(req: DescribeDomainAliasListRequest, cb?: (error: string, rep: DescribeDomainAliasListResponse) => void): Promise<DescribeDomainAliasListResponse>;
    /**
     * 修改解析记录的状态
     */
    ModifyRecordStatus(req: ModifyRecordStatusRequest, cb?: (error: string, rep: ModifyRecordStatusResponse) => void): Promise<ModifyRecordStatusResponse>;
    /**
     * 修改域名状态
     */
    ModifyDomainStatus(req: ModifyDomainStatusRequest, cb?: (error: string, rep: ModifyDomainStatusResponse) => void): Promise<ModifyDomainStatusResponse>;
    /**
     * 域名锁定解锁
     */
    ModifyDomainUnlock(req: ModifyDomainUnlockRequest, cb?: (error: string, rep: ModifyDomainUnlockResponse) => void): Promise<ModifyDomainUnlockResponse>;
    /**
     * 批量添加域名
     */
    CreateDomainBatch(req: CreateDomainBatchRequest, cb?: (error: string, rep: CreateDomainBatchResponse) => void): Promise<CreateDomainBatchResponse>;
    /**
     * 获取域名共享信息
     */
    DescribeDomainShareInfo(req: DescribeDomainShareInfoRequest, cb?: (error: string, rep: DescribeDomainShareInfoResponse) => void): Promise<DescribeDomainShareInfoResponse>;
    /**
     * 删除域名共享
     */
    DeleteShareDomain(req: DeleteShareDomainRequest, cb?: (error: string, rep: DeleteShareDomainResponse) => void): Promise<DeleteShareDomainResponse>;
    /**
     * 获取域名信息
     */
    DescribeDomain(req: DescribeDomainRequest, cb?: (error: string, rep: DescribeDomainResponse) => void): Promise<DescribeDomainResponse>;
    /**
     * 更新动态 DNS 记录

     */
    ModifyDynamicDNS(req: ModifyDynamicDNSRequest, cb?: (error: string, rep: ModifyDynamicDNSResponse) => void): Promise<ModifyDynamicDNSResponse>;
    /**
     * 添加域名

     */
    CreateDomain(req: CreateDomainRequest, cb?: (error: string, rep: CreateDomainResponse) => void): Promise<CreateDomainResponse>;
    /**
     * 获取帐户信息
     */
    DescribeUserDetail(req?: DescribeUserDetailRequest, cb?: (error: string, rep: DescribeUserDetailResponse) => void): Promise<DescribeUserDetailResponse>;
    /**
     * 获取等级允许的记录类型
     */
    DescribeRecordType(req: DescribeRecordTypeRequest, cb?: (error: string, rep: DescribeRecordTypeResponse) => void): Promise<DescribeRecordTypeResponse>;
    /**
     * 获取记录信息
     */
    DescribeRecord(req: DescribeRecordRequest, cb?: (error: string, rep: DescribeRecordResponse) => void): Promise<DescribeRecordResponse>;
    /**
     * 获取等级允许的线路
     */
    DescribeRecordLineList(req: DescribeRecordLineListRequest, cb?: (error: string, rep: DescribeRecordLineListResponse) => void): Promise<DescribeRecordLineListResponse>;
    /**
     * 设置记录备注
     */
    ModifyRecordRemark(req: ModifyRecordRemarkRequest, cb?: (error: string, rep: ModifyRecordRemarkResponse) => void): Promise<ModifyRecordRemarkResponse>;
    /**
     * 创建域名别名
     */
    CreateDomainAlias(req: CreateDomainAliasRequest, cb?: (error: string, rep: CreateDomainAliasResponse) => void): Promise<CreateDomainAliasResponse>;
    /**
     * 添加记录

     */
    CreateRecord(req: CreateRecordRequest, cb?: (error: string, rep: CreateRecordResponse) => void): Promise<CreateRecordResponse>;
    /**
     * 设置域名备注
     */
    ModifyDomainRemark(req: ModifyDomainRemarkRequest, cb?: (error: string, rep: ModifyDomainRemarkResponse) => void): Promise<ModifyDomainRemarkResponse>;
    /**
     * 域名过户
     */
    ModifyDomainOwner(req: ModifyDomainOwnerRequest, cb?: (error: string, rep: ModifyDomainOwnerResponse) => void): Promise<ModifyDomainOwnerResponse>;
    /**
     * 创建域名分组
     */
    CreateDomainGroup(req: CreateDomainGroupRequest, cb?: (error: string, rep: CreateDomainGroupResponse) => void): Promise<CreateDomainGroupResponse>;
    /**
     * 删除域名别名
     */
    DeleteDomainAlias(req: DeleteDomainAliasRequest, cb?: (error: string, rep: DeleteDomainAliasResponse) => void): Promise<DeleteDomainAliasResponse>;
    /**
     * 获取任务详情
     */
    DescribeBatchTask(req: DescribeBatchTaskRequest, cb?: (error: string, rep: DescribeBatchTaskResponse) => void): Promise<DescribeBatchTaskResponse>;
    /**
     * 批量添加记录
     */
    CreateRecordBatch(req: CreateRecordBatchRequest, cb?: (error: string, rep: CreateRecordBatchResponse) => void): Promise<CreateRecordBatchResponse>;
    /**
     * 获取域名列表
     */
    DescribeDomainList(req: DescribeDomainListRequest, cb?: (error: string, rep: DescribeDomainListResponse) => void): Promise<DescribeDomainListResponse>;
    /**
     * 删除域名

     */
    DeleteDomain(req: DeleteDomainRequest, cb?: (error: string, rep: DeleteDomainResponse) => void): Promise<DeleteDomainResponse>;
    /**
     * 获取域名日志
     */
    DescribeDomainLogList(req: DescribeDomainLogListRequest, cb?: (error: string, rep: DescribeDomainLogListResponse) => void): Promise<DescribeDomainLogListResponse>;
    /**
     * 锁定域名
     */
    ModifyDomainLock(req: ModifyDomainLockRequest, cb?: (error: string, rep: ModifyDomainLockResponse) => void): Promise<ModifyDomainLockResponse>;
    /**
     * 批量修改记录
     */
    ModifyRecordBatch(req: ModifyRecordBatchRequest, cb?: (error: string, rep: ModifyRecordBatchResponse) => void): Promise<ModifyRecordBatchResponse>;
    /**
     * 修改记录
     */
    ModifyRecord(req: ModifyRecordRequest, cb?: (error: string, rep: ModifyRecordResponse) => void): Promise<ModifyRecordResponse>;
}
