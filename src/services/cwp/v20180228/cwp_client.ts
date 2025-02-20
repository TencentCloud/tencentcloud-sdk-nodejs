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
  ModifyJavaMemShellPluginSwitchResponse,
  ExportReverseShellEventsResponse,
  DescribeBaselineDetectOverviewResponse,
  AlarmInfo,
  DescribeLogHistogramRequest,
  ModifyWarningSettingResponse,
  DescribeAssetWebServiceInfoListResponse,
  ModifyVulDefenceEventStatusRequest,
  DescribeAssetAppProcessListResponse,
  ModifyWebHookPolicyRequest,
  DescribeBashPoliciesRequest,
  DescribeLoginWhiteHostListRequest,
  BaselinePolicyDetect,
  ExportRansomDefenseBackupListResponse,
  CKafkaTopicInfo,
  DeleteWebHookPolicyResponse,
  DescribeAssetAppCountResponse,
  DescribeAttackTopResponse,
  ModifyLicenseOrderRequest,
  DescribeBaselineTopResponse,
  DeleteBaselineStrategyResponse,
  ModifyWebHookRuleRequest,
  MachineLicenseDetail,
  DescribeBashEventsInfoRequest,
  ExportAssetDatabaseListRequest,
  HostLoginWhiteObj,
  ClearLocalStorageResponse,
  DescribeUndoVulCountsResponse,
  DescribeBaselineScanScheduleResponse,
  MaliciousRequestWhiteListInfo,
  DeleteBashEventsResponse,
  DescribeLoginWhiteCombinedListResponse,
  DescribeAssetProcessInfoListRequest,
  ModifyBaselineRuleRequest,
  SearchLogResponse,
  ExportWebPageEventListRequest,
  AssetNetworkCardInfo,
  DescribeAssetWebFrameListRequest,
  DescribeMonthInspectionReportResponse,
  SyncMachinesResponse,
  DescribeBaselineHostTopResponse,
  HostDesc,
  DeleteBashRulesResponse,
  DescribeDirectConnectInstallCommandResponse,
  DescribeSecurityEventsCntResponse,
  RetryVulFixResponse,
  ExportVulListResponse,
  AssetMachineBaseInfo,
  ExportRansomDefenseMachineListRequest,
  DescribeHistoryServiceResponse,
  BaselineEffectHost,
  DescribeRiskProcessEventsRequest,
  DescribeAssetTypesResponse,
  DescribeScreenEmergentMsgRequest,
  ModifyWebPageProtectSettingResponse,
  DeleteBaselineRuleIgnoreResponse,
  ModifyAutoOpenProVersionConfigResponse,
  DescribeVulInfoCvssResponse,
  DescribeBaselineStrategyDetailRequest,
  DescribeRaspMaxCpuRequest,
  MalWareList,
  WebHookPolicy,
  DescribeAssetUserInfoResponse,
  DescribeRansomDefenseStrategyListRequest,
  DescribeMachineClearHistoryRequest,
  DescribeServersAndRiskAndFirstInfoResponse,
  ModifyMalwareWhiteListRequest,
  DescribeRaspRuleVulsRequest,
  DescribeAssetJarListRequest,
  DescribeJavaMemShellPluginInfoRequest,
  DescribeMachineFileTamperRulesRequest,
  ExportVulDefenceEventResponse,
  SetLocalStorageItemRequest,
  ExportRansomDefenseMachineListResponse,
  VulDefenceRangeDetail,
  DescribeFileTamperRuleCountRequest,
  DescribeBaselineBasicInfoRequest,
  DescribeDefenceEventDetailRequest,
  DescribeMachineGeneralResponse,
  DescribeMachineClearHistoryResponse,
  DescribeProVersionInfoRequest,
  RemoveMachineResponse,
  DescribeVulCountByDatesRequest,
  EditReverseShellRulesRequest,
  DescribeAssetWebServiceCountRequest,
  Broadcasts,
  CreateLicenseOrderResponse,
  DescribeWebPageGeneralizeResponse,
  DescribeAssetWebLocationPathListRequest,
  BroadcastInfo,
  DeleteLoginWhiteListRequest,
  DeleteRiskDnsEventRequest,
  PrivilegeEventInfo,
  RuleInfo,
  RansomDefenseRollbackResponse,
  ExportAssetSystemPackageListRequest,
  DescribePrivilegeEventsResponse,
  DescribeRaspRuleVulsResponse,
  DescribeNetAttackWhiteListRequest,
  DescribeOverviewStatisticsResponse,
  ModifyMalwareTimingScanSettingsRequest,
  DescribeAssetTotalCountRequest,
  DescribeWebHookRulesResponse,
  VulDetailInfo,
  VulLevelCountInfo,
  DescribeRaspRulesRequest,
  DescribeMonthInspectionReportRequest,
  DescribeDirectConnectInstallCommandRequest,
  DescribeBaselineDetectListResponse,
  DescribeNetAttackSettingResponse,
  ReverseShellRule,
  DescribeAESKeyResponse,
  DescribeBashRulesResponse,
  DescribeAvailableExpertServiceDetailResponse,
  DescribeLogStorageConfigRequest,
  ExportAssetWebLocationListResponse,
  ScreenBroadcasts,
  ChangeRuleEventsIgnoreStatusRequest,
  AssetType,
  ModifyWebHookReceiverResponse,
  OpenPortStatistics,
  DescribeRansomDefenseMachineListRequest,
  ExportAssetCoreModuleListRequest,
  ExportAssetMachineDetailResponse,
  ProtectDirRelatedServer,
  ModifyNetAttackWhiteListResponse,
  PolicyRules,
  DescribeMachineRegionsRequest,
  ExportWebPageEventListResponse,
  ModifyMachineAutoClearConfigRequest,
  ModifyEventAttackStatusRequest,
  DeleteRaspRulesResponse,
  DescribeVulLevelCountResponse,
  FileTamperRuleInfo,
  DescribeVersionStatisticsResponse,
  DescribeAvailableExpertServiceDetailRequest,
  DescribeMachineFileTamperRulesResponse,
  DescribeServerRelatedDirInfoResponse,
  DeleteLogExportRequest,
  DescribeUsualLoginPlacesResponse,
  DescribeAttackEventsRequest,
  DescribeRiskDnsListRequest,
  CreateWhiteListOrderRequest,
  BaselineItem,
  DescribeRansomDefenseStrategyDetailResponse,
  EditBashRulesResponse,
  DescribeLogIndexResponse,
  DescribeRansomDefenseBackupListRequest,
  LoginWhiteLists,
  ScanVulResponse,
  DeleteMalwareWhiteListResponse,
  DescribeOverviewStatisticsRequest,
  DeleteScanTaskRequest,
  DescribeRiskBatchStatusResponse,
  DescribeAlarmIncidentNodesRequest,
  DescribeAssetWebAppPluginListRequest,
  DescribeRansomDefenseMachineListResponse,
  DescribeTagMachinesRequest,
  DescribeScreenAttackHotspotRequest,
  ScanVulAgainRequest,
  DeleteSearchTemplateRequest,
  ExportJavaMemShellPluginsResponse,
  DescribeAssetTotalCountResponse,
  ExportNonlocalLoginPlacesRequest,
  DescribeTagsResponse,
  DescribeRansomDefenseTrendRequest,
  DescribeLicenseListResponse,
  DescribeJavaMemShellListResponse,
  LicenseUnBindRsp,
  DescribeBaselineRuleListRequest,
  DescribeVulOverviewRequest,
  ModifyWebPageProtectDirResponse,
  VulFixStatusSnapshotInfo,
  DescribeMachinesSimpleResponse,
  DescribeNetAttackSettingRequest,
  HostLoginList,
  DescribeScreenRiskAssetsTopRequest,
  DeletePrivilegeEventsRequest,
  DeleteWebHookRuleResponse,
  ModifyNetAttackWhiteListRequest,
  DescribeVulDefenceSettingRequest,
  DescribeTrialReportRequest,
  IgnoreRuleEffectHostInfo,
  HostRiskLevelCount,
  DescribeFileTamperEventsRequest,
  DescribeBaselineItemInfoResponse,
  DescribeProtectDirListRequest,
  DescribeScreenMachineRegionsResponse,
  ExportVulDefencePluginEventResponse,
  ExportAssetMachineDetailRequest,
  DescribeBanModeRequest,
  ModifyRaspMaxCpuRequest,
  StopAssetScanRequest,
  DescribeSecurityEventStatRequest,
  DescribeESAggregationsResponse,
  ExportVulInfoResponse,
  EmergencyVul,
  ExportAssetRecentMachineInfoRequest,
  ExportReverseShellEventsRequest,
  BashEventNew,
  DeleteLoginWhiteListResponse,
  DescribeVertexDetailResponse,
  DeleteRiskDnsEventResponse,
  ModifyLoginWhiteRecordRequest,
  ModifyRiskDnsPolicyResponse,
  DescribeScanTaskDetailsRequest,
  ProductStatusInfo,
  DescribeBaselineHostIgnoreListResponse,
  DeleteMalwaresResponse,
  ExportRiskDnsEventListResponse,
  DescribeAssetInitServiceListRequest,
  ScanVulAgainResponse,
  DescribeWebHookReceiverUsageRequest,
  DescribeAssetUserKeyListRequest,
  VulTopInfo,
  CKafkaRouteInfo,
  SeparateMalwaresResponse,
  DescribeTagsRequest,
  ExportAssetJarListResponse,
  ExportVulEffectHostListRequest,
  DescribeNetAttackWhiteListResponse,
  CheckBashPolicyParamsRequest,
  DescribeStrategyExistRequest,
  DescribeSecurityDynamicsRequest,
  CheckBashRuleParamsRequest,
  DescribeRiskDnsEventInfoRequest,
  DescribeIgnoreBaselineRuleRequest,
  DescribeAssetTypeTopRequest,
  CheckFileTamperRuleResponse,
  ExportNonlocalLoginPlacesResponse,
  DeleteMaliciousRequestWhiteListRequest,
  DescribeAssetJarListResponse,
  ExportAssetProcessInfoListResponse,
  ExportMaliciousRequestsRequest,
  DeleteNetAttackWhiteListResponse,
  DescribeWebHookPolicyResponse,
  BanWhiteList,
  SetLocalStorageItemResponse,
  ExportBashEventsNewRequest,
  DescribeWebPageProtectStatRequest,
  AssetJarDetail,
  ModifyFileTamperRuleResponse,
  DescribeBaselineRuleCategoryListResponse,
  ReverseShellEventInfo,
  ExportVulDetectionReportRequest,
  ModifyWarningHostConfigRequest,
  ExportMalwaresResponse,
  DescribeScanVulSettingRequest,
  DescribeServersAndRiskAndFirstInfoRequest,
  ScanTaskDetails,
  DescribeMalwareRiskWarningRequest,
  KeyValueInfo,
  StartBaselineDetectRequest,
  DescribeVulStoreListRequest,
  EditPrivilegeRulesRequest,
  DescribeAssetDiskListRequest,
  ScreenAttackHotspot,
  DescribeClientExceptionRequest,
  DescribeAssetPlanTaskListResponse,
  DescribeBaselineRuleRequest,
  ExportRansomDefenseEventsListResponse,
  ExportAssetPortInfoListRequest,
  DescribeHistoryAccountsRequest,
  DescribeAssetMachineDetailRequest,
  ExportTasksRequest,
  CancelIgnoreVulResponse,
  FixBaselineDetectRequest,
  DescribeSecurityBroadcastInfoRequest,
  IgnoreImpactedHostsResponse,
  DescribeCanFixVulMachineRequest,
  DescribeRansomDefenseStrategyMachinesResponse,
  DescribeBaselineRuleIgnoreListRequest,
  DescribeAssetMachineDetailResponse,
  RegionSet,
  DescribeRansomDefenseStrategyListResponse,
  DescribeAttackTrendsRequest,
  DescribeBaselineDownloadListRequest,
  DeleteNetAttackWhiteListRequest,
  HistoryAccount,
  DescribeStrategyExistResponse,
  DeleteReverseShellEventsRequest,
  DeleteBashPoliciesRequest,
  ExportAssetAppListResponse,
  DescribeLogTypeRequest,
  DescribeVulTopResponse,
  TaskStatus,
  DescribeBaselineRuleCategoryListRequest,
  DescribeAssetWebServiceProcessListResponse,
  ChangeStrategyEnableStatusResponse,
  ExportRansomDefenseStrategyListResponse,
  IgnoreImpactedHostsRequest,
  SearchLogRequest,
  DescribeBaselineWeakPasswordListRequest,
  VulDefenceEvent,
  DescribeRansomDefenseStrategyMachinesRequest,
  ExportBaselineFixListRequest,
  AssetUserDetail,
  ModifyOrderAttributeResponse,
  DescribeAssetPortCountRequest,
  ModifyWebHookPolicyResponse,
  DescribeFileTamperEventsResponse,
  DescribeVulLabelsResponse,
  DescribeMachinesRequest,
  DescribeRansomDefenseBackupListResponse,
  DescribeVulEffectHostListRequest,
  DeliverTypeDetails,
  ModifyNetAttackSettingResponse,
  AssetWebAppPluginInfo,
  DeletePrivilegeRulesRequest,
  RansomDefenseStrategyDetail,
  ModifyBaselinePolicyStateRequest,
  DescribeLicenseBindScheduleResponse,
  DescribeMalwareInfoRequest,
  DescribeVersionStatisticsRequest,
  DescribeLogTypeResponse,
  ModifyRiskDnsPolicyStatusResponse,
  ExportPrivilegeEventsResponse,
  ExportAssetRecentMachineInfoResponse,
  DescribeMachineRegionListRequest,
  ExportAssetWebFrameListRequest,
  ModifyBaselinePolicyResponse,
  MachineSimple,
  DescribeReverseShellEventsRequest,
  DescribeCanNotSeparateMachineResponse,
  BaselineCategory,
  DescribeEventByTableResponse,
  ModifyLogStorageConfigRequest,
  DescribeAttackVulTypeListRequest,
  AssetLoadDetail,
  DescribeLogStorageStatisticRequest,
  DeleteBaselinePolicyRequest,
  SetLocalStorageExpireRequest,
  ExportAssetInitServiceListRequest,
  DeleteWebHookReceiverRequest,
  DescribeAssetRecentMachineInfoRequest,
  CheckBashRuleParamsResponse,
  DeleteLicenseRecordRequest,
  ExportBaselineListRequest,
  DescribeAssetWebLocationPathListResponse,
  DeleteProtectDirRequest,
  ExportIgnoreBaselineRuleResponse,
  DescribeBaselineRuleListResponse,
  ScreenEventsCnt,
  BruteAttackRuleList,
  DescribeBaselineHostIgnoreListRequest,
  ExportFileTamperEventsResponse,
  DescribeBanStatusResponse,
  DescribeVulListRequest,
  DescribeLicenseBindListResponse,
  BaselineInfo,
  DescribeWebHookReceiverUsageResponse,
  AssetAppBaseInfo,
  DescribeJavaMemShellInfoRequest,
  DescribePrivilegeRulesRequest,
  ExportAssetAppListRequest,
  ModifyFileTamperEventsRequest,
  ModifyOrderAttributeRequest,
  JavaMemShellInfo,
  DescribeAssetSystemPackageListResponse,
  ExportAssetWebFrameListResponse,
  SecurityDynamic,
  CheckBashPolicyParamsResponse,
  DescribeClientExceptionResponse,
  DescribeAssetMachineListResponse,
  DescribeWebPageGeneralizeRequest,
  WebHookReceiver,
  DescribeBaselineDetailRequest,
  NetAttackEventInfo,
  GetLocalStorageItemResponse,
  DescribeScreenDefenseTrendsRequest,
  LogStorageRecord,
  DescribeBruteAttackListResponse,
  DescribeAssetInfoRequest,
  DescribeJavaMemShellPluginListRequest,
  CanFixVulInfo,
  DescribeWebHookPolicyRequest,
  EditReverseShellRulesResponse,
  VulOverview,
  DescribeAssetUserKeyListResponse,
  DescribeVulLabelsRequest,
  DescribeAssetAppListRequest,
  UntrustMalwaresResponse,
  ZoneInfo,
  DescribeExpertServiceListResponse,
  DescribeAccountStatisticsResponse,
  DescribeProVersionStatusResponse,
  DescribeBashEventsInfoNewRequest,
  ScreenTrendsChart,
  DeleteBaselineWeakPasswordRequest,
  ScanAssetRequest,
  DescribeBaselineRuleResponse,
  ModifyMachineRemarkRequest,
  ModifyVulDefenceEventStatusResponse,
  DescribeBaselineItemRiskTopRequest,
  DeleteMaliciousRequestsResponse,
  DescribeWebHookReceiverRequest,
  VulStoreListInfo,
  CreateIncidentBacktrackingRequest,
  DescribeVulDefencePluginStatusRequest,
  DescribeBashEventsInfoNewResponse,
  GetLocalStorageItemRequest,
  WebHookEventKv,
  ExportBruteAttacksRequest,
  DeleteMachineResponse,
  RansomDefenseEvent,
  DeleteRaspRulesRequest,
  LoginWhiteCombinedInfo,
  ExportBaselineRuleDetectListRequest,
  SetLocalStorageExpireResponse,
  DescribeBaselineDownloadListResponse,
  RecoverMalwaresRequest,
  DescribeAssetTypeTopResponse,
  DescribeVulDefencePluginExceptionCountRequest,
  DescribeLogIndexRequest,
  TagMachine,
  DescribeAssetCoreModuleInfoResponse,
  LicenseBindTaskDetail,
  DescribeAssetEnvListRequest,
  Tag,
  StopNoticeBanTipsRequest,
  ScreenProtection,
  DescribeScanMalwareScheduleRequest,
  BaselineDetectParam,
  DescribeBashEventsResponse,
  ValueInfo,
  ModifyVulDefenceSettingResponse,
  DescribeEventByTableRequest,
  DescribeTrialReportResponse,
  DescribeBashEventsRequest,
  DeleteMachineClearHistoryRequest,
  DescribeLogHistogramResponse,
  DescribeUsersConfigRequest,
  DeleteMachineRequest,
  DescribeAssetWebLocationListResponse,
  DescribeAssetDiskListResponse,
  ExportAssetPlanTaskListRequest,
  RecordInfo,
  DescribeAssetHostTotalCountResponse,
  DescribeMachineSnapshotRequest,
  StopAssetScanResponse,
  BruteAttackRule,
  PrivilegeEscalationProcess,
  DescribeProtectNetListResponse,
  TrustMalwaresRequest,
  AssetKeyVal,
  AssetWebLocationInfo,
  ChangeRuleEventsIgnoreStatusResponse,
  AssetMachineDetail,
  SeparateMalwaresRequest,
  AssetDatabaseBaseInfo,
  LicenseOrder,
  DeletePrivilegeRulesResponse,
  CreateMalwareWhiteListResponse,
  CreateWhiteListOrderResponse,
  CreateProtectServerRequest,
  DescribeMachineListRequest,
  CreateEmergencyVulScanResponse,
  DescribeTagMachinesResponse,
  DescribeHotVulTopResponse,
  DescribeRansomDefenseMachineStrategyInfoRequest,
  DescribeAssetCoreModuleInfoRequest,
  DescribeProductStatusResponse,
  ModifyJavaMemShellPluginSwitchRequest,
  DescribeIgnoreHostAndItemConfigResponse,
  RemoveLocalStorageItemResponse,
  DescribeFileTamperRuleInfoResponse,
  DescribeSafeInfoRequest,
  DescribeVdbAndPocInfoResponse,
  DescribeAttackEventsResponse,
  DescribeRansomDefenseMachineStrategyInfoResponse,
  DescribeReverseShellEventInfoResponse,
  ExportJavaMemShellPluginsRequest,
  DescribeBanWhiteListResponse,
  ModifyBaselineRuleIgnoreResponse,
  CreateVulFixResponse,
  DescribeOpenPortStatisticsResponse,
  ExportRiskDnsEventListRequest,
  DescribeRaspMaxCpuResponse,
  DescribeMachineGeneralRequest,
  ExportRiskProcessEventsResponse,
  DescribeAssetDatabaseCountResponse,
  DescribeMalWareListRequest,
  DescribeProVersionInfoResponse,
  DeleteTagsResponse,
  DescribeSecurityEventsCntRequest,
  AssetUserBaseInfo,
  ModifyRiskEventsStatusRequest,
  ExportBaselineEffectHostListRequest,
  ScanBaselineRequest,
  RansomDefenseRollbackRequest,
  EffectiveMachineInfo,
  DescribeVulCountByDatesResponse,
  CreateVulFixTaskQuuids,
  DescribeMachineOsListResponse,
  FieldValueRatioInfo,
  DescribeVulDefenceEventRequest,
  ModifyBaselineRuleResponse,
  RaspRuleVul,
  ExportMaliciousRequestsResponse,
  RetryVulFixRequest,
  DescribeRiskDnsEventListRequest,
  DescribeLogKafkaDeliverInfoResponse,
  DeleteBashRulesRequest,
  CreateProtectServerResponse,
  ExportRansomDefenseStrategyMachinesRequest,
  ProtectDirInfo,
  DescribeMalwareWhiteListAffectListResponse,
  ModifyMaliciousRequestWhiteListRequest,
  DescribeRansomDefenseEventsListRequest,
  ModifyRaspMaxCpuResponse,
  RansomDefenseStrategyMachineBackupInfo,
  DescribeBaselineItemInfoRequest,
  ExportAssetPlanTaskListResponse,
  ExportRansomDefenseBackupListRequest,
  ModifyRaspRulesRequest,
  DescribeBaselineHostRiskTopRequest,
  DescribeABTestConfigRequest,
  ExportAssetSystemPackageListResponse,
  ModifyRansomDefenseEventsStatusRequest,
  RaspRule,
  DescribeUsersConfigResponse,
  DescribeAttackStatisticsResponse,
  DescribeRansomDefenseStateRequest,
  ExportAssetJarListRequest,
  CreateVulFixRequest,
  CheckFirstScanBaselineResponse,
  ModifyBanStatusRequest,
  DescribeBaselineHostTopRequest,
  DescribeVulDefenceListResponse,
  RemoveLocalStorageItemRequest,
  CreateBuyBindTaskRequest,
  HostInfo,
  EditPrivilegeRulesResponse,
  DescribeVulHostTopResponse,
  ProtectEventLists,
  TrustMalwaresResponse,
  DescribeHistoryServiceRequest,
  CreateMaliciousRequestWhiteListRequest,
  DescribeWarningListRequest,
  SyncAssetScanRequest,
  ExportFileTamperEventsRequest,
  DefaultStrategyInfo,
  DescribeServerRelatedDirInfoRequest,
  VulDefencePluginStatus,
  ModifyBanWhiteListRequest,
  DescribeESAggregationsRequest,
  BaselineHostTopList,
  DescribeReverseShellRulesResponse,
  DeleteWebHookRuleRequest,
  DescribeBruteAttackListRequest,
  DescribeVdbAndPocInfoRequest,
  ModifyBashPolicyStatusRequest,
  DescribeVulListResponse,
  BaselineHost,
  KeysLocalStorageRequest,
  DescribeUndoVulCountsRequest,
  RemoveMachineRequest,
  DescribeWebPageServiceInfoRequest,
  ModifyLicenseBindsResponse,
  CheckFileTamperRuleRequest,
  DescribeBaselineStrategyListResponse,
  ProtectMachineInfo,
  DescribeBaselineFixListResponse,
  CreateRansomDefenseStrategyRequest,
  DescribeMalwareFileRequest,
  DescribeLicenseListRequest,
  CreateMalwareWhiteListRequest,
  ModifyLicenseUnBindsRequest,
  DescribeBaselineRuleDetectListRequest,
  DescribeVulOverviewResponse,
  ExportRansomDefenseStrategyListRequest,
  DeleteMaliciousRequestsRequest,
  DescribeBanWhiteListRequest,
  VulInfoHostInfo,
  RansomDefenseStrategyMachineDetail,
  DescribeWebPageServiceInfoResponse,
  DescribeJavaMemShellPluginListResponse,
  ModifyLogKafkaStateResponse,
  BaselinePolicy,
  DescribeMalwareRiskOverviewResponse,
  DeleteMaliciousRequestWhiteListResponse,
  DescribeJavaMemShellListRequest,
  SwitchBashRulesRequest,
  DescribeAgentInstallationTokenResponse,
  ScreenEmergentMsg,
  DescribeAssetMachineTagTopResponse,
  FixBaselineDetectResponse,
  CreateScanMalwareSettingResponse,
  DescribeRansomDefenseTrendResponse,
  CKafkaInstanceInfo,
  ExportProtectDirListResponse,
  ModifyWebPageProtectDirRequest,
  ModifyReverseShellRulesAggregationResponse,
  AssetWebFrameBaseInfo,
  ModifyJavaMemShellsStatusRequest,
  DescribeFileTamperRuleInfoRequest,
  ExportAttackEventsRequest,
  ModifyBaselineRuleIgnoreRequest,
  ModifyAutoOpenProVersionConfigRequest,
  DescribeLogDeliveryKafkaOptionsRequest,
  DescribeAssetWebLocationInfoResponse,
  CreateIncidentBacktrackingResponse,
  RiskProcessEvent,
  StartBaselineDetectResponse,
  ExportVulListRequest,
  ModifyBashPolicyResponse,
  ExportLicenseDetailRequest,
  ScreenNameValue,
  CreateLicenseOrderRequest,
  CreateNetAttackWhiteListResponse,
  CreateLogExportResponse,
  EmergencyResponseInfo,
  ExportVulDefenceListResponse,
  ModifyLogKafkaDeliverTypeResponse,
  DescribeProtectNetListRequest,
  DescribeBaselineScanScheduleRequest,
  RetryCreateSnapshotRequest,
  ExportVulDefenceEventRequest,
  DescribeVulDefenceSettingResponse,
  DescribeEmergencyVulListResponse,
  DestroyOrderResponse,
  DescribeAssetUserListResponse,
  StandardModeConfig,
  BashEvent,
  DeleteMalwaresRequest,
  RecoverMalwaresResponse,
  DeleteBaselineRuleRequest,
  PrivilegeRule,
  WebHookHostLabel,
  RansomDefenseStrategy,
  DescribeIgnoreHostAndItemConfigRequest,
  DescribeReverseShellRulesRequest,
  DescribeScanVulSettingResponse,
  MachineClearHistory,
  DescribeSecurityBroadcastsResponse,
  DescribeSearchLogsResponse,
  AssetFilters,
  DescribeAssetDatabaseInfoResponse,
  ExportBaselineItemListResponse,
  SyncMachinesRequest,
  MonthInspectionReport,
  SetBashEventsStatusRequest,
  ReverseShell,
  AssetAppProcessInfo,
  DescribeBaselineEffectHostListResponse,
  DescribeWebHookRuleResponse,
  DescribeBaselineStrategyListRequest,
  DescribeBaselineRuleIgnoreListResponse,
  ExportJavaMemShellsRequest,
  DescribeVersionCompareChartResponse,
  ProtectNetInfo,
  NetAttackEvent,
  DescribeMachineDefenseCntResponse,
  BaselineItemInfo,
  NetAttackTrend,
  DescribeVertexDetailRequest,
  ExportAssetWebServiceInfoListRequest,
  SetBashEventsStatusResponse,
  ProtectMachine,
  DescribeAssetUserInfoRequest,
  ExportBaselineItemListRequest,
  UpdateBaselineStrategyResponse,
  DescribeAgentInstallCommandRequest,
  DescribeMachineRegionListResponse,
  ExportPrivilegeEventsRequest,
  ModifyWebPageProtectSwitchRequest,
  DescribeScreenGeneralStatRequest,
  DescribeExpertServiceListRequest,
  ModifyUsersConfigResponse,
  MachineExtraInfo,
  DescribeAttackEventInfoRequest,
  FileTamperEvent,
  CreateLogExportRequest,
  DescribeLicenseResponse,
  FileTamperRuleCount,
  DescribeMalwareFileResponse,
  DescribeWebHookRuleRequest,
  DescribeSecurityBroadcastInfoResponse,
  DescribeLogDeliveryKafkaOptionsResponse,
  DescribeScreenRiskAssetsTopResponse,
  CommandLine,
  ScanBaselineResponse,
  CheckLogKafkaConnectionStateRequest,
  ModifyNetAttackSettingRequest,
  DescribeRiskDnsListResponse,
  ExportRiskDnsPolicyListRequest,
  DescribeAssetWebAppListResponse,
  ExportAssetProcessInfoListRequest,
  DescribeAssetWebAppCountResponse,
  AssetDatabaseDetail,
  DescribeScanTaskStatusRequest,
  DescribeVulStoreListResponse,
  DescribeLoginWhiteHostListResponse,
  DeleteBaselineRuleResponse,
  ModifyMaliciousRequestWhiteListResponse,
  DeleteMachineTagRequest,
  AssetDiskPartitionInfo,
  DescribeScreenMachineRegionsRequest,
  SwitchBashRulesResponse,
  ModifyWebHookPolicyStatusRequest,
  RiskDnsEvent,
  BaselineRuleInfo,
  DescribeExportMachinesResponse,
  DescribeScanTaskStatusResponse,
  DescribeBaselineItemRiskTopResponse,
  DescribeAssetLoadInfoResponse,
  DescribeMachineRiskCntResponse,
  ScreenRegionMachines,
  UpdateHostLoginWhiteObj,
  ModifyWebPageProtectSwitchResponse,
  DescribeAssetWebFrameCountResponse,
  DescribeWebPageEventListResponse,
  CanNotSeparateInfo,
  DescribeAssetWebLocationCountResponse,
  DescribeBashEventsNewResponse,
  VulFixStatusInfo,
  DeleteWebHookReceiverResponse,
  ModifyBashPolicyStatusResponse,
  VertexDetail,
  DeleteProtectDirResponse,
  DescribeLogExportsResponse,
  DescribeVulTrendResponse,
  TestWebHookRuleRequest,
  DescribeOpenPortStatisticsRequest,
  OsName,
  DescribeMalwareTimingScanSettingRequest,
  FullTextInfo,
  DescribeFileTamperRuleCountResponse,
  ExportAssetUserListRequest,
  ModifyBaselineWeakPasswordRequest,
  VulLevelInfo,
  CreateBanWhiteListResponse,
  DescribeLogStorageStatisticResponse,
  ModifyBaselinePolicyStateResponse,
  DescribeCanFixVulMachineResponse,
  CreateSearchTemplateResponse,
  DescribeWebPageEventListRequest,
  IncidentVertexInfo,
  BaselineItemDetect,
  DescribeBaselineFixListRequest,
  DescribeAssetProcessCountResponse,
  DescribeEmergencyResponseListRequest,
  DescribeScanStateResponse,
  BaselineHostDetect,
  EditTagsRequest,
  DeleteReverseShellRulesRequest,
  ScreenVulInfo,
  UntrustMalwaresRequest,
  DescribeScreenEventsCntRequest,
  DescribeBaselineEffectHostListRequest,
  WebHookCustomField,
  ExportSecurityTrendsRequest,
  DescribeDefenceEventDetailResponse,
  ExportBaselineHostDetectListRequest,
  DescribeAssetDatabaseInfoRequest,
  ModifyFileTamperEventsResponse,
  ExportAssetDatabaseListResponse,
  DescribeAssetUserCountRequest,
  CreateRansomDefenseStrategyResponse,
  ExportVulDefencePluginEventRequest,
  DescribeRansomDefenseRollBackTaskListRequest,
  DescribeWarningHostConfigRequest,
  BashPolicy,
  ModifyBanWhiteListResponse,
  ExportAssetWebServiceInfoListResponse,
  ExportAssetMachineListResponse,
  ExportSecurityTrendsResponse,
  DescribeReverseShellEventInfoRequest,
  ModifyMalwareTimingScanSettingsResponse,
  DescribeRiskDnsInfoResponse,
  ExportRiskProcessEventsRequest,
  DescribeLogKafkaDeliverInfoRequest,
  DescribeBaselineWeakPasswordListResponse,
  DeleteNonlocalLoginPlacesResponse,
  ModifyFileTamperRuleStatusResponse,
  ModifyLogKafkaAccessResponse,
  DeleteMalwareScanTaskResponse,
  BaselineRule,
  MalwareWhiteListInfo,
  DescribeBaselineDetailResponse,
  DescribeWebHookReceiverResponse,
  ExportAttackEventsResponse,
  ExportIgnoreRuleEffectHostListResponse,
  ScreenRegionInfo,
  DescribeBaselinePolicyListResponse,
  DescribeBanRegionsResponse,
  DescribeLogStorageRecordResponse,
  DeletePrivilegeEventsResponse,
  DescribeMachineInfoResponse,
  VulHostTopInfo,
  DescribeImportMachineInfoRequest,
  DescribeRansomDefenseRollBackTaskListResponse,
  OrderResource,
  ExportAssetEnvListRequest,
  ModifyMachineRemarkResponse,
  ProtectStat,
  DescribeVulEffectHostListResponse,
  RegionListDetail,
  DescribeSearchLogsRequest,
  ScanVulSettingResponse,
  DescribeAssetJarInfoResponse,
  DescribeVulInfoCvssRequest,
  RegionInfo,
  DescribeFileTamperRulesResponse,
  DescribeAssetProcessCountRequest,
  ModifyBanStatusResponse,
  DescribeLoginWhiteListResponse,
  DescribeUsualLoginPlacesRequest,
  ModifyWebHookReceiverRequest,
  ExportAssetInitServiceListResponse,
  ModifyFileTamperRuleRequest,
  DescribeScanMalwareScheduleResponse,
  ExportRansomDefenseEventsListRequest,
  DescribeScreenProtectionCntRequest,
  AssetWebLocationBaseInfo,
  DescribeBaselineItemListRequest,
  DescribeScreenHostInvasionRequest,
  BashRule,
  ModifyWebPageProtectSettingRequest,
  ExportVulInfoRequest,
  DescribeAssetUserCountResponse,
  DescribeScreenBroadcastsRequest,
  CreateSearchLogResponse,
  DescribeRiskDnsPolicyListResponse,
  DescribeSecurityTrendsResponse,
  BashEventsInfo,
  StopNoticeBanTipsResponse,
  NetAttackWhiteRule,
  AssetSystemPackageInfo,
  DescribeEmergencyVulListRequest,
  DescribeSecurityDynamicsResponse,
  DeleteReverseShellEventsResponse,
  ExportAssetEnvListResponse,
  LicenseBindDetail,
  DescribeAttackTrendsResponse,
  DescribeVulTrendRequest,
  BaselineRiskItem,
  DescribeAttackStatisticsRequest,
  ExportFileTamperRulesRequest,
  AddLoginWhiteListsResponse,
  ModifyLogKafkaStateRequest,
  AssetWebServiceBaseInfo,
  RiskDnsPolicy,
  DeleteAllJavaMemShellsResponse,
  DescribeMalwareWhiteListRequest,
  ModifyUsersConfigRequest,
  DescribeGeneralStatRequest,
  DescribeHotVulTopRequest,
  ScanAssetResponse,
  AssetInitServiceBaseInfo,
  DeleteBanWhiteListRequest,
  DescribeAssetWebFrameCountRequest,
  DescribeIgnoreRuleEffectHostListRequest,
  ExportAssetMachineListRequest,
  ExportInfo,
  DescribeScreenProtectionStatResponse,
  ExportBaselineItemDetectListRequest,
  CreateNetAttackWhiteListRequest,
  DescribeMalwareInfoResponse,
  DeleteRiskDnsPolicyResponse,
  DuplicateHosts,
  DescribeLogStorageRecordRequest,
  ExportBaselineHostDetectListResponse,
  MalwareWhiteListAffectEvent,
  CreateBanWhiteListRequest,
  DescribeMachineRiskCntRequest,
  ExportRansomDefenseStrategyMachinesResponse,
  DescribePrivilegeEventsRequest,
  DescribeAssetEnvListResponse,
  DescribeVulHostCountScanTimeRequest,
  DescribeSecurityBroadcastsRequest,
  DescribeVulDefenceEventResponse,
  ExportBaselineEffectHostListResponse,
  BashEventsInfoNew,
  ModifyLogKafkaAccessRequest,
  EventStat,
  DescribeVulEffectModulesResponse,
  DeleteWebPageEventLogResponse,
  DescribeLicenseBindScheduleRequest,
  DeleteRiskDnsPolicyRequest,
  DescribeBruteAttackRulesRequest,
  DescribeProcessStatisticsResponse,
  DeleteBaselineRuleIgnoreRequest,
  DeleteNonlocalLoginPlacesRequest,
  VulEffectModuleInfo,
  DescribeAssetWebAppPluginListResponse,
  DescribeAssetWebAppCountRequest,
  DescribeAssetTypesRequest,
  BaselineEventLevelInfo,
  DescribeLoginWhiteCombinedListRequest,
  Strategy,
  AddLoginWhiteListsRequest,
  DeleteSearchTemplateResponse,
  DeleteBashPoliciesResponse,
  DescribeEmergencyResponseListResponse,
  ProtectHostConfig,
  ScreenProtectionCnt,
  AssetPlanTask,
  VulDefenceOverview,
  DescribeFileTamperEventRuleInfoResponse,
  DeleteBaselinePolicyResponse,
  ModifyVulDefenceSettingRequest,
  ModifyLoginWhiteRecordResponse,
  DescribeMalwareWhiteListAffectListRequest,
  DeleteWebHookPolicyRequest,
  ModifyRansomDefenseStrategyStatusRequest,
  DescribeAssetAppListResponse,
  DescribeWarningHostConfigResponse,
  ScreenDefendAttackLog,
  DescribeVulDefencePluginStatusResponse,
  BaselineFix,
  ExportAssetWebLocationListRequest,
  DescribeRansomDefenseEventsListResponse,
  DescribeVulEffectModulesRequest,
  ModifyRiskDnsPolicyStatusRequest,
  DescribeScreenProtectionCntResponse,
  ModifyRansomDefenseEventsStatusResponse,
  DescribeBaselineDefaultStrategyListRequest,
  CreateScanMalwareSettingRequest,
  AssetLoadSummary,
  DescribeMalwareTimingScanSettingResponse,
  DescribeHostLoginListRequest,
  ModifyRansomDefenseStrategyStatusResponse,
  ModifyLoginWhiteInfoResponse,
  Machine,
  FileTamperRule,
  SecurityTrend,
  ScanTaskAgainResponse,
  DescribeAssetWebServiceProcessListRequest,
  DescribeScreenMachinesResponse,
  LicenseDetail,
  ExportBashEventsResponse,
  ScanVulSettingRequest,
  Item,
  ExportVulDetectionExcelRequest,
  CreateEmergencyVulScanRequest,
  StopBaselineDetectRequest,
  DescribeProtectDirRelatedServerResponse,
  ModifyWebHookRuleStatusResponse,
  DescribeBaselineItemIgnoreListRequest,
  DescribeAssetWebServiceCountResponse,
  AssetCoreModuleDetail,
  ExportScanTaskDetailsResponse,
  DescribeVulTopRequest,
  DescribeScreenProtectionStatRequest,
  ModifyLogKafkaDeliverTypeRequest,
  IgnoreBaselineRule,
  DescribeBaselineItemDetectListRequest,
  ExportBaselineItemDetectListResponse,
  DescribeBanStatusRequest,
  DescribeAssetRecentMachineInfoResponse,
  DescribeBaselineBasicInfoResponse,
  DescribeMalWareListResponse,
  ModifyLicenseUnBindsResponse,
  DescribeWebHookRulesRequest,
  ModifyMalwareWhiteListResponse,
  DescribeAssetPortInfoListResponse,
  DescribeMalwareRiskOverviewRequest,
  DescribeProtectDirListResponse,
  DescribeMaliciousRequestWhiteListResponse,
  DescribeBaselinePolicyListRequest,
  VulDefenceEventDetail,
  DeleteBruteAttacksResponse,
  ExportTasksResponse,
  ExportAssetWebAppListResponse,
  DescribeIgnoreBaselineRuleResponse,
  DescribeVulEmergentMsgRequest,
  DescribeMachineOsListRequest,
  DescribeMalwareRiskWarningResponse,
  DescribeBashRulesRequest,
  ExportLicenseDetailResponse,
  BaselineBasicInfo,
  DescribeBanModeResponse,
  DescribeScreenAttackHotspotResponse,
  DescribeImportMachineInfoResponse,
  DescribeRiskDnsEventInfoResponse,
  DescribeSecurityEventStatResponse,
  DescribeAssetDatabaseListRequest,
  ModifyWebHookRuleStatusRequest,
  KeysLocalStorageResponse,
  DescribeAssetMachineListRequest,
  ExportBaselineRuleDetectListResponse,
  ABTestConfig,
  ScreenBaselineInfo,
  ExportBaselineWeakPasswordListRequest,
  Filter,
  DescribeAssetMachineTagTopRequest,
  VersionWhiteConfig,
  DescribeAgentInstallationTokenRequest,
  DescribeVulDefencePluginDetailResponse,
  JavaMemShellPluginInfo,
  DescribeAssetDatabaseListResponse,
  ExportMalwaresRequest,
  DescribeProcessStatisticsRequest,
  RiskDnsList,
  SyncAssetScanResponse,
  MalwareRiskOverview,
  AssetCoreModuleBaseInfo,
  CheckLogKafkaConnectionStateResponse,
  ExportBashPoliciesRequest,
  DescribeScreenBroadcastsResponse,
  CreateBaselineStrategyRequest,
  DescribeSecurityTrendsRequest,
  VulFixStatusHostInfo,
  DescribeAttackVulTypeListResponse,
  DescribePrivilegeRulesResponse,
  DescribeReverseShellEventsResponse,
  DescribeAssetAppCountRequest,
  DescribeMaliciousRequestWhiteListRequest,
  NetAttackTopInfo,
  DescribeBashEventsNewRequest,
  MalwareRisk,
  DescribeWebPageProtectStatResponse,
  DescribeAssetPortInfoListRequest,
  DescribeVulDefencePluginDetailRequest,
  ModifyLoginWhiteInfoRequest,
  DescribeExportMachinesRequest,
  DescribeAssetInfoResponse,
  FileTamperRuleDetail,
  DescribeAssetPortCountResponse,
  DescribeScreenMachinesRequest,
  DeleteMalwareScanTaskRequest,
  ScreenInvasion,
  ExportBashPoliciesResponse,
  ModifyEventAttackStatusResponse,
  DescribeIgnoreRuleEffectHostListResponse,
  ExportProtectDirListRequest,
  CreateBaselineStrategyResponse,
  ExportAssetCoreModuleListResponse,
  VertexInfo,
  ModifyMachineAutoClearConfigResponse,
  ModifyLogStorageConfigResponse,
  DescribeHistoryAccountsResponse,
  BaselineCustomRuleIdName,
  DescribeLogStorageConfigResponse,
  DescribeVulEmergentMsgResponse,
  BaselineRuleDetect,
  DescribeLoginWhiteListRequest,
  DescribeAssetDatabaseCountRequest,
  ModifyWarningSettingRequest,
  ExportVulDetectionReportResponse,
  DescribeScanScheduleRequest,
  CheckFirstScanBaselineRequest,
  DescribeLicenseGeneralResponse,
  ExportAssetPortInfoListResponse,
  DescribeFastAnalysisResponse,
  ScreenMachine,
  DescribeAESKeyRequest,
  ModifyWebHookRuleResponse,
  DescribeAssetLoadInfoRequest,
  ExportBaselineWeakPasswordListResponse,
  RetryCreateSnapshotResponse,
  CreateBuyBindTaskResponse,
  ExportScanTaskDetailsRequest,
  ExportBaselineListResponse,
  DescribeBruteAttackRulesResponse,
  ModifyBanModeResponse,
  DescribeVulDefencePluginExceptionCountResponse,
  DeleteLicenseRecordResponse,
  AssetProcessBaseInfo,
  DescribeVulDefenceOverviewRequest,
  DescribeCanNotSeparateMachineRequest,
  DescribeRiskDnsEventListResponse,
  DeleteBruteAttacksRequest,
  DescribeAssetCoreModuleListResponse,
  DescribeRansomDefenseStateResponse,
  DescribeFastAnalysisRequest,
  DescribeRiskBatchStatusRequest,
  BaselineRuleTopInfo,
  DeleteMachineClearHistoryResponse,
  DescribeLicenseWhiteConfigResponse,
  ExportVulDetectionExcelResponse,
  ModifyWarningHostConfigResponse,
  LogHistogram,
  DescribeVulCveIdInfoResponse,
  DescribeAlarmVertexIdResponse,
  CreateSearchTemplateRequest,
  DeleteTagsRequest,
  DescribeScanStateRequest,
  SyncBaselineDetectSummaryResponse,
  ExportFileTamperRulesResponse,
  DescribeAgentInstallCommandResponse,
  DescribeSafeInfoResponse,
  AssetEnvBaseInfo,
  DescribeMachineListResponse,
  MalwareInfo,
  Place,
  LogInfo,
  DescribeHostInfoResponse,
  ModifyWebHookPolicyStatusResponse,
  ExportRiskDnsPolicyListResponse,
  ModifyBruteAttackRulesRequest,
  DescribeScreenDefenseTrendsResponse,
  KeyValueArrayInfo,
  SyncBaselineDetectSummaryRequest,
  DescribeExpertServiceOrderListResponse,
  DeleteReverseShellRulesResponse,
  BaselineDownload,
  DescribeAssetPlanTaskListRequest,
  DescribePrivilegeEventInfoResponse,
  DescribeMachineLicenseDetailRequest,
  DescribeVersionCompareChartRequest,
  DescribeProtectDirRelatedServerRequest,
  TestWebHookRuleResponse,
  Tags,
  DescribeBaselineItemListResponse,
  DescribeMachinesSimpleRequest,
  StopBaselineDetectResponse,
  BaselineWeakPassword,
  DescribeBanRegionsRequest,
  DescribeBashPoliciesResponse,
  SecurityEventInfo,
  MachineSnapshotInfo,
  DescribeBaselineAnalysisDataResponse,
  DeleteLicenseRecordAllResponse,
  ModifyBanModeRequest,
  DescribeBaselineDefaultStrategyListResponse,
  BanWhiteListDetail,
  DeleteScanTaskResponse,
  ModifyFileTamperRuleStatusRequest,
  EditBashRulesRequest,
  ExportIgnoreBaselineRuleRequest,
  RansomDefenseRollbackTask,
  DescribeMachineRegionsResponse,
  ExportVulDefenceListRequest,
  SecurityButlerInfo,
  WebHookReceiverUsage,
  DestroyOrderRequest,
  AssetWebAppBaseInfo,
  DescribeRiskDnsInfoRequest,
  DescribeBaselineRuleDetectListResponse,
  UpdateBaselineStrategyRequest,
  AssetCoreModuleParam,
  DescribeMachineLicenseDetailResponse,
  DescribeHostInfoRequest,
  DeleteBashEventsRequest,
  DescribeLicenseWhiteConfigRequest,
  TopInfo,
  AssetJarBaseInfo,
  DescribeFileTamperEventRuleInfoRequest,
  VulInfoList,
  ExportIgnoreRuleEffectHostListRequest,
  JavaMemShellPluginSetting,
  MachineFileTamperRule,
  ModifyLicenseOrderResponse,
  DescribeAttackEventInfoResponse,
  DescribeMachineSnapshotResponse,
  DescribeVulHostCountScanTimeResponse,
  WarningInfoObj,
  WebHookRuleSummary,
  DescribeAssetWebLocationCountRequest,
  DescribeAssetCoreModuleListRequest,
  VulInfoByCveId,
  DeleteLogExportResponse,
  ExportVulEffectHostListResponse,
  DeleteBanWhiteListResponse,
  DescribeBaselineStrategyDetailResponse,
  DescribeBaselineListRequest,
  DescribePublicProxyInstallCommandRequest,
  ExportJavaMemShellsResponse,
  DescribeProductStatusRequest,
  DescribeRiskProcessEventsResponse,
  DescribeScreenHostInvasionResponse,
  ExportBaselineFixListResponse,
  ExportBashEventsNewResponse,
  DescribeMachineDefenseCntRequest,
  ModifyBaselineWeakPasswordResponse,
  DescribeBaselineTopRequest,
  DescribeRiskDnsPolicyListRequest,
  DescribeAssetAppProcessListRequest,
  ScanTaskAgainRequest,
  ExportAssetWebAppListRequest,
  DescribeRecommendedProtectCpuResponse,
  DescribeLicenseBindListRequest,
  DeleteLicenseRecordAllRequest,
  DescribeAccountStatisticsRequest,
  ExportBruteAttacksResponse,
  JavaMemShellDetail,
  WarningObject,
  DescribeBaselineHostDetectListResponse,
  AssetWebLocationPath,
  DescribeAssetProcessInfoListResponse,
  ChangeStrategyEnableStatusRequest,
  ModifyLicenseBindsRequest,
  ProcessStatistics,
  HostTagInfo,
  DescribeScanScheduleResponse,
  BaselineDetail,
  DescribeVulDefenceOverviewResponse,
  DescribeAssetWebAppListRequest,
  ExpertServiceOrderInfo,
  DescribeScreenEventsCntResponse,
  WebHookRuleDetail,
  DescribePrivilegeEventInfoRequest,
  ModifyBashPolicyRequest,
  DescribeScreenEmergentMsgResponse,
  DeleteAllJavaMemShellsRequest,
  VulDefencePluginDetail,
  DescribeBaselineDetectOverviewRequest,
  DescribeLicenseRequest,
  DescribeLicenseGeneralRequest,
  DescribeAssetJarInfoRequest,
  OrderModifyObject,
  BaselineItemsCategory,
  AccountStatistics,
  AssetUserKeyInfo,
  DescribeMachinesResponse,
  DescribeMalwareWhiteListResponse,
  RansomDefenseStrategyMachineInfo,
  DescribeAssetWebLocationListRequest,
  DescribeAssetHostTotalCountRequest,
  CreateMaliciousRequestWhiteListResponse,
  UsualPlace,
  DescribeVulLevelCountRequest,
  ScanVulRequest,
  DeleteBaselineWeakPasswordResponse,
  DeleteWebPageEventLogRequest,
  DescribeProVersionStatusRequest,
  DescribeBaselineListResponse,
  DescribeBaselineHostRiskTopResponse,
  DescribeBashEventsInfoResponse,
  DescribeJavaMemShellPluginInfoResponse,
  VulEffectHostList,
  DescribeAlarmIncidentNodesResponse,
  DescribeExpertServiceOrderListRequest,
  DescribeFileTamperRulesRequest,
  DescribeJavaMemShellInfoResponse,
  ModifyRaspRulesResponse,
  DescribeRecommendedProtectCpuRequest,
  DescribeABTestConfigResponse,
  RansomDefenseBackup,
  DescribeMachineInfoRequest,
  SearchTemplate,
  DescribeVulFixStatusResponse,
  DeleteMalwareWhiteListRequest,
  DescribeGeneralStatResponse,
  DescribeLogExportsRequest,
  DeleteMachineTagResponse,
  UpdateMachineTagsResponse,
  BruteAttackInfo,
  CloudFromCnt,
  DescribeVulFixStatusRequest,
  UpdateMachineTagsRequest,
  DescribeBaselineItemDetectListResponse,
  DescribeScanTaskDetailsResponse,
  ModifyReverseShellRulesAggregationRequest,
  DescribeHostLoginListResponse,
  DescribePublicProxyInstallCommandResponse,
  DescribeAttackTopRequest,
  DescribeBaselineAnalysisDataRequest,
  ModifyRiskEventsStatusResponse,
  DescribeRaspRulesResponse,
  DescribeBaselineDetectListRequest,
  DescribeVulCveIdInfoRequest,
  ModifyJavaMemShellsStatusResponse,
  AssetPortBaseInfo,
  DescribeAssetWebLocationInfoRequest,
  DescribeAlarmVertexIdRequest,
  DescribeScreenGeneralStatResponse,
  DescribeAssetInitServiceListResponse,
  ModifyBaselinePolicyRequest,
  DescribeBaselineHostDetectListRequest,
  DescribeVulDefenceListRequest,
  EditTagsResponse,
  DescribeAssetWebFrameListResponse,
  DescribeRansomDefenseStrategyDetailRequest,
  ModifyRiskDnsPolicyRequest,
  DescribeWarningListResponse,
  ClearLocalStorageRequest,
  DescribeAssetUserListRequest,
  DeleteBaselineStrategyRequest,
  DescribeAssetSystemPackageListRequest,
  VulEmergentMsgInfo,
  ModifyBruteAttackRulesResponse,
  DescribeVulHostTopRequest,
  MachineTag,
  DescribeBaselineItemIgnoreListResponse,
  Filters,
  DescribeAssetWebServiceInfoListRequest,
  CreateSearchLogRequest,
  DescribeSearchTemplatesRequest,
  CancelIgnoreVulRequest,
  ExportAssetUserListResponse,
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
   * 获取资产管理端口列表
   */
  async DescribeAssetPortInfoList(
    req: DescribeAssetPortInfoListRequest,
    cb?: (error: string, rep: DescribeAssetPortInfoListResponse) => void
  ): Promise<DescribeAssetPortInfoListResponse> {
    return this.request("DescribeAssetPortInfoList", req, cb)
  }

  /**
   * 获取配置的aeskey和aesiv
   */
  async DescribeAESKey(
    req?: DescribeAESKeyRequest,
    cb?: (error: string, rep: DescribeAESKeyResponse) => void
  ): Promise<DescribeAESKeyResponse> {
    return this.request("DescribeAESKey", req, cb)
  }

  /**
   * 批量修改防勒索策略状态
   */
  async ModifyRansomDefenseStrategyStatus(
    req: ModifyRansomDefenseStrategyStatusRequest,
    cb?: (error: string, rep: ModifyRansomDefenseStrategyStatusResponse) => void
  ): Promise<ModifyRansomDefenseStrategyStatusResponse> {
    return this.request("ModifyRansomDefenseStrategyStatus", req, cb)
  }

  /**
   * 查询防勒索策略列表
   */
  async DescribeRansomDefenseStrategyList(
    req: DescribeRansomDefenseStrategyListRequest,
    cb?: (error: string, rep: DescribeRansomDefenseStrategyListResponse) => void
  ): Promise<DescribeRansomDefenseStrategyListResponse> {
    return this.request("DescribeRansomDefenseStrategyList", req, cb)
  }

  /**
   * 导出Jar包列表
   */
  async ExportAssetJarList(
    req: ExportAssetJarListRequest,
    cb?: (error: string, rep: ExportAssetJarListResponse) => void
  ): Promise<ExportAssetJarListResponse> {
    return this.request("ExportAssetJarList", req, cb)
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
   * 停止资产扫描任务
   */
  async StopAssetScan(
    req: StopAssetScanRequest,
    cb?: (error: string, rep: StopAssetScanResponse) => void
  ): Promise<StopAssetScanResponse> {
    return this.request("StopAssetScan", req, cb)
  }

  /**
   * 获取本地存储键值列表
   */
  async KeysLocalStorage(
    req?: KeysLocalStorageRequest,
    cb?: (error: string, rep: KeysLocalStorageResponse) => void
  ): Promise<KeysLocalStorageResponse> {
    return this.request("KeysLocalStorage", req, cb)
  }

  /**
   * 导出java内存马插件信息
   */
  async ExportJavaMemShellPlugins(
    req: ExportJavaMemShellPluginsRequest,
    cb?: (error: string, rep: ExportJavaMemShellPluginsResponse) => void
  ): Promise<ExportJavaMemShellPluginsResponse> {
    return this.request("ExportJavaMemShellPlugins", req, cb)
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
   * 导出漏洞防御列表
   */
  async ExportVulDefenceList(
    req: ExportVulDefenceListRequest,
    cb?: (error: string, rep: ExportVulDefenceListResponse) => void
  ): Promise<ExportVulDefenceListResponse> {
    return this.request("ExportVulDefenceList", req, cb)
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
   * 根据策略信息创建基线策略
   */
  async CreateBaselineStrategy(
    req: CreateBaselineStrategyRequest,
    cb?: (error: string, rep: CreateBaselineStrategyResponse) => void
  ): Promise<CreateBaselineStrategyResponse> {
    return this.request("CreateBaselineStrategy", req, cb)
  }

  /**
   * 主机信息与标签信息查询
   */
  async DescribeHostInfo(
    req: DescribeHostInfoRequest,
    cb?: (error: string, rep: DescribeHostInfoResponse) => void
  ): Promise<DescribeHostInfoResponse> {
    return this.request("DescribeHostInfo", req, cb)
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
   * 获取基线规则列表
   */
  async DescribeBaselineRuleList(
    req: DescribeBaselineRuleListRequest,
    cb?: (error: string, rep: DescribeBaselineRuleListResponse) => void
  ): Promise<DescribeBaselineRuleListResponse> {
    return this.request("DescribeBaselineRuleList", req, cb)
  }

  /**
   * 大屏可视化风险资产top5（今日），统计今日风险资产
   */
  async DescribeScreenRiskAssetsTop(
    req: DescribeScreenRiskAssetsTopRequest,
    cb?: (error: string, rep: DescribeScreenRiskAssetsTopResponse) => void
  ): Promise<DescribeScreenRiskAssetsTopResponse> {
    return this.request("DescribeScreenRiskAssetsTop", req, cb)
  }

  /**
   * 获取所有软件应用数量
   */
  async DescribeAssetAppCount(
    req: DescribeAssetAppCountRequest,
    cb?: (error: string, rep: DescribeAssetAppCountResponse) => void
  ): Promise<DescribeAssetAppCountResponse> {
    return this.request("DescribeAssetAppCount", req, cb)
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
   * 查询java内存马事件列表
   */
  async DescribeJavaMemShellList(
    req: DescribeJavaMemShellListRequest,
    cb?: (error: string, rep: DescribeJavaMemShellListResponse) => void
  ): Promise<DescribeJavaMemShellListResponse> {
    return this.request("DescribeJavaMemShellList", req, cb)
  }

  /**
   * 获取基线检测详情记录
   */
  async DescribeBaselineDetectList(
    req: DescribeBaselineDetectListRequest,
    cb?: (error: string, rep: DescribeBaselineDetectListResponse) => void
  ): Promise<DescribeBaselineDetectListResponse> {
    return this.request("DescribeBaselineDetectList", req, cb)
  }

  /**
   * 专家服务-旗舰重保列表
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
   * 删除高危命令策略
   */
  async DeleteBashPolicies(
    req: DeleteBashPoliciesRequest,
    cb?: (error: string, rep: DeleteBashPoliciesResponse) => void
  ): Promise<DeleteBashPoliciesResponse> {
    return this.request("DeleteBashPolicies", req, cb)
  }

  /**
   * 获取漏洞防御概览信息，包括事件趋势及插件开启情况
   */
  async DescribeVulDefenceOverview(
    req?: DescribeVulDefenceOverviewRequest,
    cb?: (error: string, rep: DescribeVulDefenceOverviewResponse) => void
  ): Promise<DescribeVulDefenceOverviewResponse> {
    return this.request("DescribeVulDefenceOverview", req, cb)
  }

  /**
   * 获取所有账号数量
   */
  async DescribeAssetUserCount(
    req: DescribeAssetUserCountRequest,
    cb?: (error: string, rep: DescribeAssetUserCountResponse) => void
  ): Promise<DescribeAssetUserCountResponse> {
    return this.request("DescribeAssetUserCount", req, cb)
  }

  /**
   * 导出资产管理主机资源详细信息
   */
  async ExportAssetMachineDetail(
    req: ExportAssetMachineDetailRequest,
    cb?: (error: string, rep: ExportAssetMachineDetailResponse) => void
  ): Promise<ExportAssetMachineDetailResponse> {
    return this.request("ExportAssetMachineDetail", req, cb)
  }

  /**
   * 获取所有Web站点数量
   */
  async DescribeAssetWebLocationCount(
    req: DescribeAssetWebLocationCountRequest,
    cb?: (error: string, rep: DescribeAssetWebLocationCountResponse) => void
  ): Promise<DescribeAssetWebLocationCountResponse> {
    return this.request("DescribeAssetWebLocationCount", req, cb)
  }

  /**
   * 获取Web站点虚拟目录列表
   */
  async DescribeAssetWebLocationPathList(
    req: DescribeAssetWebLocationPathListRequest,
    cb?: (error: string, rep: DescribeAssetWebLocationPathListResponse) => void
  ): Promise<DescribeAssetWebLocationPathListResponse> {
    return this.request("DescribeAssetWebLocationPathList", req, cb)
  }

  /**
   * 大屏可视化主机入侵详情
   */
  async DescribeScreenHostInvasion(
    req: DescribeScreenHostInvasionRequest,
    cb?: (error: string, rep: DescribeScreenHostInvasionResponse) => void
  ): Promise<DescribeScreenHostInvasionResponse> {
    return this.request("DescribeScreenHostInvasion", req, cb)
  }

  /**
   * 查看产生事件时规则详情接口
   */
  async DescribeFileTamperEventRuleInfo(
    req: DescribeFileTamperEventRuleInfoRequest,
    cb?: (error: string, rep: DescribeFileTamperEventRuleInfoResponse) => void
  ): Promise<DescribeFileTamperEventRuleInfoResponse> {
    return this.request("DescribeFileTamperEventRuleInfo", req, cb)
  }

  /**
   * 查询索引
   */
  async DescribeLogIndex(
    req?: DescribeLogIndexRequest,
    cb?: (error: string, rep: DescribeLogIndexResponse) => void
  ): Promise<DescribeLogIndexResponse> {
    return this.request("DescribeLogIndex", req, cb)
  }

  /**
   * DestroyOrder  该接口可以对资源销毁.
   */
  async DestroyOrder(
    req: DestroyOrderRequest,
    cb?: (error: string, rep: DestroyOrderResponse) => void
  ): Promise<DestroyOrderResponse> {
    return this.request("DestroyOrder", req, cb)
  }

  /**
   * 新增或更新告警接收人
   */
  async ModifyWebHookReceiver(
    req: ModifyWebHookReceiverRequest,
    cb?: (error: string, rep: ModifyWebHookReceiverResponse) => void
  ): Promise<ModifyWebHookReceiverResponse> {
    return this.request("ModifyWebHookReceiver", req, cb)
  }

  /**
   * 大屏可视化获取主机相关统计
   */
  async DescribeScreenGeneralStat(
    req?: DescribeScreenGeneralStatRequest,
    cb?: (error: string, rep: DescribeScreenGeneralStatResponse) => void
  ): Promise<DescribeScreenGeneralStatResponse> {
    return this.request("DescribeScreenGeneralStat", req, cb)
  }

  /**
   * 查询高危命令事件详情(新)
   */
  async DescribeBashEventsInfoNew(
    req: DescribeBashEventsInfoNewRequest,
    cb?: (error: string, rep: DescribeBashEventsInfoNewResponse) => void
  ): Promise<DescribeBashEventsInfoNewResponse> {
    return this.request("DescribeBashEventsInfoNew", req, cb)
  }

  /**
   * 更改基线忽略规则
   */
  async ModifyBaselineRuleIgnore(
    req: ModifyBaselineRuleIgnoreRequest,
    cb?: (error: string, rep: ModifyBaselineRuleIgnoreResponse) => void
  ): Promise<ModifyBaselineRuleIgnoreResponse> {
    return this.request("ModifyBaselineRuleIgnore", req, cb)
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
   * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
   */
  async ExportMaliciousRequests(
    req: ExportMaliciousRequestsRequest,
    cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void
  ): Promise<ExportMaliciousRequestsResponse> {
    return this.request("ExportMaliciousRequests", req, cb)
  }

  /**
   * 获取系统负载、内存使用率、硬盘使用率情况
   */
  async DescribeAssetLoadInfo(
    req?: DescribeAssetLoadInfoRequest,
    cb?: (error: string, rep: DescribeAssetLoadInfoResponse) => void
  ): Promise<DescribeAssetLoadInfoResponse> {
    return this.request("DescribeAssetLoadInfo", req, cb)
  }

  /**
   * 修复基线检测
   */
  async FixBaselineDetect(
    req: FixBaselineDetectRequest,
    cb?: (error: string, rep: FixBaselineDetectResponse) => void
  ): Promise<FixBaselineDetectResponse> {
    return this.request("FixBaselineDetect", req, cb)
  }

  /**
   * 获取基线规则检测列表
   */
  async DescribeBaselineRuleDetectList(
    req: DescribeBaselineRuleDetectListRequest,
    cb?: (error: string, rep: DescribeBaselineRuleDetectListResponse) => void
  ): Promise<DescribeBaselineRuleDetectListResponse> {
    return this.request("DescribeBaselineRuleDetectList", req, cb)
  }

  /**
   * 编辑漏洞防御最大cpu配置
   */
  async ModifyRaspMaxCpu(
    req: ModifyRaspMaxCpuRequest,
    cb?: (error: string, rep: ModifyRaspMaxCpuResponse) => void
  ): Promise<ModifyRaspMaxCpuResponse> {
    return this.request("ModifyRaspMaxCpu", req, cb)
  }

  /**
   * 删除授权全部记录
   */
  async DeleteLicenseRecordAll(
    req?: DeleteLicenseRecordAllRequest,
    cb?: (error: string, rep: DeleteLicenseRecordAllResponse) => void
  ): Promise<DeleteLicenseRecordAllResponse> {
    return this.request("DeleteLicenseRecordAll", req, cb)
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
   * 导出基线检测项
   */
  async ExportBaselineItemDetectList(
    req: ExportBaselineItemDetectListRequest,
    cb?: (error: string, rep: ExportBaselineItemDetectListResponse) => void
  ): Promise<ExportBaselineItemDetectListResponse> {
    return this.request("ExportBaselineItemDetectList", req, cb)
  }

  /**
   * 更新合并后登录审计白名单信息（服务器列表数目应小于1000）
   */
  async ModifyLoginWhiteRecord(
    req: ModifyLoginWhiteRecordRequest,
    cb?: (error: string, rep: ModifyLoginWhiteRecordResponse) => void
  ): Promise<ModifyLoginWhiteRecordResponse> {
    return this.request("ModifyLoginWhiteRecord", req, cb)
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
   * 查询网络攻击设置
   */
  async DescribeNetAttackSetting(
    req?: DescribeNetAttackSettingRequest,
    cb?: (error: string, rep: DescribeNetAttackSettingResponse) => void
  ): Promise<DescribeNetAttackSettingResponse> {
    return this.request("DescribeNetAttackSetting", req, cb)
  }

  /**
   * 导出资产管理Web框架列表
   */
  async ExportAssetWebFrameList(
    req: ExportAssetWebFrameListRequest,
    cb?: (error: string, rep: ExportAssetWebFrameListResponse) => void
  ): Promise<ExportAssetWebFrameListResponse> {
    return this.request("ExportAssetWebFrameList", req, cb)
  }

  /**
   * 检验核心文件监控前端新增和编辑时的规则参数。
   */
  async CheckFileTamperRule(
    req: CheckFileTamperRuleRequest,
    cb?: (error: string, rep: CheckFileTamperRuleResponse) => void
  ): Promise<CheckFileTamperRuleResponse> {
    return this.request("CheckFileTamperRule", req, cb)
  }

  /**
   * 获取网络攻击白名单列表
   */
  async DescribeNetAttackWhiteList(
    req: DescribeNetAttackWhiteListRequest,
    cb?: (error: string, rep: DescribeNetAttackWhiteListResponse) => void
  ): Promise<DescribeNetAttackWhiteListResponse> {
    return this.request("DescribeNetAttackWhiteList", req, cb)
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
   * 切换高危命令策略状态
   */
  async ModifyBashPolicyStatus(
    req: ModifyBashPolicyStatusRequest,
    cb?: (error: string, rep: ModifyBashPolicyStatusResponse) => void
  ): Promise<ModifyBashPolicyStatusResponse> {
    return this.request("ModifyBashPolicyStatus", req, cb)
  }

  /**
   * 删除恶意请求事件
   */
  async DeleteRiskDnsEvent(
    req: DeleteRiskDnsEventRequest,
    cb?: (error: string, rep: DeleteRiskDnsEventResponse) => void
  ): Promise<DeleteRiskDnsEventResponse> {
    return this.request("DeleteRiskDnsEvent", req, cb)
  }

  /**
   * 设置本地存储数据
   */
  async SetLocalStorageItem(
    req: SetLocalStorageItemRequest,
    cb?: (error: string, rep: SetLocalStorageItemResponse) => void
  ): Promise<SetLocalStorageItemResponse> {
    return this.request("SetLocalStorageItem", req, cb)
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
   * 删除日志下载任务
   */
  async DeleteLogExport(
    req: DeleteLogExportRequest,
    cb?: (error: string, rep: DeleteLogExportResponse) => void
  ): Promise<DeleteLogExportResponse> {
    return this.request("DeleteLogExport", req, cb)
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
   * 清理本地存储数据
   */
  async ClearLocalStorage(
    req?: ClearLocalStorageRequest,
    cb?: (error: string, rep: ClearLocalStorageResponse) => void
  ): Promise<ClearLocalStorageResponse> {
    return this.request("ClearLocalStorage", req, cb)
  }

  /**
   * 获取所有Web框架数量
   */
  async DescribeAssetWebFrameCount(
    req: DescribeAssetWebFrameCountRequest,
    cb?: (error: string, rep: DescribeAssetWebFrameCountResponse) => void
  ): Promise<DescribeAssetWebFrameCountResponse> {
    return this.request("DescribeAssetWebFrameCount", req, cb)
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
   * 查询授权信息
   */
  async DescribeLicense(
    req?: DescribeLicenseRequest,
    cb?: (error: string, rep: DescribeLicenseResponse) => void
  ): Promise<DescribeLicenseResponse> {
    return this.request("DescribeLicense", req, cb)
  }

  /**
   * 导出高危命令策略
   */
  async ExportBashPolicies(
    req: ExportBashPoliciesRequest,
    cb?: (error: string, rep: ExportBashPoliciesResponse) => void
  ): Promise<ExportBashPoliciesResponse> {
    return this.request("ExportBashPolicies", req, cb)
  }

  /**
   * 本接口 (DescribeMachineLicenseDetail)查询机器授权信息
   */
  async DescribeMachineLicenseDetail(
    req: DescribeMachineLicenseDetailRequest,
    cb?: (error: string, rep: DescribeMachineLicenseDetailResponse) => void
  ): Promise<DescribeMachineLicenseDetailResponse> {
    return this.request("DescribeMachineLicenseDetail", req, cb)
  }

  /**
   * 编辑反弹Shell规则（支持多服务器选择）
   */
  async ModifyReverseShellRulesAggregation(
    req: ModifyReverseShellRulesAggregationRequest,
    cb?: (error: string, rep: ModifyReverseShellRulesAggregationResponse) => void
  ): Promise<ModifyReverseShellRulesAggregationResponse> {
    return this.request("ModifyReverseShellRulesAggregation", req, cb)
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
   * 获取账号列表
   */
  async DescribeAssetUserList(
    req: DescribeAssetUserListRequest,
    cb?: (error: string, rep: DescribeAssetUserListResponse) => void
  ): Promise<DescribeAssetUserListResponse> {
    return this.request("DescribeAssetUserList", req, cb)
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
   * 查询给定主机java内存马插件信息
   */
  async DescribeJavaMemShellPluginInfo(
    req: DescribeJavaMemShellPluginInfoRequest,
    cb?: (error: string, rep: DescribeJavaMemShellPluginInfoResponse) => void
  ): Promise<DescribeJavaMemShellPluginInfoResponse> {
    return this.request("DescribeJavaMemShellPluginInfo", req, cb)
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
   * 查询基线是否第一次检测
   */
  async CheckFirstScanBaseline(
    req?: CheckFirstScanBaselineRequest,
    cb?: (error: string, rep: CheckFirstScanBaselineResponse) => void
  ): Promise<CheckFirstScanBaselineResponse> {
    return this.request("CheckFirstScanBaseline", req, cb)
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
   * 导出资产管理Web服务列表
   */
  async ExportAssetWebServiceInfoList(
    req: ExportAssetWebServiceInfoListRequest,
    cb?: (error: string, rep: ExportAssetWebServiceInfoListResponse) => void
  ): Promise<ExportAssetWebServiceInfoListResponse> {
    return this.request("ExportAssetWebServiceInfoList", req, cb)
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
   * 删除网络攻击白名单
   */
  async DeleteNetAttackWhiteList(
    req: DeleteNetAttackWhiteListRequest,
    cb?: (error: string, rep: DeleteNetAttackWhiteListResponse) => void
  ): Promise<DeleteNetAttackWhiteListResponse> {
    return this.request("DeleteNetAttackWhiteList", req, cb)
  }

  /**
   * 获取日志下载任务列表
   */
  async DescribeLogExports(
    req: DescribeLogExportsRequest,
    cb?: (error: string, rep: DescribeLogExportsResponse) => void
  ): Promise<DescribeLogExportsResponse> {
    return this.request("DescribeLogExports", req, cb)
  }

  /**
   * 大屏可视化主机区域列表
   */
  async DescribeScreenMachines(
    req: DescribeScreenMachinesRequest,
    cb?: (error: string, rep: DescribeScreenMachinesResponse) => void
  ): Promise<DescribeScreenMachinesResponse> {
    return this.request("DescribeScreenMachines", req, cb)
  }

  /**
   * 大屏获取安全防护状态
   */
  async DescribeScreenProtectionStat(
    req?: DescribeScreenProtectionStatRequest,
    cb?: (error: string, rep: DescribeScreenProtectionStatResponse) => void
  ): Promise<DescribeScreenProtectionStatResponse> {
    return this.request("DescribeScreenProtectionStat", req, cb)
  }

  /**
   * 获取高危命令列表(新)
   */
  async DescribeBashEventsNew(
    req: DescribeBashEventsNewRequest,
    cb?: (error: string, rep: DescribeBashEventsNewResponse) => void
  ): Promise<DescribeBashEventsNewResponse> {
    return this.request("DescribeBashEventsNew", req, cb)
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
   * 删除主机所有记录，目前只支持非腾讯云主机，且需要主机在离线状态
   */
  async RemoveMachine(
    req: RemoveMachineRequest,
    cb?: (error: string, rep: RemoveMachineResponse) => void
  ): Promise<RemoveMachineResponse> {
    return this.request("RemoveMachine", req, cb)
  }

  /**
   * 获取主机所有资源数量
   */
  async DescribeAssetHostTotalCount(
    req: DescribeAssetHostTotalCountRequest,
    cb?: (error: string, rep: DescribeAssetHostTotalCountResponse) => void
  ): Promise<DescribeAssetHostTotalCountResponse> {
    return this.request("DescribeAssetHostTotalCount", req, cb)
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
   * 查询恶意请求事件详情
   */
  async DescribeRiskDnsEventInfo(
    req: DescribeRiskDnsEventInfoRequest,
    cb?: (error: string, rep: DescribeRiskDnsEventInfoResponse) => void
  ): Promise<DescribeRiskDnsEventInfoResponse> {
    return this.request("DescribeRiskDnsEventInfo", req, cb)
  }

  /**
   * 导出高危命令事件(新)
   */
  async ExportBashEventsNew(
    req: ExportBashEventsNewRequest,
    cb?: (error: string, rep: ExportBashEventsNewResponse) => void
  ): Promise<ExportBashEventsNewResponse> {
    return this.request("ExportBashEventsNew", req, cb)
  }

  /**
   * 查询入侵检测事件更新状态任务是否完成
   */
  async DescribeRiskBatchStatus(
    req: DescribeRiskBatchStatusRequest,
    cb?: (error: string, rep: DescribeRiskBatchStatusResponse) => void
  ): Promise<DescribeRiskBatchStatusResponse> {
    return this.request("DescribeRiskBatchStatus", req, cb)
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
   * 查询告警接收人列表
   */
  async DescribeWebHookReceiver(
    req: DescribeWebHookReceiverRequest,
    cb?: (error: string, rep: DescribeWebHookReceiverResponse) => void
  ): Promise<DescribeWebHookReceiverResponse> {
    return this.request("DescribeWebHookReceiver", req, cb)
  }

  /**
   * 用于设置新增主机自动开通专业防护配置。
   */
  async ModifyAutoOpenProVersionConfig(
    req: ModifyAutoOpenProVersionConfigRequest,
    cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void
  ): Promise<ModifyAutoOpenProVersionConfigResponse> {
    return this.request("ModifyAutoOpenProVersionConfig", req, cb)
  }

  /**
   * 设置本地存储过期时间
   */
  async SetLocalStorageExpire(
    req: SetLocalStorageExpireRequest,
    cb?: (error: string, rep: SetLocalStorageExpireResponse) => void
  ): Promise<SetLocalStorageExpireResponse> {
    return this.request("SetLocalStorageExpire", req, cb)
  }

  /**
   * 漏洞修护-查询可修护主机信息
   */
  async DescribeCanFixVulMachine(
    req: DescribeCanFixVulMachineRequest,
    cb?: (error: string, rep: DescribeCanFixVulMachineResponse) => void
  ): Promise<DescribeCanFixVulMachineResponse> {
    return this.request("DescribeCanFixVulMachine", req, cb)
  }

  /**
   * 更改基线策略状态
   */
  async ModifyBaselinePolicyState(
    req: ModifyBaselinePolicyStateRequest,
    cb?: (error: string, rep: ModifyBaselinePolicyStateResponse) => void
  ): Promise<ModifyBaselinePolicyStateResponse> {
    return this.request("ModifyBaselinePolicyState", req, cb)
  }

  /**
   * 测试企微机器人规则
   */
  async TestWebHookRule(
    req: TestWebHookRuleRequest,
    cb?: (error: string, rep: TestWebHookRuleResponse) => void
  ): Promise<TestWebHookRuleResponse> {
    return this.request("TestWebHookRule", req, cb)
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
   * 核心文件监控规则列表
   */
  async DescribeFileTamperRules(
    req: DescribeFileTamperRulesRequest,
    cb?: (error: string, rep: DescribeFileTamperRulesResponse) => void
  ): Promise<DescribeFileTamperRulesResponse> {
    return this.request("DescribeFileTamperRules", req, cb)
  }

  /**
   * 查询主机高级防御事件数统计
   */
  async DescribeMachineDefenseCnt(
    req: DescribeMachineDefenseCntRequest,
    cb?: (error: string, rep: DescribeMachineDefenseCntResponse) => void
  ): Promise<DescribeMachineDefenseCntResponse> {
    return this.request("DescribeMachineDefenseCnt", req, cb)
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
   * 修改网络攻击设置
   */
  async ModifyNetAttackSetting(
    req: ModifyNetAttackSettingRequest,
    cb?: (error: string, rep: ModifyNetAttackSettingResponse) => void
  ): Promise<ModifyNetAttackSettingResponse> {
    return this.request("ModifyNetAttackSetting", req, cb)
  }

  /**
   * 删除阻断白名单列表
   */
  async DeleteBanWhiteList(
    req: DeleteBanWhiteListRequest,
    cb?: (error: string, rep: DeleteBanWhiteListResponse) => void
  ): Promise<DeleteBanWhiteListResponse> {
    return this.request("DeleteBanWhiteList", req, cb)
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
   * 获取各种类型资源Top5
   */
  async DescribeAssetTypeTop(
    req?: DescribeAssetTypeTopRequest,
    cb?: (error: string, rep: DescribeAssetTypeTopResponse) => void
  ): Promise<DescribeAssetTypeTopResponse> {
    return this.request("DescribeAssetTypeTop", req, cb)
  }

  /**
   * 获取漏洞防御白名单漏洞列表
   */
  async DescribeRaspRuleVuls(
    req: DescribeRaspRuleVulsRequest,
    cb?: (error: string, rep: DescribeRaspRuleVulsResponse) => void
  ): Promise<DescribeRaspRuleVulsResponse> {
    return this.request("DescribeRaspRuleVuls", req, cb)
  }

  /**
   * 导出勒索防御策略绑定机器列表
   */
  async ExportRansomDefenseStrategyMachines(
    req: ExportRansomDefenseStrategyMachinesRequest,
    cb?: (error: string, rep: ExportRansomDefenseStrategyMachinesResponse) => void
  ): Promise<ExportRansomDefenseStrategyMachinesResponse> {
    return this.request("ExportRansomDefenseStrategyMachines", req, cb)
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
   * 获取一键忽略受影响的检测项和主机信息
   */
  async DescribeIgnoreHostAndItemConfig(
    req: DescribeIgnoreHostAndItemConfigRequest,
    cb?: (error: string, rep: DescribeIgnoreHostAndItemConfigResponse) => void
  ): Promise<DescribeIgnoreHostAndItemConfigResponse> {
    return this.request("DescribeIgnoreHostAndItemConfig", req, cb)
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
   * 查询日志投递kafka可选项列表
   */
  async DescribeLogDeliveryKafkaOptions(
    req: DescribeLogDeliveryKafkaOptionsRequest,
    cb?: (error: string, rep: DescribeLogDeliveryKafkaOptionsResponse) => void
  ): Promise<DescribeLogDeliveryKafkaOptionsResponse> {
    return this.request("DescribeLogDeliveryKafkaOptions", req, cb)
  }

  /**
   * 查询主机入侵检测事件统计
   */
  async DescribeMachineRiskCnt(
    req: DescribeMachineRiskCntRequest,
    cb?: (error: string, rep: DescribeMachineRiskCntResponse) => void
  ): Promise<DescribeMachineRiskCntResponse> {
    return this.request("DescribeMachineRiskCnt", req, cb)
  }

  /**
   * 大屏可视化安全播报
   */
  async DescribeScreenBroadcasts(
    req?: DescribeScreenBroadcastsRequest,
    cb?: (error: string, rep: DescribeScreenBroadcastsResponse) => void
  ): Promise<DescribeScreenBroadcastsResponse> {
    return this.request("DescribeScreenBroadcasts", req, cb)
  }

  /**
   * 该接口可以创建白名单订单
   */
  async CreateWhiteListOrder(
    req: CreateWhiteListOrderRequest,
    cb?: (error: string, rep: CreateWhiteListOrderResponse) => void
  ): Promise<CreateWhiteListOrderResponse> {
    return this.request("CreateWhiteListOrder", req, cb)
  }

  /**
   * 设置中心-授权管理 对某个授权批量解绑机器
   */
  async ModifyLicenseUnBinds(
    req: ModifyLicenseUnBindsRequest,
    cb?: (error: string, rep: ModifyLicenseUnBindsResponse) => void
  ): Promise<ModifyLicenseUnBindsResponse> {
    return this.request("ModifyLicenseUnBinds", req, cb)
  }

  /**
   * 获取版本对比信息
   */
  async DescribeVersionCompareChart(
    req?: DescribeVersionCompareChartRequest,
    cb?: (error: string, rep: DescribeVersionCompareChartResponse) => void
  ): Promise<DescribeVersionCompareChartResponse> {
    return this.request("DescribeVersionCompareChart", req, cb)
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
   * 获取全网勒索态势
   */
  async DescribeRansomDefenseTrend(
    req?: DescribeRansomDefenseTrendRequest,
    cb?: (error: string, rep: DescribeRansomDefenseTrendResponse) => void
  ): Promise<DescribeRansomDefenseTrendResponse> {
    return this.request("DescribeRansomDefenseTrend", req, cb)
  }

  /**
   * 导出资产管理Web应用列表
   */
  async ExportAssetWebAppList(
    req: ExportAssetWebAppListRequest,
    cb?: (error: string, rep: ExportAssetWebAppListResponse) => void
  ): Promise<ExportAssetWebAppListResponse> {
    return this.request("ExportAssetWebAppList", req, cb)
  }

  /**
   * 该接口可以获取设置中心-授权管理,某个授权下已绑定的授权机器列表
   */
  async DescribeLicenseBindList(
    req: DescribeLicenseBindListRequest,
    cb?: (error: string, rep: DescribeLicenseBindListResponse) => void
  ): Promise<DescribeLicenseBindListResponse> {
    return this.request("DescribeLicenseBindList", req, cb)
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
   * 开关java内存马插件
   */
  async ModifyJavaMemShellPluginSwitch(
    req: ModifyJavaMemShellPluginSwitchRequest,
    cb?: (error: string, rep: ModifyJavaMemShellPluginSwitchResponse) => void
  ): Promise<ModifyJavaMemShellPluginSwitchResponse> {
    return this.request("ModifyJavaMemShellPluginSwitch", req, cb)
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
   * 获取木马白名单列表
   */
  async DescribeMalwareWhiteList(
    req: DescribeMalwareWhiteListRequest,
    cb?: (error: string, rep: DescribeMalwareWhiteListResponse) => void
  ): Promise<DescribeMalwareWhiteListResponse> {
    return this.request("DescribeMalwareWhiteList", req, cb)
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
   * 创建木马白名单
   */
  async CreateMalwareWhiteList(
    req: CreateMalwareWhiteListRequest,
    cb?: (error: string, rep: CreateMalwareWhiteListResponse) => void
  ): Promise<CreateMalwareWhiteListResponse> {
    return this.request("CreateMalwareWhiteList", req, cb)
  }

  /**
   * 本接口（DeleteMachine）用于卸载主机安全客户端。
   */
  async DeleteMachine(
    req: DeleteMachineRequest,
    cb?: (error: string, rep: DeleteMachineResponse) => void
  ): Promise<DeleteMachineResponse> {
    return this.request("DeleteMachine", req, cb)
  }

  /**
   * 核心文件事件更新
   */
  async ModifyFileTamperEvents(
    req: ModifyFileTamperEventsRequest,
    cb?: (error: string, rep: ModifyFileTamperEventsResponse) => void
  ): Promise<ModifyFileTamperEventsResponse> {
    return this.request("ModifyFileTamperEvents", req, cb)
  }

  /**
   * 查询安全播报文章信息
   */
  async DescribeSecurityBroadcastInfo(
    req: DescribeSecurityBroadcastInfoRequest,
    cb?: (error: string, rep: DescribeSecurityBroadcastInfoResponse) => void
  ): Promise<DescribeSecurityBroadcastInfoResponse> {
    return this.request("DescribeSecurityBroadcastInfo", req, cb)
  }

  /**
   * ScanTaskAgain  重新开始扫描任务，可以指定机器
   */
  async ScanTaskAgain(
    req: ScanTaskAgainRequest,
    cb?: (error: string, rep: ScanTaskAgainResponse) => void
  ): Promise<ScanTaskAgainResponse> {
    return this.request("ScanTaskAgain", req, cb)
  }

  /**
   * 获取漏洞概览数据
   */
  async DescribeVulOverview(
    req?: DescribeVulOverviewRequest,
    cb?: (error: string, rep: DescribeVulOverviewResponse) => void
  ): Promise<DescribeVulOverviewResponse> {
    return this.request("DescribeVulOverview", req, cb)
  }

  /**
   * 日志分析功能-获取日志类型，使用该接口返回的结果暂时可过滤的日志类型
   */
  async DescribeLogType(
    req?: DescribeLogTypeRequest,
    cb?: (error: string, rep: DescribeLogTypeResponse) => void
  ): Promise<DescribeLogTypeResponse> {
    return this.request("DescribeLogType", req, cb)
  }

  /**
   * 网络攻击事件详情
   */
  async DescribeAttackEventInfo(
    req: DescribeAttackEventInfoRequest,
    cb?: (error: string, rep: DescribeAttackEventInfoResponse) => void
  ): Promise<DescribeAttackEventInfoResponse> {
    return this.request("DescribeAttackEventInfo", req, cb)
  }

  /**
   * 大屏可视化获取全网攻击热点
   */
  async DescribeScreenAttackHotspot(
    req?: DescribeScreenAttackHotspotRequest,
    cb?: (error: string, rep: DescribeScreenAttackHotspotResponse) => void
  ): Promise<DescribeScreenAttackHotspotResponse> {
    return this.request("DescribeScreenAttackHotspot", req, cb)
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
   * 导出修复列表
   */
  async ExportBaselineFixList(
    req: ExportBaselineFixListRequest,
    cb?: (error: string, rep: ExportBaselineFixListResponse) => void
  ): Promise<ExportBaselineFixListResponse> {
    return this.request("ExportBaselineFixList", req, cb)
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
   * 本接口 (DescribeMachines) 用于获取区域主机列表。
   */
  async DescribeMachines(
    req: DescribeMachinesRequest,
    cb?: (error: string, rep: DescribeMachinesResponse) => void
  ): Promise<DescribeMachinesResponse> {
    return this.request("DescribeMachines", req, cb)
  }

  /**
   * 获取基线检测主机列表
   */
  async DescribeBaselineHostDetectList(
    req: DescribeBaselineHostDetectListRequest,
    cb?: (error: string, rep: DescribeBaselineHostDetectListResponse) => void
  ): Promise<DescribeBaselineHostDetectListResponse> {
    return this.request("DescribeBaselineHostDetectList", req, cb)
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
   * 获取所有进程数量
   */
  async DescribeAssetProcessCount(
    req: DescribeAssetProcessCountRequest,
    cb?: (error: string, rep: DescribeAssetProcessCountResponse) => void
  ): Promise<DescribeAssetProcessCountResponse> {
    return this.request("DescribeAssetProcessCount", req, cb)
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
   * 获取漏洞态势信息
   */
  async DescribeVulTrend(
    req?: DescribeVulTrendRequest,
    cb?: (error: string, rep: DescribeVulTrendResponse) => void
  ): Promise<DescribeVulTrendResponse> {
    return this.request("DescribeVulTrend", req, cb)
  }

  /**
   * 获取指定点属性信息
   */
  async DescribeVertexDetail(
    req: DescribeVertexDetailRequest,
    cb?: (error: string, rep: DescribeVertexDetailResponse) => void
  ): Promise<DescribeVertexDetailResponse> {
    return this.request("DescribeVertexDetail", req, cb)
  }

  /**
   * 修改告警策略开关
   */
  async ModifyWebHookPolicyStatus(
    req: ModifyWebHookPolicyStatusRequest,
    cb?: (error: string, rep: ModifyWebHookPolicyStatusResponse) => void
  ): Promise<ModifyWebHookPolicyStatusResponse> {
    return this.request("ModifyWebHookPolicyStatus", req, cb)
  }

  /**
   * 导出检测项结果列表
   */
  async ExportBaselineItemList(
    req: ExportBaselineItemListRequest,
    cb?: (error: string, rep: ExportBaselineItemListResponse) => void
  ): Promise<ExportBaselineItemListResponse> {
    return this.request("ExportBaselineItemList", req, cb)
  }

  /**
   * 获取基线检测项TOP5
   */
  async DescribeBaselineItemRiskTop(
    req: DescribeBaselineItemRiskTopRequest,
    cb?: (error: string, rep: DescribeBaselineItemRiskTopResponse) => void
  ): Promise<DescribeBaselineItemRiskTopResponse> {
    return this.request("DescribeBaselineItemRiskTop", req, cb)
  }

  /**
   * 导出资产管理应用列表
   */
  async ExportAssetAppList(
    req: ExportAssetAppListRequest,
    cb?: (error: string, rep: ExportAssetAppListResponse) => void
  ): Promise<ExportAssetAppListResponse> {
    return this.request("ExportAssetAppList", req, cb)
  }

  /**
   * 导出弱口令配置列表
   */
  async ExportBaselineWeakPasswordList(
    req: ExportBaselineWeakPasswordListRequest,
    cb?: (error: string, rep: ExportBaselineWeakPasswordListResponse) => void
  ): Promise<ExportBaselineWeakPasswordListResponse> {
    return this.request("ExportBaselineWeakPasswordList", req, cb)
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
   * 删除本地存储数据
   */
  async RemoveLocalStorageItem(
    req: RemoveLocalStorageItemRequest,
    cb?: (error: string, rep: RemoveLocalStorageItemResponse) => void
  ): Promise<RemoveLocalStorageItemResponse> {
    return this.request("RemoveLocalStorageItem", req, cb)
  }

  /**
   * 导出资产管理端口列表
   */
  async ExportAssetPortInfoList(
    req: ExportAssetPortInfoListRequest,
    cb?: (error: string, rep: ExportAssetPortInfoListResponse) => void
  ): Promise<ExportAssetPortInfoListResponse> {
    return this.request("ExportAssetPortInfoList", req, cb)
  }

  /**
   * 导出资源监控列表
   */
  async ExportAssetMachineList(
    req: ExportAssetMachineListRequest,
    cb?: (error: string, rep: ExportAssetMachineListResponse) => void
  ): Promise<ExportAssetMachineListResponse> {
    return this.request("ExportAssetMachineList", req, cb)
  }

  /**
   * 获取日志存储量记录
   */
  async DescribeLogStorageRecord(
    req?: DescribeLogStorageRecordRequest,
    cb?: (error: string, rep: DescribeLogStorageRecordResponse) => void
  ): Promise<DescribeLogStorageRecordResponse> {
    return this.request("DescribeLogStorageRecord", req, cb)
  }

  /**
   * 校验高危命令用户规则新增和编辑时的参数。
   */
  async CheckBashPolicyParams(
    req: CheckBashPolicyParamsRequest,
    cb?: (error: string, rep: CheckBashPolicyParamsResponse) => void
  ): Promise<CheckBashPolicyParamsResponse> {
    return this.request("CheckBashPolicyParams", req, cb)
  }

  /**
   * 修改网络攻击事件状态
   */
  async ModifyEventAttackStatus(
    req: ModifyEventAttackStatusRequest,
    cb?: (error: string, rep: ModifyEventAttackStatusResponse) => void
  ): Promise<ModifyEventAttackStatusResponse> {
    return this.request("ModifyEventAttackStatus", req, cb)
  }

  /**
   * 对旗舰版机器单次触发事件调查及告警回溯
   */
  async CreateIncidentBacktracking(
    req: CreateIncidentBacktrackingRequest,
    cb?: (error: string, rep: CreateIncidentBacktrackingResponse) => void
  ): Promise<CreateIncidentBacktrackingResponse> {
    return this.request("CreateIncidentBacktracking", req, cb)
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
   * 用于统计专业版和基础版机器数。
   */
  async DescribeVersionStatistics(
    req?: DescribeVersionStatisticsRequest,
    cb?: (error: string, rep: DescribeVersionStatisticsResponse) => void
  ): Promise<DescribeVersionStatisticsResponse> {
    return this.request("DescribeVersionStatistics", req, cb)
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
   * 获取资产管理Web应用列表
   */
  async DescribeAssetWebAppList(
    req: DescribeAssetWebAppListRequest,
    cb?: (error: string, rep: DescribeAssetWebAppListResponse) => void
  ): Promise<DescribeAssetWebAppListResponse> {
    return this.request("DescribeAssetWebAppList", req, cb)
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
   * 导出基线主机检测
   */
  async ExportBaselineHostDetectList(
    req: ExportBaselineHostDetectListRequest,
    cb?: (error: string, rep: ExportBaselineHostDetectListResponse) => void
  ): Promise<ExportBaselineHostDetectListResponse> {
    return this.request("ExportBaselineHostDetectList", req, cb)
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
   * 删除告警接收人
   */
  async DeleteWebHookReceiver(
    req: DeleteWebHookReceiverRequest,
    cb?: (error: string, rep: DeleteWebHookReceiverResponse) => void
  ): Promise<DeleteWebHookReceiverResponse> {
    return this.request("DeleteWebHookReceiver", req, cb)
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
   * 查询主机概览信息
   */
  async DescribeMachineGeneral(
    req?: DescribeMachineGeneralRequest,
    cb?: (error: string, rep: DescribeMachineGeneralResponse) => void
  ): Promise<DescribeMachineGeneralResponse> {
    return this.request("DescribeMachineGeneral", req, cb)
  }

  /**
   * 获取恶意请求策略列表
   */
  async DescribeRiskDnsPolicyList(
    req: DescribeRiskDnsPolicyListRequest,
    cb?: (error: string, rep: DescribeRiskDnsPolicyListResponse) => void
  ): Promise<DescribeRiskDnsPolicyListResponse> {
    return this.request("DescribeRiskDnsPolicyList", req, cb)
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
   * 查询java内存马事件详细信息
   */
  async DescribeJavaMemShellInfo(
    req: DescribeJavaMemShellInfoRequest,
    cb?: (error: string, rep: DescribeJavaMemShellInfoResponse) => void
  ): Promise<DescribeJavaMemShellInfoResponse> {
    return this.request("DescribeJavaMemShellInfo", req, cb)
  }

  /**
   * 获取基线下载列表
   */
  async DescribeBaselineDownloadList(
    req: DescribeBaselineDownloadListRequest,
    cb?: (error: string, rep: DescribeBaselineDownloadListResponse) => void
  ): Promise<DescribeBaselineDownloadListResponse> {
    return this.request("DescribeBaselineDownloadList", req, cb)
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
   * 新增或修改日志投递kafka接入配置
   */
  async ModifyLogKafkaAccess(
    req: ModifyLogKafkaAccessRequest,
    cb?: (error: string, rep: ModifyLogKafkaAccessResponse) => void
  ): Promise<ModifyLogKafkaAccessResponse> {
    return this.request("ModifyLogKafkaAccess", req, cb)
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
   * 获取漏洞防御事件详情
   */
  async DescribeDefenceEventDetail(
    req: DescribeDefenceEventDetailRequest,
    cb?: (error: string, rep: DescribeDefenceEventDetailResponse) => void
  ): Promise<DescribeDefenceEventDetailResponse> {
    return this.request("DescribeDefenceEventDetail", req, cb)
  }

  /**
   * 获取文件查杀概览信息
   */
  async DescribeMalwareRiskOverview(
    req?: DescribeMalwareRiskOverviewRequest,
    cb?: (error: string, rep: DescribeMalwareRiskOverviewResponse) => void
  ): Promise<DescribeMalwareRiskOverviewResponse> {
    return this.request("DescribeMalwareRiskOverview", req, cb)
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
   * 查询机器清理历史记录
   */
  async DescribeMachineClearHistory(
    req: DescribeMachineClearHistoryRequest,
    cb?: (error: string, rep: DescribeMachineClearHistoryResponse) => void
  ): Promise<DescribeMachineClearHistoryResponse> {
    return this.request("DescribeMachineClearHistory", req, cb)
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
   * 获取agent安装命令
   */
  async DescribeAgentInstallCommand(
    req: DescribeAgentInstallCommandRequest,
    cb?: (error: string, rep: DescribeAgentInstallCommandResponse) => void
  ): Promise<DescribeAgentInstallCommandResponse> {
    return this.request("DescribeAgentInstallCommand", req, cb)
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
   * 根据Ids删除反弹Shell事件
   */
  async DeleteReverseShellEvents(
    req: DeleteReverseShellEventsRequest,
    cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void
  ): Promise<DeleteReverseShellEventsResponse> {
    return this.request("DeleteReverseShellEvents", req, cb)
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
   * 查询主机地域列表
   */
  async DescribeMachineRegionList(
    req?: DescribeMachineRegionListRequest,
    cb?: (error: string, rep: DescribeMachineRegionListResponse) => void
  ): Promise<DescribeMachineRegionListResponse> {
    return this.request("DescribeMachineRegionList", req, cb)
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
   * 导出资产管理启动服务列表
   */
  async ExportAssetInitServiceList(
    req: ExportAssetInitServiceListRequest,
    cb?: (error: string, rep: ExportAssetInitServiceListResponse) => void
  ): Promise<ExportAssetInitServiceListResponse> {
    return this.request("ExportAssetInitServiceList", req, cb)
  }

  /**
   * 更新登录审计白名单信息
   */
  async ModifyLoginWhiteInfo(
    req: ModifyLoginWhiteInfoRequest,
    cb?: (error: string, rep: ModifyLoginWhiteInfoResponse) => void
  ): Promise<ModifyLoginWhiteInfoResponse> {
    return this.request("ModifyLoginWhiteInfo", req, cb)
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
   * 获取当前用户告警列表
   */
  async DescribeWarningList(
    req?: DescribeWarningListRequest,
    cb?: (error: string, rep: DescribeWarningListResponse) => void
  ): Promise<DescribeWarningListResponse> {
    return this.request("DescribeWarningList", req, cb)
  }

  /**
   * 获取基线忽略规则列表
   */
  async DescribeBaselineRuleIgnoreList(
    req: DescribeBaselineRuleIgnoreListRequest,
    cb?: (error: string, rep: DescribeBaselineRuleIgnoreListResponse) => void
  ): Promise<DescribeBaselineRuleIgnoreListResponse> {
    return this.request("DescribeBaselineRuleIgnoreList", req, cb)
  }

  /**
   * 修改主机备注信息
   */
  async ModifyMachineRemark(
    req: ModifyMachineRemarkRequest,
    cb?: (error: string, rep: ModifyMachineRemarkResponse) => void
  ): Promise<ModifyMachineRemarkResponse> {
    return this.request("ModifyMachineRemark", req, cb)
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
   * 获取机器地域列表
   */
  async DescribeMachineRegions(
    req?: DescribeMachineRegionsRequest,
    cb?: (error: string, rep: DescribeMachineRegionsResponse) => void
  ): Promise<DescribeMachineRegionsResponse> {
    return this.request("DescribeMachineRegions", req, cb)
  }

  /**
   * 获取当前漏洞防御插件设置
   */
  async DescribeVulDefenceSetting(
    req?: DescribeVulDefenceSettingRequest,
    cb?: (error: string, rep: DescribeVulDefenceSettingResponse) => void
  ): Promise<DescribeVulDefenceSettingResponse> {
    return this.request("DescribeVulDefenceSetting", req, cb)
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
   * 导出基线检测规则
   */
  async ExportBaselineRuleDetectList(
    req: ExportBaselineRuleDetectListRequest,
    cb?: (error: string, rep: ExportBaselineRuleDetectListResponse) => void
  ): Promise<ExportBaselineRuleDetectListResponse> {
    return this.request("ExportBaselineRuleDetectList", req, cb)
  }

  /**
   * 获取日志存储配置
   */
  async DescribeLogStorageConfig(
    req?: DescribeLogStorageConfigRequest,
    cb?: (error: string, rep: DescribeLogStorageConfigResponse) => void
  ): Promise<DescribeLogStorageConfigResponse> {
    return this.request("DescribeLogStorageConfig", req, cb)
  }

  /**
   * 删除机器清理记录
   */
  async DeleteMachineClearHistory(
    req: DeleteMachineClearHistoryRequest,
    cb?: (error: string, rep: DeleteMachineClearHistoryResponse) => void
  ): Promise<DeleteMachineClearHistoryResponse> {
    return this.request("DeleteMachineClearHistory", req, cb)
  }

  /**
   * 漏洞修护-查询主机创建的快照
   */
  async DescribeMachineSnapshot(
    req: DescribeMachineSnapshotRequest,
    cb?: (error: string, rep: DescribeMachineSnapshotResponse) => void
  ): Promise<DescribeMachineSnapshotResponse> {
    return this.request("DescribeMachineSnapshot", req, cb)
  }

  /**
   * 查询授权白名单的可用配置
   */
  async DescribeLicenseWhiteConfig(
    req: DescribeLicenseWhiteConfigRequest,
    cb?: (error: string, rep: DescribeLicenseWhiteConfigResponse) => void
  ): Promise<DescribeLicenseWhiteConfigResponse> {
    return this.request("DescribeLicenseWhiteConfig", req, cb)
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
   * 网络攻击top5数据列表
   */
  async DescribeAttackTop(
    req: DescribeAttackTopRequest,
    cb?: (error: string, rep: DescribeAttackTopResponse) => void
  ): Promise<DescribeAttackTopResponse> {
    return this.request("DescribeAttackTop", req, cb)
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
   * 更改基线策略设置
   */
  async ModifyBaselinePolicy(
    req: ModifyBaselinePolicyRequest,
    cb?: (error: string, rep: ModifyBaselinePolicyResponse) => void
  ): Promise<ModifyBaselinePolicyResponse> {
    return this.request("ModifyBaselinePolicy", req, cb)
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
   * 删除基线策略配置
   */
  async DeleteBaselinePolicy(
    req: DeleteBaselinePolicyRequest,
    cb?: (error: string, rep: DeleteBaselinePolicyResponse) => void
  ): Promise<DeleteBaselinePolicyResponse> {
    return this.request("DeleteBaselinePolicy", req, cb)
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
     * CreateLicenseOrder 该接口可以创建专业版/旗舰版订单
支持预付费后付费创建
后付费订单直接创建成功
预付费订单仅下单不支付,需要调用计费支付接口进行支付
     */
  async CreateLicenseOrder(
    req: CreateLicenseOrderRequest,
    cb?: (error: string, rep: CreateLicenseOrderResponse) => void
  ): Promise<CreateLicenseOrderResponse> {
    return this.request("CreateLicenseOrder", req, cb)
  }

  /**
   * 大屏可视化主机区域选项列表
   */
  async DescribeScreenMachineRegions(
    req?: DescribeScreenMachineRegionsRequest,
    cb?: (error: string, rep: DescribeScreenMachineRegionsResponse) => void
  ): Promise<DescribeScreenMachineRegionsResponse> {
    return this.request("DescribeScreenMachineRegions", req, cb)
  }

  /**
   * 获取忽略规则主机列表
   */
  async DescribeBaselineHostIgnoreList(
    req: DescribeBaselineHostIgnoreListRequest,
    cb?: (error: string, rep: DescribeBaselineHostIgnoreListResponse) => void
  ): Promise<DescribeBaselineHostIgnoreListResponse> {
    return this.request("DescribeBaselineHostIgnoreList", req, cb)
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
   * 查询漏洞防御白名单
   */
  async DescribeRaspRules(
    req: DescribeRaspRulesRequest,
    cb?: (error: string, rep: DescribeRaspRulesResponse) => void
  ): Promise<DescribeRaspRulesResponse> {
    return this.request("DescribeRaspRules", req, cb)
  }

  /**
   * 创建日志下载任务
   */
  async CreateLogExport(
    req: CreateLogExportRequest,
    cb?: (error: string, rep: CreateLogExportResponse) => void
  ): Promise<CreateLogExportResponse> {
    return this.request("CreateLogExport", req, cb)
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
   * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
   */
  async ExportNonlocalLoginPlaces(
    req: ExportNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void
  ): Promise<ExportNonlocalLoginPlacesResponse> {
    return this.request("ExportNonlocalLoginPlaces", req, cb)
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
   * 获取软件关联进程列表
   */
  async DescribeAssetAppProcessList(
    req: DescribeAssetAppProcessListRequest,
    cb?: (error: string, rep: DescribeAssetAppProcessListResponse) => void
  ): Promise<DescribeAssetAppProcessListResponse> {
    return this.request("DescribeAssetAppProcessList", req, cb)
  }

  /**
   * 同步机器信息
   */
  async SyncMachines(
    req: SyncMachinesRequest,
    cb?: (error: string, rep: SyncMachinesResponse) => void
  ): Promise<SyncMachinesResponse> {
    return this.request("SyncMachines", req, cb)
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
   * 查询定时扫描配置
   */
  async DescribeMalwareTimingScanSetting(
    req?: DescribeMalwareTimingScanSettingRequest,
    cb?: (error: string, rep: DescribeMalwareTimingScanSettingResponse) => void
  ): Promise<DescribeMalwareTimingScanSettingResponse> {
    return this.request("DescribeMalwareTimingScanSetting", req, cb)
  }

  /**
   * 删除恶意请求策略
   */
  async DeleteRiskDnsPolicy(
    req: DeleteRiskDnsPolicyRequest,
    cb?: (error: string, rep: DeleteRiskDnsPolicyResponse) => void
  ): Promise<DeleteRiskDnsPolicyResponse> {
    return this.request("DeleteRiskDnsPolicy", req, cb)
  }

  /**
   * 导出漏洞信息，包括影响主机列表，组件信息
   */
  async ExportVulInfo(
    req: ExportVulInfoRequest,
    cb?: (error: string, rep: ExportVulInfoResponse) => void
  ): Promise<ExportVulInfoResponse> {
    return this.request("ExportVulInfo", req, cb)
  }

  /**
   * 导出资产管理数据库列表
   */
  async ExportAssetDatabaseList(
    req: ExportAssetDatabaseListRequest,
    cb?: (error: string, rep: ExportAssetDatabaseListResponse) => void
  ): Promise<ExportAssetDatabaseListResponse> {
    return this.request("ExportAssetDatabaseList", req, cb)
  }

  /**
   * 导出核心文件监控规则
   */
  async ExportFileTamperRules(
    req: ExportFileTamperRulesRequest,
    cb?: (error: string, rep: ExportFileTamperRulesResponse) => void
  ): Promise<ExportFileTamperRulesResponse> {
    return this.request("ExportFileTamperRules", req, cb)
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
   * 大屏可视化主机安全防护引擎介绍
   */
  async DescribeScreenProtectionCnt(
    req?: DescribeScreenProtectionCntRequest,
    cb?: (error: string, rep: DescribeScreenProtectionCntResponse) => void
  ): Promise<DescribeScreenProtectionCntResponse> {
    return this.request("DescribeScreenProtectionCnt", req, cb)
  }

  /**
   * 新增或修改高危命令策略
   */
  async ModifyBashPolicy(
    req: ModifyBashPolicyRequest,
    cb?: (error: string, rep: ModifyBashPolicyResponse) => void
  ): Promise<ModifyBashPolicyResponse> {
    return this.request("ModifyBashPolicy", req, cb)
  }

  /**
   * 查询安全通知信息
   */
  async DescribeSafeInfo(
    req?: DescribeSafeInfoRequest,
    cb?: (error: string, rep: DescribeSafeInfoResponse) => void
  ): Promise<DescribeSafeInfoResponse> {
    return this.request("DescribeSafeInfo", req, cb)
  }

  /**
   * 导出Web站点列表
   */
  async ExportAssetWebLocationList(
    req: ExportAssetWebLocationListRequest,
    cb?: (error: string, rep: ExportAssetWebLocationListResponse) => void
  ): Promise<ExportAssetWebLocationListResponse> {
    return this.request("ExportAssetWebLocationList", req, cb)
  }

  /**
   * 查询主机快照备份列表
   */
  async DescribeRansomDefenseBackupList(
    req: DescribeRansomDefenseBackupListRequest,
    cb?: (error: string, rep: DescribeRansomDefenseBackupListResponse) => void
  ): Promise<DescribeRansomDefenseBackupListResponse> {
    return this.request("DescribeRansomDefenseBackupList", req, cb)
  }

  /**
   * 获取基线检测概览
   */
  async DescribeBaselineDetectOverview(
    req: DescribeBaselineDetectOverviewRequest,
    cb?: (error: string, rep: DescribeBaselineDetectOverviewResponse) => void
  ): Promise<DescribeBaselineDetectOverviewResponse> {
    return this.request("DescribeBaselineDetectOverview", req, cb)
  }

  /**
   * 获取基线检测项的列表
   */
  async DescribeBaselineItemDetectList(
    req: DescribeBaselineItemDetectListRequest,
    cb?: (error: string, rep: DescribeBaselineItemDetectListResponse) => void
  ): Promise<DescribeBaselineItemDetectListResponse> {
    return this.request("DescribeBaselineItemDetectList", req, cb)
  }

  /**
   * 本接口 (DescribeMachinesSimple) 用于获取主机列表。
   */
  async DescribeMachinesSimple(
    req: DescribeMachinesSimpleRequest,
    cb?: (error: string, rep: DescribeMachinesSimpleResponse) => void
  ): Promise<DescribeMachinesSimpleResponse> {
    return this.request("DescribeMachinesSimple", req, cb)
  }

  /**
   * 获取策略详情
   */
  async DescribeRansomDefenseStrategyDetail(
    req: DescribeRansomDefenseStrategyDetailRequest,
    cb?: (error: string, rep: DescribeRansomDefenseStrategyDetailResponse) => void
  ): Promise<DescribeRansomDefenseStrategyDetailResponse> {
    return this.request("DescribeRansomDefenseStrategyDetail", req, cb)
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
   * 获取阻断地域
   */
  async DescribeBanRegions(
    req: DescribeBanRegionsRequest,
    cb?: (error: string, rep: DescribeBanRegionsResponse) => void
  ): Promise<DescribeBanRegionsResponse> {
    return this.request("DescribeBanRegions", req, cb)
  }

  /**
   * 删除恶意请求白名单
   */
  async DeleteMaliciousRequestWhiteList(
    req: DeleteMaliciousRequestWhiteListRequest,
    cb?: (error: string, rep: DeleteMaliciousRequestWhiteListResponse) => void
  ): Promise<DeleteMaliciousRequestWhiteListResponse> {
    return this.request("DeleteMaliciousRequestWhiteList", req, cb)
  }

  /**
   * 添加阻断白名单列表
   */
  async CreateBanWhiteList(
    req: CreateBanWhiteListRequest,
    cb?: (error: string, rep: CreateBanWhiteListResponse) => void
  ): Promise<CreateBanWhiteListResponse> {
    return this.request("CreateBanWhiteList", req, cb)
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
   * 用于查询用户自定义配置
   */
  async DescribeUsersConfig(
    req: DescribeUsersConfigRequest,
    cb?: (error: string, rep: DescribeUsersConfigResponse) => void
  ): Promise<DescribeUsersConfigResponse> {
    return this.request("DescribeUsersConfig", req, cb)
  }

  /**
   * 修改日志投递状态信息
   */
  async ModifyLogKafkaState(
    req: ModifyLogKafkaStateRequest,
    cb?: (error: string, rep: ModifyLogKafkaStateResponse) => void
  ): Promise<ModifyLogKafkaStateResponse> {
    return this.request("ModifyLogKafkaState", req, cb)
  }

  /**
   * 导出java内存马事件列表
   */
  async ExportJavaMemShells(
    req: ExportJavaMemShellsRequest,
    cb?: (error: string, rep: ExportJavaMemShellsResponse) => void
  ): Promise<ExportJavaMemShellsResponse> {
    return this.request("ExportJavaMemShells", req, cb)
  }

  /**
   * 获取基线弱口令列表
   */
  async DescribeBaselineWeakPasswordList(
    req: DescribeBaselineWeakPasswordListRequest,
    cb?: (error: string, rep: DescribeBaselineWeakPasswordListResponse) => void
  ): Promise<DescribeBaselineWeakPasswordListResponse> {
    return this.request("DescribeBaselineWeakPasswordList", req, cb)
  }

  /**
   * 查询推荐购买防护核数
   */
  async DescribeRecommendedProtectCpu(
    req?: DescribeRecommendedProtectCpuRequest,
    cb?: (error: string, rep: DescribeRecommendedProtectCpuResponse) => void
  ): Promise<DescribeRecommendedProtectCpuResponse> {
    return this.request("DescribeRecommendedProtectCpu", req, cb)
  }

  /**
   * 获取基线检测项信息
   */
  async DescribeBaselineItemInfo(
    req: DescribeBaselineItemInfoRequest,
    cb?: (error: string, rep: DescribeBaselineItemInfoResponse) => void
  ): Promise<DescribeBaselineItemInfoResponse> {
    return this.request("DescribeBaselineItemInfo", req, cb)
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
   * 导出网络攻击事件
   */
  async ExportAttackEvents(
    req: ExportAttackEventsRequest,
    cb?: (error: string, rep: ExportAttackEventsResponse) => void
  ): Promise<ExportAttackEventsResponse> {
    return this.request("ExportAttackEvents", req, cb)
  }

  /**
   * 获取基线修复列表
   */
  async DescribeBaselineFixList(
    req: DescribeBaselineFixListRequest,
    cb?: (error: string, rep: DescribeBaselineFixListResponse) => void
  ): Promise<DescribeBaselineFixListResponse> {
    return this.request("DescribeBaselineFixList", req, cb)
  }

  /**
   * 查询告警机器范围配置
   */
  async DescribeWarningHostConfig(
    req: DescribeWarningHostConfigRequest,
    cb?: (error: string, rep: DescribeWarningHostConfigResponse) => void
  ): Promise<DescribeWarningHostConfigResponse> {
    return this.request("DescribeWarningHostConfig", req, cb)
  }

  /**
   * 修改机器清理配置
   */
  async ModifyMachineAutoClearConfig(
    req: ModifyMachineAutoClearConfigRequest,
    cb?: (error: string, rep: ModifyMachineAutoClearConfigResponse) => void
  ): Promise<ModifyMachineAutoClearConfigResponse> {
    return this.request("ModifyMachineAutoClearConfig", req, cb)
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
   * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
   */
  async DescribeWebPageServiceInfo(
    req?: DescribeWebPageServiceInfoRequest,
    cb?: (error: string, rep: DescribeWebPageServiceInfoResponse) => void
  ): Promise<DescribeWebPageServiceInfoResponse> {
    return this.request("DescribeWebPageServiceInfo", req, cb)
  }

  /**
   * 获取漏洞防御事件列表
   */
  async DescribeVulDefenceEvent(
    req: DescribeVulDefenceEventRequest,
    cb?: (error: string, rep: DescribeVulDefenceEventResponse) => void
  ): Promise<DescribeVulDefenceEventResponse> {
    return this.request("DescribeVulDefenceEvent", req, cb)
  }

  /**
   * 更改恶意请求策略状态
   */
  async ModifyRiskDnsPolicyStatus(
    req: ModifyRiskDnsPolicyStatusRequest,
    cb?: (error: string, rep: ModifyRiskDnsPolicyStatusResponse) => void
  ): Promise<ModifyRiskDnsPolicyStatusResponse> {
    return this.request("ModifyRiskDnsPolicyStatus", req, cb)
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
   * 修改企微机器人规则状态
   */
  async ModifyWebHookRuleStatus(
    req: ModifyWebHookRuleStatusRequest,
    cb?: (error: string, rep: ModifyWebHookRuleStatusResponse) => void
  ): Promise<ModifyWebHookRuleStatusResponse> {
    return this.request("ModifyWebHookRuleStatus", req, cb)
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
   * 查询某个监控规则的详情
   */
  async DescribeFileTamperRuleInfo(
    req: DescribeFileTamperRuleInfoRequest,
    cb?: (error: string, rep: DescribeFileTamperRuleInfoResponse) => void
  ): Promise<DescribeFileTamperRuleInfoResponse> {
    return this.request("DescribeFileTamperRuleInfo", req, cb)
  }

  /**
   * 基线检测与基线重新检测接口
   */
  async ScanBaseline(
    req: ScanBaselineRequest,
    cb?: (error: string, rep: ScanBaselineResponse) => void
  ): Promise<ScanBaselineResponse> {
    return this.request("ScanBaseline", req, cb)
  }

  /**
   * 修改日志存储配置
   */
  async ModifyLogStorageConfig(
    req: ModifyLogStorageConfigRequest,
    cb?: (error: string, rep: ModifyLogStorageConfigResponse) => void
  ): Promise<ModifyLogStorageConfigResponse> {
    return this.request("ModifyLogStorageConfig", req, cb)
  }

  /**
   * 编辑、新增核心文件监控规则
   */
  async ModifyFileTamperRule(
    req: ModifyFileTamperRuleRequest,
    cb?: (error: string, rep: ModifyFileTamperRuleResponse) => void
  ): Promise<ModifyFileTamperRuleResponse> {
    return this.request("ModifyFileTamperRule", req, cb)
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
   * 获取恶意请求事件列表
   */
  async DescribeRiskDnsEventList(
    req: DescribeRiskDnsEventListRequest,
    cb?: (error: string, rep: DescribeRiskDnsEventListResponse) => void
  ): Promise<DescribeRiskDnsEventListResponse> {
    return this.request("DescribeRiskDnsEventList", req, cb)
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
   * 查询告警策略
   */
  async DescribeWebHookPolicy(
    req: DescribeWebHookPolicyRequest,
    cb?: (error: string, rep: DescribeWebHookPolicyResponse) => void
  ): Promise<DescribeWebHookPolicyResponse> {
    return this.request("DescribeWebHookPolicy", req, cb)
  }

  /**
   * 修改防勒索事件状态
   */
  async ModifyRansomDefenseEventsStatus(
    req: ModifyRansomDefenseEventsStatusRequest,
    cb?: (error: string, rep: ModifyRansomDefenseEventsStatusResponse) => void
  ): Promise<ModifyRansomDefenseEventsStatusResponse> {
    return this.request("ModifyRansomDefenseEventsStatus", req, cb)
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
   * 按分页形式展示网络攻击检测事件列表
   */
  async DescribeAttackEvents(
    req: DescribeAttackEventsRequest,
    cb?: (error: string, rep: DescribeAttackEventsResponse) => void
  ): Promise<DescribeAttackEventsResponse> {
    return this.request("DescribeAttackEvents", req, cb)
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
   * 查询合并后白名单机器列表
   */
  async DescribeLoginWhiteHostList(
    req: DescribeLoginWhiteHostListRequest,
    cb?: (error: string, rep: DescribeLoginWhiteHostListResponse) => void
  ): Promise<DescribeLoginWhiteHostListResponse> {
    return this.request("DescribeLoginWhiteHostList", req, cb)
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
   * 根据策略id查询基线检测项TOP
   */
  async DescribeBaselineTop(
    req: DescribeBaselineTopRequest,
    cb?: (error: string, rep: DescribeBaselineTopResponse) => void
  ): Promise<DescribeBaselineTopResponse> {
    return this.request("DescribeBaselineTop", req, cb)
  }

  /**
   * 日志快速分析统计
   */
  async DescribeFastAnalysis(
    req: DescribeFastAnalysisRequest,
    cb?: (error: string, rep: DescribeFastAnalysisResponse) => void
  ): Promise<DescribeFastAnalysisResponse> {
    return this.request("DescribeFastAnalysis", req, cb)
  }

  /**
   * 查询主机安全授权试用报告(仅限控制台申领的)
   */
  async DescribeTrialReport(
    req?: DescribeTrialReportRequest,
    cb?: (error: string, rep: DescribeTrialReportResponse) => void
  ): Promise<DescribeTrialReportResponse> {
    return this.request("DescribeTrialReport", req, cb)
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
   * 导出核心文件事件
   */
  async ExportFileTamperEvents(
    req: ExportFileTamperEventsRequest,
    cb?: (error: string, rep: ExportFileTamperEventsResponse) => void
  ): Promise<ExportFileTamperEventsResponse> {
    return this.request("ExportFileTamperEvents", req, cb)
  }

  /**
   * 批量添加异地登录白名单
   */
  async AddLoginWhiteLists(
    req: AddLoginWhiteListsRequest,
    cb?: (error: string, rep: AddLoginWhiteListsResponse) => void
  ): Promise<AddLoginWhiteListsResponse> {
    return this.request("AddLoginWhiteLists", req, cb)
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
   * 查询恶意请求详情
   */
  async DescribeRiskDnsInfo(
    req: DescribeRiskDnsInfoRequest,
    cb?: (error: string, rep: DescribeRiskDnsInfoResponse) => void
  ): Promise<DescribeRiskDnsInfoResponse> {
    return this.request("DescribeRiskDnsInfo", req, cb)
  }

  /**
   * 导出防勒索事件列表
   */
  async ExportRansomDefenseEventsList(
    req: ExportRansomDefenseEventsListRequest,
    cb?: (error: string, rep: ExportRansomDefenseEventsListResponse) => void
  ): Promise<ExportRansomDefenseEventsListResponse> {
    return this.request("ExportRansomDefenseEventsList", req, cb)
  }

  /**
   * 新增或修改企微机器人规则
   */
  async ModifyWebHookRule(
    req: ModifyWebHookRuleRequest,
    cb?: (error: string, rep: ModifyWebHookRuleResponse) => void
  ): Promise<ModifyWebHookRuleResponse> {
    return this.request("ModifyWebHookRule", req, cb)
  }

  /**
   * 获取当前异常插件数
   */
  async DescribeVulDefencePluginExceptionCount(
    req?: DescribeVulDefencePluginExceptionCountRequest,
    cb?: (error: string, rep: DescribeVulDefencePluginExceptionCountResponse) => void
  ): Promise<DescribeVulDefencePluginExceptionCountResponse> {
    return this.request("DescribeVulDefencePluginExceptionCount", req, cb)
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
   * 查询应用列表
   */
  async DescribeAssetAppList(
    req: DescribeAssetAppListRequest,
    cb?: (error: string, rep: DescribeAssetAppListResponse) => void
  ): Promise<DescribeAssetAppListResponse> {
    return this.request("DescribeAssetAppList", req, cb)
  }

  /**
   * 获取kafka投递信息
   */
  async DescribeLogKafkaDeliverInfo(
    req?: DescribeLogKafkaDeliverInfoRequest,
    cb?: (error: string, rep: DescribeLogKafkaDeliverInfoResponse) => void
  ): Promise<DescribeLogKafkaDeliverInfoResponse> {
    return this.request("DescribeLogKafkaDeliverInfo", req, cb)
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
   * 删除企微机器人规则
   */
  async DeleteWebHookRule(
    req: DeleteWebHookRuleRequest,
    cb?: (error: string, rep: DeleteWebHookRuleResponse) => void
  ): Promise<DeleteWebHookRuleResponse> {
    return this.request("DeleteWebHookRule", req, cb)
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
   * 导出已忽略基线检测项信息
   */
  async ExportIgnoreBaselineRule(
    req: ExportIgnoreBaselineRuleRequest,
    cb?: (error: string, rep: ExportIgnoreBaselineRuleResponse) => void
  ): Promise<ExportIgnoreBaselineRuleResponse> {
    return this.request("ExportIgnoreBaselineRule", req, cb)
  }

  /**
   * 本地提权信息详情
   */
  async DescribePrivilegeEventInfo(
    req: DescribePrivilegeEventInfoRequest,
    cb?: (error: string, rep: DescribePrivilegeEventInfoResponse) => void
  ): Promise<DescribePrivilegeEventInfoResponse> {
    return this.request("DescribePrivilegeEventInfo", req, cb)
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
   * 查询基线默认策略列表信息
   */
  async DescribeBaselineDefaultStrategyList(
    req?: DescribeBaselineDefaultStrategyListRequest,
    cb?: (error: string, rep: DescribeBaselineDefaultStrategyListResponse) => void
  ): Promise<DescribeBaselineDefaultStrategyListResponse> {
    return this.request("DescribeBaselineDefaultStrategyList", req, cb)
  }

  /**
   * 提交漏洞修护
   */
  async CreateVulFix(
    req: CreateVulFixRequest,
    cb?: (error: string, rep: CreateVulFixResponse) => void
  ): Promise<CreateVulFixResponse> {
    return this.request("CreateVulFix", req, cb)
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
   * 新增或修改本地提权规则（支持多服务器选择）
   */
  async EditPrivilegeRules(
    req: EditPrivilegeRulesRequest,
    cb?: (error: string, rep: EditPrivilegeRulesResponse) => void
  ): Promise<EditPrivilegeRulesResponse> {
    return this.request("EditPrivilegeRules", req, cb)
  }

  /**
   * 获取异常进程列表
   */
  async DescribeRiskProcessEvents(
    req: DescribeRiskProcessEventsRequest,
    cb?: (error: string, rep: DescribeRiskProcessEventsResponse) => void
  ): Promise<DescribeRiskProcessEventsResponse> {
    return this.request("DescribeRiskProcessEvents", req, cb)
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
   * 根据事件表名和id查询告警事件详情
   */
  async DescribeEventByTable(
    req: DescribeEventByTableRequest,
    cb?: (error: string, rep: DescribeEventByTableResponse) => void
  ): Promise<DescribeEventByTableResponse> {
    return this.request("DescribeEventByTable", req, cb)
  }

  /**
   * 对授权管理-订单列表内已过期的订单进行删除.(删除后的订单不在统计范畴内)
   */
  async DeleteLicenseRecord(
    req: DeleteLicenseRecordRequest,
    cb?: (error: string, rep: DeleteLicenseRecordResponse) => void
  ): Promise<DeleteLicenseRecordResponse> {
    return this.request("DeleteLicenseRecord", req, cb)
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
   * 获取所有数据库数量
   */
  async DescribeAssetDatabaseCount(
    req: DescribeAssetDatabaseCountRequest,
    cb?: (error: string, rep: DescribeAssetDatabaseCountResponse) => void
  ): Promise<DescribeAssetDatabaseCountResponse> {
    return this.request("DescribeAssetDatabaseCount", req, cb)
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
   * 获取日志直方图信息
   */
  async DescribeLogHistogram(
    req: DescribeLogHistogramRequest,
    cb?: (error: string, rep: DescribeLogHistogramResponse) => void
  ): Promise<DescribeLogHistogramResponse> {
    return this.request("DescribeLogHistogram", req, cb)
  }

  /**
   * 查询主机相关核心文件监控规则列表
   */
  async DescribeMachineFileTamperRules(
    req: DescribeMachineFileTamperRulesRequest,
    cb?: (error: string, rep: DescribeMachineFileTamperRulesResponse) => void
  ): Promise<DescribeMachineFileTamperRulesResponse> {
    return this.request("DescribeMachineFileTamperRules", req, cb)
  }

  /**
   * 编辑《主机安全-按量计费》授权订单
   */
  async ModifyLicenseOrder(
    req: ModifyLicenseOrderRequest,
    cb?: (error: string, rep: ModifyLicenseOrderResponse) => void
  ): Promise<ModifyLicenseOrderResponse> {
    return this.request("ModifyLicenseOrder", req, cb)
  }

  /**
   * 获取公网接入代理安装命令
   */
  async DescribePublicProxyInstallCommand(
    req: DescribePublicProxyInstallCommandRequest,
    cb?: (error: string, rep: DescribePublicProxyInstallCommandResponse) => void
  ): Promise<DescribePublicProxyInstallCommandResponse> {
    return this.request("DescribePublicProxyInstallCommand", req, cb)
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
   * 导出账号列表
   */
  async ExportAssetUserList(
    req: ExportAssetUserListRequest,
    cb?: (error: string, rep: ExportAssetUserListResponse) => void
  ): Promise<ExportAssetUserListResponse> {
    return this.request("ExportAssetUserList", req, cb)
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
   * 获取登录审计列表
   */
  async DescribeHostLoginList(
    req: DescribeHostLoginListRequest,
    cb?: (error: string, rep: DescribeHostLoginListResponse) => void
  ): Promise<DescribeHostLoginListResponse> {
    return this.request("DescribeHostLoginList", req, cb)
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
   * 取消漏洞忽略
   */
  async CancelIgnoreVul(
    req: CancelIgnoreVulRequest,
    cb?: (error: string, rep: CancelIgnoreVulResponse) => void
  ): Promise<CancelIgnoreVulResponse> {
    return this.request("CancelIgnoreVul", req, cb)
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
   * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
   */
  async DescribeOpenPortStatistics(
    req: DescribeOpenPortStatisticsRequest,
    cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void
  ): Promise<DescribeOpenPortStatisticsResponse> {
    return this.request("DescribeOpenPortStatistics", req, cb)
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
   * 获取专线agent安装命令，包含token
   */
  async DescribeDirectConnectInstallCommand(
    req: DescribeDirectConnectInstallCommandRequest,
    cb?: (error: string, rep: DescribeDirectConnectInstallCommandResponse) => void
  ): Promise<DescribeDirectConnectInstallCommandResponse> {
    return this.request("DescribeDirectConnectInstallCommand", req, cb)
  }

  /**
   * 获取企微机器人规则列表
   */
  async DescribeWebHookRules(
    req: DescribeWebHookRulesRequest,
    cb?: (error: string, rep: DescribeWebHookRulesResponse) => void
  ): Promise<DescribeWebHookRulesResponse> {
    return this.request("DescribeWebHookRules", req, cb)
  }

  /**
   * 获取基线策略列表
   */
  async DescribeBaselinePolicyList(
    req: DescribeBaselinePolicyListRequest,
    cb?: (error: string, rep: DescribeBaselinePolicyListResponse) => void
  ): Promise<DescribeBaselinePolicyListResponse> {
    return this.request("DescribeBaselinePolicyList", req, cb)
  }

  /**
   * 获取所有Web应用数量
   */
  async DescribeAssetWebAppCount(
    req: DescribeAssetWebAppCountRequest,
    cb?: (error: string, rep: DescribeAssetWebAppCountResponse) => void
  ): Promise<DescribeAssetWebAppCountResponse> {
    return this.request("DescribeAssetWebAppCount", req, cb)
  }

  /**
   * 修改指定日志类别投递配置、开关
   */
  async ModifyLogKafkaDeliverType(
    req: ModifyLogKafkaDeliverTypeRequest,
    cb?: (error: string, rep: ModifyLogKafkaDeliverTypeResponse) => void
  ): Promise<ModifyLogKafkaDeliverTypeResponse> {
    return this.request("ModifyLogKafkaDeliverType", req, cb)
  }

  /**
   * 查询高危命令事件详情
   */
  async DescribeBashEventsInfo(
    req: DescribeBashEventsInfoRequest,
    cb?: (error: string, rep: DescribeBashEventsInfoResponse) => void
  ): Promise<DescribeBashEventsInfoResponse> {
    return this.request("DescribeBashEventsInfo", req, cb)
  }

  /**
   * 查询告警点id列表
   */
  async DescribeAlarmVertexId(
    req: DescribeAlarmVertexIdRequest,
    cb?: (error: string, rep: DescribeAlarmVertexIdResponse) => void
  ): Promise<DescribeAlarmVertexIdResponse> {
    return this.request("DescribeAlarmVertexId", req, cb)
  }

  /**
   * CveId查询漏洞详情
   */
  async DescribeVulCveIdInfo(
    req: DescribeVulCveIdInfoRequest,
    cb?: (error: string, rep: DescribeVulCveIdInfoResponse) => void
  ): Promise<DescribeVulCveIdInfoResponse> {
    return this.request("DescribeVulCveIdInfo", req, cb)
  }

  /**
   * 导出主机快照备份列表
   */
  async ExportRansomDefenseBackupList(
    req: ExportRansomDefenseBackupListRequest,
    cb?: (error: string, rep: ExportRansomDefenseBackupListResponse) => void
  ): Promise<ExportRansomDefenseBackupListResponse> {
    return this.request("ExportRansomDefenseBackupList", req, cb)
  }

  /**
   * 网络攻击数据统计
   */
  async DescribeAttackStatistics(
    req?: DescribeAttackStatisticsRequest,
    cb?: (error: string, rep: DescribeAttackStatisticsResponse) => void
  ): Promise<DescribeAttackStatisticsResponse> {
    return this.request("DescribeAttackStatistics", req, cb)
  }

  /**
   * 获取主机账号Key列表
   */
  async DescribeAssetUserKeyList(
    req: DescribeAssetUserKeyListRequest,
    cb?: (error: string, rep: DescribeAssetUserKeyListResponse) => void
  ): Promise<DescribeAssetUserKeyListResponse> {
    return this.request("DescribeAssetUserKeyList", req, cb)
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
   * 编辑木马白名单
   */
  async ModifyMalwareWhiteList(
    req: ModifyMalwareWhiteListRequest,
    cb?: (error: string, rep: ModifyMalwareWhiteListResponse) => void
  ): Promise<ModifyMalwareWhiteListResponse> {
    return this.request("ModifyMalwareWhiteList", req, cb)
  }

  /**
   * 获取企微机器人规则详情
   */
  async DescribeWebHookRule(
    req: DescribeWebHookRuleRequest,
    cb?: (error: string, rep: DescribeWebHookRuleResponse) => void
  ): Promise<DescribeWebHookRuleResponse> {
    return this.request("DescribeWebHookRule", req, cb)
  }

  /**
   * 修复失败时单独对某一个主机修复漏洞
   */
  async RetryVulFix(
    req: RetryVulFixRequest,
    cb?: (error: string, rep: RetryVulFixResponse) => void
  ): Promise<RetryVulFixResponse> {
    return this.request("RetryVulFix", req, cb)
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
   * 添加漏洞防御白名单
   */
  async ModifyRaspRules(
    req: ModifyRaspRulesRequest,
    cb?: (error: string, rep: ModifyRaspRulesResponse) => void
  ): Promise<ModifyRaspRulesResponse> {
    return this.request("ModifyRaspRules", req, cb)
  }

  /**
   * 快照创建失败时可以重试创建快照并且自动进行漏洞修复
   */
  async RetryCreateSnapshot(
    req: RetryCreateSnapshotRequest,
    cb?: (error: string, rep: RetryCreateSnapshotResponse) => void
  ): Promise<RetryCreateSnapshotResponse> {
    return this.request("RetryCreateSnapshot", req, cb)
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
   * 漏洞影响组件列表
   */
  async DescribeVulEffectModules(
    req: DescribeVulEffectModulesRequest,
    cb?: (error: string, rep: DescribeVulEffectModulesResponse) => void
  ): Promise<DescribeVulEffectModulesResponse> {
    return this.request("DescribeVulEffectModules", req, cb)
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
   * 获取安全概览相关事件统计数据接口
   */
  async DescribeSecurityEventsCnt(
    req?: DescribeSecurityEventsCntRequest,
    cb?: (error: string, rep: DescribeSecurityEventsCntResponse) => void
  ): Promise<DescribeSecurityEventsCntResponse> {
    return this.request("DescribeSecurityEventsCnt", req, cb)
  }

  /**
   * 删除木马白名单
   */
  async DeleteMalwareWhiteList(
    req: DeleteMalwareWhiteListRequest,
    cb?: (error: string, rep: DeleteMalwareWhiteListResponse) => void
  ): Promise<DeleteMalwareWhiteListResponse> {
    return this.request("DeleteMalwareWhiteList", req, cb)
  }

  /**
   * 同步基线检测进度概要
   */
  async SyncBaselineDetectSummary(
    req: SyncBaselineDetectSummaryRequest,
    cb?: (error: string, rep: SyncBaselineDetectSummaryResponse) => void
  ): Promise<SyncBaselineDetectSummaryResponse> {
    return this.request("SyncBaselineDetectSummary", req, cb)
  }

  /**
   * 查询授权绑定任务的进度
   */
  async DescribeLicenseBindSchedule(
    req: DescribeLicenseBindScheduleRequest,
    cb?: (error: string, rep: DescribeLicenseBindScheduleResponse) => void
  ): Promise<DescribeLicenseBindScheduleResponse> {
    return this.request("DescribeLicenseBindSchedule", req, cb)
  }

  /**
   * 编辑网络攻击白名单
   */
  async ModifyNetAttackWhiteList(
    req: ModifyNetAttackWhiteListRequest,
    cb?: (error: string, rep: ModifyNetAttackWhiteListResponse) => void
  ): Promise<ModifyNetAttackWhiteListResponse> {
    return this.request("ModifyNetAttackWhiteList", req, cb)
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
   * 查询基线列表信息
   */
  async DescribeBaselineList(
    req: DescribeBaselineListRequest,
    cb?: (error: string, rep: DescribeBaselineListResponse) => void
  ): Promise<DescribeBaselineListResponse> {
    return this.request("DescribeBaselineList", req, cb)
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
   * 获取服务器风险top列表
   */
  async DescribeVulHostTop(
    req: DescribeVulHostTopRequest,
    cb?: (error: string, rep: DescribeVulHostTopResponse) => void
  ): Promise<DescribeVulHostTopResponse> {
    return this.request("DescribeVulHostTop", req, cb)
  }

  /**
   * 对订单属性编辑
   */
  async ModifyOrderAttribute(
    req: ModifyOrderAttributeRequest,
    cb?: (error: string, rep: ModifyOrderAttributeResponse) => void
  ): Promise<ModifyOrderAttributeResponse> {
    return this.request("ModifyOrderAttribute", req, cb)
  }

  /**
   * 获取用户当前灰度配置
   */
  async DescribeABTestConfig(
    req: DescribeABTestConfigRequest,
    cb?: (error: string, rep: DescribeABTestConfigResponse) => void
  ): Promise<DescribeABTestConfigResponse> {
    return this.request("DescribeABTestConfig", req, cb)
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
   * 查询资产管理内核模块列表
   */
  async DescribeAssetCoreModuleList(
    req: DescribeAssetCoreModuleListRequest,
    cb?: (error: string, rep: DescribeAssetCoreModuleListResponse) => void
  ): Promise<DescribeAssetCoreModuleListResponse> {
    return this.request("DescribeAssetCoreModuleList", req, cb)
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
   * 添加恶意请求白名单
   */
  async CreateMaliciousRequestWhiteList(
    req: CreateMaliciousRequestWhiteListRequest,
    cb?: (error: string, rep: CreateMaliciousRequestWhiteListResponse) => void
  ): Promise<CreateMaliciousRequestWhiteListResponse> {
    return this.request("CreateMaliciousRequestWhiteList", req, cb)
  }

  /**
   * 获取所有Web服务数量
   */
  async DescribeAssetWebServiceCount(
    req: DescribeAssetWebServiceCountRequest,
    cb?: (error: string, rep: DescribeAssetWebServiceCountResponse) => void
  ): Promise<DescribeAssetWebServiceCountResponse> {
    return this.request("DescribeAssetWebServiceCount", req, cb)
  }

  /**
   * 更改或新增弱口令
   */
  async ModifyBaselineWeakPassword(
    req: ModifyBaselineWeakPasswordRequest,
    cb?: (error: string, rep: ModifyBaselineWeakPasswordResponse) => void
  ): Promise<ModifyBaselineWeakPasswordResponse> {
    return this.request("ModifyBaselineWeakPassword", req, cb)
  }

  /**
   * 大屏可视化防趋势接口
   */
  async DescribeScreenDefenseTrends(
    req: DescribeScreenDefenseTrendsRequest,
    cb?: (error: string, rep: DescribeScreenDefenseTrendsResponse) => void
  ): Promise<DescribeScreenDefenseTrendsResponse> {
    return this.request("DescribeScreenDefenseTrends", req, cb)
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
   * 根据策略id修改策略可用状态
   */
  async ChangeStrategyEnableStatus(
    req: ChangeStrategyEnableStatusRequest,
    cb?: (error: string, rep: ChangeStrategyEnableStatusResponse) => void
  ): Promise<ChangeStrategyEnableStatusResponse> {
    return this.request("ChangeStrategyEnableStatus", req, cb)
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
   * 专家服务-专家服务订单列表
   */
  async DescribeExpertServiceOrderList(
    req: DescribeExpertServiceOrderListRequest,
    cb?: (error: string, rep: DescribeExpertServiceOrderListResponse) => void
  ): Promise<DescribeExpertServiceOrderListResponse> {
    return this.request("DescribeExpertServiceOrderList", req, cb)
  }

  /**
   * 检查日志投递kafka连通性
   */
  async CheckLogKafkaConnectionState(
    req: CheckLogKafkaConnectionStateRequest,
    cb?: (error: string, rep: CheckLogKafkaConnectionStateResponse) => void
  ): Promise<CheckLogKafkaConnectionStateResponse> {
    return this.request("CheckLogKafkaConnectionState", req, cb)
  }

  /**
   * 获取各主机漏洞防御插件状态
   */
  async DescribeVulDefencePluginStatus(
    req: DescribeVulDefencePluginStatusRequest,
    cb?: (error: string, rep: DescribeVulDefencePluginStatusResponse) => void
  ): Promise<DescribeVulDefencePluginStatusResponse> {
    return this.request("DescribeVulDefencePluginStatus", req, cb)
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
   * 获取单台主机漏洞防御插件信息
   */
  async DescribeVulDefencePluginDetail(
    req: DescribeVulDefencePluginDetailRequest,
    cb?: (error: string, rep: DescribeVulDefencePluginDetailResponse) => void
  ): Promise<DescribeVulDefencePluginDetailResponse> {
    return this.request("DescribeVulDefencePluginDetail", req, cb)
  }

  /**
   * 更改基线检测规则
   */
  async ModifyBaselineRule(
    req: ModifyBaselineRuleRequest,
    cb?: (error: string, rep: ModifyBaselineRuleResponse) => void
  ): Promise<ModifyBaselineRuleResponse> {
    return this.request("ModifyBaselineRule", req, cb)
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
   * 修改漏洞防御事件状态（修复漏洞通过其他接口实现）
   */
  async ModifyVulDefenceEventStatus(
    req: ModifyVulDefenceEventStatusRequest,
    cb?: (error: string, rep: ModifyVulDefenceEventStatusResponse) => void
  ): Promise<ModifyVulDefenceEventStatusResponse> {
    return this.request("ModifyVulDefenceEventStatus", req, cb)
  }

  /**
   * 获取本地存储数据
   */
  async GetLocalStorageItem(
    req: GetLocalStorageItemRequest,
    cb?: (error: string, rep: GetLocalStorageItemResponse) => void
  ): Promise<GetLocalStorageItemResponse> {
    return this.request("GetLocalStorageItem", req, cb)
  }

  /**
   * 导出备份详情列表
   */
  async ExportRansomDefenseMachineList(
    req: ExportRansomDefenseMachineListRequest,
    cb?: (error: string, rep: ExportRansomDefenseMachineListResponse) => void
  ): Promise<ExportRansomDefenseMachineListResponse> {
    return this.request("ExportRansomDefenseMachineList", req, cb)
  }

  /**
   * 查询防勒索事件列表
   */
  async DescribeRansomDefenseEventsList(
    req: DescribeRansomDefenseEventsListRequest,
    cb?: (error: string, rep: DescribeRansomDefenseEventsListResponse) => void
  ): Promise<DescribeRansomDefenseEventsListResponse> {
    return this.request("DescribeRansomDefenseEventsList", req, cb)
  }

  /**
   * 导出资产管理进程列表
   */
  async ExportAssetProcessInfoList(
    req: ExportAssetProcessInfoListRequest,
    cb?: (error: string, rep: ExportAssetProcessInfoListResponse) => void
  ): Promise<ExportAssetProcessInfoListResponse> {
    return this.request("ExportAssetProcessInfoList", req, cb)
  }

  /**
   * 获取主机绑定策略列表
   */
  async DescribeRansomDefenseMachineStrategyInfo(
    req: DescribeRansomDefenseMachineStrategyInfoRequest,
    cb?: (error: string, rep: DescribeRansomDefenseMachineStrategyInfoResponse) => void
  ): Promise<DescribeRansomDefenseMachineStrategyInfoResponse> {
    return this.request("DescribeRansomDefenseMachineStrategyInfo", req, cb)
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
   * 导出漏洞检测报告。
   */
  async ExportVulDetectionReport(
    req: ExportVulDetectionReportRequest,
    cb?: (error: string, rep: ExportVulDetectionReportResponse) => void
  ): Promise<ExportVulDetectionReportResponse> {
    return this.request("ExportVulDetectionReport", req, cb)
  }

  /**
   * 修改告警机器范围配置
   */
  async ModifyWarningHostConfig(
    req: ModifyWarningHostConfigRequest,
    cb?: (error: string, rep: ModifyWarningHostConfigResponse) => void
  ): Promise<ModifyWarningHostConfigResponse> {
    return this.request("ModifyWarningHostConfig", req, cb)
  }

  /**
   * 获取用户所有授权订单信息
   */
  async DescribeLicenseList(
    req: DescribeLicenseListRequest,
    cb?: (error: string, rep: DescribeLicenseListResponse) => void
  ): Promise<DescribeLicenseListResponse> {
    return this.request("DescribeLicenseList", req, cb)
  }

  /**
   * 检测基线
   */
  async StartBaselineDetect(
    req: StartBaselineDetectRequest,
    cb?: (error: string, rep: StartBaselineDetectResponse) => void
  ): Promise<StartBaselineDetectResponse> {
    return this.request("StartBaselineDetect", req, cb)
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
   * 删除基线规则
   */
  async DeleteBaselineRule(
    req: DeleteBaselineRuleRequest,
    cb?: (error: string, rep: DeleteBaselineRuleResponse) => void
  ): Promise<DeleteBaselineRuleResponse> {
    return this.request("DeleteBaselineRule", req, cb)
  }

  /**
   * 查询指定告警接收人的关联策略使用信息
   */
  async DescribeWebHookReceiverUsage(
    req: DescribeWebHookReceiverUsageRequest,
    cb?: (error: string, rep: DescribeWebHookReceiverUsageResponse) => void
  ): Promise<DescribeWebHookReceiverUsageResponse> {
    return this.request("DescribeWebHookReceiverUsage", req, cb)
  }

  /**
   * 更新恶意请求白名单
   */
  async ModifyMaliciousRequestWhiteList(
    req: ModifyMaliciousRequestWhiteListRequest,
    cb?: (error: string, rep: ModifyMaliciousRequestWhiteListResponse) => void
  ): Promise<ModifyMaliciousRequestWhiteListResponse> {
    return this.request("ModifyMaliciousRequestWhiteList", req, cb)
  }

  /**
   * 删除基线忽略规则
   */
  async DeleteBaselineRuleIgnore(
    req: DeleteBaselineRuleIgnoreRequest,
    cb?: (error: string, rep: DeleteBaselineRuleIgnoreResponse) => void
  ): Promise<DeleteBaselineRuleIgnoreResponse> {
    return this.request("DeleteBaselineRuleIgnore", req, cb)
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
   * 防勒索快照回滚
   */
  async RansomDefenseRollback(
    req: RansomDefenseRollbackRequest,
    cb?: (error: string, rep: RansomDefenseRollbackResponse) => void
  ): Promise<RansomDefenseRollbackResponse> {
    return this.request("RansomDefenseRollback", req, cb)
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
   * 安全播报列表页
   */
  async DescribeSecurityBroadcasts(
    req: DescribeSecurityBroadcastsRequest,
    cb?: (error: string, rep: DescribeSecurityBroadcastsResponse) => void
  ): Promise<DescribeSecurityBroadcastsResponse> {
    return this.request("DescribeSecurityBroadcasts", req, cb)
  }

  /**
   * 获取资产指纹类型列表
   */
  async DescribeAssetTypes(
    req?: DescribeAssetTypesRequest,
    cb?: (error: string, rep: DescribeAssetTypesResponse) => void
  ): Promise<DescribeAssetTypesResponse> {
    return this.request("DescribeAssetTypes", req, cb)
  }

  /**
   * 获取用户漏洞所有标签列表
   */
  async DescribeVulLabels(
    req?: DescribeVulLabelsRequest,
    cb?: (error: string, rep: DescribeVulLabelsResponse) => void
  ): Promise<DescribeVulLabelsResponse> {
    return this.request("DescribeVulLabels", req, cb)
  }

  /**
   * 停止基线检测
   */
  async StopBaselineDetect(
    req: StopBaselineDetectRequest,
    cb?: (error: string, rep: StopBaselineDetectResponse) => void
  ): Promise<StopBaselineDetectResponse> {
    return this.request("StopBaselineDetect", req, cb)
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
   * 获取主机磁盘分区列表
   */
  async DescribeAssetDiskList(
    req: DescribeAssetDiskListRequest,
    cb?: (error: string, rep: DescribeAssetDiskListResponse) => void
  ): Promise<DescribeAssetDiskListResponse> {
    return this.request("DescribeAssetDiskList", req, cb)
  }

  /**
     * 修改漏洞防御插件设置
1）新增主机自动加入，scope为1，quuids为空
2）全量旗舰版不自动加入，scope为0，quuids为当前quuid列表，
3）给定quuid列表，scope为0，quuids为用户选择quuid
     */
  async ModifyVulDefenceSetting(
    req: ModifyVulDefenceSettingRequest,
    cb?: (error: string, rep: ModifyVulDefenceSettingResponse) => void
  ): Promise<ModifyVulDefenceSettingResponse> {
    return this.request("ModifyVulDefenceSetting", req, cb)
  }

  /**
   * 导出漏洞防御事件
   */
  async ExportVulDefenceEvent(
    req: ExportVulDefenceEventRequest,
    cb?: (error: string, rep: ExportVulDefenceEventResponse) => void
  ): Promise<ExportVulDefenceEventResponse> {
    return this.request("ExportVulDefenceEvent", req, cb)
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
   * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
   */
  async DescribeScanState(
    req: DescribeScanStateRequest,
    cb?: (error: string, rep: DescribeScanStateResponse) => void
  ): Promise<DescribeScanStateResponse> {
    return this.request("DescribeScanState", req, cb)
  }

  /**
   * DeleteScanTask 该接口可以对指定类型的扫描任务进行停止扫描;
   */
  async DeleteScanTask(
    req: DeleteScanTaskRequest,
    cb?: (error: string, rep: DeleteScanTaskResponse) => void
  ): Promise<DeleteScanTaskResponse> {
    return this.request("DeleteScanTask", req, cb)
  }

  /**
   * 用于创建/修改用户自定义配置
   */
  async ModifyUsersConfig(
    req: ModifyUsersConfigRequest,
    cb?: (error: string, rep: ModifyUsersConfigResponse) => void
  ): Promise<ModifyUsersConfigResponse> {
    return this.request("ModifyUsersConfig", req, cb)
  }

  /**
   * 新增或修改告警策略
   */
  async ModifyWebHookPolicy(
    req: ModifyWebHookPolicyRequest,
    cb?: (error: string, rep: ModifyWebHookPolicyResponse) => void
  ): Promise<ModifyWebHookPolicyResponse> {
    return this.request("ModifyWebHookPolicy", req, cb)
  }

  /**
   * 删除全部java内存马事件
   */
  async DeleteAllJavaMemShells(
    req: DeleteAllJavaMemShellsRequest,
    cb?: (error: string, rep: DeleteAllJavaMemShellsResponse) => void
  ): Promise<DeleteAllJavaMemShellsResponse> {
    return this.request("DeleteAllJavaMemShells", req, cb)
  }

  /**
   * 获取基线项检测结果列表
   */
  async DescribeBaselineItemList(
    req: DescribeBaselineItemListRequest,
    cb?: (error: string, rep: DescribeBaselineItemListResponse) => void
  ): Promise<DescribeBaselineItemListResponse> {
    return this.request("DescribeBaselineItemList", req, cb)
  }

  /**
   * 获取高危命令策略列表
   */
  async DescribeBashPolicies(
    req: DescribeBashPoliciesRequest,
    cb?: (error: string, rep: DescribeBashPoliciesResponse) => void
  ): Promise<DescribeBashPoliciesResponse> {
    return this.request("DescribeBashPolicies", req, cb)
  }

  /**
   * 查询防勒索策略绑定机器列表
   */
  async DescribeRansomDefenseStrategyMachines(
    req: DescribeRansomDefenseStrategyMachinesRequest,
    cb?: (error: string, rep: DescribeRansomDefenseStrategyMachinesResponse) => void
  ): Promise<DescribeRansomDefenseStrategyMachinesResponse> {
    return this.request("DescribeRansomDefenseStrategyMachines", req, cb)
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
   * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
   */
  async DescribeVulCountByDates(
    req: DescribeVulCountByDatesRequest,
    cb?: (error: string, rep: DescribeVulCountByDatesResponse) => void
  ): Promise<DescribeVulCountByDatesResponse> {
    return this.request("DescribeVulCountByDates", req, cb)
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
   * 获取漏洞库列表
   */
  async DescribeVulStoreList(
    req: DescribeVulStoreListRequest,
    cb?: (error: string, rep: DescribeVulStoreListResponse) => void
  ): Promise<DescribeVulStoreListResponse> {
    return this.request("DescribeVulStoreList", req, cb)
  }

  /**
   * 获取告警点所在事件的所有节点信息
   */
  async DescribeAlarmIncidentNodes(
    req: DescribeAlarmIncidentNodesRequest,
    cb?: (error: string, rep: DescribeAlarmIncidentNodesResponse) => void
  ): Promise<DescribeAlarmIncidentNodesResponse> {
    return this.request("DescribeAlarmIncidentNodes", req, cb)
  }

  /**
   * 大屏可视化获取安全概览相关事件统计数据接口
   */
  async DescribeScreenEventsCnt(
    req: DescribeScreenEventsCntRequest,
    cb?: (error: string, rep: DescribeScreenEventsCntResponse) => void
  ): Promise<DescribeScreenEventsCntResponse> {
    return this.request("DescribeScreenEventsCnt", req, cb)
  }

  /**
   * 获取所有资源数量：主机、账号、端口、进程、软件、数据库、Web应用、Web框架、Web服务、Web站点
   */
  async DescribeAssetTotalCount(
    req?: DescribeAssetTotalCountRequest,
    cb?: (error: string, rep: DescribeAssetTotalCountResponse) => void
  ): Promise<DescribeAssetTotalCountResponse> {
    return this.request("DescribeAssetTotalCount", req, cb)
  }

  /**
   * 获取全网热点漏洞
   */
  async DescribeHotVulTop(
    req?: DescribeHotVulTopRequest,
    cb?: (error: string, rep: DescribeHotVulTopResponse) => void
  ): Promise<DescribeHotVulTopResponse> {
    return this.request("DescribeHotVulTop", req, cb)
  }

  /**
   * 删除基线弱口令
   */
  async DeleteBaselineWeakPassword(
    req: DeleteBaselineWeakPasswordRequest,
    cb?: (error: string, rep: DeleteBaselineWeakPasswordResponse) => void
  ): Promise<DeleteBaselineWeakPasswordResponse> {
    return this.request("DeleteBaselineWeakPassword", req, cb)
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
   * 导出资产管理系统安装包列表
   */
  async ExportAssetSystemPackageList(
    req: ExportAssetSystemPackageListRequest,
    cb?: (error: string, rep: ExportAssetSystemPackageListResponse) => void
  ): Promise<ExportAssetSystemPackageListResponse> {
    return this.request("ExportAssetSystemPackageList", req, cb)
  }

  /**
   * 编辑反弹Shell规则（支持多服务器选择）
   */
  async EditReverseShellRules(
    req: EditReverseShellRulesRequest,
    cb?: (error: string, rep: EditReverseShellRulesResponse) => void
  ): Promise<EditReverseShellRulesResponse> {
    return this.request("EditReverseShellRules", req, cb)
  }

  /**
   * 删除告警策略
   */
  async DeleteWebHookPolicy(
    req: DeleteWebHookPolicyRequest,
    cb?: (error: string, rep: DeleteWebHookPolicyResponse) => void
  ): Promise<DeleteWebHookPolicyResponse> {
    return this.request("DeleteWebHookPolicy", req, cb)
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
   * 入侵检测所有事件的状态，包括：文件查杀，异常登录，密码破解，高危命令，反弹shell，本地提取
   */
  async ModifyRiskEventsStatus(
    req: ModifyRiskEventsStatusRequest,
    cb?: (error: string, rep: ModifyRiskEventsStatusResponse) => void
  ): Promise<ModifyRiskEventsStatusResponse> {
    return this.request("ModifyRiskEventsStatus", req, cb)
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
   * 删除漏洞防御白名单
   */
  async DeleteRaspRules(
    req: DeleteRaspRulesRequest,
    cb?: (error: string, rep: DeleteRaspRulesResponse) => void
  ): Promise<DeleteRaspRulesResponse> {
    return this.request("DeleteRaspRules", req, cb)
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
   * 导出漏洞防御插件事件
   */
  async ExportVulDefencePluginEvent(
    req: ExportVulDefencePluginEventRequest,
    cb?: (error: string, rep: ExportVulDefencePluginEventResponse) => void
  ): Promise<ExportVulDefencePluginEventResponse> {
    return this.request("ExportVulDefencePluginEvent", req, cb)
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
   * 导出异常进程事件
   */
  async ExportRiskProcessEvents(
    req: ExportRiskProcessEventsRequest,
    cb?: (error: string, rep: ExportRiskProcessEventsResponse) => void
  ): Promise<ExportRiskProcessEventsResponse> {
    return this.request("ExportRiskProcessEvents", req, cb)
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

  /**
   * 获取木马不可隔离的主机
   */
  async DescribeCanNotSeparateMachine(
    req: DescribeCanNotSeparateMachineRequest,
    cb?: (error: string, rep: DescribeCanNotSeparateMachineResponse) => void
  ): Promise<DescribeCanNotSeparateMachineResponse> {
    return this.request("DescribeCanNotSeparateMachine", req, cb)
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
   * 导出资产管理环境变量列表
   */
  async ExportAssetEnvList(
    req: ExportAssetEnvListRequest,
    cb?: (error: string, rep: ExportAssetEnvListResponse) => void
  ): Promise<ExportAssetEnvListResponse> {
    return this.request("ExportAssetEnvList", req, cb)
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
   * 导出风险趋势
   */
  async ExportSecurityTrends(
    req: ExportSecurityTrendsRequest,
    cb?: (error: string, rep: ExportSecurityTrendsResponse) => void
  ): Promise<ExportSecurityTrendsResponse> {
    return this.request("ExportSecurityTrends", req, cb)
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
   * 核心文件规则状态更新，支持批量删除 关闭
   */
  async ModifyFileTamperRuleStatus(
    req: ModifyFileTamperRuleStatusRequest,
    cb?: (error: string, rep: ModifyFileTamperRuleStatusResponse) => void
  ): Promise<ModifyFileTamperRuleStatusResponse> {
    return this.request("ModifyFileTamperRuleStatus", req, cb)
  }

  /**
   * 修改阻断白名单列表
   */
  async ModifyBanWhiteList(
    req: ModifyBanWhiteListRequest,
    cb?: (error: string, rep: ModifyBanWhiteListResponse) => void
  ): Promise<ModifyBanWhiteListResponse> {
    return this.request("ModifyBanWhiteList", req, cb)
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
   * 获取基线服务器风险TOP5
   */
  async DescribeBaselineHostRiskTop(
    req: DescribeBaselineHostRiskTopRequest,
    cb?: (error: string, rep: DescribeBaselineHostRiskTopResponse) => void
  ): Promise<DescribeBaselineHostRiskTopResponse> {
    return this.request("DescribeBaselineHostRiskTop", req, cb)
  }

  /**
   * 导出恶意请求事件列表
   */
  async ExportRiskDnsEventList(
    req: ExportRiskDnsEventListRequest,
    cb?: (error: string, rep: ExportRiskDnsEventListResponse) => void
  ): Promise<ExportRiskDnsEventListResponse> {
    return this.request("ExportRiskDnsEventList", req, cb)
  }

  /**
   * 导出授权列表对应的绑定信息
   */
  async ExportLicenseDetail(
    req: ExportLicenseDetailRequest,
    cb?: (error: string, rep: ExportLicenseDetailResponse) => void
  ): Promise<ExportLicenseDetailResponse> {
    return this.request("ExportLicenseDetail", req, cb)
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
   * 网络攻击趋势数据
   */
  async DescribeAttackTrends(
    req: DescribeAttackTrendsRequest,
    cb?: (error: string, rep: DescribeAttackTrendsResponse) => void
  ): Promise<DescribeAttackTrendsResponse> {
    return this.request("DescribeAttackTrends", req, cb)
  }

  /**
   * 创建或修改防勒索策略
   */
  async CreateRansomDefenseStrategy(
    req: CreateRansomDefenseStrategyRequest,
    cb?: (error: string, rep: CreateRansomDefenseStrategyResponse) => void
  ): Promise<CreateRansomDefenseStrategyResponse> {
    return this.request("CreateRansomDefenseStrategy", req, cb)
  }

  /**
   * 大屏可视化紧急通知
   */
  async DescribeScreenEmergentMsg(
    req?: DescribeScreenEmergentMsgRequest,
    cb?: (error: string, rep: DescribeScreenEmergentMsgResponse) => void
  ): Promise<DescribeScreenEmergentMsgResponse> {
    return this.request("DescribeScreenEmergentMsg", req, cb)
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
   * 核心文件监控事件列表
   */
  async DescribeFileTamperEvents(
    req: DescribeFileTamperEventsRequest,
    cb?: (error: string, rep: DescribeFileTamperEventsResponse) => void
  ): Promise<DescribeFileTamperEventsResponse> {
    return this.request("DescribeFileTamperEvents", req, cb)
  }

  /**
   * 设置中心-授权管理 对某个授权批量绑定机器
   */
  async ModifyLicenseBinds(
    req: ModifyLicenseBindsRequest,
    cb?: (error: string, rep: ModifyLicenseBindsResponse) => void
  ): Promise<ModifyLicenseBindsResponse> {
    return this.request("ModifyLicenseBinds", req, cb)
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
   * 查询漏洞防御列表
   */
  async DescribeVulDefenceList(
    req: DescribeVulDefenceListRequest,
    cb?: (error: string, rep: DescribeVulDefenceListResponse) => void
  ): Promise<DescribeVulDefenceListResponse> {
    return this.request("DescribeVulDefenceList", req, cb)
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
   * 获取用户防勒索趋势
   */
  async DescribeRansomDefenseState(
    req?: DescribeRansomDefenseStateRequest,
    cb?: (error: string, rep: DescribeRansomDefenseStateResponse) => void
  ): Promise<DescribeRansomDefenseStateResponse> {
    return this.request("DescribeRansomDefenseState", req, cb)
  }

  /**
   * 导出恶意请求策略列表
   */
  async ExportRiskDnsPolicyList(
    req: ExportRiskDnsPolicyListRequest,
    cb?: (error: string, rep: ExportRiskDnsPolicyListResponse) => void
  ): Promise<ExportRiskDnsPolicyListResponse> {
    return this.request("ExportRiskDnsPolicyList", req, cb)
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
   * 新购授权自动绑定任务
   */
  async CreateBuyBindTask(
    req: CreateBuyBindTaskRequest,
    cb?: (error: string, rep: CreateBuyBindTaskResponse) => void
  ): Promise<CreateBuyBindTaskResponse> {
    return this.request("CreateBuyBindTask", req, cb)
  }

  /**
   * 查询日志
   */
  async SearchLog(
    req: SearchLogRequest,
    cb?: (error: string, rep: SearchLogResponse) => void
  ): Promise<SearchLogResponse> {
    return this.request("SearchLog", req, cb)
  }

  /**
   * 查询主机关联文件监控规则数量
   */
  async DescribeFileTamperRuleCount(
    req: DescribeFileTamperRuleCountRequest,
    cb?: (error: string, rep: DescribeFileTamperRuleCountResponse) => void
  ): Promise<DescribeFileTamperRuleCountResponse> {
    return this.request("DescribeFileTamperRuleCount", req, cb)
  }

  /**
   * 查询java内存马插件列表
   */
  async DescribeJavaMemShellPluginList(
    req: DescribeJavaMemShellPluginListRequest,
    cb?: (error: string, rep: DescribeJavaMemShellPluginListResponse) => void
  ): Promise<DescribeJavaMemShellPluginListResponse> {
    return this.request("DescribeJavaMemShellPluginList", req, cb)
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
   * 产品试用状态查询接口
   */
  async DescribeProductStatus(
    req?: DescribeProductStatusRequest,
    cb?: (error: string, rep: DescribeProductStatusResponse) => void
  ): Promise<DescribeProductStatusResponse> {
    return this.request("DescribeProductStatus", req, cb)
  }

  /**
   * 反弹shell信息详情
   */
  async DescribeReverseShellEventInfo(
    req: DescribeReverseShellEventInfoRequest,
    cb?: (error: string, rep: DescribeReverseShellEventInfoResponse) => void
  ): Promise<DescribeReverseShellEventInfoResponse> {
    return this.request("DescribeReverseShellEventInfo", req, cb)
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
   * 漏洞一键检测
   */
  async ScanVul(
    req: ScanVulRequest,
    cb?: (error: string, rep: ScanVulResponse) => void
  ): Promise<ScanVulResponse> {
    return this.request("ScanVul", req, cb)
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
   * 查看漏洞防御最大cpu限制
   */
  async DescribeRaspMaxCpu(
    req?: DescribeRaspMaxCpuRequest,
    cb?: (error: string, rep: DescribeRaspMaxCpuResponse) => void
  ): Promise<DescribeRaspMaxCpuResponse> {
    return this.request("DescribeRaspMaxCpu", req, cb)
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
   * 获取所有端口数量
   */
  async DescribeAssetPortCount(
    req: DescribeAssetPortCountRequest,
    cb?: (error: string, rep: DescribeAssetPortCountResponse) => void
  ): Promise<DescribeAssetPortCountResponse> {
    return this.request("DescribeAssetPortCount", req, cb)
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
   * 获取病毒库及POC的更新信息
   */
  async DescribeVdbAndPocInfo(
    req?: DescribeVdbAndPocInfoRequest,
    cb?: (error: string, rep: DescribeVdbAndPocInfoResponse) => void
  ): Promise<DescribeVdbAndPocInfoResponse> {
    return this.request("DescribeVdbAndPocInfo", req, cb)
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
   * 查询可筛选操作系统列表.
   */
  async DescribeMachineOsList(
    req?: DescribeMachineOsListRequest,
    cb?: (error: string, rep: DescribeMachineOsListResponse) => void
  ): Promise<DescribeMachineOsListResponse> {
    return this.request("DescribeMachineOsList", req, cb)
  }

  /**
   * 获取漏洞紧急通知
   */
  async DescribeVulEmergentMsg(
    req?: DescribeVulEmergentMsgRequest,
    cb?: (error: string, rep: DescribeVulEmergentMsgResponse) => void
  ): Promise<DescribeVulEmergentMsgResponse> {
    return this.request("DescribeVulEmergentMsg", req, cb)
  }

  /**
   * 授权管理-授权概览信息
   */
  async DescribeLicenseGeneral(
    req?: DescribeLicenseGeneralRequest,
    cb?: (error: string, rep: DescribeLicenseGeneralResponse) => void
  ): Promise<DescribeLicenseGeneralResponse> {
    return this.request("DescribeLicenseGeneral", req, cb)
  }

  /**
   * 查询回滚任务列表
   */
  async DescribeRansomDefenseRollBackTaskList(
    req: DescribeRansomDefenseRollBackTaskListRequest,
    cb?: (error: string, rep: DescribeRansomDefenseRollBackTaskListResponse) => void
  ): Promise<DescribeRansomDefenseRollBackTaskListResponse> {
    return this.request("DescribeRansomDefenseRollBackTaskList", req, cb)
  }

  /**
   * 导出主机最近趋势情况（最长最近90天）
   */
  async ExportAssetRecentMachineInfo(
    req: ExportAssetRecentMachineInfoRequest,
    cb?: (error: string, rep: ExportAssetRecentMachineInfoResponse) => void
  ): Promise<ExportAssetRecentMachineInfoResponse> {
    return this.request("ExportAssetRecentMachineInfo", req, cb)
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
   * 创建网络攻击白名单
   */
  async CreateNetAttackWhiteList(
    req: CreateNetAttackWhiteListRequest,
    cb?: (error: string, rep: CreateNetAttackWhiteListResponse) => void
  ): Promise<CreateNetAttackWhiteListResponse> {
    return this.request("CreateNetAttackWhiteList", req, cb)
  }

  /**
   * 更改恶意请求策略
   */
  async ModifyRiskDnsPolicy(
    req: ModifyRiskDnsPolicyRequest,
    cb?: (error: string, rep: ModifyRiskDnsPolicyResponse) => void
  ): Promise<ModifyRiskDnsPolicyResponse> {
    return this.request("ModifyRiskDnsPolicy", req, cb)
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
   * 获取忽略规则项列表
   */
  async DescribeBaselineItemIgnoreList(
    req: DescribeBaselineItemIgnoreListRequest,
    cb?: (error: string, rep: DescribeBaselineItemIgnoreListResponse) => void
  ): Promise<DescribeBaselineItemIgnoreListResponse> {
    return this.request("DescribeBaselineItemIgnoreList", req, cb)
  }

  /**
   * 导出防勒索策略列表
   */
  async ExportRansomDefenseStrategyList(
    req: ExportRansomDefenseStrategyListRequest,
    cb?: (error: string, rep: ExportRansomDefenseStrategyListResponse) => void
  ): Promise<ExportRansomDefenseStrategyListResponse> {
    return this.request("ExportRansomDefenseStrategyList", req, cb)
  }

  /**
   * 漏洞修护-查找主机漏洞修护进度
   */
  async DescribeVulFixStatus(
    req: DescribeVulFixStatusRequest,
    cb?: (error: string, rep: DescribeVulFixStatusResponse) => void
  ): Promise<DescribeVulFixStatusResponse> {
    return this.request("DescribeVulFixStatus", req, cb)
  }

  /**
   * 获取客户端异常事件
   */
  async DescribeClientException(
    req: DescribeClientExceptionRequest,
    cb?: (error: string, rep: DescribeClientExceptionResponse) => void
  ): Promise<DescribeClientExceptionResponse> {
    return this.request("DescribeClientException", req, cb)
  }

  /**
   * 获取基线分类列表
   */
  async DescribeBaselineRuleCategoryList(
    req?: DescribeBaselineRuleCategoryListRequest,
    cb?: (error: string, rep: DescribeBaselineRuleCategoryListResponse) => void
  ): Promise<DescribeBaselineRuleCategoryListResponse> {
    return this.request("DescribeBaselineRuleCategoryList", req, cb)
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
   * 查询备份详情列表
   */
  async DescribeRansomDefenseMachineList(
    req: DescribeRansomDefenseMachineListRequest,
    cb?: (error: string, rep: DescribeRansomDefenseMachineListResponse) => void
  ): Promise<DescribeRansomDefenseMachineListResponse> {
    return this.request("DescribeRansomDefenseMachineList", req, cb)
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
   * 获取木马白名单受影响列表
   */
  async DescribeMalwareWhiteListAffectList(
    req: DescribeMalwareWhiteListAffectListRequest,
    cb?: (error: string, rep: DescribeMalwareWhiteListAffectListResponse) => void
  ): Promise<DescribeMalwareWhiteListAffectListResponse> {
    return this.request("DescribeMalwareWhiteListAffectList", req, cb)
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
   * 漏洞管理-导出漏洞列表
   */
  async ExportVulList(
    req: ExportVulListRequest,
    cb?: (error: string, rep: ExportVulListResponse) => void
  ): Promise<ExportVulListResponse> {
    return this.request("ExportVulList", req, cb)
  }

  /**
   * 修改java内存马事件状态
   */
  async ModifyJavaMemShellsStatus(
    req: ModifyJavaMemShellsStatusRequest,
    cb?: (error: string, rep: ModifyJavaMemShellsStatusResponse) => void
  ): Promise<ModifyJavaMemShellsStatusResponse> {
    return this.request("ModifyJavaMemShellsStatus", req, cb)
  }

  /**
   * 导出资产管理计划任务列表
   */
  async ExportAssetPlanTaskList(
    req: ExportAssetPlanTaskListRequest,
    cb?: (error: string, rep: ExportAssetPlanTaskListResponse) => void
  ): Promise<ExportAssetPlanTaskListResponse> {
    return this.request("ExportAssetPlanTaskList", req, cb)
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
   * 混合云安装agent token获取
   */
  async DescribeAgentInstallationToken(
    req: DescribeAgentInstallationTokenRequest,
    cb?: (error: string, rep: DescribeAgentInstallationTokenResponse) => void
  ): Promise<DescribeAgentInstallationTokenResponse> {
    return this.request("DescribeAgentInstallationToken", req, cb)
  }

  /**
   * 获取主机标签Top5
   */
  async DescribeAssetMachineTagTop(
    req?: DescribeAssetMachineTagTopRequest,
    cb?: (error: string, rep: DescribeAssetMachineTagTopResponse) => void
  ): Promise<DescribeAssetMachineTagTopResponse> {
    return this.request("DescribeAssetMachineTagTop", req, cb)
  }
}
