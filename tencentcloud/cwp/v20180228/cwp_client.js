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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ExportBashEventsRequest = models.ExportBashEventsRequest;
const DescribeSearchTemplatesResponse = models.DescribeSearchTemplatesResponse;
const ExportReverseShellEventsResponse = models.ExportReverseShellEventsResponse;
const DescribeBaselineTopResponse = models.DescribeBaselineTopResponse;
const DescribeAssetWebServiceInfoListResponse = models.DescribeAssetWebServiceInfoListResponse;
const DescribeAssetAppProcessListResponse = models.DescribeAssetAppProcessListResponse;
const ScanVulAgainRequest = models.ScanVulAgainRequest;
const DeleteBaselineStrategyResponse = models.DeleteBaselineStrategyResponse;
const ExportWebPageEventListResponse = models.ExportWebPageEventListResponse;
const DescribeUndoVulCountsResponse = models.DescribeUndoVulCountsResponse;
const DescribeBaselineScanScheduleResponse = models.DescribeBaselineScanScheduleResponse;
const MaliciousRequestWhiteListInfo = models.MaliciousRequestWhiteListInfo;
const DeleteBashEventsResponse = models.DeleteBashEventsResponse;
const DescribeAssetProcessInfoListRequest = models.DescribeAssetProcessInfoListRequest;
const ExportWebPageEventListRequest = models.ExportWebPageEventListRequest;
const AssetNetworkCardInfo = models.AssetNetworkCardInfo;
const DescribeAssetWebFrameListRequest = models.DescribeAssetWebFrameListRequest;
const DescribeMonthInspectionReportResponse = models.DescribeMonthInspectionReportResponse;
const DescribeSaveOrUpdateWarningsResponse = models.DescribeSaveOrUpdateWarningsResponse;
const DescribeBaselineHostTopResponse = models.DescribeBaselineHostTopResponse;
const DeleteBashRulesResponse = models.DeleteBashRulesResponse;
const ExportVulListResponse = models.ExportVulListResponse;
const AssetMachineBaseInfo = models.AssetMachineBaseInfo;
const DescribeHistoryServiceResponse = models.DescribeHistoryServiceResponse;
const BaselineEffectHost = models.BaselineEffectHost;
const ModifyWebPageProtectSettingResponse = models.ModifyWebPageProtectSettingResponse;
const DescribeVulInfoCvssResponse = models.DescribeVulInfoCvssResponse;
const DescribeBaselineStrategyDetailRequest = models.DescribeBaselineStrategyDetailRequest;
const ModifyLicenseBindsRequest = models.ModifyLicenseBindsRequest;
const MalWareList = models.MalWareList;
const DescribeAssetUserInfoResponse = models.DescribeAssetUserInfoResponse;
const Tag = models.Tag;
const DescribeServersAndRiskAndFirstInfoResponse = models.DescribeServersAndRiskAndFirstInfoResponse;
const ExportAttackLogsResponse = models.ExportAttackLogsResponse;
const DescribeBaselineEffectHostListResponse = models.DescribeBaselineEffectHostListResponse;
const TrustMalwaresRequest = models.TrustMalwaresRequest;
const LicenseOrder = models.LicenseOrder;
const ExportVulEffectHostListRequest = models.ExportVulEffectHostListRequest;
const DescribeBaselineBasicInfoRequest = models.DescribeBaselineBasicInfoRequest;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const DescribeVulCountByDatesRequest = models.DescribeVulCountByDatesRequest;
const CreateLicenseOrderResponse = models.CreateLicenseOrderResponse;
const DescribeBaselineStrategyListResponse = models.DescribeBaselineStrategyListResponse;
const DefendAttackLog = models.DefendAttackLog;
const BaselineRuleTopInfo = models.BaselineRuleTopInfo;
const DescribeAttackLogInfoResponse = models.DescribeAttackLogInfoResponse;
const DescribePrivilegeEventsResponse = models.DescribePrivilegeEventsResponse;
const DescribeOverviewStatisticsResponse = models.DescribeOverviewStatisticsResponse;
const DescribeMonthInspectionReportRequest = models.DescribeMonthInspectionReportRequest;
const ProtectNetInfo = models.ProtectNetInfo;
const ReverseShellRule = models.ReverseShellRule;
const DescribeBashRulesResponse = models.DescribeBashRulesResponse;
const DescribeAvailableExpertServiceDetailResponse = models.DescribeAvailableExpertServiceDetailResponse;
const ChangeRuleEventsIgnoreStatusRequest = models.ChangeRuleEventsIgnoreStatusRequest;
const DescribeWebPageEventListRequest = models.DescribeWebPageEventListRequest;
const ExportAssetCoreModuleListRequest = models.ExportAssetCoreModuleListRequest;
const DescribeComponentStatisticsResponse = models.DescribeComponentStatisticsResponse;
const DescribeMachineRegionsRequest = models.DescribeMachineRegionsRequest;
const DescribeSearchExportListResponse = models.DescribeSearchExportListResponse;
const DescribeVulLevelCountResponse = models.DescribeVulLevelCountResponse;
const BruteAttackRule = models.BruteAttackRule;
const DescribeAvailableExpertServiceDetailRequest = models.DescribeAvailableExpertServiceDetailRequest;
const DescribeServerRelatedDirInfoResponse = models.DescribeServerRelatedDirInfoResponse;
const DescribeUsualLoginPlacesResponse = models.DescribeUsualLoginPlacesResponse;
const IgnoreBaselineRule = models.IgnoreBaselineRule;
const DescribeBaselineBasicInfoResponse = models.DescribeBaselineBasicInfoResponse;
const EditBashRulesResponse = models.EditBashRulesResponse;
const LoginWhiteLists = models.LoginWhiteLists;
const ScanVulResponse = models.ScanVulResponse;
const DescribeOverviewStatisticsRequest = models.DescribeOverviewStatisticsRequest;
const DeleteScanTaskRequest = models.DeleteScanTaskRequest;
const DescribeTagMachinesRequest = models.DescribeTagMachinesRequest;
const AssetKeyVal = models.AssetKeyVal;
const DescribeLicenseListResponse = models.DescribeLicenseListResponse;
const DescribeJavaMemShellListResponse = models.DescribeJavaMemShellListResponse;
const LicenseUnBindRsp = models.LicenseUnBindRsp;
const ModifyAutoOpenProVersionConfigRequest = models.ModifyAutoOpenProVersionConfigRequest;
const DeletePrivilegeEventsRequest = models.DeletePrivilegeEventsRequest;
const ExportAttackLogsRequest = models.ExportAttackLogsRequest;
const IgnoreRuleEffectHostInfo = models.IgnoreRuleEffectHostInfo;
const DescribeBanModeRequest = models.DescribeBanModeRequest;
const DescribeSecurityEventStatRequest = models.DescribeSecurityEventStatRequest;
const DeleteSearchTemplateRequest = models.DeleteSearchTemplateRequest;
const EmergencyVul = models.EmergencyVul;
const ExportReverseShellEventsRequest = models.ExportReverseShellEventsRequest;
const BashEventNew = models.BashEventNew;
const DeleteLoginWhiteListResponse = models.DeleteLoginWhiteListResponse;
const DescribeAttackLogsResponse = models.DescribeAttackLogsResponse;
const DeleteMalwaresResponse = models.DeleteMalwaresResponse;
const DescribeAssetInitServiceListRequest = models.DescribeAssetInitServiceListRequest;
const ScanVulAgainResponse = models.ScanVulAgainResponse;
const VulTopInfo = models.VulTopInfo;
const SeparateMalwaresResponse = models.SeparateMalwaresResponse;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeRiskDnsListRequest = models.DescribeRiskDnsListRequest;
const DescribeStrategyExistRequest = models.DescribeStrategyExistRequest;
const DescribeSecurityDynamicsRequest = models.DescribeSecurityDynamicsRequest;
const CheckBashRuleParamsRequest = models.CheckBashRuleParamsRequest;
const DescribeIgnoreBaselineRuleRequest = models.DescribeIgnoreBaselineRuleRequest;
const ExportNonlocalLoginPlacesResponse = models.ExportNonlocalLoginPlacesResponse;
const DescribeAssetJarListResponse = models.DescribeAssetJarListResponse;
const ExportMaliciousRequestsRequest = models.ExportMaliciousRequestsRequest;
const HostLoginList = models.HostLoginList;
const DescribeWebPageProtectStatRequest = models.DescribeWebPageProtectStatRequest;
const AssetJarDetail = models.AssetJarDetail;
const ExportVulDetectionReportRequest = models.ExportVulDetectionReportRequest;
const ExportMalwaresResponse = models.ExportMalwaresResponse;
const DescribeScanVulSettingRequest = models.DescribeScanVulSettingRequest;
const StartBaselineDetectRequest = models.StartBaselineDetectRequest;
const DescribeAssetPlanTaskListResponse = models.DescribeAssetPlanTaskListResponse;
const DescribeBaselineRuleRequest = models.DescribeBaselineRuleRequest;
const DescribeHistoryAccountsRequest = models.DescribeHistoryAccountsRequest;
const DescribeAssetMachineDetailRequest = models.DescribeAssetMachineDetailRequest;
const CancelIgnoreVulResponse = models.CancelIgnoreVulResponse;
const IgnoreImpactedHostsResponse = models.IgnoreImpactedHostsResponse;
const DescribeAssetMachineDetailResponse = models.DescribeAssetMachineDetailResponse;
const DescribeStrategyExistResponse = models.DescribeStrategyExistResponse;
const DeleteReverseShellEventsRequest = models.DeleteReverseShellEventsRequest;
const DescribeSearchLogsResponse = models.DescribeSearchLogsResponse;
const DescribeMachineOsListResponse = models.DescribeMachineOsListResponse;
const DescribeAssetWebServiceProcessListResponse = models.DescribeAssetWebServiceProcessListResponse;
const IgnoreImpactedHostsRequest = models.IgnoreImpactedHostsRequest;
const AssetUserDetail = models.AssetUserDetail;
const ModifyOrderAttributeResponse = models.ModifyOrderAttributeResponse;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const DescribeVulEffectHostListRequest = models.DescribeVulEffectHostListRequest;
const ExportLicenseDetailRequest = models.ExportLicenseDetailRequest;
const AssetWebAppPluginInfo = models.AssetWebAppPluginInfo;
const DeletePrivilegeRulesRequest = models.DeletePrivilegeRulesRequest;
const DescribeLicenseBindScheduleResponse = models.DescribeLicenseBindScheduleResponse;
const DescribeMalwareInfoRequest = models.DescribeMalwareInfoRequest;
const DescribeVersionStatisticsRequest = models.DescribeVersionStatisticsRequest;
const ExportPrivilegeEventsResponse = models.ExportPrivilegeEventsResponse;
const UsualPlace = models.UsualPlace;
const ModifyBaselinePolicyResponse = models.ModifyBaselinePolicyResponse;
const DescribeReverseShellEventsRequest = models.DescribeReverseShellEventsRequest;
const ReverseShell = models.ReverseShell;
const DescribeAttackVulTypeListRequest = models.DescribeAttackVulTypeListRequest;
const DescribeLogStorageStatisticRequest = models.DescribeLogStorageStatisticRequest;
const DeleteBaselinePolicyRequest = models.DeleteBaselinePolicyRequest;
const DescribeBaselinePolicyListResponse = models.DescribeBaselinePolicyListResponse;
const CheckBashRuleParamsResponse = models.CheckBashRuleParamsResponse;
const DeleteLicenseRecordRequest = models.DeleteLicenseRecordRequest;
const ExportBaselineListRequest = models.ExportBaselineListRequest;
const DeleteProtectDirRequest = models.DeleteProtectDirRequest;
const ExportIgnoreBaselineRuleResponse = models.ExportIgnoreBaselineRuleResponse;
const BruteAttackRuleList = models.BruteAttackRuleList;
const DescribeBanStatusResponse = models.DescribeBanStatusResponse;
const DescribeVulListRequest = models.DescribeVulListRequest;
const DescribeLicenseBindListResponse = models.DescribeLicenseBindListResponse;
const BaselineInfo = models.BaselineInfo;
const AssetAppBaseInfo = models.AssetAppBaseInfo;
const DescribePrivilegeRulesRequest = models.DescribePrivilegeRulesRequest;
const ModifyOrderAttributeRequest = models.ModifyOrderAttributeRequest;
const JavaMemShellInfo = models.JavaMemShellInfo;
const DescribeAssetSystemPackageListResponse = models.DescribeAssetSystemPackageListResponse;
const DescribeClientExceptionResponse = models.DescribeClientExceptionResponse;
const DescribeAssetMachineListResponse = models.DescribeAssetMachineListResponse;
const DescribeWebPageGeneralizeRequest = models.DescribeWebPageGeneralizeRequest;
const DescribeBaselineDetailRequest = models.DescribeBaselineDetailRequest;
const ModifyWarningSettingRequest = models.ModifyWarningSettingRequest;
const DescribeMalwareRiskWarningRequest = models.DescribeMalwareRiskWarningRequest;
const DescribeAssetInfoRequest = models.DescribeAssetInfoRequest;
const DescribeVulTopResponse = models.DescribeVulTopResponse;
const UntrustMalwaresRequest = models.UntrustMalwaresRequest;
const DescribeAssetAppListRequest = models.DescribeAssetAppListRequest;
const UntrustMalwaresResponse = models.UntrustMalwaresResponse;
const DescribeExpertServiceListResponse = models.DescribeExpertServiceListResponse;
const DescribeAccountStatisticsResponse = models.DescribeAccountStatisticsResponse;
const DescribeSearchExportListRequest = models.DescribeSearchExportListRequest;
const ScanAssetRequest = models.ScanAssetRequest;
const DescribeBaselineRuleResponse = models.DescribeBaselineRuleResponse;
const ModifyMachineRemarkRequest = models.ModifyMachineRemarkRequest;
const StopBaselineDetectResponse = models.StopBaselineDetectResponse;
const DeleteMaliciousRequestsResponse = models.DeleteMaliciousRequestsResponse;
const ExportBruteAttacksResponse = models.ExportBruteAttacksResponse;
const ProtectDirRelatedServer = models.ProtectDirRelatedServer;
const ExportBruteAttacksRequest = models.ExportBruteAttacksRequest;
const DeleteMachineResponse = models.DeleteMachineResponse;
const ScanVulRequest = models.ScanVulRequest;
const DescribeBruteAttackListResponse = models.DescribeBruteAttackListResponse;
const RecoverMalwaresRequest = models.RecoverMalwaresRequest;
const TagMachine = models.TagMachine;
const DescribeAssetCoreModuleInfoResponse = models.DescribeAssetCoreModuleInfoResponse;
const DescribeAssetEnvListRequest = models.DescribeAssetEnvListRequest;
const StopNoticeBanTipsRequest = models.StopNoticeBanTipsRequest;
const DescribeScanMalwareScheduleRequest = models.DescribeScanMalwareScheduleRequest;
const BaselineDetectParam = models.BaselineDetectParam;
const DescribeBashEventsResponse = models.DescribeBashEventsResponse;
const UpdateMachineTagsResponse = models.UpdateMachineTagsResponse;
const DescribeBashEventsRequest = models.DescribeBashEventsRequest;
const DeleteMachineRequest = models.DeleteMachineRequest;
const DescribeAssetWebLocationListResponse = models.DescribeAssetWebLocationListResponse;
const RecordInfo = models.RecordInfo;
const DescribeAssetHostTotalCountResponse = models.DescribeAssetHostTotalCountResponse;
const DescribeAssetJarListRequest = models.DescribeAssetJarListRequest;
const PrivilegeEscalationProcess = models.PrivilegeEscalationProcess;
const DescribeProtectNetListResponse = models.DescribeProtectNetListResponse;
const DescribeESAggregationsResponse = models.DescribeESAggregationsResponse;
const AssetWebLocationInfo = models.AssetWebLocationInfo;
const ChangeRuleEventsIgnoreStatusResponse = models.ChangeRuleEventsIgnoreStatusResponse;
const AssetMachineDetail = models.AssetMachineDetail;
const AssetDatabaseBaseInfo = models.AssetDatabaseBaseInfo;
const DeletePrivilegeRulesResponse = models.DeletePrivilegeRulesResponse;
const CreateProtectServerRequest = models.CreateProtectServerRequest;
const DescribeMachineListRequest = models.DescribeMachineListRequest;
const CreateEmergencyVulScanResponse = models.CreateEmergencyVulScanResponse;
const DescribeAssetCoreModuleInfoRequest = models.DescribeAssetCoreModuleInfoRequest;
const DescribeIndexListResponse = models.DescribeIndexListResponse;
const DescribeTagMachinesResponse = models.DescribeTagMachinesResponse;
const ModifyWebPageProtectDirRequest = models.ModifyWebPageProtectDirRequest;
const DescribeWebPageGeneralizeResponse = models.DescribeWebPageGeneralizeResponse;
const DescribeBanWhiteListResponse = models.DescribeBanWhiteListResponse;
const EmergencyResponseInfo = models.EmergencyResponseInfo;
const DescribeOpenPortStatisticsResponse = models.DescribeOpenPortStatisticsResponse;
const DeleteAttackLogsResponse = models.DeleteAttackLogsResponse;
const SecurityDynamic = models.SecurityDynamic;
const DescribeMalWareListRequest = models.DescribeMalWareListRequest;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const DeleteTagsResponse = models.DeleteTagsResponse;
const DescribeSecurityEventsCntRequest = models.DescribeSecurityEventsCntRequest;
const AssetUserBaseInfo = models.AssetUserBaseInfo;
const LicenseBindTaskDetail = models.LicenseBindTaskDetail;
const ExportMaliciousRequestsResponse = models.ExportMaliciousRequestsResponse;
const EffectiveMachineInfo = models.EffectiveMachineInfo;
const DescribeVulCountByDatesResponse = models.DescribeVulCountByDatesResponse;
const DescribeServersAndRiskAndFirstInfoRequest = models.DescribeServersAndRiskAndFirstInfoRequest;
const DescribeIndexListRequest = models.DescribeIndexListRequest;
const ProtectDirInfo = models.ProtectDirInfo;
const DeleteBashRulesRequest = models.DeleteBashRulesRequest;
const CreateProtectServerResponse = models.CreateProtectServerResponse;
const DescribeExpertServiceListRequest = models.DescribeExpertServiceListRequest;
const DescribeBaselineHostTopRequest = models.DescribeBaselineHostTopRequest;
const ExportBaselineEffectHostListResponse = models.ExportBaselineEffectHostListResponse;
const DescribeVulHostTopResponse = models.DescribeVulHostTopResponse;
const TrustMalwaresResponse = models.TrustMalwaresResponse;
const DescribeHistoryServiceRequest = models.DescribeHistoryServiceRequest;
const DescribeWarningListRequest = models.DescribeWarningListRequest;
const SyncAssetScanRequest = models.SyncAssetScanRequest;
const VulEffectHostList = models.VulEffectHostList;
const DescribeServerRelatedDirInfoRequest = models.DescribeServerRelatedDirInfoRequest;
const DescribeESAggregationsRequest = models.DescribeESAggregationsRequest;
const BaselineHostTopList = models.BaselineHostTopList;
const DescribeReverseShellRulesResponse = models.DescribeReverseShellRulesResponse;
const DescribeBruteAttackListRequest = models.DescribeBruteAttackListRequest;
const ModifyMachineRemarkResponse = models.ModifyMachineRemarkResponse;
const DescribeVulListResponse = models.DescribeVulListResponse;
const DescribeUndoVulCountsRequest = models.DescribeUndoVulCountsRequest;
const ScanAssetResponse = models.ScanAssetResponse;
const Machine = models.Machine;
const ProtectMachineInfo = models.ProtectMachineInfo;
const DescribeMalwareFileRequest = models.DescribeMalwareFileRequest;
const DescribeLicenseListRequest = models.DescribeLicenseListRequest;
const ModifyLicenseUnBindsRequest = models.ModifyLicenseUnBindsRequest;
const DeleteMaliciousRequestsRequest = models.DeleteMaliciousRequestsRequest;
const DescribeBanWhiteListRequest = models.DescribeBanWhiteListRequest;
const DescribeWebPageServiceInfoResponse = models.DescribeWebPageServiceInfoResponse;
const DescribeUsualLoginPlacesRequest = models.DescribeUsualLoginPlacesRequest;
const ProtectEventLists = models.ProtectEventLists;
const BaselinePolicy = models.BaselinePolicy;
const DescribeJavaMemShellListRequest = models.DescribeJavaMemShellListRequest;
const SwitchBashRulesRequest = models.SwitchBashRulesRequest;
const DescribeProcessStatisticsRequest = models.DescribeProcessStatisticsRequest;
const CreateScanMalwareSettingResponse = models.CreateScanMalwareSettingResponse;
const MalwareRisk = models.MalwareRisk;
const ExportProtectDirListResponse = models.ExportProtectDirListResponse;
const AssetWebFrameBaseInfo = models.AssetWebFrameBaseInfo;
const ExportTasksRequest = models.ExportTasksRequest;
const DescribeAssetWebLocationInfoResponse = models.DescribeAssetWebLocationInfoResponse;
const ModifyBruteAttackRulesRequest = models.ModifyBruteAttackRulesRequest;
const ExportVulListRequest = models.ExportVulListRequest;
const CreateLicenseOrderRequest = models.CreateLicenseOrderRequest;
const DescribeBaselineScanScheduleRequest = models.DescribeBaselineScanScheduleRequest;
const DescribeEmergencyVulListResponse = models.DescribeEmergencyVulListResponse;
const DestroyOrderResponse = models.DestroyOrderResponse;
const DescribeAssetUserListResponse = models.DescribeAssetUserListResponse;
const StandardModeConfig = models.StandardModeConfig;
const BashEvent = models.BashEvent;
const DeleteMalwaresRequest = models.DeleteMalwaresRequest;
const RecoverMalwaresResponse = models.RecoverMalwaresResponse;
const RegionSet = models.RegionSet;
const DescribeReverseShellRulesRequest = models.DescribeReverseShellRulesRequest;
const DescribeScanVulSettingResponse = models.DescribeScanVulSettingResponse;
const AssetFilters = models.AssetFilters;
const DescribeAssetDatabaseInfoResponse = models.DescribeAssetDatabaseInfoResponse;
const MonthInspectionReport = models.MonthInspectionReport;
const SetBashEventsStatusRequest = models.SetBashEventsStatusRequest;
const AssetAppProcessInfo = models.AssetAppProcessInfo;
const DescribeBaselineStrategyListRequest = models.DescribeBaselineStrategyListRequest;
const RegionInfo = models.RegionInfo;
const DescribeAttackLogsRequest = models.DescribeAttackLogsRequest;
const ComponentStatistics = models.ComponentStatistics;
const ExportAssetWebServiceInfoListRequest = models.ExportAssetWebServiceInfoListRequest;
const SetBashEventsStatusResponse = models.SetBashEventsStatusResponse;
const ProtectMachine = models.ProtectMachine;
const DescribeAssetUserInfoRequest = models.DescribeAssetUserInfoRequest;
const DescribeProtectDirListRequest = models.DescribeProtectDirListRequest;
const ExportPrivilegeEventsRequest = models.ExportPrivilegeEventsRequest;
const MachineExtraInfo = models.MachineExtraInfo;
const DescribeMalwareFileResponse = models.DescribeMalwareFileResponse;
const StopBaselineDetectRequest = models.StopBaselineDetectRequest;
const TaskStatus = models.TaskStatus;
const DescribeRiskDnsListResponse = models.DescribeRiskDnsListResponse;
const DescribeAssetWebAppListResponse = models.DescribeAssetWebAppListResponse;
const ScanTaskDetails = models.ScanTaskDetails;
const AssetDatabaseDetail = models.AssetDatabaseDetail;
const DescribeScanTaskStatusRequest = models.DescribeScanTaskStatusRequest;
const ExportIgnoreBaselineRuleRequest = models.ExportIgnoreBaselineRuleRequest;
const DeleteMachineTagRequest = models.DeleteMachineTagRequest;
const AssetDiskPartitionInfo = models.AssetDiskPartitionInfo;
const ZoneInfo = models.ZoneInfo;
const BaselineRuleInfo = models.BaselineRuleInfo;
const DescribeExportMachinesResponse = models.DescribeExportMachinesResponse;
const DescribeScanTaskStatusResponse = models.DescribeScanTaskStatusResponse;
const DescribeProtectNetListRequest = models.DescribeProtectNetListRequest;
const DescribeWebPageEventListResponse = models.DescribeWebPageEventListResponse;
const DescribeBashEventsNewResponse = models.DescribeBashEventsNewResponse;
const DeleteProtectDirResponse = models.DeleteProtectDirResponse;
const ModifyBanStatusRequest = models.ModifyBanStatusRequest;
const OsName = models.OsName;
const DescribeWebPageServiceInfoRequest = models.DescribeWebPageServiceInfoRequest;
const DescribeLogStorageStatisticResponse = models.DescribeLogStorageStatisticResponse;
const BaselineItemDetect = models.BaselineItemDetect;
const DescribeEmergencyResponseListRequest = models.DescribeEmergencyResponseListRequest;
const DescribeScanStateResponse = models.DescribeScanStateResponse;
const BaselineHostDetect = models.BaselineHostDetect;
const EditTagsRequest = models.EditTagsRequest;
const DeleteReverseShellRulesRequest = models.DeleteReverseShellRulesRequest;
const DescribeBaselineEffectHostListRequest = models.DescribeBaselineEffectHostListRequest;
const ExportSecurityTrendsRequest = models.ExportSecurityTrendsRequest;
const DescribeAssetDatabaseInfoRequest = models.DescribeAssetDatabaseInfoRequest;
const DescribeOpenPortStatisticsRequest = models.DescribeOpenPortStatisticsRequest;
const ExportAssetWebServiceInfoListResponse = models.ExportAssetWebServiceInfoListResponse;
const ExportSecurityTrendsResponse = models.ExportSecurityTrendsResponse;
const ModifyMalwareTimingScanSettingsResponse = models.ModifyMalwareTimingScanSettingsResponse;
const DeleteNonlocalLoginPlacesResponse = models.DeleteNonlocalLoginPlacesResponse;
const ModifyWebPageProtectSettingRequest = models.ModifyWebPageProtectSettingRequest;
const DeleteMalwareScanTaskResponse = models.DeleteMalwareScanTaskResponse;
const DescribeBaselineDetailResponse = models.DescribeBaselineDetailResponse;
const ExportIgnoreRuleEffectHostListResponse = models.ExportIgnoreRuleEffectHostListResponse;
const DescribeAssetRecentMachineInfoRequest = models.DescribeAssetRecentMachineInfoRequest;
const DescribeAssetWebAppPluginListRequest = models.DescribeAssetWebAppPluginListRequest;
const DeletePrivilegeEventsResponse = models.DeletePrivilegeEventsResponse;
const DescribeMachineInfoResponse = models.DescribeMachineInfoResponse;
const VulHostTopInfo = models.VulHostTopInfo;
const DescribeImportMachineInfoRequest = models.DescribeImportMachineInfoRequest;
const VulLevelInfo = models.VulLevelInfo;
const StartBaselineDetectResponse = models.StartBaselineDetectResponse;
const ProtectStat = models.ProtectStat;
const DescribeVulEffectHostListResponse = models.DescribeVulEffectHostListResponse;
const SwitchBashRulesResponse = models.SwitchBashRulesResponse;
const DescribeSearchLogsRequest = models.DescribeSearchLogsRequest;
const DescribeAttackLogInfoRequest = models.DescribeAttackLogInfoRequest;
const ScanVulSettingResponse = models.ScanVulSettingResponse;
const DescribeAssetJarInfoResponse = models.DescribeAssetJarInfoResponse;
const DescribeVulInfoCvssRequest = models.DescribeVulInfoCvssRequest;
const DescribeComponentStatisticsRequest = models.DescribeComponentStatisticsRequest;
const DescribeMaliciousRequestWhiteListRequest = models.DescribeMaliciousRequestWhiteListRequest;
const ModifyBanStatusResponse = models.ModifyBanStatusResponse;
const DescribeLoginWhiteListResponse = models.DescribeLoginWhiteListResponse;
const StopNoticeBanTipsResponse = models.StopNoticeBanTipsResponse;
const DescribeScanMalwareScheduleResponse = models.DescribeScanMalwareScheduleResponse;
const AssetWebLocationBaseInfo = models.AssetWebLocationBaseInfo;
const DescribeMalwareTimingScanSettingRequest = models.DescribeMalwareTimingScanSettingRequest;
const BashRule = models.BashRule;
const Tags = models.Tags;
const CreateSearchLogResponse = models.CreateSearchLogResponse;
const DescribeSecurityTrendsResponse = models.DescribeSecurityTrendsResponse;
const AssetSystemPackageInfo = models.AssetSystemPackageInfo;
const DescribeEmergencyVulListRequest = models.DescribeEmergencyVulListRequest;
const DescribeSecurityDynamicsResponse = models.DescribeSecurityDynamicsResponse;
const DeleteReverseShellEventsResponse = models.DeleteReverseShellEventsResponse;
const LicenseBindDetail = models.LicenseBindDetail;
const AssetWebServiceBaseInfo = models.AssetWebServiceBaseInfo;
const DescribeProVersionStatusResponse = models.DescribeProVersionStatusResponse;
const DescribeScanTaskDetailsResponse = models.DescribeScanTaskDetailsResponse;
const DescribeGeneralStatRequest = models.DescribeGeneralStatRequest;
const UpdateBaselineStrategyResponse = models.UpdateBaselineStrategyResponse;
const AssetInitServiceBaseInfo = models.AssetInitServiceBaseInfo;
const DescribeVulHostTopRequest = models.DescribeVulHostTopRequest;
const DescribeIgnoreRuleEffectHostListRequest = models.DescribeIgnoreRuleEffectHostListRequest;
const ModifyWarningSettingResponse = models.ModifyWarningSettingResponse;
const LoginWhiteCombinedInfo = models.LoginWhiteCombinedInfo;
const DescribeMalwareInfoResponse = models.DescribeMalwareInfoResponse;
const VulDetailInfo = models.VulDetailInfo;
const DescribeAssetJarInfoRequest = models.DescribeAssetJarInfoRequest;
const DescribePrivilegeEventsRequest = models.DescribePrivilegeEventsRequest;
const DescribeAssetEnvListResponse = models.DescribeAssetEnvListResponse;
const DescribeVulHostCountScanTimeRequest = models.DescribeVulHostCountScanTimeRequest;
const ExportScanTaskDetailsResponse = models.ExportScanTaskDetailsResponse;
const ExportBashEventsResponse = models.ExportBashEventsResponse;
const EventStat = models.EventStat;
const DeleteLoginWhiteListRequest = models.DeleteLoginWhiteListRequest;
const DeleteWebPageEventLogResponse = models.DeleteWebPageEventLogResponse;
const DescribeLicenseBindScheduleRequest = models.DescribeLicenseBindScheduleRequest;
const DescribeVersionStatisticsResponse = models.DescribeVersionStatisticsResponse;
const DescribeBruteAttackRulesRequest = models.DescribeBruteAttackRulesRequest;
const DescribeProcessStatisticsResponse = models.DescribeProcessStatisticsResponse;
const ModifyBruteAttackRulesResponse = models.ModifyBruteAttackRulesResponse;
const DeleteNonlocalLoginPlacesRequest = models.DeleteNonlocalLoginPlacesRequest;
const DescribeAssetWebAppPluginListResponse = models.DescribeAssetWebAppPluginListResponse;
const DescribeTagsResponse = models.DescribeTagsResponse;
const BaselineEventLevelInfo = models.BaselineEventLevelInfo;
const DescribeLoginWhiteCombinedListRequest = models.DescribeLoginWhiteCombinedListRequest;
const Strategy = models.Strategy;
const DeleteSearchTemplateResponse = models.DeleteSearchTemplateResponse;
const DescribeBanRegionsResponse = models.DescribeBanRegionsResponse;
const DescribeEmergencyResponseListResponse = models.DescribeEmergencyResponseListResponse;
const ProtectHostConfig = models.ProtectHostConfig;
const AssetPlanTask = models.AssetPlanTask;
const DeleteBaselinePolicyResponse = models.DeleteBaselinePolicyResponse;
const HistoryAccount = models.HistoryAccount;
const DescribeAssetAppListResponse = models.DescribeAssetAppListResponse;
const ModifyWebPageProtectSwitchRequest = models.ModifyWebPageProtectSwitchRequest;
const CreateScanMalwareSettingRequest = models.CreateScanMalwareSettingRequest;
const DescribeMalwareTimingScanSettingResponse = models.DescribeMalwareTimingScanSettingResponse;
const DescribeHostLoginListRequest = models.DescribeHostLoginListRequest;
const OrderModifyObject = models.OrderModifyObject;
const SecurityTrend = models.SecurityTrend;
const DescribeAssetWebServiceProcessListRequest = models.DescribeAssetWebServiceProcessListRequest;
const LicenseDetail = models.LicenseDetail;
const PrivilegeRule = models.PrivilegeRule;
const ExportVulDetectionExcelRequest = models.ExportVulDetectionExcelRequest;
const CreateEmergencyVulScanRequest = models.CreateEmergencyVulScanRequest;
const DescribeProtectDirRelatedServerResponse = models.DescribeProtectDirRelatedServerResponse;
const ModifyAutoOpenProVersionConfigResponse = models.ModifyAutoOpenProVersionConfigResponse;
const ExportBaselineEffectHostListRequest = models.ExportBaselineEffectHostListRequest;
const AssetCoreModuleDetail = models.AssetCoreModuleDetail;
const DescribeBaselineItemDetectListRequest = models.DescribeBaselineItemDetectListRequest;
const DescribeBanStatusRequest = models.DescribeBanStatusRequest;
const DescribeAssetRecentMachineInfoResponse = models.DescribeAssetRecentMachineInfoResponse;
const BaselineItem = models.BaselineItem;
const DescribeMalWareListResponse = models.DescribeMalWareListResponse;
const ModifyLicenseUnBindsResponse = models.ModifyLicenseUnBindsResponse;
const DescribeAssetPortInfoListResponse = models.DescribeAssetPortInfoListResponse;
const DescribeProtectDirListResponse = models.DescribeProtectDirListResponse;
const DescribeMaliciousRequestWhiteListResponse = models.DescribeMaliciousRequestWhiteListResponse;
const DescribeBaselinePolicyListRequest = models.DescribeBaselinePolicyListRequest;
const DeleteBruteAttacksResponse = models.DeleteBruteAttacksResponse;
const ExportTasksResponse = models.ExportTasksResponse;
const DescribeIgnoreBaselineRuleResponse = models.DescribeIgnoreBaselineRuleResponse;
const DescribeMachineOsListRequest = models.DescribeMachineOsListRequest;
const DescribeMalwareRiskWarningResponse = models.DescribeMalwareRiskWarningResponse;
const DescribeBashRulesRequest = models.DescribeBashRulesRequest;
const ExportLicenseDetailResponse = models.ExportLicenseDetailResponse;
const BaselineBasicInfo = models.BaselineBasicInfo;
const DescribeBanModeResponse = models.DescribeBanModeResponse;
const DescribeImportMachineInfoResponse = models.DescribeImportMachineInfoResponse;
const DescribeSecurityEventStatResponse = models.DescribeSecurityEventStatResponse;
const DescribeAssetDatabaseListRequest = models.DescribeAssetDatabaseListRequest;
const ModifyWebPageProtectSwitchResponse = models.ModifyWebPageProtectSwitchResponse;
const DescribeAssetMachineListRequest = models.DescribeAssetMachineListRequest;
const CreateSearchTemplateResponse = models.CreateSearchTemplateResponse;
const DescribeAssetDatabaseListResponse = models.DescribeAssetDatabaseListResponse;
const ExportMalwaresRequest = models.ExportMalwaresRequest;
const ExportNonlocalLoginPlacesRequest = models.ExportNonlocalLoginPlacesRequest;
const SyncAssetScanResponse = models.SyncAssetScanResponse;
const AssetCoreModuleBaseInfo = models.AssetCoreModuleBaseInfo;
const CreateBaselineStrategyRequest = models.CreateBaselineStrategyRequest;
const DescribeSecurityTrendsRequest = models.DescribeSecurityTrendsRequest;
const DescribeAttackVulTypeListResponse = models.DescribeAttackVulTypeListResponse;
const DescribePrivilegeRulesResponse = models.DescribePrivilegeRulesResponse;
const DescribeReverseShellEventsResponse = models.DescribeReverseShellEventsResponse;
const DescribeBashEventsNewRequest = models.DescribeBashEventsNewRequest;
const DescribeWebPageProtectStatResponse = models.DescribeWebPageProtectStatResponse;
const DescribeAssetPortInfoListRequest = models.DescribeAssetPortInfoListRequest;
const VulLevelCountInfo = models.VulLevelCountInfo;
const DescribeExportMachinesRequest = models.DescribeExportMachinesRequest;
const DescribeAssetInfoResponse = models.DescribeAssetInfoResponse;
const WarningObject = models.WarningObject;
const RiskDnsList = models.RiskDnsList;
const DeleteMalwareScanTaskRequest = models.DeleteMalwareScanTaskRequest;
const DescribeIgnoreRuleEffectHostListResponse = models.DescribeIgnoreRuleEffectHostListResponse;
const ExportProtectDirListRequest = models.ExportProtectDirListRequest;
const CreateBaselineStrategyResponse = models.CreateBaselineStrategyResponse;
const ExportAssetCoreModuleListResponse = models.ExportAssetCoreModuleListResponse;
const DescribeHistoryAccountsResponse = models.DescribeHistoryAccountsResponse;
const DescribeLoginWhiteListRequest = models.DescribeLoginWhiteListRequest;
const OpenPortStatistics = models.OpenPortStatistics;
const ExportVulDetectionReportResponse = models.ExportVulDetectionReportResponse;
const DescribeScanScheduleRequest = models.DescribeScanScheduleRequest;
const EditBashRulesRequest = models.EditBashRulesRequest;
const DescribeLicenseGeneralResponse = models.DescribeLicenseGeneralResponse;
const ScanVulSettingRequest = models.ScanVulSettingRequest;
const ExportScanTaskDetailsRequest = models.ExportScanTaskDetailsRequest;
const ExportBaselineListResponse = models.ExportBaselineListResponse;
const DescribeBruteAttackRulesResponse = models.DescribeBruteAttackRulesResponse;
const ModifyBanModeResponse = models.ModifyBanModeResponse;
const DeleteLicenseRecordResponse = models.DeleteLicenseRecordResponse;
const AssetProcessBaseInfo = models.AssetProcessBaseInfo;
const DeleteBruteAttacksRequest = models.DeleteBruteAttacksRequest;
const DescribeAssetCoreModuleListResponse = models.DescribeAssetCoreModuleListResponse;
const DescribeBaselineItemListRequest = models.DescribeBaselineItemListRequest;
const DescribeLoginWhiteCombinedListResponse = models.DescribeLoginWhiteCombinedListResponse;
const ExportVulDetectionExcelResponse = models.ExportVulDetectionExcelResponse;
const DescribeWarningListResponse = models.DescribeWarningListResponse;
const CreateSearchTemplateRequest = models.CreateSearchTemplateRequest;
const DeleteTagsRequest = models.DeleteTagsRequest;
const DescribeScanStateRequest = models.DescribeScanStateRequest;
const SyncBaselineDetectSummaryResponse = models.SyncBaselineDetectSummaryResponse;
const ModifyMalwareTimingScanSettingsRequest = models.ModifyMalwareTimingScanSettingsRequest;
const AssetEnvBaseInfo = models.AssetEnvBaseInfo;
const DescribeMachineListResponse = models.DescribeMachineListResponse;
const MalwareInfo = models.MalwareInfo;
const Place = models.Place;
const SyncBaselineDetectSummaryRequest = models.SyncBaselineDetectSummaryRequest;
const DescribeExpertServiceOrderListResponse = models.DescribeExpertServiceOrderListResponse;
const DeleteReverseShellRulesResponse = models.DeleteReverseShellRulesResponse;
const DescribeAssetPlanTaskListRequest = models.DescribeAssetPlanTaskListRequest;
const DescribeScanTaskDetailsRequest = models.DescribeScanTaskDetailsRequest;
const DescribeProtectDirRelatedServerRequest = models.DescribeProtectDirRelatedServerRequest;
const DescribeBaselineItemListResponse = models.DescribeBaselineItemListResponse;
const DescribeClientExceptionRequest = models.DescribeClientExceptionRequest;
const DescribeBanRegionsRequest = models.DescribeBanRegionsRequest;
const SecurityEventInfo = models.SecurityEventInfo;
const DescribeBaselineAnalysisDataResponse = models.DescribeBaselineAnalysisDataResponse;
const ModifyBanModeRequest = models.ModifyBanModeRequest;
const BanWhiteListDetail = models.BanWhiteListDetail;
const DeleteScanTaskResponse = models.DeleteScanTaskResponse;
const DescribeMachineRegionsResponse = models.DescribeMachineRegionsResponse;
const DestroyOrderRequest = models.DestroyOrderRequest;
const AssetWebAppBaseInfo = models.AssetWebAppBaseInfo;
const AssetCoreModuleParam = models.AssetCoreModuleParam;
const DeleteBashEventsRequest = models.DeleteBashEventsRequest;
const AssetJarBaseInfo = models.AssetJarBaseInfo;
const SeparateMalwaresRequest = models.SeparateMalwaresRequest;
const VulInfoList = models.VulInfoList;
const ExportIgnoreRuleEffectHostListRequest = models.ExportIgnoreRuleEffectHostListRequest;
const DescribeVulHostCountScanTimeResponse = models.DescribeVulHostCountScanTimeResponse;
const DescribeAssetCoreModuleListRequest = models.DescribeAssetCoreModuleListRequest;
const DeleteAttackLogsRequest = models.DeleteAttackLogsRequest;
const DescribeBaselineStrategyDetailResponse = models.DescribeBaselineStrategyDetailResponse;
const DescribeBaselineListRequest = models.DescribeBaselineListRequest;
const ModifyLicenseBindsResponse = models.ModifyLicenseBindsResponse;
const DescribeBaselineTopRequest = models.DescribeBaselineTopRequest;
const DescribeAssetAppProcessListRequest = models.DescribeAssetAppProcessListRequest;
const DescribeLicenseBindListRequest = models.DescribeLicenseBindListRequest;
const Filter = models.Filter;
const DescribeAccountStatisticsRequest = models.DescribeAccountStatisticsRequest;
const SecurityButlerInfo = models.SecurityButlerInfo;
const DescribeBaselineHostDetectListResponse = models.DescribeBaselineHostDetectListResponse;
const DescribeSaveOrUpdateWarningsRequest = models.DescribeSaveOrUpdateWarningsRequest;
const DescribeAssetProcessInfoListResponse = models.DescribeAssetProcessInfoListResponse;
const ProcessStatistics = models.ProcessStatistics;
const DescribeScanScheduleResponse = models.DescribeScanScheduleResponse;
const BaselineDetail = models.BaselineDetail;
const ModifyWebPageProtectDirResponse = models.ModifyWebPageProtectDirResponse;
const DescribeAssetWebAppListRequest = models.DescribeAssetWebAppListRequest;
const ExpertServiceOrderInfo = models.ExpertServiceOrderInfo;
const DescribeLicenseGeneralRequest = models.DescribeLicenseGeneralRequest;
const AccountStatistics = models.AccountStatistics;
const AssetUserKeyInfo = models.AssetUserKeyInfo;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const DescribeAssetWebLocationListRequest = models.DescribeAssetWebLocationListRequest;
const DescribeAssetHostTotalCountRequest = models.DescribeAssetHostTotalCountRequest;
const DescribeVulLevelCountRequest = models.DescribeVulLevelCountRequest;
const DeleteWebPageEventLogRequest = models.DeleteWebPageEventLogRequest;
const DescribeProVersionStatusRequest = models.DescribeProVersionStatusRequest;
const DescribeBaselineListResponse = models.DescribeBaselineListResponse;
const DescribeExpertServiceOrderListRequest = models.DescribeExpertServiceOrderListRequest;
const ExportVulEffectHostListResponse = models.ExportVulEffectHostListResponse;
const DescribeVulTopRequest = models.DescribeVulTopRequest;
const DescribeMachineInfoRequest = models.DescribeMachineInfoRequest;
const SearchTemplate = models.SearchTemplate;
const DescribeGeneralStatResponse = models.DescribeGeneralStatResponse;
const EditTagsResponse = models.EditTagsResponse;
const DeleteMachineTagResponse = models.DeleteMachineTagResponse;
const BruteAttackInfo = models.BruteAttackInfo;
const WarningInfoObj = models.WarningInfoObj;
const UpdateMachineTagsRequest = models.UpdateMachineTagsRequest;
const DescribeBaselineItemDetectListResponse = models.DescribeBaselineItemDetectListResponse;
const UpdateBaselineStrategyRequest = models.UpdateBaselineStrategyRequest;
const DescribeHostLoginListResponse = models.DescribeHostLoginListResponse;
const DescribeBaselineAnalysisDataRequest = models.DescribeBaselineAnalysisDataRequest;
const AssetPortBaseInfo = models.AssetPortBaseInfo;
const DescribeAssetWebLocationInfoRequest = models.DescribeAssetWebLocationInfoRequest;
const DescribeAssetInitServiceListResponse = models.DescribeAssetInitServiceListResponse;
const ModifyBaselinePolicyRequest = models.ModifyBaselinePolicyRequest;
const DescribeBaselineHostDetectListRequest = models.DescribeBaselineHostDetectListRequest;
const DescribeAssetWebFrameListResponse = models.DescribeAssetWebFrameListResponse;
const DescribeAssetUserListRequest = models.DescribeAssetUserListRequest;
const DeleteBaselineStrategyRequest = models.DeleteBaselineStrategyRequest;
const DescribeAssetSystemPackageListRequest = models.DescribeAssetSystemPackageListRequest;
const MachineTag = models.MachineTag;
const DescribeSecurityEventsCntResponse = models.DescribeSecurityEventsCntResponse;
const Filters = models.Filters;
const DescribeAssetWebServiceInfoListRequest = models.DescribeAssetWebServiceInfoListRequest;
const CreateSearchLogRequest = models.CreateSearchLogRequest;
const DescribeSearchTemplatesRequest = models.DescribeSearchTemplatesRequest;
const CancelIgnoreVulRequest = models.CancelIgnoreVulRequest;


/**
 * cwp client
 * @class
 */
class CwpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cwp.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * 删除标签
     * @param {DeleteTagsRequest} req
     * @param {function(string, DeleteTagsResponse):void} cb
     * @public
     */
    DeleteTags(req, cb) {
        let resp = new DeleteTagsResponse();
        this.request("DeleteTags", req, resp, cb);
    }

    /**
     * 新增或编辑标签
     * @param {EditTagsRequest} req
     * @param {function(string, EditTagsResponse):void} cb
     * @public
     */
    EditTags(req, cb) {
        let resp = new EditTagsResponse();
        this.request("EditTags", req, resp, cb);
    }

    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     * @param {TrustMalwaresRequest} req
     * @param {function(string, TrustMalwaresResponse):void} cb
     * @public
     */
    TrustMalwares(req, cb) {
        let resp = new TrustMalwaresResponse();
        this.request("TrustMalwares", req, resp, cb);
    }

    /**
     * 获取资产管理端口列表
     * @param {DescribeAssetPortInfoListRequest} req
     * @param {function(string, DescribeAssetPortInfoListResponse):void} cb
     * @public
     */
    DescribeAssetPortInfoList(req, cb) {
        let resp = new DescribeAssetPortInfoListResponse();
        this.request("DescribeAssetPortInfoList", req, resp, cb);
    }

    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     * @param {DescribeComponentStatisticsRequest} req
     * @param {function(string, DescribeComponentStatisticsResponse):void} cb
     * @public
     */
    DescribeComponentStatistics(req, cb) {
        let resp = new DescribeComponentStatisticsResponse();
        this.request("DescribeComponentStatistics", req, resp, cb);
    }

    /**
     * 根据taskid查询检测进度
     * @param {DescribeScanScheduleRequest} req
     * @param {function(string, DescribeScanScheduleResponse):void} cb
     * @public
     */
    DescribeScanSchedule(req, cb) {
        let resp = new DescribeScanScheduleResponse();
        this.request("DescribeScanSchedule", req, resp, cb);
    }

    /**
     * 删除服务器关联的标签
     * @param {DeleteMachineTagRequest} req
     * @param {function(string, DeleteMachineTagResponse):void} cb
     * @public
     */
    DeleteMachineTag(req, cb) {
        let resp = new DeleteMachineTagResponse();
        this.request("DeleteMachineTag", req, resp, cb);
    }

    /**
     * 按分页形式展示网络攻击日志列表
     * @param {DescribeAttackLogsRequest} req
     * @param {function(string, DescribeAttackLogsResponse):void} cb
     * @public
     */
    DescribeAttackLogs(req, cb) {
        let resp = new DescribeAttackLogsResponse();
        this.request("DescribeAttackLogs", req, resp, cb);
    }

    /**
     * 获取漏洞列表数据
     * @param {DescribeVulListRequest} req
     * @param {function(string, DescribeVulListResponse):void} cb
     * @public
     */
    DescribeVulList(req, cb) {
        let resp = new DescribeVulListResponse();
        this.request("DescribeVulList", req, resp, cb);
    }

    /**
     * 导出ES查询文档列表
     * @param {DescribeSearchExportListRequest} req
     * @param {function(string, DescribeSearchExportListResponse):void} cb
     * @public
     */
    DescribeSearchExportList(req, cb) {
        let resp = new DescribeSearchExportListResponse();
        this.request("DescribeSearchExportList", req, resp, cb);
    }

    /**
     * 查询资产管理计划任务列表
     * @param {DescribeAssetPlanTaskListRequest} req
     * @param {function(string, DescribeAssetPlanTaskListResponse):void} cb
     * @public
     */
    DescribeAssetPlanTaskList(req, cb) {
        let resp = new DescribeAssetPlanTaskListResponse();
        this.request("DescribeAssetPlanTaskList", req, resp, cb);
    }

    /**
     * 获取爆破阻断模式
     * @param {DescribeBanModeRequest} req
     * @param {function(string, DescribeBanModeResponse):void} cb
     * @public
     */
    DescribeBanMode(req, cb) {
        let resp = new DescribeBanModeResponse();
        this.request("DescribeBanMode", req, resp, cb);
    }

    /**
     * 根据检测项id或事件id批量忽略事件或取消忽略
     * @param {ChangeRuleEventsIgnoreStatusRequest} req
     * @param {function(string, ChangeRuleEventsIgnoreStatusResponse):void} cb
     * @public
     */
    ChangeRuleEventsIgnoreStatus(req, cb) {
        let resp = new ChangeRuleEventsIgnoreStatusResponse();
        this.request("ChangeRuleEventsIgnoreStatus", req, resp, cb);
    }

    /**
     * 获取资产管理系统安装包列表
     * @param {DescribeAssetSystemPackageListRequest} req
     * @param {function(string, DescribeAssetSystemPackageListResponse):void} cb
     * @public
     */
    DescribeAssetSystemPackageList(req, cb) {
        let resp = new DescribeAssetSystemPackageListResponse();
        this.request("DescribeAssetSystemPackageList", req, resp, cb);
    }

    /**
     * 获取资产管理Web应用插件列表
     * @param {DescribeAssetWebAppPluginListRequest} req
     * @param {function(string, DescribeAssetWebAppPluginListResponse):void} cb
     * @public
     */
    DescribeAssetWebAppPluginList(req, cb) {
        let resp = new DescribeAssetWebAppPluginListResponse();
        this.request("DescribeAssetWebAppPluginList", req, resp, cb);
    }

    /**
     * 删除检索模板
     * @param {DeleteSearchTemplateRequest} req
     * @param {function(string, DeleteSearchTemplateResponse):void} cb
     * @public
     */
    DeleteSearchTemplate(req, cb) {
        let resp = new DeleteSearchTemplateResponse();
        this.request("DeleteSearchTemplate", req, resp, cb);
    }

    /**
     * 校验高危命令用户规则新增和编辑时的参数。
     * @param {CheckBashRuleParamsRequest} req
     * @param {function(string, CheckBashRuleParamsResponse):void} cb
     * @public
     */
    CheckBashRuleParams(req, cb) {
        let resp = new CheckBashRuleParamsResponse();
        this.request("CheckBashRuleParams", req, resp, cb);
    }

    /**
     * DescribeScanTaskDetails 查询扫描任务详情 , 可以查询扫描进度信息/异常;
     * @param {DescribeScanTaskDetailsRequest} req
     * @param {function(string, DescribeScanTaskDetailsResponse):void} cb
     * @public
     */
    DescribeScanTaskDetails(req, cb) {
        let resp = new DescribeScanTaskDetailsResponse();
        this.request("DescribeScanTaskDetails", req, resp, cb);
    }

    /**
     * 查询服务区关联目录详情
     * @param {DescribeServerRelatedDirInfoRequest} req
     * @param {function(string, DescribeServerRelatedDirInfoResponse):void} cb
     * @public
     */
    DescribeServerRelatedDirInfo(req, cb) {
        let resp = new DescribeServerRelatedDirInfoResponse();
        this.request("DescribeServerRelatedDirInfo", req, resp, cb);
    }

    /**
     * 停止基线检测
     * @param {StopBaselineDetectRequest} req
     * @param {function(string, StopBaselineDetectResponse):void} cb
     * @public
     */
    StopBaselineDetect(req, cb) {
        let resp = new StopBaselineDetectResponse();
        this.request("StopBaselineDetect", req, resp, cb);
    }

    /**
     * 根据策略信息创建基线策略
     * @param {CreateBaselineStrategyRequest} req
     * @param {function(string, CreateBaselineStrategyResponse):void} cb
     * @public
     */
    CreateBaselineStrategy(req, cb) {
        let resp = new CreateBaselineStrategyResponse();
        this.request("CreateBaselineStrategy", req, resp, cb);
    }

    /**
     * 查询批量导入机器信息
     * @param {DescribeImportMachineInfoRequest} req
     * @param {function(string, DescribeImportMachineInfoResponse):void} cb
     * @public
     */
    DescribeImportMachineInfo(req, cb) {
        let resp = new DescribeImportMachineInfoResponse();
        this.request("DescribeImportMachineInfo", req, resp, cb);
    }

    /**
     * 获取高危命令规则列表
     * @param {DescribeBashRulesRequest} req
     * @param {function(string, DescribeBashRulesResponse):void} cb
     * @public
     */
    DescribeBashRules(req, cb) {
        let resp = new DescribeBashRulesResponse();
        this.request("DescribeBashRules", req, resp, cb);
    }

    /**
     * 获取历史搜索记录
     * @param {DescribeSearchLogsRequest} req
     * @param {function(string, DescribeSearchLogsResponse):void} cb
     * @public
     */
    DescribeSearchLogs(req, cb) {
        let resp = new DescribeSearchLogsResponse();
        this.request("DescribeSearchLogs", req, resp, cb);
    }

    /**
     * 根据Ids删除本地提权
     * @param {DeletePrivilegeEventsRequest} req
     * @param {function(string, DeletePrivilegeEventsResponse):void} cb
     * @public
     */
    DeletePrivilegeEvents(req, cb) {
        let resp = new DeletePrivilegeEventsResponse();
        this.request("DeletePrivilegeEvents", req, resp, cb);
    }

    /**
     * 入侵检测，获取恶意请求列表
     * @param {DescribeRiskDnsListRequest} req
     * @param {function(string, DescribeRiskDnsListResponse):void} cb
     * @public
     */
    DescribeRiskDnsList(req, cb) {
        let resp = new DescribeRiskDnsListResponse();
        this.request("DescribeRiskDnsList", req, resp, cb);
    }

    /**
     * 导出网络攻击日志
     * @param {ExportAttackLogsRequest} req
     * @param {function(string, ExportAttackLogsResponse):void} cb
     * @public
     */
    ExportAttackLogs(req, cb) {
        let resp = new ExportAttackLogsResponse();
        this.request("ExportAttackLogs", req, resp, cb);
    }

    /**
     * 接口返回TopN的风险服务器
     * @param {DescribeBaselineHostTopRequest} req
     * @param {function(string, DescribeBaselineHostTopResponse):void} cb
     * @public
     */
    DescribeBaselineHostTop(req, cb) {
        let resp = new DescribeBaselineHostTopResponse();
        this.request("DescribeBaselineHostTop", req, resp, cb);
    }

    /**
     * 专家服务-安全管家列表
     * @param {DescribeExpertServiceListRequest} req
     * @param {function(string, DescribeExpertServiceListResponse):void} cb
     * @public
     */
    DescribeExpertServiceList(req, cb) {
        let resp = new DescribeExpertServiceListResponse();
        this.request("DescribeExpertServiceList", req, resp, cb);
    }

    /**
     * 查询基线列表信息
     * @param {DescribeBaselineListRequest} req
     * @param {function(string, DescribeBaselineListResponse):void} cb
     * @public
     */
    DescribeBaselineList(req, cb) {
        let resp = new DescribeBaselineListResponse();
        this.request("DescribeBaselineList", req, resp, cb);
    }

    /**
     * DeleteScanTask 该接口可以对指定类型的扫描任务进行停止扫描;
     * @param {DeleteScanTaskRequest} req
     * @param {function(string, DeleteScanTaskResponse):void} cb
     * @public
     */
    DeleteScanTask(req, cb) {
        let resp = new DeleteScanTaskResponse();
        this.request("DeleteScanTask", req, resp, cb);
    }

    /**
     * 根据Ids删除高危命令事件
     * @param {DeleteBashEventsRequest} req
     * @param {function(string, DeleteBashEventsResponse):void} cb
     * @public
     */
    DeleteBashEvents(req, cb) {
        let resp = new DeleteBashEventsResponse();
        this.request("DeleteBashEvents", req, resp, cb);
    }

    /**
     * 根据基线id查询基线影响主机列表
     * @param {DescribeBaselineEffectHostListRequest} req
     * @param {function(string, DescribeBaselineEffectHostListResponse):void} cb
     * @public
     */
    DescribeBaselineEffectHostList(req, cb) {
        let resp = new DescribeBaselineEffectHostListResponse();
        this.request("DescribeBaselineEffectHostList", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     * @param {DeleteMaliciousRequestsRequest} req
     * @param {function(string, DeleteMaliciousRequestsResponse):void} cb
     * @public
     */
    DeleteMaliciousRequests(req, cb) {
        let resp = new DeleteMaliciousRequestsResponse();
        this.request("DeleteMaliciousRequests", req, resp, cb);
    }

    /**
     * 获取索引列表
     * @param {DescribeIndexListRequest} req
     * @param {function(string, DescribeIndexListResponse):void} cb
     * @public
     */
    DescribeIndexList(req, cb) {
        let resp = new DescribeIndexListResponse();
        this.request("DescribeIndexList", req, resp, cb);
    }

    /**
     * 导出基线列表
     * @param {ExportBaselineListRequest} req
     * @param {function(string, ExportBaselineListResponse):void} cb
     * @public
     */
    ExportBaselineList(req, cb) {
        let resp = new ExportBaselineListResponse();
        this.request("ExportBaselineList", req, resp, cb);
    }

    /**
     * 用于获取专业版概览信息。
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        let resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }

    /**
     * 专家服务-旗舰重保列表
     * @param {DescribeProtectNetListRequest} req
     * @param {function(string, DescribeProtectNetListResponse):void} cb
     * @public
     */
    DescribeProtectNetList(req, cb) {
        let resp = new DescribeProtectNetListResponse();
        this.request("DescribeProtectNetList", req, resp, cb);
    }

    /**
     * 获取反弹Shell规则列表
     * @param {DescribeReverseShellRulesRequest} req
     * @param {function(string, DescribeReverseShellRulesResponse):void} cb
     * @public
     */
    DescribeReverseShellRules(req, cb) {
        let resp = new DescribeReverseShellRulesResponse();
        this.request("DescribeReverseShellRules", req, resp, cb);
    }

    /**
     * 获取基线项检测结果列表
     * @param {DescribeBaselineItemListRequest} req
     * @param {function(string, DescribeBaselineItemListResponse):void} cb
     * @public
     */
    DescribeBaselineItemList(req, cb) {
        let resp = new DescribeBaselineItemListResponse();
        this.request("DescribeBaselineItemList", req, resp, cb);
    }

    /**
     * 根据检测项id导出忽略检测项影响主机列表
     * @param {ExportIgnoreRuleEffectHostListRequest} req
     * @param {function(string, ExportIgnoreRuleEffectHostListResponse):void} cb
     * @public
     */
    ExportIgnoreRuleEffectHostList(req, cb) {
        let resp = new ExportIgnoreRuleEffectHostListResponse();
        this.request("ExportIgnoreRuleEffectHostList", req, resp, cb);
    }

    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     * @param {RecoverMalwaresRequest} req
     * @param {function(string, RecoverMalwaresResponse):void} cb
     * @public
     */
    RecoverMalwares(req, cb) {
        let resp = new RecoverMalwaresResponse();
        this.request("RecoverMalwares", req, resp, cb);
    }

    /**
     * 删除反弹Shell规则
     * @param {DeleteReverseShellRulesRequest} req
     * @param {function(string, DeleteReverseShellRulesResponse):void} cb
     * @public
     */
    DeleteReverseShellRules(req, cb) {
        let resp = new DeleteReverseShellRulesResponse();
        this.request("DeleteReverseShellRules", req, resp, cb);
    }

    /**
     * 查询日志检索服务信息
     * @param {DescribeHistoryServiceRequest} req
     * @param {function(string, DescribeHistoryServiceResponse):void} cb
     * @public
     */
    DescribeHistoryService(req, cb) {
        let resp = new DescribeHistoryServiceResponse();
        this.request("DescribeHistoryService", req, resp, cb);
    }

    /**
     * 获取资产管理Web应用列表
     * @param {DescribeAssetWebAppListRequest} req
     * @param {function(string, DescribeAssetWebAppListResponse):void} cb
     * @public
     */
    DescribeAssetWebAppList(req, cb) {
        let resp = new DescribeAssetWebAppListResponse();
        this.request("DescribeAssetWebAppList", req, resp, cb);
    }

    /**
     * 漏洞管理模块，获取近日指定类型的漏洞数量和主机数量
     * @param {DescribeVulCountByDatesRequest} req
     * @param {function(string, DescribeVulCountByDatesResponse):void} cb
     * @public
     */
    DescribeVulCountByDates(req, cb) {
        let resp = new DescribeVulCountByDatesResponse();
        this.request("DescribeVulCountByDates", req, resp, cb);
    }

    /**
     * 查询防护目录关联服务器列表信息
     * @param {DescribeProtectDirRelatedServerRequest} req
     * @param {function(string, DescribeProtectDirRelatedServerResponse):void} cb
     * @public
     */
    DescribeProtectDirRelatedServer(req, cb) {
        let resp = new DescribeProtectDirRelatedServerResponse();
        this.request("DescribeProtectDirRelatedServer", req, resp, cb);
    }

    /**
     * 删除防护网站
     * @param {DeleteProtectDirRequest} req
     * @param {function(string, DeleteProtectDirResponse):void} cb
     * @public
     */
    DeleteProtectDir(req, cb) {
        let resp = new DeleteProtectDirResponse();
        this.request("DeleteProtectDir", req, resp, cb);
    }

    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     * @param {DeleteBruteAttacksRequest} req
     * @param {function(string, DeleteBruteAttacksResponse):void} cb
     * @public
     */
    DeleteBruteAttacks(req, cb) {
        let resp = new DeleteBruteAttacksResponse();
        this.request("DeleteBruteAttacks", req, resp, cb);
    }

    /**
     * 导出高危命令事件
     * @param {ExportBashEventsRequest} req
     * @param {function(string, ExportBashEventsResponse):void} cb
     * @public
     */
    ExportBashEvents(req, cb) {
        let resp = new ExportBashEventsResponse();
        this.request("ExportBashEvents", req, resp, cb);
    }

    /**
     * 根据检测项id与筛选条件查询忽略检测项影响主机列表信息
     * @param {DescribeIgnoreRuleEffectHostListRequest} req
     * @param {function(string, DescribeIgnoreRuleEffectHostListResponse):void} cb
     * @public
     */
    DescribeIgnoreRuleEffectHostList(req, cb) {
        let resp = new DescribeIgnoreRuleEffectHostListResponse();
        this.request("DescribeIgnoreRuleEffectHostList", req, resp, cb);
    }

    /**
     * 导出漏洞影响主机列表
     * @param {ExportVulEffectHostListRequest} req
     * @param {function(string, ExportVulEffectHostListResponse):void} cb
     * @public
     */
    ExportVulEffectHostList(req, cb) {
        let resp = new ExportVulEffectHostListResponse();
        this.request("ExportVulEffectHostList", req, resp, cb);
    }

    /**
     * 查询应用列表
     * @param {DescribeAssetAppListRequest} req
     * @param {function(string, DescribeAssetAppListResponse):void} cb
     * @public
     */
    DescribeAssetAppList(req, cb) {
        let resp = new DescribeAssetAppListResponse();
        this.request("DescribeAssetAppList", req, resp, cb);
    }

    /**
     * 查询网站防篡改概览信息
     * @param {DescribeWebPageGeneralizeRequest} req
     * @param {function(string, DescribeWebPageGeneralizeResponse):void} cb
     * @public
     */
    DescribeWebPageGeneralize(req, cb) {
        let resp = new DescribeWebPageGeneralizeResponse();
        this.request("DescribeWebPageGeneralize", req, resp, cb);
    }

    /**
     * 导出本次漏洞检测Excel
     * @param {ExportVulDetectionExcelRequest} req
     * @param {function(string, ExportVulDetectionExcelResponse):void} cb
     * @public
     */
    ExportVulDetectionExcel(req, cb) {
        let resp = new ExportVulDetectionExcelResponse();
        this.request("ExportVulDetectionExcel", req, resp, cb);
    }

    /**
     * DestroyOrder  该接口可以对资源销毁.
     * @param {DestroyOrderRequest} req
     * @param {function(string, DestroyOrderResponse):void} cb
     * @public
     */
    DestroyOrder(req, cb) {
        let resp = new DestroyOrderResponse();
        this.request("DestroyOrder", req, resp, cb);
    }

    /**
     * 同步资产扫描信息
     * @param {SyncAssetScanRequest} req
     * @param {function(string, SyncAssetScanResponse):void} cb
     * @public
     */
    SyncAssetScan(req, cb) {
        let resp = new SyncAssetScanResponse();
        this.request("SyncAssetScan", req, resp, cb);
    }

    /**
     * 获取ES字段聚合结果
     * @param {DescribeESAggregationsRequest} req
     * @param {function(string, DescribeESAggregationsResponse):void} cb
     * @public
     */
    DescribeESAggregations(req, cb) {
        let resp = new DescribeESAggregationsResponse();
        this.request("DescribeESAggregations", req, resp, cb);
    }

    /**
     * 添加历史搜索记录
     * @param {CreateSearchLogRequest} req
     * @param {function(string, CreateSearchLogResponse):void} cb
     * @public
     */
    CreateSearchLog(req, cb) {
        let resp = new CreateSearchLogResponse();
        this.request("CreateSearchLog", req, resp, cb);
    }

    /**
     * 获取应急漏洞列表
     * @param {DescribeEmergencyVulListRequest} req
     * @param {function(string, DescribeEmergencyVulListResponse):void} cb
     * @public
     */
    DescribeEmergencyVulList(req, cb) {
        let resp = new DescribeEmergencyVulListResponse();
        this.request("DescribeEmergencyVulList", req, resp, cb);
    }

    /**
     * 不再提醒爆破阻断提示弹窗
     * @param {StopNoticeBanTipsRequest} req
     * @param {function(string, StopNoticeBanTipsResponse):void} cb
     * @public
     */
    StopNoticeBanTips(req, cb) {
        let resp = new StopNoticeBanTipsResponse();
        this.request("StopNoticeBanTips", req, resp, cb);
    }

    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        let resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }

    /**
     * 根据任务id查询基线检测进度
     * @param {DescribeBaselineScanScheduleRequest} req
     * @param {function(string, DescribeBaselineScanScheduleResponse):void} cb
     * @public
     */
    DescribeBaselineScanSchedule(req, cb) {
        let resp = new DescribeBaselineScanScheduleResponse();
        this.request("DescribeBaselineScanSchedule", req, resp, cb);
    }

    /**
     * 导出已忽略基线检测项信息
     * @param {ExportIgnoreBaselineRuleRequest} req
     * @param {function(string, ExportIgnoreBaselineRuleResponse):void} cb
     * @public
     */
    ExportIgnoreBaselineRule(req, cb) {
        let resp = new ExportIgnoreBaselineRuleResponse();
        this.request("ExportIgnoreBaselineRule", req, resp, cb);
    }

    /**
     * 打开入侵检测-恶意文件检测,弹出风险预警内容
     * @param {DescribeMalwareRiskWarningRequest} req
     * @param {function(string, DescribeMalwareRiskWarningResponse):void} cb
     * @public
     */
    DescribeMalwareRiskWarning(req, cb) {
        let resp = new DescribeMalwareRiskWarningResponse();
        this.request("DescribeMalwareRiskWarning", req, resp, cb);
    }

    /**
     * 获取本地提权规则列表
     * @param {DescribePrivilegeRulesRequest} req
     * @param {function(string, DescribePrivilegeRulesResponse):void} cb
     * @public
     */
    DescribePrivilegeRules(req, cb) {
        let resp = new DescribePrivilegeRulesResponse();
        this.request("DescribePrivilegeRules", req, resp, cb);
    }

    /**
     * 查询Jar包列表
     * @param {DescribeAssetJarListRequest} req
     * @param {function(string, DescribeAssetJarListResponse):void} cb
     * @public
     */
    DescribeAssetJarList(req, cb) {
        let resp = new DescribeAssetJarListResponse();
        this.request("DescribeAssetJarList", req, resp, cb);
    }

    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     * @param {DeleteNonlocalLoginPlacesRequest} req
     * @param {function(string, DeleteNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DeleteNonlocalLoginPlaces(req, cb) {
        let resp = new DeleteNonlocalLoginPlacesResponse();
        this.request("DeleteNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 获取Web服务关联进程列表
     * @param {DescribeAssetWebServiceProcessListRequest} req
     * @param {function(string, DescribeAssetWebServiceProcessListResponse):void} cb
     * @public
     */
    DescribeAssetWebServiceProcessList(req, cb) {
        let resp = new DescribeAssetWebServiceProcessListResponse();
        this.request("DescribeAssetWebServiceProcessList", req, resp, cb);
    }

    /**
     * 设置阻断开关状态
     * @param {ModifyBanStatusRequest} req
     * @param {function(string, ModifyBanStatusResponse):void} cb
     * @public
     */
    ModifyBanStatus(req, cb) {
        let resp = new ModifyBanStatusResponse();
        this.request("ModifyBanStatus", req, resp, cb);
    }

    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     * @param {ExportMaliciousRequestsRequest} req
     * @param {function(string, ExportMaliciousRequestsResponse):void} cb
     * @public
     */
    ExportMaliciousRequests(req, cb) {
        let resp = new ExportMaliciousRequestsResponse();
        this.request("ExportMaliciousRequests", req, resp, cb);
    }

    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     * @param {DescribeUsualLoginPlacesRequest} req
     * @param {function(string, DescribeUsualLoginPlacesResponse):void} cb
     * @public
     */
    DescribeUsualLoginPlaces(req, cb) {
        let resp = new DescribeUsualLoginPlacesResponse();
        this.request("DescribeUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 获取指定标签关联的服务器信息
     * @param {DescribeTagMachinesRequest} req
     * @param {function(string, DescribeTagMachinesResponse):void} cb
     * @public
     */
    DescribeTagMachines(req, cb) {
        let resp = new DescribeTagMachinesResponse();
        this.request("DescribeTagMachines", req, resp, cb);
    }

    /**
     * 关联机器标签列表
     * @param {UpdateMachineTagsRequest} req
     * @param {function(string, UpdateMachineTagsResponse):void} cb
     * @public
     */
    UpdateMachineTags(req, cb) {
        let resp = new UpdateMachineTagsResponse();
        this.request("UpdateMachineTags", req, resp, cb);
    }

    /**
     *  一键检测
     * @param {ScanVulRequest} req
     * @param {function(string, ScanVulResponse):void} cb
     * @public
     */
    ScanVul(req, cb) {
        let resp = new ScanVulResponse();
        this.request("ScanVul", req, resp, cb);
    }

    /**
     * 导出本地提权事件
     * @param {ExportPrivilegeEventsRequest} req
     * @param {function(string, ExportPrivilegeEventsResponse):void} cb
     * @public
     */
    ExportPrivilegeEvents(req, cb) {
        let resp = new ExportPrivilegeEventsResponse();
        this.request("ExportPrivilegeEvents", req, resp, cb);
    }

    /**
     * 导出网页防篡改防护目录列表
     * @param {ExportProtectDirListRequest} req
     * @param {function(string, ExportProtectDirListResponse):void} cb
     * @public
     */
    ExportProtectDirList(req, cb) {
        let resp = new ExportProtectDirListResponse();
        this.request("ExportProtectDirList", req, resp, cb);
    }

    /**
     * 获取概览统计数据。
     * @param {DescribeOverviewStatisticsRequest} req
     * @param {function(string, DescribeOverviewStatisticsResponse):void} cb
     * @public
     */
    DescribeOverviewStatistics(req, cb) {
        let resp = new DescribeOverviewStatisticsResponse();
        this.request("DescribeOverviewStatistics", req, resp, cb);
    }

    /**
     * 专家服务-可用订单详情
     * @param {DescribeAvailableExpertServiceDetailRequest} req
     * @param {function(string, DescribeAvailableExpertServiceDetailResponse):void} cb
     * @public
     */
    DescribeAvailableExpertServiceDetail(req, cb) {
        let resp = new DescribeAvailableExpertServiceDetailResponse();
        this.request("DescribeAvailableExpertServiceDetail", req, resp, cb);
    }

    /**
     * 获取待处理风险文件数+影响服务器数+是否试用检测+最近检测时间
     * @param {DescribeServersAndRiskAndFirstInfoRequest} req
     * @param {function(string, DescribeServersAndRiskAndFirstInfoResponse):void} cb
     * @public
     */
    DescribeServersAndRiskAndFirstInfo(req, cb) {
        let resp = new DescribeServersAndRiskAndFirstInfoResponse();
        this.request("DescribeServersAndRiskAndFirstInfo", req, resp, cb);
    }

    /**
     * 添加检索模板
     * @param {CreateSearchTemplateRequest} req
     * @param {function(string, CreateSearchTemplateResponse):void} cb
     * @public
     */
    CreateSearchTemplate(req, cb) {
        let resp = new CreateSearchTemplateResponse();
        this.request("CreateSearchTemplate", req, resp, cb);
    }

    /**
     * 资产指纹启动扫描
     * @param {ScanAssetRequest} req
     * @param {function(string, ScanAssetResponse):void} cb
     * @public
     */
    ScanAsset(req, cb) {
        let resp = new ScanAssetResponse();
        this.request("ScanAsset", req, resp, cb);
    }

    /**
     * 对授权管理-订单列表内已过期的订单进行删除.(删除后的订单不在统计范畴内)
     * @param {DeleteLicenseRecordRequest} req
     * @param {function(string, DeleteLicenseRecordResponse):void} cb
     * @public
     */
    DeleteLicenseRecord(req, cb) {
        let resp = new DeleteLicenseRecordResponse();
        this.request("DeleteLicenseRecord", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件动态消息数据。
     * @param {DescribeSecurityDynamicsRequest} req
     * @param {function(string, DescribeSecurityDynamicsResponse):void} cb
     * @public
     */
    DescribeSecurityDynamics(req, cb) {
        let resp = new DescribeSecurityDynamicsResponse();
        this.request("DescribeSecurityDynamics", req, resp, cb);
    }

    /**
     * 获取安全事件统计
     * @param {DescribeSecurityEventStatRequest} req
     * @param {function(string, DescribeSecurityEventStatResponse):void} cb
     * @public
     */
    DescribeSecurityEventStat(req, cb) {
        let resp = new DescribeSecurityEventStatResponse();
        this.request("DescribeSecurityEventStat", req, resp, cb);
    }

    /**
     * 根据Ids删除反弹Shell事件
     * @param {DeleteReverseShellEventsRequest} req
     * @param {function(string, DeleteReverseShellEventsResponse):void} cb
     * @public
     */
    DeleteReverseShellEvents(req, cb) {
        let resp = new DeleteReverseShellEventsResponse();
        this.request("DeleteReverseShellEvents", req, resp, cb);
    }

    /**
     * 获取主机账号详情
     * @param {DescribeAssetUserInfoRequest} req
     * @param {function(string, DescribeAssetUserInfoResponse):void} cb
     * @public
     */
    DescribeAssetUserInfo(req, cb) {
        let resp = new DescribeAssetUserInfoResponse();
        this.request("DescribeAssetUserInfo", req, resp, cb);
    }

    /**
     * 取消漏洞忽略
     * @param {CancelIgnoreVulRequest} req
     * @param {function(string, CancelIgnoreVulResponse):void} cb
     * @public
     */
    CancelIgnoreVul(req, cb) {
        let resp = new CancelIgnoreVulResponse();
        this.request("CancelIgnoreVul", req, resp, cb);
    }

    /**
     * 删除本地提权规则
     * @param {DeletePrivilegeRulesRequest} req
     * @param {function(string, DeletePrivilegeRulesResponse):void} cb
     * @public
     */
    DeletePrivilegeRules(req, cb) {
        let resp = new DeletePrivilegeRulesResponse();
        this.request("DeletePrivilegeRules", req, resp, cb);
    }

    /**
     * 导出资产管理内核模块列表
     * @param {ExportAssetCoreModuleListRequest} req
     * @param {function(string, ExportAssetCoreModuleListResponse):void} cb
     * @public
     */
    ExportAssetCoreModuleList(req, cb) {
        let resp = new ExportAssetCoreModuleListResponse();
        this.request("ExportAssetCoreModuleList", req, resp, cb);
    }

    /**
     * 漏洞数量等级分布统计
     * @param {DescribeVulLevelCountRequest} req
     * @param {function(string, DescribeVulLevelCountResponse):void} cb
     * @public
     */
    DescribeVulLevelCount(req, cb) {
        let resp = new DescribeVulLevelCountResponse();
        this.request("DescribeVulLevelCount", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     * @param {DeleteMalwaresRequest} req
     * @param {function(string, DeleteMalwaresResponse):void} cb
     * @public
     */
    DeleteMalwares(req, cb) {
        let resp = new DeleteMalwaresResponse();
        this.request("DeleteMalwares", req, resp, cb);
    }

    /**
     * 用于异步导出数据量大的日志文件
     * @param {ExportTasksRequest} req
     * @param {function(string, ExportTasksResponse):void} cb
     * @public
     */
    ExportTasks(req, cb) {
        let resp = new ExportTasksResponse();
        this.request("ExportTasks", req, resp, cb);
    }

    /**
     * 用于网页防篡改获取区域主机列表。
     * @param {DescribeMachineListRequest} req
     * @param {function(string, DescribeMachineListResponse):void} cb
     * @public
     */
    DescribeMachineList(req, cb) {
        let resp = new DescribeMachineListResponse();
        this.request("DescribeMachineList", req, resp, cb);
    }

    /**
     * 修改网站防护设置
     * @param {ModifyWebPageProtectSettingRequest} req
     * @param {function(string, ModifyWebPageProtectSettingResponse):void} cb
     * @public
     */
    ModifyWebPageProtectSetting(req, cb) {
        let resp = new ModifyWebPageProtectSettingResponse();
        this.request("ModifyWebPageProtectSetting", req, resp, cb);
    }

    /**
     * 获取登录审计列表
     * @param {DescribeHostLoginListRequest} req
     * @param {function(string, DescribeHostLoginListResponse):void} cb
     * @public
     */
    DescribeHostLoginList(req, cb) {
        let resp = new DescribeHostLoginListResponse();
        this.request("DescribeHostLoginList", req, resp, cb);
    }

    /**
     * 本接口用于删除异地登录白名单规则。
     * @param {DeleteLoginWhiteListRequest} req
     * @param {function(string, DeleteLoginWhiteListResponse):void} cb
     * @public
     */
    DeleteLoginWhiteList(req, cb) {
        let resp = new DeleteLoginWhiteListResponse();
        this.request("DeleteLoginWhiteList", req, resp, cb);
    }

    /**
     * 获取当前用户告警列表
     * @param {DescribeWarningListRequest} req
     * @param {function(string, DescribeWarningListResponse):void} cb
     * @public
     */
    DescribeWarningList(req, cb) {
        let resp = new DescribeWarningListResponse();
        this.request("DescribeWarningList", req, resp, cb);
    }

    /**
     * 根据基线策略id更新策略信息
     * @param {UpdateBaselineStrategyRequest} req
     * @param {function(string, UpdateBaselineStrategyResponse):void} cb
     * @public
     */
    UpdateBaselineStrategy(req, cb) {
        let resp = new UpdateBaselineStrategyResponse();
        this.request("UpdateBaselineStrategy", req, resp, cb);
    }

    /**
     * 修改主机备注信息
     * @param {ModifyMachineRemarkRequest} req
     * @param {function(string, ModifyMachineRemarkResponse):void} cb
     * @public
     */
    ModifyMachineRemark(req, cb) {
        let resp = new ModifyMachineRemarkResponse();
        this.request("ModifyMachineRemark", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     * @param {DescribeAccountStatisticsRequest} req
     * @param {function(string, DescribeAccountStatisticsResponse):void} cb
     * @public
     */
    DescribeAccountStatistics(req, cb) {
        let resp = new DescribeAccountStatisticsResponse();
        this.request("DescribeAccountStatistics", req, resp, cb);
    }

    /**
     * 本接口 (DescribeExportMachines) 用于导出区域主机列表。
     * @param {DescribeExportMachinesRequest} req
     * @param {function(string, DescribeExportMachinesResponse):void} cb
     * @public
     */
    DescribeExportMachines(req, cb) {
        let resp = new DescribeExportMachinesResponse();
        this.request("DescribeExportMachines", req, resp, cb);
    }

    /**
     * 获取机器地域列表
     * @param {DescribeMachineRegionsRequest} req
     * @param {function(string, DescribeMachineRegionsResponse):void} cb
     * @public
     */
    DescribeMachineRegions(req, cb) {
        let resp = new DescribeMachineRegionsResponse();
        this.request("DescribeMachineRegions", req, resp, cb);
    }

    /**
     * 获取资产管理主机资源详细信息
     * @param {DescribeAssetMachineDetailRequest} req
     * @param {function(string, DescribeAssetMachineDetailResponse):void} cb
     * @public
     */
    DescribeAssetMachineDetail(req, cb) {
        let resp = new DescribeAssetMachineDetailResponse();
        this.request("DescribeAssetMachineDetail", req, resp, cb);
    }

    /**
     * 导出风险趋势
     * @param {ExportSecurityTrendsRequest} req
     * @param {function(string, ExportSecurityTrendsResponse):void} cb
     * @public
     */
    ExportSecurityTrends(req, cb) {
        let resp = new ExportSecurityTrendsResponse();
        this.request("ExportSecurityTrends", req, resp, cb);
    }

    /**
     * 查询资产管理内核模块列表
     * @param {DescribeAssetCoreModuleListRequest} req
     * @param {function(string, DescribeAssetCoreModuleListResponse):void} cb
     * @public
     */
    DescribeAssetCoreModuleList(req, cb) {
        let resp = new DescribeAssetCoreModuleListResponse();
        this.request("DescribeAssetCoreModuleList", req, resp, cb);
    }

    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     * @param {DescribeOpenPortStatisticsRequest} req
     * @param {function(string, DescribeOpenPortStatisticsResponse):void} cb
     * @public
     */
    DescribeOpenPortStatistics(req, cb) {
        let resp = new DescribeOpenPortStatisticsResponse();
        this.request("DescribeOpenPortStatistics", req, resp, cb);
    }

    /**
     * 更新或者插入用户告警设置(该接口废弃,请调用 ModifyWarningSetting )
     * @param {DescribeSaveOrUpdateWarningsRequest} req
     * @param {function(string, DescribeSaveOrUpdateWarningsResponse):void} cb
     * @public
     */
    DescribeSaveOrUpdateWarnings(req, cb) {
        let resp = new DescribeSaveOrUpdateWarningsResponse();
        this.request("DescribeSaveOrUpdateWarnings", req, resp, cb);
    }

    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     * @param {ExportBruteAttacksRequest} req
     * @param {function(string, ExportBruteAttacksResponse):void} cb
     * @public
     */
    ExportBruteAttacks(req, cb) {
        let resp = new ExportBruteAttacksResponse();
        this.request("ExportBruteAttacks", req, resp, cb);
    }

    /**
     * 修改爆破阻断模式
     * @param {ModifyBanModeRequest} req
     * @param {function(string, ModifyBanModeResponse):void} cb
     * @public
     */
    ModifyBanMode(req, cb) {
        let resp = new ModifyBanModeResponse();
        this.request("ModifyBanMode", req, resp, cb);
    }

    /**
     * 创建/修改网站防护目录
     * @param {ModifyWebPageProtectDirRequest} req
     * @param {function(string, ModifyWebPageProtectDirResponse):void} cb
     * @public
     */
    ModifyWebPageProtectDir(req, cb) {
        let resp = new ModifyWebPageProtectDirResponse();
        this.request("ModifyWebPageProtectDir", req, resp, cb);
    }

    /**
     * 根据任务id导出指定扫描任务详情 
     * @param {ExportScanTaskDetailsRequest} req
     * @param {function(string, ExportScanTaskDetailsResponse):void} cb
     * @public
     */
    ExportScanTaskDetails(req, cb) {
        let resp = new ExportScanTaskDetailsResponse();
        this.request("ExportScanTaskDetails", req, resp, cb);
    }

    /**
     * 查询恶意请求白名单列表
     * @param {DescribeMaliciousRequestWhiteListRequest} req
     * @param {function(string, DescribeMaliciousRequestWhiteListResponse):void} cb
     * @public
     */
    DescribeMaliciousRequestWhiteList(req, cb) {
        let resp = new DescribeMaliciousRequestWhiteListResponse();
        this.request("DescribeMaliciousRequestWhiteList", req, resp, cb);
    }

    /**
     * 获取账号列表
     * @param {DescribeAssetUserListRequest} req
     * @param {function(string, DescribeAssetUserListResponse):void} cb
     * @public
     */
    DescribeAssetUserList(req, cb) {
        let resp = new DescribeAssetUserListResponse();
        this.request("DescribeAssetUserList", req, resp, cb);
    }

    /**
     * 根据基线策略id查询策略详情
     * @param {DescribeBaselineStrategyDetailRequest} req
     * @param {function(string, DescribeBaselineStrategyDetailResponse):void} cb
     * @public
     */
    DescribeBaselineStrategyDetail(req, cb) {
        let resp = new DescribeBaselineStrategyDetailResponse();
        this.request("DescribeBaselineStrategyDetail", req, resp, cb);
    }

    /**
     * 更改基线策略设置
     * @param {ModifyBaselinePolicyRequest} req
     * @param {function(string, ModifyBaselinePolicyResponse):void} cb
     * @public
     */
    ModifyBaselinePolicy(req, cb) {
        let resp = new ModifyBaselinePolicyResponse();
        this.request("ModifyBaselinePolicy", req, resp, cb);
    }

    /**
     * 获取Web站点详情
     * @param {DescribeAssetWebLocationInfoRequest} req
     * @param {function(string, DescribeAssetWebLocationInfoResponse):void} cb
     * @public
     */
    DescribeAssetWebLocationInfo(req, cb) {
        let resp = new DescribeAssetWebLocationInfoResponse();
        this.request("DescribeAssetWebLocationInfo", req, resp, cb);
    }

    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     * @param {UntrustMalwaresRequest} req
     * @param {function(string, UntrustMalwaresResponse):void} cb
     * @public
     */
    UntrustMalwares(req, cb) {
        let resp = new UntrustMalwaresResponse();
        this.request("UntrustMalwares", req, resp, cb);
    }

    /**
     * 获取基线策略列表
     * @param {DescribeBaselinePolicyListRequest} req
     * @param {function(string, DescribeBaselinePolicyListResponse):void} cb
     * @public
     */
    DescribeBaselinePolicyList(req, cb) {
        let resp = new DescribeBaselinePolicyListResponse();
        this.request("DescribeBaselinePolicyList", req, resp, cb);
    }

    /**
     * 网页防篡改防护目录列表
     * @param {DescribeProtectDirListRequest} req
     * @param {function(string, DescribeProtectDirListResponse):void} cb
     * @public
     */
    DescribeProtectDirList(req, cb) {
        let resp = new DescribeProtectDirListResponse();
        this.request("DescribeProtectDirList", req, resp, cb);
    }

    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     * @param {ExportMalwaresRequest} req
     * @param {function(string, ExportMalwaresResponse):void} cb
     * @public
     */
    ExportMalwares(req, cb) {
        let resp = new ExportMalwaresResponse();
        this.request("ExportMalwares", req, resp, cb);
    }

    /**
     * 获取Jar包详情
     * @param {DescribeAssetJarInfoRequest} req
     * @param {function(string, DescribeAssetJarInfoResponse):void} cb
     * @public
     */
    DescribeAssetJarInfo(req, cb) {
        let resp = new DescribeAssetJarInfoResponse();
        this.request("DescribeAssetJarInfo", req, resp, cb);
    }

    /**
     * 导出篡改事件列表
     * @param {ExportWebPageEventListRequest} req
     * @param {function(string, ExportWebPageEventListResponse):void} cb
     * @public
     */
    ExportWebPageEventList(req, cb) {
        let resp = new ExportWebPageEventListResponse();
        this.request("ExportWebPageEventList", req, resp, cb);
    }

    /**
     * 获取密码破解列表
     * @param {DescribeBruteAttackListRequest} req
     * @param {function(string, DescribeBruteAttackListResponse):void} cb
     * @public
     */
    DescribeBruteAttackList(req, cb) {
        let resp = new DescribeBruteAttackListResponse();
        this.request("DescribeBruteAttackList", req, resp, cb);
    }

    /**
     * 查询资产管理数据库列表
     * @param {DescribeAssetDatabaseListRequest} req
     * @param {function(string, DescribeAssetDatabaseListResponse):void} cb
     * @public
     */
    DescribeAssetDatabaseList(req, cb) {
        let resp = new DescribeAssetDatabaseListResponse();
        this.request("DescribeAssetDatabaseList", req, resp, cb);
    }

    /**
     * 漏洞影响主机列表
     * @param {DescribeVulEffectHostListRequest} req
     * @param {function(string, DescribeVulEffectHostListResponse):void} cb
     * @public
     */
    DescribeVulEffectHostList(req, cb) {
        let resp = new DescribeVulEffectHostListResponse();
        this.request("DescribeVulEffectHostList", req, resp, cb);
    }

    /**
     * 删除基线策略配置
     * @param {DeleteBaselinePolicyRequest} req
     * @param {function(string, DeleteBaselinePolicyResponse):void} cb
     * @public
     */
    DeleteBaselinePolicy(req, cb) {
        let resp = new DeleteBaselinePolicyResponse();
        this.request("DeleteBaselinePolicy", req, resp, cb);
    }

    /**
     * DescribeScanTaskStatus 查询机器扫描状态列表用于过滤筛选
     * @param {DescribeScanTaskStatusRequest} req
     * @param {function(string, DescribeScanTaskStatusResponse):void} cb
     * @public
     */
    DescribeScanTaskStatus(req, cb) {
        let resp = new DescribeScanTaskStatusResponse();
        this.request("DescribeScanTaskStatus", req, resp, cb);
    }

    /**
     * CreateLicenseOrder 该接口可以创建专业版/旗舰版订单
支持预付费后付费创建
后付费订单直接创建成功
预付费订单仅下单不支付,需要调用计费支付接口进行支付
     * @param {CreateLicenseOrderRequest} req
     * @param {function(string, CreateLicenseOrderResponse):void} cb
     * @public
     */
    CreateLicenseOrder(req, cb) {
        let resp = new CreateLicenseOrderResponse();
        this.request("CreateLicenseOrder", req, resp, cb);
    }

    /**
     * 导出授权列表对应的绑定信息
     * @param {ExportLicenseDetailRequest} req
     * @param {function(string, ExportLicenseDetailResponse):void} cb
     * @public
     */
    ExportLicenseDetail(req, cb) {
        let resp = new ExportLicenseDetailResponse();
        this.request("ExportLicenseDetail", req, resp, cb);
    }

    /**
     * 获取快速检索列表
     * @param {DescribeSearchTemplatesRequest} req
     * @param {function(string, DescribeSearchTemplatesResponse):void} cb
     * @public
     */
    DescribeSearchTemplates(req, cb) {
        let resp = new DescribeSearchTemplatesResponse();
        this.request("DescribeSearchTemplates", req, resp, cb);
    }

    /**
     * 专家服务-应急响应列表
     * @param {DescribeEmergencyResponseListRequest} req
     * @param {function(string, DescribeEmergencyResponseListResponse):void} cb
     * @public
     */
    DescribeEmergencyResponseList(req, cb) {
        let resp = new DescribeEmergencyResponseListResponse();
        this.request("DescribeEmergencyResponseList", req, resp, cb);
    }

    /**
     * 导出资产管理Web服务列表
     * @param {ExportAssetWebServiceInfoListRequest} req
     * @param {function(string, ExportAssetWebServiceInfoListResponse):void} cb
     * @public
     */
    ExportAssetWebServiceInfoList(req, cb) {
        let resp = new ExportAssetWebServiceInfoListResponse();
        this.request("ExportAssetWebServiceInfoList", req, resp, cb);
    }

    /**
     * 漏洞管理-重新检测接口
     * @param {ScanVulAgainRequest} req
     * @param {function(string, ScanVulAgainResponse):void} cb
     * @public
     */
    ScanVulAgain(req, cb) {
        let resp = new ScanVulAgainResponse();
        this.request("ScanVulAgain", req, resp, cb);
    }

    /**
     * 查询一个用户下的基线策略信息
     * @param {DescribeBaselineStrategyListRequest} req
     * @param {function(string, DescribeBaselineStrategyListResponse):void} cb
     * @public
     */
    DescribeBaselineStrategyList(req, cb) {
        let resp = new DescribeBaselineStrategyListResponse();
        this.request("DescribeBaselineStrategyList", req, resp, cb);
    }

    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     * @param {SeparateMalwaresRequest} req
     * @param {function(string, SeparateMalwaresResponse):void} cb
     * @public
     */
    SeparateMalwares(req, cb) {
        let resp = new SeparateMalwaresResponse();
        this.request("SeparateMalwares", req, resp, cb);
    }

    /**
     * 导出基线影响主机列表
     * @param {ExportBaselineEffectHostListRequest} req
     * @param {function(string, ExportBaselineEffectHostListResponse):void} cb
     * @public
     */
    ExportBaselineEffectHostList(req, cb) {
        let resp = new ExportBaselineEffectHostListResponse();
        this.request("ExportBaselineEffectHostList", req, resp, cb);
    }

    /**
     * 查询木马扫描进度
     * @param {DescribeScanMalwareScheduleRequest} req
     * @param {function(string, DescribeScanMalwareScheduleResponse):void} cb
     * @public
     */
    DescribeScanMalwareSchedule(req, cb) {
        let resp = new DescribeScanMalwareScheduleResponse();
        this.request("DescribeScanMalwareSchedule", req, resp, cb);
    }

    /**
     * 根据基线id查询下属检测项信息
     * @param {DescribeBaselineRuleRequest} req
     * @param {function(string, DescribeBaselineRuleResponse):void} cb
     * @public
     */
    DescribeBaselineRule(req, cb) {
        let resp = new DescribeBaselineRuleResponse();
        this.request("DescribeBaselineRule", req, resp, cb);
    }

    /**
     * 获取高危命令列表(新)
     * @param {DescribeBashEventsNewRequest} req
     * @param {function(string, DescribeBashEventsNewResponse):void} cb
     * @public
     */
    DescribeBashEventsNew(req, cb) {
        let resp = new DescribeBashEventsNewResponse();
        this.request("DescribeBashEventsNew", req, resp, cb);
    }

    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     * @param {ExportNonlocalLoginPlacesRequest} req
     * @param {function(string, ExportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    ExportNonlocalLoginPlaces(req, cb) {
        let resp = new ExportNonlocalLoginPlacesResponse();
        this.request("ExportNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 获取资产指纹页面的资源监控列表
     * @param {DescribeAssetMachineListRequest} req
     * @param {function(string, DescribeAssetMachineListResponse):void} cb
     * @public
     */
    DescribeAssetMachineList(req, cb) {
        let resp = new DescribeAssetMachineListResponse();
        this.request("DescribeAssetMachineList", req, resp, cb);
    }

    /**
     * 获取阻断按钮状态
     * @param {DescribeBanStatusRequest} req
     * @param {function(string, DescribeBanStatusResponse):void} cb
     * @public
     */
    DescribeBanStatus(req, cb) {
        let resp = new DescribeBanStatusResponse();
        this.request("DescribeBanStatus", req, resp, cb);
    }

    /**
     * 获取异地登录白名单合并后列表
     * @param {DescribeLoginWhiteCombinedListRequest} req
     * @param {function(string, DescribeLoginWhiteCombinedListResponse):void} cb
     * @public
     */
    DescribeLoginWhiteCombinedList(req, cb) {
        let resp = new DescribeLoginWhiteCombinedListResponse();
        this.request("DescribeLoginWhiteCombinedList", req, resp, cb);
    }

    /**
     * 根据策略id查询基线检测项TOP
     * @param {DescribeBaselineTopRequest} req
     * @param {function(string, DescribeBaselineTopResponse):void} cb
     * @public
     */
    DescribeBaselineTop(req, cb) {
        let resp = new DescribeBaselineTopResponse();
        this.request("DescribeBaselineTop", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     * @param {DescribeProcessStatisticsRequest} req
     * @param {function(string, DescribeProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProcessStatistics(req, cb) {
        let resp = new DescribeProcessStatisticsResponse();
        this.request("DescribeProcessStatistics", req, resp, cb);
    }

    /**
     * 获取主机所有资源数量
     * @param {DescribeAssetHostTotalCountRequest} req
     * @param {function(string, DescribeAssetHostTotalCountResponse):void} cb
     * @public
     */
    DescribeAssetHostTotalCount(req, cb) {
        let resp = new DescribeAssetHostTotalCountResponse();
        this.request("DescribeAssetHostTotalCount", req, resp, cb);
    }

    /**
     * 获取Web站点列表
     * @param {DescribeAssetWebLocationListRequest} req
     * @param {function(string, DescribeAssetWebLocationListResponse):void} cb
     * @public
     */
    DescribeAssetWebLocationList(req, cb) {
        let resp = new DescribeAssetWebLocationListResponse();
        this.request("DescribeAssetWebLocationList", req, resp, cb);
    }

    /**
     * 获取软件关联进程列表
     * @param {DescribeAssetAppProcessListRequest} req
     * @param {function(string, DescribeAssetAppProcessListResponse):void} cb
     * @public
     */
    DescribeAssetAppProcessList(req, cb) {
        let resp = new DescribeAssetAppProcessListResponse();
        this.request("DescribeAssetAppProcessList", req, resp, cb);
    }

    /**
     * 删除高危命令规则
     * @param {DeleteBashRulesRequest} req
     * @param {function(string, DeleteBashRulesResponse):void} cb
     * @public
     */
    DeleteBashRules(req, cb) {
        let resp = new DeleteBashRulesResponse();
        this.request("DeleteBashRules", req, resp, cb);
    }

    /**
     * 获取资产管理进程列表
     * @param {DescribeAssetProcessInfoListRequest} req
     * @param {function(string, DescribeAssetProcessInfoListResponse):void} cb
     * @public
     */
    DescribeAssetProcessInfoList(req, cb) {
        let resp = new DescribeAssetProcessInfoListResponse();
        this.request("DescribeAssetProcessInfoList", req, resp, cb);
    }

    /**
     * 获取反弹Shell列表
     * @param {DescribeReverseShellEventsRequest} req
     * @param {function(string, DescribeReverseShellEventsResponse):void} cb
     * @public
     */
    DescribeReverseShellEvents(req, cb) {
        let resp = new DescribeReverseShellEventsResponse();
        this.request("DescribeReverseShellEvents", req, resp, cb);
    }

    /**
     * 修改暴力破解规则
     * @param {ModifyBruteAttackRulesRequest} req
     * @param {function(string, ModifyBruteAttackRulesResponse):void} cb
     * @public
     */
    ModifyBruteAttackRules(req, cb) {
        let resp = new ModifyBruteAttackRulesResponse();
        this.request("ModifyBruteAttackRules", req, resp, cb);
    }

    /**
     *  用于设置新增主机自动开通专业防护配置。
     * @param {ModifyAutoOpenProVersionConfigRequest} req
     * @param {function(string, ModifyAutoOpenProVersionConfigResponse):void} cb
     * @public
     */
    ModifyAutoOpenProVersionConfig(req, cb) {
        let resp = new ModifyAutoOpenProVersionConfigResponse();
        this.request("ModifyAutoOpenProVersionConfig", req, resp, cb);
    }

    /**
     * 查询定时扫描配置
     * @param {DescribeMalwareTimingScanSettingRequest} req
     * @param {function(string, DescribeMalwareTimingScanSettingResponse):void} cb
     * @public
     */
    DescribeMalwareTimingScanSetting(req, cb) {
        let resp = new DescribeMalwareTimingScanSettingResponse();
        this.request("DescribeMalwareTimingScanSetting", req, resp, cb);
    }

    /**
     * 获取主机最近趋势情况
     * @param {DescribeAssetRecentMachineInfoRequest} req
     * @param {function(string, DescribeAssetRecentMachineInfoResponse):void} cb
     * @public
     */
    DescribeAssetRecentMachineInfo(req, cb) {
        let resp = new DescribeAssetRecentMachineInfoResponse();
        this.request("DescribeAssetRecentMachineInfo", req, resp, cb);
    }

    /**
     * 入侵管理-终止扫描任务
     * @param {DeleteMalwareScanTaskRequest} req
     * @param {function(string, DeleteMalwareScanTaskResponse):void} cb
     * @public
     */
    DeleteMalwareScanTask(req, cb) {
        let resp = new DeleteMalwareScanTaskResponse();
        this.request("DeleteMalwareScanTask", req, resp, cb);
    }

    /**
     * 漏洞top统计
     * @param {DescribeVulTopRequest} req
     * @param {function(string, DescribeVulTopResponse):void} cb
     * @public
     */
    DescribeVulTop(req, cb) {
        let resp = new DescribeVulTopResponse();
        this.request("DescribeVulTop", req, resp, cb);
    }

    /**
     * 修改告警设置
     * @param {ModifyWarningSettingRequest} req
     * @param {function(string, ModifyWarningSettingResponse):void} cb
     * @public
     */
    ModifyWarningSetting(req, cb) {
        let resp = new ModifyWarningSettingResponse();
        this.request("ModifyWarningSetting", req, resp, cb);
    }

    /**
     * 获取待处理漏洞数+影响主机数
     * @param {DescribeVulHostCountScanTimeRequest} req
     * @param {function(string, DescribeVulHostCountScanTimeResponse):void} cb
     * @public
     */
    DescribeVulHostCountScanTime(req, cb) {
        let resp = new DescribeVulHostCountScanTimeResponse();
        this.request("DescribeVulHostCountScanTime", req, resp, cb);
    }

    /**
     * 获取爆破破解规则
     * @param {DescribeBruteAttackRulesRequest} req
     * @param {function(string, DescribeBruteAttackRulesResponse):void} cb
     * @public
     */
    DescribeBruteAttackRules(req, cb) {
        let resp = new DescribeBruteAttackRulesResponse();
        this.request("DescribeBruteAttackRules", req, resp, cb);
    }

    /**
     * 设置中心-授权管理 对某个授权批量绑定机器
     * @param {ModifyLicenseBindsRequest} req
     * @param {function(string, ModifyLicenseBindsResponse):void} cb
     * @public
     */
    ModifyLicenseBinds(req, cb) {
        let resp = new ModifyLicenseBindsResponse();
        this.request("ModifyLicenseBinds", req, resp, cb);
    }

    /**
     * 定期扫描漏洞设置
     * @param {ScanVulSettingRequest} req
     * @param {function(string, ScanVulSettingResponse):void} cb
     * @public
     */
    ScanVulSetting(req, cb) {
        let resp = new ScanVulSettingResponse();
        this.request("ScanVulSetting", req, resp, cb);
    }

    /**
     * 查询资产管理环境变量列表
     * @param {DescribeAssetEnvListRequest} req
     * @param {function(string, DescribeAssetEnvListResponse):void} cb
     * @public
     */
    DescribeAssetEnvList(req, cb) {
        let resp = new DescribeAssetEnvListResponse();
        this.request("DescribeAssetEnvList", req, resp, cb);
    }

    /**
     * 创建应急漏洞扫描任务
     * @param {CreateEmergencyVulScanRequest} req
     * @param {function(string, CreateEmergencyVulScanResponse):void} cb
     * @public
     */
    CreateEmergencyVulScan(req, cb) {
        let resp = new CreateEmergencyVulScanResponse();
        this.request("CreateEmergencyVulScan", req, resp, cb);
    }

    /**
     * 获取安全概览相关事件统计数据接口
     * @param {DescribeSecurityEventsCntRequest} req
     * @param {function(string, DescribeSecurityEventsCntResponse):void} cb
     * @public
     */
    DescribeSecurityEventsCnt(req, cb) {
        let resp = new DescribeSecurityEventsCntResponse();
        this.request("DescribeSecurityEventsCnt", req, resp, cb);
    }

    /**
     * 获取本地提权事件列表
     * @param {DescribePrivilegeEventsRequest} req
     * @param {function(string, DescribePrivilegeEventsResponse):void} cb
     * @public
     */
    DescribePrivilegeEvents(req, cb) {
        let resp = new DescribePrivilegeEventsResponse();
        this.request("DescribePrivilegeEvents", req, resp, cb);
    }

    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     * @param {DescribeMachineInfoRequest} req
     * @param {function(string, DescribeMachineInfoResponse):void} cb
     * @public
     */
    DescribeMachineInfo(req, cb) {
        let resp = new DescribeMachineInfoResponse();
        this.request("DescribeMachineInfo", req, resp, cb);
    }

    /**
     * 切换高危命令规则状态
     * @param {SwitchBashRulesRequest} req
     * @param {function(string, SwitchBashRulesResponse):void} cb
     * @public
     */
    SwitchBashRules(req, cb) {
        let resp = new SwitchBashRulesResponse();
        this.request("SwitchBashRules", req, resp, cb);
    }

    /**
     * 查询可筛选操作系统列表.
     * @param {DescribeMachineOsListRequest} req
     * @param {function(string, DescribeMachineOsListResponse):void} cb
     * @public
     */
    DescribeMachineOsList(req, cb) {
        let resp = new DescribeMachineOsListResponse();
        this.request("DescribeMachineOsList", req, resp, cb);
    }

    /**
     * 获取阻断白名单列表
     * @param {DescribeBanWhiteListRequest} req
     * @param {function(string, DescribeBanWhiteListResponse):void} cb
     * @public
     */
    DescribeBanWhiteList(req, cb) {
        let resp = new DescribeBanWhiteListResponse();
        this.request("DescribeBanWhiteList", req, resp, cb);
    }

    /**
     * 获取日志检索容量使用统计
     * @param {DescribeLogStorageStatisticRequest} req
     * @param {function(string, DescribeLogStorageStatisticResponse):void} cb
     * @public
     */
    DescribeLogStorageStatistic(req, cb) {
        let resp = new DescribeLogStorageStatisticResponse();
        this.request("DescribeLogStorageStatistic", req, resp, cb);
    }

    /**
     * 获取网络攻击威胁类型列表
     * @param {DescribeAttackVulTypeListRequest} req
     * @param {function(string, DescribeAttackVulTypeListResponse):void} cb
     * @public
     */
    DescribeAttackVulTypeList(req, cb) {
        let resp = new DescribeAttackVulTypeListResponse();
        this.request("DescribeAttackVulTypeList", req, resp, cb);
    }

    /**
     * 同步基线检测进度概要
     * @param {SyncBaselineDetectSummaryRequest} req
     * @param {function(string, SyncBaselineDetectSummaryResponse):void} cb
     * @public
     */
    SyncBaselineDetectSummary(req, cb) {
        let resp = new SyncBaselineDetectSummaryResponse();
        this.request("SyncBaselineDetectSummary", req, resp, cb);
    }

    /**
     * 获取异地登录白名单列表
     * @param {DescribeLoginWhiteListRequest} req
     * @param {function(string, DescribeLoginWhiteListResponse):void} cb
     * @public
     */
    DescribeLoginWhiteList(req, cb) {
        let resp = new DescribeLoginWhiteListResponse();
        this.request("DescribeLoginWhiteList", req, resp, cb);
    }

    /**
     * 查询已经忽略的检测项信息
     * @param {DescribeIgnoreBaselineRuleRequest} req
     * @param {function(string, DescribeIgnoreBaselineRuleResponse):void} cb
     * @public
     */
    DescribeIgnoreBaselineRule(req, cb) {
        let resp = new DescribeIgnoreBaselineRuleResponse();
        this.request("DescribeIgnoreBaselineRule", req, resp, cb);
    }

    /**
     * 查询授权绑定任务的进度
     * @param {DescribeLicenseBindScheduleRequest} req
     * @param {function(string, DescribeLicenseBindScheduleResponse):void} cb
     * @public
     */
    DescribeLicenseBindSchedule(req, cb) {
        let resp = new DescribeLicenseBindScheduleResponse();
        this.request("DescribeLicenseBindSchedule", req, resp, cb);
    }

    /**
     * 根据基线id查询基线详情接口
     * @param {DescribeBaselineDetailRequest} req
     * @param {function(string, DescribeBaselineDetailResponse):void} cb
     * @public
     */
    DescribeBaselineDetail(req, cb) {
        let resp = new DescribeBaselineDetailResponse();
        this.request("DescribeBaselineDetail", req, resp, cb);
    }

    /**
     * 获取基线检测项的列表
     * @param {DescribeBaselineItemDetectListRequest} req
     * @param {function(string, DescribeBaselineItemDetectListResponse):void} cb
     * @public
     */
    DescribeBaselineItemDetectList(req, cb) {
        let resp = new DescribeBaselineItemDetectListResponse();
        this.request("DescribeBaselineItemDetectList", req, resp, cb);
    }

    /**
     * 网站防篡改-查询动态防护信息
     * @param {DescribeWebPageProtectStatRequest} req
     * @param {function(string, DescribeWebPageProtectStatResponse):void} cb
     * @public
     */
    DescribeWebPageProtectStat(req, cb) {
        let resp = new DescribeWebPageProtectStatResponse();
        this.request("DescribeWebPageProtectStat", req, resp, cb);
    }

    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     * @param {DescribeHistoryAccountsRequest} req
     * @param {function(string, DescribeHistoryAccountsResponse):void} cb
     * @public
     */
    DescribeHistoryAccounts(req, cb) {
        let resp = new DescribeHistoryAccountsResponse();
        this.request("DescribeHistoryAccounts", req, resp, cb);
    }

    /**
     * 添加网站防护服务器
     * @param {CreateProtectServerRequest} req
     * @param {function(string, CreateProtectServerResponse):void} cb
     * @public
     */
    CreateProtectServer(req, cb) {
        let resp = new CreateProtectServerResponse();
        this.request("CreateProtectServer", req, resp, cb);
    }

    /**
     * DescribeScanState 该接口能查询对应模块正在进行的扫描任务状态
     * @param {DescribeScanStateRequest} req
     * @param {function(string, DescribeScanStateResponse):void} cb
     * @public
     */
    DescribeScanState(req, cb) {
        let resp = new DescribeScanStateResponse();
        this.request("DescribeScanState", req, resp, cb);
    }

    /**
     * 根据基线策略id删除策略
     * @param {DeleteBaselineStrategyRequest} req
     * @param {function(string, DeleteBaselineStrategyResponse):void} cb
     * @public
     */
    DeleteBaselineStrategy(req, cb) {
        let resp = new DeleteBaselineStrategyResponse();
        this.request("DeleteBaselineStrategy", req, resp, cb);
    }

    /**
     * 获取服务器风险top列表
     * @param {DescribeVulHostTopRequest} req
     * @param {function(string, DescribeVulHostTopResponse):void} cb
     * @public
     */
    DescribeVulHostTop(req, cb) {
        let resp = new DescribeVulHostTopResponse();
        this.request("DescribeVulHostTop", req, resp, cb);
    }

    /**
     * 设置中心-授权管理 对某个授权批量解绑机器
     * @param {ModifyLicenseUnBindsRequest} req
     * @param {function(string, ModifyLicenseUnBindsResponse):void} cb
     * @public
     */
    ModifyLicenseUnBinds(req, cb) {
        let resp = new ModifyLicenseUnBindsResponse();
        this.request("ModifyLicenseUnBinds", req, resp, cb);
    }

    /**
     * 查看恶意文件详情
     * @param {DescribeMalwareInfoRequest} req
     * @param {function(string, DescribeMalwareInfoResponse):void} cb
     * @public
     */
    DescribeMalwareInfo(req, cb) {
        let resp = new DescribeMalwareInfoResponse();
        this.request("DescribeMalwareInfo", req, resp, cb);
    }

    /**
     * 获取资产管理Web框架列表
     * @param {DescribeAssetWebFrameListRequest} req
     * @param {function(string, DescribeAssetWebFrameListResponse):void} cb
     * @public
     */
    DescribeAssetWebFrameList(req, cb) {
        let resp = new DescribeAssetWebFrameListResponse();
        this.request("DescribeAssetWebFrameList", req, resp, cb);
    }

    /**
     * 获取阻断地域
     * @param {DescribeBanRegionsRequest} req
     * @param {function(string, DescribeBanRegionsResponse):void} cb
     * @public
     */
    DescribeBanRegions(req, cb) {
        let resp = new DescribeBanRegionsResponse();
        this.request("DescribeBanRegions", req, resp, cb);
    }

    /**
     * 查询java内存马事件列表
     * @param {DescribeJavaMemShellListRequest} req
     * @param {function(string, DescribeJavaMemShellListResponse):void} cb
     * @public
     */
    DescribeJavaMemShellList(req, cb) {
        let resp = new DescribeJavaMemShellListResponse();
        this.request("DescribeJavaMemShellList", req, resp, cb);
    }

    /**
     * 漏洞详情，带CVSS版本
     * @param {DescribeVulInfoCvssRequest} req
     * @param {function(string, DescribeVulInfoCvssResponse):void} cb
     * @public
     */
    DescribeVulInfoCvss(req, cb) {
        let resp = new DescribeVulInfoCvssResponse();
        this.request("DescribeVulInfoCvss", req, resp, cb);
    }

    /**
     * 入侵检测获取木马列表
     * @param {DescribeMalWareListRequest} req
     * @param {function(string, DescribeMalWareListResponse):void} cb
     * @public
     */
    DescribeMalWareList(req, cb) {
        let resp = new DescribeMalWareListResponse();
        this.request("DescribeMalWareList", req, resp, cb);
    }

    /**
     * 该接口可以对入侵检测-文件查杀扫描检测
     * @param {CreateScanMalwareSettingRequest} req
     * @param {function(string, CreateScanMalwareSettingResponse):void} cb
     * @public
     */
    CreateScanMalwareSetting(req, cb) {
        let resp = new CreateScanMalwareSettingResponse();
        this.request("CreateScanMalwareSetting", req, resp, cb);
    }

    /**
     * 定时扫描设置
     * @param {ModifyMalwareTimingScanSettingsRequest} req
     * @param {function(string, ModifyMalwareTimingScanSettingsResponse):void} cb
     * @public
     */
    ModifyMalwareTimingScanSettings(req, cb) {
        let resp = new ModifyMalwareTimingScanSettingsResponse();
        this.request("ModifyMalwareTimingScanSettings", req, resp, cb);
    }

    /**
     * 授权管理-授权概览信息
     * @param {DescribeLicenseGeneralRequest} req
     * @param {function(string, DescribeLicenseGeneralResponse):void} cb
     * @public
     */
    DescribeLicenseGeneral(req, cb) {
        let resp = new DescribeLicenseGeneralResponse();
        this.request("DescribeLicenseGeneral", req, resp, cb);
    }

    /**
     * 该接口可以获取设置中心-授权管理,某个授权下已绑定的授权机器列表
     * @param {DescribeLicenseBindListRequest} req
     * @param {function(string, DescribeLicenseBindListResponse):void} cb
     * @public
     */
    DescribeLicenseBindList(req, cb) {
        let resp = new DescribeLicenseBindListResponse();
        this.request("DescribeLicenseBindList", req, resp, cb);
    }

    /**
     * 获取内核模块详情
     * @param {DescribeAssetCoreModuleInfoRequest} req
     * @param {function(string, DescribeAssetCoreModuleInfoResponse):void} cb
     * @public
     */
    DescribeAssetCoreModuleInfo(req, cb) {
        let resp = new DescribeAssetCoreModuleInfoResponse();
        this.request("DescribeAssetCoreModuleInfo", req, resp, cb);
    }

    /**
     * 获取主机相关统计
     * @param {DescribeGeneralStatRequest} req
     * @param {function(string, DescribeGeneralStatResponse):void} cb
     * @public
     */
    DescribeGeneralStat(req, cb) {
        let resp = new DescribeGeneralStatResponse();
        this.request("DescribeGeneralStat", req, resp, cb);
    }

    /**
     * 获取资产管理数据库详情
     * @param {DescribeAssetDatabaseInfoRequest} req
     * @param {function(string, DescribeAssetDatabaseInfoResponse):void} cb
     * @public
     */
    DescribeAssetDatabaseInfo(req, cb) {
        let resp = new DescribeAssetDatabaseInfoResponse();
        this.request("DescribeAssetDatabaseInfo", req, resp, cb);
    }

    /**
     * 设置高危命令事件状态
     * @param {SetBashEventsStatusRequest} req
     * @param {function(string, SetBashEventsStatusResponse):void} cb
     * @public
     */
    SetBashEventsStatus(req, cb) {
        let resp = new SetBashEventsStatusResponse();
        this.request("SetBashEventsStatus", req, resp, cb);
    }

    /**
     * 导出反弹Shell事件
     * @param {ExportReverseShellEventsRequest} req
     * @param {function(string, ExportReverseShellEventsResponse):void} cb
     * @public
     */
    ExportReverseShellEvents(req, cb) {
        let resp = new ExportReverseShellEventsResponse();
        this.request("ExportReverseShellEvents", req, resp, cb);
    }

    /**
     * 删除网络攻击日志
     * @param {DeleteAttackLogsRequest} req
     * @param {function(string, DeleteAttackLogsResponse):void} cb
     * @public
     */
    DeleteAttackLogs(req, cb) {
        let resp = new DeleteAttackLogsResponse();
        this.request("DeleteAttackLogs", req, resp, cb);
    }

    /**
     * 查询定期检测的配置
     * @param {DescribeScanVulSettingRequest} req
     * @param {function(string, DescribeScanVulSettingResponse):void} cb
     * @public
     */
    DescribeScanVulSetting(req, cb) {
        let resp = new DescribeScanVulSettingResponse();
        this.request("DescribeScanVulSetting", req, resp, cb);
    }

    /**
     * 查询资产管理启动服务列表
     * @param {DescribeAssetInitServiceListRequest} req
     * @param {function(string, DescribeAssetInitServiceListResponse):void} cb
     * @public
     */
    DescribeAssetInitServiceList(req, cb) {
        let resp = new DescribeAssetInitServiceListResponse();
        this.request("DescribeAssetInitServiceList", req, resp, cb);
    }

    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     * @param {DeleteMachineRequest} req
     * @param {function(string, DeleteMachineResponse):void} cb
     * @public
     */
    DeleteMachine(req, cb) {
        let resp = new DeleteMachineResponse();
        this.request("DeleteMachine", req, resp, cb);
    }

    /**
     * 专家服务-专家服务订单列表
     * @param {DescribeExpertServiceOrderListRequest} req
     * @param {function(string, DescribeExpertServiceOrderListResponse):void} cb
     * @public
     */
    DescribeExpertServiceOrderList(req, cb) {
        let resp = new DescribeExpertServiceOrderListResponse();
        this.request("DescribeExpertServiceOrderList", req, resp, cb);
    }

    /**
     * 根据策略名查询策略是否存在
     * @param {DescribeStrategyExistRequest} req
     * @param {function(string, DescribeStrategyExistResponse):void} cb
     * @public
     */
    DescribeStrategyExist(req, cb) {
        let resp = new DescribeStrategyExistResponse();
        this.request("DescribeStrategyExist", req, resp, cb);
    }

    /**
     * 网站防篡改-查询网页防篡改服务器购买信息及服务器信息
     * @param {DescribeWebPageServiceInfoRequest} req
     * @param {function(string, DescribeWebPageServiceInfoResponse):void} cb
     * @public
     */
    DescribeWebPageServiceInfo(req, cb) {
        let resp = new DescribeWebPageServiceInfoResponse();
        this.request("DescribeWebPageServiceInfo", req, resp, cb);
    }

    /**
     * 获取客户端异常事件
     * @param {DescribeClientExceptionRequest} req
     * @param {function(string, DescribeClientExceptionResponse):void} cb
     * @public
     */
    DescribeClientException(req, cb) {
        let resp = new DescribeClientExceptionResponse();
        this.request("DescribeClientException", req, resp, cb);
    }

    /**
     * 获取所有主机标签
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * 查询基线基础信息列表
     * @param {DescribeBaselineBasicInfoRequest} req
     * @param {function(string, DescribeBaselineBasicInfoResponse):void} cb
     * @public
     */
    DescribeBaselineBasicInfo(req, cb) {
        let resp = new DescribeBaselineBasicInfoResponse();
        this.request("DescribeBaselineBasicInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     * @param {DescribeSecurityTrendsRequest} req
     * @param {function(string, DescribeSecurityTrendsResponse):void} cb
     * @public
     */
    DescribeSecurityTrends(req, cb) {
        let resp = new DescribeSecurityTrendsResponse();
        this.request("DescribeSecurityTrends", req, resp, cb);
    }

    /**
     * 根据基线策略id查询基线策略数据概览统计
     * @param {DescribeBaselineAnalysisDataRequest} req
     * @param {function(string, DescribeBaselineAnalysisDataResponse):void} cb
     * @public
     */
    DescribeBaselineAnalysisData(req, cb) {
        let resp = new DescribeBaselineAnalysisDataResponse();
        this.request("DescribeBaselineAnalysisData", req, resp, cb);
    }

    /**
     * 网络攻击日志详情
     * @param {DescribeAttackLogInfoRequest} req
     * @param {function(string, DescribeAttackLogInfoResponse):void} cb
     * @public
     */
    DescribeAttackLogInfo(req, cb) {
        let resp = new DescribeAttackLogInfoResponse();
        this.request("DescribeAttackLogInfo", req, resp, cb);
    }

    /**
     * 网站防篡改防护设置开关
     * @param {ModifyWebPageProtectSwitchRequest} req
     * @param {function(string, ModifyWebPageProtectSwitchResponse):void} cb
     * @public
     */
    ModifyWebPageProtectSwitch(req, cb) {
        let resp = new ModifyWebPageProtectSwitchResponse();
        this.request("ModifyWebPageProtectSwitch", req, resp, cb);
    }

    /**
     * 新增或修改高危命令规则
     * @param {EditBashRulesRequest} req
     * @param {function(string, EditBashRulesResponse):void} cb
     * @public
     */
    EditBashRules(req, cb) {
        let resp = new EditBashRulesResponse();
        this.request("EditBashRules", req, resp, cb);
    }

    /**
     * 专家服务-安全管家月巡检报告下载
     * @param {DescribeMonthInspectionReportRequest} req
     * @param {function(string, DescribeMonthInspectionReportResponse):void} cb
     * @public
     */
    DescribeMonthInspectionReport(req, cb) {
        let resp = new DescribeMonthInspectionReportResponse();
        this.request("DescribeMonthInspectionReport", req, resp, cb);
    }

    /**
     * 获取资产数量： 主机数、账号数、端口数、进程数、软件数、数据库数、Web应用数、Web框架数、Web服务数、Web站点数
     * @param {DescribeAssetInfoRequest} req
     * @param {function(string, DescribeAssetInfoResponse):void} cb
     * @public
     */
    DescribeAssetInfo(req, cb) {
        let resp = new DescribeAssetInfoResponse();
        this.request("DescribeAssetInfo", req, resp, cb);
    }

    /**
     * 网站防篡改-删除事件记录
     * @param {DeleteWebPageEventLogRequest} req
     * @param {function(string, DeleteWebPageEventLogResponse):void} cb
     * @public
     */
    DeleteWebPageEventLog(req, cb) {
        let resp = new DeleteWebPageEventLogResponse();
        this.request("DeleteWebPageEventLog", req, resp, cb);
    }

    /**
     * 用于统计专业版和基础版机器数。
     * @param {DescribeVersionStatisticsRequest} req
     * @param {function(string, DescribeVersionStatisticsResponse):void} cb
     * @public
     */
    DescribeVersionStatistics(req, cb) {
        let resp = new DescribeVersionStatisticsResponse();
        this.request("DescribeVersionStatistics", req, resp, cb);
    }

    /**
     * 漏洞管理-导出漏洞列表
     * @param {ExportVulListRequest} req
     * @param {function(string, ExportVulListResponse):void} cb
     * @public
     */
    ExportVulList(req, cb) {
        let resp = new ExportVulListResponse();
        this.request("ExportVulList", req, resp, cb);
    }

    /**
     * 用于获取单台主机或所有主机是否开通专业版状态。
     * @param {DescribeProVersionStatusRequest} req
     * @param {function(string, DescribeProVersionStatusResponse):void} cb
     * @public
     */
    DescribeProVersionStatus(req, cb) {
        let resp = new DescribeProVersionStatusResponse();
        this.request("DescribeProVersionStatus", req, resp, cb);
    }

    /**
     * 获取高危命令列表
     * @param {DescribeBashEventsRequest} req
     * @param {function(string, DescribeBashEventsResponse):void} cb
     * @public
     */
    DescribeBashEvents(req, cb) {
        let resp = new DescribeBashEventsResponse();
        this.request("DescribeBashEvents", req, resp, cb);
    }

    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * 获取基线检测主机列表
     * @param {DescribeBaselineHostDetectListRequest} req
     * @param {function(string, DescribeBaselineHostDetectListResponse):void} cb
     * @public
     */
    DescribeBaselineHostDetectList(req, cb) {
        let resp = new DescribeBaselineHostDetectListResponse();
        this.request("DescribeBaselineHostDetectList", req, resp, cb);
    }

    /**
     * 查询资产管理Web服务列表
     * @param {DescribeAssetWebServiceInfoListRequest} req
     * @param {function(string, DescribeAssetWebServiceInfoListResponse):void} cb
     * @public
     */
    DescribeAssetWebServiceInfoList(req, cb) {
        let resp = new DescribeAssetWebServiceInfoListResponse();
        this.request("DescribeAssetWebServiceInfoList", req, resp, cb);
    }

    /**
     * 导出漏洞检测报告。
     * @param {ExportVulDetectionReportRequest} req
     * @param {function(string, ExportVulDetectionReportResponse):void} cb
     * @public
     */
    ExportVulDetectionReport(req, cb) {
        let resp = new ExportVulDetectionReportResponse();
        this.request("ExportVulDetectionReport", req, resp, cb);
    }

    /**
     * 查询篡改事件列表
     * @param {DescribeWebPageEventListRequest} req
     * @param {function(string, DescribeWebPageEventListResponse):void} cb
     * @public
     */
    DescribeWebPageEventList(req, cb) {
        let resp = new DescribeWebPageEventListResponse();
        this.request("DescribeWebPageEventList", req, resp, cb);
    }

    /**
     * 获取用户所有授权订单信息
     * @param {DescribeLicenseListRequest} req
     * @param {function(string, DescribeLicenseListResponse):void} cb
     * @public
     */
    DescribeLicenseList(req, cb) {
        let resp = new DescribeLicenseListResponse();
        this.request("DescribeLicenseList", req, resp, cb);
    }

    /**
     * 对订单属性编辑
     * @param {ModifyOrderAttributeRequest} req
     * @param {function(string, ModifyOrderAttributeResponse):void} cb
     * @public
     */
    ModifyOrderAttribute(req, cb) {
        let resp = new ModifyOrderAttributeResponse();
        this.request("ModifyOrderAttribute", req, resp, cb);
    }

    /**
     * 获取木马文件下载地址
     * @param {DescribeMalwareFileRequest} req
     * @param {function(string, DescribeMalwareFileResponse):void} cb
     * @public
     */
    DescribeMalwareFile(req, cb) {
        let resp = new DescribeMalwareFileResponse();
        this.request("DescribeMalwareFile", req, resp, cb);
    }

    /**
     * 获取漏洞管理模块指定类型的待处理漏洞数、主机数和非专业版主机数量
     * @param {DescribeUndoVulCountsRequest} req
     * @param {function(string, DescribeUndoVulCountsResponse):void} cb
     * @public
     */
    DescribeUndoVulCounts(req, cb) {
        let resp = new DescribeUndoVulCountsResponse();
        this.request("DescribeUndoVulCounts", req, resp, cb);
    }

    /**
     * 检测基线
     * @param {StartBaselineDetectRequest} req
     * @param {function(string, StartBaselineDetectResponse):void} cb
     * @public
     */
    StartBaselineDetect(req, cb) {
        let resp = new StartBaselineDetectResponse();
        this.request("StartBaselineDetect", req, resp, cb);
    }


}
module.exports = CwpClient;
