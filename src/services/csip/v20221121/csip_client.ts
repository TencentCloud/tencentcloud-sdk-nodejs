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
  DescribeDbAssetInfoResponse,
  DeleteRiskScanTaskRequest,
  DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
  DescribeVULRiskAdvanceCFGListResponse,
  TaskCenterWeakPwdRiskInputParam,
  DescribeAssetViewVulRiskListResponse,
  DescribeOrganizationUserInfoRequest,
  ModifyUebaRuleSwitchResponse,
  FilterDataObject,
  ReportItemKey,
  TaskAdvanceCFG,
  CVMAssetVO,
  AssetViewCFGRisk,
  DescribeSubnetAssetsRequest,
  DescribeScanReportListRequest,
  AlertInfo,
  KeyValue,
  Vpc,
  PortRiskAdvanceCFGParamItem,
  StatisticalFilter,
  AssetBaseInfoResponse,
  DescribeVULRiskDetailRequest,
  DataSearchBug,
  OrganizationUserInfo,
  AssetTag,
  NewAlertKey,
  IpAssetListVO,
  UebaCustomRule,
  DescribeClusterAssetsRequest,
  DescribeTopAttackInfoResponse,
  DescribeVULRiskDetailResponse,
  DescribeDomainAssetsRequest,
  ModifyRiskCenterScanTaskResponse,
  DescribeRiskCenterAssetViewCFGRiskListRequest,
  DescribeRiskCenterWebsiteRiskListResponse,
  Tag,
  ModifyRiskCenterRiskStatusResponse,
  UpdateAlertStatusListResponse,
  DeleteDomainAndIpRequest,
  DescribeNICAssetsRequest,
  DescribeScanTaskListRequest,
  DescribeOrganizationInfoRequest,
  TaskIdListKey,
  RoleInfo,
  DescribeUebaRuleResponse,
  UebaEventContent,
  GateWayAsset,
  ModifyUebaRuleSwitchRequest,
  DescribeScanReportListResponse,
  DescribeSearchBugInfoRequest,
  TaskLogURL,
  AssetViewVULRiskData,
  DescribeOrganizationUserInfoResponse,
  NICAsset,
  OrganizationInfo,
  DescribeListenerListResponse,
  DBAssetVO,
  AssetInfoDetail,
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
  RiskCenterStatusKey,
  DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
  PublicIpDomainListKey,
  DescribeTopAttackInfoRequest,
  ProductSupport,
  DescribeCVMAssetsResponse,
  VulImpactComponentInfo,
  VULRiskAdvanceCFGList,
  WhereFilter,
  SubUserInfo,
  CloudCountDesc,
  DescribePublicIpAssetsRequest,
  AssetClusterPod,
  DescribeCVMAssetInfoRequest,
  AssetViewWeakPassRisk,
  WebsiteRisk,
  ServiceSupport,
  CreateRiskCenterScanTaskRequest,
  DescribeRiskCenterAssetViewCFGRiskListResponse,
  DescribeRiskCenterVULViewVULRiskListResponse,
  DescribeRiskCenterVULViewVULRiskListRequest,
  UpdateAlertStatusListRequest,
  TaskCenterVulRiskInputParam,
  StopRiskCenterTaskRequest,
  DescribeScanTaskListResponse,
  ScanTaskInfo,
  AssetInstanceTypeMap,
  Tags,
  VULViewVULRisk,
  PortViewPortRisk,
  VULRiskInfo,
  DescribeClusterPodAssetsRequest,
  DescribeCVMAssetInfoResponse,
  DescribePublicIpAssetsResponse,
  DescribeVulViewVulRiskListRequest,
  DescribeTaskLogURLResponse,
  VulTrend,
  ModifyOrganizationAccountStatusResponse,
  AlertExtraInfo,
  DescribeDbAssetInfoRequest,
  DescribeAssetViewVulRiskListRequest,
  DescribeUebaRuleRequest,
  DescribeVulViewVulRiskListResponse,
  Filter,
  DescribeRiskCenterWebsiteRiskListRequest,
  ServerRiskSuggestion,
  AssetViewVULRisk,
  DescribeClusterPodAssetsResponse,
  DescribeCFWAssetStatisticsResponse,
  DescribeGatewayAssetsResponse,
  AssetViewPortRisk,
  DescribeRiskCenterPortViewPortRiskListRequest,
  DescribeVpcAssetsResponse,
  DescribeRiskCenterPortViewPortRiskListResponse,
  DeleteDomainAndIpResponse,
  ServerRisk,
  ReportTaskIdList,
  UebaRule,
  AddNewBindRoleUserResponse,
  RelatedEvent,
  VULViewVULRiskData,
  DescribeAlertListResponse,
  ScanTaskInfoList,
  DescribeDbAssetsRequest,
  TaskLogInfo,
  DescribeVULRiskAdvanceCFGListRequest,
  DescribeRiskCenterAssetViewVULRiskListRequest,
  TaskCenterCFGRiskInputParam,
  DescribeAlertListRequest,
  CreateDomainAndIpRequest,
  DomainAssetVO,
  DescribeSearchBugInfoResponse,
  ModifyOrganizationAccountStatusRequest,
  DescribeClusterAssetsResponse,
  DescribeSubUserInfoResponse,
  BugInfoDetail,
  TagCount,
  DescribeDomainAssetsResponse,
  DescribeDbAssetsResponse,
  DescribeNICAssetsResponse,
  DescribeRiskCenterAssetViewVULRiskListResponse,
  DescribeCVMAssetsRequest,
  DescribeRiskCenterServerRiskListRequest,
  DescribeTaskLogListRequest,
  ModifyRiskCenterScanTaskRequest,
  ClbListenerListInfo,
  Element,
  DescribeRiskCenterServerRiskListResponse,
  DescribeListenerListRequest,
  DeleteRiskScanTaskResponse,
  DescribeGatewayAssetsRequest,
  DescribeCFWAssetStatisticsRequest,
  AssetCluster,
  CreateDomainAndIpResponse,
  DescribeTaskLogListResponse,
  DescribeSubUserInfoRequest,
  DescribeRiskCenterAssetViewPortRiskListResponse,
  DescribeTaskLogURLRequest,
  AddNewBindRoleUserRequest,
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
   * 云防资产中心统计数据
   */
  async DescribeCFWAssetStatistics(
    req?: DescribeCFWAssetStatisticsRequest,
    cb?: (error: string, rep: DescribeCFWAssetStatisticsResponse) => void
  ): Promise<DescribeCFWAssetStatisticsResponse> {
    return this.request("DescribeCFWAssetStatistics", req, cb)
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
   * 查询集团账号详情
   */
  async DescribeOrganizationInfo(
    req: DescribeOrganizationInfoRequest,
    cb?: (error: string, rep: DescribeOrganizationInfoResponse) => void
  ): Promise<DescribeOrganizationInfoResponse> {
    return this.request("DescribeOrganizationInfo", req, cb)
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
   * 更新自定义策略的开关
   */
  async ModifyUebaRuleSwitch(
    req: ModifyUebaRuleSwitchRequest,
    cb?: (error: string, rep: ModifyUebaRuleSwitchResponse) => void
  ): Promise<ModifyUebaRuleSwitchResponse> {
    return this.request("ModifyUebaRuleSwitch", req, cb)
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
   * 批量告警状态处理接口
   */
  async UpdateAlertStatusList(
    req: UpdateAlertStatusListRequest,
    cb?: (error: string, rep: UpdateAlertStatusListResponse) => void
  ): Promise<UpdateAlertStatusListResponse> {
    return this.request("UpdateAlertStatusList", req, cb)
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
   * cvm详情
   */
  async DescribeCVMAssetInfo(
    req: DescribeCVMAssetInfoRequest,
    cb?: (error: string, rep: DescribeCVMAssetInfoResponse) => void
  ): Promise<DescribeCVMAssetInfoResponse> {
    return this.request("DescribeCVMAssetInfo", req, cb)
  }
}
