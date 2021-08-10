import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAccessFastAnalysisResponse, CreateAccessExportRequest, ModifyCustomRuleStatusResponse, DescribeUserClbWafRegionsResponse, DeleteAttackDownloadRecordResponse, ModifyAccessPeriodResponse, DescribeAccessExportsResponse, DescribeFlowTrendRequest, ModifyCustomRuleStatusRequest, SearchAccessLogResponse, DeleteDownloadRecordResponse, DeleteAccessExportRequest, ModifyAccessPeriodRequest, DescribeUserClbWafRegionsRequest, DeleteAttackDownloadRecordRequest, DescribeAccessIndexRequest, DescribeAccessFastAnalysisRequest, DeleteSessionResponse, DeleteSessionRequest, DescribeAccessExportsRequest, DescribeAccessIndexResponse, CreateAttackDownloadTaskResponse, CreateAccessExportResponse, AddCustomRuleResponse, AddCustomRuleRequest, DescribeCustomRulesResponse, DescribeFlowTrendResponse, DescribeCustomRulesRequest, DeleteDownloadRecordRequest, DeleteAccessExportResponse, CreateAttackDownloadTaskRequest, SearchAccessLogRequest } from "./waf_models";
/**
 * waf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除攻击日志下载任务记录
     */
    DeleteAttackDownloadRecord(req: DeleteAttackDownloadRecordRequest, cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void): Promise<DeleteAttackDownloadRecordResponse>;
    /**
     * 开启或禁用自定义策略
     */
    ModifyCustomRuleStatus(req: ModifyCustomRuleStatusRequest, cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void): Promise<ModifyCustomRuleStatusResponse>;
    /**
     * 本接口用于获取访问日志导出列表
     */
    DescribeAccessExports(req: DescribeAccessExportsRequest, cb?: (error: string, rep: DescribeAccessExportsResponse) => void): Promise<DescribeAccessExportsResponse>;
    /**
     * 获取防护配置中的自定义策略列表
     */
    DescribeCustomRules(req: DescribeCustomRulesRequest, cb?: (error: string, rep: DescribeCustomRulesResponse) => void): Promise<DescribeCustomRulesResponse>;
    /**
     * 删除访问日志下载记录
     */
    DeleteDownloadRecord(req: DeleteDownloadRecordRequest, cb?: (error: string, rep: DeleteDownloadRecordResponse) => void): Promise<DeleteDownloadRecordResponse>;
    /**
     * 增加自定义策略
     */
    AddCustomRule(req: AddCustomRuleRequest, cb?: (error: string, rep: AddCustomRuleResponse) => void): Promise<AddCustomRuleResponse>;
    /**
     * 删除CC攻击的session设置
     */
    DeleteSession(req: DeleteSessionRequest, cb?: (error: string, rep: DeleteSessionResponse) => void): Promise<DeleteSessionResponse>;
    /**
     * 本接口用于搜索WAF访问日志
     */
    SearchAccessLog(req: SearchAccessLogRequest, cb?: (error: string, rep: SearchAccessLogResponse) => void): Promise<SearchAccessLogResponse>;
    /**
     * 本接口用于删除访问日志导出
     */
    DeleteAccessExport(req: DeleteAccessExportRequest, cb?: (error: string, rep: DeleteAccessExportResponse) => void): Promise<DeleteAccessExportResponse>;
    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     */
    DescribeUserClbWafRegions(req?: DescribeUserClbWafRegionsRequest, cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void): Promise<DescribeUserClbWafRegionsResponse>;
    /**
     * 本接口用于修改访问日志保存期限
     */
    ModifyAccessPeriod(req: ModifyAccessPeriodRequest, cb?: (error: string, rep: ModifyAccessPeriodResponse) => void): Promise<ModifyAccessPeriodResponse>;
    /**
     * 获取waf流量访问趋势
     */
    DescribeFlowTrend(req: DescribeFlowTrendRequest, cb?: (error: string, rep: DescribeFlowTrendResponse) => void): Promise<DescribeFlowTrendResponse>;
    /**
     * 本接口用于访问日志的快速分析
     */
    DescribeAccessFastAnalysis(req?: DescribeAccessFastAnalysisRequest, cb?: (error: string, rep: DescribeAccessFastAnalysisResponse) => void): Promise<DescribeAccessFastAnalysisResponse>;
    /**
     * 本接口用于获取访问日志索引配置信息
     */
    DescribeAccessIndex(req?: DescribeAccessIndexRequest, cb?: (error: string, rep: DescribeAccessIndexResponse) => void): Promise<DescribeAccessIndexResponse>;
    /**
     * 本接口用于创建访问日志导出
     */
    CreateAccessExport(req: CreateAccessExportRequest, cb?: (error: string, rep: CreateAccessExportResponse) => void): Promise<CreateAccessExportResponse>;
    /**
     * 创建攻击日志下载任务
     */
    CreateAttackDownloadTask(req: CreateAttackDownloadTaskRequest, cb?: (error: string, rep: CreateAttackDownloadTaskResponse) => void): Promise<CreateAttackDownloadTaskResponse>;
}
