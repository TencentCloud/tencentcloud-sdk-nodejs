import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAccessExportRequest, DescribeWafAutoDenyRulesResponse, DescribeIpHitItemsResponse, DescribeUserClbWafRegionsResponse, DeleteAttackDownloadRecordResponse, DescribeFlowTrendRequest, DescribeWafAutoDenyStatusRequest, AddDomainWhiteRuleResponse, DescribeIpAccessControlResponse, ModifyDomainWhiteRuleRequest, DescribeAccessIndexRequest, DescribeCustomRulesResponse, DeleteSessionRequest, DescribeWafAutoDenyRulesRequest, AddCustomRuleResponse, DescribeFlowTrendResponse, UpsertIpAccessControlRequest, DeleteDownloadRecordRequest, DescribeAccessExportsRequest, ModifyAccessPeriodResponse, DeleteAccessExportResponse, DescribeAutoDenyIPResponse, SearchAccessLogResponse, DescribeAutoDenyIPRequest, DescribeIpAccessControlRequest, AddSpartaProtectionRequest, DescribeAccessFastAnalysisRequest, DeleteIpAccessControlRequest, DeleteDomainWhiteRulesResponse, CreateAttackDownloadTaskRequest, DescribeWafAutoDenyStatusResponse, DeleteDomainWhiteRulesRequest, ModifyCustomRuleStatusResponse, AddSpartaProtectionResponse, CreateAttackDownloadTaskResponse, DescribeDomainWhiteRulesRequest, ModifyCustomRuleStatusRequest, DeleteDownloadRecordResponse, ModifyAccessPeriodRequest, ModifyWafAutoDenyRulesResponse, DeleteIpAccessControlResponse, SearchAccessLogRequest, AddCustomRuleRequest, DescribeCustomRulesRequest, ModifyDomainWhiteRuleResponse, ModifyWafAutoDenyRulesRequest, DescribeAccessFastAnalysisResponse, DescribeDomainsResponse, ModifyWafAutoDenyStatusRequest, ModifyWafThreatenIntelligenceRequest, DescribeIpHitItemsRequest, DeleteAccessExportRequest, DescribeUserClbWafRegionsRequest, DescribeDomainWhiteRulesResponse, DeleteAttackDownloadRecordRequest, DescribeWafThreatenIntelligenceResponse, AddDomainWhiteRuleRequest, UpsertIpAccessControlResponse, DeleteSessionResponse, ModifyWafAutoDenyStatusResponse, DescribeWafThreatenIntelligenceRequest, DescribeAccessIndexResponse, DescribeAccessExportsResponse, CreateAccessExportResponse, DescribeDomainsRequest, ModifyWafThreatenIntelligenceResponse } from "./waf_models";
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
     * 获取防护配置中的自定义策略列表
     */
    DescribeCustomRules(req: DescribeCustomRulesRequest, cb?: (error: string, rep: DescribeCustomRulesResponse) => void): Promise<DescribeCustomRulesResponse>;
    /**
     * 开启或禁用自定义策略
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 本接口用于删除访问日志导出
     */
    DeleteAccessExport(req: DeleteAccessExportRequest, cb?: (error: string, rep: DeleteAccessExportResponse) => void): Promise<DeleteAccessExportResponse>;
    /**
     * 删除域名规则白名单


     */
    DeleteDomainWhiteRules(req: DeleteDomainWhiteRulesRequest, cb?: (error: string, rep: DeleteDomainWhiteRulesResponse) => void): Promise<DeleteDomainWhiteRulesResponse>;
    /**
     * 查询用户所有域名的详细信息
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    DescribeAccessIndex(req?: DescribeAccessIndexRequest, cb?: (error: string, rep: DescribeAccessIndexResponse) => void): Promise<DescribeAccessIndexResponse>;
    /**
     * 本接口用于创建访问日志导出
     */
    CreateAccessExport(req: CreateAccessExportRequest, cb?: (error: string, rep: CreateAccessExportResponse) => void): Promise<CreateAccessExportResponse>;
    /**
     * Waf IP黑白名单Delete接口
     */
    DeleteIpAccessControl(req: DeleteIpAccessControlRequest, cb?: (error: string, rep: DeleteIpAccessControlResponse) => void): Promise<DeleteIpAccessControlResponse>;
    /**
     * 配置WAF自动封禁模块状态
     */
    ModifyWafAutoDenyStatus(req: ModifyWafAutoDenyStatusRequest, cb?: (error: string, rep: ModifyWafAutoDenyStatusResponse) => void): Promise<ModifyWafAutoDenyStatusResponse>;
    /**
     * 本接口用于修改访问日志保存期限
     */
    ModifyAccessPeriod(req: ModifyAccessPeriodRequest, cb?: (error: string, rep: ModifyAccessPeriodResponse) => void): Promise<ModifyAccessPeriodResponse>;
    /**
     * 获取waf流量访问趋势
     */
    DescribeFlowTrend(req: DescribeFlowTrendRequest, cb?: (error: string, rep: DescribeFlowTrendResponse) => void): Promise<DescribeFlowTrendResponse>;
    /**
     * 创建攻击日志下载任务
     */
    CreateAttackDownloadTask(req: CreateAttackDownloadTaskRequest, cb?: (error: string, rep: CreateAttackDownloadTaskResponse) => void): Promise<CreateAttackDownloadTaskResponse>;
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
     * 增加自定义策略
     */
    AddCustomRule(req: AddCustomRuleRequest, cb?: (error: string, rep: AddCustomRuleResponse) => void): Promise<AddCustomRuleResponse>;
    /**
     * Waf ip黑白名单查询
     */
    DescribeIpAccessControl(req: DescribeIpAccessControlRequest, cb?: (error: string, rep: DescribeIpAccessControlResponse) => void): Promise<DescribeIpAccessControlResponse>;
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    ModifyWafThreatenIntelligence(req: ModifyWafThreatenIntelligenceRequest, cb?: (error: string, rep: ModifyWafThreatenIntelligenceResponse) => void): Promise<ModifyWafThreatenIntelligenceResponse>;
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
     * 删除访问日志下载记录
     */
    DeleteDownloadRecord(req: DeleteDownloadRecordRequest, cb?: (error: string, rep: DeleteDownloadRecordResponse) => void): Promise<DeleteDownloadRecordResponse>;
    /**
     * 删除CC攻击的session设置
     */
    DeleteSession(req: DeleteSessionRequest, cb?: (error: string, rep: DeleteSessionResponse) => void): Promise<DeleteSessionResponse>;
    /**
     * 获取域名的规则白名单


     */
    DescribeDomainWhiteRules(req: DescribeDomainWhiteRulesRequest, cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void): Promise<DescribeDomainWhiteRulesResponse>;
    /**
     * 添加Spart防护域名
     */
    AddSpartaProtection(req: AddSpartaProtectionRequest, cb?: (error: string, rep: AddSpartaProtectionResponse) => void): Promise<AddSpartaProtectionResponse>;
    /**
     * 描述WAF威胁情报封禁模块配置详情
     */
    DescribeWafThreatenIntelligence(req?: DescribeWafThreatenIntelligenceRequest, cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void): Promise<DescribeWafThreatenIntelligenceResponse>;
    /**
     * 本接口用于搜索WAF访问日志
     */
    SearchAccessLog(req: SearchAccessLogRequest, cb?: (error: string, rep: SearchAccessLogResponse) => void): Promise<SearchAccessLogResponse>;
    /**
     * Waf  IP封堵状态查询
     */
    DescribeIpHitItems(req: DescribeIpHitItemsRequest, cb?: (error: string, rep: DescribeIpHitItemsResponse) => void): Promise<DescribeIpHitItemsResponse>;
    /**
     * 增加域名规则白名单
     */
    AddDomainWhiteRule(req: AddDomainWhiteRuleRequest, cb?: (error: string, rep: AddDomainWhiteRuleResponse) => void): Promise<AddDomainWhiteRuleResponse>;
    /**
     * Waf IP黑白名单Upsert接口
     */
    UpsertIpAccessControl(req: UpsertIpAccessControlRequest, cb?: (error: string, rep: UpsertIpAccessControlResponse) => void): Promise<UpsertIpAccessControlResponse>;
}
