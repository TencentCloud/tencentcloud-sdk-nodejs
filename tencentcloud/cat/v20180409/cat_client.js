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
const ModifyAgentGroupRequest = models.ModifyAgentGroupRequest;
const AlarmInfo = models.AlarmInfo;
const CreateTaskExResponse = models.CreateTaskExResponse;
const DescribeProbeNodesResponse = models.DescribeProbeNodesResponse;
const RunTaskRequest = models.RunTaskRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const DescribeProbeMetricDataResponse = models.DescribeProbeMetricDataResponse;
const DeleteTasksResponse = models.DeleteTasksResponse;
const CatTaskDetail = models.CatTaskDetail;
const BindAlarmPolicyRequest = models.BindAlarmPolicyRequest;
const DeleteProbeTaskRequest = models.DeleteProbeTaskRequest;
const ResultSummary = models.ResultSummary;
const DescribeDetailedSingleProbeDataResponse = models.DescribeDetailedSingleProbeDataResponse;
const DescribeAlarmsByTaskRequest = models.DescribeAlarmsByTaskRequest;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;
const DescribeUserLimitResponse = models.DescribeUserLimitResponse;
const CreateTaskExRequest = models.CreateTaskExRequest;
const PauseTaskRequest = models.PauseTaskRequest;
const GetResultSummaryRequest = models.GetResultSummaryRequest;
const ProbeTask = models.ProbeTask;
const DataPoint = models.DataPoint;
const DescribeAlarmTopicResponse = models.DescribeAlarmTopicResponse;
const DescribeUserLimitRequest = models.DescribeUserLimitRequest;
const Label = models.Label;
const DescribeAgentsRequest = models.DescribeAgentsRequest;
const KeyValuePair = models.KeyValuePair;
const CatReturnDetail = models.CatReturnDetail;
const IspDetail = models.IspDetail;
const GetReturnCodeInfoRequest = models.GetReturnCodeInfoRequest;
const DescribeAgentsResponse = models.DescribeAgentsResponse;
const CreateAgentGroupResponse = models.CreateAgentGroupResponse;
const DescribeDetailedSingleProbeDataRequest = models.DescribeDetailedSingleProbeDataRequest;
const DeleteAgentGroupResponse = models.DeleteAgentGroupResponse;
const AgentGroup = models.AgentGroup;
const Tag = models.Tag;
const GetReturnCodeHistoryRequest = models.GetReturnCodeHistoryRequest;
const ProvinceDetail = models.ProvinceDetail;
const GetRealAvailRatioResponse = models.GetRealAvailRatioResponse;
const UpdateProbeTaskConfigurationListResponse = models.UpdateProbeTaskConfigurationListResponse;
const CreateAgentGroupRequest = models.CreateAgentGroupRequest;
const ResumeProbeTaskResponse = models.ResumeProbeTaskResponse;
const ModifyTaskExResponse = models.ModifyTaskExResponse;
const DescribeAlarmsByTaskResponse = models.DescribeAlarmsByTaskResponse;
const ModifyTaskExRequest = models.ModifyTaskExRequest;
const ResumeProbeTaskRequest = models.ResumeProbeTaskRequest;
const DescribeTasksByTypeRequest = models.DescribeTasksByTypeRequest;
const NodeDefine = models.NodeDefine;
const GetReturnCodeHistoryResponse = models.GetReturnCodeHistoryResponse;
const GetAvailRatioHistoryRequest = models.GetAvailRatioHistoryRequest;
const GetTaskTotalNumberResponse = models.GetTaskTotalNumberResponse;
const DimensionsDetail = models.DimensionsDetail;
const GetDailyAvailRatioRequest = models.GetDailyAvailRatioRequest;
const CatReturnSummary = models.CatReturnSummary;
const TaskResult = models.TaskResult;
const SuspendProbeTaskResponse = models.SuspendProbeTaskResponse;
const GetRespTimeTrendExResponse = models.GetRespTimeTrendExResponse;
const DataPointMetric = models.DataPointMetric;
const DescribeCatLogsRequest = models.DescribeCatLogsRequest;
const GetAvailRatioHistoryResponse = models.GetAvailRatioHistoryResponse;
const DescribeProbeTasksResponse = models.DescribeProbeTasksResponse;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const DescribeTasksByTypeResponse = models.DescribeTasksByTypeResponse;
const DescribeAlarmTopicRequest = models.DescribeAlarmTopicRequest;
const DescribeAgentGroupsResponse = models.DescribeAgentGroupsResponse;
const SuspendProbeTaskRequest = models.SuspendProbeTaskRequest;
const DescribeProbeMetricDataRequest = models.DescribeProbeMetricDataRequest;
const GetRespTimeTrendExRequest = models.GetRespTimeTrendExRequest;
const UpdateProbeTaskConfigurationListRequest = models.UpdateProbeTaskConfigurationListRequest;
const CreateProbeTasksRequest = models.CreateProbeTasksRequest;
const CatLog = models.CatLog;
const DescribeAgentGroupsRequest = models.DescribeAgentGroupsRequest;
const TaskAlarm = models.TaskAlarm;
const DescribeCatLogsResponse = models.DescribeCatLogsResponse;
const DetailedSingleDataDefine = models.DetailedSingleDataDefine;
const GetReturnCodeInfoResponse = models.GetReturnCodeInfoResponse;
const BindAlarmPolicyResponse = models.BindAlarmPolicyResponse;
const RunTaskResponse = models.RunTaskResponse;
const Field = models.Field;
const ProbeTaskBasicConfiguration = models.ProbeTaskBasicConfiguration;
const VerifyResultRequest = models.VerifyResultRequest;
const GetTaskTotalNumberRequest = models.GetTaskTotalNumberRequest;
const ModifyAgentGroupResponse = models.ModifyAgentGroupResponse;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const GetResultSummaryResponse = models.GetResultSummaryResponse;
const VerifyResultResponse = models.VerifyResultResponse;
const AlarmTopic = models.AlarmTopic;
const DeleteTasksRequest = models.DeleteTasksRequest;
const DescribeProbeTasksRequest = models.DescribeProbeTasksRequest;
const PauseTaskResponse = models.PauseTaskResponse;
const GetDailyAvailRatioResponse = models.GetDailyAvailRatioResponse;
const DeleteAgentGroupRequest = models.DeleteAgentGroupRequest;
const GetRealAvailRatioRequest = models.GetRealAvailRatioRequest;
const DeleteProbeTaskResponse = models.DeleteProbeTaskResponse;
const CreateProbeTasksResponse = models.CreateProbeTasksResponse;
const DescribeProbeNodesRequest = models.DescribeProbeNodesRequest;
const CatAgent = models.CatAgent;


/**
 * cat client
 * @class
 */
class CatClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cat.tencentcloudapi.com", "2018-04-09", credential, region, profile);
    }
    
    /**
     * 暂停拨测任务
     * @param {SuspendProbeTaskRequest} req
     * @param {function(string, SuspendProbeTaskResponse):void} cb
     * @public
     */
    SuspendProbeTask(req, cb) {
        let resp = new SuspendProbeTaskResponse();
        this.request("SuspendProbeTask", req, resp, cb);
    }

    /**
     * 查询拨测任务的走势数据
     * @param {GetRespTimeTrendExRequest} req
     * @param {function(string, GetRespTimeTrendExResponse):void} cb
     * @public
     */
    GetRespTimeTrendEx(req, cb) {
        let resp = new GetRespTimeTrendExResponse();
        this.request("GetRespTimeTrendEx", req, resp, cb);
    }

    /**
     * 修改拨测分组
     * @param {ModifyAgentGroupRequest} req
     * @param {function(string, ModifyAgentGroupResponse):void} cb
     * @public
     */
    ModifyAgentGroup(req, cb) {
        let resp = new ModifyAgentGroupResponse();
        this.request("ModifyAgentGroup", req, resp, cb);
    }

    /**
     * 按类型查询拨测任务列表
     * @param {DescribeTasksByTypeRequest} req
     * @param {function(string, DescribeTasksByTypeResponse):void} cb
     * @public
     */
    DescribeTasksByType(req, cb) {
        let resp = new DescribeTasksByTypeResponse();
        this.request("DescribeTasksByType", req, resp, cb);
    }

    /**
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     * @param {VerifyResultRequest} req
     * @param {function(string, VerifyResultResponse):void} cb
     * @public
     */
    VerifyResult(req, cb) {
        let resp = new VerifyResultResponse();
        this.request("VerifyResult", req, resp, cb);
    }

    /**
     * 创建拨测任务(扩展)
     * @param {CreateTaskExRequest} req
     * @param {function(string, CreateTaskExResponse):void} cb
     * @public
     */
    CreateTaskEx(req, cb) {
        let resp = new CreateTaskExResponse();
        this.request("CreateTaskEx", req, resp, cb);
    }

    /**
     * 暂停拨测任务
     * @param {PauseTaskRequest} req
     * @param {function(string, PauseTaskResponse):void} cb
     * @public
     */
    PauseTask(req, cb) {
        let resp = new PauseTaskResponse();
        this.request("PauseTask", req, resp, cb);
    }

    /**
     * 查询拨测分组列表
     * @param {DescribeAgentGroupsRequest} req
     * @param {function(string, DescribeAgentGroupsResponse):void} cb
     * @public
     */
    DescribeAgentGroups(req, cb) {
        let resp = new DescribeAgentGroupsResponse();
        this.request("DescribeAgentGroups", req, resp, cb);
    }

    /**
     * 获取实时可用率信息
     * @param {GetRealAvailRatioRequest} req
     * @param {function(string, GetRealAvailRatioResponse):void} cb
     * @public
     */
    GetRealAvailRatio(req, cb) {
        let resp = new GetRealAvailRatioResponse();
        this.request("GetRealAvailRatio", req, resp, cb);
    }

    /**
     * 添加拨测分组
     * @param {CreateAgentGroupRequest} req
     * @param {function(string, CreateAgentGroupResponse):void} cb
     * @public
     */
    CreateAgentGroup(req, cb) {
        let resp = new CreateAgentGroupResponse();
        this.request("CreateAgentGroup", req, resp, cb);
    }

    /**
     * 查询拨测任务信息
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 批量创建拨测任务
     * @param {CreateProbeTasksRequest} req
     * @param {function(string, CreateProbeTasksResponse):void} cb
     * @public
     */
    CreateProbeTasks(req, cb) {
        let resp = new CreateProbeTasksResponse();
        this.request("CreateProbeTasks", req, resp, cb);
    }

    /**
     * 查询用户的告警主题列表
     * @param {DescribeAlarmTopicRequest} req
     * @param {function(string, DescribeAlarmTopicResponse):void} cb
     * @public
     */
    DescribeAlarmTopic(req, cb) {
        let resp = new DescribeAlarmTopicResponse();
        this.request("DescribeAlarmTopic", req, resp, cb);
    }

    /**
     * 查询拨测告警列表
     * @param {DescribeAlarmsRequest} req
     * @param {function(string, DescribeAlarmsResponse):void} cb
     * @public
     */
    DescribeAlarms(req, cb) {
        let resp = new DescribeAlarmsResponse();
        this.request("DescribeAlarms", req, resp, cb);
    }

    /**
     * 查询拨测任务的历史返回码信息
     * @param {GetReturnCodeHistoryRequest} req
     * @param {function(string, GetReturnCodeHistoryResponse):void} cb
     * @public
     */
    GetReturnCodeHistory(req, cb) {
        let resp = new GetReturnCodeHistoryResponse();
        this.request("GetReturnCodeHistory", req, resp, cb);
    }

    /**
     * 删除多个拨测任务
     * @param {DeleteTasksRequest} req
     * @param {function(string, DeleteTasksResponse):void} cb
     * @public
     */
    DeleteTasks(req, cb) {
        let resp = new DeleteTasksResponse();
        this.request("DeleteTasks", req, resp, cb);
    }

    /**
     * 获取一天的整体可用率信息
     * @param {GetDailyAvailRatioRequest} req
     * @param {function(string, GetDailyAvailRatioResponse):void} cb
     * @public
     */
    GetDailyAvailRatio(req, cb) {
        let resp = new GetDailyAvailRatioResponse();
        this.request("GetDailyAvailRatio", req, resp, cb);
    }

    /**
     * 列出云拨测指标详细数据
     * @param {DescribeProbeMetricDataRequest} req
     * @param {function(string, DescribeProbeMetricDataResponse):void} cb
     * @public
     */
    DescribeProbeMetricData(req, cb) {
        let resp = new DescribeProbeMetricDataResponse();
        this.request("DescribeProbeMetricData", req, resp, cb);
    }

    /**
     * 恢复拨测任务
     * @param {ResumeProbeTaskRequest} req
     * @param {function(string, ResumeProbeTaskResponse):void} cb
     * @public
     */
    ResumeProbeTask(req, cb) {
        let resp = new ResumeProbeTaskResponse();
        this.request("ResumeProbeTask", req, resp, cb);
    }

    /**
     * 修改拨测任务(扩展)
     * @param {ModifyTaskExRequest} req
     * @param {function(string, ModifyTaskExResponse):void} cb
     * @public
     */
    ModifyTaskEx(req, cb) {
        let resp = new ModifyTaskExResponse();
        this.request("ModifyTaskEx", req, resp, cb);
    }

    /**
     * 查询本用户可选的拨测点列表
     * @param {DescribeAgentsRequest} req
     * @param {function(string, DescribeAgentsResponse):void} cb
     * @public
     */
    DescribeAgents(req, cb) {
        let resp = new DescribeAgentsResponse();
        this.request("DescribeAgents", req, resp, cb);
    }

    /**
     * 获取用户可用资源限制
     * @param {DescribeUserLimitRequest} req
     * @param {function(string, DescribeUserLimitResponse):void} cb
     * @public
     */
    DescribeUserLimit(req, cb) {
        let resp = new DescribeUserLimitResponse();
        this.request("DescribeUserLimit", req, resp, cb);
    }

    /**
     * 查询拨测流水
     * @param {DescribeCatLogsRequest} req
     * @param {function(string, DescribeCatLogsResponse):void} cb
     * @public
     */
    DescribeCatLogs(req, cb) {
        let resp = new DescribeCatLogsResponse();
        this.request("DescribeCatLogs", req, resp, cb);
    }

    /**
     * 批量更新拨测任务配置
     * @param {UpdateProbeTaskConfigurationListRequest} req
     * @param {function(string, UpdateProbeTaskConfigurationListResponse):void} cb
     * @public
     */
    UpdateProbeTaskConfigurationList(req, cb) {
        let resp = new UpdateProbeTaskConfigurationListResponse();
        this.request("UpdateProbeTaskConfigurationList", req, resp, cb);
    }

    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     * @param {DescribeDetailedSingleProbeDataRequest} req
     * @param {function(string, DescribeDetailedSingleProbeDataResponse):void} cb
     * @public
     */
    DescribeDetailedSingleProbeData(req, cb) {
        let resp = new DescribeDetailedSingleProbeDataResponse();
        this.request("DescribeDetailedSingleProbeData", req, resp, cb);
    }

    /**
     * 绑定拨测任务和告警策略组
     * @param {BindAlarmPolicyRequest} req
     * @param {function(string, BindAlarmPolicyResponse):void} cb
     * @public
     */
    BindAlarmPolicy(req, cb) {
        let resp = new BindAlarmPolicyResponse();
        this.request("BindAlarmPolicy", req, resp, cb);
    }

    /**
     * 查询拨测任务列表
     * @param {DescribeProbeTasksRequest} req
     * @param {function(string, DescribeProbeTasksResponse):void} cb
     * @public
     */
    DescribeProbeTasks(req, cb) {
        let resp = new DescribeProbeTasksResponse();
        this.request("DescribeProbeTasks", req, resp, cb);
    }

    /**
     * 获取任务列表的实时数据
     * @param {GetResultSummaryRequest} req
     * @param {function(string, GetResultSummaryResponse):void} cb
     * @public
     */
    GetResultSummary(req, cb) {
        let resp = new GetResultSummaryResponse();
        this.request("GetResultSummary", req, resp, cb);
    }

    /**
     * 删除拨测分组
     * @param {DeleteAgentGroupRequest} req
     * @param {function(string, DeleteAgentGroupResponse):void} cb
     * @public
     */
    DeleteAgentGroup(req, cb) {
        let resp = new DeleteAgentGroupResponse();
        this.request("DeleteAgentGroup", req, resp, cb);
    }

    /**
     * 获取指定时刻的可用率地图信息
     * @param {GetAvailRatioHistoryRequest} req
     * @param {function(string, GetAvailRatioHistoryResponse):void} cb
     * @public
     */
    GetAvailRatioHistory(req, cb) {
        let resp = new GetAvailRatioHistoryResponse();
        this.request("GetAvailRatioHistory", req, resp, cb);
    }

    /**
     * 运行拨测任务
     * @param {RunTaskRequest} req
     * @param {function(string, RunTaskResponse):void} cb
     * @public
     */
    RunTask(req, cb) {
        let resp = new RunTaskResponse();
        this.request("RunTask", req, resp, cb);
    }

    /**
     * 查询拨测节点
     * @param {DescribeProbeNodesRequest} req
     * @param {function(string, DescribeProbeNodesResponse):void} cb
     * @public
     */
    DescribeProbeNodes(req, cb) {
        let resp = new DescribeProbeNodesResponse();
        this.request("DescribeProbeNodes", req, resp, cb);
    }

    /**
     * 查询拨测任务的返回码统计信息
     * @param {GetReturnCodeInfoRequest} req
     * @param {function(string, GetReturnCodeInfoResponse):void} cb
     * @public
     */
    GetReturnCodeInfo(req, cb) {
        let resp = new GetReturnCodeInfoResponse();
        this.request("GetReturnCodeInfo", req, resp, cb);
    }

    /**
     * 按任务查询拨测告警列表
     * @param {DescribeAlarmsByTaskRequest} req
     * @param {function(string, DescribeAlarmsByTaskResponse):void} cb
     * @public
     */
    DescribeAlarmsByTask(req, cb) {
        let resp = new DescribeAlarmsByTaskResponse();
        this.request("DescribeAlarmsByTask", req, resp, cb);
    }

    /**
     * 删除拨测任务
     * @param {DeleteProbeTaskRequest} req
     * @param {function(string, DeleteProbeTaskResponse):void} cb
     * @public
     */
    DeleteProbeTask(req, cb) {
        let resp = new DeleteProbeTaskResponse();
        this.request("DeleteProbeTask", req, resp, cb);
    }

    /**
     * 获取AppId下的拨测任务总数
     * @param {GetTaskTotalNumberRequest} req
     * @param {function(string, GetTaskTotalNumberResponse):void} cb
     * @public
     */
    GetTaskTotalNumber(req, cb) {
        let resp = new GetTaskTotalNumberResponse();
        this.request("GetTaskTotalNumber", req, resp, cb);
    }


}
module.exports = CatClient;
