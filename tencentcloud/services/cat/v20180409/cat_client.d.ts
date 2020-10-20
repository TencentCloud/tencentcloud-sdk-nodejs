import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetReturnCodeInfoResponse, ModifyAgentGroupRequest, BindAlarmPolicyResponse, GetDailyAvailRatioRequest, ModifyTaskExResponse, DescribeAgentsRequest, RunTaskRequest, GetRespTimeTrendExResponse, ModifyAgentGroupResponse, DescribeTaskDetailResponse, GetReturnCodeInfoRequest, DescribeCatLogsRequest, DescribeAgentsResponse, GetAvailRatioHistoryResponse, CreateAgentGroupResponse, DeleteTasksResponse, DescribeAlarmsResponse, GetRealAvailRatioRequest, DeleteAgentGroupResponse, DescribeTaskDetailRequest, DescribeTasksByTypeResponse, GetResultSummaryResponse, GetReturnCodeHistoryRequest, BindAlarmPolicyRequest, DescribeAgentGroupsResponse, PauseTaskRequest, GetResultSummaryRequest, DescribeAlarmsRequest, DescribeUserLimitResponse, GetRespTimeTrendExRequest, DeleteTasksRequest, DescribeAlarmsByTaskRequest, PauseTaskResponse, CreateAgentGroupRequest, GetDailyAvailRatioResponse, DeleteAgentGroupRequest, GetAvailRatioHistoryRequest, DescribeAgentGroupsRequest, DescribeAlarmsByTaskResponse, ModifyTaskExRequest, DescribeAlarmTopicRequest, CreateTaskExRequest, GetTaskTotalNumberRequest, DescribeTasksByTypeRequest, VerifyResultRequest, VerifyResultResponse, GetReturnCodeHistoryResponse, DescribeAlarmTopicResponse, GetRealAvailRatioResponse, RunTaskResponse, DescribeCatLogsResponse, GetTaskTotalNumberResponse, CreateTaskExResponse, DescribeUserLimitRequest } from "./cat_models";
/**
 * cat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询拨测任务的走势数据
     */
    GetRespTimeTrendEx(req: GetRespTimeTrendExRequest, cb?: (error: string, rep: GetRespTimeTrendExResponse) => void): Promise<GetRespTimeTrendExResponse>;
    /**
     * 修改拨测分组
     */
    ModifyAgentGroup(req: ModifyAgentGroupRequest, cb?: (error: string, rep: ModifyAgentGroupResponse) => void): Promise<ModifyAgentGroupResponse>;
    /**
     * 按类型查询拨测任务列表
     */
    DescribeTasksByType(req: DescribeTasksByTypeRequest, cb?: (error: string, rep: DescribeTasksByTypeResponse) => void): Promise<DescribeTasksByTypeResponse>;
    /**
     * 创建拨测任务(扩展)
     */
    CreateTaskEx(req: CreateTaskExRequest, cb?: (error: string, rep: CreateTaskExResponse) => void): Promise<CreateTaskExResponse>;
    /**
     * 暂停拨测任务
     */
    PauseTask(req: PauseTaskRequest, cb?: (error: string, rep: PauseTaskResponse) => void): Promise<PauseTaskResponse>;
    /**
     * 查询拨测分组列表
     */
    DescribeAgentGroups(req?: DescribeAgentGroupsRequest, cb?: (error: string, rep: DescribeAgentGroupsResponse) => void): Promise<DescribeAgentGroupsResponse>;
    /**
     * 获取实时可用率信息
     */
    GetRealAvailRatio(req: GetRealAvailRatioRequest, cb?: (error: string, rep: GetRealAvailRatioResponse) => void): Promise<GetRealAvailRatioResponse>;
    /**
     * 添加拨测分组
     */
    CreateAgentGroup(req: CreateAgentGroupRequest, cb?: (error: string, rep: CreateAgentGroupResponse) => void): Promise<CreateAgentGroupResponse>;
    /**
     * 查询拨测任务信息
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 查询用户的告警主题列表
     */
    DescribeAlarmTopic(req: DescribeAlarmTopicRequest, cb?: (error: string, rep: DescribeAlarmTopicResponse) => void): Promise<DescribeAlarmTopicResponse>;
    /**
     * 查询拨测告警列表
     */
    DescribeAlarms(req: DescribeAlarmsRequest, cb?: (error: string, rep: DescribeAlarmsResponse) => void): Promise<DescribeAlarmsResponse>;
    /**
     * 查询拨测任务的历史返回码信息
     */
    GetReturnCodeHistory(req: GetReturnCodeHistoryRequest, cb?: (error: string, rep: GetReturnCodeHistoryResponse) => void): Promise<GetReturnCodeHistoryResponse>;
    /**
     * 删除多个拨测任务
     */
    DeleteTasks(req: DeleteTasksRequest, cb?: (error: string, rep: DeleteTasksResponse) => void): Promise<DeleteTasksResponse>;
    /**
     * 获取一天的整体可用率信息
     */
    GetDailyAvailRatio(req: GetDailyAvailRatioRequest, cb?: (error: string, rep: GetDailyAvailRatioResponse) => void): Promise<GetDailyAvailRatioResponse>;
    /**
     * 修改拨测任务(扩展)
     */
    ModifyTaskEx(req: ModifyTaskExRequest, cb?: (error: string, rep: ModifyTaskExResponse) => void): Promise<ModifyTaskExResponse>;
    /**
     * 查询本用户可选的拨测点列表
     */
    DescribeAgents(req?: DescribeAgentsRequest, cb?: (error: string, rep: DescribeAgentsResponse) => void): Promise<DescribeAgentsResponse>;
    /**
     * 获取用户可用资源限制
     */
    DescribeUserLimit(req?: DescribeUserLimitRequest, cb?: (error: string, rep: DescribeUserLimitResponse) => void): Promise<DescribeUserLimitResponse>;
    /**
     * 查询拨测流水
     */
    DescribeCatLogs(req: DescribeCatLogsRequest, cb?: (error: string, rep: DescribeCatLogsResponse) => void): Promise<DescribeCatLogsResponse>;
    /**
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     */
    VerifyResult(req: VerifyResultRequest, cb?: (error: string, rep: VerifyResultResponse) => void): Promise<VerifyResultResponse>;
    /**
     * 绑定拨测任务和告警策略组
     */
    BindAlarmPolicy(req: BindAlarmPolicyRequest, cb?: (error: string, rep: BindAlarmPolicyResponse) => void): Promise<BindAlarmPolicyResponse>;
    /**
     * 获取任务列表的实时数据
     */
    GetResultSummary(req: GetResultSummaryRequest, cb?: (error: string, rep: GetResultSummaryResponse) => void): Promise<GetResultSummaryResponse>;
    /**
     * 删除拨测分组
     */
    DeleteAgentGroup(req: DeleteAgentGroupRequest, cb?: (error: string, rep: DeleteAgentGroupResponse) => void): Promise<DeleteAgentGroupResponse>;
    /**
     * 获取指定时刻的可用率地图信息
     */
    GetAvailRatioHistory(req: GetAvailRatioHistoryRequest, cb?: (error: string, rep: GetAvailRatioHistoryResponse) => void): Promise<GetAvailRatioHistoryResponse>;
    /**
     * 运行拨测任务
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 查询拨测任务的返回码统计信息
     */
    GetReturnCodeInfo(req: GetReturnCodeInfoRequest, cb?: (error: string, rep: GetReturnCodeInfoResponse) => void): Promise<GetReturnCodeInfoResponse>;
    /**
     * 按任务查询拨测告警列表
     */
    DescribeAlarmsByTask(req: DescribeAlarmsByTaskRequest, cb?: (error: string, rep: DescribeAlarmsByTaskResponse) => void): Promise<DescribeAlarmsByTaskResponse>;
    /**
     * 获取AppId下的拨测任务总数
     */
    GetTaskTotalNumber(req?: GetTaskTotalNumberRequest, cb?: (error: string, rep: GetTaskTotalNumberResponse) => void): Promise<GetTaskTotalNumberResponse>;
}
