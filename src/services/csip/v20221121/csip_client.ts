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
  DeleteRiskScanTaskRequest,
  DescribeCosInvokeUaRequest,
  CsipRiskCenterStatistics,
  ModifyDspmApproveStatusRequest,
  DescribeCWPMachineDetailRequest,
  DescribeRiskItemListResponse,
  ModifyPolicyStatusRequest,
  DescribeCosAssetResponse,
  CreateCosAssetSyncTaskResponse,
  DescribeDspmSupportedAssetTypeRequest,
  DescribeDspmSupportedAssetTypeResponse,
  ModifyDspmBackupSettingRequest,
  AuditLogInfo,
  CreateAccessKeySyncTaskRequest,
  DescribeIpInvokeRecordDetailRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
  DescribeCosBucketBillingInfoResponse,
  RiskRuleInfo,
  KeyValue,
  OrganizationUserInfo,
  AssetTag,
  DescribeCheckViewRisksResponse,
  DspmSupportedAssetType,
  DspmIdentifyInfoItem,
  DescribeDspmRiskStrategyResponse,
  LogHighLightItem,
  DeleteIaCFileResponse,
  DspmAccountCount,
  ModifyDspmRiskStrategyRequest,
  DeleteDspmPersonalIdentifyRequest,
  ModifyCosAuditMonitorAccountRequest,
  DescribeDspmAccessTopologyIpsResponse,
  LogRuleKeyValueInfo,
  DescribeEdrAlertListRequest,
  CreateDspmAssetsExportJobResponse,
  DescribeRiskCenterWebsiteRiskListResponse,
  DescribeDspmSyncAssetsStatusRequest,
  DspmApplyOrder,
  DescribeRiskCenterCFGViewCFGRiskListRequest,
  DspmApproverOrder,
  LogFullTextInfo,
  DescribeCSIPRiskStatisticsResponse,
  DescribeCosActionListResponse,
  VULViewVULRiskData,
  DescribeIaCTokenListResponse,
  DescribeScanTaskListRequest,
  CreateAccessKeyCheckTaskResponse,
  DescribeOrganizationInfoRequest,
  DspmArea,
  DescribeDspmBackupLogListRequest,
  ModifyDspmAssetSecurityAnalysisSwitchRequest,
  DescribeCosBucketBillingInfoRequest,
  DescribeDspmRiskTendencyRequest,
  EdrAlertTarget,
  DescribeDspmRiskResponse,
  LogItems,
  ModifyDspmWhitelistStrategyResponse,
  DescribeKeySandboxCredentialRequest,
  DescribeDspmDictionaryListRequest,
  CheckViewRiskItem,
  DspmApproverStep,
  AddNewBindRoleUserRequest,
  ModifyDspmAssetLogDeliverySwitchResponse,
  DescribeCosIpInvokeRecordFileRequest,
  DescribeBucketInvokeIpListRequest,
  OrganizationInfo,
  TagCount,
  UpdateAccessKeyAlarmStatusResponse,
  DescribeVulRiskListResponse,
  CreateRiskCenterScanTaskResponse,
  DescribeDspmAssetsRequest,
  DescribeCWPMachineDetailResponse,
  StopRiskCenterTaskResponse,
  DescribeVpcAssetsRequest,
  TaskLogURL,
  DescribeExposePathRequest,
  ModifyDspmRestoreLogTaskResponse,
  DescribeKeySandboxCredentialListResponse,
  AttributeOptionSet,
  DeleteDspmApplyOrderRequest,
  SubUserInfo,
  CloudCountDesc,
  DiskPartitionInfo,
  ModifyDspmApproveStatusResponse,
  IaCFile,
  DescribeAIAgentAssetListRequest,
  SendDspmAssetLoginSmsCodeResponse,
  CosRiskActionInfo,
  DetectTypeCount,
  DescribeRiskCenterAssetViewCFGRiskListResponse,
  ModifyDspmAssetAccountResponse,
  ModifyDspmRestoreLogTaskRequest,
  UpdateAlertStatusListRequest,
  DspmIdentifyAssetStatistic,
  IPIntelInfo,
  DescribeCosActionListRequest,
  DescribeUserDspmInfoListRequest,
  DescribeCosAlarmListRequest,
  DescribeSkillScanPayInfoResponse,
  PublicIpDomainListKey,
  DescribeDspmApproveHistoryResponse,
  DescribeCosAccessPermissionsResponse,
  DescribeConfigCheckRulesResponse,
  ResetDspmAssetAccountPasswordRequest,
  DescribeRiskRulesRequest,
  UserDspmInfo,
  CosBucketTaskInfo,
  DescribeSourceIPAssetRequest,
  DescribeBucketInvokeIpListResponse,
  DescribeDspmIdentifyInfoRequest,
  DescribeDbAssetInfoRequest,
  DescribeUserCallRecordResponse,
  DescribeCosIpInvokeLogRequest,
  DescribeExposeAssetCategoryResponse,
  DescribeDspmIdentifyInfoListRequest,
  VulRiskItem,
  DeleteCosAkAssetResponse,
  AssetTagModifyAssetItem,
  DescribeAccessKeyAlarmResponse,
  DescribeGatewayAssetsResponse,
  CreateCosObjectScanTaskResponse,
  DescribeDspmApproveOrderListResponse,
  DescribeDspmApproveOrderListRequest,
  DspmRiskTendency,
  DeleteDomainAndIpResponse,
  CSIPTag,
  CreateDomainAndIpRequest,
  CosDictionary,
  LogSearchTopics,
  DescribeRiskRulesResponse,
  SkillCapabilityTag,
  VerifyDspmAssetLoginCodeResponse,
  RuleContentProcessInfo,
  DescribeScanStatisticResponse,
  DescribeAccessKeyAlarmRequest,
  DescribeCosAlarmListResponse,
  CosAssetInfo,
  DescribeExposuresRequest,
  DescribeCosRiskEvidenceRequest,
  DescribeDspmAssetTableListRequest,
  DescribeHighBaseLineRiskListResponse,
  DescribeDspmRiskDetailRequest,
  CosOverview,
  DescribeCosIdentifyFileListRequest,
  DescribeDspmAssetSupportedPrivilegesRequest,
  DescribePolicyHitDataRequest,
  DescribeCosSourceIpResponse,
  IpAssetListVO,
  CreateDspmAccessExportJobRequest,
  DescribeDspmRiskStrategyGroupRequest,
  IaCFileRisk,
  DspmPersonApplyHistoryItem,
  DescribeCosAccessPermissionRequest,
  DspmScheduleConfig,
  DeleteDspmRestoreLogListRequest,
  CreateDspmAccessExportJobResponse,
  CreateDspmAssetsExportJobRequest,
  DescribeRiskCenterServerRiskListResponse,
  CreateDspmPersonalIdentifyResponse,
  DspmIpCount,
  DescribeGatewayAssetsRequest,
  AccessKeyAsset,
  DescribeRiskCallRecordRequest,
  DspmAssetFieldInfo,
  ModifyRiskCenterRiskStatusResponse,
  RetryDspmExportLogResponse,
  DescribeEdrAlertInfoResponse,
  DescribeExposuresResponse,
  CreateDspmApproveHistoryExportJobRequest,
  AttackStageCount,
  CreateDspmRiskExportJobResponse,
  DescribeIpInvokeRecordResponse,
  DescribeCosRoleAccessPermissionsResponse,
  ModifyCosMarkInfoResponse,
  SkillScanRuleHit,
  DescribeOrganizationUserInfoRequest,
  ModifyDspmAssetLogDeliverySwitchRequest,
  DspmPersonUser,
  ModifyDspmAssetAccountPrivilegesRequest,
  ModifyUebaRuleSwitchResponse,
  DescribeDspmAssetDatabasesRequest,
  DescribeRiskBucketListRequest,
  CreateCosRiskScanTaskResponse,
  DescribeCosRoleAccessPermissionResponse,
  CreateDspmIdentifyInfoListExportJobRequest,
  CreateIaCFileExportJobRequest,
  AlertInfo,
  Vpc,
  STSCredentialOutput,
  PortRiskAdvanceCFGParamItem,
  CreateIaCAccessTokenRequest,
  DescribeDspmExportTaskResponse,
  DescribeRepositoryImageAssetsResponse,
  ModifyNotifySettingResponse,
  CreateDspmApproveHistoryExportJobResponse,
  CosPermissionInfo,
  DescribeDspmDictionaryListResponse,
  DescribeIaCFileListResponse,
  DescribeDspmAssetSupportedPrivilegesResponse,
  CreateDspmWhitelistStrategyResponse,
  HitRules,
  DspmIdentifyCount,
  DspmAccessRecord,
  DescribeTopAttackInfoResponse,
  ModifyDspmPersonalIdentifyRequest,
  CreateIaCAccessTokenResponse,
  DescribeVULRiskAdvanceCFGListRequest,
  DspmAssetTypeCount,
  DescribeCLSLogIndexV3Request,
  DescribeCosAssetSyncTaskResponse,
  DescribeDspmApproveHistoryRequest,
  RepositoryImageVO,
  DescribeRiskRuleDetailResponse,
  VerifyDspmAssetLoginCodeRequest,
  DescribeDspmBackupSettingResponse,
  CreateSkillScanResponse,
  DescribeCosAkAssetResponse,
  ModifyNotifySettingRequest,
  DescribeDspmPayInfoRequest,
  TableField,
  DescribeIaCFileReportRequest,
  ModifyDspmAssetAccountPrivilegesResponse,
  ModifyNotifyAssetConfigRequest,
  ModifyDspmWhitelistStrategyRequest,
  CICDToken,
  DescribeSkillScanResultRequest,
  LogCLSFilter,
  GateWayAsset,
  DescribeSourceIPAssetResponse,
  CosBucketBillingInfo,
  CreateIaCFileExportJobResponse,
  DescribeDspmApplyOrderListResponse,
  DescribeDspmAccessTopologyAssetsRequest,
  AssetViewVULRiskData,
  DspmIp,
  NICAsset,
  DescribeCLSLogListV3Response,
  ModifyDspmAssetDataScanTaskResponse,
  DescribeAccessKeyAssetResponse,
  DescribeAccessKeyRiskDetailResponse,
  DescribeSubnetAssetsResponse,
  DescribeRiskCenterAssetViewPortRiskListRequest,
  DescribeOrganizationInfoResponse,
  DescribeCosIpInvokeRecordFileResponse,
  DescribeCosAccessPermissionResponse,
  DescribeAccessKeyRiskRequest,
  DescribeNotifySettingAlertRequest,
  DescribeDspmLogListRequest,
  AssetInstanceTypeMap,
  DspmDbAccountPrivilege,
  ModifyDspmIdentifyInfoResponse,
  DspmAssetDatabaseInfo,
  RuleContentCmdLine,
  DspmColumnPrivilege,
  CreateDspmAssetAccessTopologyExportJobResponse,
  DescribeCosBucketListResponse,
  DescribeDspmAccessRecordResponse,
  DescribeDspmIdentifyIdListResponse,
  DeleteDspmBackupLogListResponse,
  DescribeCosAuditAppIdListRequest,
  CosRiskInfo,
  CreateRiskCenterScanTaskRequest,
  DspmAssetAccountIdentify,
  DescribeScanReportListRequest,
  DescribeCosAlarmTrendDataRequest,
  RetryDspmExportLogRequest,
  DescribeAccessKeyAssetRequest,
  CreateCosObjectScanTaskRequest,
  DescribeScanTaskListResponse,
  ModifyDspmAssetAccountRequest,
  CreateDspmAssetAccessTopologyExportJobRequest,
  DeleteDspmApplyOrderResponse,
  DescribeCosPolicyRequest,
  DescribeCWPMachinesRequest,
  DspmAssetAccount,
  DescribeDspmIdentifyIdListRequest,
  DescribeAILinkSettingRequest,
  DescribeCVMAssetInfoResponse,
  ModifyDspmBackupSettingResponse,
  DspmRisk,
  DescribeAIAgentAssetListResponse,
  CosActionInfo,
  LogSearchInfos,
  DescribeUserDspmInfoListResponse,
  DspmSensitiveScanTaskConfig,
  LogSearchErrors,
  AlertExtraInfo,
  DspmAssetTableInfo,
  SourceIPVpcInfo,
  CreateDspmApplyOrderResponse,
  DescribeUebaRuleRequest,
  ModifyEDRRuleRequest,
  DescribeDspmAssetAccessTopologyRequest,
  DescribeRiskCenterWebsiteRiskListRequest,
  DescribeCallRecordRequest,
  AssetViewVULRisk,
  DescribeClusterPodAssetsResponse,
  DescribeCFWAssetStatisticsResponse,
  TaskIdListKey,
  AssetViewPortRisk,
  DescribeRiskCenterAssetViewCFGRiskListRequest,
  DescribeDspmRiskStrategyGroupResponse,
  DescribeCosAuditPayInfoRequest,
  DescribeCosAkInvokeIpListResponse,
  ReportTaskIdList,
  AddNewBindRoleUserResponse,
  DescribeCosIdentifyFileListResponse,
  DeleteCosPolicyRequest,
  DescribeCosAkAssetRequest,
  DescribeDspmIdentifyInfoResponse,
  DescribeCosOverviewRequest,
  DescribeDspmPayInfoResponse,
  DescribeExposePathResponse,
  DeleteDspmWhitelistStrategyResponse,
  TaskLogInfo,
  LogColumn,
  DescribeTaskLogURLResponse,
  CosAssetFileIdentifyInfo,
  Machine,
  NotifySetting,
  DescribeCosAuditDictionaryListResponse,
  UebaRule,
  DspmTablePrivilege,
  DescribeSearchBugInfoResponse,
  CosPolicyInfo,
  DescribeIpInvokeRecordRequest,
  DescribeAccessKeyRiskDetailRequest,
  ModifyOrganizationAccountStatusRequest,
  DescribeExposeAssetCategoryRequest,
  DescribeAbnormalCallRecordResponse,
  DspmDbAsset,
  DescribeRiskItemListRequest,
  DescribeCosIpInvokeLogResponse,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  DescribeCosRiskEvidenceResponse,
  CosInvokeDetailInfo,
  DescribeDspmAccessTopologyAssetsResponse,
  CosAssetSyncTaskInfo,
  DspmDictionary,
  InquireInfo,
  ModifyUebaRuleSwitchRequest,
  RiskCallRecord,
  DspmRiskStrategy,
  AssetProcessItem,
  MachineDetail,
  DspmAssetCount,
  DescribeScanStatisticRequest,
  Filter,
  CosAssetDataScanDetail,
  ModifyNotifySettingAlertRequest,
  AssetCluster,
  EDRRule,
  DescribeEdrAlertInfoRequest,
  ExportTask,
  AddDspmAssetManagerResponse,
  UpdateAccessKeyRemarkRequest,
  AddDspmAssetManagerRequest,
  DescribeDspmStatisticsRequest,
  CreateDspmPersonalIdentifyRequest,
  DescribeAssumeRoleRequest,
  DescribeCosOverviewResponse,
  CreateCosPolicyRequest,
  DescribeVULRiskAdvanceCFGListResponse,
  StandardItem,
  DescribeCosRoleAccessPermissionRequest,
  ModifyDspmRiskStrategyResponse,
  DescribeCosAuditAppIdListResponse,
  DescribeAssetViewVulRiskListResponse,
  DescribeRepositoryImageAssetsRequest,
  DescribeRiskTrendDataResponse,
  CosAuditPayInfo,
  EDRFilter,
  VulImpactComponentInfo,
  CVMAssetVO,
  VULBaseInfo,
  DescribeCallRecordResponse,
  AssetViewCFGRisk,
  DescribeIaCFileListRequest,
  KeyValueInt,
  DspmUinUser,
  CosAkSet,
  DataSearchBug,
  DspmAssetInstance,
  CommandPluginState,
  DescribeIaCFileOverviewResponse,
  DspmAssetSecurityAnalyseStatus,
  DspmAssetDataScanDetail,
  BackupLog,
  CreateIaCFileReScanTaskResponse,
  DescribeClusterAssetsRequest,
  ResetDspmAssetAccountPasswordResponse,
  DescribeDspmAssetAccountPresetPrivilegesResponse,
  TaskCenterWeakPwdRiskInputParam,
  DeleteCosAkAssetRequest,
  DescribeDomainAssetsRequest,
  DescribeNotifyAssetConfigResponse,
  DescribeNICAssetsRequest,
  DescribeIaCFileReportResponse,
  DescribeDspmAssetFieldListResponse,
  DescribeDspmPersonApplyHistoryResponse,
  DescribeAssetProcessListRequest,
  DescribeAssetProcessListResponse,
  CosRiskAlarmInfo,
  DescribeAccessKeyUserListRequest,
  KeySandboxCredential,
  DeleteDomainAndIpRequest,
  DescribeIpInvokeRecordDetailResponse,
  CosAccessInfo,
  DescribeRiskRuleDetailRequest,
  DescribeDspmAssetAccountPresetPrivilegesRequest,
  DescribeDspmPersonalIdentifyListResponse,
  DeleteIaCAccessTokenResponse,
  Location,
  CosRoleAccessInfo,
  MiniTagItem,
  UebaEventContent,
  CreateAccessKeySyncTaskResponse,
  ModifyIaCTokenPeriodResponse,
  EdrAlertItem,
  DescribeDspmSyncUsersStatusResponse,
  DescribeSearchBugInfoRequest,
  DescribeDspmRiskDetailResponse,
  DescribeCosRiskScanTaskRequest,
  DescribeOrganizationUserInfoResponse,
  LogItem,
  AccessKeyRisk,
  DspmIdentifyRuleDetail,
  DBAssetVO,
  CreateDspmWhitelistStrategyRequest,
  StandardTerm,
  DeleteCosPolicyResponse,
  DescribeDspmAssetDatabaseListRequest,
  UpdateAlertStatusListResponse,
  DescribeIaCTokenListRequest,
  SkillScanEngineResult,
  CosAkAssetInfo,
  CosBucketAccessWay,
  DescribeAKAnalysisDetailResponse,
  ServerRisk,
  CosRiskBucketInfo,
  DescribeDspmAssetIdsRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
  VULViewVULRisk,
  DescribeDspmAssetAccountIdentifyResponse,
  DescribeDspmAssetLoginCredentialRequest,
  DescribeCLSLogListV3Request,
  DescribeCVMAssetsResponse,
  LogIndexRuleInfo,
  UpdateAccessKeyRemarkResponse,
  DescribeCosSourceIpRequest,
  DescribePublicIpAssetsRequest,
  DescribeDspmBackupSettingRequest,
  DescribeCVMAssetInfoRequest,
  ModifyMachineRemarkResponse,
  WebsiteRisk,
  DescribeDspmSyncAssetsStatusResponse,
  DspmRiskCount,
  ServiceSupport,
  DescribeDspmAssetAccountRecycledPrivilegesResponse,
  DescribeAssetRiskListResponse,
  ModifyAILinkSettingRequest,
  DeleteDspmRestoreLogListResponse,
  CosBucketId,
  AccessCredentialOutput,
  DescribeNotifySettingResponse,
  CreateDspmExportTaskResponse,
  LogValueInfo,
  VULRiskAdvanceCFGList,
  CreateDspmIdentifyInfoListExportJobResponse,
  TaskCenterVulRiskInputParam,
  ModifyDspmIpInfoRequest,
  ScanTaskInfo,
  TrafficPluginState,
  DescribeAccessKeyAlarmDetailRequest,
  Tags,
  ModifyDspmRiskInfoRequest,
  PortViewPortRisk,
  DescribeDspmAccessTopologyAccountsResponse,
  DescribeDspmPersonApplyHistoryRequest,
  DescribeClusterPodAssetsRequest,
  DescribeDspmAccessTopologyIpsRequest,
  DescribeVpcAssetsResponse,
  RevertDspmAssetAccountRequest,
  DescribeAssetRiskListRequest,
  DescribeTopAttackInfoRequest,
  VulTrend,
  SkillState,
  DescribeDspmIdentifyInfoListResponse,
  DescribeCosRiskActionListResponse,
  DescribeDspmAssetAccountsRequest,
  DescribeAccessKeyRiskResponse,
  LogDynamicIndex,
  ModifyCosMarkInfoRequest,
  DescribeDspmApplyHistoryResponse,
  ModifyDspmIpInfoResponse,
  CreateAccessKeyCheckTaskRequest,
  DspmFrequency,
  SyncDspmUsersResponse,
  DescribeCLSLogIndexV3Response,
  DescribeDspmAssetAccountsResponse,
  AssetBaseInfoResponse,
  DescribeRiskCallRecordResponse,
  DescribeRiskCenterPortViewPortRiskListRequest,
  DescribeAccessKeyUserDetailRequest,
  DescribeDspmAssetIdsResponse,
  StopRiskCenterTaskRequest,
  ModifyDspmAssetSecurityAnalysisSwitchResponse,
  DescribeEdrAlertListResponse,
  ExposesItem,
  AKInfo,
  WhereFilter,
  DescribeAlertListResponse,
  DspmPersonIdentifyItem,
  ScanTaskInfoList,
  DescribeCosAuditDictionaryListRequest,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  DeleteIaCFileRequest,
  LogKeyValueInfo,
  DeleteDspmExportTaskResponse,
  SourceIPAsset,
  DescribeUserCallRecordRequest,
  DescribeDspmSyncUsersStatusRequest,
  DomainAssetVO,
  DescribeAccessKeyUserDetailResponse,
  NotifyAssetConfigItem,
  EdrAlertDetail,
  CosAlarmTrendInfo,
  CredentialEffectScope,
  RevertDspmAssetAccountResponse,
  ModifyDspmPersonalIdentifyResponse,
  DescribeTaskLogListResponse,
  DeleteDspmBackupLogListRequest,
  DescribeDspmRiskTendencyResponse,
  HighBaseLineRiskItem,
  DescribeNotifySettingAlertResponse,
  CreateCosAssetSyncTaskRequest,
  DescribeCVMAssetsRequest,
  DescribeRiskCenterServerRiskListRequest,
  DomainInfo,
  DescribeAccessKeyAlarmDetailResponse,
  RuleContentProcessNetwork,
  DescribeOtherCloudAssetsRequest,
  DescribeAILinkSettingResponse,
  ModifyAILinkSettingResponse,
  DescribeDspmAssetSecurityAnalyseStatusResponse,
  CosAlarmRiskIdInfo,
  ModifyNotifyAssetConfigResponse,
  DescribeDspmBackupLogListResponse,
  ModifyEdrAlertPermanentIgnoreResponse,
  ModifyDspmIdentifyInfoRequest,
  DescribeDspmWhitelistStrategyRequest,
  DescribeOtherCloudAssetsResponse,
  CreateDomainAndIpResponse,
  DescribeSubUserInfoRequest,
  DescribeDspmAssetDatabasesResponse,
  SendDspmAssetLoginSmsCodeRequest,
  DescribeHighBaseLineRiskListRequest,
  DescribeTaskLogURLRequest,
  ModifyCosAuditMonitorAccountResponse,
  DspmIdentifyIdItem,
  DescribeCosPolicyResponse,
  CreateDspmRiskExportJobRequest,
  BugInfoDetail,
  CosInvokeIpVpcInfo,
  AccessKeyAlarmInfo,
  DescribeDspmAssetAccountRecycledPrivilegesRequest,
  DescribeCosRiskScanTaskResponse,
  CosInvokeLog,
  DownloadDspmExportLogResponse,
  CosIdentifyCategoryDetail,
  DescribeCheckViewRisksRequest,
  DescribeDspmAssetFieldListRequest,
  DeleteDspmPersonalIdentifyResponse,
  DescribePolicyHitDataResponse,
  StatisticalFilter,
  DescribeVULRiskDetailRequest,
  DescribeSkillScanResultResponse,
  DspmDbAssetId,
  DescribeConfigCheckRulesRequest,
  ModifyDspmAccessRecordRequest,
  ModifyRiskCenterRiskStatusRequest,
  NewAlertKey,
  DescribeDspmAssetLoginCredentialResponse,
  DescribeCosAkInvokeIpListRequest,
  DescribeCosBucketRiskResponse,
  DescribeCosRiskActionListRequest,
  DescribeCosRoleAccessPermissionsRequest,
  LogTopicIndexInfo,
  DescribeVULRiskDetailResponse,
  ModifyRiskCenterScanTaskResponse,
  ModifyAlarmRiskStatusRequest,
  TrafficRuleState,
  ModifyEDRRuleResponse,
  AccessKeyAlarmCount,
  RiskRuleItem,
  DescribeAbnormalCallRecordRequest,
  UpdateAccessKeyAlarmStatusRequest,
  ModifyDspmAssetDataScanTaskRequest,
  AssetRiskItem,
  ModifyEdrAlertPermanentIgnoreRequest,
  DescribeRiskDetailListRequest,
  DspmAccessRecordId,
  DescribeNotifySettingRequest,
  RoleInfo,
  RegionConfig,
  SyncDspmAssetsRequest,
  DescribeScanReportListResponse,
  DescribeDspmWhitelistStrategyResponse,
  DescribeDspmAssetAccountIdentifyRequest,
  DescribeDspmAssetAccessTopologyResponse,
  DescribeSkillScanPayInfoRequest,
  DescribeCosInvokeUaResponse,
  DescribeDspmApplyHistoryRequest,
  DescribeListenerListResponse,
  TaskAdvanceCFG,
  DescribeCosAuditPayInfoResponse,
  AssetInfoDetail,
  SubnetAsset,
  ContainerEnvInfo,
  RiskCenterStatusKey,
  TaskAssetObject,
  DbAssetInfo,
  DspmRiskStrategyGroup,
  DescribeCosAccessPermissionsRequest,
  CreateCosRiskScanTaskRequest,
  CosIdentifyRuleDetail,
  Element,
  SyncDspmUsersRequest,
  DescribeDspmAssetTableListResponse,
  ModifyAlarmRiskStatusResponse,
  Tag,
  DescribeEDRRuleListRequest,
  DspmIdentifyCategoryDetail,
  AccessKeyAlarm,
  AssetClusterPod,
  DescribeDspmAccessRecordRequest,
  DescribeKeySandboxCredentialResponse,
  SkillScanItem,
  DescribeVULListRequest,
  AssetViewWeakPassRisk,
  ModifyPolicyStatusResponse,
  CFGViewCFGRisk,
  DescribeCWPMachinesResponse,
  CreateIaCFileReScanTaskRequest,
  CosBucketInfo,
  ReportItemKey,
  DeleteDspmAssetAccountRequest,
  SensitiveDetail,
  DescribeRiskCenterVULViewVULRiskListResponse,
  CreateDspmExportTaskRequest,
  SkillRuleCatalogItem,
  DescribeRiskCenterVULViewVULRiskListRequest,
  CosRiskTrendInfo,
  DescribeCosAssetSyncTaskRequest,
  UebaCustomRule,
  VULRiskInfo,
  CreateDspmApplyOrderRequest,
  RiskDetailItem,
  DescribePublicIpAssetsResponse,
  DescribeCosAlarmTrendDataResponse,
  DescribeEDRRuleListResponse,
  DescribeDspmAssetDatabaseListResponse,
  CreateSkillScanRequest,
  ModifyDspmAccessRecordResponse,
  ModifyMachineRemarkRequest,
  InstanceIDWithAppIdItem,
  DescribeVulViewVulRiskListRequest,
  DescribeCosBucketListRequest,
  DescribeVulRiskListRequest,
  DescribeVULListResponse,
  ModifyIaCTokenPeriodRequest,
  RelatedEvent,
  DescribeAssetViewVulRiskListRequest,
  DspmWhitelistStrategy,
  DescribeVulViewVulRiskListResponse,
  DescribeDspmRiskRequest,
  DescribeNotifyAssetConfigRequest,
  DeleteDspmExportTaskRequest,
  AIAgentAsset,
  DspmSecurityAnalyseStatusCount,
  ServerRiskSuggestion,
  DescribeSubnetAssetsRequest,
  DspmDatabasePrivilege,
  DescribeDspmExportTaskRequest,
  DescribeDspmApplyOrderListRequest,
  DescribeCosBucketRiskRequest,
  UserCallRecord,
  CallRecord,
  DescribeRiskCenterPortViewPortRiskListResponse,
  DescribeDspmRiskStrategyRequest,
  DescribeKeySandboxCredentialListRequest,
  DescribeDspmAssetsResponse,
  DescribeDspmAccessTopologyAccountsRequest,
  DescribeDspmPersonalIdentifyListRequest,
  ModifyNotifySettingAlertResponse,
  CosSourceIpInfo,
  ModifyOrganizationAccountStatusResponse,
  DescribeRiskDetailListResponse,
  DescribeDbAssetsRequest,
  DescribeDbAssetInfoResponse,
  LogContextInfo,
  DescribeAlertListRequest,
  DescribeRiskCenterCFGViewCFGRiskListResponse,
  TaskCenterCFGRiskInputParam,
  DescribeDspmAssetSecurityAnalyseStatusRequest,
  ModifyDspmRiskInfoResponse,
  DescribeClusterAssetsResponse,
  DownloadDspmExportLogRequest,
  DescribeAKAnalysisDetailRequest,
  DescribeSubUserInfoResponse,
  DescribeDspmStatisticsResponse,
  DescribeCSIPRiskStatisticsRequest,
  DescribeUebaRuleResponse,
  DescribeDomainAssetsResponse,
  RegionInfo,
  DescribeTaskLogListRequest,
  DescribeNICAssetsResponse,
  DescribeRiskTrendDataRequest,
  NetworkCardInfo,
  LogSearchResult,
  CosRiskViewInfo,
  Filters,
  ModifyRiskCenterScanTaskRequest,
  ClbListenerListInfo,
  DescribeCosAssetRequest,
  AccessKeyUser,
  ProductSupport,
  DescribeListenerListRequest,
  DescribeIaCFileOverviewRequest,
  DeleteIaCAccessTokenRequest,
  DeleteRiskScanTaskResponse,
  SyncDspmAssetsResponse,
  EdrAlertCategoryCount,
  CreateCosPolicyResponse,
  DescribeCFWAssetStatisticsRequest,
  DescribeAccessKeyUserListResponse,
  CosAlarmInfo,
  ExposeAssetTypeItem,
  DescribeDspmLogListResponse,
  EdrAlertTargetForIgnore,
  FilterDataObject,
  DeleteDspmWhitelistStrategyRequest,
  DescribeDbAssetsResponse,
  DspmAssetAccessTopologyItem,
  DescribeRiskCenterAssetViewPortRiskListResponse,
  DeleteDspmAssetAccountResponse,
  DescribeRiskBucketListResponse,
  DescribeAssumeRoleResponse,
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
   * 删除IaC检测文件
   */
  async DeleteIaCFile(
    req: DeleteIaCFileRequest,
    cb?: (error: string, rep: DeleteIaCFileResponse) => void
  ): Promise<DeleteIaCFileResponse> {
    return this.request("DeleteIaCFile", req, cb)
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
   * 查询云边界分析-暴露路径下主机节点的漏洞列表
   */
  async DescribeVulRiskList(
    req: DescribeVulRiskListRequest,
    cb?: (error: string, rep: DescribeVulRiskListResponse) => void
  ): Promise<DescribeVulRiskListResponse> {
    return this.request("DescribeVulRiskList", req, cb)
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
   * 创建资产同步任务
   */
  async CreateCosAssetSyncTask(
    req: CreateCosAssetSyncTaskRequest,
    cb?: (error: string, rep: CreateCosAssetSyncTaskResponse) => void
  ): Promise<CreateCosAssetSyncTaskResponse> {
    return this.request("CreateCosAssetSyncTask", req, cb)
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
   * 查询Dspm身份信息列表
   */
  async DescribeDspmIdentifyInfoList(
    req: DescribeDspmIdentifyInfoListRequest,
    cb?: (error: string, rep: DescribeDspmIdentifyInfoListResponse) => void
  ): Promise<DescribeDspmIdentifyInfoListResponse> {
    return this.request("DescribeDspmIdentifyInfoList", req, cb)
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
   * 修改Dspm资产账号权限
   */
  async ModifyDspmAssetAccountPrivileges(
    req: ModifyDspmAssetAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyDspmAssetAccountPrivilegesResponse) => void
  ): Promise<ModifyDspmAssetAccountPrivilegesResponse> {
    return this.request("ModifyDspmAssetAccountPrivileges", req, cb)
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
   * 查询Dspm资产id列表
   */
  async DescribeDspmAssetIds(
    req: DescribeDspmAssetIdsRequest,
    cb?: (error: string, rep: DescribeDspmAssetIdsResponse) => void
  ): Promise<DescribeDspmAssetIdsResponse> {
    return this.request("DescribeDspmAssetIds", req, cb)
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
   * ip访问列表详情信息
   */
  async DescribeIpInvokeRecordDetail(
    req: DescribeIpInvokeRecordDetailRequest,
    cb?: (error: string, rep: DescribeIpInvokeRecordDetailResponse) => void
  ): Promise<DescribeIpInvokeRecordDetailResponse> {
    return this.request("DescribeIpInvokeRecordDetail", req, cb)
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
   * 获取扫描任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
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
   * 删除Dspm申请单
   */
  async DeleteDspmApplyOrder(
    req: DeleteDspmApplyOrderRequest,
    cb?: (error: string, rep: DeleteDspmApplyOrderResponse) => void
  ): Promise<DeleteDspmApplyOrderResponse> {
    return this.request("DeleteDspmApplyOrder", req, cb)
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
   * 调用源ip列表
   */
  async DescribeCosSourceIp(
    req: DescribeCosSourceIpRequest,
    cb?: (error: string, rep: DescribeCosSourceIpResponse) => void
  ): Promise<DescribeCosSourceIpResponse> {
    return this.request("DescribeCosSourceIp", req, cb)
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
   * 获取漏洞展开详情
   */
  async DescribeVULRiskDetail(
    req: DescribeVULRiskDetailRequest,
    cb?: (error: string, rep: DescribeVULRiskDetailResponse) => void
  ): Promise<DescribeVULRiskDetailResponse> {
    return this.request("DescribeVULRiskDetail", req, cb)
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
   * 创建cos病毒扫描、敏感数据识别任务
   */
  async CreateCosObjectScanTask(
    req: CreateCosObjectScanTaskRequest,
    cb?: (error: string, rep: CreateCosObjectScanTaskResponse) => void
  ): Promise<CreateCosObjectScanTaskResponse> {
    return this.request("CreateCosObjectScanTask", req, cb)
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
   * 获取网卡列表
   */
  async DescribeNICAssets(
    req: DescribeNICAssetsRequest,
    cb?: (error: string, rep: DescribeNICAssetsResponse) => void
  ): Promise<DescribeNICAssetsResponse> {
    return this.request("DescribeNICAssets", req, cb)
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
   * 发起AK资产同步任务
   */
  async CreateAccessKeySyncTask(
    req: CreateAccessKeySyncTaskRequest,
    cb?: (error: string, rep: CreateAccessKeySyncTaskResponse) => void
  ): Promise<CreateAccessKeySyncTaskResponse> {
    return this.request("CreateAccessKeySyncTask", req, cb)
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
   * 修改Dspm资产日志投递开关
   */
  async ModifyDspmAssetLogDeliverySwitch(
    req: ModifyDspmAssetLogDeliverySwitchRequest,
    cb?: (error: string, rep: ModifyDspmAssetLogDeliverySwitchResponse) => void
  ): Promise<ModifyDspmAssetLogDeliverySwitchResponse> {
    return this.request("ModifyDspmAssetLogDeliverySwitch", req, cb)
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
   * 查看存储桶扫描任务详情
   */
  async DescribeCosRiskScanTask(
    req: DescribeCosRiskScanTaskRequest,
    cb?: (error: string, rep: DescribeCosRiskScanTaskResponse) => void
  ): Promise<DescribeCosRiskScanTaskResponse> {
    return this.request("DescribeCosRiskScanTask", req, cb)
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
   * 创建Dspm资产访问拓扑导出任务
   */
  async CreateDspmAssetAccessTopologyExportJob(
    req: CreateDspmAssetAccessTopologyExportJobRequest,
    cb?: (error: string, rep: CreateDspmAssetAccessTopologyExportJobResponse) => void
  ): Promise<CreateDspmAssetAccessTopologyExportJobResponse> {
    return this.request("CreateDspmAssetAccessTopologyExportJob", req, cb)
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
   * 获取EDR告警详情，包含告警内容JSON、资产富化、情报富化等完整信息
   */
  async DescribeEdrAlertInfo(
    req: DescribeEdrAlertInfoRequest,
    cb?: (error: string, rep: DescribeEdrAlertInfoResponse) => void
  ): Promise<DescribeEdrAlertInfoResponse> {
    return this.request("DescribeEdrAlertInfo", req, cb)
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
   * 创建IaC检测文件导出任务
   */
  async CreateIaCFileExportJob(
    req: CreateIaCFileExportJobRequest,
    cb?: (error: string, rep: CreateIaCFileExportJobResponse) => void
  ): Promise<CreateIaCFileExportJobResponse> {
    return this.request("CreateIaCFileExportJob", req, cb)
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
   * 获取通知资产范围配置
   */
  async DescribeNotifyAssetConfig(
    req: DescribeNotifyAssetConfigRequest,
    cb?: (error: string, rep: DescribeNotifyAssetConfigResponse) => void
  ): Promise<DescribeNotifyAssetConfigResponse> {
    return this.request("DescribeNotifyAssetConfig", req, cb)
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
   * 更新自定义策略的开关
   */
  async ModifyUebaRuleSwitch(
    req: ModifyUebaRuleSwitchRequest,
    cb?: (error: string, rep: ModifyUebaRuleSwitchResponse) => void
  ): Promise<ModifyUebaRuleSwitchResponse> {
    return this.request("ModifyUebaRuleSwitch", req, cb)
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
   * 修改策略状态
   */
  async ModifyPolicyStatus(
    req: ModifyPolicyStatusRequest,
    cb?: (error: string, rep: ModifyPolicyStatusResponse) => void
  ): Promise<ModifyPolicyStatusResponse> {
    return this.request("ModifyPolicyStatus", req, cb)
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
   * 查询cos审计字典信息列表
   */
  async DescribeCosAuditDictionaryList(
    req: DescribeCosAuditDictionaryListRequest,
    cb?: (error: string, rep: DescribeCosAuditDictionaryListResponse) => void
  ): Promise<DescribeCosAuditDictionaryListResponse> {
    return this.request("DescribeCosAuditDictionaryList", req, cb)
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
   * 查询导出任务
   */
  async DescribeDspmExportTask(
    req: DescribeDspmExportTaskRequest,
    cb?: (error: string, rep: DescribeDspmExportTaskResponse) => void
  ): Promise<DescribeDspmExportTaskResponse> {
    return this.request("DescribeDspmExportTask", req, cb)
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
   * 访问密钥告警记录详情
   */
  async DescribeAccessKeyAlarmDetail(
    req: DescribeAccessKeyAlarmDetailRequest,
    cb?: (error: string, rep: DescribeAccessKeyAlarmDetailResponse) => void
  ): Promise<DescribeAccessKeyAlarmDetailResponse> {
    return this.request("DescribeAccessKeyAlarmDetail", req, cb)
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
   * 查询集团账号用户列表
   */
  async DescribeOrganizationUserInfo(
    req: DescribeOrganizationUserInfoRequest,
    cb?: (error: string, rep: DescribeOrganizationUserInfoResponse) => void
  ): Promise<DescribeOrganizationUserInfoResponse> {
    return this.request("DescribeOrganizationUserInfo", req, cb)
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
   * 获取用户访问密钥资产列表
   */
  async DescribeAccessKeyAsset(
    req: DescribeAccessKeyAssetRequest,
    cb?: (error: string, rep: DescribeAccessKeyAssetResponse) => void
  ): Promise<DescribeAccessKeyAssetResponse> {
    return this.request("DescribeAccessKeyAsset", req, cb)
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
   * 查看对象存储访问权限列表
   */
  async DescribeCosAccessPermissions(
    req: DescribeCosAccessPermissionsRequest,
    cb?: (error: string, rep: DescribeCosAccessPermissionsResponse) => void
  ): Promise<DescribeCosAccessPermissionsResponse> {
    return this.request("DescribeCosAccessPermissions", req, cb)
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
   * 查询资产数据库信息
   */
  async DescribeDspmAssetDatabaseList(
    req: DescribeDspmAssetDatabaseListRequest,
    cb?: (error: string, rep: DescribeDspmAssetDatabaseListResponse) => void
  ): Promise<DescribeDspmAssetDatabaseListResponse> {
    return this.request("DescribeDspmAssetDatabaseList", req, cb)
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
   * 云边界分析资产列表
   */
  async DescribeExposures(
    req: DescribeExposuresRequest,
    cb?: (error: string, rep: DescribeExposuresResponse) => void
  ): Promise<DescribeExposuresResponse> {
    return this.request("DescribeExposures", req, cb)
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
   * 修改Dspm风险信息
   */
  async ModifyDspmRiskInfo(
    req: ModifyDspmRiskInfoRequest,
    cb?: (error: string, rep: ModifyDspmRiskInfoResponse) => void
  ): Promise<ModifyDspmRiskInfoResponse> {
    return this.request("ModifyDspmRiskInfo", req, cb)
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
   * 获取漏洞视角的漏洞风险列表
   */
  async DescribeRiskCenterVULViewVULRiskList(
    req: DescribeRiskCenterVULViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterVULViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterVULViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterVULViewVULRiskList", req, cb)
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
   * csip角色授权绑定接口
   */
  async AddNewBindRoleUser(
    req?: AddNewBindRoleUserRequest,
    cb?: (error: string, rep: AddNewBindRoleUserResponse) => void
  ): Promise<AddNewBindRoleUserResponse> {
    return this.request("AddNewBindRoleUser", req, cb)
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
   * 查询日志列表信息
   */
  async DescribeDspmLogList(
    req: DescribeDspmLogListRequest,
    cb?: (error: string, rep: DescribeDspmLogListResponse) => void
  ): Promise<DescribeDspmLogListResponse> {
    return this.request("DescribeDspmLogList", req, cb)
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
   * 同步dspm用户列表
   */
  async SyncDspmUsers(
    req?: SyncDspmUsersRequest,
    cb?: (error: string, rep: SyncDspmUsersResponse) => void
  ): Promise<SyncDspmUsersResponse> {
    return this.request("SyncDspmUsers", req, cb)
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
   * 修改Dspm资产日志投递开关
   */
  async ModifyDspmAssetSecurityAnalysisSwitch(
    req: ModifyDspmAssetSecurityAnalysisSwitchRequest,
    cb?: (error: string, rep: ModifyDspmAssetSecurityAnalysisSwitchResponse) => void
  ): Promise<ModifyDspmAssetSecurityAnalysisSwitchResponse> {
    return this.request("ModifyDspmAssetSecurityAnalysisSwitch", req, cb)
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
   * 查询凭证列表
   */
  async DescribeKeySandboxCredentialList(
    req: DescribeKeySandboxCredentialListRequest,
    cb?: (error: string, rep: DescribeKeySandboxCredentialListResponse) => void
  ): Promise<DescribeKeySandboxCredentialListResponse> {
    return this.request("DescribeKeySandboxCredentialList", req, cb)
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
   * 获取cvm列表
   */
  async DescribeCVMAssets(
    req: DescribeCVMAssetsRequest,
    cb?: (error: string, rep: DescribeCVMAssetsResponse) => void
  ): Promise<DescribeCVMAssetsResponse> {
    return this.request("DescribeCVMAssets", req, cb)
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
   * 修改或者更改处置状态
   */
  async ModifyAlarmRiskStatus(
    req: ModifyAlarmRiskStatusRequest,
    cb?: (error: string, rep: ModifyAlarmRiskStatusResponse) => void
  ): Promise<ModifyAlarmRiskStatusResponse> {
    return this.request("ModifyAlarmRiskStatus", req, cb)
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
   * 高级配置风险规则列表示例
   */
  async DescribeRiskRules(
    req: DescribeRiskRulesRequest,
    cb?: (error: string, rep: DescribeRiskRulesResponse) => void
  ): Promise<DescribeRiskRulesResponse> {
    return this.request("DescribeRiskRules", req, cb)
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
   * 获取账号dspm信息列表
   */
  async DescribeUserDspmInfoList(
    req: DescribeUserDspmInfoListRequest,
    cb?: (error: string, rep: DescribeUserDspmInfoListResponse) => void
  ): Promise<DescribeUserDspmInfoListResponse> {
    return this.request("DescribeUserDspmInfoList", req, cb)
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
   * 修改Dspm风险策略
   */
  async ModifyDspmRiskStrategy(
    req: ModifyDspmRiskStrategyRequest,
    cb?: (error: string, rep: ModifyDspmRiskStrategyResponse) => void
  ): Promise<ModifyDspmRiskStrategyResponse> {
    return this.request("ModifyDspmRiskStrategy", req, cb)
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
   * 告警中心全量告警列表接口
   */
  async DescribeAlertList(
    req: DescribeAlertListRequest,
    cb?: (error: string, rep: DescribeAlertListResponse) => void
  ): Promise<DescribeAlertListResponse> {
    return this.request("DescribeAlertList", req, cb)
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
   * 获取扫描报告列表
   */
  async DescribeScanReportList(
    req: DescribeScanReportListRequest,
    cb?: (error: string, rep: DescribeScanReportListResponse) => void
  ): Promise<DescribeScanReportListResponse> {
    return this.request("DescribeScanReportList", req, cb)
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
   * 风险详情列表示例
   */
  async DescribeRiskDetailList(
    req: DescribeRiskDetailListRequest,
    cb?: (error: string, rep: DescribeRiskDetailListResponse) => void
  ): Promise<DescribeRiskDetailListResponse> {
    return this.request("DescribeRiskDetailList", req, cb)
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
   * 创建Dspm审批历史导出任务
   */
  async CreateDspmApproveHistoryExportJob(
    req: CreateDspmApproveHistoryExportJobRequest,
    cb?: (error: string, rep: CreateDspmApproveHistoryExportJobResponse) => void
  ): Promise<CreateDspmApproveHistoryExportJobResponse> {
    return this.request("CreateDspmApproveHistoryExportJob", req, cb)
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
   * 获取vpc列表
   */
  async DescribeVpcAssets(
    req: DescribeVpcAssetsRequest,
    cb?: (error: string, rep: DescribeVpcAssetsResponse) => void
  ): Promise<DescribeVpcAssetsResponse> {
    return this.request("DescribeVpcAssets", req, cb)
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
   * 获取配置视角的配置风险列表
   */
  async DescribeRiskCenterCFGViewCFGRiskList(
    req: DescribeRiskCenterCFGViewCFGRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterCFGViewCFGRiskListResponse) => void
  ): Promise<DescribeRiskCenterCFGViewCFGRiskListResponse> {
    return this.request("DescribeRiskCenterCFGViewCFGRiskList", req, cb)
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
   * 删除已删除的cos ak资产
   */
  async DeleteCosAkAsset(
    req: DeleteCosAkAssetRequest,
    cb?: (error: string, rep: DeleteCosAkAssetResponse) => void
  ): Promise<DeleteCosAkAssetResponse> {
    return this.request("DeleteCosAkAsset", req, cb)
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
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
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
   * 获取任务扫描报告列表
   */
  async DescribeTaskLogList(
    req: DescribeTaskLogListRequest,
    cb?: (error: string, rep: DescribeTaskLogListResponse) => void
  ): Promise<DescribeTaskLogListResponse> {
    return this.request("DescribeTaskLogList", req, cb)
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
   * 验证Dspm资产登录验证码
   */
  async VerifyDspmAssetLoginCode(
    req: VerifyDspmAssetLoginCodeRequest,
    cb?: (error: string, rep: VerifyDspmAssetLoginCodeResponse) => void
  ): Promise<VerifyDspmAssetLoginCodeResponse> {
    return this.request("VerifyDspmAssetLoginCode", req, cb)
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
   * 查询 Skill 安全检测计费信息，包括订单状态、总配额、已消耗配额、到期时间、支付模式等。无订单时返回零值（仅含 TimeNow 和 BetaEndTime）。试用订单通过 ModifyTrialStatus(Module=9) 领取，正式订单通过计费系统创建。
   */
  async DescribeSkillScanPayInfo(
    req?: DescribeSkillScanPayInfoRequest,
    cb?: (error: string, rep: DescribeSkillScanPayInfoResponse) => void
  ): Promise<DescribeSkillScanPayInfoResponse> {
    return this.request("DescribeSkillScanPayInfo", req, cb)
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
   * 修改日志备份设置
   */
  async ModifyDspmBackupSetting(
    req: ModifyDspmBackupSettingRequest,
    cb?: (error: string, rep: ModifyDspmBackupSettingResponse) => void
  ): Promise<ModifyDspmBackupSettingResponse> {
    return this.request("ModifyDspmBackupSetting", req, cb)
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
   * 查询Dspm白名单策略
   */
  async DescribeDspmWhitelistStrategy(
    req: DescribeDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: DescribeDspmWhitelistStrategyResponse) => void
  ): Promise<DescribeDspmWhitelistStrategyResponse> {
    return this.request("DescribeDspmWhitelistStrategy", req, cb)
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
   * 修改对象存储备注
   */
  async ModifyCosMarkInfo(
    req: ModifyCosMarkInfoRequest,
    cb?: (error: string, rep: ModifyCosMarkInfoResponse) => void
  ): Promise<ModifyCosMarkInfoResponse> {
    return this.request("ModifyCosMarkInfo", req, cb)
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
   * 主机详情
   */
  async DescribeCWPMachineDetail(
    req: DescribeCWPMachineDetailRequest,
    cb?: (error: string, rep: DescribeCWPMachineDetailResponse) => void
  ): Promise<DescribeCWPMachineDetailResponse> {
    return this.request("DescribeCWPMachineDetail", req, cb)
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
   * 修改cos审计监测账号
   */
  async ModifyCosAuditMonitorAccount(
    req: ModifyCosAuditMonitorAccountRequest,
    cb?: (error: string, rep: ModifyCosAuditMonitorAccountResponse) => void
  ): Promise<ModifyCosAuditMonitorAccountResponse> {
    return this.request("ModifyCosAuditMonitorAccount", req, cb)
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
   * 修改Dspm白名单策略
   */
  async ModifyDspmWhitelistStrategy(
    req: ModifyDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: ModifyDspmWhitelistStrategyResponse) => void
  ): Promise<ModifyDspmWhitelistStrategyResponse> {
    return this.request("ModifyDspmWhitelistStrategy", req, cb)
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
   * 删除恢复日志
   */
  async DeleteDspmRestoreLogList(
    req: DeleteDspmRestoreLogListRequest,
    cb?: (error: string, rep: DeleteDspmRestoreLogListResponse) => void
  ): Promise<DeleteDspmRestoreLogListResponse> {
    return this.request("DeleteDspmRestoreLogList", req, cb)
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
   * 云防资产中心统计数据
   */
  async DescribeCFWAssetStatistics(
    req?: DescribeCFWAssetStatisticsRequest,
    cb?: (error: string, rep: DescribeCFWAssetStatisticsResponse) => void
  ): Promise<DescribeCFWAssetStatisticsResponse> {
    return this.request("DescribeCFWAssetStatistics", req, cb)
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
   * 创建Dspm风险导出任务
   */
  async CreateDspmRiskExportJob(
    req: CreateDspmRiskExportJobRequest,
    cb?: (error: string, rep: CreateDspmRiskExportJobResponse) => void
  ): Promise<CreateDspmRiskExportJobResponse> {
    return this.request("CreateDspmRiskExportJob", req, cb)
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
   * 查询云边界分析路径节点
   */
  async DescribeExposePath(
    req: DescribeExposePathRequest,
    cb?: (error: string, rep: DescribeExposePathResponse) => void
  ): Promise<DescribeExposePathResponse> {
    return this.request("DescribeExposePath", req, cb)
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
   * 创建日志导出任务
   */
  async CreateDspmExportTask(
    req: CreateDspmExportTaskRequest,
    cb?: (error: string, rep: CreateDspmExportTaskResponse) => void
  ): Promise<CreateDspmExportTaskResponse> {
    return this.request("CreateDspmExportTask", req, cb)
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
   * 访问密钥告警记录列表
   */
  async DescribeAccessKeyAlarm(
    req: DescribeAccessKeyAlarmRequest,
    cb?: (error: string, rep: DescribeAccessKeyAlarmResponse) => void
  ): Promise<DescribeAccessKeyAlarmResponse> {
    return this.request("DescribeAccessKeyAlarm", req, cb)
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
   * 获取风险项视角列表
   */
  async DescribeRiskItemList(
    req: DescribeRiskItemListRequest,
    cb?: (error: string, rep: DescribeRiskItemListResponse) => void
  ): Promise<DescribeRiskItemListResponse> {
    return this.request("DescribeRiskItemList", req, cb)
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
   * 查询资产表信息
   */
  async DescribeDspmAssetTableList(
    req: DescribeDspmAssetTableListRequest,
    cb?: (error: string, rep: DescribeDspmAssetTableListResponse) => void
  ): Promise<DescribeDspmAssetTableListResponse> {
    return this.request("DescribeDspmAssetTableList", req, cb)
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
   * ip公网列表
   */
  async DescribePublicIpAssets(
    req: DescribePublicIpAssetsRequest,
    cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void
  ): Promise<DescribePublicIpAssetsResponse> {
    return this.request("DescribePublicIpAssets", req, cb)
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
   * 恢复Dspm资产账号
   */
  async RevertDspmAssetAccount(
    req: RevertDspmAssetAccountRequest,
    cb?: (error: string, rep: RevertDspmAssetAccountResponse) => void
  ): Promise<RevertDspmAssetAccountResponse> {
    return this.request("RevertDspmAssetAccount", req, cb)
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
   * 获取已购Dspm订单信息
   */
  async DescribeDspmPayInfo(
    req: DescribeDspmPayInfoRequest,
    cb?: (error: string, rep: DescribeDspmPayInfoResponse) => void
  ): Promise<DescribeDspmPayInfoResponse> {
    return this.request("DescribeDspmPayInfo", req, cb)
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
   * 获取IaC检测文件报告
   */
  async DescribeIaCFileReport(
    req: DescribeIaCFileReportRequest,
    cb?: (error: string, rep: DescribeIaCFileReportResponse) => void
  ): Promise<DescribeIaCFileReportResponse> {
    return this.request("DescribeIaCFileReport", req, cb)
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
   * 查询Dspm风险趋势
   */
  async DescribeDspmRiskTendency(
    req: DescribeDspmRiskTendencyRequest,
    cb?: (error: string, rep: DescribeDspmRiskTendencyResponse) => void
  ): Promise<DescribeDspmRiskTendencyResponse> {
    return this.request("DescribeDspmRiskTendency", req, cb)
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
   * 集群列表
   */
  async DescribeClusterAssets(
    req: DescribeClusterAssetsRequest,
    cb?: (error: string, rep: DescribeClusterAssetsResponse) => void
  ): Promise<DescribeClusterAssetsResponse> {
    return this.request("DescribeClusterAssets", req, cb)
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
   * 修改集团账号状态
   */
  async ModifyOrganizationAccountStatus(
    req: ModifyOrganizationAccountStatusRequest,
    cb?: (error: string, rep: ModifyOrganizationAccountStatusResponse) => void
  ): Promise<ModifyOrganizationAccountStatusResponse> {
    return this.request("ModifyOrganizationAccountStatus", req, cb)
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
   * 获取资产视角的漏洞风险列表
   */
  async DescribeAssetViewVulRiskList(
    req: DescribeAssetViewVulRiskListRequest,
    cb?: (error: string, rep: DescribeAssetViewVulRiskListResponse) => void
  ): Promise<DescribeAssetViewVulRiskListResponse> {
    return this.request("DescribeAssetViewVulRiskList", req, cb)
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
   * 查看风险资产视角
   */
  async DescribeCosBucketRisk(
    req: DescribeCosBucketRiskRequest,
    cb?: (error: string, rep: DescribeCosBucketRiskResponse) => void
  ): Promise<DescribeCosBucketRiskResponse> {
    return this.request("DescribeCosBucketRisk", req, cb)
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
   * 查询凭证详情，返回凭证元数据和打码后的凭据数据。access类型返回Access数组（Key原文、Value打码），sts类型返回STS对象（System原文、SecretID和SecretKey打码）
   */
  async DescribeKeySandboxCredential(
    req: DescribeKeySandboxCredentialRequest,
    cb?: (error: string, rep: DescribeKeySandboxCredentialResponse) => void
  ): Promise<DescribeKeySandboxCredentialResponse> {
    return this.request("DescribeKeySandboxCredential", req, cb)
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
   * 查询Dspm同步用户状态
   */
  async DescribeDspmSyncUsersStatus(
    req?: DescribeDspmSyncUsersStatusRequest,
    cb?: (error: string, rep: DescribeDspmSyncUsersStatusResponse) => void
  ): Promise<DescribeDspmSyncUsersStatusResponse> {
    return this.request("DescribeDspmSyncUsersStatus", req, cb)
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
   * 查询Dspm统计信息
   */
  async DescribeDspmStatistics(
    req: DescribeDspmStatisticsRequest,
    cb?: (error: string, rep: DescribeDspmStatisticsResponse) => void
  ): Promise<DescribeDspmStatisticsResponse> {
    return this.request("DescribeDspmStatistics", req, cb)
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
   * 查询Dspm审批单列表
   */
  async DescribeDspmApproveOrderList(
    req: DescribeDspmApproveOrderListRequest,
    cb?: (error: string, rep: DescribeDspmApproveOrderListResponse) => void
  ): Promise<DescribeDspmApproveOrderListResponse> {
    return this.request("DescribeDspmApproveOrderList", req, cb)
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
   * 资产列表
   */
  async DescribeOtherCloudAssets(
    req: DescribeOtherCloudAssetsRequest,
    cb?: (error: string, rep: DescribeOtherCloudAssetsResponse) => void
  ): Promise<DescribeOtherCloudAssetsResponse> {
    return this.request("DescribeOtherCloudAssets", req, cb)
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
   * 恢复备份日志
   */
  async ModifyDspmRestoreLogTask(
    req: ModifyDspmRestoreLogTaskRequest,
    cb?: (error: string, rep: ModifyDspmRestoreLogTaskResponse) => void
  ): Promise<ModifyDspmRestoreLogTaskResponse> {
    return this.request("ModifyDspmRestoreLogTask", req, cb)
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
   * 检查视角下云资源配置风险列表
   */
  async DescribeCheckViewRisks(
    req: DescribeCheckViewRisksRequest,
    cb?: (error: string, rep: DescribeCheckViewRisksResponse) => void
  ): Promise<DescribeCheckViewRisksResponse> {
    return this.request("DescribeCheckViewRisks", req, cb)
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
   * 资产视角下云资源配置风险列表
   */
  async DescribeAssetRiskList(
    req: DescribeAssetRiskListRequest,
    cb?: (error: string, rep: DescribeAssetRiskListResponse) => void
  ): Promise<DescribeAssetRiskListResponse> {
    return this.request("DescribeAssetRiskList", req, cb)
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
   * 查看风险证据以及描述
   */
  async DescribeCosRiskEvidence(
    req: DescribeCosRiskEvidenceRequest,
    cb?: (error: string, rep: DescribeCosRiskEvidenceResponse) => void
  ): Promise<DescribeCosRiskEvidenceResponse> {
    return this.request("DescribeCosRiskEvidence", req, cb)
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
   * 按日期查看策略命中详情
   */
  async DescribePolicyHitData(
    req: DescribePolicyHitDataRequest,
    cb?: (error: string, rep: DescribePolicyHitDataResponse) => void
  ): Promise<DescribePolicyHitDataResponse> {
    return this.request("DescribePolicyHitData", req, cb)
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
   * 修改DspmIp信息
   */
  async ModifyDspmIpInfo(
    req: ModifyDspmIpInfoRequest,
    cb?: (error: string, rep: ModifyDspmIpInfoResponse) => void
  ): Promise<ModifyDspmIpInfoResponse> {
    return this.request("ModifyDspmIpInfo", req, cb)
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
   * 获取资产视角的弱口令风险列表
   */
  async DescribeRiskCenterAssetViewWeakPasswordRiskList(
    req: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewWeakPasswordRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewWeakPasswordRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, cb)
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
   * 获取资产视角的漏洞风险列表
   */
  async DescribeRiskCenterAssetViewVULRiskList(
    req: DescribeRiskCenterAssetViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb)
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
   * 创建域名、ip相关信息
   */
  async CreateDomainAndIp(
    req: CreateDomainAndIpRequest,
    cb?: (error: string, rep: CreateDomainAndIpResponse) => void
  ): Promise<CreateDomainAndIpResponse> {
    return this.request("CreateDomainAndIp", req, cb)
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
   * 获取用户访问密钥资产列表（源IP视角）
   */
  async DescribeSourceIPAsset(
    req: DescribeSourceIPAssetRequest,
    cb?: (error: string, rep: DescribeSourceIPAssetResponse) => void
  ): Promise<DescribeSourceIPAssetResponse> {
    return this.request("DescribeSourceIPAsset", req, cb)
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
   * 编辑或者创建EDR策略
   */
  async ModifyEDRRule(
    req: ModifyEDRRuleRequest,
    cb?: (error: string, rep: ModifyEDRRuleResponse) => void
  ): Promise<ModifyEDRRuleResponse> {
    return this.request("ModifyEDRRule", req, cb)
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
   * 删除Dspm资产账号
   */
  async DeleteDspmAssetAccount(
    req: DeleteDspmAssetAccountRequest,
    cb?: (error: string, rep: DeleteDspmAssetAccountResponse) => void
  ): Promise<DeleteDspmAssetAccountResponse> {
    return this.request("DeleteDspmAssetAccount", req, cb)
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
   * 查询Dspm资产支持的权限
   */
  async DescribeDspmAssetSupportedPrivileges(
    req: DescribeDspmAssetSupportedPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetSupportedPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetSupportedPrivilegesResponse> {
    return this.request("DescribeDspmAssetSupportedPrivileges", req, cb)
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
   * 查询Dspm个人身份信息列表
   */
  async DescribeDspmPersonalIdentifyList(
    req: DescribeDspmPersonalIdentifyListRequest,
    cb?: (error: string, rep: DescribeDspmPersonalIdentifyListResponse) => void
  ): Promise<DescribeDspmPersonalIdentifyListResponse> {
    return this.request("DescribeDspmPersonalIdentifyList", req, cb)
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
   * 查询Dspm访问拓扑账号列表
   */
  async DescribeDspmAccessTopologyAccounts(
    req: DescribeDspmAccessTopologyAccountsRequest,
    cb?: (error: string, rep: DescribeDspmAccessTopologyAccountsResponse) => void
  ): Promise<DescribeDspmAccessTopologyAccountsResponse> {
    return this.request("DescribeDspmAccessTopologyAccounts", req, cb)
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
   * 获取IaC检测文件概览
   */
  async DescribeIaCFileOverview(
    req: DescribeIaCFileOverviewRequest,
    cb?: (error: string, rep: DescribeIaCFileOverviewResponse) => void
  ): Promise<DescribeIaCFileOverviewResponse> {
    return this.request("DescribeIaCFileOverview", req, cb)
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
   * 获取风险中心风险概况示例
   */
  async DescribeCSIPRiskStatistics(
    req: DescribeCSIPRiskStatisticsRequest,
    cb?: (error: string, rep: DescribeCSIPRiskStatisticsResponse) => void
  ): Promise<DescribeCSIPRiskStatisticsResponse> {
    return this.request("DescribeCSIPRiskStatistics", req, cb)
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
   * 查询Dspm资产访问拓扑
   */
  async DescribeDspmAssetAccessTopology(
    req: DescribeDspmAssetAccessTopologyRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccessTopologyResponse) => void
  ): Promise<DescribeDspmAssetAccessTopologyResponse> {
    return this.request("DescribeDspmAssetAccessTopology", req, cb)
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
   * 获取风险调用记录列表
   */
  async DescribeRiskCallRecord(
    req: DescribeRiskCallRecordRequest,
    cb?: (error: string, rep: DescribeRiskCallRecordResponse) => void
  ): Promise<DescribeRiskCallRecordResponse> {
    return this.request("DescribeRiskCallRecord", req, cb)
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

  /**
   * 标记风险或者告警为 已处置/已忽略
   */
  async UpdateAccessKeyAlarmStatus(
    req: UpdateAccessKeyAlarmStatusRequest,
    cb?: (error: string, rep: UpdateAccessKeyAlarmStatusResponse) => void
  ): Promise<UpdateAccessKeyAlarmStatusResponse> {
    return this.request("UpdateAccessKeyAlarmStatus", req, cb)
  }
}
