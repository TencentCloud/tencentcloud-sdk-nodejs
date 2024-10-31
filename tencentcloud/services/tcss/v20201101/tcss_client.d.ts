import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVirusScanAgainRequest, DescribeSecLogDeliveryKafkaSettingRequest, DescribeSearchTemplatesResponse, UpdateImageRegistryTimingScanTaskResponse, DescribeScanIgnoreVulListResponse, ModifyVulDefenceEventStatusRequest, ModifyVirusAutoIsolateExampleSwitchResponse, DescribeEventEscapeImageListResponse, CreateVulExportJobResponse, DescribeUnfinishRefreshTaskResponse, CreateComponentExportJobRequest, CreateNetworkFirewallUndoPublishRequest, CreateRefreshTaskResponse, CreateVulDefenceHostExportJobResponse, DescribeEventEscapeImageListRequest, CreateVulImageExportJobResponse, DescribeVirusScanTimeoutSettingResponse, DescribeVulImageListResponse, CreateVulExportJobRequest, DescribeNetworkFirewallNamespaceLabelListResponse, DescribeAssetComponentListResponse, DescribeVulImageListRequest, DescribeAssetImageRegistryVulListResponse, AddAssetImageRegistryRegistryDetailResponse, DeleteCompliancePolicyItemFromWhitelistRequest, DescribeAssetImageDetailRequest, ModifyK8sApiAbnormalRuleInfoResponse, ModifyAssetImageScanStopResponse, AddAssetImageRegistryRegistryDetailRequest, AddIgnoreVulResponse, DescribeNetworkFirewallClusterRefreshStatusRequest, DescribeAssetImageRegistryVirusListExportResponse, DescribeSecEventsTendencyResponse, DescribeAccessControlEventsExportResponse, DescribeNetworkFirewallPolicyDetailRequest, CreateAccessControlsRuleExportJobResponse, ModifyAssetImageRegistryScanStopResponse, DescribeAssetImageRegistryRiskListExportRequest, SetCheckModeResponse, DescribeVulImageSummaryRequest, DescribeAssetImageScanStatusResponse, DescribeVirusAutoIsolateSampleDetailResponse, DescribeVulDefenceEventTendencyRequest, DescribeAbnormalProcessRulesExportRequest, DescribePurchaseStateInfoResponse, DescribeVulDefencePluginResponse, DescribeAssetImageRegistryRegistryDetailResponse, DescribeVirusDetailRequest, DeleteEscapeWhiteListRequest, DescribeClusterDetailRequest, ModifyK8sApiAbnormalRuleInfoRequest, UpdateAndPublishNetworkFirewallPolicyDetailResponse, DescribeAssetImageListRequest, DescribeSecLogDeliveryClsOptionsRequest, DescribeRiskSyscallWhiteListDetailRequest, DescribeAffectedWorkloadListRequest, ModifyAbnormalProcessRuleStatusRequest, DescribeVulTendencyResponse, DescribeAutoAuthorizedRuleHostRequest, ScanCompliancePolicyItemsRequest, DescribeAgentDaemonSetCmdResponse, DescribeAssetImageVirusListExportRequest, CreateAssetImageScanTaskResponse, DescribeTaskResultSummaryRequest, DeleteAccessControlRulesRequest, DeleteRiskSyscallEventsResponse, OpenTcssTrialResponse, DescribeSearchExportListResponse, CreateVulScanTaskRequest, DescribeAccessControlEventsResponse, DescribeRiskSyscallWhiteListsResponse, CreateNetworkFirewallPolicyDiscoverResponse, DescribeRiskSyscallEventsResponse, DescribeAssetImageRiskListResponse, CreateEmergencyVulExportJobResponse, CreateVulDefenceEventExportJobRequest, DeleteIgnoreVulRequest, DescribeReverseShellEventsResponse, DescribeComplianceAssetDetailInfoRequest, DescribeESAggregationsResponse, CreateExportComplianceStatusListJobResponse, DescribeAssetAppServiceListResponse, DescribeAssetSyncLastTimeRequest, DescribeEscapeRuleInfoResponse, DescribePurchaseStateInfoRequest, AddCompliancePolicyItemToWhitelistRequest, DescribeAssetClusterListResponse, DescribeAssetImageRegistryRiskListExportResponse, UpdateAssetImageRegistryRegistryDetailResponse, ModifySecLogDeliveryKafkaSettingResponse, DeleteAbnormalProcessRulesResponse, DescribeReverseShellDetailRequest, ModifyReverseShellStatusRequest, DescribePublicKeyResponse, DescribeRiskDnsListRequest, SetCheckModeRequest, DescribeAssetImageRiskListExportRequest, DescribeAssetSuperNodeListRequest, DescribeVulDefenceHostRequest, ExportVirusListRequest, CreateWebVulExportJobRequest, CreateK8sApiAbnormalEventExportJobRequest, DescribeK8sApiAbnormalTendencyResponse, DescribeAffectedClusterCountRequest, DescribeAssetImageRegistryVulListExportRequest, AddEditRiskSyscallWhiteListRequest, DescribeSecLogJoinObjectListResponse, CreateSystemVulExportJobRequest, DescribeVulScanInfoRequest, DescribeClusterNodesResponse, DescribeRiskSyscallDetailRequest, ScanComplianceAssetsByPolicyItemRequest, DescribeAbnormalProcessRulesRequest, DescribeAssetImageRegistryListResponse, DescribeVirusAutoIsolateSampleDetailRequest, DescribeAssetImageVirusListResponse, DeleteComplianceAssetPolicySetFromWhitelistResponse, DescribeK8sApiAbnormalSummaryResponse, DescribeSecLogJoinTypeListResponse, DescribeAssetSyncLastTimeResponse, CreateAssetImageScanSettingRequest, CreateNetworkFirewallUndoPublishResponse, DescribeIndexListResponse, ModifyVulDefenceSettingRequest, DescribeAssetSummaryResponse, CreateNetworkFirewallClusterRefreshResponse, CreateComponentExportJobResponse, DescribeReverseShellWhiteListsResponse, DescribeVulContainerListRequest, DeleteReverseShellEventsRequest, ModifyEscapeEventStatusResponse, CheckRepeatAssetImageRegistryResponse, DescribeAccessControlEventsExportRequest, ExportVirusListResponse, DeleteReverseShellWhiteListsResponse, DescribeNetworkFirewallAuditRecordResponse, DescribeSecLogCleanSettingInfoResponse, UpdateNetworkFirewallPolicyYamlDetailResponse, DescribeAssetImageBindRuleInfoResponse, DescribeESHitsRequest, DescribeTcssSummaryResponse, DeleteRiskSyscallEventsRequest, DescribeAssetContainerListRequest, DescribeEscapeSafeStateResponse, DescribeImageRiskSummaryRequest, CreateDefenceVulExportJobResponse, StopVirusScanTaskRequest, ScanComplianceAssetsByPolicyItemResponse, CreateRiskDnsEventExportJobRequest, DescribeAssetPortListRequest, DescribeComplianceTaskPolicyItemSummaryListResponse, DescribeReverseShellEventsRequest, AddNetworkFirewallPolicyDetailResponse, DescribeNetworkFirewallPolicyStatusRequest, DescribeSecLogKafkaUINResponse, DescribeAbnormalProcessRuleDetailRequest, DescribeLogStorageStatisticRequest, DescribeVulIgnoreRegistryImageListRequest, AddEditImageAutoAuthorizedRuleResponse, DescribeVirusAutoIsolateSampleListRequest, ModifySecLogJoinObjectsResponse, DescribeAffectedClusterCountResponse, RenewImageAuthorizeStateRequest, DescribeVirusAutoIsolateSettingRequest, CreateAssetImageRegistryScanTaskOneKeyRequest, RemoveAssetImageRegistryRegistryDetailRequest, DeleteNetworkFirewallPolicyDetailRequest, ModifyEscapeEventStatusRequest, AddComplianceAssetPolicySetToWhitelistResponse, DescribeUnauthorizedCoresTendencyResponse, DescribeNetworkFirewallPolicyStatusResponse, DescribeAssetContainerListResponse, ModifyContainerNetStatusRequest, DescribeVulIgnoreLocalImageListRequest, DescribeVirusMonitorSettingResponse, DescribeSystemVulListRequest, DescribeContainerSecEventSummaryRequest, DescribeAssetImageRegistrySummaryResponse, DescribeSecLogCleanSettingInfoRequest, DescribeVulScanAuthorizedImageSummaryResponse, DescribeImageAuthorizedInfoResponse, DescribeAbnormalProcessEventsRequest, ModifyAbnormalProcessRuleStatusResponse, DescribeVirusListRequest, DescribeComplianceAssetListRequest, ModifyVirusScanSettingResponse, DescribePromotionActivityResponse, ModifyVirusMonitorSettingRequest, ModifyEscapeWhiteListRequest, AddAndPublishNetworkFirewallPolicyDetailResponse, DescribeSearchExportListRequest, DescribeReverseShellWhiteListDetailRequest, AddCompliancePolicyAssetSetToWhitelistResponse, DescribeVulContainerListResponse, DescribeRiskSyscallNamesRequest, ModifyVulDefenceEventStatusResponse, DescribeEscapeEventInfoResponse, DescribeK8sApiAbnormalRuleInfoResponse, DescribeESHitsResponse, DescribeImageRegistryTimingScanTaskResponse, DescribeComplianceScanFailedAssetListResponse, ModifyReverseShellStatusResponse, DeleteMachineResponse, AddCompliancePolicyAssetSetToWhitelistRequest, DescribeEscapeWhiteListResponse, DescribeAssetImageHostListRequest, DescribeCompliancePeriodTaskListResponse, DescribeAssetImageScanSettingRequest, DescribeSecLogAlertMsgResponse, DescribeInspectionReportRequest, DescribeAgentDaemonSetCmdRequest, DescribeSecLogAlertMsgRequest, AddNetworkFirewallPolicyYamlDetailResponse, DescribeClusterSummaryResponse, DescribeSecLogDeliveryClsOptionsResponse, DeleteMachineRequest, CreateVulImageExportJobRequest, DescribeValueAddedSrvInfoRequest, DescribeCompliancePolicyItemAffectedSummaryResponse, ModifyRiskSyscallStatusResponse, DescribeVulSummaryRequest, DescribeAutoAuthorizedRuleHostResponse, DeleteIgnoreVulResponse, ModifyAssetImageRegistryScanStopOneKeyRequest, DeleteSearchTemplateRequest, SwitchImageAutoAuthorizedRuleResponse, DescribeExportJobResultRequest, DescribeNetworkFirewallNamespaceLabelListRequest, DescribeK8sApiAbnormalEventListRequest, DescribeAffectedWorkloadListResponse, CreateComplianceTaskResponse, DescribeAssetImageRegistryListRequest, DescribeAbnormalProcessEventTendencyResponse, DescribeScanIgnoreVulListRequest, DescribeReverseShellWhiteListsRequest, CheckNetworkFirewallPolicyYamlRequest, DescribeRiskListRequest, ModifyAccessControlStatusResponse, DeleteReverseShellWhiteListsRequest, DescribeEmergencyVulListResponse, DescribeAssetAppServiceListRequest, ModifyImageAuthorizedResponse, AddEscapeWhiteListResponse, ModifySecLogCleanSettingInfoResponse, DescribeWebVulListRequest, ModifyVirusScanSettingRequest, DescribeVulDefenceEventRequest, DescribeVirusSummaryResponse, DescribeAssetDBServiceListRequest, UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest, DescribeProVersionInfoResponse, AddEditAbnormalProcessRuleResponse, ScanComplianceScanFailedAssetsRequest, ModifySecLogDeliveryClsSettingResponse, DescribeComplianceTaskAssetSummaryRequest, CreateCheckComponentResponse, DescribeImageRegistryTimingScanTaskRequest, DescribeRiskSyscallWhiteListDetailResponse, AddNetworkFirewallPolicyYamlDetailRequest, DescribeVulLevelImageSummaryResponse, ScanComplianceAssetsResponse, DescribeClusterNodesRequest, CreateAssetImageVirusExportJobResponse, DescribeIndexListRequest, CreateWebVulExportJobResponse, DescribeReverseShellWhiteListDetailResponse, DescribeUnauthorizedCoresTendencyRequest, DescribeAssetImageVulListExportResponse, DescribeProVersionInfoRequest, DescribeVulLevelSummaryRequest, DescribeAssetImageDetailResponse, CreateAssetImageRegistryScanTaskOneKeyResponse, DescribeAssetImageVulListExportRequest, DescribeExportJobResultResponse, DescribeAssetHostListResponse, DescribeABTestConfigRequest, StopVulScanTaskRequest, DescribeNetworkFirewallNamespaceListResponse, CreateAssetImageRegistryScanTaskResponse, DescribePublicKeyRequest, DescribeAssetImageRegistrySummaryRequest, DescribeVirusManualScanEstimateTimeoutResponse, DescribeTaskResultSummaryResponse, DescribeVirusScanTimeoutSettingRequest, ModifySecLogJoinStateResponse, ModifyAccessControlRuleStatusResponse, ModifyAssetImageScanStopRequest, CreateRefreshTaskRequest, DescribeK8sApiAbnormalEventListResponse, DescribeNewestVulRequest, DescribeAbnormalProcessLevelSummaryResponse, AddEscapeWhiteListRequest, DescribeESAggregationsRequest, DescribeAssetImageRiskListExportResponse, ModifySecLogCleanSettingInfoRequest, DescribeAccessControlEventsRequest, DescribeCompliancePeriodTaskListRequest, DescribeAccessControlRuleDetailRequest, ModifyVirusScanTimeoutSettingRequest, CreateProcessEventsExportJobResponse, DescribeRiskSyscallDetailResponse, DeleteK8sApiAbnormalRuleResponse, DescribePromotionActivityRequest, DescribeSecLogKafkaUINRequest, CreateSystemVulExportJobResponse, DescribeRiskSyscallNamesResponse, AddEditReverseShellWhiteListResponse, DescribeAbnormalProcessEventsResponse, InitializeUserComplianceEnvironmentResponse, DescribeImageRegistryNamespaceListResponse, DescribeK8sApiAbnormalRuleListResponse, DeleteCompliancePolicyAssetSetFromWhitelistResponse, DescribeVirusTaskListResponse, DescribeAssetHostDetailResponse, DescribeAffectedNodeListResponse, DeleteK8sApiAbnormalRuleRequest, ModifyVirusFileStatusResponse, DescribeAbnormalProcessRulesExportResponse, DescribeSuperNodePodListRequest, DescribeAbnormalProcessEventTendencyRequest, DescribeEscapeEventDetailResponse, ScanCompliancePolicyItemsResponse, DeleteAccessControlRulesResponse, DescribeVulImageSummaryResponse, DescribeEscapeRuleInfoRequest, DescribeComplianceWhitelistItemListResponse, DescribeAssetWebServiceListRequest, UpdateImageRegistryTimingScanTaskRequest, DescribeEscapeEventTendencyRequest, DescribeInspectionReportResponse, DescribeVirusScanTaskStatusRequest, CreateAssetImageScanSettingResponse, DescribeVulDefenceEventDetailRequest, DescribeVirusAutoIsolateSampleListResponse, DescribeVirusEventTendencyRequest, DescribeAssetImageRegistryVulListExportResponse, DescribeAssetContainerDetailRequest, ModifyAccessControlStatusRequest, CreateProcessEventsExportJobRequest, DescribeVulDetailResponse, ModifyCompliancePeriodTaskResponse, DescribeEscapeEventTendencyResponse, DescribeAssetImageVulListResponse, DescribeK8sApiAbnormalSummaryRequest, DescribeAbnormalProcessLevelSummaryRequest, ModifyK8sApiAbnormalRuleStatusRequest, DescribeNetworkFirewallPolicyDetailResponse, DescribePostPayDetailResponse, DescribeK8sApiAbnormalEventInfoResponse, DescribeNetworkFirewallPodLabelsListResponse, DescribeAssetImageScanStatusRequest, DescribeCheckItemListResponse, ScanComplianceAssetsRequest, DescribeAbnormalProcessRuleDetailResponse, ModifyVirusFileStatusRequest, CreateVulContainerExportJobResponse, SyncAssetImageRegistryAssetResponse, DescribeAssetImageRegistryListExportRequest, CreateK8sApiAbnormalRuleInfoResponse, ModifyEscapeRuleRequest, DescribeAbnormalProcessRulesResponse, ModifyVulDefenceSettingResponse, DescribeCheckItemListRequest, DescribeImageComponentListResponse, CreateAbnormalProcessRulesExportJobResponse, DescribeSecLogDeliveryKafkaOptionsRequest, DescribeVirusScanSettingResponse, DescribeAccessControlRuleDetailResponse, CreateNetworkFirewallPublishRequest, CreateHostExportJobResponse, DescribeRiskDnsListResponse, DescribeNetworkFirewallPolicyDiscoverRequest, DescribeK8sApiAbnormalRuleScopeListResponse, CreateOrModifyPostPayCoresRequest, ModifyImageAuthorizedRequest, DescribeAssetImageScanTaskRequest, DescribeSecLogDeliveryClsSettingRequest, UpdateNetworkFirewallPolicyDetailResponse, ModifySecLogKafkaUINResponse, DescribeNetworkFirewallPodLabelsListRequest, CreateVirusScanTaskResponse, DescribeNetworkFirewallAuditRecordRequest, DescribeAssetProcessListRequest, DescribeAssetProcessListResponse, ModifyVirusScanTimeoutSettingResponse, CreateAssetImageVirusExportJobRequest, DescribeAssetImageRegistryDetailRequest, CreateAssetImageRegistryScanTaskRequest, DescribeAssetClusterListRequest, DescribeAssetImageListExportResponse, DescribeLogStorageStatisticResponse, CreateSearchTemplateResponse, DescribeAssetContainerDetailResponse, DescribeVulDefenceSettingResponse, DescribeNetworkFirewallPolicyYamlDetailResponse, DescribeImageComponentListRequest, DescribeNetworkFirewallPolicyListResponse, DescribeAgentInstallCommandRequest, ResetSecLogTopicConfigRequest, DescribeAssetImageVirusListExportResponse, DescribeVirusScanSettingRequest, DescribeRiskDnsEventDetailRequest, CreateAccessControlsRuleExportJobRequest, DescribeExportJobDownloadURLRequest, DescribeImageAutoAuthorizedRuleRequest, DescribeVulIgnoreRegistryImageListResponse, UpdateAndPublishNetworkFirewallPolicyDetailRequest, DescribeAssetPortListResponse, DescribeRefreshTaskRequest, CreateClusterCheckTaskResponse, DescribeCompliancePolicyItemAffectedAssetListRequest, DescribeImageRiskTendencyRequest, CreateOrModifyPostPayCoresResponse, DescribeVirusMonitorSettingRequest, DescribeAssetImageHostListResponse, ModifySecLogKafkaUINRequest, ModifyVirusAutoIsolateSettingRequest, DescribeNetworkFirewallClusterListResponse, DescribeImageRiskTendencyResponse, SyncAssetImageRegistryAssetRequest, DescribeComplianceScanFailedAssetListRequest, DescribeSearchLogsRequest, DescribeEscapeEventTypeSummaryResponse, DescribeAssetImageRegistryVulListRequest, DescribeImageSimpleListResponse, CreateAbnormalProcessRulesExportJobRequest, CreateK8sApiAbnormalEventExportJobResponse, DescribeUserClusterResponse, DescribeAssetImageRegistryRegistryListRequest, DescribeVulDefenceHostResponse, CreateImageExportJobRequest, CreateEmergencyVulExportJobRequest, DescribeVirusScanTaskStatusResponse, DescribeEscapeEventsExportResponse, DescribeVulScanLocalImageListResponse, DescribeComplianceWhitelistItemListRequest, DescribeAccessControlDetailRequest, DescribeVirusListResponse, DescribeAbnormalProcessEventsExportRequest, DescribeVulSummaryResponse, DescribeAssetComponentListRequest, DescribeEmergencyVulListRequest, DeleteReverseShellEventsResponse, DescribeAbnormalProcessDetailResponse, DescribeAssetImageListExportRequest, ModifyAssetImageRegistryScanStopOneKeyResponse, DescribeImageRiskSummaryResponse, UpdateNetworkFirewallPolicyYamlDetailRequest, DescribeK8sApiAbnormalRuleInfoRequest, DescribeVulRegistryImageListRequest, DescribeSystemVulListResponse, DescribeAssetImageRegistryVirusListResponse, DescribeAssetImageSimpleListRequest, DescribeAssetDBServiceListResponse, DescribeSecLogJoinTypeListRequest, DescribeImageSimpleListRequest, CreateNetworkFirewallPolicyDiscoverRequest, DescribeVulTopRankingResponse, DescribeAssetWebServiceListResponse, DescribeVulLevelSummaryResponse, AddNetworkFirewallPolicyDetailRequest, DescribeComplianceTaskPolicyItemSummaryListRequest, DescribeAssetImageVulListRequest, ModifyRiskSyscallStatusRequest, DescribeVulDefenceEventResponse, DescribeVirusEventTendencyResponse, AddEditImageAutoAuthorizedRuleRequest, SwitchImageAutoAuthorizedRuleRequest, DescribeVirusSampleDownloadUrlResponse, DescribeValueAddedSrvInfoResponse, CreateVirusScanTaskRequest, DescribeAbnormalProcessDetailRequest, DescribeAssetImageScanTaskResponse, AddEditAccessControlRuleRequest, DescribeVulTopRankingRequest, ConfirmNetworkFirewallPolicyRequest, DeleteSearchTemplateResponse, AddComplianceAssetPolicySetToWhitelistRequest, DescribeVirusAutoIsolateSampleDownloadURLResponse, DescribeSecLogVasInfoRequest, DescribeNetworkFirewallPolicyDiscoverResponse, DescribeAssetImageSimpleListResponse, DescribeComplianceAssetPolicyItemListResponse, StopVulScanTaskResponse, ModifyEscapeWhiteListResponse, DescribeUserPodListResponse, ModifyVirusAutoIsolateExampleSwitchRequest, ModifySecLogDeliveryKafkaSettingRequest, DescribeReverseShellEventsExportRequest, ModifyK8sApiAbnormalEventStatusRequest, ModifySecLogJoinObjectsRequest, DescribeK8sApiAbnormalRuleListRequest, DescribeAccessControlDetailResponse, CreateImageExportJobResponse, DescribeAffectedNodeListRequest, DescribeAssetImageRegistryAssetStatusResponse, DescribeSecLogDeliveryKafkaSettingResponse, CreateHostExportJobRequest, AddEditRiskSyscallWhiteListResponse, DescribeVirusAutoIsolateSampleDownloadURLRequest, ModifyAbnormalProcessStatusRequest, DescribeVulDetailRequest, CreateEscapeWhiteListExportJobRequest, DescribeSecLogJoinObjectListRequest, DescribeClusterDetailResponse, InitializeUserComplianceEnvironmentRequest, DescribeSupportDefenceVulResponse, DescribeAssetImageRiskListRequest, DescribeEscapeSafeStateRequest, DescribeVirusManualScanEstimateTimeoutRequest, CreateVulScanTaskResponse, DescribeTcssSummaryRequest, ModifyContainerNetStatusResponse, DescribeEscapeEventDetailRequest, DescribeSupportDefenceVulRequest, DeleteCompliancePolicyAssetSetFromWhitelistRequest, DescribeExportJobManageListRequest, DescribeVirusSummaryRequest, DescribeNetworkFirewallPolicyYamlDetailRequest, ModifySecLogJoinStateRequest, DeleteAbnormalProcessRulesRequest, CreateNetworkFirewallClusterRefreshRequest, ModifyCompliancePeriodTaskRequest, DescribeNetworkFirewallNamespaceListRequest, DescribeRiskSyscallEventsRequest, DescribeRiskListResponse, ModifyAssetRequest, DescribeEscapeWhiteListRequest, DescribeNetworkFirewallPolicyListRequest, ConfirmNetworkFirewallPolicyResponse, CreateNetworkFirewallPublishResponse, DescribeAssetSummaryRequest, CreateClusterCheckTaskRequest, DescribeNetworkFirewallClusterListRequest, DescribeVulRegistryImageListResponse, CreateVulDefenceEventExportJobResponse, CreateExportComplianceStatusListJobRequest, DescribeImageAutoAuthorizedTaskListRequest, DescribeVirusSampleDownloadUrlRequest, AddAndPublishNetworkFirewallPolicyYamlDetailResponse, DescribeRiskDnsEventDetailResponse, AddAndPublishNetworkFirewallPolicyDetailRequest, DescribeEscapeEventInfoRequest, UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse, DescribeExportJobManageListResponse, DescribeRiskSyscallEventsExportResponse, DescribeUnfinishRefreshTaskRequest, DescribeAssetImageRegistryRiskInfoListRequest, DescribeImageRegistryNamespaceListRequest, DescribeAssetImageRegistryScanStatusOneKeyRequest, ModifyAccessControlRuleStatusRequest, DescribeVulScanAuthorizedImageSummaryRequest, DescribeWarningRulesRequest, DescribeContainerAssetSummaryRequest, DescribeImageAutoAuthorizedLogListResponse, DescribeUserPodListRequest, DeleteComplianceAssetPolicySetFromWhitelistRequest, DeleteRiskSyscallWhiteListsResponse, DescribeAssetImageVirusListRequest, DescribeAssetImageScanSettingResponse, DescribeReverseShellDetailResponse, DescribeClusterSummaryRequest, AddIgnoreVulRequest, CreateEscapeWhiteListExportJobResponse, DescribeAccessControlRulesExportResponse, ModifyAbnormalProcessStatusResponse, DescribeAbnormalProcessEventsExportResponse, DescribeContainerAssetSummaryResponse, CreateAssetImageScanTaskRequest, CreateSearchTemplateRequest, DescribeEscapeEventsExportRequest, AddEditAbnormalProcessRuleRequest, CheckRepeatAssetImageRegistryRequest, CreateCheckComponentRequest, DescribeAgentInstallCommandResponse, DeleteRiskSyscallWhiteListsRequest, ModifyK8sApiAbnormalRuleStatusResponse, DescribeImageAuthorizedInfoRequest, DescribeExportJobDownloadURLResponse, DescribeAssetImageRegistryRiskInfoListResponse, DescribeVulIgnoreLocalImageListResponse, DescribeAssetSuperNodeListResponse, DescribeAssetImageRegistryDetailResponse, AddCompliancePolicyItemToWhitelistResponse, DescribeAccessControlRulesRequest, StopVirusScanTaskResponse, DescribeVulDefenceEventTendencyResponse, CreateK8sApiAbnormalRuleInfoRequest, CreateK8sApiAbnormalRuleExportJobResponse, RenewImageAuthorizeStateResponse, AddEditWarningRulesRequest, DescribeSearchLogsResponse, ModifyAssetResponse, DescribeReverseShellEventsExportResponse, DescribeAssetImageBindRuleInfoRequest, DescribeAssetImageListResponse, DescribeVulDefenceEventDetailResponse, DescribeAssetImageRegistryVirusListRequest, CreateEscapeEventsExportJobRequest, ModifyVirusMonitorSettingResponse, CheckNetworkFirewallPolicyYamlResponse, DescribeComplianceTaskAssetSummaryResponse, DescribeWarningRulesResponse, DescribeUserClusterRequest, DescribeNetworkFirewallClusterRefreshStatusResponse, AddAndPublishNetworkFirewallPolicyYamlDetailRequest, CreateComplianceTaskRequest, DescribeAccessControlRulesExportRequest, OpenTcssTrialRequest, CreateEscapeEventsExportJobResponse, DescribeImageAutoAuthorizedRuleResponse, AddEditWarningRulesResponse, DescribeVulDefenceSettingRequest, DescribeVirusAutoIsolateSettingResponse, DescribeAssetImageRegistryRegistryListResponse, DescribeAssetImageRegistryAssetStatusRequest, DescribeVulScanLocalImageListRequest, CreateK8sApiAbnormalRuleExportJobRequest, CreateVirusScanAgainResponse, CreateDefenceVulExportJobRequest, ModifySecLogDeliveryClsSettingRequest, AddEditAccessControlRuleResponse, DescribeEscapeEventTypeSummaryRequest, DescribeVulLevelImageSummaryRequest, DeleteCompliancePolicyItemFromWhitelistResponse, DescribeSecEventsTendencyRequest, ResetSecLogTopicConfigResponse, DescribeAccessControlRulesResponse, ModifyEscapeRuleResponse, DescribeSecLogVasInfoResponse, ModifyVirusAutoIsolateSettingResponse, DescribeCompliancePolicyItemAffectedSummaryRequest, DescribeVirusDetailResponse, DescribeImageAutoAuthorizedTaskListResponse, DescribeComplianceAssetListResponse, DescribeSuperNodePodListResponse, CreateVulContainerExportJobRequest, DescribeSecLogDeliveryClsSettingResponse, DescribeComplianceAssetDetailInfoResponse, DeleteEscapeWhiteListResponse, RemoveAssetImageRegistryRegistryDetailResponse, ScanComplianceScanFailedAssetsResponse, ModifyAssetImageRegistryScanStopRequest, DeleteNetworkFirewallPolicyDetailResponse, DescribeK8sApiAbnormalTendencyRequest, DescribeNewestVulResponse, DescribeCompliancePolicyItemAffectedAssetListResponse, DescribeComplianceAssetPolicyItemListRequest, DescribeABTestConfigResponse, DescribeContainerSecEventSummaryResponse, DescribeAssetHostListRequest, CreateVulDefenceHostExportJobRequest, DescribeImageAutoAuthorizedLogListRequest, DescribeRiskSyscallEventsExportRequest, DescribeRiskSyscallWhiteListsRequest, DescribeVulDefencePluginRequest, DescribeAssetImageRegistryScanStatusOneKeyResponse, DescribeAssetImageRegistryRegistryDetailRequest, UpdateAssetImageRegistryRegistryDetailRequest, DescribeK8sApiAbnormalRuleScopeListRequest, AddEditReverseShellWhiteListRequest, DescribeVirusTaskListRequest, CreateRiskDnsEventExportJobResponse, DescribeAssetImageRegistryVirusListExportRequest, DescribeWebVulListResponse, DescribeVulScanInfoResponse, DescribeAssetImageRegistryListExportResponse, DescribeVulTendencyRequest, DescribePostPayDetailRequest, ModifyK8sApiAbnormalEventStatusResponse, DescribeSecLogDeliveryKafkaOptionsResponse, DescribeAssetHostDetailRequest, DescribeRefreshTaskResponse, UpdateNetworkFirewallPolicyDetailRequest, DescribeK8sApiAbnormalEventInfoRequest, DescribeSearchTemplatesRequest } from "./tcss_models";
/**
 * tcss client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * DescribeImageAuthorizedInfo  查询镜像授权信息
     */
    DescribeImageAuthorizedInfo(req?: DescribeImageAuthorizedInfoRequest, cb?: (error: string, rep: DescribeImageAuthorizedInfoResponse) => void): Promise<DescribeImageAuthorizedInfoResponse>;
    /**
     * 创建k8s api异常事件导出任务
     */
    CreateK8sApiAbnormalEventExportJob(req: CreateK8sApiAbnormalEventExportJobRequest, cb?: (error: string, rep: CreateK8sApiAbnormalEventExportJobResponse) => void): Promise<CreateK8sApiAbnormalEventExportJobResponse>;
    /**
     * 更新安全日志-日志投递cls配置
     */
    ModifySecLogDeliveryClsSetting(req: ModifySecLogDeliveryClsSettingRequest, cb?: (error: string, rep: ModifySecLogDeliveryClsSettingResponse) => void): Promise<ModifySecLogDeliveryClsSettingResponse>;
    /**
     * 接口已废弃

查询运行时异常进程事件列表信息导出
     */
    DescribeAbnormalProcessEventsExport(req: DescribeAbnormalProcessEventsExportRequest, cb?: (error: string, rep: DescribeAbnormalProcessEventsExportResponse) => void): Promise<DescribeAbnormalProcessEventsExportResponse>;
    /**
     * 运行时文件扫描超时设置查询
     */
    DescribeVirusScanTimeoutSetting(req: DescribeVirusScanTimeoutSettingRequest, cb?: (error: string, rep: DescribeVirusScanTimeoutSettingResponse) => void): Promise<DescribeVirusScanTimeoutSettingResponse>;
    /**
     * 运行时查询木马概览信息
     */
    DescribeVirusSummary(req?: DescribeVirusSummaryRequest, cb?: (error: string, rep: DescribeVirusSummaryResponse) => void): Promise<DescribeVirusSummaryResponse>;
    /**
     * 编辑漏洞防御设置
     */
    ModifyVulDefenceSetting(req: ModifyVulDefenceSettingRequest, cb?: (error: string, rep: ModifyVulDefenceSettingResponse) => void): Promise<ModifyVulDefenceSettingResponse>;
    /**
     * 创建异常进程规则导出任务
     */
    CreateAbnormalProcessRulesExportJob(req: CreateAbnormalProcessRulesExportJobRequest, cb?: (error: string, rep: CreateAbnormalProcessRulesExportJobResponse) => void): Promise<CreateAbnormalProcessRulesExportJobResponse>;
    /**
     * 容器安全搜索查询主机列表
     */
    DescribeAssetHostList(req: DescribeAssetHostListRequest, cb?: (error: string, rep: DescribeAssetHostListResponse) => void): Promise<DescribeAssetHostListResponse>;
    /**
     * 重新检测选定的检测失败的资产下的所有失败的检测项，返回创建的合规检查任务的ID。
     */
    ScanComplianceScanFailedAssets(req: ScanComplianceScanFailedAssetsRequest, cb?: (error: string, rep: ScanComplianceScanFailedAssetsResponse) => void): Promise<ScanComplianceScanFailedAssetsResponse>;
    /**
     * 获取索引列表
     */
    DescribeIndexList(req?: DescribeIndexListRequest, cb?: (error: string, rep: DescribeIndexListResponse) => void): Promise<DescribeIndexListResponse>;
    /**
     * 获取公钥
     */
    DescribePublicKey(req?: DescribePublicKeyRequest, cb?: (error: string, rep: DescribePublicKeyResponse) => void): Promise<DescribePublicKeyResponse>;
    /**
     * 查询运行时访问控制事件的详细信息
     */
    DescribeAccessControlDetail(req: DescribeAccessControlDetailRequest, cb?: (error: string, rep: DescribeAccessControlDetailResponse) => void): Promise<DescribeAccessControlDetailResponse>;
    /**
     * 查询木马自动隔离样本详情
     */
    DescribeVirusAutoIsolateSampleDetail(req: DescribeVirusAutoIsolateSampleDetailRequest, cb?: (error: string, rep: DescribeVirusAutoIsolateSampleDetailResponse) => void): Promise<DescribeVirusAutoIsolateSampleDetailResponse>;
    /**
     * 接口已废弃

查询运行时异常进程策略列表信息导出
     */
    DescribeAbnormalProcessRulesExport(req: DescribeAbnormalProcessRulesExportRequest, cb?: (error: string, rep: DescribeAbnormalProcessRulesExportResponse) => void): Promise<DescribeAbnormalProcessRulesExportResponse>;
    /**
     * 容器网络查询网络策略策略执行状态
     */
    DescribeNetworkFirewallPolicyStatus(req: DescribeNetworkFirewallPolicyStatusRequest, cb?: (error: string, rep: DescribeNetworkFirewallPolicyStatusResponse) => void): Promise<DescribeNetworkFirewallPolicyStatusResponse>;
    /**
     * 查询k8sapi异常事件统计
     */
    DescribeK8sApiAbnormalSummary(req?: DescribeK8sApiAbnormalSummaryRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalSummaryResponse) => void): Promise<DescribeK8sApiAbnormalSummaryResponse>;
    /**
     * 创建漏洞防御导出任务
     */
    CreateVulDefenceEventExportJob(req: CreateVulDefenceEventExportJobRequest, cb?: (error: string, rep: CreateVulDefenceEventExportJobResponse) => void): Promise<CreateVulDefenceEventExportJobResponse>;
    /**
     * 容器安全查询app服务列表
     */
    DescribeAssetAppServiceList(req: DescribeAssetAppServiceListRequest, cb?: (error: string, rep: DescribeAssetAppServiceListResponse) => void): Promise<DescribeAssetAppServiceListResponse>;
    /**
     * 删除检索模板
     */
    DeleteSearchTemplate(req: DeleteSearchTemplateRequest, cb?: (error: string, rep: DeleteSearchTemplateResponse) => void): Promise<DeleteSearchTemplateResponse>;
    /**
     * 创建受漏洞影响的镜像导出任务
     */
    CreateVulImageExportJob(req: CreateVulImageExportJobRequest, cb?: (error: string, rep: CreateVulImageExportJobResponse) => void): Promise<CreateVulImageExportJobResponse>;
    /**
     * 统计漏洞扫描页已授权和未扫描镜像数
     */
    DescribeVulScanAuthorizedImageSummary(req?: DescribeVulScanAuthorizedImageSummaryRequest, cb?: (error: string, rep: DescribeVulScanAuthorizedImageSummaryResponse) => void): Promise<DescribeVulScanAuthorizedImageSummaryResponse>;
    /**
     * 删除单个镜像仓库详细信息
     */
    RemoveAssetImageRegistryRegistryDetail(req: RemoveAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: RemoveAssetImageRegistryRegistryDetailResponse) => void): Promise<RemoveAssetImageRegistryRegistryDetailResponse>;
    /**
     * 下发刷新任务，会刷新资产信息
     */
    CreateRefreshTask(req: CreateRefreshTaskRequest, cb?: (error: string, rep: CreateRefreshTaskResponse) => void): Promise<CreateRefreshTaskResponse>;
    /**
     * 导出ES查询文档列表
     */
    DescribeSearchExportList(req: DescribeSearchExportListRequest, cb?: (error: string, rep: DescribeSearchExportListResponse) => void): Promise<DescribeSearchExportListResponse>;
    /**
     * 修改安全日志kafkaUIN
     */
    ModifySecLogKafkaUIN(req: ModifySecLogKafkaUINRequest, cb?: (error: string, rep: ModifySecLogKafkaUINResponse) => void): Promise<ModifySecLogKafkaUINResponse>;
    /**
     * 镜像仓库停止镜像一键扫描任务
     */
    ModifyAssetImageRegistryScanStopOneKey(req: ModifyAssetImageRegistryScanStopOneKeyRequest, cb?: (error: string, rep: ModifyAssetImageRegistryScanStopOneKeyResponse) => void): Promise<ModifyAssetImageRegistryScanStopOneKeyResponse>;
    /**
     * 查询运行时运行时反弹shell白名单列表信息
     */
    DescribeReverseShellWhiteLists(req: DescribeReverseShellWhiteListsRequest, cb?: (error: string, rep: DescribeReverseShellWhiteListsResponse) => void): Promise<DescribeReverseShellWhiteListsResponse>;
    /**
     * 查询本地镜像组件列表导出
     */
    CreateComponentExportJob(req: CreateComponentExportJobRequest, cb?: (error: string, rep: CreateComponentExportJobResponse) => void): Promise<CreateComponentExportJobResponse>;
    /**
     * 查询木马自动隔离样本下载链接
     */
    DescribeVirusAutoIsolateSampleDownloadURL(req: DescribeVirusAutoIsolateSampleDownloadURLRequest, cb?: (error: string, rep: DescribeVirusAutoIsolateSampleDownloadURLResponse) => void): Promise<DescribeVirusAutoIsolateSampleDownloadURLResponse>;
    /**
     * 查询用户镜像仓库下的命令空间列表
     */
    DescribeImageRegistryNamespaceList(req: DescribeImageRegistryNamespaceListRequest, cb?: (error: string, rep: DescribeImageRegistryNamespaceListResponse) => void): Promise<DescribeImageRegistryNamespaceListResponse>;
    /**
     * 查询扫描忽略的漏洞列表
     */
    DescribeScanIgnoreVulList(req: DescribeScanIgnoreVulListRequest, cb?: (error: string, rep: DescribeScanIgnoreVulListResponse) => void): Promise<DescribeScanIgnoreVulListResponse>;
    /**
     * 查询安全日志接入对象列表
     */
    DescribeSecLogJoinObjectList(req: DescribeSecLogJoinObjectListRequest, cb?: (error: string, rep: DescribeSecLogJoinObjectListResponse) => void): Promise<DescribeSecLogJoinObjectListResponse>;
    /**
     * 容器安全搜索查询容器组件列表
     */
    DescribeAssetComponentList(req: DescribeAssetComponentListRequest, cb?: (error: string, rep: DescribeAssetComponentListResponse) => void): Promise<DescribeAssetComponentListResponse>;
    /**
     * 容器安全查询镜像扫描状态
     */
    DescribeAssetImageScanStatus(req: DescribeAssetImageScanStatusRequest, cb?: (error: string, rep: DescribeAssetImageScanStatusResponse) => void): Promise<DescribeAssetImageScanStatusResponse>;
    /**
     * 查询平行容器安装命令
     */
    DescribeAgentDaemonSetCmd(req: DescribeAgentDaemonSetCmdRequest, cb?: (error: string, rep: DescribeAgentDaemonSetCmdResponse) => void): Promise<DescribeAgentDaemonSetCmdResponse>;
    /**
     * 创建k8sApi异常规则导出任务
     */
    CreateK8sApiAbnormalRuleExportJob(req: CreateK8sApiAbnormalRuleExportJobRequest, cb?: (error: string, rep: CreateK8sApiAbnormalRuleExportJobResponse) => void): Promise<CreateK8sApiAbnormalRuleExportJobResponse>;
    /**
     * 容器网络集群网络策略创建自动发现任务
     */
    CreateNetworkFirewallPolicyDiscover(req: CreateNetworkFirewallPolicyDiscoverRequest, cb?: (error: string, rep: CreateNetworkFirewallPolicyDiscoverResponse) => void): Promise<CreateNetworkFirewallPolicyDiscoverResponse>;
    /**
     * 创建集群检查任务，用户检查用户的集群相关风险项
     */
    CreateClusterCheckTask(req: CreateClusterCheckTaskRequest, cb?: (error: string, rep: CreateClusterCheckTaskResponse) => void): Promise<CreateClusterCheckTaskResponse>;
    /**
     * 查询运行时访问控制事件列表
     */
    DescribeAccessControlEvents(req: DescribeAccessControlEventsRequest, cb?: (error: string, rep: DescribeAccessControlEventsResponse) => void): Promise<DescribeAccessControlEventsResponse>;
    /**
     * 查询恶意请求事件列表
     */
    DescribeRiskDnsList(req: DescribeRiskDnsListRequest, cb?: (error: string, rep: DescribeRiskDnsListResponse) => void): Promise<DescribeRiskDnsListResponse>;
    /**
     * 运行时更新文件查杀设置
     */
    ModifyVirusScanSetting(req: ModifyVirusScanSettingRequest, cb?: (error: string, rep: ModifyVirusScanSettingResponse) => void): Promise<ModifyVirusScanSettingResponse>;
    /**
     * 查询安全日志投递kafka可选项
     */
    DescribeSecLogDeliveryKafkaOptions(req: DescribeSecLogDeliveryKafkaOptionsRequest, cb?: (error: string, rep: DescribeSecLogDeliveryKafkaOptionsResponse) => void): Promise<DescribeSecLogDeliveryKafkaOptionsResponse>;
    /**
     * 镜像仓库木马信息列表导出
     */
    DescribeAssetImageRegistryVirusListExport(req: DescribeAssetImageRegistryVirusListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVirusListExportResponse) => void): Promise<DescribeAssetImageRegistryVirusListExportResponse>;
    /**
     * 容器网络创建网络策略确认任务
     */
    ConfirmNetworkFirewallPolicy(req: ConfirmNetworkFirewallPolicyRequest, cb?: (error: string, rep: ConfirmNetworkFirewallPolicyResponse) => void): Promise<ConfirmNetworkFirewallPolicyResponse>;
    /**
     * 移除安全合规忽略(资产+检测项)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyAssetSetToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    DeleteComplianceAssetPolicySetFromWhitelist(req: DeleteComplianceAssetPolicySetFromWhitelistRequest, cb?: (error: string, rep: DeleteComplianceAssetPolicySetFromWhitelistResponse) => void): Promise<DeleteComplianceAssetPolicySetFromWhitelistResponse>;
    /**
     * 查询本地镜像组件列表
     */
    DescribeImageComponentList(req: DescribeImageComponentListRequest, cb?: (error: string, rep: DescribeImageComponentListResponse) => void): Promise<DescribeImageComponentListResponse>;
    /**
     * 镜像仓库查询镜像统计信息
     */
    DescribeAssetImageRegistrySummary(req: DescribeAssetImageRegistrySummaryRequest, cb?: (error: string, rep: DescribeAssetImageRegistrySummaryResponse) => void): Promise<DescribeAssetImageRegistrySummaryResponse>;
    /**
     * 容器网络创建网络策略更新任务
     */
    UpdateNetworkFirewallPolicyDetail(req: UpdateNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: UpdateNetworkFirewallPolicyDetailResponse) => void): Promise<UpdateNetworkFirewallPolicyDetailResponse>;
    /**
     * 查看镜像仓库资产更新进度状态
     */
    DescribeAssetImageRegistryAssetStatus(req?: DescribeAssetImageRegistryAssetStatusRequest, cb?: (error: string, rep: DescribeAssetImageRegistryAssetStatusResponse) => void): Promise<DescribeAssetImageRegistryAssetStatusResponse>;
    /**
     * 镜像仓库仓库列表
     */
    DescribeAssetImageRegistryRegistryList(req: DescribeAssetImageRegistryRegistryListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRegistryListResponse) => void): Promise<DescribeAssetImageRegistryRegistryListResponse>;
    /**
     * 运行时文件查杀事件列表导出
     */
    ExportVirusList(req: ExportVirusListRequest, cb?: (error: string, rep: ExportVirusListResponse) => void): Promise<ExportVirusListResponse>;
    /**
     * 查询单个集群的详细信息
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 镜像仓库查询木马病毒列表
     */
    DescribeAssetImageRegistryVirusList(req: DescribeAssetImageRegistryVirusListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVirusListResponse) => void): Promise<DescribeAssetImageRegistryVirusListResponse>;
    /**
     * 镜像仓库更新定时任务
     */
    UpdateImageRegistryTimingScanTask(req: UpdateImageRegistryTimingScanTaskRequest, cb?: (error: string, rep: UpdateImageRegistryTimingScanTaskResponse) => void): Promise<UpdateImageRegistryTimingScanTaskResponse>;
    /**
     * 镜像仓库创建镜像一键扫描任务
     */
    CreateAssetImageRegistryScanTaskOneKey(req: CreateAssetImageRegistryScanTaskOneKeyRequest, cb?: (error: string, rep: CreateAssetImageRegistryScanTaskOneKeyResponse) => void): Promise<CreateAssetImageRegistryScanTaskOneKeyResponse>;
    /**
     * 修改运行时访问控制策略的状态，启用或者禁用
     */
    ModifyAccessControlRuleStatus(req: ModifyAccessControlRuleStatusRequest, cb?: (error: string, rep: ModifyAccessControlRuleStatusResponse) => void): Promise<ModifyAccessControlRuleStatusResponse>;
    /**
     * 容器网络集群查看Yaml网络策略详情
     */
    DescribeNetworkFirewallPolicyYamlDetail(req: DescribeNetworkFirewallPolicyYamlDetailRequest, cb?: (error: string, rep: DescribeNetworkFirewallPolicyYamlDetailResponse) => void): Promise<DescribeNetworkFirewallPolicyYamlDetailResponse>;
    /**
     * 接口已废弃

DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     */
    DescribeEscapeEventsExport(req: DescribeEscapeEventsExportRequest, cb?: (error: string, rep: DescribeEscapeEventsExportResponse) => void): Promise<DescribeEscapeEventsExportResponse>;
    /**
     * 容器网络创建检查Yaml网络策略任务
     */
    CheckNetworkFirewallPolicyYaml(req: CheckNetworkFirewallPolicyYamlRequest, cb?: (error: string, rep: CheckNetworkFirewallPolicyYamlResponse) => void): Promise<CheckNetworkFirewallPolicyYamlResponse>;
    /**
     * 容器网络更新Yaml网络策略任务
     */
    UpdateNetworkFirewallPolicyYamlDetail(req: UpdateNetworkFirewallPolicyYamlDetailRequest, cb?: (error: string, rep: UpdateNetworkFirewallPolicyYamlDetailResponse) => void): Promise<UpdateNetworkFirewallPolicyYamlDetailResponse>;
    /**
     * 查询集群网络空间列表
     */
    DescribeNetworkFirewallNamespaceList(req: DescribeNetworkFirewallNamespaceListRequest, cb?: (error: string, rep: DescribeNetworkFirewallNamespaceListResponse) => void): Promise<DescribeNetworkFirewallNamespaceListResponse>;
    /**
     * 接口已废弃

容器安全搜索查询镜像列表导出
     */
    DescribeAssetImageListExport(req: DescribeAssetImageListExportRequest, cb?: (error: string, rep: DescribeAssetImageListExportResponse) => void): Promise<DescribeAssetImageListExportResponse>;
    /**
     * 获取镜像扫描设置信息
     */
    DescribeAssetImageScanSetting(req?: DescribeAssetImageScanSettingRequest, cb?: (error: string, rep: DescribeAssetImageScanSettingResponse) => void): Promise<DescribeAssetImageScanSettingResponse>;
    /**
     * 安装检查组件，创建防护容器
     */
    CreateCheckComponent(req: CreateCheckComponentRequest, cb?: (error: string, rep: CreateCheckComponentResponse) => void): Promise<CreateCheckComponentResponse>;
    /**
     * 设置检测模式和自动检查
     */
    SetCheckMode(req: SetCheckModeRequest, cb?: (error: string, rep: SetCheckModeResponse) => void): Promise<SetCheckModeResponse>;
    /**
     * 查询最新披露漏洞列表
     */
    DescribeNewestVul(req?: DescribeNewestVulRequest, cb?: (error: string, rep: DescribeNewestVulResponse) => void): Promise<DescribeNewestVulResponse>;
    /**
     * 查询运行时高危系统调用系统名称列表
     */
    DescribeRiskSyscallNames(req?: DescribeRiskSyscallNamesRequest, cb?: (error: string, rep: DescribeRiskSyscallNamesResponse) => void): Promise<DescribeRiskSyscallNamesResponse>;
    /**
     * 修改k8sapi异常规则信息
     */
    ModifyK8sApiAbnormalRuleInfo(req: ModifyK8sApiAbnormalRuleInfoRequest, cb?: (error: string, rep: ModifyK8sApiAbnormalRuleInfoResponse) => void): Promise<ModifyK8sApiAbnormalRuleInfoResponse>;
    /**
     * 查询合规检测的定时任务列表
     */
    DescribeCompliancePeriodTaskList(req: DescribeCompliancePeriodTaskListRequest, cb?: (error: string, rep: DescribeCompliancePeriodTaskListResponse) => void): Promise<DescribeCompliancePeriodTaskListResponse>;
    /**
     * 删除运行访问控制策略
     */
    DeleteAccessControlRules(req: DeleteAccessControlRulesRequest, cb?: (error: string, rep: DeleteAccessControlRulesResponse) => void): Promise<DeleteAccessControlRulesResponse>;
    /**
     * 创建漏洞防御主机导出任务
     */
    CreateVulDefenceHostExportJob(req: CreateVulDefenceHostExportJobRequest, cb?: (error: string, rep: CreateVulDefenceHostExportJobResponse) => void): Promise<CreateVulDefenceHostExportJobResponse>;
    /**
     * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
     */
    ModifyEscapeEventStatus(req: ModifyEscapeEventStatusRequest, cb?: (error: string, rep: ModifyEscapeEventStatusResponse) => void): Promise<ModifyEscapeEventStatusResponse>;
    /**
     * 统计异常进程各威胁等级待处理事件数
     */
    DescribeAbnormalProcessLevelSummary(req?: DescribeAbnormalProcessLevelSummaryRequest, cb?: (error: string, rep: DescribeAbnormalProcessLevelSummaryResponse) => void): Promise<DescribeAbnormalProcessLevelSummaryResponse>;
    /**
     * DescribePurchaseStateInfo 查询容器安全服务已购买信息
     */
    DescribePurchaseStateInfo(req?: DescribePurchaseStateInfoRequest, cb?: (error: string, rep: DescribePurchaseStateInfoResponse) => void): Promise<DescribePurchaseStateInfoResponse>;
    /**
     * 查询运行时高危系统调用白名单详细信息
     */
    DescribeRiskSyscallWhiteListDetail(req: DescribeRiskSyscallWhiteListDetailRequest, cb?: (error: string, rep: DescribeRiskSyscallWhiteListDetailResponse) => void): Promise<DescribeRiskSyscallWhiteListDetailResponse>;
    /**
     * 镜像仓库镜像仓库列表详情
     */
    DescribeAssetImageRegistryDetail(req: DescribeAssetImageRegistryDetailRequest, cb?: (error: string, rep: DescribeAssetImageRegistryDetailResponse) => void): Promise<DescribeAssetImageRegistryDetailResponse>;
    /**
     * 修改逃逸白名单
     */
    ModifyEscapeWhiteList(req: ModifyEscapeWhiteListRequest, cb?: (error: string, rep: ModifyEscapeWhiteListResponse) => void): Promise<ModifyEscapeWhiteListResponse>;
    /**
     * 查询木马一键检测预估超时时间
     */
    DescribeVirusManualScanEstimateTimeout(req: DescribeVirusManualScanEstimateTimeoutRequest, cb?: (error: string, rep: DescribeVirusManualScanEstimateTimeoutResponse) => void): Promise<DescribeVirusManualScanEstimateTimeoutResponse>;
    /**
     * 运行时高危系统调用列表导出
     */
    DescribeRiskSyscallEventsExport(req: DescribeRiskSyscallEventsExportRequest, cb?: (error: string, rep: DescribeRiskSyscallEventsExportResponse) => void): Promise<DescribeRiskSyscallEventsExportResponse>;
    /**
     * 查询本地镜像自动授权规则
     */
    DescribeImageAutoAuthorizedRule(req?: DescribeImageAutoAuthorizedRuleRequest, cb?: (error: string, rep: DescribeImageAutoAuthorizedRuleResponse) => void): Promise<DescribeImageAutoAuthorizedRuleResponse>;
    /**
     * 查询运行时异常策略详细信息
     */
    DescribeAbnormalProcessRuleDetail(req: DescribeAbnormalProcessRuleDetailRequest, cb?: (error: string, rep: DescribeAbnormalProcessRuleDetailResponse) => void): Promise<DescribeAbnormalProcessRuleDetailResponse>;
    /**
     * 创建支持防御的漏洞导出任务
     */
    CreateDefenceVulExportJob(req: CreateDefenceVulExportJobRequest, cb?: (error: string, rep: CreateDefenceVulExportJobResponse) => void): Promise<CreateDefenceVulExportJobResponse>;
    /**
     * DescribeValueAddedSrvInfo查询增值服务需购买信息
     */
    DescribeValueAddedSrvInfo(req?: DescribeValueAddedSrvInfoRequest, cb?: (error: string, rep: DescribeValueAddedSrvInfoResponse) => void): Promise<DescribeValueAddedSrvInfoResponse>;
    /**
     * 运行时更新木马文件事件状态
     */
    ModifyVirusFileStatus(req: ModifyVirusFileStatusRequest, cb?: (error: string, rep: ModifyVirusFileStatusResponse) => void): Promise<ModifyVirusFileStatusResponse>;
    /**
     * 添加编辑运行时反弹shell白名单
     */
    AddEditReverseShellWhiteList(req: AddEditReverseShellWhiteListRequest, cb?: (error: string, rep: AddEditReverseShellWhiteListResponse) => void): Promise<AddEditReverseShellWhiteListResponse>;
    /**
     * 查询运行时反弹shell事件详细信息
     */
    DescribeReverseShellDetail(req: DescribeReverseShellDetailRequest, cb?: (error: string, rep: DescribeReverseShellDetailResponse) => void): Promise<DescribeReverseShellDetailResponse>;
    /**
     * 获取ES字段聚合结果
     */
    DescribeESAggregations(req: DescribeESAggregationsRequest, cb?: (error: string, rep: DescribeESAggregationsResponse) => void): Promise<DescribeESAggregationsResponse>;
    /**
     * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
     */
    DescribeAssetImageBindRuleInfo(req: DescribeAssetImageBindRuleInfoRequest, cb?: (error: string, rep: DescribeAssetImageBindRuleInfoResponse) => void): Promise<DescribeAssetImageBindRuleInfoResponse>;
    /**
     * 取消漏洞扫描忽略漏洞
     */
    DeleteIgnoreVul(req: DeleteIgnoreVulRequest, cb?: (error: string, rep: DeleteIgnoreVulResponse) => void): Promise<DeleteIgnoreVulResponse>;
    /**
     * 创建本地镜像木马列表导出任务
     */
    CreateAssetImageVirusExportJob(req: CreateAssetImageVirusExportJobRequest, cb?: (error: string, rep: CreateAssetImageVirusExportJobResponse) => void): Promise<CreateAssetImageVirusExportJobResponse>;
    /**
     * 容器网络查询网络策略自动发现任务进度
     */
    DescribeNetworkFirewallPolicyDiscover(req: DescribeNetworkFirewallPolicyDiscoverRequest, cb?: (error: string, rep: DescribeNetworkFirewallPolicyDiscoverResponse) => void): Promise<DescribeNetworkFirewallPolicyDiscoverResponse>;
    /**
     * 查询安全日志投递cls可选项
     */
    DescribeSecLogDeliveryClsOptions(req: DescribeSecLogDeliveryClsOptionsRequest, cb?: (error: string, rep: DescribeSecLogDeliveryClsOptionsResponse) => void): Promise<DescribeSecLogDeliveryClsOptionsResponse>;
    /**
     * 查询当天未授权核数趋势
     */
    DescribeUnauthorizedCoresTendency(req?: DescribeUnauthorizedCoresTendencyRequest, cb?: (error: string, rep: DescribeUnauthorizedCoresTendencyResponse) => void): Promise<DescribeUnauthorizedCoresTendencyResponse>;
    /**
     * 查询检查结果总览，返回受影响的节点数量，返回7天的数据，总共7个
     */
    DescribeTaskResultSummary(req?: DescribeTaskResultSummaryRequest, cb?: (error: string, rep: DescribeTaskResultSummaryResponse) => void): Promise<DescribeTaskResultSummaryResponse>;
    /**
     * 查询容器详细信息
     */
    DescribeAssetContainerDetail(req: DescribeAssetContainerDetailRequest, cb?: (error: string, rep: DescribeAssetContainerDetailResponse) => void): Promise<DescribeAssetContainerDetailResponse>;
    /**
     * 镜像仓库查询镜像高危行为列表
     */
    DescribeAssetImageRegistryRiskInfoList(req: DescribeAssetImageRegistryRiskInfoListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRiskInfoListResponse) => void): Promise<DescribeAssetImageRegistryRiskInfoListResponse>;
    /**
     * ModifyEscapeRule  修改容器逃逸扫描规则信息
     */
    ModifyEscapeRule(req: ModifyEscapeRuleRequest, cb?: (error: string, rep: ModifyEscapeRuleResponse) => void): Promise<ModifyEscapeRuleResponse>;
    /**
     * 按照 检测项 → 资产 的两级层次展开的第一层级：检测项层级。
     */
    DescribeCompliancePolicyItemAffectedSummary(req: DescribeCompliancePolicyItemAffectedSummaryRequest, cb?: (error: string, rep: DescribeCompliancePolicyItemAffectedSummaryResponse) => void): Promise<DescribeCompliancePolicyItemAffectedSummaryResponse>;
    /**
     * 查询刷新任务
     */
    DescribeRefreshTask(req: DescribeRefreshTaskRequest, cb?: (error: string, rep: DescribeRefreshTaskResponse) => void): Promise<DescribeRefreshTaskResponse>;
    /**
     * 容器网络集群下发刷新任务
     */
    CreateNetworkFirewallClusterRefresh(req?: CreateNetworkFirewallClusterRefreshRequest, cb?: (error: string, rep: CreateNetworkFirewallClusterRefreshResponse) => void): Promise<CreateNetworkFirewallClusterRefreshResponse>;
    /**
     * 查询运行时运行时高危系统调用列表信息
     */
    DescribeRiskSyscallEvents(req: DescribeRiskSyscallEventsRequest, cb?: (error: string, rep: DescribeRiskSyscallEventsResponse) => void): Promise<DescribeRiskSyscallEventsResponse>;
    /**
     * 新增安全合规忽略(资产+检测项列表)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    AddComplianceAssetPolicySetToWhitelist(req: AddComplianceAssetPolicySetToWhitelistRequest, cb?: (error: string, rep: AddComplianceAssetPolicySetToWhitelistResponse) => void): Promise<AddComplianceAssetPolicySetToWhitelistResponse>;
    /**
     * 修改安全日志接入对象
     */
    ModifySecLogJoinObjects(req: ModifySecLogJoinObjectsRequest, cb?: (error: string, rep: ModifySecLogJoinObjectsResponse) => void): Promise<ModifySecLogJoinObjectsResponse>;
    /**
     * 查询容器资产概览信息
     */
    DescribeContainerAssetSummary(req?: DescribeContainerAssetSummaryRequest, cb?: (error: string, rep: DescribeContainerAssetSummaryResponse) => void): Promise<DescribeContainerAssetSummaryResponse>;
    /**
     * 查询超级节点列表
     */
    DescribeAssetSuperNodeList(req: DescribeAssetSuperNodeListRequest, cb?: (error: string, rep: DescribeAssetSuperNodeListResponse) => void): Promise<DescribeAssetSuperNodeListResponse>;
    /**
     * 镜像仓库查看定时任务
     */
    DescribeImageRegistryTimingScanTask(req?: DescribeImageRegistryTimingScanTaskRequest, cb?: (error: string, rep: DescribeImageRegistryTimingScanTaskResponse) => void): Promise<DescribeImageRegistryTimingScanTaskResponse>;
    /**
     * 查询运行时反弹shell事件列表信息导出
     */
    DescribeReverseShellEventsExport(req: DescribeReverseShellEventsExportRequest, cb?: (error: string, rep: DescribeReverseShellEventsExportResponse) => void): Promise<DescribeReverseShellEventsExportResponse>;
    /**
     * 容器安全查询db服务列表
     */
    DescribeAssetDBServiceList(req: DescribeAssetDBServiceListRequest, cb?: (error: string, rep: DescribeAssetDBServiceListResponse) => void): Promise<DescribeAssetDBServiceListResponse>;
    /**
     * 查询漏洞影响的镜像列表
     */
    DescribeVulImageList(req: DescribeVulImageListRequest, cb?: (error: string, rep: DescribeVulImageListResponse) => void): Promise<DescribeVulImageListResponse>;
    /**
     * 修改运行时异常进程策略的开启关闭状态
     */
    ModifyAbnormalProcessRuleStatus(req: ModifyAbnormalProcessRuleStatusRequest, cb?: (error: string, rep: ModifyAbnormalProcessRuleStatusResponse) => void): Promise<ModifyAbnormalProcessRuleStatusResponse>;
    /**
     * 查询漏洞防御事件列表
     */
    DescribeVulDefenceEvent(req: DescribeVulDefenceEventRequest, cb?: (error: string, rep: DescribeVulDefenceEventResponse) => void): Promise<DescribeVulDefenceEventResponse>;
    /**
     * 查询漏洞扫描忽略的仓库镜像列表
     */
    DescribeVulIgnoreRegistryImageList(req: DescribeVulIgnoreRegistryImageListRequest, cb?: (error: string, rep: DescribeVulIgnoreRegistryImageListResponse) => void): Promise<DescribeVulIgnoreRegistryImageListResponse>;
    /**
     * 查询漏洞扫描任务信息
     */
    DescribeVulScanInfo(req: DescribeVulScanInfoRequest, cb?: (error: string, rep: DescribeVulScanInfoResponse) => void): Promise<DescribeVulScanInfoResponse>;
    /**
     * 查询漏洞镜像统计
     */
    DescribeVulImageSummary(req?: DescribeVulImageSummaryRequest, cb?: (error: string, rep: DescribeVulImageSummaryResponse) => void): Promise<DescribeVulImageSummaryResponse>;
    /**
     * 创建web漏洞导出任务
     */
    CreateWebVulExportJob(req: CreateWebVulExportJobRequest, cb?: (error: string, rep: CreateWebVulExportJobResponse) => void): Promise<CreateWebVulExportJobResponse>;
    /**
     * 容器网络创建网络策略更新并发布任务
     */
    UpdateAndPublishNetworkFirewallPolicyDetail(req: UpdateAndPublishNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: UpdateAndPublishNetworkFirewallPolicyDetailResponse) => void): Promise<UpdateAndPublishNetworkFirewallPolicyDetailResponse>;
    /**
     * 隔离容器网络状态
     */
    ModifyContainerNetStatus(req: ModifyContainerNetStatusRequest, cb?: (error: string, rep: ModifyContainerNetStatusResponse) => void): Promise<ModifyContainerNetStatusResponse>;
    /**
     * 查询容器安全本地镜像风险趋势
     */
    DescribeImageRiskTendency(req: DescribeImageRiskTendencyRequest, cb?: (error: string, rep: DescribeImageRiskTendencyResponse) => void): Promise<DescribeImageRiskTendencyResponse>;
    /**
     * 查询agent安装命令
     */
    DescribeAgentInstallCommand(req: DescribeAgentInstallCommandRequest, cb?: (error: string, rep: DescribeAgentInstallCommandResponse) => void): Promise<DescribeAgentInstallCommandResponse>;
    /**
     * 查询导出接口进度
     */
    DescribeExportJobResult(req: DescribeExportJobResultRequest, cb?: (error: string, rep: DescribeExportJobResultResponse) => void): Promise<DescribeExportJobResultResponse>;
    /**
     * 容器安全创建镜像扫描任务
     */
    CreateAssetImageScanTask(req: CreateAssetImageScanTaskRequest, cb?: (error: string, rep: CreateAssetImageScanTaskResponse) => void): Promise<CreateAssetImageScanTaskResponse>;
    /**
     * 创建应急漏洞导出任务
     */
    CreateEmergencyVulExportJob(req: CreateEmergencyVulExportJobRequest, cb?: (error: string, rep: CreateEmergencyVulExportJobResponse) => void): Promise<CreateEmergencyVulExportJobResponse>;
    /**
     * 查询正在一键扫描的镜像扫描taskid
     */
    DescribeAssetImageScanTask(req?: DescribeAssetImageScanTaskRequest, cb?: (error: string, rep: DescribeAssetImageScanTaskResponse) => void): Promise<DescribeAssetImageScanTaskResponse>;
    /**
     * 镜像仓库镜像列表导出
     */
    DescribeAssetImageRegistryListExport(req: DescribeAssetImageRegistryListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryListExportResponse) => void): Promise<DescribeAssetImageRegistryListExportResponse>;
    /**
     * 查询漏洞防御插件列表
     */
    DescribeVulDefencePlugin(req: DescribeVulDefencePluginRequest, cb?: (error: string, rep: DescribeVulDefencePluginResponse) => void): Promise<DescribeVulDefencePluginResponse>;
    /**
     * 查询k8s api异常事件列表
     */
    DescribeK8sApiAbnormalEventList(req: DescribeK8sApiAbnormalEventListRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalEventListResponse) => void): Promise<DescribeK8sApiAbnormalEventListResponse>;
    /**
     * 查询上次任务的资产通过率汇总信息
     */
    DescribeComplianceTaskAssetSummary(req: DescribeComplianceTaskAssetSummaryRequest, cb?: (error: string, rep: DescribeComplianceTaskAssetSummaryResponse) => void): Promise<DescribeComplianceTaskAssetSummaryResponse>;
    /**
     * 运行时更新文件查杀实时监控设置
     */
    ModifyVirusMonitorSetting(req: ModifyVirusMonitorSettingRequest, cb?: (error: string, rep: ModifyVirusMonitorSettingResponse) => void): Promise<ModifyVirusMonitorSettingResponse>;
    /**
     * 查询运行访问控制策略列表信息
     */
    DescribeAccessControlRules(req: DescribeAccessControlRulesRequest, cb?: (error: string, rep: DescribeAccessControlRulesResponse) => void): Promise<DescribeAccessControlRulesResponse>;
    /**
     * 容器安全搜索查询镜像木马列表导出
     */
    DescribeAssetImageVirusListExport(req: DescribeAssetImageVirusListExportRequest, cb?: (error: string, rep: DescribeAssetImageVirusListExportResponse) => void): Promise<DescribeAssetImageVirusListExportResponse>;
    /**
     * 搜索查询容器列表
     */
    DescribeAssetContainerList(req: DescribeAssetContainerListRequest, cb?: (error: string, rep: DescribeAssetContainerListResponse) => void): Promise<DescribeAssetContainerListResponse>;
    /**
     * 添加检索模板
     */
    CreateSearchTemplate(req: CreateSearchTemplateRequest, cb?: (error: string, rep: CreateSearchTemplateResponse) => void): Promise<CreateSearchTemplateResponse>;
    /**
     * DescribePostPayDetail  查询后付费详情
     */
    DescribePostPayDetail(req: DescribePostPayDetailRequest, cb?: (error: string, rep: DescribePostPayDetailResponse) => void): Promise<DescribePostPayDetailResponse>;
    /**
     * 查询超级节点pod列表
     */
    DescribeSuperNodePodList(req: DescribeSuperNodePodListRequest, cb?: (error: string, rep: DescribeSuperNodePodListResponse) => void): Promise<DescribeSuperNodePodListResponse>;
    /**
     * 容器网络创建Yaml网络策略添加任务
     */
    AddNetworkFirewallPolicyYamlDetail(req: AddNetworkFirewallPolicyYamlDetailRequest, cb?: (error: string, rep: AddNetworkFirewallPolicyYamlDetailResponse) => void): Promise<AddNetworkFirewallPolicyYamlDetailResponse>;
    /**
     * 删除运行时反弹shell事件
     */
    DeleteReverseShellEvents(req: DeleteReverseShellEventsRequest, cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void): Promise<DeleteReverseShellEventsResponse>;
    /**
     * 查看单个镜像仓库详细信息
     */
    DescribeAssetImageRegistryRegistryDetail(req: DescribeAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRegistryDetailResponse) => void): Promise<DescribeAssetImageRegistryRegistryDetailResponse>;
    /**
     * 新增逃逸白名单
     */
    AddEscapeWhiteList(req: AddEscapeWhiteListRequest, cb?: (error: string, rep: AddEscapeWhiteListResponse) => void): Promise<AddEscapeWhiteListResponse>;
    /**
     * 创建镜像导出任务
     */
    CreateImageExportJob(req: CreateImageExportJobRequest, cb?: (error: string, rep: CreateImageExportJobResponse) => void): Promise<CreateImageExportJobResponse>;
    /**
     * 查询安全日志投递Cls配置
     */
    DescribeSecLogDeliveryClsSetting(req?: DescribeSecLogDeliveryClsSettingRequest, cb?: (error: string, rep: DescribeSecLogDeliveryClsSettingResponse) => void): Promise<DescribeSecLogDeliveryClsSettingResponse>;
    /**
     * 查询运行时文件查杀事件列表
     */
    DescribeVirusList(req: DescribeVirusListRequest, cb?: (error: string, rep: DescribeVirusListResponse) => void): Promise<DescribeVirusListResponse>;
    /**
     * 容器安全停止镜像扫描
     */
    ModifyAssetImageScanStop(req: ModifyAssetImageScanStopRequest, cb?: (error: string, rep: ModifyAssetImageScanStopResponse) => void): Promise<ModifyAssetImageScanStopResponse>;
    /**
     * 重新检测选定的资产
     */
    ScanComplianceAssets(req: ScanComplianceAssetsRequest, cb?: (error: string, rep: ScanComplianceAssetsResponse) => void): Promise<ScanComplianceAssetsResponse>;
    /**
     * 修改k8sapi异常事件状态
     */
    ModifyK8sApiAbnormalEventStatus(req: ModifyK8sApiAbnormalEventStatusRequest, cb?: (error: string, rep: ModifyK8sApiAbnormalEventStatusResponse) => void): Promise<ModifyK8sApiAbnormalEventStatusResponse>;
    /**
     * 新增漏洞扫描忽略漏洞
     */
    AddIgnoreVul(req: AddIgnoreVulRequest, cb?: (error: string, rep: AddIgnoreVulResponse) => void): Promise<AddIgnoreVulResponse>;
    /**
     * 查询所有检查项接口，返回总数和检查项列表
     */
    DescribeCheckItemList(req: DescribeCheckItemListRequest, cb?: (error: string, rep: DescribeCheckItemListResponse) => void): Promise<DescribeCheckItemListResponse>;
    /**
     * 创建系统漏洞导出任务
     */
    CreateSystemVulExportJob(req: CreateSystemVulExportJobRequest, cb?: (error: string, rep: CreateSystemVulExportJobResponse) => void): Promise<CreateSystemVulExportJobResponse>;
    /**
     * 运行时查询木马文件信息
     */
    DescribeVirusDetail(req: DescribeVirusDetailRequest, cb?: (error: string, rep: DescribeVirusDetailResponse) => void): Promise<DescribeVirusDetailResponse>;
    /**
     * 查询本地镜像漏洞列表导出
     */
    CreateVulExportJob(req: CreateVulExportJobRequest, cb?: (error: string, rep: CreateVulExportJobResponse) => void): Promise<CreateVulExportJobResponse>;
    /**
     * 查询白名单列表
     */
    DescribeComplianceWhitelistItemList(req: DescribeComplianceWhitelistItemListRequest, cb?: (error: string, rep: DescribeComplianceWhitelistItemListResponse) => void): Promise<DescribeComplianceWhitelistItemListResponse>;
    /**
     * 查询集群网络策略列表
     */
    DescribeNetworkFirewallPolicyList(req: DescribeNetworkFirewallPolicyListRequest, cb?: (error: string, rep: DescribeNetworkFirewallPolicyListResponse) => void): Promise<DescribeNetworkFirewallPolicyListResponse>;
    /**
     * 镜像仓库资产刷新
     */
    SyncAssetImageRegistryAsset(req: SyncAssetImageRegistryAssetRequest, cb?: (error: string, rep: SyncAssetImageRegistryAssetResponse) => void): Promise<SyncAssetImageRegistryAssetResponse>;
    /**
     * 创建合规检查任务，在资产级别触发重新检测时使用。
     */
    CreateComplianceTask(req: CreateComplianceTaskRequest, cb?: (error: string, rep: CreateComplianceTaskResponse) => void): Promise<CreateComplianceTaskResponse>;
    /**
     * 按照 资产 → 检测项 二层结构展示的信息。这里查询第一层 资产的通过率汇总信息。
     */
    DescribeComplianceScanFailedAssetList(req: DescribeComplianceScanFailedAssetListRequest, cb?: (error: string, rep: DescribeComplianceScanFailedAssetListResponse) => void): Promise<DescribeComplianceScanFailedAssetListResponse>;
    /**
     * 查询k8sapi 异常规则中范围列表
     */
    DescribeK8sApiAbnormalRuleScopeList(req: DescribeK8sApiAbnormalRuleScopeListRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalRuleScopeListResponse) => void): Promise<DescribeK8sApiAbnormalRuleScopeListResponse>;
    /**
     * 查询集群列表
     */
    DescribeAssetClusterList(req: DescribeAssetClusterListRequest, cb?: (error: string, rep: DescribeAssetClusterListResponse) => void): Promise<DescribeAssetClusterListResponse>;
    /**
     * 查询支持防御的漏洞列表
     */
    DescribeSupportDefenceVul(req: DescribeSupportDefenceVulRequest, cb?: (error: string, rep: DescribeSupportDefenceVulResponse) => void): Promise<DescribeSupportDefenceVulResponse>;
    /**
     * 删除运行时高危系统调用事件
     */
    DeleteRiskSyscallEvents(req: DeleteRiskSyscallEventsRequest, cb?: (error: string, rep: DeleteRiskSyscallEventsResponse) => void): Promise<DeleteRiskSyscallEventsResponse>;
    /**
     * 查询workload类型的影响范围，返回workload列表
     */
    DescribeAffectedWorkloadList(req: DescribeAffectedWorkloadListRequest, cb?: (error: string, rep: DescribeAffectedWorkloadListResponse) => void): Promise<DescribeAffectedWorkloadListResponse>;
    /**
     * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
参考的AddCompliancePolicyItemToWhitelist，除输入字段外，其它应该是一致的，如果有不同可能是定义的不对
     */
    AddCompliancePolicyAssetSetToWhitelist(req: AddCompliancePolicyAssetSetToWhitelistRequest, cb?: (error: string, rep: AddCompliancePolicyAssetSetToWhitelistResponse) => void): Promise<AddCompliancePolicyAssetSetToWhitelistResponse>;
    /**
     * 删除运行异常进程策略
     */
    DeleteAbnormalProcessRules(req: DeleteAbnormalProcessRulesRequest, cb?: (error: string, rep: DeleteAbnormalProcessRulesResponse) => void): Promise<DeleteAbnormalProcessRulesResponse>;
    /**
     * 查询漏洞详情
     */
    DescribeVulDetail(req: DescribeVulDetailRequest, cb?: (error: string, rep: DescribeVulDetailResponse) => void): Promise<DescribeVulDetailResponse>;
    /**
     * 查询导出任务管理列表
     */
    DescribeExportJobManageList(req: DescribeExportJobManageListRequest, cb?: (error: string, rep: DescribeExportJobManageListResponse) => void): Promise<DescribeExportJobManageListResponse>;
    /**
     * 创建漏洞扫描任务
     */
    CreateVulScanTask(req: CreateVulScanTaskRequest, cb?: (error: string, rep: CreateVulScanTaskResponse) => void): Promise<CreateVulScanTaskResponse>;
    /**
     * 查询集群策略列表
     */
    DescribeNetworkFirewallClusterList(req: DescribeNetworkFirewallClusterListRequest, cb?: (error: string, rep: DescribeNetworkFirewallClusterListResponse) => void): Promise<DescribeNetworkFirewallClusterListResponse>;
    /**
     * 停止漏洞扫描任务
     */
    StopVulScanTask(req: StopVulScanTaskRequest, cb?: (error: string, rep: StopVulScanTaskResponse) => void): Promise<StopVulScanTaskResponse>;
    /**
     * 镜像仓库敏感信息列表导出
     */
    DescribeAssetImageRegistryRiskListExport(req: DescribeAssetImageRegistryRiskListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRiskListExportResponse) => void): Promise<DescribeAssetImageRegistryRiskListExportResponse>;
    /**
     * 运行时文件扫描超时设置
     */
    ModifyVirusScanTimeoutSetting(req: ModifyVirusScanTimeoutSettingRequest, cb?: (error: string, rep: ModifyVirusScanTimeoutSettingResponse) => void): Promise<ModifyVirusScanTimeoutSettingResponse>;
    /**
     * 运行时文件查杀一键扫描
     */
    CreateVirusScanTask(req: CreateVirusScanTaskRequest, cb?: (error: string, rep: CreateVirusScanTaskResponse) => void): Promise<CreateVirusScanTaskResponse>;
    /**
     * 查询漏洞防御的主机列表
     */
    DescribeVulDefenceHost(req: DescribeVulDefenceHostRequest, cb?: (error: string, rep: DescribeVulDefenceHostResponse) => void): Promise<DescribeVulDefenceHostResponse>;
    /**
     * 查询漏洞扫描忽略的本地镜像列表
     */
    DescribeVulIgnoreLocalImageList(req: DescribeVulIgnoreLocalImageListRequest, cb?: (error: string, rep: DescribeVulIgnoreLocalImageListResponse) => void): Promise<DescribeVulIgnoreLocalImageListResponse>;
    /**
     * DescribeEscapeEventDetail  查询容器逃逸事件详情
     */
    DescribeEscapeEventDetail(req: DescribeEscapeEventDetailRequest, cb?: (error: string, rep: DescribeEscapeEventDetailResponse) => void): Promise<DescribeEscapeEventDetailResponse>;
    /**
     * 修改高危系统调用事件的状态信息
     */
    ModifyRiskSyscallStatus(req: ModifyRiskSyscallStatusRequest, cb?: (error: string, rep: ModifyRiskSyscallStatusResponse) => void): Promise<ModifyRiskSyscallStatusResponse>;
    /**
     * 创建恶意请求事件导出任务
     */
    CreateRiskDnsEventExportJob(req: CreateRiskDnsEventExportJobRequest, cb?: (error: string, rep: CreateRiskDnsEventExportJobResponse) => void): Promise<CreateRiskDnsEventExportJobResponse>;
    /**
     * 查询漏洞防御攻击事件趋势
     */
    DescribeVulDefenceEventTendency(req: DescribeVulDefenceEventTendencyRequest, cb?: (error: string, rep: DescribeVulDefenceEventTendencyResponse) => void): Promise<DescribeVulDefenceEventTendencyResponse>;
    /**
     * 查询逃逸白名单
     */
    DescribeEscapeWhiteList(req: DescribeEscapeWhiteListRequest, cb?: (error: string, rep: DescribeEscapeWhiteListResponse) => void): Promise<DescribeEscapeWhiteListResponse>;
    /**
     * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
     */
    ScanCompliancePolicyItems(req: ScanCompliancePolicyItemsRequest, cb?: (error: string, rep: ScanCompliancePolicyItemsResponse) => void): Promise<ScanCompliancePolicyItemsResponse>;
    /**
     * 删除运行时反弹shell白名单
     */
    DeleteReverseShellWhiteLists(req: DeleteReverseShellWhiteListsRequest, cb?: (error: string, rep: DeleteReverseShellWhiteListsResponse) => void): Promise<DeleteReverseShellWhiteListsResponse>;
    /**
     * 查询某个资产的详情
     */
    DescribeComplianceAssetDetailInfo(req: DescribeComplianceAssetDetailInfoRequest, cb?: (error: string, rep: DescribeComplianceAssetDetailInfoResponse) => void): Promise<DescribeComplianceAssetDetailInfoResponse>;
    /**
     * 查询运行时访问控制策略详细信息
     */
    DescribeAccessControlRuleDetail(req: DescribeAccessControlRuleDetailRequest, cb?: (error: string, rep: DescribeAccessControlRuleDetailResponse) => void): Promise<DescribeAccessControlRuleDetailResponse>;
    /**
     * 容器网络更新Yaml网络策略并发布任务
     */
    UpdateAndPublishNetworkFirewallPolicyYamlDetail(req: UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest, cb?: (error: string, rep: UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse) => void): Promise<UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse>;
    /**
     * 批量授权镜像扫描V2.0
     */
    ModifyImageAuthorized(req: ModifyImageAuthorizedRequest, cb?: (error: string, rep: ModifyImageAuthorizedResponse) => void): Promise<ModifyImageAuthorizedResponse>;
    /**
     * 修改异常进程事件的状态信息
     */
    ModifyAbnormalProcessStatus(req: ModifyAbnormalProcessStatusRequest, cb?: (error: string, rep: ModifyAbnormalProcessStatusResponse) => void): Promise<ModifyAbnormalProcessStatusResponse>;
    /**
     * 创建一个导出安全合规信息的任务
     */
    CreateExportComplianceStatusListJob(req: CreateExportComplianceStatusListJobRequest, cb?: (error: string, rep: CreateExportComplianceStatusListJobResponse) => void): Promise<CreateExportComplianceStatusListJobResponse>;
    /**
     * 容器安全搜索查询镜像简略信息列表
     */
    DescribeAssetImageSimpleList(req: DescribeAssetImageSimpleListRequest, cb?: (error: string, rep: DescribeAssetImageSimpleListResponse) => void): Promise<DescribeAssetImageSimpleListResponse>;
    /**
     * DescribeImageSimpleList 查询全部镜像列表
     */
    DescribeImageSimpleList(req: DescribeImageSimpleListRequest, cb?: (error: string, rep: DescribeImageSimpleListResponse) => void): Promise<DescribeImageSimpleListResponse>;
    /**
     * 修改运行时访问控制事件状态信息
     */
    ModifyAccessControlStatus(req: ModifyAccessControlStatusRequest, cb?: (error: string, rep: ModifyAccessControlStatusResponse) => void): Promise<ModifyAccessControlStatusResponse>;
    /**
     * 创建逃逸白名单导出任务
     */
    CreateEscapeWhiteListExportJob(req: CreateEscapeWhiteListExportJobRequest, cb?: (error: string, rep: CreateEscapeWhiteListExportJobResponse) => void): Promise<CreateEscapeWhiteListExportJobResponse>;
    /**
     * DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息
     */
    DescribeEscapeRuleInfo(req?: DescribeEscapeRuleInfoRequest, cb?: (error: string, rep: DescribeEscapeRuleInfoResponse) => void): Promise<DescribeEscapeRuleInfoResponse>;
    /**
     * 容器安全查询镜像风险列表
     */
    DescribeAssetImageRiskList(req: DescribeAssetImageRiskListRequest, cb?: (error: string, rep: DescribeAssetImageRiskListResponse) => void): Promise<DescribeAssetImageRiskListResponse>;
    /**
     * 容器安全查询镜像关联主机
     */
    DescribeAssetImageHostList(req: DescribeAssetImageHostListRequest, cb?: (error: string, rep: DescribeAssetImageHostListResponse) => void): Promise<DescribeAssetImageHostListResponse>;
    /**
     * 查询用户集群资产总览
     */
    DescribeClusterSummary(req?: DescribeClusterSummaryRequest, cb?: (error: string, rep: DescribeClusterSummaryResponse) => void): Promise<DescribeClusterSummaryResponse>;
    /**
     * 查询漏洞防御事件详情
     */
    DescribeVulDefenceEventDetail(req: DescribeVulDefenceEventDetailRequest, cb?: (error: string, rep: DescribeVulDefenceEventDetailResponse) => void): Promise<DescribeVulDefenceEventDetailResponse>;
    /**
     * DescribeEscapeSafeState 查询容器逃逸安全状态
     */
    DescribeEscapeSafeState(req?: DescribeEscapeSafeStateRequest, cb?: (error: string, rep: DescribeEscapeSafeStateResponse) => void): Promise<DescribeEscapeSafeStateResponse>;
    /**
     * 运行时查询文件查杀任务列表
     */
    DescribeVirusTaskList(req: DescribeVirusTaskListRequest, cb?: (error: string, rep: DescribeVirusTaskListResponse) => void): Promise<DescribeVirusTaskListResponse>;
    /**
     * 获取历史搜索记录
     */
    DescribeSearchLogs(req?: DescribeSearchLogsRequest, cb?: (error: string, rep: DescribeSearchLogsResponse) => void): Promise<DescribeSearchLogsResponse>;
    /**
     * 新增单个镜像仓库详细信息
     */
    AddAssetImageRegistryRegistryDetail(req: AddAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: AddAssetImageRegistryRegistryDetailResponse) => void): Promise<AddAssetImageRegistryRegistryDetailResponse>;
    /**
     * 容器安全搜索查询端口占用列表
     */
    DescribeAssetPortList(req: DescribeAssetPortListRequest, cb?: (error: string, rep: DescribeAssetPortListResponse) => void): Promise<DescribeAssetPortListResponse>;
    /**
     * 新增或编辑本地镜像自动授权规则
     */
    AddEditImageAutoAuthorizedRule(req: AddEditImageAutoAuthorizedRuleRequest, cb?: (error: string, rep: AddEditImageAutoAuthorizedRuleResponse) => void): Promise<AddEditImageAutoAuthorizedRuleResponse>;
    /**
     * 查询容器安全概览信息
     */
    DescribeTcssSummary(req?: DescribeTcssSummaryRequest, cb?: (error: string, rep: DescribeTcssSummaryResponse) => void): Promise<DescribeTcssSummaryResponse>;
    /**
     * 查询本地镜像风险概览
     */
    DescribeImageRiskSummary(req?: DescribeImageRiskSummaryRequest, cb?: (error: string, rep: DescribeImageRiskSummaryResponse) => void): Promise<DescribeImageRiskSummaryResponse>;
    /**
     * 查询漏洞影响的仓库镜像列表
     */
    DescribeVulRegistryImageList(req: DescribeVulRegistryImageListRequest, cb?: (error: string, rep: DescribeVulRegistryImageListResponse) => void): Promise<DescribeVulRegistryImageListResponse>;
    /**
     * 查询应急漏洞列表
     */
    DescribeEmergencyVulList(req: DescribeEmergencyVulListRequest, cb?: (error: string, rep: DescribeEmergencyVulListResponse) => void): Promise<DescribeEmergencyVulListResponse>;
    /**
     * 查询漏洞各威胁等级统计数
     */
    DescribeVulLevelSummary(req: DescribeVulLevelSummaryRequest, cb?: (error: string, rep: DescribeVulLevelSummaryResponse) => void): Promise<DescribeVulLevelSummaryResponse>;
    /**
     * 查询集群网络空间标签列表
     */
    DescribeNetworkFirewallNamespaceLabelList(req: DescribeNetworkFirewallNamespaceLabelListRequest, cb?: (error: string, rep: DescribeNetworkFirewallNamespaceLabelListResponse) => void): Promise<DescribeNetworkFirewallNamespaceLabelListResponse>;
    /**
     * 修改木马自动隔离样本开关
     */
    ModifyVirusAutoIsolateExampleSwitch(req: ModifyVirusAutoIsolateExampleSwitchRequest, cb?: (error: string, rep: ModifyVirusAutoIsolateExampleSwitchResponse) => void): Promise<ModifyVirusAutoIsolateExampleSwitchResponse>;
    /**
     * 容器网络查询资产任务进度
     */
    DescribeNetworkFirewallClusterRefreshStatus(req: DescribeNetworkFirewallClusterRefreshStatusRequest, cb?: (error: string, rep: DescribeNetworkFirewallClusterRefreshStatusResponse) => void): Promise<DescribeNetworkFirewallClusterRefreshStatusResponse>;
    /**
     * 运行时查询文件查杀实时监控设置
     */
    DescribeVirusMonitorSetting(req?: DescribeVirusMonitorSettingRequest, cb?: (error: string, rep: DescribeVirusMonitorSettingResponse) => void): Promise<DescribeVirusMonitorSettingResponse>;
    /**
     * 查询木马自动隔离设置
     */
    DescribeVirusAutoIsolateSetting(req?: DescribeVirusAutoIsolateSettingRequest, cb?: (error: string, rep: DescribeVirusAutoIsolateSettingResponse) => void): Promise<DescribeVirusAutoIsolateSettingResponse>;
    /**
     * 查询待处理逃逸事件趋势
     */
    DescribeEscapeEventTendency(req: DescribeEscapeEventTendencyRequest, cb?: (error: string, rep: DescribeEscapeEventTendencyResponse) => void): Promise<DescribeEscapeEventTendencyResponse>;
    /**
     * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
     */
    ModifyCompliancePeriodTask(req: ModifyCompliancePeriodTaskRequest, cb?: (error: string, rep: ModifyCompliancePeriodTaskResponse) => void): Promise<ModifyCompliancePeriodTaskResponse>;
    /**
     * 查询安全日志清理设置详情
     */
    DescribeSecLogCleanSettingInfo(req?: DescribeSecLogCleanSettingInfoRequest, cb?: (error: string, rep: DescribeSecLogCleanSettingInfoResponse) => void): Promise<DescribeSecLogCleanSettingInfoResponse>;
    /**
     * 查询系统漏洞列表
     */
    DescribeSystemVulList(req: DescribeSystemVulListRequest, cb?: (error: string, rep: DescribeSystemVulListResponse) => void): Promise<DescribeSystemVulListResponse>;
    /**
     * 查询漏洞扫描任务的本地镜像列表
     */
    DescribeVulScanLocalImageList(req: DescribeVulScanLocalImageListRequest, cb?: (error: string, rep: DescribeVulScanLocalImageListResponse) => void): Promise<DescribeVulScanLocalImageListResponse>;
    /**
     * 运行时停止木马查杀任务
     */
    StopVirusScanTask(req: StopVirusScanTaskRequest, cb?: (error: string, rep: StopVirusScanTaskResponse) => void): Promise<StopVirusScanTaskResponse>;
    /**
     * 添加编辑运行时异常进程策略
     */
    AddEditAbnormalProcessRule(req: AddEditAbnormalProcessRuleRequest, cb?: (error: string, rep: AddEditAbnormalProcessRuleResponse) => void): Promise<AddEditAbnormalProcessRuleResponse>;
    /**
     * 修改漏洞防御事件状态
     */
    ModifyVulDefenceEventStatus(req: ModifyVulDefenceEventStatusRequest, cb?: (error: string, rep: ModifyVulDefenceEventStatusResponse) => void): Promise<ModifyVulDefenceEventStatusResponse>;
    /**
     * 重置安全日志主题设置
     */
    ResetSecLogTopicConfig(req: ResetSecLogTopicConfigRequest, cb?: (error: string, rep: ResetSecLogTopicConfigResponse) => void): Promise<ResetSecLogTopicConfigResponse>;
    /**
     * 运行时文件查杀重新检测
     */
    CreateVirusScanAgain(req: CreateVirusScanAgainRequest, cb?: (error: string, rep: CreateVirusScanAgainResponse) => void): Promise<CreateVirusScanAgainResponse>;
    /**
     * 查询集群策略审计列表
     */
    DescribeNetworkFirewallAuditRecord(req: DescribeNetworkFirewallAuditRecordRequest, cb?: (error: string, rep: DescribeNetworkFirewallAuditRecordResponse) => void): Promise<DescribeNetworkFirewallAuditRecordResponse>;
    /**
     * 修改安全日志接入状态
     */
    ModifySecLogJoinState(req: ModifySecLogJoinStateRequest, cb?: (error: string, rep: ModifySecLogJoinStateResponse) => void): Promise<ModifySecLogJoinStateResponse>;
    /**
     * 查询容器安全未处理事件信息
     */
    DescribeContainerSecEventSummary(req?: DescribeContainerSecEventSummaryRequest, cb?: (error: string, rep: DescribeContainerSecEventSummaryResponse) => void): Promise<DescribeContainerSecEventSummaryResponse>;
    /**
     * 查询镜像自动授权任务列表
     */
    DescribeImageAutoAuthorizedTaskList(req: DescribeImageAutoAuthorizedTaskListRequest, cb?: (error: string, rep: DescribeImageAutoAuthorizedTaskListResponse) => void): Promise<DescribeImageAutoAuthorizedTaskListResponse>;
    /**
     * 查询最近一次任务发现的检测项的汇总信息列表，按照 检测项 → 资产 的两级层次展开。
     */
    DescribeComplianceTaskPolicyItemSummaryList(req: DescribeComplianceTaskPolicyItemSummaryListRequest, cb?: (error: string, rep: DescribeComplianceTaskPolicyItemSummaryListResponse) => void): Promise<DescribeComplianceTaskPolicyItemSummaryListResponse>;
    /**
     * 容器安全搜索查询镜像列表
     */
    DescribeAssetImageList(req: DescribeAssetImageListRequest, cb?: (error: string, rep: DescribeAssetImageListResponse) => void): Promise<DescribeAssetImageListResponse>;
    /**
     * 删除k8sapi异常事件规则
     */
    DeleteK8sApiAbnormalRule(req: DeleteK8sApiAbnormalRuleRequest, cb?: (error: string, rep: DeleteK8sApiAbnormalRuleResponse) => void): Promise<DeleteK8sApiAbnormalRuleResponse>;
    /**
     * 查询运行时反弹shell事件列表信息
     */
    DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse>;
    /**
     * 创建异常进程事件导出异步任务
     */
    CreateProcessEventsExportJob(req: CreateProcessEventsExportJobRequest, cb?: (error: string, rep: CreateProcessEventsExportJobResponse) => void): Promise<CreateProcessEventsExportJobResponse>;
    /**
     * 容器网络集群查看策略详情
     */
    DescribeNetworkFirewallPolicyDetail(req: DescribeNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: DescribeNetworkFirewallPolicyDetailResponse) => void): Promise<DescribeNetworkFirewallPolicyDetailResponse>;
    /**
     * 镜像仓库创建镜像扫描任务
     */
    CreateAssetImageRegistryScanTask(req: CreateAssetImageRegistryScanTaskRequest, cb?: (error: string, rep: CreateAssetImageRegistryScanTaskResponse) => void): Promise<CreateAssetImageRegistryScanTaskResponse>;
    /**
     * 查询安全日志告警信息
     */
    DescribeSecLogAlertMsg(req: DescribeSecLogAlertMsgRequest, cb?: (error: string, rep: DescribeSecLogAlertMsgResponse) => void): Promise<DescribeSecLogAlertMsgResponse>;
    /**
     * 查询未完成的刷新资产任务信息
     */
    DescribeUnfinishRefreshTask(req?: DescribeUnfinishRefreshTaskRequest, cb?: (error: string, rep: DescribeUnfinishRefreshTaskResponse) => void): Promise<DescribeUnfinishRefreshTaskResponse>;
    /**
     * 添加编辑运行时高危系统调用白名单
     */
    AddEditRiskSyscallWhiteList(req: AddEditRiskSyscallWhiteListRequest, cb?: (error: string, rep: AddEditRiskSyscallWhiteListResponse) => void): Promise<AddEditRiskSyscallWhiteListResponse>;
    /**
     * 镜像仓库查询一键镜像扫描状态
     */
    DescribeAssetImageRegistryScanStatusOneKey(req: DescribeAssetImageRegistryScanStatusOneKeyRequest, cb?: (error: string, rep: DescribeAssetImageRegistryScanStatusOneKeyResponse) => void): Promise<DescribeAssetImageRegistryScanStatusOneKeyResponse>;
    /**
     * 容器网络创建网络策略添加并发布任务
     */
    AddAndPublishNetworkFirewallPolicyDetail(req: AddAndPublishNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: AddAndPublishNetworkFirewallPolicyDetailResponse) => void): Promise<AddAndPublishNetworkFirewallPolicyDetailResponse>;
    /**
     * 容器安全搜索查询镜像漏洞列表导出
     */
    DescribeAssetImageVulListExport(req: DescribeAssetImageVulListExportRequest, cb?: (error: string, rep: DescribeAssetImageVulListExportResponse) => void): Promise<DescribeAssetImageVulListExportResponse>;
    /**
     * 镜像仓库镜像仓库列表
     */
    DescribeAssetImageRegistryList(req: DescribeAssetImageRegistryListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryListResponse) => void): Promise<DescribeAssetImageRegistryListResponse>;
    /**
     * 容器安全搜索查询进程列表
     */
    DescribeAssetProcessList(req: DescribeAssetProcessListRequest, cb?: (error: string, rep: DescribeAssetProcessListResponse) => void): Promise<DescribeAssetProcessListResponse>;
    /**
     * 查询集群网络pod标签
     */
    DescribeNetworkFirewallPodLabelsList(req: DescribeNetworkFirewallPodLabelsListRequest, cb?: (error: string, rep: DescribeNetworkFirewallPodLabelsListResponse) => void): Promise<DescribeNetworkFirewallPodLabelsListResponse>;
    /**
     * 查询k8sapi异常事件趋势
     */
    DescribeK8sApiAbnormalTendency(req: DescribeK8sApiAbnormalTendencyRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalTendencyResponse) => void): Promise<DescribeK8sApiAbnormalTendencyResponse>;
    /**
     * 查询运行时异常进程事件列表信息
     */
    DescribeAbnormalProcessEvents(req: DescribeAbnormalProcessEventsRequest, cb?: (error: string, rep: DescribeAbnormalProcessEventsResponse) => void): Promise<DescribeAbnormalProcessEventsResponse>;
    /**
     * 更新单个镜像仓库详细信息
     */
    UpdateAssetImageRegistryRegistryDetail(req: UpdateAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: UpdateAssetImageRegistryRegistryDetailResponse) => void): Promise<UpdateAssetImageRegistryRegistryDetailResponse>;
    /**
     * DescribeProVersionInfo  查询专业版需购买信息
     */
    DescribeProVersionInfo(req?: DescribeProVersionInfoRequest, cb?: (error: string, rep: DescribeProVersionInfoResponse) => void): Promise<DescribeProVersionInfoResponse>;
    /**
     * 查询某资产下的检测项列表
     */
    DescribeComplianceAssetPolicyItemList(req: DescribeComplianceAssetPolicyItemListRequest, cb?: (error: string, rep: DescribeComplianceAssetPolicyItemListResponse) => void): Promise<DescribeComplianceAssetPolicyItemListResponse>;
    /**
     * 查询集群节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 获取ES查询文档列表
     */
    DescribeESHits(req: DescribeESHitsRequest, cb?: (error: string, rep: DescribeESHitsResponse) => void): Promise<DescribeESHitsResponse>;
    /**
     * 查询漏洞防御设置信息
     */
    DescribeVulDefenceSetting(req?: DescribeVulDefenceSettingRequest, cb?: (error: string, rep: DescribeVulDefenceSettingResponse) => void): Promise<DescribeVulDefenceSettingResponse>;
    /**
     * 查询资产同步最近时间
     */
    DescribeAssetSyncLastTime(req?: DescribeAssetSyncLastTimeRequest, cb?: (error: string, rep: DescribeAssetSyncLastTimeResponse) => void): Promise<DescribeAssetSyncLastTimeResponse>;
    /**
     * 查询k8sapi异常请求规则详情
     */
    DescribeK8sApiAbnormalRuleInfo(req: DescribeK8sApiAbnormalRuleInfoRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalRuleInfoResponse) => void): Promise<DescribeK8sApiAbnormalRuleInfoResponse>;
    /**
     * 查询恶意请求事件详情
     */
    DescribeRiskDnsEventDetail(req: DescribeRiskDnsEventDetailRequest, cb?: (error: string, rep: DescribeRiskDnsEventDetailResponse) => void): Promise<DescribeRiskDnsEventDetailResponse>;
    /**
     * 产品重构优化，这几个接口已经没有调用了

从白名单中删除将指定的检测项。
     */
    DeleteCompliancePolicyItemFromWhitelist(req: DeleteCompliancePolicyItemFromWhitelistRequest, cb?: (error: string, rep: DeleteCompliancePolicyItemFromWhitelistResponse) => void): Promise<DeleteCompliancePolicyItemFromWhitelistResponse>;
    /**
     * 运行时查询文件查杀设置
     */
    DescribeVirusScanSetting(req?: DescribeVirusScanSettingRequest, cb?: (error: string, rep: DescribeVirusScanSettingResponse) => void): Promise<DescribeVirusScanSettingResponse>;
    /**
     * 查询促销活动
     */
    DescribePromotionActivity(req: DescribePromotionActivityRequest, cb?: (error: string, rep: DescribePromotionActivityResponse) => void): Promise<DescribePromotionActivityResponse>;
    /**
     * 查询某类资产的列表
     */
    DescribeComplianceAssetList(req: DescribeComplianceAssetListRequest, cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void): Promise<DescribeComplianceAssetListResponse>;
    /**
     * 按照 检测项 → 资产 的两级层次展开的第二层级：资产层级。
     */
    DescribeCompliancePolicyItemAffectedAssetList(req: DescribeCompliancePolicyItemAffectedAssetListRequest, cb?: (error: string, rep: DescribeCompliancePolicyItemAffectedAssetListResponse) => void): Promise<DescribeCompliancePolicyItemAffectedAssetListResponse>;
    /**
     * 获取日志检索容量使用统计
     */
    DescribeLogStorageStatistic(req?: DescribeLogStorageStatisticRequest, cb?: (error: string, rep: DescribeLogStorageStatisticResponse) => void): Promise<DescribeLogStorageStatisticResponse>;
    /**
     * 容器安全主机资产刷新
     */
    ModifyAsset(req: ModifyAssetRequest, cb?: (error: string, rep: ModifyAssetResponse) => void): Promise<ModifyAssetResponse>;
    /**
     * CreateOrModifyPostPayCores  创建或者编辑弹性计费上限
     */
    CreateOrModifyPostPayCores(req: CreateOrModifyPostPayCoresRequest, cb?: (error: string, rep: CreateOrModifyPostPayCoresResponse) => void): Promise<CreateOrModifyPostPayCoresResponse>;
    /**
     * 修改木马自动隔离设置
     */
    ModifyVirusAutoIsolateSetting(req: ModifyVirusAutoIsolateSettingRequest, cb?: (error: string, rep: ModifyVirusAutoIsolateSettingResponse) => void): Promise<ModifyVirusAutoIsolateSettingResponse>;
    /**
     * 查询安全日志KafkaUIN
     */
    DescribeSecLogKafkaUIN(req?: DescribeSecLogKafkaUINRequest, cb?: (error: string, rep: DescribeSecLogKafkaUINResponse) => void): Promise<DescribeSecLogKafkaUINResponse>;
    /**
     * 编辑本地镜像自动授权开关
     */
    SwitchImageAutoAuthorizedRule(req: SwitchImageAutoAuthorizedRuleRequest, cb?: (error: string, rep: SwitchImageAutoAuthorizedRuleResponse) => void): Promise<SwitchImageAutoAuthorizedRuleResponse>;
    /**
     * 查询运行时异常进程事件详细信息
     */
    DescribeAbnormalProcessDetail(req: DescribeAbnormalProcessDetailRequest, cb?: (error: string, rep: DescribeAbnormalProcessDetailResponse) => void): Promise<DescribeAbnormalProcessDetailResponse>;
    /**
     * RenewImageAuthorizeState   授权镜像扫描
     */
    RenewImageAuthorizeState(req: RenewImageAuthorizeStateRequest, cb?: (error: string, rep: RenewImageAuthorizeStateResponse) => void): Promise<RenewImageAuthorizeStateResponse>;
    /**
     * 获取受影响的集群数量，返回数量
     */
    DescribeAffectedClusterCount(req?: DescribeAffectedClusterCountRequest, cb?: (error: string, rep: DescribeAffectedClusterCountResponse) => void): Promise<DescribeAffectedClusterCountResponse>;
    /**
     * 创建受漏洞影响的容器导出任务
     */
    CreateVulContainerExportJob(req: CreateVulContainerExportJobRequest, cb?: (error: string, rep: CreateVulContainerExportJobResponse) => void): Promise<CreateVulContainerExportJobResponse>;
    /**
     * 查询节点类型的影响范围，返回节点列表
     */
    DescribeAffectedNodeList(req: DescribeAffectedNodeListRequest, cb?: (error: string, rep: DescribeAffectedNodeListResponse) => void): Promise<DescribeAffectedNodeListResponse>;
    /**
     * 查询运行时访问控制事件列表导出
     */
    DescribeAccessControlEventsExport(req: DescribeAccessControlEventsExportRequest, cb?: (error: string, rep: DescribeAccessControlEventsExportResponse) => void): Promise<DescribeAccessControlEventsExportResponse>;
    /**
     * 查询木马事件趋势
     */
    DescribeVirusEventTendency(req: DescribeVirusEventTendencyRequest, cb?: (error: string, rep: DescribeVirusEventTendencyResponse) => void): Promise<DescribeVirusEventTendencyResponse>;
    /**
     * 查询镜像自动授权结果列表
     */
    DescribeImageAutoAuthorizedLogList(req: DescribeImageAutoAuthorizedLogListRequest, cb?: (error: string, rep: DescribeImageAutoAuthorizedLogListResponse) => void): Promise<DescribeImageAutoAuthorizedLogListResponse>;
    /**
     * 查询应急漏洞各威胁等级统计镜像数
     */
    DescribeVulLevelImageSummary(req?: DescribeVulLevelImageSummaryRequest, cb?: (error: string, rep: DescribeVulLevelImageSummaryResponse) => void): Promise<DescribeVulLevelImageSummaryResponse>;
    /**
     * 修改反弹shell事件的状态信息
     */
    ModifyReverseShellStatus(req: ModifyReverseShellStatusRequest, cb?: (error: string, rep: ModifyReverseShellStatusResponse) => void): Promise<ModifyReverseShellStatusResponse>;
    /**
     * 查询安全日志接入列表
     */
    DescribeSecLogJoinTypeList(req?: DescribeSecLogJoinTypeListRequest, cb?: (error: string, rep: DescribeSecLogJoinTypeListResponse) => void): Promise<DescribeSecLogJoinTypeListResponse>;
    /**
     * 添加编辑告警策略
     */
    AddEditWarningRules(req: AddEditWarningRulesRequest, cb?: (error: string, rep: AddEditWarningRulesResponse) => void): Promise<AddEditWarningRulesResponse>;
    /**
     * 获取用户当前灰度配置
     */
    DescribeABTestConfig(req: DescribeABTestConfigRequest, cb?: (error: string, rep: DescribeABTestConfigResponse) => void): Promise<DescribeABTestConfigResponse>;
    /**
     * 容器安全搜索查询镜像风险列表导出
     */
    DescribeAssetImageRiskListExport(req: DescribeAssetImageRiskListExportRequest, cb?: (error: string, rep: DescribeAssetImageRiskListExportResponse) => void): Promise<DescribeAssetImageRiskListExportResponse>;
    /**
     * 修改安全日志清理设置信息
     */
    ModifySecLogCleanSettingInfo(req: ModifySecLogCleanSettingInfoRequest, cb?: (error: string, rep: ModifySecLogCleanSettingInfoResponse) => void): Promise<ModifySecLogCleanSettingInfoResponse>;
    /**
     * 查询导出任务下载URL
     */
    DescribeExportJobDownloadURL(req: DescribeExportJobDownloadURLRequest, cb?: (error: string, rep: DescribeExportJobDownloadURLResponse) => void): Promise<DescribeExportJobDownloadURLResponse>;
    /**
     * 镜像仓库查询镜像漏洞列表
     */
    DescribeAssetImageRegistryVulList(req: DescribeAssetImageRegistryVulListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVulListResponse) => void): Promise<DescribeAssetImageRegistryVulListResponse>;
    /**
     * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
     */
    DescribeRiskList(req: DescribeRiskListRequest, cb?: (error: string, rep: DescribeRiskListResponse) => void): Promise<DescribeRiskListResponse>;
    /**
     * DescribeEscapeEventInfo 查询容器逃逸事件列表
     */
    DescribeEscapeEventInfo(req: DescribeEscapeEventInfoRequest, cb?: (error: string, rep: DescribeEscapeEventInfoResponse) => void): Promise<DescribeEscapeEventInfoResponse>;
    /**
     * 查询漏洞风险统计概览
     */
    DescribeVulSummary(req: DescribeVulSummaryRequest, cb?: (error: string, rep: DescribeVulSummaryResponse) => void): Promise<DescribeVulSummaryResponse>;
    /**
     * 查询自动授权规则授权范围主机信息
     */
    DescribeAutoAuthorizedRuleHost(req: DescribeAutoAuthorizedRuleHostRequest, cb?: (error: string, rep: DescribeAutoAuthorizedRuleHostResponse) => void): Promise<DescribeAutoAuthorizedRuleHostResponse>;
    /**
     * 容器网络创建Yaml网络策略并发布任务
     */
    AddAndPublishNetworkFirewallPolicyYamlDetail(req: AddAndPublishNetworkFirewallPolicyYamlDetailRequest, cb?: (error: string, rep: AddAndPublishNetworkFirewallPolicyYamlDetailResponse) => void): Promise<AddAndPublishNetworkFirewallPolicyYamlDetailResponse>;
    /**
     * 统计容器逃逸各事件类型和待处理事件数
     */
    DescribeEscapeEventTypeSummary(req?: DescribeEscapeEventTypeSummaryRequest, cb?: (error: string, rep: DescribeEscapeEventTypeSummaryResponse) => void): Promise<DescribeEscapeEventTypeSummaryResponse>;
    /**
     * 创建逃逸事件导出异步任务
     */
    CreateEscapeEventsExportJob(req: CreateEscapeEventsExportJobRequest, cb?: (error: string, rep: CreateEscapeEventsExportJobResponse) => void): Promise<CreateEscapeEventsExportJobResponse>;
    /**
     * 容器安全查询镜像漏洞列表
     */
    DescribeAssetImageVulList(req: DescribeAssetImageVulListRequest, cb?: (error: string, rep: DescribeAssetImageVulListResponse) => void): Promise<DescribeAssetImageVulListResponse>;
    /**
     * 查询漏洞Top排名列表
     */
    DescribeVulTopRanking(req: DescribeVulTopRankingRequest, cb?: (error: string, rep: DescribeVulTopRankingResponse) => void): Promise<DescribeVulTopRankingResponse>;
    /**
     * 获取告警策略列表
     */
    DescribeWarningRules(req?: DescribeWarningRulesRequest, cb?: (error: string, rep: DescribeWarningRulesResponse) => void): Promise<DescribeWarningRulesResponse>;
    /**
     * 获取快速检索列表
     */
    DescribeSearchTemplates(req: DescribeSearchTemplatesRequest, cb?: (error: string, rep: DescribeSearchTemplatesResponse) => void): Promise<DescribeSearchTemplatesResponse>;
    /**
     * 将指定的检测项添加到白名单中，不显示未通过结果。
     */
    AddCompliancePolicyItemToWhitelist(req: AddCompliancePolicyItemToWhitelistRequest, cb?: (error: string, rep: AddCompliancePolicyItemToWhitelistResponse) => void): Promise<AddCompliancePolicyItemToWhitelistResponse>;
    /**
     * 为客户初始化合规基线的使用环境，创建必要的数据和选项。
     */
    InitializeUserComplianceEnvironment(req?: InitializeUserComplianceEnvironmentRequest, cb?: (error: string, rep: InitializeUserComplianceEnvironmentResponse) => void): Promise<InitializeUserComplianceEnvironmentResponse>;
    /**
     * 安全概览和集群安全页进入调用该接口，查询用户集群相关信息。
     */
    DescribeUserCluster(req: DescribeUserClusterRequest, cb?: (error: string, rep: DescribeUserClusterResponse) => void): Promise<DescribeUserClusterResponse>;
    /**
     * 卸载Agent客户端
     */
    DeleteMachine(req: DeleteMachineRequest, cb?: (error: string, rep: DeleteMachineResponse) => void): Promise<DeleteMachineResponse>;
    /**
     * 创建主机列表导出任务
     */
    CreateHostExportJob(req: CreateHostExportJobRequest, cb?: (error: string, rep: CreateHostExportJobResponse) => void): Promise<CreateHostExportJobResponse>;
    /**
     * 开通容器安全服务试用
     */
    OpenTcssTrial(req?: OpenTcssTrialRequest, cb?: (error: string, rep: OpenTcssTrialResponse) => void): Promise<OpenTcssTrialResponse>;
    /**
     * 查询运行时异常进程策略列表信息
     */
    DescribeAbnormalProcessRules(req: DescribeAbnormalProcessRulesRequest, cb?: (error: string, rep: DescribeAbnormalProcessRulesResponse) => void): Promise<DescribeAbnormalProcessRulesResponse>;
    /**
     * 查询检查报告
     */
    DescribeInspectionReport(req?: DescribeInspectionReportRequest, cb?: (error: string, rep: DescribeInspectionReportResponse) => void): Promise<DescribeInspectionReportResponse>;
    /**
     * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
     */
    ScanComplianceAssetsByPolicyItem(req: ScanComplianceAssetsByPolicyItemRequest, cb?: (error: string, rep: ScanComplianceAssetsByPolicyItemResponse) => void): Promise<ScanComplianceAssetsByPolicyItemResponse>;
    /**
     * 删除逃逸白名单
     */
    DeleteEscapeWhiteList(req: DeleteEscapeWhiteListRequest, cb?: (error: string, rep: DeleteEscapeWhiteListResponse) => void): Promise<DeleteEscapeWhiteListResponse>;
    /**
     * 容器网络创建网络策略发布任务
     */
    CreateNetworkFirewallPublish(req: CreateNetworkFirewallPublishRequest, cb?: (error: string, rep: CreateNetworkFirewallPublishResponse) => void): Promise<CreateNetworkFirewallPublishResponse>;
    /**
     * 容器网络创建网络策略撤销任务
     */
    CreateNetworkFirewallUndoPublish(req: CreateNetworkFirewallUndoPublishRequest, cb?: (error: string, rep: CreateNetworkFirewallUndoPublishResponse) => void): Promise<CreateNetworkFirewallUndoPublishResponse>;
    /**
     * 删除运行时高危系统调用白名单
     */
    DeleteRiskSyscallWhiteLists(req: DeleteRiskSyscallWhiteListsRequest, cb?: (error: string, rep: DeleteRiskSyscallWhiteListsResponse) => void): Promise<DeleteRiskSyscallWhiteListsResponse>;
    /**
     * 添加编辑运行时访问控制策略
     */
    AddEditAccessControlRule(req: AddEditAccessControlRuleRequest, cb?: (error: string, rep: AddEditAccessControlRuleResponse) => void): Promise<AddEditAccessControlRuleResponse>;
    /**
     * 查询本地镜像、仓库镜像中严重&高危的漏洞趋势
     */
    DescribeVulTendency(req: DescribeVulTendencyRequest, cb?: (error: string, rep: DescribeVulTendencyResponse) => void): Promise<DescribeVulTendencyResponse>;
    /**
     * 查询运行时反弹shell白名单详细信息
     */
    DescribeReverseShellWhiteListDetail(req: DescribeReverseShellWhiteListDetailRequest, cb?: (error: string, rep: DescribeReverseShellWhiteListDetailResponse) => void): Promise<DescribeReverseShellWhiteListDetailResponse>;
    /**
     * 添加容器安全镜像扫描设置
     */
    CreateAssetImageScanSetting(req: CreateAssetImageScanSettingRequest, cb?: (error: string, rep: CreateAssetImageScanSettingResponse) => void): Promise<CreateAssetImageScanSettingResponse>;
    /**
     * 容器安全查询镜像病毒列表
     */
    DescribeAssetImageVirusList(req: DescribeAssetImageVirusListRequest, cb?: (error: string, rep: DescribeAssetImageVirusListResponse) => void): Promise<DescribeAssetImageVirusListResponse>;
    /**
     * 创建k8sapi异常事件规则
     */
    CreateK8sApiAbnormalRuleInfo(req: CreateK8sApiAbnormalRuleInfoRequest, cb?: (error: string, rep: CreateK8sApiAbnormalRuleInfoResponse) => void): Promise<CreateK8sApiAbnormalRuleInfoResponse>;
    /**
     * 查询账户容器、镜像等统计信息
     */
    DescribeAssetSummary(req?: DescribeAssetSummaryRequest, cb?: (error: string, rep: DescribeAssetSummaryResponse) => void): Promise<DescribeAssetSummaryResponse>;
    /**
     * 查询安全日志投递kafka配置
     */
    DescribeSecLogDeliveryKafkaSetting(req?: DescribeSecLogDeliveryKafkaSettingRequest, cb?: (error: string, rep: DescribeSecLogDeliveryKafkaSettingResponse) => void): Promise<DescribeSecLogDeliveryKafkaSettingResponse>;
    /**
     * DescribeRiskContainerImageList查询风险容器镜像列表
     */
    DescribeEventEscapeImageList(req: DescribeEventEscapeImageListRequest, cb?: (error: string, rep: DescribeEventEscapeImageListResponse) => void): Promise<DescribeEventEscapeImageListResponse>;
    /**
     * 容器网络创建网络策略删除任务
     */
    DeleteNetworkFirewallPolicyDetail(req: DeleteNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: DeleteNetworkFirewallPolicyDetailResponse) => void): Promise<DeleteNetworkFirewallPolicyDetailResponse>;
    /**
     * 容器安全查询web服务列表
     */
    DescribeAssetWebServiceList(req: DescribeAssetWebServiceListRequest, cb?: (error: string, rep: DescribeAssetWebServiceListResponse) => void): Promise<DescribeAssetWebServiceListResponse>;
    /**
     * 检查单个镜像仓库名是否重复
     */
    CheckRepeatAssetImageRegistry(req: CheckRepeatAssetImageRegistryRequest, cb?: (error: string, rep: CheckRepeatAssetImageRegistryResponse) => void): Promise<CheckRepeatAssetImageRegistryResponse>;
    /**
     * 容器网络创建网络策略添加任务
     */
    AddNetworkFirewallPolicyDetail(req: AddNetworkFirewallPolicyDetailRequest, cb?: (error: string, rep: AddNetworkFirewallPolicyDetailResponse) => void): Promise<AddNetworkFirewallPolicyDetailResponse>;
    /**
     * 查询k8s api 异常事件详情
     */
    DescribeK8sApiAbnormalEventInfo(req: DescribeK8sApiAbnormalEventInfoRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalEventInfoResponse) => void): Promise<DescribeK8sApiAbnormalEventInfoResponse>;
    /**
     * 查询待处理异常进程事件趋势
     */
    DescribeAbnormalProcessEventTendency(req: DescribeAbnormalProcessEventTendencyRequest, cb?: (error: string, rep: DescribeAbnormalProcessEventTendencyResponse) => void): Promise<DescribeAbnormalProcessEventTendencyResponse>;
    /**
     * 查询受漏洞的容器列表
     */
    DescribeVulContainerList(req: DescribeVulContainerListRequest, cb?: (error: string, rep: DescribeVulContainerListResponse) => void): Promise<DescribeVulContainerListResponse>;
    /**
     * 镜像仓库停止镜像扫描任务
     */
    ModifyAssetImageRegistryScanStop(req: ModifyAssetImageRegistryScanStopRequest, cb?: (error: string, rep: ModifyAssetImageRegistryScanStopResponse) => void): Promise<ModifyAssetImageRegistryScanStopResponse>;
    /**
     * 查询安全日志商品信息
     */
    DescribeSecLogVasInfo(req?: DescribeSecLogVasInfoRequest, cb?: (error: string, rep: DescribeSecLogVasInfoResponse) => void): Promise<DescribeSecLogVasInfoResponse>;
    /**
     * 获取用户的pod列表
     */
    DescribeUserPodList(req: DescribeUserPodListRequest, cb?: (error: string, rep: DescribeUserPodListResponse) => void): Promise<DescribeUserPodListResponse>;
    /**
     * 查询木马样本下载url
     */
    DescribeVirusSampleDownloadUrl(req: DescribeVirusSampleDownloadUrlRequest, cb?: (error: string, rep: DescribeVirusSampleDownloadUrlResponse) => void): Promise<DescribeVirusSampleDownloadUrlResponse>;
    /**
     * 查询主机详细信息
     */
    DescribeAssetHostDetail(req: DescribeAssetHostDetailRequest, cb?: (error: string, rep: DescribeAssetHostDetailResponse) => void): Promise<DescribeAssetHostDetailResponse>;
    /**
     * 镜像仓库漏洞列表导出
     */
    DescribeAssetImageRegistryVulListExport(req: DescribeAssetImageRegistryVulListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVulListExportResponse) => void): Promise<DescribeAssetImageRegistryVulListExportResponse>;
    /**
     * 查询web应用漏洞列表
     */
    DescribeWebVulList(req: DescribeWebVulListRequest, cb?: (error: string, rep: DescribeWebVulListResponse) => void): Promise<DescribeWebVulListResponse>;
    /**
     * 查询运行时高危系统调用白名单列表信息
     */
    DescribeRiskSyscallWhiteLists(req: DescribeRiskSyscallWhiteListsRequest, cb?: (error: string, rep: DescribeRiskSyscallWhiteListsResponse) => void): Promise<DescribeRiskSyscallWhiteListsResponse>;
    /**
     * 接口已废弃

查询运行时访问控制策略列表导出
     */
    DescribeAccessControlRulesExport(req: DescribeAccessControlRulesExportRequest, cb?: (error: string, rep: DescribeAccessControlRulesExportResponse) => void): Promise<DescribeAccessControlRulesExportResponse>;
    /**
     * 查询高危系统调用事件详细信息
     */
    DescribeRiskSyscallDetail(req: DescribeRiskSyscallDetailRequest, cb?: (error: string, rep: DescribeRiskSyscallDetailResponse) => void): Promise<DescribeRiskSyscallDetailResponse>;
    /**
     * 查询木马自动隔离样本列表
     */
    DescribeVirusAutoIsolateSampleList(req: DescribeVirusAutoIsolateSampleListRequest, cb?: (error: string, rep: DescribeVirusAutoIsolateSampleListResponse) => void): Promise<DescribeVirusAutoIsolateSampleListResponse>;
    /**
     * 运行时查询文件查杀任务状态
     */
    DescribeVirusScanTaskStatus(req: DescribeVirusScanTaskStatusRequest, cb?: (error: string, rep: DescribeVirusScanTaskStatusResponse) => void): Promise<DescribeVirusScanTaskStatusResponse>;
    /**
     * 修改k8sapi异常事件规则状态
     */
    ModifyK8sApiAbnormalRuleStatus(req: ModifyK8sApiAbnormalRuleStatusRequest, cb?: (error: string, rep: ModifyK8sApiAbnormalRuleStatusResponse) => void): Promise<ModifyK8sApiAbnormalRuleStatusResponse>;
    /**
     * 查询容器运行时安全事件趋势
     */
    DescribeSecEventsTendency(req: DescribeSecEventsTendencyRequest, cb?: (error: string, rep: DescribeSecEventsTendencyResponse) => void): Promise<DescribeSecEventsTendencyResponse>;
    /**
     * 查询镜像详细信息
     */
    DescribeAssetImageDetail(req: DescribeAssetImageDetailRequest, cb?: (error: string, rep: DescribeAssetImageDetailResponse) => void): Promise<DescribeAssetImageDetailResponse>;
    /**
     * 更新安全日志投递kafka设置
     */
    ModifySecLogDeliveryKafkaSetting(req: ModifySecLogDeliveryKafkaSettingRequest, cb?: (error: string, rep: ModifySecLogDeliveryKafkaSettingResponse) => void): Promise<ModifySecLogDeliveryKafkaSettingResponse>;
    /**
     * 创建文件篡改规则导出任务
     */
    CreateAccessControlsRuleExportJob(req: CreateAccessControlsRuleExportJobRequest, cb?: (error: string, rep: CreateAccessControlsRuleExportJobResponse) => void): Promise<CreateAccessControlsRuleExportJobResponse>;
    /**
     * 新增安全合规忽略(检测项+资产)列表，不显示指定的检查项包含的资产内容
     */
    DeleteCompliancePolicyAssetSetFromWhitelist(req: DeleteCompliancePolicyAssetSetFromWhitelistRequest, cb?: (error: string, rep: DeleteCompliancePolicyAssetSetFromWhitelistResponse) => void): Promise<DeleteCompliancePolicyAssetSetFromWhitelistResponse>;
    /**
     * 查询k8sapi异常请求规则列表
     */
    DescribeK8sApiAbnormalRuleList(req: DescribeK8sApiAbnormalRuleListRequest, cb?: (error: string, rep: DescribeK8sApiAbnormalRuleListResponse) => void): Promise<DescribeK8sApiAbnormalRuleListResponse>;
}
