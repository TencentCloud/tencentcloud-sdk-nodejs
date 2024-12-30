import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyWebshellStatusRequest, DescribeUserClbWafRegionsResponse, AddAntiFakeUrlRequest, ModifyIpAccessControlRequest, DescribeApiListVersionTwoResponse, DescribePeakValueResponse, DescribeCertificateVerifyResultResponse, ModifyUserSignatureRuleResponse, ModifyInstanceNameResponse, DescribeWafAutoDenyRulesRequest, GenerateDealsAndPayNewRequest, DeleteCustomWhiteRuleResponse, ModifyHostModeResponse, GetAttackDownloadRecordsRequest, DescribeDomainRulesRequest, DescribeScanIpRequest, DeleteAccessExportResponse, DescribeModuleStatusResponse, AddAntiInfoLeakRulesRequest, DeleteAttackWhiteRuleResponse, DescribeWebshellStatusRequest, GetAttackHistogramResponse, DeleteSpartaProtectionResponse, DeleteHostResponse, ModifyApiAnalyzeStatusResponse, ModifyAttackWhiteRuleRequest, ModifyCustomRuleResponse, FreshAntiFakeUrlRequest, ModifyAreaBanStatusRequest, DescribeSessionRequest, DescribePolicyStatusRequest, DescribeAccessFastAnalysisRequest, DeleteIpAccessControlRequest, DescribeDomainCountInfoResponse, ModifyHostModeRequest, ModifyAntiInfoLeakRuleStatusRequest, DescribeCiphersDetailResponse, DescribeCustomRuleListRequest, DeleteIpAccessControlV2Response, PostAttackDownloadTaskResponse, DescribeAttackWhiteRuleRequest, AddSpartaProtectionResponse, DescribeUserDomainInfoRequest, DescribeHostResponse, ModifyWafAutoDenyRulesResponse, DescribeUserSignatureRuleResponse, UpsertCCRuleResponse, DescribeHostRequest, DeleteCustomRuleRequest, DescribeUserSignatureRuleV2Request, ModifyApiSecEventChangeRequest, DescribeHostsRequest, ModifyCustomWhiteRuleStatusRequest, ModifyAreaBanRuleRequest, DescribeFindDomainListRequest, ModifyInstanceElasticModeResponse, DeleteHostRequest, DescribeDomainCountInfoRequest, DescribeCustomWhiteRuleResponse, ModifySpartaProtectionRequest, DeleteAttackDownloadRecordRequest, DescribeAntiFakeRulesRequest, DescribeVipInfoRequest, ImportIpAccessControlRequest, DescribeFindDomainListResponse, DeleteSessionResponse, DescribeAccessIndexResponse, ModifyUserSignatureRuleRequest, ModifyWafThreatenIntelligenceResponse, DescribeUserDomainInfoResponse, ModifyAntiInfoLeakRulesResponse, AddCustomWhiteRuleResponse, SwitchElasticModeRequest, DescribeModuleStatusRequest, DeleteAttackWhiteRuleRequest, DescribeHostsResponse, DescribeAccessIndexRequest, DescribeAreaBanAreasResponse, DescribeDomainsResponse, AddAntiFakeUrlResponse, SearchAttackLogResponse, ModifySpartaProtectionResponse, DescribeUserCdcClbWafRegionsResponse, SwitchElasticModeResponse, DescribeAreaBanRuleResponse, BatchOperateUserSignatureRulesResponse, ModifyAreaBanAreasResponse, ModifyAntiFakeUrlStatusRequest, DescribeCCRuleListRequest, ModifyAttackWhiteRuleResponse, SearchAccessLogResponse, DescribeAntiInfoLeakageRulesRequest, CreateHostResponse, ModifyBotStatusRequest, ModifyHostFlowModeRequest, CreateHostRequest, GetInstanceQpsLimitResponse, CreateDealsRequest, ModifyCustomWhiteRuleResponse, DescribeAreaBanSupportAreasResponse, DescribeUserSignatureClassResponse, DescribePortsRequest, DescribeWafAutoDenyStatusResponse, DescribeTlsVersionRequest, DescribeDomainDetailsSaasRequest, DescribeDomainWhiteRulesRequest, DescribePeakPointsResponse, ModifyInstanceRenewFlagRequest, DescribeAreaBanSupportAreasRequest, DeleteIpAccessControlResponse, AddAttackWhiteRuleRequest, DescribeDomainDetailsClbResponse, DescribeIpAccessControlRequest, ModifyWafThreatenIntelligenceRequest, DescribeApiListVersionTwoRequest, ModifyInstanceQpsLimitResponse, DescribeIpHitItemsRequest, DescribeUserSignatureRuleRequest, ModifyAreaBanRuleResponse, DescribeUserClbWafRegionsRequest, AddAntiInfoLeakRulesResponse, DescribeWafThreatenIntelligenceResponse, AddDomainWhiteRuleRequest, DeleteAntiInfoLeakRuleResponse, DescribeRuleLimitResponse, CreateAccessExportResponse, ModifyHostRequest, DescribeHistogramResponse, ModifyUserLevelResponse, CreateAccessExportRequest, ModifyUserLevelRequest, DescribeIpHitItemsResponse, ModifyHostResponse, DescribeCertificateVerifyResultRequest, DescribeUserCdcClbWafRegionsRequest, DeleteAttackDownloadRecordResponse, CreateIpAccessControlRequest, DescribeFlowTrendRequest, DescribeWafAutoDenyStatusRequest, DescribeAreaBanAreasRequest, AddDomainWhiteRuleResponse, DescribeIpAccessControlResponse, ModifyProtectionStatusRequest, DescribeInstancesResponse, UpsertCCAutoStatusResponse, ModifyGenerateDealsResponse, UpsertSessionResponse, SwitchDomainRulesRequest, DeleteSessionRequest, SearchAttackLogRequest, AddCustomRuleResponse, DescribeFlowTrendResponse, CreateIpAccessControlResponse, UpsertIpAccessControlRequest, ModifyObjectRequest, DescribeAccessExportsRequest, DescribeCustomWhiteRuleRequest, DeleteAntiFakeUrlResponse, CreateAreaBanRuleRequest, DescribeUserLevelResponse, DescribeCustomRuleListResponse, GetInstanceQpsLimitRequest, DescribeAutoDenyIPResponse, SwitchDomainRulesResponse, ModifyInstanceQpsLimitRequest, FreshAntiFakeUrlResponse, DeleteSpartaProtectionRequest, DescribeAntiFakeRulesResponse, CreateAreaBanRuleResponse, GetAttackTotalCountRequest, DeleteDomainWhiteRulesResponse, DescribeAttackOverviewResponse, AddAreaBanAreasRequest, DescribeCCRuleListResponse, DescribeCCAutoStatusRequest, DescribeDomainDetailsClbRequest, ModifyDomainsCLSStatusResponse, ModifyBotStatusResponse, ModifyCustomRuleStatusResponse, DescribeProtectionModesRequest, DescribeCCAutoStatusResponse, ModifyCustomRuleStatusRequest, ModifySpartaProtectionModeRequest, DescribeAttackOverviewRequest, DescribeUserLevelRequest, DescribeUserSignatureRuleV2Response, ModifyAntiFakeUrlResponse, DescribeBatchIpAccessControlRequest, DescribeInstancesRequest, ModifyAntiInfoLeakRulesRequest, DescribeUserSignatureClassRequest, DescribeBatchIpAccessControlResponse, DescribeDomainDetailsSaasResponse, ModifyApiAnalyzeStatusRequest, ModifyAntiInfoLeakRuleStatusResponse, ModifyAreaBanStatusResponse, DeleteIpAccessControlV2Request, DescribeTopAttackDomainRequest, DescribeAccessFastAnalysisResponse, ModifyDomainIpv6StatusResponse, DescribeHostLimitResponse, DeleteAntiFakeUrlRequest, DescribeSpartaProtectionInfoRequest, ModifyUserSignatureRuleV2Request, ModifyWebshellStatusResponse, GenerateDealsAndPayNewResponse, DescribeCCRuleRequest, BatchOperateUserSignatureRulesRequest, GetAttackDownloadRecordsResponse, DescribeAreaBanRuleRequest, DescribeApiDetailResponse, DescribeAccessHistogramResponse, DescribeTopAttackDomainResponse, UpsertIpAccessControlResponse, DescribeAccessHistogramRequest, DescribeWafThreatenIntelligenceRequest, DescribeAccessExportsResponse, DeleteCustomRuleResponse, DescribeHistogramRequest, DeleteCCRuleResponse, UpsertCCRuleRequest, ModifyProtectionStatusResponse, DescribeDomainsRequest, ModifyDomainPostActionRequest, UpsertCCAutoStatusRequest, DescribeProtectionModesResponse, DescribeWafAutoDenyRulesResponse, RefreshAccessCheckResultRequest, DescribeSpartaProtectionInfoResponse, ModifyModuleStatusRequest, ModifyUserSignatureRuleV2Response, ModifyInstanceNameRequest, DescribePortsResponse, ModifyCustomRuleRequest, ModifyDomainWhiteRuleRequest, DescribePeakPointsRequest, ModifyHostFlowModeResponse, DescribeCiphersDetailRequest, ModifyDomainIpv6StatusRequest, DescribeAntiInfoLeakageRulesResponse, AddAreaBanAreasResponse, DescribeScanIpResponse, GetAttackHistogramRequest, DescribeAttackTypeRequest, ModifyCustomWhiteRuleRequest, DeleteCustomWhiteRuleRequest, ModifyInstanceRenewFlagResponse, AddAttackWhiteRuleResponse, ImportIpAccessControlResponse, AddCustomWhiteRuleRequest, DescribeAutoDenyIPRequest, AddSpartaProtectionRequest, PostAttackDownloadTaskRequest, ModifyAreaBanAreasRequest, ModifyModuleStatusResponse, ModifyHostStatusResponse, DeleteDomainWhiteRulesRequest, DescribeDomainVerifyResultRequest, ModifySpartaProtectionModeResponse, ModifyApiSecEventChangeResponse, ModifyCustomWhiteRuleStatusResponse, DescribePeakValueRequest, DescribeApiDetailRequest, DescribePolicyStatusResponse, GetAttackTotalCountResponse, DescribeDomainRulesResponse, CreateDealsResponse, DescribeDomainVerifyResultResponse, AddCustomRuleRequest, DeleteCCRuleRequest, DescribeAttackTypeResponse, DescribeCCRuleResponse, ModifyGenerateDealsRequest, ModifyDomainWhiteRuleResponse, ModifyObjectResponse, ModifyAntiFakeUrlStatusResponse, ModifyAntiFakeUrlRequest, ModifyInstanceElasticModeRequest, DescribeWebshellStatusResponse, DeleteAntiInfoLeakRuleRequest, DescribeVipInfoResponse, ModifyIpAccessControlResponse, DescribeRuleLimitRequest, ModifyDomainPostActionResponse, ModifyDomainsCLSStatusRequest, DeleteAccessExportRequest, DescribeTlsVersionResponse, DescribeDomainWhiteRulesResponse, ModifyWafAutoDenyRulesRequest, DescribeSessionResponse, UpsertSessionRequest, DescribeHostLimitRequest, DescribeObjectsResponse, SearchAccessLogRequest, DescribeAttackWhiteRuleResponse, DescribeObjectsRequest, ModifyHostStatusRequest, RefreshAccessCheckResultResponse } from "./waf_models";
/**
 * waf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询指定域名TOP N攻击类型
     */
    DescribeAttackType(req: DescribeAttackTypeRequest, cb?: (error: string, rep: DescribeAttackTypeResponse) => void): Promise<DescribeAttackTypeResponse>;
    /**
     * 获取一个clbwaf域名详情
     */
    DescribeDomainDetailsClb(req: DescribeDomainDetailsClbRequest, cb?: (error: string, rep: DescribeDomainDetailsClbResponse) => void): Promise<DescribeDomainDetailsClbResponse>;
    /**
     * 查询用户所有域名的详细信息
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    DescribeAccessIndex(req?: DescribeAccessIndexRequest, cb?: (error: string, rep: DescribeAccessIndexResponse) => void): Promise<DescribeAccessIndexResponse>;
    /**
     * 按照条件查询展示攻击总次数
     */
    GetAttackTotalCount(req: GetAttackTotalCountRequest, cb?: (error: string, rep: GetAttackTotalCountResponse) => void): Promise<GetAttackTotalCountResponse>;
    /**
     * 导入IP黑白名单
     */
    ImportIpAccessControl(req: ImportIpAccessControlRequest, cb?: (error: string, rep: ImportIpAccessControlResponse) => void): Promise<ImportIpAccessControlResponse>;
    /**
     * 增加精准白名单规则
     */
    AddCustomWhiteRule(req: AddCustomWhiteRuleRequest, cb?: (error: string, rep: AddCustomWhiteRuleResponse) => void): Promise<AddCustomWhiteRuleResponse>;
    /**
     * Waf IP黑白名单Delete接口（建议使用DeleteIpAccessControlV2来替换当前接口）
     */
    DeleteIpAccessControl(req: DeleteIpAccessControlRequest, cb?: (error: string, rep: DeleteIpAccessControlResponse) => void): Promise<DeleteIpAccessControlResponse>;
    /**
     * 获取地域封禁配置包括地域封禁开关，设置封禁的地区信息
     */
    DescribeAreaBanAreas(req: DescribeAreaBanAreasRequest, cb?: (error: string, rep: DescribeAreaBanAreasResponse) => void): Promise<DescribeAreaBanAreasResponse>;
    /**
     * 编辑自定义规则
     */
    ModifyCustomRule(req: ModifyCustomRuleRequest, cb?: (error: string, rep: ModifyCustomRuleResponse) => void): Promise<ModifyCustomRuleResponse>;
    /**
     * 设置负载均衡型WAF防护域名的流量模式，切换镜像模式和清洗模式
     */
    ModifyHostFlowMode(req: ModifyHostFlowModeRequest, cb?: (error: string, rep: ModifyHostFlowModeResponse) => void): Promise<ModifyHostFlowModeResponse>;
    /**
     * 设置套餐实例的弹性qps上限
     */
    ModifyInstanceQpsLimit(req: ModifyInstanceQpsLimitRequest, cb?: (error: string, rep: ModifyInstanceQpsLimitResponse) => void): Promise<ModifyInstanceQpsLimitResponse>;
    /**
     * api资产列表
     */
    DescribeApiListVersionTwo(req: DescribeApiListVersionTwoRequest, cb?: (error: string, rep: DescribeApiListVersionTwoResponse) => void): Promise<DescribeApiListVersionTwoResponse>;
    /**
     * waf斯巴达-获取防护域名信息
     */
    DescribeSpartaProtectionInfo(req: DescribeSpartaProtectionInfoRequest, cb?: (error: string, rep: DescribeSpartaProtectionInfoResponse) => void): Promise<DescribeSpartaProtectionInfoResponse>;
    /**
     * 描述WAF自动封禁IP详情,对齐自动封堵状态
     */
    DescribeAutoDenyIP(req: DescribeAutoDenyIPRequest, cb?: (error: string, rep: DescribeAutoDenyIPResponse) => void): Promise<DescribeAutoDenyIPResponse>;
    /**
     * 删除精准白名单规则
     */
    DeleteCustomWhiteRule(req: DeleteCustomWhiteRuleRequest, cb?: (error: string, rep: DeleteCustomWhiteRuleResponse) => void): Promise<DeleteCustomWhiteRuleResponse>;
    /**
     * 查询下载攻击日志任务记录列表
     */
    GetAttackDownloadRecords(req?: GetAttackDownloadRecordsRequest, cb?: (error: string, rep: GetAttackDownloadRecordsResponse) => void): Promise<GetAttackDownloadRecordsResponse>;
    /**
     * 获取Api请求详情信息
     */
    DescribeApiDetail(req: DescribeApiDetailRequest, cb?: (error: string, rep: DescribeApiDetailResponse) => void): Promise<DescribeApiDetailResponse>;
    /**
     * 查询扫描ip
     */
    DescribeScanIp(req: DescribeScanIpRequest, cb?: (error: string, rep: DescribeScanIpResponse) => void): Promise<DescribeScanIpResponse>;
    /**
     * 删除自定义规则
     */
    DeleteCustomRule(req: DeleteCustomRuleRequest, cb?: (error: string, rep: DeleteCustomRuleResponse) => void): Promise<DeleteCustomRuleResponse>;
    /**
     * 编辑防篡改url
     */
    ModifyAntiFakeUrl(req: ModifyAntiFakeUrlRequest, cb?: (error: string, rep: ModifyAntiFakeUrlResponse) => void): Promise<ModifyAntiFakeUrlResponse>;
    /**
     * 编辑SaaS型WAF域名配置
     */
    ModifySpartaProtection(req: ModifySpartaProtectionRequest, cb?: (error: string, rep: ModifySpartaProtectionResponse) => void): Promise<ModifySpartaProtectionResponse>;
    /**
     * 修改实例的QPS弹性计费开关
     */
    ModifyInstanceElasticMode(req: ModifyInstanceElasticModeRequest, cb?: (error: string, rep: ModifyInstanceElasticModeResponse) => void): Promise<ModifyInstanceElasticModeResponse>;
    /**
     * api分析页面开关
     */
    ModifyApiAnalyzeStatus(req: ModifyApiAnalyzeStatusRequest, cb?: (error: string, rep: ModifyApiAnalyzeStatusResponse) => void): Promise<ModifyApiAnalyzeStatusResponse>;
    /**
     * 修改ip惩罚规则
     */
    ModifyWafAutoDenyRules(req: ModifyWafAutoDenyRulesRequest, cb?: (error: string, rep: ModifyWafAutoDenyRulesResponse) => void): Promise<ModifyWafAutoDenyRulesResponse>;
    /**
     * 查询saas和clb的域名信息
     */
    DescribeUserDomainInfo(req?: DescribeUserDomainInfoRequest, cb?: (error: string, rep: DescribeUserDomainInfoResponse) => void): Promise<DescribeUserDomainInfoResponse>;
    /**
     * 查询Tiga引擎大类规则及其防护模式
     */
    DescribeProtectionModes(req: DescribeProtectionModesRequest, cb?: (error: string, rep: DescribeProtectionModesResponse) => void): Promise<DescribeProtectionModesResponse>;
    /**
     * 取得信息防泄漏规则列表
     */
    DescribeAntiInfoLeakageRules(req: DescribeAntiInfoLeakageRulesRequest, cb?: (error: string, rep: DescribeAntiInfoLeakageRulesResponse) => void): Promise<DescribeAntiInfoLeakageRulesResponse>;
    /**
     * 本接口用于搜索WAF访问日志
     */
    SearchAccessLog(req: SearchAccessLogRequest, cb?: (error: string, rep: SearchAccessLogResponse) => void): Promise<SearchAccessLogResponse>;
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    DescribeWafThreatenIntelligence(req?: DescribeWafThreatenIntelligenceRequest, cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void): Promise<DescribeWafThreatenIntelligenceResponse>;
    /**
     * Waf  IP封堵状态查询
     */
    DescribeIpHitItems(req: DescribeIpHitItemsRequest, cb?: (error: string, rep: DescribeIpHitItemsResponse) => void): Promise<DescribeIpHitItemsResponse>;
    /**
     * 删除CC攻击的session设置
     */
    DeleteSession(req: DeleteSessionRequest, cb?: (error: string, rep: DeleteSessionResponse) => void): Promise<DeleteSessionResponse>;
    /**
     * 查询多种条件的聚类分析
     */
    DescribeHistogram(req: DescribeHistogramRequest, cb?: (error: string, rep: DescribeHistogramResponse) => void): Promise<DescribeHistogramResponse>;
    /**
     * 获取域名的webshell状态
     */
    DescribeWebshellStatus(req: DescribeWebshellStatusRequest, cb?: (error: string, rep: DescribeWebshellStatusResponse) => void): Promise<DescribeWebshellStatusResponse>;
    /**
     * 计费资源购买、续费下单接口
     */
    GenerateDealsAndPayNew(req: GenerateDealsAndPayNewRequest, cb?: (error: string, rep: GenerateDealsAndPayNewResponse) => void): Promise<GenerateDealsAndPayNewResponse>;
    /**
     * 信息防泄漏删除规则
     */
    DeleteAntiInfoLeakRule(req: DeleteAntiInfoLeakRuleRequest, cb?: (error: string, rep: DeleteAntiInfoLeakRuleResponse) => void): Promise<DeleteAntiInfoLeakRuleResponse>;
    /**
     * 添加（编辑）地域封禁中的地域信息
     */
    CreateAreaBanRule(req: CreateAreaBanRuleRequest, cb?: (error: string, rep: CreateAreaBanRuleResponse) => void): Promise<CreateAreaBanRuleResponse>;
    /**
     * 修改地域封禁中的地域信息
     */
    ModifyAreaBanAreas(req: ModifyAreaBanAreasRequest, cb?: (error: string, rep: ModifyAreaBanAreasResponse) => void): Promise<ModifyAreaBanAreasResponse>;
    /**
     * 计费资源购买、续费下单接口
     */
    CreateDeals(req: CreateDealsRequest, cb?: (error: string, rep: CreateDealsResponse) => void): Promise<CreateDealsResponse>;
    /**
     * 获取WAF地域封禁支持的地域列表
     */
    DescribeAreaBanSupportAreas(req?: DescribeAreaBanSupportAreasRequest, cb?: (error: string, rep: DescribeAreaBanSupportAreasResponse) => void): Promise<DescribeAreaBanSupportAreasResponse>;
    /**
     * 编辑SAAS型接入的紧急CC防护状态
     */
    UpsertCCAutoStatus(req: UpsertCCAutoStatusRequest, cb?: (error: string, rep: UpsertCCAutoStatusResponse) => void): Promise<UpsertCCAutoStatusResponse>;
    /**
     * 获取各个模块具体的规格限制
     */
    DescribeRuleLimit(req: DescribeRuleLimitRequest, cb?: (error: string, rep: DescribeRuleLimitResponse) => void): Promise<DescribeRuleLimitResponse>;
    /**
     * 添加信息防泄漏规则
     */
    AddAntiInfoLeakRules(req: AddAntiInfoLeakRulesRequest, cb?: (error: string, rep: AddAntiInfoLeakRulesResponse) => void): Promise<AddAntiInfoLeakRulesResponse>;
    /**
     * clb-waf 设置防护域名WAF开关
支持批量操作。
     */
    ModifyHostStatus(req: ModifyHostStatusRequest, cb?: (error: string, rep: ModifyHostStatusResponse) => void): Promise<ModifyHostStatusResponse>;
    /**
     * 查询各个waf基础安全模块的开关状态，看每个模块是否开启
     */
    DescribeModuleStatus(req: DescribeModuleStatusRequest, cb?: (error: string, rep: DescribeModuleStatusResponse) => void): Promise<DescribeModuleStatusResponse>;
    /**
     * Waf IP黑白名单Upsert接口（建议使用CreateIpAccessControl、ModifyIpAccessControl来替换当前接口）
     */
    UpsertIpAccessControl(req: UpsertIpAccessControlRequest, cb?: (error: string, rep: UpsertIpAccessControlResponse) => void): Promise<UpsertIpAccessControlResponse>;
    /**
     * 生成攻击日志的产生时间柱状图
     */
    GetAttackHistogram(req: GetAttackHistogramRequest, cb?: (error: string, rep: GetAttackHistogramResponse) => void): Promise<GetAttackHistogramResponse>;
    /**
     * 修改域名列表的访问日志开关
     */
    ModifyDomainsCLSStatus(req: ModifyDomainsCLSStatusRequest, cb?: (error: string, rep: ModifyDomainsCLSStatusResponse) => void): Promise<ModifyDomainsCLSStatusResponse>;
    /**
     * 获取用户特征规则列表
     */
    DescribeUserSignatureRuleV2(req: DescribeUserSignatureRuleV2Request, cb?: (error: string, rep: DescribeUserSignatureRuleV2Response) => void): Promise<DescribeUserSignatureRuleV2Response>;
    /**
     * 根据过滤条件查询VIP信息
     */
    DescribeVipInfo(req: DescribeVipInfoRequest, cb?: (error: string, rep: DescribeVipInfoResponse) => void): Promise<DescribeVipInfoResponse>;
    /**
     * 删除负载均衡型域名，支持批量操作。
     */
    DeleteHost(req: DeleteHostRequest, cb?: (error: string, rep: DeleteHostResponse) => void): Promise<DeleteHostResponse>;
    /**
     * 本接口用于访问日志的快速分析
     */
    DescribeAccessFastAnalysis(req: DescribeAccessFastAnalysisRequest, cb?: (error: string, rep: DescribeAccessFastAnalysisResponse) => void): Promise<DescribeAccessFastAnalysisResponse>;
    /**
     * 查询业务和攻击概要趋势
     */
    DescribePeakPoints(req: DescribePeakPointsRequest, cb?: (error: string, rep: DescribePeakPointsResponse) => void): Promise<DescribePeakPointsResponse>;
    /**
     * 编辑精准白名单
     */
    ModifyCustomWhiteRule(req: ModifyCustomWhiteRuleRequest, cb?: (error: string, rep: ModifyCustomWhiteRuleResponse) => void): Promise<ModifyCustomWhiteRuleResponse>;
    /**
     * 获取证书的检查结果
     */
    DescribeCertificateVerifyResult(req: DescribeCertificateVerifyResultRequest, cb?: (error: string, rep: DescribeCertificateVerifyResultResponse) => void): Promise<DescribeCertificateVerifyResultResponse>;
    /**
     * Waf IP黑白名单最新版本删除接口
     */
    DeleteIpAccessControlV2(req: DeleteIpAccessControlV2Request, cb?: (error: string, rep: DeleteIpAccessControlV2Response) => void): Promise<DeleteIpAccessControlV2Response>;
    /**
     * 切换弹性的开关
     */
    SwitchElasticMode(req: SwitchElasticModeRequest, cb?: (error: string, rep: SwitchElasticModeResponse) => void): Promise<SwitchElasticModeResponse>;
    /**
     * 修改实例的自动续费开关
     */
    ModifyInstanceRenewFlag(req: ModifyInstanceRenewFlagRequest, cb?: (error: string, rep: ModifyInstanceRenewFlagResponse) => void): Promise<ModifyInstanceRenewFlagResponse>;
    /**
     * 获取用户防护规则等级
     */
    DescribeUserLevel(req: DescribeUserLevelRequest, cb?: (error: string, rep: DescribeUserLevelResponse) => void): Promise<DescribeUserLevelResponse>;
    /**
     * Waf  CC V2 Query接口
     */
    DescribeCCRule(req: DescribeCCRuleRequest, cb?: (error: string, rep: DescribeCCRuleResponse) => void): Promise<DescribeCCRuleResponse>;
    /**
     * 获取业务和攻击概览峰值
     */
    DescribePeakValue(req: DescribePeakValueRequest, cb?: (error: string, rep: DescribePeakValueResponse) => void): Promise<DescribePeakValueResponse>;
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    ModifyWafThreatenIntelligence(req: ModifyWafThreatenIntelligenceRequest, cb?: (error: string, rep: ModifyWafThreatenIntelligenceResponse) => void): Promise<ModifyWafThreatenIntelligenceResponse>;
    /**
     * 设置waf防护状态
     */
    ModifySpartaProtectionMode(req: ModifySpartaProtectionModeRequest, cb?: (error: string, rep: ModifySpartaProtectionModeResponse) => void): Promise<ModifySpartaProtectionModeResponse>;
    /**
     * 删除攻击日志下载任务记录
     */
    DeleteAttackDownloadRecord(req: DeleteAttackDownloadRecordRequest, cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void): Promise<DeleteAttackDownloadRecordResponse>;
    /**
     * 获取防护配置中的访问控制策略列表
     */
    DescribeCustomRuleList(req: DescribeCustomRuleListRequest, cb?: (error: string, rep: DescribeCustomRuleListResponse) => void): Promise<DescribeCustomRuleListResponse>;
    /**
     * 攻击总览
     */
    DescribeAttackOverview(req: DescribeAttackOverviewRequest, cb?: (error: string, rep: DescribeAttackOverviewResponse) => void): Promise<DescribeAttackOverviewResponse>;
    /**
     * 获取用户规则白名单列表
     */
    DescribeAttackWhiteRule(req: DescribeAttackWhiteRuleRequest, cb?: (error: string, rep: DescribeAttackWhiteRuleResponse) => void): Promise<DescribeAttackWhiteRuleResponse>;
    /**
     * clb-waf中获取防护域名列表
     */
    DescribeHosts(req: DescribeHostsRequest, cb?: (error: string, rep: DescribeHostsResponse) => void): Promise<DescribeHostsResponse>;
    /**
     * 添加SaaS型WAF防护域名
     */
    AddSpartaProtection(req: AddSpartaProtectionRequest, cb?: (error: string, rep: AddSpartaProtectionResponse) => void): Promise<AddSpartaProtectionResponse>;
    /**
     * 获取防护状态以及生效的实例id
     */
    DescribePolicyStatus(req: DescribePolicyStatusRequest, cb?: (error: string, rep: DescribePolicyStatusResponse) => void): Promise<DescribePolicyStatusResponse>;
    /**
     * Waf 会话定义查询接口
     */
    DescribeSession(req: DescribeSessionRequest, cb?: (error: string, rep: DescribeSessionResponse) => void): Promise<DescribeSessionResponse>;
    /**
     * 查询Top5的攻击域名
     */
    DescribeTopAttackDomain(req: DescribeTopAttackDomainRequest, cb?: (error: string, rep: DescribeTopAttackDomainResponse) => void): Promise<DescribeTopAttackDomainResponse>;
    /**
     * 编辑负载均衡型WAF防护域名配置
     */
    ModifyHost(req: ModifyHostRequest, cb?: (error: string, rep: ModifyHostResponse) => void): Promise<ModifyHostResponse>;
    /**
     * 查询Tiga引擎规则类型及状态
     */
    DescribeUserSignatureClass(req: DescribeUserSignatureClassRequest, cb?: (error: string, rep: DescribeUserSignatureClassResponse) => void): Promise<DescribeUserSignatureClassResponse>;
    /**
     * Bot_V2 bot总开关更新
     */
    ModifyBotStatus(req: ModifyBotStatusRequest, cb?: (error: string, rep: ModifyBotStatusResponse) => void): Promise<ModifyBotStatusResponse>;
    /**
     * 开启、关闭WAF开关
     */
    ModifyProtectionStatus(req: ModifyProtectionStatusRequest, cb?: (error: string, rep: ModifyProtectionStatusResponse) => void): Promise<ModifyProtectionStatusResponse>;
    /**
     * Saas型WAF接入查询加密套件信息
     */
    DescribeCiphersDetail(req?: DescribeCiphersDetailRequest, cb?: (error: string, rep: DescribeCiphersDetailResponse) => void): Promise<DescribeCiphersDetailResponse>;
    /**
     * 修改防护域名的地域封禁状态
     */
    ModifyAreaBanStatus(req: ModifyAreaBanStatusRequest, cb?: (error: string, rep: ModifyAreaBanStatusResponse) => void): Promise<ModifyAreaBanStatusResponse>;
    /**
     * Waf IP黑白名单编辑接口
     */
    ModifyIpAccessControl(req: ModifyIpAccessControlRequest, cb?: (error: string, rep: ModifyIpAccessControlResponse) => void): Promise<ModifyIpAccessControlResponse>;
    /**
     * 获取防篡改url
     */
    DescribeAntiFakeRules(req: DescribeAntiFakeRulesRequest, cb?: (error: string, rep: DescribeAntiFakeRulesResponse) => void): Promise<DescribeAntiFakeRulesResponse>;
    /**
     * 获取发现域名列表接口
     */
    DescribeFindDomainList(req: DescribeFindDomainListRequest, cb?: (error: string, rep: DescribeFindDomainListResponse) => void): Promise<DescribeFindDomainListResponse>;
    /**
     * 切换防篡改开关
     */
    ModifyAntiFakeUrlStatus(req: ModifyAntiFakeUrlStatusRequest, cb?: (error: string, rep: ModifyAntiFakeUrlStatusResponse) => void): Promise<ModifyAntiFakeUrlStatusResponse>;
    /**
     * 本接口用于访问日志柱状趋势图
     */
    DescribeAccessHistogram(req: DescribeAccessHistogramRequest, cb?: (error: string, rep: DescribeAccessHistogramResponse) => void): Promise<DescribeAccessHistogramResponse>;
    /**
     * 查询SaaS型WAF支持的TLS版本
     */
    DescribeTlsVersion(req?: DescribeTlsVersionRequest, cb?: (error: string, rep: DescribeTlsVersionResponse) => void): Promise<DescribeTlsVersionResponse>;
    /**
     * 编辑信息防泄漏规则
     */
    ModifyAntiInfoLeakRules(req: ModifyAntiInfoLeakRulesRequest, cb?: (error: string, rep: ModifyAntiInfoLeakRulesResponse) => void): Promise<ModifyAntiInfoLeakRulesResponse>;
    /**
     * Waf IP黑白名单新增接口
     */
    CreateIpAccessControl(req: CreateIpAccessControlRequest, cb?: (error: string, rep: CreateIpAccessControlResponse) => void): Promise<CreateIpAccessControlResponse>;
    /**
     * 添加防篡改url
     */
    AddAntiFakeUrl(req: AddAntiFakeUrlRequest, cb?: (error: string, rep: AddAntiFakeUrlResponse) => void): Promise<AddAntiFakeUrlResponse>;
    /**
     * 获取waf流量访问趋势
     */
    DescribeFlowTrend(req: DescribeFlowTrendRequest, cb?: (error: string, rep: DescribeFlowTrendResponse) => void): Promise<DescribeFlowTrendResponse>;
    /**
     * 查看防护对象列表
     */
    DescribeObjects(req: DescribeObjectsRequest, cb?: (error: string, rep: DescribeObjectsResponse) => void): Promise<DescribeObjectsResponse>;
    /**
     * 更改某一条规则
     */
    ModifyDomainWhiteRule(req: ModifyDomainWhiteRuleRequest, cb?: (error: string, rep: ModifyDomainWhiteRuleResponse) => void): Promise<ModifyDomainWhiteRuleResponse>;
    /**
     * 开启或禁用访问控制（自定义策略）
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 供用户控制台调用，删除Tiga规则引擎白名单。
     */
    DeleteAttackWhiteRule(req: DeleteAttackWhiteRuleRequest, cb?: (error: string, rep: DeleteAttackWhiteRuleResponse) => void): Promise<DeleteAttackWhiteRuleResponse>;
    /**
     * Waf ip黑白名单查询
     */
    DescribeIpAccessControl(req: DescribeIpAccessControlRequest, cb?: (error: string, rep: DescribeIpAccessControlResponse) => void): Promise<DescribeIpAccessControlResponse>;
    /**
     * 供用户控制台调用，增加Tiga规则引擎白名单。
     */
    AddAttackWhiteRule(req: AddAttackWhiteRuleRequest, cb?: (error: string, rep: AddAttackWhiteRuleResponse) => void): Promise<AddAttackWhiteRuleResponse>;
    /**
     * 添加地域封禁中的地域信息
     */
    AddAreaBanAreas(req: AddAreaBanAreasRequest, cb?: (error: string, rep: AddAreaBanAreasResponse) => void): Promise<AddAreaBanAreasResponse>;
    /**
     * 获取域名概况
     */
    DescribeDomainCountInfo(req?: DescribeDomainCountInfoRequest, cb?: (error: string, rep: DescribeDomainCountInfoResponse) => void): Promise<DescribeDomainCountInfoResponse>;
    /**
     * SaaS型WAF删除防护域名
     */
    DeleteSpartaProtection(req: DeleteSpartaProtectionRequest, cb?: (error: string, rep: DeleteSpartaProtectionResponse) => void): Promise<DeleteSpartaProtectionResponse>;
    /**
     * 切换域名的规则开关
     */
    SwitchDomainRules(req: SwitchDomainRulesRequest, cb?: (error: string, rep: SwitchDomainRulesResponse) => void): Promise<SwitchDomainRulesResponse>;
    /**
     * Waf 批量防护IP黑白名单查询
     */
    DescribeBatchIpAccessControl(req: DescribeBatchIpAccessControlRequest, cb?: (error: string, rep: DescribeBatchIpAccessControlResponse) => void): Promise<DescribeBatchIpAccessControlResponse>;
    /**
     * 返回ip惩罚规则详细信息
     */
    DescribeWafAutoDenyRules(req: DescribeWafAutoDenyRulesRequest, cb?: (error: string, rep: DescribeWafAutoDenyRulesResponse) => void): Promise<DescribeWafAutoDenyRulesResponse>;
    /**
     * 增加访问控制（自定义策略）
     */
    AddCustomRule(req: AddCustomRuleRequest, cb?: (error: string, rep: AddCustomRuleResponse) => void): Promise<AddCustomRuleResponse>;
    /**
     * 获取域名的规则白名单
     */
    DescribeDomainWhiteRules(req: DescribeDomainWhiteRulesRequest, cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void): Promise<DescribeDomainWhiteRulesResponse>;
    /**
     * 设置域名的webshell状态。
     */
    ModifyWebshellStatus(req: ModifyWebshellStatusRequest, cb?: (error: string, rep: ModifyWebshellStatusResponse) => void): Promise<ModifyWebshellStatusResponse>;
    /**
     * 信息防泄漏切换规则开关
     */
    ModifyAntiInfoLeakRuleStatus(req: ModifyAntiInfoLeakRuleStatusRequest, cb?: (error: string, rep: ModifyAntiInfoLeakRuleStatusResponse) => void): Promise<ModifyAntiInfoLeakRuleStatusResponse>;
    /**
     * 刷新接入检查的结果，后台会生成接入检查任务
     */
    RefreshAccessCheckResult(req: RefreshAccessCheckResultRequest, cb?: (error: string, rep: RefreshAccessCheckResultResponse) => void): Promise<RefreshAccessCheckResultResponse>;
    /**
     * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
     */
    PostAttackDownloadTask(req: PostAttackDownloadTaskRequest, cb?: (error: string, rep: PostAttackDownloadTaskResponse) => void): Promise<PostAttackDownloadTaskResponse>;
    /**
     * 获取防护配置中的精准白名单策略列表
     */
    DescribeCustomWhiteRule(req: DescribeCustomWhiteRuleRequest, cb?: (error: string, rep: DescribeCustomWhiteRuleResponse) => void): Promise<DescribeCustomWhiteRuleResponse>;
    /**
     * clb-waf获取防护域名详情
     */
    DescribeHost(req: DescribeHostRequest, cb?: (error: string, rep: DescribeHostResponse) => void): Promise<DescribeHostResponse>;
    /**
     * 修改用户防护规则，开启关闭具体的某条规则
     */
    ModifyUserSignatureRuleV2(req: ModifyUserSignatureRuleV2Request, cb?: (error: string, rep: ModifyUserSignatureRuleV2Response) => void): Promise<ModifyUserSignatureRuleV2Response>;
    /**
     * 本接口用于获取访问日志导出列表
     */
    DescribeAccessExports(req: DescribeAccessExportsRequest, cb?: (error: string, rep: DescribeAccessExportsResponse) => void): Promise<DescribeAccessExportsResponse>;
    /**
     * 添加域名的首先验证是否购买了套餐，是否没有达到购买套餐的限制，域名是否已经添加
     */
    DescribeHostLimit(req: DescribeHostLimitRequest, cb?: (error: string, rep: DescribeHostLimitResponse) => void): Promise<DescribeHostLimitResponse>;
    /**
     * 获取套餐实例的弹性qps上限
     */
    GetInstanceQpsLimit(req: GetInstanceQpsLimitRequest, cb?: (error: string, rep: GetInstanceQpsLimitResponse) => void): Promise<GetInstanceQpsLimitResponse>;
    /**
     * 获取地域封禁规则配置
     */
    DescribeAreaBanRule(req: DescribeAreaBanRuleRequest, cb?: (error: string, rep: DescribeAreaBanRuleResponse) => void): Promise<DescribeAreaBanRuleResponse>;
    /**
     * 本接口用于删除访问日志导出
     */
    DeleteAccessExport(req: DeleteAccessExportRequest, cb?: (error: string, rep: DeleteAccessExportResponse) => void): Promise<DeleteAccessExportResponse>;
    /**
     * 删除域名规则白名单
     */
    DeleteDomainWhiteRules(req: DeleteDomainWhiteRulesRequest, cb?: (error: string, rep: DeleteDomainWhiteRulesResponse) => void): Promise<DeleteDomainWhiteRulesResponse>;
    /**
     * 获取添加域名操作的结果
     */
    DescribeDomainVerifyResult(req: DescribeDomainVerifyResultRequest, cb?: (error: string, rep: DescribeDomainVerifyResultResponse) => void): Promise<DescribeDomainVerifyResultResponse>;
    /**
     * 本接口用于创建访问日志导出
     */
    CreateAccessExport(req: CreateAccessExportRequest, cb?: (error: string, rep: CreateAccessExportResponse) => void): Promise<CreateAccessExportResponse>;
    /**
     * 新版本CLS接口存在参数变化，query改成了query_string支持lucence语法接口搜索查询。
     */
    SearchAttackLog(req: SearchAttackLogRequest, cb?: (error: string, rep: SearchAttackLogResponse) => void): Promise<SearchAttackLogResponse>;
    /**
     * 查询用户所有实例的详细信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 供用户控制台调用，修改Tiga规则引擎白名单。
     */
    ModifyAttackWhiteRule(req: ModifyAttackWhiteRuleRequest, cb?: (error: string, rep: ModifyAttackWhiteRuleResponse) => void): Promise<ModifyAttackWhiteRuleResponse>;
    /**
     * 查询单个saaswaf域名详情
     */
    DescribeDomainDetailsSaas(req: DescribeDomainDetailsSaasRequest, cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void): Promise<DescribeDomainDetailsSaasResponse>;
    /**
     * 修改用户防护规则，开启关闭具体的某条规则
     */
    ModifyUserSignatureRule(req: ModifyUserSignatureRuleRequest, cb?: (error: string, rep: ModifyUserSignatureRuleResponse) => void): Promise<ModifyUserSignatureRuleResponse>;
    /**
     * 提供给clb等使用的waf实例下单接口，目前只支持clb旗舰版实例的下单，该接口会进行入参校验，然后调用是否为收购用户，然后调用计费接口下单。目前只支持预付费下单，计费侧接口：https://tcb.woa.com/magical-brush/docs/754661947
     */
    ModifyGenerateDeals(req: ModifyGenerateDealsRequest, cb?: (error: string, rep: ModifyGenerateDealsResponse) => void): Promise<ModifyGenerateDealsResponse>;
    /**
     * 修改实例的名称
     */
    ModifyInstanceName(req: ModifyInstanceNameRequest, cb?: (error: string, rep: ModifyInstanceNameResponse) => void): Promise<ModifyInstanceNameResponse>;
    /**
     * 设置某个domain下基础安全模块的开关
     */
    ModifyModuleStatus(req: ModifyModuleStatusRequest, cb?: (error: string, rep: ModifyModuleStatusResponse) => void): Promise<ModifyModuleStatusResponse>;
    /**
     * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserCdcClbWafRegions(req?: DescribeUserCdcClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserCdcClbWafRegionsResponse) => void): Promise<DescribeUserCdcClbWafRegionsResponse>;
    /**
     * 添加（编辑）地域封禁中的地域信息
     */
    ModifyAreaBanRule(req: ModifyAreaBanRuleRequest, cb?: (error: string, rep: ModifyAreaBanRuleResponse) => void): Promise<ModifyAreaBanRuleResponse>;
    /**
     * 废弃接口

描述WAF自动封禁模块详情
     */
    DescribeWafAutoDenyStatus(req?: DescribeWafAutoDenyStatusRequest, cb?: (error: string, rep: DescribeWafAutoDenyStatusResponse) => void): Promise<DescribeWafAutoDenyStatusResponse>;
    /**
     * 开启或禁用精准白名单
     */
    ModifyCustomWhiteRuleStatus(req: ModifyCustomWhiteRuleStatusRequest, cb?: (error: string, rep: ModifyCustomWhiteRuleStatusResponse) => void): Promise<ModifyCustomWhiteRuleStatusResponse>;
    /**
     * 获取Saas型WAF防护端口列表
     */
    DescribePorts(req: DescribePortsRequest, cb?: (error: string, rep: DescribePortsResponse) => void): Promise<DescribePortsResponse>;
    /**
     * clb-waf设置防护域名防护状态
     */
    ModifyHostMode(req: ModifyHostModeRequest, cb?: (error: string, rep: ModifyHostModeResponse) => void): Promise<ModifyHostModeResponse>;
    /**
     * 修改域名投递状态
     */
    ModifyDomainPostAction(req: ModifyDomainPostActionRequest, cb?: (error: string, rep: ModifyDomainPostActionResponse) => void): Promise<ModifyDomainPostActionResponse>;
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserClbWafRegions(req: DescribeUserClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void): Promise<DescribeUserClbWafRegionsResponse>;
    /**
     * Waf  CC V2 Upsert接口
     */
    UpsertCCRule(req: UpsertCCRuleRequest, cb?: (error: string, rep: UpsertCCRuleResponse) => void): Promise<UpsertCCRuleResponse>;
    /**
     * 修改防护对象
     */
    ModifyObject(req: ModifyObjectRequest, cb?: (error: string, rep: ModifyObjectResponse) => void): Promise<ModifyObjectResponse>;
    /**
     * 删除防篡改url
     */
    DeleteAntiFakeUrl(req: DeleteAntiFakeUrlRequest, cb?: (error: string, rep: DeleteAntiFakeUrlResponse) => void): Promise<DeleteAntiFakeUrlResponse>;
    /**
     * 根据多条件查询CC规则
     */
    DescribeCCRuleList(req: DescribeCCRuleListRequest, cb?: (error: string, rep: DescribeCCRuleListResponse) => void): Promise<DescribeCCRuleListResponse>;
    /**
     * Waf  CC V2 Delete接口
     */
    DeleteCCRule(req: DeleteCCRuleRequest, cb?: (error: string, rep: DeleteCCRuleResponse) => void): Promise<DeleteCCRuleResponse>;
    /**
     * clb-waf中添加防护域名
     */
    CreateHost(req: CreateHostRequest, cb?: (error: string, rep: CreateHostResponse) => void): Promise<CreateHostResponse>;
    /**
     * Waf  会话定义 Upsert接口
     */
    UpsertSession(req: UpsertSessionRequest, cb?: (error: string, rep: UpsertSessionResponse) => void): Promise<UpsertSessionResponse>;
    /**
     * 获取SAAS型接入的紧急CC防护状态
     */
    DescribeCCAutoStatus(req: DescribeCCAutoStatusRequest, cb?: (error: string, rep: DescribeCCAutoStatusResponse) => void): Promise<DescribeCCAutoStatusResponse>;
    /**
     * 获取用户特征规则列表
     */
    DescribeUserSignatureRule(req: DescribeUserSignatureRuleRequest, cb?: (error: string, rep: DescribeUserSignatureRuleResponse) => void): Promise<DescribeUserSignatureRuleResponse>;
    /**
     * 批量操作tiga子规则
     */
    BatchOperateUserSignatureRules(req: BatchOperateUserSignatureRulesRequest, cb?: (error: string, rep: BatchOperateUserSignatureRulesResponse) => void): Promise<BatchOperateUserSignatureRulesResponse>;
    /**
     * 刷新防篡改url
     */
    FreshAntiFakeUrl(req: FreshAntiFakeUrlRequest, cb?: (error: string, rep: FreshAntiFakeUrlResponse) => void): Promise<FreshAntiFakeUrlResponse>;
    /**
     * 拉取域名的防护规则列表
     */
    DescribeDomainRules(req: DescribeDomainRulesRequest, cb?: (error: string, rep: DescribeDomainRulesResponse) => void): Promise<DescribeDomainRulesResponse>;
    /**
     * api安全状态变更接口
     */
    ModifyApiSecEventChange(req: ModifyApiSecEventChangeRequest, cb?: (error: string, rep: ModifyApiSecEventChangeResponse) => void): Promise<ModifyApiSecEventChangeResponse>;
    /**
     * 增加域名规则白名单
     */
    AddDomainWhiteRule(req: AddDomainWhiteRuleRequest, cb?: (error: string, rep: AddDomainWhiteRuleResponse) => void): Promise<AddDomainWhiteRuleResponse>;
    /**
     * 切换ipv6开关
     */
    ModifyDomainIpv6Status(req: ModifyDomainIpv6StatusRequest, cb?: (error: string, rep: ModifyDomainIpv6StatusResponse) => void): Promise<ModifyDomainIpv6StatusResponse>;
    /**
     * 修改用户防护规则等级
     */
    ModifyUserLevel(req: ModifyUserLevelRequest, cb?: (error: string, rep: ModifyUserLevelResponse) => void): Promise<ModifyUserLevelResponse>;
}
