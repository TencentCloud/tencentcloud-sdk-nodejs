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
  CsipRiskCenterStatistics,
  ModifyDspmApproveStatusRequest,
  DescribeDspmSupportedAssetTypeRequest,
  DescribeDspmAssetAccessTopologyResponse,
  RepositoryImageVO,
  AuditLogInfo,
  CreateAccessKeySyncTaskRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
  RiskRuleInfo,
  KeyValue,
  OrganizationUserInfo,
  AssetTag,
  DescribeCheckViewRisksResponse,
  DspmSupportedAssetType,
  DspmIdentifyInfoItem,
  DescribeDspmRiskStrategyResponse,
  DspmAccountCount,
  ModifyDspmRiskStrategyRequest,
  DeleteDspmPersonalIdentifyRequest,
  DescribeDspmAccessTopologyIpsResponse,
  CreateDspmAssetsExportJobResponse,
  DescribeRiskCenterWebsiteRiskListResponse,
  DescribeDspmSyncAssetsStatusRequest,
  DspmApplyOrder,
  DescribeRiskRulesResponse,
  DspmApproverOrder,
  DescribeCSIPRiskStatisticsResponse,
  VULViewVULRiskData,
  RetryDspmExportLogRequest,
  DescribeScanTaskListRequest,
  CreateAccessKeyCheckTaskResponse,
  DescribeOrganizationInfoRequest,
  DspmArea,
  DescribeDspmBackupLogListRequest,
  UserCallRecord,
  DescribeDspmRiskResponse,
  ModifyDspmWhitelistStrategyResponse,
  DescribeKeySandboxCredentialRequest,
  DescribeDspmDictionaryListRequest,
  DescribeDspmRiskTendencyRequest,
  DspmApproverStep,
  AddNewBindRoleUserRequest,
  ModifyDspmAssetLogDeliverySwitchResponse,
  OrganizationInfo,
  CreateRiskCenterScanTaskResponse,
  DescribeDspmAssetsRequest,
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
  ModifyDspmApproveStatusResponse,
  DescribeOtherCloudAssetsResponse,
  SendDspmAssetLoginSmsCodeResponse,
  DescribeRiskCenterAssetViewCFGRiskListResponse,
  ModifyDspmAssetAccountResponse,
  UpdateAlertStatusListRequest,
  DspmIdentifyAssetStatistic,
  DescribeUserDspmInfoListRequest,
  DescribeSkillScanPayInfoResponse,
  DescribeDspmApproveHistoryResponse,
  DescribePublicIpAssetsResponse,
  DescribeConfigCheckRulesResponse,
  ResetDspmAssetAccountPasswordRequest,
  DescribeRiskRulesRequest,
  UserDspmInfo,
  DescribeDspmRiskStrategyRequest,
  DescribeSourceIPAssetRequest,
  DescribeDspmIdentifyInfoRequest,
  DescribeDbAssetInfoRequest,
  DescribeUserCallRecordResponse,
  DescribeDspmIdentifyInfoListRequest,
  VulRiskItem,
  ModifyDspmBackupSettingRequest,
  DescribeAccessKeyAlarmResponse,
  DescribeGatewayAssetsResponse,
  DescribeDspmApproveOrderListResponse,
  DescribeRiskRuleDetailResponse,
  DspmRiskTendency,
  DeleteDomainAndIpResponse,
  DescribeDspmRiskDetailRequest,
  SkillScanRuleHit,
  RelatedEvent,
  SkillCapabilityTag,
  VerifyDspmAssetLoginCodeResponse,
  DescribeScanStatisticResponse,
  DescribeAccessKeyAlarmRequest,
  DescribeExposuresRequest,
  DescribeDspmAssetTableListRequest,
  DescribeHighBaseLineRiskListResponse,
  DescribeExposeAssetCategoryResponse,
  DescribeDspmAssetSupportedPrivilegesRequest,
  IpAssetListVO,
  CreateDspmAccessExportJobRequest,
  DescribeDspmRiskStrategyGroupRequest,
  DspmPersonApplyHistoryItem,
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
  DescribeExposuresResponse,
  CreateDspmApproveHistoryExportJobRequest,
  CreateDspmRiskExportJobResponse,
  ModifyDspmAssetSecurityAnalysisSwitchRequest,
  DescribeOrganizationUserInfoRequest,
  ModifyDspmAssetLogDeliverySwitchRequest,
  DspmPersonUser,
  ModifyDspmAssetAccountPrivilegesRequest,
  ModifyUebaRuleSwitchResponse,
  DescribeDspmAssetDatabasesRequest,
  UpdateAccessKeyRemarkResponse,
  UebaCustomRule,
  CreateDspmIdentifyInfoListExportJobRequest,
  DeleteDspmAssetAccountRequest,
  AlertInfo,
  Vpc,
  STSCredentialOutput,
  PortRiskAdvanceCFGParamItem,
  VULRiskAdvanceCFGList,
  DescribeDspmExportTaskResponse,
  DescribeRepositoryImageAssetsResponse,
  CreateDspmApproveHistoryExportJobResponse,
  DescribeDspmDictionaryListResponse,
  HitRules,
  DspmIdentifyCount,
  DspmAccessRecord,
  DescribeTopAttackInfoResponse,
  ModifyDspmPersonalIdentifyRequest,
  DescribeVULRiskAdvanceCFGListRequest,
  DspmAssetTypeCount,
  DescribeDspmApproveHistoryRequest,
  VerifyDspmAssetLoginCodeRequest,
  DescribeDspmBackupSettingResponse,
  CreateSkillScanResponse,
  DescribeDspmPayInfoRequest,
  TableField,
  ModifyDspmAssetAccountPrivilegesResponse,
  DescribeUebaRuleResponse,
  DescribeSkillScanResultRequest,
  GateWayAsset,
  DescribeSourceIPAssetResponse,
  DeleteDspmAssetAccountResponse,
  DescribeDspmApplyOrderListResponse,
  AssetViewVULRiskData,
  DspmIp,
  NICAsset,
  ModifyDspmAssetDataScanTaskResponse,
  DescribeAccessKeyAssetResponse,
  DescribeAccessKeyRiskDetailResponse,
  DescribeSubnetAssetsResponse,
  DescribeRiskCenterAssetViewPortRiskListRequest,
  DescribeOrganizationInfoResponse,
  ModifyDspmRestoreLogTaskRequest,
  DescribeAccessKeyRiskRequest,
  PublicIpDomainListKey,
  DescribeDspmLogListRequest,
  RevertDspmAssetAccountRequest,
  DspmAssetDatabaseInfo,
  DspmColumnPrivilege,
  CreateDspmAssetAccessTopologyExportJobResponse,
  DescribeDspmAccessRecordResponse,
  DescribeDspmIdentifyIdListResponse,
  DeleteDspmBackupLogListResponse,
  CreateRiskCenterScanTaskRequest,
  DspmAssetAccountIdentify,
  DescribeScanReportListRequest,
  DescribeAccessKeyAssetRequest,
  ModifyDspmWhitelistStrategyRequest,
  DescribeScanTaskListResponse,
  ModifyDspmAssetAccountRequest,
  CreateDspmAssetAccessTopologyExportJobRequest,
  DeleteDspmApplyOrderResponse,
  AssetInstanceTypeMap,
  DspmAssetAccount,
  DescribeDspmIdentifyIdListRequest,
  DescribeCVMAssetInfoResponse,
  ModifyDspmBackupSettingResponse,
  DspmRisk,
  DescribeAIAgentAssetListResponse,
  DescribeUserDspmInfoListResponse,
  DspmSensitiveScanTaskConfig,
  AlertExtraInfo,
  DspmAssetTableInfo,
  SourceIPVpcInfo,
  CreateDspmApplyOrderResponse,
  DescribeUebaRuleRequest,
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
  ReportTaskIdList,
  AddNewBindRoleUserResponse,
  DspmRiskStrategyGroup,
  DescribeDspmIdentifyInfoResponse,
  DescribeDspmPayInfoResponse,
  DescribeExposePathResponse,
  DeleteDspmWhitelistStrategyResponse,
  TaskLogInfo,
  DescribeTaskLogURLResponse,
  DspmFrequency,
  DescribeDspmAssetIdsResponse,
  UebaRule,
  DspmTablePrivilege,
  DescribeSearchBugInfoResponse,
  ModifyDspmPersonalIdentifyResponse,
  DescribeAccessKeyRiskDetailRequest,
  ModifyOrganizationAccountStatusRequest,
  DescribeExposeAssetCategoryRequest,
  DescribeAbnormalCallRecordResponse,
  DspmDbAsset,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  DescribeDspmAccessTopologyAssetsResponse,
  UpdateAccessKeyAlarmStatusRequest,
  DspmDictionary,
  InquireInfo,
  RiskCallRecord,
  DspmRiskStrategy,
  AssetProcessItem,
  ModifyUebaRuleSwitchRequest,
  DspmAssetCount,
  DescribeScanStatisticRequest,
  Filter,
  AssetCluster,
  ExportTask,
  AddDspmAssetManagerResponse,
  DescribeRiskCenterCFGViewCFGRiskListRequest,
  UpdateAccessKeyRemarkRequest,
  AddDspmAssetManagerRequest,
  DescribeDspmStatisticsRequest,
  CreateDspmPersonalIdentifyRequest,
  DescribeAssumeRoleRequest,
  CreateDspmWhitelistStrategyResponse,
  DescribeVULRiskAdvanceCFGListResponse,
  StandardItem,
  CheckViewRiskItem,
  DescribeAssetViewVulRiskListResponse,
  DescribeRepositoryImageAssetsRequest,
  UpdateAccessKeyAlarmStatusResponse,
  VulImpactComponentInfo,
  CVMAssetVO,
  VULBaseInfo,
  DescribeCallRecordResponse,
  AssetViewCFGRisk,
  DspmUinUser,
  DataSearchBug,
  DspmAssetInstance,
  CommandPluginState,
  DspmAssetSecurityAnalyseStatus,
  BackupLog,
  DescribeClusterAssetsRequest,
  ResetDspmAssetAccountPasswordResponse,
  DescribeDspmAssetAccountPresetPrivilegesResponse,
  TaskCenterWeakPwdRiskInputParam,
  DescribeDspmAssetSupportedPrivilegesResponse,
  DescribeDomainAssetsRequest,
  DescribeNICAssetsRequest,
  DescribeDspmAssetFieldListResponse,
  DescribeDspmPersonApplyHistoryResponse,
  DescribeAssetProcessListRequest,
  DescribeAssetProcessListResponse,
  ModifyDspmIdentifyInfoResponse,
  DescribeAccessKeyUserListRequest,
  DescribeDspmApproveOrderListRequest,
  DeleteDomainAndIpRequest,
  DescribeRiskRuleDetailRequest,
  DescribeDspmAssetAccountPresetPrivilegesRequest,
  DescribeDspmPersonalIdentifyListResponse,
  Location,
  UebaEventContent,
  CreateAccessKeySyncTaskResponse,
  DescribeDspmSyncUsersStatusResponse,
  DescribeSearchBugInfoRequest,
  DescribeDspmRiskDetailResponse,
  DescribeOrganizationUserInfoResponse,
  AccessKeyRisk,
  DspmIdentifyRuleDetail,
  DBAssetVO,
  CreateDspmWhitelistStrategyRequest,
  StandardTerm,
  DescribeDspmAssetDatabaseListRequest,
  UpdateAlertStatusListResponse,
  SkillScanEngineResult,
  FilterDataObject,
  ServerRisk,
  DescribeDspmAssetIdsRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
  VULViewVULRisk,
  DescribeDspmAssetAccountIdentifyResponse,
  DescribeDspmAssetLoginCredentialRequest,
  DescribeDspmIdentifyInfoListResponse,
  DescribeCVMAssetsResponse,
  DescribePublicIpAssetsRequest,
  DescribeDspmBackupSettingRequest,
  DescribeCVMAssetInfoRequest,
  WebsiteRisk,
  DescribeDspmSyncAssetsStatusResponse,
  DspmRiskCount,
  ServiceSupport,
  DescribeDspmAssetAccountRecycledPrivilegesResponse,
  DescribeAssetRiskListResponse,
  DeleteDspmRestoreLogListResponse,
  AccessCredentialOutput,
  CreateDspmExportTaskResponse,
  CreateDspmIdentifyInfoListExportJobResponse,
  TaskCenterVulRiskInputParam,
  ModifyDspmIpInfoRequest,
  ScanTaskInfo,
  TrafficPluginState,
  DescribeDspmAssetTableListResponse,
  Tags,
  ModifyDspmRiskInfoRequest,
  PortViewPortRisk,
  DescribeDspmAccessTopologyAccountsResponse,
  DescribeDspmPersonApplyHistoryRequest,
  DescribeClusterPodAssetsRequest,
  DescribeDspmAccessTopologyIpsRequest,
  DescribeVpcAssetsResponse,
  DescribeAssetRiskListRequest,
  DescribeTopAttackInfoRequest,
  VulTrend,
  SkillState,
  DescribeDspmAssetAccountsRequest,
  DescribeAccessKeyRiskResponse,
  DescribeDspmApplyHistoryResponse,
  ModifyDspmIpInfoResponse,
  CreateAccessKeyCheckTaskRequest,
  SyncDspmUsersResponse,
  DescribeDspmAssetAccountsResponse,
  AssetBaseInfoResponse,
  DescribeRiskCallRecordResponse,
  DescribeRiskCenterPortViewPortRiskListRequest,
  DescribeAccessKeyUserDetailRequest,
  StopRiskCenterTaskRequest,
  ModifyDspmAssetSecurityAnalysisSwitchResponse,
  ExposesItem,
  AKInfo,
  WhereFilter,
  DescribeAlertListResponse,
  DspmPersonIdentifyItem,
  ScanTaskInfoList,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  DeleteDspmExportTaskResponse,
  SourceIPAsset,
  DescribeUserCallRecordRequest,
  DescribeDspmSyncUsersStatusRequest,
  DomainAssetVO,
  DescribeAccessKeyUserDetailResponse,
  CredentialEffectScope,
  RevertDspmAssetAccountResponse,
  DescribeTaskLogListResponse,
  DeleteDspmBackupLogListRequest,
  DescribeDspmRiskTendencyResponse,
  HighBaseLineRiskItem,
  DescribeCVMAssetsRequest,
  DescribeRiskCenterServerRiskListRequest,
  DescribeAccessKeyAlarmDetailResponse,
  DescribeOtherCloudAssetsRequest,
  DescribeDspmAssetSecurityAnalyseStatusResponse,
  DescribeDspmBackupLogListResponse,
  ModifyDspmIdentifyInfoRequest,
  DescribeDspmWhitelistStrategyRequest,
  DescribeAIAgentAssetListRequest,
  CreateDomainAndIpResponse,
  DescribeSubUserInfoRequest,
  DescribeDspmAssetDatabasesResponse,
  SendDspmAssetLoginSmsCodeRequest,
  DescribeHighBaseLineRiskListRequest,
  DescribeTaskLogURLRequest,
  DspmIdentifyIdItem,
  DescribeDspmStatisticsResponse,
  DescribeDbAssetInfoResponse,
  CreateDspmRiskExportJobRequest,
  BugInfoDetail,
  CreateDomainAndIpRequest,
  DspmAssetDataScanDetail,
  AccessKeyAlarmInfo,
  DescribeDspmAssetAccountRecycledPrivilegesRequest,
  DownloadDspmExportLogResponse,
  DescribeAKAnalysisDetailResponse,
  DescribeCheckViewRisksRequest,
  DescribeDspmAssetFieldListRequest,
  DeleteDspmPersonalIdentifyResponse,
  StatisticalFilter,
  DescribeVULRiskDetailRequest,
  DescribeSkillScanResultResponse,
  DspmDbAssetId,
  DescribeConfigCheckRulesRequest,
  ModifyDspmAccessRecordRequest,
  ModifyRiskCenterRiskStatusRequest,
  NewAlertKey,
  DescribeDspmAssetLoginCredentialResponse,
  DescribeVULRiskDetailResponse,
  ModifyRiskCenterScanTaskResponse,
  TrafficRuleState,
  AccessKeyAlarmCount,
  RiskRuleItem,
  DescribeAbnormalCallRecordRequest,
  ModifyDspmAssetDataScanTaskRequest,
  AssetRiskItem,
  DescribeRiskDetailListRequest,
  DspmAccessRecordId,
  RoleInfo,
  RegionConfig,
  SyncDspmAssetsRequest,
  DescribeScanReportListResponse,
  DescribeDspmWhitelistStrategyResponse,
  DescribeDspmAssetAccountIdentifyRequest,
  DescribeDspmSupportedAssetTypeResponse,
  DescribeSkillScanPayInfoRequest,
  DescribeDspmApplyHistoryRequest,
  DescribeListenerListResponse,
  TaskAdvanceCFG,
  SyncDspmAssetsResponse,
  AssetInfoDetail,
  SubnetAsset,
  RiskCenterStatusKey,
  TaskAssetObject,
  DbAssetInfo,
  Element,
  SyncDspmUsersRequest,
  DescribeAccessKeyAlarmDetailRequest,
  Tag,
  DspmIdentifyCategoryDetail,
  AccessKeyAlarm,
  AssetClusterPod,
  DescribeDspmAccessRecordRequest,
  DescribeKeySandboxCredentialResponse,
  SkillScanItem,
  DescribeVULListRequest,
  AssetViewWeakPassRisk,
  CFGViewCFGRisk,
  ModifyDspmRiskStrategyResponse,
  ReportItemKey,
  DescribeRiskCenterPortViewPortRiskListResponse,
  SensitiveDetail,
  DescribeRiskCenterVULViewVULRiskListResponse,
  CreateDspmExportTaskRequest,
  SkillRuleCatalogItem,
  DescribeRiskCenterVULViewVULRiskListRequest,
  DescribeDspmAccessTopologyAssetsRequest,
  VULRiskInfo,
  CreateDspmApplyOrderRequest,
  RiskDetailItem,
  DescribeDspmAssetDatabaseListResponse,
  CreateSkillScanRequest,
  ModifyDspmAccessRecordResponse,
  DescribeVulViewVulRiskListRequest,
  DescribeVulRiskListRequest,
  DescribeVULListResponse,
  KeySandboxCredential,
  DescribeAssetViewVulRiskListRequest,
  DspmWhitelistStrategy,
  DescribeCFWAssetStatisticsRequest,
  DescribeDspmRiskRequest,
  DeleteDspmExportTaskRequest,
  AIAgentAsset,
  DspmSecurityAnalyseStatusCount,
  ServerRiskSuggestion,
  DescribeSubnetAssetsRequest,
  DspmDatabasePrivilege,
  DescribeDspmExportTaskRequest,
  DescribeDspmApplyOrderListRequest,
  CallRecord,
  DescribeKeySandboxCredentialListRequest,
  DescribeDspmAssetsResponse,
  DescribeDspmAccessTopologyAccountsRequest,
  DescribeDspmPersonalIdentifyListRequest,
  ModifyOrganizationAccountStatusResponse,
  DescribeRiskDetailListResponse,
  DescribeDbAssetsRequest,
  DescribeAlertListRequest,
  DescribeRiskCenterCFGViewCFGRiskListResponse,
  TaskCenterCFGRiskInputParam,
  DescribeDspmAssetSecurityAnalyseStatusRequest,
  ModifyDspmRiskInfoResponse,
  DescribeClusterAssetsResponse,
  DownloadDspmExportLogRequest,
  DescribeAKAnalysisDetailRequest,
  DescribeSubUserInfoResponse,
  DescribeVulRiskListResponse,
  DescribeCSIPRiskStatisticsRequest,
  TagCount,
  DescribeDomainAssetsResponse,
  DescribeDbAssetsResponse,
  DescribeNICAssetsResponse,
  DspmDbAccountPrivilege,
  Filters,
  ModifyRiskCenterScanTaskRequest,
  ClbListenerListInfo,
  AccessKeyUser,
  ProductSupport,
  DescribeListenerListRequest,
  DeleteRiskScanTaskResponse,
  DescribeVulViewVulRiskListResponse,
  DescribeAccessKeyUserListResponse,
  ExposeAssetTypeItem,
  DescribeDspmLogListResponse,
  DeleteDspmWhitelistStrategyRequest,
  DescribeTaskLogListRequest,
  DspmAssetAccessTopologyItem,
  DescribeRiskCenterAssetViewPortRiskListResponse,
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
   * 查询资产数据库信息
   */
  async DescribeDspmAssetDatabaseList(
    req: DescribeDspmAssetDatabaseListRequest,
    cb?: (error: string, rep: DescribeDspmAssetDatabaseListResponse) => void
  ): Promise<DescribeDspmAssetDatabaseListResponse> {
    return this.request("DescribeDspmAssetDatabaseList", req, cb)
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
   * 查询Dspm审批历史
   */
  async DescribeDspmApproveHistory(
    req: DescribeDspmApproveHistoryRequest,
    cb?: (error: string, rep: DescribeDspmApproveHistoryResponse) => void
  ): Promise<DescribeDspmApproveHistoryResponse> {
    return this.request("DescribeDspmApproveHistory", req, cb)
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
   * 查询日志备份配置
   */
  async DescribeDspmBackupSetting(
    req: DescribeDspmBackupSettingRequest,
    cb?: (error: string, rep: DescribeDspmBackupSettingResponse) => void
  ): Promise<DescribeDspmBackupSettingResponse> {
    return this.request("DescribeDspmBackupSetting", req, cb)
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
   * 获取资产视角的漏洞风险列表
   */
  async DescribeAssetViewVulRiskList(
    req: DescribeAssetViewVulRiskListRequest,
    cb?: (error: string, rep: DescribeAssetViewVulRiskListResponse) => void
  ): Promise<DescribeAssetViewVulRiskListResponse> {
    return this.request("DescribeAssetViewVulRiskList", req, cb)
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
   * 查询Dspm风险策略
   */
  async DescribeDspmRiskStrategy(
    req: DescribeDspmRiskStrategyRequest,
    cb?: (error: string, rep: DescribeDspmRiskStrategyResponse) => void
  ): Promise<DescribeDspmRiskStrategyResponse> {
    return this.request("DescribeDspmRiskStrategy", req, cb)
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
   * 删除Dspm资产账号
   */
  async DeleteDspmAssetAccount(
    req: DeleteDspmAssetAccountRequest,
    cb?: (error: string, rep: DeleteDspmAssetAccountResponse) => void
  ): Promise<DeleteDspmAssetAccountResponse> {
    return this.request("DeleteDspmAssetAccount", req, cb)
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
   * 获取扫描任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
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
   * 查询Dspm资产账号回收后特权信息
   */
  async DescribeDspmAssetAccountRecycledPrivileges(
    req: DescribeDspmAssetAccountRecycledPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetAccountRecycledPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetAccountRecycledPrivilegesResponse> {
    return this.request("DescribeDspmAssetAccountRecycledPrivileges", req, cb)
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
   * 获取调用记录列表
   */
  async DescribeAbnormalCallRecord(
    req: DescribeAbnormalCallRecordRequest,
    cb?: (error: string, rep: DescribeAbnormalCallRecordResponse) => void
  ): Promise<DescribeAbnormalCallRecordResponse> {
    return this.request("DescribeAbnormalCallRecord", req, cb)
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
   * 同步dspm用户列表
   */
  async SyncDspmUsers(
    req?: SyncDspmUsersRequest,
    cb?: (error: string, rep: SyncDspmUsersResponse) => void
  ): Promise<SyncDspmUsersResponse> {
    return this.request("SyncDspmUsers", req, cb)
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
   * 查询Dspm访问拓扑ip列表
   */
  async DescribeDspmAccessTopologyIps(
    req: DescribeDspmAccessTopologyIpsRequest,
    cb?: (error: string, rep: DescribeDspmAccessTopologyIpsResponse) => void
  ): Promise<DescribeDspmAccessTopologyIpsResponse> {
    return this.request("DescribeDspmAccessTopologyIps", req, cb)
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
   * 获取已购Dspm订单信息
   */
  async DescribeDspmPayInfo(
    req: DescribeDspmPayInfoRequest,
    cb?: (error: string, rep: DescribeDspmPayInfoResponse) => void
  ): Promise<DescribeDspmPayInfoResponse> {
    return this.request("DescribeDspmPayInfo", req, cb)
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
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
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
   * 验证Dspm资产登录验证码
   */
  async VerifyDspmAssetLoginCode(
    req: VerifyDspmAssetLoginCodeRequest,
    cb?: (error: string, rep: VerifyDspmAssetLoginCodeResponse) => void
  ): Promise<VerifyDspmAssetLoginCodeResponse> {
    return this.request("VerifyDspmAssetLoginCode", req, cb)
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
   * 修改Dspm审批单状态
   */
  async ModifyDspmApproveStatus(
    req: ModifyDspmApproveStatusRequest,
    cb?: (error: string, rep: ModifyDspmApproveStatusResponse) => void
  ): Promise<ModifyDspmApproveStatusResponse> {
    return this.request("ModifyDspmApproveStatus", req, cb)
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
   * 删除Dspm白名单策略
   */
  async DeleteDspmWhitelistStrategy(
    req: DeleteDspmWhitelistStrategyRequest,
    cb?: (error: string, rep: DeleteDspmWhitelistStrategyResponse) => void
  ): Promise<DeleteDspmWhitelistStrategyResponse> {
    return this.request("DeleteDspmWhitelistStrategy", req, cb)
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
   * 查询Dspm申请历史
   */
  async DescribeDspmApplyHistory(
    req: DescribeDspmApplyHistoryRequest,
    cb?: (error: string, rep: DescribeDspmApplyHistoryResponse) => void
  ): Promise<DescribeDspmApplyHistoryResponse> {
    return this.request("DescribeDspmApplyHistory", req, cb)
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
   * 获取风险服务列表
   */
  async DescribeRiskCenterServerRiskList(
    req: DescribeRiskCenterServerRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterServerRiskListResponse) => void
  ): Promise<DescribeRiskCenterServerRiskListResponse> {
    return this.request("DescribeRiskCenterServerRiskList", req, cb)
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
   * 获取调用记录列表
   */
  async DescribeCallRecord(
    req: DescribeCallRecordRequest,
    cb?: (error: string, rep: DescribeCallRecordResponse) => void
  ): Promise<DescribeCallRecordResponse> {
    return this.request("DescribeCallRecord", req, cb)
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
   * 停止扫风险中心扫描任务
   */
  async StopRiskCenterTask(
    req: StopRiskCenterTaskRequest,
    cb?: (error: string, rep: StopRiskCenterTaskResponse) => void
  ): Promise<StopRiskCenterTaskResponse> {
    return this.request("StopRiskCenterTask", req, cb)
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
   * 创建Dspm审批历史导出任务
   */
  async CreateDspmApproveHistoryExportJob(
    req: CreateDspmApproveHistoryExportJobRequest,
    cb?: (error: string, rep: CreateDspmApproveHistoryExportJobResponse) => void
  ): Promise<CreateDspmApproveHistoryExportJobResponse> {
    return this.request("CreateDspmApproveHistoryExportJob", req, cb)
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
   * 修改DspmIp信息
   */
  async ModifyDspmIpInfo(
    req: ModifyDspmIpInfoRequest,
    cb?: (error: string, rep: ModifyDspmIpInfoResponse) => void
  ): Promise<ModifyDspmIpInfoResponse> {
    return this.request("ModifyDspmIpInfo", req, cb)
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
   * 查询Dspm风险分组策略
   */
  async DescribeDspmRiskStrategyGroup(
    req: DescribeDspmRiskStrategyGroupRequest,
    cb?: (error: string, rep: DescribeDspmRiskStrategyGroupResponse) => void
  ): Promise<DescribeDspmRiskStrategyGroupResponse> {
    return this.request("DescribeDspmRiskStrategyGroup", req, cb)
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
   * 查询Dspm风险趋势
   */
  async DescribeDspmRiskTendency(
    req: DescribeDspmRiskTendencyRequest,
    cb?: (error: string, rep: DescribeDspmRiskTendencyResponse) => void
  ): Promise<DescribeDspmRiskTendencyResponse> {
    return this.request("DescribeDspmRiskTendency", req, cb)
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
   * 删除风险中心扫描任务
   */
  async DeleteRiskScanTask(
    req: DeleteRiskScanTaskRequest,
    cb?: (error: string, rep: DeleteRiskScanTaskResponse) => void
  ): Promise<DeleteRiskScanTaskResponse> {
    return this.request("DeleteRiskScanTask", req, cb)
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
   * 查询备份日志列表
   */
  async DescribeDspmBackupLogList(
    req: DescribeDspmBackupLogListRequest,
    cb?: (error: string, rep: DescribeDspmBackupLogListResponse) => void
  ): Promise<DescribeDspmBackupLogListResponse> {
    return this.request("DescribeDspmBackupLogList", req, cb)
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
   * 资产视角下云资源配置风险列表
   */
  async DescribeAssetRiskList(
    req: DescribeAssetRiskListRequest,
    cb?: (error: string, rep: DescribeAssetRiskListResponse) => void
  ): Promise<DescribeAssetRiskListResponse> {
    return this.request("DescribeAssetRiskList", req, cb)
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
   * 查询集团的子账号列表
   */
  async DescribeSubUserInfo(
    req: DescribeSubUserInfoRequest,
    cb?: (error: string, rep: DescribeSubUserInfoResponse) => void
  ): Promise<DescribeSubUserInfoResponse> {
    return this.request("DescribeSubUserInfo", req, cb)
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
   * 获取资产视角的配置风险列表
   */
  async DescribeRiskCenterAssetViewCFGRiskList(
    req: DescribeRiskCenterAssetViewCFGRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewCFGRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewCFGRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewCFGRiskList", req, cb)
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
   * 修改Dspm身份信息
   */
  async ModifyDspmIdentifyInfo(
    req: ModifyDspmIdentifyInfoRequest,
    cb?: (error: string, rep: ModifyDspmIdentifyInfoResponse) => void
  ): Promise<ModifyDspmIdentifyInfoResponse> {
    return this.request("ModifyDspmIdentifyInfo", req, cb)
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
   * 查询Dspm资产支持的权限
   */
  async DescribeDspmAssetSupportedPrivileges(
    req: DescribeDspmAssetSupportedPrivilegesRequest,
    cb?: (error: string, rep: DescribeDspmAssetSupportedPrivilegesResponse) => void
  ): Promise<DescribeDspmAssetSupportedPrivilegesResponse> {
    return this.request("DescribeDspmAssetSupportedPrivileges", req, cb)
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
   * 获取风险调用记录列表
   */
  async DescribeRiskCallRecord(
    req: DescribeRiskCallRecordRequest,
    cb?: (error: string, rep: DescribeRiskCallRecordResponse) => void
  ): Promise<DescribeRiskCallRecordResponse> {
    return this.request("DescribeRiskCallRecord", req, cb)
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
