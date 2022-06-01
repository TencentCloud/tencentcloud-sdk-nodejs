import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyDefaultCertificateRequest, DescribeZoneDetailsResponse, DeleteApplicationProxyResponse, ScanDnsRecordsResponse, ModifyLoadBalancingStatusResponse, DescribePrefetchTasksResponse, DeleteApplicationProxyRequest, DescribeZoneSettingRequest, ModifyZoneStatusRequest, ModifyDnsRecordRequest, CreateApplicationProxyRulesRequest, ModifyDnssecRequest, ModifyZoneSettingRequest, DescribeApplicationProxyDetailRequest, CreateApplicationProxyResponse, ImportDnsRecordsRequest, DescribeHostsSettingResponse, ModifyZoneResponse, ModifyZoneRequest, DeleteZoneResponse, ReclaimZoneResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, DescribeIdentificationRequest, CreateDnsRecordRequest, DescribeDnsDataResponse, ModifyApplicationProxyStatusRequest, ModifyLoadBalancingStatusRequest, DescribeCnameStatusResponse, DescribeLoadBalancingRequest, ModifyApplicationProxyRuleRequest, ModifyZoneSettingResponse, DownloadL7LogsResponse, CreateDnsRecordResponse, DescribeZonesRequest, CreatePrefetchTaskRequest, DeleteApplicationProxyRuleRequest, DescribeApplicationProxyResponse, CreateLoadBalancingResponse, IdentifyZoneResponse, ModifyLoadBalancingRequest, CreateLoadBalancingRequest, DescribeDnssecRequest, DescribeLoadBalancingDetailResponse, DescribePrefetchTasksRequest, DescribeDnsRecordsRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, ModifyApplicationProxyRuleResponse, CreateZoneRequest, CheckCertificateResponse, DescribePurgeTasksResponse, DownloadL7LogsRequest, DeleteLoadBalancingResponse, CheckCertificateRequest, CreateApplicationProxyRuleRequest, ModifyApplicationProxyRequest, ModifyApplicationProxyStatusResponse, DescribeDnsRecordsResponse, DescribeApplicationProxyDetailResponse, ModifyZoneCnameSpeedUpRequest, DescribeHostsCertificateRequest, ModifyHostsCertificateResponse, ModifyLoadBalancingResponse, CreateApplicationProxyRuleResponse, ModifyDnsRecordResponse, CreateApplicationProxyRequest, DescribeCnameStatusRequest, DescribeDnssecResponse, CreateZoneResponse, DeleteLoadBalancingRequest, ModifyApplicationProxyResponse, ModifyApplicationProxyRuleStatusResponse, DescribeZonesResponse, DescribeZoneDetailsRequest, DescribeDefaultCertificatesResponse, DescribeApplicationProxyRequest, ModifyApplicationProxyRuleStatusRequest, ReclaimZoneRequest, DeleteZoneRequest, ModifyDefaultCertificateResponse, DescribeHostsCertificateResponse, DescribeZoneSettingResponse, DescribePurgeTasksRequest, IdentifyZoneRequest, ModifyZoneCnameSpeedUpResponse, DeleteDnsRecordsRequest, ModifyHostsCertificateRequest, ModifyZoneStatusResponse, DescribeDnsDataRequest, CreatePurgeTaskRequest, DeleteDnsRecordsResponse, DescribeHostsSettingRequest, CreateApplicationProxyRulesResponse, DescribeIdentificationResponse, DescribeLoadBalancingResponse, ModifyDnssecResponse, ScanDnsRecordsRequest, ImportDnsRecordsResponse, DescribeLoadBalancingDetailRequest } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建 DNS 记录
     */
    CreateDnsRecord(req: CreateDnsRecordRequest, cb?: (error: string, rep: CreateDnsRecordResponse) => void): Promise<CreateDnsRecordResponse>;
    /**
     * 查询验证结果
     */
    DescribeIdentification(req: DescribeIdentificationRequest, cb?: (error: string, rep: DescribeIdentificationResponse) => void): Promise<DescribeIdentificationResponse>;
    /**
     * 修改应用代理规则
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 删除应用代理
     */
    DeleteApplicationProxy(req: DeleteApplicationProxyRequest, cb?: (error: string, rep: DeleteApplicationProxyResponse) => void): Promise<DeleteApplicationProxyResponse>;
    /**
     * 批量创建应用代理规则
     */
    CreateApplicationProxyRules(req: CreateApplicationProxyRulesRequest, cb?: (error: string, rep: CreateApplicationProxyRulesResponse) => void): Promise<CreateApplicationProxyRulesResponse>;
    /**
     * 创建清除缓存任务
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 用于修改域名证书
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 开启，关闭 CNAME 加速
     */
    ModifyZoneCnameSpeedUp(req: ModifyZoneCnameSpeedUpRequest, cb?: (error: string, rep: ModifyZoneCnameSpeedUpResponse) => void): Promise<ModifyZoneCnameSpeedUpResponse>;
    /**
     * 修改 DNS 记录
     */
    ModifyDnsRecord(req: ModifyDnsRecordRequest, cb?: (error: string, rep: ModifyDnsRecordResponse) => void): Promise<ModifyDnsRecordResponse>;
    /**
     * 修改应用代理
     */
    ModifyApplicationProxy(req: ModifyApplicationProxyRequest, cb?: (error: string, rep: ModifyApplicationProxyResponse) => void): Promise<ModifyApplicationProxyResponse>;
    /**
     * 用于用户接入新的站点
     */
    CreateZone(req: CreateZoneRequest, cb?: (error: string, rep: CreateZoneResponse) => void): Promise<CreateZoneResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 修改负载均衡
     */
    ModifyLoadBalancing(req: ModifyLoadBalancingRequest, cb?: (error: string, rep: ModifyLoadBalancingResponse) => void): Promise<ModifyLoadBalancingResponse>;
    /**
     * 创建负载均衡
     */
    CreateLoadBalancing(req: CreateLoadBalancingRequest, cb?: (error: string, rep: CreateLoadBalancingResponse) => void): Promise<CreateLoadBalancingResponse>;
    /**
     * 用于验证站点所有权
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 获取DNS请求数统计曲线
     */
    DescribeDnsData(req: DescribeDnsDataRequest, cb?: (error: string, rep: DescribeDnsDataResponse) => void): Promise<DescribeDnsDataResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 获取负载均衡列表
     */
    DescribeLoadBalancing(req: DescribeLoadBalancingRequest, cb?: (error: string, rep: DescribeLoadBalancingResponse) => void): Promise<DescribeLoadBalancingResponse>;
    /**
     * 查询域名证书列表，支持搜索、分页、排序、过滤。
     */
    DescribeHostsCertificate(req: DescribeHostsCertificateRequest, cb?: (error: string, rep: DescribeHostsCertificateResponse) => void): Promise<DescribeHostsCertificateResponse>;
    /**
     * 创建应用代理规则
     */
    CreateApplicationProxyRule(req: CreateApplicationProxyRuleRequest, cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void): Promise<CreateApplicationProxyRuleResponse>;
    /**
     * 获取应用代理详细信息
     */
    DescribeApplicationProxyDetail(req: DescribeApplicationProxyDetailRequest, cb?: (error: string, rep: DescribeApplicationProxyDetailResponse) => void): Promise<DescribeApplicationProxyDetailResponse>;
    /**
     * 删除负载均衡
     */
    DeleteLoadBalancing(req: DeleteLoadBalancingRequest, cb?: (error: string, rep: DeleteLoadBalancingResponse) => void): Promise<DeleteLoadBalancingResponse>;
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
     */
    ReclaimZone(req: ReclaimZoneRequest, cb?: (error: string, rep: ReclaimZoneResponse) => void): Promise<ReclaimZoneResponse>;
    /**
     * 删除站点
     */
    DeleteZone(req: DeleteZoneRequest, cb?: (error: string, rep: DeleteZoneResponse) => void): Promise<DeleteZoneResponse>;
    /**
     * 用于开启，关闭站点
     */
    ModifyZoneStatus(req: ModifyZoneStatusRequest, cb?: (error: string, rep: ModifyZoneStatusResponse) => void): Promise<ModifyZoneStatusResponse>;
    /**
     * 查询七层离线日志
     */
    DownloadL7Logs(req: DownloadL7LogsRequest, cb?: (error: string, rep: DownloadL7LogsResponse) => void): Promise<DownloadL7LogsResponse>;
    /**
     * 修改负载均衡状态
     */
    ModifyLoadBalancingStatus(req: ModifyLoadBalancingStatusRequest, cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void): Promise<ModifyLoadBalancingStatusResponse>;
    /**
     * 删除应用代理规则
     */
    DeleteApplicationProxyRule(req: DeleteApplicationProxyRuleRequest, cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void): Promise<DeleteApplicationProxyRuleResponse>;
    /**
     * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
     */
    DescribeDnsRecords(req: DescribeDnsRecordsRequest, cb?: (error: string, rep: DescribeDnsRecordsResponse) => void): Promise<DescribeDnsRecordsResponse>;
    /**
     * 扫描站点历史解析记录
     */
    ScanDnsRecords(req: ScanDnsRecordsRequest, cb?: (error: string, rep: ScanDnsRecordsResponse) => void): Promise<ScanDnsRecordsResponse>;
    /**
     * 获取应用代理列表
     */
    DescribeApplicationProxy(req: DescribeApplicationProxyRequest, cb?: (error: string, rep: DescribeApplicationProxyResponse) => void): Promise<DescribeApplicationProxyResponse>;
    /**
     * 批量删除 DNS 记录
     */
    DeleteDnsRecords(req: DeleteDnsRecordsRequest, cb?: (error: string, rep: DeleteDnsRecordsResponse) => void): Promise<DeleteDnsRecordsResponse>;
    /**
     * 用该站点信息
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 修改默认证书状态
     */
    ModifyDefaultCertificate(req: ModifyDefaultCertificateRequest, cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void): Promise<ModifyDefaultCertificateResponse>;
    /**
     * 导入 DNS 记录
     */
    ImportDnsRecords(req: ImportDnsRecordsRequest, cb?: (error: string, rep: ImportDnsRecordsResponse) => void): Promise<ImportDnsRecordsResponse>;
    /**
     * 获取负载均衡详细信息
     */
    DescribeLoadBalancingDetail(req: DescribeLoadBalancingDetailRequest, cb?: (error: string, rep: DescribeLoadBalancingDetailResponse) => void): Promise<DescribeLoadBalancingDetailResponse>;
    /**
     * 校验证书
     */
    CheckCertificate(req: CheckCertificateRequest, cb?: (error: string, rep: CheckCertificateResponse) => void): Promise<CheckCertificateResponse>;
    /**
     * 查询域名 CNAME 状态
     */
    DescribeCnameStatus(req: DescribeCnameStatusRequest, cb?: (error: string, rep: DescribeCnameStatusResponse) => void): Promise<DescribeCnameStatusResponse>;
    /**
     * 用户查询用户站点信息列表，支持分页
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 用于查询 DNSSEC 相关信息
     */
    DescribeDnssec(req: DescribeDnssecRequest, cb?: (error: string, rep: DescribeDnssecResponse) => void): Promise<DescribeDnssecResponse>;
    /**
     * 根据站点 ID 查询站点的详细信息
     */
    DescribeZoneDetails(req: DescribeZoneDetailsRequest, cb?: (error: string, rep: DescribeZoneDetailsResponse) => void): Promise<DescribeZoneDetailsResponse>;
    /**
     * 创建应用代理
     */
    CreateApplicationProxy(req: CreateApplicationProxyRequest, cb?: (error: string, rep: CreateApplicationProxyResponse) => void): Promise<CreateApplicationProxyResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 修改应用代理的状态
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 修改 DNSSEC 状态
     */
    ModifyDnssec(req: ModifyDnssecRequest, cb?: (error: string, rep: ModifyDnssecResponse) => void): Promise<ModifyDnssecResponse>;
}
