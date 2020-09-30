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
  ExportBashEventsRequest,
  ModifyAutoOpenProVersionConfigRequest,
  DescribeProcessTaskStatusResponse,
  ExportReverseShellEventsResponse,
  DescribeBashRulesRequest,
  ExportPrivilegeEventsResponse,
  DescribeAlarmAttributeResponse,
  DescribeWeeklyReportBruteAttacksResponse,
  DescribeAgentVulsRequest,
  DescribeTagsRequest,
  AddMachineTagResponse,
  UsualPlace,
  DescribeReverseShellRulesRequest,
  SetBashEventsStatusRequest,
  DescribeAccountsRequest,
  DescribeReverseShellEventsRequest,
  WeeklyReportVul,
  DescribeWeeklyReportBruteAttacksRequest,
  CreateUsualLoginPlacesRequest,
  DescribeProcessTaskStatusRequest,
  RegionInfo,
  DescribeVulScanResultResponse,
  ModifyAlarmAttributeRequest,
  DescribeAttackLogsRequest,
  ComponentStatistics,
  InquiryPriceOpenProVersionPrepaidRequest,
  ExportMalwaresRequest,
  DescribeProcessesResponse,
  DeleteBashEventsResponse,
  ExportPrivilegeEventsRequest,
  WeeklyReportMalware,
  CreateBaselineStrategyRequest,
  DescribeSecurityTrendsRequest,
  Account,
  DescribeReverseShellEventsResponse,
  DescribePrivilegeRulesRequest,
  BruteAttack,
  DescribeOpenPortsRequest,
  DescribeImpactedHostsRequest,
  DescribeMaliciousRequestsResponse,
  NonLocalLoginPlace,
  CreateProcessTaskResponse,
  SecurityDynamic,
  RenewProVersionRequest,
  DescribeComponentsRequest,
  DescribeNonlocalLoginPlacesRequest,
  DeleteMachineTagRequest,
  CreateBaselineStrategyResponse,
  ReverseShellRule,
  OpenPortStatistics,
  EditPrivilegeRuleResponse,
  DescribeHistoryAccountsResponse,
  AgentVul,
  UntrustMalwaresRequest,
  ExportAttackLogsResponse,
  DescribeAccountsResponse,
  DescribeLoginWhiteListRequest,
  ReverseShell,
  UntrustMaliciousRequestRequest,
  ExportNonlocalLoginPlacesRequest,
  DescribeComponentInfoResponse,
  DescribeAccountStatisticsResponse,
  OpenProVersionPrepaidRequest,
  ModifyLoginWhiteListResponse,
  DescribeTagsResponse,
  OpenPort,
  DescribeProVersionInfoRequest,
  CreateProcessTaskRequest,
  DeleteMaliciousRequestsResponse,
  ExportBruteAttacksResponse,
  EditReverseShellRuleResponse,
  ExportBruteAttacksRequest,
  DeleteMachineResponse,
  DeleteLoginWhiteListRequest,
  MachineTag,
  DescribeAttackLogInfoResponse,
  DescribePrivilegeEventsResponse,
  WeeklyReportNonlocalLoginPlace,
  DescribeOverviewStatisticsResponse,
  RecoverMalwaresRequest,
  MaliciousRequest,
  TrustMalwaresResponse,
  TagMachine,
  DescribeWeeklyReportInfoRequest,
  EditTagsRequest,
  AddLoginWhiteListRequest,
  DeleteReverseShellRulesRequest,
  DescribeWeeklyReportsRequest,
  DescribeBashRulesResponse,
  DescribeImpactedHostsResponse,
  RescanImpactedHostRequest,
  DescribeBashEventsResponse,
  ModifyLoginWhiteListRequest,
  DescribeBashEventsRequest,
  DeleteTagsRequest,
  DescribeOpenPortStatisticsRequest,
  ExportAttackLogsRequest,
  DeleteMachineRequest,
  DescribeVulInfoRequest,
  UntrustMaliciousRequestResponse,
  DescribeComponentStatisticsResponse,
  PrivilegeEscalationProcess,
  Place,
  SwitchBashRulesResponse,
  LoginWhiteLists,
  DeleteUsualLoginPlacesResponse,
  DeleteNonlocalLoginPlacesResponse,
  DescribeNonlocalLoginPlacesResponse,
  DeleteReverseShellRulesResponse,
  ExportMalwaresResponse,
  UntrustMalwaresResponse,
  DeletePrivilegeRulesResponse,
  CreateOpenPortTaskResponse,
  EditBashRuleRequest,
  DeletePrivilegeEventsResponse,
  InquiryPriceOpenProVersionPrepaidResponse,
  CloseProVersionRequest,
  SetBashEventsStatusResponse,
  DescribeUsualLoginPlacesResponse,
  DescribeProcessStatisticsResponse,
  MisAlarmNonlocalLoginPlacesRequest,
  TrustMaliciousRequestRequest,
  ExportMaliciousRequestsResponse,
  DescribeAttackLogInfoRequest,
  DescribeWeeklyReportMalwaresRequest,
  DescribeBruteAttacksResponse,
  ExportNonlocalLoginPlacesResponse,
  DescribeComponentStatisticsRequest,
  DescribeOverviewStatisticsRequest,
  DescribeOpenPortStatisticsResponse,
  DeleteAttackLogsResponse,
  DescribeLoginWhiteListResponse,
  DescribeVulInfoResponse,
  DescribeTagMachinesRequest,
  EditReverseShellRuleRequest,
  DescribeProVersionInfoResponse,
  DeleteTagsResponse,
  DeleteBruteAttacksRequest,
  DescribeWeeklyReportVulsRequest,
  AddLoginWhiteListResponse,
  BashRule,
  DescribeOpenPortTaskStatusResponse,
  DescribeWeeklyReportNonlocalLoginPlacesResponse,
  SeparateMalwaresRequest,
  RenewProVersionResponse,
  LoginWhiteListsRule,
  DescribeTagMachinesResponse,
  DescribeSecurityTrendsResponse,
  ProVersionMachine,
  CreateOpenPortTaskRequest,
  DescribeWeeklyReportInfoResponse,
  DescribeSecurityDynamicsResponse,
  DeleteReverseShellEventsResponse,
  DeletePrivilegeEventsRequest,
  DeleteBashRulesRequest,
  CloseProVersionResponse,
  DeleteAttackLogsRequest,
  DescribeOpenPortsResponse,
  EditBashRuleResponse,
  OpenProVersionResponse,
  DescribeMachineInfoRequest,
  DescribeMaliciousRequestsRequest,
  DescribeProcessesRequest,
  DeleteUsualLoginPlacesRequest,
  WeeklyReport,
  DescribeOpenPortTaskStatusRequest,
  Filter,
  DeleteLoginWhiteListResponse,
  DescribeAccountStatisticsRequest,
  DescribeAttackLogsResponse,
  OpenProVersionPrepaidResponse,
  MisAlarmNonlocalLoginPlacesResponse,
  DeleteMalwaresResponse,
  ChargePrepaid,
  DescribeWeeklyReportNonlocalLoginPlacesRequest,
  SeparateMalwaresResponse,
  ProcessStatistics,
  Process,
  DescribeBruteAttacksRequest,
  DescribeVulScanResultRequest,
  DescribePrivilegeEventsRequest,
  DescribeWeeklyReportMalwaresResponse,
  DescribeSecurityDynamicsRequest,
  ExportBashEventsResponse,
  ImpactedHost,
  DescribeReverseShellRulesResponse,
  DescribeComponentInfoRequest,
  DeleteNonlocalLoginPlacesRequest,
  EditPrivilegeRuleRequest,
  ExportMaliciousRequestsRequest,
  AccountStatistics,
  DescribeMachinesResponse,
  CreateUsualLoginPlacesResponse,
  DescribePrivilegeRulesResponse,
  ModifyProVersionRenewFlagResponse,
  Machine,
  TrustMalwaresRequest,
  Malware,
  DescribeWeeklyReportVulsResponse,
  WeeklyReportBruteAttack,
  DefendAttackLog,
  PrivilegeRule,
  HistoryAccount,
  ModifyProVersionRenewFlagRequest,
  TrustMaliciousRequestResponse,
  DescribeUsualLoginPlacesRequest,
  Component,
  DescribeVulsRequest,
  DescribeAgentVulsResponse,
  SwitchBashRulesRequest,
  DescribeProcessStatisticsRequest,
  DeleteMachineTagResponse,
  DescribeHistoryAccountsRequest,
  DescribeMachineInfoResponse,
  OpenProVersionRequest,
  DeleteBashRulesResponse,
  IgnoreImpactedHostsResponse,
  DeleteBashEventsRequest,
  DescribeComponentsResponse,
  Tag,
  RescanImpactedHostResponse,
  SecurityTrend,
  Vul,
  AddMachineTagRequest,
  DescribeWeeklyReportsResponse,
  DeleteReverseShellEventsRequest,
  ModifyAutoOpenProVersionConfigResponse,
  ExportReverseShellEventsRequest,
  DescribeVulsResponse,
  RecoverMalwaresResponse,
  EditTagsResponse,
  IgnoreImpactedHostsRequest,
  DescribeAlarmAttributeRequest,
  DescribeMalwaresRequest,
  DeleteBruteAttacksResponse,
  DeleteMaliciousRequestsRequest,
  DescribeMachinesRequest,
  ModifyAlarmAttributeResponse,
  BashEvent,
  DeleteMalwaresRequest,
  DescribeMalwaresResponse,
  DeletePrivilegeRulesRequest,
} from "./yunjing_models"

/**
 * yunjing client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("yunjing.tencentcloudapi.com", "2018-02-28", clientConfig)
  }

  /**
   * 删除标签
   */
  async DeleteTags(
    req: DeleteTagsRequest,
    cb?: (error: string, rep: DeleteTagsResponse) => void
  ): Promise<DeleteTagsResponse> {
    return this.request("DeleteTags", req, cb)
  }

  /**
   * 本接口(TrustMalwares)将被识别木马文件设为信任。
   */
  async TrustMalwares(
    req: TrustMalwaresRequest,
    cb?: (error: string, rep: TrustMalwaresResponse) => void
  ): Promise<TrustMalwaresResponse> {
    return this.request("TrustMalwares", req, cb)
  }

  /**
   * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
   */
  async DescribeComponentStatistics(
    req: DescribeComponentStatisticsRequest,
    cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void
  ): Promise<DescribeComponentStatisticsResponse> {
    return this.request("DescribeComponentStatistics", req, cb)
  }

  /**
   * 删除服务器关联的标签
   */
  async DeleteMachineTag(
    req: DeleteMachineTagRequest,
    cb?: (error: string, rep: DeleteMachineTagResponse) => void
  ): Promise<DeleteMachineTagResponse> {
    return this.request("DeleteMachineTag", req, cb)
  }

  /**
   * 按分页形式展示网络攻击日志列表
   */
  async DescribeAttackLogs(
    req: DescribeAttackLogsRequest,
    cb?: (error: string, rep: DescribeAttackLogsResponse) => void
  ): Promise<DescribeAttackLogsResponse> {
    return this.request("DescribeAttackLogs", req, cb)
  }

  /**
   * 本接口 (OpenProVersion) 用于开通专业版。
   */
  async OpenProVersion(
    req: OpenProVersionRequest,
    cb?: (error: string, rep: OpenProVersionResponse) => void
  ): Promise<OpenProVersionResponse> {
    return this.request("OpenProVersion", req, cb)
  }

  /**
   * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
   */
  async DescribeWeeklyReportMalwares(
    req: DescribeWeeklyReportMalwaresRequest,
    cb?: (error: string, rep: DescribeWeeklyReportMalwaresResponse) => void
  ): Promise<DescribeWeeklyReportMalwaresResponse> {
    return this.request("DescribeWeeklyReportMalwares", req, cb)
  }

  /**
   * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
   */
  async DescribeVulInfo(
    req: DescribeVulInfoRequest,
    cb?: (error: string, rep: DescribeVulInfoResponse) => void
  ): Promise<DescribeVulInfoResponse> {
    return this.request("DescribeVulInfo", req, cb)
  }

  /**
   * 新增或修改高危命令规则
   */
  async EditBashRule(
    req: EditBashRuleRequest,
    cb?: (error: string, rep: EditBashRuleResponse) => void
  ): Promise<EditBashRuleResponse> {
    return this.request("EditBashRule", req, cb)
  }

  /**
   * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
   */
  async DeleteUsualLoginPlaces(
    req: DeleteUsualLoginPlacesRequest,
    cb?: (error: string, rep: DeleteUsualLoginPlacesResponse) => void
  ): Promise<DeleteUsualLoginPlacesResponse> {
    return this.request("DeleteUsualLoginPlaces", req, cb)
  }

  /**
   * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
   */
  async DescribeVuls(
    req: DescribeVulsRequest,
    cb?: (error: string, rep: DescribeVulsResponse) => void
  ): Promise<DescribeVulsResponse> {
    return this.request("DescribeVuls", req, cb)
  }

  /**
   * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
   */
  async MisAlarmNonlocalLoginPlaces(
    req: MisAlarmNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: MisAlarmNonlocalLoginPlacesResponse) => void
  ): Promise<MisAlarmNonlocalLoginPlacesResponse> {
    return this.request("MisAlarmNonlocalLoginPlaces", req, cb)
  }

  /**
   * 根据策略信息创建基线策略
   */
  async CreateBaselineStrategy(
    req: CreateBaselineStrategyRequest,
    cb?: (error: string, rep: CreateBaselineStrategyResponse) => void
  ): Promise<CreateBaselineStrategyResponse> {
    return this.request("CreateBaselineStrategy", req, cb)
  }

  /**
   * 获取高危命令规则列表
   */
  async DescribeBashRules(
    req: DescribeBashRulesRequest,
    cb?: (error: string, rep: DescribeBashRulesResponse) => void
  ): Promise<DescribeBashRulesResponse> {
    return this.request("DescribeBashRules", req, cb)
  }

  /**
   * 根据Ids删除本地提权
   */
  async DeletePrivilegeEvents(
    req: DeletePrivilegeEventsRequest,
    cb?: (error: string, rep: DeletePrivilegeEventsResponse) => void
  ): Promise<DeletePrivilegeEventsResponse> {
    return this.request("DeletePrivilegeEvents", req, cb)
  }

  /**
   * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
   */
  async RenewProVersion(
    req: RenewProVersionRequest,
    cb?: (error: string, rep: RenewProVersionResponse) => void
  ): Promise<RenewProVersionResponse> {
    return this.request("RenewProVersion", req, cb)
  }

  /**
   * 导出网络攻击日志
   */
  async ExportAttackLogs(
    req?: ExportAttackLogsRequest,
    cb?: (error: string, rep: ExportAttackLogsResponse) => void
  ): Promise<ExportAttackLogsResponse> {
    return this.request("ExportAttackLogs", req, cb)
  }

  /**
   * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
   */
  async DescribeUsualLoginPlaces(
    req: DescribeUsualLoginPlacesRequest,
    cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void
  ): Promise<DescribeUsualLoginPlacesResponse> {
    return this.request("DescribeUsualLoginPlaces", req, cb)
  }

  /**
   * 根据Ids删除高危命令事件
   */
  async DeleteBashEvents(
    req: DeleteBashEventsRequest,
    cb?: (error: string, rep: DeleteBashEventsResponse) => void
  ): Promise<DeleteBashEventsResponse> {
    return this.request("DeleteBashEvents", req, cb)
  }

  /**
   * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
   */
  async DeleteMaliciousRequests(
    req: DeleteMaliciousRequestsRequest,
    cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void
  ): Promise<DeleteMaliciousRequestsResponse> {
    return this.request("DeleteMaliciousRequests", req, cb)
  }

  /**
   * 获取反弹Shell规则列表
   */
  async DescribeReverseShellRules(
    req: DescribeReverseShellRulesRequest,
    cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void
  ): Promise<DescribeReverseShellRulesResponse> {
    return this.request("DescribeReverseShellRules", req, cb)
  }

  /**
   * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
   */
  async RecoverMalwares(
    req: RecoverMalwaresRequest,
    cb?: (error: string, rep: RecoverMalwaresResponse) => void
  ): Promise<RecoverMalwaresResponse> {
    return this.request("RecoverMalwares", req, cb)
  }

  /**
   * 删除反弹Shell规则
   */
  async DeleteReverseShellRules(
    req: DeleteReverseShellRulesRequest,
    cb?: (error: string, rep: DeleteReverseShellRulesResponse) => void
  ): Promise<DeleteReverseShellRulesResponse> {
    return this.request("DeleteReverseShellRules", req, cb)
  }

  /**
   * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
   */
  async DeleteBruteAttacks(
    req: DeleteBruteAttacksRequest,
    cb?: (error: string, rep: DeleteBruteAttacksResponse) => void
  ): Promise<DeleteBruteAttacksResponse> {
    return this.request("DeleteBruteAttacks", req, cb)
  }

  /**
   * 导出高危命令事件
   */
  async ExportBashEvents(
    req?: ExportBashEventsRequest,
    cb?: (error: string, rep: ExportBashEventsResponse) => void
  ): Promise<ExportBashEventsResponse> {
    return this.request("ExportBashEvents", req, cb)
  }

  /**
   * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
   */
  async CreateProcessTask(
    req: CreateProcessTaskRequest,
    cb?: (error: string, rep: CreateProcessTaskResponse) => void
  ): Promise<CreateProcessTaskResponse> {
    return this.request("CreateProcessTask", req, cb)
  }

  /**
   * 编辑反弹Shell规则
   */
  async EditReverseShellRule(
    req: EditReverseShellRuleRequest,
    cb?: (error: string, rep: EditReverseShellRuleResponse) => void
  ): Promise<EditReverseShellRuleResponse> {
    return this.request("EditReverseShellRule", req, cb)
  }

  /**
   * 本接口 (DescribeProcesses) 用于获取进程列表数据。
   */
  async DescribeProcesses(
    req: DescribeProcessesRequest,
    cb?: (error: string, rep: DescribeProcessesResponse) => void
  ): Promise<DescribeProcessesResponse> {
    return this.request("DescribeProcesses", req, cb)
  }

  /**
   * 本接口（DescribeMalwares）用于获取木马事件列表。
   */
  async DescribeMalwares(
    req: DescribeMalwaresRequest,
    cb?: (error: string, rep: DescribeMalwaresResponse) => void
  ): Promise<DescribeMalwaresResponse> {
    return this.request("DescribeMalwares", req, cb)
  }

  /**
   * 编辑白名单规则
   */
  async ModifyLoginWhiteList(
    req: ModifyLoginWhiteListRequest,
    cb?: (error: string, rep: ModifyLoginWhiteListResponse) => void
  ): Promise<ModifyLoginWhiteListResponse> {
    return this.request("ModifyLoginWhiteList", req, cb)
  }

  /**
   * 获取本地提权规则列表
   */
  async DescribePrivilegeRules(
    req: DescribePrivilegeRulesRequest,
    cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void
  ): Promise<DescribePrivilegeRulesResponse> {
    return this.request("DescribePrivilegeRules", req, cb)
  }

  /**
   * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
   */
  async UntrustMaliciousRequest(
    req: UntrustMaliciousRequestRequest,
    cb?: (error: string, rep: UntrustMaliciousRequestResponse) => void
  ): Promise<UntrustMaliciousRequestResponse> {
    return this.request("UntrustMaliciousRequest", req, cb)
  }

  /**
   * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
   */
  async DescribeImpactedHosts(
    req: DescribeImpactedHostsRequest,
    cb?: (error: string, rep: DescribeImpactedHostsResponse) => void
  ): Promise<DescribeImpactedHostsResponse> {
    return this.request("DescribeImpactedHosts", req, cb)
  }

  /**
   * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
   */
  async DeleteNonlocalLoginPlaces(
    req: DeleteNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void
  ): Promise<DeleteNonlocalLoginPlacesResponse> {
    return this.request("DeleteNonlocalLoginPlaces", req, cb)
  }

  /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     */
  async DescribeOpenPorts(
    req: DescribeOpenPortsRequest,
    cb?: (error: string, rep: DescribeOpenPortsResponse) => void
  ): Promise<DescribeOpenPortsResponse> {
    return this.request("DescribeOpenPorts", req, cb)
  }

  /**
   * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
   */
  async ExportMaliciousRequests(
    req?: ExportMaliciousRequestsRequest,
    cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void
  ): Promise<ExportMaliciousRequestsResponse> {
    return this.request("ExportMaliciousRequests", req, cb)
  }

  /**
   * 获取指定标签关联的服务器信息
   */
  async DescribeTagMachines(
    req: DescribeTagMachinesRequest,
    cb?: (error: string, rep: DescribeTagMachinesResponse) => void
  ): Promise<DescribeTagMachinesResponse> {
    return this.request("DescribeTagMachines", req, cb)
  }

  /**
   * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
   */
  async DescribeNonlocalLoginPlaces(
    req: DescribeNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: DescribeNonlocalLoginPlacesResponse) => void
  ): Promise<DescribeNonlocalLoginPlacesResponse> {
    return this.request("DescribeNonlocalLoginPlaces", req, cb)
  }

  /**
   * 导出本地提权事件
   */
  async ExportPrivilegeEvents(
    req?: ExportPrivilegeEventsRequest,
    cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void
  ): Promise<ExportPrivilegeEventsResponse> {
    return this.request("ExportPrivilegeEvents", req, cb)
  }

  /**
   * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
   */
  async DescribeOverviewStatistics(
    req?: DescribeOverviewStatisticsRequest,
    cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void
  ): Promise<DescribeOverviewStatisticsResponse> {
    return this.request("DescribeOverviewStatistics", req, cb)
  }

  /**
   * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
   */
  async DescribeOpenPortTaskStatus(
    req: DescribeOpenPortTaskStatusRequest,
    cb?: (error: string, rep: DescribeOpenPortTaskStatusResponse) => void
  ): Promise<DescribeOpenPortTaskStatusResponse> {
    return this.request("DescribeOpenPortTaskStatus", req, cb)
  }

  /**
   * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
   */
  async DescribeSecurityDynamics(
    req: DescribeSecurityDynamicsRequest,
    cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void
  ): Promise<DescribeSecurityDynamicsResponse> {
    return this.request("DescribeSecurityDynamics", req, cb)
  }

  /**
   * 根据Ids删除反弹Shell事件
   */
  async DeleteReverseShellEvents(
    req: DeleteReverseShellEventsRequest,
    cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void
  ): Promise<DeleteReverseShellEventsResponse> {
    return this.request("DeleteReverseShellEvents", req, cb)
  }

  /**
   * 删除本地提权规则
   */
  async DeletePrivilegeRules(
    req: DeletePrivilegeRulesRequest,
    cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void
  ): Promise<DeletePrivilegeRulesResponse> {
    return this.request("DeletePrivilegeRules", req, cb)
  }

  /**
   * 本接口 (DeleteMalwares) 用于删除木马记录。
   */
  async DeleteMalwares(
    req: DeleteMalwaresRequest,
    cb?: (error: string, rep: DeleteMalwaresResponse) => void
  ): Promise<DeleteMalwaresResponse> {
    return this.request("DeleteMalwares", req, cb)
  }

  /**
   * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
   */
  async DescribeWeeklyReportNonlocalLoginPlaces(
    req: DescribeWeeklyReportNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: DescribeWeeklyReportNonlocalLoginPlacesResponse) => void
  ): Promise<DescribeWeeklyReportNonlocalLoginPlacesResponse> {
    return this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, cb)
  }

  /**
   * 删除白名单规则
   */
  async DeleteLoginWhiteList(
    req: DeleteLoginWhiteListRequest,
    cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void
  ): Promise<DeleteLoginWhiteListResponse> {
    return this.request("DeleteLoginWhiteList", req, cb)
  }

  /**
   * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
   */
  async CreateOpenPortTask(
    req: CreateOpenPortTaskRequest,
    cb?: (error: string, rep: CreateOpenPortTaskResponse) => void
  ): Promise<CreateOpenPortTaskResponse> {
    return this.request("CreateOpenPortTask", req, cb)
  }

  /**
   * 本接口 (CloseProVersion) 用于关闭专业版。
   */
  async CloseProVersion(
    req: CloseProVersionRequest,
    cb?: (error: string, rep: CloseProVersionResponse) => void
  ): Promise<CloseProVersionResponse> {
    return this.request("CloseProVersion", req, cb)
  }

  /**
   * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
   */
  async DescribeAccountStatistics(
    req: DescribeAccountStatisticsRequest,
    cb?: (error: string, rep: DescribeAccountStatisticsResponse) => void
  ): Promise<DescribeAccountStatisticsResponse> {
    return this.request("DescribeAccountStatistics", req, cb)
  }

  /**
   * 本接口（ModifyAlarmAttribute）用于修改告警设置。
   */
  async ModifyAlarmAttribute(
    req: ModifyAlarmAttributeRequest,
    cb?: (error: string, rep: ModifyAlarmAttributeResponse) => void
  ): Promise<ModifyAlarmAttributeResponse> {
    return this.request("ModifyAlarmAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
   */
  async DescribeOpenPortStatistics(
    req: DescribeOpenPortStatisticsRequest,
    cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void
  ): Promise<DescribeOpenPortStatisticsResponse> {
    return this.request("DescribeOpenPortStatistics", req, cb)
  }

  /**
   * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
   */
  async ExportBruteAttacks(
    req?: ExportBruteAttacksRequest,
    cb?: (error: string, rep: ExportBruteAttacksResponse) => void
  ): Promise<ExportBruteAttacksResponse> {
    return this.request("ExportBruteAttacks", req, cb)
  }

  /**
   * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
   */
  async TrustMaliciousRequest(
    req: TrustMaliciousRequestRequest,
    cb?: (error: string, rep: TrustMaliciousRequestResponse) => void
  ): Promise<TrustMaliciousRequestResponse> {
    return this.request("TrustMaliciousRequest", req, cb)
  }

  /**
   * 切换高危命令规则状态
   */
  async SwitchBashRules(
    req: SwitchBashRulesRequest,
    cb?: (error: string, rep: SwitchBashRulesResponse) => void
  ): Promise<SwitchBashRulesResponse> {
    return this.request("SwitchBashRules", req, cb)
  }

  /**
   * 新增或修改本地提权规则
   */
  async EditPrivilegeRule(
    req: EditPrivilegeRuleRequest,
    cb?: (error: string, rep: EditPrivilegeRuleResponse) => void
  ): Promise<EditPrivilegeRuleResponse> {
    return this.request("EditPrivilegeRule", req, cb)
  }

  /**
   * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
   */
  async ExportMalwares(
    req?: ExportMalwaresRequest,
    cb?: (error: string, rep: ExportMalwaresResponse) => void
  ): Promise<ExportMalwaresResponse> {
    return this.request("ExportMalwares", req, cb)
  }

  /**
   * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
   */
  async DescribeBruteAttacks(
    req: DescribeBruteAttacksRequest,
    cb?: (error: string, rep: DescribeBruteAttacksResponse) => void
  ): Promise<DescribeBruteAttacksResponse> {
    return this.request("DescribeBruteAttacks", req, cb)
  }

  /**
   * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
   */
  async OpenProVersionPrepaid(
    req: OpenProVersionPrepaidRequest,
    cb?: (error: string, rep: OpenProVersionPrepaidResponse) => void
  ): Promise<OpenProVersionPrepaidResponse> {
    return this.request("OpenProVersionPrepaid", req, cb)
  }

  /**
   * 增加机器关联标签
   */
  async AddMachineTag(
    req: AddMachineTagRequest,
    cb?: (error: string, rep: AddMachineTagResponse) => void
  ): Promise<AddMachineTagResponse> {
    return this.request("AddMachineTag", req, cb)
  }

  /**
   * 新增或编辑标签
   */
  async EditTags(
    req: EditTagsRequest,
    cb?: (error: string, rep: EditTagsResponse) => void
  ): Promise<EditTagsResponse> {
    return this.request("EditTags", req, cb)
  }

  /**
   * 本接口（SeparateMalwares）用于隔离木马。
   */
  async SeparateMalwares(
    req: SeparateMalwaresRequest,
    cb?: (error: string, rep: SeparateMalwaresResponse) => void
  ): Promise<SeparateMalwaresResponse> {
    return this.request("SeparateMalwares", req, cb)
  }

  /**
   * 本接口（AddLoginWhiteList）用于添加白名单规则
   */
  async AddLoginWhiteList(
    req: AddLoginWhiteListRequest,
    cb?: (error: string, rep: AddLoginWhiteListResponse) => void
  ): Promise<AddLoginWhiteListResponse> {
    return this.request("AddLoginWhiteList", req, cb)
  }

  /**
   * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
   */
  async ExportNonlocalLoginPlaces(
    req?: ExportNonlocalLoginPlacesRequest,
    cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void
  ): Promise<ExportNonlocalLoginPlacesResponse> {
    return this.request("ExportNonlocalLoginPlaces", req, cb)
  }

  /**
   * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
   */
  async DescribeMaliciousRequests(
    req: DescribeMaliciousRequestsRequest,
    cb?: (error: string, rep: DescribeMaliciousRequestsResponse) => void
  ): Promise<DescribeMaliciousRequestsResponse> {
    return this.request("DescribeMaliciousRequests", req, cb)
  }

  /**
   * 删除高危命令规则
   */
  async DeleteBashRules(
    req: DeleteBashRulesRequest,
    cb?: (error: string, rep: DeleteBashRulesResponse) => void
  ): Promise<DeleteBashRulesResponse> {
    return this.request("DeleteBashRules", req, cb)
  }

  /**
   * 获取反弹Shell列表
   */
  async DescribeReverseShellEvents(
    req: DescribeReverseShellEventsRequest,
    cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void
  ): Promise<DescribeReverseShellEventsResponse> {
    return this.request("DescribeReverseShellEvents", req, cb)
  }

  /**
   * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
   */
  async ModifyAutoOpenProVersionConfig(
    req: ModifyAutoOpenProVersionConfigRequest,
    cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void
  ): Promise<ModifyAutoOpenProVersionConfigResponse> {
    return this.request("ModifyAutoOpenProVersionConfig", req, cb)
  }

  /**
   * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
   */
  async DescribeAgentVuls(
    req: DescribeAgentVulsRequest,
    cb?: (error: string, rep: DescribeAgentVulsResponse) => void
  ): Promise<DescribeAgentVulsResponse> {
    return this.request("DescribeAgentVuls", req, cb)
  }

  /**
   * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
   */
  async DescribeWeeklyReports(
    req: DescribeWeeklyReportsRequest,
    cb?: (error: string, rep: DescribeWeeklyReportsResponse) => void
  ): Promise<DescribeWeeklyReportsResponse> {
    return this.request("DescribeWeeklyReports", req, cb)
  }

  /**
   * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
   */
  async DescribeProVersionInfo(
    req?: DescribeProVersionInfoRequest,
    cb?: (error: string, rep: DescribeProVersionInfoResponse) => void
  ): Promise<DescribeProVersionInfoResponse> {
    return this.request("DescribeProVersionInfo", req, cb)
  }

  /**
   * 获取本地提权事件列表
   */
  async DescribePrivilegeEvents(
    req: DescribePrivilegeEventsRequest,
    cb?: (error: string, rep: DescribePrivilegeEventsResponse) => void
  ): Promise<DescribePrivilegeEventsResponse> {
    return this.request("DescribePrivilegeEvents", req, cb)
  }

  /**
   * 本接口（DescribeMachineInfo）用于获取机器详细信息。
   */
  async DescribeMachineInfo(
    req: DescribeMachineInfoRequest,
    cb?: (error: string, rep: DescribeMachineInfoResponse) => void
  ): Promise<DescribeMachineInfoResponse> {
    return this.request("DescribeMachineInfo", req, cb)
  }

  /**
   * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
   */
  async DescribeAlarmAttribute(
    req?: DescribeAlarmAttributeRequest,
    cb?: (error: string, rep: DescribeAlarmAttributeResponse) => void
  ): Promise<DescribeAlarmAttributeResponse> {
    return this.request("DescribeAlarmAttribute", req, cb)
  }

  /**
   * 本接口 (DescribeComponents) 用于获取组件列表数据。
   */
  async DescribeComponents(
    req: DescribeComponentsRequest,
    cb?: (error: string, rep: DescribeComponentsResponse) => void
  ): Promise<DescribeComponentsResponse> {
    return this.request("DescribeComponents", req, cb)
  }

  /**
   * 获取异地登录白名单列表
   */
  async DescribeLoginWhiteList(
    req: DescribeLoginWhiteListRequest,
    cb?: (error: string, rep: DescribeLoginWhiteListResponse) => void
  ): Promise<DescribeLoginWhiteListResponse> {
    return this.request("DescribeLoginWhiteList", req, cb)
  }

  /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     */
  async DescribeVulScanResult(
    req?: DescribeVulScanResultRequest,
    cb?: (error: string, rep: DescribeVulScanResultResponse) => void
  ): Promise<DescribeVulScanResultResponse> {
    return this.request("DescribeVulScanResult", req, cb)
  }

  /**
   * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
   */
  async DescribeHistoryAccounts(
    req: DescribeHistoryAccountsRequest,
    cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void
  ): Promise<DescribeHistoryAccountsResponse> {
    return this.request("DescribeHistoryAccounts", req, cb)
  }

  /**
   * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
   */
  async DescribeProcessStatistics(
    req: DescribeProcessStatisticsRequest,
    cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void
  ): Promise<DescribeProcessStatisticsResponse> {
    return this.request("DescribeProcessStatistics", req, cb)
  }

  /**
   * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
   */
  async DescribeWeeklyReportBruteAttacks(
    req: DescribeWeeklyReportBruteAttacksRequest,
    cb?: (error: string, rep: DescribeWeeklyReportBruteAttacksResponse) => void
  ): Promise<DescribeWeeklyReportBruteAttacksResponse> {
    return this.request("DescribeWeeklyReportBruteAttacks", req, cb)
  }

  /**
   * 本接口（UntrustMalwares）用于取消信任木马文件。
   */
  async UntrustMalwares(
    req: UntrustMalwaresRequest,
    cb?: (error: string, rep: UntrustMalwaresResponse) => void
  ): Promise<UntrustMalwaresResponse> {
    return this.request("UntrustMalwares", req, cb)
  }

  /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     */
  async DescribeWeeklyReportVuls(
    req: DescribeWeeklyReportVulsRequest,
    cb?: (error: string, rep: DescribeWeeklyReportVulsResponse) => void
  ): Promise<DescribeWeeklyReportVulsResponse> {
    return this.request("DescribeWeeklyReportVuls", req, cb)
  }

  /**
   * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
   */
  async DescribeWeeklyReportInfo(
    req: DescribeWeeklyReportInfoRequest,
    cb?: (error: string, rep: DescribeWeeklyReportInfoResponse) => void
  ): Promise<DescribeWeeklyReportInfoResponse> {
    return this.request("DescribeWeeklyReportInfo", req, cb)
  }

  /**
   * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
   */
  async DescribeComponentInfo(
    req: DescribeComponentInfoRequest,
    cb?: (error: string, rep: DescribeComponentInfoResponse) => void
  ): Promise<DescribeComponentInfoResponse> {
    return this.request("DescribeComponentInfo", req, cb)
  }

  /**
   * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
   */
  async ModifyProVersionRenewFlag(
    req: ModifyProVersionRenewFlagRequest,
    cb?: (error: string, rep: ModifyProVersionRenewFlagResponse) => void
  ): Promise<ModifyProVersionRenewFlagResponse> {
    return this.request("ModifyProVersionRenewFlag", req, cb)
  }

  /**
   * 设置高危命令事件状态
   */
  async SetBashEventsStatus(
    req: SetBashEventsStatusRequest,
    cb?: (error: string, rep: SetBashEventsStatusResponse) => void
  ): Promise<SetBashEventsStatusResponse> {
    return this.request("SetBashEventsStatus", req, cb)
  }

  /**
   * 导出反弹Shell事件
   */
  async ExportReverseShellEvents(
    req?: ExportReverseShellEventsRequest,
    cb?: (error: string, rep: ExportReverseShellEventsResponse) => void
  ): Promise<ExportReverseShellEventsResponse> {
    return this.request("ExportReverseShellEvents", req, cb)
  }

  /**
   * 删除网络攻击日志
   */
  async DeleteAttackLogs(
    req: DeleteAttackLogsRequest,
    cb?: (error: string, rep: DeleteAttackLogsResponse) => void
  ): Promise<DeleteAttackLogsResponse> {
    return this.request("DeleteAttackLogs", req, cb)
  }

  /**
   * 本接口（DeleteMachine）用于卸载云镜客户端。
   */
  async DeleteMachine(
    req: DeleteMachineRequest,
    cb?: (error: string, rep: DeleteMachineResponse) => void
  ): Promise<DeleteMachineResponse> {
    return this.request("DeleteMachine", req, cb)
  }

  /**
   * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
   */
  async DescribeProcessTaskStatus(
    req: DescribeProcessTaskStatusRequest,
    cb?: (error: string, rep: DescribeProcessTaskStatusResponse) => void
  ): Promise<DescribeProcessTaskStatusResponse> {
    return this.request("DescribeProcessTaskStatus", req, cb)
  }

  /**
   * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
   */
  async RescanImpactedHost(
    req: RescanImpactedHostRequest,
    cb?: (error: string, rep: RescanImpactedHostResponse) => void
  ): Promise<RescanImpactedHostResponse> {
    return this.request("RescanImpactedHost", req, cb)
  }

  /**
   * 获取所有主机标签
   */
  async DescribeTags(
    req: DescribeTagsRequest,
    cb?: (error: string, rep: DescribeTagsResponse) => void
  ): Promise<DescribeTagsResponse> {
    return this.request("DescribeTags", req, cb)
  }

  /**
   * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
   */
  async DescribeSecurityTrends(
    req: DescribeSecurityTrendsRequest,
    cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void
  ): Promise<DescribeSecurityTrendsResponse> {
    return this.request("DescribeSecurityTrends", req, cb)
  }

  /**
   * 网络攻击日志详情
   */
  async DescribeAttackLogInfo(
    req: DescribeAttackLogInfoRequest,
    cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void
  ): Promise<DescribeAttackLogInfoResponse> {
    return this.request("DescribeAttackLogInfo", req, cb)
  }

  /**
   * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
   */
  async IgnoreImpactedHosts(
    req: IgnoreImpactedHostsRequest,
    cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void
  ): Promise<IgnoreImpactedHostsResponse> {
    return this.request("IgnoreImpactedHosts", req, cb)
  }

  /**
   * 获取高危命令列表
   */
  async DescribeBashEvents(
    req: DescribeBashEventsRequest,
    cb?: (error: string, rep: DescribeBashEventsResponse) => void
  ): Promise<DescribeBashEventsResponse> {
    return this.request("DescribeBashEvents", req, cb)
  }

  /**
   * 本接口 (DescribeMachines) 用于获取区域主机列表。
   */
  async DescribeMachines(
    req: DescribeMachinesRequest,
    cb?: (error: string, rep: DescribeMachinesResponse) => void
  ): Promise<DescribeMachinesResponse> {
    return this.request("DescribeMachines", req, cb)
  }

  /**
   * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
   */
  async CreateUsualLoginPlaces(
    req: CreateUsualLoginPlacesRequest,
    cb?: (error: string, rep: CreateUsualLoginPlacesResponse) => void
  ): Promise<CreateUsualLoginPlacesResponse> {
    return this.request("CreateUsualLoginPlaces", req, cb)
  }

  /**
   * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
   */
  async InquiryPriceOpenProVersionPrepaid(
    req: InquiryPriceOpenProVersionPrepaidRequest,
    cb?: (error: string, rep: InquiryPriceOpenProVersionPrepaidResponse) => void
  ): Promise<InquiryPriceOpenProVersionPrepaidResponse> {
    return this.request("InquiryPriceOpenProVersionPrepaid", req, cb)
  }
}
