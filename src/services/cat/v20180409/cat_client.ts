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
  ModifyAgentGroupRequest,
  AlarmInfo,
  CreateTaskExResponse,
  DescribeProbeNodesResponse,
  RunTaskRequest,
  DescribeTaskDetailResponse,
  DescribeProbeMetricDataResponse,
  DeleteTasksResponse,
  CatTaskDetail,
  BindAlarmPolicyRequest,
  DeleteProbeTaskRequest,
  ResultSummary,
  DescribeDetailedSingleProbeDataResponse,
  DescribeAlarmsByTaskRequest,
  DescribeAlarmsRequest,
  DescribeUserLimitResponse,
  CreateTaskExRequest,
  PauseTaskRequest,
  GetResultSummaryRequest,
  ProbeTask,
  DataPoint,
  DescribeAlarmTopicResponse,
  DescribeUserLimitRequest,
  Label,
  DescribeAgentsRequest,
  KeyValuePair,
  CatReturnDetail,
  IspDetail,
  GetReturnCodeInfoRequest,
  DescribeAgentsResponse,
  CreateAgentGroupResponse,
  DescribeDetailedSingleProbeDataRequest,
  DeleteAgentGroupResponse,
  AgentGroup,
  Tag,
  GetReturnCodeHistoryRequest,
  ProvinceDetail,
  GetRealAvailRatioResponse,
  UpdateProbeTaskConfigurationListResponse,
  CreateAgentGroupRequest,
  ResumeProbeTaskResponse,
  ModifyTaskExResponse,
  DescribeAlarmsByTaskResponse,
  ModifyTaskExRequest,
  ResumeProbeTaskRequest,
  DescribeTasksByTypeRequest,
  NodeDefine,
  GetReturnCodeHistoryResponse,
  GetAvailRatioHistoryRequest,
  GetTaskTotalNumberResponse,
  DimensionsDetail,
  GetDailyAvailRatioRequest,
  CatReturnSummary,
  TaskResult,
  SuspendProbeTaskResponse,
  GetRespTimeTrendExResponse,
  DataPointMetric,
  DescribeCatLogsRequest,
  GetAvailRatioHistoryResponse,
  DescribeProbeTasksResponse,
  DescribeAlarmsResponse,
  DescribeTasksByTypeResponse,
  DescribeAlarmTopicRequest,
  DescribeAgentGroupsResponse,
  SuspendProbeTaskRequest,
  DescribeProbeMetricDataRequest,
  GetRespTimeTrendExRequest,
  UpdateProbeTaskConfigurationListRequest,
  CreateProbeTasksRequest,
  CatLog,
  DescribeAgentGroupsRequest,
  TaskAlarm,
  DescribeCatLogsResponse,
  DetailedSingleDataDefine,
  GetReturnCodeInfoResponse,
  BindAlarmPolicyResponse,
  RunTaskResponse,
  Field,
  ProbeTaskBasicConfiguration,
  VerifyResultRequest,
  GetTaskTotalNumberRequest,
  ModifyAgentGroupResponse,
  DescribeTaskDetailRequest,
  GetResultSummaryResponse,
  VerifyResultResponse,
  AlarmTopic,
  DeleteTasksRequest,
  DescribeProbeTasksRequest,
  PauseTaskResponse,
  GetDailyAvailRatioResponse,
  DeleteAgentGroupRequest,
  GetRealAvailRatioRequest,
  DeleteProbeTaskResponse,
  CreateProbeTasksResponse,
  DescribeProbeNodesRequest,
  CatAgent,
} from "./cat_models"

/**
 * cat client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cat.tencentcloudapi.com", "2018-04-09", clientConfig)
  }

  /**
   * 暂停拨测任务
   */
  async SuspendProbeTask(
    req: SuspendProbeTaskRequest,
    cb?: (error: string, rep: SuspendProbeTaskResponse) => void
  ): Promise<SuspendProbeTaskResponse> {
    return this.request("SuspendProbeTask", req, cb)
  }

  /**
   * 查询拨测任务的走势数据
   */
  async GetRespTimeTrendEx(
    req: GetRespTimeTrendExRequest,
    cb?: (error: string, rep: GetRespTimeTrendExResponse) => void
  ): Promise<GetRespTimeTrendExResponse> {
    return this.request("GetRespTimeTrendEx", req, cb)
  }

  /**
   * 修改拨测分组
   */
  async ModifyAgentGroup(
    req: ModifyAgentGroupRequest,
    cb?: (error: string, rep: ModifyAgentGroupResponse) => void
  ): Promise<ModifyAgentGroupResponse> {
    return this.request("ModifyAgentGroup", req, cb)
  }

  /**
   * 按类型查询拨测任务列表
   */
  async DescribeTasksByType(
    req: DescribeTasksByTypeRequest,
    cb?: (error: string, rep: DescribeTasksByTypeResponse) => void
  ): Promise<DescribeTasksByTypeResponse> {
    return this.request("DescribeTasksByType", req, cb)
  }

  /**
   * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
   */
  async VerifyResult(
    req: VerifyResultRequest,
    cb?: (error: string, rep: VerifyResultResponse) => void
  ): Promise<VerifyResultResponse> {
    return this.request("VerifyResult", req, cb)
  }

  /**
   * 创建拨测任务(扩展)
   */
  async CreateTaskEx(
    req: CreateTaskExRequest,
    cb?: (error: string, rep: CreateTaskExResponse) => void
  ): Promise<CreateTaskExResponse> {
    return this.request("CreateTaskEx", req, cb)
  }

  /**
   * 暂停拨测任务
   */
  async PauseTask(
    req: PauseTaskRequest,
    cb?: (error: string, rep: PauseTaskResponse) => void
  ): Promise<PauseTaskResponse> {
    return this.request("PauseTask", req, cb)
  }

  /**
   * 查询拨测分组列表
   */
  async DescribeAgentGroups(
    req?: DescribeAgentGroupsRequest,
    cb?: (error: string, rep: DescribeAgentGroupsResponse) => void
  ): Promise<DescribeAgentGroupsResponse> {
    return this.request("DescribeAgentGroups", req, cb)
  }

  /**
   * 获取实时可用率信息
   */
  async GetRealAvailRatio(
    req: GetRealAvailRatioRequest,
    cb?: (error: string, rep: GetRealAvailRatioResponse) => void
  ): Promise<GetRealAvailRatioResponse> {
    return this.request("GetRealAvailRatio", req, cb)
  }

  /**
   * 添加拨测分组
   */
  async CreateAgentGroup(
    req: CreateAgentGroupRequest,
    cb?: (error: string, rep: CreateAgentGroupResponse) => void
  ): Promise<CreateAgentGroupResponse> {
    return this.request("CreateAgentGroup", req, cb)
  }

  /**
   * 查询拨测任务信息
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 批量创建拨测任务
   */
  async CreateProbeTasks(
    req: CreateProbeTasksRequest,
    cb?: (error: string, rep: CreateProbeTasksResponse) => void
  ): Promise<CreateProbeTasksResponse> {
    return this.request("CreateProbeTasks", req, cb)
  }

  /**
   * 查询用户的告警主题列表
   */
  async DescribeAlarmTopic(
    req: DescribeAlarmTopicRequest,
    cb?: (error: string, rep: DescribeAlarmTopicResponse) => void
  ): Promise<DescribeAlarmTopicResponse> {
    return this.request("DescribeAlarmTopic", req, cb)
  }

  /**
   * 查询拨测告警列表
   */
  async DescribeAlarms(
    req: DescribeAlarmsRequest,
    cb?: (error: string, rep: DescribeAlarmsResponse) => void
  ): Promise<DescribeAlarmsResponse> {
    return this.request("DescribeAlarms", req, cb)
  }

  /**
   * 查询拨测任务的历史返回码信息
   */
  async GetReturnCodeHistory(
    req: GetReturnCodeHistoryRequest,
    cb?: (error: string, rep: GetReturnCodeHistoryResponse) => void
  ): Promise<GetReturnCodeHistoryResponse> {
    return this.request("GetReturnCodeHistory", req, cb)
  }

  /**
   * 删除多个拨测任务
   */
  async DeleteTasks(
    req: DeleteTasksRequest,
    cb?: (error: string, rep: DeleteTasksResponse) => void
  ): Promise<DeleteTasksResponse> {
    return this.request("DeleteTasks", req, cb)
  }

  /**
   * 获取一天的整体可用率信息
   */
  async GetDailyAvailRatio(
    req: GetDailyAvailRatioRequest,
    cb?: (error: string, rep: GetDailyAvailRatioResponse) => void
  ): Promise<GetDailyAvailRatioResponse> {
    return this.request("GetDailyAvailRatio", req, cb)
  }

  /**
   * 列出云拨测指标详细数据
   */
  async DescribeProbeMetricData(
    req: DescribeProbeMetricDataRequest,
    cb?: (error: string, rep: DescribeProbeMetricDataResponse) => void
  ): Promise<DescribeProbeMetricDataResponse> {
    return this.request("DescribeProbeMetricData", req, cb)
  }

  /**
   * 恢复拨测任务
   */
  async ResumeProbeTask(
    req: ResumeProbeTaskRequest,
    cb?: (error: string, rep: ResumeProbeTaskResponse) => void
  ): Promise<ResumeProbeTaskResponse> {
    return this.request("ResumeProbeTask", req, cb)
  }

  /**
   * 修改拨测任务(扩展)
   */
  async ModifyTaskEx(
    req: ModifyTaskExRequest,
    cb?: (error: string, rep: ModifyTaskExResponse) => void
  ): Promise<ModifyTaskExResponse> {
    return this.request("ModifyTaskEx", req, cb)
  }

  /**
   * 查询本用户可选的拨测点列表
   */
  async DescribeAgents(
    req?: DescribeAgentsRequest,
    cb?: (error: string, rep: DescribeAgentsResponse) => void
  ): Promise<DescribeAgentsResponse> {
    return this.request("DescribeAgents", req, cb)
  }

  /**
   * 获取用户可用资源限制
   */
  async DescribeUserLimit(
    req?: DescribeUserLimitRequest,
    cb?: (error: string, rep: DescribeUserLimitResponse) => void
  ): Promise<DescribeUserLimitResponse> {
    return this.request("DescribeUserLimit", req, cb)
  }

  /**
   * 查询拨测流水
   */
  async DescribeCatLogs(
    req: DescribeCatLogsRequest,
    cb?: (error: string, rep: DescribeCatLogsResponse) => void
  ): Promise<DescribeCatLogsResponse> {
    return this.request("DescribeCatLogs", req, cb)
  }

  /**
   * 批量更新拨测任务配置
   */
  async UpdateProbeTaskConfigurationList(
    req: UpdateProbeTaskConfigurationListRequest,
    cb?: (error: string, rep: UpdateProbeTaskConfigurationListResponse) => void
  ): Promise<UpdateProbeTaskConfigurationListResponse> {
    return this.request("UpdateProbeTaskConfigurationList", req, cb)
  }

  /**
   * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
   */
  async DescribeDetailedSingleProbeData(
    req: DescribeDetailedSingleProbeDataRequest,
    cb?: (error: string, rep: DescribeDetailedSingleProbeDataResponse) => void
  ): Promise<DescribeDetailedSingleProbeDataResponse> {
    return this.request("DescribeDetailedSingleProbeData", req, cb)
  }

  /**
   * 绑定拨测任务和告警策略组
   */
  async BindAlarmPolicy(
    req: BindAlarmPolicyRequest,
    cb?: (error: string, rep: BindAlarmPolicyResponse) => void
  ): Promise<BindAlarmPolicyResponse> {
    return this.request("BindAlarmPolicy", req, cb)
  }

  /**
   * 查询拨测任务列表
   */
  async DescribeProbeTasks(
    req: DescribeProbeTasksRequest,
    cb?: (error: string, rep: DescribeProbeTasksResponse) => void
  ): Promise<DescribeProbeTasksResponse> {
    return this.request("DescribeProbeTasks", req, cb)
  }

  /**
   * 获取任务列表的实时数据
   */
  async GetResultSummary(
    req: GetResultSummaryRequest,
    cb?: (error: string, rep: GetResultSummaryResponse) => void
  ): Promise<GetResultSummaryResponse> {
    return this.request("GetResultSummary", req, cb)
  }

  /**
   * 删除拨测分组
   */
  async DeleteAgentGroup(
    req: DeleteAgentGroupRequest,
    cb?: (error: string, rep: DeleteAgentGroupResponse) => void
  ): Promise<DeleteAgentGroupResponse> {
    return this.request("DeleteAgentGroup", req, cb)
  }

  /**
   * 获取指定时刻的可用率地图信息
   */
  async GetAvailRatioHistory(
    req: GetAvailRatioHistoryRequest,
    cb?: (error: string, rep: GetAvailRatioHistoryResponse) => void
  ): Promise<GetAvailRatioHistoryResponse> {
    return this.request("GetAvailRatioHistory", req, cb)
  }

  /**
   * 运行拨测任务
   */
  async RunTask(
    req: RunTaskRequest,
    cb?: (error: string, rep: RunTaskResponse) => void
  ): Promise<RunTaskResponse> {
    return this.request("RunTask", req, cb)
  }

  /**
   * 查询拨测节点
   */
  async DescribeProbeNodes(
    req: DescribeProbeNodesRequest,
    cb?: (error: string, rep: DescribeProbeNodesResponse) => void
  ): Promise<DescribeProbeNodesResponse> {
    return this.request("DescribeProbeNodes", req, cb)
  }

  /**
   * 查询拨测任务的返回码统计信息
   */
  async GetReturnCodeInfo(
    req: GetReturnCodeInfoRequest,
    cb?: (error: string, rep: GetReturnCodeInfoResponse) => void
  ): Promise<GetReturnCodeInfoResponse> {
    return this.request("GetReturnCodeInfo", req, cb)
  }

  /**
   * 按任务查询拨测告警列表
   */
  async DescribeAlarmsByTask(
    req: DescribeAlarmsByTaskRequest,
    cb?: (error: string, rep: DescribeAlarmsByTaskResponse) => void
  ): Promise<DescribeAlarmsByTaskResponse> {
    return this.request("DescribeAlarmsByTask", req, cb)
  }

  /**
   * 删除拨测任务
   */
  async DeleteProbeTask(
    req: DeleteProbeTaskRequest,
    cb?: (error: string, rep: DeleteProbeTaskResponse) => void
  ): Promise<DeleteProbeTaskResponse> {
    return this.request("DeleteProbeTask", req, cb)
  }

  /**
   * 获取AppId下的拨测任务总数
   */
  async GetTaskTotalNumber(
    req?: GetTaskTotalNumberRequest,
    cb?: (error: string, rep: GetTaskTotalNumberResponse) => void
  ): Promise<GetTaskTotalNumberResponse> {
    return this.request("GetTaskTotalNumber", req, cb)
  }
}
