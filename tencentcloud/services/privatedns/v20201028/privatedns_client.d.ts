import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeQuotaUsageResponse, ModifyPrivateZoneVpcRequest, DescribeAuditLogResponse, DescribePrivateDNSAccountListResponse, DescribePrivateZoneRecordListRequest, QueryAsyncBindVpcStatusResponse, DescribePrivateZoneRecordListResponse, DescribePrivateZoneListResponse, DescribePrivateZoneRequest, ModifyRecordsStatusResponse, DeleteSpecifyPrivateZoneVpcResponse, DescribeAccountVpcListResponse, DescribePrivateZoneServiceRequest, AddSpecifyPrivateZoneVpcResponse, AddSpecifyPrivateZoneVpcRequest, DescribeRequestDataRequest, ModifyPrivateZoneRecordResponse, DescribeAccountVpcListRequest, DescribeRequestDataResponse, ModifyPrivateZoneRequest, CreatePrivateZoneRequest, ModifyPrivateZoneResponse, DeleteSpecifyPrivateZoneVpcRequest, SubscribePrivateZoneServiceRequest, DescribePrivateZoneResponse, CreatePrivateZoneResponse, DescribeDashboardResponse, CreatePrivateZoneRecordResponse, DescribePrivateZoneServiceResponse, CreatePrivateDNSAccountResponse, DescribeAuditLogRequest, DescribeDashboardRequest, DeletePrivateZoneRequest, SubscribePrivateZoneServiceResponse, DeletePrivateDNSAccountRequest, DeletePrivateZoneRecordRequest, DeletePrivateZoneResponse, ModifyRecordsStatusRequest, CreatePrivateDNSAccountRequest, QueryAsyncBindVpcStatusRequest, DescribePrivateDNSAccountListRequest, CreatePrivateZoneRecordRequest, DescribeQuotaUsageRequest, ModifyPrivateZoneRecordRequest, DescribePrivateZoneListRequest, DeletePrivateDNSAccountResponse, DeletePrivateZoneRecordResponse, ModifyPrivateZoneVpcResponse } from "./privatedns_models";
/**
 * privatedns client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 跨账号关联VPC时绑定其他账号
     */
    CreatePrivateDNSAccount(req: CreatePrivateDNSAccountRequest, cb?: (error: string, rep: CreatePrivateDNSAccountResponse) => void): Promise<CreatePrivateDNSAccountResponse>;
    /**
     * 获取私有域信息
     */
    DescribePrivateZone(req: DescribePrivateZoneRequest, cb?: (error: string, rep: DescribePrivateZoneResponse) => void): Promise<DescribePrivateZoneResponse>;
    /**
     * 获取私有域记录列表
     */
    DescribePrivateZoneRecordList(req: DescribePrivateZoneRecordListRequest, cb?: (error: string, rep: DescribePrivateZoneRecordListResponse) => void): Promise<DescribePrivateZoneRecordListResponse>;
    /**
     * 查询额度使用情况
     */
    DescribeQuotaUsage(req?: DescribeQuotaUsageRequest, cb?: (error: string, rep: DescribeQuotaUsageResponse) => void): Promise<DescribeQuotaUsageResponse>;
    /**
     * 获取操作日志列表
     */
    DescribeAuditLog(req: DescribeAuditLogRequest, cb?: (error: string, rep: DescribeAuditLogResponse) => void): Promise<DescribeAuditLogResponse>;
    /**
     * 添加私有域解析记录
     */
    CreatePrivateZoneRecord(req: CreatePrivateZoneRecordRequest, cb?: (error: string, rep: CreatePrivateZoneRecordResponse) => void): Promise<CreatePrivateZoneRecordResponse>;
    /**
     * 创建私有域
     */
    CreatePrivateZone(req: CreatePrivateZoneRequest, cb?: (error: string, rep: CreatePrivateZoneResponse) => void): Promise<CreatePrivateZoneResponse>;
    /**
     * 获取私有域列表
     */
    DescribePrivateZoneList(req: DescribePrivateZoneListRequest, cb?: (error: string, rep: DescribePrivateZoneListResponse) => void): Promise<DescribePrivateZoneListResponse>;
    /**
     * 追加与私有域关联的VPC
     */
    AddSpecifyPrivateZoneVpc(req: AddSpecifyPrivateZoneVpcRequest, cb?: (error: string, rep: AddSpecifyPrivateZoneVpcResponse) => void): Promise<AddSpecifyPrivateZoneVpcResponse>;
    /**
     * 查询异步绑定vpc操作状态
     */
    QueryAsyncBindVpcStatus(req: QueryAsyncBindVpcStatusRequest, cb?: (error: string, rep: QueryAsyncBindVpcStatusResponse) => void): Promise<QueryAsyncBindVpcStatusResponse>;
    /**
     * 修改私有域信息
     */
    ModifyPrivateZone(req: ModifyPrivateZoneRequest, cb?: (error: string, rep: ModifyPrivateZoneResponse) => void): Promise<ModifyPrivateZoneResponse>;
    /**
     * 修改私有域解析记录
     */
    ModifyPrivateZoneRecord(req: ModifyPrivateZoneRecordRequest, cb?: (error: string, rep: ModifyPrivateZoneRecordResponse) => void): Promise<ModifyPrivateZoneRecordResponse>;
    /**
     * 删除私有域解析账号
     */
    DeletePrivateDNSAccount(req: DeletePrivateDNSAccountRequest, cb?: (error: string, rep: DeletePrivateDNSAccountResponse) => void): Promise<DeletePrivateDNSAccountResponse>;
    /**
     * 开通私有域解析
     */
    SubscribePrivateZoneService(req?: SubscribePrivateZoneServiceRequest, cb?: (error: string, rep: SubscribePrivateZoneServiceResponse) => void): Promise<SubscribePrivateZoneServiceResponse>;
    /**
     * 获取私有域解析概览
     */
    DescribeDashboard(req?: DescribeDashboardRequest, cb?: (error: string, rep: DescribeDashboardResponse) => void): Promise<DescribeDashboardResponse>;
    /**
     * 修改私有域关联的VPC
     */
    ModifyPrivateZoneVpc(req: ModifyPrivateZoneVpcRequest, cb?: (error: string, rep: ModifyPrivateZoneVpcResponse) => void): Promise<ModifyPrivateZoneVpcResponse>;
    /**
     * 删除私有域并停止解析
     */
    DeletePrivateZone(req: DeletePrivateZoneRequest, cb?: (error: string, rep: DeletePrivateZoneResponse) => void): Promise<DeletePrivateZoneResponse>;
    /**
     * 获取私有域解析账号的VPC列表
     */
    DescribeAccountVpcList(req: DescribeAccountVpcListRequest, cb?: (error: string, rep: DescribeAccountVpcListResponse) => void): Promise<DescribeAccountVpcListResponse>;
    /**
     * 修改解析记录状态
     */
    ModifyRecordsStatus(req: ModifyRecordsStatusRequest, cb?: (error: string, rep: ModifyRecordsStatusResponse) => void): Promise<ModifyRecordsStatusResponse>;
    /**
     * 删除与私有域关联的VPC
     */
    DeleteSpecifyPrivateZoneVpc(req: DeleteSpecifyPrivateZoneVpcRequest, cb?: (error: string, rep: DeleteSpecifyPrivateZoneVpcResponse) => void): Promise<DeleteSpecifyPrivateZoneVpcResponse>;
    /**
     * 查询私有域解析开通状态
     */
    DescribePrivateZoneService(req?: DescribePrivateZoneServiceRequest, cb?: (error: string, rep: DescribePrivateZoneServiceResponse) => void): Promise<DescribePrivateZoneServiceResponse>;
    /**
     * 删除私有域解析记录
     */
    DeletePrivateZoneRecord(req: DeletePrivateZoneRecordRequest, cb?: (error: string, rep: DeletePrivateZoneRecordResponse) => void): Promise<DeletePrivateZoneRecordResponse>;
    /**
     * 获取私有域解析请求量
     */
    DescribeRequestData(req: DescribeRequestDataRequest, cb?: (error: string, rep: DescribeRequestDataResponse) => void): Promise<DescribeRequestDataResponse>;
    /**
     * 获取私有域解析账号列表
     */
    DescribePrivateDNSAccountList(req: DescribePrivateDNSAccountListRequest, cb?: (error: string, rep: DescribePrivateDNSAccountListResponse) => void): Promise<DescribePrivateDNSAccountListResponse>;
}
