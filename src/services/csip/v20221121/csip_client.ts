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
  DescribeRiskCenterPortViewPortRiskListRequest,
  DescribeDbAssetInfoResponse,
  DeleteRiskScanTaskRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
  BugInfoDetail,
  CsipRiskCenterStatistics,
  DescribeVULRiskAdvanceCFGListResponse,
  HighBaseLineRiskItem,
  AccessKeyAlarmInfo,
  DescribeAssetViewVulRiskListResponse,
  DescribeRepositoryImageAssetsRequest,
  DescribeOrganizationUserInfoRequest,
  ModifyUebaRuleSwitchResponse,
  FilterDataObject,
  ReportItemKey,
  DescribeSubnetAssetsRequest,
  AddNewBindRoleUserRequest,
  DescribeCheckViewRisksRequest,
  VULBaseInfo,
  DescribeCallRecordResponse,
  AssetViewCFGRisk,
  DescribeSubUserInfoRequest,
  DescribeRiskCenterAssetViewCFGRiskListResponse,
  AlertInfo,
  KeyValue,
  Vpc,
  PortRiskAdvanceCFGParamItem,
  StatisticalFilter,
  AssetBaseInfoResponse,
  DescribeRepositoryImageAssetsResponse,
  DataSearchBug,
  OrganizationUserInfo,
  AssetTag,
  DescribeCheckViewRisksResponse,
  DescribeScanReportListRequest,
  NewAlertKey,
  IpAssetListVO,
  UebaCustomRule,
  DescribeClusterAssetsRequest,
  DescribeTopAttackInfoResponse,
  TaskCenterWeakPwdRiskInputParam,
  DescribeVULRiskDetailResponse,
  DescribeDomainAssetsRequest,
  ModifyRiskCenterScanTaskResponse,
  DescribeNICAssetsRequest,
  UebaRule,
  DescribeRiskCenterWebsiteRiskListResponse,
  Tag,
  RiskRuleItem,
  DescribeRiskCenterCFGViewCFGRiskListRequest,
  DescribeAssetProcessListRequest,
  DescribeAssetProcessListResponse,
  DescribeCSIPRiskStatisticsResponse,
  AssetRiskItem,
  DeleteDomainAndIpRequest,
  DescribeRiskDetailListRequest,
  DescribeRiskRuleDetailRequest,
  DescribeRiskCenterPortViewPortRiskListResponse,
  DescribeOrganizationInfoRequest,
  TaskIdListKey,
  RoleInfo,
  DescribeUebaRuleResponse,
  UebaEventContent,
  GateWayAsset,
  ModifyUebaRuleSwitchRequest,
  DescribeSourceIPAssetResponse,
  DescribeScanReportListResponse,
  DescribeSearchBugInfoRequest,
  TaskLogURL,
  CheckViewRiskItem,
  AssetViewVULRiskData,
  DescribeOrganizationUserInfoResponse,
  NICAsset,
  OrganizationInfo,
  DescribeListenerListResponse,
  TaskAdvanceCFG,
  AssetProcessItem,
  DBAssetVO,
  AssetInfoDetail,
  DescribeAccessKeyAssetResponse,
  SubnetAsset,
  CreateRiskCenterScanTaskResponse,
  DescribeSubnetAssetsResponse,
  DescribeRiskCenterAssetViewPortRiskListRequest,
  StopRiskCenterTaskResponse,
  DescribeOrganizationInfoResponse,
  DescribeVpcAssetsRequest,
  TaskAssetObject,
  DbAssetInfo,
  ModifyRiskCenterRiskStatusRequest,
  DescribeExposePathRequest,
  RiskCenterStatusKey,
  ExposesItem,
  DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
  PublicIpDomainListKey,
  DescribeTopAttackInfoRequest,
  ProductSupport,
  DescribeCVMAssetsResponse,
  VulImpactComponentInfo,
  AttributeOptionSet,
  WhereFilter,
  CVMAssetVO,
  SubUserInfo,
  CloudCountDesc,
  DescribePublicIpAssetsRequest,
  AssetClusterPod,
  DescribeCVMAssetInfoRequest,
  AssetViewWeakPassRisk,
  WebsiteRisk,
  CFGViewCFGRisk,
  ServiceSupport,
  CreateRiskCenterScanTaskRequest,
  UpdateAlertStatusListResponse,
  DescribeAssetRiskListResponse,
  DescribeRiskCenterVULViewVULRiskListResponse,
  DescribeAccessKeyAssetRequest,
  DescribeRiskCenterVULViewVULRiskListRequest,
  VULRiskAdvanceCFGList,
  UpdateAlertStatusListRequest,
  TaskCenterVulRiskInputParam,
  StopRiskCenterTaskRequest,
  DescribeScanTaskListResponse,
  DescribeScanTaskListRequest,
  ScanTaskInfo,
  AssetInstanceTypeMap,
  Tags,
  ModifyRiskCenterRiskStatusResponse,
  VULViewVULRisk,
  PortViewPortRisk,
  VULRiskInfo,
  DescribeClusterPodAssetsRequest,
  RiskDetailItem,
  DescribeCVMAssetInfoResponse,
  DescribePublicIpAssetsResponse,
  DescribeVulViewVulRiskListRequest,
  DescribeAssetRiskListRequest,
  DescribeRiskRulesRequest,
  DescribeTaskLogURLResponse,
  VulTrend,
  DescribeSourceIPAssetRequest,
  DescribeVulRiskListRequest,
  AlertExtraInfo,
  DescribeVulRiskListResponse,
  DescribeDbAssetInfoRequest,
  RelatedEvent,
  DescribeAssetViewVulRiskListRequest,
  DescribeUebaRuleRequest,
  DescribeVulViewVulRiskListResponse,
  Filter,
  DescribeRiskCenterWebsiteRiskListRequest,
  DescribeCallRecordRequest,
  VulRiskItem,
  RepositoryImageVO,
  ServerRiskSuggestion,
  AssetViewVULRisk,
  DescribeClusterPodAssetsResponse,
  DescribeCFWAssetStatisticsResponse,
  DescribeGatewayAssetsResponse,
  AssetViewPortRisk,
  DescribeRiskCenterAssetViewCFGRiskListRequest,
  DescribeRiskRuleDetailResponse,
  DescribeVpcAssetsResponse,
  CallRecord,
  DescribeHighBaseLineRiskListResponse,
  DeleteDomainAndIpResponse,
  ServerRisk,
  ReportTaskIdList,
  DescribeExposeAssetCategoryResponse,
  AddNewBindRoleUserResponse,
  DomainAssetVO,
  AKInfo,
  DescribeRiskRulesResponse,
  VULViewVULRiskData,
  ExposeAssetTypeItem,
  DescribeAlertListResponse,
  ModifyOrganizationAccountStatusResponse,
  DescribeRiskDetailListResponse,
  ScanTaskInfoList,
  DescribeExposePathResponse,
  DescribeDbAssetsRequest,
  TaskLogInfo,
  DescribeVULRiskAdvanceCFGListRequest,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  TaskCenterCFGRiskInputParam,
  DescribeExposuresRequest,
  SourceIPAsset,
  DescribeAlertListRequest,
  CreateDomainAndIpRequest,
  DescribeRiskCenterCFGViewCFGRiskListResponse,
  DescribeSearchBugInfoResponse,
  DescribeVULRiskDetailRequest,
  ModifyOrganizationAccountStatusRequest,
  DescribeClusterAssetsResponse,
  DescribeVULListResponse,
  DescribeExposeAssetCategoryRequest,
  DescribeSubUserInfoResponse,
  DescribeCSIPRiskStatisticsRequest,
  DescribeScanStatisticResponse,
  TagCount,
  DescribeDomainAssetsResponse,
  DescribeDbAssetsResponse,
  DescribeNICAssetsResponse,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  DescribeCVMAssetsRequest,
  DescribeRiskCenterServerRiskListRequest,
  DescribeTaskLogListRequest,
  Filters,
  DescribeOtherCloudAssetsRequest,
  ModifyRiskCenterScanTaskRequest,
  ClbListenerListInfo,
  Element,
  DescribeRiskCenterServerRiskListResponse,
  DescribeListenerListRequest,
  DescribeVULListRequest,
  DeleteRiskScanTaskResponse,
  DescribeScanStatisticRequest,
  DescribeGatewayAssetsRequest,
  DescribeCFWAssetStatisticsRequest,
  AccessKeyAsset,
  DescribeOtherCloudAssetsResponse,
  AssetCluster,
  CreateDomainAndIpResponse,
  DescribeTaskLogListResponse,
  DescribeExposuresResponse,
  DescribeRiskCenterAssetViewPortRiskListResponse,
  DescribeHighBaseLineRiskListRequest,
  DescribeTaskLogURLRequest,
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
   * 查询用户行为分析策略列表
   */
  async DescribeUebaRule(
    req: DescribeUebaRuleRequest,
    cb?: (error: string, rep: DescribeUebaRuleResponse) => void
  ): Promise<DescribeUebaRuleResponse> {
    return this.request("DescribeUebaRule", req, cb)
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
   * db资产详情
   */
  async DescribeDbAssetInfo(
    req: DescribeDbAssetInfoRequest,
    cb?: (error: string, rep: DescribeDbAssetInfoResponse) => void
  ): Promise<DescribeDbAssetInfoResponse> {
    return this.request("DescribeDbAssetInfo", req, cb)
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
   * 获取漏洞视角的漏洞风险列表
   */
  async DescribeRiskCenterVULViewVULRiskList(
    req: DescribeRiskCenterVULViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterVULViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterVULViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterVULViewVULRiskList", req, cb)
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
   * ip公网列表
   */
  async DescribePublicIpAssets(
    req: DescribePublicIpAssetsRequest,
    cb?: (error: string, rep: DescribePublicIpAssetsResponse) => void
  ): Promise<DescribePublicIpAssetsResponse> {
    return this.request("DescribePublicIpAssets", req, cb)
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
   * 新安全中心风险中心-漏洞列表
   */
  async DescribeVULList(
    req: DescribeVULListRequest,
    cb?: (error: string, rep: DescribeVULListResponse) => void
  ): Promise<DescribeVULListResponse> {
    return this.request("DescribeVULList", req, cb)
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
   * 查询云边界分析-暴露路径下主机节点的漏洞列表
   */
  async DescribeVulRiskList(
    req: DescribeVulRiskListRequest,
    cb?: (error: string, rep: DescribeVulRiskListResponse) => void
  ): Promise<DescribeVulRiskListResponse> {
    return this.request("DescribeVulRiskList", req, cb)
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
   * 停止扫风险中心扫描任务
   */
  async StopRiskCenterTask(
    req: StopRiskCenterTaskRequest,
    cb?: (error: string, rep: StopRiskCenterTaskResponse) => void
  ): Promise<StopRiskCenterTaskResponse> {
    return this.request("StopRiskCenterTask", req, cb)
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
   * 获取资产视角的漏洞风险列表
   */
  async DescribeRiskCenterAssetViewVULRiskList(
    req: DescribeRiskCenterAssetViewVULRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterAssetViewVULRiskListResponse) => void
  ): Promise<DescribeRiskCenterAssetViewVULRiskListResponse> {
    return this.request("DescribeRiskCenterAssetViewVULRiskList", req, cb)
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
   * 资产列表
   */
  async DescribeOtherCloudAssets(
    req: DescribeOtherCloudAssetsRequest,
    cb?: (error: string, rep: DescribeOtherCloudAssetsResponse) => void
  ): Promise<DescribeOtherCloudAssetsResponse> {
    return this.request("DescribeOtherCloudAssets", req, cb)
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
   * 获取vpc列表
   */
  async DescribeVpcAssets(
    req: DescribeVpcAssetsRequest,
    cb?: (error: string, rep: DescribeVpcAssetsResponse) => void
  ): Promise<DescribeVpcAssetsResponse> {
    return this.request("DescribeVpcAssets", req, cb)
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
   * 获取风险服务列表
   */
  async DescribeRiskCenterServerRiskList(
    req: DescribeRiskCenterServerRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterServerRiskListResponse) => void
  ): Promise<DescribeRiskCenterServerRiskListResponse> {
    return this.request("DescribeRiskCenterServerRiskList", req, cb)
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
   * 修改风险中心扫描任务
   */
  async ModifyRiskCenterScanTask(
    req: ModifyRiskCenterScanTaskRequest,
    cb?: (error: string, rep: ModifyRiskCenterScanTaskResponse) => void
  ): Promise<ModifyRiskCenterScanTaskResponse> {
    return this.request("ModifyRiskCenterScanTask", req, cb)
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
   * 获取报告下载的临时链接
   */
  async DescribeTaskLogURL(
    req: DescribeTaskLogURLRequest,
    cb?: (error: string, rep: DescribeTaskLogURLResponse) => void
  ): Promise<DescribeTaskLogURLResponse> {
    return this.request("DescribeTaskLogURL", req, cb)
  }

  /**
   * 检查视角下云资源配置风险列表示例
   */
  async DescribeCheckViewRisks(
    req: DescribeCheckViewRisksRequest,
    cb?: (error: string, rep: DescribeCheckViewRisksResponse) => void
  ): Promise<DescribeCheckViewRisksResponse> {
    return this.request("DescribeCheckViewRisks", req, cb)
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
   * 云防资产中心统计数据
   */
  async DescribeCFWAssetStatistics(
    req?: DescribeCFWAssetStatisticsRequest,
    cb?: (error: string, rep: DescribeCFWAssetStatisticsResponse) => void
  ): Promise<DescribeCFWAssetStatisticsResponse> {
    return this.request("DescribeCFWAssetStatistics", req, cb)
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
   * 资产视角下云资源配置风险列表
   */
  async DescribeAssetRiskList(
    req: DescribeAssetRiskListRequest,
    cb?: (error: string, rep: DescribeAssetRiskListResponse) => void
  ): Promise<DescribeAssetRiskListResponse> {
    return this.request("DescribeAssetRiskList", req, cb)
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
   * 创建风险中心扫描任务
   */
  async CreateRiskCenterScanTask(
    req: CreateRiskCenterScanTaskRequest,
    cb?: (error: string, rep: CreateRiskCenterScanTaskResponse) => void
  ): Promise<CreateRiskCenterScanTaskResponse> {
    return this.request("CreateRiskCenterScanTask", req, cb)
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
   * 查询TOP攻击信息
   */
  async DescribeTopAttackInfo(
    req: DescribeTopAttackInfoRequest,
    cb?: (error: string, rep: DescribeTopAttackInfoResponse) => void
  ): Promise<DescribeTopAttackInfoResponse> {
    return this.request("DescribeTopAttackInfo", req, cb)
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
   * 查询云边界分析-暴露路径下主机节点的高危基线风险列表
   */
  async DescribeHighBaseLineRiskList(
    req: DescribeHighBaseLineRiskListRequest,
    cb?: (error: string, rep: DescribeHighBaseLineRiskListResponse) => void
  ): Promise<DescribeHighBaseLineRiskListResponse> {
    return this.request("DescribeHighBaseLineRiskList", req, cb)
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
   * 创建域名、ip相关信息
   */
  async CreateDomainAndIp(
    req: CreateDomainAndIpRequest,
    cb?: (error: string, rep: CreateDomainAndIpResponse) => void
  ): Promise<CreateDomainAndIpResponse> {
    return this.request("CreateDomainAndIp", req, cb)
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
   * 获取扫描任务列表
   */
  async DescribeScanTaskList(
    req: DescribeScanTaskListRequest,
    cb?: (error: string, rep: DescribeScanTaskListResponse) => void
  ): Promise<DescribeScanTaskListResponse> {
    return this.request("DescribeScanTaskList", req, cb)
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
   * 批量告警状态处理接口
   */
  async UpdateAlertStatusList(
    req: UpdateAlertStatusListRequest,
    cb?: (error: string, rep: UpdateAlertStatusListResponse) => void
  ): Promise<UpdateAlertStatusListResponse> {
    return this.request("UpdateAlertStatusList", req, cb)
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
   * 云边界分析资产分类
   */
  async DescribeExposeAssetCategory(
    req: DescribeExposeAssetCategoryRequest,
    cb?: (error: string, rep: DescribeExposeAssetCategoryResponse) => void
  ): Promise<DescribeExposeAssetCategoryResponse> {
    return this.request("DescribeExposeAssetCategory", req, cb)
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
   * 查询云边界分析-暴露路径下主机节点的进程列表
   */
  async DescribeAssetProcessList(
    req: DescribeAssetProcessListRequest,
    cb?: (error: string, rep: DescribeAssetProcessListResponse) => void
  ): Promise<DescribeAssetProcessListResponse> {
    return this.request("DescribeAssetProcessList", req, cb)
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
   * 获取端口视角的端口风险列表
   */
  async DescribeRiskCenterPortViewPortRiskList(
    req: DescribeRiskCenterPortViewPortRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterPortViewPortRiskListResponse) => void
  ): Promise<DescribeRiskCenterPortViewPortRiskListResponse> {
    return this.request("DescribeRiskCenterPortViewPortRiskList", req, cb)
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
   * 查询漏洞风险高级配置
   */
  async DescribeVULRiskAdvanceCFGList(
    req: DescribeVULRiskAdvanceCFGListRequest,
    cb?: (error: string, rep: DescribeVULRiskAdvanceCFGListResponse) => void
  ): Promise<DescribeVULRiskAdvanceCFGListResponse> {
    return this.request("DescribeVULRiskAdvanceCFGList", req, cb)
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
   * 修改风险中心风险状态
   */
  async ModifyRiskCenterRiskStatus(
    req: ModifyRiskCenterRiskStatusRequest,
    cb?: (error: string, rep: ModifyRiskCenterRiskStatusResponse) => void
  ): Promise<ModifyRiskCenterRiskStatusResponse> {
    return this.request("ModifyRiskCenterRiskStatus", req, cb)
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
   * 获取配置视角的配置风险列表
   */
  async DescribeRiskCenterCFGViewCFGRiskList(
    req: DescribeRiskCenterCFGViewCFGRiskListRequest,
    cb?: (error: string, rep: DescribeRiskCenterCFGViewCFGRiskListResponse) => void
  ): Promise<DescribeRiskCenterCFGViewCFGRiskListResponse> {
    return this.request("DescribeRiskCenterCFGViewCFGRiskList", req, cb)
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
   * 集群列表
   */
  async DescribeClusterAssets(
    req: DescribeClusterAssetsRequest,
    cb?: (error: string, rep: DescribeClusterAssetsResponse) => void
  ): Promise<DescribeClusterAssetsResponse> {
    return this.request("DescribeClusterAssets", req, cb)
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
   * 获取风险中心风险概况示例
   */
  async DescribeCSIPRiskStatistics(
    req: DescribeCSIPRiskStatisticsRequest,
    cb?: (error: string, rep: DescribeCSIPRiskStatisticsResponse) => void
  ): Promise<DescribeCSIPRiskStatisticsResponse> {
    return this.request("DescribeCSIPRiskStatistics", req, cb)
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
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
  }
}
