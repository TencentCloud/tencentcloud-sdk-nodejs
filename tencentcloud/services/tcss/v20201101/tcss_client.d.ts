import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVirusScanAgainRequest, UpdateImageRegistryTimingScanTaskResponse, DescribeUnfinishRefreshTaskResponse, DescribeRiskSyscallWhiteListsResponse, CreateRefreshTaskResponse, DescribeVirusScanTimeoutSettingResponse, DescribeAssetComponentListResponse, DescribeAssetImageRegistryVulListResponse, AddAssetImageRegistryRegistryDetailResponse, DeleteCompliancePolicyItemFromWhitelistRequest, DescribeAssetImageDetailRequest, ModifyAssetImageScanStopResponse, DescribeComplianceScanFailedAssetListResponse, SyncAssetImageRegistryAssetResponse, DescribeAssetImageRegistryVirusListExportResponse, DescribeSecEventsTendencyResponse, DescribeAccessControlEventsExportResponse, AddEditAbnormalProcessRuleRequest, DescribeComplianceTaskAssetSummaryRequest, ModifyAssetImageRegistryScanStopResponse, DescribeProVersionInfoRequest, SetCheckModeResponse, DescribeAssetImageScanStatusResponse, DescribeAbnormalProcessRulesExportRequest, DescribePurchaseStateInfoResponse, ModifyVirusFileStatusResponse, DescribeAssetImageRegistryRegistryDetailResponse, DescribeVirusDetailRequest, DescribeClusterDetailRequest, DescribeAssetImageListRequest, DescribeRiskSyscallWhiteListDetailRequest, ModifyAbnormalProcessRuleStatusRequest, ScanCompliancePolicyItemsRequest, DescribeAssetImageVirusListExportRequest, CreateAssetImageScanTaskResponse, DescribeTaskResultSummaryRequest, DeleteAccessControlRulesRequest, DescribeAccessControlEventsResponse, DescribeRiskSyscallEventsResponse, DescribeAssetImageRiskListResponse, DescribeReverseShellEventsResponse, DescribeComplianceAssetDetailInfoRequest, CreateExportComplianceStatusListJobResponse, DescribeAssetAppServiceListResponse, DescribeEscapeRuleInfoResponse, DescribePurchaseStateInfoRequest, AddCompliancePolicyItemToWhitelistRequest, RemoveAssetImageRegistryRegistryDetailResponse, UpdateAssetImageRegistryRegistryDetailResponse, DeleteAbnormalProcessRulesResponse, DescribeReverseShellDetailRequest, ModifyReverseShellStatusRequest, DescribeAssetImageRiskListExportRequest, DescribeAffectedWorkloadListRequest, DescribeAffectedClusterCountRequest, DescribeAssetImageRegistryVulListExportRequest, AddEditRiskSyscallWhiteListRequest, DescribeRiskSyscallDetailRequest, DescribeAbnormalProcessRulesRequest, DescribeAssetImageRegistryListResponse, ExportVirusListResponse, DescribeAssetImageVirusListResponse, DescribeImageRiskSummaryRequest, ModifyReverseShellStatusResponse, CreateAssetImageScanSettingRequest, DescribeAssetSummaryResponse, DescribeImageRegistryTimingScanTaskResponse, DescribeAssetWebServiceListRequest, ModifyEscapeEventStatusResponse, CheckRepeatAssetImageRegistryResponse, DescribeAccessControlEventsExportRequest, DescribeRiskSyscallDetailResponse, DescribeAssetImageBindRuleInfoResponse, ScanCompliancePolicyItemsResponse, DescribeAssetContainerListRequest, DescribeEscapeSafeStateResponse, ScanComplianceAssetsByPolicyItemResponse, DescribeAssetPortListRequest, DescribeComplianceTaskPolicyItemSummaryListResponse, DescribeReverseShellEventsRequest, DescribeAbnormalProcessRuleDetailRequest, SyncAssetImageRegistryAssetRequest, DescribeAffectedClusterCountResponse, RenewImageAuthorizeStateRequest, CreateAssetImageRegistryScanTaskOneKeyRequest, ModifyEscapeEventStatusRequest, DescribeAssetImageBindRuleInfoRequest, DescribeAssetContainerListResponse, DescribeVirusMonitorSettingResponse, DescribeContainerSecEventSummaryRequest, DescribeAssetImageRegistrySummaryResponse, DescribeImageAuthorizedInfoResponse, DescribeAbnormalProcessEventsRequest, ModifyAbnormalProcessRuleStatusResponse, DescribeVirusListRequest, DescribeComplianceAssetListRequest, ModifyVirusScanSettingResponse, ModifyVirusMonitorSettingRequest, ScanComplianceAssetsByPolicyItemRequest, DescribeEscapeEventInfoResponse, AddAssetImageRegistryRegistryDetailRequest, DescribeAssetImageHostListRequest, DescribeCompliancePeriodTaskListResponse, DescribeAssetImageScanSettingRequest, DescribeClusterSummaryResponse, DescribeValueAddedSrvInfoRequest, DescribeCompliancePolicyItemAffectedSummaryResponse, ModifyRiskSyscallStatusResponse, DescribeReverseShellWhiteListsResponse, ModifyAssetImageRegistryScanStopOneKeyRequest, DescribeExportJobResultRequest, DescribeAffectedWorkloadListResponse, CreateComplianceTaskResponse, ModifyAssetRequest, DescribeRiskListRequest, ModifyAccessControlStatusResponse, DescribeAssetAppServiceListRequest, RemoveAssetImageRegistryRegistryDetailRequest, ModifyVirusScanSettingRequest, DescribeAssetDBServiceListRequest, DescribeProVersionInfoResponse, AddEditAbnormalProcessRuleResponse, DescribeAssetImageRegistryListRequest, CreateCheckComponentResponse, DescribeImageRegistryTimingScanTaskRequest, DescribeRiskSyscallWhiteListDetailResponse, DescribeReverseShellWhiteListsRequest, ScanComplianceAssetsResponse, CreateComplianceTaskRequest, DescribeReverseShellWhiteListDetailResponse, DescribeAssetImageVulListExportResponse, DescribeAssetImageRegistryRiskListExportRequest, DescribeAssetImageDetailResponse, CreateAssetImageRegistryScanTaskOneKeyResponse, DescribeAssetImageVulListExportRequest, DescribeExportJobResultResponse, DescribeAssetHostListResponse, CreateAssetImageRegistryScanTaskResponse, DescribeAssetImageRegistrySummaryRequest, DescribeTaskResultSummaryResponse, DescribeVirusScanTimeoutSettingRequest, ModifyAssetImageScanStopRequest, CreateRefreshTaskRequest, DescribeAssetImageRiskListExportResponse, DescribeAccessControlEventsRequest, DescribeAccessControlRuleDetailRequest, ExportVirusListRequest, DeleteReverseShellWhiteListsResponse, DescribeRiskSyscallNamesResponse, AddEditReverseShellWhiteListResponse, DescribeAbnormalProcessEventsResponse, InitializeUserComplianceEnvironmentResponse, SetCheckModeRequest, DescribeVirusTaskListResponse, DescribeAssetHostDetailResponse, DescribeAffectedNodeListResponse, DescribeClusterSummaryRequest, DescribeAbnormalProcessRulesExportResponse, DescribeEscapeEventDetailResponse, DeleteAccessControlRulesResponse, RenewImageAuthorizeStateResponse, DescribeEscapeRuleInfoRequest, DescribeComplianceWhitelistItemListResponse, DescribeVirusSummaryResponse, UpdateImageRegistryTimingScanTaskRequest, DescribeSecEventsTendencyRequest, DescribeContainerSecEventSummaryResponse, DescribeAssetContainerDetailRequest, ModifyAccessControlStatusRequest, ScanComplianceScanFailedAssetsRequest, ModifyCompliancePeriodTaskResponse, DescribeAssetImageVulListResponse, DescribePostPayDetailResponse, DescribeAssetImageScanStatusRequest, DescribeCheckItemListResponse, ScanComplianceAssetsRequest, DescribeAbnormalProcessRuleDetailResponse, ModifyVirusFileStatusRequest, DescribeAssetImageRegistryListExportRequest, DescribeAssetImageRegistryRiskListExportResponse, ModifyEscapeRuleRequest, DescribeAbnormalProcessRulesResponse, DescribeCheckItemListRequest, DescribeVirusScanSettingResponse, DescribeAccessControlRuleDetailResponse, CreateOrModifyPostPayCoresRequest, DescribeAssetImageScanTaskRequest, DescribeValueAddedSrvInfoResponse, CreateVirusScanTaskResponse, DescribeAssetProcessListRequest, DescribeAssetProcessListResponse, ModifyVirusScanTimeoutSettingResponse, DescribeAssetImageRegistryDetailRequest, CreateAssetImageRegistryScanTaskRequest, DescribeAssetImageListExportResponse, DescribeAssetContainerDetailResponse, ScanComplianceScanFailedAssetsResponse, DescribeAssetImageVirusListExportResponse, DescribeAssetPortListResponse, DescribeRefreshTaskRequest, CreateClusterCheckTaskResponse, DescribeCompliancePolicyItemAffectedAssetListRequest, DescribeImageRiskTendencyRequest, CreateOrModifyPostPayCoresResponse, DescribeVirusMonitorSettingRequest, DescribeAssetImageHostListResponse, DescribeImageRiskTendencyResponse, DescribeComplianceScanFailedAssetListRequest, DescribeAssetImageRegistryVulListRequest, DescribeImageSimpleListResponse, DescribeVirusScanSettingRequest, DescribeUserClusterResponse, DescribeAssetImageRegistryRegistryListRequest, DescribeVirusScanTaskStatusResponse, DescribeEscapeEventsExportResponse, DescribeComplianceWhitelistItemListRequest, DescribeAccessControlDetailRequest, DescribeVirusListResponse, DescribeAbnormalProcessEventsExportRequest, DescribeAssetComponentListRequest, DescribeUserClusterRequest, DescribeAbnormalProcessDetailResponse, DescribeAssetImageListExportRequest, ModifyAssetImageRegistryScanStopOneKeyResponse, DescribeRiskSyscallNamesRequest, DescribeAssetImageRegistryVirusListResponse, DescribeAssetImageSimpleListRequest, DescribeAssetDBServiceListResponse, DescribeImageSimpleListRequest, DescribeAssetWebServiceListResponse, DescribeComplianceTaskPolicyItemSummaryListRequest, DescribeAssetImageVulListRequest, ModifyRiskSyscallStatusRequest, CreateVirusScanTaskRequest, DescribeAssetImageScanTaskResponse, AddEditAccessControlRuleRequest, DescribeAssetImageSimpleListResponse, DescribeComplianceAssetPolicyItemListResponse, DescribeReverseShellEventsExportRequest, DescribeAccessControlDetailResponse, DescribeAffectedNodeListRequest, DescribeAssetImageRegistryAssetStatusResponse, DeleteReverseShellWhiteListsRequest, AddEditRiskSyscallWhiteListResponse, ModifyAbnormalProcessStatusRequest, ModifyAccessControlRuleStatusResponse, DescribeClusterDetailResponse, InitializeUserComplianceEnvironmentRequest, DescribeAssetImageRiskListRequest, DescribeEscapeSafeStateRequest, StopVirusScanTaskRequest, DescribeEscapeEventDetailRequest, DescribeVirusSummaryRequest, DeleteAbnormalProcessRulesRequest, ModifyCompliancePeriodTaskRequest, DescribeRiskSyscallEventsRequest, DescribeRiskListResponse, DescribeAssetSummaryRequest, CreateClusterCheckTaskRequest, DescribeAbnormalProcessDetailRequest, CreateExportComplianceStatusListJobRequest, DescribeEscapeEventInfoRequest, DescribeRiskSyscallEventsExportResponse, DescribeAssetImageRegistryRiskInfoListRequest, DescribeAssetImageRegistryScanStatusOneKeyRequest, ModifyAccessControlRuleStatusRequest, DescribeWarningRulesRequest, DescribeContainerAssetSummaryRequest, DeleteRiskSyscallWhiteListsResponse, DescribeAssetImageVirusListRequest, DescribeAssetImageScanSettingResponse, DescribeReverseShellDetailResponse, DescribeAccessControlRulesExportResponse, ModifyAbnormalProcessStatusResponse, DescribeAbnormalProcessEventsExportResponse, DescribeContainerAssetSummaryResponse, CreateAssetImageScanTaskRequest, DescribeEscapeEventsExportRequest, DescribeImageRiskSummaryResponse, CheckRepeatAssetImageRegistryRequest, CreateCheckComponentRequest, DeleteRiskSyscallWhiteListsRequest, DescribeImageAuthorizedInfoRequest, DescribeAssetImageRegistryRiskInfoListResponse, DescribeAssetImageRegistryDetailResponse, AddCompliancePolicyItemToWhitelistResponse, DescribeAccessControlRulesRequest, StopVirusScanTaskResponse, AddEditWarningRulesRequest, ModifyAssetResponse, DescribeReverseShellEventsExportResponse, DescribeAssetImageListResponse, DescribeAssetImageRegistryVirusListRequest, DescribeReverseShellWhiteListDetailRequest, ModifyVirusMonitorSettingResponse, DescribeComplianceTaskAssetSummaryResponse, DescribeWarningRulesResponse, DescribeCompliancePeriodTaskListRequest, DescribeAccessControlRulesExportRequest, AddEditWarningRulesResponse, DescribeAssetImageRegistryRegistryListResponse, DescribeAssetImageRegistryAssetStatusRequest, ModifyVirusScanTimeoutSettingRequest, CreateVirusScanAgainResponse, AddEditAccessControlRuleResponse, DeleteCompliancePolicyItemFromWhitelistResponse, CreateAssetImageScanSettingResponse, DescribeAccessControlRulesResponse, ModifyEscapeRuleResponse, DescribeCompliancePolicyItemAffectedSummaryRequest, DescribeVirusDetailResponse, DescribeComplianceAssetListResponse, DescribeComplianceAssetDetailInfoResponse, ModifyAssetImageRegistryScanStopRequest, DescribeVirusScanTaskStatusRequest, DescribeCompliancePolicyItemAffectedAssetListResponse, DescribeComplianceAssetPolicyItemListRequest, DescribeAssetImageRegistryVulListExportResponse, DescribeAssetHostListRequest, DescribeRiskSyscallEventsExportRequest, DescribeRiskSyscallWhiteListsRequest, DescribeUnfinishRefreshTaskRequest, DescribeAssetImageRegistryScanStatusOneKeyResponse, DescribeAssetImageRegistryRegistryDetailRequest, UpdateAssetImageRegistryRegistryDetailRequest, AddEditReverseShellWhiteListRequest, DescribeVirusTaskListRequest, DescribeAssetImageRegistryVirusListExportRequest, DescribeAssetImageRegistryListExportResponse, DescribePostPayDetailRequest, DescribeAssetHostDetailRequest, DescribeRefreshTaskResponse } from "./tcss_models";
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
     * 查询运行时异常进程事件列表信息导出
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
     * 容器安全搜索查询主机列表
     */
    DescribeAssetHostList(req: DescribeAssetHostListRequest, cb?: (error: string, rep: DescribeAssetHostListResponse) => void): Promise<DescribeAssetHostListResponse>;
    /**
     * 重新检测选定的检测失败的资产下的所有失败的检测项，返回创建的合规检查任务的ID。
     */
    ScanComplianceScanFailedAssets(req: ScanComplianceScanFailedAssetsRequest, cb?: (error: string, rep: ScanComplianceScanFailedAssetsResponse) => void): Promise<ScanComplianceScanFailedAssetsResponse>;
    /**
     * 修改运行时访问控制策略的状态，启用或者禁用
     */
    ModifyAccessControlRuleStatus(req: ModifyAccessControlRuleStatusRequest, cb?: (error: string, rep: ModifyAccessControlRuleStatusResponse) => void): Promise<ModifyAccessControlRuleStatusResponse>;
    /**
     * 查询运行时异常进程策略列表信息导出
     */
    DescribeAbnormalProcessRulesExport(req: DescribeAbnormalProcessRulesExportRequest, cb?: (error: string, rep: DescribeAbnormalProcessRulesExportResponse) => void): Promise<DescribeAbnormalProcessRulesExportResponse>;
    /**
     * ModifyEscapeEventStatus  修改容器逃逸扫描事件状态
     */
    ModifyEscapeEventStatus(req: ModifyEscapeEventStatusRequest, cb?: (error: string, rep: ModifyEscapeEventStatusResponse) => void): Promise<ModifyEscapeEventStatusResponse>;
    /**
     * 镜像仓库查看定时任务
     */
    DescribeImageRegistryTimingScanTask(req?: DescribeImageRegistryTimingScanTaskRequest, cb?: (error: string, rep: DescribeImageRegistryTimingScanTaskResponse) => void): Promise<DescribeImageRegistryTimingScanTaskResponse>;
    /**
     * 容器安全查询app服务列表
     */
    DescribeAssetAppServiceList(req: DescribeAssetAppServiceListRequest, cb?: (error: string, rep: DescribeAssetAppServiceListResponse) => void): Promise<DescribeAssetAppServiceListResponse>;
    /**
     * 搜索查询容器列表
     */
    DescribeAssetContainerList(req: DescribeAssetContainerListRequest, cb?: (error: string, rep: DescribeAssetContainerListResponse) => void): Promise<DescribeAssetContainerListResponse>;
    /**
     * 删除单个镜像仓库详细信息
     */
    RemoveAssetImageRegistryRegistryDetail(req: RemoveAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: RemoveAssetImageRegistryRegistryDetailResponse) => void): Promise<RemoveAssetImageRegistryRegistryDetailResponse>;
    /**
     * 下发刷新任务，会刷新资产信息
     */
    CreateRefreshTask(req?: CreateRefreshTaskRequest, cb?: (error: string, rep: CreateRefreshTaskResponse) => void): Promise<CreateRefreshTaskResponse>;
    /**
     * 查询运行时运行时反弹shell白名单列表信息
     */
    DescribeReverseShellWhiteLists(req: DescribeReverseShellWhiteListsRequest, cb?: (error: string, rep: DescribeReverseShellWhiteListsResponse) => void): Promise<DescribeReverseShellWhiteListsResponse>;
    /**
     * 查询workload类型的影响范围，返回workload列表
     */
    DescribeAffectedWorkloadList(req: DescribeAffectedWorkloadListRequest, cb?: (error: string, rep: DescribeAffectedWorkloadListResponse) => void): Promise<DescribeAffectedWorkloadListResponse>;
    /**
     * 容器安全搜索查询容器组件列表
     */
    DescribeAssetComponentList(req: DescribeAssetComponentListRequest, cb?: (error: string, rep: DescribeAssetComponentListResponse) => void): Promise<DescribeAssetComponentListResponse>;
    /**
     * 容器安全查询镜像扫描状态
     */
    DescribeAssetImageScanStatus(req: DescribeAssetImageScanStatusRequest, cb?: (error: string, rep: DescribeAssetImageScanStatusResponse) => void): Promise<DescribeAssetImageScanStatusResponse>;
    /**
     * 运行时查询文件查杀实时监控设置
     */
    DescribeVirusMonitorSetting(req?: DescribeVirusMonitorSettingRequest, cb?: (error: string, rep: DescribeVirusMonitorSettingResponse) => void): Promise<DescribeVirusMonitorSettingResponse>;
    /**
     * 运行时文件扫描超时设置
     */
    ModifyVirusScanTimeoutSetting(req: ModifyVirusScanTimeoutSettingRequest, cb?: (error: string, rep: ModifyVirusScanTimeoutSettingResponse) => void): Promise<ModifyVirusScanTimeoutSettingResponse>;
    /**
     * 创建集群检查任务，用户检查用户的集群相关风险项
     */
    CreateClusterCheckTask(req: CreateClusterCheckTaskRequest, cb?: (error: string, rep: CreateClusterCheckTaskResponse) => void): Promise<CreateClusterCheckTaskResponse>;
    /**
     * 查询运行时访问控制事件列表
     */
    DescribeAccessControlEvents(req: DescribeAccessControlEventsRequest, cb?: (error: string, rep: DescribeAccessControlEventsResponse) => void): Promise<DescribeAccessControlEventsResponse>;
    /**
     * 运行时更新文件查杀设置
     */
    ModifyVirusScanSetting(req: ModifyVirusScanSettingRequest, cb?: (error: string, rep: ModifyVirusScanSettingResponse) => void): Promise<ModifyVirusScanSettingResponse>;
    /**
     * 镜像仓库木马信息列表导出
     */
    DescribeAssetImageRegistryVirusListExport(req: DescribeAssetImageRegistryVirusListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVirusListExportResponse) => void): Promise<DescribeAssetImageRegistryVirusListExportResponse>;
    /**
     * 获取受影响的集群数量，返回数量
     */
    DescribeAffectedClusterCount(req?: DescribeAffectedClusterCountRequest, cb?: (error: string, rep: DescribeAffectedClusterCountResponse) => void): Promise<DescribeAffectedClusterCountResponse>;
    /**
     * 修改高危系统调用事件的状态信息
     */
    ModifyRiskSyscallStatus(req: ModifyRiskSyscallStatusRequest, cb?: (error: string, rep: ModifyRiskSyscallStatusResponse) => void): Promise<ModifyRiskSyscallStatusResponse>;
    /**
     * DescribeEscapeEventInfo 查询容器逃逸事件列表
     */
    DescribeEscapeEventInfo(req: DescribeEscapeEventInfoRequest, cb?: (error: string, rep: DescribeEscapeEventInfoResponse) => void): Promise<DescribeEscapeEventInfoResponse>;
    /**
     * 查看镜像仓库资产更新进度状态
     */
    DescribeAssetImageRegistryAssetStatus(req?: DescribeAssetImageRegistryAssetStatusRequest, cb?: (error: string, rep: DescribeAssetImageRegistryAssetStatusResponse) => void): Promise<DescribeAssetImageRegistryAssetStatusResponse>;
    /**
     * 镜像仓库仓库列表
     */
    DescribeAssetImageRegistryRegistryList(req?: DescribeAssetImageRegistryRegistryListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRegistryListResponse) => void): Promise<DescribeAssetImageRegistryRegistryListResponse>;
    /**
     * 镜像仓库停止镜像扫描任务
     */
    ModifyAssetImageRegistryScanStop(req: ModifyAssetImageRegistryScanStopRequest, cb?: (error: string, rep: ModifyAssetImageRegistryScanStopResponse) => void): Promise<ModifyAssetImageRegistryScanStopResponse>;
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
     * 容器安全停止镜像扫描
     */
    ModifyAssetImageScanStop(req: ModifyAssetImageScanStopRequest, cb?: (error: string, rep: ModifyAssetImageScanStopResponse) => void): Promise<ModifyAssetImageScanStopResponse>;
    /**
     * DescribeEscapeEventsExport  查询容器逃逸事件列表导出
     */
    DescribeEscapeEventsExport(req: DescribeEscapeEventsExportRequest, cb?: (error: string, rep: DescribeEscapeEventsExportResponse) => void): Promise<DescribeEscapeEventsExportResponse>;
    /**
     * 容器安全搜索查询镜像列表导出
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
     * 查询运行时高危系统调用系统名称列表
     */
    DescribeRiskSyscallNames(req?: DescribeRiskSyscallNamesRequest, cb?: (error: string, rep: DescribeRiskSyscallNamesResponse) => void): Promise<DescribeRiskSyscallNamesResponse>;
    /**
     * 查询合规检测的定时任务列表
     */
    DescribeCompliancePeriodTaskList(req: DescribeCompliancePeriodTaskListRequest, cb?: (error: string, rep: DescribeCompliancePeriodTaskListResponse) => void): Promise<DescribeCompliancePeriodTaskListResponse>;
    /**
     * 删除运行访问控制策略
     */
    DeleteAccessControlRules(req: DeleteAccessControlRulesRequest, cb?: (error: string, rep: DeleteAccessControlRulesResponse) => void): Promise<DeleteAccessControlRulesResponse>;
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
     * 运行时高危系统调用列表导出
     */
    DescribeRiskSyscallEventsExport(req: DescribeRiskSyscallEventsExportRequest, cb?: (error: string, rep: DescribeRiskSyscallEventsExportResponse) => void): Promise<DescribeRiskSyscallEventsExportResponse>;
    /**
     * 查询运行时异常策略详细信息
     */
    DescribeAbnormalProcessRuleDetail(req: DescribeAbnormalProcessRuleDetailRequest, cb?: (error: string, rep: DescribeAbnormalProcessRuleDetailResponse) => void): Promise<DescribeAbnormalProcessRuleDetailResponse>;
    /**
     * 查看单个镜像仓库详细信息
     */
    DescribeAssetImageRegistryRegistryDetail(req: DescribeAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRegistryDetailResponse) => void): Promise<DescribeAssetImageRegistryRegistryDetailResponse>;
    /**
     * DescribeValueAddedSrvInfo查询增值服务需购买信息
     */
    DescribeValueAddedSrvInfo(req?: DescribeValueAddedSrvInfoRequest, cb?: (error: string, rep: DescribeValueAddedSrvInfoResponse) => void): Promise<DescribeValueAddedSrvInfoResponse>;
    /**
     * 添加编辑运行时反弹shell白名单
     */
    AddEditReverseShellWhiteList(req: AddEditReverseShellWhiteListRequest, cb?: (error: string, rep: AddEditReverseShellWhiteListResponse) => void): Promise<AddEditReverseShellWhiteListResponse>;
    /**
     * 查询运行时反弹shell事件详细信息
     */
    DescribeReverseShellDetail(req: DescribeReverseShellDetailRequest, cb?: (error: string, rep: DescribeReverseShellDetailResponse) => void): Promise<DescribeReverseShellDetailResponse>;
    /**
     * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
     */
    DescribeAssetImageBindRuleInfo(req: DescribeAssetImageBindRuleInfoRequest, cb?: (error: string, rep: DescribeAssetImageBindRuleInfoResponse) => void): Promise<DescribeAssetImageBindRuleInfoResponse>;
    /**
     * 查询高危系统调用事件详细信息
     */
    DescribeRiskSyscallDetail(req: DescribeRiskSyscallDetailRequest, cb?: (error: string, rep: DescribeRiskSyscallDetailResponse) => void): Promise<DescribeRiskSyscallDetailResponse>;
    /**
     * 查询刷新任务
     */
    DescribeRefreshTask(req: DescribeRefreshTaskRequest, cb?: (error: string, rep: DescribeRefreshTaskResponse) => void): Promise<DescribeRefreshTaskResponse>;
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
     * 查询容器资产概览信息
     */
    DescribeContainerAssetSummary(req?: DescribeContainerAssetSummaryRequest, cb?: (error: string, rep: DescribeContainerAssetSummaryResponse) => void): Promise<DescribeContainerAssetSummaryResponse>;
    /**
     * 查询运行时反弹shell事件列表信息导出
     */
    DescribeReverseShellEventsExport(req: DescribeReverseShellEventsExportRequest, cb?: (error: string, rep: DescribeReverseShellEventsExportResponse) => void): Promise<DescribeReverseShellEventsExportResponse>;
    /**
     * 修改运行时异常进程策略的开启关闭状态
     */
    ModifyAbnormalProcessRuleStatus(req: ModifyAbnormalProcessRuleStatusRequest, cb?: (error: string, rep: ModifyAbnormalProcessRuleStatusResponse) => void): Promise<ModifyAbnormalProcessRuleStatusResponse>;
    /**
     * 查询容器安全本地镜像风险趋势
     */
    DescribeImageRiskTendency(req: DescribeImageRiskTendencyRequest, cb?: (error: string, rep: DescribeImageRiskTendencyResponse) => void): Promise<DescribeImageRiskTendencyResponse>;
    /**
     * 查询导出任务的结果
     */
    DescribeExportJobResult(req: DescribeExportJobResultRequest, cb?: (error: string, rep: DescribeExportJobResultResponse) => void): Promise<DescribeExportJobResultResponse>;
    /**
     * 容器安全创建镜像扫描任务
     */
    CreateAssetImageScanTask(req: CreateAssetImageScanTaskRequest, cb?: (error: string, rep: CreateAssetImageScanTaskResponse) => void): Promise<CreateAssetImageScanTaskResponse>;
    /**
     * 查询正在一键扫描的镜像扫描taskid
     */
    DescribeAssetImageScanTask(req?: DescribeAssetImageScanTaskRequest, cb?: (error: string, rep: DescribeAssetImageScanTaskResponse) => void): Promise<DescribeAssetImageScanTaskResponse>;
    /**
     * 镜像仓库镜像列表导出
     */
    DescribeAssetImageRegistryListExport(req: DescribeAssetImageRegistryListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryListExportResponse) => void): Promise<DescribeAssetImageRegistryListExportResponse>;
    /**
     * 查询上次任务的资产通过率汇总信息
     */
    DescribeComplianceTaskAssetSummary(req: DescribeComplianceTaskAssetSummaryRequest, cb?: (error: string, rep: DescribeComplianceTaskAssetSummaryResponse) => void): Promise<DescribeComplianceTaskAssetSummaryResponse>;
    /**
     * 查询运行访问控制策略列表信息
     */
    DescribeAccessControlRules(req: DescribeAccessControlRulesRequest, cb?: (error: string, rep: DescribeAccessControlRulesResponse) => void): Promise<DescribeAccessControlRulesResponse>;
    /**
     * 容器安全搜索查询镜像木马列表导出
     */
    DescribeAssetImageVirusListExport(req: DescribeAssetImageVirusListExportRequest, cb?: (error: string, rep: DescribeAssetImageVirusListExportResponse) => void): Promise<DescribeAssetImageVirusListExportResponse>;
    /**
     * 运行时更新文件查杀实时监控设置
     */
    ModifyVirusMonitorSetting(req: ModifyVirusMonitorSettingRequest, cb?: (error: string, rep: ModifyVirusMonitorSettingResponse) => void): Promise<ModifyVirusMonitorSettingResponse>;
    /**
     * DescribePostPayDetail  查询后付费详情
     */
    DescribePostPayDetail(req: DescribePostPayDetailRequest, cb?: (error: string, rep: DescribePostPayDetailResponse) => void): Promise<DescribePostPayDetailResponse>;
    /**
     * 重新检测选定的资产
     */
    ScanComplianceAssets(req: ScanComplianceAssetsRequest, cb?: (error: string, rep: ScanComplianceAssetsResponse) => void): Promise<ScanComplianceAssetsResponse>;
    /**
     * 运行时停止木马查杀任务
     */
    StopVirusScanTask(req: StopVirusScanTaskRequest, cb?: (error: string, rep: StopVirusScanTaskResponse) => void): Promise<StopVirusScanTaskResponse>;
    /**
     * 查询所有检查项接口，返回总数和检查项列表
     */
    DescribeCheckItemList(req: DescribeCheckItemListRequest, cb?: (error: string, rep: DescribeCheckItemListResponse) => void): Promise<DescribeCheckItemListResponse>;
    /**
     * 运行时查询木马文件信息
     */
    DescribeVirusDetail(req: DescribeVirusDetailRequest, cb?: (error: string, rep: DescribeVirusDetailResponse) => void): Promise<DescribeVirusDetailResponse>;
    /**
     * 查询白名单列表
     */
    DescribeComplianceWhitelistItemList(req: DescribeComplianceWhitelistItemListRequest, cb?: (error: string, rep: DescribeComplianceWhitelistItemListResponse) => void): Promise<DescribeComplianceWhitelistItemListResponse>;
    /**
     * 创建合规检查任务，在资产级别触发重新检测时使用。
     */
    CreateComplianceTask(req: CreateComplianceTaskRequest, cb?: (error: string, rep: CreateComplianceTaskResponse) => void): Promise<CreateComplianceTaskResponse>;
    /**
     * 按照 资产 → 检测项 二层结构展示的信息。这里查询第一层 资产的通过率汇总信息。
     */
    DescribeComplianceScanFailedAssetList(req: DescribeComplianceScanFailedAssetListRequest, cb?: (error: string, rep: DescribeComplianceScanFailedAssetListResponse) => void): Promise<DescribeComplianceScanFailedAssetListResponse>;
    /**
     * 容器安全搜索查询端口占用列表
     */
    DescribeAssetPortList(req: DescribeAssetPortListRequest, cb?: (error: string, rep: DescribeAssetPortListResponse) => void): Promise<DescribeAssetPortListResponse>;
    /**
     * 镜像仓库漏洞列表导出
     */
    DescribeAssetImageRegistryVulListExport(req: DescribeAssetImageRegistryVulListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVulListExportResponse) => void): Promise<DescribeAssetImageRegistryVulListExportResponse>;
    /**
     * 删除运行异常进程策略
     */
    DeleteAbnormalProcessRules(req: DeleteAbnormalProcessRulesRequest, cb?: (error: string, rep: DeleteAbnormalProcessRulesResponse) => void): Promise<DeleteAbnormalProcessRulesResponse>;
    /**
     * 镜像仓库敏感信息列表导出
     */
    DescribeAssetImageRegistryRiskListExport(req: DescribeAssetImageRegistryRiskListExportRequest, cb?: (error: string, rep: DescribeAssetImageRegistryRiskListExportResponse) => void): Promise<DescribeAssetImageRegistryRiskListExportResponse>;
    /**
     * 运行时文件查杀一键扫描
     */
    CreateVirusScanTask(req: CreateVirusScanTaskRequest, cb?: (error: string, rep: CreateVirusScanTaskResponse) => void): Promise<CreateVirusScanTaskResponse>;
    /**
     * DescribeEscapeEventDetail  查询容器逃逸事件详情
     */
    DescribeEscapeEventDetail(req: DescribeEscapeEventDetailRequest, cb?: (error: string, rep: DescribeEscapeEventDetailResponse) => void): Promise<DescribeEscapeEventDetailResponse>;
    /**
     * 删除运行时反弹shell白名单
     */
    DeleteReverseShellWhiteLists(req: DeleteReverseShellWhiteListsRequest, cb?: (error: string, rep: DeleteReverseShellWhiteListsResponse) => void): Promise<DeleteReverseShellWhiteListsResponse>;
    /**
     * 查询某个资产的详情
     */
    DescribeComplianceAssetDetailInfo(req: DescribeComplianceAssetDetailInfoRequest, cb?: (error: string, rep: DescribeComplianceAssetDetailInfoResponse) => void): Promise<DescribeComplianceAssetDetailInfoResponse>;
    /**
     * 获取告警策略列表
     */
    DescribeWarningRules(req?: DescribeWarningRulesRequest, cb?: (error: string, rep: DescribeWarningRulesResponse) => void): Promise<DescribeWarningRulesResponse>;
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
     * DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息
     */
    DescribeEscapeRuleInfo(req?: DescribeEscapeRuleInfoRequest, cb?: (error: string, rep: DescribeEscapeRuleInfoResponse) => void): Promise<DescribeEscapeRuleInfoResponse>;
    /**
     * 容器安全查询镜像风险列表
     */
    DescribeAssetImageRiskList(req: DescribeAssetImageRiskListRequest, cb?: (error: string, rep: DescribeAssetImageRiskListResponse) => void): Promise<DescribeAssetImageRiskListResponse>;
    /**
     * 容器安全搜索查询镜像漏洞列表导出
     */
    DescribeAssetImageVulListExport(req: DescribeAssetImageVulListExportRequest, cb?: (error: string, rep: DescribeAssetImageVulListExportResponse) => void): Promise<DescribeAssetImageVulListExportResponse>;
    /**
     * 查询用户集群资产总览
     */
    DescribeClusterSummary(req?: DescribeClusterSummaryRequest, cb?: (error: string, rep: DescribeClusterSummaryResponse) => void): Promise<DescribeClusterSummaryResponse>;
    /**
     * DescribeEscapeSafeState 查询容器逃逸安全状态
     */
    DescribeEscapeSafeState(req?: DescribeEscapeSafeStateRequest, cb?: (error: string, rep: DescribeEscapeSafeStateResponse) => void): Promise<DescribeEscapeSafeStateResponse>;
    /**
     * 运行时查询文件查杀任务列表
     */
    DescribeVirusTaskList(req: DescribeVirusTaskListRequest, cb?: (error: string, rep: DescribeVirusTaskListResponse) => void): Promise<DescribeVirusTaskListResponse>;
    /**
     * 新增单个镜像仓库详细信息
     */
    AddAssetImageRegistryRegistryDetail(req: AddAssetImageRegistryRegistryDetailRequest, cb?: (error: string, rep: AddAssetImageRegistryRegistryDetailResponse) => void): Promise<AddAssetImageRegistryRegistryDetailResponse>;
    /**
     * 运行时文件查杀事件列表
     */
    DescribeVirusList(req: DescribeVirusListRequest, cb?: (error: string, rep: DescribeVirusListResponse) => void): Promise<DescribeVirusListResponse>;
    /**
     * 镜像仓库资产刷新
     */
    SyncAssetImageRegistryAsset(req?: SyncAssetImageRegistryAssetRequest, cb?: (error: string, rep: SyncAssetImageRegistryAssetResponse) => void): Promise<SyncAssetImageRegistryAssetResponse>;
    /**
     * 查询本地镜像风险概览
     */
    DescribeImageRiskSummary(req?: DescribeImageRiskSummaryRequest, cb?: (error: string, rep: DescribeImageRiskSummaryResponse) => void): Promise<DescribeImageRiskSummaryResponse>;
    /**
     * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
     */
    ScanCompliancePolicyItems(req: ScanCompliancePolicyItemsRequest, cb?: (error: string, rep: ScanCompliancePolicyItemsResponse) => void): Promise<ScanCompliancePolicyItemsResponse>;
    /**
     * 运行时文件查杀重新检测
     */
    CreateVirusScanAgain(req: CreateVirusScanAgainRequest, cb?: (error: string, rep: CreateVirusScanAgainResponse) => void): Promise<CreateVirusScanAgainResponse>;
    /**
     * 查询容器安全未处理事件信息
     */
    DescribeContainerSecEventSummary(req?: DescribeContainerSecEventSummaryRequest, cb?: (error: string, rep: DescribeContainerSecEventSummaryResponse) => void): Promise<DescribeContainerSecEventSummaryResponse>;
    /**
     * 查询最近一次任务发现的检测项的汇总信息列表，按照 检测项 → 资产 的两级层次展开。
     */
    DescribeComplianceTaskPolicyItemSummaryList(req: DescribeComplianceTaskPolicyItemSummaryListRequest, cb?: (error: string, rep: DescribeComplianceTaskPolicyItemSummaryListResponse) => void): Promise<DescribeComplianceTaskPolicyItemSummaryListResponse>;
    /**
     * 容器安全搜索查询镜像列表
     */
    DescribeAssetImageList(req: DescribeAssetImageListRequest, cb?: (error: string, rep: DescribeAssetImageListResponse) => void): Promise<DescribeAssetImageListResponse>;
    /**
     * 查询运行时反弹shell事件列表信息
     */
    DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse>;
    /**
     * 运行时更新木马文件事件状态
     */
    ModifyVirusFileStatus(req: ModifyVirusFileStatusRequest, cb?: (error: string, rep: ModifyVirusFileStatusResponse) => void): Promise<ModifyVirusFileStatusResponse>;
    /**
     * 镜像仓库创建镜像扫描任务
     */
    CreateAssetImageRegistryScanTask(req: CreateAssetImageRegistryScanTaskRequest, cb?: (error: string, rep: CreateAssetImageRegistryScanTaskResponse) => void): Promise<CreateAssetImageRegistryScanTaskResponse>;
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
     * 查询运行时访问控制事件的详细信息
     */
    DescribeAccessControlDetail(req: DescribeAccessControlDetailRequest, cb?: (error: string, rep: DescribeAccessControlDetailResponse) => void): Promise<DescribeAccessControlDetailResponse>;
    /**
     * 镜像仓库镜像仓库列表
     */
    DescribeAssetImageRegistryList(req: DescribeAssetImageRegistryListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryListResponse) => void): Promise<DescribeAssetImageRegistryListResponse>;
    /**
     * 容器安全搜索查询进程列表
     */
    DescribeAssetProcessList(req: DescribeAssetProcessListRequest, cb?: (error: string, rep: DescribeAssetProcessListResponse) => void): Promise<DescribeAssetProcessListResponse>;
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
     * 设置检测模式和自动检查
     */
    SetCheckMode(req: SetCheckModeRequest, cb?: (error: string, rep: SetCheckModeResponse) => void): Promise<SetCheckModeResponse>;
    /**
     * 从白名单中删除将指定的检测项。
     */
    DeleteCompliancePolicyItemFromWhitelist(req: DeleteCompliancePolicyItemFromWhitelistRequest, cb?: (error: string, rep: DeleteCompliancePolicyItemFromWhitelistResponse) => void): Promise<DeleteCompliancePolicyItemFromWhitelistResponse>;
    /**
     * 运行时查询文件查杀设置
     */
    DescribeVirusScanSetting(req?: DescribeVirusScanSettingRequest, cb?: (error: string, rep: DescribeVirusScanSettingResponse) => void): Promise<DescribeVirusScanSettingResponse>;
    /**
     * 查询某类资产的列表
     */
    DescribeComplianceAssetList(req: DescribeComplianceAssetListRequest, cb?: (error: string, rep: DescribeComplianceAssetListResponse) => void): Promise<DescribeComplianceAssetListResponse>;
    /**
     * 按照 检测项 → 资产 的两级层次展开的第二层级：资产层级。
     */
    DescribeCompliancePolicyItemAffectedAssetList(req: DescribeCompliancePolicyItemAffectedAssetListRequest, cb?: (error: string, rep: DescribeCompliancePolicyItemAffectedAssetListResponse) => void): Promise<DescribeCompliancePolicyItemAffectedAssetListResponse>;
    /**
     * 容器安全主机资产刷新
     */
    ModifyAsset(req: ModifyAssetRequest, cb?: (error: string, rep: ModifyAssetResponse) => void): Promise<ModifyAssetResponse>;
    /**
     * CreateOrModifyPostPayCores  创建或者编辑弹性计费上限
     */
    CreateOrModifyPostPayCores(req: CreateOrModifyPostPayCoresRequest, cb?: (error: string, rep: CreateOrModifyPostPayCoresResponse) => void): Promise<CreateOrModifyPostPayCoresResponse>;
    /**
     * 查询运行时异常进程事件详细信息
     */
    DescribeAbnormalProcessDetail(req: DescribeAbnormalProcessDetailRequest, cb?: (error: string, rep: DescribeAbnormalProcessDetailResponse) => void): Promise<DescribeAbnormalProcessDetailResponse>;
    /**
     * RenewImageAuthorizeState   授权镜像扫描
     */
    RenewImageAuthorizeState(req: RenewImageAuthorizeStateRequest, cb?: (error: string, rep: RenewImageAuthorizeStateResponse) => void): Promise<RenewImageAuthorizeStateResponse>;
    /**
     * 镜像仓库停止镜像一键扫描任务
     */
    ModifyAssetImageRegistryScanStopOneKey(req: ModifyAssetImageRegistryScanStopOneKeyRequest, cb?: (error: string, rep: ModifyAssetImageRegistryScanStopOneKeyResponse) => void): Promise<ModifyAssetImageRegistryScanStopOneKeyResponse>;
    /**
     * 查询运行时访问控制策略详细信息
     */
    DescribeAccessControlRuleDetail(req: DescribeAccessControlRuleDetailRequest, cb?: (error: string, rep: DescribeAccessControlRuleDetailResponse) => void): Promise<DescribeAccessControlRuleDetailResponse>;
    /**
     * 查询节点类型的影响范围，返回节点列表
     */
    DescribeAffectedNodeList(req: DescribeAffectedNodeListRequest, cb?: (error: string, rep: DescribeAffectedNodeListResponse) => void): Promise<DescribeAffectedNodeListResponse>;
    /**
     * 查询运行时访问控制事件列表导出
     */
    DescribeAccessControlEventsExport(req: DescribeAccessControlEventsExportRequest, cb?: (error: string, rep: DescribeAccessControlEventsExportResponse) => void): Promise<DescribeAccessControlEventsExportResponse>;
    /**
     * 修改反弹shell事件的状态信息
     */
    ModifyReverseShellStatus(req: ModifyReverseShellStatusRequest, cb?: (error: string, rep: ModifyReverseShellStatusResponse) => void): Promise<ModifyReverseShellStatusResponse>;
    /**
     * 添加编辑告警策略
     */
    AddEditWarningRules(req: AddEditWarningRulesRequest, cb?: (error: string, rep: AddEditWarningRulesResponse) => void): Promise<AddEditWarningRulesResponse>;
    /**
     * 容器安全搜索查询镜像风险列表导出
     */
    DescribeAssetImageRiskListExport(req: DescribeAssetImageRiskListExportRequest, cb?: (error: string, rep: DescribeAssetImageRiskListExportResponse) => void): Promise<DescribeAssetImageRiskListExportResponse>;
    /**
     * 查询运行时访问控制策略列表导出
     */
    DescribeAccessControlRulesExport(req: DescribeAccessControlRulesExportRequest, cb?: (error: string, rep: DescribeAccessControlRulesExportResponse) => void): Promise<DescribeAccessControlRulesExportResponse>;
    /**
     * 查询最近一次任务发现的风险项的信息列表，支持根据特殊字段进行过滤
     */
    DescribeRiskList(req: DescribeRiskListRequest, cb?: (error: string, rep: DescribeRiskListResponse) => void): Promise<DescribeRiskListResponse>;
    /**
     * 容器安全查询镜像漏洞列表
     */
    DescribeAssetImageVulList(req: DescribeAssetImageVulListRequest, cb?: (error: string, rep: DescribeAssetImageVulListResponse) => void): Promise<DescribeAssetImageVulListResponse>;
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
     * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
     */
    ModifyCompliancePeriodTask(req: ModifyCompliancePeriodTaskRequest, cb?: (error: string, rep: ModifyCompliancePeriodTaskResponse) => void): Promise<ModifyCompliancePeriodTaskResponse>;
    /**
     * 镜像仓库查询镜像统计信息
     */
    DescribeAssetImageRegistrySummary(req?: DescribeAssetImageRegistrySummaryRequest, cb?: (error: string, rep: DescribeAssetImageRegistrySummaryResponse) => void): Promise<DescribeAssetImageRegistrySummaryResponse>;
    /**
     * 查询运行时异常进程策略列表信息
     */
    DescribeAbnormalProcessRules(req: DescribeAbnormalProcessRulesRequest, cb?: (error: string, rep: DescribeAbnormalProcessRulesResponse) => void): Promise<DescribeAbnormalProcessRulesResponse>;
    /**
     * 容器安全查询db服务列表
     */
    DescribeAssetDBServiceList(req: DescribeAssetDBServiceListRequest, cb?: (error: string, rep: DescribeAssetDBServiceListResponse) => void): Promise<DescribeAssetDBServiceListResponse>;
    /**
     * 查询运行时运行时高危系统调用列表信息
     */
    DescribeRiskSyscallEvents(req: DescribeRiskSyscallEventsRequest, cb?: (error: string, rep: DescribeRiskSyscallEventsResponse) => void): Promise<DescribeRiskSyscallEventsResponse>;
    /**
     * 删除运行时高危系统调用白名单
     */
    DeleteRiskSyscallWhiteLists(req: DeleteRiskSyscallWhiteListsRequest, cb?: (error: string, rep: DeleteRiskSyscallWhiteListsResponse) => void): Promise<DeleteRiskSyscallWhiteListsResponse>;
    /**
     * 添加编辑运行时访问控制策略
     */
    AddEditAccessControlRule(req: AddEditAccessControlRuleRequest, cb?: (error: string, rep: AddEditAccessControlRuleResponse) => void): Promise<AddEditAccessControlRuleResponse>;
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
     * 查询账户容器、镜像等统计信息
     */
    DescribeAssetSummary(req?: DescribeAssetSummaryRequest, cb?: (error: string, rep: DescribeAssetSummaryResponse) => void): Promise<DescribeAssetSummaryResponse>;
    /**
     * 运行时文件查杀事件列表导出
     */
    ExportVirusList(req: ExportVirusListRequest, cb?: (error: string, rep: ExportVirusListResponse) => void): Promise<ExportVirusListResponse>;
    /**
     * 容器安全查询web服务列表
     */
    DescribeAssetWebServiceList(req: DescribeAssetWebServiceListRequest, cb?: (error: string, rep: DescribeAssetWebServiceListResponse) => void): Promise<DescribeAssetWebServiceListResponse>;
    /**
     * 检查单个镜像仓库名是否重复
     */
    CheckRepeatAssetImageRegistry(req: CheckRepeatAssetImageRegistryRequest, cb?: (error: string, rep: CheckRepeatAssetImageRegistryResponse) => void): Promise<CheckRepeatAssetImageRegistryResponse>;
    /**
     * 添加编辑运行时异常进程策略
     */
    AddEditAbnormalProcessRule(req: AddEditAbnormalProcessRuleRequest, cb?: (error: string, rep: AddEditAbnormalProcessRuleResponse) => void): Promise<AddEditAbnormalProcessRuleResponse>;
    /**
     * 查询主机详细信息
     */
    DescribeAssetHostDetail(req: DescribeAssetHostDetailRequest, cb?: (error: string, rep: DescribeAssetHostDetailResponse) => void): Promise<DescribeAssetHostDetailResponse>;
    /**
     * 容器安全查询镜像关联主机
     */
    DescribeAssetImageHostList(req: DescribeAssetImageHostListRequest, cb?: (error: string, rep: DescribeAssetImageHostListResponse) => void): Promise<DescribeAssetImageHostListResponse>;
    /**
     * 查询运行时高危系统调用白名单列表信息
     */
    DescribeRiskSyscallWhiteLists(req: DescribeRiskSyscallWhiteListsRequest, cb?: (error: string, rep: DescribeRiskSyscallWhiteListsResponse) => void): Promise<DescribeRiskSyscallWhiteListsResponse>;
    /**
     * 镜像仓库查询镜像漏洞列表
     */
    DescribeAssetImageRegistryVulList(req: DescribeAssetImageRegistryVulListRequest, cb?: (error: string, rep: DescribeAssetImageRegistryVulListResponse) => void): Promise<DescribeAssetImageRegistryVulListResponse>;
    /**
     * 运行时查询文件查杀任务状态
     */
    DescribeVirusScanTaskStatus(req: DescribeVirusScanTaskStatusRequest, cb?: (error: string, rep: DescribeVirusScanTaskStatusResponse) => void): Promise<DescribeVirusScanTaskStatusResponse>;
    /**
     * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
     */
    ScanComplianceAssetsByPolicyItem(req: ScanComplianceAssetsByPolicyItemRequest, cb?: (error: string, rep: ScanComplianceAssetsByPolicyItemResponse) => void): Promise<ScanComplianceAssetsByPolicyItemResponse>;
    /**
     * 查询镜像详细信息
     */
    DescribeAssetImageDetail(req: DescribeAssetImageDetailRequest, cb?: (error: string, rep: DescribeAssetImageDetailResponse) => void): Promise<DescribeAssetImageDetailResponse>;
    /**
     * 查询容器运行时安全事件趋势
     */
    DescribeSecEventsTendency(req: DescribeSecEventsTendencyRequest, cb?: (error: string, rep: DescribeSecEventsTendencyResponse) => void): Promise<DescribeSecEventsTendencyResponse>;
}
