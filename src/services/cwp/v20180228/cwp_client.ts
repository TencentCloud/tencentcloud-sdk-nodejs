/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ExportBashEventsRequest,
  DescribeSearchTemplatesResponse,
  ExportReverseShellEventsResponse,
  DescribeBaselineTopResponse,
  DescribeAssetWebServiceInfoListResponse,
  DescribeAssetAppProcessListResponse,
  ScanVulAgainRequest,
  DeleteBaselineStrategyResponse,
  ExportWebPageEventListResponse,
  DescribeUndoVulCountsResponse,
  DescribeBaselineScanScheduleResponse,
  MaliciousRequestWhiteListInfo,
  DeleteBashEventsResponse,
  DescribeAssetProcessInfoListRequest,
  ExportWebPageEventListRequest,
  AssetNetworkCardInfo,
  DescribeAssetWebFrameListRequest,
  DescribeMonthInspectionReportResponse,
  DescribeSaveOrUpdateWarningsResponse,
  DescribeBaselineHostTopResponse,
  DeleteBashRulesResponse,
  ExportVulListResponse,
  DescribeHistoryServiceResponse,
  BaselineEffectHost,
  ModifyWebPageProtectSettingResponse,
  DescribeVulInfoCvssResponse,
  DescribeBaselineStrategyDetailRequest,
  MalWareList,
  DescribeAssetUserInfoResponse,
  Tag,
  ExportAttackLogsResponse,
  DescribeBaselineEffectHostListResponse,
  TrustMalwaresRequest,
  ExportVulEffectHostListRequest,
  DescribeBaselineBasicInfoRequest,
  DescribeProVersionInfoRequest,
  DescribeVulCountByDatesRequest,
  DescribeBaselineStrategyListResponse,
  DefendAttackLog,
  DescribeAssetEnvListResponse,
  DescribeAttackLogInfoResponse,
  DescribePrivilegeEventsResponse,
  DescribeOverviewStatisticsResponse,
  DescribeMonthInspectionReportRequest,
  ProtectNetInfo,
  ReverseShellRule,
  DescribeBashRulesResponse,
  DescribeAvailableExpertServiceDetailResponse,
  ChangeRuleEventsIgnoreStatusRequest,
  DescribeWebPageEventListRequest,
  ExportAssetCoreModuleListRequest,
  DescribeComponentStatisticsResponse,
  DescribeMachineRegionsRequest,
  DescribeSearchExportListResponse,
  BruteAttackRule,
  DescribeAvailableExpertServiceDetailRequest,
  DescribeServerRelatedDirInfoResponse,
  DescribeUsualLoginPlacesResponse,
  IgnoreBaselineRule,
  DescribeBaselineBasicInfoResponse,
  EditBashRulesResponse,
  LoginWhiteLists,
  ScanVulResponse,
  DescribeOverviewStatisticsRequest,
  OsName,
  DescribeTagMachinesRequest,
  AssetKeyVal,
  ModifyAutoOpenProVersionConfigRequest,
  DeletePrivilegeEventsRequest,
  ExportAttackLogsRequest,
  IgnoreRuleEffectHostInfo,
  DescribeBanModeRequest,
  DescribeSecurityEventStatRequest,
  DeleteSearchTemplateRequest,
  EmergencyVul,
  ExportReverseShellEventsRequest,
  DeleteLoginWhiteListResponse,
  DescribeAttackLogsResponse,
  DeleteMalwaresResponse,
  DescribeAssetInitServiceListRequest,
  ScanVulAgainResponse,
  VulTopInfo,
  SeparateMalwaresResponse,
  DescribeTagsRequest,
  DescribeRiskDnsListRequest,
  DescribeStrategyExistRequest,
  DescribeSecurityDynamicsRequest,
  CheckBashRuleParamsRequest,
  DescribeIgnoreBaselineRuleRequest,
  ExportNonlocalLoginPlacesResponse,
  DescribeAssetJarListResponse,
  ExportMaliciousRequestsRequest,
  HostLoginList,
  DescribeWebPageProtectStatRequest,
  AssetJarDetail,
  ExportVulDetectionReportRequest,
  ExportMalwaresResponse,
  DescribeScanVulSettingRequest,
  DescribeESHitsRequest,
  DescribeAssetPlanTaskListResponse,
  DescribeBaselineRuleRequest,
  DescribeHistoryAccountsRequest,
  DescribeAssetMachineDetailRequest,
  CancelIgnoreVulResponse,
  IgnoreImpactedHostsResponse,
  DescribeAssetMachineDetailResponse,
  DescribeStrategyExistResponse,
  DeleteReverseShellEventsRequest,
  DescribeBanRegionsRequest,
  DescribeServersAndRiskAndFirstInfoRequest,
  DescribeAssetWebServiceProcessListResponse,
  IgnoreImpactedHostsRequest,
  AssetUserDetail,
  DescribeMachinesRequest,
  DescribeVulEffectHostListRequest,
  AssetWebAppPluginInfo,
  DeletePrivilegeRulesRequest,
  DescribeMalwareInfoRequest,
  DescribeVersionStatisticsRequest,
  ExportPrivilegeEventsResponse,
  UsualPlace,
  DescribeReverseShellEventsRequest,
  ReverseShell,
  DescribeAttackVulTypeListRequest,
  DescribeLogStorageStatisticRequest,
  DescribeAssetRecentMachineInfoRequest,
  CheckBashRuleParamsResponse,
  ExportBaselineListRequest,
  DeleteProtectDirRequest,
  ExportIgnoreBaselineRuleResponse,
  BruteAttackRuleList,
  DescribeBanStatusResponse,
  DescribeVulListRequest,
  VulDetailInfo,
  DescribeServersAndRiskAndFirstInfoResponse,
  AssetAppBaseInfo,
  DescribePrivilegeRulesRequest,
  MonthInspectionReport,
  DescribeAssetSystemPackageListResponse,
  DescribeAssetMachineListResponse,
  DescribeWebPageGeneralizeRequest,
  AssetDiskPartitionInfo,
  ModifyWarningSettingRequest,
  DescribeMalwareRiskWarningRequest,
  DescribeAssetInfoRequest,
  DescribeVulTopResponse,
  UntrustMalwaresRequest,
  DescribeAssetAppListRequest,
  UntrustMalwaresResponse,
  DescribeExpertServiceListResponse,
  DescribeAccountStatisticsResponse,
  DescribeSearchExportListRequest,
  ScanAssetRequest,
  DescribeBaselineRuleResponse,
  DeleteMaliciousRequestsResponse,
  DescribeESHitsResponse,
  ProtectDirRelatedServer,
  ExportBruteAttacksRequest,
  DeleteMachineResponse,
  ScanVulRequest,
  RecoverMalwaresRequest,
  TagMachine,
  DescribeAssetCoreModuleInfoResponse,
  DescribeAssetEnvListRequest,
  StopNoticeBanTipsRequest,
  DescribeScanMalwareScheduleRequest,
  AssetMachineBaseInfo,
  DescribeBashEventsResponse,
  UpdateMachineTagsResponse,
  DescribeBashEventsRequest,
  DeleteMachineRequest,
  DescribeAssetWebLocationListResponse,
  DescribeAssetJarListRequest,
  PrivilegeEscalationProcess,
  DescribeProtectNetListResponse,
  DescribeESAggregationsResponse,
  AssetWebLocationInfo,
  ChangeRuleEventsIgnoreStatusResponse,
  AssetMachineDetail,
  AssetDatabaseBaseInfo,
  DeletePrivilegeRulesResponse,
  CreateProtectServerRequest,
  DescribeMachineListRequest,
  CreateEmergencyVulScanResponse,
  DescribeAssetCoreModuleInfoRequest,
  DescribeIndexListResponse,
  ModifyWebPageProtectDirRequest,
  DescribeWebPageGeneralizeResponse,
  DescribeBanWhiteListResponse,
  EmergencyResponseInfo,
  DescribeOpenPortStatisticsResponse,
  DeleteAttackLogsResponse,
  SecurityDynamic,
  DescribeMalWareListRequest,
  DescribeProVersionInfoResponse,
  DeleteTagsResponse,
  DescribeSecurityEventsCntRequest,
  AssetUserBaseInfo,
  DescribeMachineOsListResponse,
  ExportMaliciousRequestsResponse,
  EffectiveMachineInfo,
  DescribeVulCountByDatesResponse,
  DescribeTagMachinesResponse,
  DescribeIndexListRequest,
  ProtectDirInfo,
  DeleteBashRulesRequest,
  CreateProtectServerResponse,
  DescribeExpertServiceListRequest,
  DescribeBaselineHostTopRequest,
  ExportBaselineEffectHostListResponse,
  DescribeVulHostTopResponse,
  TrustMalwaresResponse,
  DescribeHistoryServiceRequest,
  DescribeWarningListRequest,
  SyncAssetScanRequest,
  VulEffectHostList,
  DescribeServerRelatedDirInfoRequest,
  DescribeESAggregationsRequest,
  BaselineHostTopList,
  DescribeReverseShellRulesResponse,
  DescribeBruteAttackListRequest,
  DescribeVulListResponse,
  DescribeUndoVulCountsRequest,
  ScanAssetResponse,
  Machine,
  ProtectMachineInfo,
  DescribeMalwareFileRequest,
  DeleteMaliciousRequestsRequest,
  DescribeBanWhiteListRequest,
  DescribeWebPageServiceInfoResponse,
  DescribeUsualLoginPlacesRequest,
  ProtectEventLists,
  SwitchBashRulesRequest,
  DescribeProcessStatisticsRequest,
  DescribeAssetInfoResponse,
  MalwareRisk,
  ExportProtectDirListResponse,
  AssetWebFrameBaseInfo,
  ExportTasksRequest,
  DescribeAssetWebLocationInfoResponse,
  ModifyBruteAttackRulesRequest,
  ExportVulListRequest,
  DescribeBaselineScanScheduleRequest,
  DescribeEmergencyVulListResponse,
  DescribeAssetUserListResponse,
  StandardModeConfig,
  BashEvent,
  DeleteMalwaresRequest,
  RecoverMalwaresResponse,
  RegionSet,
  DescribeReverseShellRulesRequest,
  DescribeScanVulSettingResponse,
  AssetFilters,
  DescribeAssetDatabaseInfoResponse,
  SetBashEventsStatusRequest,
  AssetAppProcessInfo,
  DescribeBaselineStrategyListRequest,
  RegionInfo,
  DescribeAttackLogsRequest,
  ComponentStatistics,
  ExportAssetWebServiceInfoListRequest,
  SetBashEventsStatusResponse,
  ProtectMachine,
  DescribeAssetUserInfoRequest,
  DescribeProtectDirListRequest,
  ExportPrivilegeEventsRequest,
  DescribeMalwareFileResponse,
  TaskStatus,
  DescribeRiskDnsListResponse,
  DescribeAssetWebAppListResponse,
  ScanTaskDetails,
  AssetDatabaseDetail,
  DescribeScanTaskStatusRequest,
  ExportIgnoreBaselineRuleRequest,
  DeleteMachineTagRequest,
  DescribeBaselineDetailRequest,
  ZoneInfo,
  BaselineRuleInfo,
  DescribeExportMachinesResponse,
  DescribeScanTaskStatusResponse,
  DescribeProtectNetListRequest,
  DescribeWebPageEventListResponse,
  DeleteProtectDirResponse,
  ModifyBanStatusRequest,
  DescribeWebPageServiceInfoRequest,
  DescribeLogStorageStatisticResponse,
  DescribeEmergencyResponseListRequest,
  DescribeScanStateResponse,
  EditTagsRequest,
  DeleteReverseShellRulesRequest,
  DescribeBaselineEffectHostListRequest,
  ExportSecurityTrendsRequest,
  DescribeAssetDatabaseInfoRequest,
  DescribeOpenPortStatisticsRequest,
  ExportAssetWebServiceInfoListResponse,
  ExportSecurityTrendsResponse,
  ModifyMalwareTimingScanSettingsResponse,
  DeleteNonlocalLoginPlacesResponse,
  ModifyWebPageProtectSettingRequest,
  DeleteMalwareScanTaskResponse,
  DescribeBaselineDetailResponse,
  ExportIgnoreRuleEffectHostListResponse,
  DescribeAssetWebAppPluginListRequest,
  DeletePrivilegeEventsResponse,
  DescribeMachineInfoResponse,
  VulHostTopInfo,
  DescribeImportMachineInfoRequest,
  VulLevelInfo,
  ProtectStat,
  DescribeVulEffectHostListResponse,
  SwitchBashRulesResponse,
  DescribeSearchLogsRequest,
  DescribeAttackLogInfoRequest,
  ScanVulSettingResponse,
  DescribeAssetJarInfoResponse,
  DescribeVulInfoCvssRequest,
  DescribeComponentStatisticsRequest,
  DescribeMaliciousRequestWhiteListRequest,
  ModifyBanStatusResponse,
  DescribeLoginWhiteListResponse,
  StopNoticeBanTipsResponse,
  DescribeScanMalwareScheduleResponse,
  AssetWebLocationBaseInfo,
  DescribeMalwareTimingScanSettingRequest,
  BashRule,
  CreateSearchLogResponse,
  DescribeSecurityTrendsResponse,
  AssetSystemPackageInfo,
  DescribeEmergencyVulListRequest,
  DescribeSecurityDynamicsResponse,
  DeleteReverseShellEventsResponse,
  AssetWebServiceBaseInfo,
  DescribeProVersionStatusResponse,
  DescribeScanTaskDetailsResponse,
  DescribeGeneralStatRequest,
  UpdateBaselineStrategyResponse,
  AssetInitServiceBaseInfo,
  DescribeVulHostTopRequest,
  DescribeIgnoreRuleEffectHostListRequest,
  ModifyWarningSettingResponse,
  LoginWhiteCombinedInfo,
  DescribeMalwareInfoResponse,
  DescribeAssetJarInfoRequest,
  DescribePrivilegeEventsRequest,
  BaselineInfo,
  DescribeVulHostCountScanTimeRequest,
  ExportScanTaskDetailsResponse,
  ExportBashEventsResponse,
  EventStat,
  DeleteLoginWhiteListRequest,
  DeleteWebPageEventLogResponse,
  DescribeVulLevelCountResponse,
  DescribeVersionStatisticsResponse,
  DescribeBruteAttackRulesRequest,
  DescribeProcessStatisticsResponse,
  ModifyBruteAttackRulesResponse,
  DeleteNonlocalLoginPlacesRequest,
  DescribeAssetWebAppPluginListResponse,
  DescribeTagsResponse,
  BaselineEventLevelInfo,
  DescribeLoginWhiteCombinedListRequest,
  Strategy,
  DeleteSearchTemplateResponse,
  DescribeBanRegionsResponse,
  DescribeEmergencyResponseListResponse,
  ProtectHostConfig,
  AssetPlanTask,
  HistoryAccount,
  DescribeAssetAppListResponse,
  ModifyWebPageProtectSwitchRequest,
  CreateScanMalwareSettingRequest,
  DescribeMalwareTimingScanSettingResponse,
  DescribeHostLoginListRequest,
  SecurityTrend,
  DescribeAssetWebServiceProcessListRequest,
  PrivilegeRule,
  ExportVulDetectionExcelRequest,
  CreateEmergencyVulScanRequest,
  DescribeProtectDirRelatedServerResponse,
  ModifyAutoOpenProVersionConfigResponse,
  ExportBaselineEffectHostListRequest,
  AssetCoreModuleDetail,
  DescribeBanStatusRequest,
  DescribeAssetRecentMachineInfoResponse,
  DescribeMalWareListResponse,
  DescribeAssetPortInfoListResponse,
  DescribeProtectDirListResponse,
  DescribeMaliciousRequestWhiteListResponse,
  DeleteBruteAttacksResponse,
  ExportTasksResponse,
  DescribeIgnoreBaselineRuleResponse,
  DescribeMachineOsListRequest,
  DescribeMalwareRiskWarningResponse,
  DescribeBashRulesRequest,
  BaselineBasicInfo,
  DescribeBanModeResponse,
  DescribeImportMachineInfoResponse,
  DescribeSecurityEventStatResponse,
  DescribeAssetDatabaseListRequest,
  ModifyWebPageProtectSwitchResponse,
  DescribeAssetMachineListRequest,
  CreateSearchTemplateResponse,
  DescribeAssetDatabaseListResponse,
  ExportMalwaresRequest,
  ExportNonlocalLoginPlacesRequest,
  SyncAssetScanResponse,
  AssetCoreModuleBaseInfo,
  CreateBaselineStrategyRequest,
  DescribeSecurityTrendsRequest,
  DescribeAttackVulTypeListResponse,
  DescribePrivilegeRulesResponse,
  DescribeReverseShellEventsResponse,
  BruteAttackInfo,
  DescribeWebPageProtectStatResponse,
  DescribeAssetPortInfoListRequest,
  VulLevelCountInfo,
  DescribeExportMachinesRequest,
  CreateScanMalwareSettingResponse,
  WarningObject,
  RiskDnsList,
  DeleteMalwareScanTaskRequest,
  DescribeIgnoreRuleEffectHostListResponse,
  ExportProtectDirListRequest,
  CreateBaselineStrategyResponse,
  ExportAssetCoreModuleListResponse,
  DescribeHistoryAccountsResponse,
  DescribeLoginWhiteListRequest,
  OpenPortStatistics,
  ExportVulDetectionReportResponse,
  DescribeScanScheduleRequest,
  EditBashRulesRequest,
  DescribeBruteAttackListResponse,
  ScanVulSettingRequest,
  ExportScanTaskDetailsRequest,
  ExportBaselineListResponse,
  DescribeBruteAttackRulesResponse,
  ModifyBanModeResponse,
  BaselineRuleTopInfo,
  AssetProcessBaseInfo,
  DeleteBruteAttacksRequest,
  DescribeAssetCoreModuleListResponse,
  DescribeLoginWhiteCombinedListResponse,
  ExportVulDetectionExcelResponse,
  DescribeWarningListResponse,
  CreateSearchTemplateRequest,
  DeleteTagsRequest,
  DescribeScanStateRequest,
  ModifyMalwareTimingScanSettingsRequest,
  AssetEnvBaseInfo,
  DescribeMachineListResponse,
  MalwareInfo,
  Place,
  DescribeExpertServiceOrderListResponse,
  DeleteReverseShellRulesResponse,
  DescribeAssetPlanTaskListRequest,
  DescribeScanTaskDetailsRequest,
  DescribeProtectDirRelatedServerRequest,
  DescribeSearchLogsResponse,
  SecurityEventInfo,
  DescribeBaselineAnalysisDataResponse,
  ModifyBanModeRequest,
  BanWhiteListDetail,
  DescribeMachineRegionsResponse,
  AssetWebAppBaseInfo,
  AssetCoreModuleParam,
  DeleteBashEventsRequest,
  AssetJarBaseInfo,
  SeparateMalwaresRequest,
  VulInfoList,
  ExportIgnoreRuleEffectHostListRequest,
  DescribeVulHostCountScanTimeResponse,
  DescribeAssetCoreModuleListRequest,
  DeleteAttackLogsRequest,
  DescribeBaselineStrategyDetailResponse,
  DescribeBaselineListRequest,
  DescribeBaselineTopRequest,
  DescribeAssetAppProcessListRequest,
  Filter,
  DescribeAccountStatisticsRequest,
  ExportBruteAttacksResponse,
  SecurityButlerInfo,
  DescribeSaveOrUpdateWarningsRequest,
  DescribeAssetProcessInfoListResponse,
  ProcessStatistics,
  DescribeScanScheduleResponse,
  BaselineDetail,
  ModifyWebPageProtectDirResponse,
  DescribeAssetWebAppListRequest,
  ExpertServiceOrderInfo,
  AccountStatistics,
  AssetUserKeyInfo,
  DescribeMachinesResponse,
  DescribeAssetWebLocationListRequest,
  DescribeVulLevelCountRequest,
  DeleteWebPageEventLogRequest,
  DescribeProVersionStatusRequest,
  DescribeBaselineListResponse,
  DescribeExpertServiceOrderListRequest,
  ExportVulEffectHostListResponse,
  DescribeVulTopRequest,
  DescribeMachineInfoRequest,
  SearchTemplate,
  DescribeGeneralStatResponse,
  EditTagsResponse,
  DeleteMachineTagResponse,
  DescribeSecurityEventsCntResponse,
  WarningInfoObj,
  UpdateMachineTagsRequest,
  UpdateBaselineStrategyRequest,
  DescribeHostLoginListResponse,
  DescribeBaselineAnalysisDataRequest,
  AssetPortBaseInfo,
  DescribeAssetWebLocationInfoRequest,
  DescribeAssetInitServiceListResponse,
  DescribeAssetWebFrameListResponse,
  DescribeAssetUserListRequest,
  DeleteBaselineStrategyRequest,
  DescribeAssetSystemPackageListRequest,
  MachineTag,
  Filters,
  DescribeAssetWebServiceInfoListRequest,
  CreateSearchLogRequest,
  DescribeSearchTemplatesRequest,
  CancelIgnoreVulRequest,
} from "./cwp_models"

/**
 * cwp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cwp.tencentcloudapi.com", "2018-02-28", clientConfig)
  }

  /**
   * 删除标签
   */
  async DeleteTags(
    req: DeleteTagsRequest,
    cb?: (error: string, rep: DeleteTagsResponse) => void
  ): Promise<DeleteTagsResponse> {
    return this.request("DeleteTags", req, cb)
  }

  /**
   * 新增或编辑标签
   */
  async EditTags(
    req: EditTagsRequest,
    cb?: (error: string, rep: EditTagsResponse) => void
  ): Promise<EditTagsResponse> {
    return this.request("EditTags", req, cb)
  }

  /**
   * 本接口(TrustMalwares)将被识别木马文件设为信任。
   */
  async TrustMalwares(
    req: TrustMalwaresRequest,
    cb?: (error: string, rep: TrustMalwaresResponse) => void
  ): Promise<TrustMalwaresResponse> {
    return this.request("TrustMalwares", req, cb)
  }

  /**
   * 获取资产管理端口列表
   */
  async DescribeAssetPortInfoList(
    req: DescribeAssetPortInfoListRequest,
    cb?: (error: string, rep: DescribeAssetPortInfoListResponse) => void
  ): Promise<DescribeAssetPortInfoListResponse> {
    return this.request("DescribeAssetPortInfoList", req, cb)
  }

  /**
   * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
   */
  async DescribeComponentStatistics(
    req: DescribeComponentStatisticsRequest,
    cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void
  ): Promise<DescribeComponentStatisticsResponse> {
    return this.request("DescribeComponentStatistics", req, cb)
  }

  /**
   * 根据taskid查询检测进度
   */
  async DescribeScanSchedule(
    req: DescribeScanScheduleRequest,
    cb?: (error: string, rep: DescribeScanScheduleResponse) => void
  ): Promise<DescribeScanScheduleResponse> {
    return this.request("DescribeScanSchedule", req, cb)
  }

  /**
   * 删除服务器关联的标签
   */
  async DeleteMachineTag(
    req: DeleteMachineTagRequest,
    cb?: (error: string, rep: DeleteMachineTagResponse) => void
  ): Promise<DeleteMachineTagResponse> {
    return this.request("DeleteMachineTag", req, cb)
  }

  /**
   * 按分页形式展示网络攻击日志列表
   */
  async DescribeAttackLogs(
    req: DescribeAttackLogsRequest,
    cb?: (error: string, rep: DescribeAttackLogsResponse) => void
  ): Promise<DescribeAttackLogsResponse> {
    return this.request("DescribeAttackLogs", req, cb)
  }

  /**
   * 导出ES查询文档列表
   */
  async DescribeSearchExportList(
    req: DescribeSearchExportListRequest,
    cb?: (error: string, rep: DescribeSearchExportListResponse) => void
  ): Promise<DescribeSearchExportListResponse> {
    return this.request("DescribeSearchExportList", req, cb)
  }

  /**
   * 查询资产管理计划任务列表
   */
  async DescribeAssetPlanTaskList(
    req: DescribeAssetPlanTaskListRequest,
    cb?: (error: string, rep: DescribeAssetPlanTaskListResponse) => void
  ): Promise<DescribeAssetPlanTaskListResponse> {
    return this.request("DescribeAssetPlanTaskList", req, cb)
  }

  /**
   * 获取爆破阻断模式
   */
  async DescribeBanMode(
    req?: DescribeBanModeRequest,
    cb?: (error: string, rep: DescribeBanModeResponse) => void
  ): Promise<DescribeBanModeResponse> {
    return this.request("DescribeBanMode", req, cb)
  }

  /**
   * 根据检测项id或事件id批量忽略事件或取消忽略
   */
  async ChangeRuleEventsIgnoreStatus(
    req: ChangeRuleEventsIgnoreStatusRequest,
    cb?: (error: string, rep: ChangeRuleEventsIgnoreStatusResponse) => void
  ): Promise<ChangeRuleEventsIgnoreStatusResponse> {
    return this.request("ChangeRuleEventsIgnoreStatus", req, cb)
  }

  /**
   * 获取资产管理系统安装包列表
   */
  async DescribeAssetSystemPackageList(
    req: DescribeAssetSystemPackageListRequest,
    cb?: (error: string, rep: DescribeAssetSystemPackageListResponse) => void
  ): Promise<DescribeAssetSystemPackageListResponse> {
    return this.request("DescribeAssetSystemPackageList", req, cb)
  }

  /**
   * 获取资产管理Web应用插件列表
   */
  async DescribeAssetWebAppPluginList(
    req: DescribeAssetWebAppPluginListRequest,
    cb?: (error: string, rep: DescribeAssetWebAppPluginListResponse) => void
  ): Promise<DescribeAssetWebAppPluginListResponse> {
    return this.request("DescribeAssetWebAppPluginList", req, cb)
  }

  /**
   * 删除检索模板
   */
  async DeleteSearchTemplate(
    req: DeleteSearchTemplateRequest,
    cb?: (error: string, rep: DeleteSearchTemplateResponse) => void
  ): Promise<DeleteSearchTemplateResponse> {
    return this.request("DeleteSearchTemplate", req, cb)
  }

  /**
   * 校验高危命令用户规则新增和编辑时的参数。
   */
  async CheckBashRuleParams(
    req: CheckBashRuleParamsRequest,
    cb?: (error: string, rep: CheckBashRuleParamsResponse) => void
  ): Promise<CheckBashRuleParamsResponse> {
    return this.request("CheckBashRuleParams", req, cb)
  }

  /**
   * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
   */
  async DescribeScanTaskDetails(
    req: DescribeScanTaskDetailsRequest,
    cb?: (error: string, rep: DescribeScanTaskDetailsResponse) => void
  ): Promise<DescribeScanTaskDetailsResponse> {
    return this.request("DescribeScanTaskDetails", req, cb)
  }

  /**
   * 查询服务区关联目录详情
   */
  async DescribeServerRelatedDirInfo(
    req: DescribeServerRelatedDirInfoRequest,
    cb?: (error: string, rep: DescribeServerRelatedDirInfoResponse) => void
  ): Promise<DescribeServerRelatedDirInfoResponse> {
    return this.request("DescribeServerRelatedDirInfo", req, cb)
  }

  /**
   * 根据策略信息创建基线策略
   */
  async CreateBaselineStrategy(
    req: CreateBaselineStrategyRequest,
    cb?: (error: string, rep: CreateBaselineStrategyResponse) => void
  ): Promise<CreateBaselineStrategyResponse> {
    return this.request("CreateBaselineStrategy", req, cb)
  }

  /**
   * 查询批量导入机器信息
   */
  async DescribeImportMachineInfo(
    req: DescribeImportMachineInfoRequest,
    cb?: (error: string, rep: DescribeImportMachineInfoResponse) => void
  ): Promise<DescribeImportMachineInfoResponse> {
    return this.request("DescribeImportMachineInfo", req, cb)
  }

  /**
   * 获取高危命令规则列表
   */
  async DescribeBashRules(
    req: DescribeBashRulesRequest,
    cb?: (error: string, rep: DescribeBashRulesResponse) => void
  ): Promise<DescribeBashRulesResponse> {
    return this.request("DescribeBashRules", req, cb)
  }

  /**
   * 获取历史搜索记录
   */
  async DescribeSearchLogs(
    req?: DescribeSearchLogsRequest,
    cb?: (error: string, rep: DescribeSearchLogsResponse) => void
  ): Promise<DescribeSearchLogsResponse> {
    return this.request("DescribeSearchLogs", req, cb)
  }

  /**
   * 根据Ids删除本地提权
   */
  async DeletePrivilegeEvents(
    req: DeletePrivilegeEventsRequest,
    cb?: (error: string, rep: DeletePrivilegeEventsResponse) => void
  ): Promise<DeletePrivilegeEventsResponse> {
    return this.request("DeletePrivilegeEvents", req, cb)
  }

  /**
   * 导出网络攻击日志
   */
  async ExportAttackLogs(
    req: ExportAttackLogsRequest,
    cb?: (error: string, rep: ExportAttackLogsResponse) => void
  ): Promise<ExportAttackLogsResponse> {
    return this.request("ExportAttackLogs", req, cb)
  }

  /**
   * 接口返回TopN的风险服务器
   */
  async DescribeBaselineHostTop(
    req: DescribeBaselineHostTopRequest,
    cb?: (error: string, rep: DescribeBaselineHostTopResponse) => void
  ): Promise<DescribeBaselineHostTopResponse> {
    return this.request("DescribeBaselineHostTop", req, cb)
  }

  /**
   * 专家服务-安全管家列表
   */
  async DescribeExpertServiceList(
    req: DescribeExpertServiceListRequest,
    cb?: (error: string, rep: DescribeExpertServiceListResponse) => void
  ): Promise<DescribeExpertServiceListResponse> {
    return this.request("DescribeExpertServiceList", req, cb)
  }

  /**
   * 查询基线列表信息
   */
  async DescribeBaselineList(
    req: DescribeBaselineListRequest,
    cb?: (error: string, rep: DescribeBaselineListResponse) => void
  ): Promise<DescribeBaselineListResponse> {
    return this.request("DescribeBaselineList", req, cb)
  }

  /**
   * 根据Ids删除高危命令事件
   */
  async DeleteBashEvents(
    req: DeleteBashEventsRequest,
    cb?: (error: string, rep: DeleteBashEventsResponse) => void
  ): Promise<DeleteBashEventsResponse> {
    return this.request("DeleteBashEvents", req, cb)
  }

  /**
   * 根据基线id查询基线影响主机列表
   */
  async DescribeBaselineEffectHostList(
    req: DescribeBaselineEffectHostListRequest,
    cb?: (error: string, rep: DescribeBaselineEffectHostListResponse) => void
  ): Promise<DescribeBaselineEffectHostListResponse> {
    return this.request("DescribeBaselineEffectHostList", req, cb)
  }

  /**
   * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
   */
  async DeleteMaliciousRequests(
    req: DeleteMaliciousRequestsRequest,
    cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void
  ): Promise<DeleteMaliciousRequestsResponse> {
    return this.request("DeleteMaliciousRequests", req, cb)
  }

  /**
   * 获取索引列表
   */
  async DescribeIndexList(
    req?: DescribeIndexListRequest,
    cb?: (error: string, rep: DescribeIndexListResponse) => void
  ): Promise<DescribeIndexListResponse> {
    return this.request("DescribeIndexList", req, cb)
  }

  /**
   * 导出基线列表
   */
  async ExportBaselineList(
    req: ExportBaselineListRequest,
    cb?: (error: string, rep: ExportBaselineListResponse) => void
  ): Promise<ExportBaselineListResponse> {
    return this.request("ExportBaselineList", req, cb)
  }

  /**
   * 用于获取专业版概览信息。
   */
  async DescribeProVersionInfo(
    req?: DescribeProVersionInfoRequest,
    cb?: (error: string, rep: DescribeProVersionInfoResponse) => void
  ): Promise<DescribeProVersionInfoResponse> {
    return this.request("DescribeProVersionInfo", req, cb)
  }

  /**
   * 专家服务-旗舰护网列表
   */
  async DescribeProtectNetList(
    req: DescribeProtectNetListRequest,
    cb?: (error: string, rep: DescribeProtectNetListResponse) => void
  ): Promise<DescribeProtectNetListResponse> {
    return this.request("DescribeProtectNetList", req, cb)
  }

  /**
   * 获取反弹Shell规则列表
   */
  async DescribeReverseShellRules(
    req: DescribeReverseShellRulesRequest,
    cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void
  ): Promise<DescribeReverseShellRulesResponse> {
    return this.request("DescribeReverseShellRules", req, cb)
  }

  /**
   * 用于异步导出数据量大的日志文件
   */
  async ExportTasks(
    req: ExportTasksRequest,
    cb?: (error: string, rep: ExportTasksResponse) => void
  ): Promise<ExportTasksResponse> {
    return this.request("ExportTasks", req, cb)
  }

  /**
   * 根据检测项id导出忽略检测项影响主机列表
   */
  async ExportIgnoreRuleEffectHostList(
    req: ExportIgnoreRuleEffectHostListRequest,
    cb?: (error: string, rep: ExportIgnoreRuleEffectHostListResponse) => void
  ): Promise<ExportIgnoreRuleEffectHostListResponse> {
    return this.request("ExportIgnoreRuleEffectHostList", req, cb)
  }

  /**
   * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
   */
  async RecoverMalwares(
    req: RecoverMalwaresRequest,
    cb?: (error: string, rep: RecoverMalwaresResponse) => void
  ): Promise<RecoverMalwaresResponse> {
    return this.request("RecoverMalwares", req, cb)
  }

  /**
   * 删除反弹Shell规则
   */
  async DeleteReverseShellRules(
    req: DeleteReverseShellRulesRequest,
    cb?: (error: string, rep: DeleteReverseShellRulesResponse) => void
  ): Promise<DeleteReverseShellRulesResponse> {
    return this.request("DeleteReverseShellRules", req, cb)
  }

  /**
   * 查询日志检索服务信息
   */
  async DescribeHistoryService(
    req?: DescribeHistoryServiceRequest,
    cb?: (error: string, rep: DescribeHistoryServiceResponse) => void
  ): Promise<DescribeHistoryServiceResponse> {
    return this.request("DescribeHistoryService", req, cb)
  }

  /**
   * 获取资产管理Web应用列表
   */
  async DescribeAssetWebAppList(
    req: DescribeAssetWebAppListRequest,
    cb?: (error: string, rep: DescribeAssetWebAppListResponse) => void
  ): Promise<DescribeAssetWebAppListResponse> {
    return this.request("DescribeAssetWebAppList", req, cb)
  }

  /**
   * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
   */
  async DescribeVulCountByDates(
    req: DescribeVulCountByDatesRequest,
    cb?: (error: string, rep: DescribeVulCountByDatesResponse) => void
  ): Promise<DescribeVulCountByDatesResponse> {
    return this.request("DescribeVulCountByDates", req, cb)
  }

  /**
   * 查询防护目录关联服务器列表信息
   */
  async DescribeProtectDirRelatedServer(
    req: DescribeProtectDirRelatedServerRequest,
    cb?: (error: string, rep: DescribeProtectDirRelatedServerResponse) => void
  ): Promise<DescribeProtectDirRelatedServerResponse> {
    return this.request("DescribeProtectDirRelatedServer", req, cb)
  }

  /**
   * 删除防护网站
   */
  async DeleteProtectDir(
    req: DeleteProtectDirRequest,
    cb?: (error: string, rep: DeleteProtectDirResponse) => void
  ): Promise<DeleteProtectDirResponse> {
    return this.request("DeleteProtectDir", req, cb)
  }

  /**
   * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
   */
  async DeleteBruteAttacks(
    req: DeleteBruteAttacksRequest,
    cb?: (error: string, rep: DeleteBruteAttacksResponse) => void
  ): Promise<DeleteBruteAttacksResponse> {
    return this.request("DeleteBruteAttacks", req, cb)
  }

  /**
   * 导出高危命令事件
   */
  async ExportBashEvents(
    req: ExportBashEventsRequest,
    cb?: (error: string, rep: ExportBashEventsResponse) => void
  ): Promise<ExportBashEventsResponse> {
    return this.request("ExportBashEvents", req, cb)
  }

  /**
   * 根据检测项id与筛选条件查询忽略检测项影响主机列表信息
   */
  async DescribeIgnoreRuleEffectHostList(
    req: DescribeIgnoreRuleEffectHostListRequest,
    cb?: (error: string, rep: DescribeIgnoreRuleEffectHostListResponse) => void
  ): Promise<DescribeIgnoreRuleEffectHostListResponse> {
    return this.request("DescribeIgnoreRuleEffectHostList", req, cb)
  }

  /**
   * 导出漏洞影响主机列表
   */
  async ExportVulEffectHostList(
    req: ExportVulEffectHostListRequest,
    cb?: (error: string, rep: ExportVulEffectHostListResponse) => void
  ): Promise<ExportVulEffectHostListResponse> {
    return this.request("ExportVulEffectHostList", req, cb)
  }

  /**
   * 查询应用列表
   */
  async DescribeAssetAppList(
    req: DescribeAssetAppListRequest,
    cb?: (error: string, rep: DescribeAssetAppListResponse) => void
  ): Promise<DescribeAssetAppListResponse> {
    return this.request("DescribeAssetAppList", req, cb)
  }

  /**
   * 查询网站防篡改概览信息
   */
  async DescribeWebPageGeneralize(
    req?: DescribeWebPageGeneralizeRequest,
    cb?: (error: string, rep: DescribeWebPageGeneralizeResponse) => void
  ): Promise<DescribeWebPageGeneralizeResponse> {
    return this.request("DescribeWebPageGeneralize", req, cb)
  }

  /**
   * 导出本次漏洞检测Excel
   */
  async ExportVulDetectionExcel(
    req: ExportVulDetectionExcelRequest,
    cb?: (error: string, rep: ExportVulDetectionExcelResponse) => void
  ): Promise<ExportVulDetectionExcelResponse> {
    return this.request("ExportVulDetectionExcel", req, cb)
  }

  /**
   * 导出资产管理内核模块列表
   */
  async ExportAssetCoreModuleList(
    req: ExportAssetCoreModuleListRequest,
    cb?: (error: string, rep: ExportAssetCoreModuleListResponse) => void
  ): Promise<ExportAssetCoreModuleListResponse> {
    return this.request("ExportAssetCoreModuleList", req, cb)
  }

  /**
   * 同步资产扫描信息
   */
  async SyncAssetScan(
    req: SyncAssetScanRequest,
    cb?: (error: string, rep: SyncAssetScanResponse) => void
  ): Promise<SyncAssetScanResponse> {
    return this.request("SyncAssetScan", req, cb)
  }

  /**
   * 获取ES字段聚合结果
   */
  async DescribeESAggregations(
    req: DescribeESAggregationsRequest,
    cb?: (error: string, rep: DescribeESAggregationsResponse) => void
  ): Promise<DescribeESAggregationsResponse> {
    return this.request("DescribeESAggregations", req, cb)
  }

  /**
   * 添加历史搜索记录
   */
  async CreateSearchLog(
    req: CreateSearchLogRequest,
    cb?: (error: string, rep: CreateSearchLogResponse) => void
  ): Promise<CreateSearchLogResponse> {
    return this.request("CreateSearchLog", req, cb)
  }

  /**
   * 获取应急漏洞列表
   */
  async DescribeEmergencyVulList(
    req: DescribeEmergencyVulListRequest,
    cb?: (error: string, rep: DescribeEmergencyVulListResponse) => void
  ): Promise<DescribeEmergencyVulListResponse> {
    return this.request("DescribeEmergencyVulList", req, cb)
  }

  /**
   * 不再提醒爆破阻断提示弹窗
   */
  async StopNoticeBanTips(
    req?: StopNoticeBanTipsRequest,
    cb?: (error: string, rep: StopNoticeBanTipsResponse) => void
  ): Promise<StopNoticeBanTipsResponse> {
    return this.request("StopNoticeBanTips", req, cb)
  }

  /**
   * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
   */
  async IgnoreImpactedHosts(
    req: IgnoreImpactedHostsRequest,
    cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void
  ): Promise<IgnoreImpactedHostsResponse> {
    return this.request("IgnoreImpactedHosts", req, cb)
  }

  /**
   * 根据任务id查询基线检测进度
   */
  async DescribeBaselineScanSchedule(
    req: DescribeBaselineScanScheduleRequest,
    cb?: (error: string, rep: DescribeBaselineScanScheduleResponse) => void
  ): Promise<DescribeBaselineScanScheduleResponse> {
    return this.request("DescribeBaselineScanSchedule", req, cb)
  }

  /**
   * 导出已忽略基线检测项信息
   */
  async ExportIgnoreBaselineRule(
    req: ExportIgnoreBaselineRuleRequest,
    cb?: (error: string, rep: ExportIgnoreBaselineRuleResponse) => void
  ): Promise<ExportIgnoreBaselineRuleResponse> {
    return this.request("ExportIgnoreBaselineRule", req, cb)
  }

  /**
   * 打开入侵检测-恶意文件检测,弹出风险预警内容
   */
  async DescribeMalwareRiskWarning(
    req?: DescribeMalwareRiskWarningRequest,
    cb?: (error: string, rep: DescribeMalwareRiskWarningResponse) => void
  ): Promise<DescribeMalwareRiskWarningResponse> {
    return this.request("DescribeMalwareRiskWarning", req, cb)
  }

  /**
   * 获取本地提权规则列表
   */
  async DescribePrivilegeRules(
    req: DescribePrivilegeRulesRequest,
    cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void
  ): Promise<DescribePrivilegeRulesResponse> {
    return this.request("DescribePrivilegeRules", req, cb)
  }

  /**
   * 查询Jar包列表
   */
  async DescribeAssetJarList(
    req: DescribeAssetJarListRequest,
    cb?: (error: string, rep: DescribeAssetJarListResponse) => void
  ): Promise<DescribeAssetJarListResponse> {
    return this.request("DescribeAssetJarList", req, cb)
  }

  /**
   * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
   */
  async DeleteNonlocalLoginPlaces(
    req: DeleteNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void
  ): Promise<DeleteNonlocalLoginPlacesResponse> {
    return this.request("DeleteNonlocalLoginPlaces", req, cb)
  }

  /**
   * 获取Web服务关联进程列表
   */
  async DescribeAssetWebServiceProcessList(
    req: DescribeAssetWebServiceProcessListRequest,
    cb?: (error: string, rep: DescribeAssetWebServiceProcessListResponse) => void
  ): Promise<DescribeAssetWebServiceProcessListResponse> {
    return this.request("DescribeAssetWebServiceProcessList", req, cb)
  }

  /**
   * 设置阻断开关状态
   */
  async ModifyBanStatus(
    req: ModifyBanStatusRequest,
    cb?: (error: string, rep: ModifyBanStatusResponse) => void
  ): Promise<ModifyBanStatusResponse> {
    return this.request("ModifyBanStatus", req, cb)
  }

  /**
   * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
   */
  async ExportMaliciousRequests(
    req: ExportMaliciousRequestsRequest,
    cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void
  ): Promise<ExportMaliciousRequestsResponse> {
    return this.request("ExportMaliciousRequests", req, cb)
  }

  /**
   * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
   */
  async DescribeUsualLoginPlaces(
    req: DescribeUsualLoginPlacesRequest,
    cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void
  ): Promise<DescribeUsualLoginPlacesResponse> {
    return this.request("DescribeUsualLoginPlaces", req, cb)
  }

  /**
   * 获取指定标签关联的服务器信息
   */
  async DescribeTagMachines(
    req: DescribeTagMachinesRequest,
    cb?: (error: string, rep: DescribeTagMachinesResponse) => void
  ): Promise<DescribeTagMachinesResponse> {
    return this.request("DescribeTagMachines", req, cb)
  }

  /**
   * 关联机器标签列表
   */
  async UpdateMachineTags(
    req: UpdateMachineTagsRequest,
    cb?: (error: string, rep: UpdateMachineTagsResponse) => void
  ): Promise<UpdateMachineTagsResponse> {
    return this.request("UpdateMachineTags", req, cb)
  }

  /**
   *  一键检测
   */
  async ScanVul(
    req: ScanVulRequest,
    cb?: (error: string, rep: ScanVulResponse) => void
  ): Promise<ScanVulResponse> {
    return this.request("ScanVul", req, cb)
  }

  /**
   * 导出本地提权事件
   */
  async ExportPrivilegeEvents(
    req: ExportPrivilegeEventsRequest,
    cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void
  ): Promise<ExportPrivilegeEventsResponse> {
    return this.request("ExportPrivilegeEvents", req, cb)
  }

  /**
   * 导出网页防篡改防护目录列表
   */
  async ExportProtectDirList(
    req: ExportProtectDirListRequest,
    cb?: (error: string, rep: ExportProtectDirListResponse) => void
  ): Promise<ExportProtectDirListResponse> {
    return this.request("ExportProtectDirList", req, cb)
  }

  /**
   * 获取概览统计数据。
   */
  async DescribeOverviewStatistics(
    req?: DescribeOverviewStatisticsRequest,
    cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void
  ): Promise<DescribeOverviewStatisticsResponse> {
    return this.request("DescribeOverviewStatistics", req, cb)
  }

  /**
   * 专家服务-可用订单详情
   */
  async DescribeAvailableExpertServiceDetail(
    req?: DescribeAvailableExpertServiceDetailRequest,
    cb?: (error: string, rep: DescribeAvailableExpertServiceDetailResponse) => void
  ): Promise<DescribeAvailableExpertServiceDetailResponse> {
    return this.request("DescribeAvailableExpertServiceDetail", req, cb)
  }

  /**
   * 获取待处理风险文件数+影响服务器数+是否试用检测+最近检测时间
   */
  async DescribeServersAndRiskAndFirstInfo(
    req?: DescribeServersAndRiskAndFirstInfoRequest,
    cb?: (error: string, rep: DescribeServersAndRiskAndFirstInfoResponse) => void
  ): Promise<DescribeServersAndRiskAndFirstInfoResponse> {
    return this.request("DescribeServersAndRiskAndFirstInfo", req, cb)
  }

  /**
   * 添加检索模板
   */
  async CreateSearchTemplate(
    req: CreateSearchTemplateRequest,
    cb?: (error: string, rep: CreateSearchTemplateResponse) => void
  ): Promise<CreateSearchTemplateResponse> {
    return this.request("CreateSearchTemplate", req, cb)
  }

  /**
   * 资产指纹启动扫描
   */
  async ScanAsset(
    req: ScanAssetRequest,
    cb?: (error: string, rep: ScanAssetResponse) => void
  ): Promise<ScanAssetResponse> {
    return this.request("ScanAsset", req, cb)
  }

  /**
   * 本接口 (DescribeSecurityDynamics) 用于获取安全事件动态消息数据。
   */
  async DescribeSecurityDynamics(
    req: DescribeSecurityDynamicsRequest,
    cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void
  ): Promise<DescribeSecurityDynamicsResponse> {
    return this.request("DescribeSecurityDynamics", req, cb)
  }

  /**
   * 获取安全事件统计
   */
  async DescribeSecurityEventStat(
    req: DescribeSecurityEventStatRequest,
    cb?: (error: string, rep: DescribeSecurityEventStatResponse) => void
  ): Promise<DescribeSecurityEventStatResponse> {
    return this.request("DescribeSecurityEventStat", req, cb)
  }

  /**
   * 根据Ids删除反弹Shell事件
   */
  async DeleteReverseShellEvents(
    req: DeleteReverseShellEventsRequest,
    cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void
  ): Promise<DeleteReverseShellEventsResponse> {
    return this.request("DeleteReverseShellEvents", req, cb)
  }

  /**
   * 获取主机账号详情
   */
  async DescribeAssetUserInfo(
    req: DescribeAssetUserInfoRequest,
    cb?: (error: string, rep: DescribeAssetUserInfoResponse) => void
  ): Promise<DescribeAssetUserInfoResponse> {
    return this.request("DescribeAssetUserInfo", req, cb)
  }

  /**
   * 取消漏洞忽略
   */
  async CancelIgnoreVul(
    req: CancelIgnoreVulRequest,
    cb?: (error: string, rep: CancelIgnoreVulResponse) => void
  ): Promise<CancelIgnoreVulResponse> {
    return this.request("CancelIgnoreVul", req, cb)
  }

  /**
   * 删除本地提权规则
   */
  async DeletePrivilegeRules(
    req: DeletePrivilegeRulesRequest,
    cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void
  ): Promise<DeletePrivilegeRulesResponse> {
    return this.request("DeletePrivilegeRules", req, cb)
  }

  /**
   * 根据任务id导出指定扫描任务详情
   */
  async ExportScanTaskDetails(
    req: ExportScanTaskDetailsRequest,
    cb?: (error: string, rep: ExportScanTaskDetailsResponse) => void
  ): Promise<ExportScanTaskDetailsResponse> {
    return this.request("ExportScanTaskDetails", req, cb)
  }

  /**
   * 漏洞数量等级分布统计
   */
  async DescribeVulLevelCount(
    req: DescribeVulLevelCountRequest,
    cb?: (error: string, rep: DescribeVulLevelCountResponse) => void
  ): Promise<DescribeVulLevelCountResponse> {
    return this.request("DescribeVulLevelCount", req, cb)
  }

  /**
   * 本接口 (DeleteMalwares) 用于删除木马记录。
   */
  async DeleteMalwares(
    req: DeleteMalwaresRequest,
    cb?: (error: string, rep: DeleteMalwaresResponse) => void
  ): Promise<DeleteMalwaresResponse> {
    return this.request("DeleteMalwares", req, cb)
  }

  /**
   * 用于网页防篡改获取区域主机列表。
   */
  async DescribeMachineList(
    req: DescribeMachineListRequest,
    cb?: (error: string, rep: DescribeMachineListResponse) => void
  ): Promise<DescribeMachineListResponse> {
    return this.request("DescribeMachineList", req, cb)
  }

  /**
   * 修改网站防护设置
   */
  async ModifyWebPageProtectSetting(
    req: ModifyWebPageProtectSettingRequest,
    cb?: (error: string, rep: ModifyWebPageProtectSettingResponse) => void
  ): Promise<ModifyWebPageProtectSettingResponse> {
    return this.request("ModifyWebPageProtectSetting", req, cb)
  }

  /**
   * 获取登录审计列表
   */
  async DescribeHostLoginList(
    req: DescribeHostLoginListRequest,
    cb?: (error: string, rep: DescribeHostLoginListResponse) => void
  ): Promise<DescribeHostLoginListResponse> {
    return this.request("DescribeHostLoginList", req, cb)
  }

  /**
   * 本接口用于删除异地登录白名单规则。
   */
  async DeleteLoginWhiteList(
    req: DeleteLoginWhiteListRequest,
    cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void
  ): Promise<DeleteLoginWhiteListResponse> {
    return this.request("DeleteLoginWhiteList", req, cb)
  }

  /**
   * 获取当前用户告警列表
   */
  async DescribeWarningList(
    req?: DescribeWarningListRequest,
    cb?: (error: string, rep: DescribeWarningListResponse) => void
  ): Promise<DescribeWarningListResponse> {
    return this.request("DescribeWarningList", req, cb)
  }

  /**
   * 根据基线策略id更新策略信息
   */
  async UpdateBaselineStrategy(
    req: UpdateBaselineStrategyRequest,
    cb?: (error: string, rep: UpdateBaselineStrategyResponse) => void
  ): Promise<UpdateBaselineStrategyResponse> {
    return this.request("UpdateBaselineStrategy", req, cb)
  }

  /**
   * 定期扫描漏洞设置
   */
  async ScanVulSetting(
    req: ScanVulSettingRequest,
    cb?: (error: string, rep: ScanVulSettingResponse) => void
  ): Promise<ScanVulSettingResponse> {
    return this.request("ScanVulSetting", req, cb)
  }

  /**
   * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
   */
  async DescribeAccountStatistics(
    req: DescribeAccountStatisticsRequest,
    cb?: (error: string, rep: DescribeAccountStatisticsResponse) => void
  ): Promise<DescribeAccountStatisticsResponse> {
    return this.request("DescribeAccountStatistics", req, cb)
  }

  /**
   * 本接口 (DescribeExportMachines) 用于导出区域主机列表。
   */
  async DescribeExportMachines(
    req: DescribeExportMachinesRequest,
    cb?: (error: string, rep: DescribeExportMachinesResponse) => void
  ): Promise<DescribeExportMachinesResponse> {
    return this.request("DescribeExportMachines", req, cb)
  }

  /**
   * 获取机器地域列表
   */
  async DescribeMachineRegions(
    req?: DescribeMachineRegionsRequest,
    cb?: (error: string, rep: DescribeMachineRegionsResponse) => void
  ): Promise<DescribeMachineRegionsResponse> {
    return this.request("DescribeMachineRegions", req, cb)
  }

  /**
   * 获取资产管理主机资源详细信息
   */
  async DescribeAssetMachineDetail(
    req: DescribeAssetMachineDetailRequest,
    cb?: (error: string, rep: DescribeAssetMachineDetailResponse) => void
  ): Promise<DescribeAssetMachineDetailResponse> {
    return this.request("DescribeAssetMachineDetail", req, cb)
  }

  /**
   * 导出风险趋势
   */
  async ExportSecurityTrends(
    req: ExportSecurityTrendsRequest,
    cb?: (error: string, rep: ExportSecurityTrendsResponse) => void
  ): Promise<ExportSecurityTrendsResponse> {
    return this.request("ExportSecurityTrends", req, cb)
  }

  /**
   * 查询资产管理内核模块列表
   */
  async DescribeAssetCoreModuleList(
    req: DescribeAssetCoreModuleListRequest,
    cb?: (error: string, rep: DescribeAssetCoreModuleListResponse) => void
  ): Promise<DescribeAssetCoreModuleListResponse> {
    return this.request("DescribeAssetCoreModuleList", req, cb)
  }

  /**
   * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
   */
  async DescribeOpenPortStatistics(
    req: DescribeOpenPortStatisticsRequest,
    cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void
  ): Promise<DescribeOpenPortStatisticsResponse> {
    return this.request("DescribeOpenPortStatistics", req, cb)
  }

  /**
   * 更新或者插入用户告警设置(该接口废弃,请调用 ModifyWarningSetting )
   */
  async DescribeSaveOrUpdateWarnings(
    req: DescribeSaveOrUpdateWarningsRequest,
    cb?: (error: string, rep: DescribeSaveOrUpdateWarningsResponse) => void
  ): Promise<DescribeSaveOrUpdateWarningsResponse> {
    return this.request("DescribeSaveOrUpdateWarnings", req, cb)
  }

  /**
   * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
   */
  async ExportBruteAttacks(
    req: ExportBruteAttacksRequest,
    cb?: (error: string, rep: ExportBruteAttacksResponse) => void
  ): Promise<ExportBruteAttacksResponse> {
    return this.request("ExportBruteAttacks", req, cb)
  }

  /**
   * 修改爆破阻断模式
   */
  async ModifyBanMode(
    req: ModifyBanModeRequest,
    cb?: (error: string, rep: ModifyBanModeResponse) => void
  ): Promise<ModifyBanModeResponse> {
    return this.request("ModifyBanMode", req, cb)
  }

  /**
   * 创建/修改网站防护目录
   */
  async ModifyWebPageProtectDir(
    req: ModifyWebPageProtectDirRequest,
    cb?: (error: string, rep: ModifyWebPageProtectDirResponse) => void
  ): Promise<ModifyWebPageProtectDirResponse> {
    return this.request("ModifyWebPageProtectDir", req, cb)
  }

  /**
   * 查询恶意请求白名单列表
   */
  async DescribeMaliciousRequestWhiteList(
    req: DescribeMaliciousRequestWhiteListRequest,
    cb?: (error: string, rep: DescribeMaliciousRequestWhiteListResponse) => void
  ): Promise<DescribeMaliciousRequestWhiteListResponse> {
    return this.request("DescribeMaliciousRequestWhiteList", req, cb)
  }

  /**
   * 获取账号列表
   */
  async DescribeAssetUserList(
    req: DescribeAssetUserListRequest,
    cb?: (error: string, rep: DescribeAssetUserListResponse) => void
  ): Promise<DescribeAssetUserListResponse> {
    return this.request("DescribeAssetUserList", req, cb)
  }

  /**
   * 根据基线策略id查询策略详情
   */
  async DescribeBaselineStrategyDetail(
    req: DescribeBaselineStrategyDetailRequest,
    cb?: (error: string, rep: DescribeBaselineStrategyDetailResponse) => void
  ): Promise<DescribeBaselineStrategyDetailResponse> {
    return this.request("DescribeBaselineStrategyDetail", req, cb)
  }

  /**
   * 获取Web站点详情
   */
  async DescribeAssetWebLocationInfo(
    req: DescribeAssetWebLocationInfoRequest,
    cb?: (error: string, rep: DescribeAssetWebLocationInfoResponse) => void
  ): Promise<DescribeAssetWebLocationInfoResponse> {
    return this.request("DescribeAssetWebLocationInfo", req, cb)
  }

  /**
   * 网页防篡改防护目录列表
   */
  async DescribeProtectDirList(
    req: DescribeProtectDirListRequest,
    cb?: (error: string, rep: DescribeProtectDirListResponse) => void
  ): Promise<DescribeProtectDirListResponse> {
    return this.request("DescribeProtectDirList", req, cb)
  }

  /**
   * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
   */
  async ExportMalwares(
    req: ExportMalwaresRequest,
    cb?: (error: string, rep: ExportMalwaresResponse) => void
  ): Promise<ExportMalwaresResponse> {
    return this.request("ExportMalwares", req, cb)
  }

  /**
   * 获取Jar包详情
   */
  async DescribeAssetJarInfo(
    req: DescribeAssetJarInfoRequest,
    cb?: (error: string, rep: DescribeAssetJarInfoResponse) => void
  ): Promise<DescribeAssetJarInfoResponse> {
    return this.request("DescribeAssetJarInfo", req, cb)
  }

  /**
   * 导出篡改事件列表
   */
  async ExportWebPageEventList(
    req: ExportWebPageEventListRequest,
    cb?: (error: string, rep: ExportWebPageEventListResponse) => void
  ): Promise<ExportWebPageEventListResponse> {
    return this.request("ExportWebPageEventList", req, cb)
  }

  /**
   * 获取密码破解列表
   */
  async DescribeBruteAttackList(
    req: DescribeBruteAttackListRequest,
    cb?: (error: string, rep: DescribeBruteAttackListResponse) => void
  ): Promise<DescribeBruteAttackListResponse> {
    return this.request("DescribeBruteAttackList", req, cb)
  }

  /**
   * 查询资产管理数据库列表
   */
  async DescribeAssetDatabaseList(
    req: DescribeAssetDatabaseListRequest,
    cb?: (error: string, rep: DescribeAssetDatabaseListResponse) => void
  ): Promise<DescribeAssetDatabaseListResponse> {
    return this.request("DescribeAssetDatabaseList", req, cb)
  }

  /**
   * 漏洞影响主机列表
   */
  async DescribeVulEffectHostList(
    req: DescribeVulEffectHostListRequest,
    cb?: (error: string, rep: DescribeVulEffectHostListResponse) => void
  ): Promise<DescribeVulEffectHostListResponse> {
    return this.request("DescribeVulEffectHostList", req, cb)
  }

  /**
   * DescribeScanTaskStatus 查询机器扫描状态列表用于过滤筛选
   */
  async DescribeScanTaskStatus(
    req: DescribeScanTaskStatusRequest,
    cb?: (error: string, rep: DescribeScanTaskStatusResponse) => void
  ): Promise<DescribeScanTaskStatusResponse> {
    return this.request("DescribeScanTaskStatus", req, cb)
  }

  /**
   * 获取快速检索列表
   */
  async DescribeSearchTemplates(
    req: DescribeSearchTemplatesRequest,
    cb?: (error: string, rep: DescribeSearchTemplatesResponse) => void
  ): Promise<DescribeSearchTemplatesResponse> {
    return this.request("DescribeSearchTemplates", req, cb)
  }

  /**
   * 专家服务-应急响应列表
   */
  async DescribeEmergencyResponseList(
    req: DescribeEmergencyResponseListRequest,
    cb?: (error: string, rep: DescribeEmergencyResponseListResponse) => void
  ): Promise<DescribeEmergencyResponseListResponse> {
    return this.request("DescribeEmergencyResponseList", req, cb)
  }

  /**
   * 导出资产管理Web服务列表
   */
  async ExportAssetWebServiceInfoList(
    req: ExportAssetWebServiceInfoListRequest,
    cb?: (error: string, rep: ExportAssetWebServiceInfoListResponse) => void
  ): Promise<ExportAssetWebServiceInfoListResponse> {
    return this.request("ExportAssetWebServiceInfoList", req, cb)
  }

  /**
   * 漏洞管理-重新检测接口
   */
  async ScanVulAgain(
    req: ScanVulAgainRequest,
    cb?: (error: string, rep: ScanVulAgainResponse) => void
  ): Promise<ScanVulAgainResponse> {
    return this.request("ScanVulAgain", req, cb)
  }

  /**
   * 查询一个用户下的基线策略信息
   */
  async DescribeBaselineStrategyList(
    req: DescribeBaselineStrategyListRequest,
    cb?: (error: string, rep: DescribeBaselineStrategyListResponse) => void
  ): Promise<DescribeBaselineStrategyListResponse> {
    return this.request("DescribeBaselineStrategyList", req, cb)
  }

  /**
   * 本接口（SeparateMalwares）用于隔离木马。
   */
  async SeparateMalwares(
    req: SeparateMalwaresRequest,
    cb?: (error: string, rep: SeparateMalwaresResponse) => void
  ): Promise<SeparateMalwaresResponse> {
    return this.request("SeparateMalwares", req, cb)
  }

  /**
   * 查询木马扫描进度
   */
  async DescribeScanMalwareSchedule(
    req?: DescribeScanMalwareScheduleRequest,
    cb?: (error: string, rep: DescribeScanMalwareScheduleResponse) => void
  ): Promise<DescribeScanMalwareScheduleResponse> {
    return this.request("DescribeScanMalwareSchedule", req, cb)
  }

  /**
   * 根据基线id查询下属检测项信息
   */
  async DescribeBaselineRule(
    req: DescribeBaselineRuleRequest,
    cb?: (error: string, rep: DescribeBaselineRuleResponse) => void
  ): Promise<DescribeBaselineRuleResponse> {
    return this.request("DescribeBaselineRule", req, cb)
  }

  /**
   * 导出基线影响主机列表
   */
  async ExportBaselineEffectHostList(
    req: ExportBaselineEffectHostListRequest,
    cb?: (error: string, rep: ExportBaselineEffectHostListResponse) => void
  ): Promise<ExportBaselineEffectHostListResponse> {
    return this.request("ExportBaselineEffectHostList", req, cb)
  }

  /**
   * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
   */
  async ExportNonlocalLoginPlaces(
    req: ExportNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void
  ): Promise<ExportNonlocalLoginPlacesResponse> {
    return this.request("ExportNonlocalLoginPlaces", req, cb)
  }

  /**
   * 获取资产指纹页面的资源监控列表
   */
  async DescribeAssetMachineList(
    req: DescribeAssetMachineListRequest,
    cb?: (error: string, rep: DescribeAssetMachineListResponse) => void
  ): Promise<DescribeAssetMachineListResponse> {
    return this.request("DescribeAssetMachineList", req, cb)
  }

  /**
   * 获取阻断按钮状态
   */
  async DescribeBanStatus(
    req?: DescribeBanStatusRequest,
    cb?: (error: string, rep: DescribeBanStatusResponse) => void
  ): Promise<DescribeBanStatusResponse> {
    return this.request("DescribeBanStatus", req, cb)
  }

  /**
   * 获取异地登录白名单合并后列表
   */
  async DescribeLoginWhiteCombinedList(
    req: DescribeLoginWhiteCombinedListRequest,
    cb?: (error: string, rep: DescribeLoginWhiteCombinedListResponse) => void
  ): Promise<DescribeLoginWhiteCombinedListResponse> {
    return this.request("DescribeLoginWhiteCombinedList", req, cb)
  }

  /**
   * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
   */
  async DescribeProcessStatistics(
    req: DescribeProcessStatisticsRequest,
    cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void
  ): Promise<DescribeProcessStatisticsResponse> {
    return this.request("DescribeProcessStatistics", req, cb)
  }

  /**
   * 查看恶意文件详情
   */
  async DescribeMalwareInfo(
    req: DescribeMalwareInfoRequest,
    cb?: (error: string, rep: DescribeMalwareInfoResponse) => void
  ): Promise<DescribeMalwareInfoResponse> {
    return this.request("DescribeMalwareInfo", req, cb)
  }

  /**
   * 获取Web站点列表
   */
  async DescribeAssetWebLocationList(
    req: DescribeAssetWebLocationListRequest,
    cb?: (error: string, rep: DescribeAssetWebLocationListResponse) => void
  ): Promise<DescribeAssetWebLocationListResponse> {
    return this.request("DescribeAssetWebLocationList", req, cb)
  }

  /**
   * 根据策略id查询基线检测项TOP
   */
  async DescribeBaselineTop(
    req: DescribeBaselineTopRequest,
    cb?: (error: string, rep: DescribeBaselineTopResponse) => void
  ): Promise<DescribeBaselineTopResponse> {
    return this.request("DescribeBaselineTop", req, cb)
  }

  /**
   * 删除高危命令规则
   */
  async DeleteBashRules(
    req: DeleteBashRulesRequest,
    cb?: (error: string, rep: DeleteBashRulesResponse) => void
  ): Promise<DeleteBashRulesResponse> {
    return this.request("DeleteBashRules", req, cb)
  }

  /**
   * 获取资产管理进程列表
   */
  async DescribeAssetProcessInfoList(
    req: DescribeAssetProcessInfoListRequest,
    cb?: (error: string, rep: DescribeAssetProcessInfoListResponse) => void
  ): Promise<DescribeAssetProcessInfoListResponse> {
    return this.request("DescribeAssetProcessInfoList", req, cb)
  }

  /**
   * 获取反弹Shell列表
   */
  async DescribeReverseShellEvents(
    req: DescribeReverseShellEventsRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void
  ): Promise<DescribeReverseShellEventsResponse> {
    return this.request("DescribeReverseShellEvents", req, cb)
  }

  /**
   * 修改暴力破解规则
   */
  async ModifyBruteAttackRules(
    req: ModifyBruteAttackRulesRequest,
    cb?: (error: string, rep: ModifyBruteAttackRulesResponse) => void
  ): Promise<ModifyBruteAttackRulesResponse> {
    return this.request("ModifyBruteAttackRules", req, cb)
  }

  /**
   *  用于设置新增主机自动开通专业防护配置。
   */
  async ModifyAutoOpenProVersionConfig(
    req: ModifyAutoOpenProVersionConfigRequest,
    cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void
  ): Promise<ModifyAutoOpenProVersionConfigResponse> {
    return this.request("ModifyAutoOpenProVersionConfig", req, cb)
  }

  /**
   * 查询定时扫描配置
   */
  async DescribeMalwareTimingScanSetting(
    req?: DescribeMalwareTimingScanSettingRequest,
    cb?: (error: string, rep: DescribeMalwareTimingScanSettingResponse) => void
  ): Promise<DescribeMalwareTimingScanSettingResponse> {
    return this.request("DescribeMalwareTimingScanSetting", req, cb)
  }

  /**
   * 获取主机最近趋势情况
   */
  async DescribeAssetRecentMachineInfo(
    req: DescribeAssetRecentMachineInfoRequest,
    cb?: (error: string, rep: DescribeAssetRecentMachineInfoResponse) => void
  ): Promise<DescribeAssetRecentMachineInfoResponse> {
    return this.request("DescribeAssetRecentMachineInfo", req, cb)
  }

  /**
   * 入侵管理-终止扫描任务
   */
  async DeleteMalwareScanTask(
    req?: DeleteMalwareScanTaskRequest,
    cb?: (error: string, rep: DeleteMalwareScanTaskResponse) => void
  ): Promise<DeleteMalwareScanTaskResponse> {
    return this.request("DeleteMalwareScanTask", req, cb)
  }

  /**
   * 漏洞top统计
   */
  async DescribeVulTop(
    req: DescribeVulTopRequest,
    cb?: (error: string, rep: DescribeVulTopResponse) => void
  ): Promise<DescribeVulTopResponse> {
    return this.request("DescribeVulTop", req, cb)
  }

  /**
   * 修改告警设置
   */
  async ModifyWarningSetting(
    req: ModifyWarningSettingRequest,
    cb?: (error: string, rep: ModifyWarningSettingResponse) => void
  ): Promise<ModifyWarningSettingResponse> {
    return this.request("ModifyWarningSetting", req, cb)
  }

  /**
   * 获取待处理漏洞数+影响主机数
   */
  async DescribeVulHostCountScanTime(
    req?: DescribeVulHostCountScanTimeRequest,
    cb?: (error: string, rep: DescribeVulHostCountScanTimeResponse) => void
  ): Promise<DescribeVulHostCountScanTimeResponse> {
    return this.request("DescribeVulHostCountScanTime", req, cb)
  }

  /**
   * 获取爆破破解规则
   */
  async DescribeBruteAttackRules(
    req?: DescribeBruteAttackRulesRequest,
    cb?: (error: string, rep: DescribeBruteAttackRulesResponse) => void
  ): Promise<DescribeBruteAttackRulesResponse> {
    return this.request("DescribeBruteAttackRules", req, cb)
  }

  /**
   * 查询资产管理环境变量列表
   */
  async DescribeAssetEnvList(
    req: DescribeAssetEnvListRequest,
    cb?: (error: string, rep: DescribeAssetEnvListResponse) => void
  ): Promise<DescribeAssetEnvListResponse> {
    return this.request("DescribeAssetEnvList", req, cb)
  }

  /**
   * 获取ES查询文档列表
   */
  async DescribeESHits(
    req: DescribeESHitsRequest,
    cb?: (error: string, rep: DescribeESHitsResponse) => void
  ): Promise<DescribeESHitsResponse> {
    return this.request("DescribeESHits", req, cb)
  }

  /**
   * 创建应急漏洞扫描任务
   */
  async CreateEmergencyVulScan(
    req: CreateEmergencyVulScanRequest,
    cb?: (error: string, rep: CreateEmergencyVulScanResponse) => void
  ): Promise<CreateEmergencyVulScanResponse> {
    return this.request("CreateEmergencyVulScan", req, cb)
  }

  /**
   * 获取安全概览相关事件统计数据接口
   */
  async DescribeSecurityEventsCnt(
    req?: DescribeSecurityEventsCntRequest,
    cb?: (error: string, rep: DescribeSecurityEventsCntResponse) => void
  ): Promise<DescribeSecurityEventsCntResponse> {
    return this.request("DescribeSecurityEventsCnt", req, cb)
  }

  /**
   * 获取本地提权事件列表
   */
  async DescribePrivilegeEvents(
    req: DescribePrivilegeEventsRequest,
    cb?: (error: string, rep: DescribePrivilegeEventsResponse) => void
  ): Promise<DescribePrivilegeEventsResponse> {
    return this.request("DescribePrivilegeEvents", req, cb)
  }

  /**
   * 本接口（DescribeMachineInfo）用于获取机器详细信息。
   */
  async DescribeMachineInfo(
    req: DescribeMachineInfoRequest,
    cb?: (error: string, rep: DescribeMachineInfoResponse) => void
  ): Promise<DescribeMachineInfoResponse> {
    return this.request("DescribeMachineInfo", req, cb)
  }

  /**
   * 获取阻断白名单列表
   */
  async DescribeBanWhiteList(
    req: DescribeBanWhiteListRequest,
    cb?: (error: string, rep: DescribeBanWhiteListResponse) => void
  ): Promise<DescribeBanWhiteListResponse> {
    return this.request("DescribeBanWhiteList", req, cb)
  }

  /**
   * 获取日志检索容量使用统计
   */
  async DescribeLogStorageStatistic(
    req?: DescribeLogStorageStatisticRequest,
    cb?: (error: string, rep: DescribeLogStorageStatisticResponse) => void
  ): Promise<DescribeLogStorageStatisticResponse> {
    return this.request("DescribeLogStorageStatistic", req, cb)
  }

  /**
   * 获取网络攻击威胁类型列表
   */
  async DescribeAttackVulTypeList(
    req?: DescribeAttackVulTypeListRequest,
    cb?: (error: string, rep: DescribeAttackVulTypeListResponse) => void
  ): Promise<DescribeAttackVulTypeListResponse> {
    return this.request("DescribeAttackVulTypeList", req, cb)
  }

  /**
   * 获取异地登录白名单列表
   */
  async DescribeLoginWhiteList(
    req: DescribeLoginWhiteListRequest,
    cb?: (error: string, rep: DescribeLoginWhiteListResponse) => void
  ): Promise<DescribeLoginWhiteListResponse> {
    return this.request("DescribeLoginWhiteList", req, cb)
  }

  /**
   * 查询已经忽略的检测项信息
   */
  async DescribeIgnoreBaselineRule(
    req: DescribeIgnoreBaselineRuleRequest,
    cb?: (error: string, rep: DescribeIgnoreBaselineRuleResponse) => void
  ): Promise<DescribeIgnoreBaselineRuleResponse> {
    return this.request("DescribeIgnoreBaselineRule", req, cb)
  }

  /**
   * 根据基线id查询基线详情接口
   */
  async DescribeBaselineDetail(
    req: DescribeBaselineDetailRequest,
    cb?: (error: string, rep: DescribeBaselineDetailResponse) => void
  ): Promise<DescribeBaselineDetailResponse> {
    return this.request("DescribeBaselineDetail", req, cb)
  }

  /**
   * 入侵检测，获取恶意请求列表
   */
  async DescribeRiskDnsList(
    req: DescribeRiskDnsListRequest,
    cb?: (error: string, rep: DescribeRiskDnsListResponse) => void
  ): Promise<DescribeRiskDnsListResponse> {
    return this.request("DescribeRiskDnsList", req, cb)
  }

  /**
   * 网站防篡改-查询动态防护信息
   */
  async DescribeWebPageProtectStat(
    req?: DescribeWebPageProtectStatRequest,
    cb?: (error: string, rep: DescribeWebPageProtectStatResponse) => void
  ): Promise<DescribeWebPageProtectStatResponse> {
    return this.request("DescribeWebPageProtectStat", req, cb)
  }

  /**
   * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
   */
  async DescribeHistoryAccounts(
    req: DescribeHistoryAccountsRequest,
    cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void
  ): Promise<DescribeHistoryAccountsResponse> {
    return this.request("DescribeHistoryAccounts", req, cb)
  }

  /**
   * 添加网站防护服务器
   */
  async CreateProtectServer(
    req: CreateProtectServerRequest,
    cb?: (error: string, rep: CreateProtectServerResponse) => void
  ): Promise<CreateProtectServerResponse> {
    return this.request("CreateProtectServer", req, cb)
  }

  /**
   * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
   */
  async DescribeScanState(
    req: DescribeScanStateRequest,
    cb?: (error: string, rep: DescribeScanStateResponse) => void
  ): Promise<DescribeScanStateResponse> {
    return this.request("DescribeScanState", req, cb)
  }

  /**
   * 根据基线策略id删除策略
   */
  async DeleteBaselineStrategy(
    req: DeleteBaselineStrategyRequest,
    cb?: (error: string, rep: DeleteBaselineStrategyResponse) => void
  ): Promise<DeleteBaselineStrategyResponse> {
    return this.request("DeleteBaselineStrategy", req, cb)
  }

  /**
   * 获取服务器风险top列表
   */
  async DescribeVulHostTop(
    req: DescribeVulHostTopRequest,
    cb?: (error: string, rep: DescribeVulHostTopResponse) => void
  ): Promise<DescribeVulHostTopResponse> {
    return this.request("DescribeVulHostTop", req, cb)
  }

  /**
   * 本接口（UntrustMalwares）用于取消信任木马文件。
   */
  async UntrustMalwares(
    req: UntrustMalwaresRequest,
    cb?: (error: string, rep: UntrustMalwaresResponse) => void
  ): Promise<UntrustMalwaresResponse> {
    return this.request("UntrustMalwares", req, cb)
  }

  /**
   * 获取资产管理Web框架列表
   */
  async DescribeAssetWebFrameList(
    req: DescribeAssetWebFrameListRequest,
    cb?: (error: string, rep: DescribeAssetWebFrameListResponse) => void
  ): Promise<DescribeAssetWebFrameListResponse> {
    return this.request("DescribeAssetWebFrameList", req, cb)
  }

  /**
   * 获取阻断地域
   */
  async DescribeBanRegions(
    req: DescribeBanRegionsRequest,
    cb?: (error: string, rep: DescribeBanRegionsResponse) => void
  ): Promise<DescribeBanRegionsResponse> {
    return this.request("DescribeBanRegions", req, cb)
  }

  /**
   * 查询可筛选操作系统列表.
   */
  async DescribeMachineOsList(
    req?: DescribeMachineOsListRequest,
    cb?: (error: string, rep: DescribeMachineOsListResponse) => void
  ): Promise<DescribeMachineOsListResponse> {
    return this.request("DescribeMachineOsList", req, cb)
  }

  /**
   * 漏洞详情，带CVSS版本
   */
  async DescribeVulInfoCvss(
    req: DescribeVulInfoCvssRequest,
    cb?: (error: string, rep: DescribeVulInfoCvssResponse) => void
  ): Promise<DescribeVulInfoCvssResponse> {
    return this.request("DescribeVulInfoCvss", req, cb)
  }

  /**
   * 入侵检测获取木马列表
   */
  async DescribeMalWareList(
    req: DescribeMalWareListRequest,
    cb?: (error: string, rep: DescribeMalWareListResponse) => void
  ): Promise<DescribeMalWareListResponse> {
    return this.request("DescribeMalWareList", req, cb)
  }

  /**
   * 该接口可以对入侵检测-文件查杀扫描检测
   */
  async CreateScanMalwareSetting(
    req: CreateScanMalwareSettingRequest,
    cb?: (error: string, rep: CreateScanMalwareSettingResponse) => void
  ): Promise<CreateScanMalwareSettingResponse> {
    return this.request("CreateScanMalwareSetting", req, cb)
  }

  /**
   * 定时扫描设置
   */
  async ModifyMalwareTimingScanSettings(
    req: ModifyMalwareTimingScanSettingsRequest,
    cb?: (error: string, rep: ModifyMalwareTimingScanSettingsResponse) => void
  ): Promise<ModifyMalwareTimingScanSettingsResponse> {
    return this.request("ModifyMalwareTimingScanSettings", req, cb)
  }

  /**
   * 获取漏洞列表数据
   */
  async DescribeVulList(
    req: DescribeVulListRequest,
    cb?: (error: string, rep: DescribeVulListResponse) => void
  ): Promise<DescribeVulListResponse> {
    return this.request("DescribeVulList", req, cb)
  }

  /**
   * 获取内核模块详情
   */
  async DescribeAssetCoreModuleInfo(
    req: DescribeAssetCoreModuleInfoRequest,
    cb?: (error: string, rep: DescribeAssetCoreModuleInfoResponse) => void
  ): Promise<DescribeAssetCoreModuleInfoResponse> {
    return this.request("DescribeAssetCoreModuleInfo", req, cb)
  }

  /**
   * 获取主机相关统计
   */
  async DescribeGeneralStat(
    req: DescribeGeneralStatRequest,
    cb?: (error: string, rep: DescribeGeneralStatResponse) => void
  ): Promise<DescribeGeneralStatResponse> {
    return this.request("DescribeGeneralStat", req, cb)
  }

  /**
   * 获取软件关联进程列表
   */
  async DescribeAssetAppProcessList(
    req: DescribeAssetAppProcessListRequest,
    cb?: (error: string, rep: DescribeAssetAppProcessListResponse) => void
  ): Promise<DescribeAssetAppProcessListResponse> {
    return this.request("DescribeAssetAppProcessList", req, cb)
  }

  /**
   * 获取资产管理数据库详情
   */
  async DescribeAssetDatabaseInfo(
    req: DescribeAssetDatabaseInfoRequest,
    cb?: (error: string, rep: DescribeAssetDatabaseInfoResponse) => void
  ): Promise<DescribeAssetDatabaseInfoResponse> {
    return this.request("DescribeAssetDatabaseInfo", req, cb)
  }

  /**
   * 设置高危命令事件状态
   */
  async SetBashEventsStatus(
    req: SetBashEventsStatusRequest,
    cb?: (error: string, rep: SetBashEventsStatusResponse) => void
  ): Promise<SetBashEventsStatusResponse> {
    return this.request("SetBashEventsStatus", req, cb)
  }

  /**
   * 导出反弹Shell事件
   */
  async ExportReverseShellEvents(
    req: ExportReverseShellEventsRequest,
    cb?: (error: string, rep: ExportReverseShellEventsResponse) => void
  ): Promise<ExportReverseShellEventsResponse> {
    return this.request("ExportReverseShellEvents", req, cb)
  }

  /**
   * 删除网络攻击日志
   */
  async DeleteAttackLogs(
    req: DeleteAttackLogsRequest,
    cb?: (error: string, rep: DeleteAttackLogsResponse) => void
  ): Promise<DeleteAttackLogsResponse> {
    return this.request("DeleteAttackLogs", req, cb)
  }

  /**
   * 查询定期检测的配置
   */
  async DescribeScanVulSetting(
    req?: DescribeScanVulSettingRequest,
    cb?: (error: string, rep: DescribeScanVulSettingResponse) => void
  ): Promise<DescribeScanVulSettingResponse> {
    return this.request("DescribeScanVulSetting", req, cb)
  }

  /**
   * 查询资产管理启动服务列表
   */
  async DescribeAssetInitServiceList(
    req: DescribeAssetInitServiceListRequest,
    cb?: (error: string, rep: DescribeAssetInitServiceListResponse) => void
  ): Promise<DescribeAssetInitServiceListResponse> {
    return this.request("DescribeAssetInitServiceList", req, cb)
  }

  /**
   * 本接口（DeleteMachine）用于卸载云镜客户端。
   */
  async DeleteMachine(
    req: DeleteMachineRequest,
    cb?: (error: string, rep: DeleteMachineResponse) => void
  ): Promise<DeleteMachineResponse> {
    return this.request("DeleteMachine", req, cb)
  }

  /**
   * 专家服务-专家服务订单列表
   */
  async DescribeExpertServiceOrderList(
    req: DescribeExpertServiceOrderListRequest,
    cb?: (error: string, rep: DescribeExpertServiceOrderListResponse) => void
  ): Promise<DescribeExpertServiceOrderListResponse> {
    return this.request("DescribeExpertServiceOrderList", req, cb)
  }

  /**
   * 根据策略名查询策略是否存在
   */
  async DescribeStrategyExist(
    req: DescribeStrategyExistRequest,
    cb?: (error: string, rep: DescribeStrategyExistResponse) => void
  ): Promise<DescribeStrategyExistResponse> {
    return this.request("DescribeStrategyExist", req, cb)
  }

  /**
   * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
   */
  async DescribeWebPageServiceInfo(
    req?: DescribeWebPageServiceInfoRequest,
    cb?: (error: string, rep: DescribeWebPageServiceInfoResponse) => void
  ): Promise<DescribeWebPageServiceInfoResponse> {
    return this.request("DescribeWebPageServiceInfo", req, cb)
  }

  /**
   * 切换高危命令规则状态
   */
  async SwitchBashRules(
    req: SwitchBashRulesRequest,
    cb?: (error: string, rep: SwitchBashRulesResponse) => void
  ): Promise<SwitchBashRulesResponse> {
    return this.request("SwitchBashRules", req, cb)
  }

  /**
   * 获取所有主机标签
   */
  async DescribeTags(
    req: DescribeTagsRequest,
    cb?: (error: string, rep: DescribeTagsResponse) => void
  ): Promise<DescribeTagsResponse> {
    return this.request("DescribeTags", req, cb)
  }

  /**
   * 查询基线基础信息列表
   */
  async DescribeBaselineBasicInfo(
    req: DescribeBaselineBasicInfoRequest,
    cb?: (error: string, rep: DescribeBaselineBasicInfoResponse) => void
  ): Promise<DescribeBaselineBasicInfoResponse> {
    return this.request("DescribeBaselineBasicInfo", req, cb)
  }

  /**
   * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
   */
  async DescribeSecurityTrends(
    req: DescribeSecurityTrendsRequest,
    cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void
  ): Promise<DescribeSecurityTrendsResponse> {
    return this.request("DescribeSecurityTrends", req, cb)
  }

  /**
   * 根据基线策略id查询基线策略数据概览统计
   */
  async DescribeBaselineAnalysisData(
    req: DescribeBaselineAnalysisDataRequest,
    cb?: (error: string, rep: DescribeBaselineAnalysisDataResponse) => void
  ): Promise<DescribeBaselineAnalysisDataResponse> {
    return this.request("DescribeBaselineAnalysisData", req, cb)
  }

  /**
   * 网络攻击日志详情
   */
  async DescribeAttackLogInfo(
    req: DescribeAttackLogInfoRequest,
    cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void
  ): Promise<DescribeAttackLogInfoResponse> {
    return this.request("DescribeAttackLogInfo", req, cb)
  }

  /**
   * 网站防篡改防护设置开关
   */
  async ModifyWebPageProtectSwitch(
    req: ModifyWebPageProtectSwitchRequest,
    cb?: (error: string, rep: ModifyWebPageProtectSwitchResponse) => void
  ): Promise<ModifyWebPageProtectSwitchResponse> {
    return this.request("ModifyWebPageProtectSwitch", req, cb)
  }

  /**
   * 新增或修改高危命令规则
   */
  async EditBashRules(
    req: EditBashRulesRequest,
    cb?: (error: string, rep: EditBashRulesResponse) => void
  ): Promise<EditBashRulesResponse> {
    return this.request("EditBashRules", req, cb)
  }

  /**
   * 专家服务-安全管家月巡检报告下载
   */
  async DescribeMonthInspectionReport(
    req: DescribeMonthInspectionReportRequest,
    cb?: (error: string, rep: DescribeMonthInspectionReportResponse) => void
  ): Promise<DescribeMonthInspectionReportResponse> {
    return this.request("DescribeMonthInspectionReport", req, cb)
  }

  /**
   * 获取资产数量： 主机数、账号数、端口数、进程数、软件数、数据库数、Web应用数、Web框架数、Web服务数、Web站点数
   */
  async DescribeAssetInfo(
    req?: DescribeAssetInfoRequest,
    cb?: (error: string, rep: DescribeAssetInfoResponse) => void
  ): Promise<DescribeAssetInfoResponse> {
    return this.request("DescribeAssetInfo", req, cb)
  }

  /**
   * 网站防篡改-删除事件记录
   */
  async DeleteWebPageEventLog(
    req?: DeleteWebPageEventLogRequest,
    cb?: (error: string, rep: DeleteWebPageEventLogResponse) => void
  ): Promise<DeleteWebPageEventLogResponse> {
    return this.request("DeleteWebPageEventLog", req, cb)
  }

  /**
   * 用于统计专业版和基础版机器数。
   */
  async DescribeVersionStatistics(
    req?: DescribeVersionStatisticsRequest,
    cb?: (error: string, rep: DescribeVersionStatisticsResponse) => void
  ): Promise<DescribeVersionStatisticsResponse> {
    return this.request("DescribeVersionStatistics", req, cb)
  }

  /**
   * 漏洞管理-导出漏洞列表
   */
  async ExportVulList(
    req: ExportVulListRequest,
    cb?: (error: string, rep: ExportVulListResponse) => void
  ): Promise<ExportVulListResponse> {
    return this.request("ExportVulList", req, cb)
  }

  /**
   * 用于获取单台主机或所有主机是否开通专业版状态。
   */
  async DescribeProVersionStatus(
    req: DescribeProVersionStatusRequest,
    cb?: (error: string, rep: DescribeProVersionStatusResponse) => void
  ): Promise<DescribeProVersionStatusResponse> {
    return this.request("DescribeProVersionStatus", req, cb)
  }

  /**
   * 获取高危命令列表
   */
  async DescribeBashEvents(
    req: DescribeBashEventsRequest,
    cb?: (error: string, rep: DescribeBashEventsResponse) => void
  ): Promise<DescribeBashEventsResponse> {
    return this.request("DescribeBashEvents", req, cb)
  }

  /**
   * 本接口 (DescribeMachines) 用于获取区域主机列表。
   */
  async DescribeMachines(
    req: DescribeMachinesRequest,
    cb?: (error: string, rep: DescribeMachinesResponse) => void
  ): Promise<DescribeMachinesResponse> {
    return this.request("DescribeMachines", req, cb)
  }

  /**
   * 查询资产管理Web服务列表
   */
  async DescribeAssetWebServiceInfoList(
    req: DescribeAssetWebServiceInfoListRequest,
    cb?: (error: string, rep: DescribeAssetWebServiceInfoListResponse) => void
  ): Promise<DescribeAssetWebServiceInfoListResponse> {
    return this.request("DescribeAssetWebServiceInfoList", req, cb)
  }

  /**
   * 导出漏洞检测报告。
   */
  async ExportVulDetectionReport(
    req: ExportVulDetectionReportRequest,
    cb?: (error: string, rep: ExportVulDetectionReportResponse) => void
  ): Promise<ExportVulDetectionReportResponse> {
    return this.request("ExportVulDetectionReport", req, cb)
  }

  /**
   * 查询篡改事件列表
   */
  async DescribeWebPageEventList(
    req: DescribeWebPageEventListRequest,
    cb?: (error: string, rep: DescribeWebPageEventListResponse) => void
  ): Promise<DescribeWebPageEventListResponse> {
    return this.request("DescribeWebPageEventList", req, cb)
  }

  /**
   * 获取木马文件下载地址
   */
  async DescribeMalwareFile(
    req: DescribeMalwareFileRequest,
    cb?: (error: string, rep: DescribeMalwareFileResponse) => void
  ): Promise<DescribeMalwareFileResponse> {
    return this.request("DescribeMalwareFile", req, cb)
  }

  /**
   * 获取漏洞管理模块指定类型的待处理漏洞数、主机数和非专业版主机数量
   */
  async DescribeUndoVulCounts(
    req: DescribeUndoVulCountsRequest,
    cb?: (error: string, rep: DescribeUndoVulCountsResponse) => void
  ): Promise<DescribeUndoVulCountsResponse> {
    return this.request("DescribeUndoVulCounts", req, cb)
  }
}
