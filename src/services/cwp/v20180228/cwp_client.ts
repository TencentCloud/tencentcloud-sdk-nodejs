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
  DescribeMalwareInfoRequest,
  DescribeSearchTemplatesResponse,
  DescribeMachineOsListRequest,
  DescribeScanVulSettingResponse,
  DescribeBashRulesRequest,
  ExportBashEventsRequest,
  ExportPrivilegeEventsResponse,
  AssetKeyVal,
  DescribeImportMachineInfoResponse,
  AssetFilters,
  UsualPlace,
  DescribeReverseShellRulesRequest,
  SetBashEventsStatusRequest,
  DescribeAccountsRequest,
  DescribeReverseShellEventsRequest,
  ScanVulAgainRequest,
  DescribePrivilegeEventsRequest,
  CreateSearchTemplateResponse,
  DescribeAttackVulTypeListRequest,
  DescribeLogStorageStatisticRequest,
  DescribeAttackLogsRequest,
  ScanVulResponse,
  ComponentStatistics,
  InquiryPriceOpenProVersionPrepaidRequest,
  DescribeSearchTemplatesRequest,
  ExportMalwaresRequest,
  EditTagsResponse,
  SyncAssetScanResponse,
  DeleteBashEventsResponse,
  DescribeMalwareInfoResponse,
  ExportPrivilegeEventsRequest,
  VulDetailInfo,
  CreateBaselineStrategyRequest,
  DescribeSecurityTrendsRequest,
  DescribeAttackVulTypeListResponse,
  Account,
  DescribeReverseShellEventsResponse,
  DescribePrivilegeRulesRequest,
  DeleteBashRulesResponse,
  DescribeSecurityEventsCntResponse,
  OsName,
  DescribeRiskDnsListResponse,
  DescribeExportMachinesRequest,
  DescribeHistoryServiceResponse,
  CreateScanMalwareSettingResponse,
  RenewProVersionRequest,
  DescribeWebPageGeneralizeRequest,
  RiskDnsList,
  UpdateBaselineStrategyRequest,
  ModifyWebPageProtectSettingResponse,
  DeleteMachineTagRequest,
  CreateBaselineStrategyResponse,
  DescribeTagMachinesRequest,
  ExportAssetCoreModuleListResponse,
  SwitchBashRulesResponse,
  OpenPortStatistics,
  DescribeBruteAttackListResponse,
  DescribeExportMachinesResponse,
  DescribeHistoryAccountsResponse,
  IgnoreImpactedHostsResponse,
  ExportAttackLogsResponse,
  UntrustMalwaresRequest,
  DescribeLoginWhiteListRequest,
  ReverseShell,
  SecurityDynamic,
  ExportBruteAttacksResponse,
  ExportVulDetectionReportResponse,
  DescribeAccountStatisticsResponse,
  EditBashRulesRequest,
  DescribeSearchExportListRequest,
  ScanAssetRequest,
  DescribeAssetInfoRequest,
  DescribeProVersionInfoRequest,
  DescribeProVersionInfoResponse,
  DeleteMaliciousRequestsResponse,
  DescribeESHitsResponse,
  ScanVulSettingRequest,
  ExportBruteAttacksRequest,
  DeleteMachineResponse,
  DeleteLoginWhiteListRequest,
  MachineTag,
  DescribeLogStorageStatisticResponse,
  DescribeAttackLogInfoResponse,
  DescribePrivilegeEventsResponse,
  DescribeOverviewStatisticsResponse,
  RecoverMalwaresRequest,
  TrustMalwaresResponse,
  TagMachine,
  EditTagsRequest,
  ReverseShellRule,
  DeleteReverseShellRulesRequest,
  DescribeBashRulesResponse,
  DescribeScanMalwareScheduleRequest,
  RescanImpactedHostRequest,
  DescribeBashEventsResponse,
  CreateSearchTemplateRequest,
  DescribeBashEventsRequest,
  DeleteTagsRequest,
  DescribeOpenPortStatisticsRequest,
  DescribeMachineInfoResponse,
  ModifyMalwareTimingScanSettingsRequest,
  DeleteMachineRequest,
  ExportAssetCoreModuleListRequest,
  SetBashEventsStatusResponse,
  DescribeComponentStatisticsResponse,
  DescribeMachineListResponse,
  MalwareInfo,
  ModifyMalwareTimingScanSettingsResponse,
  Place,
  DescribeMachineRegionsRequest,
  LoginWhiteLists,
  TrustMalwaresRequest,
  DescribeSearchExportListResponse,
  DescribeESAggregationsResponse,
  DeleteNonlocalLoginPlacesResponse,
  ModifyWebPageProtectSettingRequest,
  DeleteReverseShellRulesResponse,
  UpdateBaselineStrategyResponse,
  UntrustMalwaresResponse,
  DescribeScanTaskDetailsRequest,
  RenewProVersionResponse,
  DeletePrivilegeRulesResponse,
  CreateProtectServerRequest,
  DescribeAssetRecentMachineInfoRequest,
  ExportVulDetectionExcelResponse,
  DeletePrivilegeEventsResponse,
  InquiryPriceOpenProVersionPrepaidResponse,
  PrivilegeEscalationProcess,
  CloseProVersionRequest,
  DescribeIndexListResponse,
  DescribeImportMachineInfoRequest,
  DescribeUsualLoginPlacesResponse,
  DescribeRiskDnsListRequest,
  ExportNonlocalLoginPlacesResponse,
  EditBashRulesResponse,
  DescribeSearchLogsRequest,
  DescribeAttackLogInfoRequest,
  ScanVulSettingResponse,
  DescribeWebPageGeneralizeResponse,
  DescribeAccountsResponse,
  ModifyProVersionRenewFlagResponse,
  RegionInfo,
  DescribeComponentStatisticsRequest,
  DescribeOverviewStatisticsRequest,
  DescribeOpenPortStatisticsResponse,
  DeleteAttackLogsResponse,
  DescribeLoginWhiteListResponse,
  DescribeMachineRegionsResponse,
  ExportMaliciousRequestsRequest,
  DescribeScanMalwareScheduleResponse,
  ScanAssetResponse,
  DeleteSearchTemplateRequest,
  DeleteTagsResponse,
  DescribeSecurityEventsCntRequest,
  DeleteBruteAttacksRequest,
  DescribeMalwareTimingScanSettingRequest,
  DescribeTagsResponse,
  BashRule,
  ExportMaliciousRequestsResponse,
  SeparateMalwaresRequest,
  EffectiveMachineInfo,
  CreateSearchLogResponse,
  DescribeTagMachinesResponse,
  DescribeSecurityTrendsResponse,
  ProVersionMachine,
  DescribeIndexListRequest,
  ModifyAutoOpenProVersionConfigRequest,
  DescribeSecurityDynamicsResponse,
  DeleteReverseShellEventsResponse,
  DeletePrivilegeEventsRequest,
  DeleteBashRulesRequest,
  CreateProtectServerResponse,
  CloseProVersionResponse,
  DeleteAttackLogsRequest,
  ModifyProVersionRenewFlagRequest,
  ExportReverseShellEventsResponse,
  ExportAttackLogsRequest,
  OpenProVersionResponse,
  DescribeMachineInfoRequest,
  SwitchBashRulesRequest,
  DescribeScanTaskDetailsResponse,
  DescribeGeneralStatRequest,
  ExportReverseShellEventsRequest,
  Filter,
  DeleteLoginWhiteListResponse,
  DescribeAccountStatisticsRequest,
  DescribeAttackLogsResponse,
  SecurityEventInfo,
  OpenProVersionPrepaidResponse,
  DeleteMalwaresResponse,
  ChargePrepaid,
  ScanVulAgainResponse,
  SeparateMalwaresResponse,
  ProcessStatistics,
  DescribeTagsRequest,
  DescribeHistoryServiceRequest,
  ExportVulDetectionReportRequest,
  SyncAssetScanRequest,
  DescribeSecurityDynamicsRequest,
  ExportBashEventsResponse,
  DescribeESAggregationsRequest,
  DeleteWebPageEventLogResponse,
  DescribeReverseShellRulesResponse,
  DescribeBruteAttackListRequest,
  DescribeProcessStatisticsResponse,
  DeleteNonlocalLoginPlacesRequest,
  DescribeMachineListRequest,
  AccountStatistics,
  DescribeMachinesResponse,
  DescribePrivilegeRulesResponse,
  ExportNonlocalLoginPlacesRequest,
  Machine,
  DeleteSearchTemplateResponse,
  ExportMalwaresResponse,
  DefendAttackLog,
  ProtectHostConfig,
  DeleteWebPageEventLogRequest,
  OpenProVersionPrepaidRequest,
  DescribeScanVulSettingRequest,
  PrivilegeRule,
  HistoryAccount,
  DescribeESHitsRequest,
  DescribeUsualLoginPlacesRequest,
  SearchTemplate,
  DescribeGeneralStatResponse,
  DescribeProcessStatisticsRequest,
  DeleteMachineTagResponse,
  DescribeHistoryAccountsRequest,
  BruteAttackInfo,
  CreateScanMalwareSettingRequest,
  DescribeAssetInfoResponse,
  OpenProVersionRequest,
  DescribeMalwareTimingScanSettingResponse,
  DeleteBashEventsRequest,
  Tag,
  RescanImpactedHostResponse,
  SecurityTrend,
  ExportTasksRequest,
  ScanVulRequest,
  ExportVulDetectionExcelRequest,
  DeleteReverseShellEventsRequest,
  DescribeSearchLogsResponse,
  ModifyAutoOpenProVersionConfigResponse,
  DescribeMachineOsListResponse,
  IgnoreImpactedHostsRequest,
  DescribeAssetRecentMachineInfoResponse,
  DeleteBruteAttacksResponse,
  DeleteMaliciousRequestsRequest,
  DescribeMachinesRequest,
  Filters,
  BashEvent,
  DeleteMalwaresRequest,
  RecoverMalwaresResponse,
  CreateSearchLogRequest,
  DeletePrivilegeRulesRequest,
  ExportTasksResponse,
  ScanTaskDetails,
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
   * 本接口(TrustMalwares)将被识别木马文件设为信任。
   */
  async TrustMalwares(
    req: TrustMalwaresRequest,
    cb?: (error: string, rep: TrustMalwaresResponse) => void
  ): Promise<TrustMalwaresResponse> {
    return this.request("TrustMalwares", req, cb)
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
   * 删除检索模板
   */
  async DeleteSearchTemplate(
    req: DeleteSearchTemplateRequest,
    cb?: (error: string, rep: DeleteSearchTemplateResponse) => void
  ): Promise<DeleteSearchTemplateResponse> {
    return this.request("DeleteSearchTemplate", req, cb)
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
   * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
   */
  async RenewProVersion(
    req: RenewProVersionRequest,
    cb?: (error: string, rep: RenewProVersionResponse) => void
  ): Promise<RenewProVersionResponse> {
    return this.request("RenewProVersion", req, cb)
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
   * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
   */
  async DescribeUsualLoginPlaces(
    req: DescribeUsualLoginPlacesRequest,
    cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void
  ): Promise<DescribeUsualLoginPlacesResponse> {
    return this.request("DescribeUsualLoginPlaces", req, cb)
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
   * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
   */
  async IgnoreImpactedHosts(
    req: IgnoreImpactedHostsRequest,
    cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void
  ): Promise<IgnoreImpactedHostsResponse> {
    return this.request("IgnoreImpactedHosts", req, cb)
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
   * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
   */
  async DeleteNonlocalLoginPlaces(
    req: DeleteNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void
  ): Promise<DeleteNonlocalLoginPlacesResponse> {
    return this.request("DeleteNonlocalLoginPlaces", req, cb)
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
   * 获取指定标签关联的服务器信息
   */
  async DescribeTagMachines(
    req: DescribeTagMachinesRequest,
    cb?: (error: string, rep: DescribeTagMachinesResponse) => void
  ): Promise<DescribeTagMachinesResponse> {
    return this.request("DescribeTagMachines", req, cb)
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
   * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
   */
  async DescribeOverviewStatistics(
    req?: DescribeOverviewStatisticsRequest,
    cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void
  ): Promise<DescribeOverviewStatisticsResponse> {
    return this.request("DescribeOverviewStatistics", req, cb)
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
   * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
   */
  async DescribeSecurityDynamics(
    req: DescribeSecurityDynamicsRequest,
    cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void
  ): Promise<DescribeSecurityDynamicsResponse> {
    return this.request("DescribeSecurityDynamics", req, cb)
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
   * 删除本地提权规则
   */
  async DeletePrivilegeRules(
    req: DeletePrivilegeRulesRequest,
    cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void
  ): Promise<DeletePrivilegeRulesResponse> {
    return this.request("DeletePrivilegeRules", req, cb)
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
   * 本接口 (DescribeMachineList) 用于网页防篡改获取区域主机列表。
   */
  async DescribeMachineList(
    req: DescribeMachineListRequest,
    cb?: (error: string, rep: DescribeMachineListResponse) => void
  ): Promise<DescribeMachineListResponse> {
    return this.request("DescribeMachineList", req, cb)
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
   * 本接口用于删除异地登录白名单规则。
   */
  async DeleteLoginWhiteList(
    req: DeleteLoginWhiteListRequest,
    cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void
  ): Promise<DeleteLoginWhiteListResponse> {
    return this.request("DeleteLoginWhiteList", req, cb)
  }

  /**
   * 本接口 (CloseProVersion) 用于关闭专业版。
   */
  async CloseProVersion(
    req: CloseProVersionRequest,
    cb?: (error: string, rep: CloseProVersionResponse) => void
  ): Promise<CloseProVersionResponse> {
    return this.request("CloseProVersion", req, cb)
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
   * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
   */
  async DescribeOpenPortStatistics(
    req: DescribeOpenPortStatisticsRequest,
    cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void
  ): Promise<DescribeOpenPortStatisticsResponse> {
    return this.request("DescribeOpenPortStatistics", req, cb)
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
   * 切换高危命令规则状态
   */
  async SwitchBashRules(
    req: SwitchBashRulesRequest,
    cb?: (error: string, rep: SwitchBashRulesResponse) => void
  ): Promise<SwitchBashRulesResponse> {
    return this.request("SwitchBashRules", req, cb)
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
   * 获取密码破解列表
   */
  async DescribeBruteAttackList(
    req: DescribeBruteAttackListRequest,
    cb?: (error: string, rep: DescribeBruteAttackListResponse) => void
  ): Promise<DescribeBruteAttackListResponse> {
    return this.request("DescribeBruteAttackList", req, cb)
  }

  /**
   * 网站防篡改-修改网站防护设置
   */
  async ModifyWebPageProtectSetting(
    req: ModifyWebPageProtectSettingRequest,
    cb?: (error: string, rep: ModifyWebPageProtectSettingResponse) => void
  ): Promise<ModifyWebPageProtectSettingResponse> {
    return this.request("ModifyWebPageProtectSetting", req, cb)
  }

  /**
   * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
   */
  async OpenProVersionPrepaid(
    req: OpenProVersionPrepaidRequest,
    cb?: (error: string, rep: OpenProVersionPrepaidResponse) => void
  ): Promise<OpenProVersionPrepaidResponse> {
    return this.request("OpenProVersionPrepaid", req, cb)
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
   * 新增或编辑标签
   */
  async EditTags(
    req: EditTagsRequest,
    cb?: (error: string, rep: EditTagsResponse) => void
  ): Promise<EditTagsResponse> {
    return this.request("EditTags", req, cb)
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
   * 删除高危命令规则
   */
  async DeleteBashRules(
    req: DeleteBashRulesRequest,
    cb?: (error: string, rep: DeleteBashRulesResponse) => void
  ): Promise<DeleteBashRulesResponse> {
    return this.request("DeleteBashRules", req, cb)
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
   * 获取反弹Shell列表
   */
  async DescribeReverseShellEvents(
    req: DescribeReverseShellEventsRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void
  ): Promise<DescribeReverseShellEventsResponse> {
    return this.request("DescribeReverseShellEvents", req, cb)
  }

  /**
   * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
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
     * 该接口已废弃

本接口 (DescribeAccounts) 用于获取帐号列表数据。
     */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
   */
  async DescribeProVersionInfo(
    req?: DescribeProVersionInfoRequest,
    cb?: (error: string, rep: DescribeProVersionInfoResponse) => void
  ): Promise<DescribeProVersionInfoResponse> {
    return this.request("DescribeProVersionInfo", req, cb)
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
   * 查询网站防篡改概览信息
   */
  async DescribeWebPageGeneralize(
    req?: DescribeWebPageGeneralizeRequest,
    cb?: (error: string, rep: DescribeWebPageGeneralizeResponse) => void
  ): Promise<DescribeWebPageGeneralizeResponse> {
    return this.request("DescribeWebPageGeneralize", req, cb)
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
   * 根据基线策略id更新策略信息
   */
  async UpdateBaselineStrategy(
    req: UpdateBaselineStrategyRequest,
    cb?: (error: string, rep: UpdateBaselineStrategyResponse) => void
  ): Promise<UpdateBaselineStrategyResponse> {
    return this.request("UpdateBaselineStrategy", req, cb)
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
   * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
   */
  async DescribeHistoryAccounts(
    req: DescribeHistoryAccountsRequest,
    cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void
  ): Promise<DescribeHistoryAccountsResponse> {
    return this.request("DescribeHistoryAccounts", req, cb)
  }

  /**
   * 添加房展防护服务器
   */
  async CreateProtectServer(
    req: CreateProtectServerRequest,
    cb?: (error: string, rep: CreateProtectServerResponse) => void
  ): Promise<CreateProtectServerResponse> {
    return this.request("CreateProtectServer", req, cb)
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
   * 本接口（UntrustMalwares）用于取消信任木马文件。
   */
  async UntrustMalwares(
    req: UntrustMalwaresRequest,
    cb?: (error: string, rep: UntrustMalwaresResponse) => void
  ): Promise<UntrustMalwaresResponse> {
    return this.request("UntrustMalwares", req, cb)
  }

  /**
   * 本接口 (OpenProVersion) 用于开通专业版。
   */
  async OpenProVersion(
    req: OpenProVersionRequest,
    cb?: (error: string, rep: OpenProVersionResponse) => void
  ): Promise<OpenProVersionResponse> {
    return this.request("OpenProVersion", req, cb)
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
   * 定时扫描设置
   */
  async ModifyMalwareTimingScanSettings(
    req: ModifyMalwareTimingScanSettingsRequest,
    cb?: (error: string, rep: ModifyMalwareTimingScanSettingsResponse) => void
  ): Promise<ModifyMalwareTimingScanSettingsResponse> {
    return this.request("ModifyMalwareTimingScanSettings", req, cb)
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
   * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
   */
  async ModifyProVersionRenewFlag(
    req: ModifyProVersionRenewFlagRequest,
    cb?: (error: string, rep: ModifyProVersionRenewFlagResponse) => void
  ): Promise<ModifyProVersionRenewFlagResponse> {
    return this.request("ModifyProVersionRenewFlag", req, cb)
  }

  /**
   * 获取主机安全相关统计
   */
  async DescribeGeneralStat(
    req: DescribeGeneralStatRequest,
    cb?: (error: string, rep: DescribeGeneralStatResponse) => void
  ): Promise<DescribeGeneralStatResponse> {
    return this.request("DescribeGeneralStat", req, cb)
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
   * 本接口（DeleteMachine）用于卸载云镜客户端。
   */
  async DeleteMachine(
    req: DeleteMachineRequest,
    cb?: (error: string, rep: DeleteMachineResponse) => void
  ): Promise<DeleteMachineResponse> {
    return this.request("DeleteMachine", req, cb)
  }

  /**
   * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
   */
  async RescanImpactedHost(
    req: RescanImpactedHostRequest,
    cb?: (error: string, rep: RescanImpactedHostResponse) => void
  ): Promise<RescanImpactedHostResponse> {
    return this.request("RescanImpactedHost", req, cb)
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
   * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
   */
  async DescribeSecurityTrends(
    req: DescribeSecurityTrendsRequest,
    cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void
  ): Promise<DescribeSecurityTrendsResponse> {
    return this.request("DescribeSecurityTrends", req, cb)
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
   * 导出本次漏洞检测Excel
   */
  async ExportVulDetectionExcel(
    req: ExportVulDetectionExcelRequest,
    cb?: (error: string, rep: ExportVulDetectionExcelResponse) => void
  ): Promise<ExportVulDetectionExcelResponse> {
    return this.request("ExportVulDetectionExcel", req, cb)
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
   * 导出漏洞检测报告。
   */
  async ExportVulDetectionReport(
    req: ExportVulDetectionReportRequest,
    cb?: (error: string, rep: ExportVulDetectionReportResponse) => void
  ): Promise<ExportVulDetectionReportResponse> {
    return this.request("ExportVulDetectionReport", req, cb)
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
   * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
   */
  async InquiryPriceOpenProVersionPrepaid(
    req: InquiryPriceOpenProVersionPrepaidRequest,
    cb?: (error: string, rep: InquiryPriceOpenProVersionPrepaidResponse) => void
  ): Promise<InquiryPriceOpenProVersionPrepaidResponse> {
    return this.request("InquiryPriceOpenProVersionPrepaid", req, cb)
  }
}
