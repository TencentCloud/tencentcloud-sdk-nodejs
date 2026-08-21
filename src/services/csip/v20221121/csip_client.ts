/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  StopBaselineScanTaskResponse,
  DescribeCosInvokeUaRequest,
  ExposeRiskItem,
  DescribeUserCSPMInfoListRequest,
  DescribeLoginWhiteHostListRequest,
  AbTestUserItem,
  DescribeRiskItemListResponse,
  StopEDRScanTaskRequest,
  AuditLogInfo,
  CreateAccessKeySyncTaskRequest,
  DescribeLicenseStatusResponse,
  DescribeCosBucketBillingInfoResponse,
  DescribeExposeRulesRequest,
  OrganizationUserInfo,
  AssetTag,
  HostDesc,
  DescribeDspmRiskStrategyResponse,
  LogHighLightItem,
  DescribeCWPScanIpInfoResponse,
  ModifyCosAuditMonitorAccountRequest,
  LogCLSFilter,
  DescribeRiskCenterCFGViewCFGRiskListRequest,
  DescribeCSIPRiskStatisticsResponse,
  ModifyShareUserCSPMResponse,
  ModifyEdrAlertStatusRequest,
  DescribeMachineClearHistoryResponse,
  NotifySetting,
  DescribeCosBucketBillingInfoRequest,
  ExportTasksRequest,
  ModifyCSIPRaspLicenseUnBindsRequest,
  DescribeDspmRiskTendencyRequest,
  AddNewBindRoleUserRequest,
  ModifyDspmAssetLogDeliverySwitchResponse,
  ExportEDRRulesResponse,
  ModifyAgentRunPolicyRequest,
  DescribeDspmAssetsRequest,
  ComplianceStandardRuleCount,
  ModifyWebhookPolicyResponse,
  WhereFilter,
  ModifyCosAuditObjectIdentifyStatusResponse,
  VPRExplainInfo,
  DescribeVulItemListResponse,
  ClusterCustomParameters,
  DeleteWebhookPoliciesRequest,
  VPRExplainDimensionItem,
  ComplianceCheckItemsOverview,
  DspmIdentifyAssetStatistic,
  DescribeCosActionListRequest,
  DescribeCustomRiskRuleDetailRequest,
  ModifyBaselinePolicyEnableRequest,
  DescribeSkillScanPayInfoResponse,
  DescribeBaselineOverviewRequest,
  DspmIdentifyRuleItem,
  DescribeSCFAliasListResponse,
  DescribeCWPExposuresResponse,
  ModifyOrganizationAccountStatusResponse,
  DescribeBucketInvokeIpListResponse,
  CreateVulFixRetryTaskRequest,
  DescribeDbAssetInfoRequest,
  DescribeCosIpInvokeLogRequest,
  ModifyCSIPLicenseBindsRequest,
  DescribeIpInvokeRecordDetailRequest,
  DescribeAccessKeyAlarmResponse,
  CreateCosObjectScanTaskResponse,
  ModifyDspmIdentifyLevelItemRequest,
  DspmRiskTendency,
  CSIPTag,
  DescribeCloudAssetsRequest,
  DescribeCWPOrderListRequest,
  DescribeVulComponentRelateHostResponse,
  RuleContentProcessInfo,
  DeleteDspmIdentifyLevelGroupResponse,
  AccessAIAnalysisSMTPRequest,
  SCFAliasInfo,
  DescribeExposeAssetCategoryResponse,
  DescribeAssetRiskDetailRequest,
  ModifyCSIPLicenseBindsResponse,
  BehaviorSummary,
  IpAssetListVO,
  DescribeDspmRiskStrategyGroupRequest,
  IaCFileRisk,
  CreateClusterNamespaceListExportJobRequest,
  ModifyNFSScanHostResponse,
  DeleteDspmRestoreLogListRequest,
  CreateDspmPersonalIdentifyResponse,
  DescribeCWPOrderListResponse,
  DescribeVulRiskRelateHostRequest,
  DescribePodContainerListResponse,
  DescribeCFGRiskStatisticsResponse,
  UebaUserSummaryElement,
  DescribeExposuresResponse,
  DescribeCustomRiskRuleDetailResponse,
  DescribeAgentConfigSettingRequest,
  DescribeAssetDetailRequest,
  DescribeIpInvokeRecordResponse,
  ModifyNetAttackSettingRequest,
  Place,
  ModifyRiskScanCronConfigResponse,
  ModifyDspmAssetLogDeliverySwitchRequest,
  DescribePortScanTaskCountResponse,
  ModifyEDRRuleStatusResponse,
  DescribeBanStatusResponse,
  DescribeDynamicAssetsResponse,
  VulDetailInfo,
  DescribeBaselineCategoryItemListResponse,
  VulBriefInfo,
  ModifyNotifySettingResponse,
  CreateDspmApproveHistoryExportJobResponse,
  CosPermissionInfo,
  CustomTag,
  ModifyLoginTypeFailInfo,
  DeleteDspmIdentifyLevelGroupRequest,
  DescribeTopAttackInfoResponse,
  CreatePublicAssetsExportJobRequest,
  DescribeAssetInfoRequest,
  DescribeVulScanTaskListResponse,
  DescribeSecurityScoreRuleResponse,
  PortDetectInfo,
  DescribeModifyMachinesLoginTypeTasksRequest,
  ModifyDspmAssetAccountPrivilegesResponse,
  DeleteDspmIdentifyComplianceCategoryRelationRequest,
  CICDToken,
  CreateDspmAssetsExportJobResponse,
  ModifyBaselineSyncConfRequest,
  EdrAlertCategoryCount,
  DescribeEdrAlertThreatTagsResponse,
  DeleteDspmAssetAccountResponse,
  DescribeEdrLogCollectPathsRequest,
  CreateCFGRiskPDFReportExportJobResponse,
  DescribeAssetLastSyncTimeResponse,
  CreateAssetViewRisksExportJobResponse,
  DescribePublicCloudAssetsRequest,
  DescribeAccessKeyAssetResponse,
  DescribeSubnetAssetsResponse,
  DescribeRiskCenterAssetViewPortRiskListRequest,
  AssetViewFilter,
  DescribeCWPLicenseBindScheduleRequest,
  DescribeCFGRiskReportStatisticsResponse,
  ModifyDspmRestoreLogTaskRequest,
  DescribeAccessKeyRiskRequest,
  PublicIpDomainListKey,
  DspmAssetDatabaseInfo,
  DescribeEdrAlertCountForAssetRequest,
  CreateDspmAssetAccessTopologyExportJobResponse,
  DescribeCosSourceIpResponse,
  DescribeAIAnalysisRobotInfoResponse,
  ModifyVulScanPeriodicRequest,
  DeleteDspmBackupLogListResponse,
  DspmAssetAccountIdentify,
  DescribeCosAlarmTrendDataRequest,
  ModifyDspmWhitelistStrategyRequest,
  ContainerWebServiceItem,
  AssetInstanceTypeMap,
  DescribeDspmIdentifyIdListRequest,
  DescribeCVMAssetInfoResponse,
  ModifyDspmIdentifyCategoryResponse,
  CreateDspmIdentifyLevelGroupResponse,
  DspmSensitiveScanTaskConfig,
  EdrContainerAlertCountItem,
  SourceIPVpcInfo,
  DspmRiskStrategy,
  DescribeClusterInstallCommandResponse,
  DescribeSCFAliasListRequest,
  UserCSPMInfo,
  DescribeAssetTagsResponse,
  DescribeVulScanTaskDetailResponse,
  AssetViewVULRisk,
  HostInfo,
  DescribeCosAuditPayInfoRequest,
  ModifyNFSScanConfRequest,
  DeleteCosPolicyRequest,
  DescribeCosAkAssetRequest,
  ModifyMachineRemarkResponse,
  CreateDspmIdentifyComplianceCategoryRelationRequest,
  CosAssetFileIdentifyInfo,
  DeleteDspmIdentifyComplianceGroupResponse,
  DescribeComplianceRiskListResponse,
  ScanEDRTaskAgainResponse,
  DescribeIpInvokeRecordRequest,
  AssetTagTreeNode,
  FieldStyle,
  CreateCloudFunctionExportJobRequest,
  ModifyOrganizationAccountStatusRequest,
  DescribeAIScheduleStatsResponse,
  CosInvokeDetailInfo,
  DescribeDspmAccessTopologyAssetsResponse,
  DeleteEDRRulesResponse,
  DescribeUebaRuleRequest,
  AssetProcessItem,
  AssetItem,
  CustomAgentRunModePolicy,
  RiskDetailItem,
  DescribeClbListenerListResponse,
  ModifyDspmIdentifyLevelGroupRequest,
  DescribeNatRulesRequest,
  DescribeLighthouseFirewallRulesRequest,
  SCFNamespaceInfo,
  ClusterServiceListItem,
  ModifyAIScheduleRequest,
  UserConfSyncStatus,
  CreateClusterContainerListExportJobResponse,
  DescribeComplianceRiskListRequest,
  UpdateAccessKeyRemarkRequest,
  AddDspmAssetManagerRequest,
  StopVulScanTaskRequest,
  DspmUinUser,
  AssetFilters,
  ModifyDspmRiskStrategyResponse,
  DescribeRiskTrendDataResponse,
  ModifyEdrAlertIsolationRequest,
  FieldConfig,
  DescribeCallRecordResponse,
  DescribeIaCFileListRequest,
  CosAkSet,
  DataSearchBug,
  ClusterNodeListItem,
  DescribeDspmAssetDatabasesRequest,
  DescribeLoginWhiteHostListResponse,
  DescribeClbTargetsResponse,
  ExportClientSettingHostListRequest,
  CreateBaselineAggregatedItemExportJobRequest,
  DescribeRiskCenterAssetViewCFGRiskListRequest,
  DeleteWebhookPoliciesResponse,
  AiScheduleInfo,
  TaskInfo,
  KeySandboxCredential,
  DeleteDomainAndIpRequest,
  ModifyDspmApplyingIdentifyComplianceGroupRequest,
  DescribeComplianceStandardTermTreeResponse,
  TaskIdListKey,
  DeleteIaCAccessTokenResponse,
  VulFixItem,
  ModifyNFSScanConfResponse,
  AccessKeyRisk,
  DBAssetVO,
  StandardTerm,
  ExposeTrendItem,
  ModifyAgentRunModeRequest,
  ExportEDRRulesRequest,
  CosAkAssetInfo,
  DspmRiskStrategyGroup,
  CloudFunctionItem,
  DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
  CancelEdrAlertIgnoreRequest,
  MachineExtraInfo,
  ModifyLoginWhiteRecordResponse,
  DescribeSecurityGroupPolicyResponse,
  AutoTagRuleItem,
  DescribeAssetRiskListResponse,
  CreateDspmIdentifyCategoryResponse,
  AccessCredentialOutput,
  DescribeEdrLogCollectPathsResponse,
  DescribeMalwareTimingScanSettingRequest,
  ScanTaskInfo,
  TrafficPluginState,
  DescribeCWPExposuresRequest,
  DescribeAccessKeyAlarmDetailRequest,
  ModifyDspmRiskInfoRequest,
  DescribeDspmAccessTopologyAccountsResponse,
  CreateDspmIdentifyComplianceRuleRelationResponse,
  CreateCSIPManualMalwareScanResponse,
  DescribeAssetRiskListRequest,
  DescribeSCFFunctionVersionListRequest,
  DescribeModifyMachinesLoginTypeTasksResponse,
  BaselineSyncConf,
  DescribeDspmAssetAccountsRequest,
  EDRScanTaskHostItem,
  DescribeRiskRuleDetailResponse,
  ModifyCosMarkInfoRequest,
  DescribeAIAnalysisSMTPResponse,
  DeleteWebhookReceiversResponse,
  CreateDspmIdentifyRuleRequest,
  DeleteDspmIdentifyCategoryResponse,
  LoginWhiteCombinedInfo,
  DescribeDspmAssetAccountsResponse,
  CreatePublicAssetsExportJobResponse,
  DeleteCSIPMalwareScanTaskRequest,
  DescribeDspmAssetIdsResponse,
  ModifyDspmAssetSecurityAnalysisSwitchResponse,
  BaselineAggregatedItem,
  DescribeEdrAlertListResponse,
  RiskTrendItem,
  ModifyDspmAssetAccountResponse,
  DescribeCosAuditDictionaryListRequest,
  CreateAllAssetsExportJobRequest,
  LogKeyValueInfo,
  SourceIPAsset,
  VulFixSummaryItem,
  CreateDspmIdentifyComplianceGroupRequest,
  ModifyDspmIdentifyRuleResponse,
  CreateHostVulExportJobResponse,
  CosAlarmTrendInfo,
  RevertDspmAssetAccountResponse,
  ModifyDspmPersonalIdentifyResponse,
  ModifySecurityScoreRuleRequest,
  DescribeDspmRiskTendencyResponse,
  DescribeRiskCenterRiskTrendAnalysisResponse,
  ModifyBaselineUserOtherConfRequest,
  DescribeAccessKeyAlarmDetailResponse,
  RuleContentProcessNetwork,
  ModifyDspmApproveStatusResponse,
  DescribeAIAnalysisHistoryResponse,
  ModifyAILinkSettingResponse,
  ModifyEdrAlertPermanentIgnoreResponse,
  ModifyDspmIdentifyInfoRequest,
  DescribeBanStatusRequest,
  DescribeAIAgentAssetListRequest,
  DescribeAssetFilterViewsRequest,
  CreateScanStatisticExportJobResponse,
  AccessAIAnalysisSMTPResponse,
  DescribeHighBaseLineRiskListRequest,
  DescribeBaselinePolicyListRequest,
  CreateCFGRisksExportJobResponse,
  AddVulWhitelistResponse,
  HostVulRisk,
  DescribeCustomRiskRulesResponse,
  DescribeCosRiskScanTaskResponse,
  DescribeBaselineSystemCategoryListRequest,
  DescribeVulFixTaskDetailRequest,
  ModifyRiskCenterRiskStatusRequest,
  DescribeEdrAlertCountForContainerRequest,
  CreateDynamicAssetsExportJobRequest,
  StatisticalFilter,
  DspmIdentifyCategoryItem,
  OsName,
  NewAlertKey,
  DescribeLoginTypeGlobalConfResponse,
  DescribeDspmAssetLoginCredentialResponse,
  DescribeCosPolicyResponse,
  CreateExposuresExportJobResponse,
  DescribeExportJobManageListResponse,
  DescribeCosRiskActionListRequest,
  DeleteVulWhitelistRequest,
  DescribeAbnormalCallRecordRequest,
  DescribeExposureTrendResponse,
  ModifyCosAuditBucketMonitorStatusRequest,
  CreateClusterAssetSyncTaskRequest,
  AssetHeaderItem,
  DescribeUserCSPMInfoListResponse,
  DescribeBruteAttackRulesResponse,
  DescribeClusterSuperNodeInfoResponse,
  DescribeComplianceOverviewResponse,
  DescribeClusterServiceListRequest,
  DescribePodContainerListRequest,
  DescribeSkillScanPayInfoRequest,
  DescribeAgentRunPolicyResponse,
  AccessKeyAlarmCount,
  ContainerMountItem,
  RiskCenterStatusKey,
  TaskAssetObject,
  IaCFile,
  DescribeCosAccessPermissionsRequest,
  CosIdentifyRuleDetail,
  UltimateAppItem,
  CreateVulFixRetryTaskResponse,
  SyncDspmUsersRequest,
  DescribeKeySandboxCredentialResponse,
  SkillScanItem,
  DescribeVULListRequest,
  DspmAssetCount,
  CFGViewCFGRisk,
  DescribeCWPMachinesResponse,
  ModifyAssetTagsByAssetInfoResponse,
  CreateIaCFileExportJobRequest,
  LicenseBindFilter,
  SensitiveDetail,
  CreateDspmIdentifyComplianceGroupCopyResponse,
  DescribeClbListenerRulesResponse,
  CreateDspmIdentifyComplianceGroupCopyRequest,
  SkillRuleCatalogItem,
  CosRiskTrendInfo,
  BaselineItemRiskRecord,
  DescribeAssetTagTreeRequest,
  CreateVulReScanResponse,
  ScanBaselineRiskListResponse,
  CreateDspmApplyOrderRequest,
  DescribeDspmAssetDatabaseListResponse,
  DspmAccessRecordId,
  DescribeAssetTagTreeResponse,
  DescribeVulViewVulRiskListRequest,
  DescribeVulRiskListRequest,
  DescribeVULListResponse,
  ModifyExposureTagResponse,
  DeleteDspmExportTaskRequest,
  AIAgentAsset,
  DspmSecurityAnalyseStatusCount,
  DescribeRiskRulesRequest,
  OperateRiskRequest,
  DescribeDspmRiskStrategyRequest,
  UninstallClusterAgentRequest,
  CreateAIScheduleResponse,
  CreateVulScanManualResponse,
  DescribeRiskDetailListResponse,
  DescribeUebaUserSummaryResponse,
  DescribeRiskCenterCFGViewCFGRiskListResponse,
  DescribeComplianceStatisticsRequest,
  DescribeDspmIdentifyRuleTestResultResponse,
  VPRRatingStage,
  RegionInfo,
  DescribePolicyHitDataResponse,
  DescribeRiskTrendDataRequest,
  DeleteVulWhitelistResponse,
  CosRiskViewInfo,
  ModifyRiskCenterScanTaskRequest,
  DescribeCosAssetRequest,
  WebhookPolicy,
  DescribeCSIPMalwareScanTaskProgressRequest,
  DescribeBaselinePolicyCategoryListRequest,
  DescribeVulViewVulRiskListResponse,
  EdrAlertTargetForIgnore,
  DescribeTaskLogListRequest,
  DspmAssetAccessTopologyItem,
  Filters,
  DescribeDspmIdentifyCategoryListRequest,
  ExposeRuleItem,
  ClusterWithAppIdItem,
  ModifyPayConfigResponse,
  ModifyPolicyStatusRequest,
  DescribeDspmSupportedAssetTypeRequest,
  DescribeBaselineFixRecordListResponse,
  ClusterContainerListItem,
  TaskAdvanceCFG,
  KBUpdateMachineItem,
  CycleScanConf,
  ModifyAIScheduleResponse,
  DescribePreventUninstallHostResponse,
  DescribeClusterContainerWebServiceListRequest,
  DescribeAIAnalysisRecommendQuestionsRequest,
  CheckCWPExposePathPermissionRequest,
  DescribeDspmIdentifyComplianceGroupDetailResponse,
  CreateVulFixedExportJobRequest,
  DeleteDspmPersonalIdentifyRequest,
  ModifyEdrLogCollectPathResponse,
  DescribeDspmSyncAssetsStatusRequest,
  DspmApplyOrder,
  DescribeBaselineUserOtherConfResponse,
  DspmApproverOrder,
  CategoryNode,
  ModifyDspmAssetAccountRequest,
  DescribeAssetOverviewResponse,
  CreateAccessKeyCheckTaskResponse,
  DescribeRaspLicenseListRequest,
  EdrAlertTarget,
  DescribeDspmRiskResponse,
  DescribeHostVulRiskListRequest,
  DescribeLastScanTaskInfoRequest,
  DescribeClusterDetailRequest,
  ContainerPortItem,
  DescribeBucketInvokeIpListRequest,
  OrganizationInfo,
  CreateClusterNodeListExportJobResponse,
  ScanBaselinePolicyListRequest,
  CreateDspmAssetIdentifyInfoExportJobRequest,
  ModifyCSIPLicenseUnBindsResponse,
  ScanCSIPTaskAgainResponse,
  DescribeVulIgnoreRuleListResponse,
  CreateAIScheduleRequest,
  DescribeUserInfoResponse,
  DescribeAIScheduleListRequest,
  VulImpactComponentInfo,
  VulVendorProduct,
  VulFixTaskInfo,
  EDRRuleTagItem,
  DiskPartitionInfo,
  DescribeEdrAlertSummaryRequest,
  ModifyDspmIdentifyComplianceGroupResponse,
  DescribeExposureAutoTagRulesRequest,
  DescribeClusterNamespaceListResponse,
  DescribeBaselineOverviewResponse,
  DescribeDspmApproveHistoryResponse,
  DescribeNetAttackSettingRequest,
  DescribeBaselineMainTaskListResponse,
  DescribeConfigCheckRulesResponse,
  ResetDspmAssetAccountPasswordRequest,
  ModifyRiskScanCronConfigRequest,
  DescribeHostKBRiskListResponse,
  CreateEdrLessAlertExportJobRequest,
  DescribeAssetTreeRequest,
  DescribeCWPTaskDurationResponse,
  ModifyBaselinePolicyRequest,
  VulRiskItem,
  ModifyDspmBackupSettingRequest,
  AssetTagModifyAssetItem,
  DescribeGatewayAssetsResponse,
  DescribeDspmApproveOrderListRequest,
  SkillScanRuleHit,
  CreateCloudFunctionExportJobResponse,
  VerifyDspmAssetLoginCodeResponse,
  ExpiringProduct,
  DescribeAccessKeyAlarmRequest,
  CosAssetInfo,
  DescribeCosRiskEvidenceRequest,
  DescribeHighBaseLineRiskListResponse,
  DescribeDspmRiskDetailRequest,
  DescribeEdrAlertThreatTagsRequest,
  AssetTagItem,
  CosOverview,
  DescribeCosIdentifyFileListRequest,
  DescribeHostVulItemVPRInfoResponse,
  NetworkSegment,
  DescribeLoginTypeHostResponse,
  DescribePreventUninstallHostRequest,
  CreateDspmAccessExportJobRequest,
  CreateClusterAssetSyncTaskResponse,
  CWPOrderExtraParam,
  DescribeEDRScanTaskDetailResponse,
  DescribeCWPScanIpInfoRequest,
  CreateExposureAutoTagRuleRequest,
  StopCSIPManualMalwareScanRequest,
  DescribeRiskCenterServerRiskListResponse,
  UpdateClusterOwnerRequest,
  DescribeVulComponentRelateHostRequest,
  AccessKeyAsset,
  DspmAssetFieldInfo,
  DescribeAIAnalysisRecommendQuestionsResponse,
  CosAssetSyncTaskInfo,
  CreateDspmRiskExportJobResponse,
  DescribeUebaBehaviorSummaryResponse,
  CreateRiskDetailExportJobResponse,
  InstallClusterAgentResponse,
  ModifyCosMarkInfoResponse,
  DescribeCustomAssetTagCountResponse,
  DspmPersonUser,
  ModifyEDRRuleResponse,
  ModifyAgentConfigSettingResponse,
  DescribeRiskBucketListRequest,
  HostAutoScaleConfig,
  CreateBaselineFixRecordExportJobRequest,
  ExportClientSettingHostListResponse,
  DescribeBaselineAggregatedItemListRequest,
  STSCredentialOutput,
  DescribeDspmExportTaskResponse,
  DescribeRepositoryImageAssetsResponse,
  DeleteClusterRequest,
  DescribeBaselineSubTaskListResponse,
  CreateDspmIdentifyComplianceGroupResponse,
  HitRules,
  DescribeVULRiskAdvanceCFGListRequest,
  DescribeCosAssetSyncTaskResponse,
  ModifyCspmShardConfigResponse,
  CreateSkillScanResponse,
  DescribeDspmPayInfoRequest,
  CreateHighBaseLineRisksExportJobResponse,
  ModifyAssetFilterViewRequest,
  DescribeEDRScanTaskDetailRequest,
  ClbTargetItem,
  DescribeBaselineItemRiskListRequest,
  TagCount,
  DescribeSkillScanResultRequest,
  GateWayAsset,
  CreateVulFixTaskResponse,
  CosBucketBillingInfo,
  DescribeVulIgnoreRuleListRequest,
  DspmIp,
  DescribeCLSLogListV3Response,
  ModifyAgentRunModeResponse,
  DeleteMachineClearHistoryRequest,
  DescribeAssetTagAttributesResponse,
  StopPreventUninstallRequest,
  DescribeCosIpInvokeRecordFileResponse,
  ModifyMachineAutoClearConfigRequest,
  ModifyEDRRuleStatusRequest,
  DescribeScfCustomDomainEndpointsResponse,
  DescribeCosAccessPermissionResponse,
  CreateCFGRiskPDFReportExportJobRequest,
  ModifyDspmIdentifyInfoResponse,
  ModifyDspmIdentifyComplianceGroupRequest,
  DescribeBaselineSyncConfResponse,
  DescribeDspmIdentifyIdListResponse,
  AIRecommendAction,
  VulScanTask,
  DescribeScanReportListRequest,
  DescribeAccessKeyAssetRequest,
  ModifyEdrAlertStatusResponse,
  DescribeDspmIdentifyComplianceCategoryRuleListRequest,
  DspmAssetAccount,
  DeleteAIScheduleRequest,
  DspmRisk,
  CosActionInfo,
  DescribeUserDspmInfoListResponse,
  DescribeClusterListV2Response,
  AlertExtraInfo,
  CreateEdrAlertExportJobResponse,
  ModifyEdrAlertPermanentIgnoreRequest,
  EdrAlertCountItem,
  BaselineHostAsset,
  DescribeCallRecordRequest,
  DescribeClusterPodAssetsResponse,
  HostVulComponent,
  DescribeSecurityScoreRuleRequest,
  DescribeRiskScanCronConfigRequest,
  CreateExposureAutoTagRuleResponse,
  EDRScanRecordItem,
  InstanceIDWithAppIdItem,
  AddNewBindRoleUserResponse,
  CosBucketAccessWay,
  DescribeDspmIdentifyLevelGroupListResponse,
  DescribeDspmIdentifyInfoResponse,
  DescribeCosOverviewRequest,
  DescribeDspmPayInfoResponse,
  DeleteDspmIdentifyComplianceCategoryRelationResponse,
  ModifyDspmIpInfoRequest,
  DescribeLicenseStatusRequest,
  VulFixTaskItem,
  ModifyNotifyAgentOfflineDurationRequest,
  DescribePreventUninstallGlobalConfRequest,
  DescribeBaselineUserWeakPasswordConfResponse,
  DspmTablePrivilege,
  DescribeSearchBugInfoResponse,
  EdrAlertTagItem,
  DescribeSecurityScoreOverviewResponse,
  DescribeExposeAssetCategoryRequest,
  BaselinePolicy,
  AssetDetailItem,
  DescribeVulFixTaskDetailResponse,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  CreateClusterListExportJobResponse,
  CFGRiskStatisticsItem,
  UpdateAccessKeyAlarmStatusRequest,
  InquireInfo,
  DescribeClusterSummaryRequest,
  RiskCallRecord,
  ModifyBruteAttackRulesRequest,
  DspmIdentifyLevelItem,
  DescribeVulFixTaskListRequest,
  ModifyCSIPRaspLicenseUnBindsResponse,
  ModifyNotifySettingAlertRequest,
  AssetCluster,
  ExportTask,
  CheckIsUltimateVersionResponse,
  MachineClearHistory,
  CreateDspmPersonalIdentifyRequest,
  CreateCosPolicyRequest,
  StandardItem,
  DescribeVulFixableMachineListResponse,
  DescribeAssetLastSyncTimeRequest,
  UpdateAccessKeyAlarmStatusResponse,
  CategoryItem,
  ScanTaskRecordItem,
  DescribeOrganizationUserInfoResponse,
  DescribeSubnetAssetsRequest,
  DspmIdentifyComplianceCategoryRelation,
  KeyValueInt,
  SCFFunctionVersionInfo,
  DescribeIaCFileOverviewResponse,
  KBFixSummaryItem,
  ModifyReverseShellSystemPolicyConfigRequest,
  ComplianceChapterItem,
  VulFixableMachineItem,
  DescribeClusterAssetsRequest,
  DescribeAIScheduleListResponse,
  DescribeCSIPLicenseBindScheduleRequest,
  DescribeProcessDaemonHostResponse,
  ModifyDspmIdentifyComplianceGroupStatusResponse,
  DescribeAssetProcessListRequest,
  CosRiskAlarmInfo,
  DescribeDspmAssetAccountPresetPrivilegesRequest,
  ModifyDspmIdentifyCategoryRequest,
  Location,
  CosRoleAccessInfo,
  DescribeAbTestUserResponse,
  DspmIdentifyCategoryRuleRelateDetailItem,
  ModifyVulWhitelistSwitchRequest,
  DescribeDspmSyncUsersStatusResponse,
  DescribeSearchBugInfoRequest,
  DescribeBaselinePolicyNameExistAppidListResponse,
  DspmAddIdentifyLevelItem,
  DspmIdentifyRuleDetail,
  CreateBaselineAggregatedItemExportJobResponse,
  ModifyExposureAutoTagRuleRequest,
  ModifyUebaRuleSwitchResponse,
  AssetFilterConfig,
  DescribeHostVulOverviewRequest,
  DescribeSecurityGroupPolicyRequest,
  CopyBaselinePolicyRequest,
  ScanEDRTaskAgainRequest,
  CosRiskBucketInfo,
  LogValueInfo,
  DescribeDspmAccessTopologyIpsRequest,
  DescribeDspmAssetLoginCredentialRequest,
  DescribeCLSLogListV3Request,
  CreateExposuresExportJobRequest,
  DescribeDspmIdentifyRuleListRequest,
  DescribeExposeRiskStatisticsResponse,
  StartOrModifyProcessDaemonResponse,
  BaselineFixRecord,
  DescribeCosSourceIpRequest,
  DescribeEdrExcludeNetworkSegmentsResponse,
  DescribeCVMAssetInfoRequest,
  DspmRiskCount,
  DescribeClusterContainerProcessListRequest,
  DescribeDspmAssetAccountRecycledPrivilegesResponse,
  ModifyBaselinePolicyResponse,
  CreateAssetFilterViewRequest,
  DescribeClusterPodAssetsRequest,
  ModifyBaselineUserWeakPasswordConfRequest,
  ModifyShareUserCSPMRequest,
  VPRExplainDimension,
  VPRLabel,
  DescribeTopAttackInfoRequest,
  VulTrend,
  SkillState,
  DescribeDspmIdentifyInfoListResponse,
  DescribeClusterContainerDetailResponse,
  ModifyDspmIpInfoResponse,
  DescribeVulRiskListResponse,
  DescribeEdrExportJobDownloadURLResponse,
  SyncDspmUsersResponse,
  DescribeCLSLogIndexV3Response,
  PortRiskAdvanceCFGParamItem,
  DescribeBaselineSubTaskListRequest,
  AssetBaseInfoResponse,
  BaselineCustomItemConf,
  DescribeRiskCallRecordResponse,
  DescribeReverseShellSystemPolicyConfigResponse,
  ModifyAssetTagsByAssetInfoRequest,
  DeleteDspmIdentifyComplianceRuleRelationResponse,
  DescribeDspmIdentifyRuleTestResultRequest,
  AKInfo,
  ExportJobItem,
  DescribeAlertListResponse,
  UpdateAlertStatusListRequest,
  DescribeLoginWhiteCombinedListRequest,
  DescribeVulRiskRelateComponentRequest,
  CreateCSIPManualMalwareScanRequest,
  DescribeDspmSyncUsersStatusRequest,
  DescribeLighthouseFirewallRulesResponse,
  NotifyAssetConfigItem,
  CredentialEffectScope,
  DescribeTaskLogListResponse,
  CreateDspmIdentifyRuleResponse,
  HighBaseLineRiskItem,
  DescribeCustomRiskRulesRequest,
  CreateCosAssetSyncTaskRequest,
  DescribeDspmDictionaryListResponse,
  DescribeMalwareTimingScanSettingResponse,
  Tag,
  DescribeCSIPMalwareScanTaskDetailResponse,
  DescribeCFGRiskStatisticsRequest,
  DescribeDspmAssetSecurityAnalyseStatusResponse,
  ImageIDWithAppIdItem,
  MultiAttackStageItem,
  DescribeBaselineAggregatedItemListResponse,
  DescribeDspmAssetDatabasesResponse,
  DescribeAssetDetailResponse,
  DescribeTaskLogURLRequest,
  ModifyCosAuditMonitorAccountResponse,
  DescribeKBUpdatableMachineListResponse,
  DescribeCustomAssetTagCountRequest,
  MachineLoginType,
  DescribeBanModeResponse,
  AccessKeyAlarmInfo,
  ModifyBaselineUserOtherConfResponse,
  ModifyWebhookPolicyStatusRequest,
  DownloadDspmExportLogResponse,
  DescribeBaselineAggregatedPolicyListRequest,
  DescribeCheckViewRisksRequest,
  DescribeDspmAssetFieldListRequest,
  BaselineSubCategory,
  DescribeVULRiskDetailRequest,
  DescribeNotifyAgentOfflineDurationRequest,
  CreateVulRisksExportJobRequest,
  CreateAssetProcessExportJobResponse,
  DescribeClusterContainerDetailRequest,
  DescribeVULRiskDetailResponse,
  ModifyRiskCenterScanTaskResponse,
  DescribeCWPTaskDurationRequest,
  RiskRuleItem,
  EDRExportJobItem,
  DescribeEdrExportJobListResponse,
  DspmAssetIdentifyInfo,
  ModifyBanModeResponse,
  DescribeDspmAssetAccountIdentifyRequest,
  RiskRuleInfo,
  DeleteMachineClearHistoryResponse,
  DescribeDspmApplyHistoryRequest,
  CreateAssetSyncTaskResponse,
  LogFullTextInfo,
  AssetInfoDetail,
  CSIPMachineExtraInfo,
  ModifyMalwareTimingScanSettingsRequest,
  CreateDspmIdentifyComplianceCategoryRelationResponse,
  DescribeRaspLicenseListResponse,
  OperateRiskRulePolicyResponse,
  DescribeClusterNodeListRequest,
  DbAssetInfo,
  DescribeAIScheduleStatsRequest,
  DescribeTaskPredictCostQuotaRequest,
  DescribeVulHostRelateComponentResponse,
  DeleteDspmIdentifyComplianceGroupRequest,
  ModifyAlarmRiskStatusResponse,
  OperateRiskResponse,
  AssetClusterPod,
  StopEDRScanTaskResponse,
  DescribeRiskScanCronConfigResponse,
  DescribeSecurityScoreOverviewRequest,
  AssetViewWeakPassRisk,
  ModifyPolicyStatusResponse,
  ClusterIDWithAppIdItem,
  ModifyBanModeRequest,
  CreateIaCFileReScanTaskRequest,
  CosBucketInfo,
  DescribeRiskCenterPortViewPortRiskListResponse,
  DescribeDspmPersonApplyHistoryRequest,
  AssetTypeStatisticsInfo,
  DescribeAIScheduleTaskDetailResponse,
  DescribeNotifySettingAlertResponse,
  DescribeRiskCenterVULViewVULRiskListRequest,
  DisableAIScheduleResponse,
  DescribeExposeRisksResponse,
  DimensionTrendData,
  DescribeDefaultSecurityScoreRuleResponse,
  DescribeBaselineItemRiskListResponse,
  ModifyMachinesLoginTypeResponse,
  DescribeClusterContainerPortListResponse,
  DescribeCloudFunctionListResponse,
  ModifyNotifySettingRequest,
  CreateAssetProcessExportJobRequest,
  CreateSkillScanRequest,
  SCFFunctionInfo,
  DescribeVulScanTaskDetailRequest,
  ModifyIaCTokenPeriodRequest,
  DescribeCspmShardConfigRequest,
  DescribeDspmRiskRequest,
  EDRRule,
  ModifyExposureAutoTagRuleStatusResponse,
  ModifyAssetTagRequest,
  DspmDatabasePrivilege,
  DescribeScanTaskRecordListResponse,
  CreateRiskDetailExportJobRequest,
  DescribeClusterPodDetailRequest,
  DescribeDspmPersonalIdentifyListRequest,
  VulScanTaskDetail,
  DescribeDspmIdentifyDistributionStatisticsRequest,
  DescribeDbAssetsRequest,
  AddLoginWhiteListsResponse,
  LogContextInfo,
  AddLoginWhiteListsRequest,
  ModifyProtectionSettingResponse,
  CreateClusterContainerListExportJobRequest,
  DescribeAKAnalysisDetailRequest,
  DescribeDspmStatisticsResponse,
  CreateClusterListExportJobRequest,
  DescribeUebaRuleResponse,
  NetworkCardInfo,
  CloudFromCnt,
  DspmDbAccountPrivilege,
  UserItem,
  DescribeAssetTreeResponse,
  ClbListenerListInfo,
  Element,
  ProductSupport,
  ScanBaselineItemListResponse,
  DescribeSCFFunctionListResponse,
  WebhookCustomField,
  CreateCosPolicyResponse,
  ExposeAssetTypeItem,
  DescribeDbAssetsResponse,
  ScanBaselineAssetItemListRequest,
  ModifyBruteAttackBanStatusRequest,
  CsipRiskCenterStatistics,
  DescribeCWPMachineDetailRequest,
  DeleteClusterResponse,
  ModifyBruteAttackBanStatusResponse,
  ScanBaselineAssetItemListResponse,
  ModifyNotifyAgentOfflineDurationResponse,
  DeleteExposureAutoTagRuleResponse,
  CustomRiskRuleDetailItem,
  ReportItemKey,
  HostLoginWhiteObj,
  DescribePortDetectListResponse,
  KeyValue,
  ModifyAssetCoreAttributeRequest,
  OperateRiskRulePolicyRequest,
  DescribeExposureAutoTagAttributeRequest,
  DescribeCheckViewRisksResponse,
  ScanCSIPTaskAgainRequest,
  DescribeEdrExportJobDownloadURLRequest,
  DeleteIaCFileResponse,
  DeleteEDRRulesRequest,
  LighthouseFirewallRule,
  ModifyEdrExcludeNetworkSegmentsResponse,
  ModifyDspmPersonalIdentifyRequest,
  LogRuleKeyValueInfo,
  DspmAssetIdentifyTaskStatus,
  ModifyDspmApproveStatusRequest,
  BaselineAggregatedCategory,
  DescribeMachineClearHistoryRequest,
  DescribeRiskRulesResponse,
  DescribeTaskPredictCostQuotaResponse,
  DescribeScanTaskListRequest,
  NodeInfo,
  DescribeScfCustomDomainEndpointsRequest,
  DescribeOrganizationInfoRequest,
  DescribeDspmBackupLogListRequest,
  UserCallRecord,
  DeleteLoginWhiteListRequest,
  LogItems,
  ModifyDspmWhitelistStrategyResponse,
  DescribeKeySandboxCredentialRequest,
  DspmApproverStep,
  DescribeDspmIdentifyComplianceGroupDetailRequest,
  CreateAssetTagResponse,
  ModifyExposureAutoTagRuleResponse,
  DescribeCloudFunctionListRequest,
  DescribeKeySandboxCredentialListResponse,
  DescribeNFSScanHostResponse,
  AttributeOptionSet,
  DeleteDspmApplyOrderRequest,
  SubUserInfo,
  CloudCountDesc,
  DescribeClusterAssetSyncTaskStatusResponse,
  ModifyNFSScanHostRequest,
  DescribeAssetSyncTaskStatusResponse,
  DescribeAgentConfigSettingResponse,
  BaselineItem,
  CosRiskActionInfo,
  ClusterPodListItem,
  DescribeDspmIdentifyRuleListResponse,
  ScoreRuleItem,
  ModifyDspmIdentifyComplianceRuleLevelInfoResponse,
  RegionConfig,
  DescribeUserDspmInfoListRequest,
  DescribeCosAlarmListRequest,
  DescribeVulItemListRequest,
  DescribeClusterNamespaceListRequest,
  DescribeBaselineCalculatingStatisticsPolicyIDListRequest,
  CosBucketTaskInfo,
  StopProcessDaemonRequest,
  AssetTypeNode,
  DescribeBanModeRequest,
  DescribeDspmIdentifyInfoRequest,
  DescribeUserCallRecordResponse,
  DescribeDspmIdentifyInfoListRequest,
  ClbListenerRuleItem,
  ModifyCosAuditBucketMonitorStatusResponse,
  DspmDictionary,
  CosDictionary,
  DescribeMandatoryVulSetResponse,
  DescribeBaselinePolicyItemListRequest,
  VulHostBriefInfo,
  DescribeCosAlarmListResponse,
  ModifyCosAuditObjectSampleRateResponse,
  DescribeDspmAssetTableListRequest,
  ModifyAssetTagsRequest,
  CreateDspmIdentifyComplianceRuleRelationRequest,
  DescribePolicyHitDataRequest,
  CSIPMalwareScanUuidDetailItem,
  DescribeCosAccessPermissionRequest,
  DescribeEdrAlertSummaryResponse,
  StopBaselineScanTaskRequest,
  CreateDspmAccessExportJobResponse,
  DescribeAssetTagAttributesRequest,
  DspmIpCount,
  DescribeClusterPodDetailResponse,
  MachineDetail,
  DescribeProcessDaemonHostRequest,
  ModifyNetAttackSettingResponse,
  AttackStageCount,
  BaselinePolicySubCategoryConf,
  DescribeBaselinePolicyCategoryListResponse,
  DescribeClusterContainerComponentListResponse,
  StartOrModifyPreventUninstallResponse,
  DescribeProcessDaemonGlobalConfResponse,
  CreateEdrAlertExportJobRequest,
  RaspLicenseList,
  BaselineCategory,
  DescribeEdrAlertCountForContainerResponse,
  DescribeDspmIdentifyLevelGroupListRequest,
  CreateHostVulExportJobRequest,
  DescribeAssetTagsRequest,
  DescribeBaselinePolicyListResponse,
  ModifyRaspLicenseBindsResponse,
  DescribeEDRScanRecordListResponse,
  BaselineOverviewStatistic,
  CreateDspmIdentifyInfoListExportJobRequest,
  CreateVulFixTaskRequest,
  BaselineAggregatedPolicy,
  BruteAttackRuleList,
  Vpc,
  CreateIaCAccessTokenRequest,
  ModifyMachinesLoginTypeRequest,
  DomainInfo,
  DescribeAgentRunPolicyRequest,
  DescribeIaCFileListResponse,
  DescribeBaselineAggregatedPolicyListResponse,
  DescribeSecurityRiskTrendResponse,
  DescribeLoginTypeGlobalConfRequest,
  ComponentDetailItem,
  DescribeCLSLogIndexV3Request,
  DescribeUserInfoRequest,
  EDRScanTaskContainerItem,
  AiScheduleTaskInfo,
  DescribeProcessDaemonGlobalConfRequest,
  CheckRiskRequest,
  ModifyAssetTagResponse,
  DescribeDspmBackupSettingResponse,
  DescribeCosAkAssetResponse,
  DescribeCWPMachineOsListRequest,
  ModifyMachineRemarkRequest,
  DescribeTagRuleAssetsResponse,
  DescribeSourceIPAssetResponse,
  ModifyWebhookReceiverRequest,
  CreateIaCFileExportJobResponse,
  AccountBriefInfo,
  DescribeDspmApplyOrderListResponse,
  AssetViewVULRiskData,
  DescribeAssetFilterViewsResponse,
  ModifyMachinesLoginTypeTask,
  NICAsset,
  ModifyLoginWhiteRecordRequest,
  DescribeAccessKeyRiskDetailResponse,
  DescribeAIAnalysisFileDownloadURLRequest,
  DspmIdentifyComplianceItem,
  DescribeOrganizationInfoResponse,
  DescribeMultiCloudAssetCountResponse,
  DescribeAISchedulePlanListResponse,
  BruteAttackRule,
  DeleteEdrLogCollectPathsRequest,
  UserDspmInfo,
  WebhookReceiver,
  RuleContentCmdLine,
  DescribeKBDetailResponse,
  DspmColumnPrivilege,
  DescribeCosBucketListResponse,
  ModifyDspmIdentifyLevelGroupResponse,
  CreateHighBaseLineRisksExportJobRequest,
  DescribeExposeRulesResponse,
  CosRiskInfo,
  RetryDspmExportLogRequest,
  DescribeMachineGeneralRequest,
  DescribeHostVulItemVPRInfoRequest,
  LicenseBindTaskDetail,
  StopProcessDaemonResponse,
  CreatePodContainerListExportJobRequest,
  DescribeCosPolicyRequest,
  DescribeCWPMachinesRequest,
  DspmIdentifyComplianceRuleRelation,
  LogSearchInfos,
  CreateAssetViewRisksExportJobRequest,
  DescribeWebhookReceiverListResponse,
  DescribeDspmAssetAccessTopologyRequest,
  ModifyBaselinePolicyEnableResponse,
  ContainerProcessItem,
  AssetViewPortRisk,
  DspmArea,
  DescribeDspmRiskStrategyGroupResponse,
  DspmIdentifyRefComplianceInfo,
  DescribeCosAkInvokeIpListResponse,
  DescribeSCFFunctionVersionListResponse,
  ReportTaskIdList,
  DescribeRepositoryImageAssetsRequest,
  DescribeAssetRiskDetailResponse,
  ModifyDspmIdentifyComplianceRuleLevelInfoRequest,
  HostKBRisk,
  AiSchedulePlanInfo,
  DescribeDspmIdentifyCategoryListResponse,
  UebaRule,
  CosPolicyInfo,
  DescribeAccessKeyRiskDetailRequest,
  ModifyAssetTagsResponse,
  DescribeEdrExcludeNetworkSegmentsRequest,
  DescribeCosIpInvokeLogResponse,
  ModifyExposureTagRequest,
  CreatePodServiceListExportJobRequest,
  CreatePodServiceListExportJobResponse,
  BaselinePolicySystemCategoryConf,
  ModifyDspmIdentifyRuleStatusRequest,
  CreateComplianceRiskExportJobRequest,
  VulInfoListItem,
  CosAssetDataScanDetail,
  ModifyDspmApplyingIdentifyComplianceGroupResponse,
  ComplianceCheckTypeItem,
  StandardModeConfig,
  AddDspmAssetManagerResponse,
  LicenseBindScheduleItem,
  DescribeNFSScanHostRequest,
  DeleteAIScheduleResponse,
  DescribeCosOverviewResponse,
  DescribeVULRiskAdvanceCFGListResponse,
  DescribeWebhookPolicyListResponse,
  ModifyAgentConfigSettingRequest,
  CreateDspmAssetAccessTopologyExportJobRequest,
  EDRFilter,
  DescribeCosObjectScanTaskResponse,
  DescribeCSIPMalwareScanTaskProgressResponse,
  PublicAssetInfo,
  DescribeDspmIdentifyComplianceGroupListResponse,
  DescribeExposureTrendRequest,
  AssetViewCFGRisk,
  CreateScanTaskRequest,
  RuleStatisticsItem,
  BehaviorInfo,
  DspmAssetSecurityAnalyseStatus,
  ComplianceTermItem,
  BackupLog,
  CreateEdrLessAlertExportJobResponse,
  BaselineSystemCategory,
  DeleteEdrLogCollectPathsResponse,
  TaskCenterWeakPwdRiskInputParam,
  DescribeDspmAssetSupportedPrivilegesResponse,
  DescribeDomainAssetsRequest,
  DescribeNICAssetsRequest,
  DescribeDspmAssetFieldListResponse,
  ModifyWebhookPolicyRequest,
  DescribeAccessKeyUserListRequest,
  UpdateAlertStatusListResponse,
  TrendDataPoint,
  DescribeIpInvokeRecordDetailResponse,
  CosAccessInfo,
  DescribeRiskRuleDetailRequest,
  DescribeDspmPersonalIdentifyListResponse,
  UebaEventContent,
  DescribeAIAnalysisSMTPRequest,
  CreateAccessKeySyncTaskResponse,
  ModifyIaCTokenPeriodResponse,
  EdrAlertItem,
  DescribeVulFixableMachineListRequest,
  DescribeEdrAlertInfoRequest,
  TaskLogURL,
  DescribeVulLabelListResponse,
  DeleteDspmIdentifyComplianceRuleRelationRequest,
  LogItem,
  ModifyAgentRunPolicyResponse,
  DescribeExportJobDownloadURLRequest,
  DescribeDspmAssetDatabaseListRequest,
  DescribeIaCTokenListRequest,
  ModifyProtectionSettingRequest,
  ServerRisk,
  CheckRiskResponse,
  DescribeDspmAssetAccountIdentifyResponse,
  CreateVulFixedExportJobResponse,
  LogIndexRuleInfo,
  DescribeDspmIdentifyDistributionStatisticsResponse,
  DescribePublicIpAssetsRequest,
  DescribeVulLabelListRequest,
  DescribeDspmSyncAssetsStatusResponse,
  DuplicateHosts,
  AIAnalysisSession,
  DeleteDspmRestoreLogListResponse,
  DspmAssetInstance,
  CreateDspmIdentifyInfoListExportJobResponse,
  TaskCenterVulRiskInputParam,
  CreateEDRManualScanRequest,
  ModifyExposureAutoTagRuleStatusRequest,
  ModifyVulWhitelistSwitchResponse,
  Tags,
  DescribeAbTestUserRequest,
  ProtectionConfigItem,
  DescribeCosRiskActionListResponse,
  DescribeAccessKeyRiskResponse,
  LogDynamicIndex,
  DescribeDspmApplyHistoryResponse,
  CreateAccessKeyCheckTaskRequest,
  DspmFrequency,
  ExportCSIPMalwareScanTaskDetailResponse,
  ClusterNamespaceListItem,
  DescribeVulFixedListResponse,
  TestWebhookReceiverRequest,
  DescribeExposureAutoTagRulesResponse,
  DynamicTab,
  ModifyDspmRestoreLogTaskResponse,
  DescribeClusterContainerAppListResponse,
  ConditionMatch,
  DspmStatisticsItem,
  ModifyProtectionSetting,
  DeleteIaCFileRequest,
  DescribeClusterListV2Request,
  DeleteDspmExportTaskResponse,
  DomainAssetVO,
  DescribeAccessKeyUserDetailResponse,
  DescribeComplianceOverviewRequest,
  AssetTagPreviewAssetItem,
  DescribeExposureAutoTagAttributeResponse,
  DspmIdentifyRuleStructuredTestItem,
  DeleteAssetFilterViewRequest,
  DescribeScanTaskRecordListRequest,
  DescribePreventUninstallGlobalConfResponse,
  DescribeRiskCenterServerRiskListRequest,
  DescribeKBDetailRequest,
  ModifyNotifyAssetConfigResponse,
  DescribeDspmBackupLogListResponse,
  EdrContainerGlobalCount,
  DescribeAbnormalCallRecordResponse,
  CreateDomainAndIpResponse,
  DescribeAISchedulePlanListRequest,
  DescribeClusterDetailResponse,
  DescribeSubUserInfoRequest,
  SendDspmAssetLoginSmsCodeRequest,
  InstallClusterAgentRequest,
  CreateEDRManualScanResponse,
  DescribeVulRiskRelateHostResponse,
  DescribePortScanTaskCountRequest,
  CreateDspmRiskExportJobRequest,
  DspmAssetDataScanDetail,
  DescribeExportJobManageListRequest,
  DescribeDspmAssetAccountRecycledPrivilegesRequest,
  DescribeOtherCloudAssetsResponse,
  CreateCheckViewRisksExportJobRequest,
  CosInvokeLog,
  DetectTypeCount,
  DescribeVulRiskRelateComponentResponse,
  CosIdentifyCategoryDetail,
  VulComponentSummary,
  DeleteDspmPersonalIdentifyResponse,
  DescribeHostVulOverviewResponse,
  DescribeVulFixedHostDetailRequest,
  DescribeConfigCheckRulesRequest,
  CreateBaselineMainTaskExportJobRequest,
  KBDetail,
  VulWhitelist,
  ModifyAlarmRiskStatusRequest,
  DescribeCosObjectScanTaskRequest,
  TableField,
  AgentRunModePolicy,
  RoleInfo,
  DescribeBaselineCategoryItemListRequest,
  ModifyWebhookReceiverResponse,
  DescribeDspmWhitelistStrategyResponse,
  CreatedTaskItem,
  DescribeDspmSupportedAssetTypeResponse,
  AssetTypeCount,
  DescribeCspmShardConfigResponse,
  DspmIdentifyInfoItem,
  DescribeDspmAssetFieldSamplesResponse,
  SubnetAsset,
  ContainerEnvInfo,
  DescribeExportJobDownloadURLResponse,
  VULRiskAdvanceCFGList,
  ContainerAppItem,
  DescribeBaselineMainTaskListRequest,
  DeleteAIAnalysisSMTPAccessResponse,
  DescribeVdbAndPocInfoRequest,
  DescribePublicCloudAssetsResponse,
  ModifyEdrAlertIsolationResponse,
  DspmIdentifyCategoryDetail,
  AccessKeyAlarm,
  CreateVulScanManualRequest,
  DescribeAIAnalysisFileDownloadURLResponse,
  DescribeVulFixedListRequest,
  DescribeVulFixTaskListResponse,
  DescribeMachineLoginTypeResponse,
  DescribeDspmIdentifyComplianceCategoryRuleListResponse,
  DeleteDspmAssetAccountRequest,
  UninstallClusterAgentResponse,
  ModifyVulScanPeriodicResponse,
  SecurityGroupPolicyItem,
  DescribeDspmAccessTopologyAssetsRequest,
  DescribeExposeRiskStatisticsRequest,
  VULRiskInfo,
  BindClusterOwnerRequest,
  DescribePublicIpAssetsResponse,
  EnableAIScheduleRequest,
  DescribeEDRRuleListResponse,
  ModifyDspmAccessRecordResponse,
  DescribeDspmIdentifyRuleDetailRequest,
  DescribeAssetViewVulRiskListRequest,
  DescribeDynamicAssetsRequest,
  Filter,
  DescribeNotifyAssetConfigRequest,
  StopPreventUninstallResponse,
  DescribeDspmExportTaskRequest,
  DescribeVulScanTaskListRequest,
  DescribeCosBucketRiskRequest,
  DescribeKeySandboxCredentialListRequest,
  DescribeDspmAssetsResponse,
  DescribeDspmAccessTopologyAccountsRequest,
  DescribeClusterSuperNodeInfoRequest,
  DescribeDspmIdentifyComplianceGroupListRequest,
  CloudAssetInfo,
  TaskCenterCFGRiskInputParam,
  DescribeDspmAssetSecurityAnalyseStatusRequest,
  CreateAssetFilterViewResponse,
  DescribeVulScanPeriodicRequest,
  DescribeSubUserInfoResponse,
  DescribeDomainAssetsResponse,
  DescribeNICAssetsResponse,
  ModifyCosAuditObjectIdentifyStatusRequest,
  LogSearchResult,
  LogSearchErrors,
  ContainerComponentItem,
  ModifyDspmIdentifyRuleStatusResponse,
  DescribeListenerListRequest,
  DescribeClusterContainerProcessListResponse,
  DeleteIaCAccessTokenRequest,
  DeleteRiskScanTaskResponse,
  DescribeClusterAssetListRequest,
  TagItem,
  DescribeCSIPLicenseBindScheduleResponse,
  BaselineRiskLevelStatistic,
  DescribeRiskBucketListResponse,
  DescribeBaselineFixRecordListRequest,
  DeleteRiskScanTaskRequest,
  DescribeHostVulRiskListResponse,
  CreatePodContainerListExportJobResponse,
  ScfCustomDomainEndpointItem,
  CreateVulReScanRequest,
  DescribeEdrExportJobListRequest,
  ScanBaselineItemListRequest,
  DescribeClbListenerRulesRequest,
  DescribeCosAssetResponse,
  CreateCosAssetSyncTaskResponse,
  BaselineClusterAsset,
  DescribeDspmAssetAccessTopologyResponse,
  ModifyRuleItem,
  AssetStatisticsInfo,
  StopCSIPManualMalwareScanResponse,
  ModifyWebhookPolicyStatusResponse,
  CWPOrderList,
  DspmSupportedAssetType,
  DescribeExposureStatisticsItem,
  DspmAccountCount,
  ModifyDspmRiskStrategyRequest,
  CreateDspmAssetIdentifyInfoExportJobResponse,
  DescribeDspmAccessTopologyIpsResponse,
  DescribeEdrAlertListRequest,
  DescribeRiskCenterWebsiteRiskListResponse,
  VulSpreadTrend,
  SyncDspmAssetsResponse,
  DescribeCosActionListResponse,
  DescribeBaselineUserOtherConfRequest,
  DescribeIaCTokenListResponse,
  DescribeWebhookReceiverListRequest,
  ClusterListItem,
  DescribeNFSScanConfResponse,
  MachineTag,
  DescribeDspmDictionaryListRequest,
  CheckViewRiskItem,
  DescribeNetAttackSettingResponse,
  DescribeCosIpInvokeRecordFileRequest,
  ExportCSIPMalwareScanTaskDetailRequest,
  EDRFilters,
  CreateRiskCenterScanTaskResponse,
  DescribeCWPMachineDetailResponse,
  StopRiskCenterTaskResponse,
  DescribeVpcAssetsRequest,
  DescribeExposePathRequest,
  RetryDspmExportLogResponse,
  DescribeDspmAssetIdentifyInfoListResponse,
  ClientSettingHost,
  SendDspmAssetLoginSmsCodeResponse,
  DescribeRiskCenterAssetViewCFGRiskListResponse,
  DeleteAssetTagRequest,
  DescribeBaselineMainTaskItemListResponse,
  IPIntelInfo,
  ProviderNode,
  DescribeCWPMachineOsListResponse,
  DescribeCosAccessPermissionsResponse,
  DescribeClusterContainerListResponse,
  ModifyDspmIdentifyRuleRequest,
  AssetRiskContent,
  DescribeSourceIPAssetRequest,
  DeleteLoginWhiteListResponse,
  RepositoryImageVO,
  UpdateClusterOwnerResponse,
  DeleteDomainAndIpResponse,
  DescribeEDRRuleListRequest,
  DescribeScanStatisticResponse,
  DescribeExposuresRequest,
  DeleteCosAkAssetResponse,
  DescribeDspmApproveOrderListResponse,
  CreateDomainAndIpRequest,
  LicenseBindFailedItem,
  CustomRiskRuleItem,
  DescribeDspmAssetSupportedPrivilegesRequest,
  DescribeEdrAlertCountForAssetResponse,
  DescribeAIAnalysisHistoryRequest,
  ModifyAssetCoreAttributeResponse,
  CreateDspmAssetsExportJobRequest,
  DescribeGatewayAssetsRequest,
  DeleteAssetFilterViewResponse,
  DescribeRiskCallRecordRequest,
  SeverityItem,
  ModifyRiskCenterRiskStatusResponse,
  DescribeBaselinePolicyNameExistAppidListRequest,
  DescribeEdrAlertInfoResponse,
  ModifyRaspLicenseBindsRequest,
  CreateDspmApproveHistoryExportJobRequest,
  VPRRatingInfo,
  ModifyEdrExcludeNetworkSegmentsRequest,
  AssetProviderDistributeInfo,
  DescribeCosRoleAccessPermissionsResponse,
  DescribeEDRScanRecordListRequest,
  DescribeOrganizationUserInfoRequest,
  ModifyDspmAssetAccountPrivilegesRequest,
  FilterDataObject,
  UpdateAccessKeyRemarkResponse,
  CreateCosRiskScanTaskResponse,
  DescribeNatRulesResponse,
  DescribeRiskCenterRiskTrendAnalysisRequest,
  DescribeCosRoleAccessPermissionResponse,
  ResetDspmAssetAccountPasswordResponse,
  WebhookReceiverBrief,
  DescribeClusterInstallCommandRequest,
  DescribeVpcAssetsResponse,
  DescribeClusterContainerWebServiceListResponse,
  DescribeDspmAssetAccountPresetPrivilegesResponse,
  ModifyCSIPRaspLicenseBindsRequest,
  LogAppCollectPath,
  RiskCronConfig,
  UebaCustomRule,
  DspmIdentifyCount,
  CreateScanTaskResponse,
  DescribeMandatoryVulSetRequest,
  CreateIaCAccessTokenResponse,
  DspmAssetTypeCount,
  DeleteWebhookReceiversRequest,
  DescribeLoginTypeHostRequest,
  DescribeDspmApproveHistoryRequest,
  DescribeClusterAssetListResponse,
  DescribeDspmAssetFieldSamplesRequest,
  DescribeAIScheduleTaskListRequest,
  DspmPersonApplyHistoryItem,
  DescribeIaCFileReportRequest,
  DeleteAssetTagResponse,
  DescribeAIScheduleTaskListResponse,
  ModifyVulWhitelistConfigRequest,
  LicenseStatusItem,
  TestWebhookReceiverResponse,
  ModifyDspmAssetDataScanTaskResponse,
  DescribeMachineGeneralResponse,
  DescribeClusterSummaryResponse,
  WebhookNotifyItem,
  DescribeVdbAndPocInfoResponse,
  DescribeBaselineMainTaskItemListRequest,
  DescribeNotifySettingAlertRequest,
  DescribeDspmLogListRequest,
  DescribeDspmAccessRecordResponse,
  DescribeBaselineCalculatingStatisticsPolicyIDListResponse,
  DescribeCosAuditAppIdListRequest,
  ModifyDspmIdentifyLevelItemResponse,
  CreateRiskCenterScanTaskRequest,
  OrderDetail,
  ModifyEDRRulesActionResponse,
  CreateCosObjectScanTaskRequest,
  ScanBaselinePolicyListResponse,
  DescribeScanTaskListResponse,
  LicenseUnbindFailedItem,
  DeleteDspmApplyOrderResponse,
  RevertDspmAssetAccountRequest,
  DescribeDspmAssetIdentifyInfoListRequest,
  HostVulOverview,
  DescribeAILinkSettingRequest,
  ModifyDspmBackupSettingResponse,
  DescribeAIAgentAssetListResponse,
  ModifyDspmIdentifyComplianceGroupStatusRequest,
  ModifyDspmAssetDataScanTaskRequest,
  ModifyDspmAssetDataScanTaskStatusRequest,
  CancelEdrAlertIgnoreResponse,
  DspmAssetTableInfo,
  CreateDspmApplyOrderResponse,
  ModifyEDRRuleRequest,
  DescribeRiskCenterWebsiteRiskListRequest,
  DescribeDspmStatisticsRequest,
  DescribeCFWAssetStatisticsResponse,
  DescribeSCFFunctionListRequest,
  DescribeKBUpdatableMachineListRequest,
  DescribeCosIdentifyFileListResponse,
  DspmIdentifyCategoryRuleRelateItem,
  NatDnatRuleItem,
  DescribeUebaBehaviorSummaryRequest,
  DescribeExposePathResponse,
  DeleteDspmWhitelistStrategyResponse,
  TaskLogInfo,
  LogColumn,
  DescribeTaskLogURLResponse,
  ModifyNotifyAssetConfigRequest,
  Machine,
  DescribeCosAuditDictionaryListResponse,
  DeleteAIAnalysisSMTPAccessRequest,
  DescribeComplianceStandardTermTreeRequest,
  CreateClusterNamespaceListExportJobResponse,
  EdrAlertDetail,
  DescribeSCFNamespaceListRequest,
  NotPassItemStatistic,
  DescribeNFSScanConfRequest,
  DspmDbAsset,
  DescribeRiskItemListRequest,
  DescribeAssetOverviewRequest,
  DescribeAssetInfoResponse,
  DescribeTagRuleAssetsRequest,
  DescribeBaselineSyncConfRequest,
  ModifyUebaRuleSwitchRequest,
  CreateBaselineMainTaskExportJobResponse,
  DescribeScanStatisticRequest,
  DescribeCFGRiskReportStatisticsRequest,
  ModifyNotifySettingAlertResponse,
  BaselineSubTask,
  DescribeClbTargetsRequest,
  DescribeClbListenerListRequest,
  SkillCapabilityTag,
  DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
  DescribeAssumeRoleRequest,
  CreateDspmWhitelistStrategyResponse,
  DescribeCosRoleAccessPermissionRequest,
  DescribeCSIPMalwareScanTaskDetailRequest,
  DescribeCosAuditAppIdListResponse,
  DescribeAssetViewVulRiskListResponse,
  CosAuditPayInfo,
  AssetRiskInfo,
  CreateBaselineFixRecordExportJobResponse,
  CVMAssetVO,
  VULBaseInfo,
  ModifyEDRRulesActionRequest,
  NatSnatRuleItem,
  RelatedEvent,
  CommandPluginState,
  EnableAIScheduleResponse,
  DescribeBaselineSystemCategoryListResponse,
  ProtectionDetail,
  CreateIaCFileReScanTaskResponse,
  ModifyDspmAssetSecurityAnalysisSwitchRequest,
  DeleteCosAkAssetRequest,
  DescribeNotifyAssetConfigResponse,
  VerifyDspmAssetLoginCodeRequest,
  DescribeIaCFileReportResponse,
  CreateComplianceRiskExportJobResponse,
  DescribeDefaultSecurityScoreRuleRequest,
  DescribeDspmPersonApplyHistoryResponse,
  DescribeAssetProcessListResponse,
  CreateDspmWhitelistStrategyRequest,
  DescribeVulHostRelateComponentRequest,
  DimensionItem,
  ComplianceStandardOverview,
  StopVulScanTaskResponse,
  MiniTagItem,
  CheckCWPExposePathPermissionResponse,
  DescribeDspmRiskDetailResponse,
  DescribeCosRiskScanTaskRequest,
  DescribeEdrAlertMultiAttackStagesRequest,
  DeleteCosPolicyResponse,
  SkillScanEngineResult,
  DescribeMultiCloudAssetCountRequest,
  WebsiteRisk,
  DescribeClusterServiceListResponse,
  RiskCenterOverviewTrendAnalysis,
  VULViewVULRisk,
  DescribeCVMAssetsResponse,
  CreateAllAssetsExportJobResponse,
  DescribeDspmBackupSettingRequest,
  ModifyMalwareTimingScanSettingsResponse,
  CosSourceIpInfo,
  ServiceSupport,
  ModifyAILinkSettingRequest,
  CosBucketId,
  DescribeNotifySettingResponse,
  CreateDspmExportTaskResponse,
  DescribeDspmAssetIdsRequest,
  PortViewPortRisk,
  CreateDspmExportTaskRequest,
  DescribeUserCallRecordRequest,
  AlertInfo,
  DspmWhitelistStrategy,
  CreateDspmIdentifyLevelGroupRequest,
  CreateVulRisksExportJobResponse,
  TrafficRuleState,
  DescribePortDetectListRequest,
  DeleteExposureAutoTagRuleRequest,
  DescribeEdrAlertMultiAttackStagesResponse,
  CopyBaselinePolicyResponse,
  ModifyReverseShellSystemPolicyConfigResponse,
  DescribeClusterAssetSyncTaskStatusRequest,
  DescribeRiskCenterPortViewPortRiskListRequest,
  DescribeAccessKeyUserDetailRequest,
  DescribeAlertListRequest,
  ExposesItem,
  CreateDynamicAssetsExportJobResponse,
  DescribeBruteAttackRulesRequest,
  DescribeDspmIdentifyRuleDetailResponse,
  ModifyBruteAttackRulesResponse,
  DspmPersonIdentifyItem,
  DescribeClusterPodListResponse,
  ScanTaskInfoList,
  ModifyDspmAssetDataScanTaskStatusResponse,
  ScanBaselineRiskListRequest,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  DspmScheduleConfig,
  DescribeCWPExposePathRequest,
  DeleteDspmBackupLogListRequest,
  ModifyPayConfigRequest,
  DescribeCVMAssetsRequest,
  BaselineMainTask,
  DescribeOtherCloudAssetsRequest,
  DescribeAILinkSettingResponse,
  DescribeSecurityRiskTrendRequest,
  CosAlarmRiskIdInfo,
  BatchModifyBaselinePolicyRequest,
  DescribeDspmWhitelistStrategyRequest,
  DescribeWebhookPolicyListRequest,
  DescribeClusterNodeListResponse,
  DescribeBaselineUserWeakPasswordConfRequest,
  DescribeCosRiskEvidenceResponse,
  DescribeNotifyAgentOfflineDurationResponse,
  DescribeExposeRisksRequest,
  ExportTasksResponse,
  DescribeDbAssetInfoResponse,
  BugInfoDetail,
  DescribeAIScheduleTaskDetailRequest,
  CosInvokeIpVpcInfo,
  CreateCFGRisksExportJobRequest,
  ClbListenerItem,
  VulFixTaskDetailItem,
  ModifyVulWhitelistConfigResponse,
  WebhookAssetScope,
  DescribeAKAnalysisDetailResponse,
  DeleteDspmIdentifyRuleRequest,
  DescribeCloudAssetsResponse,
  StopRiskCenterTaskRequest,
  DescribeSkillScanResultResponse,
  DspmDbAssetId,
  CreateCheckViewRisksExportJobResponse,
  ModifyDspmAccessRecordRequest,
  DescribeMachineLoginTypeRequest,
  DescribeCosAkInvokeIpListRequest,
  DescribeCosBucketRiskResponse,
  DescribeCosRoleAccessPermissionsRequest,
  DeleteEDRScanTaskRequest,
  LogTopicIndexInfo,
  DescribeComplianceStatisticsResponse,
  ModifyMachineAutoClearConfigResponse,
  VulFixStatusItem,
  AssetRiskItem,
  DescribeRiskDetailListRequest,
  DescribeUebaUserSummaryRequest,
  DescribeNotifySettingRequest,
  DescribeClusterContainerListRequest,
  ModifyEdrLogCollectPathRequest,
  AiScheduleTriggerInfo,
  DescribeAgentRunModeResponse,
  DescribeClusterPodListRequest,
  SyncDspmAssetsRequest,
  DescribeScanReportListResponse,
  ModifyBaselineUserWeakPasswordConfResponse,
  DescribeLoginWhiteCombinedListResponse,
  DescribeCosInvokeUaResponse,
  StartOrModifyPreventUninstallRequest,
  DescribeListenerListResponse,
  HostBriefInfo,
  VulFixedItem,
  ModifyCSIPLicenseUnBindsRequest,
  DescribeCosAuditPayInfoResponse,
  VULViewVULRiskData,
  CreateAssetSyncTaskRequest,
  DescribeCWPExposePathResponse,
  LogSearchTopics,
  CreateCosRiskScanTaskRequest,
  AccessKeyUser,
  DescribeAIAnalysisRobotInfoRequest,
  StartOrModifyProcessDaemonRequest,
  DescribeDspmAssetTableListResponse,
  ModifyCosAuditObjectSampleRateRequest,
  DescribeCWPLicenseBindScheduleResponse,
  DspmIdentifyIdItem,
  CreateDspmIdentifyCategoryRequest,
  DescribeDspmAccessRecordRequest,
  DescribeClusterContainerComponentListRequest,
  DescribeVulScanPeriodicResponse,
  DescribeAgentRunModeRequest,
  DescribeRiskCenterVULViewVULRiskListResponse,
  DspmAccessRecord,
  CheckIsUltimateVersionRequest,
  AddVulWhitelistRequest,
  DescribeCosAssetSyncTaskRequest,
  AIScheduleUserIdentity,
  DescribeCosAlarmTrendDataResponse,
  CreateClusterNodeListExportJobRequest,
  DeleteBaselineSelfDefinedPolicyListResponse,
  DeleteEDRScanTaskResponse,
  DescribeCosBucketListRequest,
  DeleteBaselineSelfDefinedPolicyListRequest,
  DspmIdentifyLevelGroupItem,
  DeleteCSIPMalwareScanTaskResponse,
  ServerRiskSuggestion,
  DescribeAssetSyncTaskStatusRequest,
  DescribeDspmApplyOrderListRequest,
  CallRecord,
  UebaUserSummary,
  CreateAssetTagRequest,
  DescribeClusterContainerAppListRequest,
  ModifyCspmShardConfigRequest,
  CreateScanStatisticExportJobRequest,
  BaselineUserOtherConf,
  DescribeVulFixedHostDetailResponse,
  DescribeHostKBRiskListRequest,
  DescribeBaselinePolicyItemListResponse,
  AssetFilterOptions,
  DescribeClusterContainerPortListRequest,
  DeleteDspmIdentifyRuleResponse,
  ModifyDspmRiskInfoResponse,
  BindClusterOwnerResponse,
  DescribeClusterAssetsResponse,
  DownloadDspmExportLogRequest,
  DisableAIScheduleRequest,
  DescribeLastScanTaskInfoResponse,
  DeleteDspmIdentifyCategoryRequest,
  DescribeCSIPRiskStatisticsRequest,
  ModifyAssetFilterViewResponse,
  DescribeReverseShellSystemPolicyConfigRequest,
  ModifySecurityScoreRuleResponse,
  DescribeIaCFileOverviewRequest,
  DescribeCFWAssetStatisticsRequest,
  DescribeAccessKeyUserListResponse,
  ModifyCSIPRaspLicenseBindsResponse,
  CosAlarmInfo,
  DescribeDspmLogListResponse,
  DescribeSCFNamespaceListResponse,
  DeleteDspmWhitelistStrategyRequest,
  DescribeRiskCenterAssetViewPortRiskListResponse,
  BatchModifyBaselinePolicyResponse,
  DescribeAssumeRoleResponse,
  ModifyBaselineSyncConfResponse,
} from "./csip_models"

/**
 * csip client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("csip.tencentcloudapi.com", "2022-11-21", clientConfig)
  }

  /**
   * 查询Dspm资产安全分析状态
   */
  async DescribeDspmAssetSecurityAnalyseStatus(
    req: DescribeDspmAssetSecurityAnalyseStatusRequest,
    cb?: (error: string, rep: DescribeDspmAssetSecurityAnalyseStatusResponse) => void
  ): Promise<DescribeDspmAssetSecurityAnalyseStatusResponse> {
    return this.request("DescribeDspmAssetSecurityAnalyseStatus", req, cb)
  }

  /**
   * 创建EDR告警导出任务
   */
  async CreateEdrAlertExportJob(
    req: CreateEdrAlertExportJobRequest,
    cb?: (error: string, rep: CreateEdrAlertExportJobResponse) => void
  ): Promise<CreateEdrAlertExportJobResponse> {
    return this.request("CreateEdrAlertExportJob", req, cb)
  }

  /**
   * 调用源ip列表
   */
  async DescribeCosSourceIp(
    req: DescribeCosSourceIpRequest,
    cb?: (error: string, rep: DescribeCosSourceIpResponse) => void
  ): Promise<DescribeCosSourceIpResponse> {
    return this.request("DescribeCosSourceIp", req, cb)
  }

  /**
   * db资产详情
   */
  async DescribeDbAssetInfo(
    req: DescribeDbAssetInfoRequest,
    cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void
  ): Promise<DescribeDbAssetInfoResponse> {
    return this.request("DescribeDbAssetInfo", req, cb)
  }

  /**
   * 查询dspm数据识别分布统计
   */
  async DescribeDspmIdentifyDistributionStatistics(
    req: DescribeDspmIdentifyDistributionStatisticsRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyDistributionStatisticsResponse) => void
  ): Promise<DescribeDspmIdentifyDistributionStatisticsResponse> {
    return this.request("DescribeDspmIdentifyDistributionStatistics", req, cb)
  }

  /**
   * 云资源配置检测标准章节条款树
   */
  async DescribeComplianceStandardTermTree(
    req: DescribeComplianceStandardTermTreeRequest,
    cb?: (error: string, rep: DescribeComplianceStandardTermTreeResponse) => void
  ): Promise<DescribeComplianceStandardTermTreeResponse> {
    return this.request("DescribeComplianceStandardTermTree", req, cb)
  }

  /**
   * 编辑CSPM共享账号
   */
  async ModifyShareUserCSPM(
    req: ModifyShareUserCSPMRequest,
    cb?: (error: string, rep: ModifyShareUserCSPMResponse) => void
  ): Promise<ModifyShareUserCSPMResponse> {
    return this.request("ModifyShareUserCSPM", req, cb)
  }

  /**
   * 获取爆破阻断模式
   */
  async DescribeBanMode(
    req: DescribeBanModeRequest,
    cb?: (error: string, rep: DescribeBanModeResponse) => void
  ): Promise<DescribeBanModeResponse> {
    return this.request("DescribeBanMode", req, cb)
  }

  /**
   * 创建风险监测任务
   */
  async CreateCosRiskScanTask(
    req: CreateCosRiskScanTaskRequest,
    cb?: (error: string, rep: CreateCosRiskScanTaskResponse) => void
  ): Promise<CreateCosRiskScanTaskResponse> {
    return this.request("CreateCosRiskScanTask", req, cb)
  }

  /**
   * 查询用户的账号列表
   */
  async DescribeAccessKeyUserList(
    req: DescribeAccessKeyUserListRequest,
    cb?: (error: string, rep: DescribeAccessKeyUserListResponse) => void
  ): Promise<DescribeAccessKeyUserListResponse> {
    return this.request("DescribeAccessKeyUserList", req, cb)
  }

  /**
   * 关闭进程守护功能
   */
  async ModifyNFSScanHost(
    req: ModifyNFSScanHostRequest,
    cb?: (error: string, rep: ModifyNFSScanHostResponse) => void
  ): Promise<ModifyNFSScanHostResponse> {
    return this.request("ModifyNFSScanHost", req, cb)
  }

  /**
   * 获取主机漏洞概览
   */
  async DescribeHostVulOverview(
    req: DescribeHostVulOverviewRequest,
    cb?: (error: string, rep: DescribeHostVulOverviewResponse) => void
  ): Promise<DescribeHostVulOverviewResponse> {
    return this.request("DescribeHostVulOverview", req, cb)
  }

  /**
   * 查询Dspm审批历史
   */
  async DescribeDspmApproveHistory(
    req: DescribeDspmApproveHistoryRequest,
    cb?: (error: string, rep: DescribeDspmApproveHistoryResponse) => void
  ): Promise<DescribeDspmApproveHistoryResponse> {
    return this.request("DescribeDspmApproveHistory", req, cb)
  }

  /**
   * 手动解绑主机授权。同步执行，直接返回结果。仅解绑主机授权（category=0，含专业版/旗舰版）。单订单模式下appid即可定位订单，无需传ResourceId。RASP解绑请用ModifyCSIPRaspLicenseUnBinds。
   */
  async ModifyCSIPLicenseUnBinds(
    req: ModifyCSIPLicenseUnBindsRequest,
    cb?: (error: string, rep: ModifyCSIPLicenseUnBindsResponse) => void
  ): Promise<ModifyCSIPLicenseUnBindsResponse> {
    return this.request("ModifyCSIPLicenseUnBinds", req, cb)
  }

  /**
   * 停止漏洞扫描（任务扫描）
   */
  async StopVulScanTask(
    req: StopVulScanTaskRequest,
    cb?: (error: string, rep: StopVulScanTaskResponse) => void
  ): Promise<StopVulScanTaskResponse> {
    return this.request("StopVulScanTask", req, cb)
  }

  /**
   * 查询集团账号详情
   */
  async DescribeOrganizationInfo(
    req: DescribeOrganizationInfoRequest,
    cb?: (error: string, rep: DescribeOrganizationInfoResponse) => void
  ): Promise<DescribeOrganizationInfoResponse> {
    return this.request("DescribeOrganizationInfo", req, cb)
  }

  /**
   * 获取漏洞展开详情
   */
  async DescribeVULRiskDetail(
    req: DescribeVULRiskDetailRequest,
    cb?: (error: string, rep: DescribeVULRiskDetailResponse) => void
  ): Promise<DescribeVULRiskDetailResponse> {
    return this.request("DescribeVULRiskDetail", req, cb)
  }

  /**
   * 批量删除EDR日志采集路径配置
   */
  async DeleteEdrLogCollectPaths(
    req: DeleteEdrLogCollectPathsRequest,
    cb?: (error: string, rep: DeleteEdrLogCollectPathsResponse) => void
  ): Promise<DeleteEdrLogCollectPathsResponse> {
    return this.request("DeleteEdrLogCollectPaths", req, cb)
  }

  /**
   * 获取多云（腾讯云、阿里云、AWS、华为云、Azure 等）接入的资产总数及各云厂商资产数量明细
   */
  async DescribeMultiCloudAssetCount(
    req: DescribeMultiCloudAssetCountRequest,
    cb?: (error: string, rep: DescribeMultiCloudAssetCountResponse) => void
  ): Promise<DescribeMultiCloudAssetCountResponse> {
    return this.request("DescribeMultiCloudAssetCount", req, cb)
  }

  /**
   * 创建cos病毒扫描、敏感数据识别任务
   */
  async CreateCosObjectScanTask(
    req: CreateCosObjectScanTaskRequest,
    cb?: (error: string, rep: CreateCosObjectScanTaskResponse) => void
  ): Promise<CreateCosObjectScanTaskResponse> {
    return this.request("CreateCosObjectScanTask", req, cb)
  }

  /**
   * 获取风险项视角列表
   */
  async DescribeRiskItemList(
    req: DescribeRiskItemListRequest,
    cb?: (error: string, rep: DescribeRiskItemListResponse) => void
  ): Promise<DescribeRiskItemListResponse> {
    return this.request("DescribeRiskItemList", req, cb)
  }

  /**
   * 查询客户端离线时长
   */
  async DescribeNotifyAgentOfflineDuration(
    req?: DescribeNotifyAgentOfflineDurationRequest,
    cb?: (error: string, rep: DescribeNotifyAgentOfflineDurationResponse) => void
  ): Promise<DescribeNotifyAgentOfflineDurationResponse> {
    return this.request("DescribeNotifyAgentOfflineDuration", req, cb)
  }

  /**
   * 批量删除通知策略。
   */
  async DeleteWebhookPolicies(
    req: DeleteWebhookPoliciesRequest,
    cb?: (error: string, rep: DeleteWebhookPoliciesResponse) => void
  ): Promise<DeleteWebhookPoliciesResponse> {
    return this.request("DeleteWebhookPolicies", req, cb)
  }

  /**
   * 修改dspm数据识别数据项
   */
  async ModifyDspmIdentifyRule(
    req: ModifyDspmIdentifyRuleRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyRuleResponse) => void
  ): Promise<ModifyDspmIdentifyRuleResponse> {
    return this.request("ModifyDspmIdentifyRule", req, cb)
  }

  /**
   * 批量修改主机登录方式
   */
  async ModifyMachinesLoginType(
    req: ModifyMachinesLoginTypeRequest,
    cb?: (error: string, rep: ModifyMachinesLoginTypeResponse) => void
  ): Promise<ModifyMachinesLoginTypeResponse> {
    return this.request("ModifyMachinesLoginType", req, cb)
  }

  /**
   * 创建云函数导出任务
   */
  async CreateCloudFunctionExportJob(
    req: CreateCloudFunctionExportJobRequest,
    cb?: (error: string, rep: CreateCloudFunctionExportJobResponse) => void
  ): Promise<CreateCloudFunctionExportJobResponse> {
    return this.request("CreateCloudFunctionExportJob", req, cb)
  }

  /**
   * 获取EDR告警详情，包含告警内容JSON、资产富化、情报富化等完整信息
   */
  async DescribeEdrAlertInfo(
    req: DescribeEdrAlertInfoRequest,
    cb?: (error: string, rep: DescribeEdrAlertInfoResponse) => void
  ): Promise<DescribeEdrAlertInfoResponse> {
    return this.request("DescribeEdrAlertInfo", req, cb)
  }

  /**
   * 创建资产视角下风险列表导出任务示例
   */
  async CreateCFGRisksExportJob(
    req: CreateCFGRisksExportJobRequest,
    cb?: (error: string, rep: CreateCFGRisksExportJobResponse) => void
  ): Promise<CreateCFGRisksExportJobResponse> {
    return this.request("CreateCFGRisksExportJob", req, cb)
  }

  /**
   * 修改Dspm资产账号权限
   */
  async ModifyDspmAssetAccountPrivileges(
    req: ModifyDspmAssetAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyDspmAssetAccountPrivilegesResponse) => void
  ): Promise<ModifyDspmAssetAccountPrivilegesResponse> {
    return this.request("ModifyDspmAssetAccountPrivileges", req, cb)
  }

  /**
   * 获取安全评分概览，实时计算各维度和子项扣分情况
   */
  async DescribeSecurityScoreOverview(
    req: DescribeSecurityScoreOverviewRequest,
    cb?: (error: string, rep: DescribeSecurityScoreOverviewResponse) => void
  ): Promise<DescribeSecurityScoreOverviewResponse> {
    return this.request("DescribeSecurityScoreOverview", req, cb)
  }

  /**
   * 获取扫描任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
  }

  /**
   * 切换通知策略的启用状态。
   */
  async ModifyWebhookPolicyStatus(
    req: ModifyWebhookPolicyStatusRequest,
    cb?: (error: string, rep: ModifyWebhookPolicyStatusResponse) => void
  ): Promise<ModifyWebhookPolicyStatusResponse> {
    return this.request("ModifyWebhookPolicyStatus", req, cb)
  }

  /**
   * 查询dspm资产字段样本值
   */
  async DescribeDspmAssetFieldSamples(
    req: DescribeDspmAssetFieldSamplesRequest,
    cb?: (error: string, rep: DescribeDspmAssetFieldSamplesResponse) => void
  ): Promise<DescribeDspmAssetFieldSamplesResponse> {
    return this.request("DescribeDspmAssetFieldSamples", req, cb)
  }

  /**
   * 查询导出任务
   */
  async DescribeDspmExportTask(
    req: DescribeDspmExportTaskRequest,
    cb?: (error: string, rep: DescribeDspmExportTaskResponse) => void
  ): Promise<DescribeDspmExportTaskResponse> {
    return this.request("DescribeDspmExportTask", req, cb)
  }

  /**
   * 资产最近同步时间
   */
  async DescribeAssetLastSyncTime(
    req: DescribeAssetLastSyncTimeRequest,
    cb?: (error: string, rep: DescribeAssetLastSyncTimeResponse) => void
  ): Promise<DescribeAssetLastSyncTimeResponse> {
    return this.request("DescribeAssetLastSyncTime", req, cb)
  }

  /**
   * 创建集群节点列表导出任务。导出字段包含节点ID、节点名称、公网IP、内网IP、节点类型、核数、客户端状态、运行状态。NodeType和ClientStatus、RunStatus均经过国际化翻译。支持Filter过滤（含ClientStatus内存过滤）。导出通过异步任务实现，返回JobId后前端轮询查询导出任务状态。
   */
  async CreateClusterNodeListExportJob(
    req: CreateClusterNodeListExportJobRequest,
    cb?: (error: string, rep: CreateClusterNodeListExportJobResponse) => void
  ): Promise<CreateClusterNodeListExportJobResponse> {
    return this.request("CreateClusterNodeListExportJob", req, cb)
  }

  /**
   * 创建漏洞风险导出任务
   */
  async CreateVulRisksExportJob(
    req: CreateVulRisksExportJobRequest,
    cb?: (error: string, rep: CreateVulRisksExportJobResponse) => void
  ): Promise<CreateVulRisksExportJobResponse> {
    return this.request("CreateVulRisksExportJob", req, cb)
  }

  /**
   * 开启或者修改防卸载功能配置
   */
  async StartOrModifyPreventUninstall(
    req: StartOrModifyPreventUninstallRequest,
    cb?: (error: string, rep: StartOrModifyPreventUninstallResponse) => void
  ): Promise<StartOrModifyPreventUninstallResponse> {
    return this.request("StartOrModifyPreventUninstall", req, cb)
  }

  /**
   * 获取CSPM自动配额共享配置
   */
  async DescribeCspmShardConfig(
    req?: DescribeCspmShardConfigRequest,
    cb?: (error: string, rep: DescribeCspmShardConfigResponse) => void
  ): Promise<DescribeCspmShardConfigResponse> {
    return this.request("DescribeCspmShardConfig", req, cb)
  }

  /**
   * 查询资产数据库信息
   */
  async DescribeDspmAssetDatabaseList(
    req: DescribeDspmAssetDatabaseListRequest,
    cb?: (error: string, rep: DescribeDspmAssetDatabaseListResponse) => void
  ): Promise<DescribeDspmAssetDatabaseListResponse> {
    return this.request("DescribeDspmAssetDatabaseList", req, cb)
  }

  /**
   * 查询当前用户在指定地域下的 SCF（云函数）命名空间列表。
   */
  async DescribeSCFNamespaceList(
    req: DescribeSCFNamespaceListRequest,
    cb?: (error: string, rep: DescribeSCFNamespaceListResponse) => void
  ): Promise<DescribeSCFNamespaceListResponse> {
    return this.request("DescribeSCFNamespaceList", req, cb)
  }

  /**
   * 修改日志采集例外网段配置，支持IP/IP段/CIDR格式，最多可添加100条
   */
  async ModifyEdrExcludeNetworkSegments(
    req: ModifyEdrExcludeNetworkSegmentsRequest,
    cb?: (error: string, rep: ModifyEdrExcludeNetworkSegmentsResponse) => void
  ): Promise<ModifyEdrExcludeNetworkSegmentsResponse> {
    return this.request("ModifyEdrExcludeNetworkSegments", req, cb)
  }

  /**
   * 创建dspm数据识别模板
   */
  async CreateDspmIdentifyComplianceGroup(
    req: CreateDspmIdentifyComplianceGroupRequest,
    cb?: (error: string, rep: CreateDspmIdentifyComplianceGroupResponse) => void
  ): Promise<CreateDspmIdentifyComplianceGroupResponse> {
    return this.request("CreateDspmIdentifyComplianceGroup", req, cb)
  }

  /**
   * 查询Dspm风险趋势
   */
  async DescribeDspmRiskTendency(
    req: DescribeDspmRiskTendencyRequest,
    cb?: (error: string, rep: DescribeDspmRiskTendencyResponse) => void
  ): Promise<DescribeDspmRiskTendencyResponse> {
    return this.request("DescribeDspmRiskTendency", req, cb)
  }

  /**
   * 查询腾讯云扫描IP信息
   */
  async DescribeCWPScanIpInfo(
    req: DescribeCWPScanIpInfoRequest,
    cb?: (error: string, rep: DescribeCWPScanIpInfoResponse) => void
  ): Promise<DescribeCWPScanIpInfoResponse> {
    return this.request("DescribeCWPScanIpInfo", req, cb)
  }

  /**
   * 添加cos告警策略
   */
  async CreateCosPolicy(
    req: CreateCosPolicyRequest,
    cb?: (error: string, rep: CreateCosPolicyResponse) => void
  ): Promise<CreateCosPolicyResponse> {
    return this.request("CreateCosPolicy", req, cb)
  }

  /**
   * 查询客户端运行策略（策略组），从DescribeAgentRunMode拆分出的独立接口
   */
  async DescribeAgentRunPolicy(
    req: DescribeAgentRunPolicyRequest,
    cb?: (error: string, rep: DescribeAgentRunPolicyResponse) => void
  ): Promise<DescribeAgentRunPolicyResponse> {
    return this.request("DescribeAgentRunPolicy", req, cb)
  }

  /**
   * 查询互联网暴露周期数量趋势统计信息
   */
  async DescribeExposureTrend(
    req: DescribeExposureTrendRequest,
    cb?: (error: string, rep: DescribeExposureTrendResponse) => void
  ): Promise<DescribeExposureTrendResponse> {
    return this.request("DescribeExposureTrend", req, cb)
  }

  /**
   * 查询某个已修复漏洞在指定主机上的修复详情，包含漏洞基本信息、修复主机信息以及关联组件&路径的详细列表（组件名称、命中版本、关联路径、修复命令）。
   */
  async DescribeVulFixedHostDetail(
    req: DescribeVulFixedHostDetailRequest,
    cb?: (error: string, rep: DescribeVulFixedHostDetailResponse) => void
  ): Promise<DescribeVulFixedHostDetailResponse> {
    return this.request("DescribeVulFixedHostDetail", req, cb)
  }

  /**
   * 查询Dspm资产数据库列表
   */
  async DescribeDspmAssetDatabases(
    req: DescribeDspmAssetDatabasesRequest,
    cb?: (error: string, rep: DescribeDspmAssetDatabasesResponse) => void
  ): Promise<DescribeDspmAssetDatabasesResponse> {
    return this.request("DescribeDspmAssetDatabases", req, cb)
  }

  /**
   * 修改或者更改处置状态
   */
  async ModifyAlarmRiskStatus(
    req: ModifyAlarmRiskStatusRequest,
    cb?: (error: string, rep: ModifyAlarmRiskStatusResponse) => void
  ): Promise<ModifyAlarmRiskStatusResponse> {
    return this.request("ModifyAlarmRiskStatus", req, cb)
  }

  /**
   * 创建集群容器列表导出任务
   */
  async CreateClusterContainerListExportJob(
    req: CreateClusterContainerListExportJobRequest,
    cb?: (error: string, rep: CreateClusterContainerListExportJobResponse) => void
  ): Promise<CreateClusterContainerListExportJobResponse> {
    return this.request("CreateClusterContainerListExportJob", req, cb)
  }

  /**
   * 分页查询漏洞修复任务记录列表，支持按修复状态、时间范围等条件筛选，展示每个修复任务的概要信息。
   */
  async DescribeVulFixTaskList(
    req: DescribeVulFixTaskListRequest,
    cb?: (error: string, rep: DescribeVulFixTaskListResponse) => void
  ): Promise<DescribeVulFixTaskListResponse> {
    return this.request("DescribeVulFixTaskList", req, cb)
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
   * 创建已修复漏洞列表的导出任务。支持与 DescribeVulFixedList 相同的过滤条件，导出通过异步任务实现，返回 JobID 后前端轮询查询导出任务状态。导出字段包含漏洞ID、漏洞名称、漏洞等级、VPR评级、漏洞类型、CVE编号、主机名称、实例ID、关联组件&路径、修复时间。
   */
  async CreateVulFixedExportJob(
    req: CreateVulFixedExportJobRequest,
    cb?: (error: string, rep: CreateVulFixedExportJobResponse) => void
  ): Promise<CreateVulFixedExportJobResponse> {
    return this.request("CreateVulFixedExportJob", req, cb)
  }

  /**
   * 删除dspm数据识别数据项
   */
  async DeleteDspmIdentifyRule(
    req: DeleteDspmIdentifyRuleRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyRuleResponse) => void
  ): Promise<DeleteDspmIdentifyRuleResponse> {
    return this.request("DeleteDspmIdentifyRule", req, cb)
  }

  /**
   * 获取NFS扫描全局配置
   */
  async DescribeNFSScanConf(
    req: DescribeNFSScanConfRequest,
    cb?: (error: string, rep: DescribeNFSScanConfResponse) => void
  ): Promise<DescribeNFSScanConfResponse> {
    return this.request("DescribeNFSScanConf", req, cb)
  }

  /**
   * 自定义风险规则配置详情列表示例
   */
  async DescribeCustomRiskRuleDetail(
    req: DescribeCustomRiskRuleDetailRequest,
    cb?: (error: string, rep: DescribeCustomRiskRuleDetailResponse) => void
  ): Promise<DescribeCustomRiskRuleDetailResponse> {
    return this.request("DescribeCustomRiskRuleDetail", req, cb)
  }

  /**
   * 修改反弹Shell内网告警与资产范围配置
   */
  async ModifyReverseShellSystemPolicyConfig(
    req: ModifyReverseShellSystemPolicyConfigRequest,
    cb?: (error: string, rep: ModifyReverseShellSystemPolicyConfigResponse) => void
  ): Promise<ModifyReverseShellSystemPolicyConfigResponse> {
    return this.request("ModifyReverseShellSystemPolicyConfig", req, cb)
  }

  /**
   * 公网资产
   */
  async DescribePublicCloudAssets(
    req: DescribePublicCloudAssetsRequest,
    cb?: (error: string, rep: DescribePublicCloudAssetsResponse) => void
  ): Promise<DescribePublicCloudAssetsResponse> {
    return this.request("DescribePublicCloudAssets", req, cb)
  }

  /**
   * 查询Dspm资产登录凭据
   */
  async DescribeDspmAssetLoginCredential(
    req: DescribeDspmAssetLoginCredentialRequest,
    cb?: (error: string, rep: DescribeDspmAssetLoginCredentialResponse) => void
  ): Promise<DescribeDspmAssetLoginCredentialResponse> {
    return this.request("DescribeDspmAssetLoginCredential", req, cb)
  }

  /**
     * 查询AI 定时任务列表。

支持分页查询和状态过滤，返回定时任务列表及总条数。
     */
  async DescribeAIScheduleList(
    req: DescribeAIScheduleListRequest,
    cb?: (error: string, rep: DescribeAIScheduleListResponse) => void
  ): Promise<DescribeAIScheduleListResponse> {
    return this.request("DescribeAIScheduleList", req, cb)
  }

  /**
   * 同步dspm支持的资产
   */
  async SyncDspmAssets(
    req: SyncDspmAssetsRequest,
    cb?: (error: string, rep: SyncDspmAssetsResponse) => void
  ): Promise<SyncDspmAssetsResponse> {
    return this.request("SyncDspmAssets", req, cb)
  }

  /**
   * 查看cos桶访问权限信息
   */
  async DescribeCosAccessPermission(
    req: DescribeCosAccessPermissionRequest,
    cb?: (error: string, rep: DescribeCosAccessPermissionResponse) => void
  ): Promise<DescribeCosAccessPermissionResponse> {
    return this.request("DescribeCosAccessPermission", req, cb)
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
   * 获取资产视角的端口风险列表
   */
  async DescribeRiskCenterAssetViewPortRiskList(
    req: DescribeRiskCenterAssetViewPortRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewPortRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewPortRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewPortRiskList", req, cb)
  }

  /**
   * 日志分析检索接口v3
   */
  async DescribeCLSLogListV3(
    req: DescribeCLSLogListV3Request,
    cb?: (error: string, rep: DescribeCLSLogListV3Response) => void
  ): Promise<DescribeCLSLogListV3Response> {
    return this.request("DescribeCLSLogListV3", req, cb)
  }

  /**
   * 云边界分析资产列表
   */
  async DescribeExposures(
    req: DescribeExposuresRequest,
    cb?: (error: string, rep: DescribeExposuresResponse) => void
  ): Promise<DescribeExposuresResponse> {
    return this.request("DescribeExposures", req, cb)
  }

  /**
   * 修改EDR策略开关状态
   */
  async ModifyEDRRuleStatus(
    req: ModifyEDRRuleStatusRequest,
    cb?: (error: string, rep: ModifyEDRRuleStatusResponse) => void
  ): Promise<ModifyEDRRuleStatusResponse> {
    return this.request("ModifyEDRRuleStatus", req, cb)
  }

  /**
   * 创建Dspm访问记录导出任务
   */
  async CreateDspmAccessExportJob(
    req: CreateDspmAccessExportJobRequest,
    cb?: (error: string, rep: CreateDspmAccessExportJobResponse) => void
  ): Promise<CreateDspmAccessExportJobResponse> {
    return this.request("CreateDspmAccessExportJob", req, cb)
  }

  /**
   * 编辑访问密钥/源IP备注
   */
  async UpdateAccessKeyRemark(
    req: UpdateAccessKeyRemarkRequest,
    cb?: (error: string, rep: UpdateAccessKeyRemarkResponse) => void
  ): Promise<UpdateAccessKeyRemarkResponse> {
    return this.request("UpdateAccessKeyRemark", req, cb)
  }

  /**
   * 上传 Skill ZIP 文件，触发异步安全检测。上传成功后应使用返回的 ContentHash + EngineVersion 轮询 DescribeSkillScanResult 接口获取结果。上传接口具备幂等性，同一 Hash 的文件重复上传不会创建重复任务。检测结果保留90天，超期后需重新上传检测。
   */
  async CreateSkillScan(
    req: CreateSkillScanRequest,
    cb?: (error: string, rep: CreateSkillScanResponse) => void
  ): Promise<CreateSkillScanResponse> {
    return this.request("CreateSkillScan", req, cb)
  }

  /**
   * 获取扫描子任务列表，用于任务详情页“资产维度”展示每台主机/每个集群的扫描状态与失败原因。
   */
  async DescribeBaselineSubTaskList(
    req: DescribeBaselineSubTaskListRequest,
    cb?: (error: string, rep: DescribeBaselineSubTaskListResponse) => void
  ): Promise<DescribeBaselineSubTaskListResponse> {
    return this.request("DescribeBaselineSubTaskList", req, cb)
  }

  /**
   * 暴露资产导出任务
   */
  async CreateExposuresExportJob(
    req: CreateExposuresExportJobRequest,
    cb?: (error: string, rep: CreateExposuresExportJobResponse) => void
  ): Promise<CreateExposuresExportJobResponse> {
    return this.request("CreateExposuresExportJob", req, cb)
  }

  /**
   * 更新当前账号（管理员）的基线同步配置。AutoSync=true 时 TargetAppidList 不可为空，且元素不可为 0。
   */
  async ModifyBaselineSyncConf(
    req: ModifyBaselineSyncConfRequest,
    cb?: (error: string, rep: ModifyBaselineSyncConfResponse) => void
  ): Promise<ModifyBaselineSyncConfResponse> {
    return this.request("ModifyBaselineSyncConf", req, cb)
  }

  /**
   * 修改Dspm资产数据扫描任务状态
   */
  async ModifyDspmAssetDataScanTaskStatus(
    req: ModifyDspmAssetDataScanTaskStatusRequest,
    cb?: (error: string, rep: ModifyDspmAssetDataScanTaskStatusResponse) => void
  ): Promise<ModifyDspmAssetDataScanTaskStatusResponse> {
    return this.request("ModifyDspmAssetDataScanTaskStatus", req, cb)
  }

  /**
   * 标记资产是否核心
   */
  async ModifyAssetCoreAttribute(
    req: ModifyAssetCoreAttributeRequest,
    cb?: (error: string, rep: ModifyAssetCoreAttributeResponse) => void
  ): Promise<ModifyAssetCoreAttributeResponse> {
    return this.request("ModifyAssetCoreAttribute", req, cb)
  }

  /**
   * 查询Dspm访客申请记录
   */
  async DescribeDspmPersonApplyHistory(
    req: DescribeDspmPersonApplyHistoryRequest,
    cb?: (error: string, rep: DescribeDspmPersonApplyHistoryResponse) => void
  ): Promise<DescribeDspmPersonApplyHistoryResponse> {
    return this.request("DescribeDspmPersonApplyHistory", req, cb)
  }

  /**
   * 查询Dspm白名单策略
   */
  async DescribeDspmWhitelistStrategy(
    req: DescribeDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: DescribeDspmWhitelistStrategyResponse) => void
  ): Promise<DescribeDspmWhitelistStrategyResponse> {
    return this.request("DescribeDspmWhitelistStrategy", req, cb)
  }

  /**
   * 边界规则列表
   */
  async DescribeExposeRules(
    req: DescribeExposeRulesRequest,
    cb?: (error: string, rep: DescribeExposeRulesResponse) => void
  ): Promise<DescribeExposeRulesResponse> {
    return this.request("DescribeExposeRules", req, cb)
  }

  /**
   * 用户自定义 标签数量
   */
  async DescribeCustomAssetTagCount(
    req: DescribeCustomAssetTagCountRequest,
    cb?: (error: string, rep: DescribeCustomAssetTagCountResponse) => void
  ): Promise<DescribeCustomAssetTagCountResponse> {
    return this.request("DescribeCustomAssetTagCount", req, cb)
  }

  /**
   * 查询当前账号下端口扫描任务次数
   */
  async DescribePortScanTaskCount(
    req: DescribePortScanTaskCountRequest,
    cb?: (error: string, rep: DescribePortScanTaskCountResponse) => void
  ): Promise<DescribePortScanTaskCountResponse> {
    return this.request("DescribePortScanTaskCount", req, cb)
  }

  /**
   * 查询dspm数据识别分级组列表
   */
  async DescribeDspmIdentifyLevelGroupList(
    req: DescribeDspmIdentifyLevelGroupListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyLevelGroupListResponse) => void
  ): Promise<DescribeDspmIdentifyLevelGroupListResponse> {
    return this.request("DescribeDspmIdentifyLevelGroupList", req, cb)
  }

  /**
   * 风险详情列表示例
   */
  async DescribeRiskDetailList(
    req: DescribeRiskDetailListRequest,
    cb?: (error: string, rep: DescribeRiskDetailListResponse) => void
  ): Promise<DescribeRiskDetailListResponse> {
    return this.request("DescribeRiskDetailList", req, cb)
  }

  /**
   * 修改对象存储备注
   */
  async ModifyCosMarkInfo(
    req: ModifyCosMarkInfoRequest,
    cb?: (error: string, rep: ModifyCosMarkInfoResponse) => void
  ): Promise<ModifyCosMarkInfoResponse> {
    return this.request("ModifyCosMarkInfo", req, cb)
  }

  /**
   * 更新资产搜索视图
   */
  async ModifyAssetFilterView(
    req: ModifyAssetFilterViewRequest,
    cb?: (error: string, rep: ModifyAssetFilterViewResponse) => void
  ): Promise<ModifyAssetFilterViewResponse> {
    return this.request("ModifyAssetFilterView", req, cb)
  }

  /**
   * 修改Dspm白名单策略
   */
  async ModifyDspmWhitelistStrategy(
    req: ModifyDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: ModifyDspmWhitelistStrategyResponse) => void
  ): Promise<ModifyDspmWhitelistStrategyResponse> {
    return this.request("ModifyDspmWhitelistStrategy", req, cb)
  }

  /**
   * 修改dspm数据识别分级组
   */
  async ModifyDspmIdentifyLevelGroup(
    req: ModifyDspmIdentifyLevelGroupRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyLevelGroupResponse) => void
  ): Promise<ModifyDspmIdentifyLevelGroupResponse> {
    return this.request("ModifyDspmIdentifyLevelGroup", req, cb)
  }

  /**
   * 添加资产管理员
   */
  async AddDspmAssetManager(
    req: AddDspmAssetManagerRequest,
    cb?: (error: string, rep: AddDspmAssetManagerResponse) => void
  ): Promise<AddDspmAssetManagerResponse> {
    return this.request("AddDspmAssetManager", req, cb)
  }

  /**
   * 暴露面扫描结果导出任务
   */
  async CreateScanStatisticExportJob(
    req: CreateScanStatisticExportJobRequest,
    cb?: (error: string, rep: CreateScanStatisticExportJobResponse) => void
  ): Promise<CreateScanStatisticExportJobResponse> {
    return this.request("CreateScanStatisticExportJob", req, cb)
  }

  /**
   * 查询集群容器列表
   */
  async DescribeClusterContainerList(
    req: DescribeClusterContainerListRequest,
    cb?: (error: string, rep: DescribeClusterContainerListResponse) => void
  ): Promise<DescribeClusterContainerListResponse> {
    return this.request("DescribeClusterContainerList", req, cb)
  }

  /**
   * 绑定 RASP / 旗舰版授权到指定订单。异步执行，返回TaskId供查询进度。LicenseType=rasp 绑 RASP，LicenseType=enterprise_hp 绑旗舰版主机授权；AssetType 区分主机/容器节点/EKS。
   */
  async ModifyCSIPRaspLicenseBinds(
    req: ModifyCSIPRaspLicenseBindsRequest,
    cb?: (error: string, rep: ModifyCSIPRaspLicenseBindsResponse) => void
  ): Promise<ModifyCSIPRaspLicenseBindsResponse> {
    return this.request("ModifyCSIPRaspLicenseBinds", req, cb)
  }

  /**
   * 全部资产
   */
  async DescribeCloudAssets(
    req: DescribeCloudAssetsRequest,
    cb?: (error: string, rep: DescribeCloudAssetsResponse) => void
  ): Promise<DescribeCloudAssetsResponse> {
    return this.request("DescribeCloudAssets", req, cb)
  }

  /**
   * 获取基线概览页的头部数据，含未通过检测项总数、近一年修复数、最近一次扫描时间、当前是否启用周期扫描等。
   */
  async DescribeBaselineOverview(
    req: DescribeBaselineOverviewRequest,
    cb?: (error: string, rep: DescribeBaselineOverviewResponse) => void
  ): Promise<DescribeBaselineOverviewResponse> {
    return this.request("DescribeBaselineOverview", req, cb)
  }

  /**
   * 修改风险中心风险状态
   */
  async ModifyRiskCenterRiskStatus(
    req: ModifyRiskCenterRiskStatusRequest,
    cb?: (error: string, rep: ModifyRiskCenterRiskStatusResponse) => void
  ): Promise<ModifyRiskCenterRiskStatusResponse> {
    return this.request("ModifyRiskCenterRiskStatus", req, cb)
  }

  /**
   * 查询Dspm访问拓扑资产列表
   */
  async DescribeDspmAccessTopologyAssets(
    req: DescribeDspmAccessTopologyAssetsRequest,
    cb?: (error: string, rep: DescribeDspmAccessTopologyAssetsResponse) => void
  ): Promise<DescribeDspmAccessTopologyAssetsResponse> {
    return this.request("DescribeDspmAccessTopologyAssets", req, cb)
  }

  /**
   * 标记风险或者告警为 已处置/已忽略
   */
  async UpdateAccessKeyAlarmStatus(
    req: UpdateAccessKeyAlarmStatusRequest,
    cb?: (error: string, rep: UpdateAccessKeyAlarmStatusResponse) => void
  ): Promise<UpdateAccessKeyAlarmStatusResponse> {
    return this.request("UpdateAccessKeyAlarmStatus", req, cb)
  }

  /**
     * 启用AI 定时任务。

将指定的AI 定时任务状态设置为已启用，启用后任务将按触发器配置自动执行。
     */
  async EnableAISchedule(
    req: EnableAIScheduleRequest,
    cb?: (error: string, rep: EnableAIScheduleResponse) => void
  ): Promise<EnableAIScheduleResponse> {
    return this.request("EnableAISchedule", req, cb)
  }

  /**
   * 获取扫描漏洞任务详情
   */
  async DescribeVulScanTaskDetail(
    req: DescribeVulScanTaskDetailRequest,
    cb?: (error: string, rep: DescribeVulScanTaskDetailResponse) => void
  ): Promise<DescribeVulScanTaskDetailResponse> {
    return this.request("DescribeVulScanTaskDetail", req, cb)
  }

  /**
   * 修改网络攻击检测开关及资产范围配置
   */
  async ModifyNetAttackSetting(
    req: ModifyNetAttackSettingRequest,
    cb?: (error: string, rep: ModifyNetAttackSettingResponse) => void
  ): Promise<ModifyNetAttackSettingResponse> {
    return this.request("ModifyNetAttackSetting", req, cb)
  }

  /**
   * 获取基线策略名字存在的用户列表
   */
  async DescribeBaselinePolicyNameExistAppidList(
    req: DescribeBaselinePolicyNameExistAppidListRequest,
    cb?: (error: string, rep: DescribeBaselinePolicyNameExistAppidListResponse) => void
  ): Promise<DescribeBaselinePolicyNameExistAppidListResponse> {
    return this.request("DescribeBaselinePolicyNameExistAppidList", req, cb)
  }

  /**
   * 查询Dspm风险分组策略
   */
  async DescribeDspmRiskStrategyGroup(
    req: DescribeDspmRiskStrategyGroupRequest,
    cb?: (error: string, rep: DescribeDspmRiskStrategyGroupResponse) => void
  ): Promise<DescribeDspmRiskStrategyGroupResponse> {
    return this.request("DescribeDspmRiskStrategyGroup", req, cb)
  }

  /**
   * 集群列表
   */
  async DescribeClusterAssets(
    req: DescribeClusterAssetsRequest,
    cb?: (error: string, rep: DescribeClusterAssetsResponse) => void
  ): Promise<DescribeClusterAssetsResponse> {
    return this.request("DescribeClusterAssets", req, cb)
  }

  /**
   * 修改Dspm资产日志投递开关
   */
  async ModifyDspmAssetLogDeliverySwitch(
    req: ModifyDspmAssetLogDeliverySwitchRequest,
    cb?: (error: string, rep: ModifyDspmAssetLogDeliverySwitchResponse) => void
  ): Promise<ModifyDspmAssetLogDeliverySwitchResponse> {
    return this.request("ModifyDspmAssetLogDeliverySwitch", req, cb)
  }

  /**
   * 查询指定安全组ID对应安全组规则
   */
  async DescribeSecurityGroupPolicy(
    req: DescribeSecurityGroupPolicyRequest,
    cb?: (error: string, rep: DescribeSecurityGroupPolicyResponse) => void
  ): Promise<DescribeSecurityGroupPolicyResponse> {
    return this.request("DescribeSecurityGroupPolicy", req, cb)
  }

  /**
   * 查看风险资产视角
   */
  async DescribeCosBucketRisk(
    req: DescribeCosBucketRiskRequest,
    cb?: (error: string, rep: DescribeCosBucketRiskResponse) => void
  ): Promise<DescribeCosBucketRiskResponse> {
    return this.request("DescribeCosBucketRisk", req, cb)
  }

  /**
   * 查询Dspm资产账号预设特权信息
   */
  async DescribeDspmAssetAccountPresetPrivileges(
    req: DescribeDspmAssetAccountPresetPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccountPresetPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetAccountPresetPrivilegesResponse> {
    return this.request("DescribeDspmAssetAccountPresetPrivileges", req, cb)
  }

  /**
   * 获取EDR策略列表
   */
  async DescribeEDRRuleList(
    req: DescribeEDRRuleListRequest,
    cb?: (error: string, rep: DescribeEDRRuleListResponse) => void
  ): Promise<DescribeEDRRuleListResponse> {
    return this.request("DescribeEDRRuleList", req, cb)
  }

  /**
   * 查询集群超级节点详情，返回基本信息（所属地域/可用区/资产最后更新时间/节点来源/子网/核数）与所属集群信息（集群名称/集群ID/集群状态/Kubernetes版本/Kubelet版本）。
   */
  async DescribeClusterSuperNodeInfo(
    req: DescribeClusterSuperNodeInfoRequest,
    cb?: (error: string, rep: DescribeClusterSuperNodeInfoResponse) => void
  ): Promise<DescribeClusterSuperNodeInfoResponse> {
    return this.request("DescribeClusterSuperNodeInfo", req, cb)
  }

  /**
   * 创建集群命名空间列表导出任务。导出字段包含命名空间名称、Labels、创建时间。支持Filter过滤。导出通过异步任务实现，返回JobId后前端轮询查询导出任务状态。
   */
  async CreateClusterNamespaceListExportJob(
    req: CreateClusterNamespaceListExportJobRequest,
    cb?: (error: string, rep: CreateClusterNamespaceListExportJobResponse) => void
  ): Promise<CreateClusterNamespaceListExportJobResponse> {
    return this.request("CreateClusterNamespaceListExportJob", req, cb)
  }

  /**
   * 查询容器关联应用列表。通过容器ID获取关联的应用服务信息，支持分页。
   */
  async DescribeClusterContainerAppList(
    req: DescribeClusterContainerAppListRequest,
    cb?: (error: string, rep: DescribeClusterContainerAppListResponse) => void
  ): Promise<DescribeClusterContainerAppListResponse> {
    return this.request("DescribeClusterContainerAppList", req, cb)
  }

  /**
   * 新安全中心风险中心-漏洞列表
   */
  async DescribeVULList(
    req: DescribeVULListRequest,
    cb?: (error: string, rep: DescribeVULListResponse) => void
  ): Promise<DescribeVULListResponse> {
    return this.request("DescribeVULList", req, cb)
  }

  /**
   * 修改dspm数据识别分级信息
   */
  async ModifyDspmIdentifyLevelItem(
    req: ModifyDspmIdentifyLevelItemRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyLevelItemResponse) => void
  ): Promise<ModifyDspmIdentifyLevelItemResponse> {
    return this.request("ModifyDspmIdentifyLevelItem", req, cb)
  }

  /**
   * 查询腾讯云指定CLB实例对应的监听器列表
   */
  async DescribeClbListenerList(
    req: DescribeClbListenerListRequest,
    cb?: (error: string, rep: DescribeClbListenerListResponse) => void
  ): Promise<DescribeClbListenerListResponse> {
    return this.request("DescribeClbListenerList", req, cb)
  }

  /**
   * 云资源配置检查报告风险统计
   */
  async DescribeCFGRiskReportStatistics(
    req: DescribeCFGRiskReportStatisticsRequest,
    cb?: (error: string, rep: DescribeCFGRiskReportStatisticsResponse) => void
  ): Promise<DescribeCFGRiskReportStatisticsResponse> {
    return this.request("DescribeCFGRiskReportStatistics", req, cb)
  }

  /**
   * 指定资产类型列表
   */
  async DescribeDynamicAssets(
    req: DescribeDynamicAssetsRequest,
    cb?: (error: string, rep: DescribeDynamicAssetsResponse) => void
  ): Promise<DescribeDynamicAssetsResponse> {
    return this.request("DescribeDynamicAssets", req, cb)
  }

  /**
   * 新增或修改一条通知策略。ID > 0 表示修改；ID = 0 或不传表示新增。MemberAppIds 配置为空时，策略仅作用于当前主账号事件；非空时同时作用于自身账号 + 所列成员账号。
   */
  async ModifyWebhookPolicy(
    req: ModifyWebhookPolicyRequest,
    cb?: (error: string, rep: ModifyWebhookPolicyResponse) => void
  ): Promise<ModifyWebhookPolicyResponse> {
    return this.request("ModifyWebhookPolicy", req, cb)
  }

  /**
   * 获取资产视角的漏洞风险列表
   */
  async DescribeRiskCenterAssetViewVULRiskList(
    req: DescribeRiskCenterAssetViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb)
  }

  /**
   * 创建Dspm白名单策略
   */
  async CreateDspmWhitelistStrategy(
    req: CreateDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: CreateDspmWhitelistStrategyResponse) => void
  ): Promise<CreateDspmWhitelistStrategyResponse> {
    return this.request("CreateDspmWhitelistStrategy", req, cb)
  }

  /**
   * 创建云资源配置检查风险详情导出任务示例
   */
  async CreateRiskDetailExportJob(
    req: CreateRiskDetailExportJobRequest,
    cb?: (error: string, rep: CreateRiskDetailExportJobResponse) => void
  ): Promise<CreateRiskDetailExportJobResponse> {
    return this.request("CreateRiskDetailExportJob", req, cb)
  }

  /**
   * ip访问列表详情信息
   */
  async DescribeIpInvokeRecordDetail(
    req: DescribeIpInvokeRecordDetailRequest,
    cb?: (error: string, rep: DescribeIpInvokeRecordDetailResponse) => void
  ): Promise<DescribeIpInvokeRecordDetailResponse> {
    return this.request("DescribeIpInvokeRecordDetail", req, cb)
  }

  /**
   * 修改通知设置
   */
  async ModifyNotifySetting(
    req: ModifyNotifySettingRequest,
    cb?: (error: string, rep: ModifyNotifySettingResponse) => void
  ): Promise<ModifyNotifySettingResponse> {
    return this.request("ModifyNotifySetting", req, cb)
  }

  /**
   * 资产视角下云资源配置风险列表
   */
  async DescribeAssetRiskList(
    req: DescribeAssetRiskListRequest,
    cb?: (error: string, rep: DescribeAssetRiskListResponse) => void
  ): Promise<DescribeAssetRiskListResponse> {
    return this.request("DescribeAssetRiskList", req, cb)
  }

  /**
   * 查看风险证据以及描述
   */
  async DescribeCosRiskEvidence(
    req: DescribeCosRiskEvidenceRequest,
    cb?: (error: string, rep: DescribeCosRiskEvidenceResponse) => void
  ): Promise<DescribeCosRiskEvidenceResponse> {
    return this.request("DescribeCosRiskEvidence", req, cb)
  }

  /**
   * 查询dspm数据识别模板列表
   */
  async DescribeDspmIdentifyComplianceGroupList(
    req: DescribeDspmIdentifyComplianceGroupListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyComplianceGroupListResponse) => void
  ): Promise<DescribeDspmIdentifyComplianceGroupListResponse> {
    return this.request("DescribeDspmIdentifyComplianceGroupList", req, cb)
  }

  /**
   * 按日期查看策略命中详情
   */
  async DescribePolicyHitData(
    req: DescribePolicyHitDataRequest,
    cb?: (error: string, rep: DescribePolicyHitDataResponse) => void
  ): Promise<DescribePolicyHitDataResponse> {
    return this.request("DescribePolicyHitData", req, cb)
  }

  /**
   * 端口探测列表
   */
  async DescribePortDetectList(
    req: DescribePortDetectListRequest,
    cb?: (error: string, rep: DescribePortDetectListResponse) => void
  ): Promise<DescribePortDetectListResponse> {
    return this.request("DescribePortDetectList", req, cb)
  }

  /**
   * 查询集团的子账号列表
   */
  async DescribeSubUserInfo(
    req: DescribeSubUserInfoRequest,
    cb?: (error: string, rep: DescribeSubUserInfoResponse) => void
  ): Promise<DescribeSubUserInfoResponse> {
    return this.request("DescribeSubUserInfo", req, cb)
  }

  /**
   * 修改客户端日志采集配置（CSIP专属），支持设置日志采集类型和生效资产范围
   */
  async ModifyAgentConfigSetting(
    req: ModifyAgentConfigSettingRequest,
    cb?: (error: string, rep: ModifyAgentConfigSettingResponse) => void
  ): Promise<ModifyAgentConfigSettingResponse> {
    return this.request("ModifyAgentConfigSetting", req, cb)
  }

  /**
   * 获取已购Dspm订单信息
   */
  async DescribeDspmPayInfo(
    req: DescribeDspmPayInfoRequest,
    cb?: (error: string, rep: DescribeDspmPayInfoResponse) => void
  ): Promise<DescribeDspmPayInfoResponse> {
    return this.request("DescribeDspmPayInfo", req, cb)
  }

  /**
   * 更新CSPM自动配额管理者共享开关
   */
  async ModifyCspmShardConfig(
    req: ModifyCspmShardConfigRequest,
    cb?: (error: string, rep: ModifyCspmShardConfigResponse) => void
  ): Promise<ModifyCspmShardConfigResponse> {
    return this.request("ModifyCspmShardConfig", req, cb)
  }

  /**
   * 获取系统内置基线分类的检测项列表（父分类 → 子分类 → 内置检测项 ID 列表），用于策略编辑页选择基线检测项。
   */
  async DescribeBaselineMainTaskItemList(
    req: DescribeBaselineMainTaskItemListRequest,
    cb?: (error: string, rep: DescribeBaselineMainTaskItemListResponse) => void
  ): Promise<DescribeBaselineMainTaskItemListResponse> {
    return this.request("DescribeBaselineMainTaskItemList", req, cb)
  }

  /**
   * 更新周期扫描计划
   */
  async ModifyRiskScanCronConfig(
    req: ModifyRiskScanCronConfigRequest,
    cb?: (error: string, rep: ModifyRiskScanCronConfigResponse) => void
  ): Promise<ModifyRiskScanCronConfigResponse> {
    return this.request("ModifyRiskScanCronConfig", req, cb)
  }

  /**
   * 获取端口视角的端口风险列表
   */
  async DescribeRiskCenterPortViewPortRiskList(
    req: DescribeRiskCenterPortViewPortRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterPortViewPortRiskListResponse) => void
  ): Promise<DescribeRiskCenterPortViewPortRiskListResponse> {
    return this.request("DescribeRiskCenterPortViewPortRiskList", req, cb)
  }

  /**
   * 创建Dspm个人身份id
   */
  async CreateDspmPersonalIdentify(
    req: CreateDspmPersonalIdentifyRequest,
    cb?: (error: string, rep: CreateDspmPersonalIdentifyResponse) => void
  ): Promise<CreateDspmPersonalIdentifyResponse> {
    return this.request("CreateDspmPersonalIdentify", req, cb)
  }

  /**
   * 查询Dspm访问拓扑账号列表
   */
  async DescribeDspmAccessTopologyAccounts(
    req: DescribeDspmAccessTopologyAccountsRequest,
    cb?: (error: string, rep: DescribeDspmAccessTopologyAccountsResponse) => void
  ): Promise<DescribeDspmAccessTopologyAccountsResponse> {
    return this.request("DescribeDspmAccessTopologyAccounts", req, cb)
  }

  /**
   * 创建资产同步任务
   */
  async CreateAssetSyncTask(
    req: CreateAssetSyncTaskRequest,
    cb?: (error: string, rep: CreateAssetSyncTaskResponse) => void
  ): Promise<CreateAssetSyncTaskResponse> {
    return this.request("CreateAssetSyncTask", req, cb)
  }

  /**
   * 查询容器关联Web服务列表。通过容器ID获取关联的Web服务信息，支持分页。
   */
  async DescribeClusterContainerWebServiceList(
    req: DescribeClusterContainerWebServiceListRequest,
    cb?: (error: string, rep: DescribeClusterContainerWebServiceListResponse) => void
  ): Promise<DescribeClusterContainerWebServiceListResponse> {
    return this.request("DescribeClusterContainerWebServiceList", req, cb)
  }

  /**
   * 主机列表
   */
  async DescribeCWPMachines(
    req: DescribeCWPMachinesRequest,
    cb?: (error: string, rep: DescribeCWPMachinesResponse) => void
  ): Promise<DescribeCWPMachinesResponse> {
    return this.request("DescribeCWPMachines", req, cb)
  }

  /**
     * 修改AI 定时任务。

支持部分更新，仅更新传入的可选字段。触发器列表通过 UpdateTriggers 标志控制是否全量替换。
     */
  async ModifyAISchedule(
    req: ModifyAIScheduleRequest,
    cb?: (error: string, rep: ModifyAIScheduleResponse) => void
  ): Promise<ModifyAIScheduleResponse> {
    return this.request("ModifyAISchedule", req, cb)
  }

  /**
   * 获取当前账号的安全评分规则，无自定义则返回内置默认规则
   */
  async DescribeSecurityScoreRule(
    req: DescribeSecurityScoreRuleRequest,
    cb?: (error: string, rep: DescribeSecurityScoreRuleResponse) => void
  ): Promise<DescribeSecurityScoreRuleResponse> {
    return this.request("DescribeSecurityScoreRule", req, cb)
  }

  /**
   * 删除域名和ip请求
   */
  async DeleteDomainAndIp(
    req: DeleteDomainAndIpRequest,
    cb?: (error: string, rep: DeleteDomainAndIpResponse) => void
  ): Promise<DeleteDomainAndIpResponse> {
    return this.request("DeleteDomainAndIp", req, cb)
  }

  /**
   * 查询风险规则详情示例
   */
  async DescribeRiskRuleDetail(
    req: DescribeRiskRuleDetailRequest,
    cb?: (error: string, rep: DescribeRiskRuleDetailResponse) => void
  ): Promise<DescribeRiskRuleDetailResponse> {
    return this.request("DescribeRiskRuleDetail", req, cb)
  }

  /**
   * 查询cos风险文件扫描任务
   */
  async DescribeCosObjectScanTask(
    req: DescribeCosObjectScanTaskRequest,
    cb?: (error: string, rep: DescribeCosObjectScanTaskResponse) => void
  ): Promise<DescribeCosObjectScanTaskResponse> {
    return this.request("DescribeCosObjectScanTask", req, cb)
  }

  /**
   * 获取网卡列表
   */
  async DescribeNICAssets(
    req: DescribeNICAssetsRequest,
    cb?: (error: string, rep: DescribeNICAssetsResponse) => void
  ): Promise<DescribeNICAssetsResponse> {
    return this.request("DescribeNICAssets", req, cb)
  }

  /**
   * 域名列表
   */
  async DescribeDomainAssets(
    req: DescribeDomainAssetsRequest,
    cb?: (error: string, rep: DescribeDomainAssetsResponse) => void
  ): Promise<DescribeDomainAssetsResponse> {
    return this.request("DescribeDomainAssets", req, cb)
  }

  /**
   * 修改通知资产范围配置
   */
  async ModifyNotifyAssetConfig(
    req: ModifyNotifyAssetConfigRequest,
    cb?: (error: string, rep: ModifyNotifyAssetConfigResponse) => void
  ): Promise<ModifyNotifyAssetConfigResponse> {
    return this.request("ModifyNotifyAssetConfig", req, cb)
  }

  /**
     * 删除AI 定时任务。

根据指定的AI 定时任务 ID 删除对应的定时任务。删除后不可恢复。
     */
  async DeleteAISchedule(
    req: DeleteAIScheduleRequest,
    cb?: (error: string, rep: DeleteAIScheduleResponse) => void
  ): Promise<DeleteAIScheduleResponse> {
    return this.request("DeleteAISchedule", req, cb)
  }

  /**
   * 查询轻量应用服务器防火墙规则
   */
  async DescribeLighthouseFirewallRules(
    req: DescribeLighthouseFirewallRulesRequest,
    cb?: (error: string, rep: DescribeLighthouseFirewallRulesResponse) => void
  ): Promise<DescribeLighthouseFirewallRulesResponse> {
    return this.request("DescribeLighthouseFirewallRules", req, cb)
  }

  /**
   * 关闭进程守护功能
   */
  async StopProcessDaemon(
    req: StopProcessDaemonRequest,
    cb?: (error: string, rep: StopProcessDaemonResponse) => void
  ): Promise<StopProcessDaemonResponse> {
    return this.request("StopProcessDaemon", req, cb)
  }

  /**
   * 删除dspm数据识别模板
   */
  async DeleteDspmIdentifyComplianceGroup(
    req: DeleteDspmIdentifyComplianceGroupRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyComplianceGroupResponse) => void
  ): Promise<DeleteDspmIdentifyComplianceGroupResponse> {
    return this.request("DeleteDspmIdentifyComplianceGroup", req, cb)
  }

  /**
   * EDR告警状态处置
   */
  async ModifyEdrAlertStatus(
    req: ModifyEdrAlertStatusRequest,
    cb?: (error: string, rep: ModifyEdrAlertStatusResponse) => void
  ): Promise<ModifyEdrAlertStatusResponse> {
    return this.request("ModifyEdrAlertStatus", req, cb)
  }

  /**
   * 设置客户端运行模式以及配置
   */
  async ModifyAgentRunMode(
    req: ModifyAgentRunModeRequest,
    cb?: (error: string, rep: ModifyAgentRunModeResponse) => void
  ): Promise<ModifyAgentRunModeResponse> {
    return this.request("ModifyAgentRunMode", req, cb)
  }

  /**
   * 查询日志备份配置
   */
  async DescribeDspmBackupSetting(
    req: DescribeDspmBackupSettingRequest,
    cb?: (error: string, rep: DescribeDspmBackupSettingResponse) => void
  ): Promise<DescribeDspmBackupSettingResponse> {
    return this.request("DescribeDspmBackupSetting", req, cb)
  }

  /**
   * 获取资产视角的漏洞风险列表
   */
  async DescribeAssetViewVulRiskList(
    req: DescribeAssetViewVulRiskListRequest,
    cb?: (error: string, rep: DescribeAssetViewVulRiskListResponse) => void
  ): Promise<DescribeAssetViewVulRiskListResponse> {
    return this.request("DescribeAssetViewVulRiskList", req, cb)
  }

  /**
   * 创建主机进程列表导出任务
   */
  async CreateAssetProcessExportJob(
    req: CreateAssetProcessExportJobRequest,
    cb?: (error: string, rep: CreateAssetProcessExportJobResponse) => void
  ): Promise<CreateAssetProcessExportJobResponse> {
    return this.request("CreateAssetProcessExportJob", req, cb)
  }

  /**
   * 查询云边界分析路径节点(主机专用)
   */
  async DescribeCWPExposePath(
    req: DescribeCWPExposePathRequest,
    cb?: (error: string, rep: DescribeCWPExposePathResponse) => void
  ): Promise<DescribeCWPExposePathResponse> {
    return this.request("DescribeCWPExposePath", req, cb)
  }

  /**
   * 添加漏洞白名单
   */
  async AddVulWhitelist(
    req: AddVulWhitelistRequest,
    cb?: (error: string, rep: AddVulWhitelistResponse) => void
  ): Promise<AddVulWhitelistResponse> {
    return this.request("AddVulWhitelist", req, cb)
  }

  /**
   * 查询集群资产同步任务状态
   */
  async DescribeClusterAssetSyncTaskStatus(
    req: DescribeClusterAssetSyncTaskStatusRequest,
    cb?: (error: string, rep: DescribeClusterAssetSyncTaskStatusResponse) => void
  ): Promise<DescribeClusterAssetSyncTaskStatusResponse> {
    return this.request("DescribeClusterAssetSyncTaskStatus", req, cb)
  }

  /**
   * 批量启用或停用基线策略。停用后的策略将不再参与扫描与统计。
   */
  async ModifyBaselinePolicyEnable(
    req: ModifyBaselinePolicyEnableRequest,
    cb?: (error: string, rep: ModifyBaselinePolicyEnableResponse) => void
  ): Promise<ModifyBaselinePolicyEnableResponse> {
    return this.request("ModifyBaselinePolicyEnable", req, cb)
  }

  /**
   * 修改告警中心通知高级配置
   */
  async ModifyNotifySettingAlert(
    req: ModifyNotifySettingAlertRequest,
    cb?: (error: string, rep: ModifyNotifySettingAlertResponse) => void
  ): Promise<ModifyNotifySettingAlertResponse> {
    return this.request("ModifyNotifySettingAlert", req, cb)
  }

  /**
   * 查询cos文件数据识别结果列表
   */
  async DescribeCosIdentifyFileList(
    req: DescribeCosIdentifyFileListRequest,
    cb?: (error: string, rep: DescribeCosIdentifyFileListResponse) => void
  ): Promise<DescribeCosIdentifyFileListResponse> {
    return this.request("DescribeCosIdentifyFileList", req, cb)
  }

  /**
   * 创建集群资产同步任务
   */
  async CreateClusterAssetSyncTask(
    req: CreateClusterAssetSyncTaskRequest,
    cb?: (error: string, rep: CreateClusterAssetSyncTaskResponse) => void
  ): Promise<CreateClusterAssetSyncTaskResponse> {
    return this.request("CreateClusterAssetSyncTask", req, cb)
  }

  /**
   * 绑定集群负责人
   */
  async BindClusterOwner(
    req: BindClusterOwnerRequest,
    cb?: (error: string, rep: BindClusterOwnerResponse) => void
  ): Promise<BindClusterOwnerResponse> {
    return this.request("BindClusterOwner", req, cb)
  }

  /**
   * 资产搜索视图
   */
  async DescribeAssetFilterViews(
    req: DescribeAssetFilterViewsRequest,
    cb?: (error: string, rep: DescribeAssetFilterViewsResponse) => void
  ): Promise<DescribeAssetFilterViewsResponse> {
    return this.request("DescribeAssetFilterViews", req, cb)
  }

  /**
   * 查看cos桶访问权限信息
   */
  async DescribeCosRoleAccessPermission(
    req: DescribeCosRoleAccessPermissionRequest,
    cb?: (error: string, rep: DescribeCosRoleAccessPermissionResponse) => void
  ): Promise<DescribeCosRoleAccessPermissionResponse> {
    return this.request("DescribeCosRoleAccessPermission", req, cb)
  }

  /**
   * 风险验证示例
   */
  async CheckRisk(
    req: CheckRiskRequest,
    cb?: (error: string, rep: CheckRiskResponse) => void
  ): Promise<CheckRiskResponse> {
    return this.request("CheckRisk", req, cb)
  }

  /**
   * 创建dspm数据识别分级组
   */
  async CreateDspmIdentifyLevelGroup(
    req: CreateDspmIdentifyLevelGroupRequest,
    cb?: (error: string, rep: CreateDspmIdentifyLevelGroupResponse) => void
  ): Promise<CreateDspmIdentifyLevelGroupResponse> {
    return this.request("CreateDspmIdentifyLevelGroup", req, cb)
  }

  /**
   * 查询客户端配置设置（配置组），从DescribeAgentRunMode拆分出的独立接口
   */
  async DescribeAgentConfigSetting(
    req: DescribeAgentConfigSettingRequest,
    cb?: (error: string, rep: DescribeAgentConfigSettingResponse) => void
  ): Promise<DescribeAgentConfigSettingResponse> {
    return this.request("DescribeAgentConfigSetting", req, cb)
  }

  /**
   * 获取通知资产范围配置
   */
  async DescribeNotifyAssetConfig(
    req: DescribeNotifyAssetConfigRequest,
    cb?: (error: string, rep: DescribeNotifyAssetConfigResponse) => void
  ): Promise<DescribeNotifyAssetConfigResponse> {
    return this.request("DescribeNotifyAssetConfig", req, cb)
  }

  /**
   * 获取策略配置的检测项列表
   */
  async DescribeBaselinePolicyItemList(
    req: DescribeBaselinePolicyItemListRequest,
    cb?: (error: string, rep: DescribeBaselinePolicyItemListResponse) => void
  ): Promise<DescribeBaselinePolicyItemListResponse> {
    return this.request("DescribeBaselinePolicyItemList", req, cb)
  }

  /**
   * 点击开始扫描后触发，支持多账号、多资产类型。同时选主机和容器集群时拆分为两个独立任务（主机+容器）。
   */
  async CreateEDRManualScan(
    req: CreateEDRManualScanRequest,
    cb?: (error: string, rep: CreateEDRManualScanResponse) => void
  ): Promise<CreateEDRManualScanResponse> {
    return this.request("CreateEDRManualScan", req, cb)
  }

  /**
   * 查询集群节点列表
   */
  async DescribeClusterNodeList(
    req: DescribeClusterNodeListRequest,
    cb?: (error: string, rep: DescribeClusterNodeListResponse) => void
  ): Promise<DescribeClusterNodeListResponse> {
    return this.request("DescribeClusterNodeList", req, cb)
  }

  /**
   * 查询集群安装命令
   */
  async DescribeClusterInstallCommand(
    req: DescribeClusterInstallCommandRequest,
    cb?: (error: string, rep: DescribeClusterInstallCommandResponse) => void
  ): Promise<DescribeClusterInstallCommandResponse> {
    return this.request("DescribeClusterInstallCommand", req, cb)
  }

  /**
   * 修改Dspm资产日志投递开关
   */
  async ModifyDspmAssetSecurityAnalysisSwitch(
    req: ModifyDspmAssetSecurityAnalysisSwitchRequest,
    cb?: (error: string, rep: ModifyDspmAssetSecurityAnalysisSwitchResponse) => void
  ): Promise<ModifyDspmAssetSecurityAnalysisSwitchResponse> {
    return this.request("ModifyDspmAssetSecurityAnalysisSwitch", req, cb)
  }

  /**
   * 查询集团账号用户列表
   */
  async DescribeOrganizationUserInfo(
    req: DescribeOrganizationUserInfoRequest,
    cb?: (error: string, rep: DescribeOrganizationUserInfoResponse) => void
  ): Promise<DescribeOrganizationUserInfoResponse> {
    return this.request("DescribeOrganizationUserInfo", req, cb)
  }

  /**
   * 检测AK 异步任务
   */
  async CreateAccessKeyCheckTask(
    req: CreateAccessKeyCheckTaskRequest,
    cb?: (error: string, rep: CreateAccessKeyCheckTaskResponse) => void
  ): Promise<CreateAccessKeyCheckTaskResponse> {
    return this.request("CreateAccessKeyCheckTask", req, cb)
  }

  /**
   * 获取子网列表
   */
  async DescribeSubnetAssets(
    req: DescribeSubnetAssetsRequest,
    cb?: (error: string, rep: DescribeSubnetAssetsResponse) => void
  ): Promise<DescribeSubnetAssetsResponse> {
    return this.request("DescribeSubnetAssets", req, cb)
  }

  /**
   * 查询Dspm身份id列表
   */
  async DescribeDspmIdentifyIdList(
    req: DescribeDspmIdentifyIdListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyIdListResponse) => void
  ): Promise<DescribeDspmIdentifyIdListResponse> {
    return this.request("DescribeDspmIdentifyIdList", req, cb)
  }

  /**
   * 创建/修改SMTP邮箱接入请求
   */
  async AccessAIAnalysisSMTP(
    req: AccessAIAnalysisSMTPRequest,
    cb?: (error: string, rep: AccessAIAnalysisSMTPResponse) => void
  ): Promise<AccessAIAnalysisSMTPResponse> {
    return this.request("AccessAIAnalysisSMTP", req, cb)
  }

  /**
   * 创建基线聚合检测项导出任务。通过 ExportType 选择导出统计结果或风险明细，可按策略、分类等条件限定范围；任务在后台异步执行，完成后可在导出任务列表中下载结果文件。
   */
  async CreateBaselineAggregatedItemExportJob(
    req: CreateBaselineAggregatedItemExportJobRequest,
    cb?: (error: string, rep: CreateBaselineAggregatedItemExportJobResponse) => void
  ): Promise<CreateBaselineAggregatedItemExportJobResponse> {
    return this.request("CreateBaselineAggregatedItemExportJob", req, cb)
  }

  /**
   * 获取用户访问密钥资产列表
   */
  async DescribeAccessKeyAsset(
    req: DescribeAccessKeyAssetRequest,
    cb?: (error: string, rep: DescribeAccessKeyAssetResponse) => void
  ): Promise<DescribeAccessKeyAssetResponse> {
    return this.request("DescribeAccessKeyAsset", req, cb)
  }

  /**
   * 查看对象存储访问权限列表
   */
  async DescribeCosAccessPermissions(
    req: DescribeCosAccessPermissionsRequest,
    cb?: (error: string, rep: DescribeCosAccessPermissionsResponse) => void
  ): Promise<DescribeCosAccessPermissionsResponse> {
    return this.request("DescribeCosAccessPermissions", req, cb)
  }

  /**
   * 查询dspm资产数据识别信息列表
   */
  async DescribeDspmAssetIdentifyInfoList(
    req: DescribeDspmAssetIdentifyInfoListRequest,
    cb?: (error: string, rep: DescribeDspmAssetIdentifyInfoListResponse) => void
  ): Promise<DescribeDspmAssetIdentifyInfoListResponse> {
    return this.request("DescribeDspmAssetIdentifyInfoList", req, cb)
  }

  /**
   * 查询 Pod 关联容器列表
   */
  async DescribePodContainerList(
    req: DescribePodContainerListRequest,
    cb?: (error: string, rep: DescribePodContainerListResponse) => void
  ): Promise<DescribePodContainerListResponse> {
    return this.request("DescribePodContainerList", req, cb)
  }

  /**
   * 获取EDR告警列表
   */
  async DescribeEdrAlertList(
    req: DescribeEdrAlertListRequest,
    cb?: (error: string, rep: DescribeEdrAlertListResponse) => void
  ): Promise<DescribeEdrAlertListResponse> {
    return this.request("DescribeEdrAlertList", req, cb)
  }

  /**
   * EDR告警多攻击阶段查询
   */
  async DescribeEdrAlertMultiAttackStages(
    req: DescribeEdrAlertMultiAttackStagesRequest,
    cb?: (error: string, rep: DescribeEdrAlertMultiAttackStagesResponse) => void
  ): Promise<DescribeEdrAlertMultiAttackStagesResponse> {
    return this.request("DescribeEdrAlertMultiAttackStages", req, cb)
  }

  /**
   * 创建Dspm资产列表导出任务
   */
  async CreateDspmAssetsExportJob(
    req: CreateDspmAssetsExportJobRequest,
    cb?: (error: string, rep: CreateDspmAssetsExportJobResponse) => void
  ): Promise<CreateDspmAssetsExportJobResponse> {
    return this.request("CreateDspmAssetsExportJob", req, cb)
  }

  /**
   * 分页查询当前租户下的接收机器人列表，对应「通知中心 - 机器人通知 - 接收机器人管理」Tab 的表格。每租户最多 50 个机器人
   */
  async DescribeWebhookReceiverList(
    req: DescribeWebhookReceiverListRequest,
    cb?: (error: string, rep: DescribeWebhookReceiverListResponse) => void
  ): Promise<DescribeWebhookReceiverListResponse> {
    return this.request("DescribeWebhookReceiverList", req, cb)
  }

  /**
   * 复制dspm数据识别模板
   */
  async CreateDspmIdentifyComplianceGroupCopy(
    req: CreateDspmIdentifyComplianceGroupCopyRequest,
    cb?: (error: string, rep: CreateDspmIdentifyComplianceGroupCopyResponse) => void
  ): Promise<CreateDspmIdentifyComplianceGroupCopyResponse> {
    return this.request("CreateDspmIdentifyComplianceGroupCopy", req, cb)
  }

  /**
   * 获取EDR导出下载链接
   */
  async DescribeEdrExportJobDownloadURL(
    req: DescribeEdrExportJobDownloadURLRequest,
    cb?: (error: string, rep: DescribeEdrExportJobDownloadURLResponse) => void
  ): Promise<DescribeEdrExportJobDownloadURLResponse> {
    return this.request("DescribeEdrExportJobDownloadURL", req, cb)
  }

  /**
   * csip角色授权绑定接口
   */
  async AddNewBindRoleUser(
    req?: AddNewBindRoleUserRequest,
    cb?: (error: string, rep: AddNewBindRoleUserResponse) => void
  ): Promise<AddNewBindRoleUserResponse> {
    return this.request("AddNewBindRoleUser", req, cb)
  }

  /**
   * 获取存储桶角色权限列表
   */
  async DescribeCosRoleAccessPermissions(
    req: DescribeCosRoleAccessPermissionsRequest,
    cb?: (error: string, rep: DescribeCosRoleAccessPermissionsResponse) => void
  ): Promise<DescribeCosRoleAccessPermissionsResponse> {
    return this.request("DescribeCosRoleAccessPermissions", req, cb)
  }

  /**
   * 创建Pod关联服务列表导出任务。导出字段包含服务名称、类型、Selector、命名空间、创建时间。支持Filter过滤。当传入PodUniqueID时，复用DescribeClusterServiceList的Pod关联匹配逻辑。导出通过异步任务实现，返回JobId后前端轮询查询导出任务状态。
   */
  async CreatePodServiceListExportJob(
    req: CreatePodServiceListExportJobRequest,
    cb?: (error: string, rep: CreatePodServiceListExportJobResponse) => void
  ): Promise<CreatePodServiceListExportJobResponse> {
    return this.request("CreatePodServiceListExportJob", req, cb)
  }

  /**
   * 获取告警中心通知高级配置
   */
  async DescribeNotifySettingAlert(
    req?: DescribeNotifySettingAlertRequest,
    cb?: (error: string, rep: DescribeNotifySettingAlertResponse) => void
  ): Promise<DescribeNotifySettingAlertResponse> {
    return this.request("DescribeNotifySettingAlert", req, cb)
  }

  /**
   * 修改漏洞白名单开关
   */
  async ModifyVulWhitelistSwitch(
    req: ModifyVulWhitelistSwitchRequest,
    cb?: (error: string, rep: ModifyVulWhitelistSwitchResponse) => void
  ): Promise<ModifyVulWhitelistSwitchResponse> {
    return this.request("ModifyVulWhitelistSwitch", req, cb)
  }

  /**
   * 获取漏洞标签列表
   */
  async DescribeVulLabelList(
    req?: DescribeVulLabelListRequest,
    cb?: (error: string, rep: DescribeVulLabelListResponse) => void
  ): Promise<DescribeVulLabelListResponse> {
    return this.request("DescribeVulLabelList", req, cb)
  }

  /**
   * 获取进程防护全局配置
   */
  async DescribeProcessDaemonGlobalConf(
    req: DescribeProcessDaemonGlobalConfRequest,
    cb?: (error: string, rep: DescribeProcessDaemonGlobalConfResponse) => void
  ): Promise<DescribeProcessDaemonGlobalConfResponse> {
    return this.request("DescribeProcessDaemonGlobalConf", req, cb)
  }

  /**
   * 修改Dspm风险信息
   */
  async ModifyDspmRiskInfo(
    req: ModifyDspmRiskInfoRequest,
    cb?: (error: string, rep: ModifyDspmRiskInfoResponse) => void
  ): Promise<ModifyDspmRiskInfoResponse> {
    return this.request("ModifyDspmRiskInfo", req, cb)
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
   * 云边界自动打标-创建规则
   */
  async CreateExposureAutoTagRule(
    req: CreateExposureAutoTagRuleRequest,
    cb?: (error: string, rep: CreateExposureAutoTagRuleResponse) => void
  ): Promise<CreateExposureAutoTagRuleResponse> {
    return this.request("CreateExposureAutoTagRule", req, cb)
  }

  /**
   * 获取云安全AI助手基础信息
   */
  async DescribeAIAnalysisRobotInfo(
    req: DescribeAIAnalysisRobotInfoRequest,
    cb?: (error: string, rep: DescribeAIAnalysisRobotInfoResponse) => void
  ): Promise<DescribeAIAnalysisRobotInfoResponse> {
    return this.request("DescribeAIAnalysisRobotInfo", req, cb)
  }

  /**
   * 资产标签树结构数据
   */
  async DescribeAssetTagTree(
    req: DescribeAssetTagTreeRequest,
    cb?: (error: string, rep: DescribeAssetTagTreeResponse) => void
  ): Promise<DescribeAssetTagTreeResponse> {
    return this.request("DescribeAssetTagTree", req, cb)
  }

  /**
   * 查询容器关联进程列表。通过容器ID获取关联的进程信息，支持按启动时间排序和分页。Filter.By支持StartTime；Filter.Order支持ASC/DESC。
   */
  async DescribeClusterContainerProcessList(
    req: DescribeClusterContainerProcessListRequest,
    cb?: (error: string, rep: DescribeClusterContainerProcessListResponse) => void
  ): Promise<DescribeClusterContainerProcessListResponse> {
    return this.request("DescribeClusterContainerProcessList", req, cb)
  }

  /**
   * RetryExportLog
   */
  async RetryDspmExportLog(
    req: RetryDspmExportLogRequest,
    cb?: (error: string, rep: RetryDspmExportLogResponse) => void
  ): Promise<RetryDspmExportLogResponse> {
    return this.request("RetryDspmExportLog", req, cb)
  }

  /**
   * 修改dspm数据识别模板
   */
  async ModifyDspmIdentifyComplianceGroup(
    req: ModifyDspmIdentifyComplianceGroupRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyComplianceGroupResponse) => void
  ): Promise<ModifyDspmIdentifyComplianceGroupResponse> {
    return this.request("ModifyDspmIdentifyComplianceGroup", req, cb)
  }

  /**
   * EDR告警标签批量查询
   */
  async DescribeEdrAlertThreatTags(
    req: DescribeEdrAlertThreatTagsRequest,
    cb?: (error: string, rep: DescribeEdrAlertThreatTagsResponse) => void
  ): Promise<DescribeEdrAlertThreatTagsResponse> {
    return this.request("DescribeEdrAlertThreatTags", req, cb)
  }

  /**
   * 获取EDR告警统计
   */
  async DescribeEdrAlertSummary(
    req: DescribeEdrAlertSummaryRequest,
    cb?: (error: string, rep: DescribeEdrAlertSummaryResponse) => void
  ): Promise<DescribeEdrAlertSummaryResponse> {
    return this.request("DescribeEdrAlertSummary", req, cb)
  }

  /**
   * 资产风险详情
   */
  async DescribeAssetRiskDetail(
    req: DescribeAssetRiskDetailRequest,
    cb?: (error: string, rep: DescribeAssetRiskDetailResponse) => void
  ): Promise<DescribeAssetRiskDetailResponse> {
    return this.request("DescribeAssetRiskDetail", req, cb)
  }

  /**
   * 查询集群pod列表
   */
  async DescribeClusterPodList(
    req: DescribeClusterPodListRequest,
    cb?: (error: string, rep: DescribeClusterPodListResponse) => void
  ): Promise<DescribeClusterPodListResponse> {
    return this.request("DescribeClusterPodList", req, cb)
  }

  /**
   * 查询集群service列表
   */
  async DescribeClusterServiceList(
    req: DescribeClusterServiceListRequest,
    cb?: (error: string, rep: DescribeClusterServiceListResponse) => void
  ): Promise<DescribeClusterServiceListResponse> {
    return this.request("DescribeClusterServiceList", req, cb)
  }

  /**
   * 查询Dspm资产账号身份信息
   */
  async DescribeDspmAssetAccountIdentify(
    req: DescribeDspmAssetAccountIdentifyRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccountIdentifyResponse) => void
  ): Promise<DescribeDspmAssetAccountIdentifyResponse> {
    return this.request("DescribeDspmAssetAccountIdentify", req, cb)
  }

  /**
   * 创建Dspm身份列表导出任务
   */
  async CreateDspmIdentifyInfoListExportJob(
    req: CreateDspmIdentifyInfoListExportJobRequest,
    cb?: (error: string, rep: CreateDspmIdentifyInfoListExportJobResponse) => void
  ): Promise<CreateDspmIdentifyInfoListExportJobResponse> {
    return this.request("CreateDspmIdentifyInfoListExportJob", req, cb)
  }

  /**
   * 获取审计支付信息
   */
  async DescribeCosAuditPayInfo(
    req?: DescribeCosAuditPayInfoRequest,
    cb?: (error: string, rep: DescribeCosAuditPayInfoResponse) => void
  ): Promise<DescribeCosAuditPayInfoResponse> {
    return this.request("DescribeCosAuditPayInfo", req, cb)
  }

  /**
   * CSIP 手动扫描创建接口
   */
  async CreateCSIPManualMalwareScan(
    req: CreateCSIPManualMalwareScanRequest,
    cb?: (error: string, rep: CreateCSIPManualMalwareScanResponse) => void
  ): Promise<CreateCSIPManualMalwareScanResponse> {
    return this.request("CreateCSIPManualMalwareScan", req, cb)
  }

  /**
   * 获取配置视角的配置风险列表
   */
  async DescribeRiskCenterCFGViewCFGRiskList(
    req: DescribeRiskCenterCFGViewCFGRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterCFGViewCFGRiskListResponse) => void
  ): Promise<DescribeRiskCenterCFGViewCFGRiskListResponse> {
    return this.request("DescribeRiskCenterCFGViewCFGRiskList", req, cb)
  }

  /**
   * 修改漏洞白名单配置
   */
  async ModifyVulWhitelistConfig(
    req: ModifyVulWhitelistConfigRequest,
    cb?: (error: string, rep: ModifyVulWhitelistConfigResponse) => void
  ): Promise<ModifyVulWhitelistConfigResponse> {
    return this.request("ModifyVulWhitelistConfig", req, cb)
  }

  /**
   * 取消已永久忽略的EDR多行为告警，从AI-Link永久忽略白名单移除对应主机+规则记录，并将告警状态恢复为待处理（PENDING）
   */
  async CancelEdrAlertIgnore(
    req: CancelEdrAlertIgnoreRequest,
    cb?: (error: string, rep: CancelEdrAlertIgnoreResponse) => void
  ): Promise<CancelEdrAlertIgnoreResponse> {
    return this.request("CancelEdrAlertIgnore", req, cb)
  }

  /**
   * 删除已删除的cos ak资产
   */
  async DeleteCosAkAsset(
    req: DeleteCosAkAssetRequest,
    cb?: (error: string, rep: DeleteCosAkAssetResponse) => void
  ): Promise<DeleteCosAkAssetResponse> {
    return this.request("DeleteCosAkAsset", req, cb)
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
   * 停止指定的基线扫描主任务，仅对处于 INIT / SUBTASK_CREATING / SCANNING 状态的任务生效。
   */
  async StopBaselineScanTask(
    req: StopBaselineScanTaskRequest,
    cb?: (error: string, rep: StopBaselineScanTaskResponse) => void
  ): Promise<StopBaselineScanTaskResponse> {
    return this.request("StopBaselineScanTask", req, cb)
  }

  /**
   * 查看cos资产列表
   */
  async DescribeCosAsset(
    req: DescribeCosAssetRequest,
    cb?: (error: string, rep: DescribeCosAssetResponse) => void
  ): Promise<DescribeCosAssetResponse> {
    return this.request("DescribeCosAsset", req, cb)
  }

  /**
   * 获取风险趋势分析示例
   */
  async DescribeRiskCenterRiskTrendAnalysis(
    req: DescribeRiskCenterRiskTrendAnalysisRequest,
    cb?: (error: string, rep: DescribeRiskCenterRiskTrendAnalysisResponse) => void
  ): Promise<DescribeRiskCenterRiskTrendAnalysisResponse> {
    return this.request("DescribeRiskCenterRiskTrendAnalysis", req, cb)
  }

  /**
   * 新建或编辑一条基线策略。Policy.ID 为 0 视为新建，非 0 视为编辑；新建/编辑时 Name 必填，CheckAssetType 与 Type 需符合 CheckAssetType / PolicyType 枚举。
   */
  async ModifyBaselinePolicy(
    req: ModifyBaselinePolicyRequest,
    cb?: (error: string, rep: ModifyBaselinePolicyResponse) => void
  ): Promise<ModifyBaselinePolicyResponse> {
    return this.request("ModifyBaselinePolicy", req, cb)
  }

  /**
   * 获取对应appid对应的当前正在扫描的taskid
   */
  async DescribeCosAssetSyncTask(
    req: DescribeCosAssetSyncTaskRequest,
    cb?: (error: string, rep: DescribeCosAssetSyncTaskResponse) => void
  ): Promise<DescribeCosAssetSyncTaskResponse> {
    return this.request("DescribeCosAssetSyncTask", req, cb)
  }

  /**
   * 修改Dspm风险策略
   */
  async ModifyDspmRiskStrategy(
    req: ModifyDspmRiskStrategyRequest,
    cb?: (error: string, rep: ModifyDspmRiskStrategyResponse) => void
  ): Promise<ModifyDspmRiskStrategyResponse> {
    return this.request("ModifyDspmRiskStrategy", req, cb)
  }

  /**
   * 获取基线风险修复历史记录列表，用于“修复记录”页展示已修复的检测项与对应资产。
   */
  async DescribeBaselineFixRecordList(
    req: DescribeBaselineFixRecordListRequest,
    cb?: (error: string, rep: DescribeBaselineFixRecordListResponse) => void
  ): Promise<DescribeBaselineFixRecordListResponse> {
    return this.request("DescribeBaselineFixRecordList", req, cb)
  }

  /**
   * 创建资产标签
   */
  async CreateAssetTag(
    req: CreateAssetTagRequest,
    cb?: (error: string, rep: CreateAssetTagResponse) => void
  ): Promise<CreateAssetTagResponse> {
    return this.request("CreateAssetTag", req, cb)
  }

  /**
   * 创建主机列漏洞表导出任务
   */
  async CreateHostVulExportJob(
    req: CreateHostVulExportJobRequest,
    cb?: (error: string, rep: CreateHostVulExportJobResponse) => void
  ): Promise<CreateHostVulExportJobResponse> {
    return this.request("CreateHostVulExportJob", req, cb)
  }

  /**
   * 查询dspm数据识别分类列表
   */
  async DescribeDspmIdentifyCategoryList(
    req: DescribeDspmIdentifyCategoryListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyCategoryListResponse) => void
  ): Promise<DescribeDspmIdentifyCategoryListResponse> {
    return this.request("DescribeDspmIdentifyCategoryList", req, cb)
  }

  /**
   * 查询云边界分析-暴露路径下主机节点的漏洞列表
   */
  async DescribeVulRiskList(
    req: DescribeVulRiskListRequest,
    cb?: (error: string, rep: DescribeVulRiskListResponse) => void
  ): Promise<DescribeVulRiskListResponse> {
    return this.request("DescribeVulRiskList", req, cb)
  }

  /**
     * 安装集群容器安全Agent（平行容器方式安装 Agent）。

capi 层处理流程：
1. 按 ClusterCaMD5List 查询 DB 集群列表（仅用于解析每个集群归属的 appid，不做存在性/类型校验）
2. 按 appid 分组透传到接入侧 ClusterInstall RPC

说明（容器资产改版 2026 H1）：本接口为透传接口，capi 层不对 ClusterCaMD5 做存在性/类型/格式校验；DB 中未命中的 ClusterCaMD5 静默跳过、不报错。
     */
  async InstallClusterAgent(
    req: InstallClusterAgentRequest,
    cb?: (error: string, rep: InstallClusterAgentResponse) => void
  ): Promise<InstallClusterAgentResponse> {
    return this.request("InstallClusterAgent", req, cb)
  }

  /**
   * 获取漏洞关联组件
   */
  async DescribeVulRiskRelateComponent(
    req: DescribeVulRiskRelateComponentRequest,
    cb?: (error: string, rep: DescribeVulRiskRelateComponentResponse) => void
  ): Promise<DescribeVulRiskRelateComponentResponse> {
    return this.request("DescribeVulRiskRelateComponent", req, cb)
  }

  /**
   * 创建EDR告警普通导出任务
   */
  async CreateEdrLessAlertExportJob(
    req: CreateEdrLessAlertExportJobRequest,
    cb?: (error: string, rep: CreateEdrLessAlertExportJobResponse) => void
  ): Promise<CreateEdrLessAlertExportJobResponse> {
    return this.request("CreateEdrLessAlertExportJob", req, cb)
  }

  /**
   * 集群pod列表
   */
  async DescribeClusterPodAssets(
    req: DescribeClusterPodAssetsRequest,
    cb?: (error: string, rep: DescribeClusterPodAssetsResponse) => void
  ): Promise<DescribeClusterPodAssetsResponse> {
    return this.request("DescribeClusterPodAssets", req, cb)
  }

  /**
   * 删除dspm数据识别模板数据项关联
   */
  async DeleteDspmIdentifyComplianceRuleRelation(
    req: DeleteDspmIdentifyComplianceRuleRelationRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyComplianceRuleRelationResponse) => void
  ): Promise<DeleteDspmIdentifyComplianceRuleRelationResponse> {
    return this.request("DeleteDspmIdentifyComplianceRuleRelation", req, cb)
  }

  /**
   * 导出EDR任务列表
   */
  async DescribeEdrExportJobList(
    req: DescribeEdrExportJobListRequest,
    cb?: (error: string, rep: DescribeEdrExportJobListResponse) => void
  ): Promise<DescribeEdrExportJobListResponse> {
    return this.request("DescribeEdrExportJobList", req, cb)
  }

  /**
   * 删除Dspm白名单策略
   */
  async DeleteDspmWhitelistStrategy(
    req: DeleteDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: DeleteDspmWhitelistStrategyResponse) => void
  ): Promise<DeleteDspmWhitelistStrategyResponse> {
    return this.request("DeleteDspmWhitelistStrategy", req, cb)
  }

  /**
   * 资产详情信息
   */
  async DescribeAssetDetail(
    req: DescribeAssetDetailRequest,
    cb?: (error: string, rep: DescribeAssetDetailResponse) => void
  ): Promise<DescribeAssetDetailResponse> {
    return this.request("DescribeAssetDetail", req, cb)
  }

  /**
   * 获取EDR告警数量统计，供资产模块调用。根据传入的MemberId和InstanceIDs，查询EDR告警表并返回告警记录条数信息。当InstanceIDs为空时返回汇总统计，非空时按InstanceIDs粒度分别返回统计。
   */
  async DescribeEdrAlertCountForAsset(
    req: DescribeEdrAlertCountForAssetRequest,
    cb?: (error: string, rep: DescribeEdrAlertCountForAssetResponse) => void
  ): Promise<DescribeEdrAlertCountForAssetResponse> {
    return this.request("DescribeEdrAlertCountForAsset", req, cb)
  }

  /**
   * 获取漏洞或KB关联的主机
   */
  async DescribeVulRiskRelateHost(
    req: DescribeVulRiskRelateHostRequest,
    cb?: (error: string, rep: DescribeVulRiskRelateHostResponse) => void
  ): Promise<DescribeVulRiskRelateHostResponse> {
    return this.request("DescribeVulRiskRelateHost", req, cb)
  }

  /**
   * 获取基线策略维度的聚合扫描结果列表，用于概览页“基线扫描策略”模块按策略展示通过/未通过情况。
   */
  async DescribeBaselineAggregatedPolicyList(
    req: DescribeBaselineAggregatedPolicyListRequest,
    cb?: (error: string, rep: DescribeBaselineAggregatedPolicyListResponse) => void
  ): Promise<DescribeBaselineAggregatedPolicyListResponse> {
    return this.request("DescribeBaselineAggregatedPolicyList", req, cb)
  }

  /**
   * 云边界自动打标-规则属性
   */
  async DescribeExposureAutoTagAttribute(
    req: DescribeExposureAutoTagAttributeRequest,
    cb?: (error: string, rep: DescribeExposureAutoTagAttributeResponse) => void
  ): Promise<DescribeExposureAutoTagAttributeResponse> {
    return this.request("DescribeExposureAutoTagAttribute", req, cb)
  }

  /**
   * 查询ModifyCSIPLicenseBinds返回的异步绑定任务进度。
   */
  async DescribeCSIPLicenseBindSchedule(
    req: DescribeCSIPLicenseBindScheduleRequest,
    cb?: (error: string, rep: DescribeCSIPLicenseBindScheduleResponse) => void
  ): Promise<DescribeCSIPLicenseBindScheduleResponse> {
    return this.request("DescribeCSIPLicenseBindSchedule", req, cb)
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
     * 获取 AI 分析文件的临时下载链接。

传入文件的原始地址，返回带签名的临时下载链接，链接有效期为 2 小时。
     */
  async DescribeAIAnalysisFileDownloadURL(
    req: DescribeAIAnalysisFileDownloadURLRequest,
    cb?: (error: string, rep: DescribeAIAnalysisFileDownloadURLResponse) => void
  ): Promise<DescribeAIAnalysisFileDownloadURLResponse> {
    return this.request("DescribeAIAnalysisFileDownloadURL", req, cb)
  }

  /**
   * 创建Pod关联容器列表导出任务。导出字段包含容器ID、容器名称、运行状态、节点ID、节点类型、镜像ID、镜像名称、隔离状态。支持Filter过滤。导出通过异步任务实现，返回JobId后前端轮询查询导出任务状态。
   */
  async CreatePodContainerListExportJob(
    req: CreatePodContainerListExportJobRequest,
    cb?: (error: string, rep: CreatePodContainerListExportJobResponse) => void
  ): Promise<CreatePodContainerListExportJobResponse> {
    return this.request("CreatePodContainerListExportJob", req, cb)
  }

  /**
   * 删除导出任务
   */
  async DeleteDspmExportTask(
    req: DeleteDspmExportTaskRequest,
    cb?: (error: string, rep: DeleteDspmExportTaskResponse) => void
  ): Promise<DeleteDspmExportTaskResponse> {
    return this.request("DeleteDspmExportTask", req, cb)
  }

  /**
   * 批量修改EDR策略动作
   */
  async ModifyEDRRulesAction(
    req: ModifyEDRRulesActionRequest,
    cb?: (error: string, rep: ModifyEDRRulesActionResponse) => void
  ): Promise<ModifyEDRRulesActionResponse> {
    return this.request("ModifyEDRRulesAction", req, cb)
  }

  /**
   * 获取主机kb风险列表
   */
  async DescribeHostKBRiskList(
    req: DescribeHostKBRiskListRequest,
    cb?: (error: string, rep: DescribeHostKBRiskListResponse) => void
  ): Promise<DescribeHostKBRiskListResponse> {
    return this.request("DescribeHostKBRiskList", req, cb)
  }

  /**
   * 查询资产表信息
   */
  async DescribeDspmAssetTableList(
    req: DescribeDspmAssetTableListRequest,
    cb?: (error: string, rep: DescribeDspmAssetTableListResponse) => void
  ): Promise<DescribeDspmAssetTableListResponse> {
    return this.request("DescribeDspmAssetTableList", req, cb)
  }

  /**
   * 查询文件查杀定时扫描配置
   */
  async DescribeMalwareTimingScanSetting(
    req: DescribeMalwareTimingScanSettingRequest,
    cb?: (error: string, rep: DescribeMalwareTimingScanSettingResponse) => void
  ): Promise<DescribeMalwareTimingScanSettingResponse> {
    return this.request("DescribeMalwareTimingScanSetting", req, cb)
  }

  /**
   * 判断当前用户是否旗舰版
   */
  async CheckIsUltimateVersion(
    req?: CheckIsUltimateVersionRequest,
    cb?: (error: string, rep: CheckIsUltimateVersionResponse) => void
  ): Promise<CheckIsUltimateVersionResponse> {
    return this.request("CheckIsUltimateVersion", req, cb)
  }

  /**
   * 开启或者修改进程守护功能配置
   */
  async StartOrModifyProcessDaemon(
    req: StartOrModifyProcessDaemonRequest,
    cb?: (error: string, rep: StartOrModifyProcessDaemonResponse) => void
  ): Promise<StartOrModifyProcessDaemonResponse> {
    return this.request("StartOrModifyProcessDaemon", req, cb)
  }

  /**
   * 批量删除接收机器人。删除前会自动从所有引用了这些机器人的策略中移除引用关系。
   */
  async DeleteWebhookReceivers(
    req: DeleteWebhookReceiversRequest,
    cb?: (error: string, rep: DeleteWebhookReceiversResponse) => void
  ): Promise<DeleteWebhookReceiversResponse> {
    return this.request("DeleteWebhookReceivers", req, cb)
  }

  /**
   * 删除dspm数据识别分类
   */
  async DeleteDspmIdentifyCategory(
    req: DeleteDspmIdentifyCategoryRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyCategoryResponse) => void
  ): Promise<DeleteDspmIdentifyCategoryResponse> {
    return this.request("DeleteDspmIdentifyCategory", req, cb)
  }

  /**
   * 查询Dspm资产账号列表
   */
  async DescribeDspmAssetAccounts(
    req: DescribeDspmAssetAccountsRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccountsResponse) => void
  ): Promise<DescribeDspmAssetAccountsResponse> {
    return this.request("DescribeDspmAssetAccounts", req, cb)
  }

  /**
   * 获取日志索引信息
   */
  async DescribeCLSLogIndexV3(
    req: DescribeCLSLogIndexV3Request,
    cb?: (error: string, rep: DescribeCLSLogIndexV3Response) => void
  ): Promise<DescribeCLSLogIndexV3Response> {
    return this.request("DescribeCLSLogIndexV3", req, cb)
  }

  /**
   * 获取通知设置
   */
  async DescribeNotifySetting(
    req?: DescribeNotifySettingRequest,
    cb?: (error: string, rep: DescribeNotifySettingResponse) => void
  ): Promise<DescribeNotifySettingResponse> {
    return this.request("DescribeNotifySetting", req, cb)
  }

  /**
   * 修改策略状态
   */
  async ModifyPolicyStatus(
    req: ModifyPolicyStatusRequest,
    cb?: (error: string, rep: ModifyPolicyStatusResponse) => void
  ): Promise<ModifyPolicyStatusResponse> {
    return this.request("ModifyPolicyStatus", req, cb)
  }

  /**
   * 删除Dspm个人身份id
   */
  async DeleteDspmPersonalIdentify(
    req: DeleteDspmPersonalIdentifyRequest,
    cb?: (error: string, rep: DeleteDspmPersonalIdentifyResponse) => void
  ): Promise<DeleteDspmPersonalIdentifyResponse> {
    return this.request("DeleteDspmPersonalIdentify", req, cb)
  }

  /**
   * 获取IaC检测文件报告
   */
  async DescribeIaCFileReport(
    req: DescribeIaCFileReportRequest,
    cb?: (error: string, rep: DescribeIaCFileReportResponse) => void
  ): Promise<DescribeIaCFileReportResponse> {
    return this.request("DescribeIaCFileReport", req, cb)
  }

  /**
   * 获取账号CSPM信息
   */
  async DescribeUserCSPMInfoList(
    req: DescribeUserCSPMInfoListRequest,
    cb?: (error: string, rep: DescribeUserCSPMInfoListResponse) => void
  ): Promise<DescribeUserCSPMInfoListResponse> {
    return this.request("DescribeUserCSPMInfoList", req, cb)
  }

  /**
   * 获取阻断按钮状态
   */
  async DescribeBanStatus(
    req: DescribeBanStatusRequest,
    cb?: (error: string, rep: DescribeBanStatusResponse) => void
  ): Promise<DescribeBanStatusResponse> {
    return this.request("DescribeBanStatus", req, cb)
  }

  /**
   * 验证Dspm资产登录验证码
   */
  async VerifyDspmAssetLoginCode(
    req: VerifyDspmAssetLoginCodeRequest,
    cb?: (error: string, rep: VerifyDspmAssetLoginCodeResponse) => void
  ): Promise<VerifyDspmAssetLoginCodeResponse> {
    return this.request("VerifyDspmAssetLoginCode", req, cb)
  }

  /**
   * 创建dspm数据识别模板数据项关联
   */
  async CreateDspmIdentifyComplianceRuleRelation(
    req: CreateDspmIdentifyComplianceRuleRelationRequest,
    cb?: (error: string, rep: CreateDspmIdentifyComplianceRuleRelationResponse) => void
  ): Promise<CreateDspmIdentifyComplianceRuleRelationResponse> {
    return this.request("CreateDspmIdentifyComplianceRuleRelation", req, cb)
  }

  /**
   * 查询应用防护授权列表
   */
  async DescribeRaspLicenseList(
    req: DescribeRaspLicenseListRequest,
    cb?: (error: string, rep: DescribeRaspLicenseListResponse) => void
  ): Promise<DescribeRaspLicenseListResponse> {
    return this.request("DescribeRaspLicenseList", req, cb)
  }

  /**
   * 获取安全风险趋势，返回按维度分组的每日风险数量
   */
  async DescribeSecurityRiskTrend(
    req: DescribeSecurityRiskTrendRequest,
    cb?: (error: string, rep: DescribeSecurityRiskTrendResponse) => void
  ): Promise<DescribeSecurityRiskTrendResponse> {
    return this.request("DescribeSecurityRiskTrend", req, cb)
  }

  /**
   * 查询凭证详情，返回凭证元数据和打码后的凭据数据。access类型返回Access数组（Key原文、Value打码），sts类型返回STS对象（System原文、SecretID和SecretKey打码）
   */
  async DescribeKeySandboxCredential(
    req: DescribeKeySandboxCredentialRequest,
    cb?: (error: string, rep: DescribeKeySandboxCredentialResponse) => void
  ): Promise<DescribeKeySandboxCredentialResponse> {
    return this.request("DescribeKeySandboxCredential", req, cb)
  }

  /**
   * 修改Dspm资产数据扫描任务
   */
  async ModifyDspmAssetDataScanTask(
    req: ModifyDspmAssetDataScanTaskRequest,
    cb?: (error: string, rep: ModifyDspmAssetDataScanTaskResponse) => void
  ): Promise<ModifyDspmAssetDataScanTaskResponse> {
    return this.request("ModifyDspmAssetDataScanTask", req, cb)
  }

  /**
   * 创建资产视角下风险列表导出任务示例
   */
  async CreateAssetViewRisksExportJob(
    req: CreateAssetViewRisksExportJobRequest,
    cb?: (error: string, rep: CreateAssetViewRisksExportJobResponse) => void
  ): Promise<CreateAssetViewRisksExportJobResponse> {
    return this.request("CreateAssetViewRisksExportJob", req, cb)
  }

  /**
   * 创建dspm数据识别数据项
   */
  async CreateDspmIdentifyRule(
    req: CreateDspmIdentifyRuleRequest,
    cb?: (error: string, rep: CreateDspmIdentifyRuleResponse) => void
  ): Promise<CreateDspmIdentifyRuleResponse> {
    return this.request("CreateDspmIdentifyRule", req, cb)
  }

  /**
   * 下载导出日志
   */
  async DownloadDspmExportLog(
    req: DownloadDspmExportLogRequest,
    cb?: (error: string, rep: DownloadDspmExportLogResponse) => void
  ): Promise<DownloadDspmExportLogResponse> {
    return this.request("DownloadDspmExportLog", req, cb)
  }

  /**
   * 访问密钥告警记录AI分析结果详情
   */
  async DescribeAKAnalysisDetail(
    req: DescribeAKAnalysisDetailRequest,
    cb?: (error: string, rep: DescribeAKAnalysisDetailResponse) => void
  ): Promise<DescribeAKAnalysisDetailResponse> {
    return this.request("DescribeAKAnalysisDetail", req, cb)
  }

  /**
   * 查询用户的账号详情
   */
  async DescribeAccessKeyUserDetail(
    req: DescribeAccessKeyUserDetailRequest,
    cb?: (error: string, rep: DescribeAccessKeyUserDetailResponse) => void
  ): Promise<DescribeAccessKeyUserDetailResponse> {
    return this.request("DescribeAccessKeyUserDetail", req, cb)
  }

  /**
   * 容器场景告警数量统计
   */
  async DescribeEdrAlertCountForContainer(
    req: DescribeEdrAlertCountForContainerRequest,
    cb?: (error: string, rep: DescribeEdrAlertCountForContainerResponse) => void
  ): Promise<DescribeEdrAlertCountForContainerResponse> {
    return this.request("DescribeEdrAlertCountForContainer", req, cb)
  }

  /**
   * 获取资产视角的弱口令风险列表
   */
  async DescribeRiskCenterAssetViewWeakPasswordRiskList(
    req: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewWeakPasswordRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewWeakPasswordRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, cb)
  }

  /**
   * CSIP 手动扫描任务删除接口
   */
  async ScanCSIPTaskAgain(
    req: ScanCSIPTaskAgainRequest,
    cb?: (error: string, rep: ScanCSIPTaskAgainResponse) => void
  ): Promise<ScanCSIPTaskAgainResponse> {
    return this.request("ScanCSIPTaskAgain", req, cb)
  }

  /**
   * 创建集群列表导出任务
   */
  async CreateClusterListExportJob(
    req: CreateClusterListExportJobRequest,
    cb?: (error: string, rep: CreateClusterListExportJobResponse) => void
  ): Promise<CreateClusterListExportJobResponse> {
    return this.request("CreateClusterListExportJob", req, cb)
  }

  /**
   * 修改dspm数据识别分类
   */
  async ModifyDspmIdentifyCategory(
    req: ModifyDspmIdentifyCategoryRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyCategoryResponse) => void
  ): Promise<ModifyDspmIdentifyCategoryResponse> {
    return this.request("ModifyDspmIdentifyCategory", req, cb)
  }

  /**
   * 获取防卸载全局配置
   */
  async DescribePreventUninstallGlobalConf(
    req: DescribePreventUninstallGlobalConfRequest,
    cb?: (error: string, rep: DescribePreventUninstallGlobalConfResponse) => void
  ): Promise<DescribePreventUninstallGlobalConfResponse> {
    return this.request("DescribePreventUninstallGlobalConf", req, cb)
  }

  /**
   * 获取进程守护主机列表
   */
  async DescribeProcessDaemonHost(
    req: DescribeProcessDaemonHostRequest,
    cb?: (error: string, rep: DescribeProcessDaemonHostResponse) => void
  ): Promise<DescribeProcessDaemonHostResponse> {
    return this.request("DescribeProcessDaemonHost", req, cb)
  }

  /**
   * 获取检测项维度的聚合扫描结果列表，用于策略详情页“检测项”Tab 按检测项展示通过/未通过资产数。
   */
  async DescribeBaselineAggregatedItemList(
    req: DescribeBaselineAggregatedItemListRequest,
    cb?: (error: string, rep: DescribeBaselineAggregatedItemListResponse) => void
  ): Promise<DescribeBaselineAggregatedItemListResponse> {
    return this.request("DescribeBaselineAggregatedItemList", req, cb)
  }

  /**
   * 检查视角下云资源配置风险列表
   */
  async DescribeCheckViewRisks(
    req: DescribeCheckViewRisksRequest,
    cb?: (error: string, rep: DescribeCheckViewRisksResponse) => void
  ): Promise<DescribeCheckViewRisksResponse> {
    return this.request("DescribeCheckViewRisks", req, cb)
  }

  /**
   * 获取AI问答推荐问题
   */
  async DescribeAIAnalysisRecommendQuestions(
    req: DescribeAIAnalysisRecommendQuestionsRequest,
    cb?: (error: string, rep: DescribeAIAnalysisRecommendQuestionsResponse) => void
  ): Promise<DescribeAIAnalysisRecommendQuestionsResponse> {
    return this.request("DescribeAIAnalysisRecommendQuestions", req, cb)
  }

  /**
   * 查询容器关联组件列表。通过容器ID获取关联的组件信息，支持分页。
   */
  async DescribeClusterContainerComponentList(
    req: DescribeClusterContainerComponentListRequest,
    cb?: (error: string, rep: DescribeClusterContainerComponentListResponse) => void
  ): Promise<DescribeClusterContainerComponentListResponse> {
    return this.request("DescribeClusterContainerComponentList", req, cb)
  }

  /**
   * 获取内容风险列表
   */
  async DescribeRiskCenterWebsiteRiskList(
    req: DescribeRiskCenterWebsiteRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterWebsiteRiskListResponse) => void
  ): Promise<DescribeRiskCenterWebsiteRiskListResponse> {
    return this.request("DescribeRiskCenterWebsiteRiskList", req, cb)
  }

  /**
   * 获取漏洞主机关联组件
   */
  async DescribeVulHostRelateComponent(
    req: DescribeVulHostRelateComponentRequest,
    cb?: (error: string, rep: DescribeVulHostRelateComponentResponse) => void
  ): Promise<DescribeVulHostRelateComponentResponse> {
    return this.request("DescribeVulHostRelateComponent", req, cb)
  }

  /**
   * 每日告警新增数据
   */
  async DescribeCosAlarmTrendData(
    req: DescribeCosAlarmTrendDataRequest,
    cb?: (error: string, rep: DescribeCosAlarmTrendDataResponse) => void
  ): Promise<DescribeCosAlarmTrendDataResponse> {
    return this.request("DescribeCosAlarmTrendData", req, cb)
  }

  /**
   * 数据库资产列表
   */
  async DescribeDbAssets(
    req: DescribeDbAssetsRequest,
    cb?: (error: string, rep: DescribeDbAssetsResponse) => void
  ): Promise<DescribeDbAssetsResponse> {
    return this.request("DescribeDbAssets", req, cb)
  }

  /**
   * 立体防护中心查询漏洞信息
   */
  async DescribeSearchBugInfo(
    req: DescribeSearchBugInfoRequest,
    cb?: (error: string, rep: DescribeSearchBugInfoResponse) => void
  ): Promise<DescribeSearchBugInfoResponse> {
    return this.request("DescribeSearchBugInfo", req, cb)
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
   * 获取漏洞视角的漏洞风险列表
   */
  async DescribeVulViewVulRiskList(
    req: DescribeVulViewVulRiskListRequest,
    cb?: (error: string, rep: DescribeVulViewVulRiskListResponse) => void
  ): Promise<DescribeVulViewVulRiskListResponse> {
    return this.request("DescribeVulViewVulRiskList", req, cb)
  }

  /**
   * 创建域名、ip相关信息
   */
  async CreateDomainAndIp(
    req: CreateDomainAndIpRequest,
    cb?: (error: string, rep: CreateDomainAndIpResponse) => void
  ): Promise<CreateDomainAndIpResponse> {
    return this.request("CreateDomainAndIp", req, cb)
  }

  /**
   * 批量告警状态处理接口
   */
  async UpdateAlertStatusList(
    req: UpdateAlertStatusListRequest,
    cb?: (error: string, rep: UpdateAlertStatusListResponse) => void
  ): Promise<UpdateAlertStatusListResponse> {
    return this.request("UpdateAlertStatusList", req, cb)
  }

  /**
   * 查询云边界分析-暴露路径下主机节点的高危基线风险列表
   */
  async DescribeHighBaseLineRiskList(
    req: DescribeHighBaseLineRiskListRequest,
    cb?: (error: string, rep: DescribeHighBaseLineRiskListResponse) => void
  ): Promise<DescribeHighBaseLineRiskListResponse> {
    return this.request("DescribeHighBaseLineRiskList", req, cb)
  }

  /**
   * 编辑或者创建EDR策略
   */
  async ModifyEDRRule(
    req: ModifyEDRRuleRequest,
    cb?: (error: string, rep: ModifyEDRRuleResponse) => void
  ): Promise<ModifyEDRRuleResponse> {
    return this.request("ModifyEDRRule", req, cb)
  }

  /**
   * 删除漏洞白名单
   */
  async DeleteVulWhitelist(
    req: DeleteVulWhitelistRequest,
    cb?: (error: string, rep: DeleteVulWhitelistResponse) => void
  ): Promise<DeleteVulWhitelistResponse> {
    return this.request("DeleteVulWhitelist", req, cb)
  }

  /**
   * 查询凭证列表
   */
  async DescribeKeySandboxCredentialList(
    req: DescribeKeySandboxCredentialListRequest,
    cb?: (error: string, rep: DescribeKeySandboxCredentialListResponse) => void
  ): Promise<DescribeKeySandboxCredentialListResponse> {
    return this.request("DescribeKeySandboxCredentialList", req, cb)
  }

  /**
   * 编辑资产标签
   */
  async ModifyAssetTag(
    req: ModifyAssetTagRequest,
    cb?: (error: string, rep: ModifyAssetTagResponse) => void
  ): Promise<ModifyAssetTagResponse> {
    return this.request("ModifyAssetTag", req, cb)
  }

  /**
   * 修改AI-Link智链引擎配置
   */
  async ModifyAILinkSetting(
    req: ModifyAILinkSettingRequest,
    cb?: (error: string, rep: ModifyAILinkSettingResponse) => void
  ): Promise<ModifyAILinkSettingResponse> {
    return this.request("ModifyAILinkSetting", req, cb)
  }

  /**
   * 查询Dspm资产列表
   */
  async DescribeDspmAssets(
    req: DescribeDspmAssetsRequest,
    cb?: (error: string, rep: DescribeDspmAssetsResponse) => void
  ): Promise<DescribeDspmAssetsResponse> {
    return this.request("DescribeDspmAssets", req, cb)
  }

  /**
   * 查询Dspm资产支持的权限
   */
  async DescribeDspmAssetSupportedPrivileges(
    req: DescribeDspmAssetSupportedPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetSupportedPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetSupportedPrivilegesResponse> {
    return this.request("DescribeDspmAssetSupportedPrivileges", req, cb)
  }

  /**
   * 获取IaC检测文件概览
   */
  async DescribeIaCFileOverview(
    req: DescribeIaCFileOverviewRequest,
    cb?: (error: string, rep: DescribeIaCFileOverviewResponse) => void
  ): Promise<DescribeIaCFileOverviewResponse> {
    return this.request("DescribeIaCFileOverview", req, cb)
  }

  /**
   * 查询集群容器详情。通过容器ID获取容器基本信息、镜像信息、挂载信息、网络信息以及关联节点信息。
   */
  async DescribeClusterContainerDetail(
    req: DescribeClusterContainerDetailRequest,
    cb?: (error: string, rep: DescribeClusterContainerDetailResponse) => void
  ): Promise<DescribeClusterContainerDetailResponse> {
    return this.request("DescribeClusterContainerDetail", req, cb)
  }

  /**
   * 风险接口列表信息
   */
  async DescribeCosRiskActionList(
    req: DescribeCosRiskActionListRequest,
    cb?: (error: string, rep: DescribeCosRiskActionListResponse) => void
  ): Promise<DescribeCosRiskActionListResponse> {
    return this.request("DescribeCosRiskActionList", req, cb)
  }

  /**
   * 访问密钥风险记录详情
   */
  async DescribeAccessKeyRiskDetail(
    req: DescribeAccessKeyRiskDetailRequest,
    cb?: (error: string, rep: DescribeAccessKeyRiskDetailResponse) => void
  ): Promise<DescribeAccessKeyRiskDetailResponse> {
    return this.request("DescribeAccessKeyRiskDetail", req, cb)
  }

  /**
   * 删除Dspm资产账号
   */
  async DeleteDspmAssetAccount(
    req: DeleteDspmAssetAccountRequest,
    cb?: (error: string, rep: DeleteDspmAssetAccountResponse) => void
  ): Promise<DeleteDspmAssetAccountResponse> {
    return this.request("DeleteDspmAssetAccount", req, cb)
  }

  /**
   * 获取漏洞列表
   */
  async DescribeVulItemList(
    req: DescribeVulItemListRequest,
    cb?: (error: string, rep: DescribeVulItemListResponse) => void
  ): Promise<DescribeVulItemListResponse> {
    return this.request("DescribeVulItemList", req, cb)
  }

  /**
   * 查询集群 Pod 详情。容器资产改版 A 类新接口，为 Pod 资产详情页主入口。入参仅 UniqueID；出参覆盖资产信息、所属集群、命名空间、节点、Workload、以及按四个风险等级分组的风险事件数和告警事件数。
   */
  async DescribeClusterPodDetail(
    req: DescribeClusterPodDetailRequest,
    cb?: (error: string, rep: DescribeClusterPodDetailResponse) => void
  ): Promise<DescribeClusterPodDetailResponse> {
    return this.request("DescribeClusterPodDetail", req, cb)
  }

  /**
   * 删除dspm数据识别分级组
   */
  async DeleteDspmIdentifyLevelGroup(
    req: DeleteDspmIdentifyLevelGroupRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyLevelGroupResponse) => void
  ): Promise<DeleteDspmIdentifyLevelGroupResponse> {
    return this.request("DeleteDspmIdentifyLevelGroup", req, cb)
  }

  /**
   * 更新当前账号的“用户弱口令”自定义字典。字典原文经服务端加密后存储；传空字符串视为清空。
   */
  async ModifyBaselineUserWeakPasswordConf(
    req: ModifyBaselineUserWeakPasswordConfRequest,
    cb?: (error: string, rep: ModifyBaselineUserWeakPasswordConfResponse) => void
  ): Promise<ModifyBaselineUserWeakPasswordConfResponse> {
    return this.request("ModifyBaselineUserWeakPasswordConf", req, cb)
  }

  /**
   * 获取扫码登录主机列表
   */
  async DescribeLoginTypeHost(
    req: DescribeLoginTypeHostRequest,
    cb?: (error: string, rep: DescribeLoginTypeHostResponse) => void
  ): Promise<DescribeLoginTypeHostResponse> {
    return this.request("DescribeLoginTypeHost", req, cb)
  }

  /**
   * 全部资产
   */
  async DescribeAssetTags(
    req: DescribeAssetTagsRequest,
    cb?: (error: string, rep: DescribeAssetTagsResponse) => void
  ): Promise<DescribeAssetTagsResponse> {
    return this.request("DescribeAssetTags", req, cb)
  }

  /**
   * 获取 AI agent 资产列表
   */
  async DescribeAIAgentAssetList(
    req: DescribeAIAgentAssetListRequest,
    cb?: (error: string, rep: DescribeAIAgentAssetListResponse) => void
  ): Promise<DescribeAIAgentAssetListResponse> {
    return this.request("DescribeAIAgentAssetList", req, cb)
  }

  /**
   * CSIP 扫描任务主机详情接口
   */
  async DescribeCSIPMalwareScanTaskDetail(
    req: DescribeCSIPMalwareScanTaskDetailRequest,
    cb?: (error: string, rep: DescribeCSIPMalwareScanTaskDetailResponse) => void
  ): Promise<DescribeCSIPMalwareScanTaskDetailResponse> {
    return this.request("DescribeCSIPMalwareScanTaskDetail", req, cb)
  }

  /**
   * 云边界自动打标-规则列表
   */
  async DescribeExposureAutoTagRules(
    req: DescribeExposureAutoTagRulesRequest,
    cb?: (error: string, rep: DescribeExposureAutoTagRulesResponse) => void
  ): Promise<DescribeExposureAutoTagRulesResponse> {
    return this.request("DescribeExposureAutoTagRules", req, cb)
  }

  /**
   * 查询dspm数据识别数据项列表
   */
  async DescribeDspmIdentifyRuleList(
    req: DescribeDspmIdentifyRuleListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyRuleListResponse) => void
  ): Promise<DescribeDspmIdentifyRuleListResponse> {
    return this.request("DescribeDspmIdentifyRuleList", req, cb)
  }

  /**
   * 云资源配置风险规则列表示例
   */
  async DescribeConfigCheckRules(
    req: DescribeConfigCheckRulesRequest,
    cb?: (error: string, rep: DescribeConfigCheckRulesResponse) => void
  ): Promise<DescribeConfigCheckRulesResponse> {
    return this.request("DescribeConfigCheckRules", req, cb)
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
   * 获取vpc列表
   */
  async DescribeVpcAssets(
    req: DescribeVpcAssetsRequest,
    cb?: (error: string, rep: DescribeVpcAssetsResponse) => void
  ): Promise<DescribeVpcAssetsResponse> {
    return this.request("DescribeVpcAssets", req, cb)
  }

  /**
   * 查询扫描任务详情。Filter.Filters支持Name：Status（资产扫描状态，OperatorType=7 IN匹配，取值WAIT/SCANNING/FINISHED/FAILED）。
   */
  async DescribeEDRScanTaskDetail(
    req: DescribeEDRScanTaskDetailRequest,
    cb?: (error: string, rep: DescribeEDRScanTaskDetailResponse) => void
  ): Promise<DescribeEDRScanTaskDetailResponse> {
    return this.request("DescribeEDRScanTaskDetail", req, cb)
  }

  /**
   * EDR告警隔离和恢复
   */
  async ModifyEdrAlertIsolation(
    req: ModifyEdrAlertIsolationRequest,
    cb?: (error: string, rep: ModifyEdrAlertIsolationResponse) => void
  ): Promise<ModifyEdrAlertIsolationResponse> {
    return this.request("ModifyEdrAlertIsolation", req, cb)
  }

  /**
   * 查看调用记录关联的文件信息
   */
  async DescribeCosInvokeUa(
    req: DescribeCosInvokeUaRequest,
    cb?: (error: string, rep: DescribeCosInvokeUaResponse) => void
  ): Promise<DescribeCosInvokeUaResponse> {
    return this.request("DescribeCosInvokeUa", req, cb)
  }

  /**
   * 创建IaC检测接入Token
   */
  async CreateIaCAccessToken(
    req: CreateIaCAccessTokenRequest,
    cb?: (error: string, rep: CreateIaCAccessTokenResponse) => void
  ): Promise<CreateIaCAccessTokenResponse> {
    return this.request("CreateIaCAccessToken", req, cb)
  }

  /**
   * 查询Dspm风险策略
   */
  async DescribeDspmRiskStrategy(
    req: DescribeDspmRiskStrategyRequest,
    cb?: (error: string, rep: DescribeDspmRiskStrategyResponse) => void
  ): Promise<DescribeDspmRiskStrategyResponse> {
    return this.request("DescribeDspmRiskStrategy", req, cb)
  }

  /**
   * 自定义风险规则
   */
  async OperateRiskRulePolicy(
    req: OperateRiskRulePolicyRequest,
    cb?: (error: string, rep: OperateRiskRulePolicyResponse) => void
  ): Promise<OperateRiskRulePolicyResponse> {
    return this.request("OperateRiskRulePolicy", req, cb)
  }

  /**
   * 查询反弹Shell内网告警与资产范围配置
   */
  async DescribeReverseShellSystemPolicyConfig(
    req: DescribeReverseShellSystemPolicyConfigRequest,
    cb?: (error: string, rep: DescribeReverseShellSystemPolicyConfigResponse) => void
  ): Promise<DescribeReverseShellSystemPolicyConfigResponse> {
    return this.request("DescribeReverseShellSystemPolicyConfig", req, cb)
  }

  /**
   * 查看风险趋势图
   */
  async DescribeRiskTrendData(
    req: DescribeRiskTrendDataRequest,
    cb?: (error: string, rep: DescribeRiskTrendDataResponse) => void
  ): Promise<DescribeRiskTrendDataResponse> {
    return this.request("DescribeRiskTrendData", req, cb)
  }

  /**
   * 高级配置风险规则列表示例
   */
  async DescribeRiskRules(
    req: DescribeRiskRulesRequest,
    cb?: (error: string, rep: DescribeRiskRulesResponse) => void
  ): Promise<DescribeRiskRulesResponse> {
    return this.request("DescribeRiskRules", req, cb)
  }

  /**
   * 用户手动提交漏洞修复任务，指定需要修复的漏洞和目标主机，系统创建修复任务并下发执行。支持指定修复超时时间、是否创建快照等选项。通过FixItems数组精确控制每个漏洞/KB补丁修复哪些主机。
   */
  async CreateVulFixTask(
    req: CreateVulFixTaskRequest,
    cb?: (error: string, rep: CreateVulFixTaskResponse) => void
  ): Promise<CreateVulFixTaskResponse> {
    return this.request("CreateVulFixTask", req, cb)
  }

  /**
   * 资产同步任务状态
   */
  async DescribeAssetSyncTaskStatus(
    req: DescribeAssetSyncTaskStatusRequest,
    cb?: (error: string, rep: DescribeAssetSyncTaskStatusResponse) => void
  ): Promise<DescribeAssetSyncTaskStatusResponse> {
    return this.request("DescribeAssetSyncTaskStatus", req, cb)
  }

  /**
   * 查看存储桶扫描任务详情
   */
  async DescribeCosRiskScanTask(
    req: DescribeCosRiskScanTaskRequest,
    cb?: (error: string, rep: DescribeCosRiskScanTaskResponse) => void
  ): Promise<DescribeCosRiskScanTaskResponse> {
    return this.request("DescribeCosRiskScanTask", req, cb)
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
   * 查询集群详情
   */
  async DescribeClusterDetail(
    req: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
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
   * 云边界风险待治理风险
   */
  async DescribeExposeRiskStatistics(
    req: DescribeExposeRiskStatisticsRequest,
    cb?: (error: string, rep: DescribeExposeRiskStatisticsResponse) => void
  ): Promise<DescribeExposeRiskStatisticsResponse> {
    return this.request("DescribeExposeRiskStatistics", req, cb)
  }

  /**
   * 查看告警列表
   */
  async DescribeCosAlarmList(
    req: DescribeCosAlarmListRequest,
    cb?: (error: string, rep: DescribeCosAlarmListResponse) => void
  ): Promise<DescribeCosAlarmListResponse> {
    return this.request("DescribeCosAlarmList", req, cb)
  }

  /**
   * 查询Dspm支持的资产类型信息
   */
  async DescribeDspmSupportedAssetType(
    req: DescribeDspmSupportedAssetTypeRequest,
    cb?: (error: string, rep: DescribeDspmSupportedAssetTypeResponse) => void
  ): Promise<DescribeDspmSupportedAssetTypeResponse> {
    return this.request("DescribeDspmSupportedAssetType", req, cb)
  }

  /**
   * 获取账号dspm信息列表
   */
  async DescribeUserDspmInfoList(
    req: DescribeUserDspmInfoListRequest,
    cb?: (error: string, rep: DescribeUserDspmInfoListResponse) => void
  ): Promise<DescribeUserDspmInfoListResponse> {
    return this.request("DescribeUserDspmInfoList", req, cb)
  }

  /**
     * 查询AI 定时任务统计信息。

返回当前用户的定时任务总数和当前运行中的任务数量。
     */
  async DescribeAIScheduleStats(
    req?: DescribeAIScheduleStatsRequest,
    cb?: (error: string, rep: DescribeAIScheduleStatsResponse) => void
  ): Promise<DescribeAIScheduleStatsResponse> {
    return this.request("DescribeAIScheduleStats", req, cb)
  }

  /**
   * 风险操作示例
   */
  async OperateRisk(
    req: OperateRiskRequest,
    cb?: (error: string, rep: OperateRiskResponse) => void
  ): Promise<OperateRiskResponse> {
    return this.request("OperateRisk", req, cb)
  }

  /**
   * 修改应用日志采集路径配置
   */
  async ModifyEdrLogCollectPath(
    req: ModifyEdrLogCollectPathRequest,
    cb?: (error: string, rep: ModifyEdrLogCollectPathResponse) => void
  ): Promise<ModifyEdrLogCollectPathResponse> {
    return this.request("ModifyEdrLogCollectPath", req, cb)
  }

  /**
   * 查询Dspm申请历史
   */
  async DescribeDspmApplyHistory(
    req: DescribeDspmApplyHistoryRequest,
    cb?: (error: string, rep: DescribeDspmApplyHistoryResponse) => void
  ): Promise<DescribeDspmApplyHistoryResponse> {
    return this.request("DescribeDspmApplyHistory", req, cb)
  }

  /**
   * 查询AI-Link智链引擎配置
   */
  async DescribeAILinkSetting(
    req: DescribeAILinkSettingRequest,
    cb?: (error: string, rep: DescribeAILinkSettingResponse) => void
  ): Promise<DescribeAILinkSettingResponse> {
    return this.request("DescribeAILinkSetting", req, cb)
  }

  /**
   * 创建基线主任务导出任务，导出指定主任务下的检测项与子任务数据。任务在后台异步执行，完成后可在导出任务列表中下载结果文件。
   */
  async CreateBaselineMainTaskExportJob(
    req: CreateBaselineMainTaskExportJobRequest,
    cb?: (error: string, rep: CreateBaselineMainTaskExportJobResponse) => void
  ): Promise<CreateBaselineMainTaskExportJobResponse> {
    return this.request("CreateBaselineMainTaskExportJob", req, cb)
  }

  /**
   * 客户端设置主机列表导出
   */
  async ExportClientSettingHostList(
    req: ExportClientSettingHostListRequest,
    cb?: (error: string, rep: ExportClientSettingHostListResponse) => void
  ): Promise<ExportClientSettingHostListResponse> {
    return this.request("ExportClientSettingHostList", req, cb)
  }

  /**
   * 获取内置默认安全评分规则，用于重置自定义规则
   */
  async DescribeDefaultSecurityScoreRule(
    req: DescribeDefaultSecurityScoreRuleRequest,
    cb?: (error: string, rep: DescribeDefaultSecurityScoreRuleResponse) => void
  ): Promise<DescribeDefaultSecurityScoreRuleResponse> {
    return this.request("DescribeDefaultSecurityScoreRule", req, cb)
  }

  /**
   * 查询网络攻击检测开关及资产范围配置
   */
  async DescribeNetAttackSetting(
    req: DescribeNetAttackSettingRequest,
    cb?: (error: string, rep: DescribeNetAttackSettingResponse) => void
  ): Promise<DescribeNetAttackSettingResponse> {
    return this.request("DescribeNetAttackSetting", req, cb)
  }

  /**
   * 获取云安全AI助手历史分析记录
   */
  async DescribeAIAnalysisHistory(
    req: DescribeAIAnalysisHistoryRequest,
    cb?: (error: string, rep: DescribeAIAnalysisHistoryResponse) => void
  ): Promise<DescribeAIAnalysisHistoryResponse> {
    return this.request("DescribeAIAnalysisHistory", req, cb)
  }

  /**
   * 获取检测项维度的风险记录列表。
   */
  async DescribeBaselineItemRiskList(
    req: DescribeBaselineItemRiskListRequest,
    cb?: (error: string, rep: DescribeBaselineItemRiskListResponse) => void
  ): Promise<DescribeBaselineItemRiskListResponse> {
    return this.request("DescribeBaselineItemRiskList", req, cb)
  }

  /**
   * 云边界自动打标-更新规则
   */
  async ModifyExposureAutoTagRule(
    req: ModifyExposureAutoTagRuleRequest,
    cb?: (error: string, rep: ModifyExposureAutoTagRuleResponse) => void
  ): Promise<ModifyExposureAutoTagRuleResponse> {
    return this.request("ModifyExposureAutoTagRule", req, cb)
  }

  /**
   * 手动解绑RASP授权。同步执行，直接返回结果。仅解绑RASP授权（category=1），无解绑次数限制。单订单模式下appid即可定位订单，无需传ResourceId。
   */
  async ModifyCSIPRaspLicenseUnBinds(
    req: ModifyCSIPRaspLicenseUnBindsRequest,
    cb?: (error: string, rep: ModifyCSIPRaspLicenseUnBindsResponse) => void
  ): Promise<ModifyCSIPRaspLicenseUnBindsResponse> {
    return this.request("ModifyCSIPRaspLicenseUnBinds", req, cb)
  }

  /**
   * 基于原任务配置新建扫描任务。AssetId为空时从TaskId获取全部资产信息；AssetId非空时仅含该单资产。
   */
  async ScanEDRTaskAgain(
    req: ScanEDRTaskAgainRequest,
    cb?: (error: string, rep: ScanEDRTaskAgainResponse) => void
  ): Promise<ScanEDRTaskAgainResponse> {
    return this.request("ScanEDRTaskAgain", req, cb)
  }

  /**
   * 复制自定义基线策略
   */
  async CopyBaselinePolicy(
    req: CopyBaselinePolicyRequest,
    cb?: (error: string, rep: CopyBaselinePolicyResponse) => void
  ): Promise<CopyBaselinePolicyResponse> {
    return this.request("CopyBaselinePolicy", req, cb)
  }

  /**
   * 查询Dspm同步资产状态
   */
  async DescribeDspmSyncAssetsStatus(
    req?: DescribeDspmSyncAssetsStatusRequest,
    cb?: (error: string, rep: DescribeDspmSyncAssetsStatusResponse) => void
  ): Promise<DescribeDspmSyncAssetsStatusResponse> {
    return this.request("DescribeDspmSyncAssetsStatus", req, cb)
  }

  /**
   * 对一批风险记录发起重新扫描，常用于“风险列表”页批量勾选风险后的复扫场景。
   */
  async ScanBaselineRiskList(
    req: ScanBaselineRiskListRequest,
    cb?: (error: string, rep: ScanBaselineRiskListResponse) => void
  ): Promise<ScanBaselineRiskListResponse> {
    return this.request("ScanBaselineRiskList", req, cb)
  }

  /**
   * 判断用户是否灰度用户
   */
  async DescribeAbTestUser(
    req: DescribeAbTestUserRequest,
    cb?: (error: string, rep: DescribeAbTestUserResponse) => void
  ): Promise<DescribeAbTestUserResponse> {
    return this.request("DescribeAbTestUser", req, cb)
  }

  /**
   * 获取账号调用记录列表
   */
  async DescribeUserCallRecord(
    req: DescribeUserCallRecordRequest,
    cb?: (error: string, rep: DescribeUserCallRecordResponse) => void
  ): Promise<DescribeUserCallRecordResponse> {
    return this.request("DescribeUserCallRecord", req, cb)
  }

  /**
   * 获取系统内置基线分类树（父分类 → 子分类 → 内置检测项 ID 列表），用于策略详情展示。
   */
  async DescribeBaselinePolicyCategoryList(
    req: DescribeBaselinePolicyCategoryListRequest,
    cb?: (error: string, rep: DescribeBaselinePolicyCategoryListResponse) => void
  ): Promise<DescribeBaselinePolicyCategoryListResponse> {
    return this.request("DescribeBaselinePolicyCategoryList", req, cb)
  }

  /**
   * 云边界分析资产列表(适用于主机资产)
   */
  async DescribeCWPExposures(
    req: DescribeCWPExposuresRequest,
    cb?: (error: string, rep: DescribeCWPExposuresResponse) => void
  ): Promise<DescribeCWPExposuresResponse> {
    return this.request("DescribeCWPExposures", req, cb)
  }

  /**
   * 创建资产视角下风险列表导出任务示例
   */
  async CreateCheckViewRisksExportJob(
    req: CreateCheckViewRisksExportJobRequest,
    cb?: (error: string, rep: CreateCheckViewRisksExportJobResponse) => void
  ): Promise<CreateCheckViewRisksExportJobResponse> {
    return this.request("CreateCheckViewRisksExportJob", req, cb)
  }

  /**
   * 创建漏洞重新扫描
   */
  async CreateVulReScan(
    req: CreateVulReScanRequest,
    cb?: (error: string, rep: CreateVulReScanResponse) => void
  ): Promise<CreateVulReScanResponse> {
    return this.request("CreateVulReScan", req, cb)
  }

  /**
   * 告警中心全量告警列表接口
   */
  async DescribeAlertList(
    req: DescribeAlertListRequest,
    cb?: (error: string, rep: DescribeAlertListResponse) => void
  ): Promise<DescribeAlertListResponse> {
    return this.request("DescribeAlertList", req, cb)
  }

  /**
   * 查询授权绑定任务的进度
   */
  async DescribeCWPLicenseBindSchedule(
    req: DescribeCWPLicenseBindScheduleRequest,
    cb?: (error: string, rep: DescribeCWPLicenseBindScheduleResponse) => void
  ): Promise<DescribeCWPLicenseBindScheduleResponse> {
    return this.request("DescribeCWPLicenseBindSchedule", req, cb)
  }

  /**
   * 查询腾讯云指定CLB实例对应的七层转发规则列表
   */
  async DescribeClbListenerRules(
    req: DescribeClbListenerRulesRequest,
    cb?: (error: string, rep: DescribeClbListenerRulesResponse) => void
  ): Promise<DescribeClbListenerRulesResponse> {
    return this.request("DescribeClbListenerRules", req, cb)
  }

  /**
   * 修改Dspm资产账号信息
   */
  async ModifyDspmAssetAccount(
    req: ModifyDspmAssetAccountRequest,
    cb?: (error: string, rep: ModifyDspmAssetAccountResponse) => void
  ): Promise<ModifyDspmAssetAccountResponse> {
    return this.request("ModifyDspmAssetAccount", req, cb)
  }

  /**
   * 查询采集路径配置
   */
  async DescribeEdrLogCollectPaths(
    req: DescribeEdrLogCollectPathsRequest,
    cb?: (error: string, rep: DescribeEdrLogCollectPathsResponse) => void
  ): Promise<DescribeEdrLogCollectPathsResponse> {
    return this.request("DescribeEdrLogCollectPaths", req, cb)
  }

  /**
   * 查询AI助手的SMTP邮箱接入信息
   */
  async DescribeAIAnalysisSMTP(
    req?: DescribeAIAnalysisSMTPRequest,
    cb?: (error: string, rep: DescribeAIAnalysisSMTPResponse) => void
  ): Promise<DescribeAIAnalysisSMTPResponse> {
    return this.request("DescribeAIAnalysisSMTP", req, cb)
  }

  /**
   * 查询Dspm访问拓扑ip列表
   */
  async DescribeDspmAccessTopologyIps(
    req: DescribeDspmAccessTopologyIpsRequest,
    cb?: (error: string, rep: DescribeDspmAccessTopologyIpsResponse) => void
  ): Promise<DescribeDspmAccessTopologyIpsResponse> {
    return this.request("DescribeDspmAccessTopologyIps", req, cb)
  }

  /**
   * 获取客户端运行模式和运行配置信息
   */
  async DescribeAgentRunMode(
    req: DescribeAgentRunModeRequest,
    cb?: (error: string, rep: DescribeAgentRunModeResponse) => void
  ): Promise<DescribeAgentRunModeResponse> {
    return this.request("DescribeAgentRunMode", req, cb)
  }

  /**
   * 设置对象存储扫描采样率
   */
  async ModifyCosAuditObjectSampleRate(
    req: ModifyCosAuditObjectSampleRateRequest,
    cb?: (error: string, rep: ModifyCosAuditObjectSampleRateResponse) => void
  ): Promise<ModifyCosAuditObjectSampleRateResponse> {
    return this.request("ModifyCosAuditObjectSampleRate", req, cb)
  }

  /**
   * 获取漏洞组件关联主机
   */
  async DescribeVulComponentRelateHost(
    req: DescribeVulComponentRelateHostRequest,
    cb?: (error: string, rep: DescribeVulComponentRelateHostResponse) => void
  ): Promise<DescribeVulComponentRelateHostResponse> {
    return this.request("DescribeVulComponentRelateHost", req, cb)
  }

  /**
   * 访问密钥风险记录列表
   */
  async DescribeAccessKeyRisk(
    req: DescribeAccessKeyRiskRequest,
    cb?: (error: string, rep: DescribeAccessKeyRiskResponse) => void
  ): Promise<DescribeAccessKeyRiskResponse> {
    return this.request("DescribeAccessKeyRisk", req, cb)
  }

  /**
   * 仓库镜像列表
   */
  async DescribeRepositoryImageAssets(
    req: DescribeRepositoryImageAssetsRequest,
    cb?: (error: string, rep: DescribeRepositoryImageAssetsResponse) => void
  ): Promise<DescribeRepositoryImageAssetsResponse> {
    return this.request("DescribeRepositoryImageAssets", req, cb)
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
   * 创建云资源配置检测PDF报告导出任务示例
   */
  async CreateCFGRiskPDFReportExportJob(
    req: CreateCFGRiskPDFReportExportJobRequest,
    cb?: (error: string, rep: CreateCFGRiskPDFReportExportJobResponse) => void
  ): Promise<CreateCFGRiskPDFReportExportJobResponse> {
    return this.request("CreateCFGRiskPDFReportExportJob", req, cb)
  }

  /**
   * CSIP 手动扫描进度查询接口
   */
  async DescribeCSIPMalwareScanTaskProgress(
    req: DescribeCSIPMalwareScanTaskProgressRequest,
    cb?: (error: string, rep: DescribeCSIPMalwareScanTaskProgressResponse) => void
  ): Promise<DescribeCSIPMalwareScanTaskProgressResponse> {
    return this.request("DescribeCSIPMalwareScanTaskProgress", req, cb)
  }

  /**
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
  }

  /**
   * 修改dspm数据识别数据项状态
   */
  async ModifyDspmIdentifyRuleStatus(
    req: ModifyDspmIdentifyRuleStatusRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyRuleStatusResponse) => void
  ): Promise<ModifyDspmIdentifyRuleStatusResponse> {
    return this.request("ModifyDspmIdentifyRuleStatus", req, cb)
  }

  /**
   * 创建立即检测任务
   */
  async CreateScanTask(
    req: CreateScanTaskRequest,
    cb?: (error: string, rep: CreateScanTaskResponse) => void
  ): Promise<CreateScanTaskResponse> {
    return this.request("CreateScanTask", req, cb)
  }

  /**
   * 向指定的接收机器人发送一条测试消息，验证可达性与配置正确性。对应表格行内的「测试」按钮。
   */
  async TestWebhookReceiver(
    req: TestWebhookReceiverRequest,
    cb?: (error: string, rep: TestWebhookReceiverResponse) => void
  ): Promise<TestWebhookReceiverResponse> {
    return this.request("TestWebhookReceiver", req, cb)
  }

  /**
   * 获取扫描结果统计信息
   */
  async DescribeCFGRiskStatistics(
    req: DescribeCFGRiskStatisticsRequest,
    cb?: (error: string, rep: DescribeCFGRiskStatisticsResponse) => void
  ): Promise<DescribeCFGRiskStatisticsResponse> {
    return this.request("DescribeCFGRiskStatistics", req, cb)
  }

  /**
   * 查询扫描任务列表。Filter.Filters支持Name：Keyword(模糊OperatorType=9)、ScanType(MANUAL/CYCLE)、TaskType(HOST/CONTAINER)、Status(WAIT/SCANNING/FINISHED/FAILED/CANCELED)、AppId(账号)。
   */
  async DescribeEDRScanRecordList(
    req: DescribeEDRScanRecordListRequest,
    cb?: (error: string, rep: DescribeEDRScanRecordListResponse) => void
  ): Promise<DescribeEDRScanRecordListResponse> {
    return this.request("DescribeEDRScanRecordList", req, cb)
  }

  /**
   * 发送Dspm资产访问验证码
   */
  async SendDspmAssetLoginSmsCode(
    req: SendDspmAssetLoginSmsCodeRequest,
    cb?: (error: string, rep: SendDspmAssetLoginSmsCodeResponse) => void
  ): Promise<SendDspmAssetLoginSmsCodeResponse> {
    return this.request("SendDspmAssetLoginSmsCode", req, cb)
  }

  /**
   * 资产列表
   */
  async DescribeOtherCloudAssets(
    req: DescribeOtherCloudAssetsRequest,
    cb?: (error: string, rep: DescribeOtherCloudAssetsResponse) => void
  ): Promise<DescribeOtherCloudAssetsResponse> {
    return this.request("DescribeOtherCloudAssets", req, cb)
  }

  /**
   * 查询clb监听器列表
   */
  async DescribeListenerList(
    req: DescribeListenerListRequest,
    cb?: (error: string, rep: DescribeListenerListResponse) => void
  ): Promise<DescribeListenerListResponse> {
    return this.request("DescribeListenerList", req, cb)
  }

  /**
   * 获取防卸载全局配置
   */
  async DescribeLoginTypeGlobalConf(
    req: DescribeLoginTypeGlobalConfRequest,
    cb?: (error: string, rep: DescribeLoginTypeGlobalConfResponse) => void
  ): Promise<DescribeLoginTypeGlobalConfResponse> {
    return this.request("DescribeLoginTypeGlobalConf", req, cb)
  }

  /**
   * 分页查询当前租户下的通知策略列表，对应「通知中心 - 机器人通知 - 通知策略配置」Tab 的表格。返回的字段为「行展示」所需的精简信息。完整配置在编辑场景下使用 DescribeWebhookPolicy。每租户最多 100 个通知策略
   */
  async DescribeWebhookPolicyList(
    req: DescribeWebhookPolicyListRequest,
    cb?: (error: string, rep: DescribeWebhookPolicyListResponse) => void
  ): Promise<DescribeWebhookPolicyListResponse> {
    return this.request("DescribeWebhookPolicyList", req, cb)
  }

  /**
   * 创建公网资产导出任务
   */
  async CreatePublicAssetsExportJob(
    req: CreatePublicAssetsExportJobRequest,
    cb?: (error: string, rep: CreatePublicAssetsExportJobResponse) => void
  ): Promise<CreatePublicAssetsExportJobResponse> {
    return this.request("CreatePublicAssetsExportJob", req, cb)
  }

  /**
   * 主机详情
   */
  async DescribeCWPMachineDetail(
    req: DescribeCWPMachineDetailRequest,
    cb?: (error: string, rep: DescribeCWPMachineDetailResponse) => void
  ): Promise<DescribeCWPMachineDetailResponse> {
    return this.request("DescribeCWPMachineDetail", req, cb)
  }

  /**
   * 删除备份日志
   */
  async DeleteDspmBackupLogList(
    req: DeleteDspmBackupLogListRequest,
    cb?: (error: string, rep: DeleteDspmBackupLogListResponse) => void
  ): Promise<DeleteDspmBackupLogListResponse> {
    return this.request("DeleteDspmBackupLogList", req, cb)
  }

  /**
   * 查询dspm资产字段信息
   */
  async DescribeDspmAssetFieldList(
    req: DescribeDspmAssetFieldListRequest,
    cb?: (error: string, rep: DescribeDspmAssetFieldListResponse) => void
  ): Promise<DescribeDspmAssetFieldListResponse> {
    return this.request("DescribeDspmAssetFieldList", req, cb)
  }

  /**
   * 获取风险服务列表
   */
  async DescribeRiskCenterServerRiskList(
    req: DescribeRiskCenterServerRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterServerRiskListResponse) => void
  ): Promise<DescribeRiskCenterServerRiskListResponse> {
    return this.request("DescribeRiskCenterServerRiskList", req, cb)
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
   * 获取调用记录列表
   */
  async DescribeCallRecord(
    req: DescribeCallRecordRequest,
    cb?: (error: string, rep: DescribeCallRecordResponse) => void
  ): Promise<DescribeCallRecordResponse> {
    return this.request("DescribeCallRecord", req, cb)
  }

  /**
   * 资产概览统计
   */
  async DescribeAssetOverview(
    req: DescribeAssetOverviewRequest,
    cb?: (error: string, rep: DescribeAssetOverviewResponse) => void
  ): Promise<DescribeAssetOverviewResponse> {
    return this.request("DescribeAssetOverview", req, cb)
  }

  /**
   * 绑定、更新集群负责人
   */
  async UpdateClusterOwner(
    req: UpdateClusterOwnerRequest,
    cb?: (error: string, rep: UpdateClusterOwnerResponse) => void
  ): Promise<UpdateClusterOwnerResponse> {
    return this.request("UpdateClusterOwner", req, cb)
  }

  /**
   * 查询dspm识别模板详情
   */
  async DescribeDspmIdentifyComplianceGroupDetail(
    req: DescribeDspmIdentifyComplianceGroupDetailRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyComplianceGroupDetailResponse) => void
  ): Promise<DescribeDspmIdentifyComplianceGroupDetailResponse> {
    return this.request("DescribeDspmIdentifyComplianceGroupDetail", req, cb)
  }

  /**
   * 查询云边界分析路径节点
   */
  async DescribeExposePath(
    req: DescribeExposePathRequest,
    cb?: (error: string, rep: DescribeExposePathResponse) => void
  ): Promise<DescribeExposePathResponse> {
    return this.request("DescribeExposePath", req, cb)
  }

  /**
   * 获取网关列表
   */
  async DescribeGatewayAssets(
    req: DescribeGatewayAssetsRequest,
    cb?: (error: string, rep: DescribeGatewayAssetsResponse) => void
  ): Promise<DescribeGatewayAssetsResponse> {
    return this.request("DescribeGatewayAssets", req, cb)
  }

  /**
   * 创建日志导出任务
   */
  async CreateDspmExportTask(
    req: CreateDspmExportTaskRequest,
    cb?: (error: string, rep: CreateDspmExportTaskResponse) => void
  ): Promise<CreateDspmExportTaskResponse> {
    return this.request("CreateDspmExportTask", req, cb)
  }

  /**
     * 停用AI 定时任务。

将指定的AI 定时任务状态设置为已停用，停用后任务将暂停自动执行。
     */
  async DisableAISchedule(
    req: DisableAIScheduleRequest,
    cb?: (error: string, rep: DisableAIScheduleResponse) => void
  ): Promise<DisableAIScheduleResponse> {
    return this.request("DisableAISchedule", req, cb)
  }

  /**
   * 云边界待处理风险列表
   */
  async DescribeExposeRisks(
    req: DescribeExposeRisksRequest,
    cb?: (error: string, rep: DescribeExposeRisksResponse) => void
  ): Promise<DescribeExposeRisksResponse> {
    return this.request("DescribeExposeRisks", req, cb)
  }

  /**
   * 访问密钥告警记录列表
   */
  async DescribeAccessKeyAlarm(
    req: DescribeAccessKeyAlarmRequest,
    cb?: (error: string, rep: DescribeAccessKeyAlarmResponse) => void
  ): Promise<DescribeAccessKeyAlarmResponse> {
    return this.request("DescribeAccessKeyAlarm", req, cb)
  }

  /**
   * 合规标准聚合视角下云资源配置风险列表
   */
  async DescribeComplianceRiskList(
    req: DescribeComplianceRiskListRequest,
    cb?: (error: string, rep: DescribeComplianceRiskListResponse) => void
  ): Promise<DescribeComplianceRiskListResponse> {
    return this.request("DescribeComplianceRiskList", req, cb)
  }

  /**
   * 查询 Skill 安全检测结果。调用 CreateSkillScan 成功后使用返回的 ContentHash + EngineVersion 轮询本接口获取结果。上传成功后建议5分钟后首次轮询，如未检测完成之后每隔1分钟轮询一次。响应通过 Status 字段区分四种状态：检测完成（SUCCESS）、检测中（SCANNING）、无记录（NOT_FOUND）、检测失败（FAILED）。注意：检测结果保留90天，超期后将返回 NOT_FOUND。
   */
  async DescribeSkillScanResult(
    req: DescribeSkillScanResultRequest,
    cb?: (error: string, rep: DescribeSkillScanResultResponse) => void
  ): Promise<DescribeSkillScanResultResponse> {
    return this.request("DescribeSkillScanResult", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeClusterListV2(
    req: DescribeClusterListV2Request,
    cb?: (error: string, rep: DescribeClusterListV2Response) => void
  ): Promise<DescribeClusterListV2Response> {
    return this.request("DescribeClusterListV2", req, cb)
  }

  /**
   * 用户CSPM配额信息
   */
  async DescribeUserInfo(
    req?: DescribeUserInfoRequest,
    cb?: (error: string, rep: DescribeUserInfoResponse) => void
  ): Promise<DescribeUserInfoResponse> {
    return this.request("DescribeUserInfo", req, cb)
  }

  /**
   * ip公网列表
   */
  async DescribePublicIpAssets(
    req: DescribePublicIpAssetsRequest,
    cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void
  ): Promise<DescribePublicIpAssetsResponse> {
    return this.request("DescribePublicIpAssets", req, cb)
  }

  /**
   * 判断当前用户是否旗舰版(适用于主机)
   */
  async CheckCWPExposePathPermission(
    req: CheckCWPExposePathPermissionRequest,
    cb?: (error: string, rep: CheckCWPExposePathPermissionResponse) => void
  ): Promise<CheckCWPExposePathPermissionResponse> {
    return this.request("CheckCWPExposePathPermission", req, cb)
  }

  /**
   * 删除用户创建的指定资产搜索视图
   */
  async DeleteAssetFilterView(
    req: DeleteAssetFilterViewRequest,
    cb?: (error: string, rep: DeleteAssetFilterViewResponse) => void
  ): Promise<DeleteAssetFilterViewResponse> {
    return this.request("DeleteAssetFilterView", req, cb)
  }

  /**
   * 查询云边界分析-暴露路径下主机节点的进程列表
   */
  async DescribeAssetProcessList(
    req: DescribeAssetProcessListRequest,
    cb?: (error: string, rep: DescribeAssetProcessListResponse) => void
  ): Promise<DescribeAssetProcessListResponse> {
    return this.request("DescribeAssetProcessList", req, cb)
  }

  /**
   * 创建风险中心扫描任务
   */
  async CreateRiskCenterScanTask(
    req: CreateRiskCenterScanTaskRequest,
    cb?: (error: string, rep: CreateRiskCenterScanTaskResponse) => void
  ): Promise<CreateRiskCenterScanTaskResponse> {
    return this.request("CreateRiskCenterScanTask", req, cb)
  }

  /**
   * 删除dspm数据识别模板分类关联
   */
  async DeleteDspmIdentifyComplianceCategoryRelation(
    req: DeleteDspmIdentifyComplianceCategoryRelationRequest,
    cb?: (error: string, rep: DeleteDspmIdentifyComplianceCategoryRelationResponse) => void
  ): Promise<DeleteDspmIdentifyComplianceCategoryRelationResponse> {
    return this.request("DeleteDspmIdentifyComplianceCategoryRelation", req, cb)
  }

  /**
     * 查询AI 定时任务执行列表。

查询AI 定时任务的历史执行记录，支持分页和按定时任务 ID 过滤。
     */
  async DescribeAIScheduleTaskList(
    req: DescribeAIScheduleTaskListRequest,
    cb?: (error: string, rep: DescribeAIScheduleTaskListResponse) => void
  ): Promise<DescribeAIScheduleTaskListResponse> {
    return this.request("DescribeAIScheduleTaskList", req, cb)
  }

  /**
   * 创建基线修复记录导出任务，导出已修复检测项的记录数据（含检测项信息、资产信息、修复时间等）。任务在后台异步执行，完成后可在导出任务列表中下载结果文件。
   */
  async CreateBaselineFixRecordExportJob(
    req: CreateBaselineFixRecordExportJobRequest,
    cb?: (error: string, rep: CreateBaselineFixRecordExportJobResponse) => void
  ): Promise<CreateBaselineFixRecordExportJobResponse> {
    return this.request("CreateBaselineFixRecordExportJob", req, cb)
  }

  /**
   * 删除已终止的扫描任务（物理删除主表及明细表）。只允许删除终态任务，只有创建者可操作。
   */
  async DeleteEDRScanTask(
    req: DeleteEDRScanTaskRequest,
    cb?: (error: string, rep: DeleteEDRScanTaskResponse) => void
  ): Promise<DeleteEDRScanTaskResponse> {
    return this.request("DeleteEDRScanTask", req, cb)
  }

  /**
   * 获取爆破破解规则
   */
  async DescribeBruteAttackRules(
    req: DescribeBruteAttackRulesRequest,
    cb?: (error: string, rep: DescribeBruteAttackRulesResponse) => void
  ): Promise<DescribeBruteAttackRulesResponse> {
    return this.request("DescribeBruteAttackRules", req, cb)
  }

  /**
   * 修改对象存储识别开关
   */
  async ModifyCosAuditObjectIdentifyStatus(
    req: ModifyCosAuditObjectIdentifyStatusRequest,
    cb?: (error: string, rep: ModifyCosAuditObjectIdentifyStatusResponse) => void
  ): Promise<ModifyCosAuditObjectIdentifyStatusResponse> {
    return this.request("ModifyCosAuditObjectIdentifyStatus", req, cb)
  }

  /**
   * 查询TOP攻击信息
   */
  async DescribeTopAttackInfo(
    req: DescribeTopAttackInfoRequest,
    cb?: (error: string, rep: DescribeTopAttackInfoResponse) => void
  ): Promise<DescribeTopAttackInfoResponse> {
    return this.request("DescribeTopAttackInfo", req, cb)
  }

  /**
   * 操作资产编辑标签
   */
  async ModifyAssetTags(
    req: ModifyAssetTagsRequest,
    cb?: (error: string, rep: ModifyAssetTagsResponse) => void
  ): Promise<ModifyAssetTagsResponse> {
    return this.request("ModifyAssetTags", req, cb)
  }

  /**
   * 查询容器关联端口列表。通过容器ID获取关联的端口信息，支持分页。
   */
  async DescribeClusterContainerPortList(
    req: DescribeClusterContainerPortListRequest,
    cb?: (error: string, rep: DescribeClusterContainerPortListResponse) => void
  ): Promise<DescribeClusterContainerPortListResponse> {
    return this.request("DescribeClusterContainerPortList", req, cb)
  }

  /**
   * 获取批量修改主机登录方式任务列表
   */
  async DescribeModifyMachinesLoginTypeTasks(
    req: DescribeModifyMachinesLoginTypeTasksRequest,
    cb?: (error: string, rep: DescribeModifyMachinesLoginTypeTasksResponse) => void
  ): Promise<DescribeModifyMachinesLoginTypeTasksResponse> {
    return this.request("DescribeModifyMachinesLoginTypeTasks", req, cb)
  }

  /**
   * 修改cos审计监测账号
   */
  async ModifyCosAuditMonitorAccount(
    req: ModifyCosAuditMonitorAccountRequest,
    cb?: (error: string, rep: ModifyCosAuditMonitorAccountResponse) => void
  ): Promise<ModifyCosAuditMonitorAccountResponse> {
    return this.request("ModifyCosAuditMonitorAccount", req, cb)
  }

  /**
   * 修改Dspm个人身份id
   */
  async ModifyDspmPersonalIdentify(
    req: ModifyDspmPersonalIdentifyRequest,
    cb?: (error: string, rep: ModifyDspmPersonalIdentifyResponse) => void
  ): Promise<ModifyDspmPersonalIdentifyResponse> {
    return this.request("ModifyDspmPersonalIdentify", req, cb)
  }

  /**
   * 查询用户行为分析策略列表
   */
  async DescribeUebaRule(
    req: DescribeUebaRuleRequest,
    cb?: (error: string, rep: DescribeUebaRuleResponse) => void
  ): Promise<DescribeUebaRuleResponse> {
    return this.request("DescribeUebaRule", req, cb)
  }

  /**
   * 查询腾讯云nat网关实例对应的NAT策略
   */
  async DescribeNatRules(
    req: DescribeNatRulesRequest,
    cb?: (error: string, rep: DescribeNatRulesResponse) => void
  ): Promise<DescribeNatRulesResponse> {
    return this.request("DescribeNatRules", req, cb)
  }

  /**
   * 重保防护包防护设置
   */
  async ModifyProtectionSetting(
    req: ModifyProtectionSettingRequest,
    cb?: (error: string, rep: ModifyProtectionSettingResponse) => void
  ): Promise<ModifyProtectionSettingResponse> {
    return this.request("ModifyProtectionSetting", req, cb)
  }

  /**
     * 修改自动扩容配置（多模块可扩展，本期仅主机安全模块）。

「自动扩容」为面向用户的对外概念，等价于底层自动加购(auto_repurchase)：当账号有新增资产时，自动加购所需授权。

补充说明：
1. 本期仅实现主机安全模块 HostConfig；后续可扩展容器安全、AI-Agent 安全等命名模块字段，各模块配置字段可异构；
2. 部分更新语义：模块对象为空表示该模块不修改，模块内字段为空表示该字段不修改；
3. HostConfig.Switch 联动映射 auto_repurchase_switch；auto_bind_switch（自动绑定）恒开，不由本接口改动；
4. 自动续费(renew_flag) 不由本接口改动；额度/用量请调用 DescribeLicenseStatus；
5. 顶部「自动扩容」总开关状态由前端按各模块开关聚合，后端不存储、不返回全局开关。
     */
  async ModifyPayConfig(
    req: ModifyPayConfigRequest,
    cb?: (error: string, rep: ModifyPayConfigResponse) => void
  ): Promise<ModifyPayConfigResponse> {
    return this.request("ModifyPayConfig", req, cb)
  }

  /**
   * 查询云边界分析扫描结果统计信息
   */
  async DescribeScanStatistic(
    req: DescribeScanStatisticRequest,
    cb?: (error: string, rep: DescribeScanStatisticResponse) => void
  ): Promise<DescribeScanStatisticResponse> {
    return this.request("DescribeScanStatistic", req, cb)
  }

  /**
   * 修改主机资产备注信息
   */
  async ModifyMachineRemark(
    req: ModifyMachineRemarkRequest,
    cb?: (error: string, rep: ModifyMachineRemarkResponse) => void
  ): Promise<ModifyMachineRemarkResponse> {
    return this.request("ModifyMachineRemark", req, cb)
  }

  /**
   * 查询Dspm统计信息
   */
  async DescribeDspmStatistics(
    req: DescribeDspmStatisticsRequest,
    cb?: (error: string, rep: DescribeDspmStatisticsResponse) => void
  ): Promise<DescribeDspmStatisticsResponse> {
    return this.request("DescribeDspmStatistics", req, cb)
  }

  /**
   * 导出任务结果下载URL
   */
  async DescribeExportJobDownloadURL(
    req: DescribeExportJobDownloadURLRequest,
    cb?: (error: string, rep: DescribeExportJobDownloadURLResponse) => void
  ): Promise<DescribeExportJobDownloadURLResponse> {
    return this.request("DescribeExportJobDownloadURL", req, cb)
  }

  /**
   * 查看ak资产列表信息
   */
  async DescribeCosAkAsset(
    req: DescribeCosAkAssetRequest,
    cb?: (error: string, rep: DescribeCosAkAssetResponse) => void
  ): Promise<DescribeCosAkAssetResponse> {
    return this.request("DescribeCosAkAsset", req, cb)
  }

  /**
   * 删除风险中心扫描任务
   */
  async DeleteRiskScanTask(
    req: DeleteRiskScanTaskRequest,
    cb?: (error: string, rep: DeleteRiskScanTaskResponse) => void
  ): Promise<DeleteRiskScanTaskResponse> {
    return this.request("DeleteRiskScanTask", req, cb)
  }

  /**
   * 查看cos调用日志
   */
  async DescribeCosIpInvokeLog(
    req: DescribeCosIpInvokeLogRequest,
    cb?: (error: string, rep: DescribeCosIpInvokeLogResponse) => void
  ): Promise<DescribeCosIpInvokeLogResponse> {
    return this.request("DescribeCosIpInvokeLog", req, cb)
  }

  /**
   * 查询备份日志列表
   */
  async DescribeDspmBackupLogList(
    req: DescribeDspmBackupLogListRequest,
    cb?: (error: string, rep: DescribeDspmBackupLogListResponse) => void
  ): Promise<DescribeDspmBackupLogListResponse> {
    return this.request("DescribeDspmBackupLogList", req, cb)
  }

  /**
   * 创建全部资产导出任务
   */
  async CreateAllAssetsExportJob(
    req: CreateAllAssetsExportJobRequest,
    cb?: (error: string, rep: CreateAllAssetsExportJobResponse) => void
  ): Promise<CreateAllAssetsExportJobResponse> {
    return this.request("CreateAllAssetsExportJob", req, cb)
  }

  /**
   * 查询指定KB补丁可以更新的主机列表。用于Windows系统补丁修复场景，在用户提交KB补丁更新任务前，查询哪些主机缺少该补丁且支持自动更新。
   */
  async DescribeKBUpdatableMachineList(
    req: DescribeKBUpdatableMachineListRequest,
    cb?: (error: string, rep: DescribeKBUpdatableMachineListResponse) => void
  ): Promise<DescribeKBUpdatableMachineListResponse> {
    return this.request("DescribeKBUpdatableMachineList", req, cb)
  }

  /**
   * 修改风险中心扫描任务
   */
  async ModifyRiskCenterScanTask(
    req: ModifyRiskCenterScanTaskRequest,
    cb?: (error: string, rep: ModifyRiskCenterScanTaskResponse) => void
  ): Promise<ModifyRiskCenterScanTaskResponse> {
    return this.request("ModifyRiskCenterScanTask", req, cb)
  }

  /**
   * 创建Dspm资产访问拓扑导出任务
   */
  async CreateDspmAssetAccessTopologyExportJob(
    req: CreateDspmAssetAccessTopologyExportJobRequest,
    cb?: (error: string, rep: CreateDspmAssetAccessTopologyExportJobResponse) => void
  ): Promise<CreateDspmAssetAccessTopologyExportJobResponse> {
    return this.request("CreateDspmAssetAccessTopologyExportJob", req, cb)
  }

  /**
   * 获取IaC检测文件列表
   */
  async DescribeIaCFileList(
    req: DescribeIaCFileListRequest,
    cb?: (error: string, rep: DescribeIaCFileListResponse) => void
  ): Promise<DescribeIaCFileListResponse> {
    return this.request("DescribeIaCFileList", req, cb)
  }

  /**
   * 查看COS接口列表
   */
  async DescribeCosActionList(
    req: DescribeCosActionListRequest,
    cb?: (error: string, rep: DescribeCosActionListResponse) => void
  ): Promise<DescribeCosActionListResponse> {
    return this.request("DescribeCosActionList", req, cb)
  }

  /**
   * 修改客户端离线时长
   */
  async ModifyNotifyAgentOfflineDuration(
    req: ModifyNotifyAgentOfflineDurationRequest,
    cb?: (error: string, rep: ModifyNotifyAgentOfflineDurationResponse) => void
  ): Promise<ModifyNotifyAgentOfflineDurationResponse> {
    return this.request("ModifyNotifyAgentOfflineDuration", req, cb)
  }

  /**
   * 获取当前账号的用户级基线配置。
   */
  async DescribeBaselineUserOtherConf(
    req: DescribeBaselineUserOtherConfRequest,
    cb?: (error: string, rep: DescribeBaselineUserOtherConfResponse) => void
  ): Promise<DescribeBaselineUserOtherConfResponse> {
    return this.request("DescribeBaselineUserOtherConf", req, cb)
  }

  /**
   * 查询容器集群资产列表
   */
  async DescribeClusterAssetList(
    req: DescribeClusterAssetListRequest,
    cb?: (error: string, rep: DescribeClusterAssetListResponse) => void
  ): Promise<DescribeClusterAssetListResponse> {
    return this.request("DescribeClusterAssetList", req, cb)
  }

  /**
   * 查询指定漏洞可以被修复的主机列表。在用户提交修复任务前，需要先查询哪些主机支持自动修复，为用户选择修复目标提供数据支持。
   */
  async DescribeVulFixableMachineList(
    req: DescribeVulFixableMachineListRequest,
    cb?: (error: string, rep: DescribeVulFixableMachineListResponse) => void
  ): Promise<DescribeVulFixableMachineListResponse> {
    return this.request("DescribeVulFixableMachineList", req, cb)
  }

  /**
   * 创建资产搜索视图
   */
  async CreateAssetFilterView(
    req: CreateAssetFilterViewRequest,
    cb?: (error: string, rep: CreateAssetFilterViewResponse) => void
  ): Promise<CreateAssetFilterViewResponse> {
    return this.request("CreateAssetFilterView", req, cb)
  }

  /**
   * 创建高危基线风险导出任务
   */
  async CreateHighBaseLineRisksExportJob(
    req: CreateHighBaseLineRisksExportJobRequest,
    cb?: (error: string, rep: CreateHighBaseLineRisksExportJobResponse) => void
  ): Promise<CreateHighBaseLineRisksExportJobResponse> {
    return this.request("CreateHighBaseLineRisksExportJob", req, cb)
  }

  /**
   * 云边界自动打标-删除规则
   */
  async DeleteExposureAutoTagRule(
    req: DeleteExposureAutoTagRuleRequest,
    cb?: (error: string, rep: DeleteExposureAutoTagRuleResponse) => void
  ): Promise<DeleteExposureAutoTagRuleResponse> {
    return this.request("DeleteExposureAutoTagRule", req, cb)
  }

  /**
   * 获取任务扫描报告列表
   */
  async DescribeTaskLogList(
    req: DescribeTaskLogListRequest,
    cb?: (error: string, rep: DescribeTaskLogListResponse) => void
  ): Promise<DescribeTaskLogListResponse> {
    return this.request("DescribeTaskLogList", req, cb)
  }

  /**
   * 创建漏洞扫描（一键扫描）
   */
  async CreateVulScanManual(
    req: CreateVulScanManualRequest,
    cb?: (error: string, rep: CreateVulScanManualResponse) => void
  ): Promise<CreateVulScanManualResponse> {
    return this.request("CreateVulScanManual", req, cb)
  }

  /**
   * 查询dspm数据识别数据项验证结果
   */
  async DescribeDspmIdentifyRuleTestResult(
    req: DescribeDspmIdentifyRuleTestResultRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyRuleTestResultResponse) => void
  ): Promise<DescribeDspmIdentifyRuleTestResultResponse> {
    return this.request("DescribeDspmIdentifyRuleTestResult", req, cb)
  }

  /**
   * 云资源配置检测规范分类统计
   */
  async DescribeComplianceStatistics(
    req: DescribeComplianceStatisticsRequest,
    cb?: (error: string, rep: DescribeComplianceStatisticsResponse) => void
  ): Promise<DescribeComplianceStatisticsResponse> {
    return this.request("DescribeComplianceStatistics", req, cb)
  }

  /**
   * 资产树结构
   */
  async DescribeAssetTree(
    req: DescribeAssetTreeRequest,
    cb?: (error: string, rep: DescribeAssetTreeResponse) => void
  ): Promise<DescribeAssetTreeResponse> {
    return this.request("DescribeAssetTree", req, cb)
  }

  /**
   * 获取用户访问密钥资产列表（源IP视角）
   */
  async DescribeSourceIPAsset(
    req: DescribeSourceIPAssetRequest,
    cb?: (error: string, rep: DescribeSourceIPAssetResponse) => void
  ): Promise<DescribeSourceIPAssetResponse> {
    return this.request("DescribeSourceIPAsset", req, cb)
  }

  /**
   * 更新当前账号的用户级基线配置（允许同步、离线清风险、Agent 扫描超时等）。
   */
  async ModifyBaselineUserOtherConf(
    req: ModifyBaselineUserOtherConfRequest,
    cb?: (error: string, rep: ModifyBaselineUserOtherConfResponse) => void
  ): Promise<ModifyBaselineUserOtherConfResponse> {
    return this.request("ModifyBaselineUserOtherConf", req, cb)
  }

  /**
   * 创建IaC检测文件导出任务
   */
  async CreateIaCFileExportJob(
    req: CreateIaCFileExportJobRequest,
    cb?: (error: string, rep: CreateIaCFileExportJobResponse) => void
  ): Promise<CreateIaCFileExportJobResponse> {
    return this.request("CreateIaCFileExportJob", req, cb)
  }

  /**
   * 获取主机漏洞风险列表
   */
  async DescribeHostVulRiskList(
    req: DescribeHostVulRiskListRequest,
    cb?: (error: string, rep: DescribeHostVulRiskListResponse) => void
  ): Promise<DescribeHostVulRiskListResponse> {
    return this.request("DescribeHostVulRiskList", req, cb)
  }

  /**
   * 修改集团账号状态
   */
  async ModifyOrganizationAccountStatus(
    req: ModifyOrganizationAccountStatusRequest,
    cb?: (error: string, rep: ModifyOrganizationAccountStatusResponse) => void
  ): Promise<ModifyOrganizationAccountStatusResponse> {
    return this.request("ModifyOrganizationAccountStatus", req, cb)
  }

  /**
   * 修改文件查杀定时扫描配置，包含扫描周期、检测模式、资产范围、引擎选择、隔离配置等
   */
  async ModifyMalwareTimingScanSettings(
    req: ModifyMalwareTimingScanSettingsRequest,
    cb?: (error: string, rep: ModifyMalwareTimingScanSettingsResponse) => void
  ): Promise<ModifyMalwareTimingScanSettingsResponse> {
    return this.request("ModifyMalwareTimingScanSettings", req, cb)
  }

  /**
   * 获取存储桶计费信息
   */
  async DescribeCosBucketBillingInfo(
    req: DescribeCosBucketBillingInfoRequest,
    cb?: (error: string, rep: DescribeCosBucketBillingInfoResponse) => void
  ): Promise<DescribeCosBucketBillingInfoResponse> {
    return this.request("DescribeCosBucketBillingInfo", req, cb)
  }

  /**
   * 获取报告下载的临时链接
   */
  async DescribeTaskLogURL(
    req: DescribeTaskLogURLRequest,
    cb?: (error: string, rep: DescribeTaskLogURLResponse) => void
  ): Promise<DescribeTaskLogURLResponse> {
    return this.request("DescribeTaskLogURL", req, cb)
  }

  /**
   * 获取任务下发时长
   */
  async DescribeCWPTaskDuration(
    req: DescribeCWPTaskDurationRequest,
    cb?: (error: string, rep: DescribeCWPTaskDurationResponse) => void
  ): Promise<DescribeCWPTaskDurationResponse> {
    return this.request("DescribeCWPTaskDuration", req, cb)
  }

  /**
   * 恢复备份日志
   */
  async ModifyDspmRestoreLogTask(
    req: ModifyDspmRestoreLogTaskRequest,
    cb?: (error: string, rep: ModifyDspmRestoreLogTaskResponse) => void
  ): Promise<ModifyDspmRestoreLogTaskResponse> {
    return this.request("ModifyDspmRestoreLogTask", req, cb)
  }

  /**
   * 创建Dspm资产列表导出任务
   */
  async CreateDspmAssetIdentifyInfoExportJob(
    req: CreateDspmAssetIdentifyInfoExportJobRequest,
    cb?: (error: string, rep: CreateDspmAssetIdentifyInfoExportJobResponse) => void
  ): Promise<CreateDspmAssetIdentifyInfoExportJobResponse> {
    return this.request("CreateDspmAssetIdentifyInfoExportJob", req, cb)
  }

  /**
   * 删除IaC检测文件
   */
  async DeleteIaCFile(
    req: DeleteIaCFileRequest,
    cb?: (error: string, rep: DeleteIaCFileResponse) => void
  ): Promise<DeleteIaCFileResponse> {
    return this.request("DeleteIaCFile", req, cb)
  }

  /**
   * 查询CLB后端服务列表
   */
  async DescribeClbTargets(
    req: DescribeClbTargetsRequest,
    cb?: (error: string, rep: DescribeClbTargetsResponse) => void
  ): Promise<DescribeClbTargetsResponse> {
    return this.request("DescribeClbTargets", req, cb)
  }

  /**
   * 对一批基线策略发起整体重新扫描（策略列表页“一键扫描”入口），按策略命中的资产范围全量重扫。
   */
  async ScanBaselinePolicyList(
    req: ScanBaselinePolicyListRequest,
    cb?: (error: string, rep: ScanBaselinePolicyListResponse) => void
  ): Promise<ScanBaselinePolicyListResponse> {
    return this.request("ScanBaselinePolicyList", req, cb)
  }

  /**
   * 创建资产同步任务
   */
  async CreateCosAssetSyncTask(
    req: CreateCosAssetSyncTaskRequest,
    cb?: (error: string, rep: CreateCosAssetSyncTaskResponse) => void
  ): Promise<CreateCosAssetSyncTaskResponse> {
    return this.request("CreateCosAssetSyncTask", req, cb)
  }

  /**
   * 查询Dspm身份信息列表
   */
  async DescribeDspmIdentifyInfoList(
    req: DescribeDspmIdentifyInfoListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyInfoListResponse) => void
  ): Promise<DescribeDspmIdentifyInfoListResponse> {
    return this.request("DescribeDspmIdentifyInfoList", req, cb)
  }

  /**
   * 导出CSIP扫描任务主机详情为Excel文件，异步生成后通过DescribeExportMachines查询下载地址
   */
  async ExportCSIPMalwareScanTaskDetail(
    req: ExportCSIPMalwareScanTaskDetailRequest,
    cb?: (error: string, rep: ExportCSIPMalwareScanTaskDetailResponse) => void
  ): Promise<ExportCSIPMalwareScanTaskDetailResponse> {
    return this.request("ExportCSIPMalwareScanTaskDetail", req, cb)
  }

  /**
   * 修改Dspm访问管理信息
   */
  async ModifyDspmAccessRecord(
    req: ModifyDspmAccessRecordRequest,
    cb?: (error: string, rep: ModifyDspmAccessRecordResponse) => void
  ): Promise<ModifyDspmAccessRecordResponse> {
    return this.request("ModifyDspmAccessRecord", req, cb)
  }

  /**
   * 更新云边界自定义标签
   */
  async ModifyExposureTag(
    req: ModifyExposureTagRequest,
    cb?: (error: string, rep: ModifyExposureTagResponse) => void
  ): Promise<ModifyExposureTagResponse> {
    return this.request("ModifyExposureTag", req, cb)
  }

  /**
   * CSIP 手动扫描任务删除接口
   */
  async DeleteCSIPMalwareScanTask(
    req: DeleteCSIPMalwareScanTaskRequest,
    cb?: (error: string, rep: DeleteCSIPMalwareScanTaskResponse) => void
  ): Promise<DeleteCSIPMalwareScanTaskResponse> {
    return this.request("DeleteCSIPMalwareScanTask", req, cb)
  }

  /**
   * 新增或修改一个接收机器人。ID > 0 表示修改已有记录；ID = 0 或不传表示新增。机器人类型由 Type 字段决定，Type=WEBHOOK 时 WebhookAddr 必填，Type=SCF 时 SCFRegion/Namespace/FunctionName/FunctionVersion/Alias/MaxWaitSeconds 全部必填。修改时不允许变更 Type
   */
  async ModifyWebhookReceiver(
    req: ModifyWebhookReceiverRequest,
    cb?: (error: string, rep: ModifyWebhookReceiverResponse) => void
  ): Promise<ModifyWebhookReceiverResponse> {
    return this.request("ModifyWebhookReceiver", req, cb)
  }

  /**
   * 删除集群
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 查询Dspm资产id列表
   */
  async DescribeDspmAssetIds(
    req: DescribeDspmAssetIdsRequest,
    cb?: (error: string, rep: DescribeDspmAssetIdsResponse) => void
  ): Promise<DescribeDspmAssetIdsResponse> {
    return this.request("DescribeDspmAssetIds", req, cb)
  }

  /**
   * 导出任务列表
   */
  async DescribeExportJobManageList(
    req: DescribeExportJobManageListRequest,
    cb?: (error: string, rep: DescribeExportJobManageListResponse) => void
  ): Promise<DescribeExportJobManageListResponse> {
    return this.request("DescribeExportJobManageList", req, cb)
  }

  /**
   * 查看风险关联的存储桶信息
   */
  async DescribeRiskBucketList(
    req: DescribeRiskBucketListRequest,
    cb?: (error: string, rep: DescribeRiskBucketListResponse) => void
  ): Promise<DescribeRiskBucketListResponse> {
    return this.request("DescribeRiskBucketList", req, cb)
  }

  /**
   * 查询Dspm风险详情
   */
  async DescribeDspmRiskDetail(
    req: DescribeDspmRiskDetailRequest,
    cb?: (error: string, rep: DescribeDspmRiskDetailResponse) => void
  ): Promise<DescribeDspmRiskDetailResponse> {
    return this.request("DescribeDspmRiskDetail", req, cb)
  }

  /**
   * 查询指定 SCF 函数下的版本列表。
   */
  async DescribeSCFFunctionVersionList(
    req: DescribeSCFFunctionVersionListRequest,
    cb?: (error: string, rep: DescribeSCFFunctionVersionListResponse) => void
  ): Promise<DescribeSCFFunctionVersionListResponse> {
    return this.request("DescribeSCFFunctionVersionList", req, cb)
  }

  /**
   * 查询集群命名空间列表
   */
  async DescribeClusterNamespaceList(
    req: DescribeClusterNamespaceListRequest,
    cb?: (error: string, rep: DescribeClusterNamespaceListResponse) => void
  ): Promise<DescribeClusterNamespaceListResponse> {
    return this.request("DescribeClusterNamespaceList", req, cb)
  }

  /**
   * 停止扫风险中心扫描任务
   */
  async StopRiskCenterTask(
    req: StopRiskCenterTaskRequest,
    cb?: (error: string, rep: StopRiskCenterTaskResponse) => void
  ): Promise<StopRiskCenterTaskResponse> {
    return this.request("StopRiskCenterTask", req, cb)
  }

  /**
   * 发起AK资产同步任务
   */
  async CreateAccessKeySyncTask(
    req: CreateAccessKeySyncTaskRequest,
    cb?: (error: string, rep: CreateAccessKeySyncTaskResponse) => void
  ): Promise<CreateAccessKeySyncTaskResponse> {
    return this.request("CreateAccessKeySyncTask", req, cb)
  }

  /**
   * 云边界自动打标-启停规则
   */
  async ModifyExposureAutoTagRuleStatus(
    req: ModifyExposureAutoTagRuleStatusRequest,
    cb?: (error: string, rep: ModifyExposureAutoTagRuleStatusResponse) => void
  ): Promise<ModifyExposureAutoTagRuleStatusResponse> {
    return this.request("ModifyExposureAutoTagRuleStatus", req, cb)
  }

  /**
   * 获取基线策略列表，用于“周期计划管理”等列表页展示系统/自定义策略及其配置情况。
   */
  async DescribeBaselinePolicyList(
    req: DescribeBaselinePolicyListRequest,
    cb?: (error: string, rep: DescribeBaselinePolicyListResponse) => void
  ): Promise<DescribeBaselinePolicyListResponse> {
    return this.request("DescribeBaselinePolicyList", req, cb)
  }

  /**
   * 修改dspm当前应用的数据识别模板
   */
  async ModifyDspmApplyingIdentifyComplianceGroup(
    req: ModifyDspmApplyingIdentifyComplianceGroupRequest,
    cb?: (error: string, rep: ModifyDspmApplyingIdentifyComplianceGroupResponse) => void
  ): Promise<ModifyDspmApplyingIdentifyComplianceGroupResponse> {
    return this.request("ModifyDspmApplyingIdentifyComplianceGroup", req, cb)
  }

  /**
   * CSIP 手动扫描停止接口
   */
  async StopCSIPManualMalwareScan(
    req: StopCSIPManualMalwareScanRequest,
    cb?: (error: string, rep: StopCSIPManualMalwareScanResponse) => void
  ): Promise<StopCSIPManualMalwareScanResponse> {
    return this.request("StopCSIPManualMalwareScan", req, cb)
  }

  /**
   * 创建IaC检测文件重新扫描任务
   */
  async CreateIaCFileReScanTask(
    req: CreateIaCFileReScanTaskRequest,
    cb?: (error: string, rep: CreateIaCFileReScanTaskResponse) => void
  ): Promise<CreateIaCFileReScanTaskResponse> {
    return this.request("CreateIaCFileReScanTask", req, cb)
  }

  /**
   * 自定义风险规则配置列表
   */
  async DescribeCustomRiskRules(
    req: DescribeCustomRiskRulesRequest,
    cb?: (error: string, rep: DescribeCustomRiskRulesResponse) => void
  ): Promise<DescribeCustomRiskRulesResponse> {
    return this.request("DescribeCustomRiskRules", req, cb)
  }

  /**
   * 停止或取消扫描任务。SCANNING状态调RPC停止，WAIT状态直接改库取消。只有任务创建者可操作。
   */
  async StopEDRScanTask(
    req: StopEDRScanTaskRequest,
    cb?: (error: string, rep: StopEDRScanTaskResponse) => void
  ): Promise<StopEDRScanTaskResponse> {
    return this.request("StopEDRScanTask", req, cb)
  }

  /**
   * 获取扫描报告列表
   */
  async DescribeScanReportList(
    req: DescribeScanReportListRequest,
    cb?: (error: string, rep: DescribeScanReportListResponse) => void
  ): Promise<DescribeScanReportListResponse> {
    return this.request("DescribeScanReportList", req, cb)
  }

  /**
   * 更新自定义策略的开关
   */
  async ModifyUebaRuleSwitch(
    req: ModifyUebaRuleSwitchRequest,
    cb?: (error: string, rep: ModifyUebaRuleSwitchResponse) => void
  ): Promise<ModifyUebaRuleSwitchResponse> {
    return this.request("ModifyUebaRuleSwitch", req, cb)
  }

  /**
   * 查询dspm数据识别数据项详情
   */
  async DescribeDspmIdentifyRuleDetail(
    req: DescribeDspmIdentifyRuleDetailRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyRuleDetailResponse) => void
  ): Promise<DescribeDspmIdentifyRuleDetailResponse> {
    return this.request("DescribeDspmIdentifyRuleDetail", req, cb)
  }

  /**
   * 查询cos审计字典信息列表
   */
  async DescribeCosAuditDictionaryList(
    req: DescribeCosAuditDictionaryListRequest,
    cb?: (error: string, rep: DescribeCosAuditDictionaryListResponse) => void
  ): Promise<DescribeCosAuditDictionaryListResponse> {
    return this.request("DescribeCosAuditDictionaryList", req, cb)
  }

  /**
   * 查询Dspm申请单列表
   */
  async DescribeDspmApplyOrderList(
    req: DescribeDspmApplyOrderListRequest,
    cb?: (error: string, rep: DescribeDspmApplyOrderListResponse) => void
  ): Promise<DescribeDspmApplyOrderListResponse> {
    return this.request("DescribeDspmApplyOrderList", req, cb)
  }

  /**
   * 查询dspm数据识别模板分类关联数据项列表
   */
  async DescribeDspmIdentifyComplianceCategoryRuleList(
    req: DescribeDspmIdentifyComplianceCategoryRuleListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyComplianceCategoryRuleListResponse) => void
  ): Promise<DescribeDspmIdentifyComplianceCategoryRuleListResponse> {
    return this.request("DescribeDspmIdentifyComplianceCategoryRuleList", req, cb)
  }

  /**
   * 查询扫描任务记录列表
   */
  async DescribeScanTaskRecordList(
    req: DescribeScanTaskRecordListRequest,
    cb?: (error: string, rep: DescribeScanTaskRecordListResponse) => void
  ): Promise<DescribeScanTaskRecordListResponse> {
    return this.request("DescribeScanTaskRecordList", req, cb)
  }

  /**
   * 查询腾讯云SCF自定义域名端点列表
   */
  async DescribeScfCustomDomainEndpoints(
    req: DescribeScfCustomDomainEndpointsRequest,
    cb?: (error: string, rep: DescribeScfCustomDomainEndpointsResponse) => void
  ): Promise<DescribeScfCustomDomainEndpointsResponse> {
    return this.request("DescribeScfCustomDomainEndpoints", req, cb)
  }

  /**
   * cos概览信息
   */
  async DescribeCosOverview(
    req: DescribeCosOverviewRequest,
    cb?: (error: string, rep: DescribeCosOverviewResponse) => void
  ): Promise<DescribeCosOverviewResponse> {
    return this.request("DescribeCosOverview", req, cb)
  }

  /**
   * 修改dspm数据识别模板状态
   */
  async ModifyDspmIdentifyComplianceGroupStatus(
    req: ModifyDspmIdentifyComplianceGroupStatusRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyComplianceGroupStatusResponse) => void
  ): Promise<ModifyDspmIdentifyComplianceGroupStatusResponse> {
    return this.request("ModifyDspmIdentifyComplianceGroupStatus", req, cb)
  }

  /**
   * 访问密钥告警记录详情
   */
  async DescribeAccessKeyAlarmDetail(
    req: DescribeAccessKeyAlarmDetailRequest,
    cb?: (error: string, rep: DescribeAccessKeyAlarmDetailResponse) => void
  ): Promise<DescribeAccessKeyAlarmDetailResponse> {
    return this.request("DescribeAccessKeyAlarmDetail", req, cb)
  }

  /**
   * 查询 Skill 安全检测计费信息，包括订单状态、总配额、已消耗配额、到期时间、支付模式等。无订单时返回零值（仅含 TimeNow 和 BetaEndTime）。试用订单通过 ModifyTrialStatus(Module=9) 领取，正式订单通过计费系统创建。
   */
  async DescribeSkillScanPayInfo(
    req?: DescribeSkillScanPayInfoRequest,
    cb?: (error: string, rep: DescribeSkillScanPayInfoResponse) => void
  ): Promise<DescribeSkillScanPayInfoResponse> {
    return this.request("DescribeSkillScanPayInfo", req, cb)
  }

  /**
   * 获取调用记录列表
   */
  async DescribeAbnormalCallRecord(
    req: DescribeAbnormalCallRecordRequest,
    cb?: (error: string, rep: DescribeAbnormalCallRecordResponse) => void
  ): Promise<DescribeAbnormalCallRecordResponse> {
    return this.request("DescribeAbnormalCallRecord", req, cb)
  }

  /**
     * 创建AI 定时任务。

创建一个新的AI 定时任务，需传入任务名称、执行提示词和触发器配置。创建成功后返回AI 定时任务 ID。
     */
  async CreateAISchedule(
    req: CreateAIScheduleRequest,
    cb?: (error: string, rep: CreateAIScheduleResponse) => void
  ): Promise<CreateAIScheduleResponse> {
    return this.request("CreateAISchedule", req, cb)
  }

  /**
   * 查看存储桶调用源ip列表
   */
  async DescribeCosAkInvokeIpList(
    req: DescribeCosAkInvokeIpListRequest,
    cb?: (error: string, rep: DescribeCosAkInvokeIpListResponse) => void
  ): Promise<DescribeCosAkInvokeIpListResponse> {
    return this.request("DescribeCosAkInvokeIpList", req, cb)
  }

  /**
   * 查询日志列表信息
   */
  async DescribeDspmLogList(
    req: DescribeDspmLogListRequest,
    cb?: (error: string, rep: DescribeDspmLogListResponse) => void
  ): Promise<DescribeDspmLogListResponse> {
    return this.request("DescribeDspmLogList", req, cb)
  }

  /**
   * 获取系统内置基线分类树（父分类 → 子分类 → 内置检测项 ID 列表），用于策略编辑页选择基线检测项。
   */
  async DescribeBaselineSystemCategoryList(
    req?: DescribeBaselineSystemCategoryListRequest,
    cb?: (error: string, rep: DescribeBaselineSystemCategoryListResponse) => void
  ): Promise<DescribeBaselineSystemCategoryListResponse> {
    return this.request("DescribeBaselineSystemCategoryList", req, cb)
  }

  /**
   * 创建dspm数据识别模板分类关联
   */
  async CreateDspmIdentifyComplianceCategoryRelation(
    req: CreateDspmIdentifyComplianceCategoryRelationRequest,
    cb?: (error: string, rep: CreateDspmIdentifyComplianceCategoryRelationResponse) => void
  ): Promise<CreateDspmIdentifyComplianceCategoryRelationResponse> {
    return this.request("CreateDspmIdentifyComplianceCategoryRelation", req, cb)
  }

  /**
   * 同步dspm用户列表
   */
  async SyncDspmUsers(
    req?: SyncDspmUsersRequest,
    cb?: (error: string, rep: SyncDspmUsersResponse) => void
  ): Promise<SyncDspmUsersResponse> {
    return this.request("SyncDspmUsers", req, cb)
  }

  /**
   * 重保防护授权包绑定
   */
  async ModifyRaspLicenseBinds(
    req: ModifyRaspLicenseBindsRequest,
    cb?: (error: string, rep: ModifyRaspLicenseBindsResponse) => void
  ): Promise<ModifyRaspLicenseBindsResponse> {
    return this.request("ModifyRaspLicenseBinds", req, cb)
  }

  /**
   * 关闭防卸载功能
   */
  async StopPreventUninstall(
    req: StopPreventUninstallRequest,
    cb?: (error: string, rep: StopPreventUninstallResponse) => void
  ): Promise<StopPreventUninstallResponse> {
    return this.request("StopPreventUninstall", req, cb)
  }

  /**
   * 删除AI助手的SMTP邮箱接入信息
   */
  async DeleteAIAnalysisSMTPAccess(
    req?: DeleteAIAnalysisSMTPAccessRequest,
    cb?: (error: string, rep: DeleteAIAnalysisSMTPAccessResponse) => void
  ): Promise<DeleteAIAnalysisSMTPAccessResponse> {
    return this.request("DeleteAIAnalysisSMTPAccess", req, cb)
  }

  /**
   * 查询dspm字典信息列表
   */
  async DescribeDspmDictionaryList(
    req: DescribeDspmDictionaryListRequest,
    cb?: (error: string, rep: DescribeDspmDictionaryListResponse) => void
  ): Promise<DescribeDspmDictionaryListResponse> {
    return this.request("DescribeDspmDictionaryList", req, cb)
  }

  /**
   * 获取cvm列表
   */
  async DescribeCVMAssets(
    req: DescribeCVMAssetsRequest,
    cb?: (error: string, rep: DescribeCVMAssetsResponse) => void
  ): Promise<DescribeCVMAssetsResponse> {
    return this.request("DescribeCVMAssets", req, cb)
  }

  /**
   * 获取主机登录方式
   */
  async DescribeMachineLoginType(
    req: DescribeMachineLoginTypeRequest,
    cb?: (error: string, rep: DescribeMachineLoginTypeResponse) => void
  ): Promise<DescribeMachineLoginTypeResponse> {
    return this.request("DescribeMachineLoginType", req, cb)
  }

  /**
   * 创建Dspm申请单
   */
  async CreateDspmApplyOrder(
    req: CreateDspmApplyOrderRequest,
    cb?: (error: string, rep: CreateDspmApplyOrderResponse) => void
  ): Promise<CreateDspmApplyOrderResponse> {
    return this.request("CreateDspmApplyOrder", req, cb)
  }

  /**
   * 查看调用记录关联的文件信息
   */
  async DescribeCosIpInvokeRecordFile(
    req: DescribeCosIpInvokeRecordFileRequest,
    cb?: (error: string, rep: DescribeCosIpInvokeRecordFileResponse) => void
  ): Promise<DescribeCosIpInvokeRecordFileResponse> {
    return this.request("DescribeCosIpInvokeRecordFile", req, cb)
  }

  /**
   * 查看存储桶调用源ip列表
   */
  async DescribeBucketInvokeIpList(
    req: DescribeBucketInvokeIpListRequest,
    cb?: (error: string, rep: DescribeBucketInvokeIpListResponse) => void
  ): Promise<DescribeBucketInvokeIpListResponse> {
    return this.request("DescribeBucketInvokeIpList", req, cb)
  }

  /**
   * 查询Dspm风险记录
   */
  async DescribeDspmRisk(
    req: DescribeDspmRiskRequest,
    cb?: (error: string, rep: DescribeDspmRiskResponse) => void
  ): Promise<DescribeDspmRiskResponse> {
    return this.request("DescribeDspmRisk", req, cb)
  }

  /**
   * 修改日志备份设置
   */
  async ModifyDspmBackupSetting(
    req: ModifyDspmBackupSettingRequest,
    cb?: (error: string, rep: ModifyDspmBackupSettingResponse) => void
  ): Promise<ModifyDspmBackupSettingResponse> {
    return this.request("ModifyDspmBackupSetting", req, cb)
  }

  /**
   * 获取当前账号的“用户弱口令”自定义字典（服务端解密后返回明文）。
   */
  async DescribeBaselineUserWeakPasswordConf(
    req: DescribeBaselineUserWeakPasswordConfRequest,
    cb?: (error: string, rep: DescribeBaselineUserWeakPasswordConfResponse) => void
  ): Promise<DescribeBaselineUserWeakPasswordConfResponse> {
    return this.request("DescribeBaselineUserWeakPasswordConf", req, cb)
  }

  /**
   * 卸载集群容器安全Agent。
   */
  async UninstallClusterAgent(
    req: UninstallClusterAgentRequest,
    cb?: (error: string, rep: UninstallClusterAgentResponse) => void
  ): Promise<UninstallClusterAgentResponse> {
    return this.request("UninstallClusterAgent", req, cb)
  }

  /**
   * 云资源配置检测合规概览
   */
  async DescribeComplianceOverview(
    req: DescribeComplianceOverviewRequest,
    cb?: (error: string, rep: DescribeComplianceOverviewResponse) => void
  ): Promise<DescribeComplianceOverviewResponse> {
    return this.request("DescribeComplianceOverview", req, cb)
  }

  /**
   * 查询主机概览信息
   */
  async DescribeMachineGeneral(
    req: DescribeMachineGeneralRequest,
    cb?: (error: string, rep: DescribeMachineGeneralResponse) => void
  ): Promise<DescribeMachineGeneralResponse> {
    return this.request("DescribeMachineGeneral", req, cb)
  }

  /**
   * 查询用户行为分析的行为概览
   */
  async DescribeUebaBehaviorSummary(
    req: DescribeUebaBehaviorSummaryRequest,
    cb?: (error: string, rep: DescribeUebaBehaviorSummaryResponse) => void
  ): Promise<DescribeUebaBehaviorSummaryResponse> {
    return this.request("DescribeUebaBehaviorSummary", req, cb)
  }

  /**
   * 获取扫码登录主机列表
   */
  async DescribeNFSScanHost(
    req: DescribeNFSScanHostRequest,
    cb?: (error: string, rep: DescribeNFSScanHostResponse) => void
  ): Promise<DescribeNFSScanHostResponse> {
    return this.request("DescribeNFSScanHost", req, cb)
  }

  /**
   * 获取漏洞忽略列表
   */
  async DescribeVulIgnoreRuleList(
    req: DescribeVulIgnoreRuleListRequest,
    cb?: (error: string, rep: DescribeVulIgnoreRuleListResponse) => void
  ): Promise<DescribeVulIgnoreRuleListResponse> {
    return this.request("DescribeVulIgnoreRuleList", req, cb)
  }

  /**
   * 获取用户行为分析模块的用户概览
   */
  async DescribeUebaUserSummary(
    req: DescribeUebaUserSummaryRequest,
    cb?: (error: string, rep: DescribeUebaUserSummaryResponse) => void
  ): Promise<DescribeUebaUserSummaryResponse> {
    return this.request("DescribeUebaUserSummary", req, cb)
  }

  /**
   * 获取最近一次立即检测任务信息
   */
  async DescribeLastScanTaskInfo(
    req: DescribeLastScanTaskInfoRequest,
    cb?: (error: string, rep: DescribeLastScanTaskInfoResponse) => void
  ): Promise<DescribeLastScanTaskInfoResponse> {
    return this.request("DescribeLastScanTaskInfo", req, cb)
  }

  /**
   * 查看该appid下已购买的appid集合
   */
  async DescribeCosAuditAppIdList(
    req?: DescribeCosAuditAppIdListRequest,
    cb?: (error: string, rep: DescribeCosAuditAppIdListResponse) => void
  ): Promise<DescribeCosAuditAppIdListResponse> {
    return this.request("DescribeCosAuditAppIdList", req, cb)
  }

  /**
   * 查询当前处于“统计计算中”状态的策略 ID 列表，用于前端轮询判断扫描结果统计是否就绪。
   */
  async DescribeBaselineCalculatingStatisticsPolicyIDList(
    req: DescribeBaselineCalculatingStatisticsPolicyIDListRequest,
    cb?: (error: string, rep: DescribeBaselineCalculatingStatisticsPolicyIDListResponse) => void
  ): Promise<DescribeBaselineCalculatingStatisticsPolicyIDListResponse> {
    return this.request("DescribeBaselineCalculatingStatisticsPolicyIDList", req, cb)
  }

  /**
   * 创建Dspm审批历史导出任务
   */
  async CreateDspmApproveHistoryExportJob(
    req: CreateDspmApproveHistoryExportJobRequest,
    cb?: (error: string, rep: CreateDspmApproveHistoryExportJobResponse) => void
  ): Promise<CreateDspmApproveHistoryExportJobResponse> {
    return this.request("CreateDspmApproveHistoryExportJob", req, cb)
  }

  /**
   * 获取扫描主任务列表，用于“任务记录”页展示一键扫描 / 周期扫描 / 分散扫描的历史记录及结果。
   */
  async DescribeBaselineMainTaskList(
    req: DescribeBaselineMainTaskListRequest,
    cb?: (error: string, rep: DescribeBaselineMainTaskListResponse) => void
  ): Promise<DescribeBaselineMainTaskListResponse> {
    return this.request("DescribeBaselineMainTaskList", req, cb)
  }

  /**
   * 获取扫描预消耗配额
   */
  async DescribeTaskPredictCostQuota(
    req: DescribeTaskPredictCostQuotaRequest,
    cb?: (error: string, rep: DescribeTaskPredictCostQuotaResponse) => void
  ): Promise<DescribeTaskPredictCostQuotaResponse> {
    return this.request("DescribeTaskPredictCostQuota", req, cb)
  }

  /**
   * 获取风险扫描周期计划
   */
  async DescribeRiskScanCronConfig(
    req?: DescribeRiskScanCronConfigRequest,
    cb?: (error: string, rep: DescribeRiskScanCronConfigResponse) => void
  ): Promise<DescribeRiskScanCronConfigResponse> {
    return this.request("DescribeRiskScanCronConfig", req, cb)
  }

  /**
   * 创建dspm数据识别分类
   */
  async CreateDspmIdentifyCategory(
    req: CreateDspmIdentifyCategoryRequest,
    cb?: (error: string, rep: CreateDspmIdentifyCategoryResponse) => void
  ): Promise<CreateDspmIdentifyCategoryResponse> {
    return this.request("CreateDspmIdentifyCategory", req, cb)
  }

  /**
   * 查询当前账号下所有有效授权的汇总状态，按计费项分组返回总数、已用、剩余及到期时间，同时返回自动加购开关状态和合并剩余解绑次数。输出顺序固定为：旗舰版 → 专业版 → RASP → 其他。
   */
  async DescribeLicenseStatus(
    req?: DescribeLicenseStatusRequest,
    cb?: (error: string, rep: DescribeLicenseStatusResponse) => void
  ): Promise<DescribeLicenseStatusResponse> {
    return this.request("DescribeLicenseStatus", req, cb)
  }

  /**
   * 批量删除自定义基线策略。仅支持删除 PolicyType=SELF 的策略；删除后历史风险记录保留，但不再产生新结果。
   */
  async DeleteBaselineSelfDefinedPolicyList(
    req: DeleteBaselineSelfDefinedPolicyListRequest,
    cb?: (error: string, rep: DeleteBaselineSelfDefinedPolicyListResponse) => void
  ): Promise<DeleteBaselineSelfDefinedPolicyListResponse> {
    return this.request("DeleteBaselineSelfDefinedPolicyList", req, cb)
  }

  /**
   * 查询已被修复的漏洞列表，展示修复成功的漏洞信息及修复情况统计，帮助用户了解修复成效。
   */
  async DescribeVulFixedList(
    req: DescribeVulFixedListRequest,
    cb?: (error: string, rep: DescribeVulFixedListResponse) => void
  ): Promise<DescribeVulFixedListResponse> {
    return this.request("DescribeVulFixedList", req, cb)
  }

  /**
   * 新增或更新NFS扫描全局配置
   */
  async ModifyNFSScanConf(
    req: ModifyNFSScanConfRequest,
    cb?: (error: string, rep: ModifyNFSScanConfResponse) => void
  ): Promise<ModifyNFSScanConfResponse> {
    return this.request("ModifyNFSScanConf", req, cb)
  }

  /**
   * 获取资产标签属性
   */
  async DescribeAssetTagAttributes(
    req: DescribeAssetTagAttributesRequest,
    cb?: (error: string, rep: DescribeAssetTagAttributesResponse) => void
  ): Promise<DescribeAssetTagAttributesResponse> {
    return this.request("DescribeAssetTagAttributes", req, cb)
  }

  /**
   * 获取策略列表信息
   */
  async DescribeCosPolicy(
    req: DescribeCosPolicyRequest,
    cb?: (error: string, rep: DescribeCosPolicyResponse) => void
  ): Promise<DescribeCosPolicyResponse> {
    return this.request("DescribeCosPolicy", req, cb)
  }

  /**
   * 删除策略
   */
  async DeleteCosPolicy(
    req: DeleteCosPolicyRequest,
    cb?: (error: string, rep: DeleteCosPolicyResponse) => void
  ): Promise<DeleteCosPolicyResponse> {
    return this.request("DeleteCosPolicy", req, cb)
  }

  /**
   * 获取当前账号（管理员）的基线同步配置。仅集团管理员可调用，普通成员账号请使用 DescribeBaselineUserOtherConf。
   */
  async DescribeBaselineSyncConf(
    req: DescribeBaselineSyncConfRequest,
    cb?: (error: string, rep: DescribeBaselineSyncConfResponse) => void
  ): Promise<DescribeBaselineSyncConfResponse> {
    return this.request("DescribeBaselineSyncConf", req, cb)
  }

  /**
   * 对修复失败的漏洞修复任务进行重试，仅针对原任务中修复失败的主机重新下发修复指令。仅当任务状态为部分修复失败或全部修复失败时允许重试。
   */
  async CreateVulFixRetryTask(
    req: CreateVulFixRetryTaskRequest,
    cb?: (error: string, rep: CreateVulFixRetryTaskResponse) => void
  ): Promise<CreateVulFixRetryTaskResponse> {
    return this.request("CreateVulFixRetryTask", req, cb)
  }

  /**
   * 查询集群概览数据
   */
  async DescribeClusterSummary(
    req: DescribeClusterSummaryRequest,
    cb?: (error: string, rep: DescribeClusterSummaryResponse) => void
  ): Promise<DescribeClusterSummaryResponse> {
    return this.request("DescribeClusterSummary", req, cb)
  }

  /**
   * 设置暴力破解阻断开关状态
   */
  async ModifyBruteAttackBanStatus(
    req: ModifyBruteAttackBanStatusRequest,
    cb?: (error: string, rep: ModifyBruteAttackBanStatusResponse) => void
  ): Promise<ModifyBruteAttackBanStatusResponse> {
    return this.request("ModifyBruteAttackBanStatus", req, cb)
  }

  /**
   * 对单个资产的部分检测项发起重新扫描（资产详情页“重新扫描”入口）。
   */
  async ScanBaselineAssetItemList(
    req: ScanBaselineAssetItemListRequest,
    cb?: (error: string, rep: ScanBaselineAssetItemListResponse) => void
  ): Promise<ScanBaselineAssetItemListResponse> {
    return this.request("ScanBaselineAssetItemList", req, cb)
  }

  /**
   * 删除IaC检测接入Token
   */
  async DeleteIaCAccessToken(
    req: DeleteIaCAccessTokenRequest,
    cb?: (error: string, rep: DeleteIaCAccessTokenResponse) => void
  ): Promise<DeleteIaCAccessTokenResponse> {
    return this.request("DeleteIaCAccessToken", req, cb)
  }

  /**
   * 删除EDR策略
   */
  async DeleteEDRRules(
    req: DeleteEDRRulesRequest,
    cb?: (error: string, rep: DeleteEDRRulesResponse) => void
  ): Promise<DeleteEDRRulesResponse> {
    return this.request("DeleteEDRRules", req, cb)
  }

  /**
   * 创建合规标准聚合视角下风险列表导出任务示例
   */
  async CreateComplianceRiskExportJob(
    req: CreateComplianceRiskExportJobRequest,
    cb?: (error: string, rep: CreateComplianceRiskExportJobResponse) => void
  ): Promise<CreateComplianceRiskExportJobResponse> {
    return this.request("CreateComplianceRiskExportJob", req, cb)
  }

  /**
   * 删除恢复日志
   */
  async DeleteDspmRestoreLogList(
    req: DeleteDspmRestoreLogListRequest,
    cb?: (error: string, rep: DeleteDspmRestoreLogListResponse) => void
  ): Promise<DeleteDspmRestoreLogListResponse> {
    return this.request("DeleteDspmRestoreLogList", req, cb)
  }

  /**
   * 云防资产中心统计数据
   */
  async DescribeCFWAssetStatistics(
    req?: DescribeCFWAssetStatisticsRequest,
    cb?: (error: string, rep: DescribeCFWAssetStatisticsResponse) => void
  ): Promise<DescribeCFWAssetStatisticsResponse> {
    return this.request("DescribeCFWAssetStatistics", req, cb)
  }

  /**
   * 创建Dspm风险导出任务
   */
  async CreateDspmRiskExportJob(
    req: CreateDspmRiskExportJobRequest,
    cb?: (error: string, rep: CreateDspmRiskExportJobResponse) => void
  ): Promise<CreateDspmRiskExportJobResponse> {
    return this.request("CreateDspmRiskExportJob", req, cb)
  }

  /**
   * 恢复Dspm资产账号
   */
  async RevertDspmAssetAccount(
    req: RevertDspmAssetAccountRequest,
    cb?: (error: string, rep: RevertDspmAssetAccountResponse) => void
  ): Promise<RevertDspmAssetAccountResponse> {
    return this.request("RevertDspmAssetAccount", req, cb)
  }

  /**
   * 查询EDR日志采集例外网段配置，添加至例外名单的网段，其TCP日志将不被采集。如果用户未配置过，则返回系统推荐的默认网段
   */
  async DescribeEdrExcludeNetworkSegments(
    req: DescribeEdrExcludeNetworkSegmentsRequest,
    cb?: (error: string, rep: DescribeEdrExcludeNetworkSegmentsResponse) => void
  ): Promise<DescribeEdrExcludeNetworkSegmentsResponse> {
    return this.request("DescribeEdrExcludeNetworkSegments", req, cb)
  }

  /**
   * 修改漏洞扫描（周期扫描）
   */
  async ModifyVulScanPeriodic(
    req: ModifyVulScanPeriodicRequest,
    cb?: (error: string, rep: ModifyVulScanPeriodicResponse) => void
  ): Promise<ModifyVulScanPeriodicResponse> {
    return this.request("ModifyVulScanPeriodic", req, cb)
  }

  /**
   * 获取漏洞视角的漏洞风险列表
   */
  async DescribeRiskCenterVULViewVULRiskList(
    req: DescribeRiskCenterVULViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterVULViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterVULViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterVULViewVULRiskList", req, cb)
  }

  /**
   * 创建公网资产导出任务
   */
  async CreateDynamicAssetsExportJob(
    req: CreateDynamicAssetsExportJobRequest,
    cb?: (error: string, rep: CreateDynamicAssetsExportJobResponse) => void
  ): Promise<CreateDynamicAssetsExportJobResponse> {
    return this.request("CreateDynamicAssetsExportJob", req, cb)
  }

  /**
   * 修改DspmIp信息
   */
  async ModifyDspmIpInfo(
    req: ModifyDspmIpInfoRequest,
    cb?: (error: string, rep: ModifyDspmIpInfoResponse) => void
  ): Promise<ModifyDspmIpInfoResponse> {
    return this.request("ModifyDspmIpInfo", req, cb)
  }

  /**
   * 查询资源订单列表
   */
  async DescribeCWPOrderList(
    req: DescribeCWPOrderListRequest,
    cb?: (error: string, rep: DescribeCWPOrderListResponse) => void
  ): Promise<DescribeCWPOrderListResponse> {
    return this.request("DescribeCWPOrderList", req, cb)
  }

  /**
   * 打标策略生效资产列表
   */
  async DescribeTagRuleAssets(
    req: DescribeTagRuleAssetsRequest,
    cb?: (error: string, rep: DescribeTagRuleAssetsResponse) => void
  ): Promise<DescribeTagRuleAssetsResponse> {
    return this.request("DescribeTagRuleAssets", req, cb)
  }

  /**
   * 云边界分析资产分类
   */
  async DescribeExposeAssetCategory(
    req: DescribeExposeAssetCategoryRequest,
    cb?: (error: string, rep: DescribeExposeAssetCategoryResponse) => void
  ): Promise<DescribeExposeAssetCategoryResponse> {
    return this.request("DescribeExposeAssetCategory", req, cb)
  }

  /**
   * 获取IaC检测接入Token列表
   */
  async DescribeIaCTokenList(
    req: DescribeIaCTokenListRequest,
    cb?: (error: string, rep: DescribeIaCTokenListResponse) => void
  ): Promise<DescribeIaCTokenListResponse> {
    return this.request("DescribeIaCTokenList", req, cb)
  }

  /**
   * 对指定策略下的一批检测项发起重新扫描（策略详情页“检测项”维度的复扫入口）。
   */
  async ScanBaselineItemList(
    req: ScanBaselineItemListRequest,
    cb?: (error: string, rep: ScanBaselineItemListResponse) => void
  ): Promise<ScanBaselineItemListResponse> {
    return this.request("ScanBaselineItemList", req, cb)
  }

  /**
   * 查询漏洞风险高级配置
   */
  async DescribeVULRiskAdvanceCFGList(
    req: DescribeVULRiskAdvanceCFGListRequest,
    cb?: (error: string, rep: DescribeVULRiskAdvanceCFGListResponse) => void
  ): Promise<DescribeVULRiskAdvanceCFGListResponse> {
    return this.request("DescribeVULRiskAdvanceCFGList", req, cb)
  }

  /**
     * 查询AI 定时任务触发计划。

查询指定AI 定时任务在给定时间窗口内的未来触发计划列表。
     */
  async DescribeAISchedulePlanList(
    req: DescribeAISchedulePlanListRequest,
    cb?: (error: string, rep: DescribeAISchedulePlanListResponse) => void
  ): Promise<DescribeAISchedulePlanListResponse> {
    return this.request("DescribeAISchedulePlanList", req, cb)
  }

  /**
   * 查询是否绑定角色
   */
  async DescribeAssumeRole(
    req: DescribeAssumeRoleRequest,
    cb?: (error: string, rep: DescribeAssumeRoleResponse) => void
  ): Promise<DescribeAssumeRoleResponse> {
    return this.request("DescribeAssumeRole", req, cb)
  }

  /**
   * 获取存储桶信息
   */
  async DescribeCosBucketList(
    req: DescribeCosBucketListRequest,
    cb?: (error: string, rep: DescribeCosBucketListResponse) => void
  ): Promise<DescribeCosBucketListResponse> {
    return this.request("DescribeCosBucketList", req, cb)
  }

  /**
   * 查询可筛选操作系统列表.
   */
  async DescribeCWPMachineOsList(
    req: DescribeCWPMachineOsListRequest,
    cb?: (error: string, rep: DescribeCWPMachineOsListResponse) => void
  ): Promise<DescribeCWPMachineOsListResponse> {
    return this.request("DescribeCWPMachineOsList", req, cb)
  }

  /**
   * 根据用户输入的 KB 内部 ID 查询单个 Windows KB 补丁的详情信息，返回 KB 基本信息、发布时间、是否需要重启，以及该 KB 关联的漏洞列表。
   */
  async DescribeKBDetail(
    req: DescribeKBDetailRequest,
    cb?: (error: string, rep: DescribeKBDetailResponse) => void
  ): Promise<DescribeKBDetailResponse> {
    return this.request("DescribeKBDetail", req, cb)
  }

  /**
   * 获取防卸载主机列表
   */
  async DescribePreventUninstallHost(
    req: DescribePreventUninstallHostRequest,
    cb?: (error: string, rep: DescribePreventUninstallHostResponse) => void
  ): Promise<DescribePreventUninstallHostResponse> {
    return this.request("DescribePreventUninstallHost", req, cb)
  }

  /**
   * 查询Dspm访问记录
   */
  async DescribeDspmAccessRecord(
    req: DescribeDspmAccessRecordRequest,
    cb?: (error: string, rep: DescribeDspmAccessRecordResponse) => void
  ): Promise<DescribeDspmAccessRecordResponse> {
    return this.request("DescribeDspmAccessRecord", req, cb)
  }

  /**
   * 获取漏洞扫描任务记录
   */
  async DescribeVulScanTaskList(
    req: DescribeVulScanTaskListRequest,
    cb?: (error: string, rep: DescribeVulScanTaskListResponse) => void
  ): Promise<DescribeVulScanTaskListResponse> {
    return this.request("DescribeVulScanTaskList", req, cb)
  }

  /**
   * 删除资产标签
   */
  async DeleteAssetTag(
    req: DeleteAssetTagRequest,
    cb?: (error: string, rep: DeleteAssetTagResponse) => void
  ): Promise<DeleteAssetTagResponse> {
    return this.request("DeleteAssetTag", req, cb)
  }

  /**
   * 导出EDR策略列表
   */
  async ExportEDRRules(
    req: ExportEDRRulesRequest,
    cb?: (error: string, rep: ExportEDRRulesResponse) => void
  ): Promise<ExportEDRRulesResponse> {
    return this.request("ExportEDRRules", req, cb)
  }

  /**
   * 修改安全评分规则，必须传入完整规则集
   */
  async ModifySecurityScoreRule(
    req: ModifySecurityScoreRuleRequest,
    cb?: (error: string, rep: ModifySecurityScoreRuleResponse) => void
  ): Promise<ModifySecurityScoreRuleResponse> {
    return this.request("ModifySecurityScoreRule", req, cb)
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
   * 查询Dspm同步用户状态
   */
  async DescribeDspmSyncUsersStatus(
    req?: DescribeDspmSyncUsersStatusRequest,
    cb?: (error: string, rep: DescribeDspmSyncUsersStatusResponse) => void
  ): Promise<DescribeDspmSyncUsersStatusResponse> {
    return this.request("DescribeDspmSyncUsersStatus", req, cb)
  }

  /**
   * 重置Dspm资产账号密码
   */
  async ResetDspmAssetAccountPassword(
    req: ResetDspmAssetAccountPasswordRequest,
    cb?: (error: string, rep: ResetDspmAssetAccountPasswordResponse) => void
  ): Promise<ResetDspmAssetAccountPasswordResponse> {
    return this.request("ResetDspmAssetAccountPassword", req, cb)
  }

  /**
   * 查询Dspm身份信息
   */
  async DescribeDspmIdentifyInfo(
    req: DescribeDspmIdentifyInfoRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyInfoResponse) => void
  ): Promise<DescribeDspmIdentifyInfoResponse> {
    return this.request("DescribeDspmIdentifyInfo", req, cb)
  }

  /**
   * 绑定主机授权或RASP授权到指定订单。异步执行，返回TaskId供查询进度。通过LicenseType指定授权版本（旗舰版/专业版/RASP）。
   */
  async ModifyCSIPLicenseBinds(
    req: ModifyCSIPLicenseBindsRequest,
    cb?: (error: string, rep: ModifyCSIPLicenseBindsResponse) => void
  ): Promise<ModifyCSIPLicenseBindsResponse> {
    return this.request("ModifyCSIPLicenseBinds", req, cb)
  }

  /**
   * 查询指定 SCF 函数下的别名列表。
   */
  async DescribeSCFAliasList(
    req: DescribeSCFAliasListRequest,
    cb?: (error: string, rep: DescribeSCFAliasListResponse) => void
  ): Promise<DescribeSCFAliasListResponse> {
    return this.request("DescribeSCFAliasList", req, cb)
  }

  /**
   * 删除Dspm申请单
   */
  async DeleteDspmApplyOrder(
    req: DeleteDspmApplyOrderRequest,
    cb?: (error: string, rep: DeleteDspmApplyOrderResponse) => void
  ): Promise<DeleteDspmApplyOrderResponse> {
    return this.request("DeleteDspmApplyOrder", req, cb)
  }

  /**
   * 查询Dspm审批单列表
   */
  async DescribeDspmApproveOrderList(
    req: DescribeDspmApproveOrderListRequest,
    cb?: (error: string, rep: DescribeDspmApproveOrderListResponse) => void
  ): Promise<DescribeDspmApproveOrderListResponse> {
    return this.request("DescribeDspmApproveOrderList", req, cb)
  }

  /**
   * 获取资产视角的配置风险列表
   */
  async DescribeRiskCenterAssetViewCFGRiskList(
    req: DescribeRiskCenterAssetViewCFGRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewCFGRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewCFGRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewCFGRiskList", req, cb)
  }

  /**
   * 修改dspm数据识别模板数据项关联级别信息
   */
  async ModifyDspmIdentifyComplianceRuleLevelInfo(
    req: ModifyDspmIdentifyComplianceRuleLevelInfoRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyComplianceRuleLevelInfoResponse) => void
  ): Promise<ModifyDspmIdentifyComplianceRuleLevelInfoResponse> {
    return this.request("ModifyDspmIdentifyComplianceRuleLevelInfo", req, cb)
  }

  /**
   * 操作资产编辑标签
   */
  async ModifyAssetTagsByAssetInfo(
    req: ModifyAssetTagsByAssetInfoRequest,
    cb?: (error: string, rep: ModifyAssetTagsByAssetInfoResponse) => void
  ): Promise<ModifyAssetTagsByAssetInfoResponse> {
    return this.request("ModifyAssetTagsByAssetInfo", req, cb)
  }

  /**
   * 批量修改基线策略的“周期扫描配置 / 自动同步新增检测项 / 检测项命中配置 / 自定义检测项”等设置。仅修改请求中传入的字段。
   */
  async BatchModifyBaselinePolicy(
    req: BatchModifyBaselinePolicyRequest,
    cb?: (error: string, rep: BatchModifyBaselinePolicyResponse) => void
  ): Promise<BatchModifyBaselinePolicyResponse> {
    return this.request("BatchModifyBaselinePolicy", req, cb)
  }

  /**
   * 对象存储异常检测调用记录信息
   */
  async DescribeIpInvokeRecord(
    req: DescribeIpInvokeRecordRequest,
    cb?: (error: string, rep: DescribeIpInvokeRecordResponse) => void
  ): Promise<DescribeIpInvokeRecordResponse> {
    return this.request("DescribeIpInvokeRecord", req, cb)
  }

  /**
   * 修改Dspm审批单状态
   */
  async ModifyDspmApproveStatus(
    req: ModifyDspmApproveStatusRequest,
    cb?: (error: string, rep: ModifyDspmApproveStatusResponse) => void
  ): Promise<ModifyDspmApproveStatusResponse> {
    return this.request("ModifyDspmApproveStatus", req, cb)
  }

  /**
   * 云函数列表
   */
  async DescribeCloudFunctionList(
    req: DescribeCloudFunctionListRequest,
    cb?: (error: string, rep: DescribeCloudFunctionListResponse) => void
  ): Promise<DescribeCloudFunctionListResponse> {
    return this.request("DescribeCloudFunctionList", req, cb)
  }

  /**
   * 获取主机漏洞VPR信息
   */
  async DescribeHostVulItemVPRInfo(
    req: DescribeHostVulItemVPRInfoRequest,
    cb?: (error: string, rep: DescribeHostVulItemVPRInfoResponse) => void
  ): Promise<DescribeHostVulItemVPRInfoResponse> {
    return this.request("DescribeHostVulItemVPRInfo", req, cb)
  }

  /**
   * 获取分类检测项列表
   */
  async DescribeBaselineCategoryItemList(
    req: DescribeBaselineCategoryItemListRequest,
    cb?: (error: string, rep: DescribeBaselineCategoryItemListResponse) => void
  ): Promise<DescribeBaselineCategoryItemListResponse> {
    return this.request("DescribeBaselineCategoryItemList", req, cb)
  }

  /**
   * 查询指定命名空间下的 SCF 函数列表，仅返回 Event 触发器类型的函数。
   */
  async DescribeSCFFunctionList(
    req: DescribeSCFFunctionListRequest,
    cb?: (error: string, rep: DescribeSCFFunctionListResponse) => void
  ): Promise<DescribeSCFFunctionListResponse> {
    return this.request("DescribeSCFFunctionList", req, cb)
  }

  /**
   * 修改IaC检测接入Token存储周期
   */
  async ModifyIaCTokenPeriod(
    req: ModifyIaCTokenPeriodRequest,
    cb?: (error: string, rep: ModifyIaCTokenPeriodResponse) => void
  ): Promise<ModifyIaCTokenPeriodResponse> {
    return this.request("ModifyIaCTokenPeriod", req, cb)
  }

  /**
   * 资产信息
   */
  async DescribeAssetInfo(
    req: DescribeAssetInfoRequest,
    cb?: (error: string, rep: DescribeAssetInfoResponse) => void
  ): Promise<DescribeAssetInfoResponse> {
    return this.request("DescribeAssetInfo", req, cb)
  }

  /**
   * 获取漏洞扫描（周期扫描）
   */
  async DescribeVulScanPeriodic(
    req: DescribeVulScanPeriodicRequest,
    cb?: (error: string, rep: DescribeVulScanPeriodicResponse) => void
  ): Promise<DescribeVulScanPeriodicResponse> {
    return this.request("DescribeVulScanPeriodic", req, cb)
  }

  /**
   * 修改Dspm身份信息
   */
  async ModifyDspmIdentifyInfo(
    req: ModifyDspmIdentifyInfoRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyInfoResponse) => void
  ): Promise<ModifyDspmIdentifyInfoResponse> {
    return this.request("ModifyDspmIdentifyInfo", req, cb)
  }

  /**
   * 查询Dspm个人身份信息列表
   */
  async DescribeDspmPersonalIdentifyList(
    req: DescribeDspmPersonalIdentifyListRequest,
    cb?: (error: string, rep: DescribeDspmPersonalIdentifyListResponse) => void
  ): Promise<DescribeDspmPersonalIdentifyListResponse> {
    return this.request("DescribeDspmPersonalIdentifyList", req, cb)
  }

  /**
     * 查询AI 定时任务执行详情。

根据任务 ID 查询指定执行任务的详细信息，包括执行状态、结果等。
     */
  async DescribeAIScheduleTaskDetail(
    req: DescribeAIScheduleTaskDetailRequest,
    cb?: (error: string, rep: DescribeAIScheduleTaskDetailResponse) => void
  ): Promise<DescribeAIScheduleTaskDetailResponse> {
    return this.request("DescribeAIScheduleTaskDetail", req, cb)
  }

  /**
   * 查询Dspm资产账号回收后特权信息
   */
  async DescribeDspmAssetAccountRecycledPrivileges(
    req: DescribeDspmAssetAccountRecycledPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccountRecycledPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetAccountRecycledPrivilegesResponse> {
    return this.request("DescribeDspmAssetAccountRecycledPrivileges", req, cb)
  }

  /**
   * 修改存储桶监测状态
   */
  async ModifyCosAuditBucketMonitorStatus(
    req: ModifyCosAuditBucketMonitorStatusRequest,
    cb?: (error: string, rep: ModifyCosAuditBucketMonitorStatusResponse) => void
  ): Promise<ModifyCosAuditBucketMonitorStatusResponse> {
    return this.request("ModifyCosAuditBucketMonitorStatus", req, cb)
  }

  /**
   * 获取风险中心风险概况示例
   */
  async DescribeCSIPRiskStatistics(
    req: DescribeCSIPRiskStatisticsRequest,
    cb?: (error: string, rep: DescribeCSIPRiskStatisticsResponse) => void
  ): Promise<DescribeCSIPRiskStatisticsResponse> {
    return this.request("DescribeCSIPRiskStatistics", req, cb)
  }

  /**
   * 修改客户端运行策略（策略组），支持设置自定义策略及关联机器列表
   */
  async ModifyAgentRunPolicy(
    req: ModifyAgentRunPolicyRequest,
    cb?: (error: string, rep: ModifyAgentRunPolicyResponse) => void
  ): Promise<ModifyAgentRunPolicyResponse> {
    return this.request("ModifyAgentRunPolicy", req, cb)
  }

  /**
   * 展示企业必修漏洞情报
   */
  async DescribeMandatoryVulSet(
    req: DescribeMandatoryVulSetRequest,
    cb?: (error: string, rep: DescribeMandatoryVulSetResponse) => void
  ): Promise<DescribeMandatoryVulSetResponse> {
    return this.request("DescribeMandatoryVulSet", req, cb)
  }

  /**
   * 查询Dspm资产访问拓扑
   */
  async DescribeDspmAssetAccessTopology(
    req: DescribeDspmAssetAccessTopologyRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccessTopologyResponse) => void
  ): Promise<DescribeDspmAssetAccessTopologyResponse> {
    return this.request("DescribeDspmAssetAccessTopology", req, cb)
  }

  /**
   * 获取风险调用记录列表
   */
  async DescribeRiskCallRecord(
    req: DescribeRiskCallRecordRequest,
    cb?: (error: string, rep: DescribeRiskCallRecordResponse) => void
  ): Promise<DescribeRiskCallRecordResponse> {
    return this.request("DescribeRiskCallRecord", req, cb)
  }

  /**
   * 查询指定漏洞修复任务的详情信息，包含每台主机的修复状态、快照状态等明细数据，支持分页和筛选。
   */
  async DescribeVulFixTaskDetail(
    req: DescribeVulFixTaskDetailRequest,
    cb?: (error: string, rep: DescribeVulFixTaskDetailResponse) => void
  ): Promise<DescribeVulFixTaskDetailResponse> {
    return this.request("DescribeVulFixTaskDetail", req, cb)
  }

  /**
   * 永久忽略EDR多行为告警，将告警对应的主机+规则加入AI-Link永久忽略白名单，后续同类告警将自动丢弃
   */
  async ModifyEdrAlertPermanentIgnore(
    req: ModifyEdrAlertPermanentIgnoreRequest,
    cb?: (error: string, rep: ModifyEdrAlertPermanentIgnoreResponse) => void
  ): Promise<ModifyEdrAlertPermanentIgnoreResponse> {
    return this.request("ModifyEdrAlertPermanentIgnore", req, cb)
  }
}
