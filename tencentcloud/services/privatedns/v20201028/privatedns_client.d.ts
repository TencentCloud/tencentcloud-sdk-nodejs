import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryAsyncBindVpcStatusResponse, DescribeAccountVpcListRequest, DescribeEndPointRegionRequest, DescribePrivateZoneRequest, DescribeAccountVpcListResponse, DeletePrivateDNSAccountRequest, AddSpecifyPrivateZoneVpcRequest, DescribeForwardRuleResponse, CreatePrivateDNSAccountResponse, SubscribePrivateZoneServiceRequest, CreateEndPointRequest, DescribeEndPointListRequest, CreatePrivateDNSAccountRequest, CreateForwardRuleResponse, ModifyPrivateZoneVpcRequest, DescribePrivateDNSAccountListResponse, DescribePrivateZoneServiceRequest, CreatePrivateZoneRecordRequest, ModifyPrivateZoneRecordResponse, DescribePrivateZoneRecordListResponse, DescribeRequestDataResponse, DeleteForwardRuleRequest, ModifyPrivateZoneResponse, DeleteSpecifyPrivateZoneVpcRequest, ModifyPrivateZoneRequest, DescribePrivateZoneListRequest, DescribeDashboardResponse, ModifyForwardRuleResponse, SubscribePrivateZoneServiceResponse, ModifyRecordsStatusRequest, DescribeEndPointRegionResponse, CreateEndPointAndEndPointServiceRequest, ModifyPrivateZoneRecordRequest, DescribePrivateDNSAccountListRequest, CreateEndPointAndEndPointServiceResponse, DescribePrivateZoneRecordListRequest, DescribeForwardRuleListRequest, ModifyRecordsStatusResponse, DeleteSpecifyPrivateZoneVpcResponse, DeleteEndPointResponse, DeleteEndPointRequest, CreatePrivateZoneRequest, ModifyForwardRuleRequest, DescribePrivateZoneResponse, DescribeRequestDataRequest, DescribeDashboardRequest, CreateEndPointResponse, DescribeForwardRuleRequest, DeletePrivateZoneResponse, DescribePrivateZoneListResponse, ModifyPrivateZoneVpcResponse, DescribeQuotaUsageResponse, DescribeAuditLogResponse, CreateForwardRuleRequest, AddSpecifyPrivateZoneVpcResponse, DescribeEndPointListResponse, CreatePrivateZoneResponse, CreatePrivateZoneRecordResponse, DescribeForwardRuleListResponse, DescribeAuditLogRequest, DescribeQuotaUsageRequest, DeletePrivateZoneRequest, DeletePrivateZoneRecordRequest, DescribePrivateZoneServiceResponse, DeleteForwardRuleResponse, DeletePrivateZoneRecordResponse, DeletePrivateDNSAccountResponse, QueryAsyncBindVpcStatusRequest } from "./privatedns_models";
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
     * 删除终端节点
     */
    DeleteEndPoint(req: DeleteEndPointRequest, cb?: (error: string, rep: DeleteEndPointResponse) => void): Promise<DeleteEndPointResponse>;
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
     * 获取终端节点列表
     */
    DescribeEndPointList(req: DescribeEndPointListRequest, cb?: (error: string, rep: DescribeEndPointListResponse) => void): Promise<DescribeEndPointListResponse>;
    /**
     * 创建私有域
     */
    CreatePrivateZone(req: CreatePrivateZoneRequest, cb?: (error: string, rep: CreatePrivateZoneResponse) => void): Promise<CreatePrivateZoneResponse>;
    /**
     * 获取私有域列表
     */
    DescribePrivateZoneList(req: DescribePrivateZoneListRequest, cb?: (error: string, rep: DescribePrivateZoneListResponse) => void): Promise<DescribePrivateZoneListResponse>;
    /**
     * 创建终端节点
     */
    CreateEndPoint(req: CreateEndPointRequest, cb?: (error: string, rep: CreateEndPointResponse) => void): Promise<CreateEndPointResponse>;
    /**
     * 追加与私有域关联的VPC
     */
    AddSpecifyPrivateZoneVpc(req: AddSpecifyPrivateZoneVpcRequest, cb?: (error: string, rep: AddSpecifyPrivateZoneVpcResponse) => void): Promise<AddSpecifyPrivateZoneVpcResponse>;
    /**
     * 获取私有域记录列表
     */
    DescribePrivateZoneRecordList(req: DescribePrivateZoneRecordListRequest, cb?: (error: string, rep: DescribePrivateZoneRecordListResponse) => void): Promise<DescribePrivateZoneRecordListResponse>;
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
     * 删除转发规则并停止转发
     */
    DeleteForwardRule(req: DeleteForwardRuleRequest, cb?: (error: string, rep: DeleteForwardRuleResponse) => void): Promise<DeleteForwardRuleResponse>;
    /**
     * 开通私有域解析
     */
    SubscribePrivateZoneService(req?: SubscribePrivateZoneServiceRequest, cb?: (error: string, rep: SubscribePrivateZoneServiceResponse) => void): Promise<SubscribePrivateZoneServiceResponse>;
    /**
     * 获取私有域解析概览
     */
    DescribeDashboard(req?: DescribeDashboardRequest, cb?: (error: string, rep: DescribeDashboardResponse) => void): Promise<DescribeDashboardResponse>;
    /**
     * 修改转发规则
     */
    ModifyForwardRule(req: ModifyForwardRuleRequest, cb?: (error: string, rep: ModifyForwardRuleResponse) => void): Promise<ModifyForwardRuleResponse>;
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
     * 同时创建终端节点和终端节点服务
     */
    CreateEndPointAndEndPointService(req: CreateEndPointAndEndPointServiceRequest, cb?: (error: string, rep: CreateEndPointAndEndPointServiceResponse) => void): Promise<CreateEndPointAndEndPointServiceResponse>;
    /**
     * 修改解析记录状态
     */
    ModifyRecordsStatus(req: ModifyRecordsStatusRequest, cb?: (error: string, rep: ModifyRecordsStatusResponse) => void): Promise<ModifyRecordsStatusResponse>;
    /**
     * 删除与私有域关联的VPC
     */
    DeleteSpecifyPrivateZoneVpc(req: DeleteSpecifyPrivateZoneVpcRequest, cb?: (error: string, rep: DeleteSpecifyPrivateZoneVpcResponse) => void): Promise<DeleteSpecifyPrivateZoneVpcResponse>;
    /**
     * 查询转发规则
     */
    DescribeForwardRule(req: DescribeForwardRuleRequest, cb?: (error: string, rep: DescribeForwardRuleResponse) => void): Promise<DescribeForwardRuleResponse>;
    /**
     * 创建自定义转发规则
     */
    CreateForwardRule(req: CreateForwardRuleRequest, cb?: (error: string, rep: CreateForwardRuleResponse) => void): Promise<CreateForwardRuleResponse>;
    /**
     * 查询私有域解析开通状态
     */
    DescribePrivateZoneService(req?: DescribePrivateZoneServiceRequest, cb?: (error: string, rep: DescribePrivateZoneServiceResponse) => void): Promise<DescribePrivateZoneServiceResponse>;
    /**
     * 查询终端节点已经启用了的地域
     */
    DescribeEndPointRegion(req?: DescribeEndPointRegionRequest, cb?: (error: string, rep: DescribeEndPointRegionResponse) => void): Promise<DescribeEndPointRegionResponse>;
    /**
     * 查询转发规则列表
     */
    DescribeForwardRuleList(req: DescribeForwardRuleListRequest, cb?: (error: string, rep: DescribeForwardRuleListResponse) => void): Promise<DescribeForwardRuleListResponse>;
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
