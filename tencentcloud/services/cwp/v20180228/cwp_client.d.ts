import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMalwareInfoRequest, DescribeSearchTemplatesResponse, DescribeMachineOsListRequest, DescribeScanVulSettingResponse, DescribeBashRulesRequest, ExportBashEventsRequest, ExportPrivilegeEventsResponse, DescribeImportMachineInfoResponse, DescribeReverseShellRulesRequest, SetBashEventsStatusRequest, DescribeAccountsRequest, DescribeReverseShellEventsRequest, ScanVulAgainRequest, DescribePrivilegeEventsRequest, CreateSearchTemplateResponse, DescribeAttackVulTypeListRequest, DescribeLogStorageStatisticRequest, DescribeAttackLogsRequest, ScanVulResponse, InquiryPriceOpenProVersionPrepaidRequest, DescribeSearchTemplatesRequest, ExportMalwaresRequest, EditTagsResponse, SyncAssetScanResponse, DeleteBashEventsResponse, DescribeMalwareInfoResponse, ExportPrivilegeEventsRequest, CreateBaselineStrategyRequest, DescribeSecurityTrendsRequest, DescribeAttackVulTypeListResponse, DescribeReverseShellEventsResponse, DescribePrivilegeRulesRequest, DeleteBashRulesResponse, DescribeSecurityEventsCntResponse, DescribeRiskDnsListResponse, DescribeExportMachinesRequest, DescribeHistoryServiceResponse, CreateScanMalwareSettingResponse, RenewProVersionRequest, DescribeWebPageGeneralizeRequest, UpdateBaselineStrategyRequest, ModifyWebPageProtectSettingResponse, DeleteMachineTagRequest, CreateBaselineStrategyResponse, DescribeTagMachinesRequest, ExportAssetCoreModuleListResponse, SwitchBashRulesResponse, DescribeBruteAttackListResponse, DescribeExportMachinesResponse, DescribeHistoryAccountsResponse, IgnoreImpactedHostsResponse, ExportAttackLogsResponse, UntrustMalwaresRequest, DescribeLoginWhiteListRequest, ExportBruteAttacksResponse, ExportVulDetectionReportResponse, DescribeAccountStatisticsResponse, EditBashRulesRequest, DescribeSearchExportListRequest, ScanAssetRequest, DescribeAssetInfoRequest, DescribeProVersionInfoRequest, DescribeProVersionInfoResponse, DeleteMaliciousRequestsResponse, DescribeESHitsResponse, ScanVulSettingRequest, ExportBruteAttacksRequest, DeleteMachineResponse, DeleteLoginWhiteListRequest, DescribeLogStorageStatisticResponse, DescribeAttackLogInfoResponse, DescribePrivilegeEventsResponse, DescribeOverviewStatisticsResponse, RecoverMalwaresRequest, TrustMalwaresResponse, EditTagsRequest, DeleteReverseShellRulesRequest, DescribeBashRulesResponse, DescribeScanMalwareScheduleRequest, RescanImpactedHostRequest, DescribeBashEventsResponse, CreateSearchTemplateRequest, DescribeBashEventsRequest, DeleteTagsRequest, DescribeOpenPortStatisticsRequest, DescribeMachineInfoResponse, ModifyMalwareTimingScanSettingsRequest, DeleteMachineRequest, ExportAssetCoreModuleListRequest, SetBashEventsStatusResponse, DescribeComponentStatisticsResponse, DescribeMachineListResponse, ModifyMalwareTimingScanSettingsResponse, DescribeMachineRegionsRequest, TrustMalwaresRequest, DescribeSearchExportListResponse, DescribeESAggregationsResponse, DeleteNonlocalLoginPlacesResponse, ModifyWebPageProtectSettingRequest, DeleteReverseShellRulesResponse, UpdateBaselineStrategyResponse, UntrustMalwaresResponse, DescribeScanTaskDetailsRequest, RenewProVersionResponse, DeletePrivilegeRulesResponse, CreateProtectServerRequest, DescribeAssetRecentMachineInfoRequest, ExportVulDetectionExcelResponse, DeletePrivilegeEventsResponse, InquiryPriceOpenProVersionPrepaidResponse, CloseProVersionRequest, DescribeIndexListResponse, DescribeImportMachineInfoRequest, DescribeUsualLoginPlacesResponse, DescribeRiskDnsListRequest, ExportNonlocalLoginPlacesResponse, EditBashRulesResponse, DescribeSearchLogsRequest, DescribeAttackLogInfoRequest, ScanVulSettingResponse, DescribeWebPageGeneralizeResponse, DescribeAccountsResponse, ModifyProVersionRenewFlagResponse, DescribeComponentStatisticsRequest, DescribeOverviewStatisticsRequest, DescribeOpenPortStatisticsResponse, DeleteAttackLogsResponse, DescribeLoginWhiteListResponse, DescribeMachineRegionsResponse, ExportMaliciousRequestsRequest, DescribeScanMalwareScheduleResponse, ScanAssetResponse, DeleteSearchTemplateRequest, DeleteTagsResponse, DescribeSecurityEventsCntRequest, DeleteBruteAttacksRequest, DescribeMalwareTimingScanSettingRequest, DescribeTagsResponse, ExportMaliciousRequestsResponse, SeparateMalwaresRequest, CreateSearchLogResponse, DescribeTagMachinesResponse, DescribeSecurityTrendsResponse, DescribeIndexListRequest, ModifyAutoOpenProVersionConfigRequest, DescribeSecurityDynamicsResponse, DeleteReverseShellEventsResponse, DeletePrivilegeEventsRequest, DeleteBashRulesRequest, CreateProtectServerResponse, CloseProVersionResponse, DeleteAttackLogsRequest, ModifyProVersionRenewFlagRequest, ExportReverseShellEventsResponse, ExportAttackLogsRequest, OpenProVersionResponse, DescribeMachineInfoRequest, SwitchBashRulesRequest, DescribeScanTaskDetailsResponse, DescribeGeneralStatRequest, ExportReverseShellEventsRequest, DeleteLoginWhiteListResponse, DescribeAccountStatisticsRequest, DescribeAttackLogsResponse, OpenProVersionPrepaidResponse, DeleteMalwaresResponse, ScanVulAgainResponse, SeparateMalwaresResponse, DescribeTagsRequest, DescribeHistoryServiceRequest, ExportVulDetectionReportRequest, SyncAssetScanRequest, DescribeSecurityDynamicsRequest, ExportBashEventsResponse, DescribeESAggregationsRequest, DeleteWebPageEventLogResponse, DescribeReverseShellRulesResponse, DescribeBruteAttackListRequest, DescribeProcessStatisticsResponse, DeleteNonlocalLoginPlacesRequest, DescribeMachineListRequest, DescribeMachinesResponse, DescribePrivilegeRulesResponse, ExportNonlocalLoginPlacesRequest, DeleteSearchTemplateResponse, ExportMalwaresResponse, DeleteWebPageEventLogRequest, OpenProVersionPrepaidRequest, DescribeScanVulSettingRequest, DescribeESHitsRequest, DescribeUsualLoginPlacesRequest, DescribeGeneralStatResponse, DescribeProcessStatisticsRequest, DeleteMachineTagResponse, DescribeHistoryAccountsRequest, CreateScanMalwareSettingRequest, DescribeAssetInfoResponse, OpenProVersionRequest, DescribeMalwareTimingScanSettingResponse, DeleteBashEventsRequest, RescanImpactedHostResponse, ExportTasksRequest, ScanVulRequest, ExportVulDetectionExcelRequest, DeleteReverseShellEventsRequest, DescribeSearchLogsResponse, ModifyAutoOpenProVersionConfigResponse, DescribeMachineOsListResponse, IgnoreImpactedHostsRequest, DescribeAssetRecentMachineInfoResponse, DeleteBruteAttacksResponse, DeleteMaliciousRequestsRequest, DescribeMachinesRequest, DeleteMalwaresRequest, RecoverMalwaresResponse, CreateSearchLogRequest, DeletePrivilegeRulesRequest, ExportTasksResponse } from "./cwp_models";
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
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     */
    TrustMalwares(req: TrustMalwaresRequest, cb?: (error: string, rep: TrustMalwaresResponse) => void): Promise<TrustMalwaresResponse>;
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     */
    DescribeComponentStatistics(req: DescribeComponentStatisticsRequest, cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void): Promise<DescribeComponentStatisticsResponse>;
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
     * 删除检索模板
     */
    DeleteSearchTemplate(req: DeleteSearchTemplateRequest, cb?: (error: string, rep: DeleteSearchTemplateResponse) => void): Promise<DeleteSearchTemplateResponse>;
    /**
     * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
     */
    DescribeScanTaskDetails(req: DescribeScanTaskDetailsRequest, cb?: (error: string, rep: DescribeScanTaskDetailsResponse) => void): Promise<DescribeScanTaskDetailsResponse>;
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
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     */
    RenewProVersion(req: RenewProVersionRequest, cb?: (error: string, rep: RenewProVersionResponse) => void): Promise<RenewProVersionResponse>;
    /**
     * 导出网络攻击日志
     */
    ExportAttackLogs(req: ExportAttackLogsRequest, cb?: (error: string, rep: ExportAttackLogsResponse) => void): Promise<ExportAttackLogsResponse>;
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     */
    DescribeUsualLoginPlaces(req: DescribeUsualLoginPlacesRequest, cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void): Promise<DescribeUsualLoginPlacesResponse>;
    /**
     * 根据Ids删除高危命令事件
     */
    DeleteBashEvents(req: DeleteBashEventsRequest, cb?: (error: string, rep: DeleteBashEventsResponse) => void): Promise<DeleteBashEventsResponse>;
    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     */
    DeleteMaliciousRequests(req: DeleteMaliciousRequestsRequest, cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void): Promise<DeleteMaliciousRequestsResponse>;
    /**
     * 获取索引列表
     */
    DescribeIndexList(req?: DescribeIndexListRequest, cb?: (error: string, rep: DescribeIndexListResponse) => void): Promise<DescribeIndexListResponse>;
    /**
     * 获取反弹Shell规则列表
     */
    DescribeReverseShellRules(req: DescribeReverseShellRulesRequest, cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void): Promise<DescribeReverseShellRulesResponse>;
    /**
     * 用于异步导出数据量大的日志文件
     */
    ExportTasks(req: ExportTasksRequest, cb?: (error: string, rep: ExportTasksResponse) => void): Promise<ExportTasksResponse>;
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
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     */
    DeleteBruteAttacks(req: DeleteBruteAttacksRequest, cb?: (error: string, rep: DeleteBruteAttacksResponse) => void): Promise<DeleteBruteAttacksResponse>;
    /**
     * 导出高危命令事件
     */
    ExportBashEvents(req: ExportBashEventsRequest, cb?: (error: string, rep: ExportBashEventsResponse) => void): Promise<ExportBashEventsResponse>;
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
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     */
    IgnoreImpactedHosts(req: IgnoreImpactedHostsRequest, cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void): Promise<IgnoreImpactedHostsResponse>;
    /**
     * 获取本地提权规则列表
     */
    DescribePrivilegeRules(req: DescribePrivilegeRulesRequest, cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void): Promise<DescribePrivilegeRulesResponse>;
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     */
    DeleteNonlocalLoginPlaces(req: DeleteNonlocalLoginPlacesRequest, cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void): Promise<DeleteNonlocalLoginPlacesResponse>;
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     */
    ExportMaliciousRequests(req: ExportMaliciousRequestsRequest, cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void): Promise<ExportMaliciousRequestsResponse>;
    /**
     * 获取指定标签关联的服务器信息
     */
    DescribeTagMachines(req: DescribeTagMachinesRequest, cb?: (error: string, rep: DescribeTagMachinesResponse) => void): Promise<DescribeTagMachinesResponse>;
    /**
     *  一键检测
     */
    ScanVul(req: ScanVulRequest, cb?: (error: string, rep: ScanVulResponse) => void): Promise<ScanVulResponse>;
    /**
     * 导出本地提权事件
     */
    ExportPrivilegeEvents(req: ExportPrivilegeEventsRequest, cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void): Promise<ExportPrivilegeEventsResponse>;
    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     */
    DescribeOverviewStatistics(req?: DescribeOverviewStatisticsRequest, cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void): Promise<DescribeOverviewStatisticsResponse>;
    /**
     * 添加检索模板
     */
    CreateSearchTemplate(req: CreateSearchTemplateRequest, cb?: (error: string, rep: CreateSearchTemplateResponse) => void): Promise<CreateSearchTemplateResponse>;
    /**
     * 资产指纹启动扫描
     */
    ScanAsset(req: ScanAssetRequest, cb?: (error: string, rep: ScanAssetResponse) => void): Promise<ScanAssetResponse>;
    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     */
    DescribeSecurityDynamics(req: DescribeSecurityDynamicsRequest, cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void): Promise<DescribeSecurityDynamicsResponse>;
    /**
     * 根据Ids删除反弹Shell事件
     */
    DeleteReverseShellEvents(req: DeleteReverseShellEventsRequest, cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void): Promise<DeleteReverseShellEventsResponse>;
    /**
     * 删除本地提权规则
     */
    DeletePrivilegeRules(req: DeletePrivilegeRulesRequest, cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void): Promise<DeletePrivilegeRulesResponse>;
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     */
    DeleteMalwares(req: DeleteMalwaresRequest, cb?: (error: string, rep: DeleteMalwaresResponse) => void): Promise<DeleteMalwaresResponse>;
    /**
     * 本接口 (DescribeMachineList) 用于网页防篡改获取区域主机列表。
     */
    DescribeMachineList(req: DescribeMachineListRequest, cb?: (error: string, rep: DescribeMachineListResponse) => void): Promise<DescribeMachineListResponse>;
    /**
     * 查询木马扫描进度
     */
    DescribeScanMalwareSchedule(req?: DescribeScanMalwareScheduleRequest, cb?: (error: string, rep: DescribeScanMalwareScheduleResponse) => void): Promise<DescribeScanMalwareScheduleResponse>;
    /**
     * 本接口用于删除异地登录白名单规则。
     */
    DeleteLoginWhiteList(req: DeleteLoginWhiteListRequest, cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void): Promise<DeleteLoginWhiteListResponse>;
    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     */
    CloseProVersion(req: CloseProVersionRequest, cb?: (error: string, rep: CloseProVersionResponse) => void): Promise<CloseProVersionResponse>;
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
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     */
    DescribeOpenPortStatistics(req: DescribeOpenPortStatisticsRequest, cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void): Promise<DescribeOpenPortStatisticsResponse>;
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     */
    ExportBruteAttacks(req: ExportBruteAttacksRequest, cb?: (error: string, rep: ExportBruteAttacksResponse) => void): Promise<ExportBruteAttacksResponse>;
    /**
     * 切换高危命令规则状态
     */
    SwitchBashRules(req: SwitchBashRulesRequest, cb?: (error: string, rep: SwitchBashRulesResponse) => void): Promise<SwitchBashRulesResponse>;
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     */
    ExportMalwares(req: ExportMalwaresRequest, cb?: (error: string, rep: ExportMalwaresResponse) => void): Promise<ExportMalwaresResponse>;
    /**
     * 获取密码破解列表
     */
    DescribeBruteAttackList(req: DescribeBruteAttackListRequest, cb?: (error: string, rep: DescribeBruteAttackListResponse) => void): Promise<DescribeBruteAttackListResponse>;
    /**
     * 网站防篡改-修改网站防护设置
     */
    ModifyWebPageProtectSetting(req: ModifyWebPageProtectSettingRequest, cb?: (error: string, rep: ModifyWebPageProtectSettingResponse) => void): Promise<ModifyWebPageProtectSettingResponse>;
    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     */
    OpenProVersionPrepaid(req: OpenProVersionPrepaidRequest, cb?: (error: string, rep: OpenProVersionPrepaidResponse) => void): Promise<OpenProVersionPrepaidResponse>;
    /**
     * 获取快速检索列表
     */
    DescribeSearchTemplates(req: DescribeSearchTemplatesRequest, cb?: (error: string, rep: DescribeSearchTemplatesResponse) => void): Promise<DescribeSearchTemplatesResponse>;
    /**
     * 新增或编辑标签
     */
    EditTags(req: EditTagsRequest, cb?: (error: string, rep: EditTagsResponse) => void): Promise<EditTagsResponse>;
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     */
    SeparateMalwares(req: SeparateMalwaresRequest, cb?: (error: string, rep: SeparateMalwaresResponse) => void): Promise<SeparateMalwaresResponse>;
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     */
    DescribeProcessStatistics(req: DescribeProcessStatisticsRequest, cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void): Promise<DescribeProcessStatisticsResponse>;
    /**
     * 查看恶意文件详情
     */
    DescribeMalwareInfo(req: DescribeMalwareInfoRequest, cb?: (error: string, rep: DescribeMalwareInfoResponse) => void): Promise<DescribeMalwareInfoResponse>;
    /**
     * 删除高危命令规则
     */
    DeleteBashRules(req: DeleteBashRulesRequest, cb?: (error: string, rep: DeleteBashRulesResponse) => void): Promise<DeleteBashRulesResponse>;
    /**
     * 漏洞管理-重新检测接口
     */
    ScanVulAgain(req: ScanVulAgainRequest, cb?: (error: string, rep: ScanVulAgainResponse) => void): Promise<ScanVulAgainResponse>;
    /**
     * 获取反弹Shell列表
     */
    DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse>;
    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
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
     * 该接口已废弃

本接口 (DescribeAccounts) 用于获取帐号列表数据。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     */
    DescribeProVersionInfo(req?: DescribeProVersionInfoRequest, cb?: (error: string, rep: DescribeProVersionInfoResponse) => void): Promise<DescribeProVersionInfoResponse>;
    /**
     * 获取ES查询文档列表
     */
    DescribeESHits(req: DescribeESHitsRequest, cb?: (error: string, rep: DescribeESHitsResponse) => void): Promise<DescribeESHitsResponse>;
    /**
     * 查询网站防篡改概览信息
     */
    DescribeWebPageGeneralize(req?: DescribeWebPageGeneralizeRequest, cb?: (error: string, rep: DescribeWebPageGeneralizeResponse) => void): Promise<DescribeWebPageGeneralizeResponse>;
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
     * 根据基线策略id更新策略信息
     */
    UpdateBaselineStrategy(req: UpdateBaselineStrategyRequest, cb?: (error: string, rep: UpdateBaselineStrategyResponse) => void): Promise<UpdateBaselineStrategyResponse>;
    /**
     * 入侵检测，获取恶意请求列表
     */
    DescribeRiskDnsList(req: DescribeRiskDnsListRequest, cb?: (error: string, rep: DescribeRiskDnsListResponse) => void): Promise<DescribeRiskDnsListResponse>;
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     */
    DescribeHistoryAccounts(req: DescribeHistoryAccountsRequest, cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void): Promise<DescribeHistoryAccountsResponse>;
    /**
     * 添加房展防护服务器
     */
    CreateProtectServer(req: CreateProtectServerRequest, cb?: (error: string, rep: CreateProtectServerResponse) => void): Promise<CreateProtectServerResponse>;
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     */
    ExportNonlocalLoginPlaces(req: ExportNonlocalLoginPlacesRequest, cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void): Promise<ExportNonlocalLoginPlacesResponse>;
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     */
    UntrustMalwares(req: UntrustMalwaresRequest, cb?: (error: string, rep: UntrustMalwaresResponse) => void): Promise<UntrustMalwaresResponse>;
    /**
     * 本接口 (OpenProVersion) 用于开通专业版。
     */
    OpenProVersion(req: OpenProVersionRequest, cb?: (error: string, rep: OpenProVersionResponse) => void): Promise<OpenProVersionResponse>;
    /**
     * 查询可筛选操作系统列表.
     */
    DescribeMachineOsList(req?: DescribeMachineOsListRequest, cb?: (error: string, rep: DescribeMachineOsListResponse) => void): Promise<DescribeMachineOsListResponse>;
    /**
     * 定时扫描设置
     */
    ModifyMalwareTimingScanSettings(req: ModifyMalwareTimingScanSettingsRequest, cb?: (error: string, rep: ModifyMalwareTimingScanSettingsResponse) => void): Promise<ModifyMalwareTimingScanSettingsResponse>;
    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     */
    CreateScanMalwareSetting(req: CreateScanMalwareSettingRequest, cb?: (error: string, rep: CreateScanMalwareSettingResponse) => void): Promise<CreateScanMalwareSettingResponse>;
    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     */
    ModifyProVersionRenewFlag(req: ModifyProVersionRenewFlagRequest, cb?: (error: string, rep: ModifyProVersionRenewFlagResponse) => void): Promise<ModifyProVersionRenewFlagResponse>;
    /**
     * 获取主机安全相关统计
     */
    DescribeGeneralStat(req: DescribeGeneralStatRequest, cb?: (error: string, rep: DescribeGeneralStatResponse) => void): Promise<DescribeGeneralStatResponse>;
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
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     */
    DeleteMachine(req: DeleteMachineRequest, cb?: (error: string, rep: DeleteMachineResponse) => void): Promise<DeleteMachineResponse>;
    /**
     * 该接口已废弃

本接口 (RescanImpactedHost) 用于漏洞重新检测。
     */
    RescanImpactedHost(req: RescanImpactedHostRequest, cb?: (error: string, rep: RescanImpactedHostResponse) => void): Promise<RescanImpactedHostResponse>;
    /**
     * 获取所有主机标签
     */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     */
    DescribeSecurityTrends(req: DescribeSecurityTrendsRequest, cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void): Promise<DescribeSecurityTrendsResponse>;
    /**
     * 网络攻击日志详情
     */
    DescribeAttackLogInfo(req: DescribeAttackLogInfoRequest, cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void): Promise<DescribeAttackLogInfoResponse>;
    /**
     * 获取资产数量： 主机数、账号数、端口数、进程数、软件数、数据库数、Web应用数、Web框架数、Web服务数、Web站点数
     */
    DescribeAssetInfo(req?: DescribeAssetInfoRequest, cb?: (error: string, rep: DescribeAssetInfoResponse) => void): Promise<DescribeAssetInfoResponse>;
    /**
     * 网站防篡改-删除事件记录
     */
    DeleteWebPageEventLog(req?: DeleteWebPageEventLogRequest, cb?: (error: string, rep: DeleteWebPageEventLogResponse) => void): Promise<DeleteWebPageEventLogResponse>;
    /**
     * 导出本次漏洞检测Excel
     */
    ExportVulDetectionExcel(req: ExportVulDetectionExcelRequest, cb?: (error: string, rep: ExportVulDetectionExcelResponse) => void): Promise<ExportVulDetectionExcelResponse>;
    /**
     * 获取高危命令列表
     */
    DescribeBashEvents(req: DescribeBashEventsRequest, cb?: (error: string, rep: DescribeBashEventsResponse) => void): Promise<DescribeBashEventsResponse>;
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 导出漏洞检测报告。
     */
    ExportVulDetectionReport(req: ExportVulDetectionReportRequest, cb?: (error: string, rep: ExportVulDetectionReportResponse) => void): Promise<ExportVulDetectionReportResponse>;
    /**
     * 新增或修改高危命令规则
     */
    EditBashRules(req: EditBashRulesRequest, cb?: (error: string, rep: EditBashRulesResponse) => void): Promise<EditBashRulesResponse>;
    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     */
    InquiryPriceOpenProVersionPrepaid(req: InquiryPriceOpenProVersionPrepaidRequest, cb?: (error: string, rep: InquiryPriceOpenProVersionPrepaidResponse) => void): Promise<InquiryPriceOpenProVersionPrepaidResponse>;
}
