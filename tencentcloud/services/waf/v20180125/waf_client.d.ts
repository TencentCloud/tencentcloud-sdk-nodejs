import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAccessExportRequest, DescribeIpHitItemsResponse, DescribeUserCdcClbWafRegionsRequest, DeleteAttackDownloadRecordResponse, DescribeFlowTrendRequest, DescribeWafAutoDenyStatusRequest, AddCustomWhiteRuleResponse, DescribeCustomWhiteRuleResponse, DescribePeakValueResponse, AddDomainWhiteRuleResponse, DescribeIpAccessControlResponse, DescribeInstancesResponse, ModifyDomainWhiteRuleRequest, DescribePeakPointsRequest, DescribeAccessIndexRequest, DeleteSessionRequest, DescribeWafAutoDenyRulesRequest, SearchAttackLogRequest, DeleteCustomWhiteRuleResponse, AddCustomRuleResponse, DescribeFlowTrendResponse, GetAttackDownloadRecordsRequest, UpsertIpAccessControlRequest, DeleteDownloadRecordRequest, DescribeUserCdcClbWafRegionsResponse, DeleteAccessExportResponse, DescribeAccessExportsRequest, DescribeCustomWhiteRuleRequest, DescribeUserClbWafRegionsResponse, ModifyCustomWhiteRuleRequest, DeleteCustomWhiteRuleRequest, ModifyWafAutoDenyStatusRequest, ModifyAccessPeriodResponse, DescribeVipInfoRequest, DescribeAutoDenyIPResponse, SwitchDomainRulesResponse, SearchAccessLogResponse, CreateHostResponse, SwitchDomainRulesRequest, DescribeAutoDenyIPRequest, DescribeIpAccessControlRequest, CreateHostRequest, ModifyAreaBanStatusRequest, AddSpartaProtectionRequest, PostAttackDownloadTaskRequest, ModifyCustomWhiteRuleResponse, DescribePolicyStatusRequest, DescribeAccessFastAnalysisRequest, DeleteIpAccessControlRequest, DeleteDomainWhiteRulesResponse, DescribeAttackOverviewResponse, ModifyWafAutoDenyStatusResponse, DescribeWafAutoDenyStatusResponse, DeleteDomainWhiteRulesRequest, PostAttackDownloadTaskResponse, DescribeDomainDetailsSaasRequest, ModifyCustomRuleStatusResponse, AddSpartaProtectionResponse, DescribeDomainWhiteRulesRequest, ModifyCustomRuleStatusRequest, DescribePeakPointsResponse, DeleteDownloadRecordResponse, ModifyAccessPeriodRequest, DescribeAttackOverviewRequest, DescribePeakValueRequest, ModifyWafAutoDenyRulesResponse, SearchAttackLogResponse, DescribePolicyStatusResponse, DescribeInstancesRequest, DeleteIpAccessControlResponse, DescribeDomainDetailsSaasResponse, AddCustomRuleRequest, DescribeWafAutoDenyRulesResponse, ModifyAreaBanStatusResponse, ModifyDomainWhiteRuleResponse, ModifyWafAutoDenyRulesRequest, DescribeAccessFastAnalysisResponse, DescribeDomainsResponse, ModifyWafThreatenIntelligenceRequest, DescribeIpHitItemsRequest, DescribeVipInfoResponse, DescribeRuleLimitRequest, GetAttackDownloadRecordsResponse, DeleteAccessExportRequest, DescribeUserClbWafRegionsRequest, DescribeDomainWhiteRulesResponse, DescribeWafThreatenIntelligenceResponse, DeleteAttackDownloadRecordRequest, AddCustomWhiteRuleRequest, AddDomainWhiteRuleRequest, UpsertIpAccessControlResponse, DeleteSessionResponse, DescribeRuleLimitResponse, DescribeWafThreatenIntelligenceRequest, DescribeAccessIndexResponse, DescribeAccessExportsResponse, CreateAccessExportResponse, SearchAccessLogRequest, DescribeDomainsRequest, ModifyWafThreatenIntelligenceResponse } from "./waf_models";
/**
 * waf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于获取访问日志导出列表
     */
    DescribeAccessExports(req: DescribeAccessExportsRequest, cb?: (error: string, rep: DescribeAccessExportsResponse) => void): Promise<DescribeAccessExportsResponse>;
    /**
     * 查询业务和攻击概要趋势
     */
    DescribePeakPoints(req: DescribePeakPointsRequest, cb?: (error: string, rep: DescribePeakPointsResponse) => void): Promise<DescribePeakPointsResponse>;
    /**
     * 本接口用于删除访问日志导出
     */
    DeleteAccessExport(req: DeleteAccessExportRequest, cb?: (error: string, rep: DeleteAccessExportResponse) => void): Promise<DeleteAccessExportResponse>;
    /**
     * 删除域名规则白名单


     */
    DeleteDomainWhiteRules(req: DeleteDomainWhiteRulesRequest, cb?: (error: string, rep: DeleteDomainWhiteRulesResponse) => void): Promise<DeleteDomainWhiteRulesResponse>;
    /**
     * 修改防护域名的地域封禁状态
     */
    ModifyAreaBanStatus(req: ModifyAreaBanStatusRequest, cb?: (error: string, rep: ModifyAreaBanStatusResponse) => void): Promise<ModifyAreaBanStatusResponse>;
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
     * 本接口用于创建访问日志导出
     */
    CreateAccessExport(req: CreateAccessExportRequest, cb?: (error: string, rep: CreateAccessExportResponse) => void): Promise<CreateAccessExportResponse>;
    /**
     * 新版本CLS接口存在参数变化，query改成了query_string支持lucence语法接口搜索查询。
     */
    SearchAttackLog(req: SearchAttackLogRequest, cb?: (error: string, rep: SearchAttackLogResponse) => void): Promise<SearchAttackLogResponse>;
    /**
     * 查询单个saas域名详情
     */
    DescribeDomainDetailsSaas(req: DescribeDomainDetailsSaasRequest, cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void): Promise<DescribeDomainDetailsSaasResponse>;
    /**
     * 查询用户所有实例的详细信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * Waf IP黑白名单Delete接口
     */
    DeleteIpAccessControl(req: DeleteIpAccessControlRequest, cb?: (error: string, rep: DeleteIpAccessControlResponse) => void): Promise<DeleteIpAccessControlResponse>;
    /**
     * 配置WAF自动封禁模块状态
     */
    ModifyWafAutoDenyStatus(req: ModifyWafAutoDenyStatusRequest, cb?: (error: string, rep: ModifyWafAutoDenyStatusResponse) => void): Promise<ModifyWafAutoDenyStatusResponse>;
    /**
     * 本接口用于修改访问日志保存期限及大字段是否存储
     */
    ModifyAccessPeriod(req: ModifyAccessPeriodRequest, cb?: (error: string, rep: ModifyAccessPeriodResponse) => void): Promise<ModifyAccessPeriodResponse>;
    /**
     * 获取waf流量访问趋势
     */
    DescribeFlowTrend(req: DescribeFlowTrendRequest, cb?: (error: string, rep: DescribeFlowTrendResponse) => void): Promise<DescribeFlowTrendResponse>;
    /**
     * 根据过滤条件查询VIP信息
     */
    DescribeVipInfo(req: DescribeVipInfoRequest, cb?: (error: string, rep: DescribeVipInfoResponse) => void): Promise<DescribeVipInfoResponse>;
    /**
     * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserCdcClbWafRegions(req?: DescribeUserCdcClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserCdcClbWafRegionsResponse) => void): Promise<DescribeUserCdcClbWafRegionsResponse>;
    /**
     * 更改某一条规则
     */
    ModifyDomainWhiteRule(req: ModifyDomainWhiteRuleRequest, cb?: (error: string, rep: ModifyDomainWhiteRuleResponse) => void): Promise<ModifyDomainWhiteRuleResponse>;
    /**
     * 本接口用于访问日志的快速分析
     */
    DescribeAccessFastAnalysis(req: DescribeAccessFastAnalysisRequest, cb?: (error: string, rep: DescribeAccessFastAnalysisResponse) => void): Promise<DescribeAccessFastAnalysisResponse>;
    /**
     * 描述WAF自动封禁IP详情,对齐自动封堵状态
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
     * 开启或禁用访问控制（自定义策略）
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 获取业务和攻击概览峰值
     */
    DescribePeakValue(req: DescribePeakValueRequest, cb?: (error: string, rep: DescribePeakValueResponse) => void): Promise<DescribePeakValueResponse>;
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    ModifyWafThreatenIntelligence(req: ModifyWafThreatenIntelligenceRequest, cb?: (error: string, rep: ModifyWafThreatenIntelligenceResponse) => void): Promise<ModifyWafThreatenIntelligenceResponse>;
    /**
     * 增加精准白名单规则
     */
    AddCustomWhiteRule(req: AddCustomWhiteRuleRequest, cb?: (error: string, rep: AddCustomWhiteRuleResponse) => void): Promise<AddCustomWhiteRuleResponse>;
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
     * 获取域名的规则白名单
     */
    DescribeDomainWhiteRules(req: DescribeDomainWhiteRulesRequest, cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void): Promise<DescribeDomainWhiteRulesResponse>;
    /**
     * 获取各个模块具体的规格限制
     */
    DescribeRuleLimit(req: DescribeRuleLimitRequest, cb?: (error: string, rep: DescribeRuleLimitResponse) => void): Promise<DescribeRuleLimitResponse>;
    /**
     * 添加Spart防护域名
     */
    AddSpartaProtection(req: AddSpartaProtectionRequest, cb?: (error: string, rep: AddSpartaProtectionResponse) => void): Promise<AddSpartaProtectionResponse>;
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    DescribeWafThreatenIntelligence(req?: DescribeWafThreatenIntelligenceRequest, cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void): Promise<DescribeWafThreatenIntelligenceResponse>;
    /**
     * 获取防护状态以及生效的实例id
     */
    DescribePolicyStatus(req: DescribePolicyStatusRequest, cb?: (error: string, rep: DescribePolicyStatusResponse) => void): Promise<DescribePolicyStatusResponse>;
    /**
     * Waf  IP封堵状态查询
     */
    DescribeIpHitItems(req: DescribeIpHitItemsRequest, cb?: (error: string, rep: DescribeIpHitItemsResponse) => void): Promise<DescribeIpHitItemsResponse>;
    /**
     * 增加域名规则白名单
     */
    AddDomainWhiteRule(req: AddDomainWhiteRuleRequest, cb?: (error: string, rep: AddDomainWhiteRuleResponse) => void): Promise<AddDomainWhiteRuleResponse>;
    /**
     * 切换域名的规则开关
     */
    SwitchDomainRules(req: SwitchDomainRulesRequest, cb?: (error: string, rep: SwitchDomainRulesResponse) => void): Promise<SwitchDomainRulesResponse>;
    /**
     * 获取防护配置中的精准白名单策略列表
     */
    DescribeCustomWhiteRule(req: DescribeCustomWhiteRuleRequest, cb?: (error: string, rep: DescribeCustomWhiteRuleResponse) => void): Promise<DescribeCustomWhiteRuleResponse>;
    /**
     * Waf IP黑白名单Upsert接口
     */
    UpsertIpAccessControl(req: UpsertIpAccessControlRequest, cb?: (error: string, rep: UpsertIpAccessControlResponse) => void): Promise<UpsertIpAccessControlResponse>;
}
