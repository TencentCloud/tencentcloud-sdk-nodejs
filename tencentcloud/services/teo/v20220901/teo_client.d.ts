import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreatePlanForZoneResponse, DownloadL7LogsRequest, DeleteRulesRequest, CheckCnameStatusResponse, ModifyZoneResponse, DescribeOriginGroupResponse, DescribeTopL7CacheDataRequest, DeleteApplicationProxyResponse, DescribeZonesRequest, VerifyOwnershipRequest, DeleteSecurityIPGroupResponse, ModifyRuleRequest, DescribePrefetchTasksResponse, DeleteApplicationProxyRequest, DescribeDDoSAttackDataResponse, DescribeZoneSettingRequest, ModifyZoneStatusRequest, DescribeIdentificationsResponse, ModifySecurityPolicyRequest, ModifyApplicationProxyRuleStatusResponse, ModifyZoneSettingRequest, CreateApplicationProxyResponse, DeleteAccelerationDomainsRequest, ModifyAliasDomainRequest, DescribeAvailablePlansRequest, ModifySecurityPolicyResponse, DescribeHostsSettingResponse, ModifyZoneStatusResponse, ModifyZoneRequest, ModifyApplicationProxyStatusResponse, DeleteZoneResponse, CreateRuleResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, DescribeRulesResponse, DescribeOriginProtectionResponse, BindZoneToPlanResponse, DescribeAliasDomainsRequest, ModifyHostsCertificateRequest, ModifyApplicationProxyRequest, ModifyAccelerationDomainStatusesResponse, DescribeRulesSettingResponse, DescribeDDoSAttackTopDataRequest, ModifyAccelerationDomainRequest, DescribeRulesRequest, DescribeContentQuotaResponse, ModifyZoneSettingResponse, DeleteSecurityIPGroupRequest, CreateAliasDomainRequest, CreateAliasDomainResponse, DescribeOriginProtectionRequest, CreatePrefetchTaskRequest, DeleteApplicationProxyRuleRequest, DescribeApplicationProxiesResponse, DescribeTopL7AnalysisDataRequest, DescribeAccelerationDomainsResponse, DescribeTopL7CacheDataResponse, DescribeOverviewL7DataRequest, IdentifyZoneResponse, DescribePrefetchTasksRequest, ModifyAliasDomainStatusResponse, DescribeTimingL7AnalysisDataRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, DescribeAliasDomainsResponse, CreateZoneRequest, DescribeTimingL7CacheDataRequest, ModifyRuleResponse, VerifyOwnershipResponse, DescribeDDoSAttackEventResponse, CreateApplicationProxyRuleRequest, DownloadL4LogsRequest, DescribeDDoSAttackDataRequest, DescribePurgeTasksRequest, DescribeTimingL7AnalysisDataResponse, DescribeApplicationProxiesRequest, DescribeContentQuotaRequest, DescribeOverviewL7DataResponse, CreateRuleRequest, CreateApplicationProxyRuleResponse, CreatePlanForZoneRequest, ModifyAliasDomainStatusRequest, CreateApplicationProxyRequest, CreateAccelerationDomainResponse, DescribeTimingL4DataResponse, CreateZoneResponse, ModifyApplicationProxyResponse, ModifySecurityIPGroupResponse, DownloadL4LogsResponse, DescribeTimingL7CacheDataResponse, ModifyApplicationProxyStatusRequest, DescribeZonesResponse, DescribeIdentificationsRequest, DescribeDefaultCertificatesResponse, ModifyHostsCertificateResponse, ModifyApplicationProxyRuleStatusRequest, BindZoneToPlanRequest, CreateAccelerationDomainRequest, DeleteZoneRequest, DescribeOriginGroupRequest, ModifyApplicationProxyRuleResponse, DescribeZoneSettingResponse, CreateSecurityIPGroupRequest, DeleteRulesResponse, IdentifyZoneRequest, ModifyApplicationProxyRuleRequest, ModifyAccelerationDomainResponse, DescribeRulesSettingRequest, ModifyAliasDomainResponse, CheckCnameStatusRequest, DeleteAliasDomainRequest, DeleteAccelerationDomainsResponse, DescribeTopL7AnalysisDataResponse, CreatePurgeTaskRequest, DownloadL7LogsResponse, DescribeTimingL4DataRequest, DescribeHostsSettingRequest, CreateSecurityIPGroupResponse, CreateSharedCNAMEResponse, DescribePurgeTasksResponse, DescribeAvailablePlansResponse, DescribeDDoSAttackEventRequest, ModifySecurityIPGroupRequest, CreateSharedCNAMERequest, DescribeAccelerationDomainsRequest, DescribeDDoSAttackTopDataResponse, DeleteAliasDomainResponse, ModifyAccelerationDomainStatusesRequest } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改应用代理规则
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 创建共享 CNAME
     */
    CreateSharedCNAME(req: CreateSharedCNAMERequest, cb?: (error: string, rep: CreateSharedCNAMEResponse) => void): Promise<CreateSharedCNAMEResponse>;
    /**
     * 删除站点。
     */
    DeleteZone(req: DeleteZoneRequest, cb?: (error: string, rep: DeleteZoneResponse) => void): Promise<DeleteZoneResponse>;
    /**
     * 当源站资源更新，但节点缓存 TTL 未过期时，用户仍会访问到旧的资源，此时可以通过该接口实现节点资源更新。触发更新的方法有以下两种：<li>直接删除：不做任何校验，直接删除节点缓存，用户请求时触发回源拉取；</li><li>标记过期：将节点资源置为过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>

清除缓存任务详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 创建安全 IP 组
     */
    CreateSecurityIPGroup(req: CreateSecurityIPGroupRequest, cb?: (error: string, rep: CreateSecurityIPGroupResponse) => void): Promise<CreateSecurityIPGroupResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    DescribeTimingL7CacheData(req: DescribeTimingL7CacheDataRequest, cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void): Promise<DescribeTimingL7CacheDataResponse>;
    /**
     * 批量删除加速域名
     */
    DeleteAccelerationDomains(req: DeleteAccelerationDomainsRequest, cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void): Promise<DeleteAccelerationDomainsResponse>;
    /**
     * 完成域名创建之后，您可以为域名配置自有证书，也可以使用 EdgeOne 为您提供的 [免费证书](https://cloud.tencent.com/document/product/1552/90437)。
如果您需要配置自有证书，请先将证书上传至 [SSL证书控制台](https://console.cloud.tencent.com/certoverview)，然后在本接口中传入对应的证书 ID。详情参考 [部署自有证书至 EdgeOne 域名
](https://cloud.tencent.com/document/product/1552/88874)。
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 规则引擎创建规则。
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 为未购买套餐的站点购买套餐
     */
    CreatePlanForZone(req: CreatePlanForZoneRequest, cb?: (error: string, rep: CreatePlanForZoneResponse) => void): Promise<CreatePlanForZoneResponse>;
    /**
     * 查询内容管理接口配额
     */
    DescribeContentQuota(req: DescribeContentQuotaRequest, cb?: (error: string, rep: DescribeContentQuotaResponse) => void): Promise<DescribeContentQuotaResponse>;
    /**
     * 修改应用代理
     */
    ModifyApplicationProxy(req: ModifyApplicationProxyRequest, cb?: (error: string, rep: ModifyApplicationProxyResponse) => void): Promise<ModifyApplicationProxyResponse>;
    /**
     * 查询站点的验证信息。
     */
    DescribeIdentifications(req: DescribeIdentificationsRequest, cb?: (error: string, rep: DescribeIdentificationsResponse) => void): Promise<DescribeIdentificationsResponse>;
    /**
     * EdgeOne 为您提供 CNAME、NS 和无域名接入三种接入方式，您需要先通过此接口完成站点创建。CNAME 和 NS 接入站点的场景可参考 [从零开始快速接入 EdgeOne](https://cloud.tencent.com/document/product/1552/87601); 无域名接入的场景可参考 [快速启用四层代理服务](https://cloud.tencent.com/document/product/1552/96051)。

> 建议您在账号下已存在套餐时调用本接口创建站点，请在入参时传入 PlanId ，直接将站点绑定至该套餐；不传入 PlanId 时，创建出来的站点会处于未激活状态，无法正常服务，您需要通过 [BindZoneToPlan](https://cloud.tencent.com/document/product/1552/83042) 完成套餐绑定之后，站点才可正常提供服务 。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
    CreateZone(req: CreateZoneRequest, cb?: (error: string, rep: CreateZoneResponse) => void): Promise<CreateZoneResponse>;
    /**
     * 修改站点信息。
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 查询当前账户可用套餐信息列表
     */
    DescribeAvailablePlans(req?: DescribeAvailablePlansRequest, cb?: (error: string, rep: DescribeAvailablePlansResponse) => void): Promise<DescribeAvailablePlansResponse>;
    /**
     * 用于验证站点所有权。
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询源站防护信息
     */
    DescribeOriginProtection(req: DescribeOriginProtectionRequest, cb?: (error: string, rep: DescribeOriginProtectionResponse) => void): Promise<DescribeOriginProtectionResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 在 CNAME 接入模式下，您需要对站点或者域名的归属权进行验证，可以通过本接口触发验证。若站点通过归属权验证后，后续添加域名无需再验证。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。

在 NS 接入模式下，您也可以通过本接口来查询 NS 服务器是否切换成功，详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
     */
    VerifyOwnership(req: VerifyOwnershipRequest, cb?: (error: string, rep: VerifyOwnershipResponse) => void): Promise<VerifyOwnershipResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    DescribeRulesSetting(req?: DescribeRulesSettingRequest, cb?: (error: string, rep: DescribeRulesSettingResponse) => void): Promise<DescribeRulesSettingResponse>;
    /**
     * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
     */
    DescribeAccelerationDomains(req: DescribeAccelerationDomainsRequest, cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void): Promise<DescribeAccelerationDomainsResponse>;
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    DeleteSecurityIPGroup(req: DeleteSecurityIPGroupRequest, cb?: (error: string, rep: DeleteSecurityIPGroupResponse) => void): Promise<DeleteSecurityIPGroupResponse>;
    /**
     * 创建应用代理规则
     */
    CreateApplicationProxyRule(req: CreateApplicationProxyRuleRequest, cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void): Promise<CreateApplicationProxyRuleResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 该接口用于查询您有权限的站点信息。可根据不同查询条件筛选站点。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    DescribeDDoSAttackTopData(req: DescribeDDoSAttackTopDataRequest, cb?: (error: string, rep: DescribeDDoSAttackTopDataResponse) => void): Promise<DescribeDDoSAttackTopDataResponse>;
    /**
     * 删除应用代理
     */
    DeleteApplicationProxy(req: DeleteApplicationProxyRequest, cb?: (error: string, rep: DeleteApplicationProxyResponse) => void): Promise<DeleteApplicationProxyResponse>;
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    DescribeTopL7CacheData(req: DescribeTopL7CacheDataRequest, cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void): Promise<DescribeTopL7CacheDataResponse>;
    /**
     * 创建别称域名。
     */
    CreateAliasDomain(req: CreateAliasDomainRequest, cb?: (error: string, rep: CreateAliasDomainResponse) => void): Promise<CreateAliasDomainResponse>;
    /**
     * 用于开启，关闭站点。
     */
    ModifyZoneStatus(req: ModifyZoneStatusRequest, cb?: (error: string, rep: ModifyZoneStatusResponse) => void): Promise<ModifyZoneStatusResponse>;
    /**
     * 修改别称域名状态。
     */
    ModifyAliasDomainStatus(req: ModifyAliasDomainStatusRequest, cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void): Promise<ModifyAliasDomainStatusResponse>;
    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     */
    DownloadL7Logs(req: DownloadL7LogsRequest, cb?: (error: string, rep: DownloadL7LogsResponse) => void): Promise<DownloadL7LogsResponse>;
    /**
     * 删除应用代理规则
     */
    DeleteApplicationProxyRule(req: DeleteApplicationProxyRuleRequest, cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void): Promise<DeleteApplicationProxyRuleResponse>;
    /**
     * 校验域名 CNAME 状态
     */
    CheckCnameStatus(req: CheckCnameStatusRequest, cb?: (error: string, rep: CheckCnameStatusResponse) => void): Promise<CheckCnameStatusResponse>;
    /**
     * 批量删除规则引擎规则。
     */
    DeleteRules(req: DeleteRulesRequest, cb?: (error: string, rep: DeleteRulesResponse) => void): Promise<DeleteRulesResponse>;
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    DescribeTimingL4Data(req: DescribeTimingL4DataRequest, cb?: (error: string, rep: DescribeTimingL4DataResponse) => void): Promise<DescribeTimingL4DataResponse>;
    /**
     * 批量修改加速域名状态
     */
    ModifyAccelerationDomainStatuses(req: ModifyAccelerationDomainStatusesRequest, cb?: (error: string, rep: ModifyAccelerationDomainStatusesResponse) => void): Promise<ModifyAccelerationDomainStatusesResponse>;
    /**
     * 修改规则引擎规则。
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     */
    DescribeTopL7AnalysisData(req: DescribeTopL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void): Promise<DescribeTopL7AnalysisDataResponse>;
    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    DescribeDDoSAttackData(req: DescribeDDoSAttackDataRequest, cb?: (error: string, rep: DescribeDDoSAttackDataResponse) => void): Promise<DescribeDDoSAttackDataResponse>;
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    DescribeDDoSAttackEvent(req: DescribeDDoSAttackEventRequest, cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void): Promise<DescribeDDoSAttackEventResponse>;
    /**
     * 修改Web&Bot安全配置。
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    DownloadL4Logs(req: DownloadL4LogsRequest, cb?: (error: string, rep: DownloadL4LogsResponse) => void): Promise<DownloadL4LogsResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 删除别称域名。
     */
    DeleteAliasDomain(req: DeleteAliasDomainRequest, cb?: (error: string, rep: DeleteAliasDomainResponse) => void): Promise<DeleteAliasDomainResponse>;
    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     */
    DescribeOverviewL7Data(req: DescribeOverviewL7DataRequest, cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void): Promise<DescribeOverviewL7DataResponse>;
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    BindZoneToPlan(req: BindZoneToPlanRequest, cb?: (error: string, rep: BindZoneToPlanResponse) => void): Promise<BindZoneToPlanResponse>;
    /**
     * 在创建完站点之后，您可以通过本接口创建加速域名。

CNAME 模式接入时，若您未完成站点归属权校验，本接口将为您返回域名归属权验证信息，您可以单独对域名进行归属权验证，详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
     */
    CreateAccelerationDomain(req: CreateAccelerationDomainRequest, cb?: (error: string, rep: CreateAccelerationDomainResponse) => void): Promise<CreateAccelerationDomainResponse>;
    /**
     * 查询别称域名信息列表。
     */
    DescribeAliasDomains(req: DescribeAliasDomainsRequest, cb?: (error: string, rep: DescribeAliasDomainsResponse) => void): Promise<DescribeAliasDomainsResponse>;
    /**
     * 修改加速域名信息
     */
    ModifyAccelerationDomain(req: ModifyAccelerationDomainRequest, cb?: (error: string, rep: ModifyAccelerationDomainResponse) => void): Promise<ModifyAccelerationDomainResponse>;
    /**
     * 修改安全 IP 组。
     */
    ModifySecurityIPGroup(req: ModifySecurityIPGroupRequest, cb?: (error: string, rep: ModifySecurityIPGroupResponse) => void): Promise<ModifySecurityIPGroupResponse>;
    /**
     * 查询规则引擎规则。
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 创建应用代理
     */
    CreateApplicationProxy(req: CreateApplicationProxyRequest, cb?: (error: string, rep: CreateApplicationProxyResponse) => void): Promise<CreateApplicationProxyResponse>;
    /**
     * 获取源站组列表
     */
    DescribeOriginGroup(req: DescribeOriginGroupRequest, cb?: (error: string, rep: DescribeOriginGroupResponse) => void): Promise<DescribeOriginGroupResponse>;
    /**
     * 修改应用代理的状态
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     */
    DescribeTimingL7AnalysisData(req: DescribeTimingL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void): Promise<DescribeTimingL7AnalysisDataResponse>;
    /**
     * 修改别称域名。
     */
    ModifyAliasDomain(req: ModifyAliasDomainRequest, cb?: (error: string, rep: ModifyAliasDomainResponse) => void): Promise<ModifyAliasDomainResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 查询应用代理列表。
     */
    DescribeApplicationProxies(req: DescribeApplicationProxiesRequest, cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void): Promise<DescribeApplicationProxiesResponse>;
}
