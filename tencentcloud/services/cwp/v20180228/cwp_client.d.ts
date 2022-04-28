import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ExportBashEventsRequest, DescribeSearchTemplatesResponse, ExportReverseShellEventsResponse, DescribeBaselineTopResponse, DescribeAssetWebServiceInfoListResponse, DescribeAssetAppProcessListResponse, ScanVulAgainRequest, DeleteBaselineStrategyResponse, ExportWebPageEventListResponse, DescribeUndoVulCountsResponse, DescribeBaselineScanScheduleResponse, DeleteBashEventsResponse, DescribeAssetProcessInfoListRequest, ExportWebPageEventListRequest, DescribeAssetWebFrameListRequest, DescribeMonthInspectionReportResponse, DescribeSaveOrUpdateWarningsResponse, DescribeBaselineHostTopResponse, DeleteBashRulesResponse, ExportVulListResponse, DescribeHistoryServiceResponse, ModifyWebPageProtectSettingResponse, DescribeVulInfoCvssResponse, DescribeBaselineStrategyDetailRequest, DescribeAssetUserInfoResponse, ExportAttackLogsResponse, DescribeBaselineEffectHostListResponse, TrustMalwaresRequest, ExportVulEffectHostListRequest, DescribeBaselineBasicInfoRequest, DescribeProVersionInfoRequest, DescribeVulCountByDatesRequest, DescribeBaselineStrategyListResponse, DescribeAssetEnvListResponse, DescribeAttackLogInfoResponse, DescribePrivilegeEventsResponse, DescribeOverviewStatisticsResponse, DescribeMonthInspectionReportRequest, DescribeBashRulesResponse, DescribeAvailableExpertServiceDetailResponse, ChangeRuleEventsIgnoreStatusRequest, DescribeWebPageEventListRequest, ExportAssetCoreModuleListRequest, DescribeComponentStatisticsResponse, DescribeMachineRegionsRequest, DescribeSearchExportListResponse, DescribeAvailableExpertServiceDetailRequest, DescribeServerRelatedDirInfoResponse, DescribeUsualLoginPlacesResponse, DescribeBaselineBasicInfoResponse, EditBashRulesResponse, ScanVulResponse, DescribeOverviewStatisticsRequest, DescribeTagMachinesRequest, ModifyAutoOpenProVersionConfigRequest, DeletePrivilegeEventsRequest, ExportAttackLogsRequest, DescribeBanModeRequest, DescribeSecurityEventStatRequest, DeleteSearchTemplateRequest, ExportReverseShellEventsRequest, DeleteLoginWhiteListResponse, DescribeAttackLogsResponse, DeleteMalwaresResponse, DescribeAssetInitServiceListRequest, ScanVulAgainResponse, SeparateMalwaresResponse, DescribeTagsRequest, DescribeRiskDnsListRequest, DescribeStrategyExistRequest, DescribeSecurityDynamicsRequest, CheckBashRuleParamsRequest, DescribeIgnoreBaselineRuleRequest, ExportNonlocalLoginPlacesResponse, DescribeAssetJarListResponse, ExportMaliciousRequestsRequest, DescribeWebPageProtectStatRequest, ExportVulDetectionReportRequest, ExportMalwaresResponse, DescribeScanVulSettingRequest, DescribeESHitsRequest, DescribeAssetPlanTaskListResponse, DescribeBaselineRuleRequest, DescribeHistoryAccountsRequest, DescribeAssetMachineDetailRequest, CancelIgnoreVulResponse, IgnoreImpactedHostsResponse, DescribeAssetMachineDetailResponse, DescribeStrategyExistResponse, DeleteReverseShellEventsRequest, DescribeBanRegionsRequest, DescribeServersAndRiskAndFirstInfoRequest, DescribeAssetWebServiceProcessListResponse, IgnoreImpactedHostsRequest, DescribeMachinesRequest, DescribeVulEffectHostListRequest, DeletePrivilegeRulesRequest, DescribeMalwareInfoRequest, DescribeVersionStatisticsRequest, ExportPrivilegeEventsResponse, DescribeReverseShellEventsRequest, DescribeAttackVulTypeListRequest, DescribeLogStorageStatisticRequest, DescribeAssetRecentMachineInfoRequest, CheckBashRuleParamsResponse, ExportBaselineListRequest, DeleteProtectDirRequest, ExportIgnoreBaselineRuleResponse, DescribeBanStatusResponse, DescribeVulListRequest, DescribeServersAndRiskAndFirstInfoResponse, DescribePrivilegeRulesRequest, DescribeAssetSystemPackageListResponse, DescribeAssetMachineListResponse, DescribeWebPageGeneralizeRequest, ModifyWarningSettingRequest, DescribeMalwareRiskWarningRequest, DescribeAssetInfoRequest, DescribeVulTopResponse, UntrustMalwaresRequest, DescribeAssetAppListRequest, UntrustMalwaresResponse, DescribeExpertServiceListResponse, DescribeAccountStatisticsResponse, DescribeSearchExportListRequest, ScanAssetRequest, DescribeBaselineRuleResponse, DeleteMaliciousRequestsResponse, DescribeESHitsResponse, ExportBruteAttacksRequest, DeleteMachineResponse, ScanVulRequest, RecoverMalwaresRequest, DescribeAssetCoreModuleInfoResponse, DescribeAssetEnvListRequest, StopNoticeBanTipsRequest, DescribeScanMalwareScheduleRequest, DescribeBashEventsResponse, UpdateMachineTagsResponse, DescribeBashEventsRequest, DeleteMachineRequest, DescribeAssetWebLocationListResponse, DescribeAssetJarListRequest, DescribeProtectNetListResponse, DescribeESAggregationsResponse, ChangeRuleEventsIgnoreStatusResponse, DeletePrivilegeRulesResponse, CreateProtectServerRequest, DescribeMachineListRequest, CreateEmergencyVulScanResponse, DescribeAssetCoreModuleInfoRequest, DescribeIndexListResponse, ModifyWebPageProtectDirRequest, DescribeWebPageGeneralizeResponse, DescribeBanWhiteListResponse, DescribeOpenPortStatisticsResponse, DeleteAttackLogsResponse, DescribeMalWareListRequest, DescribeProVersionInfoResponse, DeleteTagsResponse, DescribeSecurityEventsCntRequest, DescribeMachineOsListResponse, ExportMaliciousRequestsResponse, DescribeVulCountByDatesResponse, DescribeTagMachinesResponse, DescribeIndexListRequest, DeleteBashRulesRequest, CreateProtectServerResponse, DescribeExpertServiceListRequest, DescribeBaselineHostTopRequest, ExportBaselineEffectHostListResponse, DescribeVulHostTopResponse, TrustMalwaresResponse, DescribeHistoryServiceRequest, DescribeWarningListRequest, SyncAssetScanRequest, DescribeServerRelatedDirInfoRequest, DescribeESAggregationsRequest, DescribeReverseShellRulesResponse, DescribeBruteAttackListRequest, DescribeVulListResponse, DescribeUndoVulCountsRequest, ScanAssetResponse, DescribeMalwareFileRequest, DeleteMaliciousRequestsRequest, DescribeBanWhiteListRequest, DescribeWebPageServiceInfoResponse, DescribeUsualLoginPlacesRequest, SwitchBashRulesRequest, DescribeProcessStatisticsRequest, DescribeAssetInfoResponse, ExportProtectDirListResponse, ExportTasksRequest, DescribeAssetWebLocationInfoResponse, ModifyBruteAttackRulesRequest, ExportVulListRequest, DescribeBaselineScanScheduleRequest, DescribeEmergencyVulListResponse, DescribeAssetUserListResponse, DeleteMalwaresRequest, RecoverMalwaresResponse, DescribeReverseShellRulesRequest, DescribeScanVulSettingResponse, DescribeAssetDatabaseInfoResponse, SetBashEventsStatusRequest, DescribeBaselineStrategyListRequest, DescribeAttackLogsRequest, ExportAssetWebServiceInfoListRequest, SetBashEventsStatusResponse, DescribeAssetUserInfoRequest, DescribeProtectDirListRequest, ExportPrivilegeEventsRequest, DescribeMalwareFileResponse, DescribeRiskDnsListResponse, DescribeAssetWebAppListResponse, DescribeScanTaskStatusRequest, ExportIgnoreBaselineRuleRequest, DeleteMachineTagRequest, DescribeBaselineDetailRequest, DescribeExportMachinesResponse, DescribeScanTaskStatusResponse, DescribeProtectNetListRequest, DescribeWebPageEventListResponse, DeleteProtectDirResponse, ModifyBanStatusRequest, DescribeWebPageServiceInfoRequest, DescribeLogStorageStatisticResponse, DescribeEmergencyResponseListRequest, DescribeScanStateResponse, EditTagsRequest, DeleteReverseShellRulesRequest, DescribeBaselineEffectHostListRequest, ExportSecurityTrendsRequest, DescribeAssetDatabaseInfoRequest, DescribeOpenPortStatisticsRequest, ExportAssetWebServiceInfoListResponse, ExportSecurityTrendsResponse, ModifyMalwareTimingScanSettingsResponse, DeleteNonlocalLoginPlacesResponse, ModifyWebPageProtectSettingRequest, DeleteMalwareScanTaskResponse, DescribeBaselineDetailResponse, ExportIgnoreRuleEffectHostListResponse, DescribeAssetWebAppPluginListRequest, DeletePrivilegeEventsResponse, DescribeMachineInfoResponse, DescribeImportMachineInfoRequest, DescribeVulEffectHostListResponse, SwitchBashRulesResponse, DescribeSearchLogsRequest, DescribeAttackLogInfoRequest, ScanVulSettingResponse, DescribeAssetJarInfoResponse, DescribeVulInfoCvssRequest, DescribeComponentStatisticsRequest, DescribeMaliciousRequestWhiteListRequest, ModifyBanStatusResponse, DescribeLoginWhiteListResponse, StopNoticeBanTipsResponse, DescribeScanMalwareScheduleResponse, DescribeMalwareTimingScanSettingRequest, CreateSearchLogResponse, DescribeSecurityTrendsResponse, DescribeEmergencyVulListRequest, DescribeSecurityDynamicsResponse, DeleteReverseShellEventsResponse, DescribeProVersionStatusResponse, DescribeScanTaskDetailsResponse, DescribeGeneralStatRequest, UpdateBaselineStrategyResponse, DescribeVulHostTopRequest, DescribeIgnoreRuleEffectHostListRequest, ModifyWarningSettingResponse, DescribeMalwareInfoResponse, DescribeAssetJarInfoRequest, DescribePrivilegeEventsRequest, DescribeVulHostCountScanTimeRequest, ExportScanTaskDetailsResponse, ExportBashEventsResponse, DeleteLoginWhiteListRequest, DeleteWebPageEventLogResponse, DescribeVulLevelCountResponse, DescribeVersionStatisticsResponse, DescribeBruteAttackRulesRequest, DescribeProcessStatisticsResponse, ModifyBruteAttackRulesResponse, DeleteNonlocalLoginPlacesRequest, DescribeAssetWebAppPluginListResponse, DescribeTagsResponse, DescribeLoginWhiteCombinedListRequest, DeleteSearchTemplateResponse, DescribeBanRegionsResponse, DescribeEmergencyResponseListResponse, DescribeAssetAppListResponse, ModifyWebPageProtectSwitchRequest, CreateScanMalwareSettingRequest, DescribeMalwareTimingScanSettingResponse, DescribeHostLoginListRequest, DescribeAssetWebServiceProcessListRequest, ExportVulDetectionExcelRequest, CreateEmergencyVulScanRequest, DescribeProtectDirRelatedServerResponse, ModifyAutoOpenProVersionConfigResponse, ExportBaselineEffectHostListRequest, DescribeBanStatusRequest, DescribeAssetRecentMachineInfoResponse, DescribeMalWareListResponse, DescribeAssetPortInfoListResponse, DescribeProtectDirListResponse, DescribeMaliciousRequestWhiteListResponse, DeleteBruteAttacksResponse, ExportTasksResponse, DescribeIgnoreBaselineRuleResponse, DescribeMachineOsListRequest, DescribeMalwareRiskWarningResponse, DescribeBashRulesRequest, DescribeBanModeResponse, DescribeImportMachineInfoResponse, DescribeSecurityEventStatResponse, DescribeAssetDatabaseListRequest, ModifyWebPageProtectSwitchResponse, DescribeAssetMachineListRequest, CreateSearchTemplateResponse, DescribeAssetDatabaseListResponse, ExportMalwaresRequest, ExportNonlocalLoginPlacesRequest, SyncAssetScanResponse, CreateBaselineStrategyRequest, DescribeSecurityTrendsRequest, DescribeAttackVulTypeListResponse, DescribePrivilegeRulesResponse, DescribeReverseShellEventsResponse, DescribeWebPageProtectStatResponse, DescribeAssetPortInfoListRequest, DescribeExportMachinesRequest, CreateScanMalwareSettingResponse, DeleteMalwareScanTaskRequest, DescribeIgnoreRuleEffectHostListResponse, ExportProtectDirListRequest, CreateBaselineStrategyResponse, ExportAssetCoreModuleListResponse, DescribeHistoryAccountsResponse, DescribeLoginWhiteListRequest, ExportVulDetectionReportResponse, DescribeScanScheduleRequest, EditBashRulesRequest, DescribeBruteAttackListResponse, ScanVulSettingRequest, ExportScanTaskDetailsRequest, ExportBaselineListResponse, DescribeBruteAttackRulesResponse, ModifyBanModeResponse, DeleteBruteAttacksRequest, DescribeAssetCoreModuleListResponse, DescribeLoginWhiteCombinedListResponse, ExportVulDetectionExcelResponse, DescribeWarningListResponse, CreateSearchTemplateRequest, DeleteTagsRequest, DescribeScanStateRequest, ModifyMalwareTimingScanSettingsRequest, DescribeMachineListResponse, DescribeExpertServiceOrderListResponse, DeleteReverseShellRulesResponse, DescribeAssetPlanTaskListRequest, DescribeScanTaskDetailsRequest, DescribeProtectDirRelatedServerRequest, DescribeSearchLogsResponse, DescribeBaselineAnalysisDataResponse, ModifyBanModeRequest, DescribeMachineRegionsResponse, DeleteBashEventsRequest, SeparateMalwaresRequest, ExportIgnoreRuleEffectHostListRequest, DescribeVulHostCountScanTimeResponse, DescribeAssetCoreModuleListRequest, DeleteAttackLogsRequest, DescribeBaselineStrategyDetailResponse, DescribeBaselineListRequest, DescribeBaselineTopRequest, DescribeAssetAppProcessListRequest, DescribeAccountStatisticsRequest, ExportBruteAttacksResponse, DescribeSaveOrUpdateWarningsRequest, DescribeAssetProcessInfoListResponse, DescribeScanScheduleResponse, ModifyWebPageProtectDirResponse, DescribeAssetWebAppListRequest, DescribeMachinesResponse, DescribeAssetWebLocationListRequest, DescribeVulLevelCountRequest, DeleteWebPageEventLogRequest, DescribeProVersionStatusRequest, DescribeBaselineListResponse, DescribeExpertServiceOrderListRequest, ExportVulEffectHostListResponse, DescribeVulTopRequest, DescribeMachineInfoRequest, DescribeGeneralStatResponse, EditTagsResponse, DeleteMachineTagResponse, DescribeSecurityEventsCntResponse, UpdateMachineTagsRequest, UpdateBaselineStrategyRequest, DescribeHostLoginListResponse, DescribeBaselineAnalysisDataRequest, DescribeAssetWebLocationInfoRequest, DescribeAssetInitServiceListResponse, DescribeAssetWebFrameListResponse, DescribeAssetUserListRequest, DeleteBaselineStrategyRequest, DescribeAssetSystemPackageListRequest, DescribeAssetWebServiceInfoListRequest, CreateSearchLogRequest, DescribeSearchTemplatesRequest, CancelIgnoreVulRequest } from "./cwp_models";
/**
 * cwp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除标签
     */
    DeleteTags(req: DeleteTagsRequest, cb?: (error: string, rep: DeleteTagsResponse) => void): Promise<DeleteTagsResponse>;
    /**
     * 新增或编辑标签
     */
    EditTags(req: EditTagsRequest, cb?: (error: string, rep: EditTagsResponse) => void): Promise<EditTagsResponse>;
    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     */
    TrustMalwares(req: TrustMalwaresRequest, cb?: (error: string, rep: TrustMalwaresResponse) => void): Promise<TrustMalwaresResponse>;
    /**
     * 获取资产管理端口列表
     */
    DescribeAssetPortInfoList(req: DescribeAssetPortInfoListRequest, cb?: (error: string, rep: DescribeAssetPortInfoListResponse) => void): Promise<DescribeAssetPortInfoListResponse>;
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     */
    DescribeComponentStatistics(req: DescribeComponentStatisticsRequest, cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void): Promise<DescribeComponentStatisticsResponse>;
    /**
     * 根据taskid查询检测进度
     */
    DescribeScanSchedule(req: DescribeScanScheduleRequest, cb?: (error: string, rep: DescribeScanScheduleResponse) => void): Promise<DescribeScanScheduleResponse>;
    /**
     * 删除服务器关联的标签
     */
    DeleteMachineTag(req: DeleteMachineTagRequest, cb?: (error: string, rep: DeleteMachineTagResponse) => void): Promise<DeleteMachineTagResponse>;
    /**
     * 按分页形式展示网络攻击日志列表
     */
    DescribeAttackLogs(req: DescribeAttackLogsRequest, cb?: (error: string, rep: DescribeAttackLogsResponse) => void): Promise<DescribeAttackLogsResponse>;
    /**
     * 导出ES查询文档列表
     */
    DescribeSearchExportList(req: DescribeSearchExportListRequest, cb?: (error: string, rep: DescribeSearchExportListResponse) => void): Promise<DescribeSearchExportListResponse>;
    /**
     * 查询资产管理计划任务列表
     */
    DescribeAssetPlanTaskList(req: DescribeAssetPlanTaskListRequest, cb?: (error: string, rep: DescribeAssetPlanTaskListResponse) => void): Promise<DescribeAssetPlanTaskListResponse>;
    /**
     * 获取爆破阻断模式
     */
    DescribeBanMode(req?: DescribeBanModeRequest, cb?: (error: string, rep: DescribeBanModeResponse) => void): Promise<DescribeBanModeResponse>;
    /**
     * 根据检测项id或事件id批量忽略事件或取消忽略
     */
    ChangeRuleEventsIgnoreStatus(req: ChangeRuleEventsIgnoreStatusRequest, cb?: (error: string, rep: ChangeRuleEventsIgnoreStatusResponse) => void): Promise<ChangeRuleEventsIgnoreStatusResponse>;
    /**
     * 获取资产管理系统安装包列表
     */
    DescribeAssetSystemPackageList(req: DescribeAssetSystemPackageListRequest, cb?: (error: string, rep: DescribeAssetSystemPackageListResponse) => void): Promise<DescribeAssetSystemPackageListResponse>;
    /**
     * 获取资产管理Web应用插件列表
     */
    DescribeAssetWebAppPluginList(req: DescribeAssetWebAppPluginListRequest, cb?: (error: string, rep: DescribeAssetWebAppPluginListResponse) => void): Promise<DescribeAssetWebAppPluginListResponse>;
    /**
     * 删除检索模板
     */
    DeleteSearchTemplate(req: DeleteSearchTemplateRequest, cb?: (error: string, rep: DeleteSearchTemplateResponse) => void): Promise<DeleteSearchTemplateResponse>;
    /**
     * 校验高危命令用户规则新增和编辑时的参数。
     */
    CheckBashRuleParams(req: CheckBashRuleParamsRequest, cb?: (error: string, rep: CheckBashRuleParamsResponse) => void): Promise<CheckBashRuleParamsResponse>;
    /**
     * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
     */
    DescribeScanTaskDetails(req: DescribeScanTaskDetailsRequest, cb?: (error: string, rep: DescribeScanTaskDetailsResponse) => void): Promise<DescribeScanTaskDetailsResponse>;
    /**
     * 查询服务区关联目录详情
     */
    DescribeServerRelatedDirInfo(req: DescribeServerRelatedDirInfoRequest, cb?: (error: string, rep: DescribeServerRelatedDirInfoResponse) => void): Promise<DescribeServerRelatedDirInfoResponse>;
    /**
     * 根据策略信息创建基线策略
     */
    CreateBaselineStrategy(req: CreateBaselineStrategyRequest, cb?: (error: string, rep: CreateBaselineStrategyResponse) => void): Promise<CreateBaselineStrategyResponse>;
    /**
     * 查询批量导入机器信息
     */
    DescribeImportMachineInfo(req: DescribeImportMachineInfoRequest, cb?: (error: string, rep: DescribeImportMachineInfoResponse) => void): Promise<DescribeImportMachineInfoResponse>;
    /**
     * 获取高危命令规则列表
     */
    DescribeBashRules(req: DescribeBashRulesRequest, cb?: (error: string, rep: DescribeBashRulesResponse) => void): Promise<DescribeBashRulesResponse>;
    /**
     * 获取历史搜索记录
     */
    DescribeSearchLogs(req?: DescribeSearchLogsRequest, cb?: (error: string, rep: DescribeSearchLogsResponse) => void): Promise<DescribeSearchLogsResponse>;
    /**
     * 根据Ids删除本地提权
     */
    DeletePrivilegeEvents(req: DeletePrivilegeEventsRequest, cb?: (error: string, rep: DeletePrivilegeEventsResponse) => void): Promise<DeletePrivilegeEventsResponse>;
    /**
     * 导出网络攻击日志
     */
    ExportAttackLogs(req: ExportAttackLogsRequest, cb?: (error: string, rep: ExportAttackLogsResponse) => void): Promise<ExportAttackLogsResponse>;
    /**
     * 接口返回TopN的风险服务器
     */
    DescribeBaselineHostTop(req: DescribeBaselineHostTopRequest, cb?: (error: string, rep: DescribeBaselineHostTopResponse) => void): Promise<DescribeBaselineHostTopResponse>;
    /**
     * 专家服务-安全管家列表
     */
    DescribeExpertServiceList(req: DescribeExpertServiceListRequest, cb?: (error: string, rep: DescribeExpertServiceListResponse) => void): Promise<DescribeExpertServiceListResponse>;
    /**
     * 查询基线列表信息
     */
    DescribeBaselineList(req: DescribeBaselineListRequest, cb?: (error: string, rep: DescribeBaselineListResponse) => void): Promise<DescribeBaselineListResponse>;
    /**
     * 根据Ids删除高危命令事件
     */
    DeleteBashEvents(req: DeleteBashEventsRequest, cb?: (error: string, rep: DeleteBashEventsResponse) => void): Promise<DeleteBashEventsResponse>;
    /**
     * 根据基线id查询基线影响主机列表
     */
    DescribeBaselineEffectHostList(req: DescribeBaselineEffectHostListRequest, cb?: (error: string, rep: DescribeBaselineEffectHostListResponse) => void): Promise<DescribeBaselineEffectHostListResponse>;
    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     */
    DeleteMaliciousRequests(req: DeleteMaliciousRequestsRequest, cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void): Promise<DeleteMaliciousRequestsResponse>;
    /**
     * 获取索引列表
     */
    DescribeIndexList(req?: DescribeIndexListRequest, cb?: (error: string, rep: DescribeIndexListResponse) => void): Promise<DescribeIndexListResponse>;
    /**
     * 导出基线列表
     */
    ExportBaselineList(req: ExportBaselineListRequest, cb?: (error: string, rep: ExportBaselineListResponse) => void): Promise<ExportBaselineListResponse>;
    /**
     * 用于获取专业版概览信息。
     */
    DescribeProVersionInfo(req?: DescribeProVersionInfoRequest, cb?: (error: string, rep: DescribeProVersionInfoResponse) => void): Promise<DescribeProVersionInfoResponse>;
    /**
     * 专家服务-旗舰护网列表
     */
    DescribeProtectNetList(req: DescribeProtectNetListRequest, cb?: (error: string, rep: DescribeProtectNetListResponse) => void): Promise<DescribeProtectNetListResponse>;
    /**
     * 获取反弹Shell规则列表
     */
    DescribeReverseShellRules(req: DescribeReverseShellRulesRequest, cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void): Promise<DescribeReverseShellRulesResponse>;
    /**
     * 用于异步导出数据量大的日志文件
     */
    ExportTasks(req: ExportTasksRequest, cb?: (error: string, rep: ExportTasksResponse) => void): Promise<ExportTasksResponse>;
    /**
     * 根据检测项id导出忽略检测项影响主机列表
     */
    ExportIgnoreRuleEffectHostList(req: ExportIgnoreRuleEffectHostListRequest, cb?: (error: string, rep: ExportIgnoreRuleEffectHostListResponse) => void): Promise<ExportIgnoreRuleEffectHostListResponse>;
    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     */
    RecoverMalwares(req: RecoverMalwaresRequest, cb?: (error: string, rep: RecoverMalwaresResponse) => void): Promise<RecoverMalwaresResponse>;
    /**
     * 删除反弹Shell规则
     */
    DeleteReverseShellRules(req: DeleteReverseShellRulesRequest, cb?: (error: string, rep: DeleteReverseShellRulesResponse) => void): Promise<DeleteReverseShellRulesResponse>;
    /**
     * 查询日志检索服务信息
     */
    DescribeHistoryService(req?: DescribeHistoryServiceRequest, cb?: (error: string, rep: DescribeHistoryServiceResponse) => void): Promise<DescribeHistoryServiceResponse>;
    /**
     * 获取资产管理Web应用列表
     */
    DescribeAssetWebAppList(req: DescribeAssetWebAppListRequest, cb?: (error: string, rep: DescribeAssetWebAppListResponse) => void): Promise<DescribeAssetWebAppListResponse>;
    /**
     * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
     */
    DescribeVulCountByDates(req: DescribeVulCountByDatesRequest, cb?: (error: string, rep: DescribeVulCountByDatesResponse) => void): Promise<DescribeVulCountByDatesResponse>;
    /**
     * 查询防护目录关联服务器列表信息
     */
    DescribeProtectDirRelatedServer(req: DescribeProtectDirRelatedServerRequest, cb?: (error: string, rep: DescribeProtectDirRelatedServerResponse) => void): Promise<DescribeProtectDirRelatedServerResponse>;
    /**
     * 删除防护网站
     */
    DeleteProtectDir(req: DeleteProtectDirRequest, cb?: (error: string, rep: DeleteProtectDirResponse) => void): Promise<DeleteProtectDirResponse>;
    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     */
    DeleteBruteAttacks(req: DeleteBruteAttacksRequest, cb?: (error: string, rep: DeleteBruteAttacksResponse) => void): Promise<DeleteBruteAttacksResponse>;
    /**
     * 导出高危命令事件
     */
    ExportBashEvents(req: ExportBashEventsRequest, cb?: (error: string, rep: ExportBashEventsResponse) => void): Promise<ExportBashEventsResponse>;
    /**
     * 根据检测项id与筛选条件查询忽略检测项影响主机列表信息
     */
    DescribeIgnoreRuleEffectHostList(req: DescribeIgnoreRuleEffectHostListRequest, cb?: (error: string, rep: DescribeIgnoreRuleEffectHostListResponse) => void): Promise<DescribeIgnoreRuleEffectHostListResponse>;
    /**
     * 导出漏洞影响主机列表
     */
    ExportVulEffectHostList(req: ExportVulEffectHostListRequest, cb?: (error: string, rep: ExportVulEffectHostListResponse) => void): Promise<ExportVulEffectHostListResponse>;
    /**
     * 查询应用列表
     */
    DescribeAssetAppList(req: DescribeAssetAppListRequest, cb?: (error: string, rep: DescribeAssetAppListResponse) => void): Promise<DescribeAssetAppListResponse>;
    /**
     * 查询网站防篡改概览信息
     */
    DescribeWebPageGeneralize(req?: DescribeWebPageGeneralizeRequest, cb?: (error: string, rep: DescribeWebPageGeneralizeResponse) => void): Promise<DescribeWebPageGeneralizeResponse>;
    /**
     * 导出本次漏洞检测Excel
     */
    ExportVulDetectionExcel(req: ExportVulDetectionExcelRequest, cb?: (error: string, rep: ExportVulDetectionExcelResponse) => void): Promise<ExportVulDetectionExcelResponse>;
    /**
     * 导出资产管理内核模块列表
     */
    ExportAssetCoreModuleList(req: ExportAssetCoreModuleListRequest, cb?: (error: string, rep: ExportAssetCoreModuleListResponse) => void): Promise<ExportAssetCoreModuleListResponse>;
    /**
     * 同步资产扫描信息
     */
    SyncAssetScan(req: SyncAssetScanRequest, cb?: (error: string, rep: SyncAssetScanResponse) => void): Promise<SyncAssetScanResponse>;
    /**
     * 获取ES字段聚合结果
     */
    DescribeESAggregations(req: DescribeESAggregationsRequest, cb?: (error: string, rep: DescribeESAggregationsResponse) => void): Promise<DescribeESAggregationsResponse>;
    /**
     * 添加历史搜索记录
     */
    CreateSearchLog(req: CreateSearchLogRequest, cb?: (error: string, rep: CreateSearchLogResponse) => void): Promise<CreateSearchLogResponse>;
    /**
     * 获取应急漏洞列表
     */
    DescribeEmergencyVulList(req: DescribeEmergencyVulListRequest, cb?: (error: string, rep: DescribeEmergencyVulListResponse) => void): Promise<DescribeEmergencyVulListResponse>;
    /**
     * 不再提醒爆破阻断提示弹窗
     */
    StopNoticeBanTips(req?: StopNoticeBanTipsRequest, cb?: (error: string, rep: StopNoticeBanTipsResponse) => void): Promise<StopNoticeBanTipsResponse>;
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    IgnoreImpactedHosts(req: IgnoreImpactedHostsRequest, cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void): Promise<IgnoreImpactedHostsResponse>;
    /**
     * 根据任务id查询基线检测进度
     */
    DescribeBaselineScanSchedule(req: DescribeBaselineScanScheduleRequest, cb?: (error: string, rep: DescribeBaselineScanScheduleResponse) => void): Promise<DescribeBaselineScanScheduleResponse>;
    /**
     * 导出已忽略基线检测项信息
     */
    ExportIgnoreBaselineRule(req: ExportIgnoreBaselineRuleRequest, cb?: (error: string, rep: ExportIgnoreBaselineRuleResponse) => void): Promise<ExportIgnoreBaselineRuleResponse>;
    /**
     * 打开入侵检测-恶意文件检测,弹出风险预警内容
     */
    DescribeMalwareRiskWarning(req?: DescribeMalwareRiskWarningRequest, cb?: (error: string, rep: DescribeMalwareRiskWarningResponse) => void): Promise<DescribeMalwareRiskWarningResponse>;
    /**
     * 获取本地提权规则列表
     */
    DescribePrivilegeRules(req: DescribePrivilegeRulesRequest, cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void): Promise<DescribePrivilegeRulesResponse>;
    /**
     * 查询Jar包列表
     */
    DescribeAssetJarList(req: DescribeAssetJarListRequest, cb?: (error: string, rep: DescribeAssetJarListResponse) => void): Promise<DescribeAssetJarListResponse>;
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    DeleteNonlocalLoginPlaces(req: DeleteNonlocalLoginPlacesRequest, cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void): Promise<DeleteNonlocalLoginPlacesResponse>;
    /**
     * 获取Web服务关联进程列表
     */
    DescribeAssetWebServiceProcessList(req: DescribeAssetWebServiceProcessListRequest, cb?: (error: string, rep: DescribeAssetWebServiceProcessListResponse) => void): Promise<DescribeAssetWebServiceProcessListResponse>;
    /**
     * 设置阻断开关状态
     */
    ModifyBanStatus(req: ModifyBanStatusRequest, cb?: (error: string, rep: ModifyBanStatusResponse) => void): Promise<ModifyBanStatusResponse>;
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    ExportMaliciousRequests(req: ExportMaliciousRequestsRequest, cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void): Promise<ExportMaliciousRequestsResponse>;
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    DescribeUsualLoginPlaces(req: DescribeUsualLoginPlacesRequest, cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void): Promise<DescribeUsualLoginPlacesResponse>;
    /**
     * 获取指定标签关联的服务器信息
     */
    DescribeTagMachines(req: DescribeTagMachinesRequest, cb?: (error: string, rep: DescribeTagMachinesResponse) => void): Promise<DescribeTagMachinesResponse>;
    /**
     * 关联机器标签列表
     */
    UpdateMachineTags(req: UpdateMachineTagsRequest, cb?: (error: string, rep: UpdateMachineTagsResponse) => void): Promise<UpdateMachineTagsResponse>;
    /**
     *  一键检测
     */
    ScanVul(req: ScanVulRequest, cb?: (error: string, rep: ScanVulResponse) => void): Promise<ScanVulResponse>;
    /**
     * 导出本地提权事件
     */
    ExportPrivilegeEvents(req: ExportPrivilegeEventsRequest, cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void): Promise<ExportPrivilegeEventsResponse>;
    /**
     * 导出网页防篡改防护目录列表
     */
    ExportProtectDirList(req: ExportProtectDirListRequest, cb?: (error: string, rep: ExportProtectDirListResponse) => void): Promise<ExportProtectDirListResponse>;
    /**
     * 获取概览统计数据。
     */
    DescribeOverviewStatistics(req?: DescribeOverviewStatisticsRequest, cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void): Promise<DescribeOverviewStatisticsResponse>;
    /**
     * 专家服务-可用订单详情
     */
    DescribeAvailableExpertServiceDetail(req?: DescribeAvailableExpertServiceDetailRequest, cb?: (error: string, rep: DescribeAvailableExpertServiceDetailResponse) => void): Promise<DescribeAvailableExpertServiceDetailResponse>;
    /**
     * 获取待处理风险文件数+影响服务器数+是否试用检测+最近检测时间
     */
    DescribeServersAndRiskAndFirstInfo(req?: DescribeServersAndRiskAndFirstInfoRequest, cb?: (error: string, rep: DescribeServersAndRiskAndFirstInfoResponse) => void): Promise<DescribeServersAndRiskAndFirstInfoResponse>;
    /**
     * 添加检索模板
     */
    CreateSearchTemplate(req: CreateSearchTemplateRequest, cb?: (error: string, rep: CreateSearchTemplateResponse) => void): Promise<CreateSearchTemplateResponse>;
    /**
     * 资产指纹启动扫描
     */
    ScanAsset(req: ScanAssetRequest, cb?: (error: string, rep: ScanAssetResponse) => void): Promise<ScanAssetResponse>;
    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件动态消息数据。
     */
    DescribeSecurityDynamics(req: DescribeSecurityDynamicsRequest, cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void): Promise<DescribeSecurityDynamicsResponse>;
    /**
     * 获取安全事件统计
     */
    DescribeSecurityEventStat(req: DescribeSecurityEventStatRequest, cb?: (error: string, rep: DescribeSecurityEventStatResponse) => void): Promise<DescribeSecurityEventStatResponse>;
    /**
     * 根据Ids删除反弹Shell事件
     */
    DeleteReverseShellEvents(req: DeleteReverseShellEventsRequest, cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void): Promise<DeleteReverseShellEventsResponse>;
    /**
     * 获取主机账号详情
     */
    DescribeAssetUserInfo(req: DescribeAssetUserInfoRequest, cb?: (error: string, rep: DescribeAssetUserInfoResponse) => void): Promise<DescribeAssetUserInfoResponse>;
    /**
     * 取消漏洞忽略
     */
    CancelIgnoreVul(req: CancelIgnoreVulRequest, cb?: (error: string, rep: CancelIgnoreVulResponse) => void): Promise<CancelIgnoreVulResponse>;
    /**
     * 删除本地提权规则
     */
    DeletePrivilegeRules(req: DeletePrivilegeRulesRequest, cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void): Promise<DeletePrivilegeRulesResponse>;
    /**
     * 根据任务id导出指定扫描任务详情
     */
    ExportScanTaskDetails(req: ExportScanTaskDetailsRequest, cb?: (error: string, rep: ExportScanTaskDetailsResponse) => void): Promise<ExportScanTaskDetailsResponse>;
    /**
     * 漏洞数量等级分布统计
     */
    DescribeVulLevelCount(req: DescribeVulLevelCountRequest, cb?: (error: string, rep: DescribeVulLevelCountResponse) => void): Promise<DescribeVulLevelCountResponse>;
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    DeleteMalwares(req: DeleteMalwaresRequest, cb?: (error: string, rep: DeleteMalwaresResponse) => void): Promise<DeleteMalwaresResponse>;
    /**
     * 用于网页防篡改获取区域主机列表。
     */
    DescribeMachineList(req: DescribeMachineListRequest, cb?: (error: string, rep: DescribeMachineListResponse) => void): Promise<DescribeMachineListResponse>;
    /**
     * 修改网站防护设置
     */
    ModifyWebPageProtectSetting(req: ModifyWebPageProtectSettingRequest, cb?: (error: string, rep: ModifyWebPageProtectSettingResponse) => void): Promise<ModifyWebPageProtectSettingResponse>;
    /**
     * 获取登录审计列表
     */
    DescribeHostLoginList(req: DescribeHostLoginListRequest, cb?: (error: string, rep: DescribeHostLoginListResponse) => void): Promise<DescribeHostLoginListResponse>;
    /**
     * 本接口用于删除异地登录白名单规则。
     */
    DeleteLoginWhiteList(req: DeleteLoginWhiteListRequest, cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void): Promise<DeleteLoginWhiteListResponse>;
    /**
     * 获取当前用户告警列表
     */
    DescribeWarningList(req?: DescribeWarningListRequest, cb?: (error: string, rep: DescribeWarningListResponse) => void): Promise<DescribeWarningListResponse>;
    /**
     * 根据基线策略id更新策略信息
     */
    UpdateBaselineStrategy(req: UpdateBaselineStrategyRequest, cb?: (error: string, rep: UpdateBaselineStrategyResponse) => void): Promise<UpdateBaselineStrategyResponse>;
    /**
     * 定期扫描漏洞设置
     */
    ScanVulSetting(req: ScanVulSettingRequest, cb?: (error: string, rep: ScanVulSettingResponse) => void): Promise<ScanVulSettingResponse>;
    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     */
    DescribeAccountStatistics(req: DescribeAccountStatisticsRequest, cb?: (error: string, rep: DescribeAccountStatisticsResponse) => void): Promise<DescribeAccountStatisticsResponse>;
    /**
     * 本接口 (DescribeExportMachines) 用于导出区域主机列表。
     */
    DescribeExportMachines(req: DescribeExportMachinesRequest, cb?: (error: string, rep: DescribeExportMachinesResponse) => void): Promise<DescribeExportMachinesResponse>;
    /**
     * 获取机器地域列表
     */
    DescribeMachineRegions(req?: DescribeMachineRegionsRequest, cb?: (error: string, rep: DescribeMachineRegionsResponse) => void): Promise<DescribeMachineRegionsResponse>;
    /**
     * 获取资产管理主机资源详细信息
     */
    DescribeAssetMachineDetail(req: DescribeAssetMachineDetailRequest, cb?: (error: string, rep: DescribeAssetMachineDetailResponse) => void): Promise<DescribeAssetMachineDetailResponse>;
    /**
     * 导出风险趋势
     */
    ExportSecurityTrends(req: ExportSecurityTrendsRequest, cb?: (error: string, rep: ExportSecurityTrendsResponse) => void): Promise<ExportSecurityTrendsResponse>;
    /**
     * 查询资产管理内核模块列表
     */
    DescribeAssetCoreModuleList(req: DescribeAssetCoreModuleListRequest, cb?: (error: string, rep: DescribeAssetCoreModuleListResponse) => void): Promise<DescribeAssetCoreModuleListResponse>;
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    DescribeOpenPortStatistics(req: DescribeOpenPortStatisticsRequest, cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void): Promise<DescribeOpenPortStatisticsResponse>;
    /**
     * 更新或者插入用户告警设置(该接口废弃,请调用 ModifyWarningSetting )
     */
    DescribeSaveOrUpdateWarnings(req: DescribeSaveOrUpdateWarningsRequest, cb?: (error: string, rep: DescribeSaveOrUpdateWarningsResponse) => void): Promise<DescribeSaveOrUpdateWarningsResponse>;
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    ExportBruteAttacks(req: ExportBruteAttacksRequest, cb?: (error: string, rep: ExportBruteAttacksResponse) => void): Promise<ExportBruteAttacksResponse>;
    /**
     * 修改爆破阻断模式
     */
    ModifyBanMode(req: ModifyBanModeRequest, cb?: (error: string, rep: ModifyBanModeResponse) => void): Promise<ModifyBanModeResponse>;
    /**
     * 创建/修改网站防护目录
     */
    ModifyWebPageProtectDir(req: ModifyWebPageProtectDirRequest, cb?: (error: string, rep: ModifyWebPageProtectDirResponse) => void): Promise<ModifyWebPageProtectDirResponse>;
    /**
     * 查询恶意请求白名单列表
     */
    DescribeMaliciousRequestWhiteList(req: DescribeMaliciousRequestWhiteListRequest, cb?: (error: string, rep: DescribeMaliciousRequestWhiteListResponse) => void): Promise<DescribeMaliciousRequestWhiteListResponse>;
    /**
     * 获取账号列表
     */
    DescribeAssetUserList(req: DescribeAssetUserListRequest, cb?: (error: string, rep: DescribeAssetUserListResponse) => void): Promise<DescribeAssetUserListResponse>;
    /**
     * 根据基线策略id查询策略详情
     */
    DescribeBaselineStrategyDetail(req: DescribeBaselineStrategyDetailRequest, cb?: (error: string, rep: DescribeBaselineStrategyDetailResponse) => void): Promise<DescribeBaselineStrategyDetailResponse>;
    /**
     * 获取Web站点详情
     */
    DescribeAssetWebLocationInfo(req: DescribeAssetWebLocationInfoRequest, cb?: (error: string, rep: DescribeAssetWebLocationInfoResponse) => void): Promise<DescribeAssetWebLocationInfoResponse>;
    /**
     * 网页防篡改防护目录列表
     */
    DescribeProtectDirList(req: DescribeProtectDirListRequest, cb?: (error: string, rep: DescribeProtectDirListResponse) => void): Promise<DescribeProtectDirListResponse>;
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    ExportMalwares(req: ExportMalwaresRequest, cb?: (error: string, rep: ExportMalwaresResponse) => void): Promise<ExportMalwaresResponse>;
    /**
     * 获取Jar包详情
     */
    DescribeAssetJarInfo(req: DescribeAssetJarInfoRequest, cb?: (error: string, rep: DescribeAssetJarInfoResponse) => void): Promise<DescribeAssetJarInfoResponse>;
    /**
     * 导出篡改事件列表
     */
    ExportWebPageEventList(req: ExportWebPageEventListRequest, cb?: (error: string, rep: ExportWebPageEventListResponse) => void): Promise<ExportWebPageEventListResponse>;
    /**
     * 获取密码破解列表
     */
    DescribeBruteAttackList(req: DescribeBruteAttackListRequest, cb?: (error: string, rep: DescribeBruteAttackListResponse) => void): Promise<DescribeBruteAttackListResponse>;
    /**
     * 查询资产管理数据库列表
     */
    DescribeAssetDatabaseList(req: DescribeAssetDatabaseListRequest, cb?: (error: string, rep: DescribeAssetDatabaseListResponse) => void): Promise<DescribeAssetDatabaseListResponse>;
    /**
     * 漏洞影响主机列表
     */
    DescribeVulEffectHostList(req: DescribeVulEffectHostListRequest, cb?: (error: string, rep: DescribeVulEffectHostListResponse) => void): Promise<DescribeVulEffectHostListResponse>;
    /**
     * DescribeScanTaskStatus 查询机器扫描状态列表用于过滤筛选
     */
    DescribeScanTaskStatus(req: DescribeScanTaskStatusRequest, cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void): Promise<DescribeScanTaskStatusResponse>;
    /**
     * 获取快速检索列表
     */
    DescribeSearchTemplates(req: DescribeSearchTemplatesRequest, cb?: (error: string, rep: DescribeSearchTemplatesResponse) => void): Promise<DescribeSearchTemplatesResponse>;
    /**
     * 专家服务-应急响应列表
     */
    DescribeEmergencyResponseList(req: DescribeEmergencyResponseListRequest, cb?: (error: string, rep: DescribeEmergencyResponseListResponse) => void): Promise<DescribeEmergencyResponseListResponse>;
    /**
     * 导出资产管理Web服务列表
     */
    ExportAssetWebServiceInfoList(req: ExportAssetWebServiceInfoListRequest, cb?: (error: string, rep: ExportAssetWebServiceInfoListResponse) => void): Promise<ExportAssetWebServiceInfoListResponse>;
    /**
     * 漏洞管理-重新检测接口
     */
    ScanVulAgain(req: ScanVulAgainRequest, cb?: (error: string, rep: ScanVulAgainResponse) => void): Promise<ScanVulAgainResponse>;
    /**
     * 查询一个用户下的基线策略信息
     */
    DescribeBaselineStrategyList(req: DescribeBaselineStrategyListRequest, cb?: (error: string, rep: DescribeBaselineStrategyListResponse) => void): Promise<DescribeBaselineStrategyListResponse>;
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    SeparateMalwares(req: SeparateMalwaresRequest, cb?: (error: string, rep: SeparateMalwaresResponse) => void): Promise<SeparateMalwaresResponse>;
    /**
     * 查询木马扫描进度
     */
    DescribeScanMalwareSchedule(req?: DescribeScanMalwareScheduleRequest, cb?: (error: string, rep: DescribeScanMalwareScheduleResponse) => void): Promise<DescribeScanMalwareScheduleResponse>;
    /**
     * 根据基线id查询下属检测项信息
     */
    DescribeBaselineRule(req: DescribeBaselineRuleRequest, cb?: (error: string, rep: DescribeBaselineRuleResponse) => void): Promise<DescribeBaselineRuleResponse>;
    /**
     * 导出基线影响主机列表
     */
    ExportBaselineEffectHostList(req: ExportBaselineEffectHostListRequest, cb?: (error: string, rep: ExportBaselineEffectHostListResponse) => void): Promise<ExportBaselineEffectHostListResponse>;
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    ExportNonlocalLoginPlaces(req: ExportNonlocalLoginPlacesRequest, cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void): Promise<ExportNonlocalLoginPlacesResponse>;
    /**
     * 获取资产指纹页面的资源监控列表
     */
    DescribeAssetMachineList(req: DescribeAssetMachineListRequest, cb?: (error: string, rep: DescribeAssetMachineListResponse) => void): Promise<DescribeAssetMachineListResponse>;
    /**
     * 获取阻断按钮状态
     */
    DescribeBanStatus(req?: DescribeBanStatusRequest, cb?: (error: string, rep: DescribeBanStatusResponse) => void): Promise<DescribeBanStatusResponse>;
    /**
     * 获取异地登录白名单合并后列表
     */
    DescribeLoginWhiteCombinedList(req: DescribeLoginWhiteCombinedListRequest, cb?: (error: string, rep: DescribeLoginWhiteCombinedListResponse) => void): Promise<DescribeLoginWhiteCombinedListResponse>;
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     */
    DescribeProcessStatistics(req: DescribeProcessStatisticsRequest, cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void): Promise<DescribeProcessStatisticsResponse>;
    /**
     * 查看恶意文件详情
     */
    DescribeMalwareInfo(req: DescribeMalwareInfoRequest, cb?: (error: string, rep: DescribeMalwareInfoResponse) => void): Promise<DescribeMalwareInfoResponse>;
    /**
     * 获取Web站点列表
     */
    DescribeAssetWebLocationList(req: DescribeAssetWebLocationListRequest, cb?: (error: string, rep: DescribeAssetWebLocationListResponse) => void): Promise<DescribeAssetWebLocationListResponse>;
    /**
     * 根据策略id查询基线检测项TOP
     */
    DescribeBaselineTop(req: DescribeBaselineTopRequest, cb?: (error: string, rep: DescribeBaselineTopResponse) => void): Promise<DescribeBaselineTopResponse>;
    /**
     * 删除高危命令规则
     */
    DeleteBashRules(req: DeleteBashRulesRequest, cb?: (error: string, rep: DeleteBashRulesResponse) => void): Promise<DeleteBashRulesResponse>;
    /**
     * 获取资产管理进程列表
     */
    DescribeAssetProcessInfoList(req: DescribeAssetProcessInfoListRequest, cb?: (error: string, rep: DescribeAssetProcessInfoListResponse) => void): Promise<DescribeAssetProcessInfoListResponse>;
    /**
     * 获取反弹Shell列表
     */
    DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse>;
    /**
     * 修改暴力破解规则
     */
    ModifyBruteAttackRules(req: ModifyBruteAttackRulesRequest, cb?: (error: string, rep: ModifyBruteAttackRulesResponse) => void): Promise<ModifyBruteAttackRulesResponse>;
    /**
     *  用于设置新增主机自动开通专业防护配置。
     */
    ModifyAutoOpenProVersionConfig(req: ModifyAutoOpenProVersionConfigRequest, cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void): Promise<ModifyAutoOpenProVersionConfigResponse>;
    /**
     * 查询定时扫描配置
     */
    DescribeMalwareTimingScanSetting(req?: DescribeMalwareTimingScanSettingRequest, cb?: (error: string, rep: DescribeMalwareTimingScanSettingResponse) => void): Promise<DescribeMalwareTimingScanSettingResponse>;
    /**
     * 获取主机最近趋势情况
     */
    DescribeAssetRecentMachineInfo(req: DescribeAssetRecentMachineInfoRequest, cb?: (error: string, rep: DescribeAssetRecentMachineInfoResponse) => void): Promise<DescribeAssetRecentMachineInfoResponse>;
    /**
     * 入侵管理-终止扫描任务
     */
    DeleteMalwareScanTask(req?: DeleteMalwareScanTaskRequest, cb?: (error: string, rep: DeleteMalwareScanTaskResponse) => void): Promise<DeleteMalwareScanTaskResponse>;
    /**
     * 漏洞top统计
     */
    DescribeVulTop(req: DescribeVulTopRequest, cb?: (error: string, rep: DescribeVulTopResponse) => void): Promise<DescribeVulTopResponse>;
    /**
     * 修改告警设置
     */
    ModifyWarningSetting(req: ModifyWarningSettingRequest, cb?: (error: string, rep: ModifyWarningSettingResponse) => void): Promise<ModifyWarningSettingResponse>;
    /**
     * 获取待处理漏洞数+影响主机数
     */
    DescribeVulHostCountScanTime(req?: DescribeVulHostCountScanTimeRequest, cb?: (error: string, rep: DescribeVulHostCountScanTimeResponse) => void): Promise<DescribeVulHostCountScanTimeResponse>;
    /**
     * 获取爆破破解规则
     */
    DescribeBruteAttackRules(req?: DescribeBruteAttackRulesRequest, cb?: (error: string, rep: DescribeBruteAttackRulesResponse) => void): Promise<DescribeBruteAttackRulesResponse>;
    /**
     * 查询资产管理环境变量列表
     */
    DescribeAssetEnvList(req: DescribeAssetEnvListRequest, cb?: (error: string, rep: DescribeAssetEnvListResponse) => void): Promise<DescribeAssetEnvListResponse>;
    /**
     * 获取ES查询文档列表
     */
    DescribeESHits(req: DescribeESHitsRequest, cb?: (error: string, rep: DescribeESHitsResponse) => void): Promise<DescribeESHitsResponse>;
    /**
     * 创建应急漏洞扫描任务
     */
    CreateEmergencyVulScan(req: CreateEmergencyVulScanRequest, cb?: (error: string, rep: CreateEmergencyVulScanResponse) => void): Promise<CreateEmergencyVulScanResponse>;
    /**
     * 获取安全概览相关事件统计数据接口
     */
    DescribeSecurityEventsCnt(req?: DescribeSecurityEventsCntRequest, cb?: (error: string, rep: DescribeSecurityEventsCntResponse) => void): Promise<DescribeSecurityEventsCntResponse>;
    /**
     * 获取本地提权事件列表
     */
    DescribePrivilegeEvents(req: DescribePrivilegeEventsRequest, cb?: (error: string, rep: DescribePrivilegeEventsResponse) => void): Promise<DescribePrivilegeEventsResponse>;
    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     */
    DescribeMachineInfo(req: DescribeMachineInfoRequest, cb?: (error: string, rep: DescribeMachineInfoResponse) => void): Promise<DescribeMachineInfoResponse>;
    /**
     * 获取阻断白名单列表
     */
    DescribeBanWhiteList(req: DescribeBanWhiteListRequest, cb?: (error: string, rep: DescribeBanWhiteListResponse) => void): Promise<DescribeBanWhiteListResponse>;
    /**
     * 获取日志检索容量使用统计
     */
    DescribeLogStorageStatistic(req?: DescribeLogStorageStatisticRequest, cb?: (error: string, rep: DescribeLogStorageStatisticResponse) => void): Promise<DescribeLogStorageStatisticResponse>;
    /**
     * 获取网络攻击威胁类型列表
     */
    DescribeAttackVulTypeList(req?: DescribeAttackVulTypeListRequest, cb?: (error: string, rep: DescribeAttackVulTypeListResponse) => void): Promise<DescribeAttackVulTypeListResponse>;
    /**
     * 获取异地登录白名单列表
     */
    DescribeLoginWhiteList(req: DescribeLoginWhiteListRequest, cb?: (error: string, rep: DescribeLoginWhiteListResponse) => void): Promise<DescribeLoginWhiteListResponse>;
    /**
     * 查询已经忽略的检测项信息
     */
    DescribeIgnoreBaselineRule(req: DescribeIgnoreBaselineRuleRequest, cb?: (error: string, rep: DescribeIgnoreBaselineRuleResponse) => void): Promise<DescribeIgnoreBaselineRuleResponse>;
    /**
     * 根据基线id查询基线详情接口
     */
    DescribeBaselineDetail(req: DescribeBaselineDetailRequest, cb?: (error: string, rep: DescribeBaselineDetailResponse) => void): Promise<DescribeBaselineDetailResponse>;
    /**
     * 入侵检测，获取恶意请求列表
     */
    DescribeRiskDnsList(req: DescribeRiskDnsListRequest, cb?: (error: string, rep: DescribeRiskDnsListResponse) => void): Promise<DescribeRiskDnsListResponse>;
    /**
     * 网站防篡改-查询动态防护信息
     */
    DescribeWebPageProtectStat(req?: DescribeWebPageProtectStatRequest, cb?: (error: string, rep: DescribeWebPageProtectStatResponse) => void): Promise<DescribeWebPageProtectStatResponse>;
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    DescribeHistoryAccounts(req: DescribeHistoryAccountsRequest, cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void): Promise<DescribeHistoryAccountsResponse>;
    /**
     * 添加网站防护服务器
     */
    CreateProtectServer(req: CreateProtectServerRequest, cb?: (error: string, rep: CreateProtectServerResponse) => void): Promise<CreateProtectServerResponse>;
    /**
     * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
     */
    DescribeScanState(req: DescribeScanStateRequest, cb?: (error: string, rep: DescribeScanStateResponse) => void): Promise<DescribeScanStateResponse>;
    /**
     * 根据基线策略id删除策略
     */
    DeleteBaselineStrategy(req: DeleteBaselineStrategyRequest, cb?: (error: string, rep: DeleteBaselineStrategyResponse) => void): Promise<DeleteBaselineStrategyResponse>;
    /**
     * 获取服务器风险top列表
     */
    DescribeVulHostTop(req: DescribeVulHostTopRequest, cb?: (error: string, rep: DescribeVulHostTopResponse) => void): Promise<DescribeVulHostTopResponse>;
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    UntrustMalwares(req: UntrustMalwaresRequest, cb?: (error: string, rep: UntrustMalwaresResponse) => void): Promise<UntrustMalwaresResponse>;
    /**
     * 获取资产管理Web框架列表
     */
    DescribeAssetWebFrameList(req: DescribeAssetWebFrameListRequest, cb?: (error: string, rep: DescribeAssetWebFrameListResponse) => void): Promise<DescribeAssetWebFrameListResponse>;
    /**
     * 获取阻断地域
     */
    DescribeBanRegions(req: DescribeBanRegionsRequest, cb?: (error: string, rep: DescribeBanRegionsResponse) => void): Promise<DescribeBanRegionsResponse>;
    /**
     * 查询可筛选操作系统列表.
     */
    DescribeMachineOsList(req?: DescribeMachineOsListRequest, cb?: (error: string, rep: DescribeMachineOsListResponse) => void): Promise<DescribeMachineOsListResponse>;
    /**
     * 漏洞详情，带CVSS版本
     */
    DescribeVulInfoCvss(req: DescribeVulInfoCvssRequest, cb?: (error: string, rep: DescribeVulInfoCvssResponse) => void): Promise<DescribeVulInfoCvssResponse>;
    /**
     * 入侵检测获取木马列表
     */
    DescribeMalWareList(req: DescribeMalWareListRequest, cb?: (error: string, rep: DescribeMalWareListResponse) => void): Promise<DescribeMalWareListResponse>;
    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     */
    CreateScanMalwareSetting(req: CreateScanMalwareSettingRequest, cb?: (error: string, rep: CreateScanMalwareSettingResponse) => void): Promise<CreateScanMalwareSettingResponse>;
    /**
     * 定时扫描设置
     */
    ModifyMalwareTimingScanSettings(req: ModifyMalwareTimingScanSettingsRequest, cb?: (error: string, rep: ModifyMalwareTimingScanSettingsResponse) => void): Promise<ModifyMalwareTimingScanSettingsResponse>;
    /**
     * 获取漏洞列表数据
     */
    DescribeVulList(req: DescribeVulListRequest, cb?: (error: string, rep: DescribeVulListResponse) => void): Promise<DescribeVulListResponse>;
    /**
     * 获取内核模块详情
     */
    DescribeAssetCoreModuleInfo(req: DescribeAssetCoreModuleInfoRequest, cb?: (error: string, rep: DescribeAssetCoreModuleInfoResponse) => void): Promise<DescribeAssetCoreModuleInfoResponse>;
    /**
     * 获取主机相关统计
     */
    DescribeGeneralStat(req: DescribeGeneralStatRequest, cb?: (error: string, rep: DescribeGeneralStatResponse) => void): Promise<DescribeGeneralStatResponse>;
    /**
     * 获取软件关联进程列表
     */
    DescribeAssetAppProcessList(req: DescribeAssetAppProcessListRequest, cb?: (error: string, rep: DescribeAssetAppProcessListResponse) => void): Promise<DescribeAssetAppProcessListResponse>;
    /**
     * 获取资产管理数据库详情
     */
    DescribeAssetDatabaseInfo(req: DescribeAssetDatabaseInfoRequest, cb?: (error: string, rep: DescribeAssetDatabaseInfoResponse) => void): Promise<DescribeAssetDatabaseInfoResponse>;
    /**
     * 设置高危命令事件状态
     */
    SetBashEventsStatus(req: SetBashEventsStatusRequest, cb?: (error: string, rep: SetBashEventsStatusResponse) => void): Promise<SetBashEventsStatusResponse>;
    /**
     * 导出反弹Shell事件
     */
    ExportReverseShellEvents(req: ExportReverseShellEventsRequest, cb?: (error: string, rep: ExportReverseShellEventsResponse) => void): Promise<ExportReverseShellEventsResponse>;
    /**
     * 删除网络攻击日志
     */
    DeleteAttackLogs(req: DeleteAttackLogsRequest, cb?: (error: string, rep: DeleteAttackLogsResponse) => void): Promise<DeleteAttackLogsResponse>;
    /**
     * 查询定期检测的配置
     */
    DescribeScanVulSetting(req?: DescribeScanVulSettingRequest, cb?: (error: string, rep: DescribeScanVulSettingResponse) => void): Promise<DescribeScanVulSettingResponse>;
    /**
     * 查询资产管理启动服务列表
     */
    DescribeAssetInitServiceList(req: DescribeAssetInitServiceListRequest, cb?: (error: string, rep: DescribeAssetInitServiceListResponse) => void): Promise<DescribeAssetInitServiceListResponse>;
    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    DeleteMachine(req: DeleteMachineRequest, cb?: (error: string, rep: DeleteMachineResponse) => void): Promise<DeleteMachineResponse>;
    /**
     * 专家服务-专家服务订单列表
     */
    DescribeExpertServiceOrderList(req: DescribeExpertServiceOrderListRequest, cb?: (error: string, rep: DescribeExpertServiceOrderListResponse) => void): Promise<DescribeExpertServiceOrderListResponse>;
    /**
     * 根据策略名查询策略是否存在
     */
    DescribeStrategyExist(req: DescribeStrategyExistRequest, cb?: (error: string, rep: DescribeStrategyExistResponse) => void): Promise<DescribeStrategyExistResponse>;
    /**
     * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
     */
    DescribeWebPageServiceInfo(req?: DescribeWebPageServiceInfoRequest, cb?: (error: string, rep: DescribeWebPageServiceInfoResponse) => void): Promise<DescribeWebPageServiceInfoResponse>;
    /**
     * 切换高危命令规则状态
     */
    SwitchBashRules(req: SwitchBashRulesRequest, cb?: (error: string, rep: SwitchBashRulesResponse) => void): Promise<SwitchBashRulesResponse>;
    /**
     * 获取所有主机标签
     */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
     * 查询基线基础信息列表
     */
    DescribeBaselineBasicInfo(req: DescribeBaselineBasicInfoRequest, cb?: (error: string, rep: DescribeBaselineBasicInfoResponse) => void): Promise<DescribeBaselineBasicInfoResponse>;
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     */
    DescribeSecurityTrends(req: DescribeSecurityTrendsRequest, cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void): Promise<DescribeSecurityTrendsResponse>;
    /**
     * 根据基线策略id查询基线策略数据概览统计
     */
    DescribeBaselineAnalysisData(req: DescribeBaselineAnalysisDataRequest, cb?: (error: string, rep: DescribeBaselineAnalysisDataResponse) => void): Promise<DescribeBaselineAnalysisDataResponse>;
    /**
     * 网络攻击日志详情
     */
    DescribeAttackLogInfo(req: DescribeAttackLogInfoRequest, cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void): Promise<DescribeAttackLogInfoResponse>;
    /**
     * 网站防篡改防护设置开关
     */
    ModifyWebPageProtectSwitch(req: ModifyWebPageProtectSwitchRequest, cb?: (error: string, rep: ModifyWebPageProtectSwitchResponse) => void): Promise<ModifyWebPageProtectSwitchResponse>;
    /**
     * 新增或修改高危命令规则
     */
    EditBashRules(req: EditBashRulesRequest, cb?: (error: string, rep: EditBashRulesResponse) => void): Promise<EditBashRulesResponse>;
    /**
     * 专家服务-安全管家月巡检报告下载
     */
    DescribeMonthInspectionReport(req: DescribeMonthInspectionReportRequest, cb?: (error: string, rep: DescribeMonthInspectionReportResponse) => void): Promise<DescribeMonthInspectionReportResponse>;
    /**
     * 获取资产数量： 主机数、账号数、端口数、进程数、软件数、数据库数、Web应用数、Web框架数、Web服务数、Web站点数
     */
    DescribeAssetInfo(req?: DescribeAssetInfoRequest, cb?: (error: string, rep: DescribeAssetInfoResponse) => void): Promise<DescribeAssetInfoResponse>;
    /**
     * 网站防篡改-删除事件记录
     */
    DeleteWebPageEventLog(req?: DeleteWebPageEventLogRequest, cb?: (error: string, rep: DeleteWebPageEventLogResponse) => void): Promise<DeleteWebPageEventLogResponse>;
    /**
     * 用于统计专业版和基础版机器数。
     */
    DescribeVersionStatistics(req?: DescribeVersionStatisticsRequest, cb?: (error: string, rep: DescribeVersionStatisticsResponse) => void): Promise<DescribeVersionStatisticsResponse>;
    /**
     * 漏洞管理-导出漏洞列表
     */
    ExportVulList(req: ExportVulListRequest, cb?: (error: string, rep: ExportVulListResponse) => void): Promise<ExportVulListResponse>;
    /**
     * 用于获取单台主机或所有主机是否开通专业版状态。
     */
    DescribeProVersionStatus(req: DescribeProVersionStatusRequest, cb?: (error: string, rep: DescribeProVersionStatusResponse) => void): Promise<DescribeProVersionStatusResponse>;
    /**
     * 获取高危命令列表
     */
    DescribeBashEvents(req: DescribeBashEventsRequest, cb?: (error: string, rep: DescribeBashEventsResponse) => void): Promise<DescribeBashEventsResponse>;
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 查询资产管理Web服务列表
     */
    DescribeAssetWebServiceInfoList(req: DescribeAssetWebServiceInfoListRequest, cb?: (error: string, rep: DescribeAssetWebServiceInfoListResponse) => void): Promise<DescribeAssetWebServiceInfoListResponse>;
    /**
     * 导出漏洞检测报告。
     */
    ExportVulDetectionReport(req: ExportVulDetectionReportRequest, cb?: (error: string, rep: ExportVulDetectionReportResponse) => void): Promise<ExportVulDetectionReportResponse>;
    /**
     * 查询篡改事件列表
     */
    DescribeWebPageEventList(req: DescribeWebPageEventListRequest, cb?: (error: string, rep: DescribeWebPageEventListResponse) => void): Promise<DescribeWebPageEventListResponse>;
    /**
     * 获取木马文件下载地址
     */
    DescribeMalwareFile(req: DescribeMalwareFileRequest, cb?: (error: string, rep: DescribeMalwareFileResponse) => void): Promise<DescribeMalwareFileResponse>;
    /**
     * 获取漏洞管理模块指定类型的待处理漏洞数、主机数和非专业版主机数量
     */
    DescribeUndoVulCounts(req: DescribeUndoVulCountsRequest, cb?: (error: string, rep: DescribeUndoVulCountsResponse) => void): Promise<DescribeUndoVulCountsResponse>;
}
