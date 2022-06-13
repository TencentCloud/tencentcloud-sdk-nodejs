import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyDefaultCertificateRequest, DescribeZoneDetailsResponse, DescribeOriginGroupResponse, DeleteApplicationProxyResponse, DescribeOriginGroupDetailRequest, ModifyLoadBalancingStatusResponse, DescribePrefetchTasksResponse, DeleteApplicationProxyRequest, CreateCustomErrorPageResponse, ReclaimZoneResponse, DescribeZoneSettingRequest, ModifyZoneStatusRequest, ModifyDnsRecordRequest, ModifySecurityPolicyRequest, CreateApplicationProxyRulesRequest, ModifyDnssecRequest, ModifyZoneSettingRequest, CreateApplicationProxyResponse, ImportDnsRecordsRequest, ModifyOriginGroupResponse, ModifyZoneStatusResponse, DescribeSecurityPolicyManagedRulesRequest, DescribeSecurityPortraitRulesRequest, ModifySecurityPolicyResponse, ModifyDDoSPolicyHostRequest, DescribeHostsSettingResponse, DescribeSecurityPolicyRegionsResponse, ModifyZoneResponse, ModifyZoneRequest, DeleteZoneResponse, ModifyHostsCertificateRequest, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, DeleteOriginGroupRequest, ModifyHostsCertificateResponse, CreateDnsRecordRequest, DescribeDnsDataResponse, DescribeSecurityPolicyManagedRulesIdRequest, ModifyApplicationProxyStatusRequest, DescribeIdentificationRequest, ModifyLoadBalancingStatusRequest, DescribeCnameStatusResponse, DeleteDnsRecordsResponse, DescribeLoadBalancingRequest, ModifyApplicationProxyRuleRequest, ModifyZoneSettingResponse, DescribeZonesResponse, ScanDnsRecordsResponse, CreateDnsRecordResponse, DescribeZonesRequest, CreatePrefetchTaskRequest, DeleteApplicationProxyRuleRequest, DescribeApplicationProxyResponse, CreateLoadBalancingResponse, IdentifyZoneResponse, ModifyLoadBalancingRequest, CreateLoadBalancingRequest, DescribeDnssecRequest, DescribeLoadBalancingDetailResponse, DescribeBotManagedRulesResponse, ModifyDDoSPolicyResponse, DescribeDnsRecordsRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, DescribeSecurityPolicyRequest, ModifyApplicationProxyRuleResponse, DescribeSecurityPolicyManagedRulesIdResponse, CreateZoneRequest, DescribeSecurityPolicyListResponse, DescribePurgeTasksResponse, CheckCertificateResponse, DownloadL7LogsRequest, DeleteLoadBalancingResponse, CheckCertificateRequest, DescribeSecurityPortraitRulesResponse, CreateApplicationProxyRuleRequest, DescribePrefetchTasksRequest, ModifyApplicationProxyRequest, ModifyApplicationProxyStatusResponse, DescribeDnsRecordsResponse, ModifyZoneCnameSpeedUpRequest, DescribeHostsCertificateRequest, DescribeSecurityPolicyManagedRulesResponse, DescribeApplicationProxyRequest, ModifyDDoSPolicyHostResponse, ModifyApplicationProxyRuleStatusRequest, CreateApplicationProxyRuleResponse, ModifyDnsRecordResponse, CreateApplicationProxyRequest, ModifyLoadBalancingResponse, DescribeCnameStatusRequest, CreateCustomErrorPageRequest, DescribeDnssecResponse, CreateZoneResponse, DeleteLoadBalancingRequest, ModifyApplicationProxyResponse, DescribeDDoSPolicyResponse, ModifyOriginGroupRequest, ModifyApplicationProxyRuleStatusResponse, DescribeSecurityPolicyListRequest, DescribeApplicationProxyDetailRequest, DeleteOriginGroupResponse, DescribeZoneDetailsRequest, DescribeDDoSPolicyRequest, DescribeDefaultCertificatesResponse, CreateOriginGroupResponse, DescribeSecurityPolicyResponse, DescribeSecurityPolicyRegionsRequest, ReclaimZoneRequest, DeleteZoneRequest, ModifyDefaultCertificateResponse, DescribeHostsCertificateResponse, DescribeZoneSettingResponse, DescribePurgeTasksRequest, IdentifyZoneRequest, ModifyDDoSPolicyRequest, ModifyZoneCnameSpeedUpResponse, DeleteDnsRecordsRequest, DescribeZoneDDoSPolicyResponse, DescribeDnsDataRequest, CreatePurgeTaskRequest, DescribeApplicationProxyDetailResponse, DownloadL7LogsResponse, CreateOriginGroupRequest, DescribeHostsSettingRequest, DescribeZoneDDoSPolicyRequest, CreateApplicationProxyRulesResponse, DescribeIdentificationResponse, DescribeLoadBalancingResponse, ModifyDnssecResponse, ScanDnsRecordsRequest, ImportDnsRecordsResponse, DescribeLoadBalancingDetailRequest, DescribeOriginGroupRequest, DescribeOriginGroupDetailResponse, DescribeBotManagedRulesRequest } from "./teo_models";
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
     * 源站组删除
     */
    DeleteOriginGroup(req: DeleteOriginGroupRequest, cb?: (error: string, rep: DeleteOriginGroupResponse) => void): Promise<DeleteOriginGroupResponse>;
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
     * 源站组创建
     */
    CreateOriginGroup(req: CreateOriginGroupRequest, cb?: (error: string, rep: CreateOriginGroupResponse) => void): Promise<CreateOriginGroupResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 分页查询门神规则
     */
    DescribeSecurityPolicyManagedRules(req: DescribeSecurityPolicyManagedRulesRequest, cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesResponse) => void): Promise<DescribeSecurityPolicyManagedRulesResponse>;
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
     */
    ReclaimZone(req: ReclaimZoneRequest, cb?: (error: string, rep: ReclaimZoneResponse) => void): Promise<ReclaimZoneResponse>;
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
     * 用该站点信息
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 查询所有DDoS防护分区
     */
    DescribeZoneDDoSPolicy(req: DescribeZoneDDoSPolicyRequest, cb?: (error: string, rep: DescribeZoneDDoSPolicyResponse) => void): Promise<DescribeZoneDDoSPolicyResponse>;
    /**
     * 修改负载均衡
     */
    ModifyLoadBalancing(req: ModifyLoadBalancingRequest, cb?: (error: string, rep: ModifyLoadBalancingResponse) => void): Promise<ModifyLoadBalancingResponse>;
    /**
     * 创建负载均衡
     */
    CreateLoadBalancing(req: CreateLoadBalancingRequest, cb?: (error: string, rep: CreateLoadBalancingResponse) => void): Promise<CreateLoadBalancingResponse>;
    /**
     * 域名DDoS高可用开关
     */
    ModifyDDoSPolicyHost(req: ModifyDDoSPolicyHostRequest, cb?: (error: string, rep: ModifyDDoSPolicyHostResponse) => void): Promise<ModifyDDoSPolicyHostResponse>;
    /**
     * 创建自定义规则的自定义页
     */
    CreateCustomErrorPage(req: CreateCustomErrorPageRequest, cb?: (error: string, rep: CreateCustomErrorPageResponse) => void): Promise<CreateCustomErrorPageResponse>;
    /**
     * 用于验证站点所有权
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 修改DDoS防护分区配置
     */
    ModifyDDoSPolicy(req: ModifyDDoSPolicyRequest, cb?: (error: string, rep: ModifyDDoSPolicyResponse) => void): Promise<ModifyDDoSPolicyResponse>;
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
     * 获取源站组详细信息
     */
    DescribeOriginGroupDetail(req: DescribeOriginGroupDetailRequest, cb?: (error: string, rep: DescribeOriginGroupDetailResponse) => void): Promise<DescribeOriginGroupDetailResponse>;
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
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 查询Bot用户画像规则
     */
    DescribeSecurityPortraitRules(req: DescribeSecurityPortraitRulesRequest, cb?: (error: string, rep: DescribeSecurityPortraitRulesResponse) => void): Promise<DescribeSecurityPortraitRulesResponse>;
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
     * 用户查询用户站点信息列表，支持分页
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
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
     * 源站组修改
     */
    ModifyOriginGroup(req: ModifyOriginGroupRequest, cb?: (error: string, rep: ModifyOriginGroupResponse) => void): Promise<ModifyOriginGroupResponse>;
    /**
     * 查询DDoS防护配置详情
     */
    DescribeDDoSPolicy(req: DescribeDDoSPolicyRequest, cb?: (error: string, rep: DescribeDDoSPolicyResponse) => void): Promise<DescribeDDoSPolicyResponse>;
    /**
     * 修改负载均衡状态
     */
    ModifyLoadBalancingStatus(req: ModifyLoadBalancingStatusRequest, cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void): Promise<ModifyLoadBalancingStatusResponse>;
    /**
     * 批量删除 DNS 记录
     */
    DeleteDnsRecords(req: DeleteDnsRecordsRequest, cb?: (error: string, rep: DeleteDnsRecordsResponse) => void): Promise<DeleteDnsRecordsResponse>;
    /**
     * 修改Web&Bot安全配置
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 修改默认证书状态
     */
    ModifyDefaultCertificate(req: ModifyDefaultCertificateRequest, cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void): Promise<ModifyDefaultCertificateResponse>;
    /**
     * 查询安全防护配置详情
     */
    DescribeSecurityPolicy(req: DescribeSecurityPolicyRequest, cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void): Promise<DescribeSecurityPolicyResponse>;
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
     * 规则id查询门神规则详情
     */
    DescribeSecurityPolicyManagedRulesId(req: DescribeSecurityPolicyManagedRulesIdRequest, cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesIdResponse) => void): Promise<DescribeSecurityPolicyManagedRulesIdResponse>;
    /**
     * 分页查询Bot托管规则
     */
    DescribeBotManagedRules(req: DescribeBotManagedRulesRequest, cb?: (error: string, rep: DescribeBotManagedRulesResponse) => void): Promise<DescribeBotManagedRulesResponse>;
    /**
     * 查询域名 CNAME 状态
     */
    DescribeCnameStatus(req: DescribeCnameStatusRequest, cb?: (error: string, rep: DescribeCnameStatusResponse) => void): Promise<DescribeCnameStatusResponse>;
    /**
     * 查询所有地域信息
     */
    DescribeSecurityPolicyRegions(req?: DescribeSecurityPolicyRegionsRequest, cb?: (error: string, rep: DescribeSecurityPolicyRegionsResponse) => void): Promise<DescribeSecurityPolicyRegionsResponse>;
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
     * 获取源站组信息列表
     */
    DescribeOriginGroup(req: DescribeOriginGroupRequest, cb?: (error: string, rep: DescribeOriginGroupResponse) => void): Promise<DescribeOriginGroupResponse>;
    /**
     * 修改应用代理的状态
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 查询全部安全实例
     */
    DescribeSecurityPolicyList(req: DescribeSecurityPolicyListRequest, cb?: (error: string, rep: DescribeSecurityPolicyListResponse) => void): Promise<DescribeSecurityPolicyListResponse>;
    /**
     * 修改 DNSSEC 状态
     */
    ModifyDnssec(req: ModifyDnssecRequest, cb?: (error: string, rep: ModifyDnssecResponse) => void): Promise<ModifyDnssecResponse>;
    /**
     * 获取应用代理列表
     */
    DescribeApplicationProxy(req: DescribeApplicationProxyRequest, cb?: (error: string, rep: DescribeApplicationProxyResponse) => void): Promise<DescribeApplicationProxyResponse>;
}
