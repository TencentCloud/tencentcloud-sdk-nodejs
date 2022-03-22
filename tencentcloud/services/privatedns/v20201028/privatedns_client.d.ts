import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeQuotaUsageResponse, ModifyPrivateZoneVpcRequest, DescribeAuditLogResponse, DescribePrivateDNSAccountListResponse, DescribePrivateZoneRecordListRequest, DescribePrivateZoneRecordListResponse, DescribePrivateZoneListResponse, DescribePrivateZoneRequest, DescribeAccountVpcListResponse, DescribePrivateZoneServiceRequest, DescribeRequestDataRequest, ModifyPrivateZoneRecordResponse, DescribeAccountVpcListRequest, DescribeRequestDataResponse, ModifyPrivateZoneRequest, CreatePrivateZoneRequest, ModifyPrivateZoneResponse, DescribePrivateZoneListRequest, SubscribePrivateZoneServiceRequest, DescribePrivateZoneResponse, CreatePrivateZoneResponse, DescribeDashboardResponse, CreatePrivateZoneRecordResponse, DescribePrivateZoneServiceResponse, CreatePrivateDNSAccountResponse, DescribeAuditLogRequest, DescribeDashboardRequest, DeletePrivateZoneRequest, SubscribePrivateZoneServiceResponse, DeletePrivateDNSAccountRequest, DeletePrivateZoneRecordRequest, DeletePrivateZoneResponse, CreatePrivateDNSAccountRequest, DescribePrivateDNSAccountListRequest, CreatePrivateZoneRecordRequest, DescribeQuotaUsageRequest, ModifyPrivateZoneRecordRequest, DeletePrivateDNSAccountResponse, DeletePrivateZoneRecordResponse, ModifyPrivateZoneVpcResponse } from "./privatedns_models";
/**
 * privatedns client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建私有域解析账号
     */
    CreatePrivateDNSAccount(req: CreatePrivateDNSAccountRequest, cb?: (error: string, rep: CreatePrivateDNSAccountResponse) => void): Promise<CreatePrivateDNSAccountResponse>;
    /**
     * 获取私有域信息
     */
    DescribePrivateZone(req: DescribePrivateZoneRequest, cb?: (error: string, rep: DescribePrivateZoneResponse) => void): Promise<DescribePrivateZoneResponse>;
    /**
     * 修改私有域解析记录
     */
    ModifyPrivateZoneRecord(req: ModifyPrivateZoneRecordRequest, cb?: (error: string, rep: ModifyPrivateZoneRecordResponse) => void): Promise<ModifyPrivateZoneRecordResponse>;
    /**
     * 获取私有域解析账号的VPC列表
     */
    DescribeAccountVpcList(req: DescribeAccountVpcListRequest, cb?: (error: string, rep: DescribeAccountVpcListResponse) => void): Promise<DescribeAccountVpcListResponse>;
    /**
     * 获取私有域记录列表
     */
    DescribePrivateZoneRecordList(req: DescribePrivateZoneRecordListRequest, cb?: (error: string, rep: DescribePrivateZoneRecordListResponse) => void): Promise<DescribePrivateZoneRecordListResponse>;
    /**
     * 查询私有域解析开通状态
     */
    DescribePrivateZoneService(req?: DescribePrivateZoneServiceRequest, cb?: (error: string, rep: DescribePrivateZoneServiceResponse) => void): Promise<DescribePrivateZoneServiceResponse>;
    /**
     * 删除私有域解析账号
     */
    DeletePrivateDNSAccount(req: DeletePrivateDNSAccountRequest, cb?: (error: string, rep: DeletePrivateDNSAccountResponse) => void): Promise<DeletePrivateDNSAccountResponse>;
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
     * 修改私有域信息
     */
    ModifyPrivateZone(req: ModifyPrivateZoneRequest, cb?: (error: string, rep: ModifyPrivateZoneResponse) => void): Promise<ModifyPrivateZoneResponse>;
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
     * 获取私有域解析请求量
     */
    DescribeRequestData(req: DescribeRequestDataRequest, cb?: (error: string, rep: DescribeRequestDataResponse) => void): Promise<DescribeRequestDataResponse>;
    /**
     * 删除私有域解析记录
     */
    DeletePrivateZoneRecord(req: DeletePrivateZoneRecordRequest, cb?: (error: string, rep: DeletePrivateZoneRecordResponse) => void): Promise<DeletePrivateZoneRecordResponse>;
    /**
     * 删除私有域并停止解析
     */
    DeletePrivateZone(req: DeletePrivateZoneRequest, cb?: (error: string, rep: DeletePrivateZoneResponse) => void): Promise<DeletePrivateZoneResponse>;
    /**
     * 获取私有域解析账号列表
     */
    DescribePrivateDNSAccountList(req: DescribePrivateDNSAccountListRequest, cb?: (error: string, rep: DescribePrivateDNSAccountListResponse) => void): Promise<DescribePrivateDNSAccountListResponse>;
}
