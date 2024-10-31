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
  CreateVirusScanAgainRequest,
  DescribeSecLogDeliveryKafkaSettingRequest,
  DescribeSearchTemplatesResponse,
  ScanIgnoreVul,
  UpdateImageRegistryTimingScanTaskResponse,
  DescribeScanIgnoreVulListResponse,
  ModifyVulDefenceEventStatusRequest,
  ModifyVirusAutoIsolateExampleSwitchResponse,
  DescribeEventEscapeImageListResponse,
  CKafkaTopicInfo,
  CreateVulExportJobResponse,
  DescribeUnfinishRefreshTaskResponse,
  CreateComponentExportJobRequest,
  ComplianceBenchmarkStandardEnable,
  CreateNetworkFirewallUndoPublishRequest,
  CreateRefreshTaskResponse,
  CreateVulDefenceHostExportJobResponse,
  DescribeEventEscapeImageListRequest,
  ImageVul,
  CreateVulImageExportJobResponse,
  AbnormalProcessEventDescription,
  CompliancePeriodTaskRule,
  DescribeVirusScanTimeoutSettingResponse,
  DescribeVulImageListResponse,
  CreateVulExportJobRequest,
  DescribeNetworkFirewallNamespaceLabelListResponse,
  ClusterCreateComponentItem,
  DescribeAssetComponentListResponse,
  DescribeVulImageListRequest,
  DescribeAssetImageRegistryVulListResponse,
  VulScanImageInfo,
  AddAssetImageRegistryRegistryDetailResponse,
  DeleteCompliancePolicyItemFromWhitelistRequest,
  DescribeAssetImageDetailRequest,
  VulIgnoreLocalImage,
  ModifyK8sApiAbnormalRuleInfoResponse,
  ModifyAssetImageScanStopResponse,
  AddAssetImageRegistryRegistryDetailRequest,
  AddIgnoreVulResponse,
  VulDefenceEventTendency,
  DescribeNetworkFirewallClusterRefreshStatusRequest,
  DescribeAssetImageRegistryVirusListExportResponse,
  DescribeSecEventsTendencyResponse,
  DescribeAccessControlEventsExportResponse,
  ClusterPodInfo,
  DescribeNetworkFirewallPolicyDetailRequest,
  CreateAccessControlsRuleExportJobResponse,
  ModifyAssetImageRegistryScanStopResponse,
  DescribeAssetImageRegistryRiskListExportRequest,
  SetCheckModeResponse,
  SecLogJoinObjectInfo,
  DescribeVulImageSummaryRequest,
  DescribeAssetImageScanStatusResponse,
  DescribeVirusAutoIsolateSampleDetailResponse,
  DescribeVulDefenceEventTendencyRequest,
  DescribeAbnormalProcessRulesExportRequest,
  DescribePurchaseStateInfoResponse,
  SoftQuotaDayInfo,
  DescribeVulDefencePluginResponse,
  DescribeAssetImageRegistryRegistryDetailResponse,
  RunTimeFilters,
  DescribeVirusDetailRequest,
  DeleteEscapeWhiteListRequest,
  DescribeClusterDetailRequest,
  ModifyK8sApiAbnormalRuleInfoRequest,
  UpdateAndPublishNetworkFirewallPolicyDetailResponse,
  DescribeAssetImageListRequest,
  DescribeSecLogDeliveryClsOptionsRequest,
  DescribeRiskSyscallWhiteListDetailRequest,
  DescribeAffectedWorkloadListRequest,
  ModifyAbnormalProcessRuleStatusRequest,
  DescribeVulTendencyResponse,
  ProcessDetailInfo,
  DescribeAutoAuthorizedRuleHostRequest,
  ScanCompliancePolicyItemsRequest,
  DescribeAgentDaemonSetCmdResponse,
  DescribeAssetImageVirusListExportRequest,
  CreateAssetImageScanTaskResponse,
  DescribeTaskResultSummaryRequest,
  DeleteAccessControlRulesRequest,
  DeleteRiskSyscallEventsResponse,
  OpenTcssTrialResponse,
  DescribeSearchExportListResponse,
  CreateVulScanTaskRequest,
  ComplianceK8SDetailInfo,
  AccessControlEventDescription,
  DescribeAccessControlEventsResponse,
  SecLogDeliveryKafkaSettingInfo,
  DescribeRiskSyscallWhiteListsResponse,
  CreateNetworkFirewallPolicyDiscoverResponse,
  ComplianceAssetDetailInfo,
  UnauthorizedCoresTendency,
  DescribeRiskSyscallEventsResponse,
  AssetClusterListItem,
  NetworkPolicyInfoItem,
  DescribeAssetImageRiskListResponse,
  CreateEmergencyVulExportJobResponse,
  CreateVulDefenceEventExportJobRequest,
  ClusterCustomParameters,
  DeleteIgnoreVulRequest,
  DescribeReverseShellEventsResponse,
  ImageSimpleInfo,
  DescribeComplianceAssetDetailInfoRequest,
  NetworkPeer,
  DescribeESAggregationsResponse,
  CreateExportComplianceStatusListJobResponse,
  DescribeAssetAppServiceListResponse,
  DescribeAssetSyncLastTimeRequest,
  ImageComponent,
  ComplianceBenchmarkStandard,
  DescribeEscapeRuleInfoResponse,
  VulTendencyInfo,
  DescribePurchaseStateInfoRequest,
  AddCompliancePolicyItemToWhitelistRequest,
  ComplianceAssetSummary,
  AbnormalProcessEventTendencyInfo,
  DescribeAssetClusterListResponse,
  EscapeRule,
  CompliancePeriodTask,
  DescribeAssetImageRegistryRiskListExportResponse,
  SecLogAlertMsgInfo,
  AutoAuthorizedImageInfo,
  UpdateAssetImageRegistryRegistryDetailResponse,
  ModifySecLogDeliveryKafkaSettingResponse,
  DeleteAbnormalProcessRulesResponse,
  ImageRepoRegistryInfo,
  RuleBaseInfo,
  ProcessInfo,
  ImageInfo,
  DescribeReverseShellDetailRequest,
  ModifyReverseShellStatusRequest,
  DescribePublicKeyResponse,
  DescribeRiskDnsListRequest,
  SetCheckModeRequest,
  DescribeAssetImageRiskListExportRequest,
  DescribeAssetSuperNodeListRequest,
  DescribeVulDefenceHostRequest,
  EmergencyVulInfo,
  ExportVirusListRequest,
  CreateWebVulExportJobRequest,
  CreateK8sApiAbnormalEventExportJobRequest,
  DescribeK8sApiAbnormalTendencyResponse,
  K8sApiAbnormalEventListItem,
  SecLogJoinInfo,
  PromotionActivityContent,
  DescribeAffectedClusterCountRequest,
  DescribeAssetImageRegistryVulListExportRequest,
  AddEditRiskSyscallWhiteListRequest,
  K8sApiAbnormalRuleInfo,
  ReverseShellEventInfo,
  DescribeSecLogJoinObjectListResponse,
  CreateSystemVulExportJobRequest,
  DescribeVulScanInfoRequest,
  DescribeClusterNodesResponse,
  DescribeRiskSyscallDetailRequest,
  ScanComplianceAssetsByPolicyItemRequest,
  DescribeAbnormalProcessRulesRequest,
  DescribeAssetImageRegistryListResponse,
  DescribeVirusAutoIsolateSampleDetailRequest,
  DescribeAssetImageVirusListResponse,
  DeleteComplianceAssetPolicySetFromWhitelistResponse,
  DescribeK8sApiAbnormalSummaryResponse,
  DescribeSecLogJoinTypeListResponse,
  DescribeAssetSyncLastTimeResponse,
  CreateAssetImageScanSettingRequest,
  EscapeWhiteListInfo,
  CreateNetworkFirewallUndoPublishResponse,
  DescribeIndexListResponse,
  ModifyVulDefenceSettingRequest,
  DescribeAssetSummaryResponse,
  CreateNetworkFirewallClusterRefreshResponse,
  CreateComponentExportJobResponse,
  DescribeReverseShellWhiteListsResponse,
  DescribeVulContainerListRequest,
  DeleteReverseShellEventsRequest,
  ClsLogsetInfo,
  ModifyEscapeEventStatusResponse,
  CheckRepeatAssetImageRegistryResponse,
  VulDefenceEvent,
  DescribeAccessControlEventsExportRequest,
  ExportVirusListResponse,
  DeleteReverseShellWhiteListsResponse,
  DescribeNetworkFirewallAuditRecordResponse,
  DescribeSecLogCleanSettingInfoResponse,
  UpdateNetworkFirewallPolicyYamlDetailResponse,
  DescribeAssetImageBindRuleInfoResponse,
  DescribeESHitsRequest,
  DescribeTcssSummaryResponse,
  DeleteRiskSyscallEventsRequest,
  DescribeAssetContainerListRequest,
  DescribeEscapeSafeStateResponse,
  DescribeImageRiskSummaryRequest,
  CreateDefenceVulExportJobResponse,
  StopVirusScanTaskRequest,
  AbnormalProcessRuleInfo,
  ScanComplianceAssetsByPolicyItemResponse,
  CreateRiskDnsEventExportJobRequest,
  ComplianceWhitelistItem,
  DescribeAssetPortListRequest,
  DescribeComplianceTaskPolicyItemSummaryListResponse,
  ComplianceContainerDetailInfo,
  DescribeReverseShellEventsRequest,
  AddNetworkFirewallPolicyDetailResponse,
  DescribeNetworkFirewallPolicyStatusRequest,
  DescribeSecLogKafkaUINResponse,
  DescribeAbnormalProcessRuleDetailRequest,
  DescribeLogStorageStatisticRequest,
  VirusInfo,
  DescribeVulIgnoreRegistryImageListRequest,
  AddEditImageAutoAuthorizedRuleResponse,
  ClusterCheckTaskItem,
  DescribeVirusAutoIsolateSampleListRequest,
  ModifySecLogJoinObjectsResponse,
  DescribeAffectedClusterCountResponse,
  RenewImageAuthorizeStateRequest,
  DescribeVirusAutoIsolateSettingRequest,
  CreateAssetImageRegistryScanTaskOneKeyRequest,
  RemoveAssetImageRegistryRegistryDetailRequest,
  NetworkCustomPolicy,
  DeleteNetworkFirewallPolicyDetailRequest,
  ModifyEscapeEventStatusRequest,
  ImagesBindRuleInfo,
  ImageHost,
  AddComplianceAssetPolicySetToWhitelistResponse,
  DescribeUnauthorizedCoresTendencyResponse,
  DescribeNetworkFirewallPolicyStatusResponse,
  ConnDetectConfig,
  DescribeAssetContainerListResponse,
  ModifyContainerNetStatusRequest,
  DescribeVulIgnoreLocalImageListRequest,
  DescribeVirusMonitorSettingResponse,
  DescribeSystemVulListRequest,
  DescribeContainerSecEventSummaryRequest,
  DescribeAssetImageRegistrySummaryResponse,
  DescribeSecLogCleanSettingInfoRequest,
  DescribeVulScanAuthorizedImageSummaryResponse,
  DescribeImageAuthorizedInfoResponse,
  DescribeAbnormalProcessEventsRequest,
  ModifyAbnormalProcessRuleStatusResponse,
  DescribeVirusListRequest,
  DescribeComplianceAssetListRequest,
  ModifyVirusScanSettingResponse,
  ImagesVul,
  DescribePromotionActivityResponse,
  ModifyVirusMonitorSettingRequest,
  ModifyEscapeWhiteListRequest,
  AddAndPublishNetworkFirewallPolicyDetailResponse,
  DescribeSearchExportListRequest,
  DescribeReverseShellWhiteListDetailRequest,
  AddCompliancePolicyAssetSetToWhitelistResponse,
  DescribeVulContainerListResponse,
  DescribeRiskSyscallNamesRequest,
  ModifyVulDefenceEventStatusResponse,
  DescribeEscapeEventInfoResponse,
  DescribeK8sApiAbnormalRuleInfoResponse,
  DescribeESHitsResponse,
  DescribeImageRegistryTimingScanTaskResponse,
  ClusterInfoItem,
  DescribeComplianceScanFailedAssetListResponse,
  ModifyReverseShellStatusResponse,
  DeleteMachineResponse,
  AddCompliancePolicyAssetSetToWhitelistRequest,
  DescribeEscapeWhiteListResponse,
  DescribeAssetImageHostListRequest,
  AbnormalProcessEventInfo,
  DescribeCompliancePeriodTaskListResponse,
  DescribeAssetImageScanSettingRequest,
  AccessControlSystemChildRuleInfo,
  DescribeSecLogAlertMsgResponse,
  DescribeInspectionReportRequest,
  DescribeAgentDaemonSetCmdRequest,
  DescribeSecLogAlertMsgRequest,
  AddNetworkFirewallPolicyYamlDetailResponse,
  AccessControlEventInfo,
  DescribeClusterSummaryResponse,
  DescribeSecLogDeliveryClsOptionsResponse,
  ImageVulLayerInfo,
  DeleteMachineRequest,
  CreateVulImageExportJobRequest,
  DescribeValueAddedSrvInfoRequest,
  DescribeCompliancePolicyItemAffectedSummaryResponse,
  ModifyRiskSyscallStatusResponse,
  DescribeVulSummaryRequest,
  DescribeAutoAuthorizedRuleHostResponse,
  DeleteIgnoreVulResponse,
  ModifyAssetImageRegistryScanStopOneKeyRequest,
  DeleteSearchTemplateRequest,
  SwitchImageAutoAuthorizedRuleResponse,
  DescribeExportJobResultRequest,
  DescribeNetworkFirewallNamespaceLabelListRequest,
  DescribeK8sApiAbnormalEventListRequest,
  DescribeAffectedWorkloadListResponse,
  CreateComplianceTaskResponse,
  DescribeAssetImageRegistryListRequest,
  VulDefencePlugin,
  DescribeAbnormalProcessEventTendencyResponse,
  DescribeScanIgnoreVulListRequest,
  DescribeReverseShellWhiteListsRequest,
  CheckNetworkFirewallPolicyYamlRequest,
  DescribeRiskListRequest,
  VulDefenceHost,
  ModifyAccessControlStatusResponse,
  DeleteReverseShellWhiteListsRequest,
  DescribeEmergencyVulListResponse,
  DescribeAssetAppServiceListRequest,
  ModifyImageAuthorizedResponse,
  NetworkClusterInfoItem,
  AddEscapeWhiteListResponse,
  ModifySecLogCleanSettingInfoResponse,
  DescribeWebVulListRequest,
  ModifyVirusScanSettingRequest,
  DescribeVulDefenceEventRequest,
  DescribeVirusSummaryResponse,
  DescribeAssetDBServiceListRequest,
  UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest,
  DescribeProVersionInfoResponse,
  AddEditAbnormalProcessRuleResponse,
  ScanComplianceScanFailedAssetsRequest,
  ModifySecLogDeliveryClsSettingResponse,
  DescribeComplianceTaskAssetSummaryRequest,
  CreateCheckComponentResponse,
  DescribeImageRegistryTimingScanTaskRequest,
  DescribeRiskSyscallWhiteListDetailResponse,
  AddNetworkFirewallPolicyYamlDetailRequest,
  DescribeVulLevelImageSummaryResponse,
  ScanComplianceAssetsResponse,
  DescribeClusterNodesRequest,
  CreateAssetImageVirusExportJobResponse,
  DescribeIndexListRequest,
  CreateWebVulExportJobResponse,
  DescribeReverseShellWhiteListDetailResponse,
  DescribeUnauthorizedCoresTendencyRequest,
  DescribeAssetImageVulListExportResponse,
  VulTopRankingInfo,
  DescribeProVersionInfoRequest,
  DescribeVulLevelSummaryRequest,
  EscapeEventDescription,
  DescribeAssetImageDetailResponse,
  CreateAssetImageRegistryScanTaskOneKeyResponse,
  AbnormalProcessSystemChildRuleInfo,
  DescribeAssetImageVulListExportRequest,
  DescribeExportJobResultResponse,
  ReverseShellWhiteListBaseInfo,
  AccessControlRuleInfo,
  DescribeAssetHostListResponse,
  DescribeABTestConfigRequest,
  K8sApiAbnormalRuleScopeInfo,
  ClusterNodeInfo,
  StopVulScanTaskRequest,
  DescribeNetworkFirewallNamespaceListResponse,
  ImageRepoInfo,
  CreateAssetImageRegistryScanTaskResponse,
  DescribePublicKeyRequest,
  PortInfo,
  DescribeAssetImageRegistrySummaryRequest,
  DescribeVirusManualScanEstimateTimeoutResponse,
  DescribeTaskResultSummaryResponse,
  HostInfo,
  DescribeVirusScanTimeoutSettingRequest,
  ModifySecLogJoinStateResponse,
  ModifyAccessControlRuleStatusResponse,
  ModifyAssetImageScanStopRequest,
  CreateRefreshTaskRequest,
  DescribeK8sApiAbnormalEventListResponse,
  DescribeNewestVulRequest,
  DescribeAbnormalProcessLevelSummaryResponse,
  AddEscapeWhiteListRequest,
  DescribeESAggregationsRequest,
  NetworkClusterPodInfo,
  DescribeAssetImageRiskListExportResponse,
  ModifySecLogCleanSettingInfoRequest,
  DescribeAccessControlEventsRequest,
  DescribeCompliancePeriodTaskListRequest,
  DescribeAccessControlRuleDetailRequest,
  ModifyVirusScanTimeoutSettingRequest,
  CreateProcessEventsExportJobResponse,
  ImageRiskInfo,
  DescribeRiskSyscallDetailResponse,
  DeleteK8sApiAbnormalRuleResponse,
  ComplianceHostDetailInfo,
  VulAffectedImageComponentInfo,
  DescribePromotionActivityRequest,
  AccessControlChildRuleInfo,
  DescribeSecLogKafkaUINRequest,
  CreateSystemVulExportJobResponse,
  DescribeRiskSyscallNamesResponse,
  AddEditReverseShellWhiteListResponse,
  DescribeAbnormalProcessEventsResponse,
  InitializeUserComplianceEnvironmentResponse,
  ReverseShellEventDescription,
  DescribeImageRegistryNamespaceListResponse,
  VulAffectedImageInfo,
  TagInfo,
  DescribeK8sApiAbnormalRuleListResponse,
  DeleteCompliancePolicyAssetSetFromWhitelistResponse,
  DescribeVirusTaskListResponse,
  DescribeAssetHostDetailResponse,
  CKafkaInstanceInfo,
  DescribeAffectedNodeListResponse,
  DeleteK8sApiAbnormalRuleRequest,
  ModifyVirusFileStatusResponse,
  DescribeAbnormalProcessRulesExportResponse,
  DescribeSuperNodePodListRequest,
  DescribeAbnormalProcessEventTendencyRequest,
  DescribeEscapeEventDetailResponse,
  ScanCompliancePolicyItemsResponse,
  DeleteAccessControlRulesResponse,
  DescribeVulImageSummaryResponse,
  DescribeEscapeRuleInfoRequest,
  VirusTendencyInfo,
  DescribeComplianceWhitelistItemListResponse,
  DescribeAssetWebServiceListRequest,
  UpdateImageRegistryTimingScanTaskRequest,
  DescribeEscapeEventTendencyRequest,
  DescribeInspectionReportResponse,
  SecLogDeliveryClsSettingInfo,
  DescribeVirusScanTaskStatusRequest,
  CreateAssetImageScanSettingResponse,
  DescribeVulDefenceEventDetailRequest,
  DescribeVirusAutoIsolateSampleListResponse,
  DescribeVirusEventTendencyRequest,
  DescribeAssetImageRegistryVulListExportResponse,
  NetworkPorts,
  DescribeAssetContainerDetailRequest,
  ModifyAccessControlStatusRequest,
  CreateProcessEventsExportJobRequest,
  DescribeVulDetailResponse,
  RegistryConnDetectResult,
  ModifyCompliancePeriodTaskResponse,
  RiskSyscallEventInfo,
  DescribeEscapeEventTendencyResponse,
  ClusterCheckItem,
  DescribeAssetImageVulListResponse,
  DescribeK8sApiAbnormalSummaryRequest,
  DescribeAbnormalProcessLevelSummaryRequest,
  AssetFilters,
  ModifyK8sApiAbnormalRuleStatusRequest,
  DescribeNetworkFirewallPolicyDetailResponse,
  DescribePostPayDetailResponse,
  DescribeK8sApiAbnormalEventInfoResponse,
  DescribeNetworkFirewallPodLabelsListResponse,
  VulAffectedComponentInfo,
  DescribeAssetImageScanStatusRequest,
  DescribeCheckItemListResponse,
  ComplianceScanFailedAsset,
  ScanComplianceAssetsRequest,
  DescribeAbnormalProcessRuleDetailResponse,
  ModifyVirusFileStatusRequest,
  VulAffectedRegistryImageInfo,
  CreateVulContainerExportJobResponse,
  SyncAssetImageRegistryAssetResponse,
  DescribeAssetImageRegistryListExportRequest,
  CreateK8sApiAbnormalRuleInfoResponse,
  ProcessBaseInfo,
  ModifyEscapeRuleRequest,
  K8sApiAbnormalTendencyItem,
  DescribeAbnormalProcessRulesResponse,
  ModifyVulDefenceSettingResponse,
  SupportDefenceVul,
  DescribeCheckItemListRequest,
  DescribeImageComponentListResponse,
  CreateAbnormalProcessRulesExportJobResponse,
  DescribeSecLogDeliveryKafkaOptionsRequest,
  DescribeVirusScanSettingResponse,
  DescribeAccessControlRuleDetailResponse,
  CreateNetworkFirewallPublishRequest,
  CreateHostExportJobResponse,
  DescribeRiskDnsListResponse,
  DescribeNetworkFirewallPolicyDiscoverRequest,
  RiskDnsEventInfo,
  DescribeK8sApiAbnormalRuleScopeListResponse,
  CreateOrModifyPostPayCoresRequest,
  ModifyImageAuthorizedRequest,
  DescribeAssetImageScanTaskRequest,
  DescribeSecLogDeliveryClsSettingRequest,
  UpdateNetworkFirewallPolicyDetailResponse,
  ModifySecLogKafkaUINResponse,
  DescribeNetworkFirewallPodLabelsListRequest,
  CreateVirusScanTaskResponse,
  DescribeNetworkFirewallAuditRecordRequest,
  DescribeAssetProcessListRequest,
  DescribeAssetProcessListResponse,
  SecTendencyEventInfo,
  EscapeEventInfo,
  ModifyVirusScanTimeoutSettingResponse,
  CreateAssetImageVirusExportJobRequest,
  DescribeAssetImageRegistryDetailRequest,
  CreateAssetImageRegistryScanTaskRequest,
  DescribeAssetClusterListRequest,
  DescribeAssetImageListExportResponse,
  WarningRule,
  VulAffectedContainerInfo,
  DescribeLogStorageStatisticResponse,
  CreateSearchTemplateResponse,
  DescribeAssetContainerDetailResponse,
  DescribeVulDefenceSettingResponse,
  DescribeNetworkFirewallPolicyYamlDetailResponse,
  DescribeImageComponentListRequest,
  AbnormalProcessChildRuleInfo,
  DescribeNetworkFirewallPolicyListResponse,
  DescribeAgentInstallCommandRequest,
  ResetSecLogTopicConfigRequest,
  DescribeAssetImageVirusListExportResponse,
  DescribeVirusScanSettingRequest,
  DescribeRiskDnsEventDetailRequest,
  CreateAccessControlsRuleExportJobRequest,
  VirusAutoIsolateSampleInfo,
  DescribeExportJobDownloadURLRequest,
  DescribeImageAutoAuthorizedRuleRequest,
  DescribeVulIgnoreRegistryImageListResponse,
  UpdateAndPublishNetworkFirewallPolicyDetailRequest,
  DescribeAssetPortListResponse,
  DescribeRefreshTaskRequest,
  CreateClusterCheckTaskResponse,
  ClsTopicInfo,
  DescribeCompliancePolicyItemAffectedAssetListRequest,
  DescribeImageRiskTendencyRequest,
  CreateOrModifyPostPayCoresResponse,
  ComplianceAffectedAsset,
  DescribeVirusMonitorSettingRequest,
  DescribeAssetImageHostListResponse,
  ModifySecLogKafkaUINRequest,
  ModifyVirusAutoIsolateSettingRequest,
  DescribeNetworkFirewallClusterListResponse,
  EscapeEventTendencyInfo,
  DescribeImageRiskTendencyResponse,
  CompliancePolicyAssetSetItem,
  NetworkClusterNamespaceLabelInfo,
  SyncAssetImageRegistryAssetRequest,
  DescribeComplianceScanFailedAssetListRequest,
  DescribeSearchLogsRequest,
  DescribeEscapeEventTypeSummaryResponse,
  DescribeAssetImageRegistryVulListRequest,
  DescribeImageSimpleListResponse,
  CreateAbnormalProcessRulesExportJobRequest,
  CreateK8sApiAbnormalEventExportJobResponse,
  DescribeUserClusterResponse,
  DescribeAssetImageRegistryRegistryListRequest,
  DescribeVulDefenceHostResponse,
  CreateImageExportJobRequest,
  CreateEmergencyVulExportJobRequest,
  K8sApiAbnormalRuleListItem,
  DescribeVirusScanTaskStatusResponse,
  DescribeEscapeEventsExportResponse,
  ComplianceImageDetailInfo,
  DescribeVulScanLocalImageListResponse,
  DescribeComplianceWhitelistItemListRequest,
  DescribeAccessControlDetailRequest,
  ClusterRiskItem,
  DescribeVirusListResponse,
  DescribeAbnormalProcessEventsExportRequest,
  DescribeVulSummaryResponse,
  DescribeAssetComponentListRequest,
  DescribeEmergencyVulListRequest,
  DeleteReverseShellEventsResponse,
  DescribeAbnormalProcessDetailResponse,
  DescribeAssetImageListExportRequest,
  ModifyAssetImageRegistryScanStopOneKeyResponse,
  DescribeImageRiskSummaryResponse,
  VulDefenceEventDetail,
  UpdateNetworkFirewallPolicyYamlDetailRequest,
  DescribeK8sApiAbnormalRuleInfoRequest,
  DescribeVulRegistryImageListRequest,
  RunTimeEventBaseInfo,
  DescribeSystemVulListResponse,
  ModifyIgnoreVul,
  DescribeAssetImageRegistryVirusListResponse,
  DescribeAssetImageSimpleListRequest,
  DescribeAssetDBServiceListResponse,
  DescribeSecLogJoinTypeListRequest,
  DescribeImageSimpleListRequest,
  CreateNetworkFirewallPolicyDiscoverRequest,
  ImageRiskTendencyInfo,
  DescribeVulTopRankingResponse,
  DescribeAssetWebServiceListResponse,
  VulDetailInfo,
  DescribeVulLevelSummaryResponse,
  AddNetworkFirewallPolicyDetailRequest,
  DescribeComplianceTaskPolicyItemSummaryListRequest,
  CompliancePolicyItemSummary,
  DescribeAssetImageVulListRequest,
  ModifyRiskSyscallStatusRequest,
  DescribeVulDefenceEventResponse,
  DescribeVirusEventTendencyResponse,
  AddEditImageAutoAuthorizedRuleRequest,
  SwitchImageAutoAuthorizedRuleRequest,
  DescribeVirusSampleDownloadUrlResponse,
  DescribeValueAddedSrvInfoResponse,
  RunTimeRiskInfo,
  CreateVirusScanTaskRequest,
  DescribeAbnormalProcessDetailRequest,
  DescribeAssetImageScanTaskResponse,
  AddEditAccessControlRuleRequest,
  DescribeVulTopRankingRequest,
  ConfirmNetworkFirewallPolicyRequest,
  ContainerMount,
  DeleteSearchTemplateResponse,
  SuperNodePodListItem,
  AddComplianceAssetPolicySetToWhitelistRequest,
  DescribeVirusAutoIsolateSampleDownloadURLResponse,
  DescribeSecLogVasInfoRequest,
  DescribeNetworkFirewallPolicyDiscoverResponse,
  DescribeAssetImageSimpleListResponse,
  DescribeComplianceAssetPolicyItemListResponse,
  ComplianceFilters,
  ImageVirusInfo,
  StopVulScanTaskResponse,
  ModifyEscapeWhiteListResponse,
  DescribeUserPodListResponse,
  ImagesInfo,
  ModifyVirusAutoIsolateExampleSwitchRequest,
  ImageVirus,
  ModifySecLogDeliveryKafkaSettingRequest,
  DescribeReverseShellEventsExportRequest,
  ModifyK8sApiAbnormalEventStatusRequest,
  ModifySecLogJoinObjectsRequest,
  DescribeK8sApiAbnormalRuleListRequest,
  DescribeAccessControlDetailResponse,
  CreateImageExportJobResponse,
  ProjectInfo,
  DescribeAffectedNodeListRequest,
  DescribeAssetImageRegistryAssetStatusResponse,
  NamespaceInfo,
  ContainerNetwork,
  DescribeSecLogDeliveryKafkaSettingResponse,
  CreateHostExportJobRequest,
  AddEditRiskSyscallWhiteListResponse,
  DescribeVirusAutoIsolateSampleDownloadURLRequest,
  ModifyAbnormalProcessStatusRequest,
  DescribeVulDetailRequest,
  CreateEscapeWhiteListExportJobRequest,
  DescribeSecLogJoinObjectListRequest,
  ImageRisk,
  DescribeClusterDetailResponse,
  ComplianceAssetPolicyItem,
  InitializeUserComplianceEnvironmentRequest,
  DescribeSupportDefenceVulResponse,
  DescribeAssetImageRiskListRequest,
  DescribeEscapeSafeStateRequest,
  DescribeVirusManualScanEstimateTimeoutRequest,
  CreateVulScanTaskResponse,
  DescribeTcssSummaryRequest,
  ModifyContainerNetStatusResponse,
  DescribeEscapeEventDetailRequest,
  DescribeSupportDefenceVulRequest,
  DeleteCompliancePolicyAssetSetFromWhitelistRequest,
  DescribeExportJobManageListRequest,
  DescribeVirusSummaryRequest,
  DescribeNetworkFirewallPolicyYamlDetailRequest,
  ModifySecLogJoinStateRequest,
  ABTestConfig,
  RiskSyscallWhiteListBaseInfo,
  DeleteAbnormalProcessRulesRequest,
  CreateNetworkFirewallClusterRefreshRequest,
  ModifyCompliancePeriodTaskRequest,
  DescribeNetworkFirewallNamespaceListRequest,
  DescribeRiskSyscallEventsRequest,
  DescribeRiskListResponse,
  ModifyAssetRequest,
  RegionInfo,
  DescribeEscapeWhiteListRequest,
  DescribeNetworkFirewallPolicyListRequest,
  ComponentInfo,
  ConfirmNetworkFirewallPolicyResponse,
  CreateNetworkFirewallPublishResponse,
  DescribeAssetSummaryRequest,
  CreateClusterCheckTaskRequest,
  RaspInfo,
  DescribeNetworkFirewallClusterListRequest,
  DescribeVulRegistryImageListResponse,
  CreateVulDefenceEventExportJobResponse,
  AutoAuthorizedRuleHostInfo,
  CreateExportComplianceStatusListJobRequest,
  DescribeImageAutoAuthorizedTaskListRequest,
  DescribeVirusSampleDownloadUrlRequest,
  AddAndPublishNetworkFirewallPolicyYamlDetailResponse,
  EventEscapeImageInfo,
  DescribeRiskDnsEventDetailResponse,
  AddAndPublishNetworkFirewallPolicyDetailRequest,
  DescribeEscapeEventInfoRequest,
  UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse,
  DescribeExportJobManageListResponse,
  DescribeRiskSyscallEventsExportResponse,
  DescribeUnfinishRefreshTaskRequest,
  DescribeAssetImageRegistryRiskInfoListRequest,
  DescribeImageRegistryNamespaceListRequest,
  DescribeAssetImageRegistryScanStatusOneKeyRequest,
  ModifyAccessControlRuleStatusRequest,
  DescribeVulScanAuthorizedImageSummaryRequest,
  DescribeWarningRulesRequest,
  RunTimeTendencyInfo,
  DescribeContainerAssetSummaryRequest,
  CkafkaRouteInfo,
  ComponentsInfo,
  DescribeImageAutoAuthorizedLogListResponse,
  DescribeUserPodListRequest,
  DeleteComplianceAssetPolicySetFromWhitelistRequest,
  DeleteRiskSyscallWhiteListsResponse,
  DescribeAssetImageVirusListRequest,
  DescribeAssetImageScanSettingResponse,
  DescribeReverseShellDetailResponse,
  DescribeClusterSummaryRequest,
  AddIgnoreVulRequest,
  CreateEscapeWhiteListExportJobResponse,
  DescribeAccessControlRulesExportResponse,
  ModifyAbnormalProcessStatusResponse,
  DescribeAbnormalProcessEventsExportResponse,
  ExportJobInfo,
  DescribeContainerAssetSummaryResponse,
  CreateAssetImageScanTaskRequest,
  CreateSearchTemplateRequest,
  DescribeEscapeEventsExportRequest,
  AddEditAbnormalProcessRuleRequest,
  CheckRepeatAssetImageRegistryRequest,
  AffectedNodeItem,
  CreateCheckComponentRequest,
  DescribeAgentInstallCommandResponse,
  DeleteRiskSyscallWhiteListsRequest,
  ModifyK8sApiAbnormalRuleStatusResponse,
  DescribeImageAuthorizedInfoRequest,
  DescribeExportJobDownloadURLResponse,
  DescribeAssetImageRegistryRiskInfoListResponse,
  DescribeVulIgnoreLocalImageListResponse,
  DescribeAssetSuperNodeListResponse,
  DescribeAssetImageRegistryDetailResponse,
  AddCompliancePolicyItemToWhitelistResponse,
  ComplianceAssetPolicySetItem,
  DescribeAccessControlRulesRequest,
  StopVirusScanTaskResponse,
  K8sApiAbnormalEventInfo,
  DescribeVulDefenceEventTendencyResponse,
  CreateK8sApiAbnormalRuleInfoRequest,
  CreateK8sApiAbnormalRuleExportJobResponse,
  RenewImageAuthorizeStateResponse,
  ImageAutoAuthorizedTask,
  AddEditWarningRulesRequest,
  DescribeSearchLogsResponse,
  ModifyAssetResponse,
  NetworkClusterNamespaceInfo,
  DescribeReverseShellEventsExportResponse,
  DescribeAssetImageBindRuleInfoRequest,
  DescribeAssetImageListResponse,
  DescribeVulDefenceEventDetailResponse,
  ComplianceAssetInfo,
  DescribeAssetImageRegistryVirusListRequest,
  CreateEscapeEventsExportJobRequest,
  ModifyVirusMonitorSettingResponse,
  CheckNetworkFirewallPolicyYamlResponse,
  DescribeComplianceTaskAssetSummaryResponse,
  DescribeWarningRulesResponse,
  DescribeUserClusterRequest,
  DescribeNetworkFirewallClusterRefreshStatusResponse,
  VirusTaskInfo,
  AffectedWorkloadItem,
  AddAndPublishNetworkFirewallPolicyYamlDetailRequest,
  CreateComplianceTaskRequest,
  ImageRegistryInfo,
  DescribeAccessControlRulesExportRequest,
  OpenTcssTrialRequest,
  CreateEscapeEventsExportJobResponse,
  RiskSyscallEventDescription,
  DescribeImageAutoAuthorizedRuleResponse,
  AddEditWarningRulesResponse,
  DescribeVulDefenceSettingRequest,
  DescribeVirusAutoIsolateSettingResponse,
  VulInfo,
  DescribeAssetImageRegistryRegistryListResponse,
  DescribeAssetImageRegistryAssetStatusRequest,
  DescribeVulScanLocalImageListRequest,
  ImageProgress,
  CreateK8sApiAbnormalRuleExportJobRequest,
  CreateVirusScanAgainResponse,
  CreateDefenceVulExportJobRequest,
  ModifySecLogDeliveryClsSettingRequest,
  AddEditAccessControlRuleResponse,
  DescribeEscapeEventTypeSummaryRequest,
  DescribeVulLevelImageSummaryRequest,
  DeleteCompliancePolicyItemFromWhitelistResponse,
  DescribeSecEventsTendencyRequest,
  ResetSecLogTopicConfigResponse,
  DescribeAccessControlRulesResponse,
  ModifyEscapeRuleResponse,
  DescribeSecLogVasInfoResponse,
  ModifyVirusAutoIsolateSettingResponse,
  AssetSimpleImageInfo,
  DescribeCompliancePolicyItemAffectedSummaryRequest,
  DescribeVirusDetailResponse,
  DescribeImageAutoAuthorizedTaskListResponse,
  DescribeComplianceAssetListResponse,
  DescribeSuperNodePodListResponse,
  CreateVulContainerExportJobRequest,
  DescribeSecLogDeliveryClsSettingResponse,
  DescribeComplianceAssetDetailInfoResponse,
  DeleteEscapeWhiteListResponse,
  RemoveAssetImageRegistryRegistryDetailResponse,
  ScanComplianceScanFailedAssetsResponse,
  ModifyAssetImageRegistryScanStopRequest,
  DeleteNetworkFirewallPolicyDetailResponse,
  DescribeK8sApiAbnormalTendencyRequest,
  RiskSyscallWhiteListInfo,
  DescribeNewestVulResponse,
  DescribeCompliancePolicyItemAffectedAssetListResponse,
  DescribeComplianceAssetPolicyItemListRequest,
  DescribeABTestConfigResponse,
  ImageScanInquireInfo,
  SearchTemplate,
  DescribeContainerSecEventSummaryResponse,
  ProcessDetailBaseInfo,
  DescribeAssetHostListRequest,
  CreateVulDefenceHostExportJobRequest,
  DescribeImageAutoAuthorizedLogListRequest,
  DescribeRiskSyscallEventsExportRequest,
  DescribeRiskSyscallWhiteListsRequest,
  DescribeVulDefencePluginRequest,
  ContainerInfo,
  DescribeAssetImageRegistryScanStatusOneKeyResponse,
  DescribeAssetImageRegistryRegistryDetailRequest,
  NetworkAuditRecord,
  UpdateAssetImageRegistryRegistryDetailRequest,
  DescribeK8sApiAbnormalRuleScopeListRequest,
  ServiceInfo,
  AddEditReverseShellWhiteListRequest,
  VulIgnoreRegistryImage,
  DescribeVirusTaskListRequest,
  CreateRiskDnsEventExportJobResponse,
  DescribeAssetImageRegistryVirusListExportRequest,
  DescribeWebVulListResponse,
  DescribeVulScanInfoResponse,
  DescribeAssetImageRegistryListExportResponse,
  FileAttributeInfo,
  DescribeVulTendencyRequest,
  DescribePostPayDetailRequest,
  ModifyK8sApiAbnormalEventStatusResponse,
  DescribeSecLogDeliveryKafkaOptionsResponse,
  DescribeAssetHostDetailRequest,
  DescribeRefreshTaskResponse,
  ReverseShellWhiteListInfo,
  UpdateNetworkFirewallPolicyDetailRequest,
  SuperNodeListItem,
  EscapeRuleEnabled,
  DescribeK8sApiAbnormalEventInfoRequest,
  DescribeSearchTemplatesRequest,
} from "./tcss_models"

/**
 * tcss client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcss.tencentcloudapi.com", "2020-11-01", clientConfig)
  }

  /**
   * DescribeImageAuthorizedInfo  查询镜像授权信息
   */
  async DescribeImageAuthorizedInfo(
    req?: DescribeImageAuthorizedInfoRequest,
    cb?: (error: string, rep: DescribeImageAuthorizedInfoResponse) => void
  ): Promise<DescribeImageAuthorizedInfoResponse> {
    return this.request("DescribeImageAuthorizedInfo", req, cb)
  }

  /**
   * 创建k8s api异常事件导出任务
   */
  async CreateK8sApiAbnormalEventExportJob(
    req: CreateK8sApiAbnormalEventExportJobRequest,
    cb?: (error: string, rep: CreateK8sApiAbnormalEventExportJobResponse) => void
  ): Promise<CreateK8sApiAbnormalEventExportJobResponse> {
    return this.request("CreateK8sApiAbnormalEventExportJob", req, cb)
  }

  /**
   * 更新安全日志-日志投递cls配置
   */
  async ModifySecLogDeliveryClsSetting(
    req: ModifySecLogDeliveryClsSettingRequest,
    cb?: (error: string, rep: ModifySecLogDeliveryClsSettingResponse) => void
  ): Promise<ModifySecLogDeliveryClsSettingResponse> {
    return this.request("ModifySecLogDeliveryClsSetting", req, cb)
  }

  /**
     * 接口已废弃

查询运行时异常进程事件列表信息导出
     */
  async DescribeAbnormalProcessEventsExport(
    req: DescribeAbnormalProcessEventsExportRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessEventsExportResponse) => void
  ): Promise<DescribeAbnormalProcessEventsExportResponse> {
    return this.request("DescribeAbnormalProcessEventsExport", req, cb)
  }

  /**
   * 运行时文件扫描超时设置查询
   */
  async DescribeVirusScanTimeoutSetting(
    req: DescribeVirusScanTimeoutSettingRequest,
    cb?: (error: string, rep: DescribeVirusScanTimeoutSettingResponse) => void
  ): Promise<DescribeVirusScanTimeoutSettingResponse> {
    return this.request("DescribeVirusScanTimeoutSetting", req, cb)
  }

  /**
   * 运行时查询木马概览信息
   */
  async DescribeVirusSummary(
    req?: DescribeVirusSummaryRequest,
    cb?: (error: string, rep: DescribeVirusSummaryResponse) => void
  ): Promise<DescribeVirusSummaryResponse> {
    return this.request("DescribeVirusSummary", req, cb)
  }

  /**
   * 编辑漏洞防御设置
   */
  async ModifyVulDefenceSetting(
    req: ModifyVulDefenceSettingRequest,
    cb?: (error: string, rep: ModifyVulDefenceSettingResponse) => void
  ): Promise<ModifyVulDefenceSettingResponse> {
    return this.request("ModifyVulDefenceSetting", req, cb)
  }

  /**
   * 创建异常进程规则导出任务
   */
  async CreateAbnormalProcessRulesExportJob(
    req: CreateAbnormalProcessRulesExportJobRequest,
    cb?: (error: string, rep: CreateAbnormalProcessRulesExportJobResponse) => void
  ): Promise<CreateAbnormalProcessRulesExportJobResponse> {
    return this.request("CreateAbnormalProcessRulesExportJob", req, cb)
  }

  /**
   * 容器安全搜索查询主机列表
   */
  async DescribeAssetHostList(
    req: DescribeAssetHostListRequest,
    cb?: (error: string, rep: DescribeAssetHostListResponse) => void
  ): Promise<DescribeAssetHostListResponse> {
    return this.request("DescribeAssetHostList", req, cb)
  }

  /**
   * 重新检测选定的检测失败的资产下的所有失败的检测项，返回创建的合规检查任务的ID。
   */
  async ScanComplianceScanFailedAssets(
    req: ScanComplianceScanFailedAssetsRequest,
    cb?: (error: string, rep: ScanComplianceScanFailedAssetsResponse) => void
  ): Promise<ScanComplianceScanFailedAssetsResponse> {
    return this.request("ScanComplianceScanFailedAssets", req, cb)
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
   * 获取公钥
   */
  async DescribePublicKey(
    req?: DescribePublicKeyRequest,
    cb?: (error: string, rep: DescribePublicKeyResponse) => void
  ): Promise<DescribePublicKeyResponse> {
    return this.request("DescribePublicKey", req, cb)
  }

  /**
   * 查询运行时访问控制事件的详细信息
   */
  async DescribeAccessControlDetail(
    req: DescribeAccessControlDetailRequest,
    cb?: (error: string, rep: DescribeAccessControlDetailResponse) => void
  ): Promise<DescribeAccessControlDetailResponse> {
    return this.request("DescribeAccessControlDetail", req, cb)
  }

  /**
   * 查询木马自动隔离样本详情
   */
  async DescribeVirusAutoIsolateSampleDetail(
    req: DescribeVirusAutoIsolateSampleDetailRequest,
    cb?: (error: string, rep: DescribeVirusAutoIsolateSampleDetailResponse) => void
  ): Promise<DescribeVirusAutoIsolateSampleDetailResponse> {
    return this.request("DescribeVirusAutoIsolateSampleDetail", req, cb)
  }

  /**
     * 接口已废弃

查询运行时异常进程策略列表信息导出
     */
  async DescribeAbnormalProcessRulesExport(
    req: DescribeAbnormalProcessRulesExportRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessRulesExportResponse) => void
  ): Promise<DescribeAbnormalProcessRulesExportResponse> {
    return this.request("DescribeAbnormalProcessRulesExport", req, cb)
  }

  /**
   * 容器网络查询网络策略策略执行状态
   */
  async DescribeNetworkFirewallPolicyStatus(
    req: DescribeNetworkFirewallPolicyStatusRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPolicyStatusResponse) => void
  ): Promise<DescribeNetworkFirewallPolicyStatusResponse> {
    return this.request("DescribeNetworkFirewallPolicyStatus", req, cb)
  }

  /**
   * 查询k8sapi异常事件统计
   */
  async DescribeK8sApiAbnormalSummary(
    req?: DescribeK8sApiAbnormalSummaryRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalSummaryResponse) => void
  ): Promise<DescribeK8sApiAbnormalSummaryResponse> {
    return this.request("DescribeK8sApiAbnormalSummary", req, cb)
  }

  /**
   * 创建漏洞防御导出任务
   */
  async CreateVulDefenceEventExportJob(
    req: CreateVulDefenceEventExportJobRequest,
    cb?: (error: string, rep: CreateVulDefenceEventExportJobResponse) => void
  ): Promise<CreateVulDefenceEventExportJobResponse> {
    return this.request("CreateVulDefenceEventExportJob", req, cb)
  }

  /**
   * 容器安全查询app服务列表
   */
  async DescribeAssetAppServiceList(
    req: DescribeAssetAppServiceListRequest,
    cb?: (error: string, rep: DescribeAssetAppServiceListResponse) => void
  ): Promise<DescribeAssetAppServiceListResponse> {
    return this.request("DescribeAssetAppServiceList", req, cb)
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
   * 创建受漏洞影响的镜像导出任务
   */
  async CreateVulImageExportJob(
    req: CreateVulImageExportJobRequest,
    cb?: (error: string, rep: CreateVulImageExportJobResponse) => void
  ): Promise<CreateVulImageExportJobResponse> {
    return this.request("CreateVulImageExportJob", req, cb)
  }

  /**
   * 统计漏洞扫描页已授权和未扫描镜像数
   */
  async DescribeVulScanAuthorizedImageSummary(
    req?: DescribeVulScanAuthorizedImageSummaryRequest,
    cb?: (error: string, rep: DescribeVulScanAuthorizedImageSummaryResponse) => void
  ): Promise<DescribeVulScanAuthorizedImageSummaryResponse> {
    return this.request("DescribeVulScanAuthorizedImageSummary", req, cb)
  }

  /**
   * 删除单个镜像仓库详细信息
   */
  async RemoveAssetImageRegistryRegistryDetail(
    req: RemoveAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: RemoveAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<RemoveAssetImageRegistryRegistryDetailResponse> {
    return this.request("RemoveAssetImageRegistryRegistryDetail", req, cb)
  }

  /**
   * 下发刷新任务，会刷新资产信息
   */
  async CreateRefreshTask(
    req: CreateRefreshTaskRequest,
    cb?: (error: string, rep: CreateRefreshTaskResponse) => void
  ): Promise<CreateRefreshTaskResponse> {
    return this.request("CreateRefreshTask", req, cb)
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
   * 修改安全日志kafkaUIN
   */
  async ModifySecLogKafkaUIN(
    req: ModifySecLogKafkaUINRequest,
    cb?: (error: string, rep: ModifySecLogKafkaUINResponse) => void
  ): Promise<ModifySecLogKafkaUINResponse> {
    return this.request("ModifySecLogKafkaUIN", req, cb)
  }

  /**
   * 镜像仓库停止镜像一键扫描任务
   */
  async ModifyAssetImageRegistryScanStopOneKey(
    req: ModifyAssetImageRegistryScanStopOneKeyRequest,
    cb?: (error: string, rep: ModifyAssetImageRegistryScanStopOneKeyResponse) => void
  ): Promise<ModifyAssetImageRegistryScanStopOneKeyResponse> {
    return this.request("ModifyAssetImageRegistryScanStopOneKey", req, cb)
  }

  /**
   * 查询运行时运行时反弹shell白名单列表信息
   */
  async DescribeReverseShellWhiteLists(
    req: DescribeReverseShellWhiteListsRequest,
    cb?: (error: string, rep: DescribeReverseShellWhiteListsResponse) => void
  ): Promise<DescribeReverseShellWhiteListsResponse> {
    return this.request("DescribeReverseShellWhiteLists", req, cb)
  }

  /**
   * 查询本地镜像组件列表导出
   */
  async CreateComponentExportJob(
    req: CreateComponentExportJobRequest,
    cb?: (error: string, rep: CreateComponentExportJobResponse) => void
  ): Promise<CreateComponentExportJobResponse> {
    return this.request("CreateComponentExportJob", req, cb)
  }

  /**
   * 查询木马自动隔离样本下载链接
   */
  async DescribeVirusAutoIsolateSampleDownloadURL(
    req: DescribeVirusAutoIsolateSampleDownloadURLRequest,
    cb?: (error: string, rep: DescribeVirusAutoIsolateSampleDownloadURLResponse) => void
  ): Promise<DescribeVirusAutoIsolateSampleDownloadURLResponse> {
    return this.request("DescribeVirusAutoIsolateSampleDownloadURL", req, cb)
  }

  /**
   * 查询用户镜像仓库下的命令空间列表
   */
  async DescribeImageRegistryNamespaceList(
    req: DescribeImageRegistryNamespaceListRequest,
    cb?: (error: string, rep: DescribeImageRegistryNamespaceListResponse) => void
  ): Promise<DescribeImageRegistryNamespaceListResponse> {
    return this.request("DescribeImageRegistryNamespaceList", req, cb)
  }

  /**
   * 查询扫描忽略的漏洞列表
   */
  async DescribeScanIgnoreVulList(
    req: DescribeScanIgnoreVulListRequest,
    cb?: (error: string, rep: DescribeScanIgnoreVulListResponse) => void
  ): Promise<DescribeScanIgnoreVulListResponse> {
    return this.request("DescribeScanIgnoreVulList", req, cb)
  }

  /**
   * 查询安全日志接入对象列表
   */
  async DescribeSecLogJoinObjectList(
    req: DescribeSecLogJoinObjectListRequest,
    cb?: (error: string, rep: DescribeSecLogJoinObjectListResponse) => void
  ): Promise<DescribeSecLogJoinObjectListResponse> {
    return this.request("DescribeSecLogJoinObjectList", req, cb)
  }

  /**
   * 容器安全搜索查询容器组件列表
   */
  async DescribeAssetComponentList(
    req: DescribeAssetComponentListRequest,
    cb?: (error: string, rep: DescribeAssetComponentListResponse) => void
  ): Promise<DescribeAssetComponentListResponse> {
    return this.request("DescribeAssetComponentList", req, cb)
  }

  /**
   * 容器安全查询镜像扫描状态
   */
  async DescribeAssetImageScanStatus(
    req: DescribeAssetImageScanStatusRequest,
    cb?: (error: string, rep: DescribeAssetImageScanStatusResponse) => void
  ): Promise<DescribeAssetImageScanStatusResponse> {
    return this.request("DescribeAssetImageScanStatus", req, cb)
  }

  /**
   * 查询平行容器安装命令
   */
  async DescribeAgentDaemonSetCmd(
    req: DescribeAgentDaemonSetCmdRequest,
    cb?: (error: string, rep: DescribeAgentDaemonSetCmdResponse) => void
  ): Promise<DescribeAgentDaemonSetCmdResponse> {
    return this.request("DescribeAgentDaemonSetCmd", req, cb)
  }

  /**
   * 创建k8sApi异常规则导出任务
   */
  async CreateK8sApiAbnormalRuleExportJob(
    req: CreateK8sApiAbnormalRuleExportJobRequest,
    cb?: (error: string, rep: CreateK8sApiAbnormalRuleExportJobResponse) => void
  ): Promise<CreateK8sApiAbnormalRuleExportJobResponse> {
    return this.request("CreateK8sApiAbnormalRuleExportJob", req, cb)
  }

  /**
   * 容器网络集群网络策略创建自动发现任务
   */
  async CreateNetworkFirewallPolicyDiscover(
    req: CreateNetworkFirewallPolicyDiscoverRequest,
    cb?: (error: string, rep: CreateNetworkFirewallPolicyDiscoverResponse) => void
  ): Promise<CreateNetworkFirewallPolicyDiscoverResponse> {
    return this.request("CreateNetworkFirewallPolicyDiscover", req, cb)
  }

  /**
   * 创建集群检查任务，用户检查用户的集群相关风险项
   */
  async CreateClusterCheckTask(
    req: CreateClusterCheckTaskRequest,
    cb?: (error: string, rep: CreateClusterCheckTaskResponse) => void
  ): Promise<CreateClusterCheckTaskResponse> {
    return this.request("CreateClusterCheckTask", req, cb)
  }

  /**
   * 查询运行时访问控制事件列表
   */
  async DescribeAccessControlEvents(
    req: DescribeAccessControlEventsRequest,
    cb?: (error: string, rep: DescribeAccessControlEventsResponse) => void
  ): Promise<DescribeAccessControlEventsResponse> {
    return this.request("DescribeAccessControlEvents", req, cb)
  }

  /**
   * 查询恶意请求事件列表
   */
  async DescribeRiskDnsList(
    req: DescribeRiskDnsListRequest,
    cb?: (error: string, rep: DescribeRiskDnsListResponse) => void
  ): Promise<DescribeRiskDnsListResponse> {
    return this.request("DescribeRiskDnsList", req, cb)
  }

  /**
   * 运行时更新文件查杀设置
   */
  async ModifyVirusScanSetting(
    req: ModifyVirusScanSettingRequest,
    cb?: (error: string, rep: ModifyVirusScanSettingResponse) => void
  ): Promise<ModifyVirusScanSettingResponse> {
    return this.request("ModifyVirusScanSetting", req, cb)
  }

  /**
   * 查询安全日志投递kafka可选项
   */
  async DescribeSecLogDeliveryKafkaOptions(
    req: DescribeSecLogDeliveryKafkaOptionsRequest,
    cb?: (error: string, rep: DescribeSecLogDeliveryKafkaOptionsResponse) => void
  ): Promise<DescribeSecLogDeliveryKafkaOptionsResponse> {
    return this.request("DescribeSecLogDeliveryKafkaOptions", req, cb)
  }

  /**
   * 镜像仓库木马信息列表导出
   */
  async DescribeAssetImageRegistryVirusListExport(
    req: DescribeAssetImageRegistryVirusListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryVirusListExportResponse) => void
  ): Promise<DescribeAssetImageRegistryVirusListExportResponse> {
    return this.request("DescribeAssetImageRegistryVirusListExport", req, cb)
  }

  /**
   * 容器网络创建网络策略确认任务
   */
  async ConfirmNetworkFirewallPolicy(
    req: ConfirmNetworkFirewallPolicyRequest,
    cb?: (error: string, rep: ConfirmNetworkFirewallPolicyResponse) => void
  ): Promise<ConfirmNetworkFirewallPolicyResponse> {
    return this.request("ConfirmNetworkFirewallPolicy", req, cb)
  }

  /**
     * 移除安全合规忽略(资产+检测项)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyAssetSetToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
  async DeleteComplianceAssetPolicySetFromWhitelist(
    req: DeleteComplianceAssetPolicySetFromWhitelistRequest,
    cb?: (error: string, rep: DeleteComplianceAssetPolicySetFromWhitelistResponse) => void
  ): Promise<DeleteComplianceAssetPolicySetFromWhitelistResponse> {
    return this.request("DeleteComplianceAssetPolicySetFromWhitelist", req, cb)
  }

  /**
   * 查询本地镜像组件列表
   */
  async DescribeImageComponentList(
    req: DescribeImageComponentListRequest,
    cb?: (error: string, rep: DescribeImageComponentListResponse) => void
  ): Promise<DescribeImageComponentListResponse> {
    return this.request("DescribeImageComponentList", req, cb)
  }

  /**
   * 镜像仓库查询镜像统计信息
   */
  async DescribeAssetImageRegistrySummary(
    req: DescribeAssetImageRegistrySummaryRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistrySummaryResponse) => void
  ): Promise<DescribeAssetImageRegistrySummaryResponse> {
    return this.request("DescribeAssetImageRegistrySummary", req, cb)
  }

  /**
   * 容器网络创建网络策略更新任务
   */
  async UpdateNetworkFirewallPolicyDetail(
    req: UpdateNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: UpdateNetworkFirewallPolicyDetailResponse) => void
  ): Promise<UpdateNetworkFirewallPolicyDetailResponse> {
    return this.request("UpdateNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 查看镜像仓库资产更新进度状态
   */
  async DescribeAssetImageRegistryAssetStatus(
    req?: DescribeAssetImageRegistryAssetStatusRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryAssetStatusResponse) => void
  ): Promise<DescribeAssetImageRegistryAssetStatusResponse> {
    return this.request("DescribeAssetImageRegistryAssetStatus", req, cb)
  }

  /**
   * 镜像仓库仓库列表
   */
  async DescribeAssetImageRegistryRegistryList(
    req: DescribeAssetImageRegistryRegistryListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRegistryListResponse) => void
  ): Promise<DescribeAssetImageRegistryRegistryListResponse> {
    return this.request("DescribeAssetImageRegistryRegistryList", req, cb)
  }

  /**
   * 运行时文件查杀事件列表导出
   */
  async ExportVirusList(
    req: ExportVirusListRequest,
    cb?: (error: string, rep: ExportVirusListResponse) => void
  ): Promise<ExportVirusListResponse> {
    return this.request("ExportVirusList", req, cb)
  }

  /**
   * 查询单个集群的详细信息
   */
  async DescribeClusterDetail(
    req: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
  }

  /**
   * 镜像仓库查询木马病毒列表
   */
  async DescribeAssetImageRegistryVirusList(
    req: DescribeAssetImageRegistryVirusListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryVirusListResponse) => void
  ): Promise<DescribeAssetImageRegistryVirusListResponse> {
    return this.request("DescribeAssetImageRegistryVirusList", req, cb)
  }

  /**
   * 镜像仓库更新定时任务
   */
  async UpdateImageRegistryTimingScanTask(
    req: UpdateImageRegistryTimingScanTaskRequest,
    cb?: (error: string, rep: UpdateImageRegistryTimingScanTaskResponse) => void
  ): Promise<UpdateImageRegistryTimingScanTaskResponse> {
    return this.request("UpdateImageRegistryTimingScanTask", req, cb)
  }

  /**
   * 镜像仓库创建镜像一键扫描任务
   */
  async CreateAssetImageRegistryScanTaskOneKey(
    req: CreateAssetImageRegistryScanTaskOneKeyRequest,
    cb?: (error: string, rep: CreateAssetImageRegistryScanTaskOneKeyResponse) => void
  ): Promise<CreateAssetImageRegistryScanTaskOneKeyResponse> {
    return this.request("CreateAssetImageRegistryScanTaskOneKey", req, cb)
  }

  /**
   * 修改运行时访问控制策略的状态，启用或者禁用
   */
  async ModifyAccessControlRuleStatus(
    req: ModifyAccessControlRuleStatusRequest,
    cb?: (error: string, rep: ModifyAccessControlRuleStatusResponse) => void
  ): Promise<ModifyAccessControlRuleStatusResponse> {
    return this.request("ModifyAccessControlRuleStatus", req, cb)
  }

  /**
   * 容器网络集群查看Yaml网络策略详情
   */
  async DescribeNetworkFirewallPolicyYamlDetail(
    req: DescribeNetworkFirewallPolicyYamlDetailRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPolicyYamlDetailResponse) => void
  ): Promise<DescribeNetworkFirewallPolicyYamlDetailResponse> {
    return this.request("DescribeNetworkFirewallPolicyYamlDetail", req, cb)
  }

  /**
     * 接口已废弃

DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     */
  async DescribeEscapeEventsExport(
    req: DescribeEscapeEventsExportRequest,
    cb?: (error: string, rep: DescribeEscapeEventsExportResponse) => void
  ): Promise<DescribeEscapeEventsExportResponse> {
    return this.request("DescribeEscapeEventsExport", req, cb)
  }

  /**
   * 容器网络创建检查Yaml网络策略任务
   */
  async CheckNetworkFirewallPolicyYaml(
    req: CheckNetworkFirewallPolicyYamlRequest,
    cb?: (error: string, rep: CheckNetworkFirewallPolicyYamlResponse) => void
  ): Promise<CheckNetworkFirewallPolicyYamlResponse> {
    return this.request("CheckNetworkFirewallPolicyYaml", req, cb)
  }

  /**
   * 容器网络更新Yaml网络策略任务
   */
  async UpdateNetworkFirewallPolicyYamlDetail(
    req: UpdateNetworkFirewallPolicyYamlDetailRequest,
    cb?: (error: string, rep: UpdateNetworkFirewallPolicyYamlDetailResponse) => void
  ): Promise<UpdateNetworkFirewallPolicyYamlDetailResponse> {
    return this.request("UpdateNetworkFirewallPolicyYamlDetail", req, cb)
  }

  /**
   * 查询集群网络空间列表
   */
  async DescribeNetworkFirewallNamespaceList(
    req: DescribeNetworkFirewallNamespaceListRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallNamespaceListResponse) => void
  ): Promise<DescribeNetworkFirewallNamespaceListResponse> {
    return this.request("DescribeNetworkFirewallNamespaceList", req, cb)
  }

  /**
     * 接口已废弃

容器安全搜索查询镜像列表导出
     */
  async DescribeAssetImageListExport(
    req: DescribeAssetImageListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageListExportResponse) => void
  ): Promise<DescribeAssetImageListExportResponse> {
    return this.request("DescribeAssetImageListExport", req, cb)
  }

  /**
   * 获取镜像扫描设置信息
   */
  async DescribeAssetImageScanSetting(
    req?: DescribeAssetImageScanSettingRequest,
    cb?: (error: string, rep: DescribeAssetImageScanSettingResponse) => void
  ): Promise<DescribeAssetImageScanSettingResponse> {
    return this.request("DescribeAssetImageScanSetting", req, cb)
  }

  /**
   * 安装检查组件，创建防护容器
   */
  async CreateCheckComponent(
    req: CreateCheckComponentRequest,
    cb?: (error: string, rep: CreateCheckComponentResponse) => void
  ): Promise<CreateCheckComponentResponse> {
    return this.request("CreateCheckComponent", req, cb)
  }

  /**
   * 设置检测模式和自动检查
   */
  async SetCheckMode(
    req: SetCheckModeRequest,
    cb?: (error: string, rep: SetCheckModeResponse) => void
  ): Promise<SetCheckModeResponse> {
    return this.request("SetCheckMode", req, cb)
  }

  /**
   * 查询最新披露漏洞列表
   */
  async DescribeNewestVul(
    req?: DescribeNewestVulRequest,
    cb?: (error: string, rep: DescribeNewestVulResponse) => void
  ): Promise<DescribeNewestVulResponse> {
    return this.request("DescribeNewestVul", req, cb)
  }

  /**
   * 查询运行时高危系统调用系统名称列表
   */
  async DescribeRiskSyscallNames(
    req?: DescribeRiskSyscallNamesRequest,
    cb?: (error: string, rep: DescribeRiskSyscallNamesResponse) => void
  ): Promise<DescribeRiskSyscallNamesResponse> {
    return this.request("DescribeRiskSyscallNames", req, cb)
  }

  /**
   * 修改k8sapi异常规则信息
   */
  async ModifyK8sApiAbnormalRuleInfo(
    req: ModifyK8sApiAbnormalRuleInfoRequest,
    cb?: (error: string, rep: ModifyK8sApiAbnormalRuleInfoResponse) => void
  ): Promise<ModifyK8sApiAbnormalRuleInfoResponse> {
    return this.request("ModifyK8sApiAbnormalRuleInfo", req, cb)
  }

  /**
   * 查询合规检测的定时任务列表
   */
  async DescribeCompliancePeriodTaskList(
    req: DescribeCompliancePeriodTaskListRequest,
    cb?: (error: string, rep: DescribeCompliancePeriodTaskListResponse) => void
  ): Promise<DescribeCompliancePeriodTaskListResponse> {
    return this.request("DescribeCompliancePeriodTaskList", req, cb)
  }

  /**
   * 删除运行访问控制策略
   */
  async DeleteAccessControlRules(
    req: DeleteAccessControlRulesRequest,
    cb?: (error: string, rep: DeleteAccessControlRulesResponse) => void
  ): Promise<DeleteAccessControlRulesResponse> {
    return this.request("DeleteAccessControlRules", req, cb)
  }

  /**
   * 创建漏洞防御主机导出任务
   */
  async CreateVulDefenceHostExportJob(
    req: CreateVulDefenceHostExportJobRequest,
    cb?: (error: string, rep: CreateVulDefenceHostExportJobResponse) => void
  ): Promise<CreateVulDefenceHostExportJobResponse> {
    return this.request("CreateVulDefenceHostExportJob", req, cb)
  }

  /**
   * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
   */
  async ModifyEscapeEventStatus(
    req: ModifyEscapeEventStatusRequest,
    cb?: (error: string, rep: ModifyEscapeEventStatusResponse) => void
  ): Promise<ModifyEscapeEventStatusResponse> {
    return this.request("ModifyEscapeEventStatus", req, cb)
  }

  /**
   * 统计异常进程各威胁等级待处理事件数
   */
  async DescribeAbnormalProcessLevelSummary(
    req?: DescribeAbnormalProcessLevelSummaryRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessLevelSummaryResponse) => void
  ): Promise<DescribeAbnormalProcessLevelSummaryResponse> {
    return this.request("DescribeAbnormalProcessLevelSummary", req, cb)
  }

  /**
   * DescribePurchaseStateInfo 查询容器安全服务已购买信息
   */
  async DescribePurchaseStateInfo(
    req?: DescribePurchaseStateInfoRequest,
    cb?: (error: string, rep: DescribePurchaseStateInfoResponse) => void
  ): Promise<DescribePurchaseStateInfoResponse> {
    return this.request("DescribePurchaseStateInfo", req, cb)
  }

  /**
   * 查询运行时高危系统调用白名单详细信息
   */
  async DescribeRiskSyscallWhiteListDetail(
    req: DescribeRiskSyscallWhiteListDetailRequest,
    cb?: (error: string, rep: DescribeRiskSyscallWhiteListDetailResponse) => void
  ): Promise<DescribeRiskSyscallWhiteListDetailResponse> {
    return this.request("DescribeRiskSyscallWhiteListDetail", req, cb)
  }

  /**
   * 镜像仓库镜像仓库列表详情
   */
  async DescribeAssetImageRegistryDetail(
    req: DescribeAssetImageRegistryDetailRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryDetailResponse) => void
  ): Promise<DescribeAssetImageRegistryDetailResponse> {
    return this.request("DescribeAssetImageRegistryDetail", req, cb)
  }

  /**
   * 修改逃逸白名单
   */
  async ModifyEscapeWhiteList(
    req: ModifyEscapeWhiteListRequest,
    cb?: (error: string, rep: ModifyEscapeWhiteListResponse) => void
  ): Promise<ModifyEscapeWhiteListResponse> {
    return this.request("ModifyEscapeWhiteList", req, cb)
  }

  /**
   * 查询木马一键检测预估超时时间
   */
  async DescribeVirusManualScanEstimateTimeout(
    req: DescribeVirusManualScanEstimateTimeoutRequest,
    cb?: (error: string, rep: DescribeVirusManualScanEstimateTimeoutResponse) => void
  ): Promise<DescribeVirusManualScanEstimateTimeoutResponse> {
    return this.request("DescribeVirusManualScanEstimateTimeout", req, cb)
  }

  /**
   * 运行时高危系统调用列表导出
   */
  async DescribeRiskSyscallEventsExport(
    req: DescribeRiskSyscallEventsExportRequest,
    cb?: (error: string, rep: DescribeRiskSyscallEventsExportResponse) => void
  ): Promise<DescribeRiskSyscallEventsExportResponse> {
    return this.request("DescribeRiskSyscallEventsExport", req, cb)
  }

  /**
   * 查询本地镜像自动授权规则
   */
  async DescribeImageAutoAuthorizedRule(
    req?: DescribeImageAutoAuthorizedRuleRequest,
    cb?: (error: string, rep: DescribeImageAutoAuthorizedRuleResponse) => void
  ): Promise<DescribeImageAutoAuthorizedRuleResponse> {
    return this.request("DescribeImageAutoAuthorizedRule", req, cb)
  }

  /**
   * 查询运行时异常策略详细信息
   */
  async DescribeAbnormalProcessRuleDetail(
    req: DescribeAbnormalProcessRuleDetailRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessRuleDetailResponse) => void
  ): Promise<DescribeAbnormalProcessRuleDetailResponse> {
    return this.request("DescribeAbnormalProcessRuleDetail", req, cb)
  }

  /**
   * 创建支持防御的漏洞导出任务
   */
  async CreateDefenceVulExportJob(
    req: CreateDefenceVulExportJobRequest,
    cb?: (error: string, rep: CreateDefenceVulExportJobResponse) => void
  ): Promise<CreateDefenceVulExportJobResponse> {
    return this.request("CreateDefenceVulExportJob", req, cb)
  }

  /**
   * DescribeValueAddedSrvInfo查询增值服务需购买信息
   */
  async DescribeValueAddedSrvInfo(
    req?: DescribeValueAddedSrvInfoRequest,
    cb?: (error: string, rep: DescribeValueAddedSrvInfoResponse) => void
  ): Promise<DescribeValueAddedSrvInfoResponse> {
    return this.request("DescribeValueAddedSrvInfo", req, cb)
  }

  /**
   * 运行时更新木马文件事件状态
   */
  async ModifyVirusFileStatus(
    req: ModifyVirusFileStatusRequest,
    cb?: (error: string, rep: ModifyVirusFileStatusResponse) => void
  ): Promise<ModifyVirusFileStatusResponse> {
    return this.request("ModifyVirusFileStatus", req, cb)
  }

  /**
   * 添加编辑运行时反弹shell白名单
   */
  async AddEditReverseShellWhiteList(
    req: AddEditReverseShellWhiteListRequest,
    cb?: (error: string, rep: AddEditReverseShellWhiteListResponse) => void
  ): Promise<AddEditReverseShellWhiteListResponse> {
    return this.request("AddEditReverseShellWhiteList", req, cb)
  }

  /**
   * 查询运行时反弹shell事件详细信息
   */
  async DescribeReverseShellDetail(
    req: DescribeReverseShellDetailRequest,
    cb?: (error: string, rep: DescribeReverseShellDetailResponse) => void
  ): Promise<DescribeReverseShellDetailResponse> {
    return this.request("DescribeReverseShellDetail", req, cb)
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
   * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
   */
  async DescribeAssetImageBindRuleInfo(
    req: DescribeAssetImageBindRuleInfoRequest,
    cb?: (error: string, rep: DescribeAssetImageBindRuleInfoResponse) => void
  ): Promise<DescribeAssetImageBindRuleInfoResponse> {
    return this.request("DescribeAssetImageBindRuleInfo", req, cb)
  }

  /**
   * 取消漏洞扫描忽略漏洞
   */
  async DeleteIgnoreVul(
    req: DeleteIgnoreVulRequest,
    cb?: (error: string, rep: DeleteIgnoreVulResponse) => void
  ): Promise<DeleteIgnoreVulResponse> {
    return this.request("DeleteIgnoreVul", req, cb)
  }

  /**
   * 创建本地镜像木马列表导出任务
   */
  async CreateAssetImageVirusExportJob(
    req: CreateAssetImageVirusExportJobRequest,
    cb?: (error: string, rep: CreateAssetImageVirusExportJobResponse) => void
  ): Promise<CreateAssetImageVirusExportJobResponse> {
    return this.request("CreateAssetImageVirusExportJob", req, cb)
  }

  /**
   * 容器网络查询网络策略自动发现任务进度
   */
  async DescribeNetworkFirewallPolicyDiscover(
    req: DescribeNetworkFirewallPolicyDiscoverRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPolicyDiscoverResponse) => void
  ): Promise<DescribeNetworkFirewallPolicyDiscoverResponse> {
    return this.request("DescribeNetworkFirewallPolicyDiscover", req, cb)
  }

  /**
   * 查询安全日志投递cls可选项
   */
  async DescribeSecLogDeliveryClsOptions(
    req: DescribeSecLogDeliveryClsOptionsRequest,
    cb?: (error: string, rep: DescribeSecLogDeliveryClsOptionsResponse) => void
  ): Promise<DescribeSecLogDeliveryClsOptionsResponse> {
    return this.request("DescribeSecLogDeliveryClsOptions", req, cb)
  }

  /**
   * 查询当天未授权核数趋势
   */
  async DescribeUnauthorizedCoresTendency(
    req?: DescribeUnauthorizedCoresTendencyRequest,
    cb?: (error: string, rep: DescribeUnauthorizedCoresTendencyResponse) => void
  ): Promise<DescribeUnauthorizedCoresTendencyResponse> {
    return this.request("DescribeUnauthorizedCoresTendency", req, cb)
  }

  /**
   * 查询检查结果总览，返回受影响的节点数量，返回7天的数据，总共7个
   */
  async DescribeTaskResultSummary(
    req?: DescribeTaskResultSummaryRequest,
    cb?: (error: string, rep: DescribeTaskResultSummaryResponse) => void
  ): Promise<DescribeTaskResultSummaryResponse> {
    return this.request("DescribeTaskResultSummary", req, cb)
  }

  /**
   * 查询容器详细信息
   */
  async DescribeAssetContainerDetail(
    req: DescribeAssetContainerDetailRequest,
    cb?: (error: string, rep: DescribeAssetContainerDetailResponse) => void
  ): Promise<DescribeAssetContainerDetailResponse> {
    return this.request("DescribeAssetContainerDetail", req, cb)
  }

  /**
   * 镜像仓库查询镜像高危行为列表
   */
  async DescribeAssetImageRegistryRiskInfoList(
    req: DescribeAssetImageRegistryRiskInfoListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRiskInfoListResponse) => void
  ): Promise<DescribeAssetImageRegistryRiskInfoListResponse> {
    return this.request("DescribeAssetImageRegistryRiskInfoList", req, cb)
  }

  /**
   * ModifyEscapeRule  修改容器逃逸扫描规则信息
   */
  async ModifyEscapeRule(
    req: ModifyEscapeRuleRequest,
    cb?: (error: string, rep: ModifyEscapeRuleResponse) => void
  ): Promise<ModifyEscapeRuleResponse> {
    return this.request("ModifyEscapeRule", req, cb)
  }

  /**
   * 按照 检测项 → 资产 的两级层次展开的第一层级：检测项层级。
   */
  async DescribeCompliancePolicyItemAffectedSummary(
    req: DescribeCompliancePolicyItemAffectedSummaryRequest,
    cb?: (error: string, rep: DescribeCompliancePolicyItemAffectedSummaryResponse) => void
  ): Promise<DescribeCompliancePolicyItemAffectedSummaryResponse> {
    return this.request("DescribeCompliancePolicyItemAffectedSummary", req, cb)
  }

  /**
   * 查询刷新任务
   */
  async DescribeRefreshTask(
    req: DescribeRefreshTaskRequest,
    cb?: (error: string, rep: DescribeRefreshTaskResponse) => void
  ): Promise<DescribeRefreshTaskResponse> {
    return this.request("DescribeRefreshTask", req, cb)
  }

  /**
   * 容器网络集群下发刷新任务
   */
  async CreateNetworkFirewallClusterRefresh(
    req?: CreateNetworkFirewallClusterRefreshRequest,
    cb?: (error: string, rep: CreateNetworkFirewallClusterRefreshResponse) => void
  ): Promise<CreateNetworkFirewallClusterRefreshResponse> {
    return this.request("CreateNetworkFirewallClusterRefresh", req, cb)
  }

  /**
   * 查询运行时运行时高危系统调用列表信息
   */
  async DescribeRiskSyscallEvents(
    req: DescribeRiskSyscallEventsRequest,
    cb?: (error: string, rep: DescribeRiskSyscallEventsResponse) => void
  ): Promise<DescribeRiskSyscallEventsResponse> {
    return this.request("DescribeRiskSyscallEvents", req, cb)
  }

  /**
     * 新增安全合规忽略(资产+检测项列表)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
  async AddComplianceAssetPolicySetToWhitelist(
    req: AddComplianceAssetPolicySetToWhitelistRequest,
    cb?: (error: string, rep: AddComplianceAssetPolicySetToWhitelistResponse) => void
  ): Promise<AddComplianceAssetPolicySetToWhitelistResponse> {
    return this.request("AddComplianceAssetPolicySetToWhitelist", req, cb)
  }

  /**
   * 修改安全日志接入对象
   */
  async ModifySecLogJoinObjects(
    req: ModifySecLogJoinObjectsRequest,
    cb?: (error: string, rep: ModifySecLogJoinObjectsResponse) => void
  ): Promise<ModifySecLogJoinObjectsResponse> {
    return this.request("ModifySecLogJoinObjects", req, cb)
  }

  /**
   * 查询容器资产概览信息
   */
  async DescribeContainerAssetSummary(
    req?: DescribeContainerAssetSummaryRequest,
    cb?: (error: string, rep: DescribeContainerAssetSummaryResponse) => void
  ): Promise<DescribeContainerAssetSummaryResponse> {
    return this.request("DescribeContainerAssetSummary", req, cb)
  }

  /**
   * 查询超级节点列表
   */
  async DescribeAssetSuperNodeList(
    req: DescribeAssetSuperNodeListRequest,
    cb?: (error: string, rep: DescribeAssetSuperNodeListResponse) => void
  ): Promise<DescribeAssetSuperNodeListResponse> {
    return this.request("DescribeAssetSuperNodeList", req, cb)
  }

  /**
   * 镜像仓库查看定时任务
   */
  async DescribeImageRegistryTimingScanTask(
    req?: DescribeImageRegistryTimingScanTaskRequest,
    cb?: (error: string, rep: DescribeImageRegistryTimingScanTaskResponse) => void
  ): Promise<DescribeImageRegistryTimingScanTaskResponse> {
    return this.request("DescribeImageRegistryTimingScanTask", req, cb)
  }

  /**
   * 查询运行时反弹shell事件列表信息导出
   */
  async DescribeReverseShellEventsExport(
    req: DescribeReverseShellEventsExportRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsExportResponse) => void
  ): Promise<DescribeReverseShellEventsExportResponse> {
    return this.request("DescribeReverseShellEventsExport", req, cb)
  }

  /**
   * 容器安全查询db服务列表
   */
  async DescribeAssetDBServiceList(
    req: DescribeAssetDBServiceListRequest,
    cb?: (error: string, rep: DescribeAssetDBServiceListResponse) => void
  ): Promise<DescribeAssetDBServiceListResponse> {
    return this.request("DescribeAssetDBServiceList", req, cb)
  }

  /**
   * 查询漏洞影响的镜像列表
   */
  async DescribeVulImageList(
    req: DescribeVulImageListRequest,
    cb?: (error: string, rep: DescribeVulImageListResponse) => void
  ): Promise<DescribeVulImageListResponse> {
    return this.request("DescribeVulImageList", req, cb)
  }

  /**
   * 修改运行时异常进程策略的开启关闭状态
   */
  async ModifyAbnormalProcessRuleStatus(
    req: ModifyAbnormalProcessRuleStatusRequest,
    cb?: (error: string, rep: ModifyAbnormalProcessRuleStatusResponse) => void
  ): Promise<ModifyAbnormalProcessRuleStatusResponse> {
    return this.request("ModifyAbnormalProcessRuleStatus", req, cb)
  }

  /**
   * 查询漏洞防御事件列表
   */
  async DescribeVulDefenceEvent(
    req: DescribeVulDefenceEventRequest,
    cb?: (error: string, rep: DescribeVulDefenceEventResponse) => void
  ): Promise<DescribeVulDefenceEventResponse> {
    return this.request("DescribeVulDefenceEvent", req, cb)
  }

  /**
   * 查询漏洞扫描忽略的仓库镜像列表
   */
  async DescribeVulIgnoreRegistryImageList(
    req: DescribeVulIgnoreRegistryImageListRequest,
    cb?: (error: string, rep: DescribeVulIgnoreRegistryImageListResponse) => void
  ): Promise<DescribeVulIgnoreRegistryImageListResponse> {
    return this.request("DescribeVulIgnoreRegistryImageList", req, cb)
  }

  /**
   * 查询漏洞扫描任务信息
   */
  async DescribeVulScanInfo(
    req: DescribeVulScanInfoRequest,
    cb?: (error: string, rep: DescribeVulScanInfoResponse) => void
  ): Promise<DescribeVulScanInfoResponse> {
    return this.request("DescribeVulScanInfo", req, cb)
  }

  /**
   * 查询漏洞镜像统计
   */
  async DescribeVulImageSummary(
    req?: DescribeVulImageSummaryRequest,
    cb?: (error: string, rep: DescribeVulImageSummaryResponse) => void
  ): Promise<DescribeVulImageSummaryResponse> {
    return this.request("DescribeVulImageSummary", req, cb)
  }

  /**
   * 创建web漏洞导出任务
   */
  async CreateWebVulExportJob(
    req: CreateWebVulExportJobRequest,
    cb?: (error: string, rep: CreateWebVulExportJobResponse) => void
  ): Promise<CreateWebVulExportJobResponse> {
    return this.request("CreateWebVulExportJob", req, cb)
  }

  /**
   * 容器网络创建网络策略更新并发布任务
   */
  async UpdateAndPublishNetworkFirewallPolicyDetail(
    req: UpdateAndPublishNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: UpdateAndPublishNetworkFirewallPolicyDetailResponse) => void
  ): Promise<UpdateAndPublishNetworkFirewallPolicyDetailResponse> {
    return this.request("UpdateAndPublishNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 隔离容器网络状态
   */
  async ModifyContainerNetStatus(
    req: ModifyContainerNetStatusRequest,
    cb?: (error: string, rep: ModifyContainerNetStatusResponse) => void
  ): Promise<ModifyContainerNetStatusResponse> {
    return this.request("ModifyContainerNetStatus", req, cb)
  }

  /**
   * 查询容器安全本地镜像风险趋势
   */
  async DescribeImageRiskTendency(
    req: DescribeImageRiskTendencyRequest,
    cb?: (error: string, rep: DescribeImageRiskTendencyResponse) => void
  ): Promise<DescribeImageRiskTendencyResponse> {
    return this.request("DescribeImageRiskTendency", req, cb)
  }

  /**
   * 查询agent安装命令
   */
  async DescribeAgentInstallCommand(
    req: DescribeAgentInstallCommandRequest,
    cb?: (error: string, rep: DescribeAgentInstallCommandResponse) => void
  ): Promise<DescribeAgentInstallCommandResponse> {
    return this.request("DescribeAgentInstallCommand", req, cb)
  }

  /**
   * 查询导出接口进度
   */
  async DescribeExportJobResult(
    req: DescribeExportJobResultRequest,
    cb?: (error: string, rep: DescribeExportJobResultResponse) => void
  ): Promise<DescribeExportJobResultResponse> {
    return this.request("DescribeExportJobResult", req, cb)
  }

  /**
   * 容器安全创建镜像扫描任务
   */
  async CreateAssetImageScanTask(
    req: CreateAssetImageScanTaskRequest,
    cb?: (error: string, rep: CreateAssetImageScanTaskResponse) => void
  ): Promise<CreateAssetImageScanTaskResponse> {
    return this.request("CreateAssetImageScanTask", req, cb)
  }

  /**
   * 创建应急漏洞导出任务
   */
  async CreateEmergencyVulExportJob(
    req: CreateEmergencyVulExportJobRequest,
    cb?: (error: string, rep: CreateEmergencyVulExportJobResponse) => void
  ): Promise<CreateEmergencyVulExportJobResponse> {
    return this.request("CreateEmergencyVulExportJob", req, cb)
  }

  /**
   * 查询正在一键扫描的镜像扫描taskid
   */
  async DescribeAssetImageScanTask(
    req?: DescribeAssetImageScanTaskRequest,
    cb?: (error: string, rep: DescribeAssetImageScanTaskResponse) => void
  ): Promise<DescribeAssetImageScanTaskResponse> {
    return this.request("DescribeAssetImageScanTask", req, cb)
  }

  /**
   * 镜像仓库镜像列表导出
   */
  async DescribeAssetImageRegistryListExport(
    req: DescribeAssetImageRegistryListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryListExportResponse) => void
  ): Promise<DescribeAssetImageRegistryListExportResponse> {
    return this.request("DescribeAssetImageRegistryListExport", req, cb)
  }

  /**
   * 查询漏洞防御插件列表
   */
  async DescribeVulDefencePlugin(
    req: DescribeVulDefencePluginRequest,
    cb?: (error: string, rep: DescribeVulDefencePluginResponse) => void
  ): Promise<DescribeVulDefencePluginResponse> {
    return this.request("DescribeVulDefencePlugin", req, cb)
  }

  /**
   * 查询k8s api异常事件列表
   */
  async DescribeK8sApiAbnormalEventList(
    req: DescribeK8sApiAbnormalEventListRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalEventListResponse) => void
  ): Promise<DescribeK8sApiAbnormalEventListResponse> {
    return this.request("DescribeK8sApiAbnormalEventList", req, cb)
  }

  /**
   * 查询上次任务的资产通过率汇总信息
   */
  async DescribeComplianceTaskAssetSummary(
    req: DescribeComplianceTaskAssetSummaryRequest,
    cb?: (error: string, rep: DescribeComplianceTaskAssetSummaryResponse) => void
  ): Promise<DescribeComplianceTaskAssetSummaryResponse> {
    return this.request("DescribeComplianceTaskAssetSummary", req, cb)
  }

  /**
   * 运行时更新文件查杀实时监控设置
   */
  async ModifyVirusMonitorSetting(
    req: ModifyVirusMonitorSettingRequest,
    cb?: (error: string, rep: ModifyVirusMonitorSettingResponse) => void
  ): Promise<ModifyVirusMonitorSettingResponse> {
    return this.request("ModifyVirusMonitorSetting", req, cb)
  }

  /**
   * 查询运行访问控制策略列表信息
   */
  async DescribeAccessControlRules(
    req: DescribeAccessControlRulesRequest,
    cb?: (error: string, rep: DescribeAccessControlRulesResponse) => void
  ): Promise<DescribeAccessControlRulesResponse> {
    return this.request("DescribeAccessControlRules", req, cb)
  }

  /**
   * 容器安全搜索查询镜像木马列表导出
   */
  async DescribeAssetImageVirusListExport(
    req: DescribeAssetImageVirusListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageVirusListExportResponse) => void
  ): Promise<DescribeAssetImageVirusListExportResponse> {
    return this.request("DescribeAssetImageVirusListExport", req, cb)
  }

  /**
   * 搜索查询容器列表
   */
  async DescribeAssetContainerList(
    req: DescribeAssetContainerListRequest,
    cb?: (error: string, rep: DescribeAssetContainerListResponse) => void
  ): Promise<DescribeAssetContainerListResponse> {
    return this.request("DescribeAssetContainerList", req, cb)
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
   * DescribePostPayDetail  查询后付费详情
   */
  async DescribePostPayDetail(
    req: DescribePostPayDetailRequest,
    cb?: (error: string, rep: DescribePostPayDetailResponse) => void
  ): Promise<DescribePostPayDetailResponse> {
    return this.request("DescribePostPayDetail", req, cb)
  }

  /**
   * 查询超级节点pod列表
   */
  async DescribeSuperNodePodList(
    req: DescribeSuperNodePodListRequest,
    cb?: (error: string, rep: DescribeSuperNodePodListResponse) => void
  ): Promise<DescribeSuperNodePodListResponse> {
    return this.request("DescribeSuperNodePodList", req, cb)
  }

  /**
   * 容器网络创建Yaml网络策略添加任务
   */
  async AddNetworkFirewallPolicyYamlDetail(
    req: AddNetworkFirewallPolicyYamlDetailRequest,
    cb?: (error: string, rep: AddNetworkFirewallPolicyYamlDetailResponse) => void
  ): Promise<AddNetworkFirewallPolicyYamlDetailResponse> {
    return this.request("AddNetworkFirewallPolicyYamlDetail", req, cb)
  }

  /**
   * 删除运行时反弹shell事件
   */
  async DeleteReverseShellEvents(
    req: DeleteReverseShellEventsRequest,
    cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void
  ): Promise<DeleteReverseShellEventsResponse> {
    return this.request("DeleteReverseShellEvents", req, cb)
  }

  /**
   * 查看单个镜像仓库详细信息
   */
  async DescribeAssetImageRegistryRegistryDetail(
    req: DescribeAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<DescribeAssetImageRegistryRegistryDetailResponse> {
    return this.request("DescribeAssetImageRegistryRegistryDetail", req, cb)
  }

  /**
   * 新增逃逸白名单
   */
  async AddEscapeWhiteList(
    req: AddEscapeWhiteListRequest,
    cb?: (error: string, rep: AddEscapeWhiteListResponse) => void
  ): Promise<AddEscapeWhiteListResponse> {
    return this.request("AddEscapeWhiteList", req, cb)
  }

  /**
   * 创建镜像导出任务
   */
  async CreateImageExportJob(
    req: CreateImageExportJobRequest,
    cb?: (error: string, rep: CreateImageExportJobResponse) => void
  ): Promise<CreateImageExportJobResponse> {
    return this.request("CreateImageExportJob", req, cb)
  }

  /**
   * 查询安全日志投递Cls配置
   */
  async DescribeSecLogDeliveryClsSetting(
    req?: DescribeSecLogDeliveryClsSettingRequest,
    cb?: (error: string, rep: DescribeSecLogDeliveryClsSettingResponse) => void
  ): Promise<DescribeSecLogDeliveryClsSettingResponse> {
    return this.request("DescribeSecLogDeliveryClsSetting", req, cb)
  }

  /**
   * 查询运行时文件查杀事件列表
   */
  async DescribeVirusList(
    req: DescribeVirusListRequest,
    cb?: (error: string, rep: DescribeVirusListResponse) => void
  ): Promise<DescribeVirusListResponse> {
    return this.request("DescribeVirusList", req, cb)
  }

  /**
   * 容器安全停止镜像扫描
   */
  async ModifyAssetImageScanStop(
    req: ModifyAssetImageScanStopRequest,
    cb?: (error: string, rep: ModifyAssetImageScanStopResponse) => void
  ): Promise<ModifyAssetImageScanStopResponse> {
    return this.request("ModifyAssetImageScanStop", req, cb)
  }

  /**
   * 重新检测选定的资产
   */
  async ScanComplianceAssets(
    req: ScanComplianceAssetsRequest,
    cb?: (error: string, rep: ScanComplianceAssetsResponse) => void
  ): Promise<ScanComplianceAssetsResponse> {
    return this.request("ScanComplianceAssets", req, cb)
  }

  /**
   * 修改k8sapi异常事件状态
   */
  async ModifyK8sApiAbnormalEventStatus(
    req: ModifyK8sApiAbnormalEventStatusRequest,
    cb?: (error: string, rep: ModifyK8sApiAbnormalEventStatusResponse) => void
  ): Promise<ModifyK8sApiAbnormalEventStatusResponse> {
    return this.request("ModifyK8sApiAbnormalEventStatus", req, cb)
  }

  /**
   * 新增漏洞扫描忽略漏洞
   */
  async AddIgnoreVul(
    req: AddIgnoreVulRequest,
    cb?: (error: string, rep: AddIgnoreVulResponse) => void
  ): Promise<AddIgnoreVulResponse> {
    return this.request("AddIgnoreVul", req, cb)
  }

  /**
   * 查询所有检查项接口，返回总数和检查项列表
   */
  async DescribeCheckItemList(
    req: DescribeCheckItemListRequest,
    cb?: (error: string, rep: DescribeCheckItemListResponse) => void
  ): Promise<DescribeCheckItemListResponse> {
    return this.request("DescribeCheckItemList", req, cb)
  }

  /**
   * 创建系统漏洞导出任务
   */
  async CreateSystemVulExportJob(
    req: CreateSystemVulExportJobRequest,
    cb?: (error: string, rep: CreateSystemVulExportJobResponse) => void
  ): Promise<CreateSystemVulExportJobResponse> {
    return this.request("CreateSystemVulExportJob", req, cb)
  }

  /**
   * 运行时查询木马文件信息
   */
  async DescribeVirusDetail(
    req: DescribeVirusDetailRequest,
    cb?: (error: string, rep: DescribeVirusDetailResponse) => void
  ): Promise<DescribeVirusDetailResponse> {
    return this.request("DescribeVirusDetail", req, cb)
  }

  /**
   * 查询本地镜像漏洞列表导出
   */
  async CreateVulExportJob(
    req: CreateVulExportJobRequest,
    cb?: (error: string, rep: CreateVulExportJobResponse) => void
  ): Promise<CreateVulExportJobResponse> {
    return this.request("CreateVulExportJob", req, cb)
  }

  /**
   * 查询白名单列表
   */
  async DescribeComplianceWhitelistItemList(
    req: DescribeComplianceWhitelistItemListRequest,
    cb?: (error: string, rep: DescribeComplianceWhitelistItemListResponse) => void
  ): Promise<DescribeComplianceWhitelistItemListResponse> {
    return this.request("DescribeComplianceWhitelistItemList", req, cb)
  }

  /**
   * 查询集群网络策略列表
   */
  async DescribeNetworkFirewallPolicyList(
    req: DescribeNetworkFirewallPolicyListRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPolicyListResponse) => void
  ): Promise<DescribeNetworkFirewallPolicyListResponse> {
    return this.request("DescribeNetworkFirewallPolicyList", req, cb)
  }

  /**
   * 镜像仓库资产刷新
   */
  async SyncAssetImageRegistryAsset(
    req: SyncAssetImageRegistryAssetRequest,
    cb?: (error: string, rep: SyncAssetImageRegistryAssetResponse) => void
  ): Promise<SyncAssetImageRegistryAssetResponse> {
    return this.request("SyncAssetImageRegistryAsset", req, cb)
  }

  /**
   * 创建合规检查任务，在资产级别触发重新检测时使用。
   */
  async CreateComplianceTask(
    req: CreateComplianceTaskRequest,
    cb?: (error: string, rep: CreateComplianceTaskResponse) => void
  ): Promise<CreateComplianceTaskResponse> {
    return this.request("CreateComplianceTask", req, cb)
  }

  /**
   * 按照 资产 → 检测项 二层结构展示的信息。这里查询第一层 资产的通过率汇总信息。
   */
  async DescribeComplianceScanFailedAssetList(
    req: DescribeComplianceScanFailedAssetListRequest,
    cb?: (error: string, rep: DescribeComplianceScanFailedAssetListResponse) => void
  ): Promise<DescribeComplianceScanFailedAssetListResponse> {
    return this.request("DescribeComplianceScanFailedAssetList", req, cb)
  }

  /**
   * 查询k8sapi 异常规则中范围列表
   */
  async DescribeK8sApiAbnormalRuleScopeList(
    req: DescribeK8sApiAbnormalRuleScopeListRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalRuleScopeListResponse) => void
  ): Promise<DescribeK8sApiAbnormalRuleScopeListResponse> {
    return this.request("DescribeK8sApiAbnormalRuleScopeList", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeAssetClusterList(
    req: DescribeAssetClusterListRequest,
    cb?: (error: string, rep: DescribeAssetClusterListResponse) => void
  ): Promise<DescribeAssetClusterListResponse> {
    return this.request("DescribeAssetClusterList", req, cb)
  }

  /**
   * 查询支持防御的漏洞列表
   */
  async DescribeSupportDefenceVul(
    req: DescribeSupportDefenceVulRequest,
    cb?: (error: string, rep: DescribeSupportDefenceVulResponse) => void
  ): Promise<DescribeSupportDefenceVulResponse> {
    return this.request("DescribeSupportDefenceVul", req, cb)
  }

  /**
   * 删除运行时高危系统调用事件
   */
  async DeleteRiskSyscallEvents(
    req: DeleteRiskSyscallEventsRequest,
    cb?: (error: string, rep: DeleteRiskSyscallEventsResponse) => void
  ): Promise<DeleteRiskSyscallEventsResponse> {
    return this.request("DeleteRiskSyscallEvents", req, cb)
  }

  /**
   * 查询workload类型的影响范围，返回workload列表
   */
  async DescribeAffectedWorkloadList(
    req: DescribeAffectedWorkloadListRequest,
    cb?: (error: string, rep: DescribeAffectedWorkloadListResponse) => void
  ): Promise<DescribeAffectedWorkloadListResponse> {
    return this.request("DescribeAffectedWorkloadList", req, cb)
  }

  /**
     * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
  async AddCompliancePolicyAssetSetToWhitelist(
    req: AddCompliancePolicyAssetSetToWhitelistRequest,
    cb?: (error: string, rep: AddCompliancePolicyAssetSetToWhitelistResponse) => void
  ): Promise<AddCompliancePolicyAssetSetToWhitelistResponse> {
    return this.request("AddCompliancePolicyAssetSetToWhitelist", req, cb)
  }

  /**
   * 删除运行异常进程策略
   */
  async DeleteAbnormalProcessRules(
    req: DeleteAbnormalProcessRulesRequest,
    cb?: (error: string, rep: DeleteAbnormalProcessRulesResponse) => void
  ): Promise<DeleteAbnormalProcessRulesResponse> {
    return this.request("DeleteAbnormalProcessRules", req, cb)
  }

  /**
   * 查询漏洞详情
   */
  async DescribeVulDetail(
    req: DescribeVulDetailRequest,
    cb?: (error: string, rep: DescribeVulDetailResponse) => void
  ): Promise<DescribeVulDetailResponse> {
    return this.request("DescribeVulDetail", req, cb)
  }

  /**
   * 查询导出任务管理列表
   */
  async DescribeExportJobManageList(
    req: DescribeExportJobManageListRequest,
    cb?: (error: string, rep: DescribeExportJobManageListResponse) => void
  ): Promise<DescribeExportJobManageListResponse> {
    return this.request("DescribeExportJobManageList", req, cb)
  }

  /**
   * 创建漏洞扫描任务
   */
  async CreateVulScanTask(
    req: CreateVulScanTaskRequest,
    cb?: (error: string, rep: CreateVulScanTaskResponse) => void
  ): Promise<CreateVulScanTaskResponse> {
    return this.request("CreateVulScanTask", req, cb)
  }

  /**
   * 查询集群策略列表
   */
  async DescribeNetworkFirewallClusterList(
    req: DescribeNetworkFirewallClusterListRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallClusterListResponse) => void
  ): Promise<DescribeNetworkFirewallClusterListResponse> {
    return this.request("DescribeNetworkFirewallClusterList", req, cb)
  }

  /**
   * 停止漏洞扫描任务
   */
  async StopVulScanTask(
    req: StopVulScanTaskRequest,
    cb?: (error: string, rep: StopVulScanTaskResponse) => void
  ): Promise<StopVulScanTaskResponse> {
    return this.request("StopVulScanTask", req, cb)
  }

  /**
   * 镜像仓库敏感信息列表导出
   */
  async DescribeAssetImageRegistryRiskListExport(
    req: DescribeAssetImageRegistryRiskListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRiskListExportResponse) => void
  ): Promise<DescribeAssetImageRegistryRiskListExportResponse> {
    return this.request("DescribeAssetImageRegistryRiskListExport", req, cb)
  }

  /**
   * 运行时文件扫描超时设置
   */
  async ModifyVirusScanTimeoutSetting(
    req: ModifyVirusScanTimeoutSettingRequest,
    cb?: (error: string, rep: ModifyVirusScanTimeoutSettingResponse) => void
  ): Promise<ModifyVirusScanTimeoutSettingResponse> {
    return this.request("ModifyVirusScanTimeoutSetting", req, cb)
  }

  /**
   * 运行时文件查杀一键扫描
   */
  async CreateVirusScanTask(
    req: CreateVirusScanTaskRequest,
    cb?: (error: string, rep: CreateVirusScanTaskResponse) => void
  ): Promise<CreateVirusScanTaskResponse> {
    return this.request("CreateVirusScanTask", req, cb)
  }

  /**
   * 查询漏洞防御的主机列表
   */
  async DescribeVulDefenceHost(
    req: DescribeVulDefenceHostRequest,
    cb?: (error: string, rep: DescribeVulDefenceHostResponse) => void
  ): Promise<DescribeVulDefenceHostResponse> {
    return this.request("DescribeVulDefenceHost", req, cb)
  }

  /**
   * 查询漏洞扫描忽略的本地镜像列表
   */
  async DescribeVulIgnoreLocalImageList(
    req: DescribeVulIgnoreLocalImageListRequest,
    cb?: (error: string, rep: DescribeVulIgnoreLocalImageListResponse) => void
  ): Promise<DescribeVulIgnoreLocalImageListResponse> {
    return this.request("DescribeVulIgnoreLocalImageList", req, cb)
  }

  /**
   * DescribeEscapeEventDetail  查询容器逃逸事件详情
   */
  async DescribeEscapeEventDetail(
    req: DescribeEscapeEventDetailRequest,
    cb?: (error: string, rep: DescribeEscapeEventDetailResponse) => void
  ): Promise<DescribeEscapeEventDetailResponse> {
    return this.request("DescribeEscapeEventDetail", req, cb)
  }

  /**
   * 修改高危系统调用事件的状态信息
   */
  async ModifyRiskSyscallStatus(
    req: ModifyRiskSyscallStatusRequest,
    cb?: (error: string, rep: ModifyRiskSyscallStatusResponse) => void
  ): Promise<ModifyRiskSyscallStatusResponse> {
    return this.request("ModifyRiskSyscallStatus", req, cb)
  }

  /**
   * 创建恶意请求事件导出任务
   */
  async CreateRiskDnsEventExportJob(
    req: CreateRiskDnsEventExportJobRequest,
    cb?: (error: string, rep: CreateRiskDnsEventExportJobResponse) => void
  ): Promise<CreateRiskDnsEventExportJobResponse> {
    return this.request("CreateRiskDnsEventExportJob", req, cb)
  }

  /**
   * 查询漏洞防御攻击事件趋势
   */
  async DescribeVulDefenceEventTendency(
    req: DescribeVulDefenceEventTendencyRequest,
    cb?: (error: string, rep: DescribeVulDefenceEventTendencyResponse) => void
  ): Promise<DescribeVulDefenceEventTendencyResponse> {
    return this.request("DescribeVulDefenceEventTendency", req, cb)
  }

  /**
   * 查询逃逸白名单
   */
  async DescribeEscapeWhiteList(
    req: DescribeEscapeWhiteListRequest,
    cb?: (error: string, rep: DescribeEscapeWhiteListResponse) => void
  ): Promise<DescribeEscapeWhiteListResponse> {
    return this.request("DescribeEscapeWhiteList", req, cb)
  }

  /**
   * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
   */
  async ScanCompliancePolicyItems(
    req: ScanCompliancePolicyItemsRequest,
    cb?: (error: string, rep: ScanCompliancePolicyItemsResponse) => void
  ): Promise<ScanCompliancePolicyItemsResponse> {
    return this.request("ScanCompliancePolicyItems", req, cb)
  }

  /**
   * 删除运行时反弹shell白名单
   */
  async DeleteReverseShellWhiteLists(
    req: DeleteReverseShellWhiteListsRequest,
    cb?: (error: string, rep: DeleteReverseShellWhiteListsResponse) => void
  ): Promise<DeleteReverseShellWhiteListsResponse> {
    return this.request("DeleteReverseShellWhiteLists", req, cb)
  }

  /**
   * 查询某个资产的详情
   */
  async DescribeComplianceAssetDetailInfo(
    req: DescribeComplianceAssetDetailInfoRequest,
    cb?: (error: string, rep: DescribeComplianceAssetDetailInfoResponse) => void
  ): Promise<DescribeComplianceAssetDetailInfoResponse> {
    return this.request("DescribeComplianceAssetDetailInfo", req, cb)
  }

  /**
   * 查询运行时访问控制策略详细信息
   */
  async DescribeAccessControlRuleDetail(
    req: DescribeAccessControlRuleDetailRequest,
    cb?: (error: string, rep: DescribeAccessControlRuleDetailResponse) => void
  ): Promise<DescribeAccessControlRuleDetailResponse> {
    return this.request("DescribeAccessControlRuleDetail", req, cb)
  }

  /**
   * 容器网络更新Yaml网络策略并发布任务
   */
  async UpdateAndPublishNetworkFirewallPolicyYamlDetail(
    req: UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest,
    cb?: (error: string, rep: UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse) => void
  ): Promise<UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse> {
    return this.request("UpdateAndPublishNetworkFirewallPolicyYamlDetail", req, cb)
  }

  /**
   * 批量授权镜像扫描V2.0
   */
  async ModifyImageAuthorized(
    req: ModifyImageAuthorizedRequest,
    cb?: (error: string, rep: ModifyImageAuthorizedResponse) => void
  ): Promise<ModifyImageAuthorizedResponse> {
    return this.request("ModifyImageAuthorized", req, cb)
  }

  /**
   * 修改异常进程事件的状态信息
   */
  async ModifyAbnormalProcessStatus(
    req: ModifyAbnormalProcessStatusRequest,
    cb?: (error: string, rep: ModifyAbnormalProcessStatusResponse) => void
  ): Promise<ModifyAbnormalProcessStatusResponse> {
    return this.request("ModifyAbnormalProcessStatus", req, cb)
  }

  /**
   * 创建一个导出安全合规信息的任务
   */
  async CreateExportComplianceStatusListJob(
    req: CreateExportComplianceStatusListJobRequest,
    cb?: (error: string, rep: CreateExportComplianceStatusListJobResponse) => void
  ): Promise<CreateExportComplianceStatusListJobResponse> {
    return this.request("CreateExportComplianceStatusListJob", req, cb)
  }

  /**
   * 容器安全搜索查询镜像简略信息列表
   */
  async DescribeAssetImageSimpleList(
    req: DescribeAssetImageSimpleListRequest,
    cb?: (error: string, rep: DescribeAssetImageSimpleListResponse) => void
  ): Promise<DescribeAssetImageSimpleListResponse> {
    return this.request("DescribeAssetImageSimpleList", req, cb)
  }

  /**
   * DescribeImageSimpleList 查询全部镜像列表
   */
  async DescribeImageSimpleList(
    req: DescribeImageSimpleListRequest,
    cb?: (error: string, rep: DescribeImageSimpleListResponse) => void
  ): Promise<DescribeImageSimpleListResponse> {
    return this.request("DescribeImageSimpleList", req, cb)
  }

  /**
   * 修改运行时访问控制事件状态信息
   */
  async ModifyAccessControlStatus(
    req: ModifyAccessControlStatusRequest,
    cb?: (error: string, rep: ModifyAccessControlStatusResponse) => void
  ): Promise<ModifyAccessControlStatusResponse> {
    return this.request("ModifyAccessControlStatus", req, cb)
  }

  /**
   * 创建逃逸白名单导出任务
   */
  async CreateEscapeWhiteListExportJob(
    req: CreateEscapeWhiteListExportJobRequest,
    cb?: (error: string, rep: CreateEscapeWhiteListExportJobResponse) => void
  ): Promise<CreateEscapeWhiteListExportJobResponse> {
    return this.request("CreateEscapeWhiteListExportJob", req, cb)
  }

  /**
   * DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息
   */
  async DescribeEscapeRuleInfo(
    req?: DescribeEscapeRuleInfoRequest,
    cb?: (error: string, rep: DescribeEscapeRuleInfoResponse) => void
  ): Promise<DescribeEscapeRuleInfoResponse> {
    return this.request("DescribeEscapeRuleInfo", req, cb)
  }

  /**
   * 容器安全查询镜像风险列表
   */
  async DescribeAssetImageRiskList(
    req: DescribeAssetImageRiskListRequest,
    cb?: (error: string, rep: DescribeAssetImageRiskListResponse) => void
  ): Promise<DescribeAssetImageRiskListResponse> {
    return this.request("DescribeAssetImageRiskList", req, cb)
  }

  /**
   * 容器安全查询镜像关联主机
   */
  async DescribeAssetImageHostList(
    req: DescribeAssetImageHostListRequest,
    cb?: (error: string, rep: DescribeAssetImageHostListResponse) => void
  ): Promise<DescribeAssetImageHostListResponse> {
    return this.request("DescribeAssetImageHostList", req, cb)
  }

  /**
   * 查询用户集群资产总览
   */
  async DescribeClusterSummary(
    req?: DescribeClusterSummaryRequest,
    cb?: (error: string, rep: DescribeClusterSummaryResponse) => void
  ): Promise<DescribeClusterSummaryResponse> {
    return this.request("DescribeClusterSummary", req, cb)
  }

  /**
   * 查询漏洞防御事件详情
   */
  async DescribeVulDefenceEventDetail(
    req: DescribeVulDefenceEventDetailRequest,
    cb?: (error: string, rep: DescribeVulDefenceEventDetailResponse) => void
  ): Promise<DescribeVulDefenceEventDetailResponse> {
    return this.request("DescribeVulDefenceEventDetail", req, cb)
  }

  /**
   * DescribeEscapeSafeState 查询容器逃逸安全状态
   */
  async DescribeEscapeSafeState(
    req?: DescribeEscapeSafeStateRequest,
    cb?: (error: string, rep: DescribeEscapeSafeStateResponse) => void
  ): Promise<DescribeEscapeSafeStateResponse> {
    return this.request("DescribeEscapeSafeState", req, cb)
  }

  /**
   * 运行时查询文件查杀任务列表
   */
  async DescribeVirusTaskList(
    req: DescribeVirusTaskListRequest,
    cb?: (error: string, rep: DescribeVirusTaskListResponse) => void
  ): Promise<DescribeVirusTaskListResponse> {
    return this.request("DescribeVirusTaskList", req, cb)
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
   * 新增单个镜像仓库详细信息
   */
  async AddAssetImageRegistryRegistryDetail(
    req: AddAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: AddAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<AddAssetImageRegistryRegistryDetailResponse> {
    return this.request("AddAssetImageRegistryRegistryDetail", req, cb)
  }

  /**
   * 容器安全搜索查询端口占用列表
   */
  async DescribeAssetPortList(
    req: DescribeAssetPortListRequest,
    cb?: (error: string, rep: DescribeAssetPortListResponse) => void
  ): Promise<DescribeAssetPortListResponse> {
    return this.request("DescribeAssetPortList", req, cb)
  }

  /**
   * 新增或编辑本地镜像自动授权规则
   */
  async AddEditImageAutoAuthorizedRule(
    req: AddEditImageAutoAuthorizedRuleRequest,
    cb?: (error: string, rep: AddEditImageAutoAuthorizedRuleResponse) => void
  ): Promise<AddEditImageAutoAuthorizedRuleResponse> {
    return this.request("AddEditImageAutoAuthorizedRule", req, cb)
  }

  /**
   * 查询容器安全概览信息
   */
  async DescribeTcssSummary(
    req?: DescribeTcssSummaryRequest,
    cb?: (error: string, rep: DescribeTcssSummaryResponse) => void
  ): Promise<DescribeTcssSummaryResponse> {
    return this.request("DescribeTcssSummary", req, cb)
  }

  /**
   * 查询本地镜像风险概览
   */
  async DescribeImageRiskSummary(
    req?: DescribeImageRiskSummaryRequest,
    cb?: (error: string, rep: DescribeImageRiskSummaryResponse) => void
  ): Promise<DescribeImageRiskSummaryResponse> {
    return this.request("DescribeImageRiskSummary", req, cb)
  }

  /**
   * 查询漏洞影响的仓库镜像列表
   */
  async DescribeVulRegistryImageList(
    req: DescribeVulRegistryImageListRequest,
    cb?: (error: string, rep: DescribeVulRegistryImageListResponse) => void
  ): Promise<DescribeVulRegistryImageListResponse> {
    return this.request("DescribeVulRegistryImageList", req, cb)
  }

  /**
   * 查询应急漏洞列表
   */
  async DescribeEmergencyVulList(
    req: DescribeEmergencyVulListRequest,
    cb?: (error: string, rep: DescribeEmergencyVulListResponse) => void
  ): Promise<DescribeEmergencyVulListResponse> {
    return this.request("DescribeEmergencyVulList", req, cb)
  }

  /**
   * 查询漏洞各威胁等级统计数
   */
  async DescribeVulLevelSummary(
    req: DescribeVulLevelSummaryRequest,
    cb?: (error: string, rep: DescribeVulLevelSummaryResponse) => void
  ): Promise<DescribeVulLevelSummaryResponse> {
    return this.request("DescribeVulLevelSummary", req, cb)
  }

  /**
   * 查询集群网络空间标签列表
   */
  async DescribeNetworkFirewallNamespaceLabelList(
    req: DescribeNetworkFirewallNamespaceLabelListRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallNamespaceLabelListResponse) => void
  ): Promise<DescribeNetworkFirewallNamespaceLabelListResponse> {
    return this.request("DescribeNetworkFirewallNamespaceLabelList", req, cb)
  }

  /**
   * 修改木马自动隔离样本开关
   */
  async ModifyVirusAutoIsolateExampleSwitch(
    req: ModifyVirusAutoIsolateExampleSwitchRequest,
    cb?: (error: string, rep: ModifyVirusAutoIsolateExampleSwitchResponse) => void
  ): Promise<ModifyVirusAutoIsolateExampleSwitchResponse> {
    return this.request("ModifyVirusAutoIsolateExampleSwitch", req, cb)
  }

  /**
   * 容器网络查询资产任务进度
   */
  async DescribeNetworkFirewallClusterRefreshStatus(
    req: DescribeNetworkFirewallClusterRefreshStatusRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallClusterRefreshStatusResponse) => void
  ): Promise<DescribeNetworkFirewallClusterRefreshStatusResponse> {
    return this.request("DescribeNetworkFirewallClusterRefreshStatus", req, cb)
  }

  /**
   * 运行时查询文件查杀实时监控设置
   */
  async DescribeVirusMonitorSetting(
    req?: DescribeVirusMonitorSettingRequest,
    cb?: (error: string, rep: DescribeVirusMonitorSettingResponse) => void
  ): Promise<DescribeVirusMonitorSettingResponse> {
    return this.request("DescribeVirusMonitorSetting", req, cb)
  }

  /**
   * 查询木马自动隔离设置
   */
  async DescribeVirusAutoIsolateSetting(
    req?: DescribeVirusAutoIsolateSettingRequest,
    cb?: (error: string, rep: DescribeVirusAutoIsolateSettingResponse) => void
  ): Promise<DescribeVirusAutoIsolateSettingResponse> {
    return this.request("DescribeVirusAutoIsolateSetting", req, cb)
  }

  /**
   * 查询待处理逃逸事件趋势
   */
  async DescribeEscapeEventTendency(
    req: DescribeEscapeEventTendencyRequest,
    cb?: (error: string, rep: DescribeEscapeEventTendencyResponse) => void
  ): Promise<DescribeEscapeEventTendencyResponse> {
    return this.request("DescribeEscapeEventTendency", req, cb)
  }

  /**
   * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
   */
  async ModifyCompliancePeriodTask(
    req: ModifyCompliancePeriodTaskRequest,
    cb?: (error: string, rep: ModifyCompliancePeriodTaskResponse) => void
  ): Promise<ModifyCompliancePeriodTaskResponse> {
    return this.request("ModifyCompliancePeriodTask", req, cb)
  }

  /**
   * 查询安全日志清理设置详情
   */
  async DescribeSecLogCleanSettingInfo(
    req?: DescribeSecLogCleanSettingInfoRequest,
    cb?: (error: string, rep: DescribeSecLogCleanSettingInfoResponse) => void
  ): Promise<DescribeSecLogCleanSettingInfoResponse> {
    return this.request("DescribeSecLogCleanSettingInfo", req, cb)
  }

  /**
   * 查询系统漏洞列表
   */
  async DescribeSystemVulList(
    req: DescribeSystemVulListRequest,
    cb?: (error: string, rep: DescribeSystemVulListResponse) => void
  ): Promise<DescribeSystemVulListResponse> {
    return this.request("DescribeSystemVulList", req, cb)
  }

  /**
   * 查询漏洞扫描任务的本地镜像列表
   */
  async DescribeVulScanLocalImageList(
    req: DescribeVulScanLocalImageListRequest,
    cb?: (error: string, rep: DescribeVulScanLocalImageListResponse) => void
  ): Promise<DescribeVulScanLocalImageListResponse> {
    return this.request("DescribeVulScanLocalImageList", req, cb)
  }

  /**
   * 运行时停止木马查杀任务
   */
  async StopVirusScanTask(
    req: StopVirusScanTaskRequest,
    cb?: (error: string, rep: StopVirusScanTaskResponse) => void
  ): Promise<StopVirusScanTaskResponse> {
    return this.request("StopVirusScanTask", req, cb)
  }

  /**
   * 添加编辑运行时异常进程策略
   */
  async AddEditAbnormalProcessRule(
    req: AddEditAbnormalProcessRuleRequest,
    cb?: (error: string, rep: AddEditAbnormalProcessRuleResponse) => void
  ): Promise<AddEditAbnormalProcessRuleResponse> {
    return this.request("AddEditAbnormalProcessRule", req, cb)
  }

  /**
   * 修改漏洞防御事件状态
   */
  async ModifyVulDefenceEventStatus(
    req: ModifyVulDefenceEventStatusRequest,
    cb?: (error: string, rep: ModifyVulDefenceEventStatusResponse) => void
  ): Promise<ModifyVulDefenceEventStatusResponse> {
    return this.request("ModifyVulDefenceEventStatus", req, cb)
  }

  /**
   * 重置安全日志主题设置
   */
  async ResetSecLogTopicConfig(
    req: ResetSecLogTopicConfigRequest,
    cb?: (error: string, rep: ResetSecLogTopicConfigResponse) => void
  ): Promise<ResetSecLogTopicConfigResponse> {
    return this.request("ResetSecLogTopicConfig", req, cb)
  }

  /**
   * 运行时文件查杀重新检测
   */
  async CreateVirusScanAgain(
    req: CreateVirusScanAgainRequest,
    cb?: (error: string, rep: CreateVirusScanAgainResponse) => void
  ): Promise<CreateVirusScanAgainResponse> {
    return this.request("CreateVirusScanAgain", req, cb)
  }

  /**
   * 查询集群策略审计列表
   */
  async DescribeNetworkFirewallAuditRecord(
    req: DescribeNetworkFirewallAuditRecordRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallAuditRecordResponse) => void
  ): Promise<DescribeNetworkFirewallAuditRecordResponse> {
    return this.request("DescribeNetworkFirewallAuditRecord", req, cb)
  }

  /**
   * 修改安全日志接入状态
   */
  async ModifySecLogJoinState(
    req: ModifySecLogJoinStateRequest,
    cb?: (error: string, rep: ModifySecLogJoinStateResponse) => void
  ): Promise<ModifySecLogJoinStateResponse> {
    return this.request("ModifySecLogJoinState", req, cb)
  }

  /**
   * 查询容器安全未处理事件信息
   */
  async DescribeContainerSecEventSummary(
    req?: DescribeContainerSecEventSummaryRequest,
    cb?: (error: string, rep: DescribeContainerSecEventSummaryResponse) => void
  ): Promise<DescribeContainerSecEventSummaryResponse> {
    return this.request("DescribeContainerSecEventSummary", req, cb)
  }

  /**
   * 查询镜像自动授权任务列表
   */
  async DescribeImageAutoAuthorizedTaskList(
    req: DescribeImageAutoAuthorizedTaskListRequest,
    cb?: (error: string, rep: DescribeImageAutoAuthorizedTaskListResponse) => void
  ): Promise<DescribeImageAutoAuthorizedTaskListResponse> {
    return this.request("DescribeImageAutoAuthorizedTaskList", req, cb)
  }

  /**
   * 查询最近一次任务发现的检测项的汇总信息列表，按照 检测项 → 资产 的两级层次展开。
   */
  async DescribeComplianceTaskPolicyItemSummaryList(
    req: DescribeComplianceTaskPolicyItemSummaryListRequest,
    cb?: (error: string, rep: DescribeComplianceTaskPolicyItemSummaryListResponse) => void
  ): Promise<DescribeComplianceTaskPolicyItemSummaryListResponse> {
    return this.request("DescribeComplianceTaskPolicyItemSummaryList", req, cb)
  }

  /**
   * 容器安全搜索查询镜像列表
   */
  async DescribeAssetImageList(
    req: DescribeAssetImageListRequest,
    cb?: (error: string, rep: DescribeAssetImageListResponse) => void
  ): Promise<DescribeAssetImageListResponse> {
    return this.request("DescribeAssetImageList", req, cb)
  }

  /**
   * 删除k8sapi异常事件规则
   */
  async DeleteK8sApiAbnormalRule(
    req: DeleteK8sApiAbnormalRuleRequest,
    cb?: (error: string, rep: DeleteK8sApiAbnormalRuleResponse) => void
  ): Promise<DeleteK8sApiAbnormalRuleResponse> {
    return this.request("DeleteK8sApiAbnormalRule", req, cb)
  }

  /**
   * 查询运行时反弹shell事件列表信息
   */
  async DescribeReverseShellEvents(
    req: DescribeReverseShellEventsRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void
  ): Promise<DescribeReverseShellEventsResponse> {
    return this.request("DescribeReverseShellEvents", req, cb)
  }

  /**
   * 创建异常进程事件导出异步任务
   */
  async CreateProcessEventsExportJob(
    req: CreateProcessEventsExportJobRequest,
    cb?: (error: string, rep: CreateProcessEventsExportJobResponse) => void
  ): Promise<CreateProcessEventsExportJobResponse> {
    return this.request("CreateProcessEventsExportJob", req, cb)
  }

  /**
   * 容器网络集群查看策略详情
   */
  async DescribeNetworkFirewallPolicyDetail(
    req: DescribeNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPolicyDetailResponse) => void
  ): Promise<DescribeNetworkFirewallPolicyDetailResponse> {
    return this.request("DescribeNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 镜像仓库创建镜像扫描任务
   */
  async CreateAssetImageRegistryScanTask(
    req: CreateAssetImageRegistryScanTaskRequest,
    cb?: (error: string, rep: CreateAssetImageRegistryScanTaskResponse) => void
  ): Promise<CreateAssetImageRegistryScanTaskResponse> {
    return this.request("CreateAssetImageRegistryScanTask", req, cb)
  }

  /**
   * 查询安全日志告警信息
   */
  async DescribeSecLogAlertMsg(
    req: DescribeSecLogAlertMsgRequest,
    cb?: (error: string, rep: DescribeSecLogAlertMsgResponse) => void
  ): Promise<DescribeSecLogAlertMsgResponse> {
    return this.request("DescribeSecLogAlertMsg", req, cb)
  }

  /**
   * 查询未完成的刷新资产任务信息
   */
  async DescribeUnfinishRefreshTask(
    req?: DescribeUnfinishRefreshTaskRequest,
    cb?: (error: string, rep: DescribeUnfinishRefreshTaskResponse) => void
  ): Promise<DescribeUnfinishRefreshTaskResponse> {
    return this.request("DescribeUnfinishRefreshTask", req, cb)
  }

  /**
   * 添加编辑运行时高危系统调用白名单
   */
  async AddEditRiskSyscallWhiteList(
    req: AddEditRiskSyscallWhiteListRequest,
    cb?: (error: string, rep: AddEditRiskSyscallWhiteListResponse) => void
  ): Promise<AddEditRiskSyscallWhiteListResponse> {
    return this.request("AddEditRiskSyscallWhiteList", req, cb)
  }

  /**
   * 镜像仓库查询一键镜像扫描状态
   */
  async DescribeAssetImageRegistryScanStatusOneKey(
    req: DescribeAssetImageRegistryScanStatusOneKeyRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryScanStatusOneKeyResponse) => void
  ): Promise<DescribeAssetImageRegistryScanStatusOneKeyResponse> {
    return this.request("DescribeAssetImageRegistryScanStatusOneKey", req, cb)
  }

  /**
   * 容器网络创建网络策略添加并发布任务
   */
  async AddAndPublishNetworkFirewallPolicyDetail(
    req: AddAndPublishNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: AddAndPublishNetworkFirewallPolicyDetailResponse) => void
  ): Promise<AddAndPublishNetworkFirewallPolicyDetailResponse> {
    return this.request("AddAndPublishNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 容器安全搜索查询镜像漏洞列表导出
   */
  async DescribeAssetImageVulListExport(
    req: DescribeAssetImageVulListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageVulListExportResponse) => void
  ): Promise<DescribeAssetImageVulListExportResponse> {
    return this.request("DescribeAssetImageVulListExport", req, cb)
  }

  /**
   * 镜像仓库镜像仓库列表
   */
  async DescribeAssetImageRegistryList(
    req: DescribeAssetImageRegistryListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryListResponse) => void
  ): Promise<DescribeAssetImageRegistryListResponse> {
    return this.request("DescribeAssetImageRegistryList", req, cb)
  }

  /**
   * 容器安全搜索查询进程列表
   */
  async DescribeAssetProcessList(
    req: DescribeAssetProcessListRequest,
    cb?: (error: string, rep: DescribeAssetProcessListResponse) => void
  ): Promise<DescribeAssetProcessListResponse> {
    return this.request("DescribeAssetProcessList", req, cb)
  }

  /**
   * 查询集群网络pod标签
   */
  async DescribeNetworkFirewallPodLabelsList(
    req: DescribeNetworkFirewallPodLabelsListRequest,
    cb?: (error: string, rep: DescribeNetworkFirewallPodLabelsListResponse) => void
  ): Promise<DescribeNetworkFirewallPodLabelsListResponse> {
    return this.request("DescribeNetworkFirewallPodLabelsList", req, cb)
  }

  /**
   * 查询k8sapi异常事件趋势
   */
  async DescribeK8sApiAbnormalTendency(
    req: DescribeK8sApiAbnormalTendencyRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalTendencyResponse) => void
  ): Promise<DescribeK8sApiAbnormalTendencyResponse> {
    return this.request("DescribeK8sApiAbnormalTendency", req, cb)
  }

  /**
   * 查询运行时异常进程事件列表信息
   */
  async DescribeAbnormalProcessEvents(
    req: DescribeAbnormalProcessEventsRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessEventsResponse) => void
  ): Promise<DescribeAbnormalProcessEventsResponse> {
    return this.request("DescribeAbnormalProcessEvents", req, cb)
  }

  /**
   * 更新单个镜像仓库详细信息
   */
  async UpdateAssetImageRegistryRegistryDetail(
    req: UpdateAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: UpdateAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<UpdateAssetImageRegistryRegistryDetailResponse> {
    return this.request("UpdateAssetImageRegistryRegistryDetail", req, cb)
  }

  /**
   * DescribeProVersionInfo  查询专业版需购买信息
   */
  async DescribeProVersionInfo(
    req?: DescribeProVersionInfoRequest,
    cb?: (error: string, rep: DescribeProVersionInfoResponse) => void
  ): Promise<DescribeProVersionInfoResponse> {
    return this.request("DescribeProVersionInfo", req, cb)
  }

  /**
   * 查询某资产下的检测项列表
   */
  async DescribeComplianceAssetPolicyItemList(
    req: DescribeComplianceAssetPolicyItemListRequest,
    cb?: (error: string, rep: DescribeComplianceAssetPolicyItemListResponse) => void
  ): Promise<DescribeComplianceAssetPolicyItemListResponse> {
    return this.request("DescribeComplianceAssetPolicyItemList", req, cb)
  }

  /**
   * 查询集群节点信息
   */
  async DescribeClusterNodes(
    req: DescribeClusterNodesRequest,
    cb?: (error: string, rep: DescribeClusterNodesResponse) => void
  ): Promise<DescribeClusterNodesResponse> {
    return this.request("DescribeClusterNodes", req, cb)
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
   * 查询漏洞防御设置信息
   */
  async DescribeVulDefenceSetting(
    req?: DescribeVulDefenceSettingRequest,
    cb?: (error: string, rep: DescribeVulDefenceSettingResponse) => void
  ): Promise<DescribeVulDefenceSettingResponse> {
    return this.request("DescribeVulDefenceSetting", req, cb)
  }

  /**
   * 查询资产同步最近时间
   */
  async DescribeAssetSyncLastTime(
    req?: DescribeAssetSyncLastTimeRequest,
    cb?: (error: string, rep: DescribeAssetSyncLastTimeResponse) => void
  ): Promise<DescribeAssetSyncLastTimeResponse> {
    return this.request("DescribeAssetSyncLastTime", req, cb)
  }

  /**
   * 查询k8sapi异常请求规则详情
   */
  async DescribeK8sApiAbnormalRuleInfo(
    req: DescribeK8sApiAbnormalRuleInfoRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalRuleInfoResponse) => void
  ): Promise<DescribeK8sApiAbnormalRuleInfoResponse> {
    return this.request("DescribeK8sApiAbnormalRuleInfo", req, cb)
  }

  /**
   * 查询恶意请求事件详情
   */
  async DescribeRiskDnsEventDetail(
    req: DescribeRiskDnsEventDetailRequest,
    cb?: (error: string, rep: DescribeRiskDnsEventDetailResponse) => void
  ): Promise<DescribeRiskDnsEventDetailResponse> {
    return this.request("DescribeRiskDnsEventDetail", req, cb)
  }

  /**
     * 产品重构优化，这几个接口已经没有调用了

从白名单中删除将指定的检测项。
     */
  async DeleteCompliancePolicyItemFromWhitelist(
    req: DeleteCompliancePolicyItemFromWhitelistRequest,
    cb?: (error: string, rep: DeleteCompliancePolicyItemFromWhitelistResponse) => void
  ): Promise<DeleteCompliancePolicyItemFromWhitelistResponse> {
    return this.request("DeleteCompliancePolicyItemFromWhitelist", req, cb)
  }

  /**
   * 运行时查询文件查杀设置
   */
  async DescribeVirusScanSetting(
    req?: DescribeVirusScanSettingRequest,
    cb?: (error: string, rep: DescribeVirusScanSettingResponse) => void
  ): Promise<DescribeVirusScanSettingResponse> {
    return this.request("DescribeVirusScanSetting", req, cb)
  }

  /**
   * 查询促销活动
   */
  async DescribePromotionActivity(
    req: DescribePromotionActivityRequest,
    cb?: (error: string, rep: DescribePromotionActivityResponse) => void
  ): Promise<DescribePromotionActivityResponse> {
    return this.request("DescribePromotionActivity", req, cb)
  }

  /**
   * 查询某类资产的列表
   */
  async DescribeComplianceAssetList(
    req: DescribeComplianceAssetListRequest,
    cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void
  ): Promise<DescribeComplianceAssetListResponse> {
    return this.request("DescribeComplianceAssetList", req, cb)
  }

  /**
   * 按照 检测项 → 资产 的两级层次展开的第二层级：资产层级。
   */
  async DescribeCompliancePolicyItemAffectedAssetList(
    req: DescribeCompliancePolicyItemAffectedAssetListRequest,
    cb?: (error: string, rep: DescribeCompliancePolicyItemAffectedAssetListResponse) => void
  ): Promise<DescribeCompliancePolicyItemAffectedAssetListResponse> {
    return this.request("DescribeCompliancePolicyItemAffectedAssetList", req, cb)
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
   * 容器安全主机资产刷新
   */
  async ModifyAsset(
    req: ModifyAssetRequest,
    cb?: (error: string, rep: ModifyAssetResponse) => void
  ): Promise<ModifyAssetResponse> {
    return this.request("ModifyAsset", req, cb)
  }

  /**
   * CreateOrModifyPostPayCores  创建或者编辑弹性计费上限
   */
  async CreateOrModifyPostPayCores(
    req: CreateOrModifyPostPayCoresRequest,
    cb?: (error: string, rep: CreateOrModifyPostPayCoresResponse) => void
  ): Promise<CreateOrModifyPostPayCoresResponse> {
    return this.request("CreateOrModifyPostPayCores", req, cb)
  }

  /**
   * 修改木马自动隔离设置
   */
  async ModifyVirusAutoIsolateSetting(
    req: ModifyVirusAutoIsolateSettingRequest,
    cb?: (error: string, rep: ModifyVirusAutoIsolateSettingResponse) => void
  ): Promise<ModifyVirusAutoIsolateSettingResponse> {
    return this.request("ModifyVirusAutoIsolateSetting", req, cb)
  }

  /**
   * 查询安全日志KafkaUIN
   */
  async DescribeSecLogKafkaUIN(
    req?: DescribeSecLogKafkaUINRequest,
    cb?: (error: string, rep: DescribeSecLogKafkaUINResponse) => void
  ): Promise<DescribeSecLogKafkaUINResponse> {
    return this.request("DescribeSecLogKafkaUIN", req, cb)
  }

  /**
   * 编辑本地镜像自动授权开关
   */
  async SwitchImageAutoAuthorizedRule(
    req: SwitchImageAutoAuthorizedRuleRequest,
    cb?: (error: string, rep: SwitchImageAutoAuthorizedRuleResponse) => void
  ): Promise<SwitchImageAutoAuthorizedRuleResponse> {
    return this.request("SwitchImageAutoAuthorizedRule", req, cb)
  }

  /**
   * 查询运行时异常进程事件详细信息
   */
  async DescribeAbnormalProcessDetail(
    req: DescribeAbnormalProcessDetailRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessDetailResponse) => void
  ): Promise<DescribeAbnormalProcessDetailResponse> {
    return this.request("DescribeAbnormalProcessDetail", req, cb)
  }

  /**
   * RenewImageAuthorizeState   授权镜像扫描
   */
  async RenewImageAuthorizeState(
    req: RenewImageAuthorizeStateRequest,
    cb?: (error: string, rep: RenewImageAuthorizeStateResponse) => void
  ): Promise<RenewImageAuthorizeStateResponse> {
    return this.request("RenewImageAuthorizeState", req, cb)
  }

  /**
   * 获取受影响的集群数量，返回数量
   */
  async DescribeAffectedClusterCount(
    req?: DescribeAffectedClusterCountRequest,
    cb?: (error: string, rep: DescribeAffectedClusterCountResponse) => void
  ): Promise<DescribeAffectedClusterCountResponse> {
    return this.request("DescribeAffectedClusterCount", req, cb)
  }

  /**
   * 创建受漏洞影响的容器导出任务
   */
  async CreateVulContainerExportJob(
    req: CreateVulContainerExportJobRequest,
    cb?: (error: string, rep: CreateVulContainerExportJobResponse) => void
  ): Promise<CreateVulContainerExportJobResponse> {
    return this.request("CreateVulContainerExportJob", req, cb)
  }

  /**
   * 查询节点类型的影响范围，返回节点列表
   */
  async DescribeAffectedNodeList(
    req: DescribeAffectedNodeListRequest,
    cb?: (error: string, rep: DescribeAffectedNodeListResponse) => void
  ): Promise<DescribeAffectedNodeListResponse> {
    return this.request("DescribeAffectedNodeList", req, cb)
  }

  /**
   * 查询运行时访问控制事件列表导出
   */
  async DescribeAccessControlEventsExport(
    req: DescribeAccessControlEventsExportRequest,
    cb?: (error: string, rep: DescribeAccessControlEventsExportResponse) => void
  ): Promise<DescribeAccessControlEventsExportResponse> {
    return this.request("DescribeAccessControlEventsExport", req, cb)
  }

  /**
   * 查询木马事件趋势
   */
  async DescribeVirusEventTendency(
    req: DescribeVirusEventTendencyRequest,
    cb?: (error: string, rep: DescribeVirusEventTendencyResponse) => void
  ): Promise<DescribeVirusEventTendencyResponse> {
    return this.request("DescribeVirusEventTendency", req, cb)
  }

  /**
   * 查询镜像自动授权结果列表
   */
  async DescribeImageAutoAuthorizedLogList(
    req: DescribeImageAutoAuthorizedLogListRequest,
    cb?: (error: string, rep: DescribeImageAutoAuthorizedLogListResponse) => void
  ): Promise<DescribeImageAutoAuthorizedLogListResponse> {
    return this.request("DescribeImageAutoAuthorizedLogList", req, cb)
  }

  /**
   * 查询应急漏洞各威胁等级统计镜像数
   */
  async DescribeVulLevelImageSummary(
    req?: DescribeVulLevelImageSummaryRequest,
    cb?: (error: string, rep: DescribeVulLevelImageSummaryResponse) => void
  ): Promise<DescribeVulLevelImageSummaryResponse> {
    return this.request("DescribeVulLevelImageSummary", req, cb)
  }

  /**
   * 修改反弹shell事件的状态信息
   */
  async ModifyReverseShellStatus(
    req: ModifyReverseShellStatusRequest,
    cb?: (error: string, rep: ModifyReverseShellStatusResponse) => void
  ): Promise<ModifyReverseShellStatusResponse> {
    return this.request("ModifyReverseShellStatus", req, cb)
  }

  /**
   * 查询安全日志接入列表
   */
  async DescribeSecLogJoinTypeList(
    req?: DescribeSecLogJoinTypeListRequest,
    cb?: (error: string, rep: DescribeSecLogJoinTypeListResponse) => void
  ): Promise<DescribeSecLogJoinTypeListResponse> {
    return this.request("DescribeSecLogJoinTypeList", req, cb)
  }

  /**
   * 添加编辑告警策略
   */
  async AddEditWarningRules(
    req: AddEditWarningRulesRequest,
    cb?: (error: string, rep: AddEditWarningRulesResponse) => void
  ): Promise<AddEditWarningRulesResponse> {
    return this.request("AddEditWarningRules", req, cb)
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
   * 容器安全搜索查询镜像风险列表导出
   */
  async DescribeAssetImageRiskListExport(
    req: DescribeAssetImageRiskListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRiskListExportResponse) => void
  ): Promise<DescribeAssetImageRiskListExportResponse> {
    return this.request("DescribeAssetImageRiskListExport", req, cb)
  }

  /**
   * 修改安全日志清理设置信息
   */
  async ModifySecLogCleanSettingInfo(
    req: ModifySecLogCleanSettingInfoRequest,
    cb?: (error: string, rep: ModifySecLogCleanSettingInfoResponse) => void
  ): Promise<ModifySecLogCleanSettingInfoResponse> {
    return this.request("ModifySecLogCleanSettingInfo", req, cb)
  }

  /**
   * 查询导出任务下载URL
   */
  async DescribeExportJobDownloadURL(
    req: DescribeExportJobDownloadURLRequest,
    cb?: (error: string, rep: DescribeExportJobDownloadURLResponse) => void
  ): Promise<DescribeExportJobDownloadURLResponse> {
    return this.request("DescribeExportJobDownloadURL", req, cb)
  }

  /**
   * 镜像仓库查询镜像漏洞列表
   */
  async DescribeAssetImageRegistryVulList(
    req: DescribeAssetImageRegistryVulListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryVulListResponse) => void
  ): Promise<DescribeAssetImageRegistryVulListResponse> {
    return this.request("DescribeAssetImageRegistryVulList", req, cb)
  }

  /**
   * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
   */
  async DescribeRiskList(
    req: DescribeRiskListRequest,
    cb?: (error: string, rep: DescribeRiskListResponse) => void
  ): Promise<DescribeRiskListResponse> {
    return this.request("DescribeRiskList", req, cb)
  }

  /**
   * DescribeEscapeEventInfo 查询容器逃逸事件列表
   */
  async DescribeEscapeEventInfo(
    req: DescribeEscapeEventInfoRequest,
    cb?: (error: string, rep: DescribeEscapeEventInfoResponse) => void
  ): Promise<DescribeEscapeEventInfoResponse> {
    return this.request("DescribeEscapeEventInfo", req, cb)
  }

  /**
   * 查询漏洞风险统计概览
   */
  async DescribeVulSummary(
    req: DescribeVulSummaryRequest,
    cb?: (error: string, rep: DescribeVulSummaryResponse) => void
  ): Promise<DescribeVulSummaryResponse> {
    return this.request("DescribeVulSummary", req, cb)
  }

  /**
   * 查询自动授权规则授权范围主机信息
   */
  async DescribeAutoAuthorizedRuleHost(
    req: DescribeAutoAuthorizedRuleHostRequest,
    cb?: (error: string, rep: DescribeAutoAuthorizedRuleHostResponse) => void
  ): Promise<DescribeAutoAuthorizedRuleHostResponse> {
    return this.request("DescribeAutoAuthorizedRuleHost", req, cb)
  }

  /**
   * 容器网络创建Yaml网络策略并发布任务
   */
  async AddAndPublishNetworkFirewallPolicyYamlDetail(
    req: AddAndPublishNetworkFirewallPolicyYamlDetailRequest,
    cb?: (error: string, rep: AddAndPublishNetworkFirewallPolicyYamlDetailResponse) => void
  ): Promise<AddAndPublishNetworkFirewallPolicyYamlDetailResponse> {
    return this.request("AddAndPublishNetworkFirewallPolicyYamlDetail", req, cb)
  }

  /**
   * 统计容器逃逸各事件类型和待处理事件数
   */
  async DescribeEscapeEventTypeSummary(
    req?: DescribeEscapeEventTypeSummaryRequest,
    cb?: (error: string, rep: DescribeEscapeEventTypeSummaryResponse) => void
  ): Promise<DescribeEscapeEventTypeSummaryResponse> {
    return this.request("DescribeEscapeEventTypeSummary", req, cb)
  }

  /**
   * 创建逃逸事件导出异步任务
   */
  async CreateEscapeEventsExportJob(
    req: CreateEscapeEventsExportJobRequest,
    cb?: (error: string, rep: CreateEscapeEventsExportJobResponse) => void
  ): Promise<CreateEscapeEventsExportJobResponse> {
    return this.request("CreateEscapeEventsExportJob", req, cb)
  }

  /**
   * 容器安全查询镜像漏洞列表
   */
  async DescribeAssetImageVulList(
    req: DescribeAssetImageVulListRequest,
    cb?: (error: string, rep: DescribeAssetImageVulListResponse) => void
  ): Promise<DescribeAssetImageVulListResponse> {
    return this.request("DescribeAssetImageVulList", req, cb)
  }

  /**
   * 查询漏洞Top排名列表
   */
  async DescribeVulTopRanking(
    req: DescribeVulTopRankingRequest,
    cb?: (error: string, rep: DescribeVulTopRankingResponse) => void
  ): Promise<DescribeVulTopRankingResponse> {
    return this.request("DescribeVulTopRanking", req, cb)
  }

  /**
   * 获取告警策略列表
   */
  async DescribeWarningRules(
    req?: DescribeWarningRulesRequest,
    cb?: (error: string, rep: DescribeWarningRulesResponse) => void
  ): Promise<DescribeWarningRulesResponse> {
    return this.request("DescribeWarningRules", req, cb)
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
   * 将指定的检测项添加到白名单中，不显示未通过结果。
   */
  async AddCompliancePolicyItemToWhitelist(
    req: AddCompliancePolicyItemToWhitelistRequest,
    cb?: (error: string, rep: AddCompliancePolicyItemToWhitelistResponse) => void
  ): Promise<AddCompliancePolicyItemToWhitelistResponse> {
    return this.request("AddCompliancePolicyItemToWhitelist", req, cb)
  }

  /**
   * 为客户初始化合规基线的使用环境，创建必要的数据和选项。
   */
  async InitializeUserComplianceEnvironment(
    req?: InitializeUserComplianceEnvironmentRequest,
    cb?: (error: string, rep: InitializeUserComplianceEnvironmentResponse) => void
  ): Promise<InitializeUserComplianceEnvironmentResponse> {
    return this.request("InitializeUserComplianceEnvironment", req, cb)
  }

  /**
   * 安全概览和集群安全页进入调用该接口，查询用户集群相关信息。
   */
  async DescribeUserCluster(
    req: DescribeUserClusterRequest,
    cb?: (error: string, rep: DescribeUserClusterResponse) => void
  ): Promise<DescribeUserClusterResponse> {
    return this.request("DescribeUserCluster", req, cb)
  }

  /**
   * 卸载Agent客户端
   */
  async DeleteMachine(
    req: DeleteMachineRequest,
    cb?: (error: string, rep: DeleteMachineResponse) => void
  ): Promise<DeleteMachineResponse> {
    return this.request("DeleteMachine", req, cb)
  }

  /**
   * 创建主机列表导出任务
   */
  async CreateHostExportJob(
    req: CreateHostExportJobRequest,
    cb?: (error: string, rep: CreateHostExportJobResponse) => void
  ): Promise<CreateHostExportJobResponse> {
    return this.request("CreateHostExportJob", req, cb)
  }

  /**
   * 开通容器安全服务试用
   */
  async OpenTcssTrial(
    req?: OpenTcssTrialRequest,
    cb?: (error: string, rep: OpenTcssTrialResponse) => void
  ): Promise<OpenTcssTrialResponse> {
    return this.request("OpenTcssTrial", req, cb)
  }

  /**
   * 查询运行时异常进程策略列表信息
   */
  async DescribeAbnormalProcessRules(
    req: DescribeAbnormalProcessRulesRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessRulesResponse) => void
  ): Promise<DescribeAbnormalProcessRulesResponse> {
    return this.request("DescribeAbnormalProcessRules", req, cb)
  }

  /**
   * 查询检查报告
   */
  async DescribeInspectionReport(
    req?: DescribeInspectionReportRequest,
    cb?: (error: string, rep: DescribeInspectionReportResponse) => void
  ): Promise<DescribeInspectionReportResponse> {
    return this.request("DescribeInspectionReport", req, cb)
  }

  /**
   * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
   */
  async ScanComplianceAssetsByPolicyItem(
    req: ScanComplianceAssetsByPolicyItemRequest,
    cb?: (error: string, rep: ScanComplianceAssetsByPolicyItemResponse) => void
  ): Promise<ScanComplianceAssetsByPolicyItemResponse> {
    return this.request("ScanComplianceAssetsByPolicyItem", req, cb)
  }

  /**
   * 删除逃逸白名单
   */
  async DeleteEscapeWhiteList(
    req: DeleteEscapeWhiteListRequest,
    cb?: (error: string, rep: DeleteEscapeWhiteListResponse) => void
  ): Promise<DeleteEscapeWhiteListResponse> {
    return this.request("DeleteEscapeWhiteList", req, cb)
  }

  /**
   * 容器网络创建网络策略发布任务
   */
  async CreateNetworkFirewallPublish(
    req: CreateNetworkFirewallPublishRequest,
    cb?: (error: string, rep: CreateNetworkFirewallPublishResponse) => void
  ): Promise<CreateNetworkFirewallPublishResponse> {
    return this.request("CreateNetworkFirewallPublish", req, cb)
  }

  /**
   * 容器网络创建网络策略撤销任务
   */
  async CreateNetworkFirewallUndoPublish(
    req: CreateNetworkFirewallUndoPublishRequest,
    cb?: (error: string, rep: CreateNetworkFirewallUndoPublishResponse) => void
  ): Promise<CreateNetworkFirewallUndoPublishResponse> {
    return this.request("CreateNetworkFirewallUndoPublish", req, cb)
  }

  /**
   * 删除运行时高危系统调用白名单
   */
  async DeleteRiskSyscallWhiteLists(
    req: DeleteRiskSyscallWhiteListsRequest,
    cb?: (error: string, rep: DeleteRiskSyscallWhiteListsResponse) => void
  ): Promise<DeleteRiskSyscallWhiteListsResponse> {
    return this.request("DeleteRiskSyscallWhiteLists", req, cb)
  }

  /**
   * 添加编辑运行时访问控制策略
   */
  async AddEditAccessControlRule(
    req: AddEditAccessControlRuleRequest,
    cb?: (error: string, rep: AddEditAccessControlRuleResponse) => void
  ): Promise<AddEditAccessControlRuleResponse> {
    return this.request("AddEditAccessControlRule", req, cb)
  }

  /**
   * 查询本地镜像、仓库镜像中严重&高危的漏洞趋势
   */
  async DescribeVulTendency(
    req: DescribeVulTendencyRequest,
    cb?: (error: string, rep: DescribeVulTendencyResponse) => void
  ): Promise<DescribeVulTendencyResponse> {
    return this.request("DescribeVulTendency", req, cb)
  }

  /**
   * 查询运行时反弹shell白名单详细信息
   */
  async DescribeReverseShellWhiteListDetail(
    req: DescribeReverseShellWhiteListDetailRequest,
    cb?: (error: string, rep: DescribeReverseShellWhiteListDetailResponse) => void
  ): Promise<DescribeReverseShellWhiteListDetailResponse> {
    return this.request("DescribeReverseShellWhiteListDetail", req, cb)
  }

  /**
   * 添加容器安全镜像扫描设置
   */
  async CreateAssetImageScanSetting(
    req: CreateAssetImageScanSettingRequest,
    cb?: (error: string, rep: CreateAssetImageScanSettingResponse) => void
  ): Promise<CreateAssetImageScanSettingResponse> {
    return this.request("CreateAssetImageScanSetting", req, cb)
  }

  /**
   * 容器安全查询镜像病毒列表
   */
  async DescribeAssetImageVirusList(
    req: DescribeAssetImageVirusListRequest,
    cb?: (error: string, rep: DescribeAssetImageVirusListResponse) => void
  ): Promise<DescribeAssetImageVirusListResponse> {
    return this.request("DescribeAssetImageVirusList", req, cb)
  }

  /**
   * 创建k8sapi异常事件规则
   */
  async CreateK8sApiAbnormalRuleInfo(
    req: CreateK8sApiAbnormalRuleInfoRequest,
    cb?: (error: string, rep: CreateK8sApiAbnormalRuleInfoResponse) => void
  ): Promise<CreateK8sApiAbnormalRuleInfoResponse> {
    return this.request("CreateK8sApiAbnormalRuleInfo", req, cb)
  }

  /**
   * 查询账户容器、镜像等统计信息
   */
  async DescribeAssetSummary(
    req?: DescribeAssetSummaryRequest,
    cb?: (error: string, rep: DescribeAssetSummaryResponse) => void
  ): Promise<DescribeAssetSummaryResponse> {
    return this.request("DescribeAssetSummary", req, cb)
  }

  /**
   * 查询安全日志投递kafka配置
   */
  async DescribeSecLogDeliveryKafkaSetting(
    req?: DescribeSecLogDeliveryKafkaSettingRequest,
    cb?: (error: string, rep: DescribeSecLogDeliveryKafkaSettingResponse) => void
  ): Promise<DescribeSecLogDeliveryKafkaSettingResponse> {
    return this.request("DescribeSecLogDeliveryKafkaSetting", req, cb)
  }

  /**
   * DescribeRiskContainerImageList查询风险容器镜像列表
   */
  async DescribeEventEscapeImageList(
    req: DescribeEventEscapeImageListRequest,
    cb?: (error: string, rep: DescribeEventEscapeImageListResponse) => void
  ): Promise<DescribeEventEscapeImageListResponse> {
    return this.request("DescribeEventEscapeImageList", req, cb)
  }

  /**
   * 容器网络创建网络策略删除任务
   */
  async DeleteNetworkFirewallPolicyDetail(
    req: DeleteNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: DeleteNetworkFirewallPolicyDetailResponse) => void
  ): Promise<DeleteNetworkFirewallPolicyDetailResponse> {
    return this.request("DeleteNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 容器安全查询web服务列表
   */
  async DescribeAssetWebServiceList(
    req: DescribeAssetWebServiceListRequest,
    cb?: (error: string, rep: DescribeAssetWebServiceListResponse) => void
  ): Promise<DescribeAssetWebServiceListResponse> {
    return this.request("DescribeAssetWebServiceList", req, cb)
  }

  /**
   * 检查单个镜像仓库名是否重复
   */
  async CheckRepeatAssetImageRegistry(
    req: CheckRepeatAssetImageRegistryRequest,
    cb?: (error: string, rep: CheckRepeatAssetImageRegistryResponse) => void
  ): Promise<CheckRepeatAssetImageRegistryResponse> {
    return this.request("CheckRepeatAssetImageRegistry", req, cb)
  }

  /**
   * 容器网络创建网络策略添加任务
   */
  async AddNetworkFirewallPolicyDetail(
    req: AddNetworkFirewallPolicyDetailRequest,
    cb?: (error: string, rep: AddNetworkFirewallPolicyDetailResponse) => void
  ): Promise<AddNetworkFirewallPolicyDetailResponse> {
    return this.request("AddNetworkFirewallPolicyDetail", req, cb)
  }

  /**
   * 查询k8s api 异常事件详情
   */
  async DescribeK8sApiAbnormalEventInfo(
    req: DescribeK8sApiAbnormalEventInfoRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalEventInfoResponse) => void
  ): Promise<DescribeK8sApiAbnormalEventInfoResponse> {
    return this.request("DescribeK8sApiAbnormalEventInfo", req, cb)
  }

  /**
   * 查询待处理异常进程事件趋势
   */
  async DescribeAbnormalProcessEventTendency(
    req: DescribeAbnormalProcessEventTendencyRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessEventTendencyResponse) => void
  ): Promise<DescribeAbnormalProcessEventTendencyResponse> {
    return this.request("DescribeAbnormalProcessEventTendency", req, cb)
  }

  /**
   * 查询受漏洞的容器列表
   */
  async DescribeVulContainerList(
    req: DescribeVulContainerListRequest,
    cb?: (error: string, rep: DescribeVulContainerListResponse) => void
  ): Promise<DescribeVulContainerListResponse> {
    return this.request("DescribeVulContainerList", req, cb)
  }

  /**
   * 镜像仓库停止镜像扫描任务
   */
  async ModifyAssetImageRegistryScanStop(
    req: ModifyAssetImageRegistryScanStopRequest,
    cb?: (error: string, rep: ModifyAssetImageRegistryScanStopResponse) => void
  ): Promise<ModifyAssetImageRegistryScanStopResponse> {
    return this.request("ModifyAssetImageRegistryScanStop", req, cb)
  }

  /**
   * 查询安全日志商品信息
   */
  async DescribeSecLogVasInfo(
    req?: DescribeSecLogVasInfoRequest,
    cb?: (error: string, rep: DescribeSecLogVasInfoResponse) => void
  ): Promise<DescribeSecLogVasInfoResponse> {
    return this.request("DescribeSecLogVasInfo", req, cb)
  }

  /**
   * 获取用户的pod列表
   */
  async DescribeUserPodList(
    req: DescribeUserPodListRequest,
    cb?: (error: string, rep: DescribeUserPodListResponse) => void
  ): Promise<DescribeUserPodListResponse> {
    return this.request("DescribeUserPodList", req, cb)
  }

  /**
   * 查询木马样本下载url
   */
  async DescribeVirusSampleDownloadUrl(
    req: DescribeVirusSampleDownloadUrlRequest,
    cb?: (error: string, rep: DescribeVirusSampleDownloadUrlResponse) => void
  ): Promise<DescribeVirusSampleDownloadUrlResponse> {
    return this.request("DescribeVirusSampleDownloadUrl", req, cb)
  }

  /**
   * 查询主机详细信息
   */
  async DescribeAssetHostDetail(
    req: DescribeAssetHostDetailRequest,
    cb?: (error: string, rep: DescribeAssetHostDetailResponse) => void
  ): Promise<DescribeAssetHostDetailResponse> {
    return this.request("DescribeAssetHostDetail", req, cb)
  }

  /**
   * 镜像仓库漏洞列表导出
   */
  async DescribeAssetImageRegistryVulListExport(
    req: DescribeAssetImageRegistryVulListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryVulListExportResponse) => void
  ): Promise<DescribeAssetImageRegistryVulListExportResponse> {
    return this.request("DescribeAssetImageRegistryVulListExport", req, cb)
  }

  /**
   * 查询web应用漏洞列表
   */
  async DescribeWebVulList(
    req: DescribeWebVulListRequest,
    cb?: (error: string, rep: DescribeWebVulListResponse) => void
  ): Promise<DescribeWebVulListResponse> {
    return this.request("DescribeWebVulList", req, cb)
  }

  /**
   * 查询运行时高危系统调用白名单列表信息
   */
  async DescribeRiskSyscallWhiteLists(
    req: DescribeRiskSyscallWhiteListsRequest,
    cb?: (error: string, rep: DescribeRiskSyscallWhiteListsResponse) => void
  ): Promise<DescribeRiskSyscallWhiteListsResponse> {
    return this.request("DescribeRiskSyscallWhiteLists", req, cb)
  }

  /**
     * 接口已废弃

查询运行时访问控制策略列表导出
     */
  async DescribeAccessControlRulesExport(
    req: DescribeAccessControlRulesExportRequest,
    cb?: (error: string, rep: DescribeAccessControlRulesExportResponse) => void
  ): Promise<DescribeAccessControlRulesExportResponse> {
    return this.request("DescribeAccessControlRulesExport", req, cb)
  }

  /**
   * 查询高危系统调用事件详细信息
   */
  async DescribeRiskSyscallDetail(
    req: DescribeRiskSyscallDetailRequest,
    cb?: (error: string, rep: DescribeRiskSyscallDetailResponse) => void
  ): Promise<DescribeRiskSyscallDetailResponse> {
    return this.request("DescribeRiskSyscallDetail", req, cb)
  }

  /**
   * 查询木马自动隔离样本列表
   */
  async DescribeVirusAutoIsolateSampleList(
    req: DescribeVirusAutoIsolateSampleListRequest,
    cb?: (error: string, rep: DescribeVirusAutoIsolateSampleListResponse) => void
  ): Promise<DescribeVirusAutoIsolateSampleListResponse> {
    return this.request("DescribeVirusAutoIsolateSampleList", req, cb)
  }

  /**
   * 运行时查询文件查杀任务状态
   */
  async DescribeVirusScanTaskStatus(
    req: DescribeVirusScanTaskStatusRequest,
    cb?: (error: string, rep: DescribeVirusScanTaskStatusResponse) => void
  ): Promise<DescribeVirusScanTaskStatusResponse> {
    return this.request("DescribeVirusScanTaskStatus", req, cb)
  }

  /**
   * 修改k8sapi异常事件规则状态
   */
  async ModifyK8sApiAbnormalRuleStatus(
    req: ModifyK8sApiAbnormalRuleStatusRequest,
    cb?: (error: string, rep: ModifyK8sApiAbnormalRuleStatusResponse) => void
  ): Promise<ModifyK8sApiAbnormalRuleStatusResponse> {
    return this.request("ModifyK8sApiAbnormalRuleStatus", req, cb)
  }

  /**
   * 查询容器运行时安全事件趋势
   */
  async DescribeSecEventsTendency(
    req: DescribeSecEventsTendencyRequest,
    cb?: (error: string, rep: DescribeSecEventsTendencyResponse) => void
  ): Promise<DescribeSecEventsTendencyResponse> {
    return this.request("DescribeSecEventsTendency", req, cb)
  }

  /**
   * 查询镜像详细信息
   */
  async DescribeAssetImageDetail(
    req: DescribeAssetImageDetailRequest,
    cb?: (error: string, rep: DescribeAssetImageDetailResponse) => void
  ): Promise<DescribeAssetImageDetailResponse> {
    return this.request("DescribeAssetImageDetail", req, cb)
  }

  /**
   * 更新安全日志投递kafka设置
   */
  async ModifySecLogDeliveryKafkaSetting(
    req: ModifySecLogDeliveryKafkaSettingRequest,
    cb?: (error: string, rep: ModifySecLogDeliveryKafkaSettingResponse) => void
  ): Promise<ModifySecLogDeliveryKafkaSettingResponse> {
    return this.request("ModifySecLogDeliveryKafkaSetting", req, cb)
  }

  /**
   * 创建文件篡改规则导出任务
   */
  async CreateAccessControlsRuleExportJob(
    req: CreateAccessControlsRuleExportJobRequest,
    cb?: (error: string, rep: CreateAccessControlsRuleExportJobResponse) => void
  ): Promise<CreateAccessControlsRuleExportJobResponse> {
    return this.request("CreateAccessControlsRuleExportJob", req, cb)
  }

  /**
   * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
   */
  async DeleteCompliancePolicyAssetSetFromWhitelist(
    req: DeleteCompliancePolicyAssetSetFromWhitelistRequest,
    cb?: (error: string, rep: DeleteCompliancePolicyAssetSetFromWhitelistResponse) => void
  ): Promise<DeleteCompliancePolicyAssetSetFromWhitelistResponse> {
    return this.request("DeleteCompliancePolicyAssetSetFromWhitelist", req, cb)
  }

  /**
   * 查询k8sapi异常请求规则列表
   */
  async DescribeK8sApiAbnormalRuleList(
    req: DescribeK8sApiAbnormalRuleListRequest,
    cb?: (error: string, rep: DescribeK8sApiAbnormalRuleListResponse) => void
  ): Promise<DescribeK8sApiAbnormalRuleListResponse> {
    return this.request("DescribeK8sApiAbnormalRuleList", req, cb)
  }
}
