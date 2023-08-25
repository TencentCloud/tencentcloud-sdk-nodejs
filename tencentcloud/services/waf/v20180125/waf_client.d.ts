import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAccessExportRequest, ModifyHostRequest, DescribeIpHitItemsResponse, RefreshAccessCheckResultRequest, DescribeUserCdcClbWafRegionsRequest, DeleteAttackDownloadRecordResponse, DescribeFlowTrendRequest, DescribeWafAutoDenyStatusRequest, AddCustomWhiteRuleResponse, SearchAttackLogRequest, DescribeCustomWhiteRuleResponse, DescribePeakValueResponse, DeleteCustomWhiteRuleResponse, AddDomainWhiteRuleResponse, DescribeIpAccessControlResponse, ModifyHostModeResponse, DescribeInstancesResponse, ModifyDomainWhiteRuleRequest, DescribeTlsVersionResponse, DescribeHostsResponse, DescribePeakPointsRequest, DescribeAccessIndexRequest, DeleteHostRequest, DescribeDomainsResponse, SwitchDomainRulesRequest, DeleteSessionRequest, DescribeWafAutoDenyRulesRequest, DescribeUserClbWafRegionsRequest, ModifyHostResponse, DescribeCiphersDetailRequest, AddCustomRuleResponse, DescribeFlowTrendResponse, GetAttackDownloadRecordsRequest, ModifyDomainIpv6StatusRequest, UpsertIpAccessControlRequest, GetAttackTotalCountResponse, ModifySpartaProtectionResponse, ModifyHostFlowModeRequest, DeleteDownloadRecordRequest, DescribeUserCdcClbWafRegionsResponse, GetAttackHistogramRequest, DeleteAccessExportResponse, AddSpartaProtectionsAutoResponse, DescribeAccessExportsRequest, ModifyApiAnalyzeStatusResponse, DescribeCustomWhiteRuleRequest, DescribeUserClbWafRegionsResponse, ModifyCustomWhiteRuleRequest, DeleteCustomWhiteRuleRequest, ModifyProtectionStatusResponse, ModifyWafAutoDenyStatusRequest, ModifyAccessPeriodResponse, DescribeVipInfoRequest, GetAttackHistogramResponse, DeleteSpartaProtectionResponse, DescribeAutoDenyIPResponse, SwitchDomainRulesResponse, SearchAccessLogResponse, CreateHostResponse, DeleteHostResponse, ModifyBotStatusRequest, DeleteSpartaProtectionRequest, DescribeAutoDenyIPRequest, CreateHostRequest, ModifyAreaBanStatusRequest, DescribeWafInfoRequest, AddSpartaProtectionRequest, PostAttackDownloadTaskRequest, ModifyCustomWhiteRuleResponse, DescribePolicyStatusRequest, GetAttackTotalCountRequest, DescribeAccessFastAnalysisRequest, DeleteIpAccessControlRequest, DeleteDomainWhiteRulesResponse, DescribeAttackOverviewResponse, DescribeDomainCountInfoResponse, ModifyWafAutoDenyStatusResponse, ModifyHostModeRequest, DescribeWafAutoDenyStatusResponse, DescribeDomainDetailsClbRequest, DeleteDomainWhiteRulesRequest, DescribeTlsVersionRequest, DescribeCiphersDetailResponse, ModifyDomainsCLSStatusResponse, DescribeHostLimitResponse, PostAttackDownloadTaskResponse, ModifySpartaProtectionModeResponse, ModifyBotStatusResponse, DescribeDomainDetailsSaasRequest, ModifyCustomRuleStatusResponse, AddSpartaProtectionResponse, DescribeUserDomainInfoRequest, DescribeDomainWhiteRulesRequest, ModifyHostStatusResponse, ModifyCustomRuleStatusRequest, DescribePeakPointsResponse, DeleteDownloadRecordResponse, ModifyAccessPeriodRequest, DescribeAttackOverviewRequest, DescribePeakValueRequest, DescribeDomainDetailsClbResponse, ModifyProtectionStatusRequest, ModifyWafAutoDenyRulesResponse, SearchAttackLogResponse, DescribePolicyStatusResponse, DescribeInstancesRequest, DeleteIpAccessControlResponse, DescribeWafInfoResponse, DescribeDomainDetailsSaasResponse, ModifyApiAnalyzeStatusRequest, AddSpartaProtectionsAutoRequest, AddCustomRuleRequest, DescribeWafAutoDenyRulesResponse, DescribeHostRequest, ModifyAreaBanStatusResponse, AddSpartaProtectionAutoResponse, ModifyDomainWhiteRuleResponse, ModifyWafAutoDenyRulesRequest, DescribeAccessFastAnalysisResponse, ModifyDomainIpv6StatusResponse, DescribeHostsRequest, ModifyWafThreatenIntelligenceRequest, AddSpartaProtectionAutoRequest, DescribeFindDomainListRequest, DescribeIpHitItemsRequest, DescribeVipInfoResponse, ModifyDomainsCLSStatusRequest, DescribeRuleLimitRequest, DescribeDomainCountInfoRequest, GetAttackDownloadRecordsResponse, DeleteAccessExportRequest, ModifySpartaProtectionRequest, DescribeIpAccessControlRequest, DescribeDomainWhiteRulesResponse, DescribeWafThreatenIntelligenceResponse, DescribeAccessHistogramResponse, ModifyHostFlowModeResponse, DeleteAttackDownloadRecordRequest, DescribeAccessIndexResponse, AddCustomWhiteRuleRequest, AddDomainWhiteRuleRequest, UpsertIpAccessControlResponse, DescribeFindDomainListResponse, DescribeAccessHistogramRequest, DeleteSessionResponse, DescribeRuleLimitResponse, DescribeWafThreatenIntelligenceRequest, DescribeHostLimitRequest, DescribeAccessExportsResponse, CreateAccessExportResponse, DescribeHostResponse, SearchAccessLogRequest, ModifySpartaProtectionModeRequest, DescribeDomainsRequest, ModifyWafThreatenIntelligenceResponse, DescribeUserDomainInfoResponse, ModifyHostStatusRequest, RefreshAccessCheckResultResponse } from "./waf_models";
/**
 * waf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * clb-waf编辑防护域名配置
     */
    ModifyHost(req: ModifyHostRequest, cb?: (error: string, rep: ModifyHostResponse) => void): Promise<ModifyHostResponse>;
    /**
     * 本接口用于获取访问日志导出列表
     */
    DescribeAccessExports(req: DescribeAccessExportsRequest, cb?: (error: string, rep: DescribeAccessExportsResponse) => void): Promise<DescribeAccessExportsResponse>;
    /**
     * 获取发现域名列表接口
     */
    DescribeFindDomainList(req: DescribeFindDomainListRequest, cb?: (error: string, rep: DescribeFindDomainListResponse) => void): Promise<DescribeFindDomainListResponse>;
    /**
     * 查询业务和攻击概要趋势
     */
    DescribePeakPoints(req: DescribePeakPointsRequest, cb?: (error: string, rep: DescribePeakPointsResponse) => void): Promise<DescribePeakPointsResponse>;
    /**
     * Bot_V2 bot总开关更新
     */
    ModifyBotStatus(req: ModifyBotStatusRequest, cb?: (error: string, rep: ModifyBotStatusResponse) => void): Promise<ModifyBotStatusResponse>;
    /**
     * waf斯巴达-waf开关
     */
    ModifyProtectionStatus(req: ModifyProtectionStatusRequest, cb?: (error: string, rep: ModifyProtectionStatusResponse) => void): Promise<ModifyProtectionStatusResponse>;
    /**
     * 添加域名的首先验证是否购买了套餐，是否没有达到购买套餐的限制，域名是否已经添加
     */
    DescribeHostLimit(req: DescribeHostLimitRequest, cb?: (error: string, rep: DescribeHostLimitResponse) => void): Promise<DescribeHostLimitResponse>;
    /**
     * 本接口用于删除访问日志导出
     */
    DeleteAccessExport(req: DeleteAccessExportRequest, cb?: (error: string, rep: DeleteAccessExportResponse) => void): Promise<DeleteAccessExportResponse>;
    /**
     * 获取一个clb域名详情
     */
    DescribeDomainDetailsClb(req: DescribeDomainDetailsClbRequest, cb?: (error: string, rep: DescribeDomainDetailsClbResponse) => void): Promise<DescribeDomainDetailsClbResponse>;
    /**
     * 删除域名规则白名单
     */
    DeleteDomainWhiteRules(req: DeleteDomainWhiteRulesRequest, cb?: (error: string, rep: DeleteDomainWhiteRulesResponse) => void): Promise<DeleteDomainWhiteRulesResponse>;
    /**
     * 修改防护域名的地域封禁状态
     */
    ModifyAreaBanStatus(req: ModifyAreaBanStatusRequest, cb?: (error: string, rep: ModifyAreaBanStatusResponse) => void): Promise<ModifyAreaBanStatusResponse>;
    /**
     * 切换域名的规则开关
     */
    SwitchDomainRules(req: SwitchDomainRulesRequest, cb?: (error: string, rep: SwitchDomainRulesResponse) => void): Promise<SwitchDomainRulesResponse>;
    /**
     * 查询用户所有域名的详细信息
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * 本接口用于搜索WAF访问日志
     */
    SearchAccessLog(req: SearchAccessLogRequest, cb?: (error: string, rep: SearchAccessLogResponse) => void): Promise<SearchAccessLogResponse>;
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    DescribeAccessIndex(req?: DescribeAccessIndexRequest, cb?: (error: string, rep: DescribeAccessIndexResponse) => void): Promise<DescribeAccessIndexResponse>;
    /**
     * clb-waf 设置防护域名的流量模式
     */
    ModifyHostFlowMode(req: ModifyHostFlowModeRequest, cb?: (error: string, rep: ModifyHostFlowModeResponse) => void): Promise<ModifyHostFlowModeResponse>;
    /**
     * 本接口用于创建访问日志导出
     */
    CreateAccessExport(req: CreateAccessExportRequest, cb?: (error: string, rep: CreateAccessExportResponse) => void): Promise<CreateAccessExportResponse>;
    /**
     * 按照条件查询展示攻击总次数
     */
    GetAttackTotalCount(req: GetAttackTotalCountRequest, cb?: (error: string, rep: GetAttackTotalCountResponse) => void): Promise<GetAttackTotalCountResponse>;
    /**
     * 新版本CLS接口存在参数变化，query改成了query_string支持lucence语法接口搜索查询。
     */
    SearchAttackLog(req: SearchAttackLogRequest, cb?: (error: string, rep: SearchAttackLogResponse) => void): Promise<SearchAttackLogResponse>;
    /**
     * 本接口用于访问日志柱状趋势图
     */
    DescribeAccessHistogram(req: DescribeAccessHistogramRequest, cb?: (error: string, rep: DescribeAccessHistogramResponse) => void): Promise<DescribeAccessHistogramResponse>;
    /**
     * 查询用户所有实例的详细信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 设置waf防护状态
     */
    ModifySpartaProtectionMode(req: ModifySpartaProtectionModeRequest, cb?: (error: string, rep: ModifySpartaProtectionModeResponse) => void): Promise<ModifySpartaProtectionModeResponse>;
    /**
     * Waf IP黑白名单Delete接口
     */
    DeleteIpAccessControl(req: DeleteIpAccessControlRequest, cb?: (error: string, rep: DeleteIpAccessControlResponse) => void): Promise<DeleteIpAccessControlResponse>;
    /**
     * 本接口用于修改访问日志保存期限及大字段是否存储
     */
    ModifyAccessPeriod(req: ModifyAccessPeriodRequest, cb?: (error: string, rep: ModifyAccessPeriodResponse) => void): Promise<ModifyAccessPeriodResponse>;
    /**
     * 生成攻击日志的产生时间柱状图
     */
    GetAttackHistogram(req: GetAttackHistogramRequest, cb?: (error: string, rep: GetAttackHistogramResponse) => void): Promise<GetAttackHistogramResponse>;
    /**
     * 配置WAF自动封禁模块状态
     */
    ModifyWafAutoDenyStatus(req: ModifyWafAutoDenyStatusRequest, cb?: (error: string, rep: ModifyWafAutoDenyStatusResponse) => void): Promise<ModifyWafAutoDenyStatusResponse>;
    /**
     * 查询用户TLS版本
     */
    DescribeTlsVersion(req?: DescribeTlsVersionRequest, cb?: (error: string, rep: DescribeTlsVersionResponse) => void): Promise<DescribeTlsVersionResponse>;
    /**
     * clb-waf 设置防护域名WAF开关
支持批量操作。
     */
    ModifyHostStatus(req: ModifyHostStatusRequest, cb?: (error: string, rep: ModifyHostStatusResponse) => void): Promise<ModifyHostStatusResponse>;
    /**
     * 查询加密套件信息
     */
    DescribeCiphersDetail(req?: DescribeCiphersDetailRequest, cb?: (error: string, rep: DescribeCiphersDetailResponse) => void): Promise<DescribeCiphersDetailResponse>;
    /**
     * 批量添加域名
     */
    AddSpartaProtectionsAuto(req: AddSpartaProtectionsAutoRequest, cb?: (error: string, rep: AddSpartaProtectionsAutoResponse) => void): Promise<AddSpartaProtectionsAutoResponse>;
    /**
     * 修改域名列表的访问日志开关
     */
    ModifyDomainsCLSStatus(req: ModifyDomainsCLSStatusRequest, cb?: (error: string, rep: ModifyDomainsCLSStatusResponse) => void): Promise<ModifyDomainsCLSStatusResponse>;
    /**
     * 获取waf流量访问趋势
     */
    DescribeFlowTrend(req: DescribeFlowTrendRequest, cb?: (error: string, rep: DescribeFlowTrendResponse) => void): Promise<DescribeFlowTrendResponse>;
    /**
     * 根据过滤条件查询VIP信息
     */
    DescribeVipInfo(req: DescribeVipInfoRequest, cb?: (error: string, rep: DescribeVipInfoResponse) => void): Promise<DescribeVipInfoResponse>;
    /**
     * 查询saas和clb的域名信息
     */
    DescribeUserDomainInfo(req?: DescribeUserDomainInfoRequest, cb?: (error: string, rep: DescribeUserDomainInfoResponse) => void): Promise<DescribeUserDomainInfoResponse>;
    /**
     * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserCdcClbWafRegions(req?: DescribeUserCdcClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserCdcClbWafRegionsResponse) => void): Promise<DescribeUserCdcClbWafRegionsResponse>;
    /**
     * 删除CLB-WAF防护域名
支持批量操作
     */
    DeleteHost(req: DeleteHostRequest, cb?: (error: string, rep: DeleteHostResponse) => void): Promise<DeleteHostResponse>;
    /**
     * 更改某一条规则
     */
    ModifyDomainWhiteRule(req: ModifyDomainWhiteRuleRequest, cb?: (error: string, rep: ModifyDomainWhiteRuleResponse) => void): Promise<ModifyDomainWhiteRuleResponse>;
    /**
     * 本接口用于访问日志的快速分析
     */
    DescribeAccessFastAnalysis(req: DescribeAccessFastAnalysisRequest, cb?: (error: string, rep: DescribeAccessFastAnalysisResponse) => void): Promise<DescribeAccessFastAnalysisResponse>;
    /**
     * 接口已废弃

描述WAF自动封禁IP详情,对齐自动封堵状态
     */
    DescribeAutoDenyIP(req: DescribeAutoDenyIPRequest, cb?: (error: string, rep: DescribeAutoDenyIPResponse) => void): Promise<DescribeAutoDenyIPResponse>;
    /**
     * 描述WAF自动封禁模块详情
     */
    DescribeWafAutoDenyStatus(req?: DescribeWafAutoDenyStatusRequest, cb?: (error: string, rep: DescribeWafAutoDenyStatusResponse) => void): Promise<DescribeWafAutoDenyStatusResponse>;
    /**
     * 删除精准白名单规则
     */
    DeleteCustomWhiteRule(req: DeleteCustomWhiteRuleRequest, cb?: (error: string, rep: DeleteCustomWhiteRuleResponse) => void): Promise<DeleteCustomWhiteRuleResponse>;
    /**
     * 编辑精准白名单
     */
    ModifyCustomWhiteRule(req: ModifyCustomWhiteRuleRequest, cb?: (error: string, rep: ModifyCustomWhiteRuleResponse) => void): Promise<ModifyCustomWhiteRuleResponse>;
    /**
     * 查询下载攻击日志任务记录列表
     */
    GetAttackDownloadRecords(req?: GetAttackDownloadRecordsRequest, cb?: (error: string, rep: GetAttackDownloadRecordsResponse) => void): Promise<GetAttackDownloadRecordsResponse>;
    /**
     * 增加访问控制（自定义策略）
     */
    AddCustomRule(req: AddCustomRuleRequest, cb?: (error: string, rep: AddCustomRuleResponse) => void): Promise<AddCustomRuleResponse>;
    /**
     * Waf ip黑白名单查询
     */
    DescribeIpAccessControl(req: DescribeIpAccessControlRequest, cb?: (error: string, rep: DescribeIpAccessControlResponse) => void): Promise<DescribeIpAccessControlResponse>;
    /**
     * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
     */
    PostAttackDownloadTask(req: PostAttackDownloadTaskRequest, cb?: (error: string, rep: PostAttackDownloadTaskResponse) => void): Promise<PostAttackDownloadTaskResponse>;
    /**
     * 查询单个saas域名详情
     */
    DescribeDomainDetailsSaas(req: DescribeDomainDetailsSaasRequest, cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void): Promise<DescribeDomainDetailsSaasResponse>;
    /**
     * 开启或禁用访问控制（自定义策略）
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 获取域名概况
     */
    DescribeDomainCountInfo(req?: DescribeDomainCountInfoRequest, cb?: (error: string, rep: DescribeDomainCountInfoResponse) => void): Promise<DescribeDomainCountInfoResponse>;
    /**
     * waf斯巴达-删除防护域名
     */
    DeleteSpartaProtection(req: DeleteSpartaProtectionRequest, cb?: (error: string, rep: DeleteSpartaProtectionResponse) => void): Promise<DeleteSpartaProtectionResponse>;
    /**
     * 获取业务和攻击概览峰值
     */
    DescribePeakValue(req: DescribePeakValueRequest, cb?: (error: string, rep: DescribePeakValueResponse) => void): Promise<DescribePeakValueResponse>;
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    ModifyWafThreatenIntelligence(req: ModifyWafThreatenIntelligenceRequest, cb?: (error: string, rep: ModifyWafThreatenIntelligenceResponse) => void): Promise<ModifyWafThreatenIntelligenceResponse>;
    /**
     * clb-waf设置防护域名防护状态
     */
    ModifyHostMode(req: ModifyHostModeRequest, cb?: (error: string, rep: ModifyHostModeResponse) => void): Promise<ModifyHostModeResponse>;
    /**
     * 修改域名配置
     */
    ModifySpartaProtection(req: ModifySpartaProtectionRequest, cb?: (error: string, rep: ModifySpartaProtectionResponse) => void): Promise<ModifySpartaProtectionResponse>;
    /**
     * 增加精准白名单规则
     */
    AddCustomWhiteRule(req: AddCustomWhiteRuleRequest, cb?: (error: string, rep: AddCustomWhiteRuleResponse) => void): Promise<AddCustomWhiteRuleResponse>;
    /**
     * api分析页面开关
     */
    ModifyApiAnalyzeStatus(req: ModifyApiAnalyzeStatusRequest, cb?: (error: string, rep: ModifyApiAnalyzeStatusResponse) => void): Promise<ModifyApiAnalyzeStatusResponse>;
    /**
     * 修改ip惩罚规则
     */
    ModifyWafAutoDenyRules(req: ModifyWafAutoDenyRulesRequest, cb?: (error: string, rep: ModifyWafAutoDenyRulesResponse) => void): Promise<ModifyWafAutoDenyRulesResponse>;
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserClbWafRegions(req?: DescribeUserClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void): Promise<DescribeUserClbWafRegionsResponse>;
    /**
     * 删除攻击日志下载任务记录
     */
    DeleteAttackDownloadRecord(req: DeleteAttackDownloadRecordRequest, cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void): Promise<DeleteAttackDownloadRecordResponse>;
    /**
     * 返回ip惩罚规则详细信息
     */
    DescribeWafAutoDenyRules(req: DescribeWafAutoDenyRulesRequest, cb?: (error: string, rep: DescribeWafAutoDenyRulesResponse) => void): Promise<DescribeWafAutoDenyRulesResponse>;
    /**
     * 攻击总览
     */
    DescribeAttackOverview(req: DescribeAttackOverviewRequest, cb?: (error: string, rep: DescribeAttackOverviewResponse) => void): Promise<DescribeAttackOverviewResponse>;
    /**
     * 删除访问日志下载记录
     */
    DeleteDownloadRecord(req: DeleteDownloadRecordRequest, cb?: (error: string, rep: DeleteDownloadRecordResponse) => void): Promise<DeleteDownloadRecordResponse>;
    /**
     * clb-waf中添加防护的域名
     */
    CreateHost(req: CreateHostRequest, cb?: (error: string, rep: CreateHostResponse) => void): Promise<CreateHostResponse>;
    /**
     * 删除CC攻击的session设置
     */
    DeleteSession(req: DeleteSessionRequest, cb?: (error: string, rep: DeleteSessionResponse) => void): Promise<DeleteSessionResponse>;
    /**
     * 一键接入
     */
    AddSpartaProtectionAuto(req: AddSpartaProtectionAutoRequest, cb?: (error: string, rep: AddSpartaProtectionAutoResponse) => void): Promise<AddSpartaProtectionAutoResponse>;
    /**
     * 获取各个模块具体的规格限制
     */
    DescribeRuleLimit(req: DescribeRuleLimitRequest, cb?: (error: string, rep: DescribeRuleLimitResponse) => void): Promise<DescribeRuleLimitResponse>;
    /**
     * clb-waf中获取防护域名列表
     */
    DescribeHosts(req: DescribeHostsRequest, cb?: (error: string, rep: DescribeHostsResponse) => void): Promise<DescribeHostsResponse>;
    /**
     * 添加Spart防护域名
     */
    AddSpartaProtection(req: AddSpartaProtectionRequest, cb?: (error: string, rep: AddSpartaProtectionResponse) => void): Promise<AddSpartaProtectionResponse>;
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    DescribeWafThreatenIntelligence(req?: DescribeWafThreatenIntelligenceRequest, cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void): Promise<DescribeWafThreatenIntelligenceResponse>;
    /**
     * 获取负载均衡绑定的WAF信息，可以根据租户负载均衡实例ID、负载均衡监听器ID、负载均衡的域名信息来查询对应绑定的 Waf的状态信息。
查询的范围：负载均衡实例ID、负载均衡实例ID+监听器ID、负载均衡实例ID+监听器ID+域名。
可能的错误码：ResourceNotFound（没有找到对应的资源）、UnsupportedRegion（目前clb-waf只支持北京、广州、上海、成都、重庆、香港地域）。

     */
    DescribeWafInfo(req: DescribeWafInfoRequest, cb?: (error: string, rep: DescribeWafInfoResponse) => void): Promise<DescribeWafInfoResponse>;
    /**
     * 获取防护状态以及生效的实例id
     */
    DescribePolicyStatus(req: DescribePolicyStatusRequest, cb?: (error: string, rep: DescribePolicyStatusResponse) => void): Promise<DescribePolicyStatusResponse>;
    /**
     * 刷新接入检查的结果，后台会生成接入检查任务
     */
    RefreshAccessCheckResult(req: RefreshAccessCheckResultRequest, cb?: (error: string, rep: RefreshAccessCheckResultResponse) => void): Promise<RefreshAccessCheckResultResponse>;
    /**
     * Waf  IP封堵状态查询
     */
    DescribeIpHitItems(req: DescribeIpHitItemsRequest, cb?: (error: string, rep: DescribeIpHitItemsResponse) => void): Promise<DescribeIpHitItemsResponse>;
    /**
     * 增加域名规则白名单
     */
    AddDomainWhiteRule(req: AddDomainWhiteRuleRequest, cb?: (error: string, rep: AddDomainWhiteRuleResponse) => void): Promise<AddDomainWhiteRuleResponse>;
    /**
     * 修改ipv6开关
     */
    ModifyDomainIpv6Status(req: ModifyDomainIpv6StatusRequest, cb?: (error: string, rep: ModifyDomainIpv6StatusResponse) => void): Promise<ModifyDomainIpv6StatusResponse>;
    /**
     * 获取域名的规则白名单
     */
    DescribeDomainWhiteRules(req: DescribeDomainWhiteRulesRequest, cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void): Promise<DescribeDomainWhiteRulesResponse>;
    /**
     * 获取防护配置中的精准白名单策略列表
     */
    DescribeCustomWhiteRule(req: DescribeCustomWhiteRuleRequest, cb?: (error: string, rep: DescribeCustomWhiteRuleResponse) => void): Promise<DescribeCustomWhiteRuleResponse>;
    /**
     * clb-waf获取防护域名详情
     */
    DescribeHost(req: DescribeHostRequest, cb?: (error: string, rep: DescribeHostResponse) => void): Promise<DescribeHostResponse>;
    /**
     * Waf IP黑白名单Upsert接口
     */
    UpsertIpAccessControl(req: UpsertIpAccessControlRequest, cb?: (error: string, rep: UpsertIpAccessControlResponse) => void): Promise<UpsertIpAccessControlResponse>;
}
