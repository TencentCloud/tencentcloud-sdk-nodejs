import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRecordRequest, DescribeRecordFilterListResponse, DownloadSnapshotRequest, ModifyDomainToGroupRequest, RollbackSnapshotRequest, DeleteDomainAliasResponse, DescribeVASStatisticRequest, DeleteDomainBatchResponse, ModifySubdomainStatusRequest, CreateRecordBatchResponse, DescribeSnapshotListResponse, ModifyRecordGroupRequest, DescribeVASStatisticResponse, DescribeBatchTaskRequest, CreateSnapshotResponse, DescribeDomainCustomLineListRequest, DeleteRecordGroupRequest, PayOrderWithBalanceResponse, DescribeDomainResponse, DescribeSnapshotListRequest, DescribePackageDetailResponse, DescribeDomainFilterListResponse, DescribeRecordLineListResponse, CreateDomainBatchRequest, ModifyRecordGroupResponse, DescribeDomainShareInfoRequest, DeleteDomainBatchRequest, DeleteDomainCustomLineRequest, DescribeSnapshotRollbackResultResponse, DescribeRecordTypeResponse, DescribeRecordLineCategoryListResponse, ModifyRecordResponse, DeleteSnapshotRequest, DeleteRecordBatchResponse, DescribeDomainAliasListResponse, RollbackRecordSnapshotRequest, ModifyRecordToGroupRequest, DescribeSnapshotConfigResponse, DeleteShareDomainResponse, ModifyDomainRemarkResponse, DeleteDomainRequest, ModifyDomainOwnerRequest, DescribeSubdomainAnalyticsResponse, DescribeSnapshotConfigRequest, DescribeRecordExistExceptDefaultNSRequest, DescribeRecordLineListRequest, DescribeRecordListResponse, CreateRecordBatchRequest, ModifyDomainToGroupResponse, DeleteDomainAliasRequest, CreateDealRequest, ModifyDomainLockRequest, DescribeDomainWhoisRequest, ModifyDomainStatusResponse, DescribeRecordRequest, CreateDomainGroupResponse, DescribeSubdomainAnalyticsRequest, DeleteRecordRequest, DescribeDomainRequest, ModifyRecordStatusRequest, CreateRecordResponse, DeleteRecordGroupResponse, DescribeSnapshotRollbackTaskRequest, CheckRecordSnapshotRollbackResponse, DescribeDomainPreviewRequest, DescribeRecordResponse, DescribeRecordLineCategoryListRequest, ModifyRecordToGroupResponse, ModifyDomainUnlockResponse, DescribeDomainLogListRequest, DescribeDomainListResponse, ModifyRecordBatchRequest, ModifyRecordFieldsResponse, DeleteRecordResponse, CreateDomainResponse, ModifyDomainCustomLineResponse, ModifyPackageAutoRenewResponse, ModifyRecordBatchResponse, CheckSnapshotRollbackRequest, CheckSnapshotRollbackResponse, DescribeRecordTypeRequest, DeleteDomainCustomLineResponse, DescribeSnapshotRollbackTaskResponse, DescribeDomainPreviewResponse, CreateDomainBatchResponse, DescribeDomainShareInfoResponse, ModifyDomainOwnerResponse, DescribeUserDetailResponse, CreateDomainRequest, ModifyDomainCustomLineRequest, DescribeDomainGroupListResponse, ModifyPackageAutoRenewRequest, ModifyDomainRemarkRequest, DescribeDomainLogListResponse, CreateDomainAliasResponse, DescribeRecordListRequest, PayOrderWithBalanceRequest, DescribePackageDetailRequest, DescribeRecordFilterListRequest, ModifyVasAutoRenewStatusResponse, ModifyRecordFieldsRequest, DeleteSnapshotResponse, DescribeDomainPurviewResponse, ModifySubdomainStatusResponse, DescribeDomainAnalyticsResponse, ModifyRecordStatusResponse, CreateRecordGroupRequest, RollbackSnapshotResponse, DescribeRecordGroupListResponse, CreateDomainGroupRequest, CreateSnapshotRequest, DeleteDomainResponse, DescribeRecordSnapshotRollbackResultResponse, ModifySnapshotConfigRequest, DescribeDomainAliasListRequest, CreateDomainAliasRequest, DeleteShareDomainRequest, ModifyDynamicDNSRequest, DescribeRecordGroupListRequest, DescribeDomainFilterListRequest, ModifyRecordRemarkRequest, ModifySnapshotConfigResponse, RollbackRecordSnapshotResponse, DescribeUserDetailRequest, ModifyDomainStatusRequest, ModifyRecordRemarkResponse, DescribeDomainListRequest, DescribeDomainCustomLineListResponse, DeleteRecordBatchRequest, DescribeDomainPurviewRequest, ModifyDomainUnlockRequest, DescribeRecordSnapshotRollbackResultRequest, ModifyDomainLockResponse, CreateDomainCustomLineRequest, CreateDealResponse, DescribeRecordExistExceptDefaultNSResponse, ModifyVasAutoRenewStatusRequest, DownloadSnapshotResponse, CreateRecordGroupResponse, DescribeDomainGroupListRequest, DescribeBatchTaskResponse, CheckRecordSnapshotRollbackRequest, CreateDomainCustomLineResponse, DescribeDomainAnalyticsRequest, ModifyDynamicDNSResponse, ModifyRecordRequest, DescribeSnapshotRollbackResultRequest, DescribeDomainWhoisResponse } from "./dnspod_models";
/**
 * dnspod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改域名所属分组
     */
    ModifyDomainToGroup(req: ModifyDomainToGroupRequest, cb?: (error: string, rep: ModifyDomainToGroupResponse) => void): Promise<ModifyDomainToGroupResponse>;
    /**
     * 获取某个域名下的解析记录列表
备注：
1. 新添加的解析记录存在短暂的索引延迟，如果查询不到新增记录，请在 30 秒后重试
2.  API获取的记录总条数会比控制台多2条，原因是： 为了防止用户误操作导致解析服务不可用，对2021-10-29 14:24:26之后添加的域名，在控制台都不显示这2条NS记录。
     */
    DescribeRecordList(req: DescribeRecordListRequest, cb?: (error: string, rep: DescribeRecordListResponse) => void): Promise<DescribeRecordListResponse>;
    /**
     * 获取域名共享信息
     */
    DescribeDomainShareInfo(req: DescribeDomainShareInfoRequest, cb?: (error: string, rep: DescribeDomainShareInfoResponse) => void): Promise<DescribeDomainShareInfoResponse>;
    /**
     * 查询最近一次回滚
     */
    DescribeSnapshotRollbackTask(req: DescribeSnapshotRollbackTaskRequest, cb?: (error: string, rep: DescribeSnapshotRollbackTaskResponse) => void): Promise<DescribeSnapshotRollbackTaskResponse>;
    /**
     * 增值服务自动续费设置
     */
    ModifyVasAutoRenewStatus(req: ModifyVasAutoRenewStatusRequest, cb?: (error: string, rep: ModifyVasAutoRenewStatusResponse) => void): Promise<ModifyVasAutoRenewStatusResponse>;
    /**
     * 获取域名权限
     */
    DescribeDomainPurview(req: DescribeDomainPurviewRequest, cb?: (error: string, rep: DescribeDomainPurviewResponse) => void): Promise<DescribeDomainPurviewResponse>;
    /**
     * 暂停子域名的解析记录
     */
    ModifySubdomainStatus(req: ModifySubdomainStatusRequest, cb?: (error: string, rep: ModifySubdomainStatusResponse) => void): Promise<ModifySubdomainStatusResponse>;
    /**
     * 删除域名的自定义线路
     */
    DeleteDomainCustomLine(req: DeleteDomainCustomLineRequest, cb?: (error: string, rep: DeleteDomainCustomLineResponse) => void): Promise<DeleteDomainCustomLineResponse>;
    /**
     * 获取等级允许的记录类型
     */
    DescribeRecordType(req: DescribeRecordTypeRequest, cb?: (error: string, rep: DescribeRecordTypeResponse) => void): Promise<DescribeRecordTypeResponse>;
    /**
     * 删除记录分组
     */
    DeleteRecordGroup(req: DeleteRecordGroupRequest, cb?: (error: string, rep: DeleteRecordGroupResponse) => void): Promise<DeleteRecordGroupResponse>;
    /**
     * 重新回滚指定解析记录快照
     */
    RollbackRecordSnapshot(req: RollbackRecordSnapshotRequest, cb?: (error: string, rep: RollbackRecordSnapshotResponse) => void): Promise<RollbackRecordSnapshotResponse>;
    /**
     * 修改域名状态
     */
    ModifyDomainStatus(req: ModifyDomainStatusRequest, cb?: (error: string, rep: ModifyDomainStatusResponse) => void): Promise<ModifyDomainStatusResponse>;
    /**
     * 获取域名别名列表
     */
    DescribeDomainAliasList(req: DescribeDomainAliasListRequest, cb?: (error: string, rep: DescribeDomainAliasListResponse) => void): Promise<DescribeDomainAliasListResponse>;
    /**
     * 查询快照列表
     */
    DescribeSnapshotList(req: DescribeSnapshotListRequest, cb?: (error: string, rep: DescribeSnapshotListResponse) => void): Promise<DescribeSnapshotListResponse>;
    /**
     * 修改记录可选字段
     */
    ModifyRecordFields(req: ModifyRecordFieldsRequest, cb?: (error: string, rep: ModifyRecordFieldsResponse) => void): Promise<ModifyRecordFieldsResponse>;
    /**
     * 批量删除域名
     */
    DeleteDomainBatch(req: DeleteDomainBatchRequest, cb?: (error: string, rep: DeleteDomainBatchResponse) => void): Promise<DeleteDomainBatchResponse>;
    /**
     * 下载快照
     */
    DownloadSnapshot(req: DownloadSnapshotRequest, cb?: (error: string, rep: DownloadSnapshotResponse) => void): Promise<DownloadSnapshotResponse>;
    /**
     * 快照回滚前检查
     */
    CheckSnapshotRollback(req: CheckSnapshotRollbackRequest, cb?: (error: string, rep: CheckSnapshotRollbackResponse) => void): Promise<CheckSnapshotRollbackResponse>;
    /**
     * 修改记录
     */
    ModifyRecord(req: ModifyRecordRequest, cb?: (error: string, rep: ModifyRecordResponse) => void): Promise<ModifyRecordResponse>;
    /**
     * 获取域名Whois信息
     */
    DescribeDomainWhois(req: DescribeDomainWhoisRequest, cb?: (error: string, rep: DescribeDomainWhoisResponse) => void): Promise<DescribeDomainWhoisResponse>;
    /**
     * 查询解析记录分组列表
     */
    DescribeRecordGroupList(req: DescribeRecordGroupListRequest, cb?: (error: string, rep: DescribeRecordGroupListResponse) => void): Promise<DescribeRecordGroupListResponse>;
    /**
     * 查询快照回滚结果
     */
    DescribeSnapshotRollbackResult(req: DescribeSnapshotRollbackResultRequest, cb?: (error: string, rep: DescribeSnapshotRollbackResultResponse) => void): Promise<DescribeSnapshotRollbackResultResponse>;
    /**
     * 删除快照
     */
    DeleteSnapshot(req: DeleteSnapshotRequest, cb?: (error: string, rep: DeleteSnapshotResponse) => void): Promise<DeleteSnapshotResponse>;
    /**
     * 域名锁定解锁
     */
    ModifyDomainUnlock(req: ModifyDomainUnlockRequest, cb?: (error: string, rep: ModifyDomainUnlockResponse) => void): Promise<ModifyDomainUnlockResponse>;
    /**
     * 批量添加域名
     */
    CreateDomainBatch(req: CreateDomainBatchRequest, cb?: (error: string, rep: CreateDomainBatchResponse) => void): Promise<CreateDomainBatchResponse>;
    /**
     * 获取域名分组列表
     */
    DescribeDomainGroupList(req?: DescribeDomainGroupListRequest, cb?: (error: string, rep: DescribeDomainGroupListResponse) => void): Promise<DescribeDomainGroupListResponse>;
    /**
     * DNSPod商品下单
     */
    CreateDeal(req: CreateDealRequest, cb?: (error: string, rep: CreateDealResponse) => void): Promise<CreateDealResponse>;
    /**
     * 获取某个域名下的解析记录列表
备注：
1. 新添加的解析记录存在短暂的索引延迟，如果查询不到新增记录，请在 30 秒后重试
2.  API获取的记录总条数会比控制台多2条，原因是： 为了防止用户误操作导致解析服务不可用，对2021-10-29 14:24:26之后添加的域名，在控制台都不显示这2条NS记录。
     */
    DescribeRecordFilterList(req: DescribeRecordFilterListRequest, cb?: (error: string, rep: DescribeRecordFilterListResponse) => void): Promise<DescribeRecordFilterListResponse>;
    /**
     * 查询解析快照配置
     */
    DescribeSnapshotConfig(req: DescribeSnapshotConfigRequest, cb?: (error: string, rep: DescribeSnapshotConfigResponse) => void): Promise<DescribeSnapshotConfigResponse>;
    /**
     * 按账号删除域名共享
     */
    DeleteShareDomain(req: DeleteShareDomainRequest, cb?: (error: string, rep: DeleteShareDomainResponse) => void): Promise<DeleteShareDomainResponse>;
    /**
     * 设置域名备注
     */
    ModifyDomainRemark(req: ModifyDomainRemarkRequest, cb?: (error: string, rep: ModifyDomainRemarkResponse) => void): Promise<ModifyDomainRemarkResponse>;
    /**
     * 获取域名信息
     */
    DescribeDomain(req: DescribeDomainRequest, cb?: (error: string, rep: DescribeDomainResponse) => void): Promise<DescribeDomainResponse>;
    /**
     * 修改记录分组
     */
    ModifyRecordGroup(req: ModifyRecordGroupRequest, cb?: (error: string, rep: ModifyRecordGroupResponse) => void): Promise<ModifyRecordGroupResponse>;
    /**
     * 修改解析记录的状态
     */
    ModifyRecordStatus(req: ModifyRecordStatusRequest, cb?: (error: string, rep: ModifyRecordStatusResponse) => void): Promise<ModifyRecordStatusResponse>;
    /**
     * 添加记录分组
     */
    CreateRecordGroup(req: CreateRecordGroupRequest, cb?: (error: string, rep: CreateRecordGroupResponse) => void): Promise<CreateRecordGroupResponse>;
    /**
     * 更新动态 DNS 记录
     */
    ModifyDynamicDNS(req: ModifyDynamicDNSRequest, cb?: (error: string, rep: ModifyDynamicDNSResponse) => void): Promise<ModifyDynamicDNSResponse>;
    /**
     * 批量添加记录
     */
    CreateRecordBatch(req: CreateRecordBatchRequest, cb?: (error: string, rep: CreateRecordBatchResponse) => void): Promise<CreateRecordBatchResponse>;
    /**
     * 创建域名的自定义线路
     */
    CreateDomainCustomLine(req: CreateDomainCustomLineRequest, cb?: (error: string, rep: CreateDomainCustomLineResponse) => void): Promise<CreateDomainCustomLineResponse>;
    /**
     * 获取账户信息
     */
    DescribeUserDetail(req?: DescribeUserDetailRequest, cb?: (error: string, rep: DescribeUserDetailResponse) => void): Promise<DescribeUserDetailResponse>;
    /**
     * 回滚快照
     */
    RollbackSnapshot(req: RollbackSnapshotRequest, cb?: (error: string, rep: RollbackSnapshotResponse) => void): Promise<RollbackSnapshotResponse>;
    /**
     * 删除记录
     */
    DeleteRecord(req: DeleteRecordRequest, cb?: (error: string, rep: DeleteRecordResponse) => void): Promise<DeleteRecordResponse>;
    /**
     * 获取记录信息
     */
    DescribeRecord(req: DescribeRecordRequest, cb?: (error: string, rep: DescribeRecordResponse) => void): Promise<DescribeRecordResponse>;
    /**
     * 获取各套餐配置详情
     */
    DescribePackageDetail(req?: DescribePackageDetailRequest, cb?: (error: string, rep: DescribePackageDetailResponse) => void): Promise<DescribePackageDetailResponse>;
    /**
     * 获取等级允许的线路
     */
    DescribeRecordLineList(req: DescribeRecordLineListRequest, cb?: (error: string, rep: DescribeRecordLineListResponse) => void): Promise<DescribeRecordLineListResponse>;
    /**
     * 获取域名增值服务用量
     */
    DescribeVASStatistic(req: DescribeVASStatisticRequest, cb?: (error: string, rep: DescribeVASStatisticResponse) => void): Promise<DescribeVASStatisticResponse>;
    /**
     * 统计各个域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况
     */
    DescribeDomainAnalytics(req: DescribeDomainAnalyticsRequest, cb?: (error: string, rep: DescribeDomainAnalyticsResponse) => void): Promise<DescribeDomainAnalyticsResponse>;
    /**
     * DNS 解析套餐自动续费设置
     */
    ModifyPackageAutoRenew(req: ModifyPackageAutoRenewRequest, cb?: (error: string, rep: ModifyPackageAutoRenewResponse) => void): Promise<ModifyPackageAutoRenewResponse>;
    /**
     * 获取任务详情
     */
    DescribeBatchTask(req: DescribeBatchTaskRequest, cb?: (error: string, rep: DescribeBatchTaskResponse) => void): Promise<DescribeBatchTaskResponse>;
    /**
     * 创建域名别名
     */
    CreateDomainAlias(req: CreateDomainAliasRequest, cb?: (error: string, rep: CreateDomainAliasResponse) => void): Promise<CreateDomainAliasResponse>;
    /**
     * 添加记录
备注：新添加的解析记录存在短暂的索引延迟，如果查询不到新增记录，请在 30 秒后重试
     */
    CreateRecord(req: CreateRecordRequest, cb?: (error: string, rep: CreateRecordResponse) => void): Promise<CreateRecordResponse>;
    /**
     * 按分类返回线路列表
     */
    DescribeRecordLineCategoryList(req: DescribeRecordLineCategoryListRequest, cb?: (error: string, rep: DescribeRecordLineCategoryListResponse) => void): Promise<DescribeRecordLineCategoryListResponse>;
    /**
     * 判断是否有除系统默认的@-NS记录之外的记录存在
     */
    DescribeRecordExistExceptDefaultNS(req: DescribeRecordExistExceptDefaultNSRequest, cb?: (error: string, rep: DescribeRecordExistExceptDefaultNSResponse) => void): Promise<DescribeRecordExistExceptDefaultNSResponse>;
    /**
     * 域名过户
     */
    ModifyDomainOwner(req: ModifyDomainOwnerRequest, cb?: (error: string, rep: ModifyDomainOwnerResponse) => void): Promise<ModifyDomainOwnerResponse>;
    /**
     * 创建域名分组
     */
    CreateDomainGroup(req: CreateDomainGroupRequest, cb?: (error: string, rep: CreateDomainGroupResponse) => void): Promise<CreateDomainGroupResponse>;
    /**
     * 修改快照配置
     */
    ModifySnapshotConfig(req: ModifySnapshotConfigRequest, cb?: (error: string, rep: ModifySnapshotConfigResponse) => void): Promise<ModifySnapshotConfigResponse>;
    /**
     * 删除域名别名
     */
    DeleteDomainAlias(req: DeleteDomainAliasRequest, cb?: (error: string, rep: DeleteDomainAliasResponse) => void): Promise<DeleteDomainAliasResponse>;
    /**
     * 批量删除解析记录
     */
    DeleteRecordBatch(req: DeleteRecordBatchRequest, cb?: (error: string, rep: DeleteRecordBatchResponse) => void): Promise<DeleteRecordBatchResponse>;
    /**
     * 回滚前检查单条记录
     */
    CheckRecordSnapshotRollback(req: CheckRecordSnapshotRollbackRequest, cb?: (error: string, rep: CheckRecordSnapshotRollbackResponse) => void): Promise<CheckRecordSnapshotRollbackResponse>;
    /**
     * 获取域名的自定义线路列表
     */
    DescribeDomainCustomLineList(req: DescribeDomainCustomLineListRequest, cb?: (error: string, rep: DescribeDomainCustomLineListResponse) => void): Promise<DescribeDomainCustomLineListResponse>;
    /**
     * 添加域名
     */
    CreateDomain(req: CreateDomainRequest, cb?: (error: string, rep: CreateDomainResponse) => void): Promise<CreateDomainResponse>;
    /**
     * 设置记录备注
     */
    ModifyRecordRemark(req: ModifyRecordRemarkRequest, cb?: (error: string, rep: ModifyRecordRemarkResponse) => void): Promise<ModifyRecordRemarkResponse>;
    /**
     * 修改域名的自定义线路
     */
    ModifyDomainCustomLine(req: ModifyDomainCustomLineRequest, cb?: (error: string, rep: ModifyDomainCustomLineResponse) => void): Promise<ModifyDomainCustomLineResponse>;
    /**
     * 获取域名筛选列表
备注：新添加的解析记录存在短暂的索引延迟，如果查询不到新增记录，请在 30 秒后重试
     */
    DescribeDomainFilterList(req: DescribeDomainFilterListRequest, cb?: (error: string, rep: DescribeDomainFilterListResponse) => void): Promise<DescribeDomainFilterListResponse>;
    /**
     * DNSPod商品余额支付
     */
    PayOrderWithBalance(req: PayOrderWithBalanceRequest, cb?: (error: string, rep: PayOrderWithBalanceResponse) => void): Promise<PayOrderWithBalanceResponse>;
    /**
     * 将记录添加到分组
     */
    ModifyRecordToGroup(req: ModifyRecordToGroupRequest, cb?: (error: string, rep: ModifyRecordToGroupResponse) => void): Promise<ModifyRecordToGroupResponse>;
    /**
     * 获取域名概览信息
     */
    DescribeDomainPreview(req: DescribeDomainPreviewRequest, cb?: (error: string, rep: DescribeDomainPreviewResponse) => void): Promise<DescribeDomainPreviewResponse>;
    /**
     * 统计子域名的解析量，帮助您了解流量情况、时间段分布。支持查看近 3 个月内的统计情况。仅付费套餐域名可用。
     */
    DescribeSubdomainAnalytics(req: DescribeSubdomainAnalyticsRequest, cb?: (error: string, rep: DescribeSubdomainAnalyticsResponse) => void): Promise<DescribeSubdomainAnalyticsResponse>;
    /**
     * 批量修改记录
     */
    ModifyRecordBatch(req: ModifyRecordBatchRequest, cb?: (error: string, rep: ModifyRecordBatchResponse) => void): Promise<ModifyRecordBatchResponse>;
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
     * 创建快照
     */
    CreateSnapshot(req: CreateSnapshotRequest, cb?: (error: string, rep: CreateSnapshotResponse) => void): Promise<CreateSnapshotResponse>;
    /**
     * 查询解析记录重新回滚的结果
     */
    DescribeRecordSnapshotRollbackResult(req: DescribeRecordSnapshotRollbackResultRequest, cb?: (error: string, rep: DescribeRecordSnapshotRollbackResultResponse) => void): Promise<DescribeRecordSnapshotRollbackResultResponse>;
}
