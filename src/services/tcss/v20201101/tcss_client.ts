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
  UpdateImageRegistryTimingScanTaskResponse,
  DescribeUnfinishRefreshTaskResponse,
  ComplianceBenchmarkStandardEnable,
  DescribeRiskSyscallWhiteListsResponse,
  CreateRefreshTaskResponse,
  ImageVirusInfo,
  AbnormalProcessEventDescription,
  CompliancePeriodTaskRule,
  DescribeVirusScanTimeoutSettingResponse,
  ClusterCreateComponentItem,
  DescribeAssetComponentListResponse,
  DescribeAssetImageRegistryVulListResponse,
  AddAssetImageRegistryRegistryDetailResponse,
  DeleteCompliancePolicyItemFromWhitelistRequest,
  DescribeAssetImageDetailRequest,
  ModifyAssetImageScanStopResponse,
  DescribeComplianceScanFailedAssetListResponse,
  SyncAssetImageRegistryAssetResponse,
  DescribeAssetImageRegistryVirusListExportResponse,
  DescribeSecEventsTendencyResponse,
  DescribeAccessControlEventsExportResponse,
  AddEditAbnormalProcessRuleRequest,
  DescribeComplianceTaskAssetSummaryRequest,
  ModifyAssetImageRegistryScanStopResponse,
  DescribeProVersionInfoRequest,
  SetCheckModeResponse,
  DescribeAssetImageScanStatusResponse,
  DescribeAbnormalProcessRulesExportRequest,
  DescribePurchaseStateInfoResponse,
  ModifyVirusFileStatusResponse,
  DescribeAssetImageRegistryRegistryDetailResponse,
  RunTimeFilters,
  DescribeVirusDetailRequest,
  DescribeClusterDetailRequest,
  DescribeAssetImageListRequest,
  DescribeRiskSyscallWhiteListDetailRequest,
  ModifyAbnormalProcessRuleStatusRequest,
  ProcessDetailInfo,
  ScanCompliancePolicyItemsRequest,
  DescribeAssetImageVirusListExportRequest,
  CreateAssetImageScanTaskResponse,
  DescribeTaskResultSummaryRequest,
  DeleteAccessControlRulesRequest,
  ComplianceK8SDetailInfo,
  AccessControlEventDescription,
  DescribeAccessControlEventsResponse,
  ProcessBaseInfo,
  ComplianceAssetDetailInfo,
  DescribeRiskSyscallEventsResponse,
  DescribeAssetImageRiskListResponse,
  DescribeReverseShellEventsResponse,
  ImageSimpleInfo,
  DescribeComplianceAssetDetailInfoRequest,
  CreateExportComplianceStatusListJobResponse,
  DescribeAssetAppServiceListResponse,
  ComplianceBenchmarkStandard,
  DescribeEscapeRuleInfoResponse,
  DescribePurchaseStateInfoRequest,
  AddCompliancePolicyItemToWhitelistRequest,
  ComplianceAssetSummary,
  EscapeRule,
  CompliancePeriodTask,
  RemoveAssetImageRegistryRegistryDetailResponse,
  UpdateAssetImageRegistryRegistryDetailResponse,
  DeleteAbnormalProcessRulesResponse,
  RuleBaseInfo,
  ProcessInfo,
  DescribeReverseShellDetailRequest,
  ModifyReverseShellStatusRequest,
  DescribeAssetImageRiskListExportRequest,
  DescribeAffectedWorkloadListRequest,
  DescribeAffectedClusterCountRequest,
  DescribeAssetImageRegistryVulListExportRequest,
  AddEditRiskSyscallWhiteListRequest,
  ReverseShellEventInfo,
  DescribeRiskSyscallDetailRequest,
  DescribeAbnormalProcessRulesRequest,
  DescribeAssetImageRegistryListResponse,
  ExportVirusListResponse,
  DescribeAssetImageVirusListResponse,
  DescribeImageRiskSummaryRequest,
  ModifyReverseShellStatusResponse,
  CreateAssetImageScanSettingRequest,
  DescribeAssetSummaryResponse,
  DescribeImageRegistryTimingScanTaskResponse,
  DescribeAssetWebServiceListRequest,
  ModifyEscapeEventStatusResponse,
  CheckRepeatAssetImageRegistryResponse,
  DescribeAccessControlEventsExportRequest,
  DescribeRiskSyscallDetailResponse,
  ReverseShellEventDescription,
  DescribeAssetImageBindRuleInfoResponse,
  ScanCompliancePolicyItemsResponse,
  DescribeAssetContainerListRequest,
  DescribeEscapeSafeStateResponse,
  AbnormalProcessRuleInfo,
  ScanComplianceAssetsByPolicyItemResponse,
  ComplianceWhitelistItem,
  DescribeAssetPortListRequest,
  DescribeComplianceTaskPolicyItemSummaryListResponse,
  ComplianceContainerDetailInfo,
  DescribeReverseShellEventsRequest,
  DescribeAbnormalProcessRuleDetailRequest,
  SyncAssetImageRegistryAssetRequest,
  ClusterCheckTaskItem,
  DescribeAffectedClusterCountResponse,
  RenewImageAuthorizeStateRequest,
  CreateAssetImageRegistryScanTaskOneKeyRequest,
  ModifyEscapeEventStatusRequest,
  DescribeAssetImageBindRuleInfoRequest,
  ImageHost,
  DescribeAssetContainerListResponse,
  DescribeVirusMonitorSettingResponse,
  DescribeContainerSecEventSummaryRequest,
  DescribeAssetImageRegistrySummaryResponse,
  DescribeImageAuthorizedInfoResponse,
  DescribeAbnormalProcessEventsRequest,
  ModifyAbnormalProcessRuleStatusResponse,
  DescribeVirusListRequest,
  DescribeComplianceAssetListRequest,
  ModifyVirusScanSettingResponse,
  ImagesVul,
  ModifyVirusMonitorSettingRequest,
  ScanComplianceAssetsByPolicyItemRequest,
  DescribeEscapeEventInfoResponse,
  ClusterInfoItem,
  AddAssetImageRegistryRegistryDetailRequest,
  DescribeAssetImageHostListRequest,
  AbnormalProcessEventInfo,
  DescribeCompliancePeriodTaskListResponse,
  DescribeAssetImageScanSettingRequest,
  AccessControlSystemChildRuleInfo,
  AccessControlEventInfo,
  DescribeClusterSummaryResponse,
  DescribeValueAddedSrvInfoRequest,
  DescribeCompliancePolicyItemAffectedSummaryResponse,
  ModifyRiskSyscallStatusResponse,
  RunTimeEventBaseInfo,
  DescribeReverseShellWhiteListsResponse,
  ModifyAssetImageRegistryScanStopOneKeyRequest,
  DescribeExportJobResultRequest,
  ImageInfo,
  DescribeAffectedWorkloadListResponse,
  CreateComplianceTaskResponse,
  ImageRiskTendencyInfo,
  ModifyAssetRequest,
  DescribeRiskListRequest,
  ModifyAccessControlStatusResponse,
  ContainerNetwork,
  DescribeAssetAppServiceListRequest,
  RemoveAssetImageRegistryRegistryDetailRequest,
  ModifyVirusScanSettingRequest,
  DescribeAssetDBServiceListRequest,
  DescribeProVersionInfoResponse,
  AddEditAbnormalProcessRuleResponse,
  DescribeAssetImageRegistryListRequest,
  CreateCheckComponentResponse,
  DescribeImageRegistryTimingScanTaskRequest,
  DescribeRiskSyscallWhiteListDetailResponse,
  DescribeReverseShellWhiteListsRequest,
  ScanComplianceAssetsResponse,
  CreateComplianceTaskRequest,
  DescribeReverseShellWhiteListDetailResponse,
  DescribeAssetImageVulListExportResponse,
  DescribeAssetImageRegistryRiskListExportRequest,
  EscapeEventDescription,
  DescribeAssetImageDetailResponse,
  CreateAssetImageRegistryScanTaskOneKeyResponse,
  AbnormalProcessSystemChildRuleInfo,
  DescribeAssetImageVulListExportRequest,
  DescribeExportJobResultResponse,
  ReverseShellWhiteListBaseInfo,
  AccessControlRuleInfo,
  DescribeAssetHostListResponse,
  ImageRepoInfo,
  CreateAssetImageRegistryScanTaskResponse,
  PortInfo,
  DescribeAssetImageRegistrySummaryRequest,
  DescribeTaskResultSummaryResponse,
  HostInfo,
  DescribeVirusScanTimeoutSettingRequest,
  ModifyAssetImageScanStopRequest,
  CreateRefreshTaskRequest,
  DescribeAssetImageRiskListExportResponse,
  DescribeAccessControlEventsRequest,
  DescribeAccessControlRuleDetailRequest,
  ExportVirusListRequest,
  ImageRiskInfo,
  DeleteReverseShellWhiteListsResponse,
  ComplianceHostDetailInfo,
  AccessControlChildRuleInfo,
  DescribeRiskSyscallNamesResponse,
  AddEditReverseShellWhiteListResponse,
  DescribeAbnormalProcessEventsResponse,
  InitializeUserComplianceEnvironmentResponse,
  SetCheckModeRequest,
  DescribeVirusTaskListResponse,
  DescribeAssetHostDetailResponse,
  DescribeAffectedNodeListResponse,
  DescribeClusterSummaryRequest,
  DescribeAbnormalProcessRulesExportResponse,
  DescribeEscapeEventDetailResponse,
  DeleteAccessControlRulesResponse,
  RenewImageAuthorizeStateResponse,
  DescribeEscapeRuleInfoRequest,
  DescribeComplianceWhitelistItemListResponse,
  DescribeVirusSummaryResponse,
  UpdateImageRegistryTimingScanTaskRequest,
  DescribeSecEventsTendencyRequest,
  DescribeContainerSecEventSummaryResponse,
  DescribeAssetContainerDetailRequest,
  ModifyAccessControlStatusRequest,
  ScanComplianceScanFailedAssetsRequest,
  ModifyCompliancePeriodTaskResponse,
  RiskSyscallEventInfo,
  ClusterCheckItem,
  DescribeAssetImageVulListResponse,
  ImageVul,
  AssetFilters,
  DescribePostPayDetailResponse,
  DescribeAssetImageScanStatusRequest,
  DescribeCheckItemListResponse,
  ComplianceScanFailedAsset,
  ScanComplianceAssetsRequest,
  DescribeAbnormalProcessRuleDetailResponse,
  ModifyVirusFileStatusRequest,
  DescribeAssetImageRegistryListExportRequest,
  DescribeAssetImageRegistryRiskListExportResponse,
  ModifyEscapeRuleRequest,
  DescribeAbnormalProcessRulesResponse,
  DescribeCheckItemListRequest,
  DescribeVirusScanSettingResponse,
  DescribeAccessControlRuleDetailResponse,
  CreateOrModifyPostPayCoresRequest,
  DescribeAssetImageScanTaskRequest,
  DescribeValueAddedSrvInfoResponse,
  CreateVirusScanTaskResponse,
  DescribeAssetProcessListRequest,
  DescribeAssetProcessListResponse,
  EscapeEventInfo,
  ModifyVirusScanTimeoutSettingResponse,
  DescribeAssetImageRegistryDetailRequest,
  CreateAssetImageRegistryScanTaskRequest,
  DescribeAssetImageListExportResponse,
  DescribeAssetContainerDetailResponse,
  AbnormalProcessChildRuleInfo,
  ScanComplianceScanFailedAssetsResponse,
  DescribeAssetImageVirusListExportResponse,
  SecTendencyEventInfo,
  DescribeAssetPortListResponse,
  DescribeRefreshTaskRequest,
  CreateClusterCheckTaskResponse,
  DescribeCompliancePolicyItemAffectedAssetListRequest,
  DescribeImageRiskTendencyRequest,
  CreateOrModifyPostPayCoresResponse,
  ComplianceAffectedAsset,
  DescribeVirusMonitorSettingRequest,
  DescribeAssetImageHostListResponse,
  DescribeImageRiskTendencyResponse,
  DescribeComplianceScanFailedAssetListRequest,
  DescribeAssetImageRegistryVulListRequest,
  DescribeImageSimpleListResponse,
  DescribeVirusScanSettingRequest,
  DescribeUserClusterResponse,
  DescribeAssetImageRegistryRegistryListRequest,
  DescribeVirusScanTaskStatusResponse,
  DescribeEscapeEventsExportResponse,
  ComplianceImageDetailInfo,
  DescribeComplianceWhitelistItemListRequest,
  DescribeAccessControlDetailRequest,
  ClusterRiskItem,
  DescribeVirusListResponse,
  DescribeAbnormalProcessEventsExportRequest,
  DescribeAssetComponentListRequest,
  DescribeUserClusterRequest,
  DescribeAbnormalProcessDetailResponse,
  DescribeAssetImageListExportRequest,
  ModifyAssetImageRegistryScanStopOneKeyResponse,
  DescribeRiskSyscallNamesRequest,
  SoftQuotaDayInfo,
  DescribeAssetImageRegistryVirusListResponse,
  DescribeAssetImageSimpleListRequest,
  DescribeAssetDBServiceListResponse,
  DescribeImageSimpleListRequest,
  DescribeAssetWebServiceListResponse,
  DescribeComplianceTaskPolicyItemSummaryListRequest,
  CompliancePolicyItemSummary,
  DescribeAssetImageVulListRequest,
  ModifyRiskSyscallStatusRequest,
  RunTimeRiskInfo,
  CreateVirusScanTaskRequest,
  DescribeAssetImageScanTaskResponse,
  AddEditAccessControlRuleRequest,
  ContainerMount,
  DescribeAssetImageSimpleListResponse,
  DescribeComplianceAssetPolicyItemListResponse,
  ComplianceFilters,
  ImagesInfo,
  DescribeReverseShellEventsExportRequest,
  WarningRule,
  DescribeAccessControlDetailResponse,
  DescribeAffectedNodeListRequest,
  DescribeAssetImageRegistryAssetStatusResponse,
  DeleteReverseShellWhiteListsRequest,
  AddEditRiskSyscallWhiteListResponse,
  ModifyAbnormalProcessStatusRequest,
  ModifyAccessControlRuleStatusResponse,
  ImageRisk,
  DescribeClusterDetailResponse,
  ComplianceAssetPolicyItem,
  InitializeUserComplianceEnvironmentRequest,
  DescribeAssetImageRiskListRequest,
  DescribeEscapeSafeStateRequest,
  StopVirusScanTaskRequest,
  DescribeEscapeEventDetailRequest,
  DescribeVirusSummaryRequest,
  RiskSyscallWhiteListBaseInfo,
  DeleteAbnormalProcessRulesRequest,
  ModifyCompliancePeriodTaskRequest,
  DescribeRiskSyscallEventsRequest,
  DescribeRiskListResponse,
  ComponentInfo,
  DescribeAssetSummaryRequest,
  CreateClusterCheckTaskRequest,
  DescribeAbnormalProcessDetailRequest,
  CreateExportComplianceStatusListJobRequest,
  ImageVirus,
  DescribeEscapeEventInfoRequest,
  DescribeRiskSyscallEventsExportResponse,
  ContainerInfo,
  DescribeAssetImageRegistryRiskInfoListRequest,
  DescribeAssetImageRegistryScanStatusOneKeyRequest,
  ModifyAccessControlRuleStatusRequest,
  DescribeWarningRulesRequest,
  RunTimeTendencyInfo,
  DescribeContainerAssetSummaryRequest,
  ComponentsInfo,
  DeleteRiskSyscallWhiteListsResponse,
  DescribeAssetImageVirusListRequest,
  DescribeAssetImageScanSettingResponse,
  DescribeReverseShellDetailResponse,
  DescribeAccessControlRulesExportResponse,
  ModifyAbnormalProcessStatusResponse,
  DescribeAbnormalProcessEventsExportResponse,
  DescribeContainerAssetSummaryResponse,
  CreateAssetImageScanTaskRequest,
  DescribeEscapeEventsExportRequest,
  DescribeImageRiskSummaryResponse,
  CheckRepeatAssetImageRegistryRequest,
  AffectedNodeItem,
  CreateCheckComponentRequest,
  DeleteRiskSyscallWhiteListsRequest,
  DescribeImageAuthorizedInfoRequest,
  DescribeAssetImageRegistryRiskInfoListResponse,
  DescribeAssetImageRegistryDetailResponse,
  AddCompliancePolicyItemToWhitelistResponse,
  DescribeAccessControlRulesRequest,
  StopVirusScanTaskResponse,
  AddEditWarningRulesRequest,
  ModifyAssetResponse,
  DescribeReverseShellEventsExportResponse,
  ImagesBindRuleInfo,
  DescribeAssetImageListResponse,
  ComplianceAssetInfo,
  DescribeAssetImageRegistryVirusListRequest,
  DescribeReverseShellWhiteListDetailRequest,
  ModifyVirusMonitorSettingResponse,
  DescribeComplianceTaskAssetSummaryResponse,
  DescribeWarningRulesResponse,
  VirusTaskInfo,
  AffectedWorkloadItem,
  DescribeCompliancePeriodTaskListRequest,
  DescribeAccessControlRulesExportRequest,
  RiskSyscallEventDescription,
  AddEditWarningRulesResponse,
  DescribeAssetImageRegistryRegistryListResponse,
  DescribeAssetImageRegistryAssetStatusRequest,
  ImageProgress,
  ModifyVirusScanTimeoutSettingRequest,
  CreateVirusScanAgainResponse,
  AddEditAccessControlRuleResponse,
  DeleteCompliancePolicyItemFromWhitelistResponse,
  CreateAssetImageScanSettingResponse,
  DescribeAccessControlRulesResponse,
  ModifyEscapeRuleResponse,
  AssetSimpleImageInfo,
  DescribeCompliancePolicyItemAffectedSummaryRequest,
  DescribeVirusDetailResponse,
  DescribeComplianceAssetListResponse,
  DescribeComplianceAssetDetailInfoResponse,
  ModifyAssetImageRegistryScanStopRequest,
  DescribeVirusScanTaskStatusRequest,
  RiskSyscallWhiteListInfo,
  DescribeCompliancePolicyItemAffectedAssetListResponse,
  DescribeComplianceAssetPolicyItemListRequest,
  DescribeAssetImageRegistryVulListExportResponse,
  ProcessDetailBaseInfo,
  DescribeAssetHostListRequest,
  DescribeRiskSyscallEventsExportRequest,
  DescribeRiskSyscallWhiteListsRequest,
  DescribeUnfinishRefreshTaskRequest,
  DescribeAssetImageRegistryScanStatusOneKeyResponse,
  DescribeAssetImageRegistryRegistryDetailRequest,
  UpdateAssetImageRegistryRegistryDetailRequest,
  ServiceInfo,
  AddEditReverseShellWhiteListRequest,
  DescribeVirusTaskListRequest,
  DescribeAssetImageRegistryVirusListExportRequest,
  DescribeAssetImageRegistryListExportResponse,
  FileAttributeInfo,
  DescribePostPayDetailRequest,
  DescribeAssetHostDetailRequest,
  DescribeRefreshTaskResponse,
  ReverseShellWhiteListInfo,
  VirusInfo,
  EscapeRuleEnabled,
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
   * 查询运行时异常进程事件列表信息导出
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
   * 修改运行时访问控制策略的状态，启用或者禁用
   */
  async ModifyAccessControlRuleStatus(
    req: ModifyAccessControlRuleStatusRequest,
    cb?: (error: string, rep: ModifyAccessControlRuleStatusResponse) => void
  ): Promise<ModifyAccessControlRuleStatusResponse> {
    return this.request("ModifyAccessControlRuleStatus", req, cb)
  }

  /**
   * 查询运行时异常进程策略列表信息导出
   */
  async DescribeAbnormalProcessRulesExport(
    req: DescribeAbnormalProcessRulesExportRequest,
    cb?: (error: string, rep: DescribeAbnormalProcessRulesExportResponse) => void
  ): Promise<DescribeAbnormalProcessRulesExportResponse> {
    return this.request("DescribeAbnormalProcessRulesExport", req, cb)
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
   * 镜像仓库查看定时任务
   */
  async DescribeImageRegistryTimingScanTask(
    req?: DescribeImageRegistryTimingScanTaskRequest,
    cb?: (error: string, rep: DescribeImageRegistryTimingScanTaskResponse) => void
  ): Promise<DescribeImageRegistryTimingScanTaskResponse> {
    return this.request("DescribeImageRegistryTimingScanTask", req, cb)
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
   * 搜索查询容器列表
   */
  async DescribeAssetContainerList(
    req: DescribeAssetContainerListRequest,
    cb?: (error: string, rep: DescribeAssetContainerListResponse) => void
  ): Promise<DescribeAssetContainerListResponse> {
    return this.request("DescribeAssetContainerList", req, cb)
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
    req?: CreateRefreshTaskRequest,
    cb?: (error: string, rep: CreateRefreshTaskResponse) => void
  ): Promise<CreateRefreshTaskResponse> {
    return this.request("CreateRefreshTask", req, cb)
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
   * 查询workload类型的影响范围，返回workload列表
   */
  async DescribeAffectedWorkloadList(
    req: DescribeAffectedWorkloadListRequest,
    cb?: (error: string, rep: DescribeAffectedWorkloadListResponse) => void
  ): Promise<DescribeAffectedWorkloadListResponse> {
    return this.request("DescribeAffectedWorkloadList", req, cb)
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
   * 运行时查询文件查杀实时监控设置
   */
  async DescribeVirusMonitorSetting(
    req?: DescribeVirusMonitorSettingRequest,
    cb?: (error: string, rep: DescribeVirusMonitorSettingResponse) => void
  ): Promise<DescribeVirusMonitorSettingResponse> {
    return this.request("DescribeVirusMonitorSetting", req, cb)
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
   * 运行时更新文件查杀设置
   */
  async ModifyVirusScanSetting(
    req: ModifyVirusScanSettingRequest,
    cb?: (error: string, rep: ModifyVirusScanSettingResponse) => void
  ): Promise<ModifyVirusScanSettingResponse> {
    return this.request("ModifyVirusScanSetting", req, cb)
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
   * 获取受影响的集群数量，返回数量
   */
  async DescribeAffectedClusterCount(
    req?: DescribeAffectedClusterCountRequest,
    cb?: (error: string, rep: DescribeAffectedClusterCountResponse) => void
  ): Promise<DescribeAffectedClusterCountResponse> {
    return this.request("DescribeAffectedClusterCount", req, cb)
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
   * DescribeEscapeEventInfo 查询容器逃逸事件列表
   */
  async DescribeEscapeEventInfo(
    req: DescribeEscapeEventInfoRequest,
    cb?: (error: string, rep: DescribeEscapeEventInfoResponse) => void
  ): Promise<DescribeEscapeEventInfoResponse> {
    return this.request("DescribeEscapeEventInfo", req, cb)
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
    req?: DescribeAssetImageRegistryRegistryListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRegistryListResponse) => void
  ): Promise<DescribeAssetImageRegistryRegistryListResponse> {
    return this.request("DescribeAssetImageRegistryRegistryList", req, cb)
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
   * 容器安全停止镜像扫描
   */
  async ModifyAssetImageScanStop(
    req: ModifyAssetImageScanStopRequest,
    cb?: (error: string, rep: ModifyAssetImageScanStopResponse) => void
  ): Promise<ModifyAssetImageScanStopResponse> {
    return this.request("ModifyAssetImageScanStop", req, cb)
  }

  /**
   * DescribeEscapeEventsExport  查询容器逃逸事件列表导出
   */
  async DescribeEscapeEventsExport(
    req: DescribeEscapeEventsExportRequest,
    cb?: (error: string, rep: DescribeEscapeEventsExportResponse) => void
  ): Promise<DescribeEscapeEventsExportResponse> {
    return this.request("DescribeEscapeEventsExport", req, cb)
  }

  /**
   * 容器安全搜索查询镜像列表导出
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
   * 查询运行时高危系统调用系统名称列表
   */
  async DescribeRiskSyscallNames(
    req?: DescribeRiskSyscallNamesRequest,
    cb?: (error: string, rep: DescribeRiskSyscallNamesResponse) => void
  ): Promise<DescribeRiskSyscallNamesResponse> {
    return this.request("DescribeRiskSyscallNames", req, cb)
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
   * 运行时高危系统调用列表导出
   */
  async DescribeRiskSyscallEventsExport(
    req: DescribeRiskSyscallEventsExportRequest,
    cb?: (error: string, rep: DescribeRiskSyscallEventsExportResponse) => void
  ): Promise<DescribeRiskSyscallEventsExportResponse> {
    return this.request("DescribeRiskSyscallEventsExport", req, cb)
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
   * 查看单个镜像仓库详细信息
   */
  async DescribeAssetImageRegistryRegistryDetail(
    req: DescribeAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<DescribeAssetImageRegistryRegistryDetailResponse> {
    return this.request("DescribeAssetImageRegistryRegistryDetail", req, cb)
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
   * 镜像绑定规则列表信息，包含运行时访问控制和异常进程公用
   */
  async DescribeAssetImageBindRuleInfo(
    req: DescribeAssetImageBindRuleInfoRequest,
    cb?: (error: string, rep: DescribeAssetImageBindRuleInfoResponse) => void
  ): Promise<DescribeAssetImageBindRuleInfoResponse> {
    return this.request("DescribeAssetImageBindRuleInfo", req, cb)
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
   * 查询刷新任务
   */
  async DescribeRefreshTask(
    req: DescribeRefreshTaskRequest,
    cb?: (error: string, rep: DescribeRefreshTaskResponse) => void
  ): Promise<DescribeRefreshTaskResponse> {
    return this.request("DescribeRefreshTask", req, cb)
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
   * 查询容器资产概览信息
   */
  async DescribeContainerAssetSummary(
    req?: DescribeContainerAssetSummaryRequest,
    cb?: (error: string, rep: DescribeContainerAssetSummaryResponse) => void
  ): Promise<DescribeContainerAssetSummaryResponse> {
    return this.request("DescribeContainerAssetSummary", req, cb)
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
   * 修改运行时异常进程策略的开启关闭状态
   */
  async ModifyAbnormalProcessRuleStatus(
    req: ModifyAbnormalProcessRuleStatusRequest,
    cb?: (error: string, rep: ModifyAbnormalProcessRuleStatusResponse) => void
  ): Promise<ModifyAbnormalProcessRuleStatusResponse> {
    return this.request("ModifyAbnormalProcessRuleStatus", req, cb)
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
   * 查询导出任务的结果
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
   * 查询上次任务的资产通过率汇总信息
   */
  async DescribeComplianceTaskAssetSummary(
    req: DescribeComplianceTaskAssetSummaryRequest,
    cb?: (error: string, rep: DescribeComplianceTaskAssetSummaryResponse) => void
  ): Promise<DescribeComplianceTaskAssetSummaryResponse> {
    return this.request("DescribeComplianceTaskAssetSummary", req, cb)
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
   * 运行时更新文件查杀实时监控设置
   */
  async ModifyVirusMonitorSetting(
    req: ModifyVirusMonitorSettingRequest,
    cb?: (error: string, rep: ModifyVirusMonitorSettingResponse) => void
  ): Promise<ModifyVirusMonitorSettingResponse> {
    return this.request("ModifyVirusMonitorSetting", req, cb)
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
   * 重新检测选定的资产
   */
  async ScanComplianceAssets(
    req: ScanComplianceAssetsRequest,
    cb?: (error: string, rep: ScanComplianceAssetsResponse) => void
  ): Promise<ScanComplianceAssetsResponse> {
    return this.request("ScanComplianceAssets", req, cb)
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
   * 查询所有检查项接口，返回总数和检查项列表
   */
  async DescribeCheckItemList(
    req: DescribeCheckItemListRequest,
    cb?: (error: string, rep: DescribeCheckItemListResponse) => void
  ): Promise<DescribeCheckItemListResponse> {
    return this.request("DescribeCheckItemList", req, cb)
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
   * 查询白名单列表
   */
  async DescribeComplianceWhitelistItemList(
    req: DescribeComplianceWhitelistItemListRequest,
    cb?: (error: string, rep: DescribeComplianceWhitelistItemListResponse) => void
  ): Promise<DescribeComplianceWhitelistItemListResponse> {
    return this.request("DescribeComplianceWhitelistItemList", req, cb)
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
   * 容器安全搜索查询端口占用列表
   */
  async DescribeAssetPortList(
    req: DescribeAssetPortListRequest,
    cb?: (error: string, rep: DescribeAssetPortListResponse) => void
  ): Promise<DescribeAssetPortListResponse> {
    return this.request("DescribeAssetPortList", req, cb)
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
   * 删除运行异常进程策略
   */
  async DeleteAbnormalProcessRules(
    req: DeleteAbnormalProcessRulesRequest,
    cb?: (error: string, rep: DeleteAbnormalProcessRulesResponse) => void
  ): Promise<DeleteAbnormalProcessRulesResponse> {
    return this.request("DeleteAbnormalProcessRules", req, cb)
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
   * 运行时文件查杀一键扫描
   */
  async CreateVirusScanTask(
    req: CreateVirusScanTaskRequest,
    cb?: (error: string, rep: CreateVirusScanTaskResponse) => void
  ): Promise<CreateVirusScanTaskResponse> {
    return this.request("CreateVirusScanTask", req, cb)
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
   * 获取告警策略列表
   */
  async DescribeWarningRules(
    req?: DescribeWarningRulesRequest,
    cb?: (error: string, rep: DescribeWarningRulesResponse) => void
  ): Promise<DescribeWarningRulesResponse> {
    return this.request("DescribeWarningRules", req, cb)
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
   * 容器安全搜索查询镜像漏洞列表导出
   */
  async DescribeAssetImageVulListExport(
    req: DescribeAssetImageVulListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageVulListExportResponse) => void
  ): Promise<DescribeAssetImageVulListExportResponse> {
    return this.request("DescribeAssetImageVulListExport", req, cb)
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
   * 新增单个镜像仓库详细信息
   */
  async AddAssetImageRegistryRegistryDetail(
    req: AddAssetImageRegistryRegistryDetailRequest,
    cb?: (error: string, rep: AddAssetImageRegistryRegistryDetailResponse) => void
  ): Promise<AddAssetImageRegistryRegistryDetailResponse> {
    return this.request("AddAssetImageRegistryRegistryDetail", req, cb)
  }

  /**
   * 运行时文件查杀事件列表
   */
  async DescribeVirusList(
    req: DescribeVirusListRequest,
    cb?: (error: string, rep: DescribeVirusListResponse) => void
  ): Promise<DescribeVirusListResponse> {
    return this.request("DescribeVirusList", req, cb)
  }

  /**
   * 镜像仓库资产刷新
   */
  async SyncAssetImageRegistryAsset(
    req?: SyncAssetImageRegistryAssetRequest,
    cb?: (error: string, rep: SyncAssetImageRegistryAssetResponse) => void
  ): Promise<SyncAssetImageRegistryAssetResponse> {
    return this.request("SyncAssetImageRegistryAsset", req, cb)
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
   * 重新检测选的检测项下的所有资产，返回创建的合规检查任务的ID。
   */
  async ScanCompliancePolicyItems(
    req: ScanCompliancePolicyItemsRequest,
    cb?: (error: string, rep: ScanCompliancePolicyItemsResponse) => void
  ): Promise<ScanCompliancePolicyItemsResponse> {
    return this.request("ScanCompliancePolicyItems", req, cb)
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
   * 查询容器安全未处理事件信息
   */
  async DescribeContainerSecEventSummary(
    req?: DescribeContainerSecEventSummaryRequest,
    cb?: (error: string, rep: DescribeContainerSecEventSummaryResponse) => void
  ): Promise<DescribeContainerSecEventSummaryResponse> {
    return this.request("DescribeContainerSecEventSummary", req, cb)
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
   * 查询运行时反弹shell事件列表信息
   */
  async DescribeReverseShellEvents(
    req: DescribeReverseShellEventsRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void
  ): Promise<DescribeReverseShellEventsResponse> {
    return this.request("DescribeReverseShellEvents", req, cb)
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
   * 镜像仓库创建镜像扫描任务
   */
  async CreateAssetImageRegistryScanTask(
    req: CreateAssetImageRegistryScanTaskRequest,
    cb?: (error: string, rep: CreateAssetImageRegistryScanTaskResponse) => void
  ): Promise<CreateAssetImageRegistryScanTaskResponse> {
    return this.request("CreateAssetImageRegistryScanTask", req, cb)
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
   * 查询运行时访问控制事件的详细信息
   */
  async DescribeAccessControlDetail(
    req: DescribeAccessControlDetailRequest,
    cb?: (error: string, rep: DescribeAccessControlDetailResponse) => void
  ): Promise<DescribeAccessControlDetailResponse> {
    return this.request("DescribeAccessControlDetail", req, cb)
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
   * 设置检测模式和自动检查
   */
  async SetCheckMode(
    req: SetCheckModeRequest,
    cb?: (error: string, rep: SetCheckModeResponse) => void
  ): Promise<SetCheckModeResponse> {
    return this.request("SetCheckMode", req, cb)
  }

  /**
   * 从白名单中删除将指定的检测项。
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
   * 镜像仓库停止镜像一键扫描任务
   */
  async ModifyAssetImageRegistryScanStopOneKey(
    req: ModifyAssetImageRegistryScanStopOneKeyRequest,
    cb?: (error: string, rep: ModifyAssetImageRegistryScanStopOneKeyResponse) => void
  ): Promise<ModifyAssetImageRegistryScanStopOneKeyResponse> {
    return this.request("ModifyAssetImageRegistryScanStopOneKey", req, cb)
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
   * 修改反弹shell事件的状态信息
   */
  async ModifyReverseShellStatus(
    req: ModifyReverseShellStatusRequest,
    cb?: (error: string, rep: ModifyReverseShellStatusResponse) => void
  ): Promise<ModifyReverseShellStatusResponse> {
    return this.request("ModifyReverseShellStatus", req, cb)
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
   * 容器安全搜索查询镜像风险列表导出
   */
  async DescribeAssetImageRiskListExport(
    req: DescribeAssetImageRiskListExportRequest,
    cb?: (error: string, rep: DescribeAssetImageRiskListExportResponse) => void
  ): Promise<DescribeAssetImageRiskListExportResponse> {
    return this.request("DescribeAssetImageRiskListExport", req, cb)
  }

  /**
   * 查询运行时访问控制策略列表导出
   */
  async DescribeAccessControlRulesExport(
    req: DescribeAccessControlRulesExportRequest,
    cb?: (error: string, rep: DescribeAccessControlRulesExportResponse) => void
  ): Promise<DescribeAccessControlRulesExportResponse> {
    return this.request("DescribeAccessControlRulesExport", req, cb)
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
   * 容器安全查询镜像漏洞列表
   */
  async DescribeAssetImageVulList(
    req: DescribeAssetImageVulListRequest,
    cb?: (error: string, rep: DescribeAssetImageVulListResponse) => void
  ): Promise<DescribeAssetImageVulListResponse> {
    return this.request("DescribeAssetImageVulList", req, cb)
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
   * 修改定时任务的设置，包括检测周期、开启/禁用合规基准。
   */
  async ModifyCompliancePeriodTask(
    req: ModifyCompliancePeriodTaskRequest,
    cb?: (error: string, rep: ModifyCompliancePeriodTaskResponse) => void
  ): Promise<ModifyCompliancePeriodTaskResponse> {
    return this.request("ModifyCompliancePeriodTask", req, cb)
  }

  /**
   * 镜像仓库查询镜像统计信息
   */
  async DescribeAssetImageRegistrySummary(
    req?: DescribeAssetImageRegistrySummaryRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistrySummaryResponse) => void
  ): Promise<DescribeAssetImageRegistrySummaryResponse> {
    return this.request("DescribeAssetImageRegistrySummary", req, cb)
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
   * 容器安全查询db服务列表
   */
  async DescribeAssetDBServiceList(
    req: DescribeAssetDBServiceListRequest,
    cb?: (error: string, rep: DescribeAssetDBServiceListResponse) => void
  ): Promise<DescribeAssetDBServiceListResponse> {
    return this.request("DescribeAssetDBServiceList", req, cb)
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
   * 查询账户容器、镜像等统计信息
   */
  async DescribeAssetSummary(
    req?: DescribeAssetSummaryRequest,
    cb?: (error: string, rep: DescribeAssetSummaryResponse) => void
  ): Promise<DescribeAssetSummaryResponse> {
    return this.request("DescribeAssetSummary", req, cb)
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
   * 添加编辑运行时异常进程策略
   */
  async AddEditAbnormalProcessRule(
    req: AddEditAbnormalProcessRuleRequest,
    cb?: (error: string, rep: AddEditAbnormalProcessRuleResponse) => void
  ): Promise<AddEditAbnormalProcessRuleResponse> {
    return this.request("AddEditAbnormalProcessRule", req, cb)
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
   * 容器安全查询镜像关联主机
   */
  async DescribeAssetImageHostList(
    req: DescribeAssetImageHostListRequest,
    cb?: (error: string, rep: DescribeAssetImageHostListResponse) => void
  ): Promise<DescribeAssetImageHostListResponse> {
    return this.request("DescribeAssetImageHostList", req, cb)
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
   * 镜像仓库查询镜像漏洞列表
   */
  async DescribeAssetImageRegistryVulList(
    req: DescribeAssetImageRegistryVulListRequest,
    cb?: (error: string, rep: DescribeAssetImageRegistryVulListResponse) => void
  ): Promise<DescribeAssetImageRegistryVulListResponse> {
    return this.request("DescribeAssetImageRegistryVulList", req, cb)
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
   * 用指定的检测项重新检测选定的资产，返回创建的合规检查任务的ID。
   */
  async ScanComplianceAssetsByPolicyItem(
    req: ScanComplianceAssetsByPolicyItemRequest,
    cb?: (error: string, rep: ScanComplianceAssetsByPolicyItemResponse) => void
  ): Promise<ScanComplianceAssetsByPolicyItemResponse> {
    return this.request("ScanComplianceAssetsByPolicyItem", req, cb)
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
   * 查询容器运行时安全事件趋势
   */
  async DescribeSecEventsTendency(
    req: DescribeSecEventsTendencyRequest,
    cb?: (error: string, rep: DescribeSecEventsTendencyResponse) => void
  ): Promise<DescribeSecEventsTendencyResponse> {
    return this.request("DescribeSecEventsTendency", req, cb)
  }
}
