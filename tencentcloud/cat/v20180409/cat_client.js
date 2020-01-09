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
const RunTaskRequest = models.RunTaskRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const DeleteTasksResponse = models.DeleteTasksResponse;
const DescribeAlarmGroupsResponse = models.DescribeAlarmGroupsResponse;
const GetRespTimeTrendResponse = models.GetRespTimeTrendResponse;
const ResultSummary = models.ResultSummary;
const BindAlarmPolicyRequest = models.BindAlarmPolicyRequest;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeAlarmsByTaskRequest = models.DescribeAlarmsByTaskRequest;
const PauseTaskRequest = models.PauseTaskRequest;
const GetResultSummaryRequest = models.GetResultSummaryRequest;
const CreateTaskExRequest = models.CreateTaskExRequest;
const DataPoint = models.DataPoint;
const DescribeAlarmTopicResponse = models.DescribeAlarmTopicResponse;
const ModifyAlarmPloicyRequest = models.ModifyAlarmPloicyRequest;
const DescribeUserLimitRequest = models.DescribeUserLimitRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeAgentsRequest = models.DescribeAgentsRequest;
const CatReturnDetail = models.CatReturnDetail;
const IspDetail = models.IspDetail;
const GetReturnCodeInfoRequest = models.GetReturnCodeInfoRequest;
const DescribeAgentsResponse = models.DescribeAgentsResponse;
const CreateAgentGroupResponse = models.CreateAgentGroupResponse;
const DeleteAgentGroupResponse = models.DeleteAgentGroupResponse;
const AgentGroup = models.AgentGroup;
const CreateAlarmPloicyResponse = models.CreateAlarmPloicyResponse;
const GetReturnCodeHistoryRequest = models.GetReturnCodeHistoryRequest;
const ProvinceDetail = models.ProvinceDetail;
const GetRealAvailRatioResponse = models.GetRealAvailRatioResponse;
const CatTask = models.CatTask;
const CreateTaskRequest = models.CreateTaskRequest;
const CreateAgentGroupRequest = models.CreateAgentGroupRequest;
const CreateAlarmPloicyRequest = models.CreateAlarmPloicyRequest;
const ModifyTaskExResponse = models.ModifyTaskExResponse;
const DescribeAlarmsByTaskResponse = models.DescribeAlarmsByTaskResponse;
const ModifyTaskExRequest = models.ModifyTaskExRequest;
const DescribeTasksByTypeRequest = models.DescribeTasksByTypeRequest;
const CreateTaskExResponse = models.CreateTaskExResponse;
const GetReturnCodeHistoryResponse = models.GetReturnCodeHistoryResponse;
const GetAvailRatioHistoryRequest = models.GetAvailRatioHistoryRequest;
const GetTaskTotalNumberResponse = models.GetTaskTotalNumberResponse;
const DimensionsDetail = models.DimensionsDetail;
const ModifyAlarmPloicyResponse = models.ModifyAlarmPloicyResponse;
const GetDailyAvailRatioRequest = models.GetDailyAvailRatioRequest;
const DescribeAgentGroupResponse = models.DescribeAgentGroupResponse;
const CatReturnSummary = models.CatReturnSummary;
const GetRespTimeTrendExResponse = models.GetRespTimeTrendExResponse;
const DataPointMetric = models.DataPointMetric;
const DescribeCatLogsRequest = models.DescribeCatLogsRequest;
const GetAvailRatioHistoryResponse = models.GetAvailRatioHistoryResponse;
const DescribeAgentGroupRequest = models.DescribeAgentGroupRequest;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const DescribeTasksByTypeResponse = models.DescribeTasksByTypeResponse;
const DescribeAlarmTopicRequest = models.DescribeAlarmTopicRequest;
const DescribeAgentGroupsResponse = models.DescribeAgentGroupsResponse;
const ModifyTaskResponse = models.ModifyTaskResponse;
const AlarmGroupInfo = models.AlarmGroupInfo;
const GetRespTimeTrendExRequest = models.GetRespTimeTrendExRequest;
const GetRespTimeTrendRequest = models.GetRespTimeTrendRequest;
const DescribeAgentGroupsRequest = models.DescribeAgentGroupsRequest;
const TaskAlarm = models.TaskAlarm;
const DescribeCatLogsResponse = models.DescribeCatLogsResponse;
const CatTaskDetail = models.CatTaskDetail;
const GetReturnCodeInfoResponse = models.GetReturnCodeInfoResponse;
const BindAlarmPolicyResponse = models.BindAlarmPolicyResponse;
const RunTaskResponse = models.RunTaskResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const VerifyResultRequest = models.VerifyResultRequest;
const GetTaskTotalNumberRequest = models.GetTaskTotalNumberRequest;
const ModifyAgentGroupResponse = models.ModifyAgentGroupResponse;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const ModifyTaskRequest = models.ModifyTaskRequest;
const GetResultSummaryResponse = models.GetResultSummaryResponse;
const VerifyResultResponse = models.VerifyResultResponse;
const AlarmTopic = models.AlarmTopic;
const DescribeTaskRequest = models.DescribeTaskRequest;
const DescribeUserLimitResponse = models.DescribeUserLimitResponse;
const DescribeAlarmGroupsRequest = models.DescribeAlarmGroupsRequest;
const DeleteTasksRequest = models.DeleteTasksRequest;
const PauseTaskResponse = models.PauseTaskResponse;
const GetDailyAvailRatioResponse = models.GetDailyAvailRatioResponse;
const DeleteAgentGroupRequest = models.DeleteAgentGroupRequest;
const GetRealAvailRatioRequest = models.GetRealAvailRatioRequest;
const CatLog = models.CatLog;
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
     * 创建拨测任务（创建任务并发起验证）

操作提示：
下一步，请通过VerifyCatResult 接口，验证一下拨测验证是否成功。如果成功，则可通过RunTask 接口运行该任务。

     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
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
     * 查询拨测任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
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
     * 创建拨测任务(扩充)
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
     * 修改 拨测任务。
如果验证未成功，请先验证成功。避免修改为失败率100%的拨测任务。

     * @param {ModifyTaskRequest} req
     * @param {function(string, ModifyTaskResponse):void} cb
     * @public
     */
    ModifyTask(req, cb) {
        let resp = new ModifyTaskResponse();
        this.request("ModifyTask", req, resp, cb);
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
     * 查询拨测任务详情
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
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
     * 查询拨测分组详情
     * @param {DescribeAgentGroupRequest} req
     * @param {function(string, DescribeAgentGroupResponse):void} cb
     * @public
     */
    DescribeAgentGroup(req, cb) {
        let resp = new DescribeAgentGroupResponse();
        this.request("DescribeAgentGroup", req, resp, cb);
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
     * 查询用户的告警接收组列表
     * @param {DescribeAlarmGroupsRequest} req
     * @param {function(string, DescribeAlarmGroupsResponse):void} cb
     * @public
     */
    DescribeAlarmGroups(req, cb) {
        let resp = new DescribeAlarmGroupsResponse();
        this.request("DescribeAlarmGroups", req, resp, cb);
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
     * 为拨测任务修改告警策略
     * @param {ModifyAlarmPloicyRequest} req
     * @param {function(string, ModifyAlarmPloicyResponse):void} cb
     * @public
     */
    ModifyAlarmPloicy(req, cb) {
        let resp = new ModifyAlarmPloicyResponse();
        this.request("ModifyAlarmPloicy", req, resp, cb);
    }

    /**
     * 查询拨测任务的统计数据
     * @param {GetRespTimeTrendRequest} req
     * @param {function(string, GetRespTimeTrendResponse):void} cb
     * @public
     */
    GetRespTimeTrend(req, cb) {
        let resp = new GetRespTimeTrendResponse();
        this.request("GetRespTimeTrend", req, resp, cb);
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
     * 为拨测任务创建告警策略
     * @param {CreateAlarmPloicyRequest} req
     * @param {function(string, CreateAlarmPloicyResponse):void} cb
     * @public
     */
    CreateAlarmPloicy(req, cb) {
        let resp = new CreateAlarmPloicyResponse();
        this.request("CreateAlarmPloicy", req, resp, cb);
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
