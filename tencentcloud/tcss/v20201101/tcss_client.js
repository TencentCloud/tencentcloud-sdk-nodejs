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
const CreateVirusScanAgainRequest = models.CreateVirusScanAgainRequest;
const UpdateImageRegistryTimingScanTaskResponse = models.UpdateImageRegistryTimingScanTaskResponse;
const DescribeUnfinishRefreshTaskResponse = models.DescribeUnfinishRefreshTaskResponse;
const ComplianceBenchmarkStandardEnable = models.ComplianceBenchmarkStandardEnable;
const DescribeRiskSyscallWhiteListsResponse = models.DescribeRiskSyscallWhiteListsResponse;
const CreateRefreshTaskResponse = models.CreateRefreshTaskResponse;
const ImageVirusInfo = models.ImageVirusInfo;
const AbnormalProcessEventDescription = models.AbnormalProcessEventDescription;
const CompliancePeriodTaskRule = models.CompliancePeriodTaskRule;
const DescribeVirusScanTimeoutSettingResponse = models.DescribeVirusScanTimeoutSettingResponse;
const ClusterCreateComponentItem = models.ClusterCreateComponentItem;
const DescribeAssetComponentListResponse = models.DescribeAssetComponentListResponse;
const DescribeAssetImageRegistryVulListResponse = models.DescribeAssetImageRegistryVulListResponse;
const AddAssetImageRegistryRegistryDetailResponse = models.AddAssetImageRegistryRegistryDetailResponse;
const DeleteCompliancePolicyItemFromWhitelistRequest = models.DeleteCompliancePolicyItemFromWhitelistRequest;
const DescribeAssetImageDetailRequest = models.DescribeAssetImageDetailRequest;
const ModifyAssetImageScanStopResponse = models.ModifyAssetImageScanStopResponse;
const DescribeComplianceScanFailedAssetListResponse = models.DescribeComplianceScanFailedAssetListResponse;
const SyncAssetImageRegistryAssetResponse = models.SyncAssetImageRegistryAssetResponse;
const DescribeAssetImageRegistryVirusListExportResponse = models.DescribeAssetImageRegistryVirusListExportResponse;
const DescribeSecEventsTendencyResponse = models.DescribeSecEventsTendencyResponse;
const DescribeAccessControlEventsExportResponse = models.DescribeAccessControlEventsExportResponse;
const AddEditAbnormalProcessRuleRequest = models.AddEditAbnormalProcessRuleRequest;
const DescribeComplianceTaskAssetSummaryRequest = models.DescribeComplianceTaskAssetSummaryRequest;
const ModifyAssetImageRegistryScanStopResponse = models.ModifyAssetImageRegistryScanStopResponse;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const SetCheckModeResponse = models.SetCheckModeResponse;
const DescribeAssetImageScanStatusResponse = models.DescribeAssetImageScanStatusResponse;
const DescribeAbnormalProcessRulesExportRequest = models.DescribeAbnormalProcessRulesExportRequest;
const DescribePurchaseStateInfoResponse = models.DescribePurchaseStateInfoResponse;
const ModifyVirusFileStatusResponse = models.ModifyVirusFileStatusResponse;
const DescribeAssetImageRegistryRegistryDetailResponse = models.DescribeAssetImageRegistryRegistryDetailResponse;
const RunTimeFilters = models.RunTimeFilters;
const DescribeVirusDetailRequest = models.DescribeVirusDetailRequest;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const DescribeAssetImageListRequest = models.DescribeAssetImageListRequest;
const DescribeRiskSyscallWhiteListDetailRequest = models.DescribeRiskSyscallWhiteListDetailRequest;
const ModifyAbnormalProcessRuleStatusRequest = models.ModifyAbnormalProcessRuleStatusRequest;
const ProcessDetailInfo = models.ProcessDetailInfo;
const ScanCompliancePolicyItemsRequest = models.ScanCompliancePolicyItemsRequest;
const DescribeAssetImageVirusListExportRequest = models.DescribeAssetImageVirusListExportRequest;
const CreateAssetImageScanTaskResponse = models.CreateAssetImageScanTaskResponse;
const DescribeTaskResultSummaryRequest = models.DescribeTaskResultSummaryRequest;
const DeleteAccessControlRulesRequest = models.DeleteAccessControlRulesRequest;
const ComplianceK8SDetailInfo = models.ComplianceK8SDetailInfo;
const AccessControlEventDescription = models.AccessControlEventDescription;
const DescribeAccessControlEventsResponse = models.DescribeAccessControlEventsResponse;
const ProcessBaseInfo = models.ProcessBaseInfo;
const ComplianceAssetDetailInfo = models.ComplianceAssetDetailInfo;
const DescribeRiskSyscallEventsResponse = models.DescribeRiskSyscallEventsResponse;
const DescribeAssetImageRiskListResponse = models.DescribeAssetImageRiskListResponse;
const DescribeReverseShellEventsResponse = models.DescribeReverseShellEventsResponse;
const ImageSimpleInfo = models.ImageSimpleInfo;
const DescribeComplianceAssetDetailInfoRequest = models.DescribeComplianceAssetDetailInfoRequest;
const CreateExportComplianceStatusListJobResponse = models.CreateExportComplianceStatusListJobResponse;
const DescribeAssetAppServiceListResponse = models.DescribeAssetAppServiceListResponse;
const ComplianceBenchmarkStandard = models.ComplianceBenchmarkStandard;
const DescribeEscapeRuleInfoResponse = models.DescribeEscapeRuleInfoResponse;
const DescribePurchaseStateInfoRequest = models.DescribePurchaseStateInfoRequest;
const AddCompliancePolicyItemToWhitelistRequest = models.AddCompliancePolicyItemToWhitelistRequest;
const ComplianceAssetSummary = models.ComplianceAssetSummary;
const EscapeRule = models.EscapeRule;
const CompliancePeriodTask = models.CompliancePeriodTask;
const RemoveAssetImageRegistryRegistryDetailResponse = models.RemoveAssetImageRegistryRegistryDetailResponse;
const UpdateAssetImageRegistryRegistryDetailResponse = models.UpdateAssetImageRegistryRegistryDetailResponse;
const DeleteAbnormalProcessRulesResponse = models.DeleteAbnormalProcessRulesResponse;
const RuleBaseInfo = models.RuleBaseInfo;
const ProcessInfo = models.ProcessInfo;
const DescribeReverseShellDetailRequest = models.DescribeReverseShellDetailRequest;
const ModifyReverseShellStatusRequest = models.ModifyReverseShellStatusRequest;
const DescribeAssetImageRiskListExportRequest = models.DescribeAssetImageRiskListExportRequest;
const DescribeAffectedWorkloadListRequest = models.DescribeAffectedWorkloadListRequest;
const DescribeAffectedClusterCountRequest = models.DescribeAffectedClusterCountRequest;
const DescribeAssetImageRegistryVulListExportRequest = models.DescribeAssetImageRegistryVulListExportRequest;
const AddEditRiskSyscallWhiteListRequest = models.AddEditRiskSyscallWhiteListRequest;
const ReverseShellEventInfo = models.ReverseShellEventInfo;
const DescribeRiskSyscallDetailRequest = models.DescribeRiskSyscallDetailRequest;
const DescribeAbnormalProcessRulesRequest = models.DescribeAbnormalProcessRulesRequest;
const DescribeAssetImageRegistryListResponse = models.DescribeAssetImageRegistryListResponse;
const ExportVirusListResponse = models.ExportVirusListResponse;
const DescribeAssetImageVirusListResponse = models.DescribeAssetImageVirusListResponse;
const DescribeImageRiskSummaryRequest = models.DescribeImageRiskSummaryRequest;
const ModifyReverseShellStatusResponse = models.ModifyReverseShellStatusResponse;
const CreateAssetImageScanSettingRequest = models.CreateAssetImageScanSettingRequest;
const DescribeAssetSummaryResponse = models.DescribeAssetSummaryResponse;
const DescribeImageRegistryTimingScanTaskResponse = models.DescribeImageRegistryTimingScanTaskResponse;
const DescribeAssetWebServiceListRequest = models.DescribeAssetWebServiceListRequest;
const ModifyEscapeEventStatusResponse = models.ModifyEscapeEventStatusResponse;
const CheckRepeatAssetImageRegistryResponse = models.CheckRepeatAssetImageRegistryResponse;
const DescribeAccessControlEventsExportRequest = models.DescribeAccessControlEventsExportRequest;
const DescribeRiskSyscallDetailResponse = models.DescribeRiskSyscallDetailResponse;
const ReverseShellEventDescription = models.ReverseShellEventDescription;
const DescribeAssetImageBindRuleInfoResponse = models.DescribeAssetImageBindRuleInfoResponse;
const ScanCompliancePolicyItemsResponse = models.ScanCompliancePolicyItemsResponse;
const DescribeAssetContainerListRequest = models.DescribeAssetContainerListRequest;
const DescribeEscapeSafeStateResponse = models.DescribeEscapeSafeStateResponse;
const AbnormalProcessRuleInfo = models.AbnormalProcessRuleInfo;
const ScanComplianceAssetsByPolicyItemResponse = models.ScanComplianceAssetsByPolicyItemResponse;
const ComplianceWhitelistItem = models.ComplianceWhitelistItem;
const DescribeAssetPortListRequest = models.DescribeAssetPortListRequest;
const DescribeComplianceTaskPolicyItemSummaryListResponse = models.DescribeComplianceTaskPolicyItemSummaryListResponse;
const ComplianceContainerDetailInfo = models.ComplianceContainerDetailInfo;
const DescribeReverseShellEventsRequest = models.DescribeReverseShellEventsRequest;
const DescribeAbnormalProcessRuleDetailRequest = models.DescribeAbnormalProcessRuleDetailRequest;
const SyncAssetImageRegistryAssetRequest = models.SyncAssetImageRegistryAssetRequest;
const ClusterCheckTaskItem = models.ClusterCheckTaskItem;
const DescribeAffectedClusterCountResponse = models.DescribeAffectedClusterCountResponse;
const RenewImageAuthorizeStateRequest = models.RenewImageAuthorizeStateRequest;
const CreateAssetImageRegistryScanTaskOneKeyRequest = models.CreateAssetImageRegistryScanTaskOneKeyRequest;
const ModifyEscapeEventStatusRequest = models.ModifyEscapeEventStatusRequest;
const DescribeAssetImageBindRuleInfoRequest = models.DescribeAssetImageBindRuleInfoRequest;
const ImageHost = models.ImageHost;
const DescribeAssetContainerListResponse = models.DescribeAssetContainerListResponse;
const DescribeVirusMonitorSettingResponse = models.DescribeVirusMonitorSettingResponse;
const DescribeContainerSecEventSummaryRequest = models.DescribeContainerSecEventSummaryRequest;
const DescribeAssetImageRegistrySummaryResponse = models.DescribeAssetImageRegistrySummaryResponse;
const DescribeImageAuthorizedInfoResponse = models.DescribeImageAuthorizedInfoResponse;
const DescribeAbnormalProcessEventsRequest = models.DescribeAbnormalProcessEventsRequest;
const ModifyAbnormalProcessRuleStatusResponse = models.ModifyAbnormalProcessRuleStatusResponse;
const DescribeVirusListRequest = models.DescribeVirusListRequest;
const DescribeComplianceAssetListRequest = models.DescribeComplianceAssetListRequest;
const ModifyVirusScanSettingResponse = models.ModifyVirusScanSettingResponse;
const ImagesVul = models.ImagesVul;
const ModifyVirusMonitorSettingRequest = models.ModifyVirusMonitorSettingRequest;
const ScanComplianceAssetsByPolicyItemRequest = models.ScanComplianceAssetsByPolicyItemRequest;
const DescribeEscapeEventInfoResponse = models.DescribeEscapeEventInfoResponse;
const ClusterInfoItem = models.ClusterInfoItem;
const AddAssetImageRegistryRegistryDetailRequest = models.AddAssetImageRegistryRegistryDetailRequest;
const DescribeAssetImageHostListRequest = models.DescribeAssetImageHostListRequest;
const AbnormalProcessEventInfo = models.AbnormalProcessEventInfo;
const DescribeCompliancePeriodTaskListResponse = models.DescribeCompliancePeriodTaskListResponse;
const DescribeAssetImageScanSettingRequest = models.DescribeAssetImageScanSettingRequest;
const AccessControlSystemChildRuleInfo = models.AccessControlSystemChildRuleInfo;
const AccessControlEventInfo = models.AccessControlEventInfo;
const DescribeClusterSummaryResponse = models.DescribeClusterSummaryResponse;
const DescribeValueAddedSrvInfoRequest = models.DescribeValueAddedSrvInfoRequest;
const DescribeCompliancePolicyItemAffectedSummaryResponse = models.DescribeCompliancePolicyItemAffectedSummaryResponse;
const ModifyRiskSyscallStatusResponse = models.ModifyRiskSyscallStatusResponse;
const RunTimeEventBaseInfo = models.RunTimeEventBaseInfo;
const DescribeReverseShellWhiteListsResponse = models.DescribeReverseShellWhiteListsResponse;
const ModifyAssetImageRegistryScanStopOneKeyRequest = models.ModifyAssetImageRegistryScanStopOneKeyRequest;
const DescribeExportJobResultRequest = models.DescribeExportJobResultRequest;
const ImageInfo = models.ImageInfo;
const DescribeAffectedWorkloadListResponse = models.DescribeAffectedWorkloadListResponse;
const CreateComplianceTaskResponse = models.CreateComplianceTaskResponse;
const ImageRiskTendencyInfo = models.ImageRiskTendencyInfo;
const ModifyAssetRequest = models.ModifyAssetRequest;
const DescribeRiskListRequest = models.DescribeRiskListRequest;
const ModifyAccessControlStatusResponse = models.ModifyAccessControlStatusResponse;
const ContainerNetwork = models.ContainerNetwork;
const DescribeAssetAppServiceListRequest = models.DescribeAssetAppServiceListRequest;
const RemoveAssetImageRegistryRegistryDetailRequest = models.RemoveAssetImageRegistryRegistryDetailRequest;
const ModifyVirusScanSettingRequest = models.ModifyVirusScanSettingRequest;
const DescribeAssetDBServiceListRequest = models.DescribeAssetDBServiceListRequest;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const AddEditAbnormalProcessRuleResponse = models.AddEditAbnormalProcessRuleResponse;
const DescribeAssetImageRegistryListRequest = models.DescribeAssetImageRegistryListRequest;
const CreateCheckComponentResponse = models.CreateCheckComponentResponse;
const DescribeImageRegistryTimingScanTaskRequest = models.DescribeImageRegistryTimingScanTaskRequest;
const DescribeRiskSyscallWhiteListDetailResponse = models.DescribeRiskSyscallWhiteListDetailResponse;
const DescribeReverseShellWhiteListsRequest = models.DescribeReverseShellWhiteListsRequest;
const ScanComplianceAssetsResponse = models.ScanComplianceAssetsResponse;
const CreateComplianceTaskRequest = models.CreateComplianceTaskRequest;
const DescribeReverseShellWhiteListDetailResponse = models.DescribeReverseShellWhiteListDetailResponse;
const DescribeAssetImageVulListExportResponse = models.DescribeAssetImageVulListExportResponse;
const DescribeAssetImageRegistryRiskListExportRequest = models.DescribeAssetImageRegistryRiskListExportRequest;
const EscapeEventDescription = models.EscapeEventDescription;
const DescribeAssetImageDetailResponse = models.DescribeAssetImageDetailResponse;
const CreateAssetImageRegistryScanTaskOneKeyResponse = models.CreateAssetImageRegistryScanTaskOneKeyResponse;
const AbnormalProcessSystemChildRuleInfo = models.AbnormalProcessSystemChildRuleInfo;
const DescribeAssetImageVulListExportRequest = models.DescribeAssetImageVulListExportRequest;
const DescribeExportJobResultResponse = models.DescribeExportJobResultResponse;
const ReverseShellWhiteListBaseInfo = models.ReverseShellWhiteListBaseInfo;
const AccessControlRuleInfo = models.AccessControlRuleInfo;
const DescribeAssetHostListResponse = models.DescribeAssetHostListResponse;
const ImageRepoInfo = models.ImageRepoInfo;
const CreateAssetImageRegistryScanTaskResponse = models.CreateAssetImageRegistryScanTaskResponse;
const PortInfo = models.PortInfo;
const DescribeAssetImageRegistrySummaryRequest = models.DescribeAssetImageRegistrySummaryRequest;
const DescribeTaskResultSummaryResponse = models.DescribeTaskResultSummaryResponse;
const HostInfo = models.HostInfo;
const DescribeVirusScanTimeoutSettingRequest = models.DescribeVirusScanTimeoutSettingRequest;
const ModifyAssetImageScanStopRequest = models.ModifyAssetImageScanStopRequest;
const CreateRefreshTaskRequest = models.CreateRefreshTaskRequest;
const DescribeAssetImageRiskListExportResponse = models.DescribeAssetImageRiskListExportResponse;
const DescribeAccessControlEventsRequest = models.DescribeAccessControlEventsRequest;
const DescribeAccessControlRuleDetailRequest = models.DescribeAccessControlRuleDetailRequest;
const ExportVirusListRequest = models.ExportVirusListRequest;
const ImageRiskInfo = models.ImageRiskInfo;
const DeleteReverseShellWhiteListsResponse = models.DeleteReverseShellWhiteListsResponse;
const ComplianceHostDetailInfo = models.ComplianceHostDetailInfo;
const AccessControlChildRuleInfo = models.AccessControlChildRuleInfo;
const DescribeRiskSyscallNamesResponse = models.DescribeRiskSyscallNamesResponse;
const AddEditReverseShellWhiteListResponse = models.AddEditReverseShellWhiteListResponse;
const DescribeAbnormalProcessEventsResponse = models.DescribeAbnormalProcessEventsResponse;
const InitializeUserComplianceEnvironmentResponse = models.InitializeUserComplianceEnvironmentResponse;
const SetCheckModeRequest = models.SetCheckModeRequest;
const DescribeVirusTaskListResponse = models.DescribeVirusTaskListResponse;
const DescribeAssetHostDetailResponse = models.DescribeAssetHostDetailResponse;
const DescribeAffectedNodeListResponse = models.DescribeAffectedNodeListResponse;
const DescribeClusterSummaryRequest = models.DescribeClusterSummaryRequest;
const DescribeAbnormalProcessRulesExportResponse = models.DescribeAbnormalProcessRulesExportResponse;
const DescribeEscapeEventDetailResponse = models.DescribeEscapeEventDetailResponse;
const DeleteAccessControlRulesResponse = models.DeleteAccessControlRulesResponse;
const RenewImageAuthorizeStateResponse = models.RenewImageAuthorizeStateResponse;
const DescribeEscapeRuleInfoRequest = models.DescribeEscapeRuleInfoRequest;
const DescribeComplianceWhitelistItemListResponse = models.DescribeComplianceWhitelistItemListResponse;
const DescribeVirusSummaryResponse = models.DescribeVirusSummaryResponse;
const UpdateImageRegistryTimingScanTaskRequest = models.UpdateImageRegistryTimingScanTaskRequest;
const DescribeSecEventsTendencyRequest = models.DescribeSecEventsTendencyRequest;
const DescribeContainerSecEventSummaryResponse = models.DescribeContainerSecEventSummaryResponse;
const DescribeAssetContainerDetailRequest = models.DescribeAssetContainerDetailRequest;
const ModifyAccessControlStatusRequest = models.ModifyAccessControlStatusRequest;
const ScanComplianceScanFailedAssetsRequest = models.ScanComplianceScanFailedAssetsRequest;
const ModifyCompliancePeriodTaskResponse = models.ModifyCompliancePeriodTaskResponse;
const RiskSyscallEventInfo = models.RiskSyscallEventInfo;
const ClusterCheckItem = models.ClusterCheckItem;
const DescribeAssetImageVulListResponse = models.DescribeAssetImageVulListResponse;
const ImageVul = models.ImageVul;
const AssetFilters = models.AssetFilters;
const DescribePostPayDetailResponse = models.DescribePostPayDetailResponse;
const DescribeAssetImageScanStatusRequest = models.DescribeAssetImageScanStatusRequest;
const DescribeCheckItemListResponse = models.DescribeCheckItemListResponse;
const ComplianceScanFailedAsset = models.ComplianceScanFailedAsset;
const ScanComplianceAssetsRequest = models.ScanComplianceAssetsRequest;
const DescribeAbnormalProcessRuleDetailResponse = models.DescribeAbnormalProcessRuleDetailResponse;
const ModifyVirusFileStatusRequest = models.ModifyVirusFileStatusRequest;
const DescribeAssetImageRegistryListExportRequest = models.DescribeAssetImageRegistryListExportRequest;
const DescribeAssetImageRegistryRiskListExportResponse = models.DescribeAssetImageRegistryRiskListExportResponse;
const ModifyEscapeRuleRequest = models.ModifyEscapeRuleRequest;
const DescribeAbnormalProcessRulesResponse = models.DescribeAbnormalProcessRulesResponse;
const DescribeCheckItemListRequest = models.DescribeCheckItemListRequest;
const DescribeVirusScanSettingResponse = models.DescribeVirusScanSettingResponse;
const DescribeAccessControlRuleDetailResponse = models.DescribeAccessControlRuleDetailResponse;
const CreateOrModifyPostPayCoresRequest = models.CreateOrModifyPostPayCoresRequest;
const DescribeAssetImageScanTaskRequest = models.DescribeAssetImageScanTaskRequest;
const DescribeValueAddedSrvInfoResponse = models.DescribeValueAddedSrvInfoResponse;
const CreateVirusScanTaskResponse = models.CreateVirusScanTaskResponse;
const DescribeAssetProcessListRequest = models.DescribeAssetProcessListRequest;
const DescribeAssetProcessListResponse = models.DescribeAssetProcessListResponse;
const EscapeEventInfo = models.EscapeEventInfo;
const ModifyVirusScanTimeoutSettingResponse = models.ModifyVirusScanTimeoutSettingResponse;
const DescribeAssetImageRegistryDetailRequest = models.DescribeAssetImageRegistryDetailRequest;
const CreateAssetImageRegistryScanTaskRequest = models.CreateAssetImageRegistryScanTaskRequest;
const DescribeAssetImageListExportResponse = models.DescribeAssetImageListExportResponse;
const DescribeAssetContainerDetailResponse = models.DescribeAssetContainerDetailResponse;
const AbnormalProcessChildRuleInfo = models.AbnormalProcessChildRuleInfo;
const ScanComplianceScanFailedAssetsResponse = models.ScanComplianceScanFailedAssetsResponse;
const DescribeAssetImageVirusListExportResponse = models.DescribeAssetImageVirusListExportResponse;
const SecTendencyEventInfo = models.SecTendencyEventInfo;
const DescribeAssetPortListResponse = models.DescribeAssetPortListResponse;
const DescribeRefreshTaskRequest = models.DescribeRefreshTaskRequest;
const CreateClusterCheckTaskResponse = models.CreateClusterCheckTaskResponse;
const DescribeCompliancePolicyItemAffectedAssetListRequest = models.DescribeCompliancePolicyItemAffectedAssetListRequest;
const DescribeImageRiskTendencyRequest = models.DescribeImageRiskTendencyRequest;
const CreateOrModifyPostPayCoresResponse = models.CreateOrModifyPostPayCoresResponse;
const ComplianceAffectedAsset = models.ComplianceAffectedAsset;
const DescribeVirusMonitorSettingRequest = models.DescribeVirusMonitorSettingRequest;
const DescribeAssetImageHostListResponse = models.DescribeAssetImageHostListResponse;
const DescribeImageRiskTendencyResponse = models.DescribeImageRiskTendencyResponse;
const DescribeComplianceScanFailedAssetListRequest = models.DescribeComplianceScanFailedAssetListRequest;
const DescribeAssetImageRegistryVulListRequest = models.DescribeAssetImageRegistryVulListRequest;
const DescribeImageSimpleListResponse = models.DescribeImageSimpleListResponse;
const DescribeVirusScanSettingRequest = models.DescribeVirusScanSettingRequest;
const DescribeUserClusterResponse = models.DescribeUserClusterResponse;
const DescribeAssetImageRegistryRegistryListRequest = models.DescribeAssetImageRegistryRegistryListRequest;
const DescribeVirusScanTaskStatusResponse = models.DescribeVirusScanTaskStatusResponse;
const DescribeEscapeEventsExportResponse = models.DescribeEscapeEventsExportResponse;
const ComplianceImageDetailInfo = models.ComplianceImageDetailInfo;
const DescribeComplianceWhitelistItemListRequest = models.DescribeComplianceWhitelistItemListRequest;
const DescribeAccessControlDetailRequest = models.DescribeAccessControlDetailRequest;
const ClusterRiskItem = models.ClusterRiskItem;
const DescribeVirusListResponse = models.DescribeVirusListResponse;
const DescribeAbnormalProcessEventsExportRequest = models.DescribeAbnormalProcessEventsExportRequest;
const DescribeAssetComponentListRequest = models.DescribeAssetComponentListRequest;
const DescribeUserClusterRequest = models.DescribeUserClusterRequest;
const DescribeAbnormalProcessDetailResponse = models.DescribeAbnormalProcessDetailResponse;
const DescribeAssetImageListExportRequest = models.DescribeAssetImageListExportRequest;
const ModifyAssetImageRegistryScanStopOneKeyResponse = models.ModifyAssetImageRegistryScanStopOneKeyResponse;
const DescribeRiskSyscallNamesRequest = models.DescribeRiskSyscallNamesRequest;
const SoftQuotaDayInfo = models.SoftQuotaDayInfo;
const DescribeAssetImageRegistryVirusListResponse = models.DescribeAssetImageRegistryVirusListResponse;
const DescribeAssetImageSimpleListRequest = models.DescribeAssetImageSimpleListRequest;
const DescribeAssetDBServiceListResponse = models.DescribeAssetDBServiceListResponse;
const DescribeImageSimpleListRequest = models.DescribeImageSimpleListRequest;
const DescribeAssetWebServiceListResponse = models.DescribeAssetWebServiceListResponse;
const DescribeComplianceTaskPolicyItemSummaryListRequest = models.DescribeComplianceTaskPolicyItemSummaryListRequest;
const CompliancePolicyItemSummary = models.CompliancePolicyItemSummary;
const DescribeAssetImageVulListRequest = models.DescribeAssetImageVulListRequest;
const ModifyRiskSyscallStatusRequest = models.ModifyRiskSyscallStatusRequest;
const RunTimeRiskInfo = models.RunTimeRiskInfo;
const CreateVirusScanTaskRequest = models.CreateVirusScanTaskRequest;
const DescribeAssetImageScanTaskResponse = models.DescribeAssetImageScanTaskResponse;
const AddEditAccessControlRuleRequest = models.AddEditAccessControlRuleRequest;
const ContainerMount = models.ContainerMount;
const DescribeAssetImageSimpleListResponse = models.DescribeAssetImageSimpleListResponse;
const DescribeComplianceAssetPolicyItemListResponse = models.DescribeComplianceAssetPolicyItemListResponse;
const ComplianceFilters = models.ComplianceFilters;
const ImagesInfo = models.ImagesInfo;
const DescribeReverseShellEventsExportRequest = models.DescribeReverseShellEventsExportRequest;
const WarningRule = models.WarningRule;
const DescribeAccessControlDetailResponse = models.DescribeAccessControlDetailResponse;
const DescribeAffectedNodeListRequest = models.DescribeAffectedNodeListRequest;
const DescribeAssetImageRegistryAssetStatusResponse = models.DescribeAssetImageRegistryAssetStatusResponse;
const DeleteReverseShellWhiteListsRequest = models.DeleteReverseShellWhiteListsRequest;
const AddEditRiskSyscallWhiteListResponse = models.AddEditRiskSyscallWhiteListResponse;
const ModifyAbnormalProcessStatusRequest = models.ModifyAbnormalProcessStatusRequest;
const ModifyAccessControlRuleStatusResponse = models.ModifyAccessControlRuleStatusResponse;
const ImageRisk = models.ImageRisk;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const ComplianceAssetPolicyItem = models.ComplianceAssetPolicyItem;
const InitializeUserComplianceEnvironmentRequest = models.InitializeUserComplianceEnvironmentRequest;
const DescribeAssetImageRiskListRequest = models.DescribeAssetImageRiskListRequest;
const DescribeEscapeSafeStateRequest = models.DescribeEscapeSafeStateRequest;
const StopVirusScanTaskRequest = models.StopVirusScanTaskRequest;
const DescribeEscapeEventDetailRequest = models.DescribeEscapeEventDetailRequest;
const DescribeVirusSummaryRequest = models.DescribeVirusSummaryRequest;
const RiskSyscallWhiteListBaseInfo = models.RiskSyscallWhiteListBaseInfo;
const DeleteAbnormalProcessRulesRequest = models.DeleteAbnormalProcessRulesRequest;
const ModifyCompliancePeriodTaskRequest = models.ModifyCompliancePeriodTaskRequest;
const DescribeRiskSyscallEventsRequest = models.DescribeRiskSyscallEventsRequest;
const DescribeRiskListResponse = models.DescribeRiskListResponse;
const ComponentInfo = models.ComponentInfo;
const DescribeAssetSummaryRequest = models.DescribeAssetSummaryRequest;
const CreateClusterCheckTaskRequest = models.CreateClusterCheckTaskRequest;
const DescribeAbnormalProcessDetailRequest = models.DescribeAbnormalProcessDetailRequest;
const CreateExportComplianceStatusListJobRequest = models.CreateExportComplianceStatusListJobRequest;
const ImageVirus = models.ImageVirus;
const DescribeEscapeEventInfoRequest = models.DescribeEscapeEventInfoRequest;
const DescribeRiskSyscallEventsExportResponse = models.DescribeRiskSyscallEventsExportResponse;
const ContainerInfo = models.ContainerInfo;
const DescribeAssetImageRegistryRiskInfoListRequest = models.DescribeAssetImageRegistryRiskInfoListRequest;
const DescribeAssetImageRegistryScanStatusOneKeyRequest = models.DescribeAssetImageRegistryScanStatusOneKeyRequest;
const ModifyAccessControlRuleStatusRequest = models.ModifyAccessControlRuleStatusRequest;
const DescribeWarningRulesRequest = models.DescribeWarningRulesRequest;
const RunTimeTendencyInfo = models.RunTimeTendencyInfo;
const DescribeContainerAssetSummaryRequest = models.DescribeContainerAssetSummaryRequest;
const ComponentsInfo = models.ComponentsInfo;
const DeleteRiskSyscallWhiteListsResponse = models.DeleteRiskSyscallWhiteListsResponse;
const DescribeAssetImageVirusListRequest = models.DescribeAssetImageVirusListRequest;
const DescribeAssetImageScanSettingResponse = models.DescribeAssetImageScanSettingResponse;
const DescribeReverseShellDetailResponse = models.DescribeReverseShellDetailResponse;
const DescribeAccessControlRulesExportResponse = models.DescribeAccessControlRulesExportResponse;
const ModifyAbnormalProcessStatusResponse = models.ModifyAbnormalProcessStatusResponse;
const DescribeAbnormalProcessEventsExportResponse = models.DescribeAbnormalProcessEventsExportResponse;
const DescribeContainerAssetSummaryResponse = models.DescribeContainerAssetSummaryResponse;
const CreateAssetImageScanTaskRequest = models.CreateAssetImageScanTaskRequest;
const DescribeEscapeEventsExportRequest = models.DescribeEscapeEventsExportRequest;
const DescribeImageRiskSummaryResponse = models.DescribeImageRiskSummaryResponse;
const CheckRepeatAssetImageRegistryRequest = models.CheckRepeatAssetImageRegistryRequest;
const AffectedNodeItem = models.AffectedNodeItem;
const CreateCheckComponentRequest = models.CreateCheckComponentRequest;
const DeleteRiskSyscallWhiteListsRequest = models.DeleteRiskSyscallWhiteListsRequest;
const DescribeImageAuthorizedInfoRequest = models.DescribeImageAuthorizedInfoRequest;
const DescribeAssetImageRegistryRiskInfoListResponse = models.DescribeAssetImageRegistryRiskInfoListResponse;
const DescribeAssetImageRegistryDetailResponse = models.DescribeAssetImageRegistryDetailResponse;
const AddCompliancePolicyItemToWhitelistResponse = models.AddCompliancePolicyItemToWhitelistResponse;
const DescribeAccessControlRulesRequest = models.DescribeAccessControlRulesRequest;
const StopVirusScanTaskResponse = models.StopVirusScanTaskResponse;
const AddEditWarningRulesRequest = models.AddEditWarningRulesRequest;
const ModifyAssetResponse = models.ModifyAssetResponse;
const DescribeReverseShellEventsExportResponse = models.DescribeReverseShellEventsExportResponse;
const ImagesBindRuleInfo = models.ImagesBindRuleInfo;
const DescribeAssetImageListResponse = models.DescribeAssetImageListResponse;
const ComplianceAssetInfo = models.ComplianceAssetInfo;
const DescribeAssetImageRegistryVirusListRequest = models.DescribeAssetImageRegistryVirusListRequest;
const DescribeReverseShellWhiteListDetailRequest = models.DescribeReverseShellWhiteListDetailRequest;
const ModifyVirusMonitorSettingResponse = models.ModifyVirusMonitorSettingResponse;
const DescribeComplianceTaskAssetSummaryResponse = models.DescribeComplianceTaskAssetSummaryResponse;
const DescribeWarningRulesResponse = models.DescribeWarningRulesResponse;
const VirusTaskInfo = models.VirusTaskInfo;
const AffectedWorkloadItem = models.AffectedWorkloadItem;
const DescribeCompliancePeriodTaskListRequest = models.DescribeCompliancePeriodTaskListRequest;
const DescribeAccessControlRulesExportRequest = models.DescribeAccessControlRulesExportRequest;
const RiskSyscallEventDescription = models.RiskSyscallEventDescription;
const AddEditWarningRulesResponse = models.AddEditWarningRulesResponse;
const DescribeAssetImageRegistryRegistryListResponse = models.DescribeAssetImageRegistryRegistryListResponse;
const DescribeAssetImageRegistryAssetStatusRequest = models.DescribeAssetImageRegistryAssetStatusRequest;
const ImageProgress = models.ImageProgress;
const ModifyVirusScanTimeoutSettingRequest = models.ModifyVirusScanTimeoutSettingRequest;
const CreateVirusScanAgainResponse = models.CreateVirusScanAgainResponse;
const AddEditAccessControlRuleResponse = models.AddEditAccessControlRuleResponse;
const DeleteCompliancePolicyItemFromWhitelistResponse = models.DeleteCompliancePolicyItemFromWhitelistResponse;
const CreateAssetImageScanSettingResponse = models.CreateAssetImageScanSettingResponse;
const DescribeAccessControlRulesResponse = models.DescribeAccessControlRulesResponse;
const ModifyEscapeRuleResponse = models.ModifyEscapeRuleResponse;
const AssetSimpleImageInfo = models.AssetSimpleImageInfo;
const DescribeCompliancePolicyItemAffectedSummaryRequest = models.DescribeCompliancePolicyItemAffectedSummaryRequest;
const DescribeVirusDetailResponse = models.DescribeVirusDetailResponse;
const DescribeComplianceAssetListResponse = models.DescribeComplianceAssetListResponse;
const DescribeComplianceAssetDetailInfoResponse = models.DescribeComplianceAssetDetailInfoResponse;
const ModifyAssetImageRegistryScanStopRequest = models.ModifyAssetImageRegistryScanStopRequest;
const DescribeVirusScanTaskStatusRequest = models.DescribeVirusScanTaskStatusRequest;
const RiskSyscallWhiteListInfo = models.RiskSyscallWhiteListInfo;
const DescribeCompliancePolicyItemAffectedAssetListResponse = models.DescribeCompliancePolicyItemAffectedAssetListResponse;
const DescribeComplianceAssetPolicyItemListRequest = models.DescribeComplianceAssetPolicyItemListRequest;
const DescribeAssetImageRegistryVulListExportResponse = models.DescribeAssetImageRegistryVulListExportResponse;
const ProcessDetailBaseInfo = models.ProcessDetailBaseInfo;
const DescribeAssetHostListRequest = models.DescribeAssetHostListRequest;
const DescribeRiskSyscallEventsExportRequest = models.DescribeRiskSyscallEventsExportRequest;
const DescribeRiskSyscallWhiteListsRequest = models.DescribeRiskSyscallWhiteListsRequest;
const DescribeUnfinishRefreshTaskRequest = models.DescribeUnfinishRefreshTaskRequest;
const DescribeAssetImageRegistryScanStatusOneKeyResponse = models.DescribeAssetImageRegistryScanStatusOneKeyResponse;
const DescribeAssetImageRegistryRegistryDetailRequest = models.DescribeAssetImageRegistryRegistryDetailRequest;
const UpdateAssetImageRegistryRegistryDetailRequest = models.UpdateAssetImageRegistryRegistryDetailRequest;
const ServiceInfo = models.ServiceInfo;
const AddEditReverseShellWhiteListRequest = models.AddEditReverseShellWhiteListRequest;
const DescribeVirusTaskListRequest = models.DescribeVirusTaskListRequest;
const DescribeAssetImageRegistryVirusListExportRequest = models.DescribeAssetImageRegistryVirusListExportRequest;
const DescribeAssetImageRegistryListExportResponse = models.DescribeAssetImageRegistryListExportResponse;
const FileAttributeInfo = models.FileAttributeInfo;
const DescribePostPayDetailRequest = models.DescribePostPayDetailRequest;
const DescribeAssetHostDetailRequest = models.DescribeAssetHostDetailRequest;
const DescribeRefreshTaskResponse = models.DescribeRefreshTaskResponse;
const ReverseShellWhiteListInfo = models.ReverseShellWhiteListInfo;
const VirusInfo = models.VirusInfo;
const EscapeRuleEnabled = models.EscapeRuleEnabled;


/**
 * tcss client
 * @class
 */
class TcssClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcss.tencentcloudapi.com", "2020-11-01", credential, region, profile);
    }
    
    /**
     * DescribeImageAuthorizedInfo  查询镜像授权信息
     * @param {DescribeImageAuthorizedInfoRequest} req
     * @param {function(string, DescribeImageAuthorizedInfoResponse):void} cb
     * @public
     */
    DescribeImageAuthorizedInfo(req, cb) {
        let resp = new DescribeImageAuthorizedInfoResponse();
        this.request("DescribeImageAuthorizedInfo", req, resp, cb);
    }

    /**
     * 查询运行时异常进程事件列表信息导出
     * @param {DescribeAbnormalProcessEventsExportRequest} req
     * @param {function(string, DescribeAbnormalProcessEventsExportResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessEventsExport(req, cb) {
        let resp = new DescribeAbnormalProcessEventsExportResponse();
        this.request("DescribeAbnormalProcessEventsExport", req, resp, cb);
    }

    /**
     * 运行时文件扫描超时设置查询
     * @param {DescribeVirusScanTimeoutSettingRequest} req
     * @param {function(string, DescribeVirusScanTimeoutSettingResponse):void} cb
     * @public
     */
    DescribeVirusScanTimeoutSetting(req, cb) {
        let resp = new DescribeVirusScanTimeoutSettingResponse();
        this.request("DescribeVirusScanTimeoutSetting", req, resp, cb);
    }

    /**
     * 运行时查询木马概览信息
     * @param {DescribeVirusSummaryRequest} req
     * @param {function(string, DescribeVirusSummaryResponse):void} cb
     * @public
     */
    DescribeVirusSummary(req, cb) {
        let resp = new DescribeVirusSummaryResponse();
        this.request("DescribeVirusSummary", req, resp, cb);
    }

    /**
     * 容器安全搜索查询主机列表
     * @param {DescribeAssetHostListRequest} req
     * @param {function(string, DescribeAssetHostListResponse):void} cb
     * @public
     */
    DescribeAssetHostList(req, cb) {
        let resp = new DescribeAssetHostListResponse();
        this.request("DescribeAssetHostList", req, resp, cb);
    }

    /**
     * 重新检测选定的检测失败的资产下的所有失败的检测项，返回创建的合规检查任务的ID。
     * @param {ScanComplianceScanFailedAssetsRequest} req
     * @param {function(string, ScanComplianceScanFailedAssetsResponse):void} cb
     * @public
     */
    ScanComplianceScanFailedAssets(req, cb) {
        let resp = new ScanComplianceScanFailedAssetsResponse();
        this.request("ScanComplianceScanFailedAssets", req, resp, cb);
    }

    /**
     * 修改运行时访问控制策略的状态，启用或者禁用
     * @param {ModifyAccessControlRuleStatusRequest} req
     * @param {function(string, ModifyAccessControlRuleStatusResponse):void} cb
     * @public
     */
    ModifyAccessControlRuleStatus(req, cb) {
        let resp = new ModifyAccessControlRuleStatusResponse();
        this.request("ModifyAccessControlRuleStatus", req, resp, cb);
    }

    /**
     * 查询运行时异常进程策略列表信息导出
     * @param {DescribeAbnormalProcessRulesExportRequest} req
     * @param {function(string, DescribeAbnormalProcessRulesExportResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessRulesExport(req, cb) {
        let resp = new DescribeAbnormalProcessRulesExportResponse();
        this.request("DescribeAbnormalProcessRulesExport", req, resp, cb);
    }

    /**
     * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
     * @param {ModifyEscapeEventStatusRequest} req
     * @param {function(string, ModifyEscapeEventStatusResponse):void} cb
     * @public
     */
    ModifyEscapeEventStatus(req, cb) {
        let resp = new ModifyEscapeEventStatusResponse();
        this.request("ModifyEscapeEventStatus", req, resp, cb);
    }

    /**
     * 镜像仓库查看定时任务
     * @param {DescribeImageRegistryTimingScanTaskRequest} req
     * @param {function(string, DescribeImageRegistryTimingScanTaskResponse):void} cb
     * @public
     */
    DescribeImageRegistryTimingScanTask(req, cb) {
        let resp = new DescribeImageRegistryTimingScanTaskResponse();
        this.request("DescribeImageRegistryTimingScanTask", req, resp, cb);
    }

    /**
     * 容器安全查询app服务列表
     * @param {DescribeAssetAppServiceListRequest} req
     * @param {function(string, DescribeAssetAppServiceListResponse):void} cb
     * @public
     */
    DescribeAssetAppServiceList(req, cb) {
        let resp = new DescribeAssetAppServiceListResponse();
        this.request("DescribeAssetAppServiceList", req, resp, cb);
    }

    /**
     * 搜索查询容器列表
     * @param {DescribeAssetContainerListRequest} req
     * @param {function(string, DescribeAssetContainerListResponse):void} cb
     * @public
     */
    DescribeAssetContainerList(req, cb) {
        let resp = new DescribeAssetContainerListResponse();
        this.request("DescribeAssetContainerList", req, resp, cb);
    }

    /**
     * 删除单个镜像仓库详细信息
     * @param {RemoveAssetImageRegistryRegistryDetailRequest} req
     * @param {function(string, RemoveAssetImageRegistryRegistryDetailResponse):void} cb
     * @public
     */
    RemoveAssetImageRegistryRegistryDetail(req, cb) {
        let resp = new RemoveAssetImageRegistryRegistryDetailResponse();
        this.request("RemoveAssetImageRegistryRegistryDetail", req, resp, cb);
    }

    /**
     * 下发刷新任务，会刷新资产信息
     * @param {CreateRefreshTaskRequest} req
     * @param {function(string, CreateRefreshTaskResponse):void} cb
     * @public
     */
    CreateRefreshTask(req, cb) {
        let resp = new CreateRefreshTaskResponse();
        this.request("CreateRefreshTask", req, resp, cb);
    }

    /**
     * 查询运行时运行时反弹shell白名单列表信息
     * @param {DescribeReverseShellWhiteListsRequest} req
     * @param {function(string, DescribeReverseShellWhiteListsResponse):void} cb
     * @public
     */
    DescribeReverseShellWhiteLists(req, cb) {
        let resp = new DescribeReverseShellWhiteListsResponse();
        this.request("DescribeReverseShellWhiteLists", req, resp, cb);
    }

    /**
     * 查询workload类型的影响范围，返回workload列表
     * @param {DescribeAffectedWorkloadListRequest} req
     * @param {function(string, DescribeAffectedWorkloadListResponse):void} cb
     * @public
     */
    DescribeAffectedWorkloadList(req, cb) {
        let resp = new DescribeAffectedWorkloadListResponse();
        this.request("DescribeAffectedWorkloadList", req, resp, cb);
    }

    /**
     * 容器安全搜索查询容器组件列表
     * @param {DescribeAssetComponentListRequest} req
     * @param {function(string, DescribeAssetComponentListResponse):void} cb
     * @public
     */
    DescribeAssetComponentList(req, cb) {
        let resp = new DescribeAssetComponentListResponse();
        this.request("DescribeAssetComponentList", req, resp, cb);
    }

    /**
     * 容器安全查询镜像扫描状态
     * @param {DescribeAssetImageScanStatusRequest} req
     * @param {function(string, DescribeAssetImageScanStatusResponse):void} cb
     * @public
     */
    DescribeAssetImageScanStatus(req, cb) {
        let resp = new DescribeAssetImageScanStatusResponse();
        this.request("DescribeAssetImageScanStatus", req, resp, cb);
    }

    /**
     * 运行时查询文件查杀实时监控设置
     * @param {DescribeVirusMonitorSettingRequest} req
     * @param {function(string, DescribeVirusMonitorSettingResponse):void} cb
     * @public
     */
    DescribeVirusMonitorSetting(req, cb) {
        let resp = new DescribeVirusMonitorSettingResponse();
        this.request("DescribeVirusMonitorSetting", req, resp, cb);
    }

    /**
     * 运行时文件扫描超时设置
     * @param {ModifyVirusScanTimeoutSettingRequest} req
     * @param {function(string, ModifyVirusScanTimeoutSettingResponse):void} cb
     * @public
     */
    ModifyVirusScanTimeoutSetting(req, cb) {
        let resp = new ModifyVirusScanTimeoutSettingResponse();
        this.request("ModifyVirusScanTimeoutSetting", req, resp, cb);
    }

    /**
     * 创建集群检查任务，用户检查用户的集群相关风险项
     * @param {CreateClusterCheckTaskRequest} req
     * @param {function(string, CreateClusterCheckTaskResponse):void} cb
     * @public
     */
    CreateClusterCheckTask(req, cb) {
        let resp = new CreateClusterCheckTaskResponse();
        this.request("CreateClusterCheckTask", req, resp, cb);
    }

    /**
     * 查询运行时访问控制事件列表
     * @param {DescribeAccessControlEventsRequest} req
     * @param {function(string, DescribeAccessControlEventsResponse):void} cb
     * @public
     */
    DescribeAccessControlEvents(req, cb) {
        let resp = new DescribeAccessControlEventsResponse();
        this.request("DescribeAccessControlEvents", req, resp, cb);
    }

    /**
     * 运行时更新文件查杀设置
     * @param {ModifyVirusScanSettingRequest} req
     * @param {function(string, ModifyVirusScanSettingResponse):void} cb
     * @public
     */
    ModifyVirusScanSetting(req, cb) {
        let resp = new ModifyVirusScanSettingResponse();
        this.request("ModifyVirusScanSetting", req, resp, cb);
    }

    /**
     * 镜像仓库木马信息列表导出
     * @param {DescribeAssetImageRegistryVirusListExportRequest} req
     * @param {function(string, DescribeAssetImageRegistryVirusListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryVirusListExport(req, cb) {
        let resp = new DescribeAssetImageRegistryVirusListExportResponse();
        this.request("DescribeAssetImageRegistryVirusListExport", req, resp, cb);
    }

    /**
     * 获取受影响的集群数量，返回数量
     * @param {DescribeAffectedClusterCountRequest} req
     * @param {function(string, DescribeAffectedClusterCountResponse):void} cb
     * @public
     */
    DescribeAffectedClusterCount(req, cb) {
        let resp = new DescribeAffectedClusterCountResponse();
        this.request("DescribeAffectedClusterCount", req, resp, cb);
    }

    /**
     * 修改高危系统调用事件的状态信息
     * @param {ModifyRiskSyscallStatusRequest} req
     * @param {function(string, ModifyRiskSyscallStatusResponse):void} cb
     * @public
     */
    ModifyRiskSyscallStatus(req, cb) {
        let resp = new ModifyRiskSyscallStatusResponse();
        this.request("ModifyRiskSyscallStatus", req, resp, cb);
    }

    /**
     * DescribeEscapeEventInfo 查询容器逃逸事件列表
     * @param {DescribeEscapeEventInfoRequest} req
     * @param {function(string, DescribeEscapeEventInfoResponse):void} cb
     * @public
     */
    DescribeEscapeEventInfo(req, cb) {
        let resp = new DescribeEscapeEventInfoResponse();
        this.request("DescribeEscapeEventInfo", req, resp, cb);
    }

    /**
     * 查看镜像仓库资产更新进度状态
     * @param {DescribeAssetImageRegistryAssetStatusRequest} req
     * @param {function(string, DescribeAssetImageRegistryAssetStatusResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryAssetStatus(req, cb) {
        let resp = new DescribeAssetImageRegistryAssetStatusResponse();
        this.request("DescribeAssetImageRegistryAssetStatus", req, resp, cb);
    }

    /**
     * 镜像仓库仓库列表
     * @param {DescribeAssetImageRegistryRegistryListRequest} req
     * @param {function(string, DescribeAssetImageRegistryRegistryListResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryRegistryList(req, cb) {
        let resp = new DescribeAssetImageRegistryRegistryListResponse();
        this.request("DescribeAssetImageRegistryRegistryList", req, resp, cb);
    }

    /**
     * 镜像仓库停止镜像扫描任务
     * @param {ModifyAssetImageRegistryScanStopRequest} req
     * @param {function(string, ModifyAssetImageRegistryScanStopResponse):void} cb
     * @public
     */
    ModifyAssetImageRegistryScanStop(req, cb) {
        let resp = new ModifyAssetImageRegistryScanStopResponse();
        this.request("ModifyAssetImageRegistryScanStop", req, resp, cb);
    }

    /**
     * 查询单个集群的详细信息
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * 镜像仓库查询木马病毒列表
     * @param {DescribeAssetImageRegistryVirusListRequest} req
     * @param {function(string, DescribeAssetImageRegistryVirusListResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryVirusList(req, cb) {
        let resp = new DescribeAssetImageRegistryVirusListResponse();
        this.request("DescribeAssetImageRegistryVirusList", req, resp, cb);
    }

    /**
     * 镜像仓库更新定时任务
     * @param {UpdateImageRegistryTimingScanTaskRequest} req
     * @param {function(string, UpdateImageRegistryTimingScanTaskResponse):void} cb
     * @public
     */
    UpdateImageRegistryTimingScanTask(req, cb) {
        let resp = new UpdateImageRegistryTimingScanTaskResponse();
        this.request("UpdateImageRegistryTimingScanTask", req, resp, cb);
    }

    /**
     * 镜像仓库创建镜像一键扫描任务
     * @param {CreateAssetImageRegistryScanTaskOneKeyRequest} req
     * @param {function(string, CreateAssetImageRegistryScanTaskOneKeyResponse):void} cb
     * @public
     */
    CreateAssetImageRegistryScanTaskOneKey(req, cb) {
        let resp = new CreateAssetImageRegistryScanTaskOneKeyResponse();
        this.request("CreateAssetImageRegistryScanTaskOneKey", req, resp, cb);
    }

    /**
     * 容器安全停止镜像扫描
     * @param {ModifyAssetImageScanStopRequest} req
     * @param {function(string, ModifyAssetImageScanStopResponse):void} cb
     * @public
     */
    ModifyAssetImageScanStop(req, cb) {
        let resp = new ModifyAssetImageScanStopResponse();
        this.request("ModifyAssetImageScanStop", req, resp, cb);
    }

    /**
     * DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     * @param {DescribeEscapeEventsExportRequest} req
     * @param {function(string, DescribeEscapeEventsExportResponse):void} cb
     * @public
     */
    DescribeEscapeEventsExport(req, cb) {
        let resp = new DescribeEscapeEventsExportResponse();
        this.request("DescribeEscapeEventsExport", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像列表导出
     * @param {DescribeAssetImageListExportRequest} req
     * @param {function(string, DescribeAssetImageListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageListExport(req, cb) {
        let resp = new DescribeAssetImageListExportResponse();
        this.request("DescribeAssetImageListExport", req, resp, cb);
    }

    /**
     * 获取镜像扫描设置信息
     * @param {DescribeAssetImageScanSettingRequest} req
     * @param {function(string, DescribeAssetImageScanSettingResponse):void} cb
     * @public
     */
    DescribeAssetImageScanSetting(req, cb) {
        let resp = new DescribeAssetImageScanSettingResponse();
        this.request("DescribeAssetImageScanSetting", req, resp, cb);
    }

    /**
     * 安装检查组件，创建防护容器
     * @param {CreateCheckComponentRequest} req
     * @param {function(string, CreateCheckComponentResponse):void} cb
     * @public
     */
    CreateCheckComponent(req, cb) {
        let resp = new CreateCheckComponentResponse();
        this.request("CreateCheckComponent", req, resp, cb);
    }

    /**
     * 查询运行时高危系统调用系统名称列表
     * @param {DescribeRiskSyscallNamesRequest} req
     * @param {function(string, DescribeRiskSyscallNamesResponse):void} cb
     * @public
     */
    DescribeRiskSyscallNames(req, cb) {
        let resp = new DescribeRiskSyscallNamesResponse();
        this.request("DescribeRiskSyscallNames", req, resp, cb);
    }

    /**
     * 查询合规检测的定时任务列表
     * @param {DescribeCompliancePeriodTaskListRequest} req
     * @param {function(string, DescribeCompliancePeriodTaskListResponse):void} cb
     * @public
     */
    DescribeCompliancePeriodTaskList(req, cb) {
        let resp = new DescribeCompliancePeriodTaskListResponse();
        this.request("DescribeCompliancePeriodTaskList", req, resp, cb);
    }

    /**
     * 删除运行访问控制策略
     * @param {DeleteAccessControlRulesRequest} req
     * @param {function(string, DeleteAccessControlRulesResponse):void} cb
     * @public
     */
    DeleteAccessControlRules(req, cb) {
        let resp = new DeleteAccessControlRulesResponse();
        this.request("DeleteAccessControlRules", req, resp, cb);
    }

    /**
     * DescribePurchaseStateInfo 查询容器安全服务已购买信息
     * @param {DescribePurchaseStateInfoRequest} req
     * @param {function(string, DescribePurchaseStateInfoResponse):void} cb
     * @public
     */
    DescribePurchaseStateInfo(req, cb) {
        let resp = new DescribePurchaseStateInfoResponse();
        this.request("DescribePurchaseStateInfo", req, resp, cb);
    }

    /**
     * 查询运行时高危系统调用白名单详细信息
     * @param {DescribeRiskSyscallWhiteListDetailRequest} req
     * @param {function(string, DescribeRiskSyscallWhiteListDetailResponse):void} cb
     * @public
     */
    DescribeRiskSyscallWhiteListDetail(req, cb) {
        let resp = new DescribeRiskSyscallWhiteListDetailResponse();
        this.request("DescribeRiskSyscallWhiteListDetail", req, resp, cb);
    }

    /**
     * 镜像仓库镜像仓库列表详情
     * @param {DescribeAssetImageRegistryDetailRequest} req
     * @param {function(string, DescribeAssetImageRegistryDetailResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryDetail(req, cb) {
        let resp = new DescribeAssetImageRegistryDetailResponse();
        this.request("DescribeAssetImageRegistryDetail", req, resp, cb);
    }

    /**
     * 运行时高危系统调用列表导出
     * @param {DescribeRiskSyscallEventsExportRequest} req
     * @param {function(string, DescribeRiskSyscallEventsExportResponse):void} cb
     * @public
     */
    DescribeRiskSyscallEventsExport(req, cb) {
        let resp = new DescribeRiskSyscallEventsExportResponse();
        this.request("DescribeRiskSyscallEventsExport", req, resp, cb);
    }

    /**
     * 查询运行时异常策略详细信息
     * @param {DescribeAbnormalProcessRuleDetailRequest} req
     * @param {function(string, DescribeAbnormalProcessRuleDetailResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessRuleDetail(req, cb) {
        let resp = new DescribeAbnormalProcessRuleDetailResponse();
        this.request("DescribeAbnormalProcessRuleDetail", req, resp, cb);
    }

    /**
     * 查看单个镜像仓库详细信息
     * @param {DescribeAssetImageRegistryRegistryDetailRequest} req
     * @param {function(string, DescribeAssetImageRegistryRegistryDetailResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryRegistryDetail(req, cb) {
        let resp = new DescribeAssetImageRegistryRegistryDetailResponse();
        this.request("DescribeAssetImageRegistryRegistryDetail", req, resp, cb);
    }

    /**
     * DescribeValueAddedSrvInfo查询增值服务需购买信息
     * @param {DescribeValueAddedSrvInfoRequest} req
     * @param {function(string, DescribeValueAddedSrvInfoResponse):void} cb
     * @public
     */
    DescribeValueAddedSrvInfo(req, cb) {
        let resp = new DescribeValueAddedSrvInfoResponse();
        this.request("DescribeValueAddedSrvInfo", req, resp, cb);
    }

    /**
     * 添加编辑运行时反弹shell白名单
     * @param {AddEditReverseShellWhiteListRequest} req
     * @param {function(string, AddEditReverseShellWhiteListResponse):void} cb
     * @public
     */
    AddEditReverseShellWhiteList(req, cb) {
        let resp = new AddEditReverseShellWhiteListResponse();
        this.request("AddEditReverseShellWhiteList", req, resp, cb);
    }

    /**
     * 查询运行时反弹shell事件详细信息
     * @param {DescribeReverseShellDetailRequest} req
     * @param {function(string, DescribeReverseShellDetailResponse):void} cb
     * @public
     */
    DescribeReverseShellDetail(req, cb) {
        let resp = new DescribeReverseShellDetailResponse();
        this.request("DescribeReverseShellDetail", req, resp, cb);
    }

    /**
     * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
     * @param {DescribeAssetImageBindRuleInfoRequest} req
     * @param {function(string, DescribeAssetImageBindRuleInfoResponse):void} cb
     * @public
     */
    DescribeAssetImageBindRuleInfo(req, cb) {
        let resp = new DescribeAssetImageBindRuleInfoResponse();
        this.request("DescribeAssetImageBindRuleInfo", req, resp, cb);
    }

    /**
     * 查询高危系统调用事件详细信息
     * @param {DescribeRiskSyscallDetailRequest} req
     * @param {function(string, DescribeRiskSyscallDetailResponse):void} cb
     * @public
     */
    DescribeRiskSyscallDetail(req, cb) {
        let resp = new DescribeRiskSyscallDetailResponse();
        this.request("DescribeRiskSyscallDetail", req, resp, cb);
    }

    /**
     * 查询刷新任务
     * @param {DescribeRefreshTaskRequest} req
     * @param {function(string, DescribeRefreshTaskResponse):void} cb
     * @public
     */
    DescribeRefreshTask(req, cb) {
        let resp = new DescribeRefreshTaskResponse();
        this.request("DescribeRefreshTask", req, resp, cb);
    }

    /**
     * 查询检查结果总览，返回受影响的节点数量，返回7天的数据，总共7个
     * @param {DescribeTaskResultSummaryRequest} req
     * @param {function(string, DescribeTaskResultSummaryResponse):void} cb
     * @public
     */
    DescribeTaskResultSummary(req, cb) {
        let resp = new DescribeTaskResultSummaryResponse();
        this.request("DescribeTaskResultSummary", req, resp, cb);
    }

    /**
     * 查询容器详细信息
     * @param {DescribeAssetContainerDetailRequest} req
     * @param {function(string, DescribeAssetContainerDetailResponse):void} cb
     * @public
     */
    DescribeAssetContainerDetail(req, cb) {
        let resp = new DescribeAssetContainerDetailResponse();
        this.request("DescribeAssetContainerDetail", req, resp, cb);
    }

    /**
     * 镜像仓库查询镜像高危行为列表
     * @param {DescribeAssetImageRegistryRiskInfoListRequest} req
     * @param {function(string, DescribeAssetImageRegistryRiskInfoListResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryRiskInfoList(req, cb) {
        let resp = new DescribeAssetImageRegistryRiskInfoListResponse();
        this.request("DescribeAssetImageRegistryRiskInfoList", req, resp, cb);
    }

    /**
     * ModifyEscapeRule  修改容器逃逸扫描规则信息
     * @param {ModifyEscapeRuleRequest} req
     * @param {function(string, ModifyEscapeRuleResponse):void} cb
     * @public
     */
    ModifyEscapeRule(req, cb) {
        let resp = new ModifyEscapeRuleResponse();
        this.request("ModifyEscapeRule", req, resp, cb);
    }

    /**
     * 按照 检测项 → 资产 的两级层次展开的第一层级：检测项层级。
     * @param {DescribeCompliancePolicyItemAffectedSummaryRequest} req
     * @param {function(string, DescribeCompliancePolicyItemAffectedSummaryResponse):void} cb
     * @public
     */
    DescribeCompliancePolicyItemAffectedSummary(req, cb) {
        let resp = new DescribeCompliancePolicyItemAffectedSummaryResponse();
        this.request("DescribeCompliancePolicyItemAffectedSummary", req, resp, cb);
    }

    /**
     * 查询容器资产概览信息
     * @param {DescribeContainerAssetSummaryRequest} req
     * @param {function(string, DescribeContainerAssetSummaryResponse):void} cb
     * @public
     */
    DescribeContainerAssetSummary(req, cb) {
        let resp = new DescribeContainerAssetSummaryResponse();
        this.request("DescribeContainerAssetSummary", req, resp, cb);
    }

    /**
     * 查询运行时反弹shell事件列表信息导出
     * @param {DescribeReverseShellEventsExportRequest} req
     * @param {function(string, DescribeReverseShellEventsExportResponse):void} cb
     * @public
     */
    DescribeReverseShellEventsExport(req, cb) {
        let resp = new DescribeReverseShellEventsExportResponse();
        this.request("DescribeReverseShellEventsExport", req, resp, cb);
    }

    /**
     * 修改运行时异常进程策略的开启关闭状态
     * @param {ModifyAbnormalProcessRuleStatusRequest} req
     * @param {function(string, ModifyAbnormalProcessRuleStatusResponse):void} cb
     * @public
     */
    ModifyAbnormalProcessRuleStatus(req, cb) {
        let resp = new ModifyAbnormalProcessRuleStatusResponse();
        this.request("ModifyAbnormalProcessRuleStatus", req, resp, cb);
    }

    /**
     * 查询容器安全本地镜像风险趋势
     * @param {DescribeImageRiskTendencyRequest} req
     * @param {function(string, DescribeImageRiskTendencyResponse):void} cb
     * @public
     */
    DescribeImageRiskTendency(req, cb) {
        let resp = new DescribeImageRiskTendencyResponse();
        this.request("DescribeImageRiskTendency", req, resp, cb);
    }

    /**
     * 查询导出任务的结果
     * @param {DescribeExportJobResultRequest} req
     * @param {function(string, DescribeExportJobResultResponse):void} cb
     * @public
     */
    DescribeExportJobResult(req, cb) {
        let resp = new DescribeExportJobResultResponse();
        this.request("DescribeExportJobResult", req, resp, cb);
    }

    /**
     * 容器安全创建镜像扫描任务
     * @param {CreateAssetImageScanTaskRequest} req
     * @param {function(string, CreateAssetImageScanTaskResponse):void} cb
     * @public
     */
    CreateAssetImageScanTask(req, cb) {
        let resp = new CreateAssetImageScanTaskResponse();
        this.request("CreateAssetImageScanTask", req, resp, cb);
    }

    /**
     * 查询正在一键扫描的镜像扫描taskid
     * @param {DescribeAssetImageScanTaskRequest} req
     * @param {function(string, DescribeAssetImageScanTaskResponse):void} cb
     * @public
     */
    DescribeAssetImageScanTask(req, cb) {
        let resp = new DescribeAssetImageScanTaskResponse();
        this.request("DescribeAssetImageScanTask", req, resp, cb);
    }

    /**
     * 镜像仓库镜像列表导出
     * @param {DescribeAssetImageRegistryListExportRequest} req
     * @param {function(string, DescribeAssetImageRegistryListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryListExport(req, cb) {
        let resp = new DescribeAssetImageRegistryListExportResponse();
        this.request("DescribeAssetImageRegistryListExport", req, resp, cb);
    }

    /**
     * 查询上次任务的资产通过率汇总信息
     * @param {DescribeComplianceTaskAssetSummaryRequest} req
     * @param {function(string, DescribeComplianceTaskAssetSummaryResponse):void} cb
     * @public
     */
    DescribeComplianceTaskAssetSummary(req, cb) {
        let resp = new DescribeComplianceTaskAssetSummaryResponse();
        this.request("DescribeComplianceTaskAssetSummary", req, resp, cb);
    }

    /**
     * 查询运行访问控制策略列表信息
     * @param {DescribeAccessControlRulesRequest} req
     * @param {function(string, DescribeAccessControlRulesResponse):void} cb
     * @public
     */
    DescribeAccessControlRules(req, cb) {
        let resp = new DescribeAccessControlRulesResponse();
        this.request("DescribeAccessControlRules", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像木马列表导出
     * @param {DescribeAssetImageVirusListExportRequest} req
     * @param {function(string, DescribeAssetImageVirusListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageVirusListExport(req, cb) {
        let resp = new DescribeAssetImageVirusListExportResponse();
        this.request("DescribeAssetImageVirusListExport", req, resp, cb);
    }

    /**
     * 运行时更新文件查杀实时监控设置
     * @param {ModifyVirusMonitorSettingRequest} req
     * @param {function(string, ModifyVirusMonitorSettingResponse):void} cb
     * @public
     */
    ModifyVirusMonitorSetting(req, cb) {
        let resp = new ModifyVirusMonitorSettingResponse();
        this.request("ModifyVirusMonitorSetting", req, resp, cb);
    }

    /**
     * DescribePostPayDetail  查询后付费详情
     * @param {DescribePostPayDetailRequest} req
     * @param {function(string, DescribePostPayDetailResponse):void} cb
     * @public
     */
    DescribePostPayDetail(req, cb) {
        let resp = new DescribePostPayDetailResponse();
        this.request("DescribePostPayDetail", req, resp, cb);
    }

    /**
     * 重新检测选定的资产
     * @param {ScanComplianceAssetsRequest} req
     * @param {function(string, ScanComplianceAssetsResponse):void} cb
     * @public
     */
    ScanComplianceAssets(req, cb) {
        let resp = new ScanComplianceAssetsResponse();
        this.request("ScanComplianceAssets", req, resp, cb);
    }

    /**
     * 运行时停止木马查杀任务
     * @param {StopVirusScanTaskRequest} req
     * @param {function(string, StopVirusScanTaskResponse):void} cb
     * @public
     */
    StopVirusScanTask(req, cb) {
        let resp = new StopVirusScanTaskResponse();
        this.request("StopVirusScanTask", req, resp, cb);
    }

    /**
     * 查询所有检查项接口，返回总数和检查项列表
     * @param {DescribeCheckItemListRequest} req
     * @param {function(string, DescribeCheckItemListResponse):void} cb
     * @public
     */
    DescribeCheckItemList(req, cb) {
        let resp = new DescribeCheckItemListResponse();
        this.request("DescribeCheckItemList", req, resp, cb);
    }

    /**
     * 运行时查询木马文件信息
     * @param {DescribeVirusDetailRequest} req
     * @param {function(string, DescribeVirusDetailResponse):void} cb
     * @public
     */
    DescribeVirusDetail(req, cb) {
        let resp = new DescribeVirusDetailResponse();
        this.request("DescribeVirusDetail", req, resp, cb);
    }

    /**
     * 查询白名单列表
     * @param {DescribeComplianceWhitelistItemListRequest} req
     * @param {function(string, DescribeComplianceWhitelistItemListResponse):void} cb
     * @public
     */
    DescribeComplianceWhitelistItemList(req, cb) {
        let resp = new DescribeComplianceWhitelistItemListResponse();
        this.request("DescribeComplianceWhitelistItemList", req, resp, cb);
    }

    /**
     * 创建合规检查任务，在资产级别触发重新检测时使用。
     * @param {CreateComplianceTaskRequest} req
     * @param {function(string, CreateComplianceTaskResponse):void} cb
     * @public
     */
    CreateComplianceTask(req, cb) {
        let resp = new CreateComplianceTaskResponse();
        this.request("CreateComplianceTask", req, resp, cb);
    }

    /**
     * 按照 资产 → 检测项 二层结构展示的信息。这里查询第一层 资产的通过率汇总信息。
     * @param {DescribeComplianceScanFailedAssetListRequest} req
     * @param {function(string, DescribeComplianceScanFailedAssetListResponse):void} cb
     * @public
     */
    DescribeComplianceScanFailedAssetList(req, cb) {
        let resp = new DescribeComplianceScanFailedAssetListResponse();
        this.request("DescribeComplianceScanFailedAssetList", req, resp, cb);
    }

    /**
     * 容器安全搜索查询端口占用列表
     * @param {DescribeAssetPortListRequest} req
     * @param {function(string, DescribeAssetPortListResponse):void} cb
     * @public
     */
    DescribeAssetPortList(req, cb) {
        let resp = new DescribeAssetPortListResponse();
        this.request("DescribeAssetPortList", req, resp, cb);
    }

    /**
     * 镜像仓库漏洞列表导出
     * @param {DescribeAssetImageRegistryVulListExportRequest} req
     * @param {function(string, DescribeAssetImageRegistryVulListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryVulListExport(req, cb) {
        let resp = new DescribeAssetImageRegistryVulListExportResponse();
        this.request("DescribeAssetImageRegistryVulListExport", req, resp, cb);
    }

    /**
     * 删除运行异常进程策略
     * @param {DeleteAbnormalProcessRulesRequest} req
     * @param {function(string, DeleteAbnormalProcessRulesResponse):void} cb
     * @public
     */
    DeleteAbnormalProcessRules(req, cb) {
        let resp = new DeleteAbnormalProcessRulesResponse();
        this.request("DeleteAbnormalProcessRules", req, resp, cb);
    }

    /**
     * 镜像仓库敏感信息列表导出
     * @param {DescribeAssetImageRegistryRiskListExportRequest} req
     * @param {function(string, DescribeAssetImageRegistryRiskListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryRiskListExport(req, cb) {
        let resp = new DescribeAssetImageRegistryRiskListExportResponse();
        this.request("DescribeAssetImageRegistryRiskListExport", req, resp, cb);
    }

    /**
     * 运行时文件查杀一键扫描
     * @param {CreateVirusScanTaskRequest} req
     * @param {function(string, CreateVirusScanTaskResponse):void} cb
     * @public
     */
    CreateVirusScanTask(req, cb) {
        let resp = new CreateVirusScanTaskResponse();
        this.request("CreateVirusScanTask", req, resp, cb);
    }

    /**
     * DescribeEscapeEventDetail  查询容器逃逸事件详情
     * @param {DescribeEscapeEventDetailRequest} req
     * @param {function(string, DescribeEscapeEventDetailResponse):void} cb
     * @public
     */
    DescribeEscapeEventDetail(req, cb) {
        let resp = new DescribeEscapeEventDetailResponse();
        this.request("DescribeEscapeEventDetail", req, resp, cb);
    }

    /**
     * 删除运行时反弹shell白名单
     * @param {DeleteReverseShellWhiteListsRequest} req
     * @param {function(string, DeleteReverseShellWhiteListsResponse):void} cb
     * @public
     */
    DeleteReverseShellWhiteLists(req, cb) {
        let resp = new DeleteReverseShellWhiteListsResponse();
        this.request("DeleteReverseShellWhiteLists", req, resp, cb);
    }

    /**
     * 查询某个资产的详情
     * @param {DescribeComplianceAssetDetailInfoRequest} req
     * @param {function(string, DescribeComplianceAssetDetailInfoResponse):void} cb
     * @public
     */
    DescribeComplianceAssetDetailInfo(req, cb) {
        let resp = new DescribeComplianceAssetDetailInfoResponse();
        this.request("DescribeComplianceAssetDetailInfo", req, resp, cb);
    }

    /**
     * 获取告警策略列表
     * @param {DescribeWarningRulesRequest} req
     * @param {function(string, DescribeWarningRulesResponse):void} cb
     * @public
     */
    DescribeWarningRules(req, cb) {
        let resp = new DescribeWarningRulesResponse();
        this.request("DescribeWarningRules", req, resp, cb);
    }

    /**
     * 修改异常进程事件的状态信息
     * @param {ModifyAbnormalProcessStatusRequest} req
     * @param {function(string, ModifyAbnormalProcessStatusResponse):void} cb
     * @public
     */
    ModifyAbnormalProcessStatus(req, cb) {
        let resp = new ModifyAbnormalProcessStatusResponse();
        this.request("ModifyAbnormalProcessStatus", req, resp, cb);
    }

    /**
     * 创建一个导出安全合规信息的任务
     * @param {CreateExportComplianceStatusListJobRequest} req
     * @param {function(string, CreateExportComplianceStatusListJobResponse):void} cb
     * @public
     */
    CreateExportComplianceStatusListJob(req, cb) {
        let resp = new CreateExportComplianceStatusListJobResponse();
        this.request("CreateExportComplianceStatusListJob", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像简略信息列表
     * @param {DescribeAssetImageSimpleListRequest} req
     * @param {function(string, DescribeAssetImageSimpleListResponse):void} cb
     * @public
     */
    DescribeAssetImageSimpleList(req, cb) {
        let resp = new DescribeAssetImageSimpleListResponse();
        this.request("DescribeAssetImageSimpleList", req, resp, cb);
    }

    /**
     * DescribeImageSimpleList 查询全部镜像列表
     * @param {DescribeImageSimpleListRequest} req
     * @param {function(string, DescribeImageSimpleListResponse):void} cb
     * @public
     */
    DescribeImageSimpleList(req, cb) {
        let resp = new DescribeImageSimpleListResponse();
        this.request("DescribeImageSimpleList", req, resp, cb);
    }

    /**
     * 修改运行时访问控制事件状态信息
     * @param {ModifyAccessControlStatusRequest} req
     * @param {function(string, ModifyAccessControlStatusResponse):void} cb
     * @public
     */
    ModifyAccessControlStatus(req, cb) {
        let resp = new ModifyAccessControlStatusResponse();
        this.request("ModifyAccessControlStatus", req, resp, cb);
    }

    /**
     * DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息
     * @param {DescribeEscapeRuleInfoRequest} req
     * @param {function(string, DescribeEscapeRuleInfoResponse):void} cb
     * @public
     */
    DescribeEscapeRuleInfo(req, cb) {
        let resp = new DescribeEscapeRuleInfoResponse();
        this.request("DescribeEscapeRuleInfo", req, resp, cb);
    }

    /**
     * 容器安全查询镜像风险列表
     * @param {DescribeAssetImageRiskListRequest} req
     * @param {function(string, DescribeAssetImageRiskListResponse):void} cb
     * @public
     */
    DescribeAssetImageRiskList(req, cb) {
        let resp = new DescribeAssetImageRiskListResponse();
        this.request("DescribeAssetImageRiskList", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像漏洞列表导出
     * @param {DescribeAssetImageVulListExportRequest} req
     * @param {function(string, DescribeAssetImageVulListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageVulListExport(req, cb) {
        let resp = new DescribeAssetImageVulListExportResponse();
        this.request("DescribeAssetImageVulListExport", req, resp, cb);
    }

    /**
     * 查询用户集群资产总览
     * @param {DescribeClusterSummaryRequest} req
     * @param {function(string, DescribeClusterSummaryResponse):void} cb
     * @public
     */
    DescribeClusterSummary(req, cb) {
        let resp = new DescribeClusterSummaryResponse();
        this.request("DescribeClusterSummary", req, resp, cb);
    }

    /**
     * DescribeEscapeSafeState 查询容器逃逸安全状态
     * @param {DescribeEscapeSafeStateRequest} req
     * @param {function(string, DescribeEscapeSafeStateResponse):void} cb
     * @public
     */
    DescribeEscapeSafeState(req, cb) {
        let resp = new DescribeEscapeSafeStateResponse();
        this.request("DescribeEscapeSafeState", req, resp, cb);
    }

    /**
     * 运行时查询文件查杀任务列表
     * @param {DescribeVirusTaskListRequest} req
     * @param {function(string, DescribeVirusTaskListResponse):void} cb
     * @public
     */
    DescribeVirusTaskList(req, cb) {
        let resp = new DescribeVirusTaskListResponse();
        this.request("DescribeVirusTaskList", req, resp, cb);
    }

    /**
     * 新增单个镜像仓库详细信息
     * @param {AddAssetImageRegistryRegistryDetailRequest} req
     * @param {function(string, AddAssetImageRegistryRegistryDetailResponse):void} cb
     * @public
     */
    AddAssetImageRegistryRegistryDetail(req, cb) {
        let resp = new AddAssetImageRegistryRegistryDetailResponse();
        this.request("AddAssetImageRegistryRegistryDetail", req, resp, cb);
    }

    /**
     * 查询运行时文件查杀事件列表
     * @param {DescribeVirusListRequest} req
     * @param {function(string, DescribeVirusListResponse):void} cb
     * @public
     */
    DescribeVirusList(req, cb) {
        let resp = new DescribeVirusListResponse();
        this.request("DescribeVirusList", req, resp, cb);
    }

    /**
     * 镜像仓库资产刷新
     * @param {SyncAssetImageRegistryAssetRequest} req
     * @param {function(string, SyncAssetImageRegistryAssetResponse):void} cb
     * @public
     */
    SyncAssetImageRegistryAsset(req, cb) {
        let resp = new SyncAssetImageRegistryAssetResponse();
        this.request("SyncAssetImageRegistryAsset", req, resp, cb);
    }

    /**
     * 查询本地镜像风险概览
     * @param {DescribeImageRiskSummaryRequest} req
     * @param {function(string, DescribeImageRiskSummaryResponse):void} cb
     * @public
     */
    DescribeImageRiskSummary(req, cb) {
        let resp = new DescribeImageRiskSummaryResponse();
        this.request("DescribeImageRiskSummary", req, resp, cb);
    }

    /**
     * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
     * @param {ScanCompliancePolicyItemsRequest} req
     * @param {function(string, ScanCompliancePolicyItemsResponse):void} cb
     * @public
     */
    ScanCompliancePolicyItems(req, cb) {
        let resp = new ScanCompliancePolicyItemsResponse();
        this.request("ScanCompliancePolicyItems", req, resp, cb);
    }

    /**
     * 运行时文件查杀重新检测
     * @param {CreateVirusScanAgainRequest} req
     * @param {function(string, CreateVirusScanAgainResponse):void} cb
     * @public
     */
    CreateVirusScanAgain(req, cb) {
        let resp = new CreateVirusScanAgainResponse();
        this.request("CreateVirusScanAgain", req, resp, cb);
    }

    /**
     * 查询容器安全未处理事件信息
     * @param {DescribeContainerSecEventSummaryRequest} req
     * @param {function(string, DescribeContainerSecEventSummaryResponse):void} cb
     * @public
     */
    DescribeContainerSecEventSummary(req, cb) {
        let resp = new DescribeContainerSecEventSummaryResponse();
        this.request("DescribeContainerSecEventSummary", req, resp, cb);
    }

    /**
     * 查询最近一次任务发现的检测项的汇总信息列表，按照 检测项 → 资产 的两级层次展开。
     * @param {DescribeComplianceTaskPolicyItemSummaryListRequest} req
     * @param {function(string, DescribeComplianceTaskPolicyItemSummaryListResponse):void} cb
     * @public
     */
    DescribeComplianceTaskPolicyItemSummaryList(req, cb) {
        let resp = new DescribeComplianceTaskPolicyItemSummaryListResponse();
        this.request("DescribeComplianceTaskPolicyItemSummaryList", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像列表
     * @param {DescribeAssetImageListRequest} req
     * @param {function(string, DescribeAssetImageListResponse):void} cb
     * @public
     */
    DescribeAssetImageList(req, cb) {
        let resp = new DescribeAssetImageListResponse();
        this.request("DescribeAssetImageList", req, resp, cb);
    }

    /**
     * 查询运行时反弹shell事件列表信息
     * @param {DescribeReverseShellEventsRequest} req
     * @param {function(string, DescribeReverseShellEventsResponse):void} cb
     * @public
     */
    DescribeReverseShellEvents(req, cb) {
        let resp = new DescribeReverseShellEventsResponse();
        this.request("DescribeReverseShellEvents", req, resp, cb);
    }

    /**
     * 运行时更新木马文件事件状态
     * @param {ModifyVirusFileStatusRequest} req
     * @param {function(string, ModifyVirusFileStatusResponse):void} cb
     * @public
     */
    ModifyVirusFileStatus(req, cb) {
        let resp = new ModifyVirusFileStatusResponse();
        this.request("ModifyVirusFileStatus", req, resp, cb);
    }

    /**
     * 镜像仓库创建镜像扫描任务
     * @param {CreateAssetImageRegistryScanTaskRequest} req
     * @param {function(string, CreateAssetImageRegistryScanTaskResponse):void} cb
     * @public
     */
    CreateAssetImageRegistryScanTask(req, cb) {
        let resp = new CreateAssetImageRegistryScanTaskResponse();
        this.request("CreateAssetImageRegistryScanTask", req, resp, cb);
    }

    /**
     * 查询未完成的刷新资产任务信息
     * @param {DescribeUnfinishRefreshTaskRequest} req
     * @param {function(string, DescribeUnfinishRefreshTaskResponse):void} cb
     * @public
     */
    DescribeUnfinishRefreshTask(req, cb) {
        let resp = new DescribeUnfinishRefreshTaskResponse();
        this.request("DescribeUnfinishRefreshTask", req, resp, cb);
    }

    /**
     * 添加编辑运行时高危系统调用白名单
     * @param {AddEditRiskSyscallWhiteListRequest} req
     * @param {function(string, AddEditRiskSyscallWhiteListResponse):void} cb
     * @public
     */
    AddEditRiskSyscallWhiteList(req, cb) {
        let resp = new AddEditRiskSyscallWhiteListResponse();
        this.request("AddEditRiskSyscallWhiteList", req, resp, cb);
    }

    /**
     * 镜像仓库查询一键镜像扫描状态
     * @param {DescribeAssetImageRegistryScanStatusOneKeyRequest} req
     * @param {function(string, DescribeAssetImageRegistryScanStatusOneKeyResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryScanStatusOneKey(req, cb) {
        let resp = new DescribeAssetImageRegistryScanStatusOneKeyResponse();
        this.request("DescribeAssetImageRegistryScanStatusOneKey", req, resp, cb);
    }

    /**
     * 查询运行时访问控制事件的详细信息
     * @param {DescribeAccessControlDetailRequest} req
     * @param {function(string, DescribeAccessControlDetailResponse):void} cb
     * @public
     */
    DescribeAccessControlDetail(req, cb) {
        let resp = new DescribeAccessControlDetailResponse();
        this.request("DescribeAccessControlDetail", req, resp, cb);
    }

    /**
     * 镜像仓库镜像仓库列表
     * @param {DescribeAssetImageRegistryListRequest} req
     * @param {function(string, DescribeAssetImageRegistryListResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryList(req, cb) {
        let resp = new DescribeAssetImageRegistryListResponse();
        this.request("DescribeAssetImageRegistryList", req, resp, cb);
    }

    /**
     * 容器安全搜索查询进程列表
     * @param {DescribeAssetProcessListRequest} req
     * @param {function(string, DescribeAssetProcessListResponse):void} cb
     * @public
     */
    DescribeAssetProcessList(req, cb) {
        let resp = new DescribeAssetProcessListResponse();
        this.request("DescribeAssetProcessList", req, resp, cb);
    }

    /**
     * 查询运行时异常进程事件列表信息
     * @param {DescribeAbnormalProcessEventsRequest} req
     * @param {function(string, DescribeAbnormalProcessEventsResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessEvents(req, cb) {
        let resp = new DescribeAbnormalProcessEventsResponse();
        this.request("DescribeAbnormalProcessEvents", req, resp, cb);
    }

    /**
     * 更新单个镜像仓库详细信息
     * @param {UpdateAssetImageRegistryRegistryDetailRequest} req
     * @param {function(string, UpdateAssetImageRegistryRegistryDetailResponse):void} cb
     * @public
     */
    UpdateAssetImageRegistryRegistryDetail(req, cb) {
        let resp = new UpdateAssetImageRegistryRegistryDetailResponse();
        this.request("UpdateAssetImageRegistryRegistryDetail", req, resp, cb);
    }

    /**
     * DescribeProVersionInfo  查询专业版需购买信息
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        let resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }

    /**
     * 查询某资产下的检测项列表
     * @param {DescribeComplianceAssetPolicyItemListRequest} req
     * @param {function(string, DescribeComplianceAssetPolicyItemListResponse):void} cb
     * @public
     */
    DescribeComplianceAssetPolicyItemList(req, cb) {
        let resp = new DescribeComplianceAssetPolicyItemListResponse();
        this.request("DescribeComplianceAssetPolicyItemList", req, resp, cb);
    }

    /**
     * 设置检测模式和自动检查
     * @param {SetCheckModeRequest} req
     * @param {function(string, SetCheckModeResponse):void} cb
     * @public
     */
    SetCheckMode(req, cb) {
        let resp = new SetCheckModeResponse();
        this.request("SetCheckMode", req, resp, cb);
    }

    /**
     * 从白名单中删除将指定的检测项。
     * @param {DeleteCompliancePolicyItemFromWhitelistRequest} req
     * @param {function(string, DeleteCompliancePolicyItemFromWhitelistResponse):void} cb
     * @public
     */
    DeleteCompliancePolicyItemFromWhitelist(req, cb) {
        let resp = new DeleteCompliancePolicyItemFromWhitelistResponse();
        this.request("DeleteCompliancePolicyItemFromWhitelist", req, resp, cb);
    }

    /**
     * 运行时查询文件查杀设置
     * @param {DescribeVirusScanSettingRequest} req
     * @param {function(string, DescribeVirusScanSettingResponse):void} cb
     * @public
     */
    DescribeVirusScanSetting(req, cb) {
        let resp = new DescribeVirusScanSettingResponse();
        this.request("DescribeVirusScanSetting", req, resp, cb);
    }

    /**
     * 查询某类资产的列表
     * @param {DescribeComplianceAssetListRequest} req
     * @param {function(string, DescribeComplianceAssetListResponse):void} cb
     * @public
     */
    DescribeComplianceAssetList(req, cb) {
        let resp = new DescribeComplianceAssetListResponse();
        this.request("DescribeComplianceAssetList", req, resp, cb);
    }

    /**
     * 按照 检测项 → 资产 的两级层次展开的第二层级：资产层级。
     * @param {DescribeCompliancePolicyItemAffectedAssetListRequest} req
     * @param {function(string, DescribeCompliancePolicyItemAffectedAssetListResponse):void} cb
     * @public
     */
    DescribeCompliancePolicyItemAffectedAssetList(req, cb) {
        let resp = new DescribeCompliancePolicyItemAffectedAssetListResponse();
        this.request("DescribeCompliancePolicyItemAffectedAssetList", req, resp, cb);
    }

    /**
     * 容器安全主机资产刷新
     * @param {ModifyAssetRequest} req
     * @param {function(string, ModifyAssetResponse):void} cb
     * @public
     */
    ModifyAsset(req, cb) {
        let resp = new ModifyAssetResponse();
        this.request("ModifyAsset", req, resp, cb);
    }

    /**
     * CreateOrModifyPostPayCores  创建或者编辑弹性计费上限
     * @param {CreateOrModifyPostPayCoresRequest} req
     * @param {function(string, CreateOrModifyPostPayCoresResponse):void} cb
     * @public
     */
    CreateOrModifyPostPayCores(req, cb) {
        let resp = new CreateOrModifyPostPayCoresResponse();
        this.request("CreateOrModifyPostPayCores", req, resp, cb);
    }

    /**
     * 查询运行时异常进程事件详细信息
     * @param {DescribeAbnormalProcessDetailRequest} req
     * @param {function(string, DescribeAbnormalProcessDetailResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessDetail(req, cb) {
        let resp = new DescribeAbnormalProcessDetailResponse();
        this.request("DescribeAbnormalProcessDetail", req, resp, cb);
    }

    /**
     * RenewImageAuthorizeState   授权镜像扫描
     * @param {RenewImageAuthorizeStateRequest} req
     * @param {function(string, RenewImageAuthorizeStateResponse):void} cb
     * @public
     */
    RenewImageAuthorizeState(req, cb) {
        let resp = new RenewImageAuthorizeStateResponse();
        this.request("RenewImageAuthorizeState", req, resp, cb);
    }

    /**
     * 镜像仓库停止镜像一键扫描任务
     * @param {ModifyAssetImageRegistryScanStopOneKeyRequest} req
     * @param {function(string, ModifyAssetImageRegistryScanStopOneKeyResponse):void} cb
     * @public
     */
    ModifyAssetImageRegistryScanStopOneKey(req, cb) {
        let resp = new ModifyAssetImageRegistryScanStopOneKeyResponse();
        this.request("ModifyAssetImageRegistryScanStopOneKey", req, resp, cb);
    }

    /**
     * 查询运行时访问控制策略详细信息
     * @param {DescribeAccessControlRuleDetailRequest} req
     * @param {function(string, DescribeAccessControlRuleDetailResponse):void} cb
     * @public
     */
    DescribeAccessControlRuleDetail(req, cb) {
        let resp = new DescribeAccessControlRuleDetailResponse();
        this.request("DescribeAccessControlRuleDetail", req, resp, cb);
    }

    /**
     * 查询节点类型的影响范围，返回节点列表
     * @param {DescribeAffectedNodeListRequest} req
     * @param {function(string, DescribeAffectedNodeListResponse):void} cb
     * @public
     */
    DescribeAffectedNodeList(req, cb) {
        let resp = new DescribeAffectedNodeListResponse();
        this.request("DescribeAffectedNodeList", req, resp, cb);
    }

    /**
     * 查询运行时访问控制事件列表导出
     * @param {DescribeAccessControlEventsExportRequest} req
     * @param {function(string, DescribeAccessControlEventsExportResponse):void} cb
     * @public
     */
    DescribeAccessControlEventsExport(req, cb) {
        let resp = new DescribeAccessControlEventsExportResponse();
        this.request("DescribeAccessControlEventsExport", req, resp, cb);
    }

    /**
     * 修改反弹shell事件的状态信息
     * @param {ModifyReverseShellStatusRequest} req
     * @param {function(string, ModifyReverseShellStatusResponse):void} cb
     * @public
     */
    ModifyReverseShellStatus(req, cb) {
        let resp = new ModifyReverseShellStatusResponse();
        this.request("ModifyReverseShellStatus", req, resp, cb);
    }

    /**
     * 添加编辑告警策略
     * @param {AddEditWarningRulesRequest} req
     * @param {function(string, AddEditWarningRulesResponse):void} cb
     * @public
     */
    AddEditWarningRules(req, cb) {
        let resp = new AddEditWarningRulesResponse();
        this.request("AddEditWarningRules", req, resp, cb);
    }

    /**
     * 容器安全搜索查询镜像风险列表导出
     * @param {DescribeAssetImageRiskListExportRequest} req
     * @param {function(string, DescribeAssetImageRiskListExportResponse):void} cb
     * @public
     */
    DescribeAssetImageRiskListExport(req, cb) {
        let resp = new DescribeAssetImageRiskListExportResponse();
        this.request("DescribeAssetImageRiskListExport", req, resp, cb);
    }

    /**
     * 查询运行时访问控制策略列表导出
     * @param {DescribeAccessControlRulesExportRequest} req
     * @param {function(string, DescribeAccessControlRulesExportResponse):void} cb
     * @public
     */
    DescribeAccessControlRulesExport(req, cb) {
        let resp = new DescribeAccessControlRulesExportResponse();
        this.request("DescribeAccessControlRulesExport", req, resp, cb);
    }

    /**
     * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
     * @param {DescribeRiskListRequest} req
     * @param {function(string, DescribeRiskListResponse):void} cb
     * @public
     */
    DescribeRiskList(req, cb) {
        let resp = new DescribeRiskListResponse();
        this.request("DescribeRiskList", req, resp, cb);
    }

    /**
     * 容器安全查询镜像漏洞列表
     * @param {DescribeAssetImageVulListRequest} req
     * @param {function(string, DescribeAssetImageVulListResponse):void} cb
     * @public
     */
    DescribeAssetImageVulList(req, cb) {
        let resp = new DescribeAssetImageVulListResponse();
        this.request("DescribeAssetImageVulList", req, resp, cb);
    }

    /**
     * 将指定的检测项添加到白名单中，不显示未通过结果。
     * @param {AddCompliancePolicyItemToWhitelistRequest} req
     * @param {function(string, AddCompliancePolicyItemToWhitelistResponse):void} cb
     * @public
     */
    AddCompliancePolicyItemToWhitelist(req, cb) {
        let resp = new AddCompliancePolicyItemToWhitelistResponse();
        this.request("AddCompliancePolicyItemToWhitelist", req, resp, cb);
    }

    /**
     * 为客户初始化合规基线的使用环境，创建必要的数据和选项。
     * @param {InitializeUserComplianceEnvironmentRequest} req
     * @param {function(string, InitializeUserComplianceEnvironmentResponse):void} cb
     * @public
     */
    InitializeUserComplianceEnvironment(req, cb) {
        let resp = new InitializeUserComplianceEnvironmentResponse();
        this.request("InitializeUserComplianceEnvironment", req, resp, cb);
    }

    /**
     * 安全概览和集群安全页进入调用该接口，查询用户集群相关信息。
     * @param {DescribeUserClusterRequest} req
     * @param {function(string, DescribeUserClusterResponse):void} cb
     * @public
     */
    DescribeUserCluster(req, cb) {
        let resp = new DescribeUserClusterResponse();
        this.request("DescribeUserCluster", req, resp, cb);
    }

    /**
     * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
     * @param {ModifyCompliancePeriodTaskRequest} req
     * @param {function(string, ModifyCompliancePeriodTaskResponse):void} cb
     * @public
     */
    ModifyCompliancePeriodTask(req, cb) {
        let resp = new ModifyCompliancePeriodTaskResponse();
        this.request("ModifyCompliancePeriodTask", req, resp, cb);
    }

    /**
     * 镜像仓库查询镜像统计信息
     * @param {DescribeAssetImageRegistrySummaryRequest} req
     * @param {function(string, DescribeAssetImageRegistrySummaryResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistrySummary(req, cb) {
        let resp = new DescribeAssetImageRegistrySummaryResponse();
        this.request("DescribeAssetImageRegistrySummary", req, resp, cb);
    }

    /**
     * 查询运行时异常进程策略列表信息
     * @param {DescribeAbnormalProcessRulesRequest} req
     * @param {function(string, DescribeAbnormalProcessRulesResponse):void} cb
     * @public
     */
    DescribeAbnormalProcessRules(req, cb) {
        let resp = new DescribeAbnormalProcessRulesResponse();
        this.request("DescribeAbnormalProcessRules", req, resp, cb);
    }

    /**
     * 容器安全查询db服务列表
     * @param {DescribeAssetDBServiceListRequest} req
     * @param {function(string, DescribeAssetDBServiceListResponse):void} cb
     * @public
     */
    DescribeAssetDBServiceList(req, cb) {
        let resp = new DescribeAssetDBServiceListResponse();
        this.request("DescribeAssetDBServiceList", req, resp, cb);
    }

    /**
     * 查询运行时运行时高危系统调用列表信息
     * @param {DescribeRiskSyscallEventsRequest} req
     * @param {function(string, DescribeRiskSyscallEventsResponse):void} cb
     * @public
     */
    DescribeRiskSyscallEvents(req, cb) {
        let resp = new DescribeRiskSyscallEventsResponse();
        this.request("DescribeRiskSyscallEvents", req, resp, cb);
    }

    /**
     * 删除运行时高危系统调用白名单
     * @param {DeleteRiskSyscallWhiteListsRequest} req
     * @param {function(string, DeleteRiskSyscallWhiteListsResponse):void} cb
     * @public
     */
    DeleteRiskSyscallWhiteLists(req, cb) {
        let resp = new DeleteRiskSyscallWhiteListsResponse();
        this.request("DeleteRiskSyscallWhiteLists", req, resp, cb);
    }

    /**
     * 添加编辑运行时访问控制策略
     * @param {AddEditAccessControlRuleRequest} req
     * @param {function(string, AddEditAccessControlRuleResponse):void} cb
     * @public
     */
    AddEditAccessControlRule(req, cb) {
        let resp = new AddEditAccessControlRuleResponse();
        this.request("AddEditAccessControlRule", req, resp, cb);
    }

    /**
     * 查询运行时反弹shell白名单详细信息
     * @param {DescribeReverseShellWhiteListDetailRequest} req
     * @param {function(string, DescribeReverseShellWhiteListDetailResponse):void} cb
     * @public
     */
    DescribeReverseShellWhiteListDetail(req, cb) {
        let resp = new DescribeReverseShellWhiteListDetailResponse();
        this.request("DescribeReverseShellWhiteListDetail", req, resp, cb);
    }

    /**
     * 添加容器安全镜像扫描设置
     * @param {CreateAssetImageScanSettingRequest} req
     * @param {function(string, CreateAssetImageScanSettingResponse):void} cb
     * @public
     */
    CreateAssetImageScanSetting(req, cb) {
        let resp = new CreateAssetImageScanSettingResponse();
        this.request("CreateAssetImageScanSetting", req, resp, cb);
    }

    /**
     * 容器安全查询镜像病毒列表
     * @param {DescribeAssetImageVirusListRequest} req
     * @param {function(string, DescribeAssetImageVirusListResponse):void} cb
     * @public
     */
    DescribeAssetImageVirusList(req, cb) {
        let resp = new DescribeAssetImageVirusListResponse();
        this.request("DescribeAssetImageVirusList", req, resp, cb);
    }

    /**
     * 查询账户容器、镜像等统计信息
     * @param {DescribeAssetSummaryRequest} req
     * @param {function(string, DescribeAssetSummaryResponse):void} cb
     * @public
     */
    DescribeAssetSummary(req, cb) {
        let resp = new DescribeAssetSummaryResponse();
        this.request("DescribeAssetSummary", req, resp, cb);
    }

    /**
     * 运行时文件查杀事件列表导出
     * @param {ExportVirusListRequest} req
     * @param {function(string, ExportVirusListResponse):void} cb
     * @public
     */
    ExportVirusList(req, cb) {
        let resp = new ExportVirusListResponse();
        this.request("ExportVirusList", req, resp, cb);
    }

    /**
     * 容器安全查询web服务列表
     * @param {DescribeAssetWebServiceListRequest} req
     * @param {function(string, DescribeAssetWebServiceListResponse):void} cb
     * @public
     */
    DescribeAssetWebServiceList(req, cb) {
        let resp = new DescribeAssetWebServiceListResponse();
        this.request("DescribeAssetWebServiceList", req, resp, cb);
    }

    /**
     * 检查单个镜像仓库名是否重复
     * @param {CheckRepeatAssetImageRegistryRequest} req
     * @param {function(string, CheckRepeatAssetImageRegistryResponse):void} cb
     * @public
     */
    CheckRepeatAssetImageRegistry(req, cb) {
        let resp = new CheckRepeatAssetImageRegistryResponse();
        this.request("CheckRepeatAssetImageRegistry", req, resp, cb);
    }

    /**
     * 添加编辑运行时异常进程策略
     * @param {AddEditAbnormalProcessRuleRequest} req
     * @param {function(string, AddEditAbnormalProcessRuleResponse):void} cb
     * @public
     */
    AddEditAbnormalProcessRule(req, cb) {
        let resp = new AddEditAbnormalProcessRuleResponse();
        this.request("AddEditAbnormalProcessRule", req, resp, cb);
    }

    /**
     * 查询主机详细信息
     * @param {DescribeAssetHostDetailRequest} req
     * @param {function(string, DescribeAssetHostDetailResponse):void} cb
     * @public
     */
    DescribeAssetHostDetail(req, cb) {
        let resp = new DescribeAssetHostDetailResponse();
        this.request("DescribeAssetHostDetail", req, resp, cb);
    }

    /**
     * 容器安全查询镜像关联主机
     * @param {DescribeAssetImageHostListRequest} req
     * @param {function(string, DescribeAssetImageHostListResponse):void} cb
     * @public
     */
    DescribeAssetImageHostList(req, cb) {
        let resp = new DescribeAssetImageHostListResponse();
        this.request("DescribeAssetImageHostList", req, resp, cb);
    }

    /**
     * 查询运行时高危系统调用白名单列表信息
     * @param {DescribeRiskSyscallWhiteListsRequest} req
     * @param {function(string, DescribeRiskSyscallWhiteListsResponse):void} cb
     * @public
     */
    DescribeRiskSyscallWhiteLists(req, cb) {
        let resp = new DescribeRiskSyscallWhiteListsResponse();
        this.request("DescribeRiskSyscallWhiteLists", req, resp, cb);
    }

    /**
     * 镜像仓库查询镜像漏洞列表
     * @param {DescribeAssetImageRegistryVulListRequest} req
     * @param {function(string, DescribeAssetImageRegistryVulListResponse):void} cb
     * @public
     */
    DescribeAssetImageRegistryVulList(req, cb) {
        let resp = new DescribeAssetImageRegistryVulListResponse();
        this.request("DescribeAssetImageRegistryVulList", req, resp, cb);
    }

    /**
     * 运行时查询文件查杀任务状态
     * @param {DescribeVirusScanTaskStatusRequest} req
     * @param {function(string, DescribeVirusScanTaskStatusResponse):void} cb
     * @public
     */
    DescribeVirusScanTaskStatus(req, cb) {
        let resp = new DescribeVirusScanTaskStatusResponse();
        this.request("DescribeVirusScanTaskStatus", req, resp, cb);
    }

    /**
     * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
     * @param {ScanComplianceAssetsByPolicyItemRequest} req
     * @param {function(string, ScanComplianceAssetsByPolicyItemResponse):void} cb
     * @public
     */
    ScanComplianceAssetsByPolicyItem(req, cb) {
        let resp = new ScanComplianceAssetsByPolicyItemResponse();
        this.request("ScanComplianceAssetsByPolicyItem", req, resp, cb);
    }

    /**
     * 查询镜像详细信息
     * @param {DescribeAssetImageDetailRequest} req
     * @param {function(string, DescribeAssetImageDetailResponse):void} cb
     * @public
     */
    DescribeAssetImageDetail(req, cb) {
        let resp = new DescribeAssetImageDetailResponse();
        this.request("DescribeAssetImageDetail", req, resp, cb);
    }

    /**
     * 查询容器运行时安全事件趋势
     * @param {DescribeSecEventsTendencyRequest} req
     * @param {function(string, DescribeSecEventsTendencyResponse):void} cb
     * @public
     */
    DescribeSecEventsTendency(req, cb) {
        let resp = new DescribeSecEventsTendencyResponse();
        this.request("DescribeSecEventsTendency", req, resp, cb);
    }


}
module.exports = TcssClient;
